/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9281],
    {
      21438: (z, Z, a) => {
        "use strict";
        a.d(Z, { A4: () => u, LU: () => g, sK: () => x });
        var e = a(7850),
          E = a(90626),
          B = a(36631),
          G = a(3166);
        const b = {
            editModel: null,
            bClanImagesV2: !1,
            setClanImagesV2: void 0,
          },
          I = E.createContext(b);
        function u(c) {
          const { children: C, editModel: M } = c,
            { bClanImagesV2: q, setClanImagesV2: y } = r();
          return (0, e.jsx)(I.Provider, {
            value: { ...b, editModel: M, bClanImagesV2: q, setClanImagesV2: y },
            children: (0, e.jsx)(B.Cs, { location: B.uF, children: C }),
          });
        }
        function R() {
          return E.useContext(I);
        }
        function g() {
          return R().editModel;
        }
        function r() {
          const c = "storeUseClanImagesV2",
            [C, M] = E.useState(() => !!localStorage.getItem(c)),
            q = E.useCallback((y) => {
              y ? localStorage.setItem(c, "1") : localStorage.removeItem(c),
                M(y);
            }, []);
          return { bClanImagesV2: C, setClanImagesV2: q };
        }
        function x() {
          const c = E.useContext(I),
            C = !1;
          return {
            bClanImagesV2: c.bClanImagesV2 && C,
            bClanImagesV2Allowed: C,
            setClanImagesV2: c.setClanImagesV2,
          };
        }
      },
      4748: (z, Z, a) => {
        "use strict";
        a.d(Z, { G: () => ee });
        var e = a(7850),
          E = a(99412),
          B = a(41735),
          G = a.n(B),
          b = a(75844),
          I = a(65946),
          u = a(90626),
          R = a(19316),
          g = a(89084),
          r = a(75909),
          x = a(72805),
          c = a(55486),
          C = a.n(c),
          M = a(38745),
          q = a(85096),
          y = a(95695),
          le = a.n(y),
          N = a(2801),
          p = a(88003),
          L = a(85599),
          l = a(34592),
          F = a(36707),
          n = a(18210),
          J = a(54963),
          d = a(96043),
          H = a(40888),
          v = a.n(H),
          w = a(39905);
        function j(t) {
          const s = (0, u.useRef)(null);
          (0, u.useEffect)(() => {
            var U;
            (U = s.current) == null || U.showModal();
            const A = document.body.style.overflow;
            return (
              (document.body.style.overflow = "hidden"),
              () => {
                document.body.style.overflow = A;
              }
            );
          }, []);
          let o = "";
          typeof t.imageTitle == "string" && (o = t.imageTitle);
          const _ =
              typeof t.prevSrc == "string"
                ? (0, e.jsx)("img", { src: t.prevSrc, alt: "" })
                : t.prevSrc,
            h =
              typeof t.mainSrc == "string"
                ? (0, e.jsx)("img", { src: t.mainSrc, alt: o })
                : t.mainSrc,
            O =
              typeof t.nextSrc == "string"
                ? (0, e.jsx)("img", { src: t.nextSrc, alt: "" })
                : t.nextSrc,
            Y = [
              v().LightboxDialog,
              ...(t.backgroundClassName ? [t.backgroundClassName] : []),
            ];
          return (0, e.jsxs)("dialog", {
            ref: s,
            className: (0, F.A)(...Y),
            onClose: (U) => t.onCloseRequest(U),
            onKeyDown: (U) => {
              U.key === "ArrowRight" && t.nextSrc
                ? t.onMoveNextRequest(U)
                : U.key === "ArrowLeft" && t.prevSrc && t.onMovePrevRequest(U);
            },
            children: [
              t.prevSrc &&
                (0, e.jsx)("div", {
                  className: (0, F.A)(
                    v().LightboxImageContainer,
                    v().LightboxPrevImage,
                  ),
                  children: _,
                }),
              (0, e.jsx)("div", {
                className: (0, F.A)(
                  v().LightboxImageContainer,
                  v().LightboxMainImage,
                ),
                role: "presentation",
                onClick: (U) => {
                  U.target.nodeName !== "IMG" && t.onCloseRequest(U);
                },
                children: h,
              }),
              t.nextSrc &&
                (0, e.jsx)("div", {
                  className: (0, F.A)(
                    v().LightboxImageContainer,
                    v().LightboxNextImage,
                  ),
                  children: O,
                }),
              (0, e.jsxs)("div", {
                className: v().LightboxToolbar,
                children: [
                  (0, e.jsx)("span", {
                    className: v().LightboxImageTitle,
                    children: t.imageTitle,
                  }),
                  (0, e.jsxs)("div", {
                    className: v().LightboxToolbarButtons,
                    children: [
                      t.toolbarButtons,
                      (0, e.jsx)("button", {
                        className: v().LightboxCloseButton,
                        onClick: t.onCloseRequest,
                        "aria-label": w.Z.Localize("#Button_Close"),
                      }),
                    ],
                  }),
                ],
              }),
              t.prevSrc &&
                (0, e.jsx)("button", {
                  className: v().LightboxLeftButton,
                  onClick: t.onMovePrevRequest,
                  "aria-label": w.Z.Localize("#Carousel_Prev"),
                }),
              t.nextSrc &&
                (0, e.jsx)("button", {
                  className: v().LightboxRightButton,
                  onClick: t.onMoveNextRequest,
                  "aria-label": w.Z.Localize("#Carousel_Next"),
                }),
            ],
          });
        }
        var V = a(21438),
          k = a(53424);
        let S = 1;
        const ee = (0, b.PA)((t) => {
          const {
              clanSteamID: s,
              appid: o,
              imageInsertCallBack: _,
              partnerEventStore: h,
              bHideDragAndDrop: O,
              bShowLightBox: Y,
              fnSetImageURL: U,
              rgRealmList: A,
              fnLangHasData: Ee,
              fnGetImageHash: Ie,
            } = t,
            [de, Ce] = u.useState(""),
            [oe, me] = u.useState(0),
            [$, ae] = u.useState(),
            [te, _e] = u.useState(void 0),
            [W, ne] = u.useState(!k.pU.BHasLoadedClanImages(s)),
            [xe, Te] = u.useState(void 0),
            Ae = (0, J.YR)(() => G().CancelToken.source());
          u.useEffect(
            () => () => Ae.cancel("ClanImagePicker component unmounted"),
            [Ae],
          );
          const Re = (0, J.YR)(() => new Map()),
            [pe, fe] = (0, u.useState)(null),
            { bClanImagesV2: Oe } = (0, V.sK)(),
            ye = s.GetAccountID(),
            Se = u.useCallback(
              () => k.pU.LoadClanImages(s, !1, Ae.token),
              [Ae, ye],
            ),
            i = u.useCallback(async () => {
              if (!Re.has(s.GetAccountID()))
                try {
                  await Se(), Ae.token.reason || ne(!1);
                } catch (ge) {
                  let ie = (0, l.H)(ge);
                  console.error(
                    "ClanImagePicker Failed: " +
                      ie.strErrorMsg +
                      " errCode: " +
                      ie.strErrorMsg,
                  ),
                    Re.set(s.GetAccountID(), ie.strErrorMsg),
                    Ae.token.reason || (ne(!1), Te(ie.strErrorMsg));
                }
            }, [Ae, s, Re, Se]);
          u.useEffect(() => {
            W && i();
          }, [i, W]);
          const f = u.useCallback(() => {
            ne(!0), i();
          }, [i]);
          u.useEffect(() => {
            f();
          }, [ye, f]);
          const D = k.pU.BHasLoadedClanImages(s);
          u.useEffect(() => {
            D || f();
          }, [D, f]);
          const m = () => {
              Ce(de), me(null);
            },
            K = async (ge) => {
              if (ge && ge.length > 0) {
                const ie = Oe ? new r.vN(s, null) : new r.VE(s, null);
                fe(ie);
                let se = !0,
                  Me = Array.from(ge);
                for (let he = 0; se && he < Me.length; he++) {
                  let re = Me[he];
                  (se = await ie.AddImage(re, E.Bhc)),
                    se ||
                      (console.error(
                        "ClanImagePicker.OnDropFiles: failed on i=" +
                          he +
                          " file=" +
                          re.name,
                      ),
                      (0, p.pg)(
                        (0, e.jsx)(N.KG, {
                          strDescription: (0, n.we)(
                            "#ImagePicker_Error",
                            re.name,
                          ),
                        }),
                        window,
                      ));
                }
                return se && (Ce(""), me(++S), ie.UploadAllImages()), se;
              }
              return !1;
            },
            T = (ge) => {
              if (ge && Y) {
                let ie = k.pU.GetFilteredClanImages(s, de.trim().toLowerCase()),
                  se = ie.findIndex((Me, he, re) => ge.imageid == Me.imageid);
                se >= 0 && (ae(se), _e(ie));
              }
            },
            Q = () => {
              ae(void 0), _e(void 0);
            },
            De = (ge) => {
              if ($ != null) {
                const ie = te[$];
                Q(),
                  requestAnimationFrame(() => {
                    _(ie, ge);
                  });
              }
            },
            ue = () => {
              De(g._o.k_eInsertFullImage);
            },
            je = () => {
              De(g._o.k_eInsertThumbnail);
            },
            ve = (ge) => {
              (0, p.pg)(
                (0, e.jsx)(d.$, {
                  primaryLocalizedImage: ge,
                  appid: o,
                  clanSteamID: s,
                  fnSetImageURL: U,
                  rgRealmList: A,
                  fnLangHasData: Ee,
                  fnGetImageHash: Ie,
                  partnerEventStore: h,
                }),
                window,
              );
            };
          if (xe)
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", { children: (0, n.we)("#Error_Message") }),
                (0, e.jsx)("div", { children: xe }),
                (0, e.jsx)("div", {
                  className: (0, F.A)(le().Button),
                  onClick: i,
                  children: (0, n.we)("#Button_Retry"),
                }),
              ],
            });
          if (W)
            return (0, e.jsx)(L.t, {
              position: "center",
              string: (0, n.we)("#Loading"),
            });
          let Pe = te;
          return (0, e.jsxs)("div", {
            className: (0, F.A)(C().PickerContainer),
            children: [
              (0, e.jsx)(q.g, { fnSetImageSearch: (ge) => Ce(ge) }),
              (0, e.jsx)("div", {
                className: C().ImagesContainer,
                children: (0, e.jsx)(x.GF, {
                  clanAccountID: s.GetAccountID(),
                  fileNameSearch: de,
                  imageInsertCallBack: _,
                  fnOnExpandImage: T,
                  InternalOpenLocalizeImageGroup: ve,
                }),
              }),
              oe > 0 &&
                (0, e.jsx)(
                  P,
                  { uploader: pe, onDismiss: m },
                  "clanimageuploaderview" + oe,
                ),
              !O && (0, e.jsx)(M.D, { onDropFiles: K }),
              $ != null &&
                (0, e.jsx)(j, {
                  mainSrc: Pe[$].url,
                  imageTitle: Pe[$].file_name,
                  nextSrc: $ < Pe.length - 1 ? Pe[$ + 1].url : void 0,
                  prevSrc: $ > 0 ? Pe[$ - 1].url : void 0,
                  onMoveNextRequest: () => ae($ + 1),
                  onMovePrevRequest: () => ae($ - 1),
                  onCloseRequest: Q,
                  toolbarButtons: [
                    (0, e.jsx)(
                      "button",
                      {
                        className: C().Full,
                        onClick: ue,
                        children: (0, n.we)("#ImagePicker_FullSize"),
                      },
                      "fullsize",
                    ),
                    (0, e.jsx)(
                      "button",
                      {
                        className: C().Full,
                        onClick: je,
                        children: (0, n.we)("#ImagePicker_Thumbnail"),
                      },
                      "thumbnail",
                    ),
                  ],
                }),
              (0, e.jsx)(X, {}),
            ],
          });
        });
        function X(t) {
          const {
            bClanImagesV2: s,
            bClanImagesV2Allowed: o,
            setClanImagesV2: _,
          } = (0, V.sK)();
          return (0, e.jsx)(e.Fragment, {
            children:
              o &&
              _ &&
              (0, e.jsx)(R.Yh, {
                className: C().EnableClanImagesV2,
                label: "New media conversion",
                checked: s,
                onChange: (h) => _(h),
              }),
          });
        }
        function P(t) {
          const { uploader: s, onDismiss: o } = t,
            [_, h] = (0, I.q3)(() => [
              s.BAllDone(),
              !s.BAllDone() && !s.BHasError(),
            ]),
            O = s.GetLastErrorFile();
          return (0, e.jsxs)("div", {
            className: C().UploaderContainer,
            children: [
              h &&
                (0, e.jsxs)("div", {
                  className: C().UploaderRunning,
                  children: [
                    (0, e.jsx)("div", {
                      className: C().UploaderDesc,
                      children: (0, n.we)(
                        "#ImageUpload_Desc",
                        s.GetCompletedFiles(),
                        s.GetTotalFiles(),
                      ),
                    }),
                    (0, e.jsx)("button", {
                      className: "DialogButton",
                      onClick: () => {
                        s.CancelAllUploads(), o();
                      },
                      children: (0, n.we)("#Button_Cancel"),
                    }),
                  ],
                }),
              s.BHasError() &&
                O &&
                (0, e.jsxs)("div", {
                  className: C().UploadMessageAndButtonsContainer,
                  children: [
                    (0, e.jsx)("div", {
                      className: C().UploadError,
                      children: (0, n.we)(
                        "#ImageUpload_Error",
                        O.file.name,
                        O.status,
                        O.message,
                      ),
                    }),
                    (0, e.jsx)("button", {
                      className: C().UploadButtonCancel,
                      onClick: o,
                      children: (0, n.we)("#Button_Cancel"),
                    }),
                    (0, e.jsx)("button", {
                      className: C().UploadButtonRetry,
                      onClick: () => s.RetryAllFailedUploads(),
                      children: (0, n.we)("#Button_Retry"),
                    }),
                  ],
                }),
              !!_ &&
                (0, e.jsx)("div", {
                  className: C().UploadMessageAndButtonsContainer,
                  children: (0, e.jsx)("div", {
                    className: C().UploadSuccess,
                    children: (0, n.we)("#ImageUpload_Success"),
                  }),
                }),
            ],
          });
        }
      },
      96043: (z, Z, a) => {
        "use strict";
        a.d(Z, { $: () => J });
        var e = a(7850),
          E = a(72604),
          B = a(41735),
          G = a.n(B),
          b = a(75844),
          I = a(90626),
          u = a(76559),
          R = a(35524),
          g = a(19316),
          r = a(9709),
          x = a.n(r),
          c = a(95682),
          C = a(95695),
          M = a.n(C),
          q = a(2801),
          y = a(85599),
          le = a(34592),
          N = a(18210),
          p = a(54963),
          L = a(79573),
          l = a(11243),
          F = a(51746),
          n = a(29630);
        const J = (0, b.PA)((d) => {
          const {
              closeModal: H,
              appid: v,
              partnerEventStore: w,
              primaryLocalizedImage: j,
              clanSteamID: V,
              fnSetImageURL: k,
              rgRealmList: S,
              fnLangHasData: ee,
              fnGetImageHash: X,
            } = d,
            [P, t] = I.useState(),
            [s, o] = I.useState(!0),
            [_, h] = I.useState(),
            O = (0, p.YR)(() => G().CancelToken.source());
          I.useEffect(
            () => () => O.cancel("LocalizedImageDialog component unmounted"),
            [O],
          );
          const Y = I.useCallback(async () => {
              var $;
              try {
                const ae = u.b.InitFromClanID(j.clanAccountID),
                  te = await n.zU.AsyncGetImageResolution(
                    ae,
                    j.image_hash,
                    j.file_type,
                    O,
                    !1,
                  );
                if (O.token.reason) return;
                if (te.success != E.R || !te.width || !te.height) {
                  console.error(
                    "LocalizedImageDialog : failed to determine the primary image resolution. " +
                      (($ = te.err_msg) != null ? $ : ""),
                  ),
                    h({ strMsg: te.err_msg });
                  return;
                }
                h(void 0), t(te);
              } catch (ae) {
                let te = (0, le.H)(ae);
                console.error("LocalizedImageDialog : " + te.strErrorMsg, te),
                  h({ strMsg: te.strErrorMsg });
              }
            }, [O, j.clanAccountID, j.file_type, j.image_hash]),
            U = I.useCallback(async () => {
              try {
                await R.R.DetermineAvailableLocalizationForGroup(O),
                  O.token.reason || o(!1);
              } catch ($) {
                let ae = (0, le.H)($);
                console.error("LocalizedImageDialog : " + ae.strErrorMsg, ae);
              }
            }, [O]),
            A = I.useCallback(() => Y().then(U), [U, Y]),
            Ee = I.useCallback(() => {
              h(void 0), A();
            }, [A]);
          I.useEffect(() => {
            H &&
              (R.R.SetPrimaryImageForImageGroup(j, "localized_image_group"),
              A());
          }, [H, A, j]);
          const Ie = !s && P,
            de = P ? ` - ${P.width}x${P.height}` : "",
            Ce = (0, F.EG)(j.file_type).slice(1),
            oe =
              P != null && P.width && P != null && P.height
                ? { width: P.width, height: P.height }
                : void 0,
            me = n.zU.GenerateURLFromHashAndExt(V, n.zU.GetHashAndExt(j));
          return (0, e.jsx)(q.eV, {
            bAllowFullSize: !0,
            title: (0, N.we)("#ImagePickerLoc_Title"),
            onCancel: H,
            closeModal: H,
            children: (0, e.jsx)(g.nB, {
              children: (0, e.jsxs)(g.a3, {
                children: [
                  (0, e.jsx)("div", {
                    className: M().FlexRowContainer,
                    children: (0, e.jsxs)("span", {
                      className: M().FlexColumnContainer,
                      children: [
                        (0, e.jsxs)("div", {
                          children: [
                            (0, N.we)("#ImagePickerLoc_Default"),
                            (0, e.jsx)(l.o, {
                              tooltip: (0, N.we)(
                                "#ImagePickerLoc_Default_Hint",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsx)("img", { className: r.TitleImg, src: me }),
                        (0, e.jsx)("div", {
                          children: j.file_name + de + " - " + Ce,
                        }),
                      ],
                    }),
                  }),
                  !!_ &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, N.we)("#Error_Message"),
                        }),
                        !!(_ != null && _.strMsg) &&
                          (0, e.jsx)("div", { children: _.strMsg }),
                        (0, e.jsx)("div", {
                          className: M().Button,
                          onClick: Ee,
                          children: (0, N.we)("#Button_Retry"),
                        }),
                      ],
                    }),
                  !Ie &&
                    !_ &&
                    (0, e.jsx)(y.t, {
                      position: "center",
                      string: (0, N.we)("#Loading"),
                    }),
                  Ie &&
                    (0, e.jsxs)(I.Fragment, {
                      children: [
                        (0, e.jsx)(c.t, {
                          clanSteamID: V,
                          rgSupportArtwork: [],
                          localizedPrimaryImage: j,
                          forceResolution: oe,
                          bAllowPreviousClanImageSelection: !0,
                          fnSetImageURL: k,
                          rgRealmList: S,
                        }),
                        (0, e.jsx)("div", {
                          className: r.ArtworkBar,
                          children: (0, e.jsx)(L.it, {
                            clanSteamID: V,
                            eventModel: void 0,
                            artworkType: "localized_image_group",
                            title: (0, N.we)("#ImagePickerLoc_Title"),
                            realms: S,
                            fnLangHasData: ee,
                            appid: v,
                            fnGetImageHashAndExt: X,
                            fnSetImageURL: k,
                            partnerEventStore: w,
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            }),
          });
        });
      },
      95174: (z, Z, a) => {
        "use strict";
        a.d(Z, { u: () => k, z: () => S });
        var e = a(7850),
          E = a(9046),
          B = a(99412),
          G = a(19298),
          b = a(68266),
          I = a(56492),
          u = a(72609),
          R = a(86298),
          g = a(33327),
          r = a(21721),
          x = a(95995),
          c = a(29522),
          C = a(40358),
          M = a(72865),
          q = a(41032),
          y = a(65946),
          le = a(68031),
          N = a(90626),
          p = a(90825),
          L = a(33924),
          l = a.n(L),
          F = a(28515),
          n = a(76532),
          J = a.n(n),
          d = a(18057),
          H = a(13465),
          v = a(36118),
          w = a(36707),
          j = a(3166);
        const V = 30;
        function k(ee) {
          var X, P;
          const {
              event: t,
              imageURLOverride: s,
              bShowAssociatedApp: o,
              langOverride: _,
              onClick: h,
              eEventRount: O,
              bHidePrices: Y,
              nSummaryMaxLength: U,
            } = ee,
            A = (0, q.Zj)(t.appid),
            Ee = (0, F.n)(),
            Ie = _ || (0, B.sfN)(u.TS.LANGUAGE),
            de =
              (X = (0, b.m0)(
                s !== void 0 ? void 0 : t,
                "capsule",
                Ie,
                E.wI.capsule_main,
              )) != null
                ? X
                : s,
            Ce =
              (P = (0, b.m0)(
                s !== void 0 ? void 0 : t,
                "capsule",
                Ie,
                E.wI.full,
              )) != null
                ? P
                : s,
            [oe, me, $, ae] = (0, y.q3)(() => [
              t.GetNameWithFallback(Ie) || "",
              t.GetCategoryAsString(),
              t.GetSummaryWithFallback(Ie, U),
              t.GetSubTitleWithLanguageFallback(Ie) || "",
            ]),
            te = (0, c.$5)(t.appid),
            { data: _e } = (0, C.lv)(te),
            W = [];
          if ((de && W.push(de), Ce && Ce !== de && W.push(Ce), _e)) {
            const pe = (0, r.b0)(_e, "main_capsule");
            pe && W.push(pe);
          }
          const [ne, xe] = (0, N.useState)(de),
            Te = (pe, fe, Oe) => {
              Oe >= W.length && xe(void 0), xe(W[Oe + 1]);
            };
          if (!t)
            return (0, e.jsx)("div", { className: l().OtherEvents_EventCtn });
          const Ae = t ? t.GetStartTimeAndDateUnixSeconds() : 0;
          let Re = ae;
          return (
            ae && (ae.length > V || oe.length > V) && (Re = void 0),
            (0, e.jsxs)("div", {
              className: l().EventSizer,
              children: [
                (0, e.jsxs)(I.tj, {
                  className: (0, w.A)(
                    l().OtherEvents_EventCtn,
                    "OtherEvents_EventCtn",
                    l().HoversEnabled,
                  ),
                  eventModel: t,
                  route: O || I.PH.k_eView,
                  onClick: h,
                  preferredFocus: !0,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, w.A)(
                        l().EventSummaryContainer,
                        l().HideInWideMode,
                      ),
                      children: [
                        (0, e.jsx)("div", {
                          className: l().EventSummaryType,
                          children: me,
                        }),
                        (0, e.jsx)("div", {
                          className: l().EventSummaryText,
                          children: $,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: l().OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: ne ? `url(${(0, p.j3)(ne)})` : "none",
                      },
                    }),
                    (0, e.jsxs)("div", {
                      className: l().OtherEvents_ContentCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, w.A)(
                            l().OtherEvents_MainImageCtn,
                            A && l().MaskImages,
                          ),
                          children: (0, e.jsx)(H.c, {
                            rgSources: W,
                            onIncrementalError: Te,
                            className: l().OtherEvents_MainImage,
                            alt: "",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: l().OtherEvents_TextCtn,
                          children: [
                            (0, e.jsx)("div", {
                              className: l().OtherEvents_TextTitle,
                              children: oe,
                            }),
                            !!Re &&
                              (0, e.jsx)("div", {
                                className: l().OtherEvents_SubTitle,
                                children: Re,
                              }),
                            (0, e.jsxs)(le.s, {
                              direction: "row",
                              gap: "3",
                              align: "center",
                              children: [
                                (0, e.jsx)("div", {
                                  className: (0, w.A)(
                                    l().EventType,
                                    l().ShowInWideMode,
                                  ),
                                  children: me,
                                }),
                                Ae > Ee
                                  ? (0, e.jsx)("div", {
                                      className: (0, w.A)(
                                        l().UpcomingCtn,
                                        "UpcomingCtn",
                                      ),
                                      children: (0, e.jsx)(d.K4, {
                                        bSingleLine: !0,
                                        dateAndTime:
                                          t.GetStartTimeAndDateUnixSeconds(),
                                      }),
                                    })
                                  : (0, e.jsx)(d.K4, {
                                      bSingleLine: !0,
                                      bOnlyDate: !0,
                                      dateAndTime:
                                        t.GetStartTimeAndDateUnixSeconds(),
                                    }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: (0, w.A)(
                                l().EventSummaryText,
                                l().ShowInWideMode,
                              ),
                              children: $,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                !!(o && t.appid) &&
                  (0, e.jsx)(S, { appid: t.appid, bHidePrice: Y }),
              ],
            })
          );
        }
        function S(ee) {
          const { appid: X, bHidePrice: P } = ee,
            t = (0, c.$5)(X),
            { data: s } = (0, C.J$)(t),
            { data: o } = (0, C.lv)(t),
            { data: _ } = (0, C.Q_)(t),
            h = (0, M.n9)(),
            O = (0, j.Qn)();
          if (!o || !s) return null;
          const Y = _ && _.hide_discount_pct_for_compliance;
          return (0, e.jsx)(x.A, {
            appID: X,
            children: (0, e.jsxs)(G.Z, {
              className: (0, w.A)(l().AppCapsuleCtn, "AppCapsuleCtn"),
              ...(0, R.S)(s, h, O, !1),
              children: [
                (0, e.jsx)(g.Q, {
                  id: t,
                  hoverProps: {
                    direction: "overlay",
                    style: { minWidth: "320px" },
                  },
                  children: (0, e.jsx)("img", {
                    className: (0, w.A)(l().AppCapsuleImage, l().CapsuleShadow),
                    src: (0, r.b0)(o, "small_capsule"),
                    alt: s.name,
                  }),
                }),
                !P &&
                  !s.is_free &&
                  (0, e.jsxs)("span", {
                    className: (0, w.A)(
                      l().AppCapsulePrice,
                      _ != null && _.discount_pct ? J().Discounted : "",
                    ),
                    children: [
                      !!(_ != null && _.discount_pct && Y) &&
                        (0, e.jsx)("div", {
                          className: J().DiscountIconCtn,
                          children: (0, e.jsx)(v.XH_, {}),
                        }),
                      !!(_ != null && _.discount_pct && !Y) &&
                        (0, e.jsx)("span", {
                          className: J().StoreSaleDiscountBox,
                          children: `-${_ == null ? void 0 : _.discount_pct}%`,
                        }),
                      _ &&
                        _.final_price_in_cents &&
                        (0, e.jsx)("span", {
                          className: J().StoreSalePriceBox,
                          children: _.formatted_final_price,
                        }),
                    ],
                  }),
              ],
            }),
          });
        }
      },
      89084: (z, Z, a) => {
        "use strict";
        a.d(Z, { _o: () => G, fW: () => I, fw: () => b });
        var e = a(98112),
          E = a(38340),
          B = a(29630),
          G = ((u) => (
            (u[(u.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
            (u[(u.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
            (u[(u.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
            (u[(u.k_eInsertVideo = 4)] = "k_eInsertVideo"),
            u
          ))(G || {});
        function b(u, R = !1) {
          return R
            ? `${E.lw}/${u.clanAccountID}/${B.zU.GetThumbHashAndExt(u)}`
            : `${E.lw}/${u.clanAccountID}/${B.zU.GetHashAndExt(u)}`;
        }
        function I(u, R, g) {
          let r = "";
          const x = b(R);
          if (g == 4)
            (r = "[video webm="),
              R.file_type == e.bg.pJ && (r += x),
              (r += " mp4="),
              R.file_type == e.bg.nn && (r += x),
              (r += " autoplay=true controls=false][/video]");
          else if (g == 2) r = "[img]" + x + "[/img]";
          else {
            const c = b(R, !0);
            r = "[url=" + x + "][img]" + c + "[/img][/url]";
          }
          u.InsertText(r);
        }
      },
      35524: (z, Z, a) => {
        "use strict";
        a.d(Z, { R: () => N });
        var e = a(72604),
          E = a(99412),
          B = a(41735),
          G = a.n(B),
          b = a(14947),
          I = a(76559),
          u = a(41635),
          R = a(3166),
          g = a(9046),
          r = a(29630),
          x = Object.defineProperty,
          c = Object.getOwnPropertyDescriptor,
          C = (p, L, l) =>
            L in p
              ? x(p, L, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: l,
                })
              : (p[L] = l),
          M = (p, L, l, F) => {
            for (
              var n = F > 1 ? void 0 : F ? c(L, l) : L, J = p.length - 1, d;
              J >= 0;
              J--
            )
              (d = p[J]) && (n = (F ? d(L, l, n) : d(n)) || n);
            return F && n && x(L, l, n), n;
          },
          q = (p, L, l) => C(p, typeof L != "symbol" ? L + "" : L, l);
        const y = class We {
          constructor() {
            q(this, "m_curLocImageGroup", null),
              q(this, "m_curLocImageGroupType", null),
              (0, b.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(L, l, F, n) {
            let J =
                R.TS.COMMUNITY_BASE_URL +
                "gid/" +
                l.ConvertTo64BitString() +
                "/hasclanimagefile",
              d = { image_hash_and_ext: F, lang: "" + n };
            return (
              (await G().get(J, { params: d, cancelToken: L && L.token })).data
                .success == e.R
            );
          }
          SetPrimaryImageForImageGroup(L, l) {
            (!this.m_curLocImageGroup ||
              this.m_curLocImageGroup.primaryImage.imageid != L.imageid ||
              l != this.m_curLocImageGroupType) &&
              ((this.m_curLocImageGroup = {
                primaryImage: L,
                localized_images: [],
              }),
              (this.m_curLocImageGroupType = l),
              (this.m_curLocImageGroup.localized_images = (0, u.$Y)(
                this.m_curLocImageGroup.localized_images,
                E.bP9,
                null,
              )));
          }
          GetPrimaryImageForImageGroup() {
            var L;
            return (L = this.m_curLocImageGroup) == null
              ? void 0
              : L.primaryImage;
          }
          ClearImageGroup() {
            (this.m_curLocImageGroup = null),
              (this.m_curLocImageGroupType = null);
          }
          GetLocalizedImageGroupForEdit() {
            return this.m_curLocImageGroup;
          }
          GetLocalizedImageGroupForEditAsURL(L, l) {
            var F;
            if (this.m_curLocImageGroup) {
              let n = this.m_curLocImageGroup.primaryImage;
              return this.m_curLocImageGroup.localized_images[l]
                ? this.m_curLocImageGroup.localized_images[l]
                : r.zU.GenerateURLFromHashAndExt(
                    L,
                    (F = r.zU.GetHashAndExt(n)) != null ? F : "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(L) {
            var l;
            if (!this.m_curLocImageGroup) return;
            const F = this.m_curLocImageGroup.primaryImage,
              n = I.b.InitFromClanID(F.clanAccountID),
              J = (l = r.zU.GetHashAndExt(F)) != null ? l : "",
              d = [];
            for (let v = E.Bhc; v < E.bP9; ++v)
              d.push(We.BDoesClanImageFileExistsOnCDNOrOrigin(L, n, J, v));
            const H = await Promise.all(d);
            (0, b.h5)(() => {
              var v;
              for (let w = E.Bhc; w < E.bP9; ++w)
                H[w] &&
                  (this.m_curLocImageGroup.localized_images[w] =
                    r.zU.GenerateURLFromHashAndExtAndLang(
                      n,
                      J,
                      g.wI.full,
                      w,
                      (v = this.m_curLocImageGroupType) != null ? v : void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(L, l, F) {
            var n;
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[L] = F
                ? r.zU.GenerateURLFromHashAndExtAndLang(
                    l,
                    F,
                    g.wI.full,
                    L,
                    (n = this.m_curLocImageGroupType) != null ? n : void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(L, l) {
            var F;
            if (!this.m_curLocImageGroup) return;
            let n = this.m_curLocImageGroup.primaryImage;
            if ((n == null ? void 0 : n.image_hash) == L) {
              const J = I.b.InitFromClanID(n.clanAccountID),
                d = r.zU.GetHashAndExt(n);
              d &&
                (this.m_curLocImageGroup.localized_images[l] =
                  r.zU.GenerateURLFromHashAndExtAndLang(
                    J,
                    d,
                    g.wI.full,
                    l,
                    (F = this.m_curLocImageGroupType) != null ? F : void 0,
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
              .map((F) => r.zU.GetHashAndExtFromURL(F));
          }
        };
        M([b.sH], y.prototype, "m_curLocImageGroup", 2);
        let le = y;
        const N = new le();
      },
      71242: (z, Z, a) => {
        "use strict";
        a.d(Z, { u: () => e });
        function e(E) {
          if (!E) return E;
          const B = E.lastIndexOf(".");
          return B === -1 ? E : E.substring(0, B);
        }
      },
      95682: (z, Z, a) => {
        "use strict";
        a.d(Z, { t: () => y });
        var e = a(7850),
          E = a(65946),
          B = a(90626),
          G = a(75909),
          b = a(35524),
          I = a(38410),
          u = a(53424),
          R = a(50109),
          g = a(2801),
          r = a(88003),
          x = a(85599),
          c = a(34592),
          C = a(18210),
          M = a(38080),
          q = a(72805);
        function y(le) {
          const {
              clanSteamID: N,
              rgSupportArtwork: p,
              localizedPrimaryImage: L,
              bAllowPreviousClanImageSelection: l,
              fnSetImageURL: F,
              rgRealmList: n,
            } = le,
            [J] = (0, E.q3)(() => [R.O.Get().GetCurEditLanguage()]),
            d = (0, G.zO)(N, p, L),
            H = le.uploaderOverride || d,
            [v, w] = B.useState(!1),
            j = B.useCallback(
              async (S, ee) => {
                var X, P;
                if (!v) {
                  w(!0);
                  try {
                    const { language: t } = (0, I.jj)(
                        (X = S.file_name) != null ? X : "",
                        J,
                      ),
                      s = (0, I.PD)(t, J, n);
                    await H.AddExistingClanImage(S, s);
                  } catch (t) {
                    let s = (0, c.H)(t);
                    console.error("AddExistingClanImage: " + s.strErrorMsg, s),
                      (0, r.pg)(
                        (0, e.jsx)(g.KG, {
                          strDescription: (0, C.we)(
                            "#EventError_Code",
                            (P = s.strErrorMsg) != null ? P : "",
                          ),
                        }),
                        window,
                      );
                  }
                  w(!1);
                }
              },
              [v, H, J, n],
            ),
            V = B.useMemo(
              () =>
                l
                  ? [
                      [
                        (0, e.jsx)(
                          q.Hd,
                          { clanSteamID: N, OnClanImageSelected: j },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [j, l, N],
            ),
            k = (S) => {
              var ee;
              for (const X of S) {
                const P = X.uploadResult;
                if (P != null && P.origimagehash) {
                  const t = (0, I.PD)(P.language, J, n);
                  b.R.AddLocalizeImageUploaded(P.origimagehash, t);
                } else {
                  const t = u.pU.GetClanImageByImageHash(
                      N,
                      (ee = P == null ? void 0 : P.image_hash) != null
                        ? ee
                        : "",
                    ),
                    s = X.image.GetCurrentImageOption();
                  if (t && s) {
                    const o = (0, I.PD)(X.image.language, J, n);
                    F(s.artworkType, t, o);
                  }
                }
              }
            };
          return (0, e.jsx)(M.O9, {
            ...le,
            imageUploader: H,
            rgRealmList: n,
            elAdditonalButtons: v
              ? [
                  (0, e.jsx)(
                    x.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, C.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : V,
            fnUploadComplete: k,
          });
        }
      },
      72805: (z, Z, a) => {
        "use strict";
        a.d(Z, { GF: () => H, Hd: () => X, ge: () => w });
        var e = a(7850),
          E = a(72604),
          B = a(98112),
          G = a(90626),
          b = a(89084),
          I = a(76559),
          u = a(53424),
          R = a(26589),
          g = a(55436),
          r = a(95695),
          x = a.n(r),
          c = a(90405),
          C = a(2801),
          M = a(88003),
          q = a(85599),
          y = a(34592),
          le = a(36707),
          N = a(82734),
          p = a(18210),
          L = a(53732),
          l = a.n(L),
          F = a(71647),
          n = a.n(F),
          J = a(85096),
          d = a(29630);
        const H = G.memo(function (t) {
          const {
            fileNameSearch: s,
            clanAccountID: o,
            imageInsertCallBack: _,
            fnOnExpandImage: h,
            showImageActions: O = !0,
            InternalOpenLocalizeImageGroup: Y,
          } = t;
          return (0, e.jsx)(v, {
            clanAccountID: o,
            fileNameSearch: s,
            children: (U, A) =>
              U.map((Ee) =>
                (0, e.jsx)(
                  j,
                  {
                    clanImage: Ee,
                    searchStringHilight: A,
                    imageInsertCallBack: _,
                    showImageActions: O,
                    fnOnOpenLocalizedImageGroup: Y,
                    OnImageClick: h,
                  },
                  Ee.imageid,
                ),
              ),
          });
        });
        function v(P) {
          const { clanAccountID: t, fileNameSearch: s, children: o } = P,
            _ = (0, u.n9)(t),
            h = s.trim().toLowerCase() || "",
            O = u.pU.GetFilteredClanImagesList(_, h);
          if (O.length == 0) {
            const Y = I.b.InitFromClanID(t);
            let U = u.pU.GetLoadState(Y);
            return U && U.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: l().ResultNotification,
                    children:
                      h.length > 0
                        ? (0, p.we)("#ImagePicker_EmptySearch")
                        : (0, p.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : U && U.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: l().ErrorCode,
                      children: (0, p.we)("#ImagePicker_Error", U.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: l().ResultNotification,
                      children: (0, p.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return o(O, h);
        }
        function w(P) {
          const {
            clanAccountID: t,
            fileNameSearch: s,
            onImageSelected: o,
            selectedItem: _,
          } = P;
          return (0, e.jsx)(v, {
            clanAccountID: t,
            fileNameSearch: s,
            children: (h) =>
              (0, e.jsx)("div", {
                className: l().ClanImageGrid,
                children: h.map((O) =>
                  (0, e.jsx)(
                    S,
                    { clanImage: O, selected: O == _, onImageSelected: o },
                    O.imageid,
                  ),
                ),
              }),
          });
        }
        function j(P) {
          const {
              clanImage: t,
              searchStringHilight: s,
              imageInsertCallBack: o,
              OnImageClick: _,
              showImageActions: h,
              fnOnOpenLocalizedImageGroup: O,
            } = P,
            [Y, U] = G.useState(!1),
            A = () => o(t, b._o.k_eInsertFullImage),
            Ee = () => o(t, b._o.k_eInsertVideo),
            Ie = () => o(t, b._o.k_eInsertThumbnail),
            de = (pe) => {
              t.url &&
                (pe.dataTransfer.setData("text", t.url),
                u.pU.GetClanImageDragListener().forEach((fe) => {
                  let Oe = I.b.InitFromClanID(t.clanAccountID);
                  fe(Oe, !0);
                }));
            },
            Ce = (pe) => {
              t.url &&
                u.pU.GetClanImageDragListener().forEach((fe) => {
                  let Oe = I.b.InitFromClanID(t.clanAccountID);
                  fe(Oe, !1);
                });
            },
            oe = (pe) => {
              var fe, Oe;
              (0, M.pg)(
                (0, e.jsx)(C.o0, {
                  strTitle: (0, p.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: $,
                  onCancel: ae,
                  closeModal: ae,
                  children: (0, e.jsxs)(G.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, p.we)(
                          "#ImagePicker_DeleteAreYouSure",
                          (fe = t.file_name) != null ? fe : "",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        children: (0, p.we)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (Oe = (0, N.uX)(pe)) != null ? Oe : window,
              );
            },
            me = (pe) => {
              console.log("ClanImageWrapper on delete error: " + pe),
                (0, M.pg)(
                  (0, e.jsx)(C.KG, {
                    strTitle: (0, p.we)("#Error_FailureNotice"),
                    strDescription: (0, p.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: pe }),
                  }),
                  window,
                );
            },
            $ = () => {
              U(!0);
              let pe = I.b.InitFromClanID(t.clanAccountID);
              u.pU
                .DeleteClanImage(pe, t)
                .then((fe) => {
                  fe.success != E.R && me((0, y.H)(fe).strErrorMsg), U(!1);
                })
                .catch((fe) => {
                  me((0, y.H)(fe).strErrorMsg), U(!1);
                }),
                ae();
            },
            ae = () => {},
            te = () => {
              _ && _(t);
            },
            _e = t.file_name ? t.file_name : "",
            W = (0, g.r)(s, _e, String(t.imageid), l().Hilight),
            ne = d.zU.BIsClanImageVideo(t),
            xe = h && !Y && !ne,
            Te = h && !Y && !ne,
            Ae = h && !Y && ne,
            Re = h && !Y && !ne;
          return (0, e.jsx)(c.K, {
            placeholderHeight: "100vh",
            className: l().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: l().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: l().ImageWrapper,
                  style: {
                    backgroundImage: ne ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: de,
                  onDragEnd: Ce,
                  onDoubleClick: A,
                  onClick: te,
                  children: (0, e.jsx)(k, {
                    clanImage: t,
                    className: l().VideoBackground,
                  }),
                }),
                xe &&
                  (0, e.jsx)("span", {
                    className: l().Full,
                    onClick: A,
                    children: (0, p.we)("#ImagePicker_FullSize"),
                  }),
                Y &&
                  (0, e.jsx)(q.t, {
                    size: "medium",
                    className: l().FloatingThrobber,
                  }),
                Te &&
                  (0, e.jsx)("span", {
                    className: l().Thumb,
                    onClick: Ie,
                    children: (0, p.we)("#ImagePicker_Thumbnail"),
                  }),
                Re &&
                  O &&
                  (0, e.jsx)(V, {
                    bDeleting: Y,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: O,
                  }),
                Ae &&
                  (0, e.jsx)("span", {
                    className: l().Full,
                    onClick: Ee,
                    children: (0, p.we)("#ImagePicker_Video"),
                  }),
                !Y &&
                  (0, e.jsx)("span", {
                    className: l().Delete,
                    onClick: oe,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: l().ImageWrapperFilename,
                  title: _e,
                  children: W,
                }),
              ],
            }),
          });
        }
        function V(P) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: s,
              bDeleting: o,
            } = P,
            { data: _ } = (0, R.hM)(t.clanAccountID);
          return o || !(_ != null && _.valve_admin)
            ? null
            : (0, e.jsx)("span", {
                className: (0, le.A)(l().Localized, x().ValveOnlyBackground),
                onClick: () => (s == null ? void 0 : s(t)),
                children: "(VO) " + (0, p.we)("#ImagePicker_Localized"),
              });
        }
        function k(P) {
          const { clanImage: t, className: s } = P;
          return d.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: s,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == B.bg.nn ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function S(P) {
          const { clanImage: t, onImageSelected: s, selected: o } = P;
          return (0, e.jsxs)("div", {
            className: (0, le.A)(l().ClanImageGridItem, o && l().Selected),
            onClick: () => s(t, !1),
            onDoubleClick: () => s(t, !0),
            title: t.file_name,
            children: [
              (0, e.jsx)("div", {
                className: l().ImgCtn,
                children: d.zU.BIsClanImageVideo(t)
                  ? (0, e.jsx)(k, { clanImage: t })
                  : (0, e.jsx)("img", { src: t.url, loading: "lazy" }),
              }),
              (0, e.jsx)("div", { className: l().Name, children: t.file_name }),
            ],
          });
        }
        function ee(P) {
          const { clanSteamID: t, closeModal: s, OnClanImageSelected: o } = P,
            _ = G.useCallback(
              (Y, U) => {
                o == null || o(Y, U), s == null || s();
              },
              [o, s],
            ),
            [h, O] = G.useState("");
          return (0, e.jsxs)(C.o0, {
            strTitle: (0, p.we)("#ImagePicker_Images"),
            strDescription: (0, p.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: s,
            onCancel: s,
            children: [
              (0, e.jsx)(J.g, { fnSetImageSearch: O }),
              (0, e.jsx)(H, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: h,
                imageInsertCallBack: _,
                showImageActions: !1,
              }),
            ],
          });
        }
        function X(P) {
          const { clanSteamID: t, OnClanImageSelected: s } = P;
          return (0, e.jsxs)("div", {
            className: n().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, p.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: n().SelectImageButton,
                    children: (0, p.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (o) => {
                  var _;
                  (0, M.pg)(
                    (0, e.jsx)(ee, { clanSteamID: t, OnClanImageSelected: s }),
                    (_ = (0, N.uX)(o)) != null ? _ : window,
                  );
                },
              }),
            ],
          });
        }
      },
      38745: (z, Z, a) => {
        "use strict";
        a.d(Z, { D: () => u });
        var e = a(7850),
          E = a(36707),
          B = a(18210),
          G = a(95603),
          b = a(71647),
          I = a.n(b);
        function u(R) {
          const {
              onDropFiles: g,
              renderDesciption: r,
              elAdditonalButtons: x,
              elOverrideDragAndDropText: c,
            } = R,
            [C, M] = (0, G.hk)(g),
            [q, y] = (0, G.Ss)(g, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...C,
            className: (0, E.A)(
              M ? I().DragAndDropContainerDragging : I().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!r && r(),
              (0, e.jsx)("div", {
                children: c || (0, B.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: I().ImageUploadBar,
                children: [
                  q,
                  (0, e.jsxs)("label", {
                    onClick: y,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, B.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: I().SelectImageButton,
                        children: (0, B.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              x,
              R.children,
            ],
          });
        }
      },
      85096: (z, Z, a) => {
        "use strict";
        a.d(Z, { g: () => I });
        var e = a(7850),
          E = a(90626),
          B = a(18210),
          G = a(49460),
          b = a.n(G);
        function I(u) {
          const { fnSetImageSearch: R } = u,
            g = (0, E.useRef)(null);
          return (0, e.jsx)("div", {
            className: G.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: g,
              className: G.SearchInput,
              type: "text",
              placeholder: (0, B.we)("#ImagePicker_Search"),
              onChange: (r) => R(r.currentTarget.value),
              onKeyDown: (r) => {
                r.key == "Escape" &&
                  (R(""), g.current && (g.current.value = ""));
              },
            }),
          });
        }
      },
      38080: (z, Z, a) => {
        "use strict";
        a.d(Z, { O9: () => j, PY: () => V, fY: () => k });
        var e = a(7850),
          E = a(65946),
          B = a(75844),
          G = a(90626),
          b = a(99412),
          I = a(32093),
          u = a(98112),
          R = a(64),
          g = a(38410),
          r = a(50109),
          x = a(19316),
          c = a(38745),
          C = a(95695),
          M = a.n(C),
          q = a(2801),
          y = a(88003),
          le = a(64641),
          N = a.n(le),
          p = a(36118),
          L = a(85599),
          l = a(34592),
          F = a(36707),
          n = a(82734),
          J = a(21254),
          d = a(18210),
          H = a(27344),
          v = a.n(H),
          w = a(9472);
        function j(s) {
          const {
              imageUploader: o,
              fnUploadComplete: _,
              elOverrideDragAndDropText: h,
              forceResolution: O,
              elAdditonalButtons: Y,
              rgRealmList: U,
            } = s,
            [A, Ee] = (0, E.q3)(() => [
              o.GetUploadImages(),
              r.O.Get().GetCurEditLanguage(),
            ]),
            Ie = G.useCallback(
              async (oe) => {
                var me;
                let $ = Array.from(oe),
                  ae = !0;
                for (let te = 0; te < $.length; te++) {
                  const _e = $[te],
                    { language: W } = (0, g.jj)(
                      _e == null ? void 0 : _e.name,
                      Ee,
                    );
                  try {
                    const ne = (0, g.PD)(W, Ee, U);
                    (ae = await o.AddImageForLanguage(_e, ne)),
                      ae ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            te +
                            " file=" +
                            _e.name,
                        ),
                        (0, y.pg)(
                          (0, e.jsx)(q.KG, {
                            strDescription: (0, d.we)(
                              "#ImagePicker_Error",
                              _e.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (ne) {
                    let xe = (0, l.H)(ne);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + xe.strErrorMsg,
                      xe,
                    ),
                      (0, y.pg)(
                        (0, e.jsx)(q.KG, {
                          strDescription: (0, d.we)(
                            "#EventError_Code",
                            (me = xe.strErrorMsg) != null ? me : "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return ae;
              },
              [Ee, o, U],
            ),
            de = G.useMemo(
              () =>
                Y instanceof Array
                  ? Y
                  : [
                      (0, e.jsx)(
                        G.Fragment,
                        { children: Y },
                        "elAdditonalButtons",
                      ),
                    ],
              [Y],
            );
          (0, E.q3)(() =>
            A.map((oe) => ({ a: oe.GetCurrentImageOption(), b: oe.language })),
          );
          const Ce = async () => {
            const oe = await o.UploadAllImages(O);
            _ == null || _(oe);
          };
          return (0, e.jsxs)(c.D, {
            onDropFiles: Ie,
            elAdditonalButtons: de,
            elOverrideDragAndDropText: h,
            children: [
              (0, e.jsx)(G.Fragment, {
                children: (0, e.jsx)("div", {
                  className: v().UploadPreviewCtn,
                  children: A.map((oe) =>
                    (0, e.jsx)(
                      S,
                      {
                        asset: oe,
                        forceResolution: O,
                        fnOnRemove: () => o.DeleteUploadImage(oe),
                        languageRealms: U,
                      },
                      "arttabupload_" + oe.filename + "_" + oe.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(V, { imageUploader: o, fnOnUploadImageRequested: Ce }),
            ],
          });
        }
        function V(s) {
          const { imageUploader: o, fnOnUploadImageRequested: _ } = s,
            [h] = (0, E.q3)(() => [o.GetUploadImages()]),
            O = h.some((U) => U.status == "pending"),
            Y = h.some(
              (U) =>
                U.status == "waiting" ||
                U.status == "uploading" ||
                U.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: v().UploadPreviewButtonsCtn,
            children: [
              !!h.length &&
                (0, e.jsx)(x.$n, {
                  style: { margin: "8px" },
                  onClick: _,
                  disabled: !O,
                  children: (0, d.we)("#ImageUpload_Upload"),
                }),
              !!h.length &&
                (0, e.jsx)(x.$n, {
                  style: { margin: "8px" },
                  onClick: o.ClearImages,
                  disabled: Y,
                  children: (0, d.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function k(s, o, _, h, O) {
          let Y = new Array();
          return (
            s.GetUploadImages().forEach((U) => {
              Y.push(
                (0, e.jsx)(
                  S,
                  {
                    asset: U,
                    forceResolution: _,
                    forceFileType: h,
                    fnOnRemove: () => s.DeleteUploadImage(U),
                    languageRealms: O,
                  },
                  o + U.file + "_" + U.uploadTime,
                ),
              );
            }),
            Y
          );
        }
        const S = (0, B.PA)(ee);
        function ee(s) {
          var o, _, h, O, Y;
          const U = (W) => {
              if (W instanceof R.M7) {
                W.ResetImage();
                const ne = window,
                  xe = (0, e.jsx)(J.q, {
                    ownerWin: ne,
                    uploadFile: W,
                    forceResolution: s.forceResolution,
                    fileType: s.forceFileType || u.bg.dU,
                  });
                (0, y.HT)(xe, ne, "CropModal", {
                  strTitle: (0, d.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  W.fileType,
                  JSON.stringify(W.GetCurrentImageOption()),
                );
            },
            { asset: A, fnOnRemove: Ee, languageRealms: Ie } = s,
            de =
              (o = A.ImageOptions) == null
                ? void 0
                : o
                    .map((W) => {
                      let ne = W == null ? void 0 : W.fnGetLabelText(),
                        xe;
                      W.bEnforceDimensions &&
                        (ne += ` - ${W.width}x${W.height}`),
                        W.bDeprecated &&
                          ((ne += ` ${(0, d.we)("#ImageUpload_Deprecated")}`),
                          (xe = (0, d.we)("#ImageUpload_Deprecated_ttip")));
                      let Te;
                      return (
                        (A.BIsOriginalMinimumDimensions(W) &&
                          A.FileTypeMatchesImageTypes(W)) ||
                          (Te = v().ImageDimensionTooSmall),
                        { label: ne, data: W, strOptionClass: Te, tooltip: xe }
                      );
                    })
                    .filter((W) => !W.data.bHiddenFromDropdown),
            Ce = {
              pending: (0, d.we)("#ImageUpload_Pending"),
              waiting: (0, d.we)("#ImageUpload_Waiting"),
              uploading: (0, d.we)("#ImageUpload_Uploading"),
              processing: (0, d.we)("#ImageUpload_Processing"),
              success: (0, d.we)("#ImageUpload_SuccessCard"),
              failed: (0, d.we)("#ImageUpload_Failed"),
            },
            oe = A.BSupportsLanguages()
              ? t(
                  d.A0.GetLanguageListForRealms(
                    Ie != null ? Ie : [I.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            me = A.IsValidAssetType(s.forceResolution, s.forceFileType),
            $ = A.status == "pending";
          let ae = Ce[A.status];
          A.status == "pending" &&
            (me.needsCrop
              ? (ae = (0, d.we)("#ImageUpload_NeedsCrop"))
              : me.error && (ae = (0, d.we)("#ImageUpload_Invalid")));
          let te;
          const _e = A.GetCurrentImageOption();
          return (
            _e &&
              (te =
                (_ =
                  de == null
                    ? void 0
                    : de.find((W) => W.data.sKey == _e.sKey)) == null
                  ? void 0
                  : _.data),
            te ||
              (te =
                (h = de == null ? void 0 : de[0]) == null ? void 0 : h.data),
            (0, e.jsxs)("div", {
              className: v().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: v().UploadPreviewDelete,
                  onClick: () => Ee(A),
                  children: (0, e.jsx)(p.sED, {}),
                }),
                (0, e.jsx)(X, { asset: A }),
                oe &&
                  (0, e.jsx)(x.m, {
                    strDropDownClassName: M().DropDownScroll,
                    rgOptions: oe,
                    selectedOption: A.language,
                    onChange: (W) => (A.language = W.data),
                    disabled: !$,
                  }),
                de &&
                  (de == null ? void 0 : de.length) > 1 &&
                  (0, e.jsx)(x.m, {
                    label: A.GetImageOptionLabel(),
                    rgOptions: de,
                    selectedOption: te,
                    onChange: (W) => A.SetCurrentImageOption(W.data),
                    disabled: !$,
                  }),
                $ &&
                  ((O = me.warnings) == null
                    ? void 0
                    : O.map((W, ne) =>
                        (0, e.jsx)(
                          "div",
                          { className: v().UploadPreviewWarning, children: W },
                          `warning${ne}`,
                        ),
                      )),
                $ &&
                  ((Y = me.messages) == null
                    ? void 0
                    : Y.map((W, ne) =>
                        (0, e.jsx)(
                          "div",
                          { className: v().UploadPreviewMessage, children: W },
                          `message${ne}`,
                        ),
                      )),
                (0, e.jsxs)("div", {
                  className: (0, F.A)({
                    [M().FlexColumnContainer]: !0,
                    [v().UploadPreviewError]: A.status == "failed",
                  }),
                  children: [
                    ae,
                    (0, w.o)(A.status) &&
                      (0, e.jsx)("div", {
                        className: N().FlexCenter,
                        children: (0, e.jsx)(L.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: v().UploadPreviewError,
                  children: A.message,
                }),
                $ &&
                  me.error &&
                  (0, e.jsx)("div", {
                    className: v().UploadPreviewError,
                    children: me.error,
                  }),
                $ &&
                  me.needsCrop &&
                  (0, e.jsx)(x.jn, {
                    onClick: () => U(A),
                    children: (0, d.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function X(s) {
          const { asset: o } = s;
          return o.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: v().PreviewImgCtn,
                onClick: (_) =>
                  (0, y.pg)((0, e.jsx)(P, { asset: o }), (0, n.uX)(_)),
                children: [
                  (0, e.jsxs)("span", {
                    className: v().PreviewImgInfo,
                    children: [o.width, " x ", o.height],
                  }),
                  (0, e.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, e.jsx)("source", { src: o.dataUrl }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: v().PreviewImgCtn,
                style: { backgroundImage: `url(${o.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: v().PreviewImgInfo,
                  children: [o.width, " x ", o.height],
                }),
              });
        }
        function P(s) {
          const { asset: o, closeModal: _ } = s;
          return (0, e.jsx)(q.o0, {
            bAlertDialog: !0,
            closeModal: _,
            bAllowFullSize: !0,
            children: (0, e.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: o.dataUrl }),
            }),
          });
        }
        function t(s) {
          const o = [],
            _ = new Array();
          for (const h of s) {
            if (h == b.X51) continue;
            const O = (0, d.we)("#Language_" + (0, b.LgB)(h));
            _.push({ label: O, data: h });
          }
          return (
            _.sort((h, O) => h.label.localeCompare(O.label)),
            _.forEach((h) => o.push({ label: h.label, data: h.data })),
            _
          );
        }
      },
      79573: (z, Z, a) => {
        "use strict";
        a.d(Z, { uE: () => pe, it: () => fe });
        var e = a(7850),
          E = a(99412),
          B = a(14947),
          G = a(65946),
          b = a(75844),
          I = a(90626),
          u = a(25279),
          R = a(50109),
          g = a(84676),
          r = a(19316),
          x = a(25359),
          c = a.n(x),
          C = a(54327),
          M = a(56330),
          q = a(95695),
          y = a.n(q),
          le = a(2801),
          N = a(88003),
          p = a(36118),
          L = a(71421),
          l = a(36707),
          F = a(82734),
          n = a(18210),
          J = a(54963),
          d = a(3166),
          H = a(71242),
          v = a(29630),
          w = a(35524),
          j = a(9046),
          V = a(58483),
          k = a(73085),
          S = a(93464),
          ee = a(95174),
          X = a(9709),
          P = a(22142),
          t = a(19298),
          s = a(13465),
          o = a(21659),
          _ = a(15496),
          h = a.n(_),
          O = a(88812);
        function Y(i) {
          var f;
          const {
              event: D,
              spotlightURLOverride: m,
              fnHandleOpenEvent: K,
              fnImageFailureCallback: T,
              fnFilterImageURLsForKnownFailures: Q,
              langOverride: De,
            } = i,
            ue = (0, o.c5)(),
            je = I.useCallback(
              (ce) => {
                ce.preventDefault(), K && K(D);
              },
              [D, K],
            ),
            ve = De || (0, E.sfN)(d.TS.LANGUAGE),
            [Pe, ge, ie] = (0, G.q3)(() => [
              D.GetSummaryWithFallback(ve),
              D.GetNameWithFallback(ve),
              D.BShowLibrarySpotlightText(),
            ]);
          let se = "spotlight",
            Me = j.wI.spotlight_main;
          (D.appid == 2434320 || d.TS.EUNIVERSE == E.Rv) &&
            ((se = ue
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (Me = j.wI.full));
          let he =
            (f = (0, O.WC)(m !== void 0 ? void 0 : D, se, ve, Me)) != null
              ? f
              : m !== void 0
                ? [m]
                : [];
          Q && he && (he = Q(he));
          const re = Pe.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(I.Fragment, {
            children: (0, e.jsx)("div", {
              className: h().MajorEvent_Ctn,
              ref: i.containerRef,
              children: (0, e.jsxs)(t.Z, {
                className: (0, l.A)(
                  h().AppDetailsSpotlightContainer,
                  h().MajorEventContainer,
                ),
                onActivate: je,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: h().MajorEventBackground,
                    children: (0, e.jsx)(s.c, {
                      className: h().MajorEventImageBackgroundBlur,
                      rgSources: he,
                      onIncrementalError: (ce, Le, Ue) => T && T(Le),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: h().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(s.c, {
                        className: h().MajorEventImage,
                        rgSources: he,
                        onIncrementalError: (ce, Le, Ue) => T && T(Le),
                      }),
                      (0, e.jsx)("div", {
                        className: h().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: h().MajoreEventImageContentContainer,
                        children:
                          ie &&
                          (0, e.jsxs)("div", {
                            className: h().MajorEventContent,
                            children: [
                              (0, e.jsx)(s.c, {
                                className: h().MajorEventSpotlightBackground,
                                rgSources: he,
                                onIncrementalError: (ce, Le, Ue) => T && T(Le),
                              }),
                              (0, e.jsxs)("div", {
                                className: h().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: h().MajorEventTitle,
                                    children: ge,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: h().MajorEventSummary,
                                    children: re,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: h().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var U = a(79949),
          A = a.n(U);
        function Ee(i) {
          var f;
          const {
              langOverride: D,
              artworkType: m,
              fnOnLanguagePreviewChange: K,
              clanSteamID: T,
              eventModel: Q,
              partnerEventStore: De,
              fnOnRemoveImage: ue,
              fnOnArtworkLangChange: je,
              realms: ve,
              fnLangHasData: Pe,
              fnGetImageHashAndExt: ge,
            } = i,
            ie = ge(m, D),
            se = ie
              ? v.zU.GenerateURLFromHashAndExtAndLang(T, ie, j.wI.full, D)
              : "",
            [Me] = (0, G.q3)(() => [ne(m, ge)]);
          return Me == 0
            ? (0, e.jsxs)("div", {
                className: c().ImagePreviewContainer,
                children: [
                  m === "capsule" &&
                    (0, e.jsx)(oe, {
                      imgURL:
                        d.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: Q,
                    }),
                  m === "background" &&
                    (0, e.jsx)(me, {
                      imgURL:
                        d.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: D,
                      eventModel: Q,
                      partnerEventStore: De,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(m) &&
                    (0, e.jsx)(de, {
                      langOverride: D,
                      artworkType: m,
                      eventModel: Q,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, n.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: c().ImagePreviewContainer,
                children: [
                  m === "capsule" &&
                    (0, e.jsx)(oe, {
                      imgURL: se,
                      eventModel: Q,
                      langOverride: D,
                    }),
                  m === "background" &&
                    (0, e.jsx)(me, {
                      imgURL: se,
                      lang: D,
                      eventModel: Q,
                      partnerEventStore: De,
                    }),
                  m === "spotlight" &&
                    (0, e.jsx)($, { imgURL: se, event: Q, lang: D }),
                  m === "localized_store_app_spotlight" &&
                    (0, e.jsx)($, { imgURL: se, event: Q, lang: D }),
                  m === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)($, { imgURL: se, event: Q, lang: D }),
                  (m === "broadcast_left" || m === "broadcast_right") &&
                    (0, e.jsx)(ae, {
                      imgURL: se,
                      side: m === "broadcast_right" ? "right" : "left",
                    }),
                  m === "sale_header" && (0, e.jsx)(te, { imgURL: se }),
                  m === "sale_overlay" && (0, e.jsx)(_e, { imgURL: se }),
                  j.pb.includes(m) &&
                    (0, e.jsx)("img", {
                      className: X.PreviewImg,
                      src:
                        (f = w.R.GetLocalizedImageGroupForEditAsURL(T, D)) !=
                        null
                          ? f
                          : void 0,
                    }),
                  m === "product_banner" && (0, e.jsx)(W, { imgURL: se }),
                  m === "product_mobile_banner" &&
                    (0, e.jsx)(W, { imgURL: se }),
                  m === "sale_logo" && (0, e.jsx)(W, { imgURL: se }),
                  m === "bestofyear_banner" && (0, e.jsx)(W, { imgURL: se }),
                  m === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(W, { imgURL: se }),
                  (0, e.jsx)(P.h, {
                    langOverride: D,
                    clanSteamID: T,
                    fnOnLanguagePreviewChange: K,
                    fnOnRemoveImage: ue,
                    fnOnArtworkLangChange: je,
                    realms: ve,
                    fnLangHasData: Pe,
                    fnGetImageHash: (he) => {
                      var re;
                      return (0, H.u)((re = ge(m, he)) != null ? re : "");
                    },
                  }),
                ],
              });
        }
        function Ie(i) {
          const { artworkType: f } = i,
            D = ArtworkTypeMap[f];
          return jsxs("div", {
            className: previewstyles.SpotlightImage,
            children: [
              jsx("h1", {
                className: previewstyles.SpotImgTitle,
                children: Localize("#EventEditor_ArtworkType_" + f),
              }),
              jsxs("p", {
                className: previewstyles.SpotImgSubtitle,
                children: [D.width, " X ", D.height],
              }),
            ],
          });
        }
        function de(i) {
          const { artworkType: f, langOverride: D, eventModel: m } = i,
            K = u.Fj[f],
            T = I.useMemo(
              () =>
                Ce(
                  (0, n.we)("#EventEditor_ArtworkType_" + f),
                  `${K.width} X ${K.height}`,
                ),
              [K.height, K.width, f],
            );
          return (0, e.jsx)($, { lang: D, imgURL: T, event: m });
        }
        function Ce(i, f) {
          const K = document.createElement("canvas");
          (K.width = 780), (K.height = 200);
          const T = K.getContext("2d"),
            Q = 20;
          for (let je = 0; je < 200; je += Q)
            for (let ve = 0; ve < 780; ve += Q)
              (T.fillStyle =
                (ve / Q + je / Q) % 2 === 0 ? "#a405e3ff" : "#000000"),
                T.fillRect(ve, je, Q, Q);
          const De = T.createLinearGradient(0, 0, 780, 0);
          De.addColorStop(0, "rgba(32,32,32,0.8)"),
            De.addColorStop(1, "rgba(60,60,60,0.8)"),
            (T.fillStyle = De),
            T.fillRect(0, 0, 780, 200);
          const ue = T.createRadialGradient(
            780 / 2,
            200 / 2,
            0,
            780 / 2,
            200 / 2,
            Math.max(780, 200) / 1.2,
          );
          return (
            ue.addColorStop(0, "rgba(0,0,0,0)"),
            ue.addColorStop(1, "rgba(0,0,0,0.6)"),
            (T.fillStyle = ue),
            T.fillRect(0, 0, 780, 200),
            (T.fillStyle = "#fff"),
            (T.font = "32px Arial"),
            (T.textAlign = "center"),
            (T.textBaseline = "middle"),
            T.fillText(i, 780 / 2, 200 / 2 - 20),
            f &&
              ((T.font = "18px Arial"), T.fillText(f, 780 / 2, 200 / 2 + 25)),
            K.toDataURL("image/png")
          );
        }
        function oe(i) {
          const { imgURL: f, eventModel: D, langOverride: m } = i,
            K = (0, R.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(ee.u, {
              event: D,
              imageURLOverride: f,
              langOverride: m != null ? m : K,
            }),
          });
        }
        function me(i) {
          const { lang: f, eventModel: D, partnerEventStore: m } = i,
            K = (0, V.LJ)(),
            [T, Q, De, ue, je] = (0, G.q3)(() => [
              D.GetNameWithFallback(f),
              D.GetDescriptionWithFallback(f),
              D.GetSubTitleWithLanguageFallback(f),
              D.type,
              D.AnnouncementGID,
            ]);
          let ve = Q
            ? (0, e.jsx)(S.fh, {
                text: Q || "",
                showErrorInfo: !1,
                event: D,
                languageOverride: R.O.Get().GetCurEditLanguage(),
              })
            : (0, n.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: A().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: A().ExampleSectionTitle,
                children: (0, n.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, l.A)(A().DetailPageExample, "DetailPageExample"),
                children: (0, e.jsxs)("div", {
                  className: A().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: A().MainImageCtn,
                      children: (0, e.jsx)("img", { src: i.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: A().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: A().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: A().TextTitle,
                            children:
                              T ||
                              (0, n.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: A().TextSubTitle,
                            children:
                              De ||
                              (0, n.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: A().TextBody,
                            children: ve,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              ue != E.Fwr &&
                (0, e.jsxs)(I.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: A().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: A().ExampleSectionTitle,
                      children: (0, n.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, l.A)(
                        A().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: A().DetailExample2,
                        children: (0, e.jsx)(
                          k.He,
                          {
                            event: D,
                            emoticonStore: K,
                            partnerEventStore: m,
                            headerClassnames: "editor",
                            langOverride: f,
                            bDisableBroadcastPlayer: !0,
                          },
                          je,
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        const $ = (i) => {
            var f;
            const [D] = (0, g.t7)(i.event.appid, { include_assets: !0 });
            if (!D) return null;
            const m = D.GetName(),
              K =
                (f = D.GetAssets()) == null ? void 0 : f.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: A().SpotlightExample,
              children: (0, e.jsx)(Y, {
                event: i.event,
                strDisplayName: m != null ? m : "",
                gameIconUrl: K,
                spotlightURLOverride: i.imgURL,
                langOverride: i.lang,
              }),
            });
          },
          ae = (i) => {
            const f = [
              (0, e.jsx)("img", { src: i.imgURL }, "img"),
              (0, e.jsx)("div", { className: c().BroadcastPreview }, "video"),
            ];
            return (
              i.side === "right" && f.reverse(),
              (0, e.jsx)("div", {
                className: A().BroadcastPreviewContainer,
                children: f,
              })
            );
          },
          te = (i) =>
            (0, e.jsx)("div", {
              className: A().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: i.imgURL,
              }),
            }),
          _e = (i) =>
            (0, e.jsx)("div", {
              className: A().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: i.imgURL,
              }),
            }),
          W = (i) =>
            (0, e.jsx)("div", {
              className: A().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: i.imgURL,
              }),
            });
        function ne(i, f) {
          var D, m;
          let K = 0;
          for (let T = E.Bhc; T < E.bP9; ++T)
            ((m = (D = f(i, T)) == null ? void 0 : D.length) != null ? m : 0) >
              0 && (K += 1);
          return K;
        }
        var xe = Object.defineProperty,
          Te = Object.getOwnPropertyDescriptor,
          Ae = (i, f, D, m) => {
            for (
              var K = m > 1 ? void 0 : m ? Te(f, D) : f, T = i.length - 1, Q;
              T >= 0;
              T--
            )
              (Q = i[T]) && (K = (m ? Q(f, D, K) : Q(K)) || K);
            return m && K && xe(f, D, K), K;
          };
        const Re =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var pe = ((i) => (
          (i[(i.k_None = 0)] = "k_None"),
          (i[(i.k_Suggested = 1)] = "k_Suggested"),
          (i[(i.k_Required = 2)] = "k_Required"),
          (i[(i.k_Requested = 3)] = "k_Requested"),
          i
        ))(pe || {});
        function fe(i) {
          var f, D;
          const {
              artworkType: m,
              headerHint: K,
              appid: T,
              fnToggleMinimize: Q,
              realms: De,
              eventModel: ue,
              fnLangHasData: je,
              fnGetImageHashAndExt: ve,
              fnSetImageURL: Pe,
              partnerEventStore: ge,
            } = i,
            [ie] = (0, g.t7)(T, { include_assets: !0 }),
            [se, Me] = (0, G.q3)(() => [
              ue == null ? void 0 : ue.GetEventType(),
              ue == null ? void 0 : ue.BHasTag("vo_marketing_message"),
            ]),
            he = se == E.ajI;
          let re = null;
          K === 2
            ? (re = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, n.we)("#EventEditor_Required"),
              }))
            : K === 1
              ? (re = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, n.we)("#EventEditor_Suggested"),
                }))
              : K === 3 &&
                (re = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, n.we)("#EventEditor_Requested"),
                }));
          let ce = null;
          m === "capsule"
            ? he
              ? (ce = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, n.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, n.we)("#selectimage_tip_capsule_creatorhome_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, n.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, n.we)("#selectimage_tip_capsule_creatorhome_2"),
                      ],
                    }),
                  ],
                }))
              : (ce = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!Me &&
                      (0, e.jsxs)("div", {
                        className: c().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, n.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${d.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                              children: (0, n.we)("#PartnerEvent_MM_LearnMore"),
                            }),
                          }),
                        ],
                      }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, n.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, n.we)("#selectimage_tip_capsule_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, n.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, n.we)("#selectimage_tip_capsule_2"),
                      ],
                    }),
                  ],
                }))
            : m === "background"
              ? (ce = (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("strong", {
                        children: (0, n.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, n.we)("#selectimage_tip_background_1"),
                    ],
                  }),
                }))
              : m === "spotlight" || m === "localized_store_app_spotlight"
                ? (ce = (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, n.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, n.we)("#selectimage_tip_store_spotlight_1"),
                      ],
                    }),
                  }))
                : m === "localized_store_app_spotlight_mobile"
                  ? (ce = (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, n.we)("#selectimage_tip_usage_title"),
                          }),
                          ": ",
                          (0, n.we)("#selectimage_tip_store_mobile_spotlight"),
                        ],
                      }),
                    }))
                  : m === "broadcast_left" || m === "broadcast_right"
                    ? (ce = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, n.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : m === "sale_header"
                      ? (ce = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: y().EventElementRequired,
                              children: (0, n.we)(
                                "#selectimage_tip_required_title",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, n.we)(
                                    "#selectimage_tip_usage_title",
                                  ),
                                }),
                                ": ",
                                (0, n.we)("#selectimage_tip_sale_header_1"),
                              ],
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, n.we)(
                                    "#selectimage_tip_design_title",
                                  ),
                                }),
                                ": ",
                                (0, n.we)("#selectimage_tip_sale_header_2"),
                              ],
                            }),
                            (0, e.jsx)("p", {
                              children: (0, n.we)(
                                "#selectimage_tip_sale_header_4",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, n.we)(
                                    "#selectimage_tip_template_title",
                                  ),
                                }),
                                ": ",
                                (0, e.jsx)("a", {
                                  href: "https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0",
                                  children: (0, n.we)(
                                    "#selectimage_tip_sale_header_3",
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)("br", {}),
                          ],
                        }))
                      : m === "hero"
                        ? ie &&
                          (ce = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, n.we)("#selectimage_tip_hero_1"),
                              }),
                              !(
                                (f = ie.GetAssets()) != null &&
                                f.GetLibraryHeroURL()
                              ) &&
                                (0, e.jsx)("p", {
                                  className: M.ErrorStylesBackground,
                                  children: (0, n.we)(
                                    "#EventEdtior_ArtworkType_hero_warning",
                                  ),
                                }),
                            ],
                          }))
                        : m === "localized_image_group" ||
                            m === "link_capsule" ||
                            m === "sale_section_title" ||
                            m === "schedule_track_art" ||
                            m === "localized_background_art"
                          ? (ce = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, n.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, n.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Re,
                                      target: d.TS.IN_CLIENT
                                        ? void 0
                                        : "_blank",
                                      children: (0, n.we)(
                                        "#ImagePickerLoc_URL",
                                      ),
                                    }),
                                  ),
                                }),
                              ],
                            }))
                          : m === "product_banner"
                            ? (ce = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: y().EventElementOptional,
                                    children: (0, n.we)(
                                      "#selectimage_tip_optional_title",
                                    ),
                                  }),
                                  (0, e.jsxs)("p", {
                                    children: [
                                      (0, e.jsx)("b", {
                                        children: (0, n.we)(
                                          "#selectimage_tip_usage_title",
                                        ),
                                      }),
                                      ": ",
                                      (0, n.we)(
                                        "#selectimage_tip_sale_product_banner",
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : m === "product_mobile_banner" ||
                                m === "product_banner_override" ||
                                m === "product_mobile_banner_override"
                              ? (ce = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: y().EventElementOptional,
                                      children: (0, n.we)(
                                        "#selectimage_tip_optional_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("p", {
                                      children: [
                                        (0, e.jsx)("b", {
                                          children: (0, n.we)(
                                            "#selectimage_tip_usage_title",
                                          ),
                                        }),
                                        ": ",
                                        (0, n.we)(
                                          "#selectimage_tip_sale_product_banner",
                                        ),
                                        m === "product_mobile_banner" &&
                                          (0, e.jsxs)("span", {
                                            children: [
                                              "  ",
                                              (0, n.we)(
                                                "#selectimage_tip_sale_product_banner_mobile",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }))
                              : m === "tab_bar_background"
                                ? (ce = (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, n.we)(
                                              "#selectimage_tip_design_title",
                                            ),
                                          }),
                                          ":",
                                          (0, n.we)(
                                            "#Sale_Tabs_Background_Design",
                                          ),
                                        ],
                                      }),
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, n.we)(
                                              "#selectimage_tip_usage_title",
                                            ),
                                          }),
                                          ":",
                                          (0, n.we)(
                                            "#Sale_Tabs_Background_Usage",
                                          ),
                                        ],
                                      }),
                                    ],
                                  }))
                                : m === "sale_logo"
                                  ? (ce = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: y().EventElementOptional,
                                          children: (0, n.we)(
                                            "#selectimage_tip_optional_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, n.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, n.we)(
                                              "#selectimage_tip_pageLogo",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }))
                                  : (ce = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: y().EventElementRequired,
                                          children: (0, n.we)(
                                            "#selectimage_tip_required_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, n.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, n.we)(
                                              "#selectimage_tip_bestofyear",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }));
          const Le = u.Fj[i.artworkType].width,
            Ue = u.Fj[i.artworkType].height;
          return (0, e.jsxs)("div", {
            id: i.id,
            className: c().ArtworkSelectorContainer,
            children: [
              !!i.title &&
                (0, e.jsxs)("div", {
                  className: c().Title,
                  onDoubleClick: Q,
                  children: [
                    i.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    re,
                    Q &&
                      (0, e.jsx)(r.$n, {
                        onClick: Q,
                        children: (0, e.jsx)(L.he, {
                          toolTipContent: (0, n.we)(
                            i.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: i.bIsMinimized
                            ? (0, e.jsx)(p.hz4, {})
                            : (0, e.jsx)(p.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !i.bIsMinimized &&
                (0, e.jsxs)("div", {
                  className: (0, l.A)(c().SelectImageBlock, c().Tips),
                  children: [
                    ce,
                    !!(Le && Ue) &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("b", {
                            children: (0, n.we)(
                              "#selectimage_tip_dimensions_title",
                            ),
                          }),
                          ":\xA0",
                          (0, n.PP)(
                            "#selectimage_tip1",
                            (0, u.qj)(Le),
                            (0, u.qj)(Ue),
                          ),
                        ],
                      }),
                    !!i.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: M.WarningStylesWithIcon,
                          children: i.strWarning,
                        }),
                      }),
                    i.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    i.elAdditionalControls,
                    !!i.fnRemoveAllArtwork &&
                      (0, e.jsx)(r.$n, {
                        onClick: (Ne) => {
                          var Be;
                          (0, N.pg)(
                            (0, e.jsx)(Oe, {
                              fnRemoveAllArtwork: i.fnRemoveAllArtwork,
                            }),
                            (Be = (0, F.uX)(Ne)) != null ? Be : window,
                          );
                        },
                        children: (0, n.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !i.bIsMinimized &&
                (0, e.jsx)(ye, {
                  clanSteamID: i.clanSteamID,
                  title: (D = i.title) != null ? D : "",
                  eventModel: ue,
                  artworkType: i.artworkType,
                  realms: De,
                  appid: T,
                  fnGetImageHashAndExt: ve,
                  fnSetImageURL: Pe,
                  fnLangHasData: je,
                  partnerEventStore: ge,
                }),
            ],
          });
        }
        function Oe(i) {
          const { fnRemoveAllArtwork: f, closeModal: D } = i;
          return (0, e.jsx)(le.o0, {
            strTitle: (0, n.we)("#Sale_RemoveAll"),
            strDescription: (0, n.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              f == null || f(), D == null || D();
            },
            onCancel: D,
          });
        }
        function ye(i) {
          const {
              artworkType: f,
              realms: D,
              clanSteamID: m,
              fnLangHasData: K,
              fnGetImageHashAndExt: T,
              fnSetImageURL: Q,
              eventModel: De,
              appid: ue,
              partnerEventStore: je,
            } = i,
            ve = f === "localized_image_group",
            [Pe, ge] = I.useState((0, R.E)()),
            [ie, se] = I.useState(new Array()),
            Me = I.useCallback(
              (re, ce, Le) => {
                let Ue = [];
                ie.find((Be) => Be.clanImage.imageid == re.imageid)
                  ? (Ue = ie.map((Be) =>
                      Be.clanImage.imageid == re.imageid
                        ? { clanImage: re, lang: ce }
                        : Be,
                    ))
                  : Le && (Ue = ie.concat({ clanImage: re, lang: ce })),
                  se(Ue);
              },
              [ie],
            ),
            he = I.useCallback(
              (re, ce, Le) => {
                (0, B.h5)(() => {
                  var Ue;
                  (0, H.u)((Ue = T(f, ce)) != null ? Ue : "") ==
                    re.image_hash && Q(f, null, ce),
                    Q(f, re, Le),
                    Me(re, Le, !1);
                });
              },
              [T, f, Q, Me],
            );
          return f === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(r.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${d.TS.PARTNER_BASE_URL}admin/game/editbyappid/${ue}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, n.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(Se, {
                    list: ie,
                    fnOnArtworkLanguageChange: he,
                    realms: D,
                    fnLangHasData: K,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, l.A)(
                        c().SelectImageBlock,
                        c().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(Ee, {
                        eventModel: De,
                        clanSteamID: m,
                        fnOnLanguagePreviewChange: (re) => {
                          re != Pe && ge(re);
                        },
                        langOverride: Pe,
                        fnOnArtworkLangChange: ve ? null : he,
                        artworkType: f,
                        fnOnRemoveImage: ve ? null : (re) => Q(f, null, re),
                        realms: D,
                        fnLangHasData: K,
                        fnGetImageHashAndExt: T,
                        partnerEventStore: je,
                      }),
                    }),
                  }),
                ],
              });
        }
        let Se = class extends I.Component {
          ShowLangChangeDialog(i, f) {
            const {
              fnOnArtworkLanguageChange: D,
              realms: m,
              fnLangHasData: K,
            } = this.props;
            (0, N.pg)(
              (0, e.jsx)(C.e, {
                clanImage: i,
                lang: f,
                fnOnArtworkLangChange: D,
                fnLangHasData: K,
                realms: m,
              }),
              window,
            );
          }
          GenerateImageMappings() {
            let i = new Array();
            const { list: f } = this.props;
            return (
              f.forEach((D) => {
                var m;
                const { clanImage: K, lang: T } = D;
                let Q = (0, n.we)("#Language_" + (0, E.LgB)(T));
                i.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: y().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, n.we)(
                            "#ImageUpload_Success_Mapping",
                            (m = K.file_name) != null ? m : "",
                            Q,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(K, T),
                          children: (0, n.we)(
                            "#ImageUpload_Success_Mapping_Change",
                          ),
                        }),
                      ],
                    },
                    "img_lang_" + D.clanImage.imageid + "_" + T,
                  ),
                );
              }),
              i
            );
          }
          render() {
            const { list: i } = this.props;
            if (!i || i.length == 0) return (0, e.jsx)("div", {});
            let f = this.GenerateImageMappings();
            return (0, e.jsx)("div", {
              className: c().UploadSuccess,
              children: f,
            });
          }
        };
        Ae([J.oI], Se.prototype, "ShowLangChangeDialog", 1),
          (Se = Ae([b.PA], Se));
      },
      22142: (z, Z, a) => {
        "use strict";
        a.d(Z, { h: () => n });
        var e = a(7850),
          E = a(32093),
          B = a(99412),
          G = a(71742),
          b = a(64868),
          I = a(65946),
          u = a(90626),
          R = a(44894);
        const g =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var r = a(29630),
          x = a(9046),
          c = a(53424),
          C = a(25359),
          M = a.n(C),
          q = a(54327),
          y = a(2801),
          le = a(36118),
          N = a(71421),
          p = a(18210),
          L = a(25792),
          l = a(19316),
          F = a(11243);
        function n(v) {
          const {
            clanSteamID: w,
            fnGetImageHash: j,
            fnLangHasData: V,
            fnOnRemoveImage: k,
          } = v;
          (0, c.mr)(w.GetAccountID());
          const S = u.useMemo(() => {
              let t = new Array();
              const s = p.A0.GetLanguageListForRealms([
                E.TU.k_ESteamRealmGlobal,
                E.TU.k_ESteamRealmChina,
              ]);
              for (const o of s) {
                const _ = j(o);
                if (_) {
                  const h = (0, B.LgB)(o),
                    O = (0, p.we)("#Language_" + h);
                  t.push({ lang: o, strLang: h, locLang: O, imgHash: _ });
                }
              }
              return (
                (t = t.sort((o, _) =>
                  o.locLang > _.locLang ? 1 : o.locLang < _.locLang ? -1 : 0,
                )),
                t
              );
            }, [j]),
            [ee, X, P] = (0, b.uD)();
          return (0, e.jsxs)("div", {
            className: M().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: M().SelectImageTitle,
                children: (0, p.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: M().LanguageListContainer,
                children: S.map((t) =>
                  (0, e.jsx)(
                    J,
                    { langData: t, ...v },
                    "lang_select_" + w.GetAccountID() + " " + t.strLang,
                  ),
                ),
              }),
              !!k &&
                (0, e.jsxs)(l.$n, {
                  onClick: X,
                  children: [
                    (0, p.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(F.o, {
                      tooltip: (0, p.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(y.EN, {
                active: ee,
                children: (0, e.jsx)(y.o0, {
                  strTitle: (0, p.we)("#Dialog_AreYouSure"),
                  strDescription: (0, p.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: P,
                  onOK: () => {
                    for (let t = 0; t < B.bP9; t++) V && k && V(t) && k(t);
                  },
                }),
              }),
            ],
          });
        }
        function J(v) {
          const {
              clanSteamID: w,
              langData: j,
              langOverride: V,
              fnOnLanguagePreviewChange: k,
              fnOnArtworkLangChange: S,
              fnOnRemoveImage: ee,
            } = v,
            [X, P] = (0, I.q3)(() => {
              const t = c.pU.GetClanImageByImageHash(w, j.imgHash);
              let s = "";
              t &&
                (s = r.zU.GenerateURLFromHashAndExtAndLang(
                  w,
                  r.zU.GetHashAndExt(t),
                  x.wI.full,
                  j.lang,
                ));
              let o = M().LanguageSelectorSelected;
              return (
                V != j.lang &&
                  (o = j.imgHash
                    ? M().LanguageSelector
                    : M().LanguageSelectorNoData),
                [s, o]
              );
            });
          return (0, e.jsxs)("div", {
            id: j.strLang,
            className: M().LanguageContainer,
            onClick: (t) => {
              let s = (0, B.sfN)(t.currentTarget.id);
              k(s);
            },
            children: [
              (0, e.jsx)("div", { className: P, children: j.locLang }),
              (0, e.jsxs)("span", {
                className: M().LanguageOptions,
                children: [
                  !!X &&
                    (0, e.jsx)("a", {
                      href: X,
                      target: "_blank",
                      children: (0, e.jsx)(N.he, {
                        toolTipContent: (0, p.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: le.YNO(),
                      }),
                    }),
                  !!S && (0, e.jsx)(d, { ...v }),
                  !!ee && (0, e.jsx)(H, { fnOnRemoveImage: ee, langData: j }),
                ],
              }),
            ],
          });
        }
        function d(v) {
          const {
              clanSteamID: w,
              langData: j,
              fnOnArtworkLangChange: V,
              fnGetImageHash: k,
              fnLangHasData: S,
              realms: ee,
            } = v,
            [X, P, t] = (0, b.uD)(),
            s = (0, I.q3)(() => {
              const o = k(j.lang);
              return (
                (0, G.wT)(
                  !o || !o.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + o,
                ),
                c.pU.GetClanImageByImageHash(w, o)
              );
            });
          if (!s) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(N.he, {
                toolTipContent: (0, p.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": j.lang,
                  src: g,
                  onClick: () => P(),
                }),
              }),
              (0, e.jsx)(L.tH, {
                children: (0, e.jsx)(y.EN, {
                  active: X,
                  children: (0, e.jsx)(q.e, {
                    clanImage: s,
                    lang: j.lang,
                    fnOnArtworkLangChange: V,
                    fnLangHasData: S,
                    realms: ee,
                    closeModal: t,
                  }),
                }),
              }),
            ],
          });
        }
        function H(v) {
          const { fnOnRemoveImage: w, langData: j } = v,
            [V, k, S] = (0, b.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(N.he, {
                toolTipContent: (0, p.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": j.lang,
                  src: R.A,
                  onClick: k,
                }),
              }),
              (0, e.jsx)(L.tH, {
                children: (0, e.jsx)(y.EN, {
                  active: V,
                  children: (0, e.jsx)(y.o0, {
                    strTitle: (0, p.we)("#selectimage_remove_image"),
                    strDescription: (0, p.we)(
                      "#selectimage_remove_details",
                      (0, p.we)("#Language_" + (0, B.LgB)(j.lang)),
                    ),
                    onOK: () => {
                      w(j.lang);
                    },
                    closeModal: S,
                  }),
                }),
              }),
            ],
          });
        }
      },
      54327: (z, Z, a) => {
        "use strict";
        a.d(Z, { e: () => M });
        var e = a(7850),
          E = a(65946),
          B = a(90626),
          G = a(76559),
          b = a(24806),
          I = a(95695),
          u = a.n(I),
          R = a(2801),
          g = a(36707),
          r = a(18210),
          x = a(25359),
          c = a.n(x),
          C = a(29630);
        function M(q) {
          const {
              clanImage: y,
              closeModal: le,
              lang: N,
              fnOnArtworkLangChange: p,
              realms: L,
              fnLangHasData: l,
            } = q,
            [F, n] = (0, B.useState)(N),
            J = G.b.InitFromClanID(y.clanAccountID),
            d = (0, E.q3)(() => {
              var H;
              return C.zU.GenerateURLFromHashAndExt(
                J,
                (H = C.zU.GetHashAndExt(y)) != null ? H : "",
              );
            });
          return (0, e.jsx)(R.o0, {
            strTitle: (0, r.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, r.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => (p == null ? void 0 : p(y, N, F)),
            onCancel: le,
            closeModal: le,
            children: (0, e.jsxs)("div", {
              className: (0, g.A)(u().FlexColumnContainer, c().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: c().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: c().ArtworkPreview,
                    src: d,
                  }),
                }),
                (0, e.jsx)(b.Ng, {
                  selectedLang: F,
                  fnLangHasData: l,
                  fnOnLanguageChanged: n,
                  realms: L,
                }),
              ],
            }),
          });
        }
      },
      38129: (z, Z, a) => {
        "use strict";
        a.d(Z, { p: () => J });
        var e = a(7850),
          E = a(90626),
          B = a(76559),
          G = a(41735),
          b = a.n(G),
          I = a(58632),
          u = a.n(I),
          R = a(88942),
          g = a(72604),
          r = a(34592),
          x = a(3166),
          c = a(35038),
          C = a(75916),
          M = a(68312);
        const q = "nicknames";
        function y(d) {
          const H = (0, M.KV)(),
            { data: v, isLoading: w } = (0, R.I)({
              queryKey: [q],
              queryFn: async () => {
                const j = new Map();
                if (x.iA.logged_in) {
                  const V = c.w.Init(C.w_T),
                    S = (await C.xtC.GetNicknameList(H, V)).Body().toObject();
                  S != null &&
                    S.nicknames &&
                    S.nicknames.length > 0 &&
                    S.nicknames.forEach((ee) => {
                      ee.accountid &&
                        ee.nickname &&
                        j.set(ee.accountid, ee.nickname);
                    });
                }
                return j;
              },
            });
          return v ? v.get(d) : null;
        }
        async function le(d) {
          var H, v, w, j;
          if (!d || d.length == 0) return [];
          const V =
            (0, x.yK)() == "community"
              ? x.TS.COMMUNITY_BASE_URL
              : x.TS.STORE_BASE_URL;
          if (d.length == 1) {
            const k = { accountid: d[0], origin: self.origin },
              S = await b().get(`${V}actions/ajaxgetavatarpersona`, {
                params: k,
              });
            if (
              !S ||
              S.status != 200 ||
              ((H = S.data) == null ? void 0 : H.success) != g.R ||
              !((v = S.data) != null && v.userinfo)
            )
              throw `Load single avatar/persona failed ${((0, r.H))(S).strErrorMsg}`;
            return [S.data.userinfo];
          } else {
            const k = { accountids: d.join(","), origin: self.origin },
              S = await b().get(`${V}actions/ajaxgetmultiavatarpersona`, {
                params: k,
              });
            if (
              !S ||
              S.status != 200 ||
              ((w = S.data) == null ? void 0 : w.success) != g.R ||
              !((j = S.data) != null && j.userinfos)
            )
              throw `Load single avatar/persona failed ${((0, r.H))(S).strErrorMsg}`;
            const ee = new Map();
            return (
              S.data.userinfos.forEach((X) =>
                ee.set(new B.b(X.steamid).GetAccountID(), X),
              ),
              d.map((X) => ee.get(X))
            );
          }
        }
        const N = new (u())((d) => le(d), { cache: !1 }),
          p = "avatarandpersonas";
        function L(d) {
          const { data: H, isLoading: v } = (0, R.I)({
            queryKey: [p, d],
            queryFn: () => N.load(d),
          });
          return [H, v];
        }
        function l(d) {
          const H = useQueryClient(),
            { data: v, isLoading: w } = useQuery({
              queryKey: [p, d],
              queryFn: async () => {
                const V = await N.loadMany(d);
                return (
                  V.forEach((k) => {
                    if (k instanceof Error) return;
                    const S = [p, new CSteamID(k.steamid).GetAccountID()];
                    H.setQueryData(S, k);
                  }),
                  V
                );
              },
              enabled: (d == null ? void 0 : d.length) > 0,
            }),
            j = useMemo(() => {
              const V = new Array();
              return (
                v == null ||
                  v.forEach((k) => {
                    k instanceof Error || V.push(k);
                  }),
                V
              );
            }, [v]);
          return w ? null : j;
        }
        function F(d) {
          return ReactQueryClient.getQueryData([p, d]);
        }
        var n = a(93355);
        function J(d) {
          const {
              accountID: H,
              bHideWhenNotAvailable: v,
              bHideName: w,
              bLink: j = !0,
            } = d,
            [V] = L(H),
            k = y(H),
            S = E.useMemo(() => B.b.InitFromAccountID(H), [H]),
            ee = `${x.TS.COMMUNITY_BASE_URL}profiles/${S.ConvertTo64BitString()}`,
            X = j ? "a" : "span";
          return (0, e.jsx)(e.Fragment, {
            children: V
              ? (0, e.jsxs)(X, {
                  href: j ? ee : void 0,
                  children: [
                    (0, e.jsx)("img", {
                      className: n.SmallAvatar,
                      src: V.avatar_url,
                      "data-miniprofile": "s" + S.ConvertTo64BitString(),
                    }),
                    !w &&
                      (0, e.jsx)("span", {
                        children: k
                          ? `${k} (${V.persona_name})`
                          : V.persona_name,
                      }),
                  ],
                })
              : (0, e.jsx)(e.Fragment, {
                  children: !v && (0, e.jsx)("span", { children: H }),
                }),
          });
        }
      },
      85143: (z, Z, a) => {
        "use strict";
        a.d(Z, { Dd: () => u, Eb: () => R });
        var e = a(7850),
          E = a(26589),
          B = a(95695),
          G = a.n(B),
          b = a(36707);
        function I(g, r) {
          return g
            ? r
              ? !!g.valve_admin
              : !!(g.valve_admin || g.support_user)
            : !1;
        }
        function u(g, r) {
          const x = !!(g && g.BIsClanAccount()),
            { data: c } = (0, E.hM)(x ? g.GetAccountID() : 0);
          return x && I(c, r);
        }
        function R(g) {
          const { clanSteamID: r, id: x } = g;
          return u(r, g.requireAdmin)
            ? (0, e.jsx)("div", {
                id: x,
                className: (0, b.A)(
                  g.className,
                  g.requireAdmin
                    ? B.ValveOnlyAdminBackground
                    : B.ValveOnlyBackground,
                ),
                children: g.children,
              })
            : null;
        }
      },
      22880: (z, Z, a) => {
        "use strict";
        a.d(Z, { g: () => u });
        var e = a(40323),
          E = a.n(e),
          B = Object.defineProperty,
          G = (R, g, r) =>
            g in R
              ? B(R, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (R[g] = r),
          b = (R, g, r) => G(R, typeof g != "symbol" ? g + "" : g, r);
        const I = class we {
          static ParseCSVFile(g, r) {
            return new Promise((x, c) => {
              const M = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: x,
                error: (q) => c({ errors: [q] }),
                transformHeader: r,
              };
              E().parse(g, M);
            });
          }
          static ReadFile(g) {
            return new Promise((r, x) => {
              const c = new FileReader();
              (c.onload = () => {
                var C;
                return r((C = c.result) != null ? C : "");
              }),
                c.readAsText(g);
            });
          }
          static WriteFile(g, r) {
            let x = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(g, r);
            else {
              const c = window.URL.createObjectURL(g);
              x.href = c;
            }
            x.setAttribute("download", r), x.click();
            try {
              document.removeChild(x);
            } catch {}
          }
          static WriteCSVToFile(g, r, x, c) {
            const C = c
                ? E().unparse({ fields: c, data: g }, { header: !0 })
                : E().unparse(g, { header: !0 }),
              M = x == !0 ? ["\uFEFF" + C] : [C];
            we.WriteFile(new Blob(M, { type: "text/csv:charset=utf-8;" }), r);
          }
          static WriteXMLToFile(g, r) {
            const x = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let c =
              "<" +
              x() +
              'xml version="1.0" encoding="UTF-8" ' +
              x() +
              `>
`;
            (c += new XMLSerializer().serializeToString(g)),
              we.WriteFile(
                new Blob([c], { type: "application/xml:charset=utf-8;" }),
                r,
              );
          }
        };
        b(I, "m_DummyValueForQuestionHack", 0);
        let u = I;
      },
      95603: (z, Z, a) => {
        "use strict";
        a.d(Z, { DB: () => u, PW: () => g, Ss: () => b, hk: () => I });
        var e = a(7850),
          E = a(90626),
          B = a(72739),
          G = a(82734);
        function b(r, x) {
          const c = E.useRef(void 0),
            C = E.useCallback(
              (y) => {
                y.currentTarget.files.length > 0 &&
                  (r(y.currentTarget.files), (y.currentTarget.value = ""));
              },
              [r],
            ),
            M = E.useCallback(() => c.current.click(), []);
          return [
            B.createPortal(
              (0, e.jsx)("form", {
                onSubmit: R,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...x,
                  type: "file",
                  ref: c,
                  onChange: C,
                }),
              }),
              window.document.body,
            ),
            M,
          ];
        }
        function I(r) {
          const [x, c] = E.useState(!1),
            C = E.useCallback((N) => {
              ((N.dataTransfer.files && N.dataTransfer.files[0]) ||
                (N.dataTransfer.types && N.dataTransfer.types[0] == "Files")) &&
                c(!0);
            }, []),
            M = E.useCallback((N) => {
              G.NO(N) && c(!1);
            }, []),
            q = E.useCallback(() => c(!1), []),
            y = x ? R : void 0,
            le = E.useCallback(
              (N) => {
                var p;
                (p = N.dataTransfer.files) != null &&
                  p.length &&
                  (r(N.dataTransfer.files, N),
                  N.preventDefault(),
                  N.stopPropagation()),
                  c(!1);
              },
              [r],
            );
          return [
            {
              onDragEnter: C,
              onDragLeave: M,
              onDragEnd: q,
              onDragOver: y,
              onDrop: le,
            },
            x,
          ];
        }
        async function u(r, x = 1e3) {
          return await new Promise((c, C) => {
            const M = new Image();
            (M.src = r),
              (M.onload = () => c("success")),
              (M.onerror = () => c("error")),
              x > 0 && window.setTimeout(() => c("timeout"), x);
          });
        }
        function R(r) {
          r.preventDefault();
        }
        function g(r) {
          switch (r.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const x = r.name.match(/(?<=\.)[^.]+$/);
              return x ? x[0] : void 0;
          }
        }
      },
      55486: (z) => {
        z.exports = {
          PickerContainer: "_1qhUOyXySrP5wxstyHcNfi",
          SearchInput: "lwt4uhPJr5zMlKtOXk7KH",
          Hilight: "_5oO3lqjoO6KmQtAJqUDAz",
          ImagesContainer: "_2MNEtVBTbM588lRBH4iSWU",
          UploaderContainer: "dR0NeWIeEFgvr-YGjRojm",
          UploaderTitle: "DL9t5BhLQBnOak9WodTTy",
          UploaderRunning: "_1lRF9BfrKTlDFFAmqE7f6H",
          UploaderDesc: "_2fhbnZhBGr6n624Mkviv_M",
          UploadError: "_3B5rV9V3B5jZyTkaOOpLZC",
          UploadMessageAndButtonsContainer: "_3OQ66CWxfAqQrPyk3ENMN9",
          UploadSuccess: "_2RXjwOiBQmS6QJlGOp0zjR",
          UploadDismissButton: "_3j1ztsyZKmnW7dgsO7MeBX",
          EnableClanImagesV2Ctn: "_25bW2wRPaIRCWnvjX0pmYP",
          EnableClanImagesV2: "_3khYXUyapfKawwe6aLY1YD",
        };
      },
      40888: (z) => {
        z.exports = {
          LightboxDialog: "jdJJwFEyHc1BcauL8BGi8",
          LightboxImageContainer: "_2AfDMWU1r2BkWWOuPJBEG4",
          LightboxMainImage: "_3lke7Ru5iG92hZgusH_6mW",
          LightboxPrevImage: "_12Q6eXlxa7az2UzSkyoVZi",
          LightboxNextImage: "_1-u-acR7PtZy8y0uwVsHpe",
          LightboxToolbar: "_1nvyoL-4JdDLMQAb0G0qbB",
          LightboxImageTitle: "_12w2ThvzUOKOyHZoctVBYy",
          LightboxToolbarButtons: "_2EbKH8e98l6jfPsQZbpF5d",
          LightboxCloseButton: "_3V6J1j2mWeEq42tDXjdlyT",
          LightboxLeftButton: "_1Pkq-IzPmH3SL1Ch4rxT7E",
          LightboxRightButton: "_3hJAw5_2ezz8JlA8lniMOV",
        };
      },
      33924: (z) => {
        z.exports = {
          OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
          OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
          OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
          EventSizer: "_2JC5DEuXUeE50kjpb7Eeau",
          OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
          EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
          ShowInWideMode: "RLbLb742gN095uDUITtIB",
          EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
          HideInWideMode: "_3itHivPkrgI7TWENi1yxjI",
          OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
          HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
          OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
          OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
          PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
          EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
          OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
          MaskImages: "_1kFdtNfhXozP4yI_qOv2H-",
          OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
          UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
          OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
          EventType: "_2BWwVF5N-3fDuJRblB6gHb",
          AppCapsuleImage: "_3OzV3h4jW1bkLmB6TqbYmo",
          CapsuleShadow: "_2rjkJQtvus70aLmbfGoneD",
          AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
          AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
          AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
        };
      },
      53732: (z) => {
        z.exports = {
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
      9709: (z) => {
        z.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (z) => {
        z.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (z) => {
        z.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (z) => {
        z.exports = {
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
      25359: (z) => {
        z.exports = {
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
      79949: (z) => {
        z.exports = {
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
      15496: (z) => {
        z.exports = {
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
      93355: (z) => {
        z.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
      },
      44894: (z, Z, a) => {
        "use strict";
        a.d(Z, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();

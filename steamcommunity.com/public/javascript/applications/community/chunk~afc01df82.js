/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [49281],
    {
      21438: (b, k, a) => {
        "use strict";
        a.d(k, { A4: () => r, LU: () => D, sK: () => P });
        var e = a(7850),
          v = a(90626),
          M = a(36631),
          w = a(3166);
        const j = {
            editModel: null,
            bClanImagesV2: !1,
            setClanImagesV2: void 0,
          },
          g = v.createContext(j);
        function r(x) {
          const { children: A, editModel: T } = x,
            { bClanImagesV2: ae, setClanImagesV2: R } = m();
          return (0, e.jsx)(g.Provider, {
            value: {
              ...j,
              editModel: T,
              bClanImagesV2: ae,
              setClanImagesV2: R,
            },
            children: (0, e.jsx)(M.Cs, { location: M.uF, children: A }),
          });
        }
        function C() {
          return v.useContext(g);
        }
        function D() {
          return C().editModel;
        }
        function m() {
          const x = "storeUseClanImagesV2",
            [A, T] = v.useState(() => !!localStorage.getItem(x)),
            ae = v.useCallback((R) => {
              R ? localStorage.setItem(x, "1") : localStorage.removeItem(x),
                T(R);
            }, []);
          return { bClanImagesV2: A, setClanImagesV2: ae };
        }
        function P() {
          const x = v.useContext(g),
            A = !1;
          return {
            bClanImagesV2: x.bClanImagesV2 && A,
            bClanImagesV2Allowed: A,
            setClanImagesV2: x.setClanImagesV2,
          };
        }
      },
      4748: (b, k, a) => {
        "use strict";
        a.d(k, { G: () => ee });
        var e = a(7850),
          v = a(99412),
          M = a(41735),
          w = a.n(M),
          j = a(75844),
          g = a(65946),
          r = a(90626),
          C = a(19316),
          D = a(89084),
          m = a(75909),
          P = a(72805),
          x = a(55486),
          A = a.n(x),
          T = a(38745),
          ae = a(85096),
          R = a(95695),
          ne = a.n(R),
          E = a(2801),
          _ = a(88003),
          H = a(85599),
          i = a(34592),
          $ = a(36707),
          n = a(18210),
          Y = a(54963),
          G = a(96043),
          y = a(40888),
          I = a.n(y),
          S = a(39905);
        function p(t) {
          const l = (0, r.useRef)(null);
          (0, r.useEffect)(() => {
            l.current?.showModal();
            const U = document.body.style.overflow;
            return (
              (document.body.style.overflow = "hidden"),
              () => {
                document.body.style.overflow = U;
              }
            );
          }, []);
          let d = "";
          typeof t.imageTitle == "string" && (d = t.imageTitle);
          const o =
              typeof t.prevSrc == "string"
                ? (0, e.jsx)("img", { src: t.prevSrc, alt: "" })
                : t.prevSrc,
            u =
              typeof t.mainSrc == "string"
                ? (0, e.jsx)("img", { src: t.mainSrc, alt: d })
                : t.mainSrc,
            L =
              typeof t.nextSrc == "string"
                ? (0, e.jsx)("img", { src: t.nextSrc, alt: "" })
                : t.nextSrc,
            F = [
              I().LightboxDialog,
              ...(t.backgroundClassName ? [t.backgroundClassName] : []),
            ];
          return (0, e.jsxs)("dialog", {
            ref: l,
            className: (0, $.A)(...F),
            onClose: (U) => t.onCloseRequest(U),
            onKeyDown: (U) => {
              U.key === "ArrowRight" && t.nextSrc
                ? t.onMoveNextRequest(U)
                : U.key === "ArrowLeft" && t.prevSrc && t.onMovePrevRequest(U);
            },
            children: [
              t.prevSrc &&
                (0, e.jsx)("div", {
                  className: (0, $.A)(
                    I().LightboxImageContainer,
                    I().LightboxPrevImage,
                  ),
                  children: o,
                }),
              (0, e.jsx)("div", {
                className: (0, $.A)(
                  I().LightboxImageContainer,
                  I().LightboxMainImage,
                ),
                role: "presentation",
                onClick: (U) => {
                  U.target.nodeName !== "IMG" && t.onCloseRequest(U);
                },
                children: u,
              }),
              t.nextSrc &&
                (0, e.jsx)("div", {
                  className: (0, $.A)(
                    I().LightboxImageContainer,
                    I().LightboxNextImage,
                  ),
                  children: L,
                }),
              (0, e.jsxs)("div", {
                className: I().LightboxToolbar,
                children: [
                  (0, e.jsx)("span", {
                    className: I().LightboxImageTitle,
                    children: t.imageTitle,
                  }),
                  (0, e.jsxs)("div", {
                    className: I().LightboxToolbarButtons,
                    children: [
                      t.toolbarButtons,
                      (0, e.jsx)("button", {
                        className: I().LightboxCloseButton,
                        onClick: t.onCloseRequest,
                        "aria-label": S.Z.Localize("#Button_Close"),
                      }),
                    ],
                  }),
                ],
              }),
              t.prevSrc &&
                (0, e.jsx)("button", {
                  className: I().LightboxLeftButton,
                  onClick: t.onMovePrevRequest,
                  "aria-label": S.Z.Localize("#Carousel_Prev"),
                }),
              t.nextSrc &&
                (0, e.jsx)("button", {
                  className: I().LightboxRightButton,
                  onClick: t.onMoveNextRequest,
                  "aria-label": S.Z.Localize("#Carousel_Next"),
                }),
            ],
          });
        }
        var Q = a(21438),
          N = a(53424);
        let Z = 1;
        const ee = (0, j.PA)((t) => {
          const {
              clanSteamID: l,
              appid: d,
              imageInsertCallBack: o,
              partnerEventStore: u,
              bHideDragAndDrop: L,
              bShowLightBox: F,
              fnSetImageURL: U,
              rgRealmList: z,
              fnLangHasData: se,
              fnGetImageHash: me,
            } = t,
            [_e, ge] = r.useState(""),
            [le, K] = r.useState(0),
            [V, X] = r.useState(),
            [ce, Ae] = r.useState(void 0),
            [ue, ve] = r.useState(!N.pU.BHasLoadedClanImages(l)),
            [Le, Me] = r.useState(void 0),
            Ce = (0, Y.YR)(() => w().CancelToken.source());
          r.useEffect(
            () => () => Ce.cancel("ClanImagePicker component unmounted"),
            [Ce],
          );
          const Ue = (0, Y.YR)(() => new Map()),
            [Ee, Pe] = (0, r.useState)(null),
            { bClanImagesV2: Te } = (0, Q.sK)(),
            Se = l.GetAccountID(),
            Re = r.useCallback(
              () => N.pU.LoadClanImages(l, !1, Ce.token),
              [Ce, Se],
            ),
            c = r.useCallback(async () => {
              if (!Ue.has(l.GetAccountID()))
                try {
                  await Re(), Ce.token.reason || ve(!1);
                } catch (ie) {
                  let J = (0, i.H)(ie);
                  console.error(
                    "ClanImagePicker Failed: " +
                      J.strErrorMsg +
                      " errCode: " +
                      J.strErrorMsg,
                  ),
                    Ue.set(l.GetAccountID(), J.strErrorMsg),
                    Ce.token.reason || (ve(!1), Me(J.strErrorMsg));
                }
            }, [Ce, l, Ue, Re]);
          r.useEffect(() => {
            ue && c();
          }, [c, ue]);
          const s = r.useCallback(() => {
            ve(!0), c();
          }, [c]);
          r.useEffect(() => {
            s();
          }, [Se, s]);
          const h = N.pU.BHasLoadedClanImages(l);
          r.useEffect(() => {
            h || s();
          }, [h, s]);
          const q = () => {
              ge(_e), K(null);
            },
            B = async (ie) => {
              if (ie && ie.length > 0) {
                const J = Te ? new m.vN(l, null) : new m.VE(l, null);
                Pe(J);
                let De = !0,
                  de = Array.from(ie);
                for (let re = 0; De && re < de.length; re++) {
                  let oe = de[re];
                  (De = await J.AddImage(oe, v.Bhc)),
                    De ||
                      (console.error(
                        "ClanImagePicker.OnDropFiles: failed on i=" +
                          re +
                          " file=" +
                          oe.name,
                      ),
                      (0, _.pg)(
                        (0, e.jsx)(E.KG, {
                          strDescription: (0, n.we)(
                            "#ImagePicker_Error",
                            oe.name,
                          ),
                        }),
                        window,
                      ));
                }
                return De && (ge(""), K(++Z), J.UploadAllImages()), De;
              }
              return !1;
            },
            W = (ie) => {
              if (ie && F) {
                let J = N.pU.GetFilteredClanImages(l, _e.trim().toLowerCase()),
                  De = J.findIndex((de, re, oe) => ie.imageid == de.imageid);
                De >= 0 && (X(De), Ae(J));
              }
            },
            te = () => {
              X(void 0), Ae(void 0);
            },
            Ie = (ie) => {
              if (V != null) {
                const J = ce[V];
                te(),
                  requestAnimationFrame(() => {
                    o(J, ie);
                  });
              }
            },
            fe = () => {
              Ie(D._o.k_eInsertFullImage);
            },
            he = () => {
              Ie(D._o.k_eInsertThumbnail);
            },
            xe = (ie) => {
              (0, _.pg)(
                (0, e.jsx)(G.$, {
                  primaryLocalizedImage: ie,
                  appid: d,
                  clanSteamID: l,
                  fnSetImageURL: U,
                  rgRealmList: z,
                  fnLangHasData: se,
                  fnGetImageHash: me,
                  partnerEventStore: u,
                }),
                window,
              );
            };
          if (Le)
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", { children: (0, n.we)("#Error_Message") }),
                (0, e.jsx)("div", { children: Le }),
                (0, e.jsx)("div", {
                  className: (0, $.A)(ne().Button),
                  onClick: c,
                  children: (0, n.we)("#Button_Retry"),
                }),
              ],
            });
          if (ue)
            return (0, e.jsx)(H.t, {
              position: "center",
              string: (0, n.we)("#Loading"),
            });
          let pe = ce;
          return (0, e.jsxs)("div", {
            className: (0, $.A)(A().PickerContainer),
            children: [
              (0, e.jsx)(ae.g, { fnSetImageSearch: (ie) => ge(ie) }),
              (0, e.jsx)("div", {
                className: A().ImagesContainer,
                children: (0, e.jsx)(P.GF, {
                  clanAccountID: l.GetAccountID(),
                  fileNameSearch: _e,
                  imageInsertCallBack: o,
                  fnOnExpandImage: W,
                  InternalOpenLocalizeImageGroup: xe,
                }),
              }),
              le > 0 &&
                (0, e.jsx)(
                  f,
                  { uploader: Ee, onDismiss: q },
                  "clanimageuploaderview" + le,
                ),
              !L && (0, e.jsx)(T.D, { onDropFiles: B }),
              V != null &&
                (0, e.jsx)(p, {
                  mainSrc: pe[V].url,
                  imageTitle: pe[V].file_name,
                  nextSrc: V < pe.length - 1 ? pe[V + 1].url : void 0,
                  prevSrc: V > 0 ? pe[V - 1].url : void 0,
                  onMoveNextRequest: () => X(V + 1),
                  onMovePrevRequest: () => X(V - 1),
                  onCloseRequest: te,
                  toolbarButtons: [
                    (0, e.jsx)(
                      "button",
                      {
                        className: A().Full,
                        onClick: fe,
                        children: (0, n.we)("#ImagePicker_FullSize"),
                      },
                      "fullsize",
                    ),
                    (0, e.jsx)(
                      "button",
                      {
                        className: A().Full,
                        onClick: he,
                        children: (0, n.we)("#ImagePicker_Thumbnail"),
                      },
                      "thumbnail",
                    ),
                  ],
                }),
              (0, e.jsx)(O, {}),
            ],
          });
        });
        function O(t) {
          const {
            bClanImagesV2: l,
            bClanImagesV2Allowed: d,
            setClanImagesV2: o,
          } = (0, Q.sK)();
          return (0, e.jsx)(e.Fragment, {
            children:
              d &&
              o &&
              (0, e.jsx)(C.Yh, {
                className: A().EnableClanImagesV2,
                label: "New media conversion",
                checked: l,
                onChange: (u) => o(u),
              }),
          });
        }
        function f(t) {
          const { uploader: l, onDismiss: d } = t,
            [o, u] = (0, g.q3)(() => [
              l.BAllDone(),
              !l.BAllDone() && !l.BHasError(),
            ]),
            L = l.GetLastErrorFile();
          return (0, e.jsxs)("div", {
            className: A().UploaderContainer,
            children: [
              u &&
                (0, e.jsxs)("div", {
                  className: A().UploaderRunning,
                  children: [
                    (0, e.jsx)("div", {
                      className: A().UploaderDesc,
                      children: (0, n.we)(
                        "#ImageUpload_Desc",
                        l.GetCompletedFiles(),
                        l.GetTotalFiles(),
                      ),
                    }),
                    (0, e.jsx)("button", {
                      className: "DialogButton",
                      onClick: () => {
                        l.CancelAllUploads(), d();
                      },
                      children: (0, n.we)("#Button_Cancel"),
                    }),
                  ],
                }),
              l.BHasError() &&
                L &&
                (0, e.jsxs)("div", {
                  className: A().UploadMessageAndButtonsContainer,
                  children: [
                    (0, e.jsx)("div", {
                      className: A().UploadError,
                      children: (0, n.we)(
                        "#ImageUpload_Error",
                        L.file.name,
                        L.status,
                        L.message,
                      ),
                    }),
                    (0, e.jsx)("button", {
                      className: A().UploadButtonCancel,
                      onClick: d,
                      children: (0, n.we)("#Button_Cancel"),
                    }),
                    (0, e.jsx)("button", {
                      className: A().UploadButtonRetry,
                      onClick: () => l.RetryAllFailedUploads(),
                      children: (0, n.we)("#Button_Retry"),
                    }),
                  ],
                }),
              !!o &&
                (0, e.jsx)("div", {
                  className: A().UploadMessageAndButtonsContainer,
                  children: (0, e.jsx)("div", {
                    className: A().UploadSuccess,
                    children: (0, n.we)("#ImageUpload_Success"),
                  }),
                }),
            ],
          });
        }
      },
      96043: (b, k, a) => {
        "use strict";
        a.d(k, { $: () => Y });
        var e = a(7850),
          v = a(72604),
          M = a(41735),
          w = a.n(M),
          j = a(75844),
          g = a(90626),
          r = a(76559),
          C = a(35524),
          D = a(19316),
          m = a(9709),
          P = a.n(m),
          x = a(95682),
          A = a(95695),
          T = a.n(A),
          ae = a(2801),
          R = a(85599),
          ne = a(34592),
          E = a(18210),
          _ = a(54963),
          H = a(79573),
          i = a(11243),
          $ = a(51746),
          n = a(29630);
        const Y = (0, j.PA)((G) => {
          const {
              closeModal: y,
              appid: I,
              partnerEventStore: S,
              primaryLocalizedImage: p,
              clanSteamID: Q,
              fnSetImageURL: N,
              rgRealmList: Z,
              fnLangHasData: ee,
              fnGetImageHash: O,
            } = G,
            [f, t] = g.useState(),
            [l, d] = g.useState(!0),
            [o, u] = g.useState(),
            L = (0, _.YR)(() => w().CancelToken.source());
          g.useEffect(
            () => () => L.cancel("LocalizedImageDialog component unmounted"),
            [L],
          );
          const F = g.useCallback(async () => {
              try {
                const V = r.b.InitFromClanID(p.clanAccountID),
                  X = await n.zU.AsyncGetImageResolution(
                    V,
                    p.image_hash,
                    p.file_type,
                    L,
                    !1,
                  );
                if (L.token.reason) return;
                if (X.success != v.R || !X.width || !X.height) {
                  console.error(
                    "LocalizedImageDialog : failed to determine the primary image resolution. " +
                      (X.err_msg ?? ""),
                  ),
                    u({ strMsg: X.err_msg });
                  return;
                }
                u(void 0), t(X);
              } catch (V) {
                let X = (0, ne.H)(V);
                console.error("LocalizedImageDialog : " + X.strErrorMsg, X),
                  u({ strMsg: X.strErrorMsg });
              }
            }, [L, p.clanAccountID, p.file_type, p.image_hash]),
            U = g.useCallback(async () => {
              try {
                await C.R.DetermineAvailableLocalizationForGroup(L),
                  L.token.reason || d(!1);
              } catch (V) {
                let X = (0, ne.H)(V);
                console.error("LocalizedImageDialog : " + X.strErrorMsg, X);
              }
            }, [L]),
            z = g.useCallback(() => F().then(U), [U, F]),
            se = g.useCallback(() => {
              u(void 0), z();
            }, [z]);
          g.useEffect(() => {
            y &&
              (C.R.SetPrimaryImageForImageGroup(p, "localized_image_group"),
              z());
          }, [y, z, p]);
          const me = !l && f,
            _e = f ? ` - ${f.width}x${f.height}` : "",
            ge = (0, $.EG)(p.file_type).slice(1),
            le =
              f?.width && f?.height
                ? { width: f.width, height: f.height }
                : void 0,
            K = n.zU.GenerateURLFromHashAndExt(Q, n.zU.GetHashAndExt(p));
          return (0, e.jsx)(ae.eV, {
            bAllowFullSize: !0,
            title: (0, E.we)("#ImagePickerLoc_Title"),
            onCancel: y,
            closeModal: y,
            children: (0, e.jsx)(D.nB, {
              children: (0, e.jsxs)(D.a3, {
                children: [
                  (0, e.jsx)("div", {
                    className: T().FlexRowContainer,
                    children: (0, e.jsxs)("span", {
                      className: T().FlexColumnContainer,
                      children: [
                        (0, e.jsxs)("div", {
                          children: [
                            (0, E.we)("#ImagePickerLoc_Default"),
                            (0, e.jsx)(i.o, {
                              tooltip: (0, E.we)(
                                "#ImagePickerLoc_Default_Hint",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsx)("img", { className: m.TitleImg, src: K }),
                        (0, e.jsx)("div", {
                          children: p.file_name + _e + " - " + ge,
                        }),
                      ],
                    }),
                  }),
                  !!o &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, E.we)("#Error_Message"),
                        }),
                        !!o?.strMsg &&
                          (0, e.jsx)("div", { children: o.strMsg }),
                        (0, e.jsx)("div", {
                          className: T().Button,
                          onClick: se,
                          children: (0, E.we)("#Button_Retry"),
                        }),
                      ],
                    }),
                  !me &&
                    !o &&
                    (0, e.jsx)(R.t, {
                      position: "center",
                      string: (0, E.we)("#Loading"),
                    }),
                  me &&
                    (0, e.jsxs)(g.Fragment, {
                      children: [
                        (0, e.jsx)(x.t, {
                          clanSteamID: Q,
                          rgSupportArtwork: [],
                          localizedPrimaryImage: p,
                          forceResolution: le,
                          bAllowPreviousClanImageSelection: !0,
                          fnSetImageURL: N,
                          rgRealmList: Z,
                        }),
                        (0, e.jsx)("div", {
                          className: m.ArtworkBar,
                          children: (0, e.jsx)(H.it, {
                            clanSteamID: Q,
                            eventModel: void 0,
                            artworkType: "localized_image_group",
                            title: (0, E.we)("#ImagePickerLoc_Title"),
                            realms: Z,
                            fnLangHasData: ee,
                            appid: I,
                            fnGetImageHashAndExt: O,
                            fnSetImageURL: N,
                            partnerEventStore: S,
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
      95174: (b, k, a) => {
        "use strict";
        a.d(k, { u: () => N, z: () => Z });
        var e = a(7850),
          v = a(9046),
          M = a(99412),
          w = a(19298),
          j = a(68266),
          g = a(56492),
          r = a(72609),
          C = a(86298),
          D = a(33327),
          m = a(21721),
          P = a(95995),
          x = a(29522),
          A = a(40358),
          T = a(72865),
          ae = a(41032),
          R = a(65946),
          ne = a(68031),
          E = a(90626),
          _ = a(90825),
          H = a(33924),
          i = a.n(H),
          $ = a(28515),
          n = a(76532),
          Y = a.n(n),
          G = a(18057),
          y = a(13465),
          I = a(36118),
          S = a(36707),
          p = a(3166);
        const Q = 30;
        function N(ee) {
          const {
              event: O,
              imageURLOverride: f,
              bShowAssociatedApp: t,
              langOverride: l,
              onClick: d,
              eEventRount: o,
              bHidePrices: u,
              nSummaryMaxLength: L,
            } = ee,
            F = (0, ae.Zj)(O.appid),
            U = (0, $.n)(),
            z = l || (0, M.sfN)(r.TS.LANGUAGE),
            se =
              (0, j.m0)(
                f !== void 0 ? void 0 : O,
                "capsule",
                z,
                v.wI.capsule_main,
              ) ?? f,
            me =
              (0, j.m0)(f !== void 0 ? void 0 : O, "capsule", z, v.wI.full) ??
              f,
            [_e, ge, le, K] = (0, R.q3)(() => [
              O.GetNameWithFallback(z) || "",
              O.GetCategoryAsString(),
              O.GetSummaryWithFallback(z, L),
              O.GetSubTitleWithLanguageFallback(z) || "",
            ]),
            V = (0, x.$5)(O.appid),
            { data: X } = (0, A.lv)(V),
            ce = [];
          if ((se && ce.push(se), me && me !== se && ce.push(me), X)) {
            const Ce = (0, m.b0)(X, "main_capsule");
            Ce && ce.push(Ce);
          }
          const [Ae, ue] = (0, E.useState)(se),
            ve = (Ce, Ue, Ee) => {
              Ee >= ce.length && ue(void 0), ue(ce[Ee + 1]);
            };
          if (!O)
            return (0, e.jsx)("div", { className: i().OtherEvents_EventCtn });
          const Le = O ? O.GetStartTimeAndDateUnixSeconds() : 0;
          let Me = K;
          return (
            K && (K.length > Q || _e.length > Q) && (Me = void 0),
            (0, e.jsxs)("div", {
              className: i().EventSizer,
              children: [
                (0, e.jsxs)(g.tj, {
                  className: (0, S.A)(
                    i().OtherEvents_EventCtn,
                    "OtherEvents_EventCtn",
                    i().HoversEnabled,
                  ),
                  eventModel: O,
                  route: o || g.PH.k_eView,
                  onClick: d,
                  preferredFocus: !0,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, S.A)(
                        i().EventSummaryContainer,
                        i().HideInWideMode,
                      ),
                      children: [
                        (0, e.jsx)("div", {
                          className: i().EventSummaryType,
                          children: ge,
                        }),
                        (0, e.jsx)("div", {
                          className: i().EventSummaryText,
                          children: le,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: i().OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: Ae ? `url(${(0, _.j3)(Ae)})` : "none",
                      },
                    }),
                    (0, e.jsxs)("div", {
                      className: i().OtherEvents_ContentCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, S.A)(
                            i().OtherEvents_MainImageCtn,
                            F && i().MaskImages,
                          ),
                          children: (0, e.jsx)(y.c, {
                            rgSources: ce,
                            onIncrementalError: ve,
                            className: i().OtherEvents_MainImage,
                            alt: "",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: i().OtherEvents_TextCtn,
                          children: [
                            (0, e.jsx)("div", {
                              className: i().OtherEvents_TextTitle,
                              children: _e,
                            }),
                            !!Me &&
                              (0, e.jsx)("div", {
                                className: i().OtherEvents_SubTitle,
                                children: Me,
                              }),
                            (0, e.jsxs)(ne.s, {
                              direction: "row",
                              gap: "3",
                              align: "center",
                              children: [
                                (0, e.jsx)("div", {
                                  className: (0, S.A)(
                                    i().EventType,
                                    i().ShowInWideMode,
                                  ),
                                  children: ge,
                                }),
                                Le > U
                                  ? (0, e.jsx)("div", {
                                      className: (0, S.A)(
                                        i().UpcomingCtn,
                                        "UpcomingCtn",
                                      ),
                                      children: (0, e.jsx)(G.K4, {
                                        bSingleLine: !0,
                                        dateAndTime:
                                          O.GetStartTimeAndDateUnixSeconds(),
                                      }),
                                    })
                                  : (0, e.jsx)(G.K4, {
                                      bSingleLine: !0,
                                      bOnlyDate: !0,
                                      dateAndTime:
                                        O.GetStartTimeAndDateUnixSeconds(),
                                    }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: (0, S.A)(
                                i().EventSummaryText,
                                i().ShowInWideMode,
                              ),
                              children: le,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                !!(t && O.appid) &&
                  (0, e.jsx)(Z, { appid: O.appid, bHidePrice: u }),
              ],
            })
          );
        }
        function Z(ee) {
          const { appid: O, bHidePrice: f } = ee,
            t = (0, x.$5)(O),
            { data: l } = (0, A.J$)(t),
            { data: d } = (0, A.lv)(t),
            { data: o } = (0, A.Q_)(t),
            u = (0, T.n9)(),
            L = (0, p.Qn)();
          if (!d || !l) return null;
          const F = o && o.hide_discount_pct_for_compliance;
          return (0, e.jsx)(P.A, {
            appID: O,
            children: (0, e.jsxs)(w.Z, {
              className: (0, S.A)(i().AppCapsuleCtn, "AppCapsuleCtn"),
              ...(0, C.S)(l, u, L, !1),
              children: [
                (0, e.jsx)(D.Q, {
                  id: t,
                  hoverProps: {
                    direction: "overlay",
                    style: { minWidth: "320px" },
                  },
                  children: (0, e.jsx)("img", {
                    className: (0, S.A)(i().AppCapsuleImage, i().CapsuleShadow),
                    src: (0, m.b0)(d, "small_capsule"),
                    alt: l.name,
                  }),
                }),
                !f &&
                  !l.is_free &&
                  (0, e.jsxs)("span", {
                    className: (0, S.A)(
                      i().AppCapsulePrice,
                      o?.discount_pct ? Y().Discounted : "",
                    ),
                    children: [
                      !!(o?.discount_pct && F) &&
                        (0, e.jsx)("div", {
                          className: Y().DiscountIconCtn,
                          children: (0, e.jsx)(I.XH_, {}),
                        }),
                      !!(o?.discount_pct && !F) &&
                        (0, e.jsx)("span", {
                          className: Y().StoreSaleDiscountBox,
                          children: `-${o?.discount_pct}%`,
                        }),
                      o &&
                        o.final_price_in_cents &&
                        (0, e.jsx)("span", {
                          className: Y().StoreSalePriceBox,
                          children: o.formatted_final_price,
                        }),
                    ],
                  }),
              ],
            }),
          });
        }
      },
      89084: (b, k, a) => {
        "use strict";
        a.d(k, { _o: () => w, fW: () => g, fw: () => j });
        var e = a(98112),
          v = a(38340),
          M = a(29630),
          w = ((r) => (
            (r[(r.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
            (r[(r.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
            (r[(r.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
            (r[(r.k_eInsertVideo = 4)] = "k_eInsertVideo"),
            r
          ))(w || {});
        function j(r, C = !1) {
          return C
            ? `${v.lw}/${r.clanAccountID}/${M.zU.GetThumbHashAndExt(r)}`
            : `${v.lw}/${r.clanAccountID}/${M.zU.GetHashAndExt(r)}`;
        }
        function g(r, C, D) {
          let m = "";
          const P = j(C);
          if (D == 4)
            (m = "[video webm="),
              C.file_type == e.bg.pJ && (m += P),
              (m += " mp4="),
              C.file_type == e.bg.nn && (m += P),
              (m += " autoplay=true controls=false][/video]");
          else if (D == 2) m = "[img]" + P + "[/img]";
          else {
            const x = j(C, !0);
            m = "[url=" + P + "][img]" + x + "[/img][/url]";
          }
          r.InsertText(m);
        }
      },
      35524: (b, k, a) => {
        "use strict";
        a.d(k, { R: () => R });
        var e = a(72604),
          v = a(99412),
          M = a(41735),
          w = a.n(M),
          j = a(14947),
          g = a(76559),
          r = a(41635),
          C = a(3166),
          D = a(9046),
          m = a(29630),
          P = Object.defineProperty,
          x = Object.getOwnPropertyDescriptor,
          A = (ne, E, _, H) => {
            for (
              var i = H > 1 ? void 0 : H ? x(E, _) : E, $ = ne.length - 1, n;
              $ >= 0;
              $--
            )
              (n = ne[$]) && (i = (H ? n(E, _, i) : n(i)) || i);
            return H && i && P(E, _, i), i;
          };
        const T = class Ne {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, j.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(E, _, H, i) {
            let $ =
                C.TS.COMMUNITY_BASE_URL +
                "gid/" +
                _.ConvertTo64BitString() +
                "/hasclanimagefile",
              n = { image_hash_and_ext: H, lang: "" + i };
            return (
              (await w().get($, { params: n, cancelToken: E && E.token })).data
                .success == e.R
            );
          }
          SetPrimaryImageForImageGroup(E, _) {
            (!this.m_curLocImageGroup ||
              this.m_curLocImageGroup.primaryImage.imageid != E.imageid ||
              _ != this.m_curLocImageGroupType) &&
              ((this.m_curLocImageGroup = {
                primaryImage: E,
                localized_images: [],
              }),
              (this.m_curLocImageGroupType = _),
              (this.m_curLocImageGroup.localized_images = (0, r.$Y)(
                this.m_curLocImageGroup.localized_images,
                v.bP9,
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
          GetLocalizedImageGroupForEditAsURL(E, _) {
            if (this.m_curLocImageGroup) {
              let H = this.m_curLocImageGroup.primaryImage;
              return this.m_curLocImageGroup.localized_images[_]
                ? this.m_curLocImageGroup.localized_images[_]
                : m.zU.GenerateURLFromHashAndExt(
                    E,
                    m.zU.GetHashAndExt(H) ?? "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(E) {
            if (!this.m_curLocImageGroup) return;
            const _ = this.m_curLocImageGroup.primaryImage,
              H = g.b.InitFromClanID(_.clanAccountID),
              i = m.zU.GetHashAndExt(_) ?? "",
              $ = [];
            for (let Y = v.Bhc; Y < v.bP9; ++Y)
              $.push(Ne.BDoesClanImageFileExistsOnCDNOrOrigin(E, H, i, Y));
            const n = await Promise.all($);
            (0, j.h5)(() => {
              for (let Y = v.Bhc; Y < v.bP9; ++Y)
                n[Y] &&
                  (this.m_curLocImageGroup.localized_images[Y] =
                    m.zU.GenerateURLFromHashAndExtAndLang(
                      H,
                      i,
                      D.wI.full,
                      Y,
                      this.m_curLocImageGroupType ?? void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(E, _, H) {
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[E] = H
                ? m.zU.GenerateURLFromHashAndExtAndLang(
                    _,
                    H,
                    D.wI.full,
                    E,
                    this.m_curLocImageGroupType ?? void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(E, _) {
            if (!this.m_curLocImageGroup) return;
            let H = this.m_curLocImageGroup.primaryImage;
            if (H?.image_hash == E) {
              const i = g.b.InitFromClanID(H.clanAccountID),
                $ = m.zU.GetHashAndExt(H);
              $ &&
                (this.m_curLocImageGroup.localized_images[_] =
                  m.zU.GenerateURLFromHashAndExtAndLang(
                    i,
                    $,
                    D.wI.full,
                    _,
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
              .map((H) => m.zU.GetHashAndExtFromURL(H));
          }
        };
        A([j.sH], T.prototype, "m_curLocImageGroup", 2);
        let ae = T;
        const R = new ae();
      },
      71242: (b, k, a) => {
        "use strict";
        a.d(k, { u: () => e });
        function e(v) {
          if (!v) return v;
          const M = v.lastIndexOf(".");
          return M === -1 ? v : v.substring(0, M);
        }
      },
      95682: (b, k, a) => {
        "use strict";
        a.d(k, { t: () => R });
        var e = a(7850),
          v = a(65946),
          M = a(90626),
          w = a(75909),
          j = a(35524),
          g = a(38410),
          r = a(53424),
          C = a(50109),
          D = a(2801),
          m = a(88003),
          P = a(85599),
          x = a(34592),
          A = a(18210),
          T = a(38080),
          ae = a(72805);
        function R(ne) {
          const {
              clanSteamID: E,
              rgSupportArtwork: _,
              localizedPrimaryImage: H,
              bAllowPreviousClanImageSelection: i,
              fnSetImageURL: $,
              rgRealmList: n,
            } = ne,
            [Y] = (0, v.q3)(() => [C.O.Get().GetCurEditLanguage()]),
            G = (0, w.zO)(E, _, H),
            y = ne.uploaderOverride || G,
            [I, S] = M.useState(!1),
            p = M.useCallback(
              async (Z, ee) => {
                if (!I) {
                  S(!0);
                  try {
                    const { language: O } = (0, g.jj)(Z.file_name ?? "", Y),
                      f = (0, g.PD)(O, Y, n);
                    await y.AddExistingClanImage(Z, f);
                  } catch (O) {
                    let f = (0, x.H)(O);
                    console.error("AddExistingClanImage: " + f.strErrorMsg, f),
                      (0, m.pg)(
                        (0, e.jsx)(D.KG, {
                          strDescription: (0, A.we)(
                            "#EventError_Code",
                            f.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  S(!1);
                }
              },
              [I, y, Y, n],
            ),
            Q = M.useMemo(
              () =>
                i
                  ? [
                      [
                        (0, e.jsx)(
                          ae.Hd,
                          { clanSteamID: E, OnClanImageSelected: p },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [p, i, E],
            ),
            N = (Z) => {
              for (const ee of Z) {
                const O = ee.uploadResult;
                if (O?.origimagehash) {
                  const f = (0, g.PD)(O.language, Y, n);
                  j.R.AddLocalizeImageUploaded(O.origimagehash, f);
                } else {
                  const f = r.pU.GetClanImageByImageHash(
                      E,
                      O?.image_hash ?? "",
                    ),
                    t = ee.image.GetCurrentImageOption();
                  if (f && t) {
                    const l = (0, g.PD)(ee.image.language, Y, n);
                    $(t.artworkType, f, l);
                  }
                }
              }
            };
          return (0, e.jsx)(T.O9, {
            ...ne,
            imageUploader: y,
            rgRealmList: n,
            elAdditonalButtons: I
              ? [
                  (0, e.jsx)(
                    P.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, A.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : Q,
            fnUploadComplete: N,
          });
        }
      },
      72805: (b, k, a) => {
        "use strict";
        a.d(k, { GF: () => y, Hd: () => O, ge: () => S });
        var e = a(7850),
          v = a(72604),
          M = a(98112),
          w = a(90626),
          j = a(89084),
          g = a(76559),
          r = a(53424),
          C = a(26589),
          D = a(55436),
          m = a(95695),
          P = a.n(m),
          x = a(90405),
          A = a(2801),
          T = a(88003),
          ae = a(85599),
          R = a(34592),
          ne = a(36707),
          E = a(82734),
          _ = a(18210),
          H = a(53732),
          i = a.n(H),
          $ = a(71647),
          n = a.n($),
          Y = a(85096),
          G = a(29630);
        const y = w.memo(function (t) {
          const {
            fileNameSearch: l,
            clanAccountID: d,
            imageInsertCallBack: o,
            fnOnExpandImage: u,
            showImageActions: L = !0,
            InternalOpenLocalizeImageGroup: F,
          } = t;
          return (0, e.jsx)(I, {
            clanAccountID: d,
            fileNameSearch: l,
            children: (U, z) =>
              U.map((se) =>
                (0, e.jsx)(
                  p,
                  {
                    clanImage: se,
                    searchStringHilight: z,
                    imageInsertCallBack: o,
                    showImageActions: L,
                    fnOnOpenLocalizedImageGroup: F,
                    OnImageClick: u,
                  },
                  se.imageid,
                ),
              ),
          });
        });
        function I(f) {
          const { clanAccountID: t, fileNameSearch: l, children: d } = f,
            o = (0, r.n9)(t),
            u = l.trim().toLowerCase() || "",
            L = r.pU.GetFilteredClanImagesList(o, u);
          if (L.length == 0) {
            const F = g.b.InitFromClanID(t);
            let U = r.pU.GetLoadState(F);
            return U && U.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: i().ResultNotification,
                    children:
                      u.length > 0
                        ? (0, _.we)("#ImagePicker_EmptySearch")
                        : (0, _.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : U && U.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: i().ErrorCode,
                      children: (0, _.we)("#ImagePicker_Error", U.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: i().ResultNotification,
                      children: (0, _.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return d(L, u);
        }
        function S(f) {
          const {
            clanAccountID: t,
            fileNameSearch: l,
            onImageSelected: d,
            selectedItem: o,
          } = f;
          return (0, e.jsx)(I, {
            clanAccountID: t,
            fileNameSearch: l,
            children: (u) =>
              (0, e.jsx)("div", {
                className: i().ClanImageGrid,
                children: u.map((L) =>
                  (0, e.jsx)(
                    Z,
                    { clanImage: L, selected: L == o, onImageSelected: d },
                    L.imageid,
                  ),
                ),
              }),
          });
        }
        function p(f) {
          const {
              clanImage: t,
              searchStringHilight: l,
              imageInsertCallBack: d,
              OnImageClick: o,
              showImageActions: u,
              fnOnOpenLocalizedImageGroup: L,
            } = f,
            [F, U] = w.useState(!1),
            z = () => d(t, j._o.k_eInsertFullImage),
            se = () => d(t, j._o.k_eInsertVideo),
            me = () => d(t, j._o.k_eInsertThumbnail),
            _e = (Ee) => {
              t.url &&
                (Ee.dataTransfer.setData("text", t.url),
                r.pU.GetClanImageDragListener().forEach((Pe) => {
                  let Te = g.b.InitFromClanID(t.clanAccountID);
                  Pe(Te, !0);
                }));
            },
            ge = (Ee) => {
              t.url &&
                r.pU.GetClanImageDragListener().forEach((Pe) => {
                  let Te = g.b.InitFromClanID(t.clanAccountID);
                  Pe(Te, !1);
                });
            },
            le = (Ee) => {
              (0, T.pg)(
                (0, e.jsx)(A.o0, {
                  strTitle: (0, _.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: V,
                  onCancel: X,
                  closeModal: X,
                  children: (0, e.jsxs)(w.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, _.we)(
                          "#ImagePicker_DeleteAreYouSure",
                          t.file_name ?? "",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        children: (0, _.we)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (0, E.uX)(Ee) ?? window,
              );
            },
            K = (Ee) => {
              console.log("ClanImageWrapper on delete error: " + Ee),
                (0, T.pg)(
                  (0, e.jsx)(A.KG, {
                    strTitle: (0, _.we)("#Error_FailureNotice"),
                    strDescription: (0, _.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: Ee }),
                  }),
                  window,
                );
            },
            V = () => {
              U(!0);
              let Ee = g.b.InitFromClanID(t.clanAccountID);
              r.pU
                .DeleteClanImage(Ee, t)
                .then((Pe) => {
                  Pe.success != v.R && K((0, R.H)(Pe).strErrorMsg), U(!1);
                })
                .catch((Pe) => {
                  K((0, R.H)(Pe).strErrorMsg), U(!1);
                }),
                X();
            },
            X = () => {},
            ce = () => {
              o && o(t);
            },
            Ae = t.file_name ? t.file_name : "",
            ue = (0, D.r)(l, Ae, String(t.imageid), i().Hilight),
            ve = G.zU.BIsClanImageVideo(t),
            Le = u && !F && !ve,
            Me = u && !F && !ve,
            Ce = u && !F && ve,
            Ue = u && !F && !ve;
          return (0, e.jsx)(x.K, {
            placeholderHeight: "100vh",
            className: i().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: i().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: i().ImageWrapper,
                  style: {
                    backgroundImage: ve ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: _e,
                  onDragEnd: ge,
                  onDoubleClick: z,
                  onClick: ce,
                  children: (0, e.jsx)(N, {
                    clanImage: t,
                    className: i().VideoBackground,
                  }),
                }),
                Le &&
                  (0, e.jsx)("span", {
                    className: i().Full,
                    onClick: z,
                    children: (0, _.we)("#ImagePicker_FullSize"),
                  }),
                F &&
                  (0, e.jsx)(ae.t, {
                    size: "medium",
                    className: i().FloatingThrobber,
                  }),
                Me &&
                  (0, e.jsx)("span", {
                    className: i().Thumb,
                    onClick: me,
                    children: (0, _.we)("#ImagePicker_Thumbnail"),
                  }),
                Ue &&
                  L &&
                  (0, e.jsx)(Q, {
                    bDeleting: F,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: L,
                  }),
                Ce &&
                  (0, e.jsx)("span", {
                    className: i().Full,
                    onClick: se,
                    children: (0, _.we)("#ImagePicker_Video"),
                  }),
                !F &&
                  (0, e.jsx)("span", {
                    className: i().Delete,
                    onClick: le,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: i().ImageWrapperFilename,
                  title: Ae,
                  children: ue,
                }),
              ],
            }),
          });
        }
        function Q(f) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: l,
              bDeleting: d,
            } = f,
            { data: o } = (0, C.hM)(t.clanAccountID);
          return d || !o?.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, ne.A)(i().Localized, P().ValveOnlyBackground),
                onClick: () => l?.(t),
                children: "(VO) " + (0, _.we)("#ImagePicker_Localized"),
              });
        }
        function N(f) {
          const { clanImage: t, className: l } = f;
          return G.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: l,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == M.bg.nn ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function Z(f) {
          const { clanImage: t, onImageSelected: l, selected: d } = f;
          return (0, e.jsxs)("div", {
            className: (0, ne.A)(i().ClanImageGridItem, d && i().Selected),
            onClick: () => l(t, !1),
            onDoubleClick: () => l(t, !0),
            title: t.file_name,
            children: [
              (0, e.jsx)("div", {
                className: i().ImgCtn,
                children: G.zU.BIsClanImageVideo(t)
                  ? (0, e.jsx)(N, { clanImage: t })
                  : (0, e.jsx)("img", { src: t.url, loading: "lazy" }),
              }),
              (0, e.jsx)("div", { className: i().Name, children: t.file_name }),
            ],
          });
        }
        function ee(f) {
          const { clanSteamID: t, closeModal: l, OnClanImageSelected: d } = f,
            o = w.useCallback(
              (F, U) => {
                d?.(F, U), l?.();
              },
              [d, l],
            ),
            [u, L] = w.useState("");
          return (0, e.jsxs)(A.o0, {
            strTitle: (0, _.we)("#ImagePicker_Images"),
            strDescription: (0, _.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: l,
            onCancel: l,
            children: [
              (0, e.jsx)(Y.g, { fnSetImageSearch: L }),
              (0, e.jsx)(y, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: u,
                imageInsertCallBack: o,
                showImageActions: !1,
              }),
            ],
          });
        }
        function O(f) {
          const { clanSteamID: t, OnClanImageSelected: l } = f;
          return (0, e.jsxs)("div", {
            className: n().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, _.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: n().SelectImageButton,
                    children: (0, _.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (d) => {
                  (0, T.pg)(
                    (0, e.jsx)(ee, { clanSteamID: t, OnClanImageSelected: l }),
                    (0, E.uX)(d) ?? window,
                  );
                },
              }),
            ],
          });
        }
      },
      38745: (b, k, a) => {
        "use strict";
        a.d(k, { D: () => r });
        var e = a(7850),
          v = a(36707),
          M = a(18210),
          w = a(95603),
          j = a(71647),
          g = a.n(j);
        function r(C) {
          const {
              onDropFiles: D,
              renderDesciption: m,
              elAdditonalButtons: P,
              elOverrideDragAndDropText: x,
            } = C,
            [A, T] = (0, w.hk)(D),
            [ae, R] = (0, w.Ss)(D, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...A,
            className: (0, v.A)(
              T ? g().DragAndDropContainerDragging : g().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!m && m(),
              (0, e.jsx)("div", {
                children: x || (0, M.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: g().ImageUploadBar,
                children: [
                  ae,
                  (0, e.jsxs)("label", {
                    onClick: R,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, M.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: g().SelectImageButton,
                        children: (0, M.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              P,
              C.children,
            ],
          });
        }
      },
      85096: (b, k, a) => {
        "use strict";
        a.d(k, { g: () => g });
        var e = a(7850),
          v = a(90626),
          M = a(18210),
          w = a(49460),
          j = a.n(w);
        function g(r) {
          const { fnSetImageSearch: C } = r,
            D = (0, v.useRef)(null);
          return (0, e.jsx)("div", {
            className: w.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: D,
              className: w.SearchInput,
              type: "text",
              placeholder: (0, M.we)("#ImagePicker_Search"),
              onChange: (m) => C(m.currentTarget.value),
              onKeyDown: (m) => {
                m.key == "Escape" &&
                  (C(""), D.current && (D.current.value = ""));
              },
            }),
          });
        }
      },
      38080: (b, k, a) => {
        "use strict";
        a.d(k, { O9: () => p, PY: () => Q, fY: () => N });
        var e = a(7850),
          v = a(65946),
          M = a(75844),
          w = a(90626),
          j = a(99412),
          g = a(32093),
          r = a(98112),
          C = a(64),
          D = a(38410),
          m = a(50109),
          P = a(19316),
          x = a(38745),
          A = a(95695),
          T = a.n(A),
          ae = a(2801),
          R = a(88003),
          ne = a(64641),
          E = a.n(ne),
          _ = a(36118),
          H = a(85599),
          i = a(34592),
          $ = a(36707),
          n = a(82734),
          Y = a(21254),
          G = a(18210),
          y = a(27344),
          I = a.n(y),
          S = a(9472);
        function p(l) {
          const {
              imageUploader: d,
              fnUploadComplete: o,
              elOverrideDragAndDropText: u,
              forceResolution: L,
              elAdditonalButtons: F,
              rgRealmList: U,
            } = l,
            [z, se] = (0, v.q3)(() => [
              d.GetUploadImages(),
              m.O.Get().GetCurEditLanguage(),
            ]),
            me = w.useCallback(
              async (le) => {
                let K = Array.from(le),
                  V = !0;
                for (let X = 0; X < K.length; X++) {
                  const ce = K[X],
                    { language: Ae } = (0, D.jj)(ce?.name, se);
                  try {
                    const ue = (0, D.PD)(Ae, se, U);
                    (V = await d.AddImageForLanguage(ce, ue)),
                      V ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            X +
                            " file=" +
                            ce.name,
                        ),
                        (0, R.pg)(
                          (0, e.jsx)(ae.KG, {
                            strDescription: (0, G.we)(
                              "#ImagePicker_Error",
                              ce.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (ue) {
                    let ve = (0, i.H)(ue);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + ve.strErrorMsg,
                      ve,
                    ),
                      (0, R.pg)(
                        (0, e.jsx)(ae.KG, {
                          strDescription: (0, G.we)(
                            "#EventError_Code",
                            ve.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return V;
              },
              [se, d, U],
            ),
            _e = w.useMemo(
              () =>
                F instanceof Array
                  ? F
                  : [
                      (0, e.jsx)(
                        w.Fragment,
                        { children: F },
                        "elAdditonalButtons",
                      ),
                    ],
              [F],
            );
          (0, v.q3)(() =>
            z.map((le) => ({ a: le.GetCurrentImageOption(), b: le.language })),
          );
          const ge = async () => {
            const le = await d.UploadAllImages(L);
            o?.(le);
          };
          return (0, e.jsxs)(x.D, {
            onDropFiles: me,
            elAdditonalButtons: _e,
            elOverrideDragAndDropText: u,
            children: [
              (0, e.jsx)(w.Fragment, {
                children: (0, e.jsx)("div", {
                  className: I().UploadPreviewCtn,
                  children: z.map((le) =>
                    (0, e.jsx)(
                      Z,
                      {
                        asset: le,
                        forceResolution: L,
                        fnOnRemove: () => d.DeleteUploadImage(le),
                        languageRealms: U,
                      },
                      "arttabupload_" + le.filename + "_" + le.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(Q, { imageUploader: d, fnOnUploadImageRequested: ge }),
            ],
          });
        }
        function Q(l) {
          const { imageUploader: d, fnOnUploadImageRequested: o } = l,
            [u] = (0, v.q3)(() => [d.GetUploadImages()]),
            L = u.some((U) => U.status == "pending"),
            F = u.some(
              (U) =>
                U.status == "waiting" ||
                U.status == "uploading" ||
                U.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: I().UploadPreviewButtonsCtn,
            children: [
              !!u.length &&
                (0, e.jsx)(P.$n, {
                  style: { margin: "8px" },
                  onClick: o,
                  disabled: !L,
                  children: (0, G.we)("#ImageUpload_Upload"),
                }),
              !!u.length &&
                (0, e.jsx)(P.$n, {
                  style: { margin: "8px" },
                  onClick: d.ClearImages,
                  disabled: F,
                  children: (0, G.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function N(l, d, o, u, L) {
          let F = new Array();
          return (
            l.GetUploadImages().forEach((U) => {
              F.push(
                (0, e.jsx)(
                  Z,
                  {
                    asset: U,
                    forceResolution: o,
                    forceFileType: u,
                    fnOnRemove: () => l.DeleteUploadImage(U),
                    languageRealms: L,
                  },
                  d + U.file + "_" + U.uploadTime,
                ),
              );
            }),
            F
          );
        }
        const Z = (0, M.PA)(ee);
        function ee(l) {
          const d = (K) => {
              if (K instanceof C.M7) {
                K.ResetImage();
                const V = window,
                  X = (0, e.jsx)(Y.q, {
                    ownerWin: V,
                    uploadFile: K,
                    forceResolution: l.forceResolution,
                    fileType: l.forceFileType || r.bg.dU,
                  });
                (0, R.HT)(X, V, "CropModal", {
                  strTitle: (0, G.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  K.fileType,
                  JSON.stringify(K.GetCurrentImageOption()),
                );
            },
            { asset: o, fnOnRemove: u, languageRealms: L } = l,
            F = o.ImageOptions?.map((K) => {
              let V = K?.fnGetLabelText(),
                X;
              K.bEnforceDimensions && (V += ` - ${K.width}x${K.height}`),
                K.bDeprecated &&
                  ((V += ` ${(0, G.we)("#ImageUpload_Deprecated")}`),
                  (X = (0, G.we)("#ImageUpload_Deprecated_ttip")));
              let ce;
              return (
                (o.BIsOriginalMinimumDimensions(K) &&
                  o.FileTypeMatchesImageTypes(K)) ||
                  (ce = I().ImageDimensionTooSmall),
                { label: V, data: K, strOptionClass: ce, tooltip: X }
              );
            }).filter((K) => !K.data.bHiddenFromDropdown),
            U = {
              pending: (0, G.we)("#ImageUpload_Pending"),
              waiting: (0, G.we)("#ImageUpload_Waiting"),
              uploading: (0, G.we)("#ImageUpload_Uploading"),
              processing: (0, G.we)("#ImageUpload_Processing"),
              success: (0, G.we)("#ImageUpload_SuccessCard"),
              failed: (0, G.we)("#ImageUpload_Failed"),
            },
            z = o.BSupportsLanguages()
              ? t(
                  G.A0.GetLanguageListForRealms(
                    L ?? [g.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            se = o.IsValidAssetType(l.forceResolution, l.forceFileType),
            me = o.status == "pending";
          let _e = U[o.status];
          o.status == "pending" &&
            (se.needsCrop
              ? (_e = (0, G.we)("#ImageUpload_NeedsCrop"))
              : se.error && (_e = (0, G.we)("#ImageUpload_Invalid")));
          let ge;
          const le = o.GetCurrentImageOption();
          return (
            le && (ge = F?.find((K) => K.data.sKey == le.sKey)?.data),
            ge || (ge = F?.[0]?.data),
            (0, e.jsxs)("div", {
              className: I().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: I().UploadPreviewDelete,
                  onClick: () => u(o),
                  children: (0, e.jsx)(_.sED, {}),
                }),
                (0, e.jsx)(O, { asset: o }),
                z &&
                  (0, e.jsx)(P.m, {
                    strDropDownClassName: T().DropDownScroll,
                    rgOptions: z,
                    selectedOption: o.language,
                    onChange: (K) => (o.language = K.data),
                    disabled: !me,
                  }),
                F &&
                  F?.length > 1 &&
                  (0, e.jsx)(P.m, {
                    label: o.GetImageOptionLabel(),
                    rgOptions: F,
                    selectedOption: ge,
                    onChange: (K) => o.SetCurrentImageOption(K.data),
                    disabled: !me,
                  }),
                me &&
                  se.warnings?.map((K, V) =>
                    (0, e.jsx)(
                      "div",
                      { className: I().UploadPreviewWarning, children: K },
                      `warning${V}`,
                    ),
                  ),
                me &&
                  se.messages?.map((K, V) =>
                    (0, e.jsx)(
                      "div",
                      { className: I().UploadPreviewMessage, children: K },
                      `message${V}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, $.A)({
                    [T().FlexColumnContainer]: !0,
                    [I().UploadPreviewError]: o.status == "failed",
                  }),
                  children: [
                    _e,
                    (0, S.o)(o.status) &&
                      (0, e.jsx)("div", {
                        className: E().FlexCenter,
                        children: (0, e.jsx)(H.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: I().UploadPreviewError,
                  children: o.message,
                }),
                me &&
                  se.error &&
                  (0, e.jsx)("div", {
                    className: I().UploadPreviewError,
                    children: se.error,
                  }),
                me &&
                  se.needsCrop &&
                  (0, e.jsx)(P.jn, {
                    onClick: () => d(o),
                    children: (0, G.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function O(l) {
          const { asset: d } = l;
          return d.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: I().PreviewImgCtn,
                onClick: (o) =>
                  (0, R.pg)((0, e.jsx)(f, { asset: d }), (0, n.uX)(o)),
                children: [
                  (0, e.jsxs)("span", {
                    className: I().PreviewImgInfo,
                    children: [d.width, " x ", d.height],
                  }),
                  (0, e.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, e.jsx)("source", { src: d.dataUrl }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: I().PreviewImgCtn,
                style: { backgroundImage: `url(${d.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: I().PreviewImgInfo,
                  children: [d.width, " x ", d.height],
                }),
              });
        }
        function f(l) {
          const { asset: d, closeModal: o } = l;
          return (0, e.jsx)(ae.o0, {
            bAlertDialog: !0,
            closeModal: o,
            bAllowFullSize: !0,
            children: (0, e.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: d.dataUrl }),
            }),
          });
        }
        function t(l) {
          const d = [],
            o = new Array();
          for (const u of l) {
            if (u == j.X51) continue;
            const L = (0, G.we)("#Language_" + (0, j.LgB)(u));
            o.push({ label: L, data: u });
          }
          return (
            o.sort((u, L) => u.label.localeCompare(L.label)),
            o.forEach((u) => d.push({ label: u.label, data: u.data })),
            o
          );
        }
      },
      79573: (b, k, a) => {
        "use strict";
        a.d(k, { uE: () => Ee, it: () => Pe });
        var e = a(7850),
          v = a(99412),
          M = a(14947),
          w = a(65946),
          j = a(75844),
          g = a(90626),
          r = a(87498),
          C = a(50109),
          D = a(84676),
          m = a(19316),
          P = a(25359),
          x = a.n(P),
          A = a(54327),
          T = a(56330),
          ae = a(95695),
          R = a.n(ae),
          ne = a(2801),
          E = a(88003),
          _ = a(36118),
          H = a(71421),
          i = a(36707),
          $ = a(82734),
          n = a(18210),
          Y = a(54963),
          G = a(3166),
          y = a(71242),
          I = a(29630),
          S = a(35524),
          p = a(9046),
          Q = a(58483),
          N = a(73085),
          Z = a(93464),
          ee = a(95174),
          O = a(9709),
          f = a(22142),
          t = a(19298),
          l = a(13465),
          d = a(21659),
          o = a(15496),
          u = a.n(o),
          L = a(88812);
        function F(c) {
          const {
              event: s,
              spotlightURLOverride: h,
              fnHandleOpenEvent: q,
              fnImageFailureCallback: B,
              fnFilterImageURLsForKnownFailures: W,
              langOverride: te,
            } = c,
            Ie = (0, d.c5)(),
            fe = g.useCallback(
              (oe) => {
                oe.preventDefault(), q && q(s);
              },
              [s, q],
            ),
            he = te || (0, v.sfN)(G.TS.LANGUAGE),
            [xe, pe, ie] = (0, w.q3)(() => [
              s.GetSummaryWithFallback(he),
              s.GetNameWithFallback(he),
              s.BShowLibrarySpotlightText(),
            ]);
          let J = "spotlight",
            De = p.wI.spotlight_main;
          (s.appid == 2434320 || G.TS.EUNIVERSE == v.Rv) &&
            ((J = Ie
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (De = p.wI.full));
          let de =
            (0, L.WC)(h !== void 0 ? void 0 : s, J, he, De) ??
            (h !== void 0 ? [h] : []);
          W && de && (de = W(de));
          const re = xe.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(g.Fragment, {
            children: (0, e.jsx)("div", {
              className: u().MajorEvent_Ctn,
              ref: c.containerRef,
              children: (0, e.jsxs)(t.Z, {
                className: (0, i.A)(
                  u().AppDetailsSpotlightContainer,
                  u().MajorEventContainer,
                ),
                onActivate: fe,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: u().MajorEventBackground,
                    children: (0, e.jsx)(l.c, {
                      className: u().MajorEventImageBackgroundBlur,
                      rgSources: de,
                      onIncrementalError: (oe, je, Oe) => B && B(je),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: u().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(l.c, {
                        className: u().MajorEventImage,
                        rgSources: de,
                        onIncrementalError: (oe, je, Oe) => B && B(je),
                      }),
                      (0, e.jsx)("div", {
                        className: u().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: u().MajoreEventImageContentContainer,
                        children:
                          ie &&
                          (0, e.jsxs)("div", {
                            className: u().MajorEventContent,
                            children: [
                              (0, e.jsx)(l.c, {
                                className: u().MajorEventSpotlightBackground,
                                rgSources: de,
                                onIncrementalError: (oe, je, Oe) => B && B(je),
                              }),
                              (0, e.jsxs)("div", {
                                className: u().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: u().MajorEventTitle,
                                    children: pe,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: u().MajorEventSummary,
                                    children: re,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: u().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var U = a(79949),
          z = a.n(U);
        function se(c) {
          const {
              langOverride: s,
              artworkType: h,
              fnOnLanguagePreviewChange: q,
              clanSteamID: B,
              eventModel: W,
              partnerEventStore: te,
              fnOnRemoveImage: Ie,
              fnOnArtworkLangChange: fe,
              realms: he,
              fnLangHasData: xe,
              fnGetImageHashAndExt: pe,
            } = c,
            ie = pe(h, s),
            J = ie
              ? I.zU.GenerateURLFromHashAndExtAndLang(B, ie, p.wI.full, s)
              : "",
            [De] = (0, w.q3)(() => [ve(h, pe)]);
          return De == 0
            ? (0, e.jsxs)("div", {
                className: x().ImagePreviewContainer,
                children: [
                  h === "capsule" &&
                    (0, e.jsx)(le, {
                      imgURL:
                        G.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: W,
                    }),
                  h === "background" &&
                    (0, e.jsx)(K, {
                      imgURL:
                        G.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: s,
                      eventModel: W,
                      partnerEventStore: te,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(h) &&
                    (0, e.jsx)(_e, {
                      langOverride: s,
                      artworkType: h,
                      eventModel: W,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, n.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: x().ImagePreviewContainer,
                children: [
                  h === "capsule" &&
                    (0, e.jsx)(le, {
                      imgURL: J,
                      eventModel: W,
                      langOverride: s,
                    }),
                  h === "background" &&
                    (0, e.jsx)(K, {
                      imgURL: J,
                      lang: s,
                      eventModel: W,
                      partnerEventStore: te,
                    }),
                  h === "spotlight" &&
                    (0, e.jsx)(V, { imgURL: J, event: W, lang: s }),
                  h === "localized_store_app_spotlight" &&
                    (0, e.jsx)(V, { imgURL: J, event: W, lang: s }),
                  h === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(V, { imgURL: J, event: W, lang: s }),
                  (h === "broadcast_left" || h === "broadcast_right") &&
                    (0, e.jsx)(X, {
                      imgURL: J,
                      side: h === "broadcast_right" ? "right" : "left",
                    }),
                  h === "sale_header" && (0, e.jsx)(ce, { imgURL: J }),
                  h === "sale_overlay" && (0, e.jsx)(Ae, { imgURL: J }),
                  p.pb.includes(h) &&
                    (0, e.jsx)("img", {
                      className: O.PreviewImg,
                      src:
                        S.R.GetLocalizedImageGroupForEditAsURL(B, s) ?? void 0,
                    }),
                  h === "product_banner" && (0, e.jsx)(ue, { imgURL: J }),
                  h === "product_mobile_banner" &&
                    (0, e.jsx)(ue, { imgURL: J }),
                  h === "sale_logo" && (0, e.jsx)(ue, { imgURL: J }),
                  h === "bestofyear_banner" && (0, e.jsx)(ue, { imgURL: J }),
                  h === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(ue, { imgURL: J }),
                  (0, e.jsx)(f.h, {
                    langOverride: s,
                    clanSteamID: B,
                    fnOnLanguagePreviewChange: q,
                    fnOnRemoveImage: Ie,
                    fnOnArtworkLangChange: fe,
                    realms: he,
                    fnLangHasData: xe,
                    fnGetImageHash: (de) => (0, y.u)(pe(h, de) ?? ""),
                  }),
                ],
              });
        }
        function me(c) {
          const { artworkType: s } = c,
            h = ArtworkTypeMap[s];
          return jsxs("div", {
            className: previewstyles.SpotlightImage,
            children: [
              jsx("h1", {
                className: previewstyles.SpotImgTitle,
                children: Localize("#EventEditor_ArtworkType_" + s),
              }),
              jsxs("p", {
                className: previewstyles.SpotImgSubtitle,
                children: [h.width, " X ", h.height],
              }),
            ],
          });
        }
        function _e(c) {
          const { artworkType: s, langOverride: h, eventModel: q } = c,
            B = r.Fj[s],
            W = g.useMemo(
              () =>
                ge(
                  (0, n.we)("#EventEditor_ArtworkType_" + s),
                  `${B.width} X ${B.height}`,
                ),
              [B.height, B.width, s],
            );
          return (0, e.jsx)(V, { lang: h, imgURL: W, event: q });
        }
        function ge(c, s) {
          const B = document.createElement("canvas");
          (B.width = 780), (B.height = 200);
          const W = B.getContext("2d"),
            te = 20;
          for (let he = 0; he < 200; he += te)
            for (let xe = 0; xe < 780; xe += te)
              (W.fillStyle =
                (xe / te + he / te) % 2 === 0 ? "#a405e3ff" : "#000000"),
                W.fillRect(xe, he, te, te);
          const Ie = W.createLinearGradient(0, 0, 780, 0);
          Ie.addColorStop(0, "rgba(32,32,32,0.8)"),
            Ie.addColorStop(1, "rgba(60,60,60,0.8)"),
            (W.fillStyle = Ie),
            W.fillRect(0, 0, 780, 200);
          const fe = W.createRadialGradient(
            780 / 2,
            200 / 2,
            0,
            780 / 2,
            200 / 2,
            Math.max(780, 200) / 1.2,
          );
          return (
            fe.addColorStop(0, "rgba(0,0,0,0)"),
            fe.addColorStop(1, "rgba(0,0,0,0.6)"),
            (W.fillStyle = fe),
            W.fillRect(0, 0, 780, 200),
            (W.fillStyle = "#fff"),
            (W.font = "32px Arial"),
            (W.textAlign = "center"),
            (W.textBaseline = "middle"),
            W.fillText(c, 780 / 2, 200 / 2 - 20),
            s &&
              ((W.font = "18px Arial"), W.fillText(s, 780 / 2, 200 / 2 + 25)),
            B.toDataURL("image/png")
          );
        }
        function le(c) {
          const { imgURL: s, eventModel: h, langOverride: q } = c,
            B = (0, C.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(ee.u, {
              event: h,
              imageURLOverride: s,
              langOverride: q ?? B,
            }),
          });
        }
        function K(c) {
          const { lang: s, eventModel: h, partnerEventStore: q } = c,
            B = (0, Q.LJ)(),
            [W, te, Ie, fe, he] = (0, w.q3)(() => [
              h.GetNameWithFallback(s),
              h.GetDescriptionWithFallback(s),
              h.GetSubTitleWithLanguageFallback(s),
              h.type,
              h.AnnouncementGID,
            ]);
          let xe = te
            ? (0, e.jsx)(Z.fh, {
                text: te || "",
                showErrorInfo: !1,
                event: h,
                languageOverride: C.O.Get().GetCurEditLanguage(),
              })
            : (0, n.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: z().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: z().ExampleSectionTitle,
                children: (0, n.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, i.A)(z().DetailPageExample, "DetailPageExample"),
                children: (0, e.jsxs)("div", {
                  className: z().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: z().MainImageCtn,
                      children: (0, e.jsx)("img", { src: c.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: z().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: z().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: z().TextTitle,
                            children:
                              W ||
                              (0, n.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: z().TextSubTitle,
                            children:
                              Ie ||
                              (0, n.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: z().TextBody,
                            children: xe,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              fe != v.Fwr &&
                (0, e.jsxs)(g.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: z().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: z().ExampleSectionTitle,
                      children: (0, n.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, i.A)(
                        z().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: z().DetailExample2,
                        children: (0, e.jsx)(
                          N.He,
                          {
                            event: h,
                            emoticonStore: B,
                            partnerEventStore: q,
                            headerClassnames: "editor",
                            langOverride: s,
                            bDisableBroadcastPlayer: !0,
                          },
                          he,
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        const V = (c) => {
            const [s] = (0, D.t7)(c.event.appid, { include_assets: !0 });
            if (!s) return null;
            const h = s.GetName(),
              q = s.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: z().SpotlightExample,
              children: (0, e.jsx)(F, {
                event: c.event,
                strDisplayName: h ?? "",
                gameIconUrl: q,
                spotlightURLOverride: c.imgURL,
                langOverride: c.lang,
              }),
            });
          },
          X = (c) => {
            const s = [
              (0, e.jsx)("img", { src: c.imgURL }, "img"),
              (0, e.jsx)("div", { className: x().BroadcastPreview }, "video"),
            ];
            return (
              c.side === "right" && s.reverse(),
              (0, e.jsx)("div", {
                className: z().BroadcastPreviewContainer,
                children: s,
              })
            );
          },
          ce = (c) =>
            (0, e.jsx)("div", {
              className: z().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: c.imgURL,
              }),
            }),
          Ae = (c) =>
            (0, e.jsx)("div", {
              className: z().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: c.imgURL,
              }),
            }),
          ue = (c) =>
            (0, e.jsx)("div", {
              className: z().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: c.imgURL,
              }),
            });
        function ve(c, s) {
          let h = 0;
          for (let q = v.Bhc; q < v.bP9; ++q)
            (s(c, q)?.length ?? 0) > 0 && (h += 1);
          return h;
        }
        var Le = Object.defineProperty,
          Me = Object.getOwnPropertyDescriptor,
          Ce = (c, s, h, q) => {
            for (
              var B = q > 1 ? void 0 : q ? Me(s, h) : s, W = c.length - 1, te;
              W >= 0;
              W--
            )
              (te = c[W]) && (B = (q ? te(s, h, B) : te(B)) || B);
            return q && B && Le(s, h, B), B;
          };
        const Ue =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Ee = ((c) => (
          (c[(c.k_None = 0)] = "k_None"),
          (c[(c.k_Suggested = 1)] = "k_Suggested"),
          (c[(c.k_Required = 2)] = "k_Required"),
          (c[(c.k_Requested = 3)] = "k_Requested"),
          c
        ))(Ee || {});
        function Pe(c) {
          const {
              artworkType: s,
              headerHint: h,
              appid: q,
              fnToggleMinimize: B,
              realms: W,
              eventModel: te,
              fnLangHasData: Ie,
              fnGetImageHashAndExt: fe,
              fnSetImageURL: he,
              partnerEventStore: xe,
            } = c,
            [pe] = (0, D.t7)(q, { include_assets: !0 }),
            [ie, J] = (0, w.q3)(() => [
              te?.GetEventType(),
              te?.BHasTag("vo_marketing_message"),
            ]),
            De = ie == v.ajI;
          let de = null;
          h === 2
            ? (de = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, n.we)("#EventEditor_Required"),
              }))
            : h === 1
              ? (de = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, n.we)("#EventEditor_Suggested"),
                }))
              : h === 3 &&
                (de = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, n.we)("#EventEditor_Requested"),
                }));
          let re = null;
          s === "capsule"
            ? De
              ? (re = (0, e.jsxs)(e.Fragment, {
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
              : (re = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!J &&
                      (0, e.jsxs)("div", {
                        className: x().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, n.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${G.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
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
            : s === "background"
              ? (re = (0, e.jsx)(e.Fragment, {
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
              : s === "spotlight" || s === "localized_store_app_spotlight"
                ? (re = (0, e.jsx)(e.Fragment, {
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
                : s === "localized_store_app_spotlight_mobile"
                  ? (re = (0, e.jsx)(e.Fragment, {
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
                  : s === "broadcast_left" || s === "broadcast_right"
                    ? (re = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, n.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : s === "sale_header"
                      ? (re = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: R().EventElementRequired,
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
                      : s === "hero"
                        ? pe &&
                          (re = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, n.we)("#selectimage_tip_hero_1"),
                              }),
                              !pe.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: T.ErrorStylesBackground,
                                  children: (0, n.we)(
                                    "#EventEdtior_ArtworkType_hero_warning",
                                  ),
                                }),
                            ],
                          }))
                        : s === "localized_image_group" ||
                            s === "link_capsule" ||
                            s === "sale_section_title" ||
                            s === "schedule_track_art" ||
                            s === "localized_background_art"
                          ? (re = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, n.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, n.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Ue,
                                      target: G.TS.IN_CLIENT
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
                          : s === "product_banner"
                            ? (re = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: R().EventElementOptional,
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
                            : s === "product_mobile_banner" ||
                                s === "product_banner_override" ||
                                s === "product_mobile_banner_override"
                              ? (re = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: R().EventElementOptional,
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
                                        s === "product_mobile_banner" &&
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
                              : s === "tab_bar_background"
                                ? (re = (0, e.jsxs)(e.Fragment, {
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
                                : s === "sale_logo"
                                  ? (re = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: R().EventElementOptional,
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
                                  : (re = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: R().EventElementRequired,
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
          const oe = r.Fj[c.artworkType].width,
            je = r.Fj[c.artworkType].height;
          return (0, e.jsxs)("div", {
            id: c.id,
            className: x().ArtworkSelectorContainer,
            children: [
              !!c.title &&
                (0, e.jsxs)("div", {
                  className: x().Title,
                  onDoubleClick: B,
                  children: [
                    c.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    de,
                    B &&
                      (0, e.jsx)(m.$n, {
                        onClick: B,
                        children: (0, e.jsx)(H.he, {
                          toolTipContent: (0, n.we)(
                            c.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: c.bIsMinimized
                            ? (0, e.jsx)(_.hz4, {})
                            : (0, e.jsx)(_.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !c.bIsMinimized &&
                (0, e.jsxs)("div", {
                  className: (0, i.A)(x().SelectImageBlock, x().Tips),
                  children: [
                    re,
                    !!(oe && je) &&
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
                            (0, r.qj)(oe),
                            (0, r.qj)(je),
                          ),
                        ],
                      }),
                    !!c.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: T.WarningStylesWithIcon,
                          children: c.strWarning,
                        }),
                      }),
                    c.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    c.elAdditionalControls,
                    !!c.fnRemoveAllArtwork &&
                      (0, e.jsx)(m.$n, {
                        onClick: (Oe) => {
                          (0, E.pg)(
                            (0, e.jsx)(Te, {
                              fnRemoveAllArtwork: c.fnRemoveAllArtwork,
                            }),
                            (0, $.uX)(Oe) ?? window,
                          );
                        },
                        children: (0, n.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !c.bIsMinimized &&
                (0, e.jsx)(Se, {
                  clanSteamID: c.clanSteamID,
                  title: c.title ?? "",
                  eventModel: te,
                  artworkType: c.artworkType,
                  realms: W,
                  appid: q,
                  fnGetImageHashAndExt: fe,
                  fnSetImageURL: he,
                  fnLangHasData: Ie,
                  partnerEventStore: xe,
                }),
            ],
          });
        }
        function Te(c) {
          const { fnRemoveAllArtwork: s, closeModal: h } = c;
          return (0, e.jsx)(ne.o0, {
            strTitle: (0, n.we)("#Sale_RemoveAll"),
            strDescription: (0, n.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              s?.(), h?.();
            },
            onCancel: h,
          });
        }
        function Se(c) {
          const {
              artworkType: s,
              realms: h,
              clanSteamID: q,
              fnLangHasData: B,
              fnGetImageHashAndExt: W,
              fnSetImageURL: te,
              eventModel: Ie,
              appid: fe,
              partnerEventStore: he,
            } = c,
            xe = s === "localized_image_group",
            [pe, ie] = g.useState((0, C.E)()),
            [J, De] = g.useState(new Array()),
            de = g.useCallback(
              (oe, je, Oe) => {
                let Be = [];
                J.find((ye) => ye.clanImage.imageid == oe.imageid)
                  ? (Be = J.map((ye) =>
                      ye.clanImage.imageid == oe.imageid
                        ? { clanImage: oe, lang: je }
                        : ye,
                    ))
                  : Oe && (Be = J.concat({ clanImage: oe, lang: je })),
                  De(Be);
              },
              [J],
            ),
            re = g.useCallback(
              (oe, je, Oe) => {
                (0, M.h5)(() => {
                  (0, y.u)(W(s, je) ?? "") == oe.image_hash && te(s, null, je),
                    te(s, oe, Oe),
                    de(oe, Oe, !1);
                });
              },
              [W, s, te, de],
            );
          return s === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(m.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${G.TS.PARTNER_BASE_URL}admin/game/editbyappid/${fe}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, n.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(Re, {
                    list: J,
                    fnOnArtworkLanguageChange: re,
                    realms: h,
                    fnLangHasData: B,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, i.A)(
                        x().SelectImageBlock,
                        x().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(se, {
                        eventModel: Ie,
                        clanSteamID: q,
                        fnOnLanguagePreviewChange: (oe) => {
                          oe != pe && ie(oe);
                        },
                        langOverride: pe,
                        fnOnArtworkLangChange: xe ? null : re,
                        artworkType: s,
                        fnOnRemoveImage: xe ? null : (oe) => te(s, null, oe),
                        realms: h,
                        fnLangHasData: B,
                        fnGetImageHashAndExt: W,
                        partnerEventStore: he,
                      }),
                    }),
                  }),
                ],
              });
        }
        let Re = class extends g.Component {
          ShowLangChangeDialog(c, s) {
            const {
              fnOnArtworkLanguageChange: h,
              realms: q,
              fnLangHasData: B,
            } = this.props;
            (0, E.pg)(
              (0, e.jsx)(A.e, {
                clanImage: c,
                lang: s,
                fnOnArtworkLangChange: h,
                fnLangHasData: B,
                realms: q,
              }),
              window,
            );
          }
          GenerateImageMappings() {
            let c = new Array();
            const { list: s } = this.props;
            return (
              s.forEach((h) => {
                const { clanImage: q, lang: B } = h;
                let W = (0, n.we)("#Language_" + (0, v.LgB)(B));
                c.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: R().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, n.we)(
                            "#ImageUpload_Success_Mapping",
                            q.file_name ?? "",
                            W,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(q, B),
                          children: (0, n.we)(
                            "#ImageUpload_Success_Mapping_Change",
                          ),
                        }),
                      ],
                    },
                    "img_lang_" + h.clanImage.imageid + "_" + B,
                  ),
                );
              }),
              c
            );
          }
          render() {
            const { list: c } = this.props;
            if (!c || c.length == 0) return (0, e.jsx)("div", {});
            let s = this.GenerateImageMappings();
            return (0, e.jsx)("div", {
              className: x().UploadSuccess,
              children: s,
            });
          }
        };
        Ce([Y.oI], Re.prototype, "ShowLangChangeDialog", 1),
          (Re = Ce([j.PA], Re));
      },
      22142: (b, k, a) => {
        "use strict";
        a.d(k, { h: () => n });
        var e = a(7850),
          v = a(32093),
          M = a(99412),
          w = a(71742),
          j = a(64868),
          g = a(65946),
          r = a(90626),
          C = a(44894);
        const D =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var m = a(29630),
          P = a(9046),
          x = a(53424),
          A = a(25359),
          T = a.n(A),
          ae = a(54327),
          R = a(2801),
          ne = a(36118),
          E = a(71421),
          _ = a(18210),
          H = a(25792),
          i = a(19316),
          $ = a(11243);
        function n(I) {
          const {
            clanSteamID: S,
            fnGetImageHash: p,
            fnLangHasData: Q,
            fnOnRemoveImage: N,
          } = I;
          (0, x.mr)(S.GetAccountID());
          const Z = r.useMemo(() => {
              let t = new Array();
              const l = _.A0.GetLanguageListForRealms([
                v.TU.k_ESteamRealmGlobal,
                v.TU.k_ESteamRealmChina,
              ]);
              for (const d of l) {
                const o = p(d);
                if (o) {
                  const u = (0, M.LgB)(d),
                    L = (0, _.we)("#Language_" + u);
                  t.push({ lang: d, strLang: u, locLang: L, imgHash: o });
                }
              }
              return (
                (t = t.sort((d, o) =>
                  d.locLang > o.locLang ? 1 : d.locLang < o.locLang ? -1 : 0,
                )),
                t
              );
            }, [p]),
            [ee, O, f] = (0, j.uD)();
          return (0, e.jsxs)("div", {
            className: T().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: T().SelectImageTitle,
                children: (0, _.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: T().LanguageListContainer,
                children: Z.map((t) =>
                  (0, e.jsx)(
                    Y,
                    { langData: t, ...I },
                    "lang_select_" + S.GetAccountID() + " " + t.strLang,
                  ),
                ),
              }),
              !!N &&
                (0, e.jsxs)(i.$n, {
                  onClick: O,
                  children: [
                    (0, _.we)("#Sale_RemoveAll"),
                    (0, e.jsx)($.o, {
                      tooltip: (0, _.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(R.EN, {
                active: ee,
                children: (0, e.jsx)(R.o0, {
                  strTitle: (0, _.we)("#Dialog_AreYouSure"),
                  strDescription: (0, _.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: f,
                  onOK: () => {
                    for (let t = 0; t < M.bP9; t++) Q && N && Q(t) && N(t);
                  },
                }),
              }),
            ],
          });
        }
        function Y(I) {
          const {
              clanSteamID: S,
              langData: p,
              langOverride: Q,
              fnOnLanguagePreviewChange: N,
              fnOnArtworkLangChange: Z,
              fnOnRemoveImage: ee,
            } = I,
            [O, f] = (0, g.q3)(() => {
              const t = x.pU.GetClanImageByImageHash(S, p.imgHash);
              let l = "";
              t &&
                (l = m.zU.GenerateURLFromHashAndExtAndLang(
                  S,
                  m.zU.GetHashAndExt(t),
                  P.wI.full,
                  p.lang,
                ));
              let d = T().LanguageSelectorSelected;
              return (
                Q != p.lang &&
                  (d = p.imgHash
                    ? T().LanguageSelector
                    : T().LanguageSelectorNoData),
                [l, d]
              );
            });
          return (0, e.jsxs)("div", {
            id: p.strLang,
            className: T().LanguageContainer,
            onClick: (t) => {
              let l = (0, M.sfN)(t.currentTarget.id);
              N(l);
            },
            children: [
              (0, e.jsx)("div", { className: f, children: p.locLang }),
              (0, e.jsxs)("span", {
                className: T().LanguageOptions,
                children: [
                  !!O &&
                    (0, e.jsx)("a", {
                      href: O,
                      target: "_blank",
                      children: (0, e.jsx)(E.he, {
                        toolTipContent: (0, _.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: ne.YNO(),
                      }),
                    }),
                  !!Z && (0, e.jsx)(G, { ...I }),
                  !!ee && (0, e.jsx)(y, { fnOnRemoveImage: ee, langData: p }),
                ],
              }),
            ],
          });
        }
        function G(I) {
          const {
              clanSteamID: S,
              langData: p,
              fnOnArtworkLangChange: Q,
              fnGetImageHash: N,
              fnLangHasData: Z,
              realms: ee,
            } = I,
            [O, f, t] = (0, j.uD)(),
            l = (0, g.q3)(() => {
              const d = N(p.lang);
              return (
                (0, w.wT)(
                  !d || !d.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + d,
                ),
                x.pU.GetClanImageByImageHash(S, d)
              );
            });
          if (!l) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(E.he, {
                toolTipContent: (0, _.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": p.lang,
                  src: D,
                  onClick: () => f(),
                }),
              }),
              (0, e.jsx)(H.tH, {
                children: (0, e.jsx)(R.EN, {
                  active: O,
                  children: (0, e.jsx)(ae.e, {
                    clanImage: l,
                    lang: p.lang,
                    fnOnArtworkLangChange: Q,
                    fnLangHasData: Z,
                    realms: ee,
                    closeModal: t,
                  }),
                }),
              }),
            ],
          });
        }
        function y(I) {
          const { fnOnRemoveImage: S, langData: p } = I,
            [Q, N, Z] = (0, j.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(E.he, {
                toolTipContent: (0, _.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": p.lang,
                  src: C.A,
                  onClick: N,
                }),
              }),
              (0, e.jsx)(H.tH, {
                children: (0, e.jsx)(R.EN, {
                  active: Q,
                  children: (0, e.jsx)(R.o0, {
                    strTitle: (0, _.we)("#selectimage_remove_image"),
                    strDescription: (0, _.we)(
                      "#selectimage_remove_details",
                      (0, _.we)("#Language_" + (0, M.LgB)(p.lang)),
                    ),
                    onOK: () => {
                      S(p.lang);
                    },
                    closeModal: Z,
                  }),
                }),
              }),
            ],
          });
        }
      },
      54327: (b, k, a) => {
        "use strict";
        a.d(k, { e: () => T });
        var e = a(7850),
          v = a(65946),
          M = a(90626),
          w = a(76559),
          j = a(24806),
          g = a(95695),
          r = a.n(g),
          C = a(2801),
          D = a(36707),
          m = a(18210),
          P = a(25359),
          x = a.n(P),
          A = a(29630);
        function T(ae) {
          const {
              clanImage: R,
              closeModal: ne,
              lang: E,
              fnOnArtworkLangChange: _,
              realms: H,
              fnLangHasData: i,
            } = ae,
            [$, n] = (0, M.useState)(E),
            Y = w.b.InitFromClanID(R.clanAccountID),
            G = (0, v.q3)(() =>
              A.zU.GenerateURLFromHashAndExt(Y, A.zU.GetHashAndExt(R) ?? ""),
            );
          return (0, e.jsx)(C.o0, {
            strTitle: (0, m.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, m.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => _?.(R, E, $),
            onCancel: ne,
            closeModal: ne,
            children: (0, e.jsxs)("div", {
              className: (0, D.A)(r().FlexColumnContainer, x().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: x().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: x().ArtworkPreview,
                    src: G,
                  }),
                }),
                (0, e.jsx)(j.Ng, {
                  selectedLang: $,
                  fnLangHasData: i,
                  fnOnLanguageChanged: n,
                  realms: H,
                }),
              ],
            }),
          });
        }
      },
      38129: (b, k, a) => {
        "use strict";
        a.d(k, { p: () => G });
        var e = a(7850),
          v = a(90626),
          M = a(76559),
          w = a(41735),
          j = a.n(w),
          g = a(58632),
          r = a.n(g),
          C = a(88942),
          D = a(72604),
          m = a(34592),
          P = a(3166),
          x = a(35038),
          A = a(75916),
          T = a(68312);
        const ae = "nicknames";
        function R(y) {
          const I = (0, T.KV)(),
            { data: S, isLoading: p } = (0, C.I)({
              queryKey: [ae],
              queryFn: async () => {
                const Q = new Map();
                if (P.iA.logged_in) {
                  const N = x.w.Init(A.w_T),
                    ee = (await A.xtC.GetNicknameList(I, N)).Body().toObject();
                  ee?.nicknames &&
                    ee.nicknames.length > 0 &&
                    ee.nicknames.forEach((O) => {
                      O.accountid &&
                        O.nickname &&
                        Q.set(O.accountid, O.nickname);
                    });
                }
                return Q;
              },
            });
          return S ? S.get(y) : null;
        }
        async function ne(y) {
          if (!y || y.length == 0) return [];
          const I =
            (0, P.yK)() == "community"
              ? P.TS.COMMUNITY_BASE_URL
              : P.TS.STORE_BASE_URL;
          if (y.length == 1) {
            const S = { accountid: y[0], origin: self.origin },
              p = await j().get(`${I}actions/ajaxgetavatarpersona`, {
                params: S,
              });
            if (
              !p ||
              p.status != 200 ||
              p.data?.success != D.R ||
              !p.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, m.H))(p).strErrorMsg}`;
            return [p.data.userinfo];
          } else {
            const S = { accountids: y.join(","), origin: self.origin },
              p = await j().get(`${I}actions/ajaxgetmultiavatarpersona`, {
                params: S,
              });
            if (
              !p ||
              p.status != 200 ||
              p.data?.success != D.R ||
              !p.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, m.H))(p).strErrorMsg}`;
            const Q = new Map();
            return (
              p.data.userinfos.forEach((N) =>
                Q.set(new M.b(N.steamid).GetAccountID(), N),
              ),
              y.map((N) => Q.get(N))
            );
          }
        }
        const E = new (r())((y) => ne(y), { cache: !1 }),
          _ = "avatarandpersonas";
        function H(y) {
          return [_, y];
        }
        function i(y) {
          const { data: I, isLoading: S } = (0, C.I)({
            queryKey: H(y),
            queryFn: () => E.load(y),
          });
          return [I, S];
        }
        function $(y) {
          const I = useQueryClient(),
            { data: S, isLoading: p } = useQuery({
              queryKey: [_, y],
              queryFn: async () => {
                const N = await E.loadMany(y);
                return (
                  N.forEach((Z) => {
                    if (Z instanceof Error) return;
                    const ee = [_, new CSteamID(Z.steamid).GetAccountID()];
                    I.setQueryData(ee, Z);
                  }),
                  N
                );
              },
              enabled: y?.length > 0,
            }),
            Q = useMemo(() => {
              const N = new Array();
              return (
                S?.forEach((Z) => {
                  Z instanceof Error || N.push(Z);
                }),
                N
              );
            }, [S]);
          return p ? null : Q;
        }
        function n(y) {
          return ReactQueryClient.getQueryData([_, y]);
        }
        var Y = a(93355);
        function G(y) {
          const {
              accountID: I,
              bHideWhenNotAvailable: S,
              bHideName: p,
              bLink: Q = !0,
            } = y,
            [N] = i(I),
            Z = R(I),
            ee = v.useMemo(() => M.b.InitFromAccountID(I), [I]),
            O = `${P.TS.COMMUNITY_BASE_URL}profiles/${ee.ConvertTo64BitString()}`,
            f = Q ? "a" : "span";
          return (0, e.jsx)(e.Fragment, {
            children: N
              ? (0, e.jsxs)(f, {
                  href: Q ? O : void 0,
                  children: [
                    (0, e.jsx)("img", {
                      className: Y.SmallAvatar,
                      src: N.avatar_url,
                      "data-miniprofile": "s" + ee.ConvertTo64BitString(),
                    }),
                    !p &&
                      (0, e.jsx)("span", {
                        children: Z
                          ? `${Z} (${N.persona_name})`
                          : N.persona_name,
                      }),
                  ],
                })
              : (0, e.jsx)(e.Fragment, {
                  children: !S && (0, e.jsx)("span", { children: I }),
                }),
          });
        }
      },
      85143: (b, k, a) => {
        "use strict";
        a.d(k, { Dd: () => r, Eb: () => C });
        var e = a(7850),
          v = a(26589),
          M = a(95695),
          w = a.n(M),
          j = a(36707);
        function g(D, m) {
          return D
            ? m
              ? !!D.valve_admin
              : !!(D.valve_admin || D.support_user)
            : !1;
        }
        function r(D, m) {
          const P = !!(D && D.BIsClanAccount()),
            { data: x } = (0, v.hM)(P ? D.GetAccountID() : 0);
          return P && g(x, m);
        }
        function C(D) {
          const { clanSteamID: m, id: P } = D;
          return r(m, D.requireAdmin)
            ? (0, e.jsx)("div", {
                id: P,
                className: (0, j.A)(
                  D.className,
                  D.requireAdmin
                    ? M.ValveOnlyAdminBackground
                    : M.ValveOnlyBackground,
                ),
                children: D.children,
              })
            : null;
        }
      },
      22880: (b, k, a) => {
        "use strict";
        a.d(k, { g: () => M });
        var e = a(40323),
          v = a.n(e);
        class M {
          static ParseCSVFile(j, g) {
            return new Promise((r, C) => {
              const m = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: r,
                error: (P) => C({ errors: [P] }),
                transformHeader: g,
              };
              v().parse(j, m);
            });
          }
          static ReadFile(j) {
            return new Promise((g, r) => {
              const C = new FileReader();
              (C.onload = () => g(C.result ?? "")), C.readAsText(j);
            });
          }
          static WriteFile(j, g) {
            let r = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(j, g);
            else {
              const C = window.URL.createObjectURL(j);
              r.href = C;
            }
            r.setAttribute("download", g), r.click();
            try {
              document.removeChild(r);
            } catch {}
          }
          static WriteCSVToFile(j, g, r, C) {
            const D = C
                ? v().unparse({ fields: C, data: j }, { header: !0 })
                : v().unparse(j, { header: !0 }),
              m = r == !0 ? ["\uFEFF" + D] : [D];
            M.WriteFile(new Blob(m, { type: "text/csv:charset=utf-8;" }), g);
          }
          static m_DummyValueForQuestionHack = 0;
          static WriteXMLToFile(j, g) {
            const r = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let C =
              "<" +
              r() +
              'xml version="1.0" encoding="UTF-8" ' +
              r() +
              `>
`;
            (C += new XMLSerializer().serializeToString(j)),
              M.WriteFile(
                new Blob([C], { type: "application/xml:charset=utf-8;" }),
                g,
              );
          }
        }
      },
      95603: (b, k, a) => {
        "use strict";
        a.d(k, { DB: () => r, PW: () => D, Ss: () => j, hk: () => g });
        var e = a(7850),
          v = a(90626),
          M = a(72739),
          w = a(82734);
        function j(m, P) {
          const x = v.useRef(void 0),
            A = v.useCallback(
              (R) => {
                R.currentTarget.files.length > 0 &&
                  (m(R.currentTarget.files), (R.currentTarget.value = ""));
              },
              [m],
            ),
            T = v.useCallback(() => x.current.click(), []);
          return [
            M.createPortal(
              (0, e.jsx)("form", {
                onSubmit: C,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...P,
                  type: "file",
                  ref: x,
                  onChange: A,
                }),
              }),
              window.document.body,
            ),
            T,
          ];
        }
        function g(m) {
          const [P, x] = v.useState(!1),
            A = v.useCallback((E) => {
              ((E.dataTransfer.files && E.dataTransfer.files[0]) ||
                (E.dataTransfer.types && E.dataTransfer.types[0] == "Files")) &&
                x(!0);
            }, []),
            T = v.useCallback((E) => {
              w.NO(E) && x(!1);
            }, []),
            ae = v.useCallback(() => x(!1), []),
            R = P ? C : void 0,
            ne = v.useCallback(
              (E) => {
                E.dataTransfer.files?.length &&
                  (m(E.dataTransfer.files, E),
                  E.preventDefault(),
                  E.stopPropagation()),
                  x(!1);
              },
              [m],
            );
          return [
            {
              onDragEnter: A,
              onDragLeave: T,
              onDragEnd: ae,
              onDragOver: R,
              onDrop: ne,
            },
            P,
          ];
        }
        async function r(m, P = 1e3) {
          return await new Promise((x, A) => {
            const T = new Image();
            (T.src = m),
              (T.onload = () => x("success")),
              (T.onerror = () => x("error")),
              P > 0 && window.setTimeout(() => x("timeout"), P);
          });
        }
        function C(m) {
          m.preventDefault();
        }
        function D(m) {
          switch (m.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const P = m.name.match(/(?<=\.)[^.]+$/);
              return P ? P[0] : void 0;
          }
        }
      },
      55486: (b) => {
        b.exports = {
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
      40888: (b) => {
        b.exports = {
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
      33924: (b) => {
        b.exports = {
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
      53732: (b) => {
        b.exports = {
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
      9709: (b) => {
        b.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (b) => {
        b.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (b) => {
        b.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (b) => {
        b.exports = {
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
      25359: (b) => {
        b.exports = {
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
      79949: (b) => {
        b.exports = {
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
      15496: (b) => {
        b.exports = {
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
      93355: (b) => {
        b.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
      },
      44894: (b, k, a) => {
        "use strict";
        a.d(k, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();

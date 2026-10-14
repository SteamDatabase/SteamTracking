/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [32455],
    {
      55298: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { YA: () => R, p: () => D, qh: () => Z });
        var e = i(72604),
          p = i(20194),
          a = i(41735),
          fe = i.n(a),
          B = i(3166);
        function Z() {
          const re = (0, p.I)({
            queryKey: ["useValveAccounts"],
            queryFn: async () => {
              const oe = `${B.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
                K = await fe().get(oe);
              return K?.status == 200 && K.data?.success == e.R
                ? K.data.admins
                : (console.error("ValveAccounts:", K?.status), []);
            },
          });
          return re.isLoading ? null : re.data;
        }
        function D(re) {
          return Z()?.find((K) => K.id == re);
        }
        function R(re, oe) {
          return re
            .getQueryData(["useValveAccounts"])
            ?.find((Se) => Se.id === oe);
        }
      },
      69787: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { Dx: () => p, Un: () => a, cn: () => fe });
        var e = i(90626);
        const p = (0, e.createContext)(null),
          a = () => (0, e.useContext)(p);
        function fe(B, Z) {
          return B ? B + "?t=" + Z : null;
        }
      },
      91916: (te, Ge, i) => {
        "use strict";
        i.d(Ge, {
          MY: () => Se,
          UA: () => ne,
          Yd: () => I,
          qG: () => ae,
          rN: () => pe,
          vh: () => Ye,
        });
        var e = i(41735),
          p = i.n(e),
          a = i(90626),
          fe = i(99412),
          B = i(72604),
          Z = i(34592),
          D = i(3166),
          R = i(27066),
          re = Object.defineProperty,
          oe = Object.getOwnPropertyDescriptor,
          K = (S, P, k, v) => {
            for (
              var z = v > 1 ? void 0 : v ? oe(P, k) : P, G = S.length - 1, O;
              G >= 0;
              G--
            )
              (O = S[G]) && (z = (v ? O(P, k, z) : O(z)) || z);
            return v && z && re(P, k, z), z;
          };
        function Se() {
          return D.TS.EUNIVERSE == fe.Rv ? 12 : 1;
        }
        const Ie = class Cn {
          m_mapOptInToPartners = new Map();
          m_mapPromises = new Map();
          GetPartnerInfo(P) {
            return this.m_mapOptInToPartners.get(P);
          }
          BHasPartnerInfoLoad(P) {
            return this.m_mapOptInToPartners.has(P);
          }
          async FindPartnerByName(P) {
            return (
              this.m_mapPromises.has(P) ||
                this.m_mapPromises.set(P, this.InternalFindPartnerByName(P)),
              this.m_mapPromises.get(P)
            );
          }
          async InternalFindPartnerByName(P) {
            const k = new Array();
            try {
              const v = D.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
                z = {
                  sessionid: (0, D.KC)(),
                  searchtext: P,
                  origin: self.origin,
                },
                G = await p().get(v, { params: z });
              G?.status == 200 && G?.data?.success == B.R
                ? G.data.publishers.forEach((O) => {
                    const L = {
                      partnerid: O.publisherid,
                      name: O.publishername,
                      partner_url:
                        D.TS.PARTNER_BASE_URL +
                        `pub/publisher/${O.publisherid}/`,
                      contacts: O.contacts,
                    };
                    this.m_mapOptInToPartners.set(O.publisherid, L), k.push(L);
                  })
                : console.log(
                    `CPartnerInfoStore.FindPartnerByName failed with status ${G?.status} eresult ${G?.data?.success} and msg ${G?.data?.msg}`,
                  );
            } catch (v) {
              const z = (0, Z.H)(v);
              console.error(
                "CPartnerInfoStore.FindPartnerByName failed add: " +
                  z.strErrorMsg,
                z,
              );
            }
            return k;
          }
          async LoadPartnerInfo(P) {
            if (this.m_mapOptInToPartners.has(P))
              return this.m_mapOptInToPartners.get(P);
            const k = await this.FindPartnerByName("" + P);
            return (
              this.BHasPartnerInfoLoad(P) ||
                this.m_mapOptInToPartners.set(P, null),
              this.m_mapOptInToPartners.get(P)
            );
          }
          async LoadMultiplePartnerInfo(P) {
            if (!P || P.length == 0) return [];
            const k = P.filter((v) => !this.m_mapOptInToPartners.has(v));
            return (
              k.length > 0 && (await this.FindPartnerByName("" + k.join(","))),
              P.map((v) => this.m_mapOptInToPartners.get(v)).filter(Boolean)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              Cn.s_Singleton || (Cn.s_Singleton = new Cn()), Cn.s_Singleton
            );
          }
          constructor() {
            let P = JSON.parse(
              JSON.stringify((0, D.Tc)("partner_info", "application_config")),
            );
            this.ValidateStoreDefault(P) &&
              P.forEach((k) => this.m_mapOptInToPartners.set(k.partnerid, k));
          }
          ValidateStoreDefault(P) {
            const k = P;
            return k &&
              Array.isArray(k) &&
              k.length > 0 &&
              typeof k[0] == "object"
              ? typeof k[0].partnerid == "number" &&
                  typeof k[0].name == "string"
              : !1;
          }
        };
        K([R.o], Ie.prototype, "FindPartnerByName", 1);
        let Re = Ie;
        function Ye(S) {
          const [P, k] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              !P &&
                S?.length > 0 &&
                Re.Get()
                  .LoadMultiplePartnerInfo(S)
                  .then(() => k(!0));
            }, [S, P]),
            P
          );
        }
        function ne(S) {
          const [P, k] = a.useState(() => Re.Get().GetPartnerInfo(S));
          return (
            a.useEffect(() => {
              !Re.Get().BHasPartnerInfoLoad(S) && S > 0
                ? Re.Get()
                    .LoadPartnerInfo(S)
                    .then((v) => k(v))
                : Re.Get().BHasPartnerInfoLoad(S) &&
                  P?.partnerid != S &&
                  k(Re.Get().GetPartnerInfo(S));
            }, [S, P]),
            [P]
          );
        }
        function pe() {
          return { fnFindPartnerByName: Re.Get().FindPartnerByName };
        }
        function I(S) {
          return Re.Get().GetPartnerInfo(S);
        }
        function ae(S) {
          return Re.Get().LoadPartnerInfo(S);
        }
      },
      2272: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { AS: () => w, KZ: () => ce, c$: () => _e });
        var e = i(7850),
          p = i(99412),
          a = i(41635),
          fe = i(86048),
          B = i(64868),
          Z = i(51614),
          D = i(69787),
          R = i(34604),
          re = i(28410),
          oe = i(90626),
          K = i(51746),
          Se = i(75806),
          Ie = i(58534),
          Re = i(25792),
          Ye = i(48127),
          ne = i(249),
          pe = i(1880),
          I = i(69168),
          ae = i(88003),
          S = i(83085),
          P = i(50660),
          k = i(36118),
          v = i(85599),
          z = i(71421),
          G = i(36707),
          O = i(82734),
          L = i(18210),
          Ee = i(82363),
          T = i(43104),
          N = i.n(T),
          F = i(14295),
          Q = i(17616),
          b = i(2259),
          A = i(3166);
        function w(ye) {
          const {
              src: Ae,
              inLink: Me,
              setAttrs: ue,
              focusView: He,
              removeNode: Oe,
              activeLanguage: Be,
              allowAnimations: Je,
              mapValues: et,
              fnUpdateDocument: ht,
              selected: st,
            } = ye,
            [we, at] = (0, fe.OP)(),
            [Ze, qe] = (0, fe.OP)(),
            tt = (0, B.DF)(we || Ze, 250),
            [bt, At, Qe] = (0, B.uD)(),
            Bt = (0, re.FD)(),
            Kt = oe.useCallback(() => {
              He(), Qe();
            }, [He, Qe]),
            zt = oe.useMemo(
              () =>
                Bt.find(
                  (It) => (0, R.q3)(It).toLowerCase() === Ae.toLowerCase(),
                ),
              [Ae, Bt],
            ),
            Ft = zt ? (0, R.q3)(zt) : null,
            {
              elLocalizedImageGroupDialog: Ps,
              elLocalizedImageGroupControl: _t,
            } = U(zt, Be, He),
            ct = (0, D.Un)(),
            ft = (It) => {
              const us = It.currentTarget;
              us.paused ? us.play() : us.pause();
            };
          let Ke;
          if (zt) {
            const It = (0, R.IP)(zt, Je, Be);
            if (It) {
              const us = (0, R.Bv)(zt, Be),
                gs = (0, G.A)(T.ExtraAssetImg, st && T.Selected);
              Ke =
                It.usage == R.nO
                  ? (0, e.jsx)(
                      "video",
                      {
                        className: gs,
                        src: (0, D.cn)(It.url, ct),
                        title: Ft,
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        autoPlay: !0,
                        onClick: ft,
                      },
                      Ft,
                    )
                  : (0, e.jsx)(
                      "img",
                      {
                        className: gs,
                        src: (0, D.cn)(It.url, ct),
                        alt: us,
                        title: Ft,
                      },
                      Ft,
                    );
            } else
              Ke = (0, e.jsx)("span", {
                className: T.ExtraAssetError,
                children: (0, L.we)(
                  "#StoreAdmin_GameDescription_MissingImageLanguage",
                  Ae,
                ),
              });
          } else
            Ke = (0, e.jsx)("span", {
              className: T.ExtraAssetError,
              children: (0, L.we)(
                "#StoreAdmin_GameDescription_MissingImage",
                Ae,
              ),
            });
          const Ss = (It, us) => {
              if (us) {
                const gs = new Map();
                for (const [ln, ks] of et) {
                  const cn = new RegExp(`${Ft}(?!\\w)`, "g"),
                    Ws = ks.Value.replace(cn, `${It}`);
                  gs.set(ln, Ws);
                }
                ht(gs);
              } else ue({ src: It });
            },
            [Zt, Us] = oe.useState(0),
            [ns, Ms] = oe.useState(0),
            an = (0, b.wY)((It) =>
              Us(It.target.offsetLeft + It.borderBoxSize[0].inlineSize),
            ),
            Wt = (0, b.wY)((It) => Ms(It.borderBoxSize[0].inlineSize)),
            zs = ns + 16 >= Zt,
            on = zs ? Zt : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              bt &&
                (0, e.jsx)(Pe, {
                  editAsset: Ft,
                  bReplace: !0,
                  onAssetSelected: Ss,
                  hideModal: Kt,
                }),
              Ps,
              (0, e.jsxs)("div", {
                ref: an,
                className: (0, G.A)({
                  [T.ExtraAssetImgTag]: !0,
                  [T.ExtraAssetControlsContainer]: !0,
                  [T.Hovered]: tt,
                  [T.InDeprecatedLink]: Me,
                }),
                title: "",
                ...at,
                children: [
                  Me && (0, e.jsx)(J, {}),
                  (0, e.jsxs)("div", {
                    ref: Wt,
                    className: (0, G.A)(
                      T.ExtraAssetControls,
                      zs && T.SmallImage,
                    ),
                    style: { left: on },
                    ...qe,
                    children: [
                      _t,
                      (0, e.jsx)(P.ff, {
                        onClick: At,
                        tooltip: (0, L.we)(
                          "#StoreAdmin_GameDescription_ReplaceImage",
                        ),
                        children: (0, e.jsx)(ne.ffu, {}),
                      }),
                      (0, e.jsx)(P.ff, {
                        onClick: Oe,
                        tooltip: (0, L.we)(
                          "#StoreAdmin_GameDescription_RemoveImage",
                        ),
                        children: (0, e.jsx)(k.X, {}),
                      }),
                    ],
                  }),
                  Ke,
                ],
              }),
            ],
          });
        }
        function U(ye, Ae, Me) {
          const [ue, He, Oe] = (0, B.uD)(),
            Be = oe.useCallback(() => {
              Me?.(), Oe();
            }, [Me, Oe]);
          let Je, et;
          return (
            (0, R.pN)(ye)
              ? ((Je =
                  ue &&
                  (0, e.jsx)(Le, {
                    selectedAsset: ye,
                    hideModal: Be,
                    activeLanguage: Ae,
                  })),
                (et = (0, e.jsx)(P.ff, {
                  onClick: He,
                  tooltip: (0, L.we)(
                    "#StoreAdmin_GameDescription_EditImageDetails",
                  ),
                  children: (0, e.jsx)(k.vCk, { className: "SVGIcon_Button" }),
                })))
              : (0, R.i$)(ye) &&
                (et = (0, e.jsx)(P.ff, {
                  onClick: () => {},
                  tooltip: (0, L.we)(
                    "#StoreAdmin_GameDescription_EditImageDetails_Legacy",
                  ),
                  children: (0, e.jsx)(k.R2D, {}),
                })),
            {
              elLocalizedImageGroupDialog: Je,
              elLocalizedImageGroupControl: et,
            }
          );
        }
        function J() {
          return (0, e.jsx)("span", {
            className: T.ImageLinkDisabledWarning,
            children: (0, e.jsx)("span", {
              className: T.TopBar,
              children: (0, e.jsx)(z.Gq, {
                toolTipContent: (0, L.we)(
                  "#StoreAdmin_GameDescription_ImageLinkDisabled_Description",
                ),
                children: (0, e.jsx)("span", {
                  className: T.TopBarContent,
                  children: "Disabled",
                }),
              }),
            }),
          });
        }
        function ce(ye) {
          const { nodeType: Ae } = ye,
            { view: Me } = (0, P.wU)(),
            [ue, He, Oe] = (0, B.uD)(),
            Be = oe.useCallback(() => {
              Oe(), Me.focus();
            }, [Oe, Me]),
            Je = oe.useCallback(
              (et) => {
                Me.dispatch(
                  Me.state.tr.insert(
                    Me.state.selection.to,
                    Ae.createChecked({ src: et }),
                  ),
                ),
                  Be();
              },
              [Me, Ae, Be],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              ue && (0, e.jsx)(Pe, { onAssetSelected: Je, hideModal: Be }),
              (0, e.jsx)(P.ff, {
                onClick: He,
                toggled: ue,
                tooltip: (0, L.we)("#StoreAdmin_GameDescription_InsertImage"),
                children: (0, e.jsx)(ne._V3, {}),
              }),
            ],
          });
        }
        function Pe(ye) {
          const {
              editAsset: Ae,
              bReplace: Me,
              onAssetSelected: ue,
              hideModal: He,
            } = ye,
            Oe = (0, re.FD)(!0),
            [Be, Je] = oe.useState(Ae),
            [et, ht] = (0, S.Y0)(He, R.SG),
            [st, we] = oe.useState(!1),
            [at, Ze] = oe.useState(""),
            qe = oe.useCallback(
              (tt, bt) => {
                tt && (ue(tt, bt), He());
              },
              [ue, He],
            );
          return (0, e.jsxs)(I.E, {
            active: !0,
            children: [
              et,
              (0, e.jsx)(ae.x_, {
                onEscKeypress: He,
                children: (0, e.jsxs)(Ie.U9, {
                  classNameContent: T.ExtraAssetDialogContent,
                  children: [
                    (0, e.jsx)(Ie.Y9, {
                      children: (0, L.we)(
                        "#StoreAdmin_GameDescription_SelectImage",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: T.ExtraAssetsDialogDescription,
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, L.we)(
                            "#StoreAdmin_GameDescription_ExistingImages",
                          ),
                        }),
                        (0, e.jsxs)("div", {
                          className: T.UploadButtonContainer,
                          children: [
                            (0, e.jsx)("div", {
                              children: (0, L.we)(
                                "#StoreAdmin_ExtraAssetUpload_UploadNew",
                              ),
                            }),
                            (0, e.jsx)(Ie.jn, {
                              className: T.UploadButton,
                              onClick: ht,
                              children: (0, L.we)(
                                "#StoreAdmin_ExtraAssetUpload_BrowseForFile",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: T.ExtraAssetSearch,
                      children: (0, e.jsx)(Ie.pd, {
                        type: "text",
                        value: at,
                        bShowClearAction: !0,
                        onChange: (tt) => Ze(tt.currentTarget.value || ""),
                        placeholder: (0, L.we)(
                          "#StoreAdmin_ExtraAssetUpload_SearchPlaceholder",
                        ),
                      }),
                    }),
                    (0, e.jsx)(Ie.nB, {
                      className: T.ExtraAssetsGridDialog,
                      children: (0, e.jsx)("div", {
                        className: (0, G.A)(
                          T.ExtraAssetsGrid,
                          T.ExtraAssetsChooser,
                        ),
                        children: Oe.filter((tt) =>
                          (0, R.q3)(tt).includes(at),
                        ).map((tt) =>
                          (0, e.jsx)(
                            ve,
                            {
                              extraAsset: tt,
                              onSelectAsset: Je,
                              onChooseAsset: (bt) => qe(bt, st),
                              selected: (0, R.q3)(tt) == Be,
                            },
                            (0, R.q3)(tt),
                          ),
                        ),
                      }),
                    }),
                    (0, e.jsxs)(Ie.wi, {
                      children: [
                        Me &&
                          (0, e.jsx)(Ie.Yh, {
                            className: T.ReplaceAllCheck,
                            checked: st,
                            onChange: we,
                            label: (0, L.we)(
                              "#StoreAdmin_ExtraAssetUpload_ReplaceAll",
                            ),
                            tooltip: (0, L.we)(
                              "#StoreAdmin_ExtraAssetUpload_ReplaceAll_ttip",
                            ),
                          }),
                        (0, e.jsx)(Ie.CB, {
                          onCancel: He,
                          onOK: (tt) => {
                            tt.preventDefault(), qe(Be, st);
                          },
                          bOKDisabled: !Be,
                          strOKText: (0, L.we)(
                            "#StoreAdmin_GameDescription_UseThisImage",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function ve(ye) {
          const {
              extraAsset: Ae,
              onSelectAsset: Me,
              onChooseAsset: ue,
              selected: He,
            } = ye,
            Oe = oe.useRef(null),
            Be = (0, R.q3)(Ae);
          return (
            oe.useLayoutEffect(() => {
              He &&
                Oe.current?.scrollIntoView({
                  block: "nearest",
                  inline: "nearest",
                });
            }, []),
            (0, e.jsx)("div", {
              ref: Oe,
              className: (0, G.A)(T.ExtraAssetChoice, He && T.Selected),
              title: Be,
              onClick: (Je) => Me(Be),
              onDoubleClick: (Je) => ue(Be),
              children: (0, e.jsx)(De, { extraAsset: Ae, controls: !1 }),
            })
          );
        }
        function Le(ye) {
          const { selectedAsset: Ae, activeLanguage: Me, hideModal: ue } = ye;
          if ((ie(!Ae, ue), !!Ae))
            return (0, e.jsx)(I.E, {
              active: !0,
              children: (0, e.jsx)(ae.x_, {
                onEscKeypress: ue,
                children: (0, e.jsxs)(Ie.U9, {
                  classNameContent: T.LocalizeAssetDialogContent,
                  children: [
                    (0, e.jsx)(Ie.Y9, {
                      children: (0, L.we)(
                        "#StoreAdmin_ExtraAssetUpload_LocalizeAsset_Title",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      className: T.LocalizeAssetsDialogDescription,
                      children: (0, e.jsx)("div", {
                        children: (0, L.we)(
                          "#StoreAdmin_ExtraAssetUpload_LocalizeAsset_Desc",
                        ),
                      }),
                    }),
                    (0, e.jsxs)(Ie.nB, {
                      children: [
                        (0, e.jsx)(de, { onlyExtraAsset: Ae }),
                        (0, e.jsx)(Re.tH, {
                          children: (0, e.jsx)(H, {
                            extraAsset: Ae,
                            activeLanguage: Me,
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsx)(Ie.wi, {
                      children: (0, e.jsx)(Ie.jn, {
                        onClick: ue,
                        children: (0, L.we)("#Button_Close"),
                      }),
                    }),
                  ],
                }),
              }),
            });
        }
        function H(ye) {
          const { extraAsset: Ae, activeLanguage: Me } = ye,
            ue = (0, R.wN)(Ae),
            He = (0, D.Un)(),
            Oe = oe.useCallback(
              (we) => (0, D.cn)((0, R.IP)(Ae, !0, we)?.url, He),
              [Ae, He],
            ),
            [Be, Je] = oe.useState(void 0),
            [et, ht, st] = (0, B.uD)();
          return ue
            ? (0, e.jsxs)("div", {
                children: [
                  et &&
                    (0, e.jsx)(Ue, {
                      extraAsset: Ae,
                      deleteLang: Be,
                      hideModal: st,
                    }),
                  (0, e.jsx)(Se.z, {
                    rgAssetLangs: ue,
                    initialLang: Me,
                    showDeleteAll: !1,
                    imageClassname: T.DisplayLocImage,
                    fnGetAssetUrl: Oe,
                    fnDeletAssetLang: (we) => {
                      Je(we), ht();
                    },
                    fnDeleteAllAssets: () => {
                      Je(void 0), ht();
                    },
                  }),
                ],
              })
            : null;
        }
        function ie(ye, Ae) {
          oe.useEffect(() => {
            ye && Ae();
          }, [ye, Ae]);
        }
        function _e(ye) {
          const { asset_mtime: Ae, assets_list: Me } = ye,
            ue = new Map(Me),
            He = (0, re.FD)(!0),
            Oe = oe.useMemo(() => a.WD(He.filter(R.pN), R.K7), [He]),
            Be = oe.useMemo(
              () =>
                He.filter(R.pN).map((qe) => ({
                  key: (0, R.K7)(qe),
                  caption: (0, R.K7)(qe),
                  mapAltText: qe.alt_text,
                })),
              [He],
            ),
            Je = (0, Q.gU)(),
            [et, ht, st] = (0, B.uD)(),
            { mutateAsync: we, isPending: at } = Te(),
            Ze = async (qe, tt) =>
              (await we({ strExtraAssetFileName: qe, mapAltText: tt })) !== !1;
          return (0, e.jsxs)(D.Dx.Provider, {
            value: Ae,
            children: [
              et &&
                (0, e.jsx)(Ee.B, {
                  entries: Be,
                  isLoading: !1,
                  hideModal: st,
                  mutateAltTextAsync: Ze,
                  isMutatePending: at,
                  fnGetImage: (qe, tt) =>
                    (0, e.jsx)(De, {
                      extraAsset: Oe.get(qe),
                      caption: !1,
                      controls: !1,
                      primaryLanguage: tt,
                      mapAssetsList: ue,
                    }),
                }),
              He.some(R.pN) &&
                (0, e.jsxs)("div", {
                  className: T.AltTextBtn,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, L.we)("#StoreAdmin_CustomImages_Title"),
                    }),
                    (0, e.jsx)(Ie.jn, {
                      onClick: ht,
                      children: (0, L.we)("#StoreAdmin_EditAltText_Button"),
                    }),
                  ],
                }),
              (0, e.jsx)("div", {
                className: T.ExtraAssetsPageList,
                children: (0, e.jsx)("div", {
                  className: T.ExtraAssetsGrid,
                  children: [...He].map((qe) =>
                    (0, e.jsx)(
                      De,
                      {
                        extraAsset: qe,
                        primaryLanguage: Je,
                        mapAssetsList: ue,
                      },
                      (0, R.q3)(qe),
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(de, {}),
            ],
          });
        }
        function de(ye) {
          const { onlyExtraAsset: Ae } = ye,
            Me = (0, re.Y7)(),
            ue = (0, F.L)(),
            He = (we) => {
              const at = we
                ? [...we].reverse().find((Ze) => Ze.bSuccess)?.uploadResult
                : null;
              at && Me(at);
            },
            Oe = (0, re.FD)(),
            Be = oe.useMemo(() => Oe.filter(R.pN), [Oe]),
            Je = Ce(Be);
          oe.useEffect(() => {
            const we = (at) => ({
              baseFilename: (0, R.K7)(at),
              languages: (0, R.i$)(at) ? [p.Bhc] : (0, R.wN)(at),
            });
            ue.SetExistingAssetGroups(Be.map(we), Je),
              ue.SetOnlyAssetGroup(Ae ? we(Ae) : null);
          }, [ue, Be, Ae, Je]);
          const et = le(Ae),
            { rgRealmList: ht } = (0, re.aJ)();
          let st;
          return (
            Ae && !et
              ? (st = (0, L.we)(
                  "#StoreAdmin_ExtraAssetUpload_Instructions_AdditionalNoSize",
                ))
              : Ae && et
                ? (st = (0, L.we)(
                    "#StoreAdmin_ExtraAssetUpload_Instructions_AdditionalWithSize",
                    et.width,
                    et.height,
                  ))
                : (st = (0, L.we)(
                    "#StoreAdmin_ExtraAssetUpload_Instructions_Base",
                  )),
            (0, e.jsx)("div", {
              children: (0, e.jsx)(Ye.O9, {
                imageUploader: ue,
                rgRealmList: ht,
                fnUploadComplete: He,
                elOverrideDragAndDropText: st,
                elAdditonalButtons: (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsx)("div", {
                    className: T.InstructionsForLocAssets,
                    children: (0, L.we)(
                      "#StoreAdmin_ExtraAssetUpload_Instructions_Note",
                    ),
                  }),
                }),
              }),
            })
          );
        }
        function Ce(ye) {
          const [Ae, Me] = oe.useState(void 0),
            ue = (0, D.Un)();
          return (
            oe.useEffect(() => {
              const He = ye.map(async (Oe) => {
                let Be = (0, R.IP)(Oe, !1, p.xPp);
                return (
                  Be || (Be = (0, R.IP)(Oe, !0, p.xPp)),
                  (0, K.II)(
                    await (0, K.S2)((0, D.cn)(Be?.url, ue), Be?.usage == R.nO),
                  )
                );
              });
              Promise.all(He).then(Me);
            }, [ye, ue]),
            Ae
          );
        }
        function le(ye) {
          const Ae = oe.useMemo(() => (ye ? [ye] : []), [ye]),
            Me = Ce(Ae);
          return Me?.length > 0 ? Me[0] : void 0;
        }
        function De(ye) {
          const {
              extraAsset: Ae,
              caption: Me = !0,
              controls: ue = !0,
              primaryLanguage: He,
              mapAssetsList: Oe,
            } = ye,
            Be = oe.useRef(void 0),
            Je = (0, fe.BZ)(Be),
            [et, ht, st] = (0, B.uD)(),
            we = (0, D.Un)(),
            at = (0, R.q3)(Ae);
          let Ze;
          if ((0, R.i$)(Ae)) {
            const ct = (0, R.IP)(Ae, !1);
            Ze = ct ? [ct] : [];
          } else {
            const ct = He == p.ZLm ? p.NFp : p.Bhc,
              ft = (0, R.wN)(Ae).sort((Ke, Ss) => ge(He, ct, Ke, Ss));
            Ze = Array.from({ length: Math.min(3, ft.length) }).map((Ke, Ss) =>
              (0, R.IP)(Ae, Ss == 0, ft[Ss]),
            );
          }
          const qe = () => {
              window.open((0, D.cn)(Ze[0]?.url, we));
            },
            tt = () => (0, O.OG)(at),
            bt = (0, re.TQ)(),
            {
              elLocalizedImageGroupDialog: At,
              elLocalizedImageGroupControl: Qe,
            } = U(Ae, null, null),
            Bt = (ct) => {
              const ft = ct.currentTarget;
              ft.paused ? ft.play() : ft.pause();
            },
            Kt = Oe
              ? Array.from(Oe).reduce(
                  (ct, [ft, Ke]) => (Ke.includes(at) ? [...ct, ft] : ct),
                  [],
                )
              : [],
            zt = 3,
            Ft = new Intl.ListFormat(L.pf.GetPreferredLocales(), {
              style: "long",
              type: "conjunction",
            }),
            Ps = Kt.map((ct) => (0, L.we)("#Language_" + ct)),
            _t =
              Kt.length <= 3
                ? Ft.format(Ps)
                : Ft.format([
                    ...Ps.slice(0, zt - 1),
                    (0, L.we)(
                      "#StoreAdmin_GameDescription_AssetsInUseOthers",
                      Kt.length - zt + 1,
                    ),
                  ]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              At,
              (0, e.jsxs)("div", {
                ref: Be,
                className: (0, G.A)(
                  T.ExtraAssetStack,
                  T.ExtraAssetControlsContainer,
                  Je && T.Hovered,
                ),
                title: at,
                children: [
                  et && (0, e.jsx)(Ue, { extraAsset: Ae, hideModal: st }),
                  ue &&
                    (0, e.jsxs)("div", {
                      className: T.ExtraAssetControls,
                      title: "",
                      children: [
                        Qe,
                        (0, e.jsx)(P.ff, {
                          onClick: qe,
                          tooltip: (0, L.we)(
                            "#StoreAdmin_GameDescription_OpenInNewWindow",
                          ),
                          children: (0, e.jsx)(ne.glU, {}),
                        }),
                        !bt &&
                          (0, e.jsx)(P.ff, {
                            onClick: tt,
                            tooltip: (0, L.we)(
                              "#StoreAdmin_GameDescription_CopyNameToClipboard",
                            ),
                            children: (0, e.jsx)(ne.QRo, {}),
                          }),
                        Kt.length == 0 &&
                          (0, e.jsx)(P.ff, {
                            onClick: ht,
                            tooltip: (0, L.we)(
                              "#StoreAdmin_GameDescription_DeleteAsset",
                            ),
                            children: (0, e.jsx)(k.X, {}),
                          }),
                        Kt.length > 0 &&
                          (0, e.jsx)(P.ff, {
                            onClick: () => {},
                            tooltip: (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, L.we)(
                                  "#StoreAdmin_GameDescription_AssetsInUse1",
                                  _t,
                                ),
                                (0, e.jsx)("br", {}),
                                (0, e.jsx)("br", {}),
                                (0, L.we)(
                                  "#StoreAdmin_GameDescription_AssetsInUse2",
                                ),
                              ],
                            }),
                            children: Kt.length,
                          }),
                      ],
                    }),
                  (0, e.jsx)("div", {
                    className: T.StackedImageCtn,
                    children: Ze.map((ct, ft) =>
                      ct.usage == R.nO
                        ? (0, e.jsx)(
                            "video",
                            {
                              className: (0, G.A)(
                                T.StackedImage,
                                T[`Image-${ft}`],
                              ),
                              src: ct.url + "?t=" + we,
                              onDoubleClick: ue ? qe : void 0,
                              muted: !0,
                              loop: !0,
                              playsInline: !0,
                              autoPlay: !0,
                              onClick: Bt,
                            },
                            ct.url + ft,
                          )
                        : (0, e.jsx)(
                            "img",
                            {
                              className: (0, G.A)(
                                T.StackedImage,
                                T[`Image-${ft}`],
                              ),
                              src: ct.url + "?t=" + we,
                              onDoubleClick: ue ? qe : void 0,
                            },
                            ct.url + ft,
                          ),
                    ),
                  }),
                  Me &&
                    (0, e.jsx)("div", {
                      className: T.ExtraAssetName,
                      children: (0, R.K7)(Ae),
                    }),
                ],
              }),
            ],
          });
        }
        function ge(ye, Ae, Me, ue) {
          if (ye != null) {
            if (Me == ye && ue != ye) return -1;
            if (Me != ye && ue == ye) return 1;
            if (Me == Ae && ue != Ae) return -1;
            if (Me != Ae && ue == Ae) return 1;
          }
          return Me - ue;
        }
        function Ue(ye) {
          const { extraAsset: Ae, deleteLang: Me, hideModal: ue } = ye,
            { mutate: He, isPending: Oe, isSuccess: Be } = ze(),
            Je = Oe || Be;
          return (
            oe.useEffect(() => {
              Be && ue();
            }, [Be, ue]),
            (0, e.jsx)(I.E, {
              active: !0,
              children: (0, e.jsx)(pe.o0, {
                onOK: () => He({ extraAsset: Ae, eLang: Me }),
                bOKDisabled: Je,
                strOKButtonText: (0, L.we)(
                  "#StoreAdmin_GameDescription_DeleteAsset",
                ),
                strTitle: (0, L.we)("#StoreAdmin_GameDescription_DeleteAsset"),
                strDescription: Je
                  ? (0, e.jsx)(v.t, { position: "center", size: "medium" })
                  : (0, L.we)(
                      "#StoreAdmin_GameDescription_DeleteAsset_Confirm",
                    ),
                onCancel: ue,
              }),
            })
          );
        }
        function ze() {
          const ye = (0, re.Z3)("ajaxmodifyextraassets"),
            Ae = (0, re.Y7)();
          return (0, Z.n)({
            mutationFn: async ({ extraAsset: Me, eLang: ue }) => {
              const He = new FormData();
              He.append("sessionid", (0, A.KC)()),
                He.append("action", "delete"),
                He.append("name", (0, R.K7)(Me)),
                (0, R.pN)(Me) &&
                  ue != null &&
                  ue != p.xPp &&
                  He.append("lang", (0, p.LgB)(ue));
              const Oe = await fetch(ye, { method: "post", body: He }),
                Be = await Oe.json();
              if (!Oe.ok) throw Be.errors?.join(" ") || "Error deleting asset";
              return Be;
            },
            onSuccess: (Me) => {
              Ae(Me.rgExtraAssets);
            },
            onError: (Me) => {
              console.error(
                (0, L.we)(
                  "#StoreAdmin_UploadError_Generic",
                  typeof Me == "string" ? Me : Me.message,
                ),
              );
            },
          });
        }
        function Te() {
          const ye = (0, re.Z3)("ajaxmodifyextraassets"),
            Ae = (0, re.Y7)();
          return (0, Z.n)({
            mutationFn: async ({
              strExtraAssetFileName: ue,
              mapAltText: He,
            }) => {
              if (!ue || !He) return !1;
              const Oe = new FormData();
              Oe.append("sessionid", (0, A.KC)()),
                Oe.append("action", "alt_text"),
                Oe.append("name", ue),
                Oe.append(
                  "alt_text",
                  JSON.stringify(
                    Object.entries(He).map(([et, ht]) => ({
                      lang: et,
                      text: ht,
                    })),
                  ),
                );
              const Be = await fetch(ye, { method: "post", body: Oe }),
                Je = await Be.json();
              if (!Be.ok) throw Je.errors?.join(" ") || "Error deleting asset";
              return Je;
            },
            onSuccess: (ue) => {
              ue !== !1 && Ae(ue.rgExtraAssets);
            },
            onError: (ue) => {
              console.error(
                (0, L.we)(
                  "#StoreAdmin_UploadError_Generic",
                  typeof ue == "string" ? ue : ue.message,
                ),
              );
            },
          });
        }
      },
      14295: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { L: () => F });
        var e = i(90626),
          p = i(99412),
          a = i(14947),
          fe = i(3166),
          B = i(72849),
          Z = i(25279),
          D = i(9472),
          R = i(51746),
          re = i(18210),
          oe = i(38410),
          K = i(11243),
          Se = i(19730),
          Ie = Object.defineProperty,
          Re = Object.getOwnPropertyDescriptor,
          Ye = (Q, b, A, w) => {
            for (
              var U = w > 1 ? void 0 : w ? Re(b, A) : b, J = Q.length - 1, ce;
              J >= 0;
              J--
            )
              (ce = Q[J]) && (U = (w ? ce(b, A, U) : ce(U)) || U);
            return w && U && Ie(b, A, U), U;
          };
        class ne extends D.q {
          m_bLockedToSpecificAsset;
          m_fnGetImageOptions;
          m_nMaxFileSize;
          m_rgCurrentImageOptionKey = void 0;
          constructor(b, A, w, U, J, ce, Pe) {
            const ve = (0, R.II)(ce);
            super(w, U, J, ce.src, ve),
              (0, a.Gn)(this),
              (this.m_bLockedToSpecificAsset = b),
              (this.m_fnGetImageOptions = A),
              (this.m_nMaxFileSize = Pe);
          }
          IsValidAssetType(b, A) {
            const w = this.GetCurrentImageOption(),
              U = w?.width ?? 0,
              J = w?.height ?? 0,
              ce = A && A != this.fileType,
              Pe = this.IsFileTypeSupported(this.fileType),
              ve = this.BIsVideo() ? 1 : 0,
              Le =
                U > 0 && J > 0
                  ? Math.abs(this.width - U) <= ve &&
                    Math.abs(this.height - J) <= ve
                  : !0,
              H = w?.bMismatchedNewSizes;
            let ie = "";
            Pe
              ? ce
                ? (ie = (0, re.we)(
                    "#ImageUpload_InvalidFormat",
                    (0, R.EG)(A) ?? "",
                  ))
                : w?.groupName.trim().length > 0
                  ? this.file.size > this.m_nMaxFileSize &&
                    (ie = (0, re.we)(
                      "#ImageUpload_ExceedsMaxFileSize",
                      (0, Se.dm)(this.m_nMaxFileSize),
                    ))
                  : (ie = (0, re.we)("#ImageUpload_EmptyBaseName"))
              : (ie = (0, re.we)("#ImageUpload_InvalidFormatSelected"));
            const _e = [],
              de = [];
            return (
              !Le && w
                ? de.push(
                    (0, re.we)("#ImageUpload_InvalidResolution", w.groupName),
                  )
                : H &&
                  w &&
                  de.push(
                    (0, re.we)(
                      "#ImageUpload_MismatchedResolution",
                      w.groupName,
                    ),
                  ),
              (w?.rgExistingLanguages?.length ?? 0) > 1 &&
                this.language &&
                w?.rgExistingLanguages.includes(this.language) &&
                _e.push(
                  (0, re.we)(
                    "#ImageUpload_ReplaceLanguage",
                    (0, re.we)("#Language_" + (0, p.LgB)(this.language)),
                  ),
                ),
              {
                error: ie,
                messages: _e,
                warnings: de,
                needsCrop: !1,
                match: this.GetCurrentImageOption(),
              }
            );
          }
          BIsOriginalMinimumDimensions(b) {
            return !0;
          }
          FileTypeMatchesImageTypes(b) {
            return !0;
          }
          BIsVideo() {
            return Z.Ho.includes(this.fileType);
          }
          BSupportsLanguages() {
            return !0;
          }
          GetResizeDimension() {}
          get ImageOptions() {
            const b = this.filename.lastIndexOf("."),
              A = b != -1 ? this.filename.slice(0, b) : this.filename,
              w = this.m_fnGetImageOptions();
            return (
              this.m_bLockedToSpecificAsset ||
                w.find((U) => U.groupName == A) ||
                w.push({
                  sKey: A,
                  fnGetLabelText: () => A,
                  width: this.width,
                  height: this.height,
                  bEnforceDimensions: !1,
                  groupName: A,
                  bMismatchedNewSizes: !1,
                  rgExistingLanguages: [],
                }),
              w
            );
          }
          GetCurrentImageOptionKey() {
            return this.m_rgCurrentImageOptionKey;
          }
          GetCurrentImageOption() {
            const b = this.m_fnGetImageOptions();
            if (this.m_rgCurrentImageOptionKey)
              return b.find((U) => U.sKey == this.m_rgCurrentImageOptionKey);
            const A = b.find(
              (w) =>
                w.groupName == (0, oe.jj)(this.filename, p.xPp).baseFilename,
            );
            if (A) return A;
            if (b.length == 1) return b[0];
          }
          SetCurrentImageOption(b) {
            this.m_rgCurrentImageOptionKey = b?.sKey;
          }
          GetImageOptionLabel() {
            return e.createElement(
              "span",
              null,
              (0, re.we)("#ImageUpload_ImageGroup"),
              e.createElement(K.o, {
                tooltip: (0, re.we)("#ImageUpload_ImageGroup_ttip"),
              }),
            );
          }
          IsFileTypeSupported(b) {
            switch (b) {
              case B.bg.iS:
              case B.bg.dU:
              case B.bg.wD:
              case B.bg.CK:
              case B.bg.nn:
              case B.bg.pJ:
                return !0;
              default:
                return !1;
            }
          }
        }
        Ye([a.sH], ne.prototype, "m_rgCurrentImageOptionKey", 2),
          Ye([a.EW], ne.prototype, "ImageOptions", 1),
          Ye([a.XI], ne.prototype, "SetCurrentImageOption", 1);
        var pe = i(41735),
          I = i.n(pe),
          ae = i(28410),
          S = i(7742),
          P = i(72604),
          k = i(41635),
          v = i(71742),
          z = i(27066),
          G = Object.defineProperty,
          O = Object.getOwnPropertyDescriptor,
          L = (Q, b, A, w) => {
            for (
              var U = w > 1 ? void 0 : w ? O(b, A) : b, J = Q.length - 1, ce;
              J >= 0;
              J--
            )
              (ce = Q[J]) && (U = (w ? ce(b, A, U) : ce(U)) || U);
            return w && U && G(b, A, U), U;
          };
        const Ee = 100 * 1024 * 1024,
          T = 6 * 1024 * 1024;
        class N extends oe.ss {
          m_cancel = void 0;
          m_urls;
          m_regexInvalidFilenameCharacters;
          m_filesToUpload = a.sH.array();
          m_onlyAssetGroup = void 0;
          m_rgExistingAssetGroups = void 0;
          m_rgImageSizes = void 0;
          constructor(b, A) {
            super(),
              (0, a.Gn)(this),
              (this.m_urls = b),
              (this.m_regexInvalidFilenameCharacters = A);
          }
          GetErrorsFromErrorResponse(b) {
            let A;
            const w = b?.response?.data?.errors;
            return (
              w
                ? (A = [
                    ...w.map((U, J) =>
                      e.createElement("span", { key: `error${J}` }, U),
                    ),
                    w?.length > 0
                      ? e.createElement("br", { key: "br" })
                      : void 0,
                    e.createElement(
                      "a",
                      {
                        href: "https://partner.steamgames.com/doc/store/page/assets#error",
                        key: "a",
                      },
                      (0, re.we)(
                        "#StoreAdmin_ExtraAssetUpload_UnknownUploadFailure",
                      ),
                    ),
                  ])
                : console.error(
                    "CExtraAssetsImageUploader.UploadSingleImage failed with unknown error",
                    b,
                  ),
              A
            );
          }
          GetUploadImages() {
            return this.m_filesToUpload;
          }
          ClearImages() {
            this.m_filesToUpload = a.sH.array();
          }
          DeleteUploadImage(b) {
            const A = this.m_filesToUpload.findIndex(
              (w) => b.file == w.file && b.uploadTime == w.uploadTime,
            );
            A >= 0 &&
              (this.m_filesToUpload.splice(A, 1),
              (this.m_filesToUpload = [...this.m_filesToUpload]));
          }
          SetExistingAssetGroups(b, A) {
            (this.m_rgExistingAssetGroups = b), (this.m_rgImageSizes = A);
          }
          SetOnlyAssetGroup(b) {
            this.m_onlyAssetGroup = b;
          }
          async AddImageForLanguage(b, A) {
            if ((0, R.aL)(b.type) || (0, R.Uz)(b.type)) {
              const w = await (0, R.zB)(b, (0, R.Uz)(b.type));
              if (w) {
                const U = b.name
                    .toLowerCase()
                    .replace(this.m_regexInvalidFilenameCharacters, "_"),
                  J = new ne(
                    !this.m_onlyAssetGroup,
                    () => this.GetImageOptions(),
                    b,
                    U,
                    A,
                    w,
                    Ee,
                  );
                return (
                  (this.m_filesToUpload = [...this.m_filesToUpload, J]), !0
                );
              }
            } else
              console.error(
                "AddImageForLanguage failed to determine file type, not image, video or subtitle",
                b,
                b.type,
              );
            return !1;
          }
          async UploadAllImages(b, A) {
            this.m_cancel = I().CancelToken.source();
            const w = 4,
              U = 300 * 1e3,
              J = (0, oe.$l)(this.GetUploadImages(), b, A),
              ce = J.map(
                (Ce) => Ce.GetCurrentImageOption()?.groupName ?? Ce.filename,
              );
            let Pe = 0;
            const ve = new Map(),
              Le = new Map();
            let H = 0;
            const ie = async () => {
              for (; H < J.length; ) {
                const Ce = H++,
                  le = J[Ce],
                  De = ce[Ce];
                (le.status = "uploading"), Pe++;
                try {
                  const ge = await this.StartImageUpload(
                    le,
                    De,
                    this.m_cancel.token,
                  );
                  if (ge.bSuccess) {
                    const Ue = (0, S.x0)();
                    ve.set(ge.nRequestId, (Te) => Ue.resolve(Te));
                    const ze = new Promise((Te, ye) =>
                      setTimeout(() => ye(), U),
                    );
                    try {
                      const Te = await Promise.race([ze, Ue.promise]);
                      Le.set(ge.nRequestId, {
                        bSuccess: Te == P.R,
                        uploadImage: le,
                        strGroupName: De,
                        elErrorMessage:
                          Te == P.R
                            ? void 0
                            : (0, re.we)("#MediaConvert_InternalError"),
                      });
                    } catch {
                      Le.set(ge.nRequestId, {
                        bSuccess: !1,
                        uploadImage: le,
                        strGroupName: De,
                        elErrorMessage: (0, re.we)(
                          "#StoreAdmin_ExtraAssetUpload_Timeout",
                        ),
                      });
                    } finally {
                      ve.delete(ge.nRequestId);
                    }
                  } else
                    _e.push({ bSuccess: !1, image: le, uploadResult: [] }),
                      (le.status = ge.bSuccess ? "success" : "failed"),
                      (le.message =
                        !ge.bSuccess && ge.elErrorMessage
                          ? ge.elErrorMessage
                          : "");
                } finally {
                  Pe--;
                }
              }
            };
            Array.from({ length: Math.floor(w) }, () => ie());
            const _e = [];
            for (;;) {
              if (ve.size > 0) {
                const le = Array.from(ve.keys()),
                  { bSuccess: De, rgStatus: ge } = await this.CheckUploadStatus(
                    le,
                    this.m_cancel.token,
                  );
                if (De) {
                  for (const [Ue, ze] of k.qQ(le, ge))
                    if (ze != P._9) {
                      const Te = ve.get(Ue);
                      ve.delete(Ue), Te?.(ze);
                    }
                }
              }
              const Ce = new Map(Le);
              Le.clear();
              for (const [
                le,
                {
                  bSuccess: De,
                  uploadImage: ge,
                  strGroupName: Ue,
                  elErrorMessage: ze,
                },
              ] of Ce) {
                if (!De) {
                  (ge.status = "failed"),
                    (ge.message = ze),
                    _e.push({ bSuccess: !1, image: ge, uploadResult: [] });
                  continue;
                }
                const Te = await this.CompleteUpload(
                  le,
                  Ue,
                  ge.language,
                  this.m_cancel.token,
                );
                (ge.status = Te.bSuccess ? "success" : "failed"),
                  (ge.message = Te.bSuccess ? "" : Te.elErrorMessage),
                  _e.push({
                    bSuccess: Te.bSuccess,
                    image: ge,
                    uploadResult: [],
                  });
              }
              if (H >= J.length && Pe == 0 && Le.size == 0) break;
              this.m_cancel.token.throwIfRequested(), await (0, S.yI)(1e3);
            }
            const { rgExtraAssets: de } = await this.GetExtraAssets(
              this.m_cancel.token,
            );
            return (
              _e
                .filter((Ce) => Ce.bSuccess)
                .forEach((Ce) => (Ce.uploadResult = de)),
              _e
            );
          }
          async StartImageUpload(b, A, w) {
            let U;
            if (b.file.size > T) {
              const J = new FormData();
              J.append("sessionid", (0, fe.KC)()),
                J.append("name", A),
                J.append("file_size", "" + b.file.size);
              const ce = await this.MakePost(
                this.m_urls.strGetUploadUrlForAsset,
                J,
                { "Content-Type": "multipart/form-data" },
                "GetUploadUrl",
                w,
              );
              if (!ce.bSuccess) return ce;
              U = ce.data;
              const Pe = (0, R.N1)(
                { "Content-Type": "application/octet-stream" },
                U.headers_for_upload,
              );
              if (
                !(await I()
                  .put(U.upload_url, b.file, { headers: Pe, cancelToken: w })
                  .then((Le) => Le.status == 200 || Le.status == 201)
                  .catch(() => !1))
              )
                return (
                  console.warn(
                    "CExtraAssetsImageUploader put to CDNStorage url failed",
                    U.upload_url,
                  ),
                  { bSuccess: !1 }
                );
            }
            {
              const J = new FormData();
              J.append("sessionid", (0, fe.KC)()),
                J.append("asset_type", "extra_asset_v2"),
                J.append("name", A),
                U
                  ? J.append("temp_file_id", U.temp_file_id)
                  : J.append("file", b.file);
              const ce = await this.MakePost(
                this.m_urls.strBeginConvert,
                J,
                { "Content-Type": "multipart/form-data" },
                "BeginUploadUrl",
                w,
              );
              if (!ce.bSuccess) return ce;
              const Pe = ce.data.request_id;
              return (
                (b.status = "processing"), { bSuccess: !0, nRequestId: Pe }
              );
            }
          }
          async CheckUploadStatus(b, A) {
            const w = new FormData();
            w.append("sessionid", (0, fe.KC)()),
              w.append("request_ids", b.join(","));
            const U = await this.MakePost(
              this.m_urls.strCheckConvertStatus,
              w,
              void 0,
              "CheckUploadStatus",
              A,
            );
            return U.bSuccess ? { bSuccess: !0, rgStatus: U.data.status } : U;
          }
          async CompleteUpload(b, A, w, U) {
            const J = new FormData();
            J.append("sessionid", (0, fe.KC)()),
              J.append("request_id", b.toString()),
              J.append("name", A),
              J.append("asset_type", "extra_asset_v2"),
              w != p.xPp && J.append("language", (0, p.LgB)(w));
            const ce = await this.MakePost(
              this.m_urls.strCompleteConvert,
              J,
              void 0,
              "CompleteUpload",
              U,
            );
            return ce.bSuccess
              ? ((0, v.wT)(
                  ce.data?.complete,
                  "CompleteUpload shouldn't be run until all uploads are complete",
                ),
                { bSuccess: !0 })
              : ce;
          }
          async GetExtraAssets(b) {
            const A = new FormData();
            A.append("sessionid", (0, fe.KC)());
            const w = await this.MakePost(
              this.m_urls.strGetExtraAssets,
              A,
              void 0,
              "GetExtraAssets",
              b,
            );
            return w.bSuccess
              ? { bSuccess: !0, rgExtraAssets: w.data?.rgExtraAssets }
              : w;
          }
          async MakePost(b, A, w, U, J) {
            let ce;
            try {
              const Pe = await I().post(b, A, {
                withCredentials: !0,
                headers: w,
                cancelToken: J,
              });
              if (Pe.status == 200 && typeof Pe.data == "object") ce = Pe.data;
              else
                return (
                  console.warn(`CExtraAssetsImageUploader ${U} failed`, b),
                  { bSuccess: !1 }
                );
            } catch (Pe) {
              const ve = this.GetErrorsFromErrorResponse(Pe);
              return (
                console.warn(`CExtraAssetsImageUploader ${U} failed`, b, ve),
                { bSuccess: !1, elErrorMessage: ve }
              );
            }
            return { bSuccess: !0, data: ce };
          }
          CancelAllUploads() {
            this.m_cancel?.cancel((0, re.we)("#ImageUpload_CancelRequest"));
          }
          GetImageOptions() {
            const b = (H, ie, _e, de, Ce, le) => ({
                baseFilename: H,
                language: ie,
                bNew: _e,
                size: { width: de, height: Ce },
                fileSize: le,
              }),
              A = [];
            for (const H of this.m_filesToUpload.filter(
              (ie) => ie.status == "pending" || (0, D.o)(ie.status),
            ))
              if (this.m_onlyAssetGroup)
                A.push(
                  b(
                    this.m_onlyAssetGroup.baseFilename,
                    H.language ?? p.Bhc,
                    !0,
                    H.width,
                    H.height,
                    H.file.size,
                  ),
                );
              else {
                const ie = (0, oe.jj)(H.filename).baseFilename,
                  _e = H.GetCurrentImageOptionKey() ?? ie;
                A.push(
                  b(
                    _e,
                    H.language ?? p.Bhc,
                    !0,
                    H.width,
                    H.height,
                    H.file.size,
                  ),
                ),
                  _e != ie &&
                    A.push(b(ie, p.xPp, !0, H.width, H.height, H.file.size));
              }
            const w = (H, ie) =>
              H.languages.map((_e) =>
                b(H.baseFilename, _e, !1, ie?.width ?? 0, ie?.height ?? 0, 0),
              );
            let U = this.m_rgExistingAssetGroups ?? [],
              J = this.m_rgImageSizes ?? [];
            if (this.m_onlyAssetGroup) {
              const H = U.findIndex(
                (ie) => ie.baseFilename == this.m_onlyAssetGroup.baseFilename,
              );
              (0, v.wT)(
                H != -1,
                "onlyAssetGroup isn't in the existing assets list",
              ),
                (U = [U[H]]),
                (J = [J[H]]);
            }
            const ce = k.qQ(U, J).flatMap(([H, ie]) => w(H, ie)),
              ve = A.concat(ce).reduce((H, ie) => {
                const _e = H.get(ie.baseFilename) ?? [];
                return _e.push(ie), H.set(ie.baseFilename, _e), H;
              }, new Map()),
              Le = [];
            for (const H of ve.keys()) {
              const ie = ve.get(H).filter((Te) => Te.language != p.xPp),
                _e = new Set(ie.map((Te) => Te.language)).size,
                de =
                  _e > 1
                    ? (0, re.Yp)(
                        "#StoreAdmin_ExtraAssetUpload_LocalizeGroup",
                        _e,
                        H,
                      )
                    : H,
                Ce = new Map();
              for (let Te of ie
                .filter((ye) => !ye.bNew)
                .concat(ie.filter((ye) => ye.bNew)))
                Ce.set(Te.language, Te);
              const le = Array.from(Ce.values()).filter((Te) => !Te.bNew),
                De = le.length > 0 ? le[0].size : void 0,
                ge = ie.filter((Te) => Te.bNew).at(0)?.size,
                Ue = ie
                  .filter((Te) => Te.bNew)
                  .some(
                    (Te) =>
                      Te.size.width != ge.width || Te.size.height != ge.height,
                  ),
                ze = {
                  sKey: H,
                  fnGetLabelText: () => de,
                  width: De?.width ?? 0,
                  height: De?.height ?? 0,
                  bEnforceDimensions: !1,
                  groupName: H,
                  bMismatchedNewSizes: Ue,
                  rgExistingLanguages: ie
                    .filter((Te) => !Te.bNew)
                    .map((Te) => Te.language),
                };
              Le.push(ze);
            }
            return (
              Le.sort((H, ie) =>
                H.sKey < ie.sKey ? -1 : H.sKey > ie.sKey ? 1 : 0,
              ),
              Le
            );
          }
        }
        L([a.sH], N.prototype, "m_filesToUpload", 2),
          L([a.sH], N.prototype, "m_onlyAssetGroup", 2),
          L([a.sH], N.prototype, "m_rgExistingAssetGroups", 2),
          L([a.sH], N.prototype, "m_rgImageSizes", 2),
          L([z.o], N.prototype, "GetUploadImages", 1),
          L([z.o], N.prototype, "ClearImages", 1),
          L([z.o], N.prototype, "DeleteUploadImage", 1),
          L([a.XI], N.prototype, "SetExistingAssetGroups", 1),
          L([a.XI], N.prototype, "SetOnlyAssetGroup", 1),
          L([z.o], N.prototype, "AddImageForLanguage", 1);
        function F() {
          const Q = (0, ae.Z3)("ajaxgetextraassets"),
            b = (0, ae.Z3)("ajaxgetuploadurlforasset"),
            A = (0, ae.Z3)("ajaxbeginconvertassetasync"),
            w = (0, ae.Z3)("ajaxcheckconvertassetsstatus"),
            U = (0, ae.Z3)("ajaxtrytocompleteconvertasset"),
            J = e.useMemo(
              () => ({
                strGetExtraAssets: Q,
                strGetUploadUrlForAsset: b,
                strBeginConvert: A,
                strCheckConvertStatus: w,
                strCompleteConvert: U,
              }),
              [Q, b, A, w, U],
            ),
            { regexInvalidFilenameCharacters: ce } = (0, ae.L4)();
          return e.useMemo(() => new N(J, ce), [J, ce]);
        }
      },
      34604: (te, Ge, i) => {
        "use strict";
        i.d(Ge, {
          Bv: () => Ie,
          FZ: () => K,
          IP: () => Se,
          K7: () => Ye,
          SG: () => pe,
          TQ: () => ne,
          ar: () => R,
          i$: () => B,
          nO: () => fe,
          pN: () => Z,
          q3: () => D,
          wN: () => Re,
        });
        var e = i(99412),
          p = i(69787);
        const a = 0,
          fe = 1;
        function B(I) {
          return I && !Z(I);
        }
        function Z(I) {
          return I && "extra_asset_name" in I;
        }
        function D(I) {
          if (I) return B(I) ? I.name : I.extra_asset_name;
        }
        function R(I, ae) {
          if (!I?.encodings) return null;
          if (I.encodings.some((k) => k.extension.startsWith("poster."))) {
            let k;
            if (
              (ae
                ? ((k = I.encodings.find(
                    (v) => !v.extension.startsWith("poster."),
                  )),
                  document
                    .createElement("video")
                    .canPlayType("video/webm;codecs=vp9") &&
                    (k = I.encodings?.find((v) => v.extension === "webm") ?? k))
                : (k = I.encodings.find((v) =>
                    v.extension.startsWith("poster."),
                  )),
              k)
            )
              return { url: k.url, usage: re(k.extension) };
          }
          const P = I.encodings[0];
          return P ? { url: P.url, usage: re(P.extension) } : null;
        }
        function re(I) {
          switch (I) {
            case "mp4":
            case "webm":
              return fe;
          }
          return a;
        }
        function oe(I, ae) {
          if (!I || Object.keys(I).length == 0) return null;
          if (Object.keys(I).length == 1) return Object.values(I).at(0);
          let S = I[(0, e.LgB)(ae)];
          if (S) return S;
          const P = ae == e.ZLm ? e.NFp : e.Bhc;
          return (S = I[(0, e.LgB)(P)]), S || (ae == e.xPp ? I[0] : null);
        }
        function K(I, ae = e.Bhc, S = 0) {
          const P = Se(I, !1, ae);
          return P ? (0, p.cn)(P.url, S) : null;
        }
        function Se(I, ae, S = e.Bhc) {
          if (!I) return;
          if (B(I)) return { url: I.url, usage: a };
          const P = oe(I.images, S);
          return P ? R(P, ae) : null;
        }
        function Ie(I, ae = e.Bhc) {
          return I ? (B(I) ? I.name : I.alt_text?.[(0, e.LgB)(ae)]) : void 0;
        }
        function Re(I) {
          return (
            (I?.images && Object.keys(I.images).map((ae) => (0, e.sfN)(ae))) ??
            []
          );
        }
        function Ye(I) {
          return I
            ? (B(I) ? I.name : I.extra_asset_name).replace(
                /^\{STEAM_APP_IMAGE\}\/extras\//,
                "",
              )
            : void 0;
        }
        function ne(I) {
          return `{STEAM_APP_IMAGE}/extras/${I}`;
        }
        const pe =
          "image/png, image/jpeg, image/gif, image/webp, video/mp4, video/webm";
      },
      17616: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { KC: () => ne, eE: () => v, gU: () => k, jy: () => Ye });
        var e = i(7850),
          p = i(90626),
          a = i(58534),
          fe = i(8323),
          B = i(36707),
          Z = i(86048),
          D = i(64868),
          R = i(98609),
          re = i(97982),
          oe = i.n(re),
          K = i(99412),
          Se = i(50109);
        const Ie = "v_StoreAdminLanguageChange",
          Re = p.createContext(void 0);
        function Ye(z) {
          const [G, O] = p.useState(),
            L = p.useMemo(
              () => ({ strActiveLanguage: G, setActiveLanguage: O }),
              [G],
            );
          return (
            p.useEffect(() => {
              G &&
                window.LocChangeControlsToLanguage &&
                window.LocChangeControlsToLanguage(G);
            }, [G]),
            (0, Z.l6)(
              window,
              Ie,
              p.useCallback((Ee) => {
                Ee.detail.strLanguage && O(Ee.detail.strLanguage);
              }, []),
            ),
            (0, e.jsx)(Re.Provider, { value: L, children: z.children })
          );
        }
        function ne(z, G, O, L) {
          const Ee = p.useMemo(() => Array.from(z.keys()), [z]),
            [T] = p.useState(() => {
              const J = new Map(G);
              return new Map(Ee.map((ce) => [ce, (0, fe.Jc)(J.get(ce) || "")]));
            }),
            N = p.useContext(Re),
            [F, Q] = p.useState(() => P(T.size ? T : z)),
            b = N?.strActiveLanguage ?? F,
            A = p.useCallback(
              (J) => {
                N?.setActiveLanguage(J), Q(J);
              },
              [N],
            ),
            w = (0, e.jsx)(pe, {
              mapLanguages: z,
              mapValues: T,
              strActiveLanguage: b,
              setActiveLanguage: A,
            }),
            U =
              !!(O && L) &&
              (0, e.jsx)(ae, {
                rgLanguages: Ee,
                mapValues: T,
                namePrefix: O,
                rgPath: L,
              });
          return {
            strActiveLanguage: b,
            mapValues: T,
            rctLanguageSelect: w,
            rgLanguages: Ee.map(K.sfN),
            rctHiddenInputs: U,
            setActiveLanguage: A,
          };
        }
        function pe(z) {
          const {
              mapLanguages: G,
              mapValues: O,
              strActiveLanguage: L,
              setActiveLanguage: Ee,
            } = z,
            T = p.useMemo(() => {
              let F = [];
              return (
                G.forEach((Q, b) => {
                  F.push({
                    data: b,
                    label: (0, e.jsx)(I, {
                      strLocLanguage: Q,
                      value: O.get(b),
                    }),
                  });
                }),
                F
              );
            }, [G, O]),
            N = p.useCallback((F) => Ee(F.data), [Ee]);
          return (0, e.jsx)(a.m, {
            strClassName: re.LanguageSelect,
            onChange: N,
            selectedOption: L,
            rgOptions: T,
          });
        }
        function I(z) {
          const { strLocLanguage: G, value: O } = z,
            [L, Ee] = p.useState(() => !!O?.Value?.trim()),
            T = p.useCallback((N) => Ee(!!N.trim()), []);
          return (
            (0, D.x2)(O, T),
            p.useEffect(() => T(O.Value), [T, O]),
            (0, e.jsx)("span", {
              className: (0, B.A)(re.LanguageOption, L && re.HasValue),
              children: G,
            })
          );
        }
        function ae(z) {
          const { rgLanguages: G, mapValues: O, namePrefix: L, rgPath: Ee } = z;
          return G.map((T) =>
            (0, e.jsx)(
              S,
              { language: T, value: O.get(T), namePrefix: L, rgPath: Ee },
              T,
            ),
          );
        }
        const S = p.memo(function (G) {
          const { language: O, value: L, namePrefix: Ee, rgPath: T } = G,
            N = (0, D.gc)(L) || "",
            F = Ee + [...T, O].map((Q) => `[${Q}]`).join("");
          return (0, e.jsx)("input", { type: "hidden", name: F, value: N });
        });
        function P(z) {
          return z.has(R.TS.LANGUAGE)
            ? R.TS.LANGUAGE
            : z.has("english")
              ? "english"
              : z.keys().next().value;
        }
        function k() {
          const z = p.useContext(Re);
          return (0, K.sfN)(z?.strActiveLanguage, K.Bhc);
        }
        function v(z) {
          const {
              strActiveLanguage: G,
              mapValues: O,
              rctLanguageSelect: L,
              setActiveLanguage: Ee,
            } = ne(z, [], null, null),
            T = (0, K.sfN)(G, K.Bhc);
          return (
            p.useEffect(() => {
              Se.O.Get().SetCurEditLanguage(T);
            }, [T]),
            (0, D.hL)(Se.O.Get().GetCallback(), (N) => Ee((0, K.LgB)(N))),
            {
              strActiveLanguage: G,
              eActiveLang: T,
              rctLanguageSelect: L,
              mapValues: O,
            }
          );
        }
      },
      5859: (te, Ge, i) => {
        "use strict";
        i.r(Ge), i.d(Ge, { StoreAppPageHeader: () => nr, default: () => Pr });
        var e = i(7850),
          p = i(38585),
          a = i(64868),
          fe = i(98724),
          B = i(52893),
          Z = i(8145),
          D = i(57053),
          R = i(71742);
        class re {
          m_nodes = [];
          m_schema;
          m_bConvertNewlinesToBR;
          m_fnProcessText;
          constructor(u, _, y) {
            (this.m_schema = u),
              (this.m_bConvertNewlinesToBR = _?.bConvertNewlinesToBR ?? !1);
            const j = y && "mark" in y;
            this.m_fnProcessText = j ? void 0 : _?.fnProcessText;
          }
          AppendText(u, _) {
            u.length &&
              (this.m_bConvertNewlinesToBR
                ? this.m_nodes.push(...this.GenerateBreaksForNewlines(u))
                : this.m_nodes.push(...this.TextNode(u)));
          }
          AppendNode(u) {
            this.m_nodes.push(u);
          }
          GetElements() {
            return this.m_nodes;
          }
          GenerateBreaksForNewlines(u) {
            const _ = [];
            let y = 0;
            for (
              let j = u.indexOf(
                `
`,
                y,
              );
              j !== -1;
              j = u.indexOf(
                `
`,
                y,
              )
            )
              y != j && _.push(...this.TextNode(u.substring(y, j))),
                _.push(this.m_schema.nodes.hard_break.createChecked()),
                (y = j + 1);
            return y < u.length && _.push(...this.TextNode(u.substring(y))), _;
          }
          TextNode(u) {
            const _ = this.m_fnProcessText && this.m_fnProcessText(u);
            return _ || [this.m_schema.text(u)];
          }
        }
        function oe(g) {
          return g
            .filter((u) => u.isText)
            .map((u) => u.text)
            .join();
        }
        function K(g) {
          let u = "";
          return (
            g.descendants((_) => {
              _.isText && (u += _.text);
            }),
            u
          );
        }
        class Se extends Z.Al {
          m_schemaConfig;
          m_mapPMBBNodes = new Map();
          m_bUseBackslashEscapes;
          constructor(u, _) {
            super(u.bbcode_dictionary, (y) => {
              const j = y?.tag && u.bbcode_dictionary.get(y.tag);
              return new re(
                u.pm_schema,
                _,
                j && "Constructor" in j ? j.Constructor : void 0,
              );
            }),
              (this.m_schemaConfig = u),
              (this.m_bUseBackslashEscapes = _?.bUseBackslashEscapes ?? !0),
              this.m_schemaConfig.bbcode_dictionary.forEach((y) => {
                "node" in y.Constructor &&
                  this.m_mapPMBBNodes.set(
                    y.Constructor.node.name,
                    y.Constructor,
                  );
              });
          }
          get schema() {
            return this.m_schemaConfig.pm_schema;
          }
          ParseBBCode(u) {
            const _ = this.Parse(
              u,
              this.BBNodeToPMNode.bind(this),
              this.m_bUseBackslashEscapes,
            );
            return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
              {},
              this.ConvertLineBreaksToParagraphs(D.FK.fromArray(_)),
            );
          }
          TryCreateNode(u, _, y) {
            let j = D.FK.from(_),
              W;
            if (
              !u.node.validContent(j) &&
              (u.node.isInline ||
                (j = D.FK.from(
                  _.filter((M) =>
                    M.isText && M.text.match(/^\s*$/)
                      ? !1
                      : !(
                          M.type == this.schema.nodes.hard_break &&
                          !u.node.validContent(D.FK.from(M))
                        ),
                  ),
                )),
              !u.node.validContent(j))
            ) {
              const M = u.acceptNode;
              W = [];
              let $ = [],
                se = !1,
                ee = !1;
              for (let me = 0; me < j.childCount; me++) {
                const je = j.child(me),
                  he = D.FK.from(je),
                  ke = u.node.validContent(he);
                !ee && (ke || M?.validContent(he))
                  ? (ke || (se = !0), $.push(je))
                  : ((ee = !0), W.push(je));
              }
              if ((console.assert(!se || !!M), se && M)) {
                M.isBlock &&
                  $.length > 1 &&
                  $[$.length - 1].type == this.schema.nodes.hard_break &&
                  ($ = $.slice(0, -1));
                const me = this.m_mapPMBBNodes.get(M.name);
                (0, R.wT)(
                  me,
                  `Indicated acceptNode type ${M.name} for ${u.node.name} missing`,
                );
                let je;
                try {
                  me
                    ? (je = this.TryCreateNode(me, $, void 0))
                    : (je = M.createChecked(void 0, $));
                } catch (he) {
                  console.error(he), (je = []), (W = [...$, ...W]);
                }
                j = D.FK.from(je);
              } else j = D.FK.from($);
            }
            try {
              const M =
                u.node.createAndFill(y, j) || u.node.createChecked(y, j);
              return W ? [M, ...W] : M;
            } catch {
              return (
                (0, R.wT)(
                  !1,
                  `Invalid content for node type ${u.node.name}, removing and promoting children.`,
                ),
                _
              );
            }
          }
          BBNodeToPMNode(u, _, ...y) {
            let j = u.BBArgsToAttrs ? u.BBArgsToAttrs(_.args || {}) : void 0;
            try {
              if (
                ("convertContentToAttr" in u &&
                  u.convertContentToAttr &&
                  ((!j || !j[u.convertContentToAttr]) &&
                    (j = { ...(j || {}), [u.convertContentToAttr]: oe(y) }),
                  "node" in u && (y = [])),
                "node" in u)
              )
                return this.TryCreateNode(u, y, j);
              {
                const W = u.mark.create(j);
                return y.map((M) => this.RecursivelyApplyMark(M, W));
              }
            } catch (W) {
              return (
                console.error(`Error parsing [${_.tagname}] tag: ${W}`, W), []
              );
            }
          }
          RecursivelyApplyMark(u, _) {
            if (u.isText || u.type.allowsMarkType(_.type))
              return u.mark([...u.marks, _]);
            {
              const y = [];
              return (
                u.descendants(
                  (j) => (y.push(this.RecursivelyApplyMark(j, _)), !1),
                ),
                u.type.create(u.attrs, y, u.marks)
              );
            }
          }
          ConvertLineBreaksToParagraphs(u) {
            const _ = new Map(),
              y = this.m_schemaConfig.pm_schema;
            this.m_mapPMBBNodes.forEach((M) => {
              M.acceptNode && _.set(M.acceptNode.name, M.node);
            });
            const j = [],
              W = {
                nodes: [],
                nodeType: void 0,
                reset() {
                  (this.nodes = []), (this.nodeType = void 0);
                },
                accumulate(M, $) {
                  return (
                    this.nodeType && M != this.nodeType && this.emit(),
                    (this.nodeType = M),
                    this.nodes.push($),
                    !0
                  );
                },
                emit(M = !1) {
                  const $ = this.nodeType || (M ? y.nodes.paragraph : void 0);
                  $ && (j.push($.createChecked({}, this.nodes)), this.reset());
                },
              };
            return (
              u.forEach((M) => {
                const $ = M.type == y.nodes.hard_break,
                  se = D.FK.from(M);
                if ($ || y.topNodeType.validContent(se)) {
                  const ee = $ && W.nodes.length > 0;
                  W.emit(),
                    $
                      ? ee || j.push(y.nodes.paragraph.createChecked())
                      : j.push(M);
                } else {
                  let ee;
                  if (
                    (y.nodes.paragraph.validContent(se)
                      ? (ee = y.nodes.paragraph)
                      : (ee = _.get(M.type.name)),
                    ee)
                  )
                    W.accumulate(ee, M);
                  else {
                    (0, R.wT)(
                      !1,
                      `Couldn't accept ${M.type.name} at root of document, converting to paragraph`,
                    );
                    const me = K(M);
                    me && W.accumulate(y.nodes.paragraph, y.text(me));
                  }
                }
              }),
              (W.nodes.length || !j.length) && W.emit(!0),
              D.FK.from(j)
            );
          }
        }
        function Ie(g, u, _) {
          const y = {
            schema: u.pm_schema,
            config: u.pm_to_bbcode_config,
            bUseBackslashEscapes: _?.bUseBackslashEscapes ?? !0,
          };
          return Re(y, g, [], !1);
        }
        function Re(g, u, _, y) {
          const { schema: j, config: W } = g;
          let M = u.marks,
            $ = "";
          const se = W.mapNodes.get(u.type),
            { tag: ee, args: me } = I(se, u);
          ee == "emoticon"
            ? ($ += ":")
            : ee && ($ += (0, Z.CS)(ee, me, se?.bVerbatimArgs));
          const je = y || !!se?.bVerbatimContent;
          let he = !1;
          return (
            u.content.forEach((ke) => {
              if (
                (([$, M] = ne(W, M, ke.marks, $)),
                ([$, M] = pe(W, M, ke.marks, $)),
                ke.type.isText)
              ) {
                const be = ke.text || "";
                $ += je || !g.bUseBackslashEscapes ? be : (0, Z.vE)(be);
              } else if (ke.type == j.nodes.hard_break)
                $ += `
`;
              else {
                const be = Ye(W, ke);
                be &&
                  he &&
                  ($ += `
`),
                  ($ += Re(g, ke, M, je)),
                  (he = be);
                return;
              }
              he = !1;
            }),
            ([$] = ne(W, M, _, $)),
            ee == "emoticon" ? ($ += ":") : ee && ($ += (0, Z.op)(ee)),
            $
          );
        }
        function Ye(g, u) {
          return u.type.isBlock && !I(g.mapNodes.get(u.type), u).tag;
        }
        function ne(g, u, _, y) {
          const j = [];
          for (const M of u) _.indexOf(M) === -1 && j.push(M);
          if (!j.length) return [y, u];
          const W = u.slice();
          for (
            ;
            j.length &&
            ((0, R.wT)(W.length, "no marks left to close"), !!W.length);
          ) {
            const M = W.pop(),
              $ = g.mapMarks.get(M.type),
              { tag: se } = ae($, M);
            y += (0, Z.op)(se);
            const ee = j.indexOf(M);
            ee != -1 && j.splice(ee, 1);
          }
          return [y, W];
        }
        function pe(g, u, _, y) {
          let j;
          for (const W of _)
            if (u.indexOf(W) === -1) {
              j || (j = u.slice());
              const M = g.mapMarks.get(W.type);
              if (((0, R.wT)(M, "mark missing bbtag"), M)) {
                j.push(W);
                const { args: $, tag: se } = ae(M, W);
                y += (0, Z.CS)(se, $);
              }
            }
          return [y, j ?? u];
        }
        function I(g, u) {
          if (g && g.AttrsToBBArgs) {
            const { tag: _ = g.tag, args: y = {} } = g.AttrsToBBArgs(
              u.attrs,
              u,
            );
            return { tag: _, args: y };
          }
          return { tag: g?.tag, args: {} };
        }
        function ae(g, u) {
          if (g && g.AttrsToBBArgs) {
            const { tag: _ = g.tag, args: y = {} } = g.AttrsToBBArgs(
              u.attrs,
              u,
            );
            return { tag: _, args: y };
          }
          return { tag: g?.tag, args: {} };
        }
        const S = new B.hs("CProseMirrorState - OnChange");
        class P {
          m_bbcode;
          m_currentDoc;
          m_bHasUncomittedChanges = !1;
          m_schemaConfig;
          m_bbcodeParser;
          m_bUseBackslashEscapes;
          m_onStateChangedCallbacks = new p.l();
          m_fnCommitChanges;
          m_view;
          m_state;
          constructor(u, _, y, j) {
            const { parser: W, bUseBackslashEscapes: M = !0 } = j ?? {};
            (this.m_schemaConfig = u),
              (this.m_bUseBackslashEscapes = M),
              (this.m_bbcodeParser = new Se(u, {
                ...W,
                bUseBackslashEscapes: M,
              })),
              (this.m_bbcode = _),
              (this.m_fnCommitChanges = y),
              (this.m_state = this.ConstructState());
          }
          CommitChanges() {
            this.m_currentDoc &&
              this.m_bHasUncomittedChanges &&
              ((this.m_bbcode = Ie(this.m_currentDoc, this.m_schemaConfig, {
                bUseBackslashEscapes: this.m_bUseBackslashEscapes,
              })),
              this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
              (this.m_bHasUncomittedChanges = !1));
          }
          BHasUncomittedChanges() {
            return this.m_bHasUncomittedChanges;
          }
          UpdateState(u) {
            const _ = u(this.m_view?.state.tr || this.m_state.tr);
            !_ ||
              !_.docChanged ||
              (this.m_view
                ? this.m_view.dispatch(_)
                : (this.m_state = this.m_state.apply(_)));
          }
          get state() {
            return this.m_state;
          }
          get schemaConfig() {
            return this.m_schemaConfig;
          }
          get bbcodeParser() {
            return this.m_bbcodeParser;
          }
          get OnStateChangedCallbacks() {
            return this.m_onStateChangedCallbacks;
          }
          ConstructState() {
            const u = new B.k_({
                key: S,
                view: (y) => (
                  console.assert(!this.m_view),
                  (this.m_view = y),
                  {
                    update: (j, W) => this.OnStateChange(W, j.state),
                    destroy: () => (this.m_view = void 0),
                  }
                ),
              }),
              _ = [(0, fe.b6)(), u];
            return B.$t.create({
              schema: this.m_schemaConfig.pm_schema,
              doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
              plugins: _,
            });
          }
          InstallPlugin(u) {
            const _ = this.m_view ? this.m_view.state : this.m_state;
            return (
              _.plugins.includes(u) ||
                ((this.m_state = _.reconfigure({ plugins: [..._.plugins, u] })),
                this.m_view?.updateState(this.m_state)),
              () => {
                const y = this.m_view ? this.m_view.state : this.m_state;
                (this.m_state = y.reconfigure({
                  plugins: y.plugins.filter((j) => j != u),
                })),
                  this.m_view?.updateState(this.m_state);
              }
            );
          }
          OnStateChange(u, _) {
            (this.m_state = _),
              u.doc &&
                u.doc != _.doc &&
                ((this.m_currentDoc = _.doc),
                (this.m_bHasUncomittedChanges = !0),
                this.m_onStateChangedCallbacks.Dispatch(
                  this.m_currentDoc,
                  u.doc,
                ));
          }
          ReplaceDocument(u) {
            this.m_bbcode != u &&
              this.UpdateState((_) => {
                this.m_bbcode = u;
                const y = this.m_bbcodeParser.ParseBBCode(u);
                return (
                  (_ = this.m_state.tr
                    .replaceWith(0, this.m_state.doc.content.size, y)
                    .scrollIntoView()),
                  _
                );
              });
          }
        }
        function k(g, u) {
          (0, a.hL)(g?.OnStateChangedCallbacks, u);
        }
        var v = i(90626);
        function z(g, u) {
          const { msAutosaveTimeout: _ = 1e3, msMaxInterval: y = _ * 10 } =
              u || {},
            [j, W] = v.useState(!1),
            M = v.useRef(0);
          return (
            k(
              g,
              v.useCallback(() => {
                (M.current = performance.now()), W(!0);
              }, []),
            ),
            v.useEffect(() => {
              if (!j || !g) return;
              const $ = performance.now(),
                se = (me = !1) => {
                  ee = void 0;
                  const je = performance.now(),
                    he = je - M.current;
                  me || he >= _ || je - $ >= y
                    ? (console.log("Committing changes"),
                      g.CommitChanges(),
                      W(!1))
                    : (ee = window.setTimeout(se, _ - he));
                };
              let ee = window.setTimeout(se, _);
              return () => {
                ee && (window.clearTimeout(ee), se(!0));
              };
            }, [j, g, _, y]),
            { bDirty: j }
          );
        }
        var G = i(72739),
          O = i(74685);
        const L = v.memo(function (u) {
          const { specs: _ } = u,
            [y, j] = v.useState([]),
            W = v.useRef(0),
            M = v.useCallback(
              (se) => (
                j((ee) => [...ee, { id: W.current++, nodeView: se }]),
                () => j((ee) => ee.filter((me) => me.nodeView != se))
              ),
              [],
            ),
            $ = v.useMemo(() => {
              const se = {};
              return (
                _.filter(Boolean).forEach(
                  (ee) =>
                    (se[ee.type.name] = (me, je, he) =>
                      new T(ee, me, je, he, M)),
                ),
                new B.k_({ props: { nodeViews: se } })
              );
            }, [_, M]);
          return (
            (0, O.c$)($),
            y.map(({ id: se, nodeView: ee }) =>
              (0, e.jsx)(Ee, { nodeView: ee }, se),
            )
          );
        });
        function Ee(g) {
          const {
              element: u,
              spec: _,
              getProps: y,
              onPropsChanged: j,
              actions: W,
              isSelected: M,
            } = g.nodeView,
            [$, se] = v.useReducer((ee) => ee + 1, 0);
          return (
            v.useEffect(() => j.Register(se).Unregister, [j, se]),
            G.createPortal(
              v.createElement(_.component, { ...y(), selected: M(), ...W }),
              u,
            )
          );
        }
        class T {
          dom;
          contentDOM;
          onPropsChanged;
          node;
          selected;
          reactHost;
          destroy;
          constructor(u, _, y, j, W) {
            this.node = _;
            const M = y.dom.ownerDocument,
              $ = M.createElement(u.type.isInline ? "span" : "div");
            this.dom = $;
            let se = $;
            u.bEditableContent &&
              ((se = this.reactHost =
                M.createElement(u.type.isInline ? "span" : "div")),
              (se.contentEditable = "false"),
              $.appendChild(se),
              (this.contentDOM = M.createElement(
                u.type.inlineContent ? "span" : "div",
              )),
              $.appendChild(this.contentDOM));
            const { selection: ee } = y.state;
            this.selected = j() >= ee.from && j() + _.nodeSize <= ee.to;
            const me = (ke) => {
                const be = ke(y.state.tr, _, j());
                be && y.dispatch(be);
              },
              je = {
                update: me,
                setAttrs: (ke, be) =>
                  me((dt, pt, xt) => dt.setNodeMarkup(xt, be, ke)),
                removeNode: () =>
                  me((ke, be, dt) => ke.delete(dt, dt + be.nodeSize)),
                focusView: () => {
                  window.setTimeout(() => y.focus(), 1);
                },
              },
              he = new p.l();
            (this.destroy = W({
              element: se,
              spec: u,
              getProps: () => u.readProps(this.node),
              isSelected: () => this.selected,
              onPropsChanged: he,
              actions: je,
            })),
              (this.onPropsChanged = he.Dispatch.bind(he));
          }
          update(u, _, y) {
            return u.type != this.node.type
              ? !1
              : ((this.node = u), this.onPropsChanged(), !0);
          }
          ignoreMutation(u) {
            return this.contentDOM && this.contentDOM.contains(u.target)
              ? !1
              : this.reactHost
                ? !0
                : u.type != "selection";
          }
          stopEvent(u) {
            return !!this.reactHost && this.reactHost.contains(u.target);
          }
          selectNode() {
            (this.selected = !0), this.onPropsChanged();
          }
          deselectNode() {
            (this.selected = !1), this.onPropsChanged();
          }
        }
        function N(g) {
          return (u, _, y) => u.replaceWith(y, y + _.nodeSize, g);
        }
        var F = i(2272),
          Q = i(34604),
          b = i(28410),
          A = i(83085),
          w = i(19298),
          U = i(52951),
          J = i(74875),
          ce = i(29287),
          Pe = i(74827),
          ve = i(25792),
          Le = i(33645),
          H = i.n(Le),
          ie = i(38539),
          _e = i(4188),
          de = i(36707),
          Ce = i(29950);
        function le(g, u, _ = 0) {
          return () => [g, { class: u }, _];
        }
        function De(g, u, _ = 0) {
          return [g, { class: u }, _];
        }
        function ge(g, u) {
          return () => [
            u,
            { class: H().PreservedUnsupportedTag },
            ["span", { class: H().Tag }, `[${g}]`],
            ["span", 0],
            ["span", { class: H().Tag }, `[/${g}]`],
          ];
        }
        function Ue(g) {
          return {
            tag: `h${g}`,
            BBArgsToAttrs: (u) => ({ level: g, align: u.align || "left" }),
            AttrsToBBArgs: (u) => {
              let _ = { tag: `h${u.level}`, args: {} };
              return (
                u.align &&
                  u.align != "left" &&
                  _.args &&
                  (_.args.align = u.align),
                _
              );
            },
          };
        }
        function ze(g) {
          return {
            tag: `h${g}`,
            getAttrs(u) {
              return { level: g, align: u.style.textAlign || "left" };
            },
          };
        }
        const Te = {
            paragraph: {
              attrs: { align: { default: "left" } },
              content: "inline*",
              group: "block",
              parseDOM: [
                {
                  tag: "p",
                  getAttrs(g) {
                    return { align: g.style.textAlign || "left" };
                  },
                },
              ],
              toDOM(g) {
                const u = { class: (0, de.A)("pm_paragraph", H().Paragraph) };
                return (
                  g.attrs.align &&
                    g.attrs.align != "left" &&
                    (u.style = `text-align: ${g.attrs.align}`),
                  ["p", u, 0]
                );
              },
              bbCode: {
                tag: "p",
                autocloses: !0,
                BBArgsToAttrs: (g) => ({ align: g.align }),
                AttrsToBBArgs: (g) => {
                  let u = { args: {} };
                  return (
                    g.align && g.align != "left" && (u.args.align = g.align), u
                  );
                },
              },
            },
            heading: {
              attrs: { level: { default: 1 }, align: { default: "left" } },
              content: "inline*",
              group: "block",
              defining: !0,
              parseDOM: [1, 2, 3, 4, 5].map(ze),
              toDOM(g) {
                const u = {
                  class:
                    `BB_Header${g.attrs.level} ` +
                    H()[`Header${g.attrs.level}`],
                };
                return (
                  g.attrs.align &&
                    g.attrs.align != "left" &&
                    (u.style = `text-align: ${g.attrs.align}`),
                  ["h" + g.attrs.level, u, 0]
                );
              },
              bbCode: [1, 2, 3, 4, 5].map(Ue),
            },
            image: {
              inline: !0,
              attrs: {
                src: {},
                alt: { default: null },
                title: { default: null },
                style: { default: void 0 },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "img[src]",
                  getAttrs(g) {
                    return {
                      src: g.getAttribute("src"),
                      title: g.getAttribute("title"),
                      alt: g.getAttribute("alt"),
                      style: g.getAttribute("style"),
                    };
                  },
                },
              ],
              toDOM(g) {
                const { src: u, alt: _, title: y, style: j } = g.attrs;
                return [
                  "img",
                  {
                    src: (0, Ce.J)(u),
                    alt: _,
                    title: y,
                    class: (0, de.A)(H().Image, {
                      [H().Image_Inline]: j === "inline",
                    }),
                  },
                ];
              },
              bbCode: {
                tag: "img",
                BBArgsToAttrs: (g) => ({
                  src: g.src,
                  style: g.style ?? void 0,
                }),
                AttrsToBBArgs: (g) => ({
                  args: { src: g.src, ...(g.style ? { style: g.style } : {}) },
                }),
                convertContentToAttr: "src",
              },
            },
            video: {
              inline: !0,
              attrs: {
                webm: { default: "" },
                mp4: { default: "" },
                poster: { default: "" },
                autoplay: { default: !0 },
                controls: { default: !1 },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "video",
                  getAttrs(g) {
                    if (g.tagName !== "video") return;
                    const u = g;
                    let _ = "",
                      y = "";
                    for (const j of u.querySelectorAll("source"))
                      j.type == "video/mp4"
                        ? (_ = j.src)
                        : j.type == "video/webm" && (y = j.src);
                    return {
                      mp4: _,
                      webm: y,
                      poster: u.poster || "",
                      autoplay: !!u.autoplay,
                      controls: !!u.controls,
                    };
                  },
                },
              ],
              toDOM(g) {
                const {
                    webm: u,
                    mp4: _,
                    poster: y,
                    autoplay: j,
                    controls: W,
                  } = g.attrs,
                  M = [];
                return (
                  u &&
                    M.push([
                      "source",
                      { src: (0, Ce.J)(u), type: "video/webm" },
                    ]),
                  _ &&
                    M.push([
                      "source",
                      { src: (0, Ce.J)(_), type: "video/mp4" },
                    ]),
                  [
                    "video",
                    {
                      poster: (0, Ce.J)(y),
                      autoPlay: !!j,
                      controls: !!W,
                      loop: !W && !!j,
                    },
                    ...M,
                  ]
                );
              },
              bbCode: {
                tag: "video",
                BBArgsToAttrs: (g) => ({
                  webm: g.webm,
                  mp4: g.mp4,
                  poster: g.poster,
                  autoplay: g.autoplay == "true",
                  controls: g.controls == "true",
                }),
                AttrsToBBArgs: (g) => ({
                  args: {
                    webm: g.webm || "",
                    mp4: g.mp4 || "",
                    poster: g.poster || "",
                    autoplay: g.autoplay ? "true" : "false",
                    controls: g.controls ? "true" : "false",
                  },
                }),
              },
            },
            bullet_list: {
              ..._e.fF,
              content: "list_item+",
              group: "block",
              toDOM: le("ul", H().List),
              bbCode: { tag: "list" },
            },
            ordered_list: {
              ..._e.o8,
              content: "list_item+",
              group: "block",
              toDOM: le("ol", H().OrderedList),
              bbCode: { tag: "olist" },
            },
            list_item: {
              ..._e.Aw,
              content: "paragraph block*",
              toDOM: le("li", H().ListItem),
              bbCode: { tag: "*", autocloses: !0 },
            },
            code_block: {
              content: "inline*",
              marks: "",
              group: "block",
              code: !0,
              defining: !0,
              parseDOM: [{ tag: "pre", preserveWhitespace: "full" }],
              toDOM() {
                return [
                  "pre",
                  { class: H().CodeBlock },
                  ["code", { class: H().Code }, 0],
                ];
              },
              bbCode: { tag: "code" },
            },
          },
          ye = {
            strong: {
              parseDOM: [
                { tag: "strong" },
                {
                  tag: "b",
                  getAttrs: (g) => g.style.fontWeight != "normal" && null,
                },
                {
                  style: "font-weight=400",
                  clearMark: (g) => g.type.name == "strong",
                },
                {
                  style: "font-weight",
                  getAttrs: (g) => /^(bold(er)?|[5-9]\d{2,})$/.test(g) && null,
                },
              ],
              toDOM: le("b", (0, de.A)("BB_Bold", H().Bold)),
              bbCode: { tag: "b" },
            },
            italic: {
              parseDOM: [
                { tag: "i" },
                { tag: "em" },
                { style: "font-style=italic" },
                {
                  style: "font-style=normal",
                  clearMark: (g) => g.type.name == "em",
                },
              ],
              toDOM: le("i", (0, de.A)("BB_Italic", H().Italic)),
              bbCode: { tag: "i" },
            },
            underline: {
              parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
              toDOM: le("u", (0, de.A)("BB_Underline", H().Underline)),
              bbCode: { tag: "u" },
            },
            strike: {
              parseDOM: [{ style: "text-decoration=line-through" }],
              toDOM: le("span", (0, de.A)("BB_Strike", H().Strike)),
              bbCode: { tag: "strike" },
            },
            code: {
              parseDOM: [{ tag: "code" }],
              toDOM: le("code", (0, de.A)("BB_Code", H().Code)),
              bbCode: { tag: "c" },
            },
            link: {
              attrs: { href: {}, title: { default: null } },
              inclusive: !1,
              parseDOM: [
                {
                  tag: "a[href]",
                  getAttrs(g) {
                    return {
                      href: (0, Ce.J)(g.getAttribute("href") ?? ""),
                      title: g.getAttribute("title"),
                    };
                  },
                },
              ],
              toDOM(g) {
                const { href: u, title: _ } = g.attrs;
                return [
                  "a",
                  { href: (0, Ce.J)(u), title: _, class: "BB_Link" },
                  0,
                ];
              },
              bbCode: {
                tag: "url",
                BBArgsToAttrs: (g) => ({ href: g[""] }),
                AttrsToBBArgs: (g) => ({ args: { "": g.href } }),
                convertContentToAttr: "href",
              },
            },
          },
          Ae = { nodes: Te, marks: ye },
          He = {
            node: {},
            marks: {
              color: {
                attrs: { color: {} },
                parseDOM: [{ style: "color", getAttrs: (g) => ({ color: g }) }],
                toDOM(g) {
                  return [
                    "span",
                    {
                      style: `color: ${g.attrs.color}`,
                      class: (0, de.A)("BB_Color", H().Color),
                    },
                    0,
                  ];
                },
                bbCode: {
                  tag: "color",
                  BBArgsToAttrs: (g) => ({ color: g[""] }),
                  AttrsToBBArgs: (g) => ({ args: { "": g.color } }),
                },
                inclusive: !0,
                excludes: "",
              },
              bgcolor: {
                attrs: { color: {} },
                parseDOM: [
                  { style: "bgcolor", getAttrs: (g) => ({ color: g }) },
                ],
                toDOM(g) {
                  return [
                    "span",
                    {
                      style: `background-color: ${g.attrs.color}`,
                      class: (0, de.A)("BB_BGColor", H().BGColor),
                    },
                    0,
                  ];
                },
                bbCode: {
                  tag: "bgcolor",
                  BBArgsToAttrs: (g) => ({ color: g[""] }),
                  AttrsToBBArgs: (g) => ({ args: { "": g.color } }),
                },
                inclusive: !0,
                excludes: "",
              },
            },
          },
          Oe = { NoBorder: "noborder", EqualCells: "equalcells" },
          Be = ie.of({
            tableGroup: "block",
            cellContent: "paragraph block*",
            cellAttributes: {
              class: {
                default: H().TableCell,
                setDOMAttr: (g, u) => {
                  u.class = g;
                },
              },
            },
          }),
          Je = {
            BBArgsToAttrs: (g) => {
              const u = {};
              return (
                g.colspan && (u.colspan = parseInt(g.colspan)),
                g.rowspan && (u.rowspan = parseInt(g.rowspan)),
                g.colwidth &&
                  (u.colwidth = g.colwidth.split(",").map((_) => parseInt(_))),
                u
              );
            },
            AttrsToBBArgs: (g) => {
              const u = {};
              return (
                g.colspan &&
                  g.colspan != 1 &&
                  (u.colspan = g.colspan.toString()),
                g.rowspan &&
                  g.rowspan != 1 &&
                  (u.rowspan = g.rowspan.toString()),
                g.colwidth && (u.colwidth = g.colwidth.join(",")),
                { args: u }
              );
            },
          },
          et = {
            table: {
              ...Be.table,
              toDOM: (g) =>
                De(
                  "table",
                  (0, de.A)(
                    H().Table,
                    g.attrs.noborder && H().NoBorder,
                    g.attrs.equalcells && H().EqualCells,
                  ),
                  ["tbody", 0],
                ),
              attrs: {
                [Oe.NoBorder]: { default: !1 },
                [Oe.EqualCells]: { default: !0 },
              },
              bbCode: {
                tag: "table",
                BBArgsToAttrs: (g) => ({
                  noborder: !!g.noborder,
                  equalcells: !!g.equalcells,
                }),
                AttrsToBBArgs: (g, u) => {
                  const _ = {};
                  g.noborder && (_.noborder = "1"),
                    g.equalcells && (_.equalcells = "1");
                  const y = u.child(0);
                  if (y) {
                    let j = [];
                    for (let W = 0; W < y.childCount; W++) {
                      const M = y.child(W).attrs;
                      M.colwidth ? j.push(...M.colwidth) : j.push(void 0);
                    }
                    _.colwidth = j.join(",");
                  }
                  return { args: _ };
                },
              },
            },
            table_row: {
              ...Be.table_row,
              toDOM: le("tr", H().TableRow),
              bbCode: { tag: "tr" },
            },
            table_cell: { ...Be.table_cell, bbCode: { ...Je, tag: "td" } },
            table_header: { ...Be.table_header, bbCode: { ...Je, tag: "th" } },
          },
          ht = v.memo(function (u) {
            const { schema: _ } = u,
              y = !!("table" in _.nodes && _.nodes.table.spec.tableRole);
            return (
              (0, O.c$)(
                v.useMemo(() => (y ? ie.AL({ View: st }) : void 0), [y]),
              ),
              (0, O.c$)(v.useMemo(() => (y ? ie.LF() : void 0), [y])),
              null
            );
          });
        class st extends ie.Qg {
          constructor(u, _) {
            super(u, _), this.SetTableClass(u);
          }
          update(u) {
            return super.update(u) ? (this.SetTableClass(u), !0) : !1;
          }
          SetTableClass(u) {
            this.table.className = (0, de.A)(
              H().Table,
              u.attrs[Oe.NoBorder] && H().NoBorder,
              u.attrs[Oe.EqualCells] && H().EqualCells,
            );
          }
        }
        var we = i(18210),
          at = i(54963),
          Ze = i(73309);
        const qe = (0, ve.Nr)(function (u) {
          const {
              pmState: _,
              className: y,
              refOnUpdate: j,
              refView: W,
              bSpellcheckEnabled: M = !0,
              bSingleLine: $,
              panelProps: se,
              children: ee,
            } = u,
            [me, je] = v.useState(),
            [he, ke] = v.useState();
          v.useEffect(() => {
            !_ || !me || ke(new ce.Lz(me, { state: _.state }));
          }, [_, me]),
            v.useEffect(() => () => he?.destroy(), [he]),
            (0, at.D5)(W, he);
          const { refDiv: be, onActivate: dt, onGamepadDirection: pt } = tt(he),
            xt = (0, at.Ue)(be, je);
          if (!_) return null;
          const { schemaConfig: kt, bbcodeParser: lt } = _;
          return (0, e.jsxs)(O.Ot, {
            view: he,
            pmState: _,
            children: [
              (0, e.jsx)(
                w.Z,
                {
                  className: (0, de.A)({
                    ["" + y]: !!y,
                    [Ze.Container]: !0,
                    [Ze.SingleLine]: !!$,
                  }),
                  ref: xt,
                  spellCheck: M,
                  focusable: !0,
                  onActivate: dt,
                  onOKActionDescription: (0, we.we)("#UserGameNotes_Edit"),
                  onGamepadDirection: pt,
                  ...se,
                },
                `editordiv_${M}`,
              ),
              (0, e.jsx)(O.KF, {
                refOnUpdate: j,
                schema: kt.pm_schema,
                bSingleLine: $,
              }),
              (0, e.jsx)(bt, { parser: lt, schema: kt.pm_schema }),
              (0, e.jsx)(ht, { schema: kt.pm_schema }),
              ee,
            ],
          });
        });
        function tt(g) {
          const u = v.useRef(null),
            _ = (0, J.FN)(),
            y = v.useCallback(() => {
              if ((_.ShowVirtualKeyboard(), !g)) return;
              if (!g.hasFocus()) {
                g.focus();
                let $ = g.dom.childNodes,
                  se = u.current?.scrollTop ?? 0;
                for (let ee = 0; ee < $.length; ++ee) {
                  let me = $[ee],
                    je = me.offsetTop;
                  if (je !== void 0 && je >= se) {
                    let he = me.getBoundingClientRect();
                    (0, Pe.bQ)(g, he.left, he.top);
                    break;
                  }
                }
              }
            }, [_, g]),
            j = v.useCallback((M) => M.currentTarget == M.target, []),
            W = (0, U.ak)(u, void 0, void 0, j);
          return { refDiv: u, onActivate: y, onGamepadDirection: W };
        }
        const bt = v.memo(function (u) {
          const { parser: _, schema: y } = u;
          return (
            (0, O.c$)(
              v.useMemo(
                () =>
                  new B.k_({
                    props: {
                      transformPasted: (j, W) => At(_, y.nodes.hard_break, j),
                    },
                  }),
                [_, y],
              ),
            ),
            null
          );
        });
        function At(g, u, _) {
          let y = !1;
          if (
            (_.content.forEach((W) => {
              W.type == u && (y = !0);
            }),
            !y)
          )
            return _;
          const j = g.ConvertLineBreaksToParagraphs(_.content);
          return D.Ji.maxOpen(j);
        }
        var Qe = i(249),
          Bt = i(58534),
          Kt = i(2801),
          zt = i(88003);
        function Ft(g) {
          const {
              closeModal: u,
              strTitle: _,
              onOK: y,
              strOKText: j,
              onCancel: W,
              strCancelText: M,
              bOKDisabled: $,
              bCancelDisabled: se,
              strClassNameContent: ee = "GenericFormDialog",
              children: me,
            } = g,
            je = v.useCallback(() => {
              W && W(), u();
            }, [W, u]),
            he = se ? () => {} : je;
          return (0, e.jsx)(zt.x_, {
            onEscKeypress: he,
            children: (0, e.jsxs)(Bt.U9, {
              onSubmit: y,
              classNameContent: ee,
              children: [
                (0, e.jsx)(Bt.Y9, { children: _ }),
                me,
                (0, e.jsx)(Bt.wi, {
                  children: (0, e.jsx)(Bt.CB, {
                    strOKText: j,
                    bOKDisabled: $,
                    onCancel: he,
                    strCancelText: M,
                    bCancelDisabled: se,
                  }),
                }),
              ],
            }),
          });
        }
        function Ps(g, u) {
          const [_, y] = React.useState(void 0),
            j = React.useCallback(
              (se) => {
                const ee = se.state.selection;
                let me = "",
                  je = "",
                  { from: he, to: ke } = ee;
                const be = FindMarkAtPosition(se.state, g.marks.link, ee.$from),
                  dt = !!be;
                be
                  ? ((je = be.mark.attrs.href),
                    ee.empty
                      ? ((me = be.slice.content.textBetween(
                          0,
                          be.slice.content.size,
                        )),
                        (he = be.from),
                        (ke = be.to))
                      : ((he = Math.max(be.from, ee.from)),
                        (ke = Math.min(be.to, ee.to)),
                        (me = be.slice.content.textBetween(
                          he - be.from,
                          ke - be.from,
                        ))))
                  : se.state.selection.empty ||
                    ((me = se.state.doc.cut(
                      se.state.selection.from,
                      se.state.selection.to,
                    ).textContent),
                    me.match(/^https?:\/\//) && (je = me));
                let pt = {};
                if (u)
                  for (const xt in u) {
                    const kt = u[xt],
                      lt = be ? kt.fnReadValue(be.mark) : kt.defaultValue;
                    pt[xt] = lt;
                  }
                y({
                  view: se,
                  strLinkText: me,
                  strLinkHref: je,
                  bIsUpdate: dt,
                  addtlAttrs: u,
                  addtlAttrsValues: pt,
                  from: he,
                  to: ke,
                });
              },
              [g.marks.link, u],
            ),
            W = _?.view,
            M = React.useCallback(() => {
              window.setTimeout(() => W.focus(), 1), y(void 0);
            }, [W]),
            $ =
              _ &&
              jsx(SimpleModal, {
                active: !0,
                children: jsx(_t, { schema: g, closeModal: M, ..._ }),
              });
          return [j, $];
        }
        const _t = v.memo(function (u) {
          const {
              schema: _,
              strLinkText: y,
              strLinkHref: j,
              bIsUpdate: W,
              addtlAttrs: M,
              addtlAttrsValues: $,
              closeModal: se,
              view: ee,
              from: me,
              to: je,
            } = u,
            [he, ke] = v.useState(y),
            [be, dt] = v.useState(j),
            pt = v.useRef(null),
            xt = v.useRef(null),
            [kt, lt] = v.useState($),
            Ht = () => {
              let mt = ee.state.tr;
              const qt = { href: be };
              for (const rs in kt) qt[rs] = kt[rs];
              const Pn = _.marks.link?.create(qt),
                Bs = _.text(he || be, [Pn]);
              try {
                (mt = mt.replaceRangeWith(me, je, Bs)),
                  (mt = mt.setSelection(
                    B.U3.create(mt.doc, me + Bs.nodeSize, me + Bs.nodeSize),
                  )),
                  ee.dispatch(mt);
              } catch (rs) {
                console.error("Error during link insertion", rs);
              }
              se();
            };
          v.useLayoutEffect(() => {
            pt.current?.value?.length
              ? xt.current?.value?.length
                ? (pt.current.Focus(), pt.current.element.select())
                : xt.current.Focus()
              : pt.current?.Focus();
          }, []);
          const Rt = W
              ? (0, we.we)("#FormattingToolbar_EditLink")
              : (0, we.we)("#FormattingToolbar_InsertLink"),
            ps = W
              ? (0, we.we)("#Button_Save")
              : (0, we.we)("#FormattingToolbar_InsertLink");
          return (0, e.jsxs)(Ft, {
            onOK: Ht,
            closeModal: se,
            strTitle: Rt,
            strOKText: ps,
            bOKDisabled: be.length == 0,
            children: [
              (0, e.jsx)(Bt.pd, {
                ref: pt,
                value: he,
                onChange: (mt) => ke(mt.currentTarget.value),
                label: (0, we.we)("#FormattingToolbar_LinkText"),
              }),
              (0, e.jsx)(Bt.pd, {
                ref: xt,
                value: be,
                placeholder: "https://",
                onChange: (mt) => dt(mt.currentTarget.value),
                label: (0, we.we)("#FormattingToolbar_LinkAddress"),
                mustBeURL: !0,
              }),
              M && (0, e.jsx)(ct, { addtlAttrs: M, values: kt, setValues: lt }),
            ],
          });
        });
        function ct(g) {
          const { addtlAttrs: u, values: _, setValues: y } = g;
          return (0, e.jsx)(e.Fragment, {
            children: Object.keys(u).map((j) =>
              (0, e.jsx)(
                ft,
                {
                  attrName: j,
                  fnRender: u[j].fnRenderEditor,
                  value: _[j],
                  setValues: y,
                },
                j,
              ),
            ),
          });
        }
        const ft = v.memo(function (u) {
          const { attrName: _, fnRender: y, value: j, setValues: W } = u,
            M = v.useCallback(($) => W((se) => ({ ...se, [_]: $ })), [_, W]);
          return y(j, M);
        });
        var Ke = i(50660);
        function Ss(g) {
          const { schema: u, addtlAttrs: _, children: y } = g,
            { callbacks: j, view: W } = useToolbarContext(),
            [M, $] = React.useState(() => IsMarkActive(W.state, u.marks.link)),
            se = React.useCallback(
              (je) => $(IsMarkActive(je.state, u.marks.link)),
              [u],
            );
          useCallbackList(j, se);
          const [ee, me] = useInsertLinkModal(u, _);
          return jsxs(Fragment, {
            children: [
              me,
              jsx(ToggleButton, {
                onClick: () => ee(W),
                toggled: M,
                tooltip: Localize("#FormattingToolbar_InsertLink"),
                keyboardShortcut: "Mod-k",
                children: y,
              }),
            ],
          });
        }
        var Zt = i(98609),
          Us = i(47604),
          ns = i(28922),
          Ms = i(61024);
        function an(g, u, _) {
          const [y, j] = v.useState(void 0),
            W = v.useRef(null),
            M = v.useCallback(
              (ee) => {
                W.current = ee;
                const { state: me } = ee,
                  je = me.selection;
                let { from: he, to: ke, empty: be } = je;
                const dt = u ? g.marks.color : g.marks.bgcolor;
                let pt = "",
                  xt = "";
                const kt = be ? je.$from : me.doc.resolve(he),
                  lt = (0, Pe.vn)(me, dt, kt),
                  Ht = !!lt;
                Ht
                  ? ((pt = lt.mark.attrs.color),
                    be
                      ? ((xt = lt.slice.content.textBetween(
                          0,
                          lt.slice.content.size,
                        )),
                        (he = lt.from),
                        (ke = lt.to))
                      : ((he = Math.max(lt.from, he)),
                        (ke = Math.min(lt.to, ke)),
                        (xt = lt.slice.content.textBetween(
                          he - lt.from,
                          ke - lt.from,
                        ))))
                  : be || (xt = me.doc.cut(he, ke).textContent);
                let Rt = {};
                if (_)
                  for (const ps in _) {
                    const mt = _[ps],
                      qt = lt ? mt.fnReadValue(lt.mark) : mt.defaultValue;
                    Rt[ps] = qt;
                  }
                j({
                  viewRef: W,
                  strColor: pt,
                  strTargetText: xt,
                  bIsUpdate: Ht,
                  addtlAttrs: _,
                  addtlAttrsValues: Rt,
                  from: he,
                  to: ke,
                });
              },
              [_, u, g.marks.bgcolor, g.marks.color],
            ),
            $ = v.useCallback(() => {
              const ee = W.current;
              window.setTimeout(() => {
                ee && !ee.isDestroyed && ee.focus();
              }, 1),
                j(void 0);
            }, []),
            se =
              y &&
              (0, e.jsx)(Kt.EN, {
                active: !0,
                children: (0, e.jsx)(on, {
                  schema: g,
                  bColor: u,
                  closeModal: $,
                  ...y,
                }),
              });
          return [M, se];
        }
        function Wt(g) {
          if (g.startsWith("rgb")) {
            const u = g.match(/\d+/g);
            if (!u || u.length < 3) return "#000000";
            const [_, y, j] = u.map(Number);
            return (
              "#" +
              [_, y, j]
                .map((W) => {
                  const M = W.toString(16);
                  return M.length === 1 ? "0" + M : M;
                })
                .join("")
            );
          }
          return g;
        }
        function zs(g) {
          const u = g.match(
            /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i,
          );
          if (u) {
            let [, _, y, j, W] = u;
            const M = parseInt(_, 10),
              $ = parseInt(y, 10),
              se = parseInt(j, 10);
            return `#${((1 << 24) + (M << 16) + ($ << 8) + se).toString(16).slice(1)}`;
          }
          return "#7e3232";
        }
        const on = v.memo(function (u) {
          const {
              schema: _,
              strColor: y,
              bIsUpdate: j,
              strTargetText: W,
              bColor: M,
              addtlAttrs: $,
              addtlAttrsValues: se,
              closeModal: ee,
              viewRef: me,
              from: je,
              to: he,
            } = u,
            [ke, be] = v.useState(y),
            dt = v.useRef(null),
            [pt, xt] = v.useState(se),
            kt = v.useCallback(() => {
              try {
                const Rt = me.current;
                if (!Rt || Rt.isDestroyed) {
                  console.warn(
                    "Editor view is destroyed; skipping color insert",
                  );
                  return;
                }
                const { state: ps, dispatch: mt } = Rt,
                  qt = M ? _.marks.color : _.marks.bgcolor;
                if (!qt) {
                  console.log("debug: no markType");
                  return;
                }
                if (!ke || !/^#[0-9a-fA-F]{6}$/.test(ke)) {
                  console.log("debug: invalid color text: " + ke);
                  return;
                }
                const Pn = Math.max(0, Math.min(je, ps.doc.content.size)),
                  Bs = Math.max(0, Math.min(he, ps.doc.content.size));
                if (Pn > Bs) {
                  console.error("Invalid selection range:", je, he);
                  return;
                }
                const rs = qt.create({ color: ke, ...pt });
                let as = ps.tr;
                je === he
                  ? (as = as.addStoredMark(rs))
                  : ((as = as.removeMark(je, he, qt)),
                    (as = as.addMark(je, he, rs)),
                    (as = as.setSelection(B.U3.create(as.doc, he)))),
                  mt(as.scrollIntoView());
              } catch (Rt) {
                console.error(Rt);
              } finally {
                requestAnimationFrame(() => ee());
              }
            }, [pt, M, ee, ke, je, _.marks.bgcolor, _.marks.color, he, me]);
          v.useLayoutEffect(() => {
            dt.current?.value?.length
              ? dt.current.focus()
              : dt.current?.focus();
          }, []);
          const lt = (0, we.we)(
              M ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
            ),
            Ht = j
              ? (0, we.we)("#Button_Save")
              : (0, we.we)(
                  M ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
                );
          return (0, e.jsxs)(Us.s, {
            onClose: ee,
            strTitle: lt,
            children: [
              (0, e.jsx)(ns.s, {
                color: ke,
                disableAlpha: !0,
                onChange: (Rt) => be(zs(Rt)),
              }),
              (0, e.jsx)(Ms.M, {
                strOKLabel: Ht,
                strCancelLabel: (0, we.we)("#Button_Cancel"),
                onOK: () => {
                  ke && ke.length > 0 && kt();
                },
                onClose: ee,
              }),
            ],
          });
        });
        function It(g) {
          const { schema: u, bColor: _, addtlAttrs: y, children: j } = g,
            { callbacks: W, view: M } = (0, Ke.wU)(),
            [$, se] = v.useState(() =>
              (0, Pe.Cd)(M.state, _ ? u.marks.color : u.marks.bgcolor),
            ),
            ee = v.useCallback(
              (he) =>
                se((0, Pe.Cd)(he.state, _ ? u.marks.color : u.marks.bgcolor)),
              [_, u],
            );
          (0, at.hL)(W, ee);
          const [me, je] = an(u, _, y);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              je,
              (0, e.jsx)(Ke.ff, {
                onClick: () => me(M),
                toggled: $,
                tooltip: _
                  ? (0, we.we)("#FormattingToolbar_Color")
                  : (0, we.we)("#FormattingToolbar_BgColor"),
                children: j,
              }),
            ],
          });
        }
        function us() {
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ke.cQ, {
                tooltip: (0, we.we)("#FormattingToolbar_Undo"),
                keyboardShortcut: "Mod-z",
                command: fe.tN,
                children: (0, e.jsx)(Qe.VnB, {}),
              }),
              (0, e.jsx)(Ke.cQ, {
                tooltip: (0, we.we)("#FormattingToolbar_Redo"),
                keyboardShortcut:
                  Zt.TS.PLATFORM == "macos" ? "Mod-Shift-z" : "Mod-y",
                command: fe.ZS,
                children: (0, e.jsx)(Qe.Bal, {}),
              }),
            ],
          });
        }
        function gs(g) {
          const { schema: u } = g;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ke.GY, {
                tooltip: (0, we.we)("#FormattingToolbar_Bold"),
                keyboardShortcut: "Mod-b",
                mark: u.marks.strong,
                children: (0, e.jsx)(Qe.l4n, {}),
              }),
              (0, e.jsx)(Ke.GY, {
                tooltip: (0, we.we)("#FormattingToolbar_Italic"),
                keyboardShortcut: "Mod-i",
                mark: u.marks.italic,
                children: (0, e.jsx)(Qe.UKJ, {}),
              }),
              (0, e.jsx)(Ke.GY, {
                tooltip: (0, we.we)("#FormattingToolbar_Underline"),
                keyboardShortcut: "Mod-u",
                mark: u.marks.underline,
                children: (0, e.jsx)(Qe.Gj3, {}),
              }),
              "strike" in u.marks &&
                (0, e.jsx)(Ke.GY, {
                  tooltip: (0, we.we)("#FormattingToolbar_Strike"),
                  keyboardShortcut: "Mod-Shift-x",
                  mark: u.marks.strike,
                  children: (0, e.jsx)(Qe.tI4, {}),
                }),
              "code" in u.marks &&
                (0, e.jsx)(Ke.GY, {
                  tooltip: (0, we.we)("#FormattingToolbar_InlineCode"),
                  keyboardShortcut: "Ctrl-Shift-c",
                  mark: u.marks.code,
                  children: (0, e.jsx)(Qe.bmT, {}),
                }),
              "color" in u.marks &&
                (0, e.jsx)(It, {
                  schema: u,
                  bColor: !0,
                  children: (0, e.jsx)(Qe.r7n, {}),
                }),
              "bgcolor" in u.marks &&
                (0, e.jsx)(It, {
                  schema: u,
                  bColor: !1,
                  children: (0, e.jsx)(Qe.FId, {}),
                }),
            ],
          });
        }
        function ln(g) {
          const { schema: u } = g;
          return (0, e.jsx)(Ke.u3, {
            tooltip: (0, we.we)("#FormattingToolbar_Paragraph"),
            keyboardShortcut: "Ctrl-Shift-0",
            nodeType: u.nodes.paragraph,
            children: (0, e.jsx)(Qe.iYj, {}),
          });
        }
        function ks(g) {
          const { nodeTypes: u, attrs: _, children: y, ...j } = g,
            { callbacks: W, view: M } = (0, Ke.wU)(),
            [$, se] = v.useState(() => (0, Pe.Ce)(M.state, u, _)),
            ee = v.useCallback((he) => se((0, Pe.Ce)(he.state, u, _)), [u, _]);
          (0, at.hL)(W, ee);
          const me = v.useMemo(() => (0, Pe.c4)(u, _ ?? {}), [u, _]),
            je = !!$;
          return (0, e.jsx)(Ke.cQ, {
            ...j,
            command: me,
            toggled: je,
            children: y,
          });
        }
        function cn(g) {
          const { schema: u } = g;
          let _ = u.nodes.paragraph,
            y = u.nodes.heading;
          const j = v.useMemo(() => [_, y], [_, y]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ks, {
                tooltip: (0, we.we)("#FormattingToolbar_AlignLeft"),
                keyboardShortcut: "Ctrl-Shift-L",
                nodeTypes: j,
                attrs: { align: "left" },
                children: (0, e.jsx)(Qe.K6w, {}),
              }),
              (0, e.jsx)(ks, {
                tooltip: (0, we.we)("#FormattingToolbar_AlignCenter"),
                keyboardShortcut: "Ctrl-Shift-E",
                nodeTypes: j,
                attrs: { align: "center" },
                children: (0, e.jsx)(Qe.q8c, {}),
              }),
              (0, e.jsx)(ks, {
                tooltip: (0, we.we)("#FormattingToolbar_AlignRight"),
                keyboardShortcut: "Ctrl-Shift-R",
                nodeTypes: j,
                attrs: { align: "right" },
                children: (0, e.jsx)(Qe.dWO, {}),
              }),
            ],
          });
        }
        function Ws(g) {
          const { schema: u, maxLevel: _ = 1, levels: y } = g,
            j = _ + y - 1;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              _ <= 1 &&
                (0, e.jsx)(Ke.u3, {
                  tooltip: (0, we.we)("#FormattingToolbar_HeadingLevel1"),
                  keyboardShortcut: "Ctrl-Shift-1",
                  nodeType: u.nodes.heading,
                  attrs: { level: 1 },
                  children: (0, e.jsx)(Qe.jRw, {}),
                }),
              _ <= 2 &&
                j >= 2 &&
                (0, e.jsx)(Ke.u3, {
                  tooltip: (0, we.we)("#FormattingToolbar_HeadingLevel2"),
                  keyboardShortcut: "Ctrl-Shift-2",
                  nodeType: u.nodes.heading,
                  attrs: { level: 2 },
                  children: (0, e.jsx)(Qe.qOW, {}),
                }),
              _ <= 3 &&
                j >= 3 &&
                (0, e.jsx)(Ke.u3, {
                  tooltip: (0, we.we)("#FormattingToolbar_HeadingLevel3"),
                  keyboardShortcut: "Ctrl-Shift-3",
                  nodeType: u.nodes.heading,
                  attrs: { level: 3 },
                  children: (0, e.jsx)(Qe.x7X, {}),
                }),
              _ <= 4 &&
                j >= 4 &&
                (0, e.jsx)(Ke.u3, {
                  tooltip: (0, we.we)("#FormattingToolbar_HeadingLevel4"),
                  keyboardShortcut: "Ctrl-Shift-4",
                  nodeType: u.nodes.heading,
                  attrs: { level: 4 },
                  children: (0, e.jsx)(Qe.qzO, {}),
                }),
              _ <= 5 &&
                j >= 5 &&
                (0, e.jsx)(Ke.u3, {
                  tooltip: (0, we.we)("#FormattingToolbar_HeadingLevel5"),
                  keyboardShortcut: "Ctrl-Shift-5",
                  nodeType: u.nodes.heading,
                  attrs: { level: 5 },
                  children: (0, e.jsx)(Qe.jXA, {}),
                }),
            ],
          });
        }
        function dn(g) {
          const { schema: u, showIndentButtonsAsNeeded: _ = !1 } = g,
            { callbacks: y, view: j } = (0, Ke.wU)(),
            { bullet_list: W, ordered_list: M, list_item: $ } = u.nodes,
            se = v.useMemo(() => _e.T2($), [$]),
            ee = v.useMemo(() => _e.$B($), [$]),
            [me, je] = v.useState(() => se(j.state) || ee(j.state));
          return (
            (0, at.hL)(
              y,
              v.useCallback(
                (he) => {
                  je(se(he.state) || ee(he.state));
                },
                [se, ee],
              ),
            ),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(An, {
                  tooltip: (0, we.we)("#FormattingToolbar_BulletedList"),
                  keyboardShortcut: "Ctrl-Shift-8",
                  list_type: W,
                  list_item: $,
                  children: (0, e.jsx)(Qe.JPq, {}),
                }),
                M &&
                  (0, e.jsx)(An, {
                    tooltip: (0, we.we)("#FormattingToolbar_OrderedList"),
                    keyboardShortcut: "Ctrl-Shift-7",
                    list_type: M,
                    list_item: $,
                    children: (0, e.jsx)(Qe.jE0, {}),
                  }),
                (!_ || me) &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(Ke.cQ, {
                        tooltip: (0, we.we)("#FormattingToolbar_OutdentList"),
                        keyboardShortcut: "Mod-[",
                        command: se,
                        children: (0, e.jsx)(Qe.LSz, {}),
                      }),
                      (0, e.jsx)(Ke.cQ, {
                        tooltip: (0, we.we)("#FormattingToolbar_IndentList"),
                        keyboardShortcut: "Mod-[",
                        command: ee,
                        children: (0, e.jsx)(Qe.ycU, {}),
                      }),
                    ],
                  }),
              ],
            })
          );
        }
        function An(g) {
          const { list_type: u, list_item: _, children: y, ...j } = g,
            { callbacks: W, view: M } = (0, Ke.wU)(),
            $ = v.useCallback((he) => (0, Pe.wt)(he.state, u) !== void 0, [u]),
            [se, ee] = v.useState(() => $(M)),
            me = v.useMemo(() => _e.Sd(u), [u]),
            je = v.useMemo(() => _e.T2(_), [_]);
          return (
            (0, at.hL)(
              W,
              v.useCallback(
                (he) => {
                  ee($(he));
                },
                [$],
              ),
            ),
            (0, e.jsx)(Ke.cQ, {
              ...j,
              toggled: se,
              command: se ? je : me,
              children: y,
            })
          );
        }
        function Vn(g) {
          const { schema: u, addtlAttrs: _ } = g;
          return jsx(LinkMarkButton, {
            schema: u,
            addtlAttrs: _,
            children: jsx(GamepadUISVG.TextLink, {}),
          });
        }
        function jr(g) {
          const { bSpellcheckEnabled: u, setSpellcheckEnabled: _ } = g;
          return jsx(ToggleButton, {
            tooltip: u
              ? Localize("#FormattingToolbar_DisableSpellcheck")
              : Localize("#FormattingToolbar_EnableSpellcheck"),
            toggled: u,
            onClick: () => _(!u),
            children: jsx(GamepadUISVG.SpellCheck, {}),
          });
        }
        class un {
          m_ProseMirrorSchema;
          m_mapBBCodeDictionary = new Map();
          m_PMToBBCodeConfig = { mapNodes: new Map(), mapMarks: new Map() };
          get pm_schema() {
            return this.m_ProseMirrorSchema;
          }
          get bbcode_dictionary() {
            return this.m_mapBBCodeDictionary;
          }
          get pm_to_bbcode_config() {
            return this.m_PMToBBCodeConfig;
          }
          ConvertAttrToBBCodeArgs(u, _) {
            const y = this.m_PMToBBCodeConfig.mapNodes.get(u.type);
            return y && y.AttrsToBBArgs ? y.AttrsToBBArgs(_, u).args || {} : {};
          }
          constructor(u, _) {
            const y = {
                doc: { content: "block+" },
                text: { group: "inline" },
                hard_break: {
                  inline: !0,
                  group: "inline",
                  selectable: !1,
                  linebreakReplacement: !0,
                  parseDOM: [{ tag: "br" }],
                  toDOM() {
                    return ["br"];
                  },
                },
              },
              j = new Map(),
              W = new Map(),
              M = _ ? new Set(_) : void 0;
            for (const se in u.nodes) {
              const { bbCode: ee, ...me } = u.nodes[se],
                je = $t(ee, M);
              je && ((y[se] = me), j.set(se, je));
            }
            const $ = {};
            for (const se in u.marks) {
              const { bbCode: ee, ...me } = u.marks[se];
              (!M || M.has(ee.tag)) && (($[se] = me), W.set(se, ee));
            }
            (this.m_ProseMirrorSchema = new D.Sj({ nodes: y, marks: $ })),
              j.forEach((se, ee) => {
                const me = this.m_ProseMirrorSchema.nodes[ee],
                  je = u.nodes[ee],
                  he = Array.isArray(se) ? se : [se];
                let ke;
                je.content == "list_item+"
                  ? (ke = this.m_ProseMirrorSchema.nodes.list_item)
                  : je.content?.indexOf("paragraph") != -1 &&
                    (ke = this.m_ProseMirrorSchema.nodes.paragraph),
                  he.forEach(
                    ({
                      tag: kt,
                      BBArgsToAttrs: lt,
                      AttrsToBBArgs: Ht,
                      convertContentToAttr: Rt,
                      bVerbatimArgs: ps,
                      bVerbatimContent: mt,
                      ...qt
                    }) => {
                      this.m_mapBBCodeDictionary.set(kt, {
                        Constructor: {
                          node: me,
                          BBArgsToAttrs: lt,
                          convertContentToAttr: Rt,
                          acceptNode: ke,
                        },
                        skipFollowingNewline: !0,
                        ...qt,
                      });
                    },
                  );
                const {
                  tag: be,
                  AttrsToBBArgs: dt,
                  bVerbatimArgs: pt,
                  bVerbatimContent: xt,
                } = he[0];
                this.m_PMToBBCodeConfig.mapNodes.set(me, {
                  tag: be,
                  AttrsToBBArgs: dt,
                  bVerbatimArgs: pt,
                  bVerbatimContent: xt,
                });
              }),
              W.forEach((se, ee) => {
                const me = this.m_ProseMirrorSchema.marks[ee],
                  { tag: je, BBArgsToAttrs: he, AttrsToBBArgs: ke, ...be } = se;
                this.m_mapBBCodeDictionary.set(je, {
                  Constructor: { mark: me, BBArgsToAttrs: he },
                  ...be,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(me, {
                    tag: je,
                    AttrsToBBArgs: ke,
                  });
              });
          }
        }
        function $t(g, u) {
          if (u)
            if (Array.isArray(g)) {
              const _ = g.filter((y) => u.has(y.tag));
              return _.length > 0 ? _ : void 0;
            } else return u.has(g.tag) ? g : void 0;
          else return g;
        }
        const {
            paragraph: hs,
            heading: Kn,
            bullet_list: Yt,
            list_item: Xt,
            image: $n,
          } = Ae.nodes,
          {
            strong: vn,
            italic: yn,
            underline: Yn,
            link: jn,
            strike: Xn,
          } = Ae.marks;
        function Qn(g) {
          return new un({
            nodes: {
              paragraph: hs,
              heading: {
                ...Kn,
                attrs: { level: { default: 2 }, align: { default: "left" } },
                parseDOM: [1, 2, 3, 4, 5, 6]
                  .map((u) => ({
                    tag: `h${u}`,
                    getAttrs(_) {
                      return { level: 2, align: _.style.textAlign || "left" };
                    },
                  }))
                  .concat(
                    [1, 2, 3, 4, 5, 6].map((u) => ({
                      tag: `span[data-ccp-parastyle="heading ${u}"]`,
                      getAttrs(_) {
                        return { level: 2, align: _.style.textAlign || "left" };
                      },
                    })),
                  ),
                bbCode: [2].map(Ue),
              },
              bullet_list: Yt,
              list_item: Xt,
              image: { ...$n, toDOM: (u) => ["img", { src: g(u.attrs.src) }] },
              table: {
                content: "tr+",
                group: "block",
                toDOM: ge("table", "div"),
                bbCode: { tag: "table" },
              },
              tr: {
                content: "(th | td)+",
                toDOM: ge("tr", "div"),
                bbCode: { tag: "tr" },
              },
              th: {
                content: "paragraph block*",
                toDOM: ge("th", "span"),
                bbCode: { tag: "th" },
              },
              td: {
                content: "paragraph block*",
                toDOM: ge("td", "span"),
                bbCode: { tag: "td" },
              },
            },
            marks: {
              strong: vn,
              italic: yn,
              underline: Yn,
              strike: Xn,
              link: {
                ...jn,
                toDOM: (u, _) => [
                  "a",
                  {
                    ...jn.toDOM(u, _)[1],
                    title: (0, we.we)(
                      "#StoreAdmin_GameDescription_LinksDisabled",
                    ),
                  },
                  0,
                ],
                parseDOM: void 0,
              },
            },
          });
        }
        var Jn = i(8323),
          Zn = i(40365),
          Mt = i(80968),
          Gt = i(99412);
        const Ls = new Jn.lu(),
          Gs = { parser: { bConvertNewlinesToBR: !0 } };
        function Pr(g) {
          const {
              language: u,
              languages: _,
              rctToolbarControls: y,
              mapValues: j,
              editorType: W,
              rctAboveEditor: M,
            } = g,
            $ = j.get(u),
            [se, ee] = v.useState(),
            me = v.useRef(void 0),
            je = Vs((0, Gt.sfN)(u)),
            [he] = v.useState(() => new Map()),
            ke = v.useCallback(
              (Ht) => {
                he.has(Ht) ||
                  he.set(Ht, new P(je, Ht.Value, (Rt) => Ht.Set(Rt), Gs));
              },
              [je, he],
            ),
            [be, dt] = v.useState();
          v.useEffect(() => {
            ke($), dt(he.get($));
          }, [je, he, ke, $]);
          const pt = (0, a.gc)($);
          v.useEffect(() => {
            he.get($).ReplaceDocument(pt);
          }, [$, pt, he]),
            z(be, { msAutosaveTimeout: 5e3 }),
            v.useEffect(() => {
              window.DisableTooltipMutationObserver &&
                window.DisableTooltipMutationObserver(),
                (window.PHPReactPreSubmitCallbacks = Ls);
            }, []),
            (0, a.hL)(Ls, () => be?.CommitChanges()),
            v.useEffect(() => {
              me.current && me.current();
            }, [se, $]);
          const xt = (0, Gt.sfN)(u),
            kt = W != "awards",
            lt = v.useCallback((Ht) => qn(be, j, ke, Ht), [ke, j, be]);
          return (0, e.jsx)(er, {
            imageNodeType: je.pm_schema.nodes.image,
            activeLanguage: xt,
            languages: _,
            children: (0, e.jsx)(sr, {
              editorType: W,
              view: se,
              refUpdateToolbar: me,
              rctToolbarControls: y,
              schema: je.pm_schema,
              rctAboveEditor: M,
              children: (0, e.jsx)(qe, {
                panelProps: {
                  lang: (0, we.d$)(u),
                  onBlur: () => be?.CommitChanges(),
                },
                className: Mt.EditorPanel,
                pmState: be,
                refOnUpdate: me,
                refView: ee,
                children: (0, e.jsx)(or, {
                  schema: je,
                  activeLanguage: xt,
                  mapValues: j,
                  allowAnimations: kt,
                  updateDocument: lt,
                }),
              }),
            }),
          });
        }
        function qn(g, u, _, y) {
          g?.CommitChanges();
          for (const [j, W] of y) {
            const M = u.get(j);
            M && M.Value != W && (_(M), M.Set(W));
          }
        }
        function er(g) {
          const {
              imageNodeType: u,
              activeLanguage: _,
              languages: y,
              children: j,
            } = g,
            W = (0, b.cz)(),
            M = v.useCallback(
              (se) => {
                let ee,
                  me = new Promise((he, ke) => {
                    ee = {
                      file: se,
                      onComplete: (be) => {
                        he(u.createChecked({ src: be }));
                      },
                      onCancel: () => he(void 0),
                      activeLanguage: _,
                      languages: y,
                    };
                  });
                const je = W(ee);
                return me.finally(() => je()), me;
              },
              [u, W, _, y],
            ),
            $ = v.useCallback(async (se) => {
              const ee = new URL(
                `${Zt.TS.PARTNER_BASE_URL}gfxproxy/externalgfx/`,
              );
              return (
                ee.searchParams.append("url", se),
                await (await fetch(ee, { method: "GET" })).blob()
              );
            }, []);
          return (0, e.jsx)(A.Xv, {
            ProcessFileUpload: M,
            FetchImageURL: $,
            children: (0, e.jsxs)("div", { children: ["	", j] }),
          });
        }
        var tr = ((g) => (
          (g[(g.k_PreviewDesktop = 1)] = "k_PreviewDesktop"),
          (g[(g.k_PreviewMobile = 2)] = "k_PreviewMobile"),
          (g[(g.k_PreviewGamepad = 3)] = "k_PreviewGamepad"),
          g
        ))(tr || {});
        function sr(g) {
          const {
              editorType: u,
              view: _,
              refUpdateToolbar: y,
              rctToolbarControls: j,
              schema: W,
              children: M,
              rctAboveEditor: $,
            } = g,
            [se, ee] = v.useState(!1),
            [me, je] = v.useState(1),
            he = v.useCallback(
              (dt) =>
                dt.borderBoxSize.length > 0 &&
                ee(dt.borderBoxSize[0].blockSize > 300),
              [],
            ),
            ke = (0, Zn.wY)(he),
            be = u === "awards" && me === 3;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(rr, {
                view: _,
                refUpdateToolbar: y,
                sticky: se,
                rctToolbarControls: j,
                schema: W,
                ePreviewMode: me,
                setPreviewMode: je,
              }),
              (0, e.jsxs)("div", {
                className: (0, de.A)({
                  [Mt.AboutTheGameArea]: !0,
                  [Mt.PreviewDesktop]: me === 1,
                  [Mt.PreviewMobile]: me === 2,
                  [Mt.PreviewGamepad]: me === 3,
                  [Mt.Awards]: u === "awards",
                }),
                ref: ke,
                children: [
                  $,
                  be &&
                    (0, e.jsx)("div", {
                      className: Mt.PreviewInfo,
                      children: (0, we.we)(
                        "#StoreAdmin_GameDescription_Awards_Gamepad_Unsupported",
                      ),
                    }),
                  M,
                ],
              }),
            ],
          });
        }
        function nr(g) {
          return (0, e.jsxs)("h2", {
            className: Mt.StoreAppPageHeader,
            children: [
              g.children,
              (0, e.jsx)("div", { className: Mt.GradientRule }),
            ],
          });
        }
        function Vs(g) {
          const u = (0, b.FD)(),
            _ = v.useRef(u);
          _.current = u;
          const y = v.useRef(g);
          y.current = g;
          const j = v.useRef(void 0);
          if (!j.current) {
            const W = (M) => {
              const $ = _.current.find((ee) => (0, Q.q3)(ee) === M);
              return (0, Q.IP)($, !0, y.current)?.url;
            };
            j.current = Qn(W);
          }
          return j.current;
        }
        function rr(g) {
          const {
            view: u,
            refUpdateToolbar: _,
            rctToolbarControls: y,
            schema: j,
            sticky: W,
            ePreviewMode: M,
            setPreviewMode: $,
          } = g;
          return (0, e.jsxs)(Ke.bI, {
            refUpdateToolbar: _,
            view: u,
            children: [
              (0, e.jsxs)(Ke.Ez, {
                className: (0, de.A)(
                  Mt.GameDescriptionEditorToolbar,
                  W && Mt.Sticky,
                ),
                children: [
                  (0, e.jsx)(us, {}),
                  (0, e.jsx)(Ke.XQ, {}),
                  (0, e.jsx)(gs, { schema: j }),
                  (0, e.jsx)(Ke.XQ, {}),
                  (0, e.jsx)(ln, { schema: j }),
                  (0, e.jsx)(Ws, { schema: j, maxLevel: 2, levels: 1 }),
                  (0, e.jsx)(Ke.XQ, {}),
                  (0, e.jsx)(dn, { schema: j, showIndentButtonsAsNeeded: !0 }),
                  "image" in j.nodes &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(Ke.XQ, {}),
                        (0, e.jsx)(F.KZ, { nodeType: j.nodes.image }),
                      ],
                    }),
                  (0, e.jsx)(Ke.XQ, {}),
                  (0, e.jsx)(cn, { schema: j }),
                  (0, e.jsx)(Ke.XQ, {}),
                  (0, e.jsx)(Ke.hK, {}),
                  y,
                ],
              }),
              (0, e.jsx)(ar, { ePreviewMode: M, setPreviewMode: $ }),
            ],
          });
        }
        function ar(g) {
          const { ePreviewMode: u, setPreviewMode: _ } = g;
          return (0, e.jsxs)("div", {
            className: Mt.PreviewModeCtn,
            children: [
              (0, e.jsx)("div", {
                className: Mt.PreviewModeTitle,
                children: (0, we.we)("#StoreAdmin_GameDescription_PreviewMode"),
              }),
              (0, e.jsx)("div", {
                className: (0, de.A)(Mt.PreviewItem, {
                  [Mt.SelectedPreview]: u === 1,
                }),
                onClick: () => _(1),
                children: (0, we.we)(
                  "#StoreAdmin_GameDescription_PreviewMode_Deskop",
                ),
              }),
              (0, e.jsx)("div", {
                className: (0, de.A)(Mt.PreviewItem, {
                  [Mt.SelectedPreview]: u === 2,
                }),
                onClick: () => _(2),
                children: (0, we.we)(
                  "#StoreAdmin_GameDescription_PreviewMode_Mobile",
                ),
              }),
              (0, e.jsx)("div", {
                className: (0, de.A)(Mt.PreviewItem, {
                  [Mt.SelectedPreview]: u === 3,
                }),
                onClick: () => _(3),
                children: (0, we.we)(
                  "#StoreAdmin_GameDescription_PreviewMode_Gamepad",
                ),
              }),
            ],
          });
        }
        function or(g) {
          const {
              schema: u,
              activeLanguage: _,
              mapValues: y,
              allowAnimations: j,
              updateDocument: W,
            } = g,
            M = v.useMemo(
              () => [
                {
                  type: u.pm_schema.nodes.image,
                  component: F.AS,
                  readProps: ($) => ({
                    src: $.attrs.src,
                    inLink: $.marks.some(
                      (se) => se.type == u.pm_schema.marks.link,
                    ),
                    activeLanguage: _,
                    mapValues: y,
                    allowAnimations: j,
                    fnUpdateDocument: W,
                  }),
                },
              ],
              [u, _, j, y, W],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(L, { specs: M }),
              (0, e.jsx)(A.pw, { nodeType: u.pm_schema.nodes.image }),
            ],
          });
        }
      },
      82363: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { B: () => ne });
        var e = i(7850),
          p = i(90626),
          a = i(58534),
          fe = i(28410),
          B = i(69168),
          Z = i(88003),
          D = i(85599),
          R = i(36707),
          re = i(18210),
          oe = i(64868),
          K = i(27539),
          Se = i.n(K),
          Ie = i(99412),
          Re = i(14947),
          Ye = i(17616);
        function ne(S) {
          const {
              hideModal: P,
              entries: k,
              isLoading: v,
              fnRefetch: z,
              mutateAltTextAsync: G,
              isMutatePending: O,
              fnGetImage: L,
            } = S,
            { bAppHasSteamChinaToolsEnabled: Ee } = (0, fe.aJ)(),
            T = p.useMemo(() => (0, re.O9)(Ee), [Ee]),
            {
              strActiveLanguage: N,
              eActiveLang: F,
              rctLanguageSelect: Q,
              mapValues: b,
            } = (0, Ye.eE)(T),
            [A, w] = p.useState(new Map()),
            [U, J] = p.useState(new Map());
          p.useEffect(() => {
            const le = new Map(),
              De = new Map();
            for (const ge of k)
              le.set(ge.key, structuredClone(ge)),
                De.set(ge.key, structuredClone(ge));
            w(le), J(De);
          }, [k]);
          const ce = p.useCallback(() => {
            for (const le of T.keys()) {
              const De = Array.from(A.values()).some(
                (ge) => ge.mapAltText && le in ge.mapAltText,
              );
              b.get(le).Set(De ? "yes" : "");
            }
          }, [b, A, T]);
          p.useEffect(() => ce(), [ce]);
          const Pe = (0, oe.CH)(),
            ve = (le) => A.get(le)?.mapAltText?.[N] ?? "",
            Le = (le, De) => {
              let ge = A.get(le);
              ge || ((ge = {}), A.set(le, ge)),
                ge.mapAltText || (ge.mapAltText = {}),
                De.trim().length > 0
                  ? (ge.mapAltText[N] = De)
                  : delete ge.mapAltText[N],
                ce(),
                Pe();
            },
            H = Re.sH.set(),
            ie = async () => {
              try {
                H.clear();
                for (const [le, De] of A.entries()) {
                  if (I(De.mapAltText, U.get(le).mapAltText)) continue;
                  const ge = { ...De.mapAltText };
                  for (const ze of Object.keys(U.get(le).mapAltText ?? {}))
                    ze in De.mapAltText || (ge[ze] = "");
                  (await G(le, ge)) ? U.set(le, { ...De }) : H.add(le);
                }
                z?.(), H.size == 0 && P();
              } catch (le) {
                console.error("Some mutations failed", le);
              }
            },
            _e = O || v,
            de = () => {
              _e || P();
            },
            Ce = Array.from(A.values()).some((le) => le.caption != null);
          return (0, e.jsx)(B.E, {
            active: !0,
            children: (0, e.jsx)(Z.x_, {
              onEscKeypress: de,
              bDisableBackgroundDismiss: _e,
              children: (0, e.jsxs)(a.U9, {
                classNameContent: K.AltTextDialogContent,
                children: [
                  (0, e.jsx)(a.Y9, {
                    children: (0, re.we)("#StoreAdmin_EditAltText_Title"),
                  }),
                  (0, e.jsxs)("div", {
                    className: K.AltTextDialogDescription,
                    children: [
                      (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, re.we)(
                              "#StoreAdmin_EditAltText_Desc",
                            ),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, re.we)(
                              "#StoreAdmin_EditAltText_Desc2",
                            ),
                          }),
                        ],
                      }),
                      Q,
                    ],
                  }),
                  (0, e.jsxs)(a.nB, {
                    children: [
                      (0, e.jsxs)("table", {
                        className: (0, R.A)(K.AltTextGrid),
                        children: [
                          (0, e.jsx)("thead", {
                            className: (0, R.A)(K.AltTextHeader),
                            children: (0, e.jsxs)("tr", {
                              children: [
                                (0, e.jsx)("th", {
                                  className: (0, R.A)(K.AltTextImage),
                                }),
                                Ce &&
                                  (0, e.jsx)("th", {
                                    className: (0, R.A)(K.AltTextName),
                                    children: (0, re.we)(
                                      "#StoreAdmin_EditAltText_ColAssetName",
                                    ),
                                  }),
                                (0, e.jsx)("th", {
                                  className: (0, R.A)(K.AltTextInput),
                                  children: (0, re.we)(
                                    "#StoreAdmin_EditAltText_ColAltText",
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)("tbody", {
                            children:
                              !_e &&
                              Array.from(A.values()).map((le) =>
                                (0, e.jsx)(
                                  pe,
                                  {
                                    lang: F,
                                    caption: le.caption,
                                    image: L(le.key, F),
                                    altText: ve(le.key),
                                    setAltText: (De) => Le(le.key, De),
                                    failedMutate: H.has(le.key),
                                    showCaptionColumn: Ce,
                                  },
                                  `${le.key}-${F}`,
                                ),
                              ),
                          }),
                        ],
                      }),
                      _e && (0, e.jsx)(D.t, {}),
                    ],
                  }),
                  (0, e.jsxs)(a.wi, {
                    children: [
                      H.size > 0 &&
                        (0, e.jsx)("div", {
                          className: K.AltTextMutateFailed,
                          children: (0, re.we)(
                            "#StoreAdmin_EditAltText_MutateFailed",
                          ),
                        }),
                      (0, e.jsx)(a.CB, {
                        onCancel: de,
                        onOK: (le) => {
                          le.preventDefault(), ie();
                        },
                        bOKDisabled: _e || ae(A, U),
                        bCancelDisabled: _e,
                        strOKText: (0, re.we)("#StoreAdmin_EditAltText_Save"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function pe(S) {
          const {
              lang: P,
              image: k,
              caption: v,
              altText: z,
              setAltText: G,
              failedMutate: O,
              showCaptionColumn: L,
            } = S,
            [Ee, T] = p.useState(z),
            N = Ee === "#decorative-only",
            [F, Q] = p.useState(N ? "" : z),
            b = (A, w) => {
              T(A), G(A), w || Q(A);
            };
          return (0, e.jsxs)("tr", {
            className: K.AltTextRow,
            children: [
              (0, e.jsx)("td", { className: K.AltTextImage, children: k }),
              L &&
                (0, e.jsxs)("td", {
                  className: K.AltTextName,
                  children: [
                    v,
                    O &&
                      (0, e.jsx)("div", {
                        className: K.AltTextFailed,
                        children: (0, re.we)(
                          "#StoreAdmin_EditAltText_EntryMutateFailed",
                        ),
                      }),
                  ],
                }),
              (0, e.jsxs)("td", {
                className: K.AltTextInput,
                children: [
                  (0, e.jsx)(a.pd, {
                    type: "text",
                    placeholder: N
                      ? (0, re.we)(
                          "#StoreAdmin_EditAltText_PlaceholderDecorative",
                        )
                      : (0, re.we)(
                          "#StoreAdmin_EditAltText_Placeholder",
                          (0, re.we)(`#Language_${(0, Ie.LgB)(P)}`),
                        ),
                    value: N ? "" : Ee,
                    onChange: (A) => b(A.target.value, !1),
                    disabled: N,
                  }),
                  (0, e.jsx)(a.Yh, {
                    checked: N,
                    onChange: (A) => b(A ? "#decorative-only" : F, !0),
                    label: (0, re.we)("#StoreAdmin_EditAltText_Presentational"),
                    tooltip: (0, re.we)(
                      "#StoreAdmin_EditAltText_Presentational_ttip",
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function I(S, P) {
          const k = S ? Object.keys(S) : [],
            v = P ? Object.keys(P) : [];
          return k.length !== v.length ? !1 : k.every((z) => S[z] === P[z]);
        }
        function ae(S, P) {
          if (S.size !== P.size) return !1;
          for (const [k, v] of S) {
            const z = P.get(k);
            if (!z || !I(v.mapAltText, z.mapAltText)) return !1;
          }
          return !0;
        }
      },
      28410: (te, Ge, i) => {
        "use strict";
        i.d(Ge, {
          _M: () => F,
          aJ: () => Pe,
          FD: () => b,
          L4: () => A,
          Z3: () => w,
          cz: () => J,
          TQ: () => ve,
          gg: () => Le,
          Y7: () => ce,
        });
        var e = i(7850),
          p = i(32093),
          a = i(71742),
          fe = i(34604),
          B = i(90626),
          Z = i(58534),
          D = i(22633),
          R = i(1880),
          re = i(69168),
          oe = i(85599),
          K = i(36707),
          Se = i(18210),
          Ie = i(76349),
          Re = i(64868),
          Ye = i(38410),
          ne = i(99412),
          pe = i(48127),
          I = i(69787),
          ae = i(14295);
        function S(de) {
          const { rgUploads: Ce } = de,
            le = B.useMemo(() => new Set(), []),
            De = Ce.findIndex(({ id: Te }) => !le.has(Te)),
            ge = (0, Re.CH)(),
            Ue = (Te) => {
              le.add(Te), ge();
            },
            ze = (Te) => {
              le.delete(Te), ge();
            };
          return Ce.map(({ id: Te, upload: ye }, Ae) =>
            (0, e.jsx)(
              P,
              {
                active: Ae == De,
                upload: ye,
                fnUploadPrepared: () => Ue(Te),
                fnUploadComplete: () => ze(Te),
              },
              Te,
            ),
          );
        }
        function P(de) {
          const {
              upload: Ce,
              active: le,
              fnUploadPrepared: De,
              fnUploadComplete: ge,
            } = de,
            [Ue, ze] = B.useState(!1),
            [Te, ye] = B.useState(void 0);
          B.useEffect(() => {
            le &&
              (O(Ce.file) ||
                ye(
                  (0, Se.we)(
                    "#StoreAdmin_UploadError_UnsupportedFileType",
                    Ce.file.name,
                  ),
                )),
              ze(le);
          }, [le, Ce]);
          const [Ae, Me] = B.useState(!1),
            ue = (0, ae.L)(),
            He = ce(),
            Oe = async (Be, Je) => {
              De(), Me(!0);
              try {
                if (!(await ue.AddImageForLanguage(Ce.file, Je))) {
                  ye((0, Se.we)("#StoreAdmin_UploadError_UnableToGetFileInfo"));
                  return;
                }
                const st = (await ue.UploadAllImages())[0];
                if (!st || !st.bSuccess) {
                  ye(
                    st?.image?.message
                      ? (0, Se.PP)(
                          "#StoreAdmin_UploadError_Generic",
                          st.image.message,
                        )
                      : (0, Se.we)("#StoreAdmin_UploadError_Unknown"),
                  );
                  return;
                }
                He(st.uploadResult), Ce.onComplete((0, fe.TQ)(Be));
              } finally {
                Me(!1), ge();
              }
            };
          return Ue
            ? Te
              ? (0, e.jsx)(re.E, {
                  active: !0,
                  children: (0, e.jsx)(R.o0, {
                    bAlertDialog: !0,
                    strTitle: (0, Se.we)("#Error_Generic"),
                    strDescription: Te,
                    strOKButtonText: (0, Se.we)("#Button_OK"),
                    closeModal: () => Ce.onCancel(),
                  }),
                })
              : (0, e.jsx)(k, { upload: Ce, isUploading: Ae, doUpload: Oe })
            : null;
        }
        function k(de) {
          const { upload: Ce, isUploading: le, doUpload: De } = de,
            { file: ge, onCancel: Ue } = Ce,
            { rgExtraAssets: ze, regexInvalidFilenameCharacters: Te } = A(),
            ye = B.useCallback(
              (At) => At?.replace(Te, "_").toLowerCase() ?? "",
              [Te],
            ),
            { baseFilename: Ae, language: Me } = (0, Ye.jj)(ge.name, ne.xPp),
            [ue, He] = B.useState(() => ye(Ae)),
            Oe = B.useMemo(() => ye(ue), [ue, ye]),
            Be = (0, pe.Gr)(Ce.languages),
            Je = Ee(
              Be.map((At) => At.data),
              Me,
              Ce.activeLanguage,
            ),
            [et, ht] = B.useState(Je),
            [st, we] = B.useState(void 0),
            at = ge.name;
          B.useEffect(() => {
            we(() => {
              if (!Oe) return;
              const { baseFilename: At } = (0, Ye.jj)(Oe),
                Qe = ze.find((Kt) => (0, fe.K7)(Kt) == At);
              return Qe
                ? (0, fe.i$)(Qe)
                  ? Qe
                  : Qe.images?.[(0, ne.LgB)(et)]
                : void 0;
            });
          }, [at, Oe, ze, et]);
          const Ze = G(Oe) && !le ? () => De(Oe, et) : void 0,
            qe = (At) => {
              At.preventDefault(), Ze && Ze();
            },
            tt = B.useCallback(() => {
              Ce.onComplete((0, fe.TQ)(Oe));
            }, [Ce, Oe]),
            bt = st
              ? (0, Se.we)("#StoreAdmin_ExtraAssetUpload_UploadAndReplace")
              : (0, Se.we)("#Button_Upload");
          return (0, e.jsx)(D.mt, {
            active: !0,
            onDismiss: Ue,
            className: Ie.UploadModal,
            children: (0, e.jsxs)(Z.U9, {
              onSubmit: qe,
              children: [
                (0, e.jsx)(Z.Y9, {
                  children: (0, Se.we)(
                    "#StoreAdmin_ExtraAssetUpload_UploadNew",
                  ),
                }),
                (0, e.jsxs)(Z.nB, {
                  children: [
                    (0, e.jsx)(v, {
                      file: ge,
                      isVideo: L(ge),
                      duplicate: st,
                      bShowThrobber: le,
                      onUseDuplicate: tt,
                    }),
                    (0, e.jsx)(z, {
                      name: ue,
                      validatedName: Oe,
                      setName: He,
                      disabled: le,
                    }),
                    Be.length > 1 &&
                      (0, e.jsx)(Z.m, {
                        rgOptions: Be,
                        selectedOption: et,
                        onChange: (At) => ht(At.data),
                      }),
                  ],
                }),
                (0, e.jsx)(Z.wi, {
                  children: (0, e.jsx)(Z.CB, {
                    onOK: Ze,
                    strOKText: bt,
                    bOKDisabled: !Ze,
                    onCancel: Ue,
                  }),
                }),
              ],
            }),
          });
        }
        function v(de) {
          const {
              file: Ce,
              isVideo: le,
              duplicate: De,
              bShowThrobber: ge,
              onUseDuplicate: Ue,
            } = de,
            ze = B.useMemo(() => URL.createObjectURL(Ce), [Ce]),
            Te = (0, I.Un)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              De &&
                (0, e.jsx)("div", {
                  className: Ie.DuplicateMessage,
                  children: (0, Se.we)(
                    "#StoreAdmin_ExtraAssetUpload_FileNameInuse",
                  ),
                }),
              (0, e.jsxs)("div", {
                className: (0, K.A)(Ie.SideBySideComparison, ge && Ie.Loading),
                children: [
                  ge &&
                    (0, e.jsx)("div", {
                      className: Ie.ThrobberContainer,
                      children: (0, e.jsx)(oe.t, {
                        position: "center",
                        size: "xlarge",
                      }),
                    }),
                  De &&
                    (0, e.jsxs)("div", {
                      className: (0, K.A)(
                        Ie.ImgPreviewContainer,
                        Ie.DuplicatePreview,
                      ),
                      children: [
                        (0, e.jsx)("div", {
                          className: Ie.ImageLabel,
                          children: (0, Se.we)(
                            "#StoreAdmin_ExtraAssetUpload_Original",
                          ),
                        }),
                        (0, e.jsx)("img", {
                          src:
                            "name" in De
                              ? (0, fe.FZ)(De, ne.Bhc, Te)
                              : (0, I.cn)((0, fe.ar)(De, !1)?.url, Te),
                          className: Ie.ImgPreview,
                        }),
                      ],
                    }),
                  (0, e.jsxs)("div", {
                    className: Ie.ImgPreviewContainer,
                    children: [
                      De &&
                        (0, e.jsx)("div", {
                          className: Ie.ImageLabel,
                          children: (0, Se.we)(
                            "#StoreAdmin_ExtraAssetUpload_Replacement",
                          ),
                        }),
                      !le &&
                        (0, e.jsx)("img", {
                          src: ze,
                          className: Ie.ImgPreview,
                        }),
                      le &&
                        (0, e.jsx)("video", {
                          src: ze,
                          className: Ie.ImgPreview,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          autoPlay: !0,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function z(de) {
          const { name: Ce, setName: le, validatedName: De, disabled: ge } = de,
            Ue = B.useCallback((ze) => ze && ze.element.select(), []);
          return (0, e.jsx)("div", {
            children: (0, e.jsx)(Z.pd, {
              value: Ce,
              onChange: (ze) => le(ze.currentTarget.value),
              label: (0, Se.we)("#StoreAdmin_ExtraAssetUpload_EnterAName"),
              ref: Ue,
              disabled: ge,
              description: (0, Se.PP)(
                "#StoreAdmin_ExtraAssetUpload_WillBeSavedAsFilename",
                (0, e.jsx)("b", { children: De }),
              ),
            }),
          });
        }
        function G(de) {
          return de && de.length > 0;
        }
        function O(de) {
          switch (de.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            case "image/webp":
              return "webp";
            case "video/mp4":
              return "mp4";
            case "video/webm":
              return "webm";
            default:
              return;
          }
        }
        function L(de) {
          return de.type.startsWith("video/");
        }
        function Ee(de, Ce, le) {
          return de?.length == 1 ? de[0] : Ce != ne.xPp ? Ce : le;
        }
        var T = i(17616),
          N = i(67705);
        function F(de) {
          const { children: Ce } = de,
            [le, De] = B.useState([]),
            ge = B.useRef(0),
            Ue = B.useCallback(
              (ze) => (
                De((Te) => [...Te, { upload: ze, id: ge.current++ }]),
                () => De((Te) => Te.filter((ye) => ye.upload != ze))
              ),
              [],
            );
          return (0, e.jsx)(Q, {
            queueExtraAssetUpload: Ue,
            children: (0, e.jsx)(_e, {
              children: (0, e.jsxs)(T.jy, {
                children: [(0, e.jsx)(S, { rgUploads: le }), Ce],
              }),
            }),
          });
        }
        function Q(de) {
          const { children: Ce, queueExtraAssetUpload: le } = de,
            [De, ge] = B.useState(void 0),
            [Ue, ze] = B.useState([]),
            [Te, ye] = B.useState(!1);
          B.useEffect(() => {
            let ue = (0, N.Tc)("rgGamePageConfig", "application_config");
            ue ||
              (console.error(
                "Missing config data for game edit page - some components may not work",
              ),
              (ue = {
                rgExtraAssetsData: {
                  rgExtraAssets: [],
                  rgInvalidFilenameCharacters: [],
                },
                strGameControllerURLFormat: "",
                bAppHasSteamChinaToolsEnabled: !1,
              })),
              ge(ue),
              ze(ue.rgExtraAssetsData.rgExtraAssets),
              ye(ue.bAppHasSteamChinaToolsEnabled);
          }, []);
          const Ae = B.useMemo(() => {
              if (De)
                return (
                  De.rgExtraAssetsData.rgInvalidFilenameCharacters.forEach(
                    (ue) =>
                      (0, a.wT)(
                        ue.length == 1,
                        `Expected single-character replacements, "${ue} is not`,
                      ),
                  ),
                  new RegExp(
                    `[${De.rgExtraAssetsData.rgInvalidFilenameCharacters.map((ue) => `\\${ue}`)}]`,
                    "g",
                  )
                );
            }, [De]),
            Me = B.useMemo(
              () => ({
                rgExtraAssetsData: {
                  rgExtraAssets: Ue,
                  regexInvalidFilenameCharacters: Ae,
                },
                strGameControllerURLFormat: De?.strGameControllerURLFormat,
                queueExtraAssetUpload: le,
                onExtraAssetsUpdated: ze,
                storeItemID: De?.nStoreItemID,
                eStoreItemType: De?.eStoreItemType,
                bAppHasSteamChinaToolsEnabled: Te,
              }),
              [De, Ue, Ae, le, Te],
            );
          return De ? (0, e.jsx)(H, { value: Me, children: Ce }) : null;
        }
        function b(de = !1) {
          const Ce = B.useContext(H).rgExtraAssetsData.rgExtraAssets;
          return B.useMemo(() => (de ? [...Ce].reverse() : Ce), [Ce, de]);
        }
        function A() {
          return B.useContext(H).rgExtraAssetsData;
        }
        function w(de) {
          return B.useContext(H).strGameControllerURLFormat.replace(
            ":method:",
            de,
          );
        }
        function U() {
          const de = React.useContext(H);
          return { type: de.eStoreItemType, id: de.storeItemID };
        }
        function J() {
          return B.useContext(H).queueExtraAssetUpload;
        }
        function ce() {
          return B.useContext(H).onExtraAssetsUpdated;
        }
        function Pe() {
          const de = B.useContext(H),
            Ce = B.useMemo(
              () =>
                de.bAppHasSteamChinaToolsEnabled
                  ? [p.TU.k_ESteamRealmGlobal, p.TU.k_ESteamRealmChina]
                  : [p.TU.k_ESteamRealmGlobal],
              [de.bAppHasSteamChinaToolsEnabled],
            );
          return {
            bAppHasSteamChinaToolsEnabled: de.bAppHasSteamChinaToolsEnabled,
            rgRealmList: Ce,
          };
        }
        function ve() {
          return B.useContext(ie).bUseRichEditor;
        }
        function Le() {
          return B.useContext(ie).setUseRichEditor;
        }
        const H = B.createContext(void 0),
          ie = B.createContext(void 0);
        function _e(de) {
          const Ce = "storeEditorDisableRichEditor",
            [le, De] = B.useState(() => !localStorage.getItem(Ce)),
            ge = B.useCallback((ze) => {
              ze ? localStorage.removeItem(Ce) : localStorage.setItem(Ce, "1"),
                De(ze);
            }, []),
            Ue = B.useMemo(
              () => ({ bUseRichEditor: le, setUseRichEditor: ge }),
              [le, ge],
            );
          return (0, e.jsx)(ie.Provider, { value: Ue, children: de.children });
        }
      },
      39795: (te, Ge, i) => {
        "use strict";
        i.r(Ge), i.d(Ge, { default: () => Uc });
        var e = i(7850),
          p = i(90626),
          a = i(18210),
          fe = i(93763),
          B = i(36118),
          Z = i(17479),
          D = i(36707),
          R = i(249),
          re = i(53906),
          oe = i(71421),
          K = i(3166);
        function Se(s) {
          const t = s.strSecondaryCategory
              ? `${K.TS.STORE_BASE_URL}search/?controllersupport=${s.strCategory}%2C${s.strSecondaryCategory}`
              : `${K.TS.STORE_BASE_URL}search/?controllersupport=${s.strCategory}`,
            n = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: (0, D.A)(
                    Z.ImgSection,
                    s.bHightlightRow && Z.HighlightRow,
                    s.bHighlightGPRequired && Z.GamepadRequired,
                  ),
                  children: s.tagImage,
                }),
                (0, e.jsxs)("div", {
                  className: (0, D.A)(
                    Z.LocSection,
                    s.bHighlightText && Z.HighlightText,
                    s.bHightlightRow && Z.HighlightRow,
                    s.bHighlightGPRequired && Z.GamepadRequired,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, D.A)(
                        Z.LocString,
                        s.bHighlightText && Z.HighlightText,
                        s.bHightlightRow && Z.HighlightRow,
                        s.bHighlightGPRequired && Z.GamepadRequired,
                        s.bPersonalized && Z.Personalized,
                      ),
                      children: (0, a.we)(s.strLocalizationToken),
                    }),
                    s.strTooltipString &&
                      (0, e.jsx)(oe.he, {
                        toolTipContent: (0, a.we)(s.strTooltipString),
                        className: Z.ToolTipContainer,
                        children: (0, e.jsx)("span", {
                          className: Z.ToolTipControl,
                          children: "?",
                        }),
                      }),
                  ],
                }),
              ],
            });
          return s.strCategory
            ? (0, e.jsx)("a", { href: t, className: Z.InfoRow, children: n })
            : (0, e.jsx)("div", { className: Z.InfoRow, children: n });
        }
        function Ie(s) {
          return (0, e.jsx)("div", {
            className: Z.PreviewContainer,
            children: (0, e.jsx)(I, { bPreview: !0, ...s }),
          });
        }
        function Re(s) {
          return jsx(Fragment, {
            children:
              (s.bPartialXboxControllerSupport ||
                s.bFullXboxControllerSupport) &&
              jsx("div", {
                className: styles.StoreSidebarContainer,
                children: jsx(I, { ...s }),
              }),
          });
        }
        function Ye() {
          return (0, e.jsx)(Se, {
            tagImage: (0, e.jsx)(R.Moo, {
              className: (0, D.A)(Z.Tilt, Z.SmallerSVG),
              role: "presentation",
            }),
            strLocalizationToken: "#Store_ControllerSupport_GamepadRequired",
            bHighlightGPRequired: !0,
            strTooltipString:
              "#Store_ControllerSupport_Tooltip_ControllerRequired",
          });
        }
        function ne() {
          return (0, e.jsxs)("div", {
            className: (0, D.A)(Z.PurchaseNoticeContainer),
            children: [
              (0, e.jsx)(R.Kz1, {
                className: (0, D.A)(Z.PurchaseNoticeImage),
                role: "presentation",
              }),
              (0, e.jsx)("div", {
                className: (0, D.A)(Z.PurchaseNoticeLabel),
                children: (0, a.we)(
                  "#Store_ControllerSupport_GamepadPreferred",
                ),
              }),
            ],
          });
        }
        function pe(s) {
          const { bNoKeyboardSupport: t, bGamepadPreferred: n } = s;
          return (0, e.jsxs)("div", {
            className: (0, D.A)(Z.NoticeContainer),
            children: [t && (0, e.jsx)(Ye, {}), n && !t && (0, e.jsx)(ne, {})],
          });
        }
        function I(s) {
          const {
            bControllerSupportWizardComplete: t,
            bPS4ControllerSupport: n,
            bPS5ControllerSupport: r,
            bPS4ControllerBTSupport: o,
            bPS5ControllerBTSupport: l,
            bFullXboxControllerSupport: c,
            bPartialXboxControllerSupport: d,
            bSteamInputAPISupport: m,
            bHasOther: x,
            bHasPS4: f,
            bHasPS5: h,
            bHasXbox: C,
            bPreview: E,
          } = s;
          let X = [];
          if (n && r && o && l) {
            const xe = (0, e.jsx)(R.pcV, {
                className: Z.SmallerSVG,
                controllerType: re._X,
                partial: !c,
                role: "presentation",
              }),
              q = f || h;
            X.push(
              (0, e.jsx)(
                Se,
                {
                  tagImage: xe,
                  strLocalizationToken: q
                    ? "#Store_ControllerSupport_PS_Personalized"
                    : "#Store_ControllerSupport_PS",
                  bPersonalized: q,
                  strCategory: "55",
                  strSecondaryCategory: "57",
                },
                "1",
              ),
            );
          } else {
            if (n) {
              const xe = (0, e.jsx)(R.pcV, {
                className: Z.SmallerSVG,
                controllerType: re._X,
                partial: !c,
                role: "presentation",
              });
              o
                ? X.push(
                    (0, e.jsx)(
                      Se,
                      {
                        tagImage: xe,
                        strLocalizationToken: f
                          ? "#Store_ControllerSupport_PS4_Personalized"
                          : "#Store_ControllerSupport_PS4",
                        bPersonalized: f,
                        strCategory: "55",
                      },
                      "2",
                    ),
                  )
                : X.push(
                    (0, e.jsx)(
                      Se,
                      {
                        tagImage: xe,
                        strLocalizationToken: f
                          ? "#Store_ControllerSupport_PS4_USB_Personalized"
                          : "#Store_ControllerSupport_PS4_USB",
                        bPersonalized: f,
                        strCategory: "55",
                      },
                      "3",
                    ),
                  );
            }
            if (r) {
              const xe = (0, e.jsx)(R.pcV, {
                className: Z.SmallerSVG,
                controllerType: re.HD,
                partial: !c,
                role: "presentation",
              });
              l
                ? X.push(
                    (0, e.jsx)(
                      Se,
                      {
                        tagImage: xe,
                        strLocalizationToken: h
                          ? "#Store_ControllerSupport_PS5_Personalized"
                          : "#Store_ControllerSupport_PS5",
                        bPersonalized: h,
                        strCategory: "57",
                      },
                      "4",
                    ),
                  )
                : X.push(
                    (0, e.jsx)(
                      Se,
                      {
                        tagImage: xe,
                        strLocalizationToken: h
                          ? "#Store_ControllerSupport_PS5_USB_Personalized"
                          : "#Store_ControllerSupport_PS5_USB",
                        bPersonalized: h,
                        strCategory: "57",
                      },
                      "5",
                    ),
                  );
            }
          }
          return (0, e.jsx)(e.Fragment, {
            children:
              (d || c) &&
              (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: Z.ControllerSupportLevelString,
                    children: (0, a.we)(
                      c
                        ? "#Store_ControllerSupport_FullController"
                        : "#Store_ControllerSupport_PartialController",
                    ),
                  }),
                  (0, e.jsx)(Se, {
                    tagImage: (0, e.jsx)(R.pcV, {
                      className: Z.SmallerSVG,
                      controllerType: re.Oh,
                      partial: !c,
                      role: "presentation",
                    }),
                    strLocalizationToken: C
                      ? "#Store_ControllerSupport_Xbox_Personalized"
                      : "#Store_ControllerSupport_Xbox",
                    bPersonalized: C,
                    strCategory: "18",
                  }),
                  X,
                  m &&
                    (0, e.jsx)(Se, {
                      tagImage: (0, e.jsx)(R.kdM, {
                        className: Z.BiggerSVG,
                        bGreyOutRightSide: !c,
                        role: "presentation",
                      }),
                      strLocalizationToken: "#Store_ControllerSupport_SIAPI",
                      strTooltipString:
                        "#Store_ControllerSupport_Tooltip_SIAPI",
                      strCategory: "59",
                    }),
                  ((!E && !t) || (!m && x && !C)) &&
                    (0, e.jsx)(Se, {
                      tagImage: (0, e.jsx)(R.vet, {
                        className: Z.BiggerSVG,
                        role: "presentation",
                      }),
                      strLocalizationToken:
                        x || f || h
                          ? "#Store_ControllerSupport_Unknown_Personalized"
                          : "#Store_ControllerSupport_Unknown",
                      bPersonalized: x || f || h,
                    }),
                  (0, e.jsx)(pe, { ...s }),
                ],
              }),
          });
        }
        const ae = null;
        var S = i(58534),
          P = i(2801),
          k = i(31623);
        function v(s, t) {
          const n = document.getElementById(s);
          n && n.setAttribute("value", t ? "true" : "");
        }
        async function z(s) {
          v("gamepadsupport_input_1", s.bPartialXboxControllerSupport),
            v("gamepadsupport_input_2", s.bFullXboxControllerSupport),
            v("controllersupport_input_3", s.bPS4ControllerSupport),
            v("controllersupport_input_4", s.bPS4ControllerBTSupport),
            v("controllersupport_input_5", s.bPS5ControllerSupport),
            v("controllersupport_input_6", s.bPS5ControllerBTSupport),
            v("controllersupport_input_7", s.bSteamInputAPISupport),
            v("controllersupport_input_8", s.bNoKeyboardSupport),
            v("controllersupport_input_8_input", s.bNoKeyboardSupport),
            v("controllersupport_input_9", s.bGamepadPreferred),
            v("controllersupport_input_10", !0);
          const t = document.getElementById("submitBtn");
          t && t.click();
        }
        var G = ((s) => (
          (s[(s.k_eMouseKBOnly = 0)] = "k_eMouseKBOnly"),
          (s[(s.k_eGamepadAndMouse = 1)] = "k_eGamepadAndMouse"),
          (s[(s.k_eGamepadPreferred = 2)] = "k_eGamepadPreferred"),
          (s[(s.k_eGamepadRequired = 3)] = "k_eGamepadRequired"),
          s
        ))(G || {});
        function O(s) {
          const {
              nPageNum: t,
              currentValues: n,
              setCurrentValues: r,
              setSkipToEnd: o,
            } = s,
            l = [
              {
                id: 0,
                locString: "#ControllerSupportModal_PgOne_MouseKBOnly",
                settings: {
                  bFullXboxControllerSupport: !1,
                  bPartialXboxControllerSupport: !1,
                  bPS4ControllerSupport: !1,
                  bPS4ControllerBTSupport: !1,
                  bPS5ControllerSupport: !1,
                  bPS5ControllerBTSupport: !1,
                  bSteamInputAPISupport: !1,
                  bNoKeyboardSupport: !1,
                  bGamepadPreferred: !1,
                },
                bSkipToEnd: !0,
              },
              {
                id: 1,
                locString: "#ControllerSupportModal_PgOne_GamepadAndMouse",
                settings: {
                  bFullXboxControllerSupport: !0,
                  bPartialXboxControllerSupport: !1,
                  bNoKeyboardSupport: !1,
                  bGamepadPreferred: !1,
                },
              },
              {
                id: 2,
                locString: "#ControllerSupportModal_PgOne_GamepadPreferred",
                settings: {
                  bFullXboxControllerSupport: !0,
                  bPartialXboxControllerSupport: !1,
                  bNoKeyboardSupport: !1,
                  bGamepadPreferred: !0,
                },
              },
              {
                id: 3,
                locString: "#ControllerSupportModal_PgOne_GamepadRequired",
                settings: {
                  bFullXboxControllerSupport: !0,
                  bPartialXboxControllerSupport: !1,
                  bNoKeyboardSupport: !0,
                  bGamepadPreferred: !1,
                },
              },
            ],
            c = () =>
              n.bNoKeyboardSupport
                ? 3
                : n.bGamepadPreferred
                  ? 2
                  : n.bFullXboxControllerSupport ||
                      n.bPartialXboxControllerSupport
                    ? 1
                    : 0,
            d = c(),
            m = (h) => {
              const C = l.find((E) => E.id == h);
              r({ ...n, ...C?.settings }), o(C.bSkipToEnd ?? !1);
            };
          p.useEffect(() => {
            d == 0 && o(!0);
          }, [d, o]);
          const x = (0, e.jsx)("div", {
              children: (0, e.jsx)(S.zW, {
                labelId: null,
                value: c(),
                onChange: m,
                children: l.map((h) =>
                  (0, e.jsxs)(
                    S.a,
                    {
                      value: h.id,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, D.A)(
                            k.RadioButton,
                            d == h.id && k.Selected,
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: k.OptionLabel,
                          children: (0, a.we)(h.locString),
                        }),
                      ],
                    },
                    h.id,
                  ),
                ),
              }),
            }),
            f = (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#ControllerSupportModal_PgOne_Instructions",
                  ),
                }),
                (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#ControllerSupportModal_PgOne_Instructions_VR",
                  ),
                }),
              ],
            });
          return (0, e.jsx)(J, {
            strStepName: (0, a.we)("#ControllerSupportModal_StepString", t + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgOne_Header",
            strInstructionsToken: f,
            strQuestionToken: "#ControllerSupportModal_PgOne_Question",
            leftColumnContent: x,
          });
        }
        var L = ((s) => (
          (s[(s.k_eFullXboxControllerSupport = 0)] =
            "k_eFullXboxControllerSupport"),
          (s[(s.k_ePartialXboxControllerSupport = 1)] =
            "k_ePartialXboxControllerSupport"),
          s
        ))(L || {});
        function Ee(s) {
          const {
              nPageNum: t,
              currentValues: n,
              setCurrentValues: r,
              setSkipToEnd: o,
            } = s,
            l = p.useMemo(
              () => [
                {
                  id: 0,
                  locString: "#ControllerSupportModal_PgTwo_FullController",
                  settings: {
                    bFullXboxControllerSupport: !0,
                    bPartialXboxControllerSupport: !1,
                  },
                  bSkipToEnd: !1,
                },
                {
                  id: 1,
                  locString: "#ControllerSupportModal_PgTwo_PartialController",
                  settings: {
                    bFullXboxControllerSupport: !1,
                    bPartialXboxControllerSupport: !0,
                  },
                },
              ],
              [],
            ),
            c = p.useCallback(
              () => (n.bFullXboxControllerSupport ? 0 : 1),
              [n],
            ),
            d = p.useCallback(
              (h) => {
                const C = l.find((E) => E.id == h);
                r({ ...n, ...C?.settings }), o(C.bSkipToEnd ?? !1);
              },
              [n, l, r, o],
            ),
            m = c(),
            x = (0, e.jsx)("div", {
              children: (0, e.jsx)(S.zW, {
                labelId: null,
                value: c(),
                onChange: d,
                children: l.map((h) =>
                  (0, e.jsxs)(
                    S.a,
                    {
                      value: h.id,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, D.A)(
                            k.RadioButton,
                            m == h.id && k.Selected,
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: k.OptionLabel,
                          children: (0, a.we)(h.locString),
                        }),
                      ],
                    },
                    h.id,
                  ),
                ),
              }),
            }),
            f = (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#ControllerSupportModal_PgTwo_Instructions",
                  ),
                }),
                (0, e.jsxs)("ol", {
                  children: [
                    (0, e.jsx)("li", {
                      children: (0, a.we)(
                        "#ControllerSupportModal_PgTwo_Instructions_pt1",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, a.we)(
                        "#ControllerSupportModal_PgThree_Instructions_pt1",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, a.we)(
                        "#ControllerSupportModal_PgTwo_Instructions_pt4",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, a.we)(
                        "#ControllerSupportModal_PgTwo_Instructions_pt5",
                      ),
                    }),
                  ],
                }),
              ],
            });
          return (0, e.jsx)(J, {
            stepIMG: (0, e.jsx)(R.xIk, { type: "xbox" }),
            strStepName: (0, a.we)("#ControllerSupportModal_StepString", t + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgTwo_Header",
            strInstructionsToken: f,
            strQuestionToken: "#ControllerSupportModal_PgTwo_Question",
            leftColumnContent: x,
          });
        }
        function T(s) {
          const { nPageNum: t, currentValues: n, setCurrentValues: r } = s,
            o = [
              {
                id: 0,
                locString: "#ControllerSupportModal_PgThree_Ps4",
                settings: { bPS4ControllerSupport: !0 },
                invertedSettings: {
                  bPS4ControllerSupport: !1,
                  bPS4ControllerBTSupport: !1,
                },
                bValue: n.bPS4ControllerSupport,
              },
              {
                id: 1,
                locString: "#ControllerSupportModal_PgThree_Ps4BT",
                settings: {
                  bPS4ControllerBTSupport: !0,
                  bPS4ControllerSupport: !0,
                },
                invertedSettings: { bPS4ControllerBTSupport: !1 },
                bValue: n.bPS4ControllerBTSupport,
              },
              {
                id: 2,
                locString: "#ControllerSupportModal_PgThree_Ps5",
                settings: { bPS5ControllerSupport: !0 },
                invertedSettings: {
                  bPS5ControllerSupport: !1,
                  bPS5ControllerBTSupport: !1,
                },
                bValue: n.bPS5ControllerSupport,
              },
              {
                id: 3,
                locString: "#ControllerSupportModal_PgThree_Ps5BT",
                settings: {
                  bPS5ControllerBTSupport: !0,
                  bPS5ControllerSupport: !0,
                },
                invertedSettings: { bPS5ControllerBTSupport: !1 },
                bValue: n.bPS5ControllerBTSupport,
              },
              {
                id: 4,
                locString: "#ControllerSupportModal_PgThree_None",
                settings: {
                  bPS4ControllerSupport: !1,
                  bPS4ControllerBTSupport: !1,
                  bPS5ControllerSupport: !1,
                  bPS5ControllerBTSupport: !1,
                },
                invertedSettings: { bPS4ControllerSupport: !0 },
                bValue:
                  !n.bPS4ControllerSupport &&
                  !n.bPS4ControllerBTSupport &&
                  !n.bPS5ControllerSupport &&
                  !n.bPS5ControllerBTSupport,
              },
            ],
            l = (m) => {
              r({ ...n, ...m });
            },
            c = (0, e.jsx)("div", {
              children: o.map((m) =>
                (0, e.jsx)(
                  S.Yh,
                  {
                    checked: m.bValue,
                    onChange: (x) => l(x ? m.settings : m.invertedSettings),
                    label: (0, a.we)(m.locString),
                  },
                  m.id,
                ),
              ),
            }),
            d = (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#ControllerSupportModal_PgThree_Instructions",
                  ),
                }),
                (0, e.jsx)("ol", {
                  children: (0, e.jsx)("li", {
                    children: (0, a.we)(
                      "#ControllerSupportModal_PgThree_Instructions_pt1",
                    ),
                  }),
                }),
                (0, e.jsx)("p", {
                  children: (0, a.oW)(
                    "#ControllerSupportModal_PgThree_Instructions_note",
                    (0, e.jsx)("span", { style: { fontWeight: "bold" } }),
                  ),
                }),
              ],
            });
          return (0, e.jsx)(J, {
            stepIMG: (0, e.jsx)(R.xIk, { type: "ps4" }),
            strStepName: (0, a.we)("#ControllerSupportModal_StepString", t + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgThree_Header",
            strInstructionsToken: d,
            strQuestionToken: "#ControllerSupportModal_PgThree_Question",
            leftColumnContent: c,
          });
        }
        var N = ((s) => (
          (s[(s.k_eSteamInputAPISupport = 0)] = "k_eSteamInputAPISupport"),
          (s[(s.k_eNoSteamInputAPISupport = 1)] = "k_eNoSteamInputAPISupport"),
          s
        ))(N || {});
        function F(s) {
          const {
              nPageNum: t,
              currentValues: n,
              setCurrentValues: r,
              setSkipToEnd: o,
            } = s,
            l = [
              {
                id: 0,
                locString: "#ControllerSupportModal_PgFour_SIAPI",
                settings: { bSteamInputAPISupport: !0 },
                bSkipToEnd: !1,
              },
              {
                id: 1,
                locString: "#ControllerSupportModal_PgFour_NoSIAPI",
                settings: { bSteamInputAPISupport: !1 },
                bSkipToEnd: !1,
              },
            ],
            c = () => (n.bSteamInputAPISupport ? 0 : 1),
            d = (h) => {
              const C = l.find((E) => E.id == h);
              r({ ...n, ...C?.settings }), o(C.bSkipToEnd ?? !1);
            },
            m = c(),
            x = (0, e.jsx)("div", {
              children: (0, e.jsx)(S.zW, {
                labelId: null,
                value: m,
                onChange: d,
                classNames: k.RadioGroup,
                children: l.map((h) =>
                  (0, e.jsxs)(
                    S.a,
                    {
                      value: h.id,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, D.A)(
                            k.RadioButton,
                            m == h.id && k.Selected,
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: k.OptionLabel,
                          children: (0, a.we)(h.locString),
                        }),
                      ],
                    },
                    h.id,
                  ),
                ),
              }),
            }),
            f = (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#ControllerSupportModal_PgFour_Instructions",
                  ),
                }),
                (0, e.jsxs)("ol", {
                  children: [
                    (0, e.jsx)("li", {
                      children: (0, a.we)(
                        "#ControllerSupportModal_PgFour_Instructions_pt1",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, a.we)(
                        "#ControllerSupportModal_PgFour_Instructions_pt2",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, a.we)(
                        "#ControllerSupportModal_PgFour_Instructions_pt3",
                      ),
                    }),
                  ],
                }),
                (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#ControllerSupportModal_PgFour_Instructions_note",
                  ),
                }),
              ],
            });
          return (0, e.jsx)(J, {
            strStepName: (0, a.we)("#ControllerSupportModal_StepString", t + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgFour_Header",
            strInstructionsToken: f,
            strQuestionToken: "#ControllerSupportModal_PgFour_Question",
            leftColumnContent: x,
          });
        }
        function Q(s) {
          const { currentValues: t } = s,
            n = (0, e.jsx)("div", {
              children:
                (t.bFullXboxControllerSupport ||
                  t.bPartialXboxControllerSupport) &&
                (0, e.jsx)(Ie, { ...s.currentValues }),
            }),
            r =
              t.bFullXboxControllerSupport || t.bPartialXboxControllerSupport
                ? "#ControllerSupportModal_PgFive_Question"
                : "#ControllerSupportModal_PgFive_QuestionNoController";
          return (0, e.jsx)(J, {
            strStepName: (0, a.we)("#ControllerSupportModal_StepString", 5),
            strStepSubHeaderToken: "#ControllerSupportModal_PgFive_Header",
            strInstructionsToken: void 0,
            strQuestionToken: r,
            leftColumnContent: n,
          });
        }
        function b(s) {
          const { appid: t, onClose: n, onCommit: r, params: o } = s,
            [l, c] = p.useState(o),
            [d, m] = p.useState(o),
            [x, f] = p.useState(!1),
            h = 5,
            [C, E] = p.useState(0),
            X = p.useCallback(() => {
              z(d), r(!1);
            }, [r, d]),
            xe = () => {
              m(l);
              let We = C - 1;
              x && C == 4 && (We = 0), E(We);
            },
            q = () => {
              c(d), E(x ? h - 1 : C + 1);
            };
          let V;
          switch (C) {
            default:
            case 0: {
              V = (0, e.jsx)(O, {
                nPageNum: C,
                currentValues: d,
                setCurrentValues: m,
                setSkipToEnd: f,
              });
              break;
            }
            case 1:
              V = (0, e.jsx)(Ee, {
                nPageNum: C,
                currentValues: d,
                setCurrentValues: m,
                setSkipToEnd: f,
              });
              break;
            case 2:
              V = (0, e.jsx)(T, {
                nPageNum: C,
                currentValues: d,
                setCurrentValues: m,
                setSkipToEnd: f,
              });
              break;
            case 3:
              V = (0, e.jsx)(F, {
                nPageNum: C,
                currentValues: d,
                setCurrentValues: m,
                setSkipToEnd: f,
              });
              break;
            case 4:
              V = (0, e.jsx)(Q, { currentValues: d });
              break;
          }
          const $e = (0, e.jsx)(U, {
              nPageIdx: C,
              nPages: h,
              strHeaderText: (0, a.we)("#ControllerSupportModal_Title"),
            }),
            Ne = C == h - 1;
          return (0, e.jsx)(A.Provider, {
            value: d,
            children: (0, e.jsx)(ce, {
              fnNext: Ne ? () => X() : q,
              fnBack: C > 0 ? xe : n,
              header: $e,
              strOkButtonLabel: Ne ? "Save and Exit" : "Next",
              children: V,
            }),
          });
        }
        const A = p.createContext(null);
        function w() {
          return React.useContext(A);
        }
        function U(s) {
          const { nPages: t, nPageIdx: n, strHeaderText: r } = s,
            o = (100 * (n + 1)) / (t + 1);
          return (0, e.jsxs)("div", {
            className: (0, D.A)(k.ModalHeader),
            children: [
              !1,
              (0, e.jsx)("div", {
                className: k.WizardTitle,
                children: (0, a.we)(r),
              }),
              (0, e.jsx)("div", {
                className: (0, D.A)(
                  k.ProgressBar,
                  n == t - 1 && k.ProgressBarComplete,
                ),
                children:
                  n < t - 1 &&
                  (0, e.jsx)("div", {
                    className: (0, D.A)(k.ProgressBarFillComponent),
                    style: { width: o + "%" },
                  }),
              }),
            ],
          });
        }
        const J = p.memo(function (t) {
          const {
            strStepName: n,
            strStepSubHeaderToken: r,
            stepIMG: o,
            strInstructionsToken: l,
            strQuestionToken: c,
            leftColumnContent: d,
            rightColumnContent: m,
          } = t;
          return (0, e.jsxs)("div", {
            className: k.WizardContainer,
            children: [
              (0, e.jsxs)("div", {
                className: k.StepRow,
                children: [
                  o &&
                    (0, e.jsxs)("div", {
                      className: k.StepImgContainer,
                      children: [" ", o, " "],
                    }),
                  (0, e.jsxs)("div", {
                    className: k.StepLabel,
                    children: [n, (0, e.jsx)(S.iK, { children: (0, a.we)(r) })],
                  }),
                ],
              }),
              l &&
                (0, e.jsx)("div", {
                  className: k.StepInstruction,
                  children: l,
                }),
              (0, e.jsx)("div", {
                className: k.ControlsQuestion,
                children: (0, a.oW)(
                  c,
                  (0, e.jsx)("span", { style: { fontWeight: "bold" } }),
                ),
              }),
              (0, e.jsxs)(S.dR, {
                children: [
                  (0, e.jsx)(S.VP, { children: d }),
                  (0, e.jsx)(S.VP, { children: m }),
                ],
              }),
            ],
          });
        });
        function ce(s) {
          const {
            fnNext: t,
            fnBack: n,
            children: r,
            header: o,
            strOkButtonLabel: l,
          } = s;
          return (0, e.jsxs)(P.mt, {
            active: !0,
            className: k.ControllerWizardModal,
            children: [
              o,
              (0, e.jsx)(S.nB, { className: k.WizardBody, children: r }),
              (0, e.jsx)(S.CB, {
                className: k.WizardButtons,
                bCancelDisabled: !n,
                onCancel: n,
                strCancelText: "Back",
                onOK: t,
                strOKText: l,
              }),
            ],
          });
        }
        function Pe(s) {
          const { unAppID: t } = s,
            [n, r] = p.useState(!1),
            o = p.useCallback(() => r(!0), []),
            l = p.useCallback(() => r(!1), []),
            c =
              s.bControllerSupportWizardComplete &&
              (s.bFullXboxControllerSupport || s.bPartialXboxControllerSupport);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              n &&
                (0, e.jsx)(b, { appid: t, onClose: l, onCommit: l, params: s }),
              (0, e.jsxs)(S.nB, {
                children: [
                  (0, e.jsx)("div", {
                    className: fe.DescText,
                    children: (0, a.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_Desc",
                    ),
                  }),
                  s.bControllerSupportWizardComplete &&
                    (0, e.jsx)("div", {
                      className: fe.DescText,
                      children: (0, a.we)(
                        "#App_Landing_ControllerSupport_WizardPrompt_CustomerView",
                      ),
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, D.A)(fe.ReleaseDateInfoCtn),
                children: [
                  (0, e.jsxs)("div", {
                    className: fe.ReleaseDateContent,
                    children: [
                      !s.bControllerSupportWizardComplete &&
                        (0, e.jsx)(ve, { onClick: o }),
                      s.bControllerSupportWizardComplete &&
                        !c &&
                        (0, e.jsx)(Le, { onClick: o }),
                      s.bControllerSupportWizardComplete &&
                        c &&
                        (0, e.jsx)(Ie, { ...s }),
                    ],
                  }),
                  s.bControllerSupportWizardComplete &&
                    c &&
                    (0, e.jsxs)("div", {
                      className: fe.EditButton,
                      onClick: o,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, D.A)(fe.Spacer, fe.Top),
                        }),
                        (0, e.jsx)("div", {
                          className: fe.EditButtonIcon,
                          children: (0, e.jsx)(B.ffu, {}),
                        }),
                        (0, e.jsx)("div", {
                          className: (0, D.A)(fe.Spacer, fe.Bottom),
                        }),
                      ],
                    }),
                ],
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("div", {
                className: fe.DescText,
                children: (0, a.we)(
                  "#App_Landing_ControllerSupport_WizardPrompt_Upcoming",
                ),
              }),
            ],
          });
        }
        function ve(s) {
          return (0, e.jsx)("div", {
            children: (0, e.jsxs)(S.nB, {
              children: [
                (0, e.jsx)(S.a3, {
                  children: (0, e.jsx)("div", {
                    className: fe.StatusText,
                    children: (0, a.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_StatusNotStarted",
                    ),
                  }),
                }),
                (0, e.jsxs)(S.jn, {
                  className: fe.StartWizardButton,
                  onClick: s.onClick,
                  children: [
                    " ",
                    (0, a.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_EditButton",
                    ),
                    " ",
                  ],
                }),
              ],
            }),
          });
        }
        function Le(s) {
          return (0, e.jsx)("div", {
            children: (0, e.jsxs)(S.nB, {
              children: [
                (0, e.jsx)(S.a3, {
                  children: (0, e.jsx)("div", {
                    className: fe.StatusText,
                    children: (0, a.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_StatusNoController",
                    ),
                  }),
                }),
                (0, e.jsxs)(S.$n, {
                  className: fe.StartWizardButton,
                  onClick: s.onClick,
                  children: [
                    " ",
                    (0, a.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_EditButton",
                    ),
                    " ",
                  ],
                }),
              ],
            }),
          });
        }
        var H = i(17616),
          ie = i(50660),
          _e = i(64868),
          de = i(18938),
          Ce = i(97982);
        function le(s) {
          const { language: t, rctToolbarControls: n, mapValues: r } = s,
            o = r.get(t),
            l = p.createRef();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(De, {
                refTextArea: l,
                value: o,
                rctToolbarControls: n,
              }),
              (0, e.jsx)(Ue, { language: t, value: o, refTextArea: l }),
            ],
          });
        }
        function De(s) {
          const { refTextArea: t, value: n, rctToolbarControls: r } = s,
            o = p.useCallback(
              (c, d) => {
                ze(t.current, n, c, d);
              },
              [t, n],
            ),
            l = p.useCallback(
              (c, d) => {
                ze(t.current, n, c, d, (m) =>
                  m.replace(
                    /(\r\n|\n|\r)/gm,
                    `\r
[*]`,
                  ),
                );
              },
              [t, n],
            );
          return (0, e.jsxs)(ie.Ez, {
            children: [
              (0, e.jsx)(ge, {
                fnInsertText: o,
                tooltip: (0, a.we)("#FormattingToolbar_Bold"),
                start: "[b]",
                end: "[/b]",
                children: (0, e.jsx)(R.l4n, {}),
              }),
              (0, e.jsx)(ge, {
                fnInsertText: o,
                tooltip: (0, a.we)("#FormattingToolbar_Italic"),
                start: "[i]",
                end: "[/i]",
                children: (0, e.jsx)(R.UKJ, {}),
              }),
              (0, e.jsx)(ge, {
                fnInsertText: o,
                tooltip: (0, a.we)("#FormattingToolbar_Underline"),
                start: "[u]",
                end: "[/u]",
                children: (0, e.jsx)(R.Gj3, {}),
              }),
              (0, e.jsx)(ie.XQ, {}),
              (0, e.jsx)(ge, {
                fnInsertText: l,
                tooltip: (0, a.we)("#FormattingToolbar_BulletedList"),
                start: "[list][*]",
                end: "[/list]",
                children: (0, e.jsx)(R.JPq, {}),
              }),
              (0, e.jsx)(ge, {
                fnInsertText: o,
                tooltip: (0, a.we)("#FormattingToolbar_HeadingLevel2"),
                start: "[h2]",
                end: "[/h2]",
                children: (0, e.jsx)(R.qOW, {}),
              }),
              (0, e.jsx)(ie.XQ, {}),
              (0, e.jsx)(ge, {
                fnInsertText: o,
                tooltip: (0, a.we)("#FormattingToolbar_InsertLink"),
                start: "[url]",
                end: "[/url]",
                children: (0, e.jsx)(R.YqK, {}),
              }),
              (0, e.jsx)(ge, {
                fnInsertText: o,
                tooltip: (0, a.we)("#EventEditor_InsertImage"),
                start: "[img]",
                end: "[/img]",
                children: (0, e.jsx)(R._V3, {}),
              }),
              (0, e.jsx)(ie.hK, {}),
              r,
            ],
          });
        }
        function ge(s) {
          const {
            fnInsertText: t,
            tooltip: n,
            start: r,
            end: o,
            children: l,
          } = s;
          return (0, e.jsx)(ie.ff, {
            onClick: () => t(r, o),
            tooltip: n,
            children: l,
          });
        }
        function Ue(s) {
          const { language: t, value: n, refTextArea: r } = s,
            o = p.useCallback((d) => n.Set(d.currentTarget.value), [n]),
            l = (0, _e.gc)(n),
            c = p.useCallback(
              (d) => {
                (0, de.cZ)(r, d?.textarea);
              },
              [r],
            );
          return (0, e.jsx)(S.Cl, {
            className: Ce.TextArea,
            ref: c,
            nMinHeight: 96,
            value: l,
            onChange: o,
            lang: (0, a.d$)(t),
          });
        }
        function ze(s, t, n, r, o) {
          if (s.selectionStart || s.selectionStart === 0) {
            const l = s.selectionStart,
              c = s.selectionEnd,
              d = s.value.substring(0, l),
              m = s.value.substring(l, c),
              x = s.value.substring(c, s.value.length),
              f = o ? o(m) : m,
              h = f.length - m.length,
              C = s.scrollTop;
            Te(t, d + n + f + r + x, () => {
              s.focus(),
                (s.selectionStart = l + n.length),
                (s.selectionEnd = c + n.length + h),
                (s.scrollTop = C);
            });
          } else Te(t, s.value + n + " " + r, () => s.focus());
        }
        function Te(s, t, n) {
          s.Set(t), window.setTimeout(n, 1);
        }
        var ye = i(28410),
          Ae = i(5859),
          Me = i(25792),
          ue = i(99412),
          He = i(69787);
        function Oe(s) {
          switch (s) {
            case "Demo":
              return "#StoreAdmin_GameDescription_AboutThisDemo";
            case "DLC":
              return "#StoreAdmin_GameDescription_AboutThisContent";
            case "Music":
              return "#StoreAdmin_GameDescription_AboutThisSoundtrack";
            case "Application":
              return "#StoreAdmin_GameDescription_AboutThisSoftware";
            default:
              return "#StoreAdmin_GameDescription_AboutThisGame";
          }
        }
        const Be = p.lazy(() => Promise.resolve().then(i.bind(i, 5859)));
        function Je(s) {
          const {
              rgLanguages: t,
              value: n,
              strNamePrefix: r,
              rgPath: o,
              editorType: l,
              asset_mtime: c,
              appType: d,
            } = s,
            m = p.useMemo(() => new Map(t), [t]),
            x = p.useMemo(() => Array.from(m.keys()).map(ue.sfN), [m]),
            {
              strActiveLanguage: f,
              mapValues: h,
              rctLanguageSelect: C,
              rctHiddenInputs: E,
            } = (0, H.KC)(m, n, r, o),
            X = et(),
            xe = (0, ye.TQ)(),
            q =
              l == "aboutthegame"
                ? (0, e.jsx)(Ae.StoreAppPageHeader, {
                    children: (0, a.we)(Oe(d)),
                  })
                : void 0;
          return (0, e.jsxs)("div", {
            className: Ce.LocTextAreaContainer,
            children: [
              l == "aboutthegame" && (0, e.jsx)(ht, {}),
              l == "aboutthegame" && !xe && (0, e.jsx)(st, {}),
              (0, e.jsxs)(
                Me.tH,
                {
                  children: [
                    " ",
                    (0, e.jsx)(p.Suspense, {
                      fallback: null,
                      children: (0, e.jsx)(He.Dx.Provider, {
                        value: c,
                        children: (0, e.jsx)(X, {
                          language: f,
                          mapValues: h,
                          languages: x,
                          rctToolbarControls: C,
                          editorType: l,
                          rctAboveEditor: q,
                        }),
                      }),
                    }),
                  ],
                },
                xe ? "richeditor" : "bbcode",
              ),
              E,
            ],
          });
        }
        function et() {
          return (0, ye.TQ)() ? Be : le;
        }
        function ht() {
          const s = (0, ye.TQ)(),
            t = (0, ye.gg)();
          return (0, e.jsx)(S.Yh, {
            style: { width: "fit-content" },
            checked: s,
            label: (0, a.we)("#StoreAdmin_GameDescription_UseRichEditor"),
            onChange: t,
          });
        }
        function st() {
          return (0, e.jsxs)("div", {
            children: [
              (0, a.PP)(
                "#StoreAdmin_GameDescription_PlainEditorImageInstructions1",
                (0, e.jsx)(R.QRo, { className: "inline_svg" }),
              ),
              (0, e.jsx)("br", {}),
              (0, a.we)(
                "#StoreAdmin_GameDescription_PlainEditorImageInstructions2",
              ),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("br", {}),
            ],
          });
        }
        var we = i(2272),
          at = i(65596),
          Ze = i(65620),
          qe = i(92757),
          tt = i(96135),
          bt = i(72609),
          At = i(77411),
          Qe = i(76559),
          Bt = i(813),
          Kt = i(16512),
          zt = i(63854),
          Ft = ((s) => (
            (s[(s.k_CreatorHomeNone = 0)] = "k_CreatorHomeNone"),
            (s[(s.k_CreatorHomeAll = -1)] = "k_CreatorHomeAll"),
            s
          ))(Ft || {}),
          Ps = i(10142),
          _t = i(84676),
          ct = i(31172),
          ft = i(95695),
          Ke = i.n(ft),
          Ss = i(45247),
          Zt = i(91512),
          Us = i(21418),
          ns = i(85599),
          Ms = i(41635),
          an = i(19042),
          Wt = i.n(an);
        function zs(s) {
          const { rgCreatorHomes: t, groupvanityinfo: n } = s,
            [r, o] = (0, p.useState)(!0);
          return (
            (0, p.useEffect)(() => {
              n
                ? (async () => (await Bt.ac.AddGroupVanities(n), o(!1)))()
                : o(!1);
            }, [n]),
            r
              ? null
              : (0, e.jsxs)(Me.tH, {
                  children: [
                    (0, e.jsxs)("div", {
                      className: "instructions",
                      children: [
                        (0, e.jsxs)("h2", {
                          children: [
                            (0, a.we)("#Create_Home_Title"),
                            " ",
                            (0, e.jsx)("span", {
                              className: "small",
                              children: (0, e.jsx)("a", {
                                href: `${bt.TS.STORE_BASE_URL}news/group/4145017/view/4578559379959234050`,
                                target: "_blank",
                                children: (0, a.we)(
                                  "#AssetRequest_General_SeeDocs",
                                ),
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("hr", {}),
                        !t || t.length == 0
                          ? (0, e.jsx)("div", {
                              className: Wt().PageSelect,
                              children: (0, a.oW)(
                                "#Create_Home_None",
                                (0, e.jsx)("a", {
                                  href: `${bt.TS.PARTNER_BASE_URL}doc/store/creator_homepage`,
                                  target: "_blank",
                                }),
                                (0, e.jsx)("a", {
                                  href: `${bt.TS.PARTNER_BASE_URL}doc/store/franchise_pages`,
                                  target: "_blank",
                                }),
                              ),
                            })
                          : (0, e.jsx)(It, { ...s, baseGameAppID: s.appid }),
                      ],
                    }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)("br", {}),
                  ],
                })
          );
        }
        function on(s, t) {
          if (s >= t) return [];
          const n = [];
          for (let r = s; r < t; r++) n.push(r);
          return n;
        }
        function It(s) {
          const {
              rgCreatorHomes: t,
              oInputFeatured: n,
              creatorNames: r,
              baseGameAppID: o,
            } = s,
            [l, c] = (0, p.useState)(() => {
              if (n) return n;
              for (const x of r.rgFrachises) {
                const f = t.find((h) => h.linkname == x);
                if (f)
                  return {
                    clan_account_id: new Qe.b(f.clan_steamid).GetAccountID(),
                    sort_order: "salesrank",
                    featured_appids: void 0,
                  };
              }
              return { clan_account_id: 0 };
            }),
            d = (0, p.useCallback)(
              (x, f) => {
                l.clan_account_id == Ft.k_CreatorHomeAll
                  ? c({
                      ...l,
                      featured_appids: [...(l.featured_appids || []), f],
                      featured_creator_clan_account_id: [
                        ...(l.featured_creator_clan_account_id || []),
                        x,
                      ],
                    })
                  : c({
                      ...l,
                      featured_appids: [...(l.featured_appids || []), f],
                    });
              },
              [l],
            ),
            m = (0, p.useMemo)(() => {
              if (l.clan_account_id == Ft.k_CreatorHomeAll) {
                const x = new Set();
                t.forEach((h) =>
                  x.add(new Qe.b(h.clan_steamid).GetAccountID()),
                );
                const f = new Array();
                return (
                  x.forEach((h) => {
                    const C = Bt.ac.GetClanInfoByClanAccountID(h);
                    f.push({
                      name: C?.group_name || "" + h,
                      key: "clanid" + h,
                      contents: (0, e.jsx)(Me.tH, {
                        children: (0, e.jsx)(Vn, {
                          creatorHomeClanAccountID: h,
                          fnAddAppToFeaturedAppList: d,
                          baseGameAppID: o,
                          rgFeaturedList: l.featured_appids,
                        }),
                      }),
                    });
                  }),
                  f
                );
              }
              return null;
            }, [o, d, l.clan_account_id, l.featured_appids, t]);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", { children: (0, a.we)("#Create_Home_Desc") }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("div", {
                className: ft.EventEditorTextTitle,
                children: (0, a.we)("#Create_Home_SelectedSource"),
              }),
              (0, e.jsx)(An, {
                rgCreatorHomes: t,
                oFeatured: l,
                fnSetFeatured: c,
              }),
              (0, e.jsx)("div", {
                style: { display: "flex", flexDirection: "column" },
                className: ft.EventDefaultRowContainer,
                children: l.clan_account_id
                  ? (0, e.jsx)(e.Fragment, {
                      children:
                        l.clan_account_id > 0
                          ? (0, e.jsx)(Vn, {
                              creatorHomeClanAccountID: l.clan_account_id,
                              fnAddAppToFeaturedAppList: d,
                              baseGameAppID: o,
                              rgFeaturedList: l.featured_appids,
                            })
                          : (0, e.jsx)(Us.V, { tabs: m }),
                    })
                  : (0, e.jsx)("span", {
                      children: (0, a.we)("#Create_Home_Selected_None"),
                    }),
              }),
              (0, e.jsxs)("div", {
                className: Wt().SelectedSource,
                children: [
                  !!(
                    l.clan_account_id ||
                    l.featured_creator_clan_account_id?.length > 0
                  ) &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(ks, {
                          rgFeaturedList: l.featured_appids,
                          strFeaturedFirstAppToken: l.featured_first_app_token,
                          rgFeaturedClanList:
                            l.featured_creator_clan_account_id,
                          fnSetFeatureAppAndClans: (x, f, h) => {
                            c({
                              ...l,
                              featured_appids: x,
                              featured_creator_clan_account_id: f,
                              featured_first_app_token: h,
                            });
                          },
                        }),
                        (0, e.jsx)(jr, { oFeatured: l, fnSetFeatured: c }),
                      ],
                    }),
                  (0, e.jsx)(us, { oFeatured: l }),
                ],
              }),
            ],
          });
        }
        function us(s) {
          const { oFeatured: t } = s,
            [n, r] = (0, p.useState)(() => t?.featured_appids?.length || 0);
          (0, p.useEffect)(() => {
            n < (t?.featured_appids?.length || 0) &&
              r(t.featured_appids.length);
          }, [t, n]);
          const o = on(t?.featured_appids?.length || 0, n),
            l =
              !t?.featured_first_app_token ||
              t?.featured_first_app_token == "#Featured_App_None";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("input", {
                type: "hidden",
                name: "app[featured_creator_home][clan_account_id]",
                value: t?.clan_account_id || 0,
              }),
              (0, e.jsx)(
                "input",
                {
                  type: "hidden",
                  name: "app[featured_creator_home][featured_first_app_token]",
                  value: l ? void 0 : t?.featured_first_app_token,
                },
                l ? "empty" : "feating",
              ),
              t?.clan_account_id
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: "app[featured_creator_home][sort_order]",
                        value: t.sort_order || "salesrank",
                      }),
                      t.featured_appids?.map((c, d) =>
                        (0, e.jsxs)(
                          p.Fragment,
                          {
                            children: [
                              (0, e.jsx)("input", {
                                type: "hidden",
                                name: `app[featured_creator_home][featured_appids][${d}]`,
                                value: c,
                              }),
                              (0, e.jsx)("input", {
                                type: "hidden",
                                name: `app[featured_creator_home][featured_creator_clan_account_id][${d}]`,
                                value: t.featured_creator_clan_account_id?.[d],
                              }),
                            ],
                          },
                          "app" + c,
                        ),
                      ),
                    ],
                  })
                : (0, e.jsx)("input", {
                    type: "hidden",
                    name: "app[featured_creator_home][sort_order]",
                    value: void 0,
                  }),
              o.map((c) =>
                (0, e.jsxs)(
                  p.Fragment,
                  {
                    children: [
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: `app[featured_creator_home][featured_appids][${c}]`,
                        value: void 0,
                      }),
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: `app[featured_creator_home][featured_creator_clan_account_id][${c}]`,
                        value: void 0,
                      }),
                    ],
                  },
                  "nullinput" + c,
                ),
              ),
            ],
          });
        }
        const gs = { include_assets: !0, include_release: !0 };
        function ln(s) {
          const {
              creatorHomeClanAccountID: t,
              rgFeaturedList: n,
              fnAddAppToFeaturedAppList: r,
              baseGameAppID: o,
            } = s,
            l = (0, zt.a)(),
            [c, d] = (0, p.useState)(null),
            m = (0, Kt.id)(l, t, !0),
            x = (0, _t.zX)(m, gs),
            f = (0, p.useMemo)(
              () =>
                x != _t.Sq && m
                  ? m
                      .filter((h) => h != o)
                      .map((h) => {
                        const C = Ps.A.Get().GetApp(h);
                        return {
                          value: h,
                          label: `${C ? C.GetName() : ""} (Appid: ${h})`,
                        };
                      })
                  : [],
              [m, x, o],
            );
          return !m || x == _t.Sq
            ? (0, e.jsx)(ns.t, { size: "small", string: (0, a.we)("#Loading") })
            : (0, e.jsxs)("div", {
                className: Wt().ManualFeatures,
                children: [
                  (0, e.jsx)("div", {
                    className: "DialogLabel",
                    children: (0, a.we)("#Create_Home_ManuallyFeature"),
                  }),
                  (0, e.jsx)("div", {
                    children: (0, a.we)("#Create_Home_Select_App_Desc"),
                  }),
                  (0, e.jsxs)("div", {
                    className: Wt().FeatureSelectItemCtn,
                    children: [
                      (0, e.jsx)(At.Ay, {
                        className: "react-select-container",
                        classNamePrefix: "react-select",
                        isSearchable: !0,
                        isMulti: !1,
                        placeholder: (0, a.we)("#Create_Home_Select_App"),
                        options: f,
                        value: f.find((h) => h.value === c),
                        onChange: (h) => d(h.value),
                        controlShouldRenderValue: !!c,
                      }),
                      (0, e.jsx)(S.jn, {
                        disabled: !c,
                        onClick: () => {
                          (!n || n.findIndex((h) => h === c) == -1) && r(t, c),
                            d(null);
                        },
                        children: (0, a.we)("#Create_Home_Add_App"),
                      }),
                    ],
                  }),
                ],
              });
        }
        function ks(s) {
          const {
            rgFeaturedList: t,
            rgFeaturedClanList: n,
            fnSetFeatureAppAndClans: r,
            strFeaturedFirstAppToken: o,
          } = s;
          return (0, e.jsxs)("div", {
            className: Wt().ManualFeatures,
            children: [
              (0, e.jsx)("div", {
                className: "DialogLabel",
                children: (0, a.we)("#Create_Home_App_Featured"),
              }),
              (0, e.jsxs)("div", {
                style: { display: "flex", flexDirection: "column" },
                className: ft.EventDefaultRowContainer,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, a.we)("#Create_Home_App_Featured_Desc"),
                  }),
                  !t || t.length == 0
                    ? (0, e.jsx)("div", {
                        children: (0, a.we)("#Create_Home_No_Featured"),
                      })
                    : (0, e.jsx)(Zt.A, {
                        items: t || [],
                        render: (l, c) =>
                          (0, e.jsx)(
                            Ws,
                            {
                              appid: l,
                              creatorClanID: n?.[c],
                              elEditor:
                                c == 0
                                  ? (0, e.jsx)(cn, {
                                      strFeaturedFirstAppToken: o,
                                      fnSetFeaturedFirstAppToken: (d) =>
                                        r(t, n, d),
                                    })
                                  : void 0,
                            },
                            "row" + l,
                          ),
                        onDelete: (l) => {
                          const c = [...t];
                          c.splice(l, 1);
                          let d;
                          n && ((d = [...n]), d.splice(l, 1)), r(c, d, o);
                        },
                        onMove: (l, c) => {
                          const d = [...t];
                          (0, Ms.yY)(d, l, c);
                          let m;
                          n && ((m = [...n]), (0, Ms.yY)(m, l, c)), r(d, m, o);
                        },
                      }),
                ],
              }),
            ],
          });
        }
        function cn(s) {
          const { strFeaturedFirstAppToken: t, fnSetFeaturedFirstAppToken: n } =
              s,
            r = (0, p.useMemo)(() => {
              const o = new Array();
              return (
                o.push({ label: (0, a.we)("#Featured_App_None"), data: null }),
                o.push({
                  label: (0, a.we)("#Featured_App_Reason_Next"),
                  data: "#Featured_App_Reason_Next",
                }),
                o.push({
                  label: (0, a.we)("#Featured_App_Reason_Franchise"),
                  data: "#Featured_App_Reason_Franchise",
                }),
                o.push({
                  label: (0, a.we)("#Featured_App_Reason_Similar"),
                  data: "#Featured_App_Reason_Similar",
                }),
                o.push({
                  label: (0, a.we)("#Featured_App_Reason_Upcoming"),
                  data: "#Featured_App_Reason_Upcoming",
                }),
                o.push({
                  label: (0, a.we)("#Featured_App_Reason_YouMight"),
                  data: "#Featured_App_Reason_YouMight",
                }),
                o.push({
                  label: (0, a.we)("#Featured_App_Reason_LatestEdition"),
                  data: "#Featured_App_Reason_LatestEdition",
                }),
                o
              );
            }, []);
          return (0, e.jsx)("div", {
            className: Wt().PageSelect,
            children: (0, e.jsx)(S.m, {
              label: (0, a.we)("#Featured_App_Name"),
              tooltip: (0, a.we)("#Featured_App_Tooltip"),
              rgOptions: r,
              selectedOption: t || null,
              onChange: (o) => {
                n(o.data);
              },
            }),
          });
        }
        function Ws(s) {
          const { appid: t, elEditor: n, creatorClanID: r } = s,
            [o] = (0, _t.t7)(t, gs),
            l = (0, p.useMemo)(() => ({ id: t, type: "game" }), [t]),
            c = (0, p.useMemo)(() => dn(r), [r]);
          return (0, e.jsxs)("div", {
            className: Wt().AppRowCtn,
            children: [
              o
                ? (0, e.jsx)("div", {
                    className: Wt().CapsuleCtn,
                    children: (0, e.jsx)(Ss.W, {
                      capsule: l,
                      imageType: "header",
                      bShowParentApp: !1,
                      bHideStoreHover: !0,
                      bPreferAssetWithoutOverride: !1,
                    }),
                  })
                : (0, e.jsxs)("div", {
                    className: Wt().MissingCapsuleCtn,
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, a.we)("#Create_Home_Missing_Capsule"),
                      }),
                      (0, e.jsxs)("div", { children: ["appid: (", t, ")"] }),
                    ],
                  }),
              !!c &&
                (0, e.jsxs)("div", {
                  className: Wt().CreatorHomeCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, a.we)("#Create_Home_App_FeaturedSource"),
                    }),
                    (0, e.jsx)(ct.hA, {
                      creatorID: c,
                      bShowTagline: !1,
                      bHideCreatorType: !0,
                      bSmallFormat: !0,
                      bHideFollowButton: !0,
                    }),
                  ],
                }),
              n,
            ],
          });
        }
        function dn(s) {
          return s
            ? {
                name:
                  Bt.ac.GetClanInfoByClanAccountID(s)?.group_name || `(${s})`,
                clan_account_id: s,
                type: "developer",
              }
            : null;
        }
        function An(s) {
          const { rgCreatorHomes: t, oFeatured: n, fnSetFeatured: r } = s,
            o = (0, p.useMemo)(() => {
              const l = new Set();
              t.forEach((d) => l.add(new Qe.b(d.clan_steamid).GetAccountID()));
              const c = new Array();
              return (
                c.push({
                  label: (0, a.we)("#Create_Home_None_Selected"),
                  data: Ft.k_CreatorHomeNone,
                  tooltip: (0, a.we)("#Create_Home_None_Selected_ttip"),
                }),
                l.forEach((d) => {
                  const m = Bt.ac.GetClanInfoByClanAccountID(d);
                  c.push({ label: m?.group_name || `(${d})`, data: d });
                }),
                c.length > 2 &&
                  c.push({
                    label: (0, a.we)("#Create_Home_All_Creators") + " (?)",
                    data: Ft.k_CreatorHomeAll,
                    tooltip: (0, a.we)("#Create_Home_All_Creators_ttip"),
                  }),
                c
              );
            }, [t]);
          return (0, e.jsx)("div", {
            className: Wt().PageSelect,
            children: (0, e.jsx)(S.m, {
              rgOptions: o,
              selectedOption: n?.clan_account_id || 0,
              onChange: (l) => {
                l.data != n?.clan_account_id &&
                  r({
                    clan_account_id: l.data,
                    featured_appids: void 0,
                    featured_creator_clan_account_id: void 0,
                    sort_order: "salesrank",
                  });
              },
            }),
          });
        }
        function Vn(s) {
          const { creatorHomeClanAccountID: t } = s,
            [n, r] = (0, p.useState)(() => dn(t));
          return (
            (0, p.useEffect)(() => {
              n?.clan_account_id != t && r(dn(t));
            }, [t, n?.clan_account_id]),
            (0, e.jsxs)("div", {
              className: Wt().SelectedSource,
              children: [
                (0, e.jsx)(ct.hA, {
                  creatorID: n,
                  bShowTagline: !0,
                  bHideCreatorType: !0,
                  bSmallFormat: !0,
                  bHideFollowButton: !0,
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)(ln, { ...s }),
              ],
            })
          );
        }
        function jr(s) {
          const { oFeatured: t, fnSetFeatured: n } = s;
          return (0, e.jsxs)(S.G5, {
            children: [
              (0, e.jsx)("br", {}),
              (0, e.jsx)("div", {
                className: "DialogLabel",
                children: (0, a.we)("#Create_Home_SortBy"),
              }),
              (0, e.jsxs)("div", {
                style: { display: "flex", flexDirection: "column" },
                className: ft.EventDefaultRowContainer,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, a.we)("#Create_Home_SortBy_Desc"),
                  }),
                  (0, e.jsxs)("div", {
                    className: Wt().SortOptionsCtn,
                    children: [
                      (0, e.jsx)(S.Od, {
                        checked: t.sort_order == "salesrank",
                        controlled: !0,
                        onChange: (r) =>
                          r && n({ ...t, sort_order: "salesrank" }),
                        label: (0, a.we)("#Create_Home_SortBy_Sales"),
                        tooltip: (0, a.we)("#Create_Home_SortBy_Sales_ttip"),
                      }),
                      (0, e.jsx)(S.Od, {
                        checked: t.sort_order == "releasedate",
                        controlled: !0,
                        onChange: (r) =>
                          r && n({ ...t, sort_order: "releasedate" }),
                        label: (0, a.we)("#Create_Home_SortBy_Release"),
                        tooltip: (0, a.we)("#Create_Home_SortBy_Release_ttip"),
                      }),
                      (0, e.jsx)(S.Od, {
                        checked: t.sort_order == "tags",
                        controlled: !0,
                        onChange: (r) => r && n({ ...t, sort_order: "tags" }),
                        label: (0, a.we)("#Create_Home_SortBy_Tag"),
                        tooltip: (0, a.we)("#Create_Home_SortBy_Tag_ttip"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        var un = i(71742),
          $t = i(72604),
          hs = i(20194),
          Kn = i(41735),
          Yt = i.n(Kn),
          Xt = i(67705);
        function $n(s) {
          const { data: t, isLoading: n } = (0, hs.I)({
            queryKey: ["useAppDLCListPartnerSite", s],
            queryFn: async () => {
              const r = `${bt.TS.PARTNER_BASE_URL}apps/ajaxgetdlc`,
                o = { appid: s, sessionid: (0, Xt.KC)() },
                l = await Yt().get(r, { params: o });
              if (l?.data?.success != $t.R)
                throw (
                  "Fail to load DLC list for appid " +
                  s +
                  " with error: " +
                  l?.data?.message
                );
              return l.data.dlcids || [];
            },
            enabled: !!s,
          });
          return n ? null : t;
        }
        var vn = i(61266),
          yn = i(69515);
        function Yn(s) {
          const { rgDLCSettings: t, parentAppID: n, dlcAppID: r } = s,
            [o, l] = (0, p.useState)(() => t);
          return (0, e.jsxs)(vn.m, {
            children: [
              (0, e.jsx)("h2", {
                children: (0, a.we)("#DLC_Dependency_Title"),
              }),
              (0, e.jsx)("hr", {}),
              (0, e.jsx)("p", { children: (0, a.we)("#DLC_Dependency_Desc") }),
              (0, e.jsx)(Mt, {
                parentAppID: n,
                dlcAppID: r,
                fnSelectedDLCAppID: (c) => {
                  o.findIndex((d) => d.dlc_appid == c) == -1 &&
                    l([...o, { dlc_appid: c, config: "dlc_required" }]);
                },
              }),
              (0, e.jsx)(Qn, { rgDLCInfo: o, fnSetDLCInfo: l }),
              (0, e.jsx)(jn, { rgDLCInfo: o }),
            ],
          });
        }
        function jn(s) {
          const { rgDLCInfo: t } = s,
            [n, r] = (0, p.useState)(() => t?.length || 0);
          (0, p.useEffect)(() => {
            t?.length > n && r(t.length);
          }, [n, t]);
          const o = (0, p.useMemo)(() => {
            const l = new Array();
            for (let c = t.length || 0; c < n; ++c)
              l.push(
                (0, e.jsx)(
                  "input",
                  {
                    type: "hidden",
                    name: `app[dlc_dependency][${c}]`,
                    value: void 0,
                  },
                  "dependancy_del" + c,
                ),
              );
            return l;
          }, [n, t]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              t?.map((l, c) =>
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: `app[dlc_dependency][${c}][dlc_appid]`,
                        value: l.dlc_appid,
                      }),
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: `app[dlc_dependency][${c}][config]`,
                        value: l.config,
                      }),
                    ],
                  },
                  "dependency_input" + l.dlc_appid + "_" + c,
                ),
              ),
              o,
            ],
          });
        }
        const Xn = { include_assets: !0, include_release: !0 };
        function Qn(s) {
          const { rgDLCInfo: t, fnSetDLCInfo: n } = s;
          return (0, e.jsx)(Zt.A, {
            items: t,
            render: (r, o) =>
              (0, e.jsx)(
                Zn,
                {
                  dependency: r,
                  index: o,
                  fnSetDLCInfo: (l) => {
                    const c = [...t];
                    (0, un.wT)(
                      c[o].dlc_appid == l.dlc_appid,
                      "AppID don't match, what gives",
                    ),
                      console.log(),
                      (c[o].config = l.config),
                      n(c);
                  },
                },
                "row" + r.dlc_appid,
              ),
            onDelete: (r) => {
              const o = [...t];
              o.splice(r, 1), n(o);
            },
            onReorder: (r) => n([...r]),
          });
        }
        const Jn = [
          {
            label: (0, a.we)("#DLC_Dependency_Require"),
            tooltip: (0, a.we)("#DLC_Dependency_Require_ttip"),
            data: "dlc_required",
          },
          {
            label: (0, a.we)("#DLC_Dependency_Recommended"),
            tooltip: (0, a.we)("#DLC_Dependency_Recommended_ttip"),
            data: "dlc_recommended",
          },
        ];
        function Zn(s) {
          const { dependency: t, fnSetDLCInfo: n } = s;
          return (0, e.jsx)(Ws, {
            appid: t.dlc_appid,
            elEditor: (0, e.jsx)("div", {
              className: yn.RelationshipType,
              children: (0, e.jsx)(S.m, {
                label: (0, a.we)("#DLC_Dependency_Relationship"),
                rgOptions: Jn,
                selectedOption: t.config,
                onChange: (r) => {
                  if (t.config != r.data) {
                    const o = { ...t };
                    (o.config = r.data), n(o);
                  }
                },
              }),
            }),
          });
        }
        function Mt(s) {
          const { parentAppID: t, fnSelectedDLCAppID: n, dlcAppID: r } = s,
            [o, l] = (0, p.useState)(null),
            c = $n(t),
            d = (0, _t.zX)(c, Xn),
            m = (0, p.useMemo)(
              () =>
                d != _t.Sq && c
                  ? c
                      .filter((x) => x != r)
                      .map((x) => {
                        const f = Ps.A.Get().GetApp(x);
                        return {
                          value: x,
                          label: `${f ? f.GetName() : ""} (Appid: ${x})`,
                        };
                      })
                  : [],
              [d, c, r],
            );
          return !c || d == _t.Sq
            ? (0, e.jsx)(ns.t, { size: "small", string: (0, a.we)("#Loading") })
            : (0, e.jsxs)("div", {
                className: yn.SelectorRow,
                children: [
                  (0, e.jsx)(At.Ay, {
                    className: "react-select-container",
                    classNamePrefix: "react-select",
                    isSearchable: !0,
                    isMulti: !1,
                    placeholder: (0, a.we)("#Create_Home_Select_App"),
                    options: m,
                    value: m.find((x) => x.value === o),
                    onChange: (x) => l(x.value),
                  }),
                  (0, e.jsx)(S.$n, {
                    disabled: !o,
                    onClick: () => {
                      n(o), l(void 0);
                    },
                    children: (0, a.we)("#DLC_Dependency_Select"),
                  }),
                ],
              });
        }
        var Gt = i(71714),
          Ls = i(88003),
          Gs = i(82734);
        const Pr = 0,
          qn = 1,
          er = 2,
          tr = 3,
          sr = 4,
          nr = 5;
        var Vs = i(3367),
          rr = i(16119);
        function ar(s) {
          const { rgDLC: t, parentappid: n } = s,
            [r, o] = p.useState(t ? [...t] : []),
            [l, c] = p.useState([]);
          p.useEffect(() => {
            o(s?.rgDLC ? [...s.rgDLC] : []);
          }, [s]);
          const d = (h) => {
            const C = [...r];
            (C[h].bDeleted = !0), o(C);
          };
          p.useEffect(() => {
            const h = Array();
            let C = 0;
            for (
              r.forEach((E) => {
                E.bDeleted ||
                  (h.push(
                    p.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${C}][appid]`,
                      value: E.appid,
                    }),
                  ),
                  h.push(
                    p.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${C}][itemid]`,
                      value: E.itemid,
                    }),
                  ),
                  h.push(
                    p.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${C}][highlight]`,
                      value: C == 0 && E.highlight ? E.highlight : "",
                    }),
                  ),
                  h.push(
                    p.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${C}][highlight_reason]`,
                      value:
                        C == 0 && E.highlight_reason ? E.highlight_reason : "",
                    }),
                  ),
                  C++);
              });
              C < t.length;
            ) {
              let E = p.createElement("input", {
                type: "hidden",
                name: `app[related_items][dlc][${C}]`,
                value: "",
              });
              h.push(E), C++;
            }
            c(h);
          }, [t.length, r]);
          const m = (h, C) => {
              if (isNaN(h) || isNaN(C)) return;
              const E = [...r];
              E.splice(C, 0, E.splice(h, 1)[0]), o(E);
            },
            x = (h, C) => {
              const E = [...r];
              (E[h].highlight = C.highlight),
                (E[h].highlight_reason = C.highlight_reason),
                o(E);
            },
            f = (0, e.jsx)(S.$n, {
              className: Gt.AddDLCButton,
              onClick: (h) =>
                (0, Ls.pg)(
                  (0, e.jsx)(or, {
                    rgDLCItems: r,
                    parentAppID: n,
                    onSelected: (C, E, X, xe) => {
                      const q = { itemid: "" + E, appid: "" + C, name: X },
                        V = xe ? [q, ...r] : [...r, q];
                      o(V);
                    },
                  }),
                  (0, Gs.uX)(h),
                ),
              children: (0, a.we)("#StoreAdmin_Add_DLC") + "...",
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              f,
              (0, e.jsx)(Zt.A, {
                items: r,
                onDelete: (h) => d(h),
                onMove: (h, C) => m(h, C),
                render: (h, C) =>
                  (0, e.jsx)(
                    g,
                    { item: h, index: C, fnUpdateHighlight: x },
                    h?.itemid ?? h?.appid,
                  ),
              }),
              ...l,
            ],
          });
        }
        function or(s) {
          const {
              closeModal: t,
              rgDLCItems: n,
              onSelected: r,
              parentAppID: o,
            } = s,
            l = Vs.c6.qI,
            [c, d] = p.useState(null),
            m = (h, C) => {
              d({ appid: h, itemid: C });
            },
            [x] = (0, _t.G6)(c?.appid, l, {
              include_basic_info: !0,
              include_assets: !0,
            }),
            f = p.useCallback(
              (h) => {
                r(c?.appid, c?.itemid, x?.GetName(), h);
              },
              [c, r, x],
            );
          return (0, e.jsxs)(P.eV, {
            title: (0, a.we)("#StoreAdmin_Add_DLC"),
            closeModal: t,
            className: Gt.AddDLCDialog,
            children: [
              (0, e.jsx)(S.nB, {
                children: (0, e.jsxs)("div", {
                  className: Gt.AppSelectCtn,
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, a.we)("#StoreAdmin_Add_DLC_Desc"),
                    }),
                    (0, e.jsx)(rr.h, {
                      fnSetItemID: m,
                      itemType: l,
                      fnFilterID: (h) =>
                        n.findIndex((C) => parseInt(C.appid) == h) == -1,
                      bIncludeRetired: !1,
                      bOnlyDLC: !0,
                      rgParentAppIDs: [o],
                      bRunQueryOnLoad: !0,
                    }),
                    !!c?.appid &&
                      (0, e.jsxs)("div", {
                        className: Gt.DLCDisplayContainer,
                        children: [
                          (0, e.jsx)("div", {
                            children: x?.GetName()
                              ? x.GetName() + " (" + x.GetID() + ")"
                              : c.appid,
                          }),
                          (0, e.jsx)("img", {
                            src:
                              x?.GetAssets().GetSmallCapsuleURL() ||
                              x?.GetAssets().GetHeaderURL(),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              (0, e.jsxs)(S.wi, {
                className: Gt.AddDLCFooter,
                children: [
                  (0, e.jsx)(S.jn, {
                    disabled: !c,
                    onClick: () => {
                      f(!0), t && t();
                    },
                    children: (0, a.we)("#StoreAdmin_Add_To_Top"),
                  }),
                  (0, e.jsx)(S.$n, {
                    disabled: !c,
                    onClick: () => {
                      f(!1), t && t();
                    },
                    children: (0, a.we)("#StoreAdmin_Add_To_Bottom"),
                  }),
                  (0, e.jsx)(S.$n, {
                    onClick: () => {
                      t && t();
                    },
                    children: (0, a.we)("#Button_Cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function g(s) {
          const { item: t, index: n, fnUpdateHighlight: r } = s,
            o = !t.bRetired && !t.bUnlisted,
            l = n == 0 && o,
            c = p.useMemo(
              () => [
                {
                  label: (0, a.we)("#StoreAdmin_Highlight_NoneSelected"),
                  data: "",
                },
                { label: (0, a.we)("#StoreAdmin_Highlight_New"), data: qn },
                {
                  label: (0, a.we)("#StoreAdmin_Highlight_ComingSoon"),
                  data: er,
                },
                {
                  label: (0, a.we)("#StoreAdmin_Highlight_PlayerFavorite"),
                  data: tr,
                },
                {
                  label: (0, a.we)("#StoreAdmin_Highlight_Recommended"),
                  data: sr,
                },
                {
                  label: (0, a.we)("#StoreAdmin_Highlight_NewPlayer"),
                  data: nr,
                },
              ],
              [],
            ),
            d = () => {
              (t.highlight = !t.highlight), r(n, t);
            },
            m = (f) => {
              (t.highlight_reason = f.data), r(n, t);
            };
          if (!t) return null;
          const x = (0, D.A)(
            Gt.DLCItem,
            t.bDeleted && Gt.DLCItemDeleted,
            !o && Gt.DLCItemNotHighlightEligible,
          );
          return (0, e.jsxs)("div", {
            className: x,
            children: [
              (0, e.jsx)("a", {
                href: K.TS.PARTNER_BASE_URL + "apps/landing/" + t.appid,
                children: t.name || t.appid,
              }),
              t.bRetired &&
                (0, e.jsxs)("span", {
                  className: Gt.LabelNotHighlightEligible,
                  children: ["(", (0, a.we)("#StoreAdmin_Retired"), ")"],
                }),
              !t.bRetired &&
                t.bUnlisted &&
                (0, e.jsxs)("span", {
                  className: Gt.LabelNotHighlightEligible,
                  children: ["(", (0, a.we)("#StoreAdmin_Unlisted"), ")"],
                }),
              l &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(S.Yh, {
                      className: Gt.Highlight,
                      checked: t.highlight,
                      onClick: d,
                      label: (0, a.we)("#StoreAdmin_Highlight_Checkbox"),
                    }),
                    t.highlight &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: Gt.HighlightDropDownLabel,
                            children: (0, a.we)("#StoreAdmin_Highlight_Reason"),
                          }),
                          (0, e.jsx)("div", {
                            className: Gt.HighlightDropDown,
                            children: (0, e.jsx)(S.ZU, {
                              rgOptions: c,
                              onChange: m,
                              selectedOption: t.highlight_reason
                                ? parseInt("" + t.highlight_reason)
                                : "",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
            ],
          });
        }
        var u = i(30935);
        function _(s) {
          const { rgPinnedBundles: t, rgEnabledBundles: n } = s,
            [r, o] = (0, p.useState)(t),
            l = n.filter(
              (c) => r.findIndex((d) => d.bundleid === c.bundleid) === -1,
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(j, {
                pinnedBundles: r,
                unpinnedBundles: l,
                setPinnedBundles: o,
              }),
              (0, e.jsx)(y, {
                pinnedBundles: r,
                nInitialPinnedBundles: t.length,
              }),
            ],
          });
        }
        function y(s) {
          const { pinnedBundles: t, nInitialPinnedBundles: n } = s;
          let r = 0,
            o = [];
          for (; r < Math.max(n, t.length); ) {
            if (r < t.length) {
              const l = t[r];
              o.push({ index: r, value: l.bundleid });
            } else o.push({ index: r, value: "" });
            r++;
          }
          return (0, e.jsx)("div", {
            className: u.PinnedBundlesHiddenInputs,
            children: o.map((l) =>
              (0, e.jsx)(
                "input",
                {
                  type: "hidden",
                  name: `app[pinned_bundles][${l.index}]`,
                  value: l.value,
                },
                l.index,
              ),
            ),
          });
        }
        function j(s) {
          const {
              pinnedBundles: t,
              unpinnedBundles: n,
              setPinnedBundles: r,
            } = s,
            o = (d) => {
              const m = [...t];
              m.splice(d, 1), r(m);
            },
            l = (d, m) => {
              const x = new Array(...t),
                [f] = x.splice(d, 1);
              x.splice(m, 0, f), r(x);
            },
            c = (d) => {
              const m = n.find((f) => f.bundleid === d.value);
              if (m === void 0) return;
              const x = t.concat([m]);
              r(x);
            };
          return (0, e.jsxs)("div", {
            className: u.PinnedBundlesEditor,
            children: [
              (0, e.jsx)(W, { unpinnedBundles: n, onChange: c }),
              (0, e.jsx)(M, { pinnedBundles: t, onDelete: o, onMove: l }),
            ],
          });
        }
        function W(s) {
          const { unpinnedBundles: t, onChange: n } = s,
            r = t.map((o) => ({ value: o.bundleid, label: o.name }));
          return (0, e.jsx)(At.Ay, {
            className: "react-select-container",
            classNamePrefix: "react-select",
            isSearchable: !0,
            isMulti: !1,
            placeholder: (0, a.we)("#PinnedBundles_Placeholder"),
            options: r,
            onChange: n,
            controlShouldRenderValue: !1,
            noOptionsMessage: () => (0, a.we)("#PinnedBundles_NoOptions"),
          });
        }
        function M(s) {
          const { pinnedBundles: t, onDelete: n, onMove: r } = s;
          if (t.length === 0)
            return (0, e.jsx)("div", {
              className: u.EmptyPinnedBundleList,
              children: (0, a.we)("#PinnedBundles_NoPinnedBundles"),
            });
          const o = (l, c) =>
            (0, e.jsx)("div", {
              className: u.PinnedBundleRow,
              children: (0, e.jsxs)("a", {
                href: `${K.TS.PARTNER_BASE_URL}bundles/view/${l.bundleid}`,
                children: [l.name, " (", l.bundleid, ")"],
              }),
            });
          return (0, e.jsx)(Zt.A, {
            items: t,
            onDelete: n,
            onMove: r,
            render: o,
          });
        }
        var $ = i(93357);
        function se() {
          const s = new Map();
          return (
            (0, Xt.Tc)("current_prices", "application_config").forEach((n) => {
              s.set(n.packageid, n);
            }),
            s
          );
        }
        function ee() {
          const [s, t] = (0, p.useState)(() => se());
          return s;
        }
        var me = i(54806),
          je = i(58632),
          he = i.n(je),
          ke = i(34592),
          be = i(98609);
        const dt = 20,
          pt = 900 * 1e3,
          xt = "PackagePriceChanges",
          kt = new Map();
        async function lt(s) {
          const t = { packageids: s.join(",") },
            n = await Yt().get(
              `${be.TS.PARTNER_BASE_URL}pricing/admin/packagepricechanges`,
              { params: t, withCredentials: !0 },
            );
          if (!n || n.status != 200 || n.data?.success != $t.R)
            throw `Load package price changes failed ${((0, ke.H))(n).strErrorMsg}`;
          const r = new Map();
          return (
            n.data.packages?.forEach((o) => r.set(o.packageid, o)),
            s.map(
              (o) =>
                r.get(o) || { packageid: o, total_changes: 0, changes: [] },
            )
          );
        }
        const Ht = new (he())((s) => lt(s), { cache: !1, maxBatchSize: dt });
        function Rt(s, t) {
          const n = new Map();
          return (
            t.forEach((r, o) => {
              r.data
                ? n.set(r.data.packageid, r.data)
                : r.isError &&
                  n.set(s[o], { packageid: s[o], bLoadFailed: !0 });
            }),
            n.size > 0 ? n : kt
          );
        }
        function ps(s) {
          const t = (0, p.useMemo)(
              () => Array.from(new Set(s)).filter(Boolean),
              [s],
            ),
            n = (0, p.useCallback)((r) => Rt(t, r), [t]);
          return (0, me.E)({
            queries: t.map((r) => ({
              queryKey: [xt, r],
              queryFn: () => Ht.load(r),
              staleTime: pt,
              retry: 1,
            })),
            combine: n,
          });
        }
        class mt {
          m_mapPackageToPartners = new Map();
          GetMap() {
            return this.m_mapPackageToPartners;
          }
          static s_Singleton;
          static Get() {
            return (
              mt.s_Singleton ||
                ((mt.s_Singleton = new mt()), mt.s_Singleton.Init()),
              mt.s_Singleton
            );
          }
          constructor() {}
          Init() {
            (0, Xt.Tc)(
              "package_to_paid_partners",
              "application_config",
            ).forEach((n) => {
              this.m_mapPackageToPartners.has(n.packageid) ||
                this.m_mapPackageToPartners.set(n.packageid, new Array()),
                this.m_mapPackageToPartners.get(n.packageid).push(n.partnerid);
            });
          }
        }
        function qt() {
          const [s, t] = (0, p.useState)(() => mt.Get().GetMap());
          return s;
        }
        function Pn(s) {
          const t = qt();
          return useMemo(() => {
            if (s) {
              const n = new Set();
              return (
                s.forEach((r) => {
                  if (t.has(r)) {
                    const o = t.get(r);
                    o.length <= 3 && o.forEach((l) => n.add(l));
                  }
                }),
                Array.from(n.values())
              );
            }
            return [];
          }, [s, t]);
        }
        var Bs = i(8323),
          rs = i(54963),
          as = Object.defineProperty,
          Ya = Object.getOwnPropertyDescriptor,
          ir = (s, t, n, r) => {
            for (
              var o = r > 1 ? void 0 : r ? Ya(t, n) : t, l = s.length - 1, c;
              l >= 0;
              l--
            )
              (c = s[l]) && (o = (r ? c(t, n, o) : c(o)) || o);
            return r && o && as(t, n, o), o;
          };
        const En = class bn {
          m_rgMapProposal = new Map();
          m_nTotalItems = 0;
          m_proposalAddRemoveCallback = new Bs.lu();
          GetProposals() {
            return Array.from(this.m_rgMapProposal.values());
          }
          GetProposalListChange() {
            return this.m_proposalAddRemoveCallback;
          }
          async LoadMoreProposal() {
            return (
              this.m_proposalAddRemoveCallback.Dispatch(this.GetProposals()), !1
            );
          }
          async RejectProposal(t, n, r) {
            let o = null;
            try {
              const l = new FormData();
              l.append("sessionid", (0, Xt.KC)()),
                l.append("packageid", "" + t),
                l.append("json", "1"),
                l.append("reason_code", n.join(",") || ""),
                l.append("email_message", r);
              const c = `${be.TS.PARTNER_BASE_URL}packages/rejectpricing`,
                d = await Yt().post(c, l, { withCredentials: !0 });
              if (d.status == 200 && d.data?.success == $t.R)
                return (
                  console.log(
                    `Proposal for package ${t} successfully rejected`,
                  ),
                  this.m_rgMapProposal.delete(t),
                  this.m_proposalAddRemoveCallback.Dispatch(
                    this.GetProposals(),
                  ),
                  !0
                );
              o = (0, ke.H)(d);
            } catch (l) {
              o = (0, ke.H)(l);
            }
            return (
              console.error(
                "CPriceProposalReviewRequiredStore::RejectProposal failed with " +
                  o.strErrorMsg,
                o,
              ),
              !1
            );
          }
          async AcceptProposal(t, n, r) {
            let o = null;
            try {
              const l = new FormData();
              l.append("sessionid", (0, Xt.KC)()),
                l.append("packageid", "" + t),
                l.append("json", "1"),
                l.append("proposalkey", "" + r),
                l.append("partner_will_publish", n ? "1" : "0");
              const c = `${be.TS.PARTNER_BASE_URL}packages/approvepricing`,
                d = await Yt().post(c, l, { withCredentials: !0 });
              if (d.status == 200 && d.data?.success == $t.R)
                return (
                  console.log(
                    `Proposal for package ${t} successfully accepted`,
                    d.data.output,
                  ),
                  this.m_rgMapProposal.delete(t),
                  this.m_proposalAddRemoveCallback.Dispatch(
                    this.GetProposals(),
                  ),
                  null
                );
              if (((o = (0, ke.H)(d)), d?.data?.output))
                return (
                  console.log(
                    "CPriceProposalReviewRequiredStore::AcceptProposal message information:",
                    d.data.output,
                    o.strErrorMsg,
                  ),
                  d.data.output
                );
            } catch (l) {
              o = (0, ke.H)(l);
            }
            return (
              console.error(
                "CPriceProposalReviewRequiredStore::AcceptProposal failed with " +
                  o.strErrorMsg,
                o,
              ),
              "generic failure"
            );
          }
          static s_Singleton;
          static Get() {
            return (
              bn.s_Singleton || (bn.s_Singleton = new bn()), bn.s_Singleton
            );
          }
          constructor() {
            const t = (0, Xt.Tc)("proposed_prices", "application_config");
            this.ValidateInputDefault(t) &&
              t.forEach((n) => this.m_rgMapProposal.set(n.packageid, n)),
              (this.m_nTotalItems = (0, Xt.Tc)(
                "total_proposed_prices",
                "application_config",
              ));
          }
          ValidateInputDefault(t) {
            const n = t;
            return n && Array.isArray(n) && n.length > 0 && n[0].packageid > 0;
          }
        };
        ir([rs.oI], En.prototype, "LoadMoreProposal", 1),
          ir([rs.oI], En.prototype, "RejectProposal", 1),
          ir([rs.oI], En.prototype, "AcceptProposal", 1);
        let pn = En;
        function Xa() {
          const [s, t] = (0, p.useState)(() => pn.Get().GetProposals());
          return (0, rs.hL)(pn.Get().GetProposalListChange(), t), s;
        }
        function Er() {
          return {
            fnLoadMoreProposal: pn.Get().LoadMoreProposal,
            fnRejectProposal: pn.Get().RejectProposal,
            fnAcceptProposal: pn.Get().AcceptProposal,
          };
        }
        var Qa = i(45737),
          Dn = i.n(Qa),
          Ja = i(179),
          Lt = i(34104),
          ms = i(33220),
          Dr = i(12932);
        const Tn = { include_release: !0 };
        var Tr = ((s) => (
          (s[(s.None = 0)] = "None"),
          (s[(s.Approved = 1)] = "Approved"),
          (s[(s.Rejected_CountryPricing = 2)] = "Rejected_CountryPricing"),
          (s[(s.Rejected_ExceedsMaxPrice = 3)] = "Rejected_ExceedsMaxPrice"),
          (s[(s.Rejected_PriceIncreaseTooHigh = 4)] =
            "Rejected_PriceIncreaseTooHigh"),
          (s[(s.Rejected_NoGuidelineMatch = 5)] = "Rejected_NoGuidelineMatch"),
          (s[(s.Rejected_MissingCurrencies = 6)] =
            "Rejected_MissingCurrencies"),
          (s[(s.Rejected_MissingRegions = 7)] = "Rejected_MissingRegions"),
          (s[(s.Failed = 8)] = "Failed"),
          s
        ))(Tr || {});
        const Za = {
          0: "None",
          1: "Auto-Approvable",
          2: "Contains Country-Override Pricing",
          3: "Exceeds Max Auto-Approvable Price",
          4: "Prices Above Guidance Thresholds",
          5: "No Guideline Match",
          6: "Missing Currencies",
          7: "Missing Regions",
          8: "Auto-Approval Failed",
        };
        var wr = i(31069),
          Qt = i(3301),
          os = i(90247);
        const wn = (0, Lt.yv)(),
          $c = (0, Lt.X5)(),
          In = (0, os.R$)();
        function Ir(s) {
          const t = new Array();
          return (
            wn.forEach((n) => {
              s.proposed_prices.base_amounts.some(
                (r) => r.amount.currency_code == n,
              ) || t.push((0, ms.M1)(n));
            }),
            In.forEach((n) => {
              const r = (0, Qt.de)(n);
              s.proposed_prices.region_amounts.some((o) => o.name == r) ||
                t.push((0, Qt.k8)(n));
            }),
            t
          );
        }
        function qa(s) {
          const t = new Array();
          return (
            s.proposed_prices.base_amounts.forEach((n) => {
              wn.includes(n.amount.currency_code) ||
                (console.log(
                  "Unexpected currency code: " + n.amount.currency_code,
                  n,
                ),
                t.push(
                  `Currency Code: "${n.amount.currency_code}" with price in cents ${n.amount.amount}`,
                ));
            }),
            s.proposed_prices.region_amounts.forEach((n) => {
              In.includes((0, Qt.uF)(n.name.toUpperCase())) ||
                (console.log(
                  `Unexpected region code: ${n.name} and currency code ${n.amount.currency_code} with price in cents ${n.amount.amount}`,
                ),
                t.push(n.name));
            }),
            t
          );
        }
        function Mr(s, t, n) {
          if (t) {
            const r = (0, Qt.k8)(t);
            return s?.current_costs?.region_amounts?.find((o) => o.region == r)
              ?.amount.amount;
          }
          return s?.current_costs?.base_amounts?.find(
            (r) => r.currency_code == n,
          )?.amount;
        }
        function kr(s, t, n, r, o, l) {
          r.price * wr.Ur < t.amount.amount
            ? o.push({
                strCurrency: n
                  ? (0, Qt.k8)(n)
                  : (0, ms.pd)(t.amount.currency_code),
                nAmountCents: t.amount.amount,
                nPercent: Math.floor((t.amount.amount / r.price) * 100) - 100,
                nProposedPrice: t.amount.amount,
                nGuidancePrice: r.price,
                nOriginalPrice: Mr(s, n, t.amount.currency_code),
              })
            : r.price * wr.yk > t.amount.amount &&
              l.push({
                strCurrency: n
                  ? (0, Qt.k8)(n)
                  : (0, ms.pd)(t.amount.currency_code),
                nAmountCents: t.amount.amount,
                nPercent: 100 - Math.floor((t.amount.amount / r.price) * 100),
                nProposedPrice: t.amount.amount,
                nGuidancePrice: r.price,
                nOriginalPrice: Mr(s, n, t.amount.currency_code),
              });
        }
        function Lr(s, t, n, r) {
          const o = new Array(),
            l = new Array(),
            c = t.get(r.packageid);
          return (
            r.proposed_prices.base_amounts.map((d) => {
              const m =
                n.GetRecommendPrice(s, d.amount.currency_code) ||
                n.GetScaledRecommendedPrice(s, d.amount.currency_code);
              kr(c, d, null, m, o, l);
            }),
            r.proposed_prices.region_amounts.map((d) => {
              const m = (0, Qt.uF)(d.name),
                x =
                  n.GetRecommendPrice(s, Lt.CS, m) ||
                  n.GetScaledRecommendedPrice(s, Lt.CS, m);
              kr(c, d, m, x, o, l);
            }),
            {
              rgAboveThreshold: o.sort((d, m) => m.nPercent - d.nPercent),
              rgBelowThreshold: l.sort((d, m) => m.nPercent - d.nPercent),
            }
          );
        }
        function Br(s) {
          const t = Math.floor(Date.now() / 1e3);
          return s.BIsReleased() && s.GetReleaseDateRTime() + 720 * 60 * 60 > t;
        }
        var Ve = i(2897),
          Nr = i(91916),
          mn = i(59490),
          Mn = i(1706),
          ut = i(15348);
        const eo = 720 * 60 * 60;
        function to(s) {
          const { packageID: t, priceChanges: n } = s,
            r = n?.changes?.[0];
          return (0, e.jsxs)("div", {
            className: ut.PriceChangeSummary,
            children: [
              (0, e.jsx)(so, { priceChanges: n }),
              (0, e.jsx)("a", {
                href: `${be.TS.PARTNER_BASE_URL}packages/pricehistory/${t}`,
                target: "_blank",
                rel: "noreferrer",
                children: "Show Package Price History",
              }),
              !!r && (0, e.jsx)(no, { priceChanges: n }),
            ],
          });
        }
        function so(s) {
          const { priceChanges: t } = s;
          if (!t)
            return (0, e.jsx)("div", {
              className: ut.Pending,
              children: "Looking up published price changes...",
            });
          if (t.bLoadFailed)
            return (0, e.jsx)("div", {
              className: ut.LoadFailed,
              children: "Could not load published price changes",
            });
          const n = t.changes?.[0];
          if (!n)
            return (0, e.jsx)("div", {
              className: ut.Pending,
              children: "No previously published price change",
            });
          const r = Date.now() / 1e3 - n.time < eo;
          return (0, e.jsx)(oe.m9, {
            toolTipContent: (0, e.jsx)(ro, { priceChanges: t }),
            direction: "right",
            nDelayShowMS: 150,
            children: (0, e.jsxs)("div", {
              className: (0, D.A)(ut.LastChange, r && ut.RecentChange),
              children: [
                "Price last published ",
                (0, a.TW)(n.time),
                " (",
                (0, a.Nm)(n.time),
                ")",
              ],
            }),
          });
        }
        function no(s) {
          const { priceChanges: t } = s,
            n = t.total_changes || 0;
          return (0, e.jsxs)("div", {
            className: ut.ChangeCount,
            children: [
              n,
              " published price ",
              n == 1 ? "change" : "changes",
              " total",
            ],
          });
        }
        function ro(s) {
          const { priceChanges: t } = s,
            n = t.changes || [];
          return (0, e.jsxs)("div", {
            className: ut.PriceChangeToolTip,
            children: [
              (0, e.jsx)("div", {
                className: ut.ToolTipTitle,
                children: "Recent published price changes",
              }),
              (0, e.jsxs)("table", {
                className: ut.ChangeTable,
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      className: ut.ChangeHeader,
                      children: [
                        (0, e.jsx)("th", { children: "Published" }),
                        (0, e.jsx)("th", { children: "USD" }),
                        (0, e.jsx)("th", { children: "Change" }),
                        (0, e.jsx)("th", { children: "Currencies" }),
                        (0, e.jsx)("th", { children: "By" }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("tbody", {
                    children: n.map((r, o) =>
                      (0, e.jsx)(ao, { change: r }, `${r.time}_${o}`),
                    ),
                  }),
                ],
              }),
              t.total_changes > n.length &&
                (0, e.jsxs)("div", {
                  className: ut.ToolTipFooter,
                  children: [
                    "Showing the last ",
                    n.length,
                    " of ",
                    t.total_changes,
                    " published changes",
                  ],
                }),
              (0, e.jsx)("div", {
                className: ut.ToolTipFooter,
                children:
                  "Open the package price history for the full per-currency detail.",
              }),
            ],
          });
        }
        function ao(s) {
          const { change: t } = s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("tr", {
                className: ut.ChangeRow,
                children: [
                  (0, e.jsxs)("td", {
                    children: [
                      (0, a.TW)(t.time),
                      (0, e.jsx)("div", {
                        className: ut.TimeSince,
                        children: (0, a.Nm)(t.time),
                      }),
                    ],
                  }),
                  (0, e.jsx)("td", {
                    className: ut.Price,
                    children: t.usd_amount
                      ? (0, Mn.x)(t.usd_amount, Lt.CS)
                      : "--",
                  }),
                  (0, e.jsx)("td", { children: (0, e.jsx)(oo, { change: t }) }),
                  (0, e.jsxs)("td", {
                    className: ut.Currencies,
                    children: [
                      t.currency_count || 0,
                      !!t.country_count &&
                        (0, e.jsxs)("span", {
                          children: [" +", t.country_count, " country"],
                        }),
                    ],
                  }),
                  (0, e.jsx)("td", {
                    children: (0, e.jsx)(mn.p, { accountID: t.account }),
                  }),
                ],
              }),
              !!t.notes &&
                (0, e.jsx)("tr", {
                  className: ut.ChangeRow,
                  children: (0, e.jsx)("td", {
                    className: ut.Notes,
                    colSpan: 5,
                    children: t.notes,
                  }),
                }),
            ],
          });
        }
        function oo(s) {
          const { change: t } = s;
          if (!t.usd_amount)
            return (0, e.jsx)("span", {
              className: ut.NoChange,
              children: "no USD price",
            });
          if (t.first_published)
            return (0, e.jsx)("span", {
              className: ut.FirstPrice,
              children: "first published price",
            });
          if (!t.usd_previous)
            return (0, e.jsx)("span", {
              className: ut.NoChange,
              children: "previous USD price unknown",
            });
          if (t.usd_amount == t.usd_previous)
            return (0, e.jsx)("span", {
              className: ut.NoChange,
              children: "USD unchanged",
            });
          const n = t.usd_amount > t.usd_previous,
            r = Math.round(
              ((t.usd_amount - t.usd_previous) / t.usd_previous) * 100,
            );
          return (0, e.jsxs)("span", {
            className: n ? ut.Increase : ut.Decrease,
            children: [
              n ? "\u25B2" : "\u25BC",
              " ",
              Math.abs(r),
              "% from ",
              (0, Mn.x)(t.usd_previous, Lt.CS),
            ],
          });
        }
        var Es = i(73191),
          Or = i(14358);
        function io(s) {
          const { proposal: t, mapCurrentPrices: n, oGuideline: r } = s,
            { fnAcceptProposal: o } = Er(),
            [l, c] = (0, p.useState)(!1),
            [d, m] = (0, p.useState)(null),
            [x] = (0, _t.Gg)(t.packageid, Tn);
          return l
            ? (0, e.jsx)("div", {
                children: (0, e.jsx)(ns.t, {
                  string: "Accepting",
                  size: "small",
                  position: "center",
                }),
              })
            : (0, e.jsxs)("div", {
                className: Or.ActionsCtn,
                children: [
                  (0, e.jsxs)(S.$n, {
                    onClick: async () => {
                      c(!0),
                        o(t.packageid, t.partner_will_publish, t.proposal_key)
                          .then(m)
                          .finally(() => c(!1));
                    },
                    children: ["Publish Proposal ", d ? " (FORCE)" : ""],
                  }),
                  !!d &&
                    (0, e.jsxs)("div", {
                      children: [
                        "Publish failed with: ",
                        d,
                        ", publish again to bypass check",
                      ],
                    }),
                  (0, e.jsx)(S.$n, {
                    onClick: (f) => {
                      const h = new Array();
                      Ir(t).length > 0 && h.push("currency_missing");
                      const C = t.proposed_prices.base_amounts.find(
                          (X) => X.amount.currency_code == Lt.CS,
                        )?.amount.amount,
                        E = Lr(C, n, r, t);
                      (E.rgAboveThreshold.length > 0 ||
                        E.rgBelowThreshold.length > 0) &&
                        h.push("out_of_guideline"),
                        x && Br(x) && h.push("within_30_days"),
                        (0, Ls.pg)(
                          (0, e.jsx)(lo, { proposal: t, errors: h }),
                          (0, Gs.uX)(f),
                        );
                    },
                    children: "Reject...",
                  }),
                ],
              });
        }
        const Rr = new Map([
          ["within_30_days", "Within 30 Days of Release"],
          ["currency_missing", "Missing one or more currency"],
          ["out_of_guideline", "One or more currency out of expected range"],
        ]);
        function lo(s) {
          const { proposal: t, closeModal: n, errors: r } = s,
            [o, l] = (0, p.useState)(() => r),
            [c, d] = (0, p.useState)(""),
            { fnRejectProposal: m } = Er(),
            x = `Reject pricing proposal for package ${t.packageid}`,
            f = (0, Es.vs)();
          return f.bLoading
            ? (0, e.jsx)(Es.Hh, { state: f, strDialogTitle: x, closeModal: n })
            : (0, e.jsxs)(P.o0, {
                strTitle: x,
                strDescription:
                  "Select the appropriate reasons for rejecting this price proposal. Each will surface to the user in the reject email.",
                bDisableBackgroundDismiss: !0,
                onCancel: n,
                onOK: () => {
                  f.fnSetLoading(!0),
                    m(t.packageid, o, c)
                      .then((h) => {
                        h
                          ? f.fnSetSuccess(!0)
                          : (f.fnSetError(!0),
                            f.fnSetStrError(
                              "Failed to reject; check console for details",
                            ));
                      })
                      .catch((h) => {
                        f.fnSetError(!0),
                          f.fnSetStrError(
                            "Failed to reject; check console for details",
                          );
                      });
                },
                children: [
                  (0, e.jsx)(S.JU, { children: "Rejection type:" }),
                  Array.from(Rr.keys()).map((h) =>
                    (0, e.jsx)(
                      S.Yh,
                      {
                        checked: o.includes(h),
                        onChange: (C) => {
                          const E = o.filter((X) => X != h);
                          C && E.push(h), l(E);
                        },
                        label: Rr.get(h),
                      },
                      "check" + h,
                    ),
                  ),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)(S.JU, {
                    children:
                      "Optionally include custom message text in rejection email",
                  }),
                  (0, e.jsx)("textarea", {
                    onChange: (h) => d(h.target.value),
                    value: c,
                    className: Or.NotesField,
                  }),
                ],
              });
        }
        var vt = i(23708),
          Ut = i(80613),
          gt = i.n(Ut),
          Y = i(75245),
          Ks = i(35038);
        const Yc = 0,
          Xc = 1,
          Qc = 3,
          Jc = 4,
          Zc = 5,
          qc = 6,
          ed = 7,
          td = 8,
          sd = 9,
          nd = 10,
          rd = 11,
          ad = 12,
          od = 13,
          id = 14,
          ld = 15,
          cd = 16,
          dd = 17,
          ud = 18,
          pd = 19,
          md = 20,
          gd = 21,
          hd = 22,
          _d = 23,
          fd = 24,
          xd = 25,
          Sd = 26,
          Cd = 27,
          bd = 28,
          Ad = 29,
          vd = 30,
          yd = 31,
          jd = 32,
          Pd = 33,
          Ed = 34,
          Dd = 35,
          Td = 36,
          wd = 37,
          Id = 38,
          Md = 39,
          kd = 40,
          Ld = 41,
          Bd = 42,
          Nd = 43,
          Od = 44,
          Rd = 45,
          Fd = 46,
          Hd = 47,
          Ud = 48,
          zd = 49,
          Wd = 50,
          Gd = 51,
          Vd = 52,
          Kd = 53,
          $d = 54,
          Fr = 55,
          Yd = 56,
          Xd = 57,
          Qd = 58,
          Jd = 59,
          Zd = 60,
          qd = 61,
          eu = 62,
          tu = 63,
          su = 64,
          nu = 65,
          ru = 66,
          au = 67,
          ou = 68,
          iu = 69,
          lu = 70,
          cu = 71,
          du = 72,
          uu = 73,
          pu = 74,
          mu = 75,
          gu = 76,
          hu = 77,
          _u = 78,
          fu = 79,
          xu = 80,
          Su = 81,
          Cu = 82,
          bu = 83,
          Au = 84,
          vu = 85,
          yu = 86,
          ju = 87,
          Pu = 88,
          Eu = 89,
          Du = 90,
          Tu = 91,
          wu = 92,
          Iu = 93,
          Mu = 94,
          ku = 95,
          Lu = 96,
          Bu = 97,
          Nu = 98,
          Ou = 99,
          Ru = 100,
          Fu = 101,
          Hu = 102,
          Uu = 103,
          zu = 104,
          Wu = 105,
          Gu = 106,
          Vu = 107,
          Ku = 108,
          $u = 109,
          Yu = 110,
          Xu = 111,
          Qu = 112,
          Ju = 113,
          Zu = 0,
          qu = 101,
          ep = 102,
          tp = 103,
          sp = 104,
          np = 105,
          rp = 106,
          ap = 107,
          op = 108,
          ip = 109,
          lp = 110,
          cp = 111,
          dp = 112,
          up = 113,
          pp = 114,
          mp = 115,
          gp = 116,
          hp = 117,
          _p = 118,
          fp = 119,
          xp = 120,
          Sp = 121,
          Cp = 122,
          bp = 123,
          Ap = 124,
          vp = 125,
          yp = 126,
          jp = 127,
          Pp = 128,
          Ep = 129,
          Dp = 130,
          Tp = 131,
          wp = 132,
          Ip = 133,
          Mp = 134,
          kp = 201,
          Lp = 202,
          Bp = 203,
          Np = 204,
          Op = 205,
          Rp = 206,
          Fp = 207,
          Hp = 208,
          Up = 209,
          zp = 210,
          Wp = 211,
          Gp = 212,
          Vp = 213,
          Kp = 214,
          $p = 215,
          Yp = 216,
          Xp = 217,
          Qp = 301,
          Jp = 302,
          Zp = 303,
          qp = 304,
          em = 305,
          tm = 306,
          sm = 307,
          nm = 308,
          rm = 320,
          am = 321,
          om = 350,
          im = 351,
          lm = 352,
          cm = 353,
          dm = 354,
          um = 355,
          pm = 356,
          mm = 360,
          gm = 361,
          hm = 362,
          _m = 363,
          fm = 364,
          xm = 365,
          Sm = 370,
          Cm = 371,
          bm = 372,
          Am = 373,
          vm = 374,
          ym = 375,
          jm = 376,
          Pm = 380,
          Em = 381,
          Dm = 401,
          Tm = 402,
          wm = 403,
          Im = 404,
          Mm = 405,
          km = 406,
          Lm = 407,
          Bm = 408,
          Nm = 409,
          Om = 410,
          Rm = 411,
          Fm = 412,
          Hm = 413,
          Um = 414,
          zm = 415,
          Wm = 416,
          Gm = 417,
          Vm = 418,
          Km = 419,
          $m = 501,
          Ym = 601,
          Xm = 602,
          Qm = 603,
          Jm = 701,
          Zm = 702,
          qm = 703,
          eg = 704,
          tg = 705,
          sg = 706,
          ng = 707,
          rg = 708,
          ag = 709,
          og = 801,
          ig = 802,
          lg = 803,
          cg = 804,
          dg = 805,
          ug = 806,
          pg = 807,
          mg = 808,
          gg = 809,
          hg = 810,
          _g = 811,
          fg = 812,
          xg = 813,
          Sg = 814,
          Cg = 815,
          bg = 816,
          Ag = 901,
          vg = 902,
          yg = 903,
          jg = 904,
          Pg = 905,
          Eg = 906,
          Dg = 907,
          Tg = 908,
          wg = 909,
          Ig = 910,
          Mg = 911,
          kg = 912,
          Lg = 913,
          Bg = 914,
          Ng = 915,
          Og = 916,
          Rg = 917,
          Fg = 918,
          Hg = 919,
          Hr = 920,
          Ug = 921,
          zg = 922,
          Wg = 923,
          Gg = 924,
          Vg = 925,
          Kg = 926,
          $g = 927,
          Yg = 928,
          Xg = 929,
          Qg = 930,
          Jg = 931,
          Zg = 932,
          qg = 933,
          eh = 934,
          th = 935,
          sh = 936,
          nh = 937,
          rh = 938,
          ah = 939,
          oh = 940,
          ih = 941,
          lh = 942,
          ch = 943,
          dh = 944,
          uh = 945,
          ph = 1001,
          mh = 1002,
          gh = 1003,
          hh = 1004,
          _h = 1005,
          fh = 1006,
          xh = 1007,
          Sh = 1101,
          Ch = 1201,
          bh = 1202,
          Ah = 1203,
          vh = 1301,
          yh = 1500,
          jh = 1600,
          Ph = 1650,
          Eh = 1700,
          Dh = 1701,
          Th = 1702,
          wh = 1703;
        function Ih(s) {
          return "unknown EHelpRequestType ( " + s + " )";
        }
        function Mh(s) {
          return "unknown EHelpRequestState ( " + s + " )";
        }
        function kh(s) {
          return "unknown EHelpRequestReviewState ( " + s + " )";
        }
        function Lh(s) {
          return "unknown EHelpRequestStatsRollupInterval ( " + s + " )";
        }
        function Bh(s) {
          return "unknown EHelpRequestStatsResponderType ( " + s + " )";
        }
        function Nh(s) {
          return "unknown EHelpIssue ( " + s + " )";
        }
        function Oh(s) {
          return "unknown EHelpRequestEscalationLevel ( " + s + " )";
        }
        function Rh(s) {
          return "unknown EHelpRequestMsgType ( " + s + " )";
        }
        function Fh(s) {
          return "unknown EHelpRequestAction ( " + s + " )";
        }
        function Hh(s) {
          return "unknown EHelpRequestSortOrder ( " + s + " )";
        }
        function Uh(s) {
          return "unknown EHelpRequestPOPType ( " + s + " )";
        }
        function zh(s) {
          return "unknown EAnnouncementPlacement ( " + s + " )";
        }
        function Wh(s) {
          return "unknown ETickerCategoryLanguageRule ( " + s + " )";
        }
        function Gh(s) {
          return "unknown EPreapprovalResolution ( " + s + " )";
        }
        function Vh(s) {
          return "unknown EHelpRequestFeedbackCategory ( " + s + " )";
        }
        function Kh(s) {
          return "unknown EHelpRequestFeedbackTargetType ( " + s + " )";
        }
        function $h(s) {
          return "unknown EFeedbackState ( " + s + " )";
        }
        function Yh(s) {
          return "unknown ESupportActionSource ( " + s + " )";
        }
        function Xh(s) {
          return "unknown ERefundSupportAction ( " + s + " )";
        }
        class yt extends Ut.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              yt.prototype.quicktext_id || Y.Sg(yt.M()),
              Ut.Message.initialize(this, t, 0, -1, [6, 10, 11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    quicktext_id: {
                      n: 1,
                      br: Y.qM.readUint32,
                      bw: Y.gp.writeUint32,
                    },
                    requires_update: {
                      n: 2,
                      br: Y.qM.readBool,
                      bw: Y.gp.writeBool,
                    },
                    title: { n: 3, br: Y.qM.readString, bw: Y.gp.writeString },
                    hidden: { n: 4, br: Y.qM.readBool, bw: Y.gp.writeBool },
                    approved: { n: 5, br: Y.qM.readBool, bw: Y.gp.writeBool },
                    help_request_types: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: Y.qM.readUint32,
                      pbr: Y.qM.readPackedUint32,
                      bw: Y.gp.writeRepeatedUint32,
                    },
                    content: { n: 7, c: St },
                    button_text: {
                      n: 8,
                      br: Y.qM.readString,
                      bw: Y.gp.writeString,
                    },
                    replacement: {
                      n: 9,
                      br: Y.qM.readBool,
                      bw: Y.gp.writeBool,
                    },
                    payment_methods: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: Y.qM.readUint32,
                      pbr: Y.qM.readPackedUint32,
                      bw: Y.gp.writeRepeatedUint32,
                    },
                    appids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: Y.qM.readUint32,
                      pbr: Y.qM.readPackedUint32,
                      bw: Y.gp.writeRepeatedUint32,
                    },
                    escalation_level: {
                      n: 12,
                      br: Y.qM.readEnum,
                      bw: Y.gp.writeEnum,
                    },
                    partner_only: {
                      n: 13,
                      br: Y.qM.readBool,
                      bw: Y.gp.writeBool,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = Y.w0(yt.M())), yt.sm_mbf;
          }
          toObject(t = !1) {
            return yt.toObject(t, this);
          }
          static toObject(t, n) {
            return Y.BT(yt.M(), t, n);
          }
          static fromObject(t) {
            return Y.Uq(yt.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (gt().BinaryReader)(t),
              r = new yt();
            return yt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Y.zj(yt.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (gt().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Y.i0(yt.M(), t, n);
          }
          serializeBase64String() {
            var t = new (gt().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickText";
          }
        }
        class St extends Ut.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              St.prototype.content || Y.Sg(St.M()),
              Ut.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    content: {
                      n: 1,
                      br: Y.qM.readString,
                      bw: Y.gp.writeString,
                    },
                    major_revision: {
                      n: 2,
                      br: Y.qM.readUint32,
                      bw: Y.gp.writeUint32,
                    },
                    minor_revision: {
                      n: 3,
                      br: Y.qM.readUint32,
                      bw: Y.gp.writeUint32,
                    },
                    author: { n: 4, br: Y.qM.readUint32, bw: Y.gp.writeUint32 },
                    last_update: {
                      n: 5,
                      br: Y.qM.readUint32,
                      bw: Y.gp.writeUint32,
                    },
                    language: { n: 6, br: Y.qM.readInt32, bw: Y.gp.writeInt32 },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = Y.w0(St.M())), St.sm_mbf;
          }
          toObject(t = !1) {
            return St.toObject(t, this);
          }
          static toObject(t, n) {
            return Y.BT(St.M(), t, n);
          }
          static fromObject(t) {
            return Y.Uq(St.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (gt().BinaryReader)(t),
              r = new St();
            return St.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Y.zj(St.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (gt().BinaryWriter)();
            return St.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Y.i0(St.M(), t, n);
          }
          serializeBase64String() {
            var t = new (gt().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickTextContent";
          }
        }
        class jt extends Ut.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              jt.prototype.quicktext_id || Y.Sg(jt.M()),
              Ut.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    quicktext_id: {
                      n: 1,
                      br: Y.qM.readUint32,
                      bw: Y.gp.writeUint32,
                    },
                    language: {
                      n: 2,
                      br: Y.qM.readString,
                      bw: Y.gp.writeString,
                    },
                    from_sql: { n: 3, br: Y.qM.readBool, bw: Y.gp.writeBool },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = Y.w0(jt.M())), jt.sm_mbf;
          }
          toObject(t = !1) {
            return jt.toObject(t, this);
          }
          static toObject(t, n) {
            return Y.BT(jt.M(), t, n);
          }
          static fromObject(t) {
            return Y.Uq(jt.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (gt().BinaryReader)(t),
              r = new jt();
            return jt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Y.zj(jt.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (gt().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Y.i0(jt.M(), t, n);
          }
          serializeBase64String() {
            var t = new (gt().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Request";
          }
        }
        class Pt extends Ut.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Pt.prototype.quicktext || Y.Sg(Pt.M()),
              Ut.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: {
                    quicktext: { n: 1, c: yt },
                    english_reference: { n: 2, c: St },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = Y.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(t = !1) {
            return Pt.toObject(t, this);
          }
          static toObject(t, n) {
            return Y.BT(Pt.M(), t, n);
          }
          static fromObject(t) {
            return Y.Uq(Pt.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (gt().BinaryReader)(t),
              r = new Pt();
            return Pt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Y.zj(Pt.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (gt().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Y.i0(Pt.M(), t, n);
          }
          serializeBase64String() {
            var t = new (gt().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Response";
          }
        }
        class Et extends Ut.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Et.prototype.appid || Y.Sg(Et.M()),
              Ut.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    appid: { n: 1, br: Y.qM.readUint32, bw: Y.gp.writeUint32 },
                    log_type: {
                      n: 2,
                      br: Y.qM.readString,
                      bw: Y.gp.writeString,
                    },
                    version_string: {
                      n: 3,
                      br: Y.qM.readString,
                      bw: Y.gp.writeString,
                    },
                    log_contents: {
                      n: 4,
                      br: Y.qM.readString,
                      bw: Y.gp.writeString,
                    },
                    request_id: {
                      n: 5,
                      br: Y.qM.readUint64String,
                      bw: Y.gp.writeUint64String,
                    },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = Y.w0(Et.M())), Et.sm_mbf;
          }
          toObject(t = !1) {
            return Et.toObject(t, this);
          }
          static toObject(t, n) {
            return Y.BT(Et.M(), t, n);
          }
          static fromObject(t) {
            return Y.Uq(Et.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (gt().BinaryReader)(t),
              r = new Et();
            return Et.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Y.zj(Et.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (gt().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Y.i0(Et.M(), t, n);
          }
          serializeBase64String() {
            var t = new (gt().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Request";
          }
        }
        class Dt extends Ut.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Dt.prototype.id || Y.Sg(Dt.M()),
              Ut.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
                  fields: {
                    id: {
                      n: 1,
                      br: Y.qM.readUint64String,
                      bw: Y.gp.writeUint64String,
                    },
                  },
                }),
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = Y.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(t = !1) {
            return Dt.toObject(t, this);
          }
          static toObject(t, n) {
            return Y.BT(Dt.M(), t, n);
          }
          static fromObject(t) {
            return Y.Uq(Dt.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (gt().BinaryReader)(t),
              r = new Dt();
            return Dt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Y.zj(Dt.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (gt().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Y.i0(Dt.M(), t, n);
          }
          serializeBase64String() {
            var t = new (gt().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Response";
          }
        }
        class Tt extends Ut.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Tt.prototype.appid || Y.Sg(Tt.M()),
              Ut.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    appid: { n: 1, br: Y.qM.readUint32, bw: Y.gp.writeUint32 },
                  },
                }),
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = Y.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(t = !1) {
            return Tt.toObject(t, this);
          }
          static toObject(t, n) {
            return Y.BT(Tt.M(), t, n);
          }
          static fromObject(t) {
            return Y.Uq(Tt.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (gt().BinaryReader)(t),
              r = new Tt();
            return Tt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Y.zj(Tt.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (gt().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Y.i0(Tt.M(), t, n);
          }
          serializeBase64String() {
            var t = new (gt().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Request";
          }
        }
        class wt extends Ut.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              wt.prototype.request_id || Y.Sg(wt.M()),
              Ut.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    request_id: {
                      n: 1,
                      br: Y.qM.readUint64String,
                      bw: Y.gp.writeUint64String,
                    },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = Y.w0(wt.M())), wt.sm_mbf;
          }
          toObject(t = !1) {
            return wt.toObject(t, this);
          }
          static toObject(t, n) {
            return Y.BT(wt.M(), t, n);
          }
          static fromObject(t) {
            return Y.Uq(wt.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (gt().BinaryReader)(t),
              r = new wt();
            return wt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Y.zj(wt.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (gt().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Y.i0(wt.M(), t, n);
          }
          serializeBase64String() {
            var t = new (gt().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Response";
          }
        }
        var Ur;
        ((s) => {
          function t(n, r, o) {
            return n.SendMsg(
              "SupportAgents.GetQuickText#1",
              (0, Ks.I8)(jt, r, o),
              Pt,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          s.GetQuickText = t;
        })(Ur || (Ur = {}));
        var zr;
        ((s) => {
          function t(r, o, l) {
            return r.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, Ks.I8)(Et, o, l),
              Dt,
              { ePrivilege: 1 },
            );
          }
          s.UploadUserApplicationLog = t;
          function n(r, o, l) {
            return r.SendMsg(
              "HelpRequestLogs.GetApplicationLogDemand#1",
              (0, Ks.I8)(Tt, o, l),
              wt,
              { ePrivilege: 1 },
            );
          }
          s.GetApplicationLogDemand = n;
        })(zr || (zr = {}));
        var co = i(75233),
          Ns = i(51614);
        function uo(s, t, n) {
          return (0, hs.I)({
            queryKey: ["PartnerTickets", s, t, n],
            queryFn: async () => {
              const r = { nPublisherId: s, eHelpIssue: t, eHelpRequestType: n };
              return (
                await Yt().get(
                  `${be.TS.PARTNER_BASE_URL}admin/ajaxfetchsupportticketforpartner`,
                  { params: r, withCredentials: !0 },
                )
              ).data.tickets;
            },
          });
        }
        function po(s, t, n, r, o) {
          const l = (0, co.jE)();
          return (0, Ns.n)({
            mutationFn: async (c) => {
              o.fnSetLoading(!0);
              const d = new FormData();
              d.append("help_issue", "" + n),
                d.append("help_request_type", "" + r),
                d.append("appid", "" + c.appid),
                d.append("initial_text", c.strRequestTitle),
                d.append("issue_text", c.strRequestBody),
                d.append("sessionid", (0, Xt.KC)()),
                d.append("steamid", s),
                d.append("publisherid_selected", "" + t);
              const m = await Yt().post(
                `${be.TS.PARTNER_BASE_URL}admin/ajaxcreatesupportticketforrequest/`,
                d,
              );
              if (m?.data?.success != $t.R)
                throw (
                  (m?.data?.message && o.fnSetStrError(m?.data?.message),
                  m?.data?.message || "create ticket failed generic")
                );
            },
            onSuccess() {
              o.fnSetSuccess(!0);
            },
            onError() {
              o.fnSetError(!0);
            },
            onSettled() {
              l.invalidateQueries({ queryKey: ["PartnerTickets", t, n, r] });
            },
          });
        }
        var kn = i(56330),
          Wr = i.n(kn),
          mo = i(77428),
          go = i.n(mo),
          ho = i(55298);
        function _o(s) {
          const { partnerID: t, setTicketCount: n } = s,
            { data: r } = uo(t, Hr, Fr),
            [o, l] = (0, p.useState)(2);
          return (
            (0, p.useEffect)(() => {
              r?.length > 0 && n(r?.length);
            }, [r, n]),
            !r || r.length == 0
              ? null
              : (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("br", {}),
                    (0, e.jsxs)("h3", {
                      children: ["Tickets ", r.length, ":"],
                    }),
                    r
                      .slice(0, o)
                      .map((c) =>
                        (0, e.jsx)(xo, { helpReq: c }, c.help_requestid),
                      ),
                    o < r.length &&
                      (0, e.jsxs)("a", {
                        href: "#",
                        onClick: () => l(r.length),
                        children: ["Show all ", r.length, " Tickets"],
                      }),
                  ],
                })
          );
        }
        function fo(s) {
          return s.startsWith("HT") && s.length === 14
            ? `${s.slice(0, 2)}-${s.slice(2, 6)}-${s.slice(6, 10)}-${s.slice(10)}`
            : s;
        }
        function xo(s) {
          const { helpReq: t } = s,
            n = (0, ho.qh)();
          return n
            ? (0, e.jsxs)("div", {
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, D.A)({
                      [go().ValveAccountTicket]:
                        n.findIndex((r) => r.id === t.accountid) >= 0,
                    }),
                    children: [
                      n.findIndex((r) => r.id == t.assigned_agent_accountid) >=
                      0
                        ? (0, e.jsxs)(e.Fragment, {
                            children: [
                              "Owned By: ",
                              (0, e.jsx)(mn.p, {
                                accountID: t.assigned_agent_accountid,
                              }),
                              ",",
                            ],
                          })
                        : (0, e.jsxs)(e.Fragment, {
                            children: [
                              "Created by: ",
                              (0, e.jsx)(mn.p, { accountID: t.accountid }),
                              ",",
                            ],
                          }),
                      "Created on ",
                      (0, a.TW)(t.time_created),
                    ],
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("p", { children: t.issue_text }),
                  (0, e.jsx)("div", {}),
                  !!(
                    t.time_last_response &&
                    t.time_last_response > t.time_created
                  ) &&
                    (0, e.jsxs)("div", {
                      children: [
                        "Last Update ",
                        (0, a.TW)(t.time_last_response),
                      ],
                    }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("a", {
                    href: `${be.TS.HELP_BASE_URL}en/ticketmaster/ticket/${fo(t.reference_code)}`,
                    target: "_blank",
                    children: "Open Ticket",
                  }),
                ],
              })
            : (0, e.jsx)(ns.t, { size: "small" });
        }
        function So(s) {
          const {
              nAccountIDProposer: t,
              packageID: n,
              mapPartnerPaidByPackage: r,
            } = s,
            o = r.get(n);
          return o
            ? (0, e.jsx)(S.$n, {
                onClick: (l) =>
                  (0, Ls.pg)(
                    (0, e.jsx)(Co, {
                      nAccountIDProposer: t,
                      packageID: n,
                      partnerID: o[0],
                    }),
                    (0, Gs.uX)(l),
                  ),
                children: "Create Ticket",
              })
            : (0, e.jsx)("div", {
                className: kn.WarningStylesBackground,
                children:
                  "Warning: Package isn't associated with a partner... Cannot create ticket",
              });
        }
        const Gr = {};
        function Co(s) {
          const {
              partnerID: t,
              packageID: n,
              closeModal: r,
              nAccountIDProposer: o,
            } = s,
            [l] = (0, Nr.UA)(t),
            [c] = (0, _t.Gg)(n, Gr),
            d = (0, p.useMemo)(
              () => Qe.b.InitFromAccountID(o).ConvertTo64BitString(),
              [o],
            ),
            [m, x] = (0, p.useState)(() => c?.GetAppID() || 0),
            [f] = (0, _t.t7)(m, Gr),
            [h, C] = (0, p.useState)(`Question about pricing for package ${n}`),
            [E, X] = (0, p.useState)("");
          (0, p.useEffect)(() => {
            c && m == 0 && x(c.GetAppID());
          }, [c, m]);
          const xe = (0, Es.vs)(),
            q = po(d, t, Hr, Fr, xe);
          return xe.bLoading
            ? (0, e.jsx)(Es.Hh, {
                state: xe,
                strDialogTitle: "Create Ticket for Partner",
                closeModal: r,
              })
            : (0, e.jsxs)(P.o0, {
                strTitle: "Create Ticket for Partner",
                strDescription: `Create a pricing ticket for partner ${l?.name} (${t}) for Package ${n}. App ${f?.GetName() || ""} with ${m}. Please update ticket title and body`,
                bOKDisabled: !m || h.trim().length == 0 || E.trim().length == 0,
                onOK: () =>
                  q.mutate({ appid: m, strRequestTitle: h, strRequestBody: E }),
                bAllowFullSize: !0,
                onCancel: r,
                bDisableBackgroundDismiss: E.trim().length > 0,
                children: [
                  (0, e.jsx)(S.pd, {
                    type: "text",
                    label: "Ticket Title",
                    placeholder: "Enter Ticket Title",
                    value: h,
                    onChange: (V) => C(V.currentTarget.value || ""),
                  }),
                  (0, e.jsx)(S.JU, { children: "Enter Ticket Body" }),
                  (0, e.jsx)("textarea", {
                    value: E,
                    onChange: (V) => X(V.currentTarget.value),
                    cols: 80,
                    rows: 20,
                  }),
                  (0, e.jsx)(S.pd, {
                    type: "number",
                    label: "AppID to Associate with Ticket",
                    value: m,
                    onChange: (V) =>
                      x(Number.parseInt(V.currentTarget.value) || 0),
                  }),
                ],
              });
        }
        var bo = i(84346);
        function Vr(s) {
          const {
              proposal: t,
              mapPartnerPaidByPackage: n,
              mapPriceChanges: r,
            } = s,
            [o] = (0, _t.Gg)(t.packageid, Tn),
            [l] = (0, _t.Gg)(o?.GetIncludedAppIDsOrSelf()?.[0], Tn),
            c = `${be.TS.PARTNER_BASE_URL}store/packagelanding/${t.packageid}`;
          return (0, e.jsxs)("div", {
            className: (0, D.A)(vt.PackageInfoColumn, Ve.PackageInfoColumn),
            children: [
              (0, e.jsxs)("div", {
                className: vt.PackageName,
                children: [
                  o
                    ? (0, e.jsxs)("span", {
                        children: [
                          (0, e.jsx)("a", { href: c, children: o.GetName() }),
                          " ",
                          `(${t.packageid})`,
                        ],
                      })
                    : (0, e.jsx)("a", {
                        href: c,
                        children: `Package ${t.packageid}`,
                      }),
                  l?.GetAppType() == Vs.uE._i &&
                    (0, e.jsx)("span", { children: " (DLC)" }),
                  l?.GetAppType() == Vs.uE.RA &&
                    (0, e.jsx)("span", { children: " (MOD)" }),
                  l?.GetAppType() == Vs.uE.Hk &&
                    (0, e.jsx)("span", { children: " (HARDWARE)" }),
                ],
              }),
              (0, e.jsx)("div", {
                className: vt.ReleaseDate,
                children:
                  o && o.BIsVisible()
                    ? "Release On: " +
                      (o.GetReleaseDateRTime()
                        ? (0, a.TW)(o.GetReleaseDateRTime())
                        : " No Release date")
                    : "Store Visibility: Hidden",
              }),
              (0, e.jsx)(to, {
                packageID: t.packageid,
                priceChanges: r.get(t.packageid),
              }),
              (0, e.jsx)("div", {
                className: vt.SubmissionBy,
                children: (0, e.jsx)(mn.p, { accountID: t.account }),
              }),
              (0, e.jsx)(io, { ...s }),
              (0, e.jsx)(So, {
                nAccountIDProposer: t.account_proposer,
                packageID: t.packageid,
                mapPartnerPaidByPackage: n,
              }),
              (0, e.jsx)(Ao, {
                packageID: t.packageid,
                mapPartnerPaidByPackage: n,
              }),
            ],
          });
        }
        function Ao(s) {
          const { packageID: t, mapPartnerPaidByPackage: n } = s,
            r = n.get(t);
          return r
            ? (0, e.jsx)("div", {
                children: r.map((o) =>
                  (0, e.jsx)(vo, { partnerID: o }, "partner" + o),
                ),
              })
            : null;
        }
        function vo(s) {
          const { partnerID: t } = s,
            [n] = (0, Nr.UA)(t);
          return n
            ? (0, e.jsxs)("a", {
                href: `${be.TS.PARTNER_BASE_URL}admin/reviewpricesubmissions/?publisherID=${n.partnerid}`,
                children: [n.name, " (", n.partnerid, ")"],
              })
            : null;
        }
        function Kr(s) {
          const { amountInCents: t, className: n } = s;
          return t
            ? (0, e.jsx)("div", { className: n, children: is(t) })
            : (0, e.jsx)("div", { className: n });
        }
        function is(s) {
          return s
            ? (s / 100).toLocaleString((0, bo.J)(), {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : "";
        }
        function $r(s) {
          return (0, e.jsx)("thead", {
            children: (0, e.jsxs)("tr", {
              children: [
                wn.map((t) =>
                  (0, e.jsx)(
                    "td",
                    {
                      children: (0, e.jsx)(oe.he, {
                        toolTipContent: (0, ms.Ug)(t),
                        children: (0, ms.M1)(t),
                      }),
                    },
                    "header" + t,
                  ),
                ),
                In.map((t) =>
                  (0, e.jsx)(
                    "td",
                    {
                      children: (0, e.jsx)(oe.he, {
                        toolTipContent: (0, Qt.j4)(t),
                        children: (0, Qt.de)(t),
                      }),
                    },
                    "header_region" + t,
                  ),
                ),
              ],
            }),
          });
        }
        function Yr(s) {
          const { proposal: t, oGuideline: n, mapCurrentPrices: r } = s,
            o = r.get(t.packageid),
            l = t.proposed_prices.base_amounts.find(
              (c) => c.amount.currency_code == Lt.CS,
            )?.amount.amount;
          return (0, e.jsxs)("tr", {
            children: [
              wn.map((c) => {
                const d =
                  n.GetRecommendPrice(l, c) ||
                  n.GetScaledRecommendedPrice(l, c);
                return (0, e.jsx)(
                  yo,
                  { eCurrencyCode: c, proposal: t, curPrice: o, guidePrice: d },
                  t.packageid + "-" + c,
                );
              }),
              In.map((c) => {
                const d = (0, Qt.bS)(c),
                  m =
                    n.GetRecommendPrice(l, d, c) ||
                    n.GetScaledRecommendedPrice(l, d, c);
                return (0, e.jsx)(
                  jo,
                  {
                    eCurrencyCode: d,
                    eRegionCode: c,
                    proposal: t,
                    curPrice: o,
                    guidePrice: m,
                  },
                  t.packageid + "-" + c,
                );
              }),
            ],
          });
        }
        function yo(s) {
          const {
              eCurrencyCode: t,
              curPrice: n,
              proposal: r,
              guidePrice: o,
            } = s,
            l = r.proposed_prices.base_amounts.find(
              (d) => d.amount.currency_code == t,
            ),
            c = n?.current_costs?.base_amounts.find(
              (d) => d.currency_code == t,
            );
          return (0, e.jsx)(Xr, {
            proposed: l,
            originalAmount: c,
            guidePrice: o,
          });
        }
        function jo(s) {
          const { eRegionCode: t, curPrice: n, proposal: r, guidePrice: o } = s,
            l = (0, Qt.de)(t),
            c = r.proposed_prices.region_amounts.find((m) => m.name == l),
            d = n?.current_costs?.region_amounts.find((m) => m.region == l);
          return (0, e.jsx)(Xr, {
            proposed: c,
            originalAmount: d?.amount,
            guidePrice: o,
          });
        }
        function Xr(s) {
          const { proposed: t, originalAmount: n, guidePrice: r } = s;
          let o, l;
          if (t)
            if (r && r.price > t.amount.amount) {
              o = vt.outofmatrixlower;
              const c = is(r.price),
                d = Math.floor(100 - (t.amount.amount / r.price) * 100);
              l = `Suggested price ${c} - ${d}% \u25BC`;
            } else if (r && r.price < t.amount.amount) {
              o = vt.outofmatrix;
              const c = is(r.price),
                d = Math.floor((t.amount.amount / r.price) * 100 - 100);
              l = `Suggested price ${c} - ${d}% \u25B2`;
            } else
              n
                ? n.amount > t.amount.amount
                  ? (o = vt.priceChangedLower)
                  : n.amount < t.amount.amount && (o = vt.priceChangedHigher)
                : (o = vt.priceChangedNew);
          return (0, e.jsxs)("td", {
            className: vt.FullCurrencyColumn,
            children: [
              (0, e.jsx)(oe.he, {
                toolTipContent: l,
                children: (0, e.jsx)(Kr, {
                  className: o,
                  amountInCents: t?.amount.amount,
                }),
              }),
              n?.amount != t?.amount.amount &&
                (0, e.jsx)(Kr, { amountInCents: n?.amount }),
              !n && (0, e.jsx)("div", { children: "--" }),
            ],
          });
        }
        const Po = 2e4;
        function Eo(s) {
          const {
              rgProposals: t,
              oGuideline: n,
              mapCurrentPrices: r,
              mapPartnerPaidByPackage: o,
              mapPriceChanges: l,
            } = s,
            [c, d] = (0, p.useState)(!1),
            [m, x] = (0, p.useState)(!0);
          return (0, e.jsxs)("div", {
            className: (0, D.A)(Ve.PriceDeltaCtn),
            children: [
              (0, e.jsxs)(Dr.qx, {
                title: "Reasons Auto-Publish is blocked",
                children: [
                  (0, e.jsx)("p", {
                    children:
                      "This page will surface the reason why the package did not auto-publish and may require work to correct",
                  }),
                  (0, e.jsxs)("ol", {
                    className: Ve.Legend,
                    children: [
                      (0, e.jsx)("li", {
                        className: Ve.Missing,
                        children: "Missing Currencies",
                      }),
                      (0, e.jsx)("li", {
                        className: Ve.Outside,
                        children:
                          "Outside of acceptable threshold (more than 125% above or 50% below the guideline)",
                      }),
                      (0, e.jsx)("li", {
                        className: Ve.CustomUsd,
                        children:
                          "USD Price doesn't match any guideline price point",
                      }),
                      (0, e.jsx)("li", {
                        className: Ve.AboveAutoPublish,
                        children: "USD Price above 200$ USD",
                      }),
                      (0, e.jsx)("li", {
                        className: Ve.CloseToLaunch,
                        children:
                          "Raising Price during 30 days during launch window",
                      }),
                      (0, e.jsx)("li", {
                        className: Ve.CountrySpecific,
                        children: "Has Country specific pricing",
                      }),
                    ],
                  }),
                  (0, e.jsxs)("p", {
                    children: [
                      "You can filter the list by choosing ",
                      (0, e.jsx)("a", {
                        href: `${be.TS.PARTNER_BASE_URL}admin/reviewpricesubmissions/?myPartners=1`,
                        children: "my partners",
                      }),
                      " view",
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(S.Yh, {
                label: "Show All Price Comparison Rows",
                tooltip:
                  "Displays the price comparison rows for all of the section below.",
                checked: c,
                onChange: d,
              }),
              (0, e.jsx)(S.Yh, {
                label: "Show Prices with Open Tickets",
                tooltip:
                  "Displays the price comparison rows for those with open tickets against them.",
                checked: m,
                onChange: x,
              }),
              (0, e.jsx)("div", {
                className: (0, D.A)(Ve.RowCtn),
                children: (0, e.jsx)("div", {
                  className: Ve.PackageInfoColumn,
                  children: "Package Info",
                }),
              }),
              t.map((f) =>
                (0, e.jsx)(
                  "div",
                  {
                    children: (0, e.jsx)(Do, {
                      oGuideline: n,
                      proposal: f,
                      mapCurrentPrices: r,
                      mapPartnerPaidByPackage: o,
                      mapPriceChanges: l,
                      bForceShowComparisonRows: c,
                      bShowWithOpenTickets: m,
                    }),
                  },
                  "delta_" + f.packageid,
                ),
              ),
            ],
          });
        }
        function Do(s) {
          const { bShowWithOpenTickets: t } = s,
            [n, r] = (0, p.useState)(0);
          return n > 0 && !t
            ? null
            : (0, e.jsxs)("div", {
                className: Ve.ProposalCtn,
                children: [
                  (0, e.jsxs)("div", {
                    className: Ve.RowCtn,
                    children: [
                      (0, e.jsx)(Vr, { ...s }),
                      (0, e.jsx)(To, { ...s, setOpenTicketCount: r }),
                      (0, e.jsx)(No, { ...s }),
                    ],
                  }),
                  (0, e.jsx)(Ro, { ...s }),
                ],
              });
        }
        function To(s) {
          const { proposal: t, setOpenTicketCount: n } = s,
            r = s.mapPartnerPaidByPackage.get(t.packageid)?.[0] || 0;
          return (0, e.jsxs)("div", {
            className: Ve.FailuresCtn,
            children: [
              (0, e.jsx)(wo, { ...s }),
              (0, e.jsx)("div", {
                className: Ve.SectionHeader,
                children: "Web Auto-Approval Checks",
              }),
              (0, e.jsx)(Mo, { ...s }),
              (0, e.jsx)(ko, { ...s }),
              (0, e.jsx)(Oo, { ...s }),
              (0, e.jsx)(Lo, { ...s }),
              (0, e.jsx)(Io, { ...s }),
              (0, e.jsx)(_o, { partnerID: r, setTicketCount: n }),
            ],
          });
        }
        function wo(s) {
          const { proposal: t } = s,
            n = t.auto_approval_state || Tr.None,
            r = Za[n] || `Unknown (${n})`;
          return (0, e.jsxs)("div", {
            className: Ve.AutoApprovalCtn,
            children: [
              (0, e.jsx)("div", {
                className: Ve.SectionHeader,
                children: "Server Auto-Approval Checks",
              }),
              (0, e.jsx)("div", { className: Ve.Title, children: r }),
              !!t.auto_approval_notes &&
                (0, e.jsxs)("div", {
                  className: Ve.Notes,
                  children: ["- ", t.auto_approval_notes],
                }),
            ],
          });
        }
        function Io(s) {
          const { proposal: t, mapCurrentPrices: n } = s,
            r = t.proposed_prices.base_amounts.find(
              (l) => l.amount.currency_code == Lt.CS,
            )?.amount.amount,
            o = n
              .get(t.packageid)
              ?.current_costs.base_amounts.find(
                (l) => l.currency_code == Lt.CS,
              )?.amount;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              r > Po &&
                (0, e.jsxs)("div", {
                  className: Ve.AboveAutoPublish,
                  children: [
                    "USD Price $",
                    is(r),
                    " is above $200 USD Threshold",
                  ],
                }),
              !!(o && r > 2 * o) &&
                (0, e.jsxs)("div", {
                  className: Ve.AboveAutoPublish,
                  children: [
                    "USD price $",
                    is(r),
                    " is more than twice existing USD Price $",
                    is(o),
                  ],
                }),
            ],
          });
        }
        function Mo(s) {
          const { proposal: t } = s,
            n = (0, p.useMemo)(() => Ir(t), [t]);
          return n?.length > 0
            ? (0, e.jsxs)("div", {
                className: Ve.MissingCurrency,
                children: [
                  (0, e.jsxs)("div", {
                    className: Ve.Title,
                    children: ["Missing ", n.length, " currencies: "],
                  }),
                  n.map(ms.t_).join(", "),
                ],
              })
            : null;
        }
        function ko(s) {
          const { proposal: t } = s,
            n = (0, p.useMemo)(() => qa(t), [t]);
          return n?.length > 0
            ? (0, e.jsxs)("div", {
                className: Ve.MissingCurrency,
                children: [
                  (0, e.jsxs)("div", {
                    className: Ve.Title,
                    children: ["Unexpected ", n.length, " currencies: "],
                  }),
                  n.join(", "),
                ],
              })
            : null;
        }
        function Lo(s) {
          const { proposal: t, oGuideline: n } = s,
            r = t.proposed_prices.base_amounts.find(
              (l) => l.amount.currency_code == Lt.CS,
            )?.amount.amount,
            o = n.GetRecommendPrice(r, Lt.CS);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !o &&
                (0, e.jsxs)("div", {
                  className: Ve.MatrixGap,
                  children: [
                    "$",
                    is(r),
                    " USD Price doesn't align with any matrix price point. Will compare proposal to scaled guideline.",
                  ],
                }),
              (0, e.jsx)(Bo, { ...s, USDPriceCents: r }),
            ],
          });
        }
        function Qr(s) {
          const { thresholdData: t, strDirection: n } = s;
          let r = null;
          return (
            t.nOriginalPrice == t.nProposedPrice && (r = Ve.EqualPrices),
            (0, e.jsxs)("tr", {
              className: Ve.ThresholdRow,
              children: [
                (0, e.jsx)("td", {
                  className: Ve.CurrencyName,
                  children: t.strCurrency,
                }),
                (0, e.jsx)("td", {
                  className: (0, D.A)(Ve.OriginalPrice, r),
                  children: t.nOriginalPrice ? `${is(t.nOriginalPrice)}` : "--",
                }),
                (0, e.jsx)("td", {
                  className: (0, D.A)(Ve.ProposedPrice, r),
                  children: `${is(t.nProposedPrice)}`,
                }),
                (0, e.jsx)("td", {
                  className: Ve.RecommendedPrice,
                  children: `${is(t.nGuidancePrice)}`,
                }),
                (0, e.jsx)("td", {
                  className: Ve.PercentDiff,
                  children: `${t.nPercent}% ${n}`,
                }),
              ],
            })
          );
        }
        function Jr(s) {
          const { strGuidanceMessage: t, strDirection: n } = s;
          return (0, e.jsxs)("thead", {
            children: [
              (0, e.jsx)("tr", {
                children: (0, e.jsxs)("td", {
                  colSpan: 5,
                  className: (0, D.A)(
                    Ve.WarningTitle,
                    n == "above" ? Ve.WarningAbove : Ve.WarningBelow,
                  ),
                  children: [
                    (0, e.jsx)("b", {
                      children: n == "above" ? "\u25B2" : "\u25BC",
                    }),
                    " ",
                    t,
                  ],
                }),
              }),
              (0, e.jsxs)("tr", {
                className: (0, D.A)(Ve.ThresholdRow, Ve.ThresholdHeader),
                children: [
                  (0, e.jsx)("td", {
                    className: Ve.CurrencyName,
                    children: "Currency",
                  }),
                  (0, e.jsx)("td", {
                    className: Ve.OriginalPrice,
                    children: "Current",
                  }),
                  (0, e.jsx)("td", {
                    className: Ve.ProposedPrice,
                    children: "Proposed",
                  }),
                  (0, e.jsx)("td", {
                    className: Ve.RecommendedPrice,
                    children: "Recommended",
                  }),
                  (0, e.jsx)("td", {
                    className: Ve.PercentDiff,
                    children: "% diff",
                  }),
                ],
              }),
            ],
          });
        }
        function Bo(s) {
          const {
              proposal: t,
              oGuideline: n,
              USDPriceCents: r,
              mapCurrentPrices: o,
            } = s,
            { rgAboveThreshold: l, rgBelowThreshold: c } = (0, p.useMemo)(
              () => Lr(r, o, n, t),
              [r, o, n, t],
            );
          if (l.length > 0 || c.length > 0) {
            const d = is(r);
            return (0, e.jsxs)("div", {
              className: Ve.CurrencyWarningsCtn,
              children: [
                l.length > 0 &&
                  (0, e.jsxs)("table", {
                    className: Ve.ThresholdMiniTable,
                    children: [
                      (0, e.jsx)(Jr, {
                        strGuidanceMessage: `${l.length} currencies above guidance threshold for USD $ ${d}`,
                        strDirection: "above",
                      }),
                      (0, e.jsx)("tbody", {
                        children: l.map((m) =>
                          (0, e.jsx)(
                            Qr,
                            { thresholdData: m, strDirection: "\u25B2" },
                            t.packageid + "_" + m.strCurrency,
                          ),
                        ),
                      }),
                    ],
                  }),
                c.length > 0 &&
                  (0, e.jsxs)("table", {
                    className: Ve.ThresholdMiniTable,
                    children: [
                      (0, e.jsx)(Jr, {
                        strGuidanceMessage: `${c.length} currencies below guidance threshold for USD $ ${d}`,
                        strDirection: "below",
                      }),
                      (0, e.jsx)("tbody", {
                        children: c.map((m) =>
                          (0, e.jsx)(
                            Qr,
                            { thresholdData: m, strDirection: "\u25BC" },
                            t.packageid + "_" + m.strCurrency,
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            });
          }
          return null;
        }
        function No(s) {
          const { proposal: t } = s;
          return t.proposed_prices.country_amounts?.length > 0
            ? (0, e.jsxs)("div", {
                children: [
                  "Package has Country price overrides for Countries:",
                  t.proposed_prices.country_amounts
                    .map((n) => n.name)
                    .join(","),
                ],
              })
            : null;
        }
        function Oo(s) {
          const { proposal: t } = s,
            [n] = (0, _t.Gg)(t.packageid, Tn);
          return n && Br(n)
            ? (0, e.jsxs)("div", {
                className: Ve.ReleaseDateCallout,
                children: [
                  "This game released less than 30 days ago, on ",
                  (0, a.TW)(n.GetReleaseDateRTime()),
                ],
              })
            : null;
        }
        function Ro(s) {
          const { bForceShowComparisonRows: t } = s,
            [n, r] = (0, p.useState)(!1);
          return !n && !t
            ? (0, e.jsx)(S.Yh, {
                label: "Show Price Comparison Row",
                onChange: () => r(!0),
              })
            : (0, e.jsxs)("div", {
                className: (0, D.A)(vt.FullCurrencyTable),
                children: [(0, e.jsx)($r, {}), (0, e.jsx)(Yr, { ...s })],
              });
        }
        function Fo(s) {
          const {
            rgProposals: t,
            oGuideline: n,
            mapCurrentPrices: r,
            mapPartnerPaidByPackage: o,
            mapPriceChanges: l,
          } = s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Wo, {}),
              (0, e.jsx)(Ho, { oGuideline: n }),
              (0, e.jsx)("hr", {}),
              (0, e.jsx)("hr", {}),
              t.map((c) =>
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(Uo, {
                        oGuideline: n,
                        proposal: c,
                        mapCurrentPrices: r,
                        mapPartnerPaidByPackage: o,
                        mapPriceChanges: l,
                      }),
                    ],
                  },
                  c.packageid,
                ),
              ),
            ],
          });
        }
        function Ho(s) {
          return (0, e.jsxs)("div", {
            className: (0, D.A)(vt.RowCtn, vt.CurrencyHeaderRow),
            children: [
              (0, e.jsx)("div", {
                className: vt.PackageInfoColumn,
                children: "Package Info",
              }),
              (0, e.jsx)($r, {}),
            ],
          });
        }
        function Uo(s) {
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: vt.RowCtn,
                children: [(0, e.jsx)(Vr, { ...s }), (0, e.jsx)(Yr, { ...s })],
              }),
              (0, e.jsx)(zo, { ...s }),
            ],
          });
        }
        function zo(s) {
          const { proposal: t } = s,
            n = t.proposed_prices.country_amounts;
          return n?.length > 0
            ? (0, e.jsxs)("div", {
                className: vt.RowCtn,
                children: [
                  (0, e.jsx)("div", { children: "^^^^" }),
                  n.map((r) =>
                    (0, e.jsxs)(
                      "div",
                      {
                        children: [
                          r.name,
                          "/",
                          (0, ms.pd)(r.amount.currency_code),
                          " @ ",
                          is(r.account),
                        ],
                      },
                      `country_${t.packageid}_${r.amount.currency_code}`,
                    ),
                  ),
                ],
              })
            : null;
        }
        function Wo(s) {
          return (0, e.jsx)(Dr.qx, {
            title: "Legend",
            tooltip: "Explains the color scheme per proposed pricing color",
            bStartMinimized: !0,
            children: (0, e.jsxs)("div", {
              className: vt.pricingLegend,
              children: [
                (0, e.jsx)("div", {
                  className: vt.priceChangedLower,
                  children: "Price Decreases",
                }),
                (0, e.jsx)("div", {
                  className: vt.priceChangedHigher,
                  children: "Price Increases",
                }),
                (0, e.jsx)("div", {
                  className: vt.priceChangedNew,
                  children: "Price is New",
                }),
                (0, e.jsx)("div", {
                  className: vt.outofmatrix,
                  children:
                    "Price is higher than guideline. Mouseover to see suggested price.",
                }),
                (0, e.jsx)("div", {
                  className: vt.outofmatrixlower,
                  children:
                    "Price is lower than guideline. Mouseover to see suggested price.",
                }),
              ],
            }),
          });
        }
        function Go(s) {
          const [t] = (0, p.useState)(
              () => (0, Xt.Tc)("filter_name", "application_config") || "",
            ),
            n = Xa(),
            r = (0, $.cT)(),
            o = ee(),
            l = qt(),
            c = (0, p.useMemo)(() => n.map((C) => C.packageid), [n]),
            d = ps(c),
            [m, x] = (0, Ja.QD)("tab", "delta");
          if (!r)
            return (0, e.jsx)(ns.t, { string: "Loading Pricing Guidelines" });
          const f = (C) => x(C.key),
            h = [
              {
                name: "Price Delta",
                key: "delta",
                contents: (0, e.jsx)(Me.tH, {
                  children: (0, e.jsx)(Eo, {
                    rgProposals: n,
                    oGuideline: r,
                    mapCurrentPrices: o,
                    mapPartnerPaidByPackage: l,
                    mapPriceChanges: d,
                  }),
                }),
                onClick: f,
              },
              {
                name: "Submissions Raw Table",
                key: "raw",
                contents: (0, e.jsx)(Me.tH, {
                  children: (0, e.jsx)(Fo, {
                    rgProposals: n,
                    oGuideline: r,
                    mapCurrentPrices: o,
                    mapPartnerPaidByPackage: l,
                    mapPriceChanges: d,
                  }),
                }),
                onClick: f,
              },
            ];
          return (0, e.jsx)(vn.m, {
            children: (0, e.jsx)(Me.tH, {
              children: (0, e.jsxs)("div", {
                className: (0, D.A)(Dn().AdminPageCtn, Dn().WidePageCtn),
                children: [
                  (0, e.jsx)("h1", {
                    children: "Package Prices Submissions Reviews",
                  }),
                  (0, e.jsx)("p", { children: t }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)(Us.V, { tabs: h, startingTab: m }),
                ],
              }),
            }),
          });
        }
        var Ln = i(55409),
          Jt = i(60351),
          Vt = i(68031),
          Fe = i(15252),
          Bn = i(12204),
          $s = i(95994),
          Vo = i(30241),
          Nn = i(75083),
          Zr = i(57152),
          Ko = i(7125),
          qr = i(8928),
          lr = i(69289),
          ea = i(8833);
        function $o(s) {
          const { orientation: t = "horizontal", size: n = "1", ...r } = s;
          return (0, e.jsx)("div", {
            role: "separator",
            "aria-orientation": t,
            ...(0, lr.mz)({ ...r, size: n, className: ea.Separator }, Yo),
          });
        }
        const Yo = [
          ...qr.L,
          { prop: "size", className: (s) => ea[`Size-${s}`], responsive: !0 },
          {
            prop: "color",
            cssProperty: (s) => ["--separator-color", (0, lr.w7)(s)],
          },
        ];
        var ls = i(1880),
          Cs = i(69168),
          bs = i(11243);
        const ta = 10,
          Xo = "orange-9 20%",
          Qo = {
            background: "rgb( from var(--color-orange-9) r g b / 20% )",
            padding: "0 4px",
          },
          sa = 1,
          na = 1;
        function ra(s, t) {
          return `${s}|${t}`;
        }
        function aa(s, t) {
          const n = new Map(),
            r = (o, l) => {
              const c = ra(o, l);
              let d = n.get(c);
              return (
                d ||
                  ((d = {
                    eCurrencyCode: o,
                    eRegionCode: l,
                    mapAmounts: new Map(),
                  }),
                  n.set(c, d)),
                d.mapAmounts
              );
            };
          for (const o of s) {
            if (t !== void 0 && o.convert_method !== t) continue;
            const l = Number(o.usd_price);
            for (const c of o.currency_prices ?? [])
              r(c.currency_code, os.YS).set(l, Number(c.price));
            for (const c of o.region_prices ?? [])
              r(c.currency_code, c.region_code).set(l, Number(c.price));
          }
          return n;
        }
        function Jo(s, t, n, r) {
          const o = [],
            l = new Set([...s.keys(), ...t.keys()]);
          for (const c of l) {
            const d = s.get(c),
              m = t.get(c),
              { eCurrencyCode: x, eRegionCode: f } = d ?? m,
              h = new Set([
                ...(d?.mapAmounts.keys() ?? []),
                ...(m?.mapAmounts.keys() ?? []),
              ]),
              C = [];
            let E = 0;
            for (const Ne of [...h].sort((We, ss) => We - ss)) {
              const We = d?.mapAmounts.get(Ne),
                ss = m?.mapAmounts.get(Ne);
              if (We === void 0 || ss === void 0 || We === 0) {
                E++;
                continue;
              }
              C.push({
                nUSDPricepoint: Ne,
                nExistingAmount: We,
                nStagedAmount: ss,
                flPercentDiff: ((ss - We) / We) * 100,
              });
            }
            const X = Rn(n, x),
              xe = Rn(r, x),
              q = C.map((Ne) => Zo(Ne, X, xe)).filter((Ne) => Ne !== null),
              V = oa(C, (Ne) => Ne.nExistingAmount, X),
              $e = oa(C, (Ne) => Ne.nStagedAmount, xe);
            o.push({
              eCurrencyCode: x,
              eRegionCode: f,
              rgPricepointDiffs: C,
              nSkippedPricepoints: E,
              flAvgPercentDiff: C.length
                ? C.reduce((Ne, We) => Ne + We.flPercentDiff, 0) / C.length
                : null,
              flAvgPercentDiffUSD: q.length
                ? q.reduce((Ne, We) => Ne + We, 0) / q.length
                : null,
              nPricepointsIncreasing: C.filter(
                (Ne) => Ne.nStagedAmount > Ne.nExistingAmount,
              ).length,
              nPricepointsDecreasing: C.filter(
                (Ne) => Ne.nStagedAmount < Ne.nExistingAmount,
              ).length,
              nPricepointsUnchanged: C.filter(
                (Ne) => Ne.nStagedAmount === Ne.nExistingAmount,
              ).length,
              flAvgUSDDiscountExisting: V,
              flAvgUSDDiscountStaged: $e,
              flAvgUSDDiscountChange: V === null || $e === null ? null : $e - V,
            });
          }
          return (
            o.sort((c, d) => {
              const m = ia(c.eRegionCode),
                x = ia(d.eRegionCode);
              return (c.eRegionCode === os.YS) != (d.eRegionCode === os.YS)
                ? c.eRegionCode === os.YS
                  ? -1
                  : 1
                : m.localeCompare(x) ||
                    (0, ms.M1)(c.eCurrencyCode).localeCompare(
                      (0, ms.M1)(d.eCurrencyCode),
                    );
            }),
            o
          );
        }
        function oa(s, t, n) {
          return n === null || s.length === 0
            ? null
            : s.reduce((o, l) => o + cr(t(l), n, l.nUSDPricepoint), 0) /
                s.length;
        }
        function cr(s, t, n) {
          return (1 - (s * t) / n) * 100;
        }
        function Zo(s, t, n) {
          if (t === null || n === null) return null;
          const r = Math.round(s.nExistingAmount * t);
          return r ? ((Math.round(s.nStagedAmount * n) - r) / r) * 100 : null;
        }
        function On(s) {
          return s.rgPricepointDiffs.length === 0
            ? null
            : s.nPricepointsIncreasing > s.nPricepointsDecreasing &&
                s.nPricepointsIncreasing > s.nPricepointsUnchanged
              ? "increasing"
              : s.nPricepointsDecreasing > s.nPricepointsIncreasing &&
                  s.nPricepointsDecreasing > s.nPricepointsUnchanged
                ? "decreasing"
                : "unchanged";
        }
        function dr(s, t) {
          return (
            s.flAvgPercentDiff !== null && Math.abs(s.flAvgPercentDiff) > t
          );
        }
        function ia(s) {
          return s === os.YS ? "None" : (0, Qt.de)(s);
        }
        function la(s) {
          return s.eRegionCode === os.YS
            ? (0, ms.M1)(s.eCurrencyCode)
            : (0, Qt.de)(s.eRegionCode);
        }
        function ca(s) {
          return s.eRegionCode === os.YS
            ? (0, ms.Ug)(s.eCurrencyCode)
            : (0, Qt.j4)(s.eRegionCode);
        }
        const da = [
            {
              eColumn: "currency",
              strLabel: `Currency/Region
Abbreviation`,
              bNumeric: !1,
            },
            {
              eColumn: "name",
              strLabel: `Currency/Region
Name`,
              bNumeric: !1,
            },
            {
              eColumn: "region",
              strLabel: "Region",
              bNumeric: !1,
              strTooltip:
                "Is this a region? Regions are priced in USD, not local currency",
            },
            {
              eColumn: "movement",
              strLabel: "Movement",
              bNumeric: !1,
              strTooltip:
                "Of the supported pricepoints for this entry, which direction did the majority move in (increasing, decreasing, unchanged)",
            },
            {
              eColumn: "avgPercentDiff",
              strLabel: `Avg % Difference
(Local Pricing)`,
              bNumeric: !0,
              strTooltip: `The difference the customer will see.

 What is the average percentage change between the existing pricing guideline and the staged pricing guideline`,
            },
            {
              eColumn: "avgPercentDiffUSD",
              strLabel: `Avg % Difference USD
(Existing vs Staged Amounts)`,
              bNumeric: !0,
            },
            {
              eColumn: "increasing",
              strLabel: `Pricepoints
Increasing`,
              bNumeric: !0,
              strTooltip:
                "How many of the supported pricepoints increased with the staged amounts",
            },
            {
              eColumn: "decreasing",
              strLabel: `Pricepoints
Decreasing`,
              bNumeric: !0,
              strTooltip:
                "How many of the supported pricepoints decreased with the staged amounts",
            },
            {
              eColumn: "unchanged",
              strLabel: `Pricepoints
Unchanged`,
              bNumeric: !0,
              strTooltip:
                "How many of the supported pricepoints were unchanged with the staged amounts",
            },
            {
              eColumn: "avgDiscountExisting",
              strLabel: `Avg USD Discount
(Existing)`,
              bNumeric: !0,
            },
            {
              eColumn: "avgDiscountStaged",
              strLabel: `Avg USD Discount
(Staged)`,
              bNumeric: !0,
              strTooltip: `The average discount from the USD pricepoints for staged values.

This discount is calculated using the CURRENT fx rate 

 Eg.'How do we relate to USD if we ship the staged pricing today'`,
            },
            {
              eColumn: "avgDiscountChange",
              strLabel: `Avg USD Discount
Change`,
              bNumeric: !0,
              strTooltip: `The change from Existing to Staged USD Discounts.

Eg. "do we discount more or less from USD with the staged set of pricing". 

Positive is less discount, negative is more discount.`,
            },
          ],
          qo = new Map([
            ["increasing", 1],
            ["unchanged", 0],
            ["decreasing", -1],
          ]),
          gn = { fontVariantNumeric: "tabular-nums" },
          ei = { whiteSpace: "pre-line" },
          ua = { color: "#c7821a" },
          ti = { visibility: "hidden" },
          Os = { listStyleType: "disc" };
        function pa(s, t) {
          switch (t) {
            case "currency":
              return la(s);
            case "name":
              return ca(s);
            case "region":
              return s.eRegionCode === os.YS ? 0 : 1;
            case "movement":
              return qo.get(On(s)) ?? null;
            case "avgPercentDiff":
              return s.flAvgPercentDiff;
            case "avgPercentDiffUSD":
              return s.flAvgPercentDiffUSD;
            case "increasing":
              return s.nPricepointsIncreasing;
            case "decreasing":
              return s.nPricepointsDecreasing;
            case "unchanged":
              return s.nPricepointsUnchanged;
            case "avgDiscountExisting":
              return s.flAvgUSDDiscountExisting;
            case "avgDiscountStaged":
              return s.flAvgUSDDiscountStaged;
            case "avgDiscountChange":
              return s.flAvgUSDDiscountChange;
          }
        }
        function si(s, t, n) {
          return [...s].sort((r, o) => {
            const l = pa(r, t),
              c = pa(o, t);
            if (l === null || c === null)
              return (l === null ? 1 : 0) - (c === null ? 1 : 0);
            const d = typeof l == "string" ? l.localeCompare(c) : l - c;
            return n ? d : -d;
          });
        }
        function ot(s) {
          return (0, e.jsx)(Jt.az, { paddingY: "1", paddingX: "2", ...s });
        }
        function ni(s) {
          const {
              column: t,
              eSortColumn: n,
              bAscending: r,
              OnClick: o,
              strTooltip: l,
            } = s,
            c = t.eColumn === n;
          return (0, e.jsx)(ot, {
            background: "dull-9 20%",
            textAlign: t.bNumeric ? "end" : "start",
            onClick: () => o(t.eColumn),
            style: { cursor: "pointer", userSelect: "none" },
            children: (0, e.jsxs)(Vt.s, {
              direction: "column",
              justify: "between",
              height: "100%",
              children: [
                (0, e.jsxs)(Fe.EY, {
                  contrast: c ? "title" : "subtitle",
                  whiteSpace: "pre-line",
                  children: [
                    t.strLabel,
                    c &&
                      (0, e.jsx)(Bn.V, {
                        direction: r ? "up" : "down",
                        marginStart: "1",
                      }),
                  ],
                }),
                l &&
                  (0, e.jsx)(Jt.az, {
                    textAlign: "end",
                    children: (0, e.jsx)(bs.o, {
                      small: !0,
                      tooltip: (0, e.jsx)("span", { style: ei, children: l }),
                    }),
                  }),
              ],
            }),
          });
        }
        function ur(s) {
          const { flPercent: t, strTooltip: n } = s;
          if (t === null)
            return (0, e.jsx)(ot, {
              textAlign: "end",
              children: (0, e.jsx)(Fe.EY, {
                contrast: "note",
                children: "\u2014",
              }),
            });
          const r = t < 0 ? "text-error" : t > 0 ? "text-success" : "text-body",
            o = t > 0 ? "+" : "";
          return (0, e.jsx)(ot, {
            textAlign: "end",
            children: (0, e.jsxs)(Fe.EY, {
              color: r,
              style: gn,
              children: [
                o,
                t.toFixed(1),
                "%",
                n && (0, e.jsx)(bs.o, { small: !0, tooltip: n }),
              ],
            }),
          });
        }
        function ri(s) {
          const { eMovement: t } = s;
          return t === "increasing"
            ? (0, e.jsx)(ot, {
                textAlign: "center",
                children: (0, e.jsx)(Fe.EY, {
                  color: "text-success",
                  children: (0, e.jsx)(Bn.V, { direction: "up" }),
                }),
              })
            : t === "decreasing"
              ? (0, e.jsx)(ot, {
                  textAlign: "center",
                  children: (0, e.jsx)(Fe.EY, {
                    color: "text-error",
                    children: (0, e.jsx)(Bn.V, { direction: "down" }),
                  }),
                })
              : t === "unchanged"
                ? (0, e.jsx)(ot, {
                    textAlign: "center",
                    children: (0, e.jsx)(Fe.EY, {
                      color: "text-body",
                      children: "\u2013",
                    }),
                  })
                : (0, e.jsx)(ot, {});
        }
        function pr(s) {
          return (0, e.jsx)(ot, {
            textAlign: "end",
            children: (0, e.jsx)(Fe.EY, { style: gn, children: s.nCount }),
          });
        }
        function Ys(s) {
          const { flPercent: t, bStarred: n } = s;
          return t === null
            ? (0, e.jsx)(ot, {
                textAlign: "end",
                children: (0, e.jsx)(Fe.EY, {
                  contrast: "note",
                  children: "\u2014",
                }),
              })
            : (0, e.jsx)(ot, {
                textAlign: "end",
                children: (0, e.jsxs)(Fe.EY, {
                  color: "text-body",
                  contrast: "body",
                  style: gn,
                  children: [t.toFixed(1), "%", n && "*"],
                }),
              });
        }
        function Rn(s, t) {
          if (t === Lt.CS) return 1;
          const n = s?.rates[t];
          return n || null;
        }
        function hn(s) {
          const { nAmount: t, eCurrencyCode: n, bBold: r } = s;
          return t === null
            ? (0, e.jsx)(ot, {
                textAlign: "end",
                children: (0, e.jsx)(Fe.EY, {
                  contrast: "note",
                  children: "\u2014",
                }),
              })
            : (0, e.jsx)(ot, {
                textAlign: "end",
                children: (0, e.jsx)(Fe.EY, {
                  weight: r ? "heavy" : void 0,
                  style: gn,
                  children: (0, Mn.x)(t, n),
                }),
              });
        }
        function ma(s) {
          const { nDifference: t, eCurrencyCode: n } = s;
          if (t === null)
            return (0, e.jsx)(ot, {
              textAlign: "end",
              children: (0, e.jsx)(Fe.EY, {
                contrast: "note",
                children: "\u2014",
              }),
            });
          const r = t < 0 ? "text-error" : t > 0 ? "text-success" : "text-body",
            o = t > 0 ? "+" : "";
          return (0, e.jsx)(ot, {
            textAlign: "end",
            children: (0, e.jsxs)(Fe.EY, {
              color: r,
              style: gn,
              children: [o, (0, Mn.x)(t, n)],
            }),
          });
        }
        function Rs(s) {
          return new Date(s * 1e3).toISOString().slice(0, 10);
        }
        function ai(s) {
          const {
              row: t,
              bExpanded: n,
              OnToggle: r,
              launchFXRates: o,
              currentFXRates: l,
              strLaunchTooltip: c,
              flSignificantPercentDiff: d,
              bNearCNYDiscount: m,
            } = s,
            x = Rn(o, t.eCurrencyCode),
            f = Rn(l, t.eCurrencyCode),
            h = dr(t, d);
          let C;
          return (
            t.flAvgPercentDiff !== null &&
              t.flAvgPercentDiffUSD !== null &&
              Math.abs(t.flAvgPercentDiff) > sa &&
              Math.abs(t.flAvgPercentDiffUSD) > sa &&
              (t.flAvgPercentDiff > 0 && t.flAvgPercentDiffUSD < 0
                ? (C =
                    "Currency FX rates decreased more than local pricing multipliers increased")
                : t.flAvgPercentDiff < 0 &&
                  t.flAvgPercentDiffUSD > 0 &&
                  (C =
                    "Currency FX rates increased more than local pricing multipliers decreased")),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)($s.x, {
                  columns: "subgrid",
                  gridColumn: "1 / -1",
                  alignItems: "center",
                  background: h ? Xo : "dull-9 10%",
                  onClick: r,
                  style: { cursor: "pointer" },
                  children: [
                    (0, e.jsx)(ot, {
                      children: (0, e.jsxs)(Fe.EY, {
                        whiteSpace: "nowrap",
                        children: [
                          (0, e.jsx)(Bn.V, {
                            direction: n ? "down" : "right",
                            marginEnd: "1",
                          }),
                          la(t),
                        ],
                      }),
                    }),
                    (0, e.jsx)(ot, {
                      children: (0, e.jsx)(Fe.EY, {
                        whiteSpace: "nowrap",
                        children: ca(t),
                      }),
                    }),
                    (0, e.jsx)(ot, {
                      textAlign: "center",
                      children:
                        t.eRegionCode !== os.YS &&
                        (0, e.jsx)(Vo.i, { size: "4" }),
                    }),
                    (0, e.jsx)(ri, { eMovement: On(t) }),
                    (0, e.jsx)(ur, { flPercent: t.flAvgPercentDiff }),
                    (0, e.jsx)(ur, {
                      flPercent: t.flAvgPercentDiffUSD,
                      strTooltip: C,
                    }),
                    (0, e.jsx)(pr, { nCount: t.nPricepointsIncreasing }),
                    (0, e.jsx)(pr, { nCount: t.nPricepointsDecreasing }),
                    (0, e.jsx)(pr, { nCount: t.nPricepointsUnchanged }),
                    (0, e.jsx)(Ys, { flPercent: t.flAvgUSDDiscountExisting }),
                    (0, e.jsx)(Ys, {
                      flPercent: t.flAvgUSDDiscountStaged,
                      bStarred: m,
                    }),
                    (0, e.jsx)(Ys, { flPercent: t.flAvgUSDDiscountChange }),
                  ],
                }),
                n &&
                  (0, e.jsx)(Jt.az, {
                    gridColumn: "1 / -1",
                    paddingStart: "6",
                    paddingBottom: "2",
                    children: (0, e.jsxs)($s.x, {
                      columns: "repeat( 11, max-content )",
                      gap: "1",
                      children: [
                        (0, e.jsx)(ot, {
                          textAlign: "end",
                          children: (0, e.jsx)(Fe.EY, {
                            contrast: "subtitle",
                            children: "USD Pricepoint",
                          }),
                        }),
                        (0, e.jsx)(ot, {
                          textAlign: "end",
                          children: (0, e.jsx)(Fe.EY, {
                            contrast: "subtitle",
                            children: "Existing",
                          }),
                        }),
                        (0, e.jsx)(ot, {
                          textAlign: "end",
                          children: (0, e.jsx)(Fe.EY, {
                            contrast: "subtitle",
                            children: "Staged",
                          }),
                        }),
                        (0, e.jsx)(ot, {
                          textAlign: "end",
                          children: (0, e.jsx)(Fe.EY, {
                            contrast: "subtitle",
                            children: "Difference",
                          }),
                        }),
                        (0, e.jsx)(ot, {
                          textAlign: "end",
                          children: (0, e.jsx)(Fe.EY, {
                            contrast: "subtitle",
                            children: "% Difference",
                          }),
                        }),
                        (0, e.jsx)(ot, {
                          textAlign: "end",
                          children: (0, e.jsx)(Fe.EY, {
                            contrast: "subtitle",
                            children: "Existing (USD)",
                          }),
                        }),
                        (0, e.jsx)(ot, {
                          textAlign: "end",
                          children: (0, e.jsx)(Fe.EY, {
                            contrast: "subtitle",
                            children: "Staged (USD)",
                          }),
                        }),
                        (0, e.jsx)(ot, {
                          textAlign: "end",
                          children: (0, e.jsx)(Fe.EY, {
                            contrast: "subtitle",
                            children: "Difference (USD)",
                          }),
                        }),
                        (0, e.jsx)(ot, {
                          textAlign: "end",
                          children: (0, e.jsxs)(Fe.EY, {
                            contrast: "subtitle",
                            whiteSpace: "nowrap",
                            children: [
                              "USD Discount (Existing, At Launch)",
                              o &&
                                (0, e.jsx)(bs.o, {
                                  small: !0,
                                  tooltip: `USD @ ${Rs(o.rt_date)}`,
                                }),
                            ],
                          }),
                        }),
                        (0, e.jsx)(ot, {
                          textAlign: "end",
                          children: (0, e.jsxs)(Fe.EY, {
                            contrast: "subtitle",
                            whiteSpace: "nowrap",
                            children: [
                              "USD Discount (Staged)",
                              l &&
                                (0, e.jsx)(bs.o, {
                                  small: !0,
                                  tooltip: `USD @ ${Rs(l.rt_date)}`,
                                }),
                            ],
                          }),
                        }),
                        (0, e.jsx)(ot, {
                          textAlign: "end",
                          children: (0, e.jsx)(Fe.EY, {
                            contrast: "subtitle",
                            children: "USD Discount Change",
                          }),
                        }),
                        t.rgPricepointDiffs.map((E) => {
                          const X =
                              f === null
                                ? null
                                : Math.round(E.nExistingAmount * f),
                            xe =
                              f === null
                                ? null
                                : Math.round(E.nStagedAmount * f),
                            q = X === null || xe === null ? null : xe - X,
                            V =
                              x === null
                                ? null
                                : cr(E.nExistingAmount, x, E.nUSDPricepoint),
                            $e =
                              f === null
                                ? null
                                : cr(E.nStagedAmount, f, E.nUSDPricepoint);
                          return (0, e.jsxs)(
                            $s.x,
                            {
                              columns: "subgrid",
                              gridColumn: "1 / -1",
                              alignItems: "center",
                              background: "dull-9 10%",
                              children: [
                                (0, e.jsx)(hn, {
                                  nAmount: E.nUSDPricepoint,
                                  eCurrencyCode: Lt.CS,
                                  bBold: !0,
                                }),
                                (0, e.jsx)(hn, {
                                  nAmount: E.nExistingAmount,
                                  eCurrencyCode: t.eCurrencyCode,
                                }),
                                (0, e.jsx)(hn, {
                                  nAmount: E.nStagedAmount,
                                  eCurrencyCode: t.eCurrencyCode,
                                }),
                                (0, e.jsx)(ma, {
                                  nDifference:
                                    E.nStagedAmount - E.nExistingAmount,
                                  eCurrencyCode: t.eCurrencyCode,
                                }),
                                (0, e.jsx)(ur, { flPercent: E.flPercentDiff }),
                                (0, e.jsx)(hn, {
                                  nAmount: X,
                                  eCurrencyCode: Lt.CS,
                                }),
                                (0, e.jsx)(hn, {
                                  nAmount: xe,
                                  eCurrencyCode: Lt.CS,
                                }),
                                (0, e.jsx)(ma, {
                                  nDifference: q,
                                  eCurrencyCode: Lt.CS,
                                }),
                                (0, e.jsx)(Ys, { flPercent: V }),
                                (0, e.jsx)(Ys, { flPercent: $e }),
                                (0, e.jsx)(Ys, {
                                  flPercent:
                                    V === null || $e === null ? null : $e - V,
                                }),
                              ],
                            },
                            E.nUSDPricepoint,
                          );
                        }),
                      ],
                    }),
                  }),
              ],
            })
          );
        }
        function oi(s) {
          const {
            rgRows: t,
            flSignificantPercentDiff: n,
            eTableFilter: r,
            OnToggleFilter: o,
          } = s;
          let l = 0,
            c = 0,
            d = 0,
            m = 0,
            x = 0;
          for (const h of t) {
            const C = On(h);
            C === "increasing"
              ? (l++, dr(h, n) && c++)
              : C === "decreasing"
                ? (m++, dr(h, n) && x++)
                : C === "unchanged" && d++;
          }
          const f = [
            { eMovement: "increasing", nCount: l, nShaded: c },
            { eMovement: "unchanged", nCount: d, nShaded: 0 },
            { eMovement: "decreasing", nCount: m, nShaded: x },
          ];
          return (0, e.jsx)($s.x, {
            columns: "max-content max-content",
            alignItems: "center",
            gapX: "2",
            gapY: "1",
            marginTop: "2",
            children: f.map((h) =>
              (0, e.jsxs)(
                p.Fragment,
                {
                  children: [
                    (0, e.jsxs)(Fe.EY, {
                      children: [
                        "Currencies/Regions ",
                        h.eMovement,
                        ": ",
                        h.nCount,
                        (0, e.jsxs)("span", {
                          style: h.nShaded > 0 ? void 0 : ti,
                          children: [
                            " (",
                            (0, e.jsxs)("span", {
                              style: ua,
                              children: [h.nShaded, " significantly"],
                            }),
                            ")",
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)(Jt.az, {
                      children:
                        h.nCount > 0 &&
                        (0, e.jsxs)(Nn.$, {
                          size: "1",
                          variant: "outline",
                          onClick: () => o(h.eMovement),
                          children: [
                            r === h.eMovement ? "Hide" : "Show",
                            " ",
                            h.eMovement,
                          ],
                        }),
                    }),
                  ],
                },
                h.eMovement,
              ),
            ),
          });
        }
        function ii(s) {
          const {
              strTitle: t,
              rgRows: n,
              launchFXRates: r,
              currentFXRates: o,
              flSignificantPercentDiff: l,
              bCompareToCNY: c,
            } = s,
            d =
              r && o
                ? `Compares the staged pricing at current FX rates (${Rs(o.rt_date)}) against the existing pricing at launch FX rates (${Rs(r.rt_date)})`
                : void 0,
            m = r
              ? `The average discount from the USD pricepoints for this existing values.

This is calculated using the PRIOR fx rate (${Rs(r.rt_date)})

Eg. 'How did we relate to USD when we shipped this pricing'`
              : void 0,
            x = new Map([
              ["avgPercentDiffUSD", d],
              ["avgDiscountExisting", m],
            ]),
            [f, h] = (0, p.useState)("avgPercentDiff"),
            [C, E] = (0, p.useState)(!1),
            X = (it) => {
              E(it === f ? !C : !0), h(it);
            },
            [xe, q] = (0, p.useState)(null),
            [V, $e] = (0, p.useState)(null),
            Ne = (it) => $e(it === V ? null : it),
            We = V === "all" ? n : n.filter((it) => On(it) === V),
            ss = n.reduce((it, ws) => it + ws.nSkippedPricepoints, 0),
            Hs = c
              ? (n.find(
                  (it) =>
                    it.eCurrencyCode === Lt.C6 && it.eRegionCode === os.YS,
                )?.flAvgUSDDiscountStaged ?? null)
              : null;
          return (0, e.jsxs)(Jt.az, {
            marginTop: "4",
            children: [
              (0, e.jsxs)(Vt.s, {
                align: "center",
                gap: "4",
                children: [
                  (0, e.jsx)(Zr.D, { level: "3", children: t }),
                  (0, e.jsx)(Nn.$, {
                    size: "1",
                    variant: "outline",
                    onClick: () => Ne("all"),
                    children: V === "all" ? "Hide all" : "Show all",
                  }),
                ],
              }),
              (0, e.jsx)(oi, {
                rgRows: n,
                flSignificantPercentDiff: l,
                eTableFilter: V,
                OnToggleFilter: Ne,
              }),
              V !== null &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("br", {}),
                    (0, e.jsxs)("ul", {
                      children: [
                        (0, e.jsxs)(Fe.EY, {
                          as: "li",
                          size: "3",
                          style: Os,
                          children: [
                            (0, e.jsx)("span", {
                              style: Qo,
                              children: "Orange shaded rows",
                            }),
                            " flag an average movement of greater than +/-",
                            l,
                            "% in local currency amounts",
                          ],
                        }),
                        Hs !== null &&
                          (0, e.jsxs)(Fe.EY, {
                            as: "li",
                            size: "3",
                            style: Os,
                            children: [
                              "* - Staged USD Discount is within +/-",
                              na,
                              "% of China's discount (",
                              Hs.toFixed(1),
                              "%)",
                            ],
                          }),
                      ],
                    }),
                    (0, e.jsxs)($s.x, {
                      columns: `repeat( ${da.length}, max-content )`,
                      gap: "1",
                      alignContent: "center",
                      marginTop: "3",
                      children: [
                        da.map((it) =>
                          (0, e.jsx)(
                            ni,
                            {
                              column: it,
                              eSortColumn: f,
                              bAscending: C,
                              OnClick: X,
                              strTooltip: x.get(it.eColumn) ?? it.strTooltip,
                            },
                            it.eColumn,
                          ),
                        ),
                        si(We, f, C).map((it) => {
                          const ws = ra(it.eCurrencyCode, it.eRegionCode),
                            xs =
                              Hs !== null &&
                              it.flAvgUSDDiscountStaged !== null &&
                              it.eCurrencyCode !== Lt.C6 &&
                              Math.abs(it.flAvgUSDDiscountStaged - Hs) <= na;
                          return (0, e.jsx)(
                            ai,
                            {
                              row: it,
                              bExpanded: ws === xe,
                              OnToggle: () => q(ws === xe ? null : ws),
                              launchFXRates: r,
                              currentFXRates: o,
                              strLaunchTooltip: d,
                              flSignificantPercentDiff: l,
                              bNearCNYDiscount: xs,
                            },
                            ws,
                          );
                        }),
                      ],
                    }),
                    (0, e.jsxs)(Fe.EY, {
                      as: "div",
                      contrast: "note",
                      marginTop: "2",
                      children: [
                        ss,
                        " currency / pricepoint pairs were priced on only one side and are not included above.",
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function li(s) {
          const { currentFXRates: t, latestPricingMultiplierSet: n } = s,
            [r, o, l] = (0, _e.uD)(),
            [c, d] = (0, p.useState)(null),
            [m, x] = (0, p.useState)(null),
            f = async () => {
              if (!t || !n) return;
              const h = new FormData();
              h.append("sessionid", (0, K.KC)()),
                h.append(
                  "pricing_multiplier_id",
                  String(n.pricing_multiplier_id),
                ),
                h.append("rt_date_fx", String(t.rt_date));
              try {
                const C = await Yt().post(
                  `${K.TS.PARTNER_BASE_URL}admin/ajaxstagenewpricingguidelines/`,
                  h,
                );
                C.data.success === $t.R
                  ? (x(null), d(C.data.rows_written))
                  : x(`Staging failed, EResult ${C.data.success}`);
              } catch {
                x("Staging failed, the request did not complete");
              }
            };
          return (0, e.jsxs)(Jt.az, {
            marginTop: "6",
            children: [
              (0, e.jsx)(Nn.$, {
                onClick: o,
                disabled: !t || !n,
                children: "Stage New Pricing",
              }),
              !t &&
                (0, e.jsx)(Fe.EY, {
                  as: "div",
                  contrast: "note",
                  marginTop: "2",
                  children: "No FX rates are available to stage with",
                }),
              !n &&
                (0, e.jsx)(Fe.EY, {
                  as: "div",
                  contrast: "note",
                  marginTop: "2",
                  children:
                    "No pricing multiplier set is available to stage with",
                }),
              m &&
                (0, e.jsx)(Fe.EY, { as: "div", marginTop: "2", children: m }),
              (0, e.jsx)(Cs.E, {
                active: r,
                children: (0, e.jsx)(ls.o0, {
                  strTitle: "Stage New Pricing",
                  onOK: f,
                  closeModal: l,
                  strDescription:
                    "Generate new staged pricing for every pricing method using the following values?",
                  children: (0, e.jsxs)("ul", {
                    children: [
                      (0, e.jsxs)("li", {
                        style: Os,
                        children: ["Exchange Rate Date: ", t && Rs(t.rt_date)],
                      }),
                      (0, e.jsxs)("li", {
                        style: Os,
                        children: [
                          "Pricing Multiplier ID: ",
                          n?.pricing_multiplier_id,
                        ],
                      }),
                      (0, e.jsxs)("li", {
                        style: Os,
                        children: [
                          "Pricing Multiplier Date: ",
                          n && Rs(n.rt_date_source),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, e.jsx)(Cs.E, {
                active: c !== null,
                children: (0, e.jsx)(ls.o0, {
                  strTitle: "New Pricing Staged",
                  strDescription: `Staged ${c} rows. Reload the page to compare them.`,
                  bAlertDialog: !0,
                  bHideCloseIcon: !0,
                  bDisableBackgroundDismiss: !0,
                  strOKButtonText: "Reload Page",
                  onOK: () => window.location.reload(),
                }),
              }),
            ],
          });
        }
        const ci = {
          [Ln.Y5.KC]: "Purchasing Power Conversion",
          [Ln.Y5.bA]: "Exchange-rate Conversion",
          [Ln.Y5.lZ]: "Multi-variable conversion",
        };
        function di(s) {
          const t = (0, p.useMemo)(
              () =>
                (0, Xt.Tc)("current_fx_rates", "application_config") ?? null,
              [],
            ),
            n = (0, p.useMemo)(
              () =>
                (0, Xt.Tc)(
                  "latest_pricing_multiplier_set",
                  "application_config",
                ) ?? null,
              [],
            ),
            [r, o] = (0, p.useState)(String(ta)),
            l = Number(r),
            c = r.trim() !== "" && l >= 0 && l <= 100,
            d = c ? l : ta,
            m = (0, p.useMemo)(() => {
              const x =
                (0, Xt.Tc)("existing_price_points", "application_config") ?? [];
              return (
                (0, Xt.Tc)("pricing_methods", "application_config") ?? []
              ).map((h) => {
                const C = h.launch_fx_rates ?? null,
                  E = Jo(
                    aa(x, h.convert_method),
                    aa(h.staged_price_points ?? []),
                    C,
                    t,
                  ).filter(
                    (X) =>
                      !(X.eCurrencyCode === Lt.CS && X.eRegionCode === os.YS),
                  );
                return {
                  eConvertMethod: h.convert_method,
                  rgRows: E,
                  launchFXRates: C,
                };
              });
            }, [t]);
          return (0, e.jsxs)("div", {
            className: Dn().AdminPageCtn,
            children: [
              (0, e.jsx)("br", {}),
              (0, e.jsx)("h2", {
                className: Dn().ValveOnlyTitle,
                children: "Package Pricing Guideline Comparison",
              }),
              (0, e.jsxs)("ul", {
                children: [
                  (0, e.jsx)(Fe.EY, {
                    as: "li",
                    size: "3",
                    style: Os,
                    children:
                      "This page shows staged package pricing guidelines against the currently live package pricing guidelines, per USD pricepoint.",
                  }),
                  (0, e.jsxs)(Fe.EY, {
                    as: "li",
                    size: "3",
                    style: Os,
                    children: [
                      (0, e.jsx)("span", {
                        style: ua,
                        children: "Significant movement",
                      }),
                      ": Currencies or regions moving more than +/-",
                      (0, e.jsx)(Jt.az, {
                        display: "inline-block",
                        width: "48px",
                        marginX: "1",
                        children: (0, e.jsx)(Ko.k, {
                          size: "1",
                          variant: "underline",
                          inputMode: "decimal",
                          value: r,
                          onTextChange: o,
                          status: c ? void 0 : "error",
                        }),
                      }),
                      "% in local currency amounts",
                    ],
                  }),
                ],
              }),
              m.map((x, f) =>
                (0, e.jsxs)(
                  p.Fragment,
                  {
                    children: [
                      f > 0 && (0, e.jsx)($o, { size: "4", marginY: "6" }),
                      (0, e.jsx)(ii, {
                        strTitle: ci[x.eConvertMethod] ?? "Unknown",
                        rgRows: x.rgRows,
                        launchFXRates: x.launchFXRates,
                        currentFXRates: t,
                        flSignificantPercentDiff: d,
                        bCompareToCNY: x.eConvertMethod === Ln.Y5.lZ,
                      }),
                    ],
                  },
                  x.eConvertMethod,
                ),
              ),
              (0, e.jsx)(li, {
                currentFXRates: t,
                latestPricingMultiplierSet: n,
              }),
            ],
          });
        }
        var nt = i(26673),
          ga = i(83516);
        const Xs = "0",
          Qs = "1",
          Js = "2",
          As = "3",
          vs = "4";
        function ha(s) {
          return (
            !!s && Object.values(s).some((t) => t && t.trim().length !== 0)
          );
        }
        function Zs(s) {
          switch (s.kind) {
            case Xs:
              return (0, a.we)(
                "#StoreAdmin_PurchaseOptionsOrder_InvalidKindError",
              );
            case As:
              return ha(s.header)
                ? null
                : (0, a.we)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingHeaderError",
                  );
            case Qs:
              return s.package_id
                ? null
                : (0, a.we)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingPackageError",
                  );
            case Js:
              return s.bundle_id
                ? null
                : (0, a.we)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingBundleError",
                  );
            case vs:
              return ha(s.dropdown_title)
                ? !s.dropdown_items || s.dropdown_items.length < 2
                  ? (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_MissingDropdownItemsError",
                    )
                  : null
                : (0, a.we)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingDropdownTitleError",
                  );
          }
        }
        const Ds = (0, p.createContext)(null);
        function ui(s, t) {
          if (s.length === 0) return !1;
          for (const n of s)
            switch (n.kind) {
              case Js:
                return !1;
              case As:
                continue;
              case Xs:
                return !1;
              case Qs:
                return t.includes(n.package_id);
              case vs:
                return (
                  n.dropdown_items &&
                  n.dropdown_items.length > 0 &&
                  n.dropdown_items[0].kind === "package" &&
                  t.includes(n.dropdown_items[0].package_id)
                );
            }
          return !1;
        }
        function pi(s) {
          const {
              appid: t,
              rgBaseGamePackageIds: n,
              rgAllBundles: r,
              rgAllPackages: o,
              rgValidLanguages: l,
            } = s,
            [c, d] = (0, p.useState)(s.bManualPurchaseOptionsOrder),
            [m, x] = (0, p.useState)(s.rgPurchaseOptionsOrder),
            [f, h] = (0, p.useMemo)(() => {
              const q = new Set(),
                V = new Set();
              for (const We of m)
                switch (We.kind) {
                  case Qs:
                    V.add(We.package_id);
                    break;
                  case Js:
                    q.add(We.bundle_id && We.bundle_id);
                    break;
                  case vs:
                    for (const ss of We.dropdown_items ?? [])
                      V.add(ss.package_id);
                    break;
                }
              const $e = o
                  .filter((We) => !V.has(We.packageid))
                  .map((We) => ({
                    value: We.packageid,
                    label: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                      We.name,
                      We.packageid,
                    ),
                  })),
                Ne = r
                  .filter((We) => !q.has(We.bundleid))
                  .map((We) => ({
                    value: We.bundleid,
                    label: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                      We.name,
                      We.bundleid,
                    ),
                  }));
              return [$e, Ne];
            }, [r, o, m]),
            C = (0, p.useMemo)(
              () =>
                l.map((q) => {
                  const V = (0, a.we)(`#Language_${q}`);
                  return { value: q, label: V };
                }),
              [l],
            ),
            E = n.length === 0 || ui(m, n),
            X = m.some((q) => Zs(q) !== null) || !E,
            xe = {
              appid: t,
              rgUnusedBundles: h,
              rgUnusedPackages: f,
              rgValidLanguages: C,
              bHasErrors: X,
              rgAllPackages: o,
              rgAllBundles: r,
            };
          return (0, e.jsxs)("div", {
            className: nt.PurchaseOptionsOrderEditor,
            children: [
              (0, e.jsx)("h2", {
                children: (0, a.we)("#StoreAdmin_PurchaseOptionsOrder_Title"),
              }),
              (0, e.jsx)("p", {
                children: (0, a.we)(
                  "#StoreAdmin_PurchaseOptionsOrder_Description",
                ),
              }),
              (0, e.jsxs)("div", {
                className: nt.PurchaseOptionsManualToggleCtn,
                children: [
                  (0, e.jsx)(ga._H, { value: c, onChange: (q) => d(q) }),
                  (0, e.jsx)("div", {
                    className: nt.Label,
                    children: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_ToggleLabel",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    type: "hidden",
                    name: "app[purchase_options_order][method]",
                    value: c ? "manual" : "original",
                  }),
                ],
              }),
              (0, e.jsxs)(Ds.Provider, {
                value: xe,
                children: [
                  c &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        !E &&
                          (0, e.jsxs)("div", {
                            className: nt.PurchaseOptionError,
                            children: [
                              (0, e.jsx)(R.Q9b, { className: nt.Exclamation }),
                              (0, a.we)(
                                "#StoreAdmin_PurchaseOptionsOrder_FirstItemMustBeBaseGame",
                              ),
                              "\xA0 ",
                              n.join(", "),
                            ],
                          }),
                        (0, e.jsx)(bi, {
                          appid: s.appid,
                          items: m,
                          setItems: x,
                          component: hi,
                          noItemsPlaceholder: (0, e.jsx)("p", {
                            className: nt.NoPurchaseOptions,
                            children: (0, a.we)(
                              "#StoreAdmin_PurchaseOptionsOrder_NoPurchaseOptionsPlaceholder",
                            ),
                          }),
                          emptyItem: () => ({ kind: Xs }),
                          addText: (0, a.we)(
                            "#StoreAdmin_PurchaseOptionsOrder_Add",
                          ),
                        }),
                      ],
                    }),
                  (0, e.jsx)(mi, {
                    rgOptions: m,
                    rgOriginalOptions: s.rgPurchaseOptionsOrder,
                  }),
                ],
              }),
            ],
          });
        }
        function mi(s) {
          const { rgOptions: t, rgOriginalOptions: n } = s;
          if ((0, p.useContext)(Ds).bHasErrors) return null;
          const o = [];
          for (let l = 0; l < Math.max(t.length, n.length); l++)
            l < t.length
              ? o.push(
                  (0, e.jsx)(
                    "div",
                    {
                      children: (0, e.jsx)(gi, {
                        option: t[l],
                        originalOption: n[l] ?? null,
                        index: l,
                      }),
                    },
                    l,
                  ),
                )
              : o.push(
                  (0, e.jsx)(
                    "input",
                    {
                      type: "hidden",
                      name: `app[purchase_options_order][order][${l}]`,
                      value: "",
                    },
                    l,
                  ),
                );
          return (0, e.jsx)(e.Fragment, { children: o });
        }
        function gi(s) {
          const { option: t, originalOption: n, index: r } = s,
            o = `app[purchase_options_order][order][${r}]`;
          if (
            (0, p.useContext)(Ds).bHasErrors ||
            !n ||
            (t.kind === n.kind && t.kind !== vs && t.kind !== As)
          )
            return null;
          if (t.kind === vs && n.kind === vs) {
            let c = [];
            if (t.dropdown_items.length < n.dropdown_items.length)
              for (
                let d = t.dropdown_items.length;
                d < n.dropdown_items.length;
                d++
              )
                c.push(
                  (0, e.jsx)("input", {
                    type: "hidden",
                    name: `${o}[dropdown_items][${d}]`,
                    value: "",
                  }),
                );
            for (const [d, m] of Object.entries(n.dropdown_title ?? {}))
              m.trim().length !== 0 &&
                ((t.dropdown_title && t.dropdown_title[d].trim().length > 0) ||
                  c.push(
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `${o}[dropdown_title][${d}]`,
                      value: "",
                    }),
                  ));
            for (const [d, m] of Object.entries(n.description ?? {}))
              m.trim().length !== 0 &&
                ((t.description && t.description[d].trim().length > 0) ||
                  c.push(
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `${o}[description][${d}]`,
                      value: "",
                    }),
                  ));
            return (0, e.jsx)(e.Fragment, { children: c });
          }
          if (t.kind === As && n.kind === As) {
            let c = [];
            for (const [d, m] of Object.entries(n.header ?? {}))
              m.trim().length !== 0 &&
                ((t.header && t.header[d].trim().length > 0) ||
                  c.push(
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `${o}[header][${d}]`,
                      value: "",
                    }),
                  ));
            return (0, e.jsx)(e.Fragment, { children: c });
          }
          switch (n.kind) {
            case Qs:
              return (0, e.jsx)("input", {
                type: "hidden",
                name: `${o}[package_id]`,
                value: "",
              });
            case Js:
              return (0, e.jsx)("input", {
                type: "hidden",
                name: `${o}[bundle_id]`,
                value: "",
              });
            case As:
              return (0, e.jsx)("input", {
                type: "hidden",
                name: `${o}[header]`,
                value: "",
              });
            case vs:
              return (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("input", {
                    type: "hidden",
                    name: `${o}[dropdown_title]`,
                    value: "",
                  }),
                  (0, e.jsx)("input", {
                    type: "hidden",
                    name: `${o}[description]`,
                    value: "",
                  }),
                  n.dropdown_items?.map((c, d) =>
                    (0, e.jsx)(
                      "input",
                      {
                        type: "hidden",
                        name: `${o}[dropdown_items][${d}]`,
                        value: "",
                      },
                      d,
                    ),
                  ),
                ],
              });
            case Xs:
              return null;
          }
        }
        function hi(s) {
          const { index: t, item: n, setItem: r, removeItem: o } = s,
            l = (0, p.useContext)(Ds),
            c = (x) => {
              let f = structuredClone(n);
              (f.kind = x.target.value), r(f);
            },
            d = [
              {
                value: Qs,
                label: (0, a.we)("#StoreAdmin_PurchaseOptionsOrder_Package"),
              },
              {
                value: Js,
                label: (0, a.we)("#StoreAdmin_PurchaseOptionsOrder_Bundle"),
              },
              {
                value: As,
                label: (0, a.we)("#StoreAdmin_PurchaseOptionsOrder_Header"),
              },
              {
                value: vs,
                label: (0, a.we)("#StoreAdmin_PurchaseOptionsOrder_Dropdown"),
              },
            ];
          let m;
          switch (n.kind) {
            case Xs:
              m = (0, e.jsx)(_i, { item: n, index: t });
              break;
            case Qs:
              m = (0, e.jsx)(fi, { item: n, setItem: r, index: t });
              break;
            case Js:
              m = (0, e.jsx)(xi, { item: n, setItem: r, index: t });
              break;
            case As:
              m = (0, e.jsx)(Si, { item: n, setItem: r, index: t });
              break;
            case vs:
              m = (0, e.jsx)(Ci, { item: n, setItem: r, index: t });
              break;
          }
          return (0, e.jsxs)("div", {
            className: nt.PurchaseOption,
            children: [
              !l.bHasErrors &&
                (0, e.jsx)("input", {
                  type: "hidden",
                  name: `app[purchase_options_order][order][${t}][kind]`,
                  value: n.kind,
                }),
              (0, e.jsxs)("div", {
                className: nt.PurchaseOptionFirstLine,
                children: [
                  (0, e.jsxs)("select", {
                    onChange: c,
                    value: n.kind,
                    children: [
                      (0, e.jsx)("option", { hidden: !0, value: Xs }),
                      d.map((x, f) =>
                        (0, e.jsx)(
                          "option",
                          { value: x.value, children: x.label },
                          f,
                        ),
                      ),
                    ],
                  }),
                  (0, e.jsx)("a", {
                    className: nt.RemovePurchaseOption,
                    onClick: o,
                    children: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_Remove",
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: nt.PurchaseOptionDetails,
                children: m,
              }),
            ],
          });
        }
        function _n(s) {
          return s.message === null
            ? null
            : (0, e.jsxs)("div", {
                className: nt.PurchaseOptionError,
                children: [
                  (0, e.jsx)(R.Q9b, { className: nt.Exclamation }),
                  s.message,
                ],
              });
        }
        function _i(s) {
          const t = Zs(s.item);
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)(_n, { message: t }),
          });
        }
        function fi(s) {
          const { item: t, index: n, setItem: r } = s,
            o = (0, p.useContext)(Ds),
            l = (m) => {
              const x = structuredClone(t);
              (x.package_id = m.value), r(x);
            },
            c = o.rgAllPackages.find((m) => m.packageid === t.package_id),
            d = {
              value: t.package_id,
              label: c
                ? c.name
                : (0, a.we)("#StoreAdmin_PurchaseOptionsOrder_Loading"),
            };
          return (0, e.jsxs)("div", {
            className: nt.PackageOption,
            children: [
              (0, e.jsx)(_n, { message: Zs(t) }),
              (0, e.jsx)(At.Ay, {
                className: "react-select-container",
                classNamePrefix: "react-select",
                isSearchable: !0,
                isMulti: !1,
                name: o.bHasErrors
                  ? void 0
                  : `app[purchase_options_order][order][${n}][package_id]`,
                placeholder: (0, a.we)(
                  "#StoreAdmin_PurchaseOptionsOrder_PackagePlaceholder",
                ),
                options: o.rgUnusedPackages,
                value: d,
                onChange: l,
              }),
            ],
          });
        }
        function xi(s) {
          const t = (0, p.useContext)(Ds),
            { item: n, setItem: r, index: o } = s,
            l = (d) => {
              const m = structuredClone(n);
              (m.bundle_id = d.value), r(m);
            };
          let c;
          if (n.bundle_id) {
            const d = t.rgAllBundles.find((m) => m.bundleid === n.bundle_id);
            c = {
              value: n.bundle_id,
              label: (0, a.we)(
                "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                d.name,
                n.bundle_id,
              ),
            };
          }
          return (0, e.jsxs)("div", {
            className: nt.BundleOption,
            children: [
              (0, e.jsx)(_n, { message: Zs(n) }),
              (0, e.jsx)(At.Ay, {
                className: "react-select-container",
                classNamePrefix: "react-select",
                isSearchable: !0,
                isMulti: !1,
                value: c,
                name: t.bHasErrors
                  ? void 0
                  : `app[purchase_options_order][order][${o}][bundle_id]`,
                placeholder: (0, a.we)(
                  "#StoreAdmin_PurchaseOptionsOrder_BundlePlaceholder",
                ),
                options: t.rgUnusedBundles,
                onChange: l,
              }),
            ],
          });
        }
        function Si(s) {
          const t = (0, p.useContext)(Ds),
            { index: n, item: r, setItem: o } = s,
            [l, c] = (0, p.useState)("english"),
            d = (r.header && r.header[l]) || "",
            m = (f) => {
              const h = f.target.value;
              let C = structuredClone(r);
              C.header === void 0 && (C.header = {}), (C.header[l] = h), o(C);
            },
            x = (f) => {
              const h = f.target.value;
              c(h);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_n, { message: Zs(r) }),
              (0, e.jsxs)("div", {
                className: nt.PurchaseOptionHeader,
                children: [
                  (0, e.jsx)("input", {
                    type: "hidden",
                    value: As,
                    name: `app[purchase_options_order][order][${n}][kind]`,
                  }),
                  (0, e.jsx)("input", {
                    type: "text",
                    onInput: m,
                    value: d,
                    name: `app[purchase_options_order][order][${n}][header][${l}]`,
                    className: nt.HeaderText,
                    placeholder: "Header text",
                  }),
                  t.rgValidLanguages.map((f, h) =>
                    f.value === l
                      ? null
                      : r.header && r.header[f.value]
                        ? (0, e.jsx)(
                            "input",
                            {
                              type: "hidden",
                              name: `app[purchase_options_order][order][${n}][header][${f.value}]`,
                              value: r.header[f.value],
                            },
                            h,
                          )
                        : null,
                  ),
                  (0, e.jsx)("select", {
                    value: l,
                    onChange: x,
                    className: nt.HeaderLanguage,
                    children: t.rgValidLanguages.map((f, h) =>
                      (0, e.jsx)(
                        "option",
                        { value: f.value, children: f.label },
                        h,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function Ci(s) {
          const t = (0, p.useContext)(Ds),
            { item: n, setItem: r, index: o } = s,
            [l, c] = (0, p.useState)("english"),
            [d, m] = (0, p.useState)("english"),
            x = (q) => {
              const V = structuredClone(n);
              V.dropdown_title || (V.dropdown_title = {}),
                (V.dropdown_title[l] = q.target.value),
                r(V);
            },
            f = (q) => {
              const V = structuredClone(n);
              V.description || (V.description = {}),
                (V.description[d] = q.target.value),
                r(V);
            },
            h = (q) => {
              const V = structuredClone(n);
              V.dropdown_items || (V.dropdown_items = []);
              let $e = { kind: "package", package_id: q.value[1] };
              V.dropdown_items.push($e), r(V);
            },
            C = t.rgUnusedPackages.map((q) => ({
              value: ["package", q.value],
              label: q.label,
            })),
            E = (q) => {
              if (q.package_id) {
                const V = t.rgAllPackages.find(
                  ($e) => $e.packageid === q.package_id,
                );
                return (0, e.jsx)("div", {
                  className: nt.DropdownOptionRow,
                  children: (0, e.jsx)("a", {
                    href: `${K.TS.PARTNER_BASE_URL}store/packagelanding/${q.package_id}`,
                    children: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                      V.name,
                      q.package_id,
                    ),
                  }),
                });
              } else if (q.bundle_id) {
                const V = t.rgAllBundles.find(
                  ($e) => $e.bundleid === q.bundle_id,
                );
                return (0, e.jsx)("div", {
                  className: nt.DropdownOptionRow,
                  children: (0, e.jsx)("a", {
                    href: `${K.TS.PARTNER_BASE_URL}bundles/view/${q.bundle_id}`,
                    children: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                      V.name,
                      q.bundle_id,
                    ),
                  }),
                });
              } else return null;
            },
            X = (q) => {
              const V = structuredClone(n);
              V.dropdown_items || (V.dropdown_items = []),
                V.dropdown_items.splice(q, 1),
                r(V);
            },
            xe = (q, V) => {
              const $e = structuredClone(n);
              $e.dropdown_items || ($e.dropdown_items = []);
              const [Ne] = $e.dropdown_items.splice(q, 1);
              $e.dropdown_items.splice(V, 0, Ne), r($e);
            };
          return (0, e.jsxs)("div", {
            className: nt.DropdownOption,
            children: [
              (0, e.jsx)(_n, { message: Zs(n) }),
              (0, e.jsxs)("div", {
                className: nt.TitleLine,
                children: [
                  (0, e.jsx)("label", {
                    children: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownTitleLabel",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    type: "text",
                    className: nt.TitleInput,
                    name: `app[purchase_options_order][order][${o}][dropdown_title][${l}]`,
                    value: (n.dropdown_title && n.dropdown_title[l]) || "",
                    placeholder: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownTitlePlaceholder",
                    ),
                    onChange: x,
                  }),
                  t.rgValidLanguages.map((q, V) =>
                    q.value === l
                      ? null
                      : n.dropdown_title &&
                          n.dropdown_title[q.value] &&
                          n.dropdown_title[q.value].trim().length > 0
                        ? (0, e.jsx)(
                            "input",
                            {
                              type: "hidden",
                              name: `app[purchase_options_order][order][${o}][dropdown_title][${q.value}]`,
                              value: n.dropdown_title[q.value],
                            },
                            V,
                          )
                        : null,
                  ),
                  (0, e.jsx)("select", {
                    value: l,
                    onChange: (q) => c(q.target.value),
                    className: nt.HeaderLanguage,
                    children: t.rgValidLanguages.map((q, V) =>
                      (0, e.jsx)(
                        "option",
                        { value: q.value, children: q.label },
                        V,
                      ),
                    ),
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: nt.DescriptionLine,
                children: [
                  (0, e.jsx)("label", {
                    children: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownDescriptionLabel",
                    ),
                  }),
                  (0, e.jsx)("select", {
                    value: d,
                    onChange: (q) => m(q.target.value),
                    className: nt.HeaderLanguage,
                    children: t.rgValidLanguages.map((q, V) =>
                      (0, e.jsx)(
                        "option",
                        { value: q.value, children: q.label },
                        V,
                      ),
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                type: "text",
                className: nt.DescriptionInput,
                name: `app[purchase_options_order][order][${o}][description][${d}]`,
                value: (n.description && n.description[d]) || "",
                onChange: f,
                placeholder: (0, a.we)(
                  "#StoreAdmin_PurchaseOptionsOrder_DropdownDescriptionPlaceholder",
                ),
              }),
              t.rgValidLanguages.map((q, V) =>
                q.value === d
                  ? null
                  : n.description &&
                      n.description[q.value] &&
                      n.description[q.value].trim().length > 0
                    ? (0, e.jsx)(
                        "input",
                        {
                          type: "hidden",
                          name: `app[purchase_options_order][order][${o}][description][${q.value}]`,
                          value: n.description[q.value],
                        },
                        V,
                      )
                    : null,
              ),
              (0, e.jsxs)("div", {
                className: nt.DropdownItemsCtn,
                children: [
                  (0, e.jsx)("label", {
                    children: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownItemsLabel",
                    ),
                  }),
                  (0, e.jsx)(At.Ay, {
                    className: "react-select-container",
                    classNamePrefix: "react-select",
                    isSearchable: !0,
                    isMulti: !1,
                    placeholder: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_PackagePlaceholder",
                    ),
                    options: C,
                    onChange: h,
                    controlShouldRenderValue: !1,
                  }),
                  (0, e.jsx)(Zt.A, {
                    render: E,
                    onDelete: X,
                    onMove: xe,
                    items: n.dropdown_items ?? [],
                  }),
                  (n.dropdown_items ?? []).map((q, V) =>
                    (0, e.jsxs)(
                      "div",
                      {
                        children: [
                          (0, e.jsx)("input", {
                            type: "hidden",
                            name: `app[purchase_options_order][order][${o}][dropdown_items][${V}][kind]`,
                            value: "package",
                          }),
                          (0, e.jsx)("input", {
                            type: "hidden",
                            name: `app[purchase_options_order][order][${o}][dropdown_items][${V}][package_id]`,
                            value: q.package_id,
                          }),
                        ],
                      },
                      V,
                    ),
                  ),
                ],
              }),
            ],
          });
        }
        function bi(s) {
          const {
              items: t,
              setItems: n,
              component: r,
              emptyItem: o,
              noItemsPlaceholder: l,
              addText: c,
            } = s,
            d = (C) => () => {
              if (C === 0) return;
              let E = [...t];
              const [X] = E.splice(C, 1);
              E.splice(C - 1, 0, X), n(E);
            },
            m = (C) => () => {
              if (C === t.length - 1) return;
              let E = [...t];
              const [X] = E.splice(C, 1);
              E.splice(C + 1, 0, X), n(E);
            },
            x = () => (n(t.concat([o()])), !1),
            f = (C) => (E) => {
              let X = [...t];
              (X[C] = E), n(X);
            },
            h = (C) => () => {
              let E = [...t];
              E.splice(C, 1), n(E);
            };
          return (0, e.jsxs)("div", {
            className: nt.ReorderableListWithArrows,
            children: [
              t.length > 0 &&
                t.map((C, E) =>
                  (0, e.jsx)(
                    Ai,
                    {
                      index: E,
                      item: C,
                      setItem: f(E),
                      removeItem: h(E),
                      component: r,
                      moveUp: d(E),
                      moveDown: m(E),
                    },
                    "reorderable-" + E,
                  ),
                ),
              t.length === 0 && l,
              (0, e.jsx)("a", { onClick: x, children: c }),
            ],
          });
        }
        function Ai(s) {
          const {
            index: t,
            item: n,
            setItem: r,
            moveUp: o,
            moveDown: l,
            removeItem: c,
          } = s;
          return (0, e.jsxs)("div", {
            className: nt.ReorderableListElement,
            children: [
              (0, e.jsxs)("div", {
                className: nt.ReorderableListUpAndDownCtn,
                children: [
                  (0, e.jsx)("div", { onClick: () => o(), children: "\u25B2" }),
                  (0, e.jsx)("div", { onClick: () => l(), children: "\u25BC" }),
                ],
              }),
              (0, e.jsx)("div", {
                className: nt.ReorderableListElementContents,
                children: (0, e.jsx)(s.component, {
                  index: t,
                  item: n,
                  setItem: r,
                  removeItem: c,
                }),
              }),
            ],
          });
        }
        var qs = i(78699),
          mr = i(7582),
          _a = i(24806),
          en = i(32093),
          Fn = i(50109),
          vi = i(43308),
          yi = i(72865),
          ji = i(83482),
          Pi = i(1431),
          gr = i.n(Pi);
        const Ei = { include_assets: !0, include_basic_info: !0 };
        function Di(s) {
          const { appid: t } = s,
            [n] = (0, _t.t7)(t, Ei),
            r = (0, yi.n9)();
          return !n || !t
            ? null
            : (0, e.jsx)("div", {
                className: gr().StoreItemCtn,
                children: (0, e.jsx)("div", {
                  className: gr().StoreItemRow,
                  children: (0, e.jsxs)("a", {
                    href: (0, ji.wJ)(n.GetStorePageURL(), r),
                    children: [
                      (0, e.jsx)("img", {
                        src: n.GetAssets().GetSmallCapsuleURL(),
                      }),
                      (0, e.jsxs)("div", {
                        className: gr().StoreItemDescription,
                        children: [n.GetShortDescription(), " "],
                      }),
                    ],
                  }),
                }),
              });
        }
        function fa(s) {
          const {
              text: t,
              placeholderToken: n,
              kvName: r,
              onChangeText: o,
              bOnlyDisplay: l,
              rgRealms: c,
              className: d,
            } = s,
            m = (0, Fn.E)(),
            x = a.A0.GetLanguageListForRealms(c),
            f = new Array();
          r &&
            x.forEach((C) => {
              f.push(
                (0, e.jsx)(
                  "input",
                  {
                    type: "hidden",
                    name: `${r}[${(0, ue.LgB)(C, "english")}]`,
                    value: (0, qs.VX)(t, C),
                  },
                  r + "_" + C,
                ),
              );
            });
          const h = (0, qs.VX)(t, m) || "";
          return (0, e.jsxs)("div", {
            className: d,
            children: [
              l
                ? (0, e.jsx)("div", {
                    children: h || (0, e.jsx)("i", { children: n }),
                  })
                : (0, e.jsx)("input", {
                    type: "text",
                    placeholder: (0, a.we)(n || "#KVInputBox_Default"),
                    value: h,
                    onChange: (C) => o(C.currentTarget.value, m),
                  }),
              f,
            ],
          });
        }
        var xa = i(35102),
          Ti = i(36500),
          tn = i.n(Ti),
          wi = i(64442),
          Ct = i.n(wi),
          Ii = i(14947);
        class ys {
          m_mapAppIDToDLCs = new Map();
          m_mapAppIDToSoundTracks = new Map();
          m_mapPromise = new Map();
          GetDLCForAppID(t) {
            return this.m_mapAppIDToDLCs.get(t);
          }
          GetSoundTracksForAppID(t) {
            return this.m_mapAppIDToSoundTracks.get(t);
          }
          async LoadDLCAndSoundTracksForAppID(t, n) {
            return (
              this.m_mapPromise.has(t) ||
                this.m_mapPromise.set(
                  t,
                  this.InternalLoadDLCAndSoundTracksForAppID(t, n),
                ),
              this.m_mapPromise.get(t)
            );
          }
          async InternalLoadDLCAndSoundTracksForAppID(t, n) {
            if (!this.m_mapAppIDToDLCs.has(t) && t != 0)
              try {
                let r = {
                    origin: self.origin,
                    cc: K.TS.COUNTRY || "US",
                    l: K.TS.LANGUAGE,
                  },
                  o = "";
                (0, K.yK)() == "partner"
                  ? (o = `${K.TS.PARTNER_BASE_URL}seasonpass/ajaxgetreleasedorupcomingdlc?parentappid=${t}`)
                  : (o = K.TS.STORE_BASE_URL + "dlc/" + t + "/ajaxgetdlclist");
                let l = await Yt().get(o, { params: r, cancelToken: n?.token }),
                  c = Array();
                l.data.dlcs &&
                  l.data.dlcs.forEach((d) => {
                    c.push({
                      appid: d.appid,
                      name: d.name,
                      is_released_somewhere: !!d.is_released_somewhere,
                    });
                  }),
                  this.m_mapAppIDToDLCs.set(t, c),
                  (c = Array()),
                  l.data.soundtracks &&
                    l.data.soundtracks.forEach((d) => {
                      c.push({
                        appid: d.appid,
                        name: d.name,
                        is_released_somewhere: !!d.is_released_somewhere,
                      });
                    }),
                  this.m_mapAppIDToSoundTracks.set(t, c);
              } catch (r) {
                const o = (0, ke.H)(r);
                console.error(
                  "LoadDLCAndSoundTracksForAppID for appid: " +
                    t +
                    " hit: " +
                    o.strErrorMsg,
                  o,
                );
              }
            return {
              dlcs: this.m_mapAppIDToDLCs.has(t)
                ? this.m_mapAppIDToDLCs.get(t)
                : [],
              soundtracks: this.m_mapAppIDToSoundTracks.has(t)
                ? this.m_mapAppIDToSoundTracks.get(t)
                : [],
            };
          }
          static s_Singleton;
          static Get() {
            return (
              ys.s_Singleton || (ys.s_Singleton = new ys()), ys.s_Singleton
            );
          }
          constructor() {
            (0, Ii.Gn)(this);
          }
        }
        function hr(s) {
          const [t, n] = (0, p.useState)(s),
            [r, o] = (0, p.useState)(ys.Get().GetDLCForAppID(t));
          return (
            (0, p.useEffect)(() => {
              s &&
                (s != t || !r) &&
                ys
                  .Get()
                  .LoadDLCAndSoundTracksForAppID(t, null)
                  .then((l) => {
                    o(l.dlcs), n(s);
                  });
            }, [t, s, r]),
            r
          );
        }
        function Mi(s) {
          const [t, n] = (0, p.useState)(s),
            [r, o] = (0, p.useState)(ys.Get().GetSoundTracksForAppID(t));
          return (
            (0, p.useEffect)(() => {
              s &&
                (s != t || !r) &&
                ys
                  .Get()
                  .LoadDLCAndSoundTracksForAppID(t, null)
                  .then((l) => {
                    o(l.soundtracks), n(s);
                  });
            }, [t, s, r]),
            r
          );
        }
        function Qh(s) {
          const t = hr(s);
          return useMemo(
            () => t?.filter((r) => !!r.is_released_somewhere) || null,
            [t],
          );
        }
        function Jh(s) {
          const t = hr(s);
          return useMemo(
            () => t?.filter((r) => !r.is_released_somewhere) || null,
            [t],
          );
        }
        function _r(s) {
          const {
              appid: t,
              setAppID: n,
              rgExcludeAppIDs: r,
              seasonPassID: o,
              bOnlyShowReleaseDLC: l,
              strLocalizedLabel: c,
              strLocalizedTooltip: d,
              fnResetAppID: m,
            } = s,
            x = hr(o.parentAppID),
            f = Mi(o.parentAppID),
            h = (0, p.useMemo)(
              () => [
                ...(x?.filter((X) => !l || !!X.is_released_somewhere) || []),
                ...(f?.filter((X) => !l || !!X.is_released_somewhere) || []),
              ],
              [x, f, l],
            ),
            C = (0, p.useMemo)(
              () => h?.filter((X) => !r || !r.includes(X.appid)),
              [h, r],
            ),
            E = (0, p.useMemo)(
              () =>
                C
                  ? C.map((X) => ({
                      label: (0, e.jsx)(Li, { appInfo: X }),
                      data: X.appid,
                    }))
                  : [],
              [C],
            );
          return C
            ? E.length == 0 && l
              ? (0, e.jsx)("div", {
                  className: (0, D.A)(kn.ErrorStylesWithIcon, "ErrorCtn"),
                  children: (0, a.we)("#SeasonPass_NoDLC"),
                })
              : (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(S.m, {
                      label: c || (0, a.we)("#SeasonPass_ShipDLC"),
                      tooltip: d || (0, a.we)("#SeasonPass_ShipDLC_ttip"),
                      selectedOption: t,
                      onChange: (X) => n(X.data),
                      rgOptions: E,
                    }),
                    !!(t && m) &&
                      (0, e.jsx)(S.$n, {
                        onClick: m,
                        children: (0, a.we)(
                          "#SeasonPass_CustomerComingSoonDLC_clear",
                        ),
                      }),
                  ],
                })
            : (0, e.jsx)(ns.t, {
                size: "small",
                position: "center",
                string: (0, a.we)("#Loading"),
              });
        }
        const ki = { include_release: !0 };
        function Li(s) {
          const { appInfo: t } = s,
            [n] = (0, _t.t7)(t.appid, ki);
          return n
            ? (0, e.jsxs)("span", {
                children: [
                  t.name,
                  " - (",
                  n.BIsComingSoon()
                    ? (0, a.we)("#SeasonPass_Customer_ComingSoon_Mark")
                    : (0, a.TW)(n.GetReleaseDateRTime()),
                  ")",
                ],
              })
            : (0, e.jsx)("span", { children: t.name });
        }
        function Sa(s) {
          const {
              mileStone: t,
              index: n,
              bCreate: r,
              bAppHasSteamChinaToolsEnabled: o,
              rgShippedMilestoneIDs: l,
            } = s,
            [c, d, m] = (0, _e.uD)(),
            x = p.useMemo(() => (0, a.O9)(o), [o]),
            f = p.useMemo(
              () => (0, qs.mn)(t?.milestone_desc || { english: "" }),
              [t?.milestone_desc],
            ),
            h = p.useMemo(
              () => ["seasonpass", "commitments", "" + n, "milestone_desc"],
              [n],
            ),
            C = (0, H.KC)(x, f, "app", r ? void 0 : h);
          return (
            (0, p.useEffect)(() => {
              if (c) {
                const E = (0, ue.sfN)(C.strActiveLanguage, ue.Bhc);
                Fn.O.Get().SetCurEditLanguage(E);
              }
            }, [C.strActiveLanguage, c]),
            (0, _e.hL)(Fn.O.Get().GetCallback(), (E) => {
              C.setActiveLanguage((0, ue.LgB)(E));
            }),
            (0, e.jsxs)("div", {
              className: (0, D.A)(Ct().EditBtn, tn().BtnCtn),
              children: [
                c && (0, e.jsx)(Bi, { hideModal: m, bCreate: r, ...s, ...C }),
                !r && C.rctHiddenInputs,
                (0, e.jsxs)(S.$n, {
                  onClick: d,
                  children: [
                    (0, a.we)(r ? "#SeasonPass_ItemNew" : "#Button_Edit"),
                    r &&
                      (0, e.jsx)(bs.o, {
                        tooltip: (0, a.we)("#SeasonPass_ItemNew_desc"),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function Bi(s) {
          const {
              hideModal: t,
              seasonPassID: n,
              mileStone: r,
              milestoneID: o,
              onSave: l,
              strActiveLanguage: c,
              rgLanguages: d,
              rctLanguageSelect: m,
              mapValues: x,
              bAppHasSteamChinaToolsEnabled: f,
              bCreate: h,
              rgShippedMilestoneIDs: C,
            } = s,
            E = (0, mr.f1)(),
            [X, xe] = (0, p.useState)(r?.internal_desc || ""),
            [q, V] = (0, p.useState)(r?.expected_delivery || E + 1440 * 60),
            [$e, Ne] = (0, p.useState)(r?.display_format || "date_quarter"),
            [We, ss] = (0, p.useState)(r?.localized_title || { english: "" }),
            [Hs] = (0, p.useState)(r?.milestone_desc || {}),
            [it, ws] = (0, p.useState)(r?.coming_soon_appid),
            [xs, zc] = (0, p.useState)(!!r?.backfilled_release),
            Ka = (0, p.useRef)(void 0),
            [Wc, Gc] = (0, p.useState)(!1),
            Vc = (0, p.useMemo)(
              () =>
                f
                  ? [en.TU.k_ESteamRealmGlobal, en.TU.k_ESteamRealmChina]
                  : [en.TU.k_ESteamRealmGlobal],
              [f],
            ),
            Kc = (0, a.we)(r ? "#SeasonPass_Update" : "#SeasonPass_Create"),
            $a = C?.includes(o);
          return (0, e.jsx)(Cs.E, {
            active: !0,
            children: (0, e.jsx)(ls.o0, {
              strTitle: Kc,
              strDescription: (0, a.we)("#SeasonPass_Create_desc"),
              bAllowFullSize: !0,
              bDisableBackgroundDismiss: !0,
              strOKButtonText: (0, a.we)(
                r ? "#Button_Update" : "#Button_Create",
              ),
              bOKDisabled: We.english.length < 3,
              onOK: () => {
                const Is = {};
                x.forEach((ds, yr) => {
                  Is[yr] = ds.Value;
                }),
                  l({
                    milestone_id: o,
                    internal_desc: X,
                    expected_delivery: q,
                    submit_time: E,
                    submit_accountid: bt.iA.accountid,
                    display_format: $e,
                    localized_title: We,
                    milestone_desc: Is,
                    milestone_image: void 0,
                    backfilled_release: xs,
                    coming_soon_appid: it,
                  }),
                  h && x.forEach((ds, yr) => x.get(yr).Set("")),
                  t();
              },
              onCancel: () => {
                x.forEach((Is, ds) => {
                  Hs?.[ds] ? x.get(ds).Set(Hs[ds]) : x.get(ds).Set("");
                }),
                  t();
              },
              children: (0, e.jsxs)("div", {
                className: Ct().EditMilestoneDialog,
                children: [
                  (0, e.jsxs)("h3", {
                    children: [
                      (0, a.we)("#SeasonPass_CustomerTitle"),
                      (0, e.jsx)("span", {
                        className: "DialogInputRequirementLabel",
                        children: (0, a.we)("#Steamworks_Generic_Required"),
                      }),
                    ],
                  }),
                  (0, e.jsx)("p", {
                    children: (0, a.we)("#SeasonPass_CustomerSubtitle"),
                  }),
                  (0, e.jsx)(fa, {
                    text: We,
                    className: Ct().MilestoneTitleField,
                    onChangeText: (Is, ds) => {
                      (0, qs.pV)(We, ds, Is), ss({ ...We });
                    },
                    kvName: void 0,
                    rgRealms: Vc,
                  }),
                  (0, e.jsxs)("h3", {
                    children: [
                      (0, a.we)("#SeasonPass_CustomerDescription_Title"),
                      (0, e.jsx)("span", {
                        className: "DialogInputRequirementLabel",
                        children: (0, a.we)("#Steamworks_Generic_Required"),
                      }),
                    ],
                  }),
                  (0, e.jsx)("p", {
                    children: (0, a.we)(
                      "#SeasonPass_CustomerDescription_Subtitle",
                    ),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, a.we)(
                      "#SeasonPass_CustomerDescription_Images",
                    ),
                  }),
                  (0, e.jsx)(Ae.default, {
                    language: c,
                    languages: d,
                    editorType: "milestone",
                    rctToolbarControls: m,
                    mapValues: x,
                    rctAboveEditor: (0, e.jsx)(Di, {
                      appid: r?.completed_appid || it,
                    }),
                  }),
                  !$a &&
                    (0, e.jsx)(_r, {
                      appid: it,
                      setAppID: ws,
                      rgExcludeAppIDs: null,
                      seasonPassID: n,
                      strLocalizedLabel: (0, a.we)(
                        "#SeasonPass_CustomerComingSoonDLC",
                      ),
                      strLocalizedTooltip: (0, a.we)(
                        "#SeasonPass_CustomerComingSoonDLC_ttip",
                      ),
                    }),
                  !$a &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsxs)("div", {
                          className: Ct().DatePickerRow,
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, e.jsx)("h3", {
                                  children: (0, a.we)(
                                    xs
                                      ? "#SeasonPass_Backfill_date"
                                      : "#SeasonPass_Delivery",
                                  ),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, a.we)(
                                    xs
                                      ? "#SeasonPass_Backfill_date_ttip"
                                      : "#SeasonPass_Delivery_ttip",
                                  ),
                                }),
                                (0, e.jsx)(vi.K, {
                                  nEarliestTime: xs ? 0 : E,
                                  fnGetTimeToUpdate: () => q,
                                  fnSetTimeToUpdate: V,
                                  fnIsValidDateTime: () => (xs ? q < E : E < q),
                                  strInvalidDateTimeLocalizedMsg: xs
                                    ? (0, a.we)(
                                        "#SeasonPass_BackFill_invalid_date",
                                      )
                                    : void 0,
                                }),
                              ],
                            }),
                            !xs &&
                              (0, e.jsxs)("div", {
                                children: [
                                  (0, e.jsx)("h3", {
                                    children: (0, a.we)(
                                      "#SeasonPass_CustomerDisplay",
                                    ),
                                  }),
                                  (0, e.jsx)("p", {
                                    children: (0, a.we)(
                                      "#SeasonPass_CustomerDisplay_ttip",
                                    ),
                                  }),
                                  (0, e.jsx)(xa.Ll, {
                                    value: $e,
                                    onChange: Ne,
                                    rgComingSoonOptionOverride: xa.ut,
                                    rtSteamReleaseDate: q,
                                    bExpandedDisplay: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, e.jsx)(S.Yh, {
                          ref: Ka,
                          label: (0, a.we)("#SeasonPass_Backfill_check"),
                          tooltip: (0, a.we)("#SeasonPass_Backfill_check_ttip"),
                          onChange: (Is) => {
                            let ds = !(!Is && q < E);
                            Gc(!ds),
                              ds ? zc(Is) : Ka.current.SetChecked(!0, !1);
                          },
                          checked: xs,
                        }),
                        Wc &&
                          (0, e.jsx)("div", {
                            className: kn.WarningStylesWithIcon,
                            children: (0, a.we)("#SeasonPass_Backfill_warning"),
                          }),
                      ],
                    }),
                  (0, e.jsx)("br", {}),
                ],
              }),
            }),
          });
        }
        var Ni = i(11512),
          Oi = i(92264);
        function Ri(s) {
          const { milestoneID: t, rgPublishedMilestoneIDs: n, onDelete: r } = s,
            [o, l, c] = (0, _e.uD)();
          return !n || n?.includes(t)
            ? null
            : (0, e.jsxs)("div", {
                className: (0, D.A)(Ct().EditBtn, tn().BtnCtn),
                children: [
                  (0, e.jsx)(Cs.E, {
                    active: o,
                    children: (0, e.jsx)(ls.o0, {
                      strTitle: (0, a.we)("#Button_Delete"),
                      strDescription: (0, a.we)("#Dialog_AreYouSure"),
                      onOK: r,
                      bDestructiveWarning: !0,
                      bDisableBackgroundDismiss: !1,
                      closeModal: c,
                    }),
                  }),
                  (0, e.jsx)(S.$n, {
                    onClick: l,
                    children: (0, a.we)("#Button_Delete"),
                  }),
                ],
              });
        }
        var Ca = i(42415);
        function Fi(s) {
          const {
              hideModal: t,
              inputMilestone: n,
              setCurrentMilestone: r,
              seasonPassID: o,
              rgExcludedAppIDs: l,
            } = s,
            c = !n.completed_appid,
            d = !n.completed_event_gid,
            [m, x] = (0, p.useState)(null),
            [f, h] = (0, p.useState)(null);
          return (0, e.jsx)(Cs.E, {
            active: !0,
            children: (0, e.jsxs)(ls.o0, {
              bAllowFullSize: !0,
              bDisableBackgroundDismiss: !0,
              strTitle: (0, a.we)("#SeasonPass_PostShipLink"),
              strDescription: (0, a.we)("#SeasonPass_PostShipLink_Desc"),
              closeModal: t,
              bOKDisabled: !m && !f,
              onOK: () => {
                const C = { ...n };
                c && m && (C.completed_appid = m),
                  d && f && (C.completed_event_gid = f),
                  r(C);
              },
              children: [
                c &&
                  (0, e.jsxs)("div", {
                    className: Ct().OptionDetails,
                    children: [
                      (0, e.jsx)(S.JU, {
                        children: (0, a.we)("#SeasonPass_UpdateLaunch_dlc"),
                      }),
                      (0, e.jsx)(_r, {
                        appid: m,
                        setAppID: x,
                        rgExcludeAppIDs: l,
                        seasonPassID: o,
                        bOnlyShowReleaseDLC: !0,
                      }),
                    ],
                  }),
                d &&
                  (0, e.jsxs)("div", {
                    className: Ct().OptionDetails,
                    children: [
                      (0, e.jsxs)(S.JU, {
                        children: [
                          (0, a.we)("#SeasonPass_UpdateLaunch_update"),
                          (0, e.jsx)(bs.o, {
                            tooltip: (0, a.we)("#SeasonPass_AddLaunchEvent"),
                          }),
                        ],
                      }),
                      (0, e.jsx)(Ca.q, {
                        appid: o.parentAppID,
                        selectedEventGID: f,
                        fnSetUpdateEvent: (C, E) => h(E),
                        bFilterOutDrafts: !0,
                      }),
                      !!bt.iA.is_support &&
                        (0, e.jsx)("div", {
                          className: Ke().ValveOnlyBackground,
                          children: (0, e.jsxs)("div", {
                            children: ["Selected GID: ", f],
                          }),
                        }),
                    ],
                  }),
              ],
            }),
          });
        }
        const Hi = { include_release: !0, include_included_items: !0 };
        function Ui(s) {
          const {
              inputMilestone: t,
              setCurrentMilestone: n,
              seasonPassID: r,
              rgAllMilestones: o,
              index: l,
              rgShippedMilestoneIDs: c,
            } = s,
            [d] = (0, _t.t7)(t.completed_appid, Hi),
            [m, x, f] = (0, _e.uD)(),
            [h, C, E] = (0, _e.uD)(),
            X = !!c.includes(t.milestone_id),
            xe = !!(X && (!t.completed_appid || !t.completed_event_gid));
          return (0, e.jsxs)("div", {
            className: Ct().StatusRow,
            children: [
              !!X &&
                (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsx)("div", {
                    className: Ct().CheckMark,
                    children: "\u2713",
                  }),
                }),
              !!t.completed_appid &&
                (0, e.jsxs)("a", {
                  href: `${be.TS.STORE_BASE_URL}app/${t.completed_appid}`,
                  target: "_blank",
                  children: [d?.GetName() || "", " (", t.completed_appid, ")"],
                }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${l}][completed_appid]`,
                value: t.completed_appid ? t.completed_appid : "",
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${l}][completed_event_gid]`,
                value: t.completed_event_gid ? "" + t.completed_event_gid : "",
              }),
              !!t.completed_event_gid &&
                (0, e.jsx)("a", {
                  href: `${be.TS.STORE_BASE_URL}news/app/${r.parentAppID}/view/${t.completed_event_gid}`,
                  target: "_blank",
                  children: (0, a.we)("#SeasonPass_ViewLaunchEvent"),
                }),
              !X &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    m &&
                      (0, e.jsx)(zi, {
                        inputMilestone: t,
                        setCurrentMilestone: n,
                        rgExcludedAppIDs: ba(o, r, t.milestone_id),
                        seasonPassID: r,
                        hideModal: f,
                      }),
                    (0, e.jsx)(S.$n, {
                      onClick: x,
                      children: (0, a.we)(
                        t.completed_appid ||
                          t.completed_event_gid ||
                          t.backfilled_release
                          ? "#SeasonPass_UpdateLaunch_Edit"
                          : "#SeasonPass_UpdateLaunch",
                      ),
                    }),
                  ],
                }),
              !!xe &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    h &&
                      (0, e.jsx)(Fi, {
                        setCurrentMilestone: n,
                        inputMilestone: t,
                        hideModal: E,
                        rgExcludedAppIDs: ba(o, r, t.milestone_id),
                        seasonPassID: r,
                      }),
                    (0, e.jsx)(oe.Gq, {
                      toolTipContent: (0, a.we)(
                        "#SeasonPass_PostShipLink_Button_ttip",
                      ),
                      children: (0, e.jsxs)(S.$n, {
                        onClick: C,
                        children: [
                          (0, a.we)("#SeasonPass_PostShipLink_Button"),
                          (0, e.jsx)(bs.o, { tooltip: void 0 }),
                        ],
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        function ba(s, t, n) {
          const r = new Array();
          return (
            r.push(t.dlcAppID),
            s.forEach((o) => {
              o.milestone_id != n &&
                o.completed_appid &&
                r.push(o.completed_appid);
            }),
            r
          );
        }
        function zi(s) {
          const {
              hideModal: t,
              inputMilestone: n,
              setCurrentMilestone: r,
              seasonPassID: o,
              rgExcludedAppIDs: l,
            } = s,
            [c, d] = (0, p.useState)(n.completed_appid),
            [m, x] = (0, p.useState)(n.completed_event_gid),
            [f, h] = (0, p.useState)(() => !!n.completed_appid),
            [C, E] = (0, p.useState)(!!n.completed_event_gid);
          return (0, e.jsx)(Cs.E, {
            active: !0,
            children: (0, e.jsx)(ls.o0, {
              bAllowFullSize: !0,
              bDisableBackgroundDismiss: !0,
              strTitle: (0, a.PP)(
                "#SeasonPass_UpdateLaunch_title",
                n.localized_title?.[be.TS.LANGUAGE] ||
                  n.localized_title?.english,
              ),
              strDescription: (0, a.we)(
                n.backfilled_release
                  ? "#SeasonPass_UpdateLaunch_desc_backfill"
                  : "#SeasonPass_UpdateLaunch_desc",
              ),
              closeModal: t,
              bOKDisabled: f && !c,
              onOK: () => {
                r({ ...n, completed_appid: c, completed_event_gid: m });
              },
              children: (0, e.jsxs)("div", {
                className: (0, D.A)(Ct().ShippingTheMilestone),
                children: [
                  (0, e.jsx)("div", {
                    className: (0, D.A)(Ct().ShippingType),
                    children: (0, e.jsxs)(S.G5, {
                      children: [
                        (0, e.jsx)(S.lr, {
                          children: (0, a.we)(
                            "#SeasonPass_UpdateLaunch_radio_label",
                          ),
                        }),
                        (0, e.jsx)(S.Od, {
                          checked: !f,
                          onChange: (X) => X && h(!1),
                          label: (0, a.we)(
                            "#SeasonPass_UpdateLaunch_radio_label_1",
                          ),
                        }),
                        (0, e.jsx)(S.Od, {
                          checked: f,
                          onChange: (X) => X && h(!0),
                          label: (0, a.we)(
                            "#SeasonPass_UpdateLaunch_radio_label_2",
                          ),
                          tooltip: (0, a.we)(
                            "#SeasonPass_UpdateLaunch_radio_label_2_ttip",
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)("br", {}),
                  !!(!f || C) &&
                    (0, e.jsxs)("div", {
                      className: Ct().OptionDetails,
                      children: [
                        (0, e.jsxs)(S.JU, {
                          children: [
                            (0, a.we)("#SeasonPass_UpdateLaunch_update"),
                            (0, e.jsx)(bs.o, {
                              tooltip: (0, a.we)("#SeasonPass_AddLaunchEvent"),
                            }),
                          ],
                        }),
                        (0, e.jsx)(Ca.q, {
                          appid: o.parentAppID,
                          selectedEventGID: m,
                          fnSetUpdateEvent: (X, xe) => x(xe),
                          bFilterOutDrafts: !0,
                        }),
                        !!bt.iA.is_support &&
                          (0, e.jsx)("div", {
                            className: Ke().ValveOnlyBackground,
                            children: (0, e.jsxs)("div", {
                              children: ["Selected GID: ", m],
                            }),
                          }),
                      ],
                    }),
                  f &&
                    (0, e.jsxs)("div", {
                      className: Ct().OptionDetails,
                      children: [
                        (0, e.jsx)(S.JU, {
                          children: (0, a.we)("#SeasonPass_UpdateLaunch_dlc"),
                        }),
                        (0, e.jsx)(_r, {
                          appid: c,
                          setAppID: d,
                          rgExcludeAppIDs: l,
                          seasonPassID: o,
                          bOnlyShowReleaseDLC: !0,
                          fnResetAppID: () => {
                            h(!1), d(void 0);
                          },
                        }),
                      ],
                    }),
                  f &&
                    !C &&
                    (0, e.jsx)("div", {
                      className: Ct().OptionDetails,
                      children: (0, e.jsx)(S.Yh, {
                        label: (0, a.we)("#SeaosnPass_OptionalEvents"),
                        checked: C,
                        onChange: (X) => E(X),
                      }),
                    }),
                ],
              }),
            }),
          });
        }
        function Wi(s) {
          const {
            seasonPassData: t,
            seasonPassID: n,
            rgPublishedMilestoneIDs: r,
            bAppHasSteamChinaToolsEnabled: o,
            fnDeleteMilestoneByID: l,
            rgShippedMilestoneIDs: c,
          } = s;
          return (0, e.jsxs)("div", {
            className: Ct().MilestoneTable,
            children: [
              (0, e.jsx)(S.JU, {
                children: (0, a.we)("#SeasonPass_Milestone_table"),
              }),
              (0, e.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("th", {
                          children: (0, a.we)("#SeasonPass_Milestone_Title"),
                        }),
                        (0, e.jsx)("th", {}),
                      ],
                    }),
                  }),
                  (0, e.jsx)("tbody", {
                    children: t?.commitments?.map((d, m) =>
                      (0, e.jsx)(
                        Gi,
                        {
                          inputMilestone: d,
                          index: m,
                          seasonPassID: n,
                          rgAllMilestones: t.commitments,
                          bAppHasSteamChinaToolsEnabled: o,
                          rgPublishedMilestoneIDs: r,
                          rgShippedMilestoneIDs: c,
                          fnDeleteMilestone: () => l(d.milestone_id),
                        },
                        "row" + d.milestone_id,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function Aa(s) {
          const { milestone: t, index: n } = s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][milestone_id]`,
                value: t ? t.milestone_id : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][internal_desc]`,
                value: t ? t.internal_desc : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][submit_time]`,
                value: t ? t.submit_time : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][submit_accountid]`,
                value: t ? t.submit_accountid : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][expected_delivery]`,
                value: t ? t.expected_delivery : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][display_format]`,
                value: t ? t.display_format : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][backfilled_release]`,
                value: t ? String(!!t.backfilled_release) : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][coming_soon_appid]`,
                value: t ? t.coming_soon_appid : void 0,
              }),
              !t &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `app[seasonpass][commitments][${n}][localized_title]`,
                      value: void 0,
                    }),
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `app[seasonpass][commitments][${n}][milestone_desc]`,
                      value: void 0,
                    }),
                  ],
                }),
            ],
          });
        }
        function Gi(s) {
          const {
              inputMilestone: t,
              index: n,
              seasonPassID: r,
              rgAllMilestones: o,
              bAppHasSteamChinaToolsEnabled: l,
              rgPublishedMilestoneIDs: c,
              fnDeleteMilestone: d,
              rgShippedMilestoneIDs: m,
            } = s,
            [x, f] = (0, p.useState)(t),
            h = (0, mr.sB)(),
            C = !!m.includes(x.milestone_id),
            E = !C && x.expected_delivery < h,
            X = (0, p.useMemo)(
              () =>
                l
                  ? [en.TU.k_ESteamRealmGlobal, en.TU.k_ESteamRealmChina]
                  : [en.TU.k_ESteamRealmGlobal],
              [l],
            ),
            xe = (0, Fn.E)(),
            q = a.A0.GetELanguageFallback(xe);
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", {
                children: (0, e.jsxs)("div", {
                  className: (0, D.A)({
                    [Ct().TitlePreviewRow]: !0,
                    [Ct().Shipped]: C,
                  }),
                  children: [
                    (0, e.jsx)(Aa, { milestone: x, index: n }),
                    (0, e.jsx)(fa, {
                      text: x.localized_title,
                      className: Ct().Title,
                      onChangeText: null,
                      kvName: `app[seasonpass][commitments][${n}][localized_title]`,
                      bOnlyDisplay: !0,
                      placeholderToken: (0, a.we)(
                        "#SeasonPass_NoLang_Fallback",
                        (0, a.we)("#Language_" + (0, ue.LgB)(xe)),
                        (0, a.we)("#Language_" + (0, ue.LgB)(q)),
                      ),
                      rgRealms: X,
                    }),
                    C
                      ? (0, e.jsx)("div", {
                          className: (0, D.A)(Ct().Date, Ct().Released),
                          children: (0, a.we)("#SeasonPass_Released"),
                        })
                      : (0, e.jsx)(e.Fragment, {
                          children: x?.backfilled_release
                            ? (0, e.jsx)("div", {
                                className: Ct().PublishReminder,
                                children: (0, a.we)(
                                  "#SeasonPass_Backfill_require_publish",
                                ),
                              })
                            : (0, e.jsxs)("div", {
                                className: (0, D.A)(Ct().Date),
                                children: [
                                  (0, e.jsxs)(oe.he, {
                                    toolTipContent:
                                      (0, a.we)("#SeasonPass_Delivery") +
                                      ": " +
                                      (0, a.TW)(x.expected_delivery) +
                                      " @ " +
                                      (0, Oi.KC)(x.expected_delivery),
                                    children: [
                                      (0, a.we)("#SeasonPass_Coming"),
                                      (0, e.jsx)("br", {}),
                                      (0, Ni.M)(
                                        x.display_format,
                                        x.expected_delivery,
                                        null,
                                        !0,
                                      ),
                                    ],
                                  }),
                                  E &&
                                    (0, e.jsx)("div", {
                                      className: (0, D.A)(
                                        E ? Wr().ErrorStylesWithIcon : void 0,
                                      ),
                                      children: (0, a.we)(
                                        "#SeasonPass_PassDueNote",
                                      ),
                                    }),
                                ],
                              }),
                        }),
                  ],
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)("div", {
                  className: Ct().BtnCtn,
                  children: [
                    (0, e.jsx)(Ui, {
                      inputMilestone: x,
                      setCurrentMilestone: f,
                      seasonPassID: r,
                      rgAllMilestones: o,
                      index: n,
                      rgShippedMilestoneIDs: m,
                    }),
                    (0, e.jsx)(Sa, {
                      milestoneID: x.milestone_id,
                      mileStone: x,
                      onSave: f,
                      index: n,
                      bAppHasSteamChinaToolsEnabled: l,
                      rgShippedMilestoneIDs: m,
                      seasonPassID: r,
                    }),
                    (0, e.jsx)(Ri, {
                      milestoneID: x.milestone_id,
                      onDelete: d,
                      rgPublishedMilestoneIDs: c,
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function Vi(s) {
          const {
              seasonPassID: t,
              seasonPassData: n,
              rgPublishedMilestoneIDs: r,
              rgShippedMilestoneIDs: o,
            } = s,
            [l, c] = (0, p.useState)(n || { commitments: [] }),
            { bAppHasSteamChinaToolsEnabled: d } = (0, ye.aJ)(),
            [m, x] = (0, p.useState)(n?.commitments?.length || 0),
            f = (0, p.useMemo)(() => {
              let E = 0;
              do E = Math.floor(Math.random() * 9e4) + 1e4;
              while (
                l?.commitments?.findIndex((X) => X.milestone_id == E) >= 0
              );
              return E;
            }, [l]),
            h = (0, p.useCallback)(
              (E) =>
                !!l.commitments?.some(
                  (X) =>
                    (0, qs.nU)(X.localized_title, E) ||
                    (0, qs.nU)(X.milestone_desc, E),
                ),
              [l.commitments],
            ),
            C = [];
          if (m > l.commitments?.length)
            for (let E = l.commitments?.length; E < m; E++)
              C.push((0, e.jsx)(Aa, { index: E, milestone: null }, E));
          return (0, e.jsxs)("div", {
            className: tn().EditorCtn,
            children: [
              (0, e.jsx)(_a.yk, { fnLangHasData: h }),
              (0, e.jsx)(Ki, {
                seasonPassID: t,
                nNextMilestoneID: f,
                index: l?.commitments?.length || 0,
                fnAppendSeasonPass: (E) => {
                  c({ ...l, commitments: [...(l.commitments || []), E] }),
                    x(
                      Math.max(m, l.commitments ? l.commitments.length + 1 : 1),
                    );
                },
                bAppHasSteamChinaToolsEnabled: d,
                rgShippedMilestoneIDs: o,
              }),
              (0, e.jsx)($i, { seasonPassData: l, rgShippedMilestoneIDs: o }),
              (0, e.jsx)(Wi, {
                seasonPassID: t,
                seasonPassData: l,
                bAppHasSteamChinaToolsEnabled: d,
                rgPublishedMilestoneIDs: r,
                rgShippedMilestoneIDs: o,
                fnDeleteMilestoneByID: (E) => {
                  const X = l.commitments.findIndex(
                    (xe) => xe.milestone_id == E,
                  );
                  X >= 0 &&
                    (l.commitments.splice(X, 1),
                    c({ ...l, commitments: [...l.commitments] }));
                },
              }),
              C,
              !!bt.iA.is_support &&
                (0, e.jsx)("div", {
                  className: Ke().ValveOnlyBackground,
                  children: (0, e.jsx)(S.$n, {
                    onClick: (E) =>
                      (0, Ls.pg)(
                        (0, e.jsx)(ls.o0, {
                          strTitle: "Clear?",
                          strDescription: "Are you sure?",
                          onOK: () => c({ commitments: [] }),
                        }),
                        (0, Gs.uX)(E),
                      ),
                    children: "(VO) Clear All Milestones (in memory)",
                  }),
                }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("br", {}),
            ],
          });
        }
        function Ki(s) {
          const {
            seasonPassID: t,
            fnAppendSeasonPass: n,
            nNextMilestoneID: r,
            index: o,
            bAppHasSteamChinaToolsEnabled: l,
            rgShippedMilestoneIDs: c,
          } = s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, D.A)("instructions"),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, D.A)("title2"),
                    children: [
                      (0, a.we)("#SeasonPass_Title"),
                      " ",
                      (0, e.jsx)("span", {
                        className: "small",
                        children: (0, e.jsx)("a", {
                          href: `${be.TS.PARTNER_BASE_URL}doc/store/seasonpass`,
                          target: "_blank",
                          children: (0, a.we)("#AssetRequest_General_SeeDocs"),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("br", { style: { clear: "left" } }),
                  (0, e.jsx)("div", { className: "grayRule", children: " " }),
                  (0, e.jsxs)("div", {
                    className: "instructions_table",
                    children: [
                      (0, e.jsxs)("div", {
                        className: "instructions_table_row",
                        children: [
                          (0, e.jsx)("div", {
                            className: "instructions_table_cell left",
                            children: (0, e.jsx)("strong", {
                              children: (0, a.we)(
                                "#Appmgmg_Generic_Title_Overview",
                              ),
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            className: "instructions_table_cell",
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, a.we)("#SeasonPass_Desc"),
                              }),
                              (0, e.jsx)("p", {
                                children: (0, a.we)("#SeasonPass_Desc2"),
                              }),
                              (0, e.jsx)("p", {
                                children: (0, a.we)("#SeasonPass_Desc3"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: "instructions_table_row",
                        children: [
                          (0, e.jsx)("div", {
                            className: "instructions_table_cell left",
                            children: (0, e.jsx)("strong", {
                              children: (0, a.we)(
                                "#Appmgmg_Generic_Title_Releasing",
                              ),
                            }),
                          }),
                          (0, e.jsx)("div", {
                            className: "instructions_table_cell",
                            children: (0, e.jsxs)("p", {
                              children: [
                                " ",
                                (0, a.oW)(
                                  "#SeasonPass_Desc_Releasing",
                                  (0, e.jsx)("a", {
                                    href: `${be.TS.PARTNER_BASE_URL}doc/store/seasonpass#release`,
                                    target: "_blank",
                                  }),
                                ),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: tn().CreationButtonRow,
                children: [
                  (0, e.jsx)("span", {
                    className: tn().LangBox,
                    children: (0, e.jsx)(_a.iN, {}),
                  }),
                  (0, e.jsx)("div", {
                    className: tn().MilestoneButton,
                    children: (0, e.jsx)(Sa, {
                      onSave: n,
                      milestoneID: r,
                      index: o,
                      bCreate: !0,
                      bAppHasSteamChinaToolsEnabled: l,
                      rgShippedMilestoneIDs: c,
                      seasonPassID: t,
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function $i(s) {
          const { seasonPassData: t, rgShippedMilestoneIDs: n } = s,
            r = (0, mr.sB)(),
            [o, l, c] = (0, p.useMemo)(() => {
              const d =
                  t?.commitments?.filter(
                    (f) => !f.completed_time && !n.includes(f.milestone_id),
                  ) || [],
                m = d.filter(
                  (f) =>
                    f.expected_delivery < r + 10080 * 60 &&
                    !f.backfilled_release,
                ),
                x = d.filter(
                  (f) => f.expected_delivery < r && !f.backfilled_release,
                );
              return [d.length > 0, m.length > 0, x.length > 0];
            }, [t, r, n]);
          return o
            ? (0, e.jsx)(e.Fragment, {
                children:
                  c &&
                  (0, e.jsx)("div", {
                    className: Wr().ErrorStylesWithIcon,
                    children: (0, a.we)("#SeasonPass_PassDue"),
                  }),
              })
            : null;
        }
        var sn = i(47534),
          fr = i(24660);
        function Yi(s) {
          const { rgSocialMedia: t } = s,
            [n, r] = p.useState(t ? [...t] : []),
            [o, l] = p.useState(n.length),
            c = p.useCallback(
              (d) => {
                d.length > o && l(d.length), r(d);
              },
              [o],
            );
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(Xi, { ...s, rgSocialMediaItems: n, fnSetItems: c }),
              (0, e.jsx)(el, { items: n, maxSeen: o }),
            ],
          });
        }
        function Xi(s) {
          const {
              rgSocialMediaItems: t,
              fnSetItems: n,
              rgSupportedSocialMediaTypes: r,
              rgValidationData: o,
            } = s,
            l = p.useMemo(
              () =>
                r
                  .filter(
                    (f) =>
                      t.findIndex((h) => h.type === f.type) === -1 ||
                      f.type === "qq" ||
                      f.type === "qqlink",
                  )
                  .map((f) => ({
                    label: (0, a.we)(`#StoreAdmin_SocialMedia_Type_${f.type}`),
                    data: f.type,
                  }))
                  .sort((f, h) => (f.label < h.label ? -1 : 1)),
              [r, t],
            ),
            c = (f) => {
              let h = t.slice();
              h.splice(f, 1), n(h);
            },
            d = (f, h) => {
              let C = t.slice();
              (0, Ms.yY)(C, f, h), n(C);
            },
            m = (f, h) => {
              const C = t.map((E, X) => (X === f ? { ...E, link: h } : E));
              n(C);
            },
            x = (f) => {
              let h = t.slice();
              h.push({ type: f, link: "" }), n(h);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Qi, { options: l, onAddLink: x }),
              (0, e.jsx)(Zt.A, {
                items: t,
                onDelete: c,
                onMove: d,
                render: (f, h) =>
                  (0, e.jsx)(
                    Zi,
                    {
                      item: f,
                      onUpdateLink: (C) => m(h, C),
                      validationData: o[f.type],
                    },
                    f.type,
                  ),
              }),
            ],
          });
        }
        function Qi(s) {
          const { options: t, onAddLink: n } = s,
            r = (o) => {
              const l = o.data;
              l && n(l);
            };
          return (0, e.jsx)("div", {
            className: sn.AddLinkDropDown,
            children: (0, e.jsx)(S.ZU, {
              strDefaultLabel: (0, a.we)("#StoreAdmin_SocialMedia_Add"),
              controlled: !0,
              rgOptions: t,
              onChange: r,
              selectedOption: null,
            }),
          });
        }
        function Ji(s, t) {
          let n = !0,
            r = "";
          return (
            t.prefix
              ? (s.type === "mastodon"
                  ? (r = (0, a.we)(
                      "#StoreAdmin_SocialMedia_ValidationMastodon",
                      t.prefix.join(", "),
                    ))
                  : (r = (0, a.we)(
                      "#StoreAdmin_SocialMedia_ValidationPrefix",
                      t.prefix.join(", "),
                    )),
                s.link &&
                  ((n = !1),
                  t.prefix.forEach((o) => {
                    s.link.startsWith(o) && (n = !0);
                  })))
              : t.number
                ? ((r = (0, a.we)("#StoreAdmin_SocialMedia_ValidationNumber")),
                  s.link && (n = /^\d+$/.test(s.link)))
                : t.text
                  ? (r = (0, a.we)("#StoreAdmin_SocialMedia_ValidationText"))
                  : t.regex &&
                    s.type === "tumblr" &&
                    (r = (0, a.we)("#StoreAdmin_SocialMedia_ValidationTumblr")),
            { bValid: n, strTooltip: r }
          );
        }
        function Zi(s) {
          const { item: t, onUpdateLink: n, validationData: r } = s;
          let o;
          r.number
            ? (o = (0, a.we)("#StoreAdmin_SocialMedia_EnterNumber"))
            : r.text
              ? (o = (0, a.we)("#StoreAdmin_SocialMedia_EnterName"))
              : (o = (0, a.we)("#StoreAdmin_SocialMedia_EnterLink"));
          const { bValid: l, strTooltip: c } = Ji(t, r);
          return (0, e.jsxs)("div", {
            className: sn.SocialMediaRow,
            children: [
              (0, e.jsx)("div", {
                className: sn.SocialMediaType,
                children: (0, a.we)(`#StoreAdmin_SocialMedia_Type_${t.type}`),
              }),
              (0, e.jsx)(fr.BA, {
                className: sn.SocialMediaLink,
                type: "text",
                value: t.link,
                placeholder: o,
                onChange: (d) => n(d.target.value),
              }),
              c &&
                (0, e.jsx)(oe.he, {
                  className: sn.SocialMediaTooltip,
                  toolTipContent: c,
                  children: "(?)",
                }),
              !l &&
                (0, e.jsx)("div", {
                  className: sn.ValidationError,
                  children: c,
                }),
            ],
          });
        }
        function qi(s, t) {
          let n = Array(),
            r = 0;
          for (
            s.forEach((o) => {
              o.link &&
                (n.push(
                  p.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${r}][type]`,
                    value: o.type,
                  }),
                ),
                n.push(
                  p.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${r}][link]`,
                    value: o.link,
                  }),
                ),
                r++);
            });
            r < t;
          )
            n.push(
              p.createElement("input", {
                type: "hidden",
                name: `app[content][ordered_social_links][${r}]`,
                value: "",
              }),
            ),
              r++;
          return (
            [
              "discord_server",
              "youtube",
              "facebook",
              "twitter",
              "twitch",
            ].forEach((o) => {
              n.push(
                p.createElement("input", {
                  type: "hidden",
                  name: `app[content][links][${o}]`,
                  value: "",
                }),
              );
            }),
            n
          );
        }
        function el(s) {
          const { items: t, maxSeen: n } = s,
            r = p.useMemo(() => qi(t, n), [t, n]);
          return (0, e.jsxs)(e.Fragment, { children: [...r] });
        }
        var cs = i(23256);
        function tl(s) {
          const {
              rgAntiCheatData: t,
              rgSupportedAntiCheatOptions: n,
              rgLanguages: r,
              rgSupportedAntiCheatBootProtections: o,
            } = s,
            l = p.useMemo(() => new Map(r), [r]),
            c = (0, p.useMemo)(
              () =>
                Object.entries(n).map(([V, $e]) => ({
                  label: (0, a.we)(`#StoreAdmin_AntiCheat_Type_${V}`),
                  data: V,
                })),
              [n],
            ),
            d = (V) => {
              V.data &&
                (x(V.data),
                V.data !== "none" &&
                  V.data !== "unspecified" &&
                  V.data !== "other" &&
                  h(n[V.data].kernel));
            },
            [m, x] = (0, p.useState)(t.type),
            [f, h] = (0, p.useState)(t.kernel),
            [C, E] = (0, p.useState)(t.uninstall),
            [X, xe] = (0, p.useState)(t.bootprotect),
            q = m !== "none" && m !== "unspecified";
          return (0, e.jsxs)("div", {
            className: "section",
            id: "anti_cheat",
            children: [
              (0, e.jsx)("h2", {
                children: (0, a.we)("#StoreAdmin_AntiCheat_Header"),
              }),
              (0, e.jsx)("div", { className: "grayRule" }),
              (0, e.jsx)("p", {
                children: (0, a.we)("#StoreAdmin_AntiCheat_Description"),
              }),
              (0, e.jsx)("p", {
                children: (0, a.we)("#StoreAdmin_AntiCheat_Description2"),
              }),
              (0, e.jsx)(fn, {
                label: (0, a.we)("#StoreAdmin_AntiCheat_ServiceLabel"),
                children: (0, e.jsx)(rl, {
                  options: c,
                  selectedOption: m,
                  onSelectionChanged: d,
                }),
              }),
              m === "other" &&
                (0, e.jsx)(al, { values: t.otherNameLoc, mapLanguages: l }),
              q && (0, e.jsx)(ol, { checked: f, onChange: h }),
              q && f && (0, e.jsx)(il, { checked: C, onChange: E }),
              q &&
                (0, e.jsx)(cl, { supported: o, currentValue: X, onChange: xe }),
              (0, e.jsx)(ul, {
                selectedOption: m !== "unspecified" ? m : "",
                kernelMode: q ? f : !1,
                uninstallsCompletely: q && f ? C : !1,
                bootProtection: X != "none" ? X : "",
              }),
            ],
          });
        }
        function fn(s) {
          const { label: t, children: n } = s;
          return (0, e.jsxs)("div", {
            className: "formrow flexRow",
            children: [
              t
                ? (0, e.jsx)("div", { className: "formlabel", children: t })
                : (0, e.jsx)("div", {
                    className: "formlabel",
                    children: "\xA0",
                  }),
              (0, e.jsx)("div", {
                className: "formdata settingsBlock",
                children: (0, e.jsx)("div", { className: "left", children: n }),
              }),
            ],
          });
        }
        function sl(s) {
          const { children: t } = s;
          return (0, e.jsx)("div", {
            className: cs.FormRowIndent,
            children: t,
          });
        }
        function nl(s) {
          const { children: t } = s;
          return (0, e.jsx)("div", {
            className: cs.FormRowHeader,
            children: t,
          });
        }
        function rl(s) {
          const { options: t, selectedOption: n, onSelectionChanged: r } = s;
          return (0, e.jsx)("div", {
            className: cs.AntiCheatDropDown,
            children: (0, e.jsx)(S.ZU, {
              controlled: !0,
              rgOptions: t,
              onChange: r,
              selectedOption: n,
            }),
          });
        }
        function al(s) {
          const { values: t, mapLanguages: n } = s,
            {
              strActiveLanguage: r,
              mapValues: o,
              rctLanguageSelect: l,
              rctHiddenInputs: c,
            } = (0, H.KC)(n, t, "app", ["game", "3panticheat", "othernameloc"]),
            d = o.get(r),
            m = (0, _e.gc)(d);
          return (0, e.jsxs)(fn, {
            children: [
              (0, e.jsx)("div", {
                className: cs.LanguageSelector,
                children: l,
              }),
              (0, e.jsx)(S.pd, {
                className: cs.OtherSerivceName,
                type: "text",
                value: m,
                placeholder: "Enter the service name",
                onChange: (x) => d.Set(x.target.value),
                maxLength: 256,
              }),
              c,
            ],
          });
        }
        function ol(s) {
          const { checked: t, onChange: n } = s;
          return (0, e.jsxs)(fn, {
            children: [
              (0, e.jsx)(S.Yh, {
                className: (0, D.A)(cs.KernelMode, cs.CheckboxLabel),
                label: (0, a.we)("#StoreAdmin_AntiCheat_KernelModeLabel"),
                checked: t,
                onChange: n,
              }),
              (0, e.jsx)("div", {
                className: cs.CheckboxDescription,
                children: (0, a.we)(
                  "#StoreAdmin_AntiCheat_KernelModelDescription_Other",
                ),
              }),
            ],
          });
        }
        function il(s) {
          const { checked: t, onChange: n } = s;
          return (0, e.jsxs)(fn, {
            children: [
              (0, e.jsx)(S.Yh, {
                className: cs.CheckboxLabel,
                label: (0, a.we)(
                  "#StoreAdmin_AntiCheat_UninstallCompletelyLabel",
                ),
                checked: t,
                onChange: n,
              }),
              (0, e.jsx)("div", {
                className: cs.CheckboxDescription,
                children: (0, a.we)(
                  "#StoreAdmin_AntiCheat_UninstallCompletelyDescription",
                ),
              }),
            ],
          });
        }
        function ll(s) {
          return s == "none"
            ? (0, a.we)("#StoreAdmin_AntiCheat_BootProtection_None")
            : s == "secureboot_tpm2"
              ? (0, a.we)("#StoreAdmin_AntiCheat_BootProtection_SecureBootTPM2")
              : s;
        }
        function cl(s) {
          const { supported: t, currentValue: n, onChange: r } = s;
          if (t.length == 0) return null;
          let o = t.map((d) => ({ label: ll(d), data: d })),
            l = t.find((d) => d == n) ? n : t[0];
          const c = (d) => {
            d.data && r(d.data);
          };
          return (0, e.jsx)(fn, {
            children: (0, e.jsxs)(sl, {
              children: [
                (0, e.jsxs)(nl, {
                  children: [
                    (0, a.we)("#StoreAdmin_AntiCheat_BootProtectionLabel"),
                    " ",
                  ],
                }),
                (0, e.jsx)("div", {
                  className: cs.FormRowDescription,
                  children: (0, a.we)(
                    "#StoreAdmin_AntiCheat_BootProtectionDescription",
                  ),
                }),
                (0, e.jsx)("div", {
                  className: cs.AntiCheatDropDown,
                  children: (0, e.jsx)(S.ZU, {
                    controlled: !0,
                    rgOptions: o,
                    onChange: c,
                    selectedOption: l,
                  }),
                }),
              ],
            }),
          });
        }
        function dl(s, t, n, r) {
          let o = Array();
          return (
            o.push(
              p.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][type]",
                value: s,
              }),
            ),
            o.push(
              p.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][kernel]",
                value: t ? "1" : "",
              }),
            ),
            o.push(
              p.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][uninst]",
                value: n ? "1" : "",
              }),
            ),
            o.push(
              p.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][othername]",
                value: "",
              }),
            ),
            o.push(
              p.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][bootprotect]",
                value: r,
              }),
            ),
            o
          );
        }
        function ul(s) {
          const {
              selectedOption: t,
              kernelMode: n,
              uninstallsCompletely: r,
              bootProtection: o,
            } = s,
            l = p.useMemo(() => dl(t, n, r, o), [t, n, r, o]);
          return (0, e.jsxs)(e.Fragment, { children: [...l] });
        }
        var _s = i(30041),
          xr = i(22633);
        function pl(s) {
          const [t, n] = p.useState(s),
            r = (m, x) => {
              let f = [...t];
              (f[m] = x), n(f);
            },
            o = (m) => {
              let x = [...t];
              x.splice(m, 1), n(x);
            };
          return {
            items: t,
            setItem: r,
            deleteItem: o,
            appendItem: (m) => {
              n(t.concat([m]));
            },
            moveItem: (m, x) => {
              let f = [...t],
                h = t[m];
              m < x
                ? (f.splice(x + 1, 0, h), f.splice(m, 1))
                : (f.splice(m, 1), f.splice(x, 0, h)),
                n(f);
            },
            getState: (m) => ({
              item: t[m],
              setItem: (x) => r(m, x),
              deleteItem: () => o(m),
            }),
          };
        }
        function ml(s) {
          const [t, n] = p.useState(!1);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(xr.mt, {
                active: t,
                onDismiss: () => n(!1),
                children: (0, e.jsx)(hl, {
                  originalItems: s.rgItems,
                  onDismiss: () => n(!1),
                  packageid: s.packageid,
                }),
              }),
              (0, e.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      className: "tr heading",
                      children: [
                        (0, e.jsx)("th", {
                          children: (0, a.we)(
                            "#StoreAdmin_NonAppContent_TableHeader_Name",
                          ),
                        }),
                        (0, e.jsx)("th", {
                          children: (0, a.we)(
                            "#StoreAdmin_NonAppContent_TableHeader_Visible",
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, e.jsxs)("tbody", {
                    children: [
                      s.rgItems.length === 0 &&
                        (0, e.jsx)("tr", {
                          children: (0, e.jsx)("td", {
                            colSpan: 2,
                            children: (0, a.we)(
                              "#StoreAdmin_NonAppContent_NoNonAppItems",
                            ),
                          }),
                        }),
                      s.rgItems.length > 0 &&
                        s.rgItems.map((r, o) =>
                          (0, e.jsx)(gl, { item: r, language: s.language }, o),
                        ),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                children: (0, e.jsx)("button", {
                  className: (0, D.A)("btnv6_blue_hoverfade btn_small"),
                  onClick: () => n(!0),
                  children: (0, e.jsx)("span", {
                    children: (0, a.we)("#StoreAdmin_NonAppContent_Edit"),
                  }),
                }),
              }),
            ],
          });
        }
        function gl(s) {
          const { item: t, language: n } = s;
          let r = (0, a.we)("#StoreAdmin_NonAppContent_MissingLanguage");
          t.localized_title &&
            (r =
              t.localized_title[n] ??
              t.localized_title.english ??
              (0, a.we)("#StoreAdmin_NonAppContent_MissingLanguage"));
          let o = (0, a.we)("#StoreAdmin_NonAppContent_MissingLanguage");
          return (
            t.localized_description &&
              (o =
                t.localized_description[n] ??
                t.localized_description.english ??
                (0, a.we)("#StoreAdmin_NonAppContent_MissingLanguage")),
            (0, e.jsxs)("tr", {
              className: "tr highlightHover",
              children: [
                (0, e.jsx)("td", { className: "td", children: r }),
                (0, e.jsx)("td", {
                  className: "td",
                  children: (0, a.we)(
                    t.visible === "1"
                      ? "#StoreAdmin_NonAppContent_Editor_Yes"
                      : "#StoreAdmin_NonAppContent_Editor_No",
                  ),
                }),
              ],
            })
          );
        }
        function hl(s) {
          const { originalItems: t, packageid: n, onDismiss: r } = s,
            o = [];
          for (const xe of t)
            o.push({
              localized_title: xe.localized_title ?? {},
              localized_description: xe.localized_description ?? {},
              visible: xe.visible,
            });
          const l = pl(o),
            [c, d] = p.useState("editor"),
            [m, x] = p.useState(null),
            f = () => {
              l.appendItem({
                localized_title: {},
                localized_description: {},
                visible: "0",
              });
            },
            h = fl(n),
            C = async () => {
              d("throbber"),
                await h
                  .mutateAsync(l.items)
                  .then((xe) => {
                    xe.success !== 1
                      ? x(xe.errors[0] || "Unknown error")
                      : x(null);
                  })
                  .catch((xe) => {
                    throw (x(xe.message), xe);
                  })
                  .finally(() => {
                    d("message");
                  });
            },
            E = () => {
              d("editor"), r();
            },
            X = () => {
              window.location.reload();
            };
          return c === "editor"
            ? (0, e.jsxs)("div", {
                className: _s.NonAppContentsEditor,
                children: [
                  (0, e.jsx)("h1", {
                    children: (0, a.we)(
                      "#StoreAdmin_NonAppContent_Editor_Header",
                    ),
                  }),
                  (0, e.jsxs)("div", {
                    className: _s.NonAppContentsEditorScrollArea,
                    children: [
                      l.items.length > 0 &&
                        (0, e.jsx)(Zt.A, {
                          onMove: l.moveItem,
                          rowClassName: _s.ItemEditorRow,
                          items: l.items,
                          render: (xe, q) =>
                            (0, e.jsx)(_l, { state: l.getState(q) }),
                          onDelete: l.deleteItem,
                        }),
                      l.items.length === 0 &&
                        (0, e.jsx)("div", {
                          children: (0, a.we)(
                            "#StoreAdmin_NonAppContent_Editor_NoNonAppItems",
                            (0, a.we)(
                              "#StoreAdmin_NonAppContent_Editor_AddItemButton",
                            ),
                          ),
                        }),
                      (0, e.jsx)("button", {
                        className: (0, D.A)(
                          "btn_green_white_innerfade",
                          _s.AddItemButton,
                        ),
                        onClick: f,
                        children: (0, a.we)(
                          "#StoreAdmin_NonAppContent_Editor_AddItemButton",
                        ),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: _s.EditorButtons,
                    children: [
                      (0, e.jsx)("button", {
                        className: "btn_green_white_innerfade",
                        onClick: C,
                        children: (0, a.we)("#StoreAdmin_NonAppContent_Save"),
                      }),
                      (0, e.jsx)("button", {
                        onClick: E,
                        children: (0, a.we)("#StoreAdmin_NonAppContent_Cancel"),
                      }),
                    ],
                  }),
                ],
              })
            : c === "throbber"
              ? (0, e.jsx)(ns.t, { size: "large" })
              : m === null
                ? (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("h1", {
                        children: (0, a.we)(
                          "#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Header",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        children: (0, a.we)(
                          "#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Description",
                        ),
                      }),
                      (0, e.jsx)("button", {
                        onClick: X,
                        children: (0, a.we)(
                          "#StoreAdmin_NonAppContent_Editor_OK",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("h1", {
                        children: (0, a.we)(
                          "#StoreAdmin_NonAppContent_Editor_Error_Header",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        children: (0, a.we)(
                          "#StoreAdmin_NonAppContent_Editor_Error_Description",
                        ),
                      }),
                      (0, e.jsx)("p", { children: m }),
                      (0, e.jsx)("button", {
                        onClick: X,
                        children: (0, a.we)(
                          "#StoreAdmin_NonAppContent_Editor_OK",
                        ),
                      }),
                    ],
                  });
        }
        function _l(s) {
          const { state: t } = s,
            { item: n, setItem: r, deleteItem: o } = t,
            [l, c] = p.useState("english"),
            d = (0, a.O9)(!1),
            m = (X) => {
              c(X.target.value);
            },
            x = (X) => {
              (n.localized_title[l] = X.target.value), r(n);
            },
            f = (X) => {
              (n.localized_description[l] = X.target.value), r(n);
            },
            h = (X) => {
              (n.visible = X ? "1" : "0"), r(n);
            };
          let C = "";
          n.localized_title &&
            n.localized_title[l] &&
            (C = n.localized_title[l]);
          let E = "";
          return (
            n.localized_description &&
              n.localized_description[l] &&
              (E = n.localized_description[l]),
            (0, e.jsxs)("div", {
              className: _s.ItemEditorRowContents,
              children: [
                (0, e.jsxs)("div", {
                  className: _s.ItemEditorRowNameAndLanguageEditor,
                  children: [
                    (0, e.jsx)("input", {
                      className: _s.InputTitle,
                      type: "text",
                      placeholder: (0, a.we)(
                        "#StoreAdmin_NonAppContent_Editor_TitlePlaceholder",
                      ),
                      value: C,
                      onChange: x,
                      maxLength: 120,
                    }),
                    (0, e.jsx)("select", {
                      onChange: m,
                      children: (0, a.vR)(d, (X, xe) =>
                        (0, e.jsx)("option", { value: xe, children: X }, xe),
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: _s.ItemEditorRowVisibleToggle,
                  children: [
                    (0, e.jsx)(ga._H, {
                      value: n.visible === "1",
                      onChange: h,
                    }),
                    " ",
                    (0, e.jsx)("span", {
                      children: (0, a.we)(
                        "#StoreAdmin_NonAppContent_Editor_Visible",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: _s.ItemEditorRowDescriptionEditor,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, a.we)(
                        "#StoreAdmin_NonAppContent_Editor_Description",
                      ),
                    }),
                    (0, e.jsx)("textarea", {
                      placeholder: (0, a.we)(
                        "#StoreAdmin_NonAppContent_Editor_DescriptionPlaceholder",
                      ),
                      maxLength: 300,
                      rows: 5,
                      onChange: f,
                      value: E,
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function fl(s) {
          return (0, Ns.n)({
            mutationKey: ["save_nonapp_contents", s],
            mutationFn: async (t) => {
              const n = new FormData();
              n.append("sessionid", (0, K.KC)());
              const r = "nonapp_contents";
              for (let x = 0; x < t.length; x++) {
                const f = t[x];
                for (const h of Object.keys(f.localized_title ?? []))
                  n.append(
                    `${r}[${x}][localized_title][${h}]`,
                    f.localized_title[h],
                  );
                for (const h of Object.keys(f.localized_description ?? []))
                  n.append(
                    `${r}[${x}][localized_description][${h}]`,
                    f.localized_description[h],
                  );
                n.append(`${r}[${x}][visible]`, f.visible);
              }
              t.length === 0 && n.append(r, "");
              const o = `${K.TS.PARTNER_BASE_URL}store/ajaxpackagesave/${s}`,
                l = await Yt().post(o, n);
              if (l.status !== 200) return l.data;
              if (l.data.success != 1) throw l.data;
              const c = new FormData();
              c.append("sessionid", (0, K.KC)()),
                c.append("changenotes", "Change non-app items in package");
              const d = `${K.TS.PARTNER_BASE_URL}admin/store/packagepublish/${s}`,
                m = await Yt().post(d, c);
              if (m.status !== 200) return m.data;
              if (l.data.success != 1) throw l.data;
              return { success: 1, errors: [] };
            },
          });
        }
        var xl = i(36671),
          es = i.n(xl);
        function Sl(s) {
          const { packageid: t } = s,
            [n, r] = p.useState(s.bShowCapsuleArt),
            [o, l] = p.useState(s.bHideItemPrefixes),
            [c, d] = p.useState(null),
            m = Cl(t),
            [x, f] = p.useState(null),
            h = (V) => {
              d("edit");
            },
            C = (V) => {
              r(V.target.checked);
            },
            E = (V) => {
              l(V.target.checked);
            },
            X = () => {
              r(s.bShowCapsuleArt), d(null);
            },
            xe = async () => {
              d("working"),
                await m
                  .mutateAsync({ bShowCapsuleArt: n, bHideItemPrefix: o })
                  .then((V) => {
                    V.success !== 1
                      ? f(V.errors[0] || "Unknown error")
                      : f(null);
                  })
                  .catch((V) => {
                    throw (f(V.message), V);
                  })
                  .finally(() => {
                    d("message");
                  });
            },
            q = () => {
              window.location.reload();
            };
          return (0, e.jsxs)("div", {
            className: es().PackagePurchaseDisplayContainer,
            children: [
              (0, e.jsxs)(xr.mt, {
                active: c !== null,
                onDismiss: X,
                children: [
                  c === "edit" &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, a.we)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        !s.bHideShowCapsuleCheckbox &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, a.we)(
                                  "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description",
                                ),
                              }),
                              (0, e.jsxs)("label", {
                                children: [
                                  (0, e.jsx)("input", {
                                    type: "checkbox",
                                    checked: n,
                                    onChange: C,
                                  }),
                                  (0, e.jsx)("span", {
                                    className: es().checkbox_label,
                                    children: (0, a.we)(
                                      "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        (0, e.jsx)("p", {
                          children: (0, a.we)(
                            "#StoreAdmin_EditPackageDisplay_HidePrefix_Description",
                          ),
                        }),
                        (0, e.jsxs)("label", {
                          children: [
                            (0, e.jsx)("input", {
                              type: "checkbox",
                              checked: o,
                              onChange: E,
                            }),
                            (0, e.jsx)("span", {
                              className: es().checkbox_label,
                              children: (0, a.we)(
                                "#StoreAdmin_EditPackageDisplay_HidePrefix_Label",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: es().PackagePurchaseDisplayButtonBar,
                          children: [
                            (0, e.jsx)("button", {
                              className: "btn_green_white_innerfade btn_medium",
                              onClick: xe,
                              disabled:
                                n === s.bShowCapsuleArt &&
                                o === s.bHideItemPrefixes,
                              children: (0, a.we)(
                                "#StoreAdmin_ShowCapsuleArt_SaveAndPublish",
                              ),
                            }),
                            (0, e.jsx)("button", {
                              className: "btnv6_blue_hoverfade btn_medium",
                              onClick: X,
                              children: (0, a.we)(
                                "#StoreAdmin_ShowCapsuleArt_Cancel",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  c === "working" &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, a.we)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        (0, e.jsx)(ns.t, { size: "large" }),
                      ],
                    }),
                  c === "message" &&
                    x === null &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, a.we)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        (0, e.jsx)("p", {
                          children: (0, a.we)(
                            "#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Description",
                          ),
                        }),
                        (0, e.jsx)("button", {
                          onClick: q,
                          children: (0, a.we)(
                            "#StoreAdmin_NonAppContent_Editor_OK",
                          ),
                        }),
                      ],
                    }),
                  c === "message" &&
                    x !== null &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, a.we)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        (0, e.jsx)("p", {
                          children: (0, a.we)(
                            "#StoreAdmin_NonAppContent_Editor_Error_Description",
                          ),
                        }),
                        (0, e.jsx)("p", { children: x }),
                        (0, e.jsx)("button", {
                          onClick: q,
                          children: (0, a.we)(
                            "#StoreAdmin_NonAppContent_Editor_OK",
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              !s.bHideShowCapsuleCheckbox &&
                (0, e.jsxs)("div", {
                  className: es().PackagePurchaseDisplayCheckOption,
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      className: es().PackagePurchaseDisplayCheckbox,
                      checked: n,
                      onChange: h,
                    }),
                    (0, e.jsx)(oe.Gq, {
                      toolTipContent: (0, a.we)(
                        "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description",
                      ),
                      children: (0, e.jsxs)("div", {
                        className: es().PackagePurchaseDisplayLabel,
                        children: [
                          (0, e.jsx)("span", {
                            children: (0, a.we)(
                              "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label",
                            ),
                          }),
                          " (?)",
                        ],
                      }),
                    }),
                  ],
                }),
              s.bHideShowCapsuleCheckbox &&
                (0, e.jsxs)("div", {
                  className: es().PackagePurchaseDisplayCheckOption,
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      className: es().PackagePurchaseDisplayCheckbox,
                      checked: n,
                      disabled: !0,
                    }),
                    (0, e.jsx)(oe.Gq, {
                      toolTipContent: (0, a.we)(
                        "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description",
                      ),
                      children: (0, e.jsxs)("div", {
                        className: es().PackagePurchaseDisplayLabel,
                        children: [
                          (0, e.jsx)("span", {
                            children: (0, a.we)(
                              "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label",
                            ),
                          }),
                          " (?)",
                          (0, e.jsx)("br", {}),
                          (0, e.jsx)("span", {
                            children: (0, a.we)(
                              "#StoreAdmin_EditPackageDisplay_UseEditStorePackage",
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              (0, e.jsxs)("div", {
                className: es().PackagePurchaseDisplayCheckOption,
                children: [
                  (0, e.jsx)("input", {
                    type: "checkbox",
                    className: es().PackagePurchaseDisplayCheckbox,
                    checked: o,
                    onChange: h,
                  }),
                  (0, e.jsx)(oe.Gq, {
                    toolTipContent: (0, a.we)(
                      "#StoreAdmin_EditPackageDisplay_HidePrefix_Description",
                    ),
                    children: (0, e.jsxs)("div", {
                      className: es().PackagePurchaseDisplayLabel,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, a.we)(
                            "#StoreAdmin_EditPackageDisplay_HidePrefix_Label",
                          ),
                        }),
                        " (?)",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Cl(s) {
          return (0, Ns.n)({
            mutationKey: ["save_show_capsule_art_toggle", s],
            mutationFn: async (t) => {
              const n = new FormData();
              n.append("sessionid", (0, K.KC)()),
                n.append(
                  "show_capsule_art_in_purchase_option",
                  t.bShowCapsuleArt ? "1" : "0",
                ),
                n.append(
                  "hide_shared_prefix_on_items",
                  t.bHideItemPrefix ? "1" : "0",
                );
              const r = `${K.TS.PARTNER_BASE_URL}store/ajaxpackagesave/${s}`,
                o = await Yt().post(r, n);
              if (o.status !== 200) return o.data;
              if (o.data.success != 1) throw o.data;
              const l = new FormData();
              l.append("sessionid", (0, K.KC)()),
                l.append(
                  "changenotes",
                  "Configure package purchase display options.",
                ),
                l.append("packages[0]", "" + s);
              const c = `${K.TS.PARTNER_BASE_URL}store/ajaxpublishpackages`,
                d = await Yt().post(c, l);
              if (d.status !== 200) return d.data;
              if (o.data.success != 1) throw o.data;
              return { success: 1, errors: [] };
            },
          });
        }
        var Fs = i(72671),
          bl = i(29757),
          Al = i(53107);
        function Sr(s) {
          const [t, n] = (0, p.useState)([]),
            [r, o] = (0, p.useState)(!1),
            { itemid: l, apptype: c, altasset: d, altpostfix: m } = s;
          (0, p.useEffect)(
            () => (
              (window.ShowImageConfirmationDialog = (h) => {
                n(h), o(!0);
              }),
              () => {
                delete window.ShowImageConfirmationDialog;
              }
            ),
            [],
          );
          const x = () => {
              o(!1);
            },
            f = p.useCallback(() => {
              window.SubmitImageUpload(l, c, d, m, !0), x();
            }, [d, m, c, l]);
          return (0, e.jsx)(Me.tH, {
            children: (0, e.jsx)(Cs.E, {
              active: r,
              children: (0, e.jsx)(vl, {
                rgImages: t,
                fnOnSuccess: f,
                fnCloseDialog: x,
              }),
            }),
          });
        }
        function va(s) {
          let t = [];
          switch (s) {
            case "Small Capsule":
              t = ["LegibleLogo", "NoAdditionalText"];
              break;
            case "Main Capsule":
              t = ["OneThirdLogo", "NoAdditionalText"];
              break;
            case "Package Header":
            case "Header Capsule":
              t = ["OneThirdLogo", "NoAdditionalText"];
              break;
            case "Library Capsule":
            case "Vertical Capsule":
            case "Library Header":
              t = ["OneThirdLogo", "NoAdditionalText"];
              break;
            case "Library Hero":
              t = ["NoLogo"];
              break;
            case "Library Logo":
              t = ["TransparentBG", "NoAdditionalText"];
              break;
            default:
              (0, un.wT)(!1, `Unknown uploaded image provided: ${s}`);
          }
          return t;
        }
        function vl(s) {
          const { rgImages: t, fnOnSuccess: n, fnCloseDialog: r } = s,
            [o, l] = (0, p.useState)({}),
            c = (0, p.useCallback)(
              (x, f, h) => l({ ...o, [x]: { ...o[x], [f]: h } }),
              [o],
            );
          let d = !0;
          t.forEach((x) => {
            va(x.image_def.name).forEach((h) => {
              if (!o[x.image_def.name] || !o[x.image_def.name][h]) {
                d = !1;
                return;
              }
            });
          });
          const m = t.map((x) =>
            (0, e.jsx)(yl, { image: x, onCheckboxChange: c }, x.image_def.name),
          );
          return (0, e.jsxs)(ls.o0, {
            className: Fs.ImageConfirmationDialog,
            strTitle: (0, a.we)(
              "#StoreAdmin_GraphicalAssets_ConfirmDialog_Title",
            ),
            bOKDisabled: !d,
            closeModal: r,
            strOKButtonText: (0, a.we)(
              "#StoreAdmin_GraphicalAssets_ConfirmDialog_ConfirmBtn",
            ),
            onOK: n,
            bDestructiveWarning: !d,
            bDisableBackgroundDismiss: !0,
            children: [
              (0, e.jsx)("div", {
                className: Fs.ConfirmationDescription,
                children: (0, a.oW)(
                  "#StoreAdmin_GraphicalAssets_ConfirmDialog_Desc",
                  (0, e.jsx)(Al.uU, {
                    href: `${bt.TS.PARTNER_BASE_URL}doc/store/assets/rules`,
                  }),
                ),
              }),
              m,
            ],
          });
        }
        function yl(s) {
          const { image: t, onCheckboxChange: n } = s,
            r = va(t.image_def.name);
          let o = [];
          for (const l of r)
            o.push(
              (0, e.jsx)(
                bl.Yh,
                {
                  onChange: (c) => n(t.image_def.name, l, c),
                  label: (0, a.we)(
                    `#StoreAdmin_GraphicalAssets_ConfirmDialog_${l}`,
                  ),
                },
                `${t.image_def.name}_Checkbox_${l}`,
              ),
            );
          return (0, e.jsxs)("div", {
            className: Fs.ImageTypeConfirmationCtn,
            children: [
              (0, e.jsx)("div", {
                className: Fs.ImageTitle,
                children: t.image_def.name,
              }),
              (0, e.jsx)("div", {
                className: Fs.ImageCtn,
                children: (0, e.jsx)("img", {
                  className: Fs.ImageSrc,
                  src: t.image_src,
                }),
              }),
              (0, e.jsx)("div", { className: Fs.ImageCheckboxes, children: o }),
            ],
          });
        }
        var nn = i(64407),
          ya = i(92441);
        const jl = "usePartnerActiveCreatorClans";
        function ja(s, t) {
          return (0, ya.j)({
            queryKey: [jl, s],
            queryFn: async () => {
              const n = Ks.w.Init(nn.fD);
              n.Body().set_partnerid(s);
              let r;
              try {
                r = await nn.w5.GetDevPagesForPartner(t, n);
              } catch (o) {
                throw (
                  (console.error(
                    `usePartnerActiveCreatorClans on PartnerID ${s} request failed`,
                    o,
                  ),
                  o)
                );
              }
              if (r.GetEResult() == $t.R)
                return r
                  .Body()
                  .results()
                  .map((o) => o.toObject());
              throw (
                (console.error(
                  `usePartnerActiveCreatorClans on PartnerID ${s} failed with EResult: ${r.GetEResult()}`,
                ),
                new Error(
                  `GetDevPagesForPartner answered EResult ${r.GetEResult()}`,
                ))
              );
            },
            enabled: s > 0,
          });
        }
        function Zh(s) {
          const t = usePromotionTransport(),
            n = useQuery(ja(s, t));
          return n.isLoading ? null : (n.data ?? []);
        }
        const Pa = "useCreatorHomeClanLinksByApp";
        function Ea(s) {
          const t = (0, zt.a)(),
            n = (0, hs.I)({
              queryKey: [Pa, s],
              queryFn: async () => {
                const r = Ks.w.Init(nn.iz);
                r.Body().set_appid(s);
                const o = await nn.w5.GetDevPageLinks(t, r);
                return o.GetEResult() == $t.R
                  ? o
                      .Body()
                      .links()
                      .map((l) => l.toObject())
                  : (console.error(
                      `useCreatorHomeClanLinksByApp on AppID ${s} failed with ${o.GetEResult()}`,
                    ),
                    []);
              },
              enabled: s > 0,
            });
          return n.isLoading ? null : n.data;
        }
        async function Pl(s) {
          const t = `${be.TS.PARTNER_BASE_URL}apps/creatorhomelinkroles?clanids=${s.join(",")}`,
            n = await fetch(t, { credentials: "include" });
          if (!n.ok) throw new Error(`${t} answered ${n.status}`);
          const r = await n.json();
          if (r.success != $t.R)
            throw new Error(r.msg || `EResult ${r.success}`);
          return r.verdicts ?? [];
        }
        const El = "useCreatorHomeFranchiseVerdict";
        function Dl(s, t, n) {
          return (0, hs.I)({
            queryKey: [El, s],
            queryFn: async () =>
              (await Pl([s])).find((o) => o.clan_account_id === s) ?? null,
            initialData: n,
            enabled: t && s > 0,
            staleTime: 1 / 0,
          });
        }
        var Tl = i(39376),
          Da = i(33654),
          Hn = i(40562),
          wl = i(40497);
        function Il(s, t, n) {
          const r = Ta();
          return (0, Ns.n)({
            mutationFn: async ({ clanAccountID: o, bReuseExistingClan: l }) => {
              const c = Qe.b.InitFromClanID(o),
                d = {
                  appid: t,
                  remove: !1,
                  update_json_only: !1,
                  skip_clan_permissions: l,
                  partner_id: s,
                  link: {
                    appid: t,
                    clan_steamid: c.ConvertTo64BitString(),
                    relation: Hn.VY.wQ,
                    linkname: n,
                    json: null,
                  },
                };
              return await r.mutateAsync(d);
            },
          });
        }
        function Ml(s, t, n) {
          const r = Ta();
          return (0, Ns.n)({
            mutationFn: async () => {
              const o = Qe.b.InitFromClanID(t),
                l = {
                  appid: s,
                  remove: !0,
                  update_json_only: !1,
                  link: {
                    appid: s,
                    clan_steamid: o.ConvertTo64BitString(),
                    relation: Hn.VY.wQ,
                    linkname: n,
                    json: null,
                  },
                };
              return await r.mutateAsync(l);
            },
          });
        }
        function Ta() {
          const s = (0, zt.a)();
          return (0, Ns.n)({
            mutationFn: async (t) => {
              const n = Ks.w.Init(nn.dC);
              n.Body().set_appid(t.appid),
                n.Body().set_remove(t.remove),
                n.Body().set_update_json_only(t.update_json_only),
                n.Body().set_skip_clan_permissions(t.skip_clan_permissions),
                n.Body().set_partner_id(t.partner_id),
                n.Body().link().set_appid(t.link.appid),
                n.Body().link().set_clan_steamid(t.link.clan_steamid),
                n.Body().link().set_relation(t.link.relation),
                n.Body().link().set_linkname(t.link.linkname),
                n.Body().link().set_json(t.link.json);
              const r = await nn.w5.SetDevPageLink(s, n);
              return r.GetEResult() == $t.R
                ? (wl.L.invalidateQueries({ queryKey: [Pa, t.appid] }), !0)
                : (console.error(
                    `useSetDevPageLink on AppID ${t.appid} failed with ${r.GetEResult()}`,
                  ),
                  !1);
            },
          });
        }
        function wa(s) {
          const [t, n, r] = (0, _e.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(S.$n, {
                onClick: n,
                children: (0, a.we)("#Button_Unlink"),
              }),
              (0, e.jsx)(Cs.E, {
                active: t,
                children: (0, e.jsx)(kl, { ...s, closeModal: r }),
              }),
            ],
          });
        }
        function kl(s) {
          const {
              pageLink: t,
              clanAccountID: n,
              clanName: r,
              closeModal: o,
            } = s,
            l = Ml(t.appid, n, t.linkname),
            c = (0, Es.vs)();
          return c.bLoading
            ? (0, e.jsx)(Es.Hh, {
                state: c,
                strDialogTitle: (0, a.we)("#Button_Unlink"),
                closeModal: o,
              })
            : (0, e.jsx)(ls.o0, {
                onCancel: o,
                strTitle: (0, a.we)("#Button_Unlink"),
                strDescription: (0, a.we)(
                  "#AppLanding_Creator_UnlinkDesc",
                  r || n,
                  t.linkname,
                ),
                onOK: () => {
                  c.fnSetLoading(!0),
                    l
                      .mutateAsync()
                      .then((d) => {
                        d
                          ? (c.fnSetStrSuccess(
                              (0, a.we)("#EventDisplay_Share_Success"),
                            ),
                            c.fnSetSuccess(!0))
                          : (c.fnSetStrError(
                              (0, a.we)("#Error_ErrorCommunicatingWithNetwork"),
                            ),
                            c.fnSetError(!0));
                      })
                      .catch((d) => {
                        c.fnSetStrError(
                          (0, a.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                          c.fnSetError(!0),
                          console.error(
                            `unlinking failed appid ${t.appid} with error ${((0, ke.H))(d).strErrorMsg} `,
                          );
                      });
                },
                children: (0, e.jsx)(Fe.EY, {
                  as: "p",
                  size: "2",
                  children: (0, a.we)("#Dialog_AreYouSure"),
                }),
              });
        }
        var Ll = i(30533),
          xn = i.n(Ll),
          rn = i(58952),
          Ia = i(86668);
        const Bl = "useClanLinkableForMeViaCreatorHome";
        function Ma() {
          return (0, ya.j)({
            queryKey: [Bl, be.iA.accountid],
            queryFn: async () => {
              const s = `${be.TS.PARTNER_BASE_URL}creatorhome/ajaxgetgroupsforuser`,
                t = { sessionid: (0, K.KC)() };
              let n;
              try {
                n = await Yt().get(s, { params: t });
              } catch (r) {
                const { strErrorMsg: o, errorCode: l } = (0, ke.H)(r);
                throw (
                  (console.error(
                    `useClanLinkableForMeViaCreatorHome: request failed, EResult ${l}: ${o}`,
                    r,
                  ),
                  r)
                );
              }
              if (n?.status == 200 && n.data?.success == $t.R)
                return n.data.rgClanAccountIDs ?? [];
              throw (
                (console.error(
                  `useClanLinkableForMeViaCreatorHome: status ${n?.status}, EResult ${n?.data?.success}`,
                ),
                new Error(
                  `ajaxgetgroupsforuser answered EResult ${n?.data?.success}`,
                ))
              );
            },
            enabled: be.iA.logged_in,
          });
        }
        function qh() {
          const s = useQuery(Ma());
          return s.isLoading ? null : (s.data ?? []);
        }
        var Nl = i(63251),
          ka = i.n(Nl);
        function Ol(s) {
          const { nAppID: t, nPartnerID: n } = s,
            [r, o, l] = (0, _e.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(S.$n, {
                onClick: o,
                children: (0, a.we)("#Button_Link"),
              }),
              (0, e.jsx)(Cs.E, {
                active: r,
                children: (0, e.jsx)(Hl, { closeModal: l, ...s }),
              }),
            ],
          });
        }
        const Rl = [],
          Fl = [];
        function Hl(s) {
          const { nAppID: t, nPartnerID: n, linkname: r, closeModal: o } = s,
            l = Il(n, t, r),
            [c, d] = (0, p.useState)(null),
            m = (0, zt.a)(),
            x = n > 0,
            f = (0, hs.I)(ja(n, m)),
            h = f.data ?? Rl,
            C = (0, hs.I)(Ma()),
            E = C.data ?? Fl;
          (0, p.useEffect)(() => {
            x ||
              console.warn(
                `LinkDialog: no partner for app ${t} (got ${n}), offering only the groups the user owns or officers`,
              ),
              be.iA.logged_in ||
                console.warn(
                  "LinkDialog: UserConfig says signed out, so the groups the user owns or officers were not requested",
                );
          }, [x, t, n]);
          const { rgClanChoices: X, setExistingLinks: xe } = (0,
            p.useMemo)(() => {
              const $e = new Set(h.map((We) => We.clan_accountid)),
                Ne = new Set([...E, ...$e]);
              return { rgClanChoices: Array.from(Ne), setExistingLinks: $e };
            }, [h, E]),
            q = (0, rn.WM)({
              rgOptions: X,
              selectedValue: c,
              onSelectionChange: d,
            }),
            V = (0, Es.vs)();
          return f.isLoading || C.isLoading
            ? (0, e.jsx)(ls.o0, {
                strTitle: (0, a.we)("#Button_Link"),
                bAlertDialog: !0,
                closeModal: o,
                children: (0, e.jsxs)(Vt.s, {
                  align: "center",
                  gap: "2",
                  children: [
                    (0, e.jsx)(Ia.k, { size: "1" }),
                    (0, e.jsx)(Fe.EY, {
                      size: "2",
                      contrast: "description",
                      children: (0, a.we)("#Loading"),
                    }),
                  ],
                }),
              })
            : f.isError || C.isError
              ? (0, e.jsx)(ls.o0, {
                  strTitle: (0, a.we)("#Button_Link"),
                  bAlertDialog: !0,
                  closeModal: o,
                  children: (0, e.jsx)(Fe.EY, {
                    as: "p",
                    size: "2",
                    color: "text-error",
                    children: (0, a.we)("#AppLanding_Creator_Linking_Failed"),
                  }),
                })
              : V.bLoading
                ? (0, e.jsx)(Es.Hh, {
                    state: V,
                    strDialogTitle: (0, a.we)("#Button_Link"),
                    closeModal: o,
                  })
                : (0, e.jsx)(ls.o0, {
                    onCancel: o,
                    bAllowFullSize: !0,
                    strTitle: (0, a.we)("#AppLAnding_Creator_LinkingTitle", r),
                    strDescription: (0, a.we)(
                      "#AppLAnding_Creator_LinkingDesc",
                      r,
                    ),
                    bOKDisabled: !c,
                    onOK: async () => {
                      V.fnSetLoading(!0);
                      const $e = {
                        clanAccountID: c,
                        bReuseExistingClan: xe.has(c),
                      };
                      await l
                        .mutateAsync($e)
                        .then((Ne) => {
                          Ne
                            ? (V.fnSetStrSuccess(
                                (0, a.we)("#EventDisplay_Share_Success"),
                              ),
                              V.fnSetSuccess(!0))
                            : (V.fnSetStrError(
                                (0, a.we)(
                                  "#Error_ErrorCommunicatingWithNetwork",
                                ),
                              ),
                              V.fnSetError(!0));
                        })
                        .catch((Ne) => {
                          V.fnSetStrError(
                            (0, a.we)("#Error_ErrorCommunicatingWithNetwork"),
                          ),
                            V.fnSetError(!0),
                            console.error(
                              `linking failed appid ${t} with error ${((0, ke.H))(Ne).strErrorMsg} `,
                            );
                        });
                    },
                    children: (0, e.jsxs)(Vt.s, {
                      direction: "column",
                      gap: "3",
                      children: [
                        (0, e.jsx)(Fe.EY, {
                          as: "p",
                          size: "2",
                          children: (0, a.we)(
                            "#AppLanding_Creator_LinkingNote",
                          ),
                        }),
                        !x &&
                          (0, e.jsx)(Fe.EY, {
                            as: "p",
                            size: "2",
                            contrast: "description",
                            children: (0, a.we)(
                              "#AppLanding_Creator_Linking_NoPartner",
                            ),
                          }),
                        X.length == 0
                          ? (0, e.jsx)(Fe.EY, {
                              as: "p",
                              size: "2",
                              contrast: "description",
                              children: (0, a.we)(
                                "#AppLanding_Creator_Linking_NoOptions",
                              ),
                            })
                          : (0, e.jsx)("div", {
                              className: ka().DropDown,
                              children: (0, e.jsxs)(rn.l6.Root, {
                                state: q,
                                size: "2",
                                popoverWidth: "target",
                                children: [
                                  (0, e.jsx)(rn.l6.Trigger, {
                                    children: c
                                      ? (0, e.jsx)(La, {
                                          clanAccountID: c,
                                          bExistingLink: xe.has(c),
                                        })
                                      : (0, e.jsx)(rn.l6.Placeholder, {
                                          children: (0, a.we)(
                                            "#AppLanding_Creator_Choice",
                                          ),
                                        }),
                                  }),
                                  (0, e.jsx)(rn.l6.Options, {
                                    children: X.map(($e) =>
                                      (0, e.jsx)(
                                        rn.l6.Option,
                                        {
                                          value: $e,
                                          children: (0, e.jsx)(La, {
                                            clanAccountID: $e,
                                            bExistingLink: xe.has($e),
                                          }),
                                        },
                                        $e,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            }),
                      ],
                    }),
                  });
        }
        function La(s) {
          const { clanAccountID: t, bExistingLink: n } = s,
            [r, o] = (0, Bt.TB)(t),
            l = o ? o.group_name + `(${t})` : "" + t;
          return (0, e.jsx)(oe.Gq, {
            toolTipContent: n
              ? (0, a.we)("#AppLanding_Creator_Existing")
              : void 0,
            children: (0, e.jsxs)(Vt.s, {
              align: "center",
              gap: "2",
              wrap: "nowrap",
              children: [
                (0, e.jsx)("img", {
                  className: ka().Avatar,
                  src: o?.avatar_full_url,
                }),
                (0, e.jsxs)(Fe.EY, {
                  size: "2",
                  truncate: !0,
                  children: [l, " ", n ? "*" : ""],
                }),
              ],
            }),
          });
        }
        var Ul = i(62178),
          zl = i(40358);
        function Wl(s) {
          const {
              nAppID: t,
              nPrimaryPartnerID: n,
              strName: r,
              strKvTargetName: o,
              rgConflictClanAccountIDs: l,
              rgCatalogVerdicts: c,
              bCheckCatalogRoles: d,
              bCheckFranchiseMinGames: m,
              rgNameMustMatchLinks: x,
              strMatchKey: f,
            } = s,
            [h, C] = (0, p.useState)(() => r),
            E = Yl(t, n),
            xe = Ea(t)?.find(
              (Ne) =>
                Ne.linkname.trim().toLocaleLowerCase() ==
                r.trim().toLocaleLowerCase(),
            ),
            q = (0, p.useMemo)(
              () => (xe ? new Qe.b(xe.clan_steamid).GetAccountID() : 0),
              [xe],
            ),
            { data: V } = Dl(
              q,
              !!(d || m),
              c?.find((Ne) => Ne.clan_account_id === q),
            ),
            $e = (0, p.useMemo)(() => {
              if (!xe) return null;
              if (l?.includes(q))
                return {
                  strIssue: (0, a.we)(
                    "#AppLanding_Creator_FranchiseSameAsDevPub",
                  ),
                };
              if (d && V?.franchise_links_suppressed)
                return {
                  strIssue: (0, a.we)(
                    "#AppLanding_Creator_FranchiseIsDevPubElsewhere",
                  ),
                  rgDevPubAppIDs: V.devpub_appids,
                  cDevPubApps: V.devpub_app_count,
                };
              if (m && V?.franchise_too_few_games)
                return {
                  strIssue: (0, a.we)(
                    "#AppLanding_Creator_FranchiseTooFewGames",
                  ),
                };
              const Ne = x?.filter((We) => We.clanAccountID === q);
              return Ne?.length && !Ne.some((We) => We.strMatchKey === f)
                ? {
                    strIssue: (0, a.we)(
                      "#AppLanding_Creator_DeveloperNameMismatch",
                    ),
                  }
                : null;
            }, [xe, q, l, d, m, V, x, f]);
          return (0, e.jsxs)(Vt.s, {
            align: "start",
            gap: "2",
            wrap: "nowrap",
            className: xn().Ctn,
            children: [
              (0, e.jsx)(oe.Gq, {
                toolTipContent: xe && (0, a.we)("#AppLanding_CreatorLocked"),
                children: (0, e.jsx)("input", {
                  type: "text",
                  size: 30,
                  value: h,
                  onChange: (Ne) => {
                    xe || C(Ne.currentTarget.value || "");
                  },
                }),
              }),
              (0, e.jsx)("input", {
                name: o,
                type: "hidden",
                value: h,
                onChange: () => {},
              }),
              !!(xe && r?.toLocaleLowerCase() === h?.toLocaleLowerCase()) &&
                (0, e.jsx)(Vl, {
                  pageLink: xe,
                  strKvTargetName: o,
                  linkIssue: $e,
                }),
              !xe &&
                h?.trim().length > 0 &&
                (0, e.jsx)(Ol, {
                  nPartnerID: E,
                  nAppID: t,
                  linkname: h.trim(),
                }),
              h?.toLocaleLowerCase() !== r?.toLocaleLowerCase() &&
                (0, e.jsx)(Fe.EY, {
                  size: "2",
                  contrast: "description",
                  marginTop: "2",
                  children: (0, a.we)("#AppLanding_Creator_SaveRequires"),
                }),
            ],
          });
        }
        const Gl = { direction: "right", style: { minWidth: "350px" } };
        function Cr(s, t) {
          const n = (0, p.useMemo)(
              () => new Qe.b(s.clan_steamid).GetAccountID(),
              [s],
            ),
            { creatorHome: r } = (0, Kt.FV)(n),
            [o, l] = (0, Bt.TB)(n),
            c = (0, p.useMemo)(() => {
              let m = "developer";
              return (
                t.includes("[publisher")
                  ? (m = "publisher")
                  : t.includes("[franchise") && (m = "franchise"),
                { clan_account_id: n, name: l?.group_name, type: m }
              );
            }, [n, t, l]),
            d = r?.GetCreatorHomeURL(c.type);
          return { clanAccountID: n, clanInfo: l, strURL: d };
        }
        function Vl(s) {
          const { pageLink: t, strKvTargetName: n, linkIssue: r } = s,
            o = r?.strIssue,
            { clanAccountID: l, clanInfo: c, strURL: d } = Cr(t, n);
          return (0, e.jsxs)(Vt.s, {
            justify: "between",
            align: "start",
            gap: "2",
            wrap: "nowrap",
            flexGrow: "1",
            children: [
              (0, e.jsxs)(Vt.s, {
                direction: "column",
                children: [
                  (0, e.jsxs)(Vt.s, {
                    align: "center",
                    gap: "2",
                    wrap: "nowrap",
                    className: (0, D.A)(
                      xn().CreatorCtn,
                      o && xn().CreatorCtnError,
                    ),
                    children: [
                      !!o &&
                        (0, e.jsx)(Fe.EY, {
                          color: "text-error",
                          weight: "heavy",
                          children: "\u2716",
                        }),
                      (0, a.PP)(
                        "#AppLanding_CreatorLinked",
                        (0, e.jsx)(br, {
                          clanAccountID: l,
                          strURL: d,
                          clanInfo: c,
                        }),
                      ),
                    ],
                  }),
                  !!o &&
                    (0, e.jsx)(oe.Gq, {
                      toolTipContent:
                        r.rgDevPubAppIDs?.length > 0 &&
                        (0, e.jsx)(Kl, {
                          rgAppIDs: r.rgDevPubAppIDs,
                          cTotal: r.cDevPubApps ?? 0,
                        }),
                      children: (0, e.jsx)(Fe.EY, {
                        as: "p",
                        size: "2",
                        color: "text-error",
                        marginLeft: "3",
                        marginTop: "1",
                        children: o,
                      }),
                    }),
                ],
              }),
              (0, e.jsx)(wa, {
                pageLink: t,
                clanAccountID: l,
                clanName: c?.group_name || "" + l,
              }),
            ],
          });
        }
        function Kl(s) {
          const { rgAppIDs: t, cTotal: n } = s;
          return (0, e.jsxs)(Vt.s, {
            direction: "column",
            children: [
              (0, e.jsx)("div", {
                children: (0, a.we)(
                  "#AppLanding_Creator_FranchiseIsDevPubElsewhere_Apps",
                ),
              }),
              t.map((r) => (0, e.jsx)($l, { appid: r }, r)),
              n > t.length &&
                (0, e.jsx)("div", {
                  children: (0, a.we)(
                    "#AppLanding_Creator_FranchiseIsDevPubElsewhere_More",
                    n - t.length,
                  ),
                }),
            ],
          });
        }
        function $l(s) {
          const { appid: t } = s,
            { data: n } = (0, zl.J$)({ appid: t });
          return (0, e.jsx)("div", {
            children: n?.visible && n.name ? `${n.name} (${t})` : t,
          });
        }
        function br(s) {
          const { clanAccountID: t, clanInfo: n, strURL: r } = s,
            o = n?.group_name || "" + t;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Da.iN, { href: r, target: "_blank", children: o }),
              (0, e.jsx)(Ul.JU, {
                className: xn().HoverCtn,
                hoverProps: Gl,
                hoverContent: (0, e.jsx)(ct.ux, { clanInfo: n }),
                children: (0, e.jsx)(Da.iN, {
                  href: r,
                  target: "_blank",
                  children: (0, e.jsx)("img", {
                    className: xn().Avatar,
                    src: n?.avatar_full_url,
                  }),
                }),
              }),
            ],
          });
        }
        function Yl(s, t) {
          const [n, r] = (0, p.useState)(() => (t > 0 ? t : null)),
            o = (0, Tl.O4)(n > 0 ? null : s);
          return (
            (0, p.useEffect)(() => {
              n ||
                !o ||
                (o.length > 0
                  ? r(o[0].partner_id)
                  : console.warn(
                      `Creator home linking: the page gave no primary partner (${t}) and nobody is paid for app ${s}, so creator homes linked on other games cannot be offered`,
                    ));
            }, [o, n, s, t]),
            n
          );
        }
        var Xl = i(82363);
        function Ql(s) {
          const [t, n, r] = (0, _e.uD)(),
            { rgScreenshots: o, refetch: l, isFetching: c } = Jl(t),
            { mutateAsync: d, isPending: m } = Zl(),
            x = p.useMemo(
              () =>
                o?.map((C, E) => ({ key: E, mapAltText: C.alt_text })) ?? [],
              [o],
            ),
            f = async (C, E) => (await d({ nIndex: C, mapAltText: E })) !== !1,
            h = (C, E) => {
              const X = (0, ue.LgB)(E),
                xe = (0, ue.LgB)(E == ue.ZLm ? ue.NFp : ue.Bhc);
              return X in o[C].urls
                ? o[C].urls[X]
                : xe in o[C].urls
                  ? o[C].urls[xe]
                  : null;
            };
          return (0, e.jsxs)("div", {
            children: [
              t &&
                (0, e.jsx)(Xl.B, {
                  entries: x,
                  isLoading: c || m,
                  hideModal: r,
                  fnRefetch: l,
                  mutateAltTextAsync: f,
                  isMutatePending: m,
                  fnGetImage: (C, E) => (0, e.jsx)("img", { src: h(C, E) }),
                }),
              (0, e.jsx)(S.$n, {
                onClick: n,
                children: (0, a.we)("#StoreAdmin_EditAltText_Button"),
              }),
            ],
          });
        }
        function Jl(s) {
          const t = (0, ye.Z3)("screenshots"),
            {
              data: n,
              refetch: r,
              isFetching: o,
            } = (0, hs.I)({
              queryKey: ["StoreAppScreenshots", t],
              queryFn: async () => {
                const l = await fetch(t);
                try {
                  return await l.json();
                } catch {
                  return null;
                }
              },
              enabled: s,
              refetchOnMount: "always",
              staleTime: 0,
            });
          return { rgScreenshots: n, refetch: r, isFetching: o };
        }
        function Zl() {
          const s = (0, ye.Z3)("quickupdateajax");
          return (0, Ns.n)({
            mutationFn: async ({ nIndex: t, mapAltText: n }) => {
              if (t == null || !n) return !1;
              const r = new FormData();
              r.append("sessionid", (0, K.KC)());
              for (const [c, d] of Object.entries(n))
                r.append(`app[assets][screenshots][${t}][alt_text][${c}]`, d);
              const o = await fetch(s, { method: "post", body: r }),
                l = await o.json();
              if (!o.ok) throw "Error modifying screenshot";
              return l;
            },
            onError: (t) => {
              console.error(
                (0, a.we)(
                  "#StoreAdmin_UploadError_Generic",
                  typeof t == "string" ? t : t.message,
                ),
              );
            },
          });
        }
        var ql = i(72611),
          Ba = i.n(ql);
        function ec(s) {
          const {
              nAppID: t,
              rgAllCreatorHomeNames: n,
              nPrimaryPartnerID: r,
            } = s,
            o = Ea(t),
            l = (0, p.useMemo)(
              () =>
                o
                  ? o
                      .filter(
                        (c) =>
                          !n.some(
                            (d) =>
                              c.linkname.trim().toLocaleLowerCase() ==
                              d.trim().toLocaleLowerCase(),
                          ),
                      )
                      .sort((c, d) =>
                        c.linkname.localeCompare(d.linkname, void 0, {
                          sensitivity: "base",
                        }),
                      )
                  : [],
              [o, n],
            );
          return l.length == 0
            ? null
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("h3", {
                    children: (0, a.we)("#AppLinding_Creator_Broken"),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, a.we)("#AppLinding_Creator_Broken_desc"),
                  }),
                  l.map((c) =>
                    (0, e.jsx)(tc, { pageLink: c }, "dp_" + c.linkname),
                  ),
                ],
              });
        }
        function tc(s) {
          const { pageLink: t } = s,
            { clanAccountID: n, clanInfo: r, strURL: o } = Cr(t, "developer");
          return (0, e.jsxs)("div", {
            className: Ba().CreatorNameCtn,
            children: [
              (0, e.jsx)(wa, {
                pageLink: t,
                clanAccountID: n,
                clanName: r?.group_name || "" + n,
              }),
              (0, e.jsx)("div", {
                className: Ba().CreatorCtn,
                children: (0, a.PP)(
                  "#AppLanding_Creator_Broken_Link",
                  (0, e.jsx)(e.Fragment, { children: t.linkname }),
                  (0, e.jsx)(br, { clanAccountID: n, strURL: o, clanInfo: r }),
                ),
              }),
            ],
          });
        }
        var Un = i(60394);
        function sc(s) {
          return (0, e.jsxs)(zn.Root, {
            ...s,
            children: [(0, e.jsx)(zn.Track, {}), (0, e.jsx)(zn.Handle, {})],
          });
        }
        function nc(s) {
          const { value: t, onChange: n, size: r = "2", color: o, ref: l } = s,
            c = (d) => {
              (d.key === " " || d.key === "Enter") &&
                (n(!t), d.preventDefault(), d.stopPropagation());
            };
          return (0, e.jsx)(Jt.az, {
            ref: l,
            role: "switch",
            "aria-checked": !!t,
            onClick: () => n(!t),
            onKeyDown: c,
            tabIndex: 0,
            "data-accent-color": o,
            ...(0, lr.mz)({ size: r, className: Un.Root }, oc),
            children: s.children,
          });
        }
        function rc(s) {
          return (0, e.jsx)("div", { className: Un.Track, ...s });
        }
        function ac(s) {
          return (0, e.jsx)("div", { className: Un.Handle, ...s });
        }
        const zn = Object.assign(sc, { Root: nc, Track: rc, Handle: ac }),
          oc = [
            ...qr.L,
            { prop: "size", className: (s) => Un[`Size-${s}`], responsive: !0 },
          ];
        class Na extends Error {
          eResult;
          constructor(t, n) {
            super(n), (this.eResult = t);
          }
        }
        async function ic(s) {
          const t = `${be.TS.PARTNER_BASE_URL}apps/creatorhomelinkhistory?appid=${s}`,
            n = await fetch(t, { credentials: "include" });
          if (!n.ok) throw new Error(`${t} answered ${n.status}`);
          const r = await n.json();
          if (r.success != $t.R)
            throw new Na(r.success, r.msg || `EResult ${r.success}`);
          return r.entries ?? [];
        }
        const lc = "useCreatorHomeLinkHistory";
        function cc(s, t) {
          return (0, hs.I)({
            queryKey: [lc, s],
            queryFn: () => ic(s),
            enabled: t && s > 0,
            staleTime: 1 / 0,
          });
        }
        var js = i(9469);
        function dc(s) {
          const { nAppID: t } = s,
            [n, r] = (0, p.useState)(!1);
          return (0, e.jsxs)(Jt.az, {
            marginTop: "5",
            children: [
              (0, e.jsxs)(Vt.s, {
                align: "center",
                gap: "4",
                children: [
                  (0, e.jsx)(Zr.D, {
                    level: "3",
                    children: (0, a.we)("#AppLanding_Creator_History"),
                  }),
                  (0, e.jsx)(Nn.$, {
                    size: "1",
                    variant: "outline",
                    onClick: () => r(!n),
                    children: (0, a.we)(
                      n
                        ? "#AppLanding_Creator_History_Hide"
                        : "#AppLanding_Creator_History_Show",
                    ),
                  }),
                ],
              }),
              n && (0, e.jsx)(uc, { nAppID: t }),
            ],
          });
        }
        function uc(s) {
          const { nAppID: t } = s,
            n = cc(t, !0),
            [r, o] = (0, p.useState)(!1),
            l = (0, p.useMemo)(() => [...(n.data ?? [])].reverse(), [n.data]),
            c = (0, p.useMemo)(
              () => (r ? l.filter((d) => !!d.is_active) : l),
              [l, r],
            );
          if (n.isLoading)
            return (0, e.jsxs)(Vt.s, {
              align: "center",
              gap: "2",
              marginTop: "3",
              children: [
                (0, e.jsx)(Ia.k, { size: "1" }),
                (0, e.jsx)(Fe.EY, {
                  size: "2",
                  contrast: "description",
                  children: (0, a.we)("#AppLanding_Creator_History_Loading"),
                }),
              ],
            });
          if (n.isError) {
            const d = n.error instanceof Na && n.error.eResult == $t.sW;
            return (0, e.jsx)(Fe.EY, {
              as: "p",
              size: "2",
              color: "text-error",
              marginTop: "3",
              children: (0, a.we)(
                d
                  ? "#AppLanding_Creator_History_Denied"
                  : "#AppLanding_Creator_History_Failed",
              ),
            });
          }
          return l.length == 0
            ? (0, e.jsx)(Fe.EY, {
                as: "p",
                size: "2",
                contrast: "description",
                marginTop: "3",
                children: (0, a.we)("#AppLanding_Creator_History_Empty"),
              })
            : (0, e.jsxs)(Vt.s, {
                direction: "column",
                gap: "3",
                marginTop: "3",
                children: [
                  (0, e.jsxs)(Vt.s, {
                    align: "center",
                    gap: "2",
                    children: [
                      (0, e.jsx)(zn, { size: "1", value: r, onChange: o }),
                      (0, e.jsx)(Fe.EY, {
                        size: "2",
                        children: (0, a.we)(
                          "#AppLanding_Creator_History_HideRemoved",
                        ),
                      }),
                    ],
                  }),
                  c.length == 0
                    ? (0, e.jsx)(Fe.EY, {
                        as: "p",
                        size: "2",
                        contrast: "description",
                        children: (0, a.we)(
                          "#AppLanding_Creator_History_NoneActive",
                        ),
                      })
                    : (0, e.jsxs)($s.x, {
                        columns: "minmax(140px, 1fr) 2fr 2fr 2fr",
                        gapX: "4",
                        alignItems: "center",
                        className: js.HistoryGrid,
                        children: [
                          (0, e.jsx)(Wn, {
                            strToken: "#AppLanding_Creator_History_Name",
                          }),
                          (0, e.jsx)(Wn, {
                            strToken: "#AppLanding_Creator_History_CreatorHome",
                          }),
                          (0, e.jsx)(Wn, {
                            strToken: "#AppLanding_Creator_History_Linked",
                          }),
                          (0, e.jsx)(Wn, {
                            strToken: "#AppLanding_Creator_History_Status",
                          }),
                          c.map((d, m) =>
                            (0, e.jsx)(
                              pc,
                              { entry: d },
                              `${d.link?.clan_steamid}_${d.link?.linkname}_${d.time_created}_${m}`,
                            ),
                          ),
                        ],
                      }),
                ],
              });
        }
        function Wn(s) {
          return (0, e.jsx)(Jt.az, {
            paddingY: "1",
            className: js.HeaderCell,
            children: (0, e.jsx)(Fe.EY, {
              size: "1",
              contrast: "description",
              whiteSpace: "nowrap",
              children: (0, a.we)(s.strToken),
            }),
          });
        }
        function pc(s) {
          const { entry: t } = s,
            n = t.link ?? {},
            r =
              n.relation == Hn.VY.kF
                ? "game[publishers]"
                : n.relation == Hn.VY.XU
                  ? "game[franchises]"
                  : "game[developers]",
            { clanAccountID: o, clanInfo: l, strURL: c } = Cr(n, r),
            d = !!t.is_active,
            m = d ? void 0 : "description";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Jt.az, {
                paddingY: "2",
                className: js.Cell,
                children: (0, e.jsx)(Fe.EY, {
                  size: "2",
                  contrast: m,
                  whiteSpace: "nowrap",
                  className: (0, D.A)(!d && js.RemovedName),
                  children: n.linkname,
                }),
              }),
              (0, e.jsx)(Jt.az, {
                paddingY: "2",
                className: js.Cell,
                children: (0, e.jsx)(Vt.s, {
                  align: "center",
                  gap: "2",
                  wrap: "nowrap",
                  className: js.CreatorCtn,
                  children: (0, e.jsx)(br, {
                    clanAccountID: o,
                    strURL: c,
                    clanInfo: l,
                  }),
                }),
              }),
              (0, e.jsx)(Jt.az, {
                paddingY: "2",
                className: js.Cell,
                children: (0, e.jsx)(Fe.EY, {
                  size: "2",
                  contrast: m,
                  children: (0, a.PP)(
                    "#AppLanding_Creator_History_ByOn",
                    (0, e.jsx)(Oa, { accountID: t.created_by_accountid }),
                    (0, e.jsx)(e.Fragment, { children: Ra(t.time_created) }),
                  ),
                }),
              }),
              (0, e.jsx)(Jt.az, {
                paddingY: "2",
                className: js.Cell,
                children: (0, e.jsx)(Fe.EY, {
                  size: "2",
                  contrast: m,
                  children: d
                    ? (0, a.we)("#AppLanding_Creator_History_Active")
                    : (0, a.PP)(
                        "#AppLanding_Creator_History_RemovedByOn",
                        (0, e.jsx)(Oa, { accountID: t.updated_by_accountid }),
                        (0, e.jsx)(e.Fragment, {
                          children: Ra(t.time_modified),
                        }),
                      ),
                }),
              }),
            ],
          });
        }
        function Oa(s) {
          const { accountID: t } = s;
          return (t ?? 0) > 0
            ? (0, e.jsx)(Vt.s, {
                inline: !0,
                align: "center",
                className: js.AccountName,
                children: (0, e.jsx)(mn.p, { accountID: t }),
              })
            : (0, e.jsx)(e.Fragment, {
                children: (0, a.we)(
                  "#AppLanding_Creator_History_UnknownAccount",
                ),
              });
        }
        function Ra(s) {
          return (s ?? 0) > 0 ? (0, a.TW)(s) : "";
        }
        var mc = i(64916),
          gc = i(63404),
          ts = i.n(gc);
        const hc = {
            bAccessibilityDifficultyLevels:
              "#Accessibility_Feature_AdjustableDifficulty",
            bAccessibilitySaveAnytime: "#Accessibility_Feature_SaveAnytime",
            bAccessibilityNarratedMenus: "#Accessibility_Feature_NarratedMenus",
            bAccessibilityBackgroundVolumeControls:
              "#Accessibility_Feature_CustomVolumeControls",
            bAccessibilityStereoSound: "#Accessibility_Feature_StereoSound",
            bAccessibilitySurroundSound: "#Accessibility_Feature_SurroundSound",
            bAccessibilityResizableUI:
              "#Accessibility_Feature_AdjustableTextSize",
            bAccessibilitySubtitles: "#Accessibility_Feature_SubtitleOptions",
            bAccessibilityColorAlternatives:
              "#Accessibility_Feature_ColorAlternatives",
            bAccessibilityCameraComfort: "#Accessibility_Feature_CameraComfort",
            bAccessibilityKeyboardOnlyOption:
              "#Accessibility_Feature_KeyboardOnlyOption",
            bAccessibilityMouseOnlyOption:
              "#Accessibility_Feature_MouseOnlyOption",
            bAccessibilityTouchOnlyOption:
              "#Accessibility_Feature_TouchOnlyOption",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "#Accessibility_Feature_WithoutQuickTimeEvents",
            bAccessibilityChatTexttoSpeech:
              "#Accessibility_Feature_TextToSpeech",
            bAccessibilityChatSpeechtoText:
              "#Accessibility_Feature_SpeechToText",
            bAccessibilityPlayableAtYourOwnPace:
              "#Accessibility_Feature_PlayableAtYourOwnPace",
            bAccessibilityPlayableWithoutVision:
              "#Accessibility_Feature_PlayableWithoutVision",
            bAccessibilityContrastControls:
              "#Accessibility_Feature_ContrastControls",
          },
          _c = {
            bAccessibilityDifficultyLevels: "adjustable_difficulty",
            bAccessibilitySaveAnytime: "save_anytime",
            bAccessibilityNarratedMenus: "narrated_game_menus",
            bAccessibilityBackgroundVolumeControls: "custom_volume_controls",
            bAccessibilityStereoSound: "stereo_sound",
            bAccessibilitySurroundSound: "surround_sound",
            bAccessibilityResizableUI: "adjustable_text_size",
            bAccessibilitySubtitles: "subtitle_options",
            bAccessibilityColorAlternatives: "color_alternatives",
            bAccessibilityCameraComfort: "camera_comfort",
            bAccessibilityKeyboardOnlyOption: "keyboard_only_option",
            bAccessibilityMouseOnlyOption: "mouse_only_option",
            bAccessibilityTouchOnlyOption: "touch_only_option",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "playable_without_timed_input",
            bAccessibilityChatTexttoSpeech: "chat_text_to_speech",
            bAccessibilityChatSpeechtoText: "chat_speech_to_text",
            bAccessibilityPlayableAtYourOwnPace: "playable_at_your_own_pace",
            bAccessibilityPlayableWithoutVision: "playable_without_vision",
            bAccessibilityContrastControls: "contrast_controls",
          };
        var fc = ((s) => (
          (s.Gameplay = "gameplay"),
          (s.Visual = "visual"),
          (s.Audio = "audio"),
          (s.Input = "input"),
          s
        ))(fc || {});
        const xc = {
            bAccessibilityDifficultyLevels: "gameplay",
            bAccessibilitySaveAnytime: "gameplay",
            bAccessibilityNarratedMenus: "audio",
            bAccessibilityBackgroundVolumeControls: "audio",
            bAccessibilityStereoSound: "audio",
            bAccessibilitySurroundSound: "audio",
            bAccessibilityResizableUI: "visual",
            bAccessibilitySubtitles: "visual",
            bAccessibilityColorAlternatives: "visual",
            bAccessibilityCameraComfort: "visual",
            bAccessibilityPlayableWithoutVision: "visual",
            bAccessibilityContrastControls: "visual",
            bAccessibilityKeyboardOnlyOption: "input",
            bAccessibilityMouseOnlyOption: "input",
            bAccessibilityTouchOnlyOption: "input",
            bAccessibilityPlayableWithoutQuicktimeEvents: "input",
            bAccessibilityChatTexttoSpeech: "input",
            bAccessibilityChatSpeechtoText: "input",
            bAccessibilityPlayableAtYourOwnPace: "input",
          },
          Sc = {
            gameplay: "#Accessibility_Group_Gameplay",
            visual: "#Accessibility_Group_Visual",
            audio: "#Accessibility_Group_Audio",
            input: "#Accessibility_Group_Input",
          };
        function e0(s) {
          return {
            bAccessibilityResizableUI: s.includes(
              k_EStoreCategoryAccessibilityResizableUI,
            ),
            bAccessibilitySubtitles: s.includes(
              k_EStoreCategoryAccessibilitySubtitles,
            ),
            bAccessibilityColorAlternatives: s.includes(
              k_EStoreCategoryAccessibilityColorAlternatives,
            ),
            bAccessibilityCameraComfort: s.includes(
              k_EStoreCategoryAccessibilityCameraComfort,
            ),
            bAccessibilityBackgroundVolumeControls: s.includes(
              k_EStoreCategoryAccessibilityBackgroundVolumeControls,
            ),
            bAccessibilityStereoSound: s.includes(
              k_EStoreCategoryAccessibilityStereoSound,
            ),
            bAccessibilitySurroundSound: s.includes(
              k_EStoreCategoryAccessibilitySurroundSound,
            ),
            bAccessibilityNarratedMenus: s.includes(
              k_EStoreCategoryAccessibilityNarratedMenus,
            ),
            bAccessibilityChatSpeechtoText: s.includes(
              k_EStoreCategoryAccessibilityChatSpeechtoText,
            ),
            bAccessibilityChatTexttoSpeech: s.includes(
              k_EStoreCategoryAccessibilityChatTexttoSpeech,
            ),
            bAccessibilityPlayableWithoutQuicktimeEvents: s.includes(
              k_EStoreCategoryAccessibilityPlayableWithoutQuicktimeEvents,
            ),
            bAccessibilityKeyboardOnlyOption: s.includes(
              k_EStoreCategoryAccessibilityKeyboardOnlyOption,
            ),
            bAccessibilityMouseOnlyOption: s.includes(
              k_EStoreCategoryAccessibilityMouseOnlyOption,
            ),
            bAccessibilityTouchOnlyOption: s.includes(
              k_EStoreCategoryAccessibilityTouchOnlyOption,
            ),
            bAccessibilityDifficultyLevels: s.includes(
              k_EStoreCategoryAccessibilityDifficultyLevels,
            ),
            bAccessibilitySaveAnytime: s.includes(
              k_EStoreCategoryAccessibilitySaveAnytime,
            ),
            bAccessibilityPlayableAtYourOwnPace: s.includes(
              k_EStoreCategoryAccessibilityPlayableAtYourOwnPace,
            ),
            bAccessibilityPlayableWithoutVision: s.includes(
              k_EStoreCategoryAccessibilityPlayableWithoutVision,
            ),
            bAccessibilityContrastControls: s.includes(
              k_EStoreCategoryAccessibilityContrastControls,
            ),
          };
        }
        function Cc(s) {
          const [t, n] = (0, p.useState)(s.initialOpen ?? !1),
            r = p.useId(),
            o = Object.entries(s.features)
              .filter(([d, m]) => m)
              .map(([d]) => d);
          if (o.length === 0) return null;
          const l = {};
          o.forEach((d) => {
            const m = xc[d];
            (l[m] ??= []), l[m].push(d);
          });
          const c = Object.keys(l).length > 1;
          return (0, e.jsxs)("details", {
            className: ts().Details,
            open: t,
            onToggle: (d) => n(d.currentTarget.open),
            children: [
              (0, e.jsxs)(fr.f_, {
                className: ts().Summary,
                children: [
                  (0, e.jsx)("div", {
                    className: ts().ImageContainer,
                    children: (0, e.jsx)(bc, {
                      className: ts().CategoryIcon,
                      "aria-label": "",
                    }),
                  }),
                  (0, e.jsxs)("span", {
                    className: ts().FeatureNameContainer,
                    id: r,
                    children: [
                      (0, e.jsx)("span", {
                        className: ts().FeatureName,
                        children: t
                          ? (0, a.we)("#AccessibilityFeatures")
                          : (0, a.we)(
                              "#AccessibilityFeaturesWithCount",
                              o.length,
                            ),
                      }),
                      (0, e.jsx)("a", {
                        className: ts().InfoLink,
                        href: `${K.TS.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                        target: "_blank",
                        children: "?",
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("ul", {
                className: ts().FeatureList,
                "aria-labelledby": r,
                children: [
                  c &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        l.gameplay &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(Gn, {
                              group: "gameplay",
                              features: l.gameplay,
                              open: t,
                            }),
                          }),
                        l.visual &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(Gn, {
                              group: "visual",
                              features: l.visual,
                              open: t,
                            }),
                          }),
                        l.audio &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(Gn, {
                              group: "audio",
                              features: l.audio,
                              open: t,
                            }),
                          }),
                        l.input &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(Gn, {
                              group: "input",
                              features: l.input,
                              open: t,
                            }),
                          }),
                      ],
                    }),
                  !c &&
                    o.map((d) =>
                      (0, e.jsx)(
                        "li",
                        { children: (0, e.jsx)(Fa, { feature: d, open: t }) },
                        d,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function bc(s) {
          return (0, e.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 1200 1200",
            ...s,
            children: [
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z",
                fillRule: "evenodd",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z",
                fillRule: "evenodd",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23",
                fillRule: "evenodd",
              }),
            ],
          });
        }
        function Gn(s) {
          const t = p.useId();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("span", {
                className: ts().GroupLabel,
                id: t,
                children: (0, a.we)(Sc[s.group]),
              }),
              (0, e.jsx)("ul", {
                className: ts().FeatureGroupItems,
                "aria-labelledby": t,
                children: s.features.map((n) =>
                  (0, e.jsx)(
                    "li",
                    { children: (0, e.jsx)(Fa, { feature: n, open: s.open }) },
                    n,
                  ),
                ),
              }),
            ],
          });
        }
        function Fa(s) {
          return (0, e.jsx)(fr.Ii, {
            href: `${K.TS.STORE_BASE_URL}category/${_c[s.feature]}`,
            className: ts().InfoRow,
            focusable: s.open,
            children: (0, e.jsx)("span", {
              className: ts().FeatureNameContainer,
              children: (0, e.jsx)("span", {
                className: ts().FeatureName,
                children: (0, a.we)(hc[s.feature]),
              }),
            }),
          });
        }
        var Xe = i(77127);
        function Ac() {
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(fs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Gameplay",
                ),
              }),
              (0, e.jsxs)("div", {
                className: Xe.Instructions,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_WizardPrompt_Desc",
                    ),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, a.oW)(
                      "#App_Landing_AccessibilityFeatures_Wizard_Gameplay_Instructions",
                      (0, e.jsx)("a", {
                        href: `${K.TS.PARTNER_BASE_URL}doc/accessibility_features#gameplay`,
                        target: "_blank",
                      }),
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Gameplay_Question",
                ),
              }),
              (0, e.jsx)(rt, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty_Desc",
                ),
                id: "bAccessibilityDifficultyLevels",
              }),
              (0, e.jsx)(rt, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime_Desc",
                ),
                id: "bAccessibilitySaveAnytime",
              }),
            ],
          });
        }
        function vc() {
          const { currentValues: s, fnSetValue: t } = Ts(),
            n = p.useId();
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(fs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Instructions",
                    (0, e.jsx)("a", {
                      href: "https://learn.microsoft.com/windows/win32/winauto/entry-uiauto-win32",
                      target: "_blank",
                    }),
                    (0, e.jsx)("a", {
                      href: `${K.TS.PARTNER_BASE_URL}doc/accessibility_features#narrated_menus`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: n,
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Question",
                ),
              }),
              (0, e.jsx)(Sn, {
                labelId: n,
                options: [
                  {
                    id: "yes",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Yes",
                    ),
                  },
                  {
                    id: "no",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_No",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (s.bAccessibilityNarratedMenus) return "yes";
                  if (s.bAccessibilityNarratedMenus === !1) return "no";
                },
                fnSetValues: (r) => {
                  r === "yes" && t("bAccessibilityNarratedMenus", !0),
                    r === "no" && t("bAccessibilityNarratedMenus", !1);
                },
              }),
            ],
          });
        }
        function Ha() {
          const { currentValues: s, fnSetValue: t } = Ts(),
            n = p.useId();
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(fs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Instructions",
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: n,
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Question",
                ),
              }),
              (0, e.jsx)(Sn, {
                labelId: n,
                options: [
                  {
                    id: "yes",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Yes",
                    ),
                  },
                  {
                    id: "no",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_No",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (s.bAccessibilityPlayableWithoutVision) return "yes";
                  if (s.bAccessibilityPlayableWithoutVision === !1) return "no";
                },
                fnSetValues: (r) => {
                  r === "yes" && t("bAccessibilityPlayableWithoutVision", !0),
                    r === "no" && t("bAccessibilityPlayableWithoutVision", !1);
                },
              }),
            ],
          });
        }
        function yc() {
          const { currentValues: s, fnSetValue: t } = Ts(),
            n = p.useId();
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(fs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Instructions",
                    (0, e.jsx)("a", {
                      href: `${K.TS.PARTNER_BASE_URL}doc/accessibility_features#volume_controls`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: n,
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Question",
                ),
              }),
              (0, e.jsx)(Sn, {
                labelId: n,
                options: [
                  {
                    id: "yes",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Yes",
                    ),
                  },
                  {
                    id: "no",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_No",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (s.bAccessibilityBackgroundVolumeControls) return "yes";
                  if (s.bAccessibilityBackgroundVolumeControls === !1)
                    return "no";
                },
                fnSetValues: (r) => {
                  r === "yes" &&
                    t("bAccessibilityBackgroundVolumeControls", !0),
                    r === "no" &&
                      t("bAccessibilityBackgroundVolumeControls", !1);
                },
              }),
            ],
          });
        }
        function jc() {
          const { currentValues: s, fnSetValue: t } = Ts(),
            n = p.useId();
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(fs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_Instructions",
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: n,
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_Question",
                ),
              }),
              (0, e.jsx)(Sn, {
                labelId: n,
                options: [
                  {
                    id: "surround",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_SurroundSound",
                    ),
                  },
                  {
                    id: "stereo",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_StereoSound",
                    ),
                  },
                  {
                    id: "none",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_None",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () =>
                  s.bAccessibilitySurroundSound
                    ? "surround"
                    : s.bAccessibilityStereoSound
                      ? "stereo"
                      : "none",
                fnSetValues: (r) => {
                  r === "surround" &&
                    (t("bAccessibilitySurroundSound", !0),
                    t("bAccessibilityStereoSound", !0)),
                    r === "stereo" &&
                      (t("bAccessibilitySurroundSound", !1),
                      t("bAccessibilityStereoSound", !0)),
                    r === "none" &&
                      (t("bAccessibilitySurroundSound", !1),
                      t("bAccessibilityStereoSound", !1));
                },
              }),
            ],
          });
        }
        function Ua() {
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(fs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Visual",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_Visual_Instructions",
                    (0, e.jsx)("a", {
                      href: `${K.TS.PARTNER_BASE_URL}doc/accessibility_features#visual_recommendations`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Visual_Question",
                ),
              }),
              (0, e.jsx)(rt, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize_Desc",
                ),
                id: "bAccessibilityResizableUI",
              }),
              (0, e.jsx)(rt, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions_Desc",
                ),
                id: "bAccessibilitySubtitles",
              }),
              (0, e.jsx)(rt, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives_Desc",
                ),
                id: "bAccessibilityColorAlternatives",
              }),
              (0, e.jsx)(rt, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls_Desc",
                ),
                id: "bAccessibilityContrastControls",
              }),
              (0, e.jsx)(rt, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort_Desc",
                ),
                id: "bAccessibilityCameraComfort",
              }),
            ],
          });
        }
        function Pc() {
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(fs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Input",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_Input_Instructions",
                    (0, e.jsx)("a", {
                      href: `${K.TS.PARTNER_BASE_URL}doc/accessibility_features#input_recommendations`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Input_Question",
                ),
              }),
              (0, e.jsx)(rt, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption_Desc",
                ),
                id: "bAccessibilityKeyboardOnlyOption",
              }),
              (0, e.jsx)(rt, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption_Desc",
                ),
                id: "bAccessibilityMouseOnlyOption",
              }),
              (0, e.jsx)(rt, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption_Desc",
                ),
                id: "bAccessibilityTouchOnlyOption",
              }),
            ],
          });
        }
        function za() {
          const { currentValues: s, fnSetValue: t } = Ts(),
            n = p.useId();
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(fs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_Instructions",
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: n,
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_Question",
                ),
              }),
              (0, e.jsx)(Sn, {
                labelId: n,
                options: [
                  {
                    id: "no",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_No",
                    ),
                  },
                  {
                    id: "playable_without_quick_time_events",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_NoQTE",
                    ),
                  },
                  {
                    id: "playable_at_your_own_pace",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_NoTimedInput",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (s.bAccessibilityPlayableAtYourOwnPace)
                    return "playable_at_your_own_pace";
                  if (s.bAccessibilityPlayableWithoutQuicktimeEvents)
                    return "playable_without_quick_time_events";
                  if (
                    s.bAccessibilityPlayableAtYourOwnPace === !1 &&
                    s.bAccessibilityPlayableWithoutQuicktimeEvents === !1
                  )
                    return "no";
                },
                fnSetValues: (r) => {
                  r === "playable_at_your_own_pace" &&
                    (t("bAccessibilityPlayableAtYourOwnPace", !0),
                    t("bAccessibilityPlayableWithoutQuicktimeEvents", !0)),
                    r === "playable_without_quick_time_events" &&
                      (t("bAccessibilityPlayableAtYourOwnPace", !1),
                      t("bAccessibilityPlayableWithoutQuicktimeEvents", !0)),
                    r === "no" &&
                      (t("bAccessibilityPlayableAtYourOwnPace", !1),
                      t("bAccessibilityPlayableWithoutQuicktimeEvents", !1));
                },
              }),
            ],
          });
        }
        function Ec() {
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(fs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText_Instructions",
                    (0, e.jsx)("a", {
                      href: `${K.TS.PARTNER_BASE_URL}doc/accessibility_features#tts`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText_Question",
                ),
              }),
              (0, e.jsx)(rt, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech_Desc",
                ),
                id: "bAccessibilityChatTexttoSpeech",
              }),
              (0, e.jsx)(rt, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText_Desc",
                ),
                id: "bAccessibilityChatSpeechtoText",
              }),
            ],
          });
        }
        function Ar() {
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(fs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Summary",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#App_Landing_AccessibilityFeatures_Wizard_Summary_Instructions",
                  ),
                }),
              }),
              (0, e.jsxs)(S.dR, {
                children: [
                  (0, e.jsxs)(S.VP, {
                    children: [
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty_Desc",
                        ),
                        id: "bAccessibilityDifficultyLevels",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime_Desc",
                        ),
                        id: "bAccessibilitySaveAnytime",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls_Desc",
                        ),
                        id: "bAccessibilityBackgroundVolumeControls",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus_Desc",
                        ),
                        id: "bAccessibilityNarratedMenus",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_StereoSound",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_StereoSound_Desc",
                        ),
                        id: "bAccessibilityStereoSound",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SurroundSound",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SurroundSound_Desc",
                        ),
                        id: "bAccessibilitySurroundSound",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize_Desc",
                        ),
                        id: "bAccessibilityResizableUI",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions_Desc",
                        ),
                        id: "bAccessibilitySubtitles",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives_Desc",
                        ),
                        id: "bAccessibilityColorAlternatives",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls_Desc",
                        ),
                        id: "bAccessibilityContrastControls",
                      }),
                    ],
                  }),
                  (0, e.jsxs)(S.VP, {
                    children: [
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort_Desc",
                        ),
                        id: "bAccessibilityCameraComfort",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision_Desc",
                        ),
                        id: "bAccessibilityPlayableWithoutVision",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption_Desc",
                        ),
                        id: "bAccessibilityKeyboardOnlyOption",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption_Desc",
                        ),
                        id: "bAccessibilityMouseOnlyOption",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption_Desc",
                        ),
                        id: "bAccessibilityTouchOnlyOption",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_WithoutQuickTimeEvents",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_WithoutQuickTimeEvents_Desc",
                        ),
                        id: "bAccessibilityPlayableWithoutQuicktimeEvents",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableAtYourOwnPace",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableAtYourOwnPace_Desc",
                        ),
                        id: "bAccessibilityPlayableAtYourOwnPace",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech_Desc",
                        ),
                        id: "bAccessibilityChatTexttoSpeech",
                      }),
                      (0, e.jsx)(rt, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText_Desc",
                        ),
                        id: "bAccessibilityChatSpeechtoText",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        const Wa = { 2: [Ha, Ua, za] },
          Ga = 2;
        function Dc(s, t, n, r) {
          return (0, p.useMemo)(() => {
            if (s) return [Ar];
            if (!r)
              return [
                Ac,
                vc,
                Ha,
                yc,
                jc,
                Ua,
                Pc,
                za,
                t ? Ec : void 0,
                Ar,
              ].filter((l) => !!l);
            const o = new Set();
            for (let l = n + 1; l <= Ga; l++)
              if (l in Wa) for (const c of Wa[l]) o.add(c);
            return [...o, Ar];
          }, [s, t, n, r]);
        }
        const Va = p.createContext(void 0);
        function Ts() {
          return p.useContext(Va);
        }
        function Tc(s) {
          const t = p.useMemo(
            () => ({
              currentValues: s.currentValues,
              fnSetValue: s.fnSetValue,
              nPageIndex: s.nPageIndex,
              bEditMode: s.bEditMode,
            }),
            [s.currentValues, s.fnSetValue, s.nPageIndex, s.bEditMode],
          );
          return (0, e.jsx)(Va.Provider, { value: t, children: s.children });
        }
        function wc(s) {
          const {
              close: t,
              features: n,
              editMode: r,
              changedMode: o,
              isMultiplayer: l,
              nLastVersionCompleted: c,
            } = s,
            [d, m] = (0, p.useState)(0),
            x = Dc(
              r,
              l ||
                n.bAccessibilityChatSpeechtoText ||
                n.bAccessibilityChatTexttoSpeech,
              c,
              o,
            ),
            [f, h] = p.useState(n),
            C = () => m((Ne) => Ne - 1),
            E = () => m((Ne) => Ne + 1);
          let X = C;
          d === 0 && (X = t);
          let xe = E,
            q = (0, a.we)("#Wizard_NextButton");
          d === x.length - 1 &&
            ((xe = () => {
              Mc(f), t();
            }),
            (q = (0, a.we)("#Wizard_SaveAndExitButton")));
          const V = (Ne, We) => {
              h((ss) => ({ ...ss, [Ne]: We }));
            },
            $e = x[d];
          return (0, e.jsxs)(xr.mt, {
            active: !0,
            className: Xe.WizardModal,
            children: [
              (0, e.jsxs)(Tc, {
                fnSetValue: V,
                currentValues: f,
                nPageIndex: d,
                bEditMode: r,
                children: [
                  (0, e.jsx)(Ic, { nPages: x.length }),
                  (0, e.jsx)(S.nB, {
                    className: Xe.WizardBody,
                    children: (0, e.jsx)($e, {}),
                  }),
                ],
              }),
              (0, e.jsx)(S.CB, {
                className: Xe.WizardButtons,
                onCancel: X,
                strCancelText: (0, a.we)("#Wizard_BackButton"),
                onOK: xe,
                strOKText: q,
              }),
            ],
          });
        }
        function Ic(s) {
          const { nPages: t } = s,
            { nPageIndex: n } = Ts(),
            r = (100 * (n + 1)) / (t + 1);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                className: Xe.WizardTitle,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Title",
                ),
              }),
              (0, e.jsx)("div", {
                className: (0, D.A)(
                  Xe.ProgressBar,
                  n == t - 1 && Xe.ProgressBarComplete,
                ),
                children:
                  n < t - 1 &&
                  (0, e.jsx)("div", {
                    className: (0, D.A)(Xe.ProgressBarFillComponent),
                    style: { width: r + "%" },
                  }),
              }),
            ],
          });
        }
        function fs(s) {
          const { nPageIndex: t, bEditMode: n } = Ts();
          return n
            ? null
            : (0, e.jsx)("div", {
                className: Xe.StepRow,
                children: (0, e.jsxs)("div", {
                  className: Xe.StepLabel,
                  children: [
                    (0, a.we)("#Wizard_StepNumber", t + 1),
                    s.subtitle && (0, e.jsx)(S.iK, { children: s.subtitle }),
                  ],
                }),
              });
        }
        function rt(s) {
          const { currentValues: t, fnSetValue: n } = Ts();
          return (0, e.jsx)(S.Yh, {
            label: (0, e.jsxs)("div", {
              className: Xe.CheckboxComplexLabel,
              children: [
                (0, e.jsxs)("span", {
                  children: [
                    s.name,
                    " ",
                    s.tooltip &&
                      (0, e.jsx)(bs.o, {
                        customTooltip: !0,
                        tooltip: (0, e.jsx)(oe.zQ, {
                          className: Xe.WizardTooltip,
                          children: s.tooltip,
                        }),
                      }),
                  ],
                }),
                (0, e.jsx)("p", { children: s.description }),
              ],
            }),
            checked: t[s.id],
            onChange: (r) => n(s.id, r),
          });
        }
        function Sn(s) {
          const t = s.fnCalculateSelectedOption();
          return (0, e.jsx)(S.zW, {
            labelId: s.labelId,
            value: t,
            onChange: s.fnSetValues,
            children: s.options.map((n) =>
              (0, e.jsxs)(
                S.a,
                {
                  value: n.id,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, D.A)(
                        Xe.RadioButton,
                        t == n.id && Xe.Selected,
                      ),
                    }),
                    (0, e.jsx)("div", {
                      className: Xe.OptionLabel,
                      children: (0, a.we)(n.name),
                    }),
                  ],
                },
                n.id,
              ),
            ),
          });
        }
        function Nt(s, t) {
          const n = document.querySelector(
            `[name="app[classification][category][category_${s}]"]`,
          );
          (0, un.wT)(n, "Missing category input for", s),
            n && n.setAttribute("value", t ? "true" : "");
        }
        function Mc(s) {
          Nt(64, s.bAccessibilityResizableUI),
            Nt(65, s.bAccessibilitySubtitles),
            Nt(66, s.bAccessibilityColorAlternatives),
            Nt(67, s.bAccessibilityCameraComfort),
            Nt(68, s.bAccessibilityBackgroundVolumeControls),
            Nt(69, s.bAccessibilityStereoSound),
            Nt(70, s.bAccessibilitySurroundSound),
            Nt(71, s.bAccessibilityNarratedMenus),
            Nt(72, s.bAccessibilityChatSpeechtoText),
            Nt(73, s.bAccessibilityChatTexttoSpeech),
            Nt(74, s.bAccessibilityPlayableWithoutQuicktimeEvents),
            Nt(75, s.bAccessibilityKeyboardOnlyOption),
            Nt(76, s.bAccessibilityMouseOnlyOption),
            Nt(77, s.bAccessibilityTouchOnlyOption),
            Nt(78, s.bAccessibilityDifficultyLevels),
            Nt(79, s.bAccessibilitySaveAnytime),
            Nt(80, s.bAccessibilityPlayableAtYourOwnPace),
            Nt(81, s.bAccessibilityPlayableWithoutVision),
            Nt(82, s.bAccessibilityContrastControls),
            document
              .querySelector('[name="app[content][accessibilitywizard][v1]"]')
              ?.setAttribute("value", "true"),
            document
              .querySelector('[name="app[content][accessibilitywizard][v2]"]')
              ?.setAttribute("value", "true");
          const t = document.getElementById("submitBtn");
          t && t.click();
        }
        var kc = i(70019),
          Ot = i.n(kc),
          Lc = ((s) => (
            (s[(s.Closed = 0)] = "Closed"),
            (s[(s.Wizard = 1)] = "Wizard"),
            (s[(s.Edit = 2)] = "Edit"),
            (s[(s.Changed = 3)] = "Changed"),
            s
          ))(Lc || {});
        function Bc(s) {
          const {
              isMultiplayer: t,
              bWizardCompleted: n,
              nLastVersionCompleted: r,
              ...o
            } = s,
            l = Object.entries(o).some(
              ([m, x]) => m.startsWith("bAccessibility") && x,
            ),
            [c, d] = p.useState(0);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              c !== 0 &&
                (0, e.jsx)(wc, {
                  editMode: c === 2,
                  changedMode: c === 3,
                  close: () => d(0),
                  features: o,
                  isMultiplayer: t,
                  nLastVersionCompleted: r,
                }),
              (0, e.jsx)(Nc, {
                bWizardCompleted: n,
                nLastVersionCompleted: r,
                bHasAnyAccessibilityFeatures: l,
                setModalState: d,
                features: s,
              }),
            ],
          });
        }
        function Nc(s) {
          const {
            bHasAnyAccessibilityFeatures: t,
            bWizardCompleted: n,
            nLastVersionCompleted: r,
            setModalState: o,
            features: l,
          } = s;
          return t || n
            ? (0, e.jsx)(Rc, {
                bHasAnyAccessibilityFeatures: t,
                onEdit: () => o(2),
                onStart: () => o(1),
                onChanged: () => o(3),
                features: l,
                nLastVersionCompleted: r,
              })
            : (0, e.jsx)(Oc, { onStart: () => o(1) });
        }
        function Oc(s) {
          return (0, e.jsxs)(S.nB, {
            children: [
              (0, e.jsx)(S.a3, {
                className: Ot().AccessibilityFeatureDescription,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_WizardPrompt_Desc",
                ),
              }),
              (0, e.jsx)(S.jn, {
                className: Ot().StartWizardButton,
                onClick: s.onStart,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_WizardPrompt_StartButton",
                ),
              }),
            ],
          });
        }
        function Rc(s) {
          return (0, e.jsxs)(S.nB, {
            children: [
              (0, e.jsx)(S.a3, {
                className: Ot().AccessibilityFeatureDescription,
                children: s.bHasAnyAccessibilityFeatures
                  ? (0, a.we)("#App_Landing_AccessibilityFeatures_Summary")
                  : (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Summary_NoFeatures",
                    ),
              }),
              s.bHasAnyAccessibilityFeatures &&
                (0, e.jsx)(Fc, { features: s.features, onEdit: s.onEdit }),
              (0, e.jsx)("div", {
                className: Ot().ButtonRow,
                children: (0, e.jsx)(S.jn, {
                  className: Ot().StartWizardButton,
                  onClick: s.onStart,
                  children: (0, a.we)(
                    "#App_Landing_AccessibilityFeatures_WizardPrompt_StartButton",
                  ),
                }),
              }),
              Ga > s.nLastVersionCompleted &&
                (0, e.jsxs)("div", {
                  className: Ot().Updates,
                  children: [
                    (0, e.jsx)("div", {
                      className: Ot().NewBugContainer,
                      children: (0, e.jsx)("span", {
                        className: Ot().New,
                        children: (0, a.we)("#Callout_NEW"),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("p", {
                          children: (0, a.we)(
                            "#App_Landing_AccessibilityFeatures_WizardPrompt_Update_Desc",
                          ),
                        }),
                        (0, e.jsxs)("div", {
                          className: Ot().UpdateButtonContainer,
                          children: [
                            (0, e.jsx)(S.jn, {
                              className: Ot().UpdatesWizardButton,
                              onClick: s.onChanged,
                              children: (0, a.we)(
                                "#App_Landing_AccessibilityFeatures_WizardPrompt_UpdateButton",
                              ),
                            }),
                            (0, e.jsx)("span", {
                              children: (0, a.we)(
                                "#App_Landing_AccessibilityFeatures_WizardPrompt_UpdateButton_Desc",
                              ),
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
        function Fc(s) {
          return (0, e.jsxs)("div", {
            className: Ot().AccessibilityFeatureInfoCtn,
            children: [
              (0, e.jsx)("div", {
                className: Ot().AccessibilityFeatureContent,
                children: (0, e.jsx)("div", {
                  className: Ot().PreviewContainer,
                  children: (0, e.jsx)(Cc, {
                    features: s.features,
                    initialOpen: !0,
                  }),
                }),
              }),
              (0, e.jsxs)("div", {
                className: Ot().EditButton,
                onClick: s.onEdit,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, D.A)(Ot().Spacer, Ot().Top),
                  }),
                  (0, e.jsx)("div", {
                    className: Ot().EditButtonIcon,
                    children: (0, e.jsx)(B.ffu, {}),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, D.A)(Ot().Spacer, Ot().Bottom),
                  }),
                ],
              }),
            ],
          });
        }
        var vr = i(82791),
          Hc = i(90783);
        function Uc(s) {
          return (0, e.jsxs)(qe.dO, {
            children: [
              (0, e.jsx)(qe.qh, {
                path: Ze.bI.GameEdit(`:action(${Ze.a3.join("|")})`, ":itemid"),
                children: (0, e.jsx)(ye._M, {
                  children: (0, e.jsx)(tt.X, {
                    config: {
                      "storeadmin-releasedateinfo": (t) =>
                        (0, e.jsx)(at.M, { bIsGameEdit: !0, ...t }),
                      "storeadmin-controllersupportinfo": (t) =>
                        (0, e.jsx)(Pe, { ...t }),
                      "storeadmin-app-description-editor": (t) =>
                        (0, e.jsx)(Je, { ...t }),
                      "storeadmin-app-extraassetslist": (t) =>
                        (0, e.jsx)(we.c$, { ...t }),
                      "storeadmin-season-pass-survey": (t) =>
                        (0, e.jsx)(Vi, { ...t }),
                      "storeadmin-creator-home-display-edit": (t) =>
                        (0, e.jsx)(zs, { ...t }),
                      "storeadmin-dlc-edit": (t) => (0, e.jsx)(ar, { ...t }),
                      "storeadmin-dlc-dependancy-edit": (t) =>
                        (0, e.jsx)(Yn, { ...t }),
                      "storeadmin-social-media-edit": (t) =>
                        (0, e.jsx)(Yi, { ...t }),
                      "storeadmin-anticheat-edit": (t) =>
                        (0, e.jsx)(tl, { ...t }),
                      "storeadmin-graphicalassets-confirmdialog": (t) =>
                        (0, e.jsx)(Sr, { ...t }),
                      "storeadmin-pinnedbundles-edit": (t) =>
                        (0, e.jsx)(_, { ...t }),
                      "storeadmin-purchaseoptionsorder-edit": (t) =>
                        (0, e.jsx)(pi, { ...t }),
                      "storeadmin-accessibilityfeatures": (t) =>
                        (0, e.jsx)(Bc, { ...t }),
                      "storeadmin-creator-home-edit": (t) =>
                        (0, e.jsx)(Wl, { ...t }),
                      "storeadmin-app-screenshot-alttext": (t) =>
                        (0, e.jsx)(Ql, { ...t }),
                      "storeadmin-creator-home-fixup": (t) =>
                        (0, e.jsx)(ec, { ...t }),
                      "storeadmin-creator-home-link-history": (t) =>
                        (0, e.jsx)(dc, { ...t }),
                      "storeadmin-editions-editor": (t) =>
                        (0, e.jsx)(mc.H, { ...t }),
                    },
                  }),
                }),
              }),
              (0, e.jsx)(qe.qh, {
                path: Ze.bI.PackageEdit(
                  `:action(${Ze._h.join("|")})`,
                  ":itemid",
                ),
                children: (0, e.jsx)(tt.X, {
                  config: {
                    "storeadmin-graphicalassets-confirmdialog": (t) =>
                      (0, e.jsx)(Sr, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(qe.qh, {
                path: Ze.bI.BundleEdit(
                  `:action(${Ze.Cg.join("|")})`,
                  ":itemid",
                ),
                children: (0, e.jsx)(tt.X, {
                  config: {
                    "storeadmin-graphicalassets-confirmdialog": (t) =>
                      (0, e.jsx)(Sr, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(qe.qh, {
                path: Ze.bI.ReviewPriceProposals(),
                component: Go,
              }),
              (0, e.jsx)(qe.qh, {
                path: Ze.bI.PackagePricingComparison(),
                component: di,
              }),
              (0, e.jsx)(qe.qh, {
                path: Ze.bI.PackageLanding(":packageid"),
                children: (0, e.jsx)(tt.X, {
                  config: {
                    "packagelanding-nonappcontents-edit": (t) =>
                      (0, e.jsx)(ml, { ...t }),
                    "packagelanding-packagepurchasedisplay": (t) =>
                      (0, e.jsx)(Sl, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(qe.qh, {
                path: Ze.bI.FrontPageEdit(":clusterid"),
                children: (0, e.jsx)(tt.X, {
                  config: {
                    "storeadmin-colors": (t) => (0, e.jsx)(vr.Y, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(qe.qh, {
                path: Ze.bI.FrontPageSteamChinaEdit(":clusterid"),
                children: (0, e.jsx)(tt.X, {
                  config: {
                    "storeadmin-colors": (t) => (0, e.jsx)(vr.Y, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(qe.qh, {
                path: Ze.bI.ContentHubEditor(":suffix", ":clusterid"),
                children: (0, e.jsx)(tt.X, {
                  config: {
                    "storeadmin-colors": (t) => (0, e.jsx)(vr.Y, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(qe.qh, { component: Hc.a }),
            ],
          });
        }
      },
      58952: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { WM: () => P, l6: () => O, uh: () => N });
        var e = i(7850),
          p = i(90626),
          a = i(92142),
          fe = i(86946),
          B = i(12204),
          Z = i(15252),
          D = i(63029),
          R = i(76854),
          re = i(39790),
          oe = i(85367),
          K = i(68031),
          Se = i(80549),
          Ie = i(58017),
          Re = i(64415);
        function Ye(b) {
          const {
              children: A,
              state: w,
              placement: U = "bottom-end",
              popoverWidth: J = "dropdown",
              popoverMaxHeight: ce,
              popoverPresentation: Pe,
              popoverLabel: ve,
              ...Le
            } = b,
            [H, ie] = (0, p.useState)(null),
            [_e, de] = (0, p.useState)(null),
            Ce = (0, p.useMemo)(
              () =>
                w.rgOptions.findIndex((Ue) =>
                  w.multiselect
                    ? w.selectedValue.includes(Ue)
                    : Ue === w.selectedValue,
                ),
              [w.selectedValue, w.rgOptions, w.multiselect],
            ),
            le = (0, p.useRef)(null),
            De = {
              ...w,
              ...Le,
              focusedValue: H,
              onFocusChange: ie,
              refPopover: le,
              popoverLabel: ve,
              setOpen: (Ue) => {
                Ue && ie(w.multiselect ? w.selectedValue[0] : w.selectedValue),
                  w.setOpen(Ue);
              },
              focusedIndex: _e,
              onFocusedIndexChange: de,
            },
            ge = (0, a.T)({
              open: w.bOpen,
              onOpenChange: w.setOpen,
              width: J,
              maxHeight: ce,
              placement: U,
              presentation: Pe,
              selectedIndex: Ce,
              setSelectedIndex: (Ue) =>
                w.onItemSelectionChange(w.rgOptions[Ue]),
              activeIndex: _e,
              setActiveIndex: de,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, e.jsx)(F.Provider, {
            value: De,
            children: (0, e.jsx)(a.k.Root, { state: ge, children: A }),
          });
        }
        function ne(b) {
          const { refPopover: A, popoverLabel: w } = Q("<Select.Options>");
          return (0, e.jsx)(a.k.Positioner, {
            ref: A,
            label: w,
            children: b.children,
          });
        }
        function pe(b) {
          const { value: A, children: w, disabled: U, ...J } = b,
            {
              onItemSelectionChange: ce,
              multiselect: Pe,
              selectedValue: ve,
              maxSelected: Le,
            } = Q("<SelectTrigger>"),
            H = typeof A == "string" ? A : void 0;
          let ie = !1,
            _e = !1;
          Pe
            ? ((ie = Array.isArray(ve) && ve.includes(A)),
              (_e = !!Le && Array.isArray(ve) && ve.length >= Le))
            : (ie = A === ve);
          const de = U || (_e && !ie);
          return (0, e.jsxs)(a.k.Item, {
            label: H,
            onSelect: () => ce(A),
            selected: ie,
            disabled: de,
            ...J,
            children: [
              Pe &&
                (0, e.jsxs)(K.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, e.jsx)(oe.S, { checked: ie, variant: "dark" }),
                    w,
                  ],
                }),
              !Pe && w,
            ],
          });
        }
        function I(b) {
          const { children: A, render: w } = b,
            {
              bOpen: U,
              setOpen: J,
              selectedValue: ce,
              variant: Pe,
              size: ve,
              radius: Le,
              status: H,
              color: ie,
              rgOptions: _e,
              multiselect: de,
              onClear: Ce,
              focusedValue: le,
              onFocusChange: De,
              onSelectionChange: ge,
              clearable: Ue,
              focusedIndex: ze,
              onItemSelectionChange: Te,
              onFocusedIndexChange: ye,
              refPopover: Ae,
              popoverLabel: Me,
              placeholder: ue,
              maxSelected: He,
              ...Oe
            } = Q("<SelectTrigger>"),
            Be = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => J(!U),
              children: A,
            },
            Je = de ? Array.isArray(ce) && ce.length > 0 : !!ce,
            et = Je && Ue,
            ht = et
              ? (0, e.jsx)(D.g, { onClick: Ce, cursor: "pointer", hitSlop: !0 })
              : (0, e.jsx)(B.V, {}),
            st = et
              ? {
                  onSecondaryButton: Ce,
                  actionDescriptionMap: {
                    [Re.pR.SECONDARY]: Ie.T.Localize("#Clear"),
                  },
                }
              : void 0,
            we = (0, Se.f)("Select", Pe),
            at = (0, e.jsx)(fe.j, {
              afterContent: ht,
              variant: we,
              size: ve,
              radius: Le,
              status: H,
              color: ie,
              hasValue: Je,
              tabIndex: 0,
              cursor: "pointer",
              navProps: st,
              ...Oe,
            }),
            Ze = (0, R.Q)(w, at, Be, void 0);
          return (0, e.jsx)(a.k.Anchor, { children: Ze });
        }
        function ae(b) {
          return (0, e.jsx)(Z.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: b.children,
          });
        }
        function S(b) {
          return (0, e.jsx)(Z.EY, {
            contrast: "description",
            truncate: !0,
            children: b.children,
          });
        }
        function P(b) {
          return k(b, !1);
        }
        function k(b, A) {
          const { onSelectionChange: w, selectedValue: U, ...J } = b,
            [ce, Pe] = (0, p.useState)(!1),
            ve = (0, p.useCallback)(
              (ie) => {
                w(ie), A || Pe(!1);
              },
              [w, A],
            ),
            Le = (0, p.useCallback)(
              (ie) => {
                ve(A ? [] : null), ie?.stopPropagation(), ie?.preventDefault();
              },
              [ve, A],
            ),
            H = (0, p.useCallback)(
              (ie) => {
                if (!A) ve(ie);
                else {
                  const _e = U,
                    de = _e.indexOf(ie);
                  if (de === -1) ve(_e.concat(ie));
                  else return ve(_e.slice(0, de).concat(_e.slice(de + 1)));
                }
              },
              [ve, U, A],
            );
          return {
            onSelectionChange: ve,
            onItemSelectionChange: H,
            onClear: Le,
            bOpen: ce,
            setOpen: Pe,
            multiselect: A,
            selectedValue: U,
            ...J,
          };
        }
        const v = {
          Root: Ye,
          Option: pe,
          Options: ne,
          Trigger: I,
          Value: ae,
          Placeholder: S,
        };
        function z(b) {
          return typeof b == "string"
            ? b
            : typeof b == "number"
              ? b.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  b,
                ),
                "");
        }
        function G(b) {
          const {
              selectedValue: A,
              onSelectionChange: w,
              options: U,
              placeholder: J,
              getOptionLabel: ce = z,
              ...Pe
            } = b,
            ve = P({
              onSelectionChange: w,
              selectedValue: A,
              rgOptions: U,
              placeholder: J,
            }),
            Le = A != null,
            H = Le ? ce(A) : "";
          return (0, e.jsxs)(O.Root, {
            state: ve,
            ...Pe,
            children: [
              (0, e.jsxs)(O.Trigger, {
                children: [
                  Le && (0, e.jsx)(O.Value, { children: H }),
                  !Le && (0, e.jsx)(O.Placeholder, { children: J }),
                ],
              }),
              (0, e.jsx)(O.Options, {
                children: ve.rgOptions.map((ie, _e) =>
                  (0, e.jsx)(O.Option, { value: ie, children: ce(ie) }, _e),
                ),
              }),
            ],
          });
        }
        const O = Object.assign(G, v);
        function L(b) {
          return k(b, !0);
        }
        const Ee = v;
        function T(b) {
          const {
              selectedValue: A,
              onSelectionChange: w,
              options: U,
              placeholder: J,
              getOptionLabel: ce = z,
              maxSelected: Pe,
              ...ve
            } = b,
            Le = L({
              onSelectionChange: w,
              selectedValue: A,
              rgOptions: U,
              placeholder: J,
              maxSelected: Pe,
            }),
            H = Array.isArray(A) && A.length > 0;
          let ie = "";
          if (H) {
            const _e = A.map((de) => ce(de));
            "ListFormat" in Intl
              ? (ie = new Intl.ListFormat((0, re.ZO)().strISOCode).format(_e))
              : (ie = _e.join(", "));
          }
          return (0, e.jsxs)(N.Root, {
            state: Le,
            ...ve,
            children: [
              (0, e.jsxs)(N.Trigger, {
                children: [
                  H && (0, e.jsx)(N.Value, { children: ie }),
                  !H && (0, e.jsx)(N.Placeholder, { children: J }),
                ],
              }),
              (0, e.jsx)(N.Options, {
                children: Le.rgOptions.map((_e, de) =>
                  (0, e.jsx)(N.Option, { value: _e, children: ce(_e) }, de),
                ),
              }),
            ],
          });
        }
        const N = Object.assign(T, Ee),
          F = (0, p.createContext)(null);
        function Q(b) {
          const A = (0, p.useContext)(F);
          return A || console.error(`${b} must be used within a <Select>!`), A;
        }
      },
      95994: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { x: () => oe });
        var e = i(7850),
          p = i(70182),
          a = i(64238),
          fe = i.n(a),
          B = i(8928),
          Z = i(69289),
          D = i(75180),
          R = i.n(D),
          re = i(3166);
        function oe(Se) {
          const {
              as: Ie = "div",
              ref: Re,
              focusable: Ye,
              navProps: ne,
              ...pe
            } = Se,
            I = (0, re.Qn)(),
            ae = (0, Z.mz)({ ...pe, className: fe()(D.Grid, Se.className) }, K),
            S = Ye ?? ne?.focusable ?? !!pe.onClick,
            P = (0, e.jsx)(Ie, { ref: Re, ...ae });
          return I
            ? (0, e.jsx)(p.J, {
                "flow-children": "grid",
                ...(ne || {}),
                focusable: S,
                children: P,
              })
            : P;
        }
        const K = [
          ...B.h,
          {
            prop: "display",
            responsive: !0,
            className: D.Display,
            cssProperty: "--grid-display",
          },
          {
            prop: "columns",
            responsive: !0,
            className: D.Columns,
            cssProperty: "--grid-columns",
          },
          {
            prop: "rows",
            responsive: !0,
            className: D.Rows,
            cssProperty: "--grid-rows",
          },
          {
            prop: "autoColumns",
            responsive: !0,
            className: D.AutoColumns,
            cssProperty: "--grid-auto-columns",
          },
          {
            prop: "autoRows",
            responsive: !0,
            className: D.AutoRows,
            cssProperty: "--grid-auto-rows",
          },
          {
            prop: "autoFlow",
            responsive: !0,
            className: D.AutoFlow,
            cssProperty: "--grid-auto-flow",
          },
          {
            prop: "areas",
            responsive: !0,
            className: D.Areas,
            cssProperty: "--grid-areas",
          },
          {
            prop: "flow",
            responsive: !0,
            className: D.Flow,
            cssProperty: "--grid-flow",
          },
          {
            prop: "alignContent",
            responsive: !0,
            className: D.AlignContent,
            cssProperty: "--grid-align-content",
          },
          {
            prop: "justifyContent",
            responsive: !0,
            className: D.JustifyContent,
            cssProperty: "--grid-justify-content",
          },
          {
            prop: "alignItems",
            responsive: !0,
            className: D.AlignItems,
            cssProperty: "--grid-align-items",
          },
          {
            prop: "justifyItems",
            responsive: !0,
            className: D.JustifyItems,
            cssProperty: "--grid-justify-items",
          },
          {
            prop: "gap",
            responsive: !0,
            className: D.Gap,
            cssProperty: (Se) => ["--grid-gap", `var(--spacing-${Se})`],
          },
          {
            prop: "gapX",
            responsive: !0,
            className: D.Gap,
            cssProperty: (Se) => ["--grid-gap-x", `var(--spacing-${Se})`],
          },
          {
            prop: "gapY",
            responsive: !0,
            className: D.Gap,
            cssProperty: (Se) => ["--grid-gap-y", `var(--spacing-${Se})`],
          },
        ];
      },
      57152: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { D: () => Ie });
        var e = i(7850),
          p = i(39049),
          a = i(8928),
          fe = i(15252),
          B = i(69289),
          Z = i(90626);
        function D(ne) {
          const { depth: pe } = useContext(R);
          return jsx(R.Provider, {
            value: { depth: pe + 1 },
            children: jsx(Box, { ...ne }),
          });
        }
        const R = Z.createContext({ depth: 0 });
        function re() {
          return (0, Z.useContext)(R).depth;
        }
        var oe = i(3877),
          K = i(64238),
          Se = i.n(K);
        function Ie(ne) {
          const { level: pe = "auto", className: I, color: ae } = ne,
            S = re(),
            P = Ye(pe, S);
          return (0, e.jsx)(P, {
            ...(0, B.mz)(
              { ...ne, className: Se()((0, oe.T)(), p.Heading, I) },
              Re,
            ),
          });
        }
        const Re = [
          ...fe.U6,
          ...a.L,
          {
            prop: "size",
            responsive: !0,
            className: (ne) => p[`HeadingSize-${ne}`],
          },
        ];
        function Ye(ne, pe) {
          if (ne === "auto" && pe === 0) return "h1";
          const I = ne === "auto" ? pe.toString() : ne;
          return /^[1-6]$/.test(I)
            ? "h" + I
            : ne === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${I}".`,
                ),
                "h1");
        }
      },
      74685: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { KF: () => k, Ot: () => P, c$: () => v, Hd: () => z });
        var e = i(7850),
          p = i(12362),
          a = i(15024),
          fe = i(7502),
          B = i(52893),
          Z = i(90626),
          D = i(98724),
          R = i(79216),
          re = i(4188),
          oe = i(74827);
        function K(G) {
          const { nodes: O, marks: L } = G,
            Ee = (0, p.st)(
              p.I$,
              (N, F) => (
                F &&
                  F(
                    N.tr
                      .replaceSelectionWith(O.hard_break.createChecked())
                      .scrollIntoView(),
                  ),
                !0
              ),
            ),
            T = {
              "Mod-z": D.tN,
              "Mod-y": D.ZS,
              "Shift-Mod-z": D.ZS,
              Backspace: R.dv,
              Escape: p.hy,
              "Mod-Enter": Ee,
              "Shift-Enter": Ee,
              "Mod-b": (0, p.wh)(L.strong),
              "Mod-i": (0, p.wh)(L.italic),
              "Mod-u": (0, p.wh)(L.underline),
              "Mod-Shift-x": (0, p.wh)(L.strike),
              "Ctrl-Shift-s": (0, p.wh)(L.strike),
              Enter: (0, re.wn)(O.list_item),
              "Mod-[": (0, re.T2)(O.list_item),
              "Mod-]": (0, re.$B)(O.list_item),
              "Ctrl-Shift-1": (0, p.y_)(O.heading, { level: 1 }),
              "Ctrl-Shift-2": (0, p.y_)(O.heading, { level: 2 }),
              "Ctrl-Shift-3": (0, p.y_)(O.heading, { level: 3 }),
              "Ctrl-Shift-4": (0, p.y_)(O.heading, { level: 4 }),
              "Ctrl-Shift-5": (0, p.y_)(O.heading, { level: 5 }),
              "Ctrl-Shift-7": (0, p.y_)(O.ordered_list),
              "Ctrl-Shift-8": (0, p.y_)(O.bullet_list),
              "Ctrl-Shift-0": (0, p.y_)(O.paragraph),
            };
          return (
            L.code && (T["Ctrl-Shift-c"] = (0, p.wh)(L.code)),
            O.code_block && (T["Alt-Ctrl-Shift-c"] = (0, p.y_)(O.code_block)),
            O.horizontal_rule &&
              (T["Mod-_"] = (N, F) => (
                F &&
                  F(
                    N.tr
                      .replaceSelectionWith(O.horizontal_rule.create())
                      .scrollIntoView(),
                  ),
                !0
              )),
            (0, fe.w)(T)
          );
        }
        function Se(G, O) {
          return new R.fV(G, (L, Ee, T, N) =>
            L.tr.replaceWith(T, N, O.create()),
          );
        }
        function Ie(G) {
          const { nodes: O, marks: L } = G;
          return (0, R.sM)({
            rules: [
              (0, R.tG)(
                /^(\d+)\.\s$/,
                O.ordered_list,
                (Ee) => ({ order: parseInt(Ee[1]) }),
                (Ee, T) => T.childCount + T.attrs.order == parseInt(Ee[1]),
              ),
              (0, R.tG)(/^\s*([-+*])\s$/, O.bullet_list),
              (0, oe.OX)(/(?<!\w)\*([^*]+)\*/, L.strong),
              (0, oe.OX)(/(?<!\w)_([^_]+)_/, L.italic),
              (0, oe.OX)(/(?<!\w)~([^~]+)~/, L.strike),
              (0, oe.OX)(/(?<!\w)`([^`]+)`/, L.code),
              (0, R.JJ)(/^```$/, O.code_block),
              (0, R.JJ)(/^(#{1,5})\s$/, O.heading, (Ee) => ({
                level: Ee[1].length,
              })),
              O.horizontal_rule && Se(/^(\*\*\*|---|___)$/, O.horizontal_rule),
            ].filter(Boolean),
          });
        }
        var Re = i(45772),
          Ye = i(74763);
        const ne = new B.k_({
            props: {
              handlePaste(G, O, L) {
                const Ee = O.clipboardData
                  ?.getData("text/plain")
                  .replace(/\n/g, " ");
                if (Ee) {
                  const T = G.state.tr.insertText(Ee);
                  G.dispatch(T);
                }
                return !0;
              },
            },
          }),
          pe = {
            Enter: () => !0,
            "Shift-Enter": () => !0,
            "Mod-Enter": () => !0,
          };
        function I(G) {
          return new Plugin({
            filterTransaction(O, L) {
              return O.doc.textContent.length <= G;
            },
          });
        }
        function ae(G) {
          const { nMaxChars: O } = G;
          return (
            useInstallPlugin(useMemo(() => I(O), [O])), jsx(React.Fragment, {})
          );
        }
        const S = Z.createContext(void 0);
        function P(G) {
          const { view: O, pmState: L, children: Ee } = G,
            T = Z.useMemo(() => ({ view: O, pmState: L }), [O, L]);
          return (0, e.jsx)(S.Provider, { value: T, children: Ee });
        }
        const k = Z.memo(function (O) {
          const { schema: L, refOnUpdate: Ee, bSingleLine: T } = O;
          return (
            v(
              Z.useMemo(
                () =>
                  Ee &&
                  new B.k_({
                    view: (N) => ({
                      update: (...F) => Ee.current && Ee.current(...F),
                    }),
                  }),
                [Ee],
              ),
            ),
            v(Z.useMemo(() => (0, fe.w)(T ? pe : {}), [T])),
            v(T ? ne : void 0),
            v(Z.useMemo(() => (0, a.z)(), [])),
            v(Z.useMemo(() => K(L), [L])),
            v(Z.useMemo(() => (0, fe.w)(p.RV), [])),
            v(Z.useMemo(() => Ie(L), [L])),
            null
          );
        });
        function v(G) {
          const { pmState: O } = Z.useContext(S);
          Z.useEffect(() => {
            if (!(!O || !G)) return O.InstallPlugin(G);
          }, [G, O]);
        }
        function z() {
          return Z.useContext(S)?.view;
        }
      },
      74827: (te, Ge, i) => {
        "use strict";
        i.d(Ge, {
          Cd: () => B,
          Ce: () => re,
          OX: () => Re,
          bQ: () => Ye,
          c4: () => Ie,
          gj: () => R,
          vn: () => Z,
          wt: () => K,
        });
        var e = i(79216),
          p = i(52893);
        function a(ne, pe) {
          const I = ne.state;
          if (!ne.state.plugins.includes(pe)) {
            const ae = [...ne.state.plugins, pe];
            ne.updateState(I.reconfigure({ plugins: ae }));
          }
        }
        function fe(ne, pe) {
          if (!ne.isDestroyed) {
            const I = ne.state,
              ae = I.plugins.filter((S) => S !== pe);
            ne.updateState(I.reconfigure({ plugins: ae }));
          }
        }
        function B(ne, pe) {
          const { from: I, $from: ae, to: S, empty: P } = ne.selection;
          return P
            ? !!pe.isInSet(ne.storedMarks || ae.marks())
            : ne.doc.rangeHasMark(I, S, pe);
        }
        function Z(ne, pe, I) {
          const { parent: ae } = I,
            S = ae.childAfter(I.parentOffset),
            P = S.node?.marks.find((L) => L.type == pe);
          if (!P) return;
          let k = I.index() - 1,
            v = I.start() + S.offset;
          for (; k >= 0 && P.isInSet(ae.child(k).marks); )
            (v -= ae.child(k).nodeSize), (k -= 1);
          let z = I.index() + 1,
            G = I.start() + S.offset + S.node.nodeSize;
          for (; z < ae.childCount && P.isInSet(ae.child(z).marks); )
            (G += ae.child(z).nodeSize), (z += 1);
          const O = ne.doc.slice(v, G);
          return { from: v, to: G, slice: O, mark: P };
        }
        function D(ne, pe, I) {
          if (ne.type !== pe) return !1;
          if (I === void 0) return !0;
          for (const ae in I) if (I[ae] !== ne.attrs[ae]) return !1;
          return !0;
        }
        function R(ne, pe, I) {
          let { $from: ae, to: S } = ne.selection;
          for (let P = ae.depth; P > 0; P--) {
            if (S > ae.end(P)) return !1;
            const k = ae.node(P);
            if (D(k, pe, I)) return !0;
          }
          return !1;
        }
        function re(ne, pe, I) {
          for (let ae of pe) if (R(ne, ae, I)) return ae;
          return null;
        }
        function oe(ne, pe, I) {
          const { $from: ae, to: S } = ne.selection;
          for (let P = ae.sharedDepth(S); P > 0; P--) {
            const k = ae.node(P);
            if (k.type === pe) return !!k.attrs[I];
          }
          return !1;
        }
        function K(ne, pe, I) {
          const { $from: ae, to: S } = ne.selection;
          for (let P = ae.sharedDepth(S); P > 0; P--) {
            const k = ae.node(P);
            if (I === void 0 ? k.type === pe : k.hasMarkup(pe, I))
              return ae.before(P);
          }
        }
        function Se(ne, pe) {
          return (I, ae) => {
            const S = K(I, ne);
            if (S === void 0) return !1;
            if (ae) {
              const P = I.doc.nodeAt(S);
              if ((console.assert(!!P), !P)) return !1;
              ae(I.tr.setNodeMarkup(S, ne, { ...P.attrs, [pe]: !P.attrs[pe] }));
            }
            return !0;
          };
        }
        function Ie(ne, pe) {
          return (I, ae) => {
            const { $from: S } = I.selection;
            let P = null,
              k = 0;
            for (let v = S.depth; v > 0; v--) {
              const z = S.node(v);
              if (ne.includes(z.type)) {
                (P = z), (k = S.before(v));
                break;
              }
            }
            return P
              ? (ae && ae(I.tr.setNodeMarkup(k, P.type, { ...P.attrs, ...pe })),
                !0)
              : !1;
          };
        }
        function Re(ne, pe, I = {}) {
          return new e.fV(ne, (ae, S, P, k) => {
            const v = I instanceof Function ? I(S) : I,
              z = ae.tr;
            if (S[1]) {
              const G = P + S[0].indexOf(S[1]),
                O = G + S[1].length;
              O < k && z.delete(O, k),
                G > P && z.delete(P, G),
                (k = P + S[1].length);
            }
            return z.addMark(P, k, pe.create(v)), z.removeStoredMark(pe), z;
          });
        }
        function Ye(ne, pe, I) {
          const ae = { left: pe, top: I },
            S = ne.posAtCoords(ae);
          if (S?.pos) {
            const P = ne.state.doc.resolve(S.pos);
            ne.dispatch(ne.state.tr.setSelection(p.U3.near(P)));
          }
        }
      },
      47604: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { s: () => re });
        var e = i(7850),
          p = i(19298),
          a = i(64238),
          fe = i.n(a),
          B = i(36118),
          Z = i(76962),
          D = i(83217),
          R = i.n(D);
        function re(oe) {
          const {
            onClose: K,
            className: Se,
            navID: Ie,
            children: Re,
            strTitle: Ye,
            wideMode: ne,
            ...pe
          } = oe;
          return (0, e.jsx)(Z.y, {
            onClose: K,
            navID: Ie ?? "SimpleModalDialog",
            ...pe,
            children: (0, e.jsxs)("div", {
              className: fe()(Se, R().SimpleModalDialog, ne && R().WideMode),
              children: [
                " ",
                (0, e.jsxs)(p.Z, {
                  className: R().SimpleModalDialogHeader,
                  children: [
                    Ye &&
                      (0, e.jsx)("div", {
                        className: R().SimpleModalDialogTitle,
                        children: Ye,
                      }),
                    (0, e.jsx)("button", {
                      onClick: (I) => (K("xclick"), I.preventDefault(), !1),
                      className: R().XButton,
                      children: (0, e.jsx)(B.tmm, {}),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: R().SimpleModalContentCtn,
                  children: Re,
                }),
              ],
            }),
          });
        }
      },
      63854: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { a: () => Z, z: () => B });
        var e = i(77008),
          p = i(60298),
          a = i(98609),
          fe = i(67705);
        class B {
          m_steamInterface;
          GetPromotionTransport() {
            return this.m_steamInterface;
          }
          static s_Singleton;
          static Get() {
            return (
              B.s_Singleton ||
                ((B.s_Singleton = new B()), B.s_Singleton.Init()),
              B.s_Singleton
            );
          }
          Init() {
            const R = (0, fe.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            this.m_steamInterface = (0, p.p)(new e.D(a.TS.WEBAPI_BASE_URL, R));
          }
        }
        function Z() {
          return B.Get().GetPromotionTransport().GetServiceTransport();
        }
      },
      54407: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { B3: () => k, CF: () => v, KM: () => pe, KT: () => P });
        var e = i(41735),
          p = i.n(e),
          a = i(58632),
          fe = i.n(a),
          B = i(90626),
          Z = i(20194),
          D = i(75233),
          R = i(72604),
          re = i(76559),
          oe = i(34592),
          K = i(3166),
          Se = i(35038),
          Ie = i(27386),
          Re = i(68312),
          Ye = i(40497);
        const ne = "nicknames";
        function pe(z) {
          const G = (0, Re.KV)(),
            { data: O, isLoading: L } = (0, Z.I)({
              queryKey: [ne],
              queryFn: async () => {
                const Ee = new Map();
                if (K.iA.logged_in) {
                  const T = Se.w.Init(Ie.w_T),
                    F = (await Ie.xtC.GetNicknameList(G, T)).Body().toObject();
                  F?.nicknames &&
                    F.nicknames.length > 0 &&
                    F.nicknames.forEach((Q) => {
                      Q.accountid &&
                        Q.nickname &&
                        Ee.set(Q.accountid, Q.nickname);
                    });
                }
                return Ee;
              },
            });
          return O ? O.get(z) : null;
        }
        async function I(z) {
          if (!z || z.length == 0) return [];
          const G =
            (0, K.yK)() == "community"
              ? K.TS.COMMUNITY_BASE_URL
              : K.TS.STORE_BASE_URL;
          if (z.length == 1) {
            const O = { accountid: z[0], origin: self.origin },
              L = await p().get(`${G}actions/ajaxgetavatarpersona`, {
                params: O,
              });
            if (
              !L ||
              L.status != 200 ||
              L.data?.success != R.R ||
              !L.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, oe.H))(L).strErrorMsg}`;
            return [L.data.userinfo];
          } else {
            const O = { accountids: z.join(","), origin: self.origin },
              L = await p().get(`${G}actions/ajaxgetmultiavatarpersona`, {
                params: O,
              });
            if (
              !L ||
              L.status != 200 ||
              L.data?.success != R.R ||
              !L.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, oe.H))(L).strErrorMsg}`;
            const Ee = new Map();
            return (
              L.data.userinfos.forEach((T) =>
                Ee.set(new re.b(T.steamid).GetAccountID(), T),
              ),
              z.map((T) => Ee.get(T))
            );
          }
        }
        const ae = new (fe())((z) => I(z), { cache: !1 }),
          S = "avatarandpersonas";
        function P(z) {
          const { data: G, isLoading: O } = (0, Z.I)({
            queryKey: [S, z],
            queryFn: () => ae.load(z),
          });
          return [G, O];
        }
        function k(z) {
          const G = (0, D.jE)(),
            { data: O, isLoading: L } = (0, Z.I)({
              queryKey: [S, z],
              queryFn: async () => {
                const T = await ae.loadMany(z);
                return (
                  T.forEach((N) => {
                    if (N instanceof Error) return;
                    const F = [S, new re.b(N.steamid).GetAccountID()];
                    G.setQueryData(F, N);
                  }),
                  T
                );
              },
              enabled: z?.length > 0,
            }),
            Ee = (0, B.useMemo)(() => {
              const T = new Array();
              return (
                O?.forEach((N) => {
                  N instanceof Error || T.push(N);
                }),
                T
              );
            }, [O]);
          return L ? null : Ee;
        }
        function v(z) {
          return Ye.L.getQueryData([S, z]);
        }
      },
      24806: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { Ng: () => I, iN: () => ae, yk: () => S });
        var e = i(7850),
          p = i(75844),
          a = i(65946),
          fe = i(90626),
          B = i(99412),
          Z = i(32093),
          D = i(50109),
          R = i(95695),
          re = i.n(R),
          oe = i(36707),
          K = i(18210),
          Se = i(92264),
          Ie = i(54963),
          Re = i(71421),
          Ye = Object.defineProperty,
          ne = Object.getOwnPropertyDescriptor,
          pe = (P, k, v, z) => {
            for (
              var G = z > 1 ? void 0 : z ? ne(k, v) : k, O = P.length - 1, L;
              O >= 0;
              O--
            )
              (L = P[O]) && (G = (z ? L(k, v, G) : L(G)) || G);
            return z && G && Ye(k, v, G), G;
          };
        let I = class extends fe.Component {
          GenerateLanguageOptions() {
            let P = [];
            const {
              fnFilterLanguage: k,
              fnLangHasData: v,
              fnLastUpdateRTime: z,
              fnIsLangSupported: G,
            } = this.props;
            this.props.bAllowUnsetOption &&
              P.push(
                (0, e.jsx)(
                  "option",
                  {
                    value: B.xPp,
                    children: (0, K.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let O = new Array();
            const L = this.props.realms || [Z.TU.k_ESteamRealmGlobal];
            for (const T of K.A0.GetLanguageListForRealms(L)) {
              if (k && !k(T)) continue;
              const N = (0, B.LgB)(T),
                F = (0, K.we)("#Language_" + N),
                Q = !!(G && G(T));
              O.push({ eLang: T, sLocName: F, bSupported: Q });
            }
            O.sort((T, N) =>
              T.bSupported != N.bSupported
                ? T.bSupported
                  ? -1
                  : 1
                : T.sLocName.localeCompare(N.sLocName),
            );
            let Ee = !1;
            for (const T of O) {
              T.bSupported != Ee &&
                (P.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: re().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, K.we)(
                        T.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    T.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (Ee = T.bSupported));
              const N = v && v(T.eLang),
                F = z && z(T.eLang);
              let Q = T.sLocName;
              F &&
                F !== 0 &&
                ((Q += " "),
                (Q += (0, K.we)(
                  "#Language_Last_Update",
                  (0, K.$z)(F) +
                    " @ " +
                    (0, Se.KC)(F, { bForce24HourClock: !1 }),
                ))),
                P.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: T.eLang,
                      className: (0, oe.A)(
                        { [re().LanguageWithContent]: N },
                        T.bSupported
                          ? re().SupportedLanguage
                          : re().UnsupportedLanguage,
                      ),
                      children: Q,
                    },
                    "langpicker" + T.eLang + (N ? "_hasdata" : ""),
                  ),
                );
            }
            return P;
          }
          OnLanguageChange(P) {
            const { fnOnLanguageChanged: k, selectedLang: v } = this.props;
            let z = Number.parseInt(P.currentTarget.value);
            z != v && k && k(z);
          }
          render() {
            const { selectedLang: P, bDisabled: k, strTooltip: v } = this.props;
            let z = this.GenerateLanguageOptions();
            return (0, e.jsx)(Re.he, {
              toolTipContent: v,
              children: (0, e.jsx)("select", {
                value: P,
                onChange: this.OnLanguageChange,
                disabled: k,
                children: z,
              }),
            });
          }
        };
        pe([Ie.oI], I.prototype, "OnLanguageChange", 1), (I = pe([p.PA], I));
        function ae(P) {
          const [k, v] = (0, a.q3)(() => [
            D.O.Get().GetHasLocalizationContext(),
            D.O.Get().GetCurEditLanguage(),
          ]);
          return (0, e.jsx)(I, {
            selectedLang: v,
            fnLangHasData: D.O.Get().BHasLanguageData,
            fnOnLanguageChanged: D.O.Get().SetCurEditLanguage,
            bDisabled: !k,
            strTooltip: k
              ? void 0
              : (0, K.we)("#Localization_EditorNotInFocus"),
          });
        }
        function S(P) {
          const { fnLangHasData: k } = P;
          fe.useEffect(
            () => (
              D.O.Get().SetHasLocalizationContext(!0),
              () => D.O.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const v = (0, a.q3)(() => {
            const z = [];
            for (let G = B.Bhc; G < B.bP9; ++G) z[G] = !!(k && k(G));
            return z;
          });
          return (
            fe.useEffect(() => D.O.Get().SetHasLanguage(v), [v]),
            (0, e.jsx)(e.Fragment, {})
          );
        }
      },
      83085: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { Xv: () => I, pw: () => ae, Y0: () => S });
        var e = i(7850),
          p = i(71742),
          a = i(74432),
          fe = i(74685),
          B = i(52893),
          Z = i(29287),
          D = i(90626);
        function R(N, F = "PlaceholderPlugin") {
          const [Q, b] = D.useState([]),
            [A] = D.useState(
              () =>
                new B.k_({
                  key: new B.hs(F),
                  state: {
                    init() {
                      return Z.zF.empty;
                    },
                    apply(ve, Le) {
                      Le = Le.map(ve.mapping, ve.doc);
                      const H = ve.getMeta(this) || [];
                      for (const ie of H)
                        if (ie?.add) {
                          const { id: _e, data: de } = ie.add,
                            Ce = (ge, Ue) => {
                              const ze = document.createElement(N);
                              return (
                                b((Te) => [
                                  ...Te,
                                  { id: _e, element: ze, data: de },
                                ]),
                                ze
                              );
                            },
                            le = (ge) => {
                              b((Ue) => Ue.filter((ze) => ze.element != ge));
                            },
                            De = Z.NZ.widget(ie.add.pos, Ce, {
                              id: _e,
                              destroy: le,
                            });
                          Le = Le.add(ve.doc, [De]);
                        } else
                          ie?.remove &&
                            (Le = Le.remove(
                              Le.find(
                                void 0,
                                void 0,
                                (_e) => _e.id == ie.remove.id,
                              ),
                            ));
                      return Le;
                    },
                  },
                  props: {
                    decorations(ve) {
                      return this.getState(ve);
                    },
                  },
                }),
            );
          (0, fe.c$)(A);
          const w = (0, fe.Hd)(),
            U = D.useRef(0),
            J = D.useCallback(
              (ve, Le, H) => {
                const ie = `${F}_${U.current++}`;
                let _e = H || w.state.tr;
                Le === void 0 &&
                  (_e.selection.empty || _e.deleteSelection(),
                  (Le = _e.selection.from));
                const de = H?.getMeta(A) || [];
                return (
                  _e.setMeta(A, [
                    ...de,
                    { add: { id: ie, pos: Le, data: ve } },
                  ]),
                  H || w.dispatch(_e),
                  ie
                );
              },
              [A, F, w],
            ),
            ce = D.useCallback(
              (ve) => {
                const H = A.getState(w.state)?.find(
                  void 0,
                  void 0,
                  (ie) => ie.id == ve,
                );
                return H?.length ? H[0].from : void 0;
              },
              [w, A],
            ),
            Pe = D.useCallback(
              (ve, Le) => {
                const H = ce(ve);
                return H
                  ? (Le
                      ? w.dispatch(
                          w.state.tr
                            .replaceWith(H, H, Le)
                            .setMeta(A, [{ remove: { id: ve } }]),
                        )
                      : w.dispatch(
                          w.state.tr.setMeta(A, [{ remove: { id: ve } }]),
                        ),
                    !0)
                  : !1;
              },
              [A, ce, w],
            );
          return {
            placeholderElements: Q,
            createPlaceholder: J,
            findPlaceholder: ce,
            replacePlaceholder: Pe,
          };
        }
        var re = i(72739),
          oe = i(1880),
          K = i(69168),
          Se = i(85599),
          Ie = i(8323),
          Re = i(18210),
          Ye = i(95603),
          ne = i(64868),
          pe = i(73309);
        function I(N) {
          const {
              children: F,
              ProcessFileUpload: Q,
              FetchImageURL: b,
              bAllowImageHotLinking: A = !1,
            } = N,
            [w] = D.useState(() => ({ manager: new v(Q, b, A) })),
            { manager: U } = w;
          return (
            U.SetProps(Q, b, A),
            (0, e.jsxs)(G.Provider, {
              value: w,
              children: [
                (0, e.jsx)(L, { manager: U }),
                (0, e.jsx)(Ee, { manager: U, children: F }),
              ],
            })
          );
        }
        const ae = D.memo(function (F) {
          const { nodeType: Q } = F,
            b = O(),
            {
              placeholderElements: A,
              createPlaceholder: w,
              replacePlaceholder: U,
            } = R("span", "FileUploadPlaceholder");
          T(b, Q);
          const J = (0, fe.Hd)();
          return (
            D.useEffect(() => b.RegisterEditor(J, w, U), [b, J, w, U]),
            (0, e.jsx)(e.Fragment, {
              children: A.map(({ id: ce, element: Pe, data: ve }) =>
                (0, e.jsx)(k, { element: Pe, data: ve }, ce),
              ),
            })
          );
        });
        function S(N, F) {
          const Q = O(),
            b = D.useCallback(
              (A) => {
                for (const w of A) Q.UploadFile(w);
                N && N();
              },
              [Q, N],
            );
          return (0, Ye.Ss)(b, { multiple: !0, accept: F });
        }
        class P extends Error {
          constructor(F) {
            super(F);
          }
        }
        function k(N) {
          const { element: F, data: Q } = N,
            b = "file" in Q ? Q.file : void 0,
            A = D.useMemo(() => b && URL.createObjectURL(b), [b]),
            w = "url" in Q ? Q.url : A,
            U = b?.type.startsWith("video/");
          return re.createPortal(
            (0, e.jsxs)("span", {
              className: pe.FileUploadPlaceholder,
              children: [
                (0, e.jsx)("div", {
                  className: pe.ThrobberCtn,
                  children: (0, e.jsxs)("div", {
                    className: pe.ThrobberRow,
                    children: [
                      (0, e.jsx)("div", {
                        className: pe.Throbber,
                        children: (0, e.jsx)(Se.t, {
                          size: "medium",
                          position: "center",
                        }),
                      }),
                      (0, Re.we)("#Prosemirror_FileUpload_Uploading"),
                    ],
                  }),
                }),
                !U && (0, e.jsx)("img", { src: w, className: pe.PendingImage }),
                U &&
                  (0, e.jsx)("video", {
                    src: w,
                    className: pe.PendingImage,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    autoPlay: !0,
                  }),
              ],
            }),
            F,
          );
        }
        class v {
          m_fnProcessFileUpload;
          m_fnFetchImageURL;
          m_bAllowImageHotLinking;
          m_errors = (0, Ie.Jc)([]);
          m_view;
          m_fnCreatePlaceholder;
          m_fnReplacePlaceholder;
          constructor(F, Q, b) {
            (this.m_fnProcessFileUpload = F),
              (this.m_fnFetchImageURL = Q),
              (this.m_bAllowImageHotLinking = b);
          }
          SetProps(F, Q, b) {
            (this.m_fnProcessFileUpload = F),
              (this.m_fnFetchImageURL = Q),
              (this.m_bAllowImageHotLinking = b),
              (0, p.wT)(
                !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
                "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
              );
          }
          RegisterEditor(F, Q, b) {
            return (
              (0, p.wT)(!this.m_view, "Duplicate registration"),
              (this.m_view = F),
              (this.m_fnCreatePlaceholder = Q),
              (this.m_fnReplacePlaceholder = b),
              () => {
                this.m_view == F &&
                  this.m_fnCreatePlaceholder == Q &&
                  this.m_fnReplacePlaceholder == b &&
                  ((this.m_view = void 0),
                  (this.m_fnCreatePlaceholder = void 0),
                  (this.m_fnReplacePlaceholder = void 0));
              }
            );
          }
          AddError(F) {
            this.m_errors.Set([...this.m_errors.Value, F]);
          }
          GetErrors() {
            return this.m_errors;
          }
          ClearErrors() {
            this.m_errors.Set([]);
          }
          GetViewPosition(F, Q) {
            return this.m_view?.posAtCoords({ left: F, top: Q })?.pos;
          }
          async UploadFile(F, Q) {
            (!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
              this.AddError(
                "Upload File: No editor registered to handle file upload",
              );
            const b = this.m_fnCreatePlaceholder({ file: F }, Q);
            return this.ProcessFile(F, b);
          }
          BAllowImageHotLinking() {
            return this.m_bAllowImageHotLinking;
          }
          QueueUploadFileByURL(F, Q, b) {
            if (
              ((!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
                this.AddError(
                  "QueueUploadFile: No editor registered to handle file upload",
                ),
              console.log(`QueueUploadFileByURL: ${F} at pos ${Q}`),
              F.startsWith("data:"))
            ) {
              const A = this.m_fnCreatePlaceholder({ url: F }, Q, b);
              return this.ProcessDataURL(F, A), !0;
            } else if (this.m_fnFetchImageURL) {
              const A = this.m_fnCreatePlaceholder({ url: F }, Q, b);
              return this.FetchURLAndProcess(F, A), !0;
            } else
              return (
                (0, p.wT)(
                  this.m_bAllowImageHotLinking,
                  "A URL was posted but we don't have a fnFetchImageURL to process it",
                ),
                !1
              );
          }
          async ProcessDataURL(F, Q) {
            const [b, A] = F.split(","),
              w = b.match(/^data:(?<mimetype>[^;]*);(?<encoding>.*)$/);
            if (!w || w.groups.encoding != "base64") {
              this.AddError(`Unable to data URL, unexpected format: ${b}`);
              return;
            }
            const U = w?.groups.mimetype,
              J = z(U);
            if (!J) {
              this.AddError(`Unsupported MIME type for image: ${U}`);
              return;
            }
            const ce = atob(A),
              Pe = new Uint8Array(ce.length);
            for (let H = 0; H < ce.length; H++) Pe[H] = ce.charCodeAt(H);
            const ve = await a.C(Pe.buffer),
              Le = new File([Pe], `upload_${ve}.${J}`, { type: U });
            await this.ProcessFile(Le, Q);
          }
          async FetchURLAndProcess(F, Q) {
            try {
              const b = new URL(F),
                A = await this.m_fnFetchImageURL(F),
                w = new File(
                  [A],
                  decodeURIComponent(
                    b.pathname?.replace(/^.*\//, "") || "image",
                  ),
                  { type: A.type },
                );
              await this.ProcessFile(w, Q);
            } catch {
              this.AddError(`Unable to process URL: ${F}`),
                this.m_fnReplacePlaceholder(Q);
            }
          }
          async ProcessFile(F, Q) {
            let b;
            try {
              console.log(`Processing file upload: "${F.name}"`),
                (b = await this.m_fnProcessFileUpload(F));
            } catch (A) {
              A instanceof P
                ? this.AddError(A.message)
                : this.AddError(`Error proccessing file upload: ${A}`);
            }
            b
              ? this.m_fnReplacePlaceholder(Q, b)
              : this.m_fnReplacePlaceholder(Q);
          }
        }
        function z(N) {
          switch (N) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            case "image/webp":
              return "webp";
            case "video/mp4":
              return "mp4";
            case "video/webm":
              return "webm";
            default:
              return;
          }
        }
        const G = D.createContext(void 0);
        function O() {
          return D.useContext(G).manager;
        }
        const L = D.memo(function (F) {
          const { manager: Q } = F,
            b = (0, ne.gc)(Q.GetErrors());
          return b.length
            ? (0, e.jsx)(K.E, {
                active: !0,
                children: (0, e.jsx)(oe.o0, {
                  bAlertDialog: !0,
                  strTitle: (0, Re.we)("#Error_Generic"),
                  strDescription: b.map((A, w) =>
                    (0, e.jsx)("div", { children: A }, w),
                  ),
                  strOKButtonText: (0, Re.we)("#Button_OK"),
                  onOK: () => Q.ClearErrors(),
                  onCancel: () => Q.ClearErrors(),
                }),
              })
            : null;
        });
        function Ee(N) {
          const { manager: F, children: Q } = N,
            b = D.useCallback(
              (U, J) => {
                for (const ce of U)
                  F.UploadFile(ce, F.GetViewPosition(J.clientX, J.clientY));
              },
              [F],
            ),
            [A, w] = (0, Ye.hk)(b);
          return D.cloneElement(Q, { ...A, ...Q.props });
        }
        function T(N, F) {
          (0, fe.c$)(
            D.useMemo(
              () =>
                new B.k_({
                  props: {
                    handlePaste(Q, b, A) {
                      const w = [];
                      if (
                        (A.content.descendants((U, J) => {
                          if (U.type == F) {
                            const ce = U.attrs.src;
                            (ce.startsWith("data:") ||
                              !N.BAllowImageHotLinking()) &&
                              w.push({ url: ce, pos: J });
                          }
                        }),
                        w.length)
                      ) {
                        let U = Q.state.tr;
                        U.selection.empty || U.deleteSelection();
                        let J = U.selection.from,
                          ce = 0;
                        for (const Pe of w) {
                          const ve = A.content.cut(ce, Pe.pos - 1);
                          U.insert(J, ve),
                            (J += ve.size),
                            N.QueueUploadFileByURL(Pe.url, J, U),
                            (ce = Pe.pos + 1);
                        }
                        return (
                          U.insert(J, A.content.cut(ce)),
                          U.scrollIntoView(),
                          Q.dispatch(U),
                          !0
                        );
                      }
                      return !1;
                    },
                    handleDOMEvents: {
                      paste(Q, b) {
                        if (b.clipboardData?.files?.length > 0) {
                          b.preventDefault();
                          for (const A of b.clipboardData.files)
                            N.UploadFile(A);
                          return !0;
                        }
                      },
                    },
                  },
                }),
              [F, N],
            ),
          );
        }
      },
      50660: (te, Ge, i) => {
        "use strict";
        i.d(Ge, {
          Ez: () => ae,
          GY: () => P,
          XQ: () => pe,
          bI: () => Ye,
          cQ: () => k,
          ff: () => v,
          hK: () => I,
          u3: () => S,
          wU: () => Re,
        });
        var e = i(7850),
          p = i(19298),
          a = i(74827),
          fe = i(12362),
          B = i(90626),
          Z = i(58534),
          D = i(71421),
          R = i(8323),
          re = i(36707),
          oe = i(54963),
          K = i(98609),
          Se = i(73309),
          Ie = i.n(Se);
        const Re = () => B.useContext(ne);
        function Ye(T) {
          const { view: N, refUpdateToolbar: F, children: Q } = T,
            b = B.useRef(void 0);
          b.current || (b.current = new R.lu());
          const A = b.current;
          B.useEffect(
            () => (
              (0, oe.cZ)(F, () => A.Dispatch(N)), () => (0, oe.cZ)(F, void 0)
            ),
            [A, N, F],
          );
          const w = B.useMemo(() => ({ callbacks: A, view: N }), [A, N]);
          return N ? (0, e.jsx)(ne.Provider, { value: w, children: Q }) : null;
        }
        const ne = B.createContext(void 0);
        function pe() {
          return (0, e.jsx)("div", { className: Se.Gap });
        }
        function I() {
          return (0, e.jsx)("div", { className: Se.Spacer });
        }
        function ae(T) {
          return (0, e.jsx)("div", {
            className: (0, re.A)(T.className, Se.ToolbarRowOverflowContainer),
            children: (0, e.jsx)(p.Z, {
              className: Se.ToolbarRow,
              "flow-children": "row",
              children: T.children,
            }),
          });
        }
        function S(T) {
          const { nodeType: N, attrs: F, children: Q, ...b } = T,
            { callbacks: A, view: w } = Re(),
            [U, J] = B.useState(() => (0, a.gj)(w.state, N, F)),
            ce = B.useCallback((ve) => J((0, a.gj)(ve.state, N, F)), [N, F]);
          (0, oe.hL)(A, ce);
          const Pe = B.useMemo(() => fe.y_(N, F), [F, N]);
          return (0, e.jsx)(k, { ...b, command: Pe, toggled: U, children: Q });
        }
        function P(T) {
          const { mark: N, children: F, ...Q } = T,
            { callbacks: b, view: A } = Re(),
            [w, U] = B.useState(() => (0, a.Cd)(A.state, N)),
            J = B.useCallback((Pe) => U((0, a.Cd)(Pe.state, N)), [N]);
          (0, oe.hL)(b, J);
          const ce = B.useMemo(() => fe.wh(N), [N]);
          return (0, e.jsx)(k, { ...Q, command: ce, toggled: w, children: F });
        }
        function k(T) {
          const { command: N, toggled: F, children: Q, ...b } = T,
            { view: A, callbacks: w } = Re(),
            [U, J] = B.useState(() => N(A.state));
          (0, oe.hL)(
            w,
            B.useCallback((Pe) => J(N(Pe.state)), [N]),
          ),
            B.useEffect(() => J(N(A.state)), [N, A]);
          const ce = !U && !F;
          return (0, e.jsx)(z, {
            ...b,
            children: (0, e.jsx)(Z.$n, {
              className: (0, re.A)(Se.CommandButton, F && Se.Toggled),
              onMouseDown: (Pe) => {
                Pe.preventDefault(), N(A.state, A.dispatch, A);
              },
              disabled: ce,
              focusable: !ce,
              children: Q,
            }),
          });
        }
        function v(T) {
          const {
            onClick: N,
            toggled: F,
            disabled: Q,
            children: b,
            className: A,
            ...w
          } = T;
          return (0, e.jsx)(z, {
            ...w,
            children: (0, e.jsx)(Z.$n, {
              className: (0, re.A)(Se.CommandButton, F && Se.Toggled, A),
              onMouseDown: (U) => {
                U.button === 0 && (U.preventDefault(), N(U));
              },
              disabled: Q === !0,
              children: b,
            }),
          });
        }
        function z(T) {
          const { tooltip: N, keyboardShortcut: F, children: Q } = T;
          if (!N) return Q;
          const b = F ? (0, e.jsx)(G, { tooltip: N, keyboardShortcut: F }) : N;
          return (0, e.jsx)(D.Gq, {
            toolTipContent: b,
            direction: "bottom",
            children: Q,
          });
        }
        function G(T) {
          const { tooltip: N, keyboardShortcut: F } = T;
          return (0, e.jsxs)("div", {
            className: Se.TooltipWithShortcut,
            children: [
              (0, e.jsx)("div", { children: N }),
              (0, e.jsx)("div", {
                children: (0, e.jsx)(O, { keyboardShortcut: F }),
              }),
            ],
          });
        }
        function O(T) {
          const { keyboardShortcut: N } = T,
            F = N.split("-"),
            Q = F.pop() ?? "";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              F.map((b, A) =>
                (0, e.jsxs)(
                  B.Fragment,
                  {
                    children: [
                      (0, e.jsx)(L, {
                        children: (0, e.jsx)(Ee, { modifier: b }),
                      }),
                      " + ",
                    ],
                  },
                  A,
                ),
              ),
              (0, e.jsx)(L, { children: Q.toUpperCase() }),
            ],
          });
        }
        function L(T) {
          return (0, e.jsx)("span", {
            className: Se.KeyCap,
            children: T.children,
          });
        }
        function Ee(T) {
          const { modifier: N } = T;
          switch (N) {
            case "Mod":
              return K.TS.PLATFORM == "macos" ? "\u2318" : "Ctrl";
            case "Shift":
              return K.TS.PLATFORM == "macos", "Shift";
            case "Ctrl":
              return K.TS.PLATFORM == "macos" ? "Control" : "Ctrl";
            case "Alt":
              return K.TS.PLATFORM == "macos" ? "Option" : "Alt";
          }
          return null;
        }
      },
      12932: (te, Ge, i) => {
        "use strict";
        i.d(Ge, { AQ: () => Re, pn: () => ne, qx: () => Ye });
        var e = i(7850),
          p = i(58534),
          a = i(18210),
          fe = i(36118),
          B = i(90626),
          Z = i(36707),
          D = i(95695),
          R = i.n(D),
          re = i(25792),
          oe = i(64734),
          K = i.n(oe),
          Se = i(65946),
          Ie = i(11243);
        function Re(pe) {
          const {
              title: I,
              tooltip: ae,
              getMinimized: S,
              toggleMinimized: P,
              className: k,
              children: v,
              elAdditionalButtons: z,
            } = pe,
            G = (0, Se.q3)(() => S());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, Z.A)(
                  k,
                  oe.SectionTitleHeader,
                  oe.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, Z.A)(
                      D.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [I, !!ae && (0, e.jsx)(Ie.o, { tooltip: ae })],
                  }),
                  (0, e.jsxs)("div", {
                    className: oe.SectionTitleButtons,
                    children: [
                      z,
                      (0, e.jsx)(ne, { bIsMinimized: G, fnToggleMinimize: P }),
                    ],
                  }),
                ],
              }),
              !G && (0, e.jsx)(re.tH, { children: v }),
            ],
          });
        }
        function Ye(pe) {
          const [I, ae] = B.useState(!!pe.bStartMinimized);
          return (0, e.jsx)(Re, {
            ...pe,
            getMinimized: () => I,
            toggleMinimized: () => ae(!I),
            children: pe.children,
          });
        }
        function ne(pe) {
          const { bIsMinimized: I, fnToggleMinimize: ae } = pe,
            S = I ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(p.$n, {
            "data-tooltip-text": (0, a.we)(S),
            onClick: ae,
            children: pe.bIsMinimized
              ? (0, e.jsx)(fe.hz4, {})
              : (0, e.jsx)(fe.Xjb, {}),
          });
        }
      },
      77127: (te) => {
        te.exports = {
          "duration-app-launch": "800ms",
          ProgressBar: "_2H35Exdt_TEmnht61LT9o",
          ProgressBarComplete: "ch7u6iAsb2ympJBJjGMoi",
          ProgressBarFillComponent: "_3i0WE7KIdK23MdG8F-EDns",
          WizardModal: "_16ywt-UaM5pXRZAZ59hFqb",
          GameName: "_11vp-bH8bgBrQCbqtuK439",
          WizardButtons: "_3dsdpW7Qfs3LWOkzgMJJhJ",
          WizardContainer: "_2wuBak_ecUSy1__ByQUkLA",
          WizardTitle: "_1_VaMIoHomh0nkSL5a0OfP",
          StepRow: "CggdGMWnkepTgIdPa8qF0",
          StepLabel: "_2zme0St18-D_jyf9u4x71k",
          RadioButton: "_11VhNInHVvEffMe2vf2Gg9",
          Selected: "QEXaA3fx7EU29BoZu31SA",
          OptionLabel: "_3QKLY00ZQqv8hxmvbGg8-6",
          CheckboxComplexLabel: "_15L6_SM-oLsYhwZf6E6Ii9",
          Question: "_17VRokV9gQrl4MOm03kxGV",
          Instructions: "_2N-j8qfNmHJEMMz1pXbdvC",
          WizardTooltip: "_2RXE_aA8kQtPJymKYYSMAl",
          BackgroundAnimation: "C8N8hRwMeVp1tGShuVkOh",
          "ItemFocusAnim-darkerGrey-nocolor": "_3OSHg17hDa1n_a1p8YV6NJ",
          "ItemFocusAnim-darkerGrey": "_3vw4cd5iGVZPXAkYQdwc1O",
          "ItemFocusAnim-darkGreySettings": "_35jKmGtukgtSVCv-o2sAWJ",
          "ItemFocusAnim-darkGrey": "_2p57_OuvuARn5uJAZrKT9D",
          "ItemFocusAnim-grey": "_1IsFUDfyU05AFfhOv9ZaFq",
          "ItemFocusAnim-translucent-white-10": "_1-27hJIgX5EtEpiO8ruDs1",
          "ItemFocusAnim-translucent-white-20": "Hy84D3TIRbj_PA180MPvA",
          "ItemFocusAnimBorder-darkGrey": "WijGZOjm_kfdR-fupsAlg",
          "ItemFocusAnim-green": "_16nOxlLQEWjquxC-Yr4mAY",
          focusAnimation: "_1IV9IFCrYGSzJ9sS2CXScW",
          hoverAnimation: "_1UU6b6HTIjjrWrTkpCewNw",
        };
      },
      70019: (te) => {
        te.exports = {
          AccessibilityFeatureDescription: "k6qQ5DLbV9P6dfFuuQpnR",
          AccessibilityFeatureInfoCtn: "Jwl4gCBBBKG2avQH1KE4f",
          GameEditCtn: "Jafw2l9EIfZgvxXAq7oSs",
          AccessibilityFeatureContent: "_2O3bOye9ePb-fkhbamPamK",
          EditButton: "_1aweU2y3d4e3510d3nNqjP",
          Spacer: "_2H1h4op2he4A9SRW-5xU9A",
          Top: "_3YANuSYfijJQ5Jq5-sUfaQ",
          Bottom: "_3U8po-ZE4D_KXUQ32LJT0c",
          EditButtonIcon: "_2t7TJZb12JsMs-PxroqLQ9",
          StartWizardButton: "_1VzLAfLRNEbppzyyYS8ueA",
          ButtonRow: "_1L2BTYNuiNzNkV3fxuFZ4A",
          PreviewContainer: "_1z9Dg4jsYlNummQKgczgWN",
          Updates: "cCbxuWUtmnc8zsLas0fCR",
          UpdateButtonContainer: "oQ2jrb8UigZeb9afK7uuf",
          NewBugContainer: "_2lvnBM3dEA_54CApZ1werw",
          New: "_2M8-7e6mSLUYg6EP9U-fr-",
          UpdatesWizardButton: "_2b8NFL_UzE4xC7a-M9SXbC",
        };
      },
      31623: (te) => {
        te.exports = {
          "duration-app-launch": "800ms",
          ControllerWizardModal: "_2M4zwA7Ac68En7AUUHEpuK",
          GameName: "_1wayRCM9VO944GbqtTisWi",
          WizardButtons: "ja88t0u0UmDMjZ2vKEXyg",
          WizardContainer: "_1j_e5epqt09WxhZOjyi9D1",
          WizardBody: "_2Agdmn90d9rLK0COHBJ9Ya",
          Column: "_35X7XjU8DZ2H27V0SBSAoo",
          ColumnLabel: "_3xAxLUcHgDWrN3L54mLJYv",
          ReleaseColumnFooter: "_3qIJUe57BhaB_-fSLUg9Hx",
          ColumnContent: "upSjacqUkxiBsrt6N42gC",
          BlueNote: "_3FlXrEk2woo6dOboR90dCn",
          PublishNowWarning: "GSVWx_w2LMo3SAhwSgY-n",
          ErrorBox: "_1h88U0C26maKtvTHQw0f4Z",
          HTMLErrorBoxAppear: "XREUsZ2A3RyF2E-vQKQwp",
          CloudConflictModalContent: "Qq753teqS-0zB67wi3MP5",
          DialogChoiceDescription: "_37mGYoLJCV-kP2sFOgvZhh",
          RadioButton: "_1Cqgv4c_2wNORC7k0gp6O0",
          Selected: "_1iGfirXEzQZDHkJVHJCe25",
          OptionLabel: "_1CKHmXyuOvgsgsfZWRwdkk",
          ProgressBar: "_2FcBzeH5LVz2CQQWk-coqU",
          ProgressBarComplete: "_231x-l7fB13puyRZJDW46L",
          ProgressBarFillComponent: "a63k2U08nK9HrNLtO-4xe",
          WizardTitle: "_3acfYDihepdLalPwwfH_1O",
          StepRow: "_4NsQgqhsg7-hwuKwFSkt1",
          StepLabel: "_3Q7KPqZcxMH4I4NbiI4ZLQ",
          StepImgContainer: "_27_A1alE6d3sduux3CAyY_",
          StepInstruction: "T9eBinyQ2hCY8oy4WO8g9",
          ControlsQuestion: "_86lVB7cXYqg7s4LChbRyM",
          BackgroundAnimation: "_25lkDWhF0bwre6OQT8g7w0",
          "ItemFocusAnim-darkerGrey-nocolor": "_2UZY54l1AJ5zxBJhmYf490",
          "ItemFocusAnim-darkerGrey": "hlnkWGoujK0WgKsCnBOcK",
          "ItemFocusAnim-darkGreySettings": "_3uPCzxcRrrgoi-gsTfxgRQ",
          "ItemFocusAnim-darkGrey": "_2u7cTUci-zR4zqevKlTsfz",
          "ItemFocusAnim-grey": "_3PcMUvLdjJe0fnIkVlDHNa",
          "ItemFocusAnim-translucent-white-10": "_1uSV29xzSfh0VWP4fBLSwy",
          "ItemFocusAnim-translucent-white-20": "_3513-n6v2aZcqIN2F_qPf_",
          "ItemFocusAnimBorder-darkGrey": "_13L0noPDezrKNjkT3uxNet",
          "ItemFocusAnim-green": "_2LoYY8XGA4qLFMRZw7KUHR",
          focusAnimation: "uwLjAG7MPbb5kNpkfltgX",
          hoverAnimation: "_25AiV9rkMnY1kH88BkJPaW",
        };
      },
      93763: (te) => {
        te.exports = {
          ReleaseDateInfoCtn: "_2ocuoWlOpeAh97xq7WrkIM",
          GameEditCtn: "_2o3d5bRhxhkhFeFhW8godg",
          ReleaseDateContent: "_14jgI2A7iky0kJHGTv5bRH",
          EditButton: "_1FeuJt2eGQs_Rst-XDLFm4",
          Spacer: "_1kzzU_wSbmdyI7oLSsyg-u",
          Top: "_3M26MlsJeORKy1BwxAXZum",
          Bottom: "_1qVhcuP_Q7ETKhqOIF-6nf",
          EditButtonIcon: "_1EzMvfRFX_4r0BoWZP0nDJ",
          LabelField: "_15-FOPma_SgLfRiaMDz00K",
          Label: "TlwzuMCaMLu_NamMk-aqI",
          BigField: "_1q70c9TQOGTE8nIj0PZzFs",
          Set: "_462we5kglLCfOmKOQ-yFJ",
          DescText: "_1DrWiEkEcbt3HstR0OiF2H",
          StatusText: "_3j0F2jA1hGH2uFa5CQJUU1",
          StartWizardButton: "_3aJmqkMNOKlgJpR8MjiixB",
          ControllerSupportLevelString: "_29_hhzfHe7mcOGymGIBMk8",
          InfoRow: "_2EuSdla3Jwg3xI_Dgo_qHu",
          LocSection: "glzO-PzgvCa6Skefap3ex",
          HighlightRow: "_1o45fKVcOJe0ZqBEGcY7iq",
          HighlightRowRed: "_1hL1r05CyflWZetU6qrC1c",
          LocString: "_29T_Phs4gpEQr5w3liXu9f",
          HighlightText: "_3r2CUk5i9BqNQMQQQUrr0D",
          ImgSection: "_2iy3BWZdA1i5GxeKdEXw5h",
          ImgContainer: "_3fVMxj4lcjRb2Ig3TUcYBP",
          PreviewContainer: "_1WiJc86Iy8Vg1PQk6AofW4",
        };
      },
      72611: (te) => {
        te.exports = {
          CreatorNameCtn: "_38XTY1uRQtSGN-NA3nbbGg",
          CreatorCtn: "_2Z2NpZBAp01VIPZcHEkMvW",
          HoverCtn: "-TMA8muDrEsq9vwMsGs8Z",
        };
      },
      19042: (te) => {
        te.exports = {
          CapsuleCtn: "c-RZpHTXb06OJeUNz4WEW",
          MissingCapsuleCtn: "_364X0fngRQGCfxG4VyRk_D",
          AppRowCtn: "_2VXPIaz6YEo5TPJqSn_yE5",
          PageSelect: "_12MnhNSqHX_n83jqCGQrF-",
          ManualFeatures: "_1WxdPIk2Wp9e2_EPCvDXs0",
          SortOptionsCtn: "_1sM7lJwWxP9zl748WJgn_8",
          CreatorHomeCtn: "d77JrwhwWgQ2752O6hs9q",
          FeatureSelectItemCtn: "_3gmDKxSYF9DEWwP-L7l_W6",
        };
      },
      63251: (te) => {
        te.exports = {
          DropDown: "_2bdfWkqeuk3tQIDuq_G7QG",
          Avatar: "-Fm68k4tG1jrT2Jfr0gbx",
        };
      },
      9469: (te) => {
        te.exports = {
          HistoryGrid: "EH94izUwGG4SSkACVZ7n5",
          HeaderCell: "_1nob8WR16zyBYIFa_CPw9w",
          Cell: "_2bC2EU989i01V1yWopneL4",
          RemovedName: "_21vm-4CtlXT411r74VWNJt",
          CreatorCtn: "_1DBwksWf73G37fIH0UHspV",
          HoverCtn: "_2US6IgYcvN2X4Qs1NwBHtI",
          AccountName: "_1jlLyRHa7jxq6iv3XYaicN",
        };
      },
      30533: (te) => {
        te.exports = {
          Ctn: "_1ZAQLoxm9d3f6xrGzbfNqv",
          CreatorCtn: "_3E1g0g32lII6LOwFavs-pL",
          HoverCtn: "_2BgPwOwyt6_vzsU2JpcvFM",
          Avatar: "_2aKMBhqBnmiLCGD_hcZSx3",
          CreatorCtnError: "tN8iKI_k1ulzwyVVkMZ_d",
        };
      },
      69515: (te) => {
        te.exports = {
          SelectorRow: "_2gPHlYO9IsXSVwCXObPaQe",
          RelationshipType: "_2Rm9HP6ML30Cji08Vj2td2",
        };
      },
      71714: (te) => {
        te.exports = {
          DLCItem: "_1sgY-MVMUccmrZgX7D5bAw",
          Highlight: "tsusJIGDyi0szvTLG_58g",
          DeleteDLCItem: "_3W4Twu_YWCADotnJq1XNad",
          HighlightDropDownLabel: "_1ydvIIXwFV5dgYKnwBTgR4",
          HighlightDropDown: "_1ipl4yg58fGYR0_j3G2nLH",
          DLCItemDeleted: "_3NI0dNLBy2votX-G41EHUK",
          DLCItemNotHighlightEligible: "_2tZBwJXOOBOJ0g1pDXTXcg",
          LabelNotHighlightEligible: "_1mAhoxKDY4ru5NgKwHsibi",
          AddDLCDialog: "_3QmO_KfxjsLCYJ3Km0vtXg",
          AddDLCFooter: "_20wuD-AQWC90hxbP9iGsQu",
          AppSelectCtn: "_32YZCQQ7Pe-_dwX6LIf3pl",
          DLCDisplayContainer: "_3cg2WBZbQuwOGVBJr4DDWz",
          AddDLCButton: "_2p7IttiJElSQxs_diHKzci",
        };
      },
      43104: (te) => {
        te.exports = {
          ExtraAssetImgTag: "_2JQ4QGd4mIBR58A-9bDHdq",
          ExtraAssetError: "_4aB4b9buM8DFxojRymZ_5",
          ExtraAssetImg: "_1W2-3_i4cuGzBmocT-ZAk5",
          Selected: "QRTy6qng-IEOMiXMxwVtY",
          "extra-asset-blink": "_2D6wlj_wFTjjLOi2f7N1tq",
          InDeprecatedLink: "sakeS4kMEd2FGp4Da4Xrt",
          ExtraAssetControlsContainer: "_3-tWPanUj6QJND7dPTlrgc",
          ExtraAssetControls: "_3LTnCSzSad_SJbC1nruDT8",
          SmallImage: "_3AYhN4DOm37hwrJw5_EKNa",
          ImageLinkDisabledWarning: "_2oUv4hHSs2-8LXtBPcyRRy",
          TopBar: "_1WOD0JTMh8GPXMSA_p8BNb",
          TopBarContent: "_1nOxfVQISFWWwmO7v_u77O",
          Hovered: "_2h_sqCtLa_VIfPxPT1ojpD",
          ExtraAssetDialogContent: "_2zFGXU_GHLOWey5_sOi8kq",
          ExtraAssetsDialogDescription: "_11Ohp1dBE7FzghG4yzgqoA",
          UploadButtonContainer: "_31BKf0Ts8oSM_mv61BOp2G",
          UploadButton: "_35DNlmVRsyVbi56Xf_jj9A",
          StandaloneUploadButton: "NK3X0iAqHHQskiywniNiD",
          ExtraAssetsGridDialog: "aaxZ2xZ0gE7RMvrheWWmj",
          ExtraAssetSearch: "_33MsM-ZTqbPsW8e03kSUKY",
          ExtraAssetsGrid: "_2Uzyt8kZcr-0KU1aoTkiuj",
          ExtraAssetsPageList: "_39FaN2oioTXV-lkAOG0jfE",
          ExtraAssetsChooser: "_12hVxV1z_asvDHFqo9ScMk",
          ExtraAssetChoice: "_13xCWTST4J-cgOyz6kwfIJ",
          ExtraAssetStack: "doWjXy-F7LwBxlzCUBAGC",
          AltTextBtn: "_1JdiJTPLBYcAxWzLqjYV5P",
          StackedImageCtn: "_3gElE6VZJ9uU4-RaFC8Ra8",
          StackedImage: "_2hABNX3YzXj9JYRLANr-hg",
          "Image-0": "_3cPT5-4vXp4iE6v0qwHc23",
          "Image-1": "_2BP4s6zHDy_5HIqCoVQqIg",
          "Image-2": "y5NNNiOOneEJF6_a7pq8O",
          ExtraAssetName: "_1v6uTQuGLshmZKWXULJOSr",
          InstructionsForLocAssets: "_1SZZIXmXR7Rw30KxYPB-tJ",
          LocalizeAssetDialogContent: "_1yX-VOaM5vG__71wYRKXpF",
          DisplayLocImage: "_3DKy0FBx7VieVYhRL6ykCt",
          LocalizeAssetsDialogDescription: "_2AS-5DvwKtFXZy1pWhENnE",
          LocalizedAssetMain: "RzrYxmOI_AsfjKkcxy234",
          LanguageColumn: "_2TmGHFx_V1QDQrc-3q_8-f",
          LanguageWarning: "qpAjL-lahF8IHh9Nd93Ff",
          LocalizeAssetImage: "_1AS4JMOtff-hCq2TVtvwG0",
          Large: "_3CEcLwkihaLGNenomwOCbk",
          LocalizeAssetKeyImage: "_3Ec8F-CYK-STI2Vqw-I5ml",
          LocalizedAssetCtn: "_2m5BQtwFQfI-w9rxOgxzzT",
          LocalizeAssetItem: "_2Si9uGdC2JFc48CXIZ4T1N",
          img: "_2LTUOhg1K-ZG-zE8KHXEbA",
          Name: "lGJk6OffakeBbm9rvukuH",
          LocalizedAssetUploadWarning: "_26-vmpZD8b_p2ApFLrcji8",
          LocalizedAssetUploadButton: "FrlNPlPwQkjgzk604bAC4",
        };
      },
      76349: (te) => {
        te.exports = {
          SideBySideComparison: "_22Yf4CsBMkYFBcTEBh4ifm",
          ThrobberContainer: "_1ohypTL81epoo-2xTCJp8M",
          Loading: "_1rTERXdhbmJz94-Cb07emK",
          ImgPreviewContainer: "_15tW0aE5WXrWrGgguKGlWn",
          ImgPreview: "xUnBDVbIvtL7vyAS4rn2t",
          DuplicatePreview: "_14-dbrekvOWYS09OPByyHh",
        };
      },
      97982: (te) => {
        te.exports = {
          LocTextAreaContainer: "_3oZ2A8CpTx8VWK_eJhZYh",
          LanguageSelect: "_26sgpEoBg_73b96Dm9zA__",
          LanguageOption: "_3-BbOrMwYQUVRDtsxZto7i",
          HasValue: "AX8gskcTCWl_aI-UYAJAf",
          TextArea: "_374NqqdR-vuq2spxuRXCB9",
        };
      },
      80968: (te) => {
        te.exports = {
          EditorPanel: "_2SgPxDudv7oRkzlHsNm4_O",
          AboutTheGameArea: "_3EAE8BxFPnb_g0Ct5b4QzW",
          Awards: "_26nsky_SK1122q1xYQ0VZu",
          PreviewDesktop: "_3bpOE-B9MDag6KQR0eBkuM",
          PreviewMobile: "_2WpGoEdbqT778yiAcOF1LI",
          GradientRule: "_1dK_q5EmTZgebmJeCzHq1s",
          PreviewGamepad: "_2m49NX6vFS6SVkkvgmwGY0",
          StoreAppPageHeader: "_1aQY7Yz23XDN0N4IVctriG",
          PreviewModeCtn: "_3j8IamPUv5fQG3BCS5x5g5",
          PreviewModeTitle: "_1xyaZdEQi0iZWRnsgSmNsE",
          PreviewItem: "uX4wgaxy3MACLqRDZkAQT",
          SelectedPreview: "_3GPQSHrcPD7sKpOP2Ne8E3",
          PreviewInfo: "_2SAasZGqd4LlNB-qPiE38o",
          GameDescriptionEditorToolbar: "_14dow-GSmyLacYWBXCNV1l",
          Sticky: "_2YccUEt5UoKig0cAk4W6DK",
        };
      },
      27539: (te) => {
        te.exports = {
          AltTextDialogContent: "FSO6VV5iXmPANFhTj7Bzp",
          AltTextDialogDescription: "VsXbYkSe5CrbxkE5GhQfI",
          AltTextGrid: "_1DSTal-SoqU7Zf0nk0FmRl",
          AltTextHeader: "DxwrrF6sruBZ-N_Q98dP9",
          AltTextImage: "_3_3Dqx1hIyrpPPlER58SWu",
          AltTextName: "iIe8caS0kpCFy1oLCOUCE",
          AltTextInput: "_160Whafs351qmmXz5c-5_b",
          AltTextRow: "_1okAG3zavPs6wvi1wP1-tW",
          AltTextFailed: "_3Az0YOAE-dFfsOyEkDyEoR",
          AltTextMutateFailed: "tyh1ewxCBrVfWQeIlU505",
        };
      },
      23256: (te) => {
        te.exports = {
          AntiCheatDropDown: "_1Ein4m5qBonpTJl1GbVcV_",
          OtherSerivceName: "_2wW0IMGaGmFIjizuMml3mB",
          KernelMode: "iAq_jMg3JrFT_qjIU6gSL",
          CheckboxLabel: "XRMda0yOh0NFnSf3EVLP1",
          CheckboxDescription: "_10omFg-YbEQjz9R0VzeuSC",
          LanguageSelector: "_2aIJUMbzwAYBpQHVa8E2Pg",
          FormRowIndent: "_2NE-O2O0DHfvjzxSZ2fmDO",
          FormRowHeader: "_2uZk1PvTdbBPuMfDFzAGNW",
          FormRowDescription: "_3pHVbh8Pxwbpxlxeej0oG3",
        };
      },
      72671: (te) => {
        te.exports = {
          ImageConfirmationDialog: "_2Dn55ck2zVwRbA9GNFu_yZ",
          ConfirmationDescription: "_3JFBzNNPRVAejRvp2bu5hF",
          ImageTypeConfirmationCtn: "_3C-PQ-bC6JWcozpVTRwYuU",
          ImageTitle: "_1Hb-MsBU3Ssa4GqbaZQNkc",
          ImageCtn: "kbtD90I1ou1gx_xO8tcXC",
          ImageSrc: "_1Md62ii5C2Q4QaiqWoEdhf",
          ImageCheckboxes: "_3eo-7msJ5jV20gub1qOBn",
        };
      },
      30041: (te) => {
        te.exports = {
          NonAppContentsEditor: "_1WoYFMMlYaGcrH1OlNAeb6",
          AddItemButton: "_1xbvS9FSWE8T43H5V6tnLs",
          NonAppContentsEditorScrollArea: "_1dJujt1qEcM8WgH2bsRGtX",
          EditorButtons: "_1WySz_wiyGNuQgIN2UIHuR",
          ItemEditorRow: "_1xiTQEBFDACW6ssXe_rkaa",
          ItemEditorRowContents: "_2oGxJ3wpmY3NkzAlmhzPeu",
          ItemEditorRowNameAndLanguageEditor: "_2QqnI_s10DOvb-HPBd-QeA",
          ItemEditorRowVisibleToggle: "_1NH9ZOrC3ltObbXnTj7Wn0",
          ItemEditorRowDescriptionEditor: "L9MKw629aEVZfhOrL8HFX",
        };
      },
      36671: (te) => {
        te.exports = {
          PackagePurchaseDisplayContainer: "_1pD-mB7FB4bkfagrMUC9cD",
          PackagePurchaseDisplayButtonBar: "_1XFrrNb_d41kTB7sg9Q_EQ",
          PackagePurchaseDisplayCheckOption: "uXkDV0VRgXEoAuNG58Fzd",
          PackagePurchaseDisplayArtLabel: "_2yayatEjpsnHa5NQ9oPlic",
          checkbox_label: "_1AiEeUD__3Hwc4fhAmw9o4",
        };
      },
      30935: (te) => {
        te.exports = { EmptyPinnedBundleList: "_1iAXEFHnXUjh793_HsWLka" };
      },
      15348: (te) => {
        te.exports = {
          PriceChangeSummary: "_378al6U3fz_xo26XB9TSaC",
          Pending: "_9BqgpQmpdILuSOBqbvGmK",
          LoadFailed: "_34U8ZCDShWlVmzkBSW2w1J",
          LastChange: "_2l-Xyo8VbJ2d3XET3FSMDA",
          RecentChange: "_396joK-7sdGrUxSlkMFOSC",
          ChangeCount: "oj-LqimPIvXVMzu4i_Srk",
          PriceChangeToolTip: "_1ju10cCVVFddbi9j4GydW7",
          ToolTipTitle: "_3xk6dJPcAPoyNGwRBsSLYI",
          ToolTipFooter: "_2lvPhgL4d8BhTp9kzGmqJ9",
          ChangeTable: "_1KVZXL9V7gdtPB4judbmZT",
          ChangeHeader: "Tgry6kDtqoo8oLIhLwRlk",
          ChangeRow: "_1OZc-hjI5dkOl7-5ULCXgQ",
          TimeSince: "_1kFp7JsD4NPIjtLyWXzHd_",
          Price: "pCW6qPXp-OAuvel2qwIcT",
          Currencies: "_3xGwebW9ut7kgLyLjTcBpx",
          Notes: "_3SUWUxCuHwN3dYEIbtAbja",
          Increase: "_3hxpTm3SvfgEuBOwXHA3lD",
          Decrease: "wU80squkMRYFMGxr9CTrZ",
          NoChange: "yUgWUJgZHovMaAGLLtLA_",
          FirstPrice: "_24W_O9CqcOeCKh_efWoYl9",
        };
      },
      14358: (te) => {
        te.exports = {
          RadioButtons: "_1o8PeYV1JEHw28jdq0-cZs",
          ActionsCtn: "_3tmYmIJendBOkxYfR5pMSJ",
          NotesField: "hmIKAOq3IUq5OZJGCGodY",
        };
      },
      77428: (te) => {
        te.exports = { ValveAccountTicket: "_1gAPWjNZ0dtQiyMfDmxtd" };
      },
      2897: (te) => {
        te.exports = {
          PriceDeltaCtn: "FR0Jbt4UFGpCZeakQYuXa",
          PackageInfoColumn: "_1sw3lFWbKOrwVBjyMmIVFE",
          ProposalCtn: "_2aZ0dHJvCBWY-dISFYuHx7",
          RowCtn: "_3Fj4_LN49SJ2FIDkn5Ar_x",
          InlineDiv: "_19_mEBDtOirVDKNF0sbPMT",
          FailuresCtn: "_1Z31Ten-n1dAC5fhblKIfC",
          MatrixGap: "_3vOjxVYu8bLFNAaHbstgFp",
          Legend: "_14hkGjE6JlGYtfCi24GIcv",
          Missing: "_1Prze41qAKK3Yf2ywGaP4x",
          Outside: "gYYAD-UX0KTtpP8A7wose",
          CustomUsd: "Ru7OVKpEg2-4T6i2fJPVP",
          MissingCurrency: "_1aHJaADVcfWKEoJd3rHyzS",
          Title: "_3vH34cEyQM0jTB1rtzMc19",
          SectionHeader: "_2GhfKAafoa5Z1PGwOg6ju9",
          AutoApprovalCtn: "_1-7oBBbh-eUUB7iskMHyxE",
          Notes: "_1y1kejSOqm-cFSP1HxSL_s",
          CurrencyWarningsCtn: "_2H_McBAV-1DEhfPhYqmTG8",
          AboveAutoPublish: "_18NNA8ajB8j6lCIlkk8_uk",
          ThresholdMiniTable: "_1Qz3SUdF4Z2HAIlSWPA08n",
          WarningTitle: "_1jnFS4SBVwvvKVzrE6v9ly",
          WarningAbove: "_2QdKNR-tKnTQ9LEnQ8bVV-",
          WarningBelow: "_1Yk633c4Lzb0M0bpPNgg7e",
          ThresholdRow: "_1WR81oD47ZQYIwkubRtLJ0",
          ThresholdHeader: "IROvk26OnXM-2kx4vbPtO",
          CurrencyName: "_1ErxFwG9fg34T9vaBCjMyh",
          EqualPrices: "_3tHg_ZoTA9Y-7U0t2Cxfyx",
          OriginalPrice: "_2oPTCoNk1ZzEt4AhH3P2D-",
          ProposedPrice: "mbBO-p8uSR3ZCnGWTrGpO",
          RecommendedPrice: "_30pJDSHiHiCXSW4SNk0nnP",
          PercentDiff: "_1d_jmwlFfcaSfpvHzyFrhM",
          ReleaseDateCallout: "_1Xzwu7hrwrG-4QWc1zMbsx",
        };
      },
      23708: (te) => {
        te.exports = {
          RowCtn: "_2Kb5slnuUjyEZh0EM01mpa",
          CurrencyHeaderRow: "_1MTZXU0O3Ez0HuYIUZ7DRL",
          priceChangedNew: "_3omSD7bzihAQsvjW816OTH",
          priceChangedHigher: "kPaeu3zbh3qS1FSWF0PXM",
          priceChangedLower: "ExSF3NJhFrNmaalRumcyU",
          outofmatrix: "_1v_REU9nI-QU5hVkmSREZ2",
          pricingerror: "_1flav3IaDWEjl67mhiTjtL",
          outofmatrixlower: "_1yBYLNIGGvEetpwa3M9DVx",
          pricingLegend: "_31Qzh5kyW8c3aceh-aaOLD",
          PackageInfoColumn: "_1v90IxHlEuTMEzzaQS4DkY",
          PackageName: "_3Ry84c5vN70mLVtPYtg6sv",
          Column: "_3yvRGn0SGj1ZMfxDBlsunE",
          SubmissionBy: "_1OTJ0XMxu7F_2yNy3A2qKA",
          MissingReleaseDate: "_2smrPeVLLyicNuwt3hgBAd",
          FullCurrencyColumn: "_1VlWukpBKxbYmmlJrC6r5m",
        };
      },
      26673: (te) => {
        te.exports = {
          ReorderableListWithArrows: "j49UFcs3c3QniMgfBfbUC",
          ReorderableListElement: "_1ziKQJEFC5xIspudN0mQWr",
          ReorderableListUpAndDownCtn: "_117rbiRaxL2gx6MMmEAfbw",
          ReorderableListElementContents: "QKoy-F4c1lg1WVGHxrLPo",
          PurchaseOption: "_2svu-POqLeuRkmBTgwfmiS",
          PurchaseOptionFirstLine: "_3tZOw-_UErk1L8tZXBjBlc",
          RemovePurchaseOption: "_2_34o9MpxAxSaACc_87Gki",
          PurchaseOptionDetails: "_1fKMWxi9ifFxXkEqUGVwzK",
          PurchaseOptionHeader: "_2YRHmK-lnhG05fMug_YyNZ",
          HeaderText: "_1kHpaHBh_NR1YhLy8EhFi7",
          PurchaseOptionsOrderEditor: "_2XMlI9jS0J1yB1LCS0c1SU",
          PurchaseOptionsManualToggleCtn: "_3_8N_22yAQCd1zvyNKqfht",
          NoPurchaseOptions: "HXFLodBVYcS6nS9eLv0HH",
          PurchaseOptionError: "_3RSMcw9mJDbrvzPfuNnhcB",
          Exclamation: "_3MdVQ7CJpuGgd3bkTFABRm",
          PackageOption: "vuttoObFteUS46kZgAGlL",
          DropdownOption: "jMf54NQ9Nyft2Si8tbZhL",
          TitleLine: "_4P8QXdBrnelSxwtLHVLOE",
          TitleInput: "_2hzGnHNQA7JBBJz0jCHV2-",
          DescriptionLine: "_3XNwKrWW3qelYLfsIgwHx1",
          DescriptionInput: "ZQb6AVSuWych63E6kWW5F",
          DropdownItemsCtn: "_1tiRg0IxiQHqYoCUkNxKWQ",
        };
      },
      36500: (te) => {
        te.exports = {
          EditorCtn: "_3qyd9aiwL32kAuGY_Rhzm0",
          HeaderCtn: "_2SsIaBHCvUU5Hyt5uQxA_p",
          Row: "wscFtfHuH_NvN1lnfHM6i",
          MilestoneButton: "_1qXO7rz_wCXLWRo_houCbh",
          BtnCtn: "ZrIN9N9KK84LosHTnHAal",
          LangBox: "oHsool0rU2gYfVTjIVrGt",
          CreationButtonRow: "BsMGgRExOtnnHfrfRMeJ7",
        };
      },
      64442: (te) => {
        te.exports = {
          BtnCtn: "_15Uzhk19FXMyjsNEpD2w__",
          MilestoneTable: "_32pGw8RvFp8N1tj1ZZFD3V",
          Date: "_3eoKJfAU5YNpujekRJ29Lt",
          Released: "aiYALRtbutTsqpA3EVxIS",
          EditBtn: "_3GPoiDQhG2AWZ8zqnefzZt",
          StatusRow: "hs6Pa5T0Gbw8pd9VpJNAs",
          CheckMark: "_2gpgDFHrtGUVaBKuGQRQfZ",
          EditMilestoneDialog: "_1b7pp2idI0It1Wtbh4K5Ck",
          ShippingTheMilestone: "_1ujBS0HyFpqMeEUdjrLrMr",
          ShippingType: "pXgsjv7B10bT5brNV7MFz",
          MilestoneTitleField: "_2J6DntV8BgxcP9CSCueNZu",
          OptionDetails: "_3IQkWWzfVA9kOWtxTMekyW",
          DatePickerRow: "_3ZMVdS_YE75SaKzbxL0ifx",
          TitlePreviewRow: "_82lvRm6zNUSuia5C-0KVb",
          Shipped: "_1jDNm9kCJcNIl38lakfF51",
          PublishReminder: "_1FnrHyPuXP7yRZRvgoNvLi",
        };
      },
      8833: (te) => {
        te.exports = {
          Separator: "_2v8lnOhHPKk5DrlAD0yAwc",
          "Size-1": "HA_T1szVWGIw7_cDibhei",
          "Size-2": "oSgUz2qE-NgHuOm4wt_OC",
          "Size-3": "f9Ra4JmQiBJz_dBLijs_x",
          "Size-4": "_1zkUYDDyfzPgesBbGmMsxP",
        };
      },
      60394: (te) => {
        te.exports = {
          Root: "_3i_h6xYLxqWT-wquwrB4P8",
          "Size-1": "_2BS49hUFyqY2YQ3X6Am-Oe",
          "Size-2": "_3GAcWYWoOxZKAt2NY-d-M-",
          "Size-3": "q85ksguLIHUIA6Z5aWE2b",
          Track: "wCPKWvwCOuo-4mHzhEcBW",
          Handle: "_14qr0P2xMoRiEbcekixcZh",
        };
      },
      75180: (te) => {
        te.exports = {
          Grid: "_2IVd64AHN6R428cgcPqW7M",
          Display: "_2PUyyAEGuZenuwES7VJvQO",
          Columns: "_16FZUyKiH6Z7trthKypJwf",
          Rows: "_2QdiX1hDsJmlkrHmcCOMbV",
          AutoColumns: "Cr7YIMQn6_lDRU4-3BR8b",
          AutoRows: "_3kyzvGnYVLT0DW6nzP9n18",
          AutoFlow: "_3AvZKfpfaIQbfczVRBASsX",
          Areas: "_1-yfCTWkj4tOFfb3EKXx6N",
          Flow: "_1yUwWGTk4IX0IhdJiKfFBf",
          AlignContent: "_2Tglp6488nVBhU976Llfpe",
          JustifyContent: "TT1_g1XWXbbLgxOPIpczV",
          AlignItems: "_1ve3GjJA-d6MfYcIiXdqz0",
          JustifyItems: "_2LsmJGVn3g0GHmBPNWVn5T",
          Gap: "c0C2uHpDLCegllhH1rM3M",
        };
      },
      39049: (te) => {
        te.exports = {
          Heading: "_12ldq1_X5RuLWAAs_ODwt7",
          "HeadingSize-1": "-YHuRmP6nUp0IqPQ4F3wk",
          "HeadingSize-2": "_20m6yPkrPwQ8XwlhPdMtqu",
          "HeadingSize-3": "_2jvih9p3Mc3zUn2nnxzDv7",
          "HeadingSize-4": "_1zvMJY9dUjwMSI0j5QoEdq",
          "HeadingSize-5": "_1196Oisy8jDA4szPu-KrKP",
          "HeadingSize-6": "R1W-zMFN4WGw9JK48Yqez",
          "HeadingSize-7": "Ena8Nl7MJg7YAYsWql_jo",
          "HeadingSize-8": "jyf9-rlT4iFrHQOAVn298",
          "HeadingSize-9": "_3L0vs4_Y96AtsR3P5GUkUa",
        };
      },
      83217: (te) => {
        te.exports = {
          SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
          WideMode: "_1oLxPrvbIeJJ1d96fhJvOI",
          SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
          SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
          XButton: "RC4JznqJb34yCm04FKk0I",
          SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
        };
      },
      47534: (te) => {
        te.exports = {
          SocialMediaRow: "ulorWm3sqhSeSaQPSH7O6",
          SocialMediaType: "ZKHt9TgsGIf59MoROuJuj",
          SocialMediaLink: "_4yVvgRIj7im7egSdbtW_w",
          SocialMediaTooltip: "_2btfW5GjJOR2sOB-k94zp6",
          ValidationError: "_1vWmrCnLJP6y1vJRoWO6Qj",
          AddLinkDropDown: "naYpWkI1nnET_gXJrYEAw",
        };
      },
      73309: (te) => {
        te.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          Container: "_30v-6zb_axOypIUr5VRHE1",
          SingleLine: "_2i9qH2AM6Wg5660Tkf_fTt",
          ToolbarRowOverflowContainer: "nXEH21nf47u2OH7BjQKei",
          ToolbarRow: "LCeIT0gmFTY8fdfaVgk4j",
          Gap: "_19z0fjj7o0n9vAjVjvYZNU",
          Spacer: "_2m1BBIp5Ewr1TI-BkqFGLM",
          CommandButton: "_1dEi5qzSDdPOzoOQXYbNLN",
          Toggled: "_1Iw5xoXQXfmRjgjWTKbm_G",
          FileUploadPlaceholder: "_2P-FBc3tZWGeeBFplDSb9g",
          ThrobberCtn: "_3QpIkO3kkVZmnulwmiZRHH",
          ThrobberRow: "VIY8ZV4g4NpEMnF-_pHOh",
          Throbber: "_12t6JmDCFT6MqtNVrSi5NJ",
          PendingImage: "_2HezQYTfmFfdRmuB8l9QPI",
          FileUploadDragDrop: "_1WRaNQqBKcUp67ntgoyEeQ",
          FileUploadDropFilesMessage: "I2CE9X_I0GBNYbJf7VYBg",
          TooltipWithShortcut: "zT2msZmm-jBeLe4Dt7smo",
          KeyCap: "_3mZEV9CXrIn4FITvJk3Xy-",
          BackgroundAnimation: "_32I7Uh1ZWySd7VGW50f5IC",
          "ItemFocusAnim-darkerGrey-nocolor": "_3dzJEyM6opBkmIeARAGlYr",
          "ItemFocusAnim-darkerGrey": "_2dbsn-sR5AlFKEgCU0FBbT",
          "ItemFocusAnim-darkGreySettings": "_2gCU5HJBuDk1vxRMJhwFGE",
          "ItemFocusAnim-darkGrey": "_39KmlfhlZwkINJt9fdyKbw",
          "ItemFocusAnim-grey": "_1X5Siupo5N_ZVuGesoYV0t",
          "ItemFocusAnim-translucent-white-10": "_3aZcpOjRI-YzMZmhCRiFjd",
          "ItemFocusAnim-translucent-white-20": "_310j_Q-iB-at4-cmQSi1Mt",
          "ItemFocusAnimBorder-darkGrey": "_38WlDUfHs-IiaRcWKFpWyA",
          "ItemFocusAnim-green": "_3Hq7gKwAuHvmYuBWXBx8mC",
          focusAnimation: "_1k4kLxHBHs5edlnWmN-Cos",
          hoverAnimation: "_3OZh2Bm4JsNC3bNfskysCA",
        };
      },
      1431: (te) => {
        te.exports = {
          StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
          StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
          StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
        };
      },
      63404: (te) => {
        te.exports = {
          narrowWidth: "500px",
          Details: "_8DSX9d1ihrMSeZUFC9elD",
          Summary: "_1FCh_hPFNuwj9vrVDMOvMC",
          FeatureList: "TwihVkmmqI5XLg6P4fpwF",
          CategoryIcon: "_1GkKPFI1K10GLg9538MMAF",
          FeatureNameContainer: "_3sRe2CGQBgablPBz9Bc9c2",
          GroupLabel: "_2079QFhY02KJ4KxGMltDNJ",
          FeatureGroupItems: "_2WWlH-JTbq_f1PEyooC78U",
          InfoRow: "_1RmibngWLogcFmO93kGFgq",
          FeatureName: "ny6hWVK6ii05H200KRhds",
          ImageContainer: "_29jQMo9DGCmcSKyDIC3V7M",
          InfoLink: "_2xmH7agKi37v9kwFHi093S",
        };
      },
      17479: (te) => {
        te.exports = {
          narrowWidth: "500px",
          ReleaseDateInfoCtn: "_3_BM0Yr1nZHLRCU-YScHph",
          GameEditCtn: "_2atDY79LoAg6W2I3f_ghoe",
          ReleaseDateContent: "_3EqL95FAclb4_KUCViyIy",
          EditButton: "_1nt4AvPVzCcmifUL2j41GY",
          Spacer: "D6yaJy1vHTj3skoSwQCmn",
          Top: "_17TBmwVnz8B0fYk9NMgjcC",
          Bottom: "_1mdhhjdhefzfINtpGJDw_F",
          EditButtonIcon: "_23n7mGKR9t2rn_appk4hc4",
          LabelField: "_1yV1XMUdZdavVgSZ6SzXKj",
          Label: "_2aDfpXF8ktFHq439q_1vAi",
          BigField: "_3K2oJx5qEZyMkC2O7Ib77p",
          Set: "_1CXRFvJ5iqKqlENSWgeHPP",
          DescText: "_3FFbGIjpM4z0O1HfqwwsvR",
          StatusText: "jBW2mrF7D6RVhT2u_ZRXB",
          StartWizardButton: "_1hwFIOidJj1HaD2_cI4NRD",
          ControllerSupportLevelString: "_1mfBI5XbiaKU9vS5WkJALu",
          InfoRow: "_2xZaMR-NKc0LbkeM50cZq8",
          LocSection: "_3KAysk4dlhWETa6ixz7V2j",
          HighlightText: "_2Qr-aCeNvCUkoGKh3ikniD",
          GamepadRequired: "xAMFa9akLaRN7hfkTC8_h",
          Personalized: "_1g3WgidGN68CDX4XQPGnl6",
          HighlightRow: "N97okiqePUqGpdeNrIxUU",
          LocString: "_3FBEGAfvLQj4qYjstmZAPE",
          ImgSection: "dxuI55RF56-dzbuXjj2W0",
          SmallerSVG: "_1LWvkVSCiVeG4Yf5uxtQ28",
          BiggerSVG: "WRiytnKTtULWCkwFVJoTx",
          PreviewContainer: "_13bOrUeolqp9EyK3or-cLt",
          StoreSidebarContainer: "_1CTHwmZmi5YE4kovZH_UIl",
          PurchaseNoticeContainer: "_166hsSkQYxKraMJIx7td91",
          PurchaseNoticeImage: "_3UK9OHyZ3r9rA55mgsnZPD",
          NoticeContainer: "_2IS5rvIlv3ARam8O7b_-po",
          ControllerRequiredImage: "_3YEJ5NoOg1YObev3TXdMi",
          Tilt: "_1NEHd7t-JVZYdk68QMEph-",
          ToolTipControl: "_3vt5rw82YhkhWtu5ld9QeP",
          ToolTipContainer: "_3PRdiJdKKfTnwLnTfbCkEz",
        };
      },
      64734: (te) => {
        te.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
    },
  ]);
})();

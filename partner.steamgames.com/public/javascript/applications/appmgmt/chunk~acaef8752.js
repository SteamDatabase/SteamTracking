/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3506],
  {
    71647: (e) => {
      e.exports = {
        DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
        DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
        ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
        SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
      };
    },
    27344: (e) => {
      e.exports = {
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
    12916: (e) => {
      e.exports = {
        EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
        EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
        EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
        EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
        TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
        EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
        DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
        PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
        TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
        InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
        TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
        TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
        TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
        EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
        EndRound: "jwuNowbLB28M6nkqFkF_C",
        VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
        VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
        EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
        DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
      };
    },
    63556: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => u, O: () => d });
      var n = a(34629),
        r = a(14947),
        o = a(65946),
        l = a(22837),
        i = a(62490),
        s = a(6419),
        m = a(78327),
        c = a(91986);
      class d {
        m_eCurLang = (0, l.sf)(m.TS.LANGUAGE);
        m_rgHasData = (0, i.$Y)([], 31, !1);
        m_bHasLocalizationContext = !1;
        m_callback = new c.l();
        GetCallback() {
          return this.m_callback;
        }
        GetCurEditLanguage() {
          return this.m_eCurLang;
        }
        SetCurEditLanguage(e) {
          return (
            this.m_eCurLang != e &&
            ((this.m_eCurLang = e), this.GetCallback().Dispatch(e), !0)
          );
        }
        SetHasLanguage(e) {
          e.forEach((e, t) => {
            this.m_rgHasData[t] != e && (this.m_rgHasData[t] = e);
          });
        }
        BHasLanguageData(e) {
          return this.m_rgHasData[e];
        }
        GetHasLocalizationContext() {
          return this.m_bHasLocalizationContext;
        }
        SetHasLocalizationContext(e) {
          e != this.m_bHasLocalizationContext &&
            (this.m_bHasLocalizationContext = e);
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            d.s_globalSingletonStore ||
              ((d.s_globalSingletonStore = new d()),
              "dev" == m.TS.WEB_UNIVERSE &&
                (window.DUS = d.s_globalSingletonStore)),
            d.s_globalSingletonStore
          );
        }
        constructor() {
          (0, r.Gn)(this);
        }
      }
      function u() {
        return (0, o.q3)(() => d.Get().GetCurEditLanguage());
      }
      (0, n.Cg)([r.sH], d.prototype, "m_eCurLang", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_rgHasData", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_bHasLocalizationContext", void 0),
        (0, n.Cg)([s.o], d.prototype, "GetCurEditLanguage", null),
        (0, n.Cg)([s.o], d.prototype, "SetCurEditLanguage", null),
        (0, n.Cg)([r.XI.bound], d.prototype, "SetHasLanguage", null),
        (0, n.Cg)([s.o], d.prototype, "BHasLanguageData", null);
    },
    42027: (e, t, a) => {
      "use strict";
      a.d(t, { Gr: () => O, O9: () => k });
      var n = a(65946),
        r = a(75844),
        o = a(90626),
        l = a(22837),
        i = a(2160),
        s = a(64953),
        m = a(69343),
        c = a(63556),
        d = a(16676),
        u = a(52038),
        g = a(61859),
        p = a(27650),
        f = a(71647),
        E = a.n(f);
      function C(e) {
        const {
            onDropFiles: t,
            renderDesciption: a,
            elAdditonalButtons: n,
            strOverrideDragAndDropText: r,
          } = e,
          [l, i] = (0, p.hk)(t),
          [s, m] = (0, p.Ss)(t, {
            accept: "image/png, image/jpeg, image/gif, image/webp",
            multiple: !0,
          });
        return o.createElement(
          "div",
          {
            ...l,
            className: (0, u.A)(
              i ? E().DragAndDropContainerDragging : E().DragAndDropContainer,
              "DragAndDropContainer",
            ),
          },
          Boolean(a) && a(),
          o.createElement(
            "div",
            null,
            r || (0, g.we)("#ImagePicker_DragAndDrop"),
          ),
          o.createElement(
            "div",
            { className: E().ImageUploadBar },
            s,
            o.createElement(
              "label",
              { onClick: m },
              o.createElement(
                "span",
                null,
                (0, g.we)("#ImagePicker_OrBrowse"),
                " ",
              ),
              o.createElement(
                "span",
                { className: E().SelectImageButton },
                (0, g.we)("#selectimage_select_file"),
              ),
            ),
          ),
          n,
          e.children,
        );
      }
      var v = a(95695),
        D = a.n(v),
        w = a(9154),
        I = a(738),
        T = a(64641),
        h = a.n(T),
        A = a(12155),
        _ = a(22797),
        b = a(68797),
        y = a(56011),
        S = a(66331),
        U = a(27344),
        P = a.n(U);
      function k(e) {
        const {
            imageUploader: t,
            fnUploadComplete: a,
            strOverrideDragAndDropText: r,
            forceResolution: l,
            elAdditonalButtons: i,
            rgRealmList: s,
          } = e,
          [d, u] = (0, n.q3)(() => [
            t.GetUploadImages(),
            c.O.Get().GetCurEditLanguage(),
          ]),
          p = o.useCallback(
            async (e) => {
              let a = Array.from(e),
                n = !0;
              for (let e = 0; e < a.length; e++) {
                const r = a[e],
                  { language: l } = (0, m.jj)(r?.name, u);
                try {
                  const a = (0, m.PD)(l, u, s);
                  (n = await t.AddImageForLanguage(r, a)),
                    n ||
                      (console.error(
                        "ImageUploaderPanel.OnDropFiles: failed on i=" +
                          e +
                          " file=" +
                          r.name,
                      ),
                      (0, I.pg)(
                        o.createElement(w.KG, {
                          strDescription: (0, g.we)(
                            "#ImagePicker_Error",
                            r.name,
                          ),
                        }),
                        window,
                      ));
                } catch (e) {
                  let t = (0, b.H)(e);
                  console.error(
                    "ImageUploaderPanel.OnDropFiles: " + t.strErrorMsg,
                    t,
                  ),
                    (0, I.pg)(
                      o.createElement(w.KG, {
                        strDescription: (0, g.we)(
                          "#EventError_Code",
                          t.strErrorMsg ?? "",
                        ),
                      }),
                      window,
                    );
                }
              }
              return n;
            },
            [u, t, s],
          ),
          f = o.useMemo(
            () =>
              i instanceof Array
                ? i
                : [
                    o.createElement(
                      o.Fragment,
                      { key: "elAdditonalButtons" },
                      i,
                    ),
                  ],
            [i],
          );
        (0, n.q3)(() =>
          d.map((e) => ({ a: e.GetCurrentImageOption(), b: e.language })),
        );
        return o.createElement(
          C,
          {
            onDropFiles: p,
            elAdditonalButtons: f,
            strOverrideDragAndDropText: r,
          },
          o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: P().UploadPreviewCtn },
              d.map((e) =>
                o.createElement(L, {
                  key: "arttabupload_" + e.filename + "_" + e.uploadTime,
                  asset: e,
                  forceResolution: l,
                  fnOnRemove: () => t.DeleteUploadImage(e),
                  languageRealms: s,
                }),
              ),
            ),
          ),
          o.createElement(x, {
            imageUploader: t,
            fnOnUploadImageRequested: async () => {
              const e = await t.UploadAllImages(l);
              a?.(e);
            },
          }),
        );
      }
      function x(e) {
        const { imageUploader: t, fnOnUploadImageRequested: a } = e,
          [r] = (0, n.q3)(() => [t.GetUploadImages()]),
          l = r.some((e) => "pending" == e.status),
          i = r.some((e) => "uploading" == e.status);
        return o.createElement(
          "div",
          {
            style: { display: "flex" },
            className: P().UploadPreviewButtonsCtn,
          },
          Boolean(r.length) &&
            o.createElement(
              d.$n,
              { style: { margin: "8px" }, onClick: a, disabled: !l },
              (0, g.we)("#ImageUpload_Upload"),
            ),
          Boolean(r.length) &&
            o.createElement(
              d.$n,
              { style: { margin: "8px" }, onClick: t.ClearImages, disabled: i },
              (0, g.we)("#ImageUpload_Clear"),
            ),
        );
      }
      const L = (0, r.PA)(function (e) {
        const { asset: t, fnOnRemove: a, languageRealms: n } = e,
          r = t.ImageOptions?.map((e) => {
            let a,
              n = e?.fnGetLabelText();
            e.bEnforceDimensions && (n += ` - ${e.width}x${e.height}`),
              (t.BIsOriginalMinimumDimensions(e) &&
                t.FileTypeMatchesImageTypes(e)) ||
                (a = P().ImageDimensionTooSmall);
            return { label: n, data: e, strOptionClass: a };
          }).filter((e) => !e.data.bHiddenFromDropdown),
          l = {
            pending: (0, g.we)("#ImageUpload_Pending"),
            uploading: (0, g.we)("#ImageUpload_Uploading"),
            success: (0, g.we)("#ImageUpload_SuccessCard"),
            failed: (0, g.we)("#ImageUpload_Failed"),
          },
          m = t.BSupportsLanguages()
            ? O(g.A0.GetLanguageListForRealms(n ?? [i.TU.k_ESteamRealmGlobal]))
            : null,
          c = t.IsValidAssetType(e.forceResolution, e.forceFileType),
          p = "pending" == t.status;
        let f = l[t.status];
        "pending" == t.status &&
          (c.needsCrop
            ? (f = (0, g.we)("#ImageUpload_NeedsCrop"))
            : c.error && (f = (0, g.we)("#ImageUpload_Invalid")));
        let E;
        const C = t.GetCurrentImageOption();
        C && (E = r?.find((e) => e.data.sKey == C.sKey)?.data);
        E || (E = r?.[0]?.data);
        return o.createElement(
          "div",
          { className: P().UploadPreview },
          o.createElement(
            "div",
            { className: P().UploadPreviewDelete, onClick: () => a(t) },
            o.createElement(A.sED, null),
          ),
          o.createElement(B, { asset: t }),
          m &&
            o.createElement(d.m, {
              strDropDownClassName: D().DropDownScroll,
              rgOptions: m,
              selectedOption: t.language,
              onChange: (e) => (t.language = e.data),
              disabled: !p,
            }),
          r &&
            r?.length > 1 &&
            o.createElement(d.m, {
              label: t.GetImageOptionLabel(),
              rgOptions: r,
              selectedOption: E,
              onChange: (e) => t.SetCurrentImageOption(e.data),
              disabled: !p,
            }),
          p &&
            c.warnings?.map((e) =>
              o.createElement(
                "div",
                { key: e, className: P().UploadPreviewWarning },
                e,
              ),
            ),
          p &&
            c.messages?.map((e) =>
              o.createElement(
                "div",
                { key: e, className: P().UploadPreviewMessage },
                e,
              ),
            ),
          o.createElement(
            "div",
            {
              className: (0, u.A)({
                [D().FlexColumnContainer]: !0,
                [P().UploadPreviewError]: "failed" == t.status,
              }),
            },
            f,
            Boolean("uploading" == t.status) &&
              o.createElement(
                "div",
                { className: h().FlexCenter },
                o.createElement(_.t, { size: "small" }),
              ),
          ),
          o.createElement(
            "div",
            { className: P().UploadPreviewError },
            t.message,
          ),
          p &&
            c.error &&
            o.createElement(
              "div",
              { className: P().UploadPreviewError },
              c.error,
            ),
          p &&
            c.needsCrop &&
            o.createElement(
              d.jn,
              {
                onClick: () =>
                  ((t) => {
                    if (t instanceof s.M7) {
                      t.ResetImage();
                      const a = window,
                        n = o.createElement(S.q, {
                          ownerWin: a,
                          uploadFile: t,
                          forceResolution: e.forceResolution,
                          fileType: e.forceFileType || 3,
                        });
                      (0, I.HT)(n, a, "CropModal", {
                        strTitle: (0, g.we)("#ImageUpload_CropModalTitle"),
                      });
                    } else
                      console.log(
                        "ImageUploadEmbeddedDialog trying to crop non image",
                        t.fileType,
                        JSON.stringify(t.GetCurrentImageOption()),
                      );
                  })(t),
              },
              (0, g.we)("#ImageUpload_OpenEditor"),
            ),
        );
      });
      function B(e) {
        const { asset: t } = e;
        return t.BIsVideo()
          ? o.createElement(
              "div",
              {
                className: P().PreviewImgCtn,
                onClick: (e) => {
                  (0, I.pg)(o.createElement(N, { asset: t }), (0, y.uX)(e));
                },
              },
              o.createElement(
                "span",
                { className: P().PreviewImgInfo },
                t.width,
                " x ",
                t.height,
              ),
              o.createElement(
                "video",
                {
                  height: 120,
                  controls: !1,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                },
                o.createElement("source", { src: t.dataUrl }),
              ),
            )
          : o.createElement(
              "div",
              {
                className: P().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
              },
              o.createElement(
                "span",
                { className: P().PreviewImgInfo },
                t.width,
                " x ",
                t.height,
              ),
            );
      }
      function N(e) {
        const { asset: t, closeModal: a } = e;
        return o.createElement(
          w.o0,
          { bAlertDialog: !0, closeModal: a },
          o.createElement(
            "video",
            { controls: !0, autoPlay: !0, loop: !0, muted: !0 },
            o.createElement("source", { src: t.dataUrl }),
          ),
        );
      }
      function O(e) {
        const t = [],
          a = new Array();
        for (const t of e) {
          if (25 == t) continue;
          const e = (0, g.we)("#Language_" + (0, l.Lg)(t));
          a.push({ label: e, data: t });
        }
        return (
          a.sort((e, t) => e.label.localeCompare(t.label)),
          a.forEach((e) => t.push({ label: e.label, data: e.data })),
          a
        );
      }
    },
    99637: (e, t, a) => {
      "use strict";
      a.d(t, { K: () => D });
      var n = a(90626),
        r = a(92298),
        o = a.n(r),
        l = a(44894),
        i = a(44165),
        s = a(95695),
        m = a.n(s),
        c = a(52038),
        d = a(61859),
        u = a(32754),
        g = a(12916),
        p = a.n(g),
        f = a(87937),
        E = a.n(f);
      const C = "hh:mm a",
        v = "HH:mm";
      function D(e) {
        const {
          nLatestTime: t,
          nEarliestTime: a,
          fnGetTimeToUpdate: r,
          onError: s,
          strAlsoShowTimeZone: g,
          disabled: f,
          bNoDefaultDate: D,
          className: h,
          strDescToolTip: A,
          strDescription: _,
          bShowTimeZone: b,
          strInvalidDateTimeLocalizedMsg: y,
          fnIsValidDateTime: S,
          bWeekdaysOnly: U,
          fnSetTimeToUpdate: P,
          bForce24HourFormat: k,
        } = e;
        let x =
          (function () {
            const e = E()("2025-01-14T13:00:00");
            return e.format("LT").toLowerCase().includes("13");
          })() || k
            ? v
            : C;
        const L = r(),
          [B, N] = n.useState(L > 0 ? E()(1e3 * L) : null),
          [O, G] = n.useState(),
          [R, F] = n.useState(),
          H = (function (e, t, a, r, o) {
            const l = r && r(),
              i = t && !I(t).isValid(),
              s = e && !T(e).isValid();
            let m = null;
            (s || i || "string" == typeof l || !1 === l) &&
              ((m = (0, d.we)(
                a || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              s
                ? (m = (0, d.we)("#DateTimePicker_Time_CannotParse"))
                : i
                  ? (m = (0, d.we)("#DateTimePicker_Date_CannotParse"))
                  : "string" == typeof l && (m = l));
            return (
              n.useEffect(() => {
                o && o(m);
              }, [m, o]),
              m
            );
          })(O, R, y, S, s),
          W = !s && H;
        let z, M;
        if (t && a && t == a && a > i.HD.GetTimeNowWithOverride()) {
          const e = E().unix(a);
          (z = {
            hours: { max: e.hour(), min: e.hour(), step: 0 },
            minutes: { max: e.minute(), min: e.minute(), step: 0 },
            seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
            milliseconds: { max: 0, min: 0, step: 0 },
          }),
            (x = v);
        }
        L || !a || D || (M = E().unix(a));
        const V = E().tz.guess(),
          Y = E().unix(L).tz(V),
          Z = !!g && V != g && E().unix(L).tz(g),
          {
            fnOnInput: q,
            fnOnInputBlur: j,
            fnOnChange: J,
          } = w(
            I,
            (e) => {
              if (f) return;
              F(null);
              const t = r(),
                a = E().unix(t || i.HD.GetTimeNowWithOverride());
              (e = e.clone()).hour(a.hour()),
                e.minute(a.minute()),
                e.second(0),
                P(e.unix()),
                N(e);
            },
            F,
          ),
          {
            fnOnInput: Q,
            fnOnInputBlur: K,
            fnOnChange: X,
          } = w(
            T,
            (e) => {
              if (f) return;
              G(null);
              let t = r(),
                n = 0;
              if (t) {
                const a = E().unix(t);
                (e = e.clone()).year(a.year()),
                  e.month(a.month()),
                  e.date(a.date()),
                  (n = e.unix());
              } else {
                n =
                  E().unix(a).hour(0).second(0).minutes(0).unix() +
                  3600 * e.hour() +
                  60 * e.minutes();
              }
              P(n), N(E().unix(n));
            },
            G,
          );
        return n.createElement(
          "div",
          { className: (0, c.A)(p().EventTimeSection, h) },
          n.createElement(
            "div",
            { className: (0, c.A)(p().EventTimeTitle, "DialogLabel") },
            n.createElement(
              u.he,
              { toolTipContent: A, direction: "top" },
              Boolean(_) && n.createElement("span", null, _),
            ),
            W &&
              n.createElement(
                "span",
                { className: p().DateErrorCtn },
                n.createElement("img", { src: l.A }),
                W,
              ),
          ),
          n.createElement(
            "div",
            { className: m().FlexRowContainer },
            n.createElement(
              "div",
              { className: (0, c.A)(m().InputBorder, p().TimeBlock) },
              n.createElement(o(), {
                onChange: J,
                timeFormat: !1,
                value: null != R ? R : B,
                isValidDate: (e) =>
                  !f &&
                  (function (e, t, a, n) {
                    const r = E().unix(e).hour(0).seconds(0).minute(0);
                    let o = n.unix() >= r.unix();
                    if (o && t && t >= e) {
                      const e = E().unix(t).hour(23).minute(59).seconds(59);
                      o = n.unix() <= e.unix();
                    }
                    o &&
                      a &&
                      ((0 != n.weekday() && 6 != n.weekday()) || (o = !1));
                    return o;
                  })(a, t, U, e),
                initialValue: M,
                inputProps: {
                  placeholder: (0, d.we)("#DateTimePicker_Enter_Date"),
                  className: (0, c.A)(
                    p().DateWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: f,
                  onChange: (e) => q(e.currentTarget.value),
                  onBlur: (e) => j(e.currentTarget.value),
                },
              }),
              !!Z &&
                n.createElement(
                  "div",
                  { className: p().PacificTimeHint },
                  Z.format("L"),
                ),
            ),
            n.createElement(
              "div",
              { className: (0, c.A)(m().InputBorder, p().TimeBlock) },
              n.createElement(o(), {
                onChange: X,
                dateFormat: !1,
                timeFormat: x,
                timeConstraints: z,
                value: null != O ? O : B,
                inputProps: {
                  placeholder: (0, d.we)("#DateTimePicker_Enter_Time"),
                  className: (0, c.A)(
                    p().TimeWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: f,
                  onChange: (e) => Q(e.currentTarget.value),
                  onBlur: (e) => K(e.currentTarget.value),
                },
              }),
              !!Z &&
                n.createElement(
                  "div",
                  { className: p().PacificTimeHint },
                  Z.format("LT"),
                ),
            ),
            b &&
              n.createElement(
                "div",
                null,
                n.createElement(
                  "div",
                  { className: p().TimeZone },
                  Y.zoneAbbr(),
                ),
                !!Z &&
                  n.createElement(
                    "div",
                    { className: p().TimeZone },
                    Z.zoneAbbr(),
                  ),
              ),
          ),
          Boolean(z) &&
            n.createElement(
              "div",
              null,
              (0, d.we)("#DateTimePicker_DateTime_Fixed"),
            ),
        );
      }
      function w(e, t, a) {
        const [r, o] = n.useState(!1);
        return {
          fnOnInput: (e) => {
            a(e), o(!0);
          },
          fnOnInputBlur: (a) => {
            if (r) {
              const n = e(a);
              n.isValid() && t(n);
            }
            o(!1);
          },
          fnOnChange: (a) => {
            if (!r)
              if ("string" == typeof a) {
                const n = e(a);
                n.isValid() && t(n);
              } else t(a);
          },
        };
      }
      function I(e) {
        return E()(
          e,
          (function () {
            const e = E()("2025-01-14").format("L").split(/[-/.]/),
              t = e.indexOf("14");
            return e.indexOf("01") < t;
          })()
            ? "M/D/YYYY"
            : "D/M/YYYY",
          !1,
        );
      }
      function T(e) {
        return E()(e, [C, v], !1);
      }
    },
    27650: (e, t, a) => {
      "use strict";
      a.d(t, { Ss: () => l, hk: () => i });
      var n = a(90626),
        r = a(72739),
        o = a(56011);
      function l(e, t) {
        const a = n.useRef(),
          o = n.useCallback(
            (t) => {
              t.currentTarget.files.length > 0 &&
                (e(t.currentTarget.files), (t.currentTarget.value = ""));
            },
            [e],
          ),
          l = n.useCallback(() => a.current.click(), []);
        return [
          r.createPortal(
            n.createElement(
              "form",
              { onSubmit: s, style: { display: "none" } },
              n.createElement("input", {
                ...t,
                type: "file",
                ref: a,
                onChange: o,
              }),
            ),
            window.document.body,
          ),
          l,
        ];
      }
      function i(e) {
        const [t, a] = n.useState(!1);
        return [
          {
            onDragEnter: n.useCallback((e) => {
              ((e.dataTransfer.files && e.dataTransfer.files[0]) ||
                (e.dataTransfer.types && "Files" == e.dataTransfer.types[0])) &&
                a(!0);
            }, []),
            onDragLeave: n.useCallback((e) => {
              o.NO(e) && a(!1);
            }, []),
            onDragEnd: n.useCallback(() => a(!1), []),
            onDragOver: t ? s : void 0,
            onDrop: n.useCallback(
              (t) => {
                t.dataTransfer.files?.length &&
                  (e(t.dataTransfer.files, t),
                  t.preventDefault(),
                  t.stopPropagation()),
                  a(!1);
              },
              [e],
            ),
          },
          t,
        ];
      }
      function s(e) {
        e.preventDefault();
      }
    },
    44894: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);

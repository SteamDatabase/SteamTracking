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
    42027: (e, t, a) => {
      "use strict";
      a.d(t, { Gr: () => F, O9: () => O });
      var n = a(65946),
        r = a(75844),
        l = a(90626),
        i = a(22837),
        o = a(2160),
        s = a(64953),
        m = a(69343),
        c = a(63556),
        d = a(16676),
        u = a(52038),
        g = a(61859),
        p = a(27650),
        f = a(71647),
        E = a.n(f);
      function w(e) {
        const {
            onDropFiles: t,
            renderDesciption: a,
            elAdditonalButtons: n,
            strOverrideDragAndDropText: r,
          } = e,
          [i, o] = (0, p.hk)(t),
          [s, m] = (0, p.Ss)(t, {
            accept: "image/png, image/jpeg, image/gif, image/webp",
            multiple: !0,
          });
        return l.createElement(
          "div",
          {
            ...i,
            className: (0, u.A)(
              o ? E().DragAndDropContainerDragging : E().DragAndDropContainer,
              "DragAndDropContainer",
            ),
          },
          Boolean(a) && a(),
          l.createElement(
            "div",
            null,
            r || (0, g.we)("#ImagePicker_DragAndDrop"),
          ),
          l.createElement(
            "div",
            { className: E().ImageUploadBar },
            s,
            l.createElement(
              "label",
              { onClick: m },
              l.createElement(
                "span",
                null,
                (0, g.we)("#ImagePicker_OrBrowse"),
                " ",
              ),
              l.createElement(
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
        I = a.n(v),
        D = a(9154),
        T = a(738),
        A = a(64641),
        C = a.n(A),
        h = a(12155),
        U = a(22797),
        P = a(68797),
        b = a(56011),
        y = a(66331),
        _ = a(27344),
        k = a.n(_),
        x = a(78511);
      function O(e) {
        const {
            imageUploader: t,
            fnUploadComplete: a,
            strOverrideDragAndDropText: r,
            forceResolution: i,
            elAdditonalButtons: o,
            rgRealmList: s,
          } = e,
          [d, u] = (0, n.q3)(() => [
            t.GetUploadImages(),
            c.O.Get().GetCurEditLanguage(),
          ]),
          p = l.useCallback(
            async (e) => {
              let a = Array.from(e),
                n = !0;
              for (let e = 0; e < a.length; e++) {
                const r = a[e],
                  { language: i } = (0, m.jj)(r?.name, u);
                try {
                  const a = (0, m.PD)(i, u, s);
                  (n = await t.AddImageForLanguage(r, a)),
                    n ||
                      (console.error(
                        "ImageUploaderPanel.OnDropFiles: failed on i=" +
                          e +
                          " file=" +
                          r.name,
                      ),
                      (0, T.pg)(
                        l.createElement(D.KG, {
                          strDescription: (0, g.we)(
                            "#ImagePicker_Error",
                            r.name,
                          ),
                        }),
                        window,
                      ));
                } catch (e) {
                  let t = (0, P.H)(e);
                  console.error(
                    "ImageUploaderPanel.OnDropFiles: " + t.strErrorMsg,
                    t,
                  ),
                    (0, T.pg)(
                      l.createElement(D.KG, {
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
          f = l.useMemo(
            () =>
              o instanceof Array
                ? o
                : [
                    l.createElement(
                      l.Fragment,
                      { key: "elAdditonalButtons" },
                      o,
                    ),
                  ],
            [o],
          );
        (0, n.q3)(() =>
          d.map((e) => ({ a: e.GetCurrentImageOption(), b: e.language })),
        );
        return l.createElement(
          w,
          {
            onDropFiles: p,
            elAdditonalButtons: f,
            strOverrideDragAndDropText: r,
          },
          l.createElement(
            l.Fragment,
            null,
            l.createElement(
              "div",
              { className: k().UploadPreviewCtn },
              d.map((e) =>
                l.createElement(B, {
                  key: "arttabupload_" + e.filename + "_" + e.uploadTime,
                  asset: e,
                  forceResolution: i,
                  fnOnRemove: () => t.DeleteUploadImage(e),
                  languageRealms: s,
                }),
              ),
            ),
          ),
          l.createElement(N, {
            imageUploader: t,
            fnOnUploadImageRequested: async () => {
              const e = await t.UploadAllImages(i);
              a?.(e);
            },
          }),
        );
      }
      function N(e) {
        const { imageUploader: t, fnOnUploadImageRequested: a } = e,
          [r] = (0, n.q3)(() => [t.GetUploadImages()]),
          i = r.some((e) => "pending" == e.status),
          o = r.some(
            (e) =>
              "waiting" == e.status ||
              "uploading" == e.status ||
              "processing" == e.status,
          );
        return l.createElement(
          "div",
          {
            style: { display: "flex" },
            className: k().UploadPreviewButtonsCtn,
          },
          Boolean(r.length) &&
            l.createElement(
              d.$n,
              { style: { margin: "8px" }, onClick: a, disabled: !i },
              (0, g.we)("#ImageUpload_Upload"),
            ),
          Boolean(r.length) &&
            l.createElement(
              d.$n,
              { style: { margin: "8px" }, onClick: t.ClearImages, disabled: o },
              (0, g.we)("#ImageUpload_Clear"),
            ),
        );
      }
      const B = (0, r.PA)(function (e) {
        const { asset: t, fnOnRemove: a, languageRealms: n } = e,
          r = t.ImageOptions?.map((e) => {
            let a,
              n = e?.fnGetLabelText();
            e.bEnforceDimensions && (n += ` - ${e.width}x${e.height}`),
              (t.BIsOriginalMinimumDimensions(e) &&
                t.FileTypeMatchesImageTypes(e)) ||
                (a = k().ImageDimensionTooSmall);
            return { label: n, data: e, strOptionClass: a };
          }).filter((e) => !e.data.bHiddenFromDropdown),
          i = {
            pending: (0, g.we)("#ImageUpload_Pending"),
            waiting: (0, g.we)("#ImageUpload_Waiting"),
            uploading: (0, g.we)("#ImageUpload_Uploading"),
            processing: (0, g.we)("#ImageUpload_Processing"),
            success: (0, g.we)("#ImageUpload_SuccessCard"),
            failed: (0, g.we)("#ImageUpload_Failed"),
          },
          m = t.BSupportsLanguages()
            ? F(g.A0.GetLanguageListForRealms(n ?? [o.TU.k_ESteamRealmGlobal]))
            : null,
          c = t.IsValidAssetType(e.forceResolution, e.forceFileType),
          p = "pending" == t.status;
        let f = i[t.status];
        "pending" == t.status &&
          (c.needsCrop
            ? (f = (0, g.we)("#ImageUpload_NeedsCrop"))
            : c.error && (f = (0, g.we)("#ImageUpload_Invalid")));
        let E;
        const w = t.GetCurrentImageOption();
        w && (E = r?.find((e) => e.data.sKey == w.sKey)?.data);
        E || (E = r?.[0]?.data);
        return l.createElement(
          "div",
          { className: k().UploadPreview },
          l.createElement(
            "div",
            { className: k().UploadPreviewDelete, onClick: () => a(t) },
            l.createElement(h.sED, null),
          ),
          l.createElement(S, { asset: t }),
          m &&
            l.createElement(d.m, {
              strDropDownClassName: I().DropDownScroll,
              rgOptions: m,
              selectedOption: t.language,
              onChange: (e) => (t.language = e.data),
              disabled: !p,
            }),
          r &&
            r?.length > 1 &&
            l.createElement(d.m, {
              label: t.GetImageOptionLabel(),
              rgOptions: r,
              selectedOption: E,
              onChange: (e) => t.SetCurrentImageOption(e.data),
              disabled: !p,
            }),
          p &&
            c.warnings?.map((e) =>
              l.createElement(
                "div",
                { key: e, className: k().UploadPreviewWarning },
                e,
              ),
            ),
          p &&
            c.messages?.map((e) =>
              l.createElement(
                "div",
                { key: e, className: k().UploadPreviewMessage },
                e,
              ),
            ),
          l.createElement(
            "div",
            {
              className: (0, u.A)({
                [I().FlexColumnContainer]: !0,
                [k().UploadPreviewError]: "failed" == t.status,
              }),
            },
            f,
            (0, x.o)(t.status) &&
              l.createElement(
                "div",
                { className: C().FlexCenter },
                l.createElement(U.t, { size: "small" }),
              ),
          ),
          l.createElement(
            "div",
            { className: k().UploadPreviewError },
            t.message,
          ),
          p &&
            c.error &&
            l.createElement(
              "div",
              { className: k().UploadPreviewError },
              c.error,
            ),
          p &&
            c.needsCrop &&
            l.createElement(
              d.jn,
              {
                onClick: () =>
                  ((t) => {
                    if (t instanceof s.M7) {
                      t.ResetImage();
                      const a = window,
                        n = l.createElement(y.q, {
                          ownerWin: a,
                          uploadFile: t,
                          forceResolution: e.forceResolution,
                          fileType: e.forceFileType || 3,
                        });
                      (0, T.HT)(n, a, "CropModal", {
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
      function S(e) {
        const { asset: t } = e;
        return t.BIsVideo()
          ? l.createElement(
              "div",
              {
                className: k().PreviewImgCtn,
                onClick: (e) => {
                  (0, T.pg)(l.createElement(G, { asset: t }), (0, b.uX)(e));
                },
              },
              l.createElement(
                "span",
                { className: k().PreviewImgInfo },
                t.width,
                " x ",
                t.height,
              ),
              l.createElement(
                "video",
                {
                  height: 120,
                  controls: !1,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                },
                l.createElement("source", { src: t.dataUrl }),
              ),
            )
          : l.createElement(
              "div",
              {
                className: k().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
              },
              l.createElement(
                "span",
                { className: k().PreviewImgInfo },
                t.width,
                " x ",
                t.height,
              ),
            );
      }
      function G(e) {
        const { asset: t, closeModal: a } = e;
        return l.createElement(
          D.o0,
          { bAlertDialog: !0, closeModal: a },
          l.createElement(
            "video",
            { controls: !0, autoPlay: !0, loop: !0, muted: !0 },
            l.createElement("source", { src: t.dataUrl }),
          ),
        );
      }
      function F(e) {
        const t = [],
          a = new Array();
        for (const t of e) {
          if (25 == t) continue;
          const e = (0, g.we)("#Language_" + (0, i.Lg)(t));
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
      a.d(t, { K: () => I });
      var n = a(90626),
        r = a(92298),
        l = a.n(r),
        i = a(44894),
        o = a(44165),
        s = a(95695),
        m = a.n(s),
        c = a(52038),
        d = a(61859),
        u = a(32754),
        g = a(12916),
        p = a.n(g),
        f = a(87937),
        E = a.n(f);
      const w = "hh:mm a",
        v = "HH:mm";
      function I(e) {
        const {
          nLatestTime: t,
          nEarliestTime: a,
          fnGetTimeToUpdate: r,
          onError: s,
          strAlsoShowTimeZone: g,
          disabled: f,
          bNoDefaultDate: I,
          className: C,
          strDescToolTip: h,
          strDescription: U,
          bShowTimeZone: P,
          strInvalidDateTimeLocalizedMsg: b,
          fnIsValidDateTime: y,
          bWeekdaysOnly: _,
          fnSetTimeToUpdate: k,
          bForce24HourFormat: x,
        } = e;
        let O =
          (function () {
            const e = E()("2025-01-14T13:00:00");
            return e.format("LT").toLowerCase().includes("13");
          })() || x
            ? v
            : w;
        const N = r(),
          [B, S] = n.useState(N > 0 ? E()(1e3 * N) : null),
          [G, F] = n.useState(),
          [R, L] = n.useState(),
          W = (function (e, t, a, r, l) {
            const i = r && r(),
              o = t && !T(t).isValid(),
              s = e && !A(e).isValid();
            let m = null;
            (s || o || "string" == typeof i || !1 === i) &&
              ((m = (0, d.we)(
                a || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              s
                ? (m = (0, d.we)("#DateTimePicker_Time_CannotParse"))
                : o
                  ? (m = (0, d.we)("#DateTimePicker_Date_CannotParse"))
                  : "string" == typeof i && (m = i));
            return (
              n.useEffect(() => {
                l && l(m);
              }, [m, l]),
              m
            );
          })(G, R, b, y, s),
          M = !s && W;
        let V, Y;
        if (t && a && t == a && a > o.HD.GetTimeNowWithOverride()) {
          const e = E().unix(a);
          (V = {
            hours: { max: e.hour(), min: e.hour(), step: 0 },
            minutes: { max: e.minute(), min: e.minute(), step: 0 },
            seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
            milliseconds: { max: 0, min: 0, step: 0 },
          }),
            (O = v);
        }
        N || !a || I || (Y = E().unix(a));
        const Z = E().tz.guess(),
          z = E().unix(N).tz(Z),
          H = !!g && Z != g && E().unix(N).tz(g),
          {
            fnOnInput: q,
            fnOnInputBlur: j,
            fnOnChange: J,
          } = D(
            T,
            (e) => {
              if (f) return;
              L(null);
              const t = r(),
                a = E().unix(t || o.HD.GetTimeNowWithOverride());
              (e = e.clone()).hour(a.hour()),
                e.minute(a.minute()),
                e.second(0),
                k(e.unix()),
                S(e);
            },
            L,
          ),
          {
            fnOnInput: Q,
            fnOnInputBlur: K,
            fnOnChange: X,
          } = D(
            A,
            (e) => {
              if (f) return;
              F(null);
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
              k(n), S(E().unix(n));
            },
            F,
          );
        return n.createElement(
          "div",
          { className: (0, c.A)(p().EventTimeSection, C) },
          n.createElement(
            "div",
            { className: (0, c.A)(p().EventTimeTitle, "DialogLabel") },
            n.createElement(
              u.he,
              { toolTipContent: h, direction: "top" },
              Boolean(U) && n.createElement("span", null, U),
            ),
            M &&
              n.createElement(
                "span",
                { className: p().DateErrorCtn },
                n.createElement("img", { src: i.A }),
                M,
              ),
          ),
          n.createElement(
            "div",
            { className: m().FlexRowContainer },
            n.createElement(
              "div",
              { className: (0, c.A)(m().InputBorder, p().TimeBlock) },
              n.createElement(l(), {
                onChange: J,
                timeFormat: !1,
                value: null != R ? R : B,
                isValidDate: (e) =>
                  !f &&
                  (function (e, t, a, n) {
                    const r = E().unix(e).hour(0).seconds(0).minute(0);
                    let l = n.unix() >= r.unix();
                    if (l && t && t >= e) {
                      const e = E().unix(t).hour(23).minute(59).seconds(59);
                      l = n.unix() <= e.unix();
                    }
                    l &&
                      a &&
                      ((0 != n.weekday() && 6 != n.weekday()) || (l = !1));
                    return l;
                  })(a, t, _, e),
                initialValue: Y,
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
              !!H &&
                n.createElement(
                  "div",
                  { className: p().PacificTimeHint },
                  H.format("L"),
                ),
            ),
            n.createElement(
              "div",
              { className: (0, c.A)(m().InputBorder, p().TimeBlock) },
              n.createElement(l(), {
                onChange: X,
                dateFormat: !1,
                timeFormat: O,
                timeConstraints: V,
                value: null != G ? G : B,
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
              !!H &&
                n.createElement(
                  "div",
                  { className: p().PacificTimeHint },
                  H.format("LT"),
                ),
            ),
            P &&
              n.createElement(
                "div",
                null,
                n.createElement(
                  "div",
                  { className: p().TimeZone },
                  z.zoneAbbr(),
                ),
                !!H &&
                  n.createElement(
                    "div",
                    { className: p().TimeZone },
                    H.zoneAbbr(),
                  ),
              ),
          ),
          Boolean(V) &&
            n.createElement(
              "div",
              null,
              (0, d.we)("#DateTimePicker_DateTime_Fixed"),
            ),
        );
      }
      function D(e, t, a) {
        const [r, l] = n.useState(!1);
        return {
          fnOnInput: (e) => {
            a(e), l(!0);
          },
          fnOnInputBlur: (a) => {
            if (r) {
              const n = e(a);
              n.isValid() && t(n);
            }
            l(!1);
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
      function T(e) {
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
      function A(e) {
        return E()(e, [w, v], !1);
      }
    },
    27650: (e, t, a) => {
      "use strict";
      a.d(t, { Ss: () => i, hk: () => o });
      var n = a(90626),
        r = a(72739),
        l = a(56011);
      function i(e, t) {
        const a = n.useRef(),
          l = n.useCallback(
            (t) => {
              t.currentTarget.files.length > 0 &&
                (e(t.currentTarget.files), (t.currentTarget.value = ""));
            },
            [e],
          ),
          i = n.useCallback(() => a.current.click(), []);
        return [
          r.createPortal(
            n.createElement(
              "form",
              { onSubmit: s, style: { display: "none" } },
              n.createElement("input", {
                ...t,
                type: "file",
                ref: a,
                onChange: l,
              }),
            ),
            window.document.body,
          ),
          i,
        ];
      }
      function o(e) {
        const [t, a] = n.useState(!1);
        return [
          {
            onDragEnter: n.useCallback((e) => {
              ((e.dataTransfer.files && e.dataTransfer.files[0]) ||
                (e.dataTransfer.types && "Files" == e.dataTransfer.types[0])) &&
                a(!0);
            }, []),
            onDragLeave: n.useCallback((e) => {
              l.NO(e) && a(!1);
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

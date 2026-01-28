/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3506],
  {
    57361: (e) => {
      e.exports = {
        EyeDropperCtn: "_2cT7wst-UhvDbRqPOUFLHl",
        EyeDropperBtn: "_1SFKrl2Gt5OR-Nop7cqHIP",
        ColorPickerCtn: "_3qTvksxeNcdLlXlVi5T__3",
      };
    },
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
    64046: (e, t, a) => {
      "use strict";
      a.d(t, { s: () => d });
      var n = a(90626),
        r = a(43465),
        l = a(16676),
        o = a(4869),
        i = a(32754),
        s = a(61859),
        c = a(57361),
        m = a.n(c);
      function d(e) {
        const { color: t, onChange: a, strTitle: c, disableAlpha: d } = e,
          [u, p] = (0, n.useState)(() => t || "rgba(255, 255, 255, 1)"),
          g = (0, n.useCallback)(async () => {
            if ("EyeDropper" in window)
              try {
                const e = new window.EyeDropper(),
                  t = await e.open(),
                  n = (function (e) {
                    const t = parseInt(e.slice(1), 16);
                    return `rgba(${(t >> 16) & 255}, ${(t >> 8) & 255}, ${255 & t}, 1)`;
                  })(t.sRGBHex);
                p(n), a(n);
              } catch (e) {
                console.warn((0, s.we)("#Sale_EyeDropperFailed"), e);
              }
            else alert((0, s.we)("#Sale_EyeDropperError"));
          }, [a]);
        return n.createElement(
          "div",
          null,
          Boolean(c) && n.createElement(l.JU, null, c),
          n.createElement(r.xk, {
            onChange: (e) => {
              const t = (function (e) {
                return `rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}, ${e.rgb.a})`;
              })(e);
              p(t), a(t);
            },
            color: u,
            disableAlpha: d,
            className: m().ColorPickerCtn,
          }),
          n.createElement(
            "div",
            { className: m().EyeDropperCtn },
            n.createElement(
              i.Gq,
              { toolTipContent: (0, s.we)("#Sale_BackgroundColorPicker") },
              n.createElement(
                l.$n,
                { className: m().EyeDropperBtn, onClick: g },
                n.createElement(o.O7b, null),
              ),
            ),
          ),
        );
      }
    },
    42027: (e, t, a) => {
      "use strict";
      a.d(t, { Gr: () => F, O9: () => N });
      var n = a(65946),
        r = a(75844),
        l = a(90626),
        o = a(22837),
        i = a(2160),
        s = a(64953),
        c = a(69343),
        m = a(63556),
        d = a(16676),
        u = a(52038),
        p = a(61859),
        g = a(27650),
        E = a(71647),
        f = a.n(E);
      function w(e) {
        const {
            onDropFiles: t,
            renderDesciption: a,
            elAdditonalButtons: n,
            elOverrideDragAndDropText: r,
          } = e,
          [o, i] = (0, g.hk)(t),
          [s, c] = (0, g.Ss)(t, {
            accept: "image/png, image/jpeg, image/gif, image/webp",
            multiple: !0,
          });
        return l.createElement(
          "div",
          {
            ...o,
            className: (0, u.A)(
              i ? f().DragAndDropContainerDragging : f().DragAndDropContainer,
              "DragAndDropContainer",
            ),
          },
          Boolean(a) && a(),
          l.createElement(
            "div",
            null,
            r || (0, p.we)("#ImagePicker_DragAndDrop"),
          ),
          l.createElement(
            "div",
            { className: f().ImageUploadBar },
            s,
            l.createElement(
              "label",
              { onClick: c },
              l.createElement(
                "span",
                null,
                (0, p.we)("#ImagePicker_OrBrowse"),
                " ",
              ),
              l.createElement(
                "span",
                { className: f().SelectImageButton },
                (0, p.we)("#selectimage_select_file"),
              ),
            ),
          ),
          n,
          e.children,
        );
      }
      var D = a(95695),
        v = a.n(D),
        I = a(9154),
        C = a(738),
        T = a(64641),
        A = a.n(T),
        h = a(12155),
        b = a(22797),
        _ = a(68797),
        y = a(56011),
        U = a(66331),
        P = a(27344),
        k = a.n(P),
        x = a(78511);
      function N(e) {
        const {
            imageUploader: t,
            fnUploadComplete: a,
            elOverrideDragAndDropText: r,
            forceResolution: o,
            elAdditonalButtons: i,
            rgRealmList: s,
          } = e,
          [d, u] = (0, n.q3)(() => [
            t.GetUploadImages(),
            m.O.Get().GetCurEditLanguage(),
          ]),
          g = l.useCallback(
            async (e) => {
              let a = Array.from(e),
                n = !0;
              for (let e = 0; e < a.length; e++) {
                const r = a[e],
                  { language: o } = (0, c.jj)(r?.name, u);
                try {
                  const a = (0, c.PD)(o, u, s);
                  (n = await t.AddImageForLanguage(r, a)),
                    n ||
                      (console.error(
                        "ImageUploaderPanel.OnDropFiles: failed on i=" +
                          e +
                          " file=" +
                          r.name,
                      ),
                      (0, C.pg)(
                        l.createElement(I.KG, {
                          strDescription: (0, p.we)(
                            "#ImagePicker_Error",
                            r.name,
                          ),
                        }),
                        window,
                      ));
                } catch (e) {
                  let t = (0, _.H)(e);
                  console.error(
                    "ImageUploaderPanel.OnDropFiles: " + t.strErrorMsg,
                    t,
                  ),
                    (0, C.pg)(
                      l.createElement(I.KG, {
                        strDescription: (0, p.we)(
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
          E = l.useMemo(
            () =>
              i instanceof Array
                ? i
                : [
                    l.createElement(
                      l.Fragment,
                      { key: "elAdditonalButtons" },
                      i,
                    ),
                  ],
            [i],
          );
        (0, n.q3)(() =>
          d.map((e) => ({ a: e.GetCurrentImageOption(), b: e.language })),
        );
        return l.createElement(
          w,
          {
            onDropFiles: g,
            elAdditonalButtons: E,
            elOverrideDragAndDropText: r,
          },
          l.createElement(
            l.Fragment,
            null,
            l.createElement(
              "div",
              { className: k().UploadPreviewCtn },
              d.map((e) =>
                l.createElement(S, {
                  key: "arttabupload_" + e.filename + "_" + e.uploadTime,
                  asset: e,
                  forceResolution: o,
                  fnOnRemove: () => t.DeleteUploadImage(e),
                  languageRealms: s,
                }),
              ),
            ),
          ),
          l.createElement(O, {
            imageUploader: t,
            fnOnUploadImageRequested: async () => {
              const e = await t.UploadAllImages(o);
              a?.(e);
            },
          }),
        );
      }
      function O(e) {
        const { imageUploader: t, fnOnUploadImageRequested: a } = e,
          [r] = (0, n.q3)(() => [t.GetUploadImages()]),
          o = r.some((e) => "pending" == e.status),
          i = r.some(
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
              { style: { margin: "8px" }, onClick: a, disabled: !o },
              (0, p.we)("#ImageUpload_Upload"),
            ),
          Boolean(r.length) &&
            l.createElement(
              d.$n,
              { style: { margin: "8px" }, onClick: t.ClearImages, disabled: i },
              (0, p.we)("#ImageUpload_Clear"),
            ),
        );
      }
      const S = (0, r.PA)(function (e) {
        const { asset: t, fnOnRemove: a, languageRealms: n } = e,
          r = t.ImageOptions?.map((e) => {
            let a,
              n,
              r = e?.fnGetLabelText();
            e.bEnforceDimensions && (r += ` - ${e.width}x${e.height}`),
              e.bDeprecated &&
                ((r += ` ${(0, p.we)("#ImageUpload_Deprecated")}`),
                (a = (0, p.we)("#ImageUpload_Deprecated_ttip"))),
              (t.BIsOriginalMinimumDimensions(e) &&
                t.FileTypeMatchesImageTypes(e)) ||
                (n = k().ImageDimensionTooSmall);
            return { label: r, data: e, strOptionClass: n, tooltip: a };
          }).filter((e) => !e.data.bHiddenFromDropdown),
          o = {
            pending: (0, p.we)("#ImageUpload_Pending"),
            waiting: (0, p.we)("#ImageUpload_Waiting"),
            uploading: (0, p.we)("#ImageUpload_Uploading"),
            processing: (0, p.we)("#ImageUpload_Processing"),
            success: (0, p.we)("#ImageUpload_SuccessCard"),
            failed: (0, p.we)("#ImageUpload_Failed"),
          },
          c = t.BSupportsLanguages()
            ? F(p.A0.GetLanguageListForRealms(n ?? [i.TU.k_ESteamRealmGlobal]))
            : null,
          m = t.IsValidAssetType(e.forceResolution, e.forceFileType),
          g = "pending" == t.status;
        let E = o[t.status];
        "pending" == t.status &&
          (m.needsCrop
            ? (E = (0, p.we)("#ImageUpload_NeedsCrop"))
            : m.error && (E = (0, p.we)("#ImageUpload_Invalid")));
        let f;
        const w = t.GetCurrentImageOption();
        w && (f = r?.find((e) => e.data.sKey == w.sKey)?.data);
        f || (f = r?.[0]?.data);
        return l.createElement(
          "div",
          { className: k().UploadPreview },
          l.createElement(
            "div",
            { className: k().UploadPreviewDelete, onClick: () => a(t) },
            l.createElement(h.sED, null),
          ),
          l.createElement(B, { asset: t }),
          c &&
            l.createElement(d.m, {
              strDropDownClassName: v().DropDownScroll,
              rgOptions: c,
              selectedOption: t.language,
              onChange: (e) => (t.language = e.data),
              disabled: !g,
            }),
          r &&
            r?.length > 1 &&
            l.createElement(d.m, {
              label: t.GetImageOptionLabel(),
              rgOptions: r,
              selectedOption: f,
              onChange: (e) => t.SetCurrentImageOption(e.data),
              disabled: !g,
            }),
          g &&
            m.warnings?.map((e, t) =>
              l.createElement(
                "div",
                { key: `warning${t}`, className: k().UploadPreviewWarning },
                e,
              ),
            ),
          g &&
            m.messages?.map((e, t) =>
              l.createElement(
                "div",
                { key: `message${t}`, className: k().UploadPreviewMessage },
                e,
              ),
            ),
          l.createElement(
            "div",
            {
              className: (0, u.A)({
                [v().FlexColumnContainer]: !0,
                [k().UploadPreviewError]: "failed" == t.status,
              }),
            },
            E,
            (0, x.o)(t.status) &&
              l.createElement(
                "div",
                { className: A().FlexCenter },
                l.createElement(b.t, { size: "small" }),
              ),
          ),
          l.createElement(
            "div",
            { className: k().UploadPreviewError },
            t.message,
          ),
          g &&
            m.error &&
            l.createElement(
              "div",
              { className: k().UploadPreviewError },
              m.error,
            ),
          g &&
            m.needsCrop &&
            l.createElement(
              d.jn,
              {
                onClick: () =>
                  ((t) => {
                    if (t instanceof s.M7) {
                      t.ResetImage();
                      const a = window,
                        n = l.createElement(U.q, {
                          ownerWin: a,
                          uploadFile: t,
                          forceResolution: e.forceResolution,
                          fileType: e.forceFileType || 3,
                        });
                      (0, C.HT)(n, a, "CropModal", {
                        strTitle: (0, p.we)("#ImageUpload_CropModalTitle"),
                      });
                    } else
                      console.log(
                        "ImageUploadEmbeddedDialog trying to crop non image",
                        t.fileType,
                        JSON.stringify(t.GetCurrentImageOption()),
                      );
                  })(t),
              },
              (0, p.we)("#ImageUpload_OpenEditor"),
            ),
        );
      });
      function B(e) {
        const { asset: t } = e;
        return t.BIsVideo()
          ? l.createElement(
              "div",
              {
                className: k().PreviewImgCtn,
                onClick: (e) =>
                  (0, C.pg)(l.createElement(G, { asset: t }), (0, y.uX)(e)),
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
          I.o0,
          { bAlertDialog: !0, closeModal: a, bAllowFullSize: !0 },
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
          const e = (0, p.we)("#Language_" + (0, o.Lg)(t));
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
      a.d(t, { K: () => v });
      var n = a(90626),
        r = a(92298),
        l = a.n(r),
        o = a(44894),
        i = a(44165),
        s = a(95695),
        c = a.n(s),
        m = a(52038),
        d = a(61859),
        u = a(32754),
        p = a(12916),
        g = a.n(p),
        E = a(87937),
        f = a.n(E);
      const w = "hh:mm a",
        D = "HH:mm";
      function v(e) {
        const {
          nLatestTime: t,
          nEarliestTime: a,
          fnGetTimeToUpdate: r,
          onError: s,
          strAlsoShowTimeZone: p,
          disabled: E,
          bNoDefaultDate: v,
          className: A,
          strDescToolTip: h,
          strDescription: b,
          bShowTimeZone: _,
          strInvalidDateTimeLocalizedMsg: y,
          fnIsValidDateTime: U,
          bWeekdaysOnly: P,
          fnSetTimeToUpdate: k,
          bForce24HourFormat: x,
        } = e;
        let N =
          (function () {
            const e = f()("2025-01-14T13:00:00");
            return e.format("LT").toLowerCase().includes("13");
          })() || x
            ? D
            : w;
        const O = r(),
          [S, B] = n.useState(O > 0 ? f()(1e3 * O) : null),
          [G, F] = n.useState(),
          [R, L] = n.useState(),
          W = (function (e, t, a, r, l) {
            const o = r && r(),
              i = t && !C(t).isValid(),
              s = e && !T(e).isValid();
            let c = null;
            (s || i || "string" == typeof o || !1 === o) &&
              ((c = (0, d.we)(
                a || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              s
                ? (c = (0, d.we)("#DateTimePicker_Time_CannotParse"))
                : i
                  ? (c = (0, d.we)("#DateTimePicker_Date_CannotParse"))
                  : "string" == typeof o && (c = o));
            return (
              n.useEffect(() => {
                l && l(c);
              }, [c, l]),
              c
            );
          })(G, R, y, U, s),
          M = !s && W;
        let V, H;
        if (t && a && t == a && a > i.HD.GetTimeNowWithOverride()) {
          const e = f().unix(a);
          (V = {
            hours: { max: e.hour(), min: e.hour(), step: 0 },
            minutes: { max: e.minute(), min: e.minute(), step: 0 },
            seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
            milliseconds: { max: 0, min: 0, step: 0 },
          }),
            (N = D);
        }
        O || !a || v || (H = f().unix(a));
        const Y = f().tz.guess(),
          Z = f().unix(O).tz(Y),
          z = !!p && Y != p && f().unix(O).tz(p),
          {
            fnOnInput: q,
            fnOnInputBlur: j,
            fnOnChange: J,
          } = I(
            C,
            (e) => {
              if (E) return;
              L(null);
              const t = r(),
                a = f().unix(t || i.HD.GetTimeNowWithOverride());
              (e = e.clone()).hour(a.hour()),
                e.minute(a.minute()),
                e.second(0),
                k(e.unix()),
                B(e);
            },
            L,
          ),
          {
            fnOnInput: Q,
            fnOnInputBlur: K,
            fnOnChange: X,
          } = I(
            T,
            (e) => {
              if (E) return;
              F(null);
              let t = r(),
                n = 0;
              if (t) {
                const a = f().unix(t);
                (e = e.clone()).year(a.year()),
                  e.month(a.month()),
                  e.date(a.date()),
                  (n = e.unix());
              } else {
                n =
                  f().unix(a).hour(0).second(0).minutes(0).unix() +
                  3600 * e.hour() +
                  60 * e.minutes();
              }
              k(n), B(f().unix(n));
            },
            F,
          );
        return n.createElement(
          "div",
          { className: (0, m.A)(g().EventTimeSection, A) },
          n.createElement(
            "div",
            { className: (0, m.A)(g().EventTimeTitle, "DialogLabel") },
            n.createElement(
              u.he,
              { toolTipContent: h, direction: "top" },
              Boolean(b) && n.createElement("span", null, b),
            ),
            M &&
              n.createElement(
                "span",
                { className: g().DateErrorCtn },
                n.createElement("img", { src: o.A }),
                M,
              ),
          ),
          n.createElement(
            "div",
            { className: c().FlexRowContainer },
            n.createElement(
              "div",
              { className: (0, m.A)(c().InputBorder, g().TimeBlock) },
              n.createElement(l(), {
                onChange: J,
                timeFormat: !1,
                value: null != R ? R : S,
                isValidDate: (e) =>
                  !E &&
                  (function (e, t, a, n) {
                    const r = f().unix(e).hour(0).seconds(0).minute(0);
                    let l = n.unix() >= r.unix();
                    if (l && t && t >= e) {
                      const e = f().unix(t).hour(23).minute(59).seconds(59);
                      l = n.unix() <= e.unix();
                    }
                    l &&
                      a &&
                      ((0 != n.weekday() && 6 != n.weekday()) || (l = !1));
                    return l;
                  })(a, t, P, e),
                initialValue: H,
                inputProps: {
                  placeholder: (0, d.we)("#DateTimePicker_Enter_Date"),
                  className: (0, m.A)(
                    g().DateWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: E,
                  onChange: (e) => q(e.currentTarget.value),
                  onBlur: (e) => j(e.currentTarget.value),
                },
              }),
              !!z &&
                n.createElement(
                  "div",
                  { className: g().PacificTimeHint },
                  z.format("L"),
                ),
            ),
            n.createElement(
              "div",
              { className: (0, m.A)(c().InputBorder, g().TimeBlock) },
              n.createElement(l(), {
                onChange: X,
                dateFormat: !1,
                timeFormat: N,
                timeConstraints: V,
                value: null != G ? G : S,
                inputProps: {
                  placeholder: (0, d.we)("#DateTimePicker_Enter_Time"),
                  className: (0, m.A)(
                    g().TimeWidth,
                    "DialogInput",
                    "DialogTextInputBase",
                  ),
                  disabled: E,
                  onChange: (e) => Q(e.currentTarget.value),
                  onBlur: (e) => K(e.currentTarget.value),
                },
              }),
              !!z &&
                n.createElement(
                  "div",
                  { className: g().PacificTimeHint },
                  z.format("LT"),
                ),
            ),
            _ &&
              n.createElement(
                "div",
                null,
                n.createElement(
                  "div",
                  { className: g().TimeZone },
                  Z.zoneAbbr(),
                ),
                !!z &&
                  n.createElement(
                    "div",
                    { className: g().TimeZone },
                    z.zoneAbbr(),
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
      function I(e, t, a) {
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
      function C(e) {
        return f()(
          e,
          (function () {
            const e = f()("2025-01-14").format("L").split(/[-/.]/),
              t = e.indexOf("14");
            return e.indexOf("01") < t;
          })()
            ? "M/D/YYYY"
            : "D/M/YYYY",
          !1,
        );
      }
      function T(e) {
        return f()(e, [w, D], !1);
      }
    },
    27650: (e, t, a) => {
      "use strict";
      a.d(t, { Ss: () => o, hk: () => i });
      var n = a(90626),
        r = a(72739),
        l = a(56011);
      function o(e, t) {
        const a = n.useRef(void 0),
          l = n.useCallback(
            (t) => {
              t.currentTarget.files.length > 0 &&
                (e(t.currentTarget.files), (t.currentTarget.value = ""));
            },
            [e],
          ),
          o = n.useCallback(() => a.current.click(), []);
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
          o,
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

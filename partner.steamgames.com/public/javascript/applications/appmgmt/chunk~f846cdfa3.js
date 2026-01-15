/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4017],
  {
    40139: (e) => {
      e.exports = { profile_color_preview: "_2VqhO10AlkJOsh7sPoqPcp" };
    },
    93542: (e) => {
      e.exports = {
        EditionPickerHr: "_2N7bWzRE2_6yMlW8HoWwKL",
        NeedToPublishNotification: "_1YyjMfNhBo6lWsvunbhkmG",
        EditionsEditorRow: "_1kVAFKlQN-iaGJNQM64lbU",
        ImageProvided: "_3acPE1-7PEV9Fv1BIkpb1d",
        PublishReminder: "_2bw5Zr8a6ik4-NIjVgcZSn",
        TaskDone: "_3cgXyLkVbKXYv6hxcrj0P9",
        EditionsEditorContents: "WKVcCeIwShQXxr0XjInT9",
        ErrorList: "_34AP-LqjTCmVO7oQmBRksn",
        ErrorListItems: "_3OPqG7OUgCU252R-DdB0Qj",
        EditionsEditorDialogButtons: "zHZhZ_cYU43MhqpRkvAuR",
        EditionPicker: "N1f8Ye9Eude7K2vJSL7AZ",
        EditionPickerFilterBox: "WLQyL6JRweNM6PHgWKRaB",
        HiddenColor: "_1YtkUWpJ0G7lnnX5bj8X7_",
        ReleasedColor: "_1_2YmmBAHhhpvApS2NQe-r",
        PrepurchaseColor: "_2o-Djga-h_lkGoTFS-PjlF",
        BetaColor: "_29O7AlK2wwhmKjrCxAPIRk",
        EditionsEditorSaveStatus: "_21ABdLhAaZ1KIV7osV-RYV",
        LocalizedImageSelector: "_1K9mhqXjo6xi6qVHMBwcTQ",
        Header: "_3oC7Qb8-E-MF_hxZKzOPyQ",
        UploadedImageOption: "_2F05QhQ_9_rf7qryFDLsh6",
        ExistsImageOption: "_2DTeKovr7g8Z4rrBjVNTZb",
        MissingImageOption: "_29pcde0Q7kd7ClgWo9w5NB",
        ImageDropPane: "_1RWj0soRG2Y-mtoq_nOEe3",
        DragAndDropDescriptionWithImage: "_3-2d6qJPYFImAjNB825gPq",
        DragAndDropDescriptionWithoutImage: "_2FAmjUnpcILnVdO29vdLn6",
        DeleteLink: "D_kqKamsBe39qbMqcuino",
        ErrorBox: "_20-2lEQLGnc64V46i5khL-",
        AltTextArea: "_20wBVZiv8PNqku4mQTONkN",
      };
    },
    46595: (e) => {
      e.exports = {
        ReleaseDateInfoCtn: "_2mHXbGuTlraXe_Q1JYKmJZ",
        GameEditCtn: "_2JigUHOJ_OTCRjbohXgz9q",
        ReleaseDateContent: "AVZgMOcgNdb95embDq8g1",
        EditButton: "_1R5w2idIf5H3xZh7C6ObQL",
        Spacer: "_3TcEpA8cfRVBTd8q_vvFWu",
        Top: "kNcnUbYODwtyQ3AZp_VUM",
        Bottom: "_2TBzK4oRpgLv5hHxtojPq5",
        EditButtonIcon: "_22a0aPwQVuTJx58YZQWYBd",
        LabelField: "_1olrpCNFeNf7UfruKHLVhY",
        Label: "M3h38e4KnwYsDvQP72dg0",
        BigField: "_4jS-jBGyvj3mr8jkJ46Gc",
        Set: "eEhAf6mE-OR6VCf4eHEkC",
      };
    },
    51780: (e) => {
      e.exports = {
        ReleaseDateModal: "RKE7g5McLhANBdiTzm-ai",
        ReleaseDateRequestBody: "_32CdqVuKRqrf1SR8Hday6v",
        Column: "_gUUe9JABsRpGmdkooO11",
        ColumnLabel: "xebmA68ybtGEgyG_oVMM0",
        ReleaseColumnFooter: "_3egfk1DBae-OZSZtcwrDDq",
        ColumnContent: "eZhskcRU_Ejw5kmSBLRTU",
        BlueNote: "_1iIVgx9LfomTs6Ycj6qYgV",
        PublishNowWarning: "_2-dra08qCgH_F_0T756AwP",
        ErrorBox: "_27JIJRbunDgYqS_xDV7Xha",
        HTMLErrorBoxAppear: "bXT6nAG7o3DqMjoZ_zWJ",
      };
    },
    92528: (e, t, a) => {
      "use strict";
      a.d(t, { Y: () => o });
      var n = a(90626),
        i = a(64046),
        l = a(88997),
        r = a(40139),
        s = a.n(r);
      function o(e) {
        const { rgGameProfileColorDefs: t } = e,
          a = t.map((e) =>
            n.createElement(
              "div",
              { key: e.strProfileColorKey, className: "form_row_flex" },
              n.createElement(
                "div",
                { className: "form_label_flex" },
                "*",
                e.strProfileColorLabel,
              ),
              n.createElement(
                "div",
                { className: "form_data_flex" },
                (function (e) {
                  const { strKVPrepend: t, bWriteAsRGBOnly: a } = e;
                  let [r, o] = n.useState(e.strCurrentColor);
                  const c = n.useRef(void 0),
                    m = (e) => {
                      const t = (e) => {
                        o(e);
                      };
                      (0, l.lX)(
                        n.createElement(i.s, {
                          onChange: t,
                          color: r,
                          disableAlpha: a,
                        }),
                        e,
                        { bDisablePopTop: !0 },
                      );
                    },
                    p = () => {
                      o(c.current.value);
                    };
                  return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement("input", {
                      ref: c,
                      type: "text",
                      name: `${t || "item[profile_colors]"}[${e.strProfileColorKey}]`,
                      onChange: p,
                      placeholder: a
                        ? "255,255,255"
                        : "rgba(255, 255, 255, .5)",
                      size: 20,
                      value: a ? d(r) : r,
                      readOnly: !0,
                    }),
                    n.createElement("div", {
                      className: s().profile_color_preview,
                      style: { backgroundColor: `${r}` },
                      onClick: m,
                    }),
                  );
                })(e),
              ),
            ),
          );
        return n.createElement("div", { className: s().profile_colors_ctn }, a);
      }
      function d(e) {
        const t = e.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
        if (!t) return null;
        const [, a, n, i] = t;
        return `${a},${n},${i}`;
      }
    },
    35863: (e, t, a) => {
      "use strict";
      a.d(t, { H: () => h });
      var n = a(90626),
        i = a(93542),
        l = a(61859),
        r = a(21869),
        s = a(10411),
        o = a(52038),
        d = a(51614),
        c = a(41735),
        m = a.n(c),
        p = a(22797),
        E = a(78327),
        u = a(12155);
      const _ = 748,
        g = 896;
      class S {
        rgSet = new Set();
        constructor(e) {
          for (const t of e) this.rgSet.add(JSON.stringify(t));
        }
        has(e) {
          const t = JSON.stringify(e);
          return this.rgSet.has(t);
        }
        add(e) {
          const t = JSON.stringify(e);
          return this.rgSet.add(t), this;
        }
        delete(e) {
          const t = JSON.stringify(e);
          return this.rgSet.delete(t);
        }
        get size() {
          return this.rgSet.size;
        }
        *[Symbol.iterator]() {
          for (const e of this.rgSet) yield JSON.parse(e);
        }
      }
      function h(e) {
        const [t, a] = (0, n.useState)("closed"),
          c = e.rgEditions,
          [_, g] = (0, n.useState)(new S(c)),
          h = new Map();
        for (const t of Object.keys(e.rgEditionsComparisonGraphics))
          h.set(t, e.rgEditionsComparisonGraphics[t]);
        const [b, C] = (0, n.useState)(() => {
            const t = new Map();
            for (const a of Object.keys(e.rgEditionsAltText))
              t.set(a, e.rgEditionsAltText[a]);
            return t;
          }),
          [D, w] = (0, n.useState)(h),
          R = Object.keys(e.rgEditionsComparisonGraphics).length > 0,
          v = (function (e, t) {
            return (0, d.n)({
              mutationFn: async (a) => {
                const {
                    rgEditionsToSave: n,
                    rgGraphicsToDelete: i,
                    mapGraphicsToUpload: l,
                    mapAltText: r,
                  } = a,
                  s = new FormData();
                s.append("sessionid", E.TS.SESSIONID);
                const o = Math.max(t.length, n.length);
                for (let e = 0; e < o; e++)
                  e >= n.length
                    ? (s.append(
                        `app[related_items][editions][${e}][packageid]`,
                        "",
                      ),
                      s.append(
                        `app[related_items][editions][${e}][bundleid]`,
                        "",
                      ))
                    : n[e].packageid
                      ? (s.append(
                          `app[related_items][editions][${e}][packageid]`,
                          "" + n[e].packageid,
                        ),
                        s.append(
                          `app[related_items][editions][${e}][bundleid]`,
                          "",
                        ))
                      : n[e].bundleid
                        ? (s.append(
                            `app[related_items][editions][${e}][packageid]`,
                            "",
                          ),
                          s.append(
                            `app[related_items][editions][${e}][bundleid]`,
                            "" + n[e].bundleid,
                          ))
                        : console.log(
                            "Tried to save an edition with neither packageid or bundleid.",
                          );
                l.forEach((e, t) => {
                  s.append(
                    `edition_comparison|edition_comparision|assets|edition_comparison|image|${t}`,
                    e,
                  );
                });
                for (const e of i)
                  s.append(`app[assets][edition_comparison][image][${e}]`, "");
                r.forEach((e, t) => {
                  s.append(
                    `app[assets][edition_comparison][image_alt_text][${t}]`,
                    e,
                  );
                });
                const d = `${E.TS.PARTNER_BASE_URL}admin/game/quickupdateajax/${e}`;
                return m().post(d, s);
              },
            });
          })(e.nItemId, c),
          N = new Map();
        for (const t of e.rgCandidates) N.set(t.nId, t);
        let k = null;
        if (
          _.size > 0 &&
          -1 !== e.nBasePackageId &&
          !_.has({ packageid: e.nBasePackageId })
        ) {
          const t = e.rgCandidates.find((t) => t.nId === e.nBasePackageId);
          k = (0, l.we)(
            "#StoreAdmin_EditEditions_MustIncludeCheapestBasePageError",
            t?.strName,
            e.nBasePackageId,
          );
        }
        const T = n.useId();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            r.E,
            { active: "editor" === t || "alert" === t },
            n.createElement(
              s.eV,
              { "aria-labelledby": T, closeModal: () => a("closed") },
              "editor" === t &&
                n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    "div",
                    { className: i.EditionsEditorContents },
                    n.createElement(
                      "h2",
                      { id: T },
                      (0, l.we)("#StoreAdmin_EditEditions_DialogTitle"),
                    ),
                    v.isPending && n.createElement(p.t, null),
                    !v.isPending &&
                      n.createElement(
                        n.Fragment,
                        null,
                        null !== k &&
                          n.createElement(
                            "div",
                            { className: i.ErrorBox },
                            n.createElement(u.X, null),
                            n.createElement("div", null, k),
                          ),
                        n.createElement(f, {
                          rgEditions: _,
                          rgCandidates: e.rgCandidates,
                          setEditions: g,
                        }),
                        n.createElement("div", {
                          className: i.EditionPickerHr,
                        }),
                        n.createElement(A, {
                          mapOriginalImages: h,
                          mapImages: D,
                          setImages: w,
                          mapAltText: b,
                          setAltText: C,
                          bAppHasSteamChinaToolsEnabled:
                            e.bAppHasSteamChinaToolsEnabled,
                        }),
                      ),
                  ),
                  n.createElement(
                    "div",
                    { className: i.EditionsEditorDialogButtons },
                    n.createElement(
                      "button",
                      {
                        className: "btn_green_white_innerfade",
                        disabled: null !== k,
                        onClick: async () => {
                          const e = new Map();
                          D.forEach((t, a) => {
                            t instanceof File && e.set(a, t);
                          });
                          const t = [];
                          h.forEach((e, a) => {
                            D.has(a) || t.push(a);
                          }),
                            v.mutate({
                              rgEditionsToSave: Array.from(_),
                              mapGraphicsToUpload: e,
                              mapAltText: b,
                              rgGraphicsToDelete: t,
                            }),
                            a("alert");
                        },
                      },
                      (0, l.we)("#StoreAdmin_EditEditions_SaveButton"),
                    ),
                    n.createElement(
                      "button",
                      {
                        onClick: () => {
                          g(new S(c)), a("closed");
                        },
                      },
                      (0, l.we)("#StoreAdmin_EditEditions_CancelButton"),
                    ),
                  ),
                  n.createElement(
                    "p",
                    { className: i.NeedToPublishNotification },
                    (0, l.oW)(
                      "#StoreAdmin_EditEditions_NeedToPublishNotice",
                      n.createElement("a", {
                        target: "_blank",
                        href: `${E.TS.PARTNER_BASE_URL}admin/game/edit/${e.nItemId}?activetab=tab_publish`,
                      }),
                    ),
                  ),
                ),
              "alert" === t &&
                n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    "div",
                    { className: i.EditionEditorContents },
                    n.createElement(
                      "h2",
                      null,
                      (0, l.we)("#StoreAdmin_EditEditions_SavingTitle"),
                    ),
                    n.createElement(
                      "div",
                      { className: i.EditionsEditorSaveStatus },
                      v.isPending &&
                        n.createElement(
                          n.Fragment,
                          null,
                          n.createElement(p.t, null),
                          " ",
                          (0, l.we)("#StoreAdmin_EditEditions_Saving"),
                        ),
                      !v.isPending &&
                        n.createElement(
                          "span",
                          null,
                          (0, l.we)("#StoreAdmin_EditEditions_Saved"),
                        ),
                    ),
                    n.createElement(
                      "span",
                      { className: i.PublishReminder },
                      (0, l.oW)(
                        "#StoreAdmin_EditEditions_NeedToPublishAlert",
                        n.createElement("a", {
                          target: "_blank",
                          href: `${E.TS.PARTNER_BASE_URL}admin/game/edit/${e.nItemId}?activetab=tab_publish`,
                        }),
                      ),
                    ),
                    n.createElement(
                      "div",
                      { className: i.EditionsEditorDialogButtons },
                      n.createElement(
                        "button",
                        {
                          onClick: () => {
                            a("refreshing"), window.location.reload();
                          },
                        },
                        (0, l.we)("#StoreAdmin_EditEditions_OK"),
                      ),
                    ),
                  ),
                ),
            ),
          ),
          (e.rgCandidates.length > 1 || e.rgEditions.length > 0) &&
            n.createElement(
              n.Fragment,
              null,
              n.createElement(
                "div",
                {
                  className: (0, o.A)(
                    i.EditionsEditorRow,
                    R && i.ImageProvided,
                  ),
                },
                "closed" === t &&
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      "button",
                      {
                        className: i.OpenEditorButton,
                        onClick: () => a("editor"),
                      },
                      (0, l.we)(
                        "#StoreAdmin_EditEditions_ManageEditionsButton",
                      ),
                    ),
                    _?.size > 0
                      ? n.createElement(
                          "span",
                          null,
                          (0, l.we)(
                            "#StoreAdmin_EditEditions_ManageEditionsDescription",
                            _.size,
                          ),
                        )
                      : n.createElement(
                          "span",
                          null,
                          (0, l.we)(
                            "#StoreAdmin_EditEditions_GroupEditionsDescription",
                          ),
                        ),
                    n.createElement(
                      "span",
                      null,
                      R
                        ? n.createElement(
                            "span",
                            {
                              className: (0, o.A)(
                                i.TaskDone,
                                "icon_check_green",
                              ),
                            },
                            (0, l.we)(
                              "#StoreAdmin_EditEditions_ManageEditions_HasComparisonGraphic",
                            ),
                          )
                        : (0, l.we)(
                            "#StoreAdmin_EditEditions_ManageEditions_NoComparisonGraphic",
                          ),
                    ),
                  ),
                "refreshing" === t &&
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(p.t, { size: "small" }),
                  ),
              ),
            ),
        );
      }
      const b = (e) =>
        "bundle" === e.eType ? { bundleid: e.nId } : { packageid: e.nId };
      function f(e) {
        const { rgEditions: t, rgCandidates: a, setEditions: r } = e,
          s = new Map();
        for (const t of e.rgCandidates) s.set(t.nId, t);
        const [d, c] = (0, n.useState)(""),
          m = a.filter(
            (e) => -1 !== e.strName.toLowerCase().indexOf(d.toLowerCase()),
          );
        return n.createElement(
          "div",
          { className: i.EditionPicker },
          n.createElement(
            "p",
            null,
            (0, l.oW)(
              "#StoreAdmin_EditEditions_GroupEditionsIntro",
              n.createElement("a", {
                target: "_blank",
                href: `${E.TS.PARTNER_BASE_URL}doc/store/manageeditions`,
              }),
            ),
          ),
          n.createElement("br", null),
          n.createElement(
            "h3",
            null,
            (0, l.we)("#StoreAdmin_EditEditions_StepNumber1"),
          ),
          n.createElement(
            "p",
            null,
            (0, l.we)("#StoreAdmin_EditEditions_SelectEditionsDescription"),
          ),
          n.createElement(
            "div",
            { className: i.EditionPickerFilterBox },
            n.createElement("input", {
              type: "text",
              placeholder: (0, l.we)(
                "#StoreAdmin_EditEditions_FilterDescription",
              ),
              value: d,
              onChange: (e) => {
                const t = e.target.value;
                c(t);
              },
            }),
          ),
          n.createElement(
            "table",
            null,
            n.createElement(
              "thead",
              null,
              n.createElement(
                "tr",
                null,
                n.createElement(
                  "td",
                  null,
                  (0, l.we)("#StoreAdmin_EditEditions_ColumnEdition"),
                ),
                n.createElement(
                  "td",
                  null,
                  (0, l.we)("#StoreAdmin_EditEditions_ColumnPackageTitle"),
                ),
                n.createElement(
                  "td",
                  null,
                  (0, l.we)("#StoreAdmin_EditEditions_ColumnState"),
                ),
                n.createElement(
                  "td",
                  null,
                  (0, l.we)("#StoreAdmin_EditEditions_ColumnPrice"),
                ),
              ),
            ),
            n.createElement(
              "tbody",
              null,
              m.map((e) => {
                const a = t.has(b(e));
                let l = i.HiddenColor;
                return (
                  "Released" === e.strReleaseState
                    ? (l = i.ReleasedColor)
                    : "Prepurchase" === e.strReleaseState
                      ? (l = i.PrepurchaseColor)
                      : "Beta" === e.strReleaseState && (l = i.BetaColor),
                  n.createElement(
                    "tr",
                    { key: e.nId, className: (0, o.A)(l, i.EditionPickerRow) },
                    n.createElement(
                      "td",
                      null,
                      n.createElement("input", {
                        type: "checkbox",
                        onChange:
                          ((s = e.eType),
                          (d = e.nId),
                          (e) => {
                            const a = new S(t);
                            e.target.checked
                              ? a.add(
                                  "package" === s
                                    ? { packageid: d }
                                    : { bundleid: d },
                                )
                              : a.delete(
                                  "package" === s
                                    ? { packageid: d }
                                    : { bundleid: d },
                                ),
                              r(a);
                          }),
                        checked: a,
                      }),
                    ),
                    n.createElement("td", null, e.strName),
                    n.createElement("td", null, e.strLocalizedReleaseState),
                    n.createElement("td", {
                      dangerouslySetInnerHTML: { __html: e.strPricing },
                    }),
                  )
                );
                var s, d;
              }),
            ),
          ),
        );
      }
      function A(e) {
        const {
            mapOriginalImages: t,
            mapImages: a,
            setImages: r,
            mapAltText: s,
            setAltText: o,
            bAppHasSteamChinaToolsEnabled: d,
          } = e,
          [c, m] = (0, n.useState)(null),
          p = (0, l.O9)(e.bAppHasSteamChinaToolsEnabled),
          [E, S] = (0, n.useState)("english"),
          h = (0, n.useRef)(null);
        let b = null,
          f = "missing";
        if (a.has(E)) {
          const e = a.get(E);
          e instanceof File
            ? ((b = URL.createObjectURL(e)), (f = "uploaded"))
            : ((b = e), (f = "exists"));
        }
        const A = (e) =>
          a.has(e) && a.get(e) instanceof File
            ? i.UploadedImageOption
            : a.has(e)
              ? i.ExistsImageOption
              : i.MissingImageOption;
        return n.createElement(
          "div",
          { className: i.LocalizedImageSelector },
          n.createElement(
            "h3",
            null,
            (0, l.we)("#StoreAdmin_EditEditions_StepNumber2"),
          ),
          n.createElement(
            "p",
            null,
            (0, l.we)(
              "#StoreAdmin_EditEditions_UploadComparisonGraphicsDescription",
              _,
              g,
            ),
          ),
          n.createElement(
            "div",
            { className: i.Header },
            n.createElement("input", {
              type: "file",
              ref: h,
              onChange: async (e) => {
                if (e.target.files && e.target.files[0]) {
                  const t = e.target.files[0],
                    n = await createImageBitmap(t);
                  if (n.width !== _ || n.height !== g)
                    return void m(
                      (0, l.we)(
                        "#StoreAdmin_EditEditions_ImageSizeError",
                        _,
                        g,
                        n.width,
                        n.height,
                      ),
                    );
                  const i = new Map(a);
                  i.set(E, t), r(i), m(null);
                }
              },
              style: { display: "none" },
            }),
            n.createElement(
              "select",
              {
                onChange: (e) => {
                  S(e.target.value), m(null);
                },
                className: A(E),
              },
              (0, l.vR)(p, (e, t) =>
                n.createElement(
                  "option",
                  { key: t, value: t, className: A(t) },
                  e,
                ),
              ),
            ),
          ),
          n.createElement(
            "p",
            { className: i.ErrorBox },
            null !== c &&
              n.createElement(n.Fragment, null, n.createElement(u.X, null), c),
          ),
          n.createElement(
            "div",
            {
              className: i.ImageDropPane,
              onClick: () => h.current?.click(),
              onDragOver: (e) => e.preventDefault(),
              onDrop: async (e) => {
                if (
                  (e.preventDefault(),
                  e.dataTransfer.files && e.dataTransfer.files[0])
                ) {
                  const t = e.dataTransfer.files[0],
                    n = await createImageBitmap(t);
                  if (n.width !== _ || n.height !== g)
                    return void m(
                      (0, l.we)(
                        "#StoreAdmin_EditEditions_ImageSizeError",
                        _,
                        g,
                        n.width,
                        n.height,
                      ),
                    );
                  const i = new Map(a);
                  i.set(E, t), r(i), m(null);
                }
              },
            },
            b
              ? n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    "div",
                    { className: i.DragAndDropDescriptionWithImage },
                    (0, l.we)("#StoreAdmin_EditEditions_DragAndDropToReplace"),
                  ),
                  n.createElement("img", { src: b }),
                  n.createElement(
                    "div",
                    { className: i.DeleteLink },
                    n.createElement(
                      "a",
                      {
                        onClick: () => {
                          if (a.has(E)) {
                            const e = new Map(a);
                            e.delete(E), r(e), m(null);
                          }
                        },
                      },
                      (0, l.we)("#StoreAdmin_EditEditions_Delete"),
                    ),
                  ),
                )
              : n.createElement(
                  "div",
                  { className: i.DragAndDropDescriptionWithoutImage },
                  (0, l.we)("#StoreAdmin_EditEditions_DragAndDropHere"),
                ),
          ),
          n.createElement(
            "h3",
            null,
            (0, l.we)("#StoreAdmin_EditEditions_StepNumber3"),
          ),
          n.createElement(
            "label",
            { htmlFor: "altTextArea" },
            n.createElement(
              "p",
              null,
              (0, l.we)("#StoreAdmin_EditEditions_AltTextDescription"),
            ),
          ),
          n.createElement("textarea", {
            id: "altTextArea",
            className: i.AltTextArea,
            onChange: (e) => {
              const t = new Map(s);
              t.set(E, e.target.value), o(t);
            },
            value: s.get(E) ?? "",
          }),
        );
      }
    },
    39679: (e, t, a) => {
      "use strict";
      a.d(t, { Ll: () => d, ut: () => o });
      var n = a(90626),
        i = a(63369),
        l = a(16676),
        r = a(61859);
      const s = [
          "date_full",
          "date_month",
          "date_quarter",
          "date_year",
          "text_comingsoon",
          "text_tba",
        ],
        o = ["date_full", "date_month", "date_quarter"];
      function d(e) {
        const {
            rtSteamReleaseDate: t,
            value: a,
            onChange: o,
            rgComingSoonOptionOverride: d,
            bExpandedDisplay: c,
          } = e,
          m = !!t,
          p = n.useMemo(
            () =>
              (d || s).map((e) => ({
                label: (0, i.M)(e, t, null, c),
                data: e,
              })),
            [t, d, c],
          ),
          E = n.useCallback(
            (e) => {
              o(e.data);
            },
            [o],
          ),
          u = t
            ? (0, r.we)("#GameEdit_ComingSoon_SelectAnOption")
            : (0, r.we)("#App_Landing_NoDateSelected");
        return n.createElement(l.ZU, {
          disabled: !m,
          strDefaultLabel: u,
          rgOptions: p,
          selectedOption: m ? a : null,
          onChange: E,
        });
      }
    },
    67045: (e, t, a) => {
      "use strict";
      a.d(t, { M: () => O });
      var n = a(90626),
        i = a(63369),
        l = a(61859),
        r = a(91675),
        s = a(46595),
        o = a(12155),
        d = a(41735),
        c = a.n(d),
        m = a(70986),
        p = a(20194),
        E = a(16676),
        u = a(99637),
        _ = a(9154),
        g = a(22797),
        S = a(7860),
        h = a(61336),
        b = a(78327),
        f = a(39679),
        A = a(51780);
      function C(e) {
        const { appid: t, onClose: a, onCommit: i } = e,
          [r, s] = n.useState(null),
          {
            data: o,
            isLoading: d,
            isLoadingError: m,
          } = (function (e) {
            return (0, p.I)({
              queryKey: ["ReleaseRequest", e],
              queryFn: async () => {
                const t = await c().get(
                  `${b.TS.PARTNER_BASE_URL}apprelease/ajaxgetreleaserequest/${e}`,
                );
                if ("string" == typeof t.data)
                  throw "Error loading release status";
                return { appid: e, ...t?.data };
              },
            });
          })(t),
          E = "prerelease" == o?.strReleaseState,
          u = n.useCallback(
            (e, a) => {
              S.L.invalidateQueries({ queryKey: ["ReleaseRequest", t] }),
                i(e, a, E);
            },
            [t, i, E],
          );
        let _ = n.createElement(R, { setOnOKButton: s, onCommit: u });
        return (
          m
            ? (_ = n.createElement(v, {
                strError: (0, l.we)("#Error_ErrorCommunicatingWithNetwork"),
              }))
            : (!d && o) || (_ = n.createElement(g.t, null)),
          n.createElement(
            D.Provider,
            { value: o },
            n.createElement(k, { fnSubmit: r, fnCloseModal: a }, _),
          )
        );
      }
      const D = n.createContext(null);
      function w() {
        return n.useContext(D);
      }
      const R = n.memo(function (e) {
        const {
            appid: t,
            bCanUpdateComingSoonDate: a,
            rtReleaseDate: i,
            strComingSoonDisplay: r,
          } = w(),
          { setOnOKButton: s, onCommit: o } = e,
          [d, m] = n.useState(i),
          [p, u] = n.useState(r || void 0),
          [_, g] = n.useState("none"),
          [S, C] = n.useState(),
          D = n.useCallback((e) => {
            C(e), g("none");
          }, []),
          R = n.useCallback(() => {
            if (d)
              if (p) {
                g("submitting"), C(null);
                (async function (e) {
                  const {
                      unAppID: t,
                      rtReleaseDate: a,
                      strComingSoonDisplay: n,
                    } = e,
                    i = `${b.TS.PARTNER_BASE_URL}apprelease/ajaxupdatereleaserequest/${t}`,
                    r = new FormData();
                  r.append("sessionid", b.TS.SESSIONID),
                    a && r.append("release_date", a.toString());
                  r.append("coming_soon_display", n);
                  const s = await c().post(i, r);
                  if (!s.data || 1 != s.data.success)
                    throw (0, l.we)(
                      "#Error_Description",
                      s.data?.success,
                      s.data?.error_message || "unknown",
                    );
                })({
                  unAppID: t,
                  rtReleaseDate: a ? d : null,
                  strComingSoonDisplay: p,
                })
                  .then(() => {
                    g("refreshing"), o(d, p);
                  })
                  .catch((e) => {
                    D(e);
                  });
              } else
                D(
                  (0, l.we)("#App_Landing_ReleaseDate_Error_ComingSoonDisplay"),
                );
            else D((0, l.we)("#App_Landing_ReleaseDate_Error_NoDate"));
          }, [t, d, p, a, o, D]);
        return (
          n.useEffect(() => {
            s("none" == _ ? () => R : null);
          }, [R, a, _, s]),
          n.createElement(
            n.Fragment,
            null,
            S && n.createElement(v, { strError: S }),
            n.createElement(N, null),
            n.createElement(
              E.dR,
              null,
              n.createElement(
                T,
                { label: (0, l.we)("#App_Landing_IntendedReleaseDateTitle") },
                n.createElement(P, { rtSelectedDate: d, setSelectedDate: m }),
                n.createElement(I, null),
              ),
              n.createElement(
                T,
                { label: (0, l.we)("#App_Landing_PublicDateDisplayTitle") },
                n.createElement(f.Ll, {
                  rtSteamReleaseDate: d,
                  value: p,
                  onChange: u,
                }),
                n.createElement(
                  "p",
                  null,
                  (0, l.we)("#App_Landing_ReleaseDateStorePage"),
                ),
                n.createElement(
                  "p",
                  null,
                  (0, l.we)("#App_Landing_ReleaseDateStoreListing"),
                ),
              ),
            ),
            n.createElement(
              "div",
              { className: A.ReleaseColumnFooter },
              (0, l.oW)(
                "#App_Landing_NeedHelpWithReleaseDates",
                n.createElement("a", {
                  target: "_blank",
                  href: `${b.TS.PARTNER_BASE_URL}doc/store/coming_soon`,
                }),
                n.createElement("a", {
                  target: "_blank",
                  href: `${(0, h.GX)()}wizard/HelpWithPublishing`,
                }),
              ),
            ),
            n.createElement(B, null),
          )
        );
      });
      function v(e) {
        const { strError: t } = e;
        return n.createElement("div", { className: A.ErrorBox }, t);
      }
      function N() {
        const {
          bIsComingSoon: e,
          bIsStorePageReviewed: t,
          bIsWaitingForBuildReview: a,
          bIsFirstSelfPublishingApp: i,
          rtEarliestDate: r,
        } = w();
        return e && t
          ? a
            ? n.createElement(
                L,
                null,
                (0, l.we)("#App_Landing_Release_EarliestDate_BuildReview"),
              )
            : n.createElement(
                L,
                null,
                (0, l.we)("#App_Landing_Release_EarliestDate", (0, l.$z)(r)),
              )
          : i
            ? n.createElement(
                L,
                null,
                (0, l.we)("#App_Landing_Release_EarliestDate_TwoWeeks30Days"),
              )
            : n.createElement(
                L,
                null,
                (0, l.we)("#App_Landing_Release_EarliestDate_TwoWeeks"),
              );
      }
      function k(e) {
        const { fnCloseModal: t, fnSubmit: a, children: i } = e,
          { bCanUpdateComingSoonDate: r } = w() || {
            bCanUpdateComingSoonDate: !0,
          };
        return n.createElement(
          _.mt,
          { active: !0, className: A.ReleaseDateModal, onDismiss: t },
          n.createElement(
            E.Y9,
            null,
            (0, l.we)(
              r
                ? "#App_Landing_Set_Release_Date"
                : "#App_Landing_Change_Release_Date",
            ),
          ),
          n.createElement(E.nB, { className: A.ReleaseDateRequestBody }, i),
          n.createElement(E.CB, {
            bOKDisabled: !a,
            onCancel: t,
            strCancelText: (0, l.we)("#App_Landing_Requested_Date_Cancel"),
            onOK: a,
            strOKText: (0, l.we)("#App_Landing_Requested_Date_Update"),
          }),
        );
      }
      function T(e) {
        const { label: t, children: a } = e;
        return n.createElement(
          E.VP,
          { className: A.Column },
          n.createElement("div", { className: A.ColumnLabel }, t, ":"),
          n.createElement("div", { className: A.ColumnContent }, a),
        );
      }
      function P(e) {
        const { rtSelectedDate: t, setSelectedDate: a } = e,
          { bCanUpdateComingSoonDate: i, rtEarliestDate: l } = w();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(u.K, {
            bWeekdaysOnly: !0,
            bNoDefaultDate: !0,
            disabled: !i,
            nEarliestTime: l,
            fnGetTimeToUpdate: () => t,
            fnSetTimeToUpdate: a,
            className: A.DatePicker,
            bShowTimeZone: !0,
            strAlsoShowTimeZone: m.o,
          }),
        );
      }
      function I(e) {
        const { bCanUpdateComingSoonDate: t, rtReleaseDate: a } = w();
        return t
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement(
                "p",
                null,
                (0, l.we)("#App_Landing_Set_Release_Date_SetIntended"),
              ),
              n.createElement(
                "p",
                null,
                (0, l.we)("#App_Landing_Set_Release_Date_Weekends"),
              ),
              n.createElement(
                "p",
                null,
                (0, l.we)("#App_Landing_Set_Release_Date_PacificTime"),
              ),
            )
          : n.createElement(
              "p",
              null,
              (0, l.oW)(
                (0, l.we)(
                  "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Desc",
                  (0, l.$z)(a),
                ),
                n.createElement("a", {
                  href: `${(0, h.GX)()}wizard/HelpWithPublishing?issueid=905`,
                }),
              ),
            );
      }
      function L(e) {
        return n.createElement("span", { className: A.BlueNote }, e.children);
      }
      function B(e) {
        const {
          rtEarliestDate: t,
          strReleaseState: a,
          bCanUpdateComingSoonDate: i,
        } = w();
        return "prerelease" != a || i
          ? null
          : n.createElement(
              "div",
              { className: A.PublishNowWarning },
              (0, l.we)(
                "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Note",
                (0, l.$z)(t),
              ),
            );
      }
      var y = a(52038),
        x = a(96409);
      function O(e) {
        const {
            bIsGameEdit: t,
            unAppID: a,
            rgEarliestAdvancedAccessDate: r,
          } = e,
          [d, c] = n.useState(e.rtReleaseDate),
          [m, p] = n.useState(e.strComingSoonDisplay),
          [E, u] = n.useState(!1),
          [_, g] = n.useState(!1),
          S = n.useCallback(() => u(!0), []),
          h = n.useCallback(() => u(!1), []),
          b = n.useCallback((e, t, a) => {
            c(e), p(t), u(!1), a && g(!0);
          }, []);
        return n.createElement(
          n.Fragment,
          null,
          E && n.createElement(C, { appid: a, onClose: h, onCommit: b }),
          _ &&
            n.createElement($, {
              appid: a,
              bIsGameEdit: t,
              closeModal: () => g(!1),
            }),
          n.createElement(
            "div",
            { className: (0, y.A)(s.ReleaseDateInfoCtn, t && s.GameEditCtn) },
            n.createElement(
              "div",
              { className: s.ReleaseDateContent },
              n.createElement(
                M,
                { label: (0, l.we)("#App_Landing_SpecifiedReleaseDate") },
                n.createElement(F, { rtReleaseDate: d }),
              ),
              n.createElement(
                M,
                { label: (0, l.we)("#App_Landing_CustomersSeeReleaseDate") },
                n.createElement(
                  "div",
                  { className: (0, y.A)(s.BigField, m ? s.Set : s.Unset) },
                  m
                    ? (0, i.M)(m, d)
                    : (0, l.we)("#App_Landing_UnsetReleaseDate"),
                ),
              ),
            ),
            n.createElement(
              "div",
              { className: s.EditButton, onClick: S },
              n.createElement("div", { className: (0, y.A)(s.Spacer, s.Top) }),
              n.createElement(
                "div",
                { className: s.EditButtonIcon },
                n.createElement(o.ffu, null),
              ),
              n.createElement("div", {
                className: (0, y.A)(s.Spacer, s.Bottom),
              }),
            ),
          ),
          1e3 * r > new Date().getTime() &&
            n.createElement(
              M,
              { label: (0, l.we)("#App_Landing_EarliestAdvancedAccessDate") },
              n.createElement(F, { rtReleaseDate: r }),
            ),
        );
      }
      function F(e) {
        const { rtReleaseDate: t } = e;
        return t
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement(
                "div",
                { className: (0, y.A)(s.BigField, s.Set) },
                (0, l.$z)(t),
              ),
              n.createElement(
                "div",
                { className: (0, y.A)(s.SubField, s.Set) },
                (0, r.KC)(t, {}, { timeZoneName: "short" }),
              ),
            )
          : n.createElement(
              "div",
              { className: (0, y.A)(s.BigField, s.Unset) },
              (0, l.we)("#App_Landing_UnsetReleaseDate"),
            );
      }
      function M(e) {
        return n.createElement(
          "div",
          { className: s.LabelField },
          n.createElement("div", { className: s.Label }, e.label),
          e.children,
        );
      }
      function $(e) {
        const { appid: t, bIsGameEdit: a, closeModal: i } = e,
          r = n.useCallback(() => {
            a
              ? (window.TabSelect("tab_publish"), window.scrollTo(0, 0))
              : (window.location.href =
                  x.bI.GameEditByAppID(t.toString()) +
                  "?activetab=tab_publish"),
              i();
          }, [t, a, i]);
        return n.createElement(
          _.EN,
          { active: !0 },
          n.createElement(_.o0, {
            strTitle: (0, l.we)("#App_Landing_ReleaseDate_ChangesSaved"),
            strDescription: (0, l.we)(
              "#App_Landing_Release_PublishStorePrompt",
            ),
            strOKButtonText: (0, l.we)("#App_Landing_Release_PrepareToPublish"),
            onOK: r,
            strCancelButtonText: (0, l.we)("#Button_OK"),
            closeModal: i,
          }),
        );
      }
    },
    96409: (e, t, a) => {
      "use strict";
      a.d(t, { Cg: () => r, _h: () => l, a3: () => i, bI: () => n });
      let n = {
        GameEdit: (e, t) => `/admin/game/${e}/${t}`,
        PackageEdit: (e, t) => `/admin/store/${e}/${t}`,
        BundleEdit: (e, t) => `/bundles/${e}/${t}`,
        GameEditByAppID: (e) => `/admin/game/editbyappid/${e}`,
        ReviewPriceProposals: () => "/admin/reviewpricesubmissions/",
        PackageLanding: (e) => `/store/packagelanding/${e}`,
        FrontPageEdit: (e) => `/admin/store/pageclusteredit/frontpage/${e}`,
        FrontPageSteamChinaEdit: (e) =>
          `/admin/store/pageclusteredit/frontpage_china/${e}`,
        ContentHubEditor: (e, t) =>
          `/admin/store/pageclusteredit/content_hub_${t}/${e}`,
      };
      const i = ["edit", "diff", "revert", "prepare", "publish"],
        l = [
          "package",
          "packagesave",
          "packagediff",
          "packagerevert",
          "packageprepare",
          "packagepublish",
        ],
        r = ["view", "preparestore", "revertstore", "savestore", "publish"];
    },
  },
]);

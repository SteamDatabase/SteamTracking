/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9855],
    {
      6864: (x, B, o) => {
        "use strict";
        o.d(B, { p: () => r, s: () => l });
        var a = o(7850),
          R = o(90626),
          y = o(19316),
          p = o(95695),
          O = o.n(p),
          G = o(85143),
          V = o(11243),
          u = o(18210),
          I = o(91126),
          W = o.n(I),
          D = o(56585),
          t = o(99412),
          n = o(35766),
          e = o(85599),
          i = o(36118);
        function l(c) {
          var d, S;
          const { editModel: f } = c,
            [P, z] = R.useState(t.xPp),
            [L, v] = R.useState(!1),
            [_, m] = R.useState(null),
            M = (C) => {
              const U = C.target.value;
              if (U === "all") z(t.xPp);
              else {
                const F = (0, t.sfN)(U);
                z(F);
              }
            },
            T = f.GetClanSteamID(),
            g = f.GetGID(),
            s = (0, D.Wj)(T, g),
            [, h] = R.useReducer((C) => C + 1, 0),
            A =
              s.isSuccess &&
              (d = s.data) != null &&
              d.crowdin_project_id &&
              (S = s.data) != null &&
              S.crowdin_file_id
                ? `https://valve.crowdin.com/editor/${s.data.crowdin_project_id}/${s.data.crowdin_file_id}`
                : null,
            E = (C) => {
              f.SetPushSourceToCrowdInAutomatically(C), h();
            },
            j = (0, D.IW)(T.ConvertTo64BitString(), g, P),
            w = () => {
              v(!0),
                j
                  .mutateAsync()
                  .then(() => window.location.reload())
                  .catch((C) => {
                    m(C.toString()), v(!1);
                  })
                  .then(() => {
                    m(null);
                  });
            };
          return s.isLoading
            ? null
            : (0, a.jsxs)(G.Eb, {
                clanSteamID: c.editModel.GetClanSteamID(),
                children: [
                  (0, a.jsx)(n.mt, {
                    active: L,
                    children: (0, a.jsx)(e.t, {}),
                  }),
                  (0, a.jsxs)("div", {
                    className: W().ValveCrowdInSyncCtn,
                    children: [
                      (0, a.jsx)(y.J0, {
                        value: f.BPushUpdatesToCrowdInAutomatically(),
                        onChange: E,
                      }),
                      (0, a.jsxs)("div", {
                        className: W().ValveCrowdInSyncLabel,
                        children: [
                          (0, u.we)(
                            "#EventEditor_Localization_AutomaticallyPushChangesToCrowdIn",
                          ),
                          "\xA0(",
                          A
                            ? (0, a.jsx)("a", { href: A, children: A })
                            : (0, u.we)(
                                "#EventEditor_Localization_NotMappedToCrowdIn",
                              ),
                          ")",
                          (0, a.jsx)(V.o, {
                            tooltip: (0, u.we)(
                              "#EventEditor_Localization_Tooltip",
                            ),
                            className: p.tooltip_Ctn,
                          }),
                          (0, a.jsx)("br", {}),
                          (0, a.jsx)("span", {
                            children: (0, u.we)(
                              "#EventEditor_Localization_RememberToSave",
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)(r, { onChange: M }),
                      (0, a.jsx)("div", {
                        className: O().EditPreviewButton,
                        onClick: w,
                        children: (0, u.we)(
                          "#EventEditor_Localization_FetchLocalization",
                        ),
                      }),
                    ],
                  }),
                  _ &&
                    (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsxs)("div", {
                        className: W().SyncPanelError,
                        children: [(0, a.jsx)(i.X, {}), " ", _],
                      }),
                    }),
                ],
              });
        }
        function r(c) {
          const d = (0, u.O9)(!1);
          let S = Array.from(d.entries());
          S.sort((P, z) => P[1].localeCompare(z[1]));
          const f = S.map(([P, z]) =>
            P !== "english"
              ? (0, a.jsx)("option", { value: P, children: z }, P)
              : "",
          );
          return (0, a.jsxs)("select", {
            onChange: c.onChange,
            children: [
              (0, a.jsx)("option", {
                value: "all",
                children: (0, u.we)("#EventEditor_Localization_AllLanguages"),
              }),
              f,
            ],
          });
        }
      },
      26251: (x, B, o) => {
        "use strict";
        o.d(B, { Yg: () => f, t3: () => P });
        var a = o(7850),
          R = o(40323),
          y = o.n(R),
          p = o(90626),
          O = o(99412),
          G = o(32093),
          V = o(38410),
          u = o(19316),
          I = o(95695),
          W = o.n(I),
          D = o(2801),
          t = o(88003),
          n = o(85599),
          e = o(34592),
          i = o(36707),
          l = o(18210),
          r = o(20398),
          c = o(71421),
          d = o(96471),
          S = o.n(d);
        const f = (L) => {
            const v = (_, m) => {
              _.preventDefault();
              const {
                  fnGetLocData: M,
                  closeModal: T,
                  strFileNamePrefix: g,
                  lang: s,
                } = L,
                h = M(),
                A = new r.s();
              let E = g ? g + "_localization" : "localization";
              switch (m) {
                case "csv_row":
                  A.WriteLocalizationData_CSV_LanguageRows(h, E + ".csv");
                  break;
                case "csv_column":
                  A.WriteLocalizationData_CSV_LanguageColumns(h, E + ".csv");
                  break;
                case "csv_token":
                  A.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                    h,
                    E + ".csv",
                  );
                  break;
                case "xml":
                  A.WriteLocalizationData_XML_SingleLanguage(
                    h,
                    s,
                    E + "_" + (0, O.x6o)((0, O.LgB)(s)) + ".xml",
                  );
                  break;
              }
              T && T();
            };
            return (0, a.jsxs)(a.Fragment, {
              children: [
                !!L.bShowCSV &&
                  (0, a.jsxs)(p.Fragment, {
                    children: [
                      (0, a.jsx)(u.jn, {
                        onClick: (_) => v(_, "csv_row"),
                        children: (0, l.we)(
                          "#Localization_Export_Btn_RowLanguages",
                        ),
                      }),
                      (0, a.jsx)(u.jn, {
                        onClick: (_) => v(_, "csv_column"),
                        children: (0, l.we)(
                          "#Localization_Export_Btn_ColumnLanguages",
                        ),
                      }),
                      (0, a.jsx)(u.jn, {
                        onClick: (_) => v(_, "csv_token"),
                        children: (0, l.we)(
                          "#Localization_Export_Btn_TokenLanguages",
                        ),
                      }),
                    ],
                  }),
                !!L.bShowXML &&
                  (0, a.jsx)(u.jn, {
                    onClick: (_) => v(_, "xml"),
                    children: (0, l.we)("#Localization_Export_Btn_XML"),
                  }),
              ],
            });
          },
          P = (L) => {
            const [v, _] = (0, p.useState)(!1),
              m = (g, s) => {
                _(!1),
                  console.log(
                    "ImportLocalizationAction: On Handle Parse error: " +
                      g.message,
                    g,
                  ),
                  (0, t.pg)(
                    (0, a.jsx)(D.KG, {
                      children: (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("p", {
                            children: (0, l.we)("#Localization_Error_Input"),
                          }),
                          (0, a.jsx)("p", { children: g.message }),
                        ],
                      }),
                    }),
                    window,
                  );
              },
              M = (g) => {
                _(!1);
                let s = "";
                g.forEach((h) => {
                  s.length > 0 && (s += ", "),
                    (s += (0, l.we)("#Language_" + (0, O.LgB)(h)));
                }),
                  (0, t.pg)(
                    (0, a.jsx)(D.o0, {
                      strTitle: (0, l.we)("#EventDisplay_Share_Success"),
                      bAlertDialog: !0,
                      children: (0, a.jsx)("div", {
                        children:
                          s.length == 0
                            ? (0, l.we)(
                                "#Localization_Success_ImportComplete_NoChange",
                              )
                            : (0, l.we)(
                                "#Localization_Success_ImportComplete",
                                s,
                              ),
                      }),
                    }),
                    window,
                  );
              },
              T = async (g) => {
                let s = g.target.files;
                if (s && s.length > 0) {
                  _(!0);
                  let h = new Array(),
                    A = new r.s();
                  for (let E = 0; E < s.length; ++E)
                    if (s[E])
                      if (s[E].name.toLocaleLowerCase().endsWith(".csv")) {
                        y().parse(s[0], {
                          header: !0,
                          complete: (j) => {
                            let C = new r.s().DetectAndFormatCSV(j);
                            if (!C) {
                              m({
                                code: "",
                                message: "",
                                row: 0,
                                type: "filenameerror",
                              });
                              return;
                            }
                            const U = l.A0.GetLanguageListForRealms([
                                G.TU.k_ESteamRealmGlobal,
                              ]),
                              F = L.fnOnImportLocData(C, U);
                            M(F);
                          },
                          error: m,
                        });
                        return;
                      } else if (
                        s[E].name.toLocaleLowerCase().endsWith(".xml")
                      ) {
                        let { language: j } = (0, V.jj)(s[E].name, O.xPp);
                        if (j == null || j == O.xPp) {
                          m({
                            code: "",
                            message: (0, l.we)(
                              "#Localization_Error_FileLangauage",
                              s[E].name,
                            ),
                            row: 0,
                            type: "filenameerror",
                          });
                          return;
                        }
                        try {
                          const w =
                            await A.ReadLocalizationData_XML_SingleLanguage(
                              s[E],
                              j,
                            );
                          L.fnOnImportLocData(w, [j]).forEach((U) => {
                            h.indexOf(U) == -1 && h.push(U);
                          });
                        } catch (w) {
                          let C = (0, e.H)(w);
                          m({
                            code: "",
                            message: (0, l.we)(
                              "#Localization_Error_XMLParseError",
                              C.strErrorMsg,
                            ),
                            row: 0,
                            type: "parseerror",
                          });
                          return;
                        }
                      } else
                        m({
                          code: "",
                          message: (0, l.we)(
                            "#Localization_Error_FileExtention",
                            s[E].name,
                          ),
                          row: 0,
                          type: "filenameerror",
                        });
                  M(h);
                }
              };
            return (0, a.jsx)(c.he, {
              className: (0, i.A)(
                L.className ? L.className : I.EditPreviewButton,
              ),
              toolTipContent: L.strToolTip,
              children: (0, a.jsxs)("label", {
                className: d.ImportButton,
                htmlFor: "importlocalization",
                children: [
                  v && (0, a.jsx)(n.t, { size: "small" }),
                  (0, a.jsx)("div", {
                    className: d.Label,
                    children: (0, l.we)(
                      L.strLabel ? L.strLabel : "#Localization_Import_Btn",
                    ),
                  }),
                  (0, a.jsx)("input", {
                    id: "importlocalization",
                    className: d.ImportButton,
                    style: { display: "none" },
                    type: "file",
                    onSubmit: T,
                    onChange: T,
                    multiple: !0,
                  }),
                ],
              }),
            });
          },
          z = (L) => {
            const {
                fnOnImportLocData: v,
                closeModal: _,
                sampleLocData: m,
                sampleFilename: M,
              } = L,
              T = (s, h) => {
                const A = v(s, h);
                return _(), A;
              },
              g = new CLocalizationImportExport();
            return jsxs(GenericDialog, {
              title: Localize("#ImportLoc_Title"),
              onCancel: _,
              closeModal: _,
              children: [
                jsxs(Dialog.Body, {
                  children: [
                    jsx("div", {
                      children: Localize("#ImportLoc_Description"),
                    }),
                    jsxs("div", {
                      className: locstyles.ImportLocSampleButtonCtn,
                      children: [
                        jsx("div", {
                          className: locstyles.SampleTitle,
                          children: Localize("#ImportLoc_SampleTitle"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            g.WriteLocalizationData_CSV_LanguageRows(
                              m,
                              M + "_row.csv",
                            ),
                          children: Localize("#ImportLoc_CSVLangPerRow"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            g.WriteLocalizationData_CSV_LanguageColumns(
                              m,
                              M + "_col.csv",
                            ),
                          children: Localize("#ImportLoc_CSVLangPerCol"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            g.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                              m,
                              M + "_token.csv",
                            ),
                          children: Localize("#ImportLoc_CSVTokenLang"),
                        }),
                        jsx(Dialog.Button, {
                          onClick: () =>
                            g.WriteLocalizationData_XML_SingleLanguage(
                              m,
                              k_ELanguage_English,
                              M + "xml",
                            ),
                          children: Localize("#ImportLoc_XML"),
                        }),
                      ],
                    }),
                  ],
                }),
                jsx(Dialog.Footer, {
                  children: jsx(P, {
                    strLabel: Localize("#BuildNotes_ImportLocalization"),
                    fnOnImportLocData: T,
                  }),
                }),
              ],
            });
          };
      },
      20398: (x, B, o) => {
        "use strict";
        o.d(B, { G: () => I, s: () => W });
        var a = o(99412),
          R = o(32093),
          y = o(41635),
          p = o(22880),
          O = o(18210),
          G = Object.defineProperty,
          V = (D, t, n) =>
            t in D
              ? G(D, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (D[t] = n),
          u = (D, t, n) => V(D, typeof t != "symbol" ? t + "" : t, n);
        class I {
          constructor() {
            u(this, "m_mapTokens", new Map());
          }
          GetLocalization(t, n) {
            const e = this.m_mapTokens.get(t);
            if (!(!e || !e[n])) return e[n];
          }
          SetLocalization(t, n, e) {
            let i = this.m_mapTokens.get(t);
            i || ((i = (0, y.$Y)([], a.bP9, null)), this.m_mapTokens.set(t, i)),
              (i[n] = e);
          }
          GetSortedTokenList() {
            let t = [];
            return (
              this.m_mapTokens.forEach((n, e) => t.push(e)),
              t.sort((n, e) => n.localeCompare(e)),
              t
            );
          }
          GetLanguagesWithTokens() {
            let t = new Map();
            this.m_mapTokens.forEach((e) => {
              for (let i = 0; i < e.length; ++i)
                !t.has(i) &&
                  e[i] !== null &&
                  e[i] !== void 0 &&
                  e[i].trim().length > 0 &&
                  t.set(i, !0);
            });
            let n = new Array();
            return (
              t.forEach((e, i) => {
                e && n.push(i);
              }),
              n
            );
          }
          ClearLanguagesTokens(t) {
            t.forEach((n) => {
              this.m_mapTokens.forEach((e, i) => {
                n < e.length && e[n] !== null && (e[n] = null);
              });
            });
          }
          DebugPrintData() {
            const t = new Array();
            return (
              this.m_mapTokens.forEach((n, e) => t.push(`${e}=${n.join(",")}`)),
              t.join(`
`)
            );
          }
        }
        class W {
          DetectAndFormatCSV(t) {
            var n, e, i, l, r, c;
            let d = null;
            return (
              ((e =
                (n = t == null ? void 0 : t.meta) == null
                  ? void 0
                  : n.fields) == null
                ? void 0
                : e.length) >= 3 &&
              t.meta.fields[0] === "field" &&
              t.meta.fields[1] === "language" &&
              t.meta.fields[2] === "value"
                ? (d = this.ReadLocalizationData_CSV_TokenLanguageList(t))
                : ((l =
                      (i = t == null ? void 0 : t.meta) == null
                        ? void 0
                        : i.fields) == null
                      ? void 0
                      : l.length) >= 2 &&
                    t.meta.fields[0] === "field" &&
                    (0, a.sfN)(t.meta.fields[1], a.xPp) != a.xPp
                  ? (d = this.ReadLocalizationData_CSV_LanguageColumns(t))
                  : ((c =
                      (r = t == null ? void 0 : t.meta) == null
                        ? void 0
                        : r.fields) == null
                      ? void 0
                      : c.length) >= 2 &&
                    t.meta.fields[0] === "language" &&
                    (d = this.ReadLocalizationData_CSV_LanguageRows(t)),
              d
            );
          }
          async ReadLocalizationData_XML_SingleLanguage(t, n) {
            let e = new I(),
              i = new DOMParser(),
              l = await p.g.ReadFile(t),
              r = i.parseFromString(l.toString(), "application/xml");
            for (let c = 0; c < r.documentElement.children.length; ++c) {
              const d = r.documentElement.children.item(c);
              if (!d.getAttribute("id"))
                throw "Can not find id for element. Probably malformed XML";
              const S = d.getAttribute("id").toLocaleLowerCase(),
                f = d.textContent;
              e.SetLocalization(S, n, f);
            }
            return e;
          }
          ReadLocalizationData_CSV_TokenLanguageList(t) {
            const n = new I();
            return (
              t.data.forEach((e) => {
                const i = e.field,
                  l = (0, a.sfN)(e.language);
                n.SetLocalization(i, l, e.value);
              }),
              n
            );
          }
          ReadLocalizationData_CSV_LanguageColumns(t) {
            const n = new I();
            return (
              t.data.forEach((e) => {
                const i = e.field;
                for (let l = a.Bhc; l < a.bP9; ++l) {
                  const r = (0, a.x6o)((0, a.LgB)(l));
                  n.SetLocalization(i, l, e[r]);
                }
              }),
              n
            );
          }
          ReadLocalizationData_CSV_LanguageRows(t) {
            const n = new I();
            return (
              t.data.forEach((e) => {
                const i = (0, a.sfN)(e.language, a.bP9);
                if (i !== a.bP9)
                  for (const [l, r] of Object.entries(e))
                    l === "language" ||
                      typeof r != "string" ||
                      n.SetLocalization(l, i, r);
              }),
              n
            );
          }
          GetExportLanguages() {
            return O.A0.GetLanguageListForRealms([R.TU.k_ESteamRealmGlobal]);
          }
          WriteLocalizationData_CSV_TokenAndLanguageColumns(t, n) {
            let e = new Array();
            t.GetSortedTokenList().forEach((l) => {
              for (const r of this.GetExportLanguages()) {
                let c = { field: l };
                (c.language = (0, a.x6o)((0, a.LgB)(r))),
                  (c.value = t.GetLocalization(l, r)),
                  e.push(c);
              }
            }),
              p.g.WriteCSVToFile(e, n);
          }
          WriteLocalizationData_CSV_LanguageColumns(t, n) {
            let e = new Array();
            t.GetSortedTokenList().forEach((l) => {
              let r = { field: l };
              for (const c of this.GetExportLanguages())
                r[(0, a.x6o)((0, a.LgB)(c))] = t.GetLocalization(l, c);
              e.push(r);
            }),
              p.g.WriteCSVToFile(e, n);
          }
          WriteLocalizationData_CSV_LanguageRows(t, n) {
            let e = new Array();
            for (const l of this.GetExportLanguages())
              e.length <= l - 1 && e.push({ language: "" }),
                e.push({ language: (0, a.x6o)((0, a.LgB)(l)) });
            t.GetSortedTokenList().forEach((l) => {
              for (const r of this.GetExportLanguages()) {
                const c = t.GetLocalization(l, r);
                e[r][l] = c;
              }
            }),
              p.g.WriteCSVToFile(e, n);
          }
          WriteLocalizationData_XML_SingleLanguage(t, n, e) {
            let i = document.implementation.createDocument(
              null,
              "content",
              null,
            );
            t.GetSortedTokenList().forEach((r) => {
              let c = i.createElement("string");
              c.setAttribute("id", r),
                c.appendChild(i.createTextNode(t.GetLocalization(r, n) || "")),
                i.documentElement.append(c);
            }),
              p.g.WriteXMLToFile(i, e);
          }
        }
      },
      54736: (x) => {
        x.exports = {
          DisplayAdminPanel_Spacer: "_3TzVFi3VdHXUk1AerBpZc-",
          EventEditorTopBarContainer: "_1Afx7wzva3-ghxcAy6EQhs",
          EventEditorBottomBar: "_1noS58WsfHN3KuGVDzlv9r",
          EventPublished: "_3zTXCKuKmaCdEoxSBTzPAa",
          EventUnPublished: "pjxnm0P9LLWFXCwsaDKUa",
          AdditionalContent: "_2fUl5vCnrlT9P7kskRIiWx",
        };
      },
      91126: (x) => {
        x.exports = {
          ValveCrowdInSyncCtn: "_8MIrt7rQXkA0xE5sAjOee",
          ValveCrowdInSyncLabel: "_22b0C1Xi03QNdTFKsYypHR",
          SyncPanelError: "yn_yu2EaUigYFm9QQAD7o",
        };
      },
      96471: (x) => {
        x.exports = {
          Label: "_1LhItwhLHspVcQdfcbd2Sg",
          ImportLocSampleButtonCtn: "D-1dlROLVuva-sb6tFgwU",
          SampleTitle: "_9189ilzQ3YES-a-6DyBhR",
          ImportButton: "WyfyxbGrKQq8cKMK5kfxE",
        };
      },
      26759: (x, B, o) => {
        "use strict";
        o.d(B, { A: () => a });
        const a =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
      },
    },
  ]);
})();

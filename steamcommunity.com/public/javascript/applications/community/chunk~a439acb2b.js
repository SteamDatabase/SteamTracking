/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [367],
  {
    49975: (e) => {
      e.exports = {
        Label: "RRbwyjtu6DDWq368gIMpp",
        ImportLocSampleButtonCtn: "_2LkAYVUsMXalhO677MqBVu",
        SampleTitle: "BnzCuGgCC4d99OApbmASf",
        ImportButton: "_3JC9N1mzXnjQw04LjPcXJZ",
      };
    },
    36738: (e) => {
      e.exports = {
        DisplayAdminPanel_Spacer: "_3TzVFi3VdHXUk1AerBpZc-",
        EventEditorTopBarContainer: "_1Afx7wzva3-ghxcAy6EQhs",
        EventPublished: "_3zTXCKuKmaCdEoxSBTzPAa",
        EventUnPublished: "pjxnm0P9LLWFXCwsaDKUa",
      };
    },
    84996: (e, t, a) => {
      "use strict";
      a.d(t, { Gp: () => v, Q0: () => S });
      var o = a(85556),
        n = a(25307),
        i = a.n(n),
        l = a(47427),
        r = a(77936),
        s = a(38071),
        c = a(20029),
        m = a(1485),
        u = a(71741),
        g = a(50898),
        d = a(90069),
        L = a(46882),
        E = a(16649),
        p = a(13129),
        A = a(31846),
        h = a(45070),
        _ = a(59728),
        C = a(49975);
      const v = (e) => {
          const t = (t, a) => {
            t.preventDefault();
            const {
                fnGetLocData: o,
                closeModal: n,
                strFileNamePrefix: i,
                lang: l,
              } = e,
              s = o(),
              c = new h.i();
            let m = i ? i + "_localization" : "localization";
            switch (a) {
              case "csv_row":
                c.WriteLocalizationData_CSV_LanguageRows(s, m + ".csv");
                break;
              case "csv_column":
                c.WriteLocalizationData_CSV_LanguageColumns(s, m + ".csv");
                break;
              case "csv_token":
                c.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                  s,
                  m + ".csv",
                );
                break;
              case "xml":
                c.WriteLocalizationData_XML_SingleLanguage(
                  s,
                  l,
                  m + "_" + (0, r.eV)((0, r.j_)(l)) + ".xml",
                );
            }
            n && n();
          };
          return l.createElement(
            l.Fragment,
            null,
            Boolean(e.bShowCSV) &&
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  m.KM,
                  { onClick: (e) => t(e, "csv_row") },
                  (0, A.Xx)("#Localization_Export_Btn_RowLanguages"),
                ),
                l.createElement(
                  m.KM,
                  { onClick: (e) => t(e, "csv_column") },
                  (0, A.Xx)("#Localization_Export_Btn_ColumnLanguages"),
                ),
                l.createElement(
                  m.KM,
                  { onClick: (e) => t(e, "csv_token") },
                  (0, A.Xx)("#Localization_Export_Btn_TokenLanguages"),
                ),
              ),
            Boolean(e.bShowXML) &&
              l.createElement(
                m.KM,
                { onClick: (e) => t(e, "xml") },
                (0, A.Xx)("#Localization_Export_Btn_XML"),
              ),
          );
        },
        S = (e) => {
          const [t, a] = (0, l.useState)(!1),
            n = (e, t) => {
              a(!1),
                console.log(
                  "ImportLocalizationAction: On Handle Parse error: " +
                    e.message,
                  e,
                ),
                (0, d.AM)(
                  l.createElement(
                    g.JX,
                    null,
                    l.createElement(
                      "div",
                      null,
                      l.createElement(
                        "p",
                        null,
                        (0, A.Xx)("#Localization_Error_Input"),
                      ),
                      l.createElement("p", null, e.message),
                    ),
                  ),
                  window,
                );
            },
            m = (e) => {
              a(!1);
              let t = "";
              e.forEach((e) => {
                t.length > 0 && (t += ", "),
                  (t += (0, A.Xx)("#Language_" + (0, r.j_)(e)));
              }),
                (0, d.AM)(
                  l.createElement(
                    g.uH,
                    {
                      strTitle: (0, A.Xx)("#EventDisplay_Share_Success"),
                      bAlertDialog: !0,
                    },
                    l.createElement(
                      "div",
                      null,
                      0 == t.length
                        ? (0, A.Xx)(
                            "#Localization_Success_ImportComplete_NoChange",
                          )
                        : (0, A.Xx)("#Localization_Success_ImportComplete", t),
                    ),
                  ),
                  window,
                );
            },
            v = (t) =>
              (0, o.mG)(void 0, void 0, void 0, function* () {
                let o = t.target.files;
                if (o && o.length > 0) {
                  a(!0);
                  let t = new Array(),
                    l = new h.i();
                  for (let a = 0; a < o.length; ++a)
                    if (o[a]) {
                      if (o[a].name.toLocaleLowerCase().endsWith(".csv"))
                        return void i().parse(o[0], {
                          header: !0,
                          complete: (t) => {
                            let a = new h.i().DetectAndFormatCSV(t);
                            if (!a)
                              return void n({
                                code: "",
                                message: "",
                                row: 0,
                                type: "filenameerror",
                              });
                            const o = A.LJ.GetLanguageListForRealms([
                                s.IN.k_ESteamRealmGlobal,
                              ]),
                              i = e.fnOnImportLocData(a, o);
                            m(i);
                          },
                          error: n,
                        });
                      if (o[a].name.toLocaleLowerCase().endsWith(".xml")) {
                        let i = (0, c.Z)(o[a].name, -1);
                        if (null == i || -1 == i)
                          return void n({
                            code: "",
                            message: (0, A.Xx)(
                              "#Localization_Error_FileLangauage",
                              o[a].name,
                            ),
                            row: 0,
                            type: "filenameerror",
                          });
                        try {
                          const n =
                            yield l.ReadLocalizationData_XML_SingleLanguage(
                              o[a],
                              i,
                            );
                          e.fnOnImportLocData(n, [i]).map((e) => {
                            -1 == t.indexOf(e) && t.push(e);
                          });
                        } catch (e) {
                          let t = (0, E.l)(e);
                          return void n({
                            code: "",
                            message: (0, A.Xx)(
                              "#Localization_Error_XMLParseError",
                              t.strErrorMsg,
                            ),
                            row: 0,
                            type: "parseerror",
                          });
                        }
                      } else
                        n({
                          code: "",
                          message: (0, A.Xx)(
                            "#Localization_Error_FileExtention",
                            o[a].name,
                          ),
                          row: 0,
                          type: "filenameerror",
                        });
                    }
                  m(t);
                }
              });
          return l.createElement(
            _.HP,
            {
              className: (0, p.Z)(
                e.className ? e.className : u.EditPreviewButton,
              ),
              toolTipContent: e.strToolTip,
            },
            l.createElement(
              "label",
              { className: C.ImportButton, htmlFor: "importlocalization" },
              t && l.createElement(L.V, { size: "small" }),
              l.createElement(
                "div",
                { className: C.Label },
                (0, A.Xx)(e.strLabel ? e.strLabel : "#Localization_Import_Btn"),
              ),
              l.createElement("input", {
                id: "importlocalization",
                className: C.ImportButton,
                style: { display: "none" },
                type: "file",
                onSubmit: v,
                onChange: v,
                multiple: !0,
              }),
            ),
          );
        };
    },
    88408: (e, t, a) => {
      "use strict";
      a.d(t, { K: () => i });
      var o = a(25307),
        n = a.n(o);
      class i {
        static ParseCSVFile(e) {
          return new Promise((t, a) => {
            const o = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => a({ errors: [e] }),
            };
            n().parse(e, o);
          });
        }
        static ReadFile(e) {
          return new Promise((t, a) => {
            const o = new FileReader();
            (o.onload = (e) => t(o.result)), o.readAsText(e);
          });
        }
        static WriteFile(e, t) {
          let a = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
          else {
            const t = window.URL.createObjectURL(e);
            a.href = t;
          }
          a.setAttribute("download", t), a.click();
          try {
            document.removeChild(a);
          } catch (e) {}
        }
        static WriteCSVToFile(e, t) {
          const a = n().unparse(e, { header: !0 });
          i.WriteFile(new Blob([a], { type: "text/csv:charset=utf-8;" }), t);
        }
        static WriteXMLToFile(e, t) {
          const a = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let o =
            "<" + a() + 'xml version="1.0" encoding="UTF-8" ' + a() + ">\n";
          (o += new XMLSerializer().serializeToString(e)),
            i.WriteFile(
              new Blob([o], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
      i.m_DummyValueForQuestionHack = 0;
    },
    45070: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => c, i: () => m });
      var o = a(85556),
        n = a(77936),
        i = a(38071),
        l = a(83999),
        r = a(88408),
        s = a(31846);
      class c {
        constructor() {
          this.m_mapTokens = new Map();
        }
        GetLocalization(e, t) {
          const a = this.m_mapTokens.get(e);
          if (a && a[t]) return a[t];
        }
        SetLocalization(e, t, a) {
          let o = this.m_mapTokens.get(e);
          o || ((o = (0, l.LG)([], 31, null)), this.m_mapTokens.set(e, o)),
            (o[t] = a);
        }
        GetSortedTokenList() {
          let e = [];
          return (
            this.m_mapTokens.forEach((t, a) => e.push(a)),
            e.sort((e, t) => e.localeCompare(t)),
            e
          );
        }
        GetLanguagesWithTokens() {
          let e = new Map();
          this.m_mapTokens.forEach((t) => {
            for (let a = 0; a < t.length; ++a)
              !e.has(a) &&
                null !== t[a] &&
                void 0 !== t[a] &&
                t[a].trim().length > 0 &&
                e.set(a, !0);
          });
          let t = new Array();
          return (
            e.forEach((e, a) => {
              e && t.push(a);
            }),
            t
          );
        }
        ClearLanguagesTokens(e) {
          e.forEach((e) => {
            this.m_mapTokens.forEach((t, a) => {
              e < t.length && null !== t[e] && (t[e] = null);
            });
          });
        }
        DebugPrintData() {
          const e = new Array();
          return (
            this.m_mapTokens.forEach((t, a) => e.push(`${a}=${t.join(",")}`)),
            e.join("\n")
          );
        }
      }
      class m {
        DetectAndFormatCSV(e) {
          var t, a, o, i, l, r;
          let s = null;
          return (
            (null ===
              (a =
                null === (t = null == e ? void 0 : e.meta) || void 0 === t
                  ? void 0
                  : t.fields) || void 0 === a
              ? void 0
              : a.length) >= 3 &&
            "field" === e.meta.fields[0] &&
            "language" === e.meta.fields[1] &&
            "value" === e.meta.fields[2]
              ? (s = this.ReadLocalizationData_CSV_TokenLanguageList(e))
              : (null ===
                    (i =
                      null === (o = null == e ? void 0 : e.meta) || void 0 === o
                        ? void 0
                        : o.fields) || void 0 === i
                    ? void 0
                    : i.length) >= 2 &&
                  "field" === e.meta.fields[0] &&
                  -1 != (0, n.jM)(e.meta.fields[1], -1)
                ? (s = this.ReadLocalizationData_CSV_LanguageColumns(e))
                : (null ===
                    (r =
                      null === (l = null == e ? void 0 : e.meta) || void 0 === l
                        ? void 0
                        : l.fields) || void 0 === r
                    ? void 0
                    : r.length) >= 2 &&
                  "language" === e.meta.fields[0] &&
                  (s = this.ReadLocalizationData_CSV_LanguageRows(e)),
            s
          );
        }
        ReadLocalizationData_XML_SingleLanguage(e, t) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            let a = new c(),
              o = new DOMParser(),
              n = yield r.K.ReadFile(e),
              i = o.parseFromString(n.toString(), "application/xml");
            for (let e = 0; e < i.documentElement.children.length; ++e) {
              const o = i.documentElement.children.item(e),
                n = o.getAttribute("id").toLocaleLowerCase(),
                l = o.textContent;
              a.SetLocalization(n, t, l);
            }
            return a;
          });
        }
        ReadLocalizationData_CSV_TokenLanguageList(e) {
          const t = new c();
          return (
            e.data.forEach((e) => {
              const a = e.field,
                o = (0, n.jM)(e.language);
              t.SetLocalization(a, o, e.value);
            }),
            t
          );
        }
        ReadLocalizationData_CSV_LanguageColumns(e) {
          const t = new c();
          return (
            e.data.forEach((e) => {
              const a = e.field;
              for (let o = 0; o < 31; ++o) {
                const i = (0, n.eV)((0, n.j_)(o));
                t.SetLocalization(a, o, e[i]);
              }
            }),
            t
          );
        }
        ReadLocalizationData_CSV_LanguageRows(e) {
          const t = new c();
          return (
            e.data.forEach((e) => {
              const a = (0, n.jM)(e.language, 31);
              if (31 !== a)
                for (const [o, n] of Object.entries(e))
                  "language" !== o &&
                    "string" == typeof n &&
                    t.SetLocalization(o, a, n);
            }),
            t
          );
        }
        GetExportLanguages() {
          return s.LJ.GetLanguageListForRealms([i.IN.k_ESteamRealmGlobal]);
        }
        WriteLocalizationData_CSV_TokenAndLanguageColumns(e, t) {
          let a = new Array();
          e.GetSortedTokenList().forEach((t) => {
            for (const o of this.GetExportLanguages()) {
              let i = { field: t };
              (i.language = (0, n.eV)((0, n.j_)(o))),
                (i.value = e.GetLocalization(t, o)),
                a.push(i);
            }
          }),
            r.K.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_CSV_LanguageColumns(e, t) {
          let a = new Array();
          e.GetSortedTokenList().forEach((t) => {
            let o = { field: t };
            for (const a of this.GetExportLanguages())
              o[(0, n.eV)((0, n.j_)(a))] = e.GetLocalization(t, a);
            a.push(o);
          }),
            r.K.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_CSV_LanguageRows(e, t) {
          let a = new Array();
          for (const e of this.GetExportLanguages())
            a.length <= e - 1 && a.push({ language: "" }),
              a.push({ language: (0, n.eV)((0, n.j_)(e)) });
          e.GetSortedTokenList().forEach((t) => {
            for (const o of this.GetExportLanguages()) {
              const n = e.GetLocalization(t, o);
              a[o][t] = n;
            }
          }),
            r.K.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_XML_SingleLanguage(e, t, a) {
          let o = document.implementation.createDocument(null, "content", null);
          e.GetSortedTokenList().forEach((a) => {
            let n = o.createElement("string");
            n.setAttribute("id", a),
              n.appendChild(o.createTextNode(e.GetLocalization(a, t) || "")),
              o.documentElement.append(n);
          }),
            r.K.WriteXMLToFile(o, a);
        }
      }
    },
    77650: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => o });
      const o =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
    },
  },
]);

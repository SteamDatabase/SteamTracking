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
      a.d(t, { Gp: () => C, Q0: () => S });
      var o = a(25307),
        n = a.n(o),
        i = a(47427),
        l = a(77936),
        r = a(38071),
        s = a(20029),
        c = a(1485),
        m = a(71741),
        u = a(50898),
        g = a(90069),
        L = a(46882),
        d = a(16649),
        E = a(13129),
        p = a(31846),
        A = a(45070),
        h = a(59728),
        _ = a(49975);
      const C = (e) => {
          const t = (t, a) => {
            t.preventDefault();
            const {
                fnGetLocData: o,
                closeModal: n,
                strFileNamePrefix: i,
                lang: r,
              } = e,
              s = o(),
              c = new A.i();
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
                  r,
                  m + "_" + (0, l.eV)((0, l.j_)(r)) + ".xml",
                );
            }
            n && n();
          };
          return i.createElement(
            i.Fragment,
            null,
            Boolean(e.bShowCSV) &&
              i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  c.KM,
                  { onClick: (e) => t(e, "csv_row") },
                  (0, p.Xx)("#Localization_Export_Btn_RowLanguages"),
                ),
                i.createElement(
                  c.KM,
                  { onClick: (e) => t(e, "csv_column") },
                  (0, p.Xx)("#Localization_Export_Btn_ColumnLanguages"),
                ),
                i.createElement(
                  c.KM,
                  { onClick: (e) => t(e, "csv_token") },
                  (0, p.Xx)("#Localization_Export_Btn_TokenLanguages"),
                ),
              ),
            Boolean(e.bShowXML) &&
              i.createElement(
                c.KM,
                { onClick: (e) => t(e, "xml") },
                (0, p.Xx)("#Localization_Export_Btn_XML"),
              ),
          );
        },
        S = (e) => {
          const [t, a] = (0, i.useState)(!1),
            o = (e, t) => {
              a(!1),
                console.log(
                  "ImportLocalizationAction: On Handle Parse error: " +
                    e.message,
                  e,
                ),
                (0, g.AM)(
                  i.createElement(
                    u.JX,
                    null,
                    i.createElement(
                      "div",
                      null,
                      i.createElement(
                        "p",
                        null,
                        (0, p.Xx)("#Localization_Error_Input"),
                      ),
                      i.createElement("p", null, e.message),
                    ),
                  ),
                  window,
                );
            },
            c = (e) => {
              a(!1);
              let t = "";
              e.forEach((e) => {
                t.length > 0 && (t += ", "),
                  (t += (0, p.Xx)("#Language_" + (0, l.j_)(e)));
              }),
                (0, g.AM)(
                  i.createElement(
                    u.uH,
                    {
                      strTitle: (0, p.Xx)("#EventDisplay_Share_Success"),
                      bAlertDialog: !0,
                    },
                    i.createElement(
                      "div",
                      null,
                      0 == t.length
                        ? (0, p.Xx)(
                            "#Localization_Success_ImportComplete_NoChange",
                          )
                        : (0, p.Xx)("#Localization_Success_ImportComplete", t),
                    ),
                  ),
                  window,
                );
            },
            C = async (t) => {
              let i = t.target.files;
              if (i && i.length > 0) {
                a(!0);
                let t = new Array(),
                  l = new A.i();
                for (let a = 0; a < i.length; ++a)
                  if (i[a]) {
                    if (i[a].name.toLocaleLowerCase().endsWith(".csv"))
                      return void n().parse(i[0], {
                        header: !0,
                        complete: (t) => {
                          let a = new A.i().DetectAndFormatCSV(t);
                          if (!a)
                            return void o({
                              code: "",
                              message: "",
                              row: 0,
                              type: "filenameerror",
                            });
                          const n = p.LJ.GetLanguageListForRealms([
                              r.IN.k_ESteamRealmGlobal,
                            ]),
                            i = e.fnOnImportLocData(a, n);
                          c(i);
                        },
                        error: o,
                      });
                    if (i[a].name.toLocaleLowerCase().endsWith(".xml")) {
                      let n = (0, s.Z)(i[a].name, -1);
                      if (null == n || -1 == n)
                        return void o({
                          code: "",
                          message: (0, p.Xx)(
                            "#Localization_Error_FileLangauage",
                            i[a].name,
                          ),
                          row: 0,
                          type: "filenameerror",
                        });
                      try {
                        const o =
                          await l.ReadLocalizationData_XML_SingleLanguage(
                            i[a],
                            n,
                          );
                        e.fnOnImportLocData(o, [n]).map((e) => {
                          -1 == t.indexOf(e) && t.push(e);
                        });
                      } catch (e) {
                        let t = (0, d.l)(e);
                        return void o({
                          code: "",
                          message: (0, p.Xx)(
                            "#Localization_Error_XMLParseError",
                            t.strErrorMsg,
                          ),
                          row: 0,
                          type: "parseerror",
                        });
                      }
                    } else
                      o({
                        code: "",
                        message: (0, p.Xx)(
                          "#Localization_Error_FileExtention",
                          i[a].name,
                        ),
                        row: 0,
                        type: "filenameerror",
                      });
                  }
                c(t);
              }
            };
          return i.createElement(
            h.HP,
            {
              className: (0, E.Z)(
                e.className ? e.className : m.EditPreviewButton,
              ),
              toolTipContent: e.strToolTip,
            },
            i.createElement(
              "label",
              { className: _.ImportButton, htmlFor: "importlocalization" },
              t && i.createElement(L.V, { size: "small" }),
              i.createElement(
                "div",
                { className: _.Label },
                (0, p.Xx)(e.strLabel ? e.strLabel : "#Localization_Import_Btn"),
              ),
              i.createElement("input", {
                id: "importlocalization",
                className: _.ImportButton,
                style: { display: "none" },
                type: "file",
                onSubmit: C,
                onChange: C,
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
      a.d(t, { C: () => s, i: () => c });
      var o = a(77936),
        n = a(38071),
        i = a(87225),
        l = a(88408),
        r = a(31846);
      class s {
        constructor() {
          this.m_mapTokens = new Map();
        }
        GetLocalization(e, t) {
          const a = this.m_mapTokens.get(e);
          if (a && a[t]) return a[t];
        }
        SetLocalization(e, t, a) {
          let o = this.m_mapTokens.get(e);
          o || ((o = (0, i.LG)([], 31, null)), this.m_mapTokens.set(e, o)),
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
      class c {
        DetectAndFormatCSV(e) {
          var t, a, n, i, l, r;
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
                      null === (n = null == e ? void 0 : e.meta) || void 0 === n
                        ? void 0
                        : n.fields) || void 0 === i
                    ? void 0
                    : i.length) >= 2 &&
                  "field" === e.meta.fields[0] &&
                  -1 != (0, o.jM)(e.meta.fields[1], -1)
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
        async ReadLocalizationData_XML_SingleLanguage(e, t) {
          let a = new s(),
            o = new DOMParser(),
            n = await l.K.ReadFile(e),
            i = o.parseFromString(n.toString(), "application/xml");
          for (let e = 0; e < i.documentElement.children.length; ++e) {
            const o = i.documentElement.children.item(e),
              n = o.getAttribute("id").toLocaleLowerCase(),
              l = o.textContent;
            a.SetLocalization(n, t, l);
          }
          return a;
        }
        ReadLocalizationData_CSV_TokenLanguageList(e) {
          const t = new s();
          return (
            e.data.forEach((e) => {
              const a = e.field,
                n = (0, o.jM)(e.language);
              t.SetLocalization(a, n, e.value);
            }),
            t
          );
        }
        ReadLocalizationData_CSV_LanguageColumns(e) {
          const t = new s();
          return (
            e.data.forEach((e) => {
              const a = e.field;
              for (let n = 0; n < 31; ++n) {
                const i = (0, o.eV)((0, o.j_)(n));
                t.SetLocalization(a, n, e[i]);
              }
            }),
            t
          );
        }
        ReadLocalizationData_CSV_LanguageRows(e) {
          const t = new s();
          return (
            e.data.forEach((e) => {
              const a = (0, o.jM)(e.language, 31);
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
          return r.LJ.GetLanguageListForRealms([n.IN.k_ESteamRealmGlobal]);
        }
        WriteLocalizationData_CSV_TokenAndLanguageColumns(e, t) {
          let a = new Array();
          e.GetSortedTokenList().forEach((t) => {
            for (const n of this.GetExportLanguages()) {
              let i = { field: t };
              (i.language = (0, o.eV)((0, o.j_)(n))),
                (i.value = e.GetLocalization(t, n)),
                a.push(i);
            }
          }),
            l.K.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_CSV_LanguageColumns(e, t) {
          let a = new Array();
          e.GetSortedTokenList().forEach((t) => {
            let n = { field: t };
            for (const a of this.GetExportLanguages())
              n[(0, o.eV)((0, o.j_)(a))] = e.GetLocalization(t, a);
            a.push(n);
          }),
            l.K.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_CSV_LanguageRows(e, t) {
          let a = new Array();
          for (const e of this.GetExportLanguages())
            a.length <= e - 1 && a.push({ language: "" }),
              a.push({ language: (0, o.eV)((0, o.j_)(e)) });
          e.GetSortedTokenList().forEach((t) => {
            for (const o of this.GetExportLanguages()) {
              const n = e.GetLocalization(t, o);
              a[o][t] = n;
            }
          }),
            l.K.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_XML_SingleLanguage(e, t, a) {
          let o = document.implementation.createDocument(null, "content", null);
          e.GetSortedTokenList().forEach((a) => {
            let n = o.createElement("string");
            n.setAttribute("id", a),
              n.appendChild(o.createTextNode(e.GetLocalization(a, t) || "")),
              o.documentElement.append(n);
          }),
            l.K.WriteXMLToFile(o, a);
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

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
      var n = a(25307),
        o = a.n(n),
        i = a(47427),
        l = a(77936),
        r = a(38071),
        s = a(20029),
        c = a(1485),
        m = a(71741),
        g = a(50898),
        u = a(90069),
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
                fnGetLocData: n,
                closeModal: o,
                strFileNamePrefix: i,
                lang: r,
              } = e,
              s = n(),
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
            o && o();
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
            n = (e, t) => {
              a(!1),
                console.log(
                  "ImportLocalizationAction: On Handle Parse error: " +
                    e.message,
                  e,
                ),
                (0, u.AM)(
                  i.createElement(
                    g.JX,
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
                (0, u.AM)(
                  i.createElement(
                    g.uH,
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
                      return void o().parse(i[0], {
                        header: !0,
                        complete: (t) => {
                          let a = new A.i().DetectAndFormatCSV(t);
                          if (!a)
                            return void n({
                              code: "",
                              message: "",
                              row: 0,
                              type: "filenameerror",
                            });
                          const o = p.LJ.GetLanguageListForRealms([
                              r.IN.k_ESteamRealmGlobal,
                            ]),
                            i = e.fnOnImportLocData(a, o);
                          c(i);
                        },
                        error: n,
                      });
                    if (i[a].name.toLocaleLowerCase().endsWith(".xml")) {
                      let o = (0, s.Z)(i[a].name, -1);
                      if (null == o || -1 == o)
                        return void n({
                          code: "",
                          message: (0, p.Xx)(
                            "#Localization_Error_FileLangauage",
                            i[a].name,
                          ),
                          row: 0,
                          type: "filenameerror",
                        });
                      try {
                        const n =
                          await l.ReadLocalizationData_XML_SingleLanguage(
                            i[a],
                            o,
                          );
                        e.fnOnImportLocData(n, [o]).map((e) => {
                          -1 == t.indexOf(e) && t.push(e);
                        });
                      } catch (e) {
                        let t = (0, d.l)(e);
                        return void n({
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
                      n({
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
      var n = a(25307),
        o = a.n(n);
      class i {
        static ParseCSVFile(e) {
          return new Promise((t, a) => {
            const n = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => a({ errors: [e] }),
            };
            o().parse(e, n);
          });
        }
        static ReadFile(e) {
          return new Promise((t, a) => {
            const n = new FileReader();
            (n.onload = (e) => t(n.result)), n.readAsText(e);
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
          const a = o().unparse(e, { header: !0 });
          i.WriteFile(new Blob([a], { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const a = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let n =
            "<" + a() + 'xml version="1.0" encoding="UTF-8" ' + a() + ">\n";
          (n += new XMLSerializer().serializeToString(e)),
            i.WriteFile(
              new Blob([n], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
    },
    45070: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => s, i: () => c });
      var n = a(77936),
        o = a(38071),
        i = a(87225),
        l = a(88408),
        r = a(31846);
      class s {
        m_mapTokens = new Map();
        GetLocalization(e, t) {
          const a = this.m_mapTokens.get(e);
          if (a && a[t]) return a[t];
        }
        SetLocalization(e, t, a) {
          let n = this.m_mapTokens.get(e);
          n || ((n = (0, i.LG)([], 31, null)), this.m_mapTokens.set(e, n)),
            (n[t] = a);
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
          let t = null;
          return (
            e?.meta?.fields?.length >= 3 &&
            "field" === e.meta.fields[0] &&
            "language" === e.meta.fields[1] &&
            "value" === e.meta.fields[2]
              ? (t = this.ReadLocalizationData_CSV_TokenLanguageList(e))
              : e?.meta?.fields?.length >= 2 &&
                  "field" === e.meta.fields[0] &&
                  -1 != (0, n.jM)(e.meta.fields[1], -1)
                ? (t = this.ReadLocalizationData_CSV_LanguageColumns(e))
                : e?.meta?.fields?.length >= 2 &&
                  "language" === e.meta.fields[0] &&
                  (t = this.ReadLocalizationData_CSV_LanguageRows(e)),
            t
          );
        }
        async ReadLocalizationData_XML_SingleLanguage(e, t) {
          let a = new s(),
            n = new DOMParser(),
            o = await l.K.ReadFile(e),
            i = n.parseFromString(o.toString(), "application/xml");
          for (let e = 0; e < i.documentElement.children.length; ++e) {
            const n = i.documentElement.children.item(e),
              o = n.getAttribute("id").toLocaleLowerCase(),
              l = n.textContent;
            a.SetLocalization(o, t, l);
          }
          return a;
        }
        ReadLocalizationData_CSV_TokenLanguageList(e) {
          const t = new s();
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
          const t = new s();
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
          const t = new s();
          return (
            e.data.forEach((e) => {
              const a = (0, n.jM)(e.language, 31);
              if (31 !== a)
                for (const [n, o] of Object.entries(e))
                  "language" !== n &&
                    "string" == typeof o &&
                    t.SetLocalization(n, a, o);
            }),
            t
          );
        }
        GetExportLanguages() {
          return r.LJ.GetLanguageListForRealms([o.IN.k_ESteamRealmGlobal]);
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
            l.K.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_CSV_LanguageColumns(e, t) {
          let a = new Array();
          e.GetSortedTokenList().forEach((t) => {
            let o = { field: t };
            for (const a of this.GetExportLanguages())
              o[(0, n.eV)((0, n.j_)(a))] = e.GetLocalization(t, a);
            a.push(o);
          }),
            l.K.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_CSV_LanguageRows(e, t) {
          let a = new Array();
          for (const e of this.GetExportLanguages())
            a.length <= e - 1 && a.push({ language: "" }),
              a.push({ language: (0, n.eV)((0, n.j_)(e)) });
          e.GetSortedTokenList().forEach((t) => {
            for (const n of this.GetExportLanguages()) {
              const o = e.GetLocalization(t, n);
              a[n][t] = o;
            }
          }),
            l.K.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_XML_SingleLanguage(e, t, a) {
          let n = document.implementation.createDocument(null, "content", null);
          e.GetSortedTokenList().forEach((a) => {
            let o = n.createElement("string");
            o.setAttribute("id", a),
              o.appendChild(n.createTextNode(e.GetLocalization(a, t) || "")),
              n.documentElement.append(o);
          }),
            l.K.WriteXMLToFile(n, a);
        }
      }
    },
    77650: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
    },
  },
]);

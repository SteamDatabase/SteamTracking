/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9855],
  {
    54736: (e) => {
      e.exports = {
        DisplayAdminPanel_Spacer: "_3TzVFi3VdHXUk1AerBpZc-",
        EventEditorTopBarContainer: "_1Afx7wzva3-ghxcAy6EQhs",
        EventEditorBottomBar: "_1noS58WsfHN3KuGVDzlv9r",
        EventPublished: "_3zTXCKuKmaCdEoxSBTzPAa",
        EventUnPublished: "pjxnm0P9LLWFXCwsaDKUa",
        AdditionalContent: "_2fUl5vCnrlT9P7kskRIiWx",
      };
    },
    96471: (e) => {
      e.exports = {
        Label: "_1LhItwhLHspVcQdfcbd2Sg",
        ImportLocSampleButtonCtn: "D-1dlROLVuva-sb6tFgwU",
        SampleTitle: "_9189ilzQ3YES-a-6DyBhR",
        ImportButton: "WyfyxbGrKQq8cKMK5kfxE",
      };
    },
    25228: (e, t, a) => {
      "use strict";
      a.d(t, { Yg: () => w, t3: () => f });
      var o = a(94649),
        n = a.n(o),
        l = a(90626),
        i = a(22837),
        r = a(2160),
        s = a(69343),
        c = a(68255),
        g = a(95695),
        m = a(9154),
        u = a(738),
        L = a(22797),
        d = a(68797),
        E = a(52038),
        A = a(61859),
        h = a(87669),
        p = a(32754),
        _ = a(96471);
      const w = (e) => {
          const t = (t, a) => {
            t.preventDefault();
            const {
                fnGetLocData: o,
                closeModal: n,
                strFileNamePrefix: l,
                lang: r,
              } = e,
              s = o(),
              c = new h.s();
            let g = l ? l + "_localization" : "localization";
            switch (a) {
              case "csv_row":
                c.WriteLocalizationData_CSV_LanguageRows(s, g + ".csv");
                break;
              case "csv_column":
                c.WriteLocalizationData_CSV_LanguageColumns(s, g + ".csv");
                break;
              case "csv_token":
                c.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                  s,
                  g + ".csv",
                );
                break;
              case "xml":
                c.WriteLocalizationData_XML_SingleLanguage(
                  s,
                  r,
                  g + "_" + (0, i.x6)((0, i.Lg)(r)) + ".xml",
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
                  c.jn,
                  { onClick: (e) => t(e, "csv_row") },
                  (0, A.we)("#Localization_Export_Btn_RowLanguages"),
                ),
                l.createElement(
                  c.jn,
                  { onClick: (e) => t(e, "csv_column") },
                  (0, A.we)("#Localization_Export_Btn_ColumnLanguages"),
                ),
                l.createElement(
                  c.jn,
                  { onClick: (e) => t(e, "csv_token") },
                  (0, A.we)("#Localization_Export_Btn_TokenLanguages"),
                ),
              ),
            Boolean(e.bShowXML) &&
              l.createElement(
                c.jn,
                { onClick: (e) => t(e, "xml") },
                (0, A.we)("#Localization_Export_Btn_XML"),
              ),
          );
        },
        f = (e) => {
          const [t, a] = (0, l.useState)(!1),
            o = (e, t) => {
              a(!1),
                console.log(
                  "ImportLocalizationAction: On Handle Parse error: " +
                    e.message,
                  e,
                ),
                (0, u.pg)(
                  l.createElement(
                    m.KG,
                    null,
                    l.createElement(
                      "div",
                      null,
                      l.createElement(
                        "p",
                        null,
                        (0, A.we)("#Localization_Error_Input"),
                      ),
                      l.createElement("p", null, e.message),
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
                  (t += (0, A.we)("#Language_" + (0, i.Lg)(e)));
              }),
                (0, u.pg)(
                  l.createElement(
                    m.o0,
                    {
                      strTitle: (0, A.we)("#EventDisplay_Share_Success"),
                      bAlertDialog: !0,
                    },
                    l.createElement(
                      "div",
                      null,
                      0 == t.length
                        ? (0, A.we)(
                            "#Localization_Success_ImportComplete_NoChange",
                          )
                        : (0, A.we)("#Localization_Success_ImportComplete", t),
                    ),
                  ),
                  window,
                );
            },
            w = async (t) => {
              let l = t.target.files;
              if (l && l.length > 0) {
                a(!0);
                let t = new Array(),
                  i = new h.s();
                for (let a = 0; a < l.length; ++a)
                  if (l[a]) {
                    if (l[a].name.toLocaleLowerCase().endsWith(".csv"))
                      return void n().parse(l[0], {
                        header: !0,
                        complete: (t) => {
                          let a = new h.s().DetectAndFormatCSV(t);
                          if (!a)
                            return void o({
                              code: "",
                              message: "",
                              row: 0,
                              type: "filenameerror",
                            });
                          const n = A.A0.GetLanguageListForRealms([
                              r.TU.k_ESteamRealmGlobal,
                            ]),
                            l = e.fnOnImportLocData(a, n);
                          c(l);
                        },
                        error: o,
                      });
                    if (l[a].name.toLocaleLowerCase().endsWith(".xml")) {
                      let { language: n } = (0, s.jj)(l[a].name, -1);
                      if (null == n || -1 == n)
                        return void o({
                          code: "",
                          message: (0, A.we)(
                            "#Localization_Error_FileLangauage",
                            l[a].name,
                          ),
                          row: 0,
                          type: "filenameerror",
                        });
                      try {
                        const o =
                          await i.ReadLocalizationData_XML_SingleLanguage(
                            l[a],
                            n,
                          );
                        e.fnOnImportLocData(o, [n]).forEach((e) => {
                          -1 == t.indexOf(e) && t.push(e);
                        });
                      } catch (e) {
                        let t = (0, d.H)(e);
                        return void o({
                          code: "",
                          message: (0, A.we)(
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
                        message: (0, A.we)(
                          "#Localization_Error_FileExtention",
                          l[a].name,
                        ),
                        row: 0,
                        type: "filenameerror",
                      });
                  }
                c(t);
              }
            };
          return l.createElement(
            p.he,
            {
              className: (0, E.A)(
                e.className ? e.className : g.EditPreviewButton,
              ),
              toolTipContent: e.strToolTip,
            },
            l.createElement(
              "label",
              { className: _.ImportButton, htmlFor: "importlocalization" },
              t && l.createElement(L.t, { size: "small" }),
              l.createElement(
                "div",
                { className: _.Label },
                (0, A.we)(e.strLabel ? e.strLabel : "#Localization_Import_Btn"),
              ),
              l.createElement("input", {
                id: "importlocalization",
                className: _.ImportButton,
                style: { display: "none" },
                type: "file",
                onSubmit: w,
                onChange: w,
                multiple: !0,
              }),
            ),
          );
        };
    },
    87669: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => s, s: () => c });
      var o = a(22837),
        n = a(2160),
        l = a(62490),
        i = a(9161),
        r = a(61859);
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
          o || ((o = (0, l.$Y)([], 31, null)), this.m_mapTokens.set(e, o)),
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
          var t, a, n, l, i, r;
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
                    (l =
                      null === (n = null == e ? void 0 : e.meta) || void 0 === n
                        ? void 0
                        : n.fields) || void 0 === l
                    ? void 0
                    : l.length) >= 2 &&
                  "field" === e.meta.fields[0] &&
                  -1 != (0, o.sf)(e.meta.fields[1], -1)
                ? (s = this.ReadLocalizationData_CSV_LanguageColumns(e))
                : (null ===
                    (r =
                      null === (i = null == e ? void 0 : e.meta) || void 0 === i
                        ? void 0
                        : i.fields) || void 0 === r
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
            n = await i.g.ReadFile(e),
            l = o.parseFromString(n.toString(), "application/xml");
          for (let e = 0; e < l.documentElement.children.length; ++e) {
            const o = l.documentElement.children.item(e);
            if (!o.getAttribute("id"))
              throw "Can not find id for element. Probably malformed XML";
            const n = o.getAttribute("id").toLocaleLowerCase(),
              i = o.textContent;
            a.SetLocalization(n, t, i);
          }
          return a;
        }
        ReadLocalizationData_CSV_TokenLanguageList(e) {
          const t = new s();
          return (
            e.data.forEach((e) => {
              const a = e.field,
                n = (0, o.sf)(e.language);
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
                const l = (0, o.x6)((0, o.Lg)(n));
                t.SetLocalization(a, n, e[l]);
              }
            }),
            t
          );
        }
        ReadLocalizationData_CSV_LanguageRows(e) {
          const t = new s();
          return (
            e.data.forEach((e) => {
              const a = (0, o.sf)(e.language, 31);
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
          return r.A0.GetLanguageListForRealms([n.TU.k_ESteamRealmGlobal]);
        }
        WriteLocalizationData_CSV_TokenAndLanguageColumns(e, t) {
          let a = new Array();
          e.GetSortedTokenList().forEach((t) => {
            for (const n of this.GetExportLanguages()) {
              let l = { field: t };
              (l.language = (0, o.x6)((0, o.Lg)(n))),
                (l.value = e.GetLocalization(t, n)),
                a.push(l);
            }
          }),
            i.g.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_CSV_LanguageColumns(e, t) {
          let a = new Array();
          e.GetSortedTokenList().forEach((t) => {
            let n = { field: t };
            for (const a of this.GetExportLanguages())
              n[(0, o.x6)((0, o.Lg)(a))] = e.GetLocalization(t, a);
            a.push(n);
          }),
            i.g.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_CSV_LanguageRows(e, t) {
          let a = new Array();
          for (const e of this.GetExportLanguages())
            a.length <= e - 1 && a.push({ language: "" }),
              a.push({ language: (0, o.x6)((0, o.Lg)(e)) });
          e.GetSortedTokenList().forEach((t) => {
            for (const o of this.GetExportLanguages()) {
              const n = e.GetLocalization(t, o);
              a[o][t] = n;
            }
          }),
            i.g.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_XML_SingleLanguage(e, t, a) {
          let o = document.implementation.createDocument(null, "content", null);
          e.GetSortedTokenList().forEach((a) => {
            let n = o.createElement("string");
            n.setAttribute("id", a),
              n.appendChild(o.createTextNode(e.GetLocalization(a, t) || "")),
              o.documentElement.append(n);
          }),
            i.g.WriteXMLToFile(o, a);
        }
      }
    },
    26759: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => o });
      const o =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
    },
  },
]);

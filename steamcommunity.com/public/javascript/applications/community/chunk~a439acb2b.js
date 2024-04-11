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
      var o = a(85556),
        n = a(25307),
        l = a.n(n),
        i = a(47427),
        r = a(77936),
        s = a(38071),
        c = a(20029),
        m = a(1485),
        u = a(71741),
        g = a(50898),
        d = a(90069),
        L = a(46882),
        p = a(16649),
        _ = a(13129),
        h = a(31846),
        f = a(45070),
        E = a(59728),
        v = a(49975);
      const C = (e) => {
          const t = (t, a) => {
            t.preventDefault();
            const {
                fnGetLocData: o,
                closeModal: n,
                strFileNamePrefix: l,
                lang: i,
              } = e,
              s = o(),
              c = new f.i();
            let m = l ? l + "_localization" : "localization";
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
                  i,
                  m + "_" + (0, r.eV)((0, r.j_)(i)) + ".xml",
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
                  m.KM,
                  { onClick: (e) => t(e, "csv_row") },
                  (0, h.Xx)("#Localization_Export_Btn_RowLanguages"),
                ),
                i.createElement(
                  m.KM,
                  { onClick: (e) => t(e, "csv_column") },
                  (0, h.Xx)("#Localization_Export_Btn_ColumnLanguages"),
                ),
                i.createElement(
                  m.KM,
                  { onClick: (e) => t(e, "csv_token") },
                  (0, h.Xx)("#Localization_Export_Btn_TokenLanguages"),
                ),
              ),
            Boolean(e.bShowXML) &&
              i.createElement(
                m.KM,
                { onClick: (e) => t(e, "xml") },
                (0, h.Xx)("#Localization_Export_Btn_XML"),
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
                (0, d.AM)(
                  i.createElement(
                    g.JX,
                    null,
                    i.createElement(
                      "div",
                      null,
                      i.createElement(
                        "p",
                        null,
                        (0, h.Xx)("#Localization_Error_Input"),
                      ),
                      i.createElement("p", null, e.message),
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
                  (t += (0, h.Xx)("#Language_" + (0, r.j_)(e)));
              }),
                (0, d.AM)(
                  i.createElement(
                    g.uH,
                    {
                      strTitle: (0, h.Xx)("#EventDisplay_Share_Success"),
                      bAlertDialog: !0,
                    },
                    i.createElement(
                      "div",
                      null,
                      0 == t.length
                        ? (0, h.Xx)(
                            "#Localization_Success_ImportComplete_NoChange",
                          )
                        : (0, h.Xx)("#Localization_Success_ImportComplete", t),
                    ),
                  ),
                  window,
                );
            },
            C = (t) =>
              (0, o.mG)(void 0, void 0, void 0, function* () {
                let o = t.target.files;
                if (o && o.length > 0) {
                  a(!0);
                  let t = new Array(),
                    i = new f.i();
                  for (let a = 0; a < o.length; ++a)
                    if (o[a]) {
                      if (o[a].name.toLocaleLowerCase().endsWith(".csv"))
                        return void l().parse(o[0], {
                          header: !0,
                          complete: (t) => {
                            let a = new f.i().DetectAndFormatCSV(t);
                            if (!a)
                              return void n({
                                code: "",
                                message: "",
                                row: 0,
                                type: "filenameerror",
                              });
                            const o = h.LJ.GetLanguageListForRealms([
                                s.IN.k_ESteamRealmGlobal,
                              ]),
                              l = e.fnOnImportLocData(a, o);
                            m(l);
                          },
                          error: n,
                        });
                      if (o[a].name.toLocaleLowerCase().endsWith(".xml")) {
                        let l = (0, c.Z)(o[a].name, -1);
                        if (null == l || -1 == l)
                          return void n({
                            code: "",
                            message: (0, h.Xx)(
                              "#Localization_Error_FileLangauage",
                              o[a].name,
                            ),
                            row: 0,
                            type: "filenameerror",
                          });
                        try {
                          const n =
                            yield i.ReadLocalizationData_XML_SingleLanguage(
                              o[a],
                              l,
                            );
                          e.fnOnImportLocData(n, [l]).map((e) => {
                            -1 == t.indexOf(e) && t.push(e);
                          });
                        } catch (e) {
                          let t = (0, p.l)(e);
                          return void n({
                            code: "",
                            message: (0, h.Xx)(
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
                          message: (0, h.Xx)(
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
          return i.createElement(
            E.HP,
            {
              className: (0, _.Z)(
                e.className ? e.className : u.EditPreviewButton,
              ),
              toolTipContent: e.strToolTip,
            },
            i.createElement(
              "label",
              { className: v.ImportButton, htmlFor: "importlocalization" },
              t && i.createElement(L.V, { size: "small" }),
              i.createElement(
                "div",
                { className: v.Label },
                (0, h.Xx)(e.strLabel ? e.strLabel : "#Localization_Import_Btn"),
              ),
              i.createElement("input", {
                id: "importlocalization",
                className: v.ImportButton,
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
      a.d(t, { K: () => l });
      var o = a(25307),
        n = a.n(o);
      class l {
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
          l.WriteFile(new Blob([a], { type: "text/csv:charset=utf-8;" }), t);
        }
        static WriteXMLToFile(e, t) {
          const a = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let o =
            "<" + a() + 'xml version="1.0" encoding="UTF-8" ' + a() + ">\n";
          (o += new XMLSerializer().serializeToString(e)),
            l.WriteFile(
              new Blob([o], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
      l.m_DummyValueForQuestionHack = 0;
    },
    45070: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => c, i: () => m });
      var o = a(85556),
        n = a(77936),
        l = a(38071),
        i = a(83999),
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
      class m {
        DetectAndFormatCSV(e) {
          var t, a, o, l, i, r;
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
                      null === (o = null == e ? void 0 : e.meta) || void 0 === o
                        ? void 0
                        : o.fields) || void 0 === l
                    ? void 0
                    : l.length) >= 2 &&
                  "field" === e.meta.fields[0] &&
                  -1 != (0, n.jM)(e.meta.fields[1], -1)
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
        ReadLocalizationData_XML_SingleLanguage(e, t) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            let a = new c(),
              o = new DOMParser(),
              n = yield r.K.ReadFile(e),
              l = o.parseFromString(n.toString(), "application/xml");
            for (let e = 0; e < l.documentElement.children.length; ++e) {
              const o = l.documentElement.children.item(e),
                n = o.getAttribute("id").toLocaleLowerCase(),
                i = o.textContent;
              a.SetLocalization(n, t, i);
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
                const l = (0, n.eV)((0, n.j_)(o));
                t.SetLocalization(a, o, e[l]);
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
          return s.LJ.GetLanguageListForRealms([l.IN.k_ESteamRealmGlobal]);
        }
        WriteLocalizationData_CSV_TokenAndLanguageColumns(e, t) {
          let a = new Array();
          e.GetSortedTokenList().forEach((t) => {
            for (const o of this.GetExportLanguages()) {
              let l = { field: t };
              (l.language = (0, n.eV)((0, n.j_)(o))),
                (l.value = e.GetLocalization(t, o)),
                a.push(l);
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
            a.push({ language: (0, n.eV)((0, n.j_)(e)) });
          e.GetSortedTokenList().forEach((t) => {
            for (const o of this.GetExportLanguages())
              a[o][t] = e.GetLocalization(t, o);
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
  },
]);

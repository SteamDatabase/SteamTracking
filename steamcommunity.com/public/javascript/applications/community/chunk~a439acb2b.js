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
    91126: (e) => {
      e.exports = {
        ValveCrowdInSyncCtn: "_8MIrt7rQXkA0xE5sAjOee",
        ValveCrowdInSyncLabel: "_22b0C1Xi03QNdTFKsYypHR",
        SyncPanelError: "yn_yu2EaUigYFm9QQAD7o",
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
    42519: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => h, s: () => p });
      var n = a(90626),
        o = a(68255),
        l = a(95695),
        i = a.n(l),
        r = a(64846),
        c = a(26408),
        s = a(61859),
        m = a(91126),
        u = a.n(m),
        g = a(41756),
        d = a(22837),
        E = a(83882),
        L = a(22797),
        A = a(12155);
      function p(e) {
        var t, a;
        const { editModel: m } = e,
          [p, _] = n.useState(1),
          [w, v] = n.useState(!1),
          [C, S] = n.useState(null),
          f = m.GetClanSteamID(),
          z = m.GetGID(),
          I = (0, g.Wj)(f, z),
          [, D] = n.useReducer((e) => e + 1, 0),
          G =
            I.isSuccess &&
            (null === (t = I.data) || void 0 === t
              ? void 0
              : t.crowdin_project_id) &&
            (null === (a = I.data) || void 0 === a ? void 0 : a.crowdin_file_id)
              ? `https://valve.crowdin.com/editor/${I.data.crowdin_project_id}/${I.data.crowdin_file_id}`
              : null,
          R = (0, g.IW)(f.ConvertTo64BitString(), z, p);
        return I.isLoading
          ? null
          : n.createElement(
              r.E,
              { clanSteamID: e.editModel.GetClanSteamID() },
              n.createElement(E.mt, { active: w }, n.createElement(L.t, null)),
              n.createElement(
                "div",
                { className: u().ValveCrowdInSyncCtn },
                n.createElement(o.J0, {
                  value: m.BPushUpdatesToCrowdInAutomatically(),
                  onChange: (e) => {
                    m.SetPushSourceToCrowdInAutomatically(e), D();
                  },
                }),
                n.createElement(
                  "div",
                  { className: u().ValveCrowdInSyncLabel },
                  (0, s.we)(
                    "#EventEditor_Localization_AutomaticallyPushChangesToCrowdIn",
                  ),
                  " (",
                  G
                    ? n.createElement("a", { href: G }, G)
                    : (0, s.we)("#EventEditor_Localization_NotMappedToCrowdIn"),
                  ")",
                  n.createElement(c.o, {
                    tooltip: (0, s.we)("#EventEditor_Localization_Tooltip"),
                    className: l.tooltip_Ctn,
                  }),
                  n.createElement("br", null),
                  n.createElement(
                    "span",
                    null,
                    (0, s.we)("#EventEditor_Localization_RememberToSave"),
                  ),
                ),
                n.createElement(h, {
                  onChange: (e) => {
                    const t = e.target.value;
                    if ("all" === t) _(-1);
                    else {
                      const e = (0, d.sf)(t);
                      _(e);
                    }
                  },
                }),
                n.createElement(
                  "div",
                  {
                    className: i().EditPreviewButton,
                    onClick: () => {
                      v(!0),
                        R.mutateAsync()
                          .then(() => window.location.reload())
                          .catch((e) => {
                            S(e.toString()), v(!1);
                          })
                          .then(() => {
                            S(null);
                          });
                    },
                  },
                  (0, s.we)("#EventEditor_Localization_FetchLocalization"),
                ),
              ),
              C &&
                n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    "div",
                    { className: u().SyncPanelError },
                    n.createElement(A.X, null),
                    " ",
                    C,
                  ),
                ),
            );
      }
      function h(e) {
        const t = (0, s.O9)(!1);
        let a = Array.from(t.entries());
        a.sort((e, t) => e[1].localeCompare(t[1]));
        const o = a.map(([e, t]) =>
          "english" !== e
            ? n.createElement("option", { key: e, value: e }, t)
            : "",
        );
        return n.createElement(
          "select",
          { onChange: e.onChange },
          n.createElement(
            "option",
            { value: "all" },
            (0, s.we)("#EventEditor_Localization_AllLanguages"),
          ),
          o,
        );
      }
    },
    25228: (e, t, a) => {
      "use strict";
      a.d(t, { Yg: () => w, t3: () => v });
      var n = a(40323),
        o = a.n(n),
        l = a(90626),
        i = a(22837),
        r = a(2160),
        c = a(69343),
        s = a(68255),
        m = a(95695),
        u = a(9154),
        g = a(738),
        d = a(22797),
        E = a(68797),
        L = a(52038),
        A = a(61859),
        p = a(87669),
        h = a(32754),
        _ = a(96471);
      const w = (e) => {
          const t = (t, a) => {
            t.preventDefault();
            const {
                fnGetLocData: n,
                closeModal: o,
                strFileNamePrefix: l,
                lang: r,
              } = e,
              c = n(),
              s = new p.s();
            let m = l ? l + "_localization" : "localization";
            switch (a) {
              case "csv_row":
                s.WriteLocalizationData_CSV_LanguageRows(c, m + ".csv");
                break;
              case "csv_column":
                s.WriteLocalizationData_CSV_LanguageColumns(c, m + ".csv");
                break;
              case "csv_token":
                s.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                  c,
                  m + ".csv",
                );
                break;
              case "xml":
                s.WriteLocalizationData_XML_SingleLanguage(
                  c,
                  r,
                  m + "_" + (0, i.x6)((0, i.Lg)(r)) + ".xml",
                );
            }
            o && o();
          };
          return l.createElement(
            l.Fragment,
            null,
            Boolean(e.bShowCSV) &&
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  s.jn,
                  { onClick: (e) => t(e, "csv_row") },
                  (0, A.we)("#Localization_Export_Btn_RowLanguages"),
                ),
                l.createElement(
                  s.jn,
                  { onClick: (e) => t(e, "csv_column") },
                  (0, A.we)("#Localization_Export_Btn_ColumnLanguages"),
                ),
                l.createElement(
                  s.jn,
                  { onClick: (e) => t(e, "csv_token") },
                  (0, A.we)("#Localization_Export_Btn_TokenLanguages"),
                ),
              ),
            Boolean(e.bShowXML) &&
              l.createElement(
                s.jn,
                { onClick: (e) => t(e, "xml") },
                (0, A.we)("#Localization_Export_Btn_XML"),
              ),
          );
        },
        v = (e) => {
          const [t, a] = (0, l.useState)(!1),
            n = (e, t) => {
              a(!1),
                console.log(
                  "ImportLocalizationAction: On Handle Parse error: " +
                    e.message,
                  e,
                ),
                (0, g.pg)(
                  l.createElement(
                    u.KG,
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
            s = (e) => {
              a(!1);
              let t = "";
              e.forEach((e) => {
                t.length > 0 && (t += ", "),
                  (t += (0, A.we)("#Language_" + (0, i.Lg)(e)));
              }),
                (0, g.pg)(
                  l.createElement(
                    u.o0,
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
                  i = new p.s();
                for (let a = 0; a < l.length; ++a)
                  if (l[a]) {
                    if (l[a].name.toLocaleLowerCase().endsWith(".csv"))
                      return void o().parse(l[0], {
                        header: !0,
                        complete: (t) => {
                          let a = new p.s().DetectAndFormatCSV(t);
                          if (!a)
                            return void n({
                              code: "",
                              message: "",
                              row: 0,
                              type: "filenameerror",
                            });
                          const o = A.A0.GetLanguageListForRealms([
                              r.TU.k_ESteamRealmGlobal,
                            ]),
                            l = e.fnOnImportLocData(a, o);
                          s(l);
                        },
                        error: n,
                      });
                    if (l[a].name.toLocaleLowerCase().endsWith(".xml")) {
                      let { language: o } = (0, c.jj)(l[a].name, -1);
                      if (null == o || -1 == o)
                        return void n({
                          code: "",
                          message: (0, A.we)(
                            "#Localization_Error_FileLangauage",
                            l[a].name,
                          ),
                          row: 0,
                          type: "filenameerror",
                        });
                      try {
                        const n =
                          await i.ReadLocalizationData_XML_SingleLanguage(
                            l[a],
                            o,
                          );
                        e.fnOnImportLocData(n, [o]).forEach((e) => {
                          -1 == t.indexOf(e) && t.push(e);
                        });
                      } catch (e) {
                        let t = (0, E.H)(e);
                        return void n({
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
                      n({
                        code: "",
                        message: (0, A.we)(
                          "#Localization_Error_FileExtention",
                          l[a].name,
                        ),
                        row: 0,
                        type: "filenameerror",
                      });
                  }
                s(t);
              }
            };
          return l.createElement(
            h.he,
            {
              className: (0, L.A)(
                e.className ? e.className : m.EditPreviewButton,
              ),
              toolTipContent: e.strToolTip,
            },
            l.createElement(
              "label",
              { className: _.ImportButton, htmlFor: "importlocalization" },
              t && l.createElement(d.t, { size: "small" }),
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
      a.d(t, { G: () => c, s: () => s });
      var n = a(22837),
        o = a(2160),
        l = a(62490),
        i = a(9161),
        r = a(61859);
      class c {
        constructor() {
          this.m_mapTokens = new Map();
        }
        GetLocalization(e, t) {
          const a = this.m_mapTokens.get(e);
          if (a && a[t]) return a[t];
        }
        SetLocalization(e, t, a) {
          let n = this.m_mapTokens.get(e);
          n || ((n = (0, l.$Y)([], 31, null)), this.m_mapTokens.set(e, n)),
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
      class s {
        DetectAndFormatCSV(e) {
          var t, a, o, l, i, r;
          let c = null;
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
              ? (c = this.ReadLocalizationData_CSV_TokenLanguageList(e))
              : (null ===
                    (l =
                      null === (o = null == e ? void 0 : e.meta) || void 0 === o
                        ? void 0
                        : o.fields) || void 0 === l
                    ? void 0
                    : l.length) >= 2 &&
                  "field" === e.meta.fields[0] &&
                  -1 != (0, n.sf)(e.meta.fields[1], -1)
                ? (c = this.ReadLocalizationData_CSV_LanguageColumns(e))
                : (null ===
                    (r =
                      null === (i = null == e ? void 0 : e.meta) || void 0 === i
                        ? void 0
                        : i.fields) || void 0 === r
                    ? void 0
                    : r.length) >= 2 &&
                  "language" === e.meta.fields[0] &&
                  (c = this.ReadLocalizationData_CSV_LanguageRows(e)),
            c
          );
        }
        async ReadLocalizationData_XML_SingleLanguage(e, t) {
          let a = new c(),
            n = new DOMParser(),
            o = await i.g.ReadFile(e),
            l = n.parseFromString(o.toString(), "application/xml");
          for (let e = 0; e < l.documentElement.children.length; ++e) {
            const n = l.documentElement.children.item(e);
            if (!n.getAttribute("id"))
              throw "Can not find id for element. Probably malformed XML";
            const o = n.getAttribute("id").toLocaleLowerCase(),
              i = n.textContent;
            a.SetLocalization(o, t, i);
          }
          return a;
        }
        ReadLocalizationData_CSV_TokenLanguageList(e) {
          const t = new c();
          return (
            e.data.forEach((e) => {
              const a = e.field,
                o = (0, n.sf)(e.language);
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
                const l = (0, n.x6)((0, n.Lg)(o));
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
              const a = (0, n.sf)(e.language, 31);
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
          return r.A0.GetLanguageListForRealms([o.TU.k_ESteamRealmGlobal]);
        }
        WriteLocalizationData_CSV_TokenAndLanguageColumns(e, t) {
          let a = new Array();
          e.GetSortedTokenList().forEach((t) => {
            for (const o of this.GetExportLanguages()) {
              let l = { field: t };
              (l.language = (0, n.x6)((0, n.Lg)(o))),
                (l.value = e.GetLocalization(t, o)),
                a.push(l);
            }
          }),
            i.g.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_CSV_LanguageColumns(e, t) {
          let a = new Array();
          e.GetSortedTokenList().forEach((t) => {
            let o = { field: t };
            for (const a of this.GetExportLanguages())
              o[(0, n.x6)((0, n.Lg)(a))] = e.GetLocalization(t, a);
            a.push(o);
          }),
            i.g.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_CSV_LanguageRows(e, t) {
          let a = new Array();
          for (const e of this.GetExportLanguages())
            a.length <= e - 1 && a.push({ language: "" }),
              a.push({ language: (0, n.x6)((0, n.Lg)(e)) });
          e.GetSortedTokenList().forEach((t) => {
            for (const n of this.GetExportLanguages()) {
              const o = e.GetLocalization(t, n);
              a[n][t] = o;
            }
          }),
            i.g.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_XML_SingleLanguage(e, t, a) {
          let n = document.implementation.createDocument(null, "content", null);
          e.GetSortedTokenList().forEach((a) => {
            let o = n.createElement("string");
            o.setAttribute("id", a),
              o.appendChild(n.createTextNode(e.GetLocalization(a, t) || "")),
              n.documentElement.append(o);
          }),
            i.g.WriteXMLToFile(n, a);
        }
      }
    },
    26759: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7762],
  {
    88732: (e) => {
      e.exports = {
        Background: "steamml_Background_msjGf",
        SteamMLButton: "steamml_SteamMLButton_2yReX",
        AcceptButton: "steamml_AcceptButton_2tY__",
        Inner: "steamml_Inner_1Zoc2",
        CancelButton: "steamml_CancelButton_2BCE0",
        Disabled: "steamml_Disabled_1W_vx",
        FullSize: "steamml_FullSize_1-nKc",
        Header: "steamml_Header_35ajn",
        HeaderOption: "steamml_HeaderOption_3KFf6",
        Selected: "steamml_Selected_OilN-",
        SchemaPage: "steamml_SchemaPage_36OV-",
        SchemaList: "steamml_SchemaList_3r0tl",
        SelectAppID: "steamml_SelectAppID_3nezX",
        Hidden: "steamml_Hidden_1VPtl",
        SchemaElement: "steamml_SchemaElement_1xjli",
        Label: "steamml_Label_3uE4k",
        SchemaName: "steamml_SchemaName_36bwA",
        AppID: "steamml_AppID_3Uaeb",
        HorizontalSection: "steamml_HorizontalSection_1rTEk",
        RowCount: "steamml_RowCount_gPsPX",
        KeepCount: "steamml_KeepCount_2RxON",
        SchemaDetails: "steamml_SchemaDetails_1gFQf",
        Back: "steamml_Back_2m9wk",
        SchemaDetailsHeader: "steamml_SchemaDetailsHeader_cUNhZ",
        SchemaDetailsBack: "steamml_SchemaDetailsBack_15COw",
        SchemaDetailsTitle: "steamml_SchemaDetailsTitle_9IFUR",
        SchemaDetailsName: "steamml_SchemaDetailsName_CblW8",
        SchemaDetailsSchemaID: "steamml_SchemaDetailsSchemaID_16qUh",
        SchemaDetailsElements: "steamml_SchemaDetailsElements_3Dsdf",
        SchemaDetailsElement: "steamml_SchemaDetailsElement_2_-ub",
        SchemaDetailsElementBody: "steamml_SchemaDetailsElementBody_1lLqQ",
        TypeInt32: "steamml_TypeInt32_3q6FZ",
        TypeName: "steamml_TypeName_11e6z",
        TypeInt64: "steamml_TypeInt64_1sUna",
        TypeBool: "steamml_TypeBool_3QiDC",
        TypeFloat: "steamml_TypeFloat_DfgR3",
        TypeEnum: "steamml_TypeEnum_3w9sP",
        TypeTimestamp: "steamml_TypeTimestamp_33yo7",
        ElementName: "steamml_ElementName_1v_wK",
        SchemaDetailsStructRow: "steamml_SchemaDetailsStructRow_lWQfK",
        CollapseIcon: "steamml_CollapseIcon_1vRxM",
        Collapsed: "steamml_Collapsed_3qRbu",
        StructIndent: "steamml_StructIndent_1bga0",
        IndentCollapsed: "steamml_IndentCollapsed_1OU7X",
        ProblemPage: "steamml_ProblemPage_3F8_L",
        ProblemListContainer: "steamml_ProblemListContainer_35Ll4",
        ProblemListHeader: "steamml_ProblemListHeader_21PbN",
        NoProblems: "steamml_NoProblems_IRyHO",
        ProblemEntry: "steamml_ProblemEntry_13BKE",
        ProblemName: "steamml_ProblemName_3Hgxj",
        Inactive: "steamml_Inactive_TW09g",
        ProblemDescription: "steamml_ProblemDescription_3qnlN",
        ProblemID: "steamml_ProblemID_2yjPq",
        Dates: "steamml_Dates_3jJSR",
        CreatedDate: "steamml_CreatedDate_3nOnI",
        UpdatedDate: "steamml_UpdatedDate_3gM54",
        ProblemSchemaList: "steamml_ProblemSchemaList_2k2xZ",
        AddNewProblem: "steamml_AddNewProblem_1IaIK",
        IsPrompt: "steamml_IsPrompt_1F_iV",
        NewProblemHeader: "steamml_NewProblemHeader_2Uxe1",
        PlusSymbol: "steamml_PlusSymbol_2zfyC",
        NewProblemDescription: "steamml_NewProblemDescription_3vIDf",
        IsHeader: "steamml_IsHeader_1vZgE",
        AddProblemHeader: "steamml_AddProblemHeader_3dXuk",
        LabelValue: "steamml_LabelValue_3wqW3",
        Value: "steamml_Value_3RWed",
        SchemaListContainer: "steamml_SchemaListContainer_3TzDR",
        SchemaSelectListTitle: "steamml_SchemaSelectListTitle_37bp6",
        ButtonContainer: "steamml_ButtonContainer_Sp68r",
        SchemaSelectList: "steamml_SchemaSelectList_3spVx",
        SchemaOption: "steamml_SchemaOption_2eV2T",
        ProblemDetails: "steamml_ProblemDetails_UGqiq",
        BackButton: "steamml_BackButton_1Sb8R",
        ProblemDetailsHeaderContainer:
          "steamml_ProblemDetailsHeaderContainer_28zUx",
        ProblemNameEditing: "steamml_ProblemNameEditing_2268o",
        ProblemDescEditing: "steamml_ProblemDescEditing_VSvOs",
        SchemaListHeader: "steamml_SchemaListHeader_3rvzl",
        SchemaListEdit: "steamml_SchemaListEdit_1Ch8t",
        DeleteLink: "steamml_DeleteLink_2lI41",
      };
    },
    6756: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { SteamMLRoutes: () => f, default: () => k });
      var m = a(94629),
        l = a(89526),
        s = a(565),
        n = a(59934),
        c = a(88732),
        r = a(70983),
        i = a(50265),
        o = a(33940),
        d = (a(38800), a(52868)),
        p = a.n(d),
        S = (a(47330), a(96158), a(82569), a(10079));
      a(67300), a(87358);
      class _ {
        constructor() {
          (this.m_asyncSchemaList = new S.r()),
            (this.m_asyncSchemaDetails = new S.r()),
            (this.m_asyncProblemList = new S.L()),
            (this.m_asyncProblemDetails = new S.r());
        }
        static Get() {
          return (
            _.s_SteamMLStore ||
              ((_.s_SteamMLStore = new _()), _.s_SteamMLStore.Init()),
            _.s_SteamMLStore
          );
        }
        Init() {}
        GetSchemaList(e, t) {
          const a = e + "_" + t;
          return this.m_asyncSchemaList.getAsyncDataWrapper(a).getData(
            30,
            () =>
              (0, o.mG)(this, void 0, void 0, function* () {
                return yield p().get(
                  `${r.De.PARTNER_BASE_URL}steamml/get_schemas?appid=${e}&includesteammlapp=${t}&sessionid=${r.De.SESSIONID}`
                );
              }),
            (e) => e.data.schemas
          );
        }
        GetSchemaDetails(e, t) {
          return this.m_asyncSchemaDetails.getAsyncDataWrapper(t).getData(
            30,
            () =>
              (0, o.mG)(this, void 0, void 0, function* () {
                return yield p().get(
                  `${r.De.PARTNER_BASE_URL}steamml/get_schema_details?appid=${e}&schemaid=${t}&sessionid=${r.De.SESSIONID}`
                );
              }),
            (e) => JSON.parse(e.data.schema_description_json)
          );
        }
        GetProblemList() {
          return this.m_asyncProblemList.getData(
            30,
            () =>
              (0, o.mG)(this, void 0, void 0, function* () {
                return yield p().get(
                  `${r.De.PARTNER_BASE_URL}steamml/get_problems?sessionid=${r.De.SESSIONID}`
                );
              }),
            (e) => e.data.problems
          );
        }
        GetProblemDetails(e) {
          return this.m_asyncProblemDetails.getAsyncDataWrapper(e).getData(
            30,
            () =>
              (0, o.mG)(this, void 0, void 0, function* () {
                return yield p().get(
                  `${r.De.PARTNER_BASE_URL}steamml/get_problem_details?problemid=${e}&sessionid=${r.De.SESSIONID}`
                );
              }),
            (e) => e.data.problem
          );
        }
        CreateProblem(e, t, a) {
          let m = new FormData();
          return (
            m.append("sessionid", r.De.SESSIONID),
            m.append("name", e),
            m.append("description", t),
            m.append("schemaids", a.join(",")),
            p()
              .post(`${r.De.PARTNER_BASE_URL}steamml/create_problem`, m)
              .then(() => {
                this.m_asyncProblemList.clearData();
              })
          );
        }
        EditProblemName(e, t) {
          let a = new FormData();
          a.append("name", t), this.EditProblem(e, a);
        }
        EditProblemDesc(e, t) {
          let a = new FormData();
          a.append("description", t), this.EditProblem(e, a);
        }
        EditProblemSchemas(e, t) {
          let a = new FormData();
          a.append("schemaids", t.join(",")), this.EditProblem(e, a);
        }
        EditProblem(e, t) {
          return (
            t.append("sessionid", r.De.SESSIONID),
            t.append("problemid", e.toString()),
            p()
              .post(`${r.De.PARTNER_BASE_URL}steamml/edit_problem`, t)
              .then(() => {
                this.m_asyncProblemDetails.getAsyncDataWrapper(e).expireData();
              })
          );
        }
        DeleteProblem(e) {
          let t = new FormData();
          return (
            t.append("sessionid", r.De.SESSIONID),
            t.append("problemid", e.toString()),
            p()
              .post(`${r.De.PARTNER_BASE_URL}steamml/delete_problem`, t)
              .then(() => {
                this.m_asyncProblemList.clearData();
              })
          );
        }
      }
      (0, o.gn)([i.LO], _.prototype, "m_asyncSchemaList", void 0),
        (0, o.gn)([i.LO], _.prototype, "m_asyncSchemaDetails", void 0),
        (0, o.gn)([i.LO], _.prototype, "m_asyncProblemList", void 0),
        (0, o.gn)([i.LO], _.prototype, "m_asyncProblemDetails", void 0),
        (0, o.gn)([i.aD], _.prototype, "Init", null);
      var E = a(88464),
        u = a(13806);
      const h = (0, E.Pi)((e) => {
        const t = "0" == (0, n.UO)().schemaid,
          a = [
            { label: "816 - Dota Beta", value: "816" },
            { label: "570 - Dota", value: "570" },
            { label: "730 - CS:GO", value: "730" },
            { label: "1015410 - SteamML", value: "1015410" },
          ],
          [m, r] = (0, l.useState)(a[0].value);
        if (!t) return null;
        const i = _.Get().GetSchemaList(parseInt(m), !0);
        if (!i) return null;
        let o = [];
        for (const e of i)
          o.push(
            l.createElement(
              s.rU,
              {
                to: f.SteamMLSchemas(e.appid, e.schemaid),
                className: c.SchemaElement,
                key: e.schemaid,
              },
              l.createElement(
                "div",
                { className: c.HorizontalSection },
                l.createElement("div", { className: c.SchemaName }, e.name),
                l.createElement(
                  "div",
                  { className: c.SchemaID },
                  l.createElement("span", { className: c.Label }, "Schema ID"),
                  " ",
                  e.schemaid
                )
              ),
              l.createElement("div", { className: c.AppID }, "AppID ", e.appid),
              l.createElement(
                "div",
                { className: c.HorizontalSection },
                l.createElement(
                  "div",
                  { className: c.RowCount },
                  l.createElement("span", { className: c.Label }, "Rows:"),
                  " ",
                  e.row_count
                ),
                l.createElement(
                  "div",
                  { className: c.KeepCount },
                  l.createElement(
                    "span",
                    { className: c.Label },
                    "Keep Count:"
                  ),
                  " ",
                  e.keep_count.toLocaleString()
                )
              )
            )
          );
        return l.createElement(
          "div",
          { className: c.SchemaList },
          l.createElement(
            "select",
            {
              className: c.SelectAppID,
              value: m,
              onChange: (e) => r(e.target.value),
            },
            a.map((e) =>
              l.createElement(
                "option",
                { key: e.value, value: e.value },
                e.label
              )
            )
          ),
          o
        );
      });
      function D(e) {
        switch (e) {
          case 1:
            return "int32";
          case 2:
            return "int64";
          case 3:
            return "bool";
          case 4:
            return "float";
          case 5:
            return "enum";
          case 6:
            return "timestamp";
        }
        return "";
      }
      function N(e) {
        switch (e) {
          case 1:
            return c.TypeInt32;
          case 2:
            return c.TypeInt64;
          case 3:
            return c.TypeBool;
          case 4:
            return c.TypeFloat;
          case 5:
            return c.TypeEnum;
          case 6:
            return c.TypeTimestamp;
        }
        return "";
      }
      function b(e, t, a) {
        let m;
        const s = t.indexOf(e.name),
          n = -1 == s && !e.count;
        return (
          e.structure
            ? (m = l.createElement(
                "div",
                {
                  className: (0, u.Z)(
                    c.SchemaDetailsElement,
                    c.SchemaDetailsStruct
                  ),
                },
                !e.count &&
                  l.createElement(
                    "div",
                    {
                      className: c.SchemaDetailsStructRow,
                      onClick: () => {
                        a(
                          n
                            ? [...t, e.name]
                            : t.slice(0, s).concat(t.slice(s + 1))
                        );
                      },
                    },
                    l.createElement(
                      "div",
                      { className: (0, u.Z)(n && c.Collapsed, c.CollapseIcon) },
                      "▼"
                    ),
                    l.createElement(
                      "div",
                      { className: c.SchemaDetailsElementBody },
                      l.createElement(
                        "div",
                        { className: c.ElementName },
                        e.name
                      ),
                      l.createElement(
                        "div",
                        { className: c.TypeName },
                        "STRUCT"
                      )
                    )
                  ),
                e.structure.member.map((e) =>
                  l.createElement(
                    "div",
                    {
                      className: (0, u.Z)(
                        n && c.IndentCollapsed,
                        c.StructIndent
                      ),
                      key: e.name,
                    },
                    b(e, t, a)
                  )
                )
              ))
            : e.array && e.array.primitive
            ? (m = l.createElement(
                "div",
                {
                  className: (0, u.Z)(
                    c.SchemaDetailsElement,
                    c.SchemaDetailsArray
                  ),
                },
                l.createElement(
                  "div",
                  {
                    className: (0, u.Z)(
                      c.SchemaDetailsElementBody,
                      N(e.array.primitive.type_info.type)
                    ),
                  },
                  l.createElement("div", { className: c.ElementName }, e.name),
                  l.createElement(
                    "div",
                    { className: c.TypeName },
                    D(e.array.primitive.type_info.type),
                    " [",
                    e.array.max_length,
                    "]"
                  )
                )
              ))
            : e.array && e.array.structure
            ? (m = l.createElement(
                "div",
                {
                  className: (0, u.Z)(
                    c.SchemaDetailsElement,
                    c.SchemaDetailsArray
                  ),
                },
                !e.count &&
                  l.createElement(
                    "div",
                    {
                      className: c.SchemaDetailsStructRow,
                      onClick: () => {
                        a(
                          n
                            ? [...t, e.name]
                            : t.slice(0, s).concat(t.slice(s + 1))
                        );
                      },
                    },
                    l.createElement(
                      "div",
                      { className: (0, u.Z)(n && c.Collapsed, c.CollapseIcon) },
                      "▼"
                    ),
                    l.createElement(
                      "div",
                      { className: c.SchemaDetailsElementBody },
                      l.createElement(
                        "div",
                        { className: c.ElementName },
                        e.name
                      ),
                      l.createElement(
                        "div",
                        { className: c.TypeName },
                        "STRUCT [",
                        e.array.max_length,
                        "]"
                      )
                    )
                  ),
                e.array.structure.member.map((e) =>
                  l.createElement(
                    "div",
                    {
                      className: (0, u.Z)(
                        n && c.IndentCollapsed,
                        c.StructIndent
                      ),
                      key: e.name,
                    },
                    b(e, t, a)
                  )
                )
              ))
            : e.primitive &&
              (m = l.createElement(
                "div",
                {
                  className: (0, u.Z)(
                    c.SchemaDetailsElement,
                    c.SchemaDetailsArray
                  ),
                },
                l.createElement(
                  "div",
                  {
                    className: (0, u.Z)(
                      c.SchemaDetailsElementBody,
                      N(e.primitive.type_info.type)
                    ),
                  },
                  l.createElement("div", { className: c.ElementName }, e.name),
                  l.createElement(
                    "div",
                    { className: c.TypeName },
                    D(e.primitive.type_info.type)
                  )
                )
              )),
          m
        );
      }
      const v = (0, E.Pi)((e) => {
          const t = (0, n.UO)(),
            a = "0" == t.schemaid,
            [m, r] = (0, l.useState)([]);
          if (a) return null;
          const o = _.Get().GetSchemaDetails(parseInt(t.appid), t.schemaid);
          return o
            ? (console.log((0, i.ZN)(o)),
              l.createElement(
                "div",
                { className: c.SchemaDetails },
                l.createElement(
                  s.rU,
                  { to: f.SteamMLSchemas("0"), className: c.Back },
                  "<< BACK"
                ),
                l.createElement(
                  "div",
                  { className: c.SchemaDetailsHeader },
                  l.createElement(
                    "div",
                    { className: c.SchemaDetailsTitle },
                    l.createElement(
                      "div",
                      { className: c.SchemaDetailsName },
                      "SCHEMA ",
                      o.name
                    ),
                    l.createElement(
                      "div",
                      { className: c.SchemaDetailsSchemaID },
                      t.schemaid
                    )
                  )
                ),
                l.createElement(
                  "div",
                  { className: c.SchemaDetailsElements },
                  b(o, m, r)
                )
              ))
            : null;
        }),
        P = (0, E.Pi)((e) =>
          l.createElement(
            "div",
            { className: c.SchemaPage },
            l.createElement(h, null),
            l.createElement(v, null)
          )
        ),
        L = (e) =>
          l.createElement(
            "div",
            {
              className: (0, u.Z)(
                c.SteamMLButton,
                e.acceptStyle && c.AcceptButton,
                e.cancelStyle && c.CancelButton,
                e.disabled && c.Disabled
              ),
              style: { minWidth: e.minWidth },
              onClick: (t) => {
                e.disabled || (e.onClick(), t.stopPropagation());
              },
            },
            l.createElement("div", { className: c.Inner }, e.children)
          ),
        y = ({ problem: e }) => (
          console.log((0, i.ZN)(e)),
          l.createElement(
            s.rU,
            { to: f.SteamMLProblems(e.problemid), className: c.ProblemEntry },
            l.createElement("div", { className: c.ProblemName }, e.name),
            !e.active &&
              l.createElement("div", { className: c.Inactive }, "Inactive"),
            l.createElement(
              "div",
              { className: c.ProblemDescription },
              e.problem_description
            ),
            l.createElement("div", { className: c.ProblemID }, e.problemid),
            l.createElement(
              "div",
              { className: c.Dates },
              l.createElement(
                "div",
                { className: c.CreatedDate },
                "Created ",
                new Date(1e3 * e.create_time).toLocaleDateString()
              ),
              l.createElement(
                "div",
                { className: c.UpdatedDate },
                "Last modified ",
                new Date(1e3 * e.update_time).toLocaleDateString()
              )
            )
          )
        ),
        C = (e) => {
          var t;
          const [a, m] = (0, l.useState)(!1),
            [s, n] = (0, l.useState)(""),
            [i, o] = (0, l.useState)(""),
            [d, p] = (0, l.useState)([]),
            S =
              null === (t = _.Get().GetSchemaList(0, !0)) || void 0 === t
                ? void 0
                : t.sort((e, t) => (e.name < t.name ? -1 : 1)),
            E =
              null == S
                ? void 0
                : S.filter((e, t, a) => 0 == t || e.name != a[t - 1].name),
            h = s.length > 0 && i.length > 0 && d.length > 0;
          return l.createElement(
            "div",
            {
              className: (0, u.Z)(
                c.AddNewProblem,
                !a && c.IsPrompt,
                a && c.IsHeader
              ),
              onClick: () => m(!0),
            },
            l.createElement(
              "div",
              { className: c.NewProblemHeader },
              l.createElement("img", {
                className: c.PlusSymbol,
                src: `${r.De.IMG_URL}webui/storeadmin/plus.png`,
              }),
              l.createElement(
                "div",
                { className: c.AddProblemHeader },
                "Add New Problem" + (a ? "" : "?")
              )
            ),
            l.createElement(
              "div",
              { className: c.NewProblemDescription },
              l.createElement(
                "div",
                { className: c.LabelValue },
                l.createElement("div", { className: c.Label }, "Name"),
                l.createElement("input", {
                  className: c.Value,
                  type: "text",
                  value: s,
                  onChange: (e) => n(e.target.value),
                })
              ),
              l.createElement(
                "div",
                { className: c.LabelValue },
                l.createElement("div", { className: c.Label }, "Description"),
                l.createElement("input", {
                  className: c.Value,
                  type: "text",
                  value: i,
                  onChange: (e) => o(e.target.value),
                })
              ),
              E &&
                l.createElement(
                  "div",
                  { className: c.SchemaListContainer },
                  l.createElement(
                    "div",
                    { className: c.SchemaSelectListTitle },
                    "Select Schemas to Include"
                  ),
                  l.createElement(
                    "div",
                    { className: c.SchemaSelectList },
                    E.map((e) => {
                      const t = -1 != d.indexOf(e.schemaid);
                      return l.createElement(
                        "div",
                        {
                          key: e.schemaid,
                          className: (0, u.Z)(c.SchemaOption, t && c.Selected),
                          onClick: () =>
                            p(
                              t
                                ? d.filter((t) => t != e.schemaid)
                                : d.concat(e.schemaid)
                            ),
                        },
                        e.name
                      );
                    })
                  )
                ),
              l.createElement(
                "div",
                { className: c.ButtonContainer },
                l.createElement(
                  L,
                  {
                    acceptStyle: !0,
                    minWidth: 100,
                    disabled: !h,
                    onClick: () => h && void _.Get().CreateProblem(s, i, d),
                  },
                  "Create"
                ),
                l.createElement(
                  L,
                  { cancelStyle: !0, minWidth: 100, onClick: () => m(!1) },
                  "Cancel"
                )
              )
            )
          );
        },
        g = (0, E.Pi)(({ schemaid: e }) => {
          const t = _.Get().GetSchemaList(0, !0);
          let a;
          if (t) {
            const m = t.filter((t) => t.schemaid == e);
            m.length > 0 && (a = m[0]);
          }
          return l.createElement(
            "div",
            { className: c.SchemaElement },
            a && l.createElement("div", { className: c.SchemaName }, a.name)
          );
        }),
        I = (0, E.Pi)(({ problem: e }) => {
          var t;
          const [a, m] = (0, l.useState)(!1),
            [r, i] = (0, l.useState)(e.name),
            [o, d] = (0, l.useState)(!1),
            [p, S] = (0, l.useState)(e.problem_description),
            [E, h] = (0, l.useState)(!1),
            [D, N] = (0, l.useState)(e.schemaid),
            b = (0, n.k6)(),
            v = (0, l.useRef)(null),
            P = (0, l.useRef)(null),
            y = parseInt(e.problemid),
            C =
              null === (t = _.Get().GetSchemaList(0, !0)) || void 0 === t
                ? void 0
                : t.sort((e, t) => (e.name < t.name ? -1 : 1)),
            I =
              null == C
                ? void 0
                : C.filter((e, t, a) => 0 == t || e.name != a[t - 1].name);
          var B;
          (B = () => {
            k(), w(), S(e.problem_description), d(!1);
          }),
            (0, l.useEffect)(() => {
              const e = (e) => {
                27 === e.keyCode && B();
              };
              return (
                window.addEventListener("keydown", e),
                () => {
                  window.removeEventListener("keydown", e);
                }
              );
            }, [B]);
          const k = () => {
              i(e.name), m(!1);
            },
            w = () => {
              S(e.problem_description), d(!1);
            },
            A = () => {
              N(e.schemaid), h(!1);
            };
          return (
            a && v.current.focus(),
            o && P.current.focus(),
            l.createElement(
              "div",
              { className: c.ProblemDetails },
              l.createElement(
                s.rU,
                { to: f.SteamMLProblems(0), className: c.BackButton },
                "<< BACK "
              ),
              l.createElement(
                "div",
                { className: c.ProblemDetailsHeaderContainer },
                l.createElement(
                  "div",
                  {
                    className: (0, u.Z)(c.ProblemName, a && c.Hidden),
                    onClick: (e) => (w(), A(), void m(!0)),
                  },
                  e.name
                ),
                l.createElement(
                  "form",
                  {
                    className: a ? void 0 : c.Hidden,
                    onSubmit: (t) => {
                      _.Get().EditProblemName(y, r),
                        (e.name = r),
                        m(!1),
                        t.preventDefault();
                    },
                  },
                  l.createElement("input", {
                    ref: v,
                    className: c.ProblemNameEditing,
                    type: "text",
                    value: r,
                    onBlur: () => k(),
                    onFocus: (e) => e.target.select(),
                    onChange: (e) => i(e.target.value),
                  })
                ),
                l.createElement(
                  "div",
                  {
                    className: (0, u.Z)(c.ProblemDescription, o && c.Hidden),
                    onClick: (e) => (k(), A(), void d(!0)),
                  },
                  e.problem_description
                ),
                l.createElement(
                  "form",
                  {
                    className: o ? void 0 : c.Hidden,
                    onSubmit: (t) => {
                      _.Get().EditProblemDesc(y, p),
                        (e.problem_description = p),
                        d(!1),
                        t.preventDefault();
                    },
                  },
                  l.createElement("input", {
                    ref: P,
                    className: c.ProblemDescEditing,
                    type: "text",
                    value: p,
                    onBlur: () => w(),
                    onFocus: (e) => e.target.select(),
                    onChange: (e) => S(e.target.value),
                  })
                ),
                l.createElement("div", { className: c.ProblemID }, e.problemid),
                l.createElement(
                  "div",
                  { className: c.Dates },
                  l.createElement(
                    "div",
                    { className: c.CreatedDate },
                    "Created ",
                    new Date(1e3 * e.create_time).toLocaleDateString()
                  ),
                  l.createElement(
                    "div",
                    { className: c.UpdatedDate },
                    "Last modified ",
                    new Date(1e3 * e.update_time).toLocaleDateString()
                  )
                )
              ),
              l.createElement(
                "div",
                { className: c.SchemaListContainer },
                l.createElement(
                  "div",
                  { className: c.SchemaListHeader },
                  "Schemas:"
                ),
                l.createElement(
                  "div",
                  {
                    className: c.SchemaListEdit,
                    onClick: () => (k(), w(), void h(!0)),
                  },
                  "Edit"
                ),
                l.createElement(
                  "div",
                  { className: (0, u.Z)(c.SchemaList, E && c.Hidden) },
                  e.schemaid.map((e) =>
                    l.createElement(g, { key: e, schemaid: e })
                  )
                ),
                l.createElement(
                  "div",
                  {
                    className: (0, u.Z)(
                      c.SchemaSelectList,
                      (!E || !I) && c.Hidden
                    ),
                  },
                  I &&
                    I.map((e) => {
                      const t = -1 != D.indexOf(e.schemaid);
                      return l.createElement(
                        "div",
                        {
                          key: e.schemaid,
                          className: (0, u.Z)(c.SchemaOption, t && c.Selected),
                          onClick: () =>
                            N(
                              t
                                ? D.filter((t) => t != e.schemaid)
                                : D.concat(e.schemaid)
                            ),
                        },
                        e.name
                      );
                    })
                ),
                E &&
                  l.createElement(
                    "div",
                    { className: c.ButtonContainer },
                    l.createElement(
                      L,
                      {
                        minWidth: 100,
                        acceptStyle: !0,
                        disabled: 0 == D.length,
                        onClick: () => (
                          _.Get().EditProblemSchemas(y, D),
                          (e.schemaid = D),
                          void h(!1)
                        ),
                      },
                      "Accept"
                    ),
                    l.createElement(
                      L,
                      { minWidth: 100, cancelStyle: !0, onClick: () => A() },
                      "Cancel"
                    )
                  ),
                l.createElement(
                  "div",
                  {
                    className: (0, u.Z)(c.DeleteLink, E && c.Hidden),
                    onClick: () => (
                      _.Get().DeleteProblem(y),
                      void b.push(f.SteamMLProblems(0))
                    ),
                  },
                  "Delete Problem"
                )
              )
            )
          );
        }),
        B = (0, E.Pi)((e) => {
          const t = (0, n.UO)(),
            a = "0" == t.problemid;
          let m, s;
          return (
            a
              ? (m = _.Get().GetProblemList())
              : (s = _.Get().GetProblemDetails(parseInt(t.problemid))),
            l.createElement(
              "div",
              { className: c.ProblemPage },
              a &&
                m &&
                l.createElement(
                  "div",
                  { className: c.ProblemListContainer },
                  m.map((e) =>
                    l.createElement(y, { key: e.problemid, problem: e })
                  ),
                  0 == m.length &&
                    l.createElement(
                      "div",
                      { className: c.NoProblems },
                      "No Existing Problems"
                    ),
                  l.createElement(C, null)
                ),
              !a &&
                s &&
                l.createElement(
                  "div",
                  { className: c.ProblemDetails },
                  l.createElement(I, { problem: s })
                )
            )
          );
        }),
        f = {
          SteamMLBase: () => "steamml",
          SteamMLSchemas: (e, t) =>
            `/schemas/${null != e ? e : "0"}/${null != t ? t : "0"}`,
          SteamMLModels: () => "/models",
          SteamMLProblems: (e) => `/problems/${null != e ? e : "0"}`,
        };
      class k extends l.Component {
        render() {
          return l.createElement(
            "div",
            { className: c.Background },
            l.createElement(
              s.VK,
              { basename: (0, m.l)() + f.SteamMLBase() },
              l.createElement(w, null),
              l.createElement(
                n.rs,
                null,
                l.createElement(n.AW, {
                  exact: !0,
                  path: f.SteamMLSchemas(":appid", ":schemaid"),
                  component: P,
                }),
                l.createElement(n.AW, {
                  exact: !0,
                  path: f.SteamMLModels(),
                  component: A,
                }),
                l.createElement(n.AW, {
                  exact: !0,
                  path: f.SteamMLProblems(":problemid"),
                  component: B,
                }),
                l.createElement(
                  n.AW,
                  { exact: !0, path: "/" },
                  l.createElement(n.l_, { to: f.SteamMLSchemas() })
                )
              )
            )
          );
        }
      }
      const w = (e) => {
          const t = (0, n.TH)(),
            a = (0, n.LX)(t.pathname, {
              path: f.SteamMLSchemas(":appid", ":schemaid"),
              exact: !0,
            }),
            m = (0, n.LX)(t.pathname, { path: f.SteamMLModels(), exact: !0 }),
            r = (0, n.LX)(t.pathname, {
              path: f.SteamMLProblems(":problemid"),
              exact: !0,
            });
          return l.createElement(
            "div",
            { className: c.Header },
            l.createElement(
              s.rU,
              {
                to: f.SteamMLSchemas(),
                className: (0, u.Z)(c.HeaderOption, a && c.Selected),
              },
              "SCHEMAS"
            ),
            l.createElement(
              s.rU,
              {
                to: f.SteamMLModels(),
                className: (0, u.Z)(c.HeaderOption, m && c.Selected),
              },
              "MODELS"
            ),
            l.createElement(
              s.rU,
              {
                to: f.SteamMLProblems(),
                className: (0, u.Z)(c.HeaderOption, r && c.Selected),
              },
              "PROBLEMS"
            )
          );
        },
        A = (e) => l.createElement("div", null, "MODEL PAGE");
    },
  },
]);

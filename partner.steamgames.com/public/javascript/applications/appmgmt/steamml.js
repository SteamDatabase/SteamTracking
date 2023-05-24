/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7762],
  {
    18753: (e) => {
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
    30215: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { SteamMLRoutes: () => A, default: () => B });
      var m,
        l = a(96927),
        s = a(89526),
        n = a(565),
        i = a(59934),
        r = a(18753),
        c = a(50265),
        o = a(33940),
        d = a(32765),
        p = a(52868),
        S = a.n(p);
      !(function (e) {
        (e[(e.Unrequested = 0)] = "Unrequested"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Valid = 2)] = "Valid"),
          (e[(e.Failed = 3)] = "Failed"),
          (e[(e.Rerequest = 4)] = "Rerequest");
      })(m || (m = {}));
      class h {
        constructor() {
          (this.eState = m.Unrequested), (this.nExpirationTime = 0);
        }
        getData(e, t, a) {
          const l = this.eState == m.Pending || this.eState == m.Rerequest;
          return (
            this.isExpired() &&
              !l &&
              ((this.eState = m.Pending),
              t()
                .then((l) => {
                  if (this.eState == m.Rerequest)
                    return this.expireData(), void this.getData(e, t, a);
                  (this.data = a ? a(l) : l),
                    l
                      ? (this.delayNewData(e), (this.eState = m.Valid))
                      : (this.eState = m.Failed);
                })
                .catch((e) => {
                  (this.data = a(void 0)), (this.eState = m.Failed);
                })),
            this.data
          );
        }
        clearData() {
          (this.eState = m.Unrequested),
            (this.data = null),
            (this.nExpirationTime = 0);
        }
        setDataPending() {
          this.eState = m.Pending;
        }
        isDataPending() {
          return this.eState == m.Pending;
        }
        setData(e, t) {
          (this.data = t), this.delayNewData(e), (this.eState = m.Valid);
        }
        expireData() {
          this.nExpirationTime = 0;
        }
        isExpired() {
          const e = Date.now() / 1e3;
          return this.nExpirationTime < e;
        }
        delayNewData(e) {
          if (e <= 0) this.nExpirationTime = Number.MAX_SAFE_INTEGER;
          else {
            const t = Date.now() / 1e3;
            this.nExpirationTime = t + e;
          }
        }
        rerequestDataIfPending() {
          this.eState == m.Pending && (this.eState = m.Rerequest);
        }
        getCachedData() {
          return this.data;
        }
      }
      (0, o.gn)([c.LO], h.prototype, "data", void 0),
        (0, o.gn)([c.LO], h.prototype, "nExpirationTime", void 0);
      class _ {
        constructor() {
          this.m_mapKeyToDataWrapper = new Map();
        }
        getAsyncDataWrapper(e) {
          let t;
          return (
            this.m_mapKeyToDataWrapper.has(e)
              ? (t = this.m_mapKeyToDataWrapper.get(e))
              : ((t = new h()), this.m_mapKeyToDataWrapper.set(e, t)),
            t
          );
        }
        clearKey(e) {
          this.m_mapKeyToDataWrapper.has(e) &&
            this.m_mapKeyToDataWrapper.get(e).clearData(),
            this.m_mapKeyToDataWrapper.delete(e);
        }
        getAllElements() {
          return Array.from(this.m_mapKeyToDataWrapper.values()).map((e) =>
            e.getCachedData()
          );
        }
        getAllElementsAndKeys() {
          let e = [],
            t = this.m_mapKeyToDataWrapper.entries(),
            a = t.next();
          for (; !a.done; )
            e.push({ key: a.value[0], data: a.value[1].getCachedData() }),
              (a = t.next());
          return e;
        }
      }
      (0, o.gn)([c.LO], _.prototype, "m_mapKeyToDataWrapper", void 0);
      class u {
        constructor() {
          (this.m_asyncSchemaList = new _()),
            (this.m_asyncSchemaDetails = new _()),
            (this.m_asyncProblemList = new h()),
            (this.m_asyncProblemDetails = new _());
        }
        static Get() {
          return (
            u.s_SteamMLStore ||
              ((u.s_SteamMLStore = new u()), u.s_SteamMLStore.Init()),
            u.s_SteamMLStore
          );
        }
        Init() {}
        GetSchemaList(e, t) {
          const a = e + "_" + t;
          return this.m_asyncSchemaList.getAsyncDataWrapper(a).getData(
            30,
            () =>
              (0, o.mG)(this, void 0, void 0, function* () {
                return yield S().get(
                  `${d.De.PARTNER_BASE_URL}steamml/get_schemas?appid=${e}&includesteammlapp=${t}&sessionid=${d.De.SESSIONID}`
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
                return yield S().get(
                  `${d.De.PARTNER_BASE_URL}steamml/get_schema_details?appid=${e}&schemaid=${t}&sessionid=${d.De.SESSIONID}`
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
                return yield S().get(
                  `${d.De.PARTNER_BASE_URL}steamml/get_problems?sessionid=${d.De.SESSIONID}`
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
                return yield S().get(
                  `${d.De.PARTNER_BASE_URL}steamml/get_problem_details?problemid=${e}&sessionid=${d.De.SESSIONID}`
                );
              }),
            (e) => e.data.problem
          );
        }
        CreateProblem(e, t, a) {
          let m = new FormData();
          return (
            m.append("sessionid", d.De.SESSIONID),
            m.append("name", e),
            m.append("description", t),
            m.append("schemaids", a.join(",")),
            S()
              .post(`${d.De.PARTNER_BASE_URL}steamml/create_problem`, m)
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
            t.append("sessionid", d.De.SESSIONID),
            t.append("problemid", e.toString()),
            S()
              .post(`${d.De.PARTNER_BASE_URL}steamml/edit_problem`, t)
              .then(() => {
                this.m_asyncProblemDetails.getAsyncDataWrapper(e).expireData();
              })
          );
        }
        DeleteProblem(e) {
          let t = new FormData();
          return (
            t.append("sessionid", d.De.SESSIONID),
            t.append("problemid", e.toString()),
            S()
              .post(`${d.De.PARTNER_BASE_URL}steamml/delete_problem`, t)
              .then(() => {
                this.m_asyncProblemList.clearData();
              })
          );
        }
      }
      (0, o.gn)([c.LO], u.prototype, "m_asyncSchemaList", void 0),
        (0, o.gn)([c.LO], u.prototype, "m_asyncSchemaDetails", void 0),
        (0, o.gn)([c.LO], u.prototype, "m_asyncProblemList", void 0),
        (0, o.gn)([c.LO], u.prototype, "m_asyncProblemDetails", void 0),
        (0, o.gn)([c.aD], u.prototype, "Init", null);
      var E = a(88464),
        D = a(19304);
      const N = (0, E.Pi)((e) => {
        const t = "0" == (0, i.UO)().schemaid,
          a = [
            { label: "816 - Dota Beta", value: "816" },
            { label: "570 - Dota", value: "570" },
            { label: "730 - CS:GO", value: "730" },
            { label: "1015410 - SteamML", value: "1015410" },
          ],
          [m, l] = (0, s.useState)(a[0].value);
        if (!t) return null;
        const c = u.Get().GetSchemaList(parseInt(m), !0);
        if (!c) return null;
        let o = [];
        for (const e of c)
          o.push(
            s.createElement(
              n.rU,
              {
                to: A.SteamMLSchemas(e.appid, e.schemaid),
                className: r.SchemaElement,
                key: e.schemaid,
              },
              s.createElement(
                "div",
                { className: r.HorizontalSection },
                s.createElement("div", { className: r.SchemaName }, e.name),
                s.createElement(
                  "div",
                  { className: r.SchemaID },
                  s.createElement("span", { className: r.Label }, "Schema ID"),
                  " ",
                  e.schemaid
                )
              ),
              s.createElement("div", { className: r.AppID }, "AppID ", e.appid),
              s.createElement(
                "div",
                { className: r.HorizontalSection },
                s.createElement(
                  "div",
                  { className: r.RowCount },
                  s.createElement("span", { className: r.Label }, "Rows:"),
                  " ",
                  e.row_count
                ),
                s.createElement(
                  "div",
                  { className: r.KeepCount },
                  s.createElement(
                    "span",
                    { className: r.Label },
                    "Keep Count:"
                  ),
                  " ",
                  e.keep_count.toLocaleString()
                )
              )
            )
          );
        return s.createElement(
          "div",
          { className: r.SchemaList },
          s.createElement(
            "select",
            {
              className: r.SelectAppID,
              value: m,
              onChange: (e) => l(e.target.value),
            },
            a.map((e) =>
              s.createElement(
                "option",
                { key: e.value, value: e.value },
                e.label
              )
            )
          ),
          o
        );
      });
      function b(e) {
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
      function v(e) {
        switch (e) {
          case 1:
            return r.TypeInt32;
          case 2:
            return r.TypeInt64;
          case 3:
            return r.TypeBool;
          case 4:
            return r.TypeFloat;
          case 5:
            return r.TypeEnum;
          case 6:
            return r.TypeTimestamp;
        }
        return "";
      }
      function P(e, t, a) {
        let m;
        const l = t.indexOf(e.name),
          n = -1 == l && !e.count;
        return (
          e.structure
            ? (m = s.createElement(
                "div",
                {
                  className: (0, D.Z)(
                    r.SchemaDetailsElement,
                    r.SchemaDetailsStruct
                  ),
                },
                !e.count &&
                  s.createElement(
                    "div",
                    {
                      className: r.SchemaDetailsStructRow,
                      onClick: () => {
                        a(
                          n
                            ? [...t, e.name]
                            : t.slice(0, l).concat(t.slice(l + 1))
                        );
                      },
                    },
                    s.createElement(
                      "div",
                      { className: (0, D.Z)(n && r.Collapsed, r.CollapseIcon) },
                      "▼"
                    ),
                    s.createElement(
                      "div",
                      { className: r.SchemaDetailsElementBody },
                      s.createElement(
                        "div",
                        { className: r.ElementName },
                        e.name
                      ),
                      s.createElement(
                        "div",
                        { className: r.TypeName },
                        "STRUCT"
                      )
                    )
                  ),
                e.structure.member.map((e) =>
                  s.createElement(
                    "div",
                    {
                      className: (0, D.Z)(
                        n && r.IndentCollapsed,
                        r.StructIndent
                      ),
                      key: e.name,
                    },
                    P(e, t, a)
                  )
                )
              ))
            : e.array && e.array.primitive
            ? (m = s.createElement(
                "div",
                {
                  className: (0, D.Z)(
                    r.SchemaDetailsElement,
                    r.SchemaDetailsArray
                  ),
                },
                s.createElement(
                  "div",
                  {
                    className: (0, D.Z)(
                      r.SchemaDetailsElementBody,
                      v(e.array.primitive.type_info.type)
                    ),
                  },
                  s.createElement("div", { className: r.ElementName }, e.name),
                  s.createElement(
                    "div",
                    { className: r.TypeName },
                    b(e.array.primitive.type_info.type),
                    " [",
                    e.array.max_length,
                    "]"
                  )
                )
              ))
            : e.array && e.array.structure
            ? (m = s.createElement(
                "div",
                {
                  className: (0, D.Z)(
                    r.SchemaDetailsElement,
                    r.SchemaDetailsArray
                  ),
                },
                !e.count &&
                  s.createElement(
                    "div",
                    {
                      className: r.SchemaDetailsStructRow,
                      onClick: () => {
                        a(
                          n
                            ? [...t, e.name]
                            : t.slice(0, l).concat(t.slice(l + 1))
                        );
                      },
                    },
                    s.createElement(
                      "div",
                      { className: (0, D.Z)(n && r.Collapsed, r.CollapseIcon) },
                      "▼"
                    ),
                    s.createElement(
                      "div",
                      { className: r.SchemaDetailsElementBody },
                      s.createElement(
                        "div",
                        { className: r.ElementName },
                        e.name
                      ),
                      s.createElement(
                        "div",
                        { className: r.TypeName },
                        "STRUCT [",
                        e.array.max_length,
                        "]"
                      )
                    )
                  ),
                e.array.structure.member.map((e) =>
                  s.createElement(
                    "div",
                    {
                      className: (0, D.Z)(
                        n && r.IndentCollapsed,
                        r.StructIndent
                      ),
                      key: e.name,
                    },
                    P(e, t, a)
                  )
                )
              ))
            : e.primitive &&
              (m = s.createElement(
                "div",
                {
                  className: (0, D.Z)(
                    r.SchemaDetailsElement,
                    r.SchemaDetailsArray
                  ),
                },
                s.createElement(
                  "div",
                  {
                    className: (0, D.Z)(
                      r.SchemaDetailsElementBody,
                      v(e.primitive.type_info.type)
                    ),
                  },
                  s.createElement("div", { className: r.ElementName }, e.name),
                  s.createElement(
                    "div",
                    { className: r.TypeName },
                    b(e.primitive.type_info.type)
                  )
                )
              )),
          m
        );
      }
      const y = (0, E.Pi)((e) => {
          const t = (0, i.UO)(),
            a = "0" == t.schemaid,
            [m, l] = (0, s.useState)([]);
          if (a) return null;
          const o = u.Get().GetSchemaDetails(parseInt(t.appid), t.schemaid);
          return o
            ? (console.log((0, c.ZN)(o)),
              s.createElement(
                "div",
                { className: r.SchemaDetails },
                s.createElement(
                  n.rU,
                  { to: A.SteamMLSchemas("0"), className: r.Back },
                  "<< BACK"
                ),
                s.createElement(
                  "div",
                  { className: r.SchemaDetailsHeader },
                  s.createElement(
                    "div",
                    { className: r.SchemaDetailsTitle },
                    s.createElement(
                      "div",
                      { className: r.SchemaDetailsName },
                      "SCHEMA ",
                      o.name
                    ),
                    s.createElement(
                      "div",
                      { className: r.SchemaDetailsSchemaID },
                      t.schemaid
                    )
                  )
                ),
                s.createElement(
                  "div",
                  { className: r.SchemaDetailsElements },
                  P(o, m, l)
                )
              ))
            : null;
        }),
        L = (0, E.Pi)((e) =>
          s.createElement(
            "div",
            { className: r.SchemaPage },
            s.createElement(N, null),
            s.createElement(y, null)
          )
        ),
        g = (e) =>
          s.createElement(
            "div",
            {
              className: (0, D.Z)(
                r.SteamMLButton,
                e.acceptStyle && r.AcceptButton,
                e.cancelStyle && r.CancelButton,
                e.disabled && r.Disabled
              ),
              style: { minWidth: e.minWidth },
              onClick: (t) => {
                e.disabled || (e.onClick(), t.stopPropagation());
              },
            },
            s.createElement("div", { className: r.Inner }, e.children)
          ),
        C = ({ problem: e }) => (
          console.log((0, c.ZN)(e)),
          s.createElement(
            n.rU,
            { to: A.SteamMLProblems(e.problemid), className: r.ProblemEntry },
            s.createElement("div", { className: r.ProblemName }, e.name),
            !e.active &&
              s.createElement("div", { className: r.Inactive }, "Inactive"),
            s.createElement(
              "div",
              { className: r.ProblemDescription },
              e.problem_description
            ),
            s.createElement("div", { className: r.ProblemID }, e.problemid),
            s.createElement(
              "div",
              { className: r.Dates },
              s.createElement(
                "div",
                { className: r.CreatedDate },
                "Created ",
                new Date(1e3 * e.create_time).toLocaleDateString()
              ),
              s.createElement(
                "div",
                { className: r.UpdatedDate },
                "Last modified ",
                new Date(1e3 * e.update_time).toLocaleDateString()
              )
            )
          )
        ),
        I = (e) => {
          var t;
          const [a, m] = (0, s.useState)(!1),
            [l, n] = (0, s.useState)(""),
            [i, c] = (0, s.useState)(""),
            [o, p] = (0, s.useState)([]),
            S =
              null === (t = u.Get().GetSchemaList(0, !0)) || void 0 === t
                ? void 0
                : t.sort((e, t) => (e.name < t.name ? -1 : 1)),
            h =
              null == S
                ? void 0
                : S.filter((e, t, a) => 0 == t || e.name != a[t - 1].name),
            _ = l.length > 0 && i.length > 0 && o.length > 0;
          return s.createElement(
            "div",
            {
              className: (0, D.Z)(
                r.AddNewProblem,
                !a && r.IsPrompt,
                a && r.IsHeader
              ),
              onClick: () => m(!0),
            },
            s.createElement(
              "div",
              { className: r.NewProblemHeader },
              s.createElement("img", {
                className: r.PlusSymbol,
                src: `${d.De.IMG_URL}webui/storeadmin/plus.png`,
              }),
              s.createElement(
                "div",
                { className: r.AddProblemHeader },
                "Add New Problem" + (a ? "" : "?")
              )
            ),
            s.createElement(
              "div",
              { className: r.NewProblemDescription },
              s.createElement(
                "div",
                { className: r.LabelValue },
                s.createElement("div", { className: r.Label }, "Name"),
                s.createElement("input", {
                  className: r.Value,
                  type: "text",
                  value: l,
                  onChange: (e) => n(e.target.value),
                })
              ),
              s.createElement(
                "div",
                { className: r.LabelValue },
                s.createElement("div", { className: r.Label }, "Description"),
                s.createElement("input", {
                  className: r.Value,
                  type: "text",
                  value: i,
                  onChange: (e) => c(e.target.value),
                })
              ),
              h &&
                s.createElement(
                  "div",
                  { className: r.SchemaListContainer },
                  s.createElement(
                    "div",
                    { className: r.SchemaSelectListTitle },
                    "Select Schemas to Include"
                  ),
                  s.createElement(
                    "div",
                    { className: r.SchemaSelectList },
                    h.map((e) => {
                      const t = -1 != o.indexOf(e.schemaid);
                      return s.createElement(
                        "div",
                        {
                          key: e.schemaid,
                          className: (0, D.Z)(r.SchemaOption, t && r.Selected),
                          onClick: () =>
                            p(
                              t
                                ? o.filter((t) => t != e.schemaid)
                                : o.concat(e.schemaid)
                            ),
                        },
                        e.name
                      );
                    })
                  )
                ),
              s.createElement(
                "div",
                { className: r.ButtonContainer },
                s.createElement(
                  g,
                  {
                    acceptStyle: !0,
                    minWidth: 100,
                    disabled: !_,
                    onClick: () => _ && void u.Get().CreateProblem(l, i, o),
                  },
                  "Create"
                ),
                s.createElement(
                  g,
                  { cancelStyle: !0, minWidth: 100, onClick: () => m(!1) },
                  "Cancel"
                )
              )
            )
          );
        },
        T = (0, E.Pi)(({ schemaid: e }) => {
          const t = u.Get().GetSchemaList(0, !0);
          let a;
          if (t) {
            const m = t.filter((t) => t.schemaid == e);
            m.length > 0 && (a = m[0]);
          }
          return s.createElement(
            "div",
            { className: r.SchemaElement },
            a && s.createElement("div", { className: r.SchemaName }, a.name)
          );
        }),
        f = (0, E.Pi)(({ problem: e }) => {
          var t;
          const [a, m] = (0, s.useState)(!1),
            [l, c] = (0, s.useState)(e.name),
            [o, d] = (0, s.useState)(!1),
            [p, S] = (0, s.useState)(e.problem_description),
            [h, _] = (0, s.useState)(!1),
            [E, N] = (0, s.useState)(e.schemaid),
            b = (0, i.k6)(),
            v = (0, s.useRef)(null),
            P = (0, s.useRef)(null),
            y = parseInt(e.problemid),
            L =
              null === (t = u.Get().GetSchemaList(0, !0)) || void 0 === t
                ? void 0
                : t.sort((e, t) => (e.name < t.name ? -1 : 1)),
            C =
              null == L
                ? void 0
                : L.filter((e, t, a) => 0 == t || e.name != a[t - 1].name);
          var I;
          (I = () => {
            f(), w(), S(e.problem_description), d(!1);
          }),
            (0, s.useEffect)(() => {
              const e = (e) => {
                27 === e.keyCode && I();
              };
              return (
                window.addEventListener("keydown", e),
                () => {
                  window.removeEventListener("keydown", e);
                }
              );
            }, [I]);
          const f = () => {
              c(e.name), m(!1);
            },
            w = () => {
              S(e.problem_description), d(!1);
            },
            B = () => {
              N(e.schemaid), _(!1);
            };
          return (
            a && v.current.focus(),
            o && P.current.focus(),
            s.createElement(
              "div",
              { className: r.ProblemDetails },
              s.createElement(
                n.rU,
                { to: A.SteamMLProblems(0), className: r.BackButton },
                "<< BACK "
              ),
              s.createElement(
                "div",
                { className: r.ProblemDetailsHeaderContainer },
                s.createElement(
                  "div",
                  {
                    className: (0, D.Z)(r.ProblemName, a && r.Hidden),
                    onClick: (e) => (w(), B(), void m(!0)),
                  },
                  e.name
                ),
                s.createElement(
                  "form",
                  {
                    className: a ? void 0 : r.Hidden,
                    onSubmit: (t) => {
                      u.Get().EditProblemName(y, l),
                        (e.name = l),
                        m(!1),
                        t.preventDefault();
                    },
                  },
                  s.createElement("input", {
                    ref: v,
                    className: r.ProblemNameEditing,
                    type: "text",
                    value: l,
                    onBlur: () => f(),
                    onFocus: (e) => e.target.select(),
                    onChange: (e) => c(e.target.value),
                  })
                ),
                s.createElement(
                  "div",
                  {
                    className: (0, D.Z)(r.ProblemDescription, o && r.Hidden),
                    onClick: (e) => (f(), B(), void d(!0)),
                  },
                  e.problem_description
                ),
                s.createElement(
                  "form",
                  {
                    className: o ? void 0 : r.Hidden,
                    onSubmit: (t) => {
                      u.Get().EditProblemDesc(y, p),
                        (e.problem_description = p),
                        d(!1),
                        t.preventDefault();
                    },
                  },
                  s.createElement("input", {
                    ref: P,
                    className: r.ProblemDescEditing,
                    type: "text",
                    value: p,
                    onBlur: () => w(),
                    onFocus: (e) => e.target.select(),
                    onChange: (e) => S(e.target.value),
                  })
                ),
                s.createElement("div", { className: r.ProblemID }, e.problemid),
                s.createElement(
                  "div",
                  { className: r.Dates },
                  s.createElement(
                    "div",
                    { className: r.CreatedDate },
                    "Created ",
                    new Date(1e3 * e.create_time).toLocaleDateString()
                  ),
                  s.createElement(
                    "div",
                    { className: r.UpdatedDate },
                    "Last modified ",
                    new Date(1e3 * e.update_time).toLocaleDateString()
                  )
                )
              ),
              s.createElement(
                "div",
                { className: r.SchemaListContainer },
                s.createElement(
                  "div",
                  { className: r.SchemaListHeader },
                  "Schemas:"
                ),
                s.createElement(
                  "div",
                  {
                    className: r.SchemaListEdit,
                    onClick: () => (f(), w(), void _(!0)),
                  },
                  "Edit"
                ),
                s.createElement(
                  "div",
                  { className: (0, D.Z)(r.SchemaList, h && r.Hidden) },
                  e.schemaid.map((e) =>
                    s.createElement(T, { key: e, schemaid: e })
                  )
                ),
                s.createElement(
                  "div",
                  {
                    className: (0, D.Z)(
                      r.SchemaSelectList,
                      (!h || !C) && r.Hidden
                    ),
                  },
                  C &&
                    C.map((e) => {
                      const t = -1 != E.indexOf(e.schemaid);
                      return s.createElement(
                        "div",
                        {
                          key: e.schemaid,
                          className: (0, D.Z)(r.SchemaOption, t && r.Selected),
                          onClick: () =>
                            N(
                              t
                                ? E.filter((t) => t != e.schemaid)
                                : E.concat(e.schemaid)
                            ),
                        },
                        e.name
                      );
                    })
                ),
                h &&
                  s.createElement(
                    "div",
                    { className: r.ButtonContainer },
                    s.createElement(
                      g,
                      {
                        minWidth: 100,
                        acceptStyle: !0,
                        disabled: 0 == E.length,
                        onClick: () => (
                          u.Get().EditProblemSchemas(y, E),
                          (e.schemaid = E),
                          void _(!1)
                        ),
                      },
                      "Accept"
                    ),
                    s.createElement(
                      g,
                      { minWidth: 100, cancelStyle: !0, onClick: () => B() },
                      "Cancel"
                    )
                  ),
                s.createElement(
                  "div",
                  {
                    className: (0, D.Z)(r.DeleteLink, h && r.Hidden),
                    onClick: () => (
                      u.Get().DeleteProblem(y),
                      void b.push(A.SteamMLProblems(0))
                    ),
                  },
                  "Delete Problem"
                )
              )
            )
          );
        }),
        w = (0, E.Pi)((e) => {
          const t = (0, i.UO)(),
            a = "0" == t.problemid;
          let m, l;
          return (
            a
              ? (m = u.Get().GetProblemList())
              : (l = u.Get().GetProblemDetails(parseInt(t.problemid))),
            s.createElement(
              "div",
              { className: r.ProblemPage },
              a &&
                m &&
                s.createElement(
                  "div",
                  { className: r.ProblemListContainer },
                  m.map((e) =>
                    s.createElement(C, { key: e.problemid, problem: e })
                  ),
                  0 == m.length &&
                    s.createElement(
                      "div",
                      { className: r.NoProblems },
                      "No Existing Problems"
                    ),
                  s.createElement(I, null)
                ),
              !a &&
                l &&
                s.createElement(
                  "div",
                  { className: r.ProblemDetails },
                  s.createElement(f, { problem: l })
                )
            )
          );
        }),
        A = {
          SteamMLBase: () => "steamml",
          SteamMLSchemas: (e, t) =>
            `/schemas/${null != e ? e : "0"}/${null != t ? t : "0"}`,
          SteamMLModels: () => "/models",
          SteamMLProblems: (e) => `/problems/${null != e ? e : "0"}`,
        };
      class B extends s.Component {
        render() {
          return s.createElement(
            "div",
            { className: r.Background },
            s.createElement(
              n.VK,
              { basename: (0, l.l)() + A.SteamMLBase() },
              s.createElement(R, null),
              s.createElement(
                i.rs,
                null,
                s.createElement(i.AW, {
                  exact: !0,
                  path: A.SteamMLSchemas(":appid", ":schemaid"),
                  component: L,
                }),
                s.createElement(i.AW, {
                  exact: !0,
                  path: A.SteamMLModels(),
                  component: k,
                }),
                s.createElement(i.AW, {
                  exact: !0,
                  path: A.SteamMLProblems(":problemid"),
                  component: w,
                }),
                s.createElement(
                  i.AW,
                  { exact: !0, path: "/" },
                  s.createElement(i.l_, { to: A.SteamMLSchemas() })
                )
              )
            )
          );
        }
      }
      const R = (e) => {
          const t = (0, i.TH)(),
            a = (0, i.LX)(t.pathname, {
              path: A.SteamMLSchemas(":appid", ":schemaid"),
              exact: !0,
            }),
            m = (0, i.LX)(t.pathname, { path: A.SteamMLModels(), exact: !0 }),
            l = (0, i.LX)(t.pathname, {
              path: A.SteamMLProblems(":problemid"),
              exact: !0,
            });
          return s.createElement(
            "div",
            { className: r.Header },
            s.createElement(
              n.rU,
              {
                to: A.SteamMLSchemas(),
                className: (0, D.Z)(r.HeaderOption, a && r.Selected),
              },
              "SCHEMAS"
            ),
            s.createElement(
              n.rU,
              {
                to: A.SteamMLModels(),
                className: (0, D.Z)(r.HeaderOption, m && r.Selected),
              },
              "MODELS"
            ),
            s.createElement(
              n.rU,
              {
                to: A.SteamMLProblems(),
                className: (0, D.Z)(r.HeaderOption, l && r.Selected),
              },
              "PROBLEMS"
            )
          );
        },
        k = (e) => s.createElement("div", null, "MODEL PAGE");
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3504],
  {
    95018: (t) => {
      t.exports = {
        AdminPageCtn: "adminshared_AdminPageCtn_KNaeC",
        WidePageCtn: "adminshared_WidePageCtn_3-Dwx",
        PageTitle: "adminshared_PageTitle_15d88",
        PageSubTitle: "adminshared_PageSubTitle_3gMUt",
        ValveOnlyTitle: "adminshared_ValveOnlyTitle_3ccYi",
        ValveOnlyBackground: "adminshared_ValveOnlyBackground_TRbfz",
        ColumnCtn: "adminshared_ColumnCtn_1Mnmn",
        LeftCol: "adminshared_LeftCol_1neFt",
        SectionCtn: "adminshared_SectionCtn_3la4r",
        RightCol: "adminshared_RightCol_p8nGm",
        DashLink: "adminshared_DashLink_2y93_",
        FlexRow: "adminshared_FlexRow_2OkCw",
        MarginBottom: "adminshared_MarginBottom_1qVJS",
        StatusLineItemCtn: "adminshared_StatusLineItemCtn_jtOdk",
        StatusIcon: "adminshared_StatusIcon_gwjXH",
        StatusIconDone: "adminshared_StatusIconDone_20lWe",
      };
    },
    4821: (t) => {
      t.exports = {
        WhitelistNumber: "reorderablelist_WhitelistNumber_1ZU2Q",
        WhitelistCtn: "reorderablelist_WhitelistCtn_7i0GR",
        WhitelistRow: "reorderablelist_WhitelistRow_3m2mx",
        Grabbable: "reorderablelist_Grabbable_1_TyG",
        Grabbing: "reorderablelist_Grabbing_2Ir2N",
        DisabledGrab: "reorderablelist_DisabledGrab_2VzwU",
        WhitelistAvatar: "reorderablelist_WhitelistAvatar_29uaB",
        ButtonCtn: "reorderablelist_ButtonCtn_27xG1",
      };
    },
    14809: (t, e, s) => {
      "use strict";
      s.d(e, { R: () => v });
      var i = s(70655),
        n = s(67294),
        a = s(29323),
        o = s(64839);
      var r = s(33547),
        l = s(48780),
        d = s(4821),
        h = s.n(d),
        u = s(69491),
        m = s.n(u),
        c = s(95598),
        g = s(9669),
        p = s.n(g),
        _ = s(48899);
      let v = class extends n.Component {
        constructor(t) {
          super(t),
            (this.state = {
              bGrabbing: !1,
              startY: 0,
              index: -1,
              rowDelta: 0,
              actualRowHeight: 0,
            }),
            (this.container = null),
            (this.m_cancelSignal = p().CancelToken.source()),
            (this.container = n.createRef());
        }
        componentDidMount() {
          this.container.current &&
            this.container.current.firstElementChild &&
            this.setState({
              actualRowHeight:
                this.container.current.firstElementChild.getBoundingClientRect()
                  .height,
            });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("ReorderableList unmounting");
        }
        OnWhitelistGrab(t, e) {
          if (!this.m_cancelSignal.token.reason) {
            const s = t.clientY;
            this.setState({ bGrabbing: !0, startY: s, index: e }),
              window.addEventListener("mousemove", this.OnWhitelistMove),
              window.addEventListener("mouseup", this.OnWhitelistRelease);
          }
        }
        OnWhitelistRelease(t) {
          this.m_cancelSignal.token.reason ||
            (this.setState({
              bGrabbing: !1,
              startY: 0,
              index: -1,
              rowDelta: 0,
            }),
            window.removeEventListener("mousemove", this.OnWhitelistMove));
        }
        OnWhitelistMove(t) {
          const e = t.clientY - this.state.startY,
            s = Boolean(this.props.fixedRowHeight)
              ? this.props.fixedRowHeight
              : this.state.actualRowHeight,
            i = Math.min(
              Math.round(e / s),
              this.props.items.length - this.state.index - 1
            );
          if (i !== this.state.rowDelta) {
            const t = this.state.index + this.state.rowDelta,
              e = _.Lh(this.state.index + i, 0, this.props.items.length - 1);
            this.m_cancelSignal.token.reason ||
              (this.props.onMove
                ? this.props.onMove(t, e)
                : (0, l.hV)(this.props.items, t, e),
              this.setState({ rowDelta: i }),
              this.props.onReorder && this.props.onReorder());
          }
        }
        render() {
          const { render: t } = this.props;
          return n.createElement(
            "div",
            { className: h().WhitelistCtn, ref: this.container },
            this.props.items.map((e, s) =>
              n.createElement(
                "div",
                {
                  key: s,
                  className: `${h().WhitelistRow}`,
                  style: Boolean(this.props.fixedRowHeight)
                    ? { height: this.props.fixedRowHeight }
                    : {},
                },
                n.createElement("img", {
                  className: `${h().WhitelistAvatar} ${h().Grabbable} ${
                    this.state.bGrabbing ? h().Grabbing : ""
                  } ${this.props.bDisabled ? h().DisabledGrab : ""}`,
                  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC",
                  onMouseDown: Boolean(this.props.bDisabled)
                    ? void 0
                    : (t) => this.OnWhitelistGrab(t, s),
                }),
                n.createElement(
                  "div",
                  { className: h().WhitelistNumber },
                  s + 1
                ),
                t(e),
                Boolean(this.props.onEdit || this.props.onDelete) &&
                  n.createElement(
                    "div",
                    { className: h().ButtonCtn },
                    Boolean(this.props.onEdit) &&
                      n.createElement(
                        "div",
                        {
                          className: m().RemoveIcon,
                          onClick: (t) => this.props.onEdit(s, t),
                        },
                        n.createElement(c.I8b, null)
                      ),
                    Boolean(this.props.onDelete) &&
                      n.createElement("img", {
                        className: m().RemoveIcon,
                        src: r.Z,
                        onClick: (t) => this.props.onDelete(s, t),
                      })
                  )
              )
            )
          );
        }
      };
      (0, i.gn)([o.ak], v.prototype, "OnWhitelistGrab", null),
        (0, i.gn)([o.ak], v.prototype, "OnWhitelistRelease", null),
        (0, i.gn)([o.ak], v.prototype, "OnWhitelistMove", null),
        (v = (0, i.gn)([a.Pi], v));
    },
    62642: (t, e, s) => {
      "use strict";
      s.d(e, {
        C1: () => g,
        HD: () => c,
        X_: () => h,
        bA: () => _,
        ee: () => d,
        ky: () => m,
      });
      var i = s(70655),
        n = s(9669),
        a = s.n(n),
        o = s(67294),
        r = (s(26149), s(82946), s(93976)),
        l = s(90666);
      class d {
        constructor() {
          "dev" === l.De.WEB_UNIVERSE &&
            (window.g_ContentHubCategoriesStore = this);
        }
        BIsLoaded() {
          return Boolean(this.m_mapCategories);
        }
        GetCategories() {
          return this.m_mapCategories;
        }
        HintLoad() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return (
              this.m_promise || (this.m_promise = this.Load()), this.m_promise
            );
          });
        }
        Load() {
          var t;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const e =
                l.De.PARTNER_BASE_URL +
                "admin/store/contenthub/ajaxgetcontenthubcategories",
              s = { origin: self.origin, sessionid: l.De.SESSIONID };
            let i = null;
            try {
              const n = yield a().get(e, { params: s });
              if (
                200 === n.status &&
                1 ===
                  (null === (t = n.data) || void 0 === t ? void 0 : t.success)
              )
                return void (this.m_mapCategories = this.ParseResponse(n.data));
              (this.m_promise = null), (i = (0, r.l)(n));
            } catch (t) {
              (this.m_promise = null), (i = (0, r.l)(t));
            }
            console.error(
              "CContentHubCategoriesStore.Load failed: " + i.strErrorMsg,
              i
            );
          });
        }
        ParseResponse(t) {
          const e = new Map(),
            s = t.categories;
          for (const t of Object.keys(s)) {
            const i = s[t],
              n = {
                handle: i.handle,
                loc_token: i.loc_token,
                type: i.type,
                heading: i.heading,
              };
            i.must &&
              (Array.isArray(i.must)
                ? (n.must = i.must.map((t) => ({ id: t })))
                : (n.must = [{ id: i.must }])),
              i.any &&
                (Array.isArray(i.any)
                  ? (n.any = i.any.map((t) => ({ id: t })))
                  : (n.any = [{ id: i.any }])),
              i.mustnot &&
                (Array.isArray(i.mustnot)
                  ? (n.mustnot = i.mustnot.map((t) => ({ id: t })))
                  : (n.mustnot = [{ id: i.mustnot }])),
              e.set(t, n);
          }
          return e;
        }
        static Get() {
          return d.s_singleton || (d.s_singleton = new d()), d.s_singleton;
        }
      }
      function h() {
        var t;
        return (0, i.mG)(this, void 0, void 0, function* () {
          const e =
              l.De.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxgetcontenthubcategorieskv",
            s = { origin: self.origin, sessionid: l.De.SESSIONID };
          let i = null;
          try {
            const n = yield a().get(e, { params: s, withCredentials: !0 });
            if (
              200 === n.status &&
              1 === (null === (t = n.data) || void 0 === t ? void 0 : t.success)
            ) {
              const t = { rgCategories: [], bHasUnpublishedChanges: !1 };
              return (
                n.data.in_progress
                  ? ((t.rgCategories = u(
                      JSON.parse(n.data.in_progress).categories
                    )),
                    (t.bHasUnpublishedChanges = !0))
                  : n.data.active &&
                    (t.rgCategories = u(JSON.parse(n.data.active).categories)),
                t
              );
            }
            i = (0, r.l)(n);
          } catch (t) {
            i = (0, r.l)(t);
          }
          return (
            console.error("GetCategoriesKV failed: " + i.strErrorMsg, i),
            { rgCategories: [] }
          );
        });
      }
      function u(t) {
        const e = [];
        for (const s of Object.keys(t)) {
          const i = t[s],
            n = { handle: i.handle, type: i.type, loc_token: i.loc_token };
          i.must &&
            (Array.isArray(i.must)
              ? (n.must = i.must.map((t) => ({ id: Number(t) })))
              : (n.must = [{ id: Number(i.must) }])),
            i.any &&
              (Array.isArray(i.any)
                ? (n.any = i.any.map((t) => ({ id: Number(t) })))
                : (n.any = [{ id: Number(i.any) }])),
            i.mustnot &&
              (Array.isArray(i.mustnot)
                ? (n.mustnot = i.mustnot.map((t) => ({ id: Number(t) })))
                : (n.mustnot = [{ id: Number(i.mustnot) }])),
            e.push(n);
        }
        return e;
      }
      function m() {
        const [t, e] = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            h().then((t) => {
              e(t.rgCategories);
            });
          }, []),
          t
        );
      }
      function c(t) {
        var e, s, n, o, d, h;
        return (0, i.mG)(this, void 0, void 0, function* () {
          const i = {};
          for (const a of t)
            (i[a.handle] = {
              handle: a.handle,
              type: a.type,
              loc_token: a.loc_token,
              must:
                (null === (e = a.must) || void 0 === e
                  ? void 0
                  : e.map((t) => t.id)) || void 0,
              any:
                (null === (s = a.any) || void 0 === s
                  ? void 0
                  : s.map((t) => t.id)) || void 0,
              mustnot:
                (null === (n = a.mustnot) || void 0 === n
                  ? void 0
                  : n.map((t) => t.id)) || void 0,
              heading: a.heading || void 0,
            }),
              1 ===
                (null === (o = i[a.handle].must) || void 0 === o
                  ? void 0
                  : o.length) && (i[a.handle].must = i[a.handle].must[0]),
              1 ===
                (null === (d = i[a.handle].mustnot) || void 0 === d
                  ? void 0
                  : d.length) && (i[a.handle].mustnot = i[a.handle].mustnot[0]);
          const u =
              l.De.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxsavecontenthubcategorieskv",
            m = new FormData();
          m.append("sessionid", l.De.SESSIONID),
            m.append("origin", self.origin),
            m.append("json", JSON.stringify(i));
          let c = null;
          try {
            const t = yield a().post(u, m, { withCredentials: !0 });
            if (
              200 === t.status &&
              1 === (null === (h = t.data) || void 0 === h ? void 0 : h.success)
            )
              return null;
            c = (0, r.l)(t);
          } catch (t) {
            c = (0, r.l)(t);
          }
          return (
            console.error("SaveCategoriesKV failed: " + c.strErrorMsg, c), c
          );
        });
      }
      function g() {
        var t;
        return (0, i.mG)(this, void 0, void 0, function* () {
          const e =
              l.De.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxpublishcontenthubcategorieskv",
            s = { origin: self.origin, sessionid: l.De.SESSIONID };
          let i = null;
          try {
            const n = yield a().get(e, { params: s, withCredentials: !0 });
            if (
              200 === n.status &&
              1 === (null === (t = n.data) || void 0 === t ? void 0 : t.success)
            )
              return null;
            i = (0, r.l)(n);
          } catch (t) {
            i = (0, r.l)(t);
          }
          return (
            console.error("PublishCategoriesKV failed: " + i.strErrorMsg, i), i
          );
        });
      }
      class p {
        constructor() {
          "dev" === l.De.WEB_UNIVERSE && (window.g_StoreTagStore = this);
        }
        BIsLoaded() {
          return Boolean(this.m_rgTags) && Boolean(this.m_rgCategories);
        }
        GetTags() {
          return this.m_rgTags;
        }
        GetCategories() {
          return this.m_rgCategories;
        }
        HintLoad() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return (
              this.m_promise || (this.m_promise = this.Load()), this.m_promise
            );
          });
        }
        Load() {
          var t;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const e =
                l.De.PARTNER_BASE_URL +
                "admin/store/contenthub/ajaxgetstoretagsandcategories",
              s = {
                origin: self.origin,
                sessionid: l.De.SESSIONID,
                l: l.De.LANGUAGE,
              };
            let i = null;
            try {
              const n = yield a().get(e, { params: s });
              if (
                200 === n.status &&
                1 ===
                  (null === (t = n.data) || void 0 === t ? void 0 : t.success)
              )
                return (
                  (this.m_rgTags = n.data.tags),
                  void (this.m_rgCategories = n.data.categories)
                );
              (this.m_promise = null), (i = (0, r.l)(n));
            } catch (t) {
              (this.m_promise = null), (i = (0, r.l)(t));
            }
            console.error(
              "CStoreTagsAndCategoriesStore.Load failed: " + i.strErrorMsg,
              i
            );
          });
        }
        static Get() {
          return p.s_singleton || (p.s_singleton = new p()), p.s_singleton;
        }
      }
      function _() {
        const [t, e] = o.useState([]),
          [s, i] = o.useState([]);
        return (
          o.useEffect(() => {
            e(void 0),
              i(void 0),
              p
                .Get()
                .HintLoad()
                .then(() => {
                  e(p.Get().GetTags()), i(p.Get().GetCategories());
                });
          }, []),
          { rgTags: t, rgCategories: s }
        );
      }
    },
  },
]);

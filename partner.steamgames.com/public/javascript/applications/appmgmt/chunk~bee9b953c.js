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
        ColHeader: "adminshared_ColHeader_uP0hv",
        ColHeaderImg: "adminshared_ColHeaderImg_3OYqx",
        SectionCtn: "adminshared_SectionCtn_3la4r",
        RightCol: "adminshared_RightCol_p8nGm",
        SmallText: "adminshared_SmallText_1YUYd",
        TitleSmall: "adminshared_TitleSmall_oEKks",
        DashLink: "adminshared_DashLink_2y93_",
        FlexRow: "adminshared_FlexRow_2OkCw",
        MarginBottom: "adminshared_MarginBottom_1qVJS",
        StatusLineItemCtn: "adminshared_StatusLineItemCtn_jtOdk",
        StatusIcon: "adminshared_StatusIcon_gwjXH",
        StatusIconDone: "adminshared_StatusIconDone_20lWe",
        UploadedImageDisplayCtn: "adminshared_UploadedImageDisplayCtn_suH0c",
        UploaderLeftCol: "adminshared_UploaderLeftCol_1lUkC",
        UploaderRightCol: "adminshared_UploaderRightCol_1qxnk",
      };
    },
    14809: (t, e, s) => {
      "use strict";
      s.d(e, { R: () => _ });
      var n = s(70655),
        i = s(67294),
        a = s(29323),
        o = s(64839);
      var r = s(33547),
        l = s(48780),
        d = s(4821),
        m = s.n(d),
        h = s(69491),
        u = s.n(h),
        g = s(95598),
        c = s(9669),
        p = s.n(c),
        A = s(48899);
      let _ = class extends i.Component {
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
            (this.container = i.createRef());
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
            n = Math.min(
              Math.round(e / s),
              this.props.items.length - this.state.index - 1
            );
          if (n !== this.state.rowDelta) {
            const t = this.state.index + this.state.rowDelta,
              e = A.Lh(this.state.index + n, 0, this.props.items.length - 1);
            this.m_cancelSignal.token.reason ||
              (this.props.onMove
                ? this.props.onMove(t, e)
                : (0, l.hV)(this.props.items, t, e),
              this.setState({ rowDelta: n }),
              this.props.onReorder && this.props.onReorder());
          }
        }
        render() {
          const { render: t } = this.props;
          return i.createElement(
            "div",
            { className: m().WhitelistCtn, ref: this.container },
            this.props.items.map((e, s) =>
              i.createElement(
                "div",
                {
                  key: s,
                  className: `${m().WhitelistRow}`,
                  style: Boolean(this.props.fixedRowHeight)
                    ? { height: this.props.fixedRowHeight }
                    : {},
                },
                i.createElement("img", {
                  className: `${m().WhitelistAvatar} ${m().Grabbable} ${
                    this.state.bGrabbing ? m().Grabbing : ""
                  } ${this.props.bDisabled ? m().DisabledGrab : ""}`,
                  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC",
                  onMouseDown: Boolean(this.props.bDisabled)
                    ? void 0
                    : (t) => this.OnWhitelistGrab(t, s),
                }),
                i.createElement(
                  "div",
                  { className: m().WhitelistNumber },
                  s + 1
                ),
                t(e),
                Boolean(this.props.onEdit || this.props.onDelete) &&
                  i.createElement(
                    "div",
                    { className: m().ButtonCtn },
                    Boolean(this.props.onEdit) &&
                      i.createElement(
                        "div",
                        {
                          className: u().RemoveIcon,
                          onClick: (t) => this.props.onEdit(s, t),
                        },
                        i.createElement(g.I8b, null)
                      ),
                    Boolean(this.props.onDelete) &&
                      i.createElement("img", {
                        className: u().RemoveIcon,
                        src: r.Z,
                        onClick: (t) => this.props.onDelete(s, t),
                      })
                  )
              )
            )
          );
        }
      };
      (0, n.gn)([o.ak], _.prototype, "OnWhitelistGrab", null),
        (0, n.gn)([o.ak], _.prototype, "OnWhitelistRelease", null),
        (0, n.gn)([o.ak], _.prototype, "OnWhitelistMove", null),
        (_ = (0, n.gn)([a.Pi], _));
    },
    62642: (t, e, s) => {
      "use strict";
      s.d(e, {
        C1: () => c,
        HD: () => g,
        Sz: () => _,
        X_: () => m,
        bA: () => A,
        ee: () => d,
        ky: () => u,
      });
      var n = s(70655),
        i = s(9669),
        a = s.n(i),
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            return (
              this.m_promise || (this.m_promise = this.Load()), this.m_promise
            );
          });
        }
        Load() {
          var t;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const e =
                l.De.PARTNER_BASE_URL +
                "admin/store/contenthub/ajaxgetcontenthubcategories",
              s = { origin: self.origin, sessionid: l.De.SESSIONID };
            let n = null;
            try {
              const i = yield a().get(e, { params: s });
              if (
                200 === i.status &&
                1 ===
                  (null === (t = i.data) || void 0 === t ? void 0 : t.success)
              )
                return void (this.m_mapCategories = this.ParseResponse(i.data));
              (this.m_promise = null), (n = (0, r.l)(i));
            } catch (t) {
              (this.m_promise = null), (n = (0, r.l)(t));
            }
            console.error(
              "CContentHubCategoriesStore.Load failed: " + n.strErrorMsg,
              n
            );
          });
        }
        ParseResponse(t) {
          const e = new Map(),
            s = t.categories;
          for (const t of Object.keys(s)) {
            const n = s[t],
              i = {
                handle: n.handle,
                loc_token: n.loc_token,
                type: n.type,
                heading: n.heading,
              };
            n.must &&
              (Array.isArray(n.must)
                ? (i.must = n.must.map((t) => ({ id: t })))
                : (i.must = [{ id: n.must }])),
              n.any &&
                (Array.isArray(n.any)
                  ? (i.any = n.any.map((t) => ({ id: t })))
                  : (i.any = [{ id: n.any }])),
              n.mustnot &&
                (Array.isArray(n.mustnot)
                  ? (i.mustnot = n.mustnot.map((t) => ({ id: t })))
                  : (i.mustnot = [{ id: n.mustnot }])),
              e.set(t, i);
          }
          return e;
        }
        static Get() {
          return d.s_singleton || (d.s_singleton = new d()), d.s_singleton;
        }
      }
      function m() {
        var t;
        return (0, n.mG)(this, void 0, void 0, function* () {
          const e =
              l.De.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxgetcontenthubcategorieskv",
            s = { origin: self.origin, sessionid: l.De.SESSIONID };
          let n = null;
          try {
            const i = yield a().get(e, { params: s, withCredentials: !0 });
            if (
              200 === i.status &&
              1 === (null === (t = i.data) || void 0 === t ? void 0 : t.success)
            ) {
              const t = { rgCategories: [], bHasUnpublishedChanges: !1 };
              return (
                i.data.in_progress
                  ? ((t.rgCategories = h(
                      JSON.parse(i.data.in_progress).categories
                    )),
                    (t.bHasUnpublishedChanges = !0))
                  : i.data.active &&
                    (t.rgCategories = h(JSON.parse(i.data.active).categories)),
                t
              );
            }
            n = (0, r.l)(i);
          } catch (t) {
            n = (0, r.l)(t);
          }
          return (
            console.error("GetCategoriesKV failed: " + n.strErrorMsg, n),
            { rgCategories: [] }
          );
        });
      }
      function h(t) {
        const e = [];
        for (const s of Object.keys(t)) {
          const n = t[s],
            i = {
              handle: n.handle,
              type: n.type,
              loc_token: n.loc_token,
              heading: n.heading,
            };
          n.must &&
            (Array.isArray(n.must)
              ? (i.must = n.must.map((t) => ({ id: Number(t) })))
              : (i.must = [{ id: Number(n.must) }])),
            n.any &&
              (Array.isArray(n.any)
                ? (i.any = n.any.map((t) => ({ id: Number(t) })))
                : (i.any = [{ id: Number(n.any) }])),
            n.mustnot &&
              (Array.isArray(n.mustnot)
                ? (i.mustnot = n.mustnot.map((t) => ({ id: Number(t) })))
                : (i.mustnot = [{ id: Number(n.mustnot) }])),
            e.push(i);
        }
        return e;
      }
      function u() {
        const [t, e] = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            m().then((t) => {
              e(t.rgCategories);
            });
          }, []),
          t
        );
      }
      function g(t) {
        var e, s, i, o, d, m;
        return (0, n.mG)(this, void 0, void 0, function* () {
          const n = {};
          for (const a of t)
            (n[a.handle] = {
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
                (null === (i = a.mustnot) || void 0 === i
                  ? void 0
                  : i.map((t) => t.id)) || void 0,
              heading: a.heading || void 0,
            }),
              1 ===
                (null === (o = n[a.handle].must) || void 0 === o
                  ? void 0
                  : o.length) && (n[a.handle].must = n[a.handle].must[0]),
              1 ===
                (null === (d = n[a.handle].mustnot) || void 0 === d
                  ? void 0
                  : d.length) && (n[a.handle].mustnot = n[a.handle].mustnot[0]);
          const h =
              l.De.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxsavecontenthubcategorieskv",
            u = new FormData();
          u.append("sessionid", l.De.SESSIONID),
            u.append("origin", self.origin),
            u.append("json", JSON.stringify(n));
          let g = null;
          try {
            const t = yield a().post(h, u, { withCredentials: !0 });
            if (
              200 === t.status &&
              1 === (null === (m = t.data) || void 0 === m ? void 0 : m.success)
            )
              return null;
            g = (0, r.l)(t);
          } catch (t) {
            g = (0, r.l)(t);
          }
          return (
            console.error("SaveCategoriesKV failed: " + g.strErrorMsg, g), g
          );
        });
      }
      function c() {
        var t;
        return (0, n.mG)(this, void 0, void 0, function* () {
          const e =
              l.De.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxpublishcontenthubcategorieskv",
            s = { origin: self.origin, sessionid: l.De.SESSIONID };
          let n = null;
          try {
            const i = yield a().get(e, { params: s, withCredentials: !0 });
            if (
              200 === i.status &&
              1 === (null === (t = i.data) || void 0 === t ? void 0 : t.success)
            )
              return null;
            n = (0, r.l)(i);
          } catch (t) {
            n = (0, r.l)(t);
          }
          return (
            console.error("PublishCategoriesKV failed: " + n.strErrorMsg, n), n
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
        GetStoreTagMap() {
          return this.m_mapStoreTags;
        }
        GetStoreCategoryMap() {
          return this.m_mapStoreCategories;
        }
        HintLoad() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return (
              this.m_promise || (this.m_promise = this.Load()), this.m_promise
            );
          });
        }
        Load() {
          var t;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const e =
                l.De.PARTNER_BASE_URL +
                "admin/store/contenthub/ajaxgetstoretagsandcategories",
              s = {
                origin: self.origin,
                sessionid: l.De.SESSIONID,
                l: l.De.LANGUAGE,
              };
            let n = null;
            try {
              const i = yield a().get(e, { params: s });
              if (
                200 === i.status &&
                1 ===
                  (null === (t = i.data) || void 0 === t ? void 0 : t.success)
              )
                return (
                  (this.m_rgTags = i.data.tags),
                  (this.m_rgCategories = i.data.categories),
                  (this.m_mapStoreTags = new Map()),
                  this.m_rgTags.forEach((t) =>
                    this.m_mapStoreTags.set(t.tagid, t)
                  ),
                  (this.m_mapStoreCategories = new Map()),
                  void this.m_rgCategories.forEach((t) =>
                    this.m_mapStoreCategories.set(t.categoryid, t)
                  )
                );
              (this.m_promise = null), (n = (0, r.l)(i));
            } catch (t) {
              (this.m_promise = null), (n = (0, r.l)(t));
            }
            console.error(
              "CStoreTagsAndCategoriesStore.Load failed: " + n.strErrorMsg,
              n
            );
          });
        }
        static Get() {
          return p.s_singleton || (p.s_singleton = new p()), p.s_singleton;
        }
      }
      function A() {
        const [t, e] = o.useState(p.Get().GetTags()),
          [s, n] = o.useState(p.Get().GetCategories());
        return (
          o.useEffect(() => {
            (void 0 !== t && void 0 !== s) ||
              p
                .Get()
                .HintLoad()
                .then(() => {
                  e(p.Get().GetTags()), n(p.Get().GetCategories());
                });
          }, [s, t]),
          { rgTags: t, rgCategories: s }
        );
      }
      function _() {
        const [t, e] = o.useState(p.Get().GetStoreTagMap()),
          [s, n] = o.useState(p.Get().GetStoreCategoryMap());
        return (
          o.useEffect(() => {
            (void 0 !== t && void 0 !== s) ||
              p
                .Get()
                .HintLoad()
                .then(() => {
                  e(p.Get().GetStoreTagMap()), n(p.Get().GetStoreCategoryMap());
                });
          }, [s, t]),
          { mapStoreTags: t, mapStoreCategories: s }
        );
      }
    },
    33547: (t, e, s) => {
      "use strict";
      s.d(e, { Z: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);

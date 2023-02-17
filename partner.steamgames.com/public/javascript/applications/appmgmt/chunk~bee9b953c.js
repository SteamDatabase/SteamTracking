/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3504],
  {
    95018: (e) => {
      e.exports = {
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
        BannerPreview: "adminshared_BannerPreview_1HJLo",
        UploaderRightCol: "adminshared_UploaderRightCol_1qxnk",
        LangCountTitle: "adminshared_LangCountTitle_32cpl",
        LangSelectCtn: "adminshared_LangSelectCtn_1HRVR",
        UploaderImgLang: "adminshared_UploaderImgLang_35KwL",
        LangSelected: "adminshared_LangSelected_362rk",
        DeleteAll: "adminshared_DeleteAll_2aArL",
      };
    },
    14809: (e, t, s) => {
      "use strict";
      s.d(t, { R: () => _ });
      var n = s(70655),
        a = s(67294),
        i = s(29323),
        o = s(64839);
      var r = s(33547),
        l = s(48780),
        d = s(4821),
        m = s.n(d),
        h = s(69491),
        g = s.n(h),
        u = s(95598),
        c = s(9669),
        p = s.n(c),
        A = s(48899);
      let _ = class extends a.Component {
        constructor(e) {
          super(e),
            (this.state = {
              bGrabbing: !1,
              startY: 0,
              index: -1,
              rowDelta: 0,
              actualRowHeight: 0,
            }),
            (this.container = null),
            (this.m_cancelSignal = p().CancelToken.source()),
            (this.container = a.createRef());
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
        OnWhitelistGrab(e, t) {
          if (!this.m_cancelSignal.token.reason) {
            const s = e.clientY;
            this.setState({ bGrabbing: !0, startY: s, index: t }),
              window.addEventListener("mousemove", this.OnWhitelistMove),
              window.addEventListener("mouseup", this.OnWhitelistRelease);
          }
        }
        OnWhitelistRelease(e) {
          this.m_cancelSignal.token.reason ||
            (this.setState({
              bGrabbing: !1,
              startY: 0,
              index: -1,
              rowDelta: 0,
            }),
            window.removeEventListener("mousemove", this.OnWhitelistMove));
        }
        OnWhitelistMove(e) {
          const t = e.clientY - this.state.startY,
            s = Boolean(this.props.fixedRowHeight)
              ? this.props.fixedRowHeight
              : this.state.actualRowHeight,
            n = Math.min(
              Math.round(t / s),
              this.props.items.length - this.state.index - 1
            );
          if (n !== this.state.rowDelta) {
            const e = this.state.index + this.state.rowDelta,
              t = A.Lh(this.state.index + n, 0, this.props.items.length - 1);
            this.m_cancelSignal.token.reason ||
              (this.props.onMove
                ? this.props.onMove(e, t)
                : (0, l.hV)(this.props.items, e, t),
              this.setState({ rowDelta: n }),
              this.props.onReorder && this.props.onReorder());
          }
        }
        render() {
          const { render: e } = this.props;
          return a.createElement(
            "div",
            { className: m().WhitelistCtn, ref: this.container },
            this.props.items.map((t, s) =>
              a.createElement(
                "div",
                {
                  key: s,
                  className: `${m().WhitelistRow}`,
                  style: Boolean(this.props.fixedRowHeight)
                    ? { height: this.props.fixedRowHeight }
                    : {},
                },
                a.createElement("img", {
                  className: `${m().WhitelistAvatar} ${m().Grabbable} ${
                    this.state.bGrabbing ? m().Grabbing : ""
                  } ${this.props.bDisabled ? m().DisabledGrab : ""}`,
                  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC",
                  onMouseDown: Boolean(this.props.bDisabled)
                    ? void 0
                    : (e) => this.OnWhitelistGrab(e, s),
                }),
                a.createElement(
                  "div",
                  { className: m().WhitelistNumber },
                  s + 1
                ),
                e(t),
                Boolean(this.props.onEdit || this.props.onDelete) &&
                  a.createElement(
                    "div",
                    { className: m().ButtonCtn },
                    Boolean(this.props.onEdit) &&
                      a.createElement(
                        "div",
                        {
                          className: g().RemoveIcon,
                          onClick: (e) => this.props.onEdit(s, e),
                        },
                        a.createElement(u.I8b, null)
                      ),
                    Boolean(this.props.onDelete) &&
                      a.createElement("img", {
                        className: g().RemoveIcon,
                        src: r.Z,
                        onClick: (e) => this.props.onDelete(s, e),
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
        (_ = (0, n.gn)([i.Pi], _));
    },
    62642: (e, t, s) => {
      "use strict";
      s.d(t, {
        C1: () => c,
        HD: () => u,
        Sz: () => _,
        X_: () => m,
        bA: () => A,
        ee: () => d,
        ky: () => g,
      });
      var n = s(70655),
        a = s(9669),
        i = s.n(a),
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
          var e;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t =
                l.De.PARTNER_BASE_URL +
                "admin/store/contenthub/ajaxgetcontenthubcategories",
              s = { origin: self.origin, sessionid: l.De.SESSIONID };
            let n = null;
            try {
              const a = yield i().get(t, { params: s });
              if (
                200 === a.status &&
                1 ===
                  (null === (e = a.data) || void 0 === e ? void 0 : e.success)
              )
                return void (this.m_mapCategories = this.ParseResponse(a.data));
              (this.m_promise = null), (n = (0, r.l)(a));
            } catch (e) {
              (this.m_promise = null), (n = (0, r.l)(e));
            }
            console.error(
              "CContentHubCategoriesStore.Load failed: " + n.strErrorMsg,
              n
            );
          });
        }
        ParseResponse(e) {
          const t = new Map(),
            s = e.categories;
          for (const e of Object.keys(s)) {
            const n = s[e],
              a = {
                handle: n.handle,
                loc_token: n.loc_token,
                type: n.type,
                heading: n.heading,
              };
            n.must &&
              (Array.isArray(n.must)
                ? (a.must = n.must.map((e) => ({ id: e })))
                : (a.must = [{ id: n.must }])),
              n.any &&
                (Array.isArray(n.any)
                  ? (a.any = n.any.map((e) => ({ id: e })))
                  : (a.any = [{ id: n.any }])),
              n.mustnot &&
                (Array.isArray(n.mustnot)
                  ? (a.mustnot = n.mustnot.map((e) => ({ id: e })))
                  : (a.mustnot = [{ id: n.mustnot }])),
              t.set(e, a);
          }
          return t;
        }
        static Get() {
          return d.s_singleton || (d.s_singleton = new d()), d.s_singleton;
        }
      }
      function m() {
        var e;
        return (0, n.mG)(this, void 0, void 0, function* () {
          const t =
              l.De.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxgetcontenthubcategorieskv",
            s = { origin: self.origin, sessionid: l.De.SESSIONID };
          let n = null;
          try {
            const a = yield i().get(t, { params: s, withCredentials: !0 });
            if (
              200 === a.status &&
              1 === (null === (e = a.data) || void 0 === e ? void 0 : e.success)
            ) {
              const e = { rgCategories: [], bHasUnpublishedChanges: !1 };
              return (
                a.data.in_progress
                  ? ((e.rgCategories = h(
                      JSON.parse(a.data.in_progress).categories
                    )),
                    (e.bHasUnpublishedChanges = !0))
                  : a.data.active &&
                    (e.rgCategories = h(JSON.parse(a.data.active).categories)),
                e
              );
            }
            n = (0, r.l)(a);
          } catch (e) {
            n = (0, r.l)(e);
          }
          return (
            console.error("GetCategoriesKV failed: " + n.strErrorMsg, n),
            { rgCategories: [] }
          );
        });
      }
      function h(e) {
        const t = [];
        for (const s of Object.keys(e)) {
          const n = e[s],
            a = {
              handle: n.handle,
              type: n.type,
              loc_token: n.loc_token,
              heading: n.heading,
            };
          n.must &&
            (Array.isArray(n.must)
              ? (a.must = n.must.map((e) => ({ id: Number(e) })))
              : (a.must = [{ id: Number(n.must) }])),
            n.any &&
              (Array.isArray(n.any)
                ? (a.any = n.any.map((e) => ({ id: Number(e) })))
                : (a.any = [{ id: Number(n.any) }])),
            n.mustnot &&
              (Array.isArray(n.mustnot)
                ? (a.mustnot = n.mustnot.map((e) => ({ id: Number(e) })))
                : (a.mustnot = [{ id: Number(n.mustnot) }])),
            t.push(a);
        }
        return t;
      }
      function g() {
        const [e, t] = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            m().then((e) => {
              t(e.rgCategories);
            });
          }, []),
          e
        );
      }
      function u(e) {
        var t, s, a, o, d, m;
        return (0, n.mG)(this, void 0, void 0, function* () {
          const n = {};
          for (const i of e)
            (n[i.handle] = {
              handle: i.handle,
              type: i.type,
              loc_token: i.loc_token,
              must:
                (null === (t = i.must) || void 0 === t
                  ? void 0
                  : t.map((e) => e.id)) || void 0,
              any:
                (null === (s = i.any) || void 0 === s
                  ? void 0
                  : s.map((e) => e.id)) || void 0,
              mustnot:
                (null === (a = i.mustnot) || void 0 === a
                  ? void 0
                  : a.map((e) => e.id)) || void 0,
              heading: i.heading || void 0,
            }),
              1 ===
                (null === (o = n[i.handle].must) || void 0 === o
                  ? void 0
                  : o.length) && (n[i.handle].must = n[i.handle].must[0]),
              1 ===
                (null === (d = n[i.handle].mustnot) || void 0 === d
                  ? void 0
                  : d.length) && (n[i.handle].mustnot = n[i.handle].mustnot[0]);
          const h =
              l.De.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxsavecontenthubcategorieskv",
            g = new FormData();
          g.append("sessionid", l.De.SESSIONID),
            g.append("origin", self.origin),
            g.append("json", JSON.stringify(n));
          let u = null;
          try {
            const e = yield i().post(h, g, { withCredentials: !0 });
            if (
              200 === e.status &&
              1 === (null === (m = e.data) || void 0 === m ? void 0 : m.success)
            )
              return null;
            u = (0, r.l)(e);
          } catch (e) {
            u = (0, r.l)(e);
          }
          return (
            console.error("SaveCategoriesKV failed: " + u.strErrorMsg, u), u
          );
        });
      }
      function c() {
        var e;
        return (0, n.mG)(this, void 0, void 0, function* () {
          const t =
              l.De.PARTNER_BASE_URL +
              "admin/store/contenthub/ajaxpublishcontenthubcategorieskv",
            s = { origin: self.origin, sessionid: l.De.SESSIONID };
          let n = null;
          try {
            const a = yield i().get(t, { params: s, withCredentials: !0 });
            if (
              200 === a.status &&
              1 === (null === (e = a.data) || void 0 === e ? void 0 : e.success)
            )
              return null;
            n = (0, r.l)(a);
          } catch (e) {
            n = (0, r.l)(e);
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
          var e;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t =
                l.De.PARTNER_BASE_URL +
                "admin/store/contenthub/ajaxgetstoretagsandcategories",
              s = {
                origin: self.origin,
                sessionid: l.De.SESSIONID,
                l: l.De.LANGUAGE,
              };
            let n = null;
            try {
              const a = yield i().get(t, { params: s });
              if (
                200 === a.status &&
                1 ===
                  (null === (e = a.data) || void 0 === e ? void 0 : e.success)
              )
                return (
                  (this.m_rgTags = a.data.tags),
                  (this.m_rgCategories = a.data.categories),
                  (this.m_mapStoreTags = new Map()),
                  this.m_rgTags.forEach((e) =>
                    this.m_mapStoreTags.set(e.tagid, e)
                  ),
                  (this.m_mapStoreCategories = new Map()),
                  void this.m_rgCategories.forEach((e) =>
                    this.m_mapStoreCategories.set(e.categoryid, e)
                  )
                );
              (this.m_promise = null), (n = (0, r.l)(a));
            } catch (e) {
              (this.m_promise = null), (n = (0, r.l)(e));
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
        const [e, t] = o.useState(p.Get().GetTags()),
          [s, n] = o.useState(p.Get().GetCategories());
        return (
          o.useEffect(() => {
            (void 0 !== e && void 0 !== s) ||
              p
                .Get()
                .HintLoad()
                .then(() => {
                  t(p.Get().GetTags()), n(p.Get().GetCategories());
                });
          }, [s, e]),
          { rgTags: e, rgCategories: s }
        );
      }
      function _() {
        const [e, t] = o.useState(p.Get().GetStoreTagMap()),
          [s, n] = o.useState(p.Get().GetStoreCategoryMap());
        return (
          o.useEffect(() => {
            (void 0 !== e && void 0 !== s) ||
              p
                .Get()
                .HintLoad()
                .then(() => {
                  t(p.Get().GetStoreTagMap()), n(p.Get().GetStoreCategoryMap());
                });
          }, [s, e]),
          { mapStoreTags: e, mapStoreCategories: s }
        );
      }
    },
    33547: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    "246V": function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "usePreloadDiscoveryQueue", function () {
          return v;
        }),
        r.d(t, "default", function () {
          return f;
        });
      var a = r("mrSG"),
        i = r("q1tI"),
        n = r.n(i),
        s = (r("WOjH"), r("/Q1a")),
        o = r("t1oW"),
        l = r("V9K+"),
        c = r("UIKn"),
        d = r("rmVU"),
        m = (r("Zdsb"), r("71ll")),
        u = (r("RrtU"), r("Lsvi")),
        p = r("Sboe"),
        _ = r.n(p),
        h = (r("e356"), r("GXif")),
        b = r("LAKx");
      function v() {
        const [e, t] = Object(i.useState)(!1);
        return (
          Object(i.useEffect)(() => {
            if (!e) {
              const e = Object(s.h)(
                "loyalty_webapi_token",
                "application_config"
              );
              if ("string" == typeof e) {
                (() =>
                  Object(a.a)(this, void 0, void 0, function* () {
                    o.a.BHasTransport() ||
                      o.a.Init(
                        new d.a(s.d.WEBAPI_BASE_URL, e).GetServiceTransport()
                      ),
                      l.a.BIsLoaded() ||
                        (yield l.a.Init(new d.a(s.d.WEBAPI_BASE_URL, e))),
                      c.a.BHasWebAPIKey() ||
                        c.a.Init(new d.a(s.d.WEBAPI_BASE_URL, e)),
                      t(!0);
                  }))();
              }
            }
          }, [e]),
          e
        );
      }
      function f(e) {
        const { appID: t } = e,
          r = v(),
          [a] = Object(m.d)("inqueue", 0),
          [o, l] = Object(i.useState)(!1),
          c = Object(i.useRef)();
        return r
          ? n.a.createElement(
              u.a,
              { ref: c, className: _.a.DiscoveryQueueWidgetCtn },
              n.a.createElement(
                "div",
                { onClick: () => l(!0), className: _.a.WidgetText },
                Object(h.g)("#DiscoveryQueue_ResumeWizard")
              ),
              n.a.createElement(b.a, {
                includeAppID: t,
                bWizardVisible: o,
                strUserCountry: s.d.COUNTRY,
                fnCloseModal: () => l(!1),
                eStoreDiscoveryQueueType: a,
              })
            )
          : null;
      }
    },
    "71ll": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "d", function () {
          return d;
        }),
        r.d(t, "c", function () {
          return m;
        });
      var a = r("s4NR"),
        i = r.n(a),
        n = r("q1tI"),
        s = r("EC67");
      function o(e, t) {
        const r = "location" in e ? e.location : e,
          a = "search" in r ? r.search : r,
          n = i.a.parse(a.substring(1))[t];
        return n && Array.isArray(n) ? n[n.length - 1] : n;
      }
      const l = (e) => null != e;
      function c(e, t, r) {
        const a = i.a.parse(e.location.search.substring(1));
        l(r) ? (a[t] = r) : delete a[t], e.push(`?${i.a.stringify(a)}`);
      }
      function d(e, t) {
        const r = Object(s.g)();
        let a = t;
        const i = o(location, e);
        l(i) &&
          (a = l(t)
            ? "boolean" == typeof t
              ? t.constructor("false" !== i)
              : t.constructor(i)
            : i);
        const [d, m] = Object(n.useState)(a);
        return [
          d,
          (t) => {
            c(r, e, l(t) ? String(t) : null), m(t);
          },
        ];
      }
      function m(e, t) {
        const r = i.a.parse(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const a = t[e];
            null == a ? delete r[e] : (r[e] = a);
          }
        e.push(`?${i.a.stringify(r)}`);
      }
    },
    LAKx: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return Se;
      });
      var a = r("mrSG"),
        i = r("aoTL"),
        n = r("q1tI"),
        s = r("Zdsb"),
        o = r("ez+p"),
        l = r("Lsvi"),
        c = r("s358"),
        d = r("O8Yk"),
        m = r("lfGQ"),
        u = (r("yfxr"), r("WOjH"), r("FmLm")),
        p = (r("X/lQ"), r("Ys0h")),
        _ = r("RrtU"),
        h = r("/cMS"),
        b = r("oEKi"),
        v = r("upZW"),
        f = r("1QaA"),
        y = r("4uAn"),
        g = r("i8i4"),
        S = r("hCpY"),
        w = r("7VqR"),
        I = r("6MVd"),
        C = r("c7k8"),
        E = (r("nDaX"), r("tXBB")),
        O = r("xHQ9"),
        B = (r("hane"), r("fsrB")),
        G = r("iDgP"),
        A = r("C/LP"),
        D = r("/Q1a");
      const N = new G.a("VirtualizedBoxCarousel").Debug,
        R = n.forwardRef(function (e, t) {
          const { name: r, initialColumn: a } = e,
            [i, s] = Object(A.a)("VBC_" + r, a || 0);
          return n.createElement(
            T,
            Object.assign({}, e, {
              ref: t,
              focusedColumn: i,
              setFocusedColumn: s,
            })
          );
        });
      class T extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this.state = { nContainerWidth: 0, nRightPadding: 0 }),
            (this.m_refContainer = n.createRef()),
            (this.m_refGrid = void 0),
            (this.m_refGridElement = void 0),
            (this.m_resizeObserver = new ResizeObserver(this.OnResize)),
            (this.m_scrollAnimation = null),
            (this.m_mapRefs = new Map()),
            (this.m_iStart = 0),
            (this.m_iEnd = 0),
            (this.m_activeScrollTo = null),
            (this.m_timeout = void 0);
        }
        StartScrollAnimation(e, t, r, a, i) {
          let n = this.m_refGrid;
          if (n)
            if (i) {
              const n = this.m_refGridElement;
              N("StartScrollAnimation", r, a, i);
              let s = {
                msDuration: i,
                timing: this.props.scrollTiming,
                onComplete: () => this.OnAnimationScrollComplete(e, t, r, a),
              };
              this.m_scrollAnimation && this.m_scrollAnimation.End(),
                (this.m_scrollAnimation = new O.c(n, { scrollLeft: a }, s)),
                this.m_scrollAnimation.Start();
            } else
              n.scrollToPosition({ scrollLeft: a, scrollTop: 0 }),
                this.OnAnimationScrollComplete(e, t, r, a);
        }
        RestoreScrollPosition(e) {
          this.StartScrollAnimation(
            E.a.INVALID,
            0,
            "RestoreScrollPosition",
            e,
            0
          );
        }
        SendScrollNotification(e) {
          this.m_timeout && window.clearTimeout(this.m_timeout);
          const t = this.props.fnOnScroll;
          this.m_timeout = window.setTimeout(() => {
            t && t(e), (this.m_timeout = void 0);
          }, 250);
        }
        OnAnimationScrollComplete(e, t, r, a) {
          g.unstable_batchedUpdates(() => {
            N("OnAnimationScrollComplete", r, a),
              this.SendScrollNotification(a);
            const i = this.m_mapRefs.get(r);
            i &&
              i.current &&
              (N("Sending focus to", r), i.current.TakeFocus(e)),
              this.props.setFocusedColumn(t),
              (this.m_scrollAnimation = null),
              (this.m_activeScrollTo = null);
          });
        }
        OnTouchStart(e) {
          1 == e.touches.length &&
            (this.m_nTouchStartClientX = e.touches[0].clientX);
        }
        OnTouchMove(e) {
          if (!this.m_refGrid || 0 == e.touches.length) return;
          const t = this.m_nTouchStartClientX - e.touches[0].clientX;
          this.BlockMovementLeftPastFirstElement(e, t);
        }
        BlockMovementLeftPastFirstElement(e, t) {
          const r = this.m_refGrid.getOffsetForCell({
            alignment: this.props.scrollToAlignment,
            columnIndex: this.props.nIndexLeftmost,
          });
          this.m_refGridElement.scrollLeft - r.scrollLeft + t < 0 &&
            e.cancelable &&
            (console.warn("Blocking touch scroll out of bounds"),
            e.cancelable && e.preventDefault());
        }
        SnapBackToFirstElement(e) {
          console.warn("Carousel out of bounds, scrolling back to", e),
            this.RestoreScrollPosition(e);
        }
        OnScroll(e) {
          var t;
          const r =
            null === (t = this.m_refGrid) || void 0 === t
              ? void 0
              : t.getOffsetForCell({
                  alignment: this.props.scrollToAlignment,
                  columnIndex: this.props.nIndexLeftmost,
                });
          this.SendScrollNotification(e.scrollLeft),
            e.scrollLeft < Math.floor(null == r ? void 0 : r.scrollLeft) &&
              this.SnapBackToFirstElement(r.scrollLeft),
            this.UpdateScrollArrows();
        }
        GetCellColumnWidth(e) {
          let { fnGetColumnWidth: t } = this.props,
            r = t(e.index) + this.props.nItemMarginX;
          return (
            e.index == this.props.nNumItems - 1 &&
              (r += this.state.nRightPadding),
            r
          );
        }
        OnItemFocused(e) {
          this.ScrollToItem(
            E.a.INVALID,
            e,
            this.props.scrollToAlignment || "auto",
            void 0,
            0
          );
        }
        CellRenderer(e) {
          const {
              fnGetColumnWidth: t,
              fnGetId: r,
              fnItemRenderer: a,
              nItemHeight: i,
              autoFocus: s,
            } = this.props,
            { key: o, columnIndex: c, style: d } = e,
            m = t(c),
            u = parseInt(d.left.toString()),
            p = r(c),
            _ = !this.m_mapRefs.has(p),
            h = this.m_mapRefs.get(p) || Object(B.a)();
          return (
            this.m_mapRefs.set(p, h),
            n.createElement(
              l.a,
              {
                key: o,
                navKey: o,
                navRef: h,
                focusable: !1,
                onGamepadDirection: this.OnGamepadDirection,
                autoFocus: s && c == this.props.focusedColumn && _,
                "data-id": p,
                onFocus: () => this.OnItemFocused(c),
                style: d,
              },
              a(c, m, i, u)
            )
          );
        }
        OnSectionRendered(e) {
          (this.m_iStart = e.columnStartIndex),
            (this.m_iEnd = e.columnStopIndex),
            N("Section rendered", this.m_iStart, this.m_iEnd),
            this.UpdateScrollArrows();
        }
        get alignment() {
          return this.props.scrollToAlignment || "start";
        }
        GetLastFocusableColumn() {
          let e = this.props.nNumItems - 1;
          if (this.props.fnDoesItemTakeFocus)
            for (
              ;
              !this.props.fnDoesItemTakeFocus(e) &&
              e > this.props.nIndexLeftmost;

            )
              e--;
          return N("LastFocusableColumn: ", e), e;
        }
        UpdateScrollArrows() {
          var e, t, r;
          if (this.props.fnUpdateArrows) {
            const a =
                null === (e = this.m_refGrid) || void 0 === e
                  ? void 0
                  : e.getOffsetForCell({
                      alignment: this.props.scrollToAlignment,
                      columnIndex: this.props.nIndexLeftmost,
                    }),
              i =
                null === (t = this.m_refGrid) || void 0 === t
                  ? void 0
                  : t.getOffsetForCell({
                      alignment: this.props.scrollToAlignment,
                      columnIndex: this.GetLastFocusableColumn(),
                    }),
              n = Math.round(
                null === (r = this.m_refGridElement) || void 0 === r
                  ? void 0
                  : r.scrollLeft
              ),
              s =
                n != Math.floor(null == a ? void 0 : a.scrollLeft) &&
                n != Math.round(null == a ? void 0 : a.scrollLeft),
              o =
                n != Math.floor(null == i ? void 0 : i.scrollLeft) &&
                n != Math.round(null == i ? void 0 : i.scrollLeft);
            N(
              "ShowLeftArrow: ",
              s,
              a,
              " ShowRightArrow: ",
              o,
              i,
              " ScrollPos: ",
              n
            ),
              this.props.fnUpdateArrows(s, o);
          }
        }
        BindGridObject(e) {
          if (
            (this.m_refGridElement &&
              (this.m_refGridElement.removeEventListener(
                "touchstart",
                this.OnTouchStart
              ),
              this.m_refGridElement.removeEventListener(
                "touchmove",
                this.OnTouchMove
              )),
            (this.m_refGrid = e),
            (this.m_refGridElement = void 0),
            this.m_refGrid)
          ) {
            const e = g.findDOMNode(this.m_refGrid);
            (this.m_refGridElement = e),
              null == e || e.addEventListener("touchstart", this.OnTouchStart),
              null == e ||
                e.addEventListener("touchmove", this.OnTouchMove, {
                  passive: !1,
                });
            const t = window.getComputedStyle(e),
              r = parseInt(t.getPropertyValue("padding-right")) || 0,
              a = parseInt(t.getPropertyValue("scroll-padding-right")) || 0,
              i = Math.max(r, a);
            i != this.state.nRightPadding &&
              (N("Computed", i, "additional right padding"),
              this.setState({ nRightPadding: i }, () => {
                this.m_refGrid.recomputeGridSize({
                  columnIndex: this.props.nNumItems - 1,
                });
              }));
          }
        }
        componentDidMount() {
          this.m_refContainer.current &&
            (this.m_resizeObserver.observe(this.m_refContainer.current),
            N(
              "componentDidMount Setting width to",
              this.m_refContainer.current.clientWidth
            ),
            this.setState({
              nContainerWidth: this.m_refContainer.current.clientWidth,
            }));
        }
        componentDidUpdate(e) {
          this.props.fnGetColumnWidth != e.fnGetColumnWidth &&
            (N("Column width function changes, recalculating sizes"),
            this.m_refGrid.recomputeGridSize());
        }
        componentWillUnmount() {
          this.m_resizeObserver.disconnect();
        }
        OnResize() {
          const e = this.m_refContainer.current.clientWidth;
          e != this.state.nContainerWidth &&
            (N(
              "OnResize Setting width to",
              this.m_refContainer.current.clientWidth
            ),
            this.setState({ nContainerWidth: e })),
            this.UpdateScrollArrows();
        }
        ScrollLeft(e) {
          const t = this.m_iEnd - this.m_iStart,
            r = Object(w.a)(
              this.props.focusedColumn - t,
              this.props.nIndexLeftmost,
              this.props.nNumItems - 1
            ),
            a = this.alignment;
          return this.ScrollToItem(E.a.INVALID, r, a, e);
        }
        ScrollRight(e) {
          const t = this.m_iEnd - this.m_iStart,
            r = Object(w.a)(
              this.props.focusedColumn + t,
              this.props.nIndexLeftmost,
              this.props.nNumItems - 1
            ),
            a = this.alignment;
          return this.ScrollToItem(E.a.INVALID, r, a, e);
        }
        ScrollToFirstChild() {
          return this.ScrollToItem(
            E.a.INVALID,
            this.props.nIndexLeftmost,
            "auto"
          );
        }
        MoveLeft(e) {
          N("MoveLeft from", this.props.focusedColumn);
          let t = this.props.focusedColumn - 1;
          for (
            ;
            t != this.props.nIndexLeftmost - 1 &&
            this.props.fnDoesItemTakeFocus &&
            !this.props.fnDoesItemTakeFocus(t);

          )
            t--;
          return t == this.props.nIndexLeftmost - 1
            ? (N("At left edge, not handling left gamepad"), !1)
            : (N("MoveLeft to", t),
              this.ScrollToItem(
                e ? e.detail.button : E.a.INVALID,
                t,
                this.props.scrollToAlignment || "auto",
                e
              ));
        }
        MoveRight(e) {
          N("MoveRight from", this.props.focusedColumn);
          let t = this.props.focusedColumn + 1;
          for (
            ;
            t != this.props.nNumItems &&
            this.props.fnDoesItemTakeFocus &&
            !this.props.fnDoesItemTakeFocus(t);

          )
            t++;
          return t == this.props.nNumItems
            ? (N("At right edge, not handling right gamepad"), !1)
            : (N("MoveRight to", t),
              this.ScrollToItem(
                e ? e.detail.button : E.a.INVALID,
                t,
                this.props.scrollToAlignment || "auto",
                e
              ));
        }
        ScrollToItem(e, t, r, a, i) {
          if (
            this.m_activeScrollTo &&
            this.m_activeScrollTo.alignment === r &&
            this.m_activeScrollTo.iNewFocus === t
          )
            return !0;
          if (
            (N("ScrollToItem", t, r, a, i),
            t != this.props.focusedColumn &&
              this.m_refGrid &&
              (!this.props.fnDoesItemTakeFocus ||
                this.props.fnDoesItemTakeFocus(t)))
          ) {
            const n = this.m_refGrid.getOffsetForCell({
                alignment: r,
                columnIndex: t,
                rowIndex: 0,
              }),
              s = this.props.fnGetId(t);
            return (
              N("Scrolling to item", t, s, r, n.scrollLeft, i),
              (this.m_activeScrollTo = { iNewFocus: t, alignment: r }),
              this.props.fnOnFocusedColumnChange &&
                this.props.fnOnFocusedColumnChange(this.props.focusedColumn, t),
              this.StartScrollAnimation(
                e,
                t,
                s,
                n.scrollLeft,
                null != i ? i : this.props.scrollDuration
              ),
              null == a || a.stopPropagation(),
              null == a || a.preventDefault(),
              !0
            );
          }
          return !1;
        }
        OnGamepadButtonDown(e) {
          switch ((N("OnGamepadButtonDown", e.detail), e.detail.button)) {
            case E.a.BUMPER_LEFT:
              return !!this.props.enableBumperPaging && this.ScrollLeft(e);
            case E.a.BUMPER_RIGHT:
              return !!this.props.enableBumperPaging && this.ScrollRight(e);
          }
          return !1;
        }
        OnGamepadDirection(e) {
          switch ((N("OnGamepadDirection", e.detail), e.detail.button)) {
            case E.a.DIR_LEFT:
              return this.MoveLeft(e);
            case E.a.DIR_RIGHT:
              return this.MoveRight(e);
          }
          return !1;
        }
        render() {
          const {
              className: e,
              nNumItems: t,
              nIndexLeftmost: r,
              nHeight: a,
              nItemHeight: i,
              overscan: s = 3,
              scrollToAlignment: o,
              focusedColumn: c,
            } = this.props,
            d = this.state.nContainerWidth;
          return (
            N("Inner render", this.props.name, this.props.nNumItems, d, r, c),
            n.createElement(
              l.a,
              {
                ref: this.m_refContainer,
                "flow-children": "row",
                onButtonDown: this.OnGamepadButtonDown,
                focusable: !1,
              },
              d &&
                n.createElement(C.a, {
                  ref: this.BindGridObject,
                  className: e,
                  cellRenderer: this.CellRenderer,
                  onScroll: this.OnScroll,
                  onSectionRendered: this.OnSectionRendered,
                  columnCount: t,
                  columnWidth: this.GetCellColumnWidth,
                  overscanColumnCount: s,
                  overscanIndicesGetter: ({
                    cellCount: e,
                    overscanCellsCount: t,
                    startIndex: r,
                    stopIndex: a,
                  }) => ({
                    overscanStartIndex: Math.max(0, r - t),
                    overscanStopIndex: Math.min(e - 1, a + t),
                  }),
                  rowCount: 1,
                  rowHeight: i,
                  height: a,
                  width: d,
                  containerStyle: { overflow: "visible" },
                  scrollToAlignment: this.alignment,
                  scrollToColumn: c,
                  tabIndex: null,
                  autoHeight: !D.d.IN_GAMEPADUI,
                })
            )
          );
        }
      }
      (T.defaultProps = {
        nIndexLeftmost: 0,
        scrollDuration: 100,
        scrollTiming: "sine",
        enableBumperPaging: !1,
        initialColumn: 0,
        bPlaySoundOnFailedScroll: !0,
      }),
        Object(a.b)([S.b], T.prototype, "RestoreScrollPosition", null),
        Object(a.b)([S.b], T.prototype, "OnAnimationScrollComplete", null),
        Object(a.b)([S.b], T.prototype, "OnTouchStart", null),
        Object(a.b)([S.b], T.prototype, "OnTouchMove", null),
        Object(a.b)(
          [S.b, Object(I.a)(250)],
          T.prototype,
          "SnapBackToFirstElement",
          null
        ),
        Object(a.b)([S.b], T.prototype, "OnScroll", null),
        Object(a.b)([S.b], T.prototype, "GetCellColumnWidth", null),
        Object(a.b)([S.b], T.prototype, "OnItemFocused", null),
        Object(a.b)([S.b], T.prototype, "CellRenderer", null),
        Object(a.b)([S.b], T.prototype, "OnSectionRendered", null),
        Object(a.b)(
          [S.b, Object(I.a)(250)],
          T.prototype,
          "UpdateScrollArrows",
          null
        ),
        Object(a.b)([S.b], T.prototype, "BindGridObject", null),
        Object(a.b)([S.b], T.prototype, "OnResize", null),
        Object(a.b)([S.b], T.prototype, "ScrollLeft", null),
        Object(a.b)([S.b], T.prototype, "ScrollRight", null),
        Object(a.b)([S.b], T.prototype, "ScrollToFirstChild", null),
        Object(a.b)([S.b], T.prototype, "MoveLeft", null),
        Object(a.b)([S.b], T.prototype, "MoveRight", null),
        Object(a.b)([S.b], T.prototype, "OnGamepadButtonDown", null),
        Object(a.b)([S.b], T.prototype, "OnGamepadDirection", null);
      var j = r("thkD"),
        L = r("e356"),
        P = r("pC2t"),
        F = r("SS8s"),
        z = r("kWcV"),
        k = r("GXif");
      function M(e) {
        const { storeitem: t, fnNavigateToStore: r, snr: a } = e;
        n.useEffect(() => {
          u.a.Get().HintLoad();
        }, []);
        const s = Object(i.d)(() => u.a.Get().BIsGameWishlisted(t.GetAppID())),
          o = Object(i.d)(() => u.a.Get().BIsGameIgnored(t.GetAppID())),
          l = Object(i.d)(
            () => u.a.Get().BIsAjaxInFlight() || !u.a.Get().BIsLoaded()
          );
        let c = [
          n.createElement(
            F.d,
            {
              key: "wishlist",
              onSelected: () =>
                u.a.Get().UpdateGameWishlist(t.GetAppID(), !s, a),
            },
            s
              ? Object(k.g)(
                  "#LibraryHome_GameCarousel_ContextMenu_RemoveWishlist"
                )
              : Object(k.g)("#LibraryHome_GameCarousel_ContextMenu_AddWishlist")
          ),
          n.createElement(
            F.d,
            {
              key: "ignore",
              onSelected: () => u.a.Get().UpdateAppIgnore(t.GetAppID(), !o),
            },
            o
              ? Object(k.g)("#LibraryHome_GameCarousel_ContextMenu_UnIgnore")
              : Object(k.g)("#LibraryHome_GameCarousel_ContextMenu_Ignore")
          ),
        ];
        return n.createElement(
          F.c,
          { label: t.GetName() },
          n.createElement(
            F.d,
            { onSelected: r },
            Object(k.g)("#LibraryHome_GameCarousel_ContextMenu_StorePage")
          ),
          l && n.createElement(z.a, { position: "center", size: "medium" }),
          !l && c
        );
      }
      var W = r("GbHM"),
        Q = r("t1oW"),
        U = r("UIKn"),
        q = r("V9K+"),
        x = r("UvP0"),
        H = r("kMdN"),
        V = r("cbet"),
        K = r.n(V),
        X = r("oleE"),
        Y = r("2vnA"),
        Z = r("TyAF"),
        $ = r("vDqi"),
        J = r.n($),
        ee = (r("msu0"), r("6I/y")),
        te = r("FA79"),
        re = r("oTf3"),
        ae = r("qvOX"),
        ie = r.n(ae);
      const ne = r("Nt3m").e.PerMinute;
      class se {
        constructor(e) {
          (this.m_bLoadingData = !1),
            (this.m_rtLastLoad = 0),
            (this.m_accountid = e);
        }
        get community_data() {
          return this.m_communityData;
        }
        get community_data_ready() {
          return void 0 !== this.m_communityData;
        }
        get player_level() {
          return this.m_communityData && this.m_communityData.level;
        }
        get player_level_class() {
          return this.m_communityData && this.m_communityData.level_class;
        }
        get player_badge() {
          return this.m_communityData && this.m_communityData.favorite_badge;
        }
        get profile_background() {
          return (
            this.m_communityData && this.m_communityData.profile_background
          );
        }
        Reload() {
          (this.m_rtLastLoad = 0), this.EnsureCommunityDataLoaded();
        }
        EnsureCommunityDataLoaded() {
          const e = this.m_communityData || this.m_bLoadingData,
            t = Date.now() > this.m_rtLastLoad + 1e3 * ne;
          (!e || (t && !this.m_bLoadingData)) &&
            ((this.m_bLoadingData = !0),
            J.a
              .get(
                D.d.CHAT_BASE_URL +
                  "miniprofile/" +
                  this.m_accountid +
                  "/json/?origin=" +
                  Object(D.f)()
              )
              .then((e) => {
                let t = e.data;
                "number" == typeof t.level &&
                  "string" == typeof t.level_class &&
                  (this.m_communityData = t),
                  (this.m_bLoadingData = !1),
                  (this.m_rtLastLoad = Date.now());
              })
              .catch((e) => {
                this.m_bLoadingData = !1;
              }));
        }
      }
      Object(a.b)([Y.C], se.prototype, "m_communityData", void 0);
      let oe = class extends n.Component {
        render() {
          const { community_data: e } = this.props;
          let t = e && e.favorite_badge;
          return t
            ? n.createElement(
                "div",
                {
                  className: Object(W.a)(
                    ie.a.miniProfileFeaturedContainer,
                    this.props.className
                  ),
                },
                n.createElement(
                  "div",
                  { className: ie.a.favoriteBadgeIcon },
                  n.createElement("img", {
                    src: t.icon,
                    className: ie.a.badgeIcon,
                  })
                ),
                n.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      ie.a.featuredLabels,
                      ie.a.favoriteBadgeDescription
                    ),
                  },
                  n.createElement(
                    "div",
                    { className: ie.a.featuredTitle },
                    t.name
                  ),
                  n.createElement(
                    "div",
                    { className: ie.a.featuredSubTitle },
                    Object(k.g)("#Hover_BadgeXP", t.xp)
                  )
                )
              )
            : null;
        }
      };
      oe = Object(a.b)([Z.a], oe);
      let le = class extends n.Component {
        render() {
          const { community_data: e, className: t } = this.props;
          return e
            ? n.createElement(
                "div",
                {
                  className: Object(W.a)(ie.a.miniProfileFeaturedContainer, t),
                },
                n.createElement(
                  "div",
                  { className: e.level_class },
                  n.createElement(
                    "span",
                    { className: ie.a.friendPlayerLevelNum },
                    e.level
                  )
                ),
                n.createElement(
                  "div",
                  { className: ie.a.featuredLabels },
                  n.createElement(
                    "div",
                    { className: ie.a.featuredTitle },
                    Object(k.g)("#Hover_SteamLevel") + " "
                  )
                )
              )
            : null;
        }
      };
      le = Object(a.b)([Z.a], le);
      let ce = class extends n.Component {
        render() {
          let e = this.props.persona;
          return n.createElement(
            "div",
            {
              className: Object(W.a)(
                ie.a.miniProfileGameContainer,
                this.props.className
              ),
            },
            this.props.persona.GetCurrentGameLogoURL() &&
              n.createElement("img", {
                className: ie.a.gameLogo,
                src: this.props.persona.GetCurrentGameLogoURL(),
              }),
            n.createElement(
              "div",
              {
                className: Object(W.a)(
                  ie.a.gameContent,
                  ie.a.persona,
                  ie.a.ingame,
                  ie.a.ellipsis
                ),
              },
              n.createElement(
                "div",
                { className: ie.a.gameState },
                Object(k.g)(
                  e.is_in_nonsteam_game
                    ? "#PersonaStateInNonSteamGame"
                    : "#PersonaStateInGame"
                )
              ),
              this.props.persona.GetCurrentGameName(),
              this.props.persona.HasCurrentGameRichPresence() &&
                n.createElement(
                  "div",
                  { className: ie.a.richPresence },
                  this.props.persona.GetCurrentGameRichPresence()
                ),
              this.props.in_game_section_additional
            )
          );
        }
      };
      ce = Object(a.b)([Z.a], ce);
      let de = class extends n.Component {
        render() {
          let e,
            t,
            r = this.props.broadcast_description;
          return (
            r && ((e = Object(k.g)("#PersonaStateWatchingBroadcast")), (t = r)),
            n.createElement(
              "div",
              {
                className: Object(W.a)(
                  ie.a.miniProfileGameContainer,
                  this.props.className
                ),
              },
              this.props.persona.GetBroadcastGameLogoURL() &&
                n.createElement("img", {
                  className: ie.a.gameLogo,
                  src: this.props.persona.GetBroadcastGameLogoURL(),
                }),
              n.createElement(
                "div",
                {
                  className: Object(W.a)(
                    ie.a.gameContent,
                    ie.a.persona,
                    ie.a.watchingbroadcast,
                    ie.a.ellipsis
                  ),
                },
                n.createElement("div", { className: ie.a.gameState }, e),
                t &&
                  n.createElement("div", { className: ie.a.richPresence }, t),
                n.createElement(
                  "div",
                  { className: ie.a.watchingbroadcastThumbnail },
                  this.props.broadcast_thumbnail
                )
              )
            )
          );
        }
      };
      de = Object(a.b)([Z.a], de);
      let me = class extends n.Component {
        render() {
          const e = this.props,
            {
              className: t,
              persona: r,
              data_loader: i,
              community_data_override: s,
              nickname: o,
              is_friend: l,
              is_blocked: c,
              friend_relationship: d,
              broadcast_description: m,
              broadcast_thumbnail: u,
              mutual_friends: p,
              in_game_section_additional: _,
              bottom_section_additional: h,
            } = e,
            b = Object(a.c)(e, [
              "className",
              "persona",
              "data_loader",
              "community_data_override",
              "nickname",
              "is_friend",
              "is_blocked",
              "friend_relationship",
              "broadcast_description",
              "broadcast_thumbnail",
              "mutual_friends",
              "in_game_section_additional",
              "bottom_section_additional",
            ]);
          let v = i.community_data;
          s && (v = Object.assign(Object.assign({}, v), s));
          const f = Object.keys((v && v.profile_background) || {}).length > 0;
          let y,
            g = ie.a.miniProfileContent;
          r.is_ingame
            ? (y = n.createElement(
                ce,
                Object.assign({}, this.props, {
                  className: f ? ie.a.miniProfileBackdropBlur : void 0,
                })
              ))
            : r.is_watchingbroadcast
            ? (y = n.createElement(
                de,
                Object.assign({}, this.props, {
                  className: f ? ie.a.miniProfileBackdropBlur : void 0,
                })
              ))
            : (g += " " + ie.a.notInOrWatchingGame);
          let S = !0,
            w = !1,
            I = !1;
          l || ((g += " " + ie.a.notFriends), (S = !1)),
            c && ((g += " " + ie.a.communicationBlocked), (I = !0));
          let C,
            E = void 0 !== o,
            O = r.is_awayOrSnooze;
          return (
            (C = E
              ? n.createElement(
                  "div",
                  null,
                  n.createElement(
                    "div",
                    { className: ie.a.personaAndIcons },
                    n.createElement(
                      "div",
                      {
                        className: Object(W.a)(ie.a.personaName, ie.a.nickName),
                      },
                      n.createElement(
                        "div",
                        { className: ie.a.personaNameLabel },
                        this.props.nickname
                      ),
                      n.createElement(
                        "div",
                        {
                          className: ie.a.playerNicknameBracket,
                          title: Object(k.g)("#isNickname"),
                        },
                        "*"
                      )
                    ),
                    n.createElement(re.a, { persona: r })
                  ),
                  n.createElement(
                    "div",
                    {
                      className: Object(W.a)(
                        ie.a.personaName,
                        ie.a.hasNickname
                      ),
                    },
                    "(",
                    n.createElement(
                      "div",
                      { className: ie.a.personaNameLabel },
                      r.m_strPlayerName
                    ),
                    ")"
                  )
                )
              : n.createElement(
                  "div",
                  { className: ie.a.personaAndIcons },
                  n.createElement(
                    "div",
                    { className: ie.a.personaName },
                    n.createElement(
                      "div",
                      { className: ie.a.personaNameLabel },
                      r.m_strPlayerName
                    )
                  ),
                  n.createElement(re.a, { persona: r })
                )),
            2 == this.props.friend_relationship && (w = !0),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(
                "div",
                Object.assign(
                  {
                    key: r.GetAccountID(),
                    className: Object(W.a)(
                      this.props.className,
                      ie.a.miniProfile
                    ),
                  },
                  b
                ),
                n.createElement(
                  "div",
                  { className: g },
                  n.createElement(ue, { community_data: v, persona: r }),
                  n.createElement(
                    "div",
                    { className: ie.a.miniProfileHeader },
                    n.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          ie.a.miniProfilePlayer,
                          r.online_state,
                          O && ie.a.isAway,
                          Object(H.b)(r)
                        ),
                      },
                      n.createElement(pe, {
                        persona: this.props.persona,
                        community_data: v,
                      }),
                      O &&
                        n.createElement(ee.a, {
                          persona: r,
                          animating: !0,
                          className: ie.a.SnoozeContainer,
                          size: "large",
                        }),
                      n.createElement(
                        "div",
                        { className: ie.a.playerContent },
                        n.createElement(
                          "div",
                          { className: ie.a.playerName },
                          n.createElement(
                            "div",
                            { className: ie.a.persona },
                            C,
                            O &&
                              n.createElement(
                                "div",
                                { className: ie.a.awayStatusLabel },
                                Object(k.g)("#PersonaStateAway")
                              ),
                            !r.is_online &&
                              n.createElement(
                                "div",
                                { className: ie.a.awayStatusLabel },
                                this.props.persona.GetLocalizedOnlineStatus()
                              ),
                            "online" == r.online_state &&
                              !O &&
                              n.createElement(
                                "div",
                                { className: ie.a.awayStatusLabel },
                                Object(k.g)("#PersonaStateOnline")
                              ),
                            !S &&
                              n.createElement(
                                "div",
                                { className: ie.a.miniProfileNotFriends },
                                w
                                  ? Object(k.g)(
                                      "#Friend_Menu_NotAFriendRequesting"
                                    )
                                  : Object(k.g)("#Friend_Menu_NotAFriendLabel")
                              ),
                            I &&
                              n.createElement(
                                "div",
                                { className: ie.a.miniProfileBlocked },
                                Object(k.g)("#PersonaStateBlocked")
                              )
                          )
                        )
                      )
                    )
                  ),
                  y,
                  n.createElement(
                    "div",
                    {
                      className: Object(W.a)(
                        ie.a.miniProfileBottom,
                        f && ie.a.miniProfileBackdropBlur
                      ),
                    },
                    n.createElement(oe, { community_data: v }),
                    n.createElement(le, { community_data: v })
                  ),
                  h,
                  n.createElement(
                    "div",
                    { className: ie.a.mutualFriends },
                    this.props.mutual_friends
                  )
                )
              )
            )
          );
        }
      };
      me = Object(a.b)([Z.a], me);
      const ue = ({ community_data: e, persona: t }) => {
          if (e && e.profile_background) {
            const t = e.profile_background,
              { image: r } = t,
              i = Object(a.c)(t, ["image"]);
            if (Object.keys(i).length)
              return n.createElement(
                "div",
                {
                  className: ie.a.miniProfileVideoBackgroundContainer,
                  key: i["video/webm"] || i["video/mp4"] || "image",
                },
                n.createElement(
                  "video",
                  {
                    className: ie.a.miniProfileVideoBackground,
                    playsInline: !0,
                    muted: !0,
                    autoPlay: !0,
                    loop: !0,
                    poster: r,
                  },
                  Object.keys(i).map((e) =>
                    n.createElement("source", { key: e, src: i[e], type: e })
                  )
                )
              );
            if (r)
              return n.createElement(
                "div",
                { className: ie.a.miniProfileVideoBackgroundContainer },
                n.createElement("img", {
                  className: ie.a.miniProfileVideoBackground,
                  src: r,
                })
              );
          }
          return n.createElement(
            "div",
            { className: ie.a.miniProfileBackground },
            n.createElement("img", {
              className: ie.a.miniProfileBackgroundBlur,
              src: t.avatar_url,
            })
          );
        },
        pe = (e) => {
          const { persona: t, community_data: r, size: i } = e,
            s = Object(a.c)(e, ["persona", "community_data", "size"]),
            o =
              r &&
              r.avatar_frame &&
              n.createElement("img", {
                src: r.avatar_frame,
                className: ie.a.Frame,
              }),
            l = r && r.animated_avatar,
            c = {
              size: i || "X-Large",
              statusPosition: "bottom",
              className: ie.a.playerAvatar,
            };
          return l
            ? n.createElement(
                te.a,
                Object.assign({}, s, { strAvatarURL: l }, c),
                o
              )
            : n.createElement(te.d, Object.assign({ persona: t }, s, c), o);
        };
      var _e = r("1ZD8"),
        he = r("2KLf"),
        be = r("0JCO");
      const ve = new G.a("DiscoveryQueueWizard").Debug,
        fe = "discoveryqueue2022",
        ye = {
          include_assets: !0,
          include_trailers: !0,
          include_basic_info: !0,
          include_tag_count: 20,
          include_release: !0,
        };
      function ge(e, t, r, i) {
        return Object(a.a)(this, void 0, void 0, function* () {
          let a = [];
          try {
            (a = yield Q.a.Get().GetDiscoveryQueueAppsOfType(e, t, r)),
              i && -1 === a.findIndex((e) => e === i) && a.unshift(i),
              yield p.a.Get().QueueMultipleAppRequests(a, ye),
              yield Object(v.h)(a);
          } catch (e) {
            ve("Failed getting discovery queue apps", e);
          }
          return a;
        });
      }
      const Se = (e) => {
        const {
            eStoreDiscoveryQueueType: t,
            strUserCountry: r,
            bWizardVisible: i,
            fnCloseModal: s,
            fnGetFriendState: c,
            includeAppID: m,
          } = e,
          [p, _] = n.useState([]),
          [h, b] = n.useState(1),
          [v, f] = n.useState(800),
          [y, g] = n.useState("DiscoveryQueue"),
          [w, I] = n.useState(!0),
          [C, E] = n.useState(!1),
          [O, B] = n.useState(!1),
          G = n.useRef(),
          A = n.useMemo(
            () => Math.max((window.innerWidth / 100) * 2.8 + 40, 12),
            [12, v]
          ),
          N = n.useCallback(
            (e) => {
              const t = Math.min(
                1400,
                window.innerWidth / 1.3 - 2 * A - 24 + 120
              );
              f(t);
            },
            [v, A]
          ),
          T = Object(S.j)(N),
          P = n.useMemo(() => (window.innerWidth - v - 2 * A) / 2, [v, A]),
          F = n.useMemo(() => (9 / 16) * (v - 0.3 * v), [v]),
          z = n.useCallback(
            (e) =>
              Object(a.a)(void 0, void 0, void 0, function* () {
                let a = yield ge(t, r, !e, e && m);
                e && !a.length && (a = yield ge(t, r, !0));
                let i = p;
                if (e) a.unshift(1);
                else {
                  const e = i.lastIndexOf(1);
                  -1 !== e && i.splice(e, 1);
                }
                a.push(0),
                  a.push(1),
                  (i = i.concat(a)),
                  _(i),
                  e || G.current.MoveRight(),
                  ve("Loaded new discovery queue apps: ", a);
              }),
            [t, p, r, G, m]
          );
        n.useEffect(() => {
          z(!0).then(() => B(!0)),
            u.a.Get().HintLoad(),
            g(
              (() => {
                const e = Math.floor(1e6 * Math.random());
                return `DiscoveryQueue_${D.l.accountid}_${e}`;
              })()
            ),
            N();
        }, [t, r]);
        const M = n.useCallback(
            (e) =>
              0 == p[e]
                ? "Summary" + e
                : 1 == p[e]
                ? "Placeholder" + e
                : p[e].toString(),
            [p]
          ),
          U = n.useCallback((e) => v, [v]),
          q = n.useCallback(
            (e) => {
              ve("Currently focused index: ", e);
            },
            [t, p]
          ),
          x = n.useCallback(
            (e, r, a, i) =>
              0 == p[e]
                ? n.createElement(Ae, {
                    key: M(e),
                    focused: h === e,
                    fnLoadNextQueue: z,
                    fnClose: s,
                    index: e,
                    eStoreDiscoveryQueueType: t,
                    nItemHeight: a,
                    nItemWidth: r,
                  })
                : 1 == p[e]
                ? n.createElement(l.a, {
                    style: { width: r, height: F },
                    className: Object(W.a)(K.a.DiscoveryQueuePlaceholder),
                  })
                : n.createElement(we, {
                    eStoreDiscoveryQueueType: t,
                    focused: h === e,
                    fnGetFriendState: c,
                    index: e,
                    fnOnAppFocus: q,
                    nItemHeight: F,
                    nItemWidth: r,
                    appID: p[e],
                  }),
            [t, q, p, h, F, s, z]
          ),
          H = n.useCallback((e, t) => {
            D.d.IN_GAMEPADUI || (E(e), I(t));
          }, []),
          V = n.useCallback((e) => 1 !== p[e], [p]),
          X = n.useCallback(
            (e, r) => {
              ve("New Focused Column: ", r, " Prev Focused Column: ", e),
                1 !== p[e] &&
                  0 !== p[e] &&
                  Q.a.Get().SkipDiscoveryQueueItem(p[e], t),
                b(r);
            },
            [h, p]
          );
        return O
          ? n.createElement(
              j.l,
              { active: i },
              n.createElement(
                o.a,
                null,
                n.createElement(
                  be.a,
                  { snr: fe },
                  n.createElement(
                    l.a,
                    {
                      className: K.a.DiscoveryQueueCarouselCtn,
                      navEntryPreferPosition: d.d.LAST,
                      onCancelButton: s,
                      onCancelActionDescription: Object(k.g)("#Button_Close"),
                    },
                    n.createElement(
                      l.a,
                      { className: K.a.TopBarCtn },
                      n.createElement(
                        "div",
                        { className: K.a.LearnMore },
                        Object(k.m)(
                          "#DiscoveryQueue_LearnMore_Default",
                          n.createElement(l.a, {
                            className: K.a.LearnMoreLink,
                            focusable: !0,
                            onActivate: () =>
                              Ge(D.d.STORE_BASE_URL + "explore"),
                            onClick: () => Ge(D.d.STORE_BASE_URL + "explore"),
                          })
                        )
                      ),
                      n.createElement(
                        "div",
                        { className: K.a.ControlsCtn },
                        !1,
                        n.createElement(
                          l.a,
                          {
                            focusable: !0,
                            className: K.a.QueueButton,
                            onClick: s,
                            onActivate: s,
                          },
                          n.createElement(L.Fb, null)
                        )
                      )
                    ),
                    n.createElement(
                      "div",
                      { ref: T, className: K.a.DiscoveryQueueWrapper },
                      n.createElement(
                        l.a,
                        {
                          onClick: (e) => G.current.MoveLeft(e),
                          className: Object(W.a)(
                            K.a.QueueNavArrow,
                            K.a.LeftArrow,
                            C && K.a.Enable
                          ),
                        },
                        n.createElement(L.rb, { angle: 180 })
                      ),
                      n.createElement(R, {
                        name: y,
                        className: K.a.DiscoveryQueueCarousel,
                        ref: G,
                        fnDoesItemTakeFocus: V,
                        fnOnFocusedColumnChange: X,
                        fnUpdateArrows: H,
                        nNumItems: p.length,
                        nHeight: F,
                        scrollDuration: 400,
                        nItemHeight: F,
                        nItemMarginX: P,
                        fnGetColumnWidth: U,
                        fnGetId: M,
                        fnItemRenderer: x,
                        scrollToAlignment: "center",
                        nIndexLeftmost: 1,
                        initialColumn: 1,
                        autoFocus: !0,
                        scrollTiming: "cubic-in-out",
                        overscan: 5,
                      }),
                      n.createElement(
                        l.a,
                        {
                          onClick: (e) => G.current.MoveRight(e),
                          className: Object(W.a)(
                            K.a.QueueNavArrow,
                            K.a.RightArrow,
                            w && K.a.Enable
                          ),
                        },
                        n.createElement(L.rb, { angle: 0 })
                      )
                    )
                  )
                )
              )
            )
          : null;
      };
      function we(e) {
        var t;
        const {
            appID: r,
            nItemHeight: a,
            nItemWidth: o,
            fnOnAppFocus: c,
            index: d,
            focused: m,
            fnGetFriendState: p,
            eStoreDiscoveryQueueType: v,
          } = e,
          [g] = Object(_.b)(r, ye),
          S = Object(i.d)(() => u.a.Get().BIsGameWishlisted(r)),
          w = Object(i.d)(() => u.a.Get().BIsGameIgnored(r)),
          I = Object(h.b)(null == g ? void 0 : g.GetTagIDs()),
          C = n.useRef(),
          E = n.useRef(),
          O = D.d.IN_GAMEPADUI,
          B = () => u.a.Get().UpdateAppIgnore(g.GetAppID(), !w),
          G = Object(be.c)();
        n.useEffect(() => {
          w && A();
        }, [w]);
        const A = n.useCallback(() => {
          var e;
          E.current && (E.current.style.opacity = "1"),
            null === (e = null == C ? void 0 : C.current) ||
              void 0 === e ||
              e.pause();
        }, []);
        n.useEffect(
          () => (ve("Index Focused: ", d, " Focus? ", m), m && N(), () => A()),
          [m]
        );
        const N = n.useCallback(() => {
            C.current &&
              !w &&
              (null == C || C.current.play(), (E.current.style.opacity = "0")),
              he.a.AddImpression(r, fe),
              c(d);
          }, [c, d, w]),
          R = n.useCallback(
            () => Ge(g.GetStorePageURL() + "?inqueue=" + v, G),
            [g]
          );
        if (!g)
          return console.warn("Error: missing store item for appid ", r), null;
        let T = [],
          j = [];
        if (
          (I.forEach((e) => {
            T.length < 5 &&
              (u.a.Get().GetRecommendedTags().has(e.tagid)
                ? T.push(e.name)
                : j.push(e.name));
          }),
          T.length < 5)
        ) {
          const e = j.slice(0, 5 - T.length);
          T.push(...e);
        }
        let L = [];
        T.forEach((e, t) => {
          L.push(
            n.createElement("div", { key: t, className: K.a.TagEntry }, e)
          );
        });
        const F = { width: o || void 0, height: a || void 0 },
          z = () => {
            u.a
              .Get()
              .UpdateGameWishlist(r, !S, fe)
              .then((e) => {
                e && e.success;
              });
          };
        let Q = g.GetMicroTrailer();
        (null === (t = g.GetMicroTrailer()) || void 0 === t
          ? void 0
          : t.strWebMURL) ||
          (g.GetAllTrailers().BHasTrailers() &&
            (Q = g.GetAllTrailers().GetHighlightTrailers()[0].GetTrailerMax()));
        const U = Boolean(window.innerWidth < 1600),
          q = g.GetAssets().GetLibraryCapsuleURL();
        return n.createElement(
          l.a,
          {
            focusable: !0,
            style: F,
            className: Object(W.a)(K.a.DiscoveryQueueApp, m && K.a.Focused),
            onFocus: N,
            onBlur: A,
            onOptionsActionDescription: Object(k.g)(
              "#DiscoveryQueue_AddToWishlist"
            ),
            onOptionsButton: z,
            onOKActionDescription: Object(k.g)("#DiscoveryQueue_ViewStorePage"),
            onOKButton: R,
            onContextMenu: D.d.IN_GAMEPADUI
              ? (e) =>
                  (function (e, t, r, a) {
                    Object(P.a)(
                      n.createElement(M, {
                        snr: a,
                        storeitem: t,
                        fnNavigateToStore: r,
                      }),
                      e
                    ),
                      e.preventDefault(),
                      e.stopPropagation();
                  })(e, g, R, fe)
              : null,
            onMenuActionDescription: Object(k.g)(
              "#ActionButtonLabelContextMenu"
            ),
          },
          n.createElement(
            "div",
            { className: Object(W.a)(K.a.IgnoredCtn, w && K.a.Active) },
            n.createElement(
              "div",
              { className: Object(W.a)(K.a.IgnoredInfo, w && K.a.Active) },
              n.createElement(
                "div",
                { className: K.a.IgnoredTitle },
                Object(k.g)("#DiscoveryQueue_Ignored")
              ),
              n.createElement(
                "div",
                { className: K.a.IgnoredDescription },
                Object(k.g)("#DiscoveryQueue_IgnoredConfirmation")
              ),
              n.createElement(
                l.a,
                {
                  className: Object(W.a)(K.a.QueueButton, K.a.UndoIgnoreButton),
                  onClick: B,
                },
                D.d.IN_GAMEPADUI &&
                  n.createElement(y.a, {
                    button: x.a.X,
                    type: y.c.Light,
                    size: y.b.Medium,
                  }),
                Object(k.g)("#DiscoveryQueue_Undo")
              )
            )
          ),
          n.createElement(
            l.a,
            { className: K.a.AppVideoCtn },
            n.createElement(
              "div",
              { className: Object(W.a)(K.a.WishlistBadge, S && K.a.Active) },
              "On wishlist"
            ),
            n.createElement("img", {
              ref: E,
              style: Q && { position: "absolute" },
              className: K.a.AppMainCap,
              src: g.GetAssets().GetMainCapsuleURL(),
            }),
            Q &&
              n.createElement(
                "video",
                {
                  ref: C,
                  className: K.a.AppVideo,
                  playsInline: !0,
                  muted: !0,
                  loop: !0,
                },
                n.createElement("source", {
                  src: Q.strWebMURL,
                  type: "video/webm",
                }),
                n.createElement("source", {
                  src: Q.strMP4URL,
                  type: "video/mp4",
                })
              )
          ),
          n.createElement(
            l.a,
            { className: K.a.AppDetailsCtn },
            n.createElement(
              "div",
              { className: K.a.AppDetailsCtnTop },
              n.createElement(
                "div",
                { className: K.a.AppDetailsHeader },
                q &&
                  n.createElement("img", {
                    className: K.a.AppLibraryHero,
                    src: q,
                  }),
                n.createElement(
                  "div",
                  { className: K.a.RightColumn },
                  n.createElement(
                    "div",
                    { className: K.a.AppName },
                    g.GetName()
                  ),
                  n.createElement(f.a, {
                    bSingleLineMode: !0,
                    info: { id: e.appID, type: Object(s.a)(g.GetAppType()) },
                  })
                )
              ),
              n.createElement("div", { className: K.a.AppTagsCtn }, L),
              n.createElement(
                "div",
                { className: K.a.AppReviews },
                n.createElement(b.b, {
                  bTruncateTotalReviews: U,
                  appInfo: { id: e.appID, type: Object(s.a)(g.GetAppType()) },
                })
              ),
              n.createElement(
                "div",
                { className: K.a.AppRelevanceCtn },
                n.createElement(Ie, {
                  bLoadAvatars: !U,
                  storeItem: g,
                  appID: r,
                  fnGetFriendState: p,
                })
              )
            ),
            !D.d.IN_GAMEPADUI &&
              n.createElement(
                "div",
                { className: K.a.AppActionButtonsCtn },
                n.createElement(
                  l.a,
                  {
                    className: Object(W.a)(K.a.QueueButton, K.a.Primary),
                    focusable: !0,
                    onClick: R,
                  },
                  O &&
                    n.createElement(y.a, {
                      button: x.a.Y,
                      type: y.c.Light,
                      size: y.b.Medium,
                      additionalClassName: K.a.YGlyph,
                    }),
                  " ",
                  Object(k.g)("#DiscoveryQueue_ViewStorePage")
                ),
                n.createElement(
                  l.a,
                  { className: K.a.QueueButton, focusable: !0, onClick: z },
                  O &&
                    n.createElement(y.a, {
                      button: x.a.Y,
                      type: y.c.Light,
                      size: y.b.Medium,
                      additionalClassName: K.a.YGlyph,
                    }),
                  " ",
                  S
                    ? Object(k.g)("#DiscoveryQueue_RemoveFromWishlist")
                    : Object(k.g)("#DiscoveryQueue_AddToWishlist")
                ),
                n.createElement(
                  l.a,
                  {
                    className: Object(W.a)(K.a.TextLink, K.a.IgnoreLink),
                    onClick: B,
                  },
                  Object(k.g)("#DiscoveryQueue_IgnoreLink")
                )
              )
          )
        );
      }
      function Ie(e) {
        var t, r, a, i, s, o, l, c, d;
        const {
            appID: m,
            fnGetFriendState: u,
            bLoadAvatars: _,
            storeItem: h,
          } = e,
          b = Object(q.b)(m),
          v = Object(q.c)(m),
          f = Object(q.e)(m),
          y = Object(q.d)(),
          g = Object(_e.useQuery)(
            ["SimilarPlayedAppsLoad", m],
            () => {
              var e;
              return p.a
                .Get()
                .QueueMultipleAppRequests(
                  null === (e = f.data.arrSimilarPlayedApps) || void 0 === e
                    ? void 0
                    : e.map((e) => e.appid),
                  { include_basic_info: !0, include_assets: !0 }
                );
            },
            { enabled: f.isSuccess }
          );
        if (!(y && g.isSuccess && f.isSuccess && v.isSuccess && b.isSuccess))
          return n.createElement(z.a, { size: "medium", position: "center" });
        let S = [],
          w = [],
          I = [];
        if (_) {
          let e = [];
          for (
            let r = 0;
            r <
              (null === (t = v.data.accountids_recommended) || void 0 === t
                ? void 0
                : t.length) && r < 6;
            r++
          ) {
            const t = X.a.InitFromAccountID(v.data.accountids_recommended[r]);
            S.push(t.ConvertTo64BitString()), e.push(t.GetAccountID());
          }
          for (
            let t = 0;
            t <
              (null === (r = b.data.in_wishlist) || void 0 === r
                ? void 0
                : r.length) && t < 6;
            t++
          ) {
            const r = new X.a(b.data.in_wishlist[t].steamid);
            w.push(r.ConvertTo64BitString()), e.push(r.GetAccountID());
          }
          for (
            let t = 0;
            t <
              (null === (a = b.data.owns) || void 0 === a
                ? void 0
                : a.length) && t < 6;
            t++
          ) {
            const r = new X.a(b.data.owns[t].steamid);
            I.push(b.data.owns[t].steamid), e.push(r.GetAccountID());
          }
          !u && U.a.BHasWebAPIKey() && U.a.Get().BatchLoadPlayerSummaries(e);
        }
        let C = [];
        f.data.arrSimilarPlayedApps &&
          f.data.arrSimilarPlayedApps.forEach((e) => {
            const t = p.a.Get().GetApp(e.appid);
            t
              ? C.push(
                  n.createElement(Ee, {
                    key: e.appid,
                    lifetimePlaytime: e.playtimeForever,
                    storeItem: t,
                  })
                )
              : console.error("Failed to load store data ", m);
          });
        const E = y.GetItemIDs().findIndex((e) => e.appid === m),
          O = f.data.bRecommendedByIR,
          B = null === (i = b.data.owns) || void 0 === i ? void 0 : i.length,
          G =
            null === (s = b.data.in_wishlist) || void 0 === s
              ? void 0
              : s.length,
          A =
            null === (o = v.data.accountids_recommended) || void 0 === o
              ? void 0
              : o.length;
        let D = 0;
        return (
          B > 0 && D++,
          G > 0 && D++,
          A > 0 && D++,
          O && D++,
          E >= 0 && D++,
          C.length > 0 && D++,
          0 === D
            ? n.createElement(Ce, { storeItem: h })
            : (ve(
                "FriendsOwned: ",
                B,
                " FriendsWishlisted: ",
                G,
                "cRecommended: ",
                A
              ),
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  "div",
                  { className: K.a.RelevantCtn },
                  n.createElement(
                    "div",
                    { className: K.a.WhyRelevant },
                    Object(k.g)("#DiscoveryQueue_WhyRelevant")
                  ),
                  C.length > 0 &&
                    n.createElement(
                      Be,
                      { header: Object(k.g)("#DiscoveryQueue_SimilarGames") },
                      n.createElement(
                        "div",
                        { className: K.a.ReleventSimilarAppsCtn },
                        C
                      )
                    ),
                  E >= 0 &&
                    n.createElement(Be, {
                      header: Object(k.n)(
                        "#DiscoveryQueue_TopSellers",
                        (E + 1).toLocaleString(),
                        n.createElement("span", {
                          className: K.a.RelevantTextBold,
                        })
                      ),
                    }),
                  O &&
                    n.createElement(Be, {
                      header: Object(k.g)("#DiscoveryQueue_RecommendedByIR"),
                    }),
                  n.createElement(Oe, {
                    count:
                      null === (l = b.data.owns) || void 0 === l
                        ? void 0
                        : l.length,
                    locToken: "#DiscoveryQueue_FriendsOwned",
                    arrSteamIDs: I,
                    fnGetFriendState: u,
                  }),
                  n.createElement(Oe, {
                    count:
                      null === (c = b.data.in_wishlist) || void 0 === c
                        ? void 0
                        : c.length,
                    locToken: "#DiscoveryQueue_FriendsWishlisted",
                    arrSteamIDs: w,
                    fnGetFriendState: u,
                  }),
                  n.createElement(Oe, {
                    count:
                      null === (d = v.data.accountids_recommended) ||
                      void 0 === d
                        ? void 0
                        : d.length,
                    locToken: "#DiscoveryQueue_FriendsRecommended",
                    arrSteamIDs: S,
                    fnGetFriendState: u,
                  })
                )
              ))
        );
      }
      function Ce(e) {
        const { storeItem: t } = e;
        return n.createElement(
          "div",
          { className: K.a.AppDescription },
          t.GetShortDescription()
        );
      }
      function Ee(e) {
        const { lifetimePlaytime: t, storeItem: r } = e;
        return n.createElement(
          "div",
          { className: K.a.SimilarAppCtn },
          n.createElement(
            b.d,
            {
              item: { type: "game", id: r.GetAppID() },
              bHidePrice: !0,
              hoverProps: {
                direction: "overlay",
                nBodyAlignment: 1,
                style: { minWidth: "320px", zIndex: 5e3 },
              },
            },
            n.createElement("img", {
              className: K.a.SimilarAppImg,
              src: r.GetAssets().GetSmallCapsuleURL(),
            })
          )
        );
      }
      function Oe(e) {
        const {
          arrSteamIDs: t,
          count: r,
          fnGetFriendState: a,
          locToken: i,
        } = e;
        if (!r) return null;
        let s = [];
        return (
          t.forEach((e) => {
            const t = new X.a(e),
              r = a ? a(t) : U.a.Get().GetPlayerSummary(e),
              i = new se(t.GetAccountID());
            r &&
              r.m_bInitialized &&
              (i.EnsureCommunityDataLoaded(),
              s.push(
                n.createElement(pe, {
                  key: e,
                  size: "Small",
                  community_data: i.community_data,
                  "data-miniprofile": "s" + e,
                  persona: r,
                })
              ));
          }),
          n.createElement(
            Be,
            {
              header: Object(k.n)(
                i,
                r,
                n.createElement("span", { className: K.a.RelevantTextBold })
              ),
            },
            s.length > 0 &&
              n.createElement("div", { className: K.a.FriendAvatarsCtn }, s)
          )
        );
      }
      function Be(e) {
        const { children: t, header: r } = e;
        return n.createElement(
          "div",
          { className: K.a.RelevantItem },
          n.createElement(
            "div",
            { className: K.a.RelevantCheck },
            n.createElement(L.q, null)
          ),
          n.createElement(
            "div",
            { className: K.a.RelevantColumn },
            n.createElement("div", { className: K.a.ReleventText }, r),
            t
          )
        );
      }
      function Ge(e, t) {
        const r = Object(m.d)(e, t);
        D.d.IN_CLIENT
          ? (window.location.href = "steam://openurl/" + r)
          : (window.location.href = r);
      }
      function Ae(e) {
        const {
            nItemHeight: t,
            nItemWidth: r,
            eStoreDiscoveryQueueType: a,
            fnClose: s,
            index: o,
            focused: d,
            fnLoadNextQueue: m,
          } = e,
          p = { width: r || void 0, height: t || void 0 },
          _ = Object(i.d)(() => u.a.Get().GetWishlistGameCount()),
          h = Object(i.d)(() => u.a.Get().GetIgnoredAppsCount()),
          b = Object(i.d)(() =>
            Q.a.Get().GetTotalSkippedAppsForDiscoveryQueue(a)
          ),
          [v, f] = n.useState(!1),
          [y, g] = n.useState(!0),
          [S, w] = n.useState(null),
          I = Object(be.c)(),
          C = () => {
            Ge(D.d.STORE_BASE_URL + "wishlist", I);
          },
          E = n.useCallback(() => {
            f(!0),
              m(!1).then(() => {
                f(!0), g(!1);
              });
          }, []);
        return (
          n.useEffect(() => {
            d &&
              Q.a.Get().BIsSaleActive() &&
              !S &&
              Q.a
                .Get()
                .GetNumTradingCardsEarned()
                .then((e) => {
                  1 === e.eresult && w(e);
                });
          }, [d]),
          n.createElement(
            c.a,
            {
              style: p,
              className: Object(W.a)(
                K.a.SummaryCtn,
                K.a.DiscoveryQueueApp,
                d && K.a.Focused
              ),
              onOptionsActionDescription: Object(k.g)(
                "#DiscoveryQueue_ViewWishlist"
              ),
              onOptionsButton: C,
            },
            n.createElement(
              "div",
              { className: K.a.SummaryTitle },
              Object(k.g)("#DiscoveryQueue_SummaryTitle")
            ),
            Q.a.Get().BIsSaleActive() &&
              n.createElement(
                l.a,
                { className: K.a.TradingCardCtn },
                n.createElement("img", {
                  className: K.a.TradingCardImage,
                  src:
                    D.d.MEDIA_CDN_URL +
                    "store/promo/summer2022/card_stack.png?v-1",
                }),
                n.createElement(
                  l.a,
                  { className: K.a.TradingCardColumn },
                  n.createElement(
                    "div",
                    { className: K.a.TradingCardText },
                    Object(k.m)(
                      (null == S ? void 0 : S.earned_today) > 0
                        ? "#DiscoveryQueue_TradingCardsEarned_Today"
                        : "#DiscoveryQueue_TradingCards_Desc",
                      n.createElement(l.a, {
                        className: K.a.GridLink,
                        onClick: () =>
                          Ge(
                            D.d.STORE_BASE_URL + "sale/summersaletradingcards",
                            I
                          ),
                      })
                    )
                  )
                )
              ),
            n.createElement(
              "div",
              { className: K.a.YourStats },
              Object(k.g)("#DiscoveryQueue_YourStats")
            ),
            n.createElement(
              l.a,
              { "flow-children": "row", className: K.a.SummaryGrid },
              n.createElement(
                "div",
                { className: K.a.GridItem },
                n.createElement(
                  "div",
                  { className: K.a.GridTitle },
                  Object(k.g)("#DiscoveryQueue_ViewedCaps")
                ),
                n.createElement(
                  "div",
                  { className: K.a.GridNumber },
                  b.toLocaleString()
                ),
                n.createElement(
                  "div",
                  { className: K.a.GridSubTitle },
                  Object(k.g)("#DiscoveryQueue_Titles")
                )
              ),
              n.createElement(
                "div",
                { className: K.a.GridItem },
                n.createElement(
                  "div",
                  { className: K.a.GridTitle },
                  Object(k.g)("#DiscoveryQueue_WishlistedCaps")
                ),
                n.createElement(
                  "div",
                  { className: K.a.GridNumber },
                  _.toLocaleString()
                ),
                n.createElement(
                  l.a,
                  { focusable: !0, className: K.a.GridLink, onActivate: C },
                  Object(k.g)("#DiscoveryQueue_ViewWishlist")
                )
              ),
              n.createElement(
                "div",
                { className: K.a.GridItem },
                n.createElement(
                  "div",
                  { className: K.a.GridTitle },
                  Object(k.g)("#DiscoveryQueue_IgnoredCaps")
                ),
                n.createElement(
                  "div",
                  { className: K.a.GridNumber },
                  h.toLocaleString()
                ),
                n.createElement(
                  l.a,
                  {
                    focusable: !0,
                    className: K.a.GridLink,
                    onActivate: () => {
                      Ge(D.d.STORE_BASE_URL + "account/notinterested", I);
                    },
                  },
                  Object(k.g)("#DiscoveryQueue_ViewIgnored")
                )
              )
            ),
            n.createElement(
              l.a,
              { className: K.a.SummaryActionButtonsCtn },
              n.createElement(
                l.a,
                {
                  className: Object(W.a)(K.a.QueueButton, K.a.Wide),
                  focusable: !0,
                  onClick: s,
                },
                Object(k.g)("#ActionButtonLabelDone")
              ),
              y &&
                n.createElement(
                  l.a,
                  {
                    className: Object(W.a)(
                      v && K.a.Disabled,
                      K.a.QueueButton,
                      K.a.Primary,
                      K.a.Wide
                    ),
                    focusable: !0,
                    onClick: E,
                  },
                  v ? Object(k.g)("#Loading") : Object(k.g)("#Button_Continue")
                )
            )
          )
        );
      }
    },
    Sboe: function (e, t, r) {
      e.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueWidgetCtn:
          "discoveryqueueappwidget_DiscoveryQueueWidgetCtn_pdgoG",
        WidgetText: "discoveryqueueappwidget_WidgetText_2R5wI",
      };
    },
    UIKn: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return d;
      });
      var a = r("mrSG"),
        i = (r("q1tI"), r("vDqi")),
        n = r.n(i),
        s = r("/Q1a"),
        o = r("kMdN"),
        l = r("2vnA"),
        c = (r("Zdsb"), r("oleE"));
      r("rmVU");
      class d {
        constructor() {
          (this.m_webAPIInterface = null),
            (this.m_mapPlayerSummaries = new Map());
        }
        static Init(e) {
          d.Get().m_webAPIInterface = e;
        }
        static BHasWebAPIKey() {
          var e;
          return Boolean(
            null === (e = d.Get().m_webAPIInterface) || void 0 === e
              ? void 0
              : e.GetWebAPIAccessToken()
          );
        }
        static Get() {
          return (
            this.s_PlayerStoreStore || (this.s_PlayerStoreStore = new d()),
            this.s_PlayerStoreStore
          );
        }
        FillInPersonaState(e) {
          let t = new o.a(e.steamid);
          return (
            (t.m_bInitialized = !0),
            (t.m_ePersonaState = e.personastate),
            (t.m_strAvatarHash = e.avatarhash),
            (t.m_strPlayerName = e.personaname),
            e.personastateflags &&
              (t.m_unPersonaStateFlags = e.personastateflags),
            e.gameid && (t.m_gameid = e.gameid),
            e.gameserverip && (t.m_unGameServerIP = e.gameserverip),
            e.lobbysteamid && (t.m_game_lobby_id = e.mlobbysteamid),
            e.gameextrainfo && (t.m_strGameExtraInfo = e.gameextrainfo),
            t
          );
        }
        FetchPlayerSummaries(e) {
          let t = {
            access_token: this.m_webAPIInterface.GetWebAPIAccessToken(),
            steamids: e
              .map((e) => c.a.InitFromAccountID(e).ConvertTo64BitString())
              .join(","),
          };
          e.forEach((e) => this.m_mapPlayerSummaries.set(e, null)),
            n.a
              .get(
                `${s.d.WEBAPI_BASE_URL}ISteamUserOAuth/GetUserSummaries/v2/`,
                { params: t }
              )
              .then((e) => {
                e &&
                  e.data &&
                  e.data.players &&
                  0 != e.data.players.length &&
                  e.data.players.forEach((e) => {
                    const t = new c.a(e.steamid);
                    this.m_mapPlayerSummaries.set(
                      t.GetAccountID(),
                      this.FillInPersonaState(e)
                    );
                  });
              });
        }
        BIsAccountIDLoaded(e) {
          return (
            this.m_mapPlayerSummaries.has(e) &&
            Boolean(this.m_mapPlayerSummaries.get(e))
          );
        }
        BatchLoadPlayerSummaries(e, t) {
          if (t) this.FetchPlayerSummaries(e);
          else {
            let t = [];
            e.forEach((e) => {
              this.BIsAccountIDLoaded(e) || t.push(e);
            }),
              t.length > 0 && this.FetchPlayerSummaries(t);
          }
        }
        GetPlayerSummary(e) {
          const t = "string" == typeof e ? new c.a(e).GetAccountID() : e;
          return (
            this.BIsAccountIDLoaded(t) || this.FetchPlayerSummaries([t]),
            this.m_mapPlayerSummaries.get(t)
          );
        }
      }
      (d.s_PlayerStoreStore = null),
        Object(a.b)([l.C], d.prototype, "m_mapPlayerSummaries", void 0);
    },
    "V9K+": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return B;
      }),
        r.d(t, "c", function () {
          return G;
        }),
        r.d(t, "e", function () {
          return A;
        }),
        r.d(t, "d", function () {
          return D;
        }),
        r.d(t, "a", function () {
          return N;
        });
      var a = r("mrSG"),
        i = (r("q1tI"), r("msu0"), r("Zdsb"), r("2vnA"), r("9XWO")),
        n = r("ztGc"),
        s = r("hRO2"),
        o = r("3dpo");
      r("QAsS");
      const l = s.Message;
      class c extends l {
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new c();
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class d extends l {
        constructor(e = null) {
          super(),
            d.prototype.reaction_type || o.a(d.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  reaction_type: {
                    n: 1,
                    br: o.d.readUint32,
                    bw: o.h.writeUint32,
                  },
                  count: { n: 2, br: o.d.readUint32, bw: o.h.writeUint32 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = o.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return o.g(d.M(), e, t);
        }
        static fromObject(e) {
          return o.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class m extends l {
        constructor(e = null) {
          super(),
            m.prototype.recommendationid || o.a(m.M()),
            l.initialize(this, e, 0, -1, [40], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: o.d.readUint64String,
                    bw: o.h.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: o.d.readUint64String,
                    bw: o.h.writeUint64String,
                  },
                  appid: { n: 3, br: o.d.readUint32, bw: o.h.writeUint32 },
                  review: { n: 4, br: o.d.readString, bw: o.h.writeString },
                  time_created: {
                    n: 5,
                    br: o.d.readUint32,
                    bw: o.h.writeUint32,
                  },
                  time_updated: {
                    n: 6,
                    br: o.d.readUint32,
                    bw: o.h.writeUint32,
                  },
                  votes_up: { n: 7, br: o.d.readUint32, bw: o.h.writeUint32 },
                  votes_down: { n: 8, br: o.d.readUint32, bw: o.h.writeUint32 },
                  vote_score: { n: 9, br: o.d.readFloat, bw: o.h.writeFloat },
                  language: { n: 10, br: o.d.readString, bw: o.h.writeString },
                  comment_count: {
                    n: 11,
                    br: o.d.readUint32,
                    bw: o.h.writeUint32,
                  },
                  voted_up: { n: 12, br: o.d.readBool, bw: o.h.writeBool },
                  is_public: { n: 13, br: o.d.readBool, bw: o.h.writeBool },
                  moderator_hidden: {
                    n: 14,
                    br: o.d.readBool,
                    bw: o.h.writeBool,
                  },
                  flagged_by_developer: {
                    n: 15,
                    br: o.d.readEnum,
                    bw: o.h.writeEnum,
                  },
                  report_score: {
                    n: 16,
                    br: o.d.readUint32,
                    bw: o.h.writeUint32,
                  },
                  steamid_moderator: {
                    n: 17,
                    br: o.d.readUint64String,
                    bw: o.h.writeUint64String,
                  },
                  steamid_developer: {
                    n: 18,
                    br: o.d.readUint64String,
                    bw: o.h.writeUint64String,
                  },
                  steamid_dev_responder: {
                    n: 19,
                    br: o.d.readUint64String,
                    bw: o.h.writeUint64String,
                  },
                  developer_response: {
                    n: 20,
                    br: o.d.readString,
                    bw: o.h.writeString,
                  },
                  time_developer_responded: {
                    n: 21,
                    br: o.d.readUint32,
                    bw: o.h.writeUint32,
                  },
                  developer_flag_cleared: {
                    n: 22,
                    br: o.d.readBool,
                    bw: o.h.writeBool,
                  },
                  written_during_early_access: {
                    n: 23,
                    br: o.d.readBool,
                    bw: o.h.writeBool,
                  },
                  votes_funny: {
                    n: 24,
                    br: o.d.readUint32,
                    bw: o.h.writeUint32,
                  },
                  received_compensation: {
                    n: 25,
                    br: o.d.readBool,
                    bw: o.h.writeBool,
                  },
                  unverified_purchase: {
                    n: 26,
                    br: o.d.readBool,
                    bw: o.h.writeBool,
                  },
                  review_quality: {
                    n: 27,
                    br: o.d.readEnum,
                    bw: o.h.writeEnum,
                  },
                  weighted_vote_score: {
                    n: 28,
                    br: o.d.readFloat,
                    bw: o.h.writeFloat,
                  },
                  moderation_note: {
                    n: 29,
                    br: o.d.readString,
                    bw: o.h.writeString,
                  },
                  payment_method: {
                    n: 30,
                    br: o.d.readInt32,
                    bw: o.h.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 31,
                    br: o.d.readInt32,
                    bw: o.h.writeInt32,
                  },
                  playtime_forever: {
                    n: 32,
                    br: o.d.readInt32,
                    bw: o.h.writeInt32,
                  },
                  last_playtime: {
                    n: 33,
                    br: o.d.readInt32,
                    bw: o.h.writeInt32,
                  },
                  comments_disabled: {
                    n: 34,
                    br: o.d.readBool,
                    bw: o.h.writeBool,
                  },
                  playtime_at_review: {
                    n: 35,
                    br: o.d.readInt32,
                    bw: o.h.writeInt32,
                  },
                  approved_for_china: {
                    n: 36,
                    br: o.d.readBool,
                    bw: o.h.writeBool,
                  },
                  ban_check_result: {
                    n: 37,
                    br: o.d.readEnum,
                    bw: o.h.writeEnum,
                  },
                  refunded: { n: 38, br: o.d.readBool, bw: o.h.writeBool },
                  account_score_spend: {
                    n: 39,
                    br: o.d.readInt32,
                    bw: o.h.writeInt32,
                  },
                  reactions: { n: 40, c: d, r: !0, q: !0 },
                  ipaddress: { n: 41, br: o.d.readString, bw: o.h.writeString },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = o.e(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return o.g(m.M(), e, t);
        }
        static fromObject(e) {
          return o.c(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.b(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.f(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class u extends l {
        constructor(e = null) {
          super(),
            u.prototype.appid || o.a(u.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: o.d.readUint32, bw: o.h.writeUint32 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = o.e(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return o.g(u.M(), e, t);
        }
        static fromObject(e) {
          return o.c(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.b(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.f(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class p extends l {
        constructor(e = null) {
          super(),
            p.prototype.accountids_recommended || o.a(p.M()),
            l.initialize(this, e, 0, -1, [1, 3], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  accountids_recommended: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: o.d.readUint32,
                    bw: o.h.writeRepeatedUint32,
                  },
                  accountids_not_recommended: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: o.d.readUint32,
                    bw: o.h.writeRepeatedUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = o.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return o.g(p.M(), e, t);
        }
        static fromObject(e) {
          return o.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class _ extends l {
        constructor(e = null) {
          super(),
            _.prototype.recommendations || o.a(_.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: { recommendations: { n: 1, c: m, r: !0, q: !0 } },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = o.e(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return o.g(_.M(), e, t);
        }
        static fromObject(e) {
          return o.c(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.b(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.f(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      var h;
      !(function (e) {
        (e.Update = function (e, t) {
          return e.SendMsg("UserReviews.Update#1", t, c, { ePrivilege: 3 });
        }),
          (e.GetFriendsRecommendedApp = function (e, t) {
            return e.SendMsg("UserReviews.GetFriendsRecommendedApp#1", t, p, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetIndividualRecommendations = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              t,
              _,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          });
      })(h || (h = {}));
      var b = r("qisX"),
        v = r("1ZD8"),
        f = r("/Q1a"),
        y = r("vDqi"),
        g = r.n(y),
        S = (r("XThB"), r("yfxr"), r("FmLm")),
        w = r("FQoL"),
        I = (r("X/lQ"), r("Ys0h")),
        C = r("f5iL");
      class E {
        constructor(e, t) {
          (this.m_ServiceTransport = e.GetServiceTransport()),
            (this.m_DynamicStore = t);
        }
        ExecuteQuery(e, t, r, n) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const a = i.b.Init(b.c);
            Object(w.a)(a),
              r && Object(w.b)(a, r),
              n && a.Body().set_override_country_code(n),
              t.filters || (t.filters = {}),
              (t.filters.content_descriptors_excluded =
                this.m_DynamicStore.GetExcludedContentDescriptor()),
              a.Body().set_query(b.b.fromObject(t)),
              a.Body().set_query_name(e);
            const s = yield b.d.Query(this.m_ServiceTransport, a);
            if (1 != s.GetEResult()) throw s.GetEResult();
            return new O(s, r);
          });
        }
      }
      class O {
        constructor(e, t) {
          this.ReadResults(e, t);
        }
        GetItems() {
          return this.m_Items;
        }
        GetItemIDs() {
          return this.m_rgItemIDs;
        }
        GetMetadata() {
          return this.m_metadata;
        }
        ReadResults(e, t) {
          this.m_Items ||
            (Object(C.a)(
              0 == e.Body().metadata().start(),
              "Empty item list - expected to start at 0"
            ),
            (this.m_Items = []));
          const r = e.Body().ids() || [];
          if (
            ((this.m_rgItemIDs = r.map((e) => e.toObject())),
            e.Body().store_items())
          )
            for (const r of e.Body().store_items())
              this.m_Items.push(I.a.Get().ReadItem(r, t));
          this.m_metadata = e.Body().metadata().toObject();
        }
      }
      function B(e) {
        return Object(v.useQuery)(N.Get().GetFriendsGameplayInfoKey(e), () =>
          N.Get().LoadFriendsGameplayInfo(e)
        );
      }
      function G(e) {
        return Object(v.useQuery)(N.Get().GetFriendsRecommendedAppKey(e), () =>
          N.Get().LoadFriendsRecommendedApp(e)
        );
      }
      function A(e) {
        return Object(v.useQuery)(N.Get().GetStoreRelevanceDataAppKey(e), () =>
          N.Get().LoadStoreRelevanceData(e)
        );
      }
      function D() {
        return (function (e, t, r, a, i) {
          const n = ["StoreQueryStore", r, a, i],
            {
              isLoading: s,
              error: o,
              data: l,
            } = Object(v.useQuery)(n, () => e.ExecuteQuery(t, r, a, i), {
              staleTime: 36e5,
            });
          return l;
        })(N.Get().StoryQueryStore, "App Relevance Store Top Sellers", {
          sort: 11,
          start: 0,
          count: 100,
        });
      }
      class N {
        static Init(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            (N.Get().m_transport = e.GetServiceTransport()),
              (N.Get().m_DynamicUserStore = yield S.a.Get().HintLoad()),
              (N.Get().m_StoreQueryStore = new E(
                e,
                N.Get().m_DynamicUserStore
              ));
          });
        }
        static BIsLoaded() {
          return Boolean(N.Get().m_transport && N.Get().m_StoreQueryStore);
        }
        static Get() {
          return (
            this.s_AppRelevanceStore || (this.s_AppRelevanceStore = new N()),
            this.s_AppRelevanceStore
          );
        }
        GetFriendsGameplayInfoKey(e) {
          return `GetFriendsGameplayInfoKey_${e}`;
        }
        get StoryQueryStore() {
          return this.m_StoreQueryStore;
        }
        LoadFriendsGameplayInfo(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const t = i.b.Init(n.c);
            t.Body().set_appid(e);
            const r = yield n.o.GetFriendsGameplayInfo(this.m_transport, t),
              a = r.GetEResult();
            if (1 == a) return r.Body().toObject();
            throw `Error ${a} failed to call GetFriendsGameplayInfo ${e}`;
          });
        }
        GetFriendsRecommendedAppKey(e) {
          return `FriendsRecommendedAppKey_${e}`;
        }
        LoadFriendsRecommendedApp(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const t = i.b.Init(u);
            t.Body().set_appid(e);
            const r = yield h.GetFriendsRecommendedApp(this.m_transport, t),
              a = r.GetEResult();
            if (1 == a) return r.Body().toObject();
            throw `Error ${a} failed to call GetFriendsRecommendedApp ${e}`;
          });
        }
        GetStoreRelevanceDataAppKey(e) {
          return `StoreRelevanceDataAppKey_${e}`;
        }
        LoadStoreRelevanceData(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let t = { sessionid: f.d.SESSIONID, appid: e },
              r = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
            const a = (yield g.a.get(
              `${f.d.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: t }
            )).data;
            return (
              a &&
                1 == a.success &&
                (a.results.similar_played_apps &&
                  (r.arrSimilarPlayedApps = a.results.similar_played_apps.map(
                    (e) => ({
                      appid: e.appid,
                      playtimeForever: e.playtime_forever,
                    })
                  )),
                a.results.recommended_by_ir && (r.bRecommendedByIR = !0)),
              r
            );
          });
        }
      }
      N.s_AppRelevanceStore = null;
    },
    cbet: function (e, t, r) {
      e.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueCarouselCtn:
          "discoveryqueuewizard_DiscoveryQueueCarouselCtn_1GFC6",
        TextLink: "discoveryqueuewizard_TextLink_1hQVC",
        DiscoveryQueueCarousel:
          "discoveryqueuewizard_DiscoveryQueueCarousel_2swWH",
        DiscoveryQueueApp: "discoveryqueuewizard_DiscoveryQueueApp_2o_YH",
        Focused: "discoveryqueuewizard_Focused_2Xpm2",
        DiscoveryQueueWrapper:
          "discoveryqueuewizard_DiscoveryQueueWrapper_1s3BJ",
        revealDiscoveryQueueWrapper:
          "discoveryqueuewizard_revealDiscoveryQueueWrapper_308QK",
        AppVideoCtn: "discoveryqueuewizard_AppVideoCtn_2XCS5",
        WishlistBadge: "discoveryqueuewizard_WishlistBadge_2vb6r",
        Active: "discoveryqueuewizard_Active_2EDE0",
        AppVideo: "discoveryqueuewizard_AppVideo_ah1w3",
        AppMainCap: "discoveryqueuewizard_AppMainCap_24yvt",
        AppDetailsCtn: "discoveryqueuewizard_AppDetailsCtn_2E1O4",
        AppDetailsCtnTop: "discoveryqueuewizard_AppDetailsCtnTop_3LnWP",
        AppDetailsHeader: "discoveryqueuewizard_AppDetailsHeader_1Qn-x",
        AppLibraryHero: "discoveryqueuewizard_AppLibraryHero_1TDRh",
        RightColumn: "discoveryqueuewizard_RightColumn_35mWv",
        AppName: "discoveryqueuewizard_AppName_3KC4W",
        AppTagsCtn: "discoveryqueuewizard_AppTagsCtn_1t4JV",
        TagEntry: "discoveryqueuewizard_TagEntry_UNDKT",
        AppReviews: "discoveryqueuewizard_AppReviews_2lVXS",
        RelevantCtn: "discoveryqueuewizard_RelevantCtn_FGuCn",
        RelevantItem: "discoveryqueuewizard_RelevantItem_3I77j",
        RelevantCheck: "discoveryqueuewizard_RelevantCheck_qKF9P",
        IgnoreLink: "discoveryqueuewizard_IgnoreLink_2OinP",
        AppActionButtonsCtn: "discoveryqueuewizard_AppActionButtonsCtn_2bIsf",
        MainCapBlur: "discoveryqueuewizard_MainCapBlur_2TOx2",
        DiscoveryQueuePlaceholder:
          "discoveryqueuewizard_DiscoveryQueuePlaceholder_3ZUUI",
        IgnoredCtn: "discoveryqueuewizard_IgnoredCtn_2e3_o",
        IgnoredInfo: "discoveryqueuewizard_IgnoredInfo_130E6",
        IgnoredTitle: "discoveryqueuewizard_IgnoredTitle_1QXC5",
        IgnoredDescription: "discoveryqueuewizard_IgnoredDescription_3RVP5",
        UndoIgnoreButton: "discoveryqueuewizard_UndoIgnoreButton_wC564",
        AppDesc: "discoveryqueuewizard_AppDesc_3bAqJ",
        YGlyph: "discoveryqueuewizard_YGlyph_1SpsG",
        SummaryCtn: "discoveryqueuewizard_SummaryCtn_2g8c9",
        SummaryTitle: "discoveryqueuewizard_SummaryTitle_W4ekX",
        YourStats: "discoveryqueuewizard_YourStats_8PO3T",
        SummaryGrid: "discoveryqueuewizard_SummaryGrid_1b0jZ",
        GridItem: "discoveryqueuewizard_GridItem_12Sab",
        GridTitle: "discoveryqueuewizard_GridTitle_1vnt8",
        GridNumber: "discoveryqueuewizard_GridNumber_-Q4Ax",
        GridSubTitle: "discoveryqueuewizard_GridSubTitle_1FQzN",
        SummaryActionButtonsCtn:
          "discoveryqueuewizard_SummaryActionButtonsCtn_1hRNc",
        GridLink: "discoveryqueuewizard_GridLink_2y4G6",
        TopBarCtn: "discoveryqueuewizard_TopBarCtn_24gmm",
        revealTopBarCtn: "discoveryqueuewizard_revealTopBarCtn_2Gt6G",
        LearnMoreLink: "discoveryqueuewizard_LearnMoreLink_3bCDZ",
        ControlsCtn: "discoveryqueuewizard_ControlsCtn_3UbRl",
        QueueButton: "discoveryqueuewizard_QueueButton_19cHb",
        Disabled: "discoveryqueuewizard_Disabled_1yh4o",
        Primary: "discoveryqueuewizard_Primary_1ZYKE",
        Wide: "discoveryqueuewizard_Wide_SD-xU",
        QueueNavArrow: "discoveryqueuewizard_QueueNavArrow_1kgdo",
        Enable: "discoveryqueuewizard_Enable_1hqwM",
        RightArrow: "discoveryqueuewizard_RightArrow_1ZHCC",
        LeftArrow: "discoveryqueuewizard_LeftArrow_3Bctd",
        ReleventSimilarAppsCtn:
          "discoveryqueuewizard_ReleventSimilarAppsCtn_3wqiW",
        WhyRelevant: "discoveryqueuewizard_WhyRelevant_WBWfZ",
        SimilarAppCtn: "discoveryqueuewizard_SimilarAppCtn_2oeoS",
        SimilarAppImg: "discoveryqueuewizard_SimilarAppImg_2eNyY",
        SimilarAppText: "discoveryqueuewizard_SimilarAppText_3MS2G",
        FriendAvatarsCtn: "discoveryqueuewizard_FriendAvatarsCtn_kOfo-",
        RelevantTextBold: "discoveryqueuewizard_RelevantTextBold_2FiP4",
        AppDescription: "discoveryqueuewizard_AppDescription_Kzj5I",
        TradingCardCtn: "discoveryqueuewizard_TradingCardCtn_36Qbj",
        TradingCardImage: "discoveryqueuewizard_TradingCardImage_3wa0d",
      };
    },
    qvOX: function (e, t, r) {
      e.exports = {
        miniProfile: "miniprofile_miniProfile_1AMAp",
        miniProfileContent: "miniprofile_miniProfileContent_3QoRR",
        miniProfileHeader: "miniprofile_miniProfileHeader_TzmYo",
        miniProfilePlayer: "miniprofile_miniProfilePlayer_25tjY",
        playerContent: "miniprofile_playerContent_1oD1a",
        miniProfileBackground: "miniprofile_miniProfileBackground_108IP",
        miniProfileBackgroundBlur:
          "miniprofile_miniProfileBackgroundBlur_QTyZx",
        miniProfileVideoBackground:
          "miniprofile_miniProfileVideoBackground_34Ni9",
        miniProfileVideoBackgroundContainer:
          "miniprofile_miniProfileVideoBackgroundContainer_2SW_Y",
        miniProfileBackdropBlur: "miniprofile_miniProfileBackdropBlur_LN94b",
        miniProfileBlocked: "miniprofile_miniProfileBlocked_kQGcR",
        miniProfileNotFriends: "miniprofile_miniProfileNotFriends_3OPXP",
        notFriends: "miniprofile_notFriends_fedtz",
        SnoozeContainer: "miniprofile_SnoozeContainer_3g0BL",
        miniProfileHover: "miniprofile_miniProfileHover_1gqhW",
        miniprofile_arrow: "miniprofile_miniprofile_arrow_2BuI_",
        left: "miniprofile_left_reKR5",
        playerAvatar: "miniprofile_playerAvatar_2rDsq",
        Frame: "miniprofile_Frame_3_R-1",
        avatarStatus: "miniprofile_avatarStatus_1y2O1",
        miniProfileAvatarStatus: "miniprofile_miniProfileAvatarStatus_IzSuQ",
        personaName: "miniprofile_personaName_K3kJz",
        hasNickname: "miniprofile_hasNickname_2lhxi",
        personaNameLabel: "miniprofile_personaNameLabel_1NqKJ",
        nickName: "miniprofile_nickName_1oOq4",
        persona: "miniprofile_persona_2TAMH",
        personaAndIcons: "miniprofile_personaAndIcons_3R8bT",
        awayStatusLabel: "miniprofile_awayStatusLabel_1nBxb",
        nickname: "miniprofile_nickname_drAAs",
        playerNicknameBracket: "miniprofile_playerNicknameBracket_2kL-H",
        notInOrWatchingGame: "miniprofile_notInOrWatchingGame_34jjZ",
        miniProfileBottom: "miniprofile_miniProfileBottom_2MwqO",
        miniProfileGameContainer: "miniprofile_miniProfileGameContainer_3gSTD",
        gameLogo: "miniprofile_gameLogo_1l8mF",
        ingame: "miniprofile_ingame_zfceJ",
        richPresence: "miniprofile_richPresence_2Ues_",
        gameState: "miniprofile_gameState_2O3Nq",
        watchingbroadcast: "miniprofile_watchingbroadcast_wkELR",
        watchingbroadcastThumbnail:
          "miniprofile_watchingbroadcastThumbnail_2u688",
        gameContent: "miniprofile_gameContent_1GnkN",
        miniProfileFeaturedContainer:
          "miniprofile_miniProfileFeaturedContainer_1MTqQ",
        favoriteBadgeIcon: "miniprofile_favoriteBadgeIcon_1j3XM",
        badgeIcon: "miniprofile_badgeIcon_2BpGJ",
        featuredLabels: "miniprofile_featuredLabels_1vmTa",
        friendPlayerLevelNum: "miniprofile_friendPlayerLevelNum_EuhFw",
        featuredTitle: "miniprofile_featuredTitle_35rAB",
        mutualFriends: "miniprofile_mutualFriends_3tWrb",
        featuredSubTitle: "miniprofile_featuredSubTitle_1IP-p",
      };
    },
    t1oW: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return l;
      });
      var a = r("mrSG"),
        i = (r("msu0"), r("Zdsb"), r("2vnA")),
        n = r("9XWO"),
        s = r("WOjH"),
        o = r("BaLb");
      class l {
        constructor() {
          (this.m_mapDiscoveryQueues = new Map()),
            (this.m_mapSkippedApps = new Map()),
            (this.m_dateSaleStart = new Date("2022-06-23T17:00:00")),
            (this.m_dateSaleEnd = new Date("2022-07-07T17:00:00"));
        }
        BIsSaleActive() {
          const e = Date.now();
          return Boolean(
            e >= this.m_dateSaleStart.getTime() &&
              e < this.m_dateSaleEnd.getTime()
          );
        }
        static Init(e) {
          l.Get().m_transport = e;
        }
        static BHasTransport() {
          return Boolean(l.Get().m_transport);
        }
        static Get() {
          return (
            this.s_DiscoveryQueueStore ||
              (this.s_DiscoveryQueueStore = new l()),
            this.s_DiscoveryQueueStore
          );
        }
        LoadDiscoveryQueue(e, t, r) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const a = n.b.Init(s.a);
            a.Body().set_queue_type(e),
              a.Body().set_country_code(t),
              a.Body().set_rebuild_queue(r),
              a.Body().set_rebuild_queue_if_stale(!0);
            const i = yield s.d.GetDiscoveryQueue(this.m_transport, a),
              o = i.GetEResult();
            return (
              1 == o
                ? this.m_mapDiscoveryQueues.set(e, i.Body().toObject())
                : console.warn(
                    "Error",
                    o,
                    "failed to get discovery queue type",
                    e
                  ),
              o
            );
          });
        }
        GetDiscoveryQueueAppsOfType(e, t, r) {
          return Object(a.a)(this, void 0, void 0, function* () {
            return (
              (!r && this.m_mapDiscoveryQueues.has(e)) ||
                (yield this.LoadDiscoveryQueue(e, t, r)),
              this.m_mapDiscoveryQueues.get(e).appids
            );
          });
        }
        GetTotalSkippedAppsForDiscoveryQueue(e) {
          return this.m_mapDiscoveryQueues.get(e).skipped;
        }
        GetSkippedAppKey(e, t) {
          return `${e}_${t}`;
        }
        SkipDiscoveryQueueItem(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const r = this.GetSkippedAppKey(e, t);
            if (!this.m_mapSkippedApps.has(r)) {
              this.m_mapSkippedApps.set(r, !0);
              const a = n.b.Init(s.c);
              a.Body().set_appid(e), a.Body().set_queue_type(t);
              const i = (yield s.d.SkipDiscoveryQueueItem(
                this.m_transport,
                a
              )).GetEResult();
              1 != i &&
                29 != i &&
                (console.warn("Error", i, "failed to skip appid ", e),
                this.m_mapSkippedApps.delete(r));
            }
          });
        }
        GetNumTradingCardsEarned() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = { earned_today: 0, earned_lifetime: 0, eresult: 2 },
              t = Date.now(),
              r =
                864e5 *
                  Math.floor((t - this.m_dateSaleStart.getTime()) / 864e5) +
                this.m_dateSaleStart.getTime(),
              a = n.b.Init(o.c);
            let i = yield o.d.GetNumTradingCardsEarned(this.m_transport, a),
              s = i.GetEResult();
            return 1 !== s
              ? ((e.eresult = s), e)
              : ((e.earned_lifetime = i.Body().num_trading_cards()),
                a.Body().set_timestamp_start(r / 1e3),
                (i = yield o.d.GetNumTradingCardsEarned(this.m_transport, a)),
                (s = i.GetEResult()),
                1 != s
                  ? ((e.eresult = s), e)
                  : ((e.earned_today = i.Body().num_trading_cards()),
                    (e.eresult = 1),
                    e));
          });
        }
      }
      (l.s_DiscoveryQueueStore = null),
        Object(a.b)([i.C], l.prototype, "m_mapDiscoveryQueues", void 0);
    },
  },
]);

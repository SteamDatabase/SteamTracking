/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
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
          return u;
        });
      var i = r("s4NR"),
        n = r.n(i),
        a = r("q1tI"),
        s = r("EC67");
      function o(e, t) {
        const r = "location" in e ? e.location : e,
          i = "search" in r ? r.search : r,
          a = n.a.parse(i.substring(1))[t];
        return a && Array.isArray(a) ? a[a.length - 1] : a;
      }
      const l = (e) => null != e;
      function c(e, t, r) {
        const i = n.a.parse(e.location.search.substring(1));
        l(r) ? (i[t] = r) : delete i[t], e.push(`?${n.a.stringify(i)}`);
      }
      function d(e, t) {
        const r = Object(s.g)();
        let i = t;
        const n = o(location, e);
        l(n) &&
          (i = l(t)
            ? "boolean" == typeof t
              ? t.constructor("false" !== n)
              : t.constructor(n)
            : n);
        const [d, u] = Object(a.useState)(i);
        return [
          d,
          (t) => {
            c(r, e, l(t) ? String(t) : null), u(t);
          },
        ];
      }
      function u(e, t) {
        const r = n.a.parse(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const i = t[e];
            null == i ? delete r[e] : (r[e] = i);
          }
        e.push(`?${n.a.stringify(r)}`);
      }
    },
    C1a2: function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return u;
      }),
        r.d(t, "a", function () {
          return m;
        }),
        r.d(t, "b", function () {
          return p;
        });
      var i = r("mrSG"),
        n = r("/cMS"),
        a = r("q1tI"),
        s = r("rmVU"),
        o = r("Ys0h"),
        l = r("2VXD"),
        c = r("f5iL"),
        d = r("/Q1a");
      function u() {
        const e = Object(l.a)("usePartnerStoreBrowseAPI"),
          [t, r] = Object(a.useState)(!1);
        return (
          Object(a.useEffect)(() => {
            (function (e = !1) {
              return Object(i.a)(this, void 0, void 0, function* () {
                if (e && o.a.BIsInitialized()) return;
                const t = Object(d.h)(
                  "partnerbrowse_webapi_token",
                  "application_config"
                );
                Object(c.a)(Boolean(t), "require partnerbrowse_webapi_token");
                const r = new s.a(d.d.WEBAPI_BASE_URL, t);
                return (
                  ("dev" != d.d.WEB_UNIVERSE && "beta" != d.d.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: Initializing CStoreItemCache with access token",
                      t
                    ),
                  m(t),
                  o.a.Initialize(r, d.l.is_partner_member)
                );
              });
            })().then(() => {
              var t;
              (null === (t = null == e ? void 0 : e.token) || void 0 === t
                ? void 0
                : t.reason) || r(!0);
            });
          }, []),
          t
        );
      }
      function m(e) {
        n.a.BIsInitialized() || n.a.Initialize(new s.a(d.d.WEBAPI_BASE_URL, e));
      }
      function p(e) {
        return n.a.BIsInitialized() || m(e || null), !0;
      }
    },
    LAKx: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return ae;
      });
      var i = r("mrSG"),
        n = r("aoTL"),
        a = r("q1tI"),
        s = r("Zdsb"),
        o = r("ez+p"),
        l = r("Lsvi"),
        c = r("s358"),
        d = r("O8Yk"),
        u = r("lfGQ"),
        m = (r("yfxr"), r("WOjH"), r("FmLm")),
        p = (r("X/lQ"), r("Ys0h")),
        h = r("RrtU"),
        _ = r("/cMS"),
        v = r("oEKi"),
        b = r("upZW"),
        y = r("1QaA"),
        f = r("4uAn"),
        g = r("i8i4"),
        S = r("hCpY"),
        w = r("7VqR"),
        I = r("6MVd"),
        C = r("c7k8"),
        A = (r("nDaX"), r("tXBB")),
        B = r("xHQ9"),
        G = (r("hane"), r("fsrB")),
        O = r("iDgP"),
        E = r("C/LP"),
        R = r("/Q1a");
      const D = new O.a("VirtualizedBoxCarousel").Debug,
        T = a.forwardRef(function (e, t) {
          const { name: r, initialColumn: i } = e,
            [n, s] = Object(E.a)("VBC_" + r, i || 0);
          return a.createElement(
            j,
            Object.assign({}, e, {
              ref: t,
              focusedColumn: n,
              setFocusedColumn: s,
            })
          );
        });
      class j extends a.PureComponent {
        constructor() {
          super(...arguments),
            (this.state = { nContainerWidth: 0, nRightPadding: 0 }),
            (this.m_refContainer = a.createRef()),
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
        StartScrollAnimation(e, t, r, i, n) {
          let a = this.m_refGrid;
          if (a)
            if (n) {
              const a = this.m_refGridElement;
              D("StartScrollAnimation", r, i, n);
              let s = {
                msDuration: n,
                timing: this.props.scrollTiming,
                onComplete: () => this.OnAnimationScrollComplete(e, t, r, i),
              };
              this.m_scrollAnimation && this.m_scrollAnimation.End(),
                (this.m_scrollAnimation = new B.c(a, { scrollLeft: i }, s)),
                this.m_scrollAnimation.Start();
            } else
              a.scrollToPosition({ scrollLeft: i, scrollTop: 0 }),
                this.OnAnimationScrollComplete(e, t, r, i);
        }
        RestoreScrollPosition(e) {
          this.StartScrollAnimation(
            A.a.INVALID,
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
        OnAnimationScrollComplete(e, t, r, i) {
          g.unstable_batchedUpdates(() => {
            D("OnAnimationScrollComplete", r, i),
              this.SendScrollNotification(i);
            const n = this.m_mapRefs.get(r);
            n &&
              n.current &&
              (D("Sending focus to", r), n.current.TakeFocus(e)),
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
            A.a.INVALID,
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
              fnItemRenderer: i,
              nItemHeight: n,
              autoFocus: s,
            } = this.props,
            { key: o, columnIndex: c, style: d } = e,
            u = t(c),
            m = parseInt(d.left.toString()),
            p = r(c),
            h = !this.m_mapRefs.has(p),
            _ = this.m_mapRefs.get(p) || Object(G.a)();
          return (
            this.m_mapRefs.set(p, _),
            a.createElement(
              l.a,
              {
                key: o,
                navKey: o,
                navRef: _,
                focusable: !1,
                onGamepadDirection: this.OnGamepadDirection,
                autoFocus: s && c == this.props.focusedColumn && h,
                "data-id": p,
                onFocus: () => this.OnItemFocused(c),
                style: d,
              },
              i(c, u, n, m)
            )
          );
        }
        OnSectionRendered(e) {
          (this.m_iStart = e.columnStartIndex),
            (this.m_iEnd = e.columnStopIndex),
            D("Section rendered", this.m_iStart, this.m_iEnd),
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
          return D("LastFocusableColumn: ", e), e;
        }
        UpdateScrollArrows() {
          var e, t, r;
          if (this.props.fnUpdateArrows) {
            const i =
                null === (e = this.m_refGrid) || void 0 === e
                  ? void 0
                  : e.getOffsetForCell({
                      alignment: this.props.scrollToAlignment,
                      columnIndex: this.props.nIndexLeftmost,
                    }),
              n =
                null === (t = this.m_refGrid) || void 0 === t
                  ? void 0
                  : t.getOffsetForCell({
                      alignment: this.props.scrollToAlignment,
                      columnIndex: this.GetLastFocusableColumn(),
                    }),
              a = Math.round(
                null === (r = this.m_refGridElement) || void 0 === r
                  ? void 0
                  : r.scrollLeft
              ),
              s =
                a != Math.floor(null == i ? void 0 : i.scrollLeft) &&
                a != Math.round(null == i ? void 0 : i.scrollLeft),
              o =
                a != Math.floor(null == n ? void 0 : n.scrollLeft) &&
                a != Math.round(null == n ? void 0 : n.scrollLeft);
            D(
              "ShowLeftArrow: ",
              s,
              i,
              " ShowRightArrow: ",
              o,
              n,
              " ScrollPos: ",
              a
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
              i = parseInt(t.getPropertyValue("scroll-padding-right")) || 0,
              n = Math.max(r, i);
            n != this.state.nRightPadding &&
              (D("Computed", n, "additional right padding"),
              this.setState({ nRightPadding: n }, () => {
                this.m_refGrid.recomputeGridSize({
                  columnIndex: this.props.nNumItems - 1,
                });
              }));
          }
        }
        componentDidMount() {
          this.m_refContainer.current &&
            (this.m_resizeObserver.observe(this.m_refContainer.current),
            D(
              "componentDidMount Setting width to",
              this.m_refContainer.current.clientWidth
            ),
            this.setState({
              nContainerWidth: this.m_refContainer.current.clientWidth,
            }));
        }
        componentDidUpdate(e) {
          this.props.fnGetColumnWidth != e.fnGetColumnWidth &&
            (D("Column width function changes, recalculating sizes"),
            this.m_refGrid.recomputeGridSize());
        }
        componentWillUnmount() {
          this.m_resizeObserver.disconnect();
        }
        OnResize() {
          const e = this.m_refContainer.current.clientWidth;
          e != this.state.nContainerWidth &&
            (D(
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
            i = this.alignment;
          return this.ScrollToItem(A.a.INVALID, r, i, e);
        }
        ScrollRight(e) {
          const t = this.m_iEnd - this.m_iStart,
            r = Object(w.a)(
              this.props.focusedColumn + t,
              this.props.nIndexLeftmost,
              this.props.nNumItems - 1
            ),
            i = this.alignment;
          return this.ScrollToItem(A.a.INVALID, r, i, e);
        }
        ScrollToFirstChild() {
          return this.ScrollToItem(
            A.a.INVALID,
            this.props.nIndexLeftmost,
            "auto"
          );
        }
        MoveLeft(e) {
          D("MoveLeft from", this.props.focusedColumn);
          let t = this.props.focusedColumn - 1;
          for (
            ;
            t != this.props.nIndexLeftmost - 1 &&
            this.props.fnDoesItemTakeFocus &&
            !this.props.fnDoesItemTakeFocus(t);

          )
            t--;
          return t == this.props.nIndexLeftmost - 1
            ? (D("At left edge, not handling left gamepad"), !1)
            : (D("MoveLeft to", t),
              this.ScrollToItem(
                e ? e.detail.button : A.a.INVALID,
                t,
                this.props.scrollToAlignment || "auto",
                e
              ));
        }
        MoveRight(e) {
          D("MoveRight from", this.props.focusedColumn);
          let t = this.props.focusedColumn + 1;
          for (
            ;
            t != this.props.nNumItems &&
            this.props.fnDoesItemTakeFocus &&
            !this.props.fnDoesItemTakeFocus(t);

          )
            t++;
          return t == this.props.nNumItems
            ? (D("At right edge, not handling right gamepad"), !1)
            : (D("MoveRight to", t),
              this.ScrollToItem(
                e ? e.detail.button : A.a.INVALID,
                t,
                this.props.scrollToAlignment || "auto",
                e
              ));
        }
        ScrollToItem(e, t, r, i, n) {
          if (
            this.m_activeScrollTo &&
            this.m_activeScrollTo.alignment === r &&
            this.m_activeScrollTo.iNewFocus === t
          )
            return !0;
          if (
            (D("ScrollToItem", t, r, i, n),
            t != this.props.focusedColumn &&
              this.m_refGrid &&
              (!this.props.fnDoesItemTakeFocus ||
                this.props.fnDoesItemTakeFocus(t)))
          ) {
            const a = this.m_refGrid.getOffsetForCell({
                alignment: r,
                columnIndex: t,
                rowIndex: 0,
              }),
              s = this.props.fnGetId(t);
            return (
              D("Scrolling to item", t, s, r, a.scrollLeft, n),
              (this.m_activeScrollTo = { iNewFocus: t, alignment: r }),
              this.props.fnOnFocusedColumnChange &&
                this.props.fnOnFocusedColumnChange(this.props.focusedColumn, t),
              this.StartScrollAnimation(
                e,
                t,
                s,
                a.scrollLeft,
                null != n ? n : this.props.scrollDuration
              ),
              null == i || i.stopPropagation(),
              null == i || i.preventDefault(),
              !0
            );
          }
          return !1;
        }
        OnGamepadButtonDown(e) {
          switch ((D("OnGamepadButtonDown", e.detail), e.detail.button)) {
            case A.a.BUMPER_LEFT:
              return !!this.props.enableBumperPaging && this.ScrollLeft(e);
            case A.a.BUMPER_RIGHT:
              return !!this.props.enableBumperPaging && this.ScrollRight(e);
          }
          return !1;
        }
        OnGamepadDirection(e) {
          switch ((D("OnGamepadDirection", e.detail), e.detail.button)) {
            case A.a.DIR_LEFT:
              return this.MoveLeft(e);
            case A.a.DIR_RIGHT:
              return this.MoveRight(e);
          }
          return !1;
        }
        render() {
          const {
              className: e,
              nNumItems: t,
              nIndexLeftmost: r,
              nHeight: i,
              nItemHeight: n,
              overscan: s = 3,
              scrollToAlignment: o,
              focusedColumn: c,
            } = this.props,
            d = this.state.nContainerWidth;
          return (
            D("Inner render", this.props.name, this.props.nNumItems, d, r, c),
            a.createElement(
              l.a,
              {
                ref: this.m_refContainer,
                "flow-children": "row",
                onButtonDown: this.OnGamepadButtonDown,
                focusable: !1,
              },
              d &&
                a.createElement(C.a, {
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
                    stopIndex: i,
                  }) => ({
                    overscanStartIndex: Math.max(0, r - t),
                    overscanStopIndex: Math.min(e - 1, i + t),
                  }),
                  rowCount: 1,
                  rowHeight: n,
                  height: i,
                  width: d,
                  containerStyle: { overflow: "visible" },
                  scrollToAlignment: this.alignment,
                  scrollToColumn: c,
                  tabIndex: null,
                  autoHeight: !R.d.IN_GAMEPADUI,
                })
            )
          );
        }
      }
      (j.defaultProps = {
        nIndexLeftmost: 0,
        scrollDuration: 100,
        scrollTiming: "sine",
        enableBumperPaging: !1,
        initialColumn: 0,
        bPlaySoundOnFailedScroll: !0,
      }),
        Object(i.b)([S.b], j.prototype, "RestoreScrollPosition", null),
        Object(i.b)([S.b], j.prototype, "OnAnimationScrollComplete", null),
        Object(i.b)([S.b], j.prototype, "OnTouchStart", null),
        Object(i.b)([S.b], j.prototype, "OnTouchMove", null),
        Object(i.b)(
          [S.b, Object(I.a)(250)],
          j.prototype,
          "SnapBackToFirstElement",
          null
        ),
        Object(i.b)([S.b], j.prototype, "OnScroll", null),
        Object(i.b)([S.b], j.prototype, "GetCellColumnWidth", null),
        Object(i.b)([S.b], j.prototype, "OnItemFocused", null),
        Object(i.b)([S.b], j.prototype, "CellRenderer", null),
        Object(i.b)([S.b], j.prototype, "OnSectionRendered", null),
        Object(i.b)(
          [S.b, Object(I.a)(250)],
          j.prototype,
          "UpdateScrollArrows",
          null
        ),
        Object(i.b)([S.b], j.prototype, "BindGridObject", null),
        Object(i.b)([S.b], j.prototype, "OnResize", null),
        Object(i.b)([S.b], j.prototype, "ScrollLeft", null),
        Object(i.b)([S.b], j.prototype, "ScrollRight", null),
        Object(i.b)([S.b], j.prototype, "ScrollToFirstChild", null),
        Object(i.b)([S.b], j.prototype, "MoveLeft", null),
        Object(i.b)([S.b], j.prototype, "MoveRight", null),
        Object(i.b)([S.b], j.prototype, "OnGamepadButtonDown", null),
        Object(i.b)([S.b], j.prototype, "OnGamepadDirection", null);
      var z = r("thkD"),
        L = r("e356"),
        N = r("pC2t"),
        M = r("SS8s"),
        F = r("kWcV"),
        Q = r("GXif");
      function W(e) {
        const { storeitem: t, fnNavigateToStore: r, snr: i } = e;
        a.useEffect(() => {
          m.a.Get().HintLoad();
        }, []);
        const s = Object(n.d)(() => m.a.Get().BIsGameWishlisted(t.GetAppID())),
          o = Object(n.d)(() => m.a.Get().BIsGameIgnored(t.GetAppID())),
          l = Object(n.d)(
            () => m.a.Get().BIsAjaxInFlight() || !m.a.Get().BIsLoaded()
          );
        let c = [
          a.createElement(
            M.d,
            {
              key: "wishlist",
              onSelected: () =>
                m.a.Get().UpdateGameWishlist(t.GetAppID(), !s, i),
            },
            s
              ? Object(Q.g)(
                  "#LibraryHome_GameCarousel_ContextMenu_RemoveWishlist"
                )
              : Object(Q.g)("#LibraryHome_GameCarousel_ContextMenu_AddWishlist")
          ),
          a.createElement(
            M.d,
            {
              key: "ignore",
              onSelected: () => m.a.Get().UpdateAppIgnore(t.GetAppID(), !o),
            },
            o
              ? Object(Q.g)("#LibraryHome_GameCarousel_ContextMenu_UnIgnore")
              : Object(Q.g)("#LibraryHome_GameCarousel_ContextMenu_Ignore")
          ),
        ];
        return a.createElement(
          M.c,
          { label: t.GetName() },
          a.createElement(
            M.d,
            { onSelected: r },
            Object(Q.g)("#LibraryHome_GameCarousel_ContextMenu_StorePage")
          ),
          l && a.createElement(F.a, { position: "center", size: "medium" }),
          !l && c
        );
      }
      var U = r("GbHM"),
        P = r("t1oW"),
        k = r("UIKn"),
        q = r("V9K+"),
        x = r("UvP0"),
        H = (r("kMdN"), r("cbet")),
        V = r.n(H),
        K = r("oleE"),
        X = r("FA79"),
        Y = r("1ZD8"),
        $ = r("2KLf"),
        Z = r("0JCO"),
        J = r("m2nf"),
        ee = (r("msu0"), r("xoHR"));
      const te = new O.a("DiscoveryQueueWizard").Debug,
        re = "discoveryqueue2022",
        ie = {
          include_assets: !0,
          include_trailers: !0,
          include_basic_info: !0,
          include_tag_count: 20,
          include_release: !0,
        };
      function ne(e, t, r, n) {
        return Object(i.a)(this, void 0, void 0, function* () {
          let i = [];
          try {
            (i = yield P.a.Get().GetDiscoveryQueueAppsOfType(e, t, r)),
              n && -1 === i.findIndex((e) => e === n) && i.unshift(n),
              yield p.a.Get().QueueMultipleAppRequests(i, ie),
              yield Object(b.h)(i);
          } catch (e) {
            te("Failed getting discovery queue apps", e);
          }
          return i;
        });
      }
      const ae = (e) => {
        const {
            eStoreDiscoveryQueueType: t,
            strUserCountry: r,
            bWizardVisible: n,
            fnCloseModal: s,
            fnGetFriendState: c,
            includeAppID: u,
          } = e,
          [p, h] = a.useState([]),
          [_, v] = a.useState(1),
          [b, y] = a.useState(800),
          [f, g] = a.useState("DiscoveryQueue"),
          [w, I] = a.useState(!0),
          [C, A] = a.useState(!1),
          [B, G] = a.useState(!1),
          O = a.useRef(),
          E = a.useMemo(
            () => Math.max((window.innerWidth / 100) * 2.8 + 40, 12),
            [12, b]
          ),
          D = a.useCallback(
            (e) => {
              const t = Math.min(
                1400,
                window.innerWidth / 1.3 - 2 * E - 24 + 220
              );
              y(t);
            },
            [b, E]
          ),
          j = Object(S.j)(D),
          N = a.useMemo(() => (window.innerWidth - b - 2 * E) / 2, [b, E]),
          M = a.useMemo(() => (9 / 16) * (b - 0.3 * b), [b]),
          F = a.useMemo(() => Boolean(window.innerWidth < 1400), [b]),
          W = a.useCallback(
            (e) =>
              Object(i.a)(void 0, void 0, void 0, function* () {
                let i = yield ne(t, r, !e, e && u);
                e && !i.length && (i = yield ne(t, r, !0));
                let n = p;
                if (e) i.unshift(1);
                else {
                  const e = n.lastIndexOf(1);
                  -1 !== e && n.splice(e, 1);
                }
                i.push(0),
                  i.push(1),
                  (n = n.concat(i)),
                  h(n),
                  e || O.current.MoveRight(),
                  te("Loaded new discovery queue apps: ", i);
              }),
            [t, p, r, O, u]
          );
        a.useEffect(() => {
          W(!0).then(() => G(!0)),
            m.a.Get().HintLoad(),
            g(
              (() => {
                const e = Math.floor(1e6 * Math.random());
                return `DiscoveryQueue_${R.l.accountid}_${e}`;
              })()
            ),
            D();
        }, [t, r]);
        const k = a.useCallback(
            (e) =>
              0 == p[e]
                ? "Summary" + e
                : 1 == p[e]
                ? "Placeholder" + e
                : p[e].toString(),
            [p]
          ),
          q = a.useCallback((e) => b, [b]),
          x = a.useCallback(
            (e) => {
              te("Currently focused index: ", e);
            },
            [t, p]
          ),
          H = a.useCallback(
            (e, r, i, n) =>
              0 == p[e]
                ? a.createElement(me, {
                    key: k(e),
                    focused: _ === e,
                    fnLoadNextQueue: W,
                    fnClose: s,
                    index: e,
                    eStoreDiscoveryQueueType: t,
                    nItemHeight: i,
                    nItemWidth: r,
                  })
                : 1 == p[e]
                ? a.createElement(l.a, {
                    style: { width: r, height: M },
                    className: Object(U.a)(V.a.DiscoveryQueuePlaceholder),
                  })
                : a.createElement(se, {
                    bShowMinimizedDisplay: F,
                    eStoreDiscoveryQueueType: t,
                    focused: _ === e,
                    fnGetFriendState: c,
                    index: e,
                    fnOnAppFocus: x,
                    nItemHeight: M,
                    nItemWidth: r,
                    appID: p[e],
                  }),
            [t, x, p, _, M, s, W, F]
          ),
          K = a.useCallback((e, t) => {
            R.d.IN_GAMEPADUI || (A(e), I(t));
          }, []),
          X = a.useCallback((e) => 1 !== p[e], [p]),
          Y = a.useCallback(
            (e, r) => {
              te("New Focused Column: ", r, " Prev Focused Column: ", e),
                1 !== p[e] &&
                  0 !== p[e] &&
                  P.a.Get().SkipDiscoveryQueueItem(p[e], t),
                v(r);
            },
            [_, p]
          );
        return B
          ? a.createElement(
              z.l,
              { active: n },
              a.createElement(
                o.a,
                null,
                a.createElement(
                  Z.a,
                  { snr: re },
                  a.createElement(
                    l.a,
                    {
                      className: V.a.DiscoveryQueueCarouselCtn,
                      navEntryPreferPosition: d.d.LAST,
                      onCancelButton: s,
                      onCancelActionDescription: Object(Q.g)("#Button_Close"),
                    },
                    a.createElement(
                      l.a,
                      { className: V.a.TopBarCtn },
                      a.createElement(
                        "div",
                        { className: V.a.LearnMore },
                        Object(Q.m)(
                          "#DiscoveryQueue_LearnMore_Default",
                          a.createElement("a", {
                            className: V.a.LearnMoreLink,
                            href: ue(R.d.STORE_BASE_URL + "explore"),
                          })
                        )
                      ),
                      a.createElement(
                        "div",
                        { className: V.a.LabsHeader },
                        Object(Q.m)(
                          "#DiscoveryQueue_LabsHeader",
                          a.createElement("span", { className: V.a.Bold }),
                          a.createElement("a", {
                            className: V.a.LearnMoreLink,
                            href: ue(
                              R.d.COMMUNITY_BASE_URL +
                                "groups/SteamLabs/discussions/17/"
                            ),
                          })
                        )
                      ),
                      a.createElement(
                        "div",
                        { className: V.a.ControlsCtn },
                        !1,
                        a.createElement(
                          l.a,
                          {
                            focusable: !0,
                            className: V.a.QueueButton,
                            onClick: s,
                            onActivate: s,
                          },
                          a.createElement(L.Fb, null)
                        )
                      )
                    ),
                    a.createElement(
                      "div",
                      { ref: j, className: V.a.DiscoveryQueueWrapper },
                      a.createElement(
                        l.a,
                        {
                          onClick: (e) => O.current.MoveLeft(e),
                          className: Object(U.a)(
                            V.a.QueueNavArrow,
                            V.a.LeftArrow,
                            C && V.a.Enable
                          ),
                        },
                        a.createElement(L.rb, { angle: 180 })
                      ),
                      a.createElement(T, {
                        name: f,
                        className: V.a.DiscoveryQueueCarousel,
                        ref: O,
                        fnDoesItemTakeFocus: X,
                        fnOnFocusedColumnChange: Y,
                        fnUpdateArrows: K,
                        nNumItems: p.length,
                        nHeight: M,
                        scrollDuration: 400,
                        nItemHeight: M,
                        nItemMarginX: N,
                        fnGetColumnWidth: q,
                        fnGetId: k,
                        fnItemRenderer: H,
                        scrollToAlignment: "center",
                        nIndexLeftmost: 1,
                        initialColumn: 1,
                        autoFocus: !0,
                        scrollTiming: "cubic-in-out",
                        overscan: 5,
                      }),
                      a.createElement(
                        l.a,
                        {
                          onClick: (e) => O.current.MoveRight(e),
                          className: Object(U.a)(
                            V.a.QueueNavArrow,
                            V.a.RightArrow,
                            w && V.a.Enable
                          ),
                        },
                        a.createElement(L.rb, { angle: 0 })
                      )
                    )
                  )
                )
              )
            )
          : null;
      };
      function se(e) {
        var t;
        const {
            appID: r,
            nItemHeight: i,
            nItemWidth: o,
            fnOnAppFocus: c,
            index: d,
            focused: u,
            fnGetFriendState: p,
            eStoreDiscoveryQueueType: b,
            bShowMinimizedDisplay: g,
          } = e,
          [S] = Object(h.b)(r, ie),
          w = Object(n.d)(() => m.a.Get().BIsGameWishlisted(r)),
          I = Object(n.d)(() => m.a.Get().BIsGameIgnored(r)),
          C = Object(_.b)(null == S ? void 0 : S.GetTagIDs()),
          A = a.useRef(),
          B = a.useRef(),
          G = R.d.IN_GAMEPADUI,
          O = () => m.a.Get().UpdateAppIgnore(S.GetAppID(), !I),
          E = Object(Z.c)();
        a.useEffect(() => {
          I && D();
        }, [I]);
        const D = a.useCallback(() => {
          var e;
          B.current && (B.current.style.opacity = "1"),
            null === (e = null == A ? void 0 : A.current) ||
              void 0 === e ||
              e.pause();
        }, []);
        a.useEffect(
          () => (te("Index Focused: ", d, " Focus? ", u), u && T(), () => D()),
          [u]
        );
        const T = a.useCallback(() => {
            A.current &&
              !I &&
              (null == A || A.current.play(), (B.current.style.opacity = "0")),
              $.a.AddImpression(r, re),
              c(d);
          }, [c, d, I]),
          j = a.useCallback(() => {
            window.location.href = ue(S.GetStorePageURL() + "?inqueue=" + b, E);
          }, [S]);
        if (!S)
          return console.warn("Error: missing store item for appid ", r), null;
        let z = [],
          L = [];
        if (
          (C.forEach((e) => {
            z.length < 5 &&
              (m.a.Get().GetRecommendedTags().has(e.tagid)
                ? z.push(e.name)
                : L.push(e.name));
          }),
          z.length < 5)
        ) {
          const e = L.slice(0, 5 - z.length);
          z.push(...e);
        }
        let M = [];
        z.forEach((e, t) => {
          M.push(
            a.createElement("div", { key: t, className: V.a.TagEntry }, e)
          );
        });
        const F = { width: o || void 0, height: i || void 0 },
          P = () => {
            m.a
              .Get()
              .UpdateGameWishlist(r, !w, re)
              .then((e) => {
                e && e.success;
              });
          };
        let k = S.GetMicroTrailer();
        (null === (t = S.GetMicroTrailer()) || void 0 === t
          ? void 0
          : t.strWebMURL) ||
          (S.GetAllTrailers().BHasTrailers() &&
            (k = S.GetAllTrailers().GetHighlightTrailers()[0].GetTrailerMax()));
        const q = S.GetAssets().GetLibraryCapsuleURL();
        return a.createElement(
          l.a,
          {
            focusable: !0,
            style: F,
            className: Object(U.a)(V.a.DiscoveryQueueApp, u && V.a.Focused),
            onFocus: T,
            onBlur: D,
            onOptionsActionDescription: Object(Q.g)(
              "#DiscoveryQueue_AddToWishlist"
            ),
            onOptionsButton: P,
            onOKActionDescription: Object(Q.g)("#DiscoveryQueue_ViewStorePage"),
            onOKButton: j,
            onContextMenu: R.d.IN_GAMEPADUI
              ? (e) =>
                  (function (e, t, r, i) {
                    Object(N.a)(
                      a.createElement(W, {
                        snr: i,
                        storeitem: t,
                        fnNavigateToStore: r,
                      }),
                      e
                    ),
                      e.preventDefault(),
                      e.stopPropagation();
                  })(e, S, j, re)
              : null,
            onMenuActionDescription: Object(Q.g)(
              "#ActionButtonLabelContextMenu"
            ),
          },
          a.createElement(
            "div",
            { className: Object(U.a)(V.a.IgnoredCtn, I && V.a.Active) },
            a.createElement(
              "div",
              { className: Object(U.a)(V.a.IgnoredInfo, I && V.a.Active) },
              a.createElement(
                "div",
                { className: V.a.IgnoredTitle },
                Object(Q.g)("#DiscoveryQueue_Ignored")
              ),
              a.createElement(
                "div",
                { className: V.a.IgnoredDescription },
                Object(Q.g)("#DiscoveryQueue_IgnoredConfirmation")
              ),
              a.createElement(
                l.a,
                {
                  className: Object(U.a)(V.a.QueueButton, V.a.UndoIgnoreButton),
                  onClick: O,
                },
                R.d.IN_GAMEPADUI &&
                  a.createElement(f.a, {
                    button: x.a.X,
                    type: f.c.Light,
                    size: f.b.Medium,
                  }),
                Object(Q.g)("#DiscoveryQueue_Undo")
              )
            )
          ),
          a.createElement(
            l.a,
            { className: V.a.AppVideoCtn },
            a.createElement(
              "div",
              { className: Object(U.a)(V.a.WishlistBadge, w && V.a.Active) },
              Object(Q.g)("#Sale_OnWishlist")
            ),
            a.createElement("img", {
              ref: B,
              style: k && { position: "absolute" },
              className: V.a.AppMainCap,
              src: S.GetAssets().GetMainCapsuleURL(),
            }),
            k &&
              a.createElement(
                "video",
                {
                  ref: A,
                  className: V.a.AppVideo,
                  playsInline: !0,
                  muted: !0,
                  loop: !0,
                },
                a.createElement("source", {
                  src: k.strWebMURL,
                  type: "video/webm",
                }),
                a.createElement("source", {
                  src: k.strMP4URL,
                  type: "video/mp4",
                })
              )
          ),
          a.createElement(
            l.a,
            { className: V.a.AppDetailsCtn },
            a.createElement(
              "div",
              { className: V.a.AppDetailsCtnTop },
              a.createElement(
                "div",
                { className: V.a.AppDetailsHeader },
                q &&
                  a.createElement("img", {
                    className: V.a.AppLibraryHero,
                    src: q,
                  }),
                a.createElement(
                  "div",
                  { className: V.a.RightColumn },
                  a.createElement(
                    "div",
                    { className: V.a.AppName },
                    S.GetName()
                  ),
                  a.createElement(y.a, {
                    bSingleLineMode: !0,
                    info: { id: e.appID, type: Object(s.a)(S.GetAppType()) },
                  })
                )
              ),
              a.createElement("div", { className: V.a.AppTagsCtn }, M),
              a.createElement(
                "div",
                { className: V.a.AppReviews },
                a.createElement(v.b, {
                  bTruncateTotalReviews: g,
                  appInfo: { id: e.appID, type: Object(s.a)(S.GetAppType()) },
                })
              ),
              a.createElement(
                "div",
                { className: V.a.AppRelevanceCtn },
                a.createElement(oe, {
                  bShowAvatars: !g,
                  storeItem: S,
                  appID: r,
                  fnGetFriendState: p,
                })
              )
            ),
            !R.d.IN_GAMEPADUI &&
              a.createElement(
                "div",
                { className: V.a.AppActionButtonsCtn },
                a.createElement(
                  "div",
                  { className: V.a.AppActionJustButtonsCtn },
                  a.createElement(
                    "a",
                    {
                      className: Object(U.a)(V.a.QueueButton, V.a.Primary),
                      href: ue(S.GetStorePageURL() + "?inqueue=" + b, E),
                    },
                    G &&
                      a.createElement(f.a, {
                        button: x.a.Y,
                        type: f.c.Light,
                        size: f.b.Medium,
                        additionalClassName: V.a.YGlyph,
                      }),
                    " ",
                    Object(Q.g)("#DiscoveryQueue_ViewStorePage")
                  ),
                  a.createElement(
                    ee.a,
                    {
                      toolTipContent: Object(Q.g)(
                        "#EventEditor_AssociateSteamAccount_ttip"
                      ),
                    },
                    a.createElement(
                      l.a,
                      { focusable: !0, className: V.a.QueueButton, onClick: P },
                      G &&
                        a.createElement(f.a, {
                          button: x.a.Y,
                          type: f.c.Light,
                          size: f.b.Medium,
                          additionalClassName: V.a.YGlyph,
                        }),
                      " ",
                      w
                        ? Object(Q.g)("#DiscoveryQueue_RemoveFromWishlist")
                        : Object(Q.g)("#DiscoveryQueue_AddToWishlist")
                    )
                  )
                ),
                a.createElement(
                  l.a,
                  {
                    focusable: !0,
                    className: Object(U.a)(V.a.TextLink, V.a.IgnoreLink),
                    onClick: O,
                  },
                  Object(Q.g)("#DiscoveryQueue_IgnoreLink")
                )
              )
          )
        );
      }
      function oe(e) {
        var t, r, i, n, s, o, l, c, d;
        const {
            appID: u,
            fnGetFriendState: m,
            bShowAvatars: h,
            storeItem: _,
          } = e,
          v = Object(q.b)(u),
          b = Object(q.c)(u),
          y = Object(q.e)(u),
          f = Object(q.d)(),
          g = Object(Y.useQuery)(
            ["SimilarPlayedAppsLoad", u],
            () => {
              var e;
              return p.a
                .Get()
                .QueueMultipleAppRequests(
                  null === (e = y.data.arrSimilarPlayedApps) || void 0 === e
                    ? void 0
                    : e.map((e) => e.appid),
                  { include_basic_info: !0, include_assets: !0 }
                );
            },
            { enabled: y.isSuccess }
          );
        if (!(f && g.isSuccess && y.isSuccess && b.isSuccess && v.isSuccess))
          return a.createElement(F.a, { size: "medium", position: "center" });
        let S = [],
          w = [],
          I = [];
        const C = h ? 10 : 1;
        let A = [];
        for (
          let e = 0;
          e <
            (null === (t = b.data.accountids_recommended) || void 0 === t
              ? void 0
              : t.length) && e < C;
          e++
        ) {
          const t = K.a.InitFromAccountID(b.data.accountids_recommended[e]);
          S.push(t.ConvertTo64BitString()), A.push(t.GetAccountID());
        }
        for (
          let e = 0;
          e <
            (null === (r = v.data.in_wishlist) || void 0 === r
              ? void 0
              : r.length) && e < C;
          e++
        ) {
          const t = new K.a(v.data.in_wishlist[e].steamid);
          w.push(t.ConvertTo64BitString()), A.push(t.GetAccountID());
        }
        for (
          let e = 0;
          e <
            (null === (i = v.data.owns) || void 0 === i ? void 0 : i.length) &&
          e < C;
          e++
        ) {
          const t = new K.a(v.data.owns[e].steamid);
          I.push(t.ConvertTo64BitString()), A.push(t.GetAccountID());
        }
        !m && k.a.BHasWebAPIKey() && k.a.Get().BatchLoadPlayerSummaries(A);
        let B = [];
        y.data.arrSimilarPlayedApps &&
          y.data.arrSimilarPlayedApps.forEach((e) => {
            const t = p.a.Get().GetApp(e.appid);
            t
              ? B.push(
                  a.createElement(le, {
                    key: e.appid,
                    lifetimePlaytime: e.playtimeForever,
                    storeItem: t,
                  })
                )
              : console.error("Failed to load store data ", u);
          });
        const G = f.GetItemIDs().findIndex((e) => e.appid === u),
          O = y.data.bRecommendedByIR,
          E = null === (n = v.data.owns) || void 0 === n ? void 0 : n.length,
          R =
            null === (s = v.data.in_wishlist) || void 0 === s
              ? void 0
              : s.length,
          D =
            null === (o = b.data.accountids_recommended) || void 0 === o
              ? void 0
              : o.length;
        let T = 0;
        return (
          E > 0 && T++,
          R > 0 && T++,
          D > 0 && T++,
          O && T++,
          G >= 0 && T++,
          B.length > 0 && T++,
          te(
            "FriendsOwned: ",
            E,
            " FriendsWishlisted: ",
            R,
            "cRecommended: ",
            D
          ),
          a.createElement(
            a.Fragment,
            null,
            T > 0 &&
              a.createElement(
                "div",
                { className: V.a.RelevantCtn },
                a.createElement(
                  "div",
                  { className: V.a.WhyRelevant },
                  Object(Q.g)("#DiscoveryQueue_WhyRelevant")
                ),
                B.length > 0 &&
                  a.createElement(
                    de,
                    { header: Object(Q.g)("#DiscoveryQueue_SimilarGames") },
                    a.createElement(
                      "div",
                      { className: V.a.ReleventSimilarAppsCtn },
                      B
                    )
                  ),
                G >= 0 &&
                  a.createElement(de, {
                    header: Object(Q.n)(
                      "#DiscoveryQueue_TopSellers",
                      (G + 1).toLocaleString(),
                      a.createElement("span", {
                        className: V.a.RelevantTextBold,
                      })
                    ),
                  }),
                O &&
                  a.createElement(de, {
                    header: Object(Q.g)("#DiscoveryQueue_RecommendedByIR"),
                  }),
                a.createElement(ce, {
                  bShowAvatars: h,
                  count:
                    null === (l = v.data.owns) || void 0 === l
                      ? void 0
                      : l.length,
                  locToken: "#DiscoveryQueue_FriendsOwned",
                  arrSteamIDs: I,
                  fnGetFriendState: m,
                }),
                a.createElement(ce, {
                  bShowAvatars: h,
                  count:
                    null === (c = v.data.in_wishlist) || void 0 === c
                      ? void 0
                      : c.length,
                  locToken: "#DiscoveryQueue_FriendsWishlisted",
                  arrSteamIDs: w,
                  fnGetFriendState: m,
                }),
                a.createElement(ce, {
                  bShowAvatars: h,
                  count:
                    null === (d = b.data.accountids_recommended) || void 0 === d
                      ? void 0
                      : d.length,
                  locToken: "#DiscoveryQueue_FriendsRecommended",
                  arrSteamIDs: S,
                  fnGetFriendState: m,
                })
              ),
            a.createElement(
              "div",
              { className: Object(U.a)(V.a.AppDescription, T && V.a.Divider) },
              _.GetShortDescription()
            )
          )
        );
      }
      function le(e) {
        const { lifetimePlaytime: t, storeItem: r } = e;
        return a.createElement(
          "div",
          { className: V.a.SimilarAppCtn },
          a.createElement(
            v.d,
            {
              item: { type: "game", id: r.GetAppID() },
              bHidePrice: !0,
              hoverProps: {
                direction: "overlay",
                nBodyAlignment: 1,
                style: { minWidth: "320px", zIndex: 5e3 },
              },
            },
            a.createElement("img", {
              className: V.a.SimilarAppImg,
              src: r.GetAssets().GetSmallCapsuleURL(),
            })
          )
        );
      }
      function ce(e) {
        const {
          arrSteamIDs: t,
          count: r,
          fnGetFriendState: i,
          locToken: n,
          bShowAvatars: s,
        } = e;
        if (!r) return null;
        if (1 != r || s) {
          let e = [];
          return (
            t.forEach((t) => {
              const n = new K.a(t),
                o = i
                  ? i(n)
                  : k.a.Get().GetPlayerSummary(n.ConvertTo64BitString());
              o &&
                o.m_bInitialized &&
                (1 == r
                  ? e.push(
                      a.createElement(
                        l.a,
                        {
                          className: V.a.FriendBlockCtn,
                          key: n.ConvertTo64BitString(),
                          "data-miniprofile": "s" + n.ConvertTo64BitString(),
                        },
                        a.createElement(X.c, {
                          persona: o,
                          size: "Small",
                          statusPosition: "right",
                        }),
                        a.createElement(J.a, {
                          className: V.a.PersonaStatus,
                          persona: o,
                          eFriendRelationship: 3,
                          bIsSelf: !1,
                          strNickname: null,
                          bParenthesizeNicknames: !1,
                          bCompactView: !1,
                          bNoMask: !0,
                        })
                      )
                    )
                  : s &&
                    e.push(
                      a.createElement(X.c, {
                        key: n.ConvertTo64BitString(),
                        "data-miniprofile": "s" + n.ConvertTo64BitString(),
                        persona: o,
                        size: "Small",
                        statusPosition: "right",
                      })
                    ));
            }),
            a.createElement(
              de,
              {
                header: Object(Q.n)(
                  n,
                  r,
                  a.createElement("span", { className: V.a.RelevantTextBold })
                ),
              },
              e.length > 0 &&
                a.createElement("div", { className: V.a.FriendAvatarsCtn }, e)
            )
          );
        }
        {
          const e = new K.a(t[0]),
            r = i ? i(e) : k.a.Get().GetPlayerSummary(e.ConvertTo64BitString());
          return r && r.m_bInitialized
            ? a.createElement(de, {
                header: Object(Q.p)(
                  n + "_Single",
                  a.createElement(
                    "span",
                    {
                      "data-miniprofile": "s" + e.ConvertTo64BitString(),
                      className: V.a.RelevantTextBold,
                    },
                    r.m_strPlayerName
                  )
                ),
              })
            : null;
        }
      }
      function de(e) {
        const { children: t, header: r } = e;
        return a.createElement(
          "div",
          { className: V.a.RelevantItem },
          a.createElement(
            "div",
            { className: V.a.RelevantCheck },
            a.createElement(L.q, null)
          ),
          a.createElement(
            "div",
            { className: V.a.RelevantColumn },
            a.createElement("div", { className: V.a.ReleventText }, r),
            t
          )
        );
      }
      function ue(e, t) {
        const r = Object(u.d)(e, t);
        return R.d.IN_CLIENT ? "steam://openurl/" + r : r;
      }
      function me(e) {
        const {
            nItemHeight: t,
            nItemWidth: r,
            eStoreDiscoveryQueueType: i,
            fnClose: s,
            index: o,
            focused: d,
            fnLoadNextQueue: u,
          } = e,
          p = { width: r || void 0, height: t || void 0 },
          h = Object(n.d)(() => m.a.Get().GetWishlistGameCount()),
          _ = Object(n.d)(() => m.a.Get().GetIgnoredAppsCount()),
          v = Object(n.d)(() =>
            P.a.Get().GetTotalSkippedAppsForDiscoveryQueue(i)
          ),
          [b, y] = a.useState(!1),
          [f, g] = a.useState(!0),
          [S, w] = a.useState(null),
          I = Object(Z.c)(),
          C = a.useCallback(() => {
            y(!0),
              u(!1).then(() => {
                y(!0), g(!1);
              });
          }, []);
        a.useEffect(() => {
          d &&
            P.a.Get().BIsSaleActive() &&
            !S &&
            P.a
              .Get()
              .GetNumTradingCardsEarned()
              .then((e) => {
                1 === e.eresult && w(e);
              });
        }, [d]);
        const A = P.a.Get().BIsSaleActive() && S;
        return a.createElement(
          c.a,
          {
            style: p,
            className: Object(U.a)(
              V.a.SummaryCtn,
              V.a.DiscoveryQueueApp,
              d && V.a.Focused
            ),
            onOptionsActionDescription: Object(Q.g)(
              "#DiscoveryQueue_ViewWishlist"
            ),
            onOptionsButton: () => {
              window.location.href = ue(R.d.STORE_BASE_URL + "wishlist", I);
            },
          },
          a.createElement(
            "div",
            { className: V.a.SummaryContentCtn },
            a.createElement(
              "div",
              { className: V.a.SummaryTitle },
              Object(Q.g)("#DiscoveryQueue_SummaryTitle")
            ),
            a.createElement(
              "div",
              { className: V.a.YourStats },
              Object(Q.g)("#DiscoveryQueue_YourStats")
            ),
            a.createElement(
              l.a,
              { "flow-children": "row", className: V.a.SummaryGrid },
              a.createElement(
                "div",
                { className: V.a.GridItem },
                a.createElement(
                  "div",
                  { className: V.a.GridTitle },
                  Object(Q.g)("#DiscoveryQueue_ViewedCaps")
                ),
                a.createElement(
                  "div",
                  { className: V.a.GridNumber },
                  v.toLocaleString()
                ),
                a.createElement(
                  "div",
                  { className: V.a.GridSubTitle },
                  Object(Q.g)("#DiscoveryQueue_Titles")
                )
              ),
              a.createElement(
                "div",
                { className: V.a.GridItem },
                a.createElement(
                  "div",
                  { className: V.a.GridTitle },
                  Object(Q.g)("#DiscoveryQueue_WishlistedCaps")
                ),
                a.createElement(
                  "div",
                  { className: V.a.GridNumber },
                  h.toLocaleString()
                ),
                a.createElement(
                  "a",
                  {
                    className: Object(U.a)(V.a.GridSubTitle, V.a.TextLink),
                    href: ue(R.d.STORE_BASE_URL + "wishlist", I),
                  },
                  Object(Q.g)("#DiscoveryQueue_ViewWishlist")
                )
              ),
              a.createElement(
                "div",
                { className: V.a.GridItem },
                a.createElement(
                  "div",
                  { className: V.a.GridTitle },
                  Object(Q.g)("#DiscoveryQueue_IgnoredCaps")
                ),
                a.createElement(
                  "div",
                  { className: V.a.GridNumber },
                  _.toLocaleString()
                ),
                a.createElement(
                  "a",
                  {
                    className: Object(U.a)(V.a.GridSubTitle, V.a.TextLink),
                    href: ue(R.d.STORE_BASE_URL + "account/notinterested", I),
                  },
                  Object(Q.g)("#DiscoveryQueue_ViewIgnored")
                )
              )
            ),
            a.createElement(
              l.a,
              { className: V.a.SummaryActionButtonsCtn },
              a.createElement(
                l.a,
                {
                  className: Object(U.a)(V.a.QueueButton, V.a.Wide),
                  focusable: !0,
                  onClick: s,
                },
                Object(Q.g)("#ActionButtonLabelDone")
              ),
              f &&
                a.createElement(
                  l.a,
                  {
                    className: Object(U.a)(
                      b && V.a.Disabled,
                      V.a.QueueButton,
                      V.a.Primary,
                      V.a.Wide
                    ),
                    focusable: !0,
                    onClick: C,
                  },
                  b ? Object(Q.g)("#Loading") : Object(Q.g)("#Button_Continue")
                )
            )
          ),
          A &&
            a.createElement(
              l.a,
              { className: V.a.TradingCardCtn },
              a.createElement("img", {
                className: V.a.TradingCardImage,
                src:
                  R.d.MEDIA_CDN_URL +
                  "store/promo/summer2022/card_stack.png?v-1",
              }),
              a.createElement(
                l.a,
                { className: V.a.TradingCardColumn },
                a.createElement(
                  "div",
                  { className: V.a.TradingCardText },
                  Object(Q.m)(
                    (null == S ? void 0 : S.earned_today) > 0
                      ? "#DiscoveryQueue_TradingCardsEarned_Today"
                      : "#DiscoveryQueue_TradingCards_Desc",
                    a.createElement("a", {
                      className: V.a.TextLink,
                      href: ue(
                        R.d.STORE_BASE_URL + "sale/summersaletradingcards",
                        I
                      ),
                    })
                  )
                )
              )
            )
        );
      }
    },
    UIKn: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return d;
      });
      var i = r("mrSG"),
        n = (r("q1tI"), r("vDqi")),
        a = r.n(n),
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
            a.a
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
        Object(i.b)([l.C], d.prototype, "m_mapPlayerSummaries", void 0);
    },
    "V9K+": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return G;
      }),
        r.d(t, "c", function () {
          return O;
        }),
        r.d(t, "e", function () {
          return E;
        }),
        r.d(t, "d", function () {
          return R;
        }),
        r.d(t, "a", function () {
          return D;
        });
      var i = r("mrSG"),
        n = (r("q1tI"), r("msu0"), r("Zdsb"), r("2vnA"), r("9XWO")),
        a = r("ztGc"),
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
      class u extends l {
        constructor(e = null) {
          super(),
            u.prototype.recommendationid || o.a(u.M()),
            l.initialize(this, e, 0, -1, [40], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
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
          return "RecommendationDetails";
        }
      }
      class m extends l {
        constructor(e = null) {
          super(),
            m.prototype.appid || o.a(m.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  appid: { n: 1, br: o.d.readUint32, bw: o.h.writeUint32 },
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
      class h extends l {
        constructor(e = null) {
          super(),
            h.prototype.recommendations || o.a(h.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { recommendations: { n: 1, c: u, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = o.e(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return o.g(h.M(), e, t);
        }
        static fromObject(e) {
          return o.c(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.b(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.f(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      var _;
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
              h,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          });
      })(_ || (_ = {}));
      var v = r("qisX"),
        b = r("1ZD8"),
        y = r("/Q1a"),
        f = r("vDqi"),
        g = r.n(f),
        S = (r("XThB"), r("yfxr"), r("FmLm")),
        w = r("FQoL"),
        I = (r("X/lQ"), r("Ys0h")),
        C = r("f5iL");
      class A {
        constructor(e, t) {
          (this.m_ServiceTransport = e.GetServiceTransport()),
            (this.m_DynamicStore = t);
        }
        ExecuteQuery(e, t, r, a) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const i = n.b.Init(v.c);
            Object(w.b)(i),
              r && Object(w.c)(i, r),
              a && i.Body().set_override_country_code(a),
              t.filters || (t.filters = {}),
              (t.filters.content_descriptors_excluded =
                this.m_DynamicStore.GetExcludedContentDescriptor()),
              i.Body().set_query(v.b.fromObject(t)),
              i.Body().set_query_name(e);
            const s = yield v.d.Query(this.m_ServiceTransport, i);
            if (1 != s.GetEResult()) throw s.GetEResult();
            return new B(s, r);
          });
        }
      }
      class B {
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
      function G(e) {
        return Object(b.useQuery)(D.Get().GetFriendsGameplayInfoKey(e), () =>
          D.Get().LoadFriendsGameplayInfo(e)
        );
      }
      function O(e) {
        return Object(b.useQuery)(D.Get().GetFriendsRecommendedAppKey(e), () =>
          D.Get().LoadFriendsRecommendedApp(e)
        );
      }
      function E(e) {
        return Object(b.useQuery)(D.Get().GetStoreRelevanceDataAppKey(e), () =>
          D.Get().LoadStoreRelevanceData(e)
        );
      }
      function R() {
        const { data: e } = (function (e, t, r, i, n) {
          const a = ["StoreQueryStore", r, i, n];
          return Object(b.useQuery)(a, () => e.ExecuteQuery(t, r, i, n), {
            staleTime: 36e5,
          });
        })(D.Get().StoryQueryStore, "App Relevance Store Top Sellers", {
          sort: 11,
          start: 0,
          count: 100,
        });
        return e;
      }
      class D {
        static Init(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            (D.Get().m_transport = e.GetServiceTransport()),
              (D.Get().m_DynamicUserStore = yield S.a.Get().HintLoad()),
              (D.Get().m_StoreQueryStore = new A(
                e,
                D.Get().m_DynamicUserStore
              ));
          });
        }
        static BIsLoaded() {
          return Boolean(D.Get().m_transport && D.Get().m_StoreQueryStore);
        }
        static Get() {
          return (
            this.s_AppRelevanceStore || (this.s_AppRelevanceStore = new D()),
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
          return Object(i.a)(this, void 0, void 0, function* () {
            const t = n.b.Init(a.c);
            t.Body().set_appid(e);
            const r = yield a.o.GetFriendsGameplayInfo(this.m_transport, t),
              i = r.GetEResult();
            if (1 == i) return r.Body().toObject();
            throw `Error ${i} failed to call GetFriendsGameplayInfo ${e}`;
          });
        }
        GetFriendsRecommendedAppKey(e) {
          return `FriendsRecommendedAppKey_${e}`;
        }
        LoadFriendsRecommendedApp(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const t = n.b.Init(m);
            t.Body().set_appid(e);
            const r = yield _.GetFriendsRecommendedApp(this.m_transport, t),
              i = r.GetEResult();
            if (1 == i) return r.Body().toObject();
            throw `Error ${i} failed to call GetFriendsRecommendedApp ${e}`;
          });
        }
        GetStoreRelevanceDataAppKey(e) {
          return `StoreRelevanceDataAppKey_${e}`;
        }
        LoadStoreRelevanceData(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            let t = { appid: e },
              r = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
            const i = (yield g.a.get(
              `${y.d.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: t, withCredentials: !0, timeout: 1e4 }
            )).data;
            return (
              i &&
                1 == i.success &&
                (i.results.similar_played_apps &&
                  (r.arrSimilarPlayedApps = i.results.similar_played_apps.map(
                    (e) => ({
                      appid: e.appid,
                      playtimeForever: e.playtime_forever,
                    })
                  )),
                i.results.recommended_by_ir && (r.bRecommendedByIR = !0)),
              r
            );
          });
        }
      }
      D.s_AppRelevanceStore = null;
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
        RelevantColumn: "discoveryqueuewizard_RelevantColumn_1HcOX",
        RelevantItem: "discoveryqueuewizard_RelevantItem_3I77j",
        RelevantCheck: "discoveryqueuewizard_RelevantCheck_qKF9P",
        IgnoreLink: "discoveryqueuewizard_IgnoreLink_2OinP",
        AppActionButtonsCtn: "discoveryqueuewizard_AppActionButtonsCtn_2bIsf",
        AppActionJustButtonsCtn:
          "discoveryqueuewizard_AppActionJustButtonsCtn_10l0M",
        QueueButton: "discoveryqueuewizard_QueueButton_19cHb",
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
        SummaryContentCtn: "discoveryqueuewizard_SummaryContentCtn_M522o",
        SummaryTitle: "discoveryqueuewizard_SummaryTitle_W4ekX",
        YourStats: "discoveryqueuewizard_YourStats_8PO3T",
        SummaryGrid: "discoveryqueuewizard_SummaryGrid_1b0jZ",
        GridItem: "discoveryqueuewizard_GridItem_12Sab",
        GridTitle: "discoveryqueuewizard_GridTitle_1vnt8",
        GridNumber: "discoveryqueuewizard_GridNumber_-Q4Ax",
        GridSubTitle: "discoveryqueuewizard_GridSubTitle_1FQzN",
        SummaryActionButtonsCtn:
          "discoveryqueuewizard_SummaryActionButtonsCtn_1hRNc",
        TopBarCtn: "discoveryqueuewizard_TopBarCtn_24gmm",
        revealTopBarCtn: "discoveryqueuewizard_revealTopBarCtn_2Gt6G",
        LearnMoreLink: "discoveryqueuewizard_LearnMoreLink_3bCDZ",
        ControlsCtn: "discoveryqueuewizard_ControlsCtn_3UbRl",
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
        Bold: "discoveryqueuewizard_Bold_1SxI5",
        FriendBlockCtn: "discoveryqueuewizard_FriendBlockCtn_2a8Fg",
        PersonaStatus: "discoveryqueuewizard_PersonaStatus_3HMhz",
      };
    },
    o9zL: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return u;
      });
      var i = r("mrSG"),
        n = r("q1tI"),
        a = r("/Q1a"),
        s = r("t1oW"),
        o = r("V9K+"),
        l = r("UIKn"),
        c = r("rmVU"),
        d = r("C1a2");
      function u() {
        const [e, t] = Object(n.useState)(!1);
        return (
          Object(n.useEffect)(() => {
            if (!e) {
              const e = Object(a.h)(
                "loyalty_webapi_token",
                "application_config"
              );
              if ("string" == typeof e) {
                (() =>
                  Object(i.a)(this, void 0, void 0, function* () {
                    s.a.BHasTransport() ||
                      s.a.Init(
                        new c.a(a.d.WEBAPI_BASE_URL, e).GetServiceTransport()
                      ),
                      o.a.BIsLoaded() ||
                        (yield o.a.Init(new c.a(a.d.WEBAPI_BASE_URL, e))),
                      l.a.BHasWebAPIKey() ||
                        l.a.Init(new c.a(a.d.WEBAPI_BASE_URL, e)),
                      Object(d.a)(e),
                      t(!0);
                  }))();
              } else a.l.logged_in || t(!0);
            }
          }, [e]),
          e
        );
      }
    },
    t1oW: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return l;
      });
      var i = r("mrSG"),
        n = (r("msu0"), r("Zdsb"), r("2vnA")),
        a = r("9XWO"),
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
          return Object(i.a)(this, void 0, void 0, function* () {
            const i = a.b.Init(s.a);
            i.Body().set_queue_type(e),
              i.Body().set_country_code(t),
              i.Body().set_rebuild_queue(r),
              i.Body().set_rebuild_queue_if_stale(!0);
            const n = yield s.d.GetDiscoveryQueue(this.m_transport, i),
              o = n.GetEResult();
            return (
              1 == o
                ? this.m_mapDiscoveryQueues.set(e, n.Body().toObject())
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
          return Object(i.a)(this, void 0, void 0, function* () {
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
          return Object(i.a)(this, void 0, void 0, function* () {
            const r = this.GetSkippedAppKey(e, t);
            if (!this.m_mapSkippedApps.has(r)) {
              this.m_mapSkippedApps.set(r, !0);
              const i = a.b.Init(s.c);
              i.Body().set_appid(e), i.Body().set_queue_type(t);
              const n = (yield s.d.SkipDiscoveryQueueItem(
                this.m_transport,
                i
              )).GetEResult();
              1 != n &&
                29 != n &&
                (console.warn("Error", n, "failed to skip appid ", e),
                this.m_mapSkippedApps.delete(r));
            }
          });
        }
        GetNumTradingCardsEarned() {
          return Object(i.a)(this, void 0, void 0, function* () {
            const e = { earned_today: 0, earned_lifetime: 0, eresult: 2 },
              t = Date.now(),
              r =
                864e5 *
                  Math.floor((t - this.m_dateSaleStart.getTime()) / 864e5) +
                this.m_dateSaleStart.getTime(),
              i = a.b.Init(o.c);
            let n = yield o.d.GetNumTradingCardsEarned(this.m_transport, i),
              s = n.GetEResult();
            return 1 !== s
              ? ((e.eresult = s), e)
              : ((e.earned_lifetime = n.Body().num_trading_cards()),
                i.Body().set_timestamp_start(r / 1e3),
                (n = yield o.d.GetNumTradingCardsEarned(this.m_transport, i)),
                (s = n.GetEResult()),
                1 != s
                  ? ((e.eresult = s), e)
                  : ((e.earned_today = n.Body().num_trading_cards()),
                    (e.eresult = 1),
                    e));
          });
        }
      }
      (l.s_DiscoveryQueueStore = null),
        Object(i.b)([n.C], l.prototype, "m_mapDiscoveryQueues", void 0);
    },
  },
]);

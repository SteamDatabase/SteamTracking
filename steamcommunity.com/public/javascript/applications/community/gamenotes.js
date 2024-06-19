/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6838],
  {
    25251: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Page: "ZUB8zp36DGzB2Ge1HGlBi",
        Content: "_1aZdz4QMkvBwHD48GvZNIn",
        NotesPagedSettings: "_1dBCPkyWYRX7FwOcOEDrOo",
        NotePage: "_2r0iBG84H79jitflfzloHL",
        PinnedView: "_3mIftPW9bArr_wJxHwxTnq",
        Toolbar: "A6mhRr1dqvr5OHl9MX6_3",
        NoteActions: "_3uGOyXFBdLEV_F6dICiSwx",
        NoteEditorArea: "_3WOF4kDR1RbjelZgS8Qd-H",
        EditorInput: "_3zWunJFZU6u89fIABN9Gkf",
        NewNoteButton: "_2J6kvK4A5CTbr_o4ZYqycZ",
        CloseWindowButton: "G0FghhaByLIrcEuYSV6qh",
      };
    },
    31643: (e) => {
      e.exports = {
        Hover: "_3tNcTScSfJlcy37nRZQjPq",
        Link: "ovQsFIS2bmQSO6q9lpMcl",
        LinkHelp: "_2Az4l-ByEoCD6T4yVffGuV",
      };
    },
    56836: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "_3lEt5gxDF4ACrtnP4U7Z-D",
        ToolbarRow: "_2H40REphoCtny5VfHm5Ad9",
        CommandButton: "_1-R1Ud0bImFcswoqa8FbU",
        Toggled: "_41y1pGJEo9TqrhjUqDK2h",
        Gap: "_2BPaPn42NspKTF-dGx6Il1",
        Spacer: "_2Zt31S-3IT7JYy5IswjnFf",
        ExpandButton: "_3454x5BD8OL9OyBzYOvsv8",
      };
    },
    42695: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => d });
      var o = n(85556),
        r = n(79545),
        a = n(14351),
        l = n(68785),
        i = n(46984),
        s = n(16997);
      const c = new l.sO("ReactUsageReporting").Debug,
        m = 1e3 * i._H.PerMinute;
      class u {
        constructor() {
          (this.m_transport = null),
            (this.m_mapRoutes = new Map()),
            (this.m_mapComponents = new Map()),
            (this.m_mapActions = new Map()),
            (this.m_reportCount = 0),
            (this.m_bInitialized = !1);
        }
        Init(e, t, n) {
          (this.m_bInitialized = !0),
            (this.m_strProduct = e),
            (this.m_strVersion = t),
            (this.m_transport = n),
            this.ScheduleSend();
        }
        ScheduleSend() {
          setTimeout(() => this.CheckSend(), m);
        }
        CheckSend() {
          this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend();
        }
        ReportInternal(e, t) {
          t.has(e) || t.set(e, 0),
            t.set(e, t.get(e) + 1),
            this.m_reportCount++,
            this.ShouldSendMetricsImmediately() && this.SendMetrics();
        }
        ReportRouteMatch(e) {
          c("Route match: " + e), this.ReportInternal(e, this.m_mapRoutes);
        }
        ReportTrackedComponent(e) {
          c("Tracked component: " + e),
            this.ReportInternal(e, this.m_mapComponents);
        }
        ReportTrackedAction(e) {
          c("User action: " + e), this.ReportInternal(e, this.m_mapActions);
        }
        ShouldSendMetricsImmediately() {
          return this.m_reportCount >= 100;
        }
        SendMetrics() {
          if (!this.m_bInitialized) return;
          const e = r.gA.Init(a.YH);
          e.Body().set_product(this.m_strProduct),
            e.Body().set_version(this.m_strVersion),
            this.m_mapRoutes.forEach((t, n) => {
              let o = new a.Be();
              o.set_route(n), o.set_count(t), e.Body().add_routes(o);
            }),
            this.m_mapComponents.forEach((t, n) => {
              let o = new a.Hy();
              o.set_component(n), o.set_count(t), e.Body().add_components(o);
            }),
            this.m_mapActions.forEach((t, n) => {
              let o = new a.Js();
              o.set_action(n), o.set_count(t), e.Body().add_actions(o);
            }),
            this.m_mapRoutes.clear(),
            this.m_mapComponents.clear(),
            this.m_mapActions.clear(),
            (this.m_reportCount = 0),
            a.TF.ReportReactUsage(this.m_transport, e);
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
      }
      (0, o.gn)([s.a], u.prototype, "CheckSend", null);
      const d = new u();
    },
    31276: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => it });
      var o = n(47427),
        r = n(8285);
      const a = {
        List: () => "/notes/list",
        AppNotes: (e, t) => `/notes/app/${e}/${null != t ? t : ""}`,
        ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${null != t ? t : ""}`,
      };
      var l = n(28017),
        i = n(85556),
        s = n(42718);
      function c(e) {
        return e.trim();
      }
      function m(e) {
        return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
      }
      const u = o.createContext({ mode: "page", store: null });
      function d(e) {
        const {
            mode: t,
            store: n,
            closePopup: r,
            bPinnedView: a,
            onClickURL: l,
            bSpellcheckEnabled: i = !0,
            setSpellcheckEnabled: s,
            children: c,
          } = e,
          m = o.useMemo(
            () => ({
              mode: t,
              store: n,
              closePopup: r,
              bPinnedView: a,
              onClickURL: l,
              bSpellcheckEnabled: i,
              setSpellcheckEnabled: s,
            }),
            [t, n, r, a, l, i, s],
          );
        return o.createElement(u.Provider, { value: m }, c);
      }
      function p() {
        return o.useContext(u).closePopup;
      }
      function h() {
        return o.useContext(u).store;
      }
      var f = n(31846);
      function b(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", c(e.shortcut)];
      }
      function g(e) {
        const t = h();
        return (0, s.useQuery)(
          b(e),
          () =>
            (0, i.mG)(this, void 0, void 0, function* () {
              return (yield t.GetGameNotesList(e, !0)) || [];
            }),
          { enabled: !!e },
        );
      }
      function E(e, t) {
        const n = (0, s.useQueryClient)(),
          o = h(),
          r = e.id;
        return (0, s.useMutation)(
          () =>
            (0, i.mG)(this, void 0, void 0, function* () {
              return e.not_persisted ? r : yield o.DeleteGameNote(m(e), r);
            }),
          {
            onSuccess() {
              _(n, m(e), (e) => e.filter((e) => e.id != r)), t && t();
            },
          },
        );
      }
      function _(e, t, n) {
        e.getQueryData(b(t)) && e.setQueryData(b(t), n);
      }
      function v(e, t) {
        return o.useMemo(
          () =>
            t
              ? (function (e) {
                  return { shortcut: c(e) };
                })(t)
              : (function (e) {
                  return { appid: e };
                })(e),
          [e, t],
        );
      }
      var T = n(73799),
        k = n.n(T),
        C = n(79545),
        N = n(18015),
        y = n(40057),
        S = n(65255),
        w = n(77936);
      let x;
      const G = 864e5;
      function B(e) {
        return `appinfo_${e}_${S.De.LANGUAGE}`;
      }
      function F(e) {
        return Boolean(e && Date.now() - e.timeCached < G);
      }
      function P(e) {
        const t = (0, y.bY)(),
          n = (0, y.y$)();
        return (0, s.useQuery)(
          ["appinfo", e],
          () =>
            (0, i.mG)(this, void 0, void 0, function* () {
              return (function (e, t) {
                return (
                  x ||
                    (x = new (k())(
                      (n) =>
                        (0, i.mG)(this, void 0, void 0, function* () {
                          const o = new Map();
                          (yield Promise.all(n.map((e) => t.GetObject(B(e)))))
                            .filter(F)
                            .forEach(({ value: e }) => o.set(e.appid, e));
                          const r = n.slice().filter((e) => !o.has(e));
                          if (r.length) {
                            const n = C.gA.Init(N.Fi);
                            n.Body().set_language((0, w.jM)(S.De.LANGUAGE)),
                              n.Body().set_appids(r);
                            const a = yield N.AE.GetApps(e, n);
                            if (1 != a.GetEResult()) throw a.GetErrorMessage();
                            a.Body()
                              .toObject()
                              .apps.forEach((e) => {
                                t.StoreObject(B(e.appid), {
                                  timeCached: Date.now(),
                                  value: e,
                                }),
                                  o.set(e.appid, e);
                              });
                          }
                          return n.map((e) => o.get(e));
                        }),
                      { cache: !1 },
                    )),
                  x
                );
              })(t, n).load(e);
            }),
          { staleTime: G, enabled: !!e },
        ).data;
      }
      var D = n(46882);
      function I() {
        const { data: e, isLoading: t } = (function () {
          const e = h();
          return (0, s.useQuery)(["GameNotes", "GamesWithNotes"], () =>
            e.GetGamesWithNotes(),
          );
        })();
        return t
          ? o.createElement(D.V, { msDelayAppear: 300 })
          : o.createElement(
              "div",
              null,
              o.createElement(
                "h1",
                null,
                (0, f.Xx)("#UserGameNotes_NotesList"),
              ),
              o.createElement(
                "ul",
                null,
                e.map((e) => o.createElement(L, { key: e.appid, game: e })),
              ),
            );
      }
      function L(e) {
        const { game: t } = e,
          n = P(t.appid);
        return o.createElement(
          "li",
          null,
          o.createElement(
            l.rU,
            { to: a.AppNotes(t.appid) },
            null == n ? void 0 : n.name,
          ),
        );
      }
      var R = n(42695),
        H = n(1485),
        A = n(58538),
        U = n(50898),
        M = n(20564),
        O = n(31934),
        X = n(4005),
        j = n(28147),
        $ = n(6673),
        W = n(32300),
        V = n(93109),
        z = n(23126),
        Z = n(91618),
        Q = n(13974),
        q = n(35643),
        Y = n(50423),
        K = n(31643);
      function J() {
        const [e, t] = o.useState(),
          [n, r] = o.useState(),
          [a, l] = o.useState(),
          i = o.useMemo(
            () =>
              new X.Sy({
                props: {
                  handleDOMEvents: {
                    mouseover: (e, n) => {
                      const o = n.target;
                      if ((0, Y.GB)(o) && "A" == o.nodeName) {
                        const e = o.getBoundingClientRect();
                        t(e.left + e.width / 2), r(e.bottom + 2), l(o);
                      } else l(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (l(void 0), !1),
                  },
                },
              }),
            [],
          );
        if (((0, W.U$)(i), !a)) return null;
        const s = a.getAttribute("href");
        return o.createElement(
          ee,
          { top: n, left: e },
          o.createElement("div", { className: K.Link }, s),
          o.createElement(
            "div",
            { className: K.LinkHelp },
            (0, f.Xx)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function ee(e) {
        const { top: t, left: n, children: r } = e,
          [a, l] = o.useState(0),
          i = o.useRef();
        o.useLayoutEffect(() => {
          l(i.current.getBoundingClientRect().width);
        }, [t, n, r]);
        const s = { top: `${t}px`, left: `${Math.max(n - a / 2, 12)}px` };
        return o.createElement(
          "div",
          { className: K.Hover, style: s, ref: i },
          r,
        );
      }
      var te = n(14609),
        ne = n(13129),
        oe = n(20417),
        re = n(13499),
        ae = n(37563),
        le = n(56836);
      function ie(e) {
        const {
            schemaConfig: t,
            bbcode: n,
            className: r,
            onUpdate: a,
            refView: l,
            onClickURL: i,
            bSpellcheckEnabled: s = !0,
            panelProps: c,
            children: m,
          } = e,
          [u, d] = o.useState(),
          p = o.useRef(),
          h = o.useRef();
        h.current = i || se;
        const b = o.useCallback(
          (e) => {
            var n, o;
            if (!e)
              return void (
                null === (n = p.current) ||
                void 0 === n ||
                n.destroy()
              );
            const r = p.current;
            r && r.destroy(),
              (p.current = new O.tk(e, {
                state:
                  null !== (o = null == r ? void 0 : r.state) && void 0 !== o
                    ? o
                    : X.yy.create({ schema: t.pm_schema }),
                handleClickOn: (...e) =>
                  (function (e, t, n, o, r, a, l, i) {
                    if (i && (l.ctrlKey || 1 == l.button)) {
                      const n = r
                        .resolve(o - a)
                        .marks()
                        .find((t) => t.type == e.marks.link);
                      if (n)
                        return t(n.attrs.href, l.view), l.preventDefault(), !0;
                    }
                    return !1;
                  })(t.pm_schema, h.current, ...e),
                clipboardTextParser: (...e) =>
                  (function (e, t, n, o, r) {
                    let a,
                      l = [];
                    for (; (a = t.match(re.H7)); )
                      a.index > 0 && l.push(e.text(t.substring(0, a.index))),
                        l.push(
                          e.text(a[0], [
                            e.marks.link.create({ href: (0, re.Pm)(a[0]) }),
                          ]),
                        ),
                        (t = t.substring(a.index + a[0].length));
                    t.length && l.push(e.text(t));
                    return new z.p2(z.HY.from(l), n.start(), n.end());
                  })(t.pm_schema, ...e),
              })),
              d(p.current),
              r || p.current.focus();
          },
          [t],
        );
        o.useEffect(() => {
          u && u.updateState((0, j.B)((0, $.B)(n, t), t.pm_schema, u.state));
        }, [t, n, u]),
          (0, oe.LY)(l, u);
        const {
            refDiv: g,
            onActivate: E,
            onGamepadDirection: _,
          } = (function (e) {
            const t = (0, ae.qt)(),
              n = o.useRef(),
              r = o.useCallback(
                (e) => {
                  (0, q.LP)(e, t.IN_VR);
                },
                [t.IN_VR],
              ),
              a = (0, q.CJ)({ onTextEntered: r }, () => {
                var e;
                return null === (e = n.current) || void 0 === e
                  ? void 0
                  : e.ownerDocument.defaultView;
              }),
              l = o.useCallback(() => {
                var t, o;
                if (
                  (a.ShowVirtualKeyboard(),
                  !(null === (t = e.current) || void 0 === t
                    ? void 0
                    : t.hasFocus()))
                ) {
                  null === (o = e.current) || void 0 === o || o.focus();
                  let t = e.current.dom.childNodes;
                  for (let o = 0; o < t.length; ++o) {
                    let r = t[o],
                      a = r.offsetTop;
                    if (void 0 !== a && a >= n.current.scrollTop) {
                      let t = r.getBoundingClientRect();
                      (0, V.VM)(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [a, e]),
              i = o.useCallback((e) => e.currentTarget == e.target, []),
              s = (0, Q.pj)(n, null, null, i);
            return { refDiv: n, onActivate: l, onGamepadDirection: s };
          })(p),
          v = (0, oe.BE)(g, b);
        return o.createElement(
          W.xh,
          { view: u },
          o.createElement(
            Z.s,
            Object.assign(
              {
                key: `editordiv_${s}`,
                className: (0, ne.Z)(r, le.Container),
                ref: v,
                spellCheck: s,
                focusable: !0,
                onActivate: E,
                onOKActionDescription: (0, f.Xx)("#UserGameNotes_Edit"),
                onGamepadDirection: _,
              },
              c,
            ),
          ),
          o.createElement(W.l8, { onUpdate: a, schema: t.pm_schema }),
          o.createElement(J, null),
          m,
        );
      }
      function se(e, t) {
        (0, te.b8)(t, e);
      }
      var ce = n(59728),
        me = n(25251),
        ue = n(79500),
        de = n(85314);
      const pe = {
          nodes: Object.assign({}, ue.Pp.nodes),
          marks: Object.assign({}, ue.Pp.marks),
        },
        he = new de.F(pe);
      var fe = n(80878);
      const be =
        n.p +
        "images/applications/community/image_error.svg?v=valveisgoodatcaching";
      function ge(e) {
        const { uploadImage: t, nodeType: n, nMaxImageSize: r = _e } = e;
        return (
          (0, W.U$)(
            o.useMemo(
              () =>
                new X.Sy({
                  key: new X.H$(`PMUploadImage_${n.name}`),
                  props: {
                    transformPasted: (...e) =>
                      (function (e, t, n, o) {
                        let r = !1;
                        if (
                          (n.content.descendants((n, o) => {
                            n.type == e && n.attrs.src.length > t && (r = !0);
                          }),
                          r)
                        ) {
                          let t = [
                            e.create({
                              src: be,
                              title: (0, f.Xx)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new z.p2(z.HY.from(t), 0, 0);
                        }
                        return n;
                      })(n, r, ...e),
                    handlePaste: (e, o, r) => {
                      const a = [];
                      r.content.descendants((e) => {
                        e.type == n &&
                          e.attrs.src.startsWith("data:image") &&
                          a.push(e.attrs.src);
                      }),
                        a.length > 0 &&
                          setTimeout(() => {
                            !(function (e, t, n) {
                              (0, i.mG)(this, void 0, void 0, function* () {
                                for (const o of e) {
                                  const e = yield fetch(o),
                                    r = yield e.blob(),
                                    a = (0, fe.L4)(yield r.arrayBuffer());
                                  Ee(
                                    o,
                                    yield n(e.headers.get("Content-Type"), a),
                                    t,
                                  );
                                }
                              });
                            })(a, e, t);
                          }, 100);
                    },
                  },
                }),
              [t, r, n],
            ),
          ),
          null
        );
      }
      function Ee(e, t, n) {
        n.state.doc.descendants((o, r) => {
          if ("image" === o.type.name && o.attrs.src === e) {
            const e = n.state.tr.setNodeAttribute(r, "src", t);
            n.dispatch(e);
          }
        });
      }
      const _e = 1048576;
      var ve = n(42287);
      function Te(e) {
        const {
            visible: t = !0,
            className: n,
            keepMounted: r = !1,
            expandDirection: a = "height",
            msAnimationDuration: l = 250,
            children: i,
          } = e,
          {
            style: s,
            active: c,
            refDiv: m,
          } = (function (e, t = "height", n = 250) {
            const r = o.useRef(),
              a = o.useRef(!0),
              [l, i] = o.useState("idle"),
              [s, c] = o.useState({});
            o.useLayoutEffect(() => {
              a.current ? (a.current = !1) : i("start");
            }, [e]),
              o.useLayoutEffect(() => {
                const n = r.current,
                  o = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == l) {
                  const r = n[o];
                  c((n) =>
                    Object.assign(
                      Object.assign({ [t]: e ? "0px" : `${r}px` }, n),
                      { overflow: "hidden" },
                    ),
                  ),
                    i("active");
                } else if ("active" == l) {
                  n.scrollTop;
                  const r = n[o];
                  c({ overflow: "hidden", [t]: e ? `${r}px` : "0px" });
                  const a = () => {
                    ve.unstable_batchedUpdates(() => {
                      c({}), i("idle");
                    });
                  };
                  return (
                    n.addEventListener("transitionend", a),
                    () => {
                      n.removeEventListener("transitionend", a);
                    }
                  );
                }
              }, [l, e]);
            const m = Object.assign(Object.assign({}, s), {
              transition: `${t} ${n}ms`,
            });
            return { style: m, active: "idle" != l, refDiv: r };
          })(t, a, l);
        return t || c || r
          ? o.createElement("div", { className: n, ref: m, style: s }, i)
          : null;
      }
      var ke = n(96394),
        Ce = n(2761),
        Ne = n(23612),
        ye = n(45492);
      const Se = () => o.useContext(xe);
      function we(e) {
        const { view: t, refUpdateToolbar: n, children: r } = e,
          a = o.useRef();
        a.current || (a.current = new ye.pB()),
          o.useEffect(
            () => (
              (0, oe.k$)(n, () => a.current.Dispatch(t)),
              () => (0, oe.k$)(n, void 0)
            ),
            [t, n],
          );
        const l = o.useMemo(() => ({ callbacks: a.current, view: t }), [t]);
        return t ? o.createElement(xe.Provider, { value: l }, r) : null;
      }
      const xe = o.createContext(void 0);
      function Ge() {
        return o.createElement("div", { className: le.Gap });
      }
      function Be() {
        return o.createElement("div", { className: le.Spacer });
      }
      function Fe(e) {
        return o.createElement(
          Z.s,
          { className: (0, ne.Z)(le.ToolbarRow), "flow-children": "row" },
          e.children,
        );
      }
      function Pe(e) {
        const { nodeType: t, title: n, attrs: r, children: a } = e,
          { callbacks: l, view: i } = Se(),
          [s, c] = o.useState(() => (0, V.pp)(i.state, t, r)),
          m = o.useCallback((e) => c((0, V.pp)(e.state, t, r)), [t, r]);
        (0, oe.Qg)(l, m);
        const u = o.useMemo(() => Ne.uJ(t, r), [r, t]);
        return o.createElement(Le, {
          command: u,
          title: n,
          toggled: s,
          children: a,
        });
      }
      function De(e) {
        const { mark: t, title: n, children: r } = e,
          { callbacks: a, view: l } = Se(),
          [i, s] = o.useState(() => (0, V.MW)(l.state, t)),
          c = o.useCallback((e) => s((0, V.MW)(e.state, t)), [t]);
        (0, oe.Qg)(a, c);
        const m = o.useMemo(() => Ne.w9(t), [t]);
        return o.createElement(Le, {
          command: m,
          title: n,
          toggled: i,
          children: r,
        });
      }
      function Ie(e) {
        const { fnEnabledCheck: t } = e,
          n = (0, i._T)(e, ["fnEnabledCheck"]),
          { callbacks: r, view: a } = Se(),
          [l, s] = o.useState(() => t(a)),
          c = o.useCallback((e) => s(t(e)), [t]);
        return (
          (0, oe.Qg)(r, c),
          o.createElement(Le, Object.assign({}, n, { disabled: !l }))
        );
      }
      function Le(e) {
        const {
            command: t,
            toggled: n,
            title: r,
            disabled: a,
            children: l,
          } = e,
          { view: i } = Se();
        return o.createElement(
          H.zx,
          {
            className: (0, ne.Z)(le.CommandButton, n && le.Toggled),
            title: r,
            onMouseDown: (e) => {
              e.preventDefault(), t(i.state, i.dispatch, i);
            },
            disabled: !0 === a,
            focusable: !a,
          },
          l,
        );
      }
      function Re(e) {
        const {
          onClick: t,
          toggled: n,
          title: r,
          disabled: a,
          children: l,
        } = e;
        return o.createElement(
          H.zx,
          {
            className: (0, ne.Z)(le.CommandButton, n && le.Toggled),
            title: r,
            onMouseDown: (e) => {
              e.preventDefault(), t();
            },
            disabled: !0 === a,
          },
          l,
        );
      }
      function He(e) {
        const { schema: t, children: n } = e,
          { callbacks: r, view: a } = Se(),
          [l, i] = o.useState(() => (0, V.MW)(a.state, t.marks.link)),
          s = o.useCallback((e) => i((0, V.MW)(e.state, t.marks.link)), [t]);
        (0, oe.Qg)(r, s);
        const [c, m, u] = (0, oe.X9)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            U.Yy,
            { active: c },
            o.createElement(Ae, {
              schema: t,
              active: c,
              closeModal: u,
              view: a,
            }),
          ),
          o.createElement(
            H.zx,
            {
              className: (0, ne.Z)(le.CommandButton, l && le.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), m();
              },
              title: (0, f.Xx)("#FormattingToolbar_InsertLink"),
            },
            n,
          ),
        );
      }
      const Ae = o.memo(function (e) {
        const { schema: t, active: n, closeModal: r, view: a } = e,
          [l, i] = o.useState(""),
          [s, c] = o.useState(""),
          m = o.useRef(),
          u = o.useRef();
        return (
          o.useLayoutEffect(() => {
            if (n) {
              let e = "";
              a.state.selection.empty ||
                (e = a.state.doc.cut(
                  a.state.selection.from,
                  a.state.selection.to,
                ).textContent),
                i(e),
                e.startsWith("http")
                  ? (c(e),
                    m.current.Focus(),
                    window.setTimeout(() => {
                      m.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? m.current.Focus()
                    : u.current.Focus();
            }
          }, [n, a]),
          o.createElement(
            U.uH,
            {
              onOK: () => {
                a.dispatch(
                  a.state.tr.replaceRangeWith(
                    a.state.selection.from,
                    a.state.selection.to,
                    t.text(l || s, [t.marks.link.create({ href: s })]),
                  ),
                ),
                  a.focus(),
                  r();
              },
              closeModal: r,
              strTitle: (0, f.Xx)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, f.Xx)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == s.length,
            },
            o.createElement(H.II, {
              ref: m,
              value: l,
              onChange: (e) => i(e.currentTarget.value),
              label: (0, f.Xx)("#FormattingToolbar_LinkText"),
            }),
            o.createElement(H.II, {
              ref: u,
              value: s,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, f.Xx)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function Ue() {
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            ce.HP,
            { toolTipContent: "#FormattingToolbar_Undo", direction: "bottom" },
            o.createElement(
              Ie,
              {
                title: (0, f.Xx)("#FormattingToolbar_Undo"),
                command: ke.Yw,
                fnEnabledCheck: Me,
              },
              o.createElement(A.DeA, null),
            ),
          ),
          o.createElement(
            ce.HP,
            { toolTipContent: "#FormattingToolbar_Redo", direction: "bottom" },
            o.createElement(
              Ie,
              {
                title: (0, f.Xx)("#FormattingToolbar_Redo"),
                command: ke.KX,
                fnEnabledCheck: Oe,
              },
              o.createElement(A.Jwt, null),
            ),
          ),
        );
      }
      function Me(e) {
        return ke.of(e.state) > 0;
      }
      function Oe(e) {
        return ke.AH(e.state) > 0;
      }
      function Xe(e) {
        const { schema: t } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            ce.HP,
            { toolTipContent: "#FormattingToolbar_Bold", direction: "bottom" },
            o.createElement(
              De,
              {
                title: (0, f.Xx)("#FormattingToolbar_Bold"),
                mark: t.marks.strong,
              },
              o.createElement(A.DUs, null),
            ),
          ),
          o.createElement(
            ce.HP,
            {
              toolTipContent: "#FormattingToolbar_Italic",
              direction: "bottom",
            },
            o.createElement(
              De,
              {
                title: (0, f.Xx)("#FormattingToolbar_Italic"),
                mark: t.marks.italic,
              },
              o.createElement(A.tzG, null),
            ),
          ),
          o.createElement(
            ce.HP,
            {
              toolTipContent: "#FormattingToolbar_Underline",
              direction: "bottom",
            },
            o.createElement(
              De,
              {
                title: (0, f.Xx)("#FormattingToolbar_Underline"),
                mark: t.marks.underline,
              },
              o.createElement(A.nC9, null),
            ),
          ),
          o.createElement(
            ce.HP,
            {
              toolTipContent: "#FormattingToolbar_Strike",
              direction: "bottom",
            },
            o.createElement(
              De,
              {
                title: (0, f.Xx)("#FormattingToolbar_Strike"),
                mark: t.marks.strike,
              },
              o.createElement(A.z$U, null),
            ),
          ),
          o.createElement(
            ce.HP,
            {
              toolTipContent: "#FormattingToolbar_InlineCode",
              direction: "bottom",
            },
            o.createElement(
              De,
              {
                title: (0, f.Xx)("#FormattingToolbar_InlineCode"),
                mark: t.marks.code,
              },
              o.createElement(A.l2k, null),
            ),
          ),
        );
      }
      function je(e) {
        const { schema: t } = e;
        return o.createElement(
          ce.HP,
          {
            toolTipContent: "#FormattingToolbar_Paragraph",
            direction: "bottom",
          },
          o.createElement(
            Pe,
            {
              nodeType: t.nodes.paragraph,
              title: (0, f.Xx)("#FormattingToolbar_Paragraph"),
            },
            o.createElement(A.Dos, null),
          ),
        );
      }
      function $e(e) {
        const { schema: t, levels: n } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            ce.HP,
            {
              toolTipContent: "#FormattingToolbar_HeadingLevel1",
              direction: "bottom",
            },
            o.createElement(
              Pe,
              {
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
                title: (0, f.Xx)("#FormattingToolbar_HeadingLevelN", 1),
              },
              o.createElement(A.geY, null),
            ),
          ),
          n >= 2 &&
            o.createElement(
              ce.HP,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel2",
                direction: "bottom",
              },
              o.createElement(
                Pe,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 2 },
                  title: (0, f.Xx)("#FormattingToolbar_HeadingLevelN", 2),
                },
                o.createElement(A.y3S, null),
              ),
            ),
          n >= 3 &&
            o.createElement(
              ce.HP,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel3",
                direction: "bottom",
              },
              o.createElement(
                Pe,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 3 },
                  title: (0, f.Xx)("#FormattingToolbar_HeadingLevelN", 3),
                },
                o.createElement(A.Zhu, null),
              ),
            ),
          n >= 4 &&
            o.createElement(
              ce.HP,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel4",
                direction: "bottom",
              },
              o.createElement(
                Pe,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 4 },
                  title: (0, f.Xx)("#FormattingToolbar_HeadingLevelN", 4),
                },
                o.createElement(A.P2P, null),
              ),
            ),
          n >= 5 &&
            o.createElement(
              ce.HP,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel5",
                direction: "bottom",
              },
              o.createElement(
                Pe,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 5 },
                  title: (0, f.Xx)("#FormattingToolbar_HeadingLevelN", 5),
                },
                o.createElement(A.Lb, null),
              ),
            ),
        );
      }
      function We(e) {
        const { schema: t } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            ce.HP,
            {
              toolTipContent: "#FormattingToolbar_BulletedList",
              direction: "bottom",
            },
            o.createElement(
              Le,
              {
                title: (0, f.Xx)("#FormattingToolbar_BulletedList"),
                command: Ce.KI(t.nodes.bullet_list),
              },
              o.createElement(A.RAD, null),
            ),
          ),
          o.createElement(
            ce.HP,
            {
              toolTipContent: "#FormattingToolbar_IndentList",
              direction: "bottom",
            },
            o.createElement(
              Le,
              {
                title: (0, f.Xx)("#FormattingToolbar_IndentList"),
                command: Ce.IB(t.nodes.list_item),
              },
              o.createElement(A.FYd, null),
            ),
          ),
          o.createElement(
            ce.HP,
            {
              toolTipContent: "#FormattingToolbar_OutdentList",
              direction: "bottom",
            },
            o.createElement(
              Le,
              {
                title: (0, f.Xx)("#FormattingToolbar_OutdentList"),
                command: Ce.bw(t.nodes.list_item),
              },
              o.createElement(A.LcB, null),
            ),
          ),
        );
      }
      function Ve(e) {
        const { schema: t } = e;
        return o.createElement(
          ce.HP,
          {
            toolTipContent: "#FormattingToolbar_InsertLink",
            direction: "bottom",
          },
          o.createElement(He, { schema: t }, o.createElement(A.hhG, null)),
        );
      }
      function ze(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: n } = e;
        return o.createElement(
          ce.HP,
          {
            toolTipContent: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            direction: "bottom",
          },
          o.createElement(
            Re,
            { toggled: t, onClick: () => n(!t) },
            o.createElement(A.cSC, null),
          ),
        );
      }
      var Ze = n(56617);
      function Qe(e) {
        const {
            schema: t,
            view: n,
            refUpdateToolbar: r,
            className: a,
            bSpellcheckEnabled: l,
            setSpellcheckEnabled: i,
          } = e,
          [s, c] = (0, Ze.i4)("FormattingToolbar_Expanded", !1);
        return o.createElement(
          we,
          { refUpdateToolbar: r, view: n },
          o.createElement(
            "div",
            { className: (0, ne.Z)(le.Toolbar, a) },
            o.createElement(
              Fe,
              null,
              o.createElement(Ue, null),
              o.createElement(Ge, null),
              o.createElement(Xe, { schema: t }),
              o.createElement(Be, null),
              o.createElement(
                ce.HP,
                {
                  toolTipContent: "#FormattingToolbar_ExpandOptions",
                  direction: "bottom",
                },
                o.createElement(
                  H.zx,
                  {
                    className: (0, ne.Z)(
                      le.CommandButton,
                      le.ExpandButton,
                      s && le.Toggled,
                    ),
                    onClick: () => c(!s),
                  },
                  o.createElement(A.Tt3, null),
                ),
              ),
            ),
            o.createElement(
              Te,
              { visible: s },
              o.createElement(
                Fe,
                null,
                o.createElement(je, { schema: t }),
                o.createElement($e, { schema: t, levels: 5 }),
                o.createElement(
                  ce.HP,
                  {
                    toolTipContent: "#FormattingToolbar_CodeBlock",
                    direction: "bottom",
                  },
                  o.createElement(
                    Pe,
                    {
                      nodeType: t.nodes.code_block,
                      title: (0, f.Xx)("#FormattingToolbar_CodeBlock"),
                    },
                    o.createElement(A.N4L, null),
                  ),
                ),
                o.createElement(Ge, null),
                o.createElement(We, { schema: t }),
                o.createElement(Ge, null),
                o.createElement(Ve, { schema: t }),
                o.createElement(Be, null),
                i &&
                  o.createElement(ze, {
                    bSpellcheckEnabled: l,
                    setSpellcheckEnabled: i,
                  }),
              ),
            ),
          ),
        );
      }
      const qe = 15;
      function Ye(e) {
        const { note: t } = e,
          [n, r] = o.useState(!1),
          [a, l] = o.useState(),
          c = o.useRef(),
          d = o.useRef(),
          b = o.useRef(t.content),
          g = o.useRef(!1),
          v = o.useContext(u).onClickURL,
          T =
            null === (k = o.useContext(u).bSpellcheckEnabled) ||
            void 0 === k ||
            k;
        var k;
        const C = o.useContext(u).setSpellcheckEnabled,
          N = (function (e) {
            const t = h();
            return o.useCallback(
              (n, o) =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  const r = new Uint8Array(o),
                    a = yield t.UploadImage(`notes_${e}_images/`, n, r);
                  return Promise.resolve("/gamenotes/" + a);
                }),
              [t, e],
            );
          })(t.appid),
          y = (0, ae.id)();
        b.current == t.content || g.current || (b.current = t.content);
        const S = b.current,
          w = (function () {
            const e = (0, s.useQueryClient)(),
              t = h();
            return (0, s.useMutation)(
              (e) => t.SaveGameNote(e.note, e.title, e.bbcode),
              {
                onMutate(t) {
                  const n = Object.assign(Object.assign({}, t.note), {
                    title: t.title,
                    content: t.bbcode,
                  });
                  return (
                    _(e, m(t.note), (e) =>
                      e.map((e) => (e.id == n.id ? n : e)),
                    ),
                    console.log(n),
                    n
                  );
                },
                onSuccess(t, n, o) {
                  console.log(o, t),
                    _(e, m(n.note), (e) =>
                      e.map((e) =>
                        e.id === o.id
                          ? Object.assign(Object.assign({}, e), {
                              id: t,
                              not_persisted: !1,
                            })
                          : e,
                      ),
                    );
                },
              },
            );
          })(),
          x = o.useCallback((e, t) => {
            c.current && c.current(),
              t.doc &&
                t.doc != e.state.doc &&
                (g.current ||
                  ((g.current = !0),
                  R.q.ReportTrackedAction("/GameNotes/NoteModified")),
                (d.current = () => ({
                  title: tt(e.state.doc),
                  bbcode: (0, M.d)(e.state.doc, he),
                })),
                r(!0));
          }, []);
        o.useEffect(() => {
          if (!n) return;
          let e = d.current;
          const o = () => {
              if (e) {
                const { title: n, bbcode: o } = e();
                (t.not_persisted && !(null == o ? void 0 : o.length)) ||
                  w.mutate({ note: t, title: n, bbcode: o }),
                  r(!1);
              }
              (e = void 0), (d.current = void 0);
            },
            a = window.setTimeout(o, 1e3 * qe);
          return () => {
            window.clearTimeout(a), o();
          };
        }, [w, n, t]);
        const G = p(),
          B = E(t, G),
          F = {
            onSecondaryButton: () => B.mutate(),
            onSecondaryActionDescription: (0, f.Xx)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return o.createElement(
          "div",
          { className: me.NoteEditorArea },
          !y &&
            o.createElement(Qe, {
              schema: he.pm_schema,
              view: a,
              refUpdateToolbar: c,
              className: me.Toolbar,
              bSpellcheckEnabled: T,
              setSpellcheckEnabled: C,
            }),
          o.createElement(
            ie,
            {
              schemaConfig: he,
              className: me.EditorInput,
              bbcode: S,
              onUpdate: x,
              refView: l,
              onClickURL: v,
              bSpellcheckEnabled: T,
              panelProps: F,
            },
            o.createElement(ge, {
              uploadImage: N,
              nodeType: he.pm_schema.nodes.image,
            }),
          ),
          !y && o.createElement(Ke, { note: t, bDirty: n }),
        );
      }
      function Ke(e) {
        const { note: t, bDirty: n } = e,
          [r, a, l] = (0, oe.X9)(!1),
          i = "single" == o.useContext(u).mode,
          s = p(),
          c = E(t, s),
          m = o.useCallback(() => {
            !n && t.not_persisted ? c.mutate() : a();
          }, [n, t, c, a]);
        return o.createElement(
          "div",
          { className: me.NoteActions },
          r && o.createElement(et, { note: t, closeModal: l, deleteNote: c }),
          o.createElement(
            ce.HP,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            o.createElement(H.zx, { onClick: m }, o.createElement(A.rFk, null)),
          ),
          i && o.createElement(Je, { bDirty: n }),
        );
      }
      function Je(e) {
        const { bDirty: t } = e,
          n = p();
        return t
          ? o.createElement(
              H.KM,
              { onClick: () => n(), className: me.CloseWindowButton },
              (0, f.Xx)("#Button_SaveAndClose"),
            )
          : o.createElement(
              H.zx,
              { onClick: () => n(), className: me.CloseWindowButton },
              (0, f.Xx)("#Button_Close"),
            );
      }
      function et(e) {
        const { note: t, closeModal: n, deleteNote: r } = e;
        return o.createElement(
          U.Yy,
          { active: !0 },
          o.createElement(U.uH, {
            strTitle: (0, f.Xx)("#UserGameNotes_DeleteNote"),
            strDescription: (0, f.Xx)("#UserGameNotes_PromptDelete"),
            onOK: () => r.mutate(),
            bOKDisabled: r.isLoading,
            strOKButtonText: (0, f.Xx)("#Button_Delete"),
            closeModal: n,
          }),
        );
      }
      function tt(e) {
        let t = "";
        for (let n = 0; n < e.content.childCount; n++) {
          const o = e.content.child(n);
          if (o.isText) t += o.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = tt(o)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      function nt() {
        const e = (0, r.$B)(),
          t = v(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let n = e.params.noteid;
        const a = (0, r.k6)(),
          l = (function (e) {
            const t = (0, s.useQueryClient)(),
              n = h();
            return o.useCallback(() => {
              const o = (0, f.Xx)("#UserGameNotes_UntitledNote_Title"),
                r = n.NewNote(e, o);
              return _(t, e, (e) => [...e, r]), r.id;
            }, [t, n, e]);
          })(t),
          { data: i, isLoading: c } = g(t);
        let m;
        i && n && (m = i.find((e) => e.id === n)),
          o.useLayoutEffect(() => {
            !i ||
              (n && i.find((e) => e.id === n)) ||
              (i.length > 0 && i[0].id ? rt(a, t, i[0].id) : rt(a, t, l()));
          }, [a, t, n, i, l]);
        const u = o.createElement(
          ce.HP,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          o.createElement(
            H.zx,
            {
              className: me.NewNoteButton,
              onClick: () => {
                const e = l();
                rt(a, t, e);
              },
            },
            o.createElement(A.ex9, null),
          ),
        );
        return i
          ? o.createElement(ot, {
              noteParent: t,
              notes: i,
              activeNoteID: null == m ? void 0 : m.id,
              actions: u,
            })
          : null;
      }
      function ot(e) {
        const { noteParent: t, notes: n, activeNoteID: a, actions: l } = e,
          [i, s] = (0, Ze.i4)("NotesListCollapsed", !1),
          c = o.useContext(u).bPinnedView,
          m = (0, ae.id)(),
          d = n.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, f.Xx)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: o.createElement(Ye, { note: e }),
              pageClassName: me.NotePage,
              hideTitle: !0,
            };
          }),
          p = (0, r.k6)(),
          h = o.useCallback((e) => rt(p, t, e), [p, t]);
        return o.createElement(H.TI, {
          title: (0, f.Xx)("#UserGameNotes_NotesList"),
          pages: d,
          className: (0, ne.Z)(me.NotesPagedSettings, c && me.PinnedView),
          page: a,
          onPageRequested: h,
          bottomControls: l,
          hideList: i,
          toggleHideList: c || m ? void 0 : () => s(!i),
        });
      }
      function rt(e, t, n) {
        let o;
        (o =
          "appid" in t
            ? a.AppNotes(t.appid, n)
            : a.ShortcutNotes(t.shortcut, n)),
          e.replace(o, e.location.state);
      }
      var at = n(61578);
      class lt {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        GetGamesWithNotes() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const e = C.gA.Init(at.SX);
            return (yield at.Rr.GetGamesWithNotes(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            ))
              .Body()
              .toObject().games_with_notes;
          });
        }
        GetGameNotesList(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const n = C.gA.Init(at.DI);
            this.SetParentOnRequest(n, e), n.Body().set_include_content(t);
            const o = yield at.Rr.GetNotesForGame(
              this.m_SteamInterface.GetServiceTransport(),
              n,
            );
            return o.Body().notes().length
              ? o.Body().toObject().notes
              : [this.NewNote(e, "New Note")];
          });
        }
        SaveGameNote(e, t, n) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const o = C.gA.Init(at.ge);
            e.not_persisted
              ? o.Body().set_create_new(!0)
              : o.Body().set_note_id(e.id),
              e.appid
                ? o.Body().set_appid(e.appid)
                : o.Body().set_shortcut_name(e.shortcut_name),
              o.Body().set_title(t),
              o.Body().set_content(n);
            const r = yield at.Rr.SaveNote(
              this.m_SteamInterface.GetServiceTransport(),
              o,
            );
            if (!r.BSuccess()) throw r.GetErrorMessage();
            return r.Body().note_id();
          });
        }
        DeleteGameNote(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const n = C.gA.Init(at.$$);
            this.SetParentOnRequest(n, e), n.Body().set_note_id(t);
            const o = yield at.Rr.DeleteNote(
              this.m_SteamInterface.GetServiceTransport(),
              n,
            );
            if (!o.BSuccess()) throw o.GetErrorMessage();
            return t;
          });
        }
        SyncNotes() {
          return (0, i.mG)(this, void 0, void 0, function* () {});
        }
        SetParentOnRequest(e, t) {
          "appid" in t
            ? e.Body().set_appid(t.appid)
            : e.Body().set_shortcut_name(t.shortcut);
        }
        NewNote(e, t) {
          let n = {};
          return (
            "appid" in e ? (n.appid = e.appid) : (n.shortcut_name = e.shortcut),
            Object.assign(
              Object.assign({ id: "temp_" + lt.sm_lastNoteID++ }, n),
              {
                ordinal: 0,
                time_created: Date.now() / 1e3,
                time_modified: Date.now() / 1e3,
                title: t,
                content: "",
                not_persisted: !0,
              },
            )
          );
        }
        UploadImage(e, t, n) {
          return Promise.reject("NYI");
        }
      }
      function it(e) {
        const t = (0, y.lS)(),
          [n] = o.useState(() => new lt(t));
        return o.createElement(
          d,
          { mode: "page", store: n },
          o.createElement(
            r.rs,
            null,
            o.createElement(r.AW, { path: a.List() }, o.createElement(I, null)),
            o.createElement(
              r.AW,
              { path: a.AppNotes(":appid", ":noteid?") },
              o.createElement(nt, null),
            ),
            o.createElement(
              r.AW,
              null,
              o.createElement(r.l_, { to: `${a.List()}` }),
            ),
          ),
        );
      }
      lt.sm_lastNoteID = 0;
    },
  },
]);

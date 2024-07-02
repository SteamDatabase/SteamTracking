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
        a = n(79545),
        r = n(14351),
        l = n(68785),
        c = n(46984),
        s = n(16997);
      const i = new l.sO("ReactUsageReporting").Debug,
        m = 1e3 * c._H.PerMinute;
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
          i("Route match: " + e), this.ReportInternal(e, this.m_mapRoutes);
        }
        ReportTrackedComponent(e) {
          i("Tracked component: " + e),
            this.ReportInternal(e, this.m_mapComponents);
        }
        ReportTrackedAction(e) {
          i("User action: " + e), this.ReportInternal(e, this.m_mapActions);
        }
        ShouldSendMetricsImmediately() {
          return this.m_reportCount >= 100;
        }
        SendMetrics() {
          if (!this.m_bInitialized) return;
          const e = a.gA.Init(r.YH);
          e.Body().set_product(this.m_strProduct),
            e.Body().set_version(this.m_strVersion),
            this.m_mapRoutes.forEach((t, n) => {
              let o = new r.Be();
              o.set_route(n), o.set_count(t), e.Body().add_routes(o);
            }),
            this.m_mapComponents.forEach((t, n) => {
              let o = new r.Hy();
              o.set_component(n), o.set_count(t), e.Body().add_components(o);
            }),
            this.m_mapActions.forEach((t, n) => {
              let o = new r.Js();
              o.set_action(n), o.set_count(t), e.Body().add_actions(o);
            }),
            this.m_mapRoutes.clear(),
            this.m_mapComponents.clear(),
            this.m_mapActions.clear(),
            (this.m_reportCount = 0),
            r.TF.ReportReactUsage(this.m_transport, e);
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
      n.r(t), n.d(t, { default: () => lt });
      var o = n(47427),
        a = n(8285);
      const r = {
        List: () => "/notes/list",
        AppNotes: (e, t) => `/notes/app/${e}/${null != t ? t : ""}`,
        ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${null != t ? t : ""}`,
      };
      var l = n(28017),
        c = n(42718);
      function s(e) {
        return e.trim();
      }
      function i(e) {
        return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
      }
      const m = o.createContext({ mode: "page", store: null });
      function u(e) {
        const {
            mode: t,
            store: n,
            closePopup: a,
            bPinnedView: r,
            onClickURL: l,
            bSpellcheckEnabled: c = !0,
            setSpellcheckEnabled: s,
            children: i,
          } = e,
          u = o.useMemo(
            () => ({
              mode: t,
              store: n,
              closePopup: a,
              bPinnedView: r,
              onClickURL: l,
              bSpellcheckEnabled: c,
              setSpellcheckEnabled: s,
            }),
            [t, n, a, r, l, c, s],
          );
        return o.createElement(m.Provider, { value: u }, i);
      }
      function d() {
        return o.useContext(m).closePopup;
      }
      function p() {
        return o.useContext(m).store;
      }
      var h = n(31846);
      function f(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", s(e.shortcut)];
      }
      function E(e) {
        const t = p();
        return (0, c.useQuery)(
          f(e),
          async () => (await t.GetGameNotesList(e, !0)) || [],
          { enabled: !!e },
        );
      }
      function b(e, t) {
        const n = (0, c.useQueryClient)(),
          o = p(),
          a = e.id;
        return (0, c.useMutation)(
          async () => (e.not_persisted ? a : await o.DeleteGameNote(i(e), a)),
          {
            onSuccess() {
              g(n, i(e), (e) => e.filter((e) => e.id != a)), t && t();
            },
          },
        );
      }
      function g(e, t, n) {
        e.getQueryData(f(t)) && e.setQueryData(f(t), n);
      }
      function _(e, t) {
        return o.useMemo(
          () =>
            t
              ? (function (e) {
                  return { shortcut: s(e) };
                })(t)
              : (function (e) {
                  return { appid: e };
                })(e),
          [e, t],
        );
      }
      var v = n(73799),
        T = n.n(v),
        k = n(79545),
        C = n(18015),
        N = n(40057),
        y = n(65255),
        w = n(77936);
      let S;
      const x = 864e5;
      function B(e) {
        return `appinfo_${e}_${y.De.LANGUAGE}`;
      }
      function F(e) {
        return Boolean(e && Date.now() - e.timeCached < x);
      }
      function P(e) {
        const t = (0, N.bY)(),
          n = (0, N.y$)();
        return (0, c.useQuery)(
          ["appinfo", e],
          async () =>
            (function (e, t) {
              return (
                S ||
                  (S = new (T())(
                    async (n) => {
                      const o = new Map();
                      (await Promise.all(n.map((e) => t.GetObject(B(e)))))
                        .filter(F)
                        .forEach(({ value: e }) => o.set(e.appid, e));
                      const a = n.slice().filter((e) => !o.has(e));
                      if (a.length) {
                        const n = k.gA.Init(C.Fi);
                        n.Body().set_language((0, w.jM)(y.De.LANGUAGE)),
                          n.Body().set_appids(a);
                        const r = await C.AE.GetApps(e, n);
                        if (1 != r.GetEResult()) throw r.GetErrorMessage();
                        r.Body()
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
                    },
                    { cache: !1 },
                  )),
                S
              );
            })(t, n).load(e),
          { staleTime: x, enabled: !!e },
        ).data;
      }
      var D = n(46882);
      function G() {
        const { data: e, isLoading: t } = (function () {
          const e = p();
          return (0, c.useQuery)(["GameNotes", "GamesWithNotes"], () =>
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
                (0, h.Xx)("#UserGameNotes_NotesList"),
              ),
              o.createElement(
                "ul",
                null,
                e.map((e) => o.createElement(I, { key: e.appid, game: e })),
              ),
            );
      }
      function I(e) {
        const { game: t } = e,
          n = P(t.appid);
        return o.createElement(
          "li",
          null,
          o.createElement(
            l.rU,
            { to: r.AppNotes(t.appid) },
            null == n ? void 0 : n.name,
          ),
        );
      }
      var L = n(42695),
        R = n(1485),
        H = n(58538),
        A = n(50898),
        U = n(20564),
        M = n(31934),
        X = n(4005),
        O = n(28147),
        $ = n(6673),
        W = n(32300),
        V = n(93109),
        z = n(23126),
        Z = n(91618),
        Q = n(13974),
        q = n(35643),
        Y = n(50423),
        K = n(31643);
      function j() {
        const [e, t] = o.useState(),
          [n, a] = o.useState(),
          [r, l] = o.useState(),
          c = o.useMemo(
            () =>
              new X.Sy({
                props: {
                  handleDOMEvents: {
                    mouseover: (e, n) => {
                      const o = n.target;
                      if ((0, Y.GB)(o) && "A" == o.nodeName) {
                        const e = o.getBoundingClientRect();
                        t(e.left + e.width / 2), a(e.bottom + 2), l(o);
                      } else l(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (l(void 0), !1),
                  },
                },
              }),
            [],
          );
        if (((0, W.U$)(c), !r)) return null;
        const s = r.getAttribute("href");
        return o.createElement(
          J,
          { top: n, left: e },
          o.createElement("div", { className: K.Link }, s),
          o.createElement(
            "div",
            { className: K.LinkHelp },
            (0, h.Xx)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function J(e) {
        const { top: t, left: n, children: a } = e,
          [r, l] = o.useState(0),
          c = o.useRef();
        o.useLayoutEffect(() => {
          l(c.current.getBoundingClientRect().width);
        }, [t, n, a]);
        const s = { top: `${t}px`, left: `${Math.max(n - r / 2, 12)}px` };
        return o.createElement(
          "div",
          { className: K.Hover, style: s, ref: c },
          a,
        );
      }
      var ee = n(14609),
        te = n(13129),
        ne = n(20417),
        oe = n(13499),
        ae = n(37563),
        re = n(56836);
      function le(e) {
        const {
            schemaConfig: t,
            bbcode: n,
            className: a,
            onUpdate: r,
            refView: l,
            onClickURL: c,
            bSpellcheckEnabled: s = !0,
            panelProps: i,
            children: m,
          } = e,
          [u, d] = o.useState(),
          p = o.useRef(),
          f = o.useRef();
        f.current = c || ce;
        const E = o.useCallback(
          (e) => {
            var n, o;
            if (!e)
              return void (
                null === (n = p.current) ||
                void 0 === n ||
                n.destroy()
              );
            const a = p.current;
            a && a.destroy(),
              (p.current = new M.tk(e, {
                state:
                  null !== (o = null == a ? void 0 : a.state) && void 0 !== o
                    ? o
                    : X.yy.create({ schema: t.pm_schema }),
                handleClickOn: (...e) =>
                  (function (e, t, n, o, a, r, l, c) {
                    if (c && (l.ctrlKey || 1 == l.button)) {
                      const n = a
                        .resolve(o - r)
                        .marks()
                        .find((t) => t.type == e.marks.link);
                      if (n)
                        return t(n.attrs.href, l.view), l.preventDefault(), !0;
                    }
                    return !1;
                  })(t.pm_schema, f.current, ...e),
                clipboardTextParser: (...e) =>
                  (function (e, t, n, o, a) {
                    let r,
                      l = [];
                    for (; (r = t.match(oe.H7)); )
                      r.index > 0 && l.push(e.text(t.substring(0, r.index))),
                        l.push(
                          e.text(r[0], [
                            e.marks.link.create({ href: (0, oe.Pm)(r[0]) }),
                          ]),
                        ),
                        (t = t.substring(r.index + r[0].length));
                    t.length && l.push(e.text(t));
                    return new z.p2(z.HY.from(l), n.start(), n.end());
                  })(t.pm_schema, ...e),
              })),
              d(p.current),
              a || p.current.focus();
          },
          [t],
        );
        o.useEffect(() => {
          u && u.updateState((0, O.B)((0, $.B)(n, t), t.pm_schema, u.state));
        }, [t, n, u]),
          (0, ne.LY)(l, u);
        const {
            refDiv: b,
            onActivate: g,
            onGamepadDirection: _,
          } = (function (e) {
            const t = (0, ae.qt)(),
              n = o.useRef(),
              a = o.useCallback(
                (e) => {
                  (0, q.LP)(e, t.IN_VR);
                },
                [t.IN_VR],
              ),
              r = (0, q.CJ)({ onTextEntered: a }, () => {
                var e;
                return null === (e = n.current) || void 0 === e
                  ? void 0
                  : e.ownerDocument.defaultView;
              }),
              l = o.useCallback(() => {
                var t, o;
                if (
                  (r.ShowVirtualKeyboard(),
                  !(null === (t = e.current) || void 0 === t
                    ? void 0
                    : t.hasFocus()))
                ) {
                  null === (o = e.current) || void 0 === o || o.focus();
                  let t = e.current.dom.childNodes;
                  for (let o = 0; o < t.length; ++o) {
                    let a = t[o],
                      r = a.offsetTop;
                    if (void 0 !== r && r >= n.current.scrollTop) {
                      let t = a.getBoundingClientRect();
                      (0, V.VM)(e.current, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [r, e]),
              c = o.useCallback((e) => e.currentTarget == e.target, []),
              s = (0, Q.pj)(n, null, null, c);
            return { refDiv: n, onActivate: l, onGamepadDirection: s };
          })(p),
          v = (0, ne.BE)(b, E);
        return o.createElement(
          W.xh,
          { view: u },
          o.createElement(Z.s, {
            key: `editordiv_${s}`,
            className: (0, te.Z)(a, re.Container),
            ref: v,
            spellCheck: s,
            focusable: !0,
            onActivate: g,
            onOKActionDescription: (0, h.Xx)("#UserGameNotes_Edit"),
            onGamepadDirection: _,
            ...i,
          }),
          o.createElement(W.l8, { onUpdate: r, schema: t.pm_schema }),
          o.createElement(j, null),
          m,
        );
      }
      function ce(e, t) {
        (0, ee.b8)(t, e);
      }
      var se = n(59728),
        ie = n(25251),
        me = n(79500),
        ue = n(85314);
      const de = { nodes: { ...me.Pp.nodes }, marks: { ...me.Pp.marks } },
        pe = new ue.F(de);
      var he = n(80878);
      const fe =
        n.p +
        "images/applications/community/image_error.svg?v=valveisgoodatcaching";
      function Ee(e) {
        const { uploadImage: t, nodeType: n, nMaxImageSize: a = ge } = e;
        return (
          (0, W.U$)(
            o.useMemo(
              () =>
                new X.Sy({
                  key: new X.H$(`PMUploadImage_${n.name}`),
                  props: {
                    transformPasted: (...e) =>
                      (function (e, t, n, o) {
                        let a = !1;
                        if (
                          (n.content.descendants((n, o) => {
                            n.type == e && n.attrs.src.length > t && (a = !0);
                          }),
                          a)
                        ) {
                          let t = [
                            e.create({
                              src: fe,
                              title: (0, h.Xx)("#UserGameNotes_ImageTooLarge"),
                            }),
                          ];
                          return new z.p2(z.HY.from(t), 0, 0);
                        }
                        return n;
                      })(n, a, ...e),
                    handlePaste: (e, o, a) => {
                      const r = [];
                      a.content.descendants((e) => {
                        e.type == n &&
                          e.attrs.src.startsWith("data:image") &&
                          r.push(e.attrs.src);
                      }),
                        r.length > 0 &&
                          setTimeout(() => {
                            !(async function (e, t, n) {
                              for (const o of e) {
                                const e = await fetch(o),
                                  a = await e.blob(),
                                  r = (0, he.L4)(await a.arrayBuffer());
                                be(
                                  o,
                                  await n(e.headers.get("Content-Type"), r),
                                  t,
                                );
                              }
                            })(r, e, t);
                          }, 100);
                    },
                  },
                }),
              [t, a, n],
            ),
          ),
          null
        );
      }
      function be(e, t, n) {
        n.state.doc.descendants((o, a) => {
          if ("image" === o.type.name && o.attrs.src === e) {
            const e = n.state.tr.setNodeAttribute(a, "src", t);
            n.dispatch(e);
          }
        });
      }
      const ge = 1048576;
      var _e = n(42287);
      function ve(e) {
        const {
            visible: t = !0,
            className: n,
            keepMounted: a = !1,
            expandDirection: r = "height",
            msAnimationDuration: l = 250,
            children: c,
          } = e,
          {
            style: s,
            active: i,
            refDiv: m,
          } = (function (e, t = "height", n = 250) {
            const a = o.useRef(),
              r = o.useRef(!0),
              [l, c] = o.useState("idle"),
              [s, i] = o.useState({});
            o.useLayoutEffect(() => {
              r.current ? (r.current = !1) : c("start");
            }, [e]),
              o.useLayoutEffect(() => {
                const n = a.current,
                  o = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == l) {
                  const a = n[o];
                  i((n) => ({
                    [t]: e ? "0px" : `${a}px`,
                    ...n,
                    overflow: "hidden",
                  })),
                    c("active");
                } else if ("active" == l) {
                  n.scrollTop;
                  const a = n[o];
                  i({ overflow: "hidden", [t]: e ? `${a}px` : "0px" });
                  const r = () => {
                    _e.unstable_batchedUpdates(() => {
                      i({}), c("idle");
                    });
                  };
                  return (
                    n.addEventListener("transitionend", r),
                    () => {
                      n.removeEventListener("transitionend", r);
                    }
                  );
                }
              }, [l, e]);
            const m = { ...s, transition: `${t} ${n}ms` };
            return { style: m, active: "idle" != l, refDiv: a };
          })(t, r, l);
        return t || i || a
          ? o.createElement("div", { className: n, ref: m, style: s }, c)
          : null;
      }
      var Te = n(96394),
        ke = n(2761),
        Ce = n(23612),
        Ne = n(45492);
      const ye = () => o.useContext(Se);
      function we(e) {
        const { view: t, refUpdateToolbar: n, children: a } = e,
          r = o.useRef();
        r.current || (r.current = new Ne.pB()),
          o.useEffect(
            () => (
              (0, ne.k$)(n, () => r.current.Dispatch(t)),
              () => (0, ne.k$)(n, void 0)
            ),
            [t, n],
          );
        const l = o.useMemo(() => ({ callbacks: r.current, view: t }), [t]);
        return t ? o.createElement(Se.Provider, { value: l }, a) : null;
      }
      const Se = o.createContext(void 0);
      function xe() {
        return o.createElement("div", { className: re.Gap });
      }
      function Be() {
        return o.createElement("div", { className: re.Spacer });
      }
      function Fe(e) {
        return o.createElement(
          Z.s,
          { className: (0, te.Z)(re.ToolbarRow), "flow-children": "row" },
          e.children,
        );
      }
      function Pe(e) {
        const { nodeType: t, title: n, attrs: a, children: r } = e,
          { callbacks: l, view: c } = ye(),
          [s, i] = o.useState(() => (0, V.pp)(c.state, t, a)),
          m = o.useCallback((e) => i((0, V.pp)(e.state, t, a)), [t, a]);
        (0, ne.Qg)(l, m);
        const u = o.useMemo(() => Ce.uJ(t, a), [a, t]);
        return o.createElement(Ie, {
          command: u,
          title: n,
          toggled: s,
          children: r,
        });
      }
      function De(e) {
        const { mark: t, title: n, children: a } = e,
          { callbacks: r, view: l } = ye(),
          [c, s] = o.useState(() => (0, V.MW)(l.state, t)),
          i = o.useCallback((e) => s((0, V.MW)(e.state, t)), [t]);
        (0, ne.Qg)(r, i);
        const m = o.useMemo(() => Ce.w9(t), [t]);
        return o.createElement(Ie, {
          command: m,
          title: n,
          toggled: c,
          children: a,
        });
      }
      function Ge(e) {
        const { fnEnabledCheck: t, ...n } = e,
          { callbacks: a, view: r } = ye(),
          [l, c] = o.useState(() => t(r)),
          s = o.useCallback((e) => c(t(e)), [t]);
        return (0, ne.Qg)(a, s), o.createElement(Ie, { ...n, disabled: !l });
      }
      function Ie(e) {
        const {
            command: t,
            toggled: n,
            title: a,
            disabled: r,
            children: l,
          } = e,
          { view: c } = ye();
        return o.createElement(
          R.zx,
          {
            className: (0, te.Z)(re.CommandButton, n && re.Toggled),
            title: a,
            onMouseDown: (e) => {
              e.preventDefault(), t(c.state, c.dispatch, c);
            },
            disabled: !0 === r,
            focusable: !r,
          },
          l,
        );
      }
      function Le(e) {
        const {
          onClick: t,
          toggled: n,
          title: a,
          disabled: r,
          children: l,
        } = e;
        return o.createElement(
          R.zx,
          {
            className: (0, te.Z)(re.CommandButton, n && re.Toggled),
            title: a,
            onMouseDown: (e) => {
              e.preventDefault(), t();
            },
            disabled: !0 === r,
          },
          l,
        );
      }
      function Re(e) {
        const { schema: t, children: n } = e,
          { callbacks: a, view: r } = ye(),
          [l, c] = o.useState(() => (0, V.MW)(r.state, t.marks.link)),
          s = o.useCallback((e) => c((0, V.MW)(e.state, t.marks.link)), [t]);
        (0, ne.Qg)(a, s);
        const [i, m, u] = (0, ne.X9)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            A.Yy,
            { active: i },
            o.createElement(He, {
              schema: t,
              active: i,
              closeModal: u,
              view: r,
            }),
          ),
          o.createElement(
            R.zx,
            {
              className: (0, te.Z)(re.CommandButton, l && re.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), m();
              },
              title: (0, h.Xx)("#FormattingToolbar_InsertLink"),
            },
            n,
          ),
        );
      }
      const He = o.memo(function (e) {
        const { schema: t, active: n, closeModal: a, view: r } = e,
          [l, c] = o.useState(""),
          [s, i] = o.useState(""),
          m = o.useRef(),
          u = o.useRef();
        return (
          o.useLayoutEffect(() => {
            if (n) {
              let e = "";
              r.state.selection.empty ||
                (e = r.state.doc.cut(
                  r.state.selection.from,
                  r.state.selection.to,
                ).textContent),
                c(e),
                e.startsWith("http")
                  ? (i(e),
                    m.current.Focus(),
                    window.setTimeout(() => {
                      m.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? m.current.Focus()
                    : u.current.Focus();
            }
          }, [n, r]),
          o.createElement(
            A.uH,
            {
              onOK: () => {
                r.dispatch(
                  r.state.tr.replaceRangeWith(
                    r.state.selection.from,
                    r.state.selection.to,
                    t.text(l || s, [t.marks.link.create({ href: s })]),
                  ),
                ),
                  r.focus(),
                  a();
              },
              closeModal: a,
              strTitle: (0, h.Xx)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, h.Xx)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == s.length,
            },
            o.createElement(R.II, {
              ref: m,
              value: l,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, h.Xx)("#FormattingToolbar_LinkText"),
            }),
            o.createElement(R.II, {
              ref: u,
              value: s,
              onChange: (e) => i(e.currentTarget.value),
              label: (0, h.Xx)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      function Ae() {
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            se.HP,
            { toolTipContent: "#FormattingToolbar_Undo", direction: "bottom" },
            o.createElement(
              Ge,
              {
                title: (0, h.Xx)("#FormattingToolbar_Undo"),
                command: Te.Yw,
                fnEnabledCheck: Ue,
              },
              o.createElement(H.DeA, null),
            ),
          ),
          o.createElement(
            se.HP,
            { toolTipContent: "#FormattingToolbar_Redo", direction: "bottom" },
            o.createElement(
              Ge,
              {
                title: (0, h.Xx)("#FormattingToolbar_Redo"),
                command: Te.KX,
                fnEnabledCheck: Me,
              },
              o.createElement(H.Jwt, null),
            ),
          ),
        );
      }
      function Ue(e) {
        return Te.of(e.state) > 0;
      }
      function Me(e) {
        return Te.AH(e.state) > 0;
      }
      function Xe(e) {
        const { schema: t } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            se.HP,
            { toolTipContent: "#FormattingToolbar_Bold", direction: "bottom" },
            o.createElement(
              De,
              {
                title: (0, h.Xx)("#FormattingToolbar_Bold"),
                mark: t.marks.strong,
              },
              o.createElement(H.DUs, null),
            ),
          ),
          o.createElement(
            se.HP,
            {
              toolTipContent: "#FormattingToolbar_Italic",
              direction: "bottom",
            },
            o.createElement(
              De,
              {
                title: (0, h.Xx)("#FormattingToolbar_Italic"),
                mark: t.marks.italic,
              },
              o.createElement(H.tzG, null),
            ),
          ),
          o.createElement(
            se.HP,
            {
              toolTipContent: "#FormattingToolbar_Underline",
              direction: "bottom",
            },
            o.createElement(
              De,
              {
                title: (0, h.Xx)("#FormattingToolbar_Underline"),
                mark: t.marks.underline,
              },
              o.createElement(H.nC9, null),
            ),
          ),
          o.createElement(
            se.HP,
            {
              toolTipContent: "#FormattingToolbar_Strike",
              direction: "bottom",
            },
            o.createElement(
              De,
              {
                title: (0, h.Xx)("#FormattingToolbar_Strike"),
                mark: t.marks.strike,
              },
              o.createElement(H.z$U, null),
            ),
          ),
          o.createElement(
            se.HP,
            {
              toolTipContent: "#FormattingToolbar_InlineCode",
              direction: "bottom",
            },
            o.createElement(
              De,
              {
                title: (0, h.Xx)("#FormattingToolbar_InlineCode"),
                mark: t.marks.code,
              },
              o.createElement(H.l2k, null),
            ),
          ),
        );
      }
      function Oe(e) {
        const { schema: t } = e;
        return o.createElement(
          se.HP,
          {
            toolTipContent: "#FormattingToolbar_Paragraph",
            direction: "bottom",
          },
          o.createElement(
            Pe,
            {
              nodeType: t.nodes.paragraph,
              title: (0, h.Xx)("#FormattingToolbar_Paragraph"),
            },
            o.createElement(H.Dos, null),
          ),
        );
      }
      function $e(e) {
        const { schema: t, levels: n } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            se.HP,
            {
              toolTipContent: "#FormattingToolbar_HeadingLevel1",
              direction: "bottom",
            },
            o.createElement(
              Pe,
              {
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
                title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 1),
              },
              o.createElement(H.geY, null),
            ),
          ),
          n >= 2 &&
            o.createElement(
              se.HP,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel2",
                direction: "bottom",
              },
              o.createElement(
                Pe,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 2 },
                  title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 2),
                },
                o.createElement(H.y3S, null),
              ),
            ),
          n >= 3 &&
            o.createElement(
              se.HP,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel3",
                direction: "bottom",
              },
              o.createElement(
                Pe,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 3 },
                  title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 3),
                },
                o.createElement(H.Zhu, null),
              ),
            ),
          n >= 4 &&
            o.createElement(
              se.HP,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel4",
                direction: "bottom",
              },
              o.createElement(
                Pe,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 4 },
                  title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 4),
                },
                o.createElement(H.P2P, null),
              ),
            ),
          n >= 5 &&
            o.createElement(
              se.HP,
              {
                toolTipContent: "#FormattingToolbar_HeadingLevel5",
                direction: "bottom",
              },
              o.createElement(
                Pe,
                {
                  nodeType: t.nodes.heading,
                  attrs: { level: 5 },
                  title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 5),
                },
                o.createElement(H.Lb, null),
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
            se.HP,
            {
              toolTipContent: "#FormattingToolbar_BulletedList",
              direction: "bottom",
            },
            o.createElement(
              Ie,
              {
                title: (0, h.Xx)("#FormattingToolbar_BulletedList"),
                command: ke.KI(t.nodes.bullet_list),
              },
              o.createElement(H.RAD, null),
            ),
          ),
          o.createElement(
            se.HP,
            {
              toolTipContent: "#FormattingToolbar_IndentList",
              direction: "bottom",
            },
            o.createElement(
              Ie,
              {
                title: (0, h.Xx)("#FormattingToolbar_IndentList"),
                command: ke.IB(t.nodes.list_item),
              },
              o.createElement(H.FYd, null),
            ),
          ),
          o.createElement(
            se.HP,
            {
              toolTipContent: "#FormattingToolbar_OutdentList",
              direction: "bottom",
            },
            o.createElement(
              Ie,
              {
                title: (0, h.Xx)("#FormattingToolbar_OutdentList"),
                command: ke.bw(t.nodes.list_item),
              },
              o.createElement(H.LcB, null),
            ),
          ),
        );
      }
      function Ve(e) {
        const { schema: t } = e;
        return o.createElement(
          se.HP,
          {
            toolTipContent: "#FormattingToolbar_InsertLink",
            direction: "bottom",
          },
          o.createElement(Re, { schema: t }, o.createElement(H.hhG, null)),
        );
      }
      function ze(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: n } = e;
        return o.createElement(
          se.HP,
          {
            toolTipContent: t
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            direction: "bottom",
          },
          o.createElement(
            Le,
            { toggled: t, onClick: () => n(!t) },
            o.createElement(H.cSC, null),
          ),
        );
      }
      var Ze = n(56617);
      function Qe(e) {
        const {
            schema: t,
            view: n,
            refUpdateToolbar: a,
            className: r,
            bSpellcheckEnabled: l,
            setSpellcheckEnabled: c,
          } = e,
          [s, i] = (0, Ze.i4)("FormattingToolbar_Expanded", !1);
        return o.createElement(
          we,
          { refUpdateToolbar: a, view: n },
          o.createElement(
            "div",
            { className: (0, te.Z)(re.Toolbar, r) },
            o.createElement(
              Fe,
              null,
              o.createElement(Ae, null),
              o.createElement(xe, null),
              o.createElement(Xe, { schema: t }),
              o.createElement(Be, null),
              o.createElement(
                se.HP,
                {
                  toolTipContent: "#FormattingToolbar_ExpandOptions",
                  direction: "bottom",
                },
                o.createElement(
                  R.zx,
                  {
                    className: (0, te.Z)(
                      re.CommandButton,
                      re.ExpandButton,
                      s && re.Toggled,
                    ),
                    onClick: () => i(!s),
                  },
                  o.createElement(H.Tt3, null),
                ),
              ),
            ),
            o.createElement(
              ve,
              { visible: s },
              o.createElement(
                Fe,
                null,
                o.createElement(Oe, { schema: t }),
                o.createElement($e, { schema: t, levels: 5 }),
                o.createElement(
                  se.HP,
                  {
                    toolTipContent: "#FormattingToolbar_CodeBlock",
                    direction: "bottom",
                  },
                  o.createElement(
                    Pe,
                    {
                      nodeType: t.nodes.code_block,
                      title: (0, h.Xx)("#FormattingToolbar_CodeBlock"),
                    },
                    o.createElement(H.N4L, null),
                  ),
                ),
                o.createElement(xe, null),
                o.createElement(We, { schema: t }),
                o.createElement(xe, null),
                o.createElement(Ve, { schema: t }),
                o.createElement(Be, null),
                c &&
                  o.createElement(ze, {
                    bSpellcheckEnabled: l,
                    setSpellcheckEnabled: c,
                  }),
              ),
            ),
          ),
        );
      }
      const qe = 15;
      function Ye(e) {
        const { note: t } = e,
          [n, a] = o.useState(!1),
          [r, l] = o.useState(),
          s = o.useRef(),
          u = o.useRef(),
          f = o.useRef(t.content),
          E = o.useRef(!1),
          _ = o.useContext(m).onClickURL,
          v =
            null === (T = o.useContext(m).bSpellcheckEnabled) ||
            void 0 === T ||
            T;
        var T;
        const k = o.useContext(m).setSpellcheckEnabled,
          C = (function (e) {
            const t = p();
            return o.useCallback(
              async (n, o) => {
                const a = new Uint8Array(o),
                  r = await t.UploadImage(`notes_${e}_images/`, n, a);
                return Promise.resolve("/gamenotes/" + r);
              },
              [t, e],
            );
          })(t.appid),
          N = (0, ae.id)();
        f.current == t.content || E.current || (f.current = t.content);
        const y = f.current,
          w = (function () {
            const e = (0, c.useQueryClient)(),
              t = p();
            return (0, c.useMutation)(
              (e) => t.SaveGameNote(e.note, e.title, e.bbcode),
              {
                onMutate(t) {
                  const n = { ...t.note, title: t.title, content: t.bbcode };
                  return (
                    g(e, i(t.note), (e) =>
                      e.map((e) => (e.id == n.id ? n : e)),
                    ),
                    console.log(n),
                    n
                  );
                },
                onSuccess(t, n, o) {
                  console.log(o, t),
                    g(e, i(n.note), (e) =>
                      e.map((e) =>
                        e.id === o.id ? { ...e, id: t, not_persisted: !1 } : e,
                      ),
                    );
                },
              },
            );
          })(),
          S = o.useCallback((e, t) => {
            s.current && s.current(),
              t.doc &&
                t.doc != e.state.doc &&
                (E.current ||
                  ((E.current = !0),
                  L.q.ReportTrackedAction("/GameNotes/NoteModified")),
                (u.current = () => ({
                  title: et(e.state.doc),
                  bbcode: (0, U.d)(e.state.doc, pe),
                })),
                a(!0));
          }, []);
        o.useEffect(() => {
          if (!n) return;
          let e = u.current;
          const o = () => {
              if (e) {
                const { title: n, bbcode: o } = e();
                (t.not_persisted && !(null == o ? void 0 : o.length)) ||
                  w.mutate({ note: t, title: n, bbcode: o }),
                  a(!1);
              }
              (e = void 0), (u.current = void 0);
            },
            r = window.setTimeout(o, 1e3 * qe);
          return () => {
            window.clearTimeout(r), o();
          };
        }, [w, n, t]);
        const x = d(),
          B = b(t, x),
          F = {
            onSecondaryButton: () => B.mutate(),
            onSecondaryActionDescription: (0, h.Xx)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return o.createElement(
          "div",
          { className: ie.NoteEditorArea },
          !N &&
            o.createElement(Qe, {
              schema: pe.pm_schema,
              view: r,
              refUpdateToolbar: s,
              className: ie.Toolbar,
              bSpellcheckEnabled: v,
              setSpellcheckEnabled: k,
            }),
          o.createElement(
            le,
            {
              schemaConfig: pe,
              className: ie.EditorInput,
              bbcode: y,
              onUpdate: S,
              refView: l,
              onClickURL: _,
              bSpellcheckEnabled: v,
              panelProps: F,
            },
            o.createElement(Ee, {
              uploadImage: C,
              nodeType: pe.pm_schema.nodes.image,
            }),
          ),
          !N && o.createElement(Ke, { note: t, bDirty: n }),
        );
      }
      function Ke(e) {
        const { note: t, bDirty: n } = e,
          [a, r, l] = (0, ne.X9)(!1),
          c = "single" == o.useContext(m).mode,
          s = d(),
          i = b(t, s),
          u = o.useCallback(() => {
            !n && t.not_persisted ? i.mutate() : r();
          }, [n, t, i, r]);
        return o.createElement(
          "div",
          { className: ie.NoteActions },
          a && o.createElement(Je, { note: t, closeModal: l, deleteNote: i }),
          o.createElement(
            se.HP,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            o.createElement(R.zx, { onClick: u }, o.createElement(H.rFk, null)),
          ),
          c && o.createElement(je, { bDirty: n }),
        );
      }
      function je(e) {
        const { bDirty: t } = e,
          n = d();
        return t
          ? o.createElement(
              R.KM,
              { onClick: () => n(), className: ie.CloseWindowButton },
              (0, h.Xx)("#Button_SaveAndClose"),
            )
          : o.createElement(
              R.zx,
              { onClick: () => n(), className: ie.CloseWindowButton },
              (0, h.Xx)("#Button_Close"),
            );
      }
      function Je(e) {
        const { note: t, closeModal: n, deleteNote: a } = e;
        return o.createElement(
          A.Yy,
          { active: !0 },
          o.createElement(A.uH, {
            strTitle: (0, h.Xx)("#UserGameNotes_DeleteNote"),
            strDescription: (0, h.Xx)("#UserGameNotes_PromptDelete"),
            onOK: () => a.mutate(),
            bOKDisabled: a.isLoading,
            strOKButtonText: (0, h.Xx)("#Button_Delete"),
            closeModal: n,
          }),
        );
      }
      function et(e) {
        let t = "";
        for (let n = 0; n < e.content.childCount; n++) {
          const o = e.content.child(n);
          if (o.isText) t += o.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = et(o)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      function tt() {
        const e = (0, a.$B)(),
          t = _(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let n = e.params.noteid;
        const r = (0, a.k6)(),
          l = (function (e) {
            const t = (0, c.useQueryClient)(),
              n = p();
            return o.useCallback(() => {
              const o = (0, h.Xx)("#UserGameNotes_UntitledNote_Title"),
                a = n.NewNote(e, o);
              return g(t, e, (e) => [...e, a]), a.id;
            }, [t, n, e]);
          })(t),
          { data: s, isLoading: i } = E(t);
        let m;
        s && n && (m = s.find((e) => e.id === n)),
          o.useLayoutEffect(() => {
            !s ||
              (n && s.find((e) => e.id === n)) ||
              (s.length > 0 && s[0].id ? ot(r, t, s[0].id) : ot(r, t, l()));
          }, [r, t, n, s, l]);
        const u = o.createElement(
          se.HP,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          o.createElement(
            R.zx,
            {
              className: ie.NewNoteButton,
              onClick: () => {
                const e = l();
                ot(r, t, e);
              },
            },
            o.createElement(H.ex9, null),
          ),
        );
        return s
          ? o.createElement(nt, {
              noteParent: t,
              notes: s,
              activeNoteID: null == m ? void 0 : m.id,
              actions: u,
            })
          : null;
      }
      function nt(e) {
        const { noteParent: t, notes: n, activeNoteID: r, actions: l } = e,
          [c, s] = (0, Ze.i4)("NotesListCollapsed", !1),
          i = o.useContext(m).bPinnedView,
          u = (0, ae.id)(),
          d = n.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, h.Xx)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: o.createElement(Ye, { note: e }),
              pageClassName: ie.NotePage,
              hideTitle: !0,
            };
          }),
          p = (0, a.k6)(),
          f = o.useCallback((e) => ot(p, t, e), [p, t]);
        return o.createElement(R.TI, {
          title: (0, h.Xx)("#UserGameNotes_NotesList"),
          pages: d,
          className: (0, te.Z)(ie.NotesPagedSettings, i && ie.PinnedView),
          page: r,
          onPageRequested: f,
          bottomControls: l,
          hideList: c,
          toggleHideList: i || u ? void 0 : () => s(!c),
        });
      }
      function ot(e, t, n) {
        let o;
        (o =
          "appid" in t
            ? r.AppNotes(t.appid, n)
            : r.ShortcutNotes(t.shortcut, n)),
          e.replace(o, e.location.state);
      }
      var at = n(61578);
      class rt {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        async GetGamesWithNotes() {
          const e = k.gA.Init(at.SX);
          return (
            await at.Rr.GetGamesWithNotes(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            )
          )
            .Body()
            .toObject().games_with_notes;
        }
        async GetGameNotesList(e, t) {
          const n = k.gA.Init(at.DI);
          this.SetParentOnRequest(n, e), n.Body().set_include_content(t);
          const o = await at.Rr.GetNotesForGame(
            this.m_SteamInterface.GetServiceTransport(),
            n,
          );
          return o.Body().notes().length
            ? o.Body().toObject().notes
            : [this.NewNote(e, "New Note")];
        }
        async SaveGameNote(e, t, n) {
          const o = k.gA.Init(at.ge);
          e.not_persisted
            ? o.Body().set_create_new(!0)
            : o.Body().set_note_id(e.id),
            e.appid
              ? o.Body().set_appid(e.appid)
              : o.Body().set_shortcut_name(e.shortcut_name),
            o.Body().set_title(t),
            o.Body().set_content(n);
          const a = await at.Rr.SaveNote(
            this.m_SteamInterface.GetServiceTransport(),
            o,
          );
          if (!a.BSuccess()) throw a.GetErrorMessage();
          return a.Body().note_id();
        }
        async DeleteGameNote(e, t) {
          const n = k.gA.Init(at.$$);
          this.SetParentOnRequest(n, e), n.Body().set_note_id(t);
          const o = await at.Rr.DeleteNote(
            this.m_SteamInterface.GetServiceTransport(),
            n,
          );
          if (!o.BSuccess()) throw o.GetErrorMessage();
          return t;
        }
        async SyncNotes() {}
        SetParentOnRequest(e, t) {
          "appid" in t
            ? e.Body().set_appid(t.appid)
            : e.Body().set_shortcut_name(t.shortcut);
        }
        NewNote(e, t) {
          let n = {};
          return (
            "appid" in e ? (n.appid = e.appid) : (n.shortcut_name = e.shortcut),
            {
              id: "temp_" + rt.sm_lastNoteID++,
              ...n,
              ordinal: 0,
              time_created: Date.now() / 1e3,
              time_modified: Date.now() / 1e3,
              title: t,
              content: "",
              not_persisted: !0,
            }
          );
        }
        UploadImage(e, t, n) {
          return Promise.reject("NYI");
        }
      }
      function lt(e) {
        const t = (0, N.lS)(),
          [n] = o.useState(() => new rt(t));
        return o.createElement(
          u,
          { mode: "page", store: n },
          o.createElement(
            a.rs,
            null,
            o.createElement(a.AW, { path: r.List() }, o.createElement(G, null)),
            o.createElement(
              a.AW,
              { path: r.AppNotes(":appid", ":noteid?") },
              o.createElement(tt, null),
            ),
            o.createElement(
              a.AW,
              null,
              o.createElement(a.l_, { to: `${r.List()}` }),
            ),
          ),
        );
      }
      rt.sm_lastNoteID = 0;
    },
  },
]);

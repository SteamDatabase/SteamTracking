/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4292],
  {
    59722: (e) => {
      e.exports = {
        Hover: "_1lo3nIamSX1TzzE4TlhFXA",
        Link: "_1ds3uh7ntoekPm635F2Ziv",
        LinkHelp: "_3Vn5X8bzPjWx5p545nkB6k",
      };
    },
    28106: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => u });
      var o = n(26205),
        r = n(57053),
        s = n(52893),
        i = n(90626),
        a = n(61859),
        l = n(17558),
        c = n(22145),
        d = n(59722);
      const u = i.memo(function (e) {
        const {
            linkMarkType: t,
            onURLPasted: n,
            schema: a,
            onClickURL: d = h,
          } = e,
          u = i.useRef(d);
        u.current = d;
        const [p, f] = i.useState(),
          [g, v] = i.useState(),
          [w, E] = i.useState(),
          [P, _] = (0, l.E)(a),
          y = i.useMemo(
            () =>
              new s.k_({
                props: {
                  handleClickOn(e, n, o, r, s, i) {
                    if (i && (s.ctrlKey || 1 == s.button)) {
                      const e = o
                        .resolve(n - r)
                        .marks()
                        .find((e) => e.type == t);
                      if (e)
                        return (
                          u.current(e.attrs.href, s.view),
                          s.preventDefault(),
                          !0
                        );
                    }
                    return !1;
                  },
                  handleKeyDown: (e, t) =>
                    !(
                      "k" != t.key ||
                      (!t.metaKey && !t.ctrlKey) ||
                      t.shiftKey ||
                      t.altKey
                    ) && (P(e), !0),
                  clipboardTextParser(e, s, i, l) {
                    let c,
                      d = [];
                    for (; (c = e.match(o.O)); ) {
                      c.index > 0 && d.push(a.text(e.substring(0, c.index)));
                      const r = (0, o.S)(c[0]),
                        s = n && n(r);
                      s && "default" !== s
                        ? "remove" !== s && d.push(s)
                        : d.push(a.text(c[0], [t.create({ href: r })])),
                        (e = e.substring(c.index + c[0].length));
                    }
                    return (
                      e.length && d.push(a.text(e)),
                      new r.Ji(r.FK.from(d), s.start(), s.end())
                    );
                  },
                  handleDOMEvents: {
                    mouseover: (e, t) => {
                      const n = t.target;
                      if (
                        n &&
                        "getBoundingClientRect" in n &&
                        "A" == n.nodeName
                      ) {
                        const e = n.getBoundingClientRect();
                        f(e.left + e.width / 2), v(e.bottom + 2), E(n);
                      } else E(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (E(void 0), !1),
                  },
                },
              }),
            [t, P, n, a],
          );
        (0, c.c$)(y);
        let k = null;
        return (
          w &&
            p &&
            g &&
            (k = i.createElement(m, {
              top: g,
              left: p,
              href: w.getAttribute("href"),
            })),
          i.createElement(i.Fragment, null, k, _)
        );
      });
      function m(e) {
        const { top: t, left: n, href: o } = e,
          [r, s] = i.useState(0),
          l = i.useRef(null);
        i.useLayoutEffect(() => {
          s(l.current.getBoundingClientRect().width);
        }, [t, n, o]);
        const c = { top: `${t}px`, left: `${Math.max(n - r / 2, 12)}px` };
        return i.createElement(
          "div",
          { className: d.Hover, style: c, ref: l },
          i.createElement("div", { className: d.Link }, o),
          i.createElement(
            "div",
            { className: d.LinkHelp },
            (0, a.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function h(e, t) {
        t.open(e);
      }
    },
    26555: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => s });
      var o = n(90626),
        r = n(90286);
      function s(e, t) {
        const { msAutosaveTimeout: n = 1e3, msMaxInterval: s = 10 * n } =
            t || {},
          [i, a] = o.useState(!1),
          l = o.useRef(0);
        return (
          (0, r.u)(
            e,
            o.useCallback(() => {
              (l.current = performance.now()), a(!0);
            }, []),
          ),
          o.useEffect(() => {
            if (!i || !e) return;
            const t = performance.now(),
              o = (i = !1) => {
                r = void 0;
                const c = performance.now(),
                  d = c - l.current;
                i || d >= n || c - t >= s
                  ? (console.log("Committing changes"),
                    e.CommitChanges(),
                    a(!1))
                  : (r = window.setTimeout(o, n - d));
              };
            let r = window.setTimeout(o, n);
            return () => {
              r && (window.clearTimeout(r), o(!0));
            };
          }, [i, e, n, s]),
          { bDirty: i }
        );
      }
    },
    69956: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => l });
      var o = n(91986),
        r = n(52893),
        s = n(90626),
        i = n(72739),
        a = n(22145);
      const l = s.memo(function (e) {
        const { specs: t } = e,
          [n, o] = s.useState([]),
          i = s.useRef(0),
          l = s.useCallback(
            (e) => (
              o((t) => [...t, { id: i.current++, nodeView: e }]),
              () => o((t) => t.filter((t) => t.nodeView != e))
            ),
            [],
          ),
          u = s.useMemo(() => {
            const e = {};
            return (
              t
                .filter(Boolean)
                .forEach(
                  (t) => (e[t.type.name] = (e, n, o) => new d(t, e, n, o, l)),
                ),
              new r.k_({ props: { nodeViews: e } })
            );
          }, [t, l]);
        return (
          (0, a.c$)(u),
          n.map(({ id: e, nodeView: t }) =>
            s.createElement(c, { key: e, nodeView: t }),
          )
        );
      });
      function c(e) {
        const {
            element: t,
            spec: n,
            getProps: o,
            onPropsChanged: r,
            actions: a,
            isSelected: l,
          } = e.nodeView,
          [c, d] = s.useReducer((e) => e + 1, 0);
        return (
          s.useEffect(() => r.Register(d).Unregister, [r, d]),
          i.createPortal(
            s.createElement(n.component, { ...o(), selected: l(), ...a }),
            t,
          )
        );
      }
      class d {
        constructor(e, t, n, r, s) {
          this.node = t;
          const i = n.dom.ownerDocument.createElement(
            e.type.isInline ? "span" : "div",
          );
          this.dom = i;
          const { selection: a } = n.state;
          this.selected = r() >= a.from && r() + t.nodeSize <= a.to;
          const l = {
              setAttrs: (e, t) => {
                n.dispatch(n.state.tr.setNodeMarkup(r(), t, e));
              },
              removeNode: () => {
                n.dispatch(n.state.tr.delete(r(), r() + 1));
              },
              focusView: () => {
                window.setTimeout(() => n.focus(), 1);
              },
            },
            c = new o.l();
          (this.destroy = s({
            element: i,
            spec: e,
            getProps: () => e.readProps(this.node),
            isSelected: () => this.selected,
            onPropsChanged: c,
            actions: l,
          })),
            (this.onPropsChanged = c.Dispatch.bind(c));
        }
        update(e, t, n) {
          return (
            e.type == this.node.type &&
            ((this.node = e), this.onPropsChanged(), !0)
          );
        }
        selectNode() {
          (this.selected = !0), this.onPropsChanged();
        }
        deselectNode() {
          (this.selected = !1), this.onPropsChanged();
        }
      }
    },
    86807: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => s });
      var o = n(90626),
        r = n(72739);
      function s(e) {
        const {
            visible: t = !0,
            className: n,
            keepMounted: s = !1,
            expandDirection: i = "height",
            msAnimationDuration: a = 250,
            children: l,
          } = e,
          {
            style: c,
            active: d,
            refDiv: u,
          } = (function (e, t = "height", n = 250) {
            const s = o.useRef(),
              i = o.useRef(!0),
              [a, l] = o.useState("idle"),
              [c, d] = o.useState({});
            o.useLayoutEffect(() => {
              i.current ? (i.current = !1) : l("start");
            }, [e]),
              o.useLayoutEffect(() => {
                const n = s.current,
                  o = "height" == t ? "scrollHeight" : "scrollWidth",
                  i = () => {
                    r.unstable_batchedUpdates(() => {
                      d({}), l("idle");
                    });
                  };
                if ("start" == a) {
                  const r = n[o];
                  0 == r
                    ? i()
                    : (d((n) => ({
                        [t]: e ? "0px" : `${r}px`,
                        ...n,
                        overflow: "hidden",
                      })),
                      l("active"));
                } else if ("active" == a) {
                  n.scrollTop;
                  const r = n[o];
                  return (
                    d({ overflow: "hidden", [t]: e ? `${r}px` : "0px" }),
                    n.addEventListener("transitionend", i),
                    () => {
                      n.removeEventListener("transitionend", i);
                    }
                  );
                }
              }, [a, e]);
            const u = { ...c, transition: `${t} ${n}ms` };
            return { style: u, active: "idle" != a, refDiv: s };
          })(t, i, a);
        return t || d || s
          ? o.createElement("div", { className: n, ref: u, style: c }, l)
          : null;
      }
    },
    71696: (e, t, n) => {
      "use strict";
      n.d(t, { Xv: () => v, pw: () => w });
      var o = n(81393),
        r = n(22145),
        s = n(52893),
        i = n(29287),
        a = n(90626);
      var l = n(72739),
        c = n(78395),
        d = n(21869),
        u = n(22797),
        m = n(6144),
        h = n(61859),
        p = n(27650),
        f = n(64753),
        g = n(73309);
      function v(e) {
        const {
            children: t,
            ProcessFileUpload: n,
            FetchImageURL: o,
            bAllowImageHotLinking: r = !1,
          } = e,
          [s] = a.useState(() => ({ manager: new _(n, o, r) })),
          { manager: i } = s;
        return (
          i.SetProps(n, o, r),
          a.createElement(
            y.Provider,
            { value: s },
            a.createElement(R, { manager: i }),
            a.createElement(U, { manager: i }, t),
          )
        );
      }
      const w = a.memo(function (e) {
        const { nodeType: t } = e,
          n = k(),
          {
            placeholderElements: o,
            createPlaceholder: l,
            replacePlaceholder: c,
          } = (function (e, t = "PlaceholderPlugin") {
            const [n, o] = a.useState([]),
              [l] = a.useState(
                () =>
                  new s.k_({
                    key: new s.hs(t),
                    state: {
                      init: () => i.zF.empty,
                      apply(t, n) {
                        n = n.map(t.mapping, t.doc);
                        const r = t.getMeta(this) || [];
                        for (const s of r)
                          if (null == s ? void 0 : s.add) {
                            const { id: r, data: a } = s.add,
                              l = (t, n) => {
                                const s = document.createElement(e);
                                return (
                                  o((e) => [
                                    ...e,
                                    { id: r, element: s, data: a },
                                  ]),
                                  s
                                );
                              },
                              c = (e) => {
                                o((t) => t.filter((t) => t.element != e));
                              },
                              d = i.NZ.widget(s.add.pos, l, {
                                id: r,
                                destroy: c,
                              });
                            n = n.add(t.doc, [d]);
                          } else
                            (null == s ? void 0 : s.remove) &&
                              (n = n.remove(
                                n.find(
                                  void 0,
                                  void 0,
                                  (e) => e.id == s.remove.id,
                                ),
                              ));
                        return n;
                      },
                    },
                    props: {
                      decorations(e) {
                        return this.getState(e);
                      },
                    },
                  }),
              );
            (0, r.c$)(l);
            const c = (0, r.Hd)(),
              d = a.useRef(0),
              u = a.useCallback(
                (e, n, o) => {
                  const r = `${t}_${d.current++}`;
                  let s = o || c.state.tr;
                  void 0 === n &&
                    (s.selection.empty || s.deleteSelection(),
                    (n = s.selection.from));
                  const i = (null == o ? void 0 : o.getMeta(l)) || [];
                  return (
                    s.setMeta(l, [...i, { add: { id: r, pos: n, data: e } }]),
                    o || c.dispatch(s),
                    r
                  );
                },
                [l, t, c],
              ),
              m = a.useCallback(
                (e) => {
                  const t = l.getState(c.state),
                    n =
                      null == t
                        ? void 0
                        : t.find(void 0, void 0, (t) => t.id == e);
                  return (null == n ? void 0 : n.length) ? n[0].from : void 0;
                },
                [c, l],
              ),
              h = a.useCallback(
                (e, t) => {
                  const n = m(e);
                  return (
                    !!n &&
                    (t
                      ? c.dispatch(
                          c.state.tr
                            .replaceWith(n, n, t)
                            .setMeta(l, [{ remove: { id: e } }]),
                        )
                      : c.dispatch(
                          c.state.tr.setMeta(l, [{ remove: { id: e } }]),
                        ),
                    !0)
                  );
                },
                [l, m, c],
              );
            return {
              placeholderElements: n,
              createPlaceholder: u,
              findPlaceholder: m,
              replacePlaceholder: h,
            };
          })("span", "FileUploadPlaceholder");
        !(function (e, t) {
          (0, r.c$)(
            a.useMemo(
              () =>
                new s.k_({
                  props: {
                    handlePaste(n, o, r) {
                      if (e.BAllowImageHotLinking()) return !1;
                      const s = [];
                      if (
                        (r.content.descendants((e, n) => {
                          e.type == t && s.push({ url: e.attrs.src, pos: n });
                        }),
                        s.length)
                      ) {
                        let t = n.state.tr;
                        t.selection.empty || t.deleteSelection();
                        let o = t.selection.from,
                          i = 0;
                        for (const n of s) {
                          const s = r.content.cut(i, n.pos - 1);
                          t.insert(o, s),
                            (o += s.size),
                            e.QueueUploadFileByURL(n.url, o, t),
                            (i = n.pos + 1);
                        }
                        return (
                          t.insert(o, r.content.cut(i)),
                          t.scrollIntoView(),
                          n.dispatch(t),
                          !0
                        );
                      }
                    },
                    handleDOMEvents: {
                      paste(t, n) {
                        var o, r;
                        if (
                          (null ===
                            (r =
                              null === (o = n.clipboardData) || void 0 === o
                                ? void 0
                                : o.files) || void 0 === r
                            ? void 0
                            : r.length) > 0
                        ) {
                          n.preventDefault();
                          for (const t of n.clipboardData.files)
                            e.UploadFile(t);
                          return !0;
                        }
                      },
                    },
                  },
                }),
              [t, e],
            ),
          );
        })(n, t);
        const d = (0, r.Hd)();
        return (
          a.useEffect(() => n.RegisterEditor(d, l, c), [n, d, l, c]),
          a.createElement(
            a.Fragment,
            null,
            o.map(({ id: e, element: t, data: n }) =>
              a.createElement(P, { key: e, element: t, data: n }),
            ),
          )
        );
      });
      class E extends Error {
        constructor(e) {
          super(e);
        }
      }
      function P(e) {
        const { element: t, data: n } = e,
          o = "file" in n ? n.file : void 0,
          r = a.useMemo(() => o && URL.createObjectURL(o), [o]),
          s = "url" in n ? n.url : r;
        return l.createPortal(
          a.createElement(
            "span",
            { className: g.FileUploadPlaceholder },
            a.createElement(
              "div",
              { className: g.ThrobberCtn },
              a.createElement(
                "div",
                { className: g.ThrobberRow },
                a.createElement(
                  "div",
                  { className: g.Throbber },
                  a.createElement(u.t, { size: "medium", position: "center" }),
                ),
                (0, h.we)("#Prosemirror_FileUpload_Uploading"),
              ),
            ),
            a.createElement("img", { src: s, className: g.PendingImage }),
          ),
          t,
        );
      }
      class _ {
        constructor(e, t, n) {
          (this.m_errors = (0, m.Jc)([])),
            (this.m_fnProcessFileUpload = e),
            (this.m_fnFetchImageURL = t),
            (this.m_bAllowImageHotLinking = n);
        }
        SetProps(e, t, n) {
          (this.m_fnProcessFileUpload = e),
            (this.m_fnFetchImageURL = t),
            (this.m_bAllowImageHotLinking = n),
            (0, o.w)(
              !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
              "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
            );
        }
        RegisterEditor(e, t, n) {
          return (
            (0, o.w)(!this.m_view, "Duplicate registration"),
            (this.m_view = e),
            (this.m_fnCreatePlaceholder = t),
            (this.m_fnReplacePlaceholder = n),
            () => {
              this.m_view == e &&
                this.m_fnCreatePlaceholder == t &&
                this.m_fnReplacePlaceholder == n &&
                ((this.m_view = void 0),
                (this.m_fnCreatePlaceholder = void 0),
                (this.m_fnReplacePlaceholder = void 0));
            }
          );
        }
        AddError(e) {
          this.m_errors.Set([...this.m_errors.Value, e]);
        }
        GetErrors() {
          return this.m_errors;
        }
        ClearErrors() {
          this.m_errors.Set([]);
        }
        GetViewPosition(e, t) {
          var n;
          const o =
            null === (n = this.m_view) || void 0 === n
              ? void 0
              : n.posAtCoords({ left: e, top: t });
          return null == o ? void 0 : o.pos;
        }
        async UploadFile(e, t) {
          (this.m_fnCreatePlaceholder && this.m_fnReplacePlaceholder) ||
            this.AddError("No editor registered to handle file upload");
          const n = this.m_fnCreatePlaceholder({ file: e }, t);
          return this.ProcessFile(e, n);
        }
        BAllowImageHotLinking() {
          return this.m_bAllowImageHotLinking;
        }
        QueueUploadFileByURL(e, t, n) {
          if (
            ((this.m_fnCreatePlaceholder && this.m_fnReplacePlaceholder) ||
              this.AddError("No editor registered to handle file upload"),
            !this.m_fnFetchImageURL)
          )
            return void console.warn(
              "The file upload manager does not have a way to fetch image URLs, so we cannot accept pasted <img> tags.",
            );
          console.log(`QueueUploadFileByURL: ${e} at pos ${t}`);
          const o = this.m_fnCreatePlaceholder({ url: e }, t, n);
          this.FetchURLAndProcess(e, o);
        }
        async FetchURLAndProcess(e, t) {
          var n;
          try {
            const o = new URL(e),
              r = await this.m_fnFetchImageURL(e),
              s = new File(
                [r],
                decodeURIComponent(
                  (null === (n = o.pathname) || void 0 === n
                    ? void 0
                    : n.replace(/^.*\//, "")) || "image",
                ),
                { type: r.type },
              );
            await this.ProcessFile(s, t);
          } catch (n) {
            this.AddError(`Unable to process URL: ${e}`),
              this.m_fnReplacePlaceholder(t);
          }
        }
        async ProcessFile(e, t) {
          let n;
          try {
            console.log(`Processing file upload: "${e.name}"`),
              (n = await this.m_fnProcessFileUpload(e));
          } catch (e) {
            e instanceof E
              ? this.AddError(e.message)
              : this.AddError(`Error proccessing file upload: ${e}`);
          }
          n
            ? this.m_fnReplacePlaceholder(t, n)
            : this.m_fnReplacePlaceholder(t);
        }
      }
      const y = a.createContext(void 0);
      function k() {
        return a.useContext(y).manager;
      }
      const R = a.memo(function (e) {
        const { manager: t } = e,
          n = (0, f.gc)(t.GetErrors());
        return n.length
          ? a.createElement(
              d.E,
              { active: !0 },
              a.createElement(c.o0, {
                bAlertDialog: !0,
                strTitle: (0, h.we)("#Error_Generic"),
                strDescription: n.map((e, t) =>
                  a.createElement("div", { key: t }, e),
                ),
                strOKButtonText: (0, h.we)("#Button_OK"),
                onOK: () => t.ClearErrors(),
                onCancel: () => t.ClearErrors(),
              }),
            )
          : null;
      });
      function U(e) {
        const { manager: t, children: n } = e,
          o = a.useCallback(
            (e, n) => {
              for (const o of e)
                t.UploadFile(o, t.GetViewPosition(n.clientX, n.clientY));
            },
            [t],
          ),
          [r, s] = (0, p.hk)(o);
        return a.cloneElement(n, { ...r, ...n.props });
      }
    },
  },
]);

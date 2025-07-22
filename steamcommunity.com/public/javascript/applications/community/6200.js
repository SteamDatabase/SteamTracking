/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6200],
  {
    59722: (e) => {
      e.exports = {
        Hover: "_1lo3nIamSX1TzzE4TlhFXA",
        Link: "_1ds3uh7ntoekPm635F2Ziv",
        LinkHelp: "_3Vn5X8bzPjWx5p545nkB6k",
      };
    },
    42714: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => r });
      var o = n(26205);
      function r(e, t, n, r) {
        let s,
          i = [];
        for (; (s = t.match(o.O)); ) {
          s.index > 0 && i.push(e.text(t.substring(0, s.index)));
          const l = (0, o.S)(s[0]),
            a = r && r(l);
          a && "default" !== a
            ? "remove" !== a && i.push(a)
            : i.push(e.text(s[0], [n.create({ href: l })])),
            (t = t.substring(s.index + s[0].length));
        }
        if (0 != i.length) return t.length && i.push(e.text(t)), i;
      }
    },
    28106: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => u });
      var o = n(57053),
        r = n(52893),
        s = n(90626),
        i = n(61859),
        l = n(17558),
        a = n(22145),
        c = n(59722),
        d = n(42714);
      const u = s.memo(function (e) {
        const {
            linkMarkType: t,
            onURLPasted: n,
            schema: i,
            onClickURL: c = h,
          } = e,
          u = s.useRef(c);
        u.current = c;
        const [p, f] = s.useState(),
          [g, v] = s.useState(),
          [w, P] = s.useState(),
          [E, _] = (0, l.E)(i),
          y = s.useMemo(
            () =>
              new r.k_({
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
                    ) && (E(e), !0),
                  clipboardTextParser(e, r, s, l) {
                    const a = (0, d.F)(i, e, t, n);
                    return a && new o.Ji(o.FK.from(a), r.start(), r.end());
                  },
                  handlePaste(e, r, s) {
                    let l = [];
                    if (
                      (s.content.descendants((e, o) => {
                        if (e.isText) {
                          const r = (0, d.F)(i, e.text, t, n);
                          r && l.push({ node: e, pos: o, rgNodes: r });
                        }
                      }),
                      !l.length)
                    )
                      return !1;
                    let a = e.state.tr;
                    a.selection.empty || a.deleteSelection();
                    let c = a.selection.from,
                      u = 0;
                    for (const e of l) {
                      const { node: t, pos: n, rgNodes: r } = e,
                        i = s.content.cut(u, n).append(o.FK.from(r));
                      a.insert(c, i), (c += i.size + 2), (u = n + t.nodeSize);
                    }
                    return (
                      a.insert(c, s.content.cut(u)),
                      a.scrollIntoView(),
                      e.dispatch(a),
                      !0
                    );
                  },
                  handleDOMEvents: {
                    mouseover: (e, t) => {
                      for (
                        let e = t.target;
                        e && e != t.currentTarget;
                        e = e.parentElement
                      )
                        if ("A" == e.nodeName && "getBoundingClientRect" in e) {
                          const t = e.getBoundingClientRect();
                          return (
                            f(t.left + t.width / 2), v(t.bottom + 2), void P(e)
                          );
                        }
                      P(void 0);
                    },
                    mouseleave: (e, t) => (P(void 0), !1),
                  },
                },
              }),
            [t, E, n, i],
          );
        (0, a.c$)(y);
        let k = null;
        return (
          w &&
            p &&
            g &&
            (k = s.createElement(m, {
              top: g,
              left: p,
              href: w.getAttribute("href"),
            })),
          s.createElement(s.Fragment, null, k, _)
        );
      });
      function m(e) {
        const { top: t, left: n, href: o } = e,
          [r, l] = s.useState(0),
          a = s.useRef(null);
        s.useLayoutEffect(() => {
          l(a.current.getBoundingClientRect().width);
        }, [t, n, o]);
        const d = { top: `${t}px`, left: `${Math.max(n - r / 2, 12)}px` };
        return s.createElement(
          "div",
          { className: c.Hover, style: d, ref: a },
          s.createElement("div", { className: c.Link }, o),
          s.createElement(
            "div",
            { className: c.LinkHelp },
            (0, i.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function h(e, t) {
        t.open(e);
      }
    },
    69956: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => u, U: () => a });
      var o = n(91986),
        r = n(52893),
        s = n(90626),
        i = n(72739),
        l = n(22145);
      const a = s.memo(function (e) {
        const { specs: t } = e,
          [n, o] = s.useState([]),
          i = s.useRef(0),
          a = s.useCallback(
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
                  (t) => (e[t.type.name] = (e, n, o) => new d(t, e, n, o, a)),
                ),
              new r.k_({ props: { nodeViews: e } })
            );
          }, [t, a]);
        return (
          (0, l.c$)(u),
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
            actions: l,
            isSelected: a,
          } = e.nodeView,
          [c, d] = s.useReducer((e) => e + 1, 0);
        return (
          s.useEffect(() => r.Register(d).Unregister, [r, d]),
          i.createPortal(
            s.createElement(n.component, { ...o(), selected: a(), ...l }),
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
          const { selection: l } = n.state;
          this.selected = r() >= l.from && r() + t.nodeSize <= l.to;
          const a = (e) => {
              const o = e(n.state.tr, t, r());
              o && n.dispatch(o);
            },
            c = {
              update: a,
              setAttrs: (e, t) => a((n, o, r) => n.setNodeMarkup(r, t, e)),
              removeNode: () => a((e, t, n) => e.delete(n, n + t.nodeSize)),
              focusView: () => {
                window.setTimeout(() => n.focus(), 1);
              },
            },
            d = new o.l();
          (this.destroy = s({
            element: i,
            spec: e,
            getProps: () => e.readProps(this.node),
            isSelected: () => this.selected,
            onPropsChanged: d,
            actions: c,
          })),
            (this.onPropsChanged = d.Dispatch.bind(d));
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
      function u(e) {
        return (t, n, o) => t.replaceWith(o, o + n.nodeSize, e);
      }
    },
    86807: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => s });
      var o = n(90626),
        r = n(72739);
      function s(e) {
        const {
            id: t,
            role: n,
            visible: s = !0,
            className: i,
            keepMounted: l = !1,
            expandDirection: a = "height",
            msAnimationDuration: c = 250,
            children: d,
          } = e,
          {
            style: u,
            active: m,
            refDiv: h,
          } = (function (e, t = "height", n = 250) {
            const s = o.useRef(null),
              i = o.useRef(!0),
              [l, a] = o.useState("idle"),
              [c, d] = o.useState(e ? {} : { [t]: "0px", overflow: "hidden" }),
              [u, m] = o.useState(e);
            o.useLayoutEffect(() => {
              i.current || a("start"), e && m(e);
            }, [e]),
              o.useLayoutEffect(
                () => (
                  (i.current = !1),
                  () => {
                    i.current = !0;
                  }
                ),
                [],
              ),
              o.useLayoutEffect(() => {
                const n = s.current,
                  o = "height" == t ? "scrollHeight" : "scrollWidth",
                  i = () => {
                    r.unstable_batchedUpdates(() => {
                      d(e ? {} : { [t]: "0px", overflow: "hidden" }),
                        a("idle"),
                        m(e);
                    });
                  };
                if ("start" == l) {
                  const r = n[o];
                  0 == r
                    ? i()
                    : (d((n) => ({
                        [t]: e ? "0px" : `${r}px`,
                        ...n,
                        overflow: "hidden",
                      })),
                      a("active"));
                } else if ("active" == l) {
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
              }, [l, e]);
            const h = { ...c, transition: `${t} ${n}ms` };
            return { style: h, active: u, refDiv: s };
          })(s, a, c);
        if (!s && !m && !l) return null;
        const p = {};
        return (
          s || (p.inert = "inert"),
          o.createElement(
            "div",
            { id: t, role: n, className: i, ref: h, style: u, ...p },
            d,
          )
        );
      }
    },
    71696: (e, t, n) => {
      "use strict";
      n.d(t, { Xv: () => v, pw: () => w });
      var o = n(81393),
        r = n(22145),
        s = n(52893),
        i = n(29287),
        l = n(90626);
      var a = n(72739),
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
          [s] = l.useState(() => ({ manager: new _(n, o, r) })),
          { manager: i } = s;
        return (
          i.SetProps(n, o, r),
          l.createElement(
            y.Provider,
            { value: s },
            l.createElement(R, { manager: i }),
            l.createElement(U, { manager: i }, t),
          )
        );
      }
      const w = l.memo(function (e) {
        const { nodeType: t } = e,
          n = k(),
          {
            placeholderElements: o,
            createPlaceholder: a,
            replacePlaceholder: c,
          } = (function (e, t = "PlaceholderPlugin") {
            const [n, o] = l.useState([]),
              [a] = l.useState(
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
                            const { id: r, data: l } = s.add,
                              a = (t, n) => {
                                const s = document.createElement(e);
                                return (
                                  o((e) => [
                                    ...e,
                                    { id: r, element: s, data: l },
                                  ]),
                                  s
                                );
                              },
                              c = (e) => {
                                o((t) => t.filter((t) => t.element != e));
                              },
                              d = i.NZ.widget(s.add.pos, a, {
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
            (0, r.c$)(a);
            const c = (0, r.Hd)(),
              d = l.useRef(0),
              u = l.useCallback(
                (e, n, o) => {
                  const r = `${t}_${d.current++}`;
                  let s = o || c.state.tr;
                  void 0 === n &&
                    (s.selection.empty || s.deleteSelection(),
                    (n = s.selection.from));
                  const i = (null == o ? void 0 : o.getMeta(a)) || [];
                  return (
                    s.setMeta(a, [...i, { add: { id: r, pos: n, data: e } }]),
                    o || c.dispatch(s),
                    r
                  );
                },
                [a, t, c],
              ),
              m = l.useCallback(
                (e) => {
                  const t = a.getState(c.state),
                    n =
                      null == t
                        ? void 0
                        : t.find(void 0, void 0, (t) => t.id == e);
                  return (null == n ? void 0 : n.length) ? n[0].from : void 0;
                },
                [c, a],
              ),
              h = l.useCallback(
                (e, t) => {
                  const n = m(e);
                  return (
                    !!n &&
                    (t
                      ? c.dispatch(
                          c.state.tr
                            .replaceWith(n, n, t)
                            .setMeta(a, [{ remove: { id: e } }]),
                        )
                      : c.dispatch(
                          c.state.tr.setMeta(a, [{ remove: { id: e } }]),
                        ),
                    !0)
                  );
                },
                [a, m, c],
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
            l.useMemo(
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
          l.useEffect(() => n.RegisterEditor(d, a, c), [n, d, a, c]),
          l.createElement(
            l.Fragment,
            null,
            o.map(({ id: e, element: t, data: n }) =>
              l.createElement(E, { key: e, element: t, data: n }),
            ),
          )
        );
      });
      class P extends Error {
        constructor(e) {
          super(e);
        }
      }
      function E(e) {
        const { element: t, data: n } = e,
          o = "file" in n ? n.file : void 0,
          r = l.useMemo(() => o && URL.createObjectURL(o), [o]),
          s = "url" in n ? n.url : r,
          i = o.type.startsWith("video/");
        return a.createPortal(
          l.createElement(
            "span",
            { className: g.FileUploadPlaceholder },
            l.createElement(
              "div",
              { className: g.ThrobberCtn },
              l.createElement(
                "div",
                { className: g.ThrobberRow },
                l.createElement(
                  "div",
                  { className: g.Throbber },
                  l.createElement(u.t, { size: "medium", position: "center" }),
                ),
                (0, h.we)("#Prosemirror_FileUpload_Uploading"),
              ),
            ),
            !i && l.createElement("img", { src: s, className: g.PendingImage }),
            i &&
              l.createElement("video", {
                src: s,
                className: g.PendingImage,
                muted: !0,
                loop: !0,
                playsInline: !0,
                autoPlay: !0,
              }),
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
            (0, o.wT)(
              !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
              "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
            );
        }
        RegisterEditor(e, t, n) {
          return (
            (0, o.wT)(!this.m_view, "Duplicate registration"),
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
            e instanceof P
              ? this.AddError(e.message)
              : this.AddError(`Error proccessing file upload: ${e}`);
          }
          n
            ? this.m_fnReplacePlaceholder(t, n)
            : this.m_fnReplacePlaceholder(t);
        }
      }
      const y = l.createContext(void 0);
      function k() {
        return l.useContext(y).manager;
      }
      const R = l.memo(function (e) {
        const { manager: t } = e,
          n = (0, f.gc)(t.GetErrors());
        return n.length
          ? l.createElement(
              d.E,
              { active: !0 },
              l.createElement(c.o0, {
                bAlertDialog: !0,
                strTitle: (0, h.we)("#Error_Generic"),
                strDescription: n.map((e, t) =>
                  l.createElement("div", { key: t }, e),
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
          o = l.useCallback(
            (e, n) => {
              for (const o of e)
                t.UploadFile(o, t.GetViewPosition(n.clientX, n.clientY));
            },
            [t],
          ),
          [r, s] = (0, p.hk)(o);
        return l.cloneElement(n, { ...r, ...n.props });
      }
    },
  },
]);

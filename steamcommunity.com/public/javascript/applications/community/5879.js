/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5879],
  {
    1397: (e) => {
      e.exports = {
        Column: "_3l7NrcIIw_fedlHdVwJMVE",
        controls: "_3PGiW8qQcZDfnK9rOz7sjY",
        EditorCtn: "_2tY4qnv8tygCT7s94cB4vX",
      };
    },
    63226: (e) => {
      e.exports = {
        PreviewYoutubeEditor: "f2X3toOiE6SBBj8gkgwsN",
        Selected: "_1s7z9aW7wZunEhIaxF8Q_y",
        SelectionOverlay: "ZBNgQGP99gSH15SNAtiFt",
        EditHover: "b_y0GZtdiVsG1Qi2QvVL_",
        PreviewYoutubeEditorModal: "_2898lC8lJ2Jih-o_aYzoaG",
        Error: "_1U35sXRoYsDiZXSTPbY1mk",
      };
    },
    90056: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => Qe });
      var o = n(90626),
        a = n(10331);
      var r = n(22145),
        s = n(91986),
        l = n(52893),
        i = n(72739);
      function c(e) {
        const { specs: t } = e,
          [n, a] = o.useState([]),
          s = o.useRef(0),
          i = o.useCallback(
            (e) => (
              a((t) => [...t, { id: s.current++, nodeView: e }]),
              () => a((t) => t.filter((t) => t.nodeView != e))
            ),
            [],
          ),
          c = o.useMemo(() => {
            const e = {};
            return (
              t.forEach(
                (t) => (e[t.type.name] = (e, n, o) => new u(t, e, n, o, i)),
              ),
              new l.k_({ props: { nodeViews: e } })
            );
          }, [t, i]);
        return (
          (0, r.c$)(c),
          n.map(({ id: e, nodeView: t }) =>
            o.createElement(d, { key: e, nodeView: t }),
          )
        );
      }
      function d(e) {
        const {
            element: t,
            spec: n,
            getProps: a,
            onPropsChanged: r,
            actions: s,
            isSelected: l,
          } = e.nodeView,
          [c, d] = o.useReducer((e) => e + 1, 0);
        return (
          o.useEffect(() => r.Register(d).Unregister, [r, d]),
          i.createPortal(
            o.createElement(n.component, { ...a(), selected: l(), ...s }),
            t,
          )
        );
      }
      class u {
        constructor(e, t, n, o, a) {
          this.node = t;
          const r = n.dom.ownerDocument.createElement(
            e.type.isInline ? "span" : "div",
          );
          this.dom = r;
          const { selection: l } = n.state;
          this.selected = o() >= l.from && o() + t.nodeSize <= l.to;
          const i = {
              setAttrs: (e) => {
                n.dispatch(n.state.tr.setNodeMarkup(o(), void 0, e));
              },
              removeNode: () => {
                n.dispatch(n.state.tr.delete(o(), o() + 1));
              },
              focusView: () => {
                n.focus();
              },
            },
            c = new s.l();
          (this.destroy = a({
            element: r,
            spec: e,
            getProps: () => e.readProps(this.node),
            isSelected: () => this.selected,
            onPropsChanged: c,
            actions: i,
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
      var m = n(28106),
        p = n(81393),
        g = n(81047),
        E = n(12611),
        h = n(28954),
        _ = n(27666),
        f = n(71138),
        v = n(29287);
      var b = n(78395),
        w = n(21869),
        C = n(22797),
        M = n(6144),
        S = n(61859),
        k = n(27650),
        I = n(64753),
        D = n(73309);
      function P(e) {
        const {
            children: t,
            ProcessFileUpload: n,
            FetchImageURL: a,
            bAllowImageHotLinking: r = !1,
          } = e,
          [s] = o.useState(() => ({ manager: new U(n, a, r) })),
          { manager: l } = s;
        return (
          l.SetProps(n, a, r),
          o.createElement(
            A.Provider,
            { value: s },
            o.createElement(N, { manager: l }),
            o.createElement(R, { manager: l }, t),
          )
        );
      }
      function y(e) {
        const { nodeType: t } = e,
          n = B(),
          {
            placeholderElements: a,
            createPlaceholder: s,
            replacePlaceholder: i,
          } = (function (e, t = "PlaceholderPlugin") {
            const [n, a] = o.useState([]),
              [s] = o.useState(
                () =>
                  new l.k_({
                    key: new l.hs(t),
                    state: {
                      init: () => v.zF.empty,
                      apply(t, n) {
                        n = n.map(t.mapping, t.doc);
                        const o = t.getMeta(this) || [];
                        for (const r of o)
                          if (null == r ? void 0 : r.add) {
                            const { id: o, data: s } = r.add,
                              l = (t, n) => {
                                const r = document.createElement(e);
                                return (
                                  a((e) => [
                                    ...e,
                                    { id: o, element: r, data: s },
                                  ]),
                                  r
                                );
                              },
                              i = (e) => {
                                a((t) => t.filter((t) => t.element != e));
                              },
                              c = v.NZ.widget(r.add.pos, l, {
                                id: o,
                                destroy: i,
                              });
                            n = n.add(t.doc, [c]);
                          } else
                            (null == r ? void 0 : r.remove) &&
                              (n = n.remove(
                                n.find(
                                  void 0,
                                  void 0,
                                  (e) => e.id == r.remove.id,
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
            (0, r.c$)(s);
            const i = (0, r.Hd)(),
              c = o.useRef(0),
              d = o.useCallback(
                (e, n, o) => {
                  const a = `${t}_${c.current++}`;
                  let r = o || i.state.tr;
                  void 0 === n &&
                    (r.selection.empty || r.deleteSelection(),
                    (n = r.selection.from));
                  const l = (null == o ? void 0 : o.getMeta(s)) || [];
                  return (
                    r.setMeta(s, [...l, { add: { id: a, pos: n, data: e } }]),
                    o || i.dispatch(r),
                    a
                  );
                },
                [s, t, i],
              ),
              u = o.useCallback(
                (e) => {
                  const t = s.getState(i.state),
                    n =
                      null == t
                        ? void 0
                        : t.find(void 0, void 0, (t) => t.id == e);
                  return (null == n ? void 0 : n.length) ? n[0].from : void 0;
                },
                [i, s],
              ),
              m = o.useCallback(
                (e, t) => {
                  const n = u(e);
                  return (
                    !!n &&
                    (t
                      ? i.dispatch(
                          i.state.tr
                            .replaceWith(n, n, t)
                            .setMeta(s, [{ remove: { id: e } }]),
                        )
                      : i.dispatch(
                          i.state.tr.setMeta(s, [{ remove: { id: e } }]),
                        ),
                    !0)
                  );
                },
                [s, u, i],
              );
            return {
              placeholderElements: n,
              createPlaceholder: d,
              findPlaceholder: u,
              replacePlaceholder: m,
            };
          })("span", "FileUploadPlaceholder");
        !(function (e, t) {
          (0, r.c$)(
            o.useMemo(
              () =>
                new l.k_({
                  props: {
                    handlePaste(n, o, a) {
                      if (e.BAllowImageHotLinking()) return !1;
                      const r = [];
                      if (
                        (a.content.descendants((e, n) => {
                          e.type == t && r.push({ url: e.attrs.src, pos: n });
                        }),
                        r.length)
                      ) {
                        let t = n.state.tr;
                        t.selection.empty || t.deleteSelection();
                        let o = t.selection.from,
                          s = 0;
                        for (const n of r) {
                          const r = a.content.cut(s, n.pos - 1);
                          t.insert(o, r),
                            (o += r.size),
                            e.QueueUploadFileByURL(n.url, o, t),
                            (s = n.pos + 1);
                        }
                        return (
                          t.insert(o, a.content.cut(s)),
                          t.scrollIntoView(),
                          n.dispatch(t),
                          !0
                        );
                      }
                    },
                    handleDOMEvents: {
                      paste(t, n) {
                        var o, a;
                        if (
                          (null ===
                            (a =
                              null === (o = n.clipboardData) || void 0 === o
                                ? void 0
                                : o.files) || void 0 === a
                            ? void 0
                            : a.length) > 0
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
        const c = (0, r.Hd)();
        return (
          o.useEffect(() => n.RegisterEditor(c, s, i), [n, c, s, i]),
          o.createElement(
            o.Fragment,
            null,
            a.map(({ id: e, element: t, data: n }) =>
              o.createElement(G, { key: e, element: t, data: n }),
            ),
          )
        );
      }
      class T extends Error {
        constructor(e) {
          super(e);
        }
      }
      function G(e) {
        const { element: t, data: n } = e,
          a = "file" in n ? n.file : void 0,
          r = o.useMemo(() => a && URL.createObjectURL(a), [a]),
          s = "url" in n ? n.url : r;
        return i.createPortal(
          o.createElement(
            "span",
            { className: D.FileUploadPlaceholder },
            o.createElement(
              "div",
              { className: D.Throbber },
              o.createElement(C.t, { size: "medium", position: "center" }),
            ),
            o.createElement("img", { src: s, className: D.PendingImage }),
          ),
          t,
        );
      }
      class U {
        constructor(e, t, n) {
          (this.m_errors = (0, M.Jc)([])),
            (this.m_fnProcessFileUpload = e),
            (this.m_fnFetchImageURL = t),
            (this.m_bAllowImageHotLinking = n);
        }
        SetProps(e, t, n) {
          (this.m_fnProcessFileUpload = e),
            (this.m_fnFetchImageURL = t),
            (this.m_bAllowImageHotLinking = n),
            (0, p.w)(
              !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
              "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
            );
        }
        RegisterEditor(e, t, n) {
          return (
            (0, p.w)(!this.m_view, "Duplicate registration"),
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
              a = await this.m_fnFetchImageURL(e),
              r = new File(
                [a],
                decodeURIComponent(
                  (null === (n = o.pathname) || void 0 === n
                    ? void 0
                    : n.replace(/^.*\//, "")) || "image",
                ),
                { type: a.type },
              );
            await this.ProcessFile(r, t);
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
            e instanceof T
              ? this.AddError(e.message)
              : this.AddError(`Error proccessing file upload: ${e}`);
          }
          n
            ? this.m_fnReplacePlaceholder(t, n)
            : this.m_fnReplacePlaceholder(t);
        }
      }
      const A = o.createContext(void 0);
      function B() {
        return o.useContext(A).manager;
      }
      function N(e) {
        const { manager: t } = e,
          n = (0, I.gc)(t.GetErrors());
        return n.length
          ? o.createElement(
              w.E,
              { active: !0 },
              o.createElement(b.o0, {
                bAlertDialog: !0,
                strTitle: (0, S.we)("#Error_Generic"),
                strDescription: n.map((e, t) =>
                  o.createElement("div", { key: t }, e),
                ),
                strOKButtonText: (0, S.we)("#Button_OK"),
                onOK: () => t.ClearErrors(),
                onCancel: () => t.ClearErrors(),
              }),
            )
          : null;
      }
      function R(e) {
        const { manager: t, children: n } = e,
          a = o.useCallback(
            (e, n) => {
              for (const o of e)
                t.UploadFile(o, t.GetViewPosition(n.clientX, n.clientY));
            },
            [t],
          ),
          [r, s] = (0, k.hk)(a);
        return o.createElement(
          "div",
          { ...r, className: D.FileUploadDragDrop },
          s && !1,
          n,
        );
      }
      var O = n(30470);
      function x(e) {
        const { src: t } = e;
        return o.createElement("img", { src: (0, _.v6)(t) });
      }
      function L(e) {
        const { editModel: t, imageNode: n, children: a } = e,
          r = o.useCallback(
            async (e) => {
              const o = t.GetClanSteamID(),
                a = new h.V(o);
              if (!(await a.AddImage(e, t.GetCurEditLanguage(), null)))
                throw "Error processing image upload";
              const r = await a.UploadAllImages(
                t.GetIncludedRealmList(),
                t.GetCurEditLanguage(),
              );
              if (!r || 1 != Object.values(r).length)
                throw "Error uploading image";
              const s = Object.values(r)[0];
              if (!s.success) throw s.message;
              const l = f.pU.GetClanImageByImageHash(o, s.image_hash),
                i = (0, g.fw)(l);
              return await (0, k.DB)((0, _.v6)(i)), n.create({ src: i });
            },
            [t, n],
          );
        return o.createElement(
          P,
          { ProcessFileUpload: r, bAllowImageHotLinking: !0 },
          a,
        );
      }
      var F = n(33645),
        V = n.n(F),
        $ = n(55608),
        Y = n(79497),
        j = n(52038);
      const H = {
          ...$.DQ.nodes,
          quote: {
            parseDOM: [{ tag: "blockquote" }],
            content: "block+",
            group: "block",
            defining: !0,
            toDOM: (0, $.BM)("blockquote", V().BlockQuote),
            bbCode: { tag: "quote" },
          },
          pullquote: {
            content: "block+",
            group: "block",
            toDOM: (0, $.BM)("div", V().PullQuote),
            bbCode: { tag: "pullquote" },
          },
          smalltext: {
            content: "inline*",
            group: "block",
            toDOM: (0, $.BM)("div", (0, j.A)(V().SmallText, "BB_SmallText")),
            bbCode: { tag: "smalltext" },
          },
        },
        Q = {
          ...$.DQ.marks,
          spoiler: {
            toDOM: (0, $.BM)(
              "span",
              (0, j.A)(V().Spoiler, V().Revealed),
              (0, $.ce)("span", (0, j.A)(V().SpoilerText)),
            ),
            bbCode: { tag: "spoiler" },
          },
        };
      var z = n(6878),
        K = n.n(z),
        q = n(63226),
        X = n.n(q);
      const W = {
        nodes: {
          ...H,
          heading: {
            ...$.DQ.nodes.heading,
            parseDOM: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              attrs: { level: e },
            })),
            toDOM: (e) => [
              "h" + e.attrs.level,
              {
                class: (0, j.A)(
                  `BB_Header${e.attrs.level}`,
                  V()[`Header${e.attrs.level}`],
                  K()[`Header${e.attrs.level}`],
                ),
              },
              0,
            ],
            bbCode: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              BBArgsToAttrs: (t) => ({ ...Z(t), level: e }),
              AttrsToBBArgs: (e) => ({ ...J(e), tag: `h${e.level}` }),
            })),
          },
          quote: {
            ...H.quote,
            toDOM: () => [
              "blockquote",
              { class: (0, j.A)(V().BlockQuote, K().BlockQuote) },
              0,
            ],
          },
          previewyoutube: {
            attrs: { videoID: { default: "" }, align: { default: "" } },
            group: "block",
            atom: !0,
            draggable: !0,
            toDOM: () => ["div", { class: X().EditorYoutubeLoading }],
            bbCode: {
              tag: "previewyoutube",
              BBArgsToAttrs: (e) => {
                const [t, n] = (e[""] || "").split(";");
                return { videoID: t, align: n };
              },
              AttrsToBBArgs: (e) => ({
                args: { "": `${e.videoID};${e.align}` },
              }),
            },
          },
          meetsteamsessiongroup: {
            attrs: { group_id: { default: "0" } },
            group: "block",
            atom: !0,
            draggable: !0,
            toDOM: () => ["div", { class: X().EditorYoutubeLoading }],
            bbCode: {
              tag: "meetsteamsessiongroup",
              BBArgsToAttrs: (e) => ({ group_id: Number(e.group_id) }),
              AttrsToBBArgs: (e) => ({ args: { group_id: "" + e.group_id } }),
            },
          },
        },
        marks: { ...Q },
      };
      function Z(e) {
        return e.id ? { id: e.id.replace(/^#/, "") } : {};
      }
      function J(e) {
        return e.id ? { args: { id: e.id } } : {};
      }
      const ee = new Y.W(W);
      var te = n(79216);
      var ne = n(70995),
        oe = n(74410),
        ae = n(73662),
        re = n(33737),
        se = n(9154),
        le = n(73745);
      function ie(e) {
        const {
            videoID: t,
            align: n,
            selected: a,
            setAttrs: r,
            focusView: s,
          } = e,
          [l, i] = o.useState(!1),
          [c, d, u] = (0, le.uD)(),
          m = o.useCallback(() => i(!0), []),
          p = o.useCallback(() => i(!1), []),
          g = o.useCallback(() => {
            u(), s();
          }, [u, s]),
          E = o.useCallback(
            (e, t) => {
              r({ videoID: e, align: t }), g();
            },
            [r, g],
          ),
          { sizeStr: h, alignStr: _ } = (0, oe.i1)(n);
        return o.createElement(
          o.Fragment,
          null,
          c &&
            o.createElement(ce, {
              videoID: t,
              align: n,
              bEditing: !0,
              hideModal: g,
              onSave: E,
            }),
          o.createElement(
            "div",
            {
              className: (0, j.A)(
                q.PreviewYoutubeEditor,
                h,
                _,
                ae.PreviewYouTubeVideo,
                a && q.Selected,
              ),
              onMouseEnter: m,
              onMouseLeave: p,
            },
            l &&
              o.createElement(
                "div",
                { className: q.EditHover, onClick: d },
                (0, S.we)("#Button_Edit"),
              ),
            a && o.createElement("div", { className: q.SelectionOverlay }),
            o.createElement("img", {
              src: `https://img.youtube.com/vi/${t}/0.jpg`,
            }),
          ),
        );
      }
      function ce(e) {
        const {
            videoID: t = "",
            align: n = "",
            bEditing: a = !1,
            hideModal: r,
            onSave: s,
          } = e,
          [l, i] = o.useState(n || oe.V2.left),
          [c, d] = o.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [u, m] = o.useState(void 0),
          p = o.useCallback(() => {
            const { strVideoID: e } = (0, ne.XU)(c);
            return (
              e ? s(e, l) : m((0, S.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [c, l, s]),
          g = o.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return o.createElement(
          se.mt,
          { active: !0, onDismiss: r, className: q.PreviewYoutubeEditorModal },
          o.createElement(
            "form",
            { onSubmit: p },
            o.createElement(
              re.Y9,
              null,
              (0, S.we)("#EventEditor_InsertYouTube"),
            ),
            u && o.createElement("div", { className: q.Error }, u),
            o.createElement(
              re.G5,
              null,
              o.createElement(
                re.lr,
                null,
                (0, S.we)("#EventEditor_InsertYouTube_URL"),
              ),
              o.createElement(re.pd, {
                placeholder: (0, S.we)("#EventEditor_InsertYouTube_Placholder"),
                value: c,
                ref: g,
                onChange: (e) => d(e.currentTarget.value),
              }),
            ),
            o.createElement(
              re.G5,
              null,
              o.createElement(
                re.lr,
                null,
                (0, S.we)("#EventEditor_InsertYouTube_Position"),
              ),
              o.createElement(re.Od, {
                checked: l == oe.V2.left,
                onChange: (e) => e && i(oe.V2.left),
                label: (0, S.we)("#EventEditor_InsertYouTube_Left"),
              }),
              o.createElement(re.Od, {
                checked: l == oe.V2.right,
                onChange: (e) => e && i(oe.V2.right),
                label: (0, S.we)("#EventEditor_InsertYouTube_Right"),
              }),
              o.createElement(re.Od, {
                checked: l == oe.V2.full,
                onChange: (e) => e && i(oe.V2.full),
                label: (0, S.we)("#EventEditor_InsertYouTube_Full"),
              }),
              o.createElement(re.Od, {
                checked: l == oe.V2.summary,
                onChange: (e) => e && i(oe.V2.summary),
                label: (0, S.we)("#EventEditor_InsertYouTube_Summary"),
              }),
            ),
            o.createElement(
              re.wi,
              null,
              o.createElement(re.CB, {
                onCancel: r,
                strOKText: a
                  ? (0, S.we)("#Button_Save")
                  : (0, S.we)("#EventEditor_InsertYouTube"),
              }),
            ),
          ),
        );
      }
      var de = n(79570),
        ue = n(30175),
        me = n(44483),
        pe = n(25918),
        ge = n(19675),
        Ee = n(69001),
        he = n(65946),
        _e = n(4869),
        fe = n(63556),
        ve = n(44165),
        be = n(95695),
        we = n(99637),
        Ce = n(26408),
        Me = n(62490),
        Se = n(91675),
        ke = n(14771);
      function Ie(e) {
        const { hideModal: t, fnUpdateSession: n } = e,
          [a, r] = (0, o.useState)(() => Ge(!0, null)),
          [s, l] = (0, o.useState)(() => Ue(!0, null));
        return o.createElement(
          w.E,
          { active: !0 },
          o.createElement(
            b.o0,
            {
              strTitle: (0, S.we)("#MeetSteam_create_title"),
              onOK: () => n(a, s),
              closeModal: () => {
                l(Ue(!0, null)), r(Ge(!0, null)), t();
              },
            },
            o.createElement(ye, { group: a, fnSetGroup: r }),
            o.createElement(Te, { session: s, fnSetSession: l }),
          ),
        );
      }
      function De(e) {
        const { hideModal: t, groupInput: n, fnUpdateGroupSession: a } = e,
          [r, s] = (0, o.useState)(() => Ge(!1, n));
        return o.createElement(
          w.E,
          { active: !0 },
          o.createElement(
            b.o0,
            {
              strTitle: (0, S.we)("#MeetSteam_edit_title"),
              onOK: () => {
                a(r), t();
              },
              onCancel: () => {
                s(Ge(!1, n)), t();
              },
            },
            o.createElement(ye, { group: r, fnSetGroup: s }),
          ),
        );
      }
      function Pe(e) {
        const {
            bCreate: t,
            hideModal: n,
            sessionInput: a,
            fnUpdateSession: r,
          } = e,
          [s, l] = (0, o.useState)(() => Ue(t, a));
        return o.createElement(
          w.E,
          { active: !0 },
          o.createElement(
            b.o0,
            {
              strTitle: (0, S.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                r(s), n();
              },
              onCancel: () => {
                l(Ue(t, a)), n();
              },
            },
            o.createElement(Te, { session: s, fnSetSession: l }),
          ),
        );
      }
      function ye(e) {
        const { group: t, fnSetGroup: n } = e,
          a = (0, fe.E)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(re.pd, {
            type: "text",
            label: (0, S.we)("#MeetSteam_edit_session_name"),
            value: S.NT.Get(t.localized_session_title, a),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_title = S.NT.Set(
                o.localized_session_title,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          o.createElement(re.pd, {
            type: "text",
            label: (0, S.we)("#MeetSteam_edit_session_desc"),
            value: S.NT.Get(t.localized_session_description, a),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_description = S.NT.Set(
                o.localized_session_description,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
        );
      }
      function Te(e) {
        const { session: t, fnSetSession: n } = e,
          [a, r, s, l] = (0, he.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.max_capacity,
            t.max_per_team,
          ]),
          i = [];
        for (let e = 0; e < 4; ++e) i.push({ data: e, label: e });
        const c = Math.max(0, Math.floor((r - a) / 60));
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: be.EventEditorTextTitle },
            (0, S.we)("#MeetSteam_edit_date"),
            o.createElement(Ce.o, {
              tooltip: (0, S.we)("#MeetSteam_edit_date_ttip"),
            }),
          ),
          o.createElement(we.K, {
            strDescription: (0, S.we)("#MeetSteam_edit_start"),
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => a,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + ke.Kp.PerMinute * c }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          o.createElement(re.pd, {
            type: "number",
            min: 0,
            label: (0, S.we)("#MeetSteam_edit_duration"),
            onChange: (e) => {
              const o = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + ke.Kp.PerMinute * o });
            },
            value: c,
          }),
          o.createElement(
            "div",
            null,
            (0, S.we)("#MeetSteam_edit_end"),
            ": ",
            (0, Se.KC)(r),
            " ",
          ),
          o.createElement("br", null),
          o.createElement("br", null),
          o.createElement(re.pd, {
            type: "number",
            value: t.max_capacity,
            label: (0, S.we)("#MeetSteam_edit_max_capacity"),
            min: 1,
            onChange: (e) =>
              n({ ...t, max_capacity: Number.parseInt(e.currentTarget.value) }),
          }),
          o.createElement(re.m, {
            label: (0, S.we)("#MeetSteam_edit_team"),
            tooltip: (0, S.we)("#MeetSteam_edit_team_ttip"),
            rgOptions: i,
            selectedOption: t.max_per_team,
            onChange: (e) => n({ ...t, max_per_team: e.data }),
          }),
        );
      }
      function Ge(e, t) {
        if (e) {
          const e = pe.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, Me.$Y)([], 31, null),
            localized_session_description: (0, Me.$Y)([], 31, null),
            sessions: [],
          };
        }
        return t
          ? {
              ...t,
              localized_session_description: [
                ...t.localized_session_description,
              ],
              localized_session_title: [...t.localized_session_title],
            }
          : ((0, p.w)(
              !1,
              "HelperCreateOrCloneGroupSessionModel Expect Create or previous model",
            ),
            null);
      }
      function Ue(e, t) {
        if (e) {
          const e = ve.HD.GetTimeNowWithOverride(),
            t = pe.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            n =
              null == t ? void 0 : t.reduce((e, t) => e.concat(t.sessions), []);
          let o = 0;
          do {
            o = Math.floor(1e4 + 9e4 * Math.random());
          } while (n && n.findIndex((e) => e.id == o) >= 0);
          const a = 3600 * Math.ceil(e / 3600);
          return {
            id: o,
            rtime_start: a + ke.Kp.PerDay,
            rtime_end: a + ke.Kp.PerDay + ke.Kp.PerHour,
            max_capacity: 100,
            max_per_team: 3,
          };
        }
        return t
          ? { ...t }
          : ((0, p.w)(
              !1,
              "HelperCreateOrCloneSessionInstanceModel Expect Create or previous model",
            ),
            null);
      }
      var Ae = n(1397),
        Be = n.n(Ae);
      function Ne(e) {
        const t = pe.mh.GetEditModel();
        for (
          let n = 0;
          n < t.GetEventModel().jsondata.meet_steam_groups.length;
          ++n
        ) {
          const o = t.GetEventModel().jsondata.meet_steam_groups[n];
          for (let t = 0; t < o.sessions.length; ++t)
            if (o.sessions[t].id == e)
              return { groupIndex: n, sessionIndex: t };
        }
        return null;
      }
      function Re(e) {
        const t = pe.mh.GetEditModel();
        for (
          let n = 0;
          n < t.GetEventModel().jsondata.meet_steam_groups.length;
          ++n
        ) {
          const o = t.GetEventModel().jsondata.meet_steam_groups[n];
          if (o.group_id == e) return { group: o, groupIndex: n };
        }
        return null;
      }
      function Oe(e) {
        const { focusView: t, removeNode: n, group_id: a } = e,
          r = pe.mh.GetEditModel(),
          s = (0, he.q3)(() => {
            var e;
            return null ===
              (e = r.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == a);
          }),
          [l, i, c] = (0, le.uD)(),
          d = o.useCallback(() => {
            t(), c();
          }, [t, c]),
          [u, m, p] = (0, le.uD)(),
          g = o.useCallback(() => {
            t(), p();
          }, [t, p]);
        return s && r.GetClanAccountID() == (0, ge.H7)()
          ? o.createElement(
              "div",
              { className: Be().EditorCtn },
              o.createElement(xe, { groupData: s, focusView: t }),
              o.createElement(
                "div",
                { className: Be().controls },
                o.createElement(
                  ue.ff,
                  { onClick: i, tooltip: (0, S.we)("#Button_Edit") },
                  o.createElement(_e.ffu, null),
                ),
                o.createElement(
                  ue.ff,
                  { onClick: m, tooltip: (0, S.we)("#Button_Delete") },
                  o.createElement(_e.sED, null),
                ),
              ),
              l &&
                o.createElement(De, {
                  hideModal: d,
                  groupInput: s,
                  fnUpdateGroupSession: (e) => {
                    const { groupIndex: t } = Re(e.group_id),
                      n = pe.mh.GetEditModel();
                    (n.GetEventModel().jsondata.meet_steam_groups[t] = e),
                      n.SetDirty(Ee.IQ.description);
                  },
                }),
              u &&
                o.createElement(
                  w.E,
                  { active: !0 },
                  o.createElement(b.o0, {
                    strTitle: (0, S.we)("#Button_Delete"),
                    strDescription: (0, S.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { groupIndex: e } = Re(s.group_id),
                        t = pe.mh.GetEditModel(),
                        o = [...t.GetEventModel().jsondata.meet_steam_groups];
                      o.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_groups = o),
                        t.SetDirty(Ee.IQ.description),
                        n();
                    },
                    closeModal: g,
                  }),
                ),
            )
          : o.createElement(
              "div",
              null,
              "Error: Cannot edit meet steam session group",
            );
      }
      function xe(e) {
        const { groupData: t, focusView: n } = e,
          a = (0, he.q3)(() => t.sessions || []),
          [r, s, l] = (0, le.uD)(),
          i = o.useCallback(() => {
            n(), l();
          }, [n, l]);
        return t
          ? o.createElement(
              ge.jr,
              { groupData: t },
              a.map((e, r) =>
                o.createElement(Le, {
                  key: "timecol_" + t.group_id + "_" + e.id,
                  focusView: n,
                  sessionID: e.id,
                  bShowOR: r + 1 < a.length,
                }),
              ),
              o.createElement(
                ue.ff,
                { onClick: s, tooltip: (0, S.we)("#MeetSteam_add") },
                o.createElement(_e.OMN, null),
              ),
              r &&
                o.createElement(Pe, {
                  bCreate: !0,
                  hideModal: i,
                  fnUpdateSession: (e) => {
                    const n = pe.mh.GetEditModel(),
                      o = [...t.sessions, e];
                    o.sort((e, t) => e.rtime_start - t.rtime_start),
                      (t.sessions = o),
                      n.SetDirty(Ee.IQ.description);
                  },
                }),
            )
          : null;
      }
      function Le(e) {
        const { sessionID: t, bShowOR: n, focusView: a } = e,
          [r, s] = (0, le.OP)(),
          l = (0, he.q3)(() => {
            const { groupIndex: e, sessionIndex: n } = Ne(t);
            return pe.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[n];
          }),
          [i, c, d] = (0, le.uD)(),
          u = o.useCallback(() => {
            a(), d();
          }, [a, d]),
          [m, p, g] = (0, le.uD)(),
          E = o.useCallback(() => {
            a(), g();
          }, [a, g]);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: Be().Column, ...s },
            o.createElement(ge.Tn, { sessionData: l }),
            Boolean(r) &&
              o.createElement(
                "div",
                { className: Be().controls },
                o.createElement(
                  ue.ff,
                  { onClick: c, tooltip: (0, S.we)("#Button_Edit") },
                  o.createElement(_e.ffu, null),
                ),
                o.createElement(
                  ue.ff,
                  { onClick: p, tooltip: (0, S.we)("#Button_Delete") },
                  o.createElement(_e.sED, null),
                ),
              ),
            i &&
              o.createElement(Pe, {
                bCreate: !1,
                hideModal: u,
                sessionInput: l,
                fnUpdateSession: (e) => {
                  const n = pe.mh.GetEditModel(),
                    { groupIndex: o, sessionIndex: a } = Ne(t),
                    r = [
                      ...n.GetEventModel().jsondata.meet_steam_groups[o]
                        .sessions,
                    ];
                  (r[a] = e),
                    r.sort((e, t) => e.rtime_start - t.rtime_start),
                    (n.GetEventModel().jsondata.meet_steam_groups[o].sessions =
                      r),
                    n.SetDirty(Ee.IQ.description);
                },
              }),
            m &&
              o.createElement(
                w.E,
                { active: !0 },
                o.createElement(b.o0, {
                  strTitle: (0, S.we)("#Button_Delete"),
                  strDescription: (0, S.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = pe.mh.GetEditModel(),
                      { groupIndex: n, sessionIndex: o } = Ne(t),
                      a = [
                        ...e.GetEventModel().jsondata.meet_steam_groups[n]
                          .sessions,
                      ];
                    a.splice(o, 1),
                      a.sort((e, t) => e.rtime_start - t.rtime_start),
                      (e.GetEventModel().jsondata.meet_steam_groups[
                        n
                      ].sessions = a),
                      e.SetDirty(Ee.IQ.description);
                  },
                  closeModal: E,
                }),
              ),
          ),
          n && o.createElement(ge.w3, null),
        );
      }
      function Fe(e) {
        const {
            view: t,
            refUpdateToolbar: n,
            className: a,
            bSpellcheckEnabled: r,
            setSpellcheckEnabled: s,
          } = e,
          l = ee.pm_schema;
        return o.createElement(
          ue.bI,
          { refUpdateToolbar: n, view: t },
          o.createElement(
            ue.Ez,
            { className: e.className },
            o.createElement(de.MV, null),
            o.createElement(ue.XQ, null),
            o.createElement(de.Km, { schema: l }),
            o.createElement(ue.XQ, null),
            o.createElement(de.z9, { schema: l }),
            o.createElement(ue.XQ, null),
            o.createElement(de.Hz, { schema: l }),
            o.createElement(de.WJ, { schema: l, levels: 3 }),
            o.createElement(ue.XQ, null),
            o.createElement(Ve, null),
            o.createElement(ue.XQ, null),
            o.createElement(de.C$, { schema: l }),
            o.createElement(ue.hK, null),
            s &&
              o.createElement(de.Nt, {
                bSpellcheckEnabled: r,
                setSpellcheckEnabled: s,
              }),
            o.createElement($e, null),
          ),
        );
      }
      function Ve() {
        const { callbacks: e, view: t } = (0, ue.wU)(),
          [n, a, r] = (0, I.uD)(),
          s = o.useCallback(() => {
            r(), t.focus();
          }, [r, t]),
          l = o.useCallback(
            (e, n) => {
              !(function (e, t, n, o = oe.V2.left) {
                e.dispatch(
                  e.state.tr.insert(
                    e.state.selection.to,
                    t.create({ videoID: n, align: o }),
                  ),
                );
              })(t, ee.pm_schema.nodes.previewyoutube, e, n),
                s();
            },
            [t, s],
          );
        return o.createElement(
          o.Fragment,
          null,
          n && o.createElement(ce, { hideModal: s, onSave: l }),
          o.createElement(
            ue.ff,
            { tooltip: "#EventEditor_InsertYouTube", onClick: a, toggled: n },
            o.createElement("img", { src: me.A }),
          ),
        );
      }
      function $e() {
        const { callbacks: e, view: t } = (0, ue.wU)(),
          n = pe.mh.GetEditModel(),
          [a, r, s] = (0, I.uD)(),
          l = o.useCallback(() => {
            s(), t.focus();
          }, [s, t]),
          i = o.useCallback(
            (e, o) => {
              n.GetEventModel().jsondata.meet_steam_groups ||
                (n.GetEventModel().jsondata.meet_steam_groups = []),
                n
                  .GetEventModel()
                  .jsondata.meet_steam_groups.push({ ...e, sessions: [o] }),
                (function (e, t, n) {
                  e.dispatch(
                    e.state.tr.insert(
                      e.state.selection.to,
                      t.create({ group_id: n }),
                    ),
                  );
                })(t, ee.pm_schema.nodes.meetsteamsessiongroup, e.group_id),
                l();
            },
            [t, l, n],
          );
        if ((null == n ? void 0 : n.GetClanAccountID()) == (0, ge.H7)())
          return o.createElement(
            o.Fragment,
            null,
            a && o.createElement(Ie, { hideModal: l, fnUpdateSession: i }),
            o.createElement(
              ue.ff,
              { tooltip: "#MeetSteam_add_group_ttip", onClick: r, toggled: a },
              o.createElement("img", { src: me.A }),
            ),
          );
      }
      var Ye = n(90316),
        je = n.n(Ye),
        He = n(55393);
      function Qe(e) {
        const { editModel: t, refOnInsertImage: n } = e,
          [r, s] = o.useState(),
          l = (0, he.q3)(() => t.GetEventModel().loadedAllLanguages),
          i = t.GetCurEditLanguage(),
          c = o.useMemo(() => (l ? t.GetDescription(i) : void 0), [t, l, i]),
          d = o.useRef(),
          u = o.useCallback((e) => t.SetDescription(i, e), [t, i]),
          { onUpdate: h, fnCommitPendingSave: _ } = (function (e, t, n) {
            const { msAutosaveTimeout: r = 1e3, refOnChangeCallback: s } =
                n || {},
              [l, i] = o.useState(!1),
              c = o.useRef(),
              d = o.useCallback(
                (t, n) => {
                  (null == s ? void 0 : s.current) && s.current(),
                    n.doc &&
                      n.doc != t.state.doc &&
                      ((c.current = () => (0, a.m)(t.state.doc, e)), i(!0));
                },
                [s, e],
              ),
              u = o.useCallback(() => {
                if (c.current) {
                  const e = c.current();
                  t(e), i(!1);
                }
                c.current = void 0;
              }, [t]);
            return (
              o.useEffect(() => {
                if (!l) return;
                const e = window.setTimeout(u, r);
                return () => {
                  window.clearTimeout(e), u();
                };
              }, [l, u, r]),
              { onUpdate: d, fnCommitPendingSave: u, bDirty: l }
            );
          })(ee, u, { msAutosaveTimeout: 1e3, refOnChangeCallback: d }),
          { nodes: f, marks: v } = ee.pm_schema,
          b = (function (e, t) {
            return o.useCallback(
              (n) => {
                const o = `^https?://${O.TS.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)$`,
                  a = n.match(o);
                return a && a.groups.clanid == e.GetClanAccountID().toString()
                  ? t.create({
                      src: `${E.lw}/${e.GetClanAccountID()}/${a.groups.filename}`,
                    })
                  : "default";
              },
              [e, t],
            );
          })(t, f.image);
        return (
          (function (e, t, n, a) {
            o.useEffect(() => {
              if (!a) return;
              const o = (e, o) => {
                let r;
                switch (o) {
                  case g._o.k_eInsertFullImage:
                    r = t.create({ src: (0, g.fw)(e) });
                    break;
                  case g._o.k_eInsertThumbnail:
                    r = t.create({ src: (0, g.fw)(e, !0) }, null, [
                      n.create({ href: (0, g.fw)(e) }),
                    ]);
                    break;
                  case g._o.k_eInsertVideo:
                  case g._o.k_eShowImageGroup:
                    break;
                  default:
                    (0, p.z)(o, `Unhandled insert type ${o}`);
                }
                if (r) {
                  const e = a.state.tr;
                  e.selection.replaceWith(e, r), a.dispatch(e);
                }
              };
              return (
                (e.current = o),
                () => {
                  e.current == o && (e.current = void 0);
                }
              );
            }, [e, t, n, a]);
          })(n, f.image, v.link, r),
          void 0 === c
            ? null
            : o.createElement(
                L,
                { editModel: t, imageNode: f.image },
                o.createElement(
                  "div",
                  { className: je().EventDetailsBody },
                  o.createElement(Fe, {
                    view: r,
                    refUpdateToolbar: d,
                    className: je().ToolBar,
                  }),
                  o.createElement(
                    "div",
                    { className: je().EventDescriptionArea },
                    o.createElement(
                      He.l,
                      {
                        schemaConfig: ee,
                        className: je().EventDescriptionRichField,
                        bbcode: c,
                        onUpdate: h,
                        refView: s,
                        panelProps: { onBlur: _ },
                      },
                      o.createElement(m.W, {
                        linkMarkType: v.link,
                        onURLPasted: b,
                        schema: ee.pm_schema,
                      }),
                      o.createElement(y, { nodeType: f.image }),
                      o.createElement(ze, null),
                    ),
                  ),
                ),
              )
        );
      }
      function ze() {
        const e = o.useMemo(() => {
          return (
            (e = ee.pm_schema), te.sM({ rules: [te.tG(/^>$/, e.nodes.quote)] })
          );
          var e;
        }, []);
        (0, r.c$)(e);
        const t = o.useMemo(
          () => [
            {
              type: ee.pm_schema.nodes.previewyoutube,
              component: ie,
              readProps: (e) => ({
                videoID: e.attrs.videoID,
                align: e.attrs.align,
              }),
            },
            {
              type: ee.pm_schema.nodes.image,
              component: x,
              readProps: (e) => ({ src: e.attrs.src }),
            },
            {
              type: ee.pm_schema.nodes.meetsteamsessiongroup,
              component: Oe,
              readProps: (e) => ({ group_id: e.attrs.group_id }),
            },
          ],
          [],
        );
        return o.createElement(c, { specs: t });
      }
    },
  },
]);

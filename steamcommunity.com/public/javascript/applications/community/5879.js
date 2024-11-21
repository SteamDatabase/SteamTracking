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
        p = n(12611),
        E = n(28954),
        g = n(27666),
        h = n(71138),
        _ = n(81393),
        f = n(29287);
      var v = n(78395),
        b = n(21869),
        w = n(22797),
        C = n(6144),
        M = n(61859),
        S = n(27650),
        D = n(64753),
        k = n(73309);
      function P(e) {
        const { children: t, ProcessFileUpload: n, FetchImageURL: a } = e,
          [r] = o.useState(() => ({ manager: new T(n, a) })),
          { manager: s } = r;
        return (
          s.SetProps(n, a),
          o.createElement(
            U.Provider,
            { value: r },
            o.createElement(N, { manager: s }),
            o.createElement(B, { manager: s }, t),
          )
        );
      }
      function I(e) {
        const { nodeType: t } = e,
          n = A(),
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
                      init: () => f.zF.empty,
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
                              c = f.NZ.widget(r.add.pos, l, {
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
      class y extends Error {
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
            { className: k.FileUploadPlaceholder },
            o.createElement(
              "div",
              { className: k.Throbber },
              o.createElement(w.t, { size: "medium", position: "center" }),
            ),
            o.createElement("img", { src: s, className: k.PendingImage }),
          ),
          t,
        );
      }
      class T {
        constructor(e, t) {
          (this.m_errors = (0, C.Jc)([])),
            (this.m_fnProcessFileUpload = e),
            (this.m_fnFetchImageURL = t);
        }
        SetProps(e, t) {
          (this.m_fnProcessFileUpload = e), (this.m_fnFetchImageURL = t);
        }
        RegisterEditor(e, t, n) {
          return (
            (0, _.w)(!this.m_view, "Duplicate registration"),
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
            e instanceof y
              ? this.AddError(e.message)
              : this.AddError(`Error proccessing file upload: ${e}`);
          }
          n
            ? this.m_fnReplacePlaceholder(t, n)
            : this.m_fnReplacePlaceholder(t);
        }
      }
      const U = o.createContext(void 0);
      function A() {
        return o.useContext(U).manager;
      }
      function N(e) {
        const { manager: t } = e,
          n = (0, D.gc)(t.GetErrors());
        return n.length
          ? o.createElement(
              b.E,
              { active: !0 },
              o.createElement(v.o0, {
                bAlertDialog: !0,
                strTitle: (0, M.we)("#Error_Generic"),
                strDescription: n.map((e, t) =>
                  o.createElement("div", { key: t }, e),
                ),
                strOKButtonText: (0, M.we)("#Button_OK"),
                onOK: () => t.ClearErrors(),
                onCancel: () => t.ClearErrors(),
              }),
            )
          : null;
      }
      function B(e) {
        const { manager: t, children: n } = e,
          a = o.useCallback(
            (e, n) => {
              for (const o of e)
                t.UploadFile(o, t.GetViewPosition(n.clientX, n.clientY));
            },
            [t],
          ),
          [r, s] = (0, S.hk)(a);
        return o.createElement(
          "div",
          { ...r, className: k.FileUploadDragDrop },
          s && !1,
          n,
        );
      }
      var R = n(30470);
      function x(e) {
        const { src: t } = e;
        return o.createElement("img", { src: (0, g.v6)(t) });
      }
      function O(e) {
        const { editModel: t, imageNode: n, children: a } = e,
          r = o.useCallback(
            async (e) => {
              const o = t.GetClanSteamID(),
                a = new E.V(o);
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
              const l = h.pU.GetClanImageByImageHash(o, s.image_hash),
                i = `${p.lw}/${l.clanAccountID}/${h.i6.GetHashAndExt(l)}`;
              return await (0, S.DB)((0, g.v6)(i)), n.create({ src: i });
            },
            [t, n],
          );
        return o.createElement(P, { ProcessFileUpload: r }, a);
      }
      var F = n(33645),
        V = n.n(F),
        $ = n(55608),
        L = n(79497),
        Y = n(52038);
      const j = {
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
            toDOM: (0, $.BM)("div", (0, Y.A)(V().SmallText, "BB_SmallText")),
            bbCode: { tag: "smalltext" },
          },
        },
        Q = {
          ...$.DQ.marks,
          spoiler: {
            toDOM: (0, $.BM)(
              "span",
              (0, Y.A)(V().Spoiler, V().Revealed),
              (0, $.ce)("span", (0, Y.A)(V().SpoilerText)),
            ),
            bbCode: { tag: "spoiler" },
          },
        };
      var z = n(6878),
        K = n.n(z),
        H = n(63226),
        q = n.n(H);
      const X = {
        nodes: {
          ...j,
          heading: {
            ...$.DQ.nodes.heading,
            parseDOM: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              attrs: { level: e },
            })),
            toDOM: (e) => [
              "h" + e.attrs.level,
              {
                class: (0, Y.A)(
                  `BB_Header${e.attrs.level}`,
                  V()[`Header${e.attrs.level}`],
                  K()[`Header${e.attrs.level}`],
                ),
              },
              0,
            ],
            bbCode: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              BBArgsToAttrs: (t) => ({ ...W(t), level: e }),
              AttrsToBBArgs: (e) => ({ ...Z(e), tag: `h${e.level}` }),
            })),
          },
          quote: {
            ...j.quote,
            toDOM: () => [
              "blockquote",
              { class: (0, Y.A)(V().BlockQuote, K().BlockQuote) },
              0,
            ],
          },
          previewyoutube: {
            attrs: { videoID: { default: "" }, align: { default: "" } },
            group: "block",
            atom: !0,
            draggable: !0,
            toDOM: () => ["div", { class: q().EditorYoutubeLoading }],
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
            toDOM: () => ["div", { class: q().EditorYoutubeLoading }],
            bbCode: {
              tag: "meetsteamsessiongroup",
              BBArgsToAttrs: (e) => ({ group_id: Number(e.group_id) }),
              AttrsToBBArgs: (e) => ({ args: { group_id: "" + e.group_id } }),
            },
          },
        },
        marks: { ...Q },
      };
      function W(e) {
        return e.id ? { id: e.id.replace(/^#/, "") } : {};
      }
      function Z(e) {
        return e.id ? { args: { id: e.id } } : {};
      }
      const J = new L.W(X);
      var ee = n(79216);
      var te = n(70995),
        ne = n(74410),
        oe = n(73662),
        ae = n(33737),
        re = n(9154),
        se = n(73745);
      function le(e) {
        const {
            videoID: t,
            align: n,
            selected: a,
            setAttrs: r,
            focusView: s,
          } = e,
          [l, i] = o.useState(!1),
          [c, d, u] = (0, se.uD)(),
          m = o.useCallback(() => i(!0), []),
          p = o.useCallback(() => i(!1), []),
          E = o.useCallback(() => {
            u(), s();
          }, [u, s]),
          g = o.useCallback(
            (e, t) => {
              r({ videoID: e, align: t }), E();
            },
            [r, E],
          ),
          { sizeStr: h, alignStr: _ } = (0, ne.i1)(n);
        return o.createElement(
          o.Fragment,
          null,
          c &&
            o.createElement(ie, {
              videoID: t,
              align: n,
              bEditing: !0,
              hideModal: E,
              onSave: g,
            }),
          o.createElement(
            "div",
            {
              className: (0, Y.A)(
                H.PreviewYoutubeEditor,
                h,
                _,
                oe.PreviewYouTubeVideo,
                a && H.Selected,
              ),
              onMouseEnter: m,
              onMouseLeave: p,
            },
            l &&
              o.createElement(
                "div",
                { className: H.EditHover, onClick: d },
                (0, M.we)("#Button_Edit"),
              ),
            a && o.createElement("div", { className: H.SelectionOverlay }),
            o.createElement("img", {
              src: `https://img.youtube.com/vi/${t}/0.jpg`,
            }),
          ),
        );
      }
      function ie(e) {
        const {
            videoID: t = "",
            align: n = "",
            bEditing: a = !1,
            hideModal: r,
            onSave: s,
          } = e,
          [l, i] = o.useState(n || ne.V2.left),
          [c, d] = o.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [u, m] = o.useState(void 0),
          p = o.useCallback(() => {
            const { strVideoID: e } = (0, te.XU)(c);
            return (
              e ? s(e, l) : m((0, M.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [c, l, s]),
          E = o.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return o.createElement(
          re.mt,
          { active: !0, onDismiss: r, className: H.PreviewYoutubeEditorModal },
          o.createElement(
            "form",
            { onSubmit: p },
            o.createElement(
              ae.Y9,
              null,
              (0, M.we)("#EventEditor_InsertYouTube"),
            ),
            u && o.createElement("div", { className: H.Error }, u),
            o.createElement(
              ae.G5,
              null,
              o.createElement(
                ae.lr,
                null,
                (0, M.we)("#EventEditor_InsertYouTube_URL"),
              ),
              o.createElement(ae.pd, {
                placeholder: (0, M.we)("#EventEditor_InsertYouTube_Placholder"),
                value: c,
                ref: E,
                onChange: (e) => d(e.currentTarget.value),
              }),
            ),
            o.createElement(
              ae.G5,
              null,
              o.createElement(
                ae.lr,
                null,
                (0, M.we)("#EventEditor_InsertYouTube_Position"),
              ),
              o.createElement(ae.Od, {
                checked: l == ne.V2.left,
                onChange: (e) => e && i(ne.V2.left),
                label: (0, M.we)("#EventEditor_InsertYouTube_Left"),
              }),
              o.createElement(ae.Od, {
                checked: l == ne.V2.right,
                onChange: (e) => e && i(ne.V2.right),
                label: (0, M.we)("#EventEditor_InsertYouTube_Right"),
              }),
              o.createElement(ae.Od, {
                checked: l == ne.V2.full,
                onChange: (e) => e && i(ne.V2.full),
                label: (0, M.we)("#EventEditor_InsertYouTube_Full"),
              }),
              o.createElement(ae.Od, {
                checked: l == ne.V2.summary,
                onChange: (e) => e && i(ne.V2.summary),
                label: (0, M.we)("#EventEditor_InsertYouTube_Summary"),
              }),
            ),
            o.createElement(
              ae.wi,
              null,
              o.createElement(ae.CB, {
                onCancel: r,
                strOKText: a
                  ? (0, M.we)("#Button_Save")
                  : (0, M.we)("#EventEditor_InsertYouTube"),
              }),
            ),
          ),
        );
      }
      var ce = n(79570),
        de = n(30175),
        ue = n(44483),
        me = n(25918),
        pe = n(19675),
        Ee = n(69001),
        ge = n(65946),
        he = n(4869),
        _e = n(63556),
        fe = n(44165),
        ve = n(95695),
        be = n(99637),
        we = n(26408),
        Ce = n(62490),
        Me = n(91675),
        Se = n(14771);
      function De(e) {
        const { hideModal: t, fnUpdateSession: n } = e,
          [a, r] = (0, o.useState)(() => Ge(!0, null)),
          [s, l] = (0, o.useState)(() => Te(!0, null));
        return o.createElement(
          b.E,
          { active: !0 },
          o.createElement(
            v.o0,
            {
              strTitle: (0, M.we)("#MeetSteam_create_title"),
              onOK: () => n(a, s),
              closeModal: () => {
                l(Te(!0, null)), r(Ge(!0, null)), t();
              },
            },
            o.createElement(Ie, { group: a, fnSetGroup: r }),
            o.createElement(ye, { session: s, fnSetSession: l }),
          ),
        );
      }
      function ke(e) {
        const { hideModal: t, groupInput: n, fnUpdateGroupSession: a } = e,
          [r, s] = (0, o.useState)(() => Ge(!1, n));
        return o.createElement(
          b.E,
          { active: !0 },
          o.createElement(
            v.o0,
            {
              strTitle: (0, M.we)("#MeetSteam_edit_title"),
              onOK: () => {
                a(r), t();
              },
              onCancel: () => {
                s(Ge(!1, n)), t();
              },
            },
            o.createElement(Ie, { group: r, fnSetGroup: s }),
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
          [s, l] = (0, o.useState)(() => Te(t, a));
        return o.createElement(
          b.E,
          { active: !0 },
          o.createElement(
            v.o0,
            {
              strTitle: (0, M.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                r(s), n();
              },
              onCancel: () => {
                l(Te(t, a)), n();
              },
            },
            o.createElement(ye, { session: s, fnSetSession: l }),
          ),
        );
      }
      function Ie(e) {
        const { group: t, fnSetGroup: n } = e,
          a = (0, _e.E)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(ae.pd, {
            type: "text",
            label: (0, M.we)("#MeetSteam_edit_session_name"),
            value: M.NT.Get(t.localized_session_title, a),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_title = M.NT.Set(
                o.localized_session_title,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          o.createElement(ae.pd, {
            type: "text",
            label: (0, M.we)("#MeetSteam_edit_session_desc"),
            value: M.NT.Get(t.localized_session_description, a),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_description = M.NT.Set(
                o.localized_session_description,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
        );
      }
      function ye(e) {
        const { session: t, fnSetSession: n } = e,
          [a, r, s, l] = (0, ge.q3)(() => [
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
            { className: ve.EventEditorTextTitle },
            (0, M.we)("#MeetSteam_edit_date"),
            o.createElement(we.o, {
              tooltip: (0, M.we)("#MeetSteam_edit_date_ttip"),
            }),
          ),
          o.createElement(be.K, {
            strDescription: (0, M.we)("#MeetSteam_edit_start"),
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => a,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + Se.Kp.PerMinute * c }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          o.createElement(ae.pd, {
            type: "number",
            min: 0,
            label: (0, M.we)("#MeetSteam_edit_duration"),
            onChange: (e) => {
              const o = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + Se.Kp.PerMinute * o });
            },
            value: c,
          }),
          o.createElement(
            "div",
            null,
            (0, M.we)("#MeetSteam_edit_end"),
            ": ",
            (0, Me.KC)(r),
            " ",
          ),
          o.createElement("br", null),
          o.createElement("br", null),
          o.createElement(ae.pd, {
            type: "number",
            value: t.max_capacity,
            label: (0, M.we)("#MeetSteam_edit_max_capacity"),
            min: 1,
            onChange: (e) =>
              n({ ...t, max_capacity: Number.parseInt(e.currentTarget.value) }),
          }),
          o.createElement(ae.m, {
            label: (0, M.we)("#MeetSteam_edit_team"),
            tooltip: (0, M.we)("#MeetSteam_edit_team_ttip"),
            rgOptions: i,
            selectedOption: t.max_per_team,
            onChange: (e) => n({ ...t, max_per_team: e.data }),
          }),
        );
      }
      function Ge(e, t) {
        if (e) {
          const e = me.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, Ce.$Y)([], 31, null),
            localized_session_description: (0, Ce.$Y)([], 31, null),
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
          : ((0, _.w)(
              !1,
              "HelperCreateOrCloneGroupSessionModel Expect Create or previous model",
            ),
            null);
      }
      function Te(e, t) {
        if (e) {
          const e = fe.HD.GetTimeNowWithOverride(),
            t = me.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            n =
              null == t ? void 0 : t.reduce((e, t) => e.concat(t.sessions), []);
          let o = 0;
          do {
            o = Math.floor(1e4 + 9e4 * Math.random());
          } while (n && n.findIndex((e) => e.id == o) >= 0);
          const a = 3600 * Math.ceil(e / 3600);
          return {
            id: o,
            rtime_start: a + Se.Kp.PerDay,
            rtime_end: a + Se.Kp.PerDay + Se.Kp.PerHour,
            max_capacity: 100,
            max_per_team: 3,
          };
        }
        return t
          ? { ...t }
          : ((0, _.w)(
              !1,
              "HelperCreateOrCloneSessionInstanceModel Expect Create or previous model",
            ),
            null);
      }
      var Ue = n(1397),
        Ae = n.n(Ue);
      function Ne(e) {
        const t = me.mh.GetEditModel();
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
      function Be(e) {
        const t = me.mh.GetEditModel();
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
      function Re(e) {
        const { focusView: t, removeNode: n, group_id: a } = e,
          r = me.mh.GetEditModel(),
          s = (0, ge.q3)(() => {
            var e;
            return null ===
              (e = r.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == a);
          }),
          [l, i, c] = (0, se.uD)(),
          d = o.useCallback(() => {
            t(), c();
          }, [t, c]),
          [u, m, p] = (0, se.uD)(),
          E = o.useCallback(() => {
            t(), p();
          }, [t, p]);
        return s && r.GetClanAccountID() == (0, pe.H7)()
          ? o.createElement(
              "div",
              { className: Ae().EditorCtn },
              o.createElement(xe, { groupData: s, focusView: t }),
              o.createElement(
                "div",
                { className: Ae().controls },
                o.createElement(
                  de.ff,
                  { onClick: i, tooltip: (0, M.we)("#Button_Edit") },
                  o.createElement(he.ffu, null),
                ),
                o.createElement(
                  de.ff,
                  { onClick: m, tooltip: (0, M.we)("#Button_Delete") },
                  o.createElement(he.sED, null),
                ),
              ),
              l &&
                o.createElement(ke, {
                  hideModal: d,
                  groupInput: s,
                  fnUpdateGroupSession: (e) => {
                    const { groupIndex: t } = Be(e.group_id),
                      n = me.mh.GetEditModel();
                    (n.GetEventModel().jsondata.meet_steam_groups[t] = e),
                      n.SetDirty(Ee.IQ.description);
                  },
                }),
              u &&
                o.createElement(
                  b.E,
                  { active: !0 },
                  o.createElement(v.o0, {
                    strTitle: (0, M.we)("#Button_Delete"),
                    strDescription: (0, M.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { groupIndex: e } = Be(s.group_id),
                        t = me.mh.GetEditModel(),
                        o = [...t.GetEventModel().jsondata.meet_steam_groups];
                      o.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_groups = o),
                        t.SetDirty(Ee.IQ.description),
                        n();
                    },
                    closeModal: E,
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
          a = (0, ge.q3)(() => t.sessions || []),
          [r, s, l] = (0, se.uD)(),
          i = o.useCallback(() => {
            n(), l();
          }, [n, l]);
        return t
          ? o.createElement(
              pe.jr,
              { groupData: t },
              a.map((e, r) =>
                o.createElement(Oe, {
                  key: "timecol_" + t.group_id + "_" + e.id,
                  focusView: n,
                  sessionID: e.id,
                  bShowOR: r + 1 < a.length,
                }),
              ),
              o.createElement(
                de.ff,
                { onClick: s, tooltip: (0, M.we)("#MeetSteam_add") },
                o.createElement(he.OMN, null),
              ),
              r &&
                o.createElement(Pe, {
                  bCreate: !0,
                  hideModal: i,
                  fnUpdateSession: (e) => {
                    const n = me.mh.GetEditModel(),
                      o = [...t.sessions, e];
                    o.sort((e, t) => e.rtime_start - t.rtime_start),
                      (t.sessions = o),
                      n.SetDirty(Ee.IQ.description);
                  },
                }),
            )
          : null;
      }
      function Oe(e) {
        const { sessionID: t, bShowOR: n, focusView: a } = e,
          [r, s] = (0, se.OP)(),
          l = (0, ge.q3)(() => {
            const { groupIndex: e, sessionIndex: n } = Ne(t);
            return me.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[n];
          }),
          [i, c, d] = (0, se.uD)(),
          u = o.useCallback(() => {
            a(), d();
          }, [a, d]),
          [m, p, E] = (0, se.uD)(),
          g = o.useCallback(() => {
            a(), E();
          }, [a, E]);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: Ae().Column, ...s },
            o.createElement(pe.Tn, { sessionData: l }),
            Boolean(r) &&
              o.createElement(
                "div",
                { className: Ae().controls },
                o.createElement(
                  de.ff,
                  { onClick: c, tooltip: (0, M.we)("#Button_Edit") },
                  o.createElement(he.ffu, null),
                ),
                o.createElement(
                  de.ff,
                  { onClick: p, tooltip: (0, M.we)("#Button_Delete") },
                  o.createElement(he.sED, null),
                ),
              ),
            i &&
              o.createElement(Pe, {
                bCreate: !1,
                hideModal: u,
                sessionInput: l,
                fnUpdateSession: (e) => {
                  const n = me.mh.GetEditModel(),
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
                b.E,
                { active: !0 },
                o.createElement(v.o0, {
                  strTitle: (0, M.we)("#Button_Delete"),
                  strDescription: (0, M.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = me.mh.GetEditModel(),
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
                  closeModal: g,
                }),
              ),
          ),
          n && o.createElement(pe.w3, null),
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
          l = J.pm_schema;
        return o.createElement(
          de.bI,
          { refUpdateToolbar: n, view: t },
          o.createElement(
            de.Ez,
            { className: e.className },
            o.createElement(ce.MV, null),
            o.createElement(de.XQ, null),
            o.createElement(ce.Km, { schema: l }),
            o.createElement(de.XQ, null),
            o.createElement(ce.z9, { schema: l }),
            o.createElement(de.XQ, null),
            o.createElement(ce.Hz, { schema: l }),
            o.createElement(ce.WJ, { schema: l, levels: 3 }),
            o.createElement(de.XQ, null),
            o.createElement(Ve, null),
            o.createElement(de.XQ, null),
            o.createElement(ce.C$, { schema: l }),
            o.createElement(de.hK, null),
            s &&
              o.createElement(ce.Nt, {
                bSpellcheckEnabled: r,
                setSpellcheckEnabled: s,
              }),
            o.createElement($e, null),
          ),
        );
      }
      function Ve() {
        const { callbacks: e, view: t } = (0, de.wU)(),
          [n, a, r] = (0, D.uD)(),
          s = o.useCallback(() => {
            r(), t.focus();
          }, [r, t]),
          l = o.useCallback(
            (e, n) => {
              !(function (e, t, n, o = ne.V2.left) {
                e.dispatch(
                  e.state.tr.insert(
                    e.state.selection.to,
                    t.create({ videoID: n, align: o }),
                  ),
                );
              })(t, J.pm_schema.nodes.previewyoutube, e, n),
                s();
            },
            [t, s],
          );
        return o.createElement(
          o.Fragment,
          null,
          n && o.createElement(ie, { hideModal: s, onSave: l }),
          o.createElement(
            de.ff,
            { tooltip: "#EventEditor_InsertYouTube", onClick: a, toggled: n },
            o.createElement("img", { src: ue.A }),
          ),
        );
      }
      function $e() {
        const { callbacks: e, view: t } = (0, de.wU)(),
          n = me.mh.GetEditModel(),
          [a, r, s] = (0, D.uD)(),
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
                })(t, J.pm_schema.nodes.meetsteamsessiongroup, e.group_id),
                l();
            },
            [t, l, n],
          );
        if ((null == n ? void 0 : n.GetClanAccountID()) == (0, pe.H7)())
          return o.createElement(
            o.Fragment,
            null,
            a && o.createElement(De, { hideModal: l, fnUpdateSession: i }),
            o.createElement(
              de.ff,
              { tooltip: "#MeetSteam_add_group_ttip", onClick: r, toggled: a },
              o.createElement("img", { src: ue.A }),
            ),
          );
      }
      var Le = n(90316),
        Ye = n.n(Le),
        je = n(55393);
      function Qe(e) {
        const { editModel: t } = e,
          [n, r] = o.useState(),
          s = (0, ge.q3)(() => t.GetEventModel().loadedAllLanguages),
          l = t.GetCurEditLanguage(),
          i = o.useMemo(() => (s ? t.GetDescription(l) : void 0), [t, s, l]),
          c = o.useRef(),
          d = o.useCallback((e) => t.SetDescription(l, e), [t, l]),
          { onUpdate: u, fnCommitPendingSave: E } = (function (e, t, n) {
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
          })(J, d, { msAutosaveTimeout: 1e3, refOnChangeCallback: c }),
          g = J.pm_schema.nodes.image,
          h = (function (e, t) {
            return o.useCallback(
              (n) => {
                const o = `^https?://${R.TS.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)$`,
                  a = n.match(o);
                return a && a.groups.clanid == e.GetClanAccountID().toString()
                  ? t.create({
                      src: `${p.lw}/${e.GetClanAccountID()}/${a.groups.filename}`,
                    })
                  : "default";
              },
              [e, t],
            );
          })(t, g);
        return void 0 === i
          ? null
          : o.createElement(
              O,
              { editModel: t, imageNode: g },
              o.createElement(
                "div",
                { className: Ye().EventDetailsBody },
                o.createElement(Fe, {
                  view: n,
                  refUpdateToolbar: c,
                  className: Ye().ToolBar,
                }),
                o.createElement(
                  "div",
                  { className: Ye().EventDescriptionArea },
                  o.createElement(
                    je.l,
                    {
                      schemaConfig: J,
                      className: Ye().EventDescriptionRichField,
                      bbcode: i,
                      onUpdate: u,
                      refView: r,
                      panelProps: { onBlur: E },
                    },
                    o.createElement(m.W, {
                      linkMarkType: J.pm_schema.marks.link,
                      onURLPasted: h,
                      schema: J.pm_schema,
                    }),
                    o.createElement(I, { nodeType: g }),
                    o.createElement(ze, null),
                  ),
                ),
              ),
            );
      }
      function ze() {
        const e = o.useMemo(() => {
          return (
            (e = J.pm_schema), ee.sM({ rules: [ee.tG(/^>$/, e.nodes.quote)] })
          );
          var e;
        }, []);
        (0, r.c$)(e);
        const t = o.useMemo(
          () => [
            {
              type: J.pm_schema.nodes.previewyoutube,
              component: le,
              readProps: (e) => ({
                videoID: e.attrs.videoID,
                align: e.attrs.align,
              }),
            },
            {
              type: J.pm_schema.nodes.image,
              component: x,
              readProps: (e) => ({ src: e.attrs.src }),
            },
            {
              type: J.pm_schema.nodes.meetsteamsessiongroup,
              component: Re,
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

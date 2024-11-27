/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5879],
  {
    21134: (e) => {
      e.exports = {
        ClanImageContainer: "_1TEbObXeFqUF-IRZKx0Qg5",
        ImageControls: "_1O2yIhwy4xQA69icI2lXEH",
        Hovered: "_3wRq55uuel7mw7DG3Vys63",
      };
    },
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
      n.r(t), n.d(t, { default: () => et });
      var o = n(90626),
        a = n(10331);
      var r = n(22145),
        l = n(91986),
        s = n(52893),
        i = n(72739);
      const c = o.memo(function (e) {
        const { specs: t } = e,
          [n, a] = o.useState([]),
          l = o.useRef(0),
          i = o.useCallback(
            (e) => (
              a((t) => [...t, { id: l.current++, nodeView: e }]),
              () => a((t) => t.filter((t) => t.nodeView != e))
            ),
            [],
          ),
          c = o.useMemo(() => {
            const e = {};
            return (
              t
                .filter(Boolean)
                .forEach(
                  (t) => (e[t.type.name] = (e, n, o) => new m(t, e, n, o, i)),
                ),
              new s.k_({ props: { nodeViews: e } })
            );
          }, [t, i]);
        return (
          (0, r.c$)(c),
          n.map(({ id: e, nodeView: t }) =>
            o.createElement(d, { key: e, nodeView: t }),
          )
        );
      });
      function d(e) {
        const {
            element: t,
            spec: n,
            getProps: a,
            onPropsChanged: r,
            actions: l,
            isSelected: s,
          } = e.nodeView,
          [c, d] = o.useReducer((e) => e + 1, 0);
        return (
          o.useEffect(() => r.Register(d).Unregister, [r, d]),
          i.createPortal(
            o.createElement(n.component, { ...a(), selected: s(), ...l }),
            t,
          )
        );
      }
      class m {
        constructor(e, t, n, o, a) {
          this.node = t;
          const r = n.dom.ownerDocument.createElement(
            e.type.isInline ? "span" : "div",
          );
          this.dom = r;
          const { selection: s } = n.state;
          this.selected = o() >= s.from && o() + t.nodeSize <= s.to;
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
            c = new l.l();
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
      var u = n(28106),
        p = n(81393),
        g = n(64238),
        E = n.n(g),
        h = n(81047),
        _ = n(12611),
        f = n(28954),
        v = n(27666),
        b = n(71138),
        w = n(33737),
        C = n(2805),
        S = n(4869),
        M = n(83882),
        I = n(21869),
        k = n(29287);
      var D = n(78395),
        P = n(22797),
        y = n(6144),
        T = n(61859),
        G = n(27650),
        U = n(64753),
        A = n(73309);
      function B(e) {
        const {
            children: t,
            ProcessFileUpload: n,
            FetchImageURL: a,
            bAllowImageHotLinking: r = !1,
          } = e,
          [l] = o.useState(() => ({ manager: new x(n, a, r) })),
          { manager: s } = l;
        return (
          s.SetProps(n, a, r),
          o.createElement(
            L.Provider,
            { value: l },
            o.createElement(V, { manager: s }),
            o.createElement($, { manager: s }, t),
          )
        );
      }
      const R = o.memo(function (e) {
        const { nodeType: t } = e,
          n = F(),
          {
            placeholderElements: a,
            createPlaceholder: l,
            replacePlaceholder: i,
          } = (function (e, t = "PlaceholderPlugin") {
            const [n, a] = o.useState([]),
              [l] = o.useState(
                () =>
                  new s.k_({
                    key: new s.hs(t),
                    state: {
                      init: () => k.zF.empty,
                      apply(t, n) {
                        n = n.map(t.mapping, t.doc);
                        const o = t.getMeta(this) || [];
                        for (const r of o)
                          if (null == r ? void 0 : r.add) {
                            const { id: o, data: l } = r.add,
                              s = (t, n) => {
                                const r = document.createElement(e);
                                return (
                                  a((e) => [
                                    ...e,
                                    { id: o, element: r, data: l },
                                  ]),
                                  r
                                );
                              },
                              i = (e) => {
                                a((t) => t.filter((t) => t.element != e));
                              },
                              c = k.NZ.widget(r.add.pos, s, {
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
            (0, r.c$)(l);
            const i = (0, r.Hd)(),
              c = o.useRef(0),
              d = o.useCallback(
                (e, n, o) => {
                  const a = `${t}_${c.current++}`;
                  let r = o || i.state.tr;
                  void 0 === n &&
                    (r.selection.empty || r.deleteSelection(),
                    (n = r.selection.from));
                  const s = (null == o ? void 0 : o.getMeta(l)) || [];
                  return (
                    r.setMeta(l, [...s, { add: { id: a, pos: n, data: e } }]),
                    o || i.dispatch(r),
                    a
                  );
                },
                [l, t, i],
              ),
              m = o.useCallback(
                (e) => {
                  const t = l.getState(i.state),
                    n =
                      null == t
                        ? void 0
                        : t.find(void 0, void 0, (t) => t.id == e);
                  return (null == n ? void 0 : n.length) ? n[0].from : void 0;
                },
                [i, l],
              ),
              u = o.useCallback(
                (e, t) => {
                  const n = m(e);
                  return (
                    !!n &&
                    (t
                      ? i.dispatch(
                          i.state.tr
                            .replaceWith(n, n, t)
                            .setMeta(l, [{ remove: { id: e } }]),
                        )
                      : i.dispatch(
                          i.state.tr.setMeta(l, [{ remove: { id: e } }]),
                        ),
                    !0)
                  );
                },
                [l, m, i],
              );
            return {
              placeholderElements: n,
              createPlaceholder: d,
              findPlaceholder: m,
              replacePlaceholder: u,
            };
          })("span", "FileUploadPlaceholder");
        !(function (e, t) {
          (0, r.c$)(
            o.useMemo(
              () =>
                new s.k_({
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
                          l = 0;
                        for (const n of r) {
                          const r = a.content.cut(l, n.pos - 1);
                          t.insert(o, r),
                            (o += r.size),
                            e.QueueUploadFileByURL(n.url, o, t),
                            (l = n.pos + 1);
                        }
                        return (
                          t.insert(o, a.content.cut(l)),
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
          o.useEffect(() => n.RegisterEditor(c, l, i), [n, c, l, i]),
          o.createElement(
            o.Fragment,
            null,
            a.map(({ id: e, element: t, data: n }) =>
              o.createElement(O, { key: e, element: t, data: n }),
            ),
          )
        );
      });
      class N extends Error {
        constructor(e) {
          super(e);
        }
      }
      function O(e) {
        const { element: t, data: n } = e,
          a = "file" in n ? n.file : void 0,
          r = o.useMemo(() => a && URL.createObjectURL(a), [a]),
          l = "url" in n ? n.url : r;
        return i.createPortal(
          o.createElement(
            "span",
            { className: A.FileUploadPlaceholder },
            o.createElement(
              "div",
              { className: A.Throbber },
              o.createElement(P.t, { size: "medium", position: "center" }),
            ),
            o.createElement("img", { src: l, className: A.PendingImage }),
          ),
          t,
        );
      }
      class x {
        constructor(e, t, n) {
          (this.m_errors = (0, y.Jc)([])),
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
            e instanceof N
              ? this.AddError(e.message)
              : this.AddError(`Error proccessing file upload: ${e}`);
          }
          n
            ? this.m_fnReplacePlaceholder(t, n)
            : this.m_fnReplacePlaceholder(t);
        }
      }
      const L = o.createContext(void 0);
      function F() {
        return o.useContext(L).manager;
      }
      const V = o.memo(function (e) {
        const { manager: t } = e,
          n = (0, U.gc)(t.GetErrors());
        return n.length
          ? o.createElement(
              I.E,
              { active: !0 },
              o.createElement(D.o0, {
                bAlertDialog: !0,
                strTitle: (0, T.we)("#Error_Generic"),
                strDescription: n.map((e, t) =>
                  o.createElement("div", { key: t }, e),
                ),
                strOKButtonText: (0, T.we)("#Button_OK"),
                onOK: () => t.ClearErrors(),
                onCancel: () => t.ClearErrors(),
              }),
            )
          : null;
      });
      function $(e) {
        const { manager: t, children: n } = e,
          a = o.useCallback(
            (e, n) => {
              for (const o of e)
                t.UploadFile(o, t.GetViewPosition(n.clientX, n.clientY));
            },
            [t],
          ),
          [r, l] = (0, G.hk)(a);
        return o.createElement(
          "div",
          { ...r, className: A.FileUploadDragDrop },
          l && !1,
          n,
        );
      }
      var Y = n(30175),
        H = n(73745),
        Q = n(30470),
        j = n(21134);
      function z(e) {
        const {
            src: t,
            clanSteamID: n,
            setAttrs: a,
            focusView: r,
            removeNode: l,
          } = e,
          [s, i, c] = (0, H.uD)(),
          [d, m] = (0, H.OP)(),
          [u, p] = o.useMemo(() => [-1 !== t.indexOf(_.lw), (0, v.v6)(t)], [t]),
          g = o.useCallback(() => {
            r(), c();
          }, [r, c]);
        return o.createElement(
          o.Fragment,
          null,
          s &&
            o.createElement(K, {
              hideModal: g,
              clanSteamID: u ? n : void 0,
              setAttrs: a,
              src: t,
            }),
          o.createElement(
            "span",
            { className: E()(j.ClanImageContainer, d && j.Hovered), ...m },
            o.createElement("img", { src: p }),
            o.createElement(
              "span",
              { className: j.ImageControls },
              o.createElement(
                Y.ff,
                {
                  onClick: i,
                  tooltip: (0, T.we)("#EventEditor_ReplaceImage_Title"),
                },
                o.createElement(S.ffu, null),
              ),
              o.createElement(
                Y.ff,
                {
                  onClick: l,
                  tooltip: (0, T.we)("#StoreAdmin_GameDescription_RemoveImage"),
                },
                o.createElement(S.sED, null),
              ),
            ),
          ),
        );
      }
      function K(e) {
        const { hideModal: t, clanSteamID: n, setAttrs: a, src: r } = e,
          l = o.useCallback(
            (e) => {
              a({ src: e }), t();
            },
            [a, t],
          );
        return n
          ? o.createElement(X, {
              hideModal: t,
              onImageSelected: l,
              clanSteamID: n,
            })
          : o.createElement(q, { hideModal: t, onImageSelected: l, src: r });
      }
      function q(e) {
        const { hideModal: t, onImageSelected: n, src: a } = e,
          [r, l] = o.useState(a),
          s = o.useCallback((e) => l(e.currentTarget.value), []);
        return o.createElement(
          M.mt,
          { active: !0, onDismiss: t },
          o.createElement(
            w.lV,
            { onSubmit: () => n(r) },
            o.createElement(
              w.Y9,
              null,
              (0, T.we)("#EventEditor_ReplaceImage_Title"),
            ),
            o.createElement(
              w.nB,
              null,
              o.createElement(w.pd, {
                value: r,
                onChange: s,
                label: (0, T.we)("#EventEditor_InsertImage_URL"),
              }),
            ),
            o.createElement(w.CB, {
              onCancel: t,
              strOKText: (0, T.we)("#EventEditor_ReplaceImage_Title"),
              bOKDisabled: r == a,
            }),
          ),
        );
      }
      function X(e) {
        const { hideModal: t, onImageSelected: n, clanSteamID: a } = e,
          r = o.useCallback(
            (e, t) => {
              n((0, h.fw)(e));
            },
            [n],
          );
        return o.createElement(
          I.E,
          { active: !0 },
          o.createElement(C._6, {
            closeModal: t,
            clanSteamID: a,
            OnClanImageSelected: r,
          }),
        );
      }
      function W(e) {
        const { editModel: t, imageNode: n, children: a } = e,
          r = o.useCallback(
            async (e) => {
              const o = t.GetClanSteamID(),
                a = new f.V(o);
              if (!(await a.AddImage(e, t.GetCurEditLanguage(), null)))
                throw "Error processing image upload";
              const r = await a.UploadAllImages(
                t.GetIncludedRealmList(),
                t.GetCurEditLanguage(),
              );
              if (!r || 1 != Object.values(r).length)
                throw "Error uploading image";
              const l = Object.values(r)[0];
              if (!l.success) throw l.message;
              const s = b.pU.GetClanImageByImageHash(o, l.image_hash),
                i = (0, h.fw)(s);
              return await (0, G.DB)((0, v.v6)(i)), n.create({ src: i });
            },
            [t, n],
          );
        return n
          ? o.createElement(
              B,
              { ProcessFileUpload: r, bAllowImageHotLinking: !0 },
              a,
            )
          : a;
      }
      var Z = n(33645),
        J = n.n(Z),
        ee = n(55608),
        te = n(79497),
        ne = n(52038);
      const oe = {
          ...ee.DQ.nodes,
          quote: {
            parseDOM: [{ tag: "blockquote" }],
            content: "block+",
            group: "block",
            defining: !0,
            toDOM: (0, ee.BM)("blockquote", J().BlockQuote),
            bbCode: { tag: "quote" },
          },
          pullquote: {
            content: "block+",
            group: "block",
            toDOM: (0, ee.BM)("div", J().PullQuote),
            bbCode: { tag: "pullquote" },
          },
          smalltext: {
            content: "inline*",
            group: "block",
            toDOM: (0, ee.BM)("div", (0, ne.A)(J().SmallText, "BB_SmallText")),
            bbCode: { tag: "smalltext" },
          },
        },
        ae = {
          ...ee.DQ.marks,
          spoiler: {
            toDOM: (0, ee.BM)(
              "span",
              (0, ne.A)(J().Spoiler, J().Revealed),
              (0, ee.ce)("span", (0, ne.A)(J().SpoilerText)),
            ),
            bbCode: { tag: "spoiler" },
          },
        };
      var re = n(6878),
        le = n.n(re),
        se = n(63226),
        ie = n.n(se);
      const ce = {
        nodes: {
          ...oe,
          heading: {
            ...ee.DQ.nodes.heading,
            parseDOM: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              attrs: { level: e },
            })),
            toDOM: (e) => [
              "h" + e.attrs.level,
              {
                class: (0, ne.A)(
                  `BB_Header${e.attrs.level}`,
                  J()[`Header${e.attrs.level}`],
                  le()[`Header${e.attrs.level}`],
                ),
              },
              0,
            ],
            bbCode: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              BBArgsToAttrs: (t) => ({ ...de(t), level: e }),
              AttrsToBBArgs: (e) => ({ ...me(e), tag: `h${e.level}` }),
            })),
          },
          quote: {
            ...oe.quote,
            toDOM: () => [
              "blockquote",
              { class: (0, ne.A)(J().BlockQuote, le().BlockQuote) },
              0,
            ],
          },
          previewyoutube: {
            attrs: { videoID: { default: "" }, align: { default: "" } },
            group: "block",
            atom: !0,
            draggable: !0,
            toDOM: () => ["div", { class: ie().EditorYoutubeLoading }],
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
            toDOM: () => ["div", { class: ie().EditorYoutubeLoading }],
            bbCode: {
              tag: "meetsteamsessiongroup",
              BBArgsToAttrs: (e) => ({ group_id: Number(e.group_id) }),
              AttrsToBBArgs: (e) => ({ args: { group_id: "" + e.group_id } }),
            },
          },
        },
        marks: { ...ae },
      };
      function de(e) {
        return e.id ? { id: e.id.replace(/^#/, "") } : {};
      }
      function me(e) {
        return e.id ? { args: { id: e.id } } : {};
      }
      var ue = n(79216);
      var pe = n(70995),
        ge = n(74410),
        Ee = n(73662),
        he = n(9154);
      function _e(e) {
        const {
            videoID: t,
            align: n,
            selected: a,
            setAttrs: r,
            focusView: l,
          } = e,
          [s, i] = o.useState(!1),
          [c, d, m] = (0, H.uD)(),
          u = o.useCallback(() => i(!0), []),
          p = o.useCallback(() => i(!1), []),
          g = o.useCallback(() => {
            m(), l();
          }, [m, l]),
          E = o.useCallback(
            (e, t) => {
              r({ videoID: e, align: t }), g();
            },
            [r, g],
          ),
          { sizeStr: h, alignStr: _ } = (0, ge.i1)(n);
        return o.createElement(
          o.Fragment,
          null,
          c &&
            o.createElement(fe, {
              videoID: t,
              align: n,
              bEditing: !0,
              hideModal: g,
              onSave: E,
            }),
          o.createElement(
            "div",
            {
              className: (0, ne.A)(
                se.PreviewYoutubeEditor,
                h,
                _,
                Ee.PreviewYouTubeVideo,
                a && se.Selected,
              ),
              onMouseEnter: u,
              onMouseLeave: p,
            },
            s &&
              o.createElement(
                "div",
                { className: se.EditHover, onClick: d },
                (0, T.we)("#Button_Edit"),
              ),
            a && o.createElement("div", { className: se.SelectionOverlay }),
            o.createElement("img", {
              src: `https://img.youtube.com/vi/${t}/0.jpg`,
            }),
          ),
        );
      }
      function fe(e) {
        const {
            videoID: t = "",
            align: n = "",
            bEditing: a = !1,
            hideModal: r,
            onSave: l,
          } = e,
          [s, i] = o.useState(n || ge.V2.left),
          [c, d] = o.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [m, u] = o.useState(void 0),
          p = o.useCallback(() => {
            const { strVideoID: e } = (0, pe.XU)(c);
            return (
              e ? l(e, s) : u((0, T.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [c, s, l]),
          g = o.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return o.createElement(
          he.mt,
          { active: !0, onDismiss: r, className: se.PreviewYoutubeEditorModal },
          o.createElement(
            "form",
            { onSubmit: p },
            o.createElement(
              w.Y9,
              null,
              (0, T.we)("#EventEditor_InsertYouTube"),
            ),
            m && o.createElement("div", { className: se.Error }, m),
            o.createElement(
              w.G5,
              null,
              o.createElement(
                w.lr,
                null,
                (0, T.we)("#EventEditor_InsertYouTube_URL"),
              ),
              o.createElement(w.pd, {
                placeholder: (0, T.we)("#EventEditor_InsertYouTube_Placholder"),
                value: c,
                ref: g,
                onChange: (e) => d(e.currentTarget.value),
              }),
            ),
            o.createElement(
              w.G5,
              null,
              o.createElement(
                w.lr,
                null,
                (0, T.we)("#EventEditor_InsertYouTube_Position"),
              ),
              o.createElement(w.Od, {
                checked: s == ge.V2.left,
                onChange: (e) => e && i(ge.V2.left),
                label: (0, T.we)("#EventEditor_InsertYouTube_Left"),
              }),
              o.createElement(w.Od, {
                checked: s == ge.V2.right,
                onChange: (e) => e && i(ge.V2.right),
                label: (0, T.we)("#EventEditor_InsertYouTube_Right"),
              }),
              o.createElement(w.Od, {
                checked: s == ge.V2.full,
                onChange: (e) => e && i(ge.V2.full),
                label: (0, T.we)("#EventEditor_InsertYouTube_Full"),
              }),
              o.createElement(w.Od, {
                checked: s == ge.V2.summary,
                onChange: (e) => e && i(ge.V2.summary),
                label: (0, T.we)("#EventEditor_InsertYouTube_Summary"),
              }),
            ),
            o.createElement(
              w.wi,
              null,
              o.createElement(w.CB, {
                onCancel: r,
                strOKText: a
                  ? (0, T.we)("#Button_Save")
                  : (0, T.we)("#EventEditor_InsertYouTube"),
              }),
            ),
          ),
        );
      }
      var ve = n(79570),
        be = n(44483),
        we = n(25918),
        Ce = n(19675),
        Se = n(69001),
        Me = n(65946),
        Ie = n(63556),
        ke = n(44165),
        De = n(95695),
        Pe = n(99637),
        ye = n(26408),
        Te = n(62490),
        Ge = n(91675),
        Ue = n(14771);
      function Ae(e) {
        const { hideModal: t, fnUpdateSession: n } = e,
          [a, r] = (0, o.useState)(() => xe(!0, null)),
          [l, s] = (0, o.useState)(() => Le(!0, null));
        return o.createElement(
          I.E,
          { active: !0 },
          o.createElement(
            D.o0,
            {
              strTitle: (0, T.we)("#MeetSteam_create_title"),
              onOK: () => n(a, l),
              closeModal: () => {
                s(Le(!0, null)), r(xe(!0, null)), t();
              },
            },
            o.createElement(Ne, { group: a, fnSetGroup: r }),
            o.createElement(Oe, { session: l, fnSetSession: s }),
          ),
        );
      }
      function Be(e) {
        const { hideModal: t, groupInput: n, fnUpdateGroupSession: a } = e,
          [r, l] = (0, o.useState)(() => xe(!1, n));
        return o.createElement(
          I.E,
          { active: !0 },
          o.createElement(
            D.o0,
            {
              strTitle: (0, T.we)("#MeetSteam_edit_title"),
              onOK: () => {
                a(r), t();
              },
              onCancel: () => {
                l(xe(!1, n)), t();
              },
            },
            o.createElement(Ne, { group: r, fnSetGroup: l }),
          ),
        );
      }
      function Re(e) {
        const {
            bCreate: t,
            hideModal: n,
            sessionInput: a,
            fnUpdateSession: r,
          } = e,
          [l, s] = (0, o.useState)(() => Le(t, a));
        return o.createElement(
          I.E,
          { active: !0 },
          o.createElement(
            D.o0,
            {
              strTitle: (0, T.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                r(l), n();
              },
              onCancel: () => {
                s(Le(t, a)), n();
              },
            },
            o.createElement(Oe, { session: l, fnSetSession: s }),
          ),
        );
      }
      function Ne(e) {
        const { group: t, fnSetGroup: n } = e,
          a = (0, Ie.E)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(w.pd, {
            type: "text",
            label: (0, T.we)("#MeetSteam_edit_session_name"),
            value: T.NT.Get(t.localized_session_title, a),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_title = T.NT.Set(
                o.localized_session_title,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          o.createElement(w.pd, {
            type: "text",
            label: (0, T.we)("#MeetSteam_edit_session_desc"),
            value: T.NT.Get(t.localized_session_description, a),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_description = T.NT.Set(
                o.localized_session_description,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
        );
      }
      function Oe(e) {
        const { session: t, fnSetSession: n } = e,
          [a, r, l, s] = (0, Me.q3)(() => [
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
            { className: De.EventEditorTextTitle },
            (0, T.we)("#MeetSteam_edit_date"),
            o.createElement(ye.o, {
              tooltip: (0, T.we)("#MeetSteam_edit_date_ttip"),
            }),
          ),
          o.createElement(Pe.K, {
            strDescription: (0, T.we)("#MeetSteam_edit_start"),
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => a,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + Ue.Kp.PerMinute * c }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          o.createElement(w.pd, {
            type: "number",
            min: 0,
            label: (0, T.we)("#MeetSteam_edit_duration"),
            onChange: (e) => {
              const o = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + Ue.Kp.PerMinute * o });
            },
            value: c,
          }),
          o.createElement(
            "div",
            null,
            (0, T.we)("#MeetSteam_edit_end"),
            ": ",
            (0, Ge.KC)(r),
            " ",
          ),
          o.createElement("br", null),
          o.createElement("br", null),
          o.createElement(w.pd, {
            type: "number",
            value: t.max_capacity,
            label: (0, T.we)("#MeetSteam_edit_max_capacity"),
            min: 1,
            onChange: (e) =>
              n({ ...t, max_capacity: Number.parseInt(e.currentTarget.value) }),
          }),
          o.createElement(w.m, {
            label: (0, T.we)("#MeetSteam_edit_team"),
            tooltip: (0, T.we)("#MeetSteam_edit_team_ttip"),
            rgOptions: i,
            selectedOption: t.max_per_team,
            onChange: (e) => n({ ...t, max_per_team: e.data }),
          }),
        );
      }
      function xe(e, t) {
        if (e) {
          const e = we.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, Te.$Y)([], 31, null),
            localized_session_description: (0, Te.$Y)([], 31, null),
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
      function Le(e, t) {
        if (e) {
          const e = ke.HD.GetTimeNowWithOverride(),
            t = we.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            n =
              null == t ? void 0 : t.reduce((e, t) => e.concat(t.sessions), []);
          let o = 0;
          do {
            o = Math.floor(1e4 + 9e4 * Math.random());
          } while (n && n.findIndex((e) => e.id == o) >= 0);
          const a = 3600 * Math.ceil(e / 3600);
          return {
            id: o,
            rtime_start: a + Ue.Kp.PerDay,
            rtime_end: a + Ue.Kp.PerDay + Ue.Kp.PerHour,
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
      var Fe = n(1397),
        Ve = n.n(Fe);
      function $e(e) {
        const t = we.mh.GetEditModel();
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
      function Ye(e) {
        const t = we.mh.GetEditModel();
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
      function He(e) {
        const { focusView: t, removeNode: n, group_id: a } = e,
          r = we.mh.GetEditModel(),
          l = (0, Me.q3)(() => {
            var e;
            return null ===
              (e = r.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == a);
          }),
          [s, i, c] = (0, H.uD)(),
          d = o.useCallback(() => {
            t(), c();
          }, [t, c]),
          [m, u, p] = (0, H.uD)(),
          g = o.useCallback(() => {
            t(), p();
          }, [t, p]);
        return l && r.GetClanAccountID() == (0, Ce.H7)()
          ? o.createElement(
              "div",
              { className: Ve().EditorCtn },
              o.createElement(Qe, { groupData: l, focusView: t }),
              o.createElement(
                "div",
                { className: Ve().controls },
                o.createElement(
                  Y.ff,
                  { onClick: i, tooltip: (0, T.we)("#Button_Edit") },
                  o.createElement(S.ffu, null),
                ),
                o.createElement(
                  Y.ff,
                  { onClick: u, tooltip: (0, T.we)("#Button_Delete") },
                  o.createElement(S.sED, null),
                ),
              ),
              s &&
                o.createElement(Be, {
                  hideModal: d,
                  groupInput: l,
                  fnUpdateGroupSession: (e) => {
                    const { groupIndex: t } = Ye(e.group_id),
                      n = we.mh.GetEditModel();
                    (n.GetEventModel().jsondata.meet_steam_groups[t] = e),
                      n.SetDirty(Se.IQ.description);
                  },
                }),
              m &&
                o.createElement(
                  I.E,
                  { active: !0 },
                  o.createElement(D.o0, {
                    strTitle: (0, T.we)("#Button_Delete"),
                    strDescription: (0, T.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { groupIndex: e } = Ye(l.group_id),
                        t = we.mh.GetEditModel(),
                        o = [...t.GetEventModel().jsondata.meet_steam_groups];
                      o.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_groups = o),
                        t.SetDirty(Se.IQ.description),
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
      function Qe(e) {
        const { groupData: t, focusView: n } = e,
          a = (0, Me.q3)(() => t.sessions || []),
          [r, l, s] = (0, H.uD)(),
          i = o.useCallback(() => {
            n(), s();
          }, [n, s]);
        return t
          ? o.createElement(
              Ce.jr,
              { groupData: t },
              a.map((e, r) =>
                o.createElement(je, {
                  key: "timecol_" + t.group_id + "_" + e.id,
                  focusView: n,
                  sessionID: e.id,
                  bShowOR: r + 1 < a.length,
                }),
              ),
              o.createElement(
                Y.ff,
                { onClick: l, tooltip: (0, T.we)("#MeetSteam_add") },
                o.createElement(S.OMN, null),
              ),
              r &&
                o.createElement(Re, {
                  bCreate: !0,
                  hideModal: i,
                  fnUpdateSession: (e) => {
                    const n = we.mh.GetEditModel(),
                      o = [...t.sessions, e];
                    o.sort((e, t) => e.rtime_start - t.rtime_start),
                      (t.sessions = o),
                      n.SetDirty(Se.IQ.description);
                  },
                }),
            )
          : null;
      }
      function je(e) {
        const { sessionID: t, bShowOR: n, focusView: a } = e,
          [r, l] = (0, H.OP)(),
          s = (0, Me.q3)(() => {
            const { groupIndex: e, sessionIndex: n } = $e(t);
            return we.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[n];
          }),
          [i, c, d] = (0, H.uD)(),
          m = o.useCallback(() => {
            a(), d();
          }, [a, d]),
          [u, p, g] = (0, H.uD)(),
          E = o.useCallback(() => {
            a(), g();
          }, [a, g]);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: Ve().Column, ...l },
            o.createElement(Ce.Tn, { sessionData: s }),
            Boolean(r) &&
              o.createElement(
                "div",
                { className: Ve().controls },
                o.createElement(
                  Y.ff,
                  { onClick: c, tooltip: (0, T.we)("#Button_Edit") },
                  o.createElement(S.ffu, null),
                ),
                o.createElement(
                  Y.ff,
                  { onClick: p, tooltip: (0, T.we)("#Button_Delete") },
                  o.createElement(S.sED, null),
                ),
              ),
            i &&
              o.createElement(Re, {
                bCreate: !1,
                hideModal: m,
                sessionInput: s,
                fnUpdateSession: (e) => {
                  const n = we.mh.GetEditModel(),
                    { groupIndex: o, sessionIndex: a } = $e(t),
                    r = [
                      ...n.GetEventModel().jsondata.meet_steam_groups[o]
                        .sessions,
                    ];
                  (r[a] = e),
                    r.sort((e, t) => e.rtime_start - t.rtime_start),
                    (n.GetEventModel().jsondata.meet_steam_groups[o].sessions =
                      r),
                    n.SetDirty(Se.IQ.description);
                },
              }),
            u &&
              o.createElement(
                I.E,
                { active: !0 },
                o.createElement(D.o0, {
                  strTitle: (0, T.we)("#Button_Delete"),
                  strDescription: (0, T.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = we.mh.GetEditModel(),
                      { groupIndex: n, sessionIndex: o } = $e(t),
                      a = [
                        ...e.GetEventModel().jsondata.meet_steam_groups[n]
                          .sessions,
                      ];
                    a.splice(o, 1),
                      a.sort((e, t) => e.rtime_start - t.rtime_start),
                      (e.GetEventModel().jsondata.meet_steam_groups[
                        n
                      ].sessions = a),
                      e.SetDirty(Se.IQ.description);
                  },
                  closeModal: E,
                }),
              ),
          ),
          n && o.createElement(Ce.w3, null),
        );
      }
      const ze = o.memo(function (e) {
        const {
          view: t,
          schema: n,
          refUpdateToolbar: a,
          className: r,
          bSpellcheckEnabled: l,
          setSpellcheckEnabled: s,
        } = e;
        return o.createElement(
          Y.bI,
          { refUpdateToolbar: a, view: t },
          o.createElement(
            Y.Ez,
            { className: e.className },
            o.createElement(ve.MV, null),
            o.createElement(Y.XQ, null),
            o.createElement(ve.Km, { schema: n }),
            o.createElement(Y.XQ, null),
            n.marks.link && o.createElement(ve.z9, { schema: n }),
            o.createElement(Y.XQ, null),
            o.createElement(ve.Hz, { schema: n }),
            o.createElement(ve.WJ, { schema: n, levels: 3 }),
            o.createElement(Y.XQ, null),
            n.nodes.previewyoutube && o.createElement(Ke, { schema: n }),
            o.createElement(Y.XQ, null),
            o.createElement(ve.C$, { schema: n }),
            o.createElement(Y.hK, null),
            s &&
              o.createElement(ve.Nt, {
                bSpellcheckEnabled: l,
                setSpellcheckEnabled: s,
              }),
            n.nodes.meetsteamsessiongroup && o.createElement(qe, { schema: n }),
          ),
        );
      });
      function Ke(e) {
        const { schema: t } = e,
          { callbacks: n, view: a } = (0, Y.wU)(),
          [r, l, s] = (0, U.uD)(),
          i = o.useCallback(() => {
            s(), a.focus();
          }, [s, a]),
          c = o.useCallback(
            (e, n) => {
              !(function (e, t, n, o = ge.V2.left) {
                e.dispatch(
                  e.state.tr.insert(
                    e.state.selection.to,
                    t.create({ videoID: n, align: o }),
                  ),
                );
              })(a, t.nodes.previewyoutube, e, n),
                i();
            },
            [t, a, i],
          );
        return o.createElement(
          o.Fragment,
          null,
          r && o.createElement(fe, { hideModal: i, onSave: c }),
          o.createElement(
            Y.ff,
            { tooltip: "#EventEditor_InsertYouTube", onClick: l, toggled: r },
            o.createElement("img", { src: be.A }),
          ),
        );
      }
      function qe(e) {
        const { schema: t } = e,
          { callbacks: n, view: a } = (0, Y.wU)(),
          r = we.mh.GetEditModel(),
          [l, s, i] = (0, U.uD)(),
          c = o.useCallback(() => {
            i(), a.focus();
          }, [i, a]),
          d = o.useCallback(
            (e, n) => {
              r.GetEventModel().jsondata.meet_steam_groups ||
                (r.GetEventModel().jsondata.meet_steam_groups = []),
                r
                  .GetEventModel()
                  .jsondata.meet_steam_groups.push({ ...e, sessions: [n] }),
                (function (e, t, n) {
                  e.dispatch(
                    e.state.tr.insert(
                      e.state.selection.to,
                      t.create({ group_id: n }),
                    ),
                  );
                })(a, t.nodes.meetsteamsessiongroup, e.group_id),
                c();
            },
            [t, a, c, r],
          );
        if ((null == r ? void 0 : r.GetClanAccountID()) == (0, Ce.H7)())
          return o.createElement(
            o.Fragment,
            null,
            l && o.createElement(Ae, { hideModal: c, fnUpdateSession: d }),
            o.createElement(
              Y.ff,
              { tooltip: "#MeetSteam_add_group_ttip", onClick: s, toggled: l },
              o.createElement("img", { src: be.A }),
            ),
          );
      }
      var Xe = n(75844),
        We = n(90316),
        Ze = n.n(We),
        Je = n(55393);
      const et = (0, Xe.PA)(function (e) {
          const { editModel: t } = e,
            n = t.GetEventModel().loadedAllLanguages,
            a = t.GetCurEditLanguage();
          return n
            ? o.createElement(tt, { ...e, eCurrentEditLanguage: a })
            : null;
        }),
        tt = o.memo(function (e) {
          const {
              editModel: t,
              refOnInsertImage: n,
              limitBBCode: r,
              eCurrentEditLanguage: l,
            } = e,
            [s, i] = o.useState(),
            c = o.useMemo(() => {
              return (e = r), new te.W(ce, e);
              var e;
            }, [r]),
            d = o.useMemo(() => t.GetDescription(l) || "", [t, l]),
            m = o.useRef(),
            g = o.useCallback((e) => t.SetDescription(l, e), [t, l]),
            { onUpdate: E, fnCommitPendingSave: f } = (function (e, t, n) {
              const { msAutosaveTimeout: r = 1e3, refOnChangeCallback: l } =
                  n || {},
                [s, i] = o.useState(!1),
                c = o.useRef(),
                d = o.useCallback(
                  (t, n) => {
                    (null == l ? void 0 : l.current) && l.current(),
                      n.doc &&
                        n.doc != t.state.doc &&
                        ((c.current = () => (0, a.m)(t.state.doc, e)), i(!0));
                  },
                  [l, e],
                ),
                m = o.useCallback(() => {
                  if (c.current) {
                    const e = c.current();
                    t(e), i(!1);
                  }
                  c.current = void 0;
                }, [t]);
              return (
                o.useEffect(() => {
                  if (!s) return;
                  const e = window.setTimeout(m, r);
                  return () => {
                    window.clearTimeout(e), m();
                  };
                }, [s, m, r]),
                { onUpdate: d, fnCommitPendingSave: m, bDirty: s }
              );
            })(c, g, { msAutosaveTimeout: 1e3, refOnChangeCallback: m }),
            { nodes: v, marks: b } = c.pm_schema,
            w = (function (e, t) {
              const n = o.useCallback(
                (n) => {
                  const o = `^https?://${Q.TS.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)$`,
                    a = n.match(o);
                  return a && a.groups.clanid == e.GetClanAccountID().toString()
                    ? t.create({
                        src: `${_.lw}/${e.GetClanAccountID()}/${a.groups.filename}`,
                      })
                    : "default";
                },
                [e, t],
              );
              return t ? n : void 0;
            })(t, v.image);
          return (
            (function (e, t, n, a) {
              o.useEffect(() => {
                if (!a || !t) return;
                const o = (e, o) => {
                  let r;
                  switch (o) {
                    case h._o.k_eInsertFullImage:
                      r = t.create({ src: (0, h.fw)(e) });
                      break;
                    case h._o.k_eInsertThumbnail:
                      r = t.create({ src: (0, h.fw)(e, !0) }, null, [
                        n.create({ href: (0, h.fw)(e) }),
                      ]);
                      break;
                    case h._o.k_eInsertVideo:
                    case h._o.k_eShowImageGroup:
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
            })(n, v.image, b.link, s),
            o.createElement(
              W,
              { editModel: t, imageNode: v.image },
              o.createElement(
                "div",
                { className: Ze().EventDetailsBody },
                o.createElement(ze, {
                  view: s,
                  schema: c.pm_schema,
                  refUpdateToolbar: m,
                  className: Ze().ToolBar,
                }),
                o.createElement(
                  "div",
                  { className: Ze().EventDescriptionArea },
                  o.createElement(
                    Je.l,
                    {
                      schemaConfig: c,
                      className: Ze().EventDescriptionRichField,
                      bbcode: d,
                      onUpdate: E,
                      refView: i,
                      panelProps: { onBlur: f },
                    },
                    o.createElement(u.W, {
                      linkMarkType: b.link,
                      onURLPasted: w,
                      schema: c.pm_schema,
                    }),
                    v.image && o.createElement(R, { nodeType: v.image }),
                    o.createElement(nt, {
                      schema: c.pm_schema,
                      clanSteamID: t.GetClanSteamID(),
                    }),
                  ),
                ),
              ),
            )
          );
        });
      function nt(e) {
        const { schema: t, clanSteamID: n } = e,
          a = o.useMemo(
            () =>
              (function (e) {
                return ue.sM({ rules: [ue.tG(/^>$/, e.nodes.quote)] });
              })(t),
            [t],
          );
        (0, r.c$)(a);
        const l = o.useMemo(
          () => [
            t.nodes.previewyoutube && {
              type: t.nodes.previewyoutube,
              component: _e,
              readProps: (e) => ({
                videoID: e.attrs.videoID,
                align: e.attrs.align,
              }),
            },
            t.nodes.image && {
              type: t.nodes.image,
              component: z,
              readProps: (e) => ({ src: e.attrs.src, clanSteamID: n }),
            },
            t.nodes.meetsteamsessiongroup && {
              type: t.nodes.meetsteamsessiongroup,
              component: He,
              readProps: (e) => ({ group_id: e.attrs.group_id }),
            },
          ],
          [t, n],
        );
        return o.createElement(c, { specs: l });
      }
    },
  },
]);

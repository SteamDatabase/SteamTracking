/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1110],
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
    60299: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => nt });
      var o = n(90286),
        a = n(26555),
        r = n(22145),
        l = n(91986),
        s = n(52893),
        i = n(90626),
        c = n(72739);
      const d = i.memo(function (e) {
        const { specs: t } = e,
          [n, o] = i.useState([]),
          a = i.useRef(0),
          l = i.useCallback(
            (e) => (
              o((t) => [...t, { id: a.current++, nodeView: e }]),
              () => o((t) => t.filter((t) => t.nodeView != e))
            ),
            [],
          ),
          c = i.useMemo(() => {
            const e = {};
            return (
              t
                .filter(Boolean)
                .forEach(
                  (t) => (e[t.type.name] = (e, n, o) => new u(t, e, n, o, l)),
                ),
              new s.k_({ props: { nodeViews: e } })
            );
          }, [t, l]);
        return (
          (0, r.c$)(c),
          n.map(({ id: e, nodeView: t }) =>
            i.createElement(m, { key: e, nodeView: t }),
          )
        );
      });
      function m(e) {
        const {
            element: t,
            spec: n,
            getProps: o,
            onPropsChanged: a,
            actions: r,
            isSelected: l,
          } = e.nodeView,
          [s, d] = i.useReducer((e) => e + 1, 0);
        return (
          i.useEffect(() => a.Register(d).Unregister, [a, d]),
          c.createPortal(
            i.createElement(n.component, { ...o(), selected: l(), ...r }),
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
      var p = n(28106),
        g = n(81393),
        E = n(64238),
        h = n.n(E),
        _ = n(81047),
        f = n(12611),
        v = n(28954),
        w = n(27666),
        b = n(71138),
        C = n(33737),
        M = n(2805),
        S = n(4869),
        I = n(83882),
        D = n(21869),
        k = n(29287);
      var P = n(78395),
        y = n(22797),
        T = n(6144),
        G = n(61859),
        A = n(27650),
        U = n(64753),
        B = n(73309);
      function N(e) {
        const {
            children: t,
            ProcessFileUpload: n,
            FetchImageURL: o,
            bAllowImageHotLinking: a = !1,
          } = e,
          [r] = i.useState(() => ({ manager: new L(n, o, a) })),
          { manager: l } = r;
        return (
          l.SetProps(n, o, a),
          i.createElement(
            F.Provider,
            { value: r },
            i.createElement($, { manager: l }),
            i.createElement(Y, { manager: l }, t),
          )
        );
      }
      const R = i.memo(function (e) {
        const { nodeType: t } = e,
          n = V(),
          {
            placeholderElements: o,
            createPlaceholder: a,
            replacePlaceholder: l,
          } = (function (e, t = "PlaceholderPlugin") {
            const [n, o] = i.useState([]),
              [a] = i.useState(
                () =>
                  new s.k_({
                    key: new s.hs(t),
                    state: {
                      init: () => k.zF.empty,
                      apply(t, n) {
                        n = n.map(t.mapping, t.doc);
                        const a = t.getMeta(this) || [];
                        for (const r of a)
                          if (null == r ? void 0 : r.add) {
                            const { id: a, data: l } = r.add,
                              s = (t, n) => {
                                const r = document.createElement(e);
                                return (
                                  o((e) => [
                                    ...e,
                                    { id: a, element: r, data: l },
                                  ]),
                                  r
                                );
                              },
                              i = (e) => {
                                o((t) => t.filter((t) => t.element != e));
                              },
                              c = k.NZ.widget(r.add.pos, s, {
                                id: a,
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
            (0, r.c$)(a);
            const l = (0, r.Hd)(),
              c = i.useRef(0),
              d = i.useCallback(
                (e, n, o) => {
                  const r = `${t}_${c.current++}`;
                  let s = o || l.state.tr;
                  void 0 === n &&
                    (s.selection.empty || s.deleteSelection(),
                    (n = s.selection.from));
                  const i = (null == o ? void 0 : o.getMeta(a)) || [];
                  return (
                    s.setMeta(a, [...i, { add: { id: r, pos: n, data: e } }]),
                    o || l.dispatch(s),
                    r
                  );
                },
                [a, t, l],
              ),
              m = i.useCallback(
                (e) => {
                  const t = a.getState(l.state),
                    n =
                      null == t
                        ? void 0
                        : t.find(void 0, void 0, (t) => t.id == e);
                  return (null == n ? void 0 : n.length) ? n[0].from : void 0;
                },
                [l, a],
              ),
              u = i.useCallback(
                (e, t) => {
                  const n = m(e);
                  return (
                    !!n &&
                    (t
                      ? l.dispatch(
                          l.state.tr
                            .replaceWith(n, n, t)
                            .setMeta(a, [{ remove: { id: e } }]),
                        )
                      : l.dispatch(
                          l.state.tr.setMeta(a, [{ remove: { id: e } }]),
                        ),
                    !0)
                  );
                },
                [a, m, l],
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
            i.useMemo(
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
          i.useEffect(() => n.RegisterEditor(c, a, l), [n, c, a, l]),
          i.createElement(
            i.Fragment,
            null,
            o.map(({ id: e, element: t, data: n }) =>
              i.createElement(x, { key: e, element: t, data: n }),
            ),
          )
        );
      });
      class O extends Error {
        constructor(e) {
          super(e);
        }
      }
      function x(e) {
        const { element: t, data: n } = e,
          o = "file" in n ? n.file : void 0,
          a = i.useMemo(() => o && URL.createObjectURL(o), [o]),
          r = "url" in n ? n.url : a;
        return c.createPortal(
          i.createElement(
            "span",
            { className: B.FileUploadPlaceholder },
            i.createElement(
              "div",
              { className: B.Throbber },
              i.createElement(y.t, { size: "medium", position: "center" }),
            ),
            i.createElement("img", { src: r, className: B.PendingImage }),
          ),
          t,
        );
      }
      class L {
        constructor(e, t, n) {
          (this.m_errors = (0, T.Jc)([])),
            (this.m_fnProcessFileUpload = e),
            (this.m_fnFetchImageURL = t),
            (this.m_bAllowImageHotLinking = n);
        }
        SetProps(e, t, n) {
          (this.m_fnProcessFileUpload = e),
            (this.m_fnFetchImageURL = t),
            (this.m_bAllowImageHotLinking = n),
            (0, g.w)(
              !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
              "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
            );
        }
        RegisterEditor(e, t, n) {
          return (
            (0, g.w)(!this.m_view, "Duplicate registration"),
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
            e instanceof O
              ? this.AddError(e.message)
              : this.AddError(`Error proccessing file upload: ${e}`);
          }
          n
            ? this.m_fnReplacePlaceholder(t, n)
            : this.m_fnReplacePlaceholder(t);
        }
      }
      const F = i.createContext(void 0);
      function V() {
        return i.useContext(F).manager;
      }
      const $ = i.memo(function (e) {
        const { manager: t } = e,
          n = (0, U.gc)(t.GetErrors());
        return n.length
          ? i.createElement(
              D.E,
              { active: !0 },
              i.createElement(P.o0, {
                bAlertDialog: !0,
                strTitle: (0, G.we)("#Error_Generic"),
                strDescription: n.map((e, t) =>
                  i.createElement("div", { key: t }, e),
                ),
                strOKButtonText: (0, G.we)("#Button_OK"),
                onOK: () => t.ClearErrors(),
                onCancel: () => t.ClearErrors(),
              }),
            )
          : null;
      });
      function Y(e) {
        const { manager: t, children: n } = e,
          o = i.useCallback(
            (e, n) => {
              for (const o of e)
                t.UploadFile(o, t.GetViewPosition(n.clientX, n.clientY));
            },
            [t],
          ),
          [a, r] = (0, A.hk)(o);
        return i.createElement(
          "div",
          { ...a, className: B.FileUploadDragDrop },
          r && !1,
          n,
        );
      }
      var H = n(30175),
        Q = n(73745),
        j = n(30470),
        z = n(21134);
      function K(e) {
        const {
            src: t,
            clanSteamID: n,
            setAttrs: o,
            focusView: a,
            removeNode: r,
          } = e,
          [l, s, c] = (0, Q.uD)(),
          [d, m] = (0, Q.OP)(),
          [u, p] = i.useMemo(() => [-1 !== t.indexOf(f.lw), (0, w.v6)(t)], [t]),
          g = i.useCallback(() => {
            a(), c();
          }, [a, c]);
        return i.createElement(
          i.Fragment,
          null,
          l &&
            i.createElement(q, {
              hideModal: g,
              clanSteamID: u ? n : void 0,
              setAttrs: o,
              src: t,
            }),
          i.createElement(
            "span",
            { className: h()(z.ClanImageContainer, d && z.Hovered), ...m },
            i.createElement("img", { src: p }),
            i.createElement(
              "span",
              { className: z.ImageControls },
              i.createElement(
                H.ff,
                {
                  onClick: s,
                  tooltip: (0, G.we)("#EventEditor_ReplaceImage_Title"),
                },
                i.createElement(S.ffu, null),
              ),
              i.createElement(
                H.ff,
                {
                  onClick: r,
                  tooltip: (0, G.we)("#StoreAdmin_GameDescription_RemoveImage"),
                },
                i.createElement(S.sED, null),
              ),
            ),
          ),
        );
      }
      function q(e) {
        const { hideModal: t, clanSteamID: n, setAttrs: o, src: a } = e,
          r = i.useCallback(
            (e) => {
              o({ src: e }), t();
            },
            [o, t],
          );
        return n
          ? i.createElement(W, {
              hideModal: t,
              onImageSelected: r,
              clanSteamID: n,
            })
          : i.createElement(X, { hideModal: t, onImageSelected: r, src: a });
      }
      function X(e) {
        const { hideModal: t, onImageSelected: n, src: o } = e,
          [a, r] = i.useState(o),
          l = i.useCallback((e) => r(e.currentTarget.value), []);
        return i.createElement(
          I.mt,
          { active: !0, onDismiss: t },
          i.createElement(
            C.lV,
            { onSubmit: () => n(a) },
            i.createElement(
              C.Y9,
              null,
              (0, G.we)("#EventEditor_ReplaceImage_Title"),
            ),
            i.createElement(
              C.nB,
              null,
              i.createElement(C.pd, {
                value: a,
                onChange: l,
                label: (0, G.we)("#EventEditor_InsertImage_URL"),
              }),
            ),
            i.createElement(C.CB, {
              onCancel: t,
              strOKText: (0, G.we)("#EventEditor_ReplaceImage_Title"),
              bOKDisabled: a == o,
            }),
          ),
        );
      }
      function W(e) {
        const { hideModal: t, onImageSelected: n, clanSteamID: o } = e,
          a = i.useCallback(
            (e, t) => {
              n((0, _.fw)(e));
            },
            [n],
          );
        return i.createElement(
          D.E,
          { active: !0 },
          i.createElement(M._6, {
            closeModal: t,
            clanSteamID: o,
            OnClanImageSelected: a,
          }),
        );
      }
      function Z(e) {
        const { editModel: t, imageNode: n, children: o } = e,
          a = i.useCallback(
            async (e) => {
              const o = t.GetClanSteamID(),
                a = new v.V(o);
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
                i = (0, _.fw)(s);
              return await (0, A.DB)((0, w.v6)(i)), n.create({ src: i });
            },
            [t, n],
          );
        return n
          ? i.createElement(
              N,
              { ProcessFileUpload: a, bAllowImageHotLinking: !0 },
              o,
            )
          : o;
      }
      var J = n(33645),
        ee = n.n(J),
        te = n(55608),
        ne = n(79497),
        oe = n(9024),
        ae = n(52038);
      const re = {
          ...te.DQ.nodes,
          horizontal_rule: {
            group: "block",
            parseDOM: [{ tag: "hr" }],
            toDOM: (0, te.BM)("hr", ee().HR),
            bbCode: { tag: "hr" },
          },
          quote: {
            parseDOM: [{ tag: "blockquote" }],
            content: "block+",
            group: "block",
            defining: !0,
            toDOM: (0, te.BM)("blockquote", ee().BlockQuote),
            bbCode: { tag: "quote" },
          },
          pullquote: {
            content: "block+",
            group: "block",
            toDOM: (0, te.BM)("div", ee().PullQuote),
            bbCode: { tag: "pullquote" },
          },
          smalltext: {
            content: "inline*",
            group: "block",
            toDOM: (0, te.BM)("div", (0, ae.A)(ee().SmallText, "BB_SmallText")),
            bbCode: { tag: "smalltext" },
          },
          ...oe.X,
        },
        le = {
          ...te.DQ.marks,
          spoiler: {
            toDOM: (0, te.BM)(
              "span",
              (0, ae.A)(ee().Spoiler, ee().Revealed),
              (0, te.ce)("span", (0, ae.A)(ee().SpoilerText)),
            ),
            bbCode: { tag: "spoiler" },
          },
        };
      var se = n(6878),
        ie = n.n(se),
        ce = n(63226),
        de = n.n(ce);
      const me = {
        nodes: {
          ...re,
          heading: {
            ...te.DQ.nodes.heading,
            parseDOM: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              attrs: { level: e },
            })),
            toDOM: (e) => [
              "h" + e.attrs.level,
              {
                class: (0, ae.A)(
                  `BB_Header${e.attrs.level}`,
                  ee()[`Header${e.attrs.level}`],
                  ie()[`Header${e.attrs.level}`],
                ),
              },
              0,
            ],
            bbCode: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              BBArgsToAttrs: (t) => ({ ...ue(t), level: e }),
              AttrsToBBArgs: (e) => ({ ...pe(e), tag: `h${e.level}` }),
            })),
          },
          quote: {
            ...re.quote,
            toDOM: () => [
              "blockquote",
              { class: (0, ae.A)(ee().BlockQuote, ie().BlockQuote) },
              0,
            ],
          },
          previewyoutube: {
            attrs: { videoID: { default: "" }, align: { default: "" } },
            group: "block",
            atom: !0,
            draggable: !0,
            toDOM: () => ["div", { class: de().EditorYoutubeLoading }],
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
            toDOM: () => ["div", { class: de().EditorYoutubeLoading }],
            bbCode: {
              tag: "meetsteamsessiongroup",
              BBArgsToAttrs: (e) => ({ group_id: Number(e.group_id) }),
              AttrsToBBArgs: (e) => ({ args: { group_id: "" + e.group_id } }),
            },
          },
        },
        marks: { ...le },
      };
      function ue(e) {
        return e.id ? { id: e.id.replace(/^#/, "") } : {};
      }
      function pe(e) {
        return e.id ? { args: { id: e.id } } : {};
      }
      var ge = n(79216);
      var Ee = n(70995),
        he = n(74410),
        _e = n(73662),
        fe = n(9154);
      function ve(e) {
        const {
            videoID: t,
            align: n,
            selected: o,
            setAttrs: a,
            focusView: r,
          } = e,
          [l, s] = i.useState(!1),
          [c, d, m] = (0, Q.uD)(),
          u = i.useCallback(() => s(!0), []),
          p = i.useCallback(() => s(!1), []),
          g = i.useCallback(() => {
            m(), r();
          }, [m, r]),
          E = i.useCallback(
            (e, t) => {
              a({ videoID: e, align: t }), g();
            },
            [a, g],
          ),
          { sizeStr: h, alignStr: _ } = (0, he.i1)(n);
        return i.createElement(
          i.Fragment,
          null,
          c &&
            i.createElement(we, {
              videoID: t,
              align: n,
              bEditing: !0,
              hideModal: g,
              onSave: E,
            }),
          i.createElement(
            "div",
            {
              className: (0, ae.A)(
                ce.PreviewYoutubeEditor,
                h,
                _,
                _e.PreviewYouTubeVideo,
                o && ce.Selected,
              ),
              onMouseEnter: u,
              onMouseLeave: p,
            },
            l &&
              i.createElement(
                "div",
                { className: ce.EditHover, onClick: d },
                (0, G.we)("#Button_Edit"),
              ),
            o && i.createElement("div", { className: ce.SelectionOverlay }),
            i.createElement("img", {
              src: `https://img.youtube.com/vi/${t}/0.jpg`,
            }),
          ),
        );
      }
      function we(e) {
        const {
            videoID: t = "",
            align: n = "",
            bEditing: o = !1,
            hideModal: a,
            onSave: r,
          } = e,
          [l, s] = i.useState(n || he.V2.left),
          [c, d] = i.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [m, u] = i.useState(void 0),
          p = i.useCallback(() => {
            const { strVideoID: e } = (0, Ee.XU)(c);
            return (
              e ? r(e, l) : u((0, G.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [c, l, r]),
          g = i.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return i.createElement(
          fe.mt,
          { active: !0, onDismiss: a, className: ce.PreviewYoutubeEditorModal },
          i.createElement(
            "form",
            { onSubmit: p },
            i.createElement(
              C.Y9,
              null,
              (0, G.we)("#EventEditor_InsertYouTube"),
            ),
            m && i.createElement("div", { className: ce.Error }, m),
            i.createElement(
              C.G5,
              null,
              i.createElement(
                C.lr,
                null,
                (0, G.we)("#EventEditor_InsertYouTube_URL"),
              ),
              i.createElement(C.pd, {
                placeholder: (0, G.we)("#EventEditor_InsertYouTube_Placholder"),
                value: c,
                ref: g,
                onChange: (e) => d(e.currentTarget.value),
              }),
            ),
            i.createElement(
              C.G5,
              null,
              i.createElement(
                C.lr,
                null,
                (0, G.we)("#EventEditor_InsertYouTube_Position"),
              ),
              i.createElement(C.Od, {
                checked: l == he.V2.left,
                onChange: (e) => e && s(he.V2.left),
                label: (0, G.we)("#EventEditor_InsertYouTube_Left"),
              }),
              i.createElement(C.Od, {
                checked: l == he.V2.right,
                onChange: (e) => e && s(he.V2.right),
                label: (0, G.we)("#EventEditor_InsertYouTube_Right"),
              }),
              i.createElement(C.Od, {
                checked: l == he.V2.full,
                onChange: (e) => e && s(he.V2.full),
                label: (0, G.we)("#EventEditor_InsertYouTube_Full"),
              }),
              i.createElement(C.Od, {
                checked: l == he.V2.summary,
                onChange: (e) => e && s(he.V2.summary),
                label: (0, G.we)("#EventEditor_InsertYouTube_Summary"),
              }),
            ),
            i.createElement(
              C.wi,
              null,
              i.createElement(C.CB, {
                onCancel: a,
                strOKText: o
                  ? (0, G.we)("#Button_Save")
                  : (0, G.we)("#EventEditor_InsertYouTube"),
              }),
            ),
          ),
        );
      }
      var be = n(79570);
      var Ce = n(44483),
        Me = n(25918),
        Se = n(19675),
        Ie = n(69001),
        De = n(65946),
        ke = n(63556),
        Pe = n(44165),
        ye = n(95695),
        Te = n(99637),
        Ge = n(26408),
        Ae = n(62490),
        Ue = n(91675),
        Be = n(14771);
      function Ne(e) {
        const { hideModal: t, fnUpdateSession: n } = e,
          [o, a] = (0, i.useState)(() => Fe(!0, null)),
          [r, l] = (0, i.useState)(() => Ve(!0, null));
        return i.createElement(
          D.E,
          { active: !0 },
          i.createElement(
            P.o0,
            {
              strTitle: (0, G.we)("#MeetSteam_create_title"),
              onOK: () => n(o, r),
              closeModal: () => {
                l(Ve(!0, null)), a(Fe(!0, null)), t();
              },
            },
            i.createElement(xe, { group: o, fnSetGroup: a }),
            i.createElement(Le, { session: r, fnSetSession: l }),
          ),
        );
      }
      function Re(e) {
        const { hideModal: t, groupInput: n, fnUpdateGroupSession: o } = e,
          [a, r] = (0, i.useState)(() => Fe(!1, n));
        return i.createElement(
          D.E,
          { active: !0 },
          i.createElement(
            P.o0,
            {
              strTitle: (0, G.we)("#MeetSteam_edit_title"),
              onOK: () => {
                o(a), t();
              },
              onCancel: () => {
                r(Fe(!1, n)), t();
              },
            },
            i.createElement(xe, { group: a, fnSetGroup: r }),
          ),
        );
      }
      function Oe(e) {
        const {
            bCreate: t,
            hideModal: n,
            sessionInput: o,
            fnUpdateSession: a,
          } = e,
          [r, l] = (0, i.useState)(() => Ve(t, o));
        return i.createElement(
          D.E,
          { active: !0 },
          i.createElement(
            P.o0,
            {
              strTitle: (0, G.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                a(r), n();
              },
              onCancel: () => {
                l(Ve(t, o)), n();
              },
            },
            i.createElement(Le, { session: r, fnSetSession: l }),
          ),
        );
      }
      function xe(e) {
        const { group: t, fnSetGroup: n } = e,
          o = (0, ke.E)();
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(C.pd, {
            type: "text",
            label: (0, G.we)("#MeetSteam_edit_session_name"),
            value: G.NT.Get(t.localized_session_title, o),
            onChange: (e) => {
              const a = { ...t };
              (a.localized_session_title = G.NT.Set(
                a.localized_session_title,
                o,
                e.currentTarget.value,
              )),
                n(a);
            },
          }),
          i.createElement(C.pd, {
            type: "text",
            label: (0, G.we)("#MeetSteam_edit_session_desc"),
            value: G.NT.Get(t.localized_session_description, o),
            onChange: (e) => {
              const a = { ...t };
              (a.localized_session_description = G.NT.Set(
                a.localized_session_description,
                o,
                e.currentTarget.value,
              )),
                n(a);
            },
          }),
        );
      }
      function Le(e) {
        const { session: t, fnSetSession: n } = e,
          [o, a, r, l] = (0, De.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.max_capacity,
            t.max_per_team,
          ]),
          s = [];
        for (let e = 0; e < 4; ++e) s.push({ data: e, label: e });
        const c = Math.max(0, Math.floor((a - o) / 60));
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            { className: ye.EventEditorTextTitle },
            (0, G.we)("#MeetSteam_edit_date"),
            i.createElement(Ge.o, {
              tooltip: (0, G.we)("#MeetSteam_edit_date_ttip"),
            }),
          ),
          i.createElement(Te.K, {
            strDescription: (0, G.we)("#MeetSteam_edit_start"),
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => o,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + Be.Kp.PerMinute * c }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          i.createElement(C.pd, {
            type: "number",
            min: 0,
            label: (0, G.we)("#MeetSteam_edit_duration"),
            onChange: (e) => {
              const o = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + Be.Kp.PerMinute * o });
            },
            value: c,
          }),
          i.createElement(
            "div",
            null,
            (0, G.we)("#MeetSteam_edit_end"),
            ": ",
            (0, Ue.KC)(a),
            " ",
          ),
          i.createElement("br", null),
          i.createElement("br", null),
          i.createElement(C.pd, {
            type: "number",
            value: t.max_capacity,
            label: (0, G.we)("#MeetSteam_edit_max_capacity"),
            min: 1,
            onChange: (e) =>
              n({ ...t, max_capacity: Number.parseInt(e.currentTarget.value) }),
          }),
          i.createElement(C.m, {
            label: (0, G.we)("#MeetSteam_edit_team"),
            tooltip: (0, G.we)("#MeetSteam_edit_team_ttip"),
            rgOptions: s,
            selectedOption: t.max_per_team,
            onChange: (e) => n({ ...t, max_per_team: e.data }),
          }),
        );
      }
      function Fe(e, t) {
        if (e) {
          const e = Me.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, Ae.$Y)([], 31, null),
            localized_session_description: (0, Ae.$Y)([], 31, null),
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
          : ((0, g.w)(
              !1,
              "HelperCreateOrCloneGroupSessionModel Expect Create or previous model",
            ),
            null);
      }
      function Ve(e, t) {
        if (e) {
          const e = Pe.HD.GetTimeNowWithOverride(),
            t = Me.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            n =
              null == t ? void 0 : t.reduce((e, t) => e.concat(t.sessions), []);
          let o = 0;
          do {
            o = Math.floor(1e4 + 9e4 * Math.random());
          } while (n && n.findIndex((e) => e.id == o) >= 0);
          const a = 3600 * Math.ceil(e / 3600);
          return {
            id: o,
            rtime_start: a + Be.Kp.PerDay,
            rtime_end: a + Be.Kp.PerDay + Be.Kp.PerHour,
            max_capacity: 100,
            max_per_team: 3,
          };
        }
        return t
          ? { ...t }
          : ((0, g.w)(
              !1,
              "HelperCreateOrCloneSessionInstanceModel Expect Create or previous model",
            ),
            null);
      }
      var $e = n(1397),
        Ye = n.n($e);
      function He(e) {
        const t = Me.mh.GetEditModel();
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
      function Qe(e) {
        const t = Me.mh.GetEditModel();
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
      function je(e) {
        const { focusView: t, removeNode: n, group_id: o } = e,
          a = Me.mh.GetEditModel(),
          r = (0, De.q3)(() => {
            var e;
            return null ===
              (e = a.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == o);
          }),
          [l, s, c] = (0, Q.uD)(),
          d = i.useCallback(() => {
            t(), c();
          }, [t, c]),
          [m, u, p] = (0, Q.uD)(),
          g = i.useCallback(() => {
            t(), p();
          }, [t, p]);
        return r && a.GetClanAccountID() == (0, Se.H7)()
          ? i.createElement(
              "div",
              { className: Ye().EditorCtn },
              i.createElement(ze, { groupData: r, focusView: t }),
              i.createElement(
                "div",
                { className: Ye().controls },
                i.createElement(
                  H.ff,
                  { onClick: s, tooltip: (0, G.we)("#Button_Edit") },
                  i.createElement(S.ffu, null),
                ),
                i.createElement(
                  H.ff,
                  { onClick: u, tooltip: (0, G.we)("#Button_Delete") },
                  i.createElement(S.sED, null),
                ),
              ),
              l &&
                i.createElement(Re, {
                  hideModal: d,
                  groupInput: r,
                  fnUpdateGroupSession: (e) => {
                    const { groupIndex: t } = Qe(e.group_id),
                      n = Me.mh.GetEditModel();
                    (n.GetEventModel().jsondata.meet_steam_groups[t] = e),
                      n.SetDirty(Ie.IQ.description);
                  },
                }),
              m &&
                i.createElement(
                  D.E,
                  { active: !0 },
                  i.createElement(P.o0, {
                    strTitle: (0, G.we)("#Button_Delete"),
                    strDescription: (0, G.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { groupIndex: e } = Qe(r.group_id),
                        t = Me.mh.GetEditModel(),
                        o = [...t.GetEventModel().jsondata.meet_steam_groups];
                      o.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_groups = o),
                        t.SetDirty(Ie.IQ.description),
                        n();
                    },
                    closeModal: g,
                  }),
                ),
            )
          : i.createElement(
              "div",
              null,
              "Error: Cannot edit meet steam session group",
            );
      }
      function ze(e) {
        const { groupData: t, focusView: n } = e,
          o = (0, De.q3)(() => t.sessions || []),
          [a, r, l] = (0, Q.uD)(),
          s = i.useCallback(() => {
            n(), l();
          }, [n, l]);
        return t
          ? i.createElement(
              Se.jr,
              { groupData: t },
              o.map((e, a) =>
                i.createElement(Ke, {
                  key: "timecol_" + t.group_id + "_" + e.id,
                  focusView: n,
                  sessionID: e.id,
                  bShowOR: a + 1 < o.length,
                }),
              ),
              i.createElement(
                H.ff,
                { onClick: r, tooltip: (0, G.we)("#MeetSteam_add") },
                i.createElement(S.OMN, null),
              ),
              a &&
                i.createElement(Oe, {
                  bCreate: !0,
                  hideModal: s,
                  fnUpdateSession: (e) => {
                    const n = Me.mh.GetEditModel(),
                      o = [...t.sessions, e];
                    o.sort((e, t) => e.rtime_start - t.rtime_start),
                      (t.sessions = o),
                      n.SetDirty(Ie.IQ.description);
                  },
                }),
            )
          : null;
      }
      function Ke(e) {
        const { sessionID: t, bShowOR: n, focusView: o } = e,
          [a, r] = (0, Q.OP)(),
          l = (0, De.q3)(() => {
            const { groupIndex: e, sessionIndex: n } = He(t);
            return Me.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[n];
          }),
          [s, c, d] = (0, Q.uD)(),
          m = i.useCallback(() => {
            o(), d();
          }, [o, d]),
          [u, p, g] = (0, Q.uD)(),
          E = i.useCallback(() => {
            o(), g();
          }, [o, g]);
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            { className: Ye().Column, ...r },
            i.createElement(Se.Tn, { sessionData: l }),
            Boolean(a) &&
              i.createElement(
                "div",
                { className: Ye().controls },
                i.createElement(
                  H.ff,
                  { onClick: c, tooltip: (0, G.we)("#Button_Edit") },
                  i.createElement(S.ffu, null),
                ),
                i.createElement(
                  H.ff,
                  { onClick: p, tooltip: (0, G.we)("#Button_Delete") },
                  i.createElement(S.sED, null),
                ),
              ),
            s &&
              i.createElement(Oe, {
                bCreate: !1,
                hideModal: m,
                sessionInput: l,
                fnUpdateSession: (e) => {
                  const n = Me.mh.GetEditModel(),
                    { groupIndex: o, sessionIndex: a } = He(t),
                    r = [
                      ...n.GetEventModel().jsondata.meet_steam_groups[o]
                        .sessions,
                    ];
                  (r[a] = e),
                    r.sort((e, t) => e.rtime_start - t.rtime_start),
                    (n.GetEventModel().jsondata.meet_steam_groups[o].sessions =
                      r),
                    n.SetDirty(Ie.IQ.description);
                },
              }),
            u &&
              i.createElement(
                D.E,
                { active: !0 },
                i.createElement(P.o0, {
                  strTitle: (0, G.we)("#Button_Delete"),
                  strDescription: (0, G.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = Me.mh.GetEditModel(),
                      { groupIndex: n, sessionIndex: o } = He(t),
                      a = [
                        ...e.GetEventModel().jsondata.meet_steam_groups[n]
                          .sessions,
                      ];
                    a.splice(o, 1),
                      a.sort((e, t) => e.rtime_start - t.rtime_start),
                      (e.GetEventModel().jsondata.meet_steam_groups[
                        n
                      ].sessions = a),
                      e.SetDirty(Ie.IQ.description);
                  },
                  closeModal: E,
                }),
              ),
          ),
          n && i.createElement(Se.w3, null),
        );
      }
      const qe = i.memo(function (e) {
        const {
          view: t,
          schema: n,
          refUpdateToolbar: o,
          className: a,
          bSpellcheckEnabled: r,
          setSpellcheckEnabled: l,
        } = e;
        return i.createElement(
          H.bI,
          { refUpdateToolbar: o, view: t },
          i.createElement(
            H.Ez,
            { className: e.className },
            i.createElement(be.MV, null),
            i.createElement(H.XQ, null),
            i.createElement(be.Km, { schema: n }),
            i.createElement(H.XQ, null),
            n.marks.link && i.createElement(be.z9, { schema: n }),
            i.createElement(H.XQ, null),
            i.createElement(be.Hz, { schema: n }),
            i.createElement(be.WJ, { schema: n, levels: 3 }),
            i.createElement(H.XQ, null),
            n.nodes.previewyoutube && i.createElement(Xe, { schema: n }),
            i.createElement(H.XQ, null),
            !1,
            i.createElement(be.C$, {
              schema: n,
              showIndentButtonsAsNeeded: !0,
            }),
            i.createElement(H.hK, null),
            l &&
              i.createElement(be.Nt, {
                bSpellcheckEnabled: r,
                setSpellcheckEnabled: l,
              }),
            n.nodes.meetsteamsessiongroup && i.createElement(We, { schema: n }),
          ),
          !1,
        );
      });
      function Xe(e) {
        const { schema: t } = e,
          { callbacks: n, view: o } = (0, H.wU)(),
          [a, r, l] = (0, U.uD)(),
          s = i.useCallback(() => {
            l(), o.focus();
          }, [l, o]),
          c = i.useCallback(
            (e, n) => {
              !(function (e, t, n, o = he.V2.left) {
                e.dispatch(
                  e.state.tr.insert(
                    e.state.selection.to,
                    t.create({ videoID: n, align: o }),
                  ),
                );
              })(o, t.nodes.previewyoutube, e, n),
                s();
            },
            [t, o, s],
          );
        return i.createElement(
          i.Fragment,
          null,
          a && i.createElement(we, { hideModal: s, onSave: c }),
          i.createElement(
            H.ff,
            { tooltip: "#EventEditor_InsertYouTube", onClick: r, toggled: a },
            i.createElement("img", { src: Ce.A }),
          ),
        );
      }
      function We(e) {
        const { schema: t } = e,
          { callbacks: n, view: o } = (0, H.wU)(),
          a = Me.mh.GetEditModel(),
          [r, l, s] = (0, U.uD)(),
          c = i.useCallback(() => {
            s(), o.focus();
          }, [s, o]),
          d = i.useCallback(
            (e, n) => {
              a.GetEventModel().jsondata.meet_steam_groups ||
                (a.GetEventModel().jsondata.meet_steam_groups = []),
                a
                  .GetEventModel()
                  .jsondata.meet_steam_groups.push({ ...e, sessions: [n] }),
                (function (e, t, n) {
                  e.dispatch(
                    e.state.tr.insert(
                      e.state.selection.to,
                      t.create({ group_id: n }),
                    ),
                  );
                })(o, t.nodes.meetsteamsessiongroup, e.group_id),
                c();
            },
            [t, o, c, a],
          );
        if ((null == a ? void 0 : a.GetClanAccountID()) == (0, Se.H7)())
          return i.createElement(
            i.Fragment,
            null,
            r && i.createElement(Ne, { hideModal: c, fnUpdateSession: d }),
            i.createElement(
              H.ff,
              { tooltip: "#MeetSteam_add_group_ttip", onClick: l, toggled: r },
              i.createElement("img", { src: Ce.A }),
            ),
          );
      }
      var Ze = n(75844),
        Je = n(90316),
        et = n.n(Je),
        tt = n(1805);
      const nt = (0, Ze.PA)(function (e) {
          const { editModel: t } = e,
            n = t.GetEventModel().loadedAllLanguages,
            o = t.GetCurEditLanguage();
          return n
            ? i.createElement(ot, { ...e, eCurrentEditLanguage: o })
            : null;
        }),
        ot = i.memo(function (e) {
          const {
              editModel: t,
              refOnInsertImage: n,
              limitBBCode: r,
              eCurrentEditLanguage: l,
            } = e,
            [s, c] = i.useState(),
            d = i.useMemo(() => {
              return (e = r), new ne.W(me, e);
              var e;
            }, [r]),
            [m, u] = i.useState();
          i.useEffect(() => {
            u(new o.n(d, t.GetDescription(l), (e) => t.SetDescription(l, e)));
          }, [d, t, l]);
          const E = i.useRef(void 0);
          (0, a.i)(m, { msAutosaveTimeout: 1e3 });
          const { nodes: h, marks: v } = d.pm_schema,
            w = (function (e, t) {
              const n = i.useCallback(
                (n) => {
                  const o = `^https?://${j.TS.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)$`,
                    a = n.match(o);
                  return a && a.groups.clanid == e.GetClanAccountID().toString()
                    ? t.create({
                        src: `${f.lw}/${e.GetClanAccountID()}/${a.groups.filename}`,
                      })
                    : "default";
                },
                [e, t],
              );
              return t ? n : void 0;
            })(t, h.image);
          return (
            (function (e, t, n, o) {
              i.useEffect(() => {
                if (!o || !t) return;
                const a = (e, a) => {
                  let r;
                  switch (a) {
                    case _._o.k_eInsertFullImage:
                      r = t.create({ src: (0, _.fw)(e) });
                      break;
                    case _._o.k_eInsertThumbnail:
                      r = t.create({ src: (0, _.fw)(e, !0) }, null, [
                        n.create({ href: (0, _.fw)(e) }),
                      ]);
                      break;
                    case _._o.k_eInsertVideo:
                    case _._o.k_eShowImageGroup:
                      break;
                    default:
                      (0, g.z)(a, `Unhandled insert type ${a}`);
                  }
                  if (r) {
                    const e = o.state.tr;
                    e.selection.replaceWith(e, r), o.dispatch(e);
                  }
                };
                return (
                  (e.current = a),
                  () => {
                    e.current == a && (e.current = void 0);
                  }
                );
              }, [e, t, n, o]);
            })(n, h.image, v.link, s),
            i.createElement(
              Z,
              { editModel: t, imageNode: h.image },
              i.createElement(
                "div",
                { className: et().EventDetailsBody },
                i.createElement(qe, {
                  view: s,
                  schema: d.pm_schema,
                  refUpdateToolbar: E,
                  className: et().ToolBar,
                }),
                i.createElement(
                  "div",
                  { className: et().EventDescriptionArea },
                  i.createElement(
                    tt.l,
                    {
                      pmState: m,
                      className: et().EventDescriptionRichField,
                      refOnUpdate: E,
                      refView: c,
                      panelProps: { onBlur: () => m.CommitChanges() },
                    },
                    i.createElement(p.W, {
                      linkMarkType: v.link,
                      onURLPasted: w,
                      schema: d.pm_schema,
                    }),
                    h.image && i.createElement(R, { nodeType: h.image }),
                    i.createElement(at, {
                      schema: d.pm_schema,
                      clanSteamID: t.GetClanSteamID(),
                    }),
                  ),
                ),
              ),
            )
          );
        });
      function at(e) {
        const { schema: t, clanSteamID: n } = e,
          o = i.useMemo(
            () =>
              (function (e) {
                return ge.sM({ rules: [ge.tG(/^>$/, e.nodes.quote)] });
              })(t),
            [t],
          );
        (0, r.c$)(o);
        const a = i.useMemo(
          () => [
            t.nodes.previewyoutube && {
              type: t.nodes.previewyoutube,
              component: ve,
              readProps: (e) => ({
                videoID: e.attrs.videoID,
                align: e.attrs.align,
              }),
            },
            t.nodes.image && {
              type: t.nodes.image,
              component: K,
              readProps: (e) => ({ src: e.attrs.src, clanSteamID: n }),
            },
            t.nodes.meetsteamsessiongroup && {
              type: t.nodes.meetsteamsessiongroup,
              component: je,
              readProps: (e) => ({ group_id: e.attrs.group_id }),
            },
          ],
          [t, n],
        );
        return i.createElement(d, { specs: a });
      }
    },
  },
]);

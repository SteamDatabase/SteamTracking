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
        AddNew: "JBYdBhACB7UzXP4l_tpF2",
        DialogCtn: "Hd3q3Z7if0Z5H7rKMfqGN",
        ParticipantRow: "_3wHfIq4f1KlUL4-fKL0jLv",
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
      n.r(t), n.d(t, { default: () => at });
      var a = n(90286),
        o = n(26555),
        l = n(22145),
        r = n(91986),
        s = n(52893),
        i = n(90626),
        c = n(72739);
      const d = i.memo(function (e) {
        const { specs: t } = e,
          [n, a] = i.useState([]),
          o = i.useRef(0),
          r = i.useCallback(
            (e) => (
              a((t) => [...t, { id: o.current++, nodeView: e }]),
              () => a((t) => t.filter((t) => t.nodeView != e))
            ),
            [],
          ),
          c = i.useMemo(() => {
            const e = {};
            return (
              t
                .filter(Boolean)
                .forEach(
                  (t) => (e[t.type.name] = (e, n, a) => new u(t, e, n, a, r)),
                ),
              new s.k_({ props: { nodeViews: e } })
            );
          }, [t, r]);
        return (
          (0, l.c$)(c),
          n.map(({ id: e, nodeView: t }) =>
            i.createElement(m, { key: e, nodeView: t }),
          )
        );
      });
      function m(e) {
        const {
            element: t,
            spec: n,
            getProps: a,
            onPropsChanged: o,
            actions: l,
            isSelected: r,
          } = e.nodeView,
          [s, d] = i.useReducer((e) => e + 1, 0);
        return (
          i.useEffect(() => o.Register(d).Unregister, [o, d]),
          c.createPortal(
            i.createElement(n.component, { ...a(), selected: r(), ...l }),
            t,
          )
        );
      }
      class u {
        constructor(e, t, n, a, o) {
          this.node = t;
          const l = n.dom.ownerDocument.createElement(
            e.type.isInline ? "span" : "div",
          );
          this.dom = l;
          const { selection: s } = n.state;
          this.selected = a() >= s.from && a() + t.nodeSize <= s.to;
          const i = {
              setAttrs: (e) => {
                n.dispatch(n.state.tr.setNodeMarkup(a(), void 0, e));
              },
              removeNode: () => {
                n.dispatch(n.state.tr.delete(a(), a() + 1));
              },
              focusView: () => {
                n.focus();
              },
            },
            c = new r.l();
          (this.destroy = o({
            element: l,
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
        E = n(81393),
        g = n(64238),
        _ = n.n(g),
        h = n(81047),
        f = n(12611),
        v = n(28954),
        b = n(27666),
        w = n(71138),
        C = n(33737),
        M = n(2805),
        S = n(4869),
        I = n(83882),
        D = n(21869),
        k = n(29287);
      var y = n(78395),
        P = n(22797),
        T = n(6144),
        G = n(61859),
        A = n(27650),
        U = n(64753),
        N = n(73309);
      function B(e) {
        const {
            children: t,
            ProcessFileUpload: n,
            FetchImageURL: a,
            bAllowImageHotLinking: o = !1,
          } = e,
          [l] = i.useState(() => ({ manager: new L(n, a, o) })),
          { manager: r } = l;
        return (
          r.SetProps(n, a, o),
          i.createElement(
            F.Provider,
            { value: l },
            i.createElement(z, { manager: r }),
            i.createElement(H, { manager: r }, t),
          )
        );
      }
      const O = i.memo(function (e) {
        const { nodeType: t } = e,
          n = V(),
          {
            placeholderElements: a,
            createPlaceholder: o,
            replacePlaceholder: r,
          } = (function (e, t = "PlaceholderPlugin") {
            const [n, a] = i.useState([]),
              [o] = i.useState(
                () =>
                  new s.k_({
                    key: new s.hs(t),
                    state: {
                      init: () => k.zF.empty,
                      apply(t, n) {
                        n = n.map(t.mapping, t.doc);
                        const o = t.getMeta(this) || [];
                        for (const l of o)
                          if (null == l ? void 0 : l.add) {
                            const { id: o, data: r } = l.add,
                              s = (t, n) => {
                                const l = document.createElement(e);
                                return (
                                  a((e) => [
                                    ...e,
                                    { id: o, element: l, data: r },
                                  ]),
                                  l
                                );
                              },
                              i = (e) => {
                                a((t) => t.filter((t) => t.element != e));
                              },
                              c = k.NZ.widget(l.add.pos, s, {
                                id: o,
                                destroy: i,
                              });
                            n = n.add(t.doc, [c]);
                          } else
                            (null == l ? void 0 : l.remove) &&
                              (n = n.remove(
                                n.find(
                                  void 0,
                                  void 0,
                                  (e) => e.id == l.remove.id,
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
            (0, l.c$)(o);
            const r = (0, l.Hd)(),
              c = i.useRef(0),
              d = i.useCallback(
                (e, n, a) => {
                  const l = `${t}_${c.current++}`;
                  let s = a || r.state.tr;
                  void 0 === n &&
                    (s.selection.empty || s.deleteSelection(),
                    (n = s.selection.from));
                  const i = (null == a ? void 0 : a.getMeta(o)) || [];
                  return (
                    s.setMeta(o, [...i, { add: { id: l, pos: n, data: e } }]),
                    a || r.dispatch(s),
                    l
                  );
                },
                [o, t, r],
              ),
              m = i.useCallback(
                (e) => {
                  const t = o.getState(r.state),
                    n =
                      null == t
                        ? void 0
                        : t.find(void 0, void 0, (t) => t.id == e);
                  return (null == n ? void 0 : n.length) ? n[0].from : void 0;
                },
                [r, o],
              ),
              u = i.useCallback(
                (e, t) => {
                  const n = m(e);
                  return (
                    !!n &&
                    (t
                      ? r.dispatch(
                          r.state.tr
                            .replaceWith(n, n, t)
                            .setMeta(o, [{ remove: { id: e } }]),
                        )
                      : r.dispatch(
                          r.state.tr.setMeta(o, [{ remove: { id: e } }]),
                        ),
                    !0)
                  );
                },
                [o, m, r],
              );
            return {
              placeholderElements: n,
              createPlaceholder: d,
              findPlaceholder: m,
              replacePlaceholder: u,
            };
          })("span", "FileUploadPlaceholder");
        !(function (e, t) {
          (0, l.c$)(
            i.useMemo(
              () =>
                new s.k_({
                  props: {
                    handlePaste(n, a, o) {
                      if (e.BAllowImageHotLinking()) return !1;
                      const l = [];
                      if (
                        (o.content.descendants((e, n) => {
                          e.type == t && l.push({ url: e.attrs.src, pos: n });
                        }),
                        l.length)
                      ) {
                        let t = n.state.tr;
                        t.selection.empty || t.deleteSelection();
                        let a = t.selection.from,
                          r = 0;
                        for (const n of l) {
                          const l = o.content.cut(r, n.pos - 1);
                          t.insert(a, l),
                            (a += l.size),
                            e.QueueUploadFileByURL(n.url, a, t),
                            (r = n.pos + 1);
                        }
                        return (
                          t.insert(a, o.content.cut(r)),
                          t.scrollIntoView(),
                          n.dispatch(t),
                          !0
                        );
                      }
                    },
                    handleDOMEvents: {
                      paste(t, n) {
                        var a, o;
                        if (
                          (null ===
                            (o =
                              null === (a = n.clipboardData) || void 0 === a
                                ? void 0
                                : a.files) || void 0 === o
                            ? void 0
                            : o.length) > 0
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
        const c = (0, l.Hd)();
        return (
          i.useEffect(() => n.RegisterEditor(c, o, r), [n, c, o, r]),
          i.createElement(
            i.Fragment,
            null,
            a.map(({ id: e, element: t, data: n }) =>
              i.createElement(x, { key: e, element: t, data: n }),
            ),
          )
        );
      });
      class R extends Error {
        constructor(e) {
          super(e);
        }
      }
      function x(e) {
        const { element: t, data: n } = e,
          a = "file" in n ? n.file : void 0,
          o = i.useMemo(() => a && URL.createObjectURL(a), [a]),
          l = "url" in n ? n.url : o;
        return c.createPortal(
          i.createElement(
            "span",
            { className: N.FileUploadPlaceholder },
            i.createElement(
              "div",
              { className: N.Throbber },
              i.createElement(P.t, { size: "medium", position: "center" }),
            ),
            i.createElement("img", { src: l, className: N.PendingImage }),
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
            (0, E.w)(
              !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
              "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
            );
        }
        RegisterEditor(e, t, n) {
          return (
            (0, E.w)(!this.m_view, "Duplicate registration"),
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
          const a =
            null === (n = this.m_view) || void 0 === n
              ? void 0
              : n.posAtCoords({ left: e, top: t });
          return null == a ? void 0 : a.pos;
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
          const a = this.m_fnCreatePlaceholder({ url: e }, t, n);
          this.FetchURLAndProcess(e, a);
        }
        async FetchURLAndProcess(e, t) {
          var n;
          try {
            const a = new URL(e),
              o = await this.m_fnFetchImageURL(e),
              l = new File(
                [o],
                decodeURIComponent(
                  (null === (n = a.pathname) || void 0 === n
                    ? void 0
                    : n.replace(/^.*\//, "")) || "image",
                ),
                { type: o.type },
              );
            await this.ProcessFile(l, t);
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
            e instanceof R
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
      const z = i.memo(function (e) {
        const { manager: t } = e,
          n = (0, U.gc)(t.GetErrors());
        return n.length
          ? i.createElement(
              D.E,
              { active: !0 },
              i.createElement(y.o0, {
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
      function H(e) {
        const { manager: t, children: n } = e,
          a = i.useCallback(
            (e, n) => {
              for (const a of e)
                t.UploadFile(a, t.GetViewPosition(n.clientX, n.clientY));
            },
            [t],
          ),
          [o, l] = (0, A.hk)(a);
        return i.createElement(
          "div",
          { ...o, className: N.FileUploadDragDrop },
          l && !1,
          n,
        );
      }
      var Y = n(30175),
        $ = n(73745),
        Q = n(30470),
        j = n(21134);
      function K(e) {
        const {
            src: t,
            clanSteamID: n,
            setAttrs: a,
            focusView: o,
            removeNode: l,
          } = e,
          [r, s, c] = (0, $.uD)(),
          [d, m] = (0, $.OP)(),
          [u, p] = i.useMemo(() => [-1 !== t.indexOf(f.lw), (0, b.v6)(t)], [t]),
          E = i.useCallback(() => {
            o(), c();
          }, [o, c]);
        return i.createElement(
          i.Fragment,
          null,
          r &&
            i.createElement(q, {
              hideModal: E,
              clanSteamID: u ? n : void 0,
              setAttrs: a,
              src: t,
            }),
          i.createElement(
            "span",
            { className: _()(j.ClanImageContainer, d && j.Hovered), ...m },
            i.createElement("img", { src: p }),
            i.createElement(
              "span",
              { className: j.ImageControls },
              i.createElement(
                Y.ff,
                {
                  onClick: s,
                  tooltip: (0, G.we)("#EventEditor_ReplaceImage_Title"),
                },
                i.createElement(S.ffu, null),
              ),
              i.createElement(
                Y.ff,
                {
                  onClick: l,
                  tooltip: (0, G.we)("#StoreAdmin_GameDescription_RemoveImage"),
                },
                i.createElement(S.sED, null),
              ),
            ),
          ),
        );
      }
      function q(e) {
        const { hideModal: t, clanSteamID: n, setAttrs: a, src: o } = e,
          l = i.useCallback(
            (e) => {
              a({ src: e }), t();
            },
            [a, t],
          );
        return n
          ? i.createElement(Z, {
              hideModal: t,
              onImageSelected: l,
              clanSteamID: n,
            })
          : i.createElement(X, { hideModal: t, onImageSelected: l, src: o });
      }
      function X(e) {
        const { hideModal: t, onImageSelected: n, src: a } = e,
          [o, l] = i.useState(a),
          r = i.useCallback((e) => l(e.currentTarget.value), []);
        return i.createElement(
          I.mt,
          { active: !0, onDismiss: t },
          i.createElement(
            C.lV,
            { onSubmit: () => n(o) },
            i.createElement(
              C.Y9,
              null,
              (0, G.we)("#EventEditor_ReplaceImage_Title"),
            ),
            i.createElement(
              C.nB,
              null,
              i.createElement(C.pd, {
                value: o,
                onChange: r,
                label: (0, G.we)("#EventEditor_InsertImage_URL"),
              }),
            ),
            i.createElement(C.CB, {
              onCancel: t,
              strOKText: (0, G.we)("#EventEditor_ReplaceImage_Title"),
              bOKDisabled: o == a,
            }),
          ),
        );
      }
      function Z(e) {
        const { hideModal: t, onImageSelected: n, clanSteamID: a } = e,
          o = i.useCallback(
            (e, t) => {
              n((0, h.fw)(e));
            },
            [n],
          );
        return i.createElement(
          D.E,
          { active: !0 },
          i.createElement(M._6, {
            closeModal: t,
            clanSteamID: a,
            OnClanImageSelected: o,
          }),
        );
      }
      function W(e) {
        const { editModel: t, imageNode: n, children: a } = e,
          o = i.useCallback(
            async (e) => {
              const a = t.GetClanSteamID(),
                o = new v.V(a);
              if (!(await o.AddImage(e, t.GetCurEditLanguage(), null)))
                throw "Error processing image upload";
              const l = await o.UploadAllImages(
                t.GetIncludedRealmList(),
                t.GetCurEditLanguage(),
              );
              if (!l || 1 != Object.values(l).length)
                throw "Error uploading image";
              const r = Object.values(l)[0];
              if (!r.success) throw r.message;
              const s = w.pU.GetClanImageByImageHash(a, r.image_hash),
                i = (0, h.fw)(s);
              return await (0, A.DB)((0, b.v6)(i)), n.create({ src: i });
            },
            [t, n],
          );
        return n
          ? i.createElement(
              B,
              { ProcessFileUpload: o, bAllowImageHotLinking: !0 },
              a,
            )
          : a;
      }
      var J = n(33645),
        ee = n.n(J),
        te = n(55608),
        ne = n(79497),
        ae = n(9024),
        oe = n(52038);
      const le = {
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
            toDOM: (0, te.BM)("div", (0, oe.A)(ee().SmallText, "BB_SmallText")),
            bbCode: { tag: "smalltext" },
          },
          ...ae.X,
        },
        re = {
          ...te.DQ.marks,
          spoiler: {
            toDOM: (0, te.BM)(
              "span",
              (0, oe.A)(ee().Spoiler, ee().Revealed),
              (0, te.ce)("span", (0, oe.A)(ee().SpoilerText)),
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
          ...le,
          heading: {
            ...te.DQ.nodes.heading,
            parseDOM: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              attrs: { level: e },
            })),
            toDOM: (e) => [
              "h" + e.attrs.level,
              {
                class: (0, oe.A)(
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
            ...le.quote,
            toDOM: () => [
              "blockquote",
              { class: (0, oe.A)(ee().BlockQuote, ie().BlockQuote) },
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
        marks: { ...re },
      };
      function ue(e) {
        return e.id ? { id: e.id.replace(/^#/, "") } : {};
      }
      function pe(e) {
        return e.id ? { args: { id: e.id } } : {};
      }
      var Ee = n(79216);
      var ge = n(70995),
        _e = n(74410),
        he = n(73662),
        fe = n(9154);
      function ve(e) {
        const {
            videoID: t,
            align: n,
            selected: a,
            setAttrs: o,
            focusView: l,
          } = e,
          [r, s] = i.useState(!1),
          [c, d, m] = (0, $.uD)(),
          u = i.useCallback(() => s(!0), []),
          p = i.useCallback(() => s(!1), []),
          E = i.useCallback(() => {
            m(), l();
          }, [m, l]),
          g = i.useCallback(
            (e, t) => {
              o({ videoID: e, align: t }), E();
            },
            [o, E],
          ),
          { sizeStr: _, alignStr: h } = (0, _e.i1)(n);
        return i.createElement(
          i.Fragment,
          null,
          c &&
            i.createElement(be, {
              videoID: t,
              align: n,
              bEditing: !0,
              hideModal: E,
              onSave: g,
            }),
          i.createElement(
            "div",
            {
              className: (0, oe.A)(
                ce.PreviewYoutubeEditor,
                _,
                h,
                he.PreviewYouTubeVideo,
                a && ce.Selected,
              ),
              onMouseEnter: u,
              onMouseLeave: p,
            },
            r &&
              i.createElement(
                "div",
                { className: ce.EditHover, onClick: d },
                (0, G.we)("#Button_Edit"),
              ),
            a && i.createElement("div", { className: ce.SelectionOverlay }),
            i.createElement("img", {
              src: `https://img.youtube.com/vi/${t}/0.jpg`,
            }),
          ),
        );
      }
      function be(e) {
        const {
            videoID: t = "",
            align: n = "",
            bEditing: a = !1,
            hideModal: o,
            onSave: l,
          } = e,
          [r, s] = i.useState(n || _e.V2.left),
          [c, d] = i.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [m, u] = i.useState(void 0),
          p = i.useCallback(() => {
            const { strVideoID: e } = (0, ge.XU)(c);
            return (
              e ? l(e, r) : u((0, G.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [c, r, l]),
          E = i.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return i.createElement(
          fe.mt,
          { active: !0, onDismiss: o, className: ce.PreviewYoutubeEditorModal },
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
                ref: E,
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
                checked: r == _e.V2.left,
                onChange: (e) => e && s(_e.V2.left),
                label: (0, G.we)("#EventEditor_InsertYouTube_Left"),
              }),
              i.createElement(C.Od, {
                checked: r == _e.V2.right,
                onChange: (e) => e && s(_e.V2.right),
                label: (0, G.we)("#EventEditor_InsertYouTube_Right"),
              }),
              i.createElement(C.Od, {
                checked: r == _e.V2.full,
                onChange: (e) => e && s(_e.V2.full),
                label: (0, G.we)("#EventEditor_InsertYouTube_Full"),
              }),
              i.createElement(C.Od, {
                checked: r == _e.V2.summary,
                onChange: (e) => e && s(_e.V2.summary),
                label: (0, G.we)("#EventEditor_InsertYouTube_Summary"),
              }),
            ),
            i.createElement(
              C.wi,
              null,
              i.createElement(C.CB, {
                onCancel: o,
                strOKText: a
                  ? (0, G.we)("#Button_Save")
                  : (0, G.we)("#EventEditor_InsertYouTube"),
              }),
            ),
          ),
        );
      }
      var we = n(79570);
      var Ce = n(44483),
        Me = n(25918),
        Se = n(19675),
        Ie = n(69001),
        De = n(65946),
        ke = n(1397),
        ye = n.n(ke),
        Pe = n(63556),
        Te = n(44165),
        Ge = n(95695),
        Ae = n(99637),
        Ue = n(62490),
        Ne = n(91675),
        Be = n(14771),
        Oe = n(87937),
        Re = n(61819);
      function xe(e) {
        const { hideModal: t, fnUpdateSession: n } = e,
          [a, o] = (0, i.useState)(() => He(!0, null)),
          [l, r] = (0, i.useState)(() => Ye(!0, null)),
          [s] = (0, De.q3)(() => [l.location_type]);
        return i.createElement(
          D.E,
          { active: !0 },
          i.createElement(
            y.o0,
            {
              strTitle: (0, G.we)("#MeetSteam_create_title"),
              onOK: () => n(a, l),
              closeModal: () => {
                r(Ye(!0, null)), o(He(!0, null)), t();
              },
              bOKDisabled: null == !s,
            },
            i.createElement(
              "div",
              { className: ye().DialogCtn },
              i.createElement(Ve, { group: a, fnSetGroup: o }),
              i.createElement(ze, { session: l, fnSetSession: r }),
            ),
          ),
        );
      }
      function Le(e) {
        const { hideModal: t, groupInput: n, fnUpdateGroupSession: a } = e,
          [o, l] = (0, i.useState)(() => He(!1, n));
        return i.createElement(
          D.E,
          { active: !0 },
          i.createElement(
            y.o0,
            {
              strTitle: (0, G.we)("#MeetSteam_edit_title"),
              onOK: () => {
                a(o), t();
              },
              onCancel: () => {
                l(He(!1, n)), t();
              },
            },
            i.createElement(
              "div",
              { className: ye().DialogCtn },
              i.createElement(Ve, { group: o, fnSetGroup: l }),
            ),
          ),
        );
      }
      function Fe(e) {
        const {
            bCreate: t,
            hideModal: n,
            sessionInput: a,
            fnUpdateSession: o,
          } = e,
          [l, r] = (0, i.useState)(() => Ye(t, a)),
          [s] = (0, De.q3)(() => [l.location_type]);
        return i.createElement(
          D.E,
          { active: !0 },
          i.createElement(
            y.o0,
            {
              strTitle: (0, G.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                o(l), n();
              },
              onCancel: () => {
                r(Ye(t, a)), n();
              },
              bOKDisabled: !s,
            },
            i.createElement(
              "div",
              { className: ye().DialogCtn },
              i.createElement(ze, { session: l, fnSetSession: r }),
            ),
          ),
        );
      }
      function Ve(e) {
        const { group: t, fnSetGroup: n } = e,
          a = (0, Pe.E)();
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(C.pd, {
            type: "text",
            label: (0, G.we)("#MeetSteam_edit_session_name"),
            value: G.NT.Get(t.localized_session_title, a),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_title = G.NT.Set(
                o.localized_session_title,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          i.createElement(C.pd, {
            type: "text",
            label: (0, G.we)("#MeetSteam_edit_session_desc"),
            value: G.NT.Get(t.localized_session_description, a),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_description = G.NT.Set(
                o.localized_session_description,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
        );
      }
      function ze(e) {
        const { session: t, fnSetSession: n } = e,
          [a, o, l, r, s, c] = (0, De.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.max_capacity,
            t.max_per_team,
            t.location_type,
            t.in_person_time_zone,
          ]),
          d = [];
        for (let e = 0; e < 4; ++e) d.push({ data: e, label: e });
        const m = Math.max(0, Math.floor((o - a) / 60)),
          u = "US/Pacific",
          p = Intl.DateTimeFormat().resolvedOptions().timeZone,
          E = "in_person" === s ? (null != c ? c : u) : p,
          g = Oe.unix(t.rtime_start).tz(u),
          _ = Oe.unix(t.rtime_start).tz(E),
          h = _.utcOffset() - g.utcOffset(),
          f = Oe.unix(t.rtime_end).tz(u),
          v = Oe.unix(t.rtime_end).tz(E),
          b = v.utcOffset() - f.utcOffset();
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            { className: Ge.EventEditorTextTitle },
            (0, G.we)("#MeetSteam_edit_date_display_title"),
          ),
          i.createElement(
            "div",
            { className: Ge.EventEditorTextSubTitle },
            (0, G.we)("#MeetSteam_edit_date_display_desc"),
          ),
          i.createElement(
            C.zW,
            {
              value: s,
              onChange: (e) => {
                n({ ...t, location_type: e });
              },
            },
            i.createElement(
              C.a,
              { value: "in_person" },
              (0, G.we)("#MeetSteam_edit_date_display_in_person"),
            ),
            i.createElement(
              C.a,
              { value: "virtual" },
              (0, G.we)("#MeetSteam_edit_date_display_virtual"),
            ),
          ),
          "in_person" === s &&
            i.createElement(Re.Ay, {
              styles: { option: (e) => ({ ...e, color: "#444444" }) },
              isSearchable: !0,
              isMulti: !1,
              options: Oe.tz.names().map((e) => ({ label: e, value: e })),
              defaultMenuIsOpen: !1,
              value: c ? { label: c, value: c } : { label: u, value: u },
              onChange: (e) => n({ ...t, in_person_time_zone: e.value }),
            }),
          i.createElement("br", null),
          i.createElement(Ae.K, {
            strDescription: (0, G.we)("#MeetSteam_edit_start"),
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => a,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + Be.Kp.PerMinute * m }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          i.createElement("br", null),
          i.createElement(C.pd, {
            type: "number",
            min: 0,
            label: (0, G.we)("#MeetSteam_edit_duration"),
            onChange: (e) => {
              const a = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + Be.Kp.PerMinute * a });
            },
            value: m,
          }),
          i.createElement(
            "div",
            null,
            (0, G.we)("#MeetSteam_edit_displayed_start"),
            ": ",
            (0, Ne.P0)(_.unix() + 60 * h, !1, _.format("z")),
            " ",
          ),
          i.createElement(
            "div",
            null,
            (0, G.we)("#MeetSteam_edit_displayed_end"),
            ": ",
            (0, Ne.P0)(v.unix() + 60 * b, !1, v.format("z")),
            " ",
          ),
          i.createElement("br", null),
          i.createElement("br", null),
          i.createElement(
            "div",
            { className: ye().ParticipantRow },
            i.createElement(C.pd, {
              type: "number",
              value: l,
              label: (0, G.we)("#MeetSteam_edit_max_capacity"),
              min: 1,
              onChange: (e) =>
                n({
                  ...t,
                  max_capacity: Number.parseInt(e.currentTarget.value),
                }),
            }),
            i.createElement(C.m, {
              controlled: !0,
              label: (0, G.we)("#MeetSteam_edit_team"),
              tooltip: (0, G.we)("#MeetSteam_edit_team_ttip"),
              rgOptions: d,
              selectedOption: r,
              onChange: (e) => n({ ...t, max_per_team: e.data }),
            }),
          ),
        );
      }
      function He(e, t) {
        if (e) {
          const e = Me.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, Ue.$Y)([], 31, null),
            localized_session_description: (0, Ue.$Y)([], 31, null),
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
          : ((0, E.w)(
              !1,
              "HelperCreateOrCloneGroupSessionModel Expect Create or previous model",
            ),
            null);
      }
      function Ye(e, t) {
        if (e) {
          const e = Te.HD.GetTimeNowWithOverride(),
            t = Me.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            n =
              null == t ? void 0 : t.reduce((e, t) => e.concat(t.sessions), []);
          let a = 0;
          do {
            a = Math.floor(1e4 + 9e4 * Math.random());
          } while (n && n.findIndex((e) => e.id == a) >= 0);
          const o = 3600 * Math.ceil(e / 3600);
          return {
            id: a,
            rtime_start: o + Be.Kp.PerDay,
            rtime_end: o + Be.Kp.PerDay + Be.Kp.PerHour,
            max_capacity: 100,
            max_per_team: 3,
          };
        }
        return t
          ? { ...t }
          : ((0, E.w)(
              !1,
              "HelperCreateOrCloneSessionInstanceModel Expect Create or previous model",
            ),
            null);
      }
      function $e(e) {
        const t = Me.mh.GetEditModel();
        for (
          let n = 0;
          n < t.GetEventModel().jsondata.meet_steam_groups.length;
          ++n
        ) {
          const a = t.GetEventModel().jsondata.meet_steam_groups[n];
          for (let t = 0; t < a.sessions.length; ++t)
            if (a.sessions[t].id == e)
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
          const a = t.GetEventModel().jsondata.meet_steam_groups[n];
          if (a.group_id == e) return { group: a, groupIndex: n };
        }
        return null;
      }
      function je(e) {
        const { focusView: t, removeNode: n, group_id: a } = e,
          o = Me.mh.GetEditModel(),
          l = (0, De.q3)(() => {
            var e;
            return null ===
              (e = o.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == a);
          }),
          [r, s, c] = (0, $.uD)(),
          d = i.useCallback(() => {
            t(), c();
          }, [t, c]),
          [m, u, p] = (0, $.uD)(),
          E = i.useCallback(() => {
            t(), p();
          }, [t, p]);
        return l && o.GetClanAccountID() == (0, Se.H7)()
          ? i.createElement(
              "div",
              { className: ye().EditorCtn },
              i.createElement(Ke, { groupData: l, focusView: t }),
              i.createElement(
                "div",
                { className: ye().controls },
                i.createElement(
                  Y.ff,
                  { onClick: s, tooltip: (0, G.we)("#Button_Edit") },
                  i.createElement(S.ffu, null),
                ),
                i.createElement(
                  Y.ff,
                  { onClick: u, tooltip: (0, G.we)("#Button_Delete") },
                  i.createElement(S.sED, null),
                ),
              ),
              r &&
                i.createElement(Le, {
                  hideModal: d,
                  groupInput: l,
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
                  i.createElement(y.o0, {
                    strTitle: (0, G.we)("#Button_Delete"),
                    strDescription: (0, G.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { groupIndex: e } = Qe(l.group_id),
                        t = Me.mh.GetEditModel(),
                        a = [...t.GetEventModel().jsondata.meet_steam_groups];
                      a.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_groups = a),
                        t.SetDirty(Ie.IQ.description),
                        n();
                    },
                    closeModal: E,
                  }),
                ),
            )
          : i.createElement(
              "div",
              null,
              "Error: Cannot edit meet steam session group",
            );
      }
      function Ke(e) {
        const { groupData: t, focusView: n } = e,
          a = (0, De.q3)(() => t.sessions || []),
          [o, l, r] = (0, $.uD)(),
          s = i.useCallback(() => {
            n(), r();
          }, [n, r]);
        return t
          ? i.createElement(
              Se.jr,
              { groupData: t },
              a.map((e, o) =>
                i.createElement(qe, {
                  key: "timecol_" + t.group_id + "_" + e.id,
                  focusView: n,
                  sessionID: e.id,
                  bShowOR: o + 1 < a.length,
                }),
              ),
              i.createElement(
                Y.ff,
                {
                  className: ye().AddNew,
                  onClick: l,
                  tooltip: (0, G.we)("#MeetSteam_add"),
                },
                i.createElement(S.OMN, null),
              ),
              o &&
                i.createElement(Fe, {
                  bCreate: !0,
                  hideModal: s,
                  fnUpdateSession: (e) => {
                    const n = Me.mh.GetEditModel(),
                      a = [...t.sessions, e];
                    a.sort((e, t) => e.rtime_start - t.rtime_start),
                      (t.sessions = a),
                      n.SetDirty(Ie.IQ.description);
                  },
                }),
            )
          : null;
      }
      function qe(e) {
        const { sessionID: t, bShowOR: n, focusView: a } = e,
          [o, l] = (0, $.OP)(),
          r = (0, De.q3)(() => {
            const { groupIndex: e, sessionIndex: n } = $e(t);
            return Me.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[n];
          }),
          [s, c, d] = (0, $.uD)(),
          m = i.useCallback(() => {
            a(), d();
          }, [a, d]),
          [u, p, E] = (0, $.uD)(),
          g = i.useCallback(() => {
            a(), E();
          }, [a, E]);
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            { className: ye().Column, ...l },
            i.createElement(Se.Tn, { sessionData: r }),
            Boolean(o) &&
              i.createElement(
                "div",
                { className: ye().controls },
                i.createElement(
                  Y.ff,
                  { onClick: c, tooltip: (0, G.we)("#Button_Edit") },
                  i.createElement(S.ffu, null),
                ),
                i.createElement(
                  Y.ff,
                  { onClick: p, tooltip: (0, G.we)("#Button_Delete") },
                  i.createElement(S.sED, null),
                ),
              ),
            s &&
              i.createElement(Fe, {
                bCreate: !1,
                hideModal: m,
                sessionInput: r,
                fnUpdateSession: (e) => {
                  const n = Me.mh.GetEditModel(),
                    { groupIndex: a, sessionIndex: o } = $e(t),
                    l = [
                      ...n.GetEventModel().jsondata.meet_steam_groups[a]
                        .sessions,
                    ];
                  (l[o] = e),
                    l.sort((e, t) => e.rtime_start - t.rtime_start),
                    (n.GetEventModel().jsondata.meet_steam_groups[a].sessions =
                      l),
                    n.SetDirty(Ie.IQ.description);
                },
              }),
            u &&
              i.createElement(
                D.E,
                { active: !0 },
                i.createElement(y.o0, {
                  strTitle: (0, G.we)("#Button_Delete"),
                  strDescription: (0, G.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = Me.mh.GetEditModel(),
                      { groupIndex: n, sessionIndex: a } = $e(t),
                      o = [
                        ...e.GetEventModel().jsondata.meet_steam_groups[n]
                          .sessions,
                      ];
                    o.splice(a, 1),
                      o.sort((e, t) => e.rtime_start - t.rtime_start),
                      (e.GetEventModel().jsondata.meet_steam_groups[
                        n
                      ].sessions = o),
                      e.SetDirty(Ie.IQ.description);
                  },
                  closeModal: g,
                }),
              ),
          ),
          n && i.createElement(Se.w3, null),
        );
      }
      const Xe = i.memo(function (e) {
        const {
          view: t,
          schema: n,
          refUpdateToolbar: a,
          className: o,
          bSpellcheckEnabled: l,
          setSpellcheckEnabled: r,
        } = e;
        return i.createElement(
          Y.bI,
          { refUpdateToolbar: a, view: t },
          i.createElement(
            Y.Ez,
            { className: e.className },
            i.createElement(we.MV, null),
            i.createElement(Y.XQ, null),
            i.createElement(we.Km, { schema: n }),
            i.createElement(Y.XQ, null),
            n.marks.link && i.createElement(we.z9, { schema: n }),
            i.createElement(Y.XQ, null),
            i.createElement(we.Hz, { schema: n }),
            i.createElement(we.WJ, { schema: n, levels: 3 }),
            i.createElement(Y.XQ, null),
            n.nodes.previewyoutube && i.createElement(Ze, { schema: n }),
            i.createElement(Y.XQ, null),
            !1,
            i.createElement(we.C$, {
              schema: n,
              showIndentButtonsAsNeeded: !0,
            }),
            i.createElement(Y.hK, null),
            r &&
              i.createElement(we.Nt, {
                bSpellcheckEnabled: l,
                setSpellcheckEnabled: r,
              }),
            n.nodes.meetsteamsessiongroup && i.createElement(We, { schema: n }),
          ),
          !1,
        );
      });
      function Ze(e) {
        const { schema: t } = e,
          { callbacks: n, view: a } = (0, Y.wU)(),
          [o, l, r] = (0, U.uD)(),
          s = i.useCallback(() => {
            r(), a.focus();
          }, [r, a]),
          c = i.useCallback(
            (e, n) => {
              !(function (e, t, n, a = _e.V2.left) {
                e.dispatch(
                  e.state.tr.insert(
                    e.state.selection.to,
                    t.create({ videoID: n, align: a }),
                  ),
                );
              })(a, t.nodes.previewyoutube, e, n),
                s();
            },
            [t, a, s],
          );
        return i.createElement(
          i.Fragment,
          null,
          o && i.createElement(be, { hideModal: s, onSave: c }),
          i.createElement(
            Y.ff,
            { tooltip: "#EventEditor_InsertYouTube", onClick: l, toggled: o },
            i.createElement("img", { src: Ce.A }),
          ),
        );
      }
      function We(e) {
        const { schema: t } = e,
          { callbacks: n, view: a } = (0, Y.wU)(),
          o = Me.mh.GetEditModel(),
          [l, r, s] = (0, U.uD)(),
          c = i.useCallback(() => {
            s(), a.focus();
          }, [s, a]),
          d = i.useCallback(
            (e, n) => {
              o.GetEventModel().jsondata.meet_steam_groups ||
                (o.GetEventModel().jsondata.meet_steam_groups = []),
                o
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
            [t, a, c, o],
          );
        if ((null == o ? void 0 : o.GetClanAccountID()) == (0, Se.H7)())
          return i.createElement(
            i.Fragment,
            null,
            l && i.createElement(xe, { hideModal: c, fnUpdateSession: d }),
            i.createElement(
              Y.ff,
              { tooltip: "#MeetSteam_add_group_ttip", onClick: r, toggled: l },
              i.createElement("img", { src: Ce.A }),
            ),
          );
      }
      var Je = n(75844),
        et = n(90316),
        tt = n.n(et),
        nt = n(1805);
      const at = (0, Je.PA)(function (e) {
          const { editModel: t } = e,
            n = t.GetEventModel().loadedAllLanguages,
            a = t.GetCurEditLanguage();
          return n
            ? i.createElement(ot, { ...e, eCurrentEditLanguage: a })
            : null;
        }),
        ot = i.memo(function (e) {
          const {
              editModel: t,
              refOnInsertImage: n,
              limitBBCode: l,
              eCurrentEditLanguage: r,
            } = e,
            [s, c] = i.useState(),
            d = i.useMemo(() => {
              return (e = l), new ne.W(me, e);
              var e;
            }, [l]),
            [m, u] = i.useState();
          i.useEffect(() => {
            u(new a.n(d, t.GetDescription(r), (e) => t.SetDescription(r, e)));
          }, [d, t, r]);
          const g = i.useRef(void 0);
          (0, o.i)(m, { msAutosaveTimeout: 1e3 });
          const { nodes: _, marks: v } = d.pm_schema,
            b = (function (e, t) {
              const n = i.useCallback(
                (n) => {
                  const a = `^https?://${Q.TS.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)$`,
                    o = n.match(a);
                  return o && o.groups.clanid == e.GetClanAccountID().toString()
                    ? t.create({
                        src: `${f.lw}/${e.GetClanAccountID()}/${o.groups.filename}`,
                      })
                    : "default";
                },
                [e, t],
              );
              return t ? n : void 0;
            })(t, _.image);
          return (
            (function (e, t, n, a) {
              i.useEffect(() => {
                if (!a || !t) return;
                const o = (e, o) => {
                  let l;
                  switch (o) {
                    case h._o.k_eInsertFullImage:
                      l = t.create({ src: (0, h.fw)(e) });
                      break;
                    case h._o.k_eInsertThumbnail:
                      l = t.create({ src: (0, h.fw)(e, !0) }, null, [
                        n.create({ href: (0, h.fw)(e) }),
                      ]);
                      break;
                    case h._o.k_eInsertVideo:
                    case h._o.k_eShowImageGroup:
                      break;
                    default:
                      (0, E.z)(o, `Unhandled insert type ${o}`);
                  }
                  if (l) {
                    const e = a.state.tr;
                    e.selection.replaceWith(e, l), a.dispatch(e);
                  }
                };
                return (
                  (e.current = o),
                  () => {
                    e.current == o && (e.current = void 0);
                  }
                );
              }, [e, t, n, a]);
            })(n, _.image, v.link, s),
            i.createElement(
              W,
              { editModel: t, imageNode: _.image },
              i.createElement(
                "div",
                { className: tt().EventDetailsBody },
                i.createElement(Xe, {
                  view: s,
                  schema: d.pm_schema,
                  refUpdateToolbar: g,
                  className: tt().ToolBar,
                }),
                i.createElement(
                  "div",
                  { className: tt().EventDescriptionArea },
                  i.createElement(
                    nt.l,
                    {
                      pmState: m,
                      className: tt().EventDescriptionRichField,
                      refOnUpdate: g,
                      refView: c,
                      panelProps: { onBlur: () => m.CommitChanges() },
                    },
                    i.createElement(p.W, {
                      linkMarkType: v.link,
                      onURLPasted: b,
                      schema: d.pm_schema,
                    }),
                    _.image && i.createElement(O, { nodeType: _.image }),
                    i.createElement(lt, {
                      schema: d.pm_schema,
                      clanSteamID: t.GetClanSteamID(),
                    }),
                  ),
                ),
              ),
            )
          );
        });
      function lt(e) {
        const { schema: t, clanSteamID: n } = e,
          a = i.useMemo(
            () =>
              (function (e) {
                return Ee.sM({ rules: [Ee.tG(/^>$/, e.nodes.quote)] });
              })(t),
            [t],
          );
        (0, l.c$)(a);
        const o = i.useMemo(
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
        return i.createElement(d, { specs: o });
      }
    },
  },
]);

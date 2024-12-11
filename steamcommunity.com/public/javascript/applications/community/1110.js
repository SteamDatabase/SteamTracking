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
      n.r(t), n.d(t, { default: () => tt });
      var o = n(32662),
        a = n(22145),
        l = n(91986),
        r = n(52893),
        s = n(90626),
        i = n(72739);
      const c = s.memo(function (e) {
        const { specs: t } = e,
          [n, o] = s.useState([]),
          l = s.useRef(0),
          i = s.useCallback(
            (e) => (
              o((t) => [...t, { id: l.current++, nodeView: e }]),
              () => o((t) => t.filter((t) => t.nodeView != e))
            ),
            [],
          ),
          c = s.useMemo(() => {
            const e = {};
            return (
              t
                .filter(Boolean)
                .forEach(
                  (t) => (e[t.type.name] = (e, n, o) => new m(t, e, n, o, i)),
                ),
              new r.k_({ props: { nodeViews: e } })
            );
          }, [t, i]);
        return (
          (0, a.c$)(c),
          n.map(({ id: e, nodeView: t }) =>
            s.createElement(d, { key: e, nodeView: t }),
          )
        );
      });
      function d(e) {
        const {
            element: t,
            spec: n,
            getProps: o,
            onPropsChanged: a,
            actions: l,
            isSelected: r,
          } = e.nodeView,
          [c, d] = s.useReducer((e) => e + 1, 0);
        return (
          s.useEffect(() => a.Register(d).Unregister, [a, d]),
          i.createPortal(
            s.createElement(n.component, { ...o(), selected: r(), ...l }),
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
        M = n(4869),
        S = n(83882),
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
            FetchImageURL: o,
            bAllowImageHotLinking: a = !1,
          } = e,
          [l] = s.useState(() => ({ manager: new x(n, o, a) })),
          { manager: r } = l;
        return (
          r.SetProps(n, o, a),
          s.createElement(
            L.Provider,
            { value: l },
            s.createElement(V, { manager: r }),
            s.createElement($, { manager: r }, t),
          )
        );
      }
      const N = s.memo(function (e) {
        const { nodeType: t } = e,
          n = F(),
          {
            placeholderElements: o,
            createPlaceholder: l,
            replacePlaceholder: i,
          } = (function (e, t = "PlaceholderPlugin") {
            const [n, o] = s.useState([]),
              [l] = s.useState(
                () =>
                  new r.k_({
                    key: new r.hs(t),
                    state: {
                      init: () => k.zF.empty,
                      apply(t, n) {
                        n = n.map(t.mapping, t.doc);
                        const a = t.getMeta(this) || [];
                        for (const l of a)
                          if (null == l ? void 0 : l.add) {
                            const { id: a, data: r } = l.add,
                              s = (t, n) => {
                                const l = document.createElement(e);
                                return (
                                  o((e) => [
                                    ...e,
                                    { id: a, element: l, data: r },
                                  ]),
                                  l
                                );
                              },
                              i = (e) => {
                                o((t) => t.filter((t) => t.element != e));
                              },
                              c = k.NZ.widget(l.add.pos, s, {
                                id: a,
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
            (0, a.c$)(l);
            const i = (0, a.Hd)(),
              c = s.useRef(0),
              d = s.useCallback(
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
              m = s.useCallback(
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
              u = s.useCallback(
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
          (0, a.c$)(
            s.useMemo(
              () =>
                new r.k_({
                  props: {
                    handlePaste(n, o, a) {
                      if (e.BAllowImageHotLinking()) return !1;
                      const l = [];
                      if (
                        (a.content.descendants((e, n) => {
                          e.type == t && l.push({ url: e.attrs.src, pos: n });
                        }),
                        l.length)
                      ) {
                        let t = n.state.tr;
                        t.selection.empty || t.deleteSelection();
                        let o = t.selection.from,
                          r = 0;
                        for (const n of l) {
                          const l = a.content.cut(r, n.pos - 1);
                          t.insert(o, l),
                            (o += l.size),
                            e.QueueUploadFileByURL(n.url, o, t),
                            (r = n.pos + 1);
                        }
                        return (
                          t.insert(o, a.content.cut(r)),
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
        const c = (0, a.Hd)();
        return (
          s.useEffect(() => n.RegisterEditor(c, l, i), [n, c, l, i]),
          s.createElement(
            s.Fragment,
            null,
            o.map(({ id: e, element: t, data: n }) =>
              s.createElement(O, { key: e, element: t, data: n }),
            ),
          )
        );
      });
      class R extends Error {
        constructor(e) {
          super(e);
        }
      }
      function O(e) {
        const { element: t, data: n } = e,
          o = "file" in n ? n.file : void 0,
          a = s.useMemo(() => o && URL.createObjectURL(o), [o]),
          l = "url" in n ? n.url : a;
        return i.createPortal(
          s.createElement(
            "span",
            { className: A.FileUploadPlaceholder },
            s.createElement(
              "div",
              { className: A.Throbber },
              s.createElement(P.t, { size: "medium", position: "center" }),
            ),
            s.createElement("img", { src: l, className: A.PendingImage }),
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
              l = new File(
                [a],
                decodeURIComponent(
                  (null === (n = o.pathname) || void 0 === n
                    ? void 0
                    : n.replace(/^.*\//, "")) || "image",
                ),
                { type: a.type },
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
      const L = s.createContext(void 0);
      function F() {
        return s.useContext(L).manager;
      }
      const V = s.memo(function (e) {
        const { manager: t } = e,
          n = (0, U.gc)(t.GetErrors());
        return n.length
          ? s.createElement(
              I.E,
              { active: !0 },
              s.createElement(D.o0, {
                bAlertDialog: !0,
                strTitle: (0, T.we)("#Error_Generic"),
                strDescription: n.map((e, t) =>
                  s.createElement("div", { key: t }, e),
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
          o = s.useCallback(
            (e, n) => {
              for (const o of e)
                t.UploadFile(o, t.GetViewPosition(n.clientX, n.clientY));
            },
            [t],
          ),
          [a, l] = (0, G.hk)(o);
        return s.createElement(
          "div",
          { ...a, className: A.FileUploadDragDrop },
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
            setAttrs: o,
            focusView: a,
            removeNode: l,
          } = e,
          [r, i, c] = (0, H.uD)(),
          [d, m] = (0, H.OP)(),
          [u, p] = s.useMemo(() => [-1 !== t.indexOf(_.lw), (0, v.v6)(t)], [t]),
          g = s.useCallback(() => {
            a(), c();
          }, [a, c]);
        return s.createElement(
          s.Fragment,
          null,
          r &&
            s.createElement(K, {
              hideModal: g,
              clanSteamID: u ? n : void 0,
              setAttrs: o,
              src: t,
            }),
          s.createElement(
            "span",
            { className: E()(j.ClanImageContainer, d && j.Hovered), ...m },
            s.createElement("img", { src: p }),
            s.createElement(
              "span",
              { className: j.ImageControls },
              s.createElement(
                Y.ff,
                {
                  onClick: i,
                  tooltip: (0, T.we)("#EventEditor_ReplaceImage_Title"),
                },
                s.createElement(M.ffu, null),
              ),
              s.createElement(
                Y.ff,
                {
                  onClick: l,
                  tooltip: (0, T.we)("#StoreAdmin_GameDescription_RemoveImage"),
                },
                s.createElement(M.sED, null),
              ),
            ),
          ),
        );
      }
      function K(e) {
        const { hideModal: t, clanSteamID: n, setAttrs: o, src: a } = e,
          l = s.useCallback(
            (e) => {
              o({ src: e }), t();
            },
            [o, t],
          );
        return n
          ? s.createElement(X, {
              hideModal: t,
              onImageSelected: l,
              clanSteamID: n,
            })
          : s.createElement(q, { hideModal: t, onImageSelected: l, src: a });
      }
      function q(e) {
        const { hideModal: t, onImageSelected: n, src: o } = e,
          [a, l] = s.useState(o),
          r = s.useCallback((e) => l(e.currentTarget.value), []);
        return s.createElement(
          S.mt,
          { active: !0, onDismiss: t },
          s.createElement(
            w.lV,
            { onSubmit: () => n(a) },
            s.createElement(
              w.Y9,
              null,
              (0, T.we)("#EventEditor_ReplaceImage_Title"),
            ),
            s.createElement(
              w.nB,
              null,
              s.createElement(w.pd, {
                value: a,
                onChange: r,
                label: (0, T.we)("#EventEditor_InsertImage_URL"),
              }),
            ),
            s.createElement(w.CB, {
              onCancel: t,
              strOKText: (0, T.we)("#EventEditor_ReplaceImage_Title"),
              bOKDisabled: a == o,
            }),
          ),
        );
      }
      function X(e) {
        const { hideModal: t, onImageSelected: n, clanSteamID: o } = e,
          a = s.useCallback(
            (e, t) => {
              n((0, h.fw)(e));
            },
            [n],
          );
        return s.createElement(
          I.E,
          { active: !0 },
          s.createElement(C._6, {
            closeModal: t,
            clanSteamID: o,
            OnClanImageSelected: a,
          }),
        );
      }
      function W(e) {
        const { editModel: t, imageNode: n, children: o } = e,
          a = s.useCallback(
            async (e) => {
              const o = t.GetClanSteamID(),
                a = new f.V(o);
              if (!(await a.AddImage(e, t.GetCurEditLanguage(), null)))
                throw "Error processing image upload";
              const l = await a.UploadAllImages(
                t.GetIncludedRealmList(),
                t.GetCurEditLanguage(),
              );
              if (!l || 1 != Object.values(l).length)
                throw "Error uploading image";
              const r = Object.values(l)[0];
              if (!r.success) throw r.message;
              const s = b.pU.GetClanImageByImageHash(o, r.image_hash),
                i = (0, h.fw)(s);
              return await (0, G.DB)((0, v.v6)(i)), n.create({ src: i });
            },
            [t, n],
          );
        return n
          ? s.createElement(
              B,
              { ProcessFileUpload: a, bAllowImageHotLinking: !0 },
              o,
            )
          : o;
      }
      var Z = n(33645),
        J = n.n(Z),
        ee = n(55608),
        te = n(79497),
        ne = n(9024),
        oe = n(52038);
      const ae = {
          ...ee.DQ.nodes,
          horizontal_rule: {
            group: "block",
            parseDOM: [{ tag: "hr" }],
            toDOM: (0, ee.BM)("hr", J().HR),
            bbCode: { tag: "hr" },
          },
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
            toDOM: (0, ee.BM)("div", (0, oe.A)(J().SmallText, "BB_SmallText")),
            bbCode: { tag: "smalltext" },
          },
          ...ne.X,
        },
        le = {
          ...ee.DQ.marks,
          spoiler: {
            toDOM: (0, ee.BM)(
              "span",
              (0, oe.A)(J().Spoiler, J().Revealed),
              (0, ee.ce)("span", (0, oe.A)(J().SpoilerText)),
            ),
            bbCode: { tag: "spoiler" },
          },
        };
      var re = n(6878),
        se = n.n(re),
        ie = n(63226),
        ce = n.n(ie);
      const de = {
        nodes: {
          ...ae,
          heading: {
            ...ee.DQ.nodes.heading,
            parseDOM: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              attrs: { level: e },
            })),
            toDOM: (e) => [
              "h" + e.attrs.level,
              {
                class: (0, oe.A)(
                  `BB_Header${e.attrs.level}`,
                  J()[`Header${e.attrs.level}`],
                  se()[`Header${e.attrs.level}`],
                ),
              },
              0,
            ],
            bbCode: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              BBArgsToAttrs: (t) => ({ ...me(t), level: e }),
              AttrsToBBArgs: (e) => ({ ...ue(e), tag: `h${e.level}` }),
            })),
          },
          quote: {
            ...ae.quote,
            toDOM: () => [
              "blockquote",
              { class: (0, oe.A)(J().BlockQuote, se().BlockQuote) },
              0,
            ],
          },
          previewyoutube: {
            attrs: { videoID: { default: "" }, align: { default: "" } },
            group: "block",
            atom: !0,
            draggable: !0,
            toDOM: () => ["div", { class: ce().EditorYoutubeLoading }],
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
            toDOM: () => ["div", { class: ce().EditorYoutubeLoading }],
            bbCode: {
              tag: "meetsteamsessiongroup",
              BBArgsToAttrs: (e) => ({ group_id: Number(e.group_id) }),
              AttrsToBBArgs: (e) => ({ args: { group_id: "" + e.group_id } }),
            },
          },
        },
        marks: { ...le },
      };
      function me(e) {
        return e.id ? { id: e.id.replace(/^#/, "") } : {};
      }
      function ue(e) {
        return e.id ? { args: { id: e.id } } : {};
      }
      var pe = n(79216);
      var ge = n(70995),
        Ee = n(74410),
        he = n(73662),
        _e = n(9154);
      function fe(e) {
        const {
            videoID: t,
            align: n,
            selected: o,
            setAttrs: a,
            focusView: l,
          } = e,
          [r, i] = s.useState(!1),
          [c, d, m] = (0, H.uD)(),
          u = s.useCallback(() => i(!0), []),
          p = s.useCallback(() => i(!1), []),
          g = s.useCallback(() => {
            m(), l();
          }, [m, l]),
          E = s.useCallback(
            (e, t) => {
              a({ videoID: e, align: t }), g();
            },
            [a, g],
          ),
          { sizeStr: h, alignStr: _ } = (0, Ee.i1)(n);
        return s.createElement(
          s.Fragment,
          null,
          c &&
            s.createElement(ve, {
              videoID: t,
              align: n,
              bEditing: !0,
              hideModal: g,
              onSave: E,
            }),
          s.createElement(
            "div",
            {
              className: (0, oe.A)(
                ie.PreviewYoutubeEditor,
                h,
                _,
                he.PreviewYouTubeVideo,
                o && ie.Selected,
              ),
              onMouseEnter: u,
              onMouseLeave: p,
            },
            r &&
              s.createElement(
                "div",
                { className: ie.EditHover, onClick: d },
                (0, T.we)("#Button_Edit"),
              ),
            o && s.createElement("div", { className: ie.SelectionOverlay }),
            s.createElement("img", {
              src: `https://img.youtube.com/vi/${t}/0.jpg`,
            }),
          ),
        );
      }
      function ve(e) {
        const {
            videoID: t = "",
            align: n = "",
            bEditing: o = !1,
            hideModal: a,
            onSave: l,
          } = e,
          [r, i] = s.useState(n || Ee.V2.left),
          [c, d] = s.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [m, u] = s.useState(void 0),
          p = s.useCallback(() => {
            const { strVideoID: e } = (0, ge.XU)(c);
            return (
              e ? l(e, r) : u((0, T.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [c, r, l]),
          g = s.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return s.createElement(
          _e.mt,
          { active: !0, onDismiss: a, className: ie.PreviewYoutubeEditorModal },
          s.createElement(
            "form",
            { onSubmit: p },
            s.createElement(
              w.Y9,
              null,
              (0, T.we)("#EventEditor_InsertYouTube"),
            ),
            m && s.createElement("div", { className: ie.Error }, m),
            s.createElement(
              w.G5,
              null,
              s.createElement(
                w.lr,
                null,
                (0, T.we)("#EventEditor_InsertYouTube_URL"),
              ),
              s.createElement(w.pd, {
                placeholder: (0, T.we)("#EventEditor_InsertYouTube_Placholder"),
                value: c,
                ref: g,
                onChange: (e) => d(e.currentTarget.value),
              }),
            ),
            s.createElement(
              w.G5,
              null,
              s.createElement(
                w.lr,
                null,
                (0, T.we)("#EventEditor_InsertYouTube_Position"),
              ),
              s.createElement(w.Od, {
                checked: r == Ee.V2.left,
                onChange: (e) => e && i(Ee.V2.left),
                label: (0, T.we)("#EventEditor_InsertYouTube_Left"),
              }),
              s.createElement(w.Od, {
                checked: r == Ee.V2.right,
                onChange: (e) => e && i(Ee.V2.right),
                label: (0, T.we)("#EventEditor_InsertYouTube_Right"),
              }),
              s.createElement(w.Od, {
                checked: r == Ee.V2.full,
                onChange: (e) => e && i(Ee.V2.full),
                label: (0, T.we)("#EventEditor_InsertYouTube_Full"),
              }),
              s.createElement(w.Od, {
                checked: r == Ee.V2.summary,
                onChange: (e) => e && i(Ee.V2.summary),
                label: (0, T.we)("#EventEditor_InsertYouTube_Summary"),
              }),
            ),
            s.createElement(
              w.wi,
              null,
              s.createElement(w.CB, {
                onCancel: a,
                strOKText: o
                  ? (0, T.we)("#Button_Save")
                  : (0, T.we)("#EventEditor_InsertYouTube"),
              }),
            ),
          ),
        );
      }
      var be = n(79570);
      var we = n(44483),
        Ce = n(25918),
        Me = n(19675),
        Se = n(69001),
        Ie = n(65946),
        ke = n(63556),
        De = n(44165),
        Pe = n(95695),
        ye = n(99637),
        Te = n(26408),
        Ge = n(62490),
        Ue = n(91675),
        Ae = n(14771);
      function Be(e) {
        const { hideModal: t, fnUpdateSession: n } = e,
          [o, a] = (0, s.useState)(() => Le(!0, null)),
          [l, r] = (0, s.useState)(() => Fe(!0, null));
        return s.createElement(
          I.E,
          { active: !0 },
          s.createElement(
            D.o0,
            {
              strTitle: (0, T.we)("#MeetSteam_create_title"),
              onOK: () => n(o, l),
              closeModal: () => {
                r(Fe(!0, null)), a(Le(!0, null)), t();
              },
            },
            s.createElement(Oe, { group: o, fnSetGroup: a }),
            s.createElement(xe, { session: l, fnSetSession: r }),
          ),
        );
      }
      function Ne(e) {
        const { hideModal: t, groupInput: n, fnUpdateGroupSession: o } = e,
          [a, l] = (0, s.useState)(() => Le(!1, n));
        return s.createElement(
          I.E,
          { active: !0 },
          s.createElement(
            D.o0,
            {
              strTitle: (0, T.we)("#MeetSteam_edit_title"),
              onOK: () => {
                o(a), t();
              },
              onCancel: () => {
                l(Le(!1, n)), t();
              },
            },
            s.createElement(Oe, { group: a, fnSetGroup: l }),
          ),
        );
      }
      function Re(e) {
        const {
            bCreate: t,
            hideModal: n,
            sessionInput: o,
            fnUpdateSession: a,
          } = e,
          [l, r] = (0, s.useState)(() => Fe(t, o));
        return s.createElement(
          I.E,
          { active: !0 },
          s.createElement(
            D.o0,
            {
              strTitle: (0, T.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                a(l), n();
              },
              onCancel: () => {
                r(Fe(t, o)), n();
              },
            },
            s.createElement(xe, { session: l, fnSetSession: r }),
          ),
        );
      }
      function Oe(e) {
        const { group: t, fnSetGroup: n } = e,
          o = (0, ke.E)();
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(w.pd, {
            type: "text",
            label: (0, T.we)("#MeetSteam_edit_session_name"),
            value: T.NT.Get(t.localized_session_title, o),
            onChange: (e) => {
              const a = { ...t };
              (a.localized_session_title = T.NT.Set(
                a.localized_session_title,
                o,
                e.currentTarget.value,
              )),
                n(a);
            },
          }),
          s.createElement(w.pd, {
            type: "text",
            label: (0, T.we)("#MeetSteam_edit_session_desc"),
            value: T.NT.Get(t.localized_session_description, o),
            onChange: (e) => {
              const a = { ...t };
              (a.localized_session_description = T.NT.Set(
                a.localized_session_description,
                o,
                e.currentTarget.value,
              )),
                n(a);
            },
          }),
        );
      }
      function xe(e) {
        const { session: t, fnSetSession: n } = e,
          [o, a, l, r] = (0, Ie.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.max_capacity,
            t.max_per_team,
          ]),
          i = [];
        for (let e = 0; e < 4; ++e) i.push({ data: e, label: e });
        const c = Math.max(0, Math.floor((a - o) / 60));
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "div",
            { className: Pe.EventEditorTextTitle },
            (0, T.we)("#MeetSteam_edit_date"),
            s.createElement(Te.o, {
              tooltip: (0, T.we)("#MeetSteam_edit_date_ttip"),
            }),
          ),
          s.createElement(ye.K, {
            strDescription: (0, T.we)("#MeetSteam_edit_start"),
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => o,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + Ae.Kp.PerMinute * c }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          s.createElement(w.pd, {
            type: "number",
            min: 0,
            label: (0, T.we)("#MeetSteam_edit_duration"),
            onChange: (e) => {
              const o = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + Ae.Kp.PerMinute * o });
            },
            value: c,
          }),
          s.createElement(
            "div",
            null,
            (0, T.we)("#MeetSteam_edit_end"),
            ": ",
            (0, Ue.KC)(a),
            " ",
          ),
          s.createElement("br", null),
          s.createElement("br", null),
          s.createElement(w.pd, {
            type: "number",
            value: t.max_capacity,
            label: (0, T.we)("#MeetSteam_edit_max_capacity"),
            min: 1,
            onChange: (e) =>
              n({ ...t, max_capacity: Number.parseInt(e.currentTarget.value) }),
          }),
          s.createElement(w.m, {
            label: (0, T.we)("#MeetSteam_edit_team"),
            tooltip: (0, T.we)("#MeetSteam_edit_team_ttip"),
            rgOptions: i,
            selectedOption: t.max_per_team,
            onChange: (e) => n({ ...t, max_per_team: e.data }),
          }),
        );
      }
      function Le(e, t) {
        if (e) {
          const e = Ce.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, Ge.$Y)([], 31, null),
            localized_session_description: (0, Ge.$Y)([], 31, null),
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
      function Fe(e, t) {
        if (e) {
          const e = De.HD.GetTimeNowWithOverride(),
            t = Ce.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            n =
              null == t ? void 0 : t.reduce((e, t) => e.concat(t.sessions), []);
          let o = 0;
          do {
            o = Math.floor(1e4 + 9e4 * Math.random());
          } while (n && n.findIndex((e) => e.id == o) >= 0);
          const a = 3600 * Math.ceil(e / 3600);
          return {
            id: o,
            rtime_start: a + Ae.Kp.PerDay,
            rtime_end: a + Ae.Kp.PerDay + Ae.Kp.PerHour,
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
      var Ve = n(1397),
        $e = n.n(Ve);
      function Ye(e) {
        const t = Ce.mh.GetEditModel();
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
      function He(e) {
        const t = Ce.mh.GetEditModel();
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
      function Qe(e) {
        const { focusView: t, removeNode: n, group_id: o } = e,
          a = Ce.mh.GetEditModel(),
          l = (0, Ie.q3)(() => {
            var e;
            return null ===
              (e = a.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == o);
          }),
          [r, i, c] = (0, H.uD)(),
          d = s.useCallback(() => {
            t(), c();
          }, [t, c]),
          [m, u, p] = (0, H.uD)(),
          g = s.useCallback(() => {
            t(), p();
          }, [t, p]);
        return l && a.GetClanAccountID() == (0, Me.H7)()
          ? s.createElement(
              "div",
              { className: $e().EditorCtn },
              s.createElement(je, { groupData: l, focusView: t }),
              s.createElement(
                "div",
                { className: $e().controls },
                s.createElement(
                  Y.ff,
                  { onClick: i, tooltip: (0, T.we)("#Button_Edit") },
                  s.createElement(M.ffu, null),
                ),
                s.createElement(
                  Y.ff,
                  { onClick: u, tooltip: (0, T.we)("#Button_Delete") },
                  s.createElement(M.sED, null),
                ),
              ),
              r &&
                s.createElement(Ne, {
                  hideModal: d,
                  groupInput: l,
                  fnUpdateGroupSession: (e) => {
                    const { groupIndex: t } = He(e.group_id),
                      n = Ce.mh.GetEditModel();
                    (n.GetEventModel().jsondata.meet_steam_groups[t] = e),
                      n.SetDirty(Se.IQ.description);
                  },
                }),
              m &&
                s.createElement(
                  I.E,
                  { active: !0 },
                  s.createElement(D.o0, {
                    strTitle: (0, T.we)("#Button_Delete"),
                    strDescription: (0, T.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { groupIndex: e } = He(l.group_id),
                        t = Ce.mh.GetEditModel(),
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
          : s.createElement(
              "div",
              null,
              "Error: Cannot edit meet steam session group",
            );
      }
      function je(e) {
        const { groupData: t, focusView: n } = e,
          o = (0, Ie.q3)(() => t.sessions || []),
          [a, l, r] = (0, H.uD)(),
          i = s.useCallback(() => {
            n(), r();
          }, [n, r]);
        return t
          ? s.createElement(
              Me.jr,
              { groupData: t },
              o.map((e, a) =>
                s.createElement(ze, {
                  key: "timecol_" + t.group_id + "_" + e.id,
                  focusView: n,
                  sessionID: e.id,
                  bShowOR: a + 1 < o.length,
                }),
              ),
              s.createElement(
                Y.ff,
                { onClick: l, tooltip: (0, T.we)("#MeetSteam_add") },
                s.createElement(M.OMN, null),
              ),
              a &&
                s.createElement(Re, {
                  bCreate: !0,
                  hideModal: i,
                  fnUpdateSession: (e) => {
                    const n = Ce.mh.GetEditModel(),
                      o = [...t.sessions, e];
                    o.sort((e, t) => e.rtime_start - t.rtime_start),
                      (t.sessions = o),
                      n.SetDirty(Se.IQ.description);
                  },
                }),
            )
          : null;
      }
      function ze(e) {
        const { sessionID: t, bShowOR: n, focusView: o } = e,
          [a, l] = (0, H.OP)(),
          r = (0, Ie.q3)(() => {
            const { groupIndex: e, sessionIndex: n } = Ye(t);
            return Ce.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[n];
          }),
          [i, c, d] = (0, H.uD)(),
          m = s.useCallback(() => {
            o(), d();
          }, [o, d]),
          [u, p, g] = (0, H.uD)(),
          E = s.useCallback(() => {
            o(), g();
          }, [o, g]);
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "div",
            { className: $e().Column, ...l },
            s.createElement(Me.Tn, { sessionData: r }),
            Boolean(a) &&
              s.createElement(
                "div",
                { className: $e().controls },
                s.createElement(
                  Y.ff,
                  { onClick: c, tooltip: (0, T.we)("#Button_Edit") },
                  s.createElement(M.ffu, null),
                ),
                s.createElement(
                  Y.ff,
                  { onClick: p, tooltip: (0, T.we)("#Button_Delete") },
                  s.createElement(M.sED, null),
                ),
              ),
            i &&
              s.createElement(Re, {
                bCreate: !1,
                hideModal: m,
                sessionInput: r,
                fnUpdateSession: (e) => {
                  const n = Ce.mh.GetEditModel(),
                    { groupIndex: o, sessionIndex: a } = Ye(t),
                    l = [
                      ...n.GetEventModel().jsondata.meet_steam_groups[o]
                        .sessions,
                    ];
                  (l[a] = e),
                    l.sort((e, t) => e.rtime_start - t.rtime_start),
                    (n.GetEventModel().jsondata.meet_steam_groups[o].sessions =
                      l),
                    n.SetDirty(Se.IQ.description);
                },
              }),
            u &&
              s.createElement(
                I.E,
                { active: !0 },
                s.createElement(D.o0, {
                  strTitle: (0, T.we)("#Button_Delete"),
                  strDescription: (0, T.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = Ce.mh.GetEditModel(),
                      { groupIndex: n, sessionIndex: o } = Ye(t),
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
          n && s.createElement(Me.w3, null),
        );
      }
      const Ke = s.memo(function (e) {
        const {
          view: t,
          schema: n,
          refUpdateToolbar: o,
          className: a,
          bSpellcheckEnabled: l,
          setSpellcheckEnabled: r,
        } = e;
        return s.createElement(
          Y.bI,
          { refUpdateToolbar: o, view: t },
          s.createElement(
            Y.Ez,
            { className: e.className },
            s.createElement(be.MV, null),
            s.createElement(Y.XQ, null),
            s.createElement(be.Km, { schema: n }),
            s.createElement(Y.XQ, null),
            n.marks.link && s.createElement(be.z9, { schema: n }),
            s.createElement(Y.XQ, null),
            s.createElement(be.Hz, { schema: n }),
            s.createElement(be.WJ, { schema: n, levels: 3 }),
            s.createElement(Y.XQ, null),
            n.nodes.previewyoutube && s.createElement(qe, { schema: n }),
            s.createElement(Y.XQ, null),
            !1,
            s.createElement(be.C$, {
              schema: n,
              showIndentButtonsAsNeeded: !0,
            }),
            s.createElement(Y.hK, null),
            r &&
              s.createElement(be.Nt, {
                bSpellcheckEnabled: l,
                setSpellcheckEnabled: r,
              }),
            n.nodes.meetsteamsessiongroup && s.createElement(Xe, { schema: n }),
          ),
          !1,
        );
      });
      function qe(e) {
        const { schema: t } = e,
          { callbacks: n, view: o } = (0, Y.wU)(),
          [a, l, r] = (0, U.uD)(),
          i = s.useCallback(() => {
            r(), o.focus();
          }, [r, o]),
          c = s.useCallback(
            (e, n) => {
              !(function (e, t, n, o = Ee.V2.left) {
                e.dispatch(
                  e.state.tr.insert(
                    e.state.selection.to,
                    t.create({ videoID: n, align: o }),
                  ),
                );
              })(o, t.nodes.previewyoutube, e, n),
                i();
            },
            [t, o, i],
          );
        return s.createElement(
          s.Fragment,
          null,
          a && s.createElement(ve, { hideModal: i, onSave: c }),
          s.createElement(
            Y.ff,
            { tooltip: "#EventEditor_InsertYouTube", onClick: l, toggled: a },
            s.createElement("img", { src: we.A }),
          ),
        );
      }
      function Xe(e) {
        const { schema: t } = e,
          { callbacks: n, view: o } = (0, Y.wU)(),
          a = Ce.mh.GetEditModel(),
          [l, r, i] = (0, U.uD)(),
          c = s.useCallback(() => {
            i(), o.focus();
          }, [i, o]),
          d = s.useCallback(
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
        if ((null == a ? void 0 : a.GetClanAccountID()) == (0, Me.H7)())
          return s.createElement(
            s.Fragment,
            null,
            l && s.createElement(Be, { hideModal: c, fnUpdateSession: d }),
            s.createElement(
              Y.ff,
              { tooltip: "#MeetSteam_add_group_ttip", onClick: r, toggled: l },
              s.createElement("img", { src: we.A }),
            ),
          );
      }
      var We = n(75844),
        Ze = n(90316),
        Je = n.n(Ze),
        et = n(43775);
      const tt = (0, We.PA)(function (e) {
          const { editModel: t } = e,
            n = t.GetEventModel().loadedAllLanguages,
            o = t.GetCurEditLanguage();
          return n
            ? s.createElement(nt, { ...e, eCurrentEditLanguage: o })
            : null;
        }),
        nt = s.memo(function (e) {
          const {
              editModel: t,
              refOnInsertImage: n,
              limitBBCode: a,
              eCurrentEditLanguage: l,
            } = e,
            [r, i] = s.useState(),
            c = s.useMemo(() => {
              return (e = a), new te.W(de, e);
              var e;
            }, [a]),
            d = s.useMemo(() => t.GetDescription(l) || "", [t, l]),
            m = s.useRef(void 0),
            g = s.useCallback((e) => t.SetDescription(l, e), [t, l]),
            { onUpdate: E, fnCommitPendingSave: f } = (0, o.i)(c, g, {
              msAutosaveTimeout: 1e3,
              refOnChangeCallback: m,
            }),
            { nodes: v, marks: b } = c.pm_schema,
            w = (function (e, t) {
              const n = s.useCallback(
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
            (function (e, t, n, o) {
              s.useEffect(() => {
                if (!o || !t) return;
                const a = (e, a) => {
                  let l;
                  switch (a) {
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
                      (0, p.z)(a, `Unhandled insert type ${a}`);
                  }
                  if (l) {
                    const e = o.state.tr;
                    e.selection.replaceWith(e, l), o.dispatch(e);
                  }
                };
                return (
                  (e.current = a),
                  () => {
                    e.current == a && (e.current = void 0);
                  }
                );
              }, [e, t, n, o]);
            })(n, v.image, b.link, r),
            s.createElement(
              W,
              { editModel: t, imageNode: v.image },
              s.createElement(
                "div",
                { className: Je().EventDetailsBody },
                s.createElement(Ke, {
                  view: r,
                  schema: c.pm_schema,
                  refUpdateToolbar: m,
                  className: Je().ToolBar,
                }),
                s.createElement(
                  "div",
                  { className: Je().EventDescriptionArea },
                  s.createElement(
                    et.l,
                    {
                      schemaConfig: c,
                      className: Je().EventDescriptionRichField,
                      bbcode: d,
                      onUpdate: E,
                      refView: i,
                      panelProps: { onBlur: f },
                    },
                    s.createElement(u.W, {
                      linkMarkType: b.link,
                      onURLPasted: w,
                      schema: c.pm_schema,
                    }),
                    v.image && s.createElement(N, { nodeType: v.image }),
                    s.createElement(ot, {
                      schema: c.pm_schema,
                      clanSteamID: t.GetClanSteamID(),
                    }),
                  ),
                ),
              ),
            )
          );
        });
      function ot(e) {
        const { schema: t, clanSteamID: n } = e,
          o = s.useMemo(
            () =>
              (function (e) {
                return pe.sM({ rules: [pe.tG(/^>$/, e.nodes.quote)] });
              })(t),
            [t],
          );
        (0, a.c$)(o);
        const l = s.useMemo(
          () => [
            t.nodes.previewyoutube && {
              type: t.nodes.previewyoutube,
              component: fe,
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
              component: Qe,
              readProps: (e) => ({ group_id: e.attrs.group_id }),
            },
          ],
          [t, n],
        );
        return s.createElement(c, { specs: l });
      }
    },
  },
]);

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
        ClanImageModalContent: "SsgHukHcE1jf7p3W6Ta8g",
        ClanImageModalMode: "_1RAzAQViGO8A_wCFzSUStH",
        Active: "_1qsUls0lc9uJ_RarLA3dcG",
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
        EventDescriptionField: "_3WxO3z6DufUbRu-axJjjqp",
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
      n.r(t), n.d(t, { default: () => st });
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
              setAttrs: (e, t) => {
                n.dispatch(n.state.tr.setNodeMarkup(a(), t, e));
              },
              removeNode: () => {
                n.dispatch(n.state.tr.delete(a(), a() + 1));
              },
              focusView: () => {
                window.setTimeout(() => n.focus(), 1);
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
        v = n(28954),
        f = n(27666),
        b = n(71138),
        w = n(33737),
        I = n(2805),
        C = n(36509),
        S = n(4869),
        M = n(83882),
        k = n(29287);
      var D = n(78395),
        y = n(21869),
        T = n(22797),
        P = n(6144),
        A = n(61859),
        N = n(27650),
        G = n(64753),
        U = n(73309);
      function B(e) {
        const {
            children: t,
            ProcessFileUpload: n,
            FetchImageURL: a,
            bAllowImageHotLinking: o = !1,
          } = e,
          [l] = i.useState(() => ({ manager: new V(n, a, o) })),
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
          n = L(),
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
            { className: U.FileUploadPlaceholder },
            i.createElement(
              "div",
              { className: U.Throbber },
              i.createElement(T.t, { size: "medium", position: "center" }),
            ),
            i.createElement("img", { src: l, className: U.PendingImage }),
          ),
          t,
        );
      }
      class V {
        constructor(e, t, n) {
          (this.m_errors = (0, P.Jc)([])),
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
      function L() {
        return i.useContext(F).manager;
      }
      const z = i.memo(function (e) {
        const { manager: t } = e,
          n = (0, G.gc)(t.GetErrors());
        return n.length
          ? i.createElement(
              y.E,
              { active: !0 },
              i.createElement(D.o0, {
                bAlertDialog: !0,
                strTitle: (0, A.we)("#Error_Generic"),
                strDescription: n.map((e, t) =>
                  i.createElement("div", { key: t }, e),
                ),
                strOKButtonText: (0, A.we)("#Button_OK"),
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
          [o, l] = (0, N.hk)(a);
        return i.createElement(
          "div",
          { ...o, className: U.FileUploadDragDrop },
          l && !1,
          n,
        );
      }
      var Y = n(30175),
        K = n(73745),
        $ = n(30470),
        j = n(21134),
        Q = n(53418);
      function q(e) {
        const {
            nodeAttrs: t,
            editModel: n,
            args: a,
            imageNodeType: o,
            videoNodeType: l,
            clanSteamID: r,
            setAttrs: s,
            focusView: c,
            removeNode: d,
          } = e,
          [m, u, p] = (0, K.uD)(),
          [g, h] = (0, K.OP)();
        let v;
        const { type: f, attrs: b } = t;
        "image" == f
          ? (v = i.createElement(Q.B, {
              strTag: "img",
              args: a,
              event: n.GetEventModel(),
              showErrorInfo: !0,
            }))
          : "video" == f
            ? (v = i.createElement(Q.B, {
                key: `${b.mp4}_${b.webm}`,
                strTag: "video",
                args: a,
                event: n.GetEventModel(),
                showErrorInfo: !0,
              }))
            : (0, E.z)(f, "unhandled type: " + f);
        const w = i.useCallback(() => {
          c(), p();
        }, [c, p]);
        return i.createElement(
          i.Fragment,
          null,
          m &&
            i.createElement(X, {
              bIsEdit: !0,
              nodeAttrs: t,
              hideModal: w,
              imageNodeType: o,
              videoNodeType: l,
              clanSteamID: r,
              setAttrs: s,
            }),
          i.createElement(
            "span",
            { className: _()(j.ClanImageContainer, g && j.Hovered), ...h },
            v,
            i.createElement(
              "span",
              { className: j.ImageControls },
              i.createElement(
                Y.ff,
                {
                  onClick: u,
                  tooltip: (0, A.we)("#EventEditor_ReplaceImage_Title"),
                },
                i.createElement(S.ffu, null),
              ),
              i.createElement(
                Y.ff,
                {
                  onClick: d,
                  tooltip: (0, A.we)("#StoreAdmin_GameDescription_RemoveImage"),
                },
                i.createElement(S.sED, null),
              ),
            ),
          ),
        );
      }
      function X(e) {
        const {
            bIsEdit: t = !1,
            nodeAttrs: n,
            hideModal: a,
            clanSteamID: o,
            setAttrs: l,
            imageNodeType: r,
            videoNodeType: s,
          } = e,
          { type: c, attrs: d } = n,
          m = i.useMemo(() => {
            let e;
            if (
              ("image" == c
                ? (e = d.src)
                : "video" == c && (e = d.mp4 || d.webm),
              e)
            ) {
              const [t] = (0, f.s9)(e);
              return t && b.pU.GetClanImageByImageHash(o, t);
            }
          }, [o, c, d]),
          [u, p] = i.useState(m ? "uploaded" : "hotlink"),
          g = i.useCallback(
            (e) => {
              l({ src: e }, r), a();
            },
            [l, a, r],
          ),
          h = i.useCallback(
            (e) => {
              l({ ...d, ...e }, s), a();
            },
            [d, l, a, s],
          );
        let v,
          I = null;
        if ("image" == c)
          (I = i.createElement(W, {
            active: "hotlink" == u,
            bIsEdit: t,
            hideModal: a,
            onImageSelected: g,
            src: d.src,
          })),
            (v = t
              ? (0, A.we)("#EventEditor_ReplaceImage_Title")
              : (0, A.we)("#EventEditor_InsertImage_Title"));
        else {
          if ("video" != c) return (0, E.z)(c, "Unhandled type"), null;
          (I = i.createElement(Z, {
            active: "hotlink" == u,
            bIsEdit: t,
            hideModal: a,
            attrs: d,
            setAttrs: l,
          })),
            (v = (0, A.we)("#EventEditor_EditVideo_Title"));
        }
        return i.createElement(
          M.mt,
          { active: !0, onDismiss: a, className: j.ClanImageModalContent },
          i.createElement(w.Y9, null, v),
          i.createElement(
            w.zW,
            { value: u, onChange: (e) => p(e) },
            i.createElement(w.a, { value: "uploaded" }, "Uploaded"),
            i.createElement(w.a, { value: "hotlink" }, "Enter URL"),
          ),
          i.createElement(
            "div",
            {
              className: _()(j.ClanImageModalMode, "uploaded" == u && j.Active),
            },
            i.createElement(J, {
              bIsEdit: t,
              hideModal: a,
              onImageSelected: g,
              onVideoSelected: s && h,
              clanSteamID: o,
              selectedImage: m,
            }),
          ),
          i.createElement(
            "div",
            {
              className: _()(j.ClanImageModalMode, "hotlink" == u && j.Active),
            },
            I,
          ),
        );
      }
      function W(e) {
        const {
            active: t,
            bIsEdit: n,
            hideModal: a,
            onImageSelected: o,
            src: l,
          } = e,
          [r, s] = i.useState(l),
          c = i.useCallback((e) => s(e.currentTarget.value), []),
          d = n
            ? (0, A.we)("#EventEditor_ReplaceImage_Title")
            : (0, A.we)("#EventEditor_InsertImage_Title"),
          m = i.useRef();
        return (
          i.useEffect(() => {
            t && m.current.Focus();
          }, [t]),
          i.createElement(
            w.lV,
            { onSubmit: () => o(r) },
            i.createElement(
              w.nB,
              null,
              i.createElement(w.pd, {
                ref: m,
                value: r,
                onChange: c,
                label: (0, A.we)("#EventEditor_InsertImage_URL"),
              }),
            ),
            i.createElement(w.CB, {
              onCancel: a,
              strOKText: d,
              bOKDisabled: !r || r == l,
            }),
          )
        );
      }
      function Z(e) {
        const {
            active: t,
            bIsEdit: n,
            hideModal: a,
            attrs: o,
            setAttrs: l,
          } = e,
          [r, s] = i.useState(o.mp4),
          [c, d] = i.useState(o.webm),
          [m, u] = i.useState(o.poster),
          [p, E] = i.useState(!!o.autoplay),
          [g, _] = i.useState(!!o.controls),
          h = i.useRef();
        i.useEffect(() => {
          t && h.current.Focus();
        }, [t]);
        return i.createElement(
          w.lV,
          {
            onSubmit: (e) => {
              l({
                ...o,
                mp4: r || void 0,
                webm: c || void 0,
                poster: m || void 0,
                autoplay: p,
                controls: g,
              }),
                a();
            },
          },
          i.createElement(
            w.nB,
            null,
            i.createElement(w.pd, {
              ref: h,
              value: r,
              onChange: (e) => s(e.currentTarget.value),
              label: (0, A.we)("#EventEditor_InsertVideo_InputMP4"),
            }),
            i.createElement(w.pd, {
              value: c,
              onChange: (e) => d(e.currentTarget.value),
              label: (0, A.we)("#EventEditor_InsertVideo_InputWebM"),
            }),
            i.createElement(w.pd, {
              value: m,
              onChange: (e) => u(e.currentTarget.value),
              label: (0, A.we)("#EventEditor_InsertVideo_InputPoster"),
            }),
            i.createElement(w.Yh, {
              checked: p,
              onChange: E,
              label: (0, A.we)("#EventEditor_InsertVideo_InputAutoplay"),
            }),
            i.createElement(w.Yh, {
              checked: g,
              onChange: _,
              label: (0, A.we)("#EventEditor_InsertVideo_InputShowControls"),
            }),
          ),
          i.createElement(w.CB, {
            onCancel: a,
            strOKText: (0, A.we)("#EventEditor_EditVideo_Title"),
            bOKDisabled: !r && !c,
          }),
        );
      }
      function J(e) {
        const {
            bIsEdit: t,
            hideModal: n,
            onImageSelected: a,
            onVideoSelected: o,
            clanSteamID: l,
          } = e,
          [r, s] = i.useState(null),
          [c, d] = i.useState(e.selectedImage),
          m = t
            ? (0, A.we)("#EventEditor_ReplaceImage_Title")
            : (0, A.we)("#EventEditor_InsertImage_Title"),
          u = i.useCallback(
            (e) => {
              switch (e.file_type) {
                case 4:
                  o && o({ mp4: (0, h.fw)(e) });
                  break;
                case 5:
                  o && o({ webm: (0, h.fw)(e) });
                  break;
                default:
                  a((0, h.fw)(e));
              }
            },
            [a, o],
          ),
          p = i.useCallback(
            (e, t) => {
              d(e), t && u(e);
            },
            [u],
          );
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            w.lV,
            { onSubmit: () => c && u(c) },
            i.createElement(C.g, { fnSetImageSearch: s }),
            i.createElement(I.ge, {
              clanAccountID: l.GetAccountID(),
              fileNameSearch: r,
              onImageSelected: p,
              selectedItem: c,
            }),
            i.createElement(w.CB, {
              onCancel: n,
              strOKText: m,
              bOKDisabled: !c || c == e.selectedImage,
            }),
          ),
        );
      }
      function ee(e) {
        const { editModel: t, imageNode: n, videoNode: a, children: o } = e,
          l = i.useCallback(
            async (e) => {
              const o = t.GetClanSteamID(),
                l = new v.V(o);
              if (!(await l.AddImage(e, t.GetCurEditLanguage(), null)))
                throw "Error processing image upload";
              const r = await l.UploadAllImages(
                t.GetIncludedRealmList(),
                t.GetCurEditLanguage(),
              );
              if (!r || 1 != Object.values(r).length)
                throw "Error uploading image";
              const s = Object.values(r)[0];
              if (!s.success) throw s.message;
              const i = te(b.pU.GetClanImageByImageHash(o, s.image_hash), n, a);
              return (
                i.type == n && (await (0, N.DB)((0, f.v6)(i.attrs.src))), i
              );
            },
            [t, n, a],
          );
        return n
          ? i.createElement(
              B,
              { ProcessFileUpload: l, bAllowImageHotLinking: !0 },
              o,
            )
          : o;
      }
      function te(e, t, n) {
        const a = (0, h.fw)(e);
        switch (e.file_type) {
          case 4:
            if (!n) throw "Video unsupported";
            return n.create({ mp4: a });
          case 5:
            if (!n) throw "Video unsupported";
            return n.create({ webm: a });
          default:
            return t.create({ src: a });
        }
      }
      var ne = n(33645),
        ae = n.n(ne),
        oe = n(55608),
        le = n(79497),
        re = n(9024),
        se = n(52038);
      const ie = {
          ...oe.DQ.nodes,
          horizontal_rule: {
            group: "block",
            parseDOM: [{ tag: "hr" }],
            toDOM: (0, oe.BM)("hr", ae().HR),
            bbCode: { tag: "hr" },
          },
          quote: {
            parseDOM: [{ tag: "blockquote" }],
            content: "block+",
            group: "block",
            defining: !0,
            toDOM: (0, oe.BM)("blockquote", ae().BlockQuote),
            bbCode: { tag: "quote" },
          },
          pullquote: {
            content: "block+",
            group: "block",
            toDOM: (0, oe.BM)("div", ae().PullQuote),
            bbCode: { tag: "pullquote" },
          },
          smalltext: {
            content: "inline*",
            group: "block",
            toDOM: (0, oe.BM)("div", (0, se.A)(ae().SmallText, "BB_SmallText")),
            bbCode: { tag: "smalltext" },
          },
          ...re.X,
        },
        ce = {
          ...oe.DQ.marks,
          spoiler: {
            toDOM: (0, oe.BM)(
              "span",
              (0, se.A)(ae().Spoiler, ae().Revealed),
              (0, oe.ce)("span", (0, se.A)(ae().SpoilerText)),
            ),
            bbCode: { tag: "spoiler" },
          },
        };
      var de = n(6878),
        me = n.n(de),
        ue = n(63226),
        pe = n.n(ue);
      const Ee = {
        nodes: {
          ...ie,
          heading: {
            ...oe.DQ.nodes.heading,
            parseDOM: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              attrs: { level: e },
            })),
            toDOM: (e) => [
              "h" + e.attrs.level,
              {
                class: (0, se.A)(
                  `BB_Header${e.attrs.level}`,
                  ae()[`Header${e.attrs.level}`],
                  me()[`Header${e.attrs.level}`],
                ),
              },
              0,
            ],
            bbCode: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              BBArgsToAttrs: (t) => ({ ...ge(t), level: e }),
              AttrsToBBArgs: (e) => ({ ..._e(e), tag: `h${e.level}` }),
            })),
          },
          quote: {
            ...ie.quote,
            toDOM: () => [
              "blockquote",
              { class: (0, se.A)(ae().BlockQuote, me().BlockQuote) },
              0,
            ],
          },
          previewyoutube: {
            attrs: { videoID: { default: "" }, align: { default: "" } },
            group: "block",
            atom: !0,
            draggable: !0,
            toDOM: () => ["div", { class: pe().EditorYoutubeLoading }],
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
            toDOM: () => ["div", { class: pe().EditorYoutubeLoading }],
            bbCode: {
              tag: "meetsteamsessiongroup",
              BBArgsToAttrs: (e) => ({ group_id: Number(e.group_id) }),
              AttrsToBBArgs: (e) => ({ args: { group_id: "" + e.group_id } }),
            },
          },
        },
        marks: { ...ce },
      };
      function ge(e) {
        return e.id ? { id: e.id.replace(/^#/, "") } : {};
      }
      function _e(e) {
        return e.id ? { args: { id: e.id } } : {};
      }
      var he = n(79216);
      var ve = n(70995),
        fe = n(74410),
        be = n(73662),
        we = n(9154);
      function Ie(e) {
        const {
            videoID: t,
            align: n,
            selected: a,
            setAttrs: o,
            focusView: l,
          } = e,
          [r, s] = i.useState(!1),
          [c, d, m] = (0, K.uD)(),
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
          { sizeStr: _, alignStr: h } = (0, fe.i1)(n);
        return i.createElement(
          i.Fragment,
          null,
          c &&
            i.createElement(Ce, {
              videoID: t,
              align: n,
              bEditing: !0,
              hideModal: E,
              onSave: g,
            }),
          i.createElement(
            "div",
            {
              className: (0, se.A)(
                ue.PreviewYoutubeEditor,
                _,
                h,
                be.PreviewYouTubeVideo,
                a && ue.Selected,
              ),
              onMouseEnter: u,
              onMouseLeave: p,
            },
            r &&
              i.createElement(
                "div",
                { className: ue.EditHover, onClick: d },
                (0, A.we)("#Button_Edit"),
              ),
            a && i.createElement("div", { className: ue.SelectionOverlay }),
            i.createElement("img", {
              src: `https://img.youtube.com/vi/${t}/0.jpg`,
            }),
          ),
        );
      }
      function Ce(e) {
        const {
            videoID: t = "",
            align: n = "",
            bEditing: a = !1,
            hideModal: o,
            onSave: l,
          } = e,
          [r, s] = i.useState(n || fe.V2.left),
          [c, d] = i.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [m, u] = i.useState(void 0),
          p = i.useCallback(() => {
            const { strVideoID: e } = (0, ve.XU)(c);
            return (
              e ? l(e, r) : u((0, A.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [c, r, l]),
          E = i.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return i.createElement(
          we.mt,
          { active: !0, onDismiss: o, className: ue.PreviewYoutubeEditorModal },
          i.createElement(
            "form",
            { onSubmit: p },
            i.createElement(
              w.Y9,
              null,
              (0, A.we)("#EventEditor_InsertYouTube"),
            ),
            m && i.createElement("div", { className: ue.Error }, m),
            i.createElement(
              w.G5,
              null,
              i.createElement(
                w.lr,
                null,
                (0, A.we)("#EventEditor_InsertYouTube_URL"),
              ),
              i.createElement(w.pd, {
                placeholder: (0, A.we)("#EventEditor_InsertYouTube_Placholder"),
                value: c,
                ref: E,
                onChange: (e) => d(e.currentTarget.value),
              }),
            ),
            i.createElement(
              w.G5,
              null,
              i.createElement(
                w.lr,
                null,
                (0, A.we)("#EventEditor_InsertYouTube_Position"),
              ),
              i.createElement(w.Od, {
                checked: r == fe.V2.left,
                onChange: (e) => e && s(fe.V2.left),
                label: (0, A.we)("#EventEditor_InsertYouTube_Left"),
              }),
              i.createElement(w.Od, {
                checked: r == fe.V2.right,
                onChange: (e) => e && s(fe.V2.right),
                label: (0, A.we)("#EventEditor_InsertYouTube_Right"),
              }),
              i.createElement(w.Od, {
                checked: r == fe.V2.full,
                onChange: (e) => e && s(fe.V2.full),
                label: (0, A.we)("#EventEditor_InsertYouTube_Full"),
              }),
              i.createElement(w.Od, {
                checked: r == fe.V2.summary,
                onChange: (e) => e && s(fe.V2.summary),
                label: (0, A.we)("#EventEditor_InsertYouTube_Summary"),
              }),
            ),
            i.createElement(
              w.wi,
              null,
              i.createElement(w.CB, {
                onCancel: o,
                strOKText: a
                  ? (0, A.we)("#Button_Save")
                  : (0, A.we)("#EventEditor_InsertYouTube"),
              }),
            ),
          ),
        );
      }
      var Se = n(25918),
        Me = n(69001),
        ke = n(65946),
        De = n(19675),
        ye = n(1397),
        Te = n.n(ye),
        Pe = n(63556),
        Ae = n(44165),
        Ne = n(95695),
        Ge = n(99637),
        Ue = n(62490),
        Be = n(91675),
        Oe = n(14771),
        Re = n(87937),
        xe = n(61819);
      function Ve(e) {
        const { hideModal: t, fnUpdateSession: n } = e,
          [a, o] = (0, i.useState)(() => Ye(!0, null)),
          [l, r] = (0, i.useState)(() => Ke(!0, null)),
          [s] = (0, ke.q3)(() => [l.location_type]);
        return i.createElement(
          y.E,
          { active: !0 },
          i.createElement(
            D.o0,
            {
              strTitle: (0, A.we)("#MeetSteam_create_title"),
              onOK: () => n(a, l),
              closeModal: () => {
                r(Ke(!0, null)), o(Ye(!0, null)), t();
              },
              bOKDisabled: null == !s,
            },
            i.createElement(
              "div",
              { className: Te().DialogCtn },
              i.createElement(ze, { group: a, fnSetGroup: o }),
              i.createElement(He, { session: l, fnSetSession: r }),
            ),
          ),
        );
      }
      function Fe(e) {
        const { hideModal: t, groupInput: n, fnUpdateGroupSession: a } = e,
          [o, l] = (0, i.useState)(() => Ye(!1, n));
        return i.createElement(
          y.E,
          { active: !0 },
          i.createElement(
            D.o0,
            {
              strTitle: (0, A.we)("#MeetSteam_edit_title"),
              onOK: () => {
                a(o), t();
              },
              onCancel: () => {
                l(Ye(!1, n)), t();
              },
            },
            i.createElement(
              "div",
              { className: Te().DialogCtn },
              i.createElement(ze, { group: o, fnSetGroup: l }),
            ),
          ),
        );
      }
      function Le(e) {
        const {
            bCreate: t,
            hideModal: n,
            sessionInput: a,
            fnUpdateSession: o,
          } = e,
          [l, r] = (0, i.useState)(() => Ke(t, a)),
          [s] = (0, ke.q3)(() => [l.location_type]);
        return i.createElement(
          y.E,
          { active: !0 },
          i.createElement(
            D.o0,
            {
              strTitle: (0, A.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                o(l), n();
              },
              onCancel: () => {
                r(Ke(t, a)), n();
              },
              bOKDisabled: !s,
            },
            i.createElement(
              "div",
              { className: Te().DialogCtn },
              i.createElement(He, { session: l, fnSetSession: r }),
            ),
          ),
        );
      }
      function ze(e) {
        const { group: t, fnSetGroup: n } = e,
          a = (0, Pe.E)();
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(w.pd, {
            type: "text",
            label: (0, A.we)("#MeetSteam_edit_session_name"),
            value: A.NT.Get(t.localized_session_title, a),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_title = A.NT.Set(
                o.localized_session_title,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          i.createElement(
            w.JU,
            null,
            (0, A.we)("#MeetSteam_edit_session_desc"),
          ),
          i.createElement("textarea", {
            className: (0, se.A)(
              "DialogTextInputBase",
              Te().EventDescriptionField,
            ),
            value: A.NT.Get(t.localized_session_description, a),
            rows: 5,
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_description = A.NT.Set(
                o.localized_session_description,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
        );
      }
      function He(e) {
        const { session: t, fnSetSession: n } = e,
          [a, o, l, r, s, c] = (0, ke.q3)(() => [
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
          g = Re.unix(t.rtime_start).tz(u),
          _ = Re.unix(t.rtime_start).tz(E),
          h = _.utcOffset() - g.utcOffset(),
          v = Re.unix(t.rtime_end).tz(u),
          f = Re.unix(t.rtime_end).tz(E),
          b = f.utcOffset() - v.utcOffset();
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            { className: Ne.EventEditorTextTitle },
            (0, A.we)("#MeetSteam_edit_date_display_title"),
          ),
          i.createElement(
            "div",
            { className: Ne.EventEditorTextSubTitle },
            (0, A.we)("#MeetSteam_edit_date_display_desc"),
          ),
          i.createElement(
            w.zW,
            {
              value: s,
              onChange: (e) => {
                n({ ...t, location_type: e });
              },
            },
            i.createElement(
              w.a,
              { value: "in_person" },
              (0, A.we)("#MeetSteam_edit_date_display_in_person"),
            ),
            i.createElement(
              w.a,
              { value: "virtual" },
              (0, A.we)("#MeetSteam_edit_date_display_virtual"),
            ),
          ),
          "in_person" === s &&
            i.createElement(xe.Ay, {
              styles: { option: (e) => ({ ...e, color: "#444444" }) },
              isSearchable: !0,
              isMulti: !1,
              options: Re.tz.names().map((e) => ({ label: e, value: e })),
              defaultMenuIsOpen: !1,
              value: c ? { label: c, value: c } : { label: u, value: u },
              onChange: (e) => n({ ...t, in_person_time_zone: e.value }),
            }),
          i.createElement("br", null),
          i.createElement(Ge.K, {
            strDescription: (0, A.we)("#MeetSteam_edit_start"),
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => a,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + Oe.Kp.PerMinute * m }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          i.createElement("br", null),
          i.createElement(w.pd, {
            type: "number",
            min: 0,
            label: (0, A.we)("#MeetSteam_edit_duration"),
            onChange: (e) => {
              const a = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + Oe.Kp.PerMinute * a });
            },
            value: m,
          }),
          i.createElement(
            "div",
            null,
            (0, A.we)("#MeetSteam_edit_displayed_start"),
            ": ",
            (0, Be.P0)(_.unix() + 60 * h, !1, _.format("z")),
            " ",
          ),
          i.createElement(
            "div",
            null,
            (0, A.we)("#MeetSteam_edit_displayed_end"),
            ": ",
            (0, Be.P0)(f.unix() + 60 * b, !1, f.format("z")),
            " ",
          ),
          i.createElement("br", null),
          i.createElement("br", null),
          i.createElement(
            "div",
            { className: Te().ParticipantRow },
            i.createElement(w.pd, {
              type: "number",
              value: l,
              label: (0, A.we)("#MeetSteam_edit_max_capacity"),
              min: 1,
              onChange: (e) =>
                n({
                  ...t,
                  max_capacity: Number.parseInt(e.currentTarget.value),
                }),
            }),
            i.createElement(w.m, {
              controlled: !0,
              label: (0, A.we)("#MeetSteam_edit_team"),
              tooltip: (0, A.we)("#MeetSteam_edit_team_ttip"),
              rgOptions: d,
              selectedOption: r,
              onChange: (e) => n({ ...t, max_per_team: e.data }),
            }),
          ),
        );
      }
      function Ye(e, t) {
        if (e) {
          const e = Se.mh.GetEditModel().GetEventModel()
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
      function Ke(e, t) {
        if (e) {
          const e = Ae.HD.GetTimeNowWithOverride(),
            t = Se.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            n =
              null == t ? void 0 : t.reduce((e, t) => e.concat(t.sessions), []);
          let a = 0;
          do {
            a = Math.floor(1e4 + 9e4 * Math.random());
          } while (n && n.findIndex((e) => e.id == a) >= 0);
          const o = 3600 * Math.ceil(e / 3600);
          return {
            id: a,
            rtime_start: o + Oe.Kp.PerDay,
            rtime_end: o + Oe.Kp.PerDay + Oe.Kp.PerHour,
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
        const t = Se.mh.GetEditModel();
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
      function je(e) {
        const t = Se.mh.GetEditModel();
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
      function Qe(e) {
        const { focusView: t, removeNode: n, group_id: a } = e,
          o = Se.mh.GetEditModel(),
          l = (0, ke.q3)(() => {
            var e;
            return null ===
              (e = o.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == a);
          }),
          [r, s, c] = (0, K.uD)(),
          d = i.useCallback(() => {
            t(), c();
          }, [t, c]),
          [m, u, p] = (0, K.uD)(),
          E = i.useCallback(() => {
            t(), p();
          }, [t, p]);
        return l && o.GetClanAccountID() == (0, De.H7)()
          ? i.createElement(
              "div",
              { className: Te().EditorCtn },
              i.createElement(qe, { groupData: l, focusView: t }),
              i.createElement(
                "div",
                { className: Te().controls },
                i.createElement(
                  Y.ff,
                  { onClick: s, tooltip: (0, A.we)("#Button_Edit") },
                  i.createElement(S.ffu, null),
                ),
                i.createElement(
                  Y.ff,
                  { onClick: u, tooltip: (0, A.we)("#Button_Delete") },
                  i.createElement(S.sED, null),
                ),
              ),
              r &&
                i.createElement(Fe, {
                  hideModal: d,
                  groupInput: l,
                  fnUpdateGroupSession: (e) => {
                    const { groupIndex: t } = je(e.group_id),
                      n = Se.mh.GetEditModel();
                    (n.GetEventModel().jsondata.meet_steam_groups[t] = e),
                      n.SetDirty(Me.IQ.description);
                  },
                }),
              m &&
                i.createElement(
                  y.E,
                  { active: !0 },
                  i.createElement(D.o0, {
                    strTitle: (0, A.we)("#Button_Delete"),
                    strDescription: (0, A.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { groupIndex: e } = je(l.group_id),
                        t = Se.mh.GetEditModel(),
                        a = [...t.GetEventModel().jsondata.meet_steam_groups];
                      a.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_groups = a),
                        t.SetDirty(Me.IQ.description),
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
      function qe(e) {
        const { groupData: t, focusView: n } = e,
          a = (0, ke.q3)(() => t.sessions || []),
          [o, l, r] = (0, K.uD)(),
          s = i.useCallback(() => {
            n(), r();
          }, [n, r]);
        return t
          ? i.createElement(
              De.jr,
              { groupData: t },
              a.map((e, o) =>
                i.createElement(Xe, {
                  key: "timecol_" + t.group_id + "_" + e.id,
                  focusView: n,
                  sessionID: e.id,
                  bShowOR: o + 1 < a.length,
                }),
              ),
              i.createElement(
                Y.ff,
                {
                  className: Te().AddNew,
                  onClick: l,
                  tooltip: (0, A.we)("#MeetSteam_add"),
                },
                i.createElement(S.OMN, null),
              ),
              o &&
                i.createElement(Le, {
                  bCreate: !0,
                  hideModal: s,
                  fnUpdateSession: (e) => {
                    const n = Se.mh.GetEditModel(),
                      a = [...t.sessions, e];
                    a.sort((e, t) => e.rtime_start - t.rtime_start),
                      (t.sessions = a),
                      n.SetDirty(Me.IQ.description);
                  },
                }),
            )
          : null;
      }
      function Xe(e) {
        const { sessionID: t, bShowOR: n, focusView: a } = e,
          [o, l] = (0, K.OP)(),
          r = (0, ke.q3)(() => {
            const { groupIndex: e, sessionIndex: n } = $e(t);
            return Se.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[n];
          }),
          [s, c, d] = (0, K.uD)(),
          m = i.useCallback(() => {
            a(), d();
          }, [a, d]),
          [u, p, E] = (0, K.uD)(),
          g = i.useCallback(() => {
            a(), E();
          }, [a, E]);
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            { className: Te().Column, ...l },
            i.createElement(De.Tn, { sessionData: r }),
            Boolean(o) &&
              i.createElement(
                "div",
                { className: Te().controls },
                i.createElement(
                  Y.ff,
                  { onClick: c, tooltip: (0, A.we)("#Button_Edit") },
                  i.createElement(S.ffu, null),
                ),
                i.createElement(
                  Y.ff,
                  { onClick: p, tooltip: (0, A.we)("#Button_Delete") },
                  i.createElement(S.sED, null),
                ),
              ),
            s &&
              i.createElement(Le, {
                bCreate: !1,
                hideModal: m,
                sessionInput: r,
                fnUpdateSession: (e) => {
                  const n = Se.mh.GetEditModel(),
                    { groupIndex: a, sessionIndex: o } = $e(t),
                    l = [
                      ...n.GetEventModel().jsondata.meet_steam_groups[a]
                        .sessions,
                    ];
                  (l[o] = e),
                    l.sort((e, t) => e.rtime_start - t.rtime_start),
                    (n.GetEventModel().jsondata.meet_steam_groups[a].sessions =
                      l),
                    n.SetDirty(Me.IQ.description);
                },
              }),
            u &&
              i.createElement(
                y.E,
                { active: !0 },
                i.createElement(D.o0, {
                  strTitle: (0, A.we)("#Button_Delete"),
                  strDescription: (0, A.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = Se.mh.GetEditModel(),
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
                      e.SetDirty(Me.IQ.description);
                  },
                  closeModal: g,
                }),
              ),
          ),
          n && i.createElement(De.w3, null),
        );
      }
      var We = n(79570);
      n(86807);
      var Ze = n(44483);
      const Je = i.memo(function (e) {
        const {
          view: t,
          schema: n,
          refUpdateToolbar: a,
          className: o,
          clanSteamID: l,
          bSpellcheckEnabled: r,
          setSpellcheckEnabled: s,
        } = e;
        return i.createElement(
          Y.bI,
          { refUpdateToolbar: a, view: t },
          i.createElement(
            "div",
            { className: e.className },
            i.createElement(
              Y.Ez,
              { className: e.className },
              i.createElement(We.MV, null),
              i.createElement(Y.XQ, null),
              i.createElement(We.Km, { schema: n }),
              i.createElement(Y.XQ, null),
              n.marks.link && i.createElement(We.z9, { schema: n }),
              i.createElement(Y.XQ, null),
              i.createElement(We.Hz, { schema: n }),
              i.createElement(We.WJ, { schema: n, levels: 3 }),
              i.createElement(Y.XQ, null),
              i.createElement(et, { schema: n, clanSteamID: l }),
              !1,
              i.createElement(We.C$, {
                schema: n,
                showIndentButtonsAsNeeded: !0,
              }),
              i.createElement(Y.hK, null),
              s &&
                i.createElement(We.Nt, {
                  bSpellcheckEnabled: r,
                  setSpellcheckEnabled: s,
                }),
              n.nodes.meetsteamsessiongroup &&
                i.createElement(nt, { schema: n }),
            ),
            !1,
          ),
        );
      });
      function et(e) {
        const { schema: t, clanSteamID: n } = e,
          { callbacks: a, view: o } = (0, Y.wU)(),
          { image: l, video: r, previewyoutube: s } = t.nodes,
          [c, d] = i.useState(),
          m = i.useCallback(() => {
            d(void 0), o.focus();
          }, [o]),
          u = i.useCallback(() => {
            d({ type: "image", attrs: { src: "" } });
          }, []),
          p = i.useCallback(() => {
            d({
              type: "video",
              attrs: {
                mp4: "",
                webm: "",
                poster: "",
                autoplay: !0,
                controls: !1,
              },
            });
          }, []),
          E = i.useCallback(
            (e, t) => {
              o.dispatch(o.state.tr.insert(o.state.selection.to, t.create(e)));
            },
            [o],
          );
        return i.createElement(
          i.Fragment,
          null,
          c &&
            i.createElement(X, {
              nodeAttrs: c,
              hideModal: m,
              setAttrs: E,
              imageNodeType: l,
              videoNodeType: r,
              clanSteamID: n,
            }),
          l &&
            i.createElement(
              Y.ff,
              {
                tooltip: "#EventEditor_InsertImage_Title",
                onClick: u,
                toggled: "image" == (null == c ? void 0 : c.type),
              },
              i.createElement(S._V3, null),
            ),
          r &&
            i.createElement(
              Y.ff,
              {
                tooltip: "#EventEditor_EditVideo_Title",
                onClick: p,
                toggled: "video" == (null == c ? void 0 : c.type),
              },
              i.createElement(S.CeX, null),
            ),
          s && i.createElement(tt, { schema: t }),
          (l || r || s) && i.createElement(Y.XQ, null),
        );
      }
      function tt(e) {
        const { schema: t } = e,
          { callbacks: n, view: a } = (0, Y.wU)(),
          [o, l, r] = (0, G.uD)(),
          s = i.useCallback(() => {
            r(), a.focus();
          }, [r, a]),
          c = i.useCallback(
            (e, n) => {
              !(function (e, t, n, a = fe.V2.left) {
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
          o && i.createElement(Ce, { hideModal: s, onSave: c }),
          i.createElement(
            Y.ff,
            { tooltip: "#EventEditor_InsertYouTube", onClick: l, toggled: o },
            i.createElement("img", { src: Ze.A }),
          ),
        );
      }
      function nt(e) {
        const { schema: t } = e,
          { callbacks: n, view: a } = (0, Y.wU)(),
          o = Se.mh.GetEditModel(),
          [l, r, s] = (0, G.uD)(),
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
        if ((null == o ? void 0 : o.GetClanAccountID()) == (0, De.H7)())
          return i.createElement(
            i.Fragment,
            null,
            l && i.createElement(Ve, { hideModal: c, fnUpdateSession: d }),
            i.createElement(
              Y.ff,
              { tooltip: "#MeetSteam_add_group_ttip", onClick: r, toggled: l },
              i.createElement("img", { src: Ze.A }),
            ),
          );
      }
      var at = n(75844),
        ot = n(90316),
        lt = n.n(ot),
        rt = n(1805);
      const st = (0, at.PA)(function (e) {
          const { editModel: t } = e,
            n = t.GetEventModel().loadedAllLanguages,
            a = t.GetCurEditLanguage();
          return n
            ? i.createElement(it, { ...e, eCurrentEditLanguage: a })
            : null;
        }),
        it = i.memo(function (e) {
          const {
              editModel: t,
              refOnInsertImage: n,
              limitBBCode: l,
              eCurrentEditLanguage: r,
            } = e,
            [s, c] = i.useState(),
            d = i.useMemo(() => {
              return (e = l), new le.W(Ee, e);
              var e;
            }, [l]),
            [m, u] = i.useState();
          i.useEffect(() => {
            u(new a.n(d, t.GetDescription(r), (e) => t.SetDescription(r, e)));
          }, [d, t, r]);
          const g = i.useRef(void 0);
          (0, o.i)(m, { msAutosaveTimeout: 1e3 });
          const { nodes: _, marks: v } = d.pm_schema,
            f = (function (e, t, n) {
              const a = i.useCallback(
                (a) => {
                  const o = `^https?://${$.TS.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)(?<extension>\\.[^\\.]*)$`,
                    l = a.match(o);
                  if (l && l.groups.clanid == e.GetClanAccountID().toString()) {
                    const a = b.pU.GetClanImageByImageHash(
                      e.GetClanSteamID(),
                      l.groups.filename,
                    );
                    let o = a && te(a, t, n);
                    if (o) return o;
                  }
                  return "default";
                },
                [e, t, n],
              );
              return t ? a : void 0;
            })(t, _.image, _.video);
          return (
            (function (e, t, n, a, o) {
              i.useEffect(() => {
                if (!o || !t) return;
                const l = (e, l) => {
                  let r;
                  switch (l) {
                    case h._o.k_eInsertFullImage:
                      r = t.create({ src: (0, h.fw)(e) });
                      break;
                    case h._o.k_eInsertThumbnail:
                      r = t.create({ src: (0, h.fw)(e, !0) }, null, [
                        a.create({ href: (0, h.fw)(e) }),
                      ]);
                      break;
                    case h._o.k_eInsertVideo:
                      let o;
                      4 == e.file_type
                        ? (o = { mp4: (0, h.fw)(e) })
                        : 5 == e.file_type && (o = { webm: (0, h.fw)(e) }),
                        o && n && (r = n.create(o));
                      break;
                    case h._o.k_eShowImageGroup:
                      break;
                    default:
                      (0, E.z)(l, `Unhandled insert type ${l}`);
                  }
                  if (r) {
                    const e = o.state.tr;
                    e.selection.replaceWith(e, r), o.dispatch(e);
                  }
                };
                return (
                  (e.current = l),
                  () => {
                    e.current == l && (e.current = void 0);
                  }
                );
              }, [e, t, n, a, o]);
            })(n, _.image, _.video, v.link, s),
            i.createElement(
              ee,
              { editModel: t, imageNode: _.image, videoNode: _.video },
              i.createElement(
                "div",
                { className: lt().EventDetailsBody },
                i.createElement(Je, {
                  view: s,
                  schema: d.pm_schema,
                  refUpdateToolbar: g,
                  className: lt().ToolBar,
                  clanSteamID: t.GetClanSteamID(),
                }),
                i.createElement(
                  "div",
                  { className: lt().EventDescriptionArea },
                  i.createElement(
                    rt.l,
                    {
                      pmState: m,
                      className: lt().EventDescriptionRichField,
                      refOnUpdate: g,
                      refView: c,
                      panelProps: { onBlur: () => m.CommitChanges() },
                    },
                    i.createElement(p.W, {
                      linkMarkType: v.link,
                      onURLPasted: f,
                      schema: d.pm_schema,
                    }),
                    _.image && i.createElement(O, { nodeType: _.image }),
                    i.createElement(ct, {
                      schemaConfig: d,
                      editModel: t,
                      clanSteamID: t.GetClanSteamID(),
                    }),
                  ),
                ),
              ),
            )
          );
        });
      function ct(e) {
        const { schemaConfig: t, editModel: n, clanSteamID: a } = e,
          o = t.pm_schema,
          r = i.useMemo(
            () =>
              (function (e) {
                return he.sM({ rules: [he.tG(/^>$/, e.nodes.quote)] });
              })(o),
            [o],
          );
        (0, l.c$)(r);
        const s = o.nodes,
          c = i.useCallback(
            (e, o) => ({
              nodeAttrs: { type: e, attrs: o.attrs },
              args: t.ConvertAttrToBBCodeArgs(o, o.attrs),
              imageNodeType: s.image,
              videoNodeType: s.video,
              editModel: n,
              clanSteamID: a,
            }),
            [t, s.image, s.video, n, a],
          ),
          m = i.useMemo(
            () => [
              s.previewyoutube && {
                type: s.previewyoutube,
                component: Ie,
                readProps: (e) => ({
                  videoID: e.attrs.videoID,
                  align: e.attrs.align,
                }),
              },
              s.image && {
                type: s.image,
                component: q,
                readProps: (e) => c("image", e),
              },
              s.video && {
                type: s.video,
                component: q,
                readProps: (e) => c("video", e),
              },
              s.meetsteamsessiongroup && {
                type: s.meetsteamsessiongroup,
                component: Qe,
                readProps: (e) => ({ group_id: e.attrs.group_id }),
              },
            ],
            [s, c],
          );
        return i.createElement(d, { specs: m });
      }
    },
  },
]);

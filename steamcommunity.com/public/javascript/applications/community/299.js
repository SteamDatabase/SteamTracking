/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [299],
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
    59722: (e) => {
      e.exports = {
        Hover: "_1lo3nIamSX1TzzE4TlhFXA",
        Link: "_1ds3uh7ntoekPm635F2Ziv",
        LinkHelp: "_3Vn5X8bzPjWx5p545nkB6k",
      };
    },
    60299: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => dt });
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
                  (t) => (e[t.type.name] = (e, n, a) => new m(t, e, n, a, r)),
                ),
              new s.k_({ props: { nodeViews: e } })
            );
          }, [t, r]);
        return (
          (0, l.c$)(c),
          n.map(({ id: e, nodeView: t }) =>
            i.createElement(u, { key: e, nodeView: t }),
          )
        );
      });
      function u(e) {
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
      class m {
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
        h = n.n(g),
        f = n(81047),
        _ = n(28954),
        v = n(27666),
        b = n(71138),
        w = n(33737),
        C = n(2805),
        I = n(36509),
        S = n(4869),
        M = n(83882),
        k = n(29287);
      var y = n(78395),
        D = n(21869),
        T = n(22797),
        A = n(6144),
        P = n(61859),
        N = n(27650),
        U = n(64753),
        G = n(73309);
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
            V.Provider,
            { value: l },
            i.createElement(z, { manager: r }),
            i.createElement(H, { manager: r }, t),
          )
        );
      }
      const x = i.memo(function (e) {
        const { nodeType: t } = e,
          n = F(),
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
              u = i.useCallback(
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
              m = i.useCallback(
                (e, t) => {
                  const n = u(e);
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
                [o, u, r],
              );
            return {
              placeholderElements: n,
              createPlaceholder: d,
              findPlaceholder: u,
              replacePlaceholder: m,
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
              i.createElement(O, { key: e, element: t, data: n }),
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
          a = "file" in n ? n.file : void 0,
          o = i.useMemo(() => a && URL.createObjectURL(a), [a]),
          l = "url" in n ? n.url : o;
        return c.createPortal(
          i.createElement(
            "span",
            { className: G.FileUploadPlaceholder },
            i.createElement(
              "div",
              { className: G.Throbber },
              i.createElement(T.t, { size: "medium", position: "center" }),
            ),
            i.createElement("img", { src: l, className: G.PendingImage }),
          ),
          t,
        );
      }
      class L {
        constructor(e, t, n) {
          (this.m_errors = (0, A.Jc)([])),
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
      const V = i.createContext(void 0);
      function F() {
        return i.useContext(V).manager;
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
                strTitle: (0, P.we)("#Error_Generic"),
                strDescription: n.map((e, t) =>
                  i.createElement("div", { key: t }, e),
                ),
                strOKButtonText: (0, P.we)("#Button_OK"),
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
          { ...o, className: G.FileUploadDragDrop },
          l && !1,
          n,
        );
      }
      var K = n(30175),
        $ = n(73745),
        Y = n(30470),
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
          [u, m, p] = (0, $.uD)(),
          [g, f] = (0, $.OP)();
        let _;
        const { type: v, attrs: b } = t;
        "image" == v
          ? (_ = i.createElement(Q.B, {
              strTag: "img",
              args: a,
              event: n.GetEventModel(),
              showErrorInfo: !0,
            }))
          : "video" == v
            ? (_ = i.createElement(Q.B, {
                key: `${b.mp4}_${b.webm}`,
                strTag: "video",
                args: a,
                event: n.GetEventModel(),
                showErrorInfo: !0,
              }))
            : (0, E.z)(v, "unhandled type: " + v);
        const w = i.useCallback(() => {
          c(), p();
        }, [c, p]);
        return i.createElement(
          i.Fragment,
          null,
          u &&
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
            { className: h()(j.ClanImageContainer, g && j.Hovered), ...f },
            _,
            i.createElement(
              "span",
              { className: j.ImageControls },
              i.createElement(
                K.ff,
                {
                  onClick: m,
                  tooltip: (0, P.we)("#EventEditor_ReplaceImage_Title"),
                },
                i.createElement(S.ffu, null),
              ),
              i.createElement(
                K.ff,
                {
                  onClick: d,
                  tooltip: (0, P.we)("#StoreAdmin_GameDescription_RemoveImage"),
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
          u = i.useMemo(() => {
            let e;
            if (
              ("image" == c
                ? (e = d.src)
                : "video" == c && (e = d.mp4 || d.webm),
              e)
            ) {
              const [t] = (0, v.s9)(e);
              return t && b.pU.GetClanImageByImageHash(o, t);
            }
          }, [o, c, d]),
          [m, p] = i.useState(u ? "uploaded" : "hotlink"),
          g = i.useCallback(
            (e) => {
              l({ src: e }, r), a();
            },
            [l, a, r],
          ),
          f = i.useCallback(
            (e) => {
              l({ ...d, ...e }, s), a();
            },
            [d, l, a, s],
          );
        let _,
          C = null;
        if ("image" == c)
          (C = i.createElement(W, {
            active: "hotlink" == m,
            bIsEdit: t,
            hideModal: a,
            onImageSelected: g,
            src: d.src,
          })),
            (_ = t
              ? (0, P.we)("#EventEditor_ReplaceImage_Title")
              : (0, P.we)("#EventEditor_InsertImage_Title"));
        else {
          if ("video" != c) return (0, E.z)(c, "Unhandled type"), null;
          (C = i.createElement(Z, {
            active: "hotlink" == m,
            bIsEdit: t,
            hideModal: a,
            attrs: d,
            setAttrs: l,
          })),
            (_ = (0, P.we)("#EventEditor_EditVideo_Title"));
        }
        return i.createElement(
          M.mt,
          { active: !0, onDismiss: a, className: j.ClanImageModalContent },
          i.createElement(w.Y9, null, _),
          i.createElement(
            w.zW,
            { value: m, onChange: (e) => p(e) },
            i.createElement(w.a, { value: "uploaded" }, "Uploaded"),
            i.createElement(w.a, { value: "hotlink" }, "Enter URL"),
          ),
          i.createElement(
            "div",
            {
              className: h()(j.ClanImageModalMode, "uploaded" == m && j.Active),
            },
            i.createElement(J, {
              bIsEdit: t,
              hideModal: a,
              onImageSelected: g,
              onVideoSelected: s && f,
              clanSteamID: o,
              selectedImage: u,
            }),
          ),
          i.createElement(
            "div",
            {
              className: h()(j.ClanImageModalMode, "hotlink" == m && j.Active),
            },
            C,
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
            ? (0, P.we)("#EventEditor_ReplaceImage_Title")
            : (0, P.we)("#EventEditor_InsertImage_Title"),
          u = i.useRef();
        return (
          i.useEffect(() => {
            t && u.current.Focus();
          }, [t]),
          i.createElement(
            w.lV,
            { onSubmit: () => o(r) },
            i.createElement(
              w.nB,
              null,
              i.createElement(w.pd, {
                ref: u,
                value: r,
                onChange: c,
                label: (0, P.we)("#EventEditor_InsertImage_URL"),
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
          [u, m] = i.useState(o.poster),
          [p, E] = i.useState(!!o.autoplay),
          [g, h] = i.useState(!!o.controls),
          f = i.useRef();
        i.useEffect(() => {
          t && f.current.Focus();
        }, [t]);
        return i.createElement(
          w.lV,
          {
            onSubmit: (e) => {
              l({
                ...o,
                mp4: r || void 0,
                webm: c || void 0,
                poster: u || void 0,
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
              ref: f,
              value: r,
              onChange: (e) => s(e.currentTarget.value),
              label: (0, P.we)("#EventEditor_InsertVideo_InputMP4"),
            }),
            i.createElement(w.pd, {
              value: c,
              onChange: (e) => d(e.currentTarget.value),
              label: (0, P.we)("#EventEditor_InsertVideo_InputWebM"),
            }),
            i.createElement(w.pd, {
              value: u,
              onChange: (e) => m(e.currentTarget.value),
              label: (0, P.we)("#EventEditor_InsertVideo_InputPoster"),
            }),
            i.createElement(w.Yh, {
              checked: p,
              onChange: E,
              label: (0, P.we)("#EventEditor_InsertVideo_InputAutoplay"),
            }),
            i.createElement(w.Yh, {
              checked: g,
              onChange: h,
              label: (0, P.we)("#EventEditor_InsertVideo_InputShowControls"),
            }),
          ),
          i.createElement(w.CB, {
            onCancel: a,
            strOKText: (0, P.we)("#EventEditor_EditVideo_Title"),
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
          u = t
            ? (0, P.we)("#EventEditor_ReplaceImage_Title")
            : (0, P.we)("#EventEditor_InsertImage_Title"),
          m = i.useCallback(
            (e) => {
              switch (e.file_type) {
                case 4:
                  o && o({ mp4: (0, f.fw)(e) });
                  break;
                case 5:
                  o && o({ webm: (0, f.fw)(e) });
                  break;
                default:
                  a((0, f.fw)(e));
              }
            },
            [a, o],
          ),
          p = i.useCallback(
            (e, t) => {
              d(e), t && m(e);
            },
            [m],
          );
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            w.lV,
            { onSubmit: () => c && m(c) },
            i.createElement(I.g, { fnSetImageSearch: s }),
            i.createElement(C.ge, {
              clanAccountID: l.GetAccountID(),
              fileNameSearch: r,
              onImageSelected: p,
              selectedItem: c,
            }),
            i.createElement(w.CB, {
              onCancel: n,
              strOKText: u,
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
                l = new _.V(o);
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
                i.type == n && (await (0, N.DB)((0, v.v6)(i.attrs.src))), i
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
        const a = (0, f.fw)(e);
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
        ue = n.n(de),
        me = n(63226),
        pe = n.n(me),
        Ee = n(44832);
      const ge = {
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
                  ue()[`Header${e.attrs.level}`],
                ),
              },
              0,
            ],
            bbCode: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              BBArgsToAttrs: (t) => ({ ...he(t), level: e }),
              AttrsToBBArgs: (e) => ({ ...fe(e), tag: `h${e.level}` }),
            })),
          },
          quote: {
            ...ie.quote,
            toDOM: () => [
              "blockquote",
              { class: (0, se.A)(ae().BlockQuote, ue().BlockQuote) },
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
        marks: {
          ...ce,
          link: {
            ...ce.link,
            attrs: {
              href: {},
              title: { default: null },
              style: { default: null },
            },
            toDOM(e) {
              const { href: t, title: n, style: a } = e.attrs;
              return ["a", { href: t, title: n, class: (0, Ee.Xe)(a) }, 0];
            },
            bbCode: {
              tag: "url",
              BBArgsToAttrs: (e) => ({ href: e[""], style: e.style }),
              AttrsToBBArgs: (e) => {
                let t = { "": e.href };
                return e.style && (t.style = e.style), { args: t };
              },
              convertContentToAttr: "href",
            },
          },
        },
      };
      function he(e) {
        return e.id ? { id: e.id.replace(/^#/, "") } : {};
      }
      function fe(e) {
        return e.id ? { args: { id: e.id } } : {};
      }
      var _e = n(79216);
      var ve = n(70995),
        be = n(74410),
        we = n(73662),
        Ce = n(9154),
        Ie = n(72421);
      function Se(e) {
        const {
            videoID: t,
            align: n,
            selected: a,
            setAttrs: o,
            focusView: l,
          } = e,
          [r, s] = i.useState(!1),
          [c, d, u] = (0, $.uD)(),
          m = i.useCallback(() => s(!0), []),
          p = i.useCallback(() => s(!1), []),
          E = i.useCallback(() => {
            u(), l();
          }, [u, l]),
          g = i.useCallback(
            (e, t) => {
              o({ videoID: e, align: t }), E();
            },
            [o, E],
          ),
          { sizeStr: h, alignStr: f } = (0, be.i1)(n);
        return i.createElement(
          i.Fragment,
          null,
          c &&
            i.createElement(Me, {
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
                me.PreviewYoutubeEditor,
                h,
                f,
                we.PreviewYouTubeVideo,
                a && me.Selected,
              ),
              onMouseEnter: m,
              onMouseLeave: p,
            },
            r &&
              i.createElement(
                "div",
                { className: me.EditHover, onClick: d },
                (0, P.we)("#Button_Edit"),
              ),
            a && i.createElement("div", { className: me.SelectionOverlay }),
            i.createElement("img", {
              src: `https://img.youtube.com/vi/${t}/0.jpg`,
            }),
          ),
        );
      }
      function Me(e) {
        const {
            videoID: t = "",
            align: n = "",
            bEditing: a = !1,
            hideModal: o,
            onSave: l,
          } = e,
          [r, s] = i.useState(n || be.V2.left),
          [c, d] = i.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [u, m] = i.useState(void 0),
          p = i.useCallback(() => {
            const { strVideoID: e } = (0, ve.XU)(c);
            return (
              e ? l(e, r) : m((0, P.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [c, r, l]),
          E = i.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return i.createElement(
          Ce.EN,
          { active: !0 },
          i.createElement(
            Ie._,
            {
              strTitle: (0, P.we)("#EventEditor_InsertYouTube"),
              closeModal: o,
              strOKText: a
                ? (0, P.we)("#Button_Save")
                : (0, P.we)("#EventEditor_InsertYouTube"),
              onOK: p,
            },
            u && i.createElement("div", { className: me.Error }, u),
            i.createElement(w.pd, {
              label: (0, P.we)("#EventEditor_InsertYouTube_URL"),
              placeholder: (0, P.we)("#EventEditor_InsertYouTube_Placholder"),
              value: c,
              ref: E,
              onChange: (e) => d(e.currentTarget.value),
            }),
            i.createElement(
              w.o1,
              { label: (0, P.we)("#EventEditor_InsertYouTube_Position") },
              i.createElement(w.Od, {
                checked: r == be.V2.left,
                onChange: (e) => e && s(be.V2.left),
                label: (0, P.we)("#EventEditor_InsertYouTube_Left"),
              }),
              i.createElement(w.Od, {
                checked: r == be.V2.right,
                onChange: (e) => e && s(be.V2.right),
                label: (0, P.we)("#EventEditor_InsertYouTube_Right"),
              }),
              i.createElement(w.Od, {
                checked: r == be.V2.full,
                onChange: (e) => e && s(be.V2.full),
                label: (0, P.we)("#EventEditor_InsertYouTube_Full"),
              }),
              i.createElement(w.Od, {
                checked: r == be.V2.summary,
                onChange: (e) => e && s(be.V2.summary),
                label: (0, P.we)("#EventEditor_InsertYouTube_Summary"),
              }),
            ),
          ),
        );
      }
      var ke = n(25918),
        ye = n(69001),
        De = n(65946),
        Te = n(19675),
        Ae = n(1397),
        Pe = n.n(Ae),
        Ne = n(63556),
        Ue = n(44165),
        Ge = n(95695),
        Be = n(99637),
        xe = n(62490),
        Re = n(91675),
        Oe = n(14771),
        Le = n(87937),
        Ve = n(61819);
      function Fe(e) {
        const { hideModal: t, fnUpdateSession: n } = e,
          [a, o] = (0, i.useState)(() => Ye(!0, null)),
          [l, r] = (0, i.useState)(() => je(!0, null)),
          [s] = (0, De.q3)(() => [l.location_type]);
        return i.createElement(
          D.E,
          { active: !0 },
          i.createElement(
            y.o0,
            {
              strTitle: (0, P.we)("#MeetSteam_create_title"),
              onOK: () => n(a, l),
              closeModal: () => {
                r(je(!0, null)), o(Ye(!0, null)), t();
              },
              bOKDisabled: null == !s,
            },
            i.createElement(
              "div",
              { className: Pe().DialogCtn },
              i.createElement(Ke, { group: a, fnSetGroup: o }),
              i.createElement($e, { session: l, fnSetSession: r }),
            ),
          ),
        );
      }
      function ze(e) {
        const { hideModal: t, groupInput: n, fnUpdateGroupSession: a } = e,
          [o, l] = (0, i.useState)(() => Ye(!1, n));
        return i.createElement(
          D.E,
          { active: !0 },
          i.createElement(
            y.o0,
            {
              strTitle: (0, P.we)("#MeetSteam_edit_title"),
              onOK: () => {
                a(o), t();
              },
              onCancel: () => {
                l(Ye(!1, n)), t();
              },
            },
            i.createElement(
              "div",
              { className: Pe().DialogCtn },
              i.createElement(Ke, { group: o, fnSetGroup: l }),
            ),
          ),
        );
      }
      function He(e) {
        const {
            bCreate: t,
            hideModal: n,
            sessionInput: a,
            fnUpdateSession: o,
          } = e,
          [l, r] = (0, i.useState)(() => je(t, a)),
          [s] = (0, De.q3)(() => [l.location_type]);
        return i.createElement(
          D.E,
          { active: !0 },
          i.createElement(
            y.o0,
            {
              strTitle: (0, P.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                o(l), n();
              },
              onCancel: () => {
                r(je(t, a)), n();
              },
              bOKDisabled: !s,
            },
            i.createElement(
              "div",
              { className: Pe().DialogCtn },
              i.createElement($e, { session: l, fnSetSession: r }),
            ),
          ),
        );
      }
      function Ke(e) {
        const { group: t, fnSetGroup: n } = e,
          a = (0, Ne.E)();
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(w.pd, {
            type: "text",
            label: (0, P.we)("#MeetSteam_edit_session_name"),
            value: P.NT.Get(t.localized_session_title, a),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_title = P.NT.Set(
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
            (0, P.we)("#MeetSteam_edit_session_desc"),
          ),
          i.createElement("textarea", {
            className: (0, se.A)(
              "DialogTextInputBase",
              Pe().EventDescriptionField,
            ),
            value: P.NT.Get(t.localized_session_description, a),
            rows: 5,
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_description = P.NT.Set(
                o.localized_session_description,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
        );
      }
      function $e(e) {
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
        const u = Math.max(0, Math.floor((o - a) / 60)),
          m = "US/Pacific",
          p = Intl.DateTimeFormat().resolvedOptions().timeZone,
          E = "in_person" === s ? (null != c ? c : m) : p,
          g = Le.unix(t.rtime_start).tz(m),
          h = Le.unix(t.rtime_start).tz(E),
          f = h.utcOffset() - g.utcOffset(),
          _ = Le.unix(t.rtime_end).tz(m),
          v = Le.unix(t.rtime_end).tz(E),
          b = v.utcOffset() - _.utcOffset();
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            { className: Ge.EventEditorTextTitle },
            (0, P.we)("#MeetSteam_edit_date_display_title"),
          ),
          i.createElement(
            "div",
            { className: Ge.EventEditorTextSubTitle },
            (0, P.we)("#MeetSteam_edit_date_display_desc"),
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
              (0, P.we)("#MeetSteam_edit_date_display_in_person"),
            ),
            i.createElement(
              w.a,
              { value: "virtual" },
              (0, P.we)("#MeetSteam_edit_date_display_virtual"),
            ),
          ),
          "in_person" === s &&
            i.createElement(Ve.Ay, {
              styles: { option: (e) => ({ ...e, color: "#444444" }) },
              isSearchable: !0,
              isMulti: !1,
              options: Le.tz.names().map((e) => ({ label: e, value: e })),
              defaultMenuIsOpen: !1,
              value: c ? { label: c, value: c } : { label: m, value: m },
              onChange: (e) => n({ ...t, in_person_time_zone: e.value }),
            }),
          i.createElement("br", null),
          i.createElement(Be.K, {
            strDescription: (0, P.we)("#MeetSteam_edit_start"),
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => a,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + Oe.Kp.PerMinute * u }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          i.createElement("br", null),
          i.createElement(w.pd, {
            type: "number",
            min: 0,
            label: (0, P.we)("#MeetSteam_edit_duration"),
            onChange: (e) => {
              const a = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + Oe.Kp.PerMinute * a });
            },
            value: u,
          }),
          i.createElement(
            "div",
            null,
            (0, P.we)("#MeetSteam_edit_displayed_start"),
            ": ",
            (0, Re.P0)(h.unix() + 60 * f, !1, h.format("z")),
            " ",
          ),
          i.createElement(
            "div",
            null,
            (0, P.we)("#MeetSteam_edit_displayed_end"),
            ": ",
            (0, Re.P0)(v.unix() + 60 * b, !1, v.format("z")),
            " ",
          ),
          i.createElement("br", null),
          i.createElement("br", null),
          i.createElement(
            "div",
            { className: Pe().ParticipantRow },
            i.createElement(w.pd, {
              type: "number",
              value: l,
              label: (0, P.we)("#MeetSteam_edit_max_capacity"),
              min: 1,
              onChange: (e) =>
                n({
                  ...t,
                  max_capacity: Number.parseInt(e.currentTarget.value),
                }),
            }),
            i.createElement(w.m, {
              controlled: !0,
              label: (0, P.we)("#MeetSteam_edit_team"),
              tooltip: (0, P.we)("#MeetSteam_edit_team_ttip"),
              rgOptions: d,
              selectedOption: r,
              onChange: (e) => n({ ...t, max_per_team: e.data }),
            }),
          ),
        );
      }
      function Ye(e, t) {
        if (e) {
          const e = ke.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, xe.$Y)([], 31, null),
            localized_session_description: (0, xe.$Y)([], 31, null),
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
      function je(e, t) {
        if (e) {
          const e = Ue.HD.GetTimeNowWithOverride(),
            t = ke.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
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
      function Qe(e) {
        const t = ke.mh.GetEditModel();
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
      function qe(e) {
        const t = ke.mh.GetEditModel();
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
      function Xe(e) {
        const { focusView: t, removeNode: n, group_id: a } = e,
          o = ke.mh.GetEditModel(),
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
          [u, m, p] = (0, $.uD)(),
          E = i.useCallback(() => {
            t(), p();
          }, [t, p]);
        return l && o.GetClanAccountID() == (0, Te.H7)()
          ? i.createElement(
              "div",
              { className: Pe().EditorCtn },
              i.createElement(We, { groupData: l, focusView: t }),
              i.createElement(
                "div",
                { className: Pe().controls },
                i.createElement(
                  K.ff,
                  { onClick: s, tooltip: (0, P.we)("#Button_Edit") },
                  i.createElement(S.ffu, null),
                ),
                i.createElement(
                  K.ff,
                  { onClick: m, tooltip: (0, P.we)("#Button_Delete") },
                  i.createElement(S.sED, null),
                ),
              ),
              r &&
                i.createElement(ze, {
                  hideModal: d,
                  groupInput: l,
                  fnUpdateGroupSession: (e) => {
                    const { groupIndex: t } = qe(e.group_id),
                      n = ke.mh.GetEditModel();
                    (n.GetEventModel().jsondata.meet_steam_groups[t] = e),
                      n.SetDirty(ye.IQ.description);
                  },
                }),
              u &&
                i.createElement(
                  D.E,
                  { active: !0 },
                  i.createElement(y.o0, {
                    strTitle: (0, P.we)("#Button_Delete"),
                    strDescription: (0, P.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { groupIndex: e } = qe(l.group_id),
                        t = ke.mh.GetEditModel(),
                        a = [...t.GetEventModel().jsondata.meet_steam_groups];
                      a.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_groups = a),
                        t.SetDirty(ye.IQ.description),
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
      function We(e) {
        const { groupData: t, focusView: n } = e,
          a = (0, De.q3)(() => t.sessions || []),
          [o, l, r] = (0, $.uD)(),
          s = i.useCallback(() => {
            n(), r();
          }, [n, r]);
        return t
          ? i.createElement(
              Te.jr,
              { groupData: t },
              a.map((e, o) =>
                i.createElement(Ze, {
                  key: "timecol_" + t.group_id + "_" + e.id,
                  focusView: n,
                  sessionID: e.id,
                  bShowOR: o + 1 < a.length,
                }),
              ),
              i.createElement(
                K.ff,
                {
                  className: Pe().AddNew,
                  onClick: l,
                  tooltip: (0, P.we)("#MeetSteam_add"),
                },
                i.createElement(S.OMN, null),
              ),
              o &&
                i.createElement(He, {
                  bCreate: !0,
                  hideModal: s,
                  fnUpdateSession: (e) => {
                    const n = ke.mh.GetEditModel(),
                      a = [...t.sessions, e];
                    a.sort((e, t) => e.rtime_start - t.rtime_start),
                      (t.sessions = a),
                      n.SetDirty(ye.IQ.description);
                  },
                }),
            )
          : null;
      }
      function Ze(e) {
        const { sessionID: t, bShowOR: n, focusView: a } = e,
          [o, l] = (0, $.OP)(),
          r = (0, De.q3)(() => {
            const { groupIndex: e, sessionIndex: n } = Qe(t);
            return ke.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[n];
          }),
          [s, c, d] = (0, $.uD)(),
          u = i.useCallback(() => {
            a(), d();
          }, [a, d]),
          [m, p, E] = (0, $.uD)(),
          g = i.useCallback(() => {
            a(), E();
          }, [a, E]);
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            { className: Pe().Column, ...l },
            i.createElement(Te.Tn, { sessionData: r }),
            Boolean(o) &&
              i.createElement(
                "div",
                { className: Pe().controls },
                i.createElement(
                  K.ff,
                  { onClick: c, tooltip: (0, P.we)("#Button_Edit") },
                  i.createElement(S.ffu, null),
                ),
                i.createElement(
                  K.ff,
                  { onClick: p, tooltip: (0, P.we)("#Button_Delete") },
                  i.createElement(S.sED, null),
                ),
              ),
            s &&
              i.createElement(He, {
                bCreate: !1,
                hideModal: u,
                sessionInput: r,
                fnUpdateSession: (e) => {
                  const n = ke.mh.GetEditModel(),
                    { groupIndex: a, sessionIndex: o } = Qe(t),
                    l = [
                      ...n.GetEventModel().jsondata.meet_steam_groups[a]
                        .sessions,
                    ];
                  (l[o] = e),
                    l.sort((e, t) => e.rtime_start - t.rtime_start),
                    (n.GetEventModel().jsondata.meet_steam_groups[a].sessions =
                      l),
                    n.SetDirty(ye.IQ.description);
                },
              }),
            m &&
              i.createElement(
                D.E,
                { active: !0 },
                i.createElement(y.o0, {
                  strTitle: (0, P.we)("#Button_Delete"),
                  strDescription: (0, P.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = ke.mh.GetEditModel(),
                      { groupIndex: n, sessionIndex: a } = Qe(t),
                      o = [
                        ...e.GetEventModel().jsondata.meet_steam_groups[n]
                          .sessions,
                      ];
                    o.splice(a, 1),
                      o.sort((e, t) => e.rtime_start - t.rtime_start),
                      (e.GetEventModel().jsondata.meet_steam_groups[
                        n
                      ].sessions = o),
                      e.SetDirty(ye.IQ.description);
                  },
                  closeModal: g,
                }),
              ),
          ),
          n && i.createElement(Te.w3, null),
        );
      }
      var Je = n(79570);
      n(86807);
      var et = n(44483);
      const tt = i.memo(function (e) {
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
          K.bI,
          { refUpdateToolbar: a, view: t },
          i.createElement(
            "div",
            { className: e.className },
            i.createElement(
              K.Ez,
              { className: e.className },
              i.createElement(Je.MV, null),
              i.createElement(K.XQ, null),
              i.createElement(Je.Km, { schema: n }),
              i.createElement(K.XQ, null),
              n.marks.link && i.createElement(nt, { schema: n }),
              i.createElement(K.XQ, null),
              i.createElement(Je.Hz, { schema: n }),
              i.createElement(Je.WJ, { schema: n, levels: 3 }),
              i.createElement(K.XQ, null),
              i.createElement(at, { schema: n, clanSteamID: l }),
              !1,
              i.createElement(Je.C$, {
                schema: n,
                showIndentButtonsAsNeeded: !0,
              }),
              i.createElement(K.hK, null),
              s &&
                i.createElement(Je.Nt, {
                  bSpellcheckEnabled: r,
                  setSpellcheckEnabled: s,
                }),
              n.nodes.meetsteamsessiongroup &&
                i.createElement(lt, { schema: n }),
            ),
            !1,
          ),
        );
      });
      function nt(e) {
        const t = (0, Ee.V9)();
        return i.createElement(Je.z9, { schema: e.schema, addtlAttrs: t });
      }
      function at(e) {
        const { schema: t, clanSteamID: n } = e,
          { callbacks: a, view: o } = (0, K.wU)(),
          { image: l, video: r, previewyoutube: s } = t.nodes,
          [c, d] = i.useState(),
          u = i.useCallback(() => {
            d(void 0), o.focus();
          }, [o]),
          m = i.useCallback(() => {
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
              hideModal: u,
              setAttrs: E,
              imageNodeType: l,
              videoNodeType: r,
              clanSteamID: n,
            }),
          l &&
            i.createElement(
              K.ff,
              {
                tooltip: "#EventEditor_InsertImage_Title",
                onClick: m,
                toggled: "image" == (null == c ? void 0 : c.type),
              },
              i.createElement(S._V3, null),
            ),
          r &&
            i.createElement(
              K.ff,
              {
                tooltip: "#EventEditor_EditVideo_Title",
                onClick: p,
                toggled: "video" == (null == c ? void 0 : c.type),
              },
              i.createElement(S.CeX, null),
            ),
          s && i.createElement(ot, { schema: t }),
          (l || r || s) && i.createElement(K.XQ, null),
        );
      }
      function ot(e) {
        const { schema: t } = e,
          { callbacks: n, view: a } = (0, K.wU)(),
          [o, l, r] = (0, U.uD)(),
          s = i.useCallback(() => {
            r(), a.focus();
          }, [r, a]),
          c = i.useCallback(
            (e, n) => {
              !(function (e, t, n, a = be.V2.left) {
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
          o && i.createElement(Me, { hideModal: s, onSave: c }),
          i.createElement(
            K.ff,
            { tooltip: "#EventEditor_InsertYouTube", onClick: l, toggled: o },
            i.createElement("img", { src: et.A }),
          ),
        );
      }
      function lt(e) {
        const { schema: t } = e,
          { callbacks: n, view: a } = (0, K.wU)(),
          o = ke.mh.GetEditModel(),
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
        if ((null == o ? void 0 : o.GetClanAccountID()) == (0, Te.H7)())
          return i.createElement(
            i.Fragment,
            null,
            l && i.createElement(Fe, { hideModal: c, fnUpdateSession: d }),
            i.createElement(
              K.ff,
              { tooltip: "#MeetSteam_add_group_ttip", onClick: r, toggled: l },
              i.createElement("img", { src: et.A }),
            ),
          );
      }
      var rt = n(75844),
        st = n(90316),
        it = n.n(st),
        ct = n(1805);
      const dt = (0, rt.PA)(function (e) {
          const { editModel: t } = e,
            n = t.GetEventModel().loadedAllLanguages,
            a = t.GetCurEditLanguage();
          return n
            ? i.createElement(ut, { ...e, eCurrentEditLanguage: a })
            : null;
        }),
        ut = i.memo(function (e) {
          const {
              editModel: t,
              refOnInsertImage: n,
              limitBBCode: l,
              eCurrentEditLanguage: r,
            } = e,
            [s, c] = i.useState(),
            d = i.useMemo(() => {
              return (e = l), new le.W(ge, e);
              var e;
            }, [l]),
            [u, m] = i.useState();
          i.useEffect(() => {
            m(new a.n(d, t.GetDescription(r), (e) => t.SetDescription(r, e)));
          }, [d, t, r]);
          const g = i.useRef(void 0);
          (0, o.i)(u, { msAutosaveTimeout: 1e3 });
          const { nodes: h, marks: _ } = d.pm_schema,
            v = (function (e, t, n) {
              const a = i.useCallback(
                (a) => {
                  const o = `^https?://${Y.TS.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)(?<extension>\\.[^\\.]*)$`,
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
            })(t, h.image, h.video);
          return (
            (function (e, t, n, a, o) {
              i.useEffect(() => {
                if (!o || !t) return;
                const l = (e, l) => {
                  let r;
                  switch (l) {
                    case f._o.k_eInsertFullImage:
                      r = t.create({ src: (0, f.fw)(e) });
                      break;
                    case f._o.k_eInsertThumbnail:
                      r = t.create({ src: (0, f.fw)(e, !0) }, null, [
                        a.create({ href: (0, f.fw)(e) }),
                      ]);
                      break;
                    case f._o.k_eInsertVideo:
                      let o;
                      4 == e.file_type
                        ? (o = { mp4: (0, f.fw)(e) })
                        : 5 == e.file_type && (o = { webm: (0, f.fw)(e) }),
                        o && n && (r = n.create(o));
                      break;
                    case f._o.k_eShowImageGroup:
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
            })(n, h.image, h.video, _.link, s),
            i.createElement(
              ee,
              { editModel: t, imageNode: h.image, videoNode: h.video },
              i.createElement(
                "div",
                { className: it().EventDetailsBody },
                i.createElement(tt, {
                  view: s,
                  schema: d.pm_schema,
                  refUpdateToolbar: g,
                  className: it().ToolBar,
                  clanSteamID: t.GetClanSteamID(),
                }),
                i.createElement(
                  "div",
                  { className: it().EventDescriptionArea },
                  i.createElement(
                    ct.l,
                    {
                      pmState: u,
                      className: it().EventDescriptionRichField,
                      refOnUpdate: g,
                      refView: c,
                      panelProps: { onBlur: () => u.CommitChanges() },
                    },
                    i.createElement(p.W, {
                      linkMarkType: _.link,
                      onURLPasted: v,
                      schema: d.pm_schema,
                    }),
                    h.image && i.createElement(x, { nodeType: h.image }),
                    i.createElement(mt, {
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
      function mt(e) {
        const { schemaConfig: t, editModel: n, clanSteamID: a } = e,
          o = t.pm_schema,
          r = i.useMemo(
            () =>
              (function (e) {
                return _e.sM({ rules: [_e.tG(/^>$/, e.nodes.quote)] });
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
          u = i.useMemo(
            () => [
              s.previewyoutube && {
                type: s.previewyoutube,
                component: Se,
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
                component: Xe,
                readProps: (e) => ({ group_id: e.attrs.group_id }),
              },
            ],
            [s, c],
          );
        return i.createElement(d, { specs: u });
      }
    },
    28106: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => u });
      var a = n(26205),
        o = n(57053),
        l = n(52893),
        r = n(90626),
        s = n(61859),
        i = n(17558),
        c = n(22145),
        d = n(59722);
      const u = r.memo(function (e) {
        const {
            linkMarkType: t,
            onURLPasted: n,
            schema: s,
            onClickURL: d = p,
          } = e,
          u = r.useRef(d);
        u.current = d;
        const [E, g] = r.useState(),
          [h, f] = r.useState(),
          [_, v] = r.useState(),
          [b, w] = (0, i.E)(s),
          C = r.useMemo(
            () =>
              new l.k_({
                props: {
                  handleClickOn(e, n, a, o, l, r) {
                    if (r && (l.ctrlKey || 1 == l.button)) {
                      const e = a
                        .resolve(n - o)
                        .marks()
                        .find((e) => e.type == t);
                      if (e)
                        return (
                          u.current(e.attrs.href, l.view),
                          l.preventDefault(),
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
                    ) && (b(e), !0),
                  clipboardTextParser(e, l, r, i) {
                    let c,
                      d = [];
                    for (; (c = e.match(a.O)); ) {
                      c.index > 0 && d.push(s.text(e.substring(0, c.index)));
                      const o = (0, a.S)(c[0]),
                        l = n && n(o);
                      l && "default" !== l
                        ? "remove" !== l && d.push(l)
                        : d.push(s.text(c[0], [t.create({ href: o })])),
                        (e = e.substring(c.index + c[0].length));
                    }
                    return (
                      e.length && d.push(s.text(e)),
                      new o.Ji(o.FK.from(d), l.start(), l.end())
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
                        g(e.left + e.width / 2), f(e.bottom + 2), v(n);
                      } else v(void 0);
                      return !1;
                    },
                    mouseleave: (e, t) => (v(void 0), !1),
                  },
                },
              }),
            [t, b, n, s],
          );
        (0, c.c$)(C);
        let I = null;
        return (
          _ &&
            E &&
            h &&
            (I = r.createElement(m, {
              top: h,
              left: E,
              href: _.getAttribute("href"),
            })),
          r.createElement(r.Fragment, null, I, w)
        );
      });
      function m(e) {
        const { top: t, left: n, href: a } = e,
          [o, l] = r.useState(0),
          i = r.useRef(null);
        r.useLayoutEffect(() => {
          l(i.current.getBoundingClientRect().width);
        }, [t, n, a]);
        const c = { top: `${t}px`, left: `${Math.max(n - o / 2, 12)}px` };
        return r.createElement(
          "div",
          { className: d.Hover, style: c, ref: i },
          r.createElement("div", { className: d.Link }, a),
          r.createElement(
            "div",
            { className: d.LinkHelp },
            (0, s.we)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function p(e, t) {
        t.open(e);
      }
    },
    26555: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => l });
      var a = n(90626),
        o = n(90286);
      function l(e, t) {
        const { msAutosaveTimeout: n = 1e3 } = t || {},
          [l, r] = a.useState(!1);
        return (
          (0, o.u)(
            e,
            a.useCallback(() => {
              r(!0);
            }, []),
          ),
          a.useEffect(() => {
            if (!l || !e) return;
            const t = () => {
                e.CommitChanges(), r(!1);
              },
              a = window.setTimeout(t, n);
            return () => {
              window.clearTimeout(a), t();
            };
          }, [l, e, n]),
          { bDirty: l }
        );
      }
    },
    86807: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => l });
      var a = n(90626),
        o = n(72739);
      function l(e) {
        const {
            visible: t = !0,
            className: n,
            keepMounted: l = !1,
            expandDirection: r = "height",
            msAnimationDuration: s = 250,
            children: i,
          } = e,
          {
            style: c,
            active: d,
            refDiv: u,
          } = (function (e, t = "height", n = 250) {
            const l = a.useRef(),
              r = a.useRef(!0),
              [s, i] = a.useState("idle"),
              [c, d] = a.useState({});
            a.useLayoutEffect(() => {
              r.current ? (r.current = !1) : i("start");
            }, [e]),
              a.useLayoutEffect(() => {
                const n = l.current,
                  a = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == s) {
                  const o = n[a];
                  d((n) => ({
                    [t]: e ? "0px" : `${o}px`,
                    ...n,
                    overflow: "hidden",
                  })),
                    i("active");
                } else if ("active" == s) {
                  n.scrollTop;
                  const l = n[a];
                  d({ overflow: "hidden", [t]: e ? `${l}px` : "0px" });
                  const r = () => {
                    o.unstable_batchedUpdates(() => {
                      d({}), i("idle");
                    });
                  };
                  return (
                    n.addEventListener("transitionend", r),
                    () => {
                      n.removeEventListener("transitionend", r);
                    }
                  );
                }
              }, [s, e]);
            const u = { ...c, transition: `${t} ${n}ms` };
            return { style: u, active: "idle" != s, refDiv: l };
          })(t, r, s);
        return t || d || l
          ? a.createElement("div", { className: n, ref: u, style: c }, i)
          : null;
      }
    },
  },
]);

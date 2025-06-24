/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7760],
  {
    5068: (e) => {
      e.exports = {
        CarouselEditContainer: "_3kKETJYqcMOvI7DoPg8NRp",
        CarouselList: "_29awDHhUWS3DKirluu8OGx",
        ListItem: "uUOCgnwAbXeUmKvdAccoH",
        DraggableItem: "XruR-YbySxPawieGNohW6",
        ImagePreview: "_3RALyudkR9YsufJ__hQRLZ",
        Spacer: "EAttw6yxMpx398nbBEbMz",
        Controls: "Ge-JWjIp9WDyaaxi6CvtR",
        Control: "vwJtDHPeg0gv0CI7yGChD",
        AddButton: "_36RM9HiLN49wfehWU79FHe",
        PlusIcon: "_3nwxvp5yLdVg3iJ1eAi63z",
      };
    },
    21134: (e) => {
      e.exports = {
        ClanImageModalContent: "SsgHukHcE1jf7p3W6Ta8g",
        ClanImageModalMode: "_1RAzAQViGO8A_wCFzSUStH",
        Active: "_1qsUls0lc9uJ_RarLA3dcG",
        ClanImageGridForm: "_3uCm4z1gjW0tmhRd228Xqh",
        ClanImageGridContainer: "_3Q5TF6lMOT30JuoipVGd5C",
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
    28516: (e) => {
      e.exports = {
        EditorCtn: "_2h37cwEb2SfJphgpbu-dPv",
        controls: "kI20RMKnHD3qdQhl-Hr4K",
      };
    },
    6941: (e) => {
      e.exports = {
        EditableComponentToolbarContainer: "o3hf9xdErkO0g06PW47cS",
        EditableComponentToolbar: "_2Lz0NGsqaU7fnOxrrftZMG",
        EditableComponentInlineContainer: "_32qkMjC0nQ9LGh6fNXlNkM",
        InlineHoverContainer: "_1TX0Q6DERjhYWEDcU-0QLC",
        Hidden: "_3rZ3G-s7kNdbfzeAOTIYOr",
        WidthConstrained: "_1eKpwF-reh8vmJh6uM9dho",
        FloatingToolbarButton: "KsGqILWyUj2YuFJK_Zy7D",
        StrongShadows: "_3_c8HvckcvJ0FHwgeS1GtO",
      };
    },
    49158: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => jt });
      var a = n(90286),
        o = n(26555),
        l = n(22145),
        r = n(69956),
        s = n(28106),
        i = n(81393),
        c = n(64238),
        d = n.n(c),
        m = n(90626),
        u = n(81047),
        p = n(28954),
        E = n(27666),
        _ = n(86355),
        g = n(68255),
        v = n(2805),
        h = n(36509),
        f = n(28015),
        b = n(71696),
        C = n(61859),
        w = n(27650),
        I = n(73745),
        k = n(30470),
        S = n(21134),
        M = n(84106),
        T = n(6941),
        y = n(30175),
        D = n(4869),
        N = n(64753);
      function G(e) {
        const { className: t, ...n } = e;
        return m.createElement("div", {
          className: d()(t, T.EditableComponentToolbarContainer),
          ...n,
        });
      }
      function A(e) {
        const {
            toolbar: t,
            top: n,
            left: a,
            width: o,
            height: l,
            visible: r,
          } = e,
          s = {
            left: `${a}px`,
            top: `${n}px`,
            width: `${o}px`,
            position: "absolute",
          },
          i = o < 120;
        return (
          (l < 80 || i) && ((s.top = n - 32 - 16 + "px"), (s.height = "48px")),
          m.createElement(
            "div",
            {
              style: s,
              className: d()(
                T.InlineHoverContainer,
                i && T.WidthConstrained,
                !r && T.Hidden,
              ),
            },
            t,
          )
        );
      }
      function x(e) {
        const { className: t, toolbar: n, children: a } = e,
          [o, l] = (0, N.OP)(),
          [r, s] = m.useState({ top: 0, left: 0, width: 0, height: 0 }),
          i = (0, m.useRef)();
        return (
          (0, m.useLayoutEffect)(() => {
            if (o) {
              const e = i.current;
              s({
                top: e.offsetTop,
                left: e.offsetLeft,
                width: e.offsetWidth,
                height: e.offsetHeight,
              });
            }
          }, [o]),
          m.createElement(
            m.Fragment,
            null,
            m.createElement(
              "span",
              {
                ref: i,
                className: d()(t, T.EditableComponentInlineContainer),
                ...l,
              },
              m.createElement(A, {
                ...r,
                toolbar: n,
                visible: o && r.width > 0,
              }),
              a,
            ),
          )
        );
      }
      function B(e) {
        const {
          onEditClick: t,
          strEditDescription: n = (0, C.we)("#Button_Edit"),
          onDeleteClick: a,
          strDeleteDescription: o = (0, C.we)("#Button_Remove"),
          bStrongShadows: l = !1,
          children: r,
        } = e;
        return m.createElement(
          U,
          { bStrongShadows: l },
          r,
          t &&
            m.createElement(
              z,
              { onClick: t, description: n },
              m.createElement(D.ffu, null),
            ),
          a &&
            m.createElement(
              z,
              { onClick: a, description: o },
              m.createElement(D.sED, null),
            ),
        );
      }
      function U(e) {
        const { bStrongShadows: t, children: n } = e;
        return m.createElement(
          "span",
          { className: d()(T.EditableComponentToolbar, t && T.StrongShadows) },
          n,
        );
      }
      function z(e) {
        const { onClick: t, description: n, children: a } = e;
        return m.createElement(
          y.ff,
          { onClick: t, tooltip: n, className: T.FloatingToolbarButton },
          a,
        );
      }
      var O = n(12155),
        R = n(88997),
        F = n(60155),
        L = n(5068),
        P = n(9154),
        V = n(62490),
        H = n(84811),
        j = n(74005);
      function K(e, t) {
        const n = ee(t);
        if (n) return { node: t, nodeAttrs: n, clanImage: ae(e, n) };
      }
      function q(e) {
        const {
            node: t,
            imageNodeType: n,
            videoNodeType: a,
            editModel: o,
            schemaConfig: l,
            removeNode: s,
            update: i,
            focusView: c,
          } = e,
          [d, u, p] = (0, N.uD)(),
          E =
            (m.useCallback(() => {
              p(), c();
            }, [p, c]),
            o.GetClanSteamID()),
          _ = m.useMemo(() => {
            let e = [];
            return (
              t.descendants((t) => {
                (t.type != n && t.type != a) || e.push(t);
              }),
              e
            );
          }, [n, a, t]),
          g = m.useCallback((e) => i((0, r.M)(e)), [i]),
          v = "true" === t.attrs.autoadvance,
          [h, f] = Y(g, {
            autoAdvance: v,
            clanSteamID: E,
            imageNodeType: n,
            videoNodeType: a,
            carouselNodeType: t.type,
          }),
          b = m.useCallback(() => {
            h(_);
          }, [h, _]);
        return m.createElement(
          m.Fragment,
          null,
          f,
          m.createElement(
            G,
            null,
            m.createElement(B, {
              onDeleteClick: s,
              strDeleteDescription: (0, C.we)(
                "#EventEditor_CarouselEditor_RemoveCarousel",
              ),
              onEditClick: b,
              strEditDescription: (0, C.we)(
                "#EventEditor_CarouselEditor_EditCarousel",
              ),
            }),
            m.createElement(
              H.tH,
              null,
              m.createElement(
                M.B,
                { strTag: "carousel", args: {}, event: o.GetEventModel() },
                _.map((e, t) =>
                  m.createElement(ne, {
                    key: t,
                    node: e,
                    nodeAttrs: ee(e),
                    schemaConfig: l,
                    event: o.GetEventModel(),
                  }),
                ),
              ),
            ),
          ),
        );
      }
      function Y(e, t) {
        const n = t.carouselNodeType,
          [a, o] = m.useState(void 0),
          l = t.clanSteamID,
          r = m.useCallback(
            (e) => {
              o(e.map((e) => K(l, e)).filter(Boolean));
            },
            [l],
          ),
          s = m.useCallback(() => o(void 0), []),
          i = m.useCallback(
            (t, a) => {
              const o = n.create(
                { autoadvance: t ? "true" : null },
                a.map(({ node: e }) => e),
              );
              e(o);
            },
            [n, e],
          );
        return [
          r,
          m.createElement(
            P.EN,
            { active: void 0 !== a },
            m.createElement(W, {
              ...t,
              images: a,
              onCarouselImagesSelected: i,
              hideModal: s,
            }),
          ),
        ];
      }
      function Q(e) {
        const { nodeAttrs: t } = e;
        return "image" == t.type ? t.attrs.src : t.attrs.mp4 || t.attrs.webm;
      }
      function W(e) {
        var t;
        const {
            hideModal: n,
            images: a,
            onCarouselImagesSelected: o,
            clanSteamID: l,
            imageNodeType: r,
            videoNodeType: s,
          } = e,
          [i, c] = m.useState(a),
          [d, u] = m.useState(
            null !== (t = e.autoAdvance) && void 0 !== t && t,
          ),
          p = m.useCallback(
            (e, t) => {
              const n = K(l, t.create(e));
              if (!n)
                throw `Couldn't parse image ${t.name} - ${JSON.stringify(e)}`;
              c((e) => {
                const t = Q(n);
                return e.find((e) => Q(e) == t) ? e : [...e, n];
              });
            },
            [l],
          ),
          E = m.useCallback(() => {
            o(d, i), n();
          }, [o, n, d, i]),
          _ = m.useCallback((e) => {
            e.destination &&
              c((t) => V.yY(t.slice(), e.source.index, e.destination.index));
          }, []),
          { showInsertImageModal: v, imageModal: h } = oe({
            clanSteamID: l,
            imageNodeType: r,
            videoNodeType: s,
            onItemSelected: p,
          });
        return m.createElement(
          m.Fragment,
          null,
          h,
          m.createElement(
            P.mt,
            { active: !0, onDismiss: n },
            m.createElement(
              g.Y9,
              null,
              (0, C.we)("#EventEditor_CarouselEditor_EditCarousel"),
            ),
            m.createElement(
              g.nB,
              null,
              m.createElement(g.RF, {
                label: (0, C.we)("#EventEditor_CarouselEditor_AutoAdvance"),
                checked: d,
                onChange: u,
              }),
              m.createElement(
                j.JY,
                { onDragEnd: _ },
                m.createElement(
                  j.gL,
                  { droppableId: "droppable", direction: "horizontal" },
                  (e) =>
                    m.createElement(
                      "div",
                      {
                        className: L.CarouselList,
                        ...e.droppableProps,
                        ref: e.innerRef,
                      },
                      i.map((e, t) =>
                        m.createElement(
                          H.tH,
                          { key: Q(e) },
                          m.createElement(
                            j.sx,
                            { draggableId: Q(e), index: t },
                            (n, a, o) =>
                              m.createElement($, {
                                draggableProvided: n,
                                image: e,
                                setSelectedImages: c,
                                iImage: t,
                                cImages: i.length,
                              }),
                          ),
                        ),
                      ),
                      e.placeholder,
                    ),
                ),
              ),
              m.createElement(
                g.D0,
                {
                  bottomSeparator: "none",
                  label: (0, C.we)(
                    "#EventEditor_CarouselEditor_AddAnotherItem",
                  ),
                },
                m.createElement(
                  g.$n,
                  { type: "button", className: L.AddButton, onClick: v },
                  m.createElement(D.OMN, { className: L.PlusIcon }),
                ),
              ),
            ),
            m.createElement(
              g.wi,
              null,
              m.createElement(g.CB, { onCancel: n, onOK: E }),
            ),
          ),
        );
      }
      function $(e) {
        const {
            draggableProvided: t,
            image: n,
            setSelectedImages: a,
            iImage: o,
            cImages: l,
          } = e,
          r = m.useCallback(() => {
            a((e) => e.filter((e) => e != n));
          }, [n, a]);
        return m.createElement(
          "div",
          {
            className: d()(L.ListItem, L.DraggableItem),
            ref: t.innerRef,
            ...t.draggableProps,
            ...t.dragHandleProps,
          },
          m.createElement(
            "div",
            { className: L.ImagePreview },
            m.createElement("img", {
              src: E.z.ReplacementTokenToClanImageURL(n.node.attrs.src),
            }),
            m.createElement(
              "div",
              { className: L.Controls },
              m.createElement(
                "div",
                { className: L.Control },
                m.createElement(
                  y.ff,
                  { onClick: r, className: L.Button },
                  m.createElement(D.sED, null),
                ),
              ),
            ),
          ),
        );
      }
      function X(e) {
        const {
            schemaConfig: t,
            node: n,
            editModel: a,
            imageNodeType: o,
            videoNodeType: l,
            carouselNodeType: s,
            clanSteamID: i,
            setAttrs: c,
            focusView: d,
            removeNode: u,
            update: p,
          } = e,
          [E, _, g] = (0, I.uD)(),
          v = ee(n);
        let h = m.createElement(ne, {
          schemaConfig: t,
          event: a.GetEventModel(),
          node: n,
          nodeAttrs: v,
        });
        const f = m.useCallback(() => {
            d(), g();
          }, [d, g]),
          b = m.useCallback((e) => p((0, r.M)(e)), [p]),
          [C, w] = Y(b, {
            clanSteamID: i,
            imageNodeType: o,
            videoNodeType: l,
            carouselNodeType: s,
          }),
          k = m.useCallback(() => {
            C([n]);
          }, [n, C]),
          M = { createCarousel: s ? k : void 0, src: te(v) };
        return m.createElement(
          m.Fragment,
          null,
          E &&
            m.createElement(le, {
              bIsEdit: !0,
              nodeAttrs: v,
              hideModal: f,
              imageNodeType: o,
              videoNodeType: l,
              clanSteamID: i,
              onItemSelected: c,
            }),
          w,
          m.createElement(
            x,
            {
              className: S.ClanImageContainer,
              toolbar: m.createElement(J, {
                showModal: _,
                removeNode: u,
                contextMenuProps: M,
              }),
            },
            h,
          ),
        );
      }
      function J(e) {
        const { showModal: t, removeNode: n, contextMenuProps: a } = e,
          o = m.useCallback(
            (e) => {
              (0, R.lX)(m.createElement(Z, { ...a }), e, {
                bPreferPopTop: !1,
                bPreferPopLeft: !0,
              });
            },
            [a],
          );
        return m.createElement(
          B,
          { onEditClick: t, onDeleteClick: n },
          m.createElement(
            z,
            {
              onClick: o,
              description: (0, C.we)("#ActionButtonLabelContextMenu"),
            },
            m.createElement(O.h28, null),
          ),
        );
      }
      function Z(e) {
        const { createCarousel: t, src: n } = e,
          a = m.useCallback(() => {
            window.open(n);
          }, [n]);
        return m.createElement(
          F.tz,
          null,
          t &&
            m.createElement(
              F.kt,
              { onSelected: t },
              (0, C.we)("#EventEditor_CarouselEditor_CreateACarousel"),
            ),
          m.createElement(
            F.kt,
            { onSelected: a },
            (0, C.we)("#EventEditor_ImageEdit_PreviewImage"),
          ),
        );
      }
      function ee(e) {
        const { type: t, attrs: n } = e;
        return "image" == t.name
          ? { type: "image", attrs: n }
          : "video" == t.name
            ? { type: "video", attrs: n }
            : void 0;
      }
      function te(e) {
        return "image" == e.type
          ? e.attrs.src
          : "video" == e.type
            ? e.attrs.mp4 || e.attrs.webm
            : void 0;
      }
      function ne(e) {
        const { schemaConfig: t, event: n, node: a, nodeAttrs: o } = e,
          { type: l, attrs: r } = o,
          s = t.ConvertAttrToBBCodeArgs(a, r);
        return "image" == l
          ? m.createElement(M.B, {
              strTag: "img",
              args: s,
              event: n,
              showErrorInfo: !0,
            })
          : "video" == l
            ? m.createElement(M.B, {
                key: `${r.mp4}_${r.webm}`,
                strTag: "video",
                args: s,
                event: n,
                showErrorInfo: !0,
              })
            : ((0, i.z_)(l, "unhandled type: " + l), null);
      }
      function ae(e, t) {
        const { type: n, attrs: a } = t;
        let o;
        if (
          ("image" == n ? (o = a.src) : "video" == n && (o = a.mp4 || a.webm),
          o)
        ) {
          const [t] = E.z.ExtractHashFromBBCodeURL(o);
          return t && _.pU.GetClanImageByImageHash(e, t);
        }
      }
      function oe(e) {
        const {
            clanSteamID: t,
            imageNodeType: n,
            videoNodeType: a,
            onItemSelected: o,
            onHideModal: l,
          } = e,
          [r, s] = m.useState(),
          i = m.useCallback(() => {
            s(void 0), l && l();
          }, [l]);
        return {
          showInsertImageModal: m.useCallback(() => {
            s({ type: "image", attrs: { src: "" } });
          }, []),
          showInsertVideoModal: m.useCallback(() => {
            s({
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
          closeImageModal: i,
          imageModal:
            r &&
            m.createElement(le, {
              nodeAttrs: r,
              hideModal: i,
              onItemSelected: o,
              imageNodeType: n,
              videoNodeType: a,
              clanSteamID: t,
            }),
          activeModal: null == r ? void 0 : r.type,
        };
      }
      function le(e) {
        const {
            bIsEdit: t = !1,
            nodeAttrs: n,
            hideModal: a,
            clanSteamID: o,
            onItemSelected: l,
            imageNodeType: r,
            videoNodeType: s,
          } = e,
          { type: c, attrs: u } = n,
          p = (function (e, t) {
            return m.useMemo(() => ae(e, t), [e, t.type, t.attrs]);
          })(o, n),
          [E, _] = m.useState(() =>
            p ||
            ("image" == n.type && !n.attrs.src) ||
            ("video" == n.type && !n.attrs.mp4 && !n.attrs.webm)
              ? "uploaded"
              : "hotlink",
          ),
          v = m.useCallback(
            (e) => {
              l({ src: e }, r), a();
            },
            [l, a, r],
          ),
          h = m.useCallback(
            (e) => {
              l({ ...u, ...e }, s), a();
            },
            [u, l, a, s],
          ),
          b = m.useId();
        let w,
          I = null;
        if ("image" == c)
          (I = m.createElement(re, {
            active: "hotlink" == E,
            bIsEdit: t,
            hideModal: a,
            onImageSelected: v,
            src: u.src,
          })),
            (w = t
              ? (0, C.we)("#EventEditor_ReplaceImage_Title")
              : (0, C.we)("#EventEditor_InsertImage_Title"));
        else {
          if ("video" != c) return (0, i.z_)(c, "Unhandled type"), null;
          (I = m.createElement(se, {
            active: "hotlink" == E,
            bIsEdit: t,
            hideModal: a,
            attrs: u,
            setAttrs: l,
          })),
            (w = (0, C.we)("#EventEditor_EditVideo_Title"));
        }
        return m.createElement(
          f.mt,
          { active: !0, onDismiss: a, className: S.ClanImageModalContent },
          m.createElement(g.Y9, { id: b }, w),
          m.createElement(
            g.zW,
            { labelId: b, value: E, onChange: (e) => _(e) },
            m.createElement(g.a, { value: "uploaded" }, "Uploaded"),
            m.createElement(g.a, { value: "hotlink" }, "Enter URL"),
          ),
          m.createElement(
            "div",
            {
              className: d()(S.ClanImageModalMode, "uploaded" == E && S.Active),
            },
            m.createElement(ie, {
              bIsEdit: t,
              hideModal: a,
              onImageSelected: v,
              onVideoSelected: s && h,
              clanSteamID: o,
              selectedImage: p,
            }),
          ),
          m.createElement(
            "div",
            {
              className: d()(S.ClanImageModalMode, "hotlink" == E && S.Active),
            },
            I,
          ),
        );
      }
      function re(e) {
        const {
            active: t,
            bIsEdit: n,
            hideModal: a,
            onImageSelected: o,
            src: l,
          } = e,
          [r, s] = m.useState(l),
          i = m.useCallback((e) => s(e.currentTarget.value), []),
          c = n
            ? (0, C.we)("#EventEditor_ReplaceImage_Title")
            : (0, C.we)("#EventEditor_InsertImage_Title"),
          d = m.useRef();
        return (
          m.useEffect(() => {
            t && d.current.Focus();
          }, [t]),
          m.createElement(
            g.lV,
            { onSubmit: () => o(r) },
            m.createElement(
              g.nB,
              null,
              m.createElement(g.pd, {
                ref: d,
                value: r,
                onChange: i,
                label: (0, C.we)("#EventEditor_InsertImage_URL"),
              }),
            ),
            m.createElement(g.CB, {
              onCancel: a,
              strOKText: c,
              bOKDisabled: !r || r == l,
            }),
          )
        );
      }
      function se(e) {
        const {
            active: t,
            bIsEdit: n,
            hideModal: a,
            attrs: o,
            setAttrs: l,
          } = e,
          [r, s] = m.useState(o.mp4),
          [i, c] = m.useState(o.webm),
          [d, u] = m.useState(o.poster),
          [p, E] = m.useState(!!o.autoplay),
          [_, v] = m.useState(!!o.controls),
          h = m.useRef();
        m.useEffect(() => {
          t && h.current.Focus();
        }, [t]);
        return m.createElement(
          g.lV,
          {
            onSubmit: (e) => {
              l({
                ...o,
                mp4: r || void 0,
                webm: i || void 0,
                poster: d || void 0,
                autoplay: p,
                controls: _,
              }),
                a();
            },
          },
          m.createElement(
            g.nB,
            null,
            m.createElement(g.pd, {
              ref: h,
              value: r,
              onChange: (e) => s(e.currentTarget.value),
              label: (0, C.we)("#EventEditor_InsertVideo_InputMP4"),
            }),
            m.createElement(g.pd, {
              value: i,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, C.we)("#EventEditor_InsertVideo_InputWebM"),
            }),
            m.createElement(g.pd, {
              value: d,
              onChange: (e) => u(e.currentTarget.value),
              label: (0, C.we)("#EventEditor_InsertVideo_InputPoster"),
            }),
            m.createElement(g.Yh, {
              checked: p,
              onChange: E,
              label: (0, C.we)("#EventEditor_InsertVideo_InputAutoplay"),
            }),
            m.createElement(g.Yh, {
              checked: _,
              onChange: v,
              label: (0, C.we)("#EventEditor_InsertVideo_InputShowControls"),
            }),
          ),
          m.createElement(g.CB, {
            onCancel: a,
            strOKText: (0, C.we)("#EventEditor_EditVideo_Title"),
            bOKDisabled: !r && !i,
          }),
        );
      }
      function ie(e) {
        const {
            bIsEdit: t,
            hideModal: n,
            onImageSelected: a,
            onVideoSelected: o,
            clanSteamID: l,
          } = e,
          [r, s] = m.useState(null),
          [i, c] = m.useState(e.selectedImage),
          d = t
            ? (0, C.we)("#EventEditor_ReplaceImage_Title")
            : (0, C.we)("#EventEditor_InsertImage_Title"),
          p = m.useCallback(
            (e) => {
              switch (e.file_type) {
                case 4:
                  o && o({ mp4: (0, u.fw)(e) });
                  break;
                case 5:
                  o && o({ webm: (0, u.fw)(e) });
                  break;
                default:
                  a((0, u.fw)(e));
              }
            },
            [a, o],
          ),
          E = m.useCallback(
            (e, t) => {
              c(e), t && p(e);
            },
            [p],
          );
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            g.lV,
            { onSubmit: () => i && p(i), className: S.ClanImageGridForm },
            m.createElement(h.g, { fnSetImageSearch: s }),
            m.createElement(
              "div",
              { className: S.ClanImageGridContainer },
              m.createElement(v.ge, {
                clanAccountID: l.GetAccountID(),
                fileNameSearch: r,
                onImageSelected: E,
                selectedItem: i,
              }),
            ),
            m.createElement(
              g.wi,
              null,
              m.createElement(g.CB, {
                onCancel: n,
                strOKText: d,
                bOKDisabled: !i || i == e.selectedImage,
              }),
            ),
          ),
        );
      }
      function ce(e) {
        const { editModel: t, imageNode: n, videoNode: a, children: o } = e,
          l = m.useCallback(
            async (e) => {
              const o = t.GetClanSteamID(),
                l = new p.VE(o, null);
              if (!(await l.AddImage(e, t.GetCurEditLanguage())))
                throw "Error processing image upload";
              const r = await l.UploadAllImages();
              if (!r || 1 != Object.values(r).length)
                throw "Error uploading image";
              const s = Object.values(r)[0];
              if (!s.bSuccess || 1 != s.uploadResult.success)
                throw s.uploadResult.message;
              const i = de(
                _.pU.GetClanImageByImageHash(o, s.uploadResult.image_hash),
                n,
                a,
              );
              return (
                i.type == n &&
                  (await (0, w.DB)(
                    E.z.ReplacementTokenToClanImageURL(i.attrs.src),
                  )),
                i
              );
            },
            [t, n, a],
          );
        return n
          ? m.createElement(
              b.Xv,
              { ProcessFileUpload: l, bAllowImageHotLinking: !0 },
              o,
            )
          : o;
      }
      function de(e, t, n) {
        const a = (0, u.fw)(e);
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
      var me = n(96640),
        ue = n(79216);
      var pe = n(70995),
        Ee = n(74410),
        _e = n(72421),
        ge = n(52038),
        ve = n(63226);
      function he(e) {
        const {
            videoID: t,
            align: n,
            editModel: a,
            selected: o,
            setAttrs: l,
            focusView: r,
          } = e,
          [s, i, c] = (0, I.uD)(),
          d = m.useCallback(() => {
            c(), r();
          }, [c, r]),
          u = m.useCallback(
            (e, t) => {
              l({ videoID: e, align: t }), d();
            },
            [l, d],
          );
        return m.createElement(
          m.Fragment,
          null,
          s &&
            m.createElement(fe, {
              videoID: t,
              align: n,
              bEditing: !0,
              hideModal: d,
              onSave: u,
            }),
          m.createElement(
            G,
            { className: (0, ge.A)(ve.PreviewYoutubeEditor, o && ve.Selected) },
            m.createElement(B, {
              onEditClick: i,
              onDeleteClick: e.removeNode,
              bStrongShadows: !0,
            }),
            o && m.createElement("div", { className: ve.SelectionOverlay }),
            m.createElement(M.B, {
              event: a.GetEventModel(),
              strTag: "previewyoutube",
              args: { "": `${t};${n}` },
              showErrorInfo: !0,
            }),
          ),
        );
      }
      function fe(e) {
        const {
            videoID: t = "",
            align: n = "",
            bEditing: a = !1,
            hideModal: o,
            onSave: l,
          } = e,
          [r, s] = m.useState(n || Ee.V2.full),
          [i, c] = m.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [d, u] = m.useState(void 0),
          p = m.useCallback(() => {
            const { strVideoID: e } = (0, pe.XU)(i);
            return (
              e ? l(e, r) : u((0, C.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [i, r, l]),
          E = m.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return m.createElement(
          P.EN,
          { active: !0 },
          m.createElement(
            _e._,
            {
              strTitle: (0, C.we)("#EventEditor_InsertYouTube"),
              closeModal: o,
              strOKText: a
                ? (0, C.we)("#Button_Save")
                : (0, C.we)("#EventEditor_InsertYouTube"),
              onOK: p,
            },
            d && m.createElement("div", { className: ve.Error }, d),
            m.createElement(g.pd, {
              label: (0, C.we)("#EventEditor_InsertYouTube_URL"),
              placeholder: (0, C.we)("#EventEditor_InsertYouTube_Placholder"),
              value: i,
              ref: E,
              onChange: (e) => c(e.currentTarget.value),
            }),
            m.createElement(
              g.o1,
              { label: (0, C.we)("#EventEditor_InsertYouTube_Position") },
              m.createElement(g.Od, {
                checked: r == Ee.V2.left,
                onChange: (e) => e && s(Ee.V2.left),
                label: (0, C.we)("#EventEditor_InsertYouTube_Left"),
              }),
              m.createElement(g.Od, {
                checked: r == Ee.V2.right,
                onChange: (e) => e && s(Ee.V2.right),
                label: (0, C.we)("#EventEditor_InsertYouTube_Right"),
              }),
              m.createElement(g.Od, {
                checked: r == Ee.V2.full,
                onChange: (e) => e && s(Ee.V2.full),
                label: (0, C.we)("#EventEditor_InsertYouTube_Full"),
              }),
            ),
          ),
        );
      }
      var be = n(69001),
        Ce = n(25918),
        we = n(65946),
        Ie = n(26161),
        ke = n(87010),
        Se = n(78395),
        Me = n(21869),
        Te = n(1397),
        ye = n.n(Te),
        De = n(63556),
        Ne = n(44165),
        Ge = n(95695),
        Ae = n(99637),
        xe = n(91675),
        Be = n(14771),
        Ue = n(87937),
        ze = n(61819),
        Oe = n(88942),
        Re = n(78327),
        Fe = n(41735),
        Le = n.n(Fe),
        Pe = n(26408);
      function Ve(e) {
        const { hideModal: t, fnUpdateSession: n } = e,
          [a, o] = (0, m.useState)(() => $e(!0, null)),
          [l, r] = (0, m.useState)(() => Xe(!0, null)),
          [s] = (0, we.q3)(() => [l.location_type]);
        return m.createElement(
          Me.E,
          { active: !0 },
          m.createElement(
            Se.o0,
            {
              strTitle: (0, C.we)("#MeetSteam_create_title"),
              onOK: () => n(a, l),
              closeModal: () => {
                r(Xe(!0, null)), o($e(!0, null)), t();
              },
              bOKDisabled: null == !s,
            },
            m.createElement(
              "div",
              { className: ye().DialogCtn },
              m.createElement(Ke, { group: a, fnSetGroup: o }),
              m.createElement(Ye, { session: l, fnSetSession: r }),
            ),
          ),
        );
      }
      function He(e) {
        const { hideModal: t, groupInput: n, fnUpdateGroupSession: a } = e,
          [o, l] = (0, m.useState)(() => $e(!1, n));
        return m.createElement(
          Me.E,
          { active: !0 },
          m.createElement(
            Se.o0,
            {
              strTitle: (0, C.we)("#MeetSteam_edit_title"),
              onOK: () => {
                a(o), t();
              },
              onCancel: () => {
                l($e(!1, n)), t();
              },
            },
            m.createElement(
              "div",
              { className: ye().DialogCtn },
              m.createElement(Ke, { group: o, fnSetGroup: l }),
            ),
          ),
        );
      }
      function je(e) {
        const {
            bCreate: t,
            hideModal: n,
            sessionInput: a,
            fnUpdateSession: o,
          } = e,
          [l, r] = (0, m.useState)(() => Xe(t, a)),
          [s] = (0, we.q3)(() => [l.location_type]);
        return m.createElement(
          Me.E,
          { active: !0 },
          m.createElement(
            Se.o0,
            {
              strTitle: (0, C.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                o(l), n();
              },
              onCancel: () => {
                r(Xe(t, a)), n();
              },
              bOKDisabled: !s,
            },
            m.createElement(
              "div",
              { className: ye().DialogCtn },
              m.createElement(Ye, { session: l, fnSetSession: r }),
            ),
          ),
        );
      }
      function Ke(e) {
        const { group: t, fnSetGroup: n } = e,
          a = (0, De.E)();
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(g.pd, {
            type: "text",
            label: (0, C.we)("#MeetSteam_edit_session_name"),
            value: C.NT.Get(t.localized_session_title, a),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_title = C.NT.Set(
                o.localized_session_title,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          m.createElement(
            g.JU,
            null,
            (0, C.we)("#MeetSteam_edit_session_desc"),
          ),
          m.createElement("textarea", {
            className: (0, ge.A)(
              "DialogTextInputBase",
              ye().EventDescriptionField,
            ),
            value: C.NT.Get(t.localized_session_description, a),
            rows: 5,
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_description = C.NT.Set(
                o.localized_session_description,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          m.createElement(g.pd, {
            type: "text",
            label: "Intended Audience",
            tooltip:
              "A short descriptions for whom then event is designed for to help partners self select",
            value: C.NT.Get(t.localized_intended_audience, a),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_intended_audience = C.NT.Set(
                o.localized_intended_audience,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          m.createElement(
            g.JU,
            null,
            "FAQ ",
            m.createElement(Pe.o, {
              tooltip:
                "Optional FAQ section which appears in the pop-up display and hidden by default",
            }),
          ),
          m.createElement("textarea", {
            className: (0, ge.A)(
              "DialogTextInputBase",
              ye().EventDescriptionField,
            ),
            value: C.NT.Get(t.localized_sesssion_faq, a),
            rows: 5,
            onChange: (e) => {
              const o = { ...t };
              (o.localized_sesssion_faq = C.NT.Set(
                o.localized_sesssion_faq,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          m.createElement(g.Yh, {
            checked: t.ask_registration_question,
            onChange: (e) => {
              const a = { ...t };
              (a.ask_registration_question = e), n(a);
            },
            label:
              "Ask partner to tell us what they want to learn from the sessions",
          }),
          m.createElement(qe, { ...e }),
        );
      }
      function qe(e) {
        var t;
        const { group: n, fnSetGroup: a } = e,
          [o, l] = (0, m.useState)(
            (null === (t = n.group_visibility_tokens) || void 0 === t
              ? void 0
              : t.length) > 0,
          );
        return o
          ? m.createElement(
              m.Fragment,
              null,
              m.createElement(
                "div",
                null,
                "By default, all sessions are visibility to any partner wiht a list. We can limit visibility to users by adding tokens below. Multiple Meet Steam sections can be visible together if they share the same token. To make the tokens appears most friendly, we are limiting them to exactly 5 digits. Only one token can be set on the URL.",
              ),
              n.group_visibility_tokens.map((e, t) =>
                m.createElement(g.pd, {
                  key: "token" + e + "_" + t,
                  type: "number",
                  min: "10000",
                  max: "99999",
                  value: e || 1e4,
                  onChange: (e) => {
                    const o = { ...n };
                    (o.group_visibility_tokens[t] = Number.parseInt(
                      e.currentTarget.value,
                    )),
                      a(o);
                  },
                  label: "Visibility Token",
                }),
              ),
              m.createElement(
                g.$n,
                {
                  onClick: () => {
                    const e = { ...n };
                    (e.group_visibility_tokens = [
                      ...e.group_visibility_tokens,
                      1e4,
                    ]),
                      a(e);
                  },
                },
                "Add Token",
              ),
              Boolean(n.group_visibility_tokens.length > 0) &&
                m.createElement(
                  g.$n,
                  {
                    onClick: () => {
                      const e = { ...n };
                      (e.group_visibility_tokens =
                        e.group_visibility_tokens.slice(0, -1)),
                        a(e);
                    },
                  },
                  "Remove Last Token",
                ),
            )
          : m.createElement(g.Yh, {
              checked: !1,
              onChange: l,
              label: "Change Visibility Options",
            });
      }
      function Ye(e) {
        const { session: t, fnSetSession: n } = e,
          [a, o, l, r, s, i] = (0, we.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.max_capacity,
            t.max_per_team,
            t.location_type,
            t.in_person_time_zone,
          ]),
          c = [];
        for (let e = 0; e < 4; ++e) c.push({ data: e, label: e });
        const d = Math.max(0, Math.floor((o - a) / 60)),
          u = Intl.DateTimeFormat().resolvedOptions().timeZone,
          p = "in_person" === s ? (null != i ? i : ke.hh) : u;
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(We, {
            location_type: s,
            fnUpdateLocationAndTZ: (e, a) =>
              n({ ...t, location_type: e, in_person_time_zone: a }),
            in_person_time_zone: i,
          }),
          m.createElement("br", null),
          m.createElement(Ae.K, {
            strDescription: (0, C.we)("#MeetSteam_edit_start"),
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => a,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + Be.Kp.PerMinute * d }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          m.createElement("br", null),
          m.createElement(g.pd, {
            type: "number",
            min: 0,
            label: (0, C.we)("#MeetSteam_edit_duration"),
            onChange: (e) => {
              const a = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + Be.Kp.PerMinute * a });
            },
            value: d,
          }),
          m.createElement(Qe, {
            rtime_start: a,
            rtime_end: o,
            sDisplayTimeZone: p,
          }),
          m.createElement("br", null),
          m.createElement("br", null),
          m.createElement(
            "div",
            { className: ye().ParticipantRow },
            m.createElement(g.pd, {
              type: "number",
              value: l,
              label: (0, C.we)("#MeetSteam_edit_max_capacity"),
              min: 1,
              onChange: (e) =>
                n({
                  ...t,
                  max_capacity: Number.parseInt(e.currentTarget.value),
                }),
            }),
            m.createElement(g.m, {
              controlled: !0,
              label: (0, C.we)("#MeetSteam_edit_guest_count"),
              tooltip: (0, C.we)("#MeetSteam_edit_guest_count_ttip"),
              rgOptions: c,
              selectedOption: r,
              onChange: (e) => n({ ...t, max_per_team: e.data }),
            }),
          ),
        );
      }
      function Qe(e) {
        const { rtime_start: t, rtime_end: n, sDisplayTimeZone: a } = e,
          o = Ue.unix(t).tz(ke.hh),
          l = Ue.unix(t).tz(a),
          r = l.utcOffset() - o.utcOffset(),
          s = Ue.unix(n).tz(ke.hh),
          i = Ue.unix(n).tz(a),
          c = i.utcOffset() - s.utcOffset();
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            "div",
            null,
            (0, C.we)("#MeetSteam_edit_displayed_start"),
            ": ",
            (0, xe.P0)(l.unix() + 60 * r, !1, l.format("z")),
            " ",
          ),
          m.createElement(
            "div",
            null,
            (0, C.we)("#MeetSteam_edit_displayed_end"),
            ": ",
            (0, xe.P0)(i.unix() + 60 * c, !1, i.format("z")),
            " ",
          ),
        );
      }
      function We(e) {
        const {
            location_type: t,
            fnUpdateLocationAndTZ: n,
            in_person_time_zone: a,
          } = e,
          o = (function () {
            const e = (0, Oe.I)({
              queryKey: ["timezone"],
              queryFn: async () => {
                const e = `${Re.TS.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
                  t = {},
                  n = await Le().get(e, { params: t });
                return null == n ? void 0 : n.data.timezones;
              },
            });
            return e.isSuccess ? e.data : [];
          })(),
          l = m.useMemo(
            () => o.reduce((e, t) => e.set(t.name, t.friendly_name), new Map()),
            [o],
          ),
          r = (e) => {
            var t;
            return null !== (t = l.get(e)) && void 0 !== t ? t : e;
          },
          s = m.useId(),
          i = m.useId();
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            "div",
            { id: s, className: Ge.EventEditorTextTitle },
            (0, C.we)("#MeetSteam_edit_date_display_title"),
          ),
          m.createElement(
            "div",
            { id: i, className: Ge.EventEditorTextSubTitle },
            (0, C.we)("#MeetSteam_edit_date_display_desc"),
          ),
          m.createElement(
            g.zW,
            {
              labelId: s,
              descriptionId: i,
              value: t,
              onChange: (e) => n(e, a),
            },
            m.createElement(
              g.a,
              { value: "in_person" },
              (0, C.we)("#MeetSteam_edit_date_display_in_person"),
            ),
            m.createElement(
              g.a,
              { value: "virtual" },
              (0, C.we)("#MeetSteam_edit_date_display_virtual"),
            ),
          ),
          "in_person" === t &&
            m.createElement(ze.Ay, {
              styles: { option: (e) => ({ ...e, color: "#444444" }) },
              isSearchable: !0,
              isMulti: !1,
              options: o.map((e) => ({
                label: e.friendly_name,
                value: e.name,
              })),
              defaultMenuIsOpen: !1,
              value: a
                ? { label: r(a), value: a }
                : { label: r(ke.hh), value: ke.hh },
              onChange: (e) => n(t, e.value),
            }),
        );
      }
      function $e(e, t) {
        if (e) {
          const e = Ce.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, V.$Y)([], 31, null),
            localized_session_description: (0, V.$Y)([], 31, null),
            localized_sesssion_faq: (0, V.$Y)([], 31, null),
            localized_intended_audience: (0, V.$Y)([], 31, null),
            group_visibility_tokens: [],
            ask_registration_question: !1,
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
              localized_sesssion_faq: [...(t.localized_sesssion_faq || [])],
              localized_intended_audience: [
                ...(t.localized_intended_audience || []),
              ],
              group_visibility_tokens: [...(t.group_visibility_tokens || [])],
              ask_registration_question: t.ask_registration_question,
            }
          : ((0, i.wT)(
              !1,
              "HelperCreateOrCloneGroupSessionModel Expect Create or previous model",
            ),
            null);
      }
      function Xe(e, t) {
        if (e) {
          const e = Ne.HD.GetTimeNowWithOverride(),
            t = Ce.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
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
          : ((0, i.wT)(
              !1,
              "HelperCreateOrCloneSessionInstanceModel Expect Create or previous model",
            ),
            null);
      }
      function Je(e) {
        const t = Ce.mh.GetEditModel();
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
      function Ze(e) {
        const t = Ce.mh.GetEditModel();
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
      function et(e) {
        const t = Ce.mh.GetEditModel();
        for (
          let n = 0;
          n < t.GetEventModel().jsondata.meet_steam_schedules.length;
          ++n
        ) {
          const a = t.GetEventModel().jsondata.meet_steam_schedules[n];
          if (a.schedule_id == e) return { schedule: a, scheduleIndex: n };
        }
        return (
          "dev" == k.TS.WEB_UNIVERSE &&
            console.log(`Error: HelperFindMeetSteamSchedule ${e} is missing`),
          null
        );
      }
      var tt = n(33561);
      function nt(e) {
        var t;
        const { focusView: n, removeNode: a, group_id: o } = e,
          l = (0, tt.LU)(),
          r = (0, we.q3)(() => {
            var e;
            return null ===
              (e = l.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == o);
          }),
          [s, i, c] = (0, I.uD)(),
          d = m.useCallback(() => {
            n(), c();
          }, [n, c]),
          [u, p, E] = (0, I.uD)(),
          _ = m.useCallback(() => {
            n(), E();
          }, [n, E]);
        return r && l.GetClanAccountID() == (0, Ie.H)()
          ? m.createElement(
              "div",
              { className: ye().EditorCtn },
              m.createElement(at, { groupData: r, focusView: n }),
              m.createElement(
                "div",
                { className: ye().controls },
                m.createElement(
                  y.ff,
                  { onClick: i, tooltip: (0, C.we)("#Button_Edit") },
                  m.createElement(D.ffu, null),
                ),
                m.createElement(
                  y.ff,
                  { onClick: p, tooltip: (0, C.we)("#Button_Delete") },
                  m.createElement(D.sED, null),
                ),
                Boolean(
                  (null === (t = r.group_visibility_tokens) || void 0 === t
                    ? void 0
                    : t.length) > 0,
                ) &&
                  m.createElement(
                    y.ff,
                    {
                      onClick: () => {},
                      tooltip:
                        "Limited visibility to those with the appropriate URLs",
                    },
                    m.createElement(O.WLA, null),
                  ),
                Boolean(r.ask_registration_question) &&
                  m.createElement(
                    y.ff,
                    {
                      onClick: () => {},
                      tooltip:
                        "Will ask partner to provides questions for us for this session.",
                    },
                    m.createElement(O.vfN, null),
                  ),
              ),
              Boolean(s) &&
                m.createElement(He, {
                  hideModal: d,
                  groupInput: r,
                  fnUpdateGroupSession: (e) => {
                    const { groupIndex: t } = Ze(e.group_id),
                      n = Ce.mh.GetEditModel();
                    (n.GetEventModel().jsondata.meet_steam_groups[t] = e),
                      n.SetDirty(be.IQ.description);
                  },
                }),
              Boolean(u) &&
                m.createElement(
                  Me.E,
                  { active: !0 },
                  m.createElement(Se.o0, {
                    strTitle: (0, C.we)("#Button_Delete"),
                    strDescription: (0, C.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { groupIndex: e } = Ze(r.group_id),
                        t = Ce.mh.GetEditModel(),
                        n = [...t.GetEventModel().jsondata.meet_steam_groups];
                      n.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_groups = n),
                        t.SetDirty(be.IQ.description),
                        a();
                    },
                    closeModal: _,
                  }),
                ),
            )
          : m.createElement(
              "div",
              null,
              "Error: Cannot edit meet steam session group",
            );
      }
      function at(e) {
        const { groupData: t, focusView: n } = e,
          a = (0, we.q3)(() => t.sessions || []),
          [o, l, r] = (0, I.uD)(),
          s = m.useCallback(() => {
            n(), r();
          }, [n, r]);
        return t
          ? m.createElement(
              ke.jr,
              { groupData: t },
              a.map((e, o) =>
                m.createElement(ot, {
                  key: "timecol_" + t.group_id + "_" + e.id,
                  focusView: n,
                  sessionID: e.id,
                  bShowOR: o + 1 < a.length,
                }),
              ),
              m.createElement(
                y.ff,
                {
                  className: ye().AddNew,
                  onClick: l,
                  tooltip: (0, C.we)("#MeetSteam_add"),
                },
                m.createElement(D.OMN, null),
              ),
              o &&
                m.createElement(je, {
                  bCreate: !0,
                  hideModal: s,
                  fnUpdateSession: (e) => {
                    const n = Ce.mh.GetEditModel(),
                      a = [...t.sessions, e];
                    a.sort((e, t) => e.rtime_start - t.rtime_start),
                      (t.sessions = a),
                      n.SetDirty(be.IQ.description);
                  },
                }),
            )
          : null;
      }
      function ot(e) {
        const { sessionID: t, bShowOR: n, focusView: a } = e,
          [o, l] = (0, I.OP)(),
          r = (0, we.q3)(() => {
            const { groupIndex: e, sessionIndex: n } = Je(t);
            return Ce.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[n];
          }),
          [s, i, c] = (0, I.uD)(),
          d = m.useCallback(() => {
            a(), c();
          }, [a, c]),
          [u, p, E] = (0, I.uD)(),
          _ = m.useCallback(() => {
            a(), E();
          }, [a, E]);
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            "div",
            { className: ye().Column, ...l },
            m.createElement(ke.Tn, { sessionData: r }),
            Boolean(o) &&
              m.createElement(
                "div",
                { className: ye().controls },
                m.createElement(
                  y.ff,
                  { onClick: i, tooltip: (0, C.we)("#Button_Edit") },
                  m.createElement(D.ffu, null),
                ),
                m.createElement(
                  y.ff,
                  { onClick: p, tooltip: (0, C.we)("#Button_Delete") },
                  m.createElement(D.sED, null),
                ),
              ),
            Boolean(s) &&
              m.createElement(je, {
                bCreate: !1,
                hideModal: d,
                sessionInput: r,
                fnUpdateSession: (e) => {
                  const n = Ce.mh.GetEditModel(),
                    { groupIndex: a, sessionIndex: o } = Je(t),
                    l = [
                      ...n.GetEventModel().jsondata.meet_steam_groups[a]
                        .sessions,
                    ];
                  (l[o] = e),
                    l.sort((e, t) => e.rtime_start - t.rtime_start),
                    (n.GetEventModel().jsondata.meet_steam_groups[a].sessions =
                      l),
                    n.SetDirty(be.IQ.description);
                },
              }),
            Boolean(u) &&
              m.createElement(
                Me.E,
                { active: !0 },
                m.createElement(Se.o0, {
                  strTitle: (0, C.we)("#Button_Delete"),
                  strDescription: (0, C.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = Ce.mh.GetEditModel(),
                      { groupIndex: n, sessionIndex: a } = Je(t),
                      o = [
                        ...e.GetEventModel().jsondata.meet_steam_groups[n]
                          .sessions,
                      ];
                    o.splice(a, 1),
                      o.sort((e, t) => e.rtime_start - t.rtime_start),
                      (e.GetEventModel().jsondata.meet_steam_groups[
                        n
                      ].sessions = o),
                      e.SetDirty(be.IQ.description);
                  },
                  closeModal: _,
                }),
              ),
          ),
          n && m.createElement(ke.w3, null),
        );
      }
      var lt = n(36969),
        rt = n(38539),
        st = (n(9024), n(86807));
      function it(e) {
        const { schema: t } = e,
          {
            table: n,
            table_row: a,
            table_header: o,
            table_cell: l,
            paragraph: r,
          } = t.nodes,
          s = m.useCallback(
            (e, t, s) =>
              !rt.aH(e) &&
              (t &&
                t(
                  e.tr.insert(
                    e.selection.to,
                    (function (e, t, n, a, o) {
                      const l = () => n.createChecked(null, o.createChecked()),
                        r = () => a.createChecked(null, o.createChecked());
                      return e.createChecked(null, [
                        t.createChecked(null, [l(), l()]),
                        t.createChecked(null, [r(), r()]),
                      ]);
                    })(n, a, o, l, r),
                  ),
                ),
              !0),
            [n, a, o, l, r],
          );
        return n
          ? m.createElement(
              y.cQ,
              {
                tooltip: (0, C.we)("#FormattingToolbar_Tables_InsertTable"),
                command: s,
              },
              m.createElement(D._Q2, null),
            )
          : null;
      }
      function ct(e) {
        const { schema: t, className: n } = e,
          { callbacks: a, view: o } = (0, y.wU)(),
          [l, r] = m.useState(() => !!t.nodes.table && rt.aH(o.state));
        return (
          (0, I.hL)(
            a,
            m.useCallback((e) => r(!!t.nodes.table && rt.aH(e.state)), []),
          ),
          m.createElement(
            st.R,
            { visible: l, msAnimationDuration: 100 },
            m.createElement(
              y.Ez,
              { className: n },
              m.createElement(dt, { schema: t }),
            ),
          )
        );
      }
      function dt(e) {
        const { schema: t } = e;
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            y.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_AddRowBefore"),
              command: rt.JD,
            },
            m.createElement(D.BPi, null),
          ),
          m.createElement(
            y.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_AddRowAfter"),
              command: rt.gC,
            },
            m.createElement(D.fG_, null),
          ),
          m.createElement(
            y.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_DeleteRow"),
              command: rt.aR,
            },
            m.createElement(D.XW_, null),
          ),
          m.createElement(y.XQ, null),
          m.createElement(
            y.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_AddColumnBefore"),
              command: rt.RC,
            },
            m.createElement(D.l26, null),
          ),
          m.createElement(
            y.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_AddColumnAfter"),
              command: rt.GU,
            },
            m.createElement(D.ur3, null),
          ),
          m.createElement(
            y.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_DeleteColumn"),
              command: rt.gR,
            },
            m.createElement(D.dyV, null),
          ),
          m.createElement(y.XQ, null),
          m.createElement(
            y.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_HeaderRow"),
              command: rt.uC,
            },
            m.createElement(D.mLi, null),
          ),
          m.createElement(
            y.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_HeaderColumn"),
              command: rt.xV,
            },
            m.createElement(D.sXN, null),
          ),
          m.createElement(
            y.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_HeaderCell"),
              command: rt._G,
            },
            m.createElement(D.Maz, null),
          ),
          m.createElement(y.XQ, null),
          m.createElement(
            y.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_MergeCells"),
              command: rt.w7,
            },
            m.createElement(D.rnq, null),
          ),
          m.createElement(
            y.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_SplitCells"),
              command: rt.L0,
            },
            m.createElement(D.vB9, null),
          ),
          !1,
        );
      }
      var mt = n(44483),
        ut = n(44832),
        pt = n(28516),
        Et = n.n(pt);
      function _t(e, t) {
        if (e) {
          const e = Ce.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_schedules;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.schedule_id == t) >= 0);
          return { schedule_id: t, session_breaks: [] };
        }
        return t
          ? { ...t }
          : ((0, i.wT)(
              !1,
              "HelperCreateOrCloneMeetSteamSchedule Expect Create or previous model",
            ),
            null);
      }
      function gt(e) {
        const { hideModal: t, fnUpdateSession: n, inputScheduleModel: a } = e,
          o = (0, Ne.f1)(),
          l = (0, tt.LU)(),
          [r, s] = (0, m.useState)(() => _t(!Boolean(a), a)),
          [i, c, d] = (0, we.q3)(() => [
            r.location_type,
            r.in_person_time_zone,
            l.GetEventModel().jsondata.meet_steam_groups || [],
          ]),
          u = (0, m.useMemo)(() => {
            const e = d.reduce((e, t) => e.concat(t.sessions), []);
            return 0 == e.length ? o : Math.min(...e.map((e) => e.rtime_start));
          }, [d, o]);
        return m.createElement(
          Me.E,
          { active: !0 },
          m.createElement(
            Se.o0,
            {
              strTitle: Boolean(a)
                ? "Update Meet Steam Schedule"
                : "Create Meet Steam Schedule View",
              onOK: () => n(r),
              closeModal: () => {
                s(_t(!Boolean(a), a)), t();
              },
            },
            m.createElement(
              "div",
              { className: Et().DialogCtn },
              m.createElement(We, {
                location_type: i,
                in_person_time_zone: c,
                fnUpdateLocationAndTZ: (e, t) =>
                  s({ ...r, location_type: e, in_person_time_zone: t }),
              }),
              m.createElement(vt, {
                inputScheduleModel: r,
                fnUpdateSession: (e) => s(e),
                rtBreakStartingTime: u,
              }),
            ),
          ),
        );
      }
      function vt(e) {
        const {
            fnUpdateSession: t,
            inputScheduleModel: n,
            rtBreakStartingTime: a,
          } = e,
          [o, l] = (0, we.q3)(() => [
            n.session_breaks || [],
            n.in_person_time_zone || ke.hh,
          ]),
          r = (0, m.useCallback)(
            (e, a) => {
              const o = { ...n };
              (o.session_breaks = o.session_breaks
                ? [...o.session_breaks]
                : []),
                a < o.session_breaks.length
                  ? (o.session_breaks[a] = e)
                  : o.session_breaks.push(e),
                t(o);
            },
            [t, n],
          );
        return m.createElement(
          "div",
          null,
          m.createElement("div", null, "Scheduled Breaks"),
          o
            .sort((e, t) => t.rtime_start - e.rtime_start)
            .map((e, t) =>
              m.createElement(ht, {
                key: "breakedit" + e.break_id,
                sDisplayTimeZone: l,
                index: t,
                breakSession: e,
                fnOnUpdate: (e) => r(e, t),
              }),
            ),
          m.createElement(
            g.$n,
            {
              onClick: () => {
                var e;
                const t = n.session_breaks ? [...n.session_breaks] : [];
                let o = Math.floor(1 + 1e5 * Math.random());
                for (; t.findIndex((e) => e.break_id == o) >= 0; )
                  o = Math.floor(1 + 1e5 * Math.random());
                r(
                  {
                    break_id: o,
                    localized_break_description: (0, V.$Y)([], 31, null),
                    rtime_start: a,
                    rtime_end: a + Be.Kp.PerHour,
                  },
                  (null === (e = n.session_breaks) || void 0 === e
                    ? void 0
                    : e.length) || 0,
                );
              },
            },
            "+ Add Break",
          ),
        );
      }
      function ht(e) {
        const {
            breakSession: t,
            fnOnUpdate: n,
            index: a,
            sDisplayTimeZone: o,
          } = e,
          l = (0, De.E)(),
          [r, s, i, c] = (0, we.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.localized_break_description[l] || "",
            Math.max(0, Math.floor((t.rtime_end - t.rtime_start) / 60)),
          ]);
        return m.createElement(
          "div",
          null,
          m.createElement("div", null, "Break # ", a + 1),
          m.createElement("br", null),
          m.createElement(Ae.K, {
            strDescription: "Break Start Time",
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => r,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + Be.Kp.PerMinute * c }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          m.createElement("br", null),
          m.createElement(g.pd, {
            type: "number",
            min: 0,
            label: "Break duration in minutes",
            onChange: (e) => {
              const a = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + Be.Kp.PerMinute * a });
            },
            value: c,
          }),
          m.createElement(g.pd, {
            type: "text",
            label: "Break Description",
            value: i,
            onChange: (e) => {
              const a = { ...t };
              (a.localized_break_description[l] = e.currentTarget.value), n(a);
            },
          }),
          m.createElement(Qe, {
            rtime_start: r,
            rtime_end: s,
            sDisplayTimeZone: o,
          }),
        );
      }
      function ft(e) {
        const { focusView: t, removeNode: n, schedule_id: a } = e,
          o = (0, tt.LU)(),
          l = (0, we.q3)(() => {
            var e;
            return null ===
              (e = o.GetEventModel().jsondata.meet_steam_schedules) ||
              void 0 === e
              ? void 0
              : e.find((e) => e.schedule_id == a);
          }),
          [r, s, i] = (0, I.uD)(),
          c = m.useCallback(() => {
            t(), i();
          }, [t, i]),
          [d, u, p] = (0, I.uD)(),
          E = m.useCallback(() => {
            t(), p();
          }, [t, p]);
        return l && o.GetClanAccountID() == (0, Ie.H)()
          ? m.createElement(
              "div",
              { className: Et().EditorCtn },
              m.createElement(ke.fs, {
                eventModel: o.GetEventModel(),
                scheduleData: l,
              }),
              m.createElement(
                "div",
                { className: Et().controls },
                m.createElement(
                  y.ff,
                  { onClick: s, tooltip: (0, C.we)("#Button_Edit") },
                  m.createElement(D.ffu, null),
                ),
                m.createElement(
                  y.ff,
                  { onClick: u, tooltip: (0, C.we)("#Button_Delete") },
                  m.createElement(D.sED, null),
                ),
              ),
              Boolean(r) &&
                m.createElement(gt, {
                  hideModal: c,
                  inputScheduleModel: l,
                  fnUpdateSession: (e) => {
                    const { scheduleIndex: t } = et(e.schedule_id);
                    (o.GetEventModel().jsondata.meet_steam_schedules[t] = e),
                      o.SetDirty(be.IQ.description);
                  },
                }),
              Boolean(d) &&
                m.createElement(
                  Me.E,
                  { active: !0 },
                  m.createElement(Se.o0, {
                    strTitle: (0, C.we)("#Button_Delete"),
                    strDescription: (0, C.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { scheduleIndex: e } = et(l.schedule_id),
                        t = Ce.mh.GetEditModel(),
                        a = [
                          ...t.GetEventModel().jsondata.meet_steam_schedules,
                        ];
                      a.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_schedules = a),
                        t.SetDirty(be.IQ.description),
                        n();
                    },
                    closeModal: E,
                  }),
                ),
            )
          : m.createElement(
              "div",
              null,
              "Error: Cannot edit meet steam schedule view",
            );
      }
      var bt = n(10820),
        Ct = n(68033),
        wt = n(30193),
        It = n(14947);
      function kt(e) {
        const { schema: t } = e,
          { callbacks: n, view: a } = (0, y.wU)(),
          [o, l] = m.useState(!1),
          r = m.useCallback(
            (e, n) => {
              a.dispatch(
                a.state.tr.insert(
                  a.state.selection.to,
                  t.nodes.emoticon.create(null, t.text(e)),
                ),
              ),
                n || a.focus();
            },
            [a, t],
          ),
          s = m.useCallback(
            (e) => {
              l(!0);
              const t = (0, R.lX)(m.createElement(St, { OnSelected: r }), e, {
                bOverlapHorizontal: !0,
              });
              (0, It.z7)(
                () => !t.visible,
                () => l(!1),
              );
            },
            [r],
          );
        return m.createElement(
          y.ff,
          { tooltip: "#Editor_Emoticon", onClick: s, toggled: o },
          m.createElement(O.jZW, null),
        );
      }
      function St(e) {
        return (
          (0, wt.k3)(Ct.A),
          m.createElement(bt.iY, {
            emoticonStore: Ct.A,
            OnSelected: e.OnSelected,
          })
        );
      }
      const Mt = m.memo(function (e) {
        const {
          view: t,
          schema: n,
          refUpdateToolbar: a,
          className: o,
          clanSteamID: l,
          bSpellcheckEnabled: r,
          setSpellcheckEnabled: s,
        } = e;
        return m.createElement(
          y.bI,
          { refUpdateToolbar: a, view: t },
          m.createElement(
            "div",
            { className: e.className },
            m.createElement(
              y.Ez,
              { className: e.className },
              m.createElement(lt.MV, null),
              m.createElement(y.XQ, null),
              m.createElement(lt.Km, { schema: n }),
              m.createElement(y.XQ, null),
              n.marks.link && m.createElement(Tt, { schema: n }),
              m.createElement(y.XQ, null),
              m.createElement(lt.Hz, { schema: n }),
              m.createElement(lt.WJ, { schema: n, levels: 3 }),
              m.createElement(y.XQ, null),
              m.createElement(kt, { schema: n }),
              m.createElement(yt, { schema: n, clanSteamID: l }),
              m.createElement(it, { schema: n }),
              m.createElement(lt.C$, {
                schema: n,
                showIndentButtonsAsNeeded: !0,
              }),
              m.createElement(y.hK, null),
              s &&
                m.createElement(lt.Nt, {
                  bSpellcheckEnabled: r,
                  setSpellcheckEnabled: s,
                }),
              n.nodes.meetsteamsessiongroup &&
                m.createElement(Nt, { schema: n }),
              n.nodes.meetsteamscheduleview &&
                m.createElement(Gt, { schema: n }),
            ),
            m.createElement(ct, { className: e.className, schema: n }),
          ),
        );
      });
      function Tt(e) {
        const t = (0, ut.V9)();
        return m.createElement(lt.z9, { schema: e.schema, addtlAttrs: t });
      }
      function yt(e) {
        const { schema: t, clanSteamID: n } = e,
          { callbacks: a, view: o } = (0, y.wU)(),
          { image: l, video: r, previewyoutube: s } = t.nodes,
          i = m.useCallback(
            (e, t) => {
              o.dispatch(o.state.tr.insert(o.state.selection.to, t.create(e)));
            },
            [o],
          ),
          c = m.useCallback(() => o.focus(), [o]),
          {
            showInsertImageModal: d,
            showInsertVideoModal: u,
            imageModal: p,
            activeModal: E,
          } = oe({
            clanSteamID: n,
            imageNodeType: l,
            videoNodeType: r,
            onItemSelected: i,
            onHideModal: c,
          });
        return m.createElement(
          m.Fragment,
          null,
          p,
          l &&
            m.createElement(
              y.ff,
              {
                tooltip: "#EventEditor_InsertImage_Title",
                onClick: d,
                toggled: "image" == E,
              },
              m.createElement(D._V3, null),
            ),
          r &&
            m.createElement(
              y.ff,
              {
                tooltip: "#EventEditor_EditVideo_Title",
                onClick: u,
                toggled: "video" == E,
              },
              m.createElement(D.CeX, null),
            ),
          s && m.createElement(Dt, { schema: t }),
          (l || r || s) && m.createElement(y.XQ, null),
        );
      }
      function Dt(e) {
        const { schema: t } = e,
          { callbacks: n, view: a } = (0, y.wU)(),
          [o, l, r] = (0, N.uD)(),
          s = m.useCallback(() => {
            r(), a.focus();
          }, [r, a]),
          i = m.useCallback(
            (e, n) => {
              !(function (e, t, n, a = Ee.V2.left) {
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
        return m.createElement(
          m.Fragment,
          null,
          o && m.createElement(fe, { hideModal: s, onSave: i }),
          m.createElement(
            y.ff,
            { tooltip: "#EventEditor_InsertYouTube", onClick: l, toggled: o },
            m.createElement("img", { src: mt.A }),
          ),
        );
      }
      function Nt(e) {
        const { schema: t } = e,
          { callbacks: n, view: a } = (0, y.wU)(),
          o = (0, tt.LU)(),
          [l, r, s] = (0, N.uD)(),
          i = m.useCallback(() => {
            s(), a.focus();
          }, [s, a]),
          c = m.useCallback(
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
                i();
            },
            [t, a, i, o],
          );
        if ((null == o ? void 0 : o.GetClanAccountID()) == (0, Ie.H)())
          return m.createElement(
            m.Fragment,
            null,
            l && m.createElement(Ve, { hideModal: i, fnUpdateSession: c }),
            m.createElement(
              y.ff,
              { tooltip: "#MeetSteam_add_group_ttip", onClick: r, toggled: l },
              m.createElement("img", { src: mt.A }),
            ),
          );
      }
      function Gt(e) {
        const { schema: t } = e,
          { callbacks: n, view: a } = (0, y.wU)(),
          o = (0, tt.LU)(),
          [l, r, s] = (0, N.uD)(),
          i = m.useCallback(() => {
            s(), a.focus();
          }, [s, a]),
          c = m.useCallback(
            (e) => {
              o.GetEventModel().jsondata.meet_steam_schedules ||
                (o.GetEventModel().jsondata.meet_steam_schedules = []),
                o.GetEventModel().jsondata.meet_steam_schedules.push({ ...e }),
                (function (e, t, n) {
                  e.dispatch(
                    e.state.tr.insert(
                      e.state.selection.to,
                      t.create({ schedule_id: n }),
                    ),
                  );
                })(a, t.nodes.meetsteamscheduleview, e.schedule_id),
                i();
            },
            [t, a, i, o],
          );
        if ((null == o ? void 0 : o.GetClanAccountID()) == (0, Ie.H)())
          return m.createElement(
            m.Fragment,
            null,
            l &&
              m.createElement(gt, {
                hideModal: i,
                inputScheduleModel: null,
                fnUpdateSession: c,
              }),
            m.createElement(
              y.ff,
              {
                tooltip: "#MeetSteam_add_schedule_ttip",
                onClick: r,
                toggled: l,
              },
              m.createElement("img", { src: mt.A }),
            ),
          );
      }
      var At = n(75844),
        xt = n(90316),
        Bt = n.n(xt),
        Ut = n(1805),
        zt = n(81962);
      function Ot(e) {
        const { schema: t, emoticonStore: n } = e,
          a = t.nodes.emoticon;
        (0, wt.k3)(n),
          (0, l.c$)(
            m.useMemo(
              () => (0, ue.sM)({ rules: [Ft(/:([a-zA-Z0-9_]+):$/, a, n)] }),
              [a, n],
            ),
          );
        const o = m.useMemo(
          () => [
            {
              type: a,
              component: Rt,
              readProps: (e) => ({ emoticonStore: n, emoticon: e.textContent }),
            },
          ],
          [a, n],
        );
        return m.createElement(r.U, { specs: o });
      }
      function Rt(e) {
        const { selected: t, emoticonStore: n, emoticon: a } = e;
        (0, wt.k3)(n);
        if (n.BHasEmoticon(a)) {
          const e = t
            ? { background: "#54a5d4", filter: "brightness(1.2)" }
            : void 0;
          return m.createElement(
            "span",
            { style: e },
            m.createElement(zt.n, { emoticon: a }),
          );
        }
        return `:${a}:`;
      }
      function Ft(e, t, n) {
        return new ue.fV(e, (e, a, o, l) => {
          const r = a[1];
          if (!n.BHasEmoticon(r)) return null;
          const s = t.create(null, e.schema.text(r));
          return e.tr.replaceWith(o, l, s);
        });
      }
      var Lt = n(73560),
        Pt = n(91254);
      function Vt(e) {
        const { editModel: t, href: n, setAttrs: a } = e,
          o = (0, Lt.W7)(n);
        if (o) {
          const a = o.fnBBComponent(n, {
            partnerEventStore: Pt.O3,
            event: t.GetEventModel(),
          });
          return m.createElement(
            x,
            {
              toolbar: m.createElement(Ht, {
                removeNode: e.removeNode,
                href: n,
              }),
            },
            a,
          );
        }
        return m.createElement("a", { href: n }, n);
      }
      function Ht(e) {
        const { href: t, removeNode: n } = e;
        return m.createElement(
          B,
          { onDeleteClick: n },
          m.createElement(
            z,
            {
              onClick: () => window.open(t),
              description: (0, C.we)("#ContextMenu_OpenLinkInNewWindow"),
            },
            m.createElement(D.YNO, null),
          ),
        );
      }
      const jt = (0, At.PA)(function (e) {
        const { editModel: t } = e,
          n = t.GetEventModel().loadedAllLanguages,
          a = t.GetCurEditLanguage();
        return n
          ? m.createElement(Kt, { ...e, eCurrentEditLanguage: a })
          : null;
      });
      const Kt = m.memo(function (e) {
          const {
              editModel: t,
              refOnInsertImage: n,
              limitBBCode: l,
              eCurrentEditLanguage: r,
            } = e,
            [s, c] = m.useState(),
            d = m.useMemo(() => (0, me.u)(l), [l]),
            [p, E] = m.useState();
          m.useEffect(() => {
            E(
              (function (e, t, n) {
                let o = t.GetDescription(n);
                return (
                  (o =
                    null == o
                      ? void 0
                      : o.replace(
                          wt.pN.GetUnvalidatedEmoticonReplaceRegex(),
                          "[emoticon]$1[/emoticon]",
                        )),
                  new a.n(e, o, (e) => t.SetDescription(n, e))
                );
              })(d, t, r),
            );
          }, [d, t, r]);
          const _ = m.useRef(void 0);
          (0, o.i)(p, { msAutosaveTimeout: 1e3 });
          const { nodes: g, marks: v } = d.pm_schema;
          return (
            (function (e, t, n, a, o) {
              m.useEffect(() => {
                if (!o || !t) return;
                const l = (e, l) => {
                  let r;
                  switch (l) {
                    case u._o.k_eInsertFullImage:
                      r = t.create({ src: (0, u.fw)(e) });
                      break;
                    case u._o.k_eInsertThumbnail:
                      r = t.create({ src: (0, u.fw)(e, !0) }, null, [
                        a.create({ href: (0, u.fw)(e) }),
                      ]);
                      break;
                    case u._o.k_eInsertVideo:
                      let o;
                      4 == e.file_type
                        ? (o = { mp4: (0, u.fw)(e) })
                        : 5 == e.file_type && (o = { webm: (0, u.fw)(e) }),
                        o && n && (r = n.create(o));
                      break;
                    case u._o.k_eShowImageGroup:
                      break;
                    default:
                      (0, i.z_)(l, `Unhandled insert type ${l}`);
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
            })(n, g.image, g.video, v.link, s),
            m.createElement(
              ce,
              { editModel: t, imageNode: g.image, videoNode: g.video },
              m.createElement(
                "div",
                { className: Bt().EventDescriptionContainer },
                m.createElement(Mt, {
                  view: s,
                  schema: d.pm_schema,
                  refUpdateToolbar: _,
                  className: Bt().ToolBar,
                  clanSteamID: t.GetClanSteamID(),
                }),
                m.createElement(
                  "div",
                  { className: Bt().EventDescriptionArea },
                  m.createElement(
                    Ut.l,
                    {
                      pmState: p,
                      className: (0, ge.A)(
                        Bt().EventDescriptionRichField,
                        Bt().EventDetailsBody,
                      ),
                      refOnUpdate: _,
                      refView: c,
                      panelProps: { onBlur: () => p.CommitChanges() },
                    },
                    m.createElement(qt, { eventSchemaConfig: d, editModel: t }),
                  ),
                ),
              ),
            )
          );
        }),
        qt = m.memo(function (e) {
          const { eventSchemaConfig: t, editModel: n } = e,
            { marks: a, nodes: o } = t.pm_schema,
            l = (function (e, t, n) {
              const a = m.useCallback(
                (a) => {
                  const o = `^https?://${k.TS.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)(?<extension>\\.[^\\.]*)$`,
                    l = a.match(o);
                  if (l && l.groups.clanid == e.GetClanAccountID().toString()) {
                    const a = _.pU.GetClanImageByImageHash(
                      e.GetClanSteamID(),
                      l.groups.filename,
                    );
                    let o = a && de(a, t, n);
                    if (o) return o;
                  }
                  return "default";
                },
                [e, t, n],
              );
              return t ? a : void 0;
            })(n, o.image, o.video),
            r = (function (e, t) {
              const n = m.useCallback(
                (e) => ((0, Lt.yO)(e) ? t.create({ href: e }) : "default"),
                [t],
              );
              return t ? n : void 0;
            })(0, o.dynamiclink),
            i = m.useCallback(
              (...e) => {
                let t = "default";
                return (
                  l && (t = l(...e)), "default" == t && r && (t = r(...e)), t
                );
              },
              [l, r],
            );
          return m.createElement(
            m.Fragment,
            null,
            m.createElement(s.W, {
              linkMarkType: a.link,
              onURLPasted: i,
              schema: t.pm_schema,
            }),
            o.image && m.createElement(b.pw, { nodeType: o.image }),
            m.createElement(Yt, {
              schemaConfig: t,
              editModel: n,
              clanSteamID: n.GetClanSteamID(),
            }),
            m.createElement(Ot, { emoticonStore: Ct.A, schema: t.pm_schema }),
          );
        });
      function Yt(e) {
        const { schemaConfig: t, editModel: n, clanSteamID: a } = e,
          o = t.pm_schema,
          s = m.useMemo(
            () =>
              (function (e) {
                return ue.sM({ rules: [ue.tG(/^>$/, e.nodes.quote)] });
              })(o),
            [o],
          );
        (0, l.c$)(s);
        const i = o.nodes,
          c = i.image,
          d = i.video,
          u = i.carousel,
          p = m.useCallback(
            (e, o) => ({
              schemaConfig: t,
              node: o,
              imageNodeType: c,
              videoNodeType: d,
              carouselNodeType: u,
              editModel: n,
              clanSteamID: a,
            }),
            [t, c, d, u, n, a],
          ),
          E = m.useMemo(
            () => [
              i.previewyoutube && {
                type: i.previewyoutube,
                component: he,
                readProps: (e) => ({
                  videoID: e.attrs.videoID,
                  align: e.attrs.align,
                  editModel: n,
                }),
              },
              c && { type: c, component: X, readProps: (e) => p("image", e) },
              d && { type: d, component: X, readProps: (e) => p("video", e) },
              i.meetsteamsessiongroup && {
                type: i.meetsteamsessiongroup,
                component: nt,
                readProps: (e) => ({ group_id: e.attrs.group_id }),
              },
              i.meetsteamscheduleview && {
                type: i.meetsteamscheduleview,
                component: ft,
                readProps: (e) => ({ schedule_id: e.attrs.schedule_id }),
              },
              i.dynamiclink && {
                type: i.dynamiclink,
                component: Vt,
                readProps: (e) => ({ editModel: n, href: e.attrs.href }),
              },
              i.carousel && {
                type: i.carousel,
                component: q,
                readProps: (e) => ({
                  node: e,
                  imageNodeType: c,
                  videoNodeType: d,
                  schemaConfig: t,
                  editModel: n,
                }),
              },
            ],
            [i, c, d, n, p, t],
          );
        return m.createElement(r.U, { specs: E });
      }
    },
  },
]);

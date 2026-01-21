/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3772],
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
        ClanImageContainer: "_1TEbObXeFqUF-IRZKx0Qg5",
        Selected: "_3VVyv-d-F-7paQgn90RTr0",
        "extra-asset-blink": "_3AFR3dAEjYGOiz7dgTms8Y",
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
    63287: (e) => {
      e.exports = {
        DialogCtn: "_9JDWJYvoHTETKmebCO7iE",
        PollArea: "_1h-JdwvtVK38j8M4EXeUah",
        OptionInset: "_5o_Ifm1O6jf-4Iq4Kv07F",
        AdminOptions: "_1Kt8VfgLBvg0tD86og8ps7",
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
    16722: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => Sn });
      var l = n(90286),
        o = n(26555),
        a = n(22145),
        r = n(69956),
        s = n(28106),
        i = n(81393),
        c = n(64238),
        d = n.n(c),
        m = n(90626),
        u = n(81047),
        p = n(28954),
        _ = n(27666),
        E = n(86355),
        v = n(68255),
        f = n(2805),
        g = n(36509),
        h = n(83882),
        b = n(71696),
        C = n(61859),
        w = n(27650),
        M = n(73745),
        k = n(30470),
        I = n(21134),
        S = n(94429),
        y = n(6941),
        D = n(30175),
        T = n(4869),
        N = n(86927);
      function U(e) {
        const { className: t, ...n } = e;
        return m.createElement("div", {
          className: d()(t, y.EditableComponentToolbarContainer),
          ...n,
        });
      }
      function G(e) {
        const {
            toolbar: t,
            top: n,
            left: l,
            width: o,
            height: a,
            visible: r,
          } = e,
          s = {
            left: `${l}px`,
            top: `${n}px`,
            width: `${o}px`,
            position: "absolute",
          },
          i = o < 120;
        return (
          (a < 80 || i) && ((s.top = n - 32 - 16 + "px"), (s.height = "48px")),
          m.createElement(
            "div",
            {
              style: s,
              className: d()(
                y.InlineHoverContainer,
                i && y.WidthConstrained,
                !r && y.Hidden,
              ),
            },
            t,
          )
        );
      }
      function P(e) {
        const { className: t, toolbar: n, children: l } = e,
          [o, a] = (0, N.OP)(),
          [r, s] = m.useState({ top: 0, left: 0, width: 0, height: 0 }),
          i = (0, m.useRef)(void 0);
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
                className: d()(t, y.EditableComponentInlineContainer),
                ...a,
              },
              m.createElement(G, {
                ...r,
                toolbar: n,
                visible: o && r.width > 0,
              }),
              l,
            ),
          )
        );
      }
      function A(e) {
        const {
          onEditClick: t,
          strEditDescription: n = (0, C.we)("#Button_Edit"),
          onDeleteClick: l,
          strDeleteDescription: o = (0, C.we)("#Button_Remove"),
          bStrongShadows: a = !1,
          children: r,
        } = e;
        return m.createElement(
          O,
          { bStrongShadows: a },
          r,
          t &&
            m.createElement(
              x,
              { onClick: t, description: n },
              m.createElement(T.ffu, null),
            ),
          l &&
            m.createElement(
              x,
              { onClick: l, description: o },
              m.createElement(T.sED, null),
            ),
        );
      }
      function O(e) {
        const { bStrongShadows: t, children: n } = e;
        return m.createElement(
          "span",
          { className: d()(y.EditableComponentToolbar, t && y.StrongShadows) },
          n,
        );
      }
      function x(e) {
        const { onClick: t, description: n, children: l } = e;
        return m.createElement(
          D.ff,
          { onClick: t, tooltip: n, className: y.FloatingToolbarButton },
          l,
        );
      }
      var B = n(12155),
        V = n(88997),
        z = n(60155),
        R = n(5068),
        F = n(64753),
        L = n(9154),
        j = n(62490),
        Y = n(84811),
        H = n(32728);
      function K(e, t) {
        const n = te(t);
        if (n) return { node: t, nodeAttrs: n, clanImage: oe(e, n) };
      }
      function q(e) {
        const {
            node: t,
            imageNodeType: n,
            videoNodeType: l,
            editModel: o,
            schemaConfig: a,
            removeNode: s,
            update: i,
            focusView: c,
          } = e,
          [d, u, p] = (0, F.uD)(),
          _ =
            (m.useCallback(() => {
              p(), c();
            }, [p, c]),
            o.GetClanSteamID()),
          E = m.useMemo(() => {
            let e = [];
            return (
              t.descendants((t) => {
                (t.type != n && t.type != l) || e.push(t);
              }),
              e
            );
          }, [n, l, t]),
          v = m.useCallback((e) => i((0, r.M)(e)), [i]),
          f = "true" === t.attrs.autoadvance,
          [g, h] = Q(v, {
            autoAdvance: f,
            clanSteamID: _,
            imageNodeType: n,
            videoNodeType: l,
            carouselNodeType: t.type,
          }),
          b = m.useCallback(() => {
            g(E);
          }, [g, E]);
        return m.createElement(
          m.Fragment,
          null,
          h,
          m.createElement(
            U,
            null,
            m.createElement(A, {
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
              Y.tH,
              null,
              m.createElement(
                S.Bm,
                {
                  strTag: "carousel",
                  args: {},
                  rawargs: "",
                  event: o.GetEventModel(),
                },
                E.map((e, t) =>
                  m.createElement(le, {
                    key: t,
                    node: e,
                    nodeAttrs: te(e),
                    schemaConfig: a,
                    event: o.GetEventModel(),
                  }),
                ),
              ),
            ),
          ),
        );
      }
      function Q(e, t) {
        const n = t.carouselNodeType,
          [l, o] = m.useState(void 0),
          a = t.clanSteamID,
          r = m.useCallback(
            (e) => {
              o(e.map((e) => K(a, e)).filter(Boolean));
            },
            [a],
          ),
          s = m.useCallback(() => o(void 0), []),
          i = m.useCallback(
            (t, l) => {
              const o = n.create(
                { autoadvance: t ? "true" : null },
                l.map(({ node: e }) => e),
              );
              e(o);
            },
            [n, e],
          );
        return [
          r,
          m.createElement(
            L.EN,
            { active: void 0 !== l },
            m.createElement(W, {
              ...t,
              images: l,
              onCarouselImagesSelected: i,
              hideModal: s,
            }),
          ),
        ];
      }
      function $(e) {
        const { nodeAttrs: t } = e;
        return "image" == t.type ? t.attrs.src : t.attrs.mp4 || t.attrs.webm;
      }
      function W(e) {
        var t;
        const {
            hideModal: n,
            images: l,
            onCarouselImagesSelected: o,
            clanSteamID: a,
            imageNodeType: r,
            videoNodeType: s,
          } = e,
          [i, c] = m.useState(l),
          [d, u] = m.useState(
            null !== (t = e.autoAdvance) && void 0 !== t && t,
          ),
          p = m.useCallback(
            (e, t) => {
              const n = K(a, t.create(e));
              if (!n)
                throw `Couldn't parse image ${t.name} - ${JSON.stringify(e)}`;
              c((e) => {
                const t = $(n);
                return e.find((e) => $(e) == t) ? e : [...e, n];
              });
            },
            [a],
          ),
          _ = m.useCallback(() => {
            o(d, i), n();
          }, [o, n, d, i]),
          E = m.useCallback((e) => {
            e.destination &&
              c((t) => j.yY(t.slice(), e.source.index, e.destination.index));
          }, []),
          { showInsertImageModal: f, imageModal: g } = ae({
            clanSteamID: a,
            imageNodeType: r,
            videoNodeType: s,
            onItemSelected: p,
          });
        return m.createElement(
          m.Fragment,
          null,
          g,
          m.createElement(
            L.mt,
            { active: !0, onDismiss: n },
            m.createElement(
              v.Y9,
              null,
              (0, C.we)("#EventEditor_CarouselEditor_EditCarousel"),
            ),
            m.createElement(
              v.nB,
              null,
              m.createElement(v.RF, {
                label: (0, C.we)("#EventEditor_CarouselEditor_AutoAdvance"),
                checked: d,
                onChange: u,
              }),
              m.createElement(
                H.JY,
                { onDragEnd: E },
                m.createElement(
                  H.gL,
                  { droppableId: "droppable", direction: "horizontal" },
                  (e) =>
                    m.createElement(
                      "div",
                      {
                        className: R.CarouselList,
                        ...e.droppableProps,
                        ref: e.innerRef,
                      },
                      i.map((e, t) =>
                        m.createElement(
                          Y.tH,
                          { key: $(e) },
                          m.createElement(
                            H.sx,
                            { draggableId: $(e), index: t },
                            (n, l, o) =>
                              m.createElement(J, {
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
                v.xh,
                {
                  bottomSeparator: "none",
                  label: (0, C.we)(
                    "#EventEditor_CarouselEditor_AddAnotherItem",
                  ),
                  className: R.AddButton,
                  onClick: f,
                },
                m.createElement(T.OMN, { className: R.PlusIcon }),
              ),
            ),
            m.createElement(
              v.wi,
              null,
              m.createElement(v.CB, { onCancel: n, onOK: _ }),
            ),
          ),
        );
      }
      function J(e) {
        const {
            draggableProvided: t,
            image: n,
            setSelectedImages: l,
            iImage: o,
            cImages: a,
          } = e,
          r = m.useCallback(() => {
            l((e) => e.filter((e) => e != n));
          }, [n, l]);
        return m.createElement(
          "div",
          {
            className: d()(R.ListItem, R.DraggableItem),
            ref: t.innerRef,
            ...t.draggableProps,
            ...t.dragHandleProps,
          },
          m.createElement(
            "div",
            { className: R.ImagePreview },
            m.createElement("img", {
              src: _.z.ReplacementTokenToClanImageURL(n.node.attrs.src),
            }),
            m.createElement(
              "div",
              { className: R.Controls },
              m.createElement(
                "div",
                { className: R.Control },
                m.createElement(
                  D.ff,
                  { onClick: r, className: R.Button },
                  m.createElement(T.sED, null),
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
            editModel: l,
            imageNodeType: o,
            videoNodeType: a,
            carouselNodeType: s,
            clanSteamID: i,
            setAttrs: c,
            focusView: u,
            removeNode: p,
            update: _,
            selected: E,
          } = e,
          [v, f, g] = (0, M.uD)(),
          h = te(n);
        let b = m.createElement(le, {
          schemaConfig: t,
          event: l.GetEventModel(),
          node: n,
          nodeAttrs: h,
        });
        const C = m.useCallback(() => {
            u(), g();
          }, [u, g]),
          w = m.useCallback((e) => _((0, r.M)(e)), [_]),
          [k, S] = Q(w, {
            clanSteamID: i,
            imageNodeType: o,
            videoNodeType: a,
            carouselNodeType: s,
          }),
          y = m.useCallback(() => {
            k([n]);
          }, [n, k]),
          D = { createCarousel: s ? y : void 0, src: ne(h) };
        let T = d()(I.ClanImageContainer, E && I.Selected);
        return m.createElement(
          m.Fragment,
          null,
          v &&
            m.createElement(re, {
              bIsEdit: !0,
              nodeAttrs: h,
              hideModal: C,
              imageNodeType: o,
              videoNodeType: a,
              clanSteamID: i,
              onItemSelected: c,
            }),
          S,
          m.createElement(
            P,
            {
              className: T,
              toolbar: m.createElement(Z, {
                showModal: f,
                removeNode: p,
                contextMenuProps: D,
              }),
            },
            b,
          ),
        );
      }
      function Z(e) {
        const { showModal: t, removeNode: n, contextMenuProps: l } = e,
          o = m.useCallback(
            (e) => {
              (0, V.lX)(m.createElement(ee, { ...l }), e, {
                bPreferPopTop: !1,
                bPreferPopLeft: !0,
              });
            },
            [l],
          );
        return m.createElement(
          A,
          { onEditClick: t, onDeleteClick: n },
          m.createElement(
            x,
            {
              onClick: o,
              description: (0, C.we)("#ActionButtonLabelContextMenu"),
            },
            m.createElement(B.h28, null),
          ),
        );
      }
      function ee(e) {
        const { createCarousel: t, src: n } = e,
          l = m.useCallback(() => {
            window.open(n);
          }, [n]);
        return m.createElement(
          z.tz,
          null,
          t &&
            m.createElement(
              z.kt,
              { onSelected: t },
              (0, C.we)("#EventEditor_CarouselEditor_CreateACarousel"),
            ),
          m.createElement(
            z.kt,
            { onSelected: l },
            (0, C.we)("#EventEditor_ImageEdit_PreviewImage"),
          ),
        );
      }
      function te(e) {
        const { type: t, attrs: n } = e;
        return "image" == t.name
          ? { type: "image", attrs: n }
          : "video" == t.name
            ? { type: "video", attrs: n }
            : void 0;
      }
      function ne(e) {
        return "image" == e.type
          ? e.attrs.src
          : "video" == e.type
            ? e.attrs.mp4 || e.attrs.webm
            : void 0;
      }
      function le(e) {
        const { schemaConfig: t, event: n, node: l, nodeAttrs: o } = e,
          { type: a, attrs: r } = o,
          s = t.ConvertAttrToBBCodeArgs(l, r);
        return "image" == a
          ? m.createElement(S.Bm, {
              strTag: "img",
              args: s,
              rawargs: "",
              event: n,
              showErrorInfo: !0,
            })
          : "video" == a
            ? m.createElement(S.Bm, {
                key: `${r.mp4}_${r.webm}`,
                strTag: "video",
                args: s,
                rawargs: "",
                event: n,
                showErrorInfo: !0,
              })
            : ((0, i.z_)(a, "unhandled type: " + a), null);
      }
      function oe(e, t) {
        const { type: n, attrs: l } = t;
        let o;
        if (
          ("image" == n ? (o = l.src) : "video" == n && (o = l.mp4 || l.webm),
          o)
        ) {
          const [t] = _.z.ExtractHashFromBBCodeURL(o);
          return t && E.pU.GetClanImageByImageHash(e, t);
        }
      }
      function ae(e) {
        const {
            clanSteamID: t,
            imageNodeType: n,
            videoNodeType: l,
            onItemSelected: o,
            onHideModal: a,
          } = e,
          [r, s] = m.useState(),
          i = m.useCallback(() => {
            s(void 0), a && a();
          }, [a]);
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
            m.createElement(re, {
              nodeAttrs: r,
              hideModal: i,
              onItemSelected: o,
              imageNodeType: n,
              videoNodeType: l,
              clanSteamID: t,
            }),
          activeModal: null == r ? void 0 : r.type,
        };
      }
      function re(e) {
        const {
            bIsEdit: t = !1,
            nodeAttrs: n,
            hideModal: l,
            clanSteamID: o,
            onItemSelected: a,
            imageNodeType: r,
            videoNodeType: s,
          } = e,
          { type: c, attrs: u } = n,
          p = (function (e, t) {
            return m.useMemo(() => oe(e, t), [e, t.type, t.attrs]);
          })(o, n),
          [_, E] = m.useState(() =>
            p ||
            ("image" == n.type && !n.attrs.src) ||
            ("video" == n.type && !n.attrs.mp4 && !n.attrs.webm)
              ? "uploaded"
              : "hotlink",
          ),
          f = m.useCallback(
            (e) => {
              a({ src: e }, r), l();
            },
            [a, l, r],
          ),
          g = m.useCallback(
            (e) => {
              a({ ...u, ...e }, s), l();
            },
            [u, a, l, s],
          ),
          b = m.useId();
        let w,
          M = null;
        if ("image" == c)
          (M = m.createElement(se, {
            active: "hotlink" == _,
            bIsEdit: t,
            hideModal: l,
            onImageSelected: f,
            src: u.src,
          })),
            (w = t
              ? (0, C.we)("#EventEditor_ReplaceImage_Title")
              : (0, C.we)("#EventEditor_InsertImage_Title"));
        else {
          if ("video" != c) return (0, i.z_)(c, "Unhandled type"), null;
          (M = m.createElement(ie, {
            active: "hotlink" == _,
            bIsEdit: t,
            hideModal: l,
            attrs: u,
            setAttrs: a,
          })),
            (w = (0, C.we)("#EventEditor_EditVideo_Title"));
        }
        return m.createElement(
          h.mt,
          { active: !0, onDismiss: l, className: I.ClanImageModalContent },
          m.createElement(v.Y9, { id: b }, w),
          m.createElement(
            v.zW,
            { labelId: b, value: _, onChange: (e) => E(e) },
            m.createElement(v.a, { value: "uploaded" }, "Uploaded"),
            m.createElement(v.a, { value: "hotlink" }, "Enter URL"),
          ),
          m.createElement(
            "div",
            {
              className: d()(I.ClanImageModalMode, "uploaded" == _ && I.Active),
            },
            m.createElement(ce, {
              bIsEdit: t,
              hideModal: l,
              onImageSelected: f,
              onVideoSelected: s && g,
              clanSteamID: o,
              selectedImage: p,
            }),
          ),
          m.createElement(
            "div",
            {
              className: d()(I.ClanImageModalMode, "hotlink" == _ && I.Active),
            },
            M,
          ),
        );
      }
      function se(e) {
        const {
            active: t,
            bIsEdit: n,
            hideModal: l,
            onImageSelected: o,
            src: a,
          } = e,
          [r, s] = m.useState(a),
          i = m.useCallback((e) => s(e.currentTarget.value), []),
          c = n
            ? (0, C.we)("#EventEditor_ReplaceImage_Title")
            : (0, C.we)("#EventEditor_InsertImage_Title"),
          d = m.useRef(void 0);
        return (
          m.useEffect(() => {
            t && d.current.Focus();
          }, [t]),
          m.createElement(
            v.lV,
            { onSubmit: () => o(r) },
            m.createElement(
              v.nB,
              null,
              m.createElement(v.pd, {
                ref: d,
                value: r,
                onChange: i,
                label: (0, C.we)("#EventEditor_InsertImage_URL"),
              }),
            ),
            m.createElement(v.CB, {
              onCancel: l,
              strOKText: c,
              bOKDisabled: !r || r == a,
            }),
          )
        );
      }
      function ie(e) {
        const {
            active: t,
            bIsEdit: n,
            hideModal: l,
            attrs: o,
            setAttrs: a,
          } = e,
          [r, s] = m.useState(o.mp4),
          [i, c] = m.useState(o.webm),
          [d, u] = m.useState(o.poster),
          [p, _] = m.useState(!!o.autoplay),
          [E, f] = m.useState(!!o.controls),
          g = m.useRef(void 0);
        m.useEffect(() => {
          t && g.current.Focus();
        }, [t]);
        return m.createElement(
          v.lV,
          {
            onSubmit: (e) => {
              a({
                ...o,
                mp4: r || void 0,
                webm: i || void 0,
                poster: d || void 0,
                autoplay: p,
                controls: E,
              }),
                l();
            },
          },
          m.createElement(
            v.nB,
            null,
            m.createElement(v.pd, {
              ref: g,
              value: r,
              onChange: (e) => s(e.currentTarget.value),
              label: (0, C.we)("#EventEditor_InsertVideo_InputMP4"),
            }),
            m.createElement(v.pd, {
              value: i,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, C.we)("#EventEditor_InsertVideo_InputWebM"),
            }),
            m.createElement(v.pd, {
              value: d,
              onChange: (e) => u(e.currentTarget.value),
              label: (0, C.we)("#EventEditor_InsertVideo_InputPoster"),
            }),
            m.createElement(v.Yh, {
              checked: p,
              onChange: _,
              label: (0, C.we)("#EventEditor_InsertVideo_InputAutoplay"),
            }),
            m.createElement(v.Yh, {
              checked: E,
              onChange: f,
              label: (0, C.we)("#EventEditor_InsertVideo_InputShowControls"),
            }),
          ),
          m.createElement(v.CB, {
            onCancel: l,
            strOKText: (0, C.we)("#EventEditor_EditVideo_Title"),
            bOKDisabled: !r && !i,
          }),
        );
      }
      function ce(e) {
        const {
            bIsEdit: t,
            hideModal: n,
            onImageSelected: l,
            onVideoSelected: o,
            clanSteamID: a,
          } = e,
          [r, s] = m.useState(""),
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
                  l((0, u.fw)(e));
              }
            },
            [l, o],
          ),
          _ = m.useCallback(
            (e, t) => {
              c(e), t && p(e);
            },
            [p],
          );
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            v.lV,
            { onSubmit: () => i && p(i), className: I.ClanImageGridForm },
            m.createElement(g.g, { fnSetImageSearch: s }),
            m.createElement(
              "div",
              { className: I.ClanImageGridContainer },
              m.createElement(f.ge, {
                clanAccountID: a.GetAccountID(),
                fileNameSearch: r,
                onImageSelected: _,
                selectedItem: i,
              }),
            ),
            m.createElement(
              v.wi,
              null,
              m.createElement(v.CB, {
                onCancel: n,
                strOKText: d,
                bOKDisabled: !i || i == e.selectedImage,
              }),
            ),
          ),
        );
      }
      function de(e) {
        const { editModel: t, imageNode: n, videoNode: l, children: o } = e,
          a = m.useCallback(
            async (e) => {
              const o = t.GetClanSteamID(),
                a = new p.VE(o, null);
              if (!(await a.AddImage(e, t.GetCurEditLanguage())))
                throw "Error processing image upload";
              const r = await a.UploadAllImages();
              if (!r || 1 != Object.values(r).length)
                throw "Error uploading image";
              const s = Object.values(r)[0];
              if (!s.bSuccess || 1 != s.uploadResult.success)
                throw s.uploadResult.message;
              const i = me(
                E.pU.GetClanImageByImageHash(o, s.uploadResult.image_hash),
                n,
                l,
              );
              return (
                i.type == n &&
                  (await (0, w.DB)(
                    _.z.ReplacementTokenToClanImageURL(i.attrs.src),
                  )),
                i
              );
            },
            [t, n, l],
          );
        return n
          ? m.createElement(
              b.Xv,
              { ProcessFileUpload: a, bAllowImageHotLinking: !0 },
              o,
            )
          : o;
      }
      function me(e, t, n) {
        const l = (0, u.fw)(e);
        switch (e.file_type) {
          case 4:
            if (!n) throw "Video unsupported";
            return n.create({ mp4: l });
          case 5:
            if (!n) throw "Video unsupported";
            return n.create({ webm: l });
          default:
            return t.create({ src: l });
        }
      }
      var ue = n(96640),
        pe = n(79216);
      var _e = n(70995),
        Ee = n(74410),
        ve = n(72421),
        fe = n(52038),
        ge = n(63226);
      function he(e) {
        const {
            videoID: t,
            align: n,
            editModel: l,
            selected: o,
            setAttrs: a,
            focusView: r,
          } = e,
          [s, i, c] = (0, M.uD)(),
          d = m.useCallback(() => {
            c(), r();
          }, [c, r]),
          u = m.useCallback(
            (e, t) => {
              a({ videoID: e, align: t }), d();
            },
            [a, d],
          );
        return m.createElement(
          m.Fragment,
          null,
          s &&
            m.createElement(be, {
              videoID: t,
              align: n,
              bEditing: !0,
              hideModal: d,
              onSave: u,
            }),
          m.createElement(
            U,
            { className: (0, fe.A)(ge.PreviewYoutubeEditor, o && ge.Selected) },
            m.createElement(A, {
              onEditClick: i,
              onDeleteClick: e.removeNode,
              bStrongShadows: !0,
            }),
            o && m.createElement("div", { className: ge.SelectionOverlay }),
            m.createElement(S.Bm, {
              event: l.GetEventModel(),
              strTag: "previewyoutube",
              args: { "": `${t};${n}` },
              rawargs: `${t};${n}`,
              showErrorInfo: !0,
            }),
          ),
        );
      }
      function be(e) {
        const {
            videoID: t = "",
            align: n = "",
            bEditing: l = !1,
            hideModal: o,
            onSave: a,
          } = e,
          [r, s] = m.useState(n || Ee.V2.full),
          [i, c] = m.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [d, u] = m.useState(void 0),
          p = m.useCallback(() => {
            const { strVideoID: e } = (0, _e.XU)(i);
            return (
              e ? a(e, r) : u((0, C.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [i, r, a]),
          _ = m.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return m.createElement(
          L.EN,
          { active: !0 },
          m.createElement(
            ve._,
            {
              strTitle: (0, C.we)("#EventEditor_InsertYouTube"),
              closeModal: o,
              strOKText: l
                ? (0, C.we)("#Button_Save")
                : (0, C.we)("#EventEditor_InsertYouTube"),
              onOK: p,
            },
            d && m.createElement("div", { className: ge.Error }, d),
            m.createElement(v.pd, {
              label: (0, C.we)("#EventEditor_InsertYouTube_URL"),
              placeholder: (0, C.we)("#EventEditor_InsertYouTube_Placholder"),
              value: i,
              ref: _,
              onChange: (e) => c(e.currentTarget.value),
            }),
            m.createElement(
              v.o1,
              { label: (0, C.we)("#EventEditor_InsertYouTube_Position") },
              m.createElement(v.Od, {
                checked: r == Ee.V2.left,
                onChange: (e) => e && s(Ee.V2.left),
                label: (0, C.we)("#EventEditor_InsertYouTube_Left"),
              }),
              m.createElement(v.Od, {
                checked: r == Ee.V2.right,
                onChange: (e) => e && s(Ee.V2.right),
                label: (0, C.we)("#EventEditor_InsertYouTube_Right"),
              }),
              m.createElement(v.Od, {
                checked: r == Ee.V2.full,
                onChange: (e) => e && s(Ee.V2.full),
                label: (0, C.we)("#EventEditor_InsertYouTube_Full"),
              }),
            ),
          ),
        );
      }
      var Ce = n(69001),
        we = n(25918),
        Me = n(65946),
        ke = n(26161),
        Ie = n(74718),
        Se = n(78395),
        ye = n(21869),
        De = n(1397),
        Te = n.n(De),
        Ne = n(63556),
        Ue = n(44165),
        Ge = n(95695),
        Pe = n(99637),
        Ae = n(91675),
        Oe = n(14771),
        xe = n(87937),
        Be = n(61819),
        Ve = n(88942),
        ze = n(78327),
        Re = n(41735),
        Fe = n.n(Re),
        Le = n(26408);
      function je(e) {
        const { hideModal: t, fnUpdateSession: n } = e,
          [l, o] = (0, m.useState)(() => Je(!0, null)),
          [a, r] = (0, m.useState)(() => Xe(!0, null)),
          [s] = (0, Me.q3)(() => [a.location_type]);
        return m.createElement(
          ye.E,
          { active: !0 },
          m.createElement(
            Se.o0,
            {
              strTitle: (0, C.we)("#MeetSteam_create_title"),
              onOK: () => n(l, a),
              closeModal: () => {
                r(Xe(!0, null)), o(Je(!0, null)), t();
              },
              bOKDisabled: null == !s,
            },
            m.createElement(
              "div",
              { className: Te().DialogCtn },
              m.createElement(Ke, { group: l, fnSetGroup: o }),
              m.createElement(Qe, { session: a, fnSetSession: r }),
            ),
          ),
        );
      }
      function Ye(e) {
        const { hideModal: t, groupInput: n, fnUpdateGroupSession: l } = e,
          [o, a] = (0, m.useState)(() => Je(!1, n));
        return m.createElement(
          ye.E,
          { active: !0 },
          m.createElement(
            Se.o0,
            {
              strTitle: (0, C.we)("#MeetSteam_edit_title"),
              onOK: () => {
                l(o), t();
              },
              onCancel: () => {
                a(Je(!1, n)), t();
              },
            },
            m.createElement(
              "div",
              { className: Te().DialogCtn },
              m.createElement(Ke, { group: o, fnSetGroup: a }),
            ),
          ),
        );
      }
      function He(e) {
        const {
            bCreate: t,
            hideModal: n,
            sessionInput: l,
            fnUpdateSession: o,
          } = e,
          [a, r] = (0, m.useState)(() => Xe(t, l)),
          [s] = (0, Me.q3)(() => [a.location_type]);
        return m.createElement(
          ye.E,
          { active: !0 },
          m.createElement(
            Se.o0,
            {
              strTitle: (0, C.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                o(a), n();
              },
              onCancel: () => {
                r(Xe(t, l)), n();
              },
              bOKDisabled: !s,
            },
            m.createElement(
              "div",
              { className: Te().DialogCtn },
              m.createElement(Qe, { session: a, fnSetSession: r }),
            ),
          ),
        );
      }
      function Ke(e) {
        const { group: t, fnSetGroup: n } = e,
          l = (0, Ne.E)();
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(v.pd, {
            type: "text",
            label: (0, C.we)("#MeetSteam_edit_session_name"),
            value: C.NT.Get(t.localized_session_title, l),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_title = C.NT.Set(
                o.localized_session_title,
                l,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          m.createElement(
            v.JU,
            null,
            (0, C.we)("#MeetSteam_edit_session_desc"),
          ),
          m.createElement("textarea", {
            className: (0, fe.A)(
              "DialogTextInputBase",
              Te().EventDescriptionField,
            ),
            value: C.NT.Get(t.localized_session_description, l),
            rows: 5,
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_description = C.NT.Set(
                o.localized_session_description,
                l,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          m.createElement(v.pd, {
            type: "text",
            label: "Intended Audience",
            tooltip:
              "A short descriptions for whom then event is designed for to help partners self select",
            value: C.NT.Get(t.localized_intended_audience, l),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_intended_audience = C.NT.Set(
                o.localized_intended_audience,
                l,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          m.createElement(
            v.JU,
            null,
            "FAQ ",
            m.createElement(Le.o, {
              tooltip:
                "Optional FAQ section which appears in the pop-up display and hidden by default",
            }),
          ),
          m.createElement("textarea", {
            className: (0, fe.A)(
              "DialogTextInputBase",
              Te().EventDescriptionField,
            ),
            value: C.NT.Get(t.localized_sesssion_faq, l),
            rows: 5,
            onChange: (e) => {
              const o = { ...t };
              (o.localized_sesssion_faq = C.NT.Set(
                o.localized_sesssion_faq,
                l,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          m.createElement(v.Yh, {
            checked: t.ask_registration_question,
            onChange: (e) => {
              const l = { ...t };
              (l.ask_registration_question = e), n(l);
            },
            label:
              "Ask partner to tell us what they want to learn from the sessions",
          }),
          m.createElement(qe, { ...e }),
        );
      }
      function qe(e) {
        var t;
        const { group: n, fnSetGroup: l } = e,
          [o, a] = (0, m.useState)(
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
                m.createElement(v.pd, {
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
                      l(o);
                  },
                  label: "Visibility Token",
                }),
              ),
              m.createElement(
                v.$n,
                {
                  onClick: () => {
                    const e = { ...n };
                    (e.group_visibility_tokens = [
                      ...e.group_visibility_tokens,
                      1e4,
                    ]),
                      l(e);
                  },
                },
                "Add Token",
              ),
              Boolean(n.group_visibility_tokens.length > 0) &&
                m.createElement(
                  v.$n,
                  {
                    onClick: () => {
                      const e = { ...n };
                      (e.group_visibility_tokens =
                        e.group_visibility_tokens.slice(0, -1)),
                        l(e);
                    },
                  },
                  "Remove Last Token",
                ),
            )
          : m.createElement(v.Yh, {
              checked: !1,
              onChange: a,
              label: "Change Visibility Options",
            });
      }
      function Qe(e) {
        const { session: t, fnSetSession: n } = e,
          [l, o, a, r, s, i] = (0, Me.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.max_capacity,
            t.max_per_team,
            t.location_type,
            t.in_person_time_zone,
          ]),
          c = [];
        for (let e = 0; e < 4; ++e) c.push({ data: e, label: e });
        const d = Math.max(0, Math.floor((o - l) / 60)),
          u = Intl.DateTimeFormat().resolvedOptions().timeZone,
          p = "in_person" === s ? (null != i ? i : Ie.hh) : u;
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(We, {
            startTime: t.rtime_start,
            location_type: s,
            fnUpdateLocationAndTZ: (e, l) =>
              n({ ...t, location_type: e, in_person_time_zone: l }),
            in_person_time_zone: i,
          }),
          m.createElement("br", null),
          m.createElement(Pe.K, {
            strDescription: (0, C.we)("#MeetSteam_edit_start"),
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => l,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + Oe.Kp.PerMinute * d }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          m.createElement("br", null),
          m.createElement(v.pd, {
            type: "number",
            min: 0,
            label: (0, C.we)("#MeetSteam_edit_duration"),
            onChange: (e) => {
              const l = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + Oe.Kp.PerMinute * l });
            },
            value: d,
          }),
          m.createElement($e, {
            rtime_start: l,
            rtime_end: o,
            sDisplayTimeZone: p,
          }),
          m.createElement("br", null),
          m.createElement("br", null),
          m.createElement(
            "div",
            { className: Te().ParticipantRow },
            m.createElement(v.pd, {
              type: "number",
              value: a,
              label: (0, C.we)("#MeetSteam_edit_max_capacity"),
              min: 1,
              onChange: (e) =>
                n({
                  ...t,
                  max_capacity: Number.parseInt(e.currentTarget.value),
                }),
            }),
            m.createElement(v.m, {
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
      function $e(e) {
        const { rtime_start: t, rtime_end: n, sDisplayTimeZone: l } = e,
          o = xe.unix(t).tz(Ie.hh),
          a = xe.unix(t).tz(l),
          r = a.utcOffset() - o.utcOffset(),
          s = xe.unix(n).tz(Ie.hh),
          i = xe.unix(n).tz(l),
          c = i.utcOffset() - s.utcOffset();
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            "div",
            null,
            (0, C.we)("#MeetSteam_edit_displayed_start"),
            ": ",
            (0, Ae.P0)(a.unix() + 60 * r, !1, a.format("z")),
            " ",
          ),
          m.createElement(
            "div",
            null,
            (0, C.we)("#MeetSteam_edit_displayed_end"),
            ": ",
            (0, Ae.P0)(i.unix() + 60 * c, !1, i.format("z")),
            " ",
          ),
        );
      }
      function We(e) {
        const {
            startTime: t,
            location_type: n,
            fnUpdateLocationAndTZ: l,
            in_person_time_zone: o,
          } = e,
          a = (function (e) {
            const t = (0, Ve.I)({
              queryKey: ["timezone", e],
              queryFn: async () => {
                const t = `${ze.TS.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
                  n = { reference_time: e },
                  l = await Fe().get(t, { params: n });
                return null == l ? void 0 : l.data.timezones;
              },
            });
            return t.isSuccess ? t.data : [];
          })(t),
          r = m.useMemo(
            () => a.reduce((e, t) => e.set(t.name, t.friendly_name), new Map()),
            [a],
          ),
          s = (e) => {
            var t;
            return null !== (t = r.get(e)) && void 0 !== t ? t : e;
          },
          i = m.useId(),
          c = m.useId();
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            "div",
            { id: i, className: Ge.EventEditorTextTitle },
            (0, C.we)("#MeetSteam_edit_date_display_title"),
          ),
          m.createElement(
            "div",
            { id: c, className: Ge.EventEditorTextSubTitle },
            (0, C.we)("#MeetSteam_edit_date_display_desc"),
          ),
          m.createElement(
            v.zW,
            {
              labelId: i,
              descriptionId: c,
              value: n,
              onChange: (e) => l(e, o),
            },
            m.createElement(
              v.a,
              { value: "in_person" },
              (0, C.we)("#MeetSteam_edit_date_display_in_person"),
            ),
            m.createElement(
              v.a,
              { value: "virtual" },
              (0, C.we)("#MeetSteam_edit_date_display_virtual"),
            ),
          ),
          "in_person" === n &&
            m.createElement(Be.Ay, {
              styles: { option: (e) => ({ ...e, color: "#444444" }) },
              isSearchable: !0,
              isMulti: !1,
              options: a.map((e) => ({
                label: e.friendly_name,
                value: e.name,
              })),
              defaultMenuIsOpen: !1,
              value: o
                ? { label: s(o), value: o }
                : { label: s(Ie.hh), value: Ie.hh },
              onChange: (e) => l(n, e.value),
            }),
        );
      }
      function Je(e, t) {
        if (e) {
          const e = we.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, j.$Y)([], 31, null),
            localized_session_description: (0, j.$Y)([], 31, null),
            localized_sesssion_faq: (0, j.$Y)([], 31, null),
            localized_intended_audience: (0, j.$Y)([], 31, null),
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
          const e = Ue.HD.GetTimeNowWithOverride(),
            t = we.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            n =
              null == t ? void 0 : t.reduce((e, t) => e.concat(t.sessions), []);
          let l = 0;
          do {
            l = Math.floor(1e4 + 9e4 * Math.random());
          } while (n && n.findIndex((e) => e.id == l) >= 0);
          const o = 3600 * Math.ceil(e / 3600);
          return {
            id: l,
            rtime_start: o + Oe.Kp.PerDay,
            rtime_end: o + Oe.Kp.PerDay + Oe.Kp.PerHour,
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
      function Ze(e) {
        const t = we.mh.GetEditModel();
        for (
          let n = 0;
          n < t.GetEventModel().jsondata.meet_steam_groups.length;
          ++n
        ) {
          const l = t.GetEventModel().jsondata.meet_steam_groups[n];
          for (let t = 0; t < l.sessions.length; ++t)
            if (l.sessions[t].id == e)
              return { groupIndex: n, sessionIndex: t };
        }
        return null;
      }
      function et(e) {
        const t = we.mh.GetEditModel();
        for (
          let n = 0;
          n < t.GetEventModel().jsondata.meet_steam_groups.length;
          ++n
        ) {
          const l = t.GetEventModel().jsondata.meet_steam_groups[n];
          if (l.group_id == e) return { group: l, groupIndex: n };
        }
        return null;
      }
      function tt(e) {
        const t = we.mh.GetEditModel();
        for (
          let n = 0;
          n < t.GetEventModel().jsondata.meet_steam_schedules.length;
          ++n
        ) {
          const l = t.GetEventModel().jsondata.meet_steam_schedules[n];
          if (l.schedule_id == e) return { schedule: l, scheduleIndex: n };
        }
        return (
          "dev" == k.TS.WEB_UNIVERSE &&
            console.log(`Error: HelperFindMeetSteamSchedule ${e} is missing`),
          null
        );
      }
      var nt = n(33561);
      function lt(e) {
        var t;
        const { focusView: n, removeNode: l, group_id: o } = e,
          a = (0, nt.LU)(),
          r = (0, Me.q3)(() => {
            var e;
            return null ===
              (e = a.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == o);
          }),
          [s, i, c] = (0, M.uD)(),
          d = m.useCallback(() => {
            n(), c();
          }, [n, c]),
          [u, p, _] = (0, M.uD)(),
          E = m.useCallback(() => {
            n(), _();
          }, [n, _]);
        return r && a.GetClanAccountID() == (0, ke.H)()
          ? m.createElement(
              "div",
              { className: Te().EditorCtn },
              m.createElement(ot, { groupData: r, focusView: n }),
              m.createElement(
                "div",
                { className: Te().controls },
                m.createElement(
                  D.ff,
                  { onClick: i, tooltip: (0, C.we)("#Button_Edit") },
                  m.createElement(T.ffu, null),
                ),
                m.createElement(
                  D.ff,
                  { onClick: p, tooltip: (0, C.we)("#Button_Delete") },
                  m.createElement(T.sED, null),
                ),
                Boolean(
                  (null === (t = r.group_visibility_tokens) || void 0 === t
                    ? void 0
                    : t.length) > 0,
                ) &&
                  m.createElement(
                    D.ff,
                    {
                      onClick: () => {},
                      tooltip:
                        "Limited visibility to those with the appropriate URLs",
                    },
                    m.createElement(B.WLA, null),
                  ),
                Boolean(r.ask_registration_question) &&
                  m.createElement(
                    D.ff,
                    {
                      onClick: () => {},
                      tooltip:
                        "Will ask partner to provides questions for us for this session.",
                    },
                    m.createElement(B.vfN, null),
                  ),
              ),
              Boolean(s) &&
                m.createElement(Ye, {
                  hideModal: d,
                  groupInput: r,
                  fnUpdateGroupSession: (e) => {
                    const { groupIndex: t } = et(e.group_id),
                      n = we.mh.GetEditModel();
                    (n.GetEventModel().jsondata.meet_steam_groups[t] = e),
                      n.SetDirty(Ce.IQ.description);
                  },
                }),
              Boolean(u) &&
                m.createElement(
                  ye.E,
                  { active: !0 },
                  m.createElement(Se.o0, {
                    strTitle: (0, C.we)("#Button_Delete"),
                    strDescription: (0, C.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { groupIndex: e } = et(r.group_id),
                        t = we.mh.GetEditModel(),
                        n = [...t.GetEventModel().jsondata.meet_steam_groups];
                      n.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_groups = n),
                        t.SetDirty(Ce.IQ.description),
                        l();
                    },
                    closeModal: E,
                  }),
                ),
            )
          : m.createElement(
              "div",
              null,
              "Error: Cannot edit meet steam session group",
            );
      }
      function ot(e) {
        const { groupData: t, focusView: n } = e,
          l = (0, Me.q3)(() => t.sessions || []),
          [o, a, r] = (0, M.uD)(),
          s = m.useCallback(() => {
            n(), r();
          }, [n, r]);
        return t
          ? m.createElement(
              Ie.jr,
              { groupData: t },
              l.map((e, o) =>
                m.createElement(at, {
                  key: "timecol_" + t.group_id + "_" + e.id,
                  focusView: n,
                  sessionID: e.id,
                  bShowOR: o + 1 < l.length,
                }),
              ),
              m.createElement(
                D.ff,
                {
                  className: Te().AddNew,
                  onClick: a,
                  tooltip: (0, C.we)("#MeetSteam_add"),
                },
                m.createElement(T.OMN, null),
              ),
              o &&
                m.createElement(He, {
                  bCreate: !0,
                  hideModal: s,
                  fnUpdateSession: (e) => {
                    const n = we.mh.GetEditModel(),
                      l = [...t.sessions, e];
                    l.sort((e, t) => e.rtime_start - t.rtime_start),
                      (t.sessions = l),
                      n.SetDirty(Ce.IQ.description);
                  },
                }),
            )
          : null;
      }
      function at(e) {
        const { sessionID: t, bShowOR: n, focusView: l } = e,
          [o, a] = (0, M.OP)(),
          r = (0, Me.q3)(() => {
            const { groupIndex: e, sessionIndex: n } = Ze(t);
            return we.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[n];
          }),
          [s, i, c] = (0, M.uD)(),
          d = m.useCallback(() => {
            l(), c();
          }, [l, c]),
          [u, p, _] = (0, M.uD)(),
          E = m.useCallback(() => {
            l(), _();
          }, [l, _]);
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            "div",
            { className: Te().Column, ...a },
            m.createElement(Ie.Tn, { sessionData: r }),
            Boolean(o) &&
              m.createElement(
                "div",
                { className: Te().controls },
                m.createElement(
                  D.ff,
                  { onClick: i, tooltip: (0, C.we)("#Button_Edit") },
                  m.createElement(T.ffu, null),
                ),
                m.createElement(
                  D.ff,
                  { onClick: p, tooltip: (0, C.we)("#Button_Delete") },
                  m.createElement(T.sED, null),
                ),
              ),
            Boolean(s) &&
              m.createElement(He, {
                bCreate: !1,
                hideModal: d,
                sessionInput: r,
                fnUpdateSession: (e) => {
                  const n = we.mh.GetEditModel(),
                    { groupIndex: l, sessionIndex: o } = Ze(t),
                    a = [
                      ...n.GetEventModel().jsondata.meet_steam_groups[l]
                        .sessions,
                    ];
                  (a[o] = e),
                    a.sort((e, t) => e.rtime_start - t.rtime_start),
                    (n.GetEventModel().jsondata.meet_steam_groups[l].sessions =
                      a),
                    n.SetDirty(Ce.IQ.description);
                },
              }),
            Boolean(u) &&
              m.createElement(
                ye.E,
                { active: !0 },
                m.createElement(Se.o0, {
                  strTitle: (0, C.we)("#Button_Delete"),
                  strDescription: (0, C.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = we.mh.GetEditModel(),
                      { groupIndex: n, sessionIndex: l } = Ze(t),
                      o = [
                        ...e.GetEventModel().jsondata.meet_steam_groups[n]
                          .sessions,
                      ];
                    o.splice(l, 1),
                      o.sort((e, t) => e.rtime_start - t.rtime_start),
                      (e.GetEventModel().jsondata.meet_steam_groups[
                        n
                      ].sessions = o),
                      e.SetDirty(Ce.IQ.description);
                  },
                  closeModal: E,
                }),
              ),
          ),
          n && m.createElement(Ie.w3, null),
        );
      }
      var rt = n(36969),
        st = n(38539),
        it = (n(9024), n(86807));
      function ct(e) {
        const { schema: t } = e,
          {
            table: n,
            table_row: l,
            table_header: o,
            table_cell: a,
            paragraph: r,
          } = t.nodes,
          s = m.useCallback(
            (e, t, s) =>
              !st.aH(e) &&
              (t &&
                t(
                  e.tr.insert(
                    e.selection.to,
                    (function (e, t, n, l, o) {
                      const a = () => n.createChecked(null, o.createChecked()),
                        r = () => l.createChecked(null, o.createChecked());
                      return e.createChecked(null, [
                        t.createChecked(null, [a(), a()]),
                        t.createChecked(null, [r(), r()]),
                      ]);
                    })(n, l, o, a, r),
                  ),
                ),
              !0),
            [n, l, o, a, r],
          );
        return n
          ? m.createElement(
              D.cQ,
              {
                tooltip: (0, C.we)("#FormattingToolbar_Tables_InsertTable"),
                command: s,
              },
              m.createElement(T._Q2, null),
            )
          : null;
      }
      function dt(e) {
        const { schema: t, className: n } = e,
          { callbacks: l, view: o } = (0, D.wU)(),
          [a, r] = m.useState(() => !!t.nodes.table && st.aH(o.state));
        return (
          (0, M.hL)(
            l,
            m.useCallback(
              (e) => r(!!t.nodes.table && st.aH(e.state)),
              [t.nodes.table],
            ),
          ),
          m.createElement(
            it.R,
            { visible: a, msAnimationDuration: 100 },
            m.createElement(
              D.Ez,
              { className: n },
              m.createElement(mt, { schema: t }),
            ),
          )
        );
      }
      function mt(e) {
        const { schema: t } = e;
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            D.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_AddRowBefore"),
              command: st.JD,
            },
            m.createElement(T.BPi, null),
          ),
          m.createElement(
            D.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_AddRowAfter"),
              command: st.gC,
            },
            m.createElement(T.fG_, null),
          ),
          m.createElement(
            D.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_DeleteRow"),
              command: st.aR,
            },
            m.createElement(T.XW_, null),
          ),
          m.createElement(D.XQ, null),
          m.createElement(
            D.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_AddColumnBefore"),
              command: st.RC,
            },
            m.createElement(T.l26, null),
          ),
          m.createElement(
            D.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_AddColumnAfter"),
              command: st.GU,
            },
            m.createElement(T.ur3, null),
          ),
          m.createElement(
            D.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_DeleteColumn"),
              command: st.gR,
            },
            m.createElement(T.dyV, null),
          ),
          m.createElement(D.XQ, null),
          m.createElement(
            D.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_HeaderRow"),
              command: st.uC,
            },
            m.createElement(T.mLi, null),
          ),
          m.createElement(
            D.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_HeaderColumn"),
              command: st.xV,
            },
            m.createElement(T.sXN, null),
          ),
          m.createElement(
            D.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_HeaderCell"),
              command: st._G,
            },
            m.createElement(T.Maz, null),
          ),
          m.createElement(D.XQ, null),
          m.createElement(
            D.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_MergeCells"),
              command: st.w7,
            },
            m.createElement(T.rnq, null),
          ),
          m.createElement(
            D.cQ,
            {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_SplitCells"),
              command: st.L0,
            },
            m.createElement(T.vB9, null),
          ),
          !1,
        );
      }
      var ut = n(44483),
        pt = n(44832),
        _t = n(28516),
        Et = n.n(_t);
      function vt(e, t) {
        if (e) {
          const e = we.mh.GetEditModel().GetEventModel()
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
      function ft(e) {
        const { hideModal: t, fnUpdateSession: n, inputScheduleModel: l } = e,
          o = (0, Ue.f1)(),
          a = (0, nt.LU)(),
          [r, s] = (0, m.useState)(() => vt(!Boolean(l), l)),
          [i, c, d] = (0, Me.q3)(() => [
            r.location_type,
            r.in_person_time_zone,
            a.GetEventModel().jsondata.meet_steam_groups || [],
          ]),
          u = (0, m.useMemo)(() => {
            const e = d.reduce((e, t) => e.concat(t.sessions), []);
            return 0 == e.length ? o : Math.min(...e.map((e) => e.rtime_start));
          }, [d, o]);
        return m.createElement(
          ye.E,
          { active: !0 },
          m.createElement(
            Se.o0,
            {
              strTitle: Boolean(l)
                ? "Update Meet Steam Schedule"
                : "Create Meet Steam Schedule View",
              onOK: () => n(r),
              closeModal: () => {
                s(vt(!Boolean(l), l)), t();
              },
            },
            m.createElement(
              "div",
              { className: Et().DialogCtn },
              m.createElement(We, {
                startTime: a.GetEventStartTime(),
                location_type: i,
                in_person_time_zone: c,
                fnUpdateLocationAndTZ: (e, t) =>
                  s({ ...r, location_type: e, in_person_time_zone: t }),
              }),
              m.createElement(gt, {
                inputScheduleModel: r,
                fnUpdateSession: (e) => s(e),
                rtBreakStartingTime: u,
              }),
            ),
          ),
        );
      }
      function gt(e) {
        const {
            fnUpdateSession: t,
            inputScheduleModel: n,
            rtBreakStartingTime: l,
          } = e,
          [o, a] = (0, Me.q3)(() => [
            n.session_breaks || [],
            n.in_person_time_zone || Ie.hh,
          ]),
          r = (0, m.useCallback)(
            (e, l) => {
              const o = { ...n };
              (o.session_breaks = o.session_breaks
                ? [...o.session_breaks]
                : []),
                l < o.session_breaks.length
                  ? (o.session_breaks[l] = e)
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
                sDisplayTimeZone: a,
                index: t,
                breakSession: e,
                fnOnUpdate: (e) => r(e, t),
              }),
            ),
          m.createElement(
            v.$n,
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
                    localized_break_description: (0, j.$Y)([], 31, null),
                    rtime_start: l,
                    rtime_end: l + Oe.Kp.PerHour,
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
            index: l,
            sDisplayTimeZone: o,
          } = e,
          a = (0, Ne.E)(),
          [r, s, i, c] = (0, Me.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.localized_break_description[a] || "",
            Math.max(0, Math.floor((t.rtime_end - t.rtime_start) / 60)),
          ]);
        return m.createElement(
          "div",
          null,
          m.createElement("div", null, "Break # ", l + 1),
          m.createElement("br", null),
          m.createElement(Pe.K, {
            strDescription: "Break Start Time",
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => r,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + Oe.Kp.PerMinute * c }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          m.createElement("br", null),
          m.createElement(v.pd, {
            type: "number",
            min: 0,
            label: "Break duration in minutes",
            onChange: (e) => {
              const l = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + Oe.Kp.PerMinute * l });
            },
            value: c,
          }),
          m.createElement(v.pd, {
            type: "text",
            label: "Break Description",
            value: i,
            onChange: (e) => {
              const l = { ...t };
              (l.localized_break_description[a] = e.currentTarget.value), n(l);
            },
          }),
          m.createElement($e, {
            rtime_start: r,
            rtime_end: s,
            sDisplayTimeZone: o,
          }),
        );
      }
      function bt(e) {
        const { focusView: t, removeNode: n, schedule_id: l } = e,
          o = (0, nt.LU)(),
          a = (0, Me.q3)(() => {
            var e;
            return null ===
              (e = o.GetEventModel().jsondata.meet_steam_schedules) ||
              void 0 === e
              ? void 0
              : e.find((e) => e.schedule_id == l);
          }),
          [r, s, i] = (0, M.uD)(),
          c = m.useCallback(() => {
            t(), i();
          }, [t, i]),
          [d, u, p] = (0, M.uD)(),
          _ = m.useCallback(() => {
            t(), p();
          }, [t, p]);
        return a && o.GetClanAccountID() == (0, ke.H)()
          ? m.createElement(
              "div",
              { className: Et().EditorCtn },
              m.createElement(Ie.fs, {
                eventModel: o.GetEventModel(),
                scheduleData: a,
              }),
              m.createElement(
                "div",
                { className: Et().controls },
                m.createElement(
                  D.ff,
                  { onClick: s, tooltip: (0, C.we)("#Button_Edit") },
                  m.createElement(T.ffu, null),
                ),
                m.createElement(
                  D.ff,
                  { onClick: u, tooltip: (0, C.we)("#Button_Delete") },
                  m.createElement(T.sED, null),
                ),
              ),
              Boolean(r) &&
                m.createElement(ft, {
                  hideModal: c,
                  inputScheduleModel: a,
                  fnUpdateSession: (e) => {
                    const { scheduleIndex: t } = tt(e.schedule_id);
                    (o.GetEventModel().jsondata.meet_steam_schedules[t] = e),
                      o.SetDirty(Ce.IQ.description);
                  },
                }),
              Boolean(d) &&
                m.createElement(
                  ye.E,
                  { active: !0 },
                  m.createElement(Se.o0, {
                    strTitle: (0, C.we)("#Button_Delete"),
                    strDescription: (0, C.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { scheduleIndex: e } = tt(a.schedule_id),
                        t = we.mh.GetEditModel(),
                        l = [
                          ...t.GetEventModel().jsondata.meet_steam_schedules,
                        ];
                      l.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_schedules = l),
                        t.SetDirty(Ce.IQ.description),
                        n();
                    },
                    closeModal: _,
                  }),
                ),
            )
          : m.createElement(
              "div",
              null,
              "Error: Cannot edit meet steam schedule view",
            );
      }
      var Ct = n(10820),
        wt = n(68033),
        Mt = n(30193),
        kt = n(14947);
      function It(e) {
        const { schema: t } = e,
          { callbacks: n, view: l } = (0, D.wU)(),
          [o, a] = m.useState(!1),
          r = m.useCallback(
            (e, n) => {
              l.dispatch(
                l.state.tr.insert(
                  l.state.selection.to,
                  t.nodes.emoticon.create(null, t.text(e)),
                ),
              ),
                n || l.focus();
            },
            [l, t],
          ),
          s = m.useCallback(
            (e) => {
              a(!0);
              const t = (0, V.lX)(m.createElement(St, { OnSelected: r }), e, {
                bOverlapHorizontal: !0,
              });
              (0, kt.z7)(
                () => !t.visible,
                () => a(!1),
              );
            },
            [r],
          );
        return m.createElement(
          D.ff,
          { tooltip: "#Editor_Emoticon", onClick: s, toggled: o },
          m.createElement(B.jZW, null),
        );
      }
      function St(e) {
        return (
          (0, Mt.k3)(wt.A),
          m.createElement(Ct.iY, {
            emoticonStore: wt.A,
            OnSelected: e.OnSelected,
          })
        );
      }
      var yt = n(70078),
        Dt = n(14703),
        Tt = n(4796),
        Nt = n(63287),
        Ut = n.n(Nt),
        Gt = n(7913),
        Pt = n(82102),
        At = n(69484);
      function Ot(e) {
        const { hideModal: t, fnUpdateSession: n, clanAccountID: l } = e,
          [o, a] = (0, m.useState)(() => Kt(!0, null));
        return m.createElement(
          ye.E,
          { active: !0 },
          m.createElement(
            Se.o0,
            {
              strTitle: (0, C.we)("#UserPolls_Create_title"),
              onOK: () => n(o),
              closeModal: () => {
                a(Kt(!0, null)), t();
              },
            },
            m.createElement(
              "div",
              { className: Ut().DialogCtn },
              m.createElement(Vt, {
                clanAccountID: l,
                userPollDef: o,
                fnSetDef: a,
              }),
            ),
          ),
        );
      }
      function xt(e) {
        const {
            hideModal: t,
            userPollDef: n,
            clanAccountID: l,
            fnUpdateUserPollDef: o,
          } = e,
          [a, r] = (0, m.useState)(() => Kt(!1, n));
        return m.createElement(
          ye.E,
          { active: !0 },
          m.createElement(
            Se.o0,
            {
              strTitle: (0, C.we)("#UserPolls_Edit_title"),
              onOK: () => {
                o(a);
              },
              onCancel: () => {
                r(Kt(!1, n));
              },
              closeModal: t,
            },
            m.createElement(
              "div",
              { className: Ut().DialogCtn },
              m.createElement(Vt, {
                userPollDef: a,
                clanAccountID: l,
                fnSetDef: r,
              }),
            ),
          ),
        );
      }
      function Bt(e) {
        switch (e) {
          default:
          case Dt.$t.k_EPollResult_NotVisible:
            return (0, C.we)("#UserPolls_Visibility_None");
          case Dt.$t.k_EPollResult_Visible_After_End:
            return (0, C.we)("#UserPolls_Visibility_End");
          case Dt.$t.k_EPollResult_Visible_After_Vote:
            return (0, C.we)("#UserPolls_Visibility_Voter");
          case Dt.$t.k_EPollResult_Visible_After_Vote_Or_End:
            return (0, C.we)("#UserPolls_Visibility_Voter_or_End");
          case Dt.$t.k_EPollResult_Visible_On_Demand:
            return (0, C.we)("#UserPolls_Visibility_OnDemand");
        }
      }
      function Vt(e) {
        const { userPollDef: t, fnSetDef: n } = e,
          l = (0, Ne.E)(),
          [o] = (0, Me.q3)(() => [t.results_visibility_settings]),
          a = Object.values(Dt.$t).map((e) => ({ data: e, label: Bt(e) }));
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(v.pd, {
            type: "text",
            label: (0, C.we)("#UserPolls_Description"),
            value: C.NT.Get(t.localized_poll_description, l),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_poll_description = C.NT.Set(
                o.localized_poll_description,
                l,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          m.createElement(Lt, { ...e }),
          m.createElement(Ft, { ...e }),
          m.createElement(v.JU, null, (0, C.we)("#UserPolls_Visibility")),
          m.createElement(
            "div",
            { className: Ut().PollArea },
            m.createElement(v.m, {
              strDropDownClassName: Ge.DropDownScroll,
              rgOptions: a,
              selectedOption: o,
              onChange: (e) => {
                e.data != t.results_visibility_settings &&
                  n({ ...t, results_visibility_settings: e.data });
              },
              bDisableMouseOverlay: !0,
              contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
            }),
          ),
          m.createElement(zt, { ...e }),
        );
      }
      function zt(e) {
        const { clanAccountID: t, userPollDef: n, fnSetDef: l } = e,
          o = (0, nt.LU)(),
          a = (0, Dt.rR)(o.GetClanSteamID()),
          [r] = (0, Me.q3)(() => [n.user_poll_background]),
          s = (0, m.useCallback)(
            (e, t, o, a, r) => {
              (0, i.wT)(
                null != o && o >= 0 && o < 31,
                "Unexpected value for elang: " + o,
              ),
                (0, i.wT)(
                  "user_poll_background" === r,
                  "Unexpected artwork type " + r,
                );
              const s = (0, Pt.G)(e, t);
              s.image && l({ ...n, user_poll_background: s.image });
            },
            [l, n],
          );
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(v.JU, null, (0, C.we)("#UserPolls_BackgroundImage")),
          m.createElement(
            "div",
            { className: Ut().PollArea },
            m.createElement(
              "p",
              null,
              (0, C.we)("#UserPolls_BackgroundImage_desc"),
            ),
            m.createElement(Gt.a, {
              rgRealmList: o.GetIncludedRealmList(),
              rgSupportArtwork: Dt.YX,
              strUploadAjaxURL: a,
              fnOnUploadSuccess: s,
              elOverrideDragAndDropText: (0, C.we)(
                "#Template_Section_MediaUpdate_Static_Dnd",
              ),
              bTwoPhaseUpload: !0,
              bDirectTempStorageUpload: !0,
            }),
            Boolean(r) && m.createElement("img", { src: (0, At.F)(t, r) }),
          ),
        );
      }
      function Rt(e) {
        switch (e) {
          case Dt.BY.k_EPollVoter_AnyUser:
            return (0, C.we)("#UserPolls_Voters_Anyone");
          case Dt.BY.k_EPollVoter_UserGameInLibrary:
            return (0, C.we)("#UserPolls_Voters_Owners");
          case Dt.BY.k_EPollVoter_MinPlayTime:
            return (0, C.we)("#UserPolls_Voters_Players");
          case Dt.BY.k_EPollVoter_MemberOfGroup:
            return (0, C.we)("#UserPolls_Voters_Members");
        }
      }
      function Ft(e) {
        const { clanAccountID: t, userPollDef: n, fnSetDef: l } = e,
          [o, a] = (0, Tt.TB)(t),
          [r, s] = (0, Me.q3)(() => [
            n.voter_min_playtime_seconds,
            n.voter_eligibility,
          ]),
          i = (0, m.useMemo)(() => {
            const e = [
              {
                label: Rt(Dt.BY.k_EPollVoter_AnyUser),
                data: Dt.BY.k_EPollVoter_AnyUser,
              },
            ];
            return (
              a && a.is_ogg && t != yt.II
                ? (e.push({
                    label: Rt(Dt.BY.k_EPollVoter_UserGameInLibrary),
                    data: Dt.BY.k_EPollVoter_UserGameInLibrary,
                  }),
                  e.push({
                    label: Rt(Dt.BY.k_EPollVoter_MinPlayTime),
                    data: Dt.BY.k_EPollVoter_MinPlayTime,
                  }))
                : !a ||
                  (a.is_ogg && t != yt.II) ||
                  e.push({
                    label: Rt(Dt.BY.k_EPollVoter_MemberOfGroup),
                    data: Dt.BY.k_EPollVoter_MemberOfGroup,
                  }),
              e
            );
          }, [t, a]);
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(v.JU, null, (0, C.we)("#UserPolls_Voters")),
          m.createElement(
            "div",
            { className: Ut().PollArea },
            m.createElement(v.m, {
              strDropDownClassName: Ge.DropDownScroll,
              rgOptions: i,
              selectedOption: s,
              onChange: (e) => {
                if (e.data != n.voter_eligibility) {
                  let t = { ...n, voter_eligibility: e.data };
                  e.data == Dt.BY.k_EPollVoter_MinPlayTime &&
                    (t.voter_min_playtime_seconds = 5 * Ht),
                    l(t);
                }
              },
              bDisableMouseOverlay: !0,
              contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
            }),
            Boolean(s == Dt.BY.k_EPollVoter_MinPlayTime) &&
              m.createElement(
                "div",
                { className: Ut().OptionInset },
                m.createElement(v.pd, {
                  type: "number",
                  label: (0, C.we)("#UserPolls_MinPlayTime"),
                  value: r / Ht,
                  min: 5,
                  onChange: (e) => {
                    var t, o;
                    const a =
                      (null !==
                        (o = Number.parseInt(
                          null === (t = null == e ? void 0 : e.currentTarget) ||
                            void 0 === t
                            ? void 0
                            : t.value,
                        )) && void 0 !== o
                        ? o
                        : 5) * Ht;
                    n.voter_min_playtime_seconds != a &&
                      l({ ...n, voter_min_playtime_seconds: a });
                  },
                }),
              ),
          ),
        );
      }
      function Lt(e) {
        const { userPollDef: t, fnSetDef: n } = e,
          [l, o] = (0, Me.q3)(() => [
            t.poll_end_time,
            t.poll_end_days_since_start,
          ]);
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(v.JU, null, (0, C.we)("#UserPolls_Starts")),
          m.createElement(
            "div",
            { className: Ut().PollArea },
            m.createElement(
              "div",
              { className: (0, fe.A)(Ge.FlexRowContainer, Ge.RadioOption) },
              m.createElement("input", {
                type: "radio",
                name: "StartDateRadio",
                id: "UserPollDialog_Days",
                checked: Boolean(o),
                onChange: () => {
                  t.poll_end_days_since_start ||
                    n({
                      ...t,
                      poll_end_time: void 0,
                      poll_end_days_since_start: jt * Yt,
                    });
                },
              }),
              m.createElement(
                "label",
                { htmlFor: "UserPollDialog_Days" },
                m.createElement(
                  "span",
                  null,
                  (0, C.we)("#UserPolls_EndTime_In_Days"),
                ),
              ),
            ),
            Boolean(o) &&
              m.createElement(
                "div",
                { className: Ut().OptionInset },
                m.createElement(v.pd, {
                  type: "number",
                  value: o / Yt,
                  min: 1,
                  onChange: (e) => {
                    var l, o;
                    const a =
                      (null !==
                        (o = Number.parseInt(
                          null === (l = null == e ? void 0 : e.currentTarget) ||
                            void 0 === l
                            ? void 0
                            : l.value,
                        )) && void 0 !== o
                        ? o
                        : 1) * Yt;
                    t.poll_end_days_since_start != a &&
                      n({
                        ...t,
                        poll_end_time: void 0,
                        poll_end_days_since_start: a,
                      });
                  },
                }),
              ),
            m.createElement(
              "div",
              { className: (0, fe.A)(Ge.FlexRowContainer, Ge.RadioOption) },
              m.createElement("input", {
                type: "radio",
                name: "StartDateRadio",
                id: "UserPollDialog_SpecificTime",
                checked: Boolean(l),
                onChange: () => {
                  t.poll_end_time ||
                    n({
                      ...t,
                      poll_end_days_since_start: void 0,
                      poll_end_time: Math.floor(Date.now() / 1e3) + jt * Yt,
                    });
                },
              }),
              m.createElement(
                "label",
                { htmlFor: "UserPollDialog_SpecificTime" },
                m.createElement(
                  "span",
                  null,
                  (0, C.we)("#UserPolls_EndTime_Specific"),
                ),
              ),
            ),
            Boolean(l) &&
              m.createElement(
                "div",
                { className: (0, fe.A)(Ut().OptionInset, Ge.FlexRowContainer) },
                m.createElement(Pe.K, {
                  strDescription: "",
                  nEarliestTime: Math.floor(Date.now() / 1e3) + 3600,
                  fnGetTimeToUpdate: () => l,
                  fnSetTimeToUpdate: (e) => {
                    t.poll_end_time != e &&
                      n({
                        ...t,
                        poll_end_days_since_start: void 0,
                        poll_end_time: e,
                      });
                  },
                  fnIsValidDateTime: () =>
                    l > Math.floor(Date.now() / 1e3) + 3600,
                }),
                m.createElement(
                  "span",
                  null,
                  (0, C.we)("#UserPolls_EndTime_Zone"),
                ),
              ),
          ),
        );
      }
      const jt = 7,
        Yt = 86400,
        Ht = 60;
      function Kt(e, t) {
        if (e) {
          const e =
            we.mh.GetEditModel().GetEventModel().jsondata.user_polls || [];
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.poll_id == t) >= 0);
          return {
            poll_id: t,
            options: [],
            localized_poll_description: (0, j.$Y)([], 31, null),
            poll_end_days_since_start: jt * Yt,
            poll_end_time: void 0,
            results_visibility_settings: Dt.$t.k_EPollResult_Visible_On_Demand,
            voter_eligibility: Dt.BY.k_EPollVoter_AnyUser,
          };
        }
        return t
          ? {
              ...t,
              localized_poll_description: [...t.localized_poll_description],
            }
          : ((0, i.wT)(
              !1,
              "HelperCreateOrCloneUserPollModel Expect Create or previous model",
            ),
            null);
      }
      function qt(e) {
        const {
            bCreate: t,
            hideModal: n,
            pollOptionsInput: l,
            fnUpdatePollOption: o,
          } = e,
          [a, r] = (0, m.useState)(() => Qt(t, l)),
          s = (0, Ne.E)();
        return m.createElement(
          ye.E,
          { active: !0 },
          m.createElement(
            Se.o0,
            {
              strTitle: (0, C.we)(
                t ? "#UserPolls_Option_Create" : "#UserPolls_Option_Edit",
              ),
              onOK: () => {
                o(a), n();
              },
              onCancel: () => {
                r(Qt(t, l)), n();
              },
            },
            m.createElement(
              "div",
              { className: Ut().DialogCtn },
              m.createElement(v.pd, {
                type: "text",
                label: (0, C.we)("#UserPolls_Option_Title"),
                value: C.NT.Get(a.localized_option, s),
                onChange: (e) => {
                  const t = { ...a };
                  (t.localized_option = [...t.localized_option]),
                    (t.localized_option = C.NT.Set(
                      t.localized_option,
                      s,
                      e.currentTarget.value,
                    )),
                    r(t);
                },
              }),
            ),
          ),
        );
      }
      function Qt(e, t) {
        if (e) {
          const e = we.mh.GetEditModel().GetEventModel().jsondata.user_polls,
            t =
              null == e ? void 0 : e.reduce((e, t) => e.concat(t.options), []);
          let n = 0;
          do {
            n = Math.floor(1e4 + 9e4 * Math.random());
          } while (t && t.findIndex((e) => e.option_id == n) >= 0);
          return { option_id: n, localized_option: (0, j.$Y)([], 31, null) };
        }
        return t
          ? { ...t }
          : ((0, i.wT)(
              !1,
              "HelperCreateOrClonePollOptionModel Expect Create or previous model",
            ),
            null);
      }
      var $t = n(69818),
        Wt = n(56330),
        Jt = n(37935);
      function Xt(e) {
        const t = we.mh.GetEditModel();
        for (let n = 0; n < t.GetEventModel().jsondata.user_polls.length; ++n) {
          const l = t.GetEventModel().jsondata.user_polls[n];
          for (let t = 0; t < l.options.length; ++t)
            if (l.options[t].option_id == e)
              return { pollIndex: n, optionIndex: t };
        }
        return null;
      }
      function Zt(e) {
        const t = we.mh.GetEditModel();
        for (let n = 0; n < t.GetEventModel().jsondata.user_polls.length; ++n) {
          const l = t.GetEventModel().jsondata.user_polls[n];
          if (l.poll_id == e) return { userPollDef: l, pollIndex: n };
        }
        return null;
      }
      var en = n(56654);
      function tn(e) {
        const { focusView: t, removeNode: n, poll_id: l } = e,
          o = (0, nt.LU)(),
          a = (0, Me.q3)(() => {
            var e;
            return null === (e = o.GetEventModel().jsondata.user_polls) ||
              void 0 === e
              ? void 0
              : e.find((e) => e.poll_id == l);
          }),
          [r, s, i] = (0, M.uD)(),
          c = m.useCallback(() => {
            t(), i();
          }, [t, i]),
          [d, u, p] = (0, M.uD)(),
          _ = m.useCallback(() => {
            t(), p();
          }, [t, p]);
        return a
          ? m.createElement(
              "div",
              { className: Te().EditorCtn },
              m.createElement(nn, { userPollDef: a, focusView: t }),
              m.createElement(
                "div",
                { className: Te().controls },
                m.createElement(
                  D.ff,
                  { onClick: s, tooltip: (0, C.we)("#Button_Edit") },
                  m.createElement(T.ffu, null),
                ),
                m.createElement(
                  D.ff,
                  { onClick: u, tooltip: (0, C.we)("#Button_Delete") },
                  m.createElement(T.sED, null),
                ),
                m.createElement(
                  D.ff,
                  {
                    onClick: () => {},
                    tooltip: Bt(a.results_visibility_settings),
                  },
                  m.createElement(B.WLA, null),
                ),
                m.createElement(
                  D.ff,
                  { onClick: () => {}, tooltip: Rt(a.voter_eligibility) },
                  m.createElement(B.JpU, null),
                ),
              ),
              Boolean(r) &&
                m.createElement(xt, {
                  hideModal: c,
                  userPollDef: a,
                  clanAccountID: o.GetClanAccountID(),
                  fnUpdateUserPollDef: (e) => {
                    const { pollIndex: t } = Zt(e.poll_id),
                      n = we.mh.GetEditModel();
                    (n.GetEventModel().jsondata.user_polls[t] = e),
                      n.SetDirty(Ce.IQ.description);
                  },
                }),
              Boolean(d) &&
                m.createElement(
                  ye.E,
                  { active: !0 },
                  m.createElement(Se.o0, {
                    strTitle: (0, C.we)("#Button_Delete"),
                    strDescription: (0, C.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { pollIndex: e } = Zt(a.poll_id),
                        t = we.mh.GetEditModel(),
                        l = [...t.GetEventModel().jsondata.user_polls];
                      l.splice(e, 1),
                        (t.GetEventModel().jsondata.user_polls = l),
                        t.SetDirty(Ce.IQ.description),
                        n();
                    },
                    closeModal: _,
                  }),
                ),
            )
          : m.createElement(
              "div",
              { className: Wt.ErrorStylesWithIcon },
              (0, C.we)("#UserPolls_Editor_FailToFindModel", l),
            );
      }
      function nn(e) {
        const { userPollDef: t, focusView: n } = e,
          [l, o] = (0, Me.q3)(() => [
            t.options || [],
            t.randomize_option_order,
          ]),
          a = (0, nt.LU)(),
          r = (0, Ne.E)(),
          [s, i, c] = (0, M.uD)(),
          d = m.useCallback(() => {
            n(), c();
          }, [n, c]),
          [u, p, _] = (0, M.uD)(),
          E = m.useCallback(() => {
            n(), _();
          }, [n, _]);
        return t
          ? m.createElement(
              Jt.W6,
              { userPollDef: t, eventModel: a.GetEventModel(), lang: r },
              l.map((e) =>
                m.createElement(on, {
                  key: "polloption" + t.poll_id + "_" + e.option_id,
                  focusView: n,
                  optionID: e.option_id,
                }),
              ),
              m.createElement(
                "div",
                { className: Ut().AdminOptions },
                m.createElement(
                  $t.wl,
                  { className: "", onClick: i },
                  (0, C.we)("#UserPolls_Option_Add"),
                ),
                m.createElement(
                  $t.wl,
                  { className: "", onClick: p },
                  (0, C.we)("#UserPolls_Option_Reorder"),
                ),
              ),
              s &&
                m.createElement(qt, {
                  bCreate: !0,
                  hideModal: d,
                  fnUpdatePollOption: (e) => {
                    const n = we.mh.GetEditModel();
                    t.options || (t.options = []),
                      t.options.push(e),
                      n.SetDirty(Ce.IQ.description);
                  },
                }),
              u &&
                m.createElement(ln, {
                  hideModal: E,
                  options: l,
                  bRandomize: o,
                  fnUpdateOptions: (e, n) => {
                    (t.randomize_option_order = n), (t.options = e);
                  },
                }),
            )
          : null;
      }
      function ln(e) {
        const {
            options: t,
            bRandomize: n,
            fnUpdateOptions: l,
            hideModal: o,
          } = e,
          a = (0, Ne.E)(),
          [r, s] = (0, m.useState)(n),
          [i, c] = (0, m.useState)(t);
        return m.createElement(
          ye.E,
          { active: !0 },
          m.createElement(
            Se.o0,
            {
              strTitle: (0, C.we)("#UserPolls_Option_Reorder"),
              strDescription: (0, C.we)("#UserPolls_Option_Reorder_desc"),
              onCancel: () => {
                s(n), c(t);
              },
              onOK: () => {
                l([...i], r);
              },
              closeModal: o,
            },
            m.createElement(v.Yh, {
              label: (0, C.we)("#UserPolls_Option_Randomize"),
              checked: r,
              onChange: s,
            }),
            m.createElement(en.A, {
              items: i,
              render: (e) => {
                var t, n;
                return m.createElement(
                  "div",
                  null,
                  (null === (t = e.localized_option) || void 0 === t
                    ? void 0
                    : t[a]) ||
                    (null === (n = e.localized_option) || void 0 === n
                      ? void 0
                      : n[0]) ||
                    "",
                );
              },
              onReorder: (e) => c(e),
            }),
          ),
        );
      }
      function on(e) {
        const { optionID: t, focusView: n } = e,
          [l, o] = (0, M.OP)(),
          a = (0, Me.q3)(() => {
            const { optionIndex: e, pollIndex: n } = Xt(t);
            return we.mh.GetEditModel().GetEventModel().jsondata.user_polls[n]
              .options[e];
          }),
          r = (0, Ne.E)(),
          [s, i, c] = (0, M.uD)(),
          d = m.useCallback(() => {
            n(), c();
          }, [n, c]),
          [u, p, _] = (0, M.uD)(),
          E = m.useCallback(() => {
            n(), _();
          }, [n, _]);
        return m.createElement(
          "div",
          { className: Te().Column, ...o },
          m.createElement(Jt.s3, { pollOptionDef: a, lang: r }),
          Boolean(l) &&
            m.createElement(
              "div",
              { className: Te().controls },
              m.createElement(
                D.ff,
                { onClick: i, tooltip: (0, C.we)("#Button_Edit") },
                m.createElement(T.ffu, null),
              ),
              m.createElement(
                D.ff,
                { onClick: p, tooltip: (0, C.we)("#Button_Delete") },
                m.createElement(T.sED, null),
              ),
            ),
          Boolean(s) &&
            m.createElement(qt, {
              bCreate: !1,
              hideModal: d,
              pollOptionsInput: a,
              fnUpdatePollOption: (e) => {
                const n = we.mh.GetEditModel(),
                  { optionIndex: l, pollIndex: o } = Xt(t),
                  a = [...n.GetEventModel().jsondata.user_polls[o].options];
                (a[l] = e),
                  (n.GetEventModel().jsondata.user_polls[o].options = a),
                  n.SetDirty(Ce.IQ.description);
              },
            }),
          Boolean(u) &&
            m.createElement(
              ye.E,
              { active: !0 },
              m.createElement(Se.o0, {
                strTitle: (0, C.we)("#Button_Delete"),
                strDescription: (0, C.we)("#Dialog_AreYouSure"),
                onOK: () => {
                  const e = we.mh.GetEditModel(),
                    { optionIndex: n, pollIndex: l } = Xt(t),
                    o = [...e.GetEventModel().jsondata.user_polls[l].options];
                  o.splice(n, 1),
                    (e.GetEventModel().jsondata.user_polls[l].options = o),
                    e.SetDirty(Ce.IQ.description);
                },
                closeModal: E,
              }),
            ),
        );
      }
      const an = m.memo(function (e) {
        const {
          view: t,
          schema: n,
          refUpdateToolbar: l,
          className: o,
          clanSteamID: a,
          bSpellcheckEnabled: r,
          setSpellcheckEnabled: s,
        } = e;
        return m.createElement(
          D.bI,
          { refUpdateToolbar: l, view: t },
          m.createElement(
            "div",
            { className: e.className },
            m.createElement(
              D.Ez,
              { className: e.className },
              m.createElement(rt.MV, null),
              m.createElement(D.XQ, null),
              m.createElement(rt.Km, { schema: n }),
              m.createElement(D.XQ, null),
              n.marks.link && m.createElement(rn, { schema: n }),
              m.createElement(D.XQ, null),
              m.createElement(rt.Hz, { schema: n }),
              m.createElement(rt.WJ, { schema: n, levels: 3 }),
              m.createElement(D.XQ, null),
              m.createElement(It, { schema: n }),
              m.createElement(cn, { schema: n, clanSteamID: a }),
              m.createElement(ct, { schema: n }),
              m.createElement(rt.C$, {
                schema: n,
                showIndentButtonsAsNeeded: !0,
              }),
              m.createElement(D.hK, null),
              s &&
                m.createElement(rt.Nt, {
                  bSpellcheckEnabled: r,
                  setSpellcheckEnabled: s,
                }),
              n.nodes.meetsteamsessiongroup &&
                m.createElement(mn, { schema: n }),
              n.nodes.meetsteamscheduleview &&
                m.createElement(un, { schema: n }),
              n.nodes.userpolls &&
                k.iA.is_support &&
                m.createElement(sn, { schema: n }),
            ),
            m.createElement(dt, { className: e.className, schema: n }),
          ),
        );
      });
      function rn(e) {
        const t = (0, pt.V9)();
        return m.createElement(rt.z9, { schema: e.schema, addtlAttrs: t });
      }
      function sn(e) {
        const { schema: t } = e,
          { callbacks: n, view: l } = (0, D.wU)(),
          o = (0, nt.LU)(),
          [a, r, s] = (0, F.uD)(),
          i = m.useCallback(() => {
            s(), l.focus();
          }, [s, l]),
          c = m.useCallback(
            (e) => {
              o.GetEventModel().jsondata.user_polls ||
                (o.GetEventModel().jsondata.user_polls = []),
                o.GetEventModel().jsondata.user_polls.push({ ...e }),
                (function (e, t, n) {
                  e.dispatch(
                    e.state.tr.insert(
                      e.state.selection.to,
                      t.create({ poll_id: n }),
                    ),
                  );
                })(l, t.nodes.userpolls, e.poll_id),
                i();
            },
            [t, l, i, o],
          );
        return m.createElement(
          m.Fragment,
          null,
          a &&
            m.createElement(Ot, {
              hideModal: i,
              clanAccountID: o.GetClanAccountID(),
              fnUpdateSession: c,
            }),
          m.createElement(
            D.ff,
            { tooltip: "#UserPolls_Toolbar_ttip", onClick: r, toggled: a },
            m.createElement(T.fQB, null),
          ),
        );
      }
      function cn(e) {
        const { schema: t, clanSteamID: n } = e,
          { callbacks: l, view: o } = (0, D.wU)(),
          { image: a, video: r, previewyoutube: s } = t.nodes,
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
            activeModal: _,
          } = ae({
            clanSteamID: n,
            imageNodeType: a,
            videoNodeType: r,
            onItemSelected: i,
            onHideModal: c,
          });
        return m.createElement(
          m.Fragment,
          null,
          p,
          a &&
            m.createElement(
              D.ff,
              {
                tooltip: "#EventEditor_InsertImage_Title",
                onClick: d,
                toggled: "image" == _,
              },
              m.createElement(T._V3, null),
            ),
          r &&
            m.createElement(
              D.ff,
              {
                tooltip: "#EventEditor_EditVideo_Title",
                onClick: u,
                toggled: "video" == _,
              },
              m.createElement(T.CeX, null),
            ),
          s && m.createElement(dn, { schema: t }),
          (a || r || s) && m.createElement(D.XQ, null),
        );
      }
      function dn(e) {
        const { schema: t } = e,
          { callbacks: n, view: l } = (0, D.wU)(),
          [o, a, r] = (0, F.uD)(),
          s = m.useCallback(() => {
            r(), l.focus();
          }, [r, l]),
          i = m.useCallback(
            (e, n) => {
              !(function (e, t, n, l = Ee.V2.left) {
                e.dispatch(
                  e.state.tr.insert(
                    e.state.selection.to,
                    t.create({ videoID: n, align: l }),
                  ),
                );
              })(l, t.nodes.previewyoutube, e, n),
                s();
            },
            [t, l, s],
          );
        return m.createElement(
          m.Fragment,
          null,
          o && m.createElement(be, { hideModal: s, onSave: i }),
          m.createElement(
            D.ff,
            { tooltip: "#EventEditor_InsertYouTube", onClick: a, toggled: o },
            m.createElement("img", { src: ut.A }),
          ),
        );
      }
      function mn(e) {
        const { schema: t } = e,
          { callbacks: n, view: l } = (0, D.wU)(),
          o = (0, nt.LU)(),
          [a, r, s] = (0, F.uD)(),
          i = m.useCallback(() => {
            s(), l.focus();
          }, [s, l]),
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
                })(l, t.nodes.meetsteamsessiongroup, e.group_id),
                i();
            },
            [t, l, i, o],
          );
        if ((null == o ? void 0 : o.GetClanAccountID()) == (0, ke.H)())
          return m.createElement(
            m.Fragment,
            null,
            a && m.createElement(je, { hideModal: i, fnUpdateSession: c }),
            m.createElement(
              D.ff,
              { tooltip: "#MeetSteam_add_group_ttip", onClick: r, toggled: a },
              m.createElement("img", { src: ut.A }),
            ),
          );
      }
      function un(e) {
        const { schema: t } = e,
          { callbacks: n, view: l } = (0, D.wU)(),
          o = (0, nt.LU)(),
          [a, r, s] = (0, F.uD)(),
          i = m.useCallback(() => {
            s(), l.focus();
          }, [s, l]),
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
                })(l, t.nodes.meetsteamscheduleview, e.schedule_id),
                i();
            },
            [t, l, i, o],
          );
        if ((null == o ? void 0 : o.GetClanAccountID()) == (0, ke.H)())
          return m.createElement(
            m.Fragment,
            null,
            a &&
              m.createElement(ft, {
                hideModal: i,
                inputScheduleModel: null,
                fnUpdateSession: c,
              }),
            m.createElement(
              D.ff,
              {
                tooltip: "#MeetSteam_add_schedule_ttip",
                onClick: r,
                toggled: a,
              },
              m.createElement("img", { src: ut.A }),
            ),
          );
      }
      var pn = n(75844),
        _n = n(90316),
        En = n.n(_n),
        vn = n(1805),
        fn = n(81962);
      function gn(e) {
        const { schema: t, emoticonStore: n } = e,
          l = t.nodes.emoticon;
        (0, Mt.k3)(n),
          (0, a.c$)(
            m.useMemo(
              () => (0, pe.sM)({ rules: [bn(/:([a-zA-Z0-9_]+):$/, l, n)] }),
              [l, n],
            ),
          );
        const o = m.useMemo(
          () => [
            {
              type: l,
              component: hn,
              readProps: (e) => ({ emoticonStore: n, emoticon: e.textContent }),
            },
          ],
          [l, n],
        );
        return m.createElement(r.U, { specs: o });
      }
      function hn(e) {
        const { selected: t, emoticonStore: n, emoticon: l } = e;
        (0, Mt.k3)(n);
        if (n.BHasEmoticon(l)) {
          const e = t
            ? { background: "#54a5d4", filter: "brightness(1.2)" }
            : void 0;
          return m.createElement(
            "span",
            { style: e },
            m.createElement(fn.n, { emoticon: l }),
          );
        }
        return `:${l}:`;
      }
      function bn(e, t, n) {
        return new pe.fV(e, (e, l, o, a) => {
          const r = l[1];
          if (!n.BHasEmoticon(r)) return null;
          const s = t.create(null, e.schema.text(r));
          return e.tr.replaceWith(o, a, s);
        });
      }
      var Cn = n(73560),
        wn = n(91254);
      function Mn(e) {
        const { editModel: t, href: n } = e,
          l = (0, Cn.W7)(n);
        if (l) {
          const o = l.fnBBComponent(n, {
            partnerEventStore: wn.O3,
            event: t.GetEventModel(),
          });
          return m.createElement(
            P,
            {
              toolbar: m.createElement(kn, {
                href: n,
                removeNode: e.removeNode,
                update: e.update,
                schema: e.schema,
              }),
            },
            o,
          );
        }
        return m.createElement("a", { href: n }, n);
      }
      function kn(e) {
        const { href: t, removeNode: n, update: l, schema: o } = e;
        return m.createElement(
          A,
          { onDeleteClick: n },
          m.createElement(
            x,
            {
              onClick: () => window.open(t),
              description: (0, C.we)("#ContextMenu_OpenLinkInNewWindow"),
            },
            m.createElement(T.YNO, null),
          ),
          m.createElement(
            x,
            {
              onClick: () =>
                l((0, r.M)(o.text(t, [o.marks.link.create({ href: t })]))),
              description: (0, C.we)(
                "#EventEditor_DynamicLink_ConvertToTextLink",
              ),
            },
            m.createElement(T.Rkk, null),
          ),
        );
      }
      var In = n(42714);
      const Sn = (0, pn.PA)(function (e) {
        const { editModel: t } = e,
          n = t.GetEventModel().loadedAllLanguages,
          l = t.GetCurEditLanguage();
        return n
          ? m.createElement(
              Y.tH,
              null,
              m.createElement(yn, { ...e, eCurrentEditLanguage: l }),
            )
          : null;
      });
      const yn = m.memo(function (e) {
        const {
            editModel: t,
            refOnInsertImage: n,
            limitBBCode: a,
            eCurrentEditLanguage: r,
          } = e,
          [s, c] = m.useState(),
          d = m.useMemo(() => (0, ue.u)(a), [a]),
          [p, _] = m.useState(),
          v = (function (e, t) {
            const { nodes: n } = t.pm_schema,
              l = (function (e, t, n) {
                const l = m.useCallback(
                  (l) => {
                    const o = `^https?://${k.TS.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)(?<extension>\\.[^\\.]*)$`,
                      a = l.match(o);
                    if (
                      a &&
                      a.groups.clanid == e.GetClanAccountID().toString()
                    ) {
                      const l = E.pU.GetClanImageByImageHash(
                        e.GetClanSteamID(),
                        a.groups.filename,
                      );
                      let o = l && me(l, t, n);
                      if (o) return o;
                    }
                    return "default";
                  },
                  [e, t, n],
                );
                return t ? l : void 0;
              })(e, n.image, n.video),
              o = (function (e, t) {
                const n = m.useCallback(
                  (e) => ((0, Cn.yO)(e) ? t.create({ href: e }) : "default"),
                  [t],
                );
                return t ? n : void 0;
              })(0, n.dynamiclink);
            return m.useCallback(
              (...e) => {
                let t = "default";
                return (
                  l && (t = l(...e)), "default" == t && o && (t = o(...e)), t
                );
              },
              [l, o],
            );
          })(t, d);
        m.useEffect(() => {
          _(
            (function (e, t, n, o) {
              let a = t.GetDescription(n);
              return (
                (a =
                  null == a
                    ? void 0
                    : a.replace(
                        Mt.pN.GetUnvalidatedEmoticonReplaceRegex(),
                        "[emoticon]$1[/emoticon]",
                      )),
                new l.n(e, a, (e) => t.SetDescription(n, e), {
                  parser: {
                    fnProcessText: (t) =>
                      (0, In.F)(e.pm_schema, t, e.pm_schema.marks.link, o),
                  },
                })
              );
            })(d, t, r, v),
          );
        }, [d, v, t, r]);
        const f = m.useRef(void 0);
        (0, o.i)(p, { msAutosaveTimeout: 1e3 });
        const { nodes: g, marks: h } = d.pm_schema;
        return (
          (function (e, t, n, l, o) {
            m.useEffect(() => {
              if (!o || !t) return;
              const a = (e, a) => {
                let r;
                switch (a) {
                  case u._o.k_eInsertFullImage:
                    r = t.create({ src: (0, u.fw)(e) });
                    break;
                  case u._o.k_eInsertThumbnail:
                    r = t.create({ src: (0, u.fw)(e, !0) }, null, [
                      l.create({ href: (0, u.fw)(e) }),
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
                    (0, i.z_)(a, `Unhandled insert type ${a}`);
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
            }, [e, t, n, l, o]);
          })(n, g.image, g.video, h.link, s),
          m.createElement(
            de,
            { editModel: t, imageNode: g.image, videoNode: g.video },
            m.createElement(
              "div",
              { className: En().EventDescriptionContainer },
              m.createElement(an, {
                view: s,
                schema: d.pm_schema,
                refUpdateToolbar: f,
                className: En().ToolBar,
                clanSteamID: t.GetClanSteamID(),
              }),
              m.createElement(
                "div",
                { className: En().EventDescriptionArea },
                m.createElement(
                  vn.l,
                  {
                    pmState: p,
                    className: (0, fe.A)(
                      En().EventDescriptionRichField,
                      En().EventDetailsBody,
                    ),
                    refOnUpdate: f,
                    refView: c,
                    panelProps: { onBlur: () => p.CommitChanges() },
                  },
                  m.createElement(Dn, {
                    eventSchemaConfig: d,
                    editModel: t,
                    onURLPasted: v,
                  }),
                ),
              ),
            ),
          )
        );
      });
      const Dn = m.memo(function (e) {
        const { eventSchemaConfig: t, editModel: n, onURLPasted: l } = e,
          { marks: o, nodes: a } = t.pm_schema;
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(s.W, {
            linkMarkType: o.link,
            onURLPasted: l,
            schema: t.pm_schema,
          }),
          a.image && m.createElement(b.pw, { nodeType: a.image }),
          m.createElement(Tn, {
            schemaConfig: t,
            editModel: n,
            clanSteamID: n.GetClanSteamID(),
          }),
          m.createElement(gn, { emoticonStore: wt.A, schema: t.pm_schema }),
        );
      });
      function Tn(e) {
        const { schemaConfig: t, editModel: n, clanSteamID: l } = e,
          o = t.pm_schema,
          s = m.useMemo(
            () =>
              (function (e) {
                return pe.sM({ rules: [pe.tG(/^>$/, e.nodes.quote)] });
              })(o),
            [o],
          );
        (0, a.c$)(s);
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
              clanSteamID: l,
            }),
            [t, c, d, u, n, l],
          ),
          _ = m.useMemo(
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
                component: lt,
                readProps: (e) => ({ group_id: e.attrs.group_id }),
              },
              i.meetsteamscheduleview && {
                type: i.meetsteamscheduleview,
                component: bt,
                readProps: (e) => ({ schedule_id: e.attrs.schedule_id }),
              },
              i.userpolls && {
                type: i.userpolls,
                component: tn,
                readProps: (e) => ({ poll_id: e.attrs.poll_id }),
              },
              i.dynamiclink && {
                type: i.dynamiclink,
                component: Mn,
                readProps: (e) => ({
                  editModel: n,
                  href: e.attrs.href,
                  schema: t.pm_schema,
                }),
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
        return m.createElement(r.U, { specs: _ });
      }
    },
  },
]);

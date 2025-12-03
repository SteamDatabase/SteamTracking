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
      n.r(t), n.d(t, { default: () => Tn });
      var l = n(90286),
        o = n(26555),
        a = n(22145),
        r = n(69956),
        s = n(28106),
        i = n(81393),
        c = n(37085),
        d = n(37403),
        m = n(64238),
        u = n.n(m),
        _ = n(90626),
        p = n(81047),
        E = n(28954),
        g = n(27666),
        v = n(86355),
        f = n(68255),
        h = n(2805),
        b = n(36509),
        C = n(83882),
        w = n(71696),
        k = n(61859),
        M = n(27650),
        I = n(73745),
        S = n(30470),
        y = n(21134),
        D = n(94429),
        T = n(6941),
        N = n(30175),
        U = n(60395),
        P = n(86927);
      function G(e) {
        const { className: t, ...n } = e;
        return _.createElement("div", {
          className: u()(t, T.EditableComponentToolbarContainer),
          ...n,
        });
      }
      function A(e) {
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
          _.createElement(
            "div",
            {
              style: s,
              className: u()(
                T.InlineHoverContainer,
                i && T.WidthConstrained,
                !r && T.Hidden,
              ),
            },
            t,
          )
        );
      }
      function O(e) {
        const { className: t, toolbar: n, children: l } = e,
          [o, a] = (0, P.OP)(),
          [r, s] = _.useState({ top: 0, left: 0, width: 0, height: 0 }),
          i = (0, _.useRef)(void 0);
        return (
          (0, _.useLayoutEffect)(() => {
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
          _.createElement(
            _.Fragment,
            null,
            _.createElement(
              "span",
              {
                ref: i,
                className: u()(t, T.EditableComponentInlineContainer),
                ...a,
              },
              _.createElement(A, {
                ...r,
                toolbar: n,
                visible: o && r.width > 0,
              }),
              l,
            ),
          )
        );
      }
      function B(e) {
        const {
          onEditClick: t,
          strEditDescription: n = (0, k.we)("#Button_Edit"),
          onDeleteClick: l,
          strDeleteDescription: o = (0, k.we)("#Button_Remove"),
          bStrongShadows: a = !1,
          children: r,
        } = e;
        return _.createElement(
          x,
          { bStrongShadows: a },
          r,
          t &&
            _.createElement(
              V,
              { onClick: t, description: n },
              _.createElement(U.ffu, null),
            ),
          l &&
            _.createElement(
              V,
              { onClick: l, description: o },
              _.createElement(U.sED, null),
            ),
        );
      }
      function x(e) {
        const { bStrongShadows: t, children: n } = e;
        return _.createElement(
          "span",
          { className: u()(T.EditableComponentToolbar, t && T.StrongShadows) },
          n,
        );
      }
      function V(e) {
        const { onClick: t, description: n, children: l } = e;
        return _.createElement(
          N.ff,
          { onClick: t, tooltip: n, className: T.FloatingToolbarButton },
          l,
        );
      }
      var z = n(12155),
        R = n(88997),
        F = n(60155),
        L = n(5068),
        j = n(64753),
        Y = n(9154),
        H = n(62490),
        K = n(84811),
        q = n(32728);
      function Q(e, t) {
        const n = le(t);
        if (n) return { node: t, nodeAttrs: n, clanImage: re(e, n) };
      }
      function $(e) {
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
          [d, m, u] = (0, j.uD)(),
          p =
            (_.useCallback(() => {
              u(), c();
            }, [u, c]),
            o.GetClanSteamID()),
          E = _.useMemo(() => {
            let e = [];
            return (
              t.descendants((t) => {
                (t.type != n && t.type != l) || e.push(t);
              }),
              e
            );
          }, [n, l, t]),
          g = _.useCallback((e) => i((0, r.M)(e)), [i]),
          v = "true" === t.attrs.autoadvance,
          [f, h] = W(g, {
            autoAdvance: v,
            clanSteamID: p,
            imageNodeType: n,
            videoNodeType: l,
            carouselNodeType: t.type,
          }),
          b = _.useCallback(() => {
            f(E);
          }, [f, E]);
        return _.createElement(
          _.Fragment,
          null,
          h,
          _.createElement(
            G,
            null,
            _.createElement(B, {
              onDeleteClick: s,
              strDeleteDescription: (0, k.we)(
                "#EventEditor_CarouselEditor_RemoveCarousel",
              ),
              onEditClick: b,
              strEditDescription: (0, k.we)(
                "#EventEditor_CarouselEditor_EditCarousel",
              ),
            }),
            _.createElement(
              K.tH,
              null,
              _.createElement(
                D.Bm,
                {
                  strTag: "carousel",
                  args: {},
                  rawargs: "",
                  event: o.GetEventModel(),
                },
                E.map((e, t) =>
                  _.createElement(ae, {
                    key: t,
                    node: e,
                    nodeAttrs: le(e),
                    schemaConfig: a,
                    event: o.GetEventModel(),
                  }),
                ),
              ),
            ),
          ),
        );
      }
      function W(e, t) {
        const n = t.carouselNodeType,
          [l, o] = _.useState(void 0),
          a = t.clanSteamID,
          r = _.useCallback(
            (e) => {
              o(e.map((e) => Q(a, e)).filter(Boolean));
            },
            [a],
          ),
          s = _.useCallback(() => o(void 0), []),
          i = _.useCallback(
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
          _.createElement(
            Y.EN,
            { active: void 0 !== l },
            _.createElement(J, {
              ...t,
              images: l,
              onCarouselImagesSelected: i,
              hideModal: s,
            }),
          ),
        ];
      }
      function X(e) {
        const { nodeAttrs: t } = e;
        return "image" == t.type ? t.attrs.src : t.attrs.mp4 || t.attrs.webm;
      }
      function J(e) {
        var t;
        const {
            hideModal: n,
            images: l,
            onCarouselImagesSelected: o,
            clanSteamID: a,
            imageNodeType: r,
            videoNodeType: s,
          } = e,
          [i, c] = _.useState(l),
          [d, m] = _.useState(
            null !== (t = e.autoAdvance) && void 0 !== t && t,
          ),
          u = _.useCallback(
            (e, t) => {
              const n = Q(a, t.create(e));
              if (!n)
                throw `Couldn't parse image ${t.name} - ${JSON.stringify(e)}`;
              c((e) => {
                const t = X(n);
                return e.find((e) => X(e) == t) ? e : [...e, n];
              });
            },
            [a],
          ),
          p = _.useCallback(() => {
            o(d, i), n();
          }, [o, n, d, i]),
          E = _.useCallback((e) => {
            e.destination &&
              c((t) => H.yY(t.slice(), e.source.index, e.destination.index));
          }, []),
          { showInsertImageModal: g, imageModal: v } = se({
            clanSteamID: a,
            imageNodeType: r,
            videoNodeType: s,
            onItemSelected: u,
          });
        return _.createElement(
          _.Fragment,
          null,
          v,
          _.createElement(
            Y.mt,
            { active: !0, onDismiss: n },
            _.createElement(
              f.Y9,
              null,
              (0, k.we)("#EventEditor_CarouselEditor_EditCarousel"),
            ),
            _.createElement(
              f.nB,
              null,
              _.createElement(f.RF, {
                label: (0, k.we)("#EventEditor_CarouselEditor_AutoAdvance"),
                checked: d,
                onChange: m,
              }),
              _.createElement(
                q.JY,
                { onDragEnd: E },
                _.createElement(
                  q.gL,
                  { droppableId: "droppable", direction: "horizontal" },
                  (e) =>
                    _.createElement(
                      "div",
                      {
                        className: L.CarouselList,
                        ...e.droppableProps,
                        ref: e.innerRef,
                      },
                      i.map((e, t) =>
                        _.createElement(
                          K.tH,
                          { key: X(e) },
                          _.createElement(
                            q.sx,
                            { draggableId: X(e), index: t },
                            (n, l, o) =>
                              _.createElement(Z, {
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
              _.createElement(
                f.xh,
                {
                  bottomSeparator: "none",
                  label: (0, k.we)(
                    "#EventEditor_CarouselEditor_AddAnotherItem",
                  ),
                  className: L.AddButton,
                  onClick: g,
                },
                _.createElement(U.OMN, { className: L.PlusIcon }),
              ),
            ),
            _.createElement(
              f.wi,
              null,
              _.createElement(f.CB, { onCancel: n, onOK: p }),
            ),
          ),
        );
      }
      function Z(e) {
        const {
            draggableProvided: t,
            image: n,
            setSelectedImages: l,
            iImage: o,
            cImages: a,
          } = e,
          r = _.useCallback(() => {
            l((e) => e.filter((e) => e != n));
          }, [n, l]);
        return _.createElement(
          "div",
          {
            className: u()(L.ListItem, L.DraggableItem),
            ref: t.innerRef,
            ...t.draggableProps,
            ...t.dragHandleProps,
          },
          _.createElement(
            "div",
            { className: L.ImagePreview },
            _.createElement("img", {
              src: g.z.ReplacementTokenToClanImageURL(n.node.attrs.src),
            }),
            _.createElement(
              "div",
              { className: L.Controls },
              _.createElement(
                "div",
                { className: L.Control },
                _.createElement(
                  N.ff,
                  { onClick: r, className: L.Button },
                  _.createElement(U.sED, null),
                ),
              ),
            ),
          ),
        );
      }
      function ee(e) {
        const {
            schemaConfig: t,
            node: n,
            editModel: l,
            imageNodeType: o,
            videoNodeType: a,
            carouselNodeType: s,
            clanSteamID: i,
            setAttrs: c,
            focusView: d,
            removeNode: m,
            update: p,
            selected: E,
          } = e,
          [g, v, f] = (0, I.uD)(),
          h = le(n);
        let b = _.createElement(ae, {
          schemaConfig: t,
          event: l.GetEventModel(),
          node: n,
          nodeAttrs: h,
        });
        const C = _.useCallback(() => {
            d(), f();
          }, [d, f]),
          w = _.useCallback((e) => p((0, r.M)(e)), [p]),
          [k, M] = W(w, {
            clanSteamID: i,
            imageNodeType: o,
            videoNodeType: a,
            carouselNodeType: s,
          }),
          S = _.useCallback(() => {
            k([n]);
          }, [n, k]),
          D = { createCarousel: s ? S : void 0, src: oe(h) };
        let T = u()(y.ClanImageContainer, E && y.Selected);
        return _.createElement(
          _.Fragment,
          null,
          g &&
            _.createElement(ie, {
              bIsEdit: !0,
              nodeAttrs: h,
              hideModal: C,
              imageNodeType: o,
              videoNodeType: a,
              clanSteamID: i,
              onItemSelected: c,
            }),
          M,
          _.createElement(
            O,
            {
              className: T,
              toolbar: _.createElement(te, {
                showModal: v,
                removeNode: m,
                contextMenuProps: D,
              }),
            },
            b,
          ),
        );
      }
      function te(e) {
        const { showModal: t, removeNode: n, contextMenuProps: l } = e,
          o = _.useCallback(
            (e) => {
              (0, R.lX)(_.createElement(ne, { ...l }), e, {
                bPreferPopTop: !1,
                bPreferPopLeft: !0,
              });
            },
            [l],
          );
        return _.createElement(
          B,
          { onEditClick: t, onDeleteClick: n },
          _.createElement(
            V,
            {
              onClick: o,
              description: (0, k.we)("#ActionButtonLabelContextMenu"),
            },
            _.createElement(z.h28, null),
          ),
        );
      }
      function ne(e) {
        const { createCarousel: t, src: n } = e,
          l = _.useCallback(() => {
            window.open(n);
          }, [n]);
        return _.createElement(
          F.tz,
          null,
          t &&
            _.createElement(
              F.kt,
              { onSelected: t },
              (0, k.we)("#EventEditor_CarouselEditor_CreateACarousel"),
            ),
          _.createElement(
            F.kt,
            { onSelected: l },
            (0, k.we)("#EventEditor_ImageEdit_PreviewImage"),
          ),
        );
      }
      function le(e) {
        const { type: t, attrs: n } = e;
        return "image" == t.name
          ? { type: "image", attrs: n }
          : "video" == t.name
            ? { type: "video", attrs: n }
            : void 0;
      }
      function oe(e) {
        return "image" == e.type
          ? e.attrs.src
          : "video" == e.type
            ? e.attrs.mp4 || e.attrs.webm
            : void 0;
      }
      function ae(e) {
        const { schemaConfig: t, event: n, node: l, nodeAttrs: o } = e,
          { type: a, attrs: r } = o,
          s = t.ConvertAttrToBBCodeArgs(l, r);
        return "image" == a
          ? _.createElement(D.Bm, {
              strTag: "img",
              args: s,
              rawargs: "",
              event: n,
              showErrorInfo: !0,
            })
          : "video" == a
            ? _.createElement(D.Bm, {
                key: `${r.mp4}_${r.webm}`,
                strTag: "video",
                args: s,
                rawargs: "",
                event: n,
                showErrorInfo: !0,
              })
            : ((0, i.z_)(a, "unhandled type: " + a), null);
      }
      function re(e, t) {
        const { type: n, attrs: l } = t;
        let o;
        if (
          ("image" == n ? (o = l.src) : "video" == n && (o = l.mp4 || l.webm),
          o)
        ) {
          const [t] = g.z.ExtractHashFromBBCodeURL(o);
          return t && v.pU.GetClanImageByImageHash(e, t);
        }
      }
      function se(e) {
        const {
            clanSteamID: t,
            imageNodeType: n,
            videoNodeType: l,
            onItemSelected: o,
            onHideModal: a,
          } = e,
          [r, s] = _.useState(),
          i = _.useCallback(() => {
            s(void 0), a && a();
          }, [a]);
        return {
          showInsertImageModal: _.useCallback(() => {
            s({ type: "image", attrs: { src: "" } });
          }, []),
          showInsertVideoModal: _.useCallback(() => {
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
            _.createElement(ie, {
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
      function ie(e) {
        const {
            bIsEdit: t = !1,
            nodeAttrs: n,
            hideModal: l,
            clanSteamID: o,
            onItemSelected: a,
            imageNodeType: r,
            videoNodeType: s,
          } = e,
          { type: c, attrs: d } = n,
          m = (function (e, t) {
            return _.useMemo(() => re(e, t), [e, t.type, t.attrs]);
          })(o, n),
          [p, E] = _.useState(() =>
            m ||
            ("image" == n.type && !n.attrs.src) ||
            ("video" == n.type && !n.attrs.mp4 && !n.attrs.webm)
              ? "uploaded"
              : "hotlink",
          ),
          g = _.useCallback(
            (e) => {
              a({ src: e }, r), l();
            },
            [a, l, r],
          ),
          v = _.useCallback(
            (e) => {
              a({ ...d, ...e }, s), l();
            },
            [d, a, l, s],
          ),
          h = _.useId();
        let b,
          w = null;
        if ("image" == c)
          (w = _.createElement(ce, {
            active: "hotlink" == p,
            bIsEdit: t,
            hideModal: l,
            onImageSelected: g,
            src: d.src,
          })),
            (b = t
              ? (0, k.we)("#EventEditor_ReplaceImage_Title")
              : (0, k.we)("#EventEditor_InsertImage_Title"));
        else {
          if ("video" != c) return (0, i.z_)(c, "Unhandled type"), null;
          (w = _.createElement(de, {
            active: "hotlink" == p,
            bIsEdit: t,
            hideModal: l,
            attrs: d,
            setAttrs: a,
          })),
            (b = (0, k.we)("#EventEditor_EditVideo_Title"));
        }
        return _.createElement(
          C.mt,
          { active: !0, onDismiss: l, className: y.ClanImageModalContent },
          _.createElement(f.Y9, { id: h }, b),
          _.createElement(
            f.zW,
            { labelId: h, value: p, onChange: (e) => E(e) },
            _.createElement(f.a, { value: "uploaded" }, "Uploaded"),
            _.createElement(f.a, { value: "hotlink" }, "Enter URL"),
          ),
          _.createElement(
            "div",
            {
              className: u()(y.ClanImageModalMode, "uploaded" == p && y.Active),
            },
            _.createElement(me, {
              bIsEdit: t,
              hideModal: l,
              onImageSelected: g,
              onVideoSelected: s && v,
              clanSteamID: o,
              selectedImage: m,
            }),
          ),
          _.createElement(
            "div",
            {
              className: u()(y.ClanImageModalMode, "hotlink" == p && y.Active),
            },
            w,
          ),
        );
      }
      function ce(e) {
        const {
            active: t,
            bIsEdit: n,
            hideModal: l,
            onImageSelected: o,
            src: a,
          } = e,
          [r, s] = _.useState(a),
          i = _.useCallback((e) => s(e.currentTarget.value), []),
          c = n
            ? (0, k.we)("#EventEditor_ReplaceImage_Title")
            : (0, k.we)("#EventEditor_InsertImage_Title"),
          d = _.useRef(void 0);
        return (
          _.useEffect(() => {
            t && d.current.Focus();
          }, [t]),
          _.createElement(
            f.lV,
            { onSubmit: () => o(r) },
            _.createElement(
              f.nB,
              null,
              _.createElement(f.pd, {
                ref: d,
                value: r,
                onChange: i,
                label: (0, k.we)("#EventEditor_InsertImage_URL"),
              }),
            ),
            _.createElement(f.CB, {
              onCancel: l,
              strOKText: c,
              bOKDisabled: !r || r == a,
            }),
          )
        );
      }
      function de(e) {
        const {
            active: t,
            bIsEdit: n,
            hideModal: l,
            attrs: o,
            setAttrs: a,
          } = e,
          [r, s] = _.useState(o.mp4),
          [i, c] = _.useState(o.webm),
          [d, m] = _.useState(o.poster),
          [u, p] = _.useState(!!o.autoplay),
          [E, g] = _.useState(!!o.controls),
          v = _.useRef(void 0);
        _.useEffect(() => {
          t && v.current.Focus();
        }, [t]);
        return _.createElement(
          f.lV,
          {
            onSubmit: (e) => {
              a({
                ...o,
                mp4: r || void 0,
                webm: i || void 0,
                poster: d || void 0,
                autoplay: u,
                controls: E,
              }),
                l();
            },
          },
          _.createElement(
            f.nB,
            null,
            _.createElement(f.pd, {
              ref: v,
              value: r,
              onChange: (e) => s(e.currentTarget.value),
              label: (0, k.we)("#EventEditor_InsertVideo_InputMP4"),
            }),
            _.createElement(f.pd, {
              value: i,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, k.we)("#EventEditor_InsertVideo_InputWebM"),
            }),
            _.createElement(f.pd, {
              value: d,
              onChange: (e) => m(e.currentTarget.value),
              label: (0, k.we)("#EventEditor_InsertVideo_InputPoster"),
            }),
            _.createElement(f.Yh, {
              checked: u,
              onChange: p,
              label: (0, k.we)("#EventEditor_InsertVideo_InputAutoplay"),
            }),
            _.createElement(f.Yh, {
              checked: E,
              onChange: g,
              label: (0, k.we)("#EventEditor_InsertVideo_InputShowControls"),
            }),
          ),
          _.createElement(f.CB, {
            onCancel: l,
            strOKText: (0, k.we)("#EventEditor_EditVideo_Title"),
            bOKDisabled: !r && !i,
          }),
        );
      }
      function me(e) {
        const {
            bIsEdit: t,
            hideModal: n,
            onImageSelected: l,
            onVideoSelected: o,
            clanSteamID: a,
          } = e,
          [r, s] = _.useState(""),
          [i, c] = _.useState(e.selectedImage),
          m = t
            ? (0, k.we)("#EventEditor_ReplaceImage_Title")
            : (0, k.we)("#EventEditor_InsertImage_Title"),
          u = _.useCallback(
            (e) => {
              switch (e.file_type) {
                case d.bg.k_EClanImageFileType_MP4:
                  o && o({ mp4: (0, p.fw)(e) });
                  break;
                case d.bg.k_EClanImageFileType_WEBM:
                  o && o({ webm: (0, p.fw)(e) });
                  break;
                default:
                  l((0, p.fw)(e));
              }
            },
            [l, o],
          ),
          E = _.useCallback(
            (e, t) => {
              c(e), t && u(e);
            },
            [u],
          );
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            f.lV,
            { onSubmit: () => i && u(i), className: y.ClanImageGridForm },
            _.createElement(b.g, { fnSetImageSearch: s }),
            _.createElement(
              "div",
              { className: y.ClanImageGridContainer },
              _.createElement(h.ge, {
                clanAccountID: a.GetAccountID(),
                fileNameSearch: r,
                onImageSelected: E,
                selectedItem: i,
              }),
            ),
            _.createElement(
              f.wi,
              null,
              _.createElement(f.CB, {
                onCancel: n,
                strOKText: m,
                bOKDisabled: !i || i == e.selectedImage,
              }),
            ),
          ),
        );
      }
      function ue(e) {
        const { editModel: t, imageNode: n, videoNode: l, children: o } = e,
          a = _.useCallback(
            async (e) => {
              const o = t.GetClanSteamID(),
                a = new E.VE(o, null);
              if (!(await a.AddImage(e, t.GetCurEditLanguage())))
                throw "Error processing image upload";
              const r = await a.UploadAllImages();
              if (!r || 1 != Object.values(r).length)
                throw "Error uploading image";
              const s = Object.values(r)[0];
              if (!s.bSuccess || s.uploadResult.success != c.d.k_EResultOK)
                throw s.uploadResult.message;
              const i = _e(
                v.pU.GetClanImageByImageHash(o, s.uploadResult.image_hash),
                n,
                l,
              );
              return (
                i.type == n &&
                  (await (0, M.DB)(
                    g.z.ReplacementTokenToClanImageURL(i.attrs.src),
                  )),
                i
              );
            },
            [t, n, l],
          );
        return n
          ? _.createElement(
              w.Xv,
              { ProcessFileUpload: a, bAllowImageHotLinking: !0 },
              o,
            )
          : o;
      }
      function _e(e, t, n) {
        const l = (0, p.fw)(e);
        switch (e.file_type) {
          case d.bg.k_EClanImageFileType_MP4:
            if (!n) throw "Video unsupported";
            return n.create({ mp4: l });
          case d.bg.k_EClanImageFileType_WEBM:
            if (!n) throw "Video unsupported";
            return n.create({ webm: l });
          default:
            return t.create({ src: l });
        }
      }
      var pe = n(96640),
        Ee = n(79216);
      var ge = n(70995),
        ve = n(74410),
        fe = n(72421),
        he = n(52038),
        be = n(63226);
      function Ce(e) {
        const {
            videoID: t,
            align: n,
            editModel: l,
            selected: o,
            setAttrs: a,
            focusView: r,
          } = e,
          [s, i, c] = (0, I.uD)(),
          d = _.useCallback(() => {
            c(), r();
          }, [c, r]),
          m = _.useCallback(
            (e, t) => {
              a({ videoID: e, align: t }), d();
            },
            [a, d],
          );
        return _.createElement(
          _.Fragment,
          null,
          s &&
            _.createElement(we, {
              videoID: t,
              align: n,
              bEditing: !0,
              hideModal: d,
              onSave: m,
            }),
          _.createElement(
            G,
            { className: (0, he.A)(be.PreviewYoutubeEditor, o && be.Selected) },
            _.createElement(B, {
              onEditClick: i,
              onDeleteClick: e.removeNode,
              bStrongShadows: !0,
            }),
            o && _.createElement("div", { className: be.SelectionOverlay }),
            _.createElement(D.Bm, {
              event: l.GetEventModel(),
              strTag: "previewyoutube",
              args: { "": `${t};${n}` },
              rawargs: `${t};${n}`,
              showErrorInfo: !0,
            }),
          ),
        );
      }
      function we(e) {
        const {
            videoID: t = "",
            align: n = "",
            bEditing: l = !1,
            hideModal: o,
            onSave: a,
          } = e,
          [r, s] = _.useState(n || ve.V2.full),
          [i, c] = _.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [d, m] = _.useState(void 0),
          u = _.useCallback(() => {
            const { strVideoID: e } = (0, ge.XU)(i);
            return (
              e ? a(e, r) : m((0, k.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [i, r, a]),
          p = _.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return _.createElement(
          Y.EN,
          { active: !0 },
          _.createElement(
            fe._,
            {
              strTitle: (0, k.we)("#EventEditor_InsertYouTube"),
              closeModal: o,
              strOKText: l
                ? (0, k.we)("#Button_Save")
                : (0, k.we)("#EventEditor_InsertYouTube"),
              onOK: u,
            },
            d && _.createElement("div", { className: be.Error }, d),
            _.createElement(f.pd, {
              label: (0, k.we)("#EventEditor_InsertYouTube_URL"),
              placeholder: (0, k.we)("#EventEditor_InsertYouTube_Placholder"),
              value: i,
              ref: p,
              onChange: (e) => c(e.currentTarget.value),
            }),
            _.createElement(
              f.o1,
              { label: (0, k.we)("#EventEditor_InsertYouTube_Position") },
              _.createElement(f.Od, {
                checked: r == ve.V2.left,
                onChange: (e) => e && s(ve.V2.left),
                label: (0, k.we)("#EventEditor_InsertYouTube_Left"),
              }),
              _.createElement(f.Od, {
                checked: r == ve.V2.right,
                onChange: (e) => e && s(ve.V2.right),
                label: (0, k.we)("#EventEditor_InsertYouTube_Right"),
              }),
              _.createElement(f.Od, {
                checked: r == ve.V2.full,
                onChange: (e) => e && s(ve.V2.full),
                label: (0, k.we)("#EventEditor_InsertYouTube_Full"),
              }),
            ),
          ),
        );
      }
      var ke = n(69001),
        Me = n(25918),
        Ie = n(65946),
        Se = n(26161),
        ye = n(74718),
        De = n(78395),
        Te = n(21869),
        Ne = n(1397),
        Ue = n.n(Ne),
        Pe = n(22837),
        Ge = n(63556),
        Ae = n(44165),
        Oe = n(95695),
        Be = n(99637),
        xe = n(91675),
        Ve = n(14771),
        ze = n(87937),
        Re = n(61819),
        Fe = n(88942),
        Le = n(78327),
        je = n(41735),
        Ye = n.n(je),
        He = n(26408);
      function Ke(e) {
        const { hideModal: t, fnUpdateSession: n } = e,
          [l, o] = (0, _.useState)(() => et(!0, null)),
          [a, r] = (0, _.useState)(() => tt(!0, null)),
          [s] = (0, Ie.q3)(() => [a.location_type]);
        return _.createElement(
          Te.E,
          { active: !0 },
          _.createElement(
            De.o0,
            {
              strTitle: (0, k.we)("#MeetSteam_create_title"),
              onOK: () => n(l, a),
              closeModal: () => {
                r(tt(!0, null)), o(et(!0, null)), t();
              },
              bOKDisabled: null == !s,
            },
            _.createElement(
              "div",
              { className: Ue().DialogCtn },
              _.createElement($e, { group: l, fnSetGroup: o }),
              _.createElement(Xe, { session: a, fnSetSession: r }),
            ),
          ),
        );
      }
      function qe(e) {
        const { hideModal: t, groupInput: n, fnUpdateGroupSession: l } = e,
          [o, a] = (0, _.useState)(() => et(!1, n));
        return _.createElement(
          Te.E,
          { active: !0 },
          _.createElement(
            De.o0,
            {
              strTitle: (0, k.we)("#MeetSteam_edit_title"),
              onOK: () => {
                l(o), t();
              },
              onCancel: () => {
                a(et(!1, n)), t();
              },
            },
            _.createElement(
              "div",
              { className: Ue().DialogCtn },
              _.createElement($e, { group: o, fnSetGroup: a }),
            ),
          ),
        );
      }
      function Qe(e) {
        const {
            bCreate: t,
            hideModal: n,
            sessionInput: l,
            fnUpdateSession: o,
          } = e,
          [a, r] = (0, _.useState)(() => tt(t, l)),
          [s] = (0, Ie.q3)(() => [a.location_type]);
        return _.createElement(
          Te.E,
          { active: !0 },
          _.createElement(
            De.o0,
            {
              strTitle: (0, k.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                o(a), n();
              },
              onCancel: () => {
                r(tt(t, l)), n();
              },
              bOKDisabled: !s,
            },
            _.createElement(
              "div",
              { className: Ue().DialogCtn },
              _.createElement(Xe, { session: a, fnSetSession: r }),
            ),
          ),
        );
      }
      function $e(e) {
        const { group: t, fnSetGroup: n } = e,
          l = (0, Ge.E)();
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(f.pd, {
            type: "text",
            label: (0, k.we)("#MeetSteam_edit_session_name"),
            value: k.NT.Get(t.localized_session_title, l),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_title = k.NT.Set(
                o.localized_session_title,
                l,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          _.createElement(
            f.JU,
            null,
            (0, k.we)("#MeetSteam_edit_session_desc"),
          ),
          _.createElement("textarea", {
            className: (0, he.A)(
              "DialogTextInputBase",
              Ue().EventDescriptionField,
            ),
            value: k.NT.Get(t.localized_session_description, l),
            rows: 5,
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_description = k.NT.Set(
                o.localized_session_description,
                l,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          _.createElement(f.pd, {
            type: "text",
            label: "Intended Audience",
            tooltip:
              "A short descriptions for whom then event is designed for to help partners self select",
            value: k.NT.Get(t.localized_intended_audience, l),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_intended_audience = k.NT.Set(
                o.localized_intended_audience,
                l,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          _.createElement(
            f.JU,
            null,
            "FAQ ",
            _.createElement(He.o, {
              tooltip:
                "Optional FAQ section which appears in the pop-up display and hidden by default",
            }),
          ),
          _.createElement("textarea", {
            className: (0, he.A)(
              "DialogTextInputBase",
              Ue().EventDescriptionField,
            ),
            value: k.NT.Get(t.localized_sesssion_faq, l),
            rows: 5,
            onChange: (e) => {
              const o = { ...t };
              (o.localized_sesssion_faq = k.NT.Set(
                o.localized_sesssion_faq,
                l,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          _.createElement(f.Yh, {
            checked: t.ask_registration_question,
            onChange: (e) => {
              const l = { ...t };
              (l.ask_registration_question = e), n(l);
            },
            label:
              "Ask partner to tell us what they want to learn from the sessions",
          }),
          _.createElement(We, { ...e }),
        );
      }
      function We(e) {
        var t;
        const { group: n, fnSetGroup: l } = e,
          [o, a] = (0, _.useState)(
            (null === (t = n.group_visibility_tokens) || void 0 === t
              ? void 0
              : t.length) > 0,
          );
        return o
          ? _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "div",
                null,
                "By default, all sessions are visibility to any partner wiht a list. We can limit visibility to users by adding tokens below. Multiple Meet Steam sections can be visible together if they share the same token. To make the tokens appears most friendly, we are limiting them to exactly 5 digits. Only one token can be set on the URL.",
              ),
              n.group_visibility_tokens.map((e, t) =>
                _.createElement(f.pd, {
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
              _.createElement(
                f.$n,
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
                _.createElement(
                  f.$n,
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
          : _.createElement(f.Yh, {
              checked: !1,
              onChange: a,
              label: "Change Visibility Options",
            });
      }
      function Xe(e) {
        const { session: t, fnSetSession: n } = e,
          [l, o, a, r, s, i] = (0, Ie.q3)(() => [
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
          m = Intl.DateTimeFormat().resolvedOptions().timeZone,
          u = "in_person" === s ? (null != i ? i : ye.hh) : m;
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(Ze, {
            startTime: t.rtime_start,
            location_type: s,
            fnUpdateLocationAndTZ: (e, l) =>
              n({ ...t, location_type: e, in_person_time_zone: l }),
            in_person_time_zone: i,
          }),
          _.createElement("br", null),
          _.createElement(Be.K, {
            strDescription: (0, k.we)("#MeetSteam_edit_start"),
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => l,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + Ve.Kp.PerMinute * d }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          _.createElement("br", null),
          _.createElement(f.pd, {
            type: "number",
            min: 0,
            label: (0, k.we)("#MeetSteam_edit_duration"),
            onChange: (e) => {
              const l = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + Ve.Kp.PerMinute * l });
            },
            value: d,
          }),
          _.createElement(Je, {
            rtime_start: l,
            rtime_end: o,
            sDisplayTimeZone: u,
          }),
          _.createElement("br", null),
          _.createElement("br", null),
          _.createElement(
            "div",
            { className: Ue().ParticipantRow },
            _.createElement(f.pd, {
              type: "number",
              value: a,
              label: (0, k.we)("#MeetSteam_edit_max_capacity"),
              min: 1,
              onChange: (e) =>
                n({
                  ...t,
                  max_capacity: Number.parseInt(e.currentTarget.value),
                }),
            }),
            _.createElement(f.m, {
              controlled: !0,
              label: (0, k.we)("#MeetSteam_edit_guest_count"),
              tooltip: (0, k.we)("#MeetSteam_edit_guest_count_ttip"),
              rgOptions: c,
              selectedOption: r,
              onChange: (e) => n({ ...t, max_per_team: e.data }),
            }),
          ),
        );
      }
      function Je(e) {
        const { rtime_start: t, rtime_end: n, sDisplayTimeZone: l } = e,
          o = ze.unix(t).tz(ye.hh),
          a = ze.unix(t).tz(l),
          r = a.utcOffset() - o.utcOffset(),
          s = ze.unix(n).tz(ye.hh),
          i = ze.unix(n).tz(l),
          c = i.utcOffset() - s.utcOffset();
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            null,
            (0, k.we)("#MeetSteam_edit_displayed_start"),
            ": ",
            (0, xe.P0)(a.unix() + 60 * r, !1, a.format("z")),
            " ",
          ),
          _.createElement(
            "div",
            null,
            (0, k.we)("#MeetSteam_edit_displayed_end"),
            ": ",
            (0, xe.P0)(i.unix() + 60 * c, !1, i.format("z")),
            " ",
          ),
        );
      }
      function Ze(e) {
        const {
            startTime: t,
            location_type: n,
            fnUpdateLocationAndTZ: l,
            in_person_time_zone: o,
          } = e,
          a = (function (e) {
            const t = (0, Fe.I)({
              queryKey: ["timezone", e],
              queryFn: async () => {
                const t = `${Le.TS.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
                  n = { reference_time: e },
                  l = await Ye().get(t, { params: n });
                return null == l ? void 0 : l.data.timezones;
              },
            });
            return t.isSuccess ? t.data : [];
          })(t),
          r = _.useMemo(
            () => a.reduce((e, t) => e.set(t.name, t.friendly_name), new Map()),
            [a],
          ),
          s = (e) => {
            var t;
            return null !== (t = r.get(e)) && void 0 !== t ? t : e;
          },
          i = _.useId(),
          c = _.useId();
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            { id: i, className: Oe.EventEditorTextTitle },
            (0, k.we)("#MeetSteam_edit_date_display_title"),
          ),
          _.createElement(
            "div",
            { id: c, className: Oe.EventEditorTextSubTitle },
            (0, k.we)("#MeetSteam_edit_date_display_desc"),
          ),
          _.createElement(
            f.zW,
            {
              labelId: i,
              descriptionId: c,
              value: n,
              onChange: (e) => l(e, o),
            },
            _.createElement(
              f.a,
              { value: "in_person" },
              (0, k.we)("#MeetSteam_edit_date_display_in_person"),
            ),
            _.createElement(
              f.a,
              { value: "virtual" },
              (0, k.we)("#MeetSteam_edit_date_display_virtual"),
            ),
          ),
          "in_person" === n &&
            _.createElement(Re.Ay, {
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
                : { label: s(ye.hh), value: ye.hh },
              onChange: (e) => l(n, e.value),
            }),
        );
      }
      function et(e, t) {
        if (e) {
          const e = Me.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, H.$Y)([], Pe.gS.k_Lang_MAX, null),
            localized_session_description: (0, H.$Y)(
              [],
              Pe.gS.k_Lang_MAX,
              null,
            ),
            localized_sesssion_faq: (0, H.$Y)([], Pe.gS.k_Lang_MAX, null),
            localized_intended_audience: (0, H.$Y)([], Pe.gS.k_Lang_MAX, null),
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
      function tt(e, t) {
        if (e) {
          const e = Ae.HD.GetTimeNowWithOverride(),
            t = Me.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            n =
              null == t ? void 0 : t.reduce((e, t) => e.concat(t.sessions), []);
          let l = 0;
          do {
            l = Math.floor(1e4 + 9e4 * Math.random());
          } while (n && n.findIndex((e) => e.id == l) >= 0);
          const o = 3600 * Math.ceil(e / 3600);
          return {
            id: l,
            rtime_start: o + Ve.Kp.PerDay,
            rtime_end: o + Ve.Kp.PerDay + Ve.Kp.PerHour,
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
      function nt(e) {
        const t = Me.mh.GetEditModel();
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
      function lt(e) {
        const t = Me.mh.GetEditModel();
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
      function ot(e) {
        const t = Me.mh.GetEditModel();
        for (
          let n = 0;
          n < t.GetEventModel().jsondata.meet_steam_schedules.length;
          ++n
        ) {
          const l = t.GetEventModel().jsondata.meet_steam_schedules[n];
          if (l.schedule_id == e) return { schedule: l, scheduleIndex: n };
        }
        return (
          "dev" == S.TS.WEB_UNIVERSE &&
            console.log(`Error: HelperFindMeetSteamSchedule ${e} is missing`),
          null
        );
      }
      var at = n(33561);
      function rt(e) {
        var t;
        const { focusView: n, removeNode: l, group_id: o } = e,
          a = (0, at.LU)(),
          r = (0, Ie.q3)(() => {
            var e;
            return null ===
              (e = a.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == o);
          }),
          [s, i, c] = (0, I.uD)(),
          d = _.useCallback(() => {
            n(), c();
          }, [n, c]),
          [m, u, p] = (0, I.uD)(),
          E = _.useCallback(() => {
            n(), p();
          }, [n, p]);
        return r && a.GetClanAccountID() == (0, Se.H)()
          ? _.createElement(
              "div",
              { className: Ue().EditorCtn },
              _.createElement(st, { groupData: r, focusView: n }),
              _.createElement(
                "div",
                { className: Ue().controls },
                _.createElement(
                  N.ff,
                  { onClick: i, tooltip: (0, k.we)("#Button_Edit") },
                  _.createElement(U.ffu, null),
                ),
                _.createElement(
                  N.ff,
                  { onClick: u, tooltip: (0, k.we)("#Button_Delete") },
                  _.createElement(U.sED, null),
                ),
                Boolean(
                  (null === (t = r.group_visibility_tokens) || void 0 === t
                    ? void 0
                    : t.length) > 0,
                ) &&
                  _.createElement(
                    N.ff,
                    {
                      onClick: () => {},
                      tooltip:
                        "Limited visibility to those with the appropriate URLs",
                    },
                    _.createElement(z.WLA, null),
                  ),
                Boolean(r.ask_registration_question) &&
                  _.createElement(
                    N.ff,
                    {
                      onClick: () => {},
                      tooltip:
                        "Will ask partner to provides questions for us for this session.",
                    },
                    _.createElement(z.vfN, null),
                  ),
              ),
              Boolean(s) &&
                _.createElement(qe, {
                  hideModal: d,
                  groupInput: r,
                  fnUpdateGroupSession: (e) => {
                    const { groupIndex: t } = lt(e.group_id),
                      n = Me.mh.GetEditModel();
                    (n.GetEventModel().jsondata.meet_steam_groups[t] = e),
                      n.SetDirty(ke.IQ.description);
                  },
                }),
              Boolean(m) &&
                _.createElement(
                  Te.E,
                  { active: !0 },
                  _.createElement(De.o0, {
                    strTitle: (0, k.we)("#Button_Delete"),
                    strDescription: (0, k.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { groupIndex: e } = lt(r.group_id),
                        t = Me.mh.GetEditModel(),
                        n = [...t.GetEventModel().jsondata.meet_steam_groups];
                      n.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_groups = n),
                        t.SetDirty(ke.IQ.description),
                        l();
                    },
                    closeModal: E,
                  }),
                ),
            )
          : _.createElement(
              "div",
              null,
              "Error: Cannot edit meet steam session group",
            );
      }
      function st(e) {
        const { groupData: t, focusView: n } = e,
          l = (0, Ie.q3)(() => t.sessions || []),
          [o, a, r] = (0, I.uD)(),
          s = _.useCallback(() => {
            n(), r();
          }, [n, r]);
        return t
          ? _.createElement(
              ye.jr,
              { groupData: t },
              l.map((e, o) =>
                _.createElement(it, {
                  key: "timecol_" + t.group_id + "_" + e.id,
                  focusView: n,
                  sessionID: e.id,
                  bShowOR: o + 1 < l.length,
                }),
              ),
              _.createElement(
                N.ff,
                {
                  className: Ue().AddNew,
                  onClick: a,
                  tooltip: (0, k.we)("#MeetSteam_add"),
                },
                _.createElement(U.OMN, null),
              ),
              o &&
                _.createElement(Qe, {
                  bCreate: !0,
                  hideModal: s,
                  fnUpdateSession: (e) => {
                    const n = Me.mh.GetEditModel(),
                      l = [...t.sessions, e];
                    l.sort((e, t) => e.rtime_start - t.rtime_start),
                      (t.sessions = l),
                      n.SetDirty(ke.IQ.description);
                  },
                }),
            )
          : null;
      }
      function it(e) {
        const { sessionID: t, bShowOR: n, focusView: l } = e,
          [o, a] = (0, I.OP)(),
          r = (0, Ie.q3)(() => {
            const { groupIndex: e, sessionIndex: n } = nt(t);
            return Me.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[n];
          }),
          [s, i, c] = (0, I.uD)(),
          d = _.useCallback(() => {
            l(), c();
          }, [l, c]),
          [m, u, p] = (0, I.uD)(),
          E = _.useCallback(() => {
            l(), p();
          }, [l, p]);
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            { className: Ue().Column, ...a },
            _.createElement(ye.Tn, { sessionData: r }),
            Boolean(o) &&
              _.createElement(
                "div",
                { className: Ue().controls },
                _.createElement(
                  N.ff,
                  { onClick: i, tooltip: (0, k.we)("#Button_Edit") },
                  _.createElement(U.ffu, null),
                ),
                _.createElement(
                  N.ff,
                  { onClick: u, tooltip: (0, k.we)("#Button_Delete") },
                  _.createElement(U.sED, null),
                ),
              ),
            Boolean(s) &&
              _.createElement(Qe, {
                bCreate: !1,
                hideModal: d,
                sessionInput: r,
                fnUpdateSession: (e) => {
                  const n = Me.mh.GetEditModel(),
                    { groupIndex: l, sessionIndex: o } = nt(t),
                    a = [
                      ...n.GetEventModel().jsondata.meet_steam_groups[l]
                        .sessions,
                    ];
                  (a[o] = e),
                    a.sort((e, t) => e.rtime_start - t.rtime_start),
                    (n.GetEventModel().jsondata.meet_steam_groups[l].sessions =
                      a),
                    n.SetDirty(ke.IQ.description);
                },
              }),
            Boolean(m) &&
              _.createElement(
                Te.E,
                { active: !0 },
                _.createElement(De.o0, {
                  strTitle: (0, k.we)("#Button_Delete"),
                  strDescription: (0, k.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = Me.mh.GetEditModel(),
                      { groupIndex: n, sessionIndex: l } = nt(t),
                      o = [
                        ...e.GetEventModel().jsondata.meet_steam_groups[n]
                          .sessions,
                      ];
                    o.splice(l, 1),
                      o.sort((e, t) => e.rtime_start - t.rtime_start),
                      (e.GetEventModel().jsondata.meet_steam_groups[
                        n
                      ].sessions = o),
                      e.SetDirty(ke.IQ.description);
                  },
                  closeModal: E,
                }),
              ),
          ),
          n && _.createElement(ye.w3, null),
        );
      }
      var ct = n(36969),
        dt = n(38539),
        mt = (n(9024), n(86807));
      function ut(e) {
        const { schema: t } = e,
          {
            table: n,
            table_row: l,
            table_header: o,
            table_cell: a,
            paragraph: r,
          } = t.nodes,
          s = _.useCallback(
            (e, t, s) =>
              !dt.aH(e) &&
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
          ? _.createElement(
              N.cQ,
              {
                tooltip: (0, k.we)("#FormattingToolbar_Tables_InsertTable"),
                command: s,
              },
              _.createElement(U._Q2, null),
            )
          : null;
      }
      function _t(e) {
        const { schema: t, className: n } = e,
          { callbacks: l, view: o } = (0, N.wU)(),
          [a, r] = _.useState(() => !!t.nodes.table && dt.aH(o.state));
        return (
          (0, I.hL)(
            l,
            _.useCallback(
              (e) => r(!!t.nodes.table && dt.aH(e.state)),
              [t.nodes.table],
            ),
          ),
          _.createElement(
            mt.R,
            { visible: a, msAnimationDuration: 100 },
            _.createElement(
              N.Ez,
              { className: n },
              _.createElement(pt, { schema: t }),
            ),
          )
        );
      }
      function pt(e) {
        const { schema: t } = e;
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            N.cQ,
            {
              tooltip: (0, k.we)("#FormattingToolbar_Tables_AddRowBefore"),
              command: dt.JD,
            },
            _.createElement(U.BPi, null),
          ),
          _.createElement(
            N.cQ,
            {
              tooltip: (0, k.we)("#FormattingToolbar_Tables_AddRowAfter"),
              command: dt.gC,
            },
            _.createElement(U.fG_, null),
          ),
          _.createElement(
            N.cQ,
            {
              tooltip: (0, k.we)("#FormattingToolbar_Tables_DeleteRow"),
              command: dt.aR,
            },
            _.createElement(U.XW_, null),
          ),
          _.createElement(N.XQ, null),
          _.createElement(
            N.cQ,
            {
              tooltip: (0, k.we)("#FormattingToolbar_Tables_AddColumnBefore"),
              command: dt.RC,
            },
            _.createElement(U.l26, null),
          ),
          _.createElement(
            N.cQ,
            {
              tooltip: (0, k.we)("#FormattingToolbar_Tables_AddColumnAfter"),
              command: dt.GU,
            },
            _.createElement(U.ur3, null),
          ),
          _.createElement(
            N.cQ,
            {
              tooltip: (0, k.we)("#FormattingToolbar_Tables_DeleteColumn"),
              command: dt.gR,
            },
            _.createElement(U.dyV, null),
          ),
          _.createElement(N.XQ, null),
          _.createElement(
            N.cQ,
            {
              tooltip: (0, k.we)("#FormattingToolbar_Tables_HeaderRow"),
              command: dt.uC,
            },
            _.createElement(U.mLi, null),
          ),
          _.createElement(
            N.cQ,
            {
              tooltip: (0, k.we)("#FormattingToolbar_Tables_HeaderColumn"),
              command: dt.xV,
            },
            _.createElement(U.sXN, null),
          ),
          _.createElement(
            N.cQ,
            {
              tooltip: (0, k.we)("#FormattingToolbar_Tables_HeaderCell"),
              command: dt._G,
            },
            _.createElement(U.Maz, null),
          ),
          _.createElement(N.XQ, null),
          _.createElement(
            N.cQ,
            {
              tooltip: (0, k.we)("#FormattingToolbar_Tables_MergeCells"),
              command: dt.w7,
            },
            _.createElement(U.rnq, null),
          ),
          _.createElement(
            N.cQ,
            {
              tooltip: (0, k.we)("#FormattingToolbar_Tables_SplitCells"),
              command: dt.L0,
            },
            _.createElement(U.vB9, null),
          ),
          !1,
        );
      }
      var Et = n(44483),
        gt = n(44832),
        vt = n(28516),
        ft = n.n(vt);
      function ht(e, t) {
        if (e) {
          const e = Me.mh.GetEditModel().GetEventModel()
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
      function bt(e) {
        const { hideModal: t, fnUpdateSession: n, inputScheduleModel: l } = e,
          o = (0, Ae.f1)(),
          a = (0, at.LU)(),
          [r, s] = (0, _.useState)(() => ht(!Boolean(l), l)),
          [i, c, d] = (0, Ie.q3)(() => [
            r.location_type,
            r.in_person_time_zone,
            a.GetEventModel().jsondata.meet_steam_groups || [],
          ]),
          m = (0, _.useMemo)(() => {
            const e = d.reduce((e, t) => e.concat(t.sessions), []);
            return 0 == e.length ? o : Math.min(...e.map((e) => e.rtime_start));
          }, [d, o]);
        return _.createElement(
          Te.E,
          { active: !0 },
          _.createElement(
            De.o0,
            {
              strTitle: Boolean(l)
                ? "Update Meet Steam Schedule"
                : "Create Meet Steam Schedule View",
              onOK: () => n(r),
              closeModal: () => {
                s(ht(!Boolean(l), l)), t();
              },
            },
            _.createElement(
              "div",
              { className: ft().DialogCtn },
              _.createElement(Ze, {
                startTime: a.GetEventStartTime(),
                location_type: i,
                in_person_time_zone: c,
                fnUpdateLocationAndTZ: (e, t) =>
                  s({ ...r, location_type: e, in_person_time_zone: t }),
              }),
              _.createElement(Ct, {
                inputScheduleModel: r,
                fnUpdateSession: (e) => s(e),
                rtBreakStartingTime: m,
              }),
            ),
          ),
        );
      }
      function Ct(e) {
        const {
            fnUpdateSession: t,
            inputScheduleModel: n,
            rtBreakStartingTime: l,
          } = e,
          [o, a] = (0, Ie.q3)(() => [
            n.session_breaks || [],
            n.in_person_time_zone || ye.hh,
          ]),
          r = (0, _.useCallback)(
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
        return _.createElement(
          "div",
          null,
          _.createElement("div", null, "Scheduled Breaks"),
          o
            .sort((e, t) => t.rtime_start - e.rtime_start)
            .map((e, t) =>
              _.createElement(wt, {
                key: "breakedit" + e.break_id,
                sDisplayTimeZone: a,
                index: t,
                breakSession: e,
                fnOnUpdate: (e) => r(e, t),
              }),
            ),
          _.createElement(
            f.$n,
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
                    localized_break_description: (0, H.$Y)(
                      [],
                      Pe.gS.k_Lang_MAX,
                      null,
                    ),
                    rtime_start: l,
                    rtime_end: l + Ve.Kp.PerHour,
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
      function wt(e) {
        const {
            breakSession: t,
            fnOnUpdate: n,
            index: l,
            sDisplayTimeZone: o,
          } = e,
          a = (0, Ge.E)(),
          [r, s, i, c] = (0, Ie.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.localized_break_description[a] || "",
            Math.max(0, Math.floor((t.rtime_end - t.rtime_start) / 60)),
          ]);
        return _.createElement(
          "div",
          null,
          _.createElement("div", null, "Break # ", l + 1),
          _.createElement("br", null),
          _.createElement(Be.K, {
            strDescription: "Break Start Time",
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => r,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + Ve.Kp.PerMinute * c }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          _.createElement("br", null),
          _.createElement(f.pd, {
            type: "number",
            min: 0,
            label: "Break duration in minutes",
            onChange: (e) => {
              const l = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + Ve.Kp.PerMinute * l });
            },
            value: c,
          }),
          _.createElement(f.pd, {
            type: "text",
            label: "Break Description",
            value: i,
            onChange: (e) => {
              const l = { ...t };
              (l.localized_break_description[a] = e.currentTarget.value), n(l);
            },
          }),
          _.createElement(Je, {
            rtime_start: r,
            rtime_end: s,
            sDisplayTimeZone: o,
          }),
        );
      }
      function kt(e) {
        const { focusView: t, removeNode: n, schedule_id: l } = e,
          o = (0, at.LU)(),
          a = (0, Ie.q3)(() => {
            var e;
            return null ===
              (e = o.GetEventModel().jsondata.meet_steam_schedules) ||
              void 0 === e
              ? void 0
              : e.find((e) => e.schedule_id == l);
          }),
          [r, s, i] = (0, I.uD)(),
          c = _.useCallback(() => {
            t(), i();
          }, [t, i]),
          [d, m, u] = (0, I.uD)(),
          p = _.useCallback(() => {
            t(), u();
          }, [t, u]);
        return a && o.GetClanAccountID() == (0, Se.H)()
          ? _.createElement(
              "div",
              { className: ft().EditorCtn },
              _.createElement(ye.fs, {
                eventModel: o.GetEventModel(),
                scheduleData: a,
              }),
              _.createElement(
                "div",
                { className: ft().controls },
                _.createElement(
                  N.ff,
                  { onClick: s, tooltip: (0, k.we)("#Button_Edit") },
                  _.createElement(U.ffu, null),
                ),
                _.createElement(
                  N.ff,
                  { onClick: m, tooltip: (0, k.we)("#Button_Delete") },
                  _.createElement(U.sED, null),
                ),
              ),
              Boolean(r) &&
                _.createElement(bt, {
                  hideModal: c,
                  inputScheduleModel: a,
                  fnUpdateSession: (e) => {
                    const { scheduleIndex: t } = ot(e.schedule_id);
                    (o.GetEventModel().jsondata.meet_steam_schedules[t] = e),
                      o.SetDirty(ke.IQ.description);
                  },
                }),
              Boolean(d) &&
                _.createElement(
                  Te.E,
                  { active: !0 },
                  _.createElement(De.o0, {
                    strTitle: (0, k.we)("#Button_Delete"),
                    strDescription: (0, k.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { scheduleIndex: e } = ot(a.schedule_id),
                        t = Me.mh.GetEditModel(),
                        l = [
                          ...t.GetEventModel().jsondata.meet_steam_schedules,
                        ];
                      l.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_schedules = l),
                        t.SetDirty(ke.IQ.description),
                        n();
                    },
                    closeModal: p,
                  }),
                ),
            )
          : _.createElement(
              "div",
              null,
              "Error: Cannot edit meet steam schedule view",
            );
      }
      var Mt = n(10820),
        It = n(68033),
        St = n(30193),
        yt = n(14947);
      function Dt(e) {
        const { schema: t } = e,
          { callbacks: n, view: l } = (0, N.wU)(),
          [o, a] = _.useState(!1),
          r = _.useCallback(
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
          s = _.useCallback(
            (e) => {
              a(!0);
              const t = (0, R.lX)(_.createElement(Tt, { OnSelected: r }), e, {
                bOverlapHorizontal: !0,
              });
              (0, yt.z7)(
                () => !t.visible,
                () => a(!1),
              );
            },
            [r],
          );
        return _.createElement(
          N.ff,
          { tooltip: "#Editor_Emoticon", onClick: s, toggled: o },
          _.createElement(z.jZW, null),
        );
      }
      function Tt(e) {
        return (
          (0, St.k3)(It.A),
          _.createElement(Mt.iY, {
            emoticonStore: It.A,
            OnSelected: e.OnSelected,
          })
        );
      }
      var Nt = n(70078),
        Ut = n(14703),
        Pt = n(4796),
        Gt = n(63287),
        At = n.n(Gt),
        Ot = n(7913),
        Bt = n(82102),
        xt = n(69484);
      function Vt(e) {
        const { hideModal: t, fnUpdateSession: n, clanAccountID: l } = e,
          [o, a] = (0, _.useState)(() => $t(!0, null));
        return _.createElement(
          Te.E,
          { active: !0 },
          _.createElement(
            De.o0,
            {
              strTitle: (0, k.we)("#UserPolls_Create_title"),
              onOK: () => n(o),
              closeModal: () => {
                a($t(!0, null)), t();
              },
            },
            _.createElement(
              "div",
              { className: At().DialogCtn },
              _.createElement(Ft, {
                clanAccountID: l,
                userPollDef: o,
                fnSetDef: a,
              }),
            ),
          ),
        );
      }
      function zt(e) {
        const {
            hideModal: t,
            userPollDef: n,
            clanAccountID: l,
            fnUpdateUserPollDef: o,
          } = e,
          [a, r] = (0, _.useState)(() => $t(!1, n));
        return _.createElement(
          Te.E,
          { active: !0 },
          _.createElement(
            De.o0,
            {
              strTitle: (0, k.we)("#UserPolls_Edit_title"),
              onOK: () => {
                o(a);
              },
              onCancel: () => {
                r($t(!1, n));
              },
              closeModal: t,
            },
            _.createElement(
              "div",
              { className: At().DialogCtn },
              _.createElement(Ft, {
                userPollDef: a,
                clanAccountID: l,
                fnSetDef: r,
              }),
            ),
          ),
        );
      }
      function Rt(e) {
        switch (e) {
          default:
          case Ut.$t.k_EPollResult_NotVisible:
            return (0, k.we)("#UserPolls_Visibility_None");
          case Ut.$t.k_EPollResult_Visible_After_End:
            return (0, k.we)("#UserPolls_Visibility_End");
          case Ut.$t.k_EPollResult_Visible_After_Vote:
            return (0, k.we)("#UserPolls_Visibility_Voter");
          case Ut.$t.k_EPollResult_Visible_After_Vote_Or_End:
            return (0, k.we)("#UserPolls_Visibility_Voter_or_End");
          case Ut.$t.k_EPollResult_Visible_On_Demand:
            return (0, k.we)("#UserPolls_Visibility_OnDemand");
        }
      }
      function Ft(e) {
        const { userPollDef: t, fnSetDef: n } = e,
          l = (0, Ge.E)(),
          [o] = (0, Ie.q3)(() => [t.results_visibility_settings]),
          a = Object.values(Ut.$t).map((e) => ({ data: e, label: Rt(e) }));
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(f.pd, {
            type: "text",
            label: (0, k.we)("#UserPolls_Description"),
            value: k.NT.Get(t.localized_poll_description, l),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_poll_description = k.NT.Set(
                o.localized_poll_description,
                l,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          _.createElement(Ht, { ...e }),
          _.createElement(Yt, { ...e }),
          _.createElement(f.JU, null, (0, k.we)("#UserPolls_Visibility")),
          _.createElement(
            "div",
            { className: At().PollArea },
            _.createElement(f.m, {
              strDropDownClassName: Oe.DropDownScroll,
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
          _.createElement(Lt, { ...e }),
        );
      }
      function Lt(e) {
        const { clanAccountID: t, userPollDef: n, fnSetDef: l } = e,
          o = (0, at.LU)(),
          a = (0, Ut.rR)(o.GetClanSteamID()),
          [r] = (0, Ie.q3)(() => [n.user_poll_background]),
          s = (0, _.useCallback)(
            (e, t, o, a, r) => {
              (0, i.wT)(
                null != o && o >= Pe.gS.k_Lang_English && o < Pe.gS.k_Lang_MAX,
                "Unexpected value for elang: " + o,
              ),
                (0, i.wT)(
                  "user_poll_background" === r,
                  "Unexpected artwork type " + r,
                );
              const s = (0, Bt.G)(e, t);
              s.image && l({ ...n, user_poll_background: s.image });
            },
            [l, n],
          );
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(f.JU, null, (0, k.we)("#UserPolls_BackgroundImage")),
          _.createElement(
            "div",
            { className: At().PollArea },
            _.createElement(
              "p",
              null,
              (0, k.we)("#UserPolls_BackgroundImage_desc"),
            ),
            _.createElement(Ot.a, {
              rgRealmList: o.GetIncludedRealmList(),
              rgSupportArtwork: Ut.YX,
              strUploadAjaxURL: a,
              fnOnUploadSuccess: s,
              elOverrideDragAndDropText: (0, k.we)(
                "#Template_Section_MediaUpdate_Static_Dnd",
              ),
              bTwoPhaseUpload: !0,
              bDirectTempStorageUpload: !0,
            }),
            Boolean(r) && _.createElement("img", { src: (0, xt.F)(t, r) }),
          ),
        );
      }
      function jt(e) {
        switch (e) {
          case Ut.BY.k_EPollVoter_AnyUser:
            return (0, k.we)("#UserPolls_Voters_Anyone");
          case Ut.BY.k_EPollVoter_UserGameInLibrary:
            return (0, k.we)("#UserPolls_Voters_Owners");
          case Ut.BY.k_EPollVoter_MinPlayTime:
            return (0, k.we)("#UserPolls_Voters_Players");
          case Ut.BY.k_EPollVoter_MemberOfGroup:
            return (0, k.we)("#UserPolls_Voters_Members");
        }
      }
      function Yt(e) {
        const { clanAccountID: t, userPollDef: n, fnSetDef: l } = e,
          [o, a] = (0, Pt.TB)(t),
          [r, s] = (0, Ie.q3)(() => [
            n.voter_min_playtime_seconds,
            n.voter_eligibility,
          ]),
          i = (0, _.useMemo)(() => {
            const e = [
              {
                label: jt(Ut.BY.k_EPollVoter_AnyUser),
                data: Ut.BY.k_EPollVoter_AnyUser,
              },
            ];
            return (
              a && a.is_ogg && t != Nt.II
                ? (e.push({
                    label: jt(Ut.BY.k_EPollVoter_UserGameInLibrary),
                    data: Ut.BY.k_EPollVoter_UserGameInLibrary,
                  }),
                  e.push({
                    label: jt(Ut.BY.k_EPollVoter_MinPlayTime),
                    data: Ut.BY.k_EPollVoter_MinPlayTime,
                  }))
                : !a ||
                  (a.is_ogg && t != Nt.II) ||
                  e.push({
                    label: jt(Ut.BY.k_EPollVoter_MemberOfGroup),
                    data: Ut.BY.k_EPollVoter_MemberOfGroup,
                  }),
              e
            );
          }, [t, a]);
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(f.JU, null, (0, k.we)("#UserPolls_Voters")),
          _.createElement(
            "div",
            { className: At().PollArea },
            _.createElement(f.m, {
              strDropDownClassName: Oe.DropDownScroll,
              rgOptions: i,
              selectedOption: s,
              onChange: (e) => {
                if (e.data != n.voter_eligibility) {
                  let t = { ...n, voter_eligibility: e.data };
                  e.data == Ut.BY.k_EPollVoter_MinPlayTime &&
                    (t.voter_min_playtime_seconds = 5 * Qt),
                    l(t);
                }
              },
              bDisableMouseOverlay: !0,
              contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
            }),
            Boolean(s == Ut.BY.k_EPollVoter_MinPlayTime) &&
              _.createElement(
                "div",
                { className: At().OptionInset },
                _.createElement(f.pd, {
                  type: "number",
                  label: (0, k.we)("#UserPolls_MinPlayTime"),
                  value: r / Qt,
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
                        : 5) * Qt;
                    n.voter_min_playtime_seconds != a &&
                      l({ ...n, voter_min_playtime_seconds: a });
                  },
                }),
              ),
          ),
        );
      }
      function Ht(e) {
        const { userPollDef: t, fnSetDef: n } = e,
          [l, o] = (0, Ie.q3)(() => [
            t.poll_end_time,
            t.poll_end_days_since_start,
          ]);
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(f.JU, null, (0, k.we)("#UserPolls_Starts")),
          _.createElement(
            "div",
            { className: At().PollArea },
            _.createElement(
              "div",
              { className: (0, he.A)(Oe.FlexRowContainer, Oe.RadioOption) },
              _.createElement("input", {
                type: "radio",
                name: "StartDateRadio",
                id: "UserPollDialog_Days",
                checked: Boolean(o),
                onChange: () => {
                  t.poll_end_days_since_start ||
                    n({
                      ...t,
                      poll_end_time: void 0,
                      poll_end_days_since_start: Kt * qt,
                    });
                },
              }),
              _.createElement(
                "label",
                { htmlFor: "UserPollDialog_Days" },
                _.createElement(
                  "span",
                  null,
                  (0, k.we)("#UserPolls_EndTime_In_Days"),
                ),
              ),
            ),
            Boolean(o) &&
              _.createElement(
                "div",
                { className: At().OptionInset },
                _.createElement(f.pd, {
                  type: "number",
                  value: o / qt,
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
                        : 1) * qt;
                    t.poll_end_days_since_start != a &&
                      n({
                        ...t,
                        poll_end_time: void 0,
                        poll_end_days_since_start: a,
                      });
                  },
                }),
              ),
            _.createElement(
              "div",
              { className: (0, he.A)(Oe.FlexRowContainer, Oe.RadioOption) },
              _.createElement("input", {
                type: "radio",
                name: "StartDateRadio",
                id: "UserPollDialog_SpecificTime",
                checked: Boolean(l),
                onChange: () => {
                  t.poll_end_time ||
                    n({
                      ...t,
                      poll_end_days_since_start: void 0,
                      poll_end_time: Math.floor(Date.now() / 1e3) + Kt * qt,
                    });
                },
              }),
              _.createElement(
                "label",
                { htmlFor: "UserPollDialog_SpecificTime" },
                _.createElement(
                  "span",
                  null,
                  (0, k.we)("#UserPolls_EndTime_Specific"),
                ),
              ),
            ),
            Boolean(l) &&
              _.createElement(
                "div",
                { className: (0, he.A)(At().OptionInset, Oe.FlexRowContainer) },
                _.createElement(Be.K, {
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
                _.createElement(
                  "span",
                  null,
                  (0, k.we)("#UserPolls_EndTime_Zone"),
                ),
              ),
          ),
        );
      }
      const Kt = 7,
        qt = 86400,
        Qt = 60;
      function $t(e, t) {
        if (e) {
          const e =
            Me.mh.GetEditModel().GetEventModel().jsondata.user_polls || [];
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.poll_id == t) >= 0);
          return {
            poll_id: t,
            options: [],
            localized_poll_description: (0, H.$Y)([], Pe.gS.k_Lang_MAX, null),
            poll_end_days_since_start: Kt * qt,
            poll_end_time: void 0,
            results_visibility_settings: Ut.$t.k_EPollResult_Visible_On_Demand,
            voter_eligibility: Ut.BY.k_EPollVoter_AnyUser,
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
      function Wt(e) {
        const {
            bCreate: t,
            hideModal: n,
            pollOptionsInput: l,
            fnUpdatePollOption: o,
          } = e,
          [a, r] = (0, _.useState)(() => Xt(t, l)),
          s = (0, Ge.E)();
        return _.createElement(
          Te.E,
          { active: !0 },
          _.createElement(
            De.o0,
            {
              strTitle: (0, k.we)(
                t ? "#UserPolls_Option_Create" : "#UserPolls_Option_Edit",
              ),
              onOK: () => {
                o(a), n();
              },
              onCancel: () => {
                r(Xt(t, l)), n();
              },
            },
            _.createElement(
              "div",
              { className: At().DialogCtn },
              _.createElement(f.pd, {
                type: "text",
                label: (0, k.we)("#UserPolls_Option_Title"),
                value: k.NT.Get(a.localized_option, s),
                onChange: (e) => {
                  const t = { ...a };
                  (t.localized_option = [...t.localized_option]),
                    (t.localized_option = k.NT.Set(
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
      function Xt(e, t) {
        if (e) {
          const e = Me.mh.GetEditModel().GetEventModel().jsondata.user_polls,
            t =
              null == e ? void 0 : e.reduce((e, t) => e.concat(t.options), []);
          let n = 0;
          do {
            n = Math.floor(1e4 + 9e4 * Math.random());
          } while (t && t.findIndex((e) => e.option_id == n) >= 0);
          return {
            option_id: n,
            localized_option: (0, H.$Y)([], Pe.gS.k_Lang_MAX, null),
          };
        }
        return t
          ? { ...t }
          : ((0, i.wT)(
              !1,
              "HelperCreateOrClonePollOptionModel Expect Create or previous model",
            ),
            null);
      }
      var Jt = n(69818),
        Zt = n(56330),
        en = n(84880);
      function tn(e) {
        const t = Me.mh.GetEditModel();
        for (let n = 0; n < t.GetEventModel().jsondata.user_polls.length; ++n) {
          const l = t.GetEventModel().jsondata.user_polls[n];
          for (let t = 0; t < l.options.length; ++t)
            if (l.options[t].option_id == e)
              return { pollIndex: n, optionIndex: t };
        }
        return null;
      }
      function nn(e) {
        const t = Me.mh.GetEditModel();
        for (let n = 0; n < t.GetEventModel().jsondata.user_polls.length; ++n) {
          const l = t.GetEventModel().jsondata.user_polls[n];
          if (l.poll_id == e) return { userPollDef: l, pollIndex: n };
        }
        return null;
      }
      var ln = n(56654);
      function on(e) {
        const { focusView: t, removeNode: n, poll_id: l } = e,
          o = (0, at.LU)(),
          a = (0, Ie.q3)(() => {
            var e;
            return null === (e = o.GetEventModel().jsondata.user_polls) ||
              void 0 === e
              ? void 0
              : e.find((e) => e.poll_id == l);
          }),
          [r, s, i] = (0, I.uD)(),
          c = _.useCallback(() => {
            t(), i();
          }, [t, i]),
          [d, m, u] = (0, I.uD)(),
          p = _.useCallback(() => {
            t(), u();
          }, [t, u]);
        return a
          ? _.createElement(
              "div",
              { className: Ue().EditorCtn },
              _.createElement(an, { userPollDef: a, focusView: t }),
              _.createElement(
                "div",
                { className: Ue().controls },
                _.createElement(
                  N.ff,
                  { onClick: s, tooltip: (0, k.we)("#Button_Edit") },
                  _.createElement(U.ffu, null),
                ),
                _.createElement(
                  N.ff,
                  { onClick: m, tooltip: (0, k.we)("#Button_Delete") },
                  _.createElement(U.sED, null),
                ),
                _.createElement(
                  N.ff,
                  {
                    onClick: () => {},
                    tooltip: Rt(a.results_visibility_settings),
                  },
                  _.createElement(z.WLA, null),
                ),
                _.createElement(
                  N.ff,
                  { onClick: () => {}, tooltip: jt(a.voter_eligibility) },
                  _.createElement(z.JpU, null),
                ),
              ),
              Boolean(r) &&
                _.createElement(zt, {
                  hideModal: c,
                  userPollDef: a,
                  clanAccountID: o.GetClanAccountID(),
                  fnUpdateUserPollDef: (e) => {
                    const { pollIndex: t } = nn(e.poll_id),
                      n = Me.mh.GetEditModel();
                    (n.GetEventModel().jsondata.user_polls[t] = e),
                      n.SetDirty(ke.IQ.description);
                  },
                }),
              Boolean(d) &&
                _.createElement(
                  Te.E,
                  { active: !0 },
                  _.createElement(De.o0, {
                    strTitle: (0, k.we)("#Button_Delete"),
                    strDescription: (0, k.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { pollIndex: e } = nn(a.poll_id),
                        t = Me.mh.GetEditModel(),
                        l = [...t.GetEventModel().jsondata.user_polls];
                      l.splice(e, 1),
                        (t.GetEventModel().jsondata.user_polls = l),
                        t.SetDirty(ke.IQ.description),
                        n();
                    },
                    closeModal: p,
                  }),
                ),
            )
          : _.createElement(
              "div",
              { className: Zt.ErrorStylesWithIcon },
              (0, k.we)("#UserPolls_Editor_FailToFindModel", l),
            );
      }
      function an(e) {
        const { userPollDef: t, focusView: n } = e,
          [l, o] = (0, Ie.q3)(() => [
            t.options || [],
            t.randomize_option_order,
          ]),
          a = (0, at.LU)(),
          r = (0, Ge.E)(),
          [s, i, c] = (0, I.uD)(),
          d = _.useCallback(() => {
            n(), c();
          }, [n, c]),
          [m, u, p] = (0, I.uD)(),
          E = _.useCallback(() => {
            n(), p();
          }, [n, p]);
        return t
          ? _.createElement(
              en.W6,
              { userPollDef: t, eventModel: a.GetEventModel(), lang: r },
              l.map((e) =>
                _.createElement(sn, {
                  key: "polloption" + t.poll_id + "_" + e.option_id,
                  focusView: n,
                  optionID: e.option_id,
                }),
              ),
              _.createElement(
                "div",
                { className: At().AdminOptions },
                _.createElement(
                  Jt.wl,
                  { className: "", onClick: i },
                  (0, k.we)("#UserPolls_Option_Add"),
                ),
                _.createElement(
                  Jt.wl,
                  { className: "", onClick: u },
                  (0, k.we)("#UserPolls_Option_Reorder"),
                ),
              ),
              s &&
                _.createElement(Wt, {
                  bCreate: !0,
                  hideModal: d,
                  fnUpdatePollOption: (e) => {
                    const n = Me.mh.GetEditModel();
                    t.options || (t.options = []),
                      t.options.push(e),
                      n.SetDirty(ke.IQ.description);
                  },
                }),
              m &&
                _.createElement(rn, {
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
      function rn(e) {
        const {
            options: t,
            bRandomize: n,
            fnUpdateOptions: l,
            hideModal: o,
          } = e,
          a = (0, Ge.E)(),
          [r, s] = (0, _.useState)(n),
          [i, c] = (0, _.useState)(t);
        return _.createElement(
          Te.E,
          { active: !0 },
          _.createElement(
            De.o0,
            {
              strTitle: (0, k.we)("#UserPolls_Option_Reorder"),
              strDescription: (0, k.we)("#UserPolls_Option_Reorder_desc"),
              onCancel: () => {
                s(n), c(t);
              },
              onOK: () => {
                l([...i], r);
              },
              closeModal: o,
            },
            _.createElement(f.Yh, {
              label: (0, k.we)("#UserPolls_Option_Randomize"),
              checked: r,
              onChange: s,
            }),
            _.createElement(ln.A, {
              items: i,
              render: (e) => {
                var t, n;
                return _.createElement(
                  "div",
                  null,
                  (null === (t = e.localized_option) || void 0 === t
                    ? void 0
                    : t[a]) ||
                    (null === (n = e.localized_option) || void 0 === n
                      ? void 0
                      : n[Pe.gS.k_Lang_English]) ||
                    "",
                );
              },
              onReorder: (e) => c(e),
            }),
          ),
        );
      }
      function sn(e) {
        const { optionID: t, focusView: n } = e,
          [l, o] = (0, I.OP)(),
          a = (0, Ie.q3)(() => {
            const { optionIndex: e, pollIndex: n } = tn(t);
            return Me.mh.GetEditModel().GetEventModel().jsondata.user_polls[n]
              .options[e];
          }),
          r = (0, Ge.E)(),
          [s, i, c] = (0, I.uD)(),
          d = _.useCallback(() => {
            n(), c();
          }, [n, c]),
          [m, u, p] = (0, I.uD)(),
          E = _.useCallback(() => {
            n(), p();
          }, [n, p]);
        return _.createElement(
          "div",
          { className: Ue().Column, ...o },
          _.createElement(en.s3, { pollOptionDef: a, lang: r }),
          Boolean(l) &&
            _.createElement(
              "div",
              { className: Ue().controls },
              _.createElement(
                N.ff,
                { onClick: i, tooltip: (0, k.we)("#Button_Edit") },
                _.createElement(U.ffu, null),
              ),
              _.createElement(
                N.ff,
                { onClick: u, tooltip: (0, k.we)("#Button_Delete") },
                _.createElement(U.sED, null),
              ),
            ),
          Boolean(s) &&
            _.createElement(Wt, {
              bCreate: !1,
              hideModal: d,
              pollOptionsInput: a,
              fnUpdatePollOption: (e) => {
                const n = Me.mh.GetEditModel(),
                  { optionIndex: l, pollIndex: o } = tn(t),
                  a = [...n.GetEventModel().jsondata.user_polls[o].options];
                (a[l] = e),
                  (n.GetEventModel().jsondata.user_polls[o].options = a),
                  n.SetDirty(ke.IQ.description);
              },
            }),
          Boolean(m) &&
            _.createElement(
              Te.E,
              { active: !0 },
              _.createElement(De.o0, {
                strTitle: (0, k.we)("#Button_Delete"),
                strDescription: (0, k.we)("#Dialog_AreYouSure"),
                onOK: () => {
                  const e = Me.mh.GetEditModel(),
                    { optionIndex: n, pollIndex: l } = tn(t),
                    o = [...e.GetEventModel().jsondata.user_polls[l].options];
                  o.splice(n, 1),
                    (e.GetEventModel().jsondata.user_polls[l].options = o),
                    e.SetDirty(ke.IQ.description);
                },
                closeModal: E,
              }),
            ),
        );
      }
      const cn = _.memo(function (e) {
        const {
          view: t,
          schema: n,
          refUpdateToolbar: l,
          className: o,
          clanSteamID: a,
          bSpellcheckEnabled: r,
          setSpellcheckEnabled: s,
        } = e;
        return _.createElement(
          N.bI,
          { refUpdateToolbar: l, view: t },
          _.createElement(
            "div",
            { className: e.className },
            _.createElement(
              N.Ez,
              { className: e.className },
              _.createElement(ct.MV, null),
              _.createElement(N.XQ, null),
              _.createElement(ct.Km, { schema: n }),
              _.createElement(N.XQ, null),
              n.marks.link && _.createElement(dn, { schema: n }),
              _.createElement(N.XQ, null),
              _.createElement(ct.Hz, { schema: n }),
              _.createElement(ct.WJ, { schema: n, levels: 3 }),
              _.createElement(N.XQ, null),
              _.createElement(Dt, { schema: n }),
              _.createElement(un, { schema: n, clanSteamID: a }),
              _.createElement(ut, { schema: n }),
              _.createElement(ct.C$, {
                schema: n,
                showIndentButtonsAsNeeded: !0,
              }),
              _.createElement(N.hK, null),
              s &&
                _.createElement(ct.Nt, {
                  bSpellcheckEnabled: r,
                  setSpellcheckEnabled: s,
                }),
              n.nodes.meetsteamsessiongroup &&
                _.createElement(pn, { schema: n }),
              n.nodes.meetsteamscheduleview &&
                _.createElement(En, { schema: n }),
              n.nodes.userpolls &&
                S.iA.is_support &&
                _.createElement(mn, { schema: n }),
            ),
            _.createElement(_t, { className: e.className, schema: n }),
          ),
        );
      });
      function dn(e) {
        const t = (0, gt.V9)();
        return _.createElement(ct.z9, { schema: e.schema, addtlAttrs: t });
      }
      function mn(e) {
        const { schema: t } = e,
          { callbacks: n, view: l } = (0, N.wU)(),
          o = (0, at.LU)(),
          [a, r, s] = (0, j.uD)(),
          i = _.useCallback(() => {
            s(), l.focus();
          }, [s, l]),
          c = _.useCallback(
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
        return _.createElement(
          _.Fragment,
          null,
          a &&
            _.createElement(Vt, {
              hideModal: i,
              clanAccountID: o.GetClanAccountID(),
              fnUpdateSession: c,
            }),
          _.createElement(
            N.ff,
            { tooltip: "#UserPolls_Toolbar_ttip", onClick: r, toggled: a },
            _.createElement(U.fQB, null),
          ),
        );
      }
      function un(e) {
        const { schema: t, clanSteamID: n } = e,
          { callbacks: l, view: o } = (0, N.wU)(),
          { image: a, video: r, previewyoutube: s } = t.nodes,
          i = _.useCallback(
            (e, t) => {
              o.dispatch(o.state.tr.insert(o.state.selection.to, t.create(e)));
            },
            [o],
          ),
          c = _.useCallback(() => o.focus(), [o]),
          {
            showInsertImageModal: d,
            showInsertVideoModal: m,
            imageModal: u,
            activeModal: p,
          } = se({
            clanSteamID: n,
            imageNodeType: a,
            videoNodeType: r,
            onItemSelected: i,
            onHideModal: c,
          });
        return _.createElement(
          _.Fragment,
          null,
          u,
          a &&
            _.createElement(
              N.ff,
              {
                tooltip: "#EventEditor_InsertImage_Title",
                onClick: d,
                toggled: "image" == p,
              },
              _.createElement(U._V3, null),
            ),
          r &&
            _.createElement(
              N.ff,
              {
                tooltip: "#EventEditor_EditVideo_Title",
                onClick: m,
                toggled: "video" == p,
              },
              _.createElement(U.CeX, null),
            ),
          s && _.createElement(_n, { schema: t }),
          (a || r || s) && _.createElement(N.XQ, null),
        );
      }
      function _n(e) {
        const { schema: t } = e,
          { callbacks: n, view: l } = (0, N.wU)(),
          [o, a, r] = (0, j.uD)(),
          s = _.useCallback(() => {
            r(), l.focus();
          }, [r, l]),
          i = _.useCallback(
            (e, n) => {
              !(function (e, t, n, l = ve.V2.left) {
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
        return _.createElement(
          _.Fragment,
          null,
          o && _.createElement(we, { hideModal: s, onSave: i }),
          _.createElement(
            N.ff,
            { tooltip: "#EventEditor_InsertYouTube", onClick: a, toggled: o },
            _.createElement("img", { src: Et.A }),
          ),
        );
      }
      function pn(e) {
        const { schema: t } = e,
          { callbacks: n, view: l } = (0, N.wU)(),
          o = (0, at.LU)(),
          [a, r, s] = (0, j.uD)(),
          i = _.useCallback(() => {
            s(), l.focus();
          }, [s, l]),
          c = _.useCallback(
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
        if ((null == o ? void 0 : o.GetClanAccountID()) == (0, Se.H)())
          return _.createElement(
            _.Fragment,
            null,
            a && _.createElement(Ke, { hideModal: i, fnUpdateSession: c }),
            _.createElement(
              N.ff,
              { tooltip: "#MeetSteam_add_group_ttip", onClick: r, toggled: a },
              _.createElement("img", { src: Et.A }),
            ),
          );
      }
      function En(e) {
        const { schema: t } = e,
          { callbacks: n, view: l } = (0, N.wU)(),
          o = (0, at.LU)(),
          [a, r, s] = (0, j.uD)(),
          i = _.useCallback(() => {
            s(), l.focus();
          }, [s, l]),
          c = _.useCallback(
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
        if ((null == o ? void 0 : o.GetClanAccountID()) == (0, Se.H)())
          return _.createElement(
            _.Fragment,
            null,
            a &&
              _.createElement(bt, {
                hideModal: i,
                inputScheduleModel: null,
                fnUpdateSession: c,
              }),
            _.createElement(
              N.ff,
              {
                tooltip: "#MeetSteam_add_schedule_ttip",
                onClick: r,
                toggled: a,
              },
              _.createElement("img", { src: Et.A }),
            ),
          );
      }
      var gn = n(75844),
        vn = n(90316),
        fn = n.n(vn),
        hn = n(1805),
        bn = n(81962);
      function Cn(e) {
        const { schema: t, emoticonStore: n } = e,
          l = t.nodes.emoticon;
        (0, St.k3)(n),
          (0, a.c$)(
            _.useMemo(
              () => (0, Ee.sM)({ rules: [kn(/:([a-zA-Z0-9_]+):$/, l, n)] }),
              [l, n],
            ),
          );
        const o = _.useMemo(
          () => [
            {
              type: l,
              component: wn,
              readProps: (e) => ({ emoticonStore: n, emoticon: e.textContent }),
            },
          ],
          [l, n],
        );
        return _.createElement(r.U, { specs: o });
      }
      function wn(e) {
        const { selected: t, emoticonStore: n, emoticon: l } = e;
        (0, St.k3)(n);
        if (n.BHasEmoticon(l)) {
          const e = t
            ? { background: "#54a5d4", filter: "brightness(1.2)" }
            : void 0;
          return _.createElement(
            "span",
            { style: e },
            _.createElement(bn.n, { emoticon: l }),
          );
        }
        return `:${l}:`;
      }
      function kn(e, t, n) {
        return new Ee.fV(e, (e, l, o, a) => {
          const r = l[1];
          if (!n.BHasEmoticon(r)) return null;
          const s = t.create(null, e.schema.text(r));
          return e.tr.replaceWith(o, a, s);
        });
      }
      var Mn = n(73560),
        In = n(91254);
      function Sn(e) {
        const { editModel: t, href: n } = e,
          l = (0, Mn.W7)(n);
        if (l) {
          const o = l.fnBBComponent(n, {
            partnerEventStore: In.O3,
            event: t.GetEventModel(),
          });
          return _.createElement(
            O,
            {
              toolbar: _.createElement(yn, {
                href: n,
                removeNode: e.removeNode,
                update: e.update,
                schema: e.schema,
              }),
            },
            o,
          );
        }
        return _.createElement("a", { href: n }, n);
      }
      function yn(e) {
        const { href: t, removeNode: n, update: l, schema: o } = e;
        return _.createElement(
          B,
          { onDeleteClick: n },
          _.createElement(
            V,
            {
              onClick: () => window.open(t),
              description: (0, k.we)("#ContextMenu_OpenLinkInNewWindow"),
            },
            _.createElement(U.YNO, null),
          ),
          _.createElement(
            V,
            {
              onClick: () =>
                l((0, r.M)(o.text(t, [o.marks.link.create({ href: t })]))),
              description: (0, k.we)(
                "#EventEditor_DynamicLink_ConvertToTextLink",
              ),
            },
            _.createElement(U.Rkk, null),
          ),
        );
      }
      var Dn = n(42714);
      const Tn = (0, gn.PA)(function (e) {
        const { editModel: t } = e,
          n = t.GetEventModel().loadedAllLanguages,
          l = t.GetCurEditLanguage();
        return n
          ? _.createElement(
              K.tH,
              null,
              _.createElement(Nn, { ...e, eCurrentEditLanguage: l }),
            )
          : null;
      });
      const Nn = _.memo(function (e) {
        const {
            editModel: t,
            refOnInsertImage: n,
            limitBBCode: a,
            eCurrentEditLanguage: r,
          } = e,
          [s, c] = _.useState(),
          m = _.useMemo(() => (0, pe.u)(a), [a]),
          [u, E] = _.useState(),
          g = (function (e, t) {
            const { nodes: n } = t.pm_schema,
              l = (function (e, t, n) {
                const l = _.useCallback(
                  (l) => {
                    const o = `^https?://${S.TS.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)(?<extension>\\.[^\\.]*)$`,
                      a = l.match(o);
                    if (
                      a &&
                      a.groups.clanid == e.GetClanAccountID().toString()
                    ) {
                      const l = v.pU.GetClanImageByImageHash(
                        e.GetClanSteamID(),
                        a.groups.filename,
                      );
                      let o = l && _e(l, t, n);
                      if (o) return o;
                    }
                    return "default";
                  },
                  [e, t, n],
                );
                return t ? l : void 0;
              })(e, n.image, n.video),
              o = (function (e, t) {
                const n = _.useCallback(
                  (e) => ((0, Mn.yO)(e) ? t.create({ href: e }) : "default"),
                  [t],
                );
                return t ? n : void 0;
              })(0, n.dynamiclink);
            return _.useCallback(
              (...e) => {
                let t = "default";
                return (
                  l && (t = l(...e)), "default" == t && o && (t = o(...e)), t
                );
              },
              [l, o],
            );
          })(t, m);
        _.useEffect(() => {
          E(
            (function (e, t, n, o) {
              let a = t.GetDescription(n);
              return (
                (a =
                  null == a
                    ? void 0
                    : a.replace(
                        St.pN.GetUnvalidatedEmoticonReplaceRegex(),
                        "[emoticon]$1[/emoticon]",
                      )),
                new l.n(e, a, (e) => t.SetDescription(n, e), {
                  parser: {
                    fnProcessText: (t) =>
                      (0, Dn.F)(e.pm_schema, t, e.pm_schema.marks.link, o),
                  },
                })
              );
            })(m, t, r, g),
          );
        }, [m, g, t, r]);
        const f = _.useRef(void 0);
        (0, o.i)(u, { msAutosaveTimeout: 1e3 });
        const { nodes: h, marks: b } = m.pm_schema;
        return (
          (function (e, t, n, l, o) {
            _.useEffect(() => {
              if (!o || !t) return;
              const a = (e, a) => {
                let r;
                switch (a) {
                  case p._o.k_eInsertFullImage:
                    r = t.create({ src: (0, p.fw)(e) });
                    break;
                  case p._o.k_eInsertThumbnail:
                    r = t.create({ src: (0, p.fw)(e, !0) }, null, [
                      l.create({ href: (0, p.fw)(e) }),
                    ]);
                    break;
                  case p._o.k_eInsertVideo:
                    let o;
                    e.file_type == d.bg.k_EClanImageFileType_MP4
                      ? (o = { mp4: (0, p.fw)(e) })
                      : e.file_type == d.bg.k_EClanImageFileType_WEBM &&
                        (o = { webm: (0, p.fw)(e) }),
                      o && n && (r = n.create(o));
                    break;
                  case p._o.k_eShowImageGroup:
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
          })(n, h.image, h.video, b.link, s),
          _.createElement(
            ue,
            { editModel: t, imageNode: h.image, videoNode: h.video },
            _.createElement(
              "div",
              { className: fn().EventDescriptionContainer },
              _.createElement(cn, {
                view: s,
                schema: m.pm_schema,
                refUpdateToolbar: f,
                className: fn().ToolBar,
                clanSteamID: t.GetClanSteamID(),
              }),
              _.createElement(
                "div",
                { className: fn().EventDescriptionArea },
                _.createElement(
                  hn.l,
                  {
                    pmState: u,
                    className: (0, he.A)(
                      fn().EventDescriptionRichField,
                      fn().EventDetailsBody,
                    ),
                    refOnUpdate: f,
                    refView: c,
                    panelProps: { onBlur: () => u.CommitChanges() },
                  },
                  _.createElement(Un, {
                    eventSchemaConfig: m,
                    editModel: t,
                    onURLPasted: g,
                  }),
                ),
              ),
            ),
          )
        );
      });
      const Un = _.memo(function (e) {
        const { eventSchemaConfig: t, editModel: n, onURLPasted: l } = e,
          { marks: o, nodes: a } = t.pm_schema;
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(s.W, {
            linkMarkType: o.link,
            onURLPasted: l,
            schema: t.pm_schema,
          }),
          a.image && _.createElement(w.pw, { nodeType: a.image }),
          _.createElement(Pn, {
            schemaConfig: t,
            editModel: n,
            clanSteamID: n.GetClanSteamID(),
          }),
          _.createElement(Cn, { emoticonStore: It.A, schema: t.pm_schema }),
        );
      });
      function Pn(e) {
        const { schemaConfig: t, editModel: n, clanSteamID: l } = e,
          o = t.pm_schema,
          s = _.useMemo(
            () =>
              (function (e) {
                return Ee.sM({ rules: [Ee.tG(/^>$/, e.nodes.quote)] });
              })(o),
            [o],
          );
        (0, a.c$)(s);
        const i = o.nodes,
          c = i.image,
          d = i.video,
          m = i.carousel,
          u = _.useCallback(
            (e, o) => ({
              schemaConfig: t,
              node: o,
              imageNodeType: c,
              videoNodeType: d,
              carouselNodeType: m,
              editModel: n,
              clanSteamID: l,
            }),
            [t, c, d, m, n, l],
          ),
          p = _.useMemo(
            () => [
              i.previewyoutube && {
                type: i.previewyoutube,
                component: Ce,
                readProps: (e) => ({
                  videoID: e.attrs.videoID,
                  align: e.attrs.align,
                  editModel: n,
                }),
              },
              c && { type: c, component: ee, readProps: (e) => u("image", e) },
              d && { type: d, component: ee, readProps: (e) => u("video", e) },
              i.meetsteamsessiongroup && {
                type: i.meetsteamsessiongroup,
                component: rt,
                readProps: (e) => ({ group_id: e.attrs.group_id }),
              },
              i.meetsteamscheduleview && {
                type: i.meetsteamscheduleview,
                component: kt,
                readProps: (e) => ({ schedule_id: e.attrs.schedule_id }),
              },
              i.userpolls && {
                type: i.userpolls,
                component: on,
                readProps: (e) => ({ poll_id: e.attrs.poll_id }),
              },
              i.dynamiclink && {
                type: i.dynamiclink,
                component: Sn,
                readProps: (e) => ({
                  editModel: n,
                  href: e.attrs.href,
                  schema: t.pm_schema,
                }),
              },
              i.carousel && {
                type: i.carousel,
                component: $,
                readProps: (e) => ({
                  node: e,
                  imageNodeType: c,
                  videoNodeType: d,
                  schemaConfig: t,
                  editModel: n,
                }),
              },
            ],
            [i, c, d, n, u, t],
          );
        return _.createElement(r.U, { specs: p });
      }
    },
  },
]);

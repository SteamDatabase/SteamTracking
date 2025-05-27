/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9681],
  {
    21134: (e) => {
      e.exports = {
        ClanImageContainer: "_1TEbObXeFqUF-IRZKx0Qg5",
        ImageControls: "_1O2yIhwy4xQA69icI2lXEH",
        Hovered: "_3wRq55uuel7mw7DG3Vys63",
        ImageControlButton: "_3jc5-Cx8QTL4J84VCZNo8a",
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
        PreviewYoutubeEditorModal: "_2898lC8lJ2Jih-o_aYzoaG",
        Error: "_1U35sXRoYsDiZXSTPbY1mk",
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
    65247: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => pt });
      var a = n(90286),
        o = n(26555),
        l = n(22145),
        r = n(69956),
        s = n(28106),
        i = n(81393),
        c = n(64238),
        d = n.n(c),
        u = n(90626),
        m = n(81047),
        p = n(28954),
        E = n(27666),
        g = n(86355),
        _ = n(68255),
        f = n(2805),
        v = n(36509),
        h = n(4869),
        b = n(28015),
        C = n(71696),
        I = n(30175),
        w = n(61859),
        M = n(27650),
        S = n(73745),
        k = n(30470),
        D = n(21134),
        T = n(84106);
      function y(e) {
        const {
            nodeAttrs: t,
            editModel: n,
            args: a,
            imageNodeType: o,
            videoNodeType: l,
            clanSteamID: r,
            setAttrs: s,
            focusView: c,
            removeNode: m,
          } = e,
          [p, E, g] = (0, S.uD)(),
          [_, f] = (0, S.OP)();
        let v;
        const { type: b, attrs: C } = t;
        "image" == b
          ? (v = u.createElement(T.B, {
              strTag: "img",
              args: a,
              event: n.GetEventModel(),
              showErrorInfo: !0,
            }))
          : "video" == b
            ? (v = u.createElement(T.B, {
                key: `${C.mp4}_${C.webm}`,
                strTag: "video",
                args: a,
                event: n.GetEventModel(),
                showErrorInfo: !0,
              }))
            : (0, i.z)(b, "unhandled type: " + b);
        const M = u.useCallback(() => {
          c(), g();
        }, [c, g]);
        return u.createElement(
          u.Fragment,
          null,
          p &&
            u.createElement(N, {
              bIsEdit: !0,
              nodeAttrs: t,
              hideModal: M,
              imageNodeType: o,
              videoNodeType: l,
              clanSteamID: r,
              setAttrs: s,
            }),
          u.createElement(
            "span",
            { className: d()(D.ClanImageContainer, _ && D.Hovered), ...f },
            v,
            u.createElement(
              "span",
              { className: D.ImageControls },
              u.createElement(
                I.ff,
                {
                  className: D.ImageControlButton,
                  onClick: E,
                  tooltip: (0, w.we)("#EventEditor_ReplaceImage_Title"),
                },
                u.createElement(h.ffu, null),
              ),
              u.createElement(
                I.ff,
                {
                  className: D.ImageControlButton,
                  onClick: m,
                  tooltip: (0, w.we)("#StoreAdmin_GameDescription_RemoveImage"),
                },
                u.createElement(h.sED, null),
              ),
            ),
          ),
        );
      }
      function N(e) {
        const {
            bIsEdit: t = !1,
            nodeAttrs: n,
            hideModal: a,
            clanSteamID: o,
            setAttrs: l,
            imageNodeType: r,
            videoNodeType: s,
          } = e,
          { type: c, attrs: m } = n,
          p = u.useMemo(() => {
            let e;
            if (
              ("image" == c
                ? (e = m.src)
                : "video" == c && (e = m.mp4 || m.webm),
              e)
            ) {
              const [t] = (0, E.s9)(e);
              return t && g.pU.GetClanImageByImageHash(o, t);
            }
          }, [o, c, m]),
          [f, v] = u.useState(p ? "uploaded" : "hotlink"),
          h = u.useCallback(
            (e) => {
              l({ src: e }, r), a();
            },
            [l, a, r],
          ),
          C = u.useCallback(
            (e) => {
              l({ ...m, ...e }, s), a();
            },
            [m, l, a, s],
          ),
          I = u.useId();
        let M,
          S = null;
        if ("image" == c)
          (S = u.createElement(A, {
            active: "hotlink" == f,
            bIsEdit: t,
            hideModal: a,
            onImageSelected: h,
            src: m.src,
          })),
            (M = t
              ? (0, w.we)("#EventEditor_ReplaceImage_Title")
              : (0, w.we)("#EventEditor_InsertImage_Title"));
        else {
          if ("video" != c) return (0, i.z)(c, "Unhandled type"), null;
          (S = u.createElement(B, {
            active: "hotlink" == f,
            bIsEdit: t,
            hideModal: a,
            attrs: m,
            setAttrs: l,
          })),
            (M = (0, w.we)("#EventEditor_EditVideo_Title"));
        }
        return u.createElement(
          b.mt,
          { active: !0, onDismiss: a, className: D.ClanImageModalContent },
          u.createElement(_.Y9, { id: I }, M),
          u.createElement(
            _.zW,
            { labelId: I, value: f, onChange: (e) => v(e) },
            u.createElement(_.a, { value: "uploaded" }, "Uploaded"),
            u.createElement(_.a, { value: "hotlink" }, "Enter URL"),
          ),
          u.createElement(
            "div",
            {
              className: d()(D.ClanImageModalMode, "uploaded" == f && D.Active),
            },
            u.createElement(G, {
              bIsEdit: t,
              hideModal: a,
              onImageSelected: h,
              onVideoSelected: s && C,
              clanSteamID: o,
              selectedImage: p,
            }),
          ),
          u.createElement(
            "div",
            {
              className: d()(D.ClanImageModalMode, "hotlink" == f && D.Active),
            },
            S,
          ),
        );
      }
      function A(e) {
        const {
            active: t,
            bIsEdit: n,
            hideModal: a,
            onImageSelected: o,
            src: l,
          } = e,
          [r, s] = u.useState(l),
          i = u.useCallback((e) => s(e.currentTarget.value), []),
          c = n
            ? (0, w.we)("#EventEditor_ReplaceImage_Title")
            : (0, w.we)("#EventEditor_InsertImage_Title"),
          d = u.useRef();
        return (
          u.useEffect(() => {
            t && d.current.Focus();
          }, [t]),
          u.createElement(
            _.lV,
            { onSubmit: () => o(r) },
            u.createElement(
              _.nB,
              null,
              u.createElement(_.pd, {
                ref: d,
                value: r,
                onChange: i,
                label: (0, w.we)("#EventEditor_InsertImage_URL"),
              }),
            ),
            u.createElement(_.CB, {
              onCancel: a,
              strOKText: c,
              bOKDisabled: !r || r == l,
            }),
          )
        );
      }
      function B(e) {
        const {
            active: t,
            bIsEdit: n,
            hideModal: a,
            attrs: o,
            setAttrs: l,
          } = e,
          [r, s] = u.useState(o.mp4),
          [i, c] = u.useState(o.webm),
          [d, m] = u.useState(o.poster),
          [p, E] = u.useState(!!o.autoplay),
          [g, f] = u.useState(!!o.controls),
          v = u.useRef();
        u.useEffect(() => {
          t && v.current.Focus();
        }, [t]);
        return u.createElement(
          _.lV,
          {
            onSubmit: (e) => {
              l({
                ...o,
                mp4: r || void 0,
                webm: i || void 0,
                poster: d || void 0,
                autoplay: p,
                controls: g,
              }),
                a();
            },
          },
          u.createElement(
            _.nB,
            null,
            u.createElement(_.pd, {
              ref: v,
              value: r,
              onChange: (e) => s(e.currentTarget.value),
              label: (0, w.we)("#EventEditor_InsertVideo_InputMP4"),
            }),
            u.createElement(_.pd, {
              value: i,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, w.we)("#EventEditor_InsertVideo_InputWebM"),
            }),
            u.createElement(_.pd, {
              value: d,
              onChange: (e) => m(e.currentTarget.value),
              label: (0, w.we)("#EventEditor_InsertVideo_InputPoster"),
            }),
            u.createElement(_.Yh, {
              checked: p,
              onChange: E,
              label: (0, w.we)("#EventEditor_InsertVideo_InputAutoplay"),
            }),
            u.createElement(_.Yh, {
              checked: g,
              onChange: f,
              label: (0, w.we)("#EventEditor_InsertVideo_InputShowControls"),
            }),
          ),
          u.createElement(_.CB, {
            onCancel: a,
            strOKText: (0, w.we)("#EventEditor_EditVideo_Title"),
            bOKDisabled: !r && !i,
          }),
        );
      }
      function G(e) {
        const {
            bIsEdit: t,
            hideModal: n,
            onImageSelected: a,
            onVideoSelected: o,
            clanSteamID: l,
          } = e,
          [r, s] = u.useState(null),
          [i, c] = u.useState(e.selectedImage),
          d = t
            ? (0, w.we)("#EventEditor_ReplaceImage_Title")
            : (0, w.we)("#EventEditor_InsertImage_Title"),
          p = u.useCallback(
            (e) => {
              switch (e.file_type) {
                case 4:
                  o && o({ mp4: (0, m.fw)(e) });
                  break;
                case 5:
                  o && o({ webm: (0, m.fw)(e) });
                  break;
                default:
                  a((0, m.fw)(e));
              }
            },
            [a, o],
          ),
          E = u.useCallback(
            (e, t) => {
              c(e), t && p(e);
            },
            [p],
          );
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            _.lV,
            { onSubmit: () => i && p(i) },
            u.createElement(v.g, { fnSetImageSearch: s }),
            u.createElement(f.ge, {
              clanAccountID: l.GetAccountID(),
              fileNameSearch: r,
              onImageSelected: E,
              selectedItem: i,
            }),
            u.createElement(_.CB, {
              onCancel: n,
              strOKText: d,
              bOKDisabled: !i || i == e.selectedImage,
            }),
          ),
        );
      }
      function O(e) {
        const { editModel: t, imageNode: n, videoNode: a, children: o } = e,
          l = u.useCallback(
            async (e) => {
              const o = t.GetClanSteamID(),
                l = new p.VE(o, null);
              if (!(await l.AddImage(e, t.GetCurEditLanguage(), null)))
                throw "Error processing image upload";
              const r = await l.UploadAllImages(
                t.GetIncludedRealmList(),
                t.GetCurEditLanguage(),
              );
              if (!r || 1 != Object.values(r).length)
                throw "Error uploading image";
              const s = Object.values(r)[0];
              if (s.success && 1 != s.success) throw s.message;
              const i = x(g.pU.GetClanImageByImageHash(o, s.image_hash), n, a);
              return (
                i.type == n && (await (0, M.DB)((0, E.v6)(i.attrs.src))), i
              );
            },
            [t, n, a],
          );
        return n
          ? u.createElement(
              C.Xv,
              { ProcessFileUpload: l, bAllowImageHotLinking: !0 },
              o,
            )
          : o;
      }
      function x(e, t, n) {
        const a = (0, m.fw)(e);
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
      var U = n(33645),
        V = n.n(U),
        z = n(55608),
        H = n(79497),
        P = n(9024),
        R = n(52038);
      const Y = {
          ...z.DQ.nodes,
          horizontal_rule: {
            group: "block",
            parseDOM: [{ tag: "hr" }],
            toDOM: (0, z.BM)("hr", V().HR),
            bbCode: { tag: "hr" },
          },
          quote: {
            parseDOM: [{ tag: "blockquote" }],
            content: "paragraph block*",
            group: "block",
            defining: !0,
            toDOM: (0, z.BM)("blockquote", V().BlockQuote),
            bbCode: { tag: "quote" },
          },
          pullquote: {
            content: "block+",
            group: "block",
            toDOM: (0, z.BM)("div", V().PullQuote),
            bbCode: { tag: "pullquote" },
          },
          smalltext: {
            content: "inline*",
            group: "block",
            toDOM: (0, z.BM)("div", (0, R.A)(V().SmallText, "BB_SmallText")),
            bbCode: { tag: "smalltext" },
          },
          emoticon: {
            content: "inline*",
            group: "inline",
            inline: !0,
            toDOM: (0, z.BM)("span", "BB_Emoticon"),
            bbCode: { tag: "emoticon" },
          },
          ...P.X,
        },
        j = {
          ...z.DQ.marks,
          spoiler: {
            toDOM: (0, z.BM)(
              "span",
              (0, R.A)(V().Spoiler, V().Revealed),
              (0, z.ce)("span", (0, R.A)(V().SpoilerText)),
            ),
            bbCode: { tag: "spoiler" },
          },
        };
      var F = n(6878),
        K = n.n(F),
        L = n(63226),
        q = n.n(L),
        $ = n(44832);
      const Q = {
        nodes: {
          ...Y,
          heading: {
            ...z.DQ.nodes.heading,
            parseDOM: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              attrs: { level: e },
            })),
            toDOM: (e) => [
              "h" + e.attrs.level,
              {
                class: (0, R.A)(
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
              AttrsToBBArgs: (e) => ({ ...X(e), tag: `h${e.level}` }),
            })),
          },
          quote: {
            ...Y.quote,
            toDOM: () => [
              "blockquote",
              { class: (0, R.A)(V().BlockQuote, K().BlockQuote) },
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
          dynamiclink: {
            attrs: { href: { default: "" } },
            group: "inline",
            atom: !0,
            inline: !0,
            draggable: !0,
            toDOM: (e) => ["a", { href: e.attrs.href }],
            bbCode: {
              tag: "dynamiclink",
              BBArgsToAttrs: (e) => ({ href: e.href }),
              AttrsToBBArgs: (e) => ({ args: { href: e.href } }),
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
        marks: {
          ...j,
          link: {
            ...j.link,
            attrs: {
              href: {},
              title: { default: null },
              style: { default: null },
            },
            toDOM(e) {
              const { href: t, title: n, style: a } = e.attrs;
              return ["a", { href: t, title: n, class: (0, $.Xe)(a) }, 0];
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
      function W(e) {
        return e.id ? { id: e.id.replace(/^#/, "") } : {};
      }
      function X(e) {
        return e.id ? { args: { id: e.id } } : {};
      }
      var Z = n(79216);
      var J = n(70995),
        ee = n(74410),
        te = n(9154),
        ne = n(72421),
        ae = n(6941),
        oe = n(64753);
      function le(e) {
        const { className: t, ...n } = e;
        return u.createElement("div", {
          className: d()(t, ae.EditableComponentToolbarContainer),
          ...n,
        });
      }
      function re(e) {
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
          u.createElement(
            "div",
            {
              style: s,
              className: d()(
                ae.InlineHoverContainer,
                i && ae.WidthConstrained,
                !r && ae.Hidden,
              ),
            },
            t,
          )
        );
      }
      function se(e) {
        const { className: t, toolbar: n, children: a } = e,
          [o, l] = (0, oe.OP)(),
          [r, s] = u.useState({ top: 0, left: 0, width: 0, height: 0 }),
          i = (0, u.useRef)();
        return (
          (0, u.useLayoutEffect)(() => {
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
          u.createElement(
            u.Fragment,
            null,
            u.createElement(
              "span",
              {
                ref: i,
                className: d()(t, ae.EditableComponentInlineContainer),
                ...l,
              },
              u.createElement(re, {
                ...r,
                toolbar: n,
                visible: o && r.width > 0,
              }),
              a,
            ),
          )
        );
      }
      function ie(e) {
        const {
          onEditClick: t,
          strEditDescription: n = (0, w.we)("#Button_Edit"),
          onDeleteClick: a,
          strDeleteDescription: o = (0, w.we)("#Button_Remove"),
          bStrongShadows: l = !1,
          children: r,
        } = e;
        return u.createElement(
          ce,
          { bStrongShadows: l },
          t &&
            u.createElement(
              de,
              { onClick: t, description: n },
              u.createElement(h.ffu, null),
            ),
          a &&
            u.createElement(
              de,
              { onClick: a, description: o },
              u.createElement(h.sED, null),
            ),
          r,
        );
      }
      function ce(e) {
        const { bStrongShadows: t, children: n } = e;
        return u.createElement(
          "span",
          {
            className: d()(ae.EditableComponentToolbar, t && ae.StrongShadows),
          },
          n,
        );
      }
      function de(e) {
        const { onClick: t, description: n, children: a } = e;
        return u.createElement(
          I.ff,
          { onClick: t, tooltip: n, className: ae.FloatingToolbarButton },
          a,
        );
      }
      function ue(e) {
        const {
            videoID: t,
            align: n,
            editModel: a,
            selected: o,
            setAttrs: l,
            focusView: r,
          } = e,
          [s, i, c] = (0, S.uD)(),
          d = u.useCallback(() => {
            c(), r();
          }, [c, r]),
          m = u.useCallback(
            (e, t) => {
              l({ videoID: e, align: t }), d();
            },
            [l, d],
          );
        return u.createElement(
          u.Fragment,
          null,
          s &&
            u.createElement(me, {
              videoID: t,
              align: n,
              bEditing: !0,
              hideModal: d,
              onSave: m,
            }),
          u.createElement(
            le,
            { className: (0, R.A)(L.PreviewYoutubeEditor, o && L.Selected) },
            u.createElement(ie, {
              onEditClick: i,
              onDeleteClick: e.removeNode,
              bStrongShadows: !0,
            }),
            o && u.createElement("div", { className: L.SelectionOverlay }),
            u.createElement(T.B, {
              event: a.GetEventModel(),
              strTag: "previewyoutube",
              args: { "": `${t};${n}` },
              showErrorInfo: !0,
            }),
          ),
        );
      }
      function me(e) {
        const {
            videoID: t = "",
            align: n = "",
            bEditing: a = !1,
            hideModal: o,
            onSave: l,
          } = e,
          [r, s] = u.useState(n || ee.V2.full),
          [i, c] = u.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [d, m] = u.useState(void 0),
          p = u.useCallback(() => {
            const { strVideoID: e } = (0, J.XU)(i);
            return (
              e ? l(e, r) : m((0, w.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [i, r, l]),
          E = u.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return u.createElement(
          te.EN,
          { active: !0 },
          u.createElement(
            ne._,
            {
              strTitle: (0, w.we)("#EventEditor_InsertYouTube"),
              closeModal: o,
              strOKText: a
                ? (0, w.we)("#Button_Save")
                : (0, w.we)("#EventEditor_InsertYouTube"),
              onOK: p,
            },
            d && u.createElement("div", { className: L.Error }, d),
            u.createElement(_.pd, {
              label: (0, w.we)("#EventEditor_InsertYouTube_URL"),
              placeholder: (0, w.we)("#EventEditor_InsertYouTube_Placholder"),
              value: i,
              ref: E,
              onChange: (e) => c(e.currentTarget.value),
            }),
            u.createElement(
              _.o1,
              { label: (0, w.we)("#EventEditor_InsertYouTube_Position") },
              u.createElement(_.Od, {
                checked: r == ee.V2.left,
                onChange: (e) => e && s(ee.V2.left),
                label: (0, w.we)("#EventEditor_InsertYouTube_Left"),
              }),
              u.createElement(_.Od, {
                checked: r == ee.V2.right,
                onChange: (e) => e && s(ee.V2.right),
                label: (0, w.we)("#EventEditor_InsertYouTube_Right"),
              }),
              u.createElement(_.Od, {
                checked: r == ee.V2.full,
                onChange: (e) => e && s(ee.V2.full),
                label: (0, w.we)("#EventEditor_InsertYouTube_Full"),
              }),
            ),
          ),
        );
      }
      var pe = n(25918),
        Ee = n(69001),
        ge = n(65946),
        _e = n(19675),
        fe = n(78395),
        ve = n(21869),
        he = n(1397),
        be = n.n(he),
        Ce = n(63556),
        Ie = n(44165),
        we = n(95695),
        Me = n(99637),
        Se = n(62490),
        ke = n(91675),
        De = n(14771),
        Te = n(87937),
        ye = n(61819),
        Ne = n(88942),
        Ae = n(78327),
        Be = n(41735),
        Ge = n.n(Be);
      function Oe(e) {
        const { hideModal: t, fnUpdateSession: n } = e,
          [a, o] = (0, u.useState)(() => He(!0, null)),
          [l, r] = (0, u.useState)(() => Pe(!0, null)),
          [s] = (0, ge.q3)(() => [l.location_type]);
        return u.createElement(
          ve.E,
          { active: !0 },
          u.createElement(
            fe.o0,
            {
              strTitle: (0, w.we)("#MeetSteam_create_title"),
              onOK: () => n(a, l),
              closeModal: () => {
                r(Pe(!0, null)), o(He(!0, null)), t();
              },
              bOKDisabled: null == !s,
            },
            u.createElement(
              "div",
              { className: be().DialogCtn },
              u.createElement(Ve, { group: a, fnSetGroup: o }),
              u.createElement(ze, { session: l, fnSetSession: r }),
            ),
          ),
        );
      }
      function xe(e) {
        const { hideModal: t, groupInput: n, fnUpdateGroupSession: a } = e,
          [o, l] = (0, u.useState)(() => He(!1, n));
        return u.createElement(
          ve.E,
          { active: !0 },
          u.createElement(
            fe.o0,
            {
              strTitle: (0, w.we)("#MeetSteam_edit_title"),
              onOK: () => {
                a(o), t();
              },
              onCancel: () => {
                l(He(!1, n)), t();
              },
            },
            u.createElement(
              "div",
              { className: be().DialogCtn },
              u.createElement(Ve, { group: o, fnSetGroup: l }),
            ),
          ),
        );
      }
      function Ue(e) {
        const {
            bCreate: t,
            hideModal: n,
            sessionInput: a,
            fnUpdateSession: o,
          } = e,
          [l, r] = (0, u.useState)(() => Pe(t, a)),
          [s] = (0, ge.q3)(() => [l.location_type]);
        return u.createElement(
          ve.E,
          { active: !0 },
          u.createElement(
            fe.o0,
            {
              strTitle: (0, w.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                o(l), n();
              },
              onCancel: () => {
                r(Pe(t, a)), n();
              },
              bOKDisabled: !s,
            },
            u.createElement(
              "div",
              { className: be().DialogCtn },
              u.createElement(ze, { session: l, fnSetSession: r }),
            ),
          ),
        );
      }
      function Ve(e) {
        const { group: t, fnSetGroup: n } = e,
          a = (0, Ce.E)();
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(_.pd, {
            type: "text",
            label: (0, w.we)("#MeetSteam_edit_session_name"),
            value: w.NT.Get(t.localized_session_title, a),
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_title = w.NT.Set(
                o.localized_session_title,
                a,
                e.currentTarget.value,
              )),
                n(o);
            },
          }),
          u.createElement(
            _.JU,
            null,
            (0, w.we)("#MeetSteam_edit_session_desc"),
          ),
          u.createElement("textarea", {
            className: (0, R.A)(
              "DialogTextInputBase",
              be().EventDescriptionField,
            ),
            value: w.NT.Get(t.localized_session_description, a),
            rows: 5,
            onChange: (e) => {
              const o = { ...t };
              (o.localized_session_description = w.NT.Set(
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
          [a, o, l, r, s, i] = (0, ge.q3)(() => [
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
          m = "America/Los_Angeles",
          p = Intl.DateTimeFormat().resolvedOptions().timeZone,
          E = "in_person" === s ? (null != i ? i : m) : p,
          g = Te.unix(t.rtime_start).tz(m),
          f = Te.unix(t.rtime_start).tz(E),
          v = f.utcOffset() - g.utcOffset(),
          h = Te.unix(t.rtime_end).tz(m),
          b = Te.unix(t.rtime_end).tz(E),
          C = b.utcOffset() - h.utcOffset(),
          I = (function () {
            const e = (0, Ne.I)({
              queryKey: ["timezone"],
              queryFn: async () => {
                const e = `${Ae.TS.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
                  t = {},
                  n = await Ge().get(e, { params: t });
                return null == n ? void 0 : n.data.timezones;
              },
            });
            return e.isSuccess ? e.data : [];
          })(),
          M = u.useMemo(
            () => I.reduce((e, t) => e.set(t.name, t.friendly_name), new Map()),
            [I],
          ),
          S = (e) => {
            var t;
            return null !== (t = M.get(e)) && void 0 !== t ? t : e;
          },
          k = u.useId(),
          D = u.useId();
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            "div",
            { id: k, className: we.EventEditorTextTitle },
            (0, w.we)("#MeetSteam_edit_date_display_title"),
          ),
          u.createElement(
            "div",
            { id: D, className: we.EventEditorTextSubTitle },
            (0, w.we)("#MeetSteam_edit_date_display_desc"),
          ),
          u.createElement(
            _.zW,
            {
              labelId: k,
              descriptionId: D,
              value: s,
              onChange: (e) => {
                n({ ...t, location_type: e });
              },
            },
            u.createElement(
              _.a,
              { value: "in_person" },
              (0, w.we)("#MeetSteam_edit_date_display_in_person"),
            ),
            u.createElement(
              _.a,
              { value: "virtual" },
              (0, w.we)("#MeetSteam_edit_date_display_virtual"),
            ),
          ),
          "in_person" === s &&
            u.createElement(ye.Ay, {
              styles: { option: (e) => ({ ...e, color: "#444444" }) },
              isSearchable: !0,
              isMulti: !1,
              options: I.map((e) => ({
                label: e.friendly_name,
                value: e.name,
              })),
              defaultMenuIsOpen: !1,
              value: i ? { label: S(i), value: i } : { label: S(m), value: m },
              onChange: (e) => n({ ...t, in_person_time_zone: e.value }),
            }),
          u.createElement("br", null),
          u.createElement(Me.K, {
            strDescription: (0, w.we)("#MeetSteam_edit_start"),
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => a,
            fnSetTimeToUpdate: (e) =>
              n({ ...t, rtime_start: e, rtime_end: e + De.Kp.PerMinute * d }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          u.createElement("br", null),
          u.createElement(_.pd, {
            type: "number",
            min: 0,
            label: (0, w.we)("#MeetSteam_edit_duration"),
            onChange: (e) => {
              const a = Number.parseInt(e.currentTarget.value);
              n({ ...t, rtime_end: t.rtime_start + De.Kp.PerMinute * a });
            },
            value: d,
          }),
          u.createElement(
            "div",
            null,
            (0, w.we)("#MeetSteam_edit_displayed_start"),
            ": ",
            (0, ke.P0)(f.unix() + 60 * v, !1, f.format("z")),
            " ",
          ),
          u.createElement(
            "div",
            null,
            (0, w.we)("#MeetSteam_edit_displayed_end"),
            ": ",
            (0, ke.P0)(b.unix() + 60 * C, !1, b.format("z")),
            " ",
          ),
          u.createElement("br", null),
          u.createElement("br", null),
          u.createElement(
            "div",
            { className: be().ParticipantRow },
            u.createElement(_.pd, {
              type: "number",
              value: l,
              label: (0, w.we)("#MeetSteam_edit_max_capacity"),
              min: 1,
              onChange: (e) =>
                n({
                  ...t,
                  max_capacity: Number.parseInt(e.currentTarget.value),
                }),
            }),
            u.createElement(_.m, {
              controlled: !0,
              label: (0, w.we)("#MeetSteam_edit_guest_count"),
              tooltip: (0, w.we)("#MeetSteam_edit_guest_count_ttip"),
              rgOptions: c,
              selectedOption: r,
              onChange: (e) => n({ ...t, max_per_team: e.data }),
            }),
          ),
        );
      }
      function He(e, t) {
        if (e) {
          const e = pe.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, Se.$Y)([], 31, null),
            localized_session_description: (0, Se.$Y)([], 31, null),
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
          : ((0, i.w)(
              !1,
              "HelperCreateOrCloneGroupSessionModel Expect Create or previous model",
            ),
            null);
      }
      function Pe(e, t) {
        if (e) {
          const e = Ie.HD.GetTimeNowWithOverride(),
            t = pe.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            n =
              null == t ? void 0 : t.reduce((e, t) => e.concat(t.sessions), []);
          let a = 0;
          do {
            a = Math.floor(1e4 + 9e4 * Math.random());
          } while (n && n.findIndex((e) => e.id == a) >= 0);
          const o = 3600 * Math.ceil(e / 3600);
          return {
            id: a,
            rtime_start: o + De.Kp.PerDay,
            rtime_end: o + De.Kp.PerDay + De.Kp.PerHour,
            max_capacity: 100,
            max_per_team: 3,
          };
        }
        return t
          ? { ...t }
          : ((0, i.w)(
              !1,
              "HelperCreateOrCloneSessionInstanceModel Expect Create or previous model",
            ),
            null);
      }
      function Re(e) {
        const t = pe.mh.GetEditModel();
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
      function Ye(e) {
        const t = pe.mh.GetEditModel();
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
          o = pe.mh.GetEditModel(),
          l = (0, ge.q3)(() => {
            var e;
            return null ===
              (e = o.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == a);
          }),
          [r, s, i] = (0, S.uD)(),
          c = u.useCallback(() => {
            t(), i();
          }, [t, i]),
          [d, m, p] = (0, S.uD)(),
          E = u.useCallback(() => {
            t(), p();
          }, [t, p]);
        return l && o.GetClanAccountID() == (0, _e.H7)()
          ? u.createElement(
              "div",
              { className: be().EditorCtn },
              u.createElement(Fe, { groupData: l, focusView: t }),
              u.createElement(
                "div",
                { className: be().controls },
                u.createElement(
                  I.ff,
                  { onClick: s, tooltip: (0, w.we)("#Button_Edit") },
                  u.createElement(h.ffu, null),
                ),
                u.createElement(
                  I.ff,
                  { onClick: m, tooltip: (0, w.we)("#Button_Delete") },
                  u.createElement(h.sED, null),
                ),
              ),
              r &&
                u.createElement(xe, {
                  hideModal: c,
                  groupInput: l,
                  fnUpdateGroupSession: (e) => {
                    const { groupIndex: t } = Ye(e.group_id),
                      n = pe.mh.GetEditModel();
                    (n.GetEventModel().jsondata.meet_steam_groups[t] = e),
                      n.SetDirty(Ee.IQ.description);
                  },
                }),
              d &&
                u.createElement(
                  ve.E,
                  { active: !0 },
                  u.createElement(fe.o0, {
                    strTitle: (0, w.we)("#Button_Delete"),
                    strDescription: (0, w.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { groupIndex: e } = Ye(l.group_id),
                        t = pe.mh.GetEditModel(),
                        a = [...t.GetEventModel().jsondata.meet_steam_groups];
                      a.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_groups = a),
                        t.SetDirty(Ee.IQ.description),
                        n();
                    },
                    closeModal: E,
                  }),
                ),
            )
          : u.createElement(
              "div",
              null,
              "Error: Cannot edit meet steam session group",
            );
      }
      function Fe(e) {
        const { groupData: t, focusView: n } = e,
          a = (0, ge.q3)(() => t.sessions || []),
          [o, l, r] = (0, S.uD)(),
          s = u.useCallback(() => {
            n(), r();
          }, [n, r]);
        return t
          ? u.createElement(
              _e.jr,
              { groupData: t },
              a.map((e, o) =>
                u.createElement(Ke, {
                  key: "timecol_" + t.group_id + "_" + e.id,
                  focusView: n,
                  sessionID: e.id,
                  bShowOR: o + 1 < a.length,
                }),
              ),
              u.createElement(
                I.ff,
                {
                  className: be().AddNew,
                  onClick: l,
                  tooltip: (0, w.we)("#MeetSteam_add"),
                },
                u.createElement(h.OMN, null),
              ),
              o &&
                u.createElement(Ue, {
                  bCreate: !0,
                  hideModal: s,
                  fnUpdateSession: (e) => {
                    const n = pe.mh.GetEditModel(),
                      a = [...t.sessions, e];
                    a.sort((e, t) => e.rtime_start - t.rtime_start),
                      (t.sessions = a),
                      n.SetDirty(Ee.IQ.description);
                  },
                }),
            )
          : null;
      }
      function Ke(e) {
        const { sessionID: t, bShowOR: n, focusView: a } = e,
          [o, l] = (0, S.OP)(),
          r = (0, ge.q3)(() => {
            const { groupIndex: e, sessionIndex: n } = Re(t);
            return pe.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[n];
          }),
          [s, i, c] = (0, S.uD)(),
          d = u.useCallback(() => {
            a(), c();
          }, [a, c]),
          [m, p, E] = (0, S.uD)(),
          g = u.useCallback(() => {
            a(), E();
          }, [a, E]);
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            "div",
            { className: be().Column, ...l },
            u.createElement(_e.Tn, { sessionData: r }),
            Boolean(o) &&
              u.createElement(
                "div",
                { className: be().controls },
                u.createElement(
                  I.ff,
                  { onClick: i, tooltip: (0, w.we)("#Button_Edit") },
                  u.createElement(h.ffu, null),
                ),
                u.createElement(
                  I.ff,
                  { onClick: p, tooltip: (0, w.we)("#Button_Delete") },
                  u.createElement(h.sED, null),
                ),
              ),
            s &&
              u.createElement(Ue, {
                bCreate: !1,
                hideModal: d,
                sessionInput: r,
                fnUpdateSession: (e) => {
                  const n = pe.mh.GetEditModel(),
                    { groupIndex: a, sessionIndex: o } = Re(t),
                    l = [
                      ...n.GetEventModel().jsondata.meet_steam_groups[a]
                        .sessions,
                    ];
                  (l[o] = e),
                    l.sort((e, t) => e.rtime_start - t.rtime_start),
                    (n.GetEventModel().jsondata.meet_steam_groups[a].sessions =
                      l),
                    n.SetDirty(Ee.IQ.description);
                },
              }),
            m &&
              u.createElement(
                ve.E,
                { active: !0 },
                u.createElement(fe.o0, {
                  strTitle: (0, w.we)("#Button_Delete"),
                  strDescription: (0, w.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = pe.mh.GetEditModel(),
                      { groupIndex: n, sessionIndex: a } = Re(t),
                      o = [
                        ...e.GetEventModel().jsondata.meet_steam_groups[n]
                          .sessions,
                      ];
                    o.splice(a, 1),
                      o.sort((e, t) => e.rtime_start - t.rtime_start),
                      (e.GetEventModel().jsondata.meet_steam_groups[
                        n
                      ].sessions = o),
                      e.SetDirty(Ee.IQ.description);
                  },
                  closeModal: g,
                }),
              ),
          ),
          n && u.createElement(_e.w3, null),
        );
      }
      var Le = n(36969);
      n(86807);
      var qe = n(44483);
      const $e = u.memo(function (e) {
        const {
          view: t,
          schema: n,
          refUpdateToolbar: a,
          className: o,
          clanSteamID: l,
          bSpellcheckEnabled: r,
          setSpellcheckEnabled: s,
        } = e;
        return u.createElement(
          I.bI,
          { refUpdateToolbar: a, view: t },
          u.createElement(
            "div",
            { className: e.className },
            u.createElement(
              I.Ez,
              { className: e.className },
              u.createElement(Le.MV, null),
              u.createElement(I.XQ, null),
              u.createElement(Le.Km, { schema: n }),
              u.createElement(I.XQ, null),
              n.marks.link && u.createElement(Qe, { schema: n }),
              u.createElement(I.XQ, null),
              u.createElement(Le.Hz, { schema: n }),
              u.createElement(Le.WJ, { schema: n, levels: 3 }),
              u.createElement(I.XQ, null),
              u.createElement(We, { schema: n, clanSteamID: l }),
              !1,
              u.createElement(Le.C$, {
                schema: n,
                showIndentButtonsAsNeeded: !0,
              }),
              u.createElement(I.hK, null),
              s &&
                u.createElement(Le.Nt, {
                  bSpellcheckEnabled: r,
                  setSpellcheckEnabled: s,
                }),
              n.nodes.meetsteamsessiongroup &&
                u.createElement(Ze, { schema: n }),
            ),
            !1,
          ),
        );
      });
      function Qe(e) {
        const t = (0, $.V9)();
        return u.createElement(Le.z9, { schema: e.schema, addtlAttrs: t });
      }
      function We(e) {
        const { schema: t, clanSteamID: n } = e,
          { callbacks: a, view: o } = (0, I.wU)(),
          { image: l, video: r, previewyoutube: s } = t.nodes,
          [i, c] = u.useState(),
          d = u.useCallback(() => {
            c(void 0), o.focus();
          }, [o]),
          m = u.useCallback(() => {
            c({ type: "image", attrs: { src: "" } });
          }, []),
          p = u.useCallback(() => {
            c({
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
          E = u.useCallback(
            (e, t) => {
              o.dispatch(o.state.tr.insert(o.state.selection.to, t.create(e)));
            },
            [o],
          );
        return u.createElement(
          u.Fragment,
          null,
          i &&
            u.createElement(N, {
              nodeAttrs: i,
              hideModal: d,
              setAttrs: E,
              imageNodeType: l,
              videoNodeType: r,
              clanSteamID: n,
            }),
          l &&
            u.createElement(
              I.ff,
              {
                tooltip: "#EventEditor_InsertImage_Title",
                onClick: m,
                toggled: "image" == (null == i ? void 0 : i.type),
              },
              u.createElement(h._V3, null),
            ),
          r &&
            u.createElement(
              I.ff,
              {
                tooltip: "#EventEditor_EditVideo_Title",
                onClick: p,
                toggled: "video" == (null == i ? void 0 : i.type),
              },
              u.createElement(h.CeX, null),
            ),
          s && u.createElement(Xe, { schema: t }),
          (l || r || s) && u.createElement(I.XQ, null),
        );
      }
      function Xe(e) {
        const { schema: t } = e,
          { callbacks: n, view: a } = (0, I.wU)(),
          [o, l, r] = (0, oe.uD)(),
          s = u.useCallback(() => {
            r(), a.focus();
          }, [r, a]),
          i = u.useCallback(
            (e, n) => {
              !(function (e, t, n, a = ee.V2.left) {
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
        return u.createElement(
          u.Fragment,
          null,
          o && u.createElement(me, { hideModal: s, onSave: i }),
          u.createElement(
            I.ff,
            { tooltip: "#EventEditor_InsertYouTube", onClick: l, toggled: o },
            u.createElement("img", { src: qe.A }),
          ),
        );
      }
      function Ze(e) {
        const { schema: t } = e,
          { callbacks: n, view: a } = (0, I.wU)(),
          o = pe.mh.GetEditModel(),
          [l, r, s] = (0, oe.uD)(),
          i = u.useCallback(() => {
            s(), a.focus();
          }, [s, a]),
          c = u.useCallback(
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
        if ((null == o ? void 0 : o.GetClanAccountID()) == (0, _e.H7)())
          return u.createElement(
            u.Fragment,
            null,
            l && u.createElement(Oe, { hideModal: i, fnUpdateSession: c }),
            u.createElement(
              I.ff,
              { tooltip: "#MeetSteam_add_group_ttip", onClick: r, toggled: l },
              u.createElement("img", { src: qe.A }),
            ),
          );
      }
      var Je = n(75844),
        et = n(90316),
        tt = n.n(et),
        nt = n(1805),
        at = n(30193),
        ot = n(81962);
      function lt(e) {
        const { schema: t, emoticonStore: n } = e,
          a = t.nodes.emoticon;
        (0, at.k3)(n),
          (0, l.c$)(
            u.useMemo(
              () => (0, Z.sM)({ rules: [st(/:([a-zA-Z0-9_]+):$/, a, n)] }),
              [a, n],
            ),
          );
        const o = u.useMemo(
          () => [
            {
              type: a,
              component: rt,
              readProps: (e) => ({ emoticonStore: n, emoticon: e.textContent }),
            },
          ],
          [a, n],
        );
        return u.createElement(r.U, { specs: o });
      }
      function rt(e) {
        const { selected: t, emoticonStore: n, emoticon: a } = e;
        (0, at.k3)(n);
        if (n.BHasEmoticon(a)) {
          const e = t
            ? { background: "#54a5d4", filter: "brightness(1.2)" }
            : void 0;
          return u.createElement(
            "span",
            { style: e },
            u.createElement(ot.n, { emoticon: a }),
          );
        }
        return `:${a}:`;
      }
      function st(e, t, n) {
        return new Z.fV(e, (e, a, o, l) => {
          const r = a[1];
          if (!n.BHasEmoticon(r)) return null;
          const s = t.create(null, e.schema.text(r));
          return e.tr.replaceWith(o, l, s);
        });
      }
      var it = n(68033),
        ct = n(73560),
        dt = n(91254);
      function ut(e) {
        const { editModel: t, href: n, setAttrs: a } = e,
          o = (0, ct.W7)(n);
        if (o) {
          const a = o.fnBBComponent(n, {
            partnerEventStore: dt.O3,
            event: t.GetEventModel(),
          });
          return u.createElement(
            se,
            {
              toolbar: u.createElement(mt, {
                removeNode: e.removeNode,
                href: n,
              }),
            },
            a,
          );
        }
        return u.createElement("a", { href: n }, n);
      }
      function mt(e) {
        const { href: t, removeNode: n } = e;
        return u.createElement(
          ie,
          { onDeleteClick: n },
          u.createElement(
            de,
            {
              onClick: () => window.open(t),
              description: (0, w.we)("#ContextMenu_OpenLinkInNewWindow"),
            },
            u.createElement(h.YNO, null),
          ),
        );
      }
      const pt = (0, Je.PA)(function (e) {
        const { editModel: t } = e,
          n = t.GetEventModel().loadedAllLanguages,
          a = t.GetCurEditLanguage();
        return n
          ? u.createElement(Et, { ...e, eCurrentEditLanguage: a })
          : null;
      });
      const Et = u.memo(function (e) {
          const {
              editModel: t,
              refOnInsertImage: n,
              limitBBCode: l,
              eCurrentEditLanguage: r,
            } = e,
            [s, c] = u.useState(),
            d = u.useMemo(() => {
              return (e = l), new H.W(Q, e);
              var e;
            }, [l]),
            [p, E] = u.useState();
          u.useEffect(() => {
            E(
              (function (e, t, n) {
                let o = t.GetDescription(n);
                return (
                  (o =
                    null == o
                      ? void 0
                      : o.replace(
                          at.pN.GetUnvalidatedEmoticonReplaceRegex(),
                          "[emoticon]$1[/emoticon]",
                        )),
                  new a.n(e, o, (e) => t.SetDescription(n, e))
                );
              })(d, t, r),
            );
          }, [d, t, r]);
          const g = u.useRef(void 0);
          (0, o.i)(p, { msAutosaveTimeout: 1e3 });
          const { nodes: _, marks: f } = d.pm_schema;
          return (
            (function (e, t, n, a, o) {
              u.useEffect(() => {
                if (!o || !t) return;
                const l = (e, l) => {
                  let r;
                  switch (l) {
                    case m._o.k_eInsertFullImage:
                      r = t.create({ src: (0, m.fw)(e) });
                      break;
                    case m._o.k_eInsertThumbnail:
                      r = t.create({ src: (0, m.fw)(e, !0) }, null, [
                        a.create({ href: (0, m.fw)(e) }),
                      ]);
                      break;
                    case m._o.k_eInsertVideo:
                      let o;
                      4 == e.file_type
                        ? (o = { mp4: (0, m.fw)(e) })
                        : 5 == e.file_type && (o = { webm: (0, m.fw)(e) }),
                        o && n && (r = n.create(o));
                      break;
                    case m._o.k_eShowImageGroup:
                      break;
                    default:
                      (0, i.z)(l, `Unhandled insert type ${l}`);
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
            })(n, _.image, _.video, f.link, s),
            u.createElement(
              O,
              { editModel: t, imageNode: _.image, videoNode: _.video },
              u.createElement(
                "div",
                { className: tt().EventDescriptionContainer },
                u.createElement($e, {
                  view: s,
                  schema: d.pm_schema,
                  refUpdateToolbar: g,
                  className: tt().ToolBar,
                  clanSteamID: t.GetClanSteamID(),
                }),
                u.createElement(
                  "div",
                  { className: tt().EventDescriptionArea },
                  u.createElement(
                    nt.l,
                    {
                      pmState: p,
                      className: (0, R.A)(
                        tt().EventDescriptionRichField,
                        tt().EventDetailsBody,
                      ),
                      refOnUpdate: g,
                      refView: c,
                      panelProps: { onBlur: () => p.CommitChanges() },
                    },
                    u.createElement(gt, { eventSchemaConfig: d, editModel: t }),
                  ),
                ),
              ),
            )
          );
        }),
        gt = u.memo(function (e) {
          const { eventSchemaConfig: t, editModel: n } = e,
            { marks: a, nodes: o } = t.pm_schema,
            l = (function (e, t, n) {
              const a = u.useCallback(
                (a) => {
                  const o = `^https?://${k.TS.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)(?<extension>\\.[^\\.]*)$`,
                    l = a.match(o);
                  if (l && l.groups.clanid == e.GetClanAccountID().toString()) {
                    const a = g.pU.GetClanImageByImageHash(
                      e.GetClanSteamID(),
                      l.groups.filename,
                    );
                    let o = a && x(a, t, n);
                    if (o) return o;
                  }
                  return "default";
                },
                [e, t, n],
              );
              return t ? a : void 0;
            })(n, o.image, o.video),
            r = (function (e, t) {
              const n = u.useCallback(
                (e) => ((0, ct.yO)(e) ? t.create({ href: e }) : "default"),
                [t],
              );
              return t ? n : void 0;
            })(0, o.dynamiclink),
            i = u.useCallback(
              (...e) => {
                let t = "default";
                return (
                  l && (t = l(...e)), "default" == t && r && (t = r(...e)), t
                );
              },
              [l, r],
            );
          return u.createElement(
            u.Fragment,
            null,
            u.createElement(s.W, {
              linkMarkType: a.link,
              onURLPasted: i,
              schema: t.pm_schema,
            }),
            o.image && u.createElement(C.pw, { nodeType: o.image }),
            u.createElement(_t, {
              schemaConfig: t,
              editModel: n,
              clanSteamID: n.GetClanSteamID(),
            }),
            u.createElement(lt, { emoticonStore: it.A, schema: t.pm_schema }),
          );
        });
      function _t(e) {
        const { schemaConfig: t, editModel: n, clanSteamID: a } = e,
          o = t.pm_schema,
          s = u.useMemo(
            () =>
              (function (e) {
                return Z.sM({ rules: [Z.tG(/^>$/, e.nodes.quote)] });
              })(o),
            [o],
          );
        (0, l.c$)(s);
        const i = o.nodes,
          c = u.useCallback(
            (e, o) => ({
              nodeAttrs: { type: e, attrs: o.attrs },
              args: t.ConvertAttrToBBCodeArgs(o, o.attrs),
              imageNodeType: i.image,
              videoNodeType: i.video,
              editModel: n,
              clanSteamID: a,
            }),
            [t, i.image, i.video, n, a],
          ),
          d = u.useMemo(
            () => [
              i.previewyoutube && {
                type: i.previewyoutube,
                component: ue,
                readProps: (e) => ({
                  videoID: e.attrs.videoID,
                  align: e.attrs.align,
                  editModel: n,
                }),
              },
              i.image && {
                type: i.image,
                component: y,
                readProps: (e) => c("image", e),
              },
              i.video && {
                type: i.video,
                component: y,
                readProps: (e) => c("video", e),
              },
              i.meetsteamsessiongroup && {
                type: i.meetsteamsessiongroup,
                component: je,
                readProps: (e) => ({ group_id: e.attrs.group_id }),
              },
              i.dynamiclink && {
                type: i.dynamiclink,
                component: ut,
                readProps: (e) => ({ editModel: n, href: e.attrs.href }),
              },
            ],
            [i, n, c],
          );
        return u.createElement(r.U, { specs: d });
      }
    },
  },
]);

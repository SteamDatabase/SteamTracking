/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2714],
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
    83748: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => We });
      var n = a(90286),
        l = a(26555),
        o = a(22145),
        r = a(69956),
        s = a(28106),
        i = a(81393),
        c = a(64238),
        d = a.n(c),
        u = a(90626),
        m = a(81047),
        p = a(28954),
        E = a(27666),
        g = a(71138),
        _ = a(33737),
        v = a(2805),
        f = a(36509),
        b = a(4869),
        h = a(28015),
        I = a(71696),
        w = a(30175),
        C = a(61859),
        M = a(27650),
        S = a(73745),
        D = a(30470),
        k = a(21134),
        y = a(95606);
      function T(e) {
        const {
            nodeAttrs: t,
            editModel: a,
            args: n,
            imageNodeType: l,
            videoNodeType: o,
            clanSteamID: r,
            setAttrs: s,
            focusView: c,
            removeNode: m,
          } = e,
          [p, E, g] = (0, S.uD)(),
          [_, v] = (0, S.OP)();
        let f;
        const { type: h, attrs: I } = t;
        "image" == h
          ? (f = u.createElement(y.B, {
              strTag: "img",
              args: n,
              event: a.GetEventModel(),
              showErrorInfo: !0,
            }))
          : "video" == h
            ? (f = u.createElement(y.B, {
                key: `${I.mp4}_${I.webm}`,
                strTag: "video",
                args: n,
                event: a.GetEventModel(),
                showErrorInfo: !0,
              }))
            : (0, i.z)(h, "unhandled type: " + h);
        const M = u.useCallback(() => {
          c(), g();
        }, [c, g]);
        return u.createElement(
          u.Fragment,
          null,
          p &&
            u.createElement(A, {
              bIsEdit: !0,
              nodeAttrs: t,
              hideModal: M,
              imageNodeType: l,
              videoNodeType: o,
              clanSteamID: r,
              setAttrs: s,
            }),
          u.createElement(
            "span",
            { className: d()(k.ClanImageContainer, _ && k.Hovered), ...v },
            f,
            u.createElement(
              "span",
              { className: k.ImageControls },
              u.createElement(
                w.ff,
                {
                  onClick: E,
                  tooltip: (0, C.we)("#EventEditor_ReplaceImage_Title"),
                },
                u.createElement(b.ffu, null),
              ),
              u.createElement(
                w.ff,
                {
                  onClick: m,
                  tooltip: (0, C.we)("#StoreAdmin_GameDescription_RemoveImage"),
                },
                u.createElement(b.sED, null),
              ),
            ),
          ),
        );
      }
      function A(e) {
        const {
            bIsEdit: t = !1,
            nodeAttrs: a,
            hideModal: n,
            clanSteamID: l,
            setAttrs: o,
            imageNodeType: r,
            videoNodeType: s,
          } = e,
          { type: c, attrs: m } = a,
          p = u.useMemo(() => {
            let e;
            if (
              ("image" == c
                ? (e = m.src)
                : "video" == c && (e = m.mp4 || m.webm),
              e)
            ) {
              const [t] = (0, E.s9)(e);
              return t && g.pU.GetClanImageByImageHash(l, t);
            }
          }, [l, c, m]),
          [v, f] = u.useState(p ? "uploaded" : "hotlink"),
          b = u.useCallback(
            (e) => {
              o({ src: e }, r), n();
            },
            [o, n, r],
          ),
          I = u.useCallback(
            (e) => {
              o({ ...m, ...e }, s), n();
            },
            [m, o, n, s],
          );
        let w,
          M = null;
        if ("image" == c)
          (M = u.createElement(G, {
            active: "hotlink" == v,
            bIsEdit: t,
            hideModal: n,
            onImageSelected: b,
            src: m.src,
          })),
            (w = t
              ? (0, C.we)("#EventEditor_ReplaceImage_Title")
              : (0, C.we)("#EventEditor_InsertImage_Title"));
        else {
          if ("video" != c) return (0, i.z)(c, "Unhandled type"), null;
          (M = u.createElement(N, {
            active: "hotlink" == v,
            bIsEdit: t,
            hideModal: n,
            attrs: m,
            setAttrs: o,
          })),
            (w = (0, C.we)("#EventEditor_EditVideo_Title"));
        }
        return u.createElement(
          h.mt,
          { active: !0, onDismiss: n, className: k.ClanImageModalContent },
          u.createElement(_.Y9, null, w),
          u.createElement(
            _.zW,
            { value: v, onChange: (e) => f(e) },
            u.createElement(_.a, { value: "uploaded" }, "Uploaded"),
            u.createElement(_.a, { value: "hotlink" }, "Enter URL"),
          ),
          u.createElement(
            "div",
            {
              className: d()(k.ClanImageModalMode, "uploaded" == v && k.Active),
            },
            u.createElement(B, {
              bIsEdit: t,
              hideModal: n,
              onImageSelected: b,
              onVideoSelected: s && I,
              clanSteamID: l,
              selectedImage: p,
            }),
          ),
          u.createElement(
            "div",
            {
              className: d()(k.ClanImageModalMode, "hotlink" == v && k.Active),
            },
            M,
          ),
        );
      }
      function G(e) {
        const {
            active: t,
            bIsEdit: a,
            hideModal: n,
            onImageSelected: l,
            src: o,
          } = e,
          [r, s] = u.useState(o),
          i = u.useCallback((e) => s(e.currentTarget.value), []),
          c = a
            ? (0, C.we)("#EventEditor_ReplaceImage_Title")
            : (0, C.we)("#EventEditor_InsertImage_Title"),
          d = u.useRef();
        return (
          u.useEffect(() => {
            t && d.current.Focus();
          }, [t]),
          u.createElement(
            _.lV,
            { onSubmit: () => l(r) },
            u.createElement(
              _.nB,
              null,
              u.createElement(_.pd, {
                ref: d,
                value: r,
                onChange: i,
                label: (0, C.we)("#EventEditor_InsertImage_URL"),
              }),
            ),
            u.createElement(_.CB, {
              onCancel: n,
              strOKText: c,
              bOKDisabled: !r || r == o,
            }),
          )
        );
      }
      function N(e) {
        const {
            active: t,
            bIsEdit: a,
            hideModal: n,
            attrs: l,
            setAttrs: o,
          } = e,
          [r, s] = u.useState(l.mp4),
          [i, c] = u.useState(l.webm),
          [d, m] = u.useState(l.poster),
          [p, E] = u.useState(!!l.autoplay),
          [g, v] = u.useState(!!l.controls),
          f = u.useRef();
        u.useEffect(() => {
          t && f.current.Focus();
        }, [t]);
        return u.createElement(
          _.lV,
          {
            onSubmit: (e) => {
              o({
                ...l,
                mp4: r || void 0,
                webm: i || void 0,
                poster: d || void 0,
                autoplay: p,
                controls: g,
              }),
                n();
            },
          },
          u.createElement(
            _.nB,
            null,
            u.createElement(_.pd, {
              ref: f,
              value: r,
              onChange: (e) => s(e.currentTarget.value),
              label: (0, C.we)("#EventEditor_InsertVideo_InputMP4"),
            }),
            u.createElement(_.pd, {
              value: i,
              onChange: (e) => c(e.currentTarget.value),
              label: (0, C.we)("#EventEditor_InsertVideo_InputWebM"),
            }),
            u.createElement(_.pd, {
              value: d,
              onChange: (e) => m(e.currentTarget.value),
              label: (0, C.we)("#EventEditor_InsertVideo_InputPoster"),
            }),
            u.createElement(_.Yh, {
              checked: p,
              onChange: E,
              label: (0, C.we)("#EventEditor_InsertVideo_InputAutoplay"),
            }),
            u.createElement(_.Yh, {
              checked: g,
              onChange: v,
              label: (0, C.we)("#EventEditor_InsertVideo_InputShowControls"),
            }),
          ),
          u.createElement(_.CB, {
            onCancel: n,
            strOKText: (0, C.we)("#EventEditor_EditVideo_Title"),
            bOKDisabled: !r && !i,
          }),
        );
      }
      function B(e) {
        const {
            bIsEdit: t,
            hideModal: a,
            onImageSelected: n,
            onVideoSelected: l,
            clanSteamID: o,
          } = e,
          [r, s] = u.useState(null),
          [i, c] = u.useState(e.selectedImage),
          d = t
            ? (0, C.we)("#EventEditor_ReplaceImage_Title")
            : (0, C.we)("#EventEditor_InsertImage_Title"),
          p = u.useCallback(
            (e) => {
              switch (e.file_type) {
                case 4:
                  l && l({ mp4: (0, m.fw)(e) });
                  break;
                case 5:
                  l && l({ webm: (0, m.fw)(e) });
                  break;
                default:
                  n((0, m.fw)(e));
              }
            },
            [n, l],
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
            u.createElement(f.g, { fnSetImageSearch: s }),
            u.createElement(v.ge, {
              clanAccountID: o.GetAccountID(),
              fileNameSearch: r,
              onImageSelected: E,
              selectedItem: i,
            }),
            u.createElement(_.CB, {
              onCancel: a,
              strOKText: d,
              bOKDisabled: !i || i == e.selectedImage,
            }),
          ),
        );
      }
      function O(e) {
        const { editModel: t, imageNode: a, videoNode: n, children: l } = e,
          o = u.useCallback(
            async (e) => {
              const l = t.GetClanSteamID(),
                o = new p.V(l);
              if (!(await o.AddImage(e, t.GetCurEditLanguage(), null)))
                throw "Error processing image upload";
              const r = await o.UploadAllImages(
                t.GetIncludedRealmList(),
                t.GetCurEditLanguage(),
              );
              if (!r || 1 != Object.values(r).length)
                throw "Error uploading image";
              const s = Object.values(r)[0];
              if (!s.success) throw s.message;
              const i = x(g.pU.GetClanImageByImageHash(l, s.image_hash), a, n);
              return (
                i.type == a && (await (0, M.DB)((0, E.v6)(i.attrs.src))), i
              );
            },
            [t, a, n],
          );
        return a
          ? u.createElement(
              I.Xv,
              { ProcessFileUpload: o, bAllowImageHotLinking: !0 },
              l,
            )
          : l;
      }
      function x(e, t, a) {
        const n = (0, m.fw)(e);
        switch (e.file_type) {
          case 4:
            if (!a) throw "Video unsupported";
            return a.create({ mp4: n });
          case 5:
            if (!a) throw "Video unsupported";
            return a.create({ webm: n });
          default:
            return t.create({ src: n });
        }
      }
      var V = a(33645),
        U = a.n(V),
        z = a(55608),
        P = a(79497),
        Y = a(9024),
        R = a(52038);
      const j = {
          ...z.DQ.nodes,
          horizontal_rule: {
            group: "block",
            parseDOM: [{ tag: "hr" }],
            toDOM: (0, z.BM)("hr", U().HR),
            bbCode: { tag: "hr" },
          },
          quote: {
            parseDOM: [{ tag: "blockquote" }],
            content: "paragraph block*",
            group: "block",
            defining: !0,
            toDOM: (0, z.BM)("blockquote", U().BlockQuote),
            bbCode: { tag: "quote" },
          },
          pullquote: {
            content: "block+",
            group: "block",
            toDOM: (0, z.BM)("div", U().PullQuote),
            bbCode: { tag: "pullquote" },
          },
          smalltext: {
            content: "inline*",
            group: "block",
            toDOM: (0, z.BM)("div", (0, R.A)(U().SmallText, "BB_SmallText")),
            bbCode: { tag: "smalltext" },
          },
          ...Y.X,
        },
        K = {
          ...z.DQ.marks,
          spoiler: {
            toDOM: (0, z.BM)(
              "span",
              (0, R.A)(U().Spoiler, U().Revealed),
              (0, z.ce)("span", (0, R.A)(U().SpoilerText)),
            ),
            bbCode: { tag: "spoiler" },
          },
        };
      var H = a(6878),
        q = a.n(H),
        L = a(63226),
        F = a.n(L),
        Q = a(44832);
      const $ = {
        nodes: {
          ...j,
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
                  U()[`Header${e.attrs.level}`],
                  q()[`Header${e.attrs.level}`],
                ),
              },
              0,
            ],
            bbCode: [1, 2, 3].map((e) => ({
              tag: `h${e}`,
              BBArgsToAttrs: (t) => ({ ...X(t), level: e }),
              AttrsToBBArgs: (e) => ({ ...W(e), tag: `h${e.level}` }),
            })),
          },
          quote: {
            ...j.quote,
            toDOM: () => [
              "blockquote",
              { class: (0, R.A)(U().BlockQuote, q().BlockQuote) },
              0,
            ],
          },
          previewyoutube: {
            attrs: { videoID: { default: "" }, align: { default: "" } },
            group: "block",
            atom: !0,
            draggable: !0,
            toDOM: () => ["div", { class: F().EditorYoutubeLoading }],
            bbCode: {
              tag: "previewyoutube",
              BBArgsToAttrs: (e) => {
                const [t, a] = (e[""] || "").split(";");
                return { videoID: t, align: a };
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
            toDOM: () => ["div", { class: F().EditorYoutubeLoading }],
            bbCode: {
              tag: "meetsteamsessiongroup",
              BBArgsToAttrs: (e) => ({ group_id: Number(e.group_id) }),
              AttrsToBBArgs: (e) => ({ args: { group_id: "" + e.group_id } }),
            },
          },
        },
        marks: {
          ...K,
          link: {
            ...K.link,
            attrs: {
              href: {},
              title: { default: null },
              style: { default: null },
            },
            toDOM(e) {
              const { href: t, title: a, style: n } = e.attrs;
              return ["a", { href: t, title: a, class: (0, Q.Xe)(n) }, 0];
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
      function X(e) {
        return e.id ? { id: e.id.replace(/^#/, "") } : {};
      }
      function W(e) {
        return e.id ? { args: { id: e.id } } : {};
      }
      var Z = a(79216);
      var J = a(70995),
        ee = a(74410),
        te = a(73662),
        ae = a(9154),
        ne = a(72421);
      function le(e) {
        const {
            videoID: t,
            align: a,
            selected: n,
            setAttrs: l,
            focusView: o,
          } = e,
          [r, s] = u.useState(!1),
          [i, c, d] = (0, S.uD)(),
          m = u.useCallback(() => s(!0), []),
          p = u.useCallback(() => s(!1), []),
          E = u.useCallback(() => {
            d(), o();
          }, [d, o]),
          g = u.useCallback(
            (e, t) => {
              l({ videoID: e, align: t }), E();
            },
            [l, E],
          ),
          { sizeStr: _, alignStr: v } = (0, ee.i1)(a);
        return u.createElement(
          u.Fragment,
          null,
          i &&
            u.createElement(oe, {
              videoID: t,
              align: a,
              bEditing: !0,
              hideModal: E,
              onSave: g,
            }),
          u.createElement(
            "div",
            {
              className: (0, R.A)(
                L.PreviewYoutubeEditor,
                _,
                v,
                te.PreviewYouTubeVideo,
                n && L.Selected,
              ),
              onMouseEnter: m,
              onMouseLeave: p,
            },
            r &&
              u.createElement(
                "div",
                { className: L.EditHover, onClick: c },
                (0, C.we)("#Button_Edit"),
              ),
            n && u.createElement("div", { className: L.SelectionOverlay }),
            u.createElement("img", {
              src: `https://img.youtube.com/vi/${t}/0.jpg`,
            }),
          ),
        );
      }
      function oe(e) {
        const {
            videoID: t = "",
            align: a = "",
            bEditing: n = !1,
            hideModal: l,
            onSave: o,
          } = e,
          [r, s] = u.useState(a || ee.V2.left),
          [i, c] = u.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [d, m] = u.useState(void 0),
          p = u.useCallback(() => {
            const { strVideoID: e } = (0, J.XU)(i);
            return (
              e ? o(e, r) : m((0, C.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [i, r, o]),
          E = u.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return u.createElement(
          ae.EN,
          { active: !0 },
          u.createElement(
            ne._,
            {
              strTitle: (0, C.we)("#EventEditor_InsertYouTube"),
              closeModal: l,
              strOKText: n
                ? (0, C.we)("#Button_Save")
                : (0, C.we)("#EventEditor_InsertYouTube"),
              onOK: p,
            },
            d && u.createElement("div", { className: L.Error }, d),
            u.createElement(_.pd, {
              label: (0, C.we)("#EventEditor_InsertYouTube_URL"),
              placeholder: (0, C.we)("#EventEditor_InsertYouTube_Placholder"),
              value: i,
              ref: E,
              onChange: (e) => c(e.currentTarget.value),
            }),
            u.createElement(
              _.o1,
              { label: (0, C.we)("#EventEditor_InsertYouTube_Position") },
              u.createElement(_.Od, {
                checked: r == ee.V2.left,
                onChange: (e) => e && s(ee.V2.left),
                label: (0, C.we)("#EventEditor_InsertYouTube_Left"),
              }),
              u.createElement(_.Od, {
                checked: r == ee.V2.right,
                onChange: (e) => e && s(ee.V2.right),
                label: (0, C.we)("#EventEditor_InsertYouTube_Right"),
              }),
              u.createElement(_.Od, {
                checked: r == ee.V2.full,
                onChange: (e) => e && s(ee.V2.full),
                label: (0, C.we)("#EventEditor_InsertYouTube_Full"),
              }),
              u.createElement(_.Od, {
                checked: r == ee.V2.summary,
                onChange: (e) => e && s(ee.V2.summary),
                label: (0, C.we)("#EventEditor_InsertYouTube_Summary"),
              }),
            ),
          ),
        );
      }
      var re = a(64753),
        se = a(25918),
        ie = a(69001),
        ce = a(65946),
        de = a(19675),
        ue = a(78395),
        me = a(21869),
        pe = a(1397),
        Ee = a.n(pe),
        ge = a(63556),
        _e = a(44165),
        ve = a(95695),
        fe = a(99637),
        be = a(62490),
        he = a(91675),
        Ie = a(14771),
        we = a(87937),
        Ce = a(61819),
        Me = a(88942),
        Se = a(78327),
        De = a(41735),
        ke = a.n(De);
      function ye(e) {
        const { hideModal: t, fnUpdateSession: a } = e,
          [n, l] = (0, u.useState)(() => Be(!0, null)),
          [o, r] = (0, u.useState)(() => Oe(!0, null)),
          [s] = (0, ce.q3)(() => [o.location_type]);
        return u.createElement(
          me.E,
          { active: !0 },
          u.createElement(
            ue.o0,
            {
              strTitle: (0, C.we)("#MeetSteam_create_title"),
              onOK: () => a(n, o),
              closeModal: () => {
                r(Oe(!0, null)), l(Be(!0, null)), t();
              },
              bOKDisabled: null == !s,
            },
            u.createElement(
              "div",
              { className: Ee().DialogCtn },
              u.createElement(Ge, { group: n, fnSetGroup: l }),
              u.createElement(Ne, { session: o, fnSetSession: r }),
            ),
          ),
        );
      }
      function Te(e) {
        const { hideModal: t, groupInput: a, fnUpdateGroupSession: n } = e,
          [l, o] = (0, u.useState)(() => Be(!1, a));
        return u.createElement(
          me.E,
          { active: !0 },
          u.createElement(
            ue.o0,
            {
              strTitle: (0, C.we)("#MeetSteam_edit_title"),
              onOK: () => {
                n(l), t();
              },
              onCancel: () => {
                o(Be(!1, a)), t();
              },
            },
            u.createElement(
              "div",
              { className: Ee().DialogCtn },
              u.createElement(Ge, { group: l, fnSetGroup: o }),
            ),
          ),
        );
      }
      function Ae(e) {
        const {
            bCreate: t,
            hideModal: a,
            sessionInput: n,
            fnUpdateSession: l,
          } = e,
          [o, r] = (0, u.useState)(() => Oe(t, n)),
          [s] = (0, ce.q3)(() => [o.location_type]);
        return u.createElement(
          me.E,
          { active: !0 },
          u.createElement(
            ue.o0,
            {
              strTitle: (0, C.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                l(o), a();
              },
              onCancel: () => {
                r(Oe(t, n)), a();
              },
              bOKDisabled: !s,
            },
            u.createElement(
              "div",
              { className: Ee().DialogCtn },
              u.createElement(Ne, { session: o, fnSetSession: r }),
            ),
          ),
        );
      }
      function Ge(e) {
        const { group: t, fnSetGroup: a } = e,
          n = (0, ge.E)();
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(_.pd, {
            type: "text",
            label: (0, C.we)("#MeetSteam_edit_session_name"),
            value: C.NT.Get(t.localized_session_title, n),
            onChange: (e) => {
              const l = { ...t };
              (l.localized_session_title = C.NT.Set(
                l.localized_session_title,
                n,
                e.currentTarget.value,
              )),
                a(l);
            },
          }),
          u.createElement(
            _.JU,
            null,
            (0, C.we)("#MeetSteam_edit_session_desc"),
          ),
          u.createElement("textarea", {
            className: (0, R.A)(
              "DialogTextInputBase",
              Ee().EventDescriptionField,
            ),
            value: C.NT.Get(t.localized_session_description, n),
            rows: 5,
            onChange: (e) => {
              const l = { ...t };
              (l.localized_session_description = C.NT.Set(
                l.localized_session_description,
                n,
                e.currentTarget.value,
              )),
                a(l);
            },
          }),
        );
      }
      function Ne(e) {
        const { session: t, fnSetSession: a } = e,
          [n, l, o, r, s, i] = (0, ce.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.max_capacity,
            t.max_per_team,
            t.location_type,
            t.in_person_time_zone,
          ]),
          c = [];
        for (let e = 0; e < 4; ++e) c.push({ data: e, label: e });
        const d = Math.max(0, Math.floor((l - n) / 60)),
          m = "America/Los_Angeles",
          p = Intl.DateTimeFormat().resolvedOptions().timeZone,
          E = "in_person" === s ? (null != i ? i : m) : p,
          g = we.unix(t.rtime_start).tz(m),
          v = we.unix(t.rtime_start).tz(E),
          f = v.utcOffset() - g.utcOffset(),
          b = we.unix(t.rtime_end).tz(m),
          h = we.unix(t.rtime_end).tz(E),
          I = h.utcOffset() - b.utcOffset(),
          w = (function () {
            const e = (0, Me.I)({
              queryKey: ["timezone"],
              queryFn: async () => {
                const e = `${Se.TS.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
                  t = {},
                  a = await ke().get(e, { params: t });
                return null == a ? void 0 : a.data.timezones;
              },
            });
            return e.isSuccess ? e.data : [];
          })(),
          M = u.useMemo(
            () => w.reduce((e, t) => e.set(t.name, t.friendly_name), new Map()),
            [w],
          ),
          S = (e) => {
            var t;
            return null !== (t = M.get(e)) && void 0 !== t ? t : e;
          };
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            "div",
            { className: ve.EventEditorTextTitle },
            (0, C.we)("#MeetSteam_edit_date_display_title"),
          ),
          u.createElement(
            "div",
            { className: ve.EventEditorTextSubTitle },
            (0, C.we)("#MeetSteam_edit_date_display_desc"),
          ),
          u.createElement(
            _.zW,
            {
              value: s,
              onChange: (e) => {
                a({ ...t, location_type: e });
              },
            },
            u.createElement(
              _.a,
              { value: "in_person" },
              (0, C.we)("#MeetSteam_edit_date_display_in_person"),
            ),
            u.createElement(
              _.a,
              { value: "virtual" },
              (0, C.we)("#MeetSteam_edit_date_display_virtual"),
            ),
          ),
          "in_person" === s &&
            u.createElement(Ce.Ay, {
              styles: { option: (e) => ({ ...e, color: "#444444" }) },
              isSearchable: !0,
              isMulti: !1,
              options: w.map((e) => ({
                label: e.friendly_name,
                value: e.name,
              })),
              defaultMenuIsOpen: !1,
              value: i ? { label: S(i), value: i } : { label: S(m), value: m },
              onChange: (e) => a({ ...t, in_person_time_zone: e.value }),
            }),
          u.createElement("br", null),
          u.createElement(fe.K, {
            strDescription: (0, C.we)("#MeetSteam_edit_start"),
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => n,
            fnSetTimeToUpdate: (e) =>
              a({ ...t, rtime_start: e, rtime_end: e + Ie.Kp.PerMinute * d }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          u.createElement("br", null),
          u.createElement(_.pd, {
            type: "number",
            min: 0,
            label: (0, C.we)("#MeetSteam_edit_duration"),
            onChange: (e) => {
              const n = Number.parseInt(e.currentTarget.value);
              a({ ...t, rtime_end: t.rtime_start + Ie.Kp.PerMinute * n });
            },
            value: d,
          }),
          u.createElement(
            "div",
            null,
            (0, C.we)("#MeetSteam_edit_displayed_start"),
            ": ",
            (0, he.P0)(v.unix() + 60 * f, !1, v.format("z")),
            " ",
          ),
          u.createElement(
            "div",
            null,
            (0, C.we)("#MeetSteam_edit_displayed_end"),
            ": ",
            (0, he.P0)(h.unix() + 60 * I, !1, h.format("z")),
            " ",
          ),
          u.createElement("br", null),
          u.createElement("br", null),
          u.createElement(
            "div",
            { className: Ee().ParticipantRow },
            u.createElement(_.pd, {
              type: "number",
              value: o,
              label: (0, C.we)("#MeetSteam_edit_max_capacity"),
              min: 1,
              onChange: (e) =>
                a({
                  ...t,
                  max_capacity: Number.parseInt(e.currentTarget.value),
                }),
            }),
            u.createElement(_.m, {
              controlled: !0,
              label: (0, C.we)("#MeetSteam_edit_guest_count"),
              tooltip: (0, C.we)("#MeetSteam_edit_guest_count_ttip"),
              rgOptions: c,
              selectedOption: r,
              onChange: (e) => a({ ...t, max_per_team: e.data }),
            }),
          ),
        );
      }
      function Be(e, t) {
        if (e) {
          const e = se.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, be.$Y)([], 31, null),
            localized_session_description: (0, be.$Y)([], 31, null),
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
      function Oe(e, t) {
        if (e) {
          const e = _e.HD.GetTimeNowWithOverride(),
            t = se.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            a =
              null == t ? void 0 : t.reduce((e, t) => e.concat(t.sessions), []);
          let n = 0;
          do {
            n = Math.floor(1e4 + 9e4 * Math.random());
          } while (a && a.findIndex((e) => e.id == n) >= 0);
          const l = 3600 * Math.ceil(e / 3600);
          return {
            id: n,
            rtime_start: l + Ie.Kp.PerDay,
            rtime_end: l + Ie.Kp.PerDay + Ie.Kp.PerHour,
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
      function xe(e) {
        const t = se.mh.GetEditModel();
        for (
          let a = 0;
          a < t.GetEventModel().jsondata.meet_steam_groups.length;
          ++a
        ) {
          const n = t.GetEventModel().jsondata.meet_steam_groups[a];
          for (let t = 0; t < n.sessions.length; ++t)
            if (n.sessions[t].id == e)
              return { groupIndex: a, sessionIndex: t };
        }
        return null;
      }
      function Ve(e) {
        const t = se.mh.GetEditModel();
        for (
          let a = 0;
          a < t.GetEventModel().jsondata.meet_steam_groups.length;
          ++a
        ) {
          const n = t.GetEventModel().jsondata.meet_steam_groups[a];
          if (n.group_id == e) return { group: n, groupIndex: a };
        }
        return null;
      }
      function Ue(e) {
        const { focusView: t, removeNode: a, group_id: n } = e,
          l = se.mh.GetEditModel(),
          o = (0, ce.q3)(() => {
            var e;
            return null ===
              (e = l.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == n);
          }),
          [r, s, i] = (0, S.uD)(),
          c = u.useCallback(() => {
            t(), i();
          }, [t, i]),
          [d, m, p] = (0, S.uD)(),
          E = u.useCallback(() => {
            t(), p();
          }, [t, p]);
        return o && l.GetClanAccountID() == (0, de.H7)()
          ? u.createElement(
              "div",
              { className: Ee().EditorCtn },
              u.createElement(ze, { groupData: o, focusView: t }),
              u.createElement(
                "div",
                { className: Ee().controls },
                u.createElement(
                  w.ff,
                  { onClick: s, tooltip: (0, C.we)("#Button_Edit") },
                  u.createElement(b.ffu, null),
                ),
                u.createElement(
                  w.ff,
                  { onClick: m, tooltip: (0, C.we)("#Button_Delete") },
                  u.createElement(b.sED, null),
                ),
              ),
              r &&
                u.createElement(Te, {
                  hideModal: c,
                  groupInput: o,
                  fnUpdateGroupSession: (e) => {
                    const { groupIndex: t } = Ve(e.group_id),
                      a = se.mh.GetEditModel();
                    (a.GetEventModel().jsondata.meet_steam_groups[t] = e),
                      a.SetDirty(ie.IQ.description);
                  },
                }),
              d &&
                u.createElement(
                  me.E,
                  { active: !0 },
                  u.createElement(ue.o0, {
                    strTitle: (0, C.we)("#Button_Delete"),
                    strDescription: (0, C.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { groupIndex: e } = Ve(o.group_id),
                        t = se.mh.GetEditModel(),
                        n = [...t.GetEventModel().jsondata.meet_steam_groups];
                      n.splice(e, 1),
                        (t.GetEventModel().jsondata.meet_steam_groups = n),
                        t.SetDirty(ie.IQ.description),
                        a();
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
      function ze(e) {
        const { groupData: t, focusView: a } = e,
          n = (0, ce.q3)(() => t.sessions || []),
          [l, o, r] = (0, S.uD)(),
          s = u.useCallback(() => {
            a(), r();
          }, [a, r]);
        return t
          ? u.createElement(
              de.jr,
              { groupData: t },
              n.map((e, l) =>
                u.createElement(Pe, {
                  key: "timecol_" + t.group_id + "_" + e.id,
                  focusView: a,
                  sessionID: e.id,
                  bShowOR: l + 1 < n.length,
                }),
              ),
              u.createElement(
                w.ff,
                {
                  className: Ee().AddNew,
                  onClick: o,
                  tooltip: (0, C.we)("#MeetSteam_add"),
                },
                u.createElement(b.OMN, null),
              ),
              l &&
                u.createElement(Ae, {
                  bCreate: !0,
                  hideModal: s,
                  fnUpdateSession: (e) => {
                    const a = se.mh.GetEditModel(),
                      n = [...t.sessions, e];
                    n.sort((e, t) => e.rtime_start - t.rtime_start),
                      (t.sessions = n),
                      a.SetDirty(ie.IQ.description);
                  },
                }),
            )
          : null;
      }
      function Pe(e) {
        const { sessionID: t, bShowOR: a, focusView: n } = e,
          [l, o] = (0, S.OP)(),
          r = (0, ce.q3)(() => {
            const { groupIndex: e, sessionIndex: a } = xe(t);
            return se.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[a];
          }),
          [s, i, c] = (0, S.uD)(),
          d = u.useCallback(() => {
            n(), c();
          }, [n, c]),
          [m, p, E] = (0, S.uD)(),
          g = u.useCallback(() => {
            n(), E();
          }, [n, E]);
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            "div",
            { className: Ee().Column, ...o },
            u.createElement(de.Tn, { sessionData: r }),
            Boolean(l) &&
              u.createElement(
                "div",
                { className: Ee().controls },
                u.createElement(
                  w.ff,
                  { onClick: i, tooltip: (0, C.we)("#Button_Edit") },
                  u.createElement(b.ffu, null),
                ),
                u.createElement(
                  w.ff,
                  { onClick: p, tooltip: (0, C.we)("#Button_Delete") },
                  u.createElement(b.sED, null),
                ),
              ),
            s &&
              u.createElement(Ae, {
                bCreate: !1,
                hideModal: d,
                sessionInput: r,
                fnUpdateSession: (e) => {
                  const a = se.mh.GetEditModel(),
                    { groupIndex: n, sessionIndex: l } = xe(t),
                    o = [
                      ...a.GetEventModel().jsondata.meet_steam_groups[n]
                        .sessions,
                    ];
                  (o[l] = e),
                    o.sort((e, t) => e.rtime_start - t.rtime_start),
                    (a.GetEventModel().jsondata.meet_steam_groups[n].sessions =
                      o),
                    a.SetDirty(ie.IQ.description);
                },
              }),
            m &&
              u.createElement(
                me.E,
                { active: !0 },
                u.createElement(ue.o0, {
                  strTitle: (0, C.we)("#Button_Delete"),
                  strDescription: (0, C.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = se.mh.GetEditModel(),
                      { groupIndex: a, sessionIndex: n } = xe(t),
                      l = [
                        ...e.GetEventModel().jsondata.meet_steam_groups[a]
                          .sessions,
                      ];
                    l.splice(n, 1),
                      l.sort((e, t) => e.rtime_start - t.rtime_start),
                      (e.GetEventModel().jsondata.meet_steam_groups[
                        a
                      ].sessions = l),
                      e.SetDirty(ie.IQ.description);
                  },
                  closeModal: g,
                }),
              ),
          ),
          a && u.createElement(de.w3, null),
        );
      }
      var Ye = a(79570);
      a(86807);
      var Re = a(44483);
      const je = u.memo(function (e) {
        const {
          view: t,
          schema: a,
          refUpdateToolbar: n,
          className: l,
          clanSteamID: o,
          bSpellcheckEnabled: r,
          setSpellcheckEnabled: s,
        } = e;
        return u.createElement(
          w.bI,
          { refUpdateToolbar: n, view: t },
          u.createElement(
            "div",
            { className: e.className },
            u.createElement(
              w.Ez,
              { className: e.className },
              u.createElement(Ye.MV, null),
              u.createElement(w.XQ, null),
              u.createElement(Ye.Km, { schema: a }),
              u.createElement(w.XQ, null),
              a.marks.link && u.createElement(Ke, { schema: a }),
              u.createElement(w.XQ, null),
              u.createElement(Ye.Hz, { schema: a }),
              u.createElement(Ye.WJ, { schema: a, levels: 3 }),
              u.createElement(w.XQ, null),
              u.createElement(He, { schema: a, clanSteamID: o }),
              !1,
              u.createElement(Ye.C$, {
                schema: a,
                showIndentButtonsAsNeeded: !0,
              }),
              u.createElement(w.hK, null),
              s &&
                u.createElement(Ye.Nt, {
                  bSpellcheckEnabled: r,
                  setSpellcheckEnabled: s,
                }),
              a.nodes.meetsteamsessiongroup &&
                u.createElement(Le, { schema: a }),
            ),
            !1,
          ),
        );
      });
      function Ke(e) {
        const t = (0, Q.V9)();
        return u.createElement(Ye.z9, { schema: e.schema, addtlAttrs: t });
      }
      function He(e) {
        const { schema: t, clanSteamID: a } = e,
          { callbacks: n, view: l } = (0, w.wU)(),
          { image: o, video: r, previewyoutube: s } = t.nodes,
          [i, c] = u.useState(),
          d = u.useCallback(() => {
            c(void 0), l.focus();
          }, [l]),
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
              l.dispatch(l.state.tr.insert(l.state.selection.to, t.create(e)));
            },
            [l],
          );
        return u.createElement(
          u.Fragment,
          null,
          i &&
            u.createElement(A, {
              nodeAttrs: i,
              hideModal: d,
              setAttrs: E,
              imageNodeType: o,
              videoNodeType: r,
              clanSteamID: a,
            }),
          o &&
            u.createElement(
              w.ff,
              {
                tooltip: "#EventEditor_InsertImage_Title",
                onClick: m,
                toggled: "image" == (null == i ? void 0 : i.type),
              },
              u.createElement(b._V3, null),
            ),
          r &&
            u.createElement(
              w.ff,
              {
                tooltip: "#EventEditor_EditVideo_Title",
                onClick: p,
                toggled: "video" == (null == i ? void 0 : i.type),
              },
              u.createElement(b.CeX, null),
            ),
          s && u.createElement(qe, { schema: t }),
          (o || r || s) && u.createElement(w.XQ, null),
        );
      }
      function qe(e) {
        const { schema: t } = e,
          { callbacks: a, view: n } = (0, w.wU)(),
          [l, o, r] = (0, re.uD)(),
          s = u.useCallback(() => {
            r(), n.focus();
          }, [r, n]),
          i = u.useCallback(
            (e, a) => {
              !(function (e, t, a, n = ee.V2.left) {
                e.dispatch(
                  e.state.tr.insert(
                    e.state.selection.to,
                    t.create({ videoID: a, align: n }),
                  ),
                );
              })(n, t.nodes.previewyoutube, e, a),
                s();
            },
            [t, n, s],
          );
        return u.createElement(
          u.Fragment,
          null,
          l && u.createElement(oe, { hideModal: s, onSave: i }),
          u.createElement(
            w.ff,
            { tooltip: "#EventEditor_InsertYouTube", onClick: o, toggled: l },
            u.createElement("img", { src: Re.A }),
          ),
        );
      }
      function Le(e) {
        const { schema: t } = e,
          { callbacks: a, view: n } = (0, w.wU)(),
          l = se.mh.GetEditModel(),
          [o, r, s] = (0, re.uD)(),
          i = u.useCallback(() => {
            s(), n.focus();
          }, [s, n]),
          c = u.useCallback(
            (e, a) => {
              l.GetEventModel().jsondata.meet_steam_groups ||
                (l.GetEventModel().jsondata.meet_steam_groups = []),
                l
                  .GetEventModel()
                  .jsondata.meet_steam_groups.push({ ...e, sessions: [a] }),
                (function (e, t, a) {
                  e.dispatch(
                    e.state.tr.insert(
                      e.state.selection.to,
                      t.create({ group_id: a }),
                    ),
                  );
                })(n, t.nodes.meetsteamsessiongroup, e.group_id),
                i();
            },
            [t, n, i, l],
          );
        if ((null == l ? void 0 : l.GetClanAccountID()) == (0, de.H7)())
          return u.createElement(
            u.Fragment,
            null,
            o && u.createElement(ye, { hideModal: i, fnUpdateSession: c }),
            u.createElement(
              w.ff,
              { tooltip: "#MeetSteam_add_group_ttip", onClick: r, toggled: o },
              u.createElement("img", { src: Re.A }),
            ),
          );
      }
      var Fe = a(75844),
        Qe = a(90316),
        $e = a.n(Qe),
        Xe = a(1805);
      const We = (0, Fe.PA)(function (e) {
          const { editModel: t } = e,
            a = t.GetEventModel().loadedAllLanguages,
            n = t.GetCurEditLanguage();
          return a
            ? u.createElement(Ze, { ...e, eCurrentEditLanguage: n })
            : null;
        }),
        Ze = u.memo(function (e) {
          const {
              editModel: t,
              refOnInsertImage: a,
              limitBBCode: o,
              eCurrentEditLanguage: r,
            } = e,
            [c, d] = u.useState(),
            p = u.useMemo(() => {
              return (e = o), new P.W($, e);
              var e;
            }, [o]),
            [E, _] = u.useState();
          u.useEffect(() => {
            _(new n.n(p, t.GetDescription(r), (e) => t.SetDescription(r, e)));
          }, [p, t, r]);
          const v = u.useRef(void 0);
          (0, l.i)(E, { msAutosaveTimeout: 1e3 });
          const { nodes: f, marks: b } = p.pm_schema,
            h = (function (e, t, a) {
              const n = u.useCallback(
                (n) => {
                  const l = `^https?://${D.TS.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)(?<extension>\\.[^\\.]*)$`,
                    o = n.match(l);
                  if (o && o.groups.clanid == e.GetClanAccountID().toString()) {
                    const n = g.pU.GetClanImageByImageHash(
                      e.GetClanSteamID(),
                      o.groups.filename,
                    );
                    let l = n && x(n, t, a);
                    if (l) return l;
                  }
                  return "default";
                },
                [e, t, a],
              );
              return t ? n : void 0;
            })(t, f.image, f.video);
          return (
            (function (e, t, a, n, l) {
              u.useEffect(() => {
                if (!l || !t) return;
                const o = (e, o) => {
                  let r;
                  switch (o) {
                    case m._o.k_eInsertFullImage:
                      r = t.create({ src: (0, m.fw)(e) });
                      break;
                    case m._o.k_eInsertThumbnail:
                      r = t.create({ src: (0, m.fw)(e, !0) }, null, [
                        n.create({ href: (0, m.fw)(e) }),
                      ]);
                      break;
                    case m._o.k_eInsertVideo:
                      let l;
                      4 == e.file_type
                        ? (l = { mp4: (0, m.fw)(e) })
                        : 5 == e.file_type && (l = { webm: (0, m.fw)(e) }),
                        l && a && (r = a.create(l));
                      break;
                    case m._o.k_eShowImageGroup:
                      break;
                    default:
                      (0, i.z)(o, `Unhandled insert type ${o}`);
                  }
                  if (r) {
                    const e = l.state.tr;
                    e.selection.replaceWith(e, r), l.dispatch(e);
                  }
                };
                return (
                  (e.current = o),
                  () => {
                    e.current == o && (e.current = void 0);
                  }
                );
              }, [e, t, a, n, l]);
            })(a, f.image, f.video, b.link, c),
            u.createElement(
              O,
              { editModel: t, imageNode: f.image, videoNode: f.video },
              u.createElement(
                "div",
                { className: "" },
                u.createElement(je, {
                  view: c,
                  schema: p.pm_schema,
                  refUpdateToolbar: v,
                  className: $e().ToolBar,
                  clanSteamID: t.GetClanSteamID(),
                }),
                u.createElement(
                  "div",
                  { className: $e().EventDescriptionArea },
                  u.createElement(
                    Xe.l,
                    {
                      pmState: E,
                      className: (0, R.A)(
                        $e().EventDescriptionRichField,
                        $e().EventDetailsBody,
                      ),
                      refOnUpdate: v,
                      refView: d,
                      panelProps: { onBlur: () => E.CommitChanges() },
                    },
                    u.createElement(s.W, {
                      linkMarkType: b.link,
                      onURLPasted: h,
                      schema: p.pm_schema,
                    }),
                    f.image && u.createElement(I.pw, { nodeType: f.image }),
                    u.createElement(Je, {
                      schemaConfig: p,
                      editModel: t,
                      clanSteamID: t.GetClanSteamID(),
                    }),
                  ),
                ),
              ),
            )
          );
        });
      function Je(e) {
        const { schemaConfig: t, editModel: a, clanSteamID: n } = e,
          l = t.pm_schema,
          s = u.useMemo(
            () =>
              (function (e) {
                return Z.sM({ rules: [Z.tG(/^>$/, e.nodes.quote)] });
              })(l),
            [l],
          );
        (0, o.c$)(s);
        const i = l.nodes,
          c = u.useCallback(
            (e, l) => ({
              nodeAttrs: { type: e, attrs: l.attrs },
              args: t.ConvertAttrToBBCodeArgs(l, l.attrs),
              imageNodeType: i.image,
              videoNodeType: i.video,
              editModel: a,
              clanSteamID: n,
            }),
            [t, i.image, i.video, a, n],
          ),
          d = u.useMemo(
            () => [
              i.previewyoutube && {
                type: i.previewyoutube,
                component: le,
                readProps: (e) => ({
                  videoID: e.attrs.videoID,
                  align: e.attrs.align,
                }),
              },
              i.image && {
                type: i.image,
                component: T,
                readProps: (e) => c("image", e),
              },
              i.video && {
                type: i.video,
                component: T,
                readProps: (e) => c("video", e),
              },
              i.meetsteamsessiongroup && {
                type: i.meetsteamsessiongroup,
                component: Ue,
                readProps: (e) => ({ group_id: e.attrs.group_id }),
              },
            ],
            [i, c],
          );
        return u.createElement(r.U, { specs: d });
      }
    },
  },
]);

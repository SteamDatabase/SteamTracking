/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6838],
  {
    25251: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Page: "ZUB8zp36DGzB2Ge1HGlBi",
        Content: "_1aZdz4QMkvBwHD48GvZNIn",
        NotesPagedSettings: "_1dBCPkyWYRX7FwOcOEDrOo",
        NotePage: "_2r0iBG84H79jitflfzloHL",
        PinnedView: "_3mIftPW9bArr_wJxHwxTnq",
        Toolbar: "A6mhRr1dqvr5OHl9MX6_3",
        NoteActions: "_3uGOyXFBdLEV_F6dICiSwx",
        NoteEditorArea: "_3WOF4kDR1RbjelZgS8Qd-H",
        EditorInput: "_3zWunJFZU6u89fIABN9Gkf",
        NewNoteButton: "_2J6kvK4A5CTbr_o4ZYqycZ",
        CloseWindowButton: "G0FghhaByLIrcEuYSV6qh",
      };
    },
    31643: (e) => {
      e.exports = {
        Hover: "_3tNcTScSfJlcy37nRZQjPq",
        Link: "ovQsFIS2bmQSO6q9lpMcl",
        LinkHelp: "_2Az4l-ByEoCD6T4yVffGuV",
      };
    },
    56836: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "_3lEt5gxDF4ACrtnP4U7Z-D",
        ToolbarRow: "_2H40REphoCtny5VfHm5Ad9",
        CommandButton: "_1-R1Ud0bImFcswoqa8FbU",
        Toggled: "_41y1pGJEo9TqrhjUqDK2h",
        Gap: "_2BPaPn42NspKTF-dGx6Il1",
        Spacer: "_2Zt31S-3IT7JYy5IswjnFf",
        ExpandButton: "_3454x5BD8OL9OyBzYOvsv8",
      };
    },
    7294: (e, t, n) => {
      "use strict";
      n.d(t, { Ec: () => l, lW: () => s, bU: () => i, AX: () => r });
      class o {
        constructor() {
          (this.type = 0), (this.text = "");
        }
        ConvertMalformedNodeToText() {
          3 == this.type
            ? (this.text = "[/" + this.text)
            : 2 == this.type && (this.text = "[" + this.text),
            (this.type = 1);
        }
      }
      class r {
        constructor(e, t) {
          (this.m_dictComponents = void 0),
            (this.m_dictComponents = e),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, n = !1) {
          const r = (function (e, t) {
            const n = [];
            let r = new o(),
              s = !1,
              a = !1,
              l = !1;
            for (let o = 0; o < e.length; o++) {
              let i = e[o];
              switch (r.type) {
                case 0:
                  "[" == i
                    ? ((r.type = 2), (a = !0))
                    : ((r.type = 1), "\\" == i && t ? (s = !s) : (r.text += i));
                  break;
                case 2:
                case 3:
                  if ("/" == i && a) (r.type = 3), (r.text = ""), (a = !1);
                  else if ("[" != i || s)
                    if ("]" != i || s)
                      "\\" == i && t
                        ? ((r.text += i), (s = !s), (a = !1))
                        : ((r.text += i), (s = !1), (a = !1));
                    else {
                      const e =
                          2 == r.type &&
                          "noparse" == r.text.toLocaleLowerCase(),
                        t =
                          3 == r.type &&
                          "noparse" == r.text.toLocaleLowerCase();
                      a || (l && !t)
                        ? (r.ConvertMalformedNodeToText(), (r.text += i))
                        : e
                          ? (l = !0)
                          : t && (l = !1),
                        (r = c(n, r)),
                        (a = !1);
                    }
                  else
                    r.ConvertMalformedNodeToText(), (r = c(n, r, 2)), (a = !0);
                  break;
                case 1:
                  "[" != i || s
                    ? "\\" == i && t
                      ? (s && (r.text += i), (s = !s))
                      : ((r.text += i), (s = !1))
                    : ((r = c(n, r, 2)), (a = !0));
              }
            }
            0 != r.type &&
              ((2 != r.type && 3 != r.type) || r.ConvertMalformedNodeToText(),
              n.push(r));
            return n;
          })(e, n);
          return this.Parse_BuildElements(r, t);
        }
        Parse_BuildElements(e, t) {
          let n = this.m_fnAccumulatorFactory(void 0),
            o = [],
            r = function () {
              return o.length < 1 ? void 0 : o[o.length - 1];
            },
            s = this.m_dictComponents,
            a = !1,
            l = !0,
            i = function (e, r, i) {
              if (
                e &&
                e.node.tag === r.text &&
                (null == s ? void 0 : s.get(e.node.tag))
              ) {
                const r = s.get(e.node.tag),
                  i = o.map((e) => e.node.tag),
                  c = { parentTags: i, tagname: e.node.tag, args: e.node.args },
                  d = t(r.Constructor, c, ...n.GetElements());
                (n = e.accumulator),
                  n.AppendNode(d),
                  (a = !!r.skipFollowingNewline),
                  (l = e.bWrapTextForCopying);
              } else if (e) {
                let t = e.accumulator;
                t.AppendText("[" + e.node.text + "]", !1),
                  n.GetElements().forEach((e) => t.AppendNode(e)),
                  t.AppendText("[/" + r.text + "]", !1),
                  (n = t),
                  (l = e.bWrapTextForCopying);
              }
            };
          for (
            e.forEach((e, t) => {
              var c, d, u;
              if (1 == e.type) {
                const t = a ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                n.AppendText(t, l), (a = !1);
              } else if (2 == e.type) {
                const t = null == s ? void 0 : s.get(e.tag);
                if (t) {
                  const d = r();
                  if (void 0 !== d) {
                    const t = null == s ? void 0 : s.get(d.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === d.node.tag &&
                      i(o.pop(), d.node);
                  }
                  o.push({ accumulator: n, node: e, bWrapTextForCopying: l }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (a = !!t.skipInternalNewline),
                    (l =
                      null !== (c = t.allowWrapTextForCopying) &&
                      void 0 !== c &&
                      c);
                } else n.AppendText("[" + e.text + "]", 0 == o.length);
              } else if (3 == e.type) {
                for (
                  ;
                  r() &&
                  r().node.tag !== e.text &&
                  (null == s ? void 0 : s.get(r().node.tag)) &&
                  (null === (d = null == s ? void 0 : s.get(r().node.tag)) ||
                  void 0 === d
                    ? void 0
                    : d.autocloses);

                ) {
                  const e = o.pop();
                  i(e, e.node);
                }
                if (
                  (null === (u = r()) || void 0 === u ? void 0 : u.node.tag) ==
                  e.text
                ) {
                  const t = o.pop();
                  i(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == o.length);
              }
            });
            o.length > 0;

          ) {
            let e = o.pop(),
              t = e.accumulator;
            t.AppendText("[" + e.node.text + "]", !1),
              n.GetElements().forEach((e) => t.AppendNode(e)),
              (n = t);
          }
          return n.GetElements();
        }
      }
      function s(e, t) {
        let n = "[" + e;
        (null == t ? void 0 : t[""]) && (n += `=${a(t[""])}`);
        for (const e in t)
          "" !== e &&
            (n += ` ${((o = e), o.replace(/(\\| |\])/g, "\\$1"))}=${a(t[e])}`);
        var o;
        return (n += "]"), n;
      }
      function a(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function l(e) {
        return `[/${e}]`;
      }
      function i(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function c(e, t, n = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("="),
            n = t.text.indexOf(" ");
          if ((-1 != n && (-1 == e || n < e) && (e = n), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            let n = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              let t = {},
                n = "",
                o = "",
                r = 0,
                s = 0;
              "=" == e[0] && (r = 2);
              let a = !1;
              for (s++; s < e.length; s++) {
                let l = e[s],
                  i = !0,
                  c = !1;
                switch (r) {
                  case 0:
                    if ("=" == l) return {};
                    if (" " == l) continue;
                    r = 1;
                    break;
                  case 1:
                    ("=" != l && " " != l) ||
                      a ||
                      (" " == l ? ((r = 0), (c = !0)) : (r = 2), (i = !1));
                    break;
                  case 2:
                    " " == l
                      ? ((r = 0), (i = !1), (c = !0))
                      : '"' == l
                        ? ((r = 4), (i = !1))
                        : (r = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == l && 4 != r && !a) ||
                      ('"' == l && 4 == r && !a)) &&
                      ((r = 0), (i = !1), (c = !0));
                }
                if (i)
                  if ("\\" != l || a)
                    if (((a = !1), 1 == r)) n += l;
                    else {
                      if (3 != r && 4 != r)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + r,
                        );
                      o += l;
                    }
                  else a = !0;
                c && ((t[n] = o), (n = ""), (o = ""));
              }
              0 != r && (t[n] = o);
              return t;
            })(n);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        let r = new o();
        return (r.type = n), r;
      }
    },
    42695: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => m });
      var o = n(85556),
        r = n(79545),
        s = n(14351),
        a = n(68785),
        l = n(46984),
        i = n(16997);
      const c = new a.sO("ReactUsageReporting").Debug,
        d = 1e3 * l._H.PerMinute;
      class u {
        constructor() {
          (this.m_transport = null),
            (this.m_mapRoutes = new Map()),
            (this.m_mapComponents = new Map()),
            (this.m_mapActions = new Map()),
            (this.m_reportCount = 0),
            (this.m_bInitialized = !1);
        }
        Init(e, t, n) {
          (this.m_bInitialized = !0),
            (this.m_strProduct = e),
            (this.m_strVersion = t),
            (this.m_transport = n),
            this.ScheduleSend();
        }
        ScheduleSend() {
          setTimeout(() => this.CheckSend(), d);
        }
        CheckSend() {
          this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend();
        }
        ReportInternal(e, t) {
          t.has(e) || t.set(e, 0),
            t.set(e, t.get(e) + 1),
            this.m_reportCount++,
            this.ShouldSendMetricsImmediately() && this.SendMetrics();
        }
        ReportRouteMatch(e) {
          c("Route match: " + e), this.ReportInternal(e, this.m_mapRoutes);
        }
        ReportTrackedComponent(e) {
          c("Tracked component: " + e),
            this.ReportInternal(e, this.m_mapComponents);
        }
        ReportTrackedAction(e) {
          c("User action: " + e), this.ReportInternal(e, this.m_mapActions);
        }
        ShouldSendMetricsImmediately() {
          return this.m_reportCount >= 100;
        }
        SendMetrics() {
          if (!this.m_bInitialized) return;
          const e = r.gA.Init(s.YH);
          e.Body().set_product(this.m_strProduct),
            e.Body().set_version(this.m_strVersion),
            this.m_mapRoutes.forEach((t, n) => {
              let o = new s.Be();
              o.set_route(n), o.set_count(t), e.Body().add_routes(o);
            }),
            this.m_mapComponents.forEach((t, n) => {
              let o = new s.Hy();
              o.set_component(n), o.set_count(t), e.Body().add_components(o);
            }),
            this.m_mapActions.forEach((t, n) => {
              let o = new s.Js();
              o.set_action(n), o.set_count(t), e.Body().add_actions(o);
            }),
            this.m_mapRoutes.clear(),
            this.m_mapComponents.clear(),
            this.m_mapActions.clear(),
            (this.m_reportCount = 0),
            s.TF.ReportReactUsage(this.m_transport, e);
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
      }
      (0, o.gn)([i.a], u.prototype, "CheckSend", null);
      const m = new u();
    },
    75460: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => bt });
      var o = n(47427),
        r = n(8285);
      const s = {
        List: () => "/notes/list",
        AppNotes: (e, t) => `/notes/app/${e}/${null != t ? t : ""}`,
        ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${null != t ? t : ""}`,
      };
      var a = n(28017),
        l = n(85556),
        i = n(42718);
      function c(e) {
        return e.trim();
      }
      function d(e) {
        return e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name };
      }
      const u = o.createContext({ mode: "page", store: null });
      function m(e) {
        const {
            mode: t,
            store: n,
            closePopup: r,
            bPinnedView: s,
            onClickURL: a,
            bSpellcheckEnabled: l = !0,
            setSpellcheckEnabled: i,
            children: c,
          } = e,
          d = o.useMemo(
            () => ({
              mode: t,
              store: n,
              closePopup: r,
              bPinnedView: s,
              onClickURL: a,
              bSpellcheckEnabled: l,
              setSpellcheckEnabled: i,
            }),
            [t, n, r, s, a, l, i],
          );
        return o.createElement(u.Provider, { value: d }, c);
      }
      function p() {
        return o.useContext(u).closePopup;
      }
      function g() {
        return o.useContext(u).store;
      }
      var h = n(31846);
      function f(e) {
        return "appid" in e
          ? ["GameNotes", "NotesByAppID", e.appid]
          : ["GameNotes", "NotesForShortcut", c(e.shortcut)];
      }
      function b(e) {
        const t = g();
        return (0, i.useQuery)(
          f(e),
          () =>
            (0, l.mG)(this, void 0, void 0, function* () {
              return (yield t.GetGameNotesList(e, !0)) || [];
            }),
          { enabled: !!e },
        );
      }
      function _(e, t) {
        const n = (0, i.useQueryClient)(),
          o = g(),
          r = e.id;
        return (0, i.useMutation)(
          () =>
            (0, l.mG)(this, void 0, void 0, function* () {
              return e.not_persisted ? r : yield o.DeleteGameNote(d(e), r);
            }),
          {
            onSuccess() {
              v(n, d(e), (e) => e.filter((e) => e.id != r)), t && t();
            },
          },
        );
      }
      function v(e, t, n) {
        e.getQueryData(f(t)) && e.setQueryData(f(t), n);
      }
      function E(e, t) {
        return o.useMemo(
          () =>
            t
              ? (function (e) {
                  return { shortcut: c(e) };
                })(t)
              : (function (e) {
                  return { appid: e };
                })(e),
          [e, t],
        );
      }
      var k = n(73799),
        T = n.n(k),
        C = n(79545),
        y = n(18015),
        x = n(40057),
        N = n(65255),
        w = n(77936);
      let B;
      const A = 864e5;
      function S(e) {
        return `appinfo_${e}_${N.De.LANGUAGE}`;
      }
      function M(e) {
        return Boolean(e && Date.now() - e.timeCached < A);
      }
      function D(e) {
        const t = (0, x.bY)(),
          n = (0, x.y$)();
        return (0, i.useQuery)(
          ["appinfo", e],
          () =>
            (0, l.mG)(this, void 0, void 0, function* () {
              return (function (e, t) {
                return (
                  B ||
                    (B = new (T())(
                      (n) =>
                        (0, l.mG)(this, void 0, void 0, function* () {
                          const o = new Map();
                          (yield Promise.all(n.map((e) => t.GetObject(S(e)))))
                            .filter(M)
                            .forEach(({ value: e }) => o.set(e.appid, e));
                          const r = n.slice().filter((e) => !o.has(e));
                          if (r.length) {
                            const n = C.gA.Init(y.Fi);
                            n.Body().set_language((0, w.jM)(N.De.LANGUAGE)),
                              n.Body().set_appids(r);
                            const s = yield y.AE.GetApps(e, n);
                            if (1 != s.GetEResult()) throw s.GetErrorMessage();
                            s.Body()
                              .toObject()
                              .apps.forEach((e) => {
                                t.StoreObject(S(e.appid), {
                                  timeCached: Date.now(),
                                  value: e,
                                }),
                                  o.set(e.appid, e);
                              });
                          }
                          return n.map((e) => o.get(e));
                        }),
                      { cache: !1 },
                    )),
                  B
                );
              })(t, n).load(e);
            }),
          { staleTime: A, enabled: !!e },
        ).data;
      }
      var F = n(46882);
      function O() {
        const { data: e, isLoading: t } = (function () {
          const e = g();
          return (0, i.useQuery)(["GameNotes", "GamesWithNotes"], () =>
            e.GetGamesWithNotes(),
          );
        })();
        return t
          ? o.createElement(F.V, { msDelayAppear: 300 })
          : o.createElement(
              "div",
              null,
              o.createElement(
                "h1",
                null,
                (0, h.Xx)("#UserGameNotes_NotesList"),
              ),
              o.createElement(
                "ul",
                null,
                e.map((e) => o.createElement(G, { key: e.appid, game: e })),
              ),
            );
      }
      function G(e) {
        const { game: t } = e,
          n = D(t.appid);
        return o.createElement(
          "li",
          null,
          o.createElement(
            a.rU,
            { to: s.AppNotes(t.appid) },
            null == n ? void 0 : n.name,
          ),
        );
      }
      var I = n(42695),
        L = n(1485),
        P = n(58538),
        R = n(50898),
        H = n(7294),
        U = n(23126),
        X = n(2761),
        $ = n(72869),
        j = n.n($),
        W = n(13129);
      function Z(e, t) {
        return () => [e, { class: t }, 0];
      }
      const V = {
          doc: { content: "block+" },
          text: { group: "inline" },
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: Z("p", (0, W.Z)("pm_paragraph", j().Paragraph)),
          },
          heading: {
            attrs: { level: { default: 1 } },
            content: "inline*",
            group: "block",
            defining: !0,
            parseDOM: [
              { tag: "h1", attrs: { level: 1 } },
              { tag: "h2", attrs: { level: 2 } },
              { tag: "h3", attrs: { level: 3 } },
              { tag: "h4", attrs: { level: 4 } },
              { tag: "h5", attrs: { level: 5 } },
            ],
            toDOM: (e) => [
              "h" + e.attrs.level,
              {
                class:
                  `BB_Header${e.attrs.level} ` + j()[`Header${e.attrs.level}`],
              },
              0,
            ],
          },
          image: {
            inline: !0,
            attrs: {
              src: {},
              alt: { default: null },
              title: { default: null },
            },
            group: "inline",
            draggable: !0,
            parseDOM: [
              {
                tag: "img[src]",
                getAttrs: (e) => ({
                  src: e.getAttribute("src"),
                  title: e.getAttribute("title"),
                  alt: e.getAttribute("alt"),
                }),
              },
            ],
            toDOM(e) {
              const { src: t, alt: n, title: o } = e.attrs;
              return ["img", { src: t, alt: n, title: o, class: j().Image }];
            },
          },
          hard_break: {
            inline: !0,
            group: "inline",
            selectable: !1,
            parseDOM: [{ tag: "br" }],
            toDOM: () => ["br"],
          },
          bullet_list: Object.assign(Object.assign({}, X.iI), {
            content: "list_item+",
            group: "block",
            toDOM: Z("ul", j().List),
          }),
          ordered_list: Object.assign(Object.assign({}, X.dq), {
            content: "list_item+",
            group: "block",
            toDOM: Z("ol", j().OrderedList),
          }),
          list_item: Object.assign(Object.assign({}, X.qb), {
            content: "paragraph block*",
            toDOM: Z("li", j().ListItem),
          }),
          code_block: {
            content: "inline*",
            marks: "",
            group: "block",
            code: !0,
            defining: !0,
            parseDOM: [{ tag: "pre", preserveWhitespace: "full" }],
            toDOM: () => [
              "pre",
              { class: j().CodeBlock },
              ["code", { class: j().Code }, 0],
            ],
          },
        },
        z = {
          strong: {
            parseDOM: [
              { tag: "strong" },
              {
                tag: "b",
                getAttrs: (e) => "normal" != e.style.fontWeight && null,
              },
              {
                style: "font-weight=400",
                clearMark: (e) => "strong" == e.type.name,
              },
              {
                style: "font-weight",
                getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null,
              },
            ],
            toDOM: Z("b", (0, W.Z)("BB_Bold", j().Bold)),
          },
          italic: {
            parseDOM: [
              { tag: "i" },
              { tag: "em" },
              { style: "font-style=italic" },
              {
                style: "font-style=normal",
                clearMark: (e) => "em" == e.type.name,
              },
            ],
            toDOM: Z("i", (0, W.Z)("BB_Italic", j().Italic)),
          },
          underline: {
            parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
            toDOM: Z("u", (0, W.Z)("BB_Underline", j().Underline)),
          },
          strike: {
            parseDOM: [{ style: "text-decoration=line-through" }],
            toDOM: Z("span", (0, W.Z)("BB_Strike", j().Strike)),
          },
          code: {
            parseDOM: [{ tag: "code" }],
            toDOM: Z("code", (0, W.Z)("BB_Code", j().Code)),
          },
          link: {
            attrs: { href: {}, title: { default: null } },
            inclusive: !1,
            parseDOM: [
              {
                tag: "a[href]",
                getAttrs: (e) => ({
                  href: e.getAttribute("href"),
                  title: e.getAttribute("title"),
                }),
              },
            ],
            toDOM(e) {
              let { href: t, title: n } = e.attrs;
              return ["a", { href: t, title: n }, 0];
            },
          },
        },
        K = new U.V_({ nodes: V, marks: z });
      function q(e) {
        return { tag: `h${e.level}` };
      }
      const Q = new Map([
        [
          "p",
          {
            Constructor: { node: K.nodes.paragraph },
            autocloses: !0,
            skipFollowingNewline: !0,
          },
        ],
        [
          "h1",
          {
            Constructor: {
              node: K.nodes.heading,
              BBArgsToAttrs: () => ({ level: 1 }),
              AttrsToBBArgs: q,
            },
            skipFollowingNewline: !0,
          },
        ],
        [
          "h2",
          {
            Constructor: {
              node: K.nodes.heading,
              BBArgsToAttrs: () => ({ level: 2 }),
              AttrsToBBArgs: q,
            },
            skipFollowingNewline: !0,
          },
        ],
        [
          "h3",
          {
            Constructor: {
              node: K.nodes.heading,
              BBArgsToAttrs: () => ({ level: 3 }),
              AttrsToBBArgs: q,
            },
            skipFollowingNewline: !0,
          },
        ],
        [
          "h4",
          {
            Constructor: {
              node: K.nodes.heading,
              BBArgsToAttrs: () => ({ level: 4 }),
              AttrsToBBArgs: q,
            },
            skipFollowingNewline: !0,
          },
        ],
        [
          "h5",
          {
            Constructor: {
              node: K.nodes.heading,
              BBArgsToAttrs: () => ({ level: 5 }),
              AttrsToBBArgs: q,
            },
            skipFollowingNewline: !0,
          },
        ],
        ["b", { Constructor: { mark: K.marks.strong } }],
        ["i", { Constructor: { mark: K.marks.italic } }],
        ["u", { Constructor: { mark: K.marks.underline } }],
        ["strike", { Constructor: { mark: K.marks.strike } }],
        [
          "url",
          {
            Constructor: {
              mark: K.marks.link,
              BBArgsToAttrs: (e) => ({ href: e[""] }),
              AttrsToBBArgs: (e) => ({ args: { "": e.href } }),
            },
          },
        ],
        [
          "list",
          {
            Constructor: { node: K.nodes.bullet_list },
            skipFollowingNewline: !0,
          },
        ],
        [
          "olist",
          {
            Constructor: { node: K.nodes.ordered_list },
            skipFollowingNewline: !0,
          },
        ],
        [
          "*",
          {
            Constructor: { node: K.nodes.list_item },
            skipFollowingNewline: !0,
            autocloses: !0,
          },
        ],
        [
          "code",
          {
            Constructor: { node: K.nodes.code_block },
            skipFollowingNewline: !0,
          },
        ],
        ["c", { Constructor: { mark: K.marks.code } }],
        [
          "img",
          {
            Constructor: {
              node: K.nodes.image,
              BBArgsToAttrs: (e) => ({ src: e.src }),
              AttrsToBBArgs: (e) => ({ args: { src: e.src } }),
            },
          },
        ],
      ]);
      class Y {
        constructor() {
          this.m_nodes = [];
        }
        AppendText(e, t) {
          let n = 0;
          for (let t = e.indexOf("\n", n); -1 !== t; t = e.indexOf("\n", n))
            n != t && this.m_nodes.push(K.text(e.substring(n, t))),
              this.m_nodes.push(K.nodes.hard_break.create()),
              (n = t + 1);
          n < e.length && this.m_nodes.push(K.text(e.substring(n)));
        }
        AppendNode(e) {
          Array.isArray(e) ? this.m_nodes.push(...e) : this.m_nodes.push(e);
        }
        GetElements() {
          return this.m_nodes;
        }
      }
      function J(e, t, ...n) {
        const o = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args) : void 0;
        return "node" in e
          ? e.node.create(o, n)
          : n.map((t) => t.mark([...t.marks, e.mark.create(o)]));
      }
      class ee extends H.AX {
        constructor(e) {
          super(e, () => new Y());
        }
        ParseBBCode(e) {
          const t = this.Parse(e, J, !0);
          return K.topNodeType.create(
            {},
            (function (e) {
              let t = [],
                n = [];
              for (const o of e)
                if (o.isText) n.push(o);
                else {
                  const e = o.type == K.nodes.hard_break;
                  n.length
                    ? (t.push(K.nodes.paragraph.create({}, n)),
                      (n = []),
                      e || t.push(o))
                    : e
                      ? t.push(K.nodes.paragraph.create())
                      : t.push(o);
                }
              return t;
            })(t),
          );
        }
      }
      var te = n(83999),
        ne = n(62210);
      function oe(e, t = Q) {
        const n = { mapMarks: new Map(), mapNodes: new Map() };
        return (
          t.forEach((e, t) => {
            "node" in e.Constructor
              ? n.mapNodes.set(e.Constructor.node, {
                  tag: t,
                  AttrsToBBArgs: e.Constructor.AttrsToBBArgs,
                })
              : n.mapMarks.set(e.Constructor.mark, {
                  tag: t,
                  AttrsToBBArgs: e.Constructor.AttrsToBBArgs,
                });
          }),
          re(n, e)
        );
      }
      function re(e, t) {
        let n = t.marks,
          o = "";
        const r = e.mapNodes.get(t.type),
          { tag: s, args: a } = ae(r, t.attrs);
        return (
          s && (o += (0, H.lW)(s, a)),
          t.content.forEach((t) => {
            ([o, n] = se(e, n, t.marks, o)),
              ([o, n] = (function (e, t, n, o) {
                let r;
                for (const s of n)
                  if (-1 === t.indexOf(s)) {
                    r || (r = t.slice());
                    const n = e.mapMarks.get(s.type);
                    r.push(s);
                    const { args: a, tag: l } = ae(n, s.attrs);
                    o += (0, H.lW)(l, a || {});
                  }
                return [o, null != r ? r : t];
              })(e, n, t.marks, o)),
              t.type.isText
                ? (o += (0, H.bU)(t.text))
                : t.type == K.nodes.hard_break
                  ? (o += "\n")
                  : (o += re(e, t));
          }),
          ([o] = se(e, n, [], o)),
          s && (o += (0, H.Ec)(s)),
          o
        );
      }
      function se(e, t, n, o) {
        const r = [];
        for (const e of t) -1 === n.indexOf(e) && r.push(e);
        if (!r.length) return [o, t];
        const s = t.slice();
        for (
          ;
          r.length && ((0, ne.X)(s.length, "no marks left to close"), s.length);

        ) {
          const t = s.pop(),
            n = e.mapMarks.get(t.type),
            { tag: a } = ae(n, t.attrs);
          (o += (0, H.Ec)(a)), te.Zf(r, t);
        }
        return [o, s];
      }
      function ae(e, t) {
        let n,
          o = {};
        return (
          e &&
            (e.AttrsToBBArgs && ({ tag: n, args: o } = e.AttrsToBBArgs(t)),
            n || (n = e.tag),
            o || (o = {})),
          { tag: n, args: o }
        );
      }
      var le = n(23612),
        ie = n(31458),
        ce = n(42287);
      function de(e) {
        const {
            visible: t = !0,
            className: n,
            keepMounted: r = !1,
            expandDirection: s = "height",
            msAnimationDuration: a = 250,
            children: l,
          } = e,
          {
            style: i,
            active: c,
            refDiv: d,
          } = (function (e, t = "height", n = 250) {
            const r = o.useRef(),
              s = o.useRef(!0),
              [a, l] = o.useState("idle"),
              [i, c] = o.useState({});
            o.useLayoutEffect(() => {
              s.current ? (s.current = !1) : l("start");
            }, [e]),
              o.useLayoutEffect(() => {
                const n = r.current,
                  o = "height" == t ? "scrollHeight" : "scrollWidth";
                if ("start" == a) {
                  const r = n[o];
                  c((n) =>
                    Object.assign(
                      Object.assign({ [t]: e ? "0px" : `${r}px` }, n),
                      { overflow: "hidden" },
                    ),
                  ),
                    l("active");
                } else if ("active" == a) {
                  n.scrollTop;
                  const r = n[o];
                  c({ overflow: "hidden", [t]: e ? `${r}px` : "0px" });
                  const s = () => {
                    ce.unstable_batchedUpdates(() => {
                      c({}), l("idle");
                    });
                  };
                  return (
                    n.addEventListener("transitionend", s),
                    () => {
                      n.removeEventListener("transitionend", s);
                    }
                  );
                }
              }, [a, e]);
            const d = Object.assign(Object.assign({}, i), {
              transition: `${t} ${n}ms`,
            });
            return { style: d, active: "idle" != a, refDiv: r };
          })(t, s, a);
        return t || c || r
          ? o.createElement("div", { className: n, ref: d, style: i }, l)
          : null;
      }
      var ue = n(26682);
      function me(e, t) {
        o.useEffect(() => {
          if (e && t && !e.isDestroyed)
            return (
              (function (e, t) {
                const n = e.state;
                if (!e.state.plugins.includes(t)) {
                  const o = [...e.state.plugins, t];
                  e.updateState(n.reconfigure({ plugins: o }));
                }
              })(e, t),
              () =>
                (function (e, t) {
                  if (!e.isDestroyed) {
                    const n = e.state,
                      o = n.plugins.filter((e) => e !== t);
                    e.updateState(n.reconfigure({ plugins: o }));
                  }
                })(e, t)
            );
        }, [e, t]);
      }
      function pe(e, t) {
        let { from: n, $from: o, to: r, empty: s } = e.selection;
        return s
          ? !!t.isInSet(e.storedMarks || o.marks())
          : e.doc.rangeHasMark(n, r, t);
      }
      function ge(e, t, n) {
        let { $from: o, to: r, node: s } = e.selection;
        return !s && r <= o.end() && (s = o.parent), !!s && s.hasMarkup(t, n);
      }
      function he(e, t, n = {}) {
        return new ue.VK(e, (e, o, r, s) => {
          const a = n instanceof Function ? n(o) : n,
            l = e.tr;
          if (o[1]) {
            const e = r + o[0].indexOf(o[1]),
              t = e + o[1].length;
            t < s && l.delete(t, s),
              e > r && l.delete(r, e),
              (s = r + o[1].length);
          }
          return l.addMark(r, s, t.create(a)), l.removeStoredMark(t), l;
        });
      }
      var fe = n(20417),
        be = n(56836);
      function _e(e) {
        const { children: t } = e,
          { callbacks: n, view: r } = Ne(),
          [s, a] = o.useState(() => pe(r.state, K.marks.link)),
          l = o.useCallback((e) => a(pe(e.state, K.marks.link)), []);
        (0, fe.Qg)(n, l);
        const [i, c, d] = (0, fe.X9)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            R.Yy,
            { active: i },
            o.createElement(ve, { active: i, closeModal: d, view: r }),
          ),
          o.createElement(
            L.zx,
            {
              className: (0, W.Z)(be.CommandButton, s && be.Toggled),
              onMouseDown: (e) => {
                e.preventDefault(), c();
              },
              title: (0, h.Xx)("#FormattingToolbar_InsertLink"),
            },
            t,
          ),
        );
      }
      const ve = o.memo(function (e) {
        const { active: t, closeModal: n, view: r } = e,
          [s, a] = o.useState(""),
          [l, i] = o.useState(""),
          c = o.useRef(),
          d = o.useRef();
        return (
          o.useLayoutEffect(() => {
            if (t) {
              let e = "";
              r.state.selection.empty ||
                (e = r.state.doc.cut(
                  r.state.selection.from,
                  r.state.selection.to,
                ).textContent),
                a(e),
                e.startsWith("http")
                  ? (i(e),
                    c.current.Focus(),
                    window.setTimeout(() => {
                      c.current.element.select();
                    }, 0))
                  : 0 == e.length
                    ? c.current.Focus()
                    : d.current.Focus();
            }
          }, [t, r]),
          o.createElement(
            R.uH,
            {
              onOK: () => {
                r.dispatch(
                  r.state.tr.replaceRangeWith(
                    r.state.selection.from,
                    r.state.selection.to,
                    K.text(s || l, [K.marks.link.create({ href: l })]),
                  ),
                ),
                  r.focus(),
                  n();
              },
              closeModal: n,
              strTitle: (0, h.Xx)("#FormattingToolbar_InsertLink"),
              strOKButtonText: (0, h.Xx)("#FormattingToolbar_InsertLink"),
              bOKDisabled: 0 == l.length,
            },
            o.createElement(L.II, {
              ref: c,
              value: s,
              onChange: (e) => a(e.currentTarget.value),
              label: (0, h.Xx)("#FormattingToolbar_LinkText"),
            }),
            o.createElement(L.II, {
              ref: d,
              value: l,
              onChange: (e) => i(e.currentTarget.value),
              label: (0, h.Xx)("#FormattingToolbar_LinkAddress"),
            }),
          )
        );
      });
      var Ee = n(45492),
        ke = n(59728),
        Te = n(56617),
        Ce = n(91618);
      function ye(e) {
        const {
            view: t,
            refUpdateToolbar: n,
            className: r,
            bSpellcheckEnabled: s,
            setSpellcheckEnabled: a,
          } = e,
          [l, i] = (0, Te.i4)("FormattingToolbar_Expanded", !1),
          [c] = o.useState(() => new Ee.pB());
        o.useEffect(
          () => (
            (0, fe.k$)(n, () => c.Dispatch(t)), () => (0, fe.k$)(n, void 0)
          ),
          [c, t, n],
        );
        const d = o.useMemo(() => ({ callbacks: c, view: t }), [c, t]);
        return t
          ? o.createElement(
              xe.Provider,
              { value: d },
              o.createElement(
                "div",
                { className: (0, W.Z)(be.Toolbar, r) },
                o.createElement(
                  we,
                  null,
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Undo",
                      direction: "bottom",
                    },
                    o.createElement(
                      Se,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Undo"),
                        command: ie.Yw,
                        fnEnabledCheck: Fe,
                      },
                      o.createElement(P.DeA, null),
                    ),
                  ),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Redo",
                      direction: "bottom",
                    },
                    o.createElement(
                      Se,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Redo"),
                        command: ie.KX,
                        fnEnabledCheck: Oe,
                      },
                      o.createElement(P.Jwt, null),
                    ),
                  ),
                  o.createElement("div", { className: be.Gap }),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Bold",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ae,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Bold"),
                        mark: K.marks.strong,
                      },
                      o.createElement(P.DUs, null),
                    ),
                  ),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Italic",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ae,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Italic"),
                        mark: K.marks.italic,
                      },
                      o.createElement(P.tzG, null),
                    ),
                  ),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Underline",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ae,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Underline"),
                        mark: K.marks.underline,
                      },
                      o.createElement(P.nC9, null),
                    ),
                  ),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Strike",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ae,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_Strike"),
                        mark: K.marks.strike,
                      },
                      o.createElement(P.z$U, null),
                    ),
                  ),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_InlineCode",
                      direction: "bottom",
                    },
                    o.createElement(
                      Ae,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_InlineCode"),
                        mark: K.marks.code,
                      },
                      o.createElement(P.l2k, null),
                    ),
                  ),
                  o.createElement("div", { className: be.Spacer }),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_ExpandOptions",
                      direction: "bottom",
                    },
                    o.createElement(
                      L.zx,
                      {
                        className: (0, W.Z)(
                          be.CommandButton,
                          be.ExpandButton,
                          l && be.Toggled,
                        ),
                        onClick: () => i(!l),
                      },
                      o.createElement(P.Tt3, null),
                    ),
                  ),
                ),
                o.createElement(
                  we,
                  { visible: l },
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_Paragraph",
                      direction: "bottom",
                    },
                    o.createElement(
                      Be,
                      {
                        nodeType: K.nodes.paragraph,
                        title: (0, h.Xx)("#FormattingToolbar_Paragraph"),
                      },
                      o.createElement(P.Dos, null),
                    ),
                  ),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel1",
                      direction: "bottom",
                    },
                    o.createElement(
                      Be,
                      {
                        nodeType: K.nodes.heading,
                        attrs: { level: 1 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 1),
                      },
                      o.createElement(P.geY, null),
                    ),
                  ),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel2",
                      direction: "bottom",
                    },
                    o.createElement(
                      Be,
                      {
                        nodeType: K.nodes.heading,
                        attrs: { level: 2 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 2),
                      },
                      o.createElement(P.y3S, null),
                    ),
                  ),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel3",
                      direction: "bottom",
                    },
                    o.createElement(
                      Be,
                      {
                        nodeType: K.nodes.heading,
                        attrs: { level: 3 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 3),
                      },
                      o.createElement(P.Zhu, null),
                    ),
                  ),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel4",
                      direction: "bottom",
                    },
                    o.createElement(
                      Be,
                      {
                        nodeType: K.nodes.heading,
                        attrs: { level: 4 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 4),
                      },
                      o.createElement(P.P2P, null),
                    ),
                  ),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_HeadingLevel5",
                      direction: "bottom",
                    },
                    o.createElement(
                      Be,
                      {
                        nodeType: K.nodes.heading,
                        attrs: { level: 5 },
                        title: (0, h.Xx)("#FormattingToolbar_HeadingLevelN", 5),
                      },
                      o.createElement(P.Lb, null),
                    ),
                  ),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_CodeBlock",
                      direction: "bottom",
                    },
                    o.createElement(
                      Be,
                      {
                        nodeType: K.nodes.code_block,
                        title: (0, h.Xx)("#FormattingToolbar_CodeBlock"),
                      },
                      o.createElement(P.N4L, null),
                    ),
                  ),
                  o.createElement("div", { className: be.Gap }),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_BulletedList",
                      direction: "bottom",
                    },
                    o.createElement(
                      Me,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_BulletedList"),
                        command: (0, X.KI)(K.nodes.bullet_list),
                      },
                      o.createElement(P.RAD, null),
                    ),
                  ),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_IndentList",
                      direction: "bottom",
                    },
                    o.createElement(
                      Me,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_IndentList"),
                        command: (0, X.IB)(K.nodes.list_item),
                      },
                      o.createElement(P.FYd, null),
                    ),
                  ),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_OutdentList",
                      direction: "bottom",
                    },
                    o.createElement(
                      Me,
                      {
                        title: (0, h.Xx)("#FormattingToolbar_OutdentList"),
                        command: (0, X.bw)(K.nodes.list_item),
                      },
                      o.createElement(P.LcB, null),
                    ),
                  ),
                  o.createElement("div", { className: be.Gap }),
                  o.createElement(
                    ke.HP,
                    {
                      toolTipContent: "#FormattingToolbar_InsertLink",
                      direction: "bottom",
                    },
                    o.createElement(_e, null, o.createElement(P.hhG, null)),
                  ),
                  o.createElement("div", { className: be.Spacer }),
                  a &&
                    o.createElement(
                      ke.HP,
                      {
                        toolTipContent: s
                          ? "#FormattingToolbar_DisableSpellcheck"
                          : "#FormattingToolbar_EnableSpellcheck",
                        direction: "bottom",
                      },
                      o.createElement(
                        De,
                        { toggled: s, onClick: () => a(!s) },
                        o.createElement(P.cSC, null),
                      ),
                    ),
                ),
              ),
            )
          : null;
      }
      const xe = o.createContext(void 0),
        Ne = () => o.useContext(xe);
      function we(e) {
        return o.createElement(
          de,
          { visible: e.visible },
          o.createElement(
            Ce.s,
            { className: (0, W.Z)(be.ToolbarRow), "flow-children": "row" },
            e.children,
          ),
        );
      }
      function Be(e) {
        const { nodeType: t, title: n, attrs: r, children: s } = e,
          { callbacks: a, view: l } = Ne(),
          [i, c] = o.useState(() => ge(l.state, t, r)),
          d = o.useCallback((e) => c(ge(e.state, t, r)), [t, r]);
        (0, fe.Qg)(a, d);
        const u = o.useMemo(() => (0, le.uJ)(t, r), [r, t]);
        return o.createElement(Me, {
          command: u,
          title: n,
          toggled: i,
          children: s,
        });
      }
      function Ae(e) {
        const { mark: t, title: n, children: r } = e,
          { callbacks: s, view: a } = Ne(),
          [l, i] = o.useState(() => pe(a.state, t)),
          c = o.useCallback((e) => i(pe(e.state, t)), [t]);
        (0, fe.Qg)(s, c);
        const d = o.useMemo(() => (0, le.w9)(t), [t]);
        return o.createElement(Me, {
          command: d,
          title: n,
          toggled: l,
          children: r,
        });
      }
      function Se(e) {
        const { fnEnabledCheck: t } = e,
          n = (0, l._T)(e, ["fnEnabledCheck"]),
          { callbacks: r, view: s } = Ne(),
          [a, i] = o.useState(() => t(s)),
          c = o.useCallback((e) => i(t(e)), [t]);
        return (
          (0, fe.Qg)(r, c),
          o.createElement(Me, Object.assign({}, n, { disabled: !a }))
        );
      }
      function Me(e) {
        const {
            command: t,
            toggled: n,
            title: r,
            disabled: s,
            children: a,
          } = e,
          { view: l } = Ne();
        return o.createElement(
          L.zx,
          {
            className: (0, W.Z)(be.CommandButton, n && be.Toggled),
            title: r,
            onMouseDown: (e) => {
              e.preventDefault(), t(l.state, l.dispatch, l);
            },
            disabled: !0 === s,
            focusable: !s,
          },
          a,
        );
      }
      function De(e) {
        const {
          onClick: t,
          toggled: n,
          title: r,
          disabled: s,
          children: a,
        } = e;
        return o.createElement(
          L.zx,
          {
            className: (0, W.Z)(be.CommandButton, n && be.Toggled),
            title: r,
            onMouseDown: (e) => {
              e.preventDefault(), t();
            },
            disabled: !0 === s,
          },
          a,
        );
      }
      function Fe(e) {
        return (0, ie.of)(e.state) > 0;
      }
      function Oe(e) {
        return (0, ie.AH)(e.state) > 0;
      }
      var Ge = n(62209),
        Ie = n(4005),
        Le = n(31934),
        Pe = n(35643),
        Re = n(50423),
        He = n(31643);
      function Ue(e) {
        const { view: t } = e,
          [n, r] = o.useState(),
          [s, a] = o.useState(),
          [l, i] = o.useState(),
          c = o.useCallback((e, t) => {
            const n = t.target;
            if ((0, Re.GB)(n) && "A" == n.nodeName) {
              const e = n.getBoundingClientRect();
              r(e.left + e.width / 2), a(e.bottom + 2), i(n);
            } else i(void 0);
            return !1;
          }, []),
          d = o.useCallback((e, t) => (i(void 0), !1), []);
        if (
          (me(
            t,
            o.useMemo(
              () =>
                new Ie.Sy({
                  props: { handleDOMEvents: { mouseover: c, mouseleave: d } },
                }),
              [c, d],
            ),
          ),
          !l)
        )
          return null;
        const u = l.getAttribute("href");
        return o.createElement(
          Xe,
          { top: s, left: n },
          o.createElement("div", { className: He.Link }, u),
          o.createElement(
            "div",
            { className: He.LinkHelp },
            (0, h.Xx)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function Xe(e) {
        const { top: t, left: n, children: r } = e,
          [s, a] = o.useState(0),
          l = o.useRef();
        o.useLayoutEffect(() => {
          a(l.current.getBoundingClientRect().width);
        }, [t, n, r]);
        const i = { top: `${t}px`, left: `${Math.max(n - s / 2, 12)}px` };
        return o.createElement(
          "div",
          { className: He.Hover, style: i, ref: l },
          r,
        );
      }
      const $e = (0, le.QF)(
          le.uo,
          (e, t) => (
            t &&
              t(
                e.tr
                  .replaceSelectionWith(K.nodes.hard_break.create())
                  .scrollIntoView(),
              ),
            !0
          ),
        ),
        je = (0, Ge.h)({
          "Mod-z": ie.Yw,
          "Mod-y": ie.KX,
          Backspace: ue.dU,
          "Mod-Enter": $e,
          "Shift-Enter": $e,
          "Mod-b": (0, le.w9)(K.marks.strong),
          "Mod-i": (0, le.w9)(K.marks.italic),
          Enter: (0, X.s6)(K.nodes.list_item),
          "Mod-[": (0, X.IB)(K.nodes.list_item),
          "Mod-]": (0, X.bw)(K.nodes.list_item),
          "Shift-Ctrl-1": (0, le.uJ)(K.nodes.heading, { level: 1 }),
          "Shift-Ctrl-2": (0, le.uJ)(K.nodes.heading, { level: 2 }),
          "Shift-Ctrl-3": (0, le.uJ)(K.nodes.heading, { level: 3 }),
          "Shift-Ctrl-0": (0, le.uJ)(K.nodes.paragraph),
        });
      var We = n(14609),
        Ze = n(13499),
        Ve = n(80878);
      function ze(e) {
        const { view: t, uploadImage: n } = e;
        return (
          me(
            t,
            new Ie.Sy({
              props: {
                handlePaste: (e, t, o) => {
                  const r = [];
                  o.content.descendants((e) => {
                    "image" === e.type.name &&
                      e.attrs.src.startsWith("data:image") &&
                      r.push(e.attrs.src);
                  }),
                    r.length > 0 &&
                      setTimeout(() => {
                        !(function (e, t, n) {
                          (0, l.mG)(this, void 0, void 0, function* () {
                            for (const o of e) {
                              const e = yield fetch(o),
                                r = yield e.blob(),
                                s = (0, Ve.L4)(yield r.arrayBuffer());
                              Ke(
                                o,
                                yield n(e.headers.get("Content-Type"), s),
                                t,
                              );
                            }
                          });
                        })(r, e, n);
                      }, 100);
                },
              },
            }),
          ),
          null
        );
      }
      function Ke(e, t, n) {
        n.state.doc.descendants((o, r) => {
          if ("image" === o.type.name && o.attrs.src === e) {
            const e = n.state.tr.setNodeAttribute(r, "src", t);
            n.dispatch(e);
          }
        });
      }
      const qe =
        n.p +
        "images/applications/community/image_error.svg?v=valveisgoodatcaching";
      var Qe = n(13974),
        Ye = n(37563);
      function Je(e) {
        const {
            bbcode: t,
            className: n,
            onUpdate: r,
            refView: s,
            onClickURL: a,
            bSpellcheckEnabled: l = !0,
            panelProps: i,
          } = e,
          c = o.useRef();
        c.current = r;
        const d = (0, Ye.qt)(),
          [u, m] = o.useState(),
          p = o.useRef(),
          g = o.useRef();
        g.current = a || et;
        const f = o.useCallback((e) => {
          var t, n;
          if (!e)
            return void (
              null === (t = p.current) ||
              void 0 === t ||
              t.destroy()
            );
          const o = p.current;
          o && o.destroy(),
            (p.current = new Le.tk(e, {
              state:
                null !== (n = null == o ? void 0 : o.state) && void 0 !== n
                  ? n
                  : Ie.yy.create({ schema: K }),
              handleClickOn: (...e) =>
                (function (e, t, n, o, r, s, a) {
                  if (a && (s.ctrlKey || 1 == s.button)) {
                    const t = o
                      .resolve(n - r)
                      .marks()
                      .find((e) => e.type == K.marks.link);
                    if (t)
                      return e(t.attrs.href, s.view), s.preventDefault(), !0;
                  }
                  return !1;
                })(g.current, ...e),
              clipboardTextParser: nt,
              transformPasted: rt,
            })),
            m(p.current),
            o || p.current.focus();
        }, []);
        o.useLayoutEffect(() => {
          const e = (function (e, t = Q) {
            return new ee(t).ParseBBCode(e);
          })(t);
          p.current.updateState(
            (function (e, t) {
              const n = new Ie.Sy({ view: (e) => ({ update: t }) });
              return Ie.yy.create({
                schema: K,
                doc: e,
                plugins: [(0, ie.m8)(), je, (0, Ge.h)(le.YR), n, tt()],
              });
            })(e, (...e) => c.current && c.current(...e)),
          );
        }, [t]),
          (0, fe.LY)(s, u);
        const b = o.useRef(),
          _ = o.useCallback(
            (e) => {
              (0, Pe.LP)(e, d.IN_VR);
            },
            [d.IN_VR],
          ),
          v = o.useCallback(() => {}, []),
          E = (0, Pe.CJ)({ onTextEntered: _, onKeyboardNavOut: v }, () => {
            var e;
            return null === (e = b.current) || void 0 === e
              ? void 0
              : e.ownerDocument.defaultView;
          }),
          k = o.useCallback(() => {
            var e, t;
            if (
              (E.ShowVirtualKeyboard(),
              !(null === (e = p.current) || void 0 === e
                ? void 0
                : e.hasFocus()))
            ) {
              null === (t = p.current) || void 0 === t || t.focus();
              let e = p.current.dom.childNodes;
              for (let t = 0; t < e.length; ++t) {
                let n = e[t],
                  o = n.offsetTop;
                if (void 0 !== o && o >= b.current.scrollTop) {
                  let e = n.getBoundingClientRect(),
                    t = { left: e.left, top: e.top },
                    o = p.current.posAtCoords(t);
                  if (null == o ? void 0 : o.pos) {
                    let e = p.current.state.doc.resolve(o.pos);
                    p.current.dispatch(
                      p.current.state.tr.setSelection(Ie.Bs.near(e)),
                    );
                  }
                  break;
                }
              }
            }
          }, [E]),
          T = (0, fe.BE)(b, f),
          C = o.useCallback((e) => e.currentTarget == e.target, []),
          y = (0, Qe.pj)(b, null, null, C);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            Ce.s,
            Object.assign(
              {
                key: `editordiv_${l}`,
                className: (0, W.Z)(n, be.Container),
                ref: T,
                spellCheck: l,
                focusable: !0,
                onActivate: k,
                onOKActionDescription: (0, h.Xx)("#UserGameNotes_Edit"),
                onGamepadDirection: y,
              },
              i,
            ),
          ),
          o.createElement(Ue, { view: p.current }),
          e.uploadImage &&
            o.createElement(ze, { view: u, uploadImage: e.uploadImage }),
        );
      }
      function et(e, t) {
        (0, We.b8)(t, e);
      }
      function tt() {
        return (0, ue.Hw)({
          rules: [
            (0, ue.S0)(
              /^(\d+)\.\s$/,
              K.nodes.ordered_list,
              (e) => ({ order: parseInt(e[1]) }),
              (e, t) => t.childCount + t.attrs.order == parseInt(e[1]),
            ),
            (0, ue.S0)(/^\s*([-+*])\s$/, K.nodes.bullet_list),
            he(/\*([^*]+)\*/, K.marks.strong),
            he(/_([^_]+)_/, K.marks.italic),
            he(/~([^~]+)~/, K.marks.strike),
            he(/`([^`]+)`/, K.marks.code),
            (0, ue.zK)(/^```$/, K.nodes.code_block),
            (0, ue.zK)(/^(#{1,5})\s$/, K.nodes.heading, (e) => ({
              level: e[1].length,
            })),
          ],
        });
      }
      function nt(e, t, n, o) {
        let r,
          s = [];
        for (; (r = e.match(Ze.H7)); )
          r.index > 0 && s.push(K.text(e.substring(0, r.index))),
            s.push(
              K.text(r[0], [K.marks.link.create({ href: (0, Ze.Pm)(r[0]) })]),
            ),
            (e = e.substring(r.index + r[0].length));
        return (
          e.length && s.push(K.text(e)),
          new U.p2(U.HY.from(s), t.start(), t.end())
        );
      }
      const ot = 52428800;
      function rt(e, t) {
        let n = !1;
        if (
          (e.content.descendants((e, t) => {
            "image" === e.type.name && e.attrs.src.length > ot && (n = !0);
          }),
          n)
        ) {
          let e = [
            K.nodes.image.create({
              src: qe,
              title: (0, h.Xx)("#UserGameNotes_ImageTooLarge"),
            }),
          ];
          return new U.p2(U.HY.from(e), 0, 0);
        }
        return e;
      }
      var st = n(25251);
      const at = 15;
      function lt(e) {
        const { note: t } = e,
          [n, r] = o.useState(!1),
          [s, a] = o.useState(),
          c = o.useRef(),
          m = o.useRef(),
          f = o.useRef(t.content),
          b = o.useRef(!1),
          E = o.useContext(u).onClickURL,
          k =
            null === (T = o.useContext(u).bSpellcheckEnabled) ||
            void 0 === T ||
            T;
        var T;
        const C = o.useContext(u).setSpellcheckEnabled,
          y = (function (e) {
            const t = g();
            return (n, o) =>
              (0, l.mG)(this, void 0, void 0, function* () {
                const r = new Uint8Array(o),
                  s = yield t.UploadImage(`notes_${e}_images/`, n, r);
                return Promise.resolve("/gamenotes/" + s);
              });
          })(t.appid),
          x = (0, Ye.id)();
        f.current == t.content || b.current || (f.current = t.content);
        const N = f.current,
          w = (function () {
            const e = (0, i.useQueryClient)(),
              t = g();
            return (0, i.useMutation)(
              (e) => t.SaveGameNote(e.note, e.title, e.bbcode),
              {
                onMutate(t) {
                  const n = Object.assign(Object.assign({}, t.note), {
                    title: t.title,
                    content: t.bbcode,
                  });
                  return (
                    v(e, d(t.note), (e) =>
                      e.map((e) => (e.id == n.id ? n : e)),
                    ),
                    console.log(n),
                    n
                  );
                },
                onSuccess(t, n, o) {
                  console.log(o, t),
                    v(e, d(n.note), (e) =>
                      e.map((e) =>
                        e.id === o.id
                          ? Object.assign(Object.assign({}, e), {
                              id: t,
                              not_persisted: !1,
                            })
                          : e,
                      ),
                    );
                },
              },
            );
          })(),
          B = o.useCallback((e, t) => {
            c.current && c.current(),
              t.doc &&
                t.doc != e.state.doc &&
                (b.current ||
                  ((b.current = !0),
                  I.q.ReportTrackedAction("/GameNotes/NoteModified")),
                (m.current = () => ({
                  title: ut(e.state.doc),
                  bbcode: oe(e.state.doc),
                })),
                r(!0));
          }, []);
        o.useEffect(() => {
          if (!n) return;
          let e = m.current;
          const o = () => {
              if (e) {
                const { title: n, bbcode: o } = e();
                (t.not_persisted && !(null == o ? void 0 : o.length)) ||
                  w.mutate({ note: t, title: n, bbcode: o }),
                  r(!1);
              }
              (e = void 0), (m.current = void 0);
            },
            s = window.setTimeout(o, 1e3 * at);
          return () => {
            window.clearTimeout(s), o();
          };
        }, [w, n, t]);
        const A = p(),
          S = _(t, A),
          M = {
            onSecondaryButton: () => S.mutate(),
            onSecondaryActionDescription: (0, h.Xx)(
              "#UserGameNotes_DeleteNote",
            ),
          };
        return o.createElement(
          "div",
          { className: st.NoteEditorArea },
          !x &&
            o.createElement(ye, {
              view: s,
              refUpdateToolbar: c,
              className: st.Toolbar,
              bSpellcheckEnabled: k,
              setSpellcheckEnabled: C,
            }),
          o.createElement(Je, {
            className: st.EditorInput,
            bbcode: N,
            onUpdate: B,
            refView: a,
            onClickURL: E,
            bSpellcheckEnabled: k,
            uploadImage: y,
            panelProps: M,
          }),
          !x && o.createElement(it, { note: t, bDirty: n }),
        );
      }
      function it(e) {
        const { note: t, bDirty: n } = e,
          [r, s, a] = (0, fe.X9)(!1),
          l = "single" == o.useContext(u).mode,
          i = p(),
          c = _(t, i),
          d = o.useCallback(() => {
            !n && t.not_persisted ? c.mutate() : s();
          }, [n, t, c, s]);
        return o.createElement(
          "div",
          { className: st.NoteActions },
          r && o.createElement(dt, { note: t, closeModal: a, deleteNote: c }),
          o.createElement(
            ke.HP,
            { toolTipContent: "#UserGameNotes_DeleteNote", direction: "top" },
            o.createElement(L.zx, { onClick: d }, o.createElement(P.rFk, null)),
          ),
          l && o.createElement(ct, { bDirty: n }),
        );
      }
      function ct(e) {
        const { bDirty: t } = e,
          n = p();
        return t
          ? o.createElement(
              L.KM,
              { onClick: () => n(), className: st.CloseWindowButton },
              (0, h.Xx)("#Button_SaveAndClose"),
            )
          : o.createElement(
              L.zx,
              { onClick: () => n(), className: st.CloseWindowButton },
              (0, h.Xx)("#Button_Close"),
            );
      }
      function dt(e) {
        const { note: t, closeModal: n, deleteNote: r } = e;
        return o.createElement(
          R.Yy,
          { active: !0 },
          o.createElement(R.uH, {
            strTitle: (0, h.Xx)("#UserGameNotes_DeleteNote"),
            strDescription: (0, h.Xx)("#UserGameNotes_PromptDelete"),
            onOK: () => r.mutate(),
            bOKDisabled: r.isLoading,
            strOKButtonText: (0, h.Xx)("#Button_Delete"),
            closeModal: n,
          }),
        );
      }
      function ut(e) {
        let t = "";
        for (let n = 0; n < e.content.childCount; n++) {
          const o = e.content.child(n);
          if (o.isText) t += o.text;
          else {
            if (((t = t.trim()), t.length > 4)) return t;
            if (((t = ut(o)), t.length > 4)) return t;
          }
        }
        return t.trim();
      }
      function mt() {
        const e = (0, r.$B)(),
          t = E(
            "appid" in e.params && Number(e.params.appid),
            "shortcut_name" in e.params && e.params.shortcut_name,
          );
        let n = e.params.noteid;
        const s = (0, r.k6)(),
          a = (function (e) {
            const t = (0, i.useQueryClient)(),
              n = g();
            return o.useCallback(() => {
              const o = (0, h.Xx)("#UserGameNotes_UntitledNote_Title"),
                r = n.NewNote(e, o);
              return v(t, e, (e) => [...e, r]), r.id;
            }, [t, n, e]);
          })(t),
          { data: l, isLoading: c } = b(t);
        let d;
        l && n && (d = l.find((e) => e.id === n)),
          o.useLayoutEffect(() => {
            !l ||
              (n && l.find((e) => e.id === n)) ||
              (l.length > 0 && l[0].id ? gt(s, t, l[0].id) : gt(s, t, a()));
          }, [s, t, n, l, a]);
        const u = o.createElement(
          ke.HP,
          { toolTipContent: "#UserGameNotes_NewNote", direction: "top" },
          o.createElement(
            L.zx,
            {
              className: st.NewNoteButton,
              onClick: () => {
                const e = a();
                gt(s, t, e);
              },
            },
            o.createElement(P.ex9, null),
          ),
        );
        return l
          ? o.createElement(pt, {
              noteParent: t,
              notes: l,
              activeNoteID: null == d ? void 0 : d.id,
              actions: u,
            })
          : null;
      }
      function pt(e) {
        const { noteParent: t, notes: n, activeNoteID: s, actions: a } = e,
          [l, i] = (0, Te.i4)("NotesListCollapsed", !1),
          c = o.useContext(u).bPinnedView,
          d = (0, Ye.id)(),
          m = n.map((e) => {
            var t;
            return {
              title:
                (null === (t = e.title) || void 0 === t ? void 0 : t.length) > 0
                  ? e.title
                  : (0, h.Xx)("#UserGameNotes_Untitled"),
              identifier: e.id,
              content: o.createElement(lt, { note: e }),
              pageClassName: st.NotePage,
              hideTitle: !0,
            };
          }),
          p = (0, r.k6)(),
          g = o.useCallback((e) => gt(p, t, e), [p, t]);
        return o.createElement(L.TI, {
          title: (0, h.Xx)("#UserGameNotes_NotesList"),
          pages: m,
          className: (0, W.Z)(st.NotesPagedSettings, c && st.PinnedView),
          page: s,
          onPageRequested: g,
          bottomControls: a,
          hideList: l,
          toggleHideList: c || d ? void 0 : () => i(!l),
        });
      }
      function gt(e, t, n) {
        let o;
        (o =
          "appid" in t
            ? s.AppNotes(t.appid, n)
            : s.ShortcutNotes(t.shortcut, n)),
          e.replace(o, e.location.state);
      }
      var ht = n(61578);
      class ft {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        GetGamesWithNotes() {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const e = C.gA.Init(ht.SX);
            return (yield ht.Rr.GetGamesWithNotes(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            ))
              .Body()
              .toObject().games_with_notes;
          });
        }
        GetGameNotesList(e, t) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const n = C.gA.Init(ht.DI);
            this.SetParentOnRequest(n, e), n.Body().set_include_content(t);
            const o = yield ht.Rr.GetNotesForGame(
              this.m_SteamInterface.GetServiceTransport(),
              n,
            );
            return o.Body().notes().length
              ? o.Body().toObject().notes
              : [this.NewNote(e, "New Note")];
          });
        }
        SaveGameNote(e, t, n) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const o = C.gA.Init(ht.ge);
            e.not_persisted
              ? o.Body().set_create_new(!0)
              : o.Body().set_note_id(e.id),
              e.appid
                ? o.Body().set_appid(e.appid)
                : o.Body().set_shortcut_name(e.shortcut_name),
              o.Body().set_title(t),
              o.Body().set_content(n);
            const r = yield ht.Rr.SaveNote(
              this.m_SteamInterface.GetServiceTransport(),
              o,
            );
            if (!r.BSuccess()) throw r.GetErrorMessage();
            return r.Body().note_id();
          });
        }
        DeleteGameNote(e, t) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const n = C.gA.Init(ht.$$);
            this.SetParentOnRequest(n, e), n.Body().set_note_id(t);
            const o = yield ht.Rr.DeleteNote(
              this.m_SteamInterface.GetServiceTransport(),
              n,
            );
            if (!o.BSuccess()) throw o.GetErrorMessage();
            return t;
          });
        }
        SyncNotes() {
          return (0, l.mG)(this, void 0, void 0, function* () {});
        }
        SetParentOnRequest(e, t) {
          "appid" in t
            ? e.Body().set_appid(t.appid)
            : e.Body().set_shortcut_name(t.shortcut);
        }
        NewNote(e, t) {
          let n = {};
          return (
            "appid" in e ? (n.appid = e.appid) : (n.shortcut_name = e.shortcut),
            Object.assign(
              Object.assign({ id: "temp_" + ft.sm_lastNoteID++ }, n),
              {
                ordinal: 0,
                time_created: Date.now() / 1e3,
                time_modified: Date.now() / 1e3,
                title: t,
                content: "",
                not_persisted: !0,
              },
            )
          );
        }
        UploadImage(e, t, n) {
          return Promise.reject("NYI");
        }
      }
      function bt(e) {
        const t = (0, x.lS)(),
          [n] = o.useState(() => new ft(t));
        return o.createElement(
          m,
          { mode: "page", store: n },
          o.createElement(
            r.rs,
            null,
            o.createElement(r.AW, { path: s.List() }, o.createElement(O, null)),
            o.createElement(
              r.AW,
              { path: s.AppNotes(":appid", ":noteid?") },
              o.createElement(mt, null),
            ),
            o.createElement(
              r.AW,
              null,
              o.createElement(r.l_, { to: `${s.List()}` }),
            ),
          ),
        );
      }
      ft.sm_lastNoteID = 0;
    },
  },
]);

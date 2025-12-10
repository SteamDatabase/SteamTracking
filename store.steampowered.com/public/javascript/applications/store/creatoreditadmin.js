/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [30],
  {
    47534: (e) => {
      e.exports = {
        SocialMediaRow: "ulorWm3sqhSeSaQPSH7O6",
        SocialMediaType: "ZKHt9TgsGIf59MoROuJuj",
        SocialMediaLink: "_4yVvgRIj7im7egSdbtW_w",
        SocialMediaTooltip: "_2btfW5GjJOR2sOB-k94zp6",
        ValidationError: "_1vWmrCnLJP6y1vJRoWO6Qj",
        AddLinkDropDown: "naYpWkI1nnET_gXJrYEAw",
      };
    },
    41609: (e) => {
      e.exports = {
        WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
        WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
        WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
        Disabled: "_2VzE-3UQEHXyAext8t7gLW",
        Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
        DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
        Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
        JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
        BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
        DragGhost: "_61nYWo98IhSjR8PWtQX9O",
        Grabbable: "riuelIz655g_IBddWfLQ-",
        DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
        WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
        ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
        DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
        DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
      };
    },
    91648: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => B });
      var a = n(90626),
        i = n(20194),
        l = n(30470),
        o = n(41735),
        r = n.n(o);
      var s = n(61859),
        c = n(47534),
        d = n(84933);
      const u =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
      var m = n(44894),
        A = n(62490),
        g = n(41609),
        p = n.n(g),
        S = n(64641),
        E = n.n(S),
        h = n(12155),
        f = n(25489),
        v = n(52038);
      function b(e) {
        const {
            items: t,
            render: n,
            onDelete: i,
            onEdit: l,
            onReorder: o,
            onMove: s,
            bDisabled: c,
            rowClassName: g,
          } = e,
          [S, b] = a.useState(!1),
          [y, C] = a.useState(void 0),
          [M, D] = a.useState(void 0),
          [_, k] = a.useState(-1),
          [R, N] = a.useState(void 0),
          [B, W] = a.useState(0),
          [I, x] = a.useState(0),
          [V, G] = a.useState(void 0),
          [Y, T] = a.useState(""),
          L = a.useRef(void 0),
          X = a.useRef([]),
          H = a.useRef([]),
          Q = a.useMemo(() => r().CancelToken.source(), []),
          j = () => {
            L.current?.firstElementChild &&
              (W(L.current.firstElementChild.getBoundingClientRect().height),
              x(L.current.firstElementChild.getBoundingClientRect().width));
          };
        a.useEffect(() => {
          j();
        }, []),
          a.useEffect(() => () => Q.cancel("ReorderableList unmounting"), [Q]);
        const J = a.useCallback(
            (e) => {
              const t = X.current[_]?.current;
              t
                ? ((t.style.left = e.clientX - y + "px"),
                  (t.style.top = e.clientY - M + "px"))
                : console.error("update grab element missing element");
            },
            [_, y, M],
          ),
          U = a.useCallback(() => {
            const e = X.current[_]?.current;
            e
              ? ((e.style.position = ""), (e.style.zIndex = ""))
              : console.error("end element drag missing element"),
              b(!1),
              k(-1),
              G(void 0),
              N(void 0);
          }, [_]),
          F = (e, t) => {
            Q.token.reason ||
              (L.current.firstElementChild?.getBoundingClientRect().height >
                0 &&
                B !=
                  L.current.firstElementChild.getBoundingClientRect().height &&
                j(),
              ((e, t) => {
                const n = X.current[e]?.current;
                if (!n)
                  return void console.error(
                    "start element grab missing element at index " + e,
                  );
                b(!0), k(e), G(void 0), N(e);
                const a = t.clientX - n.getBoundingClientRect().left;
                C(a);
                const i = t.clientY - n.getBoundingClientRect().top;
                D(i),
                  (n.style.position = "fixed"),
                  (n.style.left = t.clientX - a + "px"),
                  (n.style.top = t.clientY - i + "px"),
                  (n.style.zIndex = "1");
              })(t, e),
              e.preventDefault());
          },
          q = (e, n) => {
            const a = f.OQ(n > e ? n - 1 : n, 0, t.length - 1);
            e != a && (s ? s(e, a) : (0, A.yY)(t, e, a), P(a), o && o(t));
          },
          z = a.useCallback(
            (e) => {
              if (!S || Q.token.reason) return;
              const t = e.clientY;
              let n;
              for (let e = 0; e < H.current.length; e++) {
                if (
                  t <
                  (H.current[e].current.getBoundingClientRect().top +
                    2 * H.current[e].current.getBoundingClientRect().bottom) /
                    3
                ) {
                  n = e;
                  break;
                }
              }
              N(n ?? H.current.length), J(e);
            },
            [S, Q, J],
          );
        (0, d.l6)(window, "mousemove", S ? z : void 0),
          (0, d.l6)(
            window,
            "mouseup",
            S
              ? (e) => {
                  S && !Q.token.reason && (U(), q(_, R));
                }
              : void 0,
          ),
          a.useEffect(() => {
            for (let e = X.current.length; e < t.length; e++)
              X.current.push(a.createRef()), H.current.push(a.createRef());
          }, [t.length]);
        const O = (e) => {
            G(void 0);
            const t = Y?.trim(),
              n = Number.parseInt(t);
            if (0 == t.length || isNaN(n)) return;
            const a = n - 1;
            e != a && q(e, a);
          },
          [Z, P] = a.useState(void 0);
        return a.createElement(
          "div",
          { className: p().WhitelistCtn, ref: L },
          t.map((e, o) =>
            a.createElement(
              "div",
              { key: o, ref: H.current[o] },
              o == R && a.createElement(w, { width: I }),
              a.createElement(
                "div",
                { ref: X.current[o], className: p().DragGhost },
                o == _ &&
                  a.createElement(
                    "div",
                    { className: (0, v.A)(p().WhitelistRow, g) },
                    a.createElement("img", {
                      className: (0, v.A)(p().WhitelistAvatar, p().Grabbing),
                      src: u,
                    }),
                    a.createElement("input", {
                      className: (0, v.A)(
                        p().WhitelistNumber,
                        p().Disabled,
                        p().Grabbing,
                      ),
                      type: "text",
                      value: (R > o ? R - 1 : R) + 1,
                      disabled: !0,
                    }),
                    n(e, o),
                  ),
              ),
              a.createElement(
                "div",
                {
                  className: (0, v.A)(
                    p().WhitelistRow,
                    g,
                    S && p().DragActive,
                    o == _ && p().BeingDragged,
                    Z == o && p().Dropped,
                  ),
                  onAnimationEnd: () => P(void 0),
                },
                a.createElement("img", {
                  className: (0, v.A)(
                    p().WhitelistAvatar,
                    p().Grabbable,
                    c && p().DisabledGrab,
                  ),
                  src: u,
                  onMouseDown: Boolean(c) ? void 0 : (e) => F(e, o),
                }),
                a.createElement("input", {
                  className: (0, v.A)(p().WhitelistNumber, c && p().Disabled),
                  type: "text",
                  value: V == o ? Y : o + 1,
                  disabled: c || o == _,
                  onChange: (e) => T(e.target.value),
                  onKeyDown: (e) =>
                    ((e, t) => {
                      "Enter" === e.key && (O(t), e.currentTarget.blur());
                    })(e, o),
                  onFocus: (e) => {
                    G(o), T(e.target.value);
                  },
                  onBlur: () => O(o),
                }),
                n(e, o),
                Boolean(o != _) &&
                  Boolean(l || i) &&
                  a.createElement(
                    "div",
                    { className: p().ButtonCtn },
                    Boolean(l) &&
                      a.createElement(
                        "div",
                        { className: E().RemoveIcon, onClick: (e) => l(o, e) },
                        a.createElement(h.ffu, null),
                      ),
                    Boolean(i) &&
                      a.createElement("img", {
                        className: E().RemoveIcon,
                        src: m.A,
                        onClick: (e) => i(o, e),
                      }),
                  ),
              ),
              R == t.length &&
                o == t.length - 1 &&
                a.createElement(w, { width: I }),
            ),
          ),
        );
      }
      function w(e) {
        const { width: t } = e;
        return a.createElement(
          "div",
          { className: p().DragHighlightContainer },
          a.createElement("div", {
            className: p().DragHighlight,
            style: { width: t },
          }),
        );
      }
      var y = n(53835),
        C = n(45699),
        M = n(32754);
      function D(e) {
        const {
            rgSocialMediaItems: t,
            fnSetItems: n,
            rgSupportedSocialMediaTypes: i,
            rgValidationData: l,
          } = e,
          o = a.useMemo(
            () =>
              i
                .filter(
                  (e) =>
                    -1 === t.findIndex((t) => t.type === e.type) ||
                    "qq" === e.type ||
                    "qqlink" === e.type,
                )
                .map((e) => ({
                  label: (0, s.we)(`#StoreAdmin_SocialMedia_Type_${e.type}`),
                  data: e.type,
                }))
                .sort((e, t) => (e.label < t.label ? -1 : 1)),
            [i, t],
          );
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(_, {
            options: o,
            onAddLink: (e) => {
              let a = t.slice();
              a.push({ type: e, link: "" }), n(a);
            },
          }),
          a.createElement(b, {
            items: t,
            onDelete: (e) => {
              let a = t.slice();
              a.splice(e, 1), n(a);
            },
            onMove: (e, a) => {
              let i = t.slice();
              (0, A.yY)(i, e, a), n(i);
            },
            render: (e, i) =>
              a.createElement(R, {
                key: e.type,
                item: e,
                onUpdateLink: (e) =>
                  ((e, a) => {
                    const i = t.map((t, n) =>
                      n === e ? { ...t, link: a } : t,
                    );
                    n(i);
                  })(i, e),
                validationData: l[e.type],
              }),
          }),
        );
      }
      function _(e) {
        const { options: t, onAddLink: n } = e;
        return a.createElement(
          "div",
          { className: c.AddLinkDropDown },
          a.createElement(y.ZU, {
            strDefaultLabel: (0, s.we)("#StoreAdmin_SocialMedia_Add"),
            controlled: !0,
            rgOptions: t,
            onChange: (e) => {
              const t = e.data;
              t && n(t);
            },
            selectedOption: null,
          }),
        );
      }
      function k(e, t) {
        let n = !0,
          a = "";
        return (
          t.prefix
            ? ((a =
                "mastodon" === e.type
                  ? (0, s.we)(
                      "#StoreAdmin_SocialMedia_ValidationMastodon",
                      t.prefix.join(", "),
                    )
                  : (0, s.we)(
                      "#StoreAdmin_SocialMedia_ValidationPrefix",
                      t.prefix.join(", "),
                    )),
              e.link &&
                ((n = !1),
                t.prefix.forEach((t) => {
                  e.link.startsWith(t) && (n = !0);
                })))
            : t.number
              ? ((a = (0, s.we)("#StoreAdmin_SocialMedia_ValidationNumber")),
                e.link && (n = /^\d+$/.test(e.link)))
              : t.text
                ? (a = (0, s.we)("#StoreAdmin_SocialMedia_ValidationText"))
                : t.regex &&
                  "tumblr" === e.type &&
                  (a = (0, s.we)("#StoreAdmin_SocialMedia_ValidationTumblr")),
          { bValid: n, strTooltip: a }
        );
      }
      function R(e) {
        const { item: t, onUpdateLink: n, validationData: i } = e;
        let l;
        l = i.number
          ? (0, s.we)("#StoreAdmin_SocialMedia_EnterNumber")
          : i.text
            ? (0, s.we)("#StoreAdmin_SocialMedia_EnterName")
            : (0, s.we)("#StoreAdmin_SocialMedia_EnterLink");
        const { bValid: o, strTooltip: r } = k(t, i);
        return a.createElement(
          "div",
          { className: c.SocialMediaRow },
          a.createElement(
            "div",
            { className: c.SocialMediaType },
            (0, s.we)(`#StoreAdmin_SocialMedia_Type_${t.type}`),
          ),
          a.createElement(C.BA, {
            className: c.SocialMediaLink,
            type: "text",
            value: t.link,
            placeholder: l,
            onChange: (e) => n(e.target.value),
          }),
          r &&
            a.createElement(
              M.he,
              { className: c.SocialMediaTooltip, toolTipContent: r },
              "(?)",
            ),
          !o && a.createElement("div", { className: c.ValidationError }, r),
        );
      }
      var N = n(22797);
      function B(e) {
        const { clanAccountID: t, page_config: n } = e,
          o = (function () {
            const e = (0, i.I)({
              queryKey: ["useSocialMediaSupports"],
              queryFn: async () => {
                const e = `${l.TS.COMMUNITY_BASE_URL}sale/ajaxgetsocialmediaeditsettings`,
                  t = { origin: self.origin },
                  n = await r().get(e, { params: t });
                return 200 == n?.status && 1 == n.data?.success
                  ? n.data
                  : (console.error("useSocialMediaSupports:", n?.status),
                    { success: 2 });
              },
            });
            return e.isLoading ? null : e.data;
          })(),
          [c, d] = (0, a.useState)(() => n?.social_media ?? []),
          [u, m] = (0, a.useState)(() => n?.social_media ?? []);
        return o
          ? a.createElement(
              a.Fragment,
              null,
              a.createElement("br", null),
              a.createElement(
                "h4",
                null,
                (0, s.we)("#CreatorHome_SocialMedia_Title"),
              ),
              a.createElement(
                "p",
                null,
                (0, s.we)("#CreatorHome_SocialMedia_Desc"),
              ),
              a.createElement(
                "blockquote",
                null,
                a.createElement(D, {
                  rgValidationData: o.rgValidationData,
                  rgSupportedSocialMediaTypes: o.rgSupportedSocialMediaTypes,
                  rgSocialMediaItems: c,
                  fnSetItems: (e) => {
                    d(e);
                    const t = o.rgValidationData,
                      n = e
                        .filter((e) => Boolean(e.link))
                        .filter((e) => k(e, t[e.type]).bValid);
                    m(n);
                  },
                }),
                u?.length > 0 &&
                  a.createElement("input", {
                    type: "hidden",
                    name: "social_media",
                    value: JSON.stringify(u),
                  }),
                a.createElement(
                  "a",
                  {
                    className: "btnv6_blue_hoverfade btn_medium",
                    href: "#",
                    onClick: (e) => {
                      e.preventDefault(),
                        window.g_StoreLocHelper?.SaveFields(["tagline"]),
                        window.UpdateCuratorFromForm?.(
                          document.getElementById("listform"),
                        );
                    },
                  },
                  a.createElement("span", null, (0, s.we)("#Button_Save")),
                ),
              ),
            )
          : a.createElement(N.t, {
              string: (0, s.we)("#Loading"),
              position: "center",
            });
      }
    },
    44894: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      const a =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);

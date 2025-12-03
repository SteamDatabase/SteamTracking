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
      n.r(t), n.d(t, { default: () => W });
      var a = n(90626),
        i = n(20194),
        l = n(30470),
        o = n(41735),
        r = n.n(o),
        s = n(37085);
      var c = n(61859),
        d = n(47534),
        m = n(84933);
      const u =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
      var A = n(44894),
        g = n(62490),
        p = n(41609),
        S = n.n(p),
        E = n(64641),
        h = n.n(E),
        f = n(12155),
        v = n(25489),
        w = n(52038);
      function y(e) {
        const {
            items: t,
            render: n,
            onDelete: i,
            onEdit: l,
            onReorder: o,
            onMove: s,
            bDisabled: c,
            rowClassName: d,
          } = e,
          [p, E] = a.useState(!1),
          [y, M] = a.useState(void 0),
          [C, _] = a.useState(void 0),
          [D, R] = a.useState(-1),
          [k, N] = a.useState(void 0),
          [B, W] = a.useState(0),
          [I, x] = a.useState(0),
          [V, G] = a.useState(void 0),
          [Y, T] = a.useState(""),
          L = a.useRef(void 0),
          X = a.useMemo(() => new Array(), []),
          H = a.useMemo(() => new Array(), []),
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
        const J = (e, t) => {
            Q.token.reason ||
              (L.current.firstElementChild?.getBoundingClientRect().height >
                0 &&
                B !=
                  L.current.firstElementChild.getBoundingClientRect().height &&
                j(),
              ((e, t) => {
                const n = X[e]?.current;
                if (!n)
                  return void console.error(
                    "start element grab missing element at index " + e,
                  );
                E(!0), R(e), G(void 0), N(e);
                const a = t.clientX - n.getBoundingClientRect().left;
                M(a);
                const i = t.clientY - n.getBoundingClientRect().top;
                _(i),
                  (n.style.position = "fixed"),
                  (n.style.left = t.clientX - a + "px"),
                  (n.style.top = t.clientY - i + "px"),
                  (n.style.zIndex = "1");
              })(t, e),
              e.preventDefault());
          },
          U = (e, n) => {
            const a = v.OQ(n > e ? n - 1 : n, 0, t.length - 1);
            e != a && (s ? s(e, a) : (0, g.yY)(t, e, a), Z(a), o && o(t));
          },
          F = (e) => {
            p &&
              !Q.token.reason &&
              ((() => {
                const e = X[D]?.current;
                e
                  ? ((e.style.position = ""), (e.style.zIndex = ""))
                  : console.error("end element drag missing element"),
                  E(!1),
                  R(-1),
                  G(void 0),
                  N(void 0);
              })(),
              U(D, k));
          },
          q = (e) => {
            if (!p || Q.token.reason) return;
            const n = e.clientY;
            let a;
            for (let e = 0; e < t.length; e++) {
              if (
                n <
                (H[e].current.getBoundingClientRect().top +
                  2 * H[e].current.getBoundingClientRect().bottom) /
                  3
              ) {
                a = e;
                break;
              }
            }
            N(a ?? t.length),
              ((e) => {
                const t = X[D]?.current;
                t
                  ? ((t.style.left = e.clientX - y + "px"),
                    (t.style.top = e.clientY - C + "px"))
                  : console.error("update grab element missing element");
              })(e);
          };
        (0, m.l6)(window, "mousemove", (e) => q(e)),
          (0, m.l6)(window, "mouseup", (e) => F()),
          a.useEffect(() => {
            for (let e = X.length; e < t.length; e++)
              X.push(a.createRef()), H.push(a.createRef());
          }, [t.length, X, H]);
        const O = (e) => {
            G(void 0);
            const t = Y?.trim(),
              n = Number.parseInt(t);
            if (0 == t.length || isNaN(n)) return;
            const a = n - 1;
            e != a && U(e, a);
          },
          [z, Z] = a.useState(void 0);
        return a.createElement(
          "div",
          { className: S().WhitelistCtn, ref: L },
          t.map((e, o) =>
            a.createElement(
              "div",
              { key: o, ref: H[o] },
              o == k && a.createElement(b, { width: I }),
              a.createElement(
                "div",
                { ref: X[o], className: S().DragGhost },
                o == D &&
                  a.createElement(
                    "div",
                    { className: (0, w.A)(S().WhitelistRow, d) },
                    a.createElement("img", {
                      className: (0, w.A)(S().WhitelistAvatar, S().Grabbing),
                      src: u,
                    }),
                    a.createElement("input", {
                      className: (0, w.A)(
                        S().WhitelistNumber,
                        S().Disabled,
                        S().Grabbing,
                      ),
                      type: "text",
                      value: (k > o ? k - 1 : k) + 1,
                      disabled: !0,
                    }),
                    n(e, o),
                  ),
              ),
              a.createElement(
                "div",
                {
                  className: (0, w.A)(
                    S().WhitelistRow,
                    d,
                    p && S().DragActive,
                    o == D && S().BeingDragged,
                    z == o && S().Dropped,
                  ),
                  onAnimationEnd: () => Z(void 0),
                },
                a.createElement("img", {
                  className: (0, w.A)(
                    S().WhitelistAvatar,
                    S().Grabbable,
                    c && S().DisabledGrab,
                  ),
                  src: u,
                  onMouseDown: Boolean(c) ? void 0 : (e) => J(e, o),
                }),
                a.createElement("input", {
                  className: (0, w.A)(S().WhitelistNumber, c && S().Disabled),
                  type: "text",
                  value: V == o ? Y : o + 1,
                  disabled: c || o == D,
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
                Boolean(o != D) &&
                  Boolean(l || i) &&
                  a.createElement(
                    "div",
                    { className: S().ButtonCtn },
                    Boolean(l) &&
                      a.createElement(
                        "div",
                        { className: h().RemoveIcon, onClick: (e) => l(o, e) },
                        a.createElement(f.ffu, null),
                      ),
                    Boolean(i) &&
                      a.createElement("img", {
                        className: h().RemoveIcon,
                        src: A.A,
                        onClick: (e) => i(o, e),
                      }),
                  ),
              ),
              k == t.length &&
                o == t.length - 1 &&
                a.createElement(b, { width: I }),
            ),
          ),
        );
      }
      function b(e) {
        const { width: t } = e;
        return a.createElement(
          "div",
          { className: S().DragHighlightContainer },
          a.createElement("div", {
            className: S().DragHighlight,
            style: { width: t },
          }),
        );
      }
      var M = n(53835),
        C = n(45699),
        _ = n(32754);
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
                  label: (0, c.we)(`#StoreAdmin_SocialMedia_Type_${e.type}`),
                  data: e.type,
                }))
                .sort((e, t) => (e.label < t.label ? -1 : 1)),
            [i, t],
          );
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(R, {
            options: o,
            onAddLink: (e) => {
              let a = t.slice();
              a.push({ type: e, link: "" }), n(a);
            },
          }),
          a.createElement(y, {
            items: t,
            onDelete: (e) => {
              let a = t.slice();
              a.splice(e, 1), n(a);
            },
            onMove: (e, a) => {
              let i = t.slice();
              (0, g.yY)(i, e, a), n(i);
            },
            render: (e, i) =>
              a.createElement(N, {
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
      function R(e) {
        const { options: t, onAddLink: n } = e;
        return a.createElement(
          "div",
          { className: d.AddLinkDropDown },
          a.createElement(M.ZU, {
            strDefaultLabel: (0, c.we)("#StoreAdmin_SocialMedia_Add"),
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
                  ? (0, c.we)(
                      "#StoreAdmin_SocialMedia_ValidationMastodon",
                      t.prefix.join(", "),
                    )
                  : (0, c.we)(
                      "#StoreAdmin_SocialMedia_ValidationPrefix",
                      t.prefix.join(", "),
                    )),
              e.link &&
                ((n = !1),
                t.prefix.forEach((t) => {
                  e.link.startsWith(t) && (n = !0);
                })))
            : t.number
              ? ((a = (0, c.we)("#StoreAdmin_SocialMedia_ValidationNumber")),
                e.link && (n = /^\d+$/.test(e.link)))
              : t.text
                ? (a = (0, c.we)("#StoreAdmin_SocialMedia_ValidationText"))
                : t.regex &&
                  "tumblr" === e.type &&
                  (a = (0, c.we)("#StoreAdmin_SocialMedia_ValidationTumblr")),
          { bValid: n, strTooltip: a }
        );
      }
      function N(e) {
        const { item: t, onUpdateLink: n, validationData: i } = e;
        let l;
        l = i.number
          ? (0, c.we)("#StoreAdmin_SocialMedia_EnterNumber")
          : i.text
            ? (0, c.we)("#StoreAdmin_SocialMedia_EnterName")
            : (0, c.we)("#StoreAdmin_SocialMedia_EnterLink");
        const { bValid: o, strTooltip: r } = k(t, i);
        return a.createElement(
          "div",
          { className: d.SocialMediaRow },
          a.createElement(
            "div",
            { className: d.SocialMediaType },
            (0, c.we)(`#StoreAdmin_SocialMedia_Type_${t.type}`),
          ),
          a.createElement(C.BA, {
            className: d.SocialMediaLink,
            type: "text",
            value: t.link,
            placeholder: l,
            onChange: (e) => n(e.target.value),
          }),
          r &&
            a.createElement(
              _.he,
              { className: d.SocialMediaTooltip, toolTipContent: r },
              "(?)",
            ),
          !o && a.createElement("div", { className: d.ValidationError }, r),
        );
      }
      var B = n(22797);
      function W(e) {
        const { clanAccountID: t, page_config: n } = e,
          o = (function () {
            const e = (0, i.I)({
              queryKey: ["useSocialMediaSupports"],
              queryFn: async () => {
                const e = `${l.TS.COMMUNITY_BASE_URL}sale/ajaxgetsocialmediaeditsettings`,
                  t = { origin: self.origin },
                  n = await r().get(e, { params: t });
                return 200 == n?.status && n.data?.success == s.d.k_EResultOK
                  ? n.data
                  : (console.error("useSocialMediaSupports:", n?.status),
                    { success: s.d.k_EResultFail });
              },
            });
            return e.isLoading ? null : e.data;
          })(),
          [d, m] = (0, a.useState)(() => n?.social_media ?? []),
          [u, A] = (0, a.useState)(() => n?.social_media ?? []);
        return o
          ? a.createElement(
              a.Fragment,
              null,
              a.createElement("br", null),
              a.createElement(
                "h4",
                null,
                (0, c.we)("#CreatorHome_SocialMedia_Title"),
              ),
              a.createElement(
                "p",
                null,
                (0, c.we)("#CreatorHome_SocialMedia_Desc"),
              ),
              a.createElement(
                "blockquote",
                null,
                a.createElement(D, {
                  rgValidationData: o.rgValidationData,
                  rgSupportedSocialMediaTypes: o.rgSupportedSocialMediaTypes,
                  rgSocialMediaItems: d,
                  fnSetItems: (e) => {
                    m(e);
                    const t = o.rgValidationData,
                      n = e
                        .filter((e) => Boolean(e.link))
                        .filter((e) => k(e, t[e.type]).bValid);
                    A(n);
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
                  a.createElement("span", null, (0, c.we)("#Button_Save")),
                ),
              ),
            )
          : a.createElement(B.t, {
              string: (0, c.we)("#Loading"),
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

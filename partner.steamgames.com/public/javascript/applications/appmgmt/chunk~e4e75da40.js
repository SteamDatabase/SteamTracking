/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [721],
  {
    85274: (e) => {
      e.exports = { MoreDots: "_2YpW8SafRsHDfQIUT2DzUP" };
    },
    96434: (e) => {
      e.exports = {
        PriceCell: "_1sKIcxV1HaEWCa1x_sSuVT",
        PricePrefix: "gPcNwuh4LJPmwRZrAbrA5",
        PriceSuffix: "_3AEJb3AH01qQaG89JOYAh4",
        EditablePrice: "pm5xM6Dyy-9XY0g9TpjX1",
        PriceInput: "_1PcwXjG-2t5JOJuL7yhOYG",
        USD: "_1C7qRJ6YdGWEwEK4QsMRUX",
        ProposedPrice: "rVkmDwpTOXR4DqdBdbiPf",
        ApprovedCanPublish: "_1JBd8mxmIpyOChqhkSKSUg",
        ChangedLocally: "_5mvGWs3IDSRLfxvHx8wig",
        WarningPrice: "_1Qd5uW_BK8PBDJiDBjDCPN",
        SevereWarningPrice: "_1o6zP8gegcka6hdQA2lJjv",
        BadPrice: "_18aiu0HZznAMnGQfWExtTm",
        PriceChange: "w-K7qF60ELXWtEjymcY68",
        NewPrice: "_3sgbtvMYimrD0kSs3VCoPx",
        PriceAlert: "_2eadUvk4zK7FL9FFvy3Gd2",
        PriceChangeArrow: "_1z0l2rhYAxXf6M_tgnczgZ",
        PriceIncrease: "_2jQyP7o7hbWM4EhAkKLAks",
        PricePopout: "_1AoyzK2lSPVwQJoIYEjFbR",
        DetailRow: "_3P_fJH02fBcdGM2etenWu7",
        DetailLabel: "_3RXb3FOdpsOt-aVMvfnb6W",
        DetailPrice: "_2k3CVLd6A1QAixKOkfGx6P",
        DetailButton: "_3ILP7OdXtGjDaSvJqI81RV",
        Disabled: "_3mZHsQVQB8w84OblleAq68",
        HoverToolTip: "_36qS74l1tXSXwGdyfIFQ-G",
      };
    },
    31389: (e) => {
      e.exports = {
        PriceGuidelinesPicker: "_2skmsPR7jCBo5xHN2v_E6A",
        GuidelinesPanel: "_29sQa7P4ANi-KFpS_lkroj",
        GuidelinesDescription: "_3poXK_qmmnRcHLvBGFqi8h",
        GuidelinesGrid: "_1Kz7R_x889mAnYo3uORnzL",
        GridElement: "_1r_b9RJn1Ca6KSjtSm7RPF",
        CurrentPrice: "_3wZdsoh1-V6RQ2rsPkj-ga",
      };
    },
    65697: (e) => {
      e.exports = { PopoverMenu: "_2i2FUBZKGyiP5Sb6tuASpO" };
    },
    74267: (e, r, n) => {
      "use strict";
      n.d(r, { L: () => i, O: () => d });
      var o = n(90626),
        t = n(85274),
        c = n.n(t),
        u = n(12155),
        C = n(52038),
        a = n(49771),
        s = n(6336);
      const i = new a.MX("price-grid-cell-popout-elements");
      function d(e) {
        let { hoverKey: r, className: n, renderHover: t } = e,
          a = (0, C.A)(c().MoreDots, n),
          d = o.useRef(void 0),
          l = o.useCallback(() => {
            i.HideElement(d.current.ownerDocument, r);
          }, [r]);
        return o.createElement(
          "div",
          {
            ref: d,
            tabIndex: -1,
            className: a,
            onFocus: (e) => {
              e.target.focus();
              let n = o.createElement(
                s.g,
                {
                  target: d.current,
                  direction: "top",
                  bEnablePointerEvents: !0,
                  nBodyDistance: 0,
                  onClick: l,
                },
                t(),
              );
              i.ShowElement(d.current.ownerDocument, n, r);
            },
            onBlur: () => {
              i.HideElement(d.current.ownerDocument, r, 100);
            },
          },
          o.createElement(u.faJ, null),
        );
      }
    },
    92847: (e, r, n) => {
      "use strict";
      n.d(r, {
        mK: () => O,
        Gy: () => Y,
        sh: () => G,
        T6: () => x,
        Oo: () => W,
      });
      var o = n(48174),
        t = n(88267);
      const c = {
          [t.AI.k_ECurrencyCodeInvalid]: {},
          [t.AI.k_ECurrencyCodeUSD]: { strSymbol: "$" },
          [t.AI.k_ECurrencyCodeGBP]: { strSymbol: "£" },
          [t.AI.k_ECurrencyCodeEUR]: { strSymbol: "€" },
          [t.AI.k_ECurrencyCodeCHF]: { strSymbol: "CHF" },
          [t.AI.k_ECurrencyCodeRUB]: {
            strSymbol: "руб.",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: "",
          },
          [t.AI.k_ECurrencyCodePLN]: {
            strSymbol: "zł",
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeBRL]: {
            strSymbol: "R$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeJPY]: {
            strSymbol: "¥",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeNOK]: {
            strSymbol: "kr",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeIDR]: {
            strSymbol: "Rp",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeMYR]: { strSymbol: "RM" },
          [t.AI.k_ECurrencyCodePHP]: { strSymbol: "P" },
          [t.AI.k_ECurrencyCodeSGD]: { strSymbol: "S$" },
          [t.AI.k_ECurrencyCodeTHB]: { strSymbol: "฿" },
          [t.AI.k_ECurrencyCodeVND]: {
            strSymbol: "₫",
            bWholeUnitsOnly: !0,
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeKRW]: {
            strSymbol: "₩",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeTRY]: {
            strSymbol: "TL",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeUAH]: {
            strSymbol: "₴",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeMXN]: { strSymbol: "Mex$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeCAD]: { strSymbol: "CDN$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeAUD]: { strSymbol: "A$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeNZD]: { strSymbol: "NZ$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeCNY]: { strSymbol: "¥", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeINR]: {
            strSymbol: "₹",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
          },
          [t.AI.k_ECurrencyCodeCLP]: {
            strSymbol: "CLP$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodePEN]: { strSymbol: "S/." },
          [t.AI.k_ECurrencyCodeCOP]: {
            strSymbol: "COL$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeZAR]: {
            strSymbol: "R",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeHKD]: { strSymbol: "HK$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeTWD]: {
            strSymbol: "NT$",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeSAR]: {
            strSymbol: "SR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeAED]: {
            strSymbol: "AED",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeSEK]: {
            strSymbol: "kr",
            bSpaceForSymbol: !0,
            bSuffixSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeARS]: {
            strSymbol: "ARS$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeILS]: { strSymbol: "₪" },
          [t.AI.k_ECurrencyCodeBYN]: { strSymbol: "Br" },
          [t.AI.k_ECurrencyCodeKZT]: {
            strSymbol: "₸",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeKWD]: {
            strSymbol: "KD",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeQAR]: {
            strSymbol: "QR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeCRC]: {
            strSymbol: "₡",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeUYU]: {
            strSymbol: "$U",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeBGN]: {
            strSymbol: "лв",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeHRK]: {
            strSymbol: "kn",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeCZK]: {
            strSymbol: "Kč",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeDKK]: {
            strSymbol: "kr.",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeHUF]: {
            strSymbol: "Ft",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeRON]: {
            strSymbol: "lei",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeMax]: {},
        },
        u = {
          strSymbol: "",
          bSuffixSymbol: !1,
          bSpaceForSymbol: !1,
          bWholeUnitsOnly: !1,
          eCurrency: t.AI.k_ECurrencyCodeInvalid,
          strDecimalSymbol: ".",
          strThousandsSeparator: ",",
        };
      function C(e, r) {
        const n = (function (e) {
            return { ...u, ...c[e], eCurrency: e };
          })(r),
          {
            strSymbol: o,
            bSuffixSymbol: t,
            bSpaceForSymbol: C,
            bWholeUnitsOnly: a,
            strDecimalSymbol: s,
            strThousandsSeparator: i,
          } = n,
          d = e < 0,
          l = a && e % 100 == 0;
        d && (e = -e);
        const y = [];
        for (let r = 0; r < 2; r++)
          l || y.push(e % 10), (e = Math.floor(e / 10));
        !l && s && y.push(s);
        let E = 0;
        do {
          E++ % 3 == 0 && E > 2 && i && y.push(i),
            y.push(e % 10),
            (e = Math.floor(e / 10));
        } while (e > 0);
        const _ = y.reverse().join(""),
          k = C ? " " : "",
          A = d ? "-" : "";
        return t ? `${A}${_}${k}${o}` : `${A}${o}${k}${_}`;
      }
      var a = n(91934),
        s = n(64238),
        i = n.n(s),
        d = n(90626),
        l = n(56011),
        y = n(65697);
      function E(e) {
        const {
            direction: r,
            ignoreHorizontal: n,
            ignoreVertical: o,
            dismissOnClick: t,
            interactionMode: c = 0,
          } = e,
          u = (0, d.useRef)(null),
          C = (0, d.useRef)(!1),
          s = (0, d.useRef)(!1),
          i = (0, d.useRef)(null),
          [E, _] = (0, d.useState)(!1),
          [k, A] = (0, d.useMemo)(
            () =>
              (function (e) {
                const [r, n] = (0, a.x)(e, "-");
                return "left" === r || "right" === r ? [void 0, r] : [r, n];
              })(r),
            [r],
          ),
          m = (0, d.useCallback)(() => {
            if (!i.current || !u.current) return;
            const e = i.current.getBoundingClientRect();
            let r = A;
            const t = i.current.matches(":dir(rtl)");
            t && ("left" === A ? (r = "right") : "right" === A && (r = "left")),
              u.current.style.setProperty("--parentWidth", `${e.width}px`),
              u.current.style.setProperty("--parentHeight", `${e.height}px`),
              n ||
                ("left" === r
                  ? k
                    ? ((u.current.style.left = "unset"),
                      (u.current.style.right =
                        document.documentElement.clientWidth - e.right + "px"))
                    : ((u.current.style.left = "unset"),
                      (u.current.style.right =
                        document.documentElement.clientWidth - e.left + "px"))
                  : "right" === r
                    ? k
                      ? ((u.current.style.left = `${e.left}px`),
                        (u.current.style.right = "unset"))
                      : ((u.current.style.left = `${e.right}px`),
                        (u.current.style.right = "unset"))
                    : void 0 === r &&
                      (t
                        ? ((u.current.style.left = "unset"),
                          (u.current.style.right =
                            document.documentElement.clientWidth -
                            e.right +
                            "px"))
                        : ((u.current.style.left = `${e.left}px`),
                          (u.current.style.right = "unset")))),
              o ||
                ("down" === k
                  ? ((u.current.style.top = `${e.bottom}px`),
                    (u.current.style.bottom = "unset"),
                    u.current.style.setProperty(
                      "--availableHeight",
                      document.documentElement.clientHeight - e.bottom + "px",
                    ))
                  : "up" === k
                    ? ((u.current.style.top = "unset"),
                      (u.current.style.bottom =
                        document.documentElement.clientHeight - e.top + "px"),
                      u.current.style.setProperty(
                        "--availableHeight",
                        `${e.top}px`,
                      ))
                    : void 0 === k &&
                      ((u.current.style.top = `${e.top}px`),
                      (u.current.style.bottom = "unset"),
                      u.current.style.setProperty(
                        "--availableHeight",
                        document.documentElement.clientHeight - e.top + "px",
                      )));
          }, [A, n, o, k]),
          I = (0, d.useMemo)(() => {
            if (i.current) return (0, l._f)(i.current);
          }, [i.current]);
        (0, d.useEffect)(
          () =>
            E
              ? (u.current?.showPopover(),
                I?.addEventListener("scroll", m),
                () => I?.removeEventListener("scroll", m))
              : ("true" !=
                  window.sessionStorage.getItem("DEBUG_StickyContextMenus") &&
                  u.current?.hidePopover(),
                () => {}),
          [E, m, I],
        );
        const S = (0, d.useCallback)(() => {
            m(), _(!0), (s.current = !0);
          }, [m]),
          b = (0, d.useCallback)(() => {
            (s.current = !1), C.current || _(!1);
          }, []),
          P = (0, d.useCallback)(() => {
            (C.current = !0), _(!0);
          }, []),
          h = (0, d.useCallback)(() => {
            (C.current = !1), s.current || _(!1);
          }, []),
          R = (0, d.useCallback)(() => {
            h(), b();
          }, [h, b]),
          D = (0, d.useCallback)(
            (e) => {
              "Enter" === e.key && (e.preventDefault(), E ? b() : S());
            },
            [b, S, E],
          ),
          p = (0, d.useCallback)(
            (e) => {
              e.currentTarget.contains(e.relatedTarget) ||
                u.current?.contains(e.relatedTarget) ||
                b();
            },
            [b],
          ),
          g = (0, d.useCallback)(
            (e) => {
              const r =
                  e.relatedTarget && !e.currentTarget.contains(e.relatedTarget),
                n = !e.relatedTarget && !C.current;
              (r || n) && (h(), _(!1));
            },
            [h],
          ),
          f = (0, d.useCallback)(() => {
            E && t ? R() : S();
          }, [R, t, E, S]),
          N = (0, d.useCallback)(
            (e) => {
              "Enter" === e.key && E && t ? R() : S(),
                "Escape" === e.key && E && (R(), e.stopPropagation());
            },
            [R, t, E, S],
          ),
          U = 0 === c;
        let K;
        U && !E
          ? (K = (e) => {
              e.preventDefault(), S();
            })
          : U || (K = E ? b : S);
        const v = {
            "aria-expanded": E,
            role: "button",
            onMouseEnter: U ? S : void 0,
            onMouseLeave: U ? b : void 0,
            onClick: K,
            ref: i,
            onKeyDown: D,
            onBlur: p,
          },
          T = {
            popover: "manual",
            ref: u,
            onMouseEnter: P,
            onMouseLeave: h,
            onFocus: P,
            onBlur: g,
            onClick: f,
            onKeyDown: N,
            className: y.PopoverMenu,
          };
        return {
          isShowingMenu: E,
          triggerProps: v,
          menuProps: T,
          closeMenu: R,
        };
      }
      !(async function () {
        if (
          "undefined" == typeof HTMLElement ||
          "object" != typeof HTMLElement.prototype ||
          !("popover" in HTMLElement.prototype)
        ) {
          (await n.e(8433).then(n.bind(n, 8433))).apply();
        }
      })();
      var _ = n(7445),
        k = n(76217);
      function A(e, r) {
        return (n) => {
          e?.(n), r?.(n);
        };
      }
      function m(e) {
        const {
            direction: r,
            interactionMode: n = 0,
            ignoreHorizontal: o,
            ignoreVertical: t,
            dismissOnClick: c,
            menuTarget: u,
            className: C,
            children: a,
            renderWhenClosed: s = !0,
            ...l
          } = e,
          {
            isShowingMenu: y,
            triggerProps: m,
            menuProps: I,
            closeMenu: S,
          } = E(e),
          b = d.useRef(null),
          P = d.useRef(null);
        return (
          d.useEffect(() => {
            y
              ? P.current?.TakeFocus()
              : P.current?.BFocusWithin() && b.current?.TakeFocus();
          }, [y]),
          d.createElement(
            d.Fragment,
            null,
            d.cloneElement(u, {
              ...m,
              onMouseEnter: A(u.props.onMouseEnter, m.onMouseEnter),
              onMouseLeave: A(u.props.onMouseLeave, m.onMouseLeave),
              navRef: b,
            }),
            d.createElement(
              k.Z,
              {
                ...l,
                ...I,
                className: i()(I.className, C),
                navRef: P,
                onCancel: S,
                onFocusWithin: (e) => !e && S(),
                childFocusDisabled: !y,
              },
              d.createElement(_.q, null, (s || y) && a),
            ),
          )
        );
      }
      var I = n(12155),
        S = n(52038),
        b = n(31389),
        P = n.n(b),
        h = n(42475);
      const R = {};
      (R.arabic = () => n.e(6873).then(n.t.bind(n, 46873, 19))),
        (R.brazilian = () => n.e(1365).then(n.t.bind(n, 1365, 19))),
        (R.bulgarian = () => n.e(3966).then(n.t.bind(n, 83966, 19))),
        (R.czech = () => n.e(1360).then(n.t.bind(n, 51360, 19))),
        (R.danish = () => n.e(8292).then(n.t.bind(n, 98292, 19))),
        (R.dutch = () => n.e(4993).then(n.t.bind(n, 44993, 19))),
        (R.english = () => n.e(3703).then(n.t.bind(n, 3703, 19))),
        (R.finnish = () => n.e(6376).then(n.t.bind(n, 86376, 19))),
        (R.french = () => n.e(7325).then(n.t.bind(n, 67325, 19))),
        (R.german = () => n.e(9263).then(n.t.bind(n, 69263, 19))),
        (R.greek = () => n.e(4399).then(n.t.bind(n, 14399, 19))),
        (R.hungarian = () => n.e(1706).then(n.t.bind(n, 91706, 19))),
        (R.indonesian = () => n.e(9341).then(n.t.bind(n, 69341, 19))),
        (R.italian = () => n.e(7511).then(n.t.bind(n, 97511, 19))),
        (R.japanese = () => n.e(330).then(n.t.bind(n, 40330, 19))),
        (R.koreana = () => n.e(6252).then(n.t.bind(n, 96252, 19))),
        (R.latam = () => n.e(204).then(n.t.bind(n, 90204, 19))),
        (R.norwegian = () => n.e(839).then(n.t.bind(n, 40839, 19))),
        (R.polish = () => n.e(8816).then(n.t.bind(n, 78816, 19))),
        (R.portuguese = () => n.e(8160).then(n.t.bind(n, 98160, 19))),
        (R.romanian = () => n.e(3546).then(n.t.bind(n, 73546, 19))),
        (R.russian = () => n.e(4302).then(n.t.bind(n, 84302, 19))),
        (R.schinese = () => n.e(6461).then(n.t.bind(n, 46461, 19))),
        (R.spanish = () => n.e(8167).then(n.t.bind(n, 18167, 19))),
        (R.swedish = () => n.e(2438).then(n.t.bind(n, 22438, 19))),
        (R.tchinese = () => n.e(6006).then(n.t.bind(n, 46006, 19))),
        (R.thai = () => n.e(6727).then(n.t.bind(n, 96727, 19))),
        (R.turkish = () => n.e(1639).then(n.t.bind(n, 51639, 19))),
        (R.ukrainian = () => n.e(4354).then(n.t.bind(n, 21973, 19))),
        (R.vietnamese = () => n.e(3946).then(n.t.bind(n, 53946, 19)));
      const D = (0, h.l)(async function (e) {
        if (R[e]) return R[e]();
      });
      function p(e) {
        const r = d.createElement(
          "button",
          { className: P().PriceGuidelinesPicker },
          d.createElement(I.GB9, null),
        );
        return d.createElement(
          m,
          {
            menuTarget: r,
            direction: "down",
            interactionMode: 1,
            dismissOnClick: !0,
          },
          d.createElement(g, { ...e }),
        );
      }
      function g(e) {
        const { fnGetUSDPriceInCents: r, fnOnUpdate: n, strDescription: c } = e,
          u = (0, o.cT)(),
          a = r();
        if (!u) return null;
        const s = u.GetUSDPricePointsInCents();
        return d.createElement(
          "div",
          { className: P().GuidelinesPanel },
          d.createElement(
            "div",
            { className: P().GuidelinesDescription },
            c || D.Localize("#PricingGuideline_Default"),
          ),
          d.createElement(
            "div",
            { className: P().GuidelinesGrid },
            s.map((e) =>
              d.createElement(
                "button",
                {
                  key: e,
                  onClick: () => n(e),
                  className: (0, S.A)(
                    P().GridElement,
                    a == e && P().CurrentPrice,
                  ),
                },
                C(e, t.AI.k_ECurrencyCodeUSD),
              ),
            ),
          ),
        );
      }
      var f = n(69423),
        N = n(9554),
        U = n(6336),
        K = n(14336),
        v = n(16676),
        T = n(32754),
        M = n(61859),
        w = n(74267),
        H = n(96434),
        B = n.n(H);
      function G(e) {
        const { cell: r, row: n } = e,
          o = n.original.packageID,
          t = r.getValue(),
          {
            nPriceInCents: c,
            nPublishedPriceInCents: u,
            nProposedPriceInCents: C,
            fnSetPrice: a,
          } = (0, f.xQ)(o, t),
          [s, i, l] = (0, f.Wx)(c, t),
          y = (0, f.Gs)(t),
          E = d.useRef(void 0),
          _ = o + t,
          { strClassName: k } = F(o, t),
          A = "USD" == t,
          m = C ?? u,
          I = c != m;
        return d.createElement(
          "div",
          { ref: E, onKeyDown: N.nm, className: k },
          I && d.createElement(Y, { nPriceInCents: c, nSavedPriceInCents: m }),
          s && d.createElement("div", { className: B().PricePrefix }, s),
          d.createElement(
            "div",
            { className: B().EditablePrice },
            d.createElement(v.pd, {
              value: i,
              className: B().PriceInput,
              onChange: (e) => {
                const r = e.target.value.replace(/[^0-9]/g, "");
                let n = Number(r || 0);
                if (Number.isNaN(n)) return;
                y.bWholeUnitsOnly && (n *= 100);
                const o = 2147483647;
                n > o && (n = o), a(n);
              },
              onFocus: (e) => {
                e.target.select(),
                  w.L.ShowElement(
                    E.current.ownerDocument,
                    d.createElement(
                      U.g,
                      {
                        target: E.current,
                        direction: "top",
                        bEnablePointerEvents: !0,
                        nBodyDistance: 0,
                      },
                      d.createElement(Z, {
                        key: _,
                        packageID: o,
                        strPriceKey: t,
                      }),
                    ),
                    _,
                  );
              },
              onBlur: () => {
                window.setTimeout(
                  () =>
                    E.current && w.L.HideElement(E.current.ownerDocument, _),
                  500,
                );
              },
            }),
          ),
          l && d.createElement("div", { className: B().PriceSuffix }, l),
          A && d.createElement(L, { packageID: o }),
          d.createElement(x, { packageID: o, strPriceKey: t }),
        );
      }
      function L(e) {
        const { packageID: r } = e,
          { fnApplyGuidelines: n } = (0, o.gC)((0, f.$i)());
        return d.createElement(p, {
          fnGetUSDPriceInCents: () => (0, f.FR)(r, "USD"),
          fnOnUpdate: (e) => n(r, e),
          strDescription: (0, M.we)(
            "#PricingDashboard_GuidelinesPickerDescription",
          ),
        });
      }
      function x(e) {
        const { packageID: r, strPriceKey: n } = e,
          { strPriceWarning: o, bBadPrice: t, bShowWarningIcon: c } = F(r, n);
        return c
          ? d.createElement(
              T.he,
              {
                className: B().PriceAlert,
                strTooltipClassname: B().HoverToolTip,
                toolTipContent: o,
                direction: "top",
              },
              d.createElement(I.eTF, {
                color: t ? "rgb(194, 45, 0)" : "#e5af37",
              }),
            )
          : null;
      }
      const W = 2;
      function F(e, r) {
        const {
            nPriceInCents: n,
            nPublishedPriceInCents: o,
            nProposedPriceInCents: t,
            nMinPriceInCents: c,
            nMaxPriceInCents: u,
            nMaxDiscountPercentage: C,
            nSuggestedPriceInCents: a,
          } = (0, f.xQ)(e, r),
          s = (0, f.d$)(e),
          i = "USD" == r,
          l = n != (t ?? o),
          y = n < c,
          E = !!u && n > u,
          _ = !!a && n > a * W,
          k = !!a && n < a / W,
          A = !!a && n < a && !!C,
          m =
            (E && (0, M.we)("#PricingDashboard_PriceIncreaseDisallowed")) ||
            (y &&
              (0, M.we)(
                "#PricingDashboard_PriceTooLow",
                (0, f.Wx)(c, r).join(""),
              )) ||
            (_ &&
              (0, M.we)(
                "#PricingDashboard_PriceMuchHigherThanGuidelines",
                (0, f.Wx)(a, r).join(""),
              )) ||
            (k &&
              (0, M.we)(
                "#PricingDashboard_PriceMuchLowerThanGuidelines",
                (0, f.Wx)(a, r).join(""),
              )) ||
            (A &&
              (0, M.we)(
                "#PricingDashboard_PriceCheapAndLowerThanGuidelines",
                C,
              )),
          I = E || y,
          b = _ || k,
          P = I || b || A,
          h = !(l || !t || (o && t == o)),
          R = 4 == s?.eState,
          D = (0, S.A)(
            B().PriceCell,
            i && B().USD,
            l && B().ChangedLocally,
            h && B().ProposedPrice,
            R && B().ApprovedCanPublish,
            P && B().WarningPrice,
            b && B().SevereWarningPrice,
            I && B().BadPrice,
          );
        return d.useMemo(
          () => ({
            strPriceWarning: m,
            strClassName: D,
            bBadPrice: I,
            bShowSevereWarning: b,
            bShowWarningIcon: P,
          }),
          [m, D, I, b, P],
        );
      }
      function Y(e) {
        const { nPriceInCents: r, nSavedPriceInCents: n } = e;
        let o = null,
          t = null,
          c = null,
          u = null;
        if (n) {
          const e = Math.ceil((100 * (r - n)) / n),
            C = r > n;
          (c = C
            ? (0, M.we)("#PricingDashboard_PriceIncreaseBy", e + "%")
            : (0, M.we)("#PricingDashboard_PriceLowerBy", e + "%")),
            (u = (0, S.A)(B().PriceChange, C && B().PriceIncrease)),
            (t = d.createElement(
              "div",
              { className: B().PriceChangeArrow },
              d.createElement(I.i3G, { angle: C ? 0 : 180 }),
            )),
            (o = e + "%");
        } else
          (o = (0, M.we)("#PricingDashboard_PriceIsNew_Short")),
            (u = (0, S.A)(B().NewPrice));
        return d.createElement(
          T.he,
          {
            className: u,
            strTooltipClassname: B().HoverToolTip,
            toolTipContent: c,
            direction: "top",
          },
          t,
          o,
        );
      }
      function O(e) {
        return new Date(1e3 * e).toLocaleString(M.pf.GetPreferredLocales(), {
          weekday: "long",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      }
      function Z(e) {
        const { packageID: r, strPriceKey: n } = e,
          {
            nPriceInCents: o,
            nPublishedPriceInCents: t,
            nProposedPriceInCents: c,
            nSuggestedPriceInCents: u,
            fnSetPrice: C,
          } = (0, f.xQ)(r, n),
          { nPriceInCents: a } = (0, f.xQ)(r, "USD"),
          s = !(!c || (t && c == t)),
          i = (0, f.d$)(r),
          l = i && O(i.rtSubmitted),
          y = (0, K.z0)(i?.submitterID),
          E = y ? y.m_strPlayerName : i?.submitterID;
        return d.createElement(
          "div",
          { className: B().PricePopout },
          !!t &&
            d.createElement(
              T.he,
              {
                className: B().DetailRow,
                direction: "left",
                toolTipContent: (0, M.we)(
                  "#PricingDashboard_CurrentPriceOnStore_ttip",
                ),
              },
              d.createElement(
                "div",
                { className: B().DetailLabel },
                (0, M.we)("#PricingDashboard_CurrentPriceOnStore"),
              ),
              d.createElement(
                "div",
                { className: B().DetailPrice },
                (0, f.Wx)(t, n).join(""),
              ),
              d.createElement(
                T.he,
                {
                  className: (0, S.A)(B().DetailButton, t == o && B().Disabled),
                  onClick: () => C(t),
                  bDisabled: t == o,
                  toolTipContent: (0, M.we)(
                    "#PricingDashboard_UseThisOldPrice_ttip",
                  ),
                },
                (0, M.we)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
          s &&
            d.createElement(
              T.he,
              {
                className: B().DetailRow,
                direction: "left",
                toolTipContent: (0, M.we)(
                  "#PricingDashboard_ProposedPrice_ttip",
                  E,
                  l,
                ),
              },
              d.createElement(
                "div",
                { className: B().DetailLabel },
                (0, M.we)("#PricingDashboard_ProposedPrice"),
              ),
              d.createElement(
                "div",
                { className: B().DetailPrice },
                (0, f.Wx)(c, n).join(""),
              ),
              d.createElement(
                T.he,
                {
                  className: (0, S.A)(B().DetailButton, c == o && B().Disabled),
                  onClick: () => C(c),
                  bDisabled: c == o,
                  toolTipContent: (0, M.we)(
                    "#PricingDashboard_UseThisNewPrice_ttip",
                  ),
                },
                (0, M.we)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
          !!u &&
            d.createElement(
              T.he,
              {
                className: B().DetailRow,
                direction: "left",
                toolTipContent: (0, M.we)(
                  "#PricingDashboard_SuggestedPrice_ttip",
                  (0, f.Wx)(a, "USD").join(""),
                ),
              },
              d.createElement(
                "div",
                { className: B().DetailLabel },
                (0, M.we)("#PricingDashboard_SuggestedPrice"),
              ),
              d.createElement(
                "div",
                { className: B().DetailPrice },
                (0, f.Wx)(u, n).join(""),
              ),
              d.createElement(
                T.he,
                {
                  className: (0, S.A)(B().DetailButton, u == o && B().Disabled),
                  onClick: () => C(u),
                  bDisabled: u == o,
                  toolTipContent: (0, M.we)(
                    "#PricingDashboard_UseThisNewPrice_ttip",
                  ),
                },
                (0, M.we)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
        );
      }
    },
    72255: (e, r, n) => {
      "use strict";
      n.d(r, { M1: () => c, Ug: () => u, pd: () => C, t_: () => a });
      var o = n(88267),
        t = n(29848);
      function c(e) {
        switch (e) {
          case o.AI.k_ECurrencyCodeGBP:
            return "GBP";
          case o.AI.k_ECurrencyCodeEUR:
            return "EUR";
          case o.AI.k_ECurrencyCodeCHF:
            return "CHF";
          case o.AI.k_ECurrencyCodeRUB:
            return "RUB";
          case o.AI.k_ECurrencyCodePLN:
            return "PLN";
          case o.AI.k_ECurrencyCodeBRL:
            return "BRL";
          case o.AI.k_ECurrencyCodeJPY:
            return "JPY";
          case o.AI.k_ECurrencyCodeNOK:
            return "NOK";
          case o.AI.k_ECurrencyCodeIDR:
            return "IDR";
          case o.AI.k_ECurrencyCodeMYR:
            return "MYR";
          case o.AI.k_ECurrencyCodePHP:
            return "PHP";
          case o.AI.k_ECurrencyCodeSGD:
            return "SGD";
          case o.AI.k_ECurrencyCodeTHB:
            return "THB";
          case o.AI.k_ECurrencyCodeVND:
            return "VND";
          case o.AI.k_ECurrencyCodeKRW:
            return "KRW";
          case o.AI.k_ECurrencyCodeTRY:
            return "TRY";
          case o.AI.k_ECurrencyCodeUAH:
            return "UAH";
          case o.AI.k_ECurrencyCodeMXN:
            return "MXN";
          case o.AI.k_ECurrencyCodeCAD:
            return "CAD";
          case o.AI.k_ECurrencyCodeAUD:
            return "AUD";
          case o.AI.k_ECurrencyCodeNZD:
            return "NZD";
          case o.AI.k_ECurrencyCodeCNY:
            return "CNY";
          case o.AI.k_ECurrencyCodeINR:
            return "INR";
          case o.AI.k_ECurrencyCodeCLP:
            return "CLP";
          case o.AI.k_ECurrencyCodePEN:
            return "PEN";
          case o.AI.k_ECurrencyCodeCOP:
            return "COP";
          case o.AI.k_ECurrencyCodeZAR:
            return "ZAR";
          case o.AI.k_ECurrencyCodeHKD:
            return "HKD";
          case o.AI.k_ECurrencyCodeTWD:
            return "TWD";
          case o.AI.k_ECurrencyCodeSAR:
            return "SAR";
          case o.AI.k_ECurrencyCodeAED:
            return "AED";
          case o.AI.k_ECurrencyCodeSEK:
            return "SEK";
          case o.AI.k_ECurrencyCodeARS:
            return "ARS";
          case o.AI.k_ECurrencyCodeILS:
            return "ILS";
          case o.AI.k_ECurrencyCodeBYN:
            return "BYN";
          case o.AI.k_ECurrencyCodeKZT:
            return "KZT";
          case o.AI.k_ECurrencyCodeKWD:
            return "KWD";
          case o.AI.k_ECurrencyCodeQAR:
            return "QAR";
          case o.AI.k_ECurrencyCodeCRC:
            return "CRC";
          case o.AI.k_ECurrencyCodeUYU:
            return "UYU";
          case o.AI.k_ECurrencyCodeBGN:
            return "BGN";
          case o.AI.k_ECurrencyCodeHRK:
            return "HRK";
          case o.AI.k_ECurrencyCodeCZK:
            return "CZK";
          case o.AI.k_ECurrencyCodeDKK:
            return "DKK";
          case o.AI.k_ECurrencyCodeHUF:
            return "HUF";
          case o.AI.k_ECurrencyCodeRON:
            return "RON";
          default:
            return "USD";
        }
      }
      function u(e) {
        switch (e) {
          case o.AI.k_ECurrencyCodeUSD:
            return "US Dollar";
          case o.AI.k_ECurrencyCodeGBP:
            return "GB Pounds";
          case o.AI.k_ECurrencyCodeEUR:
            return "Euros";
          case o.AI.k_ECurrencyCodeCHF:
            return "Swiss Francs";
          case o.AI.k_ECurrencyCodeRUB:
            return "Russian Rubles";
          case o.AI.k_ECurrencyCodePLN:
            return "Polish zloty";
          case o.AI.k_ECurrencyCodeBRL:
            return "Brazilian Reals";
          case o.AI.k_ECurrencyCodeJPY:
            return "Japanese Yen";
          case o.AI.k_ECurrencyCodeNOK:
            return "Norwegian Krone";
          case o.AI.k_ECurrencyCodeIDR:
            return "Indonesian Rupiah";
          case o.AI.k_ECurrencyCodeMYR:
            return "Malaysian Ringgit";
          case o.AI.k_ECurrencyCodePHP:
            return "Philippine Peso";
          case o.AI.k_ECurrencyCodeSGD:
            return "Singapore Dollar";
          case o.AI.k_ECurrencyCodeTHB:
            return "Thai Baht";
          case o.AI.k_ECurrencyCodeVND:
            return "Vietnamese Dong";
          case o.AI.k_ECurrencyCodeKRW:
            return "Korean Won";
          case o.AI.k_ECurrencyCodeTRY:
            return "Turkish Lira";
          case o.AI.k_ECurrencyCodeUAH:
            return "Ukrainian Hryvnia";
          case o.AI.k_ECurrencyCodeMXN:
            return "Mexican Peso";
          case o.AI.k_ECurrencyCodeCAD:
            return "Canadian Dollar";
          case o.AI.k_ECurrencyCodeAUD:
            return "Australian Dollar";
          case o.AI.k_ECurrencyCodeNZD:
            return "New Zealand Dollar";
          case o.AI.k_ECurrencyCodeCNY:
            return "Chinese Yuan";
          case o.AI.k_ECurrencyCodeINR:
            return "Indian Rupee";
          case o.AI.k_ECurrencyCodeCLP:
            return "Chilean Peso";
          case o.AI.k_ECurrencyCodePEN:
            return "Peruvian Sol";
          case o.AI.k_ECurrencyCodeCOP:
            return "Colombian Peso";
          case o.AI.k_ECurrencyCodeZAR:
            return "South African Rand";
          case o.AI.k_ECurrencyCodeHKD:
            return "Hong Kong Dollar";
          case o.AI.k_ECurrencyCodeTWD:
            return "Taiwanese Dollar";
          case o.AI.k_ECurrencyCodeSAR:
            return "Saudi Arabian Riyal";
          case o.AI.k_ECurrencyCodeAED:
            return "Emirati Dirham";
          case o.AI.k_ECurrencyCodeSEK:
            return "Swedish Krona";
          case o.AI.k_ECurrencyCodeARS:
            return "Argentine Peso";
          case o.AI.k_ECurrencyCodeILS:
            return "Israeli New Shequel";
          case o.AI.k_ECurrencyCodeBYN:
            return "Belarusian Ruble";
          case o.AI.k_ECurrencyCodeKZT:
            return "Kazakhstani Tenge";
          case o.AI.k_ECurrencyCodeKWD:
            return "Kuwaiti Dinar";
          case o.AI.k_ECurrencyCodeQAR:
            return "Qatari Rial";
          case o.AI.k_ECurrencyCodeCRC:
            return "Costa Rican Colon";
          case o.AI.k_ECurrencyCodeUYU:
            return "Uruguayan Peso";
          case o.AI.k_ECurrencyCodeBGN:
            return "Bulgarian lev";
          case o.AI.k_ECurrencyCodeHRK:
            return "Croatian kuna";
          case o.AI.k_ECurrencyCodeCZK:
            return "Czech koruna";
          case o.AI.k_ECurrencyCodeDKK:
            return "Danish krone";
          case o.AI.k_ECurrencyCodeHUF:
            return "Hungarian forint";
          case o.AI.k_ECurrencyCodeRON:
            return "Romanian leu";
          default:
            return "";
        }
      }
      function C(e, r = t.R.k_ERegionCodeInvalid) {
        switch (e) {
          case o.AI.k_ECurrencyCodeGBP:
            return "gbp";
          case o.AI.k_ECurrencyCodeEUR:
            return "eur";
          case o.AI.k_ECurrencyCodeCHF:
            return "chf";
          case o.AI.k_ECurrencyCodeRUB:
            return "rub";
          case o.AI.k_ECurrencyCodePLN:
            return "pln";
          case o.AI.k_ECurrencyCodeBRL:
            return "brl";
          case o.AI.k_ECurrencyCodeJPY:
            return "jpy";
          case o.AI.k_ECurrencyCodeNOK:
            return "nok";
          case o.AI.k_ECurrencyCodeIDR:
            return "idr";
          case o.AI.k_ECurrencyCodeMYR:
            return "myr";
          case o.AI.k_ECurrencyCodePHP:
            return "php";
          case o.AI.k_ECurrencyCodeSGD:
            return "sgd";
          case o.AI.k_ECurrencyCodeTHB:
            return "thb";
          case o.AI.k_ECurrencyCodeVND:
            return "vnd";
          case o.AI.k_ECurrencyCodeKRW:
            return "krw";
          case o.AI.k_ECurrencyCodeTRY:
            return "try";
          case o.AI.k_ECurrencyCodeUAH:
            return "uah";
          case o.AI.k_ECurrencyCodeMXN:
            return "mxn";
          case o.AI.k_ECurrencyCodeCAD:
            return "cad";
          case o.AI.k_ECurrencyCodeAUD:
            return "aud";
          case o.AI.k_ECurrencyCodeNZD:
            return "nzd";
          case o.AI.k_ECurrencyCodeCNY:
            return "cny";
          case o.AI.k_ECurrencyCodeINR:
            return "inr";
          case o.AI.k_ECurrencyCodeCLP:
            return "clp";
          case o.AI.k_ECurrencyCodePEN:
            return "pen";
          case o.AI.k_ECurrencyCodeCOP:
            return "cop";
          case o.AI.k_ECurrencyCodeZAR:
            return "zar";
          case o.AI.k_ECurrencyCodeHKD:
            return "hkd";
          case o.AI.k_ECurrencyCodeTWD:
            return "twd";
          case o.AI.k_ECurrencyCodeSAR:
            return "sar";
          case o.AI.k_ECurrencyCodeAED:
            return "aed";
          case o.AI.k_ECurrencyCodeSEK:
            return "sek";
          case o.AI.k_ECurrencyCodeARS:
            return "ars";
          case o.AI.k_ECurrencyCodeILS:
            return "ils";
          case o.AI.k_ECurrencyCodeBYN:
            return "byn";
          case o.AI.k_ECurrencyCodeKZT:
            return "kzt";
          case o.AI.k_ECurrencyCodeKWD:
            return "kwd";
          case o.AI.k_ECurrencyCodeQAR:
            return "qar";
          case o.AI.k_ECurrencyCodeCRC:
            return "crc";
          case o.AI.k_ECurrencyCodeUYU:
            return "uyu";
          case o.AI.k_ECurrencyCodeBGN:
            return "bgn";
          case o.AI.k_ECurrencyCodeHRK:
            return "hrk";
          case o.AI.k_ECurrencyCodeCZK:
            return "czk";
          case o.AI.k_ECurrencyCodeDKK:
            return "dkk";
          case o.AI.k_ECurrencyCodeHUF:
            return "huf";
          case o.AI.k_ECurrencyCodeRON:
            return "ron";
          default:
            return r == t.R.k_ERegionCodeCIS
              ? "usd_cis"
              : r == t.R.k_ERegionCodeSAsia
                ? "usd_sasia"
                : r == t.R.k_ERegionCodeLATAM
                  ? "usd_latam"
                  : r == t.R.k_ERegionCodeMENA
                    ? "usd_mena"
                    : "usd";
        }
      }
      function a(e) {
        return `${u(
          (function (e) {
            switch (e) {
              case "USD":
                return o.AI.k_ECurrencyCodeUSD;
              case "GBP":
                return o.AI.k_ECurrencyCodeGBP;
              case "EUR":
                return o.AI.k_ECurrencyCodeEUR;
              case "CHF":
                return o.AI.k_ECurrencyCodeCHF;
              case "RUB":
                return o.AI.k_ECurrencyCodeRUB;
              case "PLN":
                return o.AI.k_ECurrencyCodePLN;
              case "BRL":
                return o.AI.k_ECurrencyCodeBRL;
              case "JPY":
                return o.AI.k_ECurrencyCodeJPY;
              case "NOK":
                return o.AI.k_ECurrencyCodeNOK;
              case "IDR":
                return o.AI.k_ECurrencyCodeIDR;
              case "MYR":
                return o.AI.k_ECurrencyCodeMYR;
              case "PHP":
                return o.AI.k_ECurrencyCodePHP;
              case "SGD":
                return o.AI.k_ECurrencyCodeSGD;
              case "THB":
                return o.AI.k_ECurrencyCodeTHB;
              case "VND":
                return o.AI.k_ECurrencyCodeVND;
              case "KRW":
                return o.AI.k_ECurrencyCodeKRW;
              case "TRY":
                return o.AI.k_ECurrencyCodeTRY;
              case "UAH":
                return o.AI.k_ECurrencyCodeUAH;
              case "MXN":
                return o.AI.k_ECurrencyCodeMXN;
              case "CAD":
                return o.AI.k_ECurrencyCodeCAD;
              case "AUD":
                return o.AI.k_ECurrencyCodeAUD;
              case "NZD":
                return o.AI.k_ECurrencyCodeNZD;
              case "CNY":
                return o.AI.k_ECurrencyCodeCNY;
              case "INR":
                return o.AI.k_ECurrencyCodeINR;
              case "CLP":
                return o.AI.k_ECurrencyCodeCLP;
              case "PEN":
                return o.AI.k_ECurrencyCodePEN;
              case "COP":
                return o.AI.k_ECurrencyCodeCOP;
              case "ZAR":
                return o.AI.k_ECurrencyCodeZAR;
              case "HKD":
                return o.AI.k_ECurrencyCodeHKD;
              case "TWD":
                return o.AI.k_ECurrencyCodeTWD;
              case "SAR":
                return o.AI.k_ECurrencyCodeSAR;
              case "AED":
                return o.AI.k_ECurrencyCodeAED;
              case "SEK":
                return o.AI.k_ECurrencyCodeSEK;
              case "ARS":
                return o.AI.k_ECurrencyCodeARS;
              case "ILS":
                return o.AI.k_ECurrencyCodeILS;
              case "BYN":
                return o.AI.k_ECurrencyCodeBYN;
              case "KZT":
                return o.AI.k_ECurrencyCodeKZT;
              case "KWD":
                return o.AI.k_ECurrencyCodeKWD;
              case "QAR":
                return o.AI.k_ECurrencyCodeQAR;
              case "CRC":
                return o.AI.k_ECurrencyCodeCRC;
              case "UYU":
                return o.AI.k_ECurrencyCodeUYU;
              case "BGN":
                return o.AI.k_ECurrencyCodeBGN;
              case "HRK":
                return o.AI.k_ECurrencyCodeHRK;
              case "CZK":
                return o.AI.k_ECurrencyCodeCZK;
              case "DKK":
                return o.AI.k_ECurrencyCodeDKK;
              case "HUF":
                return o.AI.k_ECurrencyCodeHUF;
              case "RON":
                return o.AI.k_ECurrencyCodeRON;
              default:
                return o.AI.k_ECurrencyCodeInvalid;
            }
          })(e.toUpperCase()),
        )} (${e})`;
      }
    },
    88267: (e, r, n) => {
      "use strict";
      var o;
      n.d(r, { AI: () => o, X5: () => u, yv: () => c }),
        (function (e) {
          (e[(e.k_ECurrencyCodeInvalid = 0)] = "k_ECurrencyCodeInvalid"),
            (e[(e.k_ECurrencyCodeUSD = 1)] = "k_ECurrencyCodeUSD"),
            (e[(e.k_ECurrencyCodeGBP = 2)] = "k_ECurrencyCodeGBP"),
            (e[(e.k_ECurrencyCodeEUR = 3)] = "k_ECurrencyCodeEUR"),
            (e[(e.k_ECurrencyCodeCHF = 4)] = "k_ECurrencyCodeCHF"),
            (e[(e.k_ECurrencyCodeRUB = 5)] = "k_ECurrencyCodeRUB"),
            (e[(e.k_ECurrencyCodePLN = 6)] = "k_ECurrencyCodePLN"),
            (e[(e.k_ECurrencyCodeBRL = 7)] = "k_ECurrencyCodeBRL"),
            (e[(e.k_ECurrencyCodeJPY = 8)] = "k_ECurrencyCodeJPY"),
            (e[(e.k_ECurrencyCodeNOK = 9)] = "k_ECurrencyCodeNOK"),
            (e[(e.k_ECurrencyCodeIDR = 10)] = "k_ECurrencyCodeIDR"),
            (e[(e.k_ECurrencyCodeMYR = 11)] = "k_ECurrencyCodeMYR"),
            (e[(e.k_ECurrencyCodePHP = 12)] = "k_ECurrencyCodePHP"),
            (e[(e.k_ECurrencyCodeSGD = 13)] = "k_ECurrencyCodeSGD"),
            (e[(e.k_ECurrencyCodeTHB = 14)] = "k_ECurrencyCodeTHB"),
            (e[(e.k_ECurrencyCodeVND = 15)] = "k_ECurrencyCodeVND"),
            (e[(e.k_ECurrencyCodeKRW = 16)] = "k_ECurrencyCodeKRW"),
            (e[(e.k_ECurrencyCodeTRY = 17)] = "k_ECurrencyCodeTRY"),
            (e[(e.k_ECurrencyCodeUAH = 18)] = "k_ECurrencyCodeUAH"),
            (e[(e.k_ECurrencyCodeMXN = 19)] = "k_ECurrencyCodeMXN"),
            (e[(e.k_ECurrencyCodeCAD = 20)] = "k_ECurrencyCodeCAD"),
            (e[(e.k_ECurrencyCodeAUD = 21)] = "k_ECurrencyCodeAUD"),
            (e[(e.k_ECurrencyCodeNZD = 22)] = "k_ECurrencyCodeNZD"),
            (e[(e.k_ECurrencyCodeCNY = 23)] = "k_ECurrencyCodeCNY"),
            (e[(e.k_ECurrencyCodeINR = 24)] = "k_ECurrencyCodeINR"),
            (e[(e.k_ECurrencyCodeCLP = 25)] = "k_ECurrencyCodeCLP"),
            (e[(e.k_ECurrencyCodePEN = 26)] = "k_ECurrencyCodePEN"),
            (e[(e.k_ECurrencyCodeCOP = 27)] = "k_ECurrencyCodeCOP"),
            (e[(e.k_ECurrencyCodeZAR = 28)] = "k_ECurrencyCodeZAR"),
            (e[(e.k_ECurrencyCodeHKD = 29)] = "k_ECurrencyCodeHKD"),
            (e[(e.k_ECurrencyCodeTWD = 30)] = "k_ECurrencyCodeTWD"),
            (e[(e.k_ECurrencyCodeSAR = 31)] = "k_ECurrencyCodeSAR"),
            (e[(e.k_ECurrencyCodeAED = 32)] = "k_ECurrencyCodeAED"),
            (e[(e.k_ECurrencyCodeSEK = 33)] = "k_ECurrencyCodeSEK"),
            (e[(e.k_ECurrencyCodeARS = 34)] = "k_ECurrencyCodeARS"),
            (e[(e.k_ECurrencyCodeILS = 35)] = "k_ECurrencyCodeILS"),
            (e[(e.k_ECurrencyCodeBYN = 36)] = "k_ECurrencyCodeBYN"),
            (e[(e.k_ECurrencyCodeKZT = 37)] = "k_ECurrencyCodeKZT"),
            (e[(e.k_ECurrencyCodeKWD = 38)] = "k_ECurrencyCodeKWD"),
            (e[(e.k_ECurrencyCodeQAR = 39)] = "k_ECurrencyCodeQAR"),
            (e[(e.k_ECurrencyCodeCRC = 40)] = "k_ECurrencyCodeCRC"),
            (e[(e.k_ECurrencyCodeUYU = 41)] = "k_ECurrencyCodeUYU"),
            (e[(e.k_ECurrencyCodeBGN = 42)] = "k_ECurrencyCodeBGN"),
            (e[(e.k_ECurrencyCodeHRK = 43)] = "k_ECurrencyCodeHRK"),
            (e[(e.k_ECurrencyCodeCZK = 44)] = "k_ECurrencyCodeCZK"),
            (e[(e.k_ECurrencyCodeDKK = 45)] = "k_ECurrencyCodeDKK"),
            (e[(e.k_ECurrencyCodeHUF = 46)] = "k_ECurrencyCodeHUF"),
            (e[(e.k_ECurrencyCodeRON = 47)] = "k_ECurrencyCodeRON"),
            (e[(e.k_ECurrencyCodeMax = 48)] = "k_ECurrencyCodeMax");
        })(o || (o = {}));
      const t = [o.k_ECurrencyCodeTRY, o.k_ECurrencyCodeARS];
      function c() {
        return [
          o.k_ECurrencyCodeUSD,
          o.k_ECurrencyCodeGBP,
          o.k_ECurrencyCodeEUR,
          o.k_ECurrencyCodeCHF,
          o.k_ECurrencyCodeRUB,
          o.k_ECurrencyCodePLN,
          o.k_ECurrencyCodeBRL,
          o.k_ECurrencyCodeJPY,
          o.k_ECurrencyCodeNOK,
          o.k_ECurrencyCodeIDR,
          o.k_ECurrencyCodeMYR,
          o.k_ECurrencyCodePHP,
          o.k_ECurrencyCodeSGD,
          o.k_ECurrencyCodeTHB,
          o.k_ECurrencyCodeVND,
          o.k_ECurrencyCodeKRW,
          o.k_ECurrencyCodeUAH,
          o.k_ECurrencyCodeMXN,
          o.k_ECurrencyCodeCAD,
          o.k_ECurrencyCodeAUD,
          o.k_ECurrencyCodeNZD,
          o.k_ECurrencyCodeCNY,
          o.k_ECurrencyCodeINR,
          o.k_ECurrencyCodeCLP,
          o.k_ECurrencyCodePEN,
          o.k_ECurrencyCodeCOP,
          o.k_ECurrencyCodeZAR,
          o.k_ECurrencyCodeHKD,
          o.k_ECurrencyCodeTWD,
          o.k_ECurrencyCodeSAR,
          o.k_ECurrencyCodeAED,
          o.k_ECurrencyCodeILS,
          o.k_ECurrencyCodeKZT,
          o.k_ECurrencyCodeKWD,
          o.k_ECurrencyCodeQAR,
          o.k_ECurrencyCodeCRC,
          o.k_ECurrencyCodeUYU,
        ];
      }
      function u() {
        return [
          ...c(),
          ...t,
          o.k_ECurrencyCodeSEK,
          o.k_ECurrencyCodeBGN,
          o.k_ECurrencyCodeHRK,
          o.k_ECurrencyCodeCZK,
          o.k_ECurrencyCodeDKK,
          o.k_ECurrencyCodeHUF,
          o.k_ECurrencyCodeRON,
        ];
      }
    },
    29848: (e, r, n) => {
      "use strict";
      var o;
      function t() {
        return [
          o.k_ERegionCodeCIS,
          o.k_ERegionCodeSAsia,
          o.k_ERegionCodeLATAM,
          o.k_ERegionCodeMENA,
        ];
      }
      n.d(r, { R: () => o, i: () => t }),
        (function (e) {
          (e[(e.k_ERegionCodeInvalid = 0)] = "k_ERegionCodeInvalid"),
            (e[(e.k_ERegionCodeCIS = 1)] = "k_ERegionCodeCIS"),
            (e[(e.k_ERegionCodeSAsia = 2)] = "k_ERegionCodeSAsia"),
            (e[(e.k_ERegionCodeLATAM = 3)] = "k_ERegionCodeLATAM"),
            (e[(e.k_ERegionCodeMENA = 4)] = "k_ERegionCodeMENA"),
            (e[(e.k_ERegionCodeMax = 5)] = "k_ERegionCodeMax");
        })(o || (o = {}));
    },
    87700: (e, r, n) => {
      "use strict";
      n.d(r, { Bb: () => C, jY: () => u });
      var o = n(90626),
        t = n(48174);
      const c = o.createContext({
        eConversionMethod: 1,
        setConversionMethod: (e) => {},
        rgAvailableConversionMethods: [],
      });
      function u(e) {
        const { eInitialConversionMethod: r } = e,
          n = (0, t.cT)(),
          [u, C] = o.useState(r || 1),
          a = o.useMemo(() => {
            const e = n ? n.GetAvailableConversionMethods() : [];
            return {
              eConversionMethod: u,
              setConversionMethod: C,
              rgAvailableConversionMethods: e,
            };
          }, [u, C, n]);
        return o.createElement(c.Provider, { value: a }, e.children);
      }
      function C() {
        return o.useContext(c).eConversionMethod;
      }
    },
    48174: (e, r, n) => {
      "use strict";
      n.d(r, { mj: () => _, gC: () => k, cT: () => E });
      var o = n(90626),
        t = n(79450);
      class c {
        m_mapUSDPrice = new Map();
        m_mapKeyToGuidePrice = new Map();
        m_rgUSDPricePointInCents = [];
        m_setConversionMethod = new Set();
        GetKey(e, r, n, o = 1) {
          return `${e}_${r}_${n || t.Rm.k_ERegionCodeInvalid}_${o}`;
        }
        GetAvailableConversionMethods() {
          return Array.from(this.m_setConversionMethod).sort();
        }
        GetAnyPricePoint() {
          return Array.from(this.m_mapUSDPrice.get(1)?.values() || [])[0];
        }
        GetRecommendPrice(e, r, n, o = 1) {
          const t = this.GetKey(e, r, n, o);
          return this.m_mapKeyToGuidePrice.get(t);
        }
        GetScaledRecommendedPrice(e, r, n, o = 1) {
          let t = -1,
            c = -1;
          for (const r of this.m_mapUSDPrice.get(o).keys()) {
            const n = Math.abs(r - e);
            (-1 == t || n < c) && ((t = r), (c = n));
          }
          const u = this.m_mapUSDPrice.get(o).get(t),
            C = n
              ? u.region_prices.find((e) => e.region_code == n)
              : u.currency_prices.find((e) => e.currency_code == r),
            a = e / t;
          return {
            currency_code: C?.currency_code,
            region_code: C?.region_code,
            price: Math.ceil((C?.price || 0) * a),
          };
        }
        GetUSDPricePointsInCents() {
          return this.m_rgUSDPricePointInCents;
        }
        constructor(e) {
          let r = new Set();
          e.forEach((e) => {
            const n = e.convert_method ?? 1;
            this.m_setConversionMethod.add(n),
              this.m_mapUSDPrice.has(n) || this.m_mapUSDPrice.set(n, new Map());
            this.m_mapUSDPrice.get(n).set(e.usd_price, e),
              r.add(e.usd_price),
              e.currency_prices.forEach((r) => {
                const n = this.GetKey(
                  e.usd_price,
                  r.currency_code,
                  t.Rm.k_ERegionCodeInvalid,
                  e.convert_method || 1,
                );
                this.m_mapKeyToGuidePrice.set(n, r);
              }),
              e.region_prices.forEach((r) => {
                const n = this.GetKey(
                  e.usd_price,
                  r.currency_code,
                  r.region_code,
                  e.convert_method || 1,
                );
                if (
                  (this.m_mapKeyToGuidePrice.set(n, r),
                  this.m_setConversionMethod.has(3))
                ) {
                  const n = {
                      currency_code: t.AI.k_ECurrencyCodeUSD,
                      price: e.usd_price,
                      region_code: r.region_code,
                    },
                    o = this.GetKey(
                      e.usd_price,
                      t.AI.k_ECurrencyCodeUSD,
                      r.region_code,
                      3,
                    );
                  this.m_mapKeyToGuidePrice.set(o, n);
                }
              });
          }),
            (this.m_rgUSDPricePointInCents = Array.from(r.keys()));
        }
      }
      var u = n(7860),
        C = n(24484);
      var a = n(87700),
        s = n(20194),
        i = n(81393),
        d = n(88267),
        l = n(72255),
        y = n(29848);
      function E() {
        const e = (0, s.I)({
          queryKey: ["PricingGuideline"],
          queryFn: async () =>
            await (function () {
              let e = (0, C.Fd)("pricing_guideline", "application_config");
              if (e) return Promise.resolve(e);
              {
                const e = u.L.getQueryData(["PricingGuideline"]);
                return Promise.resolve(e ?? null);
              }
            })(),
        });
        return (0, o.useMemo)(() => (e.data ? new c(e.data) : null), [e.data]);
      }
      function _() {
        return ["PricingGuideline"];
      }
      function k(e) {
        const r = E(),
          n = (0, a.Bb)();
        return {
          fnApplyGuidelines: (0, o.useCallback)(
            (o, t) => {
              if (
                ((0, i.wT)(
                  r,
                  "Pricing Guideline Not Initialized by time conversion being triggered",
                ),
                r)
              ) {
                for (
                  let c = d.AI.k_ECurrencyCodeUSD;
                  c < d.AI.k_ECurrencyCodeMax;
                  ++c
                ) {
                  const u = r.GetRecommendPrice(t, c, void 0, n)?.price;
                  if (u && u > 0) {
                    const r = (0, l.M1)(c);
                    e(o, r, u);
                  }
                }
                for (
                  let c = y.R.k_ERegionCodeCIS;
                  c < y.R.k_ERegionCodeMax;
                  ++c
                ) {
                  const u = d.AI.k_ECurrencyCodeUSD,
                    C = r.GetRecommendPrice(t, u, c, n)?.price;
                  if (C && C > 0) {
                    const r = (0, l.pd)(u, c).toUpperCase();
                    e(o, r, C);
                  }
                }
              }
            },
            [n, e, r],
          ),
        };
      }
    },
    79450: (e, r, n) => {
      "use strict";
      n.d(r, {
        AI: () => o.AI,
        M1: () => i.M1,
        Ug: () => i.Ug,
        pd: () => i.pd,
        Rm: () => t.R,
        k8: () => u,
        j4: () => s,
        de: () => C,
        bS: () => c,
        t_: () => i.t_,
        uF: () => a,
        JA: () => d,
        iy: () => l,
      });
      var o = n(88267),
        t = n(29848);
      function c(e) {
        return o.AI.k_ECurrencyCodeUSD;
      }
      function u(e) {
        switch (e) {
          case t.R.k_ERegionCodeCIS:
            return "usd_cis";
          case t.R.k_ERegionCodeSAsia:
            return "usd_sasia";
          case t.R.k_ERegionCodeLATAM:
            return "usd_latam";
          case t.R.k_ERegionCodeMENA:
            return "usd_mena";
          default:
            return "usd_invalid";
        }
      }
      function C(e) {
        switch (e) {
          case t.R.k_ERegionCodeCIS:
            return "CIS";
          case t.R.k_ERegionCodeSAsia:
            return "SASIA";
          case t.R.k_ERegionCodeLATAM:
            return "LATAM";
          case t.R.k_ERegionCodeMENA:
            return "MENA";
          default:
            return "Invalid Region";
        }
      }
      function a(e) {
        switch (e) {
          case "CIS":
            return t.R.k_ERegionCodeCIS;
          case "SASIA":
            return t.R.k_ERegionCodeSAsia;
          case "LATAM":
            return t.R.k_ERegionCodeLATAM;
          case "MENA":
            return t.R.k_ERegionCodeMENA;
          default:
            return t.R.k_ERegionCodeInvalid;
        }
      }
      function s(e) {
        switch (e) {
          case t.R.k_ERegionCodeCIS:
            return "The Commonwealth of Independent Stats";
          case t.R.k_ERegionCodeSAsia:
            return "South Asia";
          case t.R.k_ERegionCodeLATAM:
            return "Latin America";
          case t.R.k_ERegionCodeMENA:
            return "Middle East and North Africa";
          default:
            return "Invalid Region";
        }
      }
      var i = n(72255);
      const d = (0, o.yv)(),
        l = ((0, o.X5)(), (0, t.i)());
    },
  },
]);

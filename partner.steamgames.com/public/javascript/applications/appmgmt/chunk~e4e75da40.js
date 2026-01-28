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
          y = o.useCallback(() => {
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
                  onClick: y,
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
        sh: () => L,
        T6: () => x,
        Oo: () => W,
      });
      var o = n(69423),
        t = n(9554),
        c = n(90626),
        u = n(6336),
        C = n(14336),
        a = n(16676),
        s = n(12155),
        i = n(32754),
        d = n(52038),
        y = n(61859),
        l = n(74267),
        E = n(96434),
        _ = n.n(E),
        k = n(88267);
      const A = {
          [k.AI.k_ECurrencyCodeInvalid]: {},
          [k.AI.k_ECurrencyCodeUSD]: { strSymbol: "$" },
          [k.AI.k_ECurrencyCodeGBP]: { strSymbol: "£" },
          [k.AI.k_ECurrencyCodeEUR]: { strSymbol: "€" },
          [k.AI.k_ECurrencyCodeCHF]: { strSymbol: "CHF" },
          [k.AI.k_ECurrencyCodeRUB]: {
            strSymbol: "руб.",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: "",
          },
          [k.AI.k_ECurrencyCodePLN]: {
            strSymbol: "zł",
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [k.AI.k_ECurrencyCodeBRL]: {
            strSymbol: "R$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [k.AI.k_ECurrencyCodeJPY]: {
            strSymbol: "¥",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [k.AI.k_ECurrencyCodeNOK]: {
            strSymbol: "kr",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [k.AI.k_ECurrencyCodeIDR]: {
            strSymbol: "Rp",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [k.AI.k_ECurrencyCodeMYR]: { strSymbol: "RM" },
          [k.AI.k_ECurrencyCodePHP]: { strSymbol: "P" },
          [k.AI.k_ECurrencyCodeSGD]: { strSymbol: "S$" },
          [k.AI.k_ECurrencyCodeTHB]: { strSymbol: "฿" },
          [k.AI.k_ECurrencyCodeVND]: {
            strSymbol: "₫",
            bWholeUnitsOnly: !0,
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [k.AI.k_ECurrencyCodeKRW]: {
            strSymbol: "₩",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [k.AI.k_ECurrencyCodeTRY]: {
            strSymbol: "TL",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [k.AI.k_ECurrencyCodeUAH]: {
            strSymbol: "₴",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [k.AI.k_ECurrencyCodeMXN]: { strSymbol: "Mex$", bSpaceForSymbol: !0 },
          [k.AI.k_ECurrencyCodeCAD]: { strSymbol: "CDN$", bSpaceForSymbol: !0 },
          [k.AI.k_ECurrencyCodeAUD]: { strSymbol: "A$", bSpaceForSymbol: !0 },
          [k.AI.k_ECurrencyCodeNZD]: { strSymbol: "NZ$", bSpaceForSymbol: !0 },
          [k.AI.k_ECurrencyCodeCNY]: { strSymbol: "¥", bSpaceForSymbol: !0 },
          [k.AI.k_ECurrencyCodeINR]: {
            strSymbol: "₹",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
          },
          [k.AI.k_ECurrencyCodeCLP]: {
            strSymbol: "CLP$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [k.AI.k_ECurrencyCodePEN]: { strSymbol: "S/." },
          [k.AI.k_ECurrencyCodeCOP]: {
            strSymbol: "COL$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [k.AI.k_ECurrencyCodeZAR]: {
            strSymbol: "R",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [k.AI.k_ECurrencyCodeHKD]: { strSymbol: "HK$", bSpaceForSymbol: !0 },
          [k.AI.k_ECurrencyCodeTWD]: {
            strSymbol: "NT$",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [k.AI.k_ECurrencyCodeSAR]: {
            strSymbol: "SR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [k.AI.k_ECurrencyCodeAED]: {
            strSymbol: "AED",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [k.AI.k_ECurrencyCodeSEK]: {
            strSymbol: "kr",
            bSpaceForSymbol: !0,
            bSuffixSymbol: !0,
          },
          [k.AI.k_ECurrencyCodeARS]: {
            strSymbol: "ARS$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [k.AI.k_ECurrencyCodeILS]: { strSymbol: "₪" },
          [k.AI.k_ECurrencyCodeBYN]: { strSymbol: "Br" },
          [k.AI.k_ECurrencyCodeKZT]: {
            strSymbol: "₸",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [k.AI.k_ECurrencyCodeKWD]: {
            strSymbol: "KD",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [k.AI.k_ECurrencyCodeQAR]: {
            strSymbol: "QR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [k.AI.k_ECurrencyCodeCRC]: {
            strSymbol: "₡",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [k.AI.k_ECurrencyCodeUYU]: {
            strSymbol: "$U",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [k.AI.k_ECurrencyCodeBGN]: {
            strSymbol: "лв",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [k.AI.k_ECurrencyCodeHRK]: {
            strSymbol: "kn",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [k.AI.k_ECurrencyCodeCZK]: {
            strSymbol: "Kč",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [k.AI.k_ECurrencyCodeDKK]: {
            strSymbol: "kr.",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [k.AI.k_ECurrencyCodeHUF]: {
            strSymbol: "Ft",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [k.AI.k_ECurrencyCodeRON]: {
            strSymbol: "lei",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [k.AI.k_ECurrencyCodeMax]: {},
        },
        m = {
          strSymbol: "",
          bSuffixSymbol: !1,
          bSpaceForSymbol: !1,
          bWholeUnitsOnly: !1,
          eCurrency: k.AI.k_ECurrencyCodeInvalid,
          strDecimalSymbol: ".",
          strThousandsSeparator: ",",
        };
      function I(e, r) {
        const n = (function (e) {
            return { ...m, ...A[e], eCurrency: e };
          })(r),
          {
            strSymbol: o,
            bSuffixSymbol: t,
            bSpaceForSymbol: c,
            bWholeUnitsOnly: u,
            strDecimalSymbol: C,
            strThousandsSeparator: a,
          } = n,
          s = e < 0,
          i = u && e % 100 == 0;
        s && (e = -e);
        const d = [];
        for (let r = 0; r < 2; r++)
          i || d.push(e % 10), (e = Math.floor(e / 10));
        !i && C && d.push(C);
        let y = 0;
        do {
          y++ % 3 == 0 && y > 2 && a && d.push(a),
            d.push(e % 10),
            (e = Math.floor(e / 10));
        } while (e > 0);
        const l = d.reverse().join(""),
          E = c ? " " : "",
          _ = s ? "-" : "";
        return t ? `${_}${l}${E}${o}` : `${_}${o}${E}${l}`;
      }
      var S = n(91934),
        b = n(64238),
        P = n.n(b),
        D = n(56011),
        h = n(65697);
      function R(e) {
        const {
            direction: r,
            ignoreHorizontal: n,
            ignoreVertical: o,
            dismissOnClick: t,
            interactionMode: u = 0,
          } = e,
          C = (0, c.useRef)(null),
          a = (0, c.useRef)(!1),
          s = (0, c.useRef)(!1),
          i = (0, c.useRef)(null),
          [d, y] = (0, c.useState)(!1),
          [l, E] = (0, c.useMemo)(
            () =>
              (function (e) {
                const [r, n] = (0, S.x)(e, "-");
                return "left" === r || "right" === r ? [void 0, r] : [r, n];
              })(r),
            [r],
          ),
          _ = (0, c.useCallback)(() => {
            if (!i.current || !C.current) return;
            const e = i.current.getBoundingClientRect();
            let r = E;
            const t = i.current.matches(":dir(rtl)");
            t && ("left" === E ? (r = "right") : "right" === E && (r = "left")),
              C.current.style.setProperty("--parentWidth", `${e.width}px`),
              C.current.style.setProperty("--parentHeight", `${e.height}px`),
              n ||
                ("left" === r
                  ? l
                    ? ((C.current.style.left = "unset"),
                      (C.current.style.right =
                        document.documentElement.clientWidth - e.right + "px"))
                    : ((C.current.style.left = "unset"),
                      (C.current.style.right =
                        document.documentElement.clientWidth - e.left + "px"))
                  : "right" === r
                    ? l
                      ? ((C.current.style.left = `${e.left}px`),
                        (C.current.style.right = "unset"))
                      : ((C.current.style.left = `${e.right}px`),
                        (C.current.style.right = "unset"))
                    : void 0 === r &&
                      (t
                        ? ((C.current.style.left = "unset"),
                          (C.current.style.right =
                            document.documentElement.clientWidth -
                            e.right +
                            "px"))
                        : ((C.current.style.left = `${e.left}px`),
                          (C.current.style.right = "unset")))),
              o ||
                ("down" === l
                  ? ((C.current.style.top = `${e.bottom}px`),
                    (C.current.style.bottom = "unset"),
                    C.current.style.setProperty(
                      "--availableHeight",
                      document.documentElement.clientHeight - e.bottom + "px",
                    ))
                  : "up" === l
                    ? ((C.current.style.top = "unset"),
                      (C.current.style.bottom =
                        document.documentElement.clientHeight - e.top + "px"),
                      C.current.style.setProperty(
                        "--availableHeight",
                        `${e.top}px`,
                      ))
                    : void 0 === l &&
                      ((C.current.style.top = `${e.top}px`),
                      (C.current.style.bottom = "unset"),
                      C.current.style.setProperty(
                        "--availableHeight",
                        document.documentElement.clientHeight - e.top + "px",
                      )));
          }, [E, n, o, l]),
          k = (0, c.useMemo)(() => {
            if (i.current) return (0, D._f)(i.current);
          }, [i.current]);
        (0, c.useEffect)(
          () =>
            d
              ? (C.current?.showPopover(),
                k?.addEventListener("scroll", _),
                () => k?.removeEventListener("scroll", _))
              : ("true" !=
                  window.sessionStorage.getItem("DEBUG_StickyContextMenus") &&
                  C.current?.hidePopover(),
                () => {}),
          [d, _, k],
        );
        const A = (0, c.useCallback)(() => {
            _(), y(!0), (s.current = !0);
          }, [_]),
          m = (0, c.useCallback)(() => {
            (s.current = !1), a.current || y(!1);
          }, []),
          I = (0, c.useCallback)(() => {
            (a.current = !0), y(!0);
          }, []),
          b = (0, c.useCallback)(() => {
            (a.current = !1), s.current || y(!1);
          }, []),
          P = (0, c.useCallback)(() => {
            b(), m();
          }, [b, m]),
          R = (0, c.useCallback)(
            (e) => {
              "Enter" === e.key && (e.preventDefault(), d ? m() : A());
            },
            [m, A, d],
          ),
          p = (0, c.useCallback)(
            (e) => {
              e.currentTarget.contains(e.relatedTarget) ||
                C.current?.contains(e.relatedTarget) ||
                m();
            },
            [m],
          ),
          g = (0, c.useCallback)(
            (e) => {
              const r =
                  e.relatedTarget && !e.currentTarget.contains(e.relatedTarget),
                n = !e.relatedTarget && !a.current;
              (r || n) && (b(), y(!1));
            },
            [b],
          ),
          f = (0, c.useCallback)(() => {
            d && t ? P() : A();
          }, [P, t, d, A]),
          N = (0, c.useCallback)(
            (e) => {
              "Enter" === e.key && d && t ? P() : A(),
                "Escape" === e.key && d && (P(), e.stopPropagation());
            },
            [P, t, d, A],
          ),
          K = 0 === u;
        let U;
        K && !d
          ? (U = (e) => {
              e.preventDefault(), A();
            })
          : K || (U = d ? m : A);
        const T = {
            "aria-expanded": d,
            role: "button",
            onMouseEnter: K ? A : void 0,
            onMouseLeave: K ? m : void 0,
            onClick: U,
            ref: i,
            onKeyDown: R,
            onBlur: p,
          },
          v = {
            popover: "manual",
            ref: C,
            onMouseEnter: I,
            onMouseLeave: b,
            onFocus: I,
            onBlur: g,
            onClick: f,
            onKeyDown: N,
            className: h.PopoverMenu,
          };
        return {
          isShowingMenu: d,
          triggerProps: T,
          menuProps: v,
          closeMenu: P,
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
      var p = n(7445),
        g = n(76217);
      function f(e, r) {
        return (n) => {
          e?.(n), r?.(n);
        };
      }
      function N(e) {
        const {
            direction: r,
            interactionMode: n = 0,
            ignoreHorizontal: o,
            ignoreVertical: t,
            dismissOnClick: u,
            menuTarget: C,
            className: a,
            children: s,
            renderWhenClosed: i = !0,
            ...d
          } = e,
          {
            isShowingMenu: y,
            triggerProps: l,
            menuProps: E,
            closeMenu: _,
          } = R(e),
          k = c.useRef(null),
          A = c.useRef(null);
        return (
          c.useEffect(() => {
            y
              ? A.current?.TakeFocus()
              : A.current?.BFocusWithin() && k.current?.TakeFocus();
          }, [y]),
          c.createElement(
            c.Fragment,
            null,
            c.cloneElement(C, {
              ...l,
              onMouseEnter: f(C.props.onMouseEnter, l.onMouseEnter),
              onMouseLeave: f(C.props.onMouseLeave, l.onMouseLeave),
              navRef: k,
            }),
            c.createElement(
              g.Z,
              {
                ...d,
                ...E,
                className: P()(E.className, a),
                navRef: A,
                onCancel: _,
                onFocusWithin: (e) => !e && _(),
                childFocusDisabled: !y,
              },
              c.createElement(p.q, null, (i || y) && s),
            ),
          )
        );
      }
      var K = n(48174),
        U = n(31389),
        T = n.n(U),
        v = n(42475);
      const w = {};
      (w.arabic = () => n.e(8650).then(n.t.bind(n, 88650, 19))),
        (w.brazilian = () => n.e(5980).then(n.t.bind(n, 25980, 19))),
        (w.bulgarian = () => n.e(8539).then(n.t.bind(n, 78539, 19))),
        (w.czech = () => n.e(5369).then(n.t.bind(n, 75369, 19))),
        (w.danish = () => n.e(6235).then(n.t.bind(n, 76235, 19))),
        (w.dutch = () => n.e(7956).then(n.t.bind(n, 7956, 19))),
        (w.english = () => n.e(2962).then(n.t.bind(n, 92962, 19))),
        (w.finnish = () => n.e(8777).then(n.t.bind(n, 88777, 19))),
        (w.french = () => n.e(7970).then(n.t.bind(n, 37970, 19))),
        (w.german = () => n.e(3612).then(n.t.bind(n, 63612, 19))),
        (w.greek = () => n.e(8846).then(n.t.bind(n, 48846, 19))),
        (w.hungarian = () => n.e(7431).then(n.t.bind(n, 19812, 19))),
        (w.indonesian = () => n.e(2334).then(n.t.bind(n, 42334, 19))),
        (w.italian = () => n.e(874).then(n.t.bind(n, 50874, 19))),
        (w.japanese = () => n.e(853).then(n.t.bind(n, 30853, 19))),
        (w.koreana = () => n.e(6309).then(n.t.bind(n, 6309, 19))),
        (w.latam = () => n.e(1805).then(n.t.bind(n, 61805, 19))),
        (w.norwegian = () => n.e(7406).then(n.t.bind(n, 27406, 19))),
        (w.polish = () => n.e(1259).then(n.t.bind(n, 91259, 19))),
        (w.portuguese = () => n.e(6551).then(n.t.bind(n, 66551, 19))),
        (w.romanian = () => n.e(1317).then(n.t.bind(n, 1317, 19))),
        (w.russian = () => n.e(3471).then(n.t.bind(n, 23471, 19))),
        (w.schinese = () => n.e(7350).then(n.t.bind(n, 67350, 19))),
        (w.spanish = () => n.e(1594).then(n.t.bind(n, 91594, 19))),
        (w.swedish = () => n.e(7491).then(n.t.bind(n, 47491, 19))),
        (w.tchinese = () => n.e(5965).then(n.t.bind(n, 75965, 19))),
        (w.thai = () => n.e(2912).then(n.t.bind(n, 2912, 19))),
        (w.turkish = () => n.e(4546).then(n.t.bind(n, 4546, 19))),
        (w.ukrainian = () => n.e(3444).then(n.t.bind(n, 73444, 19))),
        (w.vietnamese = () => n.e(2469).then(n.t.bind(n, 72469, 19)));
      const H = (0, v.l)(async function (e) {
        if (w[e]) return w[e]();
      });
      function M(e) {
        const r = c.createElement(
          "button",
          { className: T().PriceGuidelinesPicker },
          c.createElement(s.GB9, null),
        );
        return c.createElement(
          N,
          {
            menuTarget: r,
            direction: "down",
            interactionMode: 1,
            dismissOnClick: !0,
          },
          c.createElement(B, { ...e }),
        );
      }
      function B(e) {
        const { fnGetUSDPriceInCents: r, fnOnUpdate: n, strDescription: o } = e,
          t = (0, K.cT)(),
          u = r();
        if (!t) return null;
        const C = t.GetUSDPricePointsInCents();
        return c.createElement(
          "div",
          { className: T().GuidelinesPanel },
          c.createElement(
            "div",
            { className: T().GuidelinesDescription },
            o || H.Localize("#PricingGuideline_Default"),
          ),
          c.createElement(
            "div",
            { className: T().GuidelinesGrid },
            C.map((e) =>
              c.createElement(
                "button",
                {
                  key: e,
                  onClick: () => n(e),
                  className: (0, d.A)(
                    T().GridElement,
                    u == e && T().CurrentPrice,
                  ),
                },
                I(e, k.AI.k_ECurrencyCodeUSD),
              ),
            ),
          ),
        );
      }
      function L(e) {
        const { cell: r, row: n } = e,
          C = n.original.packageID,
          s = r.getValue(),
          {
            nPriceInCents: i,
            nPublishedPriceInCents: d,
            nProposedPriceInCents: y,
            fnSetPrice: E,
          } = (0, o.xQ)(C, s),
          [k, A, m] = (0, o.Wx)(i, s),
          I = (0, o.Gs)(s),
          S = c.useRef(void 0),
          b = C + s,
          { strClassName: P } = F(C, s),
          D = "USD" == s,
          h = y ?? d,
          R = i != h;
        return c.createElement(
          "div",
          { ref: S, onKeyDown: t.nm, className: P },
          R && c.createElement(Y, { nPriceInCents: i, nSavedPriceInCents: h }),
          k && c.createElement("div", { className: _().PricePrefix }, k),
          c.createElement(
            "div",
            { className: _().EditablePrice },
            c.createElement(a.pd, {
              value: A,
              className: _().PriceInput,
              onChange: (e) => {
                const r = e.target.value.replace(/[^0-9]/g, "");
                let n = Number(r || 0);
                if (Number.isNaN(n)) return;
                I.bWholeUnitsOnly && (n *= 100);
                const o = 2147483647;
                n > o && (n = o), E(n);
              },
              onFocus: (e) => {
                e.target.select(),
                  l.L.ShowElement(
                    S.current.ownerDocument,
                    c.createElement(
                      u.g,
                      {
                        target: S.current,
                        direction: "top",
                        bEnablePointerEvents: !0,
                        nBodyDistance: 0,
                      },
                      c.createElement(Z, {
                        key: b,
                        packageID: C,
                        strPriceKey: s,
                      }),
                    ),
                    b,
                  );
              },
              onBlur: () => {
                window.setTimeout(
                  () =>
                    S.current && l.L.HideElement(S.current.ownerDocument, b),
                  500,
                );
              },
            }),
          ),
          m && c.createElement("div", { className: _().PriceSuffix }, m),
          D && c.createElement(G, { packageID: C }),
          c.createElement(x, { packageID: C, strPriceKey: s }),
        );
      }
      function G(e) {
        const { packageID: r } = e,
          { fnApplyGuidelines: n } = (0, o.XE)();
        return c.createElement(M, {
          fnGetUSDPriceInCents: () => (0, o.FR)(r, "USD"),
          fnOnUpdate: (e) => {
            n(r, e);
          },
          strDescription: (0, y.we)(
            "#PricingDashboard_GuidelinesPickerDescription",
          ),
        });
      }
      function x(e) {
        const { packageID: r, strPriceKey: n } = e,
          { strPriceWarning: o, bBadPrice: t, bShowWarningIcon: u } = F(r, n);
        return u
          ? c.createElement(
              i.he,
              {
                className: _().PriceAlert,
                strTooltipClassname: _().HoverToolTip,
                toolTipContent: o,
                direction: "top",
              },
              c.createElement(s.eTF, {
                color: t ? "rgb(194, 45, 0)" : "#e5af37",
              }),
            )
          : null;
      }
      const W = 2;
      function F(e, r) {
        const {
            nPriceInCents: n,
            nPublishedPriceInCents: t,
            nProposedPriceInCents: u,
            nMinPriceInCents: C,
            nMaxPriceInCents: a,
            nMaxDiscountPercentage: s,
            nSuggestedPriceInCents: i,
          } = (0, o.xQ)(e, r),
          l = (0, o.d$)(e),
          E = "USD" == r,
          k = n != (u ?? t),
          A = n < C,
          m = !!a && n > a,
          I = !!i && n > i * W,
          S = !!i && n < i / W,
          b = !!i && n < i && !!s,
          P =
            (m && (0, y.we)("#PricingDashboard_PriceIncreaseDisallowed")) ||
            (A &&
              (0, y.we)(
                "#PricingDashboard_PriceTooLow",
                (0, o.Wx)(C, r).join(""),
              )) ||
            (I &&
              (0, y.we)(
                "#PricingDashboard_PriceMuchHigherThanGuidelines",
                (0, o.Wx)(i, r).join(""),
              )) ||
            (S &&
              (0, y.we)(
                "#PricingDashboard_PriceMuchLowerThanGuidelines",
                (0, o.Wx)(i, r).join(""),
              )) ||
            (b &&
              (0, y.we)(
                "#PricingDashboard_PriceCheapAndLowerThanGuidelines",
                s,
              )),
          D = m || A,
          h = I || S,
          R = D || h || b,
          p = !(k || !u || (t && u == t)),
          g = 4 == l?.eState,
          f = (0, d.A)(
            _().PriceCell,
            E && _().USD,
            k && _().ChangedLocally,
            p && _().ProposedPrice,
            g && _().ApprovedCanPublish,
            R && _().WarningPrice,
            h && _().SevereWarningPrice,
            D && _().BadPrice,
          );
        return c.useMemo(
          () => ({
            strPriceWarning: P,
            strClassName: f,
            bBadPrice: D,
            bShowSevereWarning: h,
            bShowWarningIcon: R,
          }),
          [P, f, D, h, R],
        );
      }
      function Y(e) {
        const { nPriceInCents: r, nSavedPriceInCents: n } = e;
        let o = null,
          t = null,
          u = null,
          C = null;
        if (n) {
          const e = Math.ceil((100 * (r - n)) / n),
            a = r > n;
          (u = a
            ? (0, y.we)("#PricingDashboard_PriceIncreaseBy", e + "%")
            : (0, y.we)("#PricingDashboard_PriceLowerBy", e + "%")),
            (C = (0, d.A)(_().PriceChange, a && _().PriceIncrease)),
            (t = c.createElement(
              "div",
              { className: _().PriceChangeArrow },
              c.createElement(s.i3G, { angle: a ? 0 : 180 }),
            )),
            (o = e + "%");
        } else
          (o = (0, y.we)("#PricingDashboard_PriceIsNew_Short")),
            (C = (0, d.A)(_().NewPrice));
        return c.createElement(
          i.he,
          {
            className: C,
            strTooltipClassname: _().HoverToolTip,
            toolTipContent: u,
            direction: "top",
          },
          t,
          o,
        );
      }
      function O(e) {
        return new Date(1e3 * e).toLocaleString(y.pf.GetPreferredLocales(), {
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
            nPriceInCents: t,
            nPublishedPriceInCents: u,
            nProposedPriceInCents: a,
            nSuggestedPriceInCents: s,
            fnSetPrice: l,
          } = (0, o.xQ)(r, n),
          { nPriceInCents: E } = (0, o.xQ)(r, "USD"),
          k = !(!a || (u && a == u)),
          A = (0, o.d$)(r),
          m = A && O(A.rtSubmitted),
          I = (0, C.z0)(A?.submitterID),
          S = I ? I.m_strPlayerName : A?.submitterID;
        return c.createElement(
          "div",
          { className: _().PricePopout },
          !!u &&
            c.createElement(
              i.he,
              {
                className: _().DetailRow,
                direction: "left",
                toolTipContent: (0, y.we)(
                  "#PricingDashboard_CurrentPriceOnStore_ttip",
                ),
              },
              c.createElement(
                "div",
                { className: _().DetailLabel },
                (0, y.we)("#PricingDashboard_CurrentPriceOnStore"),
              ),
              c.createElement(
                "div",
                { className: _().DetailPrice },
                (0, o.Wx)(u, n).join(""),
              ),
              c.createElement(
                i.he,
                {
                  className: (0, d.A)(_().DetailButton, u == t && _().Disabled),
                  onClick: () => l(u),
                  bDisabled: u == t,
                  toolTipContent: (0, y.we)(
                    "#PricingDashboard_UseThisOldPrice_ttip",
                  ),
                },
                (0, y.we)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
          k &&
            c.createElement(
              i.he,
              {
                className: _().DetailRow,
                direction: "left",
                toolTipContent: (0, y.we)(
                  "#PricingDashboard_ProposedPrice_ttip",
                  S,
                  m,
                ),
              },
              c.createElement(
                "div",
                { className: _().DetailLabel },
                (0, y.we)("#PricingDashboard_ProposedPrice"),
              ),
              c.createElement(
                "div",
                { className: _().DetailPrice },
                (0, o.Wx)(a, n).join(""),
              ),
              c.createElement(
                i.he,
                {
                  className: (0, d.A)(_().DetailButton, a == t && _().Disabled),
                  onClick: () => l(a),
                  bDisabled: a == t,
                  toolTipContent: (0, y.we)(
                    "#PricingDashboard_UseThisNewPrice_ttip",
                  ),
                },
                (0, y.we)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
          !!s &&
            c.createElement(
              i.he,
              {
                className: _().DetailRow,
                direction: "left",
                toolTipContent: (0, y.we)(
                  "#PricingDashboard_SuggestedPrice_ttip",
                  (0, o.Wx)(E, "USD").join(""),
                ),
              },
              c.createElement(
                "div",
                { className: _().DetailLabel },
                (0, y.we)("#PricingDashboard_SuggestedPrice"),
              ),
              c.createElement(
                "div",
                { className: _().DetailPrice },
                (0, o.Wx)(s, n).join(""),
              ),
              c.createElement(
                i.he,
                {
                  className: (0, d.A)(_().DetailButton, s == t && _().Disabled),
                  onClick: () => l(s),
                  bDisabled: s == t,
                  toolTipContent: (0, y.we)(
                    "#PricingDashboard_UseThisNewPrice_ttip",
                  ),
                },
                (0, y.we)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
        );
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
    48174: (e, r, n) => {
      "use strict";
      n.d(r, { mj: () => s, cT: () => a });
      var o = n(27863);
      class t {
        m_mapUSDPrice = new Map();
        m_mapKeyToGuidePrice = new Map();
        m_rgUSDPricePointInCents = [];
        GetKey(e, r, n, t = 1) {
          return `${e}_${r}_${n || o.Rm.k_ERegionCodeInvalid}_${t}`;
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
            const n = e.conversion_method ?? 1;
            this.m_mapUSDPrice.has(n) || this.m_mapUSDPrice.set(n, new Map());
            this.m_mapUSDPrice.get(n).set(e.usd_price, e),
              r.add(e.usd_price),
              e.currency_prices.forEach((r) => {
                const n = this.GetKey(
                  e.usd_price,
                  r.currency_code,
                  o.Rm.k_ERegionCodeInvalid,
                  e.conversion_method || 1,
                );
                this.m_mapKeyToGuidePrice.set(n, r);
              }),
              e.region_prices.forEach((r) => {
                const n = this.GetKey(
                  e.usd_price,
                  r.currency_code,
                  r.region_code,
                  e.conversion_method || 1,
                );
                this.m_mapKeyToGuidePrice.set(n, r);
              });
          }),
            (this.m_rgUSDPricePointInCents = Array.from(r.keys()));
        }
      }
      var c = n(7860),
        u = n(24484);
      var C = n(20194);
      function a() {
        const e = (0, C.I)({
          queryKey: ["PricingGuideline"],
          queryFn: async () =>
            await (function () {
              let e = (0, u.Fd)("pricing_guideline", "application_config");
              if (e) return Promise.resolve(e);
              {
                const e = c.L.getQueryData(["PricingGuideline"]);
                return Promise.resolve(e ?? null);
              }
            })(),
        });
        return e.data ? new t(e.data) : null;
      }
      function s() {
        return ["PricingGuideline"];
      }
    },
    27863: (e, r, n) => {
      "use strict";
      n.d(r, {
        AI: () => t.AI,
        M1: () => c,
        Ug: () => u,
        pd: () => C,
        Rm: () => o,
        k8: () => i,
        j4: () => l,
        de: () => d,
        bS: () => s,
        t_: () => a,
        uF: () => y,
        JA: () => E,
        iy: () => _,
      });
      var o,
        t = n(88267);
      function c(e) {
        switch (e) {
          case t.AI.k_ECurrencyCodeGBP:
            return "GBP";
          case t.AI.k_ECurrencyCodeEUR:
            return "EUR";
          case t.AI.k_ECurrencyCodeCHF:
            return "CHF";
          case t.AI.k_ECurrencyCodeRUB:
            return "RUB";
          case t.AI.k_ECurrencyCodePLN:
            return "PLN";
          case t.AI.k_ECurrencyCodeBRL:
            return "BRL";
          case t.AI.k_ECurrencyCodeJPY:
            return "JPY";
          case t.AI.k_ECurrencyCodeNOK:
            return "NOK";
          case t.AI.k_ECurrencyCodeIDR:
            return "IDR";
          case t.AI.k_ECurrencyCodeMYR:
            return "MYR";
          case t.AI.k_ECurrencyCodePHP:
            return "PHP";
          case t.AI.k_ECurrencyCodeSGD:
            return "SGD";
          case t.AI.k_ECurrencyCodeTHB:
            return "THB";
          case t.AI.k_ECurrencyCodeVND:
            return "VND";
          case t.AI.k_ECurrencyCodeKRW:
            return "KRW";
          case t.AI.k_ECurrencyCodeTRY:
            return "TRY";
          case t.AI.k_ECurrencyCodeUAH:
            return "UAH";
          case t.AI.k_ECurrencyCodeMXN:
            return "MXN";
          case t.AI.k_ECurrencyCodeCAD:
            return "CAD";
          case t.AI.k_ECurrencyCodeAUD:
            return "AUD";
          case t.AI.k_ECurrencyCodeNZD:
            return "NZD";
          case t.AI.k_ECurrencyCodeCNY:
            return "CNY";
          case t.AI.k_ECurrencyCodeINR:
            return "INR";
          case t.AI.k_ECurrencyCodeCLP:
            return "CLP";
          case t.AI.k_ECurrencyCodePEN:
            return "PEN";
          case t.AI.k_ECurrencyCodeCOP:
            return "COP";
          case t.AI.k_ECurrencyCodeZAR:
            return "ZAR";
          case t.AI.k_ECurrencyCodeHKD:
            return "HKD";
          case t.AI.k_ECurrencyCodeTWD:
            return "TWD";
          case t.AI.k_ECurrencyCodeSAR:
            return "SAR";
          case t.AI.k_ECurrencyCodeAED:
            return "AED";
          case t.AI.k_ECurrencyCodeSEK:
            return "SEK";
          case t.AI.k_ECurrencyCodeARS:
            return "ARS";
          case t.AI.k_ECurrencyCodeILS:
            return "ILS";
          case t.AI.k_ECurrencyCodeBYN:
            return "BYN";
          case t.AI.k_ECurrencyCodeKZT:
            return "KZT";
          case t.AI.k_ECurrencyCodeKWD:
            return "KWD";
          case t.AI.k_ECurrencyCodeQAR:
            return "QAR";
          case t.AI.k_ECurrencyCodeCRC:
            return "CRC";
          case t.AI.k_ECurrencyCodeUYU:
            return "UYU";
          case t.AI.k_ECurrencyCodeBGN:
            return "BGN";
          case t.AI.k_ECurrencyCodeHRK:
            return "HRK";
          case t.AI.k_ECurrencyCodeCZK:
            return "CZK";
          case t.AI.k_ECurrencyCodeDKK:
            return "DKK";
          case t.AI.k_ECurrencyCodeHUF:
            return "HUF";
          case t.AI.k_ECurrencyCodeRON:
            return "RON";
          default:
            return "USD";
        }
      }
      function u(e) {
        switch (e) {
          case t.AI.k_ECurrencyCodeUSD:
            return "US Dollar";
          case t.AI.k_ECurrencyCodeGBP:
            return "GB Pounds";
          case t.AI.k_ECurrencyCodeEUR:
            return "Euros";
          case t.AI.k_ECurrencyCodeCHF:
            return "Swiss Francs";
          case t.AI.k_ECurrencyCodeRUB:
            return "Russian Rubles";
          case t.AI.k_ECurrencyCodePLN:
            return "Polish zloty";
          case t.AI.k_ECurrencyCodeBRL:
            return "Brazilian Reals";
          case t.AI.k_ECurrencyCodeJPY:
            return "Japanese Yen";
          case t.AI.k_ECurrencyCodeNOK:
            return "Norwegian Krone";
          case t.AI.k_ECurrencyCodeIDR:
            return "Indonesian Rupiah";
          case t.AI.k_ECurrencyCodeMYR:
            return "Malaysian Ringgit";
          case t.AI.k_ECurrencyCodePHP:
            return "Philippine Peso";
          case t.AI.k_ECurrencyCodeSGD:
            return "Singapore Dollar";
          case t.AI.k_ECurrencyCodeTHB:
            return "Thai Baht";
          case t.AI.k_ECurrencyCodeVND:
            return "Vietnamese Dong";
          case t.AI.k_ECurrencyCodeKRW:
            return "Korean Won";
          case t.AI.k_ECurrencyCodeTRY:
            return "Turkish Lira";
          case t.AI.k_ECurrencyCodeUAH:
            return "Ukrainian Hryvnia";
          case t.AI.k_ECurrencyCodeMXN:
            return "Mexican Peso";
          case t.AI.k_ECurrencyCodeCAD:
            return "Canadian Dollar";
          case t.AI.k_ECurrencyCodeAUD:
            return "Australian Dollar";
          case t.AI.k_ECurrencyCodeNZD:
            return "New Zealand Dollar";
          case t.AI.k_ECurrencyCodeCNY:
            return "Chinese Yuan";
          case t.AI.k_ECurrencyCodeINR:
            return "Indian Rupee";
          case t.AI.k_ECurrencyCodeCLP:
            return "Chilean Peso";
          case t.AI.k_ECurrencyCodePEN:
            return "Peruvian Sol";
          case t.AI.k_ECurrencyCodeCOP:
            return "Colombian Peso";
          case t.AI.k_ECurrencyCodeZAR:
            return "South African Rand";
          case t.AI.k_ECurrencyCodeHKD:
            return "Hong Kong Dollar";
          case t.AI.k_ECurrencyCodeTWD:
            return "Taiwanese Dollar";
          case t.AI.k_ECurrencyCodeSAR:
            return "Saudi Arabian Riyal";
          case t.AI.k_ECurrencyCodeAED:
            return "Emirati Dirham";
          case t.AI.k_ECurrencyCodeSEK:
            return "Swedish Krona";
          case t.AI.k_ECurrencyCodeARS:
            return "Argentine Peso";
          case t.AI.k_ECurrencyCodeILS:
            return "Israeli New Shequel";
          case t.AI.k_ECurrencyCodeBYN:
            return "Belarusian Ruble";
          case t.AI.k_ECurrencyCodeKZT:
            return "Kazakhstani Tenge";
          case t.AI.k_ECurrencyCodeKWD:
            return "Kuwaiti Dinar";
          case t.AI.k_ECurrencyCodeQAR:
            return "Qatari Rial";
          case t.AI.k_ECurrencyCodeCRC:
            return "Costa Rican Colon";
          case t.AI.k_ECurrencyCodeUYU:
            return "Uruguayan Peso";
          case t.AI.k_ECurrencyCodeBGN:
            return "Bulgarian lev";
          case t.AI.k_ECurrencyCodeHRK:
            return "Croatian kuna";
          case t.AI.k_ECurrencyCodeCZK:
            return "Czech koruna";
          case t.AI.k_ECurrencyCodeDKK:
            return "Danish krone";
          case t.AI.k_ECurrencyCodeHUF:
            return "Hungarian forint";
          case t.AI.k_ECurrencyCodeRON:
            return "Romanian leu";
          default:
            return "";
        }
      }
      function C(e, r = o.k_ERegionCodeInvalid) {
        switch (e) {
          case t.AI.k_ECurrencyCodeGBP:
            return "gbp";
          case t.AI.k_ECurrencyCodeEUR:
            return "eur";
          case t.AI.k_ECurrencyCodeCHF:
            return "chf";
          case t.AI.k_ECurrencyCodeRUB:
            return "rub";
          case t.AI.k_ECurrencyCodePLN:
            return "pln";
          case t.AI.k_ECurrencyCodeBRL:
            return "brl";
          case t.AI.k_ECurrencyCodeJPY:
            return "jpy";
          case t.AI.k_ECurrencyCodeNOK:
            return "nok";
          case t.AI.k_ECurrencyCodeIDR:
            return "idr";
          case t.AI.k_ECurrencyCodeMYR:
            return "myr";
          case t.AI.k_ECurrencyCodePHP:
            return "php";
          case t.AI.k_ECurrencyCodeSGD:
            return "sgd";
          case t.AI.k_ECurrencyCodeTHB:
            return "thb";
          case t.AI.k_ECurrencyCodeVND:
            return "vnd";
          case t.AI.k_ECurrencyCodeKRW:
            return "krw";
          case t.AI.k_ECurrencyCodeTRY:
            return "try";
          case t.AI.k_ECurrencyCodeUAH:
            return "uah";
          case t.AI.k_ECurrencyCodeMXN:
            return "mxn";
          case t.AI.k_ECurrencyCodeCAD:
            return "cad";
          case t.AI.k_ECurrencyCodeAUD:
            return "aud";
          case t.AI.k_ECurrencyCodeNZD:
            return "nzd";
          case t.AI.k_ECurrencyCodeCNY:
            return "cny";
          case t.AI.k_ECurrencyCodeINR:
            return "inr";
          case t.AI.k_ECurrencyCodeCLP:
            return "clp";
          case t.AI.k_ECurrencyCodePEN:
            return "pen";
          case t.AI.k_ECurrencyCodeCOP:
            return "cop";
          case t.AI.k_ECurrencyCodeZAR:
            return "zar";
          case t.AI.k_ECurrencyCodeHKD:
            return "hkd";
          case t.AI.k_ECurrencyCodeTWD:
            return "twd";
          case t.AI.k_ECurrencyCodeSAR:
            return "sar";
          case t.AI.k_ECurrencyCodeAED:
            return "aed";
          case t.AI.k_ECurrencyCodeSEK:
            return "sek";
          case t.AI.k_ECurrencyCodeARS:
            return "ars";
          case t.AI.k_ECurrencyCodeILS:
            return "ils";
          case t.AI.k_ECurrencyCodeBYN:
            return "byn";
          case t.AI.k_ECurrencyCodeKZT:
            return "kzt";
          case t.AI.k_ECurrencyCodeKWD:
            return "kwd";
          case t.AI.k_ECurrencyCodeQAR:
            return "qar";
          case t.AI.k_ECurrencyCodeCRC:
            return "crc";
          case t.AI.k_ECurrencyCodeUYU:
            return "uyu";
          case t.AI.k_ECurrencyCodeBGN:
            return "bgn";
          case t.AI.k_ECurrencyCodeHRK:
            return "hrk";
          case t.AI.k_ECurrencyCodeCZK:
            return "czk";
          case t.AI.k_ECurrencyCodeDKK:
            return "dkk";
          case t.AI.k_ECurrencyCodeHUF:
            return "huf";
          case t.AI.k_ECurrencyCodeRON:
            return "ron";
          default:
            return r == o.k_ERegionCodeCIS
              ? "usd_cis"
              : r == o.k_ERegionCodeSAsia
                ? "usd_sasia"
                : r == o.k_ERegionCodeLATAM
                  ? "usd_latam"
                  : r == o.k_ERegionCodeMENA
                    ? "usd_mena"
                    : "usd";
        }
      }
      function a(e) {
        return `${u(
          (function (e) {
            switch (e) {
              case "USD":
                return t.AI.k_ECurrencyCodeUSD;
              case "GBP":
                return t.AI.k_ECurrencyCodeGBP;
              case "EUR":
                return t.AI.k_ECurrencyCodeEUR;
              case "CHF":
                return t.AI.k_ECurrencyCodeCHF;
              case "RUB":
                return t.AI.k_ECurrencyCodeRUB;
              case "PLN":
                return t.AI.k_ECurrencyCodePLN;
              case "BRL":
                return t.AI.k_ECurrencyCodeBRL;
              case "JPY":
                return t.AI.k_ECurrencyCodeJPY;
              case "NOK":
                return t.AI.k_ECurrencyCodeNOK;
              case "IDR":
                return t.AI.k_ECurrencyCodeIDR;
              case "MYR":
                return t.AI.k_ECurrencyCodeMYR;
              case "PHP":
                return t.AI.k_ECurrencyCodePHP;
              case "SGD":
                return t.AI.k_ECurrencyCodeSGD;
              case "THB":
                return t.AI.k_ECurrencyCodeTHB;
              case "VND":
                return t.AI.k_ECurrencyCodeVND;
              case "KRW":
                return t.AI.k_ECurrencyCodeKRW;
              case "TRY":
                return t.AI.k_ECurrencyCodeTRY;
              case "UAH":
                return t.AI.k_ECurrencyCodeUAH;
              case "MXN":
                return t.AI.k_ECurrencyCodeMXN;
              case "CAD":
                return t.AI.k_ECurrencyCodeCAD;
              case "AUD":
                return t.AI.k_ECurrencyCodeAUD;
              case "NZD":
                return t.AI.k_ECurrencyCodeNZD;
              case "CNY":
                return t.AI.k_ECurrencyCodeCNY;
              case "INR":
                return t.AI.k_ECurrencyCodeINR;
              case "CLP":
                return t.AI.k_ECurrencyCodeCLP;
              case "PEN":
                return t.AI.k_ECurrencyCodePEN;
              case "COP":
                return t.AI.k_ECurrencyCodeCOP;
              case "ZAR":
                return t.AI.k_ECurrencyCodeZAR;
              case "HKD":
                return t.AI.k_ECurrencyCodeHKD;
              case "TWD":
                return t.AI.k_ECurrencyCodeTWD;
              case "SAR":
                return t.AI.k_ECurrencyCodeSAR;
              case "AED":
                return t.AI.k_ECurrencyCodeAED;
              case "SEK":
                return t.AI.k_ECurrencyCodeSEK;
              case "ARS":
                return t.AI.k_ECurrencyCodeARS;
              case "ILS":
                return t.AI.k_ECurrencyCodeILS;
              case "BYN":
                return t.AI.k_ECurrencyCodeBYN;
              case "KZT":
                return t.AI.k_ECurrencyCodeKZT;
              case "KWD":
                return t.AI.k_ECurrencyCodeKWD;
              case "QAR":
                return t.AI.k_ECurrencyCodeQAR;
              case "CRC":
                return t.AI.k_ECurrencyCodeCRC;
              case "UYU":
                return t.AI.k_ECurrencyCodeUYU;
              case "BGN":
                return t.AI.k_ECurrencyCodeBGN;
              case "HRK":
                return t.AI.k_ECurrencyCodeHRK;
              case "CZK":
                return t.AI.k_ECurrencyCodeCZK;
              case "DKK":
                return t.AI.k_ECurrencyCodeDKK;
              case "HUF":
                return t.AI.k_ECurrencyCodeHUF;
              case "RON":
                return t.AI.k_ECurrencyCodeRON;
              default:
                return t.AI.k_ECurrencyCodeInvalid;
            }
          })(e.toUpperCase()),
        )} (${e})`;
      }
      function s(e) {
        return t.AI.k_ECurrencyCodeUSD;
      }
      function i(e) {
        switch (e) {
          case o.k_ERegionCodeCIS:
            return "usd_cis";
          case o.k_ERegionCodeSAsia:
            return "usd_sasia";
          case o.k_ERegionCodeLATAM:
            return "usd_latam";
          case o.k_ERegionCodeMENA:
            return "usd_mena";
          default:
            return "usd_invalid";
        }
      }
      function d(e) {
        switch (e) {
          case o.k_ERegionCodeCIS:
            return "CIS";
          case o.k_ERegionCodeSAsia:
            return "SASIA";
          case o.k_ERegionCodeLATAM:
            return "LATAM";
          case o.k_ERegionCodeMENA:
            return "MENA";
          default:
            return "Invalid Region";
        }
      }
      function y(e) {
        switch (e) {
          case "CIS":
            return o.k_ERegionCodeCIS;
          case "SASIA":
            return o.k_ERegionCodeSAsia;
          case "LATAM":
            return o.k_ERegionCodeLATAM;
          case "MENA":
            return o.k_ERegionCodeMENA;
          default:
            return o.k_ERegionCodeInvalid;
        }
      }
      function l(e) {
        switch (e) {
          case o.k_ERegionCodeCIS:
            return "The Commonwealth of Independent Stats";
          case o.k_ERegionCodeSAsia:
            return "South Asia";
          case o.k_ERegionCodeLATAM:
            return "Latin America";
          case o.k_ERegionCodeMENA:
            return "Middle East and North Africa";
          default:
            return "Invalid Region";
        }
      }
      !(function (e) {
        (e[(e.k_ERegionCodeInvalid = 0)] = "k_ERegionCodeInvalid"),
          (e[(e.k_ERegionCodeCIS = 1)] = "k_ERegionCodeCIS"),
          (e[(e.k_ERegionCodeSAsia = 2)] = "k_ERegionCodeSAsia"),
          (e[(e.k_ERegionCodeLATAM = 3)] = "k_ERegionCodeLATAM"),
          (e[(e.k_ERegionCodeMENA = 4)] = "k_ERegionCodeMENA"),
          (e[(e.k_ERegionCodeMax = 5)] = "k_ERegionCodeMax");
      })(o || (o = {}));
      const E = (0, t.yv)(),
        _ =
          ((0, t.X5)(),
          [
            o.k_ERegionCodeCIS,
            o.k_ERegionCodeSAsia,
            o.k_ERegionCodeLATAM,
            o.k_ERegionCodeMENA,
          ]);
    },
  },
]);

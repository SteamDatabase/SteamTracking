/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6739],
  {
    21850: (e, t, r) => {
      r.d(t, { Z: () => a });
      var i =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function n(e, t) {
        if (e.length !== t.length) return !1;
        for (var r = 0; r < e.length; r++)
          if (((n = e[r]), (a = t[r]), !(n === a || (i(n) && i(a))))) return !1;
        var n, a;
        return !0;
      }
      const a = function (e, t) {
        var r;
        void 0 === t && (t = n);
        var i,
          a = [],
          s = !1;
        return function () {
          for (var n = [], o = 0; o < arguments.length; o++)
            n[o] = arguments[o];
          return (
            (s && r === this && t(n, a)) ||
              ((i = e.apply(this, n)), (s = !0), (r = this), (a = n)),
            i
          );
        };
      };
    },
    72638: (e, t, r) => {
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
          },
        n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, r, i) {
            return r && e(t.prototype, r), i && e(t, i), t;
          };
        })(),
        a = r(89526),
        s = l(a),
        o = l(r(2652));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = {
          position: "absolute",
          top: 0,
          left: 0,
          visibility: "hidden",
          height: 0,
          overflow: "scroll",
          whiteSpace: "pre",
        },
        u = [
          "extraWidth",
          "injectStyles",
          "inputClassName",
          "inputRef",
          "inputStyle",
          "minWidth",
          "onAutosize",
          "placeholderIsMinWidth",
        ],
        d = function (e, t) {
          (t.style.fontSize = e.fontSize),
            (t.style.fontFamily = e.fontFamily),
            (t.style.fontWeight = e.fontWeight),
            (t.style.fontStyle = e.fontStyle),
            (t.style.letterSpacing = e.letterSpacing),
            (t.style.textTransform = e.textTransform);
        },
        m =
          !("undefined" == typeof window || !window.navigator) &&
          /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent),
        p = function () {
          return m ? "_" + Math.random().toString(36).substr(2, 12) : void 0;
        },
        b = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var r = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (r.inputRef = function (e) {
                (r.input = e),
                  "function" == typeof r.props.inputRef && r.props.inputRef(e);
              }),
              (r.placeHolderSizerRef = function (e) {
                r.placeHolderSizer = e;
              }),
              (r.sizerRef = function (e) {
                r.sizer = e;
              }),
              (r.state = {
                inputWidth: e.minWidth,
                inputId: e.id || p(),
                prevId: e.id,
              }),
              r
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            n(t, null, [
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  var r = e.id;
                  return r !== t.prevId
                    ? { inputId: r || p(), prevId: r }
                    : null;
                },
              },
            ]),
            n(t, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.mounted = !0),
                    this.copyInputStyles(),
                    this.updateInputWidth();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  t.inputWidth !== this.state.inputWidth &&
                    "function" == typeof this.props.onAutosize &&
                    this.props.onAutosize(this.state.inputWidth),
                    this.updateInputWidth();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                },
              },
              {
                key: "copyInputStyles",
                value: function () {
                  if (this.mounted && window.getComputedStyle) {
                    var e = this.input && window.getComputedStyle(this.input);
                    e &&
                      (d(e, this.sizer),
                      this.placeHolderSizer && d(e, this.placeHolderSizer));
                  }
                },
              },
              {
                key: "updateInputWidth",
                value: function () {
                  if (
                    this.mounted &&
                    this.sizer &&
                    void 0 !== this.sizer.scrollWidth
                  ) {
                    var e = void 0;
                    (e =
                      this.props.placeholder &&
                      (!this.props.value ||
                        (this.props.value && this.props.placeholderIsMinWidth))
                        ? Math.max(
                            this.sizer.scrollWidth,
                            this.placeHolderSizer.scrollWidth,
                          ) + 2
                        : this.sizer.scrollWidth + 2),
                      (e +=
                        "number" === this.props.type &&
                        void 0 === this.props.extraWidth
                          ? 16
                          : parseInt(this.props.extraWidth) || 0) <
                        this.props.minWidth && (e = this.props.minWidth),
                      e !== this.state.inputWidth &&
                        this.setState({ inputWidth: e });
                  }
                },
              },
              {
                key: "getInput",
                value: function () {
                  return this.input;
                },
              },
              {
                key: "focus",
                value: function () {
                  this.input.focus();
                },
              },
              {
                key: "blur",
                value: function () {
                  this.input.blur();
                },
              },
              {
                key: "select",
                value: function () {
                  this.input.select();
                },
              },
              {
                key: "renderStyles",
                value: function () {
                  var e = this.props.injectStyles;
                  return m && e
                    ? s.default.createElement("style", {
                        dangerouslySetInnerHTML: {
                          __html:
                            "input#" +
                            this.state.inputId +
                            "::-ms-clear {display: none;}",
                        },
                      })
                    : null;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = [
                      this.props.defaultValue,
                      this.props.value,
                      "",
                    ].reduce(function (e, t) {
                      return null != e ? e : t;
                    }),
                    t = i({}, this.props.style);
                  t.display || (t.display = "inline-block");
                  var r = i(
                      {
                        boxSizing: "content-box",
                        width: this.state.inputWidth + "px",
                      },
                      this.props.inputStyle,
                    ),
                    n = (function (e, t) {
                      var r = {};
                      for (var i in e)
                        t.indexOf(i) >= 0 ||
                          (Object.prototype.hasOwnProperty.call(e, i) &&
                            (r[i] = e[i]));
                      return r;
                    })(this.props, []);
                  return (
                    (function (e) {
                      u.forEach(function (t) {
                        return delete e[t];
                      });
                    })(n),
                    (n.className = this.props.inputClassName),
                    (n.id = this.state.inputId),
                    (n.style = r),
                    s.default.createElement(
                      "div",
                      { className: this.props.className, style: t },
                      this.renderStyles(),
                      s.default.createElement(
                        "input",
                        i({}, n, { ref: this.inputRef }),
                      ),
                      s.default.createElement(
                        "div",
                        { ref: this.sizerRef, style: c },
                        e,
                      ),
                      this.props.placeholder
                        ? s.default.createElement(
                            "div",
                            { ref: this.placeHolderSizerRef, style: c },
                            this.props.placeholder,
                          )
                        : null,
                    )
                  );
                },
              },
            ]),
            t
          );
        })(a.Component);
      (b.propTypes = {
        className: o.default.string,
        defaultValue: o.default.any,
        extraWidth: o.default.oneOfType([o.default.number, o.default.string]),
        id: o.default.string,
        injectStyles: o.default.bool,
        inputClassName: o.default.string,
        inputRef: o.default.func,
        inputStyle: o.default.object,
        minWidth: o.default.oneOfType([o.default.number, o.default.string]),
        onAutosize: o.default.func,
        onChange: o.default.func,
        placeholder: o.default.string,
        placeholderIsMinWidth: o.default.bool,
        style: o.default.object,
        value: o.default.any,
      }),
        (b.defaultProps = { minWidth: 1, injectStyles: !0 }),
        (t.Z = b);
    },
    18030: (e, t, r) => {
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      r.d(t, { ZP: () => rr });
      var n = r(59900),
        a = r(80374);
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && (0, a.Z)(e, t);
      }
      var o = r(7209),
        l = r(14771);
      function c(e, t) {
        if (t && ("object" === (0, o.Z)(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (0, l.Z)(e);
      }
      function u(e) {
        return (
          (u = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          u(e)
        );
      }
      var d = r(89526),
        m = r(21850),
        p = r(74289);
      var b = (function () {
        function e(e) {
          (this.isSpeedy = void 0 === e.speedy || e.speedy),
            (this.tags = []),
            (this.ctr = 0),
            (this.nonce = e.nonce),
            (this.key = e.key),
            (this.container = e.container),
            (this.before = null);
        }
        var t = e.prototype;
        return (
          (t.insert = function (e) {
            if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
              var t,
                r = (function (e) {
                  var t = document.createElement("style");
                  return (
                    t.setAttribute("data-emotion", e.key),
                    void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                    t.appendChild(document.createTextNode("")),
                    t
                  );
                })(this);
              (t =
                0 === this.tags.length
                  ? this.before
                  : this.tags[this.tags.length - 1].nextSibling),
                this.container.insertBefore(r, t),
                this.tags.push(r);
            }
            var i = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
              var n = (function (e) {
                if (e.sheet) return e.sheet;
                for (var t = 0; t < document.styleSheets.length; t++)
                  if (document.styleSheets[t].ownerNode === e)
                    return document.styleSheets[t];
              })(i);
              try {
                var a = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
                n.insertRule(e, a ? 0 : n.cssRules.length);
              } catch (e) {
                0;
              }
            } else i.appendChild(document.createTextNode(e));
            this.ctr++;
          }),
          (t.flush = function () {
            this.tags.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
              (this.tags = []),
              (this.ctr = 0);
          }),
          e
        );
      })();
      const f = function (e) {
        function t(e, i, l, c, m) {
          for (
            var p,
              b,
              f,
              B,
              h,
              v = 0,
              S = 0,
              F = 0,
              M = 0,
              R = 0,
              W = 0,
              I = (f = p = 0),
              A = 0,
              x = 0,
              P = 0,
              D = 0,
              U = l.length,
              X = U - 1,
              N = "",
              L = "",
              V = "",
              G = "";
            A < U;

          ) {
            if (
              ((b = l.charCodeAt(A)),
              A === X &&
                0 !== S + M + F + v &&
                (0 !== S && (b = 47 === S ? 10 : 47),
                (M = F = v = 0),
                U++,
                X++),
              0 === S + M + F + v)
            ) {
              if (
                A === X &&
                (0 < x && (N = N.replace(d, "")), 0 < N.trim().length)
              ) {
                switch (b) {
                  case 32:
                  case 9:
                  case 59:
                  case 13:
                  case 10:
                    break;
                  default:
                    N += l.charAt(A);
                }
                b = 59;
              }
              switch (b) {
                case 123:
                  for (
                    p = (N = N.trim()).charCodeAt(0), f = 1, D = ++A;
                    A < U;

                  ) {
                    switch ((b = l.charCodeAt(A))) {
                      case 123:
                        f++;
                        break;
                      case 125:
                        f--;
                        break;
                      case 47:
                        switch ((b = l.charCodeAt(A + 1))) {
                          case 42:
                          case 47:
                            e: {
                              for (I = A + 1; I < X; ++I)
                                switch (l.charCodeAt(I)) {
                                  case 47:
                                    if (
                                      42 === b &&
                                      42 === l.charCodeAt(I - 1) &&
                                      A + 2 !== I
                                    ) {
                                      A = I + 1;
                                      break e;
                                    }
                                    break;
                                  case 10:
                                    if (47 === b) {
                                      A = I + 1;
                                      break e;
                                    }
                                }
                              A = I;
                            }
                        }
                        break;
                      case 91:
                        b++;
                      case 40:
                        b++;
                      case 34:
                      case 39:
                        for (; A++ < X && l.charCodeAt(A) !== b; );
                    }
                    if (0 === f) break;
                    A++;
                  }
                  if (
                    ((f = l.substring(D, A)),
                    0 === p &&
                      (p = (N = N.replace(u, "").trim()).charCodeAt(0)),
                    64 === p)
                  ) {
                    switch (
                      (0 < x && (N = N.replace(d, "")), (b = N.charCodeAt(1)))
                    ) {
                      case 100:
                      case 109:
                      case 115:
                      case 45:
                        x = i;
                        break;
                      default:
                        x = O;
                    }
                    if (
                      ((D = (f = t(i, x, f, b, m + 1)).length),
                      0 < k &&
                        ((h = o(3, f, (x = r(O, N, P)), i, E, z, D, b, m, c)),
                        (N = x.join("")),
                        void 0 !== h &&
                          0 === (D = (f = h.trim()).length) &&
                          ((b = 0), (f = ""))),
                      0 < D)
                    )
                      switch (b) {
                        case 115:
                          N = N.replace(w, s);
                        case 100:
                        case 109:
                        case 45:
                          f = N + "{" + f + "}";
                          break;
                        case 107:
                          (f = (N = N.replace(y, "$1 $2")) + "{" + f + "}"),
                            (f =
                              1 === T || (2 === T && a("@" + f, 3))
                                ? "@-webkit-" + f + "@" + f
                                : "@" + f);
                          break;
                        default:
                          (f = N + f), 112 === c && ((L += f), (f = ""));
                      }
                    else f = "";
                  } else f = t(i, r(i, N, P), f, c, m + 1);
                  (V += f),
                    (f = P = x = I = p = 0),
                    (N = ""),
                    (b = l.charCodeAt(++A));
                  break;
                case 125:
                case 59:
                  if (
                    1 < (D = (N = (0 < x ? N.replace(d, "") : N).trim()).length)
                  )
                    switch (
                      (0 === I &&
                        ((p = N.charCodeAt(0)),
                        45 === p || (96 < p && 123 > p)) &&
                        (D = (N = N.replace(" ", ":")).length),
                      0 < k &&
                        void 0 !==
                          (h = o(1, N, i, e, E, z, L.length, c, m, c)) &&
                        0 === (D = (N = h.trim()).length) &&
                        (N = "\0\0"),
                      (p = N.charCodeAt(0)),
                      (b = N.charCodeAt(1)),
                      p)
                    ) {
                      case 0:
                        break;
                      case 64:
                        if (105 === b || 99 === b) {
                          G += N + l.charAt(A);
                          break;
                        }
                      default:
                        58 !== N.charCodeAt(D - 1) &&
                          (L += n(N, p, b, N.charCodeAt(2)));
                    }
                  (P = x = I = p = 0), (N = ""), (b = l.charCodeAt(++A));
              }
            }
            switch (b) {
              case 13:
              case 10:
                47 === S
                  ? (S = 0)
                  : 0 === 1 + p &&
                    107 !== c &&
                    0 < N.length &&
                    ((x = 1), (N += "\0")),
                  0 < k * j && o(0, N, i, e, E, z, L.length, c, m, c),
                  (z = 1),
                  E++;
                break;
              case 59:
              case 125:
                if (0 === S + M + F + v) {
                  z++;
                  break;
                }
              default:
                switch ((z++, (B = l.charAt(A)), b)) {
                  case 9:
                  case 32:
                    if (0 === M + v + S)
                      switch (R) {
                        case 44:
                        case 58:
                        case 9:
                        case 32:
                          B = "";
                          break;
                        default:
                          32 !== b && (B = " ");
                      }
                    break;
                  case 0:
                    B = "\\0";
                    break;
                  case 12:
                    B = "\\f";
                    break;
                  case 11:
                    B = "\\v";
                    break;
                  case 38:
                    0 === M + S + v && ((x = P = 1), (B = "\f" + B));
                    break;
                  case 108:
                    if (0 === M + S + v + C && 0 < I)
                      switch (A - I) {
                        case 2:
                          112 === R && 58 === l.charCodeAt(A - 3) && (C = R);
                        case 8:
                          111 === W && (C = W);
                      }
                    break;
                  case 58:
                    0 === M + S + v && (I = A);
                    break;
                  case 44:
                    0 === S + F + M + v && ((x = 1), (B += "\r"));
                    break;
                  case 34:
                  case 39:
                    0 === S && (M = M === b ? 0 : 0 === M ? b : M);
                    break;
                  case 91:
                    0 === M + S + F && v++;
                    break;
                  case 93:
                    0 === M + S + F && v--;
                    break;
                  case 41:
                    0 === M + S + v && F--;
                    break;
                  case 40:
                    if (0 === M + S + v) {
                      if (0 === p)
                        if (2 * R + 3 * W == 533);
                        else p = 1;
                      F++;
                    }
                    break;
                  case 64:
                    0 === S + F + M + v + I + f && (f = 1);
                    break;
                  case 42:
                  case 47:
                    if (!(0 < M + v + F))
                      switch (S) {
                        case 0:
                          switch (2 * b + 3 * l.charCodeAt(A + 1)) {
                            case 235:
                              S = 47;
                              break;
                            case 220:
                              (D = A), (S = 42);
                          }
                          break;
                        case 42:
                          47 === b &&
                            42 === R &&
                            D + 2 !== A &&
                            (33 === l.charCodeAt(D + 2) &&
                              (L += l.substring(D, A + 1)),
                            (B = ""),
                            (S = 0));
                      }
                }
                0 === S && (N += B);
            }
            (W = R), (R = b), A++;
          }
          if (0 < (D = L.length)) {
            if (
              ((x = i),
              0 < k &&
                void 0 !== (h = o(2, L, x, e, E, z, D, c, m, c)) &&
                0 === (L = h).length)
            )
              return G + L + V;
            if (((L = x.join(",") + "{" + L + "}"), 0 != T * C)) {
              switch ((2 !== T || a(L, 2) || (C = 0), C)) {
                case 111:
                  L = L.replace(g, ":-moz-$1") + L;
                  break;
                case 112:
                  L =
                    L.replace(_, "::-webkit-input-$1") +
                    L.replace(_, "::-moz-$1") +
                    L.replace(_, ":-ms-input-$1") +
                    L;
              }
              C = 0;
            }
          }
          return G + L + V;
        }
        function r(e, t, r) {
          var n = t.trim().split(f);
          t = n;
          var a = n.length,
            s = e.length;
          switch (s) {
            case 0:
            case 1:
              var o = 0;
              for (e = 0 === s ? "" : e[0] + " "; o < a; ++o)
                t[o] = i(e, t[o], r).trim();
              break;
            default:
              var l = (o = 0);
              for (t = []; o < a; ++o)
                for (var c = 0; c < s; ++c)
                  t[l++] = i(e[c] + " ", n[o], r).trim();
          }
          return t;
        }
        function i(e, t, r) {
          var i = t.charCodeAt(0);
          switch ((33 > i && (i = (t = t.trim()).charCodeAt(0)), i)) {
            case 38:
              return t.replace(B, "$1" + e.trim());
            case 58:
              return e.trim() + t.replace(B, "$1" + e.trim());
            default:
              if (0 < 1 * r && 0 < t.indexOf("\f"))
                return t.replace(
                  B,
                  (58 === e.charCodeAt(0) ? "" : "$1") + e.trim(),
                );
          }
          return e + t;
        }
        function n(e, t, r, i) {
          var s = e + ";",
            o = 2 * t + 3 * r + 4 * i;
          if (944 === o) {
            e = s.indexOf(":", 9) + 1;
            var l = s.substring(e, s.length - 1).trim();
            return (
              (l = s.substring(0, e).trim() + l + ";"),
              1 === T || (2 === T && a(l, 1)) ? "-webkit-" + l + l : l
            );
          }
          if (0 === T || (2 === T && !a(s, 1))) return s;
          switch (o) {
            case 1015:
              return 97 === s.charCodeAt(10) ? "-webkit-" + s + s : s;
            case 951:
              return 116 === s.charCodeAt(3) ? "-webkit-" + s + s : s;
            case 963:
              return 110 === s.charCodeAt(5) ? "-webkit-" + s + s : s;
            case 1009:
              if (100 !== s.charCodeAt(4)) break;
            case 969:
            case 942:
              return "-webkit-" + s + s;
            case 978:
              return "-webkit-" + s + "-moz-" + s + s;
            case 1019:
            case 983:
              return "-webkit-" + s + "-moz-" + s + "-ms-" + s + s;
            case 883:
              if (45 === s.charCodeAt(8)) return "-webkit-" + s + s;
              if (0 < s.indexOf("image-set(", 11))
                return s.replace(R, "$1-webkit-$2") + s;
              break;
            case 932:
              if (45 === s.charCodeAt(4))
                switch (s.charCodeAt(5)) {
                  case 103:
                    return (
                      "-webkit-box-" +
                      s.replace("-grow", "") +
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("grow", "positive") +
                      s
                    );
                  case 115:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("shrink", "negative") +
                      s
                    );
                  case 98:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("basis", "preferred-size") +
                      s
                    );
                }
              return "-webkit-" + s + "-ms-" + s + s;
            case 964:
              return "-webkit-" + s + "-ms-flex-" + s + s;
            case 1023:
              if (99 !== s.charCodeAt(8)) break;
              return (
                "-webkit-box-pack" +
                (l = s
                  .substring(s.indexOf(":", 15))
                  .replace("flex-", "")
                  .replace("space-between", "justify")) +
                "-webkit-" +
                s +
                "-ms-flex-pack" +
                l +
                s
              );
            case 1005:
              return p.test(s)
                ? s.replace(m, ":-webkit-") + s.replace(m, ":-moz-") + s
                : s;
            case 1e3:
              switch (
                ((t = (l = s.substring(13).trim()).indexOf("-") + 1),
                l.charCodeAt(0) + l.charCodeAt(t))
              ) {
                case 226:
                  l = s.replace(h, "tb");
                  break;
                case 232:
                  l = s.replace(h, "tb-rl");
                  break;
                case 220:
                  l = s.replace(h, "lr");
                  break;
                default:
                  return s;
              }
              return "-webkit-" + s + "-ms-" + l + s;
            case 1017:
              if (-1 === s.indexOf("sticky", 9)) break;
            case 975:
              switch (
                ((t = (s = e).length - 10),
                (o =
                  (l = (33 === s.charCodeAt(t) ? s.substring(0, t) : s)
                    .substring(e.indexOf(":", 7) + 1)
                    .trim()).charCodeAt(0) +
                  (0 | l.charCodeAt(7))))
              ) {
                case 203:
                  if (111 > l.charCodeAt(8)) break;
                case 115:
                  s = s.replace(l, "-webkit-" + l) + ";" + s;
                  break;
                case 207:
                case 102:
                  s =
                    s.replace(
                      l,
                      "-webkit-" + (102 < o ? "inline-" : "") + "box",
                    ) +
                    ";" +
                    s.replace(l, "-webkit-" + l) +
                    ";" +
                    s.replace(l, "-ms-" + l + "box") +
                    ";" +
                    s;
              }
              return s + ";";
            case 938:
              if (45 === s.charCodeAt(5))
                switch (s.charCodeAt(6)) {
                  case 105:
                    return (
                      (l = s.replace("-items", "")),
                      "-webkit-" + s + "-webkit-box-" + l + "-ms-flex-" + l + s
                    );
                  case 115:
                    return (
                      "-webkit-" + s + "-ms-flex-item-" + s.replace(S, "") + s
                    );
                  default:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-flex-line-pack" +
                      s.replace("align-content", "").replace(S, "") +
                      s
                    );
                }
              break;
            case 973:
            case 989:
              if (45 !== s.charCodeAt(3) || 122 === s.charCodeAt(4)) break;
            case 931:
            case 953:
              if (!0 === M.test(e))
                return 115 ===
                  (l = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                  ? n(e.replace("stretch", "fill-available"), t, r, i).replace(
                      ":fill-available",
                      ":stretch",
                    )
                  : s.replace(l, "-webkit-" + l) +
                      s.replace(l, "-moz-" + l.replace("fill-", "")) +
                      s;
              break;
            case 962:
              if (
                ((s =
                  "-webkit-" +
                  s +
                  (102 === s.charCodeAt(5) ? "-ms-" + s : "") +
                  s),
                211 === r + i &&
                  105 === s.charCodeAt(13) &&
                  0 < s.indexOf("transform", 10))
              )
                return (
                  s
                    .substring(0, s.indexOf(";", 27) + 1)
                    .replace(b, "$1-webkit-$2") + s
                );
          }
          return s;
        }
        function a(e, t) {
          var r = e.indexOf(1 === t ? ":" : "{"),
            i = e.substring(0, 3 !== t ? r : 10);
          return (
            (r = e.substring(r + 1, e.length - 1)),
            I(2 !== t ? i : i.replace(F, "$1"), r, t)
          );
        }
        function s(e, t) {
          var r = n(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
          return r !== t + ";"
            ? r.replace(v, " or ($1)").substring(4)
            : "(" + t + ")";
        }
        function o(e, t, r, i, n, a, s, o, l, u) {
          for (var d, m = 0, p = t; m < k; ++m)
            switch ((d = W[m].call(c, e, p, r, i, n, a, s, o, l, u))) {
              case void 0:
              case !1:
              case !0:
              case null:
                break;
              default:
                p = d;
            }
          if (p !== t) return p;
        }
        function l(e) {
          return (
            void 0 !== (e = e.prefix) &&
              ((I = null),
              e
                ? "function" != typeof e
                  ? (T = 1)
                  : ((T = 2), (I = e))
                : (T = 0)),
            l
          );
        }
        function c(e, r) {
          var i = e;
          if ((33 > i.charCodeAt(0) && (i = i.trim()), (i = [i]), 0 < k)) {
            var n = o(-1, r, i, i, E, z, 0, 0, 0, 0);
            void 0 !== n && "string" == typeof n && (r = n);
          }
          var a = t(O, i, r, 0, 0);
          return (
            0 < k &&
              void 0 !== (n = o(-2, a, i, i, E, z, a.length, 0, 0, 0)) &&
              (a = n),
            "",
            (C = 0),
            (z = E = 1),
            a
          );
        }
        var u = /^\0+/g,
          d = /[\0\r\f]/g,
          m = /: */g,
          p = /zoo|gra/,
          b = /([,: ])(transform)/g,
          f = /,\r+?/g,
          B = /([\t\r\n ])*\f?&/g,
          y = /@(k\w+)\s*(\S*)\s*/,
          _ = /::(place)/g,
          g = /:(read-only)/g,
          h = /[svh]\w+-[tblr]{2}/,
          w = /\(\s*(.*)\s*\)/g,
          v = /([\s\S]*?);/g,
          S = /-self|flex-/g,
          F = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          M = /stretch|:\s*\w+\-(?:conte|avail)/,
          R = /([^-])(image-set\()/,
          z = 1,
          E = 1,
          C = 0,
          T = 1,
          O = [],
          W = [],
          k = 0,
          I = null,
          j = 0;
        return (
          (c.use = function e(t) {
            switch (t) {
              case void 0:
              case null:
                k = W.length = 0;
                break;
              default:
                if ("function" == typeof t) W[k++] = t;
                else if ("object" == typeof t)
                  for (var r = 0, i = t.length; r < i; ++r) e(t[r]);
                else j = 0 | !!t;
            }
            return e;
          }),
          (c.set = l),
          void 0 !== e && l(e),
          c
        );
      };
      var B = "/*|*/",
        y = B + "}";
      function _(e) {
        e && g.current.insert(e + "}");
      }
      var g = { current: null },
        h = function (e, t, r, i, n, a, s, o, l, c) {
          switch (e) {
            case 1:
              switch (t.charCodeAt(0)) {
                case 64:
                  return g.current.insert(t + ";"), "";
                case 108:
                  if (98 === t.charCodeAt(2)) return "";
              }
              break;
            case 2:
              if (0 === o) return t + B;
              break;
            case 3:
              switch (o) {
                case 102:
                case 112:
                  return g.current.insert(r[0] + t), "";
                default:
                  return t + (0 === c ? B : "");
              }
            case -2:
              t.split(y).forEach(_);
          }
        };
      const w = function (e) {
        void 0 === e && (e = {});
        var t,
          r = e.key || "css";
        void 0 !== e.prefix && (t = { prefix: e.prefix });
        var i = new f(t);
        var n,
          a = {};
        n = e.container || document.head;
        var s,
          o = document.querySelectorAll("style[data-emotion-" + r + "]");
        Array.prototype.forEach.call(o, function (e) {
          e
            .getAttribute("data-emotion-" + r)
            .split(" ")
            .forEach(function (e) {
              a[e] = !0;
            }),
            e.parentNode !== n && n.appendChild(e);
        }),
          i.use(e.stylisPlugins)(h),
          (s = function (e, t, r, n) {
            var a = t.name;
            (g.current = r), i(e, t.styles), n && (l.inserted[a] = !0);
          });
        var l = {
          key: r,
          sheet: new b({
            key: r,
            container: n,
            nonce: e.nonce,
            speedy: e.speedy,
          }),
          nonce: e.nonce,
          inserted: a,
          registered: {},
          insert: s,
        };
        return l;
      };
      function v(e, t, r) {
        var i = "";
        return (
          r.split(" ").forEach(function (r) {
            void 0 !== e[r] ? t.push(e[r]) : (i += r + " ");
          }),
          i
        );
      }
      var S = function (e, t, r) {
        var i = e.key + "-" + t.name;
        if (
          (!1 === r &&
            void 0 === e.registered[i] &&
            (e.registered[i] = t.styles),
          void 0 === e.inserted[t.name])
        ) {
          var n = t;
          do {
            e.insert("." + i, n, e.sheet, !0);
            n = n.next;
          } while (void 0 !== n);
        }
      };
      const F = function (e) {
        for (var t, r = 0, i = 0, n = e.length; n >= 4; ++i, n -= 4)
          (t =
            1540483477 *
              (65535 &
                (t =
                  (255 & e.charCodeAt(i)) |
                  ((255 & e.charCodeAt(++i)) << 8) |
                  ((255 & e.charCodeAt(++i)) << 16) |
                  ((255 & e.charCodeAt(++i)) << 24))) +
            ((59797 * (t >>> 16)) << 16)),
            (r =
              (1540483477 * (65535 & (t ^= t >>> 24)) +
                ((59797 * (t >>> 16)) << 16)) ^
              (1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)));
        switch (n) {
          case 3:
            r ^= (255 & e.charCodeAt(i + 2)) << 16;
          case 2:
            r ^= (255 & e.charCodeAt(i + 1)) << 8;
          case 1:
            r =
              1540483477 * (65535 & (r ^= 255 & e.charCodeAt(i))) +
              ((59797 * (r >>> 16)) << 16);
        }
        return (
          ((r =
            1540483477 * (65535 & (r ^= r >>> 13)) +
            ((59797 * (r >>> 16)) << 16)) ^
            (r >>> 15)) >>>
          0
        ).toString(36);
      };
      const M = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
      var R = /[A-Z]|^ms/g,
        z = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        E = function (e) {
          return 45 === e.charCodeAt(1);
        },
        C = function (e) {
          return null != e && "boolean" != typeof e;
        },
        T = (function (e) {
          var t = {};
          return function (r) {
            return void 0 === t[r] && (t[r] = e(r)), t[r];
          };
        })(function (e) {
          return E(e) ? e : e.replace(R, "-$&").toLowerCase();
        }),
        O = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" == typeof t)
                return t.replace(z, function (e, t, r) {
                  return (k = { name: t, styles: r, next: k }), t;
                });
          }
          return 1 === M[e] || E(e) || "number" != typeof t || 0 === t
            ? t
            : t + "px";
        };
      function W(e, t, r, i) {
        if (null == r) return "";
        if (void 0 !== r.__emotion_styles) return r;
        switch (typeof r) {
          case "boolean":
            return "";
          case "object":
            if (1 === r.anim)
              return (k = { name: r.name, styles: r.styles, next: k }), r.name;
            if (void 0 !== r.styles) {
              var n = r.next;
              if (void 0 !== n)
                for (; void 0 !== n; )
                  (k = { name: n.name, styles: n.styles, next: k }),
                    (n = n.next);
              return r.styles + ";";
            }
            return (function (e, t, r) {
              var i = "";
              if (Array.isArray(r))
                for (var n = 0; n < r.length; n++) i += W(e, t, r[n], !1);
              else
                for (var a in r) {
                  var s = r[a];
                  if ("object" != typeof s)
                    null != t && void 0 !== t[s]
                      ? (i += a + "{" + t[s] + "}")
                      : C(s) && (i += T(a) + ":" + O(a, s) + ";");
                  else if (
                    !Array.isArray(s) ||
                    "string" != typeof s[0] ||
                    (null != t && void 0 !== t[s[0]])
                  ) {
                    var o = W(e, t, s, !1);
                    switch (a) {
                      case "animation":
                      case "animationName":
                        i += T(a) + ":" + o + ";";
                        break;
                      default:
                        i += a + "{" + o + "}";
                    }
                  } else
                    for (var l = 0; l < s.length; l++)
                      C(s[l]) && (i += T(a) + ":" + O(a, s[l]) + ";");
                }
              return i;
            })(e, t, r);
          case "function":
            if (void 0 !== e) {
              var a = k,
                s = r(e);
              return (k = a), W(e, t, s, i);
            }
        }
        if (null == t) return r;
        var o = t[r];
        return void 0 === o || i ? r : o;
      }
      var k,
        I = /label:\s*([^\s;\n{]+)\s*;/g;
      var j = function (e, t, r) {
          if (
            1 === e.length &&
            "object" == typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var i = !0,
            n = "";
          k = void 0;
          var a = e[0];
          null == a || void 0 === a.raw
            ? ((i = !1), (n += W(r, t, a, !1)))
            : (n += a[0]);
          for (var s = 1; s < e.length; s++)
            (n += W(r, t, e[s], 46 === n.charCodeAt(n.length - 1))),
              i && (n += a[s]);
          I.lastIndex = 0;
          for (var o, l = ""; null !== (o = I.exec(n)); ) l += "-" + o[1];
          return { name: F(n) + l, styles: n, next: k };
        },
        A = Object.prototype.hasOwnProperty,
        x = (0, d.createContext)(
          "undefined" != typeof HTMLElement ? w() : null,
        ),
        P = (0, d.createContext)({}),
        D = x.Provider,
        U = function (e) {
          var t = function (t, r) {
            return (0, d.createElement)(x.Consumer, null, function (i) {
              return e(t, i, r);
            });
          };
          return (0, d.forwardRef)(t);
        },
        X = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        N = function () {
          return null;
        },
        L = function (e, t, r, i) {
          var n = null === r ? t.css : t.css(r);
          "string" == typeof n &&
            void 0 !== e.registered[n] &&
            (n = e.registered[n]);
          var a = t[X],
            s = [n],
            o = "";
          "string" == typeof t.className
            ? (o = v(e.registered, s, t.className))
            : null != t.className && (o = t.className + " ");
          var l = j(s);
          S(e, l, "string" == typeof a);
          o += e.key + "-" + l.name;
          var c = {};
          for (var u in t)
            A.call(t, u) && "css" !== u && u !== X && (c[u] = t[u]);
          (c.ref = i), (c.className = o);
          var m = (0, d.createElement)(a, c),
            p = (0, d.createElement)(N, null);
          return (0, d.createElement)(d.Fragment, null, p, m);
        },
        V = U(function (e, t, r) {
          return "function" == typeof e.css
            ? (0, d.createElement)(P.Consumer, null, function (i) {
                return L(t, e, i, r);
              })
            : L(t, e, null, r);
        });
      const G = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return j(t);
      };
      var H = function (e, t) {
          var r = arguments;
          if (null == t || !A.call(t, "css"))
            return d.createElement.apply(void 0, r);
          var i = r.length,
            n = new Array(i);
          (n[0] = V),
            (n[1] = (function (e, t) {
              var r = {};
              for (var i in t) A.call(t, i) && (r[i] = t[i]);
              return (r[X] = e), r;
            })(e, t));
          for (var a = 2; a < i; a++) n[a] = r[a];
          return d.createElement.apply(null, n);
        },
        q =
          (d.Component,
          function e(t) {
            for (var r = t.length, i = 0, n = ""; i < r; i++) {
              var a = t[i];
              if (null != a) {
                var s = void 0;
                switch (typeof a) {
                  case "boolean":
                    break;
                  case "object":
                    if (Array.isArray(a)) s = e(a);
                    else
                      for (var o in ((s = ""), a))
                        a[o] && o && (s && (s += " "), (s += o));
                    break;
                  default:
                    s = a;
                }
                s && (n && (n += " "), (n += s));
              }
            }
            return n;
          });
      var Z = function () {
          return null;
        },
        $ = U(function (e, t) {
          return (0, d.createElement)(P.Consumer, null, function (r) {
            var i = function () {
                for (
                  var e = arguments.length, r = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  r[i] = arguments[i];
                var n = j(r, t.registered);
                return S(t, n, !1), t.key + "-" + n.name;
              },
              n = {
                css: i,
                cx: function () {
                  for (
                    var e = arguments.length, r = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    r[n] = arguments[n];
                  return (function (e, t, r) {
                    var i = [],
                      n = v(e, i, r);
                    return i.length < 2 ? r : n + t(i);
                  })(t.registered, i, q(r));
                },
                theme: r,
              },
              a = e.children(n);
            var s = (0, d.createElement)(Z, null);
            return (0, d.createElement)(d.Fragment, null, s, a);
          });
        }),
        Y = r(73961),
        K = r(71972);
      function Q(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = (0, K.Z)(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (r = a[i]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      var J = r(17692);
      function ee(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      function te(e, t) {
        if (e) {
          if ("string" == typeof e) return ee(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? ee(e, t)
              : void 0
          );
        }
      }
      function re(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var i,
                n,
                a,
                s,
                o = [],
                l = !0,
                c = !1;
              try {
                if (((a = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (i = a.call(r)).done) &&
                    (o.push(i.value), o.length !== t);
                    l = !0
                  );
              } catch (e) {
                (c = !0), (n = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((s = r.return()), Object(s) !== s)
                  )
                    return;
                } finally {
                  if (c) throw n;
                }
              }
              return o;
            }
          })(e, t) ||
          te(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ie(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return ee(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          te(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var ne = r(88965);
      function ae(e, t, r) {
        return (
          (t = (0, ne.Z)(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var se = r(72638),
        oe = function () {};
      function le(e, t) {
        return t ? ("-" === t[0] ? e + t : e + "__" + t) : e;
      }
      function ce(e, t, r) {
        var i = [r];
        if (t && e)
          for (var n in t)
            t.hasOwnProperty(n) && t[n] && i.push("".concat(le(e, n)));
        return i
          .filter(function (e) {
            return e;
          })
          .map(function (e) {
            return String(e).trim();
          })
          .join(" ");
      }
      var ue = function (e) {
        return Array.isArray(e)
          ? e.filter(Boolean)
          : "object" === (0, o.Z)(e) && null !== e
          ? [e]
          : [];
      };
      function de(e) {
        return (
          [document.documentElement, document.body, window].indexOf(e) > -1
        );
      }
      function me(e) {
        return de(e) ? window.pageYOffset : e.scrollTop;
      }
      function pe(e, t) {
        de(e) ? window.scrollTo(0, t) : (e.scrollTop = t);
      }
      function be(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 200,
          i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : oe,
          n = me(e),
          a = t - n,
          s = 0;
        !(function t() {
          var o,
            l = a * ((o = (o = s += 10) / r - 1) * o * o + 1) + n;
          pe(e, l), s < r ? window.requestAnimationFrame(t) : i(e);
        })();
      }
      function fe() {
        try {
          return document.createEvent("TouchEvent"), !0;
        } catch (e) {
          return !1;
        }
      }
      function Be(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Be(Object(r), !0).forEach(function (t) {
                ae(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Be(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function _e(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = u(e);
          if (t) {
            var n = u(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return c(this, r);
        };
      }
      function ge(e) {
        var t = e.maxHeight,
          r = e.menuEl,
          i = e.minHeight,
          n = e.placement,
          a = e.shouldScroll,
          s = e.isFixedPosition,
          o = e.theme.spacing,
          l = (function (e) {
            var t = getComputedStyle(e),
              r = "absolute" === t.position,
              i = /(auto|scroll)/,
              n = document.documentElement;
            if ("fixed" === t.position) return n;
            for (var a = e; (a = a.parentElement); )
              if (
                ((t = getComputedStyle(a)),
                (!r || "static" !== t.position) &&
                  i.test(t.overflow + t.overflowY + t.overflowX))
              )
                return a;
            return n;
          })(r),
          c = { placement: "bottom", maxHeight: t };
        if (!r || !r.offsetParent) return c;
        var u = l.getBoundingClientRect().height,
          d = r.getBoundingClientRect(),
          m = d.bottom,
          p = d.height,
          b = d.top,
          f = r.offsetParent.getBoundingClientRect().top,
          B = window.innerHeight,
          y = me(l),
          _ = parseInt(getComputedStyle(r).marginBottom, 10),
          g = parseInt(getComputedStyle(r).marginTop, 10),
          h = f - g,
          w = B - b,
          v = h + y,
          S = u - y - b,
          F = m - B + y + _,
          M = y + b - g,
          R = 160;
        switch (n) {
          case "auto":
          case "bottom":
            if (w >= p) return { placement: "bottom", maxHeight: t };
            if (S >= p && !s)
              return a && be(l, F, R), { placement: "bottom", maxHeight: t };
            if ((!s && S >= i) || (s && w >= i))
              return (
                a && be(l, F, R),
                { placement: "bottom", maxHeight: s ? w - _ : S - _ }
              );
            if ("auto" === n || s) {
              var z = t,
                E = s ? h : v;
              return (
                E >= i && (z = Math.min(E - _ - o.controlHeight, t)),
                { placement: "top", maxHeight: z }
              );
            }
            if ("bottom" === n)
              return pe(l, F), { placement: "bottom", maxHeight: t };
            break;
          case "top":
            if (h >= p) return { placement: "top", maxHeight: t };
            if (v >= p && !s)
              return a && be(l, M, R), { placement: "top", maxHeight: t };
            if ((!s && v >= i) || (s && h >= i)) {
              var C = t;
              return (
                ((!s && v >= i) || (s && h >= i)) && (C = s ? h - g : v - g),
                a && be(l, M, R),
                { placement: "top", maxHeight: C }
              );
            }
            return { placement: "bottom", maxHeight: t };
          default:
            throw new Error('Invalid placement provided "'.concat(n, '".'));
        }
        return c;
      }
      var he = function (e) {
          return "auto" === e ? "bottom" : e;
        },
        we = (0, d.createContext)({ getPortalPlacement: null }),
        ve = (function (e) {
          s(r, e);
          var t = _e(r);
          function r() {
            var e;
            i(this, r);
            for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
              a[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                maxHeight: e.props.maxMenuHeight,
                placement: null,
              }),
              (e.getPlacement = function (t) {
                var r = e.props,
                  i = r.minMenuHeight,
                  n = r.maxMenuHeight,
                  a = r.menuPlacement,
                  s = r.menuPosition,
                  o = r.menuShouldScrollIntoView,
                  l = r.theme;
                if (t) {
                  var c = "fixed" === s,
                    u = ge({
                      maxHeight: n,
                      menuEl: t,
                      minHeight: i,
                      placement: a,
                      shouldScroll: o && !c,
                      isFixedPosition: c,
                      theme: l,
                    }),
                    d = e.context.getPortalPlacement;
                  d && d(u), e.setState(u);
                }
              }),
              (e.getUpdatedProps = function () {
                var t = e.props.menuPlacement,
                  r = e.state.placement || he(t);
                return ye(
                  ye({}, e.props),
                  {},
                  { placement: r, maxHeight: e.state.maxHeight },
                );
              }),
              e
            );
          }
          return (
            (0, n.Z)(r, [
              {
                key: "render",
                value: function () {
                  return (0, this.props.children)({
                    ref: this.getPlacement,
                    placerProps: this.getUpdatedProps(),
                  });
                },
              },
            ]),
            r
          );
        })(d.Component);
      ve.contextType = we;
      var Se = function (e) {
          var t = e.theme,
            r = t.spacing.baseUnit;
          return {
            color: t.colors.neutral40,
            padding: "".concat(2 * r, "px ").concat(3 * r, "px"),
            textAlign: "center",
          };
        },
        Fe = Se,
        Me = Se,
        Re = function (e) {
          var t = e.children,
            r = e.className,
            i = e.cx,
            n = e.getStyles,
            a = e.innerProps;
          return H(
            "div",
            (0, J.Z)(
              {
                css: n("noOptionsMessage", e),
                className: i(
                  { "menu-notice": !0, "menu-notice--no-options": !0 },
                  r,
                ),
              },
              a,
            ),
            t,
          );
        };
      Re.defaultProps = { children: "No options" };
      var ze = function (e) {
        var t = e.children,
          r = e.className,
          i = e.cx,
          n = e.getStyles,
          a = e.innerProps;
        return H(
          "div",
          (0, J.Z)(
            {
              css: n("loadingMessage", e),
              className: i(
                { "menu-notice": !0, "menu-notice--loading": !0 },
                r,
              ),
            },
            a,
          ),
          t,
        );
      };
      ze.defaultProps = { children: "Loading..." };
      var Ee = (function (e) {
          s(r, e);
          var t = _e(r);
          function r() {
            var e;
            i(this, r);
            for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
              a[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                placement: null,
              }),
              (e.getPortalPlacement = function (t) {
                var r = t.placement;
                r !== he(e.props.menuPlacement) && e.setState({ placement: r });
              }),
              e
            );
          }
          return (
            (0, n.Z)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.appendTo,
                    r = e.children,
                    i = e.controlElement,
                    n = e.menuPlacement,
                    a = e.menuPosition,
                    s = e.getStyles,
                    o = "fixed" === a;
                  if ((!t && !o) || !i) return null;
                  var l = this.state.placement || he(n),
                    c = (function (e) {
                      var t = e.getBoundingClientRect();
                      return {
                        bottom: t.bottom,
                        height: t.height,
                        left: t.left,
                        right: t.right,
                        top: t.top,
                        width: t.width,
                      };
                    })(i),
                    u = o ? 0 : window.pageYOffset,
                    d = c[l] + u,
                    m = H(
                      "div",
                      {
                        css: s("menuPortal", {
                          offset: d,
                          position: a,
                          rect: c,
                        }),
                      },
                      r,
                    );
                  return H(
                    we.Provider,
                    { value: { getPortalPlacement: this.getPortalPlacement } },
                    t ? (0, Y.createPortal)(m, t) : m,
                  );
                },
              },
            ]),
            r
          );
        })(d.Component),
        Ce = Array.isArray,
        Te = Object.keys,
        Oe = Object.prototype.hasOwnProperty;
      function We(e, t) {
        if (e === t) return !0;
        if (e && t && "object" == (0, o.Z)(e) && "object" == (0, o.Z)(t)) {
          var r,
            i,
            n,
            a = Ce(e),
            s = Ce(t);
          if (a && s) {
            if ((i = e.length) != t.length) return !1;
            for (r = i; 0 != r--; ) if (!We(e[r], t[r])) return !1;
            return !0;
          }
          if (a != s) return !1;
          var l = e instanceof Date,
            c = t instanceof Date;
          if (l != c) return !1;
          if (l && c) return e.getTime() == t.getTime();
          var u = e instanceof RegExp,
            d = t instanceof RegExp;
          if (u != d) return !1;
          if (u && d) return e.toString() == t.toString();
          var m = Te(e);
          if ((i = m.length) !== Te(t).length) return !1;
          for (r = i; 0 != r--; ) if (!Oe.call(t, m[r])) return !1;
          for (r = i; 0 != r--; )
            if (!(("_owner" === (n = m[r]) && e.$$typeof) || We(e[n], t[n])))
              return !1;
          return !0;
        }
        return e != e && t != t;
      }
      function ke(e, t) {
        try {
          return We(e, t);
        } catch (e) {
          if (e.message && e.message.match(/stack|recursion/i))
            return (
              console.warn(
                "Warning: react-fast-compare does not handle circular references.",
                e.name,
                e.message,
              ),
              !1
            );
          throw e;
        }
      }
      function Ie() {
        var e,
          t,
          r =
            ((e = [
              "\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n",
            ]),
            t || (t = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
            ));
        return (
          (Ie = function () {
            return r;
          }),
          r
        );
      }
      var je = {
          name: "19bqh2r",
          styles:
            "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;",
        },
        Ae = function (e) {
          var t = e.size,
            r = Q(e, ["size"]);
          return H(
            "svg",
            (0, J.Z)(
              {
                height: t,
                width: t,
                viewBox: "0 0 20 20",
                "aria-hidden": "true",
                focusable: "false",
                css: je,
              },
              r,
            ),
          );
        },
        xe = function (e) {
          return H(
            Ae,
            (0, J.Z)({ size: 20 }, e),
            H("path", {
              d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
            }),
          );
        },
        Pe = function (e) {
          return H(
            Ae,
            (0, J.Z)({ size: 20 }, e),
            H("path", {
              d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
            }),
          );
        },
        De = function (e) {
          var t = e.isFocused,
            r = e.theme,
            i = r.spacing.baseUnit,
            n = r.colors;
          return {
            label: "indicatorContainer",
            color: t ? n.neutral60 : n.neutral20,
            display: "flex",
            padding: 2 * i,
            transition: "color 150ms",
            ":hover": { color: t ? n.neutral80 : n.neutral40 },
          };
        },
        Ue = De,
        Xe = De,
        Ne = (function () {
          var e = G.apply(void 0, arguments),
            t = "animation-" + e.name;
          return {
            name: t,
            styles: "@keyframes " + t + "{" + e.styles + "}",
            anim: 1,
            toString: function () {
              return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
            },
          };
        })(Ie()),
        Le = function (e) {
          var t = e.delay,
            r = e.offset;
          return H("span", {
            css: G(
              {
                animation: ""
                  .concat(Ne, " 1s ease-in-out ")
                  .concat(t, "ms infinite;"),
                backgroundColor: "currentColor",
                borderRadius: "1em",
                display: "inline-block",
                marginLeft: r ? "1em" : null,
                height: "1em",
                verticalAlign: "top",
                width: "1em",
              },
              "",
            ),
          });
        },
        Ve = function (e) {
          var t = e.className,
            r = e.cx,
            i = e.getStyles,
            n = e.innerProps,
            a = e.isRtl;
          return H(
            "div",
            (0, J.Z)({}, n, {
              css: i("loadingIndicator", e),
              className: r({ indicator: !0, "loading-indicator": !0 }, t),
            }),
            H(Le, { delay: 0, offset: a }),
            H(Le, { delay: 160, offset: !0 }),
            H(Le, { delay: 320, offset: !a }),
          );
        };
      Ve.defaultProps = { size: 4 };
      function Ge(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function He(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ge(Object(r), !0).forEach(function (t) {
                ae(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ge(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function qe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function Ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? qe(Object(r), !0).forEach(function (t) {
                ae(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : qe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var $e = function (e) {
        return {
          label: "input",
          background: 0,
          border: 0,
          fontSize: "inherit",
          opacity: e ? 0 : 1,
          outline: 0,
          padding: 0,
          color: "inherit",
        };
      };
      function Ye(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function Ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ye(Object(r), !0).forEach(function (t) {
                ae(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ye(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var Qe = function (e) {
          var t = e.children,
            r = e.innerProps;
          return H("div", r, t);
        },
        Je = Qe,
        et = Qe;
      var tt = function (e) {
        var t = e.children,
          r = e.className,
          i = e.components,
          n = e.cx,
          a = e.data,
          s = e.getStyles,
          o = e.innerProps,
          l = e.isDisabled,
          c = e.removeProps,
          u = e.selectProps,
          d = i.Container,
          m = i.Label,
          p = i.Remove;
        return H($, null, function (i) {
          var b = i.css,
            f = i.cx;
          return H(
            d,
            {
              data: a,
              innerProps: Ke(
                Ke({}, o),
                {},
                {
                  className: f(
                    b(s("multiValue", e)),
                    n({ "multi-value": !0, "multi-value--is-disabled": l }, r),
                  ),
                },
              ),
              selectProps: u,
            },
            H(
              m,
              {
                data: a,
                innerProps: {
                  className: f(
                    b(s("multiValueLabel", e)),
                    n({ "multi-value__label": !0 }, r),
                  ),
                },
                selectProps: u,
              },
              t,
            ),
            H(p, {
              data: a,
              innerProps: Ke(
                {
                  className: f(
                    b(s("multiValueRemove", e)),
                    n({ "multi-value__remove": !0 }, r),
                  ),
                },
                c,
              ),
              selectProps: u,
            }),
          );
        });
      };
      tt.defaultProps = { cropWithEllipsis: !0 };
      function rt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function it(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? rt(Object(r), !0).forEach(function (t) {
                ae(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : rt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      for (
        var nt = {
            ClearIndicator: function (e) {
              var t = e.children,
                r = e.className,
                i = e.cx,
                n = e.getStyles,
                a = e.innerProps;
              return H(
                "div",
                (0, J.Z)({}, a, {
                  css: n("clearIndicator", e),
                  className: i({ indicator: !0, "clear-indicator": !0 }, r),
                }),
                t || H(xe, null),
              );
            },
            Control: function (e) {
              var t = e.children,
                r = e.cx,
                i = e.getStyles,
                n = e.className,
                a = e.isDisabled,
                s = e.isFocused,
                o = e.innerRef,
                l = e.innerProps,
                c = e.menuIsOpen;
              return H(
                "div",
                (0, J.Z)(
                  {
                    ref: o,
                    css: i("control", e),
                    className: r(
                      {
                        control: !0,
                        "control--is-disabled": a,
                        "control--is-focused": s,
                        "control--menu-is-open": c,
                      },
                      n,
                    ),
                  },
                  l,
                ),
                t,
              );
            },
            DropdownIndicator: function (e) {
              var t = e.children,
                r = e.className,
                i = e.cx,
                n = e.getStyles,
                a = e.innerProps;
              return H(
                "div",
                (0, J.Z)({}, a, {
                  css: n("dropdownIndicator", e),
                  className: i({ indicator: !0, "dropdown-indicator": !0 }, r),
                }),
                t || H(Pe, null),
              );
            },
            DownChevron: Pe,
            CrossIcon: xe,
            Group: function (e) {
              var t = e.children,
                r = e.className,
                i = e.cx,
                n = e.getStyles,
                a = e.Heading,
                s = e.headingProps,
                o = e.label,
                l = e.theme,
                c = e.selectProps;
              return H(
                "div",
                { css: n("group", e), className: i({ group: !0 }, r) },
                H(
                  a,
                  (0, J.Z)({}, s, {
                    selectProps: c,
                    theme: l,
                    getStyles: n,
                    cx: i,
                  }),
                  o,
                ),
                H("div", null, t),
              );
            },
            GroupHeading: function (e) {
              var t = e.className,
                r = e.cx,
                i = e.getStyles,
                n = e.theme,
                a =
                  (e.selectProps,
                  Q(e, [
                    "className",
                    "cx",
                    "getStyles",
                    "theme",
                    "selectProps",
                  ]));
              return H(
                "div",
                (0, J.Z)(
                  {
                    css: i("groupHeading", He({ theme: n }, a)),
                    className: r({ "group-heading": !0 }, t),
                  },
                  a,
                ),
              );
            },
            IndicatorsContainer: function (e) {
              var t = e.children,
                r = e.className,
                i = e.cx,
                n = e.getStyles;
              return H(
                "div",
                {
                  css: n("indicatorsContainer", e),
                  className: i({ indicators: !0 }, r),
                },
                t,
              );
            },
            IndicatorSeparator: function (e) {
              var t = e.className,
                r = e.cx,
                i = e.getStyles,
                n = e.innerProps;
              return H(
                "span",
                (0, J.Z)({}, n, {
                  css: i("indicatorSeparator", e),
                  className: r({ "indicator-separator": !0 }, t),
                }),
              );
            },
            Input: function (e) {
              var t = e.className,
                r = e.cx,
                i = e.getStyles,
                n = e.innerRef,
                a = e.isHidden,
                s = e.isDisabled,
                o = e.theme,
                l =
                  (e.selectProps,
                  Q(e, [
                    "className",
                    "cx",
                    "getStyles",
                    "innerRef",
                    "isHidden",
                    "isDisabled",
                    "theme",
                    "selectProps",
                  ]));
              return H(
                "div",
                { css: i("input", Ze({ theme: o }, l)) },
                H(
                  se.Z,
                  (0, J.Z)(
                    {
                      className: r({ input: !0 }, t),
                      inputRef: n,
                      inputStyle: $e(a),
                      disabled: s,
                    },
                    l,
                  ),
                ),
              );
            },
            LoadingIndicator: Ve,
            Menu: function (e) {
              var t = e.children,
                r = e.className,
                i = e.cx,
                n = e.getStyles,
                a = e.innerRef,
                s = e.innerProps;
              return H(
                "div",
                (0, J.Z)(
                  { css: n("menu", e), className: i({ menu: !0 }, r) },
                  s,
                  { ref: a },
                ),
                t,
              );
            },
            MenuList: function (e) {
              var t = e.children,
                r = e.className,
                i = e.cx,
                n = e.getStyles,
                a = e.isMulti,
                s = e.innerRef,
                o = e.innerProps;
              return H(
                "div",
                (0, J.Z)(
                  {
                    css: n("menuList", e),
                    className: i(
                      { "menu-list": !0, "menu-list--is-multi": a },
                      r,
                    ),
                    ref: s,
                  },
                  o,
                ),
                t,
              );
            },
            MenuPortal: Ee,
            LoadingMessage: ze,
            NoOptionsMessage: Re,
            MultiValue: tt,
            MultiValueContainer: Je,
            MultiValueLabel: et,
            MultiValueRemove: function (e) {
              var t = e.children,
                r = e.innerProps;
              return H("div", r, t || H(xe, { size: 14 }));
            },
            Option: function (e) {
              var t = e.children,
                r = e.className,
                i = e.cx,
                n = e.getStyles,
                a = e.isDisabled,
                s = e.isFocused,
                o = e.isSelected,
                l = e.innerRef,
                c = e.innerProps;
              return H(
                "div",
                (0, J.Z)(
                  {
                    css: n("option", e),
                    className: i(
                      {
                        option: !0,
                        "option--is-disabled": a,
                        "option--is-focused": s,
                        "option--is-selected": o,
                      },
                      r,
                    ),
                    ref: l,
                  },
                  c,
                ),
                t,
              );
            },
            Placeholder: function (e) {
              var t = e.children,
                r = e.className,
                i = e.cx,
                n = e.getStyles,
                a = e.innerProps;
              return H(
                "div",
                (0, J.Z)(
                  {
                    css: n("placeholder", e),
                    className: i({ placeholder: !0 }, r),
                  },
                  a,
                ),
                t,
              );
            },
            SelectContainer: function (e) {
              var t = e.children,
                r = e.className,
                i = e.cx,
                n = e.getStyles,
                a = e.innerProps,
                s = e.isDisabled,
                o = e.isRtl;
              return H(
                "div",
                (0, J.Z)(
                  {
                    css: n("container", e),
                    className: i({ "--is-disabled": s, "--is-rtl": o }, r),
                  },
                  a,
                ),
                t,
              );
            },
            SingleValue: function (e) {
              var t = e.children,
                r = e.className,
                i = e.cx,
                n = e.getStyles,
                a = e.isDisabled,
                s = e.innerProps;
              return H(
                "div",
                (0, J.Z)(
                  {
                    css: n("singleValue", e),
                    className: i(
                      { "single-value": !0, "single-value--is-disabled": a },
                      r,
                    ),
                  },
                  s,
                ),
                t,
              );
            },
            ValueContainer: function (e) {
              var t = e.children,
                r = e.className,
                i = e.cx,
                n = e.isMulti,
                a = e.getStyles,
                s = e.hasValue;
              return H(
                "div",
                {
                  css: a("valueContainer", e),
                  className: i(
                    {
                      "value-container": !0,
                      "value-container--is-multi": n,
                      "value-container--has-value": s,
                    },
                    r,
                  ),
                },
                t,
              );
            },
          },
          at = function (e) {
            return it(it({}, nt), e.components);
          },
          st = [
            { base: "A", letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ" },
            { base: "AA", letters: "Ꜳ" },
            { base: "AE", letters: "ÆǼǢ" },
            { base: "AO", letters: "Ꜵ" },
            { base: "AU", letters: "Ꜷ" },
            { base: "AV", letters: "ꜸꜺ" },
            { base: "AY", letters: "Ꜽ" },
            { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" },
            { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" },
            { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" },
            { base: "DZ", letters: "ǱǄ" },
            { base: "Dz", letters: "ǲǅ" },
            { base: "E", letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ" },
            { base: "F", letters: "FⒻＦḞƑꝻ" },
            { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" },
            { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" },
            { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" },
            { base: "J", letters: "JⒿＪĴɈ" },
            { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" },
            { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" },
            { base: "LJ", letters: "Ǉ" },
            { base: "Lj", letters: "ǈ" },
            { base: "M", letters: "MⓂＭḾṀṂⱮƜ" },
            { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" },
            { base: "NJ", letters: "Ǌ" },
            { base: "Nj", letters: "ǋ" },
            {
              base: "O",
              letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ",
            },
            { base: "OI", letters: "Ƣ" },
            { base: "OO", letters: "Ꝏ" },
            { base: "OU", letters: "Ȣ" },
            { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" },
            { base: "Q", letters: "QⓆＱꝖꝘɊ" },
            { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" },
            { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" },
            { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" },
            { base: "TZ", letters: "Ꜩ" },
            { base: "U", letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ" },
            { base: "V", letters: "VⓋＶṼṾƲꝞɅ" },
            { base: "VY", letters: "Ꝡ" },
            { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" },
            { base: "X", letters: "XⓍＸẊẌ" },
            { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" },
            { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" },
            { base: "a", letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ" },
            { base: "aa", letters: "ꜳ" },
            { base: "ae", letters: "æǽǣ" },
            { base: "ao", letters: "ꜵ" },
            { base: "au", letters: "ꜷ" },
            { base: "av", letters: "ꜹꜻ" },
            { base: "ay", letters: "ꜽ" },
            { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" },
            { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" },
            { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" },
            { base: "dz", letters: "ǳǆ" },
            { base: "e", letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ" },
            { base: "f", letters: "fⓕｆḟƒꝼ" },
            { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" },
            { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" },
            { base: "hv", letters: "ƕ" },
            { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" },
            { base: "j", letters: "jⓙｊĵǰɉ" },
            { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" },
            { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" },
            { base: "lj", letters: "ǉ" },
            { base: "m", letters: "mⓜｍḿṁṃɱɯ" },
            { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" },
            { base: "nj", letters: "ǌ" },
            {
              base: "o",
              letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ",
            },
            { base: "oi", letters: "ƣ" },
            { base: "ou", letters: "ȣ" },
            { base: "oo", letters: "ꝏ" },
            { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" },
            { base: "q", letters: "qⓠｑɋꝗꝙ" },
            { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" },
            { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" },
            { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" },
            { base: "tz", letters: "ꜩ" },
            { base: "u", letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ" },
            { base: "v", letters: "vⓥｖṽṿʋꝟʌ" },
            { base: "vy", letters: "ꝡ" },
            { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" },
            { base: "x", letters: "xⓧｘẋẍ" },
            { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" },
            { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" },
          ],
          ot = new RegExp(
            "[" +
              st
                .map(function (e) {
                  return e.letters;
                })
                .join("") +
              "]",
            "g",
          ),
          lt = {},
          ct = 0;
        ct < st.length;
        ct++
      )
        for (var ut = st[ct], dt = 0; dt < ut.letters.length; dt++)
          lt[ut.letters[dt]] = ut.base;
      var mt = function (e) {
        return e.replace(ot, function (e) {
          return lt[e];
        });
      };
      function pt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      var bt = function (e) {
          return e.replace(/^\s+|\s+$/g, "");
        },
        ft = function (e) {
          return "".concat(e.label, " ").concat(e.value);
        };
      var Bt = {
          name: "1laao21-a11yText",
          styles:
            "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;",
        },
        yt = function (e) {
          return H("span", (0, J.Z)({ css: Bt }, e));
        };
      function _t(e) {
        e.in, e.out, e.onExited, e.appear, e.enter, e.exit;
        var t = e.innerRef,
          r =
            (e.emotion,
            Q(e, [
              "in",
              "out",
              "onExited",
              "appear",
              "enter",
              "exit",
              "innerRef",
              "emotion",
            ]));
        return H(
          "input",
          (0, J.Z)({ ref: t }, r, {
            css: G(
              {
                label: "dummyInput",
                background: 0,
                border: 0,
                fontSize: "inherit",
                outline: 0,
                padding: 0,
                width: 1,
                color: "transparent",
                left: -100,
                opacity: 0,
                position: "relative",
                transform: "scale(0)",
              },
              "",
            ),
          }),
        );
      }
      function gt(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = u(e);
          if (t) {
            var n = u(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return c(this, r);
        };
      }
      var ht = (function (e) {
          s(r, e);
          var t = gt(r);
          function r() {
            return i(this, r), t.apply(this, arguments);
          }
          return (
            (0, n.Z)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.innerRef((0, Y.findDOMNode)(this));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.innerRef(null);
                },
              },
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            r
          );
        })(d.Component),
        wt = ["boxSizing", "height", "overflow", "paddingRight", "position"],
        vt = {
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
          height: "100%",
        };
      function St(e) {
        e.preventDefault();
      }
      function Ft(e) {
        e.stopPropagation();
      }
      function Mt() {
        var e = this.scrollTop,
          t = this.scrollHeight,
          r = e + this.offsetHeight;
        0 === e ? (this.scrollTop = 1) : r === t && (this.scrollTop = e - 1);
      }
      function Rt() {
        return "ontouchstart" in window || navigator.maxTouchPoints;
      }
      function zt(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = u(e);
          if (t) {
            var n = u(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return c(this, r);
        };
      }
      var Et = !(!window.document || !window.document.createElement),
        Ct = 0,
        Tt = (function (e) {
          s(r, e);
          var t = zt(r);
          function r() {
            var e;
            i(this, r);
            for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
              a[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(a))).originalStyles = {}),
              (e.listenerOptions = { capture: !1, passive: !1 }),
              e
            );
          }
          return (
            (0, n.Z)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  if (Et) {
                    var t = this.props,
                      r = t.accountForScrollbars,
                      i = t.touchScrollTarget,
                      n = document.body,
                      a = n && n.style;
                    if (
                      (r &&
                        wt.forEach(function (t) {
                          var r = a && a[t];
                          e.originalStyles[t] = r;
                        }),
                      r && Ct < 1)
                    ) {
                      var s =
                          parseInt(this.originalStyles.paddingRight, 10) || 0,
                        o = document.body ? document.body.clientWidth : 0,
                        l = window.innerWidth - o + s || 0;
                      Object.keys(vt).forEach(function (e) {
                        var t = vt[e];
                        a && (a[e] = t);
                      }),
                        a && (a.paddingRight = "".concat(l, "px"));
                    }
                    n &&
                      Rt() &&
                      (n.addEventListener(
                        "touchmove",
                        St,
                        this.listenerOptions,
                      ),
                      i &&
                        (i.addEventListener(
                          "touchstart",
                          Mt,
                          this.listenerOptions,
                        ),
                        i.addEventListener(
                          "touchmove",
                          Ft,
                          this.listenerOptions,
                        ))),
                      (Ct += 1);
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var e = this;
                  if (Et) {
                    var t = this.props,
                      r = t.accountForScrollbars,
                      i = t.touchScrollTarget,
                      n = document.body,
                      a = n && n.style;
                    (Ct = Math.max(Ct - 1, 0)),
                      r &&
                        Ct < 1 &&
                        wt.forEach(function (t) {
                          var r = e.originalStyles[t];
                          a && (a[t] = r);
                        }),
                      n &&
                        Rt() &&
                        (n.removeEventListener(
                          "touchmove",
                          St,
                          this.listenerOptions,
                        ),
                        i &&
                          (i.removeEventListener(
                            "touchstart",
                            Mt,
                            this.listenerOptions,
                          ),
                          i.removeEventListener(
                            "touchmove",
                            Ft,
                            this.listenerOptions,
                          )));
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(d.Component);
      function Ot(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = u(e);
          if (t) {
            var n = u(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return c(this, r);
        };
      }
      Tt.defaultProps = { accountForScrollbars: !0 };
      var Wt = {
          name: "1dsbpcp",
          styles: "position:fixed;left:0;bottom:0;right:0;top:0;",
        },
        kt = (function (e) {
          s(r, e);
          var t = Ot(r);
          function r() {
            var e;
            i(this, r);
            for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
              a[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                touchScrollTarget: null,
              }),
              (e.getScrollTarget = function (t) {
                t !== e.state.touchScrollTarget &&
                  e.setState({ touchScrollTarget: t });
              }),
              (e.blurSelectInput = function () {
                document.activeElement && document.activeElement.blur();
              }),
              e
            );
          }
          return (
            (0, n.Z)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.children,
                    r = e.isEnabled,
                    i = this.state.touchScrollTarget;
                  return r
                    ? H(
                        "div",
                        null,
                        H("div", { onClick: this.blurSelectInput, css: Wt }),
                        H(ht, { innerRef: this.getScrollTarget }, t),
                        i ? H(Tt, { touchScrollTarget: i }) : null,
                      )
                    : t;
                },
              },
            ]),
            r
          );
        })(d.PureComponent);
      function It(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = u(e);
          if (t) {
            var n = u(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return c(this, r);
        };
      }
      var jt = (function (e) {
        s(r, e);
        var t = It(r);
        function r() {
          var e;
          i(this, r);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            ((e = t.call.apply(t, [this].concat(a))).isBottom = !1),
            (e.isTop = !1),
            (e.scrollTarget = void 0),
            (e.touchStart = void 0),
            (e.cancelScroll = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (e.handleEventDelta = function (t, r) {
              var i = e.props,
                n = i.onBottomArrive,
                a = i.onBottomLeave,
                s = i.onTopArrive,
                o = i.onTopLeave,
                l = e.scrollTarget,
                c = l.scrollTop,
                u = l.scrollHeight,
                d = l.clientHeight,
                m = e.scrollTarget,
                p = r > 0,
                b = u - d - c,
                f = !1;
              b > r && e.isBottom && (a && a(t), (e.isBottom = !1)),
                p && e.isTop && (o && o(t), (e.isTop = !1)),
                p && r > b
                  ? (n && !e.isBottom && n(t),
                    (m.scrollTop = u),
                    (f = !0),
                    (e.isBottom = !0))
                  : !p &&
                    -r > c &&
                    (s && !e.isTop && s(t),
                    (m.scrollTop = 0),
                    (f = !0),
                    (e.isTop = !0)),
                f && e.cancelScroll(t);
            }),
            (e.onWheel = function (t) {
              e.handleEventDelta(t, t.deltaY);
            }),
            (e.onTouchStart = function (t) {
              e.touchStart = t.changedTouches[0].clientY;
            }),
            (e.onTouchMove = function (t) {
              var r = e.touchStart - t.changedTouches[0].clientY;
              e.handleEventDelta(t, r);
            }),
            (e.getScrollTarget = function (t) {
              e.scrollTarget = t;
            }),
            e
          );
        }
        return (
          (0, n.Z)(r, [
            {
              key: "componentDidMount",
              value: function () {
                this.startListening(this.scrollTarget);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.stopListening(this.scrollTarget);
              },
            },
            {
              key: "startListening",
              value: function (e) {
                e &&
                  ("function" == typeof e.addEventListener &&
                    e.addEventListener("wheel", this.onWheel, !1),
                  "function" == typeof e.addEventListener &&
                    e.addEventListener("touchstart", this.onTouchStart, !1),
                  "function" == typeof e.addEventListener &&
                    e.addEventListener("touchmove", this.onTouchMove, !1));
              },
            },
            {
              key: "stopListening",
              value: function (e) {
                e &&
                  ("function" == typeof e.removeEventListener &&
                    e.removeEventListener("wheel", this.onWheel, !1),
                  "function" == typeof e.removeEventListener &&
                    e.removeEventListener("touchstart", this.onTouchStart, !1),
                  "function" == typeof e.removeEventListener &&
                    e.removeEventListener("touchmove", this.onTouchMove, !1));
              },
            },
            {
              key: "render",
              value: function () {
                return d.createElement(
                  ht,
                  { innerRef: this.getScrollTarget },
                  this.props.children,
                );
              },
            },
          ]),
          r
        );
      })(d.Component);
      function At(e) {
        var t = e.isEnabled,
          r = void 0 === t || t,
          i = Q(e, ["isEnabled"]);
        return r ? d.createElement(jt, i) : i.children;
      }
      var xt = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = t.isSearchable,
            i = t.isMulti,
            n = t.label,
            a = t.isDisabled,
            s = t.tabSelectsValue;
          switch (e) {
            case "menu":
              return "Use Up and Down to choose options"
                .concat(
                  a
                    ? ""
                    : ", press Enter to select the currently focused option",
                  ", press Escape to exit the menu",
                )
                .concat(
                  s ? ", press Tab to select the option and exit the menu" : "",
                  ".",
                );
            case "input":
              return ""
                .concat(n || "Select", " is focused ")
                .concat(
                  r ? ",type to refine list" : "",
                  ", press Down to open the menu, ",
                )
                .concat(i ? " press left to focus selected values" : "");
            case "value":
              return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
          }
        },
        Pt = function (e, t) {
          var r = t.value,
            i = t.isDisabled;
          if (r)
            switch (e) {
              case "deselect-option":
              case "pop-value":
              case "remove-value":
                return "option ".concat(r, ", deselected.");
              case "select-option":
                return "option ".concat(
                  r,
                  i ? " is disabled. Select another option." : ", selected.",
                );
            }
        },
        Dt = function (e) {
          return !!e.isDisabled;
        };
      var Ut = {
        clearIndicator: Xe,
        container: function (e) {
          var t = e.isDisabled;
          return {
            label: "container",
            direction: e.isRtl ? "rtl" : null,
            pointerEvents: t ? "none" : null,
            position: "relative",
          };
        },
        control: function (e) {
          var t = e.isDisabled,
            r = e.isFocused,
            i = e.theme,
            n = i.colors,
            a = i.borderRadius,
            s = i.spacing;
          return {
            label: "control",
            alignItems: "center",
            backgroundColor: t ? n.neutral5 : n.neutral0,
            borderColor: t ? n.neutral10 : r ? n.primary : n.neutral20,
            borderRadius: a,
            borderStyle: "solid",
            borderWidth: 1,
            boxShadow: r ? "0 0 0 1px ".concat(n.primary) : null,
            cursor: "default",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            minHeight: s.controlHeight,
            outline: "0 !important",
            position: "relative",
            transition: "all 100ms",
            "&:hover": { borderColor: r ? n.primary : n.neutral30 },
          };
        },
        dropdownIndicator: Ue,
        group: function (e) {
          var t = e.theme.spacing;
          return { paddingBottom: 2 * t.baseUnit, paddingTop: 2 * t.baseUnit };
        },
        groupHeading: function (e) {
          var t = e.theme.spacing;
          return {
            label: "group",
            color: "#999",
            cursor: "default",
            display: "block",
            fontSize: "75%",
            fontWeight: "500",
            marginBottom: "0.25em",
            paddingLeft: 3 * t.baseUnit,
            paddingRight: 3 * t.baseUnit,
            textTransform: "uppercase",
          };
        },
        indicatorsContainer: function () {
          return {
            alignItems: "center",
            alignSelf: "stretch",
            display: "flex",
            flexShrink: 0,
          };
        },
        indicatorSeparator: function (e) {
          var t = e.isDisabled,
            r = e.theme,
            i = r.spacing.baseUnit,
            n = r.colors;
          return {
            label: "indicatorSeparator",
            alignSelf: "stretch",
            backgroundColor: t ? n.neutral10 : n.neutral20,
            marginBottom: 2 * i,
            marginTop: 2 * i,
            width: 1,
          };
        },
        input: function (e) {
          var t = e.isDisabled,
            r = e.theme,
            i = r.spacing,
            n = r.colors;
          return {
            margin: i.baseUnit / 2,
            paddingBottom: i.baseUnit / 2,
            paddingTop: i.baseUnit / 2,
            visibility: t ? "hidden" : "visible",
            color: n.neutral80,
          };
        },
        loadingIndicator: function (e) {
          var t = e.isFocused,
            r = e.size,
            i = e.theme,
            n = i.colors,
            a = i.spacing.baseUnit;
          return {
            label: "loadingIndicator",
            color: t ? n.neutral60 : n.neutral20,
            display: "flex",
            padding: 2 * a,
            transition: "color 150ms",
            alignSelf: "center",
            fontSize: r,
            lineHeight: 1,
            marginRight: r,
            textAlign: "center",
            verticalAlign: "middle",
          };
        },
        loadingMessage: Me,
        menu: function (e) {
          var t,
            r = e.placement,
            i = e.theme,
            n = i.borderRadius,
            a = i.spacing,
            s = i.colors;
          return (
            ae(
              (t = { label: "menu" }),
              (function (e) {
                return e ? { bottom: "top", top: "bottom" }[e] : "bottom";
              })(r),
              "100%",
            ),
            ae(t, "backgroundColor", s.neutral0),
            ae(t, "borderRadius", n),
            ae(
              t,
              "boxShadow",
              "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
            ),
            ae(t, "marginBottom", a.menuGutter),
            ae(t, "marginTop", a.menuGutter),
            ae(t, "position", "absolute"),
            ae(t, "width", "100%"),
            ae(t, "zIndex", 1),
            t
          );
        },
        menuList: function (e) {
          var t = e.maxHeight,
            r = e.theme.spacing.baseUnit;
          return {
            maxHeight: t,
            overflowY: "auto",
            paddingBottom: r,
            paddingTop: r,
            position: "relative",
            WebkitOverflowScrolling: "touch",
          };
        },
        menuPortal: function (e) {
          var t = e.rect,
            r = e.offset,
            i = e.position;
          return {
            left: t.left,
            position: i,
            top: r,
            width: t.width,
            zIndex: 1,
          };
        },
        multiValue: function (e) {
          var t = e.theme,
            r = t.spacing,
            i = t.borderRadius;
          return {
            label: "multiValue",
            backgroundColor: t.colors.neutral10,
            borderRadius: i / 2,
            display: "flex",
            margin: r.baseUnit / 2,
            minWidth: 0,
          };
        },
        multiValueLabel: function (e) {
          var t = e.theme,
            r = t.borderRadius,
            i = t.colors,
            n = e.cropWithEllipsis;
          return {
            borderRadius: r / 2,
            color: i.neutral80,
            fontSize: "85%",
            overflow: "hidden",
            padding: 3,
            paddingLeft: 6,
            textOverflow: n ? "ellipsis" : null,
            whiteSpace: "nowrap",
          };
        },
        multiValueRemove: function (e) {
          var t = e.theme,
            r = t.spacing,
            i = t.borderRadius,
            n = t.colors;
          return {
            alignItems: "center",
            borderRadius: i / 2,
            backgroundColor: e.isFocused && n.dangerLight,
            display: "flex",
            paddingLeft: r.baseUnit,
            paddingRight: r.baseUnit,
            ":hover": { backgroundColor: n.dangerLight, color: n.danger },
          };
        },
        noOptionsMessage: Fe,
        option: function (e) {
          var t = e.isDisabled,
            r = e.isFocused,
            i = e.isSelected,
            n = e.theme,
            a = n.spacing,
            s = n.colors;
          return {
            label: "option",
            backgroundColor: i ? s.primary : r ? s.primary25 : "transparent",
            color: t ? s.neutral20 : i ? s.neutral0 : "inherit",
            cursor: "default",
            display: "block",
            fontSize: "inherit",
            padding: ""
              .concat(2 * a.baseUnit, "px ")
              .concat(3 * a.baseUnit, "px"),
            width: "100%",
            userSelect: "none",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            ":active": { backgroundColor: !t && (i ? s.primary : s.primary50) },
          };
        },
        placeholder: function (e) {
          var t = e.theme,
            r = t.spacing;
          return {
            label: "placeholder",
            color: t.colors.neutral50,
            marginLeft: r.baseUnit / 2,
            marginRight: r.baseUnit / 2,
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          };
        },
        singleValue: function (e) {
          var t = e.isDisabled,
            r = e.theme,
            i = r.spacing,
            n = r.colors;
          return {
            label: "singleValue",
            color: t ? n.neutral40 : n.neutral80,
            marginLeft: i.baseUnit / 2,
            marginRight: i.baseUnit / 2,
            maxWidth: "calc(100% - ".concat(2 * i.baseUnit, "px)"),
            overflow: "hidden",
            position: "absolute",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            top: "50%",
            transform: "translateY(-50%)",
          };
        },
        valueContainer: function (e) {
          var t = e.theme.spacing;
          return {
            alignItems: "center",
            display: "flex",
            flex: 1,
            flexWrap: "wrap",
            padding: ""
              .concat(t.baseUnit / 2, "px ")
              .concat(2 * t.baseUnit, "px"),
            WebkitOverflowScrolling: "touch",
            position: "relative",
            overflow: "hidden",
          };
        },
      };
      var Xt = {
        borderRadius: 4,
        colors: {
          primary: "#2684FF",
          primary75: "#4C9AFF",
          primary50: "#B2D4FF",
          primary25: "#DEEBFF",
          danger: "#DE350B",
          dangerLight: "#FFBDAD",
          neutral0: "hsl(0, 0%, 100%)",
          neutral5: "hsl(0, 0%, 95%)",
          neutral10: "hsl(0, 0%, 90%)",
          neutral20: "hsl(0, 0%, 80%)",
          neutral30: "hsl(0, 0%, 70%)",
          neutral40: "hsl(0, 0%, 60%)",
          neutral50: "hsl(0, 0%, 50%)",
          neutral60: "hsl(0, 0%, 40%)",
          neutral70: "hsl(0, 0%, 30%)",
          neutral80: "hsl(0, 0%, 20%)",
          neutral90: "hsl(0, 0%, 10%)",
        },
        spacing: { baseUnit: 4, controlHeight: 38, menuGutter: 8 },
      };
      function Nt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function Lt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Nt(Object(r), !0).forEach(function (t) {
                ae(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Nt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function Vt(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = u(e);
          if (t) {
            var n = u(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return c(this, r);
        };
      }
      var Gt,
        Ht = {
          backspaceRemovesValue: !0,
          blurInputOnSelect: fe(),
          captureMenuScroll: !fe(),
          closeMenuOnSelect: !0,
          closeMenuOnScroll: !1,
          components: {},
          controlShouldRenderValue: !0,
          escapeClearsValue: !1,
          filterOption: function (e, t) {
            var r = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? pt(Object(r), !0).forEach(function (t) {
                        ae(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r),
                      )
                    : pt(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t),
                        );
                      });
                }
                return e;
              })(
                {
                  ignoreCase: !0,
                  ignoreAccents: !0,
                  stringify: ft,
                  trim: !0,
                  matchFrom: "any",
                },
                Gt,
              ),
              i = r.ignoreCase,
              n = r.ignoreAccents,
              a = r.stringify,
              s = r.trim,
              o = r.matchFrom,
              l = s ? bt(t) : t,
              c = s ? bt(a(e)) : a(e);
            return (
              i && ((l = l.toLowerCase()), (c = c.toLowerCase())),
              n && ((l = mt(l)), (c = mt(c))),
              "start" === o ? c.substr(0, l.length) === l : c.indexOf(l) > -1
            );
          },
          formatGroupLabel: function (e) {
            return e.label;
          },
          getOptionLabel: function (e) {
            return e.label;
          },
          getOptionValue: function (e) {
            return e.value;
          },
          isDisabled: !1,
          isLoading: !1,
          isMulti: !1,
          isRtl: !1,
          isSearchable: !0,
          isOptionDisabled: Dt,
          loadingMessage: function () {
            return "Loading...";
          },
          maxMenuHeight: 300,
          minMenuHeight: 140,
          menuIsOpen: !1,
          menuPlacement: "bottom",
          menuPosition: "absolute",
          menuShouldBlockScroll: !1,
          menuShouldScrollIntoView: !(function () {
            try {
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent,
              );
            } catch (e) {
              return !1;
            }
          })(),
          noOptionsMessage: function () {
            return "No options";
          },
          openMenuOnFocus: !1,
          openMenuOnClick: !0,
          options: [],
          pageSize: 5,
          placeholder: "Select...",
          screenReaderStatus: function (e) {
            var t = e.count;
            return ""
              .concat(t, " result")
              .concat(1 !== t ? "s" : "", " available");
          },
          styles: {},
          tabIndex: "0",
          tabSelectsValue: !0,
        },
        qt = 1,
        Zt = (function (e) {
          s(r, e);
          var t = Vt(r);
          function r(e) {
            var n;
            i(this, r),
              ((n = t.call(this, e)).state = {
                ariaLiveSelection: "",
                ariaLiveContext: "",
                focusedOption: null,
                focusedValue: null,
                inputIsHidden: !1,
                isFocused: !1,
                menuOptions: { render: [], focusable: [] },
                selectValue: [],
              }),
              (n.blockOptionHover = !1),
              (n.isComposing = !1),
              (n.clearFocusValueOnUpdate = !1),
              (n.commonProps = void 0),
              (n.components = void 0),
              (n.hasGroups = !1),
              (n.initialTouchX = 0),
              (n.initialTouchY = 0),
              (n.inputIsHiddenAfterUpdate = void 0),
              (n.instancePrefix = ""),
              (n.openAfterFocus = !1),
              (n.scrollToFocusedOptionOnUpdate = !1),
              (n.userIsDragging = void 0),
              (n.controlRef = null),
              (n.getControlRef = function (e) {
                n.controlRef = e;
              }),
              (n.focusedOptionRef = null),
              (n.getFocusedOptionRef = function (e) {
                n.focusedOptionRef = e;
              }),
              (n.menuListRef = null),
              (n.getMenuListRef = function (e) {
                n.menuListRef = e;
              }),
              (n.inputRef = null),
              (n.getInputRef = function (e) {
                n.inputRef = e;
              }),
              (n.cacheComponents = function (e) {
                n.components = at({ components: e });
              }),
              (n.focus = n.focusInput),
              (n.blur = n.blurInput),
              (n.onChange = function (e, t) {
                var r = n.props,
                  i = r.onChange,
                  a = r.name;
                i(e, Lt(Lt({}, t), {}, { name: a }));
              }),
              (n.setValue = function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "set-value",
                  r = arguments.length > 2 ? arguments[2] : void 0,
                  i = n.props,
                  a = i.closeMenuOnSelect,
                  s = i.isMulti;
                n.onInputChange("", { action: "set-value" }),
                  a && ((n.inputIsHiddenAfterUpdate = !s), n.onMenuClose()),
                  (n.clearFocusValueOnUpdate = !0),
                  n.onChange(e, { action: t, option: r });
              }),
              (n.selectOption = function (e) {
                var t = n.props,
                  r = t.blurInputOnSelect,
                  i = t.isMulti,
                  a = n.state.selectValue;
                if (i)
                  if (n.isOptionSelected(e, a)) {
                    var s = n.getOptionValue(e);
                    n.setValue(
                      a.filter(function (e) {
                        return n.getOptionValue(e) !== s;
                      }),
                      "deselect-option",
                      e,
                    ),
                      n.announceAriaLiveSelection({
                        event: "deselect-option",
                        context: { value: n.getOptionLabel(e) },
                      });
                  } else
                    n.isOptionDisabled(e, a)
                      ? n.announceAriaLiveSelection({
                          event: "select-option",
                          context: {
                            value: n.getOptionLabel(e),
                            isDisabled: !0,
                          },
                        })
                      : (n.setValue([].concat(ie(a), [e]), "select-option", e),
                        n.announceAriaLiveSelection({
                          event: "select-option",
                          context: { value: n.getOptionLabel(e) },
                        }));
                else
                  n.isOptionDisabled(e, a)
                    ? n.announceAriaLiveSelection({
                        event: "select-option",
                        context: { value: n.getOptionLabel(e), isDisabled: !0 },
                      })
                    : (n.setValue(e, "select-option"),
                      n.announceAriaLiveSelection({
                        event: "select-option",
                        context: { value: n.getOptionLabel(e) },
                      }));
                r && n.blurInput();
              }),
              (n.removeValue = function (e) {
                var t = n.state.selectValue,
                  r = n.getOptionValue(e),
                  i = t.filter(function (e) {
                    return n.getOptionValue(e) !== r;
                  });
                n.onChange(i.length ? i : null, {
                  action: "remove-value",
                  removedValue: e,
                }),
                  n.announceAriaLiveSelection({
                    event: "remove-value",
                    context: { value: e ? n.getOptionLabel(e) : "" },
                  }),
                  n.focusInput();
              }),
              (n.clearValue = function () {
                n.onChange(null, { action: "clear" });
              }),
              (n.popValue = function () {
                var e = n.state.selectValue,
                  t = e[e.length - 1],
                  r = e.slice(0, e.length - 1);
                n.announceAriaLiveSelection({
                  event: "pop-value",
                  context: { value: t ? n.getOptionLabel(t) : "" },
                }),
                  n.onChange(r.length ? r : null, {
                    action: "pop-value",
                    removedValue: t,
                  });
              }),
              (n.getValue = function () {
                return n.state.selectValue;
              }),
              (n.cx = function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                return ce.apply(void 0, [n.props.classNamePrefix].concat(t));
              }),
              (n.getOptionLabel = function (e) {
                return n.props.getOptionLabel(e);
              }),
              (n.getOptionValue = function (e) {
                return n.props.getOptionValue(e);
              }),
              (n.getStyles = function (e, t) {
                var r = Ut[e](t);
                r.boxSizing = "border-box";
                var i = n.props.styles[e];
                return i ? i(r, t) : r;
              }),
              (n.getElementId = function (e) {
                return "".concat(n.instancePrefix, "-").concat(e);
              }),
              (n.getActiveDescendentId = function () {
                var e = n.props.menuIsOpen,
                  t = n.state,
                  r = t.menuOptions,
                  i = t.focusedOption;
                if (i && e) {
                  var a = r.focusable.indexOf(i),
                    s = r.render[a];
                  return s && s.key;
                }
              }),
              (n.announceAriaLiveSelection = function (e) {
                var t = e.event,
                  r = e.context;
                n.setState({ ariaLiveSelection: Pt(t, r) });
              }),
              (n.announceAriaLiveContext = function (e) {
                var t = e.event,
                  r = e.context;
                n.setState({
                  ariaLiveContext: xt(
                    t,
                    Lt(Lt({}, r), {}, { label: n.props["aria-label"] }),
                  ),
                });
              }),
              (n.onMenuMouseDown = function (e) {
                0 === e.button &&
                  (e.stopPropagation(), e.preventDefault(), n.focusInput());
              }),
              (n.onMenuMouseMove = function (e) {
                n.blockOptionHover = !1;
              }),
              (n.onControlMouseDown = function (e) {
                var t = n.props.openMenuOnClick;
                n.state.isFocused
                  ? n.props.menuIsOpen
                    ? "INPUT" !== e.target.tagName &&
                      "TEXTAREA" !== e.target.tagName &&
                      n.onMenuClose()
                    : t && n.openMenu("first")
                  : (t && (n.openAfterFocus = !0), n.focusInput()),
                  "INPUT" !== e.target.tagName &&
                    "TEXTAREA" !== e.target.tagName &&
                    e.preventDefault();
              }),
              (n.onDropdownIndicatorMouseDown = function (e) {
                if (
                  !(
                    (e && "mousedown" === e.type && 0 !== e.button) ||
                    n.props.isDisabled
                  )
                ) {
                  var t = n.props,
                    r = t.isMulti,
                    i = t.menuIsOpen;
                  n.focusInput(),
                    i
                      ? ((n.inputIsHiddenAfterUpdate = !r), n.onMenuClose())
                      : n.openMenu("first"),
                    e.preventDefault(),
                    e.stopPropagation();
                }
              }),
              (n.onClearIndicatorMouseDown = function (e) {
                (e && "mousedown" === e.type && 0 !== e.button) ||
                  (n.clearValue(),
                  e.stopPropagation(),
                  (n.openAfterFocus = !1),
                  "touchend" === e.type
                    ? n.focusInput()
                    : setTimeout(function () {
                        return n.focusInput();
                      }));
              }),
              (n.onScroll = function (e) {
                "boolean" == typeof n.props.closeMenuOnScroll
                  ? e.target instanceof HTMLElement &&
                    de(e.target) &&
                    n.props.onMenuClose()
                  : "function" == typeof n.props.closeMenuOnScroll &&
                    n.props.closeMenuOnScroll(e) &&
                    n.props.onMenuClose();
              }),
              (n.onCompositionStart = function () {
                n.isComposing = !0;
              }),
              (n.onCompositionEnd = function () {
                n.isComposing = !1;
              }),
              (n.onTouchStart = function (e) {
                var t = e.touches,
                  r = t && t.item(0);
                r &&
                  ((n.initialTouchX = r.clientX),
                  (n.initialTouchY = r.clientY),
                  (n.userIsDragging = !1));
              }),
              (n.onTouchMove = function (e) {
                var t = e.touches,
                  r = t && t.item(0);
                if (r) {
                  var i = Math.abs(r.clientX - n.initialTouchX),
                    a = Math.abs(r.clientY - n.initialTouchY);
                  n.userIsDragging = i > 5 || a > 5;
                }
              }),
              (n.onTouchEnd = function (e) {
                n.userIsDragging ||
                  (n.controlRef &&
                    !n.controlRef.contains(e.target) &&
                    n.menuListRef &&
                    !n.menuListRef.contains(e.target) &&
                    n.blurInput(),
                  (n.initialTouchX = 0),
                  (n.initialTouchY = 0));
              }),
              (n.onControlTouchEnd = function (e) {
                n.userIsDragging || n.onControlMouseDown(e);
              }),
              (n.onClearIndicatorTouchEnd = function (e) {
                n.userIsDragging || n.onClearIndicatorMouseDown(e);
              }),
              (n.onDropdownIndicatorTouchEnd = function (e) {
                n.userIsDragging || n.onDropdownIndicatorMouseDown(e);
              }),
              (n.handleInputChange = function (e) {
                var t = e.currentTarget.value;
                (n.inputIsHiddenAfterUpdate = !1),
                  n.onInputChange(t, { action: "input-change" }),
                  n.props.menuIsOpen || n.onMenuOpen();
              }),
              (n.onInputFocus = function (e) {
                var t = n.props,
                  r = t.isSearchable,
                  i = t.isMulti;
                n.props.onFocus && n.props.onFocus(e),
                  (n.inputIsHiddenAfterUpdate = !1),
                  n.announceAriaLiveContext({
                    event: "input",
                    context: { isSearchable: r, isMulti: i },
                  }),
                  n.setState({ isFocused: !0 }),
                  (n.openAfterFocus || n.props.openMenuOnFocus) &&
                    n.openMenu("first"),
                  (n.openAfterFocus = !1);
              }),
              (n.onInputBlur = function (e) {
                n.menuListRef && n.menuListRef.contains(document.activeElement)
                  ? n.inputRef.focus()
                  : (n.props.onBlur && n.props.onBlur(e),
                    n.onInputChange("", { action: "input-blur" }),
                    n.onMenuClose(),
                    n.setState({ focusedValue: null, isFocused: !1 }));
              }),
              (n.onOptionHover = function (e) {
                n.blockOptionHover ||
                  n.state.focusedOption === e ||
                  n.setState({ focusedOption: e });
              }),
              (n.shouldHideSelectedOptions = function () {
                var e = n.props,
                  t = e.hideSelectedOptions,
                  r = e.isMulti;
                return void 0 === t ? r : t;
              }),
              (n.onKeyDown = function (e) {
                var t = n.props,
                  r = t.isMulti,
                  i = t.backspaceRemovesValue,
                  a = t.escapeClearsValue,
                  s = t.inputValue,
                  o = t.isClearable,
                  l = t.isDisabled,
                  c = t.menuIsOpen,
                  u = t.onKeyDown,
                  d = t.tabSelectsValue,
                  m = t.openMenuOnFocus,
                  p = n.state,
                  b = p.focusedOption,
                  f = p.focusedValue,
                  B = p.selectValue;
                if (
                  !(l || ("function" == typeof u && (u(e), e.defaultPrevented)))
                ) {
                  switch (((n.blockOptionHover = !0), e.key)) {
                    case "ArrowLeft":
                      if (!r || s) return;
                      n.focusValue("previous");
                      break;
                    case "ArrowRight":
                      if (!r || s) return;
                      n.focusValue("next");
                      break;
                    case "Delete":
                    case "Backspace":
                      if (s) return;
                      if (f) n.removeValue(f);
                      else {
                        if (!i) return;
                        r ? n.popValue() : o && n.clearValue();
                      }
                      break;
                    case "Tab":
                      if (n.isComposing) return;
                      if (
                        e.shiftKey ||
                        !c ||
                        !d ||
                        !b ||
                        (m && n.isOptionSelected(b, B))
                      )
                        return;
                      n.selectOption(b);
                      break;
                    case "Enter":
                      if (229 === e.keyCode) break;
                      if (c) {
                        if (!b) return;
                        if (n.isComposing) return;
                        n.selectOption(b);
                        break;
                      }
                      return;
                    case "Escape":
                      c
                        ? ((n.inputIsHiddenAfterUpdate = !1),
                          n.onInputChange("", { action: "menu-close" }),
                          n.onMenuClose())
                        : o && a && n.clearValue();
                      break;
                    case " ":
                      if (s) return;
                      if (!c) {
                        n.openMenu("first");
                        break;
                      }
                      if (!b) return;
                      n.selectOption(b);
                      break;
                    case "ArrowUp":
                      c ? n.focusOption("up") : n.openMenu("last");
                      break;
                    case "ArrowDown":
                      c ? n.focusOption("down") : n.openMenu("first");
                      break;
                    case "PageUp":
                      if (!c) return;
                      n.focusOption("pageup");
                      break;
                    case "PageDown":
                      if (!c) return;
                      n.focusOption("pagedown");
                      break;
                    case "Home":
                      if (!c) return;
                      n.focusOption("first");
                      break;
                    case "End":
                      if (!c) return;
                      n.focusOption("last");
                      break;
                    default:
                      return;
                  }
                  e.preventDefault();
                }
              }),
              (n.buildMenuOptions = function (e, t) {
                var r = e.inputValue,
                  i = void 0 === r ? "" : r,
                  a = e.options,
                  s = function (e, r) {
                    var a = n.isOptionDisabled(e, t),
                      s = n.isOptionSelected(e, t),
                      o = n.getOptionLabel(e),
                      l = n.getOptionValue(e);
                    if (
                      !(
                        (n.shouldHideSelectedOptions() && s) ||
                        !n.filterOption({ label: o, value: l, data: e }, i)
                      )
                    ) {
                      var c = a
                          ? void 0
                          : function () {
                              return n.onOptionHover(e);
                            },
                        u = a
                          ? void 0
                          : function () {
                              return n.selectOption(e);
                            },
                        d = "".concat(n.getElementId("option"), "-").concat(r);
                      return {
                        innerProps: {
                          id: d,
                          onClick: u,
                          onMouseMove: c,
                          onMouseOver: c,
                          tabIndex: -1,
                        },
                        data: e,
                        isDisabled: a,
                        isSelected: s,
                        key: d,
                        label: o,
                        type: "option",
                        value: l,
                      };
                    }
                  };
                return a.reduce(
                  function (e, t, r) {
                    if (t.options) {
                      n.hasGroups || (n.hasGroups = !0);
                      var i = t.options
                        .map(function (t, i) {
                          var n = s(t, "".concat(r, "-").concat(i));
                          return n && e.focusable.push(t), n;
                        })
                        .filter(Boolean);
                      if (i.length) {
                        var a = ""
                          .concat(n.getElementId("group"), "-")
                          .concat(r);
                        e.render.push({
                          type: "group",
                          key: a,
                          data: t,
                          options: i,
                        });
                      }
                    } else {
                      var o = s(t, "".concat(r));
                      o && (e.render.push(o), e.focusable.push(t));
                    }
                    return e;
                  },
                  { render: [], focusable: [] },
                );
              });
            var a = e.value;
            (n.cacheComponents = (0, m.Z)(n.cacheComponents, ke).bind(
              (0, l.Z)(n),
            )),
              n.cacheComponents(e.components),
              (n.instancePrefix =
                "react-select-" + (n.props.instanceId || ++qt));
            var s = ue(a);
            n.buildMenuOptions = (0, m.Z)(n.buildMenuOptions, function (e, t) {
              var r = re(e, 2),
                i = r[0],
                n = r[1],
                a = re(t, 2),
                s = a[0];
              return (
                n === a[1] &&
                i.inputValue === s.inputValue &&
                i.options === s.options
              );
            }).bind((0, l.Z)(n));
            var o = e.menuIsOpen
              ? n.buildMenuOptions(e, s)
              : { render: [], focusable: [] };
            return (n.state.menuOptions = o), (n.state.selectValue = s), n;
          }
          return (
            (0, n.Z)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.startListeningComposition(),
                    this.startListeningToTouch(),
                    this.props.closeMenuOnScroll &&
                      document &&
                      document.addEventListener &&
                      document.addEventListener("scroll", this.onScroll, !0),
                    this.props.autoFocus && this.focusInput();
                },
              },
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  var t = this.props,
                    r = t.options,
                    i = t.value,
                    n = t.menuIsOpen,
                    a = t.inputValue;
                  if (
                    (this.cacheComponents(e.components),
                    e.value !== i ||
                      e.options !== r ||
                      e.menuIsOpen !== n ||
                      e.inputValue !== a)
                  ) {
                    var s = ue(e.value),
                      o = e.menuIsOpen
                        ? this.buildMenuOptions(e, s)
                        : { render: [], focusable: [] },
                      l = this.getNextFocusedValue(s),
                      c = this.getNextFocusedOption(o.focusable);
                    this.setState({
                      menuOptions: o,
                      selectValue: s,
                      focusedOption: c,
                      focusedValue: l,
                    });
                  }
                  null != this.inputIsHiddenAfterUpdate &&
                    (this.setState({
                      inputIsHidden: this.inputIsHiddenAfterUpdate,
                    }),
                    delete this.inputIsHiddenAfterUpdate);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t,
                    r,
                    i,
                    n,
                    a,
                    s = this.props,
                    o = s.isDisabled,
                    l = s.menuIsOpen,
                    c = this.state.isFocused;
                  ((c && !o && e.isDisabled) || (c && l && !e.menuIsOpen)) &&
                    this.focusInput(),
                    c &&
                      o &&
                      !e.isDisabled &&
                      this.setState({ isFocused: !1 }, this.onMenuClose),
                    this.menuListRef &&
                      this.focusedOptionRef &&
                      this.scrollToFocusedOptionOnUpdate &&
                      ((t = this.menuListRef),
                      (r = this.focusedOptionRef),
                      (i = t.getBoundingClientRect()),
                      (n = r.getBoundingClientRect()),
                      (a = r.offsetHeight / 3),
                      n.bottom + a > i.bottom
                        ? pe(
                            t,
                            Math.min(
                              r.offsetTop + r.clientHeight - t.offsetHeight + a,
                              t.scrollHeight,
                            ),
                          )
                        : n.top - a < i.top &&
                          pe(t, Math.max(r.offsetTop - a, 0)),
                      (this.scrollToFocusedOptionOnUpdate = !1));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.stopListeningComposition(),
                    this.stopListeningToTouch(),
                    document.removeEventListener("scroll", this.onScroll, !0);
                },
              },
              {
                key: "onMenuOpen",
                value: function () {
                  this.props.onMenuOpen();
                },
              },
              {
                key: "onMenuClose",
                value: function () {
                  var e = this.props,
                    t = e.isSearchable,
                    r = e.isMulti;
                  this.announceAriaLiveContext({
                    event: "input",
                    context: { isSearchable: t, isMulti: r },
                  }),
                    this.onInputChange("", { action: "menu-close" }),
                    this.props.onMenuClose();
                },
              },
              {
                key: "onInputChange",
                value: function (e, t) {
                  this.props.onInputChange(e, t);
                },
              },
              {
                key: "focusInput",
                value: function () {
                  this.inputRef && this.inputRef.focus();
                },
              },
              {
                key: "blurInput",
                value: function () {
                  this.inputRef && this.inputRef.blur();
                },
              },
              {
                key: "openMenu",
                value: function (e) {
                  var t = this,
                    r = this.state,
                    i = r.selectValue,
                    n = r.isFocused,
                    a = this.buildMenuOptions(this.props, i),
                    s = this.props,
                    o = s.isMulti,
                    l = s.tabSelectsValue,
                    c = "first" === e ? 0 : a.focusable.length - 1;
                  if (!o) {
                    var u = a.focusable.indexOf(i[0]);
                    u > -1 && (c = u);
                  }
                  (this.scrollToFocusedOptionOnUpdate = !(
                    n && this.menuListRef
                  )),
                    (this.inputIsHiddenAfterUpdate = !1),
                    this.setState(
                      {
                        menuOptions: a,
                        focusedValue: null,
                        focusedOption: a.focusable[c],
                      },
                      function () {
                        t.onMenuOpen(),
                          t.announceAriaLiveContext({
                            event: "menu",
                            context: { tabSelectsValue: l },
                          });
                      },
                    );
                },
              },
              {
                key: "focusValue",
                value: function (e) {
                  var t = this.props,
                    r = t.isMulti,
                    i = t.isSearchable,
                    n = this.state,
                    a = n.selectValue,
                    s = n.focusedValue;
                  if (r) {
                    this.setState({ focusedOption: null });
                    var o = a.indexOf(s);
                    s ||
                      ((o = -1),
                      this.announceAriaLiveContext({ event: "value" }));
                    var l = a.length - 1,
                      c = -1;
                    if (a.length) {
                      switch (e) {
                        case "previous":
                          c = 0 === o ? 0 : -1 === o ? l : o - 1;
                          break;
                        case "next":
                          o > -1 && o < l && (c = o + 1);
                      }
                      -1 === c &&
                        this.announceAriaLiveContext({
                          event: "input",
                          context: { isSearchable: i, isMulti: r },
                        }),
                        this.setState({
                          inputIsHidden: -1 !== c,
                          focusedValue: a[c],
                        });
                    }
                  }
                },
              },
              {
                key: "focusOption",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "first",
                    t = this.props,
                    r = t.pageSize,
                    i = t.tabSelectsValue,
                    n = this.state,
                    a = n.focusedOption,
                    s = n.menuOptions.focusable;
                  if (s.length) {
                    var o = 0,
                      l = s.indexOf(a);
                    a ||
                      ((l = -1),
                      this.announceAriaLiveContext({
                        event: "menu",
                        context: { tabSelectsValue: i },
                      })),
                      "up" === e
                        ? (o = l > 0 ? l - 1 : s.length - 1)
                        : "down" === e
                        ? (o = (l + 1) % s.length)
                        : "pageup" === e
                        ? (o = l - r) < 0 && (o = 0)
                        : "pagedown" === e
                        ? (o = l + r) > s.length - 1 && (o = s.length - 1)
                        : "last" === e && (o = s.length - 1),
                      (this.scrollToFocusedOptionOnUpdate = !0),
                      this.setState({
                        focusedOption: s[o],
                        focusedValue: null,
                      }),
                      this.announceAriaLiveContext({
                        event: "menu",
                        context: { isDisabled: Dt(s[o]), tabSelectsValue: i },
                      });
                  }
                },
              },
              {
                key: "getTheme",
                value: function () {
                  return this.props.theme
                    ? "function" == typeof this.props.theme
                      ? this.props.theme(Xt)
                      : Lt(Lt({}, Xt), this.props.theme)
                    : Xt;
                },
              },
              {
                key: "getCommonProps",
                value: function () {
                  var e = this.clearValue,
                    t = this.cx,
                    r = this.getStyles,
                    i = this.getValue,
                    n = this.setValue,
                    a = this.selectOption,
                    s = this.props,
                    o = s.isMulti,
                    l = s.isRtl,
                    c = s.options;
                  return {
                    cx: t,
                    clearValue: e,
                    getStyles: r,
                    getValue: i,
                    hasValue: this.hasValue(),
                    isMulti: o,
                    isRtl: l,
                    options: c,
                    selectOption: a,
                    setValue: n,
                    selectProps: s,
                    theme: this.getTheme(),
                  };
                },
              },
              {
                key: "getNextFocusedValue",
                value: function (e) {
                  if (this.clearFocusValueOnUpdate)
                    return (this.clearFocusValueOnUpdate = !1), null;
                  var t = this.state,
                    r = t.focusedValue,
                    i = t.selectValue.indexOf(r);
                  if (i > -1) {
                    if (e.indexOf(r) > -1) return r;
                    if (i < e.length) return e[i];
                  }
                  return null;
                },
              },
              {
                key: "getNextFocusedOption",
                value: function (e) {
                  var t = this.state.focusedOption;
                  return t && e.indexOf(t) > -1 ? t : e[0];
                },
              },
              {
                key: "hasValue",
                value: function () {
                  return this.state.selectValue.length > 0;
                },
              },
              {
                key: "hasOptions",
                value: function () {
                  return !!this.state.menuOptions.render.length;
                },
              },
              {
                key: "countOptions",
                value: function () {
                  return this.state.menuOptions.focusable.length;
                },
              },
              {
                key: "isClearable",
                value: function () {
                  var e = this.props,
                    t = e.isClearable,
                    r = e.isMulti;
                  return void 0 === t ? r : t;
                },
              },
              {
                key: "isOptionDisabled",
                value: function (e, t) {
                  return (
                    "function" == typeof this.props.isOptionDisabled &&
                    this.props.isOptionDisabled(e, t)
                  );
                },
              },
              {
                key: "isOptionSelected",
                value: function (e, t) {
                  var r = this;
                  if (t.indexOf(e) > -1) return !0;
                  if ("function" == typeof this.props.isOptionSelected)
                    return this.props.isOptionSelected(e, t);
                  var i = this.getOptionValue(e);
                  return t.some(function (e) {
                    return r.getOptionValue(e) === i;
                  });
                },
              },
              {
                key: "filterOption",
                value: function (e, t) {
                  return (
                    !this.props.filterOption || this.props.filterOption(e, t)
                  );
                },
              },
              {
                key: "formatOptionLabel",
                value: function (e, t) {
                  if ("function" == typeof this.props.formatOptionLabel) {
                    var r = this.props.inputValue,
                      i = this.state.selectValue;
                    return this.props.formatOptionLabel(e, {
                      context: t,
                      inputValue: r,
                      selectValue: i,
                    });
                  }
                  return this.getOptionLabel(e);
                },
              },
              {
                key: "formatGroupLabel",
                value: function (e) {
                  return this.props.formatGroupLabel(e);
                },
              },
              {
                key: "startListeningComposition",
                value: function () {
                  document &&
                    document.addEventListener &&
                    (document.addEventListener(
                      "compositionstart",
                      this.onCompositionStart,
                      !1,
                    ),
                    document.addEventListener(
                      "compositionend",
                      this.onCompositionEnd,
                      !1,
                    ));
                },
              },
              {
                key: "stopListeningComposition",
                value: function () {
                  document &&
                    document.removeEventListener &&
                    (document.removeEventListener(
                      "compositionstart",
                      this.onCompositionStart,
                    ),
                    document.removeEventListener(
                      "compositionend",
                      this.onCompositionEnd,
                    ));
                },
              },
              {
                key: "startListeningToTouch",
                value: function () {
                  document &&
                    document.addEventListener &&
                    (document.addEventListener(
                      "touchstart",
                      this.onTouchStart,
                      !1,
                    ),
                    document.addEventListener(
                      "touchmove",
                      this.onTouchMove,
                      !1,
                    ),
                    document.addEventListener("touchend", this.onTouchEnd, !1));
                },
              },
              {
                key: "stopListeningToTouch",
                value: function () {
                  document &&
                    document.removeEventListener &&
                    (document.removeEventListener(
                      "touchstart",
                      this.onTouchStart,
                    ),
                    document.removeEventListener("touchmove", this.onTouchMove),
                    document.removeEventListener("touchend", this.onTouchEnd));
                },
              },
              {
                key: "constructAriaLiveMessage",
                value: function () {
                  var e = this.state,
                    t = e.ariaLiveContext,
                    r = e.selectValue,
                    i = e.focusedValue,
                    n = e.focusedOption,
                    a = this.props,
                    s = a.options,
                    o = a.menuIsOpen,
                    l = a.inputValue,
                    c = a.screenReaderStatus,
                    u = i
                      ? (function (e) {
                          var t = e.focusedValue,
                            r = e.getOptionLabel,
                            i = e.selectValue;
                          return "value "
                            .concat(r(t), " focused, ")
                            .concat(i.indexOf(t) + 1, " of ")
                            .concat(i.length, ".");
                        })({
                          focusedValue: i,
                          getOptionLabel: this.getOptionLabel,
                          selectValue: r,
                        })
                      : "",
                    d =
                      n && o
                        ? (function (e) {
                            var t = e.focusedOption,
                              r = e.getOptionLabel,
                              i = e.options;
                            return "option "
                              .concat(r(t), " focused")
                              .concat(t.isDisabled ? " disabled" : "", ", ")
                              .concat(i.indexOf(t) + 1, " of ")
                              .concat(i.length, ".");
                          })({
                            focusedOption: n,
                            getOptionLabel: this.getOptionLabel,
                            options: s,
                          })
                        : "",
                    m = (function (e) {
                      var t = e.inputValue,
                        r = e.screenReaderMessage;
                      return ""
                        .concat(r)
                        .concat(t ? " for search term " + t : "", ".");
                    })({
                      inputValue: l,
                      screenReaderMessage: c({ count: this.countOptions() }),
                    });
                  return ""
                    .concat(u, " ")
                    .concat(d, " ")
                    .concat(m, " ")
                    .concat(t);
                },
              },
              {
                key: "renderInput",
                value: function () {
                  var e = this.props,
                    t = e.isDisabled,
                    r = e.isSearchable,
                    i = e.inputId,
                    n = e.inputValue,
                    a = e.tabIndex,
                    s = e.form,
                    o = this.components.Input,
                    l = this.state.inputIsHidden,
                    c = i || this.getElementId("input"),
                    u = {
                      "aria-autocomplete": "list",
                      "aria-label": this.props["aria-label"],
                      "aria-labelledby": this.props["aria-labelledby"],
                    };
                  if (!r)
                    return d.createElement(
                      _t,
                      (0, J.Z)(
                        {
                          id: c,
                          innerRef: this.getInputRef,
                          onBlur: this.onInputBlur,
                          onChange: oe,
                          onFocus: this.onInputFocus,
                          readOnly: !0,
                          disabled: t,
                          tabIndex: a,
                          form: s,
                          value: "",
                        },
                        u,
                      ),
                    );
                  var m = this.commonProps,
                    p = m.cx,
                    b = m.theme,
                    f = m.selectProps;
                  return d.createElement(
                    o,
                    (0, J.Z)(
                      {
                        autoCapitalize: "none",
                        autoComplete: "off",
                        autoCorrect: "off",
                        cx: p,
                        getStyles: this.getStyles,
                        id: c,
                        innerRef: this.getInputRef,
                        isDisabled: t,
                        isHidden: l,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        selectProps: f,
                        spellCheck: "false",
                        tabIndex: a,
                        form: s,
                        theme: b,
                        type: "text",
                        value: n,
                      },
                      u,
                    ),
                  );
                },
              },
              {
                key: "renderPlaceholderOrValue",
                value: function () {
                  var e = this,
                    t = this.components,
                    r = t.MultiValue,
                    i = t.MultiValueContainer,
                    n = t.MultiValueLabel,
                    a = t.MultiValueRemove,
                    s = t.SingleValue,
                    o = t.Placeholder,
                    l = this.commonProps,
                    c = this.props,
                    u = c.controlShouldRenderValue,
                    m = c.isDisabled,
                    p = c.isMulti,
                    b = c.inputValue,
                    f = c.placeholder,
                    B = this.state,
                    y = B.selectValue,
                    _ = B.focusedValue,
                    g = B.isFocused;
                  if (!this.hasValue() || !u)
                    return b
                      ? null
                      : d.createElement(
                          o,
                          (0, J.Z)({}, l, {
                            key: "placeholder",
                            isDisabled: m,
                            isFocused: g,
                          }),
                          f,
                        );
                  if (p) {
                    var h = y.map(function (t, s) {
                      var o = t === _;
                      return d.createElement(
                        r,
                        (0, J.Z)({}, l, {
                          components: { Container: i, Label: n, Remove: a },
                          isFocused: o,
                          isDisabled: m,
                          key: "".concat(e.getOptionValue(t)).concat(s),
                          index: s,
                          removeProps: {
                            onClick: function () {
                              return e.removeValue(t);
                            },
                            onTouchEnd: function () {
                              return e.removeValue(t);
                            },
                            onMouseDown: function (e) {
                              e.preventDefault(), e.stopPropagation();
                            },
                          },
                          data: t,
                        }),
                        e.formatOptionLabel(t, "value"),
                      );
                    });
                    return h;
                  }
                  if (b) return null;
                  var w = y[0];
                  return d.createElement(
                    s,
                    (0, J.Z)({}, l, { data: w, isDisabled: m }),
                    this.formatOptionLabel(w, "value"),
                  );
                },
              },
              {
                key: "renderClearIndicator",
                value: function () {
                  var e = this.components.ClearIndicator,
                    t = this.commonProps,
                    r = this.props,
                    i = r.isDisabled,
                    n = r.isLoading,
                    a = this.state.isFocused;
                  if (!this.isClearable() || !e || i || !this.hasValue() || n)
                    return null;
                  var s = {
                    onMouseDown: this.onClearIndicatorMouseDown,
                    onTouchEnd: this.onClearIndicatorTouchEnd,
                    "aria-hidden": "true",
                  };
                  return d.createElement(
                    e,
                    (0, J.Z)({}, t, { innerProps: s, isFocused: a }),
                  );
                },
              },
              {
                key: "renderLoadingIndicator",
                value: function () {
                  var e = this.components.LoadingIndicator,
                    t = this.commonProps,
                    r = this.props,
                    i = r.isDisabled,
                    n = r.isLoading,
                    a = this.state.isFocused;
                  if (!e || !n) return null;
                  return d.createElement(
                    e,
                    (0, J.Z)({}, t, {
                      innerProps: { "aria-hidden": "true" },
                      isDisabled: i,
                      isFocused: a,
                    }),
                  );
                },
              },
              {
                key: "renderIndicatorSeparator",
                value: function () {
                  var e = this.components,
                    t = e.DropdownIndicator,
                    r = e.IndicatorSeparator;
                  if (!t || !r) return null;
                  var i = this.commonProps,
                    n = this.props.isDisabled,
                    a = this.state.isFocused;
                  return d.createElement(
                    r,
                    (0, J.Z)({}, i, { isDisabled: n, isFocused: a }),
                  );
                },
              },
              {
                key: "renderDropdownIndicator",
                value: function () {
                  var e = this.components.DropdownIndicator;
                  if (!e) return null;
                  var t = this.commonProps,
                    r = this.props.isDisabled,
                    i = this.state.isFocused,
                    n = {
                      onMouseDown: this.onDropdownIndicatorMouseDown,
                      onTouchEnd: this.onDropdownIndicatorTouchEnd,
                      "aria-hidden": "true",
                    };
                  return d.createElement(
                    e,
                    (0, J.Z)({}, t, {
                      innerProps: n,
                      isDisabled: r,
                      isFocused: i,
                    }),
                  );
                },
              },
              {
                key: "renderMenu",
                value: function () {
                  var e = this,
                    t = this.components,
                    r = t.Group,
                    i = t.GroupHeading,
                    n = t.Menu,
                    a = t.MenuList,
                    s = t.MenuPortal,
                    o = t.LoadingMessage,
                    l = t.NoOptionsMessage,
                    c = t.Option,
                    u = this.commonProps,
                    m = this.state,
                    p = m.focusedOption,
                    b = m.menuOptions,
                    f = this.props,
                    B = f.captureMenuScroll,
                    y = f.inputValue,
                    _ = f.isLoading,
                    g = f.loadingMessage,
                    h = f.minMenuHeight,
                    w = f.maxMenuHeight,
                    v = f.menuIsOpen,
                    S = f.menuPlacement,
                    F = f.menuPosition,
                    M = f.menuPortalTarget,
                    R = f.menuShouldBlockScroll,
                    z = f.menuShouldScrollIntoView,
                    E = f.noOptionsMessage,
                    C = f.onMenuScrollToTop,
                    T = f.onMenuScrollToBottom;
                  if (!v) return null;
                  var O,
                    W = function (t) {
                      var r = p === t.data;
                      return (
                        (t.innerRef = r ? e.getFocusedOptionRef : void 0),
                        d.createElement(
                          c,
                          (0, J.Z)({}, u, t, { isFocused: r }),
                          e.formatOptionLabel(t.data, "menu"),
                        )
                      );
                    };
                  if (this.hasOptions())
                    O = b.render.map(function (t) {
                      if ("group" === t.type) {
                        t.type;
                        var n = Q(t, ["type"]),
                          a = "".concat(t.key, "-heading");
                        return d.createElement(
                          r,
                          (0, J.Z)({}, u, n, {
                            Heading: i,
                            headingProps: { id: a, data: t.data },
                            label: e.formatGroupLabel(t.data),
                          }),
                          t.options.map(function (e) {
                            return W(e);
                          }),
                        );
                      }
                      if ("option" === t.type) return W(t);
                    });
                  else if (_) {
                    var k = g({ inputValue: y });
                    if (null === k) return null;
                    O = d.createElement(o, u, k);
                  } else {
                    var I = E({ inputValue: y });
                    if (null === I) return null;
                    O = d.createElement(l, u, I);
                  }
                  var j = {
                      minMenuHeight: h,
                      maxMenuHeight: w,
                      menuPlacement: S,
                      menuPosition: F,
                      menuShouldScrollIntoView: z,
                    },
                    A = d.createElement(ve, (0, J.Z)({}, u, j), function (t) {
                      var r = t.ref,
                        i = t.placerProps,
                        s = i.placement,
                        o = i.maxHeight;
                      return d.createElement(
                        n,
                        (0, J.Z)({}, u, j, {
                          innerRef: r,
                          innerProps: {
                            onMouseDown: e.onMenuMouseDown,
                            onMouseMove: e.onMenuMouseMove,
                          },
                          isLoading: _,
                          placement: s,
                        }),
                        d.createElement(
                          At,
                          { isEnabled: B, onTopArrive: C, onBottomArrive: T },
                          d.createElement(
                            kt,
                            { isEnabled: R },
                            d.createElement(
                              a,
                              (0, J.Z)({}, u, {
                                innerRef: e.getMenuListRef,
                                isLoading: _,
                                maxHeight: o,
                              }),
                              O,
                            ),
                          ),
                        ),
                      );
                    });
                  return M || "fixed" === F
                    ? d.createElement(
                        s,
                        (0, J.Z)({}, u, {
                          appendTo: M,
                          controlElement: this.controlRef,
                          menuPlacement: S,
                          menuPosition: F,
                        }),
                        A,
                      )
                    : A;
                },
              },
              {
                key: "renderFormField",
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.delimiter,
                    i = t.isDisabled,
                    n = t.isMulti,
                    a = t.name,
                    s = this.state.selectValue;
                  if (a && !i) {
                    if (n) {
                      if (r) {
                        var o = s
                          .map(function (t) {
                            return e.getOptionValue(t);
                          })
                          .join(r);
                        return d.createElement("input", {
                          name: a,
                          type: "hidden",
                          value: o,
                        });
                      }
                      var l =
                        s.length > 0
                          ? s.map(function (t, r) {
                              return d.createElement("input", {
                                key: "i-".concat(r),
                                name: a,
                                type: "hidden",
                                value: e.getOptionValue(t),
                              });
                            })
                          : d.createElement("input", {
                              name: a,
                              type: "hidden",
                            });
                      return d.createElement("div", null, l);
                    }
                    var c = s[0] ? this.getOptionValue(s[0]) : "";
                    return d.createElement("input", {
                      name: a,
                      type: "hidden",
                      value: c,
                    });
                  }
                },
              },
              {
                key: "renderLiveRegion",
                value: function () {
                  return this.state.isFocused
                    ? d.createElement(
                        yt,
                        { "aria-live": "polite" },
                        d.createElement(
                          "span",
                          { id: "aria-selection-event" },
                          " ",
                          this.state.ariaLiveSelection,
                        ),
                        d.createElement(
                          "span",
                          { id: "aria-context" },
                          " ",
                          this.constructAriaLiveMessage(),
                        ),
                      )
                    : null;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.components,
                    t = e.Control,
                    r = e.IndicatorsContainer,
                    i = e.SelectContainer,
                    n = e.ValueContainer,
                    a = this.props,
                    s = a.className,
                    o = a.id,
                    l = a.isDisabled,
                    c = a.menuIsOpen,
                    u = this.state.isFocused,
                    m = (this.commonProps = this.getCommonProps());
                  return d.createElement(
                    i,
                    (0, J.Z)({}, m, {
                      className: s,
                      innerProps: { id: o, onKeyDown: this.onKeyDown },
                      isDisabled: l,
                      isFocused: u,
                    }),
                    this.renderLiveRegion(),
                    d.createElement(
                      t,
                      (0, J.Z)({}, m, {
                        innerRef: this.getControlRef,
                        innerProps: {
                          onMouseDown: this.onControlMouseDown,
                          onTouchEnd: this.onControlTouchEnd,
                        },
                        isDisabled: l,
                        isFocused: u,
                        menuIsOpen: c,
                      }),
                      d.createElement(
                        n,
                        (0, J.Z)({}, m, { isDisabled: l }),
                        this.renderPlaceholderOrValue(),
                        this.renderInput(),
                      ),
                      d.createElement(
                        r,
                        (0, J.Z)({}, m, { isDisabled: l }),
                        this.renderClearIndicator(),
                        this.renderLoadingIndicator(),
                        this.renderIndicatorSeparator(),
                        this.renderDropdownIndicator(),
                      ),
                    ),
                    this.renderMenu(),
                    this.renderFormField(),
                  );
                },
              },
            ]),
            r
          );
        })(d.Component);
      function $t(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = u(e);
          if (t) {
            var n = u(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return c(this, r);
        };
      }
      Zt.defaultProps = Ht;
      var Yt = {
        defaultInputValue: "",
        defaultMenuIsOpen: !1,
        defaultValue: null,
      };
      function Kt(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = u(e);
          if (t) {
            var n = u(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return c(this, r);
        };
      }
      d.Component;
      var Qt,
        Jt,
        er,
        tr =
          ((Qt = Zt),
          (er = Jt =
            (function (e) {
              s(r, e);
              var t = $t(r);
              function r() {
                var e;
                i(this, r);
                for (
                  var n = arguments.length, a = new Array(n), s = 0;
                  s < n;
                  s++
                )
                  a[s] = arguments[s];
                return (
                  ((e = t.call.apply(t, [this].concat(a))).select = void 0),
                  (e.state = {
                    inputValue:
                      void 0 !== e.props.inputValue
                        ? e.props.inputValue
                        : e.props.defaultInputValue,
                    menuIsOpen:
                      void 0 !== e.props.menuIsOpen
                        ? e.props.menuIsOpen
                        : e.props.defaultMenuIsOpen,
                    value:
                      void 0 !== e.props.value
                        ? e.props.value
                        : e.props.defaultValue,
                  }),
                  (e.onChange = function (t, r) {
                    e.callProp("onChange", t, r), e.setState({ value: t });
                  }),
                  (e.onInputChange = function (t, r) {
                    var i = e.callProp("onInputChange", t, r);
                    e.setState({ inputValue: void 0 !== i ? i : t });
                  }),
                  (e.onMenuOpen = function () {
                    e.callProp("onMenuOpen"), e.setState({ menuIsOpen: !0 });
                  }),
                  (e.onMenuClose = function () {
                    e.callProp("onMenuClose"), e.setState({ menuIsOpen: !1 });
                  }),
                  e
                );
              }
              return (
                (0, n.Z)(r, [
                  {
                    key: "focus",
                    value: function () {
                      this.select.focus();
                    },
                  },
                  {
                    key: "blur",
                    value: function () {
                      this.select.blur();
                    },
                  },
                  {
                    key: "getProp",
                    value: function (e) {
                      return void 0 !== this.props[e]
                        ? this.props[e]
                        : this.state[e];
                    },
                  },
                  {
                    key: "callProp",
                    value: function (e) {
                      if ("function" == typeof this.props[e]) {
                        for (
                          var t,
                            r = arguments.length,
                            i = new Array(r > 1 ? r - 1 : 0),
                            n = 1;
                          n < r;
                          n++
                        )
                          i[n - 1] = arguments[n];
                        return (t = this.props)[e].apply(t, i);
                      }
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        r =
                          (t.defaultInputValue,
                          t.defaultMenuIsOpen,
                          t.defaultValue,
                          Q(t, [
                            "defaultInputValue",
                            "defaultMenuIsOpen",
                            "defaultValue",
                          ]));
                      return d.createElement(
                        Qt,
                        (0, J.Z)({}, r, {
                          ref: function (t) {
                            e.select = t;
                          },
                          inputValue: this.getProp("inputValue"),
                          menuIsOpen: this.getProp("menuIsOpen"),
                          onChange: this.onChange,
                          onInputChange: this.onInputChange,
                          onMenuClose: this.onMenuClose,
                          onMenuOpen: this.onMenuOpen,
                          value: this.getProp("value"),
                        }),
                      );
                    },
                  },
                ]),
                r
              );
            })(d.Component)),
          (Jt.defaultProps = Yt),
          er);
      const rr = tr;
    },
    74802: (e, t, r) => {
      r.d(t, { h: () => z });
      var i = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var n = void 0;
      function a() {
        return (
          void 0 === n &&
            (n = (function () {
              if (!i) return !1;
              if (
                !window.addEventListener ||
                !window.removeEventListener ||
                !Object.defineProperty
              )
                return !1;
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                      e = !0;
                    },
                  }),
                  r = function () {};
                window.addEventListener("testPassiveEventSupport", r, t),
                  window.removeEventListener("testPassiveEventSupport", r, t);
              } catch (e) {}
              return e;
            })()),
          n
        );
      }
      function s(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
      }
      function o(e) {
        (this.target = e), (this.events = {});
      }
      (o.prototype.getEventHandlers = function (e, t) {
        var r,
          i =
            String(e) +
            " " +
            String(
              (r = t)
                ? !0 === r
                  ? 100
                  : (r.capture << 0) + (r.passive << 1) + (r.once << 2)
                : 0,
            );
        return (
          this.events[i] ||
            ((this.events[i] = { handlers: [], handleEvent: void 0 }),
            (this.events[i].nextHandlers = this.events[i].handlers)),
          this.events[i]
        );
      }),
        (o.prototype.handleEvent = function (e, t, r) {
          var i = this.getEventHandlers(e, t);
          (i.handlers = i.nextHandlers),
            i.handlers.forEach(function (e) {
              e && e(r);
            });
        }),
        (o.prototype.add = function (e, t, r) {
          var i = this,
            n = this.getEventHandlers(e, r);
          s(n),
            0 === n.nextHandlers.length &&
              ((n.handleEvent = this.handleEvent.bind(this, e, r)),
              this.target.addEventListener(e, n.handleEvent, r)),
            n.nextHandlers.push(t);
          var a = !0;
          return function () {
            if (a) {
              (a = !1), s(n);
              var o = n.nextHandlers.indexOf(t);
              n.nextHandlers.splice(o, 1),
                0 === n.nextHandlers.length &&
                  (i.target &&
                    i.target.removeEventListener(e, n.handleEvent, r),
                  (n.handleEvent = void 0));
            }
          };
        });
      var l = "__consolidated_events_handlers__";
      function c(e, t, r, i) {
        e[l] || (e[l] = new o(e));
        var n = (function (e) {
          if (e) return a() ? e : !!e.capture;
        })(i);
        return e[l].add(t, r, n);
      }
      var u = r(89526),
        d = r(338);
      function m(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function p(e) {
        return (
          (p = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          p(e)
        );
      }
      function b(e, t) {
        return (
          (b =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          b(e, t)
        );
      }
      function f(e, t) {
        return !t || ("object" != typeof t && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e)
          : t;
      }
      function B(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = p(e);
          if (t) {
            var n = p(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return f(this, r);
        };
      }
      function y(e, t) {
        var r,
          i =
            ((r = e),
            !isNaN(parseFloat(r)) && isFinite(r)
              ? parseFloat(r)
              : "px" === r.slice(-2)
              ? parseFloat(r.slice(0, -2))
              : void 0);
        if ("number" == typeof i) return i;
        var n = (function (e) {
          if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100;
        })(e);
        return "number" == typeof n ? n * t : void 0;
      }
      var _ = "above",
        g = "inside",
        h = "below",
        w = "invisible";
      function v(e) {
        return "string" == typeof e.type;
      }
      var S;
      var F = [];
      function M(e) {
        F.push(e),
          S ||
            (S = setTimeout(function () {
              var e;
              for (S = null; (e = F.shift()); ) e();
            }, 0));
        var t = !0;
        return function () {
          if (t) {
            t = !1;
            var r = F.indexOf(e);
            -1 !== r &&
              (F.splice(r, 1), !F.length && S && (clearTimeout(S), (S = null)));
          }
        };
      }
      var R = {
          debug: !1,
          scrollableAncestor: void 0,
          children: void 0,
          topOffset: "0px",
          bottomOffset: "0px",
          horizontal: !1,
          onEnter: function () {},
          onLeave: function () {},
          onPositionChange: function () {},
          fireOnRapidScroll: !0,
        },
        z = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && b(e, t);
          })(s, e);
          var t,
            i,
            n,
            a = B(s);
          function s(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              ((t = a.call(this, e)).refElement = function (e) {
                t._ref = e;
              }),
              t
            );
          }
          return (
            (t = s),
            (i = [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  s.getWindow() &&
                    (this.cancelOnNextTick = M(function () {
                      e.cancelOnNextTick = null;
                      var t = e.props,
                        r = t.children;
                      t.debug,
                        (function (e, t) {
                          if (e && !v(e) && !t)
                            throw new Error(
                              "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.",
                            );
                        })(r, e._ref),
                        (e._handleScroll = e._handleScroll.bind(e)),
                        (e.scrollableAncestor = e._findScrollableAncestor()),
                        (e.scrollEventListenerUnsubscribe = c(
                          e.scrollableAncestor,
                          "scroll",
                          e._handleScroll,
                          { passive: !0 },
                        )),
                        (e.resizeEventListenerUnsubscribe = c(
                          window,
                          "resize",
                          e._handleScroll,
                          { passive: !0 },
                        )),
                        e._handleScroll(null);
                    }));
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var e = this;
                  s.getWindow() &&
                    this.scrollableAncestor &&
                    (this.cancelOnNextTick ||
                      (this.cancelOnNextTick = M(function () {
                        (e.cancelOnNextTick = null), e._handleScroll(null);
                      })));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  s.getWindow() &&
                    (this.scrollEventListenerUnsubscribe &&
                      this.scrollEventListenerUnsubscribe(),
                    this.resizeEventListenerUnsubscribe &&
                      this.resizeEventListenerUnsubscribe(),
                    this.cancelOnNextTick && this.cancelOnNextTick());
                },
              },
              {
                key: "_findScrollableAncestor",
                value: function () {
                  var e = this.props,
                    t = e.horizontal,
                    i = e.scrollableAncestor;
                  if (i)
                    return (function (e) {
                      return "window" === e ? r.g.window : e;
                    })(i);
                  for (var n = this._ref; n.parentNode; ) {
                    if ((n = n.parentNode) === document.body) return window;
                    var a = window.getComputedStyle(n),
                      s =
                        (t
                          ? a.getPropertyValue("overflow-x")
                          : a.getPropertyValue("overflow-y")) ||
                        a.getPropertyValue("overflow");
                    if ("auto" === s || "scroll" === s || "overlay" === s)
                      return n;
                  }
                  return window;
                },
              },
              {
                key: "_handleScroll",
                value: function (e) {
                  if (this._ref) {
                    var t = this._getBounds(),
                      r = (function (e) {
                        return e.viewportBottom - e.viewportTop == 0
                          ? w
                          : (e.viewportTop <= e.waypointTop &&
                              e.waypointTop <= e.viewportBottom) ||
                            (e.viewportTop <= e.waypointBottom &&
                              e.waypointBottom <= e.viewportBottom) ||
                            (e.waypointTop <= e.viewportTop &&
                              e.viewportBottom <= e.waypointBottom)
                          ? g
                          : e.viewportBottom < e.waypointTop
                          ? h
                          : e.waypointTop < e.viewportTop
                          ? _
                          : w;
                      })(t),
                      i = this._previousPosition,
                      n = this.props,
                      a = (n.debug, n.onPositionChange),
                      s = n.onEnter,
                      o = n.onLeave,
                      l = n.fireOnRapidScroll;
                    if (((this._previousPosition = r), i !== r)) {
                      var c = {
                        currentPosition: r,
                        previousPosition: i,
                        event: e,
                        waypointTop: t.waypointTop,
                        waypointBottom: t.waypointBottom,
                        viewportTop: t.viewportTop,
                        viewportBottom: t.viewportBottom,
                      };
                      a.call(this, c),
                        r === g ? s.call(this, c) : i === g && o.call(this, c),
                        l &&
                          ((i === h && r === _) || (i === _ && r === h)) &&
                          (s.call(this, {
                            currentPosition: g,
                            previousPosition: i,
                            event: e,
                            waypointTop: t.waypointTop,
                            waypointBottom: t.waypointBottom,
                            viewportTop: t.viewportTop,
                            viewportBottom: t.viewportBottom,
                          }),
                          o.call(this, {
                            currentPosition: r,
                            previousPosition: g,
                            event: e,
                            waypointTop: t.waypointTop,
                            waypointBottom: t.waypointBottom,
                            viewportTop: t.viewportTop,
                            viewportBottom: t.viewportBottom,
                          }));
                    }
                  }
                },
              },
              {
                key: "_getBounds",
                value: function () {
                  var e,
                    t,
                    r = this.props,
                    i = r.horizontal,
                    n = (r.debug, this._ref.getBoundingClientRect()),
                    a = n.left,
                    s = n.top,
                    o = n.right,
                    l = n.bottom,
                    c = i ? a : s,
                    u = i ? o : l;
                  this.scrollableAncestor === window
                    ? ((e = i ? window.innerWidth : window.innerHeight),
                      (t = 0))
                    : ((e = i
                        ? this.scrollableAncestor.offsetWidth
                        : this.scrollableAncestor.offsetHeight),
                      (t = i
                        ? this.scrollableAncestor.getBoundingClientRect().left
                        : this.scrollableAncestor.getBoundingClientRect().top));
                  var d = this.props,
                    m = d.bottomOffset;
                  return {
                    waypointTop: c,
                    waypointBottom: u,
                    viewportTop: t + y(d.topOffset, e),
                    viewportBottom: t + e - y(m, e),
                  };
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.children;
                  return t
                    ? v(t) || (0, d.isForwardRef)(t)
                      ? u.cloneElement(t, {
                          ref: function (r) {
                            e.refElement(r),
                              t.ref &&
                                ("function" == typeof t.ref
                                  ? t.ref(r)
                                  : (t.ref.current = r));
                          },
                        })
                      : u.cloneElement(t, { innerRef: this.refElement })
                    : u.createElement("span", {
                        ref: this.refElement,
                        style: { fontSize: 0 },
                      });
                },
              },
            ]) && m(t.prototype, i),
            n && m(t, n),
            s
          );
        })(u.PureComponent);
      (z.above = _),
        (z.below = h),
        (z.inside = g),
        (z.invisible = w),
        (z.getWindow = function () {
          if ("undefined" != typeof window) return window;
        }),
        (z.defaultProps = R),
        (z.displayName = "Waypoint");
    },
    69851: (e, t, r) => {
      function i(e) {
        return (
          "game" === e ||
          "dlc" === e ||
          "software" === e ||
          "music" === e ||
          "application" === e ||
          "demo" === e ||
          "hardware" === e ||
          "mod" === e ||
          "video" == e ||
          "beta" === e ||
          "advertising" === e
        );
      }
      r.d(t, { m: () => i });
    },
    35089: (e, t, r) => {
      r.d(t, { mB: () => s });
      var i = r(45878);
      r(43898);
      i.Message;
      var n, a, s, o, l, c;
      !(function (e) {
        (e[(e.k_EDisplayStatusInvalid = 0)] = "k_EDisplayStatusInvalid"),
          (e[(e.k_EDisplayStatusLaunching = 1)] = "k_EDisplayStatusLaunching"),
          (e[(e.k_EDisplayStatusUninstalling = 2)] =
            "k_EDisplayStatusUninstalling"),
          (e[(e.k_EDisplayStatusInstalling = 3)] =
            "k_EDisplayStatusInstalling"),
          (e[(e.k_EDisplayStatusRunning = 4)] = "k_EDisplayStatusRunning"),
          (e[(e.k_EDisplayStatusValidating = 5)] =
            "k_EDisplayStatusValidating"),
          (e[(e.k_EDisplayStatusUpdating = 6)] = "k_EDisplayStatusUpdating"),
          (e[(e.k_EDisplayStatusDownloading = 7)] =
            "k_EDisplayStatusDownloading"),
          (e[(e.k_EDisplayStatusSynchronizing = 8)] =
            "k_EDisplayStatusSynchronizing"),
          (e[(e.k_EDisplayStatusReadyToInstall = 9)] =
            "k_EDisplayStatusReadyToInstall"),
          (e[(e.k_EDisplayStatusReadyToPreload = 10)] =
            "k_EDisplayStatusReadyToPreload"),
          (e[(e.k_EDisplayStatusReadyToLaunch = 11)] =
            "k_EDisplayStatusReadyToLaunch"),
          (e[(e.k_EDisplayStatusRegionRestricted = 12)] =
            "k_EDisplayStatusRegionRestricted"),
          (e[(e.k_EDisplayStatusPresaleOnly = 13)] =
            "k_EDisplayStatusPresaleOnly"),
          (e[(e.k_EDisplayStatusInvalidPlatform = 14)] =
            "k_EDisplayStatusInvalidPlatform"),
          (e[(e.k_EDisplayStatusPreloadComplete = 16)] =
            "k_EDisplayStatusPreloadComplete"),
          (e[(e.k_EDisplayStatusBorrowerLocked = 17)] =
            "k_EDisplayStatusBorrowerLocked"),
          (e[(e.k_EDisplayStatusUpdatePaused = 18)] =
            "k_EDisplayStatusUpdatePaused"),
          (e[(e.k_EDisplayStatusUpdateQueued = 19)] =
            "k_EDisplayStatusUpdateQueued"),
          (e[(e.k_EDisplayStatusUpdateRequired = 20)] =
            "k_EDisplayStatusUpdateRequired"),
          (e[(e.k_EDisplayStatusUpdateDisabled = 21)] =
            "k_EDisplayStatusUpdateDisabled"),
          (e[(e.k_EDisplayStatusDownloadPaused = 22)] =
            "k_EDisplayStatusDownloadPaused"),
          (e[(e.k_EDisplayStatusDownloadQueued = 23)] =
            "k_EDisplayStatusDownloadQueued"),
          (e[(e.k_EDisplayStatusDownloadRequired = 24)] =
            "k_EDisplayStatusDownloadRequired"),
          (e[(e.k_EDisplayStatusDownloadDisabled = 25)] =
            "k_EDisplayStatusDownloadDisabled"),
          (e[(e.k_EDisplayStatusLicensePending = 26)] =
            "k_EDisplayStatusLicensePending"),
          (e[(e.k_EDisplayStatusLicenseExpired = 27)] =
            "k_EDisplayStatusLicenseExpired"),
          (e[(e.k_EDisplayStatusAvailForFree = 28)] =
            "k_EDisplayStatusAvailForFree"),
          (e[(e.k_EDisplayStatusAvailToBorrow = 29)] =
            "k_EDisplayStatusAvailToBorrow"),
          (e[(e.k_EDisplayStatusAvailGuestPass = 30)] =
            "k_EDisplayStatusAvailGuestPass"),
          (e[(e.k_EDisplayStatusPurchase = 31)] = "k_EDisplayStatusPurchase"),
          (e[(e.k_EDisplayStatusUnavailable = 32)] =
            "k_EDisplayStatusUnavailable"),
          (e[(e.k_EDisplayStatusNotLaunchable = 33)] =
            "k_EDisplayStatusNotLaunchable"),
          (e[(e.k_EDisplayStatusCloudError = 34)] =
            "k_EDisplayStatusCloudError"),
          (e[(e.k_EDisplayStatusCloudOutOfDate = 35)] =
            "k_EDisplayStatusCloudOutOfDate"),
          (e[(e.k_EDisplayStatusTerminating = 36)] =
            "k_EDisplayStatusTerminating");
      })(n || (n = {})),
        (function (e) {
          (e[(e.k_EAppCloudStatusInvalid = 0)] = "k_EAppCloudStatusInvalid"),
            (e[(e.k_EAppCloudStatusDisabled = 1)] =
              "k_EAppCloudStatusDisabled"),
            (e[(e.k_EAppCloudStatusUnknown = 2)] = "k_EAppCloudStatusUnknown"),
            (e[(e.k_EAppCloudStatusSynchronized = 3)] =
              "k_EAppCloudStatusSynchronized"),
            (e[(e.k_EAppCloudStatusChecking = 4)] =
              "k_EAppCloudStatusChecking"),
            (e[(e.k_EAppCloudStatusOutOfSync = 5)] =
              "k_EAppCloudStatusOutOfSync"),
            (e[(e.k_EAppCloudStatusUploading = 6)] =
              "k_EAppCloudStatusUploading"),
            (e[(e.k_EAppCloudStatusDownloading = 7)] =
              "k_EAppCloudStatusDownloading"),
            (e[(e.k_EAppCloudStatusSyncFailed = 8)] =
              "k_EAppCloudStatusSyncFailed"),
            (e[(e.k_EAppCloudStatusConflict = 9)] =
              "k_EAppCloudStatusConflict"),
            (e[(e.k_EAppCloudStatusPendingElsewhere = 10)] =
              "k_EAppCloudStatusPendingElsewhere");
        })(a || (a = {})),
        (function (e) {
          (e[(e.k_EAppTypeInvalid = 0)] = "k_EAppTypeInvalid"),
            (e[(e.k_EAppTypeGame = 1)] = "k_EAppTypeGame"),
            (e[(e.k_EAppTypeApplication = 2)] = "k_EAppTypeApplication"),
            (e[(e.k_EAppTypeTool = 4)] = "k_EAppTypeTool"),
            (e[(e.k_EAppTypeDemo = 8)] = "k_EAppTypeDemo"),
            (e[(e.k_EAppTypeDeprected = 16)] = "k_EAppTypeDeprected"),
            (e[(e.k_EAppTypeDLC = 32)] = "k_EAppTypeDLC"),
            (e[(e.k_EAppTypeGuide = 64)] = "k_EAppTypeGuide"),
            (e[(e.k_EAppTypeDriver = 128)] = "k_EAppTypeDriver"),
            (e[(e.k_EAppTypeConfig = 256)] = "k_EAppTypeConfig"),
            (e[(e.k_EAppTypeHardware = 512)] = "k_EAppTypeHardware"),
            (e[(e.k_EAppTypeFranchise = 1024)] = "k_EAppTypeFranchise"),
            (e[(e.k_EAppTypeVideo = 2048)] = "k_EAppTypeVideo"),
            (e[(e.k_EAppTypePlugin = 4096)] = "k_EAppTypePlugin"),
            (e[(e.k_EAppTypeMusicAlbum = 8192)] = "k_EAppTypeMusicAlbum"),
            (e[(e.k_EAppTypeSeries = 16384)] = "k_EAppTypeSeries"),
            (e[(e.k_EAppTypeComic = 32768)] = "k_EAppTypeComic"),
            (e[(e.k_EAppTypeBeta = 65536)] = "k_EAppTypeBeta"),
            (e[(e.k_EAppTypeShortcut = 1073741824)] = "k_EAppTypeShortcut"),
            (e[(e.k_EAppTypeDepotOnly = -2147483648)] = "k_EAppTypeDepotOnly");
        })(s || (s = {})),
        (function (e) {
          (e[(e.k_EAppAssociationTypeInvalid = 0)] =
            "k_EAppAssociationTypeInvalid"),
            (e[(e.k_EAppAssociationTypePublisher = 1)] =
              "k_EAppAssociationTypePublisher"),
            (e[(e.k_EAppAssociationTypeDeveloper = 2)] =
              "k_EAppAssociationTypeDeveloper"),
            (e[(e.k_EAppAssociationTypeFranchise = 3)] =
              "k_EAppAssociationTypeFranchise");
        })(o || (o = {})),
        (function (e) {
          (e[(e.k_EAppControllerSupportLevelNone = 0)] =
            "k_EAppControllerSupportLevelNone"),
            (e[(e.k_EAppControllerSupportLevelPartial = 1)] =
              "k_EAppControllerSupportLevelPartial"),
            (e[(e.k_EAppControllerSupportLevelFull = 2)] =
              "k_EAppControllerSupportLevelFull");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EAppGamepadGyroTrackpadSupportLevelUnknown = -1)] =
            "k_EAppGamepadGyroTrackpadSupportLevelUnknown"),
            (e[(e.k_EAppGamepadGyroTrackpadSupportLevelNoGamepad = 0)] =
              "k_EAppGamepadGyroTrackpadSupportLevelNoGamepad"),
            (e[(e.k_EAppGamepadGyroTrackpadSupportLevelGamepad = 1)] =
              "k_EAppGamepadGyroTrackpadSupportLevelGamepad"),
            (e[(e.k_EAppGamepadGyroTrackpadSupportLevelSimultaneous = 2)] =
              "k_EAppGamepadGyroTrackpadSupportLevelSimultaneous");
        })(c || (c = {}));
    },
    90170: (e, t, r) => {
      r.d(t, {
        $m: () => Y,
        Mr: () => p,
        Q3: () => H,
        kY: () => Z,
        mE: () => c,
        mn: () => Q,
        q2: () => l,
      });
      var i = r(45878),
        n = r(43898),
        a = r(67328);
      const s = i.Message;
      var o, l, c, u, d, m, p, b;
      !(function (e) {
        (e[(e.k_EBroadcastChatPermissionPublic = 0)] =
          "k_EBroadcastChatPermissionPublic"),
          (e[(e.k_EBroadcastChatPermissionOwnsApp = 1)] =
            "k_EBroadcastChatPermissionOwnsApp");
      })(o || (o = {})),
        (function (e) {
          (e[(e.k_EBroadcastWatchLocation_Invalid = 0)] =
            "k_EBroadcastWatchLocation_Invalid"),
            (e[(e.k_EBroadcastWatchLocation_SteamTV_Tab = 1)] =
              "k_EBroadcastWatchLocation_SteamTV_Tab"),
            (e[(e.k_EBroadcastWatchLocation_SteamTV_WatchParty = 2)] =
              "k_EBroadcastWatchLocation_SteamTV_WatchParty"),
            (e[(e.k_EBroadcastWatchLocation_Chat_Tab = 3)] =
              "k_EBroadcastWatchLocation_Chat_Tab"),
            (e[(e.k_EBroadcastWatchLocation_Chat_WatchParty = 4)] =
              "k_EBroadcastWatchLocation_Chat_WatchParty"),
            (e[(e.k_EBroadcastWatchLocation_CommunityPage = 5)] =
              "k_EBroadcastWatchLocation_CommunityPage"),
            (e[(e.k_EBroadcastWatchLocation_StoreAppPage = 6)] =
              "k_EBroadcastWatchLocation_StoreAppPage"),
            (e[(e.k_EBroadcastWatchLocation_InGame = 7)] =
              "k_EBroadcastWatchLocation_InGame"),
            (e[(e.k_EBroadcastWatchLocation_BigPicture = 8)] =
              "k_EBroadcastWatchLocation_BigPicture"),
            (e[(e.k_EBroadcastWatchLocation_SalesPage = 9)] =
              "k_EBroadcastWatchLocation_SalesPage"),
            (e[(e.k_EBroadcastWatchLocation_CuratorPage = 10)] =
              "k_EBroadcastWatchLocation_CuratorPage"),
            (e[(e.k_EBroadcastWatchLocation_DeveloperPage = 11)] =
              "k_EBroadcastWatchLocation_DeveloperPage"),
            (e[(e.k_EBroadcastWatchLocation_Chat_Friends = 12)] =
              "k_EBroadcastWatchLocation_Chat_Friends"),
            (e[(e.k_EBroadcastWatchLocation_SteamTV_Web = 13)] =
              "k_EBroadcastWatchLocation_SteamTV_Web"),
            (e[(e.k_EBroadcastWatchLocation_DesktopUI_Overlay = 14)] =
              "k_EBroadcastWatchLocation_DesktopUI_Overlay");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EBroadcastChatBanClear = 0)] = "k_EBroadcastChatBanClear"),
            (e[(e.k_EBroadcastChatBanMute = 1)] = "k_EBroadcastChatBanMute"),
            (e[(e.k_EBroadcastChatBanShadow = 2)] =
              "k_EBroadcastChatBanShadow");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_EBroadcastRestrictionNone = 0)] =
            "k_EBroadcastRestrictionNone"),
            (e[(e.k_EBroadcastRestrictionNotSearchable = 1)] =
              "k_EBroadcastRestrictionNotSearchable"),
            (e[(e.k_EBroadcastRestrictionCantBroadcast = 2)] =
              "k_EBroadcastRestrictionCantBroadcast"),
            (e[(e.k_EBroadcastRestrictionUnbannable = 3)] =
              "k_EBroadcastRestrictionUnbannable");
        })(u || (u = {}));
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.permission || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  permission: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  gameid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  client_instance_id: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  title: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  cellid: { n: 5, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  rtmp_token: {
                    n: 6,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  thumbnail_upload: {
                    n: 7,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  client_beta: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  sysid: { n: 9, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  allow_webrtc: {
                    n: 10,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BeginBroadcastSession_Request";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.broadcast_id || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  thumbnail_upload_address: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  thumbnail_upload_token: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  thumbnail_interval_seconds: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  heartbeat_interval_seconds: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BeginBroadcastSession_Response";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.broadcast_id || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_EndBroadcastSession_Request";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_EndBroadcastSession_Response";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.broadcast_id || n.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  cellid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  as_rtmp: { n: 3, br: n.FE.readBool, bw: n.Xc.writeBool },
                  delay_seconds: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtmp_token: {
                    n: 5,
                    d: "0",
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  upload_ip_address: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  is_replay: { n: 7, br: n.FE.readBool, bw: n.Xc.writeBool },
                  sysid: { n: 8, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StartBroadcastUpload_Request";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.upload_token || n.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  upload_token: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  upload_address: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  broadcast_upload_id: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  enable_replay: {
                    n: 6,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  http_address: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StartBroadcastUpload_Response";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.broadcast_id || n.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  upload_token: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  upload_address: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  http_address: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  broadcast_upload_id: {
                    n: 5,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  heartbeat_interval_seconds: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  is_rtmp: { n: 7, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastUploadStarted_Notification";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.steamid || n.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastStatus_Request";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.gameid || n.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  gameid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  title: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  num_viewers: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  permission: { n: 4, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  is_rtmp: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                  seconds_delay: {
                    n: 6,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  is_publisher: { n: 7, br: n.FE.readBool, bw: n.Xc.writeBool },
                  thumbnail_url: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  update_interval: {
                    n: 9,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  is_uploading: {
                    n: 10,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  duration: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  is_replay: { n: 12, br: n.FE.readBool, bw: n.Xc.writeBool },
                  is_capturing_vod: {
                    n: 13,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  is_store_whitelisted: {
                    n: 14,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastStatus_Response";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.steamid || n.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastThumbnail_Request";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.thumbnail_url || n.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  thumbnail_url: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  update_interval: {
                    n: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  num_viewers: {
                    n: 3,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  duration: { n: 4, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastThumbnail_Response";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.steamid || n.aR(R.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  existing_broadcast_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  viewer_token: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  client_cell: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  watch_location: {
                    n: 6,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  is_webrtc: { n: 7, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WatchBroadcast_Request";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.response || n.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  response: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  mpd_url: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  broadcast_id: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  gameid: {
                    n: 4,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  title: { n: 5, br: n.FE.readString, bw: n.Xc.writeString },
                  num_viewers: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  permission: { n: 7, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  is_rtmp: { n: 8, br: n.FE.readBool, bw: n.Xc.writeBool },
                  seconds_delay: {
                    n: 9,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  viewer_token: {
                    n: 10,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  hls_m3u8_master_url: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  heartbeat_interval: {
                    n: 12,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  thumbnail_url: {
                    n: 13,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  is_webrtc: { n: 14, br: n.FE.readBool, bw: n.Xc.writeBool },
                  webrtc_session_id: {
                    n: 15,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  webrtc_offer_sdp: {
                    n: 16,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  webrtc_turn_server: {
                    n: 17,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  is_replay: { n: 18, br: n.FE.readBool, bw: n.Xc.writeBool },
                  duration: { n: 19, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  cdn_auth_url_parameters: {
                    n: 20,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WatchBroadcast_Response";
        }
      }
      !(function (e) {
        (e[(e.k_EWatchResponseReady = 1)] = "k_EWatchResponseReady"),
          (e[(e.k_EWatchResponseNotAvailable = 2)] =
            "k_EWatchResponseNotAvailable"),
          (e[(e.k_EWatchResponseWaitingForApproval = 3)] =
            "k_EWatchResponseWaitingForApproval"),
          (e[(e.k_EWatchResponseWaitingForStart = 4)] =
            "k_EWatchResponseWaitingForStart"),
          (e[(e.k_EWatchResponseInvalidSession = 5)] =
            "k_EWatchResponseInvalidSession"),
          (e[(e.k_EWatchResponseTooManyBroadcasts = 6)] =
            "k_EWatchResponseTooManyBroadcasts"),
          (e[(e.k_EWatchResponseWaitingForReconnect = 7)] =
            "k_EWatchResponseWaitingForReconnect"),
          (e[(e.k_EWatchResponseSystemNotSupported = 8)] =
            "k_EWatchResponseSystemNotSupported"),
          (e[(e.k_EWatchResponseUserRestricted = 9)] =
            "k_EWatchResponseUserRestricted"),
          (e[(e.k_EWatchResponseClientOutOfDate = 10)] =
            "k_EWatchResponseClientOutOfDate"),
          (e[(e.k_EWatchResponsePoorUploadQuality = 11)] =
            "k_EWatchResponsePoorUploadQuality"),
          (e[(e.k_EWatchResponseMissingSubscription = 12)] =
            "k_EWatchResponseMissingSubscription");
      })(d || (d = {}));
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.steamid || n.aR(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  viewer_token: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  representation: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_HeartbeatBroadcast_Notification";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.steamid || n.aR(C.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  viewer_token: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StopWatchingBroadcast_Notification";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.steamid || n.aR(T.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  approval_response: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_InviteToBroadcast_Request";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.success || n.aR(O.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  success: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_InviteToBroadcast_Response";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.permission || n.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  permission: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  gameid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  title: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  game_data_config: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SendBroadcastStateToServer_Request";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SendBroadcastStateToServer_Response";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.steamid || n.aR(I.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  state: { n: 2, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastViewerState_Notification";
        }
      }
      !(function (e) {
        (e[(e.k_EViewerNeedsApproval = 1)] = "k_EViewerNeedsApproval"),
          (e[(e.k_EViewerWatching = 2)] = "k_EViewerWatching"),
          (e[(e.k_EViewerLeft = 3)] = "k_EViewerLeft");
      })(m || (m = {}));
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.broadcast_id || n.aR(j.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WaitingBroadcastViewer_Notification";
        }
      }
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.broadcast_id || n.aR(A.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  broadcast_relay_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  upload_result: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  too_many_poor_uploads: {
                    n: 4,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = n.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StopBroadcastUpload_Notification";
        }
      }
      class x extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.broadcast_id || n.aR(x.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SessionClosed_Notification";
        }
      }
      class P extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.broadcast_id || n.aR(P.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  num_viewers: {
                    n: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = n.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastStatus_Notification";
        }
      }
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.broadcast_channel_id || n.aR(D.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  broadcast_channel_name: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  broadcast_channel_avatar: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = n.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastChannelLive_Notification";
        }
      }
      class U extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.thumbnail_upload_token || n.aR(U.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  thumbnail_upload_token: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  thumbnail_broadcast_session_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  thumbnail_data: {
                    n: 3,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
                  thumbnail_width: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  thumbnail_height: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SendThumbnailToRelay_Notification";
        }
      }
      class X extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.broadcast_upload_id || n.aR(X.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  broadcast_upload_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  upload_result: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = n.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_NotifyBroadcastUploadStop_Notification";
        }
      }
      class N extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.broadcaster_steamid || n.aR(N.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  broadcaster_steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_ViewerBroadcastInvite_Notification";
        }
      }
      class L extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.broadcast_id || n.aR(L.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = n.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_NotifyBroadcastSessionHeartbeat_Notification";
        }
      }
      class V extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.steamid || n.aR(V.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  client_ip: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  client_cell: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = n.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(V.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatInfo_Request";
        }
      }
      class G extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.chat_id || n.aR(G.M()),
            s.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  chat_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  view_url_template: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  flair_group_ids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatInfo_Response";
        }
      }
      class H extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.chat_id || n.aR(H.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  chat_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  message: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  instance_id: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  language: {
                    n: 4,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  country_code: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = n.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_PostChatMessage_Request";
        }
      }
      class q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.persona_name || n.aR(q.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  persona_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  in_game: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  result: { n: 3, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  cooldown_time_seconds: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_PostChatMessage_Response";
        }
      }
      class Z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.chat_id || n.aR(Z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  chat_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  flair: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = n.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_UpdateChatMessageFlair_Request";
        }
      }
      class $ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.result || n.aR($.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  result: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  chat_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  flair: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = n.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA($.M(), e, t);
        }
        static fromObject(e) {
          return n.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2($.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_UpdateChatMessageFlair_Response";
        }
      }
      class Y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.chat_id || n.aR(Y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  chat_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  user_steamid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  muted: { n: 3, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = n.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_MuteBroadcastChatUser_Request";
        }
      }
      class K extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new K();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_MuteBroadcastChatUser_Response";
        }
      }
      class Q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.chat_id || n.aR(Q.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  chat_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  user_steamid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = n.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_RemoveUserChatText_Request";
        }
      }
      class J extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new J();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_RemoveUserChatText_Response";
        }
      }
      class ee extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.chat_id || n.aR(ee.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  chat_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  user_steamid: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readFixed64String,
                    pbr: n.FE.readPackedFixed64String,
                    bw: n.Xc.writeRepeatedFixed64String,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = n.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ee.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatUserNames_Request";
        }
      }
      class te extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.persona_names || n.aR(te.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: { persona_names: { n: 1, c: re, r: !0, q: !0 } },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = n.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(te.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatUserNames_Response";
        }
      }
      class re extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.steam_id || n.aR(re.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  steam_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  persona: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = n.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(re.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
        }
      }
      class ie extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.steamid || n.aR(ie.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  broadcast_session_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  first_segment: {
                    n: 3,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  num_segments: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  clip_description: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = n.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ie.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StartBuildClip_Request";
        }
      }
      class ne extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.broadcast_clip_id || n.aR(ne.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = n.Bh(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ne.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StartBuildClip_Response";
        }
      }
      class ae extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.broadcast_clip_id || n.aR(ae.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = n.Bh(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ae.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBuildClipStatus_Request";
        }
      }
      class se extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new se();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBuildClipStatus_Response";
        }
      }
      class oe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.broadcast_clip_id || n.aR(oe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  start_time: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  end_time: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  video_description: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = n.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(oe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetClipDetails_Request";
        }
      }
      class le extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetClipDetails_Response";
        }
      }
      class ce extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.broadcast_clip_id || n.aR(ce.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = n.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ce.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetClipDetails_Request";
        }
      }
      class ue extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.broadcast_clip_id || n.aR(ue.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  video_id: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  channel_id: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  app_id: { n: 4, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  accountid_broadcaster: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accountid_clipmaker: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  video_description: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  start_time: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  length_milliseconds: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  thumbnail_path: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = n.Bh(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ue.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetClipDetails_Response";
        }
      }
      class de extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.broadcast_permission || n.aR(de.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  broadcast_permission: {
                    n: 1,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  update_token: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  broadcast_delay: {
                    n: 3,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  app_id: { n: 4, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  required_app_id: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  broadcast_chat_permission: {
                    n: 6,
                    d: o.k_EBroadcastChatPermissionPublic,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  broadcast_buffer: {
                    n: 7,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  steamid: {
                    n: 8,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  chat_rate_limit: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  enable_replay: {
                    n: 10,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  is_partner_chat_only: {
                    n: 11,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  wordban_list: {
                    n: 12,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = n.Bh(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(de.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetRTMPInfo_Request";
        }
      }
      class me extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new me();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetRTMPInfo_Response";
        }
      }
      class pe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.ip || n.aR(pe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  ip: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  steamid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = n.Bh(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(pe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetRTMPInfo_Request";
        }
      }
      class be extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.broadcast_permission || n.aR(be.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  broadcast_permission: {
                    n: 1,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  rtmp_host: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  rtmp_token: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  broadcast_delay: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  app_id: { n: 5, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  required_app_id: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  broadcast_chat_permission: {
                    n: 7,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  broadcast_buffer: {
                    n: 8,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  steamid: {
                    n: 9,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  chat_rate_limit: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  enable_replay: {
                    n: 11,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  is_partner_chat_only: {
                    n: 12,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  wordban_list: {
                    n: 13,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = n.Bh(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(be.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetRTMPInfo_Response";
        }
      }
      class fe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.row_limit || n.aR(fe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  row_limit: {
                    n: 1,
                    d: 100,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  start_time: {
                    n: 2,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  upload_id: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  steamid: {
                    n: 4,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  session_id: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = n.Bh(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(fe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastUploadStats_Request";
        }
      }
      class Be extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.upload_stats || n.aR(Be.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: { upload_stats: { n: 1, c: ye, r: !0, q: !0 } },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = n.Bh(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Be.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastUploadStats_Response";
        }
      }
      class ye extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.upload_result || n.aR(ye.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  upload_result: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_stopped: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  seconds_uploaded: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  max_viewers: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  resolution_x: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  resolution_y: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  avg_bandwidth: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  total_bytes: {
                    n: 8,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  app_id: { n: 9, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  total_unique_viewers: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  total_seconds_watched: {
                    n: 11,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  time_started: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  upload_id: {
                    n: 13,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  local_address: {
                    n: 14,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  remote_address: {
                    n: 15,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  frames_per_second: {
                    n: 16,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  num_representations: {
                    n: 17,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  app_name: {
                    n: 18,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  is_replay: { n: 19, br: n.FE.readBool, bw: n.Xc.writeBool },
                  session_id: {
                    n: 20,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = n.Bh(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ye.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
        }
      }
      class _e extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.upload_id || n.aR(_e.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  upload_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = n.Bh(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_e.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Request";
        }
      }
      class ge extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.viewer_stats || n.aR(ge.M()),
            s.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  viewer_stats: { n: 1, c: he, r: !0, q: !0 },
                  country_stats: { n: 2, c: we, r: !0, q: !0 },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = n.Bh(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ge.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Response";
        }
      }
      class he extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.time || n.aR(he.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  time: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  num_viewers: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = n.Bh(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(he.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
        }
      }
      class we extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.country_code || n.aR(we.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  country_code: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  num_viewers: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = n.Bh(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(we.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
        }
      }
      class ve extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.webrtc_session_id || n.aR(ve.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  webrtc_session_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  started: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  offer: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  resolution_x: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  resolution_y: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  fps: { n: 6, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = n.Bh(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ve.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStartResult_Request";
        }
      }
      class Se extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Se();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStartResult_Response";
        }
      }
      class Fe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.webrtc_session_id || n.aR(Fe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  webrtc_session_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = n.Bh(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Fe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStopped_Request";
        }
      }
      class Me extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Me();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStopped_Response";
        }
      }
      class Re extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.broadcaster_steamid || n.aR(Re.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  broadcaster_steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  answer: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = n.Bh(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Re.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCSetAnswer_Request";
        }
      }
      class ze extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ze();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCSetAnswer_Response";
        }
      }
      class Ee extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.sdp_mid || n.aR(Ee.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  sdp_mid: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  sdp_mline_index: {
                    n: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  candidate: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = n.Bh(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ee.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTC_Candidate";
        }
      }
      class Ce extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.webrtc_session_id || n.aR(Ce.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  webrtc_session_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  candidate: { n: 2, c: Ee },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = n.Bh(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ce.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddHostCandidate_Request";
        }
      }
      class Te extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Te();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddHostCandidate_Response";
        }
      }
      class Oe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.broadcaster_steamid || n.aR(Oe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  broadcaster_steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  candidate: { n: 3, c: Ee },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = n.Bh(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Oe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddViewerCandidate_Request";
        }
      }
      class We extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new We();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddViewerCandidate_Response";
        }
      }
      class ke extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.broadcaster_steamid || n.aR(ke.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  broadcaster_steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  candidate_generation: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = n.Bh(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ke.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCGetHostCandidates_Request";
        }
      }
      class Ie extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.candidate_generation || n.aR(Ie.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  candidate_generation: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  candidates: { n: 2, c: Ee, r: !0, q: !0 },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = n.Bh(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ie.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCGetHostCandidates_Response";
        }
      }
      class je extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.broadcast_session_id || n.aR(je.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = n.Bh(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(je.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCNeedTURNServer_Notification";
        }
      }
      class Ae extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.cellid || n.aR(Ae.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  cellid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = n.Bh(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ae.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCLookupTURNServer_Request";
        }
      }
      class xe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.turn_server || n.aR(xe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  turn_server: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = n.Bh(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(xe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCLookupTURNServer_Response";
        }
      }
      class Pe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.broadcast_session_id || n.aR(Pe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  turn_server: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = n.Bh(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Pe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCHaveTURNServer_Notification";
        }
      }
      class De extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.broadcast_session_id || n.aR(De.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  viewer_steamid: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  viewer_token: {
                    n: 4,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = n.Bh(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(De.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStart_Notification";
        }
      }
      class Ue extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.broadcast_session_id || n.aR(Ue.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  answer: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = n.Bh(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Ue.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCSetAnswer_Notification";
        }
      }
      class Xe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.broadcast_session_id || n.aR(Xe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  candidate: { n: 3, c: Ee },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = n.Bh(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Xe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Xe();
          return Xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddViewerCandidate_Notification";
        }
      }
      !(function (e) {
        (e.BeginBroadcastSession = function (e, t) {
          return e.SendMsg(
            "Broadcast.BeginBroadcastSession#1",
            (0, a.MD)(f, t),
            B,
            { ePrivilege: 1 },
          );
        }),
          (e.EndBroadcastSession = function (e, t) {
            return e.SendMsg(
              "Broadcast.EndBroadcastSession#1",
              (0, a.MD)(y, t),
              _,
              { ePrivilege: 1 },
            );
          }),
          (e.StartBroadcastUpload = function (e, t) {
            return e.SendMsg(
              "Broadcast.StartBroadcastUpload#1",
              (0, a.MD)(g, t),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.NotifyBroadcastUploadStop = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              (0, a.MD)(X, t),
              { ePrivilege: 1 },
            );
          }),
          (e.WatchBroadcast = function (e, t) {
            return e.SendMsg("Broadcast.WatchBroadcast#1", (0, a.MD)(R, t), z, {
              ePrivilege: 2,
            });
          }),
          (e.HeartbeatBroadcast = function (e, t) {
            return e.SendNotification(
              "Broadcast.HeartbeatBroadcast#1",
              (0, a.MD)(E, t),
              { ePrivilege: 2 },
            );
          }),
          (e.StopWatchingBroadcast = function (e, t) {
            return e.SendNotification(
              "Broadcast.StopWatchingBroadcast#1",
              (0, a.MD)(C, t),
              { ePrivilege: 2 },
            );
          }),
          (e.GetBroadcastStatus = function (e, t) {
            return e.SendMsg(
              "Broadcast.GetBroadcastStatus#1",
              (0, a.MD)(v, t),
              S,
              { ePrivilege: 2 },
            );
          }),
          (e.GetBroadcastThumbnail = function (e, t) {
            return e.SendMsg(
              "Broadcast.GetBroadcastThumbnail#1",
              (0, a.MD)(F, t),
              M,
              { ePrivilege: 2 },
            );
          }),
          (e.InviteToBroadcast = function (e, t) {
            return e.SendMsg(
              "Broadcast.InviteToBroadcast#1",
              (0, a.MD)(T, t),
              O,
              { ePrivilege: 1 },
            );
          }),
          (e.SendBroadcastStateToServer = function (e, t) {
            return e.SendMsg(
              "Broadcast.SendBroadcastStateToServer#1",
              (0, a.MD)(W, t),
              k,
              { ePrivilege: 1 },
            );
          }),
          (e.NotifyBroadcastSessionHeartbeat = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              (0, a.MD)(L, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetBroadcastChatInfo = function (e, t) {
            return e.SendMsg(
              "Broadcast.GetBroadcastChatInfo#1",
              (0, a.MD)(V, t),
              G,
              { ePrivilege: 2 },
            );
          }),
          (e.PostChatMessage = function (e, t) {
            return e.SendMsg(
              "Broadcast.PostChatMessage#1",
              (0, a.MD)(H, t),
              q,
              { ePrivilege: 3 },
            );
          }),
          (e.UpdateChatMessageFlair = function (e, t) {
            return e.SendMsg(
              "Broadcast.UpdateChatMessageFlair#1",
              (0, a.MD)(Z, t),
              $,
              { ePrivilege: 1 },
            );
          }),
          (e.MuteBroadcastChatUser = function (e, t) {
            return e.SendMsg(
              "Broadcast.MuteBroadcastChatUser#1",
              (0, a.MD)(Y, t),
              K,
              { ePrivilege: 3 },
            );
          }),
          (e.RemoveUserChatText = function (e, t) {
            return e.SendMsg(
              "Broadcast.RemoveUserChatText#1",
              (0, a.MD)(Q, t),
              J,
              { ePrivilege: 3 },
            );
          }),
          (e.GetBroadcastChatUserNames = function (e, t) {
            return e.SendMsg(
              "Broadcast.GetBroadcastChatUserNames#1",
              (0, a.MD)(ee, t),
              te,
              { ePrivilege: 1 },
            );
          }),
          (e.StartBuildClip = function (e, t) {
            return e.SendMsg(
              "Broadcast.StartBuildClip#1",
              (0, a.MD)(ie, t),
              ne,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetBuildClipStatus = function (e, t) {
            return e.SendMsg(
              "Broadcast.GetBuildClipStatus#1",
              (0, a.MD)(ae, t),
              se,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.SetClipDetails = function (e, t) {
            return e.SendMsg(
              "Broadcast.SetClipDetails#1",
              (0, a.MD)(oe, t),
              le,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetClipDetails = function (e, t) {
            return e.SendMsg(
              "Broadcast.GetClipDetails#1",
              (0, a.MD)(ce, t),
              ue,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.SetRTMPInfo = function (e, t) {
            return e.SendMsg("Broadcast.SetRTMPInfo#1", (0, a.MD)(de, t), me, {
              ePrivilege: 1,
            });
          }),
          (e.GetRTMPInfo = function (e, t) {
            return e.SendMsg("Broadcast.GetRTMPInfo#1", (0, a.MD)(pe, t), be, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.NotifyWebRTCHaveTURNServer = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              (0, a.MD)(Pe, t),
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCStartResult = function (e, t) {
            return e.SendMsg(
              "Broadcast.WebRTCStartResult#1",
              (0, a.MD)(ve, t),
              Se,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCStopped = function (e, t) {
            return e.SendMsg(
              "Broadcast.WebRTCStopped#1",
              (0, a.MD)(Fe, t),
              Me,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCSetAnswer = function (e, t) {
            return e.SendMsg(
              "Broadcast.WebRTCSetAnswer#1",
              (0, a.MD)(Re, t),
              ze,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCLookupTURNServer = function (e, t) {
            return e.SendMsg(
              "Broadcast.WebRTCLookupTURNServer#1",
              (0, a.MD)(Ae, t),
              xe,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCAddHostCandidate = function (e, t) {
            return e.SendMsg(
              "Broadcast.WebRTCAddHostCandidate#1",
              (0, a.MD)(Ce, t),
              Te,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCAddViewerCandidate = function (e, t) {
            return e.SendMsg(
              "Broadcast.WebRTCAddViewerCandidate#1",
              (0, a.MD)(Oe, t),
              We,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCGetHostCandidates = function (e, t) {
            return e.SendMsg(
              "Broadcast.WebRTCGetHostCandidates#1",
              (0, a.MD)(ke, t),
              Ie,
              { ePrivilege: 1 },
            );
          }),
          (e.GetBroadcastUploadStats = function (e, t) {
            return e.SendMsg(
              "Broadcast.GetBroadcastUploadStats#1",
              (0, a.MD)(fe, t),
              Be,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetBroadcastViewerStats = function (e, t) {
            return e.SendMsg(
              "Broadcast.GetBroadcastViewerStats#1",
              (0, a.MD)(_e, t),
              ge,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(p || (p = {})),
        (function (e) {
          (e.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: I,
          }),
            (e.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: j,
            }),
            (e.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: w,
            }),
            (e.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: A,
            }),
            (e.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: x,
            }),
            (e.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: N,
            }),
            (e.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: P,
            }),
            (e.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: D,
            }),
            (e.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: U,
            }),
            (e.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: je,
            }),
            (e.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: De,
            }),
            (e.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: Ue,
            }),
            (e.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: Xe,
            });
        })(b || (b = {}));
    },
    42525: (e, t, r) => {
      r.d(t, { jI: () => o });
      var i = r(45878),
        n = r(43898),
        a = r(67328);
      const s = i.Message;
      var o, l;
      !(function (e) {
        (e[(e.k_EClanAccountFlag_None = 0)] = "k_EClanAccountFlag_None"),
          (e[(e.k_EClanAccountFlag_TrustedPress = 1)] =
            "k_EClanAccountFlag_TrustedPress"),
          (e[(e.k_EClanAccountFlag_AllowClanImages = 2)] =
            "k_EClanAccountFlag_AllowClanImages"),
          (e[(e.k_EClanAccountFlag_AllowRSSFeed = 4)] =
            "k_EClanAccountFlag_AllowRSSFeed"),
          (e[(e.k_EClanAccountFlag_AllowPartnerEventEditor = 8)] =
            "k_EClanAccountFlag_AllowPartnerEventEditor"),
          (e[(e.k_EClanAccountFlag_AllowFAQEditing = 16)] =
            "k_EClanAccountFlag_AllowFAQEditing"),
          (e[(e.k_EClanAccountFlag_AllowSalePageEditing = 32)] =
            "k_EClanAccountFlag_AllowSalePageEditing");
      })(o || (o = {}));
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.steamid || n.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  accept: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Request";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new u();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Response";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.requests || n.aR(d.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  requests: { n: 1, c: m, r: !0, q: !0 },
                  cursor: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  count: {
                    n: 3,
                    d: 100,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.appid || n.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  start_build_id: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  end_build_id: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  branch: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.matches || n.aR(p.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  matches: { n: 1, c: b, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  next_cursor: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.appid || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  build_id: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  branch: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  clan_event_gid: {
                    n: 4,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  clan_account_id: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
        }
      }
      !(function (e) {
        (e.RespondToClanInvite = function (e, t) {
          return e.SendMsg("Clan.RespondToClanInvite#1", (0, a.MD)(c, t), u, {
            ePrivilege: 1,
          });
        }),
          (e.GetPartnerEventsByBuildIDRange = function (e, t) {
            return e.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, a.MD)(d, t),
              p,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(l || (l = {}));
    },
    12623: (e, t, r) => {
      r.d(t, {
        AE: () => v,
        DI: () => de,
        Fi: () => S,
        Op: () => me,
        Sz: () => g,
        Y3: () => X,
        n6: () => L,
        tj: () => M,
        ur: () => d,
      });
      var i = r(45878),
        n = r(43898),
        a = r(67328),
        s = r(76322);
      const o = i.Message;
      var l, c, u, d, m, p, b, f, B, y, _, g, h, w, v;
      !(function (e) {
        (e[(e.k_ECommentDeleteReason_Invalid = 0)] =
          "k_ECommentDeleteReason_Invalid"),
          (e[(e.k_ECommentDeleteReason_User = 1)] =
            "k_ECommentDeleteReason_User"),
          (e[(e.k_ECommentDeleteReason_ThreadOwner = 2)] =
            "k_ECommentDeleteReason_ThreadOwner"),
          (e[(e.k_ECommentDeleteReason_Moderator = 3)] =
            "k_ECommentDeleteReason_Moderator"),
          (e[(e.k_ECommentDeleteReason_Support = 4)] =
            "k_ECommentDeleteReason_Support"),
          (e[(e.k_ECommentDeleteReason_Spam = 5)] =
            "k_ECommentDeleteReason_Spam"),
          (e[(e.k_ECommentDeleteReason_AccountDeletion = 6)] =
            "k_ECommentDeleteReason_AccountDeletion");
      })(l || (l = {})),
        (function (e) {
          (e[(e.k_ECommunityWordFilterTypeInvalid = 0)] =
            "k_ECommunityWordFilterTypeInvalid"),
            (e[(e.k_ECommunityWordFilterTypeBadWords = 1)] =
              "k_ECommunityWordFilterTypeBadWords"),
            (e[(e.k_ECommunityWordFilterTypeBlacklistedURLs = 2)] =
              "k_ECommunityWordFilterTypeBlacklistedURLs"),
            (e[(e.k_ECommunityWordFilterTypeWhitelistedGreenlightURLs = 3)] =
              "k_ECommunityWordFilterTypeWhitelistedGreenlightURLs"),
            (e[(e.k_ECommunityWordFilterTypeBlacklistOverrideDomains = 4)] =
              "k_ECommunityWordFilterTypeBlacklistOverrideDomains"),
            (e[(e.k_ECommunityWordFilterTypeBadWordsInChina = 5)] =
              "k_ECommunityWordFilterTypeBadWordsInChina"),
            (e[(e.k_ECommunityWordFilterTypeCleanWords = 6)] =
              "k_ECommunityWordFilterTypeCleanWords"),
            (e[(e.k_ECommunityWordFilterTypeCleanWordsComplete = 7)] =
              "k_ECommunityWordFilterTypeCleanWordsComplete"),
            (e[(e.k_ECommunityWordFilterTypeBadNames = 8)] =
              "k_ECommunityWordFilterTypeBadNames");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_ECommunityWordFilterReason_Invalid = 0)] =
            "k_ECommunityWordFilterReason_Invalid"),
            (e[(e.k_ECommunityWordFilterReason_Phishing = 1)] =
              "k_ECommunityWordFilterReason_Phishing"),
            (e[(e.k_ECommunityWordFilterReason_Spam = 2)] =
              "k_ECommunityWordFilterReason_Spam"),
            (e[(e.k_ECommunityWordFilterReason_AdultContent = 3)] =
              "k_ECommunityWordFilterReason_AdultContent"),
            (e[(e.k_ECommunityWordFilterReason_Cheat = 4)] =
              "k_ECommunityWordFilterReason_Cheat"),
            (e[(e.k_ECommunityWordFilterReason_Referral = 5)] =
              "k_ECommunityWordFilterReason_Referral"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageStrongProfanity = 6)
            ] =
              "k_ECommunityWordFilterReason_InappropriateLanguageStrongProfanity"),
            (e[(e.k_ECommunityWordFilterReason_Piracy = 7)] =
              "k_ECommunityWordFilterReason_Piracy"),
            (e[(e.k_ECommunityWordFilterReason_Scam = 8)] =
              "k_ECommunityWordFilterReason_Scam"),
            (e[(e.k_ECommunityWordFilterReason_Malware = 9)] =
              "k_ECommunityWordFilterReason_Malware"),
            (e[(e.k_ECommunityWordFilterReason_FreeTLD = 10)] =
              "k_ECommunityWordFilterReason_FreeTLD"),
            (e[(e.k_ECommunityWordFilterReason_Harassment = 11)] =
              "k_ECommunityWordFilterReason_Harassment"),
            (e[(e.k_ECommunityWordFilterReason_URLShortener = 12)] =
              "k_ECommunityWordFilterReason_URLShortener"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageSlur = 13)
            ] = "k_ECommunityWordFilterReason_InappropriateLanguageSlur"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageOther = 14)
            ] = "k_ECommunityWordFilterReason_InappropriateLanguageOther"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageMildProfanity = 15)
            ] =
              "k_ECommunityWordFilterReason_InappropriateLanguageMildProfanity"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageHateSpeech = 16)
            ] = "k_ECommunityWordFilterReason_InappropriateLanguageHateSpeech"),
            (e[(e.k_ECommunityWordFilterReason_Max = 17)] =
              "k_ECommunityWordFilterReason_Max");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_EClanImageFileType_Unknown = 0)] =
            "k_EClanImageFileType_Unknown"),
            (e[(e.k_EClanImageFileType_JPEG = 1)] =
              "k_EClanImageFileType_JPEG"),
            (e[(e.k_EClanImageFileType_GIF = 2)] = "k_EClanImageFileType_GIF"),
            (e[(e.k_EClanImageFileType_PNG = 3)] = "k_EClanImageFileType_PNG"),
            (e[(e.k_EClanImageFileType_MP4 = 4)] = "k_EClanImageFileType_MP4"),
            (e[(e.k_EClanImageFileType_WEBM = 5)] =
              "k_EClanImageFileType_WEBM"),
            (e[(e.k_EClanImageFileType_VTT = 6)] = "k_EClanImageFileType_VTT"),
            (e[(e.k_EClanImageFileType_SRT = 7)] = "k_EClanImageFileType_SRT"),
            (e[(e.k_EClanImageFileType_SVG = 8)] = "k_EClanImageFileType_SVG"),
            (e[(e.k_EClanImageFileType_XML = 9)] = "k_EClanImageFileType_XML");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_EClanImageGroup_None = 0)] = "k_EClanImageGroup_None"),
            (e[(e.k_EClanImageGroup_Announcement = 1)] =
              "k_EClanImageGroup_Announcement"),
            (e[(e.k_EClanImageGroup_Curator = 2)] =
              "k_EClanImageGroup_Curator");
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_EProfileCooldown_Unknown = 0)] =
            "k_EProfileCooldown_Unknown"),
            (e[(e.k_EProfileCooldown_PersonaName = 1)] =
              "k_EProfileCooldown_PersonaName"),
            (e[(e.k_EProfileCooldown_ProfileSummary = 2)] =
              "k_EProfileCooldown_ProfileSummary");
        })(p || (p = {})),
        (function (e) {
          (e[(e.k_EAvatarState_Unknown = 0)] = "k_EAvatarState_Unknown"),
            (e[(e.k_EAvatarState_Approved = 1)] = "k_EAvatarState_Approved"),
            (e[(e.k_EAvatarState_Denied = 2)] = "k_EAvatarState_Denied");
        })(b || (b = {})),
        (function (e) {
          (e[(e.k_EAbuseNotificationType_Invalid = 0)] =
            "k_EAbuseNotificationType_Invalid"),
            (e[(e.k_EAbuseNotificationType_TradeBan = 1)] =
              "k_EAbuseNotificationType_TradeBan"),
            (e[(e.k_EAbuseNotificationType_Profile = 2)] =
              "k_EAbuseNotificationType_Profile"),
            (e[(e.k_EAbuseNotificationType_Group = 3)] =
              "k_EAbuseNotificationType_Group"),
            (e[(e.k_EAbuseNotificationType_Comment = 4)] =
              "k_EAbuseNotificationType_Comment"),
            (e[(e.k_EAbuseNotificationType_Forum = 5)] =
              "k_EAbuseNotificationType_Forum");
        })(f || (f = {})),
        (function (e) {
          (e[(e.k_EModeratorAction_Resolve = 0)] =
            "k_EModeratorAction_Resolve"),
            (e[(e.k_EModeratorAction_Ban = 1)] = "k_EModeratorAction_Ban"),
            (e[(e.k_EModeratorAction_Unban = 2)] = "k_EModeratorAction_Unban"),
            (e[(e.k_EModeratorAction_Hide = 3)] = "k_EModeratorAction_Hide"),
            (e[(e.k_EModeratorAction_Unhide = 4)] =
              "k_EModeratorAction_Unhide"),
            (e[(e.k_EModeratorAction_Lock = 5)] = "k_EModeratorAction_Lock"),
            (e[(e.k_EModeratorAction_Delete = 6)] =
              "k_EModeratorAction_Delete"),
            (e[(e.k_EModeratorAction_Undelete = 7)] =
              "k_EModeratorAction_Undelete"),
            (e[(e.k_EModeratorAction_MassReset = 8)] =
              "k_EModeratorAction_MassReset"),
            (e[(e.k_EModeratorAction_Unlock = 9)] =
              "k_EModeratorAction_Unlock"),
            (e[(e.k_EModeratorAction_Warn = 10)] = "k_EModeratorAction_Warn"),
            (e[(e.k_EModeratorAction_Move = 11)] = "k_EModeratorAction_Move"),
            (e[(e.k_EModeratorAction_Classify = 12)] =
              "k_EModeratorAction_Classify"),
            (e[(e.k_EModeratorAction_Blur = 13)] = "k_EModeratorAction_Blur"),
            (e[(e.k_EModeratorAction_Unblur = 14)] =
              "k_EModeratorAction_Unblur");
        })(B || (B = {})),
        (function (e) {
          (e[(e.k_EActorAffiliation_Unknown = 0)] =
            "k_EActorAffiliation_Unknown"),
            (e[(e.k_EActorAffiliation_Valve = 1)] =
              "k_EActorAffiliation_Valve"),
            (e[(e.k_EActorAffiliation_Keywords = 2)] =
              "k_EActorAffiliation_Keywords"),
            (e[(e.k_EActorAffiliation_TaskUs = 3)] =
              "k_EActorAffiliation_TaskUs"),
            (e[(e.k_EActorAffiliation_Volunteer = 4)] =
              "k_EActorAffiliation_Volunteer");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_EAnswerActorRank_None = 0)] = "k_EAnswerActorRank_None"),
            (e[(e.k_EAnswerActorRank_Valve = 1)] = "k_EAnswerActorRank_Valve"),
            (e[(e.k_EAnswerActorRank_GlobalMod = 2)] =
              "k_EAnswerActorRank_GlobalMod"),
            (e[(e.k_EAnswerActorRank_Developer = 3)] =
              "k_EAnswerActorRank_Developer"),
            (e[(e.k_EAnswerActorRank_Moderator = 4)] =
              "k_EAnswerActorRank_Moderator"),
            (e[(e.k_EAnswerActorRank_OP = 5)] = "k_EAnswerActorRank_OP");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_EPartnerEventDisplayLocation_Invalid = 0)] =
            "k_EPartnerEventDisplayLocation_Invalid"),
            (e[(e.k_EPartnerEventDisplayLocation_AppDetailsSpotlight = 1)] =
              "k_EPartnerEventDisplayLocation_AppDetailsSpotlight"),
            (e[(e.k_EPartnerEventDisplayLocation_LibraryOverview = 2)] =
              "k_EPartnerEventDisplayLocation_LibraryOverview"),
            (e[(e.k_EPartnerEventDisplayLocation_StoreAppPage = 3)] =
              "k_EPartnerEventDisplayLocation_StoreAppPage"),
            (e[(e.k_EPartnerEventDisplayLocation_EventScroller = 4)] =
              "k_EPartnerEventDisplayLocation_EventScroller"),
            (e[(e.k_EPartnerEventDisplayLocation_AppDetailsActivity = 5)] =
              "k_EPartnerEventDisplayLocation_AppDetailsActivity"),
            (e[(e.k_EPartnerEventDisplayLocation_CommunityHub = 6)] =
              "k_EPartnerEventDisplayLocation_CommunityHub"),
            (e[(e.k_EPartnerEventDisplayLocation_StoreFrontPage = 7)] =
              "k_EPartnerEventDisplayLocation_StoreFrontPage"),
            (e[(e.k_EPartnerEventDisplayLocation_NewsHub = 8)] =
              "k_EPartnerEventDisplayLocation_NewsHub"),
            (e[(e.k_EPartnerEventDisplayLocation_GamepadHome = 9)] =
              "k_EPartnerEventDisplayLocation_GamepadHome");
        })(g || (g = {})),
        (function (e) {
          (e[(e.k_EProfileModerationState_Unassigned = 0)] =
            "k_EProfileModerationState_Unassigned"),
            (e[(e.k_EProfileModerationState_Assigned = 1)] =
              "k_EProfileModerationState_Assigned"),
            (e[(e.k_EProfileModerationState_Escalated = 2)] =
              "k_EProfileModerationState_Escalated"),
            (e[(e.k_EProfileModerationState_Resolved = 3)] =
              "k_EProfileModerationState_Resolved");
        })(h || (h = {})),
        (function (e) {
          (e[(e.k_ECommentReportAction_Invalid = 0)] =
            "k_ECommentReportAction_Invalid"),
            (e[(e.k_ECommentReportAction_NoAction = 1)] =
              "k_ECommentReportAction_NoAction"),
            (e[(e.k_ECommentReportAction_Deleted = 2)] =
              "k_ECommentReportAction_Deleted"),
            (e[(e.k_ECommentReportAction_Hidden = 3)] =
              "k_ECommentReportAction_Hidden"),
            (e[(e.k_ECommentReportAction_ExternalDelete = 4)] =
              "k_ECommentReportAction_ExternalDelete"),
            (e[(e.k_ECommentReportAction_ThreadDeleted = 5)] =
              "k_ECommentReportAction_ThreadDeleted");
        })(w || (w = {}));
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.appids || n.aR(S.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readInt32,
                    pbr: n.FE.readPackedInt32,
                    bw: n.Xc.writeRepeatedInt32,
                  },
                  language: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetApps_Request";
        }
      }
      class F extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.apps || n.aR(F.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { apps: { n: 1, c: s.VJ, r: !0, q: !0 } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetApps_Response";
        }
      }
      class M extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.appid || n.aR(M.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  appid: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  language: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Request";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.appid || n.aR(R.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  appid: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  token_lists: { n: 2, c: E, r: !0, q: !0 },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response";
        }
      }
      class z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.name || n.aR(z.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  name: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  value: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
        }
      }
      class E extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.language || n.aR(E.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  language: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  tokens: { n: 2, c: z, r: !0, q: !0 },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
        }
      }
      class C extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.steamid || n.aR(C.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 5,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  start: { n: 6, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  count: { n: 7, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  upvoters: { n: 8, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  include_deleted: {
                    n: 9,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  gidcomment: {
                    n: 10,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  time_oldest: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  oldest_first: {
                    n: 12,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThread_Request";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.gidcomment || n.aR(T.M()),
            o.initialize(this, e, 0, -1, [12], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  timestamp: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  text: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  upvotes: { n: 5, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  hidden: { n: 6, br: n.FE.readBool, bw: n.Xc.writeBool },
                  hidden_by_user: {
                    n: 7,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  deleted: { n: 8, br: n.FE.readBool, bw: n.Xc.writeBool },
                  ipaddress: { n: 9, c: s.j7 },
                  total_hidden: {
                    n: 10,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  upvoted_by_user: {
                    n: 11,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  reactions: { n: 12, c: O, r: !0, q: !0 },
                  gidparentcomment: {
                    n: 13,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_Comment";
        }
      }
      class O extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.reactionid || n.aR(O.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  reactionid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  count: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_Comment_Reaction";
        }
      }
      class W extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.comments || n.aR(W.M()),
            o.initialize(this, e, 0, -1, [1, 2, 9], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  comments: { n: 1, c: T, r: !0, q: !0 },
                  deleted_comments: { n: 2, c: T, r: !0, q: !0 },
                  steamid: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 4,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  start: { n: 5, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  count: { n: 6, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  total_count: {
                    n: 7,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  upvotes: { n: 8, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  upvoters: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  user_subscribed: {
                    n: 10,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  user_upvoted: {
                    n: 11,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  answer_commentid: {
                    n: 12,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  answer_actor: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  answer_actor_rank: {
                    n: 14,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  can_post: { n: 15, br: n.FE.readBool, bw: n.Xc.writeBool },
                  comment_thread_type: {
                    n: 16,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  gidfeature: {
                    n: 17,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 18,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThread_Response";
        }
      }
      class k extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.steamid || n.aR(k.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  text: { n: 6, br: n.FE.readString, bw: n.Xc.writeString },
                  gidparentcomment: {
                    n: 7,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  suppress_notifications: {
                    n: 8,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  is_report: { n: 9, br: n.FE.readBool, bw: n.Xc.writeBool },
                  start_hidden: {
                    n: 10,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = n.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PostCommentToThread_Request";
        }
      }
      class I extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.gidcomment || n.aR(I.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  count: { n: 3, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  upvotes: { n: 4, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PostCommentToThread_Response";
        }
      }
      class j extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.steamid || n.aR(j.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  undelete: { n: 6, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_DeleteCommentFromThread_Request";
        }
      }
      class A extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_DeleteCommentFromThread_Response";
        }
      }
      class x extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.commentthreadtype || n.aR(x.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  commentthreadtype: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  rate_up: { n: 6, br: n.FE.readBool, bw: n.Xc.writeBool },
                  suppress_notifications: {
                    n: 7,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateCommentThread_Request";
        }
      }
      class P extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.gidcomment || n.aR(P.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  count: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  upvotes: { n: 4, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  has_upvoted: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = n.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateCommentThread_Response";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.commentthreadtype || n.aR(D.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  commentthreadtype: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  max_results: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = n.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThreadRatings_Request";
        }
      }
      class U extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.commentthreadid || n.aR(U.M()),
            o.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  commentthreadid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  gidcomment: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  upvotes: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  has_upvoted: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  upvoter_accountids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThreadRatings_Response";
        }
      }
      class X extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.announcementid || n.aR(X.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  announcementid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  vote_up: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  clan_accountid: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = n.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Request";
        }
      }
      class N extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Response";
        }
      }
      class L extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.announcementid || n.aR(L.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  announcementid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = n.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanAnnouncementVoteForUser_Request";
        }
      }
      class V extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.voted_up || n.aR(V.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  voted_up: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  voted_down: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = n.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(V.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanAnnouncementVoteForUser_Response";
        }
      }
      class G extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.steamid || n.aR(G.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  filter_user_uploaded_only: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Request";
        }
      }
      class H extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.avatars || n.aR(H.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { avatars: { n: 1, c: q, r: !0, q: !0 } },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = n.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response";
        }
      }
      class q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.avatar_sha1 || n.aR(q.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  avatar_sha1: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  user_uploaded: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  timestamp: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response_AvatarData";
        }
      }
      class Z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.priority || n.aR(Z.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  priority: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  appid: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = n.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAppPriority";
        }
      }
      class $ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.count || n.aR($.M()),
            o.initialize(this, e, 0, -1, [5, 6, 8], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  count: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  offset: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  rtime32_start_time: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  language_preference: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  filter_event_type: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: n.FE.readEnum,
                    pbr: n.FE.readPackedEnum,
                    bw: n.Xc.writeRepeatedEnum,
                  },
                  filter_to_appid: {
                    n: 7,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  app_list: { n: 8, c: Z, r: !0, q: !0 },
                  count_after: {
                    n: 9,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  count_before: {
                    n: 10,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = n.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA($.M(), e, t);
        }
        static fromObject(e) {
          return n.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2($.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventNews_Request";
        }
      }
      class Y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.results || n.aR(Y.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: { results: { n: 1, c: s.uV, r: !0, q: !0 } },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = n.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventNews_Response";
        }
      }
      class K extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.include_steam_blog || n.aR(K.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  include_steam_blog: {
                    n: 1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  filter_to_played_within_days: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  include_only_game_updates: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = n.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(K.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Request";
        }
      }
      class Q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.clanid || n.aR(Q.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  clanid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  appid: { n: 4, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  possible_takeover: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  rtime32_last_modified: {
                    n: 6,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  user_app_priority: {
                    n: 7,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = n.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventResult";
        }
      }
      class J extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.results || n.aR(J.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: { results: { n: 1, c: Q, r: !0, q: !0 } },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = n.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(J.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Response";
        }
      }
      class ee extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ee();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Request";
        }
      }
      class te extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new te();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Response";
        }
      }
      class re extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.appid || n.aR(re.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  user_app_priority: {
                    n: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = n.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(re.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsAppPriority";
        }
      }
      class ie extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ie();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventsAppPriorities_Request";
        }
      }
      class ne extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.priorities || n.aR(ne.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: { priorities: { n: 1, c: re, r: !0, q: !0 } },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = n.Bh(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ne.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
        }
      }
      class ae extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.appid || n.aR(ae.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = n.Bh(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ae.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Request";
        }
      }
      class se extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new se();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Response";
        }
      }
      class oe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.appid || n.aR(oe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = n.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(oe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Request";
        }
      }
      class le extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Response";
        }
      }
      class ce extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.appid || n.aR(ce.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = n.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ce.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Request";
        }
      }
      class ue extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ue();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Response";
        }
      }
      class de extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.markings || n.aR(de.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: { markings: { n: 1, c: me, r: !0, q: !0 } },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = n.Bh(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(de.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request";
        }
      }
      class me extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.clanid || n.aR(me.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  clanid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  display_location: {
                    n: 3,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  mark_shown: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  mark_read: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = n.Bh(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(me.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
        }
      }
      class pe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new pe();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Response";
        }
      }
      class be extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.event_gids || n.aR(be.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  event_gids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readFixed64String,
                    pbr: n.FE.readPackedFixed64String,
                    bw: n.Xc.writeRepeatedFixed64String,
                  },
                  include_read_events_only: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = n.Bh(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(be.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Request";
        }
      }
      class fe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.events || n.aR(fe.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: { events: { n: 1, c: Be, r: !0, q: !0 } },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = n.Bh(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(fe.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response";
        }
      }
      class Be extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.event_gid || n.aR(Be.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  event_gid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  last_shown_time: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  last_read_time: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  clan_account_id: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = n.Bh(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Be.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
        }
      }
      !(function (e) {
        (e.GetApps = function (e, t) {
          return e.SendMsg("Community.GetApps#1", (0, a.MD)(S, t), F, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetAppRichPresenceLocalization = function (e, t) {
            return e.SendMsg(
              "Community.GetAppRichPresenceLocalization#1",
              (0, a.MD)(M, t),
              R,
              { ePrivilege: 1 },
            );
          }),
          (e.GetCommentThread = function (e, t) {
            return e.SendMsg(
              "Community.GetCommentThread#1",
              (0, a.MD)(C, t),
              W,
              { ePrivilege: 2 },
            );
          }),
          (e.PostCommentToThread = function (e, t) {
            return e.SendMsg(
              "Community.PostCommentToThread#1",
              (0, a.MD)(k, t),
              I,
              { ePrivilege: 3 },
            );
          }),
          (e.DeleteCommentFromThread = function (e, t) {
            return e.SendMsg(
              "Community.DeleteCommentFromThread#1",
              (0, a.MD)(j, t),
              A,
              { ePrivilege: 1 },
            );
          }),
          (e.RateCommentThread = function (e, t) {
            return e.SendMsg(
              "Community.RateCommentThread#1",
              (0, a.MD)(x, t),
              P,
              { ePrivilege: 3 },
            );
          }),
          (e.GetCommentThreadRatings = function (e, t) {
            return e.SendMsg(
              "Community.GetCommentThreadRatings#1",
              (0, a.MD)(D, t),
              U,
              { ePrivilege: 2 },
            );
          }),
          (e.RateClanAnnouncement = function (e, t) {
            return e.SendMsg(
              "Community.RateClanAnnouncement#1",
              (0, a.MD)(X, t),
              N,
              { ePrivilege: 3 },
            );
          }),
          (e.GetClanAnnouncementVoteForUser = function (e, t) {
            return e.SendMsg(
              "Community.GetClanAnnouncementVoteForUser#1",
              (0, a.MD)(L, t),
              V,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAvatarHistory = function (e, t) {
            return e.SendMsg(
              "Community.GetAvatarHistory#1",
              (0, a.MD)(G, t),
              H,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventNews = function (e, t) {
            return e.SendMsg(
              "Community.GetUserPartnerEventNews#1",
              (0, a.MD)($, t),
              Y,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetBestEventsForUser = function (e, t) {
            return e.SendMsg(
              "Community.GetBestEventsForUser#1",
              (0, a.MD)(K, t),
              J,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.MarkPartnerEventsForUser = function (e, t) {
            return e.SendMsg(
              "Community.MarkPartnerEventsForUser#1",
              (0, a.MD)(de, t),
              pe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventViewStatus = function (e, t) {
            return e.SendMsg(
              "Community.GetUserPartnerEventViewStatus#1",
              (0, a.MD)(be, t),
              fe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.PartnerEventsShowMoreForApp = function (e, t) {
            return e.SendMsg(
              "Community.PartnerEventsShowMoreForApp#1",
              (0, a.MD)(oe, t),
              le,
              { ePrivilege: 1 },
            );
          }),
          (e.PartnerEventsShowLessForApp = function (e, t) {
            return e.SendMsg(
              "Community.PartnerEventsShowLessForApp#1",
              (0, a.MD)(ce, t),
              ue,
              { ePrivilege: 1 },
            );
          }),
          (e.ClearUserPartnerEventsAppPriorities = function (e, t) {
            return e.SendMsg(
              "Community.ClearUserPartnerEventsAppPriorities#1",
              (0, a.MD)(ee, t),
              te,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventsAppPriorities = function (e, t) {
            return e.SendMsg(
              "Community.GetUserPartnerEventsAppPriorities#1",
              (0, a.MD)(ie, t),
              ne,
              { ePrivilege: 1 },
            );
          }),
          (e.ClearSinglePartnerEventsAppPriority = function (e, t) {
            return e.SendMsg(
              "Community.ClearSinglePartnerEventsAppPriority#1",
              (0, a.MD)(ae, t),
              se,
              { ePrivilege: 1 },
            );
          });
      })(v || (v = {}));
    },
    28355: (e, t, r) => {
      r.d(t, { d2: () => o });
      var i = r(45878),
        n = r(43898),
        a = r(67328);
      const s = i.Message;
      var o, l, c, u, d, m, p;
      !(function (e) {
        (e[(e.k_EProductActionNoAction = 0)] = "k_EProductActionNoAction"),
          (e[(e.k_EProductActionWatchBroadcast = 1)] =
            "k_EProductActionWatchBroadcast"),
          (e[(e.k_EProductActionHideBroadcast = 2)] =
            "k_EProductActionHideBroadcast"),
          (e[(e.k_EProductActionShowBroadcast = 3)] =
            "k_EProductActionShowBroadcast"),
          (e[(e.k_EProductActionShowBroadcastChat = 4)] =
            "k_EProductActionShowBroadcastChat"),
          (e[(e.k_EProductActionHideBroadcastChat = 5)] =
            "k_EProductActionHideBroadcastChat"),
          (e[(e.k_EProductActionPopoutChat = 6)] =
            "k_EProductActionPopoutChat"),
          (e[(e.k_EProductActionCloseBroadcastSmallPopup = 7)] =
            "k_EProductActionCloseBroadcastSmallPopup"),
          (e[(e.k_EProductActionUnmuteBroadcast = 8)] =
            "k_EProductActionUnmuteBroadcast"),
          (e[(e.k_EProductActionOpenBroadcastWatchPage = 9)] =
            "k_EProductActionOpenBroadcastWatchPage"),
          (e[(e.k_EProductActionSendChat = 10)] = "k_EProductActionSendChat"),
          (e[(e.k_EProductActionAddsAnEmoticonToChat = 11)] =
            "k_EProductActionAddsAnEmoticonToChat"),
          (e[(e.k_EProductActionShowDailyDeals = 12)] =
            "k_EProductActionShowDailyDeals"),
          (e[(e.k_EProductActionShowInteractiveRecommendDeals = 13)] =
            "k_EProductActionShowInteractiveRecommendDeals"),
          (e[(e.k_EProductActionShowWishlistDeals = 14)] =
            "k_EProductActionShowWishlistDeals"),
          (e[(e.k_EProductActionShowDLCDeals = 15)] =
            "k_EProductActionShowDLCDeals"),
          (e[(e.k_EProductActionChangeNewsHubFilters = 16)] =
            "k_EProductActionChangeNewsHubFilters"),
          (e[(e.k_EProductActionNewsHubScrollPast = 17)] =
            "k_EProductActionNewsHubScrollPast"),
          (e[(e.k_EProductActionNewsHubScrollFuture = 18)] =
            "k_EProductActionNewsHubScrollFuture"),
          (e[(e.k_EProductActionNewsHubAppInteraction = 19)] =
            "k_EProductActionNewsHubAppInteraction");
      })(o || (o = {})),
        (function (e) {
          (e[(e.k_EProductViewActionVisit = 0)] = "k_EProductViewActionVisit"),
            (e[(e.k_EProductViewActionAddToWishlist = 1)] =
              "k_EProductViewActionAddToWishlist"),
            (e[(e.k_EProductViewActionIgnoreNotInterested = 2)] =
              "k_EProductViewActionIgnoreNotInterested"),
            (e[(e.k_EProductViewActionAddToCart = 3)] =
              "k_EProductViewActionAddToCart");
        })(l || (l = {})),
        (function (e) {
          (e[
            (e.k_EProductImpressionFromClientType_FriendInGameNotification = 1)
          ] = "k_EProductImpressionFromClientType_FriendInGameNotification"),
            (e[
              (e.k_EProductImpressionFromClientType_FriendInGameNotification_FirstTimeSession = 2)
            ] =
              "k_EProductImpressionFromClientType_FriendInGameNotification_FirstTimeSession");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_ETrackedEmail_WishlistEmail = 1)] =
            "k_ETrackedEmail_WishlistEmail"),
            (e[(e.k_ETrackedEmail_RecommendationEmailCampaign = 2)] =
              "k_ETrackedEmail_RecommendationEmailCampaign");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_EUnifiedProductInteractionStoreItemType_Invalid = 0)] =
            "k_EUnifiedProductInteractionStoreItemType_Invalid"),
            (e[(e.k_EUnifiedProductInteractionStoreItemType_AppPage = 1)] =
              "k_EUnifiedProductInteractionStoreItemType_AppPage"),
            (e[(e.k_EUnifiedProductInteractionStoreItemType_PackagePage = 2)] =
              "k_EUnifiedProductInteractionStoreItemType_PackagePage"),
            (e[
              (e.k_EUnifiedProductInteractionStoreItemType_AnnouncementPage = 3)
            ] = "k_EUnifiedProductInteractionStoreItemType_AnnouncementPage"),
            (e[(e.k_EUnifiedProductInteractionStoreItemType_SalePage = 4)] =
              "k_EUnifiedProductInteractionStoreItemType_SalePage"),
            (e[(e.k_EUnifiedProductInteractionStoreItemType_FeaturePage = 5)] =
              "k_EUnifiedProductInteractionStoreItemType_FeaturePage");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_EUnifedProductInteractionActions_Invalid = -1)] =
            "k_EUnifedProductInteractionActions_Invalid"),
            (e[(e.k_EUnifedProductInteractionActions_Visit = 0)] =
              "k_EUnifedProductInteractionActions_Visit"),
            (e[(e.k_EUnifedProductInteractionActions_Wishlist = 1)] =
              "k_EUnifedProductInteractionActions_Wishlist"),
            (e[(e.k_EUnifedProductInteractionActions_IgnoreNotInterested = 2)] =
              "k_EUnifedProductInteractionActions_IgnoreNotInterested"),
            (e[(e.k_EUnifedProductInteractionActions_AddToCart = 3)] =
              "k_EUnifedProductInteractionActions_AddToCart");
        })(m || (m = {}));
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.impressions || n.aR(b.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { impressions: { n: 1, c: f, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CProductImpressionsFromClient_Notification";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.type || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  type: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  num_impressions: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CProductImpressionsFromClient_Notification_Impression";
        }
      }
      !(function (e) {
        e.ReportProductImpressionsFromClient = function (e, t) {
          return e.SendNotification(
            "ExperimentService.ReportProductImpressionsFromClient#1",
            (0, a.MD)(b, t),
            { ePrivilege: 1 },
          );
        };
      })(p || (p = {}));
    },
    87416: (e, t, r) => {
      r.d(t, { I3: () => c, yl: () => o });
      var i = r(45878),
        n = r(43898),
        a = r(67328);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.packageid || n.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  packageid: { n: 1, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  country_code: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPhysicalGoods_CheckInventoryAvailableByPackage_Request";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.inventory_available || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  inventory_available: {
                    n: 1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  high_pending_orders: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPhysicalGoods_CheckInventoryAvailableByPackage_Response";
        }
      }
      var c;
      !(function (e) {
        e.CheckInventoryAvailableByPackage = function (e, t) {
          return e.SendMsg(
            "PhysicalGoods.CheckInventoryAvailableByPackage#1",
            (0, a.MD)(o, t),
            l,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        };
      })(c || (c = {}));
    },
    45735: (e, t, r) => {
      r.d(t, { A_: () => h, Q_: () => g, kI: () => d });
      var i = r(45878),
        n = r(43898),
        a = r(67328);
      const s = i.Message;
      var o, l, c, u, d, m, p;
      !(function (e) {
        (e[(e.k_ETrailerConvertState_Invalid = 0)] =
          "k_ETrailerConvertState_Invalid"),
          (e[(e.k_ETrailerConvertState_Waiting = 1)] =
            "k_ETrailerConvertState_Waiting"),
          (e[(e.k_ETrailerConvertState_Converting = 2)] =
            "k_ETrailerConvertState_Converting"),
          (e[(e.k_ETrailerConvertState_Complete = 3)] =
            "k_ETrailerConvertState_Complete"),
          (e[(e.k_ETrailerConvertState_Failed = 4)] =
            "k_ETrailerConvertState_Failed");
      })(o || (o = {})),
        (function (e) {
          (e[(e.k_ETrailerCategory_Invalid = 0)] =
            "k_ETrailerCategory_Invalid"),
            (e[(e.k_ETrailerCategory_Gameplay = 1)] =
              "k_ETrailerCategory_Gameplay"),
            (e[(e.k_ETrailerCategory_Teaser = 2)] =
              "k_ETrailerCategory_Teaser"),
            (e[(e.k_ETrailerCategory_Cinematic = 3)] =
              "k_ETrailerCategory_Cinematic"),
            (e[(e.k_ETrailerCategory_Update = 4)] =
              "k_ETrailerCategory_Update"),
            (e[(e.k_ETrailerCategory_Accolades = 5)] =
              "k_ETrailerCategory_Accolades"),
            (e[(e.k_ETrailerCategory_Interview = 6)] =
              "k_ETrailerCategory_Interview");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EAppTrailerTypeInvalid = 0)] = "k_EAppTrailerTypeInvalid"),
            (e[(e.k_EAppTrailerTypePublisherUploaded = 1)] =
              "k_EAppTrailerTypePublisherUploaded"),
            (e[(e.k_EAppTrailerTypeAutoShow = 2)] =
              "k_EAppTrailerTypeAutoShow"),
            (e[(e.k_EAppTrailerTypeMicrotrailer = 3)] =
              "k_EAppTrailerTypeMicrotrailer");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_EAppTrailerStatusInvalid = 0)] =
            "k_EAppTrailerStatusInvalid"),
            (e[(e.k_EAppTrailerStatusHidden = 1)] =
              "k_EAppTrailerStatusHidden"),
            (e[(e.k_EAppTrailerStatusActive = 2)] =
              "k_EAppTrailerStatusActive"),
            (e[(e.k_EAppTrailerStatusDeleted = 3)] =
              "k_EAppTrailerStatusDeleted");
        })(u || (u = {}));
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.video_id || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  video_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  client_cellid: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.video_id || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  video_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  video_url: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Response";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.encryption_key || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  encryption_key: {
                    n: 1,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_UnlockedH264_Notification";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.app_id || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  app_id: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  client_cellid: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Request";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.app_id || n.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  app_id: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  opf_settings: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Response";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.app_id || n.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  app_id: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  playback_position_in_seconds: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  video_track_id: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  audio_track_id: {
                    n: 4,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  timedtext_track_id: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  last_modified: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  hide_from_watch_history: {
                    n: 7,
                    d: !1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  hide_from_library: {
                    n: 8,
                    d: !1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "VideoBookmark";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.bookmarks || n.aR(h.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { bookmarks: { n: 1, c: g, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_SetVideoBookmark_Notification";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.appids || n.aR(w.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  updated_since: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Request";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.bookmarks || n.aR(v.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: { bookmarks: { n: 1, c: g, r: !0, q: !0 } },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Response";
        }
      }
      !(function (e) {
        (e.ClientGetVideoURL = function (e, t) {
          return e.SendMsg("Video.ClientGetVideoURL#1", (0, a.MD)(b, t), f, {
            ePrivilege: 1,
          });
        }),
          (e.SetVideoBookmark = function (e, t) {
            return e.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, a.MD)(h, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetVideoBookmarks = function (e, t) {
            return e.SendMsg("Video.GetVideoBookmarks#1", (0, a.MD)(w, t), v, {
              ePrivilege: 1,
            });
          });
      })(d || (d = {})),
        (function (e) {
          e.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: B,
          };
        })(m || (m = {})),
        (function (e) {
          e.ClientGetOPFSettings = function (e, t) {
            return e.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, a.MD)(y, t),
              _,
              { ePrivilege: 1 },
            );
          };
        })(p || (p = {}));
    },
    59900: (e, t, r) => {
      r.d(t, { Z: () => a });
      var i = r(88965);
      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, (0, i.Z)(n.key), n);
        }
      }
      function a(e, t, r) {
        return (
          t && n(e.prototype, t),
          r && n(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
    },
    88965: (e, t, r) => {
      r.d(t, { Z: () => n });
      var i = r(7209);
      function n(e) {
        var t = (function (e, t) {
          if ("object" !== (0, i.Z)(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== (0, i.Z)(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === (0, i.Z)(t) ? t : String(t);
      }
    },
    7209: (e, t, r) => {
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      r.d(t, { Z: () => i });
    },
  },
]);

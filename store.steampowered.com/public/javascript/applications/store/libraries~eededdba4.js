/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5422],
  {
    17349: (e, t, n) => {
      n.d(t, { Ay: () => Io });
      var o = n(55635);
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                (0, o.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var a = n(98465),
        s = n(2829),
        u = n(90626),
        l = n.t(u, 2),
        c = [
          "defaultInputValue",
          "defaultMenuIsOpen",
          "defaultValue",
          "inputValue",
          "menuIsOpen",
          "onChange",
          "onInputChange",
          "onMenuClose",
          "onMenuOpen",
          "value",
        ];
      var d = n(58584),
        p = n(30549),
        f = n(50181),
        h = n(35549),
        v = n(61474);
      function m() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (m = function () {
          return !!e;
        })();
      }
      var g = n(20822);
      var b = n(2223);
      var y = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var n;
              (n =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                      ? t.container.firstChild
                      : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, n),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
                this._insertTag(
                  (function (e) {
                    var t = document.createElement("style");
                    return (
                      t.setAttribute("data-emotion", e.key),
                      void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                      t.appendChild(document.createTextNode("")),
                      t.setAttribute("data-s", ""),
                      t
                    );
                  })(this),
                );
              var t = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var n = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(t);
                try {
                  n.insertRule(e, n.cssRules.length);
                } catch (e) {
                  0;
                }
              } else t.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        O = Math.abs,
        w = String.fromCharCode,
        C = Object.assign;
      function x(e) {
        return e.trim();
      }
      function I(e, t, n) {
        return e.replace(t, n);
      }
      function S(e, t) {
        return e.indexOf(t);
      }
      function A(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function E(e, t, n) {
        return e.slice(t, n);
      }
      function M(e) {
        return e.length;
      }
      function V(e) {
        return e.length;
      }
      function k(e, t) {
        return t.push(e), e;
      }
      var P = 1,
        R = 1,
        D = 0,
        L = 0,
        F = 0,
        T = "";
      function H(e, t, n, o, r, i, a) {
        return {
          value: e,
          root: t,
          parent: n,
          type: o,
          props: r,
          children: i,
          line: P,
          column: R,
          length: a,
          return: "",
        };
      }
      function N(e, t) {
        return C(
          H("", null, null, "", null, null, 0),
          e,
          { length: -e.length },
          t,
        );
      }
      function U() {
        return (F = L > 0 ? A(T, --L) : 0), R--, 10 === F && ((R = 1), P--), F;
      }
      function z() {
        return (F = L < D ? A(T, L++) : 0), R++, 10 === F && ((R = 1), P++), F;
      }
      function B() {
        return A(T, L);
      }
      function $() {
        return L;
      }
      function j(e, t) {
        return E(T, e, t);
      }
      function _(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function W(e) {
        return (P = R = 1), (D = M((T = e))), (L = 0), [];
      }
      function G(e) {
        return (T = ""), e;
      }
      function Y(e) {
        return x(j(L - 1, K(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function q(e) {
        for (; (F = B()) && F < 33; ) z();
        return _(e) > 2 || _(F) > 3 ? "" : " ";
      }
      function X(e, t) {
        for (
          ;
          --t &&
          z() &&
          !(F < 48 || F > 102 || (F > 57 && F < 65) || (F > 70 && F < 97));

        );
        return j(e, $() + (t < 6 && 32 == B() && 32 == z()));
      }
      function K(e) {
        for (; z(); )
          switch (F) {
            case e:
              return L;
            case 34:
            case 39:
              34 !== e && 39 !== e && K(F);
              break;
            case 40:
              41 === e && K(e);
              break;
            case 92:
              z();
          }
        return L;
      }
      function Z(e, t) {
        for (; z() && e + F !== 57 && (e + F !== 84 || 47 !== B()); );
        return "/*" + j(t, L - 1) + "*" + w(47 === e ? e : z());
      }
      function J(e) {
        for (; !_(B()); ) z();
        return j(e, L);
      }
      var Q = "-ms-",
        ee = "-moz-",
        te = "-webkit-",
        ne = "comm",
        oe = "rule",
        re = "decl",
        ie = "@keyframes";
      function ae(e, t) {
        for (var n = "", o = V(e), r = 0; r < o; r++)
          n += t(e[r], r, e, t) || "";
        return n;
      }
      function se(e, t, n, o) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case re:
            return (e.return = e.return || e.value);
          case ne:
            return "";
          case ie:
            return (e.return = e.value + "{" + ae(e.children, o) + "}");
          case oe:
            e.value = e.props.join(",");
        }
        return M((n = ae(e.children, o)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function ue(e) {
        return G(le("", null, null, null, [""], (e = W(e)), 0, [0], e));
      }
      function le(e, t, n, o, r, i, a, s, u) {
        for (
          var l = 0,
            c = 0,
            d = a,
            p = 0,
            f = 0,
            h = 0,
            v = 1,
            m = 1,
            g = 1,
            b = 0,
            y = "",
            O = r,
            C = i,
            x = o,
            E = y;
          m;

        )
          switch (((h = b), (b = z()))) {
            case 40:
              if (108 != h && 58 == A(E, d - 1)) {
                -1 != S((E += I(Y(b), "&", "&\f")), "&\f") && (g = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              E += Y(b);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              E += q(h);
              break;
            case 92:
              E += X($() - 1, 7);
              continue;
            case 47:
              switch (B()) {
                case 42:
                case 47:
                  k(de(Z(z(), $()), t, n), u);
                  break;
                default:
                  E += "/";
              }
              break;
            case 123 * v:
              s[l++] = M(E) * g;
            case 125 * v:
            case 59:
            case 0:
              switch (b) {
                case 0:
                case 125:
                  m = 0;
                case 59 + c:
                  -1 == g && (E = I(E, /\f/g, "")),
                    f > 0 &&
                      M(E) - d &&
                      k(
                        f > 32
                          ? pe(E + ";", o, n, d - 1)
                          : pe(I(E, " ", "") + ";", o, n, d - 2),
                        u,
                      );
                  break;
                case 59:
                  E += ";";
                default:
                  if (
                    (k(
                      (x = ce(E, t, n, l, c, r, s, y, (O = []), (C = []), d)),
                      i,
                    ),
                    123 === b)
                  )
                    if (0 === c) le(E, t, x, x, O, i, d, s, C);
                    else
                      switch (99 === p && 110 === A(E, 3) ? 100 : p) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          le(
                            e,
                            x,
                            x,
                            o &&
                              k(ce(e, x, x, 0, 0, r, s, y, r, (O = []), d), C),
                            r,
                            C,
                            d,
                            s,
                            o ? O : C,
                          );
                          break;
                        default:
                          le(E, x, x, x, [""], C, 0, s, C);
                      }
              }
              (l = c = f = 0), (v = g = 1), (y = E = ""), (d = a);
              break;
            case 58:
              (d = 1 + M(E)), (f = h);
            default:
              if (v < 1)
                if (123 == b) --v;
                else if (125 == b && 0 == v++ && 125 == U()) continue;
              switch (((E += w(b)), b * v)) {
                case 38:
                  g = c > 0 ? 1 : ((E += "\f"), -1);
                  break;
                case 44:
                  (s[l++] = (M(E) - 1) * g), (g = 1);
                  break;
                case 64:
                  45 === B() && (E += Y(z())),
                    (p = B()),
                    (c = d = M((y = E += J($())))),
                    b++;
                  break;
                case 45:
                  45 === h && 2 == M(E) && (v = 0);
              }
          }
        return i;
      }
      function ce(e, t, n, o, r, i, a, s, u, l, c) {
        for (
          var d = r - 1, p = 0 === r ? i : [""], f = V(p), h = 0, v = 0, m = 0;
          h < o;
          ++h
        )
          for (
            var g = 0, b = E(e, d + 1, (d = O((v = a[h])))), y = e;
            g < f;
            ++g
          )
            (y = x(v > 0 ? p[g] + " " + b : I(b, /&\f/g, p[g]))) &&
              (u[m++] = y);
        return H(e, t, n, 0 === r ? oe : s, u, l, c);
      }
      function de(e, t, n) {
        return H(e, t, n, ne, w(F), E(e, 2, -2), 0);
      }
      function pe(e, t, n, o) {
        return H(e, t, n, re, E(e, 0, o), E(e, o + 1, -1), o);
      }
      var fe = function (e, t, n) {
          for (
            var o = 0, r = 0;
            (o = r), (r = B()), 38 === o && 12 === r && (t[n] = 1), !_(r);

          )
            z();
          return j(e, L);
        },
        he = function (e, t) {
          return G(
            (function (e, t) {
              var n = -1,
                o = 44;
              do {
                switch (_(o)) {
                  case 0:
                    38 === o && 12 === B() && (t[n] = 1),
                      (e[n] += fe(L - 1, t, n));
                    break;
                  case 2:
                    e[n] += Y(o);
                    break;
                  case 4:
                    if (44 === o) {
                      (e[++n] = 58 === B() ? "&\f" : ""), (t[n] = e[n].length);
                      break;
                    }
                  default:
                    e[n] += w(o);
                }
              } while ((o = z()));
              return e;
            })(W(e), t),
          );
        },
        ve = new WeakMap(),
        me = function (e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                n = e.parent,
                o = e.column === n.column && e.line === n.line;
              "rule" !== n.type;

            )
              if (!(n = n.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || ve.get(n)) &&
              !o
            ) {
              ve.set(e, !0);
              for (
                var r = [], i = he(t, r), a = n.props, s = 0, u = 0;
                s < i.length;
                s++
              )
                for (var l = 0; l < a.length; l++, u++)
                  e.props[u] = r[s]
                    ? i[s].replace(/&\f/g, a[l])
                    : a[l] + " " + i[s];
            }
          }
        },
        ge = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ""), (e.value = ""));
          }
        };
      function be(e, t) {
        switch (
          (function (e, t) {
            return 45 ^ A(e, 0)
              ? (((((((t << 2) ^ A(e, 0)) << 2) ^ A(e, 1)) << 2) ^ A(e, 2)) <<
                  2) ^
                  A(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return te + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return te + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return te + e + ee + e + Q + e + e;
          case 6828:
          case 4268:
            return te + e + Q + e + e;
          case 6165:
            return te + e + Q + "flex-" + e + e;
          case 5187:
            return (
              te +
              e +
              I(e, /(\w+).+(:[^]+)/, te + "box-$1$2" + Q + "flex-$1$2") +
              e
            );
          case 5443:
            return te + e + Q + "flex-item-" + I(e, /flex-|-self/, "") + e;
          case 4675:
            return (
              te +
              e +
              Q +
              "flex-line-pack" +
              I(e, /align-content|flex-|-self/, "") +
              e
            );
          case 5548:
            return te + e + Q + I(e, "shrink", "negative") + e;
          case 5292:
            return te + e + Q + I(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              te +
              "box-" +
              I(e, "-grow", "") +
              te +
              e +
              Q +
              I(e, "grow", "positive") +
              e
            );
          case 4554:
            return te + I(e, /([^-])(transform)/g, "$1" + te + "$2") + e;
          case 6187:
            return (
              I(
                I(I(e, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"),
                e,
                "",
              ) + e
            );
          case 5495:
          case 3959:
            return I(e, /(image-set\([^]*)/, te + "$1$`$1");
          case 4968:
            return (
              I(
                I(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  te + "box-pack:$3" + Q + "flex-pack:$3",
                ),
                /s.+-b[^;]+/,
                "justify",
              ) +
              te +
              e +
              e
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return I(e, /(.+)-inline(.+)/, te + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (M(e) - 1 - t > 6)
              switch (A(e, t + 1)) {
                case 109:
                  if (45 !== A(e, t + 4)) break;
                case 102:
                  return (
                    I(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1" +
                        te +
                        "$2-$3$1" +
                        ee +
                        (108 == A(e, t + 3) ? "$3" : "$2-$3"),
                    ) + e
                  );
                case 115:
                  return ~S(e, "stretch")
                    ? be(I(e, "stretch", "fill-available"), t) + e
                    : e;
              }
            break;
          case 4949:
            if (115 !== A(e, t + 1)) break;
          case 6444:
            switch (A(e, M(e) - 3 - (~S(e, "!important") && 10))) {
              case 107:
                return I(e, ":", ":" + te) + e;
              case 101:
                return (
                  I(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    "$1" +
                      te +
                      (45 === A(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      te +
                      "$2$3$1" +
                      Q +
                      "$2box$3",
                  ) + e
                );
            }
            break;
          case 5936:
            switch (A(e, t + 11)) {
              case 114:
                return te + e + Q + I(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return te + e + Q + I(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return te + e + Q + I(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
            return te + e + Q + e + e;
        }
        return e;
      }
      var ye = [
          function (e, t, n, o) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case re:
                  e.return = be(e.value, e.length);
                  break;
                case ie:
                  return ae([N(e, { value: I(e.value, "@", "@" + te) })], o);
                case oe:
                  if (e.length)
                    return (function (e, t) {
                      return e.map(t).join("");
                    })(e.props, function (t) {
                      switch (
                        (function (e, t) {
                          return (e = t.exec(e)) ? e[0] : e;
                        })(t, /(::plac\w+|:read-\w+)/)
                      ) {
                        case ":read-only":
                        case ":read-write":
                          return ae(
                            [
                              N(e, {
                                props: [I(t, /:(read-\w+)/, ":-moz-$1")],
                              }),
                            ],
                            o,
                          );
                        case "::placeholder":
                          return ae(
                            [
                              N(e, {
                                props: [
                                  I(t, /:(plac\w+)/, ":" + te + "input-$1"),
                                ],
                              }),
                              N(e, { props: [I(t, /:(plac\w+)/, ":-moz-$1")] }),
                              N(e, {
                                props: [I(t, /:(plac\w+)/, Q + "input-$1")],
                              }),
                            ],
                            o,
                          );
                      }
                      return "";
                    });
              }
          },
        ],
        Oe = function (e) {
          var t = e.key;
          if ("css" === t) {
            var n = document.querySelectorAll(
              "style[data-emotion]:not([data-s])",
            );
            Array.prototype.forEach.call(n, function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(e), e.setAttribute("data-s", ""));
            });
          }
          var o = e.stylisPlugins || ye;
          var r,
            i,
            a = {},
            s = [];
          (r = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute("data-emotion").split(" "), n = 1;
                  n < t.length;
                  n++
                )
                  a[t[n]] = !0;
                s.push(e);
              },
            );
          var u,
            l,
            c,
            d,
            p = [
              se,
              ((d = function (e) {
                u.insert(e);
              }),
              function (e) {
                e.root || ((e = e.return) && d(e));
              }),
            ],
            f =
              ((l = [me, ge].concat(o, p)),
              (c = V(l)),
              function (e, t, n, o) {
                for (var r = "", i = 0; i < c; i++) r += l[i](e, t, n, o) || "";
                return r;
              });
          i = function (e, t, n, o) {
            (u = n),
              ae(ue(e ? e + "{" + t.styles + "}" : t.styles), f),
              o && (h.inserted[t.name] = !0);
          };
          var h = {
            key: t,
            sheet: new y({
              key: t,
              container: r,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: a,
            registered: {},
            insert: i,
          };
          return h.sheet.hydrate(s), h;
        };
      var we = function (e, t, n) {
        var o = e.key + "-" + t.name;
        !1 === n && void 0 === e.registered[o] && (e.registered[o] = t.styles);
      };
      var Ce = {
        animationIterationCount: 1,
        aspectRatio: 1,
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
      function xe(e) {
        var t = Object.create(null);
        return function (n) {
          return void 0 === t[n] && (t[n] = e(n)), t[n];
        };
      }
      var Ie = /[A-Z]|^ms/g,
        Se = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        Ae = function (e) {
          return 45 === e.charCodeAt(1);
        },
        Ee = function (e) {
          return null != e && "boolean" != typeof e;
        },
        Me = xe(function (e) {
          return Ae(e) ? e : e.replace(Ie, "-$&").toLowerCase();
        }),
        Ve = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" == typeof t)
                return t.replace(Se, function (e, t, n) {
                  return (Pe = { name: t, styles: n, next: Pe }), t;
                });
          }
          return 1 === Ce[e] || Ae(e) || "number" != typeof t || 0 === t
            ? t
            : t + "px";
        };
      function ke(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim)
              return (
                (Pe = { name: n.name, styles: n.styles, next: Pe }), n.name
              );
            if (void 0 !== n.styles) {
              var o = n.next;
              if (void 0 !== o)
                for (; void 0 !== o; )
                  (Pe = { name: o.name, styles: o.styles, next: Pe }),
                    (o = o.next);
              return n.styles + ";";
            }
            return (function (e, t, n) {
              var o = "";
              if (Array.isArray(n))
                for (var r = 0; r < n.length; r++) o += ke(e, t, n[r]) + ";";
              else
                for (var i in n) {
                  var a = n[i];
                  if ("object" != typeof a)
                    null != t && void 0 !== t[a]
                      ? (o += i + "{" + t[a] + "}")
                      : Ee(a) && (o += Me(i) + ":" + Ve(i, a) + ";");
                  else if (
                    !Array.isArray(a) ||
                    "string" != typeof a[0] ||
                    (null != t && void 0 !== t[a[0]])
                  ) {
                    var s = ke(e, t, a);
                    switch (i) {
                      case "animation":
                      case "animationName":
                        o += Me(i) + ":" + s + ";";
                        break;
                      default:
                        o += i + "{" + s + "}";
                    }
                  } else
                    for (var u = 0; u < a.length; u++)
                      Ee(a[u]) && (o += Me(i) + ":" + Ve(i, a[u]) + ";");
                }
              return o;
            })(e, t, n);
          case "function":
            if (void 0 !== e) {
              var r = Pe,
                i = n(e);
              return (Pe = r), ke(e, t, i);
            }
        }
        if (null == t) return n;
        var a = t[n];
        return void 0 !== a ? a : n;
      }
      var Pe,
        Re = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
      var De = function (e, t, n) {
          if (
            1 === e.length &&
            "object" == typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var o = !0,
            r = "";
          Pe = void 0;
          var i = e[0];
          null == i || void 0 === i.raw
            ? ((o = !1), (r += ke(n, t, i)))
            : (r += i[0]);
          for (var a = 1; a < e.length; a++)
            (r += ke(n, t, e[a])), o && (r += i[a]);
          Re.lastIndex = 0;
          for (var s, u = ""; null !== (s = Re.exec(r)); ) u += "-" + s[1];
          var l =
            (function (e) {
              for (var t, n = 0, o = 0, r = e.length; r >= 4; ++o, r -= 4)
                (t =
                  1540483477 *
                    (65535 &
                      (t =
                        (255 & e.charCodeAt(o)) |
                        ((255 & e.charCodeAt(++o)) << 8) |
                        ((255 & e.charCodeAt(++o)) << 16) |
                        ((255 & e.charCodeAt(++o)) << 24))) +
                  ((59797 * (t >>> 16)) << 16)),
                  (n =
                    (1540483477 * (65535 & (t ^= t >>> 24)) +
                      ((59797 * (t >>> 16)) << 16)) ^
                    (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
              switch (r) {
                case 3:
                  n ^= (255 & e.charCodeAt(o + 2)) << 16;
                case 2:
                  n ^= (255 & e.charCodeAt(o + 1)) << 8;
                case 1:
                  n =
                    1540483477 * (65535 & (n ^= 255 & e.charCodeAt(o))) +
                    ((59797 * (n >>> 16)) << 16);
              }
              return (
                ((n =
                  1540483477 * (65535 & (n ^= n >>> 13)) +
                  ((59797 * (n >>> 16)) << 16)) ^
                  (n >>> 15)) >>>
                0
              ).toString(36);
            })(r) + u;
          return { name: l, styles: r, next: Pe };
        },
        Le = !!l.useInsertionEffect && l.useInsertionEffect,
        Fe =
          Le ||
          function (e) {
            return e();
          },
        Te = (Le || u.useLayoutEffect, {}.hasOwnProperty),
        He = u.createContext(
          "undefined" != typeof HTMLElement ? Oe({ key: "css" }) : null,
        );
      He.Provider;
      var Ne = function (e) {
        return (0, u.forwardRef)(function (t, n) {
          var o = (0, u.useContext)(He);
          return e(t, o, n);
        });
      };
      var Ue = u.createContext({});
      var ze = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        Be = function (e) {
          var t = e.cache,
            n = e.serialized,
            o = e.isStringTag;
          return (
            we(t, n, o),
            Fe(function () {
              return (function (e, t, n) {
                we(e, t, n);
                var o = e.key + "-" + t.name;
                if (void 0 === e.inserted[t.name]) {
                  var r = t;
                  do {
                    e.insert(t === r ? "." + o : "", r, e.sheet, !0),
                      (r = r.next);
                  } while (void 0 !== r);
                }
              })(t, n, o);
            }),
            null
          );
        },
        $e = Ne(function (e, t, n) {
          var o = e.css;
          "string" == typeof o &&
            void 0 !== t.registered[o] &&
            (o = t.registered[o]);
          var r = e[ze],
            i = [o],
            a = "";
          "string" == typeof e.className
            ? (a = (function (e, t, n) {
                var o = "";
                return (
                  n.split(" ").forEach(function (n) {
                    void 0 !== e[n] ? t.push(e[n] + ";") : (o += n + " ");
                  }),
                  o
                );
              })(t.registered, i, e.className))
            : null != e.className && (a = e.className + " ");
          var s = De(i, void 0, u.useContext(Ue));
          a += t.key + "-" + s.name;
          var l = {};
          for (var c in e)
            Te.call(e, c) && "css" !== c && c !== ze && (l[c] = e[c]);
          return (
            (l.ref = n),
            (l.className = a),
            u.createElement(
              u.Fragment,
              null,
              u.createElement(Be, {
                cache: t,
                serialized: s,
                isStringTag: "string" == typeof r,
              }),
              u.createElement(r, l),
            )
          );
        });
      var je = $e,
        _e =
          (n(904),
          function (e, t) {
            var n = arguments;
            if (null == t || !Te.call(t, "css"))
              return u.createElement.apply(void 0, n);
            var o = n.length,
              r = new Array(o);
            (r[0] = je),
              (r[1] = (function (e, t) {
                var n = {};
                for (var o in t) Te.call(t, o) && (n[o] = t[o]);
                return (n[ze] = e), n;
              })(e, t));
            for (var i = 2; i < o; i++) r[i] = n[i];
            return u.createElement.apply(null, r);
          });
      function We() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return De(t);
      }
      var Ge = n(11052);
      var Ye = n(72739);
      const qe = Math.min,
        Xe = Math.max,
        Ke = Math.round,
        Ze = Math.floor,
        Je = (e) => ({ x: e, y: e });
      function Qe(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
      function et(e) {
        return ot(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function tt(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function nt(e) {
        var t;
        return null ==
          (t = (ot(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function ot(e) {
        return e instanceof Node || e instanceof tt(e).Node;
      }
      function rt(e) {
        return e instanceof Element || e instanceof tt(e).Element;
      }
      function it(e) {
        return e instanceof HTMLElement || e instanceof tt(e).HTMLElement;
      }
      function at(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof tt(e).ShadowRoot)
        );
      }
      function st(e) {
        const { overflow: t, overflowX: n, overflowY: o, display: r } = ct(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + o + n) &&
          !["inline", "contents"].includes(r)
        );
      }
      function ut() {
        return (
          !("undefined" == typeof CSS || !CSS.supports) &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function lt(e) {
        return ["html", "body", "#document"].includes(et(e));
      }
      function ct(e) {
        return tt(e).getComputedStyle(e);
      }
      function dt(e) {
        if ("html" === et(e)) return e;
        const t = e.assignedSlot || e.parentNode || (at(e) && e.host) || nt(e);
        return at(t) ? t.host : t;
      }
      function pt(e) {
        const t = dt(e);
        return lt(t)
          ? e.ownerDocument
            ? e.ownerDocument.body
            : e.body
          : it(t) && st(t)
            ? t
            : pt(t);
      }
      function ft(e, t, n) {
        var o;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const r = pt(e),
          i = r === (null == (o = e.ownerDocument) ? void 0 : o.body),
          a = tt(r);
        return i
          ? t.concat(
              a,
              a.visualViewport || [],
              st(r) ? r : [],
              a.frameElement && n ? ft(a.frameElement) : [],
            )
          : t.concat(r, ft(r, [], n));
      }
      function ht(e) {
        const t = ct(e);
        let n = parseFloat(t.width) || 0,
          o = parseFloat(t.height) || 0;
        const r = it(e),
          i = r ? e.offsetWidth : n,
          a = r ? e.offsetHeight : o,
          s = Ke(n) !== i || Ke(o) !== a;
        return s && ((n = i), (o = a)), { width: n, height: o, $: s };
      }
      function vt(e) {
        return rt(e) ? e : e.contextElement;
      }
      function mt(e) {
        const t = vt(e);
        if (!it(t)) return Je(1);
        const n = t.getBoundingClientRect(),
          { width: o, height: r, $: i } = ht(t);
        let a = (i ? Ke(n.width) : n.width) / o,
          s = (i ? Ke(n.height) : n.height) / r;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (s && Number.isFinite(s)) || (s = 1),
          { x: a, y: s }
        );
      }
      const gt = Je(0);
      function bt(e) {
        const t = tt(e);
        return ut() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : gt;
      }
      function yt(e, t, n, o) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = e.getBoundingClientRect(),
          i = vt(e);
        let a = Je(1);
        t && (o ? rt(o) && (a = mt(o)) : (a = mt(e)));
        const s = (function (e, t, n) {
          return void 0 === t && (t = !1), !(!n || (t && n !== tt(e))) && t;
        })(i, n, o)
          ? bt(i)
          : Je(0);
        let u = (r.left + s.x) / a.x,
          l = (r.top + s.y) / a.y,
          c = r.width / a.x,
          d = r.height / a.y;
        if (i) {
          const e = tt(i),
            t = o && rt(o) ? tt(o) : o;
          let n = e.frameElement;
          for (; n && o && t !== e; ) {
            const e = mt(n),
              t = n.getBoundingClientRect(),
              o = ct(n),
              r = t.left + (n.clientLeft + parseFloat(o.paddingLeft)) * e.x,
              i = t.top + (n.clientTop + parseFloat(o.paddingTop)) * e.y;
            (u *= e.x),
              (l *= e.y),
              (c *= e.x),
              (d *= e.y),
              (u += r),
              (l += i),
              (n = tt(n).frameElement);
          }
        }
        return Qe({ width: c, height: d, x: u, y: l });
      }
      function Ot(e, t, n, o) {
        void 0 === o && (o = {});
        const {
            ancestorScroll: r = !0,
            ancestorResize: i = !0,
            elementResize: a = "function" == typeof ResizeObserver,
            layoutShift: s = "function" == typeof IntersectionObserver,
            animationFrame: u = !1,
          } = o,
          l = vt(e),
          c = r || i ? [...(l ? ft(l) : []), ...ft(t)] : [];
        c.forEach((e) => {
          r && e.addEventListener("scroll", n, { passive: !0 }),
            i && e.addEventListener("resize", n);
        });
        const d =
          l && s
            ? (function (e, t) {
                let n,
                  o = null;
                const r = nt(e);
                function i() {
                  clearTimeout(n), o && o.disconnect(), (o = null);
                }
                return (
                  (function a(s, u) {
                    void 0 === s && (s = !1), void 0 === u && (u = 1), i();
                    const {
                      left: l,
                      top: c,
                      width: d,
                      height: p,
                    } = e.getBoundingClientRect();
                    if ((s || t(), !d || !p)) return;
                    const f = {
                      rootMargin:
                        -Ze(c) +
                        "px " +
                        -Ze(r.clientWidth - (l + d)) +
                        "px " +
                        -Ze(r.clientHeight - (c + p)) +
                        "px " +
                        -Ze(l) +
                        "px",
                      threshold: Xe(0, qe(1, u)) || 1,
                    };
                    let h = !0;
                    function v(e) {
                      const t = e[0].intersectionRatio;
                      if (t !== u) {
                        if (!h) return a();
                        t
                          ? a(!1, t)
                          : (n = setTimeout(() => {
                              a(!1, 1e-7);
                            }, 100));
                      }
                      h = !1;
                    }
                    try {
                      o = new IntersectionObserver(v, {
                        ...f,
                        root: r.ownerDocument,
                      });
                    } catch (e) {
                      o = new IntersectionObserver(v, f);
                    }
                    o.observe(e);
                  })(!0),
                  i
                );
              })(l, n)
            : null;
        let p,
          f = -1,
          h = null;
        a &&
          ((h = new ResizeObserver((e) => {
            let [o] = e;
            o &&
              o.target === l &&
              h &&
              (h.unobserve(t),
              cancelAnimationFrame(f),
              (f = requestAnimationFrame(() => {
                h && h.observe(t);
              }))),
              n();
          })),
          l && !u && h.observe(l),
          h.observe(t));
        let v = u ? yt(e) : null;
        return (
          u &&
            (function t() {
              const o = yt(e);
              !v ||
                (o.x === v.x &&
                  o.y === v.y &&
                  o.width === v.width &&
                  o.height === v.height) ||
                n();
              (v = o), (p = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            c.forEach((e) => {
              r && e.removeEventListener("scroll", n),
                i && e.removeEventListener("resize", n);
            }),
              d && d(),
              h && h.disconnect(),
              (h = null),
              u && cancelAnimationFrame(p);
          }
        );
      }
      const wt = u.useLayoutEffect;
      var Ct = [
          "className",
          "clearValue",
          "cx",
          "getStyles",
          "getClassNames",
          "getValue",
          "hasValue",
          "isMulti",
          "isRtl",
          "options",
          "selectOption",
          "selectProps",
          "setValue",
          "theme",
        ],
        xt = function () {};
      function It(e, t) {
        return t ? ("-" === t[0] ? e + t : e + "__" + t) : e;
      }
      function St(e, t) {
        for (
          var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), r = 2;
          r < n;
          r++
        )
          o[r - 2] = arguments[r];
        var i = [].concat(o);
        if (t && e)
          for (var a in t)
            t.hasOwnProperty(a) && t[a] && i.push("".concat(It(e, a)));
        return i
          .filter(function (e) {
            return e;
          })
          .map(function (e) {
            return String(e).trim();
          })
          .join(" ");
      }
      var At = function (e) {
          return (
            (t = e),
            Array.isArray(t)
              ? e.filter(Boolean)
              : "object" === (0, Ge.A)(e) && null !== e
                ? [e]
                : []
          );
          var t;
        },
        Et = function (e) {
          return (
            e.className,
            e.clearValue,
            e.cx,
            e.getStyles,
            e.getClassNames,
            e.getValue,
            e.hasValue,
            e.isMulti,
            e.isRtl,
            e.options,
            e.selectOption,
            e.selectProps,
            e.setValue,
            e.theme,
            i({}, (0, s.A)(e, Ct))
          );
        },
        Mt = function (e, t, n) {
          var o = e.cx,
            r = e.getStyles,
            i = e.getClassNames,
            a = e.className;
          return { css: r(t, e), className: o(null != n ? n : {}, i(t, e), a) };
        };
      function Vt(e) {
        return (
          [document.documentElement, document.body, window].indexOf(e) > -1
        );
      }
      function kt(e) {
        return Vt(e) ? window.pageYOffset : e.scrollTop;
      }
      function Pt(e, t) {
        Vt(e) ? window.scrollTo(0, t) : (e.scrollTop = t);
      }
      function Rt(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 200,
          o =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xt,
          r = kt(e),
          i = t - r,
          a = 0;
        !(function t() {
          var s,
            u = i * ((s = (s = a += 10) / n - 1) * s * s + 1) + r;
          Pt(e, u), a < n ? window.requestAnimationFrame(t) : o(e);
        })();
      }
      function Dt(e, t) {
        var n = e.getBoundingClientRect(),
          o = t.getBoundingClientRect(),
          r = t.offsetHeight / 3;
        o.bottom + r > n.bottom
          ? Pt(
              e,
              Math.min(
                t.offsetTop + t.clientHeight - e.offsetHeight + r,
                e.scrollHeight,
              ),
            )
          : o.top - r < n.top && Pt(e, Math.max(t.offsetTop - r, 0));
      }
      function Lt() {
        try {
          return document.createEvent("TouchEvent"), !0;
        } catch (e) {
          return !1;
        }
      }
      var Ft = !1,
        Tt = {
          get passive() {
            return (Ft = !0);
          },
        },
        Ht = "undefined" != typeof window ? window : {};
      Ht.addEventListener &&
        Ht.removeEventListener &&
        (Ht.addEventListener("p", xt, Tt), Ht.removeEventListener("p", xt, !1));
      var Nt = Ft;
      function Ut(e) {
        return null != e;
      }
      function zt(e, t, n) {
        return e ? t : n;
      }
      var Bt = ["children", "innerProps"],
        $t = ["children", "innerProps"];
      function jt(e) {
        var t = e.maxHeight,
          n = e.menuEl,
          o = e.minHeight,
          r = e.placement,
          i = e.shouldScroll,
          a = e.isFixedPosition,
          s = e.controlHeight,
          u = (function (e) {
            var t = getComputedStyle(e),
              n = "absolute" === t.position,
              o = /(auto|scroll)/;
            if ("fixed" === t.position) return document.documentElement;
            for (var r = e; (r = r.parentElement); )
              if (
                ((t = getComputedStyle(r)),
                (!n || "static" !== t.position) &&
                  o.test(t.overflow + t.overflowY + t.overflowX))
              )
                return r;
            return document.documentElement;
          })(n),
          l = { placement: "bottom", maxHeight: t };
        if (!n || !n.offsetParent) return l;
        var c,
          d = u.getBoundingClientRect().height,
          p = n.getBoundingClientRect(),
          f = p.bottom,
          h = p.height,
          v = p.top,
          m = n.offsetParent.getBoundingClientRect().top,
          g = a
            ? window.innerHeight
            : Vt((c = u))
              ? window.innerHeight
              : c.clientHeight,
          b = kt(u),
          y = parseInt(getComputedStyle(n).marginBottom, 10),
          O = parseInt(getComputedStyle(n).marginTop, 10),
          w = m - O,
          C = g - v,
          x = w + b,
          I = d - b - v,
          S = f - g + b + y,
          A = b + v - O,
          E = 160;
        switch (r) {
          case "auto":
          case "bottom":
            if (C >= h) return { placement: "bottom", maxHeight: t };
            if (I >= h && !a)
              return i && Rt(u, S, E), { placement: "bottom", maxHeight: t };
            if ((!a && I >= o) || (a && C >= o))
              return (
                i && Rt(u, S, E),
                { placement: "bottom", maxHeight: a ? C - y : I - y }
              );
            if ("auto" === r || a) {
              var M = t,
                V = a ? w : x;
              return (
                V >= o && (M = Math.min(V - y - s, t)),
                { placement: "top", maxHeight: M }
              );
            }
            if ("bottom" === r)
              return i && Pt(u, S), { placement: "bottom", maxHeight: t };
            break;
          case "top":
            if (w >= h) return { placement: "top", maxHeight: t };
            if (x >= h && !a)
              return i && Rt(u, A, E), { placement: "top", maxHeight: t };
            if ((!a && x >= o) || (a && w >= o)) {
              var k = t;
              return (
                ((!a && x >= o) || (a && w >= o)) && (k = a ? w - O : x - O),
                i && Rt(u, A, E),
                { placement: "top", maxHeight: k }
              );
            }
            return { placement: "bottom", maxHeight: t };
          default:
            throw new Error('Invalid placement provided "'.concat(r, '".'));
        }
        return l;
      }
      var _t,
        Wt = function (e) {
          return "auto" === e ? "bottom" : e;
        },
        Gt = (0, u.createContext)(null),
        Yt = function (e) {
          var t = e.children,
            n = e.minMenuHeight,
            o = e.maxMenuHeight,
            r = e.menuPlacement,
            s = e.menuPosition,
            l = e.menuShouldScrollIntoView,
            c = e.theme,
            d = ((0, u.useContext)(Gt) || {}).setPortalPlacement,
            p = (0, u.useRef)(null),
            f = (0, u.useState)(o),
            h = (0, a.A)(f, 2),
            v = h[0],
            m = h[1],
            g = (0, u.useState)(null),
            b = (0, a.A)(g, 2),
            y = b[0],
            O = b[1],
            w = c.spacing.controlHeight;
          return (
            wt(
              function () {
                var e = p.current;
                if (e) {
                  var t = "fixed" === s,
                    i = jt({
                      maxHeight: o,
                      menuEl: e,
                      minHeight: n,
                      placement: r,
                      shouldScroll: l && !t,
                      isFixedPosition: t,
                      controlHeight: w,
                    });
                  m(i.maxHeight), O(i.placement), null == d || d(i.placement);
                }
              },
              [o, r, s, l, n, d, w],
            ),
            t({
              ref: p,
              placerProps: i(
                i({}, e),
                {},
                { placement: y || Wt(r), maxHeight: v },
              ),
            })
          );
        },
        qt = function (e) {
          var t = e.children,
            n = e.innerRef,
            o = e.innerProps;
          return _e(
            "div",
            (0, d.A)({}, Mt(e, "menu", { menu: !0 }), { ref: n }, o),
            t,
          );
        },
        Xt = function (e, t) {
          var n = e.theme,
            o = n.spacing.baseUnit,
            r = n.colors;
          return i(
            { textAlign: "center" },
            t
              ? {}
              : {
                  color: r.neutral40,
                  padding: "".concat(2 * o, "px ").concat(3 * o, "px"),
                },
          );
        },
        Kt = Xt,
        Zt = Xt,
        Jt = ["size"],
        Qt = ["innerProps", "isRtl", "size"];
      var en,
        tn,
        nn = {
          name: "8mmkcg",
          styles:
            "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
        },
        on = function (e) {
          var t = e.size,
            n = (0, s.A)(e, Jt);
          return _e(
            "svg",
            (0, d.A)(
              {
                height: t,
                width: t,
                viewBox: "0 0 20 20",
                "aria-hidden": "true",
                focusable: "false",
                css: nn,
              },
              n,
            ),
          );
        },
        rn = function (e) {
          return _e(
            on,
            (0, d.A)({ size: 20 }, e),
            _e("path", {
              d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
            }),
          );
        },
        an = function (e) {
          return _e(
            on,
            (0, d.A)({ size: 20 }, e),
            _e("path", {
              d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
            }),
          );
        },
        sn = function (e, t) {
          var n = e.isFocused,
            o = e.theme,
            r = o.spacing.baseUnit,
            a = o.colors;
          return i(
            {
              label: "indicatorContainer",
              display: "flex",
              transition: "color 150ms",
            },
            t
              ? {}
              : {
                  color: n ? a.neutral60 : a.neutral20,
                  padding: 2 * r,
                  ":hover": { color: n ? a.neutral80 : a.neutral40 },
                },
          );
        },
        un = sn,
        ln = sn,
        cn = (function () {
          var e = We.apply(void 0, arguments),
            t = "animation-" + e.name;
          return {
            name: t,
            styles: "@keyframes " + t + "{" + e.styles + "}",
            anim: 1,
            toString: function () {
              return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
            },
          };
        })(
          _t ||
            ((en = [
              "\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n",
            ]),
            tn || (tn = en.slice(0)),
            (_t = Object.freeze(
              Object.defineProperties(en, {
                raw: { value: Object.freeze(tn) },
              }),
            ))),
        ),
        dn = function (e) {
          var t = e.delay,
            n = e.offset;
          return _e("span", {
            css: We(
              {
                animation: ""
                  .concat(cn, " 1s ease-in-out ")
                  .concat(t, "ms infinite;"),
                backgroundColor: "currentColor",
                borderRadius: "1em",
                display: "inline-block",
                marginLeft: n ? "1em" : void 0,
                height: "1em",
                verticalAlign: "top",
                width: "1em",
              },
              "",
              "",
            ),
          });
        },
        pn = function (e) {
          var t = e.children,
            n = e.isDisabled,
            o = e.isFocused,
            r = e.innerRef,
            i = e.innerProps,
            a = e.menuIsOpen;
          return _e(
            "div",
            (0, d.A)(
              { ref: r },
              Mt(e, "control", {
                control: !0,
                "control--is-disabled": n,
                "control--is-focused": o,
                "control--menu-is-open": a,
              }),
              i,
              { "aria-disabled": n || void 0 },
            ),
            t,
          );
        },
        fn = ["data"],
        hn = function (e) {
          var t = e.children,
            n = e.cx,
            o = e.getStyles,
            r = e.getClassNames,
            i = e.Heading,
            a = e.headingProps,
            s = e.innerProps,
            u = e.label,
            l = e.theme,
            c = e.selectProps;
          return _e(
            "div",
            (0, d.A)({}, Mt(e, "group", { group: !0 }), s),
            _e(
              i,
              (0, d.A)({}, a, {
                selectProps: c,
                theme: l,
                getStyles: o,
                getClassNames: r,
                cx: n,
              }),
              u,
            ),
            _e("div", null, t),
          );
        },
        vn = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
        mn = {
          gridArea: "1 / 2",
          font: "inherit",
          minWidth: "2px",
          border: 0,
          margin: 0,
          outline: 0,
          padding: 0,
        },
        gn = {
          flex: "1 1 auto",
          display: "inline-grid",
          gridArea: "1 / 1 / 2 / 3",
          gridTemplateColumns: "0 min-content",
          "&:after": i(
            {
              content: 'attr(data-value) " "',
              visibility: "hidden",
              whiteSpace: "pre",
            },
            mn,
          ),
        },
        bn = function (e) {
          return i(
            {
              label: "input",
              color: "inherit",
              background: 0,
              opacity: e ? 0 : 1,
              width: "100%",
            },
            mn,
          );
        },
        yn = function (e) {
          var t = e.children,
            n = e.innerProps;
          return _e("div", n, t);
        };
      var On = function (e) {
          var t = e.children,
            n = e.components,
            o = e.data,
            r = e.innerProps,
            a = e.isDisabled,
            s = e.removeProps,
            u = e.selectProps,
            l = n.Container,
            c = n.Label,
            d = n.Remove;
          return _e(
            l,
            {
              data: o,
              innerProps: i(
                i(
                  {},
                  Mt(e, "multiValue", {
                    "multi-value": !0,
                    "multi-value--is-disabled": a,
                  }),
                ),
                r,
              ),
              selectProps: u,
            },
            _e(
              c,
              {
                data: o,
                innerProps: i(
                  {},
                  Mt(e, "multiValueLabel", { "multi-value__label": !0 }),
                ),
                selectProps: u,
              },
              t,
            ),
            _e(d, {
              data: o,
              innerProps: i(
                i({}, Mt(e, "multiValueRemove", { "multi-value__remove": !0 })),
                {},
                { "aria-label": "Remove ".concat(t || "option") },
                s,
              ),
              selectProps: u,
            }),
          );
        },
        wn = {
          ClearIndicator: function (e) {
            var t = e.children,
              n = e.innerProps;
            return _e(
              "div",
              (0, d.A)(
                {},
                Mt(e, "clearIndicator", {
                  indicator: !0,
                  "clear-indicator": !0,
                }),
                n,
              ),
              t || _e(rn, null),
            );
          },
          Control: pn,
          DropdownIndicator: function (e) {
            var t = e.children,
              n = e.innerProps;
            return _e(
              "div",
              (0, d.A)(
                {},
                Mt(e, "dropdownIndicator", {
                  indicator: !0,
                  "dropdown-indicator": !0,
                }),
                n,
              ),
              t || _e(an, null),
            );
          },
          DownChevron: an,
          CrossIcon: rn,
          Group: hn,
          GroupHeading: function (e) {
            var t = Et(e);
            t.data;
            var n = (0, s.A)(t, fn);
            return _e(
              "div",
              (0, d.A)({}, Mt(e, "groupHeading", { "group-heading": !0 }), n),
            );
          },
          IndicatorsContainer: function (e) {
            var t = e.children,
              n = e.innerProps;
            return _e(
              "div",
              (0, d.A)({}, Mt(e, "indicatorsContainer", { indicators: !0 }), n),
              t,
            );
          },
          IndicatorSeparator: function (e) {
            var t = e.innerProps;
            return _e(
              "span",
              (0, d.A)(
                {},
                t,
                Mt(e, "indicatorSeparator", { "indicator-separator": !0 }),
              ),
            );
          },
          Input: function (e) {
            var t = e.cx,
              n = e.value,
              o = Et(e),
              r = o.innerRef,
              i = o.isDisabled,
              a = o.isHidden,
              u = o.inputClassName,
              l = (0, s.A)(o, vn);
            return _e(
              "div",
              (0, d.A)({}, Mt(e, "input", { "input-container": !0 }), {
                "data-value": n || "",
              }),
              _e(
                "input",
                (0, d.A)(
                  {
                    className: t({ input: !0 }, u),
                    ref: r,
                    style: bn(a),
                    disabled: i,
                  },
                  l,
                ),
              ),
            );
          },
          LoadingIndicator: function (e) {
            var t = e.innerProps,
              n = e.isRtl,
              o = e.size,
              r = void 0 === o ? 4 : o,
              a = (0, s.A)(e, Qt);
            return _e(
              "div",
              (0, d.A)(
                {},
                Mt(
                  i(i({}, a), {}, { innerProps: t, isRtl: n, size: r }),
                  "loadingIndicator",
                  { indicator: !0, "loading-indicator": !0 },
                ),
                t,
              ),
              _e(dn, { delay: 0, offset: n }),
              _e(dn, { delay: 160, offset: !0 }),
              _e(dn, { delay: 320, offset: !n }),
            );
          },
          Menu: qt,
          MenuList: function (e) {
            var t = e.children,
              n = e.innerProps,
              o = e.innerRef,
              r = e.isMulti;
            return _e(
              "div",
              (0, d.A)(
                {},
                Mt(e, "menuList", {
                  "menu-list": !0,
                  "menu-list--is-multi": r,
                }),
                { ref: o },
                n,
              ),
              t,
            );
          },
          MenuPortal: function (e) {
            var t = e.appendTo,
              n = e.children,
              o = e.controlElement,
              r = e.innerProps,
              s = e.menuPlacement,
              l = e.menuPosition,
              c = (0, u.useRef)(null),
              p = (0, u.useRef)(null),
              f = (0, u.useState)(Wt(s)),
              h = (0, a.A)(f, 2),
              v = h[0],
              m = h[1],
              g = (0, u.useMemo)(function () {
                return { setPortalPlacement: m };
              }, []),
              b = (0, u.useState)(null),
              y = (0, a.A)(b, 2),
              O = y[0],
              w = y[1],
              C = (0, u.useCallback)(
                function () {
                  if (o) {
                    var e = (function (e) {
                        var t = e.getBoundingClientRect();
                        return {
                          bottom: t.bottom,
                          height: t.height,
                          left: t.left,
                          right: t.right,
                          top: t.top,
                          width: t.width,
                        };
                      })(o),
                      t = "fixed" === l ? 0 : window.pageYOffset,
                      n = e[v] + t;
                    (n === (null == O ? void 0 : O.offset) &&
                      e.left === (null == O ? void 0 : O.rect.left) &&
                      e.width === (null == O ? void 0 : O.rect.width)) ||
                      w({ offset: n, rect: e });
                  }
                },
                [
                  o,
                  l,
                  v,
                  null == O ? void 0 : O.offset,
                  null == O ? void 0 : O.rect.left,
                  null == O ? void 0 : O.rect.width,
                ],
              );
            wt(
              function () {
                C();
              },
              [C],
            );
            var x = (0, u.useCallback)(
              function () {
                "function" == typeof p.current &&
                  (p.current(), (p.current = null)),
                  o &&
                    c.current &&
                    (p.current = Ot(o, c.current, C, {
                      elementResize: "ResizeObserver" in window,
                    }));
              },
              [o, C],
            );
            wt(
              function () {
                x();
              },
              [x],
            );
            var I = (0, u.useCallback)(
              function (e) {
                (c.current = e), x();
              },
              [x],
            );
            if ((!t && "fixed" !== l) || !O) return null;
            var S = _e(
              "div",
              (0, d.A)(
                { ref: I },
                Mt(
                  i(
                    i({}, e),
                    {},
                    { offset: O.offset, position: l, rect: O.rect },
                  ),
                  "menuPortal",
                  { "menu-portal": !0 },
                ),
                r,
              ),
              n,
            );
            return _e(
              Gt.Provider,
              { value: g },
              t ? (0, Ye.createPortal)(S, t) : S,
            );
          },
          LoadingMessage: function (e) {
            var t = e.children,
              n = void 0 === t ? "Loading..." : t,
              o = e.innerProps,
              r = (0, s.A)(e, $t);
            return _e(
              "div",
              (0, d.A)(
                {},
                Mt(
                  i(i({}, r), {}, { children: n, innerProps: o }),
                  "loadingMessage",
                  { "menu-notice": !0, "menu-notice--loading": !0 },
                ),
                o,
              ),
              n,
            );
          },
          NoOptionsMessage: function (e) {
            var t = e.children,
              n = void 0 === t ? "No options" : t,
              o = e.innerProps,
              r = (0, s.A)(e, Bt);
            return _e(
              "div",
              (0, d.A)(
                {},
                Mt(
                  i(i({}, r), {}, { children: n, innerProps: o }),
                  "noOptionsMessage",
                  { "menu-notice": !0, "menu-notice--no-options": !0 },
                ),
                o,
              ),
              n,
            );
          },
          MultiValue: On,
          MultiValueContainer: yn,
          MultiValueLabel: yn,
          MultiValueRemove: function (e) {
            var t = e.children,
              n = e.innerProps;
            return _e(
              "div",
              (0, d.A)({ role: "button" }, n),
              t || _e(rn, { size: 14 }),
            );
          },
          Option: function (e) {
            var t = e.children,
              n = e.isDisabled,
              o = e.isFocused,
              r = e.isSelected,
              i = e.innerRef,
              a = e.innerProps;
            return _e(
              "div",
              (0, d.A)(
                {},
                Mt(e, "option", {
                  option: !0,
                  "option--is-disabled": n,
                  "option--is-focused": o,
                  "option--is-selected": r,
                }),
                { ref: i, "aria-disabled": n },
                a,
              ),
              t,
            );
          },
          Placeholder: function (e) {
            var t = e.children,
              n = e.innerProps;
            return _e(
              "div",
              (0, d.A)({}, Mt(e, "placeholder", { placeholder: !0 }), n),
              t,
            );
          },
          SelectContainer: function (e) {
            var t = e.children,
              n = e.innerProps,
              o = e.isDisabled,
              r = e.isRtl;
            return _e(
              "div",
              (0, d.A)(
                {},
                Mt(e, "container", { "--is-disabled": o, "--is-rtl": r }),
                n,
              ),
              t,
            );
          },
          SingleValue: function (e) {
            var t = e.children,
              n = e.isDisabled,
              o = e.innerProps;
            return _e(
              "div",
              (0, d.A)(
                {},
                Mt(e, "singleValue", {
                  "single-value": !0,
                  "single-value--is-disabled": n,
                }),
                o,
              ),
              t,
            );
          },
          ValueContainer: function (e) {
            var t = e.children,
              n = e.innerProps,
              o = e.isMulti,
              r = e.hasValue;
            return _e(
              "div",
              (0, d.A)(
                {},
                Mt(e, "valueContainer", {
                  "value-container": !0,
                  "value-container--is-multi": o,
                  "value-container--has-value": r,
                }),
                n,
              ),
              t,
            );
          },
        },
        Cn =
          Number.isNaN ||
          function (e) {
            return "number" == typeof e && e != e;
          };
      function xn(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
          if (((o = e[n]), (r = t[n]), !(o === r || (Cn(o) && Cn(r)))))
            return !1;
        var o, r;
        return !0;
      }
      for (
        var In = {
            name: "7pg0cj-a11yText",
            styles:
              "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
          },
          Sn = function (e) {
            return _e("span", (0, d.A)({ css: In }, e));
          },
          An = {
            guidance: function (e) {
              var t = e.isSearchable,
                n = e.isMulti,
                o = e.tabSelectsValue,
                r = e.context,
                i = e.isInitialFocus;
              switch (r) {
                case "menu":
                  return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(
                    o
                      ? ", press Tab to select the option and exit the menu"
                      : "",
                    ".",
                  );
                case "input":
                  return i
                    ? ""
                        .concat(e["aria-label"] || "Select", " is focused ")
                        .concat(
                          t ? ",type to refine list" : "",
                          ", press Down to open the menu, ",
                        )
                        .concat(n ? " press left to focus selected values" : "")
                    : "";
                case "value":
                  return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
                default:
                  return "";
              }
            },
            onChange: function (e) {
              var t = e.action,
                n = e.label,
                o = void 0 === n ? "" : n,
                r = e.labels,
                i = e.isDisabled;
              switch (t) {
                case "deselect-option":
                case "pop-value":
                case "remove-value":
                  return "option ".concat(o, ", deselected.");
                case "clear":
                  return "All selected options have been cleared.";
                case "initial-input-focus":
                  return "option"
                    .concat(r.length > 1 ? "s" : "", " ")
                    .concat(r.join(","), ", selected.");
                case "select-option":
                  return "option ".concat(
                    o,
                    i ? " is disabled. Select another option." : ", selected.",
                  );
                default:
                  return "";
              }
            },
            onFocus: function (e) {
              var t = e.context,
                n = e.focused,
                o = e.options,
                r = e.label,
                i = void 0 === r ? "" : r,
                a = e.selectValue,
                s = e.isDisabled,
                u = e.isSelected,
                l = e.isAppleDevice,
                c = function (e, t) {
                  return e && e.length
                    ? "".concat(e.indexOf(t) + 1, " of ").concat(e.length)
                    : "";
                };
              if ("value" === t && a)
                return "value ".concat(i, " focused, ").concat(c(a, n), ".");
              if ("menu" === t && l) {
                var d = s ? " disabled" : "",
                  p = "".concat(u ? " selected" : "").concat(d);
                return "".concat(i).concat(p, ", ").concat(c(o, n), ".");
              }
              return "";
            },
            onFilter: function (e) {
              var t = e.inputValue,
                n = e.resultsMessage;
              return "".concat(n).concat(t ? " for search term " + t : "", ".");
            },
          },
          En = function (e) {
            var t = e.ariaSelection,
              n = e.focusedOption,
              o = e.focusedValue,
              r = e.focusableOptions,
              a = e.isFocused,
              s = e.selectValue,
              l = e.selectProps,
              c = e.id,
              d = e.isAppleDevice,
              p = l.ariaLiveMessages,
              f = l.getOptionLabel,
              h = l.inputValue,
              v = l.isMulti,
              m = l.isOptionDisabled,
              g = l.isSearchable,
              b = l.menuIsOpen,
              y = l.options,
              O = l.screenReaderStatus,
              w = l.tabSelectsValue,
              C = l.isLoading,
              x = l["aria-label"],
              I = l["aria-live"],
              S = (0, u.useMemo)(
                function () {
                  return i(i({}, An), p || {});
                },
                [p],
              ),
              A = (0, u.useMemo)(
                function () {
                  var e,
                    n = "";
                  if (t && S.onChange) {
                    var o = t.option,
                      r = t.options,
                      a = t.removedValue,
                      u = t.removedValues,
                      l = t.value,
                      c = a || o || ((e = l), Array.isArray(e) ? null : e),
                      d = c ? f(c) : "",
                      p = r || u || void 0,
                      h = p ? p.map(f) : [],
                      v = i(
                        { isDisabled: c && m(c, s), label: d, labels: h },
                        t,
                      );
                    n = S.onChange(v);
                  }
                  return n;
                },
                [t, S, m, s, f],
              ),
              E = (0, u.useMemo)(
                function () {
                  var e = "",
                    t = n || o,
                    i = !!(n && s && s.includes(n));
                  if (t && S.onFocus) {
                    var a = {
                      focused: t,
                      label: f(t),
                      isDisabled: m(t, s),
                      isSelected: i,
                      options: r,
                      context: t === n ? "menu" : "value",
                      selectValue: s,
                      isAppleDevice: d,
                    };
                    e = S.onFocus(a);
                  }
                  return e;
                },
                [n, o, f, m, S, r, s, d],
              ),
              M = (0, u.useMemo)(
                function () {
                  var e = "";
                  if (b && y.length && !C && S.onFilter) {
                    var t = O({ count: r.length });
                    e = S.onFilter({ inputValue: h, resultsMessage: t });
                  }
                  return e;
                },
                [r, h, b, S, y, O, C],
              ),
              V = "initial-input-focus" === (null == t ? void 0 : t.action),
              k = (0, u.useMemo)(
                function () {
                  var e = "";
                  if (S.guidance) {
                    var t = o ? "value" : b ? "menu" : "input";
                    e = S.guidance({
                      "aria-label": x,
                      context: t,
                      isDisabled: n && m(n, s),
                      isMulti: v,
                      isSearchable: g,
                      tabSelectsValue: w,
                      isInitialFocus: V,
                    });
                  }
                  return e;
                },
                [x, n, o, v, m, g, b, S, s, w, V],
              ),
              P = _e(
                u.Fragment,
                null,
                _e("span", { id: "aria-selection" }, A),
                _e("span", { id: "aria-focused" }, E),
                _e("span", { id: "aria-results" }, M),
                _e("span", { id: "aria-guidance" }, k),
              );
            return _e(
              u.Fragment,
              null,
              _e(Sn, { id: c }, V && P),
              _e(
                Sn,
                {
                  "aria-live": I,
                  "aria-atomic": "false",
                  "aria-relevant": "additions text",
                  role: "log",
                },
                a && !V && P,
              ),
            );
          },
          Mn = [
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
          Vn = new RegExp(
            "[" +
              Mn.map(function (e) {
                return e.letters;
              }).join("") +
              "]",
            "g",
          ),
          kn = {},
          Pn = 0;
        Pn < Mn.length;
        Pn++
      )
        for (var Rn = Mn[Pn], Dn = 0; Dn < Rn.letters.length; Dn++)
          kn[Rn.letters[Dn]] = Rn.base;
      var Ln = function (e) {
          return e.replace(Vn, function (e) {
            return kn[e];
          });
        },
        Fn = (function (e, t) {
          void 0 === t && (t = xn);
          var n = null;
          function o() {
            for (var o = [], r = 0; r < arguments.length; r++)
              o[r] = arguments[r];
            if (n && n.lastThis === this && t(o, n.lastArgs))
              return n.lastResult;
            var i = e.apply(this, o);
            return (n = { lastResult: i, lastArgs: o, lastThis: this }), i;
          }
          return (
            (o.clear = function () {
              n = null;
            }),
            o
          );
        })(Ln),
        Tn = function (e) {
          return e.replace(/^\s+|\s+$/g, "");
        },
        Hn = function (e) {
          return "".concat(e.label, " ").concat(e.value);
        },
        Nn = ["innerRef"];
      function Un(e) {
        var t = e.innerRef,
          n = (function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
              o < t;
              o++
            )
              n[o - 1] = arguments[o];
            var r = Object.entries(e).filter(function (e) {
              var t = (0, a.A)(e, 1)[0];
              return !n.includes(t);
            });
            return r.reduce(function (e, t) {
              var n = (0, a.A)(t, 2),
                o = n[0],
                r = n[1];
              return (e[o] = r), e;
            }, {});
          })((0, s.A)(e, Nn), "onExited", "in", "enter", "exit", "appear");
        return _e(
          "input",
          (0, d.A)({ ref: t }, n, {
            css: We(
              {
                label: "dummyInput",
                background: 0,
                border: 0,
                caretColor: "transparent",
                fontSize: "inherit",
                gridArea: "1 / 1 / 2 / 3",
                outline: 0,
                padding: 0,
                width: 1,
                color: "transparent",
                left: -100,
                opacity: 0,
                position: "relative",
                transform: "scale(.01)",
              },
              "",
              "",
            ),
          }),
        );
      }
      var zn = function (e) {
        e.cancelable && e.preventDefault(), e.stopPropagation();
      };
      var Bn = ["boxSizing", "height", "overflow", "paddingRight", "position"],
        $n = {
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
          height: "100%",
        };
      function jn(e) {
        e.preventDefault();
      }
      function _n(e) {
        e.stopPropagation();
      }
      function Wn() {
        var e = this.scrollTop,
          t = this.scrollHeight,
          n = e + this.offsetHeight;
        0 === e ? (this.scrollTop = 1) : n === t && (this.scrollTop = e - 1);
      }
      function Gn() {
        return "ontouchstart" in window || navigator.maxTouchPoints;
      }
      var Yn = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        qn = 0,
        Xn = { capture: !1, passive: !1 };
      var Kn = function (e) {
          var t = e.target;
          return (
            t.ownerDocument.activeElement &&
            t.ownerDocument.activeElement.blur()
          );
        },
        Zn = {
          name: "1kfdb0e",
          styles: "position:fixed;left:0;bottom:0;right:0;top:0",
        };
      function Jn(e) {
        var t = e.children,
          n = e.lockEnabled,
          o = e.captureEnabled,
          r = (function (e) {
            var t = e.isEnabled,
              n = e.onBottomArrive,
              o = e.onBottomLeave,
              r = e.onTopArrive,
              i = e.onTopLeave,
              a = (0, u.useRef)(!1),
              s = (0, u.useRef)(!1),
              l = (0, u.useRef)(0),
              c = (0, u.useRef)(null),
              d = (0, u.useCallback)(
                function (e, t) {
                  if (null !== c.current) {
                    var u = c.current,
                      l = u.scrollTop,
                      d = u.scrollHeight,
                      p = u.clientHeight,
                      f = c.current,
                      h = t > 0,
                      v = d - p - l,
                      m = !1;
                    v > t && a.current && (o && o(e), (a.current = !1)),
                      h && s.current && (i && i(e), (s.current = !1)),
                      h && t > v
                        ? (n && !a.current && n(e),
                          (f.scrollTop = d),
                          (m = !0),
                          (a.current = !0))
                        : !h &&
                          -t > l &&
                          (r && !s.current && r(e),
                          (f.scrollTop = 0),
                          (m = !0),
                          (s.current = !0)),
                      m && zn(e);
                  }
                },
                [n, o, r, i],
              ),
              p = (0, u.useCallback)(
                function (e) {
                  d(e, e.deltaY);
                },
                [d],
              ),
              f = (0, u.useCallback)(function (e) {
                l.current = e.changedTouches[0].clientY;
              }, []),
              h = (0, u.useCallback)(
                function (e) {
                  var t = l.current - e.changedTouches[0].clientY;
                  d(e, t);
                },
                [d],
              ),
              v = (0, u.useCallback)(
                function (e) {
                  if (e) {
                    var t = !!Nt && { passive: !1 };
                    e.addEventListener("wheel", p, t),
                      e.addEventListener("touchstart", f, t),
                      e.addEventListener("touchmove", h, t);
                  }
                },
                [h, f, p],
              ),
              m = (0, u.useCallback)(
                function (e) {
                  e &&
                    (e.removeEventListener("wheel", p, !1),
                    e.removeEventListener("touchstart", f, !1),
                    e.removeEventListener("touchmove", h, !1));
                },
                [h, f, p],
              );
            return (
              (0, u.useEffect)(
                function () {
                  if (t) {
                    var e = c.current;
                    return (
                      v(e),
                      function () {
                        m(e);
                      }
                    );
                  }
                },
                [t, v, m],
              ),
              function (e) {
                c.current = e;
              }
            );
          })({
            isEnabled: void 0 === o || o,
            onBottomArrive: e.onBottomArrive,
            onBottomLeave: e.onBottomLeave,
            onTopArrive: e.onTopArrive,
            onTopLeave: e.onTopLeave,
          }),
          i = (function (e) {
            var t = e.isEnabled,
              n = e.accountForScrollbars,
              o = void 0 === n || n,
              r = (0, u.useRef)({}),
              i = (0, u.useRef)(null),
              a = (0, u.useCallback)(
                function (e) {
                  if (Yn) {
                    var t = document.body,
                      n = t && t.style;
                    if (
                      (o &&
                        Bn.forEach(function (e) {
                          var t = n && n[e];
                          r.current[e] = t;
                        }),
                      o && qn < 1)
                    ) {
                      var i = parseInt(r.current.paddingRight, 10) || 0,
                        a = document.body ? document.body.clientWidth : 0,
                        s = window.innerWidth - a + i || 0;
                      Object.keys($n).forEach(function (e) {
                        var t = $n[e];
                        n && (n[e] = t);
                      }),
                        n && (n.paddingRight = "".concat(s, "px"));
                    }
                    t &&
                      Gn() &&
                      (t.addEventListener("touchmove", jn, Xn),
                      e &&
                        (e.addEventListener("touchstart", Wn, Xn),
                        e.addEventListener("touchmove", _n, Xn))),
                      (qn += 1);
                  }
                },
                [o],
              ),
              s = (0, u.useCallback)(
                function (e) {
                  if (Yn) {
                    var t = document.body,
                      n = t && t.style;
                    (qn = Math.max(qn - 1, 0)),
                      o &&
                        qn < 1 &&
                        Bn.forEach(function (e) {
                          var t = r.current[e];
                          n && (n[e] = t);
                        }),
                      t &&
                        Gn() &&
                        (t.removeEventListener("touchmove", jn, Xn),
                        e &&
                          (e.removeEventListener("touchstart", Wn, Xn),
                          e.removeEventListener("touchmove", _n, Xn)));
                  }
                },
                [o],
              );
            return (
              (0, u.useEffect)(
                function () {
                  if (t) {
                    var e = i.current;
                    return (
                      a(e),
                      function () {
                        s(e);
                      }
                    );
                  }
                },
                [t, a, s],
              ),
              function (e) {
                i.current = e;
              }
            );
          })({ isEnabled: n });
        return _e(
          u.Fragment,
          null,
          n && _e("div", { onClick: Kn, css: Zn }),
          t(function (e) {
            r(e), i(e);
          }),
        );
      }
      var Qn = {
          name: "1a0ro4n-requiredInput",
          styles:
            "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%",
        },
        eo = function (e) {
          var t = e.name,
            n = e.onFocus;
          return _e("input", {
            required: !0,
            name: t,
            tabIndex: -1,
            "aria-hidden": "true",
            onFocus: n,
            css: Qn,
            value: "",
            onChange: function () {},
          });
        };
      function to(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          e.test(
            (null === (t = window.navigator.userAgentData) || void 0 === t
              ? void 0
              : t.platform) || window.navigator.platform,
          )
        );
      }
      function no() {
        return to(/^Mac/i);
      }
      function oo() {
        return (
          to(/^iPhone/i) ||
          to(/^iPad/i) ||
          (no() && navigator.maxTouchPoints > 1)
        );
      }
      var ro = {
        clearIndicator: ln,
        container: function (e) {
          var t = e.isDisabled;
          return {
            label: "container",
            direction: e.isRtl ? "rtl" : void 0,
            pointerEvents: t ? "none" : void 0,
            position: "relative",
          };
        },
        control: function (e, t) {
          var n = e.isDisabled,
            o = e.isFocused,
            r = e.theme,
            a = r.colors,
            s = r.borderRadius;
          return i(
            {
              label: "control",
              alignItems: "center",
              cursor: "default",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              minHeight: r.spacing.controlHeight,
              outline: "0 !important",
              position: "relative",
              transition: "all 100ms",
            },
            t
              ? {}
              : {
                  backgroundColor: n ? a.neutral5 : a.neutral0,
                  borderColor: n ? a.neutral10 : o ? a.primary : a.neutral20,
                  borderRadius: s,
                  borderStyle: "solid",
                  borderWidth: 1,
                  boxShadow: o ? "0 0 0 1px ".concat(a.primary) : void 0,
                  "&:hover": { borderColor: o ? a.primary : a.neutral30 },
                },
          );
        },
        dropdownIndicator: un,
        group: function (e, t) {
          var n = e.theme.spacing;
          return t
            ? {}
            : { paddingBottom: 2 * n.baseUnit, paddingTop: 2 * n.baseUnit };
        },
        groupHeading: function (e, t) {
          var n = e.theme,
            o = n.colors,
            r = n.spacing;
          return i(
            { label: "group", cursor: "default", display: "block" },
            t
              ? {}
              : {
                  color: o.neutral40,
                  fontSize: "75%",
                  fontWeight: 500,
                  marginBottom: "0.25em",
                  paddingLeft: 3 * r.baseUnit,
                  paddingRight: 3 * r.baseUnit,
                  textTransform: "uppercase",
                },
          );
        },
        indicatorsContainer: function () {
          return {
            alignItems: "center",
            alignSelf: "stretch",
            display: "flex",
            flexShrink: 0,
          };
        },
        indicatorSeparator: function (e, t) {
          var n = e.isDisabled,
            o = e.theme,
            r = o.spacing.baseUnit,
            a = o.colors;
          return i(
            { label: "indicatorSeparator", alignSelf: "stretch", width: 1 },
            t
              ? {}
              : {
                  backgroundColor: n ? a.neutral10 : a.neutral20,
                  marginBottom: 2 * r,
                  marginTop: 2 * r,
                },
          );
        },
        input: function (e, t) {
          var n = e.isDisabled,
            o = e.value,
            r = e.theme,
            a = r.spacing,
            s = r.colors;
          return i(
            i(
              {
                visibility: n ? "hidden" : "visible",
                transform: o ? "translateZ(0)" : "",
              },
              gn,
            ),
            t
              ? {}
              : {
                  margin: a.baseUnit / 2,
                  paddingBottom: a.baseUnit / 2,
                  paddingTop: a.baseUnit / 2,
                  color: s.neutral80,
                },
          );
        },
        loadingIndicator: function (e, t) {
          var n = e.isFocused,
            o = e.size,
            r = e.theme,
            a = r.colors,
            s = r.spacing.baseUnit;
          return i(
            {
              label: "loadingIndicator",
              display: "flex",
              transition: "color 150ms",
              alignSelf: "center",
              fontSize: o,
              lineHeight: 1,
              marginRight: o,
              textAlign: "center",
              verticalAlign: "middle",
            },
            t ? {} : { color: n ? a.neutral60 : a.neutral20, padding: 2 * s },
          );
        },
        loadingMessage: Zt,
        menu: function (e, t) {
          var n,
            r = e.placement,
            a = e.theme,
            s = a.borderRadius,
            u = a.spacing,
            l = a.colors;
          return i(
            ((n = { label: "menu" }),
            (0, o.A)(
              n,
              (function (e) {
                return e ? { bottom: "top", top: "bottom" }[e] : "bottom";
              })(r),
              "100%",
            ),
            (0, o.A)(n, "position", "absolute"),
            (0, o.A)(n, "width", "100%"),
            (0, o.A)(n, "zIndex", 1),
            n),
            t
              ? {}
              : {
                  backgroundColor: l.neutral0,
                  borderRadius: s,
                  boxShadow:
                    "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
                  marginBottom: u.menuGutter,
                  marginTop: u.menuGutter,
                },
          );
        },
        menuList: function (e, t) {
          var n = e.maxHeight,
            o = e.theme.spacing.baseUnit;
          return i(
            {
              maxHeight: n,
              overflowY: "auto",
              position: "relative",
              WebkitOverflowScrolling: "touch",
            },
            t ? {} : { paddingBottom: o, paddingTop: o },
          );
        },
        menuPortal: function (e) {
          var t = e.rect,
            n = e.offset,
            o = e.position;
          return {
            left: t.left,
            position: o,
            top: n,
            width: t.width,
            zIndex: 1,
          };
        },
        multiValue: function (e, t) {
          var n = e.theme,
            o = n.spacing,
            r = n.borderRadius,
            a = n.colors;
          return i(
            { label: "multiValue", display: "flex", minWidth: 0 },
            t
              ? {}
              : {
                  backgroundColor: a.neutral10,
                  borderRadius: r / 2,
                  margin: o.baseUnit / 2,
                },
          );
        },
        multiValueLabel: function (e, t) {
          var n = e.theme,
            o = n.borderRadius,
            r = n.colors,
            a = e.cropWithEllipsis;
          return i(
            {
              overflow: "hidden",
              textOverflow: a || void 0 === a ? "ellipsis" : void 0,
              whiteSpace: "nowrap",
            },
            t
              ? {}
              : {
                  borderRadius: o / 2,
                  color: r.neutral80,
                  fontSize: "85%",
                  padding: 3,
                  paddingLeft: 6,
                },
          );
        },
        multiValueRemove: function (e, t) {
          var n = e.theme,
            o = n.spacing,
            r = n.borderRadius,
            a = n.colors,
            s = e.isFocused;
          return i(
            { alignItems: "center", display: "flex" },
            t
              ? {}
              : {
                  borderRadius: r / 2,
                  backgroundColor: s ? a.dangerLight : void 0,
                  paddingLeft: o.baseUnit,
                  paddingRight: o.baseUnit,
                  ":hover": { backgroundColor: a.dangerLight, color: a.danger },
                },
          );
        },
        noOptionsMessage: Kt,
        option: function (e, t) {
          var n = e.isDisabled,
            o = e.isFocused,
            r = e.isSelected,
            a = e.theme,
            s = a.spacing,
            u = a.colors;
          return i(
            {
              label: "option",
              cursor: "default",
              display: "block",
              fontSize: "inherit",
              width: "100%",
              userSelect: "none",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            },
            t
              ? {}
              : {
                  backgroundColor: r
                    ? u.primary
                    : o
                      ? u.primary25
                      : "transparent",
                  color: n ? u.neutral20 : r ? u.neutral0 : "inherit",
                  padding: ""
                    .concat(2 * s.baseUnit, "px ")
                    .concat(3 * s.baseUnit, "px"),
                  ":active": {
                    backgroundColor: n ? void 0 : r ? u.primary : u.primary50,
                  },
                },
          );
        },
        placeholder: function (e, t) {
          var n = e.theme,
            o = n.spacing,
            r = n.colors;
          return i(
            { label: "placeholder", gridArea: "1 / 1 / 2 / 3" },
            t
              ? {}
              : {
                  color: r.neutral50,
                  marginLeft: o.baseUnit / 2,
                  marginRight: o.baseUnit / 2,
                },
          );
        },
        singleValue: function (e, t) {
          var n = e.isDisabled,
            o = e.theme,
            r = o.spacing,
            a = o.colors;
          return i(
            {
              label: "singleValue",
              gridArea: "1 / 1 / 2 / 3",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
            t
              ? {}
              : {
                  color: n ? a.neutral40 : a.neutral80,
                  marginLeft: r.baseUnit / 2,
                  marginRight: r.baseUnit / 2,
                },
          );
        },
        valueContainer: function (e, t) {
          var n = e.theme.spacing,
            o = e.isMulti,
            r = e.hasValue,
            a = e.selectProps.controlShouldRenderValue;
          return i(
            {
              alignItems: "center",
              display: o && r && a ? "flex" : "grid",
              flex: 1,
              flexWrap: "wrap",
              WebkitOverflowScrolling: "touch",
              position: "relative",
              overflow: "hidden",
            },
            t
              ? {}
              : {
                  padding: ""
                    .concat(n.baseUnit / 2, "px ")
                    .concat(2 * n.baseUnit, "px"),
                },
          );
        },
      };
      var io,
        ao = {
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
        },
        so = {
          "aria-live": "polite",
          backspaceRemovesValue: !0,
          blurInputOnSelect: Lt(),
          captureMenuScroll: !Lt(),
          classNames: {},
          closeMenuOnSelect: !0,
          closeMenuOnScroll: !1,
          components: {},
          controlShouldRenderValue: !0,
          escapeClearsValue: !1,
          filterOption: function (e, t) {
            if (e.data.__isNew__) return !0;
            var n = i(
                {
                  ignoreCase: !0,
                  ignoreAccents: !0,
                  stringify: Hn,
                  trim: !0,
                  matchFrom: "any",
                },
                io,
              ),
              o = n.ignoreCase,
              r = n.ignoreAccents,
              a = n.stringify,
              s = n.trim,
              u = n.matchFrom,
              l = s ? Tn(t) : t,
              c = s ? Tn(a(e)) : a(e);
            return (
              o && ((l = l.toLowerCase()), (c = c.toLowerCase())),
              r && ((l = Fn(l)), (c = Ln(c))),
              "start" === u ? c.substr(0, l.length) === l : c.indexOf(l) > -1
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
          isOptionDisabled: function (e) {
            return !!e.isDisabled;
          },
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
          tabIndex: 0,
          tabSelectsValue: !0,
          unstyled: !1,
        };
      function uo(e, t, n, o) {
        return {
          type: "option",
          data: t,
          isDisabled: go(e, t, n),
          isSelected: bo(e, t, n),
          label: vo(e, t),
          value: mo(e, t),
          index: o,
        };
      }
      function lo(e, t) {
        return e.options
          .map(function (n, o) {
            if ("options" in n) {
              var r = n.options
                .map(function (n, o) {
                  return uo(e, n, t, o);
                })
                .filter(function (t) {
                  return fo(e, t);
                });
              return r.length > 0
                ? { type: "group", data: n, options: r, index: o }
                : void 0;
            }
            var i = uo(e, n, t, o);
            return fo(e, i) ? i : void 0;
          })
          .filter(Ut);
      }
      function co(e) {
        return e.reduce(function (e, t) {
          return (
            "group" === t.type
              ? e.push.apply(
                  e,
                  (0, b.A)(
                    t.options.map(function (e) {
                      return e.data;
                    }),
                  ),
                )
              : e.push(t.data),
            e
          );
        }, []);
      }
      function po(e, t) {
        return e.reduce(function (e, n) {
          return (
            "group" === n.type
              ? e.push.apply(
                  e,
                  (0, b.A)(
                    n.options.map(function (e) {
                      return {
                        data: e.data,
                        id: ""
                          .concat(t, "-")
                          .concat(n.index, "-")
                          .concat(e.index),
                      };
                    }),
                  ),
                )
              : e.push({ data: n.data, id: "".concat(t, "-").concat(n.index) }),
            e
          );
        }, []);
      }
      function fo(e, t) {
        var n = e.inputValue,
          o = void 0 === n ? "" : n,
          r = t.data,
          i = t.isSelected,
          a = t.label,
          s = t.value;
        return (!Oo(e) || !i) && yo(e, { label: a, value: s, data: r }, o);
      }
      var ho = function (e, t) {
          var n;
          return (
            (null ===
              (n = e.find(function (e) {
                return e.data === t;
              })) || void 0 === n
              ? void 0
              : n.id) || null
          );
        },
        vo = function (e, t) {
          return e.getOptionLabel(t);
        },
        mo = function (e, t) {
          return e.getOptionValue(t);
        };
      function go(e, t, n) {
        return (
          "function" == typeof e.isOptionDisabled && e.isOptionDisabled(t, n)
        );
      }
      function bo(e, t, n) {
        if (n.indexOf(t) > -1) return !0;
        if ("function" == typeof e.isOptionSelected)
          return e.isOptionSelected(t, n);
        var o = mo(e, t);
        return n.some(function (t) {
          return mo(e, t) === o;
        });
      }
      function yo(e, t, n) {
        return !e.filterOption || e.filterOption(t, n);
      }
      var Oo = function (e) {
          var t = e.hideSelectedOptions,
            n = e.isMulti;
          return void 0 === t ? n : t;
        },
        wo = 1,
        Co = (function (e) {
          (0, h.A)(r, e);
          var t,
            n,
            o =
              ((t = r),
              (n = m()),
              function () {
                var e,
                  o = (0, v.A)(t);
                if (n) {
                  var r = (0, v.A)(this).constructor;
                  e = Reflect.construct(o, arguments, r);
                } else e = o.apply(this, arguments);
                return (0, g.A)(this, e);
              });
          function r(e) {
            var t;
            if (
              ((0, p.A)(this, r),
              ((t = o.call(this, e)).state = {
                ariaSelection: null,
                focusedOption: null,
                focusedOptionId: null,
                focusableOptionsWithIds: [],
                focusedValue: null,
                inputIsHidden: !1,
                isFocused: !1,
                selectValue: [],
                clearFocusValueOnUpdate: !1,
                prevWasFocused: !1,
                inputIsHiddenAfterUpdate: void 0,
                prevProps: void 0,
                instancePrefix: "",
              }),
              (t.blockOptionHover = !1),
              (t.isComposing = !1),
              (t.commonProps = void 0),
              (t.initialTouchX = 0),
              (t.initialTouchY = 0),
              (t.openAfterFocus = !1),
              (t.scrollToFocusedOptionOnUpdate = !1),
              (t.userIsDragging = void 0),
              (t.isAppleDevice = no() || oo()),
              (t.controlRef = null),
              (t.getControlRef = function (e) {
                t.controlRef = e;
              }),
              (t.focusedOptionRef = null),
              (t.getFocusedOptionRef = function (e) {
                t.focusedOptionRef = e;
              }),
              (t.menuListRef = null),
              (t.getMenuListRef = function (e) {
                t.menuListRef = e;
              }),
              (t.inputRef = null),
              (t.getInputRef = function (e) {
                t.inputRef = e;
              }),
              (t.focus = t.focusInput),
              (t.blur = t.blurInput),
              (t.onChange = function (e, n) {
                var o = t.props,
                  r = o.onChange,
                  i = o.name;
                (n.name = i), t.ariaOnChange(e, n), r(e, n);
              }),
              (t.setValue = function (e, n, o) {
                var r = t.props,
                  i = r.closeMenuOnSelect,
                  a = r.isMulti,
                  s = r.inputValue;
                t.onInputChange("", { action: "set-value", prevInputValue: s }),
                  i &&
                    (t.setState({ inputIsHiddenAfterUpdate: !a }),
                    t.onMenuClose()),
                  t.setState({ clearFocusValueOnUpdate: !0 }),
                  t.onChange(e, { action: n, option: o });
              }),
              (t.selectOption = function (e) {
                var n = t.props,
                  o = n.blurInputOnSelect,
                  r = n.isMulti,
                  i = n.name,
                  a = t.state.selectValue,
                  s = r && t.isOptionSelected(e, a),
                  u = t.isOptionDisabled(e, a);
                if (s) {
                  var l = t.getOptionValue(e);
                  t.setValue(
                    a.filter(function (e) {
                      return t.getOptionValue(e) !== l;
                    }),
                    "deselect-option",
                    e,
                  );
                } else {
                  if (u)
                    return void t.ariaOnChange(e, {
                      action: "select-option",
                      option: e,
                      name: i,
                    });
                  r
                    ? t.setValue(
                        [].concat((0, b.A)(a), [e]),
                        "select-option",
                        e,
                      )
                    : t.setValue(e, "select-option");
                }
                o && t.blurInput();
              }),
              (t.removeValue = function (e) {
                var n = t.props.isMulti,
                  o = t.state.selectValue,
                  r = t.getOptionValue(e),
                  i = o.filter(function (e) {
                    return t.getOptionValue(e) !== r;
                  }),
                  a = zt(n, i, i[0] || null);
                t.onChange(a, { action: "remove-value", removedValue: e }),
                  t.focusInput();
              }),
              (t.clearValue = function () {
                var e = t.state.selectValue;
                t.onChange(zt(t.props.isMulti, [], null), {
                  action: "clear",
                  removedValues: e,
                });
              }),
              (t.popValue = function () {
                var e = t.props.isMulti,
                  n = t.state.selectValue,
                  o = n[n.length - 1],
                  r = n.slice(0, n.length - 1),
                  i = zt(e, r, r[0] || null);
                t.onChange(i, { action: "pop-value", removedValue: o });
              }),
              (t.getFocusedOptionId = function (e) {
                return ho(t.state.focusableOptionsWithIds, e);
              }),
              (t.getFocusableOptionsWithIds = function () {
                return po(
                  lo(t.props, t.state.selectValue),
                  t.getElementId("option"),
                );
              }),
              (t.getValue = function () {
                return t.state.selectValue;
              }),
              (t.cx = function () {
                for (
                  var e = arguments.length, n = new Array(e), o = 0;
                  o < e;
                  o++
                )
                  n[o] = arguments[o];
                return St.apply(void 0, [t.props.classNamePrefix].concat(n));
              }),
              (t.getOptionLabel = function (e) {
                return vo(t.props, e);
              }),
              (t.getOptionValue = function (e) {
                return mo(t.props, e);
              }),
              (t.getStyles = function (e, n) {
                var o = t.props.unstyled,
                  r = ro[e](n, o);
                r.boxSizing = "border-box";
                var i = t.props.styles[e];
                return i ? i(r, n) : r;
              }),
              (t.getClassNames = function (e, n) {
                var o, r;
                return null === (o = (r = t.props.classNames)[e]) ||
                  void 0 === o
                  ? void 0
                  : o.call(r, n);
              }),
              (t.getElementId = function (e) {
                return "".concat(t.state.instancePrefix, "-").concat(e);
              }),
              (t.getComponents = function () {
                return (e = t.props), i(i({}, wn), e.components);
                var e;
              }),
              (t.buildCategorizedOptions = function () {
                return lo(t.props, t.state.selectValue);
              }),
              (t.getCategorizedOptions = function () {
                return t.props.menuIsOpen ? t.buildCategorizedOptions() : [];
              }),
              (t.buildFocusableOptions = function () {
                return co(t.buildCategorizedOptions());
              }),
              (t.getFocusableOptions = function () {
                return t.props.menuIsOpen ? t.buildFocusableOptions() : [];
              }),
              (t.ariaOnChange = function (e, n) {
                t.setState({ ariaSelection: i({ value: e }, n) });
              }),
              (t.onMenuMouseDown = function (e) {
                0 === e.button &&
                  (e.stopPropagation(), e.preventDefault(), t.focusInput());
              }),
              (t.onMenuMouseMove = function (e) {
                t.blockOptionHover = !1;
              }),
              (t.onControlMouseDown = function (e) {
                if (!e.defaultPrevented) {
                  var n = t.props.openMenuOnClick;
                  t.state.isFocused
                    ? t.props.menuIsOpen
                      ? "INPUT" !== e.target.tagName &&
                        "TEXTAREA" !== e.target.tagName &&
                        t.onMenuClose()
                      : n && t.openMenu("first")
                    : (n && (t.openAfterFocus = !0), t.focusInput()),
                    "INPUT" !== e.target.tagName &&
                      "TEXTAREA" !== e.target.tagName &&
                      e.preventDefault();
                }
              }),
              (t.onDropdownIndicatorMouseDown = function (e) {
                if (
                  !(
                    (e && "mousedown" === e.type && 0 !== e.button) ||
                    t.props.isDisabled
                  )
                ) {
                  var n = t.props,
                    o = n.isMulti,
                    r = n.menuIsOpen;
                  t.focusInput(),
                    r
                      ? (t.setState({ inputIsHiddenAfterUpdate: !o }),
                        t.onMenuClose())
                      : t.openMenu("first"),
                    e.preventDefault();
                }
              }),
              (t.onClearIndicatorMouseDown = function (e) {
                (e && "mousedown" === e.type && 0 !== e.button) ||
                  (t.clearValue(),
                  e.preventDefault(),
                  (t.openAfterFocus = !1),
                  "touchend" === e.type
                    ? t.focusInput()
                    : setTimeout(function () {
                        return t.focusInput();
                      }));
              }),
              (t.onScroll = function (e) {
                "boolean" == typeof t.props.closeMenuOnScroll
                  ? e.target instanceof HTMLElement &&
                    Vt(e.target) &&
                    t.props.onMenuClose()
                  : "function" == typeof t.props.closeMenuOnScroll &&
                    t.props.closeMenuOnScroll(e) &&
                    t.props.onMenuClose();
              }),
              (t.onCompositionStart = function () {
                t.isComposing = !0;
              }),
              (t.onCompositionEnd = function () {
                t.isComposing = !1;
              }),
              (t.onTouchStart = function (e) {
                var n = e.touches,
                  o = n && n.item(0);
                o &&
                  ((t.initialTouchX = o.clientX),
                  (t.initialTouchY = o.clientY),
                  (t.userIsDragging = !1));
              }),
              (t.onTouchMove = function (e) {
                var n = e.touches,
                  o = n && n.item(0);
                if (o) {
                  var r = Math.abs(o.clientX - t.initialTouchX),
                    i = Math.abs(o.clientY - t.initialTouchY);
                  t.userIsDragging = r > 5 || i > 5;
                }
              }),
              (t.onTouchEnd = function (e) {
                t.userIsDragging ||
                  (t.controlRef &&
                    !t.controlRef.contains(e.target) &&
                    t.menuListRef &&
                    !t.menuListRef.contains(e.target) &&
                    t.blurInput(),
                  (t.initialTouchX = 0),
                  (t.initialTouchY = 0));
              }),
              (t.onControlTouchEnd = function (e) {
                t.userIsDragging || t.onControlMouseDown(e);
              }),
              (t.onClearIndicatorTouchEnd = function (e) {
                t.userIsDragging || t.onClearIndicatorMouseDown(e);
              }),
              (t.onDropdownIndicatorTouchEnd = function (e) {
                t.userIsDragging || t.onDropdownIndicatorMouseDown(e);
              }),
              (t.handleInputChange = function (e) {
                var n = t.props.inputValue,
                  o = e.currentTarget.value;
                t.setState({ inputIsHiddenAfterUpdate: !1 }),
                  t.onInputChange(o, {
                    action: "input-change",
                    prevInputValue: n,
                  }),
                  t.props.menuIsOpen || t.onMenuOpen();
              }),
              (t.onInputFocus = function (e) {
                t.props.onFocus && t.props.onFocus(e),
                  t.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
                  (t.openAfterFocus || t.props.openMenuOnFocus) &&
                    t.openMenu("first"),
                  (t.openAfterFocus = !1);
              }),
              (t.onInputBlur = function (e) {
                var n = t.props.inputValue;
                t.menuListRef && t.menuListRef.contains(document.activeElement)
                  ? t.inputRef.focus()
                  : (t.props.onBlur && t.props.onBlur(e),
                    t.onInputChange("", {
                      action: "input-blur",
                      prevInputValue: n,
                    }),
                    t.onMenuClose(),
                    t.setState({ focusedValue: null, isFocused: !1 }));
              }),
              (t.onOptionHover = function (e) {
                if (!t.blockOptionHover && t.state.focusedOption !== e) {
                  var n = t.getFocusableOptions().indexOf(e);
                  t.setState({
                    focusedOption: e,
                    focusedOptionId: n > -1 ? t.getFocusedOptionId(e) : null,
                  });
                }
              }),
              (t.shouldHideSelectedOptions = function () {
                return Oo(t.props);
              }),
              (t.onValueInputFocus = function (e) {
                e.preventDefault(), e.stopPropagation(), t.focus();
              }),
              (t.onKeyDown = function (e) {
                var n = t.props,
                  o = n.isMulti,
                  r = n.backspaceRemovesValue,
                  i = n.escapeClearsValue,
                  a = n.inputValue,
                  s = n.isClearable,
                  u = n.isDisabled,
                  l = n.menuIsOpen,
                  c = n.onKeyDown,
                  d = n.tabSelectsValue,
                  p = n.openMenuOnFocus,
                  f = t.state,
                  h = f.focusedOption,
                  v = f.focusedValue,
                  m = f.selectValue;
                if (
                  !(u || ("function" == typeof c && (c(e), e.defaultPrevented)))
                ) {
                  switch (((t.blockOptionHover = !0), e.key)) {
                    case "ArrowLeft":
                      if (!o || a) return;
                      t.focusValue("previous");
                      break;
                    case "ArrowRight":
                      if (!o || a) return;
                      t.focusValue("next");
                      break;
                    case "Delete":
                    case "Backspace":
                      if (a) return;
                      if (v) t.removeValue(v);
                      else {
                        if (!r) return;
                        o ? t.popValue() : s && t.clearValue();
                      }
                      break;
                    case "Tab":
                      if (t.isComposing) return;
                      if (
                        e.shiftKey ||
                        !l ||
                        !d ||
                        !h ||
                        (p && t.isOptionSelected(h, m))
                      )
                        return;
                      t.selectOption(h);
                      break;
                    case "Enter":
                      if (229 === e.keyCode) break;
                      if (l) {
                        if (!h) return;
                        if (t.isComposing) return;
                        t.selectOption(h);
                        break;
                      }
                      return;
                    case "Escape":
                      l
                        ? (t.setState({ inputIsHiddenAfterUpdate: !1 }),
                          t.onInputChange("", {
                            action: "menu-close",
                            prevInputValue: a,
                          }),
                          t.onMenuClose())
                        : s && i && t.clearValue();
                      break;
                    case " ":
                      if (a) return;
                      if (!l) {
                        t.openMenu("first");
                        break;
                      }
                      if (!h) return;
                      t.selectOption(h);
                      break;
                    case "ArrowUp":
                      l ? t.focusOption("up") : t.openMenu("last");
                      break;
                    case "ArrowDown":
                      l ? t.focusOption("down") : t.openMenu("first");
                      break;
                    case "PageUp":
                      if (!l) return;
                      t.focusOption("pageup");
                      break;
                    case "PageDown":
                      if (!l) return;
                      t.focusOption("pagedown");
                      break;
                    case "Home":
                      if (!l) return;
                      t.focusOption("first");
                      break;
                    case "End":
                      if (!l) return;
                      t.focusOption("last");
                      break;
                    default:
                      return;
                  }
                  e.preventDefault();
                }
              }),
              (t.state.instancePrefix =
                "react-select-" + (t.props.instanceId || ++wo)),
              (t.state.selectValue = At(e.value)),
              e.menuIsOpen && t.state.selectValue.length)
            ) {
              var n = t.getFocusableOptionsWithIds(),
                a = t.buildFocusableOptions(),
                s = a.indexOf(t.state.selectValue[0]);
              (t.state.focusableOptionsWithIds = n),
                (t.state.focusedOption = a[s]),
                (t.state.focusedOptionId = ho(n, a[s]));
            }
            return t;
          }
          return (
            (0, f.A)(
              r,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.startListeningComposition(),
                      this.startListeningToTouch(),
                      this.props.closeMenuOnScroll &&
                        document &&
                        document.addEventListener &&
                        document.addEventListener("scroll", this.onScroll, !0),
                      this.props.autoFocus && this.focusInput(),
                      this.props.menuIsOpen &&
                        this.state.focusedOption &&
                        this.menuListRef &&
                        this.focusedOptionRef &&
                        Dt(this.menuListRef, this.focusedOptionRef);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    var t = this.props,
                      n = t.isDisabled,
                      o = t.menuIsOpen,
                      r = this.state.isFocused;
                    ((r && !n && e.isDisabled) || (r && o && !e.menuIsOpen)) &&
                      this.focusInput(),
                      r && n && !e.isDisabled
                        ? this.setState({ isFocused: !1 }, this.onMenuClose)
                        : r ||
                          n ||
                          !e.isDisabled ||
                          this.inputRef !== document.activeElement ||
                          this.setState({ isFocused: !0 }),
                      this.menuListRef &&
                        this.focusedOptionRef &&
                        this.scrollToFocusedOptionOnUpdate &&
                        (Dt(this.menuListRef, this.focusedOptionRef),
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
                    this.onInputChange("", {
                      action: "menu-close",
                      prevInputValue: this.props.inputValue,
                    }),
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
                      n = this.state,
                      o = n.selectValue,
                      r = n.isFocused,
                      i = this.buildFocusableOptions(),
                      a = "first" === e ? 0 : i.length - 1;
                    if (!this.props.isMulti) {
                      var s = i.indexOf(o[0]);
                      s > -1 && (a = s);
                    }
                    (this.scrollToFocusedOptionOnUpdate = !(
                      r && this.menuListRef
                    )),
                      this.setState(
                        {
                          inputIsHiddenAfterUpdate: !1,
                          focusedValue: null,
                          focusedOption: i[a],
                          focusedOptionId: this.getFocusedOptionId(i[a]),
                        },
                        function () {
                          return t.onMenuOpen();
                        },
                      );
                  },
                },
                {
                  key: "focusValue",
                  value: function (e) {
                    var t = this.state,
                      n = t.selectValue,
                      o = t.focusedValue;
                    if (this.props.isMulti) {
                      this.setState({ focusedOption: null });
                      var r = n.indexOf(o);
                      o || (r = -1);
                      var i = n.length - 1,
                        a = -1;
                      if (n.length) {
                        switch (e) {
                          case "previous":
                            a = 0 === r ? 0 : -1 === r ? i : r - 1;
                            break;
                          case "next":
                            r > -1 && r < i && (a = r + 1);
                        }
                        this.setState({
                          inputIsHidden: -1 !== a,
                          focusedValue: n[a],
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
                      t = this.props.pageSize,
                      n = this.state.focusedOption,
                      o = this.getFocusableOptions();
                    if (o.length) {
                      var r = 0,
                        i = o.indexOf(n);
                      n || (i = -1),
                        "up" === e
                          ? (r = i > 0 ? i - 1 : o.length - 1)
                          : "down" === e
                            ? (r = (i + 1) % o.length)
                            : "pageup" === e
                              ? (r = i - t) < 0 && (r = 0)
                              : "pagedown" === e
                                ? (r = i + t) > o.length - 1 &&
                                  (r = o.length - 1)
                                : "last" === e && (r = o.length - 1),
                        (this.scrollToFocusedOptionOnUpdate = !0),
                        this.setState({
                          focusedOption: o[r],
                          focusedValue: null,
                          focusedOptionId: this.getFocusedOptionId(o[r]),
                        });
                    }
                  },
                },
                {
                  key: "getTheme",
                  value: function () {
                    return this.props.theme
                      ? "function" == typeof this.props.theme
                        ? this.props.theme(ao)
                        : i(i({}, ao), this.props.theme)
                      : ao;
                  },
                },
                {
                  key: "getCommonProps",
                  value: function () {
                    var e = this.clearValue,
                      t = this.cx,
                      n = this.getStyles,
                      o = this.getClassNames,
                      r = this.getValue,
                      i = this.selectOption,
                      a = this.setValue,
                      s = this.props,
                      u = s.isMulti,
                      l = s.isRtl,
                      c = s.options;
                    return {
                      clearValue: e,
                      cx: t,
                      getStyles: n,
                      getClassNames: o,
                      getValue: r,
                      hasValue: this.hasValue(),
                      isMulti: u,
                      isRtl: l,
                      options: c,
                      selectOption: i,
                      selectProps: s,
                      setValue: a,
                      theme: this.getTheme(),
                    };
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
                    return !!this.getFocusableOptions().length;
                  },
                },
                {
                  key: "isClearable",
                  value: function () {
                    var e = this.props,
                      t = e.isClearable,
                      n = e.isMulti;
                    return void 0 === t ? n : t;
                  },
                },
                {
                  key: "isOptionDisabled",
                  value: function (e, t) {
                    return go(this.props, e, t);
                  },
                },
                {
                  key: "isOptionSelected",
                  value: function (e, t) {
                    return bo(this.props, e, t);
                  },
                },
                {
                  key: "filterOption",
                  value: function (e, t) {
                    return yo(this.props, e, t);
                  },
                },
                {
                  key: "formatOptionLabel",
                  value: function (e, t) {
                    if ("function" == typeof this.props.formatOptionLabel) {
                      var n = this.props.inputValue,
                        o = this.state.selectValue;
                      return this.props.formatOptionLabel(e, {
                        context: t,
                        inputValue: n,
                        selectValue: o,
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
                      document.addEventListener(
                        "touchend",
                        this.onTouchEnd,
                        !1,
                      ));
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
                      document.removeEventListener(
                        "touchmove",
                        this.onTouchMove,
                      ),
                      document.removeEventListener(
                        "touchend",
                        this.onTouchEnd,
                      ));
                  },
                },
                {
                  key: "renderInput",
                  value: function () {
                    var e = this.props,
                      t = e.isDisabled,
                      n = e.isSearchable,
                      o = e.inputId,
                      r = e.inputValue,
                      a = e.tabIndex,
                      s = e.form,
                      l = e.menuIsOpen,
                      c = e.required,
                      p = this.getComponents().Input,
                      f = this.state,
                      h = f.inputIsHidden,
                      v = f.ariaSelection,
                      m = this.commonProps,
                      g = o || this.getElementId("input"),
                      b = i(
                        i(
                          i(
                            {
                              "aria-autocomplete": "list",
                              "aria-expanded": l,
                              "aria-haspopup": !0,
                              "aria-errormessage":
                                this.props["aria-errormessage"],
                              "aria-invalid": this.props["aria-invalid"],
                              "aria-label": this.props["aria-label"],
                              "aria-labelledby": this.props["aria-labelledby"],
                              "aria-required": c,
                              role: "combobox",
                              "aria-activedescendant": this.isAppleDevice
                                ? void 0
                                : this.state.focusedOptionId || "",
                            },
                            l && {
                              "aria-controls": this.getElementId("listbox"),
                            },
                          ),
                          !n && { "aria-readonly": !0 },
                        ),
                        this.hasValue()
                          ? "initial-input-focus" ===
                              (null == v ? void 0 : v.action) && {
                              "aria-describedby":
                                this.getElementId("live-region"),
                            }
                          : {
                              "aria-describedby":
                                this.getElementId("placeholder"),
                            },
                      );
                    return n
                      ? u.createElement(
                          p,
                          (0, d.A)(
                            {},
                            m,
                            {
                              autoCapitalize: "none",
                              autoComplete: "off",
                              autoCorrect: "off",
                              id: g,
                              innerRef: this.getInputRef,
                              isDisabled: t,
                              isHidden: h,
                              onBlur: this.onInputBlur,
                              onChange: this.handleInputChange,
                              onFocus: this.onInputFocus,
                              spellCheck: "false",
                              tabIndex: a,
                              form: s,
                              type: "text",
                              value: r,
                            },
                            b,
                          ),
                        )
                      : u.createElement(
                          Un,
                          (0, d.A)(
                            {
                              id: g,
                              innerRef: this.getInputRef,
                              onBlur: this.onInputBlur,
                              onChange: xt,
                              onFocus: this.onInputFocus,
                              disabled: t,
                              tabIndex: a,
                              inputMode: "none",
                              form: s,
                              value: "",
                            },
                            b,
                          ),
                        );
                  },
                },
                {
                  key: "renderPlaceholderOrValue",
                  value: function () {
                    var e = this,
                      t = this.getComponents(),
                      n = t.MultiValue,
                      o = t.MultiValueContainer,
                      r = t.MultiValueLabel,
                      i = t.MultiValueRemove,
                      a = t.SingleValue,
                      s = t.Placeholder,
                      l = this.commonProps,
                      c = this.props,
                      p = c.controlShouldRenderValue,
                      f = c.isDisabled,
                      h = c.isMulti,
                      v = c.inputValue,
                      m = c.placeholder,
                      g = this.state,
                      b = g.selectValue,
                      y = g.focusedValue,
                      O = g.isFocused;
                    if (!this.hasValue() || !p)
                      return v
                        ? null
                        : u.createElement(
                            s,
                            (0, d.A)({}, l, {
                              key: "placeholder",
                              isDisabled: f,
                              isFocused: O,
                              innerProps: {
                                id: this.getElementId("placeholder"),
                              },
                            }),
                            m,
                          );
                    if (h)
                      return b.map(function (t, a) {
                        var s = t === y,
                          c = ""
                            .concat(e.getOptionLabel(t), "-")
                            .concat(e.getOptionValue(t));
                        return u.createElement(
                          n,
                          (0, d.A)({}, l, {
                            components: { Container: o, Label: r, Remove: i },
                            isFocused: s,
                            isDisabled: f,
                            key: c,
                            index: a,
                            removeProps: {
                              onClick: function () {
                                return e.removeValue(t);
                              },
                              onTouchEnd: function () {
                                return e.removeValue(t);
                              },
                              onMouseDown: function (e) {
                                e.preventDefault();
                              },
                            },
                            data: t,
                          }),
                          e.formatOptionLabel(t, "value"),
                        );
                      });
                    if (v) return null;
                    var w = b[0];
                    return u.createElement(
                      a,
                      (0, d.A)({}, l, { data: w, isDisabled: f }),
                      this.formatOptionLabel(w, "value"),
                    );
                  },
                },
                {
                  key: "renderClearIndicator",
                  value: function () {
                    var e = this.getComponents().ClearIndicator,
                      t = this.commonProps,
                      n = this.props,
                      o = n.isDisabled,
                      r = n.isLoading,
                      i = this.state.isFocused;
                    if (!this.isClearable() || !e || o || !this.hasValue() || r)
                      return null;
                    var a = {
                      onMouseDown: this.onClearIndicatorMouseDown,
                      onTouchEnd: this.onClearIndicatorTouchEnd,
                      "aria-hidden": "true",
                    };
                    return u.createElement(
                      e,
                      (0, d.A)({}, t, { innerProps: a, isFocused: i }),
                    );
                  },
                },
                {
                  key: "renderLoadingIndicator",
                  value: function () {
                    var e = this.getComponents().LoadingIndicator,
                      t = this.commonProps,
                      n = this.props,
                      o = n.isDisabled,
                      r = n.isLoading,
                      i = this.state.isFocused;
                    if (!e || !r) return null;
                    return u.createElement(
                      e,
                      (0, d.A)({}, t, {
                        innerProps: { "aria-hidden": "true" },
                        isDisabled: o,
                        isFocused: i,
                      }),
                    );
                  },
                },
                {
                  key: "renderIndicatorSeparator",
                  value: function () {
                    var e = this.getComponents(),
                      t = e.DropdownIndicator,
                      n = e.IndicatorSeparator;
                    if (!t || !n) return null;
                    var o = this.commonProps,
                      r = this.props.isDisabled,
                      i = this.state.isFocused;
                    return u.createElement(
                      n,
                      (0, d.A)({}, o, { isDisabled: r, isFocused: i }),
                    );
                  },
                },
                {
                  key: "renderDropdownIndicator",
                  value: function () {
                    var e = this.getComponents().DropdownIndicator;
                    if (!e) return null;
                    var t = this.commonProps,
                      n = this.props.isDisabled,
                      o = this.state.isFocused,
                      r = {
                        onMouseDown: this.onDropdownIndicatorMouseDown,
                        onTouchEnd: this.onDropdownIndicatorTouchEnd,
                        "aria-hidden": "true",
                      };
                    return u.createElement(
                      e,
                      (0, d.A)({}, t, {
                        innerProps: r,
                        isDisabled: n,
                        isFocused: o,
                      }),
                    );
                  },
                },
                {
                  key: "renderMenu",
                  value: function () {
                    var e = this,
                      t = this.getComponents(),
                      n = t.Group,
                      o = t.GroupHeading,
                      r = t.Menu,
                      i = t.MenuList,
                      a = t.MenuPortal,
                      s = t.LoadingMessage,
                      l = t.NoOptionsMessage,
                      c = t.Option,
                      p = this.commonProps,
                      f = this.state.focusedOption,
                      h = this.props,
                      v = h.captureMenuScroll,
                      m = h.inputValue,
                      g = h.isLoading,
                      b = h.loadingMessage,
                      y = h.minMenuHeight,
                      O = h.maxMenuHeight,
                      w = h.menuIsOpen,
                      C = h.menuPlacement,
                      x = h.menuPosition,
                      I = h.menuPortalTarget,
                      S = h.menuShouldBlockScroll,
                      A = h.menuShouldScrollIntoView,
                      E = h.noOptionsMessage,
                      M = h.onMenuScrollToTop,
                      V = h.onMenuScrollToBottom;
                    if (!w) return null;
                    var k,
                      P = function (t, n) {
                        var o = t.type,
                          r = t.data,
                          i = t.isDisabled,
                          a = t.isSelected,
                          s = t.label,
                          l = t.value,
                          h = f === r,
                          v = i
                            ? void 0
                            : function () {
                                return e.onOptionHover(r);
                              },
                          m = i
                            ? void 0
                            : function () {
                                return e.selectOption(r);
                              },
                          g = ""
                            .concat(e.getElementId("option"), "-")
                            .concat(n),
                          b = {
                            id: g,
                            onClick: m,
                            onMouseMove: v,
                            onMouseOver: v,
                            tabIndex: -1,
                            role: "option",
                            "aria-selected": e.isAppleDevice ? void 0 : a,
                          };
                        return u.createElement(
                          c,
                          (0, d.A)({}, p, {
                            innerProps: b,
                            data: r,
                            isDisabled: i,
                            isSelected: a,
                            key: g,
                            label: s,
                            type: o,
                            value: l,
                            isFocused: h,
                            innerRef: h ? e.getFocusedOptionRef : void 0,
                          }),
                          e.formatOptionLabel(t.data, "menu"),
                        );
                      };
                    if (this.hasOptions())
                      k = this.getCategorizedOptions().map(function (t) {
                        if ("group" === t.type) {
                          var r = t.data,
                            i = t.options,
                            a = t.index,
                            s = ""
                              .concat(e.getElementId("group"), "-")
                              .concat(a),
                            l = "".concat(s, "-heading");
                          return u.createElement(
                            n,
                            (0, d.A)({}, p, {
                              key: s,
                              data: r,
                              options: i,
                              Heading: o,
                              headingProps: { id: l, data: t.data },
                              label: e.formatGroupLabel(t.data),
                            }),
                            t.options.map(function (e) {
                              return P(e, "".concat(a, "-").concat(e.index));
                            }),
                          );
                        }
                        if ("option" === t.type)
                          return P(t, "".concat(t.index));
                      });
                    else if (g) {
                      var R = b({ inputValue: m });
                      if (null === R) return null;
                      k = u.createElement(s, p, R);
                    } else {
                      var D = E({ inputValue: m });
                      if (null === D) return null;
                      k = u.createElement(l, p, D);
                    }
                    var L = {
                        minMenuHeight: y,
                        maxMenuHeight: O,
                        menuPlacement: C,
                        menuPosition: x,
                        menuShouldScrollIntoView: A,
                      },
                      F = u.createElement(Yt, (0, d.A)({}, p, L), function (t) {
                        var n = t.ref,
                          o = t.placerProps,
                          a = o.placement,
                          s = o.maxHeight;
                        return u.createElement(
                          r,
                          (0, d.A)({}, p, L, {
                            innerRef: n,
                            innerProps: {
                              onMouseDown: e.onMenuMouseDown,
                              onMouseMove: e.onMenuMouseMove,
                            },
                            isLoading: g,
                            placement: a,
                          }),
                          u.createElement(
                            Jn,
                            {
                              captureEnabled: v,
                              onTopArrive: M,
                              onBottomArrive: V,
                              lockEnabled: S,
                            },
                            function (t) {
                              return u.createElement(
                                i,
                                (0, d.A)({}, p, {
                                  innerRef: function (n) {
                                    e.getMenuListRef(n), t(n);
                                  },
                                  innerProps: {
                                    role: "listbox",
                                    "aria-multiselectable": p.isMulti,
                                    id: e.getElementId("listbox"),
                                  },
                                  isLoading: g,
                                  maxHeight: s,
                                  focusedOption: f,
                                }),
                                k,
                              );
                            },
                          ),
                        );
                      });
                    return I || "fixed" === x
                      ? u.createElement(
                          a,
                          (0, d.A)({}, p, {
                            appendTo: I,
                            controlElement: this.controlRef,
                            menuPlacement: C,
                            menuPosition: x,
                          }),
                          F,
                        )
                      : F;
                  },
                },
                {
                  key: "renderFormField",
                  value: function () {
                    var e = this,
                      t = this.props,
                      n = t.delimiter,
                      o = t.isDisabled,
                      r = t.isMulti,
                      i = t.name,
                      a = t.required,
                      s = this.state.selectValue;
                    if (a && !this.hasValue() && !o)
                      return u.createElement(eo, {
                        name: i,
                        onFocus: this.onValueInputFocus,
                      });
                    if (i && !o) {
                      if (r) {
                        if (n) {
                          var l = s
                            .map(function (t) {
                              return e.getOptionValue(t);
                            })
                            .join(n);
                          return u.createElement("input", {
                            name: i,
                            type: "hidden",
                            value: l,
                          });
                        }
                        var c =
                          s.length > 0
                            ? s.map(function (t, n) {
                                return u.createElement("input", {
                                  key: "i-".concat(n),
                                  name: i,
                                  type: "hidden",
                                  value: e.getOptionValue(t),
                                });
                              })
                            : u.createElement("input", {
                                name: i,
                                type: "hidden",
                                value: "",
                              });
                        return u.createElement("div", null, c);
                      }
                      var d = s[0] ? this.getOptionValue(s[0]) : "";
                      return u.createElement("input", {
                        name: i,
                        type: "hidden",
                        value: d,
                      });
                    }
                  },
                },
                {
                  key: "renderLiveRegion",
                  value: function () {
                    var e = this.commonProps,
                      t = this.state,
                      n = t.ariaSelection,
                      o = t.focusedOption,
                      r = t.focusedValue,
                      i = t.isFocused,
                      a = t.selectValue,
                      s = this.getFocusableOptions();
                    return u.createElement(
                      En,
                      (0, d.A)({}, e, {
                        id: this.getElementId("live-region"),
                        ariaSelection: n,
                        focusedOption: o,
                        focusedValue: r,
                        isFocused: i,
                        selectValue: a,
                        focusableOptions: s,
                        isAppleDevice: this.isAppleDevice,
                      }),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.getComponents(),
                      t = e.Control,
                      n = e.IndicatorsContainer,
                      o = e.SelectContainer,
                      r = e.ValueContainer,
                      i = this.props,
                      a = i.className,
                      s = i.id,
                      l = i.isDisabled,
                      c = i.menuIsOpen,
                      p = this.state.isFocused,
                      f = (this.commonProps = this.getCommonProps());
                    return u.createElement(
                      o,
                      (0, d.A)({}, f, {
                        className: a,
                        innerProps: { id: s, onKeyDown: this.onKeyDown },
                        isDisabled: l,
                        isFocused: p,
                      }),
                      this.renderLiveRegion(),
                      u.createElement(
                        t,
                        (0, d.A)({}, f, {
                          innerRef: this.getControlRef,
                          innerProps: {
                            onMouseDown: this.onControlMouseDown,
                            onTouchEnd: this.onControlTouchEnd,
                          },
                          isDisabled: l,
                          isFocused: p,
                          menuIsOpen: c,
                        }),
                        u.createElement(
                          r,
                          (0, d.A)({}, f, { isDisabled: l }),
                          this.renderPlaceholderOrValue(),
                          this.renderInput(),
                        ),
                        u.createElement(
                          n,
                          (0, d.A)({}, f, { isDisabled: l }),
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
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    var n = t.prevProps,
                      o = t.clearFocusValueOnUpdate,
                      r = t.inputIsHiddenAfterUpdate,
                      a = t.ariaSelection,
                      s = t.isFocused,
                      u = t.prevWasFocused,
                      l = t.instancePrefix,
                      c = e.options,
                      d = e.value,
                      p = e.menuIsOpen,
                      f = e.inputValue,
                      h = e.isMulti,
                      v = At(d),
                      m = {};
                    if (
                      n &&
                      (d !== n.value ||
                        c !== n.options ||
                        p !== n.menuIsOpen ||
                        f !== n.inputValue)
                    ) {
                      var g = p
                          ? (function (e, t) {
                              return co(lo(e, t));
                            })(e, v)
                          : [],
                        b = p ? po(lo(e, v), "".concat(l, "-option")) : [],
                        y = o
                          ? (function (e, t) {
                              var n = e.focusedValue,
                                o = e.selectValue.indexOf(n);
                              if (o > -1) {
                                if (t.indexOf(n) > -1) return n;
                                if (o < t.length) return t[o];
                              }
                              return null;
                            })(t, v)
                          : null,
                        O = (function (e, t) {
                          var n = e.focusedOption;
                          return n && t.indexOf(n) > -1 ? n : t[0];
                        })(t, g);
                      m = {
                        selectValue: v,
                        focusedOption: O,
                        focusedOptionId: ho(b, O),
                        focusableOptionsWithIds: b,
                        focusedValue: y,
                        clearFocusValueOnUpdate: !1,
                      };
                    }
                    var w =
                        null != r && e !== n
                          ? {
                              inputIsHidden: r,
                              inputIsHiddenAfterUpdate: void 0,
                            }
                          : {},
                      C = a,
                      x = s && u;
                    return (
                      s &&
                        !x &&
                        ((C = {
                          value: zt(h, v, v[0] || null),
                          options: v,
                          action: "initial-input-focus",
                        }),
                        (x = !u)),
                      "initial-input-focus" ===
                        (null == a ? void 0 : a.action) && (C = null),
                      i(
                        i(i({}, m), w),
                        {},
                        { prevProps: e, ariaSelection: C, prevWasFocused: x },
                      )
                    );
                  },
                },
              ],
            ),
            r
          );
        })(u.Component);
      Co.defaultProps = so;
      var xo = (0, u.forwardRef)(function (e, t) {
          var n = (function (e) {
            var t = e.defaultInputValue,
              n = void 0 === t ? "" : t,
              o = e.defaultMenuIsOpen,
              r = void 0 !== o && o,
              l = e.defaultValue,
              d = void 0 === l ? null : l,
              p = e.inputValue,
              f = e.menuIsOpen,
              h = e.onChange,
              v = e.onInputChange,
              m = e.onMenuClose,
              g = e.onMenuOpen,
              b = e.value,
              y = (0, s.A)(e, c),
              O = (0, u.useState)(void 0 !== p ? p : n),
              w = (0, a.A)(O, 2),
              C = w[0],
              x = w[1],
              I = (0, u.useState)(void 0 !== f ? f : r),
              S = (0, a.A)(I, 2),
              A = S[0],
              E = S[1],
              M = (0, u.useState)(void 0 !== b ? b : d),
              V = (0, a.A)(M, 2),
              k = V[0],
              P = V[1],
              R = (0, u.useCallback)(
                function (e, t) {
                  "function" == typeof h && h(e, t), P(e);
                },
                [h],
              ),
              D = (0, u.useCallback)(
                function (e, t) {
                  var n;
                  "function" == typeof v && (n = v(e, t)),
                    x(void 0 !== n ? n : e);
                },
                [v],
              ),
              L = (0, u.useCallback)(
                function () {
                  "function" == typeof g && g(), E(!0);
                },
                [g],
              ),
              F = (0, u.useCallback)(
                function () {
                  "function" == typeof m && m(), E(!1);
                },
                [m],
              ),
              T = void 0 !== p ? p : C,
              H = void 0 !== f ? f : A,
              N = void 0 !== b ? b : k;
            return i(
              i({}, y),
              {},
              {
                inputValue: T,
                menuIsOpen: H,
                onChange: R,
                onInputChange: D,
                onMenuClose: F,
                onMenuOpen: L,
                value: N,
              },
            );
          })(e);
          return u.createElement(Co, (0, d.A)({ ref: t }, n));
        }),
        Io = xo;
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7099],
  {
    77166: (e) => {
      e.exports = function (e, t, r, n, i, a, o, s) {
        if (!e) {
          var l;
          if (void 0 === t)
            l = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
          else {
            var c = [r, n, i, a, o, s],
              u = 0;
            (l = new Error(
              t.replace(/%s/g, function () {
                return c[u++];
              }),
            )).name = "Invariant Violation";
          }
          throw ((l.framesToPop = 1), l);
        }
      };
    },
    43489: (e, t, r) => {
      r.d(t, { f: () => Eo, kO: () => ji, Zt: () => Do });
      var n = r(17692),
        i = r(71972),
        a = r(74289),
        o = r(2652),
        s = r.n(o),
        l = r(89526),
        c = r(77166),
        u = r.n(c),
        d = function () {};
      function f(e, t) {
        return void 0 !== e[t];
      }
      function m(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function p() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state,
        );
        null != e && this.setState(e);
      }
      function y(e) {
        this.setState(
          function (t) {
            var r = this.constructor.getDerivedStateFromProps(e, t);
            return null != r ? r : null;
          }.bind(this),
        );
      }
      function h(e, t) {
        try {
          var r = this.props,
            n = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(r, n));
        } finally {
          (this.props = r), (this.state = n);
        }
      }
      (p.__suppressDeprecationWarning = !0),
        (y.__suppressDeprecationWarning = !0),
        (h.__suppressDeprecationWarning = !0);
      function v(e) {
        var t,
          r,
          n = "";
        if ("string" == typeof e || "number" == typeof e) n += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (r = v(e[t])) && (n && (n += " "), (n += r));
          else for (t in e) e[t] && (n && (n += " "), (n += t));
        return n;
      }
      const g = function () {
        for (var e, t, r = 0, n = ""; r < arguments.length; )
          (e = arguments[r++]) && (t = v(e)) && (n && (n += " "), (n += t));
        return n;
      };
      var b = "milliseconds",
        w = "seconds",
        B = "minutes",
        _ = "hours",
        S = "day",
        M = "week",
        z = "month",
        E = "year",
        R = "decade",
        O = "century",
        F = {
          milliseconds: 1,
          seconds: 1e3,
          minutes: 6e4,
          hours: 36e5,
          day: 864e5,
          week: 6048e5,
        },
        D = { month: 1, year: 12, decade: 120, century: 1200 };
      function T(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 29 : 28;
      }
      function x(e, t, r) {
        switch (((e = new Date(e)), r)) {
          case b:
          case w:
          case B:
          case _:
          case S:
          case M:
            return (function (e, t) {
              var r = new Date(+e + t);
              return (function (e, t) {
                var r = e.getTimezoneOffset(),
                  n = t.getTimezoneOffset();
                return new Date(+t + (n - r) * F.minutes);
              })(e, r);
            })(e, t * F[r]);
          case z:
          case E:
          case R:
          case O:
            return (function (e, t) {
              var r = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                a = 12 * r + n + t,
                o = Math.trunc(a / 12),
                s = a % 12,
                l = Math.min(
                  i,
                  (function (e) {
                    return [31, T(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                  })(o)[s],
                ),
                c = new Date(e);
              return (
                c.setFullYear(o), c.setDate(1), c.setMonth(s), c.setDate(l), c
              );
            })(e, t * D[r]);
        }
        throw new TypeError('Invalid units: "' + r + '"');
      }
      function j(e, t, r) {
        return x(e, -t, r);
      }
      function W(e, t, r) {
        switch (((e = new Date(e)), t)) {
          case O:
          case R:
          case E:
            e = $(e, 0);
          case z:
            e = Y(e, 1);
          case M:
          case S:
            e = V(e, 0);
          case _:
            e = G(e, 0);
          case B:
            e = q(e, 0);
          case w:
            e = H(e, 0);
        }
        return (
          t === R && (e = j(e, J(e) % 10, "year")),
          t === O && (e = j(e, J(e) % 100, "year")),
          t === M &&
            (e = (function (e, t, r) {
              var n = (K(e) + 7 - (r || 0)) % 7;
              return void 0 === t ? n : x(e, t - n, S);
            })(e, 0, r)),
          e
        );
      }
      function P(e, t, r) {
        switch (((e = W((e = new Date(e)), t, r)), t)) {
          case O:
          case R:
          case E:
          case z:
          case M:
            (e = j((e = x(e, 1, t)), 1, S)).setHours(23, 59, 59, 999);
            break;
          case S:
            e.setHours(23, 59, 59, 999);
            break;
          case _:
          case B:
          case w:
            e = j((e = x(e, 1, t)), 1, b);
        }
        return e;
      }
      var A = ee(function (e, t) {
          return e === t;
        }),
        k = ee(function (e, t) {
          return e !== t;
        }),
        I = ee(function (e, t) {
          return e > t;
        }),
        C = ee(function (e, t) {
          return e >= t;
        }),
        N = ee(function (e, t) {
          return e < t;
        }),
        U = ee(function (e, t) {
          return e <= t;
        });
      function Z() {
        return new Date(Math.min.apply(Math, arguments));
      }
      function L() {
        return new Date(Math.max.apply(Math, arguments));
      }
      function X(e, t, r, n) {
        return (n = n || "day"), (!t || C(e, t, n)) && (!r || U(e, r, n));
      }
      var H = Q("Milliseconds"),
        q = Q("Seconds"),
        G = Q("Minutes"),
        V = Q("Hours"),
        K = Q("Day"),
        Y = Q("Date"),
        $ = Q("Month"),
        J = Q("FullYear");
      function Q(e) {
        var t = (function (e) {
          switch (e) {
            case "Milliseconds":
              return 36e5;
            case "Seconds":
              return 3600;
            case "Minutes":
              return 60;
            case "Hours":
              return 1;
            default:
              return null;
          }
        })(e);
        return function (r, n) {
          if (void 0 === n) return r["get" + e]();
          var i = new Date(r);
          return (
            i["set" + e](n),
            t &&
              i["get" + e]() != n &&
              ("Hours" === e ||
                (n >= t && i.getHours() - r.getHours() < Math.floor(n / t))) &&
              i["set" + e](n + t),
            i
          );
        };
      }
      function ee(e) {
        return function (t, r, n) {
          return e(+W(t, n), +W(r, n));
        };
      }
      var te = r(14771),
        re = r(73961);
      const ne = function (e, t, r) {
        var n = -1,
          i = e.length;
        t < 0 && (t = -t > i ? 0 : i + t),
          (r = r > i ? i : r) < 0 && (r += i),
          (i = t > r ? 0 : (r - t) >>> 0),
          (t >>>= 0);
        for (var a = Array(i); ++n < i; ) a[n] = e[n + t];
        return a;
      };
      var ie = r(15974),
        ae = r(90312),
        oe = 1 / 0;
      const se = function (e) {
        return e
          ? (e = (0, ae.Z)(e)) === oe || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e == e
            ? e
            : 0
          : 0 === e
          ? e
          : 0;
      };
      const le = function (e) {
        var t = se(e),
          r = t % 1;
        return t == t ? (r ? t - r : t) : 0;
      };
      var ce = Math.ceil,
        ue = Math.max;
      const de = function (e, t, r) {
        t = (r ? (0, ie.Z)(e, t, r) : void 0 === t) ? 1 : ue(le(t), 0);
        var n = null == e ? 0 : e.length;
        if (!n || t < 1) return [];
        for (var i = 0, a = 0, o = Array(ce(n / t)); i < n; )
          o[a++] = ne(e, i, (i += t));
        return o;
      };
      function fe(e) {
        return (e && e.ownerDocument) || document;
      }
      function me(e, t) {
        return (function (e) {
          var t = fe(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var pe = /([A-Z])/g;
      var ye = /^ms-/;
      function he(e) {
        return (function (e) {
          return e.replace(pe, "-$1").toLowerCase();
        })(e).replace(ye, "-ms-");
      }
      var ve =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const ge = function (e, t) {
        var r = "",
          n = "";
        if ("string" == typeof t)
          return (
            e.style.getPropertyValue(he(t)) || me(e).getPropertyValue(he(t))
          );
        Object.keys(t).forEach(function (i) {
          var a = t[i];
          a || 0 === a
            ? !(function (e) {
                return !(!e || !ve.test(e));
              })(i)
              ? (r += he(i) + ": " + a + ";")
              : (n += i + "(" + a + ") ")
            : e.style.removeProperty(he(i));
        }),
          n && (r += "transform: " + n + ";"),
          (e.style.cssText += ";" + r);
      };
      function be(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      function we(e) {
        return "window" in e && e.window === e
          ? e
          : ("nodeType" in (t = e) &&
              t.nodeType === document.DOCUMENT_NODE &&
              e.defaultView) ||
              !1;
        var t;
      }
      function Be(e) {
        var t = "pageXOffset" === e ? "scrollLeft" : "scrollTop";
        return function (r, n) {
          var i = we(r);
          if (void 0 === n) return i ? i[e] : r[t];
          i ? i.scrollTo(i[e], n) : (r[t] = n);
        };
      }
      const _e = Be("pageXOffset"),
        Se = Be("pageYOffset");
      function Me(e) {
        var t = fe(e),
          r = { top: 0, left: 0, height: 0, width: 0 },
          n = t && t.documentElement;
        return n && be(n, e)
          ? (void 0 !== e.getBoundingClientRect &&
              (r = e.getBoundingClientRect()),
            (r = {
              top: r.top + Se(n) - (n.clientTop || 0),
              left: r.left + _e(n) - (n.clientLeft || 0),
              width: r.width,
              height: r.height,
            }))
          : r;
      }
      var ze = function (e) {
        return !!e && "offsetParent" in e;
      };
      function Ee(e, t) {
        var r,
          i = { top: 0, left: 0 };
        if ("fixed" === ge(e, "position")) r = e.getBoundingClientRect();
        else {
          var a =
            t ||
            (function (e) {
              for (
                var t = fe(e), r = e && e.offsetParent;
                ze(r) &&
                "HTML" !== r.nodeName &&
                "static" === ge(r, "position");

              )
                r = r.offsetParent;
              return r || t.documentElement;
            })(e);
          (r = Me(e)),
            "html" !==
              (function (e) {
                return e.nodeName && e.nodeName.toLowerCase();
              })(a) && (i = Me(a));
          var o = String(ge(a, "borderTopWidth") || 0);
          i.top += parseInt(o, 10) - Se(a) || 0;
          var s = String(ge(a, "borderLeftWidth") || 0);
          i.left += parseInt(s, 10) - _e(a) || 0;
        }
        var l = String(ge(e, "marginTop") || 0),
          c = String(ge(e, "marginLeft") || 0);
        return (0, n.Z)({}, r, {
          top: r.top - i.top - (parseInt(l, 10) || 0),
          left: r.left - i.left - (parseInt(c, 10) || 0),
        });
      }
      const Re = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var Oe = new Date().getTime();
      var Fe = "clearTimeout",
        De = function (e) {
          var t = new Date().getTime(),
            r = Math.max(0, 16 - (t - Oe)),
            n = setTimeout(e, r);
          return (Oe = t), n;
        },
        Te = function (e, t) {
          return (
            e + (e ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame"
          );
        };
      Re &&
        ["", "webkit", "moz", "o", "ms"].some(function (e) {
          var t = Te(e, "request");
          return (
            t in window &&
              ((Fe = Te(e, "cancel")),
              (De = function (e) {
                return window[t](e);
              })),
            !!De
          );
        });
      var xe = function (e) {
          "function" == typeof window[Fe] && window[Fe](e);
        },
        je = De,
        We = r(71084);
      const Pe = function (e, t) {
        return (0, We.Z)(e, t);
      };
      function Ae() {
        return (0, l.useState)(null);
      }
      var ke = function (e) {
        return e && "function" != typeof e
          ? function (t) {
              e.current = t;
            }
          : e;
      };
      const Ie = function (e, t) {
        return (0, l.useMemo)(
          function () {
            return (function (e, t) {
              var r = ke(e),
                n = ke(t);
              return function (e) {
                r && r(e), n && n(e);
              };
            })(e, t);
          },
          [e, t],
        );
      };
      var Ce = "top",
        Ne = "bottom",
        Ue = "right",
        Ze = "left",
        Le = "auto",
        Xe = [Ce, Ne, Ue, Ze],
        He = "start",
        qe = "end",
        Ge = "clippingParents",
        Ve = "viewport",
        Ke = "popper",
        Ye = "reference",
        $e = Xe.reduce(function (e, t) {
          return e.concat([t + "-" + He, t + "-" + qe]);
        }, []),
        Je = [].concat(Xe, [Le]).reduce(function (e, t) {
          return e.concat([t, t + "-" + He, t + "-" + qe]);
        }, []),
        Qe = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      const et = function (e) {
        var t = (function () {
          var e = (0, l.useRef)(!0),
            t = (0, l.useRef)(function () {
              return e.current;
            });
          return (
            (0, l.useEffect)(function () {
              return function () {
                e.current = !1;
              };
            }, []),
            t.current
          );
        })();
        return [
          e[0],
          (0, l.useCallback)(
            function (r) {
              if (t()) return e[1](r);
            },
            [t, e[1]],
          ),
        ];
      };
      function tt(e) {
        return e.split("-")[0];
      }
      function rt(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function nt(e) {
        return e instanceof rt(e).Element || e instanceof Element;
      }
      function it(e) {
        return e instanceof rt(e).HTMLElement || e instanceof HTMLElement;
      }
      function at(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof rt(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var ot = Math.max,
        st = Math.min,
        lt = Math.round;
      function ct() {
        var e = navigator.userAgentData;
        return null != e && e.brands
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function ut() {
        return !/^((?!chrome|android).)*safari/i.test(ct());
      }
      function dt(e, t, r) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        var n = e.getBoundingClientRect(),
          i = 1,
          a = 1;
        t &&
          it(e) &&
          ((i = (e.offsetWidth > 0 && lt(n.width) / e.offsetWidth) || 1),
          (a = (e.offsetHeight > 0 && lt(n.height) / e.offsetHeight) || 1));
        var o = (nt(e) ? rt(e) : window).visualViewport,
          s = !ut() && r,
          l = (n.left + (s && o ? o.offsetLeft : 0)) / i,
          c = (n.top + (s && o ? o.offsetTop : 0)) / a,
          u = n.width / i,
          d = n.height / a;
        return {
          width: u,
          height: d,
          top: c,
          right: l + u,
          bottom: c + d,
          left: l,
          x: l,
          y: c,
        };
      }
      function ft(e) {
        var t = dt(e),
          r = e.offsetWidth,
          n = e.offsetHeight;
        return (
          Math.abs(t.width - r) <= 1 && (r = t.width),
          Math.abs(t.height - n) <= 1 && (n = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
        );
      }
      function mt(e, t) {
        var r = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (r && at(r)) {
          var n = t;
          do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function pt(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function yt(e) {
        return rt(e).getComputedStyle(e);
      }
      function ht(e) {
        return ["table", "td", "th"].indexOf(pt(e)) >= 0;
      }
      function vt(e) {
        return ((nt(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function gt(e) {
        return "html" === pt(e)
          ? e
          : e.assignedSlot || e.parentNode || (at(e) ? e.host : null) || vt(e);
      }
      function bt(e) {
        return it(e) && "fixed" !== yt(e).position ? e.offsetParent : null;
      }
      function wt(e) {
        for (
          var t = rt(e), r = bt(e);
          r && ht(r) && "static" === yt(r).position;

        )
          r = bt(r);
        return r &&
          ("html" === pt(r) ||
            ("body" === pt(r) && "static" === yt(r).position))
          ? t
          : r ||
              (function (e) {
                var t = /firefox/i.test(ct());
                if (
                  /Trident/i.test(ct()) &&
                  it(e) &&
                  "fixed" === yt(e).position
                )
                  return null;
                var r = gt(e);
                for (
                  at(r) && (r = r.host);
                  it(r) && ["html", "body"].indexOf(pt(r)) < 0;

                ) {
                  var n = yt(r);
                  if (
                    "none" !== n.transform ||
                    "none" !== n.perspective ||
                    "paint" === n.contain ||
                    -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                    (t && "filter" === n.willChange) ||
                    (t && n.filter && "none" !== n.filter)
                  )
                    return r;
                  r = r.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function Bt(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function _t(e, t, r) {
        return ot(e, st(t, r));
      }
      function St(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Mt(e, t) {
        return t.reduce(function (t, r) {
          return (t[r] = e), t;
        }, {});
      }
      const zt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            r = e.state,
            n = e.name,
            i = e.options,
            a = r.elements.arrow,
            o = r.modifiersData.popperOffsets,
            s = tt(r.placement),
            l = Bt(s),
            c = [Ze, Ue].indexOf(s) >= 0 ? "height" : "width";
          if (a && o) {
            var u = (function (e, t) {
                return St(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            }),
                          )
                        : e)
                    ? e
                    : Mt(e, Xe),
                );
              })(i.padding, r),
              d = ft(a),
              f = "y" === l ? Ce : Ze,
              m = "y" === l ? Ne : Ue,
              p =
                r.rects.reference[c] +
                r.rects.reference[l] -
                o[l] -
                r.rects.popper[c],
              y = o[l] - r.rects.reference[l],
              h = wt(a),
              v = h
                ? "y" === l
                  ? h.clientHeight || 0
                  : h.clientWidth || 0
                : 0,
              g = p / 2 - y / 2,
              b = u[f],
              w = v - d[c] - u[m],
              B = v / 2 - d[c] / 2 + g,
              _ = _t(b, B, w),
              S = l;
            r.modifiersData[n] =
              (((t = {})[S] = _), (t.centerOffset = _ - B), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            r = e.options.element,
            n = void 0 === r ? "[data-popper-arrow]" : r;
          null != n &&
            ("string" != typeof n ||
              (n = t.elements.popper.querySelector(n))) &&
            mt(t.elements.popper, n) &&
            (t.elements.arrow = n);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Et(e) {
        return e.split("-")[1];
      }
      var Rt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Ot(e) {
        var t,
          r = e.popper,
          n = e.popperRect,
          i = e.placement,
          a = e.variation,
          o = e.offsets,
          s = e.position,
          l = e.gpuAcceleration,
          c = e.adaptive,
          u = e.roundOffsets,
          d = e.isFixed,
          f = o.x,
          m = void 0 === f ? 0 : f,
          p = o.y,
          y = void 0 === p ? 0 : p,
          h = "function" == typeof u ? u({ x: m, y }) : { x: m, y };
        (m = h.x), (y = h.y);
        var v = o.hasOwnProperty("x"),
          g = o.hasOwnProperty("y"),
          b = Ze,
          w = Ce,
          B = window;
        if (c) {
          var _ = wt(r),
            S = "clientHeight",
            M = "clientWidth";
          if (
            (_ === rt(r) &&
              "static" !== yt((_ = vt(r))).position &&
              "absolute" === s &&
              ((S = "scrollHeight"), (M = "scrollWidth")),
            i === Ce || ((i === Ze || i === Ue) && a === qe))
          )
            (w = Ne),
              (y -=
                (d && _ === B && B.visualViewport
                  ? B.visualViewport.height
                  : _[S]) - n.height),
              (y *= l ? 1 : -1);
          if (i === Ze || ((i === Ce || i === Ne) && a === qe))
            (b = Ue),
              (m -=
                (d && _ === B && B.visualViewport
                  ? B.visualViewport.width
                  : _[M]) - n.width),
              (m *= l ? 1 : -1);
        }
        var z,
          E = Object.assign({ position: s }, c && Rt),
          R =
            !0 === u
              ? (function (e) {
                  var t = e.x,
                    r = e.y,
                    n = window.devicePixelRatio || 1;
                  return { x: lt(t * n) / n || 0, y: lt(r * n) / n || 0 };
                })({ x: m, y })
              : { x: m, y };
        return (
          (m = R.x),
          (y = R.y),
          l
            ? Object.assign(
                {},
                E,
                (((z = {})[w] = g ? "0" : ""),
                (z[b] = v ? "0" : ""),
                (z.transform =
                  (B.devicePixelRatio || 1) <= 1
                    ? "translate(" + m + "px, " + y + "px)"
                    : "translate3d(" + m + "px, " + y + "px, 0)"),
                z),
              )
            : Object.assign(
                {},
                E,
                (((t = {})[w] = g ? y + "px" : ""),
                (t[b] = v ? m + "px" : ""),
                (t.transform = ""),
                t),
              )
        );
      }
      const Ft = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            r = e.options,
            n = r.gpuAcceleration,
            i = void 0 === n || n,
            a = r.adaptive,
            o = void 0 === a || a,
            s = r.roundOffsets,
            l = void 0 === s || s,
            c = {
              placement: tt(t.placement),
              variation: Et(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: i,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Ot(
                Object.assign({}, c, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: o,
                  roundOffsets: l,
                }),
              ),
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                Ot(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l,
                  }),
                ),
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      };
      var Dt = { passive: !0 };
      const Tt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            r = e.instance,
            n = e.options,
            i = n.scroll,
            a = void 0 === i || i,
            o = n.resize,
            s = void 0 === o || o,
            l = rt(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            a &&
              c.forEach(function (e) {
                e.addEventListener("scroll", r.update, Dt);
              }),
            s && l.addEventListener("resize", r.update, Dt),
            function () {
              a &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", r.update, Dt);
                }),
                s && l.removeEventListener("resize", r.update, Dt);
            }
          );
        },
        data: {},
      };
      var xt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function jt(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return xt[e];
        });
      }
      var Wt = { start: "end", end: "start" };
      function Pt(e) {
        return e.replace(/start|end/g, function (e) {
          return Wt[e];
        });
      }
      function At(e) {
        var t = rt(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function kt(e) {
        return dt(vt(e)).left + At(e).scrollLeft;
      }
      function It(e) {
        var t = yt(e),
          r = t.overflow,
          n = t.overflowX,
          i = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + i + n);
      }
      function Ct(e) {
        return ["html", "body", "#document"].indexOf(pt(e)) >= 0
          ? e.ownerDocument.body
          : it(e) && It(e)
          ? e
          : Ct(gt(e));
      }
      function Nt(e, t) {
        var r;
        void 0 === t && (t = []);
        var n = Ct(e),
          i = n === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = rt(n),
          o = i ? [a].concat(a.visualViewport || [], It(n) ? n : []) : n,
          s = t.concat(o);
        return i ? s : s.concat(Nt(gt(o)));
      }
      function Ut(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Zt(e, t, r) {
        return t === Ve
          ? Ut(
              (function (e, t) {
                var r = rt(e),
                  n = vt(e),
                  i = r.visualViewport,
                  a = n.clientWidth,
                  o = n.clientHeight,
                  s = 0,
                  l = 0;
                if (i) {
                  (a = i.width), (o = i.height);
                  var c = ut();
                  (c || (!c && "fixed" === t)) &&
                    ((s = i.offsetLeft), (l = i.offsetTop));
                }
                return { width: a, height: o, x: s + kt(e), y: l };
              })(e, r),
            )
          : nt(t)
          ? (function (e, t) {
              var r = dt(e, !1, "fixed" === t);
              return (
                (r.top = r.top + e.clientTop),
                (r.left = r.left + e.clientLeft),
                (r.bottom = r.top + e.clientHeight),
                (r.right = r.left + e.clientWidth),
                (r.width = e.clientWidth),
                (r.height = e.clientHeight),
                (r.x = r.left),
                (r.y = r.top),
                r
              );
            })(t, r)
          : Ut(
              (function (e) {
                var t,
                  r = vt(e),
                  n = At(e),
                  i = null == (t = e.ownerDocument) ? void 0 : t.body,
                  a = ot(
                    r.scrollWidth,
                    r.clientWidth,
                    i ? i.scrollWidth : 0,
                    i ? i.clientWidth : 0,
                  ),
                  o = ot(
                    r.scrollHeight,
                    r.clientHeight,
                    i ? i.scrollHeight : 0,
                    i ? i.clientHeight : 0,
                  ),
                  s = -n.scrollLeft + kt(e),
                  l = -n.scrollTop;
                return (
                  "rtl" === yt(i || r).direction &&
                    (s += ot(r.clientWidth, i ? i.clientWidth : 0) - a),
                  { width: a, height: o, x: s, y: l }
                );
              })(vt(e)),
            );
      }
      function Lt(e, t, r, n) {
        var i =
            "clippingParents" === t
              ? (function (e) {
                  var t = Nt(gt(e)),
                    r =
                      ["absolute", "fixed"].indexOf(yt(e).position) >= 0 &&
                      it(e)
                        ? wt(e)
                        : e;
                  return nt(r)
                    ? t.filter(function (e) {
                        return nt(e) && mt(e, r) && "body" !== pt(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          a = [].concat(i, [r]),
          o = a[0],
          s = a.reduce(
            function (t, r) {
              var i = Zt(e, r, n);
              return (
                (t.top = ot(i.top, t.top)),
                (t.right = st(i.right, t.right)),
                (t.bottom = st(i.bottom, t.bottom)),
                (t.left = ot(i.left, t.left)),
                t
              );
            },
            Zt(e, o, n),
          );
        return (
          (s.width = s.right - s.left),
          (s.height = s.bottom - s.top),
          (s.x = s.left),
          (s.y = s.top),
          s
        );
      }
      function Xt(e) {
        var t,
          r = e.reference,
          n = e.element,
          i = e.placement,
          a = i ? tt(i) : null,
          o = i ? Et(i) : null,
          s = r.x + r.width / 2 - n.width / 2,
          l = r.y + r.height / 2 - n.height / 2;
        switch (a) {
          case Ce:
            t = { x: s, y: r.y - n.height };
            break;
          case Ne:
            t = { x: s, y: r.y + r.height };
            break;
          case Ue:
            t = { x: r.x + r.width, y: l };
            break;
          case Ze:
            t = { x: r.x - n.width, y: l };
            break;
          default:
            t = { x: r.x, y: r.y };
        }
        var c = a ? Bt(a) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (o) {
            case He:
              t[c] = t[c] - (r[u] / 2 - n[u] / 2);
              break;
            case qe:
              t[c] = t[c] + (r[u] / 2 - n[u] / 2);
          }
        }
        return t;
      }
      function Ht(e, t) {
        void 0 === t && (t = {});
        var r = t,
          n = r.placement,
          i = void 0 === n ? e.placement : n,
          a = r.strategy,
          o = void 0 === a ? e.strategy : a,
          s = r.boundary,
          l = void 0 === s ? Ge : s,
          c = r.rootBoundary,
          u = void 0 === c ? Ve : c,
          d = r.elementContext,
          f = void 0 === d ? Ke : d,
          m = r.altBoundary,
          p = void 0 !== m && m,
          y = r.padding,
          h = void 0 === y ? 0 : y,
          v = St("number" != typeof h ? h : Mt(h, Xe)),
          g = f === Ke ? Ye : Ke,
          b = e.rects.popper,
          w = e.elements[p ? g : f],
          B = Lt(
            nt(w) ? w : w.contextElement || vt(e.elements.popper),
            l,
            u,
            o,
          ),
          _ = dt(e.elements.reference),
          S = Xt({
            reference: _,
            element: b,
            strategy: "absolute",
            placement: i,
          }),
          M = Ut(Object.assign({}, b, S)),
          z = f === Ke ? M : _,
          E = {
            top: B.top - z.top + v.top,
            bottom: z.bottom - B.bottom + v.bottom,
            left: B.left - z.left + v.left,
            right: z.right - B.right + v.right,
          },
          R = e.modifiersData.offset;
        if (f === Ke && R) {
          var O = R[i];
          Object.keys(E).forEach(function (e) {
            var t = [Ue, Ne].indexOf(e) >= 0 ? 1 : -1,
              r = [Ce, Ne].indexOf(e) >= 0 ? "y" : "x";
            E[e] += O[r] * t;
          });
        }
        return E;
      }
      const qt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            r = e.options,
            n = e.name;
          if (!t.modifiersData[n]._skip) {
            for (
              var i = r.mainAxis,
                a = void 0 === i || i,
                o = r.altAxis,
                s = void 0 === o || o,
                l = r.fallbackPlacements,
                c = r.padding,
                u = r.boundary,
                d = r.rootBoundary,
                f = r.altBoundary,
                m = r.flipVariations,
                p = void 0 === m || m,
                y = r.allowedAutoPlacements,
                h = t.options.placement,
                v = tt(h),
                g =
                  l ||
                  (v === h || !p
                    ? [jt(h)]
                    : (function (e) {
                        if (tt(e) === Le) return [];
                        var t = jt(e);
                        return [Pt(e), t, Pt(t)];
                      })(h)),
                b = [h].concat(g).reduce(function (e, r) {
                  return e.concat(
                    tt(r) === Le
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var r = t,
                            n = r.placement,
                            i = r.boundary,
                            a = r.rootBoundary,
                            o = r.padding,
                            s = r.flipVariations,
                            l = r.allowedAutoPlacements,
                            c = void 0 === l ? Je : l,
                            u = Et(n),
                            d = u
                              ? s
                                ? $e
                                : $e.filter(function (e) {
                                    return Et(e) === u;
                                  })
                              : Xe,
                            f = d.filter(function (e) {
                              return c.indexOf(e) >= 0;
                            });
                          0 === f.length && (f = d);
                          var m = f.reduce(function (t, r) {
                            return (
                              (t[r] = Ht(e, {
                                placement: r,
                                boundary: i,
                                rootBoundary: a,
                                padding: o,
                              })[tt(r)]),
                              t
                            );
                          }, {});
                          return Object.keys(m).sort(function (e, t) {
                            return m[e] - m[t];
                          });
                        })(t, {
                          placement: r,
                          boundary: u,
                          rootBoundary: d,
                          padding: c,
                          flipVariations: p,
                          allowedAutoPlacements: y,
                        })
                      : r,
                  );
                }, []),
                w = t.rects.reference,
                B = t.rects.popper,
                _ = new Map(),
                S = !0,
                M = b[0],
                z = 0;
              z < b.length;
              z++
            ) {
              var E = b[z],
                R = tt(E),
                O = Et(E) === He,
                F = [Ce, Ne].indexOf(R) >= 0,
                D = F ? "width" : "height",
                T = Ht(t, {
                  placement: E,
                  boundary: u,
                  rootBoundary: d,
                  altBoundary: f,
                  padding: c,
                }),
                x = F ? (O ? Ue : Ze) : O ? Ne : Ce;
              w[D] > B[D] && (x = jt(x));
              var j = jt(x),
                W = [];
              if (
                (a && W.push(T[R] <= 0),
                s && W.push(T[x] <= 0, T[j] <= 0),
                W.every(function (e) {
                  return e;
                }))
              ) {
                (M = E), (S = !1);
                break;
              }
              _.set(E, W);
            }
            if (S)
              for (
                var P = function (e) {
                    var t = b.find(function (t) {
                      var r = _.get(t);
                      if (r)
                        return r.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (M = t), "break";
                  },
                  A = p ? 3 : 1;
                A > 0;
                A--
              ) {
                if ("break" === P(A)) break;
              }
            t.placement !== M &&
              ((t.modifiersData[n]._skip = !0),
              (t.placement = M),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Gt(e, t, r) {
        return (
          void 0 === r && (r = { x: 0, y: 0 }),
          {
            top: e.top - t.height - r.y,
            right: e.right - t.width + r.x,
            bottom: e.bottom - t.height + r.y,
            left: e.left - t.width - r.x,
          }
        );
      }
      function Vt(e) {
        return [Ce, Ue, Ne, Ze].some(function (t) {
          return e[t] >= 0;
        });
      }
      const Kt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            r = e.options,
            n = e.name,
            i = r.offset,
            a = void 0 === i ? [0, 0] : i,
            o = Je.reduce(function (e, r) {
              return (
                (e[r] = (function (e, t, r) {
                  var n = tt(e),
                    i = [Ze, Ce].indexOf(n) >= 0 ? -1 : 1,
                    a =
                      "function" == typeof r
                        ? r(Object.assign({}, t, { placement: e }))
                        : r,
                    o = a[0],
                    s = a[1];
                  return (
                    (o = o || 0),
                    (s = (s || 0) * i),
                    [Ze, Ue].indexOf(n) >= 0 ? { x: s, y: o } : { x: o, y: s }
                  );
                })(r, t.rects, a)),
                e
              );
            }, {}),
            s = o[t.placement],
            l = s.x,
            c = s.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[n] = o);
        },
      };
      const Yt = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            r = e.options,
            n = e.name,
            i = r.mainAxis,
            a = void 0 === i || i,
            o = r.altAxis,
            s = void 0 !== o && o,
            l = r.boundary,
            c = r.rootBoundary,
            u = r.altBoundary,
            d = r.padding,
            f = r.tether,
            m = void 0 === f || f,
            p = r.tetherOffset,
            y = void 0 === p ? 0 : p,
            h = Ht(t, {
              boundary: l,
              rootBoundary: c,
              padding: d,
              altBoundary: u,
            }),
            v = tt(t.placement),
            g = Et(t.placement),
            b = !g,
            w = Bt(v),
            B = "x" === w ? "y" : "x",
            _ = t.modifiersData.popperOffsets,
            S = t.rects.reference,
            M = t.rects.popper,
            z =
              "function" == typeof y
                ? y(Object.assign({}, t.rects, { placement: t.placement }))
                : y,
            E =
              "number" == typeof z
                ? { mainAxis: z, altAxis: z }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, z),
            R = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            O = { x: 0, y: 0 };
          if (_) {
            if (a) {
              var F,
                D = "y" === w ? Ce : Ze,
                T = "y" === w ? Ne : Ue,
                x = "y" === w ? "height" : "width",
                j = _[w],
                W = j + h[D],
                P = j - h[T],
                A = m ? -M[x] / 2 : 0,
                k = g === He ? S[x] : M[x],
                I = g === He ? -M[x] : -S[x],
                C = t.elements.arrow,
                N = m && C ? ft(C) : { width: 0, height: 0 },
                U = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                Z = U[D],
                L = U[T],
                X = _t(0, S[x], N[x]),
                H = b
                  ? S[x] / 2 - A - X - Z - E.mainAxis
                  : k - X - Z - E.mainAxis,
                q = b
                  ? -S[x] / 2 + A + X + L + E.mainAxis
                  : I + X + L + E.mainAxis,
                G = t.elements.arrow && wt(t.elements.arrow),
                V = G ? ("y" === w ? G.clientTop || 0 : G.clientLeft || 0) : 0,
                K = null != (F = null == R ? void 0 : R[w]) ? F : 0,
                Y = j + q - K,
                $ = _t(m ? st(W, j + H - K - V) : W, j, m ? ot(P, Y) : P);
              (_[w] = $), (O[w] = $ - j);
            }
            if (s) {
              var J,
                Q = "x" === w ? Ce : Ze,
                ee = "x" === w ? Ne : Ue,
                te = _[B],
                re = "y" === B ? "height" : "width",
                ne = te + h[Q],
                ie = te - h[ee],
                ae = -1 !== [Ce, Ze].indexOf(v),
                oe = null != (J = null == R ? void 0 : R[B]) ? J : 0,
                se = ae ? ne : te - S[re] - M[re] - oe + E.altAxis,
                le = ae ? te + S[re] + M[re] - oe - E.altAxis : ie,
                ce =
                  m && ae
                    ? (function (e, t, r) {
                        var n = _t(e, t, r);
                        return n > r ? r : n;
                      })(se, te, le)
                    : _t(m ? se : ne, te, m ? le : ie);
              (_[B] = ce), (O[B] = ce - te);
            }
            t.modifiersData[n] = O;
          }
        },
        requiresIfExists: ["offset"],
      };
      function $t(e, t, r) {
        void 0 === r && (r = !1);
        var n,
          i,
          a = it(t),
          o =
            it(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                r = lt(t.width) / e.offsetWidth || 1,
                n = lt(t.height) / e.offsetHeight || 1;
              return 1 !== r || 1 !== n;
            })(t),
          s = vt(t),
          l = dt(e, o, r),
          c = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (a || (!a && !r)) &&
            (("body" !== pt(t) || It(s)) &&
              (c =
                (n = t) !== rt(n) && it(n)
                  ? { scrollLeft: (i = n).scrollLeft, scrollTop: i.scrollTop }
                  : At(n)),
            it(t)
              ? (((u = dt(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
              : s && (u.x = kt(s))),
          {
            x: l.left + c.scrollLeft - u.x,
            y: l.top + c.scrollTop - u.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function Jt(e) {
        var t = new Map(),
          r = new Set(),
          n = [];
        function i(e) {
          r.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!r.has(e)) {
                  var n = t.get(e);
                  n && i(n);
                }
              }),
            n.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            r.has(e.name) || i(e);
          }),
          n
        );
      }
      var Qt = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function er() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function tr(e) {
        void 0 === e && (e = {});
        var t = e,
          r = t.defaultModifiers,
          n = void 0 === r ? [] : r,
          i = t.defaultOptions,
          a = void 0 === i ? Qt : i;
        return function (e, t, r) {
          void 0 === r && (r = a);
          var i,
            o,
            s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Qt, a),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            u = {
              state: s,
              setOptions: function (r) {
                var i = "function" == typeof r ? r(s.options) : r;
                d(),
                  (s.options = Object.assign({}, a, s.options, i)),
                  (s.scrollParents = {
                    reference: nt(e)
                      ? Nt(e)
                      : e.contextElement
                      ? Nt(e.contextElement)
                      : [],
                    popper: Nt(t),
                  });
                var o = (function (e) {
                  var t = Jt(e);
                  return Qe.reduce(function (e, r) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === r;
                      }),
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var r = e[t.name];
                      return (
                        (e[t.name] = r
                          ? Object.assign({}, r, t, {
                              options: Object.assign({}, r.options, t.options),
                              data: Object.assign({}, r.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(n, s.options.modifiers)),
                );
                return (
                  (s.orderedModifiers = o.filter(function (e) {
                    return e.enabled;
                  })),
                  s.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      r = e.options,
                      n = void 0 === r ? {} : r,
                      i = e.effect;
                    if ("function" == typeof i) {
                      var a = i({ state: s, name: t, instance: u, options: n }),
                        o = function () {};
                      l.push(a || o);
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = s.elements,
                    t = e.reference,
                    r = e.popper;
                  if (er(t, r)) {
                    (s.rects = {
                      reference: $t(t, wt(r), "fixed" === s.options.strategy),
                      popper: ft(r),
                    }),
                      (s.reset = !1),
                      (s.placement = s.options.placement),
                      s.orderedModifiers.forEach(function (e) {
                        return (s.modifiersData[e.name] = Object.assign(
                          {},
                          e.data,
                        ));
                      });
                    for (var n = 0; n < s.orderedModifiers.length; n++)
                      if (!0 !== s.reset) {
                        var i = s.orderedModifiers[n],
                          a = i.fn,
                          o = i.options,
                          l = void 0 === o ? {} : o,
                          d = i.name;
                        "function" == typeof a &&
                          (s =
                            a({ state: s, options: l, name: d, instance: u }) ||
                            s);
                      } else (s.reset = !1), (n = -1);
                  }
                }
              },
              update:
                ((i = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(s);
                  });
                }),
                function () {
                  return (
                    o ||
                      (o = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (o = void 0), e(i());
                        });
                      })),
                    o
                  );
                }),
              destroy: function () {
                d(), (c = !0);
              },
            };
          if (!er(e, t)) return u;
          function d() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            u.setOptions(r).then(function (e) {
              !c && r.onFirstUpdate && r.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var rr = tr({
          defaultModifiers: [
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  r = e.name,
                  n = t.rects.reference,
                  i = t.rects.popper,
                  a = t.modifiersData.preventOverflow,
                  o = Ht(t, { elementContext: "reference" }),
                  s = Ht(t, { altBoundary: !0 }),
                  l = Gt(o, n),
                  c = Gt(s, i, a),
                  u = Vt(l),
                  d = Vt(c);
                (t.modifiersData[r] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
                  isReferenceHidden: u,
                  hasPopperEscaped: d,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
                      "data-popper-escaped": d,
                    },
                  ));
              },
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  r = e.name;
                t.modifiersData[r] = Xt({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            Ft,
            Tt,
            Kt,
            qt,
            Yt,
            zt,
          ],
        }),
        nr = function (e) {
          return {
            position: e,
            top: "0",
            left: "0",
            opacity: "0",
            pointerEvents: "none",
          };
        },
        ir = { name: "applyStyles", enabled: !1 },
        ar = {
          name: "ariaDescribedBy",
          enabled: !0,
          phase: "afterWrite",
          effect: function (e) {
            var t = e.state;
            return function () {
              var e = t.elements,
                r = e.reference,
                n = e.popper;
              if ("removeAttribute" in r) {
                var i = (r.getAttribute("aria-describedby") || "")
                  .split(",")
                  .filter(function (e) {
                    return e.trim() !== n.id;
                  });
                i.length
                  ? r.setAttribute("aria-describedby", i.join(","))
                  : r.removeAttribute("aria-describedby");
              }
            };
          },
          fn: function (e) {
            var t,
              r = e.state.elements,
              n = r.popper,
              i = r.reference,
              a =
                null == (t = n.getAttribute("role")) ? void 0 : t.toLowerCase();
            if (n.id && "tooltip" === a && "setAttribute" in i) {
              var o = i.getAttribute("aria-describedby");
              if (o && -1 !== o.split(",").indexOf(n.id)) return;
              i.setAttribute("aria-describedby", o ? o + "," + n.id : n.id);
            }
          },
        },
        or = [];
      const sr = function (e, t, r) {
        var a = void 0 === r ? {} : r,
          o = a.enabled,
          s = void 0 === o || o,
          c = a.placement,
          u = void 0 === c ? "bottom" : c,
          d = a.strategy,
          f = void 0 === d ? "absolute" : d,
          m = a.modifiers,
          p = void 0 === m ? or : m,
          y = (0, i.Z)(a, ["enabled", "placement", "strategy", "modifiers"]),
          h = (0, l.useRef)(),
          v = (0, l.useCallback)(function () {
            var e;
            null == (e = h.current) || e.update();
          }, []),
          g = (0, l.useCallback)(function () {
            var e;
            null == (e = h.current) || e.forceUpdate();
          }, []),
          b = et(
            (0, l.useState)({
              placement: u,
              update: v,
              forceUpdate: g,
              attributes: {},
              styles: { popper: nr(f), arrow: {} },
            }),
          ),
          w = b[0],
          B = b[1],
          _ = (0, l.useMemo)(
            function () {
              return {
                name: "updateStateModifier",
                enabled: !0,
                phase: "write",
                requires: ["computeStyles"],
                fn: function (e) {
                  var t = e.state,
                    r = {},
                    n = {};
                  Object.keys(t.elements).forEach(function (e) {
                    (r[e] = t.styles[e]), (n[e] = t.attributes[e]);
                  }),
                    B({
                      state: t,
                      styles: r,
                      attributes: n,
                      update: v,
                      forceUpdate: g,
                      placement: t.placement,
                    });
                },
              };
            },
            [v, g, B],
          );
        return (
          (0, l.useEffect)(
            function () {
              h.current &&
                s &&
                h.current.setOptions({
                  placement: u,
                  strategy: f,
                  modifiers: [].concat(p, [_, ir]),
                });
            },
            [f, u, _, s],
          ),
          (0, l.useEffect)(
            function () {
              if (s && null != e && null != t)
                return (
                  (h.current = rr(
                    e,
                    t,
                    (0, n.Z)({}, y, {
                      placement: u,
                      strategy: f,
                      modifiers: [].concat(p, [ar, _]),
                    }),
                  )),
                  function () {
                    null != h.current &&
                      (h.current.destroy(),
                      (h.current = void 0),
                      B(function (e) {
                        return (0, n.Z)({}, e, {
                          attributes: {},
                          styles: { popper: nr(f) },
                        });
                      }));
                  }
                );
            },
            [s, e, t],
          ),
          w
        );
      };
      var lr = !1,
        cr = !1;
      try {
        var ur = {
          get passive() {
            return (lr = !0);
          },
          get once() {
            return (cr = lr = !0);
          },
        };
        Re &&
          (window.addEventListener("test", ur, ur),
          window.removeEventListener("test", ur, !0));
      } catch (e) {}
      const dr = function (e, t, r, n) {
        if (n && "boolean" != typeof n && !cr) {
          var i = n.once,
            a = n.capture,
            o = r;
          !cr &&
            i &&
            ((o =
              r.__once ||
              function e(n) {
                this.removeEventListener(t, e, a), r.call(this, n);
              }),
            (r.__once = o)),
            e.addEventListener(t, o, lr ? n : a);
        }
        e.addEventListener(t, r, n);
      };
      const fr = function (e, t, r, n) {
        var i = n && "boolean" != typeof n ? n.capture : n;
        e.removeEventListener(t, r, i),
          r.__once && e.removeEventListener(t, r.__once, i);
      };
      const mr = function (e, t, r, n) {
        return (
          dr(e, t, r, n),
          function () {
            fr(e, t, r, n);
          }
        );
      };
      const pr = function (e) {
        var t = (0, l.useRef)(e);
        return (
          (0, l.useEffect)(
            function () {
              t.current = e;
            },
            [e],
          ),
          t
        );
      };
      function yr(e) {
        var t = pr(e);
        return (0, l.useCallback)(
          function () {
            return t.current && t.current.apply(t, arguments);
          },
          [t],
        );
      }
      var hr = r(626),
        vr = r.n(hr);
      const gr = function (e) {
        return fe(
          (function (e) {
            return e && "setState" in e
              ? re.findDOMNode(e)
              : null != e
              ? e
              : null;
          })(e),
        );
      };
      var br = function () {};
      var wr = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      const Br = function (e, t, r) {
        var n = void 0 === r ? {} : r,
          i = n.disabled,
          a = n.clickTrigger,
          o = void 0 === a ? "click" : a,
          s = (0, l.useRef)(!1),
          c = t || br,
          u = (0, l.useCallback)(
            function (t) {
              var r,
                n = wr(e);
              vr()(
                !!n,
                "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node",
              ),
                (s.current = !(
                  n &&
                  ((r = t),
                  !(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey)) &&
                  (function (e) {
                    return 0 === e.button;
                  })(t) &&
                  !be(n, t.target)
                ));
            },
            [e],
          ),
          d = yr(function (e) {
            s.current || c(e);
          }),
          f = yr(function (e) {
            27 === e.keyCode && c(e);
          });
        (0, l.useEffect)(
          function () {
            if (!i && null != e) {
              var t = window.event,
                r = gr(wr(e)),
                n = mr(r, o, u, !0),
                a = mr(r, o, function (e) {
                  e !== t ? d(e) : (t = void 0);
                }),
                s = mr(r, "keyup", function (e) {
                  e !== t ? f(e) : (t = void 0);
                }),
                l = [];
              return (
                "ontouchstart" in r.documentElement &&
                  (l = [].slice.call(r.body.children).map(function (e) {
                    return mr(e, "mousemove", br);
                  })),
                function () {
                  n(),
                    a(),
                    s(),
                    l.forEach(function (e) {
                      return e();
                    });
                }
              );
            }
          },
          [e, i, o, u, d, f],
        );
      };
      var _r = function (e) {
        var t;
        return "undefined" == typeof document
          ? null
          : null == e
          ? fe().body
          : ("function" == typeof e && (e = e()),
            e && "current" in e && (e = e.current),
            ((null == (t = e) ? void 0 : t.nodeType) && e) || null);
      };
      function Sr(e, t) {
        var r = (0, l.useState)(function () {
            return _r(e);
          }),
          n = r[0],
          i = r[1];
        if (!n) {
          var a = _r(e);
          a && i(a);
        }
        return (
          (0, l.useEffect)(
            function () {
              t && n && t(n);
            },
            [t, n],
          ),
          (0, l.useEffect)(
            function () {
              var t = _r(e);
              t !== n && i(t);
            },
            [e, n],
          ),
          n
        );
      }
      function Mr(e) {
        var t,
          r,
          i,
          a,
          o,
          s = e.enabled,
          l = e.enableEvents,
          c = e.placement,
          u = e.flip,
          d = e.offset,
          f = e.containerPadding,
          m = e.arrowElement,
          p = e.popperConfig,
          y = void 0 === p ? {} : p,
          h = (function (e) {
            var t = {};
            return Array.isArray(e)
              ? (null == e ||
                  e.forEach(function (e) {
                    t[e.name] = e;
                  }),
                t)
              : e || t;
          })(y.modifiers);
        return (0, n.Z)({}, y, {
          placement: c,
          enabled: s,
          modifiers:
            ((o = (0, n.Z)({}, h, {
              eventListeners: { enabled: l },
              preventOverflow: (0, n.Z)({}, h.preventOverflow, {
                options: f
                  ? (0, n.Z)(
                      { padding: f },
                      null == (t = h.preventOverflow) ? void 0 : t.options,
                    )
                  : null == (r = h.preventOverflow)
                  ? void 0
                  : r.options,
              }),
              offset: {
                options: (0, n.Z)(
                  { offset: d },
                  null == (i = h.offset) ? void 0 : i.options,
                ),
              },
              arrow: (0, n.Z)({}, h.arrow, {
                enabled: !!m,
                options: (0, n.Z)(
                  {},
                  null == (a = h.arrow) ? void 0 : a.options,
                  { element: m },
                ),
              }),
              flip: (0, n.Z)({ enabled: !!u }, h.flip),
            })),
            void 0 === o && (o = {}),
            Array.isArray(o)
              ? o
              : Object.keys(o).map(function (e) {
                  return (o[e].name = e), o[e];
                })),
        });
      }
      var zr = l.forwardRef(function (e, t) {
        var r = e.flip,
          a = e.offset,
          o = e.placement,
          s = e.containerPadding,
          c = void 0 === s ? 5 : s,
          u = e.popperConfig,
          d = void 0 === u ? {} : u,
          f = e.transition,
          m = Ae(),
          p = m[0],
          y = m[1],
          h = Ae(),
          v = h[0],
          g = h[1],
          b = Ie(y, t),
          w = Sr(e.container),
          B = Sr(e.target),
          _ = (0, l.useState)(!e.show),
          S = _[0],
          M = _[1],
          z = sr(
            B,
            p,
            Mr({
              placement: o,
              enableEvents: !!e.show,
              containerPadding: c || 5,
              flip: r,
              offset: a,
              arrowElement: v,
              popperConfig: d,
            }),
          ),
          E = z.styles,
          R = z.attributes,
          O = (0, i.Z)(z, ["styles", "attributes"]);
        e.show ? S && M(!1) : e.transition || S || M(!0);
        var F = e.show || (f && !S);
        if (
          (Br(p, e.onHide, {
            disabled: !e.rootClose || e.rootCloseDisabled,
            clickTrigger: e.rootCloseEvent,
          }),
          !F)
        )
          return null;
        var D = e.children(
          (0, n.Z)({}, O, {
            show: !!e.show,
            props: (0, n.Z)({}, R.popper, { style: E.popper, ref: b }),
            arrowProps: (0, n.Z)({}, R.arrow, { style: E.arrow, ref: g }),
          }),
        );
        if (f) {
          var T = e.onExit,
            x = e.onExiting,
            j = e.onEnter,
            W = e.onEntering,
            P = e.onEntered;
          D = l.createElement(
            f,
            {
              in: e.show,
              appear: !0,
              onExit: T,
              onExiting: x,
              onExited: function () {
                M(!0), e.onExited && e.onExited.apply(e, arguments);
              },
              onEnter: j,
              onEntering: W,
              onEntered: P,
            },
            D,
          );
        }
        return w ? re.createPortal(D, w) : null;
      });
      (zr.displayName = "Overlay"),
        (zr.propTypes = {
          show: s().bool,
          placement: s().oneOf(Je),
          target: s().any,
          container: s().any,
          flip: s().bool,
          children: s().func.isRequired,
          containerPadding: s().number,
          popperConfig: s().object,
          rootClose: s().bool,
          rootCloseEvent: s().oneOf(["click", "mousedown"]),
          rootCloseDisabled: s().bool,
          onHide: function (e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            var i;
            return e.rootClose
              ? (i = s().func).isRequired.apply(i, [e].concat(r))
              : s().func.apply(s(), [e].concat(r));
          },
          transition: s().elementType,
          onEnter: s().func,
          onEntering: s().func,
          onEntered: s().func,
          onExit: s().func,
          onExiting: s().func,
          onExited: s().func,
        });
      const Er = zr;
      function Rr(e, t) {
        var r = we(e);
        return r ? r.innerHeight : t ? e.clientHeight : Me(e).height;
      }
      var Or,
        Fr = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function Dr(e, t) {
        if (!Or) {
          var r = document.body,
            n =
              r.matches ||
              r.matchesSelector ||
              r.webkitMatchesSelector ||
              r.mozMatchesSelector ||
              r.msMatchesSelector;
          Or = function (e, t) {
            return n.call(e, t);
          };
        }
        return Or(e, t);
      }
      const Tr = function (e, t, r, n) {
        for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
          if (t(e[a], a, e)) return a;
        return -1;
      };
      var xr = r(52942),
        jr = Math.max;
      const Wr = function (e, t, r) {
        var n = null == e ? 0 : e.length;
        if (!n) return -1;
        var i = null == r ? 0 : le(r);
        return i < 0 && (i = jr(n + i, 0)), Tr(e, (0, xr.Z)(t, 3), i);
      };
      var Pr = Math.ceil,
        Ar = Math.max;
      const kr = function (e, t, r, n) {
        for (var i = -1, a = Ar(Pr((t - e) / (r || 1)), 0), o = Array(a); a--; )
          (o[n ? a : ++i] = e), (e += r);
        return o;
      };
      const Ir = function (e) {
        return function (t, r, n) {
          return (
            n && "number" != typeof n && (0, ie.Z)(t, r, n) && (r = n = void 0),
            (t = se(t)),
            void 0 === r ? ((r = t), (t = 0)) : (r = se(r)),
            (n = void 0 === n ? (t < r ? 1 : -1) : se(n)),
            kr(t, r, n, e)
          );
        };
      };
      const Cr = Ir();
      var Nr = r(21850),
        Ur = r(59900),
        Zr = r(46049),
        Lr = r(56137),
        Xr = r(84431),
        Hr = r(92170),
        qr = Lr.Z ? Lr.Z.isConcatSpreadable : void 0;
      const Gr = function (e) {
        return (0, Hr.Z)(e) || (0, Xr.Z)(e) || !!(qr && e && e[qr]);
      };
      const Vr = function e(t, r, n, i, a) {
        var o = -1,
          s = t.length;
        for (n || (n = Gr), a || (a = []); ++o < s; ) {
          var l = t[o];
          r > 0 && n(l)
            ? r > 1
              ? e(l, r - 1, n, i, a)
              : (0, Zr.Z)(a, l)
            : i || (a[a.length] = l);
        }
        return a;
      };
      var Kr = r(72160),
        Yr = r(57673),
        $r = r(3145);
      const Jr = function (e, t) {
        var r = e.length;
        for (e.sort(t); r--; ) e[r] = e[r].value;
        return e;
      };
      var Qr = r(86176),
        en = r(62816);
      const tn = function (e, t) {
        if (e !== t) {
          var r = void 0 !== e,
            n = null === e,
            i = e == e,
            a = (0, en.Z)(e),
            o = void 0 !== t,
            s = null === t,
            l = t == t,
            c = (0, en.Z)(t);
          if (
            (!s && !c && !a && e > t) ||
            (a && o && l && !s && !c) ||
            (n && o && l) ||
            (!r && l) ||
            !i
          )
            return 1;
          if (
            (!n && !a && !c && e < t) ||
            (c && r && i && !n && !a) ||
            (s && r && i) ||
            (!o && i) ||
            !l
          )
            return -1;
        }
        return 0;
      };
      const rn = function (e, t, r) {
        for (
          var n = -1,
            i = e.criteria,
            a = t.criteria,
            o = i.length,
            s = r.length;
          ++n < o;

        ) {
          var l = tn(i[n], a[n]);
          if (l) return n >= s ? l : l * ("desc" == r[n] ? -1 : 1);
        }
        return e.index - t.index;
      };
      var nn = r(59996);
      const an = function (e, t, r) {
        t = t.length
          ? (0, Kr.Z)(t, function (e) {
              return (0, Hr.Z)(e)
                ? function (t) {
                    return (0, Yr.Z)(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [nn.Z];
        var n = -1;
        t = (0, Kr.Z)(t, (0, Qr.Z)(xr.Z));
        var i = (0, $r.Z)(e, function (e, r, i) {
          return {
            criteria: (0, Kr.Z)(t, function (t) {
              return t(e);
            }),
            index: ++n,
            value: e,
          };
        });
        return Jr(i, function (e, t) {
          return rn(e, t, r);
        });
      };
      var on = r(35651);
      const sn = (0, on.Z)(function (e, t) {
        if (null == e) return [];
        var r = t.length;
        return (
          r > 1 && (0, ie.Z)(e, t[0], t[1])
            ? (t = [])
            : r > 2 && (0, ie.Z)(t[0], t[1], t[2]) && (t = [t[0]]),
          an(e, Vr(t, 1), [])
        );
      });
      function ln(e, t) {
        var r = we(e);
        return r ? r.innerWidth : t ? e.clientWidth : Me(e).width;
      }
      var cn;
      function un(e) {
        if (((!cn && 0 !== cn) || e) && Re) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.top = "-9999px"),
            (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t),
            (cn = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return cn;
      }
      var dn = r(91437),
        fn = r(28624),
        mn = r(13953),
        pn = r(66662),
        yn = r(43786),
        hn = r(7172),
        vn = r(10646);
      const gn = function (e, t) {
        return e && (0, hn.Z)(t, (0, vn.Z)(t), e);
      };
      var bn = r(85889);
      const wn = function (e, t) {
        return e && (0, hn.Z)(t, (0, bn.Z)(t), e);
      };
      var Bn = r(77408),
        _n = r(32291),
        Sn = r(20993);
      const Mn = function (e, t) {
        return (0, hn.Z)(e, (0, Sn.Z)(e), t);
      };
      var zn = r(12545),
        En = r(3612);
      const Rn = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; )
              (0, Zr.Z)(t, (0, Sn.Z)(e)), (e = (0, zn.Z)(e));
            return t;
          }
        : En.Z;
      const On = function (e, t) {
        return (0, hn.Z)(e, Rn(e), t);
      };
      var Fn = r(69094),
        Dn = r(4403);
      const Tn = function (e) {
        return (0, Dn.Z)(e, bn.Z, Rn);
      };
      var xn = r(70783),
        jn = Object.prototype.hasOwnProperty;
      const Wn = function (e) {
        var t = e.length,
          r = new e.constructor(t);
        return (
          t &&
            "string" == typeof e[0] &&
            jn.call(e, "index") &&
            ((r.index = e.index), (r.input = e.input)),
          r
        );
      };
      var Pn = r(11225);
      const An = function (e, t) {
        var r = t ? (0, Pn.Z)(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      };
      var kn = /\w*$/;
      const In = function (e) {
        var t = new e.constructor(e.source, kn.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      };
      var Cn = Lr.Z ? Lr.Z.prototype : void 0,
        Nn = Cn ? Cn.valueOf : void 0;
      const Un = function (e) {
        return Nn ? Object(Nn.call(e)) : {};
      };
      var Zn = r(97558);
      const Ln = function (e, t, r) {
        var n = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return (0, Pn.Z)(e);
          case "[object Boolean]":
          case "[object Date]":
            return new n(+e);
          case "[object DataView]":
            return An(e, r);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return (0, Zn.Z)(e, r);
          case "[object Map]":
          case "[object Set]":
            return new n();
          case "[object Number]":
          case "[object String]":
            return new n(e);
          case "[object RegExp]":
            return In(e);
          case "[object Symbol]":
            return Un(e);
        }
      };
      var Xn = r(23775),
        Hn = r(62246),
        qn = r(25197);
      const Gn = function (e) {
        return (0, qn.Z)(e) && "[object Map]" == (0, xn.Z)(e);
      };
      var Vn = r(40690),
        Kn = Vn.Z && Vn.Z.isMap;
      const Yn = Kn ? (0, Qr.Z)(Kn) : Gn;
      var $n = r(96288);
      const Jn = function (e) {
        return (0, qn.Z)(e) && "[object Set]" == (0, xn.Z)(e);
      };
      var Qn = Vn.Z && Vn.Z.isSet;
      const ei = Qn ? (0, Qr.Z)(Qn) : Jn;
      var ti = "[object Arguments]",
        ri = "[object Function]",
        ni = "[object Object]",
        ii = {};
      (ii[ti] =
        ii["[object Array]"] =
        ii["[object ArrayBuffer]"] =
        ii["[object DataView]"] =
        ii["[object Boolean]"] =
        ii["[object Date]"] =
        ii["[object Float32Array]"] =
        ii["[object Float64Array]"] =
        ii["[object Int8Array]"] =
        ii["[object Int16Array]"] =
        ii["[object Int32Array]"] =
        ii["[object Map]"] =
        ii["[object Number]"] =
        ii[ni] =
        ii["[object RegExp]"] =
        ii["[object Set]"] =
        ii["[object String]"] =
        ii["[object Symbol]"] =
        ii["[object Uint8Array]"] =
        ii["[object Uint8ClampedArray]"] =
        ii["[object Uint16Array]"] =
        ii["[object Uint32Array]"] =
          !0),
        (ii["[object Error]"] = ii[ri] = ii["[object WeakMap]"] = !1);
      const ai = function e(t, r, n, i, a, o) {
        var s,
          l = 1 & r,
          c = 2 & r,
          u = 4 & r;
        if ((n && (s = a ? n(t, i, a, o) : n(t)), void 0 !== s)) return s;
        if (!(0, $n.Z)(t)) return t;
        var d = (0, Hr.Z)(t);
        if (d) {
          if (((s = Wn(t)), !l)) return (0, _n.Z)(t, s);
        } else {
          var f = (0, xn.Z)(t),
            m = f == ri || "[object GeneratorFunction]" == f;
          if ((0, Hn.Z)(t)) return (0, Bn.Z)(t, l);
          if (f == ni || f == ti || (m && !a)) {
            if (((s = c || m ? {} : (0, Xn.Z)(t)), !l))
              return c ? On(t, wn(s, t)) : Mn(t, gn(s, t));
          } else {
            if (!ii[f]) return a ? t : {};
            s = Ln(t, f, l);
          }
        }
        o || (o = new mn.Z());
        var p = o.get(t);
        if (p) return p;
        o.set(t, s),
          ei(t)
            ? t.forEach(function (i) {
                s.add(e(i, r, n, i, t, o));
              })
            : Yn(t) &&
              t.forEach(function (i, a) {
                s.set(a, e(i, r, n, a, t, o));
              });
        var y = u ? (c ? Tn : Fn.Z) : c ? bn.Z : vn.Z,
          h = d ? void 0 : y(t);
        return (
          (0, pn.Z)(h || t, function (i, a) {
            h && (i = t[(a = i)]), (0, yn.Z)(s, a, e(i, r, n, a, t, o));
          }),
          s
        );
      };
      var oi = r(30475);
      const si = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
      const li = function (e, t) {
        return t.length < 2 ? e : (0, Yr.Z)(e, ne(t, 0, -1));
      };
      var ci = r(82508);
      const ui = function (e, t) {
        return (
          (t = (0, oi.Z)(t, e)),
          null == (e = li(e, t)) || delete e[(0, ci.Z)(si(t))]
        );
      };
      var di = r(44199);
      const fi = function (e) {
        return (0, di.Z)(e) ? void 0 : e;
      };
      const mi = function (e) {
        return (null == e ? 0 : e.length) ? Vr(e, 1) : [];
      };
      var pi = r(13031),
        yi = r(11871);
      const hi = (function (e) {
        return (0, yi.Z)((0, pi.Z)(e, void 0, mi), e + "");
      })(function (e, t) {
        var r = {};
        if (null == e) return r;
        var n = !1;
        (t = (0, Kr.Z)(t, function (t) {
          return (t = (0, oi.Z)(t, e)), n || (n = t.length > 1), t;
        })),
          (0, hn.Z)(e, Tn(e), r),
          n && (r = ai(r, 7, fi));
        for (var i = t.length; i--; ) ui(r, t[i]);
        return r;
      });
      var vi = r(72831),
        gi = Object.prototype,
        bi = gi.hasOwnProperty;
      const wi = (0, on.Z)(function (e, t) {
        e = Object(e);
        var r = -1,
          n = t.length,
          i = n > 2 ? t[2] : void 0;
        for (i && (0, ie.Z)(t[0], t[1], i) && (n = 1); ++r < n; )
          for (
            var a = t[r], o = (0, bn.Z)(a), s = -1, l = o.length;
            ++s < l;

          ) {
            var c = o[s],
              u = e[c];
            (void 0 === u || ((0, vi.Z)(u, gi[c]) && !bi.call(e, c))) &&
              (e[c] = a[c]);
          }
        return e;
      });
      var Bi = r(73154),
        _i = r(79926),
        Si = r(2619),
        Mi = r(70770);
      const zi = function (e, t, r) {
        var n = (0, Hr.Z)(e),
          i = n || (0, Hn.Z)(e) || (0, Mi.Z)(e);
        if (((t = (0, xr.Z)(t, 4)), null == r)) {
          var a = e && e.constructor;
          r = i
            ? n
              ? new a()
              : []
            : (0, $n.Z)(e) && (0, Si.Z)(a)
            ? (0, Bi.Z)((0, zn.Z)(e))
            : {};
        }
        return (
          (i ? pn.Z : _i.Z)(e, function (e, n, i) {
            return t(r, e, n, i);
          }),
          r
        );
      };
      var Ei = r(24077);
      const Ri = function (e, t) {
        var r = {};
        return (
          (t = (0, xr.Z)(t, 3)),
          (0, _i.Z)(e, function (e, n, i) {
            (0, Ei.Z)(r, n, t(e, n, i));
          }),
          r
        );
      };
      function Oi(e) {
        return e.children;
      }
      var Fi = "PREV",
        Di = "NEXT",
        Ti = "TODAY",
        xi = "DATE",
        ji = {
          MONTH: "month",
          WEEK: "week",
          WORK_WEEK: "work_week",
          DAY: "day",
          AGENDA: "agenda",
        },
        Wi = Object.keys(ji).map(function (e) {
          return ji[e];
        });
      s().oneOfType([s().string, s().func]),
        s().any,
        s().func,
        s().oneOfType([
          s().arrayOf(s().oneOf(Wi)),
          s().objectOf(function (e, t) {
            if (-1 !== Wi.indexOf(t) && "boolean" == typeof e[t]) return null;
            for (
              var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2;
              i < r;
              i++
            )
              n[i - 2] = arguments[i];
            return s().elementType.apply(s(), [e, t].concat(n));
          }),
        ]),
        s().oneOfType([s().oneOf(["overlap", "no-overlap"]), s().func]);
      function Pi(e, t) {
        e && e.apply(null, [].concat(t));
      }
      var Ai = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 };
      function ki(e, t) {
        var r = W(e, "month");
        return W(r, "week", t.startOfWeek());
      }
      function Ii(e, t) {
        var r = P(e, "month");
        return P(r, "week", t.startOfWeek());
      }
      function Ci(e, t) {
        for (var r = ki(e, t), n = Ii(e, t), i = []; U(r, n, "day"); )
          i.push(r), (r = x(r, 1, "day"));
        return i;
      }
      function Ni(e, t) {
        var r = W(e, t);
        return A(r, e) ? r : x(r, 1, t);
      }
      function Ui(e, t, r) {
        void 0 === r && (r = "day");
        for (var n = e, i = []; U(n, t, r); ) i.push(n), (n = x(n, 1, r));
        return i;
      }
      function Zi(e, t) {
        return null == t && null == e
          ? null
          : (null == t && (t = new Date()),
            null == e && (e = new Date()),
            (e = W(e, "day")),
            (e = V(e, V(t))),
            (e = G(e, G(t))),
            (e = q(e, q(t))),
            H(e, H(t)));
      }
      function Li(e) {
        return 0 === V(e) && 0 === G(e) && 0 === q(e) && 0 === H(e);
      }
      function Xi(e, t, r) {
        return r && "milliseconds" !== r
          ? Math.round(Math.abs(+W(e, r) / Ai[r] - +W(t, r) / Ai[r]))
          : Math.abs(+e - +t);
      }
      var Hi = s().oneOfType([s().string, s().func]);
      function qi(e, t, r, n, i) {
        var a = "function" == typeof n ? n(r, i, e) : t.call(e, r, n, i);
        return null != a && "string" != typeof a && u()(!1), a;
      }
      function Gi(e, t, r) {
        return new Date(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          0,
          t + r,
          0,
          0,
        );
      }
      function Vi(e, t) {
        return e.getTimezoneOffset() - t.getTimezoneOffset();
      }
      function Ki(e, t) {
        return Xi(e, t, "minutes") + Vi(e, t);
      }
      function Yi(e) {
        var t = W(e, "day");
        return Xi(t, e, "minutes") + Vi(t, e);
      }
      function $i(e, t) {
        return N(e, t, "day");
      }
      function Ji(e, t, r) {
        return A(e, t, "minutes") ? C(t, r, "minutes") : I(t, r, "minutes");
      }
      function Qi(e) {
        var t = e.evtA,
          r = t.start,
          n = t.end,
          i = t.allDay,
          a = e.evtB,
          o = a.start,
          s = a.end,
          l = a.allDay,
          c = +W(r, "day") - +W(o, "day"),
          u = Xi(r, Ni(n, "day"), "day"),
          d = Xi(o, Ni(s, "day"), "day");
        return (
          c ||
          Math.max(d, 1) - Math.max(u, 1) ||
          !!l - !!i ||
          +r - +o ||
          +n - +s
        );
      }
      function ea(e) {
        var t = e.event,
          r = t.start,
          n = t.end,
          i = e.range,
          a = i.start,
          o = i.end,
          s = W(r, "day"),
          l = U(s, o, "day"),
          c = k(s, n, "minutes") ? I(n, a, "minutes") : C(n, a, "minutes");
        return l && c;
      }
      function ta(e, t) {
        return A(e, t, "day");
      }
      function ra(e, t) {
        return Li(e) && Li(t);
      }
      var na = function (e) {
        var t = this;
        "function" != typeof e.format && u()(!1),
          "function" != typeof e.firstOfWeek && u()(!1),
          (this.propType = e.propType || Hi),
          (this.formats = e.formats),
          (this.format = function () {
            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
              n[i] = arguments[i];
            return qi.apply(void 0, [t, e.format].concat(n));
          }),
          (this.startOfWeek = e.firstOfWeek),
          (this.merge = e.merge || Zi),
          (this.inRange = e.inRange || X),
          (this.lt = e.lt || N),
          (this.lte = e.lte || U),
          (this.gt = e.gt || I),
          (this.gte = e.gte || C),
          (this.eq = e.eq || A),
          (this.neq = e.neq || k),
          (this.startOf = e.startOf || W),
          (this.endOf = e.endOf || P),
          (this.add = e.add || x),
          (this.range = e.range || Ui),
          (this.diff = e.diff || Xi),
          (this.ceil = e.ceil || Ni),
          (this.min = e.min || Z),
          (this.max = e.max || L),
          (this.minutes = e.minutes || G),
          (this.firstVisibleDay = e.firstVisibleDay || ki),
          (this.lastVisibleDay = e.lastVisibleDay || Ii),
          (this.visibleDays = e.visibleDays || Ci),
          (this.getSlotDate = e.getSlotDate || Gi),
          (this.getTimezoneOffset =
            e.getTimezoneOffset ||
            function (e) {
              return e.getTimezoneOffset();
            }),
          (this.getDstOffset = e.getDstOffset || Vi),
          (this.getTotalMin = e.getTotalMin || Ki),
          (this.getMinutesFromMidnight = e.getMinutesFromMidnight || Yi),
          (this.continuesPrior = e.continuesPrior || $i),
          (this.continuesAfter = e.continuesAfter || Ji),
          (this.sortEvents = e.sortEvents || Qi),
          (this.inEventRange = e.inEventRange || ea),
          (this.isSameDate = e.isSameDate || ta),
          (this.startAndEndAreDateOnly = e.startAndEndAreDateOnly || ra),
          (this.segmentOffset = e.browserTZOffset ? e.browserTZOffset() : 0);
      };
      function ia(e, t, r, i) {
        var a = (0, n.Z)({}, e.formats, r);
        return (0, n.Z)({}, e, {
          messages: i,
          startOfWeek: function () {
            return e.startOfWeek(t);
          },
          format: function (r, n) {
            return e.format(r, a[n] || n, t);
          },
        });
      }
      var aa = {
        date: "Date",
        time: "Time",
        event: "Event",
        allDay: "All Day",
        week: "Week",
        work_week: "Work Week",
        day: "Day",
        month: "Month",
        previous: "Back",
        next: "Next",
        yesterday: "Yesterday",
        tomorrow: "Tomorrow",
        today: "Today",
        agenda: "Agenda",
        noEventsInRange: "There are no events in this range.",
        showMore: function (e) {
          return "+" + e + " more";
        },
      };
      var oa = [
          "style",
          "className",
          "event",
          "selected",
          "isAllDay",
          "onSelect",
          "onDoubleClick",
          "onKeyPress",
          "localizer",
          "continuesPrior",
          "continuesAfter",
          "accessors",
          "getters",
          "children",
          "components",
          "slotStart",
          "slotEnd",
        ],
        sa = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            (0, a.Z)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.style,
                r = e.className,
                a = e.event,
                o = e.selected,
                s = e.isAllDay,
                c = e.onSelect,
                u = e.onDoubleClick,
                d = e.onKeyPress,
                f = e.localizer,
                m = e.continuesPrior,
                p = e.continuesAfter,
                y = e.accessors,
                h = e.getters,
                v = e.children,
                b = e.components,
                w = b.event,
                B = b.eventWrapper,
                _ = e.slotStart,
                S = e.slotEnd,
                M = (0, i.Z)(e, oa);
              delete M.resizable;
              var z = y.title(a),
                E = y.tooltip(a),
                R = y.end(a),
                O = y.start(a),
                F = y.allDay(a),
                D = s || F || f.diff(O, f.ceil(R, "day"), "day") > 1,
                T = h.eventProp(a, O, R, o),
                x = l.createElement(
                  "div",
                  { className: "rbc-event-content", title: E || void 0 },
                  w
                    ? l.createElement(w, {
                        event: a,
                        continuesPrior: m,
                        continuesAfter: p,
                        title: z,
                        isAllDay: F,
                        localizer: f,
                        slotStart: _,
                        slotEnd: S,
                      })
                    : z,
                );
              return l.createElement(
                B,
                (0, n.Z)({}, this.props, { type: "date" }),
                l.createElement(
                  "div",
                  (0, n.Z)({}, M, {
                    tabIndex: 0,
                    style: (0, n.Z)({}, T.style, t),
                    className: g("rbc-event", r, T.className, {
                      "rbc-selected": o,
                      "rbc-event-allday": D,
                      "rbc-event-continues-prior": m,
                      "rbc-event-continues-after": p,
                    }),
                    onClick: function (e) {
                      return c && c(a, e);
                    },
                    onDoubleClick: function (e) {
                      return u && u(a, e);
                    },
                    onKeyPress: function (e) {
                      return d && d(a, e);
                    },
                  }),
                  "function" == typeof v ? v(x) : x,
                ),
              );
            }),
            t
          );
        })(l.Component);
      function la(e, t) {
        return !(!e || null == t) && Pe(e, t);
      }
      function ca(e, t) {
        return (e.right - e.left) / t;
      }
      function ua(e, t, r, n) {
        var i = ca(e, n);
        return r
          ? n - 1 - Math.floor((t - e.left) / i)
          : Math.floor((t - e.left) / i);
      }
      sa.propTypes = {};
      var da = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.componentDidMount = function () {
            var e,
              t,
              r = this.props,
              n = r.popupOffset,
              i = void 0 === n ? 5 : n,
              a = Me(r.popperRef.current),
              o = a.top,
              s = a.left,
              l = a.width,
              c = a.height,
              u = window.innerHeight + Se(window),
              d = window.innerWidth + _e(window),
              f = o + c,
              m = s + l;
            (f > u || m > d) &&
              (f > u && (e = f - u + (i.y || +i || 0)),
              m > d && (t = m - d + (i.x || +i || 0)),
              this.setState({ topOffset: e, leftOffset: t }));
          }),
          (r.render = function () {
            var e = this,
              t = this.props,
              r = t.events,
              i = t.selected,
              a = t.getters,
              o = t.accessors,
              s = t.components,
              c = t.onSelect,
              u = t.onDoubleClick,
              d = t.onKeyPress,
              f = t.slotStart,
              m = t.slotEnd,
              p = t.localizer,
              y = t.popperRef,
              h = this.props.position.width,
              v = {
                top: -((this.state || {}).topOffset || 0),
                left: -((this.state || {}).leftOffset || 0),
                minWidth: h + h / 2,
              };
            return l.createElement(
              "div",
              {
                style: (0, n.Z)({}, this.props.style, v),
                className: "rbc-overlay",
                ref: y,
              },
              l.createElement(
                "div",
                { className: "rbc-overlay-header" },
                p.format(f, "dayHeaderFormat"),
              ),
              r.map(function (t, r) {
                return l.createElement(sa, {
                  key: r,
                  type: "popup",
                  localizer: p,
                  event: t,
                  getters: a,
                  onSelect: c,
                  accessors: o,
                  components: s,
                  onDoubleClick: u,
                  onKeyPress: d,
                  continuesPrior: p.lt(o.end(t), f, "day"),
                  continuesAfter: p.gte(o.start(t), m, "day"),
                  slotStart: f,
                  slotEnd: m,
                  selected: la(t, i),
                  draggable: !0,
                  onDragStart: function () {
                    return e.props.handleDragStart(t);
                  },
                  onDragEnd: function () {
                    return e.props.show();
                  },
                });
              }),
            );
          }),
          t
        );
      })(l.Component);
      da.propTypes = {};
      var fa = l.forwardRef(function (e, t) {
        return l.createElement(da, (0, n.Z)({ popperRef: t }, e));
      });
      function ma(e, t, r) {
        return void 0 === r && (r = document), mr(r, e, t, { passive: !1 });
      }
      function pa(e, t) {
        var r = t.clientX,
          n = t.clientY;
        return (function (e, t, r) {
          e.closest && !r && e.closest(t);
          var n = e;
          do {
            if (Dr(n, t)) return n;
            n = n.parentElement;
          } while (n && n !== r && n.nodeType === document.ELEMENT_NODE);
          return null;
        })(document.elementFromPoint(r, n), ".rbc-event", e);
      }
      function ya(e, t) {
        return !!pa(e, t);
      }
      function ha(e) {
        var t = e;
        return (
          e.touches && e.touches.length && (t = e.touches[0]),
          {
            clientX: t.clientX,
            clientY: t.clientY,
            pageX: t.pageX,
            pageY: t.pageY,
          }
        );
      }
      var va = (function () {
        function e(e, t) {
          var r = void 0 === t ? {} : t,
            n = r.global,
            i = void 0 !== n && n,
            a = r.longPressThreshold,
            o = void 0 === a ? 250 : a;
          (this.isDetached = !1),
            (this.container = e),
            (this.globalMouse = !e || i),
            (this.longPressThreshold = o),
            (this._listeners = Object.create(null)),
            (this._handleInitialEvent = this._handleInitialEvent.bind(this)),
            (this._handleMoveEvent = this._handleMoveEvent.bind(this)),
            (this._handleTerminatingEvent =
              this._handleTerminatingEvent.bind(this)),
            (this._keyListener = this._keyListener.bind(this)),
            (this._dropFromOutsideListener =
              this._dropFromOutsideListener.bind(this)),
            (this._dragOverFromOutsideListener =
              this._dragOverFromOutsideListener.bind(this)),
            (this._removeTouchMoveWindowListener = ma(
              "touchmove",
              function () {},
              window,
            )),
            (this._removeKeyDownListener = ma("keydown", this._keyListener)),
            (this._removeKeyUpListener = ma("keyup", this._keyListener)),
            (this._removeDropFromOutsideListener = ma(
              "drop",
              this._dropFromOutsideListener,
            )),
            (this._removeDragOverFromOutsideListener = ma(
              "dragover",
              this._dragOverFromOutsideListener,
            )),
            this._addInitialEventListener();
        }
        var t = e.prototype;
        return (
          (t.on = function (e, t) {
            var r = this._listeners[e] || (this._listeners[e] = []);
            return (
              r.push(t),
              {
                remove: function () {
                  var e = r.indexOf(t);
                  -1 !== e && r.splice(e, 1);
                },
              }
            );
          }),
          (t.emit = function (e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            var i;
            return (
              (this._listeners[e] || []).forEach(function (e) {
                void 0 === i && (i = e.apply(void 0, r));
              }),
              i
            );
          }),
          (t.teardown = function () {
            (this.isDetached = !0),
              (this._listeners = Object.create(null)),
              this._removeTouchMoveWindowListener &&
                this._removeTouchMoveWindowListener(),
              this._removeInitialEventListener &&
                this._removeInitialEventListener(),
              this._removeEndListener && this._removeEndListener(),
              this._onEscListener && this._onEscListener(),
              this._removeMoveListener && this._removeMoveListener(),
              this._removeKeyUpListener && this._removeKeyUpListener(),
              this._removeKeyDownListener && this._removeKeyDownListener(),
              this._removeDropFromOutsideListener &&
                this._removeDropFromOutsideListener(),
              this._removeDragOverFromOutsideListener &&
                this._removeDragOverFromOutsideListener();
          }),
          (t.isSelected = function (e) {
            var t = this._selectRect;
            return !(!t || !this.selecting) && ga(t, ba(e));
          }),
          (t.filter = function (e) {
            return this._selectRect && this.selecting
              ? e.filter(this.isSelected, this)
              : [];
          }),
          (t._addLongPressListener = function (e, t) {
            var r = this,
              n = null,
              i = null,
              a = null,
              o = function (t) {
                (n = setTimeout(function () {
                  l(), e(t);
                }, r.longPressThreshold)),
                  (i = ma("touchmove", function () {
                    return l();
                  })),
                  (a = ma("touchend", function () {
                    return l();
                  }));
              },
              s = ma("touchstart", o),
              l = function () {
                n && clearTimeout(n),
                  i && i(),
                  a && a(),
                  (n = null),
                  (i = null),
                  (a = null);
              };
            return (
              t && o(t),
              function () {
                l(), s();
              }
            );
          }),
          (t._addInitialEventListener = function () {
            var e = this,
              t = ma("mousedown", function (t) {
                e._removeInitialEventListener(),
                  e._handleInitialEvent(t),
                  (e._removeInitialEventListener = ma(
                    "mousedown",
                    e._handleInitialEvent,
                  ));
              }),
              r = ma("touchstart", function (t) {
                e._removeInitialEventListener(),
                  (e._removeInitialEventListener = e._addLongPressListener(
                    e._handleInitialEvent,
                    t,
                  ));
              });
            this._removeInitialEventListener = function () {
              t(), r();
            };
          }),
          (t._dropFromOutsideListener = function (e) {
            var t = ha(e),
              r = t.pageX,
              n = t.pageY,
              i = t.clientX,
              a = t.clientY;
            this.emit("dropFromOutside", {
              x: r,
              y: n,
              clientX: i,
              clientY: a,
            }),
              e.preventDefault();
          }),
          (t._dragOverFromOutsideListener = function (e) {
            var t = ha(e),
              r = t.pageX,
              n = t.pageY,
              i = t.clientX,
              a = t.clientY;
            this.emit("dragOverFromOutside", {
              x: r,
              y: n,
              clientX: i,
              clientY: a,
            }),
              e.preventDefault();
          }),
          (t._handleInitialEvent = function (e) {
            if (!this.isDetached) {
              var t,
                r = ha(e),
                n = r.clientX,
                i = r.clientY,
                a = r.pageX,
                o = r.pageY,
                s = this.container();
              if (
                3 !== e.which &&
                2 !== e.button &&
                ((c = n),
                (u = i),
                !(l = s) || be(l, document.elementFromPoint(c, u)))
              ) {
                var l, c, u;
                if (!this.globalMouse && s && !be(s, e.target)) {
                  var d = (function (e) {
                      void 0 === e && (e = 0);
                      "object" != typeof e &&
                        (e = { top: e, left: e, right: e, bottom: e });
                      return e;
                    })(0),
                    f = d.top,
                    m = d.left,
                    p = d.bottom,
                    y = d.right;
                  if (
                    !ga(
                      {
                        top: (t = ba(s)).top - f,
                        left: t.left - m,
                        bottom: t.bottom + p,
                        right: t.right + y,
                      },
                      { top: o, left: a },
                    )
                  )
                    return;
                }
                if (
                  !1 !==
                  this.emit(
                    "beforeSelect",
                    (this._initialEventData = {
                      isTouch: /^touch/.test(e.type),
                      x: a,
                      y: o,
                      clientX: n,
                      clientY: i,
                    }),
                  )
                )
                  switch (e.type) {
                    case "mousedown":
                      (this._removeEndListener = ma(
                        "mouseup",
                        this._handleTerminatingEvent,
                      )),
                        (this._onEscListener = ma(
                          "keydown",
                          this._handleTerminatingEvent,
                        )),
                        (this._removeMoveListener = ma(
                          "mousemove",
                          this._handleMoveEvent,
                        ));
                      break;
                    case "touchstart":
                      this._handleMoveEvent(e),
                        (this._removeEndListener = ma(
                          "touchend",
                          this._handleTerminatingEvent,
                        )),
                        (this._removeMoveListener = ma(
                          "touchmove",
                          this._handleMoveEvent,
                        ));
                  }
              }
            }
          }),
          (t._handleTerminatingEvent = function (e) {
            var t = ha(e),
              r = t.pageX,
              n = t.pageY;
            if (
              ((this.selecting = !1),
              this._removeEndListener && this._removeEndListener(),
              this._removeMoveListener && this._removeMoveListener(),
              this._initialEventData)
            ) {
              var i = !this.container || be(this.container(), e.target),
                a = this._selectRect,
                o = this.isClick(r, n);
              return (
                (this._initialEventData = null),
                "Escape" === e.key
                  ? this.emit("reset")
                  : i
                  ? o && i
                    ? this._handleClickEvent(e)
                    : o
                    ? void 0
                    : this.emit("select", a)
                  : this.emit("reset")
              );
            }
          }),
          (t._handleClickEvent = function (e) {
            var t = ha(e),
              r = t.pageX,
              n = t.pageY,
              i = t.clientX,
              a = t.clientY,
              o = new Date().getTime();
            return this._lastClickData &&
              o - this._lastClickData.timestamp < 250
              ? ((this._lastClickData = null),
                this.emit("doubleClick", {
                  x: r,
                  y: n,
                  clientX: i,
                  clientY: a,
                }))
              : ((this._lastClickData = { timestamp: o }),
                this.emit("click", { x: r, y: n, clientX: i, clientY: a }));
          }),
          (t._handleMoveEvent = function (e) {
            if (null !== this._initialEventData && !this.isDetached) {
              var t = this._initialEventData,
                r = t.x,
                n = t.y,
                i = ha(e),
                a = i.pageX,
                o = i.pageY,
                s = Math.abs(r - a),
                l = Math.abs(n - o),
                c = Math.min(a, r),
                u = Math.min(o, n),
                d = this.selecting;
              (!this.isClick(a, o) || d || s || l) &&
                ((this.selecting = !0),
                (this._selectRect = {
                  top: u,
                  left: c,
                  x: a,
                  y: o,
                  right: c + s,
                  bottom: u + l,
                }),
                d || this.emit("selectStart", this._initialEventData),
                this.isClick(a, o) || this.emit("selecting", this._selectRect),
                e.preventDefault());
            }
          }),
          (t._keyListener = function (e) {
            this.ctrl = e.metaKey || e.ctrlKey;
          }),
          (t.isClick = function (e, t) {
            var r = this._initialEventData,
              n = r.x,
              i = r.y;
            return !r.isTouch && Math.abs(e - n) <= 5 && Math.abs(t - i) <= 5;
          }),
          e
        );
      })();
      function ga(e, t, r) {
        void 0 === r && (r = 0);
        var n = ba(e),
          i = n.top,
          a = n.left,
          o = n.right,
          s = void 0 === o ? a : o,
          l = n.bottom,
          c = void 0 === l ? i : l,
          u = ba(t),
          d = u.top,
          f = u.left,
          m = u.right,
          p = void 0 === m ? f : m,
          y = u.bottom;
        return !(
          c - r < d ||
          i + r > (void 0 === y ? d : y) ||
          s - r < f ||
          a + r > p
        );
      }
      function ba(e) {
        if (!e.getBoundingClientRect) return e;
        var t = e.getBoundingClientRect(),
          r = t.left + wa("left"),
          n = t.top + wa("top");
        return {
          top: n,
          left: r,
          right: (e.offsetWidth || 0) + r,
          bottom: (e.offsetHeight || 0) + n,
        };
      }
      function wa(e) {
        return "left" === e
          ? window.pageXOffset || document.body.scrollLeft || 0
          : "top" === e
          ? window.pageYOffset || document.body.scrollTop || 0
          : void 0;
      }
      var Ba = (function (e) {
        function t(t, r) {
          var n;
          return (
            ((n = e.call(this, t, r) || this).state = { selecting: !1 }), n
          );
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.componentDidMount = function () {
            this.props.selectable && this._selectable();
          }),
          (r.componentWillUnmount = function () {
            this._teardownSelectable();
          }),
          (r.UNSAFE_componentWillReceiveProps = function (e) {
            e.selectable && !this.props.selectable && this._selectable(),
              !e.selectable &&
                this.props.selectable &&
                this._teardownSelectable();
          }),
          (r.render = function () {
            var e = this.props,
              t = e.range,
              r = e.getNow,
              n = e.getters,
              i = e.date,
              a = e.components.dateCellWrapper,
              o = e.localizer,
              s = this.state,
              c = s.selecting,
              u = s.startIdx,
              d = s.endIdx,
              f = r();
            return l.createElement(
              "div",
              { className: "rbc-row-bg" },
              t.map(function (e, r) {
                var s = c && r >= u && r <= d,
                  m = n.dayProp(e),
                  p = m.className,
                  y = m.style;
                return l.createElement(
                  a,
                  { key: r, value: e, range: t },
                  l.createElement("div", {
                    style: y,
                    className: g(
                      "rbc-day-bg",
                      p,
                      s && "rbc-selected-cell",
                      o.isSameDate(e, f) && "rbc-today",
                      i && o.neq(i, e, "month") && "rbc-off-range-bg",
                    ),
                  }),
                );
              }),
            );
          }),
          (r._selectable = function () {
            var e = this,
              t = (0, re.findDOMNode)(this),
              r = (this._selector = new va(this.props.container, {
                longPressThreshold: this.props.longPressThreshold,
              })),
              i = function (r, n) {
                if (!ya((0, re.findDOMNode)(e), r)) {
                  var i = ba(t),
                    a = e.props,
                    o = a.range,
                    s = a.rtl;
                  if (
                    ((c = i),
                    (d = (u = r).x),
                    (f = u.y) >= c.top &&
                      f <= c.bottom &&
                      d >= c.left &&
                      d <= c.right)
                  ) {
                    var l = ua(i, r.x, s, o.length);
                    e._selectSlot({
                      startIdx: l,
                      endIdx: l,
                      action: n,
                      box: r,
                    });
                  }
                }
                var c, u, d, f;
                (e._initial = {}), e.setState({ selecting: !1 });
              };
            r.on("selecting", function (n) {
              var i = e.props,
                a = i.range,
                o = i.rtl,
                s = -1,
                l = -1;
              if (
                (e.state.selecting ||
                  (Pi(e.props.onSelectStart, [n]),
                  (e._initial = { x: n.x, y: n.y })),
                r.isSelected(t))
              ) {
                var c = ba(t),
                  u = (function (e, t, r, n, i) {
                    var a = -1,
                      o = -1,
                      s = n - 1,
                      l = ca(t, n),
                      c = ua(t, r.x, i, n),
                      u = t.top < r.y && t.bottom > r.y,
                      d = t.top < e.y && t.bottom > e.y,
                      f = e.y > t.bottom,
                      m = t.top > e.y;
                    return (
                      r.top < t.top &&
                        r.bottom > t.bottom &&
                        ((a = 0), (o = s)),
                      u && (m ? ((a = 0), (o = c)) : f && ((a = c), (o = s))),
                      d &&
                        ((a = o =
                          i
                            ? s - Math.floor((e.x - t.left) / l)
                            : Math.floor((e.x - t.left) / l)),
                        u
                          ? c < a
                            ? (a = c)
                            : (o = c)
                          : e.y < r.y
                          ? (o = s)
                          : (a = 0)),
                      { startIdx: a, endIdx: o }
                    );
                  })(e._initial, c, n, a.length, o);
                (s = u.startIdx), (l = u.endIdx);
              }
              e.setState({ selecting: !0, startIdx: s, endIdx: l });
            }),
              r.on("beforeSelect", function (t) {
                if ("ignoreEvents" === e.props.selectable)
                  return !ya((0, re.findDOMNode)(e), t);
              }),
              r.on("click", function (e) {
                return i(e, "click");
              }),
              r.on("doubleClick", function (e) {
                return i(e, "doubleClick");
              }),
              r.on("select", function (t) {
                e._selectSlot(
                  (0, n.Z)({}, e.state, { action: "select", bounds: t }),
                ),
                  (e._initial = {}),
                  e.setState({ selecting: !1 }),
                  Pi(e.props.onSelectEnd, [e.state]);
              });
          }),
          (r._teardownSelectable = function () {
            this._selector &&
              (this._selector.teardown(), (this._selector = null));
          }),
          (r._selectSlot = function (e) {
            var t = e.endIdx,
              r = e.startIdx,
              n = e.action,
              i = e.bounds,
              a = e.box;
            -1 !== t &&
              -1 !== r &&
              this.props.onSelectSlot &&
              this.props.onSelectSlot({
                start: r,
                end: t,
                action: n,
                bounds: i,
                box: a,
                resourceId: this.props.resourceId,
              });
          }),
          t
        );
      })(l.Component);
      Ba.propTypes = {};
      s().object.isRequired,
        s().object,
        s().bool,
        s().object.isRequired,
        s().object.isRequired,
        s().object.isRequired,
        s().object.isRequired,
        s().func,
        s().func,
        s().func;
      var _a = { segments: [], selected: {} },
        Sa = function (e, t) {
          var r = e.selected,
            n = (e.isAllDay, e.accessors),
            i = e.getters,
            a = e.onSelect,
            o = e.onDoubleClick,
            s = e.onKeyPress,
            c = e.localizer,
            u = e.slotMetrics,
            d = e.components,
            f = e.resizable,
            m = u.continuesPrior(t),
            p = u.continuesAfter(t);
          return l.createElement(sa, {
            event: t,
            getters: i,
            localizer: c,
            accessors: n,
            components: d,
            onSelect: a,
            onDoubleClick: o,
            onKeyPress: s,
            continuesPrior: m,
            continuesAfter: p,
            slotStart: u.first,
            slotEnd: u.last,
            selected: la(t, r),
            resizable: f,
          });
        },
        Ma = function (e, t, r, n) {
          void 0 === n && (n = " ");
          var i = (Math.abs(t) / e) * 100 + "%";
          return l.createElement(
            "div",
            {
              key: r,
              className: "rbc-row-segment",
              style: { WebkitFlexBasis: i, flexBasis: i, maxWidth: i },
            },
            n,
          );
        },
        za = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            (0, a.Z)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                r = t.segments,
                n = t.slotMetrics.slots,
                i = t.className,
                a = 1;
              return l.createElement(
                "div",
                { className: g(i, "rbc-row") },
                r.reduce(function (t, r, i) {
                  var o = r.event,
                    s = r.left,
                    l = r.right,
                    c = r.span,
                    u = "_lvl_" + i,
                    d = s - a,
                    f = Sa(e.props, o);
                  return (
                    d && t.push(Ma(n, d, u + "_gap")),
                    t.push(Ma(n, c, u, f)),
                    (a = l + 1),
                    t
                  );
                }, []),
              );
            }),
            t
          );
        })(l.Component);
      function Ea(e) {
        var t = e.dateRange,
          r = e.unit,
          n = void 0 === r ? "day" : r,
          i = e.localizer;
        return { first: t[0], last: i.add(t[t.length - 1], 1, n) };
      }
      function Ra(e, t) {
        void 0 === t && (t = 1 / 0);
        var r,
          n,
          i,
          a = [],
          o = [];
        for (r = 0; r < e.length; r++) {
          for (i = e[r], n = 0; n < a.length && Fa(i, a[n]); n++);
          n >= t ? o.push(i) : (a[n] || (a[n] = [])).push(i);
        }
        for (r = 0; r < a.length; r++)
          a[r].sort(function (e, t) {
            return e.left - t.left;
          });
        return { levels: a, extra: o };
      }
      function Oa(e, t, r, n, i) {
        var a = { start: n.start(e), end: n.end(e) },
          o = { start: t, end: r };
        return i.inEventRange({ event: a, range: o });
      }
      function Fa(e, t) {
        return t.some(function (t) {
          return t.left <= e.right && t.right >= e.left;
        });
      }
      function Da(e, t, r, n) {
        var i = { start: r.start(e), end: r.end(e), allDay: r.allDay(e) },
          a = { start: r.start(t), end: r.end(t), allDay: r.allDay(t) };
        return n.sortEvents({ evtA: i, evtB: a });
      }
      (za.propTypes = {}), (za.defaultProps = (0, n.Z)({}, _a));
      var Ta = function (e, t) {
          return e.left <= t && e.right >= t;
        },
        xa = function (e, t) {
          return e.filter(function (e) {
            return Ta(e, t);
          }).length;
        },
        ja = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          (0, a.Z)(t, e);
          var r = t.prototype;
          return (
            (r.render = function () {
              for (
                var e = this.props,
                  t = e.segments,
                  r = e.slotMetrics.slots,
                  n = Ra(t).levels[0],
                  i = 1,
                  a = 1,
                  o = [];
                i <= r;

              ) {
                var s = "_lvl_" + i,
                  c =
                    n.filter(function (e) {
                      return Ta(e, i);
                    })[0] || {},
                  u = c.event,
                  d = c.left,
                  f = c.right,
                  m = c.span;
                if (u) {
                  var p = Math.max(0, d - a);
                  if (this.canRenderSlotEvent(d, m)) {
                    var y = Sa(this.props, u);
                    p && o.push(Ma(r, p, s + "_gap")),
                      o.push(Ma(r, m, s, y)),
                      (a = i = f + 1);
                  } else
                    p && o.push(Ma(r, p, s + "_gap")),
                      o.push(Ma(r, 1, s, this.renderShowMore(t, i))),
                      (a = i += 1);
                } else i++;
              }
              return l.createElement("div", { className: "rbc-row" }, o);
            }),
            (r.canRenderSlotEvent = function (e, t) {
              var r = this.props.segments;
              return Cr(e, e + t).every(function (e) {
                return 1 === xa(r, e);
              });
            }),
            (r.renderShowMore = function (e, t) {
              var r = this,
                n = this.props.localizer,
                i = xa(e, t);
              return (
                !!i &&
                l.createElement(
                  "a",
                  {
                    key: "sm_" + t,
                    href: "#",
                    className: "rbc-show-more",
                    onClick: function (e) {
                      return r.showMore(t, e);
                    },
                  },
                  n.messages.showMore(i),
                )
              );
            }),
            (r.showMore = function (e, t) {
              t.preventDefault(),
                t.stopPropagation(),
                this.props.onShowMore(e, t.target);
            }),
            t
          );
        })(l.Component);
      (ja.propTypes = {}), (ja.defaultProps = (0, n.Z)({}, _a));
      var Wa = function (e) {
          var t = e.children;
          return l.createElement(
            "div",
            { className: "rbc-row-content-scroll-container" },
            t,
          );
        },
        Pa = function (e, t) {
          return e[0].range === t[0].range && e[0].events === t[0].events;
        };
      function Aa() {
        return (0, Nr.Z)(function (e) {
          for (
            var t = e.range,
              r = e.events,
              i = e.maxRows,
              a = e.minRows,
              o = e.accessors,
              s = e.localizer,
              l = Ea({ dateRange: t, localizer: s }),
              c = l.first,
              u = l.last,
              d = r.map(function (e) {
                return (function (e, t, r, n) {
                  var i = Ea({ dateRange: t, localizer: n }),
                    a = i.first,
                    o = i.last,
                    s = n.diff(a, o, "day"),
                    l = n.max(n.startOf(r.start(e), "day"), a),
                    c = n.min(n.ceil(r.end(e), "day"), o),
                    u = Wr(t, function (e) {
                      return n.isSameDate(e, l);
                    }),
                    d = n.diff(l, c, "day");
                  return (
                    (d = Math.min(d, s)),
                    {
                      event: e,
                      span: (d = Math.max(d - n.segmentOffset, 1)),
                      left: u + 1,
                      right: Math.max(u + d, 1),
                    }
                  );
                })(e, t, o, s);
              }),
              f = Ra(d, Math.max(i - 1, 1)),
              m = f.levels,
              p = f.extra;
            m.length < a;

          )
            m.push([]);
          return {
            first: c,
            last: u,
            levels: m,
            extra: p,
            range: t,
            slots: t.length,
            clone: function (t) {
              return Aa()((0, n.Z)({}, e, t));
            },
            getDateForSlot: function (e) {
              return t[e];
            },
            getSlotForDate: function (e) {
              return t.find(function (t) {
                return s.isSameDate(t, e);
              });
            },
            getEventsForSlot: function (e) {
              return d
                .filter(function (t) {
                  return (function (e, t) {
                    return e.left <= t && e.right >= t;
                  })(t, e);
                })
                .map(function (e) {
                  return e.event;
                });
            },
            continuesPrior: function (e) {
              return s.continuesPrior(o.start(e), c);
            },
            continuesAfter: function (e) {
              var t = o.start(e),
                r = o.end(e);
              return s.continuesAfter(t, r, u);
            },
          };
        }, Pa);
      }
      var ka = (function (e) {
        function t() {
          for (var t, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return (
            ((t = e.call.apply(e, [this].concat(n)) || this).handleSelectSlot =
              function (e) {
                var r = t.props,
                  n = r.range;
                (0, r.onSelectSlot)(n.slice(e.start, e.end + 1), e);
              }),
            (t.handleShowMore = function (e, r) {
              var n,
                i,
                a,
                o = t.props,
                s = o.range,
                l = o.onShowMore,
                c = t.slotMetrics(t.props),
                u = ((n = (0, re.findDOMNode)((0, te.Z)(t))),
                (i = ".rbc-row-bg"),
                Fr(n.querySelectorAll(i)))[0];
              u && (a = u.children[e - 1]),
                l(c.getEventsForSlot(e), s[e - 1], a, e, r);
            }),
            (t.createHeadingRef = function (e) {
              t.headingRow = e;
            }),
            (t.createEventRef = function (e) {
              t.eventRow = e;
            }),
            (t.getContainer = function () {
              var e = t.props.container;
              return e ? e() : (0, re.findDOMNode)((0, te.Z)(t));
            }),
            (t.renderHeadingCell = function (e, r) {
              var n = t.props,
                i = n.renderHeader,
                a = n.getNow,
                o = n.localizer;
              return i({
                date: e,
                key: "header_" + r,
                className: g(
                  "rbc-date-cell",
                  o.isSameDate(e, a()) && "rbc-now",
                ),
              });
            }),
            (t.renderDummy = function () {
              var e = t.props,
                r = e.className,
                n = e.range,
                i = e.renderHeader,
                a = e.showAllEvents;
              return l.createElement(
                "div",
                { className: r },
                l.createElement(
                  "div",
                  {
                    className: g(
                      "rbc-row-content",
                      a && "rbc-row-content-scrollable",
                    ),
                  },
                  i &&
                    l.createElement(
                      "div",
                      { className: "rbc-row", ref: t.createHeadingRef },
                      n.map(t.renderHeadingCell),
                    ),
                  l.createElement(
                    "div",
                    { className: "rbc-row", ref: t.createEventRef },
                    l.createElement(
                      "div",
                      { className: "rbc-row-segment" },
                      l.createElement(
                        "div",
                        { className: "rbc-event" },
                        l.createElement(
                          "div",
                          { className: "rbc-event-content" },
                          " ",
                        ),
                      ),
                    ),
                  ),
                ),
              );
            }),
            (t.slotMetrics = Aa()),
            t
          );
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.getRowLimit = function () {
            var e = Rr(this.eventRow),
              t = this.headingRow ? Rr(this.headingRow) : 0,
              r = Rr((0, re.findDOMNode)(this)) - t;
            return Math.max(Math.floor(r / e), 1);
          }),
          (r.render = function () {
            var e = this.props,
              t = e.date,
              r = e.rtl,
              i = e.range,
              a = e.className,
              o = e.selected,
              s = e.selectable,
              c = e.renderForMeasure,
              u = e.accessors,
              d = e.getters,
              f = e.components,
              m = e.getNow,
              p = e.renderHeader,
              y = e.onSelect,
              h = e.localizer,
              v = e.onSelectStart,
              b = e.onSelectEnd,
              w = e.onDoubleClick,
              B = e.onKeyPress,
              _ = e.resourceId,
              S = e.longPressThreshold,
              M = e.isAllDay,
              z = e.resizable,
              E = e.showAllEvents;
            if (c) return this.renderDummy();
            var R = this.slotMetrics(this.props),
              O = R.levels,
              F = R.extra,
              D = E ? Wa : Oi,
              T = f.weekWrapper,
              x = {
                selected: o,
                accessors: u,
                getters: d,
                localizer: h,
                components: f,
                onSelect: y,
                onDoubleClick: w,
                onKeyPress: B,
                resourceId: _,
                slotMetrics: R,
                resizable: z,
              };
            return l.createElement(
              "div",
              { className: a, role: "rowgroup" },
              l.createElement(Ba, {
                localizer: h,
                date: t,
                getNow: m,
                rtl: r,
                range: i,
                selectable: s,
                container: this.getContainer,
                getters: d,
                onSelectStart: v,
                onSelectEnd: b,
                onSelectSlot: this.handleSelectSlot,
                components: f,
                longPressThreshold: S,
                resourceId: _,
              }),
              l.createElement(
                "div",
                {
                  className: g(
                    "rbc-row-content",
                    E && "rbc-row-content-scrollable",
                  ),
                  role: "row",
                },
                p &&
                  l.createElement(
                    "div",
                    { className: "rbc-row ", ref: this.createHeadingRef },
                    i.map(this.renderHeadingCell),
                  ),
                l.createElement(
                  D,
                  null,
                  l.createElement(
                    T,
                    (0, n.Z)({ isAllDay: M }, x),
                    O.map(function (e, t) {
                      return l.createElement(
                        za,
                        (0, n.Z)({ key: t, segments: e }, x),
                      );
                    }),
                    !!F.length &&
                      l.createElement(
                        ja,
                        (0, n.Z)(
                          { segments: F, onShowMore: this.handleShowMore },
                          x,
                        ),
                      ),
                  ),
                ),
              ),
            );
          }),
          t
        );
      })(l.Component);
      (ka.propTypes = {}), (ka.defaultProps = { minRows: 0, maxRows: 1 / 0 });
      var Ia = function (e) {
        var t = e.label;
        return l.createElement(
          "span",
          { role: "columnheader", "aria-sort": "none" },
          t,
        );
      };
      Ia.propTypes = {};
      var Ca = function (e) {
        var t = e.label,
          r = e.drilldownView,
          n = e.onDrillDown;
        return r
          ? l.createElement("a", { href: "#", onClick: n, role: "cell" }, t)
          : l.createElement("span", null, t);
      };
      Ca.propTypes = {};
      var Na = ["date", "className"],
        Ua = (function (e) {
          function t() {
            for (
              var t, r = arguments.length, a = new Array(r), o = 0;
              o < r;
              o++
            )
              a[o] = arguments[o];
            return (
              ((t = e.call.apply(e, [this].concat(a)) || this).getContainer =
                function () {
                  return (0, re.findDOMNode)((0, te.Z)(t));
                }),
              (t.renderWeek = function (e, r) {
                var n = t.props,
                  i = n.events,
                  a = n.components,
                  o = n.selectable,
                  s = n.getNow,
                  c = n.selected,
                  u = n.date,
                  d = n.localizer,
                  f = n.longPressThreshold,
                  m = n.accessors,
                  p = n.getters,
                  y = n.showAllEvents,
                  h = t.state,
                  v = h.needLimitMeasure,
                  g = h.rowLimit,
                  b = (function (e, t, r, n, i) {
                    return e.filter(function (e) {
                      return Oa(e, t, r, n, i);
                    });
                  })([].concat(i), e[0], e[e.length - 1], m, d);
                return (
                  b.sort(function (e, t) {
                    return Da(e, t, m, d);
                  }),
                  l.createElement(ka, {
                    key: r,
                    ref: 0 === r ? t.slotRowRef : void 0,
                    container: t.getContainer,
                    className: "rbc-month-row",
                    getNow: s,
                    date: u,
                    range: e,
                    events: b,
                    maxRows: y ? 1 / 0 : g,
                    selected: c,
                    selectable: o,
                    components: a,
                    accessors: m,
                    getters: p,
                    localizer: d,
                    renderHeader: t.readerDateHeading,
                    renderForMeasure: v,
                    onShowMore: t.handleShowMore,
                    onSelect: t.handleSelectEvent,
                    onDoubleClick: t.handleDoubleClickEvent,
                    onKeyPress: t.handleKeyPressEvent,
                    onSelectSlot: t.handleSelectSlot,
                    longPressThreshold: f,
                    rtl: t.props.rtl,
                    resizable: t.props.resizable,
                    showAllEvents: y,
                  })
                );
              }),
              (t.readerDateHeading = function (e) {
                var r = e.date,
                  a = e.className,
                  o = (0, i.Z)(e, Na),
                  s = t.props,
                  c = s.date,
                  u = s.getDrilldownView,
                  d = s.localizer,
                  f = d.neq(r, c, "month"),
                  m = d.isSameDate(r, c),
                  p = u(r),
                  y = d.format(r, "dateFormat"),
                  h = t.props.components.dateHeader || Ca;
                return l.createElement(
                  "div",
                  (0, n.Z)({}, o, {
                    className: g(a, f && "rbc-off-range", m && "rbc-current"),
                    role: "cell",
                  }),
                  l.createElement(h, {
                    label: y,
                    date: r,
                    drilldownView: p,
                    isOffRange: f,
                    onDrillDown: function (e) {
                      return t.handleHeadingClick(r, p, e);
                    },
                  }),
                );
              }),
              (t.handleSelectSlot = function (e, r) {
                (t._pendingSelection = t._pendingSelection.concat(e)),
                  clearTimeout(t._selectTimer),
                  (t._selectTimer = setTimeout(function () {
                    return t.selectDates(r);
                  }));
              }),
              (t.handleHeadingClick = function (e, r, n) {
                n.preventDefault(),
                  t.clearSelection(),
                  Pi(t.props.onDrillDown, [e, r]);
              }),
              (t.handleSelectEvent = function () {
                t.clearSelection();
                for (
                  var e = arguments.length, r = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  r[n] = arguments[n];
                Pi(t.props.onSelectEvent, r);
              }),
              (t.handleDoubleClickEvent = function () {
                t.clearSelection();
                for (
                  var e = arguments.length, r = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  r[n] = arguments[n];
                Pi(t.props.onDoubleClickEvent, r);
              }),
              (t.handleKeyPressEvent = function () {
                t.clearSelection();
                for (
                  var e = arguments.length, r = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  r[n] = arguments[n];
                Pi(t.props.onKeyPressEvent, r);
              }),
              (t.handleShowMore = function (e, r, n, i, a) {
                var o = t.props,
                  s = o.popup,
                  l = o.onDrillDown,
                  c = o.onShowMore,
                  u = o.getDrilldownView,
                  d = o.doShowMoreDrillDown;
                if ((t.clearSelection(), s)) {
                  var f = Ee(n, (0, re.findDOMNode)((0, te.Z)(t)));
                  t.setState({
                    overlay: { date: r, events: e, position: f, target: a },
                  });
                } else d && Pi(l, [r, u(r) || ji.DAY]);
                Pi(c, [e, r, i]);
              }),
              (t.overlayDisplay = function () {
                t.setState({ overlay: null });
              }),
              (t._bgRows = []),
              (t._pendingSelection = []),
              (t.slotRowRef = l.createRef()),
              (t.state = { rowLimit: 5, needLimitMeasure: !0 }),
              t
            );
          }
          (0, a.Z)(t, e);
          var r = t.prototype;
          return (
            (r.UNSAFE_componentWillReceiveProps = function (e) {
              var t = e.date,
                r = this.props,
                n = r.date,
                i = r.localizer;
              this.setState({ needLimitMeasure: i.neq(t, n, "month") });
            }),
            (r.componentDidMount = function () {
              var e,
                t = this;
              this.state.needLimitMeasure && this.measureRowLimit(this.props),
                window.addEventListener(
                  "resize",
                  (this._resizeListener = function () {
                    e ||
                      je(function () {
                        (e = !1), t.setState({ needLimitMeasure: !0 });
                      });
                  }),
                  !1,
                );
            }),
            (r.componentDidUpdate = function () {
              this.state.needLimitMeasure && this.measureRowLimit(this.props);
            }),
            (r.componentWillUnmount = function () {
              window.removeEventListener("resize", this._resizeListener, !1);
            }),
            (r.render = function () {
              var e = this.props,
                t = e.date,
                r = e.localizer,
                n = e.className,
                i = r.visibleDays(t, r),
                a = de(i, 7);
              return (
                (this._weekCount = a.length),
                l.createElement(
                  "div",
                  {
                    className: g("rbc-month-view", n),
                    role: "table",
                    "aria-label": "Month View",
                  },
                  l.createElement(
                    "div",
                    { className: "rbc-row rbc-month-header", role: "row" },
                    this.renderHeaders(a[0]),
                  ),
                  a.map(this.renderWeek),
                  this.props.popup && this.renderOverlay(),
                )
              );
            }),
            (r.renderHeaders = function (e) {
              var t = this.props,
                r = t.localizer,
                n = t.components,
                i = e[0],
                a = e[e.length - 1],
                o = n.header || Ia;
              return r.range(i, a, "day").map(function (e, t) {
                return l.createElement(
                  "div",
                  { key: "header_" + t, className: "rbc-header" },
                  l.createElement(o, {
                    date: e,
                    localizer: r,
                    label: r.format(e, "weekdayFormat"),
                  }),
                );
              });
            }),
            (r.renderOverlay = function () {
              var e = this,
                t = (this.state && this.state.overlay) || {},
                r = this.props,
                i = r.accessors,
                a = r.localizer,
                o = r.components,
                s = r.getters,
                c = r.selected,
                u = r.popupOffset;
              return l.createElement(
                Er,
                {
                  rootClose: !0,
                  placement: "bottom",
                  show: !!t.position,
                  onHide: function () {
                    return e.setState({ overlay: null });
                  },
                  target: function () {
                    return t.target;
                  },
                },
                function (r) {
                  var d = r.props;
                  return l.createElement(
                    fa,
                    (0, n.Z)({}, d, {
                      popupOffset: u,
                      accessors: i,
                      getters: s,
                      selected: c,
                      components: o,
                      localizer: a,
                      position: t.position,
                      show: e.overlayDisplay,
                      events: t.events,
                      slotStart: t.date,
                      slotEnd: t.end,
                      onSelect: e.handleSelectEvent,
                      onDoubleClick: e.handleDoubleClickEvent,
                      onKeyPress: e.handleKeyPressEvent,
                      handleDragStart: e.props.handleDragStart,
                    }),
                  );
                },
              );
            }),
            (r.measureRowLimit = function () {
              this.setState({
                needLimitMeasure: !1,
                rowLimit: this.slotRowRef.current.getRowLimit(),
              });
            }),
            (r.selectDates = function (e) {
              var t = this._pendingSelection.slice();
              (this._pendingSelection = []),
                t.sort(function (e, t) {
                  return +e - +t;
                });
              var r = new Date(t[0]),
                n = new Date(t[t.length - 1]);
              n.setDate(t[t.length - 1].getDate() + 1),
                Pi(this.props.onSelectSlot, {
                  slots: t,
                  start: r,
                  end: n,
                  action: e.action,
                  bounds: e.bounds,
                  box: e.box,
                });
            }),
            (r.clearSelection = function () {
              clearTimeout(this._selectTimer), (this._pendingSelection = []);
            }),
            t
          );
        })(l.Component);
      (Ua.propTypes = {}),
        (Ua.range = function (e, t) {
          var r = t.localizer;
          return {
            start: r.firstVisibleDay(e, r),
            end: r.lastVisibleDay(e, r),
          };
        }),
        (Ua.navigate = function (e, t, r) {
          var n = r.localizer;
          switch (t) {
            case Fi:
              return n.add(e, -1, "month");
            case Di:
              return n.add(e, 1, "month");
            default:
              return e;
          }
        }),
        (Ua.title = function (e, t) {
          return t.localizer.format(e, "monthHeaderFormat");
        });
      var Za = function (e) {
        var t = e.min,
          r = e.max,
          n = e.step,
          i = e.slots,
          a = e.localizer;
        return (
          +a.startOf(t, "minutes") +
          ("" + +a.startOf(r, "minutes")) +
          n +
          "-" +
          i
        );
      };
      function La(e) {
        for (
          var t = e.min,
            r = e.max,
            n = e.step,
            i = e.timeslots,
            a = e.localizer,
            o = Za({ start: t, end: r, step: n, timeslots: i, localizer: a }),
            s = 1 + a.getTotalMin(t, r),
            l = a.getMinutesFromMidnight(t),
            c = Math.ceil((s - 1) / (n * i)),
            u = c * i,
            d = new Array(c),
            f = new Array(u),
            m = 0;
          m < c;
          m++
        ) {
          d[m] = new Array(i);
          for (var p = 0; p < i; p++) {
            var y = m * i + p,
              h = y * n;
            f[y] = d[m][p] = a.getSlotDate(t, l, h);
          }
        }
        var v = f.length * n;
        function g(e) {
          var r = a.diff(t, e, "minutes") + a.getDstOffset(t, e);
          return Math.min(r, s);
        }
        return (
          f.push(a.getSlotDate(t, l, v)),
          {
            groups: d,
            update: function (e) {
              return Za(e) !== o ? La(e) : this;
            },
            dateIsInGroup: function (e, t) {
              var n = d[t + 1];
              return a.inRange(e, d[t][0], n ? n[0] : r, "minutes");
            },
            nextSlot: function (e) {
              var t = f[Math.min(f.indexOf(e) + 1, f.length - 1)];
              return t === e && (t = a.add(e, n, "minutes")), t;
            },
            closestSlotToPosition: function (e) {
              var t = Math.min(f.length - 1, Math.max(0, Math.floor(e * u)));
              return f[t];
            },
            closestSlotFromPoint: function (e, t) {
              var r = Math.abs(t.top - t.bottom);
              return this.closestSlotToPosition((e.y - t.top) / r);
            },
            closestSlotFromDate: function (e, r) {
              if ((void 0 === r && (r = 0), a.lt(e, t, "minutes"))) return f[0];
              var i = a.diff(t, e, "minutes");
              return f[(i - (i % n)) / n + r];
            },
            startsBeforeDay: function (e) {
              return a.lt(e, t, "day");
            },
            startsAfterDay: function (e) {
              return a.gt(e, r, "day");
            },
            startsBefore: function (e) {
              return a.lt(a.merge(t, e), t, "minutes");
            },
            startsAfter: function (e) {
              return a.gt(a.merge(r, e), r, "minutes");
            },
            getRange: function (e, i, o, s) {
              o || (e = a.min(r, a.max(t, e))),
                s || (i = a.min(r, a.max(t, i)));
              var l = g(e),
                c = g(i),
                d =
                  c > n * u && !a.eq(r, i)
                    ? ((l - n) / (n * u)) * 100
                    : (l / (n * u)) * 100;
              return {
                top: d,
                height: (c / (n * u)) * 100 - d,
                start: g(e),
                startDate: e,
                end: g(i),
                endDate: i,
              };
            },
            getCurrentTimePosition: function (e) {
              return (g(e) / (n * u)) * 100;
            },
          }
        );
      }
      var Xa = (function () {
        function e(e, t) {
          var r = t.accessors,
            n = t.slotMetrics.getRange(r.start(e), r.end(e)),
            i = n.start,
            a = n.startDate,
            o = n.end,
            s = n.endDate,
            l = n.top,
            c = n.height;
          (this.start = i),
            (this.end = o),
            (this.startMs = +a),
            (this.endMs = +s),
            (this.top = l),
            (this.height = c),
            (this.data = e);
        }
        return (
          (0, Ur.Z)(e, [
            {
              key: "_width",
              get: function () {
                if (this.rows) {
                  var e =
                    this.rows.reduce(function (e, t) {
                      return Math.max(e, t.leaves.length + 1);
                    }, 0) + 1;
                  return 100 / e;
                }
                var t = 100 - this.container._width;
                return this.leaves
                  ? t / (this.leaves.length + 1)
                  : this.row._width;
              },
            },
            {
              key: "width",
              get: function () {
                var e = this._width,
                  t = Math.min(100, 1.7 * this._width);
                if (this.rows) return t;
                if (this.leaves) return this.leaves.length > 0 ? t : e;
                var r = this.row.leaves;
                return r.indexOf(this) === r.length - 1 ? e : t;
              },
            },
            {
              key: "xOffset",
              get: function () {
                if (this.rows) return 0;
                if (this.leaves) return this.container._width;
                var e = this.row,
                  t = e.leaves,
                  r = e.xOffset,
                  n = e._width;
                return r + (t.indexOf(this) + 1) * n;
              },
            },
          ]),
          e
        );
      })();
      function Ha(e, t, r) {
        return (
          Math.abs(t.start - e.start) < r ||
          (t.start > e.start && t.start < e.end)
        );
      }
      function qa(e) {
        for (
          var t = e.events,
            r = e.minimumStartDifference,
            n = e.slotMetrics,
            i = e.accessors,
            a = (function (e) {
              for (
                var t = sn(e, [
                    "startMs",
                    function (e) {
                      return -e.endMs;
                    },
                  ]),
                  r = [];
                t.length > 0;

              ) {
                var n = t.shift();
                r.push(n);
                for (var i = 0; i < t.length; i++) {
                  var a = t[i];
                  if (!(n.endMs > a.startMs)) {
                    if (i > 0) {
                      var o = t.splice(i, 1)[0];
                      r.push(o);
                    }
                    break;
                  }
                }
              }
              return r;
            })(
              t.map(function (e) {
                return new Xa(e, { slotMetrics: n, accessors: i });
              }),
            ),
            o = [],
            s = function (e) {
              var t = a[e],
                n = o.find(function (e) {
                  return e.end > t.start || Math.abs(t.start - e.start) < r;
                });
              if (!n) return (t.rows = []), o.push(t), "continue";
              t.container = n;
              for (var i = null, s = n.rows.length - 1; !i && s >= 0; s--)
                Ha(n.rows[s], t, r) && (i = n.rows[s]);
              i
                ? (i.leaves.push(t), (t.row = i))
                : ((t.leaves = []), n.rows.push(t));
            },
            l = 0;
          l < a.length;
          l++
        )
          s(l);
        return a.map(function (e) {
          return {
            event: e.data,
            style: {
              top: e.top,
              height: e.height,
              width: e.width,
              xOffset: Math.max(0, e.xOffset),
            },
          };
        });
      }
      function Ga(e, t, r) {
        for (var n = 0; n < e.friends.length; ++n)
          if (!(r.indexOf(e.friends[n]) > -1)) {
            (t = t > e.friends[n].idx ? t : e.friends[n].idx),
              r.push(e.friends[n]);
            var i = Ga(e.friends[n], t, r);
            t = t > i ? t : i;
          }
        return t;
      }
      var Va = {
        overlap: qa,
        "no-overlap": function (e) {
          var t = qa({
            events: e.events,
            minimumStartDifference: e.minimumStartDifference,
            slotMetrics: e.slotMetrics,
            accessors: e.accessors,
          });
          t.sort(function (e, t) {
            return (
              (e = e.style),
              (t = t.style),
              e.top !== t.top
                ? e.top > t.top
                  ? 1
                  : -1
                : e.top + e.height < t.top + t.height
                ? 1
                : -1
            );
          });
          for (var r = 0; r < t.length; ++r)
            (t[r].friends = []),
              delete t[r].style.left,
              delete t[r].style.left,
              delete t[r].idx,
              delete t[r].size;
          for (var n = 0; n < t.length - 1; ++n)
            for (
              var i = t[n],
                a = i.style.top,
                o = i.style.top + i.style.height,
                s = n + 1;
              s < t.length;
              ++s
            ) {
              var l = t[s],
                c = l.style.top,
                u = l.style.top + l.style.height;
              ((c <= a && a < u) || (a <= c && c < o)) &&
                (i.friends.push(l), l.friends.push(i));
            }
          for (var d = 0; d < t.length; ++d) {
            for (var f = t[d], m = [], p = 0; p < 100; ++p) m.push(1);
            for (var y = 0; y < f.friends.length; ++y)
              void 0 !== f.friends[y].idx && (m[f.friends[y].idx] = 0);
            f.idx = m.indexOf(1);
          }
          for (var h = 0; h < t.length; ++h) {
            var v;
            if (!t[h].size) {
              var g = [];
              (v = 100 / (Ga(t[h], 0, g) + 1)), (t[h].size = v);
              for (var b = 0; b < g.length; ++b) g[b].size = v;
            }
          }
          for (var w = 0; w < t.length; ++w) {
            var B = t[w];
            B.style.left = B.idx * B.size;
            for (var _ = 0, S = 0; S < B.friends.length; ++S) {
              var M = B.friends[S].idx;
              _ = _ > M ? _ : M;
            }
            _ <= B.idx && (B.size = 100 - B.idx * B.size);
            var z = 0 === B.idx ? 0 : 3;
            (B.style.width = "calc(" + B.size + "% - " + z + "px)"),
              (B.style.height = "calc(" + B.style.height + "% - 2px)"),
              (B.style.xOffset = "calc(" + B.style.left + "% + " + z + "px)");
          }
          return t;
        },
      };
      var Ka = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, a.Z)(t, e),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.renderSlot,
              r = e.resource,
              i = e.group,
              a = e.getters,
              o = e.components,
              s = (o = void 0 === o ? {} : o).timeSlotWrapper,
              c = void 0 === s ? Oi : s,
              u = a ? a.slotGroupProp() : {};
            return l.createElement(
              "div",
              (0, n.Z)({ className: "rbc-timeslot-group" }, u),
              i.map(function (e, i) {
                var o = a ? a.slotProp(e, r) : {};
                return l.createElement(
                  c,
                  { key: i, value: e, resource: r },
                  l.createElement(
                    "div",
                    (0, n.Z)({}, o, {
                      className: g("rbc-time-slot", o.className),
                    }),
                    t && t(e, i),
                  ),
                );
              }),
            );
          }),
          t
        );
      })(l.Component);
      function Ya(e) {
        return "string" == typeof e ? e : e + "%";
      }
      function $a(e) {
        var t,
          r,
          i = e.style,
          a = e.className,
          o = e.event,
          s = e.accessors,
          c = e.rtl,
          u = e.selected,
          d = e.label,
          f = e.continuesPrior,
          m = e.continuesAfter,
          p = e.getters,
          y = e.onClick,
          h = e.onDoubleClick,
          v = e.isBackgroundEvent,
          b = e.onKeyPress,
          w = e.components,
          B = w.event,
          _ = w.eventWrapper,
          S = s.title(o),
          M = s.tooltip(o),
          z = s.end(o),
          E = s.start(o),
          R = p.eventProp(o, E, z, u),
          O = i.height,
          F = i.top,
          D = i.width,
          T = i.xOffset,
          x = [
            l.createElement(
              "div",
              { key: "1", className: "rbc-event-label" },
              d,
            ),
            l.createElement(
              "div",
              { key: "2", className: "rbc-event-content" },
              B ? l.createElement(B, { event: o, title: S }) : S,
            ),
          ],
          j = v
            ? (0, n.Z)(
                {},
                R.style,
                (((t = {
                  top: Ya(F),
                  height: Ya(O),
                  width: "calc(" + D + " + 10px)",
                })[c ? "right" : "left"] = Ya(Math.max(0, T))),
                t),
              )
            : (0, n.Z)(
                {},
                R.style,
                (((r = { top: Ya(F), width: Ya(D), height: Ya(O) })[
                  c ? "right" : "left"
                ] = Ya(T)),
                r),
              );
        return l.createElement(
          _,
          (0, n.Z)({ type: "time" }, e),
          l.createElement(
            "div",
            {
              onClick: y,
              onDoubleClick: h,
              style: j,
              onKeyPress: b,
              title: M ? ("string" == typeof d ? d + ": " : "") + M : void 0,
              className: g(
                v ? "rbc-background-event" : "rbc-event",
                a,
                R.className,
                {
                  "rbc-selected": u,
                  "rbc-event-continues-earlier": f,
                  "rbc-event-continues-later": m,
                },
              ),
            },
            x,
          ),
        );
      }
      Ka.propTypes = {};
      var Ja = function (e) {
          var t = e.children,
            r = e.className,
            n = e.style;
          return l.createElement("div", { className: r, style: n }, t);
        },
        Qa = ["dayProp"],
        eo = ["eventContainerWrapper"],
        to = (function (e) {
          function t() {
            for (
              var t, r = arguments.length, i = new Array(r), a = 0;
              a < r;
              a++
            )
              i[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this).state = {
                selecting: !1,
                timeIndicatorPosition: null,
              }),
              (t.intervalTriggered = !1),
              (t.renderEvents = function (e) {
                var r = e.events,
                  n = e.isBackgroundEvent,
                  i = t.props,
                  a = i.rtl,
                  o = i.selected,
                  s = i.accessors,
                  c = i.localizer,
                  u = i.getters,
                  d = i.components,
                  f = i.step,
                  m = i.timeslots,
                  p = i.dayLayoutAlgorithm,
                  y = i.resizable,
                  h = (0, te.Z)(t).slotMetrics,
                  v = c.messages,
                  g = (function (e) {
                    e.events,
                      e.minimumStartDifference,
                      e.slotMetrics,
                      e.accessors;
                    var t,
                      r = e.dayLayoutAlgorithm,
                      n = r;
                    return (
                      r in Va && (n = Va[r]),
                      (t = n) && t.constructor && t.call && t.apply
                        ? n.apply(this, arguments)
                        : []
                    );
                  })({
                    events: r,
                    accessors: s,
                    slotMetrics: h,
                    minimumStartDifference: Math.ceil((f * m) / 2),
                    dayLayoutAlgorithm: p,
                  });
                return g.map(function (e, r) {
                  var i,
                    f = e.event,
                    m = e.style,
                    p = s.end(f),
                    g = s.start(f),
                    b = "eventTimeRangeFormat",
                    w = h.startsBeforeDay(g),
                    B = h.startsAfterDay(p);
                  w
                    ? (b = "eventTimeRangeEndFormat")
                    : B && (b = "eventTimeRangeStartFormat"),
                    (i = w && B ? v.allDay : c.format({ start: g, end: p }, b));
                  var _ = w || h.startsBefore(g),
                    S = B || h.startsAfter(p);
                  return l.createElement($a, {
                    style: m,
                    event: f,
                    label: i,
                    key: "evt_" + r,
                    getters: u,
                    rtl: a,
                    components: d,
                    continuesPrior: _,
                    continuesAfter: S,
                    accessors: s,
                    selected: la(f, o),
                    onClick: function (e) {
                      return t._select(f, e);
                    },
                    onDoubleClick: function (e) {
                      return t._doubleClick(f, e);
                    },
                    isBackgroundEvent: n,
                    onKeyPress: function (e) {
                      return t._keyPress(f, e);
                    },
                    resizable: y,
                  });
                });
              }),
              (t._selectable = function () {
                var e = (0, re.findDOMNode)((0, te.Z)(t)),
                  r = t.props,
                  i = r.longPressThreshold,
                  a = r.localizer,
                  o = (t._selector = new va(
                    function () {
                      return (0, re.findDOMNode)((0, te.Z)(t));
                    },
                    { longPressThreshold: i },
                  )),
                  s = function (e) {
                    var r = t.props.onSelecting,
                      n = t.state || {},
                      i = l(e),
                      o = i.startDate,
                      s = i.endDate;
                    (r &&
                      ((a.eq(n.startDate, o, "minutes") &&
                        a.eq(n.endDate, s, "minutes")) ||
                        !1 ===
                          r({
                            start: o,
                            end: s,
                            resourceId: t.props.resource,
                          }))) ||
                      (t.state.start === i.start &&
                        t.state.end === i.end &&
                        t.state.selecting === i.selecting) ||
                      t.setState(i);
                  },
                  l = function (r) {
                    var i = t.slotMetrics.closestSlotFromPoint(r, ba(e));
                    t.state.selecting || (t._initialSlot = i);
                    var o = t._initialSlot;
                    a.lte(o, i)
                      ? (i = t.slotMetrics.nextSlot(i))
                      : a.gt(o, i) && (o = t.slotMetrics.nextSlot(o));
                    var s = t.slotMetrics.getRange(a.min(o, i), a.max(o, i));
                    return (0, n.Z)({}, s, {
                      selecting: !0,
                      top: s.top + "%",
                      height: s.height + "%",
                    });
                  },
                  c = function (e, r) {
                    if (!ya((0, re.findDOMNode)((0, te.Z)(t)), e)) {
                      var n = l(e),
                        i = n.startDate,
                        a = n.endDate;
                      t._selectSlot({
                        startDate: i,
                        endDate: a,
                        action: r,
                        box: e,
                      });
                    }
                    t.setState({ selecting: !1 });
                  };
                o.on("selecting", s),
                  o.on("selectStart", s),
                  o.on("beforeSelect", function (e) {
                    if ("ignoreEvents" === t.props.selectable)
                      return !ya((0, re.findDOMNode)((0, te.Z)(t)), e);
                  }),
                  o.on("click", function (e) {
                    return c(e, "click");
                  }),
                  o.on("doubleClick", function (e) {
                    return c(e, "doubleClick");
                  }),
                  o.on("select", function (e) {
                    t.state.selecting &&
                      (t._selectSlot(
                        (0, n.Z)({}, t.state, { action: "select", bounds: e }),
                      ),
                      t.setState({ selecting: !1 }));
                  }),
                  o.on("reset", function () {
                    t.state.selecting && t.setState({ selecting: !1 });
                  });
              }),
              (t._teardownSelectable = function () {
                t._selector && (t._selector.teardown(), (t._selector = null));
              }),
              (t._selectSlot = function (e) {
                for (
                  var r = e.startDate,
                    n = e.endDate,
                    i = e.action,
                    a = e.bounds,
                    o = e.box,
                    s = r,
                    l = [];
                  t.props.localizer.lte(s, n);

                )
                  l.push(s), (s = new Date(+s + 60 * t.props.step * 1e3));
                Pi(t.props.onSelectSlot, {
                  slots: l,
                  start: r,
                  end: n,
                  resourceId: t.props.resource,
                  action: i,
                  bounds: a,
                  box: o,
                });
              }),
              (t._select = function () {
                for (
                  var e = arguments.length, r = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  r[n] = arguments[n];
                Pi(t.props.onSelectEvent, r);
              }),
              (t._doubleClick = function () {
                for (
                  var e = arguments.length, r = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  r[n] = arguments[n];
                Pi(t.props.onDoubleClickEvent, r);
              }),
              (t._keyPress = function () {
                for (
                  var e = arguments.length, r = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  r[n] = arguments[n];
                Pi(t.props.onKeyPressEvent, r);
              }),
              (t.slotMetrics = La(t.props)),
              t
            );
          }
          (0, a.Z)(t, e);
          var r = t.prototype;
          return (
            (r.componentDidMount = function () {
              this.props.selectable && this._selectable(),
                this.props.isNow &&
                  this.setTimeIndicatorPositionUpdateInterval();
            }),
            (r.componentWillUnmount = function () {
              this._teardownSelectable(), this.clearTimeIndicatorInterval();
            }),
            (r.UNSAFE_componentWillReceiveProps = function (e) {
              e.selectable && !this.props.selectable && this._selectable(),
                !e.selectable &&
                  this.props.selectable &&
                  this._teardownSelectable(),
                (this.slotMetrics = this.slotMetrics.update(e));
            }),
            (r.componentDidUpdate = function (e, t) {
              var r = this.props,
                n = r.getNow,
                i = r.isNow,
                a = r.localizer,
                o = r.date,
                s = r.min,
                l = r.max,
                c = a.neq(e.getNow(), n(), "minutes");
              if (e.isNow !== i || c) {
                if ((this.clearTimeIndicatorInterval(), i)) {
                  var u =
                    !c &&
                    a.eq(e.date, o, "minutes") &&
                    t.timeIndicatorPosition ===
                      this.state.timeIndicatorPosition;
                  this.setTimeIndicatorPositionUpdateInterval(u);
                }
              } else
                i &&
                  (a.neq(e.min, s, "minutes") || a.neq(e.max, l, "minutes")) &&
                  this.positionTimeIndicator();
            }),
            (r.setTimeIndicatorPositionUpdateInterval = function (e) {
              var t = this;
              void 0 === e && (e = !1),
                this.intervalTriggered || e || this.positionTimeIndicator(),
                (this._timeIndicatorTimeout = window.setTimeout(function () {
                  (t.intervalTriggered = !0),
                    t.positionTimeIndicator(),
                    t.setTimeIndicatorPositionUpdateInterval();
                }, 6e4));
            }),
            (r.clearTimeIndicatorInterval = function () {
              (this.intervalTriggered = !1),
                window.clearTimeout(this._timeIndicatorTimeout);
            }),
            (r.positionTimeIndicator = function () {
              var e = this.props,
                t = e.min,
                r = e.max,
                n = (0, e.getNow)();
              if (n >= t && n <= r) {
                var i = this.slotMetrics.getCurrentTimePosition(n);
                (this.intervalTriggered = !0),
                  this.setState({ timeIndicatorPosition: i });
              } else this.clearTimeIndicatorInterval();
            }),
            (r.render = function () {
              var e = this.props,
                t = e.date,
                r = e.max,
                n = e.rtl,
                a = e.isNow,
                o = e.resource,
                s = e.accessors,
                c = e.localizer,
                u = e.getters,
                d = u.dayProp,
                f = (0, i.Z)(u, Qa),
                m = e.components,
                p = m.eventContainerWrapper,
                y = (0, i.Z)(m, eo),
                h = this.slotMetrics,
                v = this.state,
                b = v.selecting,
                w = v.top,
                B = v.height,
                _ = { start: v.startDate, end: v.endDate },
                S = d(r),
                M = S.className,
                z = S.style,
                E = y.dayColumnWrapper || Ja;
              return l.createElement(
                E,
                {
                  date: t,
                  style: z,
                  className: g(
                    M,
                    "rbc-day-slot",
                    "rbc-time-column",
                    a && "rbc-now",
                    a && "rbc-today",
                    b && "rbc-slot-selecting",
                  ),
                },
                h.groups.map(function (e, t) {
                  return l.createElement(Ka, {
                    key: t,
                    group: e,
                    resource: o,
                    getters: f,
                    components: y,
                  });
                }),
                l.createElement(
                  p,
                  {
                    localizer: c,
                    resource: o,
                    accessors: s,
                    getters: f,
                    components: y,
                    slotMetrics: h,
                  },
                  l.createElement(
                    "div",
                    { className: g("rbc-events-container", n && "rtl") },
                    this.renderEvents({
                      events: this.props.backgroundEvents,
                      isBackgroundEvent: !0,
                    }),
                    this.renderEvents({ events: this.props.events }),
                  ),
                ),
                b &&
                  l.createElement(
                    "div",
                    {
                      className: "rbc-slot-selection",
                      style: { top: w, height: B },
                    },
                    l.createElement(
                      "span",
                      null,
                      c.format(_, "selectRangeFormat"),
                    ),
                  ),
                a &&
                  this.intervalTriggered &&
                  l.createElement("div", {
                    className: "rbc-current-time-indicator",
                    style: { top: this.state.timeIndicatorPosition + "%" },
                  }),
              );
            }),
            t
          );
        })(l.Component);
      function ro(e) {
        var t = e.min,
          r = e.max,
          n = e.localizer;
        return n.getTimezoneOffset(t) !== n.getTimezoneOffset(r)
          ? { start: n.add(t, -1, "day"), end: n.add(r, -1, "day") }
          : { start: t, end: r };
      }
      (to.propTypes = {}),
        (to.defaultProps = { dragThroughEvents: !0, timeslots: 2 });
      var no = (function (e) {
        function t() {
          for (var t, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          (t = e.call.apply(e, [this].concat(n)) || this).renderSlot =
            function (e, r) {
              if (0 !== r) return null;
              var n = t.props,
                i = n.localizer,
                a = n.getNow,
                o = t.slotMetrics.dateIsInGroup(a(), r);
              return l.createElement(
                "span",
                { className: g("rbc-label", o && "rbc-now") },
                i.format(e, "timeGutterFormat"),
              );
            };
          var a = t.props,
            o = a.min,
            s = a.max,
            c = a.timeslots,
            u = a.step,
            d = a.localizer,
            f = ro({ min: o, max: s, localizer: d }),
            m = f.start,
            p = f.end;
          return (
            (t.slotMetrics = La({
              min: m,
              max: p,
              timeslots: c,
              step: u,
              localizer: d,
            })),
            t
          );
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.UNSAFE_componentWillReceiveProps = function (e) {
            var t = ro({ min: e.min, max: e.max, localizer: e.localizer }),
              r = t.start,
              i = t.end;
            this.slotMetrics = this.slotMetrics.update(
              (0, n.Z)({}, e, { min: r, max: i }),
            );
          }),
          (r.render = function () {
            var e = this,
              t = this.props,
              r = t.resource,
              n = t.components,
              i = t.getters;
            return l.createElement(
              "div",
              { className: "rbc-time-gutter rbc-time-column" },
              this.slotMetrics.groups.map(function (t, a) {
                return l.createElement(Ka, {
                  key: a,
                  group: t,
                  resource: r,
                  components: n,
                  renderSlot: e.renderSlot,
                  getters: i,
                });
              }),
            );
          }),
          t
        );
      })(l.Component);
      no.propTypes = {};
      var io = function (e) {
        var t = e.label;
        return l.createElement(l.Fragment, null, t);
      };
      io.propTypes = {};
      var ao = (function (e) {
        function t() {
          for (var t, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return (
            ((t = e.call.apply(e, [this].concat(n)) || this).handleHeaderClick =
              function (e, r, n) {
                n.preventDefault(), Pi(t.props.onDrillDown, [e, r]);
              }),
            (t.renderRow = function (e) {
              var r = t.props,
                n = r.events,
                i = r.rtl,
                a = r.selectable,
                o = r.getNow,
                s = r.range,
                c = r.getters,
                u = r.localizer,
                d = r.accessors,
                f = r.components,
                m = r.resizable,
                p = d.resourceId(e),
                y = e
                  ? n.filter(function (e) {
                      return d.resource(e) === p;
                    })
                  : n;
              return l.createElement(ka, {
                isAllDay: !0,
                rtl: i,
                getNow: o,
                minRows: 2,
                range: s,
                events: y,
                resourceId: p,
                className: "rbc-allday-cell",
                selectable: a,
                selected: t.props.selected,
                components: f,
                accessors: d,
                getters: c,
                localizer: u,
                onSelect: t.props.onSelectEvent,
                onDoubleClick: t.props.onDoubleClickEvent,
                onKeyPress: t.props.onKeyPressEvent,
                onSelectSlot: t.props.onSelectSlot,
                longPressThreshold: t.props.longPressThreshold,
                resizable: m,
              });
            }),
            t
          );
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.renderHeaderCells = function (e) {
            var t = this,
              r = this.props,
              n = r.localizer,
              i = r.getDrilldownView,
              a = r.getNow,
              o = r.getters.dayProp,
              s = r.components.header,
              c = void 0 === s ? Ia : s,
              u = a();
            return e.map(function (e, r) {
              var a = i(e),
                s = n.format(e, "dayFormat"),
                d = o(e),
                f = d.className,
                m = d.style,
                p = l.createElement(c, { date: e, label: s, localizer: n });
              return l.createElement(
                "div",
                {
                  key: r,
                  style: m,
                  className: g(
                    "rbc-header",
                    f,
                    n.isSameDate(e, u) && "rbc-today",
                  ),
                },
                a
                  ? l.createElement(
                      "a",
                      {
                        href: "#",
                        onClick: function (r) {
                          return t.handleHeaderClick(e, a, r);
                        },
                      },
                      p,
                    )
                  : l.createElement("span", null, p),
              );
            });
          }),
          (r.render = function () {
            var e = this,
              t = this.props,
              r = t.width,
              n = t.rtl,
              i = t.resources,
              a = t.range,
              o = t.events,
              s = t.getNow,
              c = t.accessors,
              u = t.selectable,
              d = t.components,
              f = t.getters,
              m = t.scrollRef,
              p = t.localizer,
              y = t.isOverflowing,
              h = t.components,
              v = h.timeGutterHeader,
              b = h.resourceHeader,
              w = void 0 === b ? io : b,
              B = t.resizable,
              _ = {};
            y && (_[n ? "marginLeft" : "marginRight"] = un() + "px");
            var S = i.groupEvents(o);
            return l.createElement(
              "div",
              {
                style: _,
                ref: m,
                className: g("rbc-time-header", y && "rbc-overflowing"),
              },
              l.createElement(
                "div",
                {
                  className: "rbc-label rbc-time-header-gutter",
                  style: { width: r, minWidth: r, maxWidth: r },
                },
                v && l.createElement(v, null),
              ),
              i.map(function (t, r) {
                var i = t[0],
                  o = t[1];
                return l.createElement(
                  "div",
                  { className: "rbc-time-header-content", key: i || r },
                  o &&
                    l.createElement(
                      "div",
                      {
                        className: "rbc-row rbc-row-resource",
                        key: "resource_" + r,
                      },
                      l.createElement(
                        "div",
                        { className: "rbc-header" },
                        l.createElement(w, {
                          index: r,
                          label: c.resourceTitle(o),
                          resource: o,
                        }),
                      ),
                    ),
                  l.createElement(
                    "div",
                    {
                      className:
                        "rbc-row rbc-time-header-cell" +
                        (a.length <= 1
                          ? " rbc-time-header-cell-single-day"
                          : ""),
                    },
                    e.renderHeaderCells(a),
                  ),
                  l.createElement(ka, {
                    isAllDay: !0,
                    rtl: n,
                    getNow: s,
                    minRows: 2,
                    range: a,
                    events: S.get(i) || [],
                    resourceId: o && i,
                    className: "rbc-allday-cell",
                    selectable: u,
                    selected: e.props.selected,
                    components: d,
                    accessors: c,
                    getters: f,
                    localizer: p,
                    onSelect: e.props.onSelectEvent,
                    onDoubleClick: e.props.onDoubleClickEvent,
                    onKeyPress: e.props.onKeyPressEvent,
                    onSelectSlot: e.props.onSelectSlot,
                    longPressThreshold: e.props.longPressThreshold,
                    resizable: B,
                  }),
                );
              }),
            );
          }),
          t
        );
      })(l.Component);
      ao.propTypes = {};
      var oo = {};
      var so = (function (e) {
        function t(t) {
          var r;
          return (
            ((r = e.call(this, t) || this).handleScroll = function (e) {
              r.scrollRef.current &&
                (r.scrollRef.current.scrollLeft = e.target.scrollLeft);
            }),
            (r.handleResize = function () {
              xe(r.rafHandle), (r.rafHandle = je(r.checkOverflow));
            }),
            (r.gutterRef = function (e) {
              r.gutter = e && (0, re.findDOMNode)(e);
            }),
            (r.handleSelectAlldayEvent = function () {
              r.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Pi(r.props.onSelectEvent, t);
            }),
            (r.handleSelectAllDaySlot = function (e, t) {
              var n = r.props.onSelectSlot,
                i = new Date(e[0]),
                a = new Date(e[e.length - 1]);
              a.setDate(e[e.length - 1].getDate() + 1),
                Pi(n, {
                  slots: e,
                  start: i,
                  end: a,
                  action: t.action,
                  resourceId: t.resourceId,
                });
            }),
            (r.checkOverflow = function () {
              if (!r._updatingOverflow) {
                var e = r.contentRef.current,
                  t = e.scrollHeight > e.clientHeight;
                r.state.isOverflowing !== t &&
                  ((r._updatingOverflow = !0),
                  r.setState({ isOverflowing: t }, function () {
                    r._updatingOverflow = !1;
                  }));
              }
            }),
            (r.memoizedResources = (0, Nr.Z)(function (e, t) {
              return (function (e, t) {
                return {
                  map: function (r) {
                    return e
                      ? e.map(function (e, n) {
                          return r([t.resourceId(e), e], n);
                        })
                      : [r([oo, null], 0)];
                  },
                  groupEvents: function (r) {
                    var n = new Map();
                    return e
                      ? (r.forEach(function (e) {
                          var r = t.resource(e) || oo,
                            i = n.get(r) || [];
                          i.push(e), n.set(r, i);
                        }),
                        n)
                      : (n.set(oo, r), n);
                  },
                };
              })(e, t);
            })),
            (r.state = { gutterWidth: void 0, isOverflowing: null }),
            (r.scrollRef = l.createRef()),
            (r.contentRef = l.createRef()),
            (r._scrollRatio = null),
            r
          );
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.UNSAFE_componentWillMount = function () {
            this.calculateScroll();
          }),
          (r.componentDidMount = function () {
            this.checkOverflow(),
              null == this.props.width && this.measureGutter(),
              this.applyScroll(),
              window.addEventListener("resize", this.handleResize);
          }),
          (r.componentWillUnmount = function () {
            window.removeEventListener("resize", this.handleResize),
              xe(this.rafHandle),
              this.measureGutterAnimationFrameRequest &&
                window.cancelAnimationFrame(
                  this.measureGutterAnimationFrameRequest,
                );
          }),
          (r.componentDidUpdate = function () {
            null == this.props.width && this.measureGutter(),
              this.applyScroll();
          }),
          (r.UNSAFE_componentWillReceiveProps = function (e) {
            var t = this.props,
              r = t.range,
              n = t.scrollToTime,
              i = t.localizer;
            (i.neq(e.range[0], r[0], "minutes") ||
              i.neq(e.scrollToTime, n, "minutes")) &&
              this.calculateScroll(e);
          }),
          (r.renderEvents = function (e, t, r, i) {
            var a = this,
              o = this.props,
              s = o.min,
              c = o.max,
              u = o.components,
              d = o.accessors,
              f = o.localizer,
              m = o.dayLayoutAlgorithm,
              p = this.memoizedResources(this.props.resources, d),
              y = p.groupEvents(t),
              h = p.groupEvents(r);
            return p.map(function (t, r) {
              var o = t[0],
                p = t[1];
              return e.map(function (e, t) {
                var v = (y.get(o) || []).filter(function (t) {
                    return f.inRange(e, d.start(t), d.end(t), "day");
                  }),
                  g = (h.get(o) || []).filter(function (t) {
                    return f.inRange(e, d.start(t), d.end(t), "day");
                  });
                return l.createElement(
                  to,
                  (0, n.Z)({}, a.props, {
                    localizer: f,
                    min: f.merge(e, s),
                    max: f.merge(e, c),
                    resource: p && o,
                    components: u,
                    isNow: f.isSameDate(e, i),
                    key: r + "-" + t,
                    date: e,
                    events: v,
                    backgroundEvents: g,
                    dayLayoutAlgorithm: m,
                  }),
                );
              });
            });
          }),
          (r.render = function () {
            var e = this.props,
              t = e.events,
              r = e.backgroundEvents,
              n = e.range,
              i = e.width,
              a = e.rtl,
              o = e.selected,
              s = e.getNow,
              c = e.resources,
              u = e.components,
              d = e.accessors,
              f = e.getters,
              m = e.localizer,
              p = e.min,
              y = e.max,
              h = e.showMultiDayTimes,
              v = e.longPressThreshold,
              b = e.resizable;
            i = i || this.state.gutterWidth;
            var w = n[0],
              B = n[n.length - 1];
            this.slots = n.length;
            var _ = [],
              S = [],
              M = [];
            return (
              t.forEach(function (e) {
                if (Oa(e, w, B, d, m)) {
                  var t = d.start(e),
                    r = d.end(e);
                  d.allDay(e) ||
                  m.startAndEndAreDateOnly(t, r) ||
                  (!h && !m.isSameDate(t, r))
                    ? _.push(e)
                    : S.push(e);
                }
              }),
              r.forEach(function (e) {
                Oa(e, w, B, d, m) && M.push(e);
              }),
              _.sort(function (e, t) {
                return Da(e, t, d, m);
              }),
              l.createElement(
                "div",
                {
                  className: g("rbc-time-view", c && "rbc-time-view-resources"),
                },
                l.createElement(ao, {
                  range: n,
                  events: _,
                  width: i,
                  rtl: a,
                  getNow: s,
                  localizer: m,
                  selected: o,
                  resources: this.memoizedResources(c, d),
                  selectable: this.props.selectable,
                  accessors: d,
                  getters: f,
                  components: u,
                  scrollRef: this.scrollRef,
                  isOverflowing: this.state.isOverflowing,
                  longPressThreshold: v,
                  onSelectSlot: this.handleSelectAllDaySlot,
                  onSelectEvent: this.handleSelectAlldayEvent,
                  onDoubleClickEvent: this.props.onDoubleClickEvent,
                  onKeyPressEvent: this.props.onKeyPressEvent,
                  onDrillDown: this.props.onDrillDown,
                  getDrilldownView: this.props.getDrilldownView,
                  resizable: b,
                }),
                l.createElement(
                  "div",
                  {
                    ref: this.contentRef,
                    className: "rbc-time-content",
                    onScroll: this.handleScroll,
                  },
                  l.createElement(no, {
                    date: w,
                    ref: this.gutterRef,
                    localizer: m,
                    min: m.merge(w, p),
                    max: m.merge(w, y),
                    step: this.props.step,
                    getNow: this.props.getNow,
                    timeslots: this.props.timeslots,
                    components: u,
                    className: "rbc-time-gutter",
                    getters: f,
                  }),
                  this.renderEvents(n, S, M, s()),
                ),
              )
            );
          }),
          (r.clearSelection = function () {
            clearTimeout(this._selectTimer), (this._pendingSelection = []);
          }),
          (r.measureGutter = function () {
            var e = this;
            this.measureGutterAnimationFrameRequest &&
              window.cancelAnimationFrame(
                this.measureGutterAnimationFrameRequest,
              ),
              (this.measureGutterAnimationFrameRequest =
                window.requestAnimationFrame(function () {
                  var t = ln(e.gutter);
                  t &&
                    e.state.gutterWidth !== t &&
                    e.setState({ gutterWidth: t });
                }));
          }),
          (r.applyScroll = function () {
            if (null != this._scrollRatio) {
              var e = this.contentRef.current;
              (e.scrollTop = e.scrollHeight * this._scrollRatio),
                (this._scrollRatio = null);
            }
          }),
          (r.calculateScroll = function (e) {
            void 0 === e && (e = this.props);
            var t = e,
              r = t.min,
              n = t.max,
              i = t.scrollToTime,
              a = t.localizer,
              o = i - a.startOf(i, "day"),
              s = a.diff(r, n, "milliseconds");
            this._scrollRatio = o / s;
          }),
          t
        );
      })(l.Component);
      (so.propTypes = {}), (so.defaultProps = { step: 30, timeslots: 2 });
      var lo = ["date", "localizer", "min", "max", "scrollToTime"],
        co = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            (0, a.Z)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                r = e.date,
                a = e.localizer,
                o = e.min,
                s = void 0 === o ? a.startOf(new Date(), "day") : o,
                c = e.max,
                u = void 0 === c ? a.endOf(new Date(), "day") : c,
                d = e.scrollToTime,
                f = void 0 === d ? a.startOf(new Date(), "day") : d,
                m = (0, i.Z)(e, lo),
                p = t.range(r, { localizer: a });
              return l.createElement(
                so,
                (0, n.Z)({}, m, {
                  range: p,
                  eventOffset: 10,
                  localizer: a,
                  min: s,
                  max: u,
                  scrollToTime: f,
                }),
              );
            }),
            t
          );
        })(l.Component);
      (co.propTypes = {}),
        (co.range = function (e, t) {
          return [t.localizer.startOf(e, "day")];
        }),
        (co.navigate = function (e, t, r) {
          var n = r.localizer;
          switch (t) {
            case Fi:
              return n.add(e, -1, "day");
            case Di:
              return n.add(e, 1, "day");
            default:
              return e;
          }
        }),
        (co.title = function (e, t) {
          return t.localizer.format(e, "dayHeaderFormat");
        });
      var uo = ["date", "localizer", "min", "max", "scrollToTime"],
        fo = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            (0, a.Z)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                r = e.date,
                a = e.localizer,
                o = e.min,
                s = void 0 === o ? a.startOf(new Date(), "day") : o,
                c = e.max,
                u = void 0 === c ? a.endOf(new Date(), "day") : c,
                d = e.scrollToTime,
                f = void 0 === d ? a.startOf(new Date(), "day") : d,
                m = (0, i.Z)(e, uo),
                p = t.range(r, this.props);
              return l.createElement(
                so,
                (0, n.Z)({}, m, {
                  range: p,
                  eventOffset: 15,
                  localizer: a,
                  min: s,
                  max: u,
                  scrollToTime: f,
                }),
              );
            }),
            t
          );
        })(l.Component);
      (fo.propTypes = {}),
        (fo.defaultProps = so.defaultProps),
        (fo.navigate = function (e, t, r) {
          var n = r.localizer;
          switch (t) {
            case Fi:
              return n.add(e, -1, "week");
            case Di:
              return n.add(e, 1, "week");
            default:
              return e;
          }
        }),
        (fo.range = function (e, t) {
          var r = t.localizer,
            n = r.startOfWeek(),
            i = r.startOf(e, "week", n),
            a = r.endOf(e, "week", n);
          return r.range(i, a);
        }),
        (fo.title = function (e, t) {
          var r = t.localizer,
            n = fo.range(e, { localizer: r }),
            i = n[0],
            a = n.slice(1);
          return r.format({ start: i, end: a.pop() }, "dayRangeHeaderFormat");
        });
      var mo = ["date", "localizer", "min", "max", "scrollToTime"];
      function po(e, t) {
        return fo.range(e, t).filter(function (e) {
          return -1 === [6, 0].indexOf(e.getDay());
        });
      }
      var yo,
        ho = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            (0, a.Z)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.date,
                r = e.localizer,
                a = e.min,
                o = void 0 === a ? r.startOf(new Date(), "day") : a,
                s = e.max,
                c = void 0 === s ? r.endOf(new Date(), "day") : s,
                u = e.scrollToTime,
                d = void 0 === u ? r.startOf(new Date(), "day") : u,
                f = (0, i.Z)(e, mo),
                m = po(t, this.props);
              return l.createElement(
                so,
                (0, n.Z)({}, f, {
                  range: m,
                  eventOffset: 15,
                  localizer: r,
                  min: o,
                  max: c,
                  scrollToTime: d,
                }),
              );
            }),
            t
          );
        })(l.Component);
      function vo(e) {
        var t = e.accessors,
          r = e.components,
          n = e.date,
          i = e.events,
          a = e.getters,
          o = e.length,
          s = e.localizer,
          c = e.onDoubleClickEvent,
          u = e.onSelectEvent,
          d = e.selected,
          f = (0, l.useRef)(null),
          m = (0, l.useRef)(null),
          p = (0, l.useRef)(null),
          y = (0, l.useRef)(null),
          h = (0, l.useRef)(null);
        (0, l.useEffect)(function () {
          g();
        });
        var v = function (e, n) {
            var i = "",
              a = r.time,
              o = s.messages.allDay,
              c = t.end(n),
              u = t.start(n);
            return (
              t.allDay(n) ||
                (s.eq(u, c)
                  ? (o = s.format(u, "agendaTimeFormat"))
                  : s.isSameDate(u, c)
                  ? (o = s.format(
                      { start: u, end: c },
                      "agendaTimeRangeFormat",
                    ))
                  : s.isSameDate(e, u)
                  ? (o = s.format(u, "agendaTimeFormat"))
                  : s.isSameDate(e, c) &&
                    (o = s.format(c, "agendaTimeFormat"))),
              s.gt(e, u, "day") && (i = "rbc-continues-prior"),
              s.lt(e, c, "day") && (i += " rbc-continues-after"),
              l.createElement(
                "span",
                { className: i.trim() },
                a ? l.createElement(a, { event: n, day: e, label: o }) : o,
              )
            );
          },
          g = function () {
            if (h.current) {
              var e = f.current,
                t = h.current.firstChild;
              if (t) {
                var r = y.current.scrollHeight > y.current.clientHeight,
                  n = [],
                  i = n;
                (n = [ln(t.children[0]), ln(t.children[1])]),
                  (i[0] === n[0] && i[1] === n[1]) ||
                    ((m.current.style.width = n[0] + "px"),
                    (p.current.style.width = n[1] + "px")),
                  r
                    ? ((0, dn.Z)(e, "rbc-header-overflowing"),
                      (e.style.marginRight = un() + "px"))
                    : (0, fn.Z)(e, "rbc-header-overflowing");
              }
            }
          },
          b = s.messages,
          w = s.add(n, o, "day"),
          B = s.range(n, w, "day");
        return (
          (i = i.filter(function (e) {
            return Oa(e, s.startOf(n, "day"), s.endOf(w, "day"), t, s);
          })).sort(function (e, r) {
            return +t.start(e) - +t.start(r);
          }),
          l.createElement(
            "div",
            { className: "rbc-agenda-view" },
            0 !== i.length
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    "table",
                    { ref: f, className: "rbc-agenda-table" },
                    l.createElement(
                      "thead",
                      null,
                      l.createElement(
                        "tr",
                        null,
                        l.createElement(
                          "th",
                          { className: "rbc-header", ref: m },
                          b.date,
                        ),
                        l.createElement(
                          "th",
                          { className: "rbc-header", ref: p },
                          b.time,
                        ),
                        l.createElement(
                          "th",
                          { className: "rbc-header" },
                          b.event,
                        ),
                      ),
                    ),
                  ),
                  l.createElement(
                    "div",
                    { className: "rbc-agenda-content", ref: y },
                    l.createElement(
                      "table",
                      { className: "rbc-agenda-table" },
                      l.createElement(
                        "tbody",
                        { ref: h },
                        B.map(function (e, n) {
                          return (function (e, n, i) {
                            var o = r.event,
                              f = r.date;
                            return (n = n.filter(function (r) {
                              return Oa(
                                r,
                                s.startOf(e, "day"),
                                s.endOf(e, "day"),
                                t,
                                s,
                              );
                            })).map(function (r, m) {
                              var p = t.title(r),
                                y = t.end(r),
                                h = t.start(r),
                                g = a.eventProp(r, h, y, la(r, d)),
                                b = 0 === m && s.format(e, "agendaDateFormat"),
                                w =
                                  0 === m &&
                                  l.createElement(
                                    "td",
                                    {
                                      rowSpan: n.length,
                                      className: "rbc-agenda-date-cell",
                                    },
                                    f
                                      ? l.createElement(f, { day: e, label: b })
                                      : b,
                                  );
                              return l.createElement(
                                "tr",
                                {
                                  key: i + "_" + m,
                                  className: g.className,
                                  style: g.style,
                                },
                                w,
                                l.createElement(
                                  "td",
                                  { className: "rbc-agenda-time-cell" },
                                  v(e, r),
                                ),
                                l.createElement(
                                  "td",
                                  {
                                    className: "rbc-agenda-event-cell",
                                    onClick: function (e) {
                                      return u && u(r, e);
                                    },
                                    onDoubleClick: function (e) {
                                      return c && c(r, e);
                                    },
                                  },
                                  o
                                    ? l.createElement(o, { event: r, title: p })
                                    : p,
                                ),
                              );
                            }, []);
                          })(e, i, n);
                        }),
                      ),
                    ),
                  ),
                )
              : l.createElement(
                  "span",
                  { className: "rbc-agenda-empty" },
                  b.noEventsInRange,
                ),
          )
        );
      }
      (ho.propTypes = {}),
        (ho.defaultProps = so.defaultProps),
        (ho.range = po),
        (ho.navigate = fo.navigate),
        (ho.title = function (e, t) {
          var r = t.localizer,
            n = po(e, { localizer: r }),
            i = n[0],
            a = n.slice(1);
          return r.format({ start: i, end: a.pop() }, "dayRangeHeaderFormat");
        }),
        (vo.propTypes = {}),
        (vo.defaultProps = { length: 30 }),
        (vo.range = function (e, t) {
          var r = t.length,
            n = void 0 === r ? vo.defaultProps.length : r;
          return { start: e, end: t.localizer.add(e, n, "day") };
        }),
        (vo.navigate = function (e, t, r) {
          var n = r.length,
            i = void 0 === n ? vo.defaultProps.length : n,
            a = r.localizer;
          switch (t) {
            case Fi:
              return a.add(e, -i, "day");
            case Di:
              return a.add(e, i, "day");
            default:
              return e;
          }
        }),
        (vo.title = function (e, t) {
          var r = t.length,
            n = void 0 === r ? vo.defaultProps.length : r,
            i = t.localizer,
            a = i.add(e, n, "day");
          return i.format({ start: e, end: a }, "agendaHeaderFormat");
        });
      var go =
          (((yo = {})[ji.MONTH] = Ua),
          (yo[ji.WEEK] = fo),
          (yo[ji.WORK_WEEK] = ho),
          (yo[ji.DAY] = co),
          (yo[ji.AGENDA] = vo),
          yo),
        bo = ["action", "date", "today"];
      var wo = (function (e) {
        function t() {
          for (var t, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return (
            ((t = e.call.apply(e, [this].concat(n)) || this).navigate =
              function (e) {
                t.props.onNavigate(e);
              }),
            (t.view = function (e) {
              t.props.onView(e);
            }),
            t
          );
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.render = function () {
            var e = this.props,
              t = e.localizer.messages,
              r = e.label;
            return l.createElement(
              "div",
              { className: "rbc-toolbar" },
              l.createElement(
                "span",
                { className: "rbc-btn-group" },
                l.createElement(
                  "button",
                  { type: "button", onClick: this.navigate.bind(null, Ti) },
                  t.today,
                ),
                l.createElement(
                  "button",
                  { type: "button", onClick: this.navigate.bind(null, Fi) },
                  t.previous,
                ),
                l.createElement(
                  "button",
                  { type: "button", onClick: this.navigate.bind(null, Di) },
                  t.next,
                ),
              ),
              l.createElement("span", { className: "rbc-toolbar-label" }, r),
              l.createElement(
                "span",
                { className: "rbc-btn-group" },
                this.viewNamesGroup(t),
              ),
            );
          }),
          (r.viewNamesGroup = function (e) {
            var t = this,
              r = this.props.views,
              n = this.props.view;
            if (r.length > 1)
              return r.map(function (r) {
                return l.createElement(
                  "button",
                  {
                    type: "button",
                    key: r,
                    className: g({ "rbc-active": n === r }),
                    onClick: t.view.bind(null, r),
                  },
                  e[r],
                );
              });
          }),
          t
        );
      })(l.Component);
      wo.propTypes = {};
      var Bo = function (e) {
          return function (t) {
            return (function (e, t) {
              var r = null;
              return (
                "function" == typeof t
                  ? (r = t(e))
                  : "string" == typeof t &&
                    "object" == typeof e &&
                    null != e &&
                    t in e &&
                    (r = e[t]),
                r
              );
            })(t, e);
          };
        },
        _o = ["view", "date", "getNow", "onNavigate"],
        So = [
          "view",
          "toolbar",
          "events",
          "backgroundEvents",
          "style",
          "className",
          "elementProps",
          "date",
          "getNow",
          "length",
          "showMultiDayTimes",
          "onShowMore",
          "doShowMoreDrillDown",
          "components",
          "formats",
          "messages",
          "culture",
        ];
      function Mo(e) {
        return Array.isArray(e) ? e : Object.keys(e);
      }
      var zo = (function (e) {
        function t() {
          for (var t, r = arguments.length, a = new Array(r), o = 0; o < r; o++)
            a[o] = arguments[o];
          return (
            ((t = e.call.apply(e, [this].concat(a)) || this).getViews =
              function () {
                var e = t.props.views;
                return Array.isArray(e)
                  ? zi(
                      e,
                      function (e, t) {
                        return (e[t] = go[t]);
                      },
                      {},
                    )
                  : "object" == typeof e
                  ? Ri(e, function (e, t) {
                      return !0 === e ? go[t] : e;
                    })
                  : go;
              }),
            (t.getView = function () {
              return t.getViews()[t.props.view];
            }),
            (t.getDrilldownView = function (e) {
              var r = t.props,
                n = r.view,
                i = r.drilldownView,
                a = r.getDrilldownView;
              return a ? a(e, n, Object.keys(t.getViews())) : i;
            }),
            (t.handleRangeChange = function (e, r, n) {
              var i = t.props,
                a = i.onRangeChange,
                o = i.localizer;
              a && r.range && a(r.range(e, { localizer: o }), n);
            }),
            (t.handleNavigate = function (e, r) {
              var a = t.props,
                o = a.view,
                s = a.date,
                l = a.getNow,
                c = a.onNavigate,
                d = (0, i.Z)(a, _o),
                f = t.getView(),
                m = l();
              (s = (function (e, t) {
                var r = t.action,
                  n = t.date,
                  a = t.today,
                  o = (0, i.Z)(t, bo);
                switch (((e = "string" == typeof e ? go[e] : e), r)) {
                  case Ti:
                    n = a || new Date();
                    break;
                  case xi:
                    break;
                  default:
                    (e && "function" == typeof e.navigate) || u()(!1),
                      (n = e.navigate(n, r, o));
                }
                return n;
              })(
                f,
                (0, n.Z)({}, d, { action: e, date: r || s || m, today: m }),
              )),
                c(s, o, e),
                t.handleRangeChange(s, f);
            }),
            (t.handleViewChange = function (e) {
              e !== t.props.view &&
                (function (e, t) {
                  return -1 !== Mo(t.views).indexOf(e);
                })(e, t.props) &&
                t.props.onView(e);
              var r = t.getViews();
              t.handleRangeChange(t.props.date || t.props.getNow(), r[e], e);
            }),
            (t.handleSelectEvent = function () {
              for (
                var e = arguments.length, r = new Array(e), n = 0;
                n < e;
                n++
              )
                r[n] = arguments[n];
              Pi(t.props.onSelectEvent, r);
            }),
            (t.handleDoubleClickEvent = function () {
              for (
                var e = arguments.length, r = new Array(e), n = 0;
                n < e;
                n++
              )
                r[n] = arguments[n];
              Pi(t.props.onDoubleClickEvent, r);
            }),
            (t.handleKeyPressEvent = function () {
              for (
                var e = arguments.length, r = new Array(e), n = 0;
                n < e;
                n++
              )
                r[n] = arguments[n];
              Pi(t.props.onKeyPressEvent, r);
            }),
            (t.handleSelectSlot = function (e) {
              Pi(t.props.onSelectSlot, e);
            }),
            (t.handleDrillDown = function (e, r) {
              var n = t.props.onDrillDown;
              n
                ? n(e, r, t.drilldownView)
                : (r && t.handleViewChange(r), t.handleNavigate(xi, e));
            }),
            (t.state = { context: t.getContext(t.props) }),
            t
          );
        }
        (0, a.Z)(t, e);
        var r = t.prototype;
        return (
          (r.UNSAFE_componentWillReceiveProps = function (e) {
            this.setState({ context: this.getContext(e) });
          }),
          (r.getContext = function (e) {
            var t = e.startAccessor,
              r = e.endAccessor,
              i = e.allDayAccessor,
              a = e.tooltipAccessor,
              o = e.titleAccessor,
              s = e.resourceAccessor,
              l = e.resourceIdAccessor,
              c = e.resourceTitleAccessor,
              u = e.eventPropGetter,
              d = e.backgroundEventPropGetter,
              f = e.slotPropGetter,
              m = e.slotGroupPropGetter,
              p = e.dayPropGetter,
              y = e.view,
              h = e.views,
              v = e.localizer,
              g = e.culture,
              b = e.messages,
              w = void 0 === b ? {} : b,
              B = e.components,
              _ = void 0 === B ? {} : B,
              S = e.formats,
              M = void 0 === S ? {} : S,
              z = Mo(h);
            return {
              viewNames: z,
              localizer: ia(
                v,
                g,
                M,
                (function (e) {
                  return (0, n.Z)({}, aa, e);
                })(w),
              ),
              getters: {
                eventProp: function () {
                  return (u && u.apply(void 0, arguments)) || {};
                },
                backgroundEventProp: function () {
                  return (d && d.apply(void 0, arguments)) || {};
                },
                slotProp: function () {
                  return (f && f.apply(void 0, arguments)) || {};
                },
                slotGroupProp: function () {
                  return (m && m.apply(void 0, arguments)) || {};
                },
                dayProp: function () {
                  return (p && p.apply(void 0, arguments)) || {};
                },
              },
              components: wi(_[y] || {}, hi(_, z), {
                eventWrapper: Oi,
                backgroundEventWrapper: Oi,
                eventContainerWrapper: Oi,
                dateCellWrapper: Oi,
                weekWrapper: Oi,
                timeSlotWrapper: Oi,
              }),
              accessors: {
                start: Bo(t),
                end: Bo(r),
                allDay: Bo(i),
                tooltip: Bo(a),
                title: Bo(o),
                resource: Bo(s),
                resourceId: Bo(l),
                resourceTitle: Bo(c),
              },
            };
          }),
          (r.render = function () {
            var e = this.props,
              t = e.view,
              r = e.toolbar,
              a = e.events,
              o = e.backgroundEvents,
              s = void 0 === o ? [] : o,
              c = e.style,
              u = e.className,
              d = e.elementProps,
              f = e.date,
              m = e.getNow,
              p = e.length,
              y = e.showMultiDayTimes,
              h = e.onShowMore,
              v = e.doShowMoreDrillDown,
              b =
                (e.components,
                e.formats,
                e.messages,
                e.culture,
                (0, i.Z)(e, So));
            f = f || m();
            var w = this.getView(),
              B = this.state.context,
              _ = B.accessors,
              S = B.components,
              M = B.getters,
              z = B.localizer,
              E = B.viewNames,
              R = S.toolbar || wo,
              O = w.title(f, { localizer: z, length: p });
            return l.createElement(
              "div",
              (0, n.Z)({}, d, {
                className: g(u, "rbc-calendar", b.rtl && "rbc-rtl"),
                style: c,
              }),
              r &&
                l.createElement(R, {
                  date: f,
                  view: t,
                  views: E,
                  label: O,
                  onView: this.handleViewChange,
                  onNavigate: this.handleNavigate,
                  localizer: z,
                }),
              l.createElement(
                w,
                (0, n.Z)({}, b, {
                  events: a,
                  backgroundEvents: s,
                  date: f,
                  getNow: m,
                  length: p,
                  localizer: z,
                  getters: M,
                  components: S,
                  accessors: _,
                  showMultiDayTimes: y,
                  getDrilldownView: this.getDrilldownView,
                  onNavigate: this.handleNavigate,
                  onDrillDown: this.handleDrillDown,
                  onSelectEvent: this.handleSelectEvent,
                  onDoubleClickEvent: this.handleDoubleClickEvent,
                  onKeyPressEvent: this.handleKeyPressEvent,
                  onSelectSlot: this.handleSelectSlot,
                  onShowMore: h,
                  doShowMoreDrillDown: v,
                }),
              ),
            );
          }),
          t
        );
      })(l.Component);
      (zo.defaultProps = {
        elementProps: {},
        popup: !1,
        toolbar: !0,
        view: ji.MONTH,
        views: [ji.MONTH, ji.WEEK, ji.DAY, ji.AGENDA],
        step: 30,
        length: 30,
        doShowMoreDrillDown: !0,
        drilldownView: ji.DAY,
        titleAccessor: "title",
        tooltipAccessor: "title",
        allDayAccessor: "allDay",
        startAccessor: "start",
        endAccessor: "end",
        resourceAccessor: "resourceId",
        resourceIdAccessor: "id",
        resourceTitleAccessor: "title",
        longPressThreshold: 250,
        getNow: function () {
          return new Date();
        },
        dayLayoutAlgorithm: "overlap",
      }),
        (zo.propTypes = {});
      var Eo = (function e(t, r, o) {
          void 0 === o && (o = []);
          var s,
            c = t.displayName || t.name || "Component",
            v =
              !!(s = t) &&
              ("function" != typeof s ||
                (s.prototype && s.prototype.isReactComponent)),
            g = Object.keys(r),
            b = g.map(m);
          !v && o.length && u()(!1);
          var w = (function (e) {
            function s() {
              for (
                var t, i = arguments.length, a = new Array(i), s = 0;
                s < i;
                s++
              )
                a[s] = arguments[s];
              ((t = e.call.apply(e, [this].concat(a)) || this).handlers =
                Object.create(null)),
                g.forEach(function (e) {
                  var i = r[e];
                  t.handlers[i] = function (r) {
                    if (t.props[i]) {
                      var a;
                      t._notifying = !0;
                      for (
                        var o = arguments.length,
                          s = new Array(o > 1 ? o - 1 : 0),
                          l = 1;
                        l < o;
                        l++
                      )
                        s[l - 1] = arguments[l];
                      (a = t.props)[i].apply(a, [r].concat(s)),
                        (t._notifying = !1);
                    }
                    t.unmounted ||
                      t.setState(function (t) {
                        var i,
                          a = t.values;
                        return {
                          values: (0, n.Z)(
                            Object.create(null),
                            a,
                            ((i = {}), (i[e] = r), i),
                          ),
                        };
                      });
                  };
                }),
                o.length &&
                  (t.attachRef = function (e) {
                    t.inner = e;
                  });
              var l = Object.create(null);
              return (
                g.forEach(function (e) {
                  l[e] = t.props[m(e)];
                }),
                (t.state = { values: l, prevProps: {} }),
                t
              );
            }
            (0, a.Z)(s, e);
            var c = s.prototype;
            return (
              (c.shouldComponentUpdate = function () {
                return !this._notifying;
              }),
              (s.getDerivedStateFromProps = function (e, t) {
                var r = t.values,
                  i = t.prevProps,
                  a = {
                    values: (0, n.Z)(Object.create(null), r),
                    prevProps: {},
                  };
                return (
                  g.forEach(function (t) {
                    (a.prevProps[t] = e[t]),
                      !f(e, t) && f(i, t) && (a.values[t] = e[m(t)]);
                  }),
                  a
                );
              }),
              (c.componentWillUnmount = function () {
                this.unmounted = !0;
              }),
              (c.render = function () {
                var e = this,
                  r = this.props,
                  a = r.innerRef,
                  o = (0, i.Z)(r, ["innerRef"]);
                b.forEach(function (e) {
                  delete o[e];
                });
                var s = {};
                return (
                  g.forEach(function (t) {
                    var r = e.props[t];
                    s[t] = void 0 !== r ? r : e.state.values[t];
                  }),
                  l.createElement(
                    t,
                    (0, n.Z)({}, o, s, this.handlers, {
                      ref: a || this.attachRef,
                    }),
                  )
                );
              }),
              s
            );
          })(l.Component);
          !(function (e) {
            var t = e.prototype;
            if (!t || !t.isReactComponent)
              throw new Error("Can only polyfill class components");
            if (
              "function" != typeof e.getDerivedStateFromProps &&
              "function" != typeof t.getSnapshotBeforeUpdate
            )
              return e;
            var r = null,
              n = null,
              i = null;
            if (
              ("function" == typeof t.componentWillMount
                ? (r = "componentWillMount")
                : "function" == typeof t.UNSAFE_componentWillMount &&
                  (r = "UNSAFE_componentWillMount"),
              "function" == typeof t.componentWillReceiveProps
                ? (n = "componentWillReceiveProps")
                : "function" == typeof t.UNSAFE_componentWillReceiveProps &&
                  (n = "UNSAFE_componentWillReceiveProps"),
              "function" == typeof t.componentWillUpdate
                ? (i = "componentWillUpdate")
                : "function" == typeof t.UNSAFE_componentWillUpdate &&
                  (i = "UNSAFE_componentWillUpdate"),
              null !== r || null !== n || null !== i)
            ) {
              var a = e.displayName || e.name,
                o =
                  "function" == typeof e.getDerivedStateFromProps
                    ? "getDerivedStateFromProps()"
                    : "getSnapshotBeforeUpdate()";
              throw Error(
                "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
                  a +
                  " uses " +
                  o +
                  " but also contains the following legacy lifecycles:" +
                  (null !== r ? "\n  " + r : "") +
                  (null !== n ? "\n  " + n : "") +
                  (null !== i ? "\n  " + i : "") +
                  "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks",
              );
            }
            if (
              ("function" == typeof e.getDerivedStateFromProps &&
                ((t.componentWillMount = p), (t.componentWillReceiveProps = y)),
              "function" == typeof t.getSnapshotBeforeUpdate)
            ) {
              if ("function" != typeof t.componentDidUpdate)
                throw new Error(
                  "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
                );
              t.componentWillUpdate = h;
              var s = t.componentDidUpdate;
              t.componentDidUpdate = function (e, t, r) {
                var n = this.__reactInternalSnapshotFlag
                  ? this.__reactInternalSnapshot
                  : r;
                s.call(this, e, t, n);
              };
            }
          })(w),
            (w.displayName = "Uncontrolled(" + c + ")"),
            (w.propTypes = (0, n.Z)(
              { innerRef: function () {} },
              (function (e, t) {
                var r = {};
                return (
                  Object.keys(e).forEach(function (e) {
                    r[m(e)] = d;
                  }),
                  r
                );
              })(r),
            )),
            o.forEach(function (e) {
              w.prototype[e] = function () {
                var t;
                return (t = this.inner)[e].apply(t, arguments);
              };
            });
          var B = w;
          return (
            l.forwardRef &&
              ((B = l.forwardRef(function (e, t) {
                return l.createElement(
                  w,
                  (0, n.Z)({}, e, {
                    innerRef: t,
                    __source: {
                      fileName:
                        "/Users/jquense/src/uncontrollable/src/uncontrollable.js",
                      lineNumber: 128,
                    },
                    __self: this,
                  }),
                );
              })).propTypes = w.propTypes),
            (B.ControlledComponent = t),
            (B.deferControlTo = function (t, i, a) {
              return void 0 === i && (i = {}), e(t, (0, n.Z)({}, r, i), a);
            }),
            B
          );
        })(zo, {
          view: "onView",
          date: "onNavigate",
          selected: "onSelectEvent",
        }),
        Ro = function (e, t, r) {
          var n = e.start,
            i = e.end;
          return r.format(n, "LT", t) + " – " + r.format(i, "LT", t);
        },
        Oo = {
          dateFormat: "DD",
          dayFormat: "DD ddd",
          weekdayFormat: "ddd",
          selectRangeFormat: Ro,
          eventTimeRangeFormat: Ro,
          eventTimeRangeStartFormat: function (e, t, r) {
            var n = e.start;
            return r.format(n, "LT", t) + " – ";
          },
          eventTimeRangeEndFormat: function (e, t, r) {
            var n = e.end;
            return " – " + r.format(n, "LT", t);
          },
          timeGutterFormat: "LT",
          monthHeaderFormat: "MMMM YYYY",
          dayHeaderFormat: "dddd MMM DD",
          dayRangeHeaderFormat: function (e, t, r) {
            var n = e.start,
              i = e.end;
            return (
              r.format(n, "MMMM DD", t) +
              " – " +
              r.format(i, r.eq(n, i, "month") ? "DD" : "MMMM DD", t)
            );
          },
          agendaHeaderFormat: function (e, t, r) {
            var n = e.start,
              i = e.end;
            return r.format(n, "L", t) + " – " + r.format(i, "L", t);
          },
          agendaDateFormat: "ddd MMM DD",
          agendaTimeFormat: "LT",
          agendaTimeRangeFormat: Ro,
        };
      function Fo(e) {
        var t = e ? e.toLowerCase() : e;
        return "FullYear" === t ? (t = "year") : t || (t = void 0), t;
      }
      function Do(e) {
        function t(t, r) {
          var n,
            i,
            a = e(t),
            o = e(r);
          if (!e.tz)
            return (
              a.toDate().getTimezoneOffset() - o.toDate().getTimezoneOffset()
            );
          var s =
            null != (n = null == a || null == (i = a._z) ? void 0 : i.name)
              ? n
              : e.tz.guess();
          return e.tz.zone(s).utcOffset(+a) - e.tz.zone(s).utcOffset(+o);
        }
        function r(t, r, n) {
          var i = Fo(n);
          return [i ? e(t).startOf(i) : e(t), i ? e(r).startOf(i) : e(r), i];
        }
        function n(t, r) {
          void 0 === t && (t = null);
          var n = Fo(r);
          return n ? e(t).startOf(n).toDate() : e(t).toDate();
        }
        function i(e, t, n) {
          var i = r(e, t, n),
            a = i[0],
            o = i[1],
            s = i[2];
          return a.isSame(o, s);
        }
        function a(e, t, n) {
          var i = r(e, t, n),
            a = i[0],
            o = i[1],
            s = i[2];
          return a.isSameOrBefore(o, s);
        }
        function o(t, r, n) {
          var i = Fo(n);
          return e(t).add(r, i).toDate();
        }
        function s(e, t) {
          var r = Fo(t),
            a = n(e, r);
          return i(a, e) ? a : o(a, 1, r);
        }
        function l(t, r, n) {
          void 0 === n && (n = "day");
          var i = Fo(n),
            a = e(t);
          return e(r).diff(a, i);
        }
        function c(t) {
          return e(t).startOf("month").startOf("week").toDate();
        }
        function u(t) {
          return e(t).endOf("month").endOf("week").toDate();
        }
        return new na({
          formats: Oo,
          firstOfWeek: function (t) {
            var r = t ? e.localeData(t) : e.localeData();
            return r ? r.firstDayOfWeek() : 0;
          },
          firstVisibleDay: c,
          lastVisibleDay: u,
          visibleDays: function (e) {
            for (var t = c(e), r = u(e), n = []; a(t, r); )
              n.push(t), (t = o(t, 1, "d"));
            return n;
          },
          format: function (t, r, n) {
            return ((i = e(t)), (a = n), a ? i.locale(a) : i).format(r);
            var i, a;
          },
          lt: function (e, t, n) {
            var i = r(e, t, n),
              a = i[0],
              o = i[1],
              s = i[2];
            return a.isBefore(o, s);
          },
          lte: a,
          gt: function (e, t, n) {
            var i = r(e, t, n),
              a = i[0],
              o = i[1],
              s = i[2];
            return a.isAfter(o, s);
          },
          gte: function (e, t, n) {
            var i = r(e, t, n),
              a = i[0],
              o = i[1],
              s = i[2];
            return a.isSameOrBefore(o, s);
          },
          eq: i,
          neq: function (e, t, r) {
            return !i(e, t, r);
          },
          merge: function (t, r) {
            if (!t && !r) return null;
            var n = e(r).format("HH:mm:ss"),
              i = e(t).startOf("day").format("MM/DD/YYYY");
            return e(i + " " + n, "MM/DD/YYYY HH:mm:ss").toDate();
          },
          inRange: function (t, r, n, i) {
            void 0 === i && (i = "day");
            var a = Fo(i),
              o = e(t),
              s = e(r),
              l = e(n);
            return o.isBetween(s, l, a, "[]");
          },
          startOf: n,
          endOf: function (t, r) {
            void 0 === t && (t = null);
            var n = Fo(r);
            return n ? e(t).endOf(n).toDate() : e(t).toDate();
          },
          range: function (t, r, n) {
            void 0 === n && (n = "day");
            for (var i = Fo(n), s = e(t).toDate(), l = []; a(s, r); )
              l.push(s), (s = o(s, 1, i));
            return l;
          },
          add: o,
          diff: l,
          ceil: s,
          min: function (t, r) {
            var n = e(t),
              i = e(r);
            return e.min(n, i).toDate();
          },
          max: function (t, r) {
            var n = e(t),
              i = e(r);
            return e.max(n, i).toDate();
          },
          minutes: function (t) {
            return e(t).minutes();
          },
          getSlotDate: function (t, r, n) {
            return e(t)
              .startOf("day")
              .minute(r + n)
              .toDate();
          },
          getTimezoneOffset: function (t) {
            return e(t).toDate().getTimezoneOffset();
          },
          getDstOffset: t,
          getTotalMin: function (e, t) {
            return l(e, t, "minutes");
          },
          getMinutesFromMidnight: function (r) {
            var n = e(r).startOf("day");
            return (
              e(r).diff(n, "minutes") +
              (function (r) {
                return t(e(r).startOf("day"), r);
              })(r)
            );
          },
          continuesPrior: function (t, r) {
            var n = e(t),
              i = e(r);
            return n.isBefore(i, "day");
          },
          continuesAfter: function (t, r, n) {
            var i = e(r),
              a = e(n);
            return i.isSameOrAfter(a, "minutes");
          },
          sortEvents: function (e) {
            var t = e.evtA,
              r = t.start,
              i = t.end,
              a = t.allDay,
              o = e.evtB,
              c = o.start,
              u = o.end,
              d = o.allDay,
              f = +n(r, "day") - +n(c, "day"),
              m = l(r, s(i, "day"), "day"),
              p = l(c, s(u, "day"), "day");
            return (
              f ||
              Math.max(p, 1) - Math.max(m, 1) ||
              !!d - !!a ||
              +r - +c ||
              +i - +u
            );
          },
          inEventRange: function (t) {
            var r = t.event,
              n = r.start,
              i = r.end,
              a = t.range,
              o = a.start,
              s = a.end,
              l = e(n).startOf("day"),
              c = e(i),
              u = e(o),
              d = e(s),
              f = l.isSameOrBefore(d, "day"),
              m = !l.isSame(c, "minutes")
                ? c.isAfter(u, "minutes")
                : c.isSameOrAfter(u, "minutes");
            return f && m;
          },
          isSameDate: function (t, r) {
            var n = e(t),
              i = e(r);
            return n.isSame(i, "date");
          },
          browserTZOffset: function () {
            var t = new Date(),
              r = /-/.test(t.toString()) ? "-" : "",
              n = t.getTimezoneOffset(),
              i = Number("" + r + Math.abs(n));
            return e().utcOffset() > i ? 1 : 0;
          },
        });
      }
    },
    42333: (e, t, r) => {
      r.d(t, { q: () => w });
      var n = r(39277),
        i = r.n(n),
        a = r(89526),
        o = r(16171),
        s = r(9410),
        l = ["x1", "y1", "x2", "y2", "key"];
      function c(e) {
        return (
          (c =
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
          c(e)
        );
      }
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          u.apply(this, arguments)
        );
      }
      function d(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                g(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, b(n.key), n);
        }
      }
      function y(e, t) {
        return (
          (y = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          y(e, t)
        );
      }
      function h(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = v(e);
          if (t) {
            var i = v(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === c(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(this, r);
        };
      }
      function v(e) {
        return (
          (v = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          v(e)
        );
      }
      function g(e, t, r) {
        return (
          (t = b(t)) in e
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
      function b(e) {
        var t = (function (e, t) {
          if ("object" !== c(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== c(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === c(t) ? t : String(t);
      }
      var w = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && y(e, t);
        })(f, e);
        var t,
          r,
          n,
          c = h(f);
        function f() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, f),
            c.apply(this, arguments)
          );
        }
        return (
          (t = f),
          (n = [
            {
              key: "renderLineItem",
              value: function (e, t) {
                var r;
                if (a.isValidElement(e)) r = a.cloneElement(e, t);
                else if (i()(e)) r = e(t);
                else {
                  var n = t.x1,
                    o = t.y1,
                    c = t.x2,
                    f = t.y2,
                    m = t.key,
                    p = d(t, l);
                  r = a.createElement(
                    "line",
                    u({}, (0, s.L6)(p), {
                      x1: n,
                      y1: o,
                      x2: c,
                      y2: f,
                      fill: "none",
                      key: m,
                    }),
                  );
                }
                return r;
              },
            },
          ]),
          (r = [
            {
              key: "renderHorizontal",
              value: function (e) {
                var t = this,
                  r = this.props,
                  n = r.x,
                  i = r.width,
                  o = r.horizontal;
                if (!e || !e.length) return null;
                var s = e.map(function (e, r) {
                  var a = m(
                    m({}, t.props),
                    {},
                    {
                      x1: n,
                      y1: e,
                      x2: n + i,
                      y2: e,
                      key: "line-".concat(r),
                      index: r,
                    },
                  );
                  return f.renderLineItem(o, a);
                });
                return a.createElement(
                  "g",
                  { className: "recharts-cartesian-grid-horizontal" },
                  s,
                );
              },
            },
            {
              key: "renderVertical",
              value: function (e) {
                var t = this,
                  r = this.props,
                  n = r.y,
                  i = r.height,
                  o = r.vertical;
                if (!e || !e.length) return null;
                var s = e.map(function (e, r) {
                  var a = m(
                    m({}, t.props),
                    {},
                    {
                      x1: e,
                      y1: n,
                      x2: e,
                      y2: n + i,
                      key: "line-".concat(r),
                      index: r,
                    },
                  );
                  return f.renderLineItem(o, a);
                });
                return a.createElement(
                  "g",
                  { className: "recharts-cartesian-grid-vertical" },
                  s,
                );
              },
            },
            {
              key: "renderVerticalStripes",
              value: function (e) {
                var t = this.props.verticalFill;
                if (!t || !t.length) return null;
                var r = this.props,
                  n = r.fillOpacity,
                  i = r.x,
                  o = r.y,
                  s = r.width,
                  l = r.height,
                  c = e
                    .map(function (e) {
                      return Math.round(e + i - i);
                    })
                    .sort(function (e, t) {
                      return e - t;
                    });
                i !== c[0] && c.unshift(0);
                var u = c.map(function (e, r) {
                  var u = c[r + 1] ? c[r + 1] - e : i + s - e;
                  if (u <= 0) return null;
                  var d = r % t.length;
                  return a.createElement("rect", {
                    key: "react-".concat(r),
                    x: e,
                    y: o,
                    width: u,
                    height: l,
                    stroke: "none",
                    fill: t[d],
                    fillOpacity: n,
                    className: "recharts-cartesian-grid-bg",
                  });
                });
                return a.createElement(
                  "g",
                  { className: "recharts-cartesian-gridstripes-vertical" },
                  u,
                );
              },
            },
            {
              key: "renderHorizontalStripes",
              value: function (e) {
                var t = this.props.horizontalFill;
                if (!t || !t.length) return null;
                var r = this.props,
                  n = r.fillOpacity,
                  i = r.x,
                  o = r.y,
                  s = r.width,
                  l = r.height,
                  c = e
                    .map(function (e) {
                      return Math.round(e + o - o);
                    })
                    .sort(function (e, t) {
                      return e - t;
                    });
                o !== c[0] && c.unshift(0);
                var u = c.map(function (e, r) {
                  var u = c[r + 1] ? c[r + 1] - e : o + l - e;
                  if (u <= 0) return null;
                  var d = r % t.length;
                  return a.createElement("rect", {
                    key: "react-".concat(r),
                    y: e,
                    x: i,
                    height: u,
                    width: s,
                    stroke: "none",
                    fill: t[d],
                    fillOpacity: n,
                    className: "recharts-cartesian-grid-bg",
                  });
                });
                return a.createElement(
                  "g",
                  { className: "recharts-cartesian-gridstripes-horizontal" },
                  u,
                );
              },
            },
            {
              key: "renderBackground",
              value: function () {
                var e = this.props.fill;
                if (!e || "none" === e) return null;
                var t = this.props,
                  r = t.fillOpacity,
                  n = t.x,
                  i = t.y,
                  o = t.width,
                  s = t.height;
                return a.createElement("rect", {
                  x: n,
                  y: i,
                  width: o,
                  height: s,
                  stroke: "none",
                  fill: e,
                  fillOpacity: r,
                  className: "recharts-cartesian-grid-bg",
                });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.x,
                  r = e.y,
                  n = e.width,
                  s = e.height,
                  l = e.horizontal,
                  c = e.vertical,
                  u = e.horizontalCoordinatesGenerator,
                  d = e.verticalCoordinatesGenerator,
                  f = e.xAxis,
                  m = e.yAxis,
                  p = e.offset,
                  y = e.chartWidth,
                  h = e.chartHeight;
                if (
                  !(0, o.hj)(n) ||
                  n <= 0 ||
                  !(0, o.hj)(s) ||
                  s <= 0 ||
                  !(0, o.hj)(t) ||
                  t !== +t ||
                  !(0, o.hj)(r) ||
                  r !== +r
                )
                  return null;
                var v = this.props,
                  g = v.horizontalPoints,
                  b = v.verticalPoints;
                return (
                  (g && g.length) ||
                    !i()(u) ||
                    (g = u({ yAxis: m, width: y, height: h, offset: p })),
                  (b && b.length) ||
                    !i()(d) ||
                    (b = d({ xAxis: f, width: y, height: h, offset: p })),
                  a.createElement(
                    "g",
                    { className: "recharts-cartesian-grid" },
                    this.renderBackground(),
                    l && this.renderHorizontal(g),
                    c && this.renderVertical(b),
                    l && this.renderHorizontalStripes(g),
                    c && this.renderVerticalStripes(b),
                  )
                );
              },
            },
          ]) && p(t.prototype, r),
          n && p(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          f
        );
      })(a.PureComponent);
      g(w, "displayName", "CartesianGrid"),
        g(w, "defaultProps", {
          horizontal: !0,
          vertical: !0,
          horizontalPoints: [],
          verticalPoints: [],
          stroke: "#ccc",
          fill: "none",
          verticalFill: [],
          horizontalFill: [],
        });
    },
    77219: (e, t, r) => {
      r.d(t, { c: () => fe });
      var n = r(79756),
        i = r(47184),
        a = r.n(i),
        o = r(35813),
        s = r.n(o),
        l = r(14019),
        c = r.n(l),
        u = r(39277),
        d = r.n(u),
        f = r(80089),
        m = r.n(f),
        p = r(51391),
        y = r.n(p),
        h = r(93706),
        v = r.n(h),
        g = r(89526),
        b = r(64403),
        w = r.n(b),
        B = r(68059),
        _ = r(17995),
        S = r(96963),
        M = r(61452),
        z = r(34324),
        E = r(59509),
        R = r(16171),
        O = r(71298),
        F = r(9410),
        D = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"];
      function T(e) {
        return (
          (T =
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
          T(e)
        );
      }
      function x(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      function j() {
        return (
          (j = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          j.apply(this, arguments)
        );
      }
      function W(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? W(Object(r), !0).forEach(function (t) {
                U(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : W(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function A(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Z(n.key), n);
        }
      }
      function k(e, t) {
        return (
          (k = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          k(e, t)
        );
      }
      function I(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = N(e);
          if (t) {
            var i = N(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === T(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return C(e);
          })(this, r);
        };
      }
      function C(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function N(e) {
        return (
          (N = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          N(e)
        );
      }
      function U(e, t, r) {
        return (
          (t = Z(t)) in e
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
      function Z(e) {
        var t = (function (e, t) {
          if ("object" !== T(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== T(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === T(t) ? t : String(t);
      }
      var L = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && k(e, t);
        })(o, e);
        var t,
          r,
          n,
          i = I(o);
        function o() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, o);
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            U(C((e = i.call.apply(i, [this].concat(r)))), "state", {
              isAnimationFinished: !0,
            }),
            U(C(e), "id", (0, R.EL)("recharts-area-")),
            U(C(e), "handleAnimationEnd", function () {
              var t = e.props.onAnimationEnd;
              e.setState({ isAnimationFinished: !0 }), d()(t) && t();
            }),
            U(C(e), "handleAnimationStart", function () {
              var t = e.props.onAnimationStart;
              e.setState({ isAnimationFinished: !1 }), d()(t) && t();
            }),
            e
          );
        }
        return (
          (t = o),
          (n = [
            {
              key: "getDerivedStateFromProps",
              value: function (e, t) {
                return e.animationId !== t.prevAnimationId
                  ? {
                      prevAnimationId: e.animationId,
                      curPoints: e.points,
                      curBaseLine: e.baseLine,
                      prevPoints: t.curPoints,
                      prevBaseLine: t.curBaseLine,
                    }
                  : e.points !== t.curPoints || e.baseLine !== t.curBaseLine
                  ? { curPoints: e.points, curBaseLine: e.baseLine }
                  : null;
              },
            },
          ]),
          (r = [
            {
              key: "renderDots",
              value: function (e, t) {
                var r = this.props.isAnimationActive,
                  n = this.state.isAnimationFinished;
                if (r && !n) return null;
                var i = this.props,
                  a = i.dot,
                  s = i.points,
                  l = i.dataKey,
                  c = (0, F.L6)(this.props),
                  u = (0, F.L6)(a, !0),
                  d = s.map(function (e, t) {
                    var r = P(
                      P(P({ key: "dot-".concat(t), r: 3 }, c), u),
                      {},
                      {
                        dataKey: l,
                        cx: e.x,
                        cy: e.y,
                        index: t,
                        value: e.value,
                        payload: e.payload,
                      },
                    );
                    return o.renderDotItem(a, r);
                  }),
                  f = { clipPath: e ? "url(#clipPath-".concat(t, ")") : null };
                return g.createElement(
                  M.m,
                  j({ className: "recharts-area-dots" }, f),
                  d,
                );
              },
            },
            {
              key: "renderHorizontalRect",
              value: function (e) {
                var t = this.props,
                  r = t.baseLine,
                  n = t.points,
                  i = t.strokeWidth,
                  a = n[0].x,
                  o = n[n.length - 1].x,
                  s = e * Math.abs(a - o),
                  l = c()(
                    n.map(function (e) {
                      return e.y || 0;
                    }),
                  );
                return (
                  (0, R.hj)(r) && "number" == typeof r
                    ? (l = Math.max(r, l))
                    : r &&
                      v()(r) &&
                      r.length &&
                      (l = Math.max(
                        c()(
                          r.map(function (e) {
                            return e.y || 0;
                          }),
                        ),
                        l,
                      )),
                  (0, R.hj)(l)
                    ? g.createElement("rect", {
                        x: a < o ? a : a - s,
                        y: 0,
                        width: s,
                        height: Math.floor(
                          l + (i ? parseInt("".concat(i), 10) : 1),
                        ),
                      })
                    : null
                );
              },
            },
            {
              key: "renderVerticalRect",
              value: function (e) {
                var t = this.props,
                  r = t.baseLine,
                  n = t.points,
                  i = t.strokeWidth,
                  a = n[0].y,
                  o = n[n.length - 1].y,
                  s = e * Math.abs(a - o),
                  l = c()(
                    n.map(function (e) {
                      return e.x || 0;
                    }),
                  );
                return (
                  (0, R.hj)(r) && "number" == typeof r
                    ? (l = Math.max(r, l))
                    : r &&
                      v()(r) &&
                      r.length &&
                      (l = Math.max(
                        c()(
                          r.map(function (e) {
                            return e.x || 0;
                          }),
                        ),
                        l,
                      )),
                  (0, R.hj)(l)
                    ? g.createElement("rect", {
                        x: 0,
                        y: a < o ? a : a - s,
                        width: l + (i ? parseInt("".concat(i), 10) : 1),
                        height: Math.floor(s),
                      })
                    : null
                );
              },
            },
            {
              key: "renderClipRect",
              value: function (e) {
                return "vertical" === this.props.layout
                  ? this.renderVerticalRect(e)
                  : this.renderHorizontalRect(e);
              },
            },
            {
              key: "renderAreaStatically",
              value: function (e, t, r, n) {
                var i = this.props,
                  a = i.layout,
                  o = i.type,
                  s = i.stroke,
                  l = i.connectNulls,
                  c = i.isRange,
                  u = (i.ref, x(i, D));
                return g.createElement(
                  M.m,
                  { clipPath: r ? "url(#clipPath-".concat(n, ")") : null },
                  g.createElement(
                    _.H,
                    j({}, (0, F.L6)(u, !0), {
                      points: e,
                      connectNulls: l,
                      type: o,
                      baseLine: t,
                      layout: a,
                      stroke: "none",
                      className: "recharts-area-area",
                    }),
                  ),
                  "none" !== s &&
                    g.createElement(
                      _.H,
                      j({}, (0, F.L6)(this.props), {
                        className: "recharts-area-curve",
                        layout: a,
                        type: o,
                        connectNulls: l,
                        fill: "none",
                        points: e,
                      }),
                    ),
                  "none" !== s &&
                    c &&
                    g.createElement(
                      _.H,
                      j({}, (0, F.L6)(this.props), {
                        className: "recharts-area-curve",
                        layout: a,
                        type: o,
                        connectNulls: l,
                        fill: "none",
                        points: t,
                      }),
                    ),
                );
              },
            },
            {
              key: "renderAreaWithAnimation",
              value: function (e, t) {
                var r = this,
                  n = this.props,
                  i = n.points,
                  a = n.baseLine,
                  o = n.isAnimationActive,
                  l = n.animationBegin,
                  c = n.animationDuration,
                  u = n.animationEasing,
                  d = n.animationId,
                  f = this.state,
                  m = f.prevPoints,
                  p = f.prevBaseLine;
                return g.createElement(
                  B.ZP,
                  {
                    begin: l,
                    duration: c,
                    isActive: o,
                    easing: u,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "area-".concat(d),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (n) {
                    var o = n.t;
                    if (m) {
                      var l,
                        c = m.length / i.length,
                        u = i.map(function (e, t) {
                          var r = Math.floor(t * c);
                          if (m[r]) {
                            var n = m[r],
                              i = (0, R.k4)(n.x, e.x),
                              a = (0, R.k4)(n.y, e.y);
                            return P(P({}, e), {}, { x: i(o), y: a(o) });
                          }
                          return e;
                        });
                      return (
                        (l =
                          (0, R.hj)(a) && "number" == typeof a
                            ? (0, R.k4)(p, a)(o)
                            : y()(a) || s()(a)
                            ? (0, R.k4)(p, 0)(o)
                            : a.map(function (e, t) {
                                var r = Math.floor(t * c);
                                if (p[r]) {
                                  var n = p[r],
                                    i = (0, R.k4)(n.x, e.x),
                                    a = (0, R.k4)(n.y, e.y);
                                  return P(P({}, e), {}, { x: i(o), y: a(o) });
                                }
                                return e;
                              })),
                        r.renderAreaStatically(u, l, e, t)
                      );
                    }
                    return g.createElement(
                      M.m,
                      null,
                      g.createElement(
                        "defs",
                        null,
                        g.createElement(
                          "clipPath",
                          { id: "animationClipPath-".concat(t) },
                          r.renderClipRect(o),
                        ),
                      ),
                      g.createElement(
                        M.m,
                        { clipPath: "url(#animationClipPath-".concat(t, ")") },
                        r.renderAreaStatically(i, a, e, t),
                      ),
                    );
                  },
                );
              },
            },
            {
              key: "renderArea",
              value: function (e, t) {
                var r = this.props,
                  n = r.points,
                  i = r.baseLine,
                  o = r.isAnimationActive,
                  s = this.state,
                  l = s.prevPoints,
                  c = s.prevBaseLine,
                  u = s.totalLength;
                return o &&
                  n &&
                  n.length &&
                  ((!l && u > 0) || !a()(l, n) || !a()(c, i))
                  ? this.renderAreaWithAnimation(e, t)
                  : this.renderAreaStatically(n, i, e, t);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.hide,
                  r = e.dot,
                  n = e.points,
                  i = e.className,
                  a = e.top,
                  o = e.left,
                  s = e.xAxis,
                  l = e.yAxis,
                  c = e.width,
                  u = e.height,
                  d = e.isAnimationActive,
                  f = e.id;
                if (t || !n || !n.length) return null;
                var m = this.state.isAnimationFinished,
                  p = 1 === n.length,
                  h = w()("recharts-area", i),
                  v = (s && s.allowDataOverflow) || (l && l.allowDataOverflow),
                  b = y()(f) ? this.id : f;
                return g.createElement(
                  M.m,
                  { className: h },
                  v
                    ? g.createElement(
                        "defs",
                        null,
                        g.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(b) },
                          g.createElement("rect", {
                            x: o,
                            y: a,
                            width: c,
                            height: Math.floor(u),
                          }),
                        ),
                      )
                    : null,
                  p ? null : this.renderArea(v, b),
                  (r || p) && this.renderDots(v, b),
                  (!d || m) && z.e.renderCallByParent(this.props, n),
                );
              },
            },
          ]) && A(t.prototype, r),
          n && A(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })(g.PureComponent);
      U(L, "displayName", "Area"),
        U(L, "defaultProps", {
          stroke: "#3182bd",
          fill: "#3182bd",
          fillOpacity: 0.6,
          xAxisId: 0,
          yAxisId: 0,
          legendType: "line",
          connectNulls: !1,
          points: [],
          dot: !1,
          activeDot: !0,
          hide: !1,
          isAnimationActive: !E.x.isSsr,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        }),
        U(L, "getBaseValue", function (e, t, r, n) {
          var i = e.layout,
            a = e.baseValue,
            o = t.props.baseValue,
            s = null != o ? o : a;
          if ((0, R.hj)(s) && "number" == typeof s) return s;
          var l = "horizontal" === i ? n : r,
            c = l.scale.domain();
          if ("number" === l.type) {
            var u = Math.max(c[0], c[1]),
              d = Math.min(c[0], c[1]);
            return "dataMin" === s
              ? d
              : "dataMax" === s || u < 0
              ? u
              : Math.max(Math.min(c[0], c[1]), 0);
          }
          return "dataMin" === s ? c[0] : "dataMax" === s ? c[1] : c[0];
        }),
        U(L, "getComposedData", function (e) {
          var t,
            r = e.props,
            n = e.item,
            i = e.xAxis,
            a = e.yAxis,
            o = e.xAxisTicks,
            s = e.yAxisTicks,
            l = e.bandSize,
            c = e.dataKey,
            u = e.stackedData,
            d = e.dataStartIndex,
            f = e.displayedData,
            p = e.offset,
            h = r.layout,
            g = u && u.length,
            b = L.getBaseValue(r, n, i, a),
            w = !1,
            B = f.map(function (e, t) {
              var r,
                n = (0, O.F$)(e, c);
              g ? (r = u[d + t]) : ((r = n), v()(r) ? (w = !0) : (r = [b, r]));
              var f = y()(r[1]) || (g && y()(n));
              return "horizontal" === h
                ? {
                    x: (0, O.Hv)({
                      axis: i,
                      ticks: o,
                      bandSize: l,
                      entry: e,
                      index: t,
                    }),
                    y: f ? null : a.scale(r[1]),
                    value: r,
                    payload: e,
                  }
                : {
                    x: f ? null : i.scale(r[1]),
                    y: (0, O.Hv)({
                      axis: a,
                      ticks: s,
                      bandSize: l,
                      entry: e,
                      index: t,
                    }),
                    value: r,
                    payload: e,
                  };
            });
          return (
            (t =
              g || w
                ? B.map(function (e) {
                    return "horizontal" === h
                      ? {
                          x: e.x,
                          y:
                            y()(m()(e, "value[0]")) || y()(m()(e, "y"))
                              ? null
                              : a.scale(m()(e, "value[0]")),
                        }
                      : {
                          x: y()(m()(e, "value[0]"))
                            ? null
                            : i.scale(m()(e, "value[0]")),
                          y: e.y,
                        };
                  })
                : "horizontal" === h
                ? a.scale(b)
                : i.scale(b)),
            P({ points: B, baseLine: t, layout: h, isRange: w }, p)
          );
        }),
        U(L, "renderDotItem", function (e, t) {
          return g.isValidElement(e)
            ? g.cloneElement(e, t)
            : d()(e)
            ? e(t)
            : g.createElement(
                S.o,
                j({}, t, { className: "recharts-area-dot" }),
              );
        });
      var X = r(75018),
        H = r(52339),
        q = function () {
          return null;
        };
      (q.displayName = "ZAxis"),
        (q.defaultProps = {
          zAxisId: 0,
          range: [64, 64],
          scale: "auto",
          type: "number",
        });
      var G = r(16667),
        V = r(65370),
        K = r(32214),
        Y = r(33790);
      function $(e) {
        return (
          ($ =
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
          $(e)
        );
      }
      function J() {
        return (
          (J = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          J.apply(this, arguments)
        );
      }
      function Q(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Q(Object(r), !0).forEach(function (t) {
                oe(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Q(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function te(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, se(n.key), n);
        }
      }
      function re(e, t) {
        return (
          (re = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          re(e, t)
        );
      }
      function ne(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = ae(e);
          if (t) {
            var i = ae(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === $(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return ie(e);
          })(this, r);
        };
      }
      function ie(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function ae(e) {
        return (
          (ae = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ae(e)
        );
      }
      function oe(e, t, r) {
        return (
          (t = se(t)) in e
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
      function se(e) {
        var t = (function (e, t) {
          if ("object" !== $(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== $(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === $(t) ? t : String(t);
      }
      var le = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && re(e, t);
        })(o, e);
        var t,
          r,
          n,
          i = ne(o);
        function o() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, o);
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            oe(ie((e = i.call.apply(i, [this].concat(r)))), "state", {
              isAnimationFinished: !1,
            }),
            oe(ie(e), "handleAnimationEnd", function () {
              e.setState({ isAnimationFinished: !0 });
            }),
            oe(ie(e), "handleAnimationStart", function () {
              e.setState({ isAnimationFinished: !1 });
            }),
            oe(ie(e), "id", (0, R.EL)("recharts-scatter-")),
            e
          );
        }
        return (
          (t = o),
          (n = [
            {
              key: "getDerivedStateFromProps",
              value: function (e, t) {
                return e.animationId !== t.prevAnimationId
                  ? {
                      prevAnimationId: e.animationId,
                      curPoints: e.points,
                      prevPoints: t.curPoints,
                    }
                  : e.points !== t.curPoints
                  ? { curPoints: e.points }
                  : null;
              },
            },
            {
              key: "renderSymbolItem",
              value: function (e, t) {
                var r;
                return (
                  g.isValidElement(e)
                    ? (r = g.cloneElement(e, t))
                    : d()(e)
                    ? (r = e(t))
                    : "string" == typeof e &&
                      (r = g.createElement(G.v, J({}, t, { type: e }))),
                  r
                );
              },
            },
          ]),
          (r = [
            {
              key: "renderSymbolsStatically",
              value: function (e) {
                var t = this,
                  r = this.props,
                  n = r.shape,
                  i = r.activeShape,
                  a = r.activeIndex,
                  s = (0, F.L6)(this.props);
                return e.map(function (e, r) {
                  var l = ee(ee({ key: "symbol-".concat(r) }, s), e);
                  return g.createElement(
                    M.m,
                    J(
                      { className: "recharts-scatter-symbol" },
                      (0, Y.bw)(t.props, e, r),
                      { key: "symbol-".concat(r), role: "img" },
                    ),
                    o.renderSymbolItem(a === r ? i : n, l),
                  );
                });
              },
            },
            {
              key: "renderSymbolsWithAnimation",
              value: function () {
                var e = this,
                  t = this.props,
                  r = t.points,
                  n = t.isAnimationActive,
                  i = t.animationBegin,
                  a = t.animationDuration,
                  o = t.animationEasing,
                  s = t.animationId,
                  l = this.state.prevPoints;
                return g.createElement(
                  B.ZP,
                  {
                    begin: i,
                    duration: a,
                    isActive: n,
                    easing: o,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(s),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (t) {
                    var n = t.t,
                      i = r.map(function (e, t) {
                        var r = l && l[t];
                        if (r) {
                          var i = (0, R.k4)(r.cx, e.cx),
                            a = (0, R.k4)(r.cy, e.cy),
                            o = (0, R.k4)(r.size, e.size);
                          return ee(
                            ee({}, e),
                            {},
                            { cx: i(n), cy: a(n), size: o(n) },
                          );
                        }
                        var s = (0, R.k4)(0, e.size);
                        return ee(ee({}, e), {}, { size: s(n) });
                      });
                    return g.createElement(
                      M.m,
                      null,
                      e.renderSymbolsStatically(i),
                    );
                  },
                );
              },
            },
            {
              key: "renderSymbols",
              value: function () {
                var e = this.props,
                  t = e.points,
                  r = e.isAnimationActive,
                  n = this.state.prevPoints;
                return !(r && t && t.length) || (n && a()(n, t))
                  ? this.renderSymbolsStatically(t)
                  : this.renderSymbolsWithAnimation();
              },
            },
            {
              key: "renderErrorBar",
              value: function () {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var e = this.props,
                  t = e.points,
                  r = e.xAxis,
                  n = e.yAxis,
                  i = e.children,
                  a = (0, F.NN)(i, V.W);
                if (!a) return null;
                function o(e, t) {
                  return {
                    x: e.cx,
                    y: e.cy,
                    value: +e.node.y,
                    errorVal: (0, O.F$)(e, t),
                  };
                }
                function s(e, t) {
                  return {
                    x: e.cx,
                    y: e.cy,
                    value: +e.node.x,
                    errorVal: (0, O.F$)(e, t),
                  };
                }
                return a.map(function (e, i) {
                  var a = e.props.direction;
                  return g.cloneElement(e, {
                    key: i,
                    data: t,
                    xAxis: r,
                    yAxis: n,
                    layout: "x" === a ? "vertical" : "horizontal",
                    dataPointFormatter: "x" === a ? s : o,
                  });
                });
              },
            },
            {
              key: "renderLine",
              value: function () {
                var e,
                  t,
                  r = this.props,
                  n = r.points,
                  i = r.line,
                  a = r.lineType,
                  o = r.lineJointType,
                  s = (0, F.L6)(this.props),
                  l = (0, F.L6)(i);
                if ("joint" === a)
                  e = n.map(function (e) {
                    return { x: e.cx, y: e.cy };
                  });
                else if ("fitting" === a) {
                  var c = (0, R.wr)(n),
                    u = c.xmin,
                    f = c.xmax,
                    m = c.a,
                    p = c.b,
                    y = function (e) {
                      return m * e + p;
                    };
                  e = [
                    { x: u, y: y(u) },
                    { x: f, y: y(f) },
                  ];
                }
                var h = ee(
                  ee(ee({}, s), {}, { fill: "none", stroke: s && s.fill }, l),
                  {},
                  { points: e },
                );
                return (
                  (t = g.isValidElement(i)
                    ? g.cloneElement(i, h)
                    : d()(i)
                    ? i(h)
                    : g.createElement(_.H, J({}, h, { type: o }))),
                  g.createElement(
                    M.m,
                    {
                      className: "recharts-scatter-line",
                      key: "recharts-scatter-line",
                    },
                    t,
                  )
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.hide,
                  r = e.points,
                  n = e.line,
                  i = e.className,
                  a = e.xAxis,
                  o = e.yAxis,
                  s = e.left,
                  l = e.top,
                  c = e.width,
                  u = e.height,
                  d = e.id,
                  f = e.isAnimationActive;
                if (t || !r || !r.length) return null;
                var m = this.state.isAnimationFinished,
                  p = w()("recharts-scatter", i),
                  h = (a && a.allowDataOverflow) || (o && o.allowDataOverflow),
                  v = y()(d) ? this.id : d;
                return g.createElement(
                  M.m,
                  {
                    className: p,
                    clipPath: h ? "url(#clipPath-".concat(v, ")") : null,
                  },
                  h
                    ? g.createElement(
                        "defs",
                        null,
                        g.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(v) },
                          g.createElement("rect", {
                            x: s,
                            y: l,
                            width: c,
                            height: u,
                          }),
                        ),
                      )
                    : null,
                  n && this.renderLine(),
                  this.renderErrorBar(),
                  g.createElement(
                    M.m,
                    { key: "recharts-scatter-symbols" },
                    this.renderSymbols(),
                  ),
                  (!f || m) && z.e.renderCallByParent(this.props, r),
                );
              },
            },
          ]) && te(t.prototype, r),
          n && te(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })(g.PureComponent);
      oe(le, "displayName", "Scatter"),
        oe(le, "defaultProps", {
          xAxisId: 0,
          yAxisId: 0,
          zAxisId: 0,
          legendType: "circle",
          lineType: "joint",
          lineJointType: "linear",
          data: [],
          shape: "circle",
          hide: !1,
          isAnimationActive: !E.x.isSsr,
          animationBegin: 0,
          animationDuration: 400,
          animationEasing: "linear",
        }),
        oe(le, "getComposedData", function (e) {
          var t = e.xAxis,
            r = e.yAxis,
            n = e.zAxis,
            i = e.item,
            a = e.displayedData,
            o = e.xAxisTicks,
            s = e.yAxisTicks,
            l = e.offset,
            c = i.props.tooltipType,
            u = (0, F.NN)(i.props.children, K.b),
            d = y()(t.dataKey) ? i.props.dataKey : t.dataKey,
            f = y()(r.dataKey) ? i.props.dataKey : r.dataKey,
            m = n && n.dataKey,
            p = n ? n.range : q.defaultProps.range,
            h = p && p[0],
            v = t.scale.bandwidth ? t.scale.bandwidth() : 0,
            g = r.scale.bandwidth ? r.scale.bandwidth() : 0,
            b = a.map(function (e, a) {
              var l = (0, O.F$)(e, d),
                p = (0, O.F$)(e, f),
                b = (!y()(m) && (0, O.F$)(e, m)) || "-",
                w = [
                  {
                    name: y()(t.dataKey) ? i.props.name : t.name || t.dataKey,
                    unit: t.unit || "",
                    value: l,
                    payload: e,
                    dataKey: d,
                    type: c,
                  },
                  {
                    name: y()(r.dataKey) ? i.props.name : r.name || r.dataKey,
                    unit: r.unit || "",
                    value: p,
                    payload: e,
                    dataKey: f,
                    type: c,
                  },
                ];
              "-" !== b &&
                w.push({
                  name: n.name || n.dataKey,
                  unit: n.unit || "",
                  value: b,
                  payload: e,
                  dataKey: m,
                  type: c,
                });
              var B = (0, O.Hv)({
                  axis: t,
                  ticks: o,
                  bandSize: v,
                  entry: e,
                  index: a,
                  dataKey: d,
                }),
                _ = (0, O.Hv)({
                  axis: r,
                  ticks: s,
                  bandSize: g,
                  entry: e,
                  index: a,
                  dataKey: f,
                }),
                S = "-" !== b ? n.scale(b) : h,
                M = Math.sqrt(Math.max(S, 0) / Math.PI);
              return ee(
                ee({}, e),
                {},
                {
                  cx: B,
                  cy: _,
                  x: B - M,
                  y: _ - M,
                  xAxis: t,
                  yAxis: r,
                  zAxis: n,
                  width: 2 * M,
                  height: 2 * M,
                  size: S,
                  node: { x: l, y: p, z: b },
                  tooltipPayload: w,
                  tooltipPosition: { x: B, y: _ },
                  payload: e,
                },
                u && u[a] && u[a].props,
              );
            });
          return ee({ points: b }, l);
        });
      var ce = r(23007),
        ue = r(58104),
        de = r(87210),
        fe = (0, n.z)({
          chartName: "ComposedChart",
          GraphicalChild: [H.x, L, X.$, le],
          axisComponents: [
            { axisType: "xAxis", AxisComp: ce.K },
            { axisType: "yAxis", AxisComp: ue.B },
            { axisType: "zAxis", AxisComp: q },
          ],
          formatAxisMap: de.t9,
        });
    },
    30310: (e, t, r) => {
      r.d(t, { h: () => se });
      var n = r(64403),
        i = r.n(n),
        a = r(89526),
        o = r(73961),
        s = function (e, t) {
          return (
            (s =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }),
            s(e, t)
          );
        };
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " +
              String(t) +
              " is not a constructor or null",
          );
        function r() {
          this.constructor = e;
        }
        s(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      function c(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        }
        return r;
      }
      var u =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : void 0 !== r.g
          ? r.g
          : "undefined" != typeof self
          ? self
          : {};
      var d = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        },
        f = "object" == typeof u && u && u.Object === Object && u,
        m = "object" == typeof self && self && self.Object === Object && self,
        p = f || m || Function("return this")(),
        y = p,
        h = function () {
          return y.Date.now();
        },
        v = /\s/;
      var g = function (e) {
          for (var t = e.length; t-- && v.test(e.charAt(t)); );
          return t;
        },
        b = /^\s+/;
      var w = function (e) {
          return e ? e.slice(0, g(e) + 1).replace(b, "") : e;
        },
        B = p.Symbol,
        _ = B,
        S = Object.prototype,
        M = S.hasOwnProperty,
        z = S.toString,
        E = _ ? _.toStringTag : void 0;
      var R = function (e) {
          var t = M.call(e, E),
            r = e[E];
          try {
            e[E] = void 0;
            var n = !0;
          } catch (e) {}
          var i = z.call(e);
          return n && (t ? (e[E] = r) : delete e[E]), i;
        },
        O = Object.prototype.toString;
      var F = R,
        D = function (e) {
          return O.call(e);
        },
        T = B ? B.toStringTag : void 0;
      var x = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : T && T in Object(e)
            ? F(e)
            : D(e);
        },
        j = function (e) {
          return null != e && "object" == typeof e;
        };
      var W = w,
        P = d,
        A = function (e) {
          return "symbol" == typeof e || (j(e) && "[object Symbol]" == x(e));
        },
        k = /^[-+]0x[0-9a-f]+$/i,
        I = /^0b[01]+$/i,
        C = /^0o[0-7]+$/i,
        N = parseInt;
      var U = d,
        Z = h,
        L = function (e) {
          if ("number" == typeof e) return e;
          if (A(e)) return NaN;
          if (P(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = P(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = W(e);
          var r = I.test(e);
          return r || C.test(e)
            ? N(e.slice(2), r ? 2 : 8)
            : k.test(e)
            ? NaN
            : +e;
        },
        X = Math.max,
        H = Math.min;
      var q = function (e, t, r) {
          var n,
            i,
            a,
            o,
            s,
            l,
            c = 0,
            u = !1,
            d = !1,
            f = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function m(t) {
            var r = n,
              a = i;
            return (n = i = void 0), (c = t), (o = e.apply(a, r));
          }
          function p(e) {
            var r = e - l;
            return void 0 === l || r >= t || r < 0 || (d && e - c >= a);
          }
          function y() {
            var e = Z();
            if (p(e)) return h(e);
            s = setTimeout(
              y,
              (function (e) {
                var r = t - (e - l);
                return d ? H(r, a - (e - c)) : r;
              })(e),
            );
          }
          function h(e) {
            return (s = void 0), f && n ? m(e) : ((n = i = void 0), o);
          }
          function v() {
            var e = Z(),
              r = p(e);
            if (((n = arguments), (i = this), (l = e), r)) {
              if (void 0 === s)
                return (function (e) {
                  return (c = e), (s = setTimeout(y, t)), u ? m(e) : o;
                })(l);
              if (d) return clearTimeout(s), (s = setTimeout(y, t)), m(l);
            }
            return void 0 === s && (s = setTimeout(y, t)), o;
          }
          return (
            (t = L(t) || 0),
            U(r) &&
              ((u = !!r.leading),
              (a = (d = "maxWait" in r) ? X(L(r.maxWait) || 0, t) : a),
              (f = "trailing" in r ? !!r.trailing : f)),
            (v.cancel = function () {
              void 0 !== s && clearTimeout(s),
                (c = 0),
                (n = l = i = s = void 0);
            }),
            (v.flush = function () {
              return void 0 === s ? o : h(Z());
            }),
            v
          );
        },
        G = q,
        V = d;
      var K = function (e, t, r) {
          var n = !0,
            i = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          return (
            V(r) &&
              ((n = "leading" in r ? !!r.leading : n),
              (i = "trailing" in r ? !!r.trailing : i)),
            G(e, t, { leading: n, maxWait: t, trailing: i })
          );
        },
        Y = function (e, t, r, n) {
          switch (t) {
            case "debounce":
              return q(e, r, n);
            case "throttle":
              return K(e, r, n);
            default:
              return e;
          }
        },
        $ = function (e) {
          return "function" == typeof e;
        },
        J = function () {
          return "undefined" == typeof window;
        },
        Q = function (e) {
          return e instanceof Element || e instanceof HTMLDocument;
        },
        ee = function (e, t, r, n) {
          return function (i) {
            var a = i.width,
              o = i.height;
            t(function (t) {
              return (t.width === a && t.height === o) ||
                (t.width === a && !n) ||
                (t.height === o && !r)
                ? t
                : (e && $(e) && e(a, o), { width: a, height: o });
            });
          };
        },
        te = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            (r.cancelHandler = function () {
              r.resizeHandler &&
                r.resizeHandler.cancel &&
                (r.resizeHandler.cancel(), (r.resizeHandler = null));
            }),
              (r.attachObserver = function () {
                var e = r.props,
                  t = e.targetRef,
                  n = e.observerOptions;
                if (!J()) {
                  t && t.current && (r.targetRef.current = t.current);
                  var i = r.getElement();
                  i &&
                    ((r.observableElement && r.observableElement === i) ||
                      ((r.observableElement = i),
                      r.resizeObserver.observe(i, n)));
                }
              }),
              (r.getElement = function () {
                var e = r.props,
                  t = e.querySelector,
                  n = e.targetDomEl;
                if (J()) return null;
                if (t) return document.querySelector(t);
                if (n && Q(n)) return n;
                if (r.targetRef && Q(r.targetRef.current))
                  return r.targetRef.current;
                var i = (0, o.findDOMNode)(r);
                if (!i) return null;
                switch (r.getRenderType()) {
                  case "renderProp":
                  case "childFunction":
                  case "child":
                  case "childArray":
                    return i;
                  default:
                    return i.parentElement;
                }
              }),
              (r.createResizeHandler = function (e) {
                var t = r.props,
                  n = t.handleWidth,
                  i = void 0 === n || n,
                  a = t.handleHeight,
                  o = void 0 === a || a,
                  s = t.onResize;
                if (i || o) {
                  var l = ee(s, r.setState.bind(r), i, o);
                  e.forEach(function (e) {
                    var t = (e && e.contentRect) || {},
                      n = t.width,
                      i = t.height;
                    !r.skipOnMount && !J() && l({ width: n, height: i }),
                      (r.skipOnMount = !1);
                  });
                }
              }),
              (r.getRenderType = function () {
                var e = r.props,
                  t = e.render,
                  n = e.children;
                return $(t)
                  ? "renderProp"
                  : $(n)
                  ? "childFunction"
                  : (0, a.isValidElement)(n)
                  ? "child"
                  : Array.isArray(n)
                  ? "childArray"
                  : "parent";
              });
            var n = t.skipOnMount,
              i = t.refreshMode,
              s = t.refreshRate,
              l = void 0 === s ? 1e3 : s,
              c = t.refreshOptions;
            return (
              (r.state = { width: void 0, height: void 0 }),
              (r.skipOnMount = n),
              (r.targetRef = (0, a.createRef)()),
              (r.observableElement = null),
              J() ||
                ((r.resizeHandler = Y(r.createResizeHandler, i, l, c)),
                (r.resizeObserver = new window.ResizeObserver(
                  r.resizeHandler,
                ))),
              r
            );
          }
          return (
            l(t, e),
            (t.prototype.componentDidMount = function () {
              this.attachObserver();
            }),
            (t.prototype.componentDidUpdate = function () {
              this.attachObserver();
            }),
            (t.prototype.componentWillUnmount = function () {
              J() ||
                ((this.observableElement = null),
                this.resizeObserver.disconnect(),
                this.cancelHandler());
            }),
            (t.prototype.render = function () {
              var e,
                t = this.props,
                r = t.render,
                n = t.children,
                i = t.nodeType,
                o = void 0 === i ? "div" : i,
                s = this.state,
                l = {
                  width: s.width,
                  height: s.height,
                  targetRef: this.targetRef,
                };
              switch (this.getRenderType()) {
                case "renderProp":
                  return r && r(l);
                case "childFunction":
                  return (e = n)(l);
                case "child":
                  if ((e = n).type && "string" == typeof e.type) {
                    var u = c(l, ["targetRef"]);
                    return (0, a.cloneElement)(e, u);
                  }
                  return (0, a.cloneElement)(e, l);
                case "childArray":
                  return (e = n).map(function (e) {
                    return !!e && (0, a.cloneElement)(e, l);
                  });
                default:
                  return a.createElement(o, null);
              }
            }),
            t
          );
        })(a.PureComponent);
      J() ? a.useEffect : a.useLayoutEffect;
      var re = r(16171),
        ne = r(78706);
      function ie() {
        return (
          (ie = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ie.apply(this, arguments)
        );
      }
      function ae(e, t) {
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
              var n,
                i,
                a,
                o,
                s = [],
                l = !0,
                c = !1;
              try {
                if (((a = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = a.call(r)).done) &&
                    (s.push(n.value), s.length !== t);
                    l = !0
                  );
              } catch (e) {
                (c = !0), (i = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((o = r.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw i;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return oe(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return oe(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function oe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var se = (0, a.forwardRef)(function (e, t) {
        var r = e.aspect,
          n = e.width,
          o = void 0 === n ? "100%" : n,
          s = e.height,
          l = void 0 === s ? "100%" : s,
          c = e.minWidth,
          u = e.minHeight,
          d = e.maxHeight,
          f = e.children,
          m = e.debounce,
          p = void 0 === m ? 0 : m,
          y = e.id,
          h = e.className,
          v = ae(
            (0, a.useState)({ containerWidth: -1, containerHeight: -1 }),
            2,
          ),
          g = v[0],
          b = v[1],
          w = (0, a.useRef)(null);
        (0, a.useImperativeHandle)(
          t,
          function () {
            return w;
          },
          [w],
        );
        var B = (0, a.useCallback)(function () {
            return w.current
              ? {
                  containerWidth: w.current.clientWidth,
                  containerHeight: w.current.clientHeight,
                }
              : null;
          }, []),
          _ = (0, a.useCallback)(
            function () {
              var e = B();
              if (e) {
                var t = e.containerWidth,
                  r = e.containerHeight;
                b(function (e) {
                  var n = e.containerWidth,
                    i = e.containerHeight;
                  return t !== n || r !== i
                    ? { containerWidth: t, containerHeight: r }
                    : e;
                });
              }
            },
            [B],
          ),
          S = (0, a.useMemo)(
            function () {
              var e = g.containerWidth,
                t = g.containerHeight;
              if (e < 0 || t < 0) return null;
              (0, ne.Z)(
                (0, re.hU)(o) || (0, re.hU)(l),
                "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
                o,
                l,
              ),
                (0, ne.Z)(
                  !r || r > 0,
                  "The aspect(%s) must be greater than zero.",
                  r,
                );
              var n = (0, re.hU)(o) ? e : o,
                i = (0, re.hU)(l) ? t : l;
              return (
                r &&
                  r > 0 &&
                  (n ? (i = n / r) : i && (n = i * r), d && i > d && (i = d)),
                (0, ne.Z)(
                  n > 0 || i > 0,
                  "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                  n,
                  i,
                  o,
                  l,
                  c,
                  u,
                  r,
                ),
                (0, a.cloneElement)(f, { width: n, height: i })
              );
            },
            [r, f, l, d, u, c, g, o],
          );
        (0, a.useEffect)(
          function () {
            var e = B();
            e && b(e);
          },
          [B],
        );
        var M = {
          width: o,
          height: l,
          minWidth: c,
          minHeight: u,
          maxHeight: d,
        };
        return a.createElement(
          te,
          {
            handleWidth: !0,
            handleHeight: !0,
            onResize: _,
            targetRef: w,
            refreshMode: p > 0 ? "debounce" : void 0,
            refreshRate: p,
          },
          a.createElement(
            "div",
            ie({}, null != y ? { id: "".concat(y) } : {}, {
              className: i()("recharts-responsive-container", h),
              style: M,
              ref: w,
            }),
            S,
          ),
        );
      });
    },
    626: (e) => {
      var t = function () {};
      e.exports = t;
    },
    16020: (e, t, r) => {
      r.d(t, {
        A8: () => s,
        NK: () => f,
        On: () => h,
        Wx: () => p,
        X3: () => l,
        iC: () => c,
        sj: () => u,
      });
      var n = r(45878),
        i = r(43898),
        a = r(67328);
      const o = n.Message;
      var s, l;
      !(function (e) {
        (e[(e.k_EDailyDealStoreItemType_Unknown = -1)] =
          "k_EDailyDealStoreItemType_Unknown"),
          (e[(e.k_EDailyDealStoreItemType_App = 0)] =
            "k_EDailyDealStoreItemType_App"),
          (e[(e.k_EDailyDealStoreItemType_Sub = 1)] =
            "k_EDailyDealStoreItemType_Sub"),
          (e[(e.k_EDailyDealStoreItemType_Bundle = 2)] =
            "k_EDailyDealStoreItemType_Bundle");
      })(s || (s = {}));
      class c extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.gid || i.aR(c.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  store_item_type: {
                    n: 2,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  store_item_id: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  store_item_name: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  discount_event_id: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  creator_id: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rtime32_start_time: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  last_update_time: {
                    n: 8,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  template_json: {
                    n: 9,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  partner_jsondata: {
                    n: 10,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  internal_json: {
                    n: 11,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  deleted: { n: 12, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDealDetails";
        }
      }
      class u extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.daily_deal || i.aR(u.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  daily_deal: { n: 1, c },
                  appid: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_CreateDailyDeal_Request";
        }
      }
      class d extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.gid || i.aR(d.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_CreateDailyDeal_Response";
        }
      }
      class f extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.daily_deal || i.aR(f.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  daily_deal: { n: 1, c },
                  gid: {
                    n: 2,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = i.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_UpdateDailyDeal_Request";
        }
      }
      class m extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new m();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_UpdateDailyDeal_Response";
        }
      }
      class p extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.gid || i.aR(p.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = i.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_DeleteDailyDeal_Request";
        }
      }
      class y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_DeleteDailyDeal_Response";
        }
      }
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.gid || i.aR(h.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  rtime32_start_date: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rtime32_end_date: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  appid: { n: 4, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  store_item_type: {
                    n: 5,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  search_term: {
                    n: 6,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_GetDailyDeals_Request";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.daily_deals || i.aR(v.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: { daily_deals: { n: 1, c, r: !0, q: !0 } },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = i.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDailyDeal_GetDailyDeals_Response";
        }
      }
      !(function (e) {
        (e.GetDailyDeals = function (e, t) {
          return e.SendMsg("DailyDeal.GetDailyDeals#1", (0, a.MD)(h, t), v, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.CreateDailyDeal = function (e, t) {
            return e.SendMsg(
              "DailyDeal.CreateDailyDeal#1",
              (0, a.MD)(u, t),
              d,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateDailyDeal = function (e, t) {
            return e.SendMsg(
              "DailyDeal.UpdateDailyDeal#1",
              (0, a.MD)(f, t),
              m,
              { ePrivilege: 1 },
            );
          }),
          (e.DeleteDailyDeal = function (e, t) {
            return e.SendMsg(
              "DailyDeal.DeleteDailyDeal#1",
              (0, a.MD)(p, t),
              y,
              { ePrivilege: 1 },
            );
          });
      })(l || (l = {}));
    },
    81005: (e, t, r) => {
      r.d(t, {
        Bp: () => g,
        Fc: () => d,
        I8: () => C,
        IJ: () => f,
        L2: () => H,
        Ng: () => k,
        Zb: () => l,
        bn: () => w,
        eh: () => p,
        nd: () => c,
        ow: () => h,
        v9: () => u,
      });
      var n = r(45878),
        i = r(43898),
        a = r(67328);
      const o = n.Message;
      var s, l, c, u;
      !(function (e) {
        (e[(e.k_EPromotionNotification_Unknown = 0)] =
          "k_EPromotionNotification_Unknown"),
          (e[(e.k_EPromotionNotification_AssetRequest = 1)] =
            "k_EPromotionNotification_AssetRequest"),
          (e[(e.k_EPromotionNotification_AssetRequest_Reminder = 2)] =
            "k_EPromotionNotification_AssetRequest_Reminder"),
          (e[(e.k_EPromotionNotification_AssetRequest_Submitted = 3)] =
            "k_EPromotionNotification_AssetRequest_Submitted"),
          (e[(e.k_EPromotionNotification_MAX = 4)] =
            "k_EPromotionNotification_MAX");
      })(s || (s = {})),
        (function (e) {
          (e[(e.k_EPromotionEventInvite_Invalid = 0)] =
            "k_EPromotionEventInvite_Invalid"),
            (e[(e.k_EPromotionEventInvite_DailyDeal = 1)] =
              "k_EPromotionEventInvite_DailyDeal"),
            (e[(e.k_EPromotionEventInvite_MidWeekDeal = 2)] =
              "k_EPromotionEventInvite_MidWeekDeal"),
            (e[(e.k_EPromotionEventInvite_WeekendDeal = 3)] =
              "k_EPromotionEventInvite_WeekendDeal"),
            (e[(e.k_EPromotionEventInvite_AssetAndActionRequest = 4)] =
              "k_EPromotionEventInvite_AssetAndActionRequest");
        })(l || (l = {}));
      class d extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.promotion_id || i.aR(d.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  admin_jsondata: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  partner_jsondata: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  input_jsondata: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  rtime32_start_time: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  partner_id: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  input_access_key: {
                    n: 8,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan";
        }
      }
      class f extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.plan || i.aR(f.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m || (f.sm_m = { proto: f, fields: { plan: { n: 1, c: d } } }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = i.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Request";
        }
      }
      class m extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.promotion_id || i.aR(m.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  input_access_key: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = i.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Response";
        }
      }
      class p extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.plan || i.aR(p.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  plan: { n: 1, c: d },
                  promotion_id: {
                    n: 2,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = i.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Request";
        }
      }
      class y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Response";
        }
      }
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.promotion_id || i.aR(h.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Request";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.plan || i.aR(v.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m || (v.sm_m = { proto: v, fields: { plan: { n: 1, c: d } } }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = i.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Response";
        }
      }
      class g extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Request";
        }
      }
      class b extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.plan || i.aR(b.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { plan: { n: 1, c: d, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = i.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Response";
        }
      }
      class w extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.promotion_id || i.aR(w.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = i.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Request";
        }
      }
      class B extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new B();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Response";
        }
      }
      class _ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.token || i.aR(_.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  token: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = i.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Request";
        }
      }
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.plan || i.aR(S.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { plan: { n: 1, c: d, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = i.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Response";
        }
      }
      class M extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.input_access_key || i.aR(M.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  input_access_key: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = i.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Request";
        }
      }
      class z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.plan || i.aR(z.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m || (z.sm_m = { proto: z, fields: { plan: { n: 1, c: d } } }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = i.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Response";
        }
      }
      class E extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.promotion_id || i.aR(E.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  notification_type: {
                    n: 2,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  only_explicit_email_addresses: {
                    n: 3,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = i.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Request";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new R();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Response";
        }
      }
      class O extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.promotion_id || i.aR(O.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = i.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Request";
        }
      }
      class F extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.results || i.aR(F.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { results: { n: 1, c: D, r: !0, q: !0 } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = i.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Response";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.notification_id || i.aR(D.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  notification_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  tracking_id: {
                    n: 2,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  email_address: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  accountid: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  status: { n: 5, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  type: { n: 6, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  rt_send_time: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = i.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionNotificationResults";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.promotion_id || i.aR(T.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = i.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Request";
        }
      }
      class x extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new x();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Response";
        }
      }
      class j extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.promotion_id || i.aR(j.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  add: { n: 2, br: i.FE.readBool, bw: i.Xc.writeBool },
                  email_address: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = i.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Request";
        }
      }
      class W extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Response";
        }
      }
      class P extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.spotlight_due_date || i.aR(P.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  spotlight_due_date: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  marketing_message_due_date: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  discount_event_due_date: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = i.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionRequirements";
        }
      }
      class A extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.inviteid || i.aR(A.M()),
            o.initialize(this, e, 0, -1, [16], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  inviteid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  invite_account: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rtinvitetime: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rtexpiretime: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  type: { n: 6, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  accept_account: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rtaccepttime: {
                    n: 8,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rtdatechosen: {
                    n: 9,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  discount_eventid: {
                    n: 10,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  packageid: {
                    n: 11,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  bundleid: {
                    n: 12,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  primary_partnerid: {
                    n: 13,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  deadlines: { n: 14, c: P },
                  notify_partner: {
                    n: 15,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  additional_email: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: i.FE.readString,
                    bw: i.Xc.writeRepeatedString,
                  },
                  promotion_id: {
                    n: 17,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = i.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvitation";
        }
      }
      class k extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.invite || i.aR(k.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  invite: { n: 1, c: A },
                  queue_email_to_send: {
                    n: 2,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = i.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Request";
        }
      }
      class I extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.inviteid || i.aR(I.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  inviteid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = i.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Response";
        }
      }
      class C extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.inviteid || i.aR(C.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  inviteid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  packageid: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  bundleid: { n: 4, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  partnerid: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  promotion_id: {
                    n: 6,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = i.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Request";
        }
      }
      class N extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.invites || i.aR(N.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: { invites: { n: 1, c: A, r: !0, q: !0 } },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = i.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Response";
        }
      }
      class U extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.partnerid || i.aR(U.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  partnerid: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = i.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetAllActiveInvites_Request";
        }
      }
      class Z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.invites || i.aR(Z.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: { invites: { n: 1, c: A, r: !0, q: !0 } },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = i.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetAllActiveInvites_Response";
        }
      }
      class L extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.inviteid || i.aR(L.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  inviteid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  only_notify_additional_email: {
                    n: 2,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = i.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Request";
        }
      }
      class X extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new X();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Response";
        }
      }
      class H extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.inviteid || i.aR(H.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  inviteid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = i.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Request";
        }
      }
      class q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.accountid || i.aR(q.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  accountid: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  partnerid: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  email_address: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = i.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInviteReceive";
        }
      }
      class G extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.targets || i.aR(G.M()),
            o.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  targets: { n: 1, c: q, r: !0, q: !0 },
                  additional_email_address: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readString,
                    bw: i.Xc.writeRepeatedString,
                  },
                  valve_account_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                  operation_email: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = i.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Response";
        }
      }
      !(function (e) {
        (e.CreatePlan = function (e, t) {
          return e.SendMsg(
            "PromotionPlanning.CreatePlan#1",
            (0, a.MD)(f, t),
            m,
            { ePrivilege: 1 },
          );
        }),
          (e.CreateTentativePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.CreateTentativePlan#1",
              (0, a.MD)(f, t),
              m,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlan#1",
              (0, a.MD)(p, t),
              y,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanPartnerInfo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanPartnerInfo#1",
              (0, a.MD)(p, t),
              y,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanInputData = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanInputData#1",
              (0, a.MD)(p, t),
              y,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.DeletePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.DeletePlan#1",
              (0, a.MD)(w, t),
              B,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlan#1",
              (0, a.MD)(h, t),
              v,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllActivePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllActivePlan#1",
              (0, a.MD)(g, t),
              b,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SearchPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SearchPlan#1",
              (0, a.MD)(_, t),
              S,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanByInputAccessKey = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByInputAccessKey#1",
              (0, a.MD)(M, t),
              z,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SendNotification#1",
              (0, a.MD)(E, t),
              R,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetSentNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetSentNotification#1",
              (0, a.MD)(O, t),
              F,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ResendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.ResendNotification#1",
              (0, a.MD)(T, t),
              x,
              { ePrivilege: 1 },
            );
          }),
          (e.SetPromotionEmailTarget = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SetPromotionEmailTarget#1",
              (0, a.MD)(j, t),
              W,
              { ePrivilege: 1 },
            );
          });
      })(c || (c = {})),
        (function (e) {
          (e.SetInvite = function (e, t) {
            return e.SendMsg(
              "PromotionEventInvites.SetInvite#1",
              (0, a.MD)(k, t),
              I,
              { ePrivilege: 4 },
            );
          }),
            (e.GetInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetInvite#1",
                (0, a.MD)(C, t),
                N,
                { bConstMethod: !0, ePrivilege: 11 },
              );
            }),
            (e.GetAllActiveInvites = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetAllActiveInvites#1",
                (0, a.MD)(U, t),
                Z,
                { bConstMethod: !0, ePrivilege: 11 },
              );
            }),
            (e.ResendEmailInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.ResendEmailInvite#1",
                (0, a.MD)(L, t),
                X,
                { ePrivilege: 4 },
              );
            }),
            (e.GetEmailTargets = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetEmailTargets#1",
                (0, a.MD)(H, t),
                G,
                { ePrivilege: 4 },
              );
            });
        })(u || (u = {}));
    },
    39261: (e, t, r) => {
      r.d(t, { Fi: () => I, Hm: () => u, hy: () => d, it: () => m });
      var n = r(45878),
        i = r(43898),
        a = r(67328);
      const o = n.Message;
      var s, l, c, u, d, f, m, p;
      !(function (e) {
        (e[(e.k_EUserLastReadFeed_Invalid = 0)] =
          "k_EUserLastReadFeed_Invalid"),
          (e[(e.k_EUserLastReadFeed_TradeOffers = 1)] =
            "k_EUserLastReadFeed_TradeOffers"),
          (e[(e.k_EUserLastReadFeed_AuctionWins = 2)] =
            "k_EUserLastReadFeed_AuctionWins"),
          (e[(e.k_EUserLastReadFeed_SteamAnnouncement = 3)] =
            "k_EUserLastReadFeed_SteamAnnouncement");
      })(s || (s = {})),
        (function (e) {
          (e[(e.k_ESetUserCountryError_None = 0)] =
            "k_ESetUserCountryError_None"),
            (e[(e.k_ESetUserCountryError_NewCountryMustMatchWebIP = 1)] =
              "k_ESetUserCountryError_NewCountryMustMatchWebIP"),
            (e[(e.k_ESetUserCountryError_NewCountryMustMatchClientIP = 2)] =
              "k_ESetUserCountryError_NewCountryMustMatchClientIP"),
            (e[(e.k_ESetUserCountryError_MilitaryCountryMustBeUSA = 3)] =
              "k_ESetUserCountryError_MilitaryCountryMustBeUSA"),
            (e[(e.k_ESetUserCountryError_NoUSMilitaryBaseInIPCountry = 4)] =
              "k_ESetUserCountryError_NoUSMilitaryBaseInIPCountry"),
            (e[(e.k_ESetUserCountryError_InvalidMilitaryAddress = 5)] =
              "k_ESetUserCountryError_InvalidMilitaryAddress"),
            (e[(e.k_ESetUserCountryError_HasPendingPurchase = 6)] =
              "k_ESetUserCountryError_HasPendingPurchase"),
            (e[(e.k_ESetUserCountryError_HasRecentPurchase = 7)] =
              "k_ESetUserCountryError_HasRecentPurchase"),
            (e[(e.k_ESetUserCountryError_HasRecentCountryChange = 8)] =
              "k_ESetUserCountryError_HasRecentCountryChange"),
            (e[(e.k_ESetUserCountryError_WalletConversionFailed = 9)] =
              "k_ESetUserCountryError_WalletConversionFailed");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EUserAccountHistoryCategory_Invalid = 0)] =
            "k_EUserAccountHistoryCategory_Invalid"),
            (e[(e.k_EUserAccountHistoryCategory_Inventory = 1)] =
              "k_EUserAccountHistoryCategory_Inventory");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_EInternalSteamAccountType = 1)] =
            "k_EInternalSteamAccountType"),
            (e[(e.k_EInternalClanType = 2)] = "k_EInternalClanType"),
            (e[(e.k_EInternalAppType = 3)] = "k_EInternalAppType"),
            (e[(e.k_EInternalBroadcastChannelType = 4)] =
              "k_EInternalBroadcastChannelType");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_EExternalNone = 0)] = "k_EExternalNone"),
            (e[(e.k_EExternalSteamAccount = 1)] = "k_EExternalSteamAccount"),
            (e[(e.k_EExternalGoogleAccount = 2)] = "k_EExternalGoogleAccount"),
            (e[(e.k_EExternalFacebookAccount = 3)] =
              "k_EExternalFacebookAccount"),
            (e[(e.k_EExternalTwitterAccount = 4)] =
              "k_EExternalTwitterAccount"),
            (e[(e.k_EExternalTwitchAccount = 5)] = "k_EExternalTwitchAccount"),
            (e[(e.k_EExternalYouTubeChannelAccount = 6)] =
              "k_EExternalYouTubeChannelAccount"),
            (e[(e.k_EExternalFacebookPage = 7)] = "k_EExternalFacebookPage");
        })(d || (d = {}));
      class y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.country_code || i.aR(y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  country_code: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = i.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAvailableValveDiscountPromotions_Request";
        }
      }
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.promotions || i.aR(h.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { promotions: { n: 1, c: v, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAvailableValveDiscountPromotions_Response";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.promotionid || i.aR(v.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  promotionid: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  promotion_description: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  minimum_cart_amount: {
                    n: 3,
                    br: i.FE.readInt64String,
                    bw: i.Xc.writeInt64String,
                  },
                  minimum_cart_amount_for_display: {
                    n: 4,
                    br: i.FE.readInt64String,
                    bw: i.Xc.writeInt64String,
                  },
                  discount_amount: {
                    n: 5,
                    br: i.FE.readInt64String,
                    bw: i.Xc.writeInt64String,
                  },
                  currency_code: {
                    n: 6,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  available_use_count: {
                    n: 7,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  promotional_discount_type: {
                    n: 8,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  loyalty_reward_id: {
                    n: 9,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  localized_name_token: {
                    n: 10,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  max_use_count: {
                    n: 11,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = i.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails";
        }
      }
      class g extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.has_wallet || i.aR(g.M()),
            o.initialize(this, e, 0, -1, [13], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  has_wallet: { n: 1, br: i.FE.readBool, bw: i.Xc.writeBool },
                  user_country_code: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  wallet_country_code: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  wallet_state: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  balance: {
                    n: 5,
                    br: i.FE.readInt64String,
                    bw: i.Xc.writeInt64String,
                  },
                  delayed_balance: {
                    n: 6,
                    br: i.FE.readInt64String,
                    bw: i.Xc.writeInt64String,
                  },
                  currency_code: {
                    n: 7,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  time_most_recent_txn: {
                    n: 8,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  most_recent_txnid: {
                    n: 9,
                    br: i.FE.readUint64String,
                    bw: i.Xc.writeUint64String,
                  },
                  balance_in_usd: {
                    n: 10,
                    br: i.FE.readInt64String,
                    bw: i.Xc.writeInt64String,
                  },
                  delayed_balance_in_usd: {
                    n: 11,
                    br: i.FE.readInt64String,
                    bw: i.Xc.writeInt64String,
                  },
                  has_wallet_in_other_regions: {
                    n: 12,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  other_regions: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: i.FE.readInt32,
                    pbr: i.FE.readPackedInt32,
                    bw: i.Xc.writeRepeatedInt32,
                  },
                  formatted_balance: {
                    n: 14,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = i.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetWalletDetails_Response";
        }
      }
      class b extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.include_balance_in_usd || i.aR(b.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  include_balance_in_usd: {
                    n: 1,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  wallet_region: {
                    n: 2,
                    d: 1,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  include_formatted_balance: {
                    n: 3,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = i.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetClientWalletDetails_Request";
        }
      }
      class w extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new w();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAccountLinkStatus_Request";
        }
      }
      class B extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.pwid || i.aR(B.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  pwid: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  identity_verification: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  performed_age_verification: {
                    n: 3,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = i.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAccountLinkStatus_Response";
        }
      }
      class _ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || i.aR(_.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = i.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_CancelLicenseForApp_Request";
        }
      }
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new S();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_CancelLicenseForApp_Response";
        }
      }
      class M extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.steamid || i.aR(M.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  steamid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = i.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetUserCountry_Request";
        }
      }
      class z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.country || i.aR(z.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  country: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = i.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetUserCountry_Response";
        }
      }
      class E extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.invite_limit || i.aR(E.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  invite_limit: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  invite_duration: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  invite_note: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = i.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_CreateFriendInviteToken_Request";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.invite_token || i.aR(R.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  invite_token: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  invite_limit: {
                    n: 2,
                    br: i.FE.readUint64String,
                    bw: i.Xc.writeUint64String,
                  },
                  invite_duration: {
                    n: 3,
                    br: i.FE.readUint64String,
                    bw: i.Xc.writeUint64String,
                  },
                  time_created: {
                    n: 4,
                    br: i.FE.readFixed32,
                    bw: i.Xc.writeFixed32,
                  },
                  valid: { n: 5, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = i.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_CreateFriendInviteToken_Response";
        }
      }
      class O extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new O();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetFriendInviteTokens_Request";
        }
      }
      class F extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.tokens || i.aR(F.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { tokens: { n: 1, c: R, r: !0, q: !0 } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = i.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetFriendInviteTokens_Response";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.steamid || i.aR(D.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  steamid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  invite_token: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = i.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_ViewFriendInviteToken_Request";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.valid || i.aR(T.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  valid: { n: 1, br: i.FE.readBool, bw: i.Xc.writeBool },
                  steamid: {
                    n: 2,
                    br: i.FE.readUint64String,
                    bw: i.Xc.writeUint64String,
                  },
                  invite_duration: {
                    n: 3,
                    br: i.FE.readUint64String,
                    bw: i.Xc.writeUint64String,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = i.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_ViewFriendInviteToken_Response";
        }
      }
      class x extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.steamid || i.aR(x.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  steamid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  invite_token: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = i.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RedeemFriendInviteToken_Request";
        }
      }
      class j extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new j();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RedeemFriendInviteToken_Response";
        }
      }
      class W extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.invite_token || i.aR(W.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  invite_token: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = i.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RevokeFriendInviteToken_Request";
        }
      }
      class P extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new P();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RevokeFriendInviteToken_Response";
        }
      }
      class A extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.compat_tool || i.aR(A.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  compat_tool: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = i.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RegisterCompatTool_Request";
        }
      }
      class k extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RegisterCompatTool_Response";
        }
      }
      class I extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.account_type || i.aR(I.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  account_type: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  account_id: {
                    n: 2,
                    br: i.FE.readUint64String,
                    bw: i.Xc.writeUint64String,
                  },
                  filter: { n: 3, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  return_access_token: {
                    n: 4,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = i.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountLinking_GetLinkedAccountInfo_Request";
        }
      }
      class C extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.external_accounts || i.aR(C.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { external_accounts: { n: 1, c: N, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = i.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountLinking_GetLinkedAccountInfo_Response";
        }
      }
      class N extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.external_type || i.aR(N.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  external_type: {
                    n: 1,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  external_id: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  external_user_name: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  external_url: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  access_token: {
                    n: 5,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  access_token_secret: {
                    n: 6,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  is_valid: { n: 7, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = i.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountLinking_GetLinkedAccountInfo_Response_CExternalAccountTuple_Response";
        }
      }
      class U extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.steamid || i.aR(U.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  steamid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  client_token: {
                    n: 2,
                    br: i.FE.readBytes,
                    bw: i.Xc.writeBytes,
                  },
                  expiry: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  deviceid: { n: 4, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = i.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEmbeddedClient_Token";
        }
      }
      class Z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.result || i.aR(Z.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  result: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  token: { n: 2, c: U },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = i.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEmbeddedClient_AuthorizeDevice_Response";
        }
      }
      class L extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.steamid || i.aR(L.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  steamid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  device_info: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  deviceid: { n: 4, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = i.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEmbeddedClient_AuthorizeCurrentDevice_Request";
        }
      }
      !(function (e) {
        (e.GetAvailableValveDiscountPromotions = function (e, t) {
          return e.SendMsg(
            "UserAccount.GetAvailableValveDiscountPromotions#1",
            (0, a.MD)(y, t),
            h,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetClientWalletDetails = function (e, t) {
            return e.SendMsg(
              "UserAccount.GetClientWalletDetails#1",
              (0, a.MD)(b, t),
              g,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAccountLinkStatus = function (e, t) {
            return e.SendMsg(
              "UserAccount.GetAccountLinkStatus#1",
              (0, a.MD)(w, t),
              B,
              { ePrivilege: 1 },
            );
          }),
          (e.CancelLicenseForApp = function (e, t) {
            return e.SendMsg(
              "UserAccount.CancelLicenseForApp#1",
              (0, a.MD)(_, t),
              S,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserCountry = function (e, t) {
            return e.SendMsg(
              "UserAccount.GetUserCountry#1",
              (0, a.MD)(M, t),
              z,
              { ePrivilege: 1 },
            );
          }),
          (e.CreateFriendInviteToken = function (e, t) {
            return e.SendMsg(
              "UserAccount.CreateFriendInviteToken#1",
              (0, a.MD)(E, t),
              R,
              { ePrivilege: 3 },
            );
          }),
          (e.GetFriendInviteTokens = function (e, t) {
            return e.SendMsg(
              "UserAccount.GetFriendInviteTokens#1",
              (0, a.MD)(O, t),
              F,
              { ePrivilege: 1 },
            );
          }),
          (e.ViewFriendInviteToken = function (e, t) {
            return e.SendMsg(
              "UserAccount.ViewFriendInviteToken#1",
              (0, a.MD)(D, t),
              T,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemFriendInviteToken = function (e, t) {
            return e.SendMsg(
              "UserAccount.RedeemFriendInviteToken#1",
              (0, a.MD)(x, t),
              j,
              { ePrivilege: 1 },
            );
          }),
          (e.RevokeFriendInviteToken = function (e, t) {
            return e.SendMsg(
              "UserAccount.RevokeFriendInviteToken#1",
              (0, a.MD)(W, t),
              P,
              { ePrivilege: 1 },
            );
          }),
          (e.RegisterCompatTool = function (e, t) {
            return e.SendMsg(
              "UserAccount.RegisterCompatTool#1",
              (0, a.MD)(A, t),
              k,
              { ePrivilege: 1 },
            );
          });
      })(f || (f = {})),
        (function (e) {
          e.GetLinkedAccountInfo = function (e, t) {
            return e.SendMsg(
              "AccountLinking.GetLinkedAccountInfo#1",
              (0, a.MD)(I, t),
              C,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          };
        })(m || (m = {})),
        (function (e) {
          e.AuthorizeCurrentDevice = function (e, t) {
            return e.SendMsg(
              "EmbeddedClient.AuthorizeCurrentDevice#1",
              (0, a.MD)(L, t),
              Z,
              { ePrivilege: 1 },
            );
          };
        })(p || (p = {}));
    },
  },
]);

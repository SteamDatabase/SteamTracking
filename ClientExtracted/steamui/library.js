/* Third-party software licenses can be found at licenses.txt */
!(function(l) {
  function e(e) {
    for (
      var t, r, n = e[0], c = e[1], o = e[2], i = 0, a = [];
      i < n.length;
      i++
    )
      (r = n[i]),
        Object.prototype.hasOwnProperty.call(m, r) && m[r] && a.push(m[r][0]),
        (m[r] = 0);
    for (t in c) Object.prototype.hasOwnProperty.call(c, t) && (l[t] = c[t]);
    for (p && p(e); a.length; ) a.shift()();
    return u.push.apply(u, o || []), s();
  }
  function s() {
    for (var e, t = 0; t < u.length; t++) {
      for (var r = u[t], n = !0, c = 1; c < r.length; c++) {
        var o = r[c];
        0 !== m[o] && (n = !1);
      }
      n && (u.splice(t--, 1), (e = f((f.s = r[0]))));
    }
    return e;
  }
  var r = {},
    h = { 3: 0 },
    m = { 3: 0 },
    u = [];
  function f(e) {
    if (r[e]) return r[e].exports;
    var t = (r[e] = { i: e, l: !1, exports: {} });
    return l[e].call(t.exports, t, t.exports, f), (t.l = !0), t.exports;
  }
  (f.e = function(u) {
    var e = [];
    h[u]
      ? e.push(h[u])
      : 0 !== h[u] &&
        { 1: 1, 4: 1 }[u] &&
        e.push(
          (h[u] = new Promise(function(e, n) {
            for (
              var t =
                  "css\\" +
                  ({
                    1: "broadcast",
                    2: "libraries/libraries_cm",
                    4: "libraryroot"
                  }[u] || u) +
                  ".css",
                c = f.p + t,
                r = document.getElementsByTagName("link"),
                o = 0;
              o < r.length;
              o++
            ) {
              var i =
                (l = r[o]).getAttribute("data-href") || l.getAttribute("href");
              if ("stylesheet" === l.rel && (i === t || i === c)) return e();
            }
            var a = document.getElementsByTagName("style");
            for (o = 0; o < a.length; o++) {
              var l;
              if ((i = (l = a[o]).getAttribute("data-href")) === t || i === c)
                return e();
            }
            var s = document.createElement("link");
            (s.rel = "stylesheet"),
              (s.type = "text/css"),
              (s.onload = e),
              (s.onerror = function(e) {
                var t = (e && e.target && e.target.src) || c,
                  r = new Error(
                    "Loading CSS chunk " + u + " failed.\n(" + t + ")"
                  );
                (r.code = "CSS_CHUNK_LOAD_FAILED"),
                  (r.request = t),
                  delete h[u],
                  s.parentNode.removeChild(s),
                  n(r);
              }),
              (s.href = c),
              document.getElementsByTagName("head")[0].appendChild(s);
          }).then(function() {
            h[u] = 0;
          }))
        );
    var r = m[u];
    if (0 !== r)
      if (r) e.push(r[2]);
      else {
        var t = new Promise(function(e, t) {
          r = m[u] = [e, t];
        });
        e.push((r[2] = t));
        var n,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          f.nc && c.setAttribute("nonce", f.nc),
          (c.src = (function(e) {
            return (
              f.p +
              "" +
              ({
                1: "broadcast",
                2: "libraries/libraries_cm",
                4: "libraryroot"
              }[e] || e) +
              ".js"
            );
          })(u));
        var o = new Error();
        n = function(e) {
          (c.onerror = c.onload = null), clearTimeout(i);
          var t = m[u];
          if (0 !== t) {
            if (t) {
              var r = e && ("load" === e.type ? "missing" : e.type),
                n = e && e.target && e.target.src;
              (o.message =
                "Loading chunk " + u + " failed.\n(" + r + ": " + n + ")"),
                (o.name = "ChunkLoadError"),
                (o.type = r),
                (o.request = n),
                t[1](o);
            }
            m[u] = void 0;
          }
        };
        var i = setTimeout(function() {
          n({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = n), document.head.appendChild(c);
      }
    return Promise.all(e);
  }),
    (f.m = l),
    (f.c = r),
    (f.d = function(e, t, r) {
      f.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (f.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (f.t = function(t, e) {
      if ((1 & e && (t = f(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (f.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          f.d(
            r,
            n,
            function(e) {
              return t[e];
            }.bind(null, n)
          );
      return r;
    }),
    (f.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return f.d(t, "a", t), t;
    }),
    (f.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (f.p = ""),
    (f.oe = function(e) {
      throw (console.error(e), e);
    });
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    n = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var c = 0; c < t.length; c++) e(t[c]);
  var p = n;
  u.push(["tVvj", 0]), s();
})({
  "0OaU": function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return s;
    });
    var n = r("mrSG"),
      c = r("q1tI"),
      o = r.n(c),
      i = r("6Y59"),
      a = r("2i24"),
      l = r.n(a),
      s = (function(t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          Object(n.d)(e, t),
          (e.prototype.AddSizeClass = function(e) {
            "small" == this.props.size
              ? e.push(l.a.throbber_small)
              : "medium" == this.props.size
              ? e.push(l.a.throbber_medium)
              : "xlarge" == this.props.size
              ? e.push(l.a.throbber_xlarge)
              : "xxlarge" == this.props.size
              ? e.push(l.a.throbber_xxlarge)
              : e.push(l.a.throbber_large);
          }),
          (e.prototype.render = function() {
            var e = [l.a.LoadingWrapper, "SteamLogoThrobber"];
            this.AddSizeClass(e),
              void 0 === this.props.string && e.push(l.a.noString),
              this.props.className && e.push(this.props.className),
              this.props.static && e.push(l.a.Static);
            var t = o.a.createElement(
              "div",
              { className: e.join(" ") },
              o.a.createElement(
                "div",
                { className: l.a.Throbber },
                o.a.createElement(i.fb, { className: l.a.base }),
                o.a.createElement(i.fb, { className: l.a.blur })
              )
            );
            return o.a.createElement(
              "div",
              {
                className:
                  "center" == this.props.position
                    ? l.a.throbber_center_wrapper
                    : ""
              },
              t,
              Boolean(this.props.string) &&
                o.a.createElement(
                  "div",
                  { className: l.a.ThrobberText },
                  this.props.string
                )
            );
          }),
          e
        );
      })(o.a.PureComponent);
  },
  "2i24": function(e, t, r) {
    e.exports = {
      LoadingWrapper: "throbber_LoadingWrapper_2wAKy",
      Static: "throbber_Static_1Qfwp",
      none: "throbber_none_1F0lz",
      bottomCircle: "throbber_bottomCircle_2qjZm",
      noString: "throbber_noString_1Sy0p",
      Throbber: "throbber_Throbber_lYUEj",
      throbber_small: "throbber_throbber_small_2zbyh",
      throbber_medium: "throbber_throbber_medium_2CphU",
      throbber_large: "throbber_throbber_large_1x18v",
      throbber_center_wrapper: "throbber_throbber_center_wrapper_3IYPz",
      ThrobberText: "throbber_ThrobberText_21nVi",
      blur: "throbber_blur_1ctjA",
      ThrobberRoundLoop: "throbber_ThrobberRoundLoop_1O-cW",
      roundOuterOutline: "throbber_roundOuterOutline_1Vv--",
      roundOuter: "throbber_roundOuter_2K0Lz",
      roundFill: "throbber_roundFill_3sQFk",
      ThrobberFillLoop: "throbber_ThrobberFillLoop_ofdi9",
      topCircle: "throbber_topCircle_1LZff",
      circlePulse: "throbber_circlePulse_1XN6Z",
      ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_1jALk",
      ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_1KvOg",
      roundThrobber15: "throbber_roundThrobber15_2LGHp",
      roundThrobber14: "throbber_roundThrobber14_2FGCn",
      roundThrobber13: "throbber_roundThrobber13_1X-5j",
      roundThrobber12: "throbber_roundThrobber12_1pj1Q",
      roundThrobber11: "throbber_roundThrobber11_xFmZa",
      roundThrobber10: "throbber_roundThrobber10_3MGYo",
      roundThrobber09: "throbber_roundThrobber09_ktVJ4",
      roundThrobber08: "throbber_roundThrobber08_3s_7m",
      roundThrobber07: "throbber_roundThrobber07_11MVp",
      roundThrobber06: "throbber_roundThrobber06_2cl-m",
      roundThrobber05: "throbber_roundThrobber05_3-JE0",
      roundThrobber04: "throbber_roundThrobber04_1xNIK",
      roundThrobber03: "throbber_roundThrobber03_1S17y",
      roundThrobber02: "throbber_roundThrobber02_1-oUJ",
      roundThrobber01: "throbber_roundThrobber01_2tXge",
      ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_1fs4R",
      throbber_xlarge: "throbber_throbber_xlarge_1gYeZ",
      throbber_xxlarge: "throbber_throbber_xxlarge_3j-p4"
    };
  },
  "6Y59": function(e, t, r) {
    "use strict";
    r.d(t, "Y", function() {
      return s;
    }),
      r.d(t, "p", function() {
        return u;
      }),
      r.d(t, "F", function() {
        return h;
      }),
      r.d(t, "i", function() {
        return m;
      }),
      r.d(t, "t", function() {
        return f;
      }),
      r.d(t, "eb", function() {
        return p;
      }),
      r.d(t, "qb", function() {
        return d;
      }),
      r.d(t, "rb", function() {
        return E;
      }),
      r.d(t, "nb", function() {
        return _;
      }),
      r.d(t, "Q", function() {
        return g;
      }),
      r.d(t, "L", function() {
        return v;
      }),
      r.d(t, "ob", function() {
        return k;
      }),
      r.d(t, "O", function() {
        return x;
      }),
      r.d(t, "N", function() {
        return w;
      }),
      r.d(t, "ab", function() {
        return b;
      }),
      r.d(t, "h", function() {
        return L;
      }),
      r.d(t, "m", function() {
        return S;
      }),
      r.d(t, "E", function() {
        return M;
      }),
      r.d(t, "fb", function() {
        return y;
      }),
      r.d(t, "d", function() {
        return N;
      }),
      r.d(t, "o", function() {
        return C;
      }),
      r.d(t, "G", function() {
        return I;
      }),
      r.d(t, "J", function() {
        return G;
      }),
      r.d(t, "U", function() {
        return B;
      }),
      r.d(t, "T", function() {
        return T;
      }),
      r.d(t, "ib", function() {
        return V;
      }),
      r.d(t, "w", function() {
        return z;
      }),
      r.d(t, "x", function() {
        return D;
      }),
      r.d(t, "n", function() {
        return R;
      }),
      r.d(t, "H", function() {
        return A;
      }),
      r.d(t, "cb", function() {
        return F;
      }),
      r.d(t, "mb", function() {
        return O;
      }),
      r.d(t, "y", function() {
        return W;
      }),
      r.d(t, "W", function() {
        return P;
      }),
      r.d(t, "X", function() {
        return j;
      }),
      r.d(t, "e", function() {
        return U;
      }),
      r.d(t, "K", function() {
        return H;
      }),
      r.d(t, "lb", function() {
        return Y;
      }),
      r.d(t, "C", function() {
        return X;
      }),
      r.d(t, "u", function() {
        return q;
      }),
      r.d(t, "v", function() {
        return J;
      }),
      r.d(t, "kb", function() {
        return K;
      }),
      r.d(t, "sb", function() {
        return Z;
      }),
      r.d(t, "jb", function() {
        return Q;
      }),
      r.d(t, "g", function() {
        return $;
      }),
      r.d(t, "j", function() {
        return ee;
      }),
      r.d(t, "z", function() {
        return te;
      }),
      r.d(t, "bb", function() {
        return re;
      }),
      r.d(t, "q", function() {
        return ne;
      }),
      r.d(t, "a", function() {
        return ce;
      }),
      r.d(t, "P", function() {
        return oe;
      }),
      r.d(t, "R", function() {
        return ie;
      }),
      r.d(t, "S", function() {
        return ae;
      }),
      r.d(t, "s", function() {
        return le;
      }),
      r.d(t, "A", function() {
        return se;
      }),
      r.d(t, "r", function() {
        return ue;
      }),
      r.d(t, "Z", function() {
        return he;
      }),
      r.d(t, "M", function() {
        return me;
      }),
      r.d(t, "c", function() {
        return fe;
      }),
      r.d(t, "D", function() {
        return pe;
      }),
      r.d(t, "b", function() {
        return de;
      }),
      r.d(t, "db", function() {
        return Ee;
      }),
      r.d(t, "I", function() {
        return _e;
      }),
      r.d(t, "B", function() {
        return ge;
      }),
      r.d(t, "k", function() {
        return ve;
      }),
      r.d(t, "l", function() {
        return ke;
      }),
      r.d(t, "hb", function() {
        return xe;
      }),
      r.d(t, "gb", function() {
        return we;
      }),
      r.d(t, "V", function() {
        return be;
      }),
      r.d(t, "pb", function() {
        return Le;
      }),
      r.d(t, "f", function() {
        return Se;
      });
    var n = r("mrSG"),
      o = r("q1tI"),
      c = r("2i24"),
      i = r.n(c),
      a = r("exH9"),
      l = r("YyVH");
    r("Z7Ow");
    function s() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Settings",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "-305.5 396.5 256 256",
          enableBackground: "new -305.5 396.5 256 256"
        },
        o.createElement("path", {
          d:
            "M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z"
        })
      );
    }
    function u() {
      return o.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
          "data-name": "Layer 1",
          viewBox: "0 0 128 128",
          x: "0px",
          y: "0px"
        },
        o.createElement("polygon", {
          points:
            "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49"
        })
      );
    }
    function h(e) {
      var t = "SVGIcon_Button SVGIcon_MagnifyingGlass";
      return (
        e.className && (t += " " + e.className),
        o.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100"
          },
          o.createElement(
            "g",
            { transform: "translate(0,-952.36218)" },
            o.createElement("path", {
              className: "ColorSelector",
              d:
                "m 40.99855,964.36216 c -15.9798,0 -28.9986,13.01864 -28.9986,28.99862 0,15.97992 13.0188,28.99862 28.9986,28.99862 6.9189,0 13.2881,-2.4349 18.2803,-6.4997 l 23.5927,23.6239 c 1.1714,1.1714 3.0784,1.1715 4.2498,0 1.1716,-1.1715 1.1716,-3.0783 0,-4.2498 l -23.6239,-23.5926 c 4.0649,-4.9923 6.4997,-11.3615 6.4997,-18.28042 0,-15.97998 -13.0187,-28.99862 -28.9986,-28.99862 z m 0,5.99972 c 12.7374,0 22.9989,10.26145 22.9989,22.9989 0,12.73732 -10.2615,22.99892 -22.9989,22.99892 -12.7374,0 -22.9989,-10.2616 -22.9989,-22.99892 0,-12.73745 10.2615,-22.9989 22.9989,-22.9989 z",
              fill: "#ffffff",
              fillOpacity: "1",
              stroke: "none",
              visibility: "visible",
              display: "inline",
              overflow: "visible"
            })
          )
        )
      );
    }
    function m() {
      return o.createElement(
        "svg",
        {
          className: "SVGIcon_Button SVGIcon_Clock",
          version: "1.1",
          x: "0px",
          y: "0px",
          width: "20px",
          height: "20px",
          viewBox: "0 0 20 20"
        },
        o.createElement("path", {
          d:
            "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
        })
      );
    }
    function f() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Emoticon",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("circle", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          cx: "128",
          cy: "128",
          r: "107.5"
        }),
        o.createElement("path", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M74.484,145.945 c0,0,12.996,37.533,53.514,37.533c38.084,0,53.499-37.533,53.499-37.533"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "94.5",
          y1: "97.5",
          x2: "94.5",
          y2: "109.5"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "160.5",
          y1: "97.5",
          x2: "160.5",
          y2: "109.5"
        })
      );
    }
    function p() {
      return o.createElement(
        "svg",
        {
          fill: "#FFFFFF",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Submit",
          version: "1.1",
          x: "0px",
          y: "0px",
          viewBox: "0 0 100 100"
        },
        o.createElement(
          "g",
          { transform: "translate(0,-952.36218)" },
          o.createElement("path", {
            d:
              "m 92.115057,974.14842 a 2.0001999,2.0001999 0 0 0 -1.96764,2.02965 l 0.0376,31.19553 -77.475501,0 16.161909,-15.73013 a 2.0002746,2.0002746 0 1 0 -2.790355,-2.8667 L 6.3913393,1007.9405 a 2.0001999,2.0001999 0 0 0 -0.0011,2.8646 l 19.6896957,19.2036 a 2.0002671,2.0002671 0 1 0 2.792551,-2.8646 l -16.170767,-15.771 79.153048,0 a 2.0001999,2.0001999 0 0 0 1.72959,-0.5437 2.0001999,2.0001999 0 0 0 0.0598,-0.058 2.0001999,2.0001999 0 0 0 0.54259,-1.7218 l -0.0388,-32.87638 a 2.0001999,2.0001999 0 0 0 -2.03297,-2.02522 z",
            fill: "#FFFFFF",
            fillOpacity: "1",
            fillRule: "evenodd",
            stroke: "none",
            visibility: "visible",
            display: "inline",
            overflow: "visible"
          })
        )
      );
    }
    function d(e) {
      return o.createElement(
        "svg",
        Object(n.a)(
          {
            fill: "#FFFFFF",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_X",
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "-165 95 100 100"
          },
          e
        ),
        o.createElement(
          "g",
          null,
          o.createElement("polygon", {
            points:
              "-74.9,117.2 -102.2,145 -74.9,172.8 -89.1,186.8 -116.2,159.3 -143.2,186.8 -157.5,172.8 -130.2,145 -157.5,117.2 -143.2,103.2 -116.2,130.7 -89.1,103.2"
          })
        )
      );
    }
    function E() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_X_Line",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "45",
          strokeMiterlimit: "10",
          x1: "212",
          y1: "212",
          x2: "44",
          y2: "44"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "45",
          strokeMiterlimit: "10",
          x1: "44",
          y1: "212",
          x2: "212",
          y2: "44"
        })
      );
    }
    function _(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_VoiceRoom",
          x: "0px",
          y: "0px",
          width: "64px",
          height: "64px",
          viewBox: "0 0 64 64",
          enableBackground: "new 0 0 64 64"
        },
        !e.exitOnly &&
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              className: "Bubble",
              fill: "none",
              strokeMiterlimit: "1",
              strokeWidth: "2.5px",
              d:
                "M60.1,32.3c0,15.1-12.3,27.3-27.4,27.3 c-5,0-9.7-1.4-13.8-3.7c-1.8-1.1-15,5.4-13.8,3.4c1.7-2.9,5.9-10.3,4.7-12C7,43,5.3,37.8,5.3,32.3C5.3,17.2,17.6,5,32.7,5 C47.8,5,60.1,17.2,60.1,32.3z"
            })
          ),
        !e.exitOnly &&
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              className: "AudioLines",
              opacity: "0",
              strokeWidth: "1px",
              d:
                "M37.2,51.1c-0.5,0-1-0.1-1.3-0.4c-0.7-0.5-0.7-1.3,0-1.8c6.3-4.4,9.8-10.2,9.8-16.4c0-6.2-3.5-12-9.8-16.4 c-0.7-0.5-0.7-1.3,0-1.8s1.9-0.5,2.6,0c7.1,4.9,10.9,11.4,10.9,18.3c0,6.9-3.9,13.4-10.9,18.3C38.2,51,37.7,51.1,37.2,51.1 M21.4,40.2c0.5,0,0.9-0.1,1.3-0.4c2.8-2,4.3-4.6,4.3-7.3s-1.5-5.4-4.3-7.3c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c2.1,1.5,3.3,3.4,3.3,5.5c0,2.1-1.2,4-3.3,5.5c-0.7,0.5-0.7,1.3,0,1.8C20.4,40.1,20.9,40.2,21.4,40.2 M29.3,45.7 c0.5,0,1-0.1,1.3-0.4c4.9-3.4,7.7-7.9,7.7-12.7c0-4.8-2.7-9.3-7.7-12.7c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c4.2,2.9,6.6,6.8,6.6,10.9c0,4.1-2.3,8-6.6,10.9c-0.7,0.5-0.7,1.3,0,1.8C28.4,45.5,28.8,45.7,29.3,45.7"
            })
          ),
        o.createElement(
          "g",
          { className: "Arrow", opacity: e.exitOnly ? 1 : 0 },
          o.createElement("polyline", {
            fill: "none",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "41,30.7 14.5,30.7 23.5,19.4 "
          }),
          o.createElement("polyline", {
            fill: "none",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "41,30.7 14.5,30.7 23.5,42 "
          })
        ),
        o.createElement(
          "g",
          null,
          o.createElement("polyline", {
            className: "ExitDoor",
            opacity: e.exitOnly ? 1 : 0,
            strokeLinecap: "round",
            strokeMiterlimit: "1",
            strokeWidth: "2px",
            fill: "none",
            points:
              "32.5,22.1 32.5,17.7 47.7,17.7 47.7,43.8 32.5,43.8 32.5,39.5"
          })
        ),
        !e.exitOnly &&
          o.createElement(
            "g",
            { className: "Microphone" },
            o.createElement("path", {
              d:
                "M40.971,28.593v6.278c0,4.007-4.023,7.284-8.971,7.284c-2.693,0-5.126-0.974-6.765-2.516 c-1.379-1.28-2.207-2.952-2.207-4.769v-6.278l0,0H21.05v6.278c0,0.536,0.064,1.055,0.162,1.573 c0.357,1.752,1.281,3.325,2.627,4.592c1.801,1.702,4.332,2.839,7.17,3.049v4.072H25.3c-0.341,0-0.616,0.438-0.616,0.989 c0,0.552,0.275,0.99,0.616,0.99h5.759h1.882H38.7c0.341,0,0.616-0.438,0.616-0.99c0-0.551-0.275-0.989-0.616-0.989h-5.71v-4.072 c5.58-0.422,9.96-4.396,9.96-9.214v-6.278H40.971z"
            }),
            o.createElement(
              "g",
              null,
              o.createElement("path", {
                d:
                  "M32,39.841c-3.493,0-6.343-2.344-6.343-5.213v-17.85c0-2.871,2.85-5.213,6.343-5.213s6.343,2.342,6.343,5.213v17.85,C38.343,37.497,35.493,39.841,32,39.841z"
              })
            )
          )
      );
    }
    function g(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_PlusCircle",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        !e.nocircle &&
          o.createElement("circle", {
            fill: "none",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "95.333"
          }),
        o.createElement("line", {
          className: "horizontalLine",
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "73.333",
          y1: "128",
          x2: "183.333",
          y2: "128"
        }),
        !e.minus &&
          o.createElement("line", {
            className: "verticalLine",
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "128.333",
            y1: "73.335",
            x2: "128.333",
            y2: "183.333"
          })
      );
    }
    function v() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Paperclip",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M167.768,62.647 l-0.012,123.052c0,24.729-19.334,44.856-43.096,44.866c-23.765-0.006-43.099-20.134-43.096-44.872L81.557,48.851 c0-15.345,14.483-27.827,29.83-27.83c15.342,0.003,27.827,12.488,27.833,27.833l-0.002,139.245 c0.003,6.376-8.546,12.925-14.925,12.925c0,0-13.929-0.166-13.929-12.928l0.003-124.839"
        })
      );
    }
    function k(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Volume",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "255.999px",
          viewBox: "0 0 256 255.999"
        },
        o.createElement(
          "g",
          { className: "Speaker" },
          o.createElement("path", {
            d:
              "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z"
          })
        ),
        !e.muted &&
          o.createElement(
            "g",
            { className: "SoundWaves" },
            o.createElement("path", {
              className: "SoundWavesHighest",
              d:
                "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521"
            }),
            o.createElement("path", {
              className: "SoundWavesHigh",
              d:
                "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z"
            }),
            o.createElement("path", {
              className: "SoundWavesMed",
              d:
                "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z"
            }),
            o.createElement("path", {
              className: "SoundWavesLow",
              d:
                "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z"
            })
          ),
        o.createElement(
          "g",
          { className: "SoundX" },
          o.createElement("line", {
            fill: "none",
            strokeWidth: e.muted ? 10 : 0,
            stroke: "#fff",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "170.667",
            x2: "223.167",
            y2: "84.5"
          }),
          o.createElement("line", {
            fill: "none",
            strokeWidth: e.muted ? 10 : 0,
            stroke: "#fff",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "84.5",
            x2: "223.167",
            y2: "170.667"
          })
        )
      );
    }
    function x() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Play",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          className: "playTriangle",
          d:
            "M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z"
        })
      );
    }
    function w() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Pause",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M44.979,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6H50.979c-3.3,0-6,2.7-6,6V219.364z"
        }),
        o.createElement("path", {
          d:
            "M149.267,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6h-49.753c-3.3,0-6,2.7-6,6V219.364z"
        })
      );
    }
    function b(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_SortBy",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        e.bytime
          ? o.createElement(
              "g",
              { className: "time" },
              o.createElement("circle", {
                fill: "none",
                strokeWidth: "10",
                strokeMiterlimit: "10",
                cx: "91.735",
                cy: "128.014",
                r: "64"
              }),
              o.createElement("polyline", {
                fill: "none",
                strokeWidth: "10",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                points: "91.735,90.833 91.735,128.014 116.58,152.086 \t"
              })
            )
          : o.createElement(
              "g",
              { className: "alphabet" },
              o.createElement("polyline", {
                fill: "none",
                strokeWidth: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "10",
                points: "70.268,109.934 94.483,63.635 119.77,109.934"
              }),
              o.createElement("line", {
                fill: "none",
                strokeWidth: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "10",
                x1: "77.458",
                y1: "97.861",
                x2: "112.135",
                y2: "97.861"
              }),
              o.createElement("polyline", {
                fill: "none",
                strokeWidth: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "10",
                points:
                  "70.045,145.379 119.547,145.379 70.045,192.032 119.547,192.032"
              })
            ),
        o.createElement(
          "g",
          { className: "Arrow" },
          o.createElement("polyline", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "199.735,63.66 199.735,192.366 171.207,163.675"
          }),
          o.createElement("polyline", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "199.735,63.66 199.735,192.366 228.266,163.675"
          })
        )
      );
    }
    function L() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Check",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polyline", {
          fill: "none",
          stroke: "#fff",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "49.5,147.75 95,210.75 206.5,45.25 "
        })
      );
    }
    function S(e) {
      var t = e.highlightColor || "#00ccff",
        r = e.color || "#2d73ff";
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DialogCheck",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "defs",
          null,
          o.createElement(
            "linearGradient",
            { id: "linear", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
            o.createElement("stop", {
              id: "stop0",
              offset: "0%",
              stopColor: t
            }),
            o.createElement("stop", {
              id: "stop1",
              offset: "100%",
              stopColor: r
            })
          ),
          o.createElement(
            "filter",
            { id: "f1", x: "0", y: "0", width: "200%", height: "200%" },
            o.createElement("feOffset", {
              result: "offOut",
              in: "SourceAlpha",
              dx: "20",
              dy: "20"
            }),
            o.createElement("feGaussianBlur", {
              result: "blurOut",
              in: "offOut",
              stdDeviation: "10"
            }),
            o.createElement("feBlend", {
              in: "SourceGraphic",
              in2: "blurOut",
              mode: "normal"
            })
          )
        ),
        o.createElement("path", {
          fill: "none",
          stroke: "url(#linear)",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: "10",
          d: "M206.5,45.25L95,210.75l-45.5-63",
          strokeDasharray: "365.19 365.19",
          strokeDashoffset: "0.00"
        }),
        o.createElement("path", {
          fill: "none",
          opacity: ".2",
          filter: "url(#f1)",
          stroke: "url(#linear)",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: "10",
          d: "M206.5,45.25L95,210.75l-45.5-63",
          strokeDasharray: "365.19 365.19",
          strokeDashoffset: "0.00"
        })
      );
    }
    function M() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Lock",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          className: "topLock",
          d:
            "M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z"
        }),
        o.createElement("path", {
          className: "baseLock",
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "22",
          strokeMiterlimit: "10",
          d:
            "M84.813,172.74V73.688l0,0 c0-23.85,19.335-43.188,43.187-43.188l0,0c23.852,0,43.188,19.337,43.188,43.188l0,0v23.885"
        })
      );
    }
    function y(e) {
      var t = "SVGIcon_Button SVGIcon_Throbber ";
      return (
        e.className && (t += e.className),
        o.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement(
            "g",
            { className: i.a.partCircle },
            o.createElement("path", {
              className: i.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895"
            }),
            o.createElement("path", {
              className: i.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M201.432,101.166"
            }),
            o.createElement("path", {
              className: i.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754"
            })
          ),
          o.createElement(
            "g",
            { className: i.a.mainOutline },
            o.createElement("path", {
              className: i.a.roundFill,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundOuterOutline,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber01,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber02,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber03,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber04,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber05,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber06,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber07,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber08,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber09,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber10,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber11,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber12,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber13,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber14,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: i.a.roundThrobber15,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            })
          ),
          o.createElement(
            "g",
            { className: i.a.bottomCircle },
            o.createElement("path", {
              fill: "#ffffff",
              d:
                "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579"
            })
          ),
          o.createElement(
            "g",
            { className: i.a.topCircle },
            o.createElement("circle", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              cx: "161.731",
              cy: "101.274",
              r: "23.019"
            })
          )
        )
      );
    }
    function N(e) {
      return o.createElement(
        "svg",
        {
          style: { transform: "rotate(" + e.angle + "deg)" },
          version: "1.1",
          id: "arrowBase",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Arrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polyline", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "128,247.688 128,8.313 181.061,61.674 "
        }),
        o.createElement("polyline", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "128,247.688 128,8.313 74.939,61.674 "
        })
      );
    }
    function C(e) {
      return o.createElement(
        "svg",
        {
          style: { transform: "rotate(" + e.angle + "deg)" },
          version: "1.1",
          id: "arrowBase",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DoubleArrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polyline", {
          className: "Arrow1",
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "23",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          points: "135.65,21.667 30.081,127.235 137.18,234.333 "
        }),
        !e.singlearrow &&
          o.createElement("polyline", {
            className: "Arrow2",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "23",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "224.389,21.667 118.821,127.235 225.92,234.333 "
          })
      );
    }
    function I() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Maximize",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("rect", {
          x: "24",
          y: "42.167",
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          width: "208",
          height: "171.667"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "42",
          strokeMiterlimit: "10",
          x1: "24",
          y1: "54.01",
          x2: "232",
          y2: "54.01"
        })
      );
    }
    function G() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Minimize",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("line", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          x1: "24",
          y1: "209.01",
          x2: "232",
          y2: "209.01"
        })
      );
    }
    function B() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Restore",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polyline", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 "
        }),
        o.createElement("rect", {
          x: "24",
          y: "90.861",
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          width: "149",
          height: "122.973"
        })
      );
    }
    function T() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Reload",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "30",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895"
        }),
        o.createElement("polygon", {
          points: "147.639,108.361 245.755,10.166 245.834,108.361 "
        })
      );
    }
    function V() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Trash",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          { className: "base" },
          o.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d:
              "M216.773,43.909 l-7.399,177.589c-0.37,8.893-7.919,16.1-16.812,16.1H63.437c-8.914,0-16.442-7.24-16.812-16.1L39.226,43.909"
          })
        ),
        o.createElement(
          "g",
          { className: "lines" },
          o.createElement("path", {
            className: "line1",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M128,68.12v137.197"
          }),
          o.createElement("path", {
            className: "line2",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M83.613,68.12 l4.035,137.197"
          }),
          o.createElement("path", {
            className: "line3",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M172.387,68.12 l-4.035,137.197"
          })
        ),
        o.createElement(
          "g",
          { className: "lid" },
          o.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M27.121,38.577H228.88"
          }),
          o.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            d:
              "M87.648,38.577l4.319-10.796c2.072-5.181,8.292-9.379,13.84-9.379h44.386 c5.572,0,11.761,4.18,13.841,9.379l4.319,10.796"
          })
        )
      );
    }
    function z(e) {
      return o.createElement(
        "svg",
        {
          style: { transform: "rotate(" + e.angle + "deg)" },
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_FlatArrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polygon", {
          points: "13.913,141 128,59 242.087,141 ",
          fill: "#ffffff"
        })
      );
    }
    function D(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className:
            "SVGIcon_Button SVGIcon_FriendIcon" +
            (e.bPending ? " SVGIcon_FriendIcon_Pending" : ""),
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          { className: "Outline" },
          o.createElement(
            "g",
            { transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)" },
            o.createElement("path", {
              d:
                "M102.239,90.394c-22.556,0-40.906-18.351-40.906-40.906c0-22.556,18.35-40.906,40.906-40.906s40.906,18.35,40.906,40.906 C143.145,72.043,124.795,90.394,102.239,90.394z"
            })
          ),
          o.createElement("path", {
            d:
              "M127.453,250.212c-30.208,0-52.086-4.188-65.028-12.45c-12.507-7.983-13.141-17.484-13.141-19.308v-41.781 c0-20.554,5.356-38.104,15.489-50.754c11.63-14.519,29.216-22.193,50.858-22.194h23.646c21.643,0,39.229,7.674,50.858,22.193 c10.133,12.65,15.488,30.201,15.488,50.754v41.751c0.011,2.202-0.586,8.058-6.43,14.175 c-11.164,11.687-35.301,17.613-71.732,17.613C127.458,250.212,127.458,250.212,127.453,250.212z"
          }),
          o.createElement("path", {
            className: "WavingArm",
            opacity: e.bPending ? "1" : "0",
            d:
              "M87.625,170.102c-5.877,0-14.85-1.804-24.219-10.4c-8.677-7.961-20.959-20.438-30.563-31.048 c-18.766-20.732-21.125-26.658-19.522-32.832c1.463-5.64,10.288-27.077,26.729-28.926c0.429-0.048,0.867-0.072,1.303-0.072 c7.609,0,14.543,6.335,38.063,31.516c7.141,7.645,14.524,15.549,18.002,18.33l0.803,0.641c5.551,4.432,11.291,9.015,15.104,14.136 c8.477,11.383,3.634,20.705,1.158,24.185C108.034,164.692,97.995,170.102,87.625,170.102z"
          })
        ),
        o.createElement(
          "g",
          { className: "foreground" },
          o.createElement(
            "g",
            { transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)" },
            o.createElement("circle", {
              fill: "#FFFFFF",
              cx: "102.239",
              cy: "49.488",
              r: "33.446"
            })
          ),
          o.createElement("path", {
            fill: "#FFFFFF",
            d:
              "M195.624,218.454v-41.781c0-34.743-16.666-62.948-56.347-62.948h-11.822h-0.997h-10.826 c-39.68,0.001-56.348,28.205-56.348,62.948v41.781c0,0,0,21.758,68.169,21.758C196.62,240.214,195.624,218.454,195.624,218.454z"
          }),
          o.createElement("path", {
            className: "WavingArm",
            opacity: e.bPending ? "1" : "0",
            d:
              "M41.167,76.833c6.53-0.734,39.348,39.127,50.007,47.647c10.659,8.52,21.327,16.686,15.16,25.353 s-20.646,16.74-36.167,2.5 s-48.516-48.801-47.167-54S31.599,77.909,41.167,76.833z"
          })
        )
      );
    }
    function R() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DoNotDisturb",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("circle", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "24",
          strokeMiterlimit: "10",
          cx: "128",
          cy: "128",
          r: "101.5"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "24",
          strokeMiterlimit: "10",
          x1: "73",
          y1: "128",
          x2: "183",
          y2: "128"
        })
      );
    }
    function A(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          style: { transform: "scaleX(" + (e.bFlipHorizontal ? -1 : 1) + ")" },
          className: "SVGIcon_Button SVGIcon_MediaControls",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          className: "Arrow",
          d:
            "M77.003,54.763h32.784c3.794,0,9.113,2.181,11.814,4.848l63.604,62.773c2.703,2.667,2.727,7.054,0.05,9.748 l-63.705,64.206c-2.674,2.693-7.968,4.898-11.763,4.898H77.003"
        }),
        o.createElement("polyline", {
          className: "preArrowBox",
          opacity: e.bHidePreArrow ? "0" : "1",
          points: "6.833,54.763 46.71,54.763 46.71,201.236 6.833,201.236 \t"
        }),
        o.createElement("polyline", {
          className: "jumpAheadBox",
          opacity: e.bShowJumpAheadBox ? "1" : "0",
          points: "6.833,54.764 86.386,54.764 86.386,201.236 6.833,201.236 \t"
        }),
        o.createElement("polyline", {
          className: "postArrowBox",
          opacity: e.bHidePostArrow ? "0" : "1",
          points:
            "209.29,54.763 249.167,54.763 249.167,201.236 209.29,201.236 \t"
        })
      );
    }
    function F(e) {
      var t = Object(a.a)(
        "SVGIcon_Button",
        "SVGIcon_SteamLogo",
        e && e.className
      );
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: t,
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          fill: "#ffffff",
          d:
            "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355"
        }),
        o.createElement("path", {
          fill: "#ffffff",
          d:
            "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387"
        }),
        o.createElement("path", {
          fill: "#ffffff",
          d:
            "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306"
        })
      );
    }
    function O() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Viewers",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          className: "frontGuy",
          fill: "#666666",
          d:
            "M181.732,53.151c-17.255,0-31.321,13.316-31.321,32.634v25.132 c0,18.005,24.006,21.006,24.382,21.381c-10.691,2.813-30.947,8.252-40.888,15.566c-8.252,6.003-11.44,18.005-13.128,22.882 c-0.75,2.063-1.688,5.064-1.688,7.127c0,0,0,9.94,0,19.881s12.941,16.505,18.005,16.505h89.65c4.877,0,18.006-5.627,18.006-16.505 s0-19.881,0-19.881c0-2.251-0.938-5.627-1.688-7.689c-4.313-10.878-4.688-16.316-13.315-22.319 c-9.941-6.939-30.009-12.19-40.512-15.004c0.374-0.563,24.193-4.127,24.193-22.131V85.785 C213.053,66.467,198.986,53.151,181.732,53.151L181.732,53.151z"
        }),
        o.createElement("path", {
          className: "backGuy",
          fill: "rgb(144, 153, 161)",
          d:
            "M84.204,34.396c-20.068,0-36.385,15.38-36.385,38.074v29.258c0,20.818,27.945,24.382,28.32,24.944 c-12.378,3.189-36.01,9.565-47.638,18.006c-9.753,7.127-13.504,21.006-15.379,26.632c-0.75,2.251-1.876,6.002-1.876,8.253  c0,0,0,11.44,0,23.257c0,11.815,15.004,19.13,20.819,19.13h104.279c5.814,0,20.818-6.564,20.818-19.13c0-12.566,0-23.257,0-23.257 c0-2.438-1.125-6.564-2.063-8.815c-5.063-12.566-5.438-18.942-15.566-26.069c-11.628-8.065-34.885-14.067-47.076-17.443 c0.375-0.563,28.133-4.876,28.133-25.695V72.469C120.59,49.775,104.272,34.396,84.204,34.396L84.204,34.396z"
        })
      );
    }
    function W() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          className: "SVGIcon_Button SVGIcon_Globe",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 64 64"
        },
        o.createElement(
          "g",
          null,
          o.createElement("path", {
            d:
              "M32.5,5C17.9,5,6,16.9,6,31.5C6,46.1,17.9,58,32.5,58S59,46.1,59,31.5C59,16.9,47.1,5,32.5,5 M32.5,54.7c-1.2,0-2.5-0.1-3.7-0.3c-1.1-1.1-2.1-2.8-3-4.8c-0.8-1.8-1.4-3.8-2-6c2.7-0.3,5.6-0.5,8.6-0.5c3,0,5.9,0.2,8.6,0.5c-0.5,2.2-1.2,4.2-2,6c-0.9,2-1.9,3.7-3,4.8C35,54.6,33.7,54.7,32.5,54.7 M32.5,41.4c-3.2,0-6.2,0.2-9,0.5c-0.6-3-0.9-6.2-1-9.6h19.9c0,3.4-0.4,6.6-1,9.6C38.7,41.6,35.7,41.4,32.5,41.4 M32.5,8.3c1.2,0,2.5,0.1,3.7,0.3c1.1,1.1,2.1,2.8,3,4.8c0.8,1.8,1.4,3.8,2,6c-2.7,0.3-5.6,0.5-8.6,0.5c-3,0-5.9-0.2-8.6-0.5c0.5-2.2,1.2-4.2,2-6c0.9-2,1.9-3.7,3-4.8C30,8.4,31.3,8.3,32.5,8.3 M32.5,21.6c3.2,0,6.2-0.2,9-0.5c0.6,3,0.9,6.2,1,9.6H22.6c0-3.4,0.4-6.6,1-9.6C26.3,21.4,29.3,21.6,32.5,21.6 M44.1,30.7c0-3.5-0.4-6.8-1-9.8c3.4-0.5,6.4-1.1,8.8-2c2.3,3.5,3.6,7.5,3.7,11.8H44.1z M20.9,30.7H9.3c0.1-4.2,1.4-8.3,3.7-11.8c2.5,0.8,5.5,1.5,8.8,2C21.3,23.9,21,27.2,20.9,30.7 M20.9,32.3c0,3.5,0.4,6.8,1,9.8c-3.4,0.5-6.4,1.1-8.8,2c-2.3-3.5-3.6-7.5-3.7-11.8H20.9z M44.1,32.3h11.6c-0.1,4.2-1.4,8.3-3.7,11.8c-2.5-0.8-5.5-1.5-8.8-2C43.7,39.1,44,35.8,44.1,32.3 M51,17.5c-0.1,0-0.2,0.1-0.3,0.1c-2.3,0.7-5,1.3-7.9,1.7c-0.9-4.1-2.3-7.6-4-10.1c3.8,1.1,7.3,3.1,10.2,5.9C49.6,15.9,50.3,16.6,51,17.5 M26.3,9.2c-1.7,2.5-3.1,6-4,10.1c-2.9-0.4-5.6-1-7.9-1.7c-0.1,0-0.2-0.1-0.3-0.1c0.6-0.8,1.3-1.6,2.1-2.4C19,12.2,22.5,10.2,26.3,9.2 M14,45.5c0.1,0,0.2-0.1,0.3-0.1c2.3-0.7,5-1.3,7.9-1.7c0.9,4.1,2.3,7.6,4,10.1c-3.8-1.1-7.3-3.1-10.2-5.9C15.4,47.1,14.7,46.4,14,45.5 M38.7,53.8c1.7-2.5,3.1-6,4-10.1c2.9,0.4,5.6,1,7.9,1.7c0.1,0,0.2,0.1,0.3,0.1c-0.6,0.8-1.3,1.6-2.1,2.4C46,50.8,42.5,52.8,38.7,53.8"
          })
        )
      );
    }
    function P() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_STVTimelineGrabber",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          { className: "leftarrow", opacity: "0" },
          o.createElement("polygon", {
            points: "127.817,4.403 4,128 127.817,251.598"
          })
        ),
        o.createElement(
          "g",
          { className: "rightarrow", opacity: "0" },
          o.createElement("polygon", {
            points: "127.816,4.403 251.633,128 127.816,251.598"
          })
        ),
        o.createElement(
          "g",
          { className: "grabber" },
          o.createElement("polygon", {
            points:
              "145.692,22.132 145.692,234.361 127.817,251.598 110.307,234.361 110.307,22.132 127.817,4.403"
          })
        )
      );
    }
    function j() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_STVTimelineMarker",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polygon", {
          className: "pointer",
          points:
            "128,154.979 46.374,230.548 46.374,253.333 209.626,253.333 209.626,230.548 \t"
        }),
        o.createElement("rect", {
          className: "line",
          x: "116.271",
          y: "3.168",
          width: "23.459",
          height: "137.332"
        })
      );
    }
    function U() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_BigPicture",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          fill: "#ffffff",
          d:
            "M213.771,68.659c-4.108-7.066-46.007-7.231-49.293-7.231H128H91.522c-3.286,0-45.186,0.165-49.293,7.231 c-19.555,29.248-27.385,100.263-27.276,104.01c0.238,8.294,2.11,24.583,16.595,35.162c9.201,6.72,22.183,8.709,29.083,3.614 c4.989-3.682,11.995-19.224,19.061-32.204c7.064-12.981,9.202-11.174,12.98-12.159c3.78-0.986,36.066-0.74,36.066-0.74 s30.809-0.247,34.588,0.74c3.777,0.985,5.915-0.822,12.98,12.159c7.064,12.98,14.07,28.522,19.061,32.204 c6.9,5.095,19.882,3.106,29.083-3.614c14.485-10.58,16.356-26.868,16.595-35.162C241.154,168.922,233.325,97.906,213.771,68.659z M67.251,128.14c-14.974,0-27.112-12.137-27.112-27.111c0-14.975,12.137-27.112,27.112-27.112 c14.973,0,27.111,12.137,27.111,27.112C94.362,116.003,82.224,128.14,67.251,128.14z M188.749,128.14 c-14.974,0-27.111-12.137-27.111-27.111c0-14.975,12.138-27.112,27.111-27.112c14.973,0,27.111,12.137,27.111,27.112 C215.86,116.003,203.722,128.14,188.749,128.14z"
        })
      );
    }
    function H() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_MobilePhone",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M165.693,45.186H91.368c-7.963,0-14.41,6.447-14.41,14.41V210.9c0,7.964,6.447,14.41,14.41,14.41h74.134 c7.965,0,14.41-6.447,14.41-14.41V59.596C180.102,51.633,173.657,45.186,165.693,45.186z M113.172,57.509h30.717 c1.707,0,3.223,1.327,3.223,3.224c0,1.896-1.328,3.223-3.223,3.223h-30.717c-1.707,0-3.223-1.328-3.223-3.223 C109.949,58.837,111.465,57.509,113.172,57.509z M128.529,213.554c-4.551,0-8.152-3.603-8.152-8.153c0-4.55,3.604-8.152,8.152-8.152 s8.151,3.603,8.151,8.152C136.682,209.761,133.081,213.554,128.529,213.554z M169.105,186.819h-81.15V74.384h81.15V186.819 L169.105,186.819z"
        })
      );
    }
    function Y() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_VR",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M224.389,62.411H31.613c-10.147,0-18.36,8.214-18.36,18.36v94.453c0,10.147,8.215,18.359,18.36,18.359h192.775 c10.146,0.241,18.358-7.968,18.358-18.116V80.771C242.747,70.625,234.534,62.411,224.389,62.411z M92.317,175.026H71.646 L35.472,79.832h21.895l25.022,72.484l24.343-72.484h21.895L92.317,175.026z M195.264,175.026l-19.175-32.095h-2.176h-14.279 v32.095h-19.991V79.832h35.63c13.056,0,22.664,2.607,28.831,7.819c6.164,5.215,9.247,12.49,9.247,21.827 c0,7.343-1.61,13.463-4.828,18.359c-3.219,4.896-7.729,8.614-13.531,11.151l22.575,36.038H195.264z"
        }),
        o.createElement("path", {
          d:
            "M187.784,100.298c-2.812-2.312-7.391-3.468-13.735-3.468h-14.415v28.966h15.639c5.257,0,9.36-1.336,12.308-4.012 c2.945-2.673,4.42-6.368,4.42-11.083C192,106.078,190.593,102.61,187.784,100.298z"
        })
      );
    }
    function X() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_LargeMobilePhone",
          x: "0px",
          y: "0px",
          width: "128px",
          height: "255px",
          viewBox: "0 0 128 255"
        },
        o.createElement("rect", {
          className: "screen",
          x: "7.756",
          y: "5.518",
          fill: "#292D33",
          width: "112.144",
          height: "234.357"
        }),
        o.createElement("path", {
          className: "frame",
          fill: "#3C414B",
          d:
            "M40.334,15.72h47.237c3.957,0,7.164-3.259,7.164-7.28c0-1.113,0.889-2.017,1.984-2.017h9.746 c7.417,0,13.432,6.108,13.432,13.646v206.156c0,7.538-6.015,13.647-13.431,13.647H21.459c-7.417,0-13.429-6.109-13.429-13.647 V20.071c0-7.536,6.013-13.646,13.429-13.646h9.728c1.096,0,1.983,0.903,1.983,2.017C33.17,12.461,36.377,15.72,40.334,15.72 M107.057,0.001H20.87c-9.922,0-17.965,8.174-17.965,18.256v217.505c0,10.082,8.043,18.256,17.965,18.256h86.188 c9.923,0,17.966-8.174,17.966-18.256V18.257C125.022,8.175,116.979,0.001,107.057,0.001"
        }),
        o.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,33.349C0.369,33.349,0,33.725,0,34.189v7.616c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 v-7.617C1.653,33.725,1.283,33.349,0.826,33.349"
        }),
        o.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,51.56C0.369,51.56,0,51.936,0,52.4v16.8c0,0.465,0.37,0.841,0.826,0.841s0.827-0.376,0.827-0.841 V52.4C1.653,51.936,1.283,51.56,0.826,51.56"
        }),
        o.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,75.304C0.369,75.304,0,75.68,0,76.144v15.904c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 V76.144C1.653,75.68,1.283,75.304,0.826,75.304"
        }),
        o.createElement("path", {
          fill: "#3C414B",
          d:
            "M127.617,58.056c-0.457,0-0.827,0.376-0.827,0.84v27.328c0,0.464,0.37,0.84,0.827,0.84 c0.456,0,0.826-0.376,0.826-0.84V58.896C128.443,58.432,128.073,58.056,127.617,58.056"
        })
      );
    }
    function q() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Envelope",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polygon", {
          fill: "#3C414B",
          points: "3.167,48.809 127.22,128 252.833,48.809 "
        }),
        o.createElement("polygon", {
          fill: "#3C414B",
          points: "252.833,203.68 252.833,55.439 185.151,99.131 "
        }),
        o.createElement("polygon", {
          fill: "#3C414B",
          points:
            "247.958,207.191 180.47,101.472 128.001,134.24 75.142,101.472 7.849,207.191 "
        }),
        o.createElement("polygon", {
          fill: "#3C414B",
          points: "3.167,203.682 3.167,55.441 70.851,99.132 "
        })
      );
    }
    function J() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Facebook",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M236.824,5.666H19.176c-7.467,0-13.51,6.043-13.51,13.51v217.658c0,7.457,6.043,13.5,13.51,13.5h117.186v-94.746h-31.893 v-36.926h31.893V91.434c0-31.604,19.295-48.813,47.488-48.813c13.51,0,25.109,1.012,28.494,1.459v33.027l-19.553,0.01 c-15.332,0-18.299,7.293-18.299,17.975v23.58h36.576l-4.768,36.926h-31.809v94.736h62.352c7.447,0,13.49-6.043,13.49-13.51V19.176 C250.334,11.709,244.291,5.666,236.824,5.666z"
        })
      );
    }
    function K() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_3",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Twitter",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M250.151,128.021c0,67.418-54.604,122.022-122.022,122.022S6.107,195.439,6.107,128.021C6.107,60.604,60.712,6,128.129,6 S250.151,60.604,250.151,128.021z M105.799,192.389c54.117,0,83.707-44.842,83.707-83.707c0-1.282,0-2.563-0.062-3.783 c5.736-4.148,10.739-9.335,14.705-15.252c-5.247,2.318-10.922,3.905-16.901,4.637c6.103-3.661,10.738-9.396,12.936-16.29 c-5.675,3.355-11.959,5.796-18.67,7.138c-5.369-5.734-12.995-9.273-21.477-9.273c-16.228,0-29.406,13.179-29.406,29.407 c0,2.318,0.243,4.576,0.793,6.711c-24.466-1.22-46.125-12.934-60.646-30.75c-2.501,4.332-3.965,9.396-3.965,14.765 c0,10.189,5.186,19.218,13.117,24.465c-4.819-0.122-9.334-1.464-13.3-3.661c0,0.122,0,0.244,0,0.366 c0,14.275,10.128,26.113,23.611,28.857c-2.44,0.672-5.064,1.039-7.748,1.039c-1.892,0-3.723-0.184-5.553-0.551 c3.722,11.714,14.581,20.195,27.455,20.44c-10.067,7.868-22.757,12.566-36.546,12.566c-2.379,0-4.697-0.122-7.016-0.427 C73.707,187.507,89.204,192.389,105.799,192.389"
        })
      );
    }
    function Z() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_YouTube",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M243.402,70.101c-2.775-10.309-10.906-18.439-21.217-21.217c-18.838-5.152-94.185-5.152-94.185-5.152 s-75.348,0-94.185,4.957c-10.112,2.775-18.44,11.104-21.216,21.413C7.644,88.94,7.644,128,7.644,128s0,39.257,4.957,57.896 c2.775,10.313,10.905,18.439,21.216,21.219c19.036,5.154,94.185,5.154,94.185,5.154s75.347,0,94.185-4.957 c10.311-2.771,18.441-10.906,21.217-21.217c4.953-18.838,4.953-57.898,4.953-57.898S248.557,88.94,243.402,70.101z M104.008,164.088 V91.912L166.668,128L104.008,164.088z"
        })
      );
    }
    function Q() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_3",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_TwitchTV",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M28.176,8.026L11.763,49.97v171.427h58.358v31.003h32.826l31.003-31.003h47.414l63.829-63.829V8.026H28.176z M223.311,146.625l-36.474,36.474h-58.359l-31.002,31.003v-31.003H48.237V29.91h175.074V146.625z M186.837,71.855v63.829h-21.885 V71.855H186.837z M128.478,71.855v63.829h-21.883V71.855H128.478z"
        })
      );
    }
    function $() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_CSGO",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M236.979,138.059c0.548,0.078,6.91,0.101,7.772,0.032 c1.215-0.095,1.396,0.068,1.388,0.708c-0.01,0.397,0.012,3.039-2.365,7.32c-3.301,5.948-12.079,10.436-12.55,10.672 c-0.47,0.233-0.53,0.484-0.136,0.75c0.434,0.295,8.068,1.454,9.084,1.611c1.017,0.154,0.637,1.001,0.637,1.001 s-0.704,2.621-2.895,5.36c-2.189,2.738-9.311,6.123-8.583,6.123c0.731,0,7.187,0.159,6.181,1.422 c-3.019,3.786-13.603,9.528-18.43,13.813c-13.388,11.885-13.217,12.864-15.52,15.09c-0.983-3.298-3.02-12.658-3.02-12.658 l-6.105-11.467c4.413,0.18,6.364,0.081,8.952,0.081c9.214,0,17.525-2.185,22.234-5.841l2.371-1.843l-2.911-0.728 c-2.131-0.528-7.121-1.782-11.896-2.979c2.184-0.104,10.803-1.299,14.413-5.339c0.136-0.151,0.276-0.321,0.406-0.494l1.245-1.664 l-2.404-0.735c-2.607-0.799-5.948-1.682-8.517-2.335c3.173-1.572,7.585-3.942,10.048-6.088c4.83-4.203,7.226-9.709,7.322-9.943 l0.9-2.098l-10.772,0.318c1.503-1.483,3.218-3.197,3.939-3.991c1.43-1.571,4.053-6.221,4.198-9.896l0.072-1.787l-1.763,0.288 c-1.979,0.322-5.301,1.279-8.179,2.173c2.025-2.193,4.296-4.767,5.46-6.484c2.687-3.964,2.76-8.371,2.597-12.916l-0.104-2.881 l-2.261,1.79c-2.559,2.028-7.595,5.031-11.097,7.047c1.538-3.644,3.54-8.752,3.813-11.276c0.5-4.681-0.248-10.196-0.248-10.196 l-10.76,9.394c0.885-1.953,1.684-4.013,2.117-5.832c1.735-7.29,0.055-17.892-0.021-18.338l-0.452-2.807l-7.777,7.739 c0.722-3.535,1.465-8.253,1.23-11.789c-0.426-6.321-2.278-10.517-2.359-10.694l-1.01-2.251l-6.465,8.577 c0.231-4.285,0.27-10.24-0.948-13.547c-1.934-5.262-3.651-8.007-3.723-8.121l-1.232-1.958l-3.057,4.85 c0.018-2.967-0.11-6.475-0.69-8.68c-1.202-4.543-2.825-6.396-3.002-6.592l-1.325-1.433l-1.623,2.705 c-0.278-3.19-1.112-7.084-3.343-9.478l-0.814-0.872l-1.012,0.623c-0.327,0.201-0.714,0.497-1.104,0.823 c-0.154-1.135-0.365-2.451-0.639-3.691c0.563-4.733,1.186-10.03,1.206-10.452c0.027-0.547,0.274-0.767,1.017-0.391 c0.898,0.452,3.156,2.064,5.187,6.133c2.036,4.067,3.132,11.324,3.117,12.044c-0.009,0.383,0.291,0.757,0.438,0.151 c0.145-0.607,0.478-7.591,0.623-8.312c0.081-0.383,0.199-0.484,0.737-0.212c0.496,0.249,2.959,2.181,4.899,6.463 c1.179,2.599,1.634,11.946,1.574,12.653c-0.106,1.278,0.313,0.891,0.339,0.883c-0.009,0.013-0.025,0.04-0.03,0.049 c0.03-0.041,0.036-0.049,0.03-0.049c0.573-0.841,4.21-8.99,4.519-9.377c0.313-0.39,0.521-0.395,0.835,0.002 c0.262,0.33,2.095,1.717,4.049,10.088c1.902,8.135,1.949,11.542,1.848,12.682c-0.08,0.86,0.339,0.993,0.731,0.524 c0.389-0.47,5.104-9.201,5.497-9.515c0.389-0.313,0.613-0.309,0.927,0.161c0.312,0.469,2.718,4.762,3.684,11.448 c0.861,5.947,0.608,13.599,0.375,14.381c-0.235,0.782-0.135,1.077,0.493,0.53c0.623-0.548,10.299-8.412,11.004-9.038 c0.703-0.627,1.18-0.65,1.34-0.046c0.172,0.654,0.822,8.654,0.275,15.225c-0.549,6.571-2.626,12.752-2.94,13.145 c-0.312,0.391,0.087,0.712,0.478,0.555c0.394-0.157,11.902-10.018,12.645-10.402c0.711-0.367,1.043,0.005,1.105,0.507 c0.068,0.544,0.966,3.098-0.419,11.269c-0.959,5.65-3.54,11.876-3.855,12.033c-0.313,0.157-0.077,0.336,0.234,0.259 c0.315-0.079,8.324-3.488,8.872-3.567c0.546-0.079,0.671,0.339,0.514,0.808c-0.158,0.469-0.458,6.273-2.534,11.639 c-2.603,6.732-6.056,11.001-6.056,11.001s-0.252,0.519,0.217,0.519s9.266-0.186,9.813-0.263c0.547-0.079,0.627,0.156,0.547,0.704 c-0.077,0.547,0.858,9.116-8.624,14.601C236.524,137.734,236.432,137.979,236.979,138.059z M174.473,24.823 c1.981,3.34,2.018,9.248,1.836,11.469l-0.52,6.238l5.25-8.744c0.395,0.843,0.85,2.003,1.25,3.524 c1.02,3.877,0.422,13.082,0.417,13.173l-0.384,5.752l6.435-10.212c0.628,1.27,1.45,3.097,2.32,5.459 c1.466,3.983,0.772,13.806,0.381,17.257l-0.602,5.308l9.568-12.69c0.493,1.707,1.058,4.21,1.259,7.227 c0.39,5.821-2.272,15.731-2.299,15.83l-1.428,5.26l11.125-11.068c0.377,3.586,0.772,9.774-0.304,14.302 c-1.2,5.057-5.778,12.588-5.823,12.664l-1.806,3.992l16.878-14.09c-0.116,1.366-0.262,2.944-0.423,4.435 c-0.312,2.935-3.954,11.389-5.335,14.399l-1.827,4.002l3.856-2.115c0.381-0.208,8.027-4.41,12.979-7.778 c-0.039,3.484-0.537,6.042-2.139,8.4c-2.189,3.234-9.05,10.198-9.118,10.268l-4.352,4.408l5.861-2.004 c0.08-0.025,6.868-2.34,11.188-3.41c-0.675,2.445-2.208,5.125-3.11,6.118c-1.319,1.449-6.429,6.429-6.48,6.482l-2.682,2.614 l13.475-0.404c-1.06,1.837-2.89,4.549-5.457,6.783c-3.727,3.244-12.956,7.341-13.048,7.383l-3.952,1.746l4.201,1.008 c0.062,0.015,5.637,1.354,10.266,2.67c-3.412,2.191-9.291,3.081-10.948,3.138c-2.06,0.072-11.075,0.125-11.075,0.125l-11.51,0.069 l11.162,2.804c0,0,12.587,3.164,19.486,4.894c-4.398,2.216-10.717,3.493-17.657,3.493c-3.102,0-10.335-0.284-15.048-0.483 c4.064,6.069,7.041,11.004,7.992,13.681c2.813,7.915,6.777,28.269,6.889,48.907c0.039,6.572-1.081,11.649-9.022,11.649 c-0.288,0-0.597-0.038-0.908-0.092c-1.846,0.339-4.351,0.595-5.438-0.095c-1.805-1.149-3.163-2.627-3.544-3.957 c-0.383-1.334-1.146-9.374-3.106-20.675c-1.92-11.046-4.038-19.431-4.237-19.525c-1.535-0.731-9.358-18.45-9.358-18.45 l-37.23-47.615c0,0-20.737,23.917-37.455,47.8c-0.867,1.235-5.994,11.251-9.275,17.989c-0.212,0.437-0.181,0.475-0.281,0.808 c-0.604,2.015-2.396,9.525-4.039,18.994c-1.962,11.301-2.725,19.341-3.105,20.675c-0.384,1.33-1.74,2.808-3.546,3.957 c-1.085,0.689-3.592,0.434-5.437,0.095c-0.313,0.054-0.621,0.092-0.909,0.092c-7.941,0-9.061-5.077-9.024-11.649 c0.114-20.639,4.078-40.992,6.892-48.907c0.95-2.677,3.926-7.611,7.993-13.681c-4.714,0.199-11.946,0.483-15.051,0.483 c-6.939,0-13.26-1.277-17.653-3.493c6.896-1.729,19.486-4.894,19.486-4.894l11.159-2.804l-11.508-0.069 c0,0-9.019-0.053-11.076-0.125c-1.66-0.057-7.537-0.946-10.949-3.138c4.629-1.315,10.202-2.655,10.264-2.67l4.201-1.008l-3.95-1.746 c-0.094-0.042-9.324-4.139-13.049-7.383c-2.566-2.234-4.397-4.946-5.458-6.783l13.477,0.404l-2.684-2.614 c-0.05-0.054-5.16-5.033-6.48-6.482c-0.9-0.993-2.436-3.673-3.108-6.118c4.319,1.069,11.108,3.384,11.188,3.41l5.861,2.004 l-4.352-4.408c-0.069-0.069-6.928-7.033-9.12-10.268c-1.601-2.358-2.099-4.916-2.139-8.4c4.953,3.368,12.601,7.57,12.98,7.778 l3.858,2.115l-1.829-4.002c-1.379-3.011-5.022-11.465-5.334-14.399c-0.161-1.491-0.305-3.068-0.421-4.435l16.877,14.09l-1.806-3.992 c-0.046-0.076-4.622-7.607-5.821-12.664c-1.078-4.528-0.682-10.716-0.307-14.302L58.57,89.672l-1.426-5.26 c-0.025-0.098-2.688-10.008-2.3-15.83c0.203-3.017,0.767-5.52,1.26-7.227l9.566,12.69l-0.601-5.308 c-0.391-3.451-1.083-13.274,0.381-17.257c0.871-2.362,1.693-4.189,2.32-5.459l6.435,10.212l-0.382-5.752 c-0.006-0.091-0.604-9.295,0.416-13.173c0.401-1.521,0.854-2.681,1.251-3.524l5.249,8.744l-0.52-6.238 c-0.181-2.221-0.144-8.129,1.836-11.469c0.596,0.522,1.248,1.148,1.67,1.575l2.215,2.245l0.276-3.142 c0.162-1.838,0.783-7.003,1.703-8.813c1.342-2.635,4.69-3.91,7.104-4.505c-6.691,13.614-36.889,77.59-36.889,122.937 c0,23.658,16.206,23.931,16.368,23.931c4.881,0,6.947-7.914,6.947-11.063V133.45c0-2.744,1.148-2.744,1.835-2.744 c5.807,0,10.48,3.196,13.855,6.69c8.813-11.615,15.81-20.526,15.81-20.526s0.16-0.182,0.248-0.345 c-1.03-2.443-7.165-16.995-7.165-16.995l1.708-43.717c0,0-0.278-3.797,1.044-6.052c1.314-2.245,4.247-3.175,4.247-3.175 l13.307,41.443c0,0-4.107,0.866-4.107,5.585c0,2.982,2.658,4.99,6.227,5.013c3.572-0.022,6.227-2.031,6.227-5.013 c0-4.719-4.109-5.585-4.109-5.585l13.311-41.443c0,0,2.93,0.93,4.245,3.175c1.322,2.255,1.043,6.052,1.043,6.052l1.709,43.717 l-7.309,17.34c0,0,6.997,8.911,15.809,20.526c3.375-3.494,8.048-6.69,13.855-6.69c0.687,0,1.833,0,1.833,2.744v14.538 c0,3.148,2.068,11.063,6.95,11.063c0.159,0,16.367-0.272,16.367-23.931c0-45.347-30.197-109.322-36.888-122.937 c2.412,0.595,5.761,1.87,7.104,4.505c0.92,1.809,1.541,6.975,1.705,8.813l0.275,3.142l2.213-2.245 C173.226,25.972,173.875,25.345,174.473,24.823z M176.157,181.396c-1.644-2.189-41.07-55.856-41.07-55.856l-6.723,8.809 l-0.946-1.233l-0.829-1.082l-5.053-6.594l-0.095,0.101c0,0-39.427,53.667-41.07,55.856c-1.643,2.191-4.777,6.708-6.058,9.322 c-1.279,2.614-8.946,39.306-8.946,42.592c0,2.005,0.041,8.618,0.071,13.47c1.536,0.2,3.411,0.761,4.357,0.125 c1.624-1.093,2.363-2.323,2.491-3.372c0.128-1.048,1.367-12.969,2.69-20.812c1.779-10.547,4.571-19.005,4.415-18.97 c3.213-6.672,8.966-17.938,9.887-19.252c17.808-25.439,38.994-49.947,38.994-49.947s21.166,24.502,38.978,49.947 c0.921,1.313,6.672,12.58,9.888,19.252c-0.158-0.035,2.635,8.423,4.414,18.97c1.322,7.843,2.562,19.764,2.688,20.812 c0.131,1.049,0.87,2.279,2.493,3.372c0.944,0.636,2.818,0.075,4.355-0.125c0.032-4.852,0.073-11.465,0.073-13.47 c0-3.286-7.667-39.978-8.948-42.592C180.936,188.104,177.801,183.588,176.157,181.396z M82.538,21.517l-1.014-0.623l-0.813,0.872 c-2.231,2.394-3.063,6.287-3.342,9.478l-1.624-2.705l-1.323,1.433c-0.179,0.197-1.801,2.049-3.004,6.592 c-0.581,2.205-0.709,5.712-0.689,8.68l-3.057-4.85l-1.234,1.958c-0.072,0.114-1.787,2.859-3.722,8.121 c-1.22,3.307-1.179,9.262-0.949,13.547l-6.463-8.577l-1.012,2.251c-0.08,0.177-1.934,4.373-2.359,10.694 c-0.234,3.536,0.51,8.253,1.231,11.789l-7.778-7.739l-0.453,2.807c-0.073,0.446-1.754,11.048-0.02,18.338 c0.433,1.819,1.231,3.879,2.117,5.832l-10.759-9.394c0,0-0.749,5.515-0.248,10.196c0.271,2.523,2.272,7.632,3.813,11.276 c-3.503-2.016-8.539-5.019-11.099-7.047l-2.259-1.79l-0.106,2.881c-0.162,4.545-0.087,8.952,2.6,12.916 c1.161,1.717,3.433,4.291,5.459,6.484c-2.877-0.894-6.201-1.851-8.179-2.173l-1.763-0.288l0.071,1.787 c0.148,3.675,2.771,8.324,4.198,9.896c0.723,0.794,2.436,2.508,3.941,3.991L21.93,137.83l0.896,2.098 c0.1,0.234,2.493,5.74,7.324,9.943c2.464,2.146,6.876,4.516,10.047,6.088c-2.57,0.653-5.908,1.536-8.518,2.335l-2.402,0.735 l1.246,1.664c0.13,0.173,0.27,0.343,0.407,0.494c3.608,4.04,12.229,5.234,14.412,5.339c-4.774,1.197-9.767,2.451-11.896,2.979 l-2.911,0.728l2.371,1.843c4.708,3.656,13.02,5.841,22.233,5.841c2.588,0,4.539,0.099,8.954-0.081l-6.105,11.467 c0,0-2.038,9.36-3.02,12.658c-2.304-2.226-2.133-3.205-15.52-15.09c-4.829-4.284-15.411-10.026-18.429-13.813 c-1.005-1.263,5.449-1.422,6.179-1.422c0.73,0-6.393-3.385-8.582-6.123c-2.191-2.739-2.895-5.36-2.895-5.36s-0.38-0.847,0.637-1.001 c1.018-0.157,8.65-1.316,9.084-1.611c0.395-0.266,0.332-0.517-0.137-0.75c-0.469-0.236-9.248-4.724-12.548-10.672 c-2.375-4.281-2.357-6.923-2.364-7.32c-0.01-0.64,0.17-0.803,1.385-0.708c0.862,0.068,7.226,0.046,7.774-0.032 c0.546-0.08,0.453-0.324,0.019-0.576c-9.483-5.484-8.546-14.054-8.624-14.601c-0.079-0.548,0-0.783,0.548-0.704 c0.546,0.077,9.342,0.263,9.812,0.263c0.469,0,0.218-0.519,0.218-0.519s-3.452-4.27-6.056-11.001 c-2.077-5.366-2.377-11.169-2.533-11.639c-0.157-0.469-0.034-0.887,0.514-0.808c0.549,0.079,8.558,3.488,8.87,3.567 c0.313,0.077,0.548-0.103,0.235-0.259c-0.314-0.157-2.896-6.383-3.855-12.033c-1.384-8.17-0.488-10.725-0.42-11.269 c0.063-0.502,0.397-0.874,1.105-0.507c0.743,0.385,12.255,10.245,12.646,10.402c0.391,0.157,0.79-0.164,0.477-0.555 c-0.313-0.392-2.392-6.574-2.938-13.145c-0.548-6.571,0.1-14.571,0.274-15.225c0.161-0.604,0.635-0.581,1.339,0.046 c0.704,0.626,10.381,8.489,11.006,9.038c0.625,0.547,0.727,0.252,0.492-0.53c-0.235-0.782-0.484-8.435,0.375-14.381 c0.965-6.686,3.372-10.979,3.685-11.448s0.536-0.474,0.927-0.161c0.391,0.313,5.106,9.045,5.497,9.515 c0.391,0.469,0.809,0.336,0.732-0.524c-0.104-1.14-0.057-4.547,1.845-12.682c1.956-8.371,3.789-9.758,4.052-10.088 c0.313-0.396,0.521-0.392,0.833-0.002c0.309,0.387,3.945,8.536,4.519,9.377c-0.005,0,0,0.008,0.031,0.049 c-0.007-0.009-0.022-0.036-0.031-0.049c0.025,0.008,0.446,0.395,0.34-0.883c-0.058-0.707,0.396-10.055,1.574-12.653 c1.941-4.282,4.404-6.214,4.899-6.463c0.54-0.272,0.658-0.171,0.737,0.212c0.146,0.721,0.478,7.705,0.625,8.312 c0.146,0.606,0.444,0.232,0.437-0.151c-0.015-0.72,1.081-7.977,3.115-12.044c2.033-4.069,4.292-5.681,5.188-6.133 c0.742-0.376,0.989-0.156,1.018,0.391c0.022,0.422,0.645,5.719,1.206,10.452c-0.272,1.24-0.484,2.556-0.639,3.691 C83.251,22.014,82.866,21.718,82.538,21.517z M127.35,141.814c-1.158,12.032-4.978,23.045-6.326,29.486 c-1.643,7.849-4.788,18.061-6.793,20.931c-4.433,6.343-18.036,18.547-20.403,19.732c-1.094,0.547-6.376-4.115-6.56-4.846 c-0.182-0.728,2.883-3.993,2.154-3.627c-0.731,0.364-4.104,0.906-5.06,0.87c-0.753-0.026,0.633-2.728,0.633-2.728 s-1.484,2.217-3.021,2.947c-0.03,0.015,9.433-18.119,9.433-18.119S127.52,140.043,127.35,141.814z M119.7,169.39l3.104-10.647 l-1.869-0.559l-3.152,10.656L119.7,169.39z M114.072,167.242l4.687-10.051l-1.764-0.838l-4.735,10.055L114.072,167.242z  M126.961,159.319l-0.82,11.06l-1.991-0.139l0.867-11.079L126.961,159.319z M131.727,170.391l-1.986,0.167l-0.828-11.078 l1.944-0.144L131.727,170.391z M164.422,186.462c0,0,9.463,18.134,9.434,18.119c-1.54-0.73-3.021-2.947-3.021-2.947 s1.384,2.701,0.633,2.728c-0.957,0.036-4.33-0.506-5.06-0.87c-0.731-0.366,2.334,2.899,2.153,3.627 c-0.185,0.73-5.467,5.393-6.56,4.846c-2.368-1.186-15.973-13.39-20.404-19.732c-2.007-2.87-5.149-13.082-6.792-20.931 c-1.349-6.441-4.621-17.127-5.778-29.16C128.854,140.373,164.422,186.462,164.422,186.462z M142.029,167.242l1.813-0.834 l-4.735-10.055l-1.762,0.838L142.029,167.242z M136.402,169.39l1.917-0.55l-3.152-10.656l-1.868,0.559L136.402,169.39z"
        })
      );
    }
    function ee() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_ClosedCaption",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          className: "CCBox",
          fill: "none",
          stroke: "#000000",
          strokeWidth: "10",
          strokeMiterlimit: "10",
          d:
            "M238,210c0,6.627-5.373,12-12,12H30 c-6.627,0-12-5.373-12-12V46c0-6.627,5.373-12,12-12h196c6.627,0,12,5.373,12,12V210z"
        }),
        o.createElement("path", {
          className: "C1",
          d:
            "M90.505,173.207c11.431,0,22.338-4.276,30.72-12.036c2.6-2.407,2.753-6.47,0.347-9.068c-2.41-2.604-6.47-2.757-9.072-0.349 c-5.998,5.559-13.811,8.62-21.995,8.62c-17.852,0-32.373-14.524-32.373-32.372c0-17.849,14.521-32.373,32.373-32.373 c8.177,0,15.981,3.055,21.979,8.603c2.603,2.407,6.662,2.25,9.072-0.353c2.407-2.602,2.249-6.662-0.353-9.068 c-8.375-7.751-19.276-12.019-30.694-12.019c-24.931,0-45.209,20.281-45.209,45.209C45.3,152.93,65.574,173.207,90.505,173.207z"
        }),
        o.createElement("path", {
          className: "C1",
          d:
            "M177.926,173.207c11.431,0,22.338-4.276,30.721-12.036c2.6-2.407,2.754-6.47,0.347-9.068 c-2.41-2.604-6.47-2.757-9.072-0.349c-5.998,5.559-13.812,8.62-21.995,8.62c-17.852,0-32.372-14.524-32.372-32.372 c0-17.849,14.521-32.373,32.372-32.373c8.178,0,15.981,3.055,21.979,8.603c2.604,2.407,6.663,2.25,9.072-0.353 c2.407-2.602,2.25-6.662-0.353-9.068c-8.375-7.751-19.277-12.019-30.694-12.019c-24.932,0-45.209,20.281-45.209,45.209 C132.721,152.93,152.996,173.207,177.926,173.207z"
        })
      );
    }
    function te() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Hidden",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d: "M62.499,172.263 c-32.755-16.197-47.415-39.509-47.415-39.509"
        }),
        o.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M177.948,85.392 c48.213,14.998,68.451,47.362,68.451,47.362s-36.393,54.737-115.689,54.737c-17.938,0-33.591-2.671-47.096-6.832"
        }),
        o.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M15.084,132.754 c0,0,32.933-56.576,115.674-54.785c8.505,0.185,16.486,0.913,23.96,2.072"
        }),
        o.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M93.981,141.131 c-0.475-2.385-0.725-4.852-0.725-7.377c0-20.711,16.789-37.5,37.5-37.5c2.42,0,4.787,0.229,7.08,0.668"
        }),
        o.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M156.528,106.512 c7.223,6.836,11.729,16.513,11.729,27.242c0,20.711-16.789,37.5-37.5,37.5c-10.609,0-20.189-4.405-27.012-11.487"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "53.007",
          y1: "210.504",
          x2: "208.507",
          y2: "55.004"
        })
      );
    }
    function re(e) {
      var t = Object(a.a)(
        "SVGIcon_Button",
        e.filled ? "SVGIcon_Star_Filled" : "SVGIcon_Star_Unfilled"
      );
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: t,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          fill: e.filled ? "#ffffff" : "none",
          stroke: "#ffffff",
          strokeWidth: "10",
          strokeMiterlimit: "10",
          d:
            "M127.755,18.624 c-2.061,0.101-3.846,1.465-4.485,3.427L98.312,96.933H18.379c-2.745,0.01-4.963,2.242-4.955,4.989 c0.006,1.572,0.754,3.05,2.019,3.984l64.925,47.476L55.41,230.873c-0.848,2.612,0.582,5.417,3.192,6.265 c1.521,0.495,3.186,0.228,4.475-0.719L128,188.945l64.926,47.474c2.212,1.624,5.324,1.144,6.947-1.071 c0.944-1.29,1.211-2.954,0.719-4.475l-24.959-77.492l64.922-47.476c2.211-1.63,2.681-4.743,1.049-6.953 c-0.934-1.265-2.41-2.015-3.984-2.02H157.69l-24.959-74.882C132.033,19.917,129.997,18.513,127.755,18.624z"
        })
      );
    }
    function ne() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Download",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          { className: "arrow" },
          o.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "129",
            y1: "182",
            x2: "129",
            y2: "24"
          }),
          o.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "174.25,141.25 128.732,183.625 84.25,141.25"
          })
        ),
        o.createElement(
          "g",
          { className: "catch" },
          o.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "23.25,173.5 23.25,235.75 234.75,235.75 234.75,173.5"
          })
        )
      );
    }
    function ce(e) {
      var t = e.fullcolor ? "rgb(102, 185, 255)" : "none",
        r = e.fullcolor ? "rgb(255, 208, 0)" : "none",
        n = e.fullcolor ? "rgb(255, 145, 0)" : "rgba(255, 255, 255, .2)",
        c = e.fullcolor ? "rgb(34, 98, 150)" : "rgb(255, 255, 255, .4)";
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Achievement",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polyline", {
          fill: t,
          stroke: c,
          strokeWidth: "10",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points:
            "111.689,174.543 97.276,245.256 78.612,208.64 41.298,217.794 66.575,149.584 "
        }),
        o.createElement("polyline", {
          fill: t,
          stroke: c,
          strokeWidth: "10",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points:
            "189.403,149.584 214.68,217.794 177.359,208.64 158.701,245.256 144.289,174.544 "
        }),
        o.createElement("polygon", {
          fill: t,
          stroke: c,
          strokeWidth: "10",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points:
            "108.668,171.035 81.336,179.573 75.21,152.086 47.185,146.07 55.893,119.256 34.693,100.302 55.893,81.349 47.185,54.533 75.21,48.52 81.343,21.031 108.668,29.567 127.985,8.766 147.304,29.567 174.636,21.031 180.768,48.52 208.787,54.533 200.078,81.349 221.285,100.302 200.086,119.256 208.787,146.072 180.768,152.086 174.636,179.573 147.311,171.035 127.992,191.84 "
        }),
        o.createElement("path", {
          fill: r,
          stroke: n,
          strokeWidth: "6",
          strokeMiterlimit: "10",
          d:
            "M127.985,45.378 c30.868,0,55.979,24.638,55.979,54.923c0,30.282-25.111,54.924-55.979,54.924c-30.862,0-55.978-24.642-55.978-54.924 C72.007,70.017,97.124,45.378,127.985,45.378"
        })
      );
    }
    function oe() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_PlayTime",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polyline", {
          fill: "none",
          stroke: "#000000",
          strokeWidth: "16",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "85.5,149.167 128,128 128,55.167 "
        }),
        o.createElement("path", {
          fill: "none",
          stroke: "#000000",
          strokeWidth: "16",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          d:
            "M128,17.5c61.027,0,110.5,49.473,110.5,110.5S189.027,238.5,128,238.5S17.5,189.027,17.5,128"
        }),
        o.createElement("circle", {
          stroke: "#000000",
          strokeWidth: "7",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          cx: "26.448",
          cy: "85.833",
          r: "5.5"
        }),
        o.createElement("circle", {
          stroke: "#000000",
          strokeWidth: "7",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          cx: "50.167",
          cy: "50.5",
          r: "5.5"
        }),
        o.createElement("circle", {
          stroke: "#000000",
          strokeWidth: "7",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          cx: "86",
          cy: "26.667",
          r: "5.5"
        })
      );
    }
    function ie(e) {
      var t = l.c(e.percentComplete, 0, 100, 800, 0);
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_4",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_ProgressCircle",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
          style: { transform: "rotateZ(-90deg)" }
        },
        o.createElement("circle", {
          cx: "128",
          cy: "128",
          r: "128",
          stroke: "#ffffff",
          strokeWidth: "10",
          fill: "#00000000",
          strokeDasharray: "800",
          strokeDashoffset: t
        })
      );
    }
    function ae() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_ReadyToPlay",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "-305.5 396.5 256 256"
        },
        o.createElement("circle", {
          fill: "none",
          stroke: "#000000",
          strokeWidth: "10",
          strokeMiterlimit: "10",
          cx: "-177.5",
          cy: "520.5",
          r: "64"
        }),
        o.createElement("path", {
          d:
            "M-194.852,487.664c-3.918-2.299-7.07-0.511-7.07,4.004v57.665c0,4.515,3.152,6.303,7.07,4.003l47.699-28.619 c3.918-2.3,3.918-6.133,0-8.519L-194.852,487.664z"
        })
      );
    }
    function le() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Edit",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M16.757,233.795c-1.324,3.973,2.455,7.752,6.427,6.428l50.912-16.971l-40.368-40.367L16.757,233.795z"
        }),
        o.createElement("rect", {
          x: "83.614",
          y: "75.466",
          transform: "matrix(-0.7071 -0.7071 0.7071 -0.7071 93.7468 324.5916)",
          width: "60.971",
          height: "134.827"
        }),
        o.createElement("rect", {
          x: "149.28",
          y: "68.116",
          transform: "matrix(-0.7071 -0.7071 0.7071 -0.7071 252.0431 259.4951)",
          width: "60.971",
          height: "18.862"
        }),
        o.createElement("path", {
          d:
            "M233.545,37.803l-14.368-14.369c-7.928-7.928-20.846-7.897-28.809,0.064l-14.305,14.307l43.112,43.111l14.306-14.305 C241.511,58.582,241.513,45.771,233.545,37.803z"
        })
      );
    }
    function se() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Information",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polyline", {
          className: "I",
          points:
            "86.883,110.957 152.894,110.957 152.894,181.406 177.117,181.406 177.117,202.485 86.883,202.485 86.883,181.775 109.441,181.775 109.441,130.372 86.883,130.372 "
        }),
        o.createElement("circle", {
          className: "I",
          cx: "128.47",
          cy: "67.607",
          r: "25.517"
        }),
        o.createElement("circle", {
          fill: "none",
          stroke: "#000000",
          strokeWidth: "14",
          strokeMiterlimit: "10",
          cx: "128",
          cy: "128",
          r: "116.833"
        })
      );
    }
    function ue(e) {
      return o.createElement(
        "svg",
        {
          style: { height: e.height, width: e.height },
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DynamicCollection",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polyline", {
          style: { opacity: 0.2 },
          points:
            "27.875,27.875 73.692,27.893 51.91,154.75 74.672,155 62.787,227.93 27.875,228.125"
        }),
        o.createElement("polyline", {
          style: { opacity: 0.2 },
          points:
            "202.723,27.875 228.147,27.875 228.541,227.93 111.667,227.93 209.345,91.25 175.523,91.218"
        }),
        o.createElement("polygon", {
          points:
            "178.671,16.667 103.833,16.667 75.506,140.146 103.83,140.025 75.506,242.5 174.837,107.74 142.5,107.5"
        })
      );
    }
    function he() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_SketchArrowTopLeft",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          d:
            "M5,52.991l10.823-27.306C68.038,201.104,124.475,254.751,251,220.579"
        }),
        o.createElement("line", {
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          x1: "15.823",
          y1: "25.686",
          x2: "40.363",
          y2: "41.714"
        })
      );
    }
    function me() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Patch",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M171.176,136.219c-5.516-5.516-14.166-5.948-20.223-1.406L92.125,75.984l-8.002-29.738c-0.324-1.406-1.73-3.027-3.028-3.785 L46.49,24.186c-1.298-0.648-3.136-0.433-4.218,0.648L25.295,41.813c-0.974,0.973-1.298,2.92-0.649,4.217l18.276,34.605 c0.648,1.297,2.379,2.596,3.785,3.027l29.739,8.003l58.828,58.828c-4.542,6.056-4.109,14.707,1.405,20.222l56.882,56.882 c6.056,6.056,15.896,6.056,21.845,0l12.544-12.544c6.056-6.056,6.056-15.788,0-21.845L171.176,136.219z"
        }),
        o.createElement("path", {
          d:
            "M153.116,122.16c2.271-0.648,4.65-0.973,7.138-0.973c0.865,0,1.622,0,2.486,0.107l26.928-26.927 c12.328,2.92,25.846-0.324,35.361-9.948c9.517-9.625,12.869-23.034,9.949-35.254l-20.33,20.33l-21.845-5.84l-5.84-21.952 l20.331-20.33c-12.221-2.92-25.738,0.324-35.254,9.948c-9.625,9.625-12.869,23.143-9.949,35.362L129.866,98.91L153.116,122.16z"
        }),
        o.createElement("path", {
          d:
            "M99.371,129.406l-32.226,32.226c-12.328-2.92-25.845,0.324-35.362,9.948c-9.517,9.625-12.869,23.034-9.949,35.254 l20.331-20.33l21.953,5.84l5.839,21.952l-20.331,20.33c12.22,2.92,25.737-0.324,35.254-9.949 c9.625-9.624,12.869-23.142,9.949-35.361l27.035-27.035c-0.325-3.136,0-6.38,0.865-9.517L99.371,129.406z"
        })
      );
    }
    function fe() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_AppleLogo",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z"
        }),
        o.createElement("path", {
          d:
            "M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z"
        })
      );
    }
    function pe() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_3",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_LinuxLogo2",
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          { id: "g4768_2_", transform: "translate(-6.9308024,-10)" },
          o.createElement("g", { id: "g4763_2_" })
        ),
        o.createElement("path", {
          d:
            "M235.4,158.1c-14.6-33.7-46.9-69.7-49.3-80.3c-2-6.4-2.3-32.5-16.5-52.3c-11.8-13.8-25.2-23.1-42.7-23.1 c-17.4,0-32.5,8.7-43,23.1C69.7,45.2,69.4,70,67.4,77.8c-0.9,9.9-33.1,43.8-48,77.5c-6.8,15.3-11.1,27.4-9.3,30.6 c4.4,4,5.4-1.5,31.1-8.4c0.2,26.2,8.7,76,84.8,76c0.3,0,0.5,0,0.7,0c0.3,0,0.5,0,0.7,0c77.4,0,85.6-59.8,84.8-77.4 c-0.1-2.6,28,15.6,31.1,9.8C245.1,182.8,241.4,172,235.4,158.1z M182,213.8c-4.9,8.9-16.4,24.1-52.6,24.6c-0.9,0-1.7,0-2.6,0 c-0.9,0-1.7,0-2.6,0c-36.2-0.5-47.7-15.7-52.6-24.6c-15.9-28.5,0.1-83.4,10.1-109.2c5.7-14.7,12.9-23.5,22.1-28.3 c5.8,9.9,19.4,21.6,23.7,21.6c4.5,0,17.2-11,23.2-20.7c9,5.4,15.9,14.5,21.2,27.4C181,126.7,197.8,185.3,182,213.8z"
        })
      );
    }
    function de() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_3_copy",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          { id: "Layer_3_copy" },
          o.createElement(
            "g",
            { id: "g4768_1_", transform: "translate(-6.9308024,-10)" },
            o.createElement("g", { id: "g4763_1_" })
          ),
          o.createElement("path", {
            d:
              "M206.3,36.6c-19.4,0-35.8,14.1-40.3,33H24.8c-6,0-10.8,4.8-10.8,10.8s4.8,10.8,10.8,10.8h141.3\r\n\t\t\t\tc4.7,18.6,20.9,32.4,40.2,32.4c22.9,0,41.5-19.5,41.5-43.5C247.9,56.2,229.2,36.6,206.3,36.6z M206.3,109.7\r\n\t\t\t\tc-15.2,0-27.5-13.2-27.5-29.5c0-16.3,12.4-29.5,27.5-29.5s27.5,13.2,27.5,29.5C233.9,96.4,221.5,109.7,206.3,109.7z"
          }),
          o.createElement("path", {
            d:
              "M230.4,157.3H107.9c-4.6-14.6-18.3-25.2-34.3-25.2s-29.7,10.6-34.3,25.2H24.8c-6,0-10.8,4.8-10.8,10.8\r\n\t\t\t\tS18.9,179,24.8,179h14.3c4.6,14.6,18.3,25.2,34.3,25.2s29.7-10.6,34.3-25.2h122.5c6,0,10.8-4.8,10.8-10.8S236.4,157.3,230.4,157.3z\r\n\t\t\t\tM73.5,189.8c-8,0-14.9-4.3-18.7-10.8l0,0c-0.7-1.2-1.3-2.4-1.7-3.7c0,0,0-0.1,0-0.1c-0.1-0.4-0.2-0.8-0.4-1.2c0-0.1,0-0.1,0-0.2\r\n\t\t\t\tc-0.2-0.8-0.4-1.7-0.5-2.6c0-0.1,0-0.2,0-0.3c0-0.3-0.1-0.7-0.1-1c0-0.1,0-0.2,0-0.4c0-0.4,0-0.9,0-1.3s0-0.9,0-1.3\r\n\t\t\t\tc0-0.1,0-0.2,0-0.4c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.3c0.1-0.9,0.3-1.8,0.5-2.6c0-0.1,0-0.1,0-0.2c0.1-0.4,0.2-0.8,0.4-1.2\r\n\t\t\t\tc0,0,0-0.1,0-0.1c0.5-1.3,1-2.6,1.7-3.7c3.7-6.4,10.7-10.8,18.7-10.8c8,0,14.9,4.3,18.7,10.8c0.7,1.2,1.3,2.4,1.7,3.7\r\n\t\t\t\tc0,0,0,0.1,0,0.1c0.1,0.4,0.3,0.8,0.4,1.2c0,0.1,0,0.1,0,0.2c0.2,0.8,0.4,1.7,0.5,2.6c0,0.1,0,0.2,0,0.3c0,0.3,0.1,0.7,0.1,1\r\n\t\t\t\tc0,0.1,0,0.2,0,0.4c0,0.4,0,0.9,0,1.3s0,0.9,0,1.3c0,0.1,0,0.2,0,0.4c0,0.3-0.1,0.7-0.1,1c0,0.1,0,0.2,0,0.3\r\n\t\t\t\tc-0.1,0.9-0.3,1.8-0.5,2.6c0,0.1,0,0.1,0,0.2c-0.1,0.4-0.2,0.8-0.4,1.2c0,0,0,0.1,0,0.1c-0.5,1.3-1,2.6-1.7,3.7l0,0\r\n\t\t\t\tC88.5,185.4,81.5,189.8,73.5,189.8z"
          })
        )
      );
    }
    function Ee() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          null,
          o.createElement("path", {
            d:
              "M216.3,84.7c-18,0-32.7,14.7-32.7,32.7c0,0.1,0,0.3,0,0.4l-21.1,30.6c-3.4-0.1-6.8,0.4-10.1,1.8c-1.4,0.6-2.8,1.3-4,2.1 l-95.1-39.3c-1.6-7.4-6.7-13.9-14.2-17.1c-12.2-5.1-26.2,0.7-31.3,12.9c-5.1,12.2,0.7,26.2,12.9,31.3c5.9,2.5,12.4,2.5,18.3,0 c1.4-0.6,2.6-1.2,3.9-2l95.3,39.4c1.6,7.3,6.7,13.8,14.1,16.9c12.2,5.1,26.2-0.7,31.3-12.9c1.3-3.2,1.9-6.5,1.8-9.8l30.2-21.5 c0.2,0,0.5,0,0.7,0c18.1,0,32.7-14.7,32.7-32.7C249,99.4,234.3,84.7,216.3,84.7z M22.8,135.1c-7.1-2.9-11.3-9.8-11.3-17 c0-2.4,0.5-4.8,1.4-7.1c3.9-9.4,14.7-13.8,24.1-9.9c4.4,1.8,7.7,5.2,9.6,9.3l-10.9-4.5c-6.9-2.9-14.9,0.4-17.8,7.3 c-2.9,6.9,0.4,14.9,7.3,17.8l10.9,4.5C31.8,137,27.1,136.9,22.8,135.1z M178.5,179.4c-3.9,9.4-14.7,13.8-24.1,9.9 c-4.3-1.8-7.6-5.1-9.5-9l10.7,4.4c6.9,2.9,14.9-0.4,17.8-7.3c2.9-6.9-0.4-14.9-7.3-17.8l-11-4.6c4.2-1.6,9.1-1.7,13.6,0.2 c4.5,1.9,8.1,5.4,10,10C180.4,169.9,180.4,174.9,178.5,179.4z M216.3,139.3c-12,0-21.8-9.8-21.8-21.8c0-12,9.8-21.8,21.8-21.8 c12,0,21.8,9.8,21.8,21.8C238.1,129.5,228.3,139.3,216.3,139.3z M216.3,133.8c-9,0-16.4-7.3-16.4-16.4s7.3-16.4,16.4-16.4 c9.1,0,16.4,7.3,16.4,16.4S225.4,133.8,216.3,133.8z"
          })
        )
      );
    }
    function _e() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256"
        },
        o.createElement("circle", { cx: "126", cy: "134", r: "20.6" }),
        o.createElement("circle", { cx: "189.4", cy: "134", r: "20.6" }),
        o.createElement("circle", { cx: "62.6", cy: "134", r: "20.6" })
      );
    }
    function ge() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Invalid",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M128.5,27.4C74.1,27.4,30,71.5,30,125.9c0,54.4,44.1,98.5,98.5,98.5s98.5-44.1,98.5-98.5C226.9,71.5,182.9,27.4,128.5,27.4 z M206.8,125.9c0,17.7-5.9,34-15.8,47.2L81.3,63.3c13.1-9.9,29.5-15.8,47.2-15.8C171.7,47.5,206.8,82.6,206.8,125.9z M50.2,125.9 c0-17.7,5.9-34,15.8-47.2l109.7,109.7c-13.1,9.9-29.5,15.8-47.2,15.8C85.2,204.2,50.2,169.1,50.2,125.9z"
        })
      );
    }
    function ve(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 409.6 409.6"
        },
        o.createElement("path", {
          d:
            "M109.9,96.2H302c16.3,0,29.6,13,29.6,29v101.4c0,16-13.2,29-29.6,29h-90.1l-57.6,57.9L138,255.6h-28.1\r\n\t\t\t\tc-16.3,0-29.6-13-29.6-29V125.2C80.4,109.2,93.6,96.2,109.9,96.2z"
        })
      );
    }
    function ke(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 409.6 409.6"
        },
        o.createElement("path", {
          d:
            "M275.1,153c-4.3-0.2-8,3.9-8.2,9.1l-5.8,136.5c-0.1,3.3-2.5,6.1-5.3,6.1H155.1c-2.7,0-5.1-2.8-5.3-6.1\r\n\t\t\t\t\t\tl-5.8-136.5c-0.2-5.2-3.9-9.3-8.2-9.1c-4.3,0.2-7.7,4.6-7.5,9.9l5.8,136.5c0.5,13.4,9.8,24.2,21,24.2h100.8\r\n\t\t\t\t\t\tc11.2,0,20.5-10.8,21-24.2l5.8-136.5C282.9,157.6,279.5,153.2,275.1,153z M211.8,276.1v-98.4c0-4.2-2.8-7.6-6.3-7.6\r\n\t\t\t\t\t\tc-3.5,0-6.3,3.4-6.3,7.6v98.4c0,4.2,2.8,7.6,6.3,7.6C209,283.7,211.8,280.3,211.8,276.1z M174.2,283.7c3.5-0.1,6.2-3.6,6.1-7.8\r\n\t\t\t\t\t\tl-3.1-98.4c-0.1-4.2-3-7.5-6.5-7.4c-3.5,0.1-6.2,3.6-6.1,7.8l3.1,98.4C167.8,280.5,170.7,283.8,174.2,283.7z M243.3,276.3l3.2-98.4\r\n\t\t\t\t\t\tc0.1-4.2-2.6-7.7-6.1-7.8c-3.5-0.1-6.4,3.2-6.5,7.4l-3.2,98.4c-0.1,4.2,2.6,7.7,6.1,7.8C240.3,283.8,243.2,280.5,243.3,276.3z\r\n\t\t\t\t\t\tM284.3,120.7h-40l-3-12.6c-2.6-11.1-12-19.6-21.6-19.6h-28.4c-9.6,0-19,8.5-21.6,19.6l-3,12.6h-40c-4.3,0-7.9,4.3-7.9,9.5\r\n\t\t\t\t\t\ts3.5,9.5,7.9,9.5h157.5c4.3,0,7.9-4.2,7.9-9.5S288.6,120.7,284.3,120.7z M183.1,120.7l1.8-7.4c0.7-3,3.9-5.9,6.4-5.9h28.4\r\n\t\t\t\t\t\tc2.6,0,5.7,2.9,6.4,5.9l1.8,7.4H183.1z"
        })
      );
    }
    function xe(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 409.6 409.6"
        },
        o.createElement("path", {
          d:
            "M225.1,328.8c-12.6,0-15.3-1.9-29.5-5.3c-18.7-4.8-35.3-6.3-51-5.3c-3.5,0.5-7.1,0.5-10.6,1l-7.6,1\r\n\t\t\t\tc-2.5,0.5-4.5-1-5.6-3.4c-12.6-36.2-16.6-74.7-11.6-117.6c0-2.4,2-3.9,4.5-4.3l4.5-0.5c3.5-0.5,6.6-1,10.1-1c5-0.5,9.6-2.9,13.1-7.2\r\n\t\t\t\tl0.5-1c0.5-0.5,1-1.4,1.5-2.4c9.1-14.5,22.2-25.6,36.8-37.6c7.6-6.3,14.1-12.5,20.2-18.3c6.6-7.2,10.1-16.4,10.6-27\r\n\t\t\t\tc0-9.6,5.6-15.4,16.1-16.4c13.6-1,22.7,3.9,27.8,15.9c7.6,16.4-4.4,33.3-13.9,50.6c-2,3.9-4.5,7.2-7.1,10.6c-1,1.4-2,2.9-3,4.3\r\n\t\t\t\tl-3.5,4.8c-1.5,1.9-3,3.9-4.5,6.3c4,0,7.6,0,11.6,0c11.1-0.5,34.6-0.5,46.7,1.4c7.6,1,13.6,4.8,17.7,10.1c3.5,4.8,4.5,11.1,3,17.8\r\n\t\t\t\tc-0.5,2.9-2,5.8-5,9.2c-1.5,1.9-14.4,3.9-16.5,5.3h10.9c2.5,1.9,5,3.9,7.1,6.3c4,4.3,5.6,9.2,5,14.9c-0.5,5.3-3,10.6-7.6,14\r\n\t\t\t\tc-2.5,1.9-16,3.9-18.5,5.3c5,5.3,18,12.1,16.5,19.3c-2,9.6-7.6,15.4-18.2,17.8c2.5,3.9,3,8.7,1.5,13.5c-0.5,2.4-1.5,4.3-2.5,6.3\r\n\t\t\t\tc-2.5,5.3-6.6,8.2-13.1,9.6C253.2,327.8,233.7,328.8,225.1,328.8z"
        })
      );
    }
    function we(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("title", null, e.title),
        o.createElement("path", {
          d:
            "M126.16,44c-0.18-1.38-0.8-3.93-2.71-4.15c0,0-16.02-1.85-18.59,12.29c0,0-5.13,18.82,9.41,46.21l-15.08,0.64\r\n\t\t\tH68.51c-10.2,0-18.45,10.81-18.51,24.16h44.89c1.87,0,3.38,1.51,3.38,3.38c0,1.86-1.51,3.38-3.38,3.38H51.86l5.43,19.22h43.68\r\n\t\t\tc1.86,0,3.38,1.51,3.38,3.38c0,1.86-1.52,3.37-3.38,3.37H59.2l5.43,19.23h33.45c1.86,0,3.38,1.51,3.38,3.37\r\n\t\t\tc0,1.86-1.51,3.38-3.38,3.38H67.09c5.27,11.59,13.82,20.4,23.03,20.4h68.13l21.34-62.23C174.13,134.96,132.53,92.42,126.16,44z\r\n\t\t\t M208.44,154.04c-1.8-3.64-4.9-6.36-8.74-7.67l-7.55-2.57L170.86,206l7.56,2.59c3.84,1.32,7.99,1.05,11.64-0.74\r\n\t\t\tc3.65-1.79,6.36-4.89,7.67-8.73l11.45-33.45C210.49,161.82,210.23,157.69,208.44,154.04z"
        })
      );
    }
    function be(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("title", null, e.title),
        o.createElement("path", {
          d:
            "M128.55,137.4c0-21,17.02-38.02,38.02-38.02c0,0,0.01,0,0.01,0c-7.68-19.04-26.32-32.47-48.11-32.47\r\n\t\t\t\t\t\t\t\t\t\t\t\tc-28.64,0-51.86,23.22-51.86,51.86c0,9.48,2.54,18.37,6.99,26.01c0.03,0.05,0.06,0.1,0.09,0.16l-6.85,29.66l32.69-7.54\r\n\t\t\t\t\t\t\t\t\t\t\t\tc5.87,2.3,12.26,3.57,18.94,3.57c8.06,0,15.68-1.84,22.49-5.12C133.34,158.55,128.55,148.53,128.55,137.4z"
        }),
        o.createElement("path", {
          d:
            "M196.36,154.8c2.95-5.08,4.64-10.97,4.64-17.27c0-19.01-15.41-34.42-34.42-34.42s-34.42,15.41-34.42,34.42\r\n\t\t\t\t\t\tc0,19.01,15.41,34.42,34.42,34.42c4.44,0,8.68-0.84,12.57-2.37l21.7,5.01l-4.54-19.69C196.32,154.87,196.34,154.84,196.36,154.8z\r\n\t\t\t\t\t\tM167.05,157.78c-2.3,0-4.16-1.86-4.16-4.16c0-2.3,1.86-4.16,4.16-4.16c2.3,0,4.16,1.86,4.16,4.16\r\n\t\t\t\t\t\tC171.21,155.91,169.34,157.78,167.05,157.78z M171.21,140.62v0.52c0,2.3-1.86,4.16-4.16,4.16s-4.16-1.86-4.16-4.16v-4.16\r\n\t\t\t\t\t\tc0-2.3,1.86-4.16,4.16-4.16c3.32,0,6.24-1.94,6.24-4.16c0-2.22-2.91-4.16-6.24-4.16c-2.13,0-4.1,0.75-5.29,2.01\r\n\t\t\t\t\t\tc-1.57,1.67-4.2,1.76-5.88,0.19c-1.67-1.57-1.76-4.2-0.19-5.88c2.77-2.95,6.9-4.64,11.35-4.64c8.02,0,14.55,5.6,14.55,12.47\r\n\t\t\t\t\t\tC181.6,134.31,177.18,139.08,171.21,140.62z"
        })
      );
    }
    function Le(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("title", null, e.title),
        o.createElement("path", {
          d:
            "M152.07,132.73c0,0,4.05,3.28,7.04,6.86s5.74,7.59,5.74,7.59c1.45-0.55,3.27-1.36,4.09-2.05l55.4-47.84\r\n\t\t\t\t\t\t\t\t\t\t\t\tl-14.19-16.04l-55.45,47.88C153.88,129.82,152.83,131.42,152.07,132.73z"
        }),
        o.createElement("path", {
          d:
            "M192.74,71.58c0-1.97-1.61-3.58-3.58-3.58H49.56c-1.97,0-3.58,1.61-3.58,3.58v97.84\r\n\t\t\t\t\t\tc0,1.97,1.61,3.58,3.58,3.58h139.6c1.97,0,3.58-1.61,3.58-3.58v-40.11l-21.48,18.54c-1.95,1.65-5.95,2.98-6.41,3.12\r\n\t\t\t\t\t\tc-0.18,0.06-0.37,0.09-0.55,0.09c-0.5,0-1-0.21-1.34-0.6l-0.68-0.76c0,0.15,0,0.3-0.02,0.45c-0.14,1.25-0.97,2.3-2.16,2.75\r\n\t\t\t\t\t\tl-1.98,0.79c-0.12,0.05-0.25,0.08-0.38,0.1l-14.52,2.33c-0.36,0.12-0.73,0.18-1.1,0.18c-0.96,0-1.9-0.39-2.56-1.11\r\n\t\t\t\t\t\tc-0.99-1.09-1.16-2.62-0.45-3.87l2.95-6.95H67.76c-0.99,0-1.79-0.8-1.79-1.79c0-0.99,0.8-1.79,1.79-1.79h75.84l1.6-3.76\r\n\t\t\t\t\t\tc0.04-0.09,0.09-0.19,0.15-0.27c0.6-0.92,1.68-1.48,2.89-1.5c0.55-0.02,1.11,0.12,1.62,0.38l-1.29-1.46\r\n\t\t\t\t\t\tc-0.49-0.55-0.59-1.35-0.25-2c0.21-0.42,2.14-4.11,4.06-5.75l2.19-1.89h-86.8c-0.99,0-1.79-0.8-1.79-1.79\r\n\t\t\t\t\t\tc0-0.99,0.8-1.79,1.79-1.79h90.94l34.04-29.4V71.58z M170.97,104.69H67.76c-0.99,0-1.79-0.8-1.79-1.79c0-0.99,0.8-1.79,1.79-1.79\r\n\t\t\t\t\t\th103.21c0.99,0,1.79,0.8,1.79,1.79C172.76,103.89,171.95,104.69,170.97,104.69z"
        })
      );
    }
    function Se(e) {
      return o.createElement(
        "svg",
        { width: "100%", height: "100%", viewBox: "0 0 50 50" },
        o.createElement("rect", {
          x: "0",
          y: "10",
          width: "40",
          height: "5",
          rx: "5"
        }),
        o.createElement("rect", {
          x: "0",
          y: "20",
          width: "40",
          height: "5",
          rx: "5"
        }),
        o.createElement("rect", {
          x: "0",
          y: "30",
          width: "40",
          height: "5",
          rx: "5"
        })
      );
    }
  },
  BNtT: function(e, t, r) {
    "use strict";
    r.d(t, "c", function() {
      return c;
    }),
      r.d(t, "b", function() {
        return i;
      }),
      r.d(t, "a", function() {
        return l;
      });
    var f = r("mrSG"),
      a = r("TLQK"),
      n = r("vDqi"),
      p = r.n(n),
      d = r("mgoM");
    function E(e, t) {
      var r = document.createElement("link");
      (r.href = e), (r.type = "text/css"), (r.rel = "stylesheet");
      var n = t.parentElement;
      n.insertBefore(r, t), n.removeChild(t);
    }
    function c() {
      SteamClient._internal.RegisterForStyleChanges(function(e) {
        for (
          var t = "https://steamloopback.host/",
            r = [],
            n = document.querySelectorAll('link[rel="stylesheet"]'),
            c = 0;
          c < n.length;
          c++
        ) {
          var o = n[c],
            i = o.href,
            a = "";
          i.startsWith(t) && (a = i.substr(t.length));
          var l = a.indexOf("?");
          0 <= l && (a = a.substr(0, l));
          for (var s = 0, u = e; s < u.length; s++) {
            var h = u[s];
            if (a == h) {
              r.push({ sheet: o, newRelative: h });
              break;
            }
          }
        }
        for (var m = 0, f = r; m < f.length; m++) {
          var p = f[m];
          E(p.newRelative, p.sheet);
        }
      });
    }
    function o(h, m) {
      return Object(f.b)(this, void 0, void 0, function() {
        var r, n, c, o, i, a, l, s, u;
        return Object(f.e)(this, function(e) {
          switch (e.label) {
            case 0:
              (r = {}), (n = {}), (c = 0), (e.label = 1);
            case 1:
              return c < 29
                ? ("korean" == (o = Object(d.d)(c)) && (o = "koreana"),
                  [
                    4,
                    (function(t, r) {
                      return Object(f.b)(this, void 0, void 0, function() {
                        return Object(f.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return [
                                4,
                                p.a.get(
                                  "https://steamloopback.host/localization/" +
                                    t +
                                    "_" +
                                    r +
                                    ".js"
                                )
                              ];
                            case 1:
                              return [2, e.sent().data];
                          }
                        });
                      });
                    })(h, o)
                  ])
                : [3, 4];
            case 2:
              for (i = e.sent(), a = 0, l = Object.keys(i); a < l.length; a++)
                (s = l[a]),
                  (t = i[s]),
                  (u = document
                    .getElementById("loc-string-measurer")
                    .getContext("2d")
                    .measureText(t).width),
                  (s in r && !(n[s] < u)) || ((r[s] = i[s]), (n[s] = u));
              e.label = 3;
            case 3:
              return c++, [3, 1];
            case 4:
              return m(r), [2];
          }
          var t;
        });
      });
    }
    function i() {
      var t,
        r,
        e = [];
      return (
        e.push(
          o("steamui", function(e) {
            t = e;
          })
        ),
        e.push(
          o("shared", function(e) {
            r = e;
          })
        ),
        Promise.all(e).then(function() {
          a.c.InitFromObjects(t, null, r, null);
        })
      );
    }
    function l(e) {
      function t(e, t, r) {
        return p.a
          .get("https://steamloopback.host/localization/" + e + "_" + t + ".js")
          .then(function(e) {
            r(e.data);
          });
      }
      var r,
        n,
        c,
        o,
        i = [];
      return (
        i.push(
          t("steamui", e, function(e) {
            r = e;
          })
        ),
        i.push(
          t("shared", e, function(e) {
            c = e;
          })
        ),
        "english" != e &&
          (i.push(
            t("steamui", "english", function(e) {
              n = e;
            })
          ),
          i.push(
            t("shared", "english", function(e) {
              o = e;
            })
          )),
        Promise.all(i).then(function() {
          a.c.InitFromObjects(r, n, c, o);
        })
      );
    }
  },
  CdLH: function(e, t, r) {
    "use strict";
    r.d(t, "e", function() {
      return n;
    }),
      r.d(t, "b", function() {
        return c;
      }),
      r.d(t, "c", function() {
        return o;
      }),
      r.d(t, "d", function() {
        return i;
      }),
      r.d(t, "f", function() {
        return a;
      }),
      r.d(t, "a", function() {
        return l;
      }),
      r.d(t, "g", function() {
        return s;
      });
    var n = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60
    };
    function c(e, t) {
      return (
        e.getFullYear() == t.getFullYear() &&
        e.getMonth() == t.getMonth() &&
        e.getDate() == t.getDate()
      );
    }
    function o(e, t) {
      return e.getFullYear() == t.getFullYear();
    }
    function i(e) {
      return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
    }
    function a(t) {
      return new Promise(function(e) {
        return setTimeout(e, t);
      });
    }
    function l() {
      return Math.floor(Date.now() / 1e3);
    }
    function s(e) {
      return Math.floor(e.getTime() / 1e3);
    }
  },
  TLQK: function(e, t, r) {
    "use strict";
    r.d(t, "d", function() {
      return h;
    }),
      r.d(t, "k", function() {
        return a;
      }),
      r.d(t, "i", function() {
        return m;
      }),
      r.d(t, "n", function() {
        return f;
      }),
      r.d(t, "h", function() {
        return p;
      }),
      r.d(t, "l", function() {
        return d;
      }),
      r.d(t, "j", function() {
        return E;
      }),
      r.d(t, "m", function() {
        return v;
      }),
      r.d(t, "e", function() {
        return k;
      }),
      r.d(t, "f", function() {
        return x;
      }),
      r.d(t, "g", function() {
        return M;
      }),
      r.d(t, "a", function() {
        return R;
      }),
      r.d(t, "b", function() {
        return A;
      }),
      r.d(t, "c", function() {
        return F;
      });
    var s = r("mrSG"),
      u = r("q1tI"),
      l = r("Gp1o"),
      i = (r("r64O"), r("CdLH")),
      n = r("mgoM"),
      c = r("lkRc"),
      o = (function() {
        function e() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        return (
          (e.prototype.InitFromObjects = function(e, t, r, n, c) {
            c || this.m_mapTokens.clear();
            var o = Object(s.a)(Object(s.a)({}, r || {}), e),
              i = Object(s.a)(Object(s.a)({}, n || {}), t || {});
            this.AddTokens(o, i);
          }),
          (e.prototype.InitDirect = function(e, t) {
            this.m_mapTokens.clear(),
              this.m_mapFallbackTokens.clear(),
              this.AddTokens(e, t);
          }),
          (e.prototype.AddTokens = function(t, r) {
            var n = this;
            Object.keys(t).forEach(function(e) {
              n.m_mapTokens.set(e, t[e]);
            }),
              r &&
                Object.keys(r).forEach(function(e) {
                  n.m_mapTokens.has(e) || n.m_mapTokens.set(e, r[e]),
                    n.m_mapFallbackTokens.set(e, r[e]);
                });
          }),
          (e.prototype.GetPreferredLocales = function() {
            return this.m_rgLocalesToUse
              ? this.m_rgLocalesToUse
              : navigator && navigator.languages
              ? navigator.languages
              : ["en-US"];
          }),
          (e.prototype.GetELanguageFallbackOrder = function() {
            var t = new Array();
            return (
              t.push(Object(n.f)(c.b.LANGUAGE)),
              (c.b.SUPPORTED_LANGUAGES || []).forEach(function(e) {
                e.value != c.b.LANGUAGE && t.push(Object(n.f)(e.value));
              }),
              t
            );
          }),
          (e.prototype.SetPreferredLocales = function(e) {
            this.m_rgLocalesToUse = e;
          }),
          (e.prototype.LocalizeString = function(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            var t = this.m_mapTokens.get(e.substring(1));
            return void 0 === t ? "" : t;
          }),
          (e.prototype.LocalizeStringFromFallback = function(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            var t = this.m_mapFallbackTokens.get(e.substring(1));
            return void 0 === t ? "" : t;
          }),
          e
        );
      })();
    function h(e) {
      for (var n = [], t = 1; t < arguments.length; t++)
        n[t - 1] = arguments[t];
      var r = F.LocalizeString(e);
      return r
        ? (0 < n.length &&
            (r = r.replace(/%(?:(\d+)\$)?s/g, function(e, t) {
              if (t <= n.length && 1 <= t) {
                var r = n[t - 1];
                return String(null == r ? "" : r);
              }
              return e;
            })),
          r)
        : e;
    }
    function a(e) {
      for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
      var n = F.LocalizeString(e);
      if (!n) return e;
      for (var c, o = [], i = /(.*?)%(\d+)\$s/g, a = 0; (c = i.exec(n)); ) {
        (a += c[0].length), o.push(c[1]);
        var l = parseInt(c[2]);
        1 <= l && l <= t.length && o.push(t[l - 1]);
      }
      return (
        o.push(n.substr(a)),
        u.createElement.apply(u, Object(s.g)([u.Fragment, null], o))
      );
    }
    function m(e, t) {
      for (var r = [], n = 2; n < arguments.length; n++)
        r[n - 2] = arguments[n];
      return h.apply(
        void 0,
        1 === t || "1" === t
          ? Object(s.g)([e, t], r)
          : Object(s.g)([e + "_Plural", t], r)
      );
    }
    function f(e, t) {
      void 0 === t && (t = !1);
      var r = t ? "#TimeInterval_" : "#TimeSince_";
      return e >= 2 * i.e.PerYear
        ? h(r + "XYears", Math.floor(e / i.e.PerYear))
        : e >= i.e.PerYear
        ? (e -= i.e.PerYear) >= 2 * i.e.PerMonth
          ? h(r + "1YearXMonths", Math.floor(e / i.e.PerMonth))
          : h(r + "1Year")
        : e >= 2 * i.e.PerMonth
        ? h(r + "XMonths", Math.floor(e / i.e.PerMonth))
        : e >= 2 * i.e.PerWeek
        ? h(r + "XWeeks", Math.floor(e / i.e.PerWeek))
        : e >= i.e.PerWeek
        ? h(r + "1Week", Math.floor(e / i.e.PerWeek))
        : e >= 2 * i.e.PerDay
        ? h(r + "XDays", Math.floor(e / i.e.PerDay))
        : e >= i.e.PerDay
        ? (e -= i.e.PerDay) >= 2 * i.e.PerHour
          ? h(r + "1DayXHours", Math.floor(e / i.e.PerHour))
          : h(r + "1Day")
        : e >= 2 * i.e.PerHour
        ? h(r + "XHours", Math.floor(e / i.e.PerHour))
        : e >= i.e.PerHour
        ? (e -= i.e.PerHour) >= 2 * i.e.PerMinute
          ? h(r + "1HourXMinutes", Math.floor(e / i.e.PerMinute))
          : h(r + "1Hour")
        : e >= 2 * i.e.PerMinute
        ? h(r + "XMinutes", Math.floor(e / i.e.PerMinute))
        : e >= i.e.PerMinute
        ? h(r + "1Minute")
        : h(r + "LessThanAMinute");
    }
    function p(e, t) {
      var r = {
        weekday: "short",
        month: "long",
        day: "numeric",
        year: t ? void 0 : "numeric"
      };
      return new Date(1e3 * e).toLocaleDateString(F.GetPreferredLocales(), r);
    }
    function d(e) {
      var t = new Date(1e3 * e),
        r = t.setHours(0, 0, 0, 0),
        n = _.get(r);
      if (n) return n;
      return (
        (n = t.toLocaleDateString(F.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })),
        _.set(r, n),
        n
      );
    }
    function E(e) {
      return new Date(1e3 * e).toLocaleTimeString(F.GetPreferredLocales(), {
        hour: "numeric",
        minute: "numeric"
      });
    }
    var _ = new Map(),
      g = new Map();
    function v(e, t) {
      var r = new Date(),
        n = new Date(1e3 * e);
      if (n.getFullYear() != r.getFullYear()) return d(e);
      l.b(new Date().setHours(24, 0, 0, 0) - r.getTime());
      var c = new Date();
      if ((c.setHours(0, 0, 0, 0), c <= n)) {
        if ((c.setDate(c.getDate() + 1), n < c)) return h("#Time_Today");
        if ((c.setDate(c.getDate() + 1), n < c)) return h("#Time_Tomorrow");
      } else if ((c.setDate(c.getDate() - 1), c <= n))
        return h("#Time_Yesterday");
      var o = { month: t ? "long" : "short", day: "numeric" },
        i = n.setHours(0, 0, 0, 0) + o.month,
        a = g.get(i);
      return (
        a ||
        ((a = n.toLocaleDateString(F.GetPreferredLocales(), o)), g.set(i, a), a)
      );
    }
    function k(e) {
      var t = new Date(1e3 * e),
        r = new Date();
      if (r < t) return l.b(t.getTime() - r.getTime()), y(t);
      l.b(new Date().setHours(24, 0, 0, 0) - r.getTime());
      var n = new Date();
      if ((n.setHours(0, 0, 0, 0), n <= t)) return h("#Time_Today");
      if ((n.setDate(n.getDate() - 1), n <= t)) return h("#Time_Yesterday");
      if ((n.setDate(n.getDate() - 5), n <= t)) return h("#TimeSince_ThisWeek");
      var c = new Date(n);
      if (
        (n.setDate(n.getDate() - 21),
        n <= t ||
          (t.getMonth() == r.getMonth() && t.getFullYear() == r.getFullYear()))
      ) {
        var o =
          Math.floor((c.valueOf() - t.valueOf()) / (1e3 * i.e.PerWeek)) + 1;
        return 1 == o ? h("#TimeSince_1Week") : h("#TimeSince_XWeeks", o);
      }
      return t.getFullYear() == r.getFullYear() ? S(t) : y(t);
    }
    function x(e) {
      var t = new Date(1e3 * e),
        r = new Date();
      l.b(new Date().setHours(24, 0, 0, 0) - r.getTime());
      var n = new Date();
      return (
        n.getDate() < 15 && n.setMonth(n.getMonth() - 1),
        (n = Object(i.d)(n)) <= t
          ? h("#Time_Recent")
          : t.getFullYear() == r.getFullYear()
          ? S(t)
          : r.getMonth() < 6 && t.getFullYear() == r.getFullYear() - 1
          ? y(t)
          : M(t)
      );
    }
    new Map();
    var w = new Map(),
      b = new Map(),
      L = new Map();
    function S(e) {
      var t = w.get(e.getMonth());
      return (
        t ||
        ((t = e.toLocaleDateString(F.GetPreferredLocales(), { month: "long" })),
        w.set(e.getMonth(), t),
        t)
      );
    }
    function M(e) {
      var t = b.get(e.getFullYear());
      return (
        t ||
        ((t = e.toLocaleDateString(F.GetPreferredLocales(), {
          year: "numeric"
        })),
        b.set(e.getFullYear(), t),
        t)
      );
    }
    function y(e) {
      var t = e.getMonth() + 12 * e.getFullYear(),
        r = L.get(t);
      return (
        r ||
        ((r = e.toLocaleDateString(F.GetPreferredLocales(), {
          month: "long",
          year: "numeric"
        })),
        L.set(t, r),
        r)
      );
    }
    var N = 44032,
      C = 55203,
      I = 588,
      G = 28,
      B = 12592,
      T = [
        12593,
        12594,
        12596,
        12599,
        12600,
        12601,
        12609,
        12610,
        12611,
        12613,
        12614,
        12615,
        12616,
        12617,
        12618,
        12619,
        12620,
        12621,
        12622
      ],
      V = [
        0,
        0,
        0,
        1,
        0,
        4,
        4,
        0,
        0,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        0,
        0,
        17,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      z = [
        -1,
        0,
        1,
        9,
        2,
        12,
        18,
        3,
        5,
        0,
        6,
        7,
        9,
        16,
        17,
        18,
        6,
        7,
        9,
        9,
        10,
        11,
        12,
        14,
        15,
        16,
        17,
        18
      ],
      D = [
        -1,
        0,
        1,
        -1,
        2,
        -1,
        -1,
        3,
        4,
        5,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6,
        7,
        8,
        -1,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        -1
      ];
    function R(e, t) {
      if (0 === e.length) return -1;
      var r = t.charCodeAt(t.length - 1),
        n = (function(e) {
          return e < T[0] || e > T[T.length - 1] ? -1 : D[e - B];
        })(r);
      if (!((N <= r && r <= C) || 0 <= n)) return -1;
      var c = t.slice(0, t.length - 1),
        o = 0 < c.length ? e.indexOf(c) : 0;
      if (-1 === o) return -1;
      for (
        var i = o, a = e.slice(o, e.length), l = (r - N) % G, s = N + n * I;
        0 <= o;

      ) {
        if (a.length < c.length + 1) return -1;
        var u = a.charCodeAt(c.length),
          h = !1;
        if (0 <= n) h = s <= u && u < s + I;
        else if (r <= u)
          switch (l) {
            case 0:
              h = u - r < G;
              break;
            case 1:
              h = u - r == 2;
              break;
            case 4:
              h = u - r < 3;
              break;
            case 8:
              h = u - r < 8;
              break;
            case 17:
              h = u - r < 2;
          }
        else if (a.length >= c.length + 2)
          if (r - u < G)
            if ((u - N) % G === V[l]) {
              var m = z[l];
              if (0 <= m) {
                var f = N + m * I,
                  p = a.charCodeAt(c.length + 1);
                h = f <= p && p < f + I;
              }
            }
        if (h) return i;
        if (0 === (a = a.slice(1, a.length)).length) return -1;
        if (-1 === (o = 0 < c.length ? a.indexOf(c) : 0)) return -1;
        (i += o + 1), (a = a.slice(o, a.length));
      }
      return -1;
    }
    var A = {
        english: "en",
        german: "de",
        french: "fr",
        italian: "it",
        korean: "ko",
        latam: "es-419",
        spanish: "es",
        schinese: "zh-cn",
        tchinese: "zh-tw",
        russian: "ru",
        thai: "th",
        japanese: "ja",
        brazilian: "pt-br",
        portuguese: "pt",
        polish: "pl",
        danish: "da",
        dutch: "nl",
        finnish: "fi",
        norwegian: "no",
        swedish: "sv",
        hungarian: "hu",
        czech: "cs",
        romanian: "ro",
        turkish: "tr",
        arabic: "ar",
        bulgarian: "bg",
        greek: "el",
        ukrainian: "uk",
        vietnamese: "vn"
      },
      F = new o();
    window.LocalizationManager = F;
  },
  YyVH: function(e, t, r) {
    "use strict";
    function n(e, t) {
      return (
        (e = Math.ceil(e)),
        (t = Math.floor(t)),
        Math.floor(Math.random() * (t - e + 1)) + e
      );
    }
    function c(e, t, r) {
      return Math.max(t, Math.min(r, e));
    }
    function o(e, t, r, n, c) {
      return n + ((c - n) * (e - t)) / (r - t);
    }
    r.d(t, "b", function() {
      return n;
    }),
      r.d(t, "a", function() {
        return c;
      }),
      r.d(t, "c", function() {
        return o;
      });
  },
  Z7Ow: function(e, t, r) {
    e.exports = {
      EmoticonBow: "shared_svg_library_EmoticonBow_2Llzt",
      EmoticonBow_st0: "shared_svg_library_EmoticonBow_st0_Fw2WG",
      EmoticonBow_st1: "shared_svg_library_EmoticonBow_st1_luj0t"
    };
  },
  exH9: function(e, t, r) {
    "use strict";
    function n(r) {
      return Object.keys(r).reduce(function(e, t) {
        return r[t] ? (e ? e + " " + t : t) : e;
      }, "");
    }
    t.a = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.reduce(function(e, t) {
        return t
          ? "string" == typeof t
            ? e
              ? e + " " + t
              : t
            : "object" == typeof t
            ? e
              ? e + " " + n(t)
              : n(t)
            : e
          : e;
      }, "");
    };
  },
  lkRc: function(e, t, r) {
    "use strict";
    r("mrSG");
    var n = r("YyVH");
    function i() {
      return !!window.document;
    }
    r.d(t, "b", function() {
      return o;
    }),
      r.d(t, "f", function() {
        return a;
      }),
      r.d(t, "a", function() {
        return l;
      }),
      r.d(t, "e", function() {
        return h;
      }),
      r.d(t, "c", function() {
        return m;
      }),
      r.d(t, "d", function() {
        return f;
      });
    var c,
      o = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        CDN_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        STORE_CDN_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        PARTNER_BASE_URL: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_TENFOOT: !1,
        PLATFORM: "",
        SNR: "",
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function() {
            if (!i()) return (c = c || u());
            var e = (function(e) {
              if (!i() || !window.document.cookie) return null;
              var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
              return t && t[2] ? decodeURIComponent(t[2]) : null;
            })("sessionid");
            e = e || u();
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        OFFLINE_MODE: !1
      },
      a = {
        logged_in: !1,
        steamid: "",
        accountid: 0,
        account_name: "",
        token: void 0,
        token_use_id: void 0,
        webapi_token: "",
        authwgtoken: "",
        is_support: !1,
        is_limited: !1,
        short_url: "",
        country_code: ""
      },
      l = {
        CLANSTEAMID: "",
        CLANACCOUNTID: 0,
        ANNOUNCEMENT_GID: "",
        IMG_URL: "",
        APPID: 0,
        VANITY_ID: "",
        IS_CREATOR_HOME: !1,
        HEADER_IMAGE: "",
        APP_NAME: "",
        HAS_ADULT_CONTENT: !1,
        HAS_ADULT_CONTENT_SEX: !1,
        HAS_ADULT_CONTENT_VIOLENCE: !1
      },
      s = "webui_config";
    function u() {
      var e = (function() {
        for (var e = "", t = 0; t < 24; t++)
          e += Object(n.b)(0, 35).toString(36);
        return e;
      })();
      return (
        (function(e, t, r, n) {
          if (i()) {
            n = n || "/";
            var c = "";
            if (void 0 !== r && r) {
              var o = new Date();
              o.setTime(o.getTime() + 864e5 * r),
                (c = "; expires=" + o.toUTCString());
            }
            document.cookie =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(t) +
              c +
              ";path=" +
              n;
          }
        })("sessionid", e, 0),
        e
      );
    }
    function h(e, t) {
      var r;
      if (
        (void 0 === t && (t = s),
        (r = "string" == typeof t ? document.getElementById(t) : t))
      )
        try {
          return r.hasAttribute("data-" + e)
            ? JSON.parse(r.getAttribute("data-" + e))
            : null;
        } catch (e) {
          console.error("Failed to parse config", e);
        }
      else console.error("Missing config element #", t);
    }
    function m() {
      var e = window.location.href;
      return e.startsWith(o.STORE_BASE_URL)
        ? o.STORE_BASE_URL
        : e.startsWith(o.COMMUNITY_BASE_URL)
        ? o.COMMUNITY_BASE_URL
        : e.startsWith(o.PARTNER_BASE_URL)
        ? o.PARTNER_BASE_URL
        : e.startsWith(o.HELP_BASE_URL)
        ? o.HELP_BASE_URL
        : e.startsWith(o.STEAMTV_BASE_URL)
        ? o.STEAMTV_BASE_URL
        : "";
    }
    function f() {
      var e = window.location.href;
      return e.startsWith(o.STORE_BASE_URL)
        ? "store"
        : e.startsWith(o.COMMUNITY_BASE_URL)
        ? "community"
        : e.startsWith(o.PARTNER_BASE_URL)
        ? "partnerweb"
        : e.startsWith(o.HELP_BASE_URL)
        ? "help"
        : e.startsWith(o.STEAMTV_BASE_URL)
        ? "steamtv"
        : "";
    }
  },
  mgoM: function(e, t, r) {
    "use strict";
    function n(e) {
      return 3 == e || 6 == e;
    }
    function c(e) {
      return 5 == e || 6 == e;
    }
    r.d(t, "b", function() {
      return n;
    }),
      r.d(t, "a", function() {
        return c;
      }),
      r.d(t, "q", function() {
        return a;
      }),
      r.d(t, "r", function() {
        return l;
      }),
      r.d(t, "i", function() {
        return s;
      }),
      r.d(t, "j", function() {
        return u;
      }),
      r.d(t, "p", function() {
        return h;
      }),
      r.d(t, "k", function() {
        return m;
      }),
      r.d(t, "l", function() {
        return f;
      }),
      r.d(t, "m", function() {
        return p;
      }),
      r.d(t, "o", function() {
        return d;
      }),
      r.d(t, "n", function() {
        return E;
      }),
      r.d(t, "g", function() {
        return _;
      }),
      r.d(t, "h", function() {
        return g;
      }),
      r.d(t, "d", function() {
        return v;
      }),
      r.d(t, "f", function() {
        return k;
      }),
      r.d(t, "c", function() {
        return o;
      }),
      r.d(t, "e", function() {
        return x;
      });
    var o,
      i,
      a = 1,
      l = 4,
      s = 750,
      u = 799,
      h = 7,
      m = 753,
      f = 250820,
      p = 330050,
      d = 358510,
      E = 366490,
      _ = "18446744073709551615",
      g = 0;
    function v(e, t) {
      switch ((void 0 === t && (t = ""), e)) {
        case 0:
          return "english";
        case 1:
          return "german";
        case 2:
          return "french";
        case 3:
          return "italian";
        case 4:
          return "korean";
        case 5:
          return "spanish";
        case 6:
          return "schinese";
        case 7:
          return "tchinese";
        case 8:
          return "russian";
        case 9:
          return "thai";
        case 10:
          return "japanese";
        case 11:
          return "portuguese";
        case 12:
          return "polish";
        case 13:
          return "danish";
        case 14:
          return "dutch";
        case 15:
          return "finnish";
        case 16:
          return "norwegian";
        case 17:
          return "swedish";
        case 18:
          return "hungarian";
        case 19:
          return "czech";
        case 20:
          return "romanian";
        case 21:
          return "turkish";
        case 25:
          return "arabic";
        case 22:
          return "brazilian";
        case 23:
          return "bulgarian";
        case 24:
          return "greek";
        case 26:
          return "ukrainian";
        case 27:
          return "latam";
        case 28:
          return "vietnamese";
        default:
          return t;
      }
    }
    function k(e, t) {
      switch ((void 0 === t && (t = 0), e)) {
        case "english":
          return 0;
        case "german":
          return 1;
        case "french":
          return 2;
        case "italian":
          return 3;
        case "korean":
        case "koreana":
          return 4;
        case "spanish":
          return 5;
        case "schinese":
          return 6;
        case "tchinese":
          return 7;
        case "russian":
          return 8;
        case "thai":
          return 9;
        case "japanese":
          return 10;
        case "portuguese":
          return 11;
        case "polish":
          return 12;
        case "danish":
          return 13;
        case "dutch":
          return 14;
        case "finnish":
          return 15;
        case "norwegian":
          return 16;
        case "swedish":
          return 17;
        case "hungarian":
          return 18;
        case "czech":
          return 19;
        case "romanian":
          return 20;
        case "turkish":
          return 21;
        case "arabic":
          return 25;
        case "brazilian":
          return 22;
        case "bulgarian":
          return 23;
        case "greek":
          return 24;
        case "ukrainian":
          return 26;
        case "latam":
          return 27;
        case "vietnamese":
          return 28;
        default:
          return t;
      }
    }
    ((i = o = o || {})[(i.k_EOtherEvent = 1)] = "k_EOtherEvent"),
      (i[(i.k_EGameEvent = 2)] = "k_EGameEvent"),
      (i[(i.k_EPartyEvent = 3)] = "k_EPartyEvent"),
      (i[(i.k_EMeetingEvent = 4)] = "k_EMeetingEvent"),
      (i[(i.k_ESpecialCauseEvent = 5)] = "k_ESpecialCauseEvent"),
      (i[(i.k_EMusicAndArtsEvent = 6)] = "k_EMusicAndArtsEvent"),
      (i[(i.k_ESportsEvent = 7)] = "k_ESportsEvent"),
      (i[(i.k_ETripEvent = 8)] = "k_ETripEvent"),
      (i[(i.k_EChatEvent = 9)] = "k_EChatEvent"),
      (i[(i.k_EGameReleaseEvent = 10)] = "k_EGameReleaseEvent"),
      (i[(i.k_EBroadcastEvent = 11)] = "k_EBroadcastEvent"),
      (i[(i.k_ESmallUpdateEvent = 12)] = "k_ESmallUpdateEvent"),
      (i[(i.k_ERegularUpdateEvent = 13)] = "k_ERegularUpdateEvent"),
      (i[(i.k_EMajorUpdateEvent = 14)] = "k_EMajorUpdateEvent"),
      (i[(i.k_EDLCReleaseEvent = 15)] = "k_EDLCReleaseEvent"),
      (i[(i.k_EFutureReleaseEvent = 16)] = "k_EFutureReleaseEvent"),
      (i[(i.k_EESportTournamentStreamEvent = 17)] =
        "k_EESportTournamentStreamEvent"),
      (i[(i.k_EDevStreamEvent = 18)] = "k_EDevStreamEvent"),
      (i[(i.k_EFamousStreamEvent = 19)] = "k_EFamousStreamEvent"),
      (i[(i.k_EGameSalesEvent = 20)] = "k_EGameSalesEvent"),
      (i[(i.k_EGameItemSalesEvent = 21)] = "k_EGameItemSalesEvent"),
      (i[(i.k_EInGameBonusXPEvent = 22)] = "k_EInGameBonusXPEvent"),
      (i[(i.k_EInGameLootEvent = 23)] = "k_EInGameLootEvent"),
      (i[(i.k_EInGamePerksEvent = 24)] = "k_EInGamePerksEvent"),
      (i[(i.k_EInGameChallengeEvent = 25)] = "k_EInGameChallengeEvent"),
      (i[(i.k_EInGameContestEvent = 26)] = "k_EInGameContestEvent"),
      (i[(i.k_EIRLEvent = 27)] = "k_EIRLEvent"),
      (i[(i.k_ENewsEvent = 28)] = "k_ENewsEvent"),
      (i[(i.k_EBetaReleaseEvent = 29)] = "k_EBetaReleaseEvent"),
      (i[(i.k_EFreeTrial = 31)] = "k_EFreeTrial"),
      (i[(i.k_ESeasonRelease = 32)] = "k_ESeasonRelease"),
      (i[(i.k_ECrosspostEvent = 34)] = "k_ECrosspostEvent"),
      (i[(i.k_EInGameEventGeneral = 35)] = "k_EInGameEventGeneral");
    var x, w;
    o.k_EOtherEvent,
      o.k_EGameEvent,
      o.k_EPartyEvent,
      o.k_EMeetingEvent,
      o.k_ESpecialCauseEvent,
      o.k_EMusicAndArtsEvent,
      o.k_ESportsEvent,
      o.k_ETripEvent,
      o.k_EChatEvent,
      o.k_EGameReleaseEvent,
      o.k_EBroadcastEvent,
      o.k_ESmallUpdateEvent,
      o.k_ERegularUpdateEvent,
      o.k_EMajorUpdateEvent,
      o.k_EDLCReleaseEvent,
      o.k_EFutureReleaseEvent,
      o.k_EESportTournamentStreamEvent,
      o.k_EDevStreamEvent,
      o.k_EFamousStreamEvent,
      o.k_EGameSalesEvent,
      o.k_EGameItemSalesEvent,
      o.k_EInGameBonusXPEvent,
      o.k_EInGameLootEvent,
      o.k_EInGamePerksEvent,
      o.k_EInGameChallengeEvent,
      o.k_EInGameContestEvent,
      o.k_EIRLEvent,
      o.k_ENewsEvent,
      o.k_EBetaReleaseEvent,
      o.k_EFreeTrial,
      o.k_ESeasonRelease,
      o.k_ECrosspostEvent,
      o.k_EInGameEventGeneral;
    ((w = x = x || {})[(w.k_ELaunchSource_None = 0)] = "k_ELaunchSource_None"),
      (w[(w.k_ELaunchSource_2ftLibraryDetails = 100)] =
        "k_ELaunchSource_2ftLibraryDetails"),
      (w[(w.k_ELaunchSource_2ftLibraryListView = 101)] =
        "k_ELaunchSource_2ftLibraryListView"),
      (w[(w.k_ELaunchSource_2ftLibraryGrid = 103)] =
        "k_ELaunchSource_2ftLibraryGrid"),
      (w[(w.k_ELaunchSource_InstallSubComplete = 104)] =
        "k_ELaunchSource_InstallSubComplete"),
      (w[(w.k_ELaunchSource_DownloadsPage = 105)] =
        "k_ELaunchSource_DownloadsPage"),
      (w[(w.k_ELaunchSource_RemoteClientStartStreaming = 106)] =
        "k_ELaunchSource_RemoteClientStartStreaming"),
      (w[(w.k_ELaunchSource_2ftMiniModeList = 107)] =
        "k_ELaunchSource_2ftMiniModeList"),
      (w[(w.k_ELaunchSource_10ft = 200)] = "k_ELaunchSource_10ft"),
      (w[(w.k_ELaunchSource_DashAppLaunchCmdLine = 300)] =
        "k_ELaunchSource_DashAppLaunchCmdLine"),
      (w[(w.k_ELaunchSource_DashGameIdLaunchCmdLine = 301)] =
        "k_ELaunchSource_DashGameIdLaunchCmdLine"),
      (w[(w.k_ELaunchSource_RunByGameDir = 302)] =
        "k_ELaunchSource_RunByGameDir"),
      (w[(w.k_ELaunchSource_SubCmdRunDashGame = 303)] =
        "k_ELaunchSource_SubCmdRunDashGame"),
      (w[(w.k_ELaunchSource_SteamURL_Launch = 400)] =
        "k_ELaunchSource_SteamURL_Launch"),
      (w[(w.k_ELaunchSource_SteamURL_Run = 401)] =
        "k_ELaunchSource_SteamURL_Run"),
      (w[(w.k_ELaunchSource_SteamURL_JoinLobby = 402)] =
        "k_ELaunchSource_SteamURL_JoinLobby"),
      (w[(w.k_ELaunchSource_SteamURL_RunGame = 403)] =
        "k_ELaunchSource_SteamURL_RunGame"),
      (w[(w.k_ELaunchSource_SteamURL_RunGameIdOrJumplist = 404)] =
        "k_ELaunchSource_SteamURL_RunGameIdOrJumplist"),
      (w[(w.k_ELaunchSource_SteamURL_RunSafe = 405)] =
        "k_ELaunchSource_SteamURL_RunSafe"),
      (w[(w.k_ELaunchSource_TrayIcon = 500)] = "k_ELaunchSource_TrayIcon"),
      (w[(w.k_ELaunchSource_LibraryLeftColumnContextMenu = 600)] =
        "k_ELaunchSource_LibraryLeftColumnContextMenu"),
      (w[(w.k_ELaunchSource_LibraryLeftColumnDoubleClick = 601)] =
        "k_ELaunchSource_LibraryLeftColumnDoubleClick"),
      (w[(w.k_ELaunchSource_Dota2Launcher = 700)] =
        "k_ELaunchSource_Dota2Launcher"),
      (w[(w.k_ELaunchSource_IRunGameEngine = 800)] =
        "k_ELaunchSource_IRunGameEngine"),
      (w[(w.k_ELaunchSource_DRMFailureResponse = 801)] =
        "k_ELaunchSource_DRMFailureResponse"),
      (w[(w.k_ELaunchSource_DRMDataRequest = 802)] =
        "k_ELaunchSource_DRMDataRequest"),
      (w[(w.k_ELaunchSource_CloudFilePanel = 803)] =
        "k_ELaunchSource_CloudFilePanel"),
      (w[(w.k_ELaunchSource_DiscoveredAlreadyRunning = 804)] =
        "k_ELaunchSource_DiscoveredAlreadyRunning"),
      (w[(w.k_ELaunchSource_GameActionJoinParty = 900)] =
        "k_ELaunchSource_GameActionJoinParty"),
      (w[(w.k_ELaunchSource_AppPortraitContextMenu = 1e3)] =
        "k_ELaunchSource_AppPortraitContextMenu");
  },
  miow: function(e, t, r) {
    e.exports = {
      Container: "index_Container_2mu1w",
      PreloadThrobber: "index_PreloadThrobber_2dqG9",
      ThreeDots: "index_ThreeDots_1yjvY",
      Dot: "index_Dot_Wd5cq",
      cycleAnim: "index_cycleAnim_Vo179",
      Dot1: "index_Dot1_2FQ_i",
      Dot2: "index_Dot2_3Pd3-",
      Dot3: "index_Dot3_3uYAQ"
    };
  },
  r64O: function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return n;
    });
    var c = r("mrSG");
    function n(e, t) {
      for (var r = [], n = 2; n < arguments.length; n++)
        r[n - 2] = arguments[n];
      console.assert
        ? 0 == r.length
          ? console.assert(!!e, t)
          : console.assert.apply(console, Object(c.g)([!!e, t], r))
        : e || console.warn.apply(console, Object(c.g)([t], r));
    }
  },
  tVvj: function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r("mrSG"),
      c = r("q1tI"),
      o = r("i8i4"),
      i = r("exH9"),
      a = r("BNtT"),
      l = r("miow"),
      s = r.n(l),
      u = r("0OaU"),
      h = c.lazy(function() {
        return Promise.all([r.e(2), r.e(0), r.e(4)]).then(r.bind(null, "KKYZ"));
      }),
      m = document.getElementById("root");
    Object(a.c)();
    var f,
      p = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(t, e),
          (t.prototype.render = function() {
            var e = c.createElement(
              "div",
              { className: Object(i.a)(s.a.Container, s.a.PreloadThrobber) },
              c.createElement(u.a, { size: "xlarge", static: !0 }),
              c.createElement(
                "div",
                { className: s.a.ThreeDots },
                c.createElement("div", {
                  className: Object(i.a)(s.a.Dot, s.a.Dot1)
                }),
                c.createElement("div", {
                  className: Object(i.a)(s.a.Dot, s.a.Dot2)
                }),
                c.createElement("div", {
                  className: Object(i.a)(s.a.Dot, s.a.Dot3)
                })
              )
            );
            return c.createElement(
              c.Suspense,
              { fallback: e },
              c.createElement(h, null)
            );
          }),
          t
        );
      })(c.Component);
    (f = p), o.render(c.createElement(f, null), m);
  }
});
//# sourceMappingURL=library.js.map

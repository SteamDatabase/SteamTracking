/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8691],
  {
    89868: function (t) {
      /*!
       * Cropper.js v1.6.1
       * https://fengyuanchen.github.io/cropperjs
       *
       * Copyright 2015-present Chen Fengyuan
       * Released under the MIT license
       *
       * Date: 2023-09-17T03:44:19.860Z
       */
      t.exports = (function () {
        "use strict";
        function t(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e &&
              (a = a.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              i.push.apply(i, a);
          }
          return i;
        }
        function e(e) {
          for (var i = 1; i < arguments.length; i++) {
            var a = null != arguments[i] ? arguments[i] : {};
            i % 2
              ? t(Object(a), !0).forEach(function (t) {
                  r(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(a),
                  )
                : t(Object(a)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(a, t),
                    );
                  });
          }
          return e;
        }
        function i(t) {
          return (
            (i =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            i(t)
          );
        }
        function a(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(t, e) {
          for (var i = 0; i < e.length; i++) {
            var a = e[i];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(t, m(a.key), a);
          }
        }
        function o(t, e, i) {
          return (
            e && n(t.prototype, e),
            i && n(t, i),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        }
        function r(t, e, i) {
          return (
            (e = m(e)) in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        function h(t) {
          return s(t) || c(t) || l(t) || p();
        }
        function s(t) {
          if (Array.isArray(t)) return d(t);
        }
        function c(t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        }
        function l(t, e) {
          if (t) {
            if ("string" == typeof t) return d(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === i && t.constructor && (i = t.constructor.name),
              "Map" === i || "Set" === i
                ? Array.from(t)
                : "Arguments" === i ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  ? d(t, e)
                  : void 0
            );
          }
        }
        function d(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
          return a;
        }
        function p() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        function u(t, e) {
          if ("object" != typeof t || null === t) return t;
          var i = t[Symbol.toPrimitive];
          if (void 0 !== i) {
            var a = i.call(t, e || "default");
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        }
        function m(t) {
          var e = u(t, "string");
          return "symbol" == typeof e ? e : String(e);
        }
        var g = "undefined" != typeof window && void 0 !== window.document,
          f = g ? window : {},
          v =
            !(!g || !f.document.documentElement) &&
            "ontouchstart" in f.document.documentElement,
          w = !!g && "PointerEvent" in f,
          b = "cropper",
          y = "all",
          x = "crop",
          M = "move",
          C = "zoom",
          D = "e",
          k = "w",
          B = "s",
          O = "n",
          T = "ne",
          E = "nw",
          W = "se",
          H = "sw",
          N = "".concat(b, "-crop"),
          L = "".concat(b, "-disabled"),
          z = "".concat(b, "-hidden"),
          Y = "".concat(b, "-hide"),
          X = "".concat(b, "-invisible"),
          R = "".concat(b, "-modal"),
          S = "".concat(b, "-move"),
          j = "".concat(b, "Action"),
          A = "".concat(b, "Preview"),
          P = "crop",
          I = "move",
          U = "none",
          q = "crop",
          $ = "cropend",
          Q = "cropmove",
          K = "cropstart",
          Z = "dblclick",
          G = v ? "touchstart" : "mousedown",
          V = v ? "touchmove" : "mousemove",
          F = v ? "touchend touchcancel" : "mouseup",
          J = w ? "pointerdown" : G,
          _ = w ? "pointermove" : V,
          tt = w ? "pointerup pointercancel" : F,
          et = "ready",
          it = "resize",
          at = "wheel",
          nt = "zoom",
          ot = "image/jpeg",
          rt = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
          ht = /^data:/,
          st = /^data:image\/jpeg;base64,/,
          ct = /^img|canvas$/i,
          lt = 200,
          dt = 100,
          pt = {
            viewMode: 0,
            dragMode: P,
            initialAspectRatio: NaN,
            aspectRatio: NaN,
            data: null,
            preview: "",
            responsive: !0,
            restore: !0,
            checkCrossOrigin: !0,
            checkOrientation: !0,
            modal: !0,
            guides: !0,
            center: !0,
            highlight: !0,
            background: !0,
            autoCrop: !0,
            autoCropArea: 0.8,
            movable: !0,
            rotatable: !0,
            scalable: !0,
            zoomable: !0,
            zoomOnTouch: !0,
            zoomOnWheel: !0,
            wheelZoomRatio: 0.1,
            cropBoxMovable: !0,
            cropBoxResizable: !0,
            toggleDragModeOnDblclick: !0,
            minCanvasWidth: 0,
            minCanvasHeight: 0,
            minCropBoxWidth: 0,
            minCropBoxHeight: 0,
            minContainerWidth: lt,
            minContainerHeight: dt,
            ready: null,
            cropstart: null,
            cropmove: null,
            cropend: null,
            crop: null,
            zoom: null,
          },
          ut =
            '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
          mt = Number.isNaN || f.isNaN;
        function gt(t) {
          return "number" == typeof t && !mt(t);
        }
        var ft = function (t) {
          return t > 0 && t < 1 / 0;
        };
        function vt(t) {
          return void 0 === t;
        }
        function wt(t) {
          return "object" === i(t) && null !== t;
        }
        var bt = Object.prototype.hasOwnProperty;
        function yt(t) {
          if (!wt(t)) return !1;
          try {
            var e = t.constructor,
              i = e.prototype;
            return e && i && bt.call(i, "isPrototypeOf");
          } catch (t) {
            return !1;
          }
        }
        function xt(t) {
          return "function" == typeof t;
        }
        var Mt = Array.prototype.slice;
        function Ct(t) {
          return Array.from ? Array.from(t) : Mt.call(t);
        }
        function Dt(t, e) {
          return (
            t &&
              xt(e) &&
              (Array.isArray(t) || gt(t.length)
                ? Ct(t).forEach(function (i, a) {
                    e.call(t, i, a, t);
                  })
                : wt(t) &&
                  Object.keys(t).forEach(function (i) {
                    e.call(t, t[i], i, t);
                  })),
            t
          );
        }
        var kt =
            Object.assign ||
            function (t) {
              for (
                var e = arguments.length,
                  i = new Array(e > 1 ? e - 1 : 0),
                  a = 1;
                a < e;
                a++
              )
                i[a - 1] = arguments[a];
              return (
                wt(t) &&
                  i.length > 0 &&
                  i.forEach(function (e) {
                    wt(e) &&
                      Object.keys(e).forEach(function (i) {
                        t[i] = e[i];
                      });
                  }),
                t
              );
            },
          Bt = /\.\d*(?:0|9){12}\d*$/;
        function Ot(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e11;
          return Bt.test(t) ? Math.round(t * e) / e : t;
        }
        var Tt = /^width|height|left|top|marginLeft|marginTop$/;
        function Et(t, e) {
          var i = t.style;
          Dt(e, function (t, e) {
            Tt.test(e) && gt(t) && (t = "".concat(t, "px")), (i[e] = t);
          });
        }
        function Wt(t, e) {
          return t.classList
            ? t.classList.contains(e)
            : t.className.indexOf(e) > -1;
        }
        function Ht(t, e) {
          if (e)
            if (gt(t.length))
              Dt(t, function (t) {
                Ht(t, e);
              });
            else if (t.classList) t.classList.add(e);
            else {
              var i = t.className.trim();
              i
                ? i.indexOf(e) < 0 &&
                  (t.className = "".concat(i, " ").concat(e))
                : (t.className = e);
            }
        }
        function Nt(t, e) {
          e &&
            (gt(t.length)
              ? Dt(t, function (t) {
                  Nt(t, e);
                })
              : t.classList
                ? t.classList.remove(e)
                : t.className.indexOf(e) >= 0 &&
                  (t.className = t.className.replace(e, "")));
        }
        function Lt(t, e, i) {
          e &&
            (gt(t.length)
              ? Dt(t, function (t) {
                  Lt(t, e, i);
                })
              : i
                ? Ht(t, e)
                : Nt(t, e));
        }
        var zt = /([a-z\d])([A-Z])/g;
        function Yt(t) {
          return t.replace(zt, "$1-$2").toLowerCase();
        }
        function Xt(t, e) {
          return wt(t[e])
            ? t[e]
            : t.dataset
              ? t.dataset[e]
              : t.getAttribute("data-".concat(Yt(e)));
        }
        function Rt(t, e, i) {
          wt(i)
            ? (t[e] = i)
            : t.dataset
              ? (t.dataset[e] = i)
              : t.setAttribute("data-".concat(Yt(e)), i);
        }
        function St(t, e) {
          if (wt(t[e]))
            try {
              delete t[e];
            } catch (i) {
              t[e] = void 0;
            }
          else if (t.dataset)
            try {
              delete t.dataset[e];
            } catch (i) {
              t.dataset[e] = void 0;
            }
          else t.removeAttribute("data-".concat(Yt(e)));
        }
        var jt = /\s\s*/,
          At = (function () {
            var t = !1;
            if (g) {
              var e = !1,
                i = function () {},
                a = Object.defineProperty({}, "once", {
                  get: function () {
                    return (t = !0), e;
                  },
                  set: function (t) {
                    e = t;
                  },
                });
              f.addEventListener("test", i, a),
                f.removeEventListener("test", i, a);
            }
            return t;
          })();
        function Pt(t, e, i) {
          var a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            n = i;
          e.trim()
            .split(jt)
            .forEach(function (e) {
              if (!At) {
                var o = t.listeners;
                o &&
                  o[e] &&
                  o[e][i] &&
                  ((n = o[e][i]),
                  delete o[e][i],
                  0 === Object.keys(o[e]).length && delete o[e],
                  0 === Object.keys(o).length && delete t.listeners);
              }
              t.removeEventListener(e, n, a);
            });
        }
        function It(t, e, i) {
          var a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            n = i;
          e.trim()
            .split(jt)
            .forEach(function (e) {
              if (a.once && !At) {
                var o = t.listeners,
                  r = void 0 === o ? {} : o;
                (n = function () {
                  delete r[e][i], t.removeEventListener(e, n, a);
                  for (
                    var o = arguments.length, h = new Array(o), s = 0;
                    s < o;
                    s++
                  )
                    h[s] = arguments[s];
                  i.apply(t, h);
                }),
                  r[e] || (r[e] = {}),
                  r[e][i] && t.removeEventListener(e, r[e][i], a),
                  (r[e][i] = n),
                  (t.listeners = r);
              }
              t.addEventListener(e, n, a);
            });
        }
        function Ut(t, e, i) {
          var a;
          return (
            xt(Event) && xt(CustomEvent)
              ? (a = new CustomEvent(e, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                }))
              : (a = document.createEvent("CustomEvent")).initCustomEvent(
                  e,
                  !0,
                  !0,
                  i,
                ),
            t.dispatchEvent(a)
          );
        }
        function qt(t) {
          var e = t.getBoundingClientRect();
          return {
            left:
              e.left +
              (window.pageXOffset - document.documentElement.clientLeft),
            top:
              e.top + (window.pageYOffset - document.documentElement.clientTop),
          };
        }
        var $t = f.location,
          Qt = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
        function Kt(t) {
          var e = t.match(Qt);
          return (
            null !== e &&
            (e[1] !== $t.protocol || e[2] !== $t.hostname || e[3] !== $t.port)
          );
        }
        function Zt(t) {
          var e = "timestamp=".concat(new Date().getTime());
          return t + (-1 === t.indexOf("?") ? "?" : "&") + e;
        }
        function Gt(t) {
          var e = t.rotate,
            i = t.scaleX,
            a = t.scaleY,
            n = t.translateX,
            o = t.translateY,
            r = [];
          gt(n) && 0 !== n && r.push("translateX(".concat(n, "px)")),
            gt(o) && 0 !== o && r.push("translateY(".concat(o, "px)")),
            gt(e) && 0 !== e && r.push("rotate(".concat(e, "deg)")),
            gt(i) && 1 !== i && r.push("scaleX(".concat(i, ")")),
            gt(a) && 1 !== a && r.push("scaleY(".concat(a, ")"));
          var h = r.length ? r.join(" ") : "none";
          return { WebkitTransform: h, msTransform: h, transform: h };
        }
        function Vt(t) {
          var i = e({}, t),
            a = 0;
          return (
            Dt(t, function (t, e) {
              delete i[e],
                Dt(i, function (e) {
                  var i = Math.abs(t.startX - e.startX),
                    n = Math.abs(t.startY - e.startY),
                    o = Math.abs(t.endX - e.endX),
                    r = Math.abs(t.endY - e.endY),
                    h = Math.sqrt(i * i + n * n),
                    s = (Math.sqrt(o * o + r * r) - h) / h;
                  Math.abs(s) > Math.abs(a) && (a = s);
                });
            }),
            a
          );
        }
        function Ft(t, i) {
          var a = t.pageX,
            n = t.pageY,
            o = { endX: a, endY: n };
          return i ? o : e({ startX: a, startY: n }, o);
        }
        function Jt(t) {
          var e = 0,
            i = 0,
            a = 0;
          return (
            Dt(t, function (t) {
              var n = t.startX,
                o = t.startY;
              (e += n), (i += o), (a += 1);
            }),
            { pageX: (e /= a), pageY: (i /= a) }
          );
        }
        function _t(t) {
          var e = t.aspectRatio,
            i = t.height,
            a = t.width,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "contain",
            o = ft(a),
            r = ft(i);
          if (o && r) {
            var h = i * e;
            ("contain" === n && h > a) || ("cover" === n && h < a)
              ? (i = a / e)
              : (a = i * e);
          } else o ? (i = a / e) : r && (a = i * e);
          return { width: a, height: i };
        }
        function te(t) {
          var e = t.width,
            i = t.height,
            a = t.degree;
          if (90 == (a = Math.abs(a) % 180)) return { width: i, height: e };
          var n = ((a % 90) * Math.PI) / 180,
            o = Math.sin(n),
            r = Math.cos(n),
            h = e * r + i * o,
            s = e * o + i * r;
          return a > 90 ? { width: s, height: h } : { width: h, height: s };
        }
        function ee(t, e, i, a) {
          var n = e.aspectRatio,
            o = e.naturalWidth,
            r = e.naturalHeight,
            s = e.rotate,
            c = void 0 === s ? 0 : s,
            l = e.scaleX,
            d = void 0 === l ? 1 : l,
            p = e.scaleY,
            u = void 0 === p ? 1 : p,
            m = i.aspectRatio,
            g = i.naturalWidth,
            f = i.naturalHeight,
            v = a.fillColor,
            w = void 0 === v ? "transparent" : v,
            b = a.imageSmoothingEnabled,
            y = void 0 === b || b,
            x = a.imageSmoothingQuality,
            M = void 0 === x ? "low" : x,
            C = a.maxWidth,
            D = void 0 === C ? 1 / 0 : C,
            k = a.maxHeight,
            B = void 0 === k ? 1 / 0 : k,
            O = a.minWidth,
            T = void 0 === O ? 0 : O,
            E = a.minHeight,
            W = void 0 === E ? 0 : E,
            H = document.createElement("canvas"),
            N = H.getContext("2d"),
            L = _t({ aspectRatio: m, width: D, height: B }),
            z = _t({ aspectRatio: m, width: T, height: W }, "cover"),
            Y = Math.min(L.width, Math.max(z.width, g)),
            X = Math.min(L.height, Math.max(z.height, f)),
            R = _t({ aspectRatio: n, width: D, height: B }),
            S = _t({ aspectRatio: n, width: T, height: W }, "cover"),
            j = Math.min(R.width, Math.max(S.width, o)),
            A = Math.min(R.height, Math.max(S.height, r)),
            P = [-j / 2, -A / 2, j, A];
          return (
            (H.width = Ot(Y)),
            (H.height = Ot(X)),
            (N.fillStyle = w),
            N.fillRect(0, 0, Y, X),
            N.save(),
            N.translate(Y / 2, X / 2),
            N.rotate((c * Math.PI) / 180),
            N.scale(d, u),
            (N.imageSmoothingEnabled = y),
            (N.imageSmoothingQuality = M),
            N.drawImage.apply(
              N,
              [t].concat(
                h(
                  P.map(function (t) {
                    return Math.floor(Ot(t));
                  }),
                ),
              ),
            ),
            N.restore(),
            H
          );
        }
        var ie = String.fromCharCode;
        function ae(t, e, i) {
          var a = "";
          i += e;
          for (var n = e; n < i; n += 1) a += ie(t.getUint8(n));
          return a;
        }
        var ne = /^data:.*,/;
        function oe(t) {
          var e = t.replace(ne, ""),
            i = atob(e),
            a = new ArrayBuffer(i.length),
            n = new Uint8Array(a);
          return (
            Dt(n, function (t, e) {
              n[e] = i.charCodeAt(e);
            }),
            a
          );
        }
        function re(t, e) {
          for (var i = [], a = 8192, n = new Uint8Array(t); n.length > 0; )
            i.push(ie.apply(null, Ct(n.subarray(0, a)))), (n = n.subarray(a));
          return "data:".concat(e, ";base64,").concat(btoa(i.join("")));
        }
        function he(t) {
          var e,
            i = new DataView(t);
          try {
            var a, n, o;
            if (255 === i.getUint8(0) && 216 === i.getUint8(1))
              for (var r = i.byteLength, h = 2; h + 1 < r; ) {
                if (255 === i.getUint8(h) && 225 === i.getUint8(h + 1)) {
                  n = h;
                  break;
                }
                h += 1;
              }
            if (n) {
              var s = n + 10;
              if ("Exif" === ae(i, n + 4, 4)) {
                var c = i.getUint16(s);
                if (
                  ((a = 18761 === c) || 19789 === c) &&
                  42 === i.getUint16(s + 2, a)
                ) {
                  var l = i.getUint32(s + 4, a);
                  l >= 8 && (o = s + l);
                }
              }
            }
            if (o) {
              var d,
                p,
                u = i.getUint16(o, a);
              for (p = 0; p < u; p += 1)
                if (((d = o + 12 * p + 2), 274 === i.getUint16(d, a))) {
                  (d += 8), (e = i.getUint16(d, a)), i.setUint16(d, 1, a);
                  break;
                }
            }
          } catch (t) {
            e = 1;
          }
          return e;
        }
        function se(t) {
          var e = 0,
            i = 1,
            a = 1;
          switch (t) {
            case 2:
              i = -1;
              break;
            case 3:
              e = -180;
              break;
            case 4:
              a = -1;
              break;
            case 5:
              (e = 90), (a = -1);
              break;
            case 6:
              e = 90;
              break;
            case 7:
              (e = 90), (i = -1);
              break;
            case 8:
              e = -90;
          }
          return { rotate: e, scaleX: i, scaleY: a };
        }
        var ce = {
            render: function () {
              this.initContainer(),
                this.initCanvas(),
                this.initCropBox(),
                this.renderCanvas(),
                this.cropped && this.renderCropBox();
            },
            initContainer: function () {
              var t = this.element,
                e = this.options,
                i = this.container,
                a = this.cropper,
                n = Number(e.minContainerWidth),
                o = Number(e.minContainerHeight);
              Ht(a, z), Nt(t, z);
              var r = {
                width: Math.max(i.offsetWidth, n >= 0 ? n : lt),
                height: Math.max(i.offsetHeight, o >= 0 ? o : dt),
              };
              (this.containerData = r),
                Et(a, { width: r.width, height: r.height }),
                Ht(t, z),
                Nt(a, z);
            },
            initCanvas: function () {
              var t = this.containerData,
                e = this.imageData,
                i = this.options.viewMode,
                a = Math.abs(e.rotate) % 180 == 90,
                n = a ? e.naturalHeight : e.naturalWidth,
                o = a ? e.naturalWidth : e.naturalHeight,
                r = n / o,
                h = t.width,
                s = t.height;
              t.height * r > t.width
                ? 3 === i
                  ? (h = t.height * r)
                  : (s = t.width / r)
                : 3 === i
                  ? (s = t.width / r)
                  : (h = t.height * r);
              var c = {
                aspectRatio: r,
                naturalWidth: n,
                naturalHeight: o,
                width: h,
                height: s,
              };
              (this.canvasData = c),
                (this.limited = 1 === i || 2 === i),
                this.limitCanvas(!0, !0),
                (c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth)),
                (c.height = Math.min(
                  Math.max(c.height, c.minHeight),
                  c.maxHeight,
                )),
                (c.left = (t.width - c.width) / 2),
                (c.top = (t.height - c.height) / 2),
                (c.oldLeft = c.left),
                (c.oldTop = c.top),
                (this.initialCanvasData = kt({}, c));
            },
            limitCanvas: function (t, e) {
              var i = this.options,
                a = this.containerData,
                n = this.canvasData,
                o = this.cropBoxData,
                r = i.viewMode,
                h = n.aspectRatio,
                s = this.cropped && o;
              if (t) {
                var c = Number(i.minCanvasWidth) || 0,
                  l = Number(i.minCanvasHeight) || 0;
                r > 1
                  ? ((c = Math.max(c, a.width)),
                    (l = Math.max(l, a.height)),
                    3 === r && (l * h > c ? (c = l * h) : (l = c / h)))
                  : r > 0 &&
                    (c
                      ? (c = Math.max(c, s ? o.width : 0))
                      : l
                        ? (l = Math.max(l, s ? o.height : 0))
                        : s &&
                          ((c = o.width),
                          (l = o.height) * h > c ? (c = l * h) : (l = c / h)));
                var d = _t({ aspectRatio: h, width: c, height: l });
                (c = d.width),
                  (l = d.height),
                  (n.minWidth = c),
                  (n.minHeight = l),
                  (n.maxWidth = 1 / 0),
                  (n.maxHeight = 1 / 0);
              }
              if (e)
                if (r > (s ? 0 : 1)) {
                  var p = a.width - n.width,
                    u = a.height - n.height;
                  (n.minLeft = Math.min(0, p)),
                    (n.minTop = Math.min(0, u)),
                    (n.maxLeft = Math.max(0, p)),
                    (n.maxTop = Math.max(0, u)),
                    s &&
                      this.limited &&
                      ((n.minLeft = Math.min(
                        o.left,
                        o.left + (o.width - n.width),
                      )),
                      (n.minTop = Math.min(
                        o.top,
                        o.top + (o.height - n.height),
                      )),
                      (n.maxLeft = o.left),
                      (n.maxTop = o.top),
                      2 === r &&
                        (n.width >= a.width &&
                          ((n.minLeft = Math.min(0, p)),
                          (n.maxLeft = Math.max(0, p))),
                        n.height >= a.height &&
                          ((n.minTop = Math.min(0, u)),
                          (n.maxTop = Math.max(0, u)))));
                } else
                  (n.minLeft = -n.width),
                    (n.minTop = -n.height),
                    (n.maxLeft = a.width),
                    (n.maxTop = a.height);
            },
            renderCanvas: function (t, e) {
              var i = this.canvasData,
                a = this.imageData;
              if (e) {
                var n = te({
                    width: a.naturalWidth * Math.abs(a.scaleX || 1),
                    height: a.naturalHeight * Math.abs(a.scaleY || 1),
                    degree: a.rotate || 0,
                  }),
                  o = n.width,
                  r = n.height,
                  h = i.width * (o / i.naturalWidth),
                  s = i.height * (r / i.naturalHeight);
                (i.left -= (h - i.width) / 2),
                  (i.top -= (s - i.height) / 2),
                  (i.width = h),
                  (i.height = s),
                  (i.aspectRatio = o / r),
                  (i.naturalWidth = o),
                  (i.naturalHeight = r),
                  this.limitCanvas(!0, !1);
              }
              (i.width > i.maxWidth || i.width < i.minWidth) &&
                (i.left = i.oldLeft),
                (i.height > i.maxHeight || i.height < i.minHeight) &&
                  (i.top = i.oldTop),
                (i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth)),
                (i.height = Math.min(
                  Math.max(i.height, i.minHeight),
                  i.maxHeight,
                )),
                this.limitCanvas(!1, !0),
                (i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft)),
                (i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop)),
                (i.oldLeft = i.left),
                (i.oldTop = i.top),
                Et(
                  this.canvas,
                  kt(
                    { width: i.width, height: i.height },
                    Gt({ translateX: i.left, translateY: i.top }),
                  ),
                ),
                this.renderImage(t),
                this.cropped && this.limited && this.limitCropBox(!0, !0);
            },
            renderImage: function (t) {
              var e = this.canvasData,
                i = this.imageData,
                a = i.naturalWidth * (e.width / e.naturalWidth),
                n = i.naturalHeight * (e.height / e.naturalHeight);
              kt(i, {
                width: a,
                height: n,
                left: (e.width - a) / 2,
                top: (e.height - n) / 2,
              }),
                Et(
                  this.image,
                  kt(
                    { width: i.width, height: i.height },
                    Gt(kt({ translateX: i.left, translateY: i.top }, i)),
                  ),
                ),
                t && this.output();
            },
            initCropBox: function () {
              var t = this.options,
                e = this.canvasData,
                i = t.aspectRatio || t.initialAspectRatio,
                a = Number(t.autoCropArea) || 0.8,
                n = { width: e.width, height: e.height };
              i &&
                (e.height * i > e.width
                  ? (n.height = n.width / i)
                  : (n.width = n.height * i)),
                (this.cropBoxData = n),
                this.limitCropBox(!0, !0),
                (n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth)),
                (n.height = Math.min(
                  Math.max(n.height, n.minHeight),
                  n.maxHeight,
                )),
                (n.width = Math.max(n.minWidth, n.width * a)),
                (n.height = Math.max(n.minHeight, n.height * a)),
                (n.left = e.left + (e.width - n.width) / 2),
                (n.top = e.top + (e.height - n.height) / 2),
                (n.oldLeft = n.left),
                (n.oldTop = n.top),
                (this.initialCropBoxData = kt({}, n));
            },
            limitCropBox: function (t, e) {
              var i = this.options,
                a = this.containerData,
                n = this.canvasData,
                o = this.cropBoxData,
                r = this.limited,
                h = i.aspectRatio;
              if (t) {
                var s = Number(i.minCropBoxWidth) || 0,
                  c = Number(i.minCropBoxHeight) || 0,
                  l = r
                    ? Math.min(
                        a.width,
                        n.width,
                        n.width + n.left,
                        a.width - n.left,
                      )
                    : a.width,
                  d = r
                    ? Math.min(
                        a.height,
                        n.height,
                        n.height + n.top,
                        a.height - n.top,
                      )
                    : a.height;
                (s = Math.min(s, a.width)),
                  (c = Math.min(c, a.height)),
                  h &&
                    (s && c
                      ? c * h > s
                        ? (c = s / h)
                        : (s = c * h)
                      : s
                        ? (c = s / h)
                        : c && (s = c * h),
                    d * h > l ? (d = l / h) : (l = d * h)),
                  (o.minWidth = Math.min(s, l)),
                  (o.minHeight = Math.min(c, d)),
                  (o.maxWidth = l),
                  (o.maxHeight = d);
              }
              e &&
                (r
                  ? ((o.minLeft = Math.max(0, n.left)),
                    (o.minTop = Math.max(0, n.top)),
                    (o.maxLeft = Math.min(a.width, n.left + n.width) - o.width),
                    (o.maxTop =
                      Math.min(a.height, n.top + n.height) - o.height))
                  : ((o.minLeft = 0),
                    (o.minTop = 0),
                    (o.maxLeft = a.width - o.width),
                    (o.maxTop = a.height - o.height)));
            },
            renderCropBox: function () {
              var t = this.options,
                e = this.containerData,
                i = this.cropBoxData;
              (i.width > i.maxWidth || i.width < i.minWidth) &&
                (i.left = i.oldLeft),
                (i.height > i.maxHeight || i.height < i.minHeight) &&
                  (i.top = i.oldTop),
                (i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth)),
                (i.height = Math.min(
                  Math.max(i.height, i.minHeight),
                  i.maxHeight,
                )),
                this.limitCropBox(!1, !0),
                (i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft)),
                (i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop)),
                (i.oldLeft = i.left),
                (i.oldTop = i.top),
                t.movable &&
                  t.cropBoxMovable &&
                  Rt(
                    this.face,
                    j,
                    i.width >= e.width && i.height >= e.height ? M : y,
                  ),
                Et(
                  this.cropBox,
                  kt(
                    { width: i.width, height: i.height },
                    Gt({ translateX: i.left, translateY: i.top }),
                  ),
                ),
                this.cropped && this.limited && this.limitCanvas(!0, !0),
                this.disabled || this.output();
            },
            output: function () {
              this.preview(), Ut(this.element, q, this.getData());
            },
          },
          le = {
            initPreview: function () {
              var t = this.element,
                e = this.crossOrigin,
                i = this.options.preview,
                a = e ? this.crossOriginUrl : this.url,
                n = t.alt || "The image to preview",
                o = document.createElement("img");
              if (
                (e && (o.crossOrigin = e),
                (o.src = a),
                (o.alt = n),
                this.viewBox.appendChild(o),
                (this.viewBoxImage = o),
                i)
              ) {
                var r = i;
                "string" == typeof i
                  ? (r = t.ownerDocument.querySelectorAll(i))
                  : i.querySelector && (r = [i]),
                  (this.previews = r),
                  Dt(r, function (t) {
                    var i = document.createElement("img");
                    Rt(t, A, {
                      width: t.offsetWidth,
                      height: t.offsetHeight,
                      html: t.innerHTML,
                    }),
                      e && (i.crossOrigin = e),
                      (i.src = a),
                      (i.alt = n),
                      (i.style.cssText =
                        'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
                      (t.innerHTML = ""),
                      t.appendChild(i);
                  });
              }
            },
            resetPreview: function () {
              Dt(this.previews, function (t) {
                var e = Xt(t, A);
                Et(t, { width: e.width, height: e.height }),
                  (t.innerHTML = e.html),
                  St(t, A);
              });
            },
            preview: function () {
              var t = this.imageData,
                e = this.canvasData,
                i = this.cropBoxData,
                a = i.width,
                n = i.height,
                o = t.width,
                r = t.height,
                h = i.left - e.left - t.left,
                s = i.top - e.top - t.top;
              this.cropped &&
                !this.disabled &&
                (Et(
                  this.viewBoxImage,
                  kt(
                    { width: o, height: r },
                    Gt(kt({ translateX: -h, translateY: -s }, t)),
                  ),
                ),
                Dt(this.previews, function (e) {
                  var i = Xt(e, A),
                    c = i.width,
                    l = i.height,
                    d = c,
                    p = l,
                    u = 1;
                  a && (p = n * (u = c / a)),
                    n && p > l && ((d = a * (u = l / n)), (p = l)),
                    Et(e, { width: d, height: p }),
                    Et(
                      e.getElementsByTagName("img")[0],
                      kt(
                        { width: o * u, height: r * u },
                        Gt(kt({ translateX: -h * u, translateY: -s * u }, t)),
                      ),
                    );
                }));
            },
          },
          de = {
            bind: function () {
              var t = this.element,
                e = this.options,
                i = this.cropper;
              xt(e.cropstart) && It(t, K, e.cropstart),
                xt(e.cropmove) && It(t, Q, e.cropmove),
                xt(e.cropend) && It(t, $, e.cropend),
                xt(e.crop) && It(t, q, e.crop),
                xt(e.zoom) && It(t, nt, e.zoom),
                It(i, J, (this.onCropStart = this.cropStart.bind(this))),
                e.zoomable &&
                  e.zoomOnWheel &&
                  It(i, at, (this.onWheel = this.wheel.bind(this)), {
                    passive: !1,
                    capture: !0,
                  }),
                e.toggleDragModeOnDblclick &&
                  It(i, Z, (this.onDblclick = this.dblclick.bind(this))),
                It(
                  t.ownerDocument,
                  _,
                  (this.onCropMove = this.cropMove.bind(this)),
                ),
                It(
                  t.ownerDocument,
                  tt,
                  (this.onCropEnd = this.cropEnd.bind(this)),
                ),
                e.responsive &&
                  It(window, it, (this.onResize = this.resize.bind(this)));
            },
            unbind: function () {
              var t = this.element,
                e = this.options,
                i = this.cropper;
              xt(e.cropstart) && Pt(t, K, e.cropstart),
                xt(e.cropmove) && Pt(t, Q, e.cropmove),
                xt(e.cropend) && Pt(t, $, e.cropend),
                xt(e.crop) && Pt(t, q, e.crop),
                xt(e.zoom) && Pt(t, nt, e.zoom),
                Pt(i, J, this.onCropStart),
                e.zoomable &&
                  e.zoomOnWheel &&
                  Pt(i, at, this.onWheel, { passive: !1, capture: !0 }),
                e.toggleDragModeOnDblclick && Pt(i, Z, this.onDblclick),
                Pt(t.ownerDocument, _, this.onCropMove),
                Pt(t.ownerDocument, tt, this.onCropEnd),
                e.responsive && Pt(window, it, this.onResize);
            },
          },
          pe = {
            resize: function () {
              if (!this.disabled) {
                var t,
                  e,
                  i = this.options,
                  a = this.container,
                  n = this.containerData,
                  o = a.offsetWidth / n.width,
                  r = a.offsetHeight / n.height,
                  h = Math.abs(o - 1) > Math.abs(r - 1) ? o : r;
                1 !== h &&
                  (i.restore &&
                    ((t = this.getCanvasData()), (e = this.getCropBoxData())),
                  this.render(),
                  i.restore &&
                    (this.setCanvasData(
                      Dt(t, function (e, i) {
                        t[i] = e * h;
                      }),
                    ),
                    this.setCropBoxData(
                      Dt(e, function (t, i) {
                        e[i] = t * h;
                      }),
                    )));
              }
            },
            dblclick: function () {
              this.disabled ||
                this.options.dragMode === U ||
                this.setDragMode(Wt(this.dragBox, N) ? I : P);
            },
            wheel: function (t) {
              var e = this,
                i = Number(this.options.wheelZoomRatio) || 0.1,
                a = 1;
              this.disabled ||
                (t.preventDefault(),
                this.wheeling ||
                  ((this.wheeling = !0),
                  setTimeout(function () {
                    e.wheeling = !1;
                  }, 50),
                  t.deltaY
                    ? (a = t.deltaY > 0 ? 1 : -1)
                    : t.wheelDelta
                      ? (a = -t.wheelDelta / 120)
                      : t.detail && (a = t.detail > 0 ? 1 : -1),
                  this.zoom(-a * i, t)));
            },
            cropStart: function (t) {
              var e = t.buttons,
                i = t.button;
              if (
                !(
                  this.disabled ||
                  (("mousedown" === t.type ||
                    ("pointerdown" === t.type && "mouse" === t.pointerType)) &&
                    ((gt(e) && 1 !== e) || (gt(i) && 0 !== i) || t.ctrlKey))
                )
              ) {
                var a,
                  n = this.options,
                  o = this.pointers;
                t.changedTouches
                  ? Dt(t.changedTouches, function (t) {
                      o[t.identifier] = Ft(t);
                    })
                  : (o[t.pointerId || 0] = Ft(t)),
                  (a =
                    Object.keys(o).length > 1 && n.zoomable && n.zoomOnTouch
                      ? C
                      : Xt(t.target, j)),
                  rt.test(a) &&
                    !1 !==
                      Ut(this.element, K, { originalEvent: t, action: a }) &&
                    (t.preventDefault(),
                    (this.action = a),
                    (this.cropping = !1),
                    a === x && ((this.cropping = !0), Ht(this.dragBox, R)));
              }
            },
            cropMove: function (t) {
              var e = this.action;
              if (!this.disabled && e) {
                var i = this.pointers;
                t.preventDefault(),
                  !1 !== Ut(this.element, Q, { originalEvent: t, action: e }) &&
                    (t.changedTouches
                      ? Dt(t.changedTouches, function (t) {
                          kt(i[t.identifier] || {}, Ft(t, !0));
                        })
                      : kt(i[t.pointerId || 0] || {}, Ft(t, !0)),
                    this.change(t));
              }
            },
            cropEnd: function (t) {
              if (!this.disabled) {
                var e = this.action,
                  i = this.pointers;
                t.changedTouches
                  ? Dt(t.changedTouches, function (t) {
                      delete i[t.identifier];
                    })
                  : delete i[t.pointerId || 0],
                  e &&
                    (t.preventDefault(),
                    Object.keys(i).length || (this.action = ""),
                    this.cropping &&
                      ((this.cropping = !1),
                      Lt(this.dragBox, R, this.cropped && this.options.modal)),
                    Ut(this.element, $, { originalEvent: t, action: e }));
              }
            },
          },
          ue = {
            change: function (t) {
              var e,
                i = this.options,
                a = this.canvasData,
                n = this.containerData,
                o = this.cropBoxData,
                r = this.pointers,
                h = this.action,
                s = i.aspectRatio,
                c = o.left,
                l = o.top,
                d = o.width,
                p = o.height,
                u = c + d,
                m = l + p,
                g = 0,
                f = 0,
                v = n.width,
                w = n.height,
                b = !0;
              !s && t.shiftKey && (s = d && p ? d / p : 1),
                this.limited &&
                  ((g = o.minLeft),
                  (f = o.minTop),
                  (v = g + Math.min(n.width, a.width, a.left + a.width)),
                  (w = f + Math.min(n.height, a.height, a.top + a.height)));
              var N = r[Object.keys(r)[0]],
                L = { x: N.endX - N.startX, y: N.endY - N.startY },
                Y = function (t) {
                  switch (t) {
                    case D:
                      u + L.x > v && (L.x = v - u);
                      break;
                    case k:
                      c + L.x < g && (L.x = g - c);
                      break;
                    case O:
                      l + L.y < f && (L.y = f - l);
                      break;
                    case B:
                      m + L.y > w && (L.y = w - m);
                  }
                };
              switch (h) {
                case y:
                  (c += L.x), (l += L.y);
                  break;
                case D:
                  if (L.x >= 0 && (u >= v || (s && (l <= f || m >= w)))) {
                    b = !1;
                    break;
                  }
                  Y(D),
                    (d += L.x) < 0 && ((h = k), (c -= d = -d)),
                    s && ((p = d / s), (l += (o.height - p) / 2));
                  break;
                case O:
                  if (L.y <= 0 && (l <= f || (s && (c <= g || u >= v)))) {
                    b = !1;
                    break;
                  }
                  Y(O),
                    (p -= L.y),
                    (l += L.y),
                    p < 0 && ((h = B), (l -= p = -p)),
                    s && ((d = p * s), (c += (o.width - d) / 2));
                  break;
                case k:
                  if (L.x <= 0 && (c <= g || (s && (l <= f || m >= w)))) {
                    b = !1;
                    break;
                  }
                  Y(k),
                    (d -= L.x),
                    (c += L.x),
                    d < 0 && ((h = D), (c -= d = -d)),
                    s && ((p = d / s), (l += (o.height - p) / 2));
                  break;
                case B:
                  if (L.y >= 0 && (m >= w || (s && (c <= g || u >= v)))) {
                    b = !1;
                    break;
                  }
                  Y(B),
                    (p += L.y) < 0 && ((h = O), (l -= p = -p)),
                    s && ((d = p * s), (c += (o.width - d) / 2));
                  break;
                case T:
                  if (s) {
                    if (L.y <= 0 && (l <= f || u >= v)) {
                      b = !1;
                      break;
                    }
                    Y(O), (p -= L.y), (l += L.y), (d = p * s);
                  } else
                    Y(O),
                      Y(D),
                      L.x >= 0
                        ? u < v
                          ? (d += L.x)
                          : L.y <= 0 && l <= f && (b = !1)
                        : (d += L.x),
                      L.y <= 0
                        ? l > f && ((p -= L.y), (l += L.y))
                        : ((p -= L.y), (l += L.y));
                  d < 0 && p < 0
                    ? ((h = H), (l -= p = -p), (c -= d = -d))
                    : d < 0
                      ? ((h = E), (c -= d = -d))
                      : p < 0 && ((h = W), (l -= p = -p));
                  break;
                case E:
                  if (s) {
                    if (L.y <= 0 && (l <= f || c <= g)) {
                      b = !1;
                      break;
                    }
                    Y(O),
                      (p -= L.y),
                      (l += L.y),
                      (d = p * s),
                      (c += o.width - d);
                  } else
                    Y(O),
                      Y(k),
                      L.x <= 0
                        ? c > g
                          ? ((d -= L.x), (c += L.x))
                          : L.y <= 0 && l <= f && (b = !1)
                        : ((d -= L.x), (c += L.x)),
                      L.y <= 0
                        ? l > f && ((p -= L.y), (l += L.y))
                        : ((p -= L.y), (l += L.y));
                  d < 0 && p < 0
                    ? ((h = W), (l -= p = -p), (c -= d = -d))
                    : d < 0
                      ? ((h = T), (c -= d = -d))
                      : p < 0 && ((h = H), (l -= p = -p));
                  break;
                case H:
                  if (s) {
                    if (L.x <= 0 && (c <= g || m >= w)) {
                      b = !1;
                      break;
                    }
                    Y(k), (d -= L.x), (c += L.x), (p = d / s);
                  } else
                    Y(B),
                      Y(k),
                      L.x <= 0
                        ? c > g
                          ? ((d -= L.x), (c += L.x))
                          : L.y >= 0 && m >= w && (b = !1)
                        : ((d -= L.x), (c += L.x)),
                      L.y >= 0 ? m < w && (p += L.y) : (p += L.y);
                  d < 0 && p < 0
                    ? ((h = T), (l -= p = -p), (c -= d = -d))
                    : d < 0
                      ? ((h = W), (c -= d = -d))
                      : p < 0 && ((h = E), (l -= p = -p));
                  break;
                case W:
                  if (s) {
                    if (L.x >= 0 && (u >= v || m >= w)) {
                      b = !1;
                      break;
                    }
                    Y(D), (p = (d += L.x) / s);
                  } else
                    Y(B),
                      Y(D),
                      L.x >= 0
                        ? u < v
                          ? (d += L.x)
                          : L.y >= 0 && m >= w && (b = !1)
                        : (d += L.x),
                      L.y >= 0 ? m < w && (p += L.y) : (p += L.y);
                  d < 0 && p < 0
                    ? ((h = E), (l -= p = -p), (c -= d = -d))
                    : d < 0
                      ? ((h = H), (c -= d = -d))
                      : p < 0 && ((h = T), (l -= p = -p));
                  break;
                case M:
                  this.move(L.x, L.y), (b = !1);
                  break;
                case C:
                  this.zoom(Vt(r), t), (b = !1);
                  break;
                case x:
                  if (!L.x || !L.y) {
                    b = !1;
                    break;
                  }
                  (e = qt(this.cropper)),
                    (c = N.startX - e.left),
                    (l = N.startY - e.top),
                    (d = o.minWidth),
                    (p = o.minHeight),
                    L.x > 0
                      ? (h = L.y > 0 ? W : T)
                      : L.x < 0 && ((c -= d), (h = L.y > 0 ? H : E)),
                    L.y < 0 && (l -= p),
                    this.cropped ||
                      (Nt(this.cropBox, z),
                      (this.cropped = !0),
                      this.limited && this.limitCropBox(!0, !0));
              }
              b &&
                ((o.width = d),
                (o.height = p),
                (o.left = c),
                (o.top = l),
                (this.action = h),
                this.renderCropBox()),
                Dt(r, function (t) {
                  (t.startX = t.endX), (t.startY = t.endY);
                });
            },
          },
          me = {
            crop: function () {
              return (
                !this.ready ||
                  this.cropped ||
                  this.disabled ||
                  ((this.cropped = !0),
                  this.limitCropBox(!0, !0),
                  this.options.modal && Ht(this.dragBox, R),
                  Nt(this.cropBox, z),
                  this.setCropBoxData(this.initialCropBoxData)),
                this
              );
            },
            reset: function () {
              return (
                this.ready &&
                  !this.disabled &&
                  ((this.imageData = kt({}, this.initialImageData)),
                  (this.canvasData = kt({}, this.initialCanvasData)),
                  (this.cropBoxData = kt({}, this.initialCropBoxData)),
                  this.renderCanvas(),
                  this.cropped && this.renderCropBox()),
                this
              );
            },
            clear: function () {
              return (
                this.cropped &&
                  !this.disabled &&
                  (kt(this.cropBoxData, {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                  }),
                  (this.cropped = !1),
                  this.renderCropBox(),
                  this.limitCanvas(!0, !0),
                  this.renderCanvas(),
                  Nt(this.dragBox, R),
                  Ht(this.cropBox, z)),
                this
              );
            },
            replace: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return (
                !this.disabled &&
                  t &&
                  (this.isImg && (this.element.src = t),
                  e
                    ? ((this.url = t),
                      (this.image.src = t),
                      this.ready &&
                        ((this.viewBoxImage.src = t),
                        Dt(this.previews, function (e) {
                          e.getElementsByTagName("img")[0].src = t;
                        })))
                    : (this.isImg && (this.replaced = !0),
                      (this.options.data = null),
                      this.uncreate(),
                      this.load(t))),
                this
              );
            },
            enable: function () {
              return (
                this.ready &&
                  this.disabled &&
                  ((this.disabled = !1), Nt(this.cropper, L)),
                this
              );
            },
            disable: function () {
              return (
                this.ready &&
                  !this.disabled &&
                  ((this.disabled = !0), Ht(this.cropper, L)),
                this
              );
            },
            destroy: function () {
              var t = this.element;
              return t[b]
                ? ((t[b] = void 0),
                  this.isImg && this.replaced && (t.src = this.originalUrl),
                  this.uncreate(),
                  this)
                : this;
            },
            move: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : t,
                i = this.canvasData,
                a = i.left,
                n = i.top;
              return this.moveTo(
                vt(t) ? t : a + Number(t),
                vt(e) ? e : n + Number(e),
              );
            },
            moveTo: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : t,
                i = this.canvasData,
                a = !1;
              return (
                (t = Number(t)),
                (e = Number(e)),
                this.ready &&
                  !this.disabled &&
                  this.options.movable &&
                  (gt(t) && ((i.left = t), (a = !0)),
                  gt(e) && ((i.top = e), (a = !0)),
                  a && this.renderCanvas(!0)),
                this
              );
            },
            zoom: function (t, e) {
              var i = this.canvasData;
              return (
                (t = (t = Number(t)) < 0 ? 1 / (1 - t) : 1 + t),
                this.zoomTo((i.width * t) / i.naturalWidth, null, e)
              );
            },
            zoomTo: function (t, e, i) {
              var a = this.options,
                n = this.canvasData,
                o = n.width,
                r = n.height,
                h = n.naturalWidth,
                s = n.naturalHeight;
              if (
                (t = Number(t)) >= 0 &&
                this.ready &&
                !this.disabled &&
                a.zoomable
              ) {
                var c = h * t,
                  l = s * t;
                if (
                  !1 ===
                  Ut(this.element, nt, {
                    ratio: t,
                    oldRatio: o / h,
                    originalEvent: i,
                  })
                )
                  return this;
                if (i) {
                  var d = this.pointers,
                    p = qt(this.cropper),
                    u =
                      d && Object.keys(d).length
                        ? Jt(d)
                        : { pageX: i.pageX, pageY: i.pageY };
                  (n.left -= (c - o) * ((u.pageX - p.left - n.left) / o)),
                    (n.top -= (l - r) * ((u.pageY - p.top - n.top) / r));
                } else
                  yt(e) && gt(e.x) && gt(e.y)
                    ? ((n.left -= (c - o) * ((e.x - n.left) / o)),
                      (n.top -= (l - r) * ((e.y - n.top) / r)))
                    : ((n.left -= (c - o) / 2), (n.top -= (l - r) / 2));
                (n.width = c), (n.height = l), this.renderCanvas(!0);
              }
              return this;
            },
            rotate: function (t) {
              return this.rotateTo((this.imageData.rotate || 0) + Number(t));
            },
            rotateTo: function (t) {
              return (
                gt((t = Number(t))) &&
                  this.ready &&
                  !this.disabled &&
                  this.options.rotatable &&
                  ((this.imageData.rotate = t % 360),
                  this.renderCanvas(!0, !0)),
                this
              );
            },
            scaleX: function (t) {
              var e = this.imageData.scaleY;
              return this.scale(t, gt(e) ? e : 1);
            },
            scaleY: function (t) {
              var e = this.imageData.scaleX;
              return this.scale(gt(e) ? e : 1, t);
            },
            scale: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : t,
                i = this.imageData,
                a = !1;
              return (
                (t = Number(t)),
                (e = Number(e)),
                this.ready &&
                  !this.disabled &&
                  this.options.scalable &&
                  (gt(t) && ((i.scaleX = t), (a = !0)),
                  gt(e) && ((i.scaleY = e), (a = !0)),
                  a && this.renderCanvas(!0, !0)),
                this
              );
            },
            getData: function () {
              var t,
                e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                i = this.options,
                a = this.imageData,
                n = this.canvasData,
                o = this.cropBoxData;
              if (this.ready && this.cropped) {
                t = {
                  x: o.left - n.left,
                  y: o.top - n.top,
                  width: o.width,
                  height: o.height,
                };
                var r = a.width / a.naturalWidth;
                if (
                  (Dt(t, function (e, i) {
                    t[i] = e / r;
                  }),
                  e)
                ) {
                  var h = Math.round(t.y + t.height),
                    s = Math.round(t.x + t.width);
                  (t.x = Math.round(t.x)),
                    (t.y = Math.round(t.y)),
                    (t.width = s - t.x),
                    (t.height = h - t.y);
                }
              } else t = { x: 0, y: 0, width: 0, height: 0 };
              return (
                i.rotatable && (t.rotate = a.rotate || 0),
                i.scalable &&
                  ((t.scaleX = a.scaleX || 1), (t.scaleY = a.scaleY || 1)),
                t
              );
            },
            setData: function (t) {
              var e = this.options,
                i = this.imageData,
                a = this.canvasData,
                n = {};
              if (this.ready && !this.disabled && yt(t)) {
                var o = !1;
                e.rotatable &&
                  gt(t.rotate) &&
                  t.rotate !== i.rotate &&
                  ((i.rotate = t.rotate), (o = !0)),
                  e.scalable &&
                    (gt(t.scaleX) &&
                      t.scaleX !== i.scaleX &&
                      ((i.scaleX = t.scaleX), (o = !0)),
                    gt(t.scaleY) &&
                      t.scaleY !== i.scaleY &&
                      ((i.scaleY = t.scaleY), (o = !0))),
                  o && this.renderCanvas(!0, !0);
                var r = i.width / i.naturalWidth;
                gt(t.x) && (n.left = t.x * r + a.left),
                  gt(t.y) && (n.top = t.y * r + a.top),
                  gt(t.width) && (n.width = t.width * r),
                  gt(t.height) && (n.height = t.height * r),
                  this.setCropBoxData(n);
              }
              return this;
            },
            getContainerData: function () {
              return this.ready ? kt({}, this.containerData) : {};
            },
            getImageData: function () {
              return this.sized ? kt({}, this.imageData) : {};
            },
            getCanvasData: function () {
              var t = this.canvasData,
                e = {};
              return (
                this.ready &&
                  Dt(
                    [
                      "left",
                      "top",
                      "width",
                      "height",
                      "naturalWidth",
                      "naturalHeight",
                    ],
                    function (i) {
                      e[i] = t[i];
                    },
                  ),
                e
              );
            },
            setCanvasData: function (t) {
              var e = this.canvasData,
                i = e.aspectRatio;
              return (
                this.ready &&
                  !this.disabled &&
                  yt(t) &&
                  (gt(t.left) && (e.left = t.left),
                  gt(t.top) && (e.top = t.top),
                  gt(t.width)
                    ? ((e.width = t.width), (e.height = t.width / i))
                    : gt(t.height) &&
                      ((e.height = t.height), (e.width = t.height * i)),
                  this.renderCanvas(!0)),
                this
              );
            },
            getCropBoxData: function () {
              var t,
                e = this.cropBoxData;
              return (
                this.ready &&
                  this.cropped &&
                  (t = {
                    left: e.left,
                    top: e.top,
                    width: e.width,
                    height: e.height,
                  }),
                t || {}
              );
            },
            setCropBoxData: function (t) {
              var e,
                i,
                a = this.cropBoxData,
                n = this.options.aspectRatio;
              return (
                this.ready &&
                  this.cropped &&
                  !this.disabled &&
                  yt(t) &&
                  (gt(t.left) && (a.left = t.left),
                  gt(t.top) && (a.top = t.top),
                  gt(t.width) &&
                    t.width !== a.width &&
                    ((e = !0), (a.width = t.width)),
                  gt(t.height) &&
                    t.height !== a.height &&
                    ((i = !0), (a.height = t.height)),
                  n &&
                    (e
                      ? (a.height = a.width / n)
                      : i && (a.width = a.height * n)),
                  this.renderCropBox()),
                this
              );
            },
            getCroppedCanvas: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (!this.ready || !window.HTMLCanvasElement) return null;
              var e = this.canvasData,
                i = ee(this.image, this.imageData, e, t);
              if (!this.cropped) return i;
              var a = this.getData(t.rounded),
                n = a.x,
                o = a.y,
                r = a.width,
                s = a.height,
                c = i.width / Math.floor(e.naturalWidth);
              1 !== c && ((n *= c), (o *= c), (r *= c), (s *= c));
              var l = r / s,
                d = _t({
                  aspectRatio: l,
                  width: t.maxWidth || 1 / 0,
                  height: t.maxHeight || 1 / 0,
                }),
                p = _t(
                  {
                    aspectRatio: l,
                    width: t.minWidth || 0,
                    height: t.minHeight || 0,
                  },
                  "cover",
                ),
                u = _t({
                  aspectRatio: l,
                  width: t.width || (1 !== c ? i.width : r),
                  height: t.height || (1 !== c ? i.height : s),
                }),
                m = u.width,
                g = u.height;
              (m = Math.min(d.width, Math.max(p.width, m))),
                (g = Math.min(d.height, Math.max(p.height, g)));
              var f = document.createElement("canvas"),
                v = f.getContext("2d");
              (f.width = Ot(m)),
                (f.height = Ot(g)),
                (v.fillStyle = t.fillColor || "transparent"),
                v.fillRect(0, 0, m, g);
              var w = t.imageSmoothingEnabled,
                b = void 0 === w || w,
                y = t.imageSmoothingQuality;
              (v.imageSmoothingEnabled = b), y && (v.imageSmoothingQuality = y);
              var x,
                M,
                C,
                D,
                k,
                B,
                O = i.width,
                T = i.height,
                E = n,
                W = o;
              E <= -r || E > O
                ? ((E = 0), (x = 0), (C = 0), (k = 0))
                : E <= 0
                  ? ((C = -E), (E = 0), (k = x = Math.min(O, r + E)))
                  : E <= O && ((C = 0), (k = x = Math.min(r, O - E))),
                x <= 0 || W <= -s || W > T
                  ? ((W = 0), (M = 0), (D = 0), (B = 0))
                  : W <= 0
                    ? ((D = -W), (W = 0), (B = M = Math.min(T, s + W)))
                    : W <= T && ((D = 0), (B = M = Math.min(s, T - W)));
              var H = [E, W, x, M];
              if (k > 0 && B > 0) {
                var N = m / r;
                H.push(C * N, D * N, k * N, B * N);
              }
              return (
                v.drawImage.apply(
                  v,
                  [i].concat(
                    h(
                      H.map(function (t) {
                        return Math.floor(Ot(t));
                      }),
                    ),
                  ),
                ),
                f
              );
            },
            setAspectRatio: function (t) {
              var e = this.options;
              return (
                this.disabled ||
                  vt(t) ||
                  ((e.aspectRatio = Math.max(0, t) || NaN),
                  this.ready &&
                    (this.initCropBox(), this.cropped && this.renderCropBox())),
                this
              );
            },
            setDragMode: function (t) {
              var e = this.options,
                i = this.dragBox,
                a = this.face;
              if (this.ready && !this.disabled) {
                var n = t === P,
                  o = e.movable && t === I;
                (t = n || o ? t : U),
                  (e.dragMode = t),
                  Rt(i, j, t),
                  Lt(i, N, n),
                  Lt(i, S, o),
                  e.cropBoxMovable || (Rt(a, j, t), Lt(a, N, n), Lt(a, S, o));
              }
              return this;
            },
          },
          ge = f.Cropper,
          fe = (function () {
            function t(e) {
              var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if ((a(this, t), !e || !ct.test(e.tagName)))
                throw new Error(
                  "The first argument is required and must be an <img> or <canvas> element.",
                );
              (this.element = e),
                (this.options = kt({}, pt, yt(i) && i)),
                (this.cropped = !1),
                (this.disabled = !1),
                (this.pointers = {}),
                (this.ready = !1),
                (this.reloading = !1),
                (this.replaced = !1),
                (this.sized = !1),
                (this.sizing = !1),
                this.init();
            }
            return (
              o(
                t,
                [
                  {
                    key: "init",
                    value: function () {
                      var t,
                        e = this.element,
                        i = e.tagName.toLowerCase();
                      if (!e[b]) {
                        if (((e[b] = this), "img" === i)) {
                          if (
                            ((this.isImg = !0),
                            (t = e.getAttribute("src") || ""),
                            (this.originalUrl = t),
                            !t)
                          )
                            return;
                          t = e.src;
                        } else
                          "canvas" === i &&
                            window.HTMLCanvasElement &&
                            (t = e.toDataURL());
                        this.load(t);
                      }
                    },
                  },
                  {
                    key: "load",
                    value: function (t) {
                      var e = this;
                      if (t) {
                        (this.url = t), (this.imageData = {});
                        var i = this.element,
                          a = this.options;
                        if (
                          (a.rotatable ||
                            a.scalable ||
                            (a.checkOrientation = !1),
                          a.checkOrientation && window.ArrayBuffer)
                        )
                          if (ht.test(t))
                            st.test(t) ? this.read(oe(t)) : this.clone();
                          else {
                            var n = new XMLHttpRequest(),
                              o = this.clone.bind(this);
                            (this.reloading = !0),
                              (this.xhr = n),
                              (n.onabort = o),
                              (n.onerror = o),
                              (n.ontimeout = o),
                              (n.onprogress = function () {
                                n.getResponseHeader("content-type") !== ot &&
                                  n.abort();
                              }),
                              (n.onload = function () {
                                e.read(n.response);
                              }),
                              (n.onloadend = function () {
                                (e.reloading = !1), (e.xhr = null);
                              }),
                              a.checkCrossOrigin &&
                                Kt(t) &&
                                i.crossOrigin &&
                                (t = Zt(t)),
                              n.open("GET", t, !0),
                              (n.responseType = "arraybuffer"),
                              (n.withCredentials =
                                "use-credentials" === i.crossOrigin),
                              n.send();
                          }
                        else this.clone();
                      }
                    },
                  },
                  {
                    key: "read",
                    value: function (t) {
                      var e = this.options,
                        i = this.imageData,
                        a = he(t),
                        n = 0,
                        o = 1,
                        r = 1;
                      if (a > 1) {
                        this.url = re(t, ot);
                        var h = se(a);
                        (n = h.rotate), (o = h.scaleX), (r = h.scaleY);
                      }
                      e.rotatable && (i.rotate = n),
                        e.scalable && ((i.scaleX = o), (i.scaleY = r)),
                        this.clone();
                    },
                  },
                  {
                    key: "clone",
                    value: function () {
                      var t = this.element,
                        e = this.url,
                        i = t.crossOrigin,
                        a = e;
                      this.options.checkCrossOrigin &&
                        Kt(e) &&
                        (i || (i = "anonymous"), (a = Zt(e))),
                        (this.crossOrigin = i),
                        (this.crossOriginUrl = a);
                      var n = document.createElement("img");
                      i && (n.crossOrigin = i),
                        (n.src = a || e),
                        (n.alt = t.alt || "The image to crop"),
                        (this.image = n),
                        (n.onload = this.start.bind(this)),
                        (n.onerror = this.stop.bind(this)),
                        Ht(n, Y),
                        t.parentNode.insertBefore(n, t.nextSibling);
                    },
                  },
                  {
                    key: "start",
                    value: function () {
                      var t = this,
                        e = this.image;
                      (e.onload = null), (e.onerror = null), (this.sizing = !0);
                      var i =
                          f.navigator &&
                          /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
                            f.navigator.userAgent,
                          ),
                        a = function (e, i) {
                          kt(t.imageData, {
                            naturalWidth: e,
                            naturalHeight: i,
                            aspectRatio: e / i,
                          }),
                            (t.initialImageData = kt({}, t.imageData)),
                            (t.sizing = !1),
                            (t.sized = !0),
                            t.build();
                        };
                      if (!e.naturalWidth || i) {
                        var n = document.createElement("img"),
                          o = document.body || document.documentElement;
                        (this.sizingImage = n),
                          (n.onload = function () {
                            a(n.width, n.height), i || o.removeChild(n);
                          }),
                          (n.src = e.src),
                          i ||
                            ((n.style.cssText =
                              "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;"),
                            o.appendChild(n));
                      } else a(e.naturalWidth, e.naturalHeight);
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      var t = this.image;
                      (t.onload = null),
                        (t.onerror = null),
                        t.parentNode.removeChild(t),
                        (this.image = null);
                    },
                  },
                  {
                    key: "build",
                    value: function () {
                      if (this.sized && !this.ready) {
                        var t = this.element,
                          e = this.options,
                          i = this.image,
                          a = t.parentNode,
                          n = document.createElement("div");
                        n.innerHTML = ut;
                        var o = n.querySelector(".".concat(b, "-container")),
                          r = o.querySelector(".".concat(b, "-canvas")),
                          h = o.querySelector(".".concat(b, "-drag-box")),
                          s = o.querySelector(".".concat(b, "-crop-box")),
                          c = s.querySelector(".".concat(b, "-face"));
                        (this.container = a),
                          (this.cropper = o),
                          (this.canvas = r),
                          (this.dragBox = h),
                          (this.cropBox = s),
                          (this.viewBox = o.querySelector(
                            ".".concat(b, "-view-box"),
                          )),
                          (this.face = c),
                          r.appendChild(i),
                          Ht(t, z),
                          a.insertBefore(o, t.nextSibling),
                          Nt(i, Y),
                          this.initPreview(),
                          this.bind(),
                          (e.initialAspectRatio =
                            Math.max(0, e.initialAspectRatio) || NaN),
                          (e.aspectRatio = Math.max(0, e.aspectRatio) || NaN),
                          (e.viewMode =
                            Math.max(0, Math.min(3, Math.round(e.viewMode))) ||
                            0),
                          Ht(s, z),
                          e.guides ||
                            Ht(
                              s.getElementsByClassName("".concat(b, "-dashed")),
                              z,
                            ),
                          e.center ||
                            Ht(
                              s.getElementsByClassName("".concat(b, "-center")),
                              z,
                            ),
                          e.background && Ht(o, "".concat(b, "-bg")),
                          e.highlight || Ht(c, X),
                          e.cropBoxMovable && (Ht(c, S), Rt(c, j, y)),
                          e.cropBoxResizable ||
                            (Ht(
                              s.getElementsByClassName("".concat(b, "-line")),
                              z,
                            ),
                            Ht(
                              s.getElementsByClassName("".concat(b, "-point")),
                              z,
                            )),
                          this.render(),
                          (this.ready = !0),
                          this.setDragMode(e.dragMode),
                          e.autoCrop && this.crop(),
                          this.setData(e.data),
                          xt(e.ready) && It(t, et, e.ready, { once: !0 }),
                          Ut(t, et);
                      }
                    },
                  },
                  {
                    key: "unbuild",
                    value: function () {
                      if (this.ready) {
                        (this.ready = !1), this.unbind(), this.resetPreview();
                        var t = this.cropper.parentNode;
                        t && t.removeChild(this.cropper), Nt(this.element, z);
                      }
                    },
                  },
                  {
                    key: "uncreate",
                    value: function () {
                      this.ready
                        ? (this.unbuild(),
                          (this.ready = !1),
                          (this.cropped = !1))
                        : this.sizing
                          ? ((this.sizingImage.onload = null),
                            (this.sizing = !1),
                            (this.sized = !1))
                          : this.reloading
                            ? ((this.xhr.onabort = null), this.xhr.abort())
                            : this.image && this.stop();
                    },
                  },
                ],
                [
                  {
                    key: "noConflict",
                    value: function () {
                      return (window.Cropper = ge), t;
                    },
                  },
                  {
                    key: "setDefaults",
                    value: function (t) {
                      kt(pt, yt(t) && t);
                    },
                  },
                ],
              ),
              t
            );
          })();
        return kt(fe.prototype, ce, le, de, pe, ue, me), fe;
      })();
    },
  },
]);

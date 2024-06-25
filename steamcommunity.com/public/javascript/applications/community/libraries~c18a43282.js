/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [483],
  {
    54674: (e, t) => {
      var r,
        i = Symbol.for("react.element"),
        a = Symbol.for("react.portal"),
        n = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        o = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        m = Symbol.for("react.server_context"),
        u = Symbol.for("react.forward_ref"),
        d = Symbol.for("react.suspense"),
        B = Symbol.for("react.suspense_list"),
        b = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        _ = Symbol.for("react.offscreen");
      /**
       * @license React
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ function f(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case i:
              switch ((e = e.type)) {
                case n:
                case o:
                case s:
                case d:
                case B:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case m:
                    case c:
                    case u:
                    case y:
                    case b:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case a:
              return t;
          }
        }
      }
      (r = Symbol.for("react.module.reference")),
        (t.isForwardRef = function (e) {
          return f(e) === u;
        });
    },
    33928: (e, t, r) => {
      e.exports = r(54674);
    },
    58112: (e, t, r) => {
      r.d(t, { h: () => R });
      var i = r(98425),
        a = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      var n = void 0;
      function s() {
        return (
          void 0 === n &&
            (n = (function () {
              if (!a) return !1;
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
      function o(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
      }
      function l(e) {
        (this.target = e), (this.events = {});
      }
      (l.prototype.getEventHandlers = function (e, t) {
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
        (l.prototype.handleEvent = function (e, t, r) {
          var i = this.getEventHandlers(e, t);
          (i.handlers = i.nextHandlers),
            i.handlers.forEach(function (e) {
              e && e(r);
            });
        }),
        (l.prototype.add = function (e, t, r) {
          var i = this,
            a = this.getEventHandlers(e, r);
          o(a),
            0 === a.nextHandlers.length &&
              ((a.handleEvent = this.handleEvent.bind(this, e, r)),
              this.target.addEventListener(e, a.handleEvent, r)),
            a.nextHandlers.push(t);
          var n = !0;
          return function () {
            if (n) {
              (n = !1), o(a);
              var s = a.nextHandlers.indexOf(t);
              a.nextHandlers.splice(s, 1),
                0 === a.nextHandlers.length &&
                  (i.target &&
                    i.target.removeEventListener(e, a.handleEvent, r),
                  (a.handleEvent = void 0));
            }
          };
        });
      var c = "__consolidated_events_handlers__";
      function m(e, t, r, i) {
        e[c] || (e[c] = new l(e));
        var a = (function (e) {
          if (e) return s() ? e : !!e.capture;
        })(i);
        return e[c].add(t, r, a);
      }
      var u = r(47427),
        d = r(33928);
      function B(e, t) {
        var r,
          i =
            ((r = e),
            !isNaN(parseFloat(r)) && isFinite(r)
              ? parseFloat(r)
              : "px" === r.slice(-2)
                ? parseFloat(r.slice(0, -2))
                : void 0);
        if ("number" == typeof i) return i;
        var a = (function (e) {
          if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100;
        })(e);
        return "number" == typeof a ? a * t : void 0;
      }
      var b = "above",
        y = "inside",
        _ = "below",
        f = "invisible";
      function p(e) {
        return "string" == typeof e.type;
      }
      var w;
      var g = [];
      function z(e) {
        g.push(e),
          w ||
            (w = setTimeout(function () {
              var e;
              for (w = null; (e = g.shift()); ) e();
            }, 0));
        var t = !0;
        return function () {
          if (t) {
            t = !1;
            var r = g.indexOf(e);
            -1 !== r &&
              (g.splice(r, 1), !g.length && w && (clearTimeout(w), (w = null)));
          }
        };
      }
      var M = "undefined" != typeof window,
        F = {
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
        R = (function (e) {
          function t(t) {
            var r;
            return (
              ((r = e.call(this, t) || this).refElement = function (e) {
                r._ref = e;
              }),
              r
            );
          }
          (0, i.Z)(t, e);
          var a = t.prototype;
          return (
            (a.componentDidMount = function () {
              var e = this;
              M &&
                (this.cancelOnNextTick = z(function () {
                  e.cancelOnNextTick = null;
                  var t = e.props,
                    r = t.children;
                  t.debug;
                  !(function (e, t) {
                    if (e && !p(e) && !t)
                      throw new Error(
                        "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.",
                      );
                  })(r, e._ref),
                    (e._handleScroll = e._handleScroll.bind(e)),
                    (e.scrollableAncestor = e._findScrollableAncestor()),
                    (e.scrollEventListenerUnsubscribe = m(
                      e.scrollableAncestor,
                      "scroll",
                      e._handleScroll,
                      { passive: !0 },
                    )),
                    (e.resizeEventListenerUnsubscribe = m(
                      window,
                      "resize",
                      e._handleScroll,
                      { passive: !0 },
                    )),
                    e._handleScroll(null);
                }));
            }),
            (a.componentDidUpdate = function () {
              var e = this;
              M &&
                this.scrollableAncestor &&
                (this.cancelOnNextTick ||
                  (this.cancelOnNextTick = z(function () {
                    (e.cancelOnNextTick = null), e._handleScroll(null);
                  })));
            }),
            (a.componentWillUnmount = function () {
              M &&
                (this.scrollEventListenerUnsubscribe &&
                  this.scrollEventListenerUnsubscribe(),
                this.resizeEventListenerUnsubscribe &&
                  this.resizeEventListenerUnsubscribe(),
                this.cancelOnNextTick && this.cancelOnNextTick());
            }),
            (a._findScrollableAncestor = function () {
              var e = this.props,
                t = e.horizontal,
                i = e.scrollableAncestor;
              if (i)
                return (function (e) {
                  return "window" === e ? r.g.window : e;
                })(i);
              for (var a = this._ref; a.parentNode; ) {
                if ((a = a.parentNode) === document.body) return window;
                var n = window.getComputedStyle(a),
                  s =
                    (t
                      ? n.getPropertyValue("overflow-x")
                      : n.getPropertyValue("overflow-y")) ||
                    n.getPropertyValue("overflow");
                if ("auto" === s || "scroll" === s || "overlay" === s) return a;
              }
              return window;
            }),
            (a._handleScroll = function (e) {
              if (this._ref) {
                var t = this._getBounds(),
                  r = (function (e) {
                    return e.viewportBottom - e.viewportTop == 0
                      ? f
                      : (e.viewportTop <= e.waypointTop &&
                            e.waypointTop <= e.viewportBottom) ||
                          (e.viewportTop <= e.waypointBottom &&
                            e.waypointBottom <= e.viewportBottom) ||
                          (e.waypointTop <= e.viewportTop &&
                            e.viewportBottom <= e.waypointBottom)
                        ? y
                        : e.viewportBottom < e.waypointTop
                          ? _
                          : e.waypointTop < e.viewportTop
                            ? b
                            : f;
                  })(t),
                  i = this._previousPosition,
                  a = this.props,
                  n = (a.debug, a.onPositionChange),
                  s = a.onEnter,
                  o = a.onLeave,
                  l = a.fireOnRapidScroll;
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
                  n.call(this, c),
                    r === y ? s.call(this, c) : i === y && o.call(this, c),
                    l &&
                      ((i === _ && r === b) || (i === b && r === _)) &&
                      (s.call(this, {
                        currentPosition: y,
                        previousPosition: i,
                        event: e,
                        waypointTop: t.waypointTop,
                        waypointBottom: t.waypointBottom,
                        viewportTop: t.viewportTop,
                        viewportBottom: t.viewportBottom,
                      }),
                      o.call(this, {
                        currentPosition: r,
                        previousPosition: y,
                        event: e,
                        waypointTop: t.waypointTop,
                        waypointBottom: t.waypointBottom,
                        viewportTop: t.viewportTop,
                        viewportBottom: t.viewportBottom,
                      }));
                }
              }
            }),
            (a._getBounds = function () {
              var e,
                t,
                r = this.props,
                i = r.horizontal,
                a = (r.debug, this._ref.getBoundingClientRect()),
                n = a.left,
                s = a.top,
                o = a.right,
                l = a.bottom,
                c = i ? n : s,
                m = i ? o : l;
              this.scrollableAncestor === window
                ? ((e = i ? window.innerWidth : window.innerHeight), (t = 0))
                : ((e = i
                    ? this.scrollableAncestor.offsetWidth
                    : this.scrollableAncestor.offsetHeight),
                  (t = i
                    ? this.scrollableAncestor.getBoundingClientRect().left
                    : this.scrollableAncestor.getBoundingClientRect().top));
              var u = this.props,
                d = u.bottomOffset;
              return {
                waypointTop: c,
                waypointBottom: m,
                viewportTop: t + B(u.topOffset, e),
                viewportBottom: t + e - B(d, e),
              };
            }),
            (a.render = function () {
              var e = this,
                t = this.props.children;
              if (!t)
                return u.createElement("span", {
                  ref: this.refElement,
                  style: { fontSize: 0 },
                });
              if (p(t) || (0, d.isForwardRef)(t)) {
                return u.cloneElement(t, {
                  ref: function (r) {
                    e.refElement(r),
                      t.ref &&
                        ("function" == typeof t.ref
                          ? t.ref(r)
                          : (t.ref.current = r));
                  },
                });
              }
              return u.cloneElement(t, { innerRef: this.refElement });
            }),
            t
          );
        })(u.PureComponent);
      (R.above = b),
        (R.below = _),
        (R.inside = y),
        (R.invisible = f),
        (R.defaultProps = F),
        (R.displayName = "Waypoint");
    },
    19403: (e, t, r) => {
      r.d(t, {
        NO: () => l,
        iP: () => a,
        p8: () => o,
        pA: () => s,
        yp: () => i,
      });
      const i = [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "smalltext",
          "b",
          "u",
          "hr",
          "i",
          "img",
          "strike",
          "spoiler",
          "noparse",
          "url",
          "list",
          "olist",
          "quote",
          "pullquote",
          "code",
          "table",
          "tr",
          "td",
          "th",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "sticker",
          "price",
          "pricesavings",
          "trailer",
          "speaker",
          "doclink",
          "video",
          "vod",
          "youtubeorvideo",
          "giveawayeligible",
          "claimitem",
          "packagepurchaseable",
          "actiondialog",
          "uploadfilebutton",
          "docimg",
        ],
        a = [
          "h1",
          "h2",
          "h3",
          "b",
          "u",
          "i",
          "strike",
          "spoiler",
          "noparse",
          "url",
        ],
        n = [
          "img",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "video",
          "vod",
          "trailer",
          "youtubeorvideo",
          "docimg",
        ],
        s = i.filter((e) => -1 == n.indexOf(e));
      function o(e, t = null, r = " ") {
        let a = t?.join("|");
        a || (a = i.join("|") + "|\\*");
        const n = new RegExp("\\[(" + a + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
        return e.replace(n, r);
      }
      function l(e, t = null, r = "") {
        let a = t?.join("|");
        a || (a = i.join("|") + "|\\*");
        const n = "\\[\\/?(?:" + a + "){1,}.*?]";
        return e.replace(new RegExp(n, "gi"), r);
      }
    },
    89631: (e, t, r) => {
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
    25492: (e, t, r) => {
      r.d(t, { I3: () => c, yl: () => o });
      var i = r(10059),
        a = r(39087),
        n = r(79545);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.packageid || a.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  packageid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  country_code: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(o.M(), e, t);
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
            l.prototype.inventory_available || a.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  inventory_available: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  high_pending_orders: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(l.M(), e, t);
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
            (0, n.MD)(o, t),
            l,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        };
      })(c || (c = {}));
    },
    98255: (e, t, r) => {
      r.d(t, {
        Ew: () => v,
        GJ: () => w,
        Q4: () => N,
        cJ: () => F,
        d6: () => me,
        iM: () => oe,
      });
      var i = r(10059),
        a = r(39087),
        n = r(79545),
        s = r(38079),
        o = r(23722);
      const l = i.Message;
      class c extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.activation_code || a.aR(c.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  activation_code: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  purchase_platform: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  is_request_from_client: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_RegisterCDKey_Request";
        }
      }
      class m extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.transactionid || a.aR(m.M()),
            l.initialize(this, e, 0, -1, [18], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  transactionid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  packageid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  purchase_status: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  result_detail: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  transaction_time: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  payment_method: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  base_price: {
                    n: 7,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  total_discount: {
                    n: 8,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  tax: {
                    n: 9,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  shipping: {
                    n: 10,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  currency_code: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  country_code: {
                    n: 12,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_headline: {
                    n: 13,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_string: {
                    n: 14,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_link_text: {
                    n: 15,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_link_url: {
                    n: 16,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_appid: {
                    n: 17,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  line_items: { n: 18, c: u, r: !0, q: !0 },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo";
        }
      }
      class u extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.packageid || a.aR(u.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  packageid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  line_item_description: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo_LineItem";
        }
      }
      class d extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.purchase_result_details || a.aR(d.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  purchase_result_details: {
                    n: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  purchase_receipt_info: { n: 2, c: m },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_RegisterCDKey_Response";
        }
      }
      class B extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.language || a.aR(B.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Request";
        }
      }
      class b extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.tags || a.aR(b.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { tags: { n: 1, c: y, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response";
        }
      }
      class y extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.tagid || a.aR(y.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  tagid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response_Tag";
        }
      }
      class _ extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.language || a.aR(_.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  tagids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Request";
        }
      }
      class f extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.tags || a.aR(f.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { tags: { n: 1, c: p, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response";
        }
      }
      class p extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.tagid || a.aR(p.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  tagid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  english_name: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  name: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                  normalized_name: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response_Tag";
        }
      }
      class w extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.language || a.aR(w.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  have_version_hash: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Request";
        }
      }
      class g extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.version_hash || a.aR(g.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  version_hash: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  tags: { n: 2, c: z, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Response";
        }
      }
      class z extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.tagid || a.aR(z.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  tagid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Response_Tag";
        }
      }
      class M extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.os_win || a.aR(M.M()),
            l.initialize(this, e, 0, -1, [10, 16], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  os_win: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  os_mac: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                  os_linux: { n: 6, br: a.FE.readBool, bw: a.Xc.writeBool },
                  full_controller_support: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  native_steam_controller: {
                    n: 8,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_coming_soon: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  excluded_tagids: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  exclude_early_access: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  exclude_videos: {
                    n: 12,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  exclude_software: {
                    n: 13,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  exclude_dlc: { n: 14, br: a.FE.readBool, bw: a.Xc.writeBool },
                  exclude_soundtracks: {
                    n: 15,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  featured_tagids: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreDiscoveryQueueSettings";
        }
      }
      class F extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.queue_type || a.aR(F.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  queue_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  country_code: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  rebuild_queue: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  settings_changed: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  settings: { n: 5, c: M },
                  rebuild_queue_if_stale: {
                    n: 6,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  ignore_user_preferences: {
                    n: 8,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  no_experimental_results: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  experimental_cohort: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  debug_get_solr_query: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  store_page_filter: { n: 12, c: s._v },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Request";
        }
      }
      class R extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.appids || a.aR(R.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  country_code: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  settings: { n: 3, c: M },
                  skipped: { n: 4, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  exhausted: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                  experimental_cohort: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  debug_solr_query: {
                    n: 7,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Response";
        }
      }
      class h extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.queue_type || a.aR(h.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  queue_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  store_page_filter: { n: 2, c: s._v },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Request";
        }
      }
      class S extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.country_code || a.aR(S.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  country_code: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  settings: { n: 2, c: M },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Response";
        }
      }
      class v extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.queue_type || a.aR(v.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  queue_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  store_page_filter: { n: 3, c: s._v },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Request";
        }
      }
      class W extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
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
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Response";
        }
      }
      class T extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.appid || a.aR(T.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  store_appid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  beta_appid: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Request";
        }
      }
      class O extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.owned || a.aR(O.M()),
            l.initialize(this, e, 0, -1, [5, 6, 7, 8, 10], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  owned: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  wishlist: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  ignored: { n: 3, br: a.FE.readBool, bw: a.Xc.writeBool },
                  following: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  in_queues: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  queues_with_skip: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  queue_items_remaining: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                  queue_items_next_appid: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  temporarily_owned: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  queues: { n: 10, c: j, r: !0, q: !0 },
                  ignored_reason: {
                    n: 11,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  beta_status: { n: 12, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response";
        }
      }
      class j extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.type || a.aR(j.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  skipped: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  items_remaining: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  next_appid: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  experimental_cohort: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response_InQueue";
        }
      }
      class E extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.appid || a.aR(E.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  report_type: { n: 2, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  report: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_ReportApp_Request";
        }
      }
      class U extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new U();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_ReportApp_Response";
        }
      }
      class I extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.primary_language || a.aR(I.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  primary_language: {
                    n: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  secondary_languages: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  platform_windows: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  platform_mac: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  platform_linux: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  hide_store_broadcast: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  review_score_preference: {
                    n: 10,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  timestamp_content_descriptor_preferences_updated: {
                    n: 11,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  provide_deck_feedback: {
                    n: 12,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  additional_languages: {
                    n: 13,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = a.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserPreferences";
        }
      }
      class C extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.tags_to_exclude || a.aR(C.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { tags_to_exclude: { n: 1, c: X, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences";
        }
      }
      class X extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.tagid || a.aR(X.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  tagid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  timestamp_added: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = a.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences_Tag";
        }
      }
      class D extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Request";
        }
      }
      class k extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.preferences || a.aR(k.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  preferences: { n: 1, c: I },
                  tag_preferences: { n: 2, c: C },
                  content_descriptor_preferences: { n: 3, c: o.cF },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = a.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Response";
        }
      }
      class P extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.num_apps || a.aR(P.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  num_apps: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  num_top_friends: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = a.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Request";
        }
      }
      class x extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.trending_apps || a.aR(x.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: { trending_apps: { n: 1, c: A, r: !0, q: !0 } },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = a.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response";
        }
      }
      class A extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.appid || a.aR(A.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  steamids_top_friends: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint64String,
                    pbr: a.FE.readPackedUint64String,
                    bw: a.Xc.writeRepeatedUint64String,
                  },
                  total_friends: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData";
        }
      }
      class N extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.packages_to_reserve || a.aR(N.M()),
            l.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  packages_to_reserve: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  packages_to_unreserve: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  country_code: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = a.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UpdatePackageReservations_Request";
        }
      }
      class q extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.reservation_status || a.aR(q.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { reservation_status: { n: 1, c: o.vL, r: !0, q: !0 } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = a.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UpdatePackageReservations_Response";
        }
      }
      class G extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.edistributor || a.aR(G.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  edistributor: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  product_identifier: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  start_queue_position: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  rtime_estimated_notification: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  localization_token: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  accountid: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  rtime_created: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CReservationPositionMessage";
        }
      }
      class L extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.settings || a.aR(L.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { settings: { n: 1, c: G, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = a.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetReservationPositionMessage_Request";
        }
      }
      class V extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new V();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetReservationPositionMessage_Response";
        }
      }
      class Q extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.edistributor || a.aR(Q.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  edistributor: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  product_identifier: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  start_queue_position: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = a.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_DeleteReservationPositionMessage_Request";
        }
      }
      class H extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new H();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_DeleteReservationPositionMessage_Response";
        }
      }
      class $ extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetAllReservationPositionMessages_Request";
        }
      }
      class K extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.settings || a.aR(K.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: { settings: { n: 1, c: G, r: !0, q: !0 } },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = a.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(K.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetAllReservationPositionMessages_Response";
        }
      }
      class J extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
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
          return "CStore_ReloadAllReservationPositionMessages_Notification";
        }
      }
      class Z extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.accountid || a.aR(Z.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  browserid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  backfill_source: {
                    n: 3,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = a.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_MigratePartnerLinkTracking_Notification";
        }
      }
      class Y extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.appid || a.aR(Y.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  feedback: { n: 2, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = a.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(Y.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Request";
        }
      }
      class ee extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
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
          return "CSteamDeckCompatibility_SetFeedback_Response";
        }
      }
      class te extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.appid || a.aR(te.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = a.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(te.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Request";
        }
      }
      class re extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.prompt || a.aR(re.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  prompt: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  feedback_eligible: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  existing_feedback: {
                    n: 3,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = a.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(re.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Response";
        }
      }
      class ie extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.appid || a.aR(ie.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = a.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(ie.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetWishlistDemoEmailStatus_Request";
        }
      }
      class ae extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.can_fire || a.aR(ae.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  can_fire: {
                    n: 1,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  time_staged: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  demo_release_date: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = a.Bh(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(ae.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetWishlistDemoEmailStatus_Response";
        }
      }
      class ne extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.appid || a.aR(ne.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = a.Bh(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(ne.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_QueueWishlistDemoEmailToFire_Request";
        }
      }
      class se extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
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
          return "CStore_QueueWishlistDemoEmailToFire_Response";
        }
      }
      class oe extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.steamid || a.aR(oe.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  queue_type: { n: 2, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  store_page_filter: { n: 3, c: s._v },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = a.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(oe.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Request";
        }
      }
      class le extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.appids || a.aR(le.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = a.Bh(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(le.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Response";
        }
      }
      class ce extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.preferences || a.aR(ce.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  preferences: { n: 1, c: I },
                  tag_preferences: { n: 2, c: C },
                  content_descriptor_preferences: { n: 3, c: o.cF },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = a.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(ce.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_StorePreferencesChanged_Notification";
        }
      }
      var me, ue;
      !(function (e) {
        (e.RegisterCDKey = function (e, t) {
          return e.SendMsg("Store.RegisterCDKey#1", (0, n.MD)(c, t), d, {
            ePrivilege: 1,
          });
        }),
          (e.GetMostPopularTags = function (e, t) {
            return e.SendMsg("Store.GetMostPopularTags#1", (0, n.MD)(B, t), b, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetLocalizedNameForTags = function (e, t) {
            return e.SendMsg(
              "Store.GetLocalizedNameForTags#1",
              (0, n.MD)(_, t),
              f,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTagList = function (e, t) {
            return e.SendMsg("Store.GetTagList#1", (0, n.MD)(w, t), g, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetDiscoveryQueue = function (e, t) {
            return e.SendMsg("Store.GetDiscoveryQueue#1", (0, n.MD)(F, t), R, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetDiscoveryQueueSettings = function (e, t) {
            return e.SendMsg(
              "Store.GetDiscoveryQueueSettings#1",
              (0, n.MD)(h, t),
              S,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SkipDiscoveryQueueItem = function (e, t) {
            return e.SendMsg(
              "Store.SkipDiscoveryQueueItem#1",
              (0, n.MD)(v, t),
              W,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserGameInterestState = function (e, t) {
            return e.SendMsg(
              "Store.GetUserGameInterestState#1",
              (0, n.MD)(T, t),
              O,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDiscoveryQueueSkippedApps = function (e, t) {
            return e.SendMsg(
              "Store.GetDiscoveryQueueSkippedApps#1",
              (0, n.MD)(oe, t),
              le,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ReportApp = function (e, t) {
            return e.SendMsg("Store.ReportApp#1", (0, n.MD)(E, t), U, {
              ePrivilege: 3,
            });
          }),
          (e.GetStorePreferences = function (e, t) {
            return e.SendMsg(
              "Store.GetStorePreferences#1",
              (0, n.MD)(D, t),
              k,
              { ePrivilege: 1 },
            );
          }),
          (e.GetTrendingAppsAmongFriends = function (e, t) {
            return e.SendMsg(
              "Store.GetTrendingAppsAmongFriends#1",
              (0, n.MD)(P, t),
              x,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.MigratePartnerLinkTracking = function (e, t) {
            return e.SendNotification(
              "Store.MigratePartnerLinkTracking#1",
              (0, n.MD)(Z, t),
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePackageReservations = function (e, t) {
            return e.SendMsg(
              "Store.UpdatePackageReservations#1",
              (0, n.MD)(N, t),
              q,
              { ePrivilege: 1 },
            );
          }),
          (e.GetWishlistDemoEmailStatus = function (e, t) {
            return e.SendMsg(
              "Store.GetWishlistDemoEmailStatus#1",
              (0, n.MD)(ie, t),
              ae,
              { ePrivilege: 1 },
            );
          }),
          (e.QueueWishlistDemoEmailToFire = function (e, t) {
            return e.SendMsg(
              "Store.QueueWishlistDemoEmailToFire#1",
              (0, n.MD)(ne, t),
              se,
              { ePrivilege: 1 },
            );
          }),
          (e.SetReservationPositionMessage = function (e, t) {
            return e.SendMsg(
              "Store.SetReservationPositionMessage#1",
              (0, n.MD)(L, t),
              V,
              { ePrivilege: 4 },
            );
          }),
          (e.DeleteReservationPositionMessage = function (e, t) {
            return e.SendMsg(
              "Store.DeleteReservationPositionMessage#1",
              (0, n.MD)(Q, t),
              H,
              { ePrivilege: 4 },
            );
          }),
          (e.GetAllReservationPositionMessages = function (e, t) {
            return e.SendMsg(
              "Store.GetAllReservationPositionMessages#1",
              (0, n.MD)($, t),
              K,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.ReloadAllReservationPositionMessages = function (e, t) {
            return e.SendNotification(
              "Store.ReloadAllReservationPositionMessages#1",
              (0, n.MD)(J, t),
              { ePrivilege: 4 },
            );
          }),
          (e.SetCompatibilityFeedback = function (e, t) {
            return e.SendMsg(
              "Store.SetCompatibilityFeedback#1",
              (0, n.MD)(Y, t),
              ee,
              { ePrivilege: 1 },
            );
          }),
          (e.ShouldPromptForCompatibilityFeedback = function (e, t) {
            return e.SendMsg(
              "Store.ShouldPromptForCompatibilityFeedback#1",
              (0, n.MD)(te, t),
              re,
              { ePrivilege: 1 },
            );
          });
      })(me || (me = {})),
        (function (e) {
          e.NotifyStorePreferencesChangedHandler = {
            name: "StoreClient.NotifyStorePreferencesChanged#1",
            request: ce,
          };
        })(ue || (ue = {}));
    },
    37099: (e, t, r) => {
      r.d(t, { A_: () => B, Q_: () => d, kI: () => _ });
      var i = r(10059),
        a = r(39087),
        n = r(79545);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.video_id || a.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  video_id: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  client_cellid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Request";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.video_id || a.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  video_id: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  video_url: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Response";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.encryption_key || a.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  encryption_key: {
                    n: 1,
                    br: a.FE.readBytes,
                    bw: a.Xc.writeBytes,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_UnlockedH264_Notification";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.app_id || a.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  app_id: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  client_cellid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Request";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.app_id || a.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  app_id: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  opf_settings: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Response";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.app_id || a.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  app_id: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  playback_position_in_seconds: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  video_track_id: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  audio_track_id: {
                    n: 4,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  timedtext_track_id: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  last_modified: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  hide_from_watch_history: {
                    n: 7,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  hide_from_library: {
                    n: 8,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "VideoBookmark";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.bookmarks || a.aR(B.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { bookmarks: { n: 1, c: d, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_SetVideoBookmark_Notification";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.appids || a.aR(b.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  updated_since: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Request";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.bookmarks || a.aR(y.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { bookmarks: { n: 1, c: d, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Response";
        }
      }
      var _, f, p;
      !(function (e) {
        (e.ClientGetVideoURL = function (e, t) {
          return e.SendMsg("Video.ClientGetVideoURL#1", (0, n.MD)(o, t), l, {
            ePrivilege: 1,
          });
        }),
          (e.SetVideoBookmark = function (e, t) {
            return e.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, n.MD)(B, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetVideoBookmarks = function (e, t) {
            return e.SendMsg("Video.GetVideoBookmarks#1", (0, n.MD)(b, t), y, {
              ePrivilege: 1,
            });
          });
      })(_ || (_ = {})),
        (function (e) {
          e.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: c,
          };
        })(f || (f = {})),
        (function (e) {
          e.ClientGetOPFSettings = function (e, t) {
            return e.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, n.MD)(m, t),
              u,
              { ePrivilege: 1 },
            );
          };
        })(p || (p = {}));
    },
  },
]);

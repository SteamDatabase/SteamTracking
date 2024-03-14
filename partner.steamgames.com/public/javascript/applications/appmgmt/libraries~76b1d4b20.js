/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6739],
  {
    54674: (e, t) => {
      var r,
        i = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        a = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        o = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        u = Symbol.for("react.server_context"),
        d = Symbol.for("react.forward_ref"),
        m = Symbol.for("react.suspense"),
        p = Symbol.for("react.suspense_list"),
        f = Symbol.for("react.memo"),
        B = Symbol.for("react.lazy"),
        y = Symbol.for("react.offscreen");
      /**
       * @license React
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ function b(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case i:
              switch ((e = e.type)) {
                case a:
                case o:
                case s:
                case m:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case c:
                    case d:
                    case B:
                    case f:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case n:
              return t;
          }
        }
      }
      (r = Symbol.for("react.module.reference")),
        (t.isForwardRef = function (e) {
          return b(e) === d;
        });
    },
    33928: (e, t, r) => {
      e.exports = r(54674);
    },
    58112: (e, t, r) => {
      r.d(t, { h: () => M });
      var i = r(98425),
        n = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      var a = void 0;
      function s() {
        return (
          void 0 === a &&
            (a = (function () {
              if (!n) return !1;
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
          a
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
            n = this.getEventHandlers(e, r);
          o(n),
            0 === n.nextHandlers.length &&
              ((n.handleEvent = this.handleEvent.bind(this, e, r)),
              this.target.addEventListener(e, n.handleEvent, r)),
            n.nextHandlers.push(t);
          var a = !0;
          return function () {
            if (a) {
              (a = !1), o(n);
              var s = n.nextHandlers.indexOf(t);
              n.nextHandlers.splice(s, 1),
                0 === n.nextHandlers.length &&
                  (i.target &&
                    i.target.removeEventListener(e, n.handleEvent, r),
                  (n.handleEvent = void 0));
            }
          };
        });
      var c = "__consolidated_events_handlers__";
      function u(e, t, r, i) {
        e[c] || (e[c] = new l(e));
        var n = (function (e) {
          if (e) return s() ? e : !!e.capture;
        })(i);
        return e[c].add(t, r, n);
      }
      var d = r(47427),
        m = r(33928);
      function p(e, t) {
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
      var f = "above",
        B = "inside",
        y = "below",
        b = "invisible";
      function v(e) {
        return "string" == typeof e.type;
      }
      var w;
      var h = [];
      function _(e) {
        h.push(e),
          w ||
            (w = setTimeout(function () {
              var e;
              for (w = null; (e = h.shift()); ) e();
            }, 0));
        var t = !0;
        return function () {
          if (t) {
            t = !1;
            var r = h.indexOf(e);
            -1 !== r &&
              (h.splice(r, 1), !h.length && w && (clearTimeout(w), (w = null)));
          }
        };
      }
      var g = "undefined" != typeof window,
        z = {
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
        M = (function (e) {
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
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              var e = this;
              g &&
                (this.cancelOnNextTick = _(function () {
                  e.cancelOnNextTick = null;
                  var t = e.props,
                    r = t.children;
                  t.debug;
                  !(function (e, t) {
                    if (e && !v(e) && !t)
                      throw new Error(
                        "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.",
                      );
                  })(r, e._ref),
                    (e._handleScroll = e._handleScroll.bind(e)),
                    (e.scrollableAncestor = e._findScrollableAncestor()),
                    (e.scrollEventListenerUnsubscribe = u(
                      e.scrollableAncestor,
                      "scroll",
                      e._handleScroll,
                      { passive: !0 },
                    )),
                    (e.resizeEventListenerUnsubscribe = u(
                      window,
                      "resize",
                      e._handleScroll,
                      { passive: !0 },
                    )),
                    e._handleScroll(null);
                }));
            }),
            (n.componentDidUpdate = function () {
              var e = this;
              g &&
                this.scrollableAncestor &&
                (this.cancelOnNextTick ||
                  (this.cancelOnNextTick = _(function () {
                    (e.cancelOnNextTick = null), e._handleScroll(null);
                  })));
            }),
            (n.componentWillUnmount = function () {
              g &&
                (this.scrollEventListenerUnsubscribe &&
                  this.scrollEventListenerUnsubscribe(),
                this.resizeEventListenerUnsubscribe &&
                  this.resizeEventListenerUnsubscribe(),
                this.cancelOnNextTick && this.cancelOnNextTick());
            }),
            (n._findScrollableAncestor = function () {
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
                if ("auto" === s || "scroll" === s || "overlay" === s) return n;
              }
              return window;
            }),
            (n._handleScroll = function (e) {
              if (this._ref) {
                var t = this._getBounds(),
                  r = (function (e) {
                    return e.viewportBottom - e.viewportTop == 0
                      ? b
                      : (e.viewportTop <= e.waypointTop &&
                            e.waypointTop <= e.viewportBottom) ||
                          (e.viewportTop <= e.waypointBottom &&
                            e.waypointBottom <= e.viewportBottom) ||
                          (e.waypointTop <= e.viewportTop &&
                            e.viewportBottom <= e.waypointBottom)
                        ? B
                        : e.viewportBottom < e.waypointTop
                          ? y
                          : e.waypointTop < e.viewportTop
                            ? f
                            : b;
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
                    r === B ? s.call(this, c) : i === B && o.call(this, c),
                    l &&
                      ((i === y && r === f) || (i === f && r === y)) &&
                      (s.call(this, {
                        currentPosition: B,
                        previousPosition: i,
                        event: e,
                        waypointTop: t.waypointTop,
                        waypointBottom: t.waypointBottom,
                        viewportTop: t.viewportTop,
                        viewportBottom: t.viewportBottom,
                      }),
                      o.call(this, {
                        currentPosition: r,
                        previousPosition: B,
                        event: e,
                        waypointTop: t.waypointTop,
                        waypointBottom: t.waypointBottom,
                        viewportTop: t.viewportTop,
                        viewportBottom: t.viewportBottom,
                      }));
                }
              }
            }),
            (n._getBounds = function () {
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
                ? ((e = i ? window.innerWidth : window.innerHeight), (t = 0))
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
                viewportTop: t + p(d.topOffset, e),
                viewportBottom: t + e - p(m, e),
              };
            }),
            (n.render = function () {
              var e = this,
                t = this.props.children;
              if (!t)
                return d.createElement("span", {
                  ref: this.refElement,
                  style: { fontSize: 0 },
                });
              if (v(t) || (0, m.isForwardRef)(t)) {
                return d.cloneElement(t, {
                  ref: function (r) {
                    e.refElement(r),
                      t.ref &&
                        ("function" == typeof t.ref
                          ? t.ref(r)
                          : (t.ref.current = r));
                  },
                });
              }
              return d.cloneElement(t, { innerRef: this.refElement });
            }),
            t
          );
        })(d.PureComponent);
      (M.above = f),
        (M.below = y),
        (M.inside = B),
        (M.invisible = b),
        (M.defaultProps = z),
        (M.displayName = "Waypoint");
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
        n = r(39087),
        a = r(79545);
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
    37099: (e, t, r) => {
      r.d(t, { A_: () => p, Q_: () => m, kI: () => y });
      var i = r(10059),
        n = r(39087),
        a = r(79545);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.video_id || n.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
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
          return "CVideo_ClientGetVideoURL_Request";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.video_id || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
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
          return "CVideo_ClientGetVideoURL_Response";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.encryption_key || n.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  encryption_key: {
                    n: 1,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
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
          return "CVideo_UnlockedH264_Notification";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.app_id || n.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  app_id: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  client_cellid: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Request";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.app_id || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  app_id: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  opf_settings: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
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
          return "CFovasVideo_ClientGetOPFSettings_Response";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.app_id || n.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
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
          return "VideoBookmark";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.bookmarks || n.aR(p.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { bookmarks: { n: 1, c: m, r: !0, q: !0 } },
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
          return "CVideo_SetVideoBookmark_Notification";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.appids || n.aR(f.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
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
          return "CVideo_GetVideoBookmarks_Request";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.bookmarks || n.aR(B.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { bookmarks: { n: 1, c: m, r: !0, q: !0 } },
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
          return "CVideo_GetVideoBookmarks_Response";
        }
      }
      var y, b, v;
      !(function (e) {
        (e.ClientGetVideoURL = function (e, t) {
          return e.SendMsg("Video.ClientGetVideoURL#1", (0, a.MD)(o, t), l, {
            ePrivilege: 1,
          });
        }),
          (e.SetVideoBookmark = function (e, t) {
            return e.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, a.MD)(p, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetVideoBookmarks = function (e, t) {
            return e.SendMsg("Video.GetVideoBookmarks#1", (0, a.MD)(f, t), B, {
              ePrivilege: 1,
            });
          });
      })(y || (y = {})),
        (function (e) {
          e.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: c,
          };
        })(b || (b = {})),
        (function (e) {
          e.ClientGetOPFSettings = function (e, t) {
            return e.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, a.MD)(u, t),
              d,
              { ePrivilege: 1 },
            );
          };
        })(v || (v = {}));
    },
  },
]);

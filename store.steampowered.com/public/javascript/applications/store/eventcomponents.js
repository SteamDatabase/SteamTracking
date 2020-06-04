/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    "+ZmX": function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "Init", function() {
          return r;
        });
      var n = a("5y3B"),
        A = a.n(n);
      function r() {
        var r, o, i, s, e, l, c, d;
        (window.ZdogSpookyHouse = {
          wobbling: !0,
          sceneY: 12,
          hillScale: 0.75,
          color: {
            deep: "hsl(230, 60%, 40%)",
            dark: "hsl(230, 60%, 50%)",
            darker: "#2a3a81",
            medium: "hsl(230, 60%, 60%)",
            light: "hsl(230, 60%, 70%)",
            pale: "#6D77AD",
            highlight: "#FFB",
            fog: "hsla(230, 60%, 80%, 0.4)",
            paintjob: "#d59c55"
          }
        }),
          (ZdogSpookyHouse.addBones = function(e) {
            var t = A.a.TAU,
              a = ZdogSpookyHouse.color.light,
              n = new A.a.Shape({
                addTo: e.addTo,
                path: [{ x: -2 }, { x: 2 }],
                closed: !1,
                stroke: 1.3,
                color: a,
                translate: { y: 12, z: -30 },
                rotate: { y: t / 16, z: t / 16 }
              }),
              r = n.copy({
                translate: { x: -6, y: 15, z: -28 },
                rotate: { y: -t / 8, z: t / 8 }
              }),
              o = n.copy({
                addTo: r,
                path: [{ x: 1, y: -1 }, { x: 0, y: 0 }, { x: 1, y: 1 }],
                closed: !1,
                rotate: null,
                translate: { x: 2 }
              });
            r.copyGraph({
              translate: { x: 1, y: 6, z: -31 },
              rotate: { z: -t / 8, x: t / 8 },
              scale: 0.75
            }),
              n.copy({
                scale: 0.25,
                translate: { y: 18, z: -26 },
                rotate: { z: t / 8 }
              });
            var i = r.copyGraph({
              translate: { x: -9, y: 10, z: -30 },
              rotate: { z: -t / 16 }
            });
            o.copy({ addTo: i, scale: { x: -1 }, translate: { x: -2 } }),
              n.copy({
                scale: 0.4,
                translate: { x: -12, y: 14, z: -28 },
                rotate: { z: -t / 16 }
              });
          }),
          (ZdogSpookyHouse.addCarRoad = function(e) {
            for (
              var t = ZdogSpookyHouse.color,
                a = A.a.TAU,
                n = 120,
                r = (125 * a) / 40 / 2,
                o = [
                  { x: 1 - r, z: 5 },
                  { x: r - 1, z: 5 },
                  { x: r, z: -5 },
                  { x: -r, z: -5 }
                ],
                i = 0;
              i < 40;
              i++
            ) {
              var s = (i / 40) * a;
              new A.a.Shape({
                addTo: e.addTo,
                path: o,
                translate: { x: Math.cos(s) * n, z: Math.sin(s) * n },
                rotate: { y: s + a / 4 },
                fill: !0,
                stroke: 2,
                color: t.deep
              });
            }
            var l = -2.5,
              c = 2.5,
              d = {
                grill: new A.a.Vector({ x: -5, y: -1, z: c }),
                hood: new A.a.Vector({ x: -4, y: l, z: c }),
                wipers: new A.a.Vector({ x: -2, y: l, z: c }),
                windshield: new A.a.Vector({ x: -1, y: -4.5, z: 1.5 }),
                roof: new A.a.Vector({ x: 2, y: -4.5, z: 1.5 }),
                trunk: new A.a.Vector({ x: 4, y: l, z: c }),
                bumper: new A.a.Vector({ x: 5, y: -1, z: c })
              },
              p = {};
            for (var u in d) {
              var m = d[u];
              p[u] = m.copy().multiply({ z: -1 });
            }
            var h = new A.a.Anchor({ addTo: e.addTo }),
              v = new A.a.Group({
                addTo: h,
                translate: { z: 120, y: -6 },
                scale: 1.2,
                updateSort: !0
              }),
              _ = new A.a.Shape({
                addTo: v,
                path: [
                  d.grill,
                  d.hood,
                  d.wipers,
                  d.windshield,
                  d.roof,
                  d.trunk,
                  d.bumper
                ],
                stroke: 2,
                fill: !0,
                color: t.paintjob
              });
            function b(e, t, a) {
              return _.copy({
                path: [d[e], d[t], p[t], p[e]],
                color: a || _.color
              });
            }
            _.copy({ scale: { z: -1 } }),
              b("grill", "hood"),
              b("hood", "wipers"),
              b("wipers", "windshield", t.medium),
              b("windshield", "roof"),
              b("roof", "trunk", t.medium),
              b("trunk", "bumper");
            var g = new A.a.Vector({ x: -3.5, z: c, y: -1 }),
              y = new A.a.Ellipse({
                addTo: v,
                diameter: 1.8,
                translate: g,
                stroke: 2,
                fill: !0,
                color: t.paintjob
              });
            return (
              y.copy({ translate: g.copy().multiply({ x: -1 }) }),
              y.copy({ translate: g.copy().multiply({ z: -1 }) }),
              y.copy({ translate: g.copy().multiply({ x: -1, z: -1 }) }),
              {
                animate: function(e) {
                  (h.rotate.y = A.a.easeInOut((e / 4) % 1) * a + (3 * a) / 8),
                    (v.rotate.x = 0.1 * Math.sin(e * a * 2)),
                    (v.translate.y = 2 * Math.sin(e * a * 1.5) - 6);
                }
              }
            );
          }),
          (ZdogSpookyHouse.addCats = function(e) {
            var t = A.a.TAU,
              a = ZdogSpookyHouse.color,
              n = 1.1,
              r = new A.a.Anchor({
                addTo: e.addTo,
                translate: { z: -22, x: -28, y: -2 },
                scale: n,
                rotate: { y: t / 8 }
              });
            new A.a.Cone({
              addTo: r,
              diameter: 1,
              length: 3,
              rotate: { x: t / 4 },
              stroke: 4.4,
              color: a.deep
            });
            var o = new A.a.Shape({
              addTo: r,
              translate: { y: -4 },
              stroke: 5.5,
              color: a.deep
            });
            new A.a.Shape({
              addTo: o,
              translate: { x: -1, z: 1 },
              stroke: 0.9 * n,
              color: a.highlight
            }).copy({ translate: { x: 1, z: 1 } });
            var i = { x: -1, y: -1 },
              s = { x: 1, y: 1, z: -1 },
              l = new A.a.Anchor({
                addTo: o,
                scale: new A.a.Vector({ x: 1, y: 1, z: 1.25 })
              });
            new A.a.Shape({
              addTo: l,
              path: [{ x: -1, y: 1 }, i, s],
              translate: { x: -0.96, y: -1.5, z: 0 },
              stroke: 0.66,
              fill: !0,
              color: a.deep
            }).copy({ path: [i, { x: 1, y: 1 }, s] }),
              l.copyGraph({ scale: l.scale.copy().multiply({ x: -1 }) }),
              new A.a.Shape({
                addTo: r,
                path: [
                  {},
                  {
                    bezier: [
                      { x: 4, y: 0, z: -4 },
                      { x: 0, y: -3, z: 0 },
                      { x: 3, y: -5, z: -1 }
                    ]
                  }
                ],
                closed: !1,
                translate: { z: -1 },
                stroke: 0,
                color: a.deep
              }),
              r.copyGraph({
                translate: { z: -6, x: -42, y: -15 },
                scale: n,
                rotate: { y: t / 4 }
              }),
              r.copyGraph({
                translate: { z: -30, x: -30, y: -2 },
                scale: n,
                rotate: { y: t / 4 }
              });
          }),
          (ZdogSpookyHouse.addFogMonster = function(e) {
            for (
              var t = A.a.TAU,
                a = ZdogSpookyHouse.color,
                r = new A.a.Anchor(e),
                o = (4 * t) / 8,
                i = [],
                n = 0;
              n < 74;
              n++
            ) {
              var s = n / 74,
                l = s * o,
                c = new A.a.Shape({
                  addTo: r,
                  path: [{}, { x: ((54 * t) / 74) * 0.8 }],
                  stroke: 22 + 8 * -Math.cos((t / 8) * (3 + 5 * s)),
                  translate: {
                    x: 54 * Math.sin(l),
                    z: 54 * Math.cos(l),
                    y: 6 * Math.sin(4 * l)
                  },
                  rotate: { y: s * -o },
                  color: a.fog
                });
              i.push(c);
            }
            return (
              new A.a.Shape({
                addTo: i[0],
                translate: { x: -10, z: 8 },
                color: a.deep,
                stroke: 3.5
              }).copy({ translate: { x: -10, z: -8 } }),
              new A.a.Ellipse({
                addTo: i[0],
                translate: { x: -10, y: 4 },
                quarters: 2,
                rotate: { z: t / 4, y: t / 4 },
                closed: !0,
                diameter: 8,
                stroke: !1,
                fill: !0,
                color: a.deep
              }),
              {
                animate: function(e) {
                  var n = (r.rotate.y = (e * t) / 6);
                  i.forEach(function(e, t) {
                    var a = (t / 74) * o;
                    e.translate.y = 6 * Math.sin(4 * (a - n));
                  });
                }
              }
            );
          }),
          (ZdogSpookyHouse.addHouse = function(e) {
            var i = A.a.TAU,
              s = ZdogSpookyHouse.color,
              l = [],
              c = [];
            function t(e) {
              l.push(e);
            }
            function a(e) {
              c.push(e);
            }
            var n = new A.a.Anchor({
                addTo: e.addTo,
                translate: { x: 0, y: -8, z: -6 }
              }),
              r = {
                addTo: n,
                width: 12,
                height: 12,
                stroke: e.stroke,
                fill: !0,
                backface: s.deep
              },
              o = Object.assign({ color: s.light }, r),
              d = new A.a.Group({ addTo: n, translate: { z: 24 } });
            a(new A.a.Rect(Object.assign({}, o, { addTo: d }))),
              new A.a.Rect({
                addTo: d,
                width: 6,
                height: 8,
                translate: { y: 2 },
                color: s.dark,
                fill: !0,
                stroke: !1
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({ translate: { y: -12, z: 24 } }, o),
                pane: s.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({ translate: { y: -24, z: 24 } }, o),
                pane: s.highlight,
                wallRectCallback: a
              });
            var p = Object.assign(
                { color: s.medium, rotate: { y: -i / 4 } },
                r
              ),
              u = Object.assign({ color: s.medium, rotate: { y: i / 4 } }, r),
              m = new A.a.Rect(
                Object.assign({}, p, { translate: { x: 6, z: 18 } })
              );
            t(m),
              t(m.copy({ translate: { x: 6, y: -12, z: 18 } })),
              t(m.copy({ translate: { x: 6, y: -24, z: 18 } }));
            var h = m.copy({
              translate: { x: -6, z: 18 },
              rotate: { y: i / 4 }
            });
            t(h),
              t(h.copy({ translate: { x: -6, y: -12, z: 18 } })),
              t(h.copy({ translate: { x: -6, y: -24, z: 18 } }));
            var v = new A.a.Anchor({ addTo: n, translate: { y: -36, z: 18 } }),
              _ = new A.a.Shape({
                addTo: v,
                path: [
                  { x: -8, y: 6 },
                  { x: 8, y: 6 },
                  { x: 4, y: -6, z: -4 },
                  { x: -4, y: -6, z: -4 }
                ],
                translate: { z: 8 },
                stroke: e.stroke,
                fill: !0,
                color: s.dark
              });
            _.copy({ rotate: { y: i / 4 }, translate: { x: -8 } }),
              _.copy({
                rotate: { y: i / 2 },
                translate: { z: -8 },
                color: s.deep
              }),
              _.copy({
                rotate: { y: (3 * i) / 4 },
                translate: { x: 8 },
                color: s.deep
              }),
              new A.a.Rect({
                addTo: v,
                width: 8,
                height: 8,
                rotate: { x: -i / 4 },
                translate: { y: -6 },
                stroke: e.stroke,
                fill: !0,
                color: s.dark
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, o, { translate: { x: 12, z: 12 } }),
                pane: s.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, o, {
                  translate: { x: 12, y: -12, z: 12 }
                }),
                pane: s.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, o, { translate: { x: -12, z: 12 } }),
                pane: s.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, o, {
                  translate: { x: -12, y: -12, z: 12 }
                }),
                pane: s.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, p, { translate: { x: 18, z: 6 } }),
                pane: s.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, p, {
                  translate: { x: 18, y: -12, z: 6 }
                }),
                pane: s.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, p, { translate: { x: 18, z: -6 } }),
                pane: s.dark,
                wallRectCallback: t
              }),
              t(m.copy({ width: 6, translate: { x: 18, y: -12, z: -3 } }));
            var b = m.copy({
                width: 6,
                translate: { x: 15, z: -12 },
                rotate: { y: i / 2 },
                color: s.dark
              }),
              g = new A.a.Shape({
                addTo: n,
                path: [
                  { x: -4, y: 12 },
                  { x: -4, y: -6 },
                  { arc: [{ x: -4, y: -10 }, { x: 0, y: -10 }] },
                  { arc: [{ x: 4, y: -10 }, { x: 4, y: -6 }] },
                  { x: 4, y: 12 },
                  { x: 5, y: 12 },
                  { x: 5, y: -12 },
                  { x: -5, y: -12 },
                  { x: -5, y: 12 }
                ],
                translate: { x: 7, y: -6, z: -12 },
                stroke: e.stroke,
                color: s.dark,
                fill: !0
              });
            new A.a.Shape({
              addTo: g,
              path: [
                { move: { x: -4, y: -6 } },
                { line: { x: 4, y: -6 } },
                { move: { x: -4, y: 0 } },
                { line: { x: 4, y: 0 } },
                { move: { x: -4, y: 6 } },
                { line: { x: 4, y: 6 } },
                { move: { x: 0, y: -11 } },
                { line: { x: 0, y: 12 } }
              ],
              closed: !1,
              stroke: 0.2,
              color: s.dark
            }),
              g.copyGraph({ translate: { x: -3, y: -6, z: -12 } }),
              g.copyGraph({ translate: { x: -13, y: -6, z: -12 } }),
              b.copy({
                width: 36,
                height: 3,
                translate: { x: 0, y: 4.5, z: -12 },
                color: s.dark
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, u, { translate: { x: -18, z: -6 } }),
                pane: s.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, u, {
                  translate: { x: -18, y: -12, z: -6 }
                }),
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, u, { translate: { x: -18, z: 6 } }),
                pane: s.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, u, {
                  translate: { x: -24, y: -12, z: 6 }
                }),
                pane: s.highlight,
                wallRectCallback: t
              }),
              new A.a.Rect({
                addTo: n,
                width: 12,
                height: 6,
                translate: { x: -21, y: -6, z: 6 },
                stroke: e.stroke,
                fill: !0,
                color: s.deep,
                rotate: { x: i / 4, z: i / 4 }
              });
            var y = b.copy({
              width: 6,
              rotate: null,
              translate: { x: -21, y: -12, z: 12 },
              color: s.light
            });
            a(y),
              b.copy({ width: 6, translate: { x: -21, y: -12 } }),
              b.copy({
                width: 12,
                height: 18,
                translate: { x: -6, y: -27, z: -18 }
              }),
              new A.a.Rect({
                addTo: n,
                width: 12,
                height: 6,
                translate: { x: 0, y: -33, z: -12 },
                rotate: { y: i / 4 },
                stroke: e.stroke,
                fill: !0,
                color: s.medium
              }),
              new A.a.Shape({
                addTo: n,
                path: [
                  { z: 2, y: -3 },
                  { z: -6, y: -3 },
                  { z: -6, y: 9 },
                  { z: -2, y: 9 }
                ],
                translate: { y: -27, z: -12 },
                stroke: e.stroke,
                fill: !0,
                color: s.medium
              }),
              h.copy({ height: 18, translate: { x: -12, y: -27, z: -12 } }),
              y.copy({
                height: 6,
                width: 12,
                translate: { x: -6, y: -33, z: -6 }
              }),
              new A.a.Rect({
                addTo: n,
                width: 12,
                height: 6,
                translate: { x: -6, y: -18, z: -15 },
                rotate: { x: i / 4 },
                stroke: e.stroke,
                fill: !0,
                color: s.deep
              }),
              v.copyGraph({ translate: { x: -6, y: -42, z: -12 } });
            var E = new A.a.Anchor({
                addTo: n,
                translate: { x: 18, y: -18, z: -12 }
              }),
              S = new A.a.Group({ addTo: E });
            new A.a.Cylinder({
              addTo: S,
              diameter: 12,
              length: 24,
              color: s.medium,
              backface: s.deep,
              rotate: { x: i / 4 },
              stroke: !1
            }),
              new A.a.Cone({
                addTo: E,
                diameter: 16,
                length: 16,
                translate: { y: -12 },
                rotate: { x: i / 4 },
                color: s.deep,
                stroke: !1
              }),
              new A.a.Rect({
                addTo: S,
                width: 2,
                height: 6,
                translate: { x: 5, y: -6 },
                rotate: { y: -i / 4 },
                fill: !0,
                stroke: !1,
                color: s.dark,
                backface: !1
              }).copy({ translate: { y: 6, z: -5 }, rotate: { y: i / 2 } }),
              E.copyGraph({
                translate: { x: -18, y: -30, z: -6 },
                rotate: { y: -i / 4 },
                scale: { x: -1 }
              });
            var f = new A.a.Shape({
              addTo: n,
              path: [
                { x: -6, y: 6 },
                { x: 8, y: 6 },
                { x: 4, y: -6, z: -4 },
                { x: -6, y: -6, z: -4 }
              ],
              translate: { x: 12, y: -24, z: 14 },
              stroke: e.stroke,
              fill: !0,
              color: s.dark
            });
            f.copy({
              scale: { x: -1 },
              translate: { x: 20, y: -24, z: 6 },
              rotate: { y: -i / 4 },
              color: s.deep
            }),
              f.copy({
                scale: { x: -1 },
                translate: { x: -18, y: -24, z: 14 }
              }),
              f.copy({
                translate: { x: -26, y: -24, z: 6 },
                rotate: { y: i / 4 }
              });
            var O = new A.a.Shape({
              addTo: n,
              path: [
                { x: -3, y: 6 },
                { x: 3, y: 6 },
                { x: 3, y: -6, z: -4 },
                { x: -3, y: -6, z: -4 }
              ],
              translate: { x: -9, y: -24, z: 14 },
              stroke: e.stroke,
              fill: !0,
              color: s.dark
            });
            O.copy({
              rotate: { y: -i / 4 },
              translate: { x: 20, y: -24, z: -3 },
              color: s.deep
            }),
              O.copy({
                rotate: { y: -i / 2 },
                translate: { x: 9, y: -24, z: -14 },
                color: s.deep
              }),
              O.copy({
                rotate: { y: -i / 2 },
                translate: { x: 3, y: -24, z: -14 },
                color: s.deep
              });
            var C = new A.a.Anchor({ addTo: n, translate: { y: -30 } }),
              T = new A.a.Rect({
                addTo: C,
                width: 12,
                height: 10,
                rotate: { x: -i / 4 },
                translate: { z: 5 },
                stroke: e.stroke,
                fill: !0,
                color: s.dark
              });
            T.copy({ width: 10, translate: { x: 11, z: 5 } }),
              T.copy({ width: 10, translate: { x: 11, z: -5 } }),
              T.copy({ translate: { x: -12, z: 5 } }),
              T.copy({ width: 4, translate: { x: -20, z: 5 } }),
              T.copy({ width: 6, translate: { x: 3, z: -5 } }),
              T.copy({ height: 6, translate: { x: -6, z: -3 } });
            var w = new A.a.Anchor({ addTo: n, translate: { y: 2 } }),
              I = new A.a.Anchor({ addTo: w, translate: { x: 9, z: 30 } });
            new A.a.Shape({
              addTo: I,
              path: [
                { x: -3, y: 0 },
                { arc: [{ x: -3, y: -3 }, { x: 0, y: -3 }] },
                { arc: [{ x: 3, y: -3 }, { x: 3, y: 0 }] },
                { x: 3, y: -3 },
                { x: -3, y: -3 }
              ],
              translate: { y: -3 },
              fill: !0,
              stroke: 1,
              color: s.deep
            });
            var k = new A.a.Rect({
              addTo: I,
              width: 6,
              height: 10,
              translate: { y: -1 },
              stroke: 1,
              color: s.deep
            });
            k.copy({ height: 4, translate: { y: 2 } }),
              k.copy({ width: 2, height: 4, translate: { y: 2 } }),
              I.copyGraph({ translate: { x: 15, z: 30 } }),
              I.copyGraph({ translate: { x: 21, z: 30 } }),
              I.copyGraph({ translate: { x: -9, z: 30 } });
            var D = I.copyGraph({
              translate: { x: 24, z: 27 },
              rotate: { y: -i / 4 }
            });
            D.copyGraph({ translate: { x: 24, z: 21 } }),
              D.copyGraph({ translate: { x: 24, z: 15 } }),
              D.copyGraph({ translate: { x: 24, z: 9 } }),
              D.copyGraph({ translate: { x: 24, z: 3 } }),
              I.copyGraph({
                translate: { x: -12, z: 27 },
                rotate: { y: i / 4 }
              }).copyGraph({ translate: { x: -12, z: 21 } });
            var j = new A.a.Shape({
              addTo: n,
              path: [
                { x: -12, y: 2 },
                { x: 6, y: 2 },
                { x: 6, y: 0, z: -6 },
                { x: -6, y: 0, z: -6 }
              ],
              translate: { y: -6, z: 30 },
              fill: !0,
              stroke: e.stroke,
              color: s.dark
            });
            return (
              j.copy({
                path: [
                  { x: 24, y: 2 },
                  { x: 6, y: 2 },
                  { x: 6, y: 0, z: -6 },
                  { x: 18, y: 0, z: -6 }
                ]
              }),
              j.copy({
                path: [
                  { x: 18, y: 0, z: -6 },
                  { x: 24, y: 2 },
                  { x: 24, y: 2, z: -18 },
                  { x: 18, y: 0, z: -18 }
                ],
                color: s.deep
              }),
              j.copy({
                path: [
                  { x: 24, y: 2, z: -18 },
                  { x: 18, y: 0, z: -18 },
                  { x: 18, y: 0, z: -30 },
                  { x: 24, y: 2, z: -30 }
                ],
                color: s.deep
              }),
              j.copy({
                path: [
                  { x: -6, y: 0, z: -6 },
                  { x: -12, y: 2 },
                  { x: -12, y: 2, z: -12 },
                  { x: -6, y: 0, z: -12 }
                ]
              }),
              new A.a.Rect({
                addTo: n,
                width: 12,
                height: 12,
                translate: { x: 12, y: -6, z: 18 },
                rotate: { x: -i / 4 },
                fill: !0,
                stroke: e.stroke,
                color: s.dark
              }),
              {
                shape: n,
                animate: function(e, t) {
                  var a = Math.abs(Math.round((t.y / i) * 360) - 180),
                    n = a <= 50 || (60 <= a && a <= 65),
                    r = n ? s.highlight : s.deep,
                    o = n || s.deep;
                  l.forEach(function(e) {
                    e.backface = r;
                  }),
                    c.forEach(function(e) {
                      e.backface = o;
                    });
                }
              }
            );
          }),
          (ZdogSpookyHouse.addInteriorScene = function(e) {
            var t = ZdogSpookyHouse.color,
              a = A.a.TAU,
              n = [{ y: 0 }, { y: 1 }],
              r = new A.a.Anchor({
                addTo: e.addTo,
                translate: e.translate,
                rotate: e.rotate
              }),
              o = t.medium,
              i = new A.a.Anchor({ addTo: r, rotate: { z: 0.1 } });
            new A.a.Rect({
              addTo: i,
              width: 9,
              height: 4,
              rotate: { x: a / 4 },
              fill: !0,
              color: o,
              stroke: 1.5
            });
            var s = new A.a.Shape({
              addTo: i,
              path: n,
              scale: 3,
              translate: { x: -4.5, z: -2 },
              color: o,
              stroke: 1.5
            });
            s.copy({ translate: { x: 4.5, z: -2 } }),
              s.copy({ translate: { x: 4.5, z: 2 } }),
              s.copy({ translate: { x: -4.5, z: 2 } });
            var l = new A.a.Anchor({ addTo: i, translate: { y: -8 } }),
              c = new A.a.Group({ addTo: l, rotate: { y: a / 2 } }),
              d = new A.a.Rect({
                addTo: c,
                width: 10,
                height: 5,
                color: t.deep,
                fill: !0,
                stroke: 1.5
              });
            new A.a.Rect({
              addTo: c,
              width: 9.5,
              height: 4.5,
              color: t.highlight,
              backface: !1,
              fill: !0,
              stroke: !1
            }),
              d.copy({
                addTo: l,
                width: 5,
                height: 2,
                rotate: { x: a / 4 },
                translate: { y: 5 }
              }),
              new A.a.Shape({
                addTo: l,
                path: n,
                scale: 2,
                translate: { y: 3.1 },
                stroke: 1.5,
                color: t.deep
              });
            var p = new A.a.Anchor({
              addTo: r,
              translate: { z: -15 },
              rotate: { z: -0.1 }
            });
            new A.a.Rect({
              addTo: p,
              width: 3,
              height: 3,
              rotate: { x: a / 4 },
              fill: !0,
              stroke: 1.5,
              color: o
            }),
              new A.a.Shape({
                addTo: p,
                path: n,
                scale: 3,
                stroke: 1.5,
                color: o
              });
            var u = new A.a.Shape({
              addTo: p,
              path: [{}, { z: -2.5, y: 0.5 }],
              translate: { y: 3 },
              stroke: 1,
              color: o
            });
            u.copy({ rotate: { y: (a / 5) * 1 } }),
              u.copy({ rotate: { y: (a / 5) * 2 } }),
              u.copy({ rotate: { y: (a / 5) * 3 } }),
              u.copy({ rotate: { y: (a / 5) * 4 } }),
              new A.a.Rect({
                addTo: p,
                width: 3,
                height: 4,
                translate: { z: -2.5, y: -2 },
                rotate: { x: 0.2 },
                stroke: 1.5,
                color: o,
                fill: !0
              });
            var m = t.deep,
              h = new A.a.Anchor({
                addTo: r,
                translate: { z: -13, y: -6 },
                scale: 0.6
              }),
              v = new A.a.Shape({
                addTo: h,
                path: [
                  { x: -1 },
                  { x: -1.5, y: -3 },
                  { x: 1.5, y: -3 },
                  { x: 1 }
                ],
                rotate: { x: 0.4 },
                stroke: 1.5,
                color: m,
                fill: !0
              });
            new A.a.Shape({
              addTo: v,
              path: n,
              scale: -1,
              translate: { y: -5.5 },
              stroke: 2.5,
              color: m
            });
            var _ = new A.a.Shape({
              addTo: v,
              path: [{}, { y: 3 }, { z: 2, y: 4 }],
              translate: { x: -1.5, y: -3 },
              rotate: { x: 1, z: 0.5 },
              scale: 1.25,
              closed: !1,
              stroke: 1.5,
              color: m
            });
            _.copy({ translate: { x: 1.5, y: -3 }, rotate: { z: -1 } });
            var b = new A.a.Shape({
              addTo: h,
              path: [{ x: -1 }, { x: 1 }],
              translate: { y: 2, z: 0.5 },
              stroke: 2,
              color: m
            });
            return (
              _.copy({
                addTo: b,
                scale: { x: 1.75, y: 1.75, z: -1.75 },
                translate: { x: -1.5 },
                rotate: { x: 1.8, z: 0.1 }
              }).copy({ translate: { x: 1.5 }, rotate: { x: 1, z: -0.2 } }),
              {
                animate: function(e) {
                  (i.translate.y = -1 * Math.sin(6 * e)),
                    (p.translate.y = 2 * Math.sin(7 * e)),
                    (h.translate.y = 2 * Math.sin(8 * e) - 6);
                }
              }
            );
          }),
          (ZdogSpookyHouse.getConeTree = function(e) {
            A.a.extend(e, {
              rotate: { x: A.a.TAU / 4 },
              stroke: !1,
              color: ZdogSpookyHouse.color.deep
            });
            var t = new A.a.Cone(e);
            return (
              t.copy({
                addTo: t,
                rotate: null,
                translate: { z: Math.round(e.length / 2) }
              }),
              t
            );
          }),
          (ZdogSpookyHouse.getGraveIsland = function(e) {
            var t = A.a.TAU,
              a = ZdogSpookyHouse.color,
              n = new A.a.Anchor({ addTo: e.addTo, translate: e.translate });
            ZdogSpookyHouse.getPyramid({
              addTo: n,
              scale: { x: 9, y: -9, z: 9 },
              color: a.deep,
              snub: e.snub
            }),
              new A.a.Rect({
                width: 18,
                height: 18,
                addTo: n,
                rotate: { x: t / 4 },
                color: a.dark,
                stroke: 4,
                fill: !0
              });
            var r = new A.a.Rect({
              addTo: n,
              width: 4,
              height: 4,
              translate: { x: -4, y: -6 },
              rotate: { y: t / 4 },
              stroke: 3,
              color: a.medium
            });
            return (
              new A.a.Ellipse({
                addTo: r,
                diameter: 4,
                translate: { y: -2 },
                stroke: 3,
                color: a.medium
              }),
              n
            );
          }),
          (r = A.a.TAU),
          (o = ZdogSpookyHouse.color),
          (i = [
            { move: { x: 0, y: 14 } },
            { line: { x: -12, y: 2 } },
            { move: { x: -4, y: 10 } },
            { line: { x: -10, y: 10 } },
            { move: { x: -8, y: 6 } },
            { line: { x: -8, y: 0 } },
            { line: { x: -12, y: -4 } },
            { move: { x: 0, y: 8 } },
            { line: { x: -4, y: 4 } },
            { move: { x: 0, y: 2 } },
            { line: { x: -10, y: -8 } },
            { move: { x: 0, y: -4 } },
            { line: { x: -4, y: -8 } },
            { line: { x: -4, y: -10 } },
            { move: { x: 0, y: 12 } },
            { line: { x: 6, y: 6 } },
            { line: { x: 10, y: 6 } },
            { move: { x: 2, y: 10 } },
            { line: { x: 8, y: 10 } },
            { move: { x: 0, y: 6 } },
            { line: { x: 12, y: -6 } },
            { move: { x: 8, y: -2 } },
            { line: { x: 8, y: -8 } },
            { move: { x: 4, y: 2 } },
            { line: { x: 12, y: 2 } },
            { move: { x: 0, y: 0 } },
            { line: { x: 4, y: -4 } },
            { move: { x: 0, y: -6 } },
            { line: { x: 4, y: -10 } }
          ]),
          (ZdogSpookyHouse.getLeafTree = function(e) {
            var t = -e.height;
            A.a.extend(e, {
              path: [{ y: 0 }, { y: t - 26 }],
              stroke: 0.5,
              color: o.deep
            });
            var a = new A.a.Shape(e),
              n = new A.a.Anchor({
                addTo: a,
                translate: { y: t - 14 },
                rotate: { y: -r / 8 }
              });
            return (
              new A.a.Shape({
                addTo: n,
                path: i,
                closed: !1,
                stroke: 0.6,
                color: o.deep
              }).copyGraph({ rotate: { y: r / 4 } }),
              a
            );
          }),
          (s = A.a.TAU),
          (e = Math.sqrt(2)),
          (l = [{ x: -1 }, { x: 1 }, { y: -e }]),
          (c = [
            { x: -1 },
            { x: 1 },
            { x: 0.5, y: -0.5 * e },
            { x: -0.5, y: -0.5 * e }
          ]),
          (ZdogSpookyHouse.getPyramid = function(e) {
            var t = new A.a.Anchor({
                addTo: e.addTo,
                translate: e.translate,
                scale: e.scale,
                rotate: e.rotate
              }),
              a = e.stroke || 4,
              n = new A.a.Anchor({ addTo: t });
            return (
              new A.a.Shape({
                addTo: n,
                path: e.snub ? c : l,
                translate: { z: 1 },
                rotate: { x: s / 8 },
                stroke: a,
                fill: !0,
                color: e.color,
                backface: void 0 === e.backface || e.backface
              }),
              n.copyGraph({ rotate: { y: s / 4 } }),
              n.copyGraph({ rotate: { y: s / 2 } }),
              n.copyGraph({ rotate: { y: (3 * s) / 4 } }),
              e.snub &&
                new A.a.Rect({
                  addTo: t,
                  translate: { y: -0.5 },
                  rotate: { x: -s / 4 },
                  color: e.color,
                  stroke: 4,
                  fill: !0
                }),
              t
            );
          }),
          (d = ["color", "stroke", "fill", "width", "height", "backface"]),
          (ZdogSpookyHouse.getWallPanel = function(e) {
            var t;
            return (
              e.pane
                ? (t = (function(a) {
                    var e = new A.a.Group(a.wall),
                      t = d.reduce(function(e, t) {
                        return (e[t] = a.wall[t]), e;
                      }, {});
                    t.addTo = e;
                    var n = new A.a.Rect(t);
                    return (
                      a.wallRectCallback && a.wallRectCallback(n),
                      new A.a.Rect({
                        addTo: e,
                        width: 8,
                        height: 6,
                        translate: { y: -1 },
                        color: ZdogSpookyHouse.color.dark,
                        fill: !0,
                        stroke: !1,
                        backface: !1
                      }),
                      new A.a.Rect({
                        addTo: e,
                        width: 4,
                        height: 6,
                        translate: { y: -1 },
                        color: a.pane,
                        fill: !0,
                        stroke: !1
                      }),
                      e
                    );
                  })(e))
                : ((t = new A.a.Rect(e.wall)),
                  e.wallRectCallback && e.wallRectCallback(t)),
              t
            );
          }),
          (ZdogSpookyHouse.init = function(e) {
            var r = A.a.TAU,
              t = ZdogSpookyHouse.color,
              a = Math.floor(e.width / 135) / 2,
              o = new A.a.Illustration({
                element: e,
                zoom: a,
                rotate: { y: r / 8 },
                dragRotate: !0,
                onDragStart: function() {
                  ZdogSpookyHouse.wobbling = !1;
                }
              }),
              n = new A.a.Anchor({
                addTo: o,
                translate: { y: ZdogSpookyHouse.sceneY }
              }),
              i = new A.a.Anchor({ addTo: n });
            new A.a.Rect({
              addTo: i,
              width: 72,
              height: 72,
              rotate: { x: r / 4 },
              color: t.dark,
              stroke: 4,
              fill: !0,
              backface: !1
            }),
              ZdogSpookyHouse.getPyramid({
                addTo: i,
                scale: { x: 36, y: -52, z: 36 },
                translate: { y: 2 },
                color: t.darker
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: i,
                scale: { x: 12, y: -28, z: 12 },
                translate: { x: -12, y: 18, z: 8 },
                color: t.darker,
                backface: !1
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: i,
                scale: { x: 8, y: -28, z: 8 },
                translate: { x: 8, y: 8, z: -22 },
                color: t.darker,
                backface: !1
              }),
              ZdogSpookyHouse.getLeafTree({
                addTo: i,
                height: 3,
                translate: { x: -35, z: 3 }
              });
            var s = new A.a.Anchor({
              addTo: i,
              translate: { x: 20, y: 54, z: -16 },
              scale: { x: 4, y: -8, z: 4 }
            });
            ZdogSpookyHouse.getPyramid({
              addTo: s,
              scale: { y: -1 },
              color: t.deep
            }),
              ZdogSpookyHouse.getPyramid({ addTo: s, color: t.deep });
            var l = new A.a.Group({
                addTo: n,
                translate: { x: 18, z: 80 },
                scale: ZdogSpookyHouse.hillScale,
                updateSort: !0
              }),
              c = new A.a.Anchor({ addTo: l, scale: { x: 24, y: 32, z: 24 } });
            ZdogSpookyHouse.getPyramid({ addTo: c, color: t.dark }),
              ZdogSpookyHouse.getPyramid({
                addTo: c,
                scale: { y: -1 },
                snub: !0,
                color: t.deep
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: l,
                scale: { x: 6, y: -14, z: 6 },
                translate: { x: -8, y: 12, z: 8 },
                color: t.deep
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: l,
                scale: { x: 12, y: 46, z: 12 },
                translate: { x: -12, z: -4 },
                color: t.dark
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: l,
                diameter: 8,
                length: 10,
                translate: { x: 2, y: -15, z: 18 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: l,
                diameter: 8,
                length: 10,
                translate: { x: 15, y: -8, z: 16 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: l,
                diameter: 8,
                length: 10,
                translate: { x: 22, y: -3, z: 5 }
              });
            var d = t.dark,
              p = t.deep,
              u = new A.a.Group({
                addTo: n,
                translate: { x: -52, z: -64 },
                scale: ZdogSpookyHouse.hillScale,
                updateSort: !0
              });
            ZdogSpookyHouse.getPyramid({
              addTo: u,
              scale: { x: 26, y: 60, z: 26 },
              color: d
            }),
              ZdogSpookyHouse.getPyramid({
                addTo: u,
                scale: { x: 14, y: 52, z: 14 },
                translate: { x: 12, y: -2, z: -12 },
                color: d
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: u,
                scale: { x: 26, y: -26, z: 26 },
                color: p
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: u,
                scale: { x: 10, y: -20, z: 10 },
                translate: { x: 12, y: 2, z: -12 },
                color: p
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: u,
                diameter: 8,
                length: 10,
                translate: { x: 18, y: -26, z: 0 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: u,
                diameter: 8,
                length: 10,
                translate: { x: 32, y: -8, z: -4 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: u,
                diameter: 8,
                length: 10,
                translate: { x: 10, y: -16, z: 24 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: u,
                diameter: 8,
                length: 10,
                translate: { x: 0, y: -28, z: -22 }
              });
            var m = new A.a.Group({
              addTo: n,
              translate: { x: 76, z: 36 },
              scale: ZdogSpookyHouse.hillScale,
              updateSort: !0
            });
            ZdogSpookyHouse.getPyramid({
              addTo: m,
              scale: { x: 20, y: 36, z: 20 },
              color: t.dark
            }),
              ZdogSpookyHouse.getPyramid({
                addTo: m,
                scale: { x: 20, y: -24, z: 20 },
                color: t.deep,
                snub: !0
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: m,
                diameter: 8,
                length: 10,
                translate: { x: 10, y: -10, z: 18 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: m,
                diameter: 8,
                length: 10,
                translate: { x: 16, y: -16 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: m,
                diameter: 8,
                length: 10,
                translate: { x: -14, y: -18, z: -10 }
              }),
              s.copyGraph({
                addTo: m,
                scale: { x: 4, y: -6, z: 4 },
                translate: { x: 0, y: 28, z: 2 }
              });
            var h = new A.a.Group({
                addTo: n,
                translate: { x: -78, z: -36 },
                scale: ZdogSpookyHouse.hillScale,
                updateSort: !0
              }),
              v = t.dark,
              _ = t.deep;
            ZdogSpookyHouse.getPyramid({
              addTo: h,
              scale: { x: 26, y: 42, z: 26 },
              color: v
            }),
              ZdogSpookyHouse.getPyramid({
                addTo: h,
                scale: { x: 26, y: -40, z: 26 },
                color: _,
                snub: !0
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: h,
                scale: { x: 14, y: 29, z: 14 },
                translate: { x: 12, y: -2, z: -12 },
                color: v
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: h,
                scale: { x: 16, y: 54, z: 16 },
                translate: { x: -4, y: -2, z: -4 },
                color: v
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: h,
                diameter: 8,
                length: 10,
                translate: { x: -16, y: -24, z: 6 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: h,
                diameter: 8,
                length: 10,
                translate: { x: -22, y: -14, z: -16 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: h,
                diameter: 8,
                length: 8,
                translate: { x: -22, y: -10, z: 15 }
              });
            var b = new A.a.Anchor({
              addTo: h,
              scale: { x: 6, y: 9, z: 6 },
              translate: { x: 0, y: 40, z: 0 }
            });
            ZdogSpookyHouse.getPyramid({ addTo: b, color: _ }),
              ZdogSpookyHouse.getPyramid({
                addTo: b,
                scale: { y: -1.2 },
                color: _
              }),
              b.copyGraph({
                scale: { x: 2, y: 4, z: 4 },
                translate: { x: 24, y: 29, z: -8 }
              }),
              ZdogSpookyHouse.getGraveIsland({
                addTo: n,
                translate: { x: 62, z: -32 }
              }),
              ZdogSpookyHouse.getGraveIsland({
                addTo: n,
                translate: { x: 60, z: -60 }
              }),
              ZdogSpookyHouse.getGraveIsland({
                addTo: n,
                translate: { x: 32, z: -64 }
              });
            var g = t.darker,
              y = new A.a.Anchor({ addTo: n, translate: { y: -94 } }),
              E = new A.a.Shape({
                addTo: y,
                translate: { z: -64 },
                stroke: 32,
                scale: 2,
                color: g
              });
            new A.a.Shape({
              addTo: E,
              translate: { x: -9, y: 4, z: 4 },
              stroke: 16,
              color: g
            }).copy({ translate: { x: 9, y: 5, z: 6 }, stroke: 20 });
            var S = new A.a.RoundedRect({
              addTo: E,
              width: 26,
              height: 12,
              cornerRadius: 6,
              translate: { x: -6, y: 7, z: 4 },
              rotate: { x: r / 4 },
              stroke: 6,
              color: g,
              fill: !0
            });
            S.copy({ translate: { x: 6, y: 9, z: 8 } });
            var f = new A.a.Anchor({ addTo: n, translate: { y: -60 } }),
              O = new A.a.Anchor({ addTo: f, translate: { z: 88 } });
            new A.a.Hemisphere({
              addTo: O,
              diameter: 36,
              rotate: { x: r / 4 },
              color: g,
              stroke: 6
            }),
              E.copy({ addTo: O, translate: { x: 16, y: -14, z: -4 } }),
              S.copy({
                addTo: O,
                width: 28,
                height: 16,
                cornerRadius: 8,
                stroke: 10,
                scale: 2,
                translate: { x: 8, y: 2, z: 4 }
              });
            var C = ZdogSpookyHouse.addHouse({ addTo: i, stroke: 1 / o.zoom });
            ZdogSpookyHouse.addCats({ addTo: i }),
              ZdogSpookyHouse.addBones({ addTo: i });
            var T = ZdogSpookyHouse.addInteriorScene({
                addTo: C.shape,
                translate: { z: 6 }
              }),
              w = ZdogSpookyHouse.addFogMonster({
                addTo: n,
                translate: { y: 12 }
              }),
              I = ZdogSpookyHouse.addCarRoad({ addTo: n }),
              k = 0,
              D = 300;
            !(function e() {
              var t = k / D;
              if (ZdogSpookyHouse.wobbling & (t <= 2)) {
                var a = A.a.easeInOut(t % 1) * r,
                  n = (-3 * r) / 64;
                (o.rotate.y = Math.sin(a) * n + r / 8),
                  (o.rotate.x = (-0.5 * Math.cos(a) + 0.5) * n);
              }
              o.normalizeRotate(),
                w.animate(t),
                I.animate(t),
                C.animate(t, o.rotate),
                T.animate(t),
                (y.rotate.y = (t * r) / 12),
                (f.rotate.y = (t * r) / 16),
                (i.translate.y = 4 * Math.sin((t / 4) * r)),
                (m.translate.y = -4 * Math.sin((t / 1.5) * r)),
                (h.translate.y = -4 * Math.sin((t / 2.5) * r)),
                (u.translate.y = 4 * Math.sin((t / 3) * r)),
                (l.translate.y = 4 * Math.sin((t / 2) * r)),
                k++,
                o.updateRenderGraph(),
                requestAnimationFrame(e);
            })();
          });
        var t = document.querySelector(".zdog-canvas");
        ZdogSpookyHouse.init(t);
      }
    },
    "31dG": function(e, t, a) {
      e.exports = {
        MainBlock: "salesectionsubscription_MainBlock_2tDhP",
        SelectAPlan: "salesectionsubscription_SelectAPlan_3H7r9",
        SubscriptionListBlock:
          "salesectionsubscription_SubscriptionListBlock_1YbMr",
        SubscriptionBlock: "salesectionsubscription_SubscriptionBlock_C-J1C",
        LogoImg: "salesectionsubscription_LogoImg_26_9r",
        PriceBlock: "salesectionsubscription_PriceBlock_8VH3Y",
        PriceDisplay: "salesectionsubscription_PriceDisplay_3wwah",
        SavingsDisplay: "salesectionsubscription_SavingsDisplay_1VC82",
        BodyTextBlock: "salesectionsubscription_BodyTextBlock_2VWP1",
        PurchaseButton: "salesectionsubscription_PurchaseButton_kpf95",
        AlreadyOwnedPackage:
          "salesectionsubscription_AlreadyOwnedPackage_2ymWR",
        AlreadyOwnedApp: "salesectionsubscription_AlreadyOwnedApp_3dYX7",
        UnOwned: "salesectionsubscription_UnOwned_1-zl0"
      };
    },
    E9gz: function(e, t, a) {
      e.exports = {
        AnalysisCtn: "eventmoderation_AnalysisCtn_1YGfW",
        AnalysisMissing: "eventmoderation_AnalysisMissing_rH1Dt",
        ModerationContainer: "eventmoderation_ModerationContainer_4HRKp",
        FilterContainer: "eventmoderation_FilterContainer_qY07T",
        Tile: "eventmoderation_Tile_3oU1y",
        TileEventOtherType: "eventmoderation_TileEventOtherType_3LUrW",
        TileCapsule: "eventmoderation_TileCapsule_36tP8",
        NoCapsule: "eventmoderation_NoCapsule_1onVF",
        TileDetails: "eventmoderation_TileDetails_2mRup",
        DetailsLeft: "eventmoderation_DetailsLeft_1O0y5",
        EventTitle: "eventmoderation_EventTitle_3ahHd",
        DetailsRight: "eventmoderation_DetailsRight_2BaxW",
        ArtHeader: "eventmoderation_ArtHeader_38IkF",
        ArtSpotlight: "eventmoderation_ArtSpotlight_2oUPY",
        DetailsMiddle: "eventmoderation_DetailsMiddle_VcJpZ",
        ModeratedFlagCtn: "eventmoderation_ModeratedFlagCtn_2JGGc",
        TitleLink: "eventmoderation_TitleLink_1OG__",
        TileAppInfo: "eventmoderation_TileAppInfo_2IJ__",
        TileAppInfoTitle: "eventmoderation_TileAppInfoTitle_2X75q",
        TileAppInfoImage: "eventmoderation_TileAppInfoImage_1rVmL",
        TileSplit: "eventmoderation_TileSplit_aaFuC",
        TileTitle: "eventmoderation_TileTitle_yJw1i",
        TimeWidth: "eventmoderation_TimeWidth_xSOgV",
        CategoryChangeDialog: "eventmoderation_CategoryChangeDialog_1VSAj",
        ModeratorAuditActionCtn:
          "eventmoderation_ModeratorAuditActionCtn_lx3MC",
        Button: "eventmoderation_Button_wu9Kr",
        RightSideTitles: "eventmoderation_RightSideTitles_XDAwD",
        DateAndTime: "eventmoderation_DateAndTime_2cW9N"
      };
    },
    Ff1b: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgJJREFUeNrsmz9LxDAYxpNyIhzICeIkiLM46KAf4EY9HBzcnDwXJ0cnFxddHdQP4ScQcXJxUvDP7qAOLg5Ot8TnpDhIkja5mL5t3hcechDS9Pmlb3mba6VSSqQcmUg8GAADYAAMgAHoQkr5K8QppGouvU9THZAbF+hvo3mDOjVfbOmbApsNMD/SPaDf5HuANQXQN4+fT4ax79CAqK9ZzSWvTYFWwYF2LH2rgHRP0T0W7rNs2maWg4yj2Uq5DtiAplIG0BcJhA1Al0thBsAAGEDToxVzMtQWL38LFBRTk6HHkAWQG+lEGMMpwAAYAANgAAyAATAABsAAGAADIPUw1POYs/ef5xkVAB5jb2KMSToFlFITaMaSBADzw32DK6idHIDc/CW0klwKlDB/bhtsUlEsUjEP3VrO8wySJp+1BlDWvG2hawvAxXzjALiatwEYpRBad4BwgYLmS2NkGs2ax9y70LKh7wTaw3yqLE3fK8Al5nTmoYfA8xy5+swquoSHK38NLQQ87DFWfZ98KUzJfHQA1MxHBUDRfEwAJM3/PG5bvhkK+THRKzRTpXnjC6GRAISMA5g/9EhB5x2hJY+Tu/MY8whti3Kv3Q5g/jnoLlXR6/KOlJWH+S7m+ohwEya3HxDNPMUNERLmqwJAxnwVAEiZjw2AnPmiOiCJ4D9HUwfwLcAAxHgyaE4johYAAAAASUVORK5CYII=";
    },
    I2Hi: function(e, t, a) {
      e.exports = {
        SuggestContainer: "storesuggest_SuggestContainer_2gBFq",
        Results: "storesuggest_Results_3eXNg",
        ResultRow: "storesuggest_ResultRow_16oSf",
        AvatarImage: "storesuggest_AvatarImage_3dr2A",
        GameName: "storesuggest_GameName_3CWrp"
      };
    },
    IWyE: function(e, t, a) {
      e.exports = {
        strResponsiveWidth: "910px",
        strMaxMobileWidth: "700px",
        strMinMobileHeight: "360px",
        strDesktopControlBarWidth: "300px",
        strDesktopGlobalHeaderHeight: "104px",
        strMobileGlobalHeaderHeight: "62px",
        strDesktopLabsBannerHeight: "46px",
        strMobileLabsBannerHeight: "42px",
        strDesktopGroupHeaderHeight: "70px",
        strMobileGroupHeaderHeight: "37px",
        strDesktopTopSpacerHeight: "150px",
        strMobileTopSpacerHeight: "104px",
        strEndOfRowsHeight: "60px",
        SteamLabsBanner: "eventcalendar_SteamLabsBanner_8sQfl",
        SteamLabsBannerCtn: "eventcalendar_SteamLabsBannerCtn_3olyO",
        SteamLabsIdentifiers: "eventcalendar_SteamLabsIdentifiers_3SWqw",
        SteamLabsName: "eventcalendar_SteamLabsName_1wILk",
        SteamLabsNumber: "eventcalendar_SteamLabsNumber_2ByeP",
        SteamLabsButton: "eventcalendar_SteamLabsButton_3YoSz",
        SidebarContainer: "eventcalendar_SidebarContainer_15YLD",
        SidebarCollapsed: "eventcalendar_SidebarCollapsed_3x2Ig",
        CollapseButton: "eventcalendar_CollapseButton_1RCio",
        DesktopButton: "eventcalendar_DesktopButton_2vMIl",
        SidebarBackground: "eventcalendar_SidebarBackground_1ZO60",
        Sidebar: "eventcalendar_Sidebar_1nf0v",
        SidebarTitle: "eventcalendar_SidebarTitle_3uZE-",
        SidebarBackLink: "eventcalendar_SidebarBackLink_2NQEg",
        FilterSection: "eventcalendar_FilterSection_34HOA",
        FilterSubSection: "eventcalendar_FilterSubSection_1Ko6o",
        FilterSubSectionTitle: "eventcalendar_FilterSubSectionTitle_MeJhm",
        SidebarManageMutedApps: "eventcalendar_SidebarManageMutedApps_2IWYf",
        SidebarLink: "eventcalendar_SidebarLink_2VFTM",
        ForceDesktopLink: "eventcalendar_ForceDesktopLink_1Kydh",
        MutedSourcesGroup: "eventcalendar_MutedSourcesGroup_2B7QL",
        MutedSourcesCount: "eventcalendar_MutedSourcesCount_3nwCq",
        ForceResponsiveLink: "eventcalendar_ForceResponsiveLink_3dRqL",
        SidebarFooter: "eventcalendar_SidebarFooter_3sXsg",
        MobileButton: "eventcalendar_MobileButton_3cMvc",
        EventCalendarContainer: "eventcalendar_EventCalendarContainer_1e3Wb",
        RowContainer: "eventcalendar_RowContainer_3yqpP",
        WideLeftGutter: "eventcalendar_WideLeftGutter_ws9AN",
        Rows: "eventcalendar_Rows_r3Dia",
        DisappearingHeaderSpacer:
          "eventcalendar_DisappearingHeaderSpacer_1l_KP",
        FutureSection: "eventcalendar_FutureSection_290nk",
        PastSection: "eventcalendar_PastSection_3FpvG",
        DarkerBackground: "eventcalendar_DarkerBackground_1U2BW",
        EmptySectionText: "eventcalendar_EmptySectionText_3TwYr",
        CalendarRow: "eventcalendar_CalendarRow_398u2",
        GroupHeader: "eventcalendar_GroupHeader_3j2de",
        GroupHeaderTitle: "eventcalendar_GroupHeaderTitle_2aVLR",
        SeeAllLink: "eventcalendar_SeeAllLink_28rp7",
        SeeAllCount: "eventcalendar_SeeAllCount_IOckO",
        FutureHint: "eventcalendar_FutureHint_8a9Pv",
        HorizontalTileContainer: "eventcalendar_HorizontalTileContainer_muk0v",
        HorizontalTiles: "eventcalendar_HorizontalTiles_1YVOy",
        HeaderAtTop: "eventcalendar_HeaderAtTop_2VZun",
        EndOfRows: "eventcalendar_EndOfRows_1lK7p",
        ErrorText: "eventcalendar_ErrorText_2dLzG",
        LiveText: "eventcalendar_LiveText_14EbB",
        LoginPrompt: "eventcalendar_LoginPrompt_1EXXC",
        LoginButton: "eventcalendar_LoginButton_1wuxX",
        SpecialEventListGroup: "eventcalendar_SpecialEventListGroup_5UEq9",
        SpecialEventListTitle: "eventcalendar_SpecialEventListTitle_2fFKi",
        SpecialEventList: "eventcalendar_SpecialEventList_3AESv",
        SpecialEvent: "eventcalendar_SpecialEvent_2s-UQ",
        SpecialEventTitle: "eventcalendar_SpecialEventTitle_3xq6F",
        SpecialEventTime: "eventcalendar_SpecialEventTime_3cGYp"
      };
    },
    Lql7: function(e, t, a) {
      e.exports = {
        DevSummaryCtn: "creatorhomeembed_DevSummaryCtn_1k0S-",
        LargeFormat: "creatorhomeembed_LargeFormat_1090T",
        CreatorDescCtn: "creatorhomeembed_CreatorDescCtn_3nKoQ",
        SmallFormat: "creatorhomeembed_SmallFormat_18tLe",
        DevSummaryWidgetCtn: "creatorhomeembed_DevSummaryWidgetCtn_A2B2V",
        DevSummaryBackground: "creatorhomeembed_DevSummaryBackground_1TsqA",
        DevSummaryContent: "creatorhomeembed_DevSummaryContent_23xa4",
        Avatar: "creatorhomeembed_Avatar_3Jepb",
        CreatorTitleCtn: "creatorhomeembed_CreatorTitleCtn_2T8Ub",
        CreatorNameName: "creatorhomeembed_CreatorNameName_8196l",
        CreatorTagline: "creatorhomeembed_CreatorTagline_NX5We",
        Title: "creatorhomeembed_Title_37vyV",
        Followers: "creatorhomeembed_Followers_2ZpFi",
        FollowBtnCtn: "creatorhomeembed_FollowBtnCtn_2artm",
        FollowButton: "creatorhomeembed_FollowButton_1HwWX",
        FollowBtnText: "creatorhomeembed_FollowBtnText_1a5dj",
        SocialContainer: "creatorhomeembed_SocialContainer_1o1Ds",
        SocialImg: "creatorhomeembed_SocialImg_2v_K1",
        SocialLink: "creatorhomeembed_SocialLink_3eCVb"
      };
    },
    SS32: function(e, t, a) {
      e.exports = {
        carouselBtnCtn: "carousel_carouselBtnCtn_3zfZ9",
        left: "carousel_left_S8IHd",
        right: "carousel_right_Cq59o",
        carouselBody: "carousel_carouselBody_3a31O",
        sliderBody: "carousel_sliderBody_2M3Sn",
        breadcrumbContainer: "carousel_breadcrumbContainer_3HjnE",
        pip: "carousel_pip_3Byg6"
      };
    },
    Wym2: function(e, t, a) {
      "use strict";
      a.r(t);
      var n,
        r,
        A = a("q1tI"),
        l = a.n(A),
        D = a("mrSG"),
        o = a("vDqi"),
        _ = a.n(o),
        m = a("2vnA"),
        i = a("TyAF"),
        s = a("Gp1o"),
        c = a("Ty5D"),
        T = a("kLLr"),
        b = a("ir+G"),
        g = a("TQGK"),
        y = a("WF3T"),
        E = a("KEpR"),
        L = a("5izx"),
        j = a("9w6b"),
        w = a("6oCP"),
        S = a("IjL/"),
        f = a("55Ip"),
        d = a("5bld"),
        O = a("Dhs6"),
        p = a("Mgs7"),
        G = a("6Y59"),
        u = a("5E+2"),
        C = a("+d9t"),
        N = a("exH9"),
        M = a("TLQK"),
        x = a("lkRc"),
        h = a("kyHq"),
        I = a("ee7K"),
        v = a("bxiW"),
        k = a("bS9Q"),
        B = a("I2Hi"),
        P = a.n(B),
        R = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { strSearchString: "", rgSuggestions: null }),
              (e.m_currentRequest = 0),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.UpdateAppSuggestions = function(a) {
              return Object(D.b)(this, void 0, void 0, function() {
                var s,
                  t = this;
                return Object(D.e)(this, function(e) {
                  return (
                    (null == (s = a.target.value && a.target.value.trim())
                    ? void 0
                    : s.length)
                      ? (window.clearTimeout(this.m_currentRequest),
                        (this.m_currentRequest = window.setTimeout(function() {
                          return Object(D.b)(t, void 0, void 0, function() {
                            var t,
                              a,
                              n,
                              r,
                              o,
                              i = this;
                            return Object(D.e)(this, function(e) {
                              switch (e.label) {
                                case 0:
                                  return (
                                    (t = {
                                      cc: x.c.COUNTRY,
                                      l: x.c.LANGUAGE,
                                      realm: h.d.k_ESteamRealmGlobal,
                                      f: "jsonfull",
                                      term: s.replace(" ", "+"),
                                      require_type: this.props
                                        .filterStoreItemType
                                        ? this.props.filterStoreItemType.join(
                                            ","
                                          )
                                        : void 0,
                                      excluded_tags: I.a.GetExcludedTagsSortedByID(),
                                      excluded_content_descriptors: I.a.GetExcludedContentDescriptor()
                                    }),
                                    (a = x.c.STORE_BASE_URL + "search/suggest"),
                                    [
                                      4,
                                      _.a.get(a, {
                                        params: t,
                                        withCredentials: !0
                                      })
                                    ]
                                  );
                                case 1:
                                  return (
                                    (n = e.sent()),
                                    (r = (null ===
                                      (o = null == n ? void 0 : n.data) ||
                                    void 0 === o
                                    ? void 0
                                    : o.length)
                                      ? n.data.map(function(e) {
                                          var t = A.createElement(
                                            "div",
                                            {
                                              className: P.a.ResultRow,
                                              key: "suggestion-" + e.id,
                                              onClick: function() {
                                                return i.props.fnOnSelected(e);
                                              }
                                            },
                                            A.createElement("img", {
                                              src: e.img,
                                              className: P.a.AvatarImage
                                            }),
                                            A.createElement(
                                              "div",
                                              { className: P.a.GameName },
                                              " ",
                                              Object(k.b)(e.name),
                                              " "
                                            )
                                          );
                                          return i.props.fnDecorateSuggestion
                                            ? i.props.fnDecorateSuggestion(e, t)
                                            : t;
                                        })
                                      : [
                                          A.createElement(
                                            "div",
                                            { key: "empty-results" },
                                            Object(M.d)(
                                              "#EventCalendar_GameSearch_NoneFound"
                                            )
                                          )
                                        ]),
                                    this.setState({
                                      strSearchString: s,
                                      rgSuggestions: r
                                    }),
                                    [2]
                                  );
                              }
                            });
                          });
                        }, 300)))
                      : this.setState({
                          strSearchString: "",
                          rgSuggestions: null
                        }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.ResetSuggestions = function() {
              this.setState({ rgSuggestions: null });
            }),
            (e.prototype.render = function() {
              var e = 0 < this.state.strSearchString.length;
              return A.createElement(
                "div",
                { className: P.a.SuggestContainer },
                A.createElement(p.j, {
                  type: "text",
                  label: this.props.strLabel,
                  onChange: this.UpdateAppSuggestions,
                  bAlwaysShowClearAction: e
                }),
                e &&
                  A.createElement(
                    "div",
                    {
                      className: Object(N.a)(
                        P.a.Results,
                        this.props.strResultsClass
                      )
                    },
                    this.state.rgSuggestions
                  )
              );
            }),
            Object(D.c)([v.a], e.prototype, "UpdateAppSuggestions", null),
            e
          );
        })(A.Component),
        H = a("IWyE"),
        F = a.n(H),
        z = (function() {
          function e() {
            this.m_dateLoadTime = L.a.GetTimeNowWithOverrideAsDate();
          }
          return (
            (e.prototype.IsCurrentlyVisible = function(e) {
              return (
                (!e.startVisible || e.startVisible <= this.m_dateLoadTime) &&
                (!e.endVisible || e.endVisible >= this.m_dateLoadTime)
              );
            }),
            (e.IsCurrentlyActive = function(e) {
              var t = L.a.GetTimeNowWithOverrideAsDate();
              return (
                (!e.startEvent || e.startEvent <= t) &&
                (!e.endEvent || e.endEvent >= t)
              );
            }),
            (e.LocalizeDateString = function(e) {
              if (!e.startEvent) return null;
              var t = e.startEvent.toLocaleDateString(
                M.c.GetPreferredLocales(),
                { month: "long", day: "numeric" }
              );
              if (!e.endEvent) return t;
              var a = {
                month:
                  e.startEvent.getMonth() != e.endEvent.getMonth()
                    ? "long"
                    : void 0,
                day: "numeric"
              };
              return (
                t +
                " - " +
                e.endEvent.toLocaleDateString(M.c.GetPreferredLocales(), a)
              );
            }),
            (e.prototype.GetVisibleSpecialEvents = function() {
              var t = this;
              return L.a.bEnableNewsHubMayUpdate
                ? [
                    {
                      sLocToken: "#NewsHubSpecialEvent_GameFestival",
                      endVisible: new Date(15917364e5),
                      startEvent: new Date(1591722e6),
                      endEvent: new Date(15922404e5),
                      newshubUrl:
                        "newshub/collection/GameFestival2020?upcoming=1"
                    },
                    {
                      sLocToken: "#NewsHubSpecialEvent_GameFestival",
                      startVisible: new Date(15917364e5),
                      endVisible: new Date(15922404e5),
                      startEvent: new Date(1591722e6),
                      endEvent: new Date(15922404e5),
                      newshubUrl: "newshub/collection/GameFestival2020"
                    }
                  ].filter(function(e) {
                    return t.IsCurrentlyVisible(e);
                  })
                : [];
            }),
            e
          );
        })(),
        U = new z(),
        W = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.specialEvent,
                t = window.location.href === x.c.STORE_BASE_URL + e.newshubUrl,
                a = z.IsCurrentlyActive(e),
                n = z.LocalizeDateString(e);
              return A.createElement(
                f.b,
                { to: "/" + e.newshubUrl },
                A.createElement(
                  "div",
                  {
                    className: Object(N.a)(
                      F.a.SpecialEvent,
                      t && F.a.SpecialEventOnPage,
                      a && F.a.SpecialEventActive
                    )
                  },
                  A.createElement(
                    "div",
                    { className: F.a.SpecialEventTitle },
                    Object(M.d)(e.sLocToken)
                  ),
                  n &&
                    A.createElement(
                      "div",
                      { className: F.a.SpecialEventTime },
                      n
                    )
                )
              );
            }),
            t
          );
        })(A.Component),
        V = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = U.GetVisibleSpecialEvents();
              return 0 === e.length
                ? null
                : A.createElement(
                    "div",
                    { className: F.a.SpecialEventListGroup },
                    A.createElement(
                      "div",
                      { className: F.a.SpecialEventListTitle },
                      Object(M.d)("#Events_SpecialEvents")
                    ),
                    A.createElement(
                      "div",
                      { className: F.a.SpecialEventList },
                      e.map(function(e) {
                        return A.createElement(W, {
                          key: e.sLocToken,
                          specialEvent: e
                        });
                      })
                    )
                  );
            }),
            t
          );
        })(A.Component),
        Z = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.componentDidMount = function() {}),
            (t.prototype.OnEventTypeChange = function(e, t) {
              E.c.SetEventTypeGroupAllowed(e, t), this.props.fnOnFilterChange();
            }),
            (t.prototype.RenderEventTypeCheckbox = function(t) {
              var a = this,
                e = E.c.BIsEventTypeGroupAllowed(t);
              return A.createElement(
                u.a,
                {
                  toolTipContent: Object(M.d)(
                    "#EventCalendar_EventTypeGroup_ttip_" + t
                  ),
                  direction: "top"
                },
                A.createElement(p.d, {
                  key: "group-" + t,
                  label: Object(M.d)("#EventCalendar_EventTypeGroup_" + t),
                  checked: e,
                  onChange: function(e) {
                    return a.OnEventTypeChange(t, e);
                  }
                })
              );
            }),
            (t.prototype.OnGameSourceChange = function(e, t) {
              E.c.SetGameSourceAllowed(e, t), this.props.fnOnFilterChange();
            }),
            (t.prototype.RenderGameSourceCheckbox = function(t, e) {
              var a = this,
                n = E.c.BIsGameSourceAllowed(t);
              return A.createElement(
                u.a,
                {
                  direction: "top",
                  toolTipContent: e
                    ? Object(M.d)("#EventCalendar_DisabledFilter_LoginPrompt")
                    : Object(M.d)("#EventCalendar_GameSource_ttip_" + t)
                },
                A.createElement(p.d, {
                  key: "gs-" + t,
                  label: Object(M.d)("#EventCalendar_GameSource_" + t),
                  checked: n,
                  disabled: e,
                  onChange: function(e) {
                    return a.OnGameSourceChange(t, e);
                  }
                })
              );
            }),
            (t.prototype.GetCalendarTitle = function(e) {
              if (e.BIsSingleSourceCalendar()) {
                var t = e.BIsSingleAppCalendar()
                  ? d.d.GetEntityNameForID(e.GetSingleAppID(), void 0)
                  : d.d.GetEntityNameForID(
                      void 0,
                      Number(e.GetSingleGroupID())
                    );
                return Object(M.k)(
                  "#EventCalendar_SpecificCalendar",
                  t,
                  A.createElement("br", null)
                );
              }
              return Object(M.k)(
                "#EventCalendar_Title",
                A.createElement("br", null)
              );
            }),
            (t.prototype.DecorateSearchSuggestion = function(e, t) {
              return e && e.id && ("software" == e.type || "game" == e.type)
                ? A.createElement(
                    f.b,
                    {
                      key: "suggestion-" + e.id,
                      to: "/newshub/app/" + e.id + "/"
                    },
                    t
                  )
                : t;
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.bUserIsLoggedIn,
                a = e.nDisappearingHeaderVisibleHeight,
                n = e.nGlobalHeaderTop,
                r = (e.nVisibleHeight, e.bIsCollapsed),
                o = e.bShouldIncludeLegalFooter,
                i = e.fnToggleCollapsed,
                s = ze(),
                l = s
                  ? A.createElement(
                      "div",
                      {
                        className: F.a.MobileButton,
                        onClick: i,
                        style: { transform: "translateY(" + n + "px)" }
                      },
                      r
                        ? A.createElement(G.a, null)
                        : A.createElement(G.z, null)
                    )
                  : null,
                c = r ? a : 0,
                d = s
                  ? null
                  : A.createElement(
                      "div",
                      { onClick: i, className: F.a.CollapseButton },
                      A.createElement(
                        "div",
                        {
                          style: { marginTop: c + "px" },
                          className: F.a.DesktopButton
                        },
                        A.createElement(G.h, { angle: r ? 180 : 0 })
                      )
                    ),
                p = r ? null : { top: a + "px" },
                u = Object(y.a)(),
                m = !0;
              if (u.BIsSingleGroupCalendar()) {
                var h = g.a.GetClanInfoByClanAccountID(u.GetSingleGroupID());
                h && h.has_rss_feed && (m = !1);
              }
              var v = O.a.GetMutedSourceCount(),
                _ =
                  "Responsive_RequestDesktopView" in window &&
                  window.Responsive_RequestDesktopView,
                b =
                  "Responsive_RequestMobileView" in window &&
                  window.Responsive_RequestMobileView;
              return A.createElement(
                A.Fragment,
                null,
                l,
                A.createElement(
                  "div",
                  {
                    className: Object(N.a)(
                      F.a.SidebarContainer,
                      r && F.a.SidebarCollapsed
                    ),
                    style: p
                  },
                  r
                    ? d
                    : A.createElement(
                        "div",
                        { className: F.a.Sidebar },
                        d,
                        A.createElement(
                          "div",
                          { className: F.a.SidebarBackground },
                          A.createElement(G.A, null)
                        ),
                        Boolean(!u.BIsGlobalCalendar()) &&
                          A.createElement(
                            "span",
                            { className: F.a.SidebarBackLink },
                            A.createElement(
                              f.b,
                              { to: "/newshub" },
                              A.createElement(G.h, {
                                angle: 0,
                                singlearrow: !0
                              }),
                              Object(M.d)(
                                "#EventCalendar_GlobalCalendar_Action"
                              )
                            )
                          ),
                        A.createElement(
                          "div",
                          { className: F.a.SidebarTitle },
                          this.GetCalendarTitle(u)
                        ),
                        A.createElement(
                          "div",
                          { className: F.a.FilterSection },
                          m &&
                            A.createElement(
                              "div",
                              { className: F.a.FilterSubSection },
                              A.createElement(
                                "div",
                                { className: F.a.FilterSubSectionTitle },
                                Object(M.d)(
                                  "#EventCalendar_FilterSubSection_EventTypeGroups"
                                )
                              ),
                              this.RenderEventTypeCheckbox(E.a.k_EEvents),
                              this.RenderEventTypeCheckbox(E.a.k_EStreaming),
                              this.RenderEventTypeCheckbox(E.a.k_EUpdates),
                              this.RenderEventTypeCheckbox(E.a.k_EReleases),
                              this.RenderEventTypeCheckbox(E.a.k_ESales),
                              this.RenderEventTypeCheckbox(E.a.k_ENews)
                            ),
                          Boolean(u.BIsGlobalCalendar()) &&
                            A.createElement(
                              "div",
                              { className: F.a.FilterSubSection },
                              A.createElement(
                                "div",
                                { className: F.a.FilterSubSectionTitle },
                                Object(M.d)(
                                  "#EventCalendar_FilterSubSection_GameSources"
                                )
                              ),
                              this.RenderGameSourceCheckbox(E.b.k_ERecent, !t),
                              this.RenderGameSourceCheckbox(E.b.k_ELibrary, !t),
                              this.RenderGameSourceCheckbox(E.b.k_EWishist, !t),
                              this.RenderGameSourceCheckbox(
                                E.b.k_EFollowing,
                                !t
                              ),
                              this.RenderGameSourceCheckbox(E.b.k_ERecommended),
                              this.RenderGameSourceCheckbox(E.b.k_ESteam),
                              L.a.bIncludeFeaturedAsGameSource &&
                                this.RenderGameSourceCheckbox(E.b.k_EFeatured)
                            ),
                          Boolean(u.BIsSingleSourceMuted()) &&
                            A.createElement(
                              "div",
                              null,
                              Object(M.d)("#EventCalendar_SingleAppIsMuted")
                            )
                        ),
                        A.createElement(R, {
                          strLabel: Object(M.d)("#EventCalendar_GameSearch"),
                          fnOnSelected: function() {},
                          fnDecorateSuggestion: this.DecorateSearchSuggestion,
                          filterStoreItemType: ["game", "software"]
                        }),
                        A.createElement(V, null),
                        A.createElement(
                          "div",
                          { className: F.a.SidebarManageMutedApps },
                          _ &&
                            A.createElement(
                              "div",
                              {
                                className: Object(N.a)(
                                  F.a.SidebarLink,
                                  F.a.ForceDesktopLink
                                ),
                                onClick: _
                              },
                              Object(M.d)("#EventCalendar_ForceDesktopView")
                            ),
                          b &&
                            A.createElement(
                              "div",
                              {
                                className: Object(N.a)(
                                  F.a.SidebarLink,
                                  F.a.ForceResponsiveLink
                                ),
                                onClick: b
                              },
                              Object(M.d)("#EventCalendar_ShowResponsiveView")
                            ),
                          Boolean(u.BIsGlobalCalendar()) &&
                            0 < v &&
                            A.createElement(
                              C.a,
                              {
                                className: F.a.MutedSourcesGroup,
                                href:
                                  x.c.STORE_BASE_URL +
                                  "account/emailoptout/app",
                                bDisableContextMenu: !0
                              },
                              Object(M.d)("#EventCalendar_ManageMutedSources"),
                              A.createElement(
                                "div",
                                { className: F.a.MutedSourcesCount },
                                v
                              )
                            ),
                          A.createElement(
                            C.a,
                            {
                              href: x.c.STORE_BASE_URL + "account/preferences",
                              bDisableContextMenu: !0
                            },
                            Object(M.d)("#EventCalendar_ManageStorePref")
                          )
                        ),
                        o &&
                          A.createElement(
                            "div",
                            { className: F.a.SidebarFooter },
                            A.createElement("img", {
                              src:
                                x.c.STORE_CDN_URL +
                                "public/images/footerLogo_valve_new.png"
                            }),
                            A.createElement(
                              "div",
                              null,
                              Object(M.d)(
                                "#Legal_Footer_WithYear",
                                Object(M.h)(new Date())
                              )
                            )
                          )
                      )
                )
              );
            }),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        Y = Object(c.g)(Z),
        q = a("0OaU"),
        J = a("r64O"),
        Q = a("uuth"),
        K = a("ylkE"),
        X = a("cGQe"),
        $ = a("XmAN"),
        ee = a("mgoM"),
        te = a("U+Q5"),
        ae = a("YLyR"),
        ne = a("Kw0F");
      ((r = n || (n = {}))[(r.NotLoaded = 0)] = "NotLoaded"),
        (r[(r.Loading = 1)] = "Loading"),
        (r[(r.Loaded = 2)] = "Loaded");
      var re = n.NotLoaded,
        oe = [];
      function ie(t) {
        if (re != n.Loaded) {
          if (re == n.NotLoaded) {
            var e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(e, a),
              (window.onYouTubeIframeAPIReady = se);
          }
          oe.findIndex(function(e) {
            return t == e;
          }) < 0 && oe.push(t);
        } else t();
      }
      function se() {
        re = n.Loaded;
        for (var e = 0, t = oe; e < t.length; e++) {
          (0, t[e])();
        }
        oe = [];
      }
      var le = (function(a) {
          function n(e) {
            var t = a.call(this, e) || this;
            return (
              (t.m_strPlayerID = ""),
              (t.m_player = null),
              (t.m_playerContainer = null),
              (t.m_bPlayerReady = !1),
              (t.m_strPlayerID = "YoutubePlayer_" + n.s_nPlayerIndex++),
              (t.state = { bYoutubeLoaded: !1 }),
              t
            );
          }
          return (
            Object(D.d)(n, a),
            (n.prototype.componentWillUnmount = function() {
              this.DestroyPlayer(),
                (function(e) {
                  ne.b(oe, e);
                })(this.OnYoutubeScriptsReady);
            }),
            (n.prototype.shouldComponentUpdate = function(e, t) {
              if (!this.m_player) return !1;
              var a = this.props;
              return (
                a.autoplay != e.autoplay ||
                a.controls != e.controls ||
                a.showInfo != e.showInfo ||
                a.video != e.video
                  ? this.CreatePlayer(e)
                  : (a.width == e.width && a.height == e.height) ||
                    (this.m_bPlayerReady &&
                      e.width &&
                      e.height &&
                      this.m_player.setSize(e.width, e.height)),
                !1
              );
            }),
            (n.prototype.DestroyPlayer = function() {
              if (this.m_player)
                try {
                  this.m_player.stopVideo && this.m_player.stopVideo(),
                    this.m_player.destroy && this.m_player.destroy();
                } catch (e) {
                } finally {
                  this.m_player = null;
                }
            }),
            (n.prototype.BindPlayerContainer = function(e) {
              this.m_playerContainer != e &&
                ((this.m_playerContainer = e),
                this.DestroyPlayer(),
                this.m_playerContainer && ie(this.OnYoutubeScriptsReady));
            }),
            (n.prototype.OnYoutubeScriptsReady = function() {
              this.CreatePlayer(this.props);
            }),
            (n.prototype.CreatePlayer = function(e) {
              if ((this.DestroyPlayer(), this.m_playerContainer)) {
                var t = !1 === e.autoplay ? 0 : 1,
                  a = !0 === e.showInfo ? 1 : 0,
                  n = !0 === e.controls ? 1 : 0,
                  r = !0 === e.showFullscreenBtn ? 1 : 0,
                  o = !0 === e.playsInline ? 1 : 0,
                  i = {
                    width: void 0 !== e.width ? String(e.width) : void 0,
                    height: void 0 !== e.height ? String(e.height) : void 0,
                    videoId: e.video,
                    playerVars: {
                      autoplay: t,
                      showinfo: a,
                      autohide: 1,
                      fs: r,
                      modestbranding: 1,
                      rel: 0,
                      playsinline: o,
                      iv_load_policy: 3,
                      controls: n,
                      start: e.startSeconds
                    },
                    events: {
                      onReady: this.OnPlayerReady,
                      onStateChange: this.OnPlayerStateChange,
                      onError: this.OnError
                    }
                  },
                  s = this.m_playerContainer.firstElementChild;
                (this.m_bPlayerReady = !1),
                  (this.m_player = new YT.Player(s, i));
              }
            }),
            (n.prototype.OnPlayerReady = function(e) {
              if (((this.m_bPlayerReady = !0), this.props.onVideoInfoChanged)) {
                var t = this.m_player.getVideoData(),
                  a = { strAuthor: "", strTitle: "", strVideoID: "" };
                t.author && (a.strAuthor = t.author),
                  t.title && (a.strTitle = t.title),
                  t.video_id && (a.strVideoID = t.video_id),
                  this.props.onVideoInfoChanged(a);
              }
              this.props.width &&
                this.props.height &&
                this.m_player.setSize(this.props.width, this.props.height),
                this.props.autoplay && this.m_player.playVideo(),
                this.props.onPlayerReady && this.props.onPlayerReady();
            }),
            (n.prototype.OnPlayerStateChange = function(e) {
              switch (e.data) {
                case YT.PlayerState.UNSTARTED:
                case YT.PlayerState.PLAYING:
                case YT.PlayerState.PAUSED:
                case YT.PlayerState.BUFFERING:
                  break;
                case YT.PlayerState.ENDED:
                  this.props.onMovieEnd && this.props.onMovieEnd();
              }
            }),
            (n.prototype.OnError = function(e) {
              console.log("Youtube: Playback failed", e),
                this.props.onError && this.props.onError(e);
            }),
            (n.prototype.OnPlayerLeftView = function() {
              this.props.autopause &&
                this.m_player &&
                this.m_bPlayerReady &&
                this.m_player.pauseVideo();
            }),
            (n.prototype.render = function() {
              var e = A.createElement(
                "div",
                {
                  key: this.m_strPlayerID,
                  ref: this.BindPlayerContainer,
                  className: Object(N.a)("YoutubePlayer", this.props.classnames)
                },
                A.createElement(q.a, { className: "YoutubePlayerThrobber" })
              );
              return this.props.autopause
                ? A.createElement(Q.a, { onLeave: this.OnPlayerLeftView }, e)
                : e;
            }),
            (n.s_nPlayerIndex = 0),
            Object(D.c)([v.a], n.prototype, "BindPlayerContainer", null),
            Object(D.c)([v.a], n.prototype, "OnYoutubeScriptsReady", null),
            Object(D.c)([v.a], n.prototype, "CreatePlayer", null),
            Object(D.c)([v.a], n.prototype, "OnPlayerReady", null),
            Object(D.c)([v.a], n.prototype, "OnPlayerStateChange", null),
            Object(D.c)([v.a], n.prototype, "OnError", null),
            Object(D.c)([v.a], n.prototype, "OnPlayerLeftView", null),
            n
          );
        })(A.Component),
        ce = a("02Wr"),
        de = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bDismissedPreviewImage: !1 }), t;
          }
          return (
            Object(D.d)(e, a),
            (e.prototype.render = function() {
              var t = this;
              if (
                (this.props.preloadYoutubeScripts && ie(function() {}),
                this.state.bDismissedPreviewImage)
              )
                return A.createElement(le, Object(D.a)({}, this.props));
              var e = this.props.altImg
                ? this.props.altImg
                : "https://img.youtube.com/vi/" +
                  this.props.video +
                  "/maxresdefault.jpg";
              return A.createElement(
                "div",
                {
                  className: Object(N.a)(
                    "YoutubePreviewContainer",
                    this.props.imageClassnames
                  ),
                  onClick: function(e) {
                    t.props.onPlayerActivated && t.props.onPlayerActivated(),
                      t.setState({ bDismissedPreviewImage: !0 }),
                      e.stopPropagation(),
                      e.preventDefault();
                  }
                },
                this.props.altImgWithFallback &&
                  A.createElement(ce.b, {
                    className: "YoutubePreviewImage",
                    srcs: this.props.altImgWithFallback
                  }),
                !this.props.altImgWithFallback &&
                  A.createElement("img", {
                    src: e,
                    className: "YoutubePreviewImage"
                  }),
                A.createElement(
                  "div",
                  { className: "YoutubePreviewPlay" },
                  A.createElement(G.E, null)
                ),
                A.createElement(
                  "div",
                  { className: "VideoHintText" },
                  Object(M.d)("#EventCalendar_WatchYouTubeVideo")
                )
              );
            }),
            e
          );
        })(A.Component),
        pe = a("N0Ye"),
        ue = a("mB/g"),
        me = a("i6tc"),
        he = a.n(me),
        ve = a("RQmk"),
        _e = a("O0NR"),
        be = a("ka0M"),
        ge = a("Jqb/"),
        ye = a("X3Ds"),
        Ee = a("TtDX"),
        Se = a("y+6m"),
        fe = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.OnMuteButton = function(e) {
              var t = this.props.calendarEvent,
                a = t.GetEntityName();
              Object(be.d)(
                A.createElement(
                  ge.c,
                  {
                    strTitle: Object(M.d)("#EventCalendar_MuteApp"),
                    strDescription: Object(M.d)(
                      "#EventCalendar_MuteApp_details",
                      a
                    ),
                    onOK: function() {
                      return Object(y.a)().UpdateEventBlockFromCalenderEvent(
                        t,
                        !1
                      );
                    }
                  },
                  A.createElement(
                    "a",
                    {
                      href:
                        (x.c.IN_CLIENT ? "steam://openurl/" : "") +
                        x.c.STORE_BASE_URL +
                        "account/emailoptout/app",
                      target: x.c.IN_CLIENT ? void 0 : "_blank"
                    },
                    Object(M.d)("#EventCalendar_ManageMutedApps")
                  )
                ),
                Object(ye.m)(e)
              );
            }),
            (t.prototype.OnUnMuteButton = function() {
              var e = this.props.calendarEvent;
              Object(y.a)().UpdateEventBlockFromCalenderEvent(e, !0);
            }),
            (t.prototype.IgnoreAppButton = function(e) {
              var t = this.props.calendarEvent;
              t.GetEntityName();
              Object(be.d)(
                A.createElement(
                  ge.c,
                  {
                    strTitle: Object(M.d)("#EventCalendar_Ignore"),
                    strDescription: Object(M.d)(
                      "#EventCalendar_IgnoreApp_ttip"
                    ),
                    onOK: function() {
                      return Object(y.a)().IgnoreAppAndFilterCalendar(t);
                    }
                  },
                  A.createElement("br", null),
                  A.createElement(
                    "p",
                    null,
                    Object(M.d)("#EventCalendar_IgnoreApp_newhub")
                  ),
                  A.createElement("br", null),
                  A.createElement(
                    "a",
                    {
                      href:
                        (x.c.IN_CLIENT ? "steam://openurl/" : "") +
                        x.c.STORE_BASE_URL +
                        "account/preferences",
                      target: x.c.IN_CLIENT ? void 0 : "_blank"
                    },
                    Object(M.d)("#EventCalendar_ManageStorePref")
                  )
                ),
                Object(ye.m)(e)
              );
            }),
            (t.prototype.UnignoreAppButton = function() {
              var e = this.props.calendarEvent;
              I.a.UpdateAppIgnore(e.appInfo.appid, !1);
            }),
            (t.prototype.HideAllEventsOfMyType = function() {
              var e = this.props.eventModel,
                t = E.c.MapClanEventTypeToGroup(e.GetEventType());
              E.c.SetEventTypeGroupAllowed(t, !1);
            }),
            (t.prototype.NoOp = function() {}),
            (t.prototype.AddContextMenuForSource = function(e, t, a, n) {
              void 0 === n && (n = !0),
                E.c.BIsGameSourceAllowed(t) &&
                  (n &&
                    e.push(
                      A.createElement(
                        Se.d,
                        {
                          key: "item-source-" + a + "-" + t,
                          disabled: !0,
                          onSelected: function() {}
                        },
                        Object(M.d)("#EventCalender_Reason_" + t)
                      )
                    ),
                  e.push(
                    A.createElement(
                      Se.d,
                      {
                        key: "item-hidesource-" + a + "-" + t,
                        onSelected: function() {
                          E.c.SetGameSourceAllowed(t, !1);
                        }
                      },
                      Object(M.d)("#EventCalender_Hide_Reason_" + t)
                    )
                  ));
            }),
            (t.prototype.RemoveFromWishlist = function() {
              I.a.UpdateGameWishlist(this.props.eventModel.appid, !1);
            }),
            (t.prototype.AddToWishlist = function() {
              I.a.UpdateGameWishlist(this.props.eventModel.appid, !0);
            }),
            (t.prototype.GotoAppID = function() {
              var e = this.props.eventModel;
              e.appid &&
                this.props.history.push("/newshub/app/" + e.appid + "/");
            }),
            (t.prototype.GotoGroupID = function() {
              var e = this.props.eventModel;
              e.clanSteamID &&
                this.props.history.push(
                  "/newshub/group/" + e.clanSteamID.GetAccountID() + "/"
                );
            }),
            (t.prototype.CreateContextMenu = function(e) {
              var t = this.props,
                a = t.eventModel,
                n = t.calendarEvent,
                r = [],
                o = n.GetSource(),
                i = n.unique_id,
                s = Object(y.a)();
              s.BIsGlobalCalendar() &&
                (o &&
                  o & d.a.k_eLibrary &&
                  (E.c.BIsGameSourceAllowed(E.b.k_ERecent) && n.appInfo
                    ? (r.push(
                        A.createElement(
                          Se.d,
                          {
                            key: "item-source-" + i + "-lastplayed",
                            disabled: !0,
                            onSelected: function() {}
                          },
                          Object(M.d)(
                            "#EventCalender_LastPlayed",
                            Object(M.n)(
                              L.a.GetTimeNowWithOverride() -
                                n.appInfo.last_played
                            )
                          )
                        )
                      ),
                      this.AddContextMenuForSource(r, E.b.k_ERecent, i, !1))
                    : this.AddContextMenuForSource(r, E.b.k_ELibrary, i)),
                o &&
                  o & d.a.k_eWishlist &&
                  this.AddContextMenuForSource(r, E.b.k_EWishist, i),
                o &&
                  o & d.a.k_eFollowing &&
                  this.AddContextMenuForSource(r, E.b.k_EFollowing, i),
                o &&
                  o & d.a.k_eRecommended &&
                  this.AddContextMenuForSource(r, E.b.k_ERecommended, i),
                o &&
                  o & d.a.k_eSteam &&
                  this.AddContextMenuForSource(r, E.b.k_ESteam, i),
                o &&
                  o & d.a.k_eFeatured &&
                  this.AddContextMenuForSource(r, E.b.k_EFeatured, i)),
                r.push(
                  A.createElement(
                    Se.d,
                    {
                      key: a.GID + "hidetype",
                      onSelected: this.HideAllEventsOfMyType
                    },
                    Object(M.d)(
                      "#EVentCalendar_Hide_EventType",
                      Object(M.d)(
                        "#EventCalendar_EventTypeGroup_" +
                          E.c.MapClanEventTypeToGroup(a.GetEventType())
                      )
                    )
                  )
                ),
                x.i.logged_in &&
                  (O.a.BIsEventBlocked(n)
                    ? r.push(
                        A.createElement(
                          Se.d,
                          {
                            key: a.GID + "unmuteapp",
                            onSelected: this.OnUnMuteButton
                          },
                          A.createElement(
                            u.a,
                            {
                              toolTipContent: Object(M.d)(
                                "#EventCalendar_UnMuteApp_ttip"
                              )
                            },
                            Object(M.d)(
                              "#EventCalendar_UnMuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      )
                    : r.push(
                        A.createElement(
                          Se.d,
                          {
                            key: a.GID + "muteapp",
                            onSelected: this.OnMuteButton
                          },
                          A.createElement(
                            u.a,
                            {
                              toolTipContent: Object(M.d)(
                                "#EventCalendar_MuteApp_ttip"
                              )
                            },
                            Object(M.d)(
                              "#EventCalendar_MuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      ),
                  n.appInfo &&
                    (I.a.BIsGameIgnored(n.appInfo.appid)
                      ? r.push(
                          A.createElement(
                            Se.d,
                            {
                              key: a.GID + "unignoreapp",
                              onSelected: this.UnignoreAppButton
                            },
                            Object(M.d)(
                              "#EventCalendar_UnignoreApp",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      : r.push(
                          A.createElement(
                            Se.d,
                            {
                              key: a.GID + "ignoreapp",
                              onSelected: this.IgnoreAppButton
                            },
                            A.createElement(
                              u.a,
                              {
                                toolTipContent: Object(M.d)(
                                  "#EventCalendar_IgnoreApp_ttip"
                                )
                              },
                              Object(M.d)(
                                "#EventCalendar_IgnoreApp",
                                this.props.calendarEvent.GetEntityName()
                              )
                            )
                          )
                        ))),
                s.BIsSingleSourceCalendar() ||
                  (a.appid
                    ? r.push(
                        A.createElement(
                          Se.d,
                          { key: a.GID + "goto", onSelected: this.GotoAppID },
                          Object(M.d)(
                            "#EventCalendar_Goto_SpecificCalendar",
                            n.GetEntityName()
                          )
                        )
                      )
                    : r.push(
                        A.createElement(
                          Se.d,
                          { key: a.GID + "goto", onSelected: this.GotoGroupID },
                          Object(M.d)(
                            "#EventCalendar_Goto_SpecificCalendar",
                            n.GetEntityName()
                          )
                        )
                      )),
                Object(Ee.a)(A.createElement(Se.c, null, r), e);
            }),
            (t.prototype.render = function() {
              return A.createElement(
                "div",
                {
                  className: Object(N.a)(he.a.FooterStat, he.a.Options),
                  onClick: this.CreateContextMenu
                },
                A.createElement(G.y, null)
              );
            }),
            Object(D.c)([v.a], t.prototype, "OnMuteButton", null),
            Object(D.c)([v.a], t.prototype, "OnUnMuteButton", null),
            Object(D.c)([v.a], t.prototype, "IgnoreAppButton", null),
            Object(D.c)([v.a], t.prototype, "UnignoreAppButton", null),
            Object(D.c)([v.a], t.prototype, "HideAllEventsOfMyType", null),
            Object(D.c)([v.a], t.prototype, "NoOp", null),
            Object(D.c)([v.a], t.prototype, "AddContextMenuForSource", null),
            Object(D.c)([v.a], t.prototype, "RemoveFromWishlist", null),
            Object(D.c)([v.a], t.prototype, "AddToWishlist", null),
            Object(D.c)([v.a], t.prototype, "GotoAppID", null),
            Object(D.c)([v.a], t.prototype, "GotoGroupID", null),
            Object(D.c)([v.a], t.prototype, "CreateContextMenu", null),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        Oe = Object(c.g)(fe),
        Ce = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bVideoPlayerReady: !1 }), e;
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.OnFallbackClick = function(e) {
              _e.b.RecordAppInteractionEvent(
                this.props.calendarEvent.appid,
                _e.a.k_eClickThrough
              ),
                this.props.fnOnClicked(this.props.eventModel),
                e.stopPropagation(),
                e.preventDefault();
            }),
            (e.prototype.componentDidMount = function() {
              if (this.props.calendarEvent.clanInfo) {
                var e = T.a.InitFromClanID(
                  this.props.calendarEvent.clanInfo.clanid
                );
                g.a.LoadOGGClanInfoForClanSteamID(e);
              }
            }),
            (e.prototype.getVideoPreviewControl = function() {
              var e = this,
                t = this.props.eventModel,
                a = t.video_preview_type,
                n = t.video_preview_id;
              if (!n) return null;
              if (12 === this.props.eventModel.type) return null;
              if ("youtube" !== a) return null;
              var r = Object(ee.d)(x.c.LANGUAGE),
                o =
                  Ue() && 14 == this.props.eventModel.GetEventType()
                    ? te.c.full
                    : te.c.capsule_main,
                i = this.props.eventModel.GetImageForSizeAsArrayWithFallback(
                  "capsule",
                  r,
                  o
                );
              return A.createElement(de, {
                video: n,
                altImgWithFallback: i,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                imageClassnames: he.a.YoutubePreviewImage,
                onPlayerActivated: function() {
                  _e.b.RecordAppInteractionEvent(
                    e.props.calendarEvent.appid,
                    _e.a.k_ePlayedVideo
                  ),
                    e.setState({ bVideoPlayerReady: !0 });
                },
                preloadYoutubeScripts: !0,
                playsInline: !0
              });
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.eventModel,
                a = e.calendarEvent,
                n = e.bSuppressHoverEffects,
                r = e.bMiniMode,
                o = j.a.Get(),
                i = a.GetEntityName(),
                s = a.GetGameCapsule(),
                l = Object(ee.d)(x.c.LANGUAGE),
                c = t.has_live_stream,
                d = t.has_live_stream,
                p =
                  Ue() && 14 == t.GetEventType()
                    ? te.c.full
                    : te.c.capsule_main,
                u = "capsule",
                m = t.BImageNeedScreenshotFallback(u, l),
                h = Boolean(m && t.appid)
                  ? t.GetFallbackArtworkScreenshot()
                  : t.GetImageURLWithFallback(u, l, p),
                v = this.getVideoPreviewControl(),
                _ = !v && !r,
                b = t.GetCategoryAsString(),
                g = he.a["EventType" + t.GetEventType()],
                y = t.GetAllTags().map(function(e) {
                  return he.a["Tag-" + e];
                }),
                E = N.a.apply(
                  void 0,
                  Object(D.g)(
                    [
                      he.a.TileContainer,
                      g,
                      c && he.a.TileVideoIcon,
                      n ? he.a.DisableHovers : he.a.EnableHovers,
                      this.state.bVideoPlayerReady && he.a.VideoPlayerReady,
                      v && he.a.HasVideo,
                      o.HasEventBeenRead(t.GID) && he.a.HasBeenRead,
                      r && he.a.MiniMode
                    ],
                    y
                  )
                ),
                S = t.GetNameWithFallback(l),
                f = t.GetSubTitleWithLanguageFallback(l),
                O = t.GetSummaryWithFallback(l);
              f === O && (O = void 0), f === S && (f = void 0);
              var C =
                  28 !== t.type &&
                  12 !== t.type &&
                  L.a.GetTimeNowWithOverride() <
                    t.GetStartTimeAndDateUnixSeconds(),
                T = A.createElement(
                  "div",
                  { className: he.a.CoverImageCtn },
                  v,
                  _ &&
                    A.createElement(
                      A.Fragment,
                      null,
                      12 === t.type &&
                        A.createElement(
                          "div",
                          { className: he.a.GameCapsuleCtn },
                          A.createElement("div", {
                            className: he.a.AppBannerLogo,
                            style: { backgroundImage: "url(" + s + ")" }
                          })
                        ),
                      12 !== t.type &&
                        A.createElement(
                          "div",
                          {
                            className: Object(N.a)(
                              he.a.EventCapsuleCtn,
                              c && he.a.LiveBroadcastPreview
                            )
                          },
                          A.createElement("div", {
                            className: Object(N.a)(
                              he.a.TileImage,
                              m && he.a.FallbackImage
                            ),
                            style: { backgroundImage: "url(" + h + ")" }
                          }),
                          c &&
                            A.createElement("div", {
                              className: he.a.TileCoverImagePlayable
                            }),
                          d &&
                            A.createElement(
                              "div",
                              { className: he.a.TileCoverLiveIcon },
                              Object(M.d)("#home_page_live_broadcast")
                            ),
                          c &&
                            A.createElement(
                              "div",
                              { className: "VideoHintText" },
                              Object(M.d)("#EventCalendar_WatchLiveBroadcast")
                            )
                        )
                    ),
                  A.createElement(
                    "div",
                    { className: he.a.EventSummary },
                    A.createElement(
                      "div",
                      { className: Object(N.a)(he.a.TileTextCategoryType, g) },
                      b
                    )
                  )
                ),
                w = n && 14 != t.GetEventType() && !v,
                I = w && T,
                k = !w && T;
              return A.createElement(
                "div",
                { className: E },
                A.createElement($.a, { event: t }),
                A.createElement(
                  ue.c,
                  { eventModel: t, route: ue.a.k_eView },
                  A.createElement(
                    "div",
                    { className: he.a.Tile, onClick: this.OnFallbackClick },
                    14 === t.type &&
                      A.createElement("div", {
                        className: Object(N.a)(
                          he.a.TileBackgroundImage,
                          m && he.a.FallbackImage
                        ),
                        style: { backgroundImage: "url(" + h + ")" }
                      }),
                    A.createElement(
                      "div",
                      { className: he.a.MainContentContainer },
                      A.createElement(
                        "div",
                        { className: he.a.TileTextContainer },
                        A.createElement(
                          "div",
                          { className: he.a.PatchIconCtn },
                          A.createElement(G.s, null)
                        ),
                        A.createElement(
                          "div",
                          { className: he.a.EventTitleCtn },
                          I,
                          A.createElement(Te, Object(D.a)({}, this.props)),
                          A.createElement(
                            "div",
                            { className: he.a.EventName },
                            S
                          ),
                          f &&
                            A.createElement(
                              "div",
                              { className: he.a.EventSubTitle },
                              f
                            ),
                          12 !== t.type &&
                            O &&
                            A.createElement(
                              "div",
                              { className: he.a.EventSummaryDefault },
                              O
                            ),
                          A.createElement(
                            "div",
                            { className: he.a.EventTypeAndDateCtn },
                            12 === t.type &&
                              A.createElement(
                                "div",
                                { className: he.a.SmallAppName },
                                i
                              ),
                            A.createElement(we, { eventModel: t })
                          )
                        ),
                        C &&
                          A.createElement(
                            "div",
                            { className: he.a.ReminderContainer },
                            A.createElement(X.a, {
                              eventModel: t,
                              eventGID: t.GID,
                              lang: l,
                              bShowStartTime: !0
                            })
                          )
                      ),
                      k
                    )
                  )
                ),
                A.createElement(Ie, Object(D.a)({}, this.props))
              );
            }),
            Object(D.c)([v.a], e.prototype, "OnFallbackClick", null),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        Te = function(e) {
          var t = e.eventModel,
            a = e.calendarEvent,
            n = e.bSuppressHoverEffects,
            r = a.GetEntityName(),
            o = a.GetGameIcon(),
            i = function(e) {
              Object(ue.g)(t, ue.a.k_eStoreOwnerPage),
                e.stopPropagation(),
                e.preventDefault();
            },
            s = n
              ? A.createElement(
                  "div",
                  {
                    className: Object(N.a)(
                      he.a.TileGameCapsule,
                      he.a.DisableHovers
                    ),
                    onClick: i
                  },
                  A.createElement("img", { className: he.a.AppIcon, src: o }),
                  A.createElement("div", { className: he.a.TileTextAppName }, r)
                )
              : A.createElement(
                  "div",
                  { onClick: i },
                  A.createElement(
                    ve.b,
                    {
                      hoverClassName: Object(N.a)(
                        he.a.TileGameCapsule,
                        he.a.EnableHovers
                      ),
                      type: "app",
                      id: a.appid
                    },
                    A.createElement("img", { className: he.a.AppIcon, src: o }),
                    A.createElement(
                      "div",
                      { className: he.a.TileTextAppName },
                      r
                    )
                  )
                );
          return A.createElement(
            "div",
            { className: he.a.TileTextHeader },
            s,
            a.GetSource() === d.a.k_eRecommended &&
              A.createElement(
                "div",
                { className: he.a.SourceRecommended },
                Object(M.d)("#EventCalendar_GameSource_recommended_Verbose")
              )
          );
        },
        we = Object(i.observer)(function(e) {
          var t = e.eventModel,
            a = e.calendarEvent,
            n = L.a.GetTimeNowWithOverride(),
            r = t ? t.GetStartTimeAndDateUnixSeconds() : a.start_time,
            o = t ? t.GetPostTimeAndDateUnixSeconds() : a.start_time,
            i = t && Object(pe.a)(t.type) && t.GetEndTimeAndDateUnixSeconds();
          if (i && r < n && n < i) {
            var s = i - n,
              l = Object(M.n)(s, !0);
            return A.createElement(
              "div",
              { className: he.a.LiveText },
              A.createElement(
                ae.e,
                { rtFullDate: r, stylesmodule: he.a },
                A.createElement(
                  "div",
                  { className: he.a.LiveNow },
                  Object(M.d)("#EventCalendar_LiveNow")
                )
              ),
              A.createElement(
                ae.e,
                { rtFullDate: i, stylesmodule: he.a },
                Object(M.d)("#EventCalendar_TimeLeft", l)
              )
            );
          }
          if (r < n) {
            var c = n - r,
              d = c < 86400 ? Object(M.n)(c) : Object(M.m)(r),
              p = 3600 < Math.abs(r - o);
            return A.createElement(
              ae.e,
              { rtFullDate: r, stylesmodule: he.a },
              A.createElement(
                "div",
                { className: he.a.PastDateText },
                Object(M.d)(
                  p
                    ? "#EventCalendar_StartedAtTime"
                    : "#EventCalendar_PostedAtTime",
                  d
                )
              )
            );
          }
          var u = (s = r - n) < 86400;
          return A.createElement(
            ae.e,
            { rtFullDate: r, stylesmodule: he.a },
            A.createElement(
              "div",
              { className: he.a.FutureDateText },
              u
                ? Object(M.d)(
                    "#EventCalendar_WillStartAfterDuration",
                    Object(M.n)(s, !0)
                  )
                : Object(M.d)("#EventCalendar_WillStartAtTime", Object(M.m)(r))
            )
          );
        });
      var Ie = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.OnPerformVoteUp = function() {
              var e = this.props.eventModel,
                t = j.a.Get();
              !0 !== t.GetPreviouslyLoadedVote(this.props.eventModel) &&
                Object(K.a)(e, t) &&
                (t.Vote(e, !0, _.a.CancelToken.source()),
                _e.b.RecordAppInteractionEvent(e.appid, _e.a.k_eThumbsUp));
            }),
            (t.prototype.OnDiscussionClicked = function() {
              var e = this.props.eventModel;
              _e.b.RecordAppInteractionEvent(e.appid, _e.a.k_eDiscussions);
            }),
            (t.prototype.render = function() {
              var e = j.a.Get(),
                t = this.props.eventModel,
                a = Math.max(0, t.nVotesUp - t.nVotesDown),
                n = e.GetPreviouslyLoadedVote(this.props.eventModel),
                r = (function(e, t) {
                  return e.BIsUserLoggedIn()
                    ? x.i.is_limited
                      ? he.a.Vote_LimitedUser
                      : !0 === t
                      ? he.a.Vote_Positive
                      : !1 === t
                      ? he.a.Vote_Negative
                      : he.a.Vote_Ready
                    : he.a.Vote_NotLoggedIn;
                })(e, n),
                o =
                  (x.c.IN_CLIENT ? "steam://openurl/" : "") +
                  t.GetForumTopicURL(),
                i =
                  0 < t.live_stream_viewer_count
                    ? t.live_stream_viewer_count
                    : void 0;
              return A.createElement(
                "div",
                { className: he.a.Footer },
                A.createElement(
                  "div",
                  { className: he.a.FooterRightSide },
                  Boolean(i) &&
                    A.createElement(
                      "div",
                      { className: he.a.TileViewerCount },
                      i.toLocaleString(M.c.GetPreferredLocales())
                    ),
                  A.createElement(
                    "div",
                    {
                      className: Object(N.a)(he.a.FooterStat, he.a.Vote, r),
                      onClick: this.OnPerformVoteUp
                    },
                    A.createElement(G.D, { className: he.a.RateIcon }),
                    A.createElement("span", null, Number(a).toLocaleString())
                  ),
                  A.createElement(
                    "div",
                    { className: he.a.FooterStat },
                    A.createElement(
                      "a",
                      {
                        href: o,
                        className: he.a.CommentIconCtn,
                        target: "_blank",
                        onClick: this.OnDiscussionClicked
                      },
                      A.createElement(G.e, { className: he.a.CommentIcon }),
                      A.createElement(
                        "span",
                        null,
                        Number(t.nCommentCount).toLocaleString()
                      )
                    )
                  ),
                  A.createElement(Oe, Object(D.a)({}, this.props))
                )
              );
            }),
            Object(D.c)([v.a], t.prototype, "OnPerformVoteUp", null),
            Object(D.c)([v.a], t.prototype, "OnDiscussionClicked", null),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        ke = Object(i.observer)(function(t) {
          var e = t.calendarEvent,
            a = he.a["EventType" + e.event_type],
            n = Object(N.a)(he.a.TileContainer, a);
          return A.createElement(
            Q.a,
            {
              onEnter: function() {
                if (
                  (t.partnerEventStore.QueueLoadPartnerEvent(
                    t.calendarEvent.clanid,
                    t.calendarEvent.unique_id
                  ),
                  t.calendarEvent.appid &&
                    b.a.GetStoreCapsuleInfo(t.calendarEvent.appid),
                  t.calendarEvent.clanInfo)
                ) {
                  var e = T.a.InitFromClanID(t.calendarEvent.clanInfo.clanid);
                  g.a.LoadOGGClanInfoForClanSteamID(e);
                }
              },
              topOffset: "-500px",
              bottomOffset: "-500px"
            },
            A.createElement(
              "div",
              { className: n },
              A.createElement("div", { className: he.a.Tile }),
              A.createElement("div", { className: he.a.Footer })
            )
          );
        }),
        De = Object(i.observer)(function(e) {
          var t = e.partnerEventStore,
            a = e.calendarEvent,
            n = Object(D.f)(e, ["partnerEventStore", "calendarEvent"]),
            r = t.GetClanEventModel(a.unique_id);
          return r
            ? A.createElement(
                Ce,
                Object(D.a)({ eventModel: r, calendarEvent: a }, n)
              )
            : A.createElement(ke, { calendarEvent: a, partnerEventStore: t });
        }),
        je = a("UWWC"),
        Ae = a("yJqL"),
        Le = a("xnZ7"),
        Ge = a.n(Le),
        Ne = a("qD+2"),
        Me = a("bDQf"),
        xe = a("JJA/"),
        Be = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoading: !1, eventModel: e.props.eventModel }),
              (e.m_refParent = A.createRef()),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.state.eventModel ||
                this.setState({ bLoading: !0 }, this.LoadEvent);
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.add(xe.BodyNoScroll);
            }),
            (e.prototype.componentWillUnmount = function() {
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.remove(xe.BodyNoScroll);
            }),
            (e.prototype.GetBodyElement = function() {
              return this.m_refParent.current
                ? this.m_refParent.current.closest("body")
                : null;
            }),
            (e.prototype.LoadEvent = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r = this;
                return Object(D.e)(this, function(e) {
                  return (
                    (t = this.props),
                    (a = t.appid),
                    (n = t.announcementGID),
                    t.partnerEventStore
                      .LoadPartnerEventFromAnnoucementGID(a, n, 0)
                      .then(function(e) {
                        return r.setState(
                          { bLoading: !1, eventModel: e },
                          r.HandleReadEvent
                        );
                      })
                      .catch(function(e) {
                        var t = Object(Me.a)(e);
                        console.log(
                          "EventInfiniteScrollModal failed " + t.strErrorMsg,
                          t
                        ),
                          r.setState({ bLoading: !1 });
                      }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.HandleReadEvent = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(D.e)(this, function(e) {
                  return (
                    (t = this.state.eventModel),
                    (a = this.props.trackingLocation),
                    t &&
                      t.BIsPartnerEvent() &&
                      j.a
                        .Get()
                        .GetTracker()
                        .MarkEventRead(
                          t.GID,
                          t.clanSteamID.GetAccountID(),
                          a
                        ) &&
                      j.a
                        .Get()
                        .GetTracker()
                        .Flush(),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.render = function() {
              if (this.state.bLoading)
                return A.createElement(
                  ge.h,
                  null,
                  A.createElement(
                    "div",
                    { className: Ge.a.FlexCenter, style: { height: "400px" } },
                    A.createElement(q.a, null)
                  )
                );
              var e = this.props,
                t = e.classname,
                a = e.partnerEventStore,
                n = e.bPrimaryPageFeature;
              if (this.state.eventModel) {
                var r = A.createElement(
                  "div",
                  null,
                  A.createElement(Ae.a, {
                    location: Ae.b.AppDetails,
                    initialEvent: this.state.eventModel,
                    partnerEventStore: a,
                    emoticonStore: je.b,
                    appInfoStore: Ne.a,
                    closeFn: !n && this.props.closeModal,
                    showAppHeader: this.props.showAppHeader
                  })
                );
                return n ? r : A.createElement(ge.h, { className: t }, r);
              }
              return null;
            }),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        Pe = a("GiuM"),
        Re = a("BFsE"),
        He = "global_header";
      function Fe() {
        var e = document.getElementById(He);
        if (e && "none" != getComputedStyle(e).display) return e;
        var t = document.getElementsByClassName("responsive_header");
        return (
          Object(J.a)(t.length <= 1, "Must have at most one responsive_header"),
          1 != t.length ? null : t[0]
        );
      }
      function ze() {
        var e = Fe();
        return e && e.id != He;
      }
      function Ue() {
        return window.innerWidth < parseInt(F.a.strMaxMobileWidth);
      }
      function We() {
        return (
          ze() ||
          window.innerWidth <
            parseInt(F.a.strDesktopControlBarWidth) +
              parseInt(F.a.strMaxMobileWidth)
        );
      }
      function Ve() {
        var e = ze(),
          t = Ue(),
          a = 0;
        return (
          Fe() &&
            (a = parseInt(
              e
                ? F.a.strMobileGlobalHeaderHeight
                : F.a.strDesktopGlobalHeaderHeight
            )),
          {
            nGlobalHeaderHeight: a,
            nSteamLabsBannerHeight: parseInt(
              e ? F.a.strMobileLabsBannerHeight : F.a.strDesktopLabsBannerHeight
            ),
            nGroupHeaderHeight: parseInt(
              t
                ? F.a.strMobileGroupHeaderHeight
                : F.a.strDesktopGroupHeaderHeight
            )
          }
        );
      }
      var Ze,
        Ye,
        qe = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = Object(D.a)(
                {
                  bUserIsLoggedIn: x.i.logged_in,
                  nVisibleHeight: 0,
                  nScrollTop: null,
                  bControlBarIsCollapsed: We(),
                  bControlBarWasOpenedByUser: !1,
                  nDisappearingHeaderTop: 0
                },
                Ve()
              )),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              (e.m_nForcedScrollPosition = null),
              (e.m_nInitialScrollPosition = null),
              (e.m_refDiv = A.createRef()),
              (e.k_nMaxScrollErrorInPixels = 2),
              e
            );
          }
          var o;
          return (
            Object(D.d)(e, t),
            ((o = e).prototype.componentDidMount = function() {
              this.InitEventCalendarStore(),
                this.UpdateDocumentUI(),
                window.addEventListener("resize", this.OnResize),
                window.addEventListener("scroll", this.OnScroll),
                this.setState({ nVisibleHeight: window.innerHeight });
            }),
            (e.prototype.componentDidUpdate = function(e, t) {
              (t.bUserIsLoggedIn == this.state.bUserIsLoggedIn &&
                JSON.stringify(e.filter_to_appids) ==
                  JSON.stringify(this.props.filter_to_appids) &&
                JSON.stringify(e.filter_to_clanids) ==
                  JSON.stringify(this.props.filter_to_clanids) &&
                e.filter_to_collection === this.props.filter_to_collection) ||
                this.InitEventCalendarStore(),
                this.UpdateDocumentUI(),
                this.LoadEventToShowAsModal();
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("component unmounted"),
                window.removeEventListener("resize", this.OnResize),
                window.removeEventListener("scroll", this.OnScroll);
            }),
            (e.prototype.LoadEventToShowAsModal = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = Object(Pe.a)(this.props.location, "emclan")),
                        (a = Object(Pe.a)(this.props.location, "emgid")),
                        t && a
                          ? ((n = new T.a(t)),
                            this.state.modalEvent &&
                            this.state.modalEvent.clanSteamID.ConvertTo64BitString() ==
                              n.ConvertTo64BitString() &&
                            this.state.modalEvent.GID == a
                              ? [2]
                              : [
                                  4,
                                  w.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                                    n,
                                    a,
                                    0
                                  )
                                ])
                          : [3, 2]
                      );
                    case 1:
                      return (
                        (r = e.sent()), this.setState({ modalEvent: r }), [3, 3]
                      );
                    case 2:
                      this.state.modalEvent &&
                        this.setState({ modalEvent: null }),
                        (e.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.BShowFutureView = function() {
              var e = Object(Pe.a)(this.props.location, "upcoming");
              return e && "false" != e;
            }),
            (e.prototype.UpdateDocumentUI = function() {
              var e;
              if (
                this.props.filter_to_appids &&
                1 == this.props.filter_to_appids.length
              ) {
                var t = this.props.filter_to_appids[0],
                  a = t && b.a.GetStoreCapsuleInfo(t).GetAppStoreData();
                e = a && a.title;
              } else if (
                this.props.filter_to_clanids &&
                1 == this.props.filter_to_clanids.length
              ) {
                var n = this.props.filter_to_clanids[0],
                  r = n && g.a.GetClanInfoByClanAccountID(n);
                e = r && r.group_name;
              }
              var o = e
                ? Object(M.d)("#EventCalendar_TabTitle_GroupHub", e)
                : Object(M.d)("#EventCalendar_TabTitle_Global");
              document.title != o && (document.title = o),
                document.body.classList.contains("events_hub") ||
                  document.body.classList.add("events_hub");
            }),
            (e.prototype.OnResize = function() {
              this.setState(function(e) {
                var t = window.innerHeight,
                  a = !e.bControlBarWasOpenedByUser && We(),
                  n = Ve();
                return Object(
                  D.a
                )({ nVisibleHeight: t, bControlBarIsCollapsed: a }, n);
              });
            }),
            (e.prototype.SetInitialScrollTop = function(e) {
              var t = null == this.m_nInitialScrollPosition;
              (this.m_nInitialScrollPosition = Math.round(e)),
                t && this.ScrollToInitialPosition();
            }),
            (e.prototype.ScrollToInitialPosition = function() {
              (this.m_nForcedScrollPosition = this.m_nInitialScrollPosition),
                window.scrollTo(0, this.m_nForcedScrollPosition);
            }),
            (e.prototype.OnScroll = function() {
              var o = this,
                i = Math.round(window.scrollY);
              null != this.m_nForcedScrollPosition &&
              Math.abs(this.m_nForcedScrollPosition - i) >
                this.k_nMaxScrollErrorInPixels &&
              this.m_refDiv.current.clientHeight >
                window.innerHeight + this.m_nForcedScrollPosition
                ? window.setTimeout(function() {
                    return window.scrollTo({ top: o.m_nForcedScrollPosition });
                  }, 0)
                : this.setState(function(e) {
                    if (null != o.m_nForcedScrollPosition)
                      return (
                        (o.m_nForcedScrollPosition = null),
                        {
                          nScrollTop: i,
                          nDisappearingHeaderTop: e.nDisappearingHeaderTop
                        }
                      );
                    if (Math.abs(i - e.nScrollTop) < 2)
                      return {
                        nScrollTop: i,
                        nDisappearingHeaderTop: e.nDisappearingHeaderTop
                      };
                    var t =
                        (i > e.nScrollTop && o.state.bControlBarIsCollapsed) ||
                        !!e.modalEvent,
                      a = e.nGlobalHeaderHeight + e.nSteamLabsBannerHeight,
                      n = t ? -1 * a : 0,
                      r = Fe();
                    return (
                      r && (r.style.transform = "translateY(" + n + "px)"),
                      { nScrollTop: i, nDisappearingHeaderTop: n }
                    );
                  });
            }),
            (e.prototype.InitEventCalendarStore = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = o.m_bInitialLoad),
                        !this.state.bUserIsLoggedIn &&
                        this.BRequireLoggedInUser()
                          ? [3, 5]
                          : ((a = {
                              appids: this.props.filter_to_appids,
                              clanaccountids: this.props.filter_to_clanids,
                              collectionid: this.props.filter_to_collection
                            }),
                            Object(y.b)(a),
                            (n = Object(y.a)()),
                            (r = Object(x.f)(
                              "initialEvents",
                              "application_config"
                            )) && o.m_bInitialLoad
                              ? [4, n.RegisterCalendarEventsAndModels(r)]
                              : [3, 2])
                      );
                    case 1:
                      return e.sent(), (o.m_bInitialLoad = !1), [3, 4];
                    case 2:
                      return [
                        4,
                        n.RegisterCalendarEventsAndModels({ success: 1 })
                      ];
                    case 3:
                      e.sent(), (e.label = 4);
                    case 4:
                      n.BIsSingleSourceCalendar() &&
                        (n.BIsSingleAppCalendar()
                          ? b.a
                              .GetStoreCapsuleInfo(n.GetSingleAppID())
                              .HintLoadBroadcastAppData()
                          : g.a.LoadOGGClanInfoForClanSteamID(
                              T.a.InitFromClanID(n.GetSingleGroupID())
                            )),
                        (e.label = 5);
                    case 5:
                      return (
                        t &&
                          E.c.InitializeCheckboxes(
                            this.state.bUserIsLoggedIn && x.i.accountid
                          ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.ToggleControlBarCollapsed = function() {
              this.setState(function(e) {
                var t = !e.bControlBarIsCollapsed,
                  a = e.bControlBarIsCollapsed,
                  n = t ? e.nDisappearingHeaderTop : 0,
                  r = Fe();
                return (
                  r && (r.style.transform = "translateY(" + n + "px)"),
                  {
                    bControlBarIsCollapsed: t,
                    bControlBarWasOpenedByUser: a,
                    nDisappearingHeaderTop: n
                  }
                );
              });
            }),
            (e.prototype.OnControlBarChange = function() {
              (this.m_nInitialScrollPosition = null), window.scrollTo(0, 0);
            }),
            (e.prototype.CloseEventModal = function() {
              var e = Fe();
              e &&
                (e.style.transform =
                  "translateY(" + this.state.nDisappearingHeaderTop + "px)"),
                this.props.history.goBack();
            }),
            (e.prototype.OnEventClicked = function(e) {
              j.a.Get().RecordEventRead(e, 8);
              var t =
                  this.state.nGlobalHeaderHeight +
                  this.state.nSteamLabsBannerHeight,
                a = Fe();
              if (
                (a && (a.style.transform = "translateY(" + -1 * t + "px)"),
                L.a.bOpenEventLandingPage)
              ) {
                var n = "/newshub/app/" + e.appid + "/view/" + e.GID;
                this.props.history.push(n);
              } else
                Object(Pe.c)(this.props.history, {
                  emclan: e.clanSteamID.ConvertTo64BitString(),
                  emgid: e.GID
                });
            }),
            (e.prototype.ToggleFutureView = function() {
              Object(Pe.b)(
                this.props.history,
                "upcoming",
                this.BShowFutureView() ? "false" : "true"
              );
            }),
            (e.prototype.BRequireLoggedInUser = function() {
              return (
                !this.props.filter_to_appids &&
                !this.props.filter_to_clanids &&
                !this.props.filter_to_collection
              );
            }),
            (e.prototype.render = function() {
              var e =
                  this.state.nGlobalHeaderHeight +
                  this.state.nSteamLabsBannerHeight,
                t = this.state.nDisappearingHeaderTop,
                a = t + this.state.nGlobalHeaderHeight,
                n =
                  this.state.nVisibleHeight <= parseInt(F.a.strMinMobileHeight)
                    ? 0
                    : this.state.nDisappearingHeaderTop + e;
              return A.createElement(
                A.Fragment,
                null,
                A.createElement(
                  S.a,
                  null,
                  A.createElement(Xe, { nTopOffset: a })
                ),
                A.createElement(
                  "div",
                  { ref: this.m_refDiv, className: F.a.EventCalendarContainer },
                  A.createElement(
                    S.a,
                    null,
                    this.state.modalEvent
                      ? A.createElement(Be, {
                          classname: F.a.StoreHeaderAdjust,
                          appid: this.state.modalEvent.appid,
                          trackingLocation: 0,
                          announcementGID: this.state.modalEvent.GetAnnouncementGID(),
                          partnerEventStore: w.c,
                          eventModel: this.state.modalEvent,
                          showAppHeader: !0,
                          closeModal: this.CloseEventModal
                        })
                      : null
                  ),
                  A.createElement(
                    S.a,
                    null,
                    A.createElement(Y, {
                      bUserIsLoggedIn: this.state.bUserIsLoggedIn,
                      nDisappearingHeaderVisibleHeight: n,
                      nGlobalHeaderTop: t,
                      nVisibleHeight: this.state.nVisibleHeight,
                      bIsCollapsed: this.state.bControlBarIsCollapsed,
                      bShouldIncludeLegalFooter: !ze(),
                      fnToggleCollapsed: this.ToggleControlBarCollapsed,
                      fnOnFilterChange: this.OnControlBarChange
                    })
                  ),
                  Boolean(
                    !this.BRequireLoggedInUser() || this.state.bUserIsLoggedIn
                  )
                    ? A.createElement(
                        S.a,
                        null,
                        A.createElement($e, {
                          bShowFutureViewOnly: this.BShowFutureView(),
                          fnOnEventClick: this.OnEventClicked,
                          fnOnSeeFutureClick: this.ToggleFutureView,
                          fnSetInitialScrollPosition: this.SetInitialScrollTop,
                          nVisibleHeight: this.state.nVisibleHeight,
                          nScrollTop: this.state.nScrollTop,
                          nDisappearingHeaderHeight: e,
                          nDisappearingHeaderVisibleHeight: n,
                          nGroupHeaderHeight: this.state.nGroupHeaderHeight,
                          bSaveSpaceForControlBar: !this.state
                            .bControlBarIsCollapsed
                        })
                      )
                    : A.createElement(
                        S.a,
                        null,
                        A.createElement(
                          "div",
                          { className: F.a.LoginPrompt },
                          Object(M.d)("#EventCalendar_MainLoginPrompt"),
                          A.createElement(
                            "button",
                            { onClick: Re.a, className: F.a.LoginButton },
                            Object(M.d)("#Login_SignIn")
                          )
                        )
                      )
                )
              );
            }),
            (e.m_bInitialLoad = !0),
            Object(D.c)([v.a], e.prototype, "OnResize", null),
            Object(D.c)([v.a], e.prototype, "SetInitialScrollTop", null),
            Object(D.c)([v.a], e.prototype, "ScrollToInitialPosition", null),
            Object(D.c)([v.a], e.prototype, "OnScroll", null),
            Object(D.c)([v.a], e.prototype, "ToggleControlBarCollapsed", null),
            Object(D.c)([v.a], e.prototype, "OnControlBarChange", null),
            Object(D.c)([v.a], e.prototype, "CloseEventModal", null),
            Object(D.c)([v.a], e.prototype, "OnEventClicked", null),
            Object(D.c)([v.a], e.prototype, "ToggleFutureView", null),
            (e = o = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        Je = Object(c.g)(qe),
        Qe = x.c.STORE_BASE_URL + "labs",
        Ke = x.c.COMMUNITY_BASE_URL + "groups/SteamLabs/discussions/11/",
        Xe = function(e) {
          return A.createElement(
            "div",
            {
              style: { transform: "translateY(" + e.nTopOffset + "px)" },
              className: F.a.SteamLabsBanner
            },
            A.createElement(
              "div",
              { className: F.a.SteamLabsBannerCtn },
              A.createElement(
                "div",
                { className: F.a.SteamLabsIdentifiers },
                A.createElement(
                  "a",
                  {
                    className: F.a.SteamLabsName,
                    href: (x.c.IN_CLIENT ? "steam://openurl/" : "") + Qe,
                    target: x.c.IN_CLIENT ? void 0 : "_blank"
                  },
                  Object(M.d)("#SteamLabs")
                ),
                A.createElement(
                  "div",
                  { className: F.a.SteamLabsNumber },
                  Object(M.d)("#SteamLabs_ExperimentNumber", "009")
                )
              ),
              A.createElement(
                "a",
                {
                  className: F.a.SteamLabsButton,
                  href: (x.c.IN_CLIENT ? "steam://openurl/" : "") + Ke,
                  target: x.c.IN_CLIENT ? void 0 : "_blank"
                },
                Object(M.d)("#SteamLabs_DiscussionLink")
              )
            )
          );
        },
        $e = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.GetCurrentSectionLayout = function() {
              var t =
                this.props.nDisappearingHeaderHeight +
                parseInt(F.a.strEndOfRowsHeight);
              return Object(y.a)()
                .GetCalendarSections(this.props.bShowFutureViewOnly)
                .map(function(e) {
                  return {
                    section: e,
                    nTopOfSection: t,
                    nBottomOfSection: (t += e.nRenderedHeight)
                  };
                });
            }),
            (t.prototype.RecordSectionRenderedHeight = function(e, t) {
              if (e.bIsFutureSection && !L.a.bEnableNewsHubMayUpdate) {
                var a = Math.max(
                  0,
                  t +
                    parseInt(F.a.strEndOfRowsHeight) -
                    this.props.nGroupHeaderHeight +
                    this.props.nDisappearingHeaderHeight -
                    this.props.nDisappearingHeaderVisibleHeight
                );
                this.props.fnSetInitialScrollPosition(a);
              }
              e.nRenderedHeight != t && (e.nRenderedHeight = t);
            }),
            (t.prototype.render = function() {
              var E = this,
                e = this.props,
                S = e.bShowFutureViewOnly,
                f = e.fnOnEventClick,
                O = e.fnOnSeeFutureClick,
                t = e.nVisibleHeight,
                C = e.nScrollTop,
                T = e.nDisappearingHeaderVisibleHeight,
                w = e.nGroupHeaderHeight,
                a = e.bSaveSpaceForControlBar;
              if (0 == Object(y.a)().GetCalendarSections(S).length) return null;
              var I = Ue(),
                k = C + T,
                D = C + t,
                j = !0,
                n = this.GetCurrentSectionLayout().map(function(e, t) {
                  var a = e.section,
                    n = e.nTopOfSection,
                    r = e.nBottomOfSection,
                    o = a.strId,
                    i = a.strSectionLabel,
                    s = a.rtSectionStart,
                    l = a.rtSectionEnd,
                    c = a.bIsFutureSection,
                    d = a.nRenderedHeight,
                    p = Math.max(0, k - r),
                    u = Math.max(0, n - D),
                    m = E.props.nVisibleHeight > Math.max(p, u),
                    h = n < k,
                    v = r - C - w,
                    _ = h ? Math.min(T, v) : 0,
                    b = r - k < 75,
                    g = L.a.bEnableNewsHubMayUpdate
                      ? Object(N.a)(F.a.PastSection, j && F.a.DarkerBackground)
                      : Object(N.a)(
                          c ? F.a.FutureSection : F.a.PastSection,
                          j && F.a.DarkerBackground
                        );
                  0 < d && (j = !j);
                  var y = L.a.bEnableNewsHubMayUpdate && !S && c;
                  return A.createElement(
                    tt,
                    {
                      key: o,
                      bShouldRenderContents: m,
                      bRenderStickyHeader: h,
                      nExtraHeaderOffset: _,
                      strSectionLabel: i,
                      rtSectionStart: s,
                      rtSectionEnd: l,
                      strSectionClassname: g,
                      bUseHorizontalLayout: y,
                      fnOnSeeFutureClick: O,
                      bIsFutureSection: c && !L.a.bEnableNewsHubMayUpdate,
                      bShowEarliestFirst: S || y,
                      bIsNearBottom: b,
                      nInitialHeight: d,
                      fnReportHeight: function(e) {
                        return E.RecordSectionRenderedHeight(a, e);
                      },
                      fnOnEventClick: f,
                      bSuppressHoverEffects: I
                    },
                    " "
                  );
                }),
                r =
                  S || L.a.bEnableNewsHubMayUpdate
                    ? null
                    : A.createElement(
                        "div",
                        {
                          key: "no-more-future-events",
                          className: Object(N.a)(
                            F.a.EndOfRows,
                            F.a.CalendarRow,
                            F.a.FutureSection,
                            F.a.Visible
                          )
                        },
                        A.createElement(
                          "div",
                          { className: F.a.NoMoreRows },
                          Object(y.a)().BMayHaveAnyVisibleFutureEvents() &&
                            Object(M.d)("#EventCalendar_NoMoreFutureEvents")
                        )
                      ),
                o = S
                  ? Object(y.a)().BHitForwardHorizon()
                  : Object(y.a)().BHitBackwardHorizon(),
                i = A.createElement(
                  "div",
                  {
                    key: "no-more-events",
                    className: Object(N.a)(
                      F.a.EndOfRows,
                      F.a.CalendarRow,
                      o && F.a.Visible
                    )
                  },
                  A.createElement(
                    "div",
                    { className: F.a.NoMoreRows },
                    " ",
                    Object(M.d)(
                      S
                        ? "#EventCalendar_NoMoreFutureEvents"
                        : "#EventCalendar_NoMorePastEvents"
                    ),
                    " "
                  )
                );
              return A.createElement(
                "div",
                {
                  className: Object(N.a)(
                    F.a.RowContainer,
                    a && F.a.WideLeftGutter
                  )
                },
                A.createElement(
                  "div",
                  { className: F.a.Rows },
                  A.createElement("div", {
                    className: Object(N.a)(
                      F.a.DisappearingHeaderSpacer,
                      F.a.FutureSection
                    ),
                    key: "spacer"
                  }),
                  r,
                  n,
                  i
                )
              );
            }),
            Object(D.c)(
              [v.a],
              t.prototype,
              "RecordSectionRenderedHeight",
              null
            ),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        et = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.rgCalendarItems,
                a = e.fnOnEventClick,
                n = e.bSuppressHoverEffects;
              return t && 0 != t.length
                ? A.createElement(
                    "div",
                    { className: F.a.CalendarRow },
                    A.createElement(
                      "div",
                      { className: F.a.HorizontalTileContainer },
                      A.createElement(
                        "div",
                        { className: F.a.HorizontalTiles },
                        t.map(function(e) {
                          return A.createElement(De, {
                            key: "ht-" + e.unique_id,
                            calendarEvent: e,
                            partnerEventStore: w.c,
                            fnOnClicked: a,
                            bSuppressHoverEffects: n,
                            bMiniMode: 1 < t.length
                          });
                        })
                      )
                    )
                  )
                : null;
            }),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        tt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_ref = A.createRef()), (e.bNeedToReportHeight = !1), e;
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var e = this.m_ref.current.getBoundingClientRect().height;
              this.props.fnReportHeight(e);
            }),
            (e.prototype.componentDidUpdate = function() {
              if (this.m_ref.current) {
                var e = this.m_ref.current.getBoundingClientRect().height;
                (this.bNeedToReportHeight || e != this.props.nInitialHeight) &&
                  (this.props.fnReportHeight(e),
                  (this.bNeedToReportHeight = !1));
              }
            }),
            Object.defineProperty(e.prototype, "cachedCalendarItems", {
              get: function() {
                var e = this;
                return (
                  this.props.bIsFutureSection &&
                    (this.bNeedToReportHeight = !0),
                  Object(y.a)().GetCalendarItemsInTimeRange(
                    Object(s.a)(function() {
                      return e.props.rtSectionStart;
                    }),
                    Object(s.a)(function() {
                      return e.props.rtSectionEnd;
                    })
                  )
                );
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.bShouldRenderContents,
                a = e.bRenderStickyHeader,
                n = e.nExtraHeaderOffset,
                r = e.strSectionLabel,
                o = e.strSectionClassname,
                i = e.bUseHorizontalLayout,
                s = e.fnOnSeeFutureClick,
                l = e.bIsFutureSection,
                c = e.bShowEarliestFirst,
                d = e.bIsNearBottom,
                p = e.nInitialHeight,
                u = e.fnOnEventClick,
                m = e.bSuppressHoverEffects;
              if (!t)
                return A.createElement(
                  "div",
                  {
                    ref: this.m_ref,
                    style: { minHeight: p + "px" },
                    className: o
                  },
                  " "
                );
              var h = this.cachedCalendarItems,
                v = h.rgCalendarItems,
                _ = h.bIsComplete;
              if (0 == v.length && _)
                return A.createElement("div", {
                  ref: this.m_ref,
                  className: o
                });
              c && (v = v.reverse());
              var b = l && d,
                g = A.createElement(
                  "div",
                  {
                    style: { top: n },
                    className: Object(N.a)(
                      F.a.GroupHeader,
                      F.a.CalendarRow,
                      a && F.a.HeaderAtTop,
                      b && F.a.FutureHint
                    )
                  },
                  A.createElement(
                    "div",
                    { className: F.a.GroupHeaderTitle },
                    A.createElement(
                      "span",
                      null,
                      " ",
                      b ? Object(M.d)("#EventCalendar_FutureEventsHint") : r,
                      " "
                    ),
                    i &&
                      3 < v.length &&
                      A.createElement(
                        "div",
                        { className: F.a.SeeAllLink, onClick: s },
                        Object(M.d)("#EventCalendar_FutureEventsLink"),
                        A.createElement(
                          "span",
                          { className: F.a.SeeAllCount },
                          v.length + (_ ? "" : "+")
                        )
                      )
                  )
                ),
                y = i
                  ? A.createElement(et, {
                      rgCalendarItems: v.slice(0, 3),
                      fnOnEventClick: u,
                      bSuppressHoverEffects: m
                    })
                  : v.map(function(e) {
                      return A.createElement(
                        "div",
                        { key: e.unique_id, className: F.a.CalendarRow },
                        A.createElement(De, {
                          calendarEvent: e,
                          partnerEventStore: w.c,
                          fnOnClicked: u,
                          bSuppressHoverEffects: m
                        })
                      );
                    });
              return A.createElement(
                "div",
                { ref: this.m_ref, className: o },
                !l || _
                  ? null
                  : A.createElement(q.a, {
                      size: "xlarge",
                      position: "center"
                    }),
                g,
                y,
                l || _ || i
                  ? null
                  : A.createElement(q.a, { size: "xlarge", position: "center" })
              );
            }),
            Object(D.c)([m.computed], e.prototype, "cachedCalendarItems", null),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        at = a("s4NR"),
        nt = a.n(at),
        rt = a("AXHe"),
        ot = a("Cs6D"),
        it = a("3+zv");
      ((Ye = Ze || (Ze = {}))[(Ye.k_ModReviewed = 0)] = "k_ModReviewed"),
        (Ye[(Ye.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
        (Ye[(Ye.k_ChangeEventType = 2)] = "k_ChangeEventType"),
        (Ye[(Ye.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
        (Ye[(Ye.k_ModReReviewed = 4)] = "k_ModReReviewed");
      var st = "ModAct",
        lt = (function() {
          function e() {}
          return (
            (e.prototype.ToModString = function() {
              var e =
                st +
                "_" +
                this.m_moderator +
                "_" +
                Math.floor(this.m_rtWhen) +
                "_" +
                this.m_action;
              switch (this.m_action) {
                case Ze.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case Ze.k_UpdateSeasonTags:
                  e += "_" + this.m_newTagAdded;
              }
              return e;
            }),
            (e.prototype.FromString = function(e) {
              var t = e.split("_");
              if (!t || t[0] !== st) return !1;
              switch (
                ((this.m_moderator = Number(t[1])),
                (this.m_rtWhen = Number(t[2])),
                (this.m_action = Number(t[3])),
                this.m_action)
              ) {
                case Ze.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case Ze.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function(e) {
              return (
                (this.m_moderator = x.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = Ze.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function(e) {
              return (
                (this.m_moderator = x.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? Ze.k_ModReviewed : Ze.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function(e) {
              return (
                (this.m_moderator = x.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? Ze.k_ModReReviewed : Ze.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function(e) {
              return e.startsWith(st);
            }),
            (e.prototype.SetUpdateSeasonalTags = function(e) {
              return (
                (this.m_moderator = x.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = Ze.k_UpdateSeasonTags),
                (this.m_newTagAdded = e),
                this
              );
            }),
            e
          );
        })(),
        ct = new ((function() {
          function e() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          return (
            (e.prototype.BHasSolrEvent = function(e) {
              return this.m_mapEventGIDToSolrData.has(e);
            }),
            (e.prototype.GetAllSolrEvents = function() {
              return this.m_listEvents;
            }),
            (e.prototype.ClearAllSolrEvents = function() {
              (this.m_mapEventGIDToSolrData = new Map()),
                (this.m_listEvents = new Array());
            }),
            (e.prototype.LoadPartnerEventForModerationIncremental = function(
              r,
              o,
              i,
              s,
              l,
              c,
              d,
              p,
              u
            ) {
              return (
                void 0 === o && (o = 0),
                void 0 === i && (i = 10),
                Object(D.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n = this;
                  return Object(D.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          this.GetLatestPartnerEvents(r, o, i, s, l, c, d, p, u)
                        ];
                      case 1:
                        return (
                          (t = e.sent()),
                          (a = new Array()),
                          Object(m.runInAction)(function() {
                            t.forEach(function(e) {
                              n.m_mapEventGIDToSolrData.has(e.unique_id) ||
                                (a.push(e),
                                n.m_mapEventGIDToSolrData.set(e.unique_id, e),
                                n.m_listEvents.push(e));
                            });
                          }),
                          [2, a]
                        );
                    }
                  });
                })
              );
            }),
            (e.prototype.GetLatestPartnerEvents = function(
              r,
              o,
              i,
              s,
              l,
              c,
              d,
              p,
              u,
              m,
              h,
              v
            ) {
              return (
                void 0 === o && (o = 0),
                void 0 === i && (i = 10),
                Object(D.b)(this, void 0, void 0, function() {
                  var t, a, n;
                  return Object(D.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t =
                            x.c.STORE_BASE_URL +
                            "events_admin/ajaxgetlatestpartnerevents"),
                          (a = {
                            page: o,
                            count: i,
                            date: d,
                            appids: void 0 === s ? void 0 : s.join(","),
                            required_tags: void 0 === l ? void 0 : l.join(","),
                            exclude_tags: void 0 === c ? void 0 : c.join(","),
                            eventtypefilter:
                              void 0 === p ? void 0 : p.join(","),
                            orderByVisibility: u || void 0,
                            creator_home_clan_id:
                              void 0 === m ? void 0 : m.join(","),
                            showUnpublished: void 0 === v ? void 0 : v,
                            term: void 0 === h ? void 0 : h
                          }),
                          [
                            4,
                            _.a.get(t, {
                              params: a,
                              withCredentials: !0,
                              cancelToken: r ? r.token : void 0
                            })
                          ]
                        );
                      case 1:
                        return [2, (n = e.sent()).data ? n.data.docs : []];
                    }
                  });
                })
              );
            }),
            (e.prototype.UpdateTagsOnPartnerEvent = function(r, o, i, s, l, c) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          x.c.STORE_BASE_URL + "events_admin/ajaxupdatetags"),
                        (a = s.join(",")),
                        c &&
                          (0 < s.length && (a += ","), (a += c.ToModString())),
                        (n = new FormData()).append("sessionid", x.c.SESSIONID),
                        n.append("clan_accountid", "" + o.GetAccountID()),
                        n.append("gid_announcement", i),
                        n.append("add_tags", a),
                        n.append("remove_tags", l.join(",")),
                        [
                          4,
                          _.a.post(t, n, {
                            withCredentials: !0,
                            cancelToken: r.token
                          })
                        ]
                      );
                    case 1:
                      return [2, e.sent().data.tags];
                  }
                });
              });
            }),
            (e.prototype.UpdatePartnerEventType = function(n, r, o, i) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          x.c.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (a = new FormData()).append("sessionid", x.c.SESSIONID),
                        a.append("clan_accountid", "" + r.GetAccountID()),
                        a.append("gid_event", o),
                        a.append("new_event_type", "" + i),
                        [
                          4,
                          _.a.post(t, a, {
                            withCredentials: !0,
                            cancelToken: n.token
                          })
                        ]
                      );
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            Object(D.c)(
              [m.observable],
              e.prototype,
              "m_mapEventGIDToSolrData",
              void 0
            ),
            Object(D.c)([m.observable], e.prototype, "m_listEvents", void 0),
            Object(D.c)([m.action], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })())(),
        dt = a("Qcoi"),
        pt = a("T27q"),
        ut = a("BpzF"),
        mt = a("fpVW"),
        ht = a.n(mt),
        vt = a("UxvL"),
        _t = a("E9gz"),
        bt = a("dsx8"),
        gt = a("f0Wu"),
        yt = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0
        },
        Et = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = _.a.CancelToken.source()),
              (e.m_refScroll = A.createRef()),
              (e.m_IntervalTimer = void 0),
              (e.state = {
                bInfiniteScrollLoading: !1,
                bExhaustedEventList: !1,
                nLastFetchCompletedMS: 0,
                selectedTags: void 0,
                excludedTags: void 0,
                filterDate: void 0,
                eventsToLoadPerPaging: 20,
                filterEventTypes: void 0,
                bOrderByVisibilityStartTime: !1
              }),
              (e.m_nPage = 0),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.setState(
                { bInfiniteScrollLoading: !0 },
                this.LoadMoreModerationEvents
              ),
                window.addEventListener("scroll", this.OnScroll, !0);
              var e = nt.a.parse(
                  this.props.history.location.search.substring(1)
                ),
                t = void 0;
              "string" == typeof e.selectedTags
                ? 0 < e.selectedTags.length &&
                  (t = [{ label: e.selectedTags, value: e.selectedTags }])
                : e.selectedTags &&
                  ((t = []),
                  e.selectedTags.forEach(function(e) {
                    return t.push({ label: e, value: e });
                  }));
              var a = void 0;
              "string" == typeof e.excludedTags
                ? 0 < e.excludedTags.length &&
                  (a = [{ label: e.excludedTags, value: e.excludedTags }])
                : e.excludedTags &&
                  ((a = []),
                  e.excludedTags.forEach(function(e) {
                    return a.push({ label: e, value: e });
                  }));
              var n = void 0;
              if ("string" == typeof e.eventtype) {
                if (0 < e.eventtype.length) {
                  var r = Number.parseInt(e.eventtype);
                  n = [{ label: Object(pe.b)(r), value: r }];
                }
              } else
                e.excludedTags &&
                  ((n = []),
                  e.excludedTags.forEach(function(e) {
                    var t = Number.parseInt(e);
                    n.push({ label: Object(pe.b)(t), value: t });
                  }));
              var o = void 0;
              "string" == typeof e.filterDate &&
                0 < e.filterDate.length &&
                (o = gt.unix(Number(e.filterDate)));
              var i = !1;
              "string" == typeof e.orderByVisibility &&
                0 < e.orderByVisibility.length &&
                (i = Boolean(e.orderByVisibility)),
                this.setState({
                  selectedTags: t,
                  excludedTags: a,
                  filterEventTypes: n,
                  filterDate: o,
                  bOrderByVisibilityStartTime: i
                });
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "EventModerationLanding component unmounted"
              ),
                window.removeEventListener("scroll", this.OnScroll),
                this.ClearTimer();
            }),
            (e.prototype.HandleUpdateQueryParameter = function() {
              if (this.props.history) {
                var e = this.state,
                  t = e.selectedTags,
                  a = e.excludedTags,
                  n = e.filterEventTypes,
                  r = e.filterDate,
                  o = e.bOrderByVisibilityStartTime;
                t || a || n || r || o
                  ? this.props.history.push(
                      "?" +
                        nt.a.stringify({
                          selectedTags:
                            t && 0 < t.length
                              ? t.map(function(e) {
                                  return e.value;
                                })
                              : null,
                          excludedTags:
                            a && 0 < a.length
                              ? a.map(function(e) {
                                  return e.value;
                                })
                              : null,
                          eventtype:
                            n && 0 < n.length
                              ? n.map(function(e) {
                                  return "" + e.value;
                                })
                              : null,
                          filterDate: r && 0 < r.unix() ? "" + r.unix() : null,
                          orderByVisibility: o ? "1" : null
                        })
                    )
                  : this.props.history.push("?");
              }
            }),
            (e.prototype.ClearTimer = function() {
              this.m_IntervalTimer &&
                (window.clearInterval(this.m_IntervalTimer),
                (this.m_IntervalTimer = void 0));
            }),
            (e.prototype.HandleError = function(e) {
              var t = Object(Me.a)(e);
              console.error(
                "EventModerationLanding error: " + t.strErrorMsg,
                t
              ),
                this.setState({
                  bInfiniteScrollLoading: !1,
                  bExhaustedEventList: !0,
                  nLastFetchCompletedMS: Date.now()
                });
            }),
            (e.prototype.LoadMorePublicEventWithDelay = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                return Object(D.e)(this, function(e) {
                  return (
                    (this.m_IntervalTimer = window.setInterval(
                      this.LoadMoreModerationEvents,
                      500
                    )),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.LoadMoreModerationEvents = function() {
              var t = this;
              if ((this.ClearTimer(), this.state.bInfiniteScrollLoading)) {
                var e = this.state.filterEventTypes
                    ? this.state.filterEventTypes.map(function(e) {
                        return e.value;
                      })
                    : void 0,
                  a = this.state.selectedTags
                    ? this.state.selectedTags.map(function(e) {
                        return e.value;
                      })
                    : void 0,
                  n = this.state.excludedTags
                    ? this.state.excludedTags.map(function(e) {
                        return e.value;
                      })
                    : void 0;
                ct.LoadPartnerEventForModerationIncremental(
                  this.m_cancelSignal,
                  this.m_nPage,
                  this.state.eventsToLoadPerPaging,
                  [this.props.appid],
                  a,
                  n,
                  this.state.filterDate,
                  e,
                  this.state.bOrderByVisibilityStartTime
                )
                  .then(function(e) {
                    (t.m_nPage += t.state.eventsToLoadPerPaging),
                      t.setState({
                        bInfiniteScrollLoading: !1,
                        bExhaustedEventList: 0 == e.length,
                        nLastFetchCompletedMS: Date.now()
                      });
                  })
                  .catch(function(e) {
                    return t.HandleError(e);
                  });
              }
            }),
            (e.prototype.UpdateQueryParametersAndLoadMoreEvents = function() {
              this.HandleUpdateQueryParameter(),
                this.LoadMoreModerationEvents();
            }),
            (e.prototype.RenderTiles = function() {
              var t = new Array();
              return (
                ct.GetAllSolrEvents().forEach(function(e) {
                  t.push(
                    A.createElement(ft, { solrData: e, key: e.unique_id })
                  );
                }),
                t
              );
            }),
            (e.prototype.OnScroll = function() {
              if (this.m_refScroll && this.m_refScroll.current) {
                var e = this.m_refScroll.current;
                e &&
                  (this.state.bExhaustedEventList ||
                    this.state.bInfiniteScrollLoading ||
                    (e.getBoundingClientRect().bottom <=
                      window.innerHeight + 50 &&
                      (this.state.nLastFetchCompletedMS + 500 < Date.now()
                        ? this.setState(
                            { bInfiniteScrollLoading: !0 },
                            this.LoadMorePublicEventWithDelay
                          )
                        : this.setState(
                            { bInfiniteScrollLoading: !0 },
                            this.LoadMoreModerationEvents
                          ))));
              }
            }),
            (e.prototype.ClearPreviousData = function() {
              (this.m_nPage = 0), ct.ClearAllSolrEvents();
            }),
            (e.prototype.OnDateChange = function(e) {
              if ("string" == typeof e) {
                var t = gt(e, "M/D/YYYY", !0);
                if (!t.isValid())
                  return void this.setState({ filterDateAsString: e });
                e = t;
              }
              this.state.filterDate != e &&
                (this.ClearPreviousData(),
                this.setState(
                  Object(D.a)(
                    { filterDateAsString: void 0, filterDate: e },
                    yt
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                ));
            }),
            (e.prototype.IsValidDate = function(e) {
              var t = new Date();
              return (
                e.unix() <
                gt
                  .unix(t.getTime() / 1e3 + 86400)
                  .hour(0)
                  .seconds(0)
                  .minute(0)
                  .unix()
              );
            }),
            (e.prototype.OnEventPerPageLoad = function(e) {
              var t = Number.parseInt(e.currentTarget.value);
              t &&
                0 < t &&
                t != this.state.eventsToLoadPerPaging &&
                this.setState({ eventsToLoadPerPaging: t });
            }),
            (e.prototype.OnChangeEventSelectedTags = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(D.a)({ selectedTags: e }, yt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventExcludeTags = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(D.a)({ excludedTags: e }, yt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventTypeFilter = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(D.a)({ filterEventTypes: e }, yt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnVisibilityStartTimeChange = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(D.a)(
                    { bOrderByVisibilityStartTime: e.currentTarget.checked },
                    yt
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.render = function() {
              var e = this.RenderTiles(),
                t = h.c.map(function(e) {
                  return { value: e, label: Object(pe.b)(e) };
                }),
                a = it.a.map(function(e) {
                  return { value: e, label: e };
                }),
                n = {
                  option: function(e) {
                    return Object(D.a)(Object(D.a)({}, e), {
                      color: "#444444"
                    });
                  }
                };
              return A.createElement(
                "div",
                { className: _t.ModerationContainer, ref: this.m_refScroll },
                A.createElement(
                  "div",
                  null,
                  A.createElement(
                    "h2",
                    null,
                    Object(M.d)("#EventModeration_Title")
                  ),
                  A.createElement(
                    S.a,
                    null,
                    A.createElement(
                      "div",
                      { className: Object(N.a)(ht.a.FlexRowContainer) },
                      A.createElement(
                        "div",
                        { className: _t.FilterContainer },
                        A.createElement(
                          "span",
                          null,
                          Object(M.d)("#EventModeration_FilterByTag")
                        ),
                        A.createElement(ot.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventSelectedTags,
                          value: this.state.selectedTags,
                          options: a,
                          styles: n
                        })
                      ),
                      A.createElement(
                        "div",
                        { className: _t.FilterContainer },
                        A.createElement(
                          "span",
                          null,
                          Object(M.d)("#EventModeration_FilterExcludeByTag")
                        ),
                        A.createElement(ot.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventExcludeTags,
                          value: this.state.excludedTags,
                          options: a,
                          styles: n
                        })
                      ),
                      A.createElement(
                        "div",
                        { className: _t.FilterContainer },
                        A.createElement(
                          "span",
                          null,
                          Object(M.d)("#EventModeration_FilterToType")
                        ),
                        A.createElement(ot.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventTypeFilter,
                          value: this.state.filterEventTypes,
                          options: t,
                          styles: n
                        })
                      ),
                      A.createElement(
                        "div",
                        { className: _t.FilterContainer },
                        A.createElement(
                          "span",
                          null,
                          Object(M.d)("#EventModeration_FilterToDate")
                        ),
                        A.createElement(rt, {
                          onChange: this.OnDateChange,
                          timeFormat: !1,
                          value: this.state.filterDate,
                          isValidDate: this.IsValidDate,
                          inputProps: {
                            placeholder: Object(M.d)(
                              "#EventModeration_PickDatee"
                            ),
                            className: _t.TimeWidth
                          }
                        })
                      ),
                      A.createElement(
                        "div",
                        { className: _t.FilterContainer },
                        A.createElement(
                          "label",
                          { htmlFor: "EventPerLoad" },
                          Object(M.d)("#EventModeration_PerPageLoad")
                        ),
                        A.createElement(
                          "div",
                          null,
                          A.createElement("input", {
                            type: "number",
                            id: "EventPerLoad",
                            min: "10",
                            max: "5000",
                            value: this.state.eventsToLoadPerPaging,
                            onChange: this.OnEventPerPageLoad
                          })
                        )
                      ),
                      A.createElement(
                        "div",
                        { className: _t.FilterContainer },
                        A.createElement("input", {
                          type: "checkbox",
                          id: "VisibilityStart",
                          checked: this.state.bOrderByVisibilityStartTime,
                          onChange: this.OnVisibilityStartTimeChange
                        }),
                        A.createElement(
                          "label",
                          { htmlFor: "VisibilityStart" },
                          Object(M.d)("#EventModeration_OrderByFirstVisible")
                        )
                      )
                    )
                  )
                ),
                A.createElement(S.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  A.createElement(q.a, {
                    position: "center",
                    size: "medium",
                    string: Object(M.d)("#Loading")
                  })
              );
            }),
            Object(D.c)([v.a], e.prototype, "HandleError", null),
            Object(D.c)(
              [v.a],
              e.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(D.c)([v.a], e.prototype, "LoadMoreModerationEvents", null),
            Object(D.c)(
              [v.a],
              e.prototype,
              "UpdateQueryParametersAndLoadMoreEvents",
              null
            ),
            Object(D.c)([v.a], e.prototype, "OnScroll", null),
            Object(D.c)([v.a], e.prototype, "OnDateChange", null),
            Object(D.c)([v.a], e.prototype, "IsValidDate", null),
            Object(D.c)([v.a], e.prototype, "OnEventPerPageLoad", null),
            Object(D.c)([v.a], e.prototype, "OnChangeEventSelectedTags", null),
            Object(D.c)([v.a], e.prototype, "OnChangeEventExcludeTags", null),
            Object(D.c)([v.a], e.prototype, "OnChangeEventTypeFilter", null),
            Object(D.c)(
              [v.a],
              e.prototype,
              "OnVisibilityStartTimeChange",
              null
            ),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        St = Object(c.g)(Et),
        ft = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingEvent: !w.c.BHasClanEventModel(
                  e.props.solrData.unique_id
                ),
                bShowAsModal: !1,
                bSavingModeration: !1
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var a = this,
                e = this.props.solrData,
                t = e.unique_id;
              if (!w.c.BHasClanEventModel(t)) {
                var n = Date.now() / 1e3;
                w.c
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new T.a(e.clan_steamid),
                    t,
                    n
                  )
                  .then(function() {
                    return a.setState({ bLoadingEvent: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(Me.a)(e);
                    console.error(
                      "EventModerationTile: Event Load: " + t.strErrorMsg,
                      t
                    ),
                      a.setState({ bLoadingEvent: !1 });
                  });
              }
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "EventModerationTile component unmounted"
              );
            }),
            (e.prototype.ShowModalEvent = function() {
              var e = this.props.solrData.unique_id;
              !this.state.bLoadingEvent &&
                w.c.BHasClanEventModel(e) &&
                this.setState({ bShowAsModal: !0 });
            }),
            (e.prototype.HideModalEvent = function() {
              this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
            }),
            (e.prototype.OnModeratedChanged = function(e) {
              if (!this.state.bSavingModeration) {
                var t = this.props.solrData.unique_id,
                  a = w.c.GetClanEventModel(t),
                  n = e.target.checked,
                  r =
                    !a.BHasTag("mod_reviewed") ||
                    a.BHasTag("mod_require_rereview");
                a &&
                  n === r &&
                  this.setState(
                    { bSavingModeration: !0 },
                    this.ApplyModerationToggle
                  );
              }
            }),
            (e.prototype.ApplyModerationToggle = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, s, l, c, d;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props.solrData),
                        (a = t.unique_id),
                        (n = w.c.GetClanEventModel(a)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (r = new Array()),
                        (o = new Array()),
                        (i =
                          n.BHasTag("mod_reviewed") &&
                          !n.BHasTag("mod_require_rereview")),
                        (s = new lt().SetReviewAction(!i)),
                        i
                          ? r.push("mod_require_rereview")
                          : (r.push("mod_reviewed"),
                            o.push("mod_require_rereview"),
                            n.BHasTag("mod_require_rereview") &&
                              s.SetReReviewAction(!i)),
                        [
                          4,
                          ct.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            r,
                            o,
                            s
                          )
                        ]
                      );
                    case 2:
                      return (l = e.sent()), (n.vecTags = l), [3, 4];
                    case 3:
                      return (
                        (c = e.sent()),
                        (d = Object(Me.a)(c)),
                        console.error(
                          "EventModerationTile " + d.strErrorMsg,
                          d
                        ),
                        [3, 4]
                      );
                    case 4:
                      return this.setState({ bSavingModeration: !1 }), [2];
                  }
                });
              });
            }),
            (e.prototype.OnChangeCategory = function(e) {
              var t = this.props.solrData,
                a = w.c.GetClanEventModel(t.unique_id);
              Object(be.d)(
                A.createElement(kt, { eventModel: a }),
                Object(ye.m)(e)
              );
            }),
            (e.prototype.OnUpdateSeasonalTag = function(e) {
              var t = this.props.solrData,
                a = w.c.GetClanEventModel(t.unique_id);
              Object(be.d)(
                A.createElement(jt, { eventModel: a }),
                Object(ye.m)(e)
              );
            }),
            (e.prototype.render = function() {
              var e,
                t = this.props.solrData,
                a = t.unique_id,
                n = Number(t.appid),
                r = Object(h.e)(x.c.LANGUAGE),
                o = w.c.GetClanEventModel(a);
              if (o) {
                if (this.state.bShowAsModal)
                  return A.createElement(
                    ge.h,
                    { className: bt.StoreHeaderAdjust },
                    A.createElement(
                      "div",
                      null,
                      A.createElement(pt.b, {
                        event: o,
                        fnClose: this.HideModalEvent
                      })
                    )
                  );
                var i = o.GetImageForSizeAsArrayWithFallback(
                    "capsule",
                    r,
                    te.c.capsule_main
                  ),
                  s = o.BImageNeedScreenshotFallback("capsule", r);
                e =
                  0 < i.length
                    ? A.createElement(
                        A.Fragment,
                        null,
                        A.createElement(vt.a, { rgSources: i }),
                        s &&
                          A.createElement(
                            "div",
                            { className: _t.NoCapsule },
                            Object(M.d)("#EventModTile_FallbackImageText")
                          )
                      )
                    : A.createElement(
                        "div",
                        { className: _t.NoCapsule },
                        Object(M.d)("#EventModTile_NoCapsule")
                      );
              } else e = Object(M.d)("#Loading");
              var l = t.hidden
                  ? t.published
                    ? Object(M.d)("#EVentModTile_State_Staged")
                    : Object(M.d)("#EVentModTile_State_Draft")
                  : Object(M.d)("#EVentModTile_State_Published"),
                c = o ? o.type : Number(t.event_type);
              return A.createElement(
                S.a,
                null,
                A.createElement(
                  "div",
                  { className: _t.Tile },
                  A.createElement(
                    "div",
                    { className: _t.TileCapsule, onClick: this.ShowModalEvent },
                    e
                  ),
                  A.createElement(
                    "div",
                    { className: _t.TileDetails },
                    A.createElement(
                      "div",
                      { className: _t.DetailsLeft },
                      A.createElement("div", null, l),
                      A.createElement(
                        "a",
                        {
                          href:
                            (x.c.IN_CLIENT ? "steam://openurl/" : "") +
                            x.c.COMMUNITY_BASE_URL +
                            "ogg/" +
                            n +
                            "/announcements/detail/" +
                            t.announcement_gid,
                          target: x.c.IN_CLIENT ? void 0 : "_blank",
                          className: _t.EventTitle
                        },
                        t.event_name
                      ),
                      A.createElement(
                        "div",
                        {
                          className: Object(N.a)(
                            1 == c ? _t.TileEventOtherType : ""
                          )
                        },
                        o ? o.GetCategoryAsString() : t.event_type
                      ),
                      this.state.bLoadingEvent &&
                        A.createElement(q.a, {
                          size: "small",
                          string: Object(M.d)("#Loading")
                        }),
                      A.createElement(Ct, {
                        accountID: Number(t.creator_accountid),
                        locToken: "#EventModTile_Author"
                      }),
                      Boolean(
                        t.updator_accountid &&
                          0 < Number(t.updator_accountid) &&
                          t.updator_accountid != t.creator_accountid
                      ) &&
                        A.createElement(Ct, {
                          accountID: Number(t.updator_accountid),
                          locToken: "#EventModTile_Updator"
                        }),
                      A.createElement(wt, {
                        appid: n,
                        clanSteamID: new T.a(t.clan_steamid)
                      })
                    ),
                    o &&
                      A.createElement(
                        A.Fragment,
                        null,
                        A.createElement(
                          "div",
                          { className: _t.DetailsMiddle },
                          A.createElement(
                            "div",
                            { className: _t.ModeratedFlagCtn },
                            A.createElement("input", {
                              type: "checkbox",
                              id: o.GID + "_moderated",
                              checked: Boolean(
                                o.BHasTag("mod_reviewed") &&
                                  !o.BHasTag("mod_require_rereview")
                              ),
                              onChange: this.OnModeratedChanged
                            }),
                            A.createElement(
                              "label",
                              { htmlFor: o.GID + "_moderated" },
                              this.state.bSavingModeration &&
                                A.createElement(q.a, { size: "small" }),
                              Boolean(!o.BHasTag("mod_reviewed")) &&
                                Object(M.d)("#EventModTile_Moderated_Review"),
                              Boolean(
                                o.BHasTag("mod_reviewed") &&
                                  !o.BHasTag("mod_require_rereview")
                              ) && Object(M.d)("#EventModTile_Moderated"),
                              Boolean(o.BHasTag("mod_require_rereview")) &&
                                Object(M.d)("#EventModTile_Moderated_ReReview")
                            )
                          ),
                          A.createElement(
                            "button",
                            {
                              className: Object(N.a)(ht.a.Button, _t.Button),
                              onClick: this.OnChangeCategory
                            },
                            Object(M.d)("#EventModTile_ChangeEventType")
                          ),
                          o.BHasTag("halloween2019candidate") &&
                            A.createElement(
                              "button",
                              {
                                className: Object(N.a)(ht.a.Button),
                                onClick: this.OnUpdateSeasonalTag
                              },
                              Object(M.d)("#EventModTile_SeasonalTag")
                            ),
                          A.createElement(Dt, { eventModel: o })
                        ),
                        A.createElement(
                          "div",
                          { className: _t.DetailsRight },
                          A.createElement(ut.b, {
                            event: o,
                            stylesmodule: _t,
                            nOverrideEndTime: o.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: o.GetStartTimeAndDateUnixSeconds()
                          }),
                          A.createElement(Tt, { event: o }),
                          A.createElement(It, { event: o })
                        )
                      )
                  )
                )
              );
            }),
            Object(D.c)([v.a], e.prototype, "ShowModalEvent", null),
            Object(D.c)([v.a], e.prototype, "HideModalEvent", null),
            Object(D.c)([v.a], e.prototype, "OnModeratedChanged", null),
            Object(D.c)([v.a], e.prototype, "ApplyModerationToggle", null),
            Object(D.c)([v.a], e.prototype, "OnChangeCategory", null),
            Object(D.c)([v.a], e.prototype, "OnUpdateSeasonalTag", null),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component);
      function Ot(e) {
        return T.a.InitFromAccountID(e).ConvertTo64BitString();
      }
      var Ct = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                userProfile: dt.a.GetProfile(Ot(e.props.accountID)),
                bLoadingProfile: !dt.a.BHasProfile(Ot(e.props.accountID))
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.state.bLoadingProfile && this.LoadProfile();
            }),
            (e.prototype.LoadProfile = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = Ot(this.props.accountID)), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]), [4, dt.a.LoadProfiles([t])]
                      );
                    case 2:
                      return e.sent(), [3, 4];
                    case 3:
                      return (
                        (a = e.sent()),
                        (n = Object(Me.a)(a)),
                        console.error(
                          "EventModerationTile profile load : " + n.strErrorMsg,
                          n
                        ),
                        [3, 4]
                      );
                    case 4:
                      return (
                        this.m_cancelSignal.token.reason ||
                          this.setState({
                            userProfile: dt.a.GetProfile(t),
                            bLoadingProfile: !1
                          }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.accountID,
                a = e.locToken,
                n = this.state.userProfile,
                r =
                  (x.c.IN_CLIENT ? "steam://openurl/" : "") +
                  "https://steamsupport.valvesoftware.com/account/overview/" +
                  Ot(this.props.accountID);
              return A.createElement(
                "div",
                null,
                Object(M.k)(
                  a,
                  A.createElement(
                    "a",
                    { href: r, target: x.c.IN_CLIENT ? void 0 : "_blank" },
                    Boolean(n)
                      ? A.createElement(A.Fragment, null, n.persona_name)
                      : A.createElement(
                          A.Fragment,
                          null,
                          this.state.bLoadingProfile &&
                            A.createElement(q.a, { size: "small" }),
                          A.createElement("span", null, t)
                        )
                  )
                )
              );
            }),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        Tt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bDownloadingImages: !1, nLocLanguages: 0 }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.CountLanguages = function(e) {
              var t = 0;
              if (e && 0 < e.length)
                for (var a = 0; a < e.length && a < 29; ++a)
                  e[a] && 0 < e[a].length && (t += 1);
              return t;
            }),
            (e.prototype.componentDidMount = function() {
              var a = this,
                e = this.props.event;
              w.c
                .LoadClanEventLocalizationFromAnnouncementGID(
                  e.clanSteamID,
                  e.AnnouncementGID
                )
                .then(function(e) {
                  a.m_cancelSignal.token.reason ||
                    a.setState({ nLocLanguages: e.length });
                })
                .catch(function(e) {
                  var t = Object(Me.a)(e);
                  console.log(
                    "EventInspection.LoadLoc : error " + t.strErrorMsg,
                    t
                  ),
                    a.m_cancelSignal.token.reason ||
                      a.setState({ nLocLanguages: -1 });
                });
            }),
            (e.prototype.render = function() {
              var e = this.props.event,
                t = this.CountLanguages(e.jsondata.localized_title_image),
                a = this.CountLanguages(e.jsondata.localized_capsule_image),
                n = this.CountLanguages(e.jsondata.localized_spotlight_image),
                r = Math.max(
                  this.CountLanguages(
                    e.jsondata.localized_broadcast_left_image
                  ),
                  this.CountLanguages(
                    e.jsondata.localized_broadcast_right_image
                  )
                ),
                o = t + a + n + r,
                i = this.CountLanguages(e.jsondata.localized_summary),
                s = this.CountLanguages(e.jsondata.localized_subtitle);
              return A.createElement(
                "div",
                { className: _t.AnalysisCtn },
                A.createElement(
                  "div",
                  { className: _t.TileTitle },
                  Object(M.d)("#EventModTile_Analysis")
                ),
                A.createElement(
                  "div",
                  null,
                  Object(M.d)("#EventModTile_Stats_Comments", e.nCommentCount)
                ),
                A.createElement(
                  "div",
                  null,
                  Object(M.d)("#EventModTile_Stats_VoteUp", e.nVotesUp)
                ),
                A.createElement(
                  "div",
                  null,
                  Object(M.d)("#EventModTile_Stats_VoteDown", e.nVotesDown)
                ),
                Boolean(t) &&
                  A.createElement(
                    "div",
                    { className: _t.ArtHeader },
                    Object(M.d)("#EventModTile_ImageAnalysis_Header", t),
                    " "
                  ),
                Boolean(a) &&
                  A.createElement(
                    "div",
                    null,
                    Object(M.d)("#EventModTile_ImageAnalysis_Capsule", a),
                    " "
                  ),
                Boolean(n) &&
                  A.createElement(
                    "div",
                    { className: _t.ArtSpotlight },
                    Object(M.d)("#EventModTile_ImageAnalysis_Spotlight", n),
                    " "
                  ),
                Boolean(r) &&
                  A.createElement(
                    "div",
                    null,
                    Object(M.d)("#EventModTile_ImageAnalysis_Broadcast", r),
                    " "
                  ),
                0 == o &&
                  A.createElement(
                    "div",
                    { className: _t.AnalysisMissing },
                    Object(M.d)("#EventModTile_ImageAnalysis_None"),
                    " "
                  ),
                0 == this.state.nLocLanguages &&
                  A.createElement(q.a, {
                    size: "small",
                    string: Object(M.d)("#EventModTile_LoadingLocs")
                  }),
                0 < this.state.nLocLanguages &&
                  A.createElement(
                    "div",
                    null,
                    Object(M.d)(
                      "#EventModTile_Languages",
                      this.state.nLocLanguages
                    )
                  ),
                Boolean(i) &&
                  A.createElement(
                    "div",
                    null,
                    Object(M.d)("#EventModTile_Languages_Summary", i),
                    " "
                  ),
                Boolean(s) &&
                  A.createElement(
                    "div",
                    null,
                    Object(M.d)("#EventModTile_Languages_Subtitle", s),
                    " "
                  )
              );
            }),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        wt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingAppInfo: !b.a.BIsAppidLoaded(e.props.appid)
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.componentDidMount = function() {
              var a = this,
                e = this.props,
                t = e.appid,
                n = e.clanSteamID;
              b.a.BIsAppidLoaded(t) ||
                b.a
                  .EnsureStoreCapsuleInfoLoaded(t)
                  .then(function() {
                    a.m_cancelSignal.token.reason ||
                      a.setState({ bLoadingAppInfo: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(Me.a)(e);
                    console.error(
                      "EventModerationChannelInfo: App Load: " + t.strErrorMsg,
                      t
                    ),
                      a.m_cancelSignal.token.reason ||
                        a.setState({ bLoadingAppInfo: !1 });
                  }),
                n && g.a.LoadOGGClanInfoForClanSteamID(n);
            }),
            (e.prototype.render = function() {
              if (this.state.bLoadingAppInfo)
                return A.createElement(q.a, {
                  size: "small",
                  string: Object(M.d)("#EventModTile_AppInfoLoading")
                });
              var e = this.props,
                t = e.appid,
                a = e.clanSteamID;
              if (t) {
                var n = b.a.GetStoreCapsuleInfo(t).GetAppStoreData();
                return A.createElement(
                  "div",
                  { className: _t.TileAppInfo },
                  A.createElement(
                    "div",
                    { className: _t.TileAppInfoTitle },
                    A.createElement(
                      C.a,
                      { href: n.capsule_link },
                      A.createElement("img", {
                        className: _t.TileAppInfoImage,
                        src: n.capsule
                      }),
                      A.createElement(
                        "div",
                        null,
                        Object(M.d)("#EventModTile_GameName", n.title)
                      )
                    )
                  ),
                  A.createElement(
                    "div",
                    null,
                    Object(M.d)("#EventModTile_ReleaseDate", n.release)
                  )
                );
              }
              if (a) {
                var r = a.GetAccountID(),
                  o = g.a.GetClanInfoByClanAccountID(r);
                if (o && o.is_curator)
                  return A.createElement(
                    "div",
                    { className: _t.TileAppInfo },
                    A.createElement(
                      "div",
                      { className: _t.TileAppInfoTitle },
                      A.createElement(
                        C.a,
                        { href: x.c.STORE_BASE_URL + "/curator/" + r + "/" },
                        A.createElement("img", {
                          className: _t.TileAppInfoImage,
                          src: o.avatar_full_url
                        }),
                        A.createElement(
                          "div",
                          null,
                          Object(M.d)("#EventModTile_CuratorName", o.group_name)
                        )
                      )
                    )
                  );
              }
              return null;
            }),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        It = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.render = function() {
              var e = this.props.event,
                t = Object(it.d)(e),
                a = Object(it.c)(e),
                n = Object(it.e)(e),
                r =
                  n && !e.BHasTag("hide_store") && !e.BHasTag("mod_hide_store"),
                o =
                  t &&
                  !e.BHasTag("hide_library_overview") &&
                  !e.BHasTag("mod_hide_library_overview"),
                i =
                  a &&
                  !e.BHasTag("hide_library_detail") &&
                  !e.BHasTag("mod_hide_library_detail");
              return A.createElement(
                "div",
                { className: _t.VisibiltyCtn },
                A.createElement(
                  "div",
                  { className: _t.TileTitle },
                  Object(M.d)("#EventModTile_Visibility")
                ),
                A.createElement(
                  "div",
                  null,
                  Object(M.d)(
                    "#EventModTile_Store_Visibility",
                    r
                      ? Object(M.d)("#WriteReview_Dialog_Yes")
                      : Object(M.d)("#WriteReview_Dialog_No"),
                    r
                      ? ""
                      : n
                      ? Object(M.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_store")
                      ? Object(M.d)("#EventModTime_Hidden_OptOut")
                      : Object(M.d)("#EventModTime_Hidden_Moderator")
                  )
                ),
                A.createElement(
                  "div",
                  null,
                  Object(M.d)(
                    "#EventModTile_LibraryHome_Visibility",
                    o
                      ? Object(M.d)("#WriteReview_Dialog_Yes")
                      : Object(M.d)("#WriteReview_Dialog_No"),
                    o
                      ? ""
                      : n
                      ? Object(M.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_overview")
                      ? Object(M.d)("#EventModTime_Hidden_OptOut")
                      : Object(M.d)("#EventModTime_Hidden_Moderator")
                  )
                ),
                A.createElement(
                  "div",
                  null,
                  Object(M.d)(
                    "#EventModTile_LibraryDetail_Visibility",
                    i
                      ? Object(M.d)("#WriteReview_Dialog_Yes")
                      : Object(M.d)("#WriteReview_Dialog_No"),
                    i
                      ? ""
                      : n
                      ? Object(M.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_detail")
                      ? Object(M.d)("#EventModTime_Hidden_OptOut")
                      : Object(M.d)("#EventModTime_Hidden_Moderator")
                  )
                )
              );
            }),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        kt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                newCategoryOption: {
                  label: Object(pe.b)(34),
                  value: { eventType: 34 }
                }
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.ChangeCategoryForEvent = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, s, l, c, d;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props),
                        (a = t.eventModel),
                        (n = t.closeModal),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 4, , 5]),
                        (r = this.state.newCategoryOption),
                        (o = r.value.eventType),
                        [
                          4,
                          ct.UpdatePartnerEventType(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.GID,
                            o
                          )
                        ]
                      );
                    case 2:
                      return (
                        e.sent(),
                        (i = it.m),
                        (s = []),
                        r.value.tags &&
                          r.value.tags.forEach(function(e) {
                            s.push(e);
                            var t = new lt()
                              .SetUpdateSeasonalTags(e)
                              .ToModString();
                            s.push(t);
                          }),
                        [
                          4,
                          ct.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.GetAnnouncementGID(),
                            s,
                            i,
                            new lt().SetActionChangeEvent(o)
                          )
                        ]
                      );
                    case 3:
                      return (
                        (l = e.sent()),
                        Object(m.runInAction)(function() {
                          (a.type = o), (a.vecTags = l);
                        }),
                        this.setState({ bUpdating: !1 }, n),
                        [3, 5]
                      );
                    case 4:
                      return (
                        (c = e.sent()),
                        (d = Object(Me.a)(c)),
                        console.error(
                          "ChangeEventTypeDialog error " + d.strErrorMsg,
                          d
                        ),
                        this.setState({
                          bUpdating: !1,
                          strErrorMsg: d.strErrorMsg
                        }),
                        [3, 5]
                      );
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.OnChangeSelection = function(e) {
              this.setState({ newCategoryOption: e });
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props,
                a = t.eventModel,
                n = t.closeModal,
                r = h.c
                  .filter(function(e) {
                    return 1 == e || 4 == e || 9 <= e;
                  })
                  .map(function(e) {
                    var t = { eventType: e };
                    return (
                      12 == e && (t.tags = ["patchnotes"]),
                      { label: Object(pe.b)(e), value: t }
                    );
                  });
              return (
                r.push({
                  label: Object(M.d)("#PartnerEvent_Curator_Group_Members"),
                  value: {
                    eventType: 28,
                    tags: ["curator", "curator_group_members"]
                  }
                }),
                r.push({
                  label: Object(M.d)("#PartnerEvent_Curator_Public"),
                  value: { eventType: 28, tags: ["curator", "curator_public"] }
                }),
                A.createElement(
                  ge.c,
                  {
                    strTitle: Object(M.d)("#EventModTile_ChangeEventType"),
                    strDescription: Object(M.d)(
                      "#EventModTile_ChangeEventType_Desc",
                      a.GetEventTypeAsString()
                    ),
                    onCancel: n,
                    onOK: function() {
                      return e.setState(
                        { bUpdating: !0 },
                        e.ChangeCategoryForEvent
                      );
                    }
                  },
                  A.createElement(
                    A.Fragment,
                    null,
                    A.createElement(
                      "div",
                      { className: _t.CategoryChangeDialog },
                      A.createElement("br", null),
                      this.state.bUpdating &&
                        A.createElement(q.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        A.createElement(
                          "div",
                          null,
                          Object(M.d)("#Chat_Settings_Error_ServerError"),
                          A.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      A.createElement(ot.a, {
                        isSearchable: !0,
                        onChange: this.OnChangeSelection,
                        value: this.state.newCategoryOption,
                        options: r
                      })
                    )
                  )
                )
              );
            }),
            Object(D.c)([v.a], e.prototype, "ChangeCategoryForEvent", null),
            Object(D.c)([v.a], e.prototype, "OnChangeSelection", null),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        Dt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bCollapsed: !0 }), e;
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.RenderModAction = function(e) {
              var t = Object(M.i)(e.m_rtWhen),
                a = A.createElement(Ct, {
                  locToken: "#EventModTile_Moderator",
                  accountID: e.m_moderator
                });
              switch (e.m_action) {
                case Ze.k_ModReviewed:
                  return A.createElement(
                    "div",
                    { className: _t.ModeratorAuditActionCtn },
                    Object(M.k)(
                      "#EventModTile_Action_Reviewed",
                      A.createElement("span", null, t),
                      a
                    )
                  );
                case Ze.k_ModUnreviewed:
                  return A.createElement(
                    "div",
                    { className: _t.ModeratorAuditActionCtn },
                    Object(M.k)(
                      "#EventModTile_Action_UnReviewed",
                      A.createElement("span", null, t),
                      a
                    )
                  );
                case Ze.k_ChangeEventType:
                  return A.createElement(
                    "div",
                    { className: _t.ModeratorAuditActionCtn },
                    Object(M.k)(
                      "#EventModTile_Action_NewEventType",
                      A.createElement("span", null, t),
                      a,
                      Object(pe.b)(e.m_newEventType)
                    )
                  );
                case Ze.k_UpdateSeasonTags:
                  return A.createElement(
                    "div",
                    { className: _t.ModeratorAuditActionCtn },
                    Object(M.k)(
                      "#EventModTile_Action_SeasonTagUpdate",
                      A.createElement("span", null, t),
                      a,
                      e.m_newTagAdded
                    )
                  );
                default:
                  return A.createElement(
                    "div",
                    { className: _t.ModeratorAuditActionCtn },
                    e.ToModString
                  );
              }
            }),
            (e.prototype.RenderAudit = function(e) {
              var a = this,
                n = new Array(),
                r = this.props.eventModel;
              return (
                e.forEach(function(e) {
                  var t = new lt();
                  t.FromString(e),
                    n.push(
                      A.createElement(
                        "div",
                        { key: r.GID + e },
                        a.RenderModAction(t)
                      )
                    );
                }),
                n
              );
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props.eventModel.GetAllTags().filter(function(e) {
                  return lt.IsAuditAction(e);
                }),
                a = t.length,
                n = 3 < t.length && this.state.bCollapsed;
              if (0 == t.length) return null;
              n && (t = t.splice(0, 3));
              var r = this.RenderAudit(t);
              return A.createElement(
                "div",
                null,
                A.createElement(
                  "h4",
                  null,
                  Object(M.d)("#EventModTile_Action_Title")
                ),
                r,
                n &&
                  A.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !1 });
                      }
                    },
                    Object(M.d)("#EventModTile_Action_More", a - 3)
                  ),
                Boolean(!n && 3 < a) &&
                  A.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !0 });
                      }
                    },
                    Object(M.d)("#EventModTile_Action_Hide")
                  )
              );
            }),
            e
          );
        })(A.Component),
        jt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                bAccept: e.props.eventModel.BHasTag("halloween2019"),
                bHorror: e.props.eventModel.BHasTag("horror"),
                bCute: e.props.eventModel.BHasTag("cute")
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "UpdateSeasonalTagDialog component unmounted"
              );
            }),
            (e.prototype.ChangeAcceptance = function() {
              this.setState({ bAccept: !this.state.bAccept });
            }),
            (e.prototype.ChangeHorror = function() {
              this.setState({ bHorror: !this.state.bHorror });
            }),
            (e.prototype.ChangeCute = function() {
              this.setState({ bCute: !this.state.bCute });
            }),
            (e.prototype.ApplyAction = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = new Array()),
                        (a = new Array()),
                        this.state.bAccept
                          ? (t.push("halloween2019"),
                            a.push("halloween2019reviewed"))
                          : (a.push("halloween2019"),
                            t.push("halloween2019reviewed")),
                        this.state.bCute ? t.push("cute") : a.push("cute"),
                        this.state.bHorror
                          ? t.push("horror")
                          : a.push("horror"),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (n = this.props.eventModel),
                        [
                          4,
                          ct.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            t,
                            a,
                            new lt().SetUpdateSeasonalTags(
                              this.state.bAccept
                                ? "halloween2019"
                                : "halloween2019reviewed"
                            )
                          )
                        ]
                      );
                    case 2:
                      return (
                        (r = e.sent()),
                        (n.vecTags = r),
                        this.props.closeModal(),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (o = e.sent()),
                        (i = Object(Me.a)(o)),
                        console.error(
                          "EventModerationTile " + i.strErrorMsg,
                          i
                        ),
                        this.setState({ strErrorMsg: i.strErrorMsg }),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props,
                a = (t.eventModel, t.closeModal);
              return A.createElement(
                ge.c,
                {
                  strTitle: Object(M.d)("#EventModTile_SeasonalTag"),
                  onCancel: a,
                  onOK: function() {
                    return e.setState({ bUpdating: !0 }, e.ApplyAction);
                  }
                },
                A.createElement(
                  A.Fragment,
                  null,
                  A.createElement(
                    "div",
                    { className: _t.CategoryChangeDialog },
                    A.createElement("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance
                    }),
                    A.createElement(
                      "label",
                      { htmlFor: "Acceptance" },
                      Object(M.d)("#EventModTile_SeasonalTag_Desc")
                    ),
                    A.createElement(
                      "div",
                      null,
                      Object(M.d)("#EventModTile_SeasonalTag_Desc_Secondary")
                    ),
                    A.createElement("input", {
                      id: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror
                    }),
                    A.createElement(
                      "label",
                      { htmlFor: "Horror" },
                      "Horror Tag"
                    ),
                    A.createElement("input", {
                      id: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute
                    }),
                    A.createElement("label", { htmlFor: "Cute" }, "Cute Tag"),
                    this.state.bUpdating &&
                      A.createElement(q.a, { size: "small" }),
                    this.state.strErrorMsg &&
                      A.createElement(
                        "div",
                        null,
                        Object(M.d)("#Chat_Settings_Error_ServerError"),
                        A.createElement("br", null),
                        this.state.strErrorMsg
                      )
                  )
                )
              );
            }),
            Object(D.c)([v.a], e.prototype, "ChangeAcceptance", null),
            Object(D.c)([v.a], e.prototype, "ChangeHorror", null),
            Object(D.c)([v.a], e.prototype, "ChangeCute", null),
            Object(D.c)([v.a], e.prototype, "ApplyAction", null),
            e
          );
        })(A.Component),
        At = new ((function() {
          function e() {
            (this.m_backfill = void 0),
              (this.m_mapEventGIDProcessed = new Map()),
              (this.m_vecEventGID = new Array()),
              (this.m_bBackfillInProgress = !1),
              (this.m_nProcessed = 0),
              (this.m_nSuccesses = 0),
              (this.m_nFailures = 0),
              (this.m_nWarning = 0),
              (this.m_nSkipped = 0);
          }
          return (
            (e.prototype.GetBackfill = function() {
              return this.m_backfill;
            }),
            (e.prototype.SetBackfill = function(e) {
              this.m_backfill = e;
            }),
            (e.prototype.StartBackfill = function(e) {
              (this.m_backfill = e), (this.m_bBackfillInProgress = !0);
            }),
            (e.prototype.CompleteBackfill = function(e) {
              (this.m_backfill = void 0), (this.m_bBackfillInProgress = !1);
            }),
            (e.prototype.BIsBackkFillInProgress = function() {
              return this.m_bBackfillInProgress;
            }),
            (e.prototype.GetEventBackfillProgress = function() {
              return this.m_mapEventGIDProcessed;
            }),
            (e.prototype.CreateOrGetBackfillProgess = function(e) {
              return (
                this.m_mapEventGIDProcessed.has(e) ||
                  (this.m_mapEventGIDProcessed.set(e, { bProcessing: !1 }),
                  this.m_vecEventGID.push(e)),
                this.m_mapEventGIDProcessed.get(e)
              );
            }),
            (e.prototype.BHasProgress = function(e) {
              return this.m_mapEventGIDProcessed.has(e);
            }),
            (e.prototype.GetBackfillGIDs = function() {
              return this.m_vecEventGID;
            }),
            (e.prototype.CloseProgress = function(e, t) {
              (this.m_nProcessed += 1),
                t.bAlreadyProcessed || t.bSkipped
                  ? (this.m_nSkipped += 1)
                  : t.bSucceeded
                  ? (this.m_nSuccesses += 1)
                  : t.bFailed && (this.m_nFailures += 1),
                t.bWarning && (this.m_nWarning += 1),
                this.m_mapEventGIDProcessed.set(e, t);
            }),
            Object(D.c)([m.observable], e.prototype, "m_backfill", void 0),
            Object(D.c)(
              [m.observable],
              e.prototype,
              "m_mapEventGIDProcessed",
              void 0
            ),
            Object(D.c)(
              [m.observable],
              e.prototype,
              "m_bBackfillInProgress",
              void 0
            ),
            Object(D.c)([m.observable], e.prototype, "m_nProcessed", void 0),
            Object(D.c)([m.observable], e.prototype, "m_nSuccesses", void 0),
            Object(D.c)([m.observable], e.prototype, "m_nFailures", void 0),
            Object(D.c)([m.observable], e.prototype, "m_nWarning", void 0),
            Object(D.c)([m.observable], e.prototype, "m_nSkipped", void 0),
            Object(D.c)([m.action], e.prototype, "StartBackfill", null),
            Object(D.c)([m.action], e.prototype, "CompleteBackfill", null),
            Object(D.c)([m.action], e.prototype, "CloseProgress", null),
            e
          );
        })())(),
        Lt = a("vNkc"),
        Gt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = _.a.CancelToken.source()),
              (e.m_nImageID = 0),
              (e.m_mapArtworkResizeSuccess = new Map()),
              (e.state = { eBackfillState: void 0 }),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "EventBackfillLanding component unmounted"
              );
            }),
            (e.prototype.OnArtworkResizeBackfill = function() {
              null == this.state.eBackfillState &&
                this.setState(
                  { eBackfillState: "started" },
                  this.BeginArtworkResize
                );
            }),
            (e.prototype.BeginArtworkResize = function() {
              var a = this;
              this.m_mapArtworkResizeSuccess.set("capsule", 0),
                this.m_mapArtworkResizeSuccess.set("spotlight", 0),
                this.m_mapArtworkResizeSuccess.set("background", 0),
                this.RunArtworkResizeBackfill()
                  .then(function() {
                    return a.setState({ eBackfillState: "success" });
                  })
                  .catch(function(e) {
                    var t = Object(Me.a)(e);
                    console.error(
                      "EventBackfillLanding: error " + t.strErrorMsg,
                      t
                    ),
                      a.setState({ eBackfillState: "error" });
                  });
            }),
            (e.prototype.GetImageInfo = function(n, r, o) {
              return (
                void 0 === o && (o = ""),
                Object(D.b)(this, void 0, void 0, function() {
                  var t, a;
                  return Object(D.e)(this, function(e) {
                    return (
                      (t = te.a.GetExtensionTypeFromURL(r)),
                      (a = te.a.GetHashFromHashAndExt(r) + o),
                      [
                        2,
                        te.e.AsyncGetImageResolution(
                          n,
                          a,
                          t,
                          this.m_cancelSignal,
                          !0
                        )
                      ]
                    );
                  });
                })
              );
            }),
            (e.prototype.HandleErrorFatal = function(e, t, a, n) {
              var r = Object(Me.a)(t),
                o =
                  "EventBackfillLanding: " +
                  a +
                  " on GID " +
                  e +
                  " : " +
                  r.strErrorMsg;
              console.error(o, r),
                n
                  ? ((n.bFailed = !0),
                    (n.strMessage = o),
                    At.CloseProgress(e, n))
                  : At.CompleteBackfill("resize_image");
            }),
            (e.prototype.HandleResizeForImageType = function(p, u, m, h, v) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t,
                  c,
                  a,
                  d = this;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = function(t) {
                        var a, n, r, o, i, s, l;
                        return Object(D.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return p[t] && 0 < p[t].length
                                ? ((a = p[t]),
                                  (n = te.a.GetExtensionTypeFromURL(a)),
                                  (r = new T.a(u.clan_steamid)),
                                  n
                                    ? [
                                        4,
                                        c.GetImageInfo(r, a).catch(function(e) {
                                          return (
                                            d.HandleErrorFatal(
                                              null,
                                              e,
                                              "GetImageInfo Original",
                                              m
                                            ),
                                            { height: 0, width: 0, success: 2 }
                                          );
                                        })
                                      ]
                                    : [3, 8])
                                : [3, 9];
                            case 1:
                              return 1 == (o = e.sent()).success &&
                                Object(it.h)(o.width, o.height, h)
                                ? [
                                    4,
                                    c.GetImageInfo(r, a, v).catch(function(e) {
                                      return (
                                        d.HandleErrorFatal(
                                          null,
                                          e,
                                          "GetImageInfo Resize",
                                          m
                                        ),
                                        { height: 0, width: 0, success: 2 }
                                      );
                                    })
                                  ]
                                : [3, 6];
                            case 2:
                              return 1 != e.sent().success
                                ? [3, 3]
                                : ((m.bAlreadyProcessed = !0), [3, 5]);
                            case 3:
                              return (
                                (m.bProcessing = !0),
                                (i = te.a.GetHashFromHashAndExt(a)),
                                (s = te.a.GetExtensionStringFromHashAndExt(a)),
                                (l = te.d.GetResizeDimension(h)),
                                [
                                  4,
                                  te.b
                                    .SendResizeRequest(
                                      c.m_cancelSignal,
                                      r,
                                      i,
                                      s,
                                      l
                                    )
                                    .then(function(e) {
                                      console.log(
                                        "success on the resize request"
                                      ),
                                        e == l.length
                                          ? ((m.bSucceeded = !0),
                                            d.m_mapArtworkResizeSuccess.set(
                                              h,
                                              d.m_mapArtworkResizeSuccess.get(
                                                h
                                              ) + 1
                                            ))
                                          : ((m.bFailed = !0),
                                            (m.strMessage =
                                              "Did not resize all: " +
                                              h +
                                              " " +
                                              e +
                                              " / " +
                                              l.length));
                                    })
                                    .catch(function(e) {
                                      m.bFailed = !0;
                                      var t = Object(Me.a)(e);
                                      (m.strMessage = t.strErrorMsg),
                                        console.error(
                                          "Resize: " + t.strErrorMsg,
                                          t
                                        );
                                    })
                                ]
                              );
                            case 4:
                              e.sent(), (e.label = 5);
                            case 5:
                              return [3, 7];
                            case 6:
                              (m.bSkipped = !0), (e.label = 7);
                            case 7:
                              return [3, 9];
                            case 8:
                              (m.bSkipped = !0), (e.label = 9);
                            case 9:
                              return [2];
                          }
                        });
                      }),
                        (c = this),
                        (a = 0),
                        (e.label = 1);
                    case 1:
                      return a < p.length && a < 29 ? [5, t(a)] : [3, 4];
                    case 2:
                      e.sent(), (e.label = 3);
                    case 3:
                      return ++a, [3, 1];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RunArtworkResizeBackfill = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t,
                  i,
                  a,
                  s,
                  n,
                  l = this;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      At.StartBackfill("resize_image"), (t = 0), (e.label = 1);
                    case 1:
                      return At.BIsBackkFillInProgress()
                        ? [
                            4,
                            ct
                              .LoadPartnerEventForModerationIncremental(
                                this.m_cancelSignal,
                                t,
                                25
                              )
                              .catch(function(e) {
                                return l.HandleErrorFatal(
                                  null,
                                  e,
                                  "LoadPartnerEventForModerationIncremental"
                                );
                              })
                          ]
                        : [3, 7];
                    case 2:
                      if (!(i = e.sent()) || 0 == i.length)
                        return (
                          At.CompleteBackfill("resize_image"),
                          console.log("Compelted the backfill"),
                          [3, 7]
                        );
                      (t += i.length),
                        (a = function(t) {
                          var a, n, r, o;
                          return Object(D.e)(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return (
                                  (a = i[t]),
                                  (n = At.CreateOrGetBackfillProgess(
                                    a.unique_id
                                  )),
                                  a.announcement_gid &&
                                  0 != a.announcement_gid.length
                                    ? [
                                        4,
                                        w.c
                                          .LoadPartnerEventFromAnnoucementGID(
                                            Number(a.appid),
                                            a.announcement_gid,
                                            100
                                          )
                                          .catch(function(e) {
                                            l.HandleErrorFatal(
                                              a.announcement_gid,
                                              e,
                                              "LoadPartnerEventFromAnnoucementGID",
                                              n
                                            );
                                          })
                                      ]
                                    : ((n.bSkipped = !0),
                                      (n.bWarning = !0),
                                      At.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                );
                              case 1:
                                return (
                                  e.sent(),
                                  n.bFailed
                                    ? [2, "continue"]
                                    : (r = w.c.GetClanEventFromAnnouncementGID(
                                        a.announcement_gid
                                      ))
                                    ? n.bSucceeded ||
                                      n.bFailed ||
                                      n.bAlreadyProcessed
                                      ? ((n.bAlreadyProcessed = !0),
                                        At.CloseProgress(a.unique_id, n),
                                        [2, "continue"])
                                      : ((n.bAnalysing = !0),
                                        s.setState({
                                          strInfo:
                                            "Processing " +
                                            At.GetBackfillGIDs().length +
                                            " Appid: " +
                                            r.appid +
                                            " Event " +
                                            r.GID +
                                            " Title: " +
                                            r.GetNameWithFallback(0)
                                        }),
                                        r.jsondata &&
                                        r.jsondata.localized_capsule_image
                                          ? ((o =
                                              r.jsondata
                                                .localized_capsule_image),
                                            [
                                              4,
                                              s
                                                .HandleResizeForImageType(
                                                  o,
                                                  a,
                                                  n,
                                                  "capsule",
                                                  te.c.capsule_main
                                                )
                                                .catch(function(e) {
                                                  return l.HandleErrorFatal(
                                                    null,
                                                    e,
                                                    "HandleResizeForImageType capsule",
                                                    n
                                                  );
                                                })
                                            ])
                                          : [3, 3])
                                    : ((n.bFailed = !0),
                                      (n.strMessage =
                                        "Failed to load the event: " +
                                        a.unique_id),
                                      At.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                );
                              case 2:
                                e.sent(), (e.label = 3);
                              case 3:
                                return r.jsondata &&
                                  r.jsondata.localized_title_image
                                  ? ((o = r.jsondata.localized_title_image),
                                    [
                                      4,
                                      s
                                        .HandleResizeForImageType(
                                          o,
                                          a,
                                          n,
                                          "background",
                                          te.c.background_mini
                                        )
                                        .catch(function(e) {
                                          return l.HandleErrorFatal(
                                            null,
                                            e,
                                            "HandleResizeForImageType background",
                                            n
                                          );
                                        })
                                    ])
                                  : [3, 5];
                              case 4:
                                e.sent(), (e.label = 5);
                              case 5:
                                return r.jsondata &&
                                  r.jsondata.localized_spotlight_image
                                  ? ((o = r.jsondata.localized_spotlight_image),
                                    [
                                      4,
                                      s
                                        .HandleResizeForImageType(
                                          o,
                                          a,
                                          n,
                                          "spotlight",
                                          te.c.spotlight_main
                                        )
                                        .catch(function(e) {
                                          return l.HandleErrorFatal(
                                            null,
                                            e,
                                            "HandleResizeForImageType spotlight",
                                            n
                                          );
                                        })
                                    ])
                                  : [3, 7];
                              case 6:
                                e.sent(), (e.label = 7);
                              case 7:
                                return (
                                  At.CloseProgress(a.unique_id, n),
                                  At.BIsBackkFillInProgress()
                                    ? [2]
                                    : [2, "break"]
                                );
                            }
                          });
                        }),
                        (s = this),
                        (n = 0),
                        (e.label = 3);
                    case 3:
                      return n < i.length ? [5, a(n)] : [3, 6];
                    case 4:
                      if ("break" === e.sent()) return [3, 6];
                      e.label = 5;
                    case 5:
                      return ++n, [3, 3];
                    case 6:
                      return 5e3 < At.m_nFailures
                        ? (console.log(
                            "Hit too many errors, stoppinng the backfill"
                          ),
                          [3, 7])
                        : [3, 1];
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RenderFailure = function() {
              var n = new Array();
              return (
                0 < At.m_nFailures &&
                  At.GetBackfillGIDs().forEach(function(e) {
                    var t = At.GetEventBackfillProgress().get(e);
                    if (t && t.bFailed) {
                      var a = w.c.GetClanEventModel(e);
                      a &&
                        n.push(
                          A.createElement(
                            "div",
                            { key: e },
                            A.createElement(
                              ue.c,
                              {
                                eventModel: a,
                                route: ue.a.k_eView,
                                openNewWindow: !0
                              },
                              a.GetNameWithFallback(0)
                            ),
                            A.createElement(
                              "div",
                              { className: Lt.Error },
                              t.strMessage
                            )
                          )
                        );
                    }
                  }),
                n
              );
            }),
            (e.prototype.RenderResizeProgress = function() {
              var e = new Array();
              return (
                e.push(
                  A.createElement(
                    "div",
                    { key: "res_capsule" },
                    "Capsule Resized: ",
                    this.m_mapArtworkResizeSuccess.get("capsule"),
                    " "
                  )
                ),
                e.push(
                  A.createElement(
                    "div",
                    { key: "res_header" },
                    "Header Resized: ",
                    this.m_mapArtworkResizeSuccess.get("background"),
                    " "
                  )
                ),
                e.push(
                  A.createElement(
                    "div",
                    { key: "res_spotlightr" },
                    "Spotlight Resized: ",
                    this.m_mapArtworkResizeSuccess.get("spotlight"),
                    " "
                  )
                ),
                e
              );
            }),
            (e.prototype.render = function() {
              var e = this.RenderFailure(),
                t = this.m_mapArtworkResizeSuccess.has("capsule")
                  ? this.RenderResizeProgress()
                  : void 0;
              return A.createElement(
                "div",
                null,
                A.createElement(
                  "h2",
                  null,
                  "Partner Events Backfill Processing Page"
                ),
                null == this.state.eBackfillState &&
                  A.createElement(
                    "div",
                    null,
                    A.createElement(
                      "button",
                      { onClick: this.OnArtworkResizeBackfill },
                      "Begin Artwork Resize Backfill"
                    )
                  ),
                A.createElement(
                  "div",
                  null,
                  A.createElement(
                    "button",
                    {
                      onClick: function() {
                        return At.CompleteBackfill("resize_image");
                      }
                    },
                    "Stop Backfill"
                  )
                ),
                this.state.strInfo &&
                  A.createElement(
                    "div",
                    null,
                    "Processing: ",
                    this.state.strInfo
                  ),
                A.createElement(
                  "div",
                  null,
                  "Events Processed: ",
                  At.m_nProcessed
                ),
                A.createElement(
                  "div",
                  null,
                  "Events Succeeded: ",
                  At.m_nSuccesses
                ),
                A.createElement("div", null, "Events Warning: ", At.m_nWarning),
                A.createElement("div", null, "Events Failed: ", At.m_nFailures),
                A.createElement("div", null, "Events Skipped: ", At.m_nSkipped),
                0 < e.length &&
                  A.createElement(
                    A.Fragment,
                    null,
                    A.createElement("h2", null, "Failure Info"),
                    e
                  ),
                Boolean(t) &&
                  A.createElement(
                    "div",
                    null,
                    A.createElement("h2", null, "Resizing Actions"),
                    t
                  ),
                "started" == this.state.eBackfillState &&
                  A.createElement(q.a, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress"
                  })
              );
            }),
            Object(D.c)([v.a], e.prototype, "OnArtworkResizeBackfill", null),
            Object(D.c)([v.a], e.prototype, "BeginArtworkResize", null),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        Nt = a("5eAM"),
        Mt = a("nWbB"),
        xt = new ((function() {
          function e() {
            (this.m_rgMyWishlistOnSale = null),
              (this.m_rgMyDLCForGamesInLibraryOnSale = null),
              (this.m_rgMySoundtracksForGamesInLibraryOnSale = null),
              (this.m_rgMyInteractiveRecOnSale = null),
              (this.m_rgMySaleTags = null),
              (this.m_rgMyTagRecommendation = null),
              (this.m_rgPopularUpcoming = null),
              (this.m_rgMostWishlisted = null),
              (this.m_rgTopN = null);
          }
          return (
            (e.prototype.GetDiscounts = function(o) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        e.trys.push([0, 3, , 4]),
                        (t = "discount"),
                        (t += o.tagid ? "_tag" + o.tagid : ""),
                        (t += o.categoryid ? "_categoryid" + o.categoryid : ""),
                        (t += o.top_n_sellers ? "_ntop" + o.top_n_sellers : ""),
                        (t += o.max_results ? "_max" + o.max_results : ""),
                        (t += o.random_across_set ? "_rand" : ""),
                        (a = Object(x.f)(t, "application_config"))
                          ? [3, 2]
                          : [
                              4,
                              _.a.get(
                                x.c.STORE_BASE_URL + "actions/ajaxgetdiscounts",
                                {
                                  params: Object(D.a)(Object(D.a)({}, o), {
                                    cc: x.c.COUNTRY
                                  })
                                }
                              )
                            ]
                      );
                    case 1:
                      (n = e.sent()), (a = n.data), (e.label = 2);
                    case 2:
                      return [2, a];
                    case 3:
                      return (
                        (r = e.sent()), console.error(Object(Me.a)(r)), [3, 4]
                      );
                    case 4:
                      return [2, []];
                  }
                });
              });
            }),
            (e.prototype.GetTopN = function(a, n) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgTopN
                        ? [3, 2]
                        : ((this.m_rgTopN = Object(x.f)(
                            "top_n",
                            "application_config"
                          )),
                          this.m_rgTopN
                            ? [3, 2]
                            : (500,
                              [
                                4,
                                xt.GetDiscounts({
                                  top_n_sellers: 500,
                                  max_results: n,
                                  feature: a
                                })
                              ]));
                    case 1:
                      (t = e.sent()),
                        (this.m_rgTopN = t.map(function(e) {
                          return Number(e);
                        })),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgTopN];
                  }
                });
              });
            }),
            (e.prototype.GetWishlistOnSale = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyWishlistOnSale
                        ? [3, 2]
                        : ((this.m_rgMyWishlistOnSale = Object(x.f)(
                            "wishlist_onsale",
                            "application_config"
                          )),
                          this.m_rgMyWishlistOnSale
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  x.c.STORE_BASE_URL +
                                    "saleaction/ajaxgetwishlistonsale",
                                  { withCredentials: !0 }
                                )
                              ]);
                    case 1:
                      (t = e.sent()),
                        (this.m_rgMyWishlistOnSale = t.data.appids),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgMyWishlistOnSale];
                  }
                });
              });
            }),
            (e.prototype.GetDLCForGamesInMyLibraryOnSale = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyDLCForGamesInLibraryOnSale
                        ? [3, 2]
                        : ((this.m_rgMyDLCForGamesInLibraryOnSale = Object(x.f)(
                            "dlc_onsale",
                            "application_config"
                          )),
                          this.m_rgMyDLCForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  x.c.STORE_BASE_URL +
                                    "saleaction/ajaxgetdlconsale",
                                  { withCredentials: !0 }
                                )
                              ]);
                    case 1:
                      (t = e.sent()),
                        (this.m_rgMyDLCForGamesInLibraryOnSale = t.data.appids),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgMyDLCForGamesInLibraryOnSale];
                  }
                });
              });
            }),
            (e.prototype.GetSoundtracksForGamesInMyLibraryOnSale = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMySoundtracksForGamesInLibraryOnSale
                        ? [3, 2]
                        : ((this.m_rgMySoundtracksForGamesInLibraryOnSale = Object(
                            x.f
                          )("dlc_music_onsale", "application_config")),
                          this.m_rgMySoundtracksForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  x.c.STORE_BASE_URL +
                                    "saleaction/ajaxgetsoundtracksonsale",
                                  { withCredentials: !0 }
                                )
                              ]);
                    case 1:
                      (t = e.sent()),
                        (this.m_rgMySoundtracksForGamesInLibraryOnSale =
                          t.data.appids),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgMySoundtracksForGamesInLibraryOnSale];
                  }
                });
              });
            }),
            (e.prototype.GetInteractiveRecommendationsOnSale = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyInteractiveRecOnSale
                        ? [3, 2]
                        : ((this.m_rgMyInteractiveRecOnSale = Object(x.f)(
                            "ir_onsale",
                            "application_config"
                          )),
                          this.m_rgMyInteractiveRecOnSale
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  x.c.STORE_BASE_URL +
                                    "saleaction/ajaxgetironsale",
                                  { withCredentials: !0 }
                                )
                              ]);
                    case 1:
                      (t = e.sent()),
                        (this.m_rgMyInteractiveRecOnSale = t.data.appids),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgMyInteractiveRecOnSale];
                  }
                });
              });
            }),
            (e.prototype.GetSaleTags = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMySaleTags
                        ? [3, 2]
                        : ((this.m_rgMySaleTags = Object(x.f)(
                            "saletags",
                            "application_config"
                          )),
                          this.m_rgMySaleTags
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  x.c.STORE_BASE_URL +
                                    "saleaction/ajaxgetsaletags",
                                  { withCredentials: !1 }
                                )
                              ]);
                    case 1:
                      (t = e.sent()),
                        (this.m_rgMySaleTags = t.data),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgMySaleTags];
                  }
                });
              });
            }),
            (e.prototype.GetTagRecommendorForThisSale = function(r, o) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyTagRecommendation
                        ? [3, 2]
                        : ((this.m_rgMyTagRecommendation = Object(x.f)(
                            "tag_recommender",
                            "application_config"
                          )),
                          this.m_rgMyTagRecommendation
                            ? [3, 2]
                            : ((t =
                                x.c.STORE_BASE_URL +
                                "saleaction/ajaxgetsaletagsrecommendation"),
                              (a = {
                                cc: x.c.COUNTRY,
                                l: x.c.LANGUAGE,
                                clanAccountID: r.clanSteamID.GetAccountID(),
                                clanAnnouncementGID: r.AnnouncementGID,
                                count: o
                              }),
                              [
                                4,
                                _.a.get(t, { params: a, withCredentials: !1 })
                              ]));
                    case 1:
                      200 == (n = e.sent()).status &&
                      n.data &&
                      n.data.tag_recommender
                        ? (this.m_rgMyTagRecommendation =
                            n.data.tag_recommender)
                        : (this.m_rgMyTagRecommendation = []),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgMyTagRecommendation];
                  }
                });
              });
            }),
            (e.prototype.GetWishlistedGamesInSale = function(r, o, i, s) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgPopularUpcoming
                        ? [3, 2]
                        : ((this.m_rgPopularUpcoming = Object(x.f)(
                            "popular_upcoming",
                            "application_config"
                          )),
                          this.m_rgPopularUpcoming
                            ? [3, 2]
                            : ((t =
                                x.c.STORE_BASE_URL +
                                "saleaction/ajaxgetwishlistedgamesforsale"),
                              (a = {
                                clanAccountID: r.clanSteamID.GetAccountID(),
                                clanAnnouncementGID: r.AnnouncementGID,
                                flavor: o,
                                start: s || 0,
                                count: i
                              }),
                              [
                                4,
                                _.a.get(t, { params: a, withCredentials: !1 })
                              ]));
                    case 1:
                      200 == (n = e.sent()).status &&
                        n.data &&
                        n.data.appids &&
                        (this.m_rgPopularUpcoming = n.data.appids),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgPopularUpcoming || []];
                  }
                });
              });
            }),
            e
          );
        })())(),
        Bt = new ((function() {
          function e() {
            (this.m_mySummary = {
              points: 0,
              points_earned: 0,
              points_spent: 0
            }),
              (this.m_bLoaded = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var e = this;
              if (!this.m_bLoaded) {
                var t = Object(x.f)("points", "application_config");
                this.ValidateStoreDefault(t) &&
                  Object(m.runInAction)(function() {
                    (e.m_mySummary.points = t.points),
                      (e.m_mySummary.points_earned = t.points_earned),
                      (e.m_mySummary.points_spent = t.points_spent),
                      (e.m_bLoaded = !0);
                  });
              }
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              var t = e;
              return (
                !(!t || "object" != typeof t) &&
                ("number" == typeof t.points &&
                  "number" == typeof t.points_earned &&
                  "number" == typeof t.points_spent)
              );
            }),
            (e.prototype.LoadSaleTokenPoints = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.LazyInit(),
                        this.m_bLoaded || !x.i.logged_in
                          ? [3, 2]
                          : ((t =
                              x.c.STORE_BASE_URL +
                              "lunarnewyearmarket/ajaxgettokensummary"),
                            [4, _.a.get(t, { withCredentials: !0 })])
                      );
                    case 1:
                      (a = e.sent()),
                        Object(m.runInAction)(function() {
                          (n.m_mySummary.points = a.data.summary.points),
                            (n.m_mySummary.points_earned =
                              a.data.summary.points_earned),
                            (n.m_mySummary.points_spent =
                              a.data.summary.points_spent),
                            (n.m_bLoaded = !0);
                        }),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_mySummary];
                  }
                });
              });
            }),
            (e.prototype.ForceReloadSaleTokenPoints = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                return Object(D.e)(this, function(e) {
                  return (this.m_bLoaded = !1), [2, this.LoadSaleTokenPoints()];
                });
              });
            }),
            (e.prototype.AddPoints = function(e) {
              (this.m_mySummary.points += e),
                (this.m_mySummary.points_earned += e);
            }),
            (e.prototype.GetSaleTokenPoints = function() {
              return this.m_mySummary;
            }),
            Object(D.c)([m.observable], e.prototype, "m_mySummary", void 0),
            e
          );
        })())();
      window.g_SaleTokenPointStore = Bt;
      var Pt = new ((function() {
        function e() {
          (this.m_salePageBackgroundOverride = null),
            (this.m_salePageBackgroundWEBM = null),
            (this.m_salePageBackgroundMP4 = null),
            (this.m_storyImages = null),
            (this.m_strLastDoorOpenKey = "video_noneset"),
            (this.m_bLoadedFromConfig = !1);
        }
        return (
          (e.prototype.LazyInit = function() {
            var e = this;
            this.m_bLoadedFromConfig ||
              (Object(m.runInAction)(function() {
                (e.m_userData = Object(x.f)("doorinfo", "application_config")),
                  (e.m_salePageBackgroundOverride = Object(x.f)(
                    "doorinfobackground",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundWEBM = Object(x.f)(
                    "doorinfowebm",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundMP4 = Object(x.f)(
                    "doorinfomp4",
                    "application_config"
                  )),
                  (e.m_storyImages = Object(x.f)(
                    "storyimages",
                    "application_config"
                  )),
                  e.m_storyImages || (e.m_storyImages = new Array(4));
              }),
              (this.m_bLoadedFromConfig = !0));
          }),
          (e.prototype.LoadDoorData = function() {
            return Object(D.b)(this, void 0, void 0, function() {
              var t, a;
              return Object(D.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = x.c.STORE_BASE_URL + "saleaction/ajaxgetopendoor"),
                      [4, _.a.get(t, { withCredentials: !0 })]
                    );
                  case 1:
                    return (
                      (a = e.sent()),
                      (this.m_userData = a.data.doordata),
                      [2, this.m_userData]
                    );
                }
              });
            });
          }),
          (e.prototype.GetRawDoorData = function() {
            return this.m_userData;
          }),
          (e.prototype.BIsDoorOpened = function(e) {
            return (
              this.LazyInit(),
              !!this.m_userData &&
                (e < this.m_userData.length && this.m_userData[e].opened)
            );
          }),
          (e.prototype.BCanUserOpenDoor = function(e) {
            this.LazyInit();
            var t = L.a.GetTimeNowWithOverride();
            return (
              x.i.logged_in &&
              this.m_userData &&
              e < this.m_userData.length &&
              t >= this.m_userData[e].rtime_start &&
              t <= this.m_userData[e].rtime_end
            );
          }),
          (e.prototype.GetDoorCount = function() {
            return (
              this.LazyInit(), this.m_userData ? this.m_userData.length : 0
            );
          }),
          (e.prototype.OpenDoor = function(i, s) {
            return (
              void 0 === s && (s = !0),
              Object(D.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o = this;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !x.i.logged_in ||
                        !this.m_userData ||
                        i > this.m_userData.length
                      )
                        return [2, null];
                      (t = x.c.STORE_BASE_URL + "saleaction/ajaxopendoor"),
                        (a = new FormData()).append("sessionid", x.c.SESSIONID),
                        a.append("authwgtoken", x.i.authwgtoken),
                        a.append("door_index", "" + i),
                        s || a.append("open_door", "0"),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, _.a.post(t, a, { withCredentials: !0 })]
                      );
                    case 2:
                      return 1 == (n = e.sent()).data.success
                        ? (Object(m.runInAction)(function() {
                            if (
                              ((o.m_userData[i].opened = s),
                              (o.m_salePageBackgroundOverride =
                                n.data.sale_pg_background_override),
                              (o.m_salePageBackgroundMP4 =
                                n.data.sale_pg_background_mp4),
                              (o.m_salePageBackgroundWEBM =
                                n.data.sale_pg_background_webm),
                              (o.m_storyImages[i] = n.data.story_image),
                              (o.m_strLastDoorOpenKey =
                                "door_" + (s ? i : i - 1)),
                              s)
                            ) {
                              Bt.AddPoints(100);
                            }
                          }),
                          [2, n.data.rewards])
                        : (console.error(Object(Me.a)(n)), [3, 4]);
                    case 3:
                      return (
                        (r = e.sent()), console.error(Object(Me.a)(r)), [3, 4]
                      );
                    case 4:
                      return [2, null];
                  }
                });
              })
            );
          }),
          (e.prototype.BHasSalePageBackgroundOverride = function() {
            return this.LazyInit(), Boolean(this.m_salePageBackgroundOverride);
          }),
          (e.prototype.GetSalePageBackgroundOverride = function() {
            return this.LazyInit(), this.m_salePageBackgroundOverride;
          }),
          (e.prototype.GetSalePageBackgroundMP4 = function() {
            return this.LazyInit(), this.m_salePageBackgroundMP4;
          }),
          (e.prototype.GetSalePageBackgroundWEBM = function() {
            return this.LazyInit(), this.m_salePageBackgroundWEBM;
          }),
          (e.prototype.GetStoryImage = function(e) {
            return this.LazyInit(), this.m_storyImages[e];
          }),
          (e.prototype.GetLastDoorOpen = function() {
            return this.LazyInit(), this.m_strLastDoorOpenKey;
          }),
          Object(D.c)([m.observable], e.prototype, "m_userData", void 0),
          Object(D.c)(
            [m.observable],
            e.prototype,
            "m_salePageBackgroundOverride",
            void 0
          ),
          Object(D.c)(
            [m.observable],
            e.prototype,
            "m_salePageBackgroundWEBM",
            void 0
          ),
          Object(D.c)(
            [m.observable],
            e.prototype,
            "m_salePageBackgroundMP4",
            void 0
          ),
          Object(D.c)([m.observable], e.prototype, "m_storyImages", void 0),
          Object(D.c)(
            [m.observable],
            e.prototype,
            "m_strLastDoorOpenKey",
            void 0
          ),
          e
        );
      })())();
      window.g_DoorStore = Pt;
      var Rt = new ((function() {
        function e() {
          this.m_rgRecentEvent = null;
        }
        return (
          (e.prototype.ValidateStoreDefault = function(e) {
            var t = e;
            return (
              !!(
                t &&
                Array.isArray(t) &&
                0 < t.length &&
                "object" == typeof t[0]
              ) &&
              ("string" == typeof t[0].clan_steamid &&
                "string" == typeof t[0].gid &&
                "number" == typeof t[0].appid)
            );
          }),
          (e.prototype.AddAllRecentEvents = function(e) {
            var t = this;
            null == this.m_rgRecentEvent &&
              (this.m_rgRecentEvent = new Array()),
              e.forEach(function(e) {
                return t.m_rgRecentEvent.push(e);
              });
          }),
          (e.prototype.GetRecentEventsForSalesPage = function(i) {
            return Object(D.b)(this, void 0, void 0, function() {
              var t, a, n, r, o;
              return Object(D.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return null != this.m_rgRecentEvent
                      ? [3, 5]
                      : ((t = Object(x.f)(
                          "recent_events",
                          "application_config"
                        )),
                        this.ValidateStoreDefault(t)
                          ? (this.AddAllRecentEvents(t), [3, 5])
                          : [3, 1]);
                  case 1:
                    (this.m_rgRecentEvent = new Array()),
                      (a = {
                        cc: x.c.COUNTRY || "US",
                        l: x.c.LANGUAGE,
                        clan_account_id: i.clanSteamID.GetAccountID(),
                        clan_event_gid: i.GID
                      }),
                      (n =
                        x.c.STORE_BASE_URL + "saleaction/ajaxrecentsaleevents"),
                      (e.label = 2);
                  case 2:
                    return (
                      e.trys.push([2, 4, , 5]),
                      [4, _.a.get(n, { params: a, withCredentials: !0 })]
                    );
                  case 3:
                    return (
                      1 == (r = e.sent()).data.success &&
                        (this.AddAllRecentEvents(r.data.recent_events),
                        w.c.RegisterClanEvents(r.data.partnerevents)),
                      [3, 5]
                    );
                  case 4:
                    return (
                      (o = e.sent()),
                      console.error(
                        "GetRecentEventsForSalesPage failed",
                        Object(Me.a)(o)
                      ),
                      [3, 5]
                    );
                  case 5:
                    return [2, this.m_rgRecentEvent];
                }
              });
            });
          }),
          Object(D.c)([m.observable], e.prototype, "m_rgRecentEvent", void 0),
          Object(D.c)([m.action], e.prototype, "AddAllRecentEvents", null),
          e
        );
      })())();
      window.g_EventListSaleStore = Rt;
      var Ht = new ((function() {
          function e() {
            (this.m_saleExp = {}), (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              if (!this.m_bLoadedFromConfig) {
                var e = document.getElementById("application_config");
                e && (this.m_saleExp = Object(x.f)("xprmnt", e)),
                  (this.m_bLoadedFromConfig = !0);
              }
            }),
            (e.prototype.GetHideWishlist = function() {
              return (
                this.LazyInit(),
                Boolean(this.m_saleExp && this.m_saleExp.bHideWishlist)
              );
            }),
            (e.prototype.GetHideIRList = function() {
              return (
                this.LazyInit(),
                Boolean(this.m_saleExp && this.m_saleExp.bHideIRList)
              );
            }),
            (e.prototype.GetHideDLC = function() {
              return (
                this.LazyInit(),
                Boolean(this.m_saleExp && this.m_saleExp.bHideDLC)
              );
            }),
            e
          );
        })())(),
        Ft = (function() {
          function e() {
            this.m_mapMasterAppToBenefitApps = new Map();
          }
          return (
            (e.Get = function() {
              return (
                e.s_SubscriptStore ||
                  ((e.s_SubscriptStore = new e()).Init(),
                  (window.g_CuratorAdminStore = e.s_SubscriptStore)),
                e.s_SubscriptStore
              );
            }),
            (e.prototype.Init = function() {
              var a = this,
                e = Object(x.f)("subscriptionsapps", "application_config");
              this.ValidateStoreDefault(e) &&
                Object(m.runInAction)(function() {
                  e.forEach(function(e) {
                    var t = new Set();
                    e.benefit_appid.forEach(function(e) {
                      return t.add(e);
                    }),
                      a.m_mapMasterAppToBenefitApps.set(e.master_appid, t);
                  });
                });
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  0 < t.length &&
                  "object" == typeof t[0]
                ) &&
                ("number" == typeof t[0].master_appid &&
                  Array.isArray(t[0].benefit_appid))
              );
            }),
            (e.prototype.BHasMasterSub = function(e) {
              return this.m_mapMasterAppToBenefitApps.has(e);
            }),
            (e.prototype.GetAllAppForMaster = function(e) {
              return this.m_mapMasterAppToBenefitApps.get(e);
            }),
            (e.prototype.BHasAppIDBenefit = function(e, t) {
              var a = this.m_mapMasterAppToBenefitApps.get(e);
              return a && a.has(t);
            }),
            (e.prototype.LoadSubscriptionInfo = function(r) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_mapMasterAppToBenefitApps.has(r)
                        ? [2, !0]
                        : [
                            4,
                            _.a.get(
                              x.c.STORE_BASE_URL +
                                "actions/ajaxresolvesubscriptions",
                              {
                                params: {
                                  master_app_id: r,
                                  cc: x.c.COUNTRY,
                                  origin: self.origin
                                }
                              }
                            )
                          ];
                    case 1:
                      return (
                        (t = e.sent()),
                        (a = t && t.data)
                          ? (Object(m.runInAction)(function() {
                              var t = new Set();
                              a.benefit_appid.forEach(function(e) {
                                return t.add(e);
                              }),
                                n.m_mapMasterAppToBenefitApps.set(
                                  a.master_appid,
                                  t
                                );
                            }),
                            [2, !0])
                          : [2, !1]
                      );
                  }
                });
              });
            }),
            Object(D.c)(
              [m.observable],
              e.prototype,
              "m_mapMasterAppToBenefitApps",
              void 0
            ),
            e
          );
        })(),
        zt = a("mZMQ"),
        Ut = (a("hmtA"), a("dgee")),
        Wt = a.n(Ut),
        Vt = a("SS32"),
        Zt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.GetNumElements = function() {
              return A.Children.count(this.props.children);
            }),
            (t.prototype.GetPageSize = function() {
              return Math.min(
                this.GetNumElements(),
                this.props.visibleElements
              );
            }),
            (t.prototype.RenderChildren = function() {
              return A.Children.map(this.props.children, function(e, t) {
                return A.createElement(
                  zt.e,
                  { key: "slide_" + t, index: t },
                  e
                );
              });
            }),
            (t.prototype.RenderBreadcrumbs = function(a) {
              return A.Children.map(this.props.children, function(e, t) {
                return t % a != 0
                  ? null
                  : A.createElement(
                      zt.d,
                      { slide: t, className: Vt.pip },
                      A.createElement("img", { src: Wt.a })
                    );
              });
            }),
            (t.prototype.render = function() {
              var e = this.GetNumElements(),
                t = this.GetPageSize();
              if (!e || !t) return null;
              var a = t < e,
                n = this.props.hideArrows || !a,
                r = !a || this.props.hidePips,
                o = 4 / 3,
                i = !0;
              return (
                this.props.slideAspectRatio &&
                  ((o = this.props.slideAspectRatio), (i = !1)),
                A.createElement(
                  "div",
                  {
                    className: Object(N.a)(
                      Vt.carouselBody,
                      this.props.className
                    )
                  },
                  A.createElement(
                    zt.c,
                    {
                      visibleSlides: this.props.visibleElements,
                      totalSlides: this.GetNumElements(),
                      naturalSlideWidth: 100 * o,
                      naturalSlideHeight: 100,
                      step: this.props.visibleElements,
                      infinite: !this.props.disableEdgeWrap,
                      isIntrinsicHeight: i
                    },
                    A.createElement(
                      "div",
                      { className: Vt.sliderBody },
                      !n &&
                        A.createElement(
                          zt.a,
                          {
                            className: Object(N.a)(Vt.carouselBtnCtn, Vt.left)
                          },
                          A.createElement(G.f, null)
                        ),
                      A.createElement(zt.f, null, this.RenderChildren()),
                      !n &&
                        A.createElement(
                          zt.b,
                          {
                            className: Object(N.a)(Vt.carouselBtnCtn, Vt.right)
                          },
                          A.createElement(G.f, null)
                        )
                    ),
                    !r &&
                      A.createElement(
                        "div",
                        { className: Vt.breadcrumbContainer },
                        this.RenderBreadcrumbs(t)
                      )
                  )
                )
              );
            }),
            t
          );
        })(A.Component),
        Yt = a("qP7j"),
        qt = a.n(Yt),
        Jt = new ((function() {
          function e() {}
          return (
            (e.prototype.DeleteForumTopic = function(r, o, i, s, l) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          x.c.COMMUNITY_BASE_URL +
                          "forum/" +
                          r.GetAccountID() +
                          "/" +
                          o +
                          "/deletetopic/"),
                        null != i && "" != i && (t += i + "/"),
                        (a = new FormData()).append("sessionid", x.c.SESSIONID),
                        a.append("gidforumtopic", s),
                        [
                          4,
                          _.a.post(t, a, {
                            withCredentials: !0,
                            cancelToken: l.token
                          })
                        ]
                      );
                    case 1:
                      if (1 != (n = e.sent()).data.success) throw n.data;
                      return [2, n.data];
                  }
                });
              });
            }),
            e
          );
        })())(),
        Qt = (function(a) {
          function s(e) {
            var t = a.call(this, e) || this;
            return (
              (t.m_cancelSignal = _.a.CancelToken.source()),
              (t.state = {
                dialogState: t.props.bNoConfirmationNeeded
                  ? "waiting"
                  : "confirmation",
                bDeleteCommentThread: !1
              }),
              t
            );
          }
          return (
            Object(D.d)(s, a),
            (s.prototype.componentDidMount = function() {
              this.props.bNoConfirmationNeeded && this.OnDelete();
            }),
            (s.prototype.OnDeleteEventSuccessCallback = function() {
              this.props.partnerEventStore.ResetModel(),
                this.state.bDeleteCommentThread
                  ? Jt.DeleteForumTopic(
                      this.m_clanSteamID,
                      "Event",
                      void 0,
                      this.m_forumTopicGID,
                      this.m_cancelSignal
                    )
                      .then(this.OnDeleteForumTopicSuccessCallback)
                      .catch(this.OnDeleteForumTopicFailureCallback)
                  : this.setState({ dialogState: "success" });
            }),
            (s.prototype.OnDeleteForumTopicSuccessCallback = function() {
              this.setState({ dialogState: "success" });
            }),
            (s.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("component unmounted");
            }),
            (s.prototype.OnDeleteEventFailureCallback = function(e) {
              this.setState(
                Object(D.a)({ dialogState: "error" }, Object(Me.a)(e))
              );
            }),
            (s.prototype.OnDeleteForumTopicFailureCallback = function(e) {
              this.setState(
                Object(D.a)(
                  { dialogState: "failed_thread_delete" },
                  Object(Me.a)(e)
                )
              );
            }),
            (s.prototype.SetToWaiting = function() {
              "waiting" != this.state.dialogState &&
                this.setState({ dialogState: "waiting" });
            }),
            (s.prototype.OnDelete = function() {
              var e = this.props,
                t = e.eventModel,
                a = e.partnerEventStore,
                n = t.clanSteamID,
                r = t.GID,
                o = t.AnnouncementGID;
              (this.m_forumTopicGID = t.forumTopicGID),
                (this.m_clanSteamID = n),
                !this.props.eventModel.bOldAnnouncement &&
                r &&
                "0" != r &&
                r != ee.e
                  ? (this.SetToWaiting(),
                    a
                      .DeleteClanEvent(n, r)
                      .then(this.OnDeleteEventSuccessCallback)
                      .catch(this.OnDeleteEventFailureCallback))
                  : this.props.eventModel.bOldAnnouncement
                  ? (this.SetToWaiting(),
                    a
                      .DeleteOldAnnouncement(n, o)
                      .then(this.OnDeleteEventSuccessCallback)
                      .catch(this.OnDeleteEventFailureCallback))
                  : (a.ResetModel(), this.setState({ dialogState: "success" }));
            }),
            (s.prototype.OnChangeDeleteForum = function() {
              this.setState({
                bDeleteCommentThread: !this.state.bDeleteCommentThread
              });
            }),
            (s.prototype.render = function() {
              var e = this,
                t = this.props.eventModel,
                a = this.props.closeModal,
                n = "",
                r = new Array();
              switch (this.state.dialogState) {
                case "confirmation":
                  var o = t.GetNameWithFallback(Object(ee.d)(x.c.LANGUAGE)),
                    i = t.BIsVisibleEvent()
                      ? "#EventDisplay_AreYouSure_Visible"
                      : "#EventDisplay_AreYouSure";
                  (n = Object(M.d)(i, o)),
                    (a = this.OnDelete),
                    t.BHasForumTopicGID() &&
                      r.push(
                        A.createElement(
                          "div",
                          {
                            key: "WantToDeleteCmtThread",
                            className: qt.a.Padding
                          },
                          A.createElement("input", {
                            type: "checkbox",
                            id: "del_cmt_post",
                            name: "del_cmt_post",
                            defaultChecked: this.state.bDeleteCommentThread,
                            onChange: this.OnChangeDeleteForum
                          }),
                          A.createElement(
                            "label",
                            { htmlFor: "del_cmt_post" },
                            Object(M.d)("#EventDisplay_DeleteEvent_Comment")
                          )
                        )
                      );
                  break;
                case "waiting":
                  (n = Object(M.d)("#EventDisplay_DeleteEvent_InProgress")),
                    r.push(A.createElement(q.a, { key: "throbber" }));
                  break;
                case "error":
                  (n = Object(M.d)("#EventDisplay_DeleteEvent_Error")),
                    r.push(
                      A.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++s.m_uniqueError,
                          className: qt.a.ErrorStyles
                        },
                        this.state.strErrorMsg
                      )
                    );
                  break;
                case "failed_thread_delete":
                  (n = Object(M.d)(
                    "#EventDisplay_DeleteEvent_ForumTopicError"
                  )),
                    r.push(
                      A.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++s.m_uniqueError,
                          className: qt.a.ErrorStyles
                        },
                        this.state.strErrorMsg
                      )
                    ),
                    this.props.onDeleteSuccessAndCloseDialog &&
                      (a = function() {
                        e.props.onDeleteSuccessAndCloseDialog(),
                          e.props.closeModal();
                      });
                  break;
                case "success":
                  (n = Object(M.d)("#EventDisplay_DeleteEvent_Success")),
                    this.props.onDeleteSuccessAndCloseDialog &&
                      (a = function() {
                        e.props.onDeleteSuccessAndCloseDialog(),
                          e.props.closeModal();
                      });
              }
              return A.createElement(
                ge.c,
                {
                  strTitle: Object(M.d)("#EventDisplay_DeleteEvent"),
                  strDescription: n,
                  onCancel: this.props.closeModal,
                  onOK: a,
                  bAlertDialog: "confirmation" != this.state.dialogState,
                  bOKDisabled: "waiting" == this.state.dialogState,
                  bDestructiveWarning: "error" == this.state.dialogState
                },
                r
              );
            }),
            (s.m_uniqueError = 0),
            Object(D.c)(
              [v.a],
              s.prototype,
              "OnDeleteEventSuccessCallback",
              null
            ),
            Object(D.c)(
              [v.a],
              s.prototype,
              "OnDeleteForumTopicSuccessCallback",
              null
            ),
            Object(D.c)(
              [v.a],
              s.prototype,
              "OnDeleteEventFailureCallback",
              null
            ),
            Object(D.c)(
              [v.a],
              s.prototype,
              "OnDeleteForumTopicFailureCallback",
              null
            ),
            Object(D.c)([v.a], s.prototype, "SetToWaiting", null),
            Object(D.c)([v.a], s.prototype, "OnDelete", null),
            Object(D.c)([v.a], s.prototype, "OnChangeDeleteForum", null),
            s
          );
        })(A.Component),
        Kt = a("6eA3"),
        Xt = a.n(Kt),
        $t = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bRedirectToHome: !1,
                nMaxSaleDayIndex: (function(e) {
                  var t = void 0;
                  e &&
                    0 < e.GetSaleSectionCount() &&
                    e.BHasSaleEnabled() &&
                    e.GetSaleSections().forEach(function(e) {
                      "items" != e.section_type ||
                        e.smart_section ||
                        e.capsules.forEach(function(e) {
                          void 0 !== e.visibility_index &&
                            (void 0 === t || t < e.visibility_index) &&
                            (t = e.visibility_index);
                        });
                    });
                  return t;
                })(e.props.eventModel),
                nSaleDayIndex: e.props.eventModel
                  ? e.props.eventModel.GetDayIndexFromEventStart()
                  : 0
              }),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.OnDeleteVerifyRequest = function(e) {
              Object(be.c)(
                A.createElement(Qt, {
                  eventModel: this.props.eventModel,
                  onDeleteSuccessAndCloseDialog: this
                    .OnDeleteSuccessAndComplete,
                  partnerEventStore: this.props.partnerEventStore
                }),
                Object(ye.m)(e)
              );
            }),
            (e.prototype.OnDeleteSuccessAndComplete = function() {
              this.setState({ bRedirectToHome: !0 });
            }),
            (e.prototype.OnChangeVisibilityDate = function(e) {
              this.setState({ nSaleDayIndex: e }),
                this.props.fnOnUpdateSaleDayIndex(e);
            }),
            (e.prototype.render = function() {
              var t = this,
                e = this.props,
                a = e.addtionalAdminButtons,
                n = e.eventModel,
                r = e.partnerEventStore,
                o = e.useAnchors;
              if (this.state.bRedirectToHome)
                return Object(ue.h)(n, ue.a.k_eCommunityAdminPage);
              var i = j.a.Get().GetPartnerEventPermissions(n.clanSteamID),
                s = n.visibility_state == w.b.k_EEventStateVisible,
                l = n.visibility_state == w.b.k_EEventStateStaged;
              if (i.can_edit || i.support_user) {
                var c = [];
                if (void 0 !== this.state.nMaxSaleDayIndex)
                  for (var d = 0; d <= this.state.nMaxSaleDayIndex; ++d)
                    c.push({
                      label: Object(M.d)("#SalePage_Admin_SaleEventDay", d + 1),
                      data: d
                    });
                return A.createElement(
                  S.a,
                  null,
                  A.createElement(
                    "div",
                    { className: Kt.DisplayAdminPanel },
                    A.createElement(
                      "span",
                      { className: Kt.DisplayAdminPanel_Title },
                      Object(M.d)("#EventDisplay_Admin_Title")
                    ),
                    A.createElement(
                      "div",
                      { className: Kt.DisplayAdminPanel_ctn },
                      a,
                      a &&
                        A.createElement(
                          "span",
                          { className: Kt.DisplayAdminPanel_Spacer },
                          " "
                        ),
                      A.createElement(
                        ue.c,
                        {
                          eventModel: n,
                          route: ue.a.k_eCommunityEdit,
                          openNewWindow: o,
                          className: Object(N.a)(mt.Button, Kt.AdminButton)
                        },
                        Object(M.d)("#EventEditor_Edit")
                      ),
                      r &&
                        A.createElement(
                          "span",
                          {
                            className: mt.Button + " " + Kt.AdminButton,
                            onClick: this.OnDeleteVerifyRequest
                          },
                          Object(M.d)("#EventDisplay_DeleteEvent")
                        ),
                      !s &&
                        A.createElement(
                          A.Fragment,
                          null,
                          A.createElement(
                            ue.c,
                            {
                              eventModel: n,
                              route: ue.a.k_eCommunityPublish,
                              openNewWindow: o,
                              className: Object(N.a)(mt.Button, Kt.AdminButton)
                            },
                            Object(M.d)(
                              l
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish"
                            )
                          )
                        ),
                      A.createElement(
                        ue.c,
                        {
                          eventModel: n,
                          route: ue.a.k_eCommunityAdminPage,
                          openNewWindow: o,
                          className: Object(N.a)(mt.Button, Kt.AdminButton)
                        },
                        Object(M.d)("#EventDisplay_Events")
                      ),
                      Boolean(
                        void 0 !== this.state.nMaxSaleDayIndex && 0 < c.length
                      ) &&
                        A.createElement(p.g, {
                          strDropDownClassName: mt.DropDownScroll,
                          rgOptions: c,
                          selectedOption: Math.min(
                            this.state.nMaxSaleDayIndex,
                            this.state.nSaleDayIndex
                          ),
                          onChange: function(e) {
                            return t.OnChangeVisibilityDate(e.data);
                          },
                          bDisableMouseOverlay: !0,
                          contextMenuPositionOptions: {
                            bDisableMouseOverlay: !0
                          }
                        }),
                      Boolean(
                        n.jsondata.bSaleEnabled && this.props.bPreviewMode
                      ) &&
                        A.createElement(
                          ue.c,
                          {
                            eventModel: n,
                            route: ue.a.k_eStoreSalePage,
                            openNewWindow: o,
                            className: Object(N.a)(mt.Button, Kt.AdminButton)
                          },
                          Object(M.d)("#EventDisplay_SalesPage")
                        ),
                      Boolean(
                        n.jsondata.bSaleEnabled && x.i.is_support && n.GID
                      ) &&
                        A.createElement(
                          "a",
                          {
                            href:
                              (x.c.IN_CLIENT ? "steam://openurl/" : "") +
                              "https://steamstats.valve.org/sales/details/?gid=" +
                              n.GID +
                              "&clanid=" +
                              n.clanSteamID.GetAccountID(),
                            target: x.c.IN_CLIENT ? "" : "_blank",
                            className: Object(N.a)(
                              mt.Button,
                              Kt.AdminButton,
                              mt.ValveOnlyBackground
                            )
                          },
                          Object(M.d)("#EventDisplay_StatsPage")
                        )
                    )
                  )
                );
              }
              return A.createElement("span", null);
            }),
            Object(D.c)([v.a], e.prototype, "OnDeleteVerifyRequest", null),
            Object(D.c)([v.a], e.prototype, "OnDeleteSuccessAndComplete", null),
            Object(D.c)([v.a], e.prototype, "OnChangeVisibilityDate", null),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component);
      var ea = a("bWts"),
        ta = a.n(ea),
        aa = a("XsxU"),
        na = a.n(aa),
        ra = a("Lql7"),
        oa = a("uIWk"),
        ia = a("7u3m"),
        sa = a.n(ia),
        la = a("D4G2"),
        ca = a.n(la),
        da = a("Ff1b"),
        pa = a.n(da),
        ua = a("go9d"),
        ma = a.n(ua),
        ha = a("/PpB"),
        va = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            t.m_cancelSignal = _.a.CancelToken.source();
            var a = T.a.InitFromClanID(e.creatorID.clan_account_id);
            return (
              (t.state = {
                bLoading: !oa.a.BHasCreatorHomeLoaded(a) || !I.a.BIsLoaded()
              }),
              t
            );
          }
          return (
            Object(D.d)(e, n),
            (e.prototype.componentDidMount = function() {
              var t = this;
              if (this.state.bLoading) {
                I.a.HintLoad();
                var e = T.a.InitFromClanID(
                  this.props.creatorID.clan_account_id
                );
                oa.a
                  .LoadCreatorHome(e, this.m_cancelSignal)
                  .then(function(e) {
                    I.a
                      .HintLoad()
                      .then(function(e) {
                        return t.setState({ bLoading: !1 });
                      })
                      .catch(function(e) {
                        return t.HandleLoadingError(e);
                      });
                  })
                  .catch(function(e) {
                    return t.HandleLoadingError(e);
                  });
              }
            }),
            (e.prototype.HandleLoadingError = function(e) {
              var t = Object(Me.a)(e);
              console.log("CreatorHomeEmbed hit error: " + t.strErrorMsg, t),
                this.setState({ bLoading: !1, strErrorMsg: t.strErrorMsg });
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "CreatorHomeEmbed component unmounted"
              );
            }),
            (e.prototype.GetSocialMediaElements = function(t) {
              var a = new Array();
              return (
                t.GetSocialList().forEach(function(e) {
                  return a.push(
                    A.createElement(ba, {
                      social: e,
                      key:
                        "creator_" +
                        t.GetClanAccountID() +
                        "_" +
                        e.external_type
                    })
                  );
                }),
                a
              );
            }),
            (e.prototype.OnFollowClick = function() {
              var e = this.props.eventModel,
                t = j.a.Get().GetPartnerEventPermissions(e.clanSteamID);
              j.a.Get().BIsUserLoggedIn()
                ? t.limited_user
                  ? Object(be.d)(A.createElement(ha.a, null), window)
                  : this.setState(
                      { bApplyingFollowing: !0 },
                      this.TakeFollowAction
                    )
                : Object(be.d)(
                    A.createElement(ge.c, {
                      strTitle: Object(M.d)("#EventDisplay_Share_NotLoggedIn"),
                      strDescription: Object(M.d)(
                        "#EventDisplay_Share_NotLoggedIn_Description"
                      ),
                      strOKButtonText: Object(M.d)("#MobileLogin_SignIn"),
                      onOK: function() {
                        return Object(Re.a)();
                      }
                    }),
                    window
                  );
            }),
            (e.prototype.TakeFollowAction = function() {
              var a = this,
                n = this.props.creatorID,
                e = T.a.InitFromClanID(n.clan_account_id),
                r = I.a.BIsFollowingCreator(e),
                o = I.a.BIsIgnoringCreator(e);
              I.a
                .UpdateFollowOrIgnoreCurator(e, !o, !(o || r))
                .then(function(e) {
                  var t = oa.a.GetCreatorHomeByID(n);
                  o || t.AdjustFollower(r ? -1 : 1),
                    a.setState({ bApplyingFollowing: !1 });
                })
                .catch(function(e) {
                  a.setState({ bApplyingFollowing: !1 }),
                    a.HandleLoadingError(e);
                });
            }),
            (e.prototype.render = function() {
              if (this.state.bLoading)
                return A.createElement(
                  "div",
                  { className: ra.DevSummaryWidgetCtn },
                  A.createElement(q.a, null)
                );
              if (this.state.strErrorMsg) return A.createElement("div", null);
              var e = this.props,
                t = e.creatorID,
                a = e.bShowTagline,
                n = T.a.InitFromClanID(t.clan_account_id),
                r = oa.a.GetCreatorHomeByID(t),
                o = t.type,
                i =
                  "developer" == t.type
                    ? Object(M.d)("#CreatorHome_DevelopedBy")
                    : "publisher" == t.type
                    ? Object(M.d)("#CreatorHome_PublishedBy")
                    : Object(M.d)("#CreatorHome_InFranchise"),
                s = r.GetNumFollowers(),
                l = r.GetURL(o),
                c = this.GetSocialMediaElements(r),
                d = I.a.BIsFollowingCreator(n),
                p = I.a.BIsIgnoringCreator(n);
              return A.createElement(
                S.a,
                null,
                A.createElement(
                  "div",
                  {
                    className: Object(N.a)(
                      ra.DevSummaryCtn,
                      this.props.bSmallFormat ? ra.SmallFormat : ra.LargeFormat
                    )
                  },
                  !this.props.bHideCreatorType &&
                    A.createElement("span", { className: ra.Title }, i),
                  A.createElement(
                    "div",
                    { className: ra.DevSummaryWidgetCtn },
                    A.createElement("div", {
                      className: ra.DevSummaryBackground,
                      style: {
                        backgroundImage:
                          "url(" + r.GetAvatarURLFullSize() + " )"
                      }
                    }),
                    A.createElement(
                      "div",
                      {
                        className: Object(N.a)(
                          ra.DevSummaryContent,
                          mt.FlexColumnContainer,
                          mt.FlexContainSpaceBetween
                        )
                      },
                      A.createElement(
                        "div",
                        { className: mt.FlexRowContainer },
                        A.createElement(
                          "a",
                          { href: l },
                          A.createElement("img", {
                            className: ra.Avatar,
                            src: r.GetAvatarURLFullSize()
                          })
                        ),
                        A.createElement(
                          "div",
                          {
                            className: Object(N.a)(
                              mt.FlexColumnContainer,
                              ra.CreatorDescCtn
                            )
                          },
                          A.createElement(
                            "div",
                            {
                              className: Object(N.a)(
                                ra.CreatorTitleCtn,
                                mt.FlexColumnContainer
                              )
                            },
                            A.createElement(
                              "a",
                              { href: l, className: ra.CreatorNameName },
                              r.GetName()
                            ),
                            a &&
                              A.createElement(
                                "div",
                                {
                                  className: Object(N.a)(
                                    mt.FlexColumnContainer,
                                    ra.CreatorTagline
                                  )
                                },
                                r.GetTagLine()
                              )
                          ),
                          A.createElement(
                            "div",
                            {
                              className: this.props.bSmallFormat
                                ? mt.FlexColumnContainer
                                : mt.FlexRowContainer
                            },
                            A.createElement(
                              "div",
                              { className: ra.FollowBtnCtn },
                              A.createElement(
                                "div",
                                {
                                  className: Object(N.a)(
                                    mt.Button,
                                    ra.FollowButton
                                  ),
                                  onClick: this.OnFollowClick
                                },
                                this.state.bApplyingFollowing &&
                                  A.createElement(q.a, { size: "small" }),
                                !this.state.bApplyingFollowing &&
                                  (d || p) &&
                                  A.createElement("img", {
                                    style: { height: "16px" },
                                    src:
                                      "https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_selected.png"
                                  }),
                                A.createElement(
                                  "div",
                                  { className: ra.FollowBtnText },
                                  !this.state.bApplyingFollowing &&
                                    (d
                                      ? Object(M.d)("#Button_Followed")
                                      : p
                                      ? Object(M.d)("#Button_Ignored")
                                      : Object(M.d)("#Button_Follow"))
                                )
                              ),
                              A.createElement(
                                "div",
                                { className: ra.Followers },
                                A.createElement(
                                  "span",
                                  null,
                                  s.toLocaleString(M.c.GetPreferredLocales())
                                ),
                                A.createElement("br", null),
                                Object(M.d)("#CreatorHome_JustFollowers")
                              )
                            ),
                            0 < c.length &&
                              A.createElement(
                                "div",
                                {
                                  className: Object(N.a)(
                                    ra.SocialContainer,
                                    mt.FlexColumnContainer
                                  )
                                },
                                c
                              )
                          )
                        )
                      )
                    )
                  )
                )
              );
            }),
            Object(D.c)([v.a], e.prototype, "OnFollowClick", null),
            Object(D.c)([v.a], e.prototype, "TakeFollowAction", null),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        _a = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bLoading: !b.a.BIsAppidLoaded(e.appid) }), t;
          }
          return (
            Object(D.d)(e, a),
            (e.prototype.componentDidMount = function() {
              var a = this,
                e = this.props.appid;
              this.state.bLoading &&
                b.a
                  .EnsureStoreCapsuleInfoLoaded(e)
                  .then(function() {
                    return a.setState({ bLoading: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(Me.a)(e);
                    console.log(
                      "CreatorHomeEmbedForApp - failed to load appinfo " +
                        t.strErrorMsg
                    ),
                      a.setState({ strErrorMsg: t.strErrorMsg, bLoading: !1 });
                  });
            }),
            (e.prototype.render = function() {
              if (this.state.bLoading)
                return A.createElement(
                  "div",
                  { className: ra.DevSummaryWidgetCtn },
                  A.createElement(q.a, null)
                );
              var e = this.props,
                t = e.appid,
                a = e.eventModel,
                n = b.a.GetStoreCapsuleInfo(t).GetAppStoreData();
              if (
                !this.state.strErrorMsg &&
                n.creator_list &&
                0 < n.creator_list.length
              ) {
                var r = void 0,
                  o = void 0,
                  i = void 0;
                return (
                  n.creator_list.forEach(function(e) {
                    switch (e.type) {
                      case "developer":
                        void 0 === r && (r = e);
                        break;
                      case "publisher":
                        void 0 === o && (o = e);
                        break;
                      default:
                        void 0 === i && (i = e);
                    }
                  }),
                  A.createElement(
                    S.a,
                    null,
                    A.createElement(va, {
                      creatorID: r || (o || i),
                      eventModel: a,
                      bSmallFormat: !0
                    })
                  )
                );
              }
              return A.createElement("div", null);
            }),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        ba = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.social,
                t = "";
              switch (e.external_type) {
                case 3:
                case 7:
                  t = sa.a;
                  break;
                case 5:
                  t = pa.a;
                  break;
                case 4:
                  t = ca.a;
                  break;
                case 6:
                  t = ma.a;
              }
              return A.createElement(
                "a",
                {
                  href:
                    (x.c.IN_CLIENT ? "steam://openurl_external/" : "") +
                    e.external_url,
                  target: x.c.IN_CLIENT ? void 0 : "_blank",
                  "data-tooltip-text": e.external_user_name
                    ? e.external_user_name
                    : e.external_url,
                  className: Object(N.a)(ra.SocialLink)
                },
                A.createElement("img", {
                  className: Object(N.a)(ra.SocialImg),
                  src: t
                }),
                A.createElement(
                  "div",
                  null,
                  e.external_follows.toLocaleString(M.c.GetPreferredLocales())
                )
              );
            }),
            t
          );
        })(A.Component),
        ga = a("TOXn"),
        ya = a("NKJh"),
        Ea = a.n(ya),
        Sa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                events: [],
                bLoading: !1,
                bShowInfiniteScrollOverlay: !1
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.PrepLoadEvents = function() {
              var e = this.props,
                t = e.partnerEventStore,
                a = e.eventModel;
              t &&
                a.BHasAnnouncementGID() &&
                this.setState({ bLoading: !0 }, this.ActualLoadEvent);
            }),
            (e.prototype.ActualLoadEvent = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r = this;
                return Object(D.e)(this, function(e) {
                  return (
                    (t = this.props),
                    (a = t.partnerEventStore),
                    (n = t.eventModel),
                    a
                      .LoadAdjacentPartnerEventsByEvent(
                        n,
                        n.clanSteamID,
                        n.appid,
                        3,
                        3,
                        void 0,
                        this.m_cancelSignal
                      )
                      .then(function(e) {
                        !r.m_cancelSignal.token.reason && e && 0 < e.length
                          ? r.setState(
                              { bLoading: !1, events: e },
                              r.HandleTrackingWhenAdjacentLoadCompleted
                            )
                          : r.setState({ bLoading: !1 });
                      })
                      .catch(function(e) {
                        r.setState(
                          { bLoading: !1 },
                          r.HandleTrackingWhenAdjacentLoadCompleted
                        ),
                          console.log(
                            "EventDetails: " + Object(Me.a)(e).strErrorMsg
                          );
                      }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.HandleTrackingWhenAdjacentLoadCompleted = function() {
              var e = this.props,
                t = e.eventModel,
                a = e.trackingLocation;
              if (a) {
                var n = j.a.Get().GetTracker();
                this.state.events &&
                  0 < this.state.events.length &&
                  this.state.events
                    .filter(function(e) {
                      return e.BIsPartnerEvent();
                    })
                    .forEach(function(e) {
                      return n.MarkEventShown(
                        e.GID,
                        e.clanSteamID.GetAccountID(),
                        a
                      );
                    }),
                  t.BIsPartnerEvent() &&
                    t.BIsVisibleEvent() &&
                    n.MarkEventRead(t.GID, t.clanSteamID.GetAccountID(), a),
                  n.Flush();
              }
            }),
            (e.prototype.componentDidMount = function() {
              this.PrepLoadEvents();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              this.props.appid != e.appid &&
                this.setState({ events: [] }, this.PrepLoadEvents);
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("PartnerEventRow unmounted");
            }),
            (e.prototype.ConstructEventRowCapsules = function() {
              var e = new Array();
              if (0 == this.state.events.length) return e;
              for (
                var t = 0,
                  a = this.props.eventModel,
                  n = new Array(),
                  r = 0,
                  o = this.state.events;
                r < o.length;
                r++
              ) {
                var i = o[r];
                i.BHasAnnouncementGID() && n.push(i.AnnouncementGID);
              }
              var s = this.props.partnerEventStore;
              ne.f(n);
              for (var l = 0, c = n; l < c.length; l++) {
                var d = c[l],
                  p = s.GetClanEventFromAnnouncementGID(d);
                if (
                  p &&
                  p.GID != a.GID &&
                  p.AnnouncementGID != a.AnnouncementGID &&
                  (p &&
                    p.visibility_state == w.b.k_EEventStateVisible &&
                    (e.push(
                      A.createElement(fa, {
                        key: p.GID + " " + p.AnnouncementGID,
                        event: p
                      })
                    ),
                    3 <= ++t))
                )
                  break;
              }
              return e;
            }),
            (e.prototype.OnViewAll = function() {
              this.setState({ bShowInfiniteScrollOverlay: !0 });
            }),
            (e.prototype.HideInfiniteScroller = function() {
              this.setState({ bShowInfiniteScrollOverlay: !1 });
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.eventModel,
                a = e.partnerEventStore,
                n = e.appid;
              if (this.state.bShowInfiniteScrollOverlay)
                return A.createElement(Be, {
                  appid: n,
                  eventModel: t,
                  announcementGID: t.GetAnnouncementGID(),
                  closeModal: this.HideInfiniteScroller,
                  partnerEventStore: a
                });
              if (this.state.bLoading)
                return A.createElement(q.a, {
                  position: "center",
                  size: "medium"
                });
              if (0 == this.state.events.length)
                return A.createElement("div", null);
              var r = b.a.GetStoreCapsuleInfo(n).GetAppStoreData(),
                o = g.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                );
              if (!o)
                return (
                  Object(J.a)(
                    o,
                    "PartnerEventRow - clan info (" +
                      t.clanSteamID.GetAccountID() +
                      ") is missing"
                  ),
                  null
                );
              var i = this.ConstructEventRowCapsules();
              if (0 == i.length) return A.createElement("div", null);
              var s = t.BHasAnnouncementGID();
              return A.createElement(
                "div",
                { className: na.a.OtherEventsCtn },
                A.createElement(
                  "div",
                  { className: ht.a.EventSectionTitleCtn },
                  A.createElement(
                    "div",
                    { className: ht.a.EventSectionTitle },
                    Object(M.k)(
                      "#EventBrowse_MoreEventsTitle",
                      o.is_ogg ? r.title : o.group_name
                    ),
                    " "
                  ),
                  A.createElement(
                    "div",
                    { className: ht.a.EventSectionSpacer },
                    " "
                  ),
                  s &&
                    A.createElement(
                      "div",
                      {
                        className: ht.a.EventSectionMoreBtn,
                        onClick: this.OnViewAll
                      },
                      Object(M.d)("#EventBrowse_MoreEventsBtn")
                    ),
                  !s &&
                    A.createElement(
                      "a",
                      {
                        href:
                          x.c.COMMUNITY_BASE_URL +
                          "ogg/" +
                          n +
                          "/announcements",
                        className: ht.a.EventSectionMoreBtn
                      },
                      Object(M.d)("#EventBrowse_MoreEventsBtn")
                    )
                ),
                A.createElement("div", { className: na.a.OtherEvents }, i)
              );
            }),
            Object(D.c)([v.a], e.prototype, "PrepLoadEvents", null),
            Object(D.c)([v.a], e.prototype, "ActualLoadEvent", null),
            Object(D.c)(
              [v.a],
              e.prototype,
              "HandleTrackingWhenAdjacentLoadCompleted",
              null
            ),
            Object(D.c)([v.a], e.prototype, "OnViewAll", null),
            Object(D.c)([v.a], e.prototype, "HideInfiniteScroller", null),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        fa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.imageURLOverride,
                n = e.openNewWindow,
                r = e.appInfo,
                o = e.langOverride,
                i = e.onClick;
              if (!t)
                return A.createElement("div", {
                  className: na.a.OtherEvents_EventCtn
                });
              var s = o || Object(ee.d)(x.c.LANGUAGE),
                l =
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        s,
                        te.c.capsule_main
                      ),
                c = t.GetNameWithFallback(s),
                d = t.GetCategoryAsString(),
                p = t.GetSummaryWithFallback(s),
                u = t.GetSubTitleWithLanguageFallback(s);
              return (
                u && (30 < u.length || 30 < c.length) && (u = void 0),
                A.createElement(
                  A.Fragment,
                  null,
                  A.createElement(
                    ue.c,
                    {
                      className: Object(N.a)(
                        na.a.OtherEvents_EventCtn,
                        na.a.HoversEnabled
                      ),
                      eventModel: t,
                      route: ue.a.k_eView,
                      openNewWindow: n,
                      onClick: i
                    },
                    A.createElement(
                      "div",
                      { className: na.a.EventSummaryContainer },
                      A.createElement(
                        "div",
                        { className: na.a.EventSummaryType },
                        d
                      ),
                      A.createElement(
                        "div",
                        { className: na.a.EventSummaryText },
                        p
                      )
                    ),
                    A.createElement("div", {
                      className: na.a.OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: "url(" + l + ")"
                      }
                    }),
                    A.createElement(
                      "div",
                      { className: na.a.OtherEvents_ContentCtn },
                      A.createElement(
                        "div",
                        { className: na.a.OtherEvents_MainImageCtn },
                        A.createElement("img", {
                          src: l,
                          className: na.a.OtherEvents_MainImage
                        })
                      ),
                      A.createElement(
                        "div",
                        { className: na.a.OtherEvents_TextCtn },
                        A.createElement(
                          "div",
                          { className: na.a.OtherEvents_TextTitle },
                          c
                        ),
                        u &&
                          A.createElement(
                            "div",
                            { className: na.a.OtherEvents_SubTitle },
                            u
                          ),
                        A.createElement(ae.a, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                        })
                      )
                    )
                  ),
                  r &&
                    A.createElement(
                      "span",
                      { className: na.a.AppCapsuleCtn },
                      A.createElement(
                        ve.a,
                        {
                          strURL: x.c.STORE_BASE_URL + "app/" + r.appid,
                          type: "app",
                          id: r.appid,
                          hoverClassName: na.a.AppCapsuleImageHover
                        },
                        A.createElement("img", {
                          className: na.a.AppCapsuleImage,
                          src: this.props.appInfo.tiny_capsule
                        })
                      ),
                      A.createElement(
                        "span",
                        { className: na.a.AppCapsulePrice },
                        Boolean(this.props.appInfo.discount_percent) &&
                          A.createElement(
                            "span",
                            { className: Ea.a.StoreSaleDiscountBox },
                            "-" + this.props.appInfo.discount_percent + "%"
                          ),
                        !this.props.appInfo.is_free &&
                          this.props.appInfo.price &&
                          A.createElement(
                            "span",
                            { className: Ea.a.StoreSalePriceBox },
                            this.props.appInfo.price
                          )
                      )
                    )
                )
              );
            }),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        Oa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.imageURLOverride,
                n = e.openNewWindow,
                r = e.onClick;
              if (!t)
                return A.createElement("div", {
                  className: na.a.OtherEvents_EventCtn
                });
              var o = Object(ee.d)(x.c.LANGUAGE),
                i =
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        o,
                        te.c.capsule_main
                      ),
                s = t.GetNameWithFallback(o),
                l = t.GetCategoryAsString();
              return A.createElement(
                ue.c,
                {
                  className:
                    na.a.OtherEvents_EventCtn + " " + na.a.HorizontalEvent,
                  eventModel: t,
                  route: ue.a.k_eView,
                  openNewWindow: n,
                  onClick: r
                },
                A.createElement(
                  "div",
                  { className: na.a.OtherEvents_ContentCtn },
                  A.createElement(
                    "div",
                    { className: na.a.OtherEvents_MainImageCtn },
                    A.createElement("img", {
                      src: i,
                      className: na.a.OtherEvents_MainImage
                    })
                  )
                ),
                A.createElement(
                  "div",
                  { className: na.a.OtherEvents_TextCtn },
                  A.createElement(
                    "div",
                    { className: na.a.HorizontalDescriptionCtn },
                    A.createElement(
                      "div",
                      { className: na.a.HorizontalDescription },
                      l
                    ),
                    A.createElement(ae.a, {
                      bSingleLine: !0,
                      dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                    })
                  ),
                  A.createElement("div", { className: na.a.HorizontalTitle }, s)
                )
              );
            }),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        Ca = (function() {
          function e(e) {
            (this.m_stats = e || {
              event_gid: "0",
              library_overview_shown: 0,
              library_overview_read: 0,
              app_details_spotlight_shown: 0,
              app_details_spotlight_read: 0,
              app_details_activity_shown: 0,
              app_details_activity_read: 0,
              store_app_page_shown: 0,
              store_app_page_read: 0,
              store_front_page_shown: 0,
              store_front_page_read: 0,
              community_hub_shown: 0,
              community_hub_read: 0,
              news_hub_shown: 0,
              news_hub_read: 0,
              event_scroller_read: 0
            }),
              (this.m_stats.total_showm =
                this.m_stats.library_overview_shown +
                this.m_stats.app_details_activity_shown +
                this.m_stats.app_details_spotlight_shown +
                this.m_stats.store_app_page_shown +
                this.m_stats.store_front_page_shown +
                this.m_stats.community_hub_shown +
                this.m_stats.news_hub_shown),
              (this.m_stats.total_read =
                this.m_stats.library_overview_read +
                this.m_stats.app_details_activity_read +
                this.m_stats.app_details_spotlight_read +
                this.m_stats.store_app_page_read +
                this.m_stats.store_front_page_read +
                this.m_stats.community_hub_read +
                this.m_stats.news_hub_read +
                this.m_stats.event_scroller_read),
              (this.m_lastUpdateTime = e ? Date.now() / 1e3 : 0);
          }
          return (
            (e.prototype.reset = function(e) {
              (this.m_stats.library_overview_shown = e.library_overview_shown),
                (this.m_stats.library_overview_read = e.library_overview_read),
                (this.m_stats.app_details_spotlight_shown =
                  e.app_details_spotlight_shown),
                (this.m_stats.app_details_spotlight_read =
                  e.app_details_spotlight_read),
                (this.m_stats.app_details_activity_shown =
                  e.app_details_activity_shown),
                (this.m_stats.app_details_activity_read =
                  e.app_details_activity_read),
                (this.m_stats.store_app_page_shown = e.store_app_page_shown),
                (this.m_stats.store_app_page_read = e.store_app_page_read),
                (this.m_stats.store_front_page_shown =
                  e.store_front_page_shown),
                (this.m_stats.store_front_page_read = e.store_front_page_read),
                (this.m_stats.community_hub_shown = e.community_hub_shown),
                (this.m_stats.community_hub_read = e.community_hub_read),
                (this.m_stats.news_hub_shown = e.news_hub_shown),
                (this.m_stats.news_hub_read = e.news_hub_read),
                (this.m_stats.event_scroller_read = e.event_scroller_read),
                (this.m_stats.total_showm =
                  e.library_overview_shown +
                  e.app_details_activity_shown +
                  e.app_details_spotlight_shown +
                  e.store_app_page_shown +
                  e.store_front_page_shown +
                  e.community_hub_shown +
                  e.news_hub_shown),
                (this.m_stats.total_read =
                  e.library_overview_read +
                  e.app_details_activity_read +
                  e.app_details_spotlight_read +
                  e.store_app_page_read +
                  e.store_front_page_read +
                  e.community_hub_read +
                  e.news_hub_read +
                  e.event_scroller_read),
                (this.m_lastUpdateTime = Date.now() / 1e3);
            }),
            Object(D.c)([m.observable], e.prototype, "m_stats", void 0),
            Object(D.c)(
              [m.observable],
              e.prototype,
              "m_lastUpdateTime",
              void 0
            ),
            e
          );
        })(),
        Ta = new ((function() {
          function e() {
            (this.m_mapPerEventStats = new Map()),
              (this.m_mapSummaryStats = new Map()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var n = this;
              if (!this.m_bLoadedFromConfig) {
                var e = Object(x.f)(
                  "trackingdatasummary",
                  "application_config"
                );
                this.ValidateStoreDefault(e) &&
                  this.m_mapSummaryStats.set(e.clan_account_id, new Ca(e));
                var t = Object(x.f)("trackingdataevents", "application_config");
                this.ValidateStoreDefaultList(t) &&
                  t.forEach(function(e) {
                    var t = T.a.InitFromClanID(e.clan_account_id),
                      a = n.GetKey(t, e.event_gid);
                    n.m_mapPerEventStats.set(a, new Ca(e));
                  }),
                  (this.m_bLoadedFromConfig = !0);
              }
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              var t = e;
              return (
                !(!t || "object" != typeof t || !t.clan_account_id) &&
                ("number" == typeof t.clan_account_id && 0 < t.clan_account_id)
              );
            }),
            (e.prototype.ValidateStoreDefaultList = function(e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  0 < t.length &&
                  "object" == typeof t[0]
                ) &&
                ("number" == typeof t[0].clan_account_id &&
                  0 < t[0].clan_account_id)
              );
            }),
            (e.prototype.GetStatsFor = function(e, t) {
              this.LazyInit();
              var a = this.GetKey(e, t);
              return (
                this.m_mapPerEventStats.has(a) ||
                  this.m_mapPerEventStats.set(a, new Ca(null)),
                this.m_mapPerEventStats.get(a)
              );
            }),
            (e.prototype.GetTotalStats = function(e) {
              return (
                this.LazyInit(),
                this.m_mapSummaryStats.has(e.GetAccountID()) ||
                  this.m_mapSummaryStats.set(e.GetAccountID(), new Ca(null)),
                this.m_mapSummaryStats.get(e.GetAccountID())
              );
            }),
            (e.prototype.GetKey = function(e, t) {
              return e.GetAccountID() + "_" + t;
            }),
            (e.prototype.LoadStatsForEvents = function(c, d, p) {
              return Object(D.b)(this, void 0, void 0, function() {
                var n,
                  t,
                  a,
                  r,
                  o,
                  i,
                  s,
                  l = this;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        (this.LazyInit(),
                        (n = Date.now() / 1e3),
                        !(t = d.filter(function(e) {
                          var t = l.GetKey(c, e),
                            a = l.m_mapPerEventStats.get(t);
                          return (
                            !a ||
                            null == a.m_stats ||
                            a.m_lastUpdateTime < n - 3600
                          );
                        })) || 0 == t.length)
                      )
                        return [2];
                      (a =
                        Object(x.d)() + "actions/ajaxgetpartnereventsreport"),
                        (r = {
                          sessionid: x.c.SESSIONID,
                          clan_account_id: c.GetAccountID(),
                          gidlist: t.join(",")
                        }),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          _.a.get(a, {
                            params: r,
                            withCredentials: !0,
                            cancelToken: p.token
                          })
                        ]
                      );
                    case 2:
                      return (
                        (o = e.sent()),
                        Object(m.runInAction)(function() {
                          l.m_mapSummaryStats.set(
                            c.GetAccountID(),
                            new Ca(o.data.summary)
                          ),
                            o.data.events_detail.forEach(function(e) {
                              var t = l.GetKey(c, e.event_gid);
                              l.m_mapPerEventStats.has(t)
                                ? l.m_mapPerEventStats.get(t).reset(e)
                                : l.m_mapPerEventStats.set(t, new Ca(e));
                            });
                        }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = e.sent()),
                        (s = Object(Me.a)(i)),
                        console.error(
                          "CPartnerEventReportingStore " + s.strErrorMsg,
                          s
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            Object(D.c)(
              [m.observable],
              e.prototype,
              "m_mapPerEventStats",
              void 0
            ),
            Object(D.c)(
              [m.observable],
              e.prototype,
              "m_mapSummaryStats",
              void 0
            ),
            Object(D.c)([m.action], e.prototype, "LazyInit", null),
            e
          );
        })())(),
        wa = a("sGzE"),
        Ia = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.summary,
                a = e.bIncludeDescription;
              return 0 == t.total_read + t.total_showm
                ? null
                : A.createElement(
                    "div",
                    null,
                    A.createElement(
                      "div",
                      {
                        className: Object(N.a)(
                          wa.StatsCtnTitle,
                          a ? wa.NormalStatsMode : wa.SmallStatsMode
                        )
                      },
                      A.createElement(
                        "h1",
                        null,
                        Object(M.d)("#EventDashBoard_SummaryStats_Title")
                      ),
                      Boolean(a) &&
                        A.createElement(
                          "p",
                          null,
                          Object(M.d)("#EventDashBoard_SummaryStats_Desc"),
                          " ",
                          A.createElement(
                            "a",
                            {
                              href:
                                "https://partner.steamgames.com/doc/marketing/event_tools/stats",
                              target: "_blank"
                            },
                            Object(M.d)("#EventDashBoard_SummaryStats_Link")
                          )
                        )
                    ),
                    A.createElement(
                      "div",
                      {
                        className: Object(N.a)(
                          wa.StatsCtn,
                          a ? wa.NormalStatsMode : wa.SmallStatsMode
                        )
                      },
                      A.createElement(
                        "div",
                        { className: wa.StatsLeftSection },
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle_ctn },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)("#EventDashBoard_Location_LibraryHome")
                          )
                        ),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)(
                              "#EventDashBoard_Summary_LibraryHome_Shown"
                            )
                          ),
                          A.createElement(
                            "span",
                            null,
                            t.library_overview_shown.toLocaleString(
                              M.c.GetPreferredLocales()
                            )
                          )
                        ),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)(
                              "#EventDashBoard_Summary_LibraryHome_Read"
                            )
                          ),
                          A.createElement(
                            "span",
                            null,
                            t.library_overview_read.toLocaleString(
                              M.c.GetPreferredLocales()
                            )
                          )
                        ),
                        A.createElement("br", null),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle_ctn },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)(
                              "#EventDashBoard_Location_LibraryDetail"
                            )
                          )
                        ),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Shown"
                            )
                          ),
                          A.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_shown.toLocaleString(
                              M.c.GetPreferredLocales()
                            )
                          )
                        ),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Read"
                            )
                          ),
                          A.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_read.toLocaleString(
                              M.c.GetPreferredLocales()
                            )
                          )
                        ),
                        A.createElement("br", null),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)(
                              "#EventDashBoard_Summary_AppDetailActivity_Shown"
                            )
                          ),
                          A.createElement(
                            "span",
                            null,
                            t.app_details_activity_shown.toLocaleString(
                              M.c.GetPreferredLocales()
                            )
                          )
                        ),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)(
                              "#EventDashBoard_Summary_AppDetailActivity_Read"
                            )
                          ),
                          A.createElement(
                            "span",
                            null,
                            t.app_details_activity_read.toLocaleString(
                              M.c.GetPreferredLocales()
                            )
                          )
                        )
                      ),
                      A.createElement(
                        "div",
                        { className: wa.StatsRightSection },
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle_ctn },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)("#EventDashBoard_Location_StoreDetail")
                          )
                        ),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)(
                              "#EventDashBoard_Summary_StoreAppPage_Shown"
                            )
                          ),
                          A.createElement(
                            "span",
                            null,
                            t.store_app_page_shown.toLocaleString(
                              M.c.GetPreferredLocales()
                            )
                          )
                        ),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)(
                              "#EventDashBoard_Summary_StoreAppPage_Read"
                            )
                          ),
                          A.createElement(
                            "span",
                            null,
                            t.store_app_page_read.toLocaleString(
                              M.c.GetPreferredLocales()
                            )
                          )
                        ),
                        A.createElement("br", null),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle_ctn },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)(
                              "#EventDashBoard_Location_CommunityDetail"
                            )
                          )
                        ),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)(
                              "#EventDashBoard_Summary_Community_Shown"
                            )
                          ),
                          A.createElement(
                            "span",
                            null,
                            t.community_hub_shown.toLocaleString(
                              M.c.GetPreferredLocales()
                            )
                          )
                        ),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)(
                              "#EventDashBoard_Summary_Community_Read"
                            )
                          ),
                          A.createElement(
                            "span",
                            null,
                            t.community_hub_read.toLocaleString(
                              M.c.GetPreferredLocales()
                            )
                          )
                        ),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle_ctn },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)(
                              "#EventDashBoard_Location_NewsHubDetail"
                            )
                          )
                        ),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)("#EventDashBoard_Summary_NewsHub_Shown")
                          ),
                          A.createElement(
                            "span",
                            null,
                            t.news_hub_shown.toLocaleString(
                              M.c.GetPreferredLocales()
                            )
                          )
                        ),
                        A.createElement(
                          "div",
                          { className: wa.StatsTitle },
                          A.createElement(
                            "span",
                            null,
                            Object(M.d)("#EventDashBoard_Summary_NewsHub_Read")
                          ),
                          A.createElement(
                            "span",
                            null,
                            t.news_hub_read.toLocaleString(
                              M.c.GetPreferredLocales()
                            )
                          )
                        )
                      )
                    )
                  );
            }),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        ka = a("ZCZY"),
        Da = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.GenerateBreadCrumbs = function() {
              var t = new Array();
              return (
                this.props.crumbs.forEach(function(e) {
                  e.url.startsWith("http")
                    ? t.push(
                        A.createElement(
                          "a",
                          { key: "anchor_" + e.name, href: e.url },
                          e.name
                        )
                      )
                    : t.push(
                        A.createElement(
                          f.b,
                          { key: "link_" + e.name, to: e.url },
                          e.name
                        )
                      ),
                    t.push(
                      A.createElement("span", { key: e.name + "span" }, " > ")
                    );
                }),
                t
              );
            }),
            (t.prototype.render = function() {
              var e = this.GenerateBreadCrumbs();
              return A.createElement(
                "div",
                { className: Object(N.a)(ka.BreadContainer) },
                A.createElement("div", { className: "blockbg" }, e),
                A.createElement("div", { style: { clear: "left" } })
              );
            }),
            t
          );
        })(A.Component),
        ja = a("4sqd"),
        Aa = a("5L1o"),
        La = A.lazy(function() {
          return Promise.all([a.e(0), a.e(1), a.e(4)]).then(
            a.bind(null, "NIbt")
          );
        }),
        Ga = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = _.a.CancelToken.source()),
              (e.state = {
                bLoadingAppInfo: !b.a.BIsAppidLoaded(e.props.event.appid),
                bLoadingClanInfo: !!g.a.GetClanInfoByClanAccountID(
                  e.props.event.clanSteamID.GetAccountID()
                )
              }),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this;
              window.scrollTo(0, 0);
              var e = this.props.event.appid;
              this.state.bLoadingAppInfo &&
                b.a.EnsureStoreCapsuleInfoLoaded(e).then(function() {
                  return t.setState({ bLoadingAppInfo: !1 });
                }),
                this.state.bLoadingClanInfo &&
                  g.a
                    .LoadOGGClanInfoForClanSteamID(this.props.event.clanSteamID)
                    .then(function(e) {
                      return t.setState({ bLoadingClanInfo: !1 });
                    });
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("EventDetails is being unmounted");
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.lang,
                n = e.partnerEventStore,
                r = e.emoticonStore,
                o = e.nOverrideStartTime,
                i = e.nOverrideEndTime,
                s = e.adminPanel,
                l = e.previewMode,
                c = e.otherEventRow,
                d = e.titleBar;
              if (
                !this.props.event.bLoaded ||
                this.state.bLoadingAppInfo ||
                this.state.bLoadingClanInfo
              )
                return A.createElement(
                  "div",
                  { className: Ge.a.FlexCenter, style: { height: "400px" } },
                  A.createElement(q.a, {
                    size: "medium",
                    string: Object(M.d)("#Loading")
                  })
                );
              var p = t.GetDescriptionWithFallback(a),
                u = b.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData(),
                m = Object(x.d)() == x.c.STORE_BASE_URL,
                h = g.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                ),
                v = Object(ue.d)(
                  t,
                  m ? ue.a.k_eStoreNewsHub : ue.a.k_eCommunityAllNews,
                  "allowRelative",
                  h && h.vanity_url
                );
              return A.createElement(Na, {
                event: t,
                lang: a,
                titleBar: d,
                body: A.createElement(
                  S.a,
                  null,
                  A.createElement(
                    "div",
                    { className: Xt.a.EventDetailTitleContainer },
                    A.createElement(Da, {
                      crumbs: [
                        {
                          name: Object(M.d)("#BreadCrumbs_AllEvents"),
                          url: Object(ue.d)(
                            t,
                            ue.a.k_eStoreUsersNewsHub,
                            "allowRelative"
                          )
                        },
                        {
                          name: Object(M.d)("#BreadCrumbs_GameEvents", u.title),
                          url: v
                        }
                      ]
                    }),
                    A.createElement(
                      "div",
                      { className: Xt.a.EventDetailTitle },
                      t.GetNameWithFallback(a)
                    ),
                    t.BHasSubTitle(a) &&
                      A.createElement(
                        "div",
                        { className: Xt.a.EventDetailsSubTitle },
                        t.GetSubTitle(a)
                      )
                  ),
                  t.BHasBroadcastEnabled() &&
                    A.createElement(
                      "div",
                      { className: Xt.a.EventBroadcastCtn },
                      A.createElement(
                        A.Suspense,
                        { fallback: A.createElement("div", null) },
                        A.createElement(La, {
                          event: this.props.event,
                          bIsPreview: this.props.previewMode,
                          accountIDs: this.props.previewMode
                            ? this.props.event.jsondata.broadcast_whitelist
                            : void 0
                        })
                      )
                    ),
                  A.createElement(
                    "div",
                    { className: Xt.a.EventColumns },
                    A.createElement(
                      "div",
                      { className: Xt.a.EventDetailsDescription },
                      A.createElement(
                        S.a,
                        null,
                        t.BHasTag("steam_award_nomination_request") &&
                          A.createElement(ja.a, {
                            event: t,
                            lang: a,
                            previewMode: l
                          }),
                        t.BHasTag("steam_award_vote_request") &&
                          A.createElement(ja.b, {
                            event: t,
                            lang: a,
                            previewMode: l
                          })
                      ),
                      A.createElement(
                        S.a,
                        null,
                        A.createElement(
                          "div",
                          {
                            className: Object(N.a)(
                              "EventDetailsBody",
                              Xt.a.EventDetailsBody
                            )
                          },
                          A.createElement(ga.a, {
                            text: p || "",
                            partnerEventStore: n,
                            showErrorInfo: l,
                            event: t,
                            languageOverride: a
                          })
                        )
                      ),
                      Boolean(t.jsondata.read_more_link) &&
                        A.createElement(
                          C.a,
                          {
                            className: Object(N.a)(ht.a.Button),
                            href: t.jsondata.read_more_link
                          },
                          Object(M.d)("#EventEmail_Button_ClickForMoreDetails")
                        ),
                      A.createElement("span", { className: ht.a.Clear }),
                      A.createElement(
                        S.a,
                        null,
                        A.createElement(ut.a, { appid: t.appid })
                      )
                    ),
                    A.createElement(
                      S.a,
                      null,
                      A.createElement(Ma, {
                        event: t,
                        lang: a,
                        nOverrideStartTime: o,
                        nOverrideEndTime: i
                      })
                    )
                  ),
                  A.createElement(K.b, {
                    eventModel: t,
                    emoticonStore: r,
                    partnerEventStore: n
                  })
                ),
                postbody: A.createElement(S.a, null, s, c),
                footer: A.createElement(
                  S.a,
                  null,
                  A.createElement(
                    "div",
                    { className: Xt.a.AppSummaryCtn },
                    A.createElement(
                      "div",
                      { className: Xt.a.EventBodyPosition },
                      Boolean(
                        null != u.appid && null != u.appid && 0 != u.appid
                      ) &&
                        A.createElement(
                          "div",
                          { className: Xt.a.AppSummaryWidgetTitleCtn },
                          A.createElement(
                            "span",
                            { className: Xt.a.Title },
                            Object(M.d)("#CreatorHome_ThisGame")
                          ),
                          A.createElement(
                            "div",
                            { className: Xt.a.AppSummaryWidgetCtn },
                            A.createElement(Aa.f, { id: t.appid })
                          )
                        ),
                      A.createElement(_a, {
                        appid: t.appid,
                        eventModel: t,
                        bSmallFormat: !0
                      })
                    )
                  )
                )
              });
            }),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        Na = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.lang,
                n = e.titleBar,
                r = e.body,
                o = e.postbody,
                i = e.footer,
                s = t.GetImageURLWithFallback("background", a),
                l = t.BIsImageSafeForAllAges("background", a),
                c = "lang_" + Object(ee.c)(a),
                d = t.BImageNeedScreenshotFallback("background", a);
              return A.createElement(
                "div",
                {
                  className: Object(N.a)(
                    Xt.a.EventDetailsPageContainer,
                    c,
                    ht.a.PartnerEventFont,
                    l
                      ? Xt.a.DetailArtworkAgeAppropriate
                      : Xt.a.DetailArtworkAgeNotAppropriate,
                    d && Xt.a.NoTitleArtwork
                  )
                },
                n,
                A.createElement(
                  "div",
                  { className: Xt.a.EventCoverImageCtn },
                  A.createElement(
                    "div",
                    { className: Xt.a.EventCoverImageBlr },
                    A.createElement("div", {
                      className: Xt.a.EventCoverImageFuzz,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + s + ")"
                      }
                    }),
                    A.createElement("div", {
                      className: Xt.a.EventCoverImage,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + s + ")"
                      }
                    })
                  ),
                  A.createElement("div", { className: Xt.a.CoverImageGradient })
                ),
                A.createElement(
                  "div",
                  { className: Xt.a.EventBodyCtn },
                  A.createElement("div", {
                    className: Xt.a.EventBackgroundBlurCtn
                  }),
                  A.createElement(
                    "div",
                    { className: Xt.a.EventBodyPosition },
                    A.createElement(
                      "div",
                      { className: Xt.a.EventBody },
                      A.createElement("div", {
                        className: Xt.a.EventBackgroundBlur,
                        style: { backgroundImage: "url(" + s + ")" }
                      }),
                      A.createElement(S.a, null, r)
                    ),
                    Boolean(o) && A.createElement(S.a, null, o)
                  )
                ),
                Boolean(i) && A.createElement(S.a, null, i)
              );
            }),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        Ma = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.componentDidMount = function() {
              b.a.EnsureStoreCapsuleInfoLoaded(this.props.event.appid);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.lang,
                n = e.nOverrideStartTime,
                r = e.nOverrideEndTime,
                o = t.GetCategoryAsString(),
                i = g.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                );
              if (!i)
                return (
                  Object(J.a)(
                    i,
                    "EventDetailsRightColumn - clan info (" +
                      t.clanSteamID.GetAccountID() +
                      ") is missing"
                  ),
                  null
                );
              var s = L.a.GetTimeNowWithOverride(),
                l = n || t.GetStartTimeAndDateUnixSeconds();
              return A.createElement(
                "div",
                { className: Xt.a.EventDetailTitleDesc },
                A.createElement(
                  "div",
                  { className: Xt.a.EventDetailsSticky },
                  i.is_ogg
                    ? A.createElement(xa, { appid: i.appid })
                    : A.createElement(Ba, { clanSteamID: t.clanSteamID }),
                  A.createElement(ut.b, {
                    event: t,
                    nOverrideEndTime: r,
                    nOverrideStartTime: n
                  }),
                  28 !== t.type &&
                    s < l &&
                    A.createElement(
                      "div",
                      { className: Xt.a.EventDetailTimeInfo },
                      A.createElement(X.a, {
                        eventModel: t,
                        eventGID: t.GID,
                        lang: a
                      })
                    ),
                  A.createElement(
                    "div",
                    { className: Xt.a.EventDetailUserType },
                    A.createElement(
                      "div",
                      { className: Xt.a.RightSideTitles },
                      Object(M.d)("#EventDisplay_RightColumnTitle_EventType")
                    ),
                    A.createElement(
                      "div",
                      { className: Xt.a.EventDetailsType },
                      o,
                      " "
                    )
                  ),
                  A.createElement(Ha, { event: t })
                )
              );
            }),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        xa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var t = this.props.appid;
              Object(J.a)(t && 0 != t, "Expected Appid In Game Info Section");
              var e = b.a.GetStoreCapsuleInfo(t),
                a = e.GetAppStoreData();
              return A.createElement(
                "div",
                { className: Xt.a.EventDetailGameCallToAction },
                A.createElement(
                  "div",
                  { className: Xt.a.RightSideTitles },
                  it.q.some(function(e) {
                    return t === e;
                  })
                    ? Object(M.d)("#EventDisplay_RightColumnTitle_Blog")
                    : Object(M.d)("#EventDisplay_RightColumnTitle_Game")
                ),
                A.createElement(
                  "a",
                  { href: e ? a.capsule_link : "" },
                  A.createElement("div", {
                    className: Xt.a.EventDetailsGame,
                    style: { backgroundImage: "url(" + a.capsule + ")" }
                  })
                ),
                A.createElement(Pa, { appid: t })
              );
            }),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        Ba = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.clanSteamID,
                t = g.a.GetClanInfoByClanAccountID(e.GetAccountID());
              return t
                ? A.createElement(
                    "div",
                    { className: Xt.a.EventDetailGameCallToAction },
                    A.createElement(
                      "div",
                      { className: Xt.a.RightSideTitles },
                      t.group_name
                    ),
                    A.createElement(
                      "a",
                      { href: g.a.GetCreatorStoreURL(e) },
                      A.createElement("div", {
                        className: Xt.a.EventDetailsAvatar,
                        style: {
                          backgroundImage: "url(" + t.avatar_full_url + ")"
                        }
                      })
                    )
                  )
                : (Object(J.a)(
                    t,
                    "EventDetailsRightCreatorInfo - clan info (" +
                      e.GetAccountID() +
                      ") is missing"
                  ),
                  null);
            }),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        Pa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.componentDidMount = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                return Object(D.e)(this, function(e) {
                  return (
                    b.a.EnsureStoreCapsuleInfoLoaded(this.props.appid),
                    I.a.HintLoad(),
                    [2]
                  );
                });
              });
            }),
            (t.prototype.render = function() {
              var e = this.props.appid,
                t = b.a.GetStoreCapsuleInfo(e),
                a = t.GetAppStoreData(),
                n = null;
              I.a.BOwnsApp(e)
                ? (n = Object(M.d)("#EventDisplay_CallToAction_InLibrary"))
                : t.GetAppStoreData().coming_soon && !t.GetAppStoreData().subid
                ? (n = Object(M.d)("#EventDisplay_CallToAction_ComingSoon"))
                : a.is_free
                ? (n = Object(M.d)("#EventDisplay_CallToAction_FreeToPlay"))
                : a.is_free || (n = a.price);
              var r =
                1 !== a.success ||
                it.q.some(function(e) {
                  return a.appid === e;
                });
              return A.createElement(
                "div",
                { className: r ? Xt.a.SteamBlog : void 0 },
                A.createElement(
                  "div",
                  { className: Xt.a.GameActions },
                  A.createElement(
                    "div",
                    {
                      className: Xt.a.Ownership,
                      style: { fontSize: n && n.length < 10 ? "12px" : "10px" }
                    },
                    n || null
                  ),
                  A.createElement(Aa.a, { info: a })
                ),
                A.createElement(
                  "div",
                  { className: Object(N.a)(Xt.a.GameActions) },
                  A.createElement(Aa.h, { info: a })
                )
              );
            }),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        Ra = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"],
        Ha = (A.Component,
        (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_cancelSignal = _.a.CancelToken.source()), e;
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this,
                a = this.props.event;
              a.BIsPartnerEvent() &&
                a.BIsVisibleEvent() &&
                j.a
                  .Get()
                  .LoadSingleAppEventPermissions(a.clanSteamID)
                  .then(function(e) {
                    e &&
                      e.can_edit &&
                      Ta.LoadStatsForEvents(
                        a.clanSteamID,
                        [a.GID],
                        t.m_cancelSignal
                      );
                  });
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("EventDisplayEditorInfo cancelled");
            }),
            (e.prototype.render = function() {
              var e = this.props.event;
              if (!j.a.Get().GetPartnerEventPermissions(e.clanSteamID).can_edit)
                return null;
              var t =
                e.BIsPartnerEvent() &&
                e.BIsVisibleEvent() &&
                Ta.GetStatsFor(e.clanSteamID, e.GID);
              return A.createElement(
                S.a,
                null,
                A.createElement(
                  "div",
                  { className: Xt.a.EditorStatsCtn },
                  A.createElement(
                    "div",
                    { className: Xt.a.EditorStatsRow },
                    A.createElement(
                      "span",
                      null,
                      Object(M.d)("#EventEditor_Comments")
                    ),
                    A.createElement(
                      "span",
                      null,
                      e.nCommentCount.toLocaleString(M.c.GetPreferredLocales())
                    )
                  ),
                  A.createElement(
                    "div",
                    { className: Xt.a.EditorStatsRow },
                    A.createElement(
                      "span",
                      null,
                      Object(M.d)("#EventEditor_UpVotes")
                    ),
                    A.createElement(
                      "span",
                      null,
                      e.nVotesUp
                        ? e.nVotesUp.toLocaleString(M.c.GetPreferredLocales())
                        : 0
                    )
                  ),
                  A.createElement(
                    "div",
                    { className: Xt.a.EditorStatsRow },
                    A.createElement(
                      "span",
                      null,
                      Object(M.d)("#EventEditor_DownVotes")
                    ),
                    A.createElement(
                      "span",
                      null,
                      e.nVotesDown
                        ? e.nVotesDown.toLocaleString(M.c.GetPreferredLocales())
                        : 0
                    )
                  )
                ),
                Boolean(t) &&
                  A.createElement(
                    "div",
                    { className: Xt.a.EditorStatsCtn },
                    Object(M.d)("#EventDashBoard_SummaryStats_Admin_Title"),
                    A.createElement(Ia, { summary: t.m_stats })
                  )
              );
            }),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component)),
        Fa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.componentDidMount = function() {
              Pt.GetRawDoorData() || Pt.LoadDoorData(),
                Bt.LoadSaleTokenPoints();
            }),
            (t.prototype.render = function() {
              var e = Pt.GetRawDoorData();
              if (!e) return null;
              for (
                var t = e.length - 1,
                  a = L.a.GetTimeNowWithOverride() > e[t].rtime_start,
                  n = [],
                  r = 0;
                r <= t;
                r++
              )
                n.push(
                  A.createElement(Ua, {
                    key: "envelope-" + r,
                    iDoorIndex: r,
                    strFontFamily: this.props.strFontFamily
                  })
                );
              var o = Bt.GetSaleTokenPoints().points;
              return A.createElement(
                S.a,
                null,
                A.createElement(
                  "div",
                  { className: Xt.a.LunarNewYearHeader },
                  A.createElement(
                    "div",
                    { className: Xt.a.EnvelopeArea },
                    0 <= o &&
                      A.createElement(
                        "div",
                        { className: Xt.a.TokenBalanceContainer },
                        Object(M.d)("#Lunar2020_YourBalancePrefix"),
                        A.createElement(
                          "a",
                          {
                            className: Xt.a.TokenBalance,
                            href: x.c.STORE_BASE_URL + "lunarnewyearmarket"
                          },
                          " ",
                          Object(M.d)("#Lunar2020_BalanceNumberOfTokens", o),
                          " "
                        )
                      ),
                    n
                  ),
                  !a &&
                    A.createElement(
                      "div",
                      { className: Xt.a.BottomMessage },
                      Object(M.d)("#Lunar2020_CheckBackEachDay")
                    )
                )
              );
            }),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        za = [
          "#Lunar2020_FirstGift",
          "#Lunar2020_SecondGift",
          "#Lunar2020_ThirdGift",
          "#Lunar2020_FourthGift"
        ],
        Ua = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.OpenEnvelope = function(n) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = Pt.BIsDoorOpened(this.props.iDoorIndex)),
                        (a = Object(ye.m)(n)),
                        t
                          ? (Object(be.b)(
                              A.createElement(
                                Za,
                                Object(D.a)({ bIsFirstOpen: !1 }, this.props)
                              ),
                              a
                            ),
                            [2])
                          : [4, Pt.OpenDoor(this.props.iDoorIndex, !0)]
                      );
                    case 1:
                      return (
                        e.sent() &&
                          Object(be.b)(
                            A.createElement(
                              Za,
                              Object(D.a)({ bIsFirstOpen: !0 }, this.props)
                            ),
                            a
                          ),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.ShowLimitedUserDialog = function(e) {
              var t = Object(ye.m)(e),
                a = A.createElement(
                  "a",
                  { href: x.c.HELP_BASE_URL },
                  Object(M.d)("#User_LimitedAccount_UrlInfo")
                );
              Object(be.b)(
                A.createElement(ge.c, {
                  strTitle: Object(M.d)("#Lunar2020_LimitedUserDialogTitle"),
                  strDescription: Object(M.k)("#User_LimitedAccount", a),
                  bAlertDialog: !0
                }),
                t
              );
            }),
            (t.prototype.VOOnClose = function() {
              x.i.is_support && Pt.OpenDoor(this.props.iDoorIndex, !1);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.iDoorIndex,
                a = e.strFontFamily;
              Object(J.a)(
                0 <= t && t < za.length && t < Pt.GetDoorCount(),
                "Day index #" + t + " not in valid range."
              );
              for (
                var n = Object(M.d)(za[t]),
                  r = !x.i.logged_in,
                  o = Pt.BIsDoorOpened(t),
                  i = Pt.BCanUserOpenDoor(t),
                  s = !0,
                  l = 0;
                l < t;
                l++
              )
                s = s && Pt.BIsDoorOpened(l);
              var c = !o && i && s,
                d = new Date(1e3 * Pt.GetRawDoorData()[t].rtime_start),
                p = r
                  ? Object(M.d)("#Login_SignIn")
                  : o
                  ? Object(M.d)("#Lunar2020_RereadStory")
                  : c
                  ? Object(M.d)("#Lunar2020_GiftCanBeOpenedNow")
                  : i
                  ? Object(M.d)("#Lunar2020_GiftCanBeOpenedAfterThePreviousOne")
                  : Object(M.d)(
                      "#Lunar2020_GiftLockedUntilDate",
                      d.toLocaleDateString(M.c.GetPreferredLocales(), {
                        month: "numeric",
                        day: "numeric"
                      })
                    ),
                u = r
                  ? Re.a
                  : x.i.is_limited
                  ? this.ShowLimitedUserDialog
                  : o || c
                  ? this.OpenEnvelope
                  : null,
                m = Object(N.a)(
                  Xt.a.EnvelopeContainer,
                  r && Xt.a.NeedLogin,
                  o && Xt.a.Opened,
                  c && Xt.a.Unlocked,
                  !o && !c && Xt.a.Locked
                );
              return A.createElement(
                "div",
                { className: m },
                A.createElement("div", { className: Xt.a.BackingRect }),
                A.createElement(
                  "div",
                  { className: Xt.a.Envelope },
                  A.createElement(
                    "div",
                    { className: Xt.a.GiftLabel, style: { fontFamily: a } },
                    n
                  )
                ),
                A.createElement(
                  "div",
                  { className: Xt.a.OpenState, onClick: u },
                  p
                ),
                (x.i.is_support &&
                  o &&
                  ("beta" == x.c.WEB_UNIVERSE || "dev" == x.c.WEB_UNIVERSE) &&
                  A.createElement(
                    "div",
                    {
                      className: Object(N.a)(Xt.a.OpenState, Xt.a.VO),
                      onClick: this.VOOnClose
                    },
                    "(VO) Close Gift"
                  )) ||
                  null
              );
            }),
            Object(D.c)([v.a], t.prototype, "OpenEnvelope", null),
            Object(D.c)([v.a], t.prototype, "ShowLimitedUserDialog", null),
            Object(D.c)([v.a], t.prototype, "VOOnClose", null),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        Wa = [
          "#Lunar2020_StoryDayOneHeader",
          "#Lunar2020_StoryDayTwoHeader",
          "#Lunar2020_StoryDayThreeHeader",
          "#Lunar2020_StoryDayFourHeader"
        ],
        Va = [
          "#Lunar2020_StoryDayOne",
          "#Lunar2020_StoryDayTwo",
          "#Lunar2020_StoryDayThree",
          "#Lunar2020_StoryDayFour"
        ],
        Za = function(e) {
          var t = A.useState(!e.bIsFirstOpen),
            a = t[0],
            n = t[1];
          A.useEffect(function() {
            return n(!0);
          }, []);
          var r =
              x.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.mp4" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            o =
              x.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.webm" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            i = e.iDoorIndex == Pt.GetDoorCount() - 1;
          return A.createElement(
            ge.d,
            {
              className: Xt.a.LunarNewYearOpenEnvelopeVideoDialog,
              closeModal: e.closeModal
            },
            A.createElement(
              "div",
              { className: Xt.a.Container },
              A.createElement(
                "div",
                { className: Xt.a.Column },
                A.createElement(
                  "div",
                  { className: Xt.a.StoryHeader },
                  Object(M.d)("#Lunar2020_StoryTitle")
                ),
                A.createElement(
                  "div",
                  { className: Xt.a.StorySubHeader },
                  Object(M.d)("#Lunar2020_StorySubTitle")
                ),
                A.createElement(
                  "div",
                  { className: Xt.a.StorySubHeader },
                  Object(M.d)(Wa[e.iDoorIndex])
                ),
                A.createElement(
                  "div",
                  { className: Xt.a.StoryText },
                  Object(M.d)(Va[e.iDoorIndex])
                ),
                A.createElement(
                  "div",
                  { className: Xt.a.VideoBox },
                  A.createElement(
                    "div",
                    {
                      className: Object(N.a)(Xt.a.CoinText, a && Xt.a.Visible)
                    },
                    Object(M.d)("#Lunar2020_ReceivedNumberOfTokens", 100)
                  ),
                  A.createElement(
                    "video",
                    {
                      autoPlay: e.bIsFirstOpen,
                      muted: !0,
                      className: Xt.a.LunarNewYearOpenEnvelopeVideo
                    },
                    A.createElement("source", { src: r, type: "video/mp4" }),
                    A.createElement("source", { src: o, type: "video/webm" }),
                    Object(M.d)("#Lunar2020_ErrorLoadingVideo")
                  )
                )
              ),
              A.createElement(
                "div",
                { className: Xt.a.Column },
                A.createElement(
                  "div",
                  { className: Xt.a.StoryPicture },
                  A.createElement("img", {
                    src: Pt.GetStoryImage(e.iDoorIndex)
                  })
                ),
                !i &&
                  A.createElement(
                    "div",
                    { className: Xt.a.CheckBackText },
                    Object(M.d)("#Lunar2020_CheckBackEachDayForStory")
                  )
              )
            ),
            A.createElement(
              "div",
              { className: Xt.a.Links },
              A.createElement(
                "div",
                { className: Xt.a.MarketLink },
                A.createElement(
                  "a",
                  { href: x.c.STORE_BASE_URL + "lunarnewyearmarket" },
                  Object(M.d)("#Lunar2020_LinkFromVideoToMarket")
                )
              ),
              A.createElement(
                "div",
                { className: Xt.a.MarketLink, onClick: e.closeModal },
                Object(M.d)("#Lunar2020_LinkBackToSale")
              )
            )
          );
        },
        Ya = a("ZlHF"),
        qa = a.n(Ya),
        Ja = a("gyoR"),
        Qa = (a("bUNj"), a("onkS")),
        Ka = a("oVVc"),
        Xa = a("l2mU"),
        $a = a("31dG"),
        en = a.n($a);
      function tn(e, t) {
        for (var a = [], n = 0, r = e.capsules; n < r.length; n++) {
          var o = r[n];
          if ("sub" === o.type) {
            var i = Ka.b.GetPackageInfo(o.id);
            if (i) {
              if ((console.log(JSON.stringify(i)), i.renewal_time_amount === t))
                return i.packageid;
            } else a.push(o.id);
          }
        }
        0 < a.length && Ka.b.LoadPackageInfo(a);
      }
      var an = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.OnClickPurchase = function(e) {
              I.a.AddToCart(
                e,
                this.props.sub_package_id,
                x.c.STORE_BASE_URL + "cart/addtocart",
                x.c.STORE_BASE_URL + "cart"
              );
            }),
            (t.prototype.render = function() {
              var e = Ka.b.GetPackageInfo(this.props.sub_package_id),
                t = Ka.b.GetPackageInfo(this.props.compare_package_id);
              if (!e || (!t && this.props.compare_package_id))
                return (
                  Ka.b.LoadPackageInfo([
                    this.props.sub_package_id,
                    this.props.compare_package_id
                  ]),
                  null
                );
              if (!e.formatted_final_price) return null;
              var a = e.formatted_final_price,
                n = Object(Xa.a)(e, t),
                r = [a, n || ""],
                o = M.d.apply(
                  void 0,
                  Object(D.g)([this.props.price_loc_token], r)
                ),
                i = M.d.apply(
                  void 0,
                  Object(D.g)([this.props.body_loc_token], r)
                ),
                s = M.d.apply(
                  void 0,
                  Object(D.g)(["#Sale_Subscription_Save"], r)
                ),
                l = A.createElement("div", { className: en.a.LogoImg }),
                c = (function(e) {
                  for (var t = 0, a = e.appids; t < a.length; t++) {
                    var n = a[t];
                    if (I.a.BOwnsApp(n)) return !0;
                  }
                  return !1;
                })(e),
                d = null;
              return (
                (d = I.a.BOwnsPackage(this.props.sub_package_id)
                  ? A.createElement(
                      "div",
                      {
                        className: Object(N.a)(
                          en.a.PurchaseButton,
                          en.a.AlreadyOwnedPackage
                        )
                      },
                      Object(M.d)("#Sale_Subscription_AlreadyOwnedPackage")
                    )
                  : c
                  ? A.createElement(
                      "div",
                      {
                        className: Object(N.a)(
                          en.a.PurchaseButton,
                          en.a.AlreadyOwnedApp
                        )
                      },
                      Object(M.d)("#Sale_Subscription_AlreadyOwnedApp")
                    )
                  : A.createElement(
                      "div",
                      {
                        className: Object(N.a)(
                          en.a.PurchaseButton,
                          en.a.UnOwned
                        ),
                        onClick: this.OnClickPurchase
                      },
                      this.props.button_text
                    )),
                A.createElement(
                  "div",
                  { className: en.a.SubscriptionBlock },
                  l,
                  A.createElement(
                    "div",
                    { className: en.a.PriceBlock },
                    A.createElement(
                      "span",
                      { className: en.a.PriceDisplay },
                      o
                    ),
                    Boolean(n) &&
                      A.createElement(
                        "span",
                        { className: en.a.SavingsDisplay },
                        s
                      )
                  ),
                  A.createElement("div", { className: en.a.BodyTextBlock }, i),
                  d
                )
              );
            }),
            Object(D.c)([v.a], t.prototype, "OnClickPurchase", null),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        nn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = tn(this.props.section, 12),
                t = tn(this.props.section, 3),
                a = tn(this.props.section, 1);
              return A.createElement(
                "div",
                { className: en.a.MainBlock },
                A.createElement(
                  "span",
                  { className: en.a.SelectAPlan },
                  Object(M.d)("#Sale_Subscription_SelectPlan")
                ),
                A.createElement(
                  "div",
                  { className: en.a.SubscriptionListBlock },
                  A.createElement(an, {
                    sub_package_id: e,
                    compare_package_id: a,
                    price_loc_token: "#Sale_Subscription_Annual_Price",
                    body_loc_token: "#Sale_Subscription_Annual_Body",
                    button_text: Object(M.d)("#Sale_Subscription_Annual_Button")
                  }),
                  A.createElement(an, {
                    sub_package_id: t,
                    price_loc_token: "#Sale_Subscription_Quarterly_Price",
                    body_loc_token: "#Sale_Subscription_Quarterly_Body",
                    button_text: Object(M.d)(
                      "#Sale_Subscription_Quarterly_Button"
                    )
                  }),
                  A.createElement(an, {
                    sub_package_id: a,
                    price_loc_token: "#Sale_Subscription_Monthly_Price",
                    body_loc_token: "#Sale_Subscription_Monthly_Body",
                    button_text: Object(M.d)(
                      "#Sale_Subscription_Monthly_Button"
                    )
                  })
                )
              );
            }),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        rn = a("R+8l");
      function on(e, t, a) {
        return {
          color: e,
          background:
            "linear-gradient(0deg, " +
            (a || "transparent") +
            " 0%, " +
            (t || "transparent") +
            " 100%)"
        };
      }
      var sn = function(e) {
          var t = e.tab,
            a = e.language,
            n = e.onTabSelected,
            r = e.classNames,
            o = e.section,
            i = e.selected,
            s = (function(e, t) {
              return (
                (e.localized_label &&
                  (e.localized_label[t] || e.localized_label[0])) ||
                ("#Sale_default_label" === e.default_label
                  ? ""
                  : Object(M.d)(e.default_label))
              );
            })(t, a);
          if (!s) return null;
          var l = (function(e, t) {
            return e
              ? on(
                  t.tab_active_label_color,
                  t.tab_active_background_gradient_top,
                  t.tab_active_background_gradient_bottom
                )
              : on(
                  t.tab_inactive_label_color,
                  t.tab_inactive_background_gradient_top,
                  t.tab_inactive_background_gradient_bottom
                );
          })(i, o);
          return A.createElement(
            "div",
            {
              className: Object(N.a)(qa.a.SaleTab, r),
              onClick: function() {
                return n(t);
              },
              style: l
            },
            A.createElement(
              "div",
              { className: Object(N.a)(qa.a.SaleTabLabel) },
              s
            )
          );
        },
        ln = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.RenderTabCapsules = function() {
              var e = this.props.tab;
              if (!e || !e.capsules || !e.capsules.length)
                return A.createElement(
                  "div",
                  { className: qa.a.TabContentsElement },
                  Object(M.d)("#SalePage_Tabs_AllContents")
                );
              for (
                var t = new Array(), a = 0, n = e.capsules;
                a < n.length;
                a++
              ) {
                var r = n[a],
                  o = null;
                o =
                  "bundle" === r.type
                    ? rn.a.GetBundleInfo(r.id)
                    : "sub" === r.type
                    ? Ka.b.GetPackageInfo(r.id)
                    : Ne.a.GetAppInfo(r.id);
                var i = Object(M.d)("#AppType_" + r.type) + " " + r.id,
                  s = o && o.name ? o.name : i,
                  l =
                    void 0 === r.visibility_index
                      ? s
                      : Object(M.d)("#Sale_TabDayIndex", r.visibility_index),
                  c = void 0 === r.visibility_index ? -1 : r.visibility_index;
                t.push({ sName: s, sKey: i, sDisplay: l, nDaySortIndex: c });
              }
              return (
                t.sort(function(e, t) {
                  return e.nDaySortIndex !== t.nDaySortIndex
                    ? e.nDaySortIndex - t.nDaySortIndex
                    : e.sName.localeCompare(t.sName);
                }),
                A.createElement(
                  A.Fragment,
                  null,
                  t.map(function(e) {
                    return A.createElement(
                      "div",
                      { key: e.sKey, className: qa.a.TabContentsElement },
                      e.sDisplay
                    );
                  })
                )
              );
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.section,
                a = e.event;
              return A.createElement(
                "div",
                { className: Object(N.a)(qa.a.SaleSection), style: kn(t, a) },
                A.createElement(gn, Object(D.a)({}, this.props)),
                A.createElement(
                  "div",
                  { className: qa.a.TabContentsContainer },
                  this.RenderTabCapsules()
                )
              );
            }),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        cn = (function(t) {
          function a() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bScreenIsWide: a.IsWideScreen(),
                nMaxTabsPerRow: a.GetMaxTabsPerRow()
              }),
              e
            );
          }
          return (
            Object(D.d)(a, t),
            (a.IsWideScreen = function() {
              return 940 <= window.innerWidth;
            }),
            (a.GetMaxTabsPerRow = function() {
              return Math.max(Math.floor(window.innerWidth / 160), 2);
            }),
            (a.prototype.componentDidMount = function() {
              window.addEventListener("resize", this.OnResize);
            }),
            (a.prototype.componentWillUnmount = function() {
              window.removeEventListener("resize", this.OnResize);
            }),
            (a.prototype.OnResize = function() {
              this.setState({
                bScreenIsWide: a.IsWideScreen(),
                nMaxTabsPerRow: a.GetMaxTabsPerRow()
              });
            }),
            (a.prototype.render = function() {
              var a = this,
                e = this.props,
                n = e.section,
                t = e.event,
                r = e.language,
                o = e.activeTab;
              if (n.tabs.length < 2) return null;
              var i = Object(N.a)(qa.a.SaleSectionTabsTab),
                s = n.tabs.map(function(e) {
                  var t = "Tab_" + e.unique_id;
                  return A.createElement(sn, {
                    key: t,
                    section: n,
                    selected: e === o,
                    tab: e,
                    language: r,
                    classNames: Object(N.a)(
                      i,
                      e === o && qa.a.SaleSectionTabsSelected
                    ),
                    onTabSelected: function(e) {
                      return a.props.onTabSelected(n, e);
                    }
                  });
                });
              return A.createElement(
                "div",
                {
                  className: Object(N.a)(
                    qa.a.SaleSection,
                    qa.a.SaleSectionTabs
                  ),
                  style: kn(n, t)
                },
                A.createElement(gn, Object(D.a)({}, this.props)),
                A.createElement(
                  dn,
                  { className: qa.a.SaleSectionTabContainer },
                  A.createElement(
                    "div",
                    {
                      className: Object(N.a)(
                        ht.a.SaleSectionContainer,
                        qa.a.SaleSectionTabsRow
                      )
                    },
                    s
                  )
                )
              );
            }),
            Object(D.c)([v.a], a.prototype, "OnResize", null),
            a
          );
        })(A.Component),
        dn = (function(t) {
          function i() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bInScroll: !1, nStartXPos: 0, nStartScrollLeft: 0 }),
              (e.m_hSlider = A.createRef()),
              e
            );
          }
          return (
            Object(D.d)(i, t),
            (i.prototype.OnPointerDown = function(e) {
              var t = this.m_hSlider.current;
              t &&
                (t.scrollWidth <= t.clientWidth ||
                  (this.setState({
                    bInScroll: !1,
                    nStartXPos: e.pageX - t.offsetLeft,
                    nStartScrollLeft: t.scrollLeft
                  }),
                  t.addEventListener("pointerup", this.OnPointerUp),
                  t.addEventListener("pointerleave", this.OnPointerUp),
                  t.addEventListener("pointercapturelost", this.OnPointerUp),
                  t.addEventListener("pointermove", this.OnPointerMove)));
            }),
            (i.prototype.OnPointerUp = function(e) {
              var t = this.m_hSlider.current;
              t &&
                (this.state.bInScroll &&
                  (t.releasePointerCapture(e.pointerId),
                  document.body.classList.remove(
                    qa.a.HorizontalScrollInDragForceCursor
                  ),
                  this.props.dragClassName &&
                    t.classList.remove(this.props.dragClassName)),
                t.removeEventListener("pointerup", this.OnPointerUp),
                t.removeEventListener("pointerleave", this.OnPointerUp),
                t.removeEventListener("pointercapturelost", this.OnPointerUp),
                t.removeEventListener("pointermove", this.OnPointerMove));
            }),
            (i.prototype.OnPointerMove = function(e) {
              var t = this.m_hSlider.current;
              if (t) {
                e.preventDefault();
                var a =
                    (e.pageX - t.offsetLeft - this.state.nStartXPos) *
                    (this.props.scrollMultiplier ||
                      i.knDefaultScrollMultiplier),
                  n = this.state.nStartScrollLeft - a,
                  r = Math.abs(n - this.state.nStartScrollLeft),
                  o = this.props.minDragPixels || i.knDefaultMinDragPixels;
                !this.state.bInScroll &&
                  o <= r &&
                  ((t.scrollLeft = n),
                  this.setState({ bInScroll: !0 }),
                  document.body.classList.add(
                    qa.a.HorizontalScrollInDragForceCursor
                  ),
                  this.props.dragClassName &&
                    t.classList.add(this.props.dragClassName),
                  t.setPointerCapture(e.pointerId)),
                  this.state.bInScroll && (t.scrollLeft = n);
              }
            }),
            (i.prototype.render = function() {
              return A.createElement(
                "div",
                {
                  ref: this.m_hSlider,
                  className: this.props.className,
                  onPointerDown: this.OnPointerDown
                },
                this.props.children
              );
            }),
            (i.knDefaultScrollMultiplier = 1),
            (i.knDefaultMinDragPixels = 20),
            Object(D.c)([v.a], i.prototype, "OnPointerDown", null),
            Object(D.c)([v.a], i.prototype, "OnPointerUp", null),
            Object(D.c)([v.a], i.prototype, "OnPointerMove", null),
            i
          );
        })(A.Component),
        pn = A.lazy(function() {
          return Promise.all([a.e(0), a.e(1), a.e(4)]).then(
            a.bind(null, "NIbt")
          );
        });
      var un = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                nSaleDayIndex: e.props.eventModel
                  ? e.props.eventModel.GetDayIndexFromEventStart()
                  : void 0
              }),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentDidMount = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = x.b.CLANSTEAMID),
                        (a = x.b.ANNOUNCEMENT_GID),
                        this.props.eventModel
                          ? [3, 2]
                          : [
                              4,
                              w.c.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                                new T.a(t),
                                a,
                                null
                              )
                            ]
                      );
                    case 1:
                      (n = e.sent()),
                        (r = n.GetDayIndexFromEventStart()),
                        this.state.nSaleDayIndex != r &&
                          this.setState({ nSaleDayIndex: r }),
                        (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.OnChangeDayIndex = function(e) {
              if (e != this.state.nSaleDayIndex) {
                var t = this.props.eventModel
                  ? this.props.eventModel
                  : w.c.GetClanEventFromAnnouncementGID(x.b.ANNOUNCEMENT_GID);
                t && (t.m_overrideCurrentDay = e),
                  this.setState({ nSaleDayIndex: e });
              }
            }),
            (e.prototype.render = function() {
              var e =
                this.props.eventModel ||
                w.c.GetClanEventFromAnnouncementGID(x.b.ANNOUNCEMENT_GID);
              if (e && void 0 !== this.state.nSaleDayIndex) {
                var t = this.props.bIsPreview,
                  a = e.GetImageURLWithFallback(
                    "sale_header",
                    this.props.language
                  ),
                  n = null,
                  r = null;
                Pt.BHasSalePageBackgroundOverride() &&
                  ((a = Pt.GetSalePageBackgroundOverride()),
                  (n = Pt.GetSalePageBackgroundWEBM()),
                  (r = Pt.GetSalePageBackgroundMP4()));
                var o =
                    e.BHasBroadcastEnabled() &&
                    ("1688220857098505775" == e.GID ||
                      "1590261853006818581" == e.GID),
                  i = j.a.Get().GetPartnerEventPermissions(e.clanSteamID);
                return A.createElement(
                  S.a,
                  null,
                  A.createElement(
                    mn,
                    {
                      className:
                        qa.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                      backgroundImage: a,
                      backgroundColor: t
                        ? e.jsondata.sale_background_color
                        : void 0
                    },
                    Boolean(r || n) &&
                      A.createElement(
                        "div",
                        { className: qa.a.fullscreen_bg },
                        A.createElement(
                          "video",
                          {
                            key: Pt.GetLastDoorOpen(),
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            ref: function(e) {
                              e && (e.playbackRate = 0.9);
                            },
                            className: Object(N.a)(
                              qa.a.SaleBackground,
                              qa.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                              "SaleBackground",
                              qa.a.fullscreen_bg__video
                            ),
                            style: {
                              display: "flex",
                              position: "relative",
                              flexDirection: "column",
                              backgroundColor: t
                                ? e.jsondata.sale_background_color
                                : void 0
                            }
                          },
                          A.createElement("source", {
                            src: n,
                            type: "video/webm"
                          }),
                          !x.c.IN_CLIENT &&
                            A.createElement("source", {
                              src: r,
                              type: "video/mp4"
                            })
                        )
                      ),
                    A.createElement(
                      "div",
                      { className: qa.a.SaleHeaderContainer },
                      e.jsondata.sale_header_overlay &&
                        A.createElement(hn, null),
                      e.GetImageURL("sale_overlay", this.props.language) &&
                        A.createElement(
                          "div",
                          {
                            className: Object(N.a)(
                              qa.a.SaleOverlayCtn,
                              "SaleOverlayCtn"
                            )
                          },
                          A.createElement("img", {
                            className: Object(N.a)(
                              qa.a.SaleOverlay,
                              "SaleOverlay"
                            ),
                            src: e.GetImageURLWithFallback(
                              "sale_overlay",
                              this.props.language
                            )
                          })
                        ),
                      e.jsondata.sale_title_overlay &&
                        A.createElement(
                          "div",
                          null,
                          A.createElement(
                            "h1",
                            {
                              style: {
                                fontFamily: jn(
                                  e.jsondata.sale_font,
                                  this.props.language
                                ),
                                fontWeight: e.jsondata.sale_font_weight,
                                textAlign: e.GetSaleLabelAlign()
                              }
                            },
                            e.GetNameWithFallback(this.props.language)
                          ),
                          A.createElement("hr", null),
                          A.createElement(
                            "div",
                            {
                              style: {
                                textAlign: e.GetSaleLabelAlign(),
                                fontFamily: jn(
                                  e.jsondata.sale_font,
                                  this.props.language
                                ),
                                fontWeight: e.jsondata.sale_font_weight
                              }
                            },
                            A.createElement(ga.a, {
                              text: e.GetDescriptionWithFallback(
                                this.props.language
                              ),
                              partnerEventStore: w.c,
                              showErrorInfo: this.props.bIsPreview,
                              event: e
                            })
                          )
                        )
                    ),
                    A.createElement(
                      "div",
                      {
                        className:
                          qa.a.SaleOuterContainer +
                          " " +
                          qa.a["CustomStyle_" + e.jsondata.sale_vanity_id] +
                          " SaleOuterContainer",
                        style: {
                          marginTop: e.jsondata.sale_header_offset + "px"
                        }
                      },
                      Boolean(
                        e.BHasBroadcastEnabled() &&
                          e.BSaleShowBroadcastAtTopOfPage()
                      ) &&
                        A.createElement(
                          S.a,
                          null,
                          A.createElement(
                            "div",
                            { className: qa.a.SaleBroadcastCtn },
                            A.createElement(
                              A.Suspense,
                              { fallback: A.createElement("div", null) },
                              A.createElement(pn, {
                                promotionName: this.props.promotionName,
                                clanid: Number(x.b.CLANACCOUNTID),
                                event: e,
                                bIsPreview: this.props.bIsPreview,
                                language: this.props.language,
                                fnRenderBroadcastContext: o
                                  ? function() {
                                      return A.createElement(Ln, null);
                                    }
                                  : null
                              })
                            )
                          )
                        ),
                      e.jsondata.sale_show_creator &&
                        A.createElement(
                          S.a,
                          null,
                          A.createElement(
                            "div",
                            {
                              style: {
                                width: "100%",
                                margin: "0 auto",
                                maxWidth: "940px"
                              }
                            },
                            A.createElement(va, {
                              creatorID: {
                                name: null,
                                clan_account_id: e.clanSteamID.GetAccountID(),
                                type: "developer"
                              },
                              eventModel: e,
                              bShowTagline: !0,
                              bHideCreatorType: !0
                            })
                          )
                        ),
                      A.createElement(bn, {
                        bIsPreview: t,
                        event: e,
                        language: this.props.language,
                        promotionName: this.props.promotionName,
                        nSaleDayIndex: this.state.nSaleDayIndex
                      }),
                      e.jsondata.sale_browse_more_button &&
                        A.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "14px"
                            }
                          },
                          A.createElement(Tn, {
                            text: Object(M.d)("#Sale_SeeAllSpecials"),
                            url: e.jsondata.sale_browsemore_url,
                            color: e.jsondata.sale_browsemore_color,
                            bgcolor: e.jsondata.sale_browsemore_bgcolor
                          })
                        ),
                      i.can_edit &&
                        A.createElement($t, {
                          eventModel: e,
                          bPreviewMode: this.props.bIsPreview,
                          useAnchors: !this.props.bIsPreview,
                          fnOnUpdateSaleDayIndex: this.OnChangeDayIndex
                        })
                    )
                  )
                );
              }
              return A.createElement(
                "div",
                { className: Ge.a.FlexCenter, style: { height: "500px" } },
                A.createElement(q.a, {
                  size: "medium",
                  string: Object(M.d)("#Loading")
                })
              );
            }),
            Object(D.c)([v.a], e.prototype, "OnChangeDayIndex", null),
            (e = Object(D.c)([i.observer], e))
          );
        })(A.Component),
        mn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_refBackgroundPanel = A.createRef()), e;
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this;
              if (this.props.backgroundImage) {
                var a = new Image();
                (a.onload = function() {
                  var e = (100 * a.width) / 950 + "%";
                  t.m_refBackgroundPanel.current &&
                    t.m_refBackgroundPanel.current.style.setProperty(
                      "--background-scale",
                      e
                    );
                }),
                  (a.src = this.props.backgroundImage);
              }
            }),
            (e.prototype.render = function() {
              var e = this.props.backgroundImage
                ? "url(" + this.props.backgroundImage + ")"
                : null;
              return A.createElement(
                "div",
                {
                  className: Object(N.a)(
                    this.props.className,
                    qa.a.SaleBackground,
                    "SaleBackground"
                  ),
                  style: {
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    backgroundImage: e,
                    backgroundColor: this.props.backgroundColor
                  },
                  ref: this.m_refBackgroundPanel
                },
                this.props.children
              );
            }),
            e
          );
        })(A.Component),
        hn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.componentDidMount = function() {
              a("+ZmX").Init();
            }),
            (t.prototype.render = function() {
              return A.createElement("canvas", {
                className: "zdog-canvas",
                style: {
                  display: "block",
                  cursor: "move",
                  maxWidth: "100vw",
                  maxHeight: "100vw"
                },
                width: "600",
                height: "600"
              });
            }),
            t
          );
        })(A.Component),
        vn = (function() {
          function n(e, t) {
            var a = this;
            (this.m_activeTab = null),
              (this.m_capsuleFilter = null),
              e &&
                ((this.m_activeTab = e),
                (this.m_capsuleFilter = new Set()),
                Cn(e.capsules, t).forEach(function(e) {
                  a.m_capsuleFilter.add(n.GetSetName(e.type, e.id));
                }));
          }
          return (
            (n.GetSetName = function(e, t) {
              return (e || "") + t;
            }),
            (n.prototype.ShouldShowSection = function(e) {
              var t = this;
              return (
                !this.m_activeTab ||
                (!e.show_on_tabs ||
                  0 === e.show_on_tabs.length ||
                  e.show_on_tabs.some(function(e) {
                    return e === t.m_activeTab.unique_id;
                  }))
              );
            }),
            (n.prototype.GetTab = function() {
              return this.m_activeTab;
            }),
            (n.prototype.ShouldShowOnTab = function(e, t) {
              return (
                !this.m_capsuleFilter ||
                this.m_capsuleFilter.has(n.GetSetName(e, t))
              );
            }),
            (n.prototype.ShouldShowCapsule = function(e) {
              return this.ShouldShowOnTab(e.type, e.id);
            }),
            (n.prototype.ShouldShowEvent = function(e) {
              return this.ShouldShowOnTab("game", e.appid);
            }),
            n
          );
        })(),
        _n = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.GetTabSelectionsFromURL = function() {
              var n = this,
                r = new Map();
              return (
                this.props.event.GetSaleSections().forEach(function(e) {
                  if (
                    "tabs" === e.section_type &&
                    e.tabs &&
                    0 < e.tabs.length
                  ) {
                    var t = Number(Object(Pe.a)(n.props.location, "tab")) || 0,
                      a = t < e.tabs.length ? t : 0;
                    r.set(e, new vn(e.tabs[a], n.props.nSaleDayIndex));
                  }
                }),
                r
              );
            }),
            (t.prototype.OnTabSelected = function(e, t) {
              var a = e.tabs.indexOf(t);
              Object(Pe.b)(
                this.props.history,
                "tab",
                0 <= a ? a.toString() : void 0
              );
            }),
            (t.prototype.render = function() {
              var o = this,
                e = this.props,
                i = e.event,
                s = e.language,
                l = e.promotionName,
                c = e.bIsPreview,
                d = (e.nSaleDayIndex, this.GetTabSelectionsFromURL()),
                p = !1,
                u = !1,
                m = [
                  {
                    elements: [],
                    activeTab: new vn(null, this.props.nSaleDayIndex)
                  }
                ];
              i.GetSaleSections().forEach(function(e, t) {
                var a = m[m.length - 1].activeTab;
                if (a.ShouldShowSection(e)) {
                  var n = null;
                  if (
                    (function(e) {
                      return (
                        "items" == e.section_type &&
                        e.smart_section &&
                        ("wishlist" == e.smart_section_type ||
                          "interactive_recommender" == e.smart_section_type ||
                          "dlc_music_onsale" == e.smart_section_type ||
                          "ir_subscription" == e.smart_section_type ||
                          ("wishlist_onsale" == e.smart_section_type &&
                            !Ht.GetHideWishlist()) ||
                          ("dlc_onsale" == e.smart_section_type &&
                            !Ht.GetHideDLC()) ||
                          ("interactive_recommender_onsale" ==
                            e.smart_section_type &&
                            !Ht.GetHideIRList()))
                      );
                    })(e) &&
                    !x.i.logged_in
                  )
                    p ||
                      ((n = A.createElement(yn, {
                        section: e,
                        event: i,
                        language: s
                      })),
                      (p = !0));
                  else
                    switch (e.section_type) {
                      case "items":
                      case "events":
                      case "links":
                        n = A.createElement(
                          fn,
                          Object(D.a)({ section: e, activeTab: a }, o.props)
                        );
                        break;
                      case "broadcast":
                        i.BHasBroadcastEnabled() &&
                          !u &&
                          ((n = A.createElement(An, {
                            promotionName: l,
                            eventModel: i,
                            bIsPreview: c,
                            language: s,
                            activeTab: a
                          })),
                          (u = !0));
                        break;
                      case "event_description":
                        n = A.createElement(
                          En,
                          Object(D.a)({ section: e }, o.props)
                        );
                        break;
                      case "doors":
                        n = A.createElement(Fa, {
                          strFontFamily: jn(i.jsondata.sale_font, s)
                        });
                        break;
                      case "text_section":
                        n = A.createElement(
                          Sn,
                          Object(D.a)({ section: e }, o.props)
                        );
                        break;
                      case "tabs":
                        var r = d.get(e);
                        m.push({ activeTab: r, elements: [] }),
                          (n = A.createElement(
                            cn,
                            Object(D.a)({ section: e }, o.props, {
                              activeTab: r.GetTab(),
                              onTabSelected: o.OnTabSelected
                            })
                          ));
                        break;
                      case "vo_internal":
                        if (e.internal_section_data)
                          switch (e.internal_section_data.internal_type) {
                            case "subscription_pricing":
                              n = A.createElement(
                                nn,
                                Object(D.a)({ section: e }, o.props)
                              );
                              break;
                            case "event_schedule":
                              n = A.createElement(
                                Qa.b,
                                Object(D.a)({ section: e }, o.props, {
                                  activeTab: a
                                })
                              );
                              break;
                            case "tab_contents":
                              n = A.createElement(
                                ln,
                                Object(D.a)({ section: e }, o.props, {
                                  tab: a.GetTab()
                                })
                              );
                          }
                    }
                  m[m.length - 1].elements.push(
                    A.createElement(
                      S.a,
                      { key: "SaleSectionIndex_" + e.unique_id + "_" + t },
                      n
                    )
                  );
                }
              });
              var t = m.map(function(e, t) {
                return A.createElement(
                  "div",
                  {
                    key: "TabSection_" + t,
                    className: qa.a.SaleSectionTabListContainer
                  },
                  e.elements
                );
              });
              return A.createElement(
                "div",
                { className: qa.a.SaleSectionListContainer },
                t
              );
            }),
            Object(D.c)([v.a], t.prototype, "OnTabSelected", null),
            (t = Object(D.c)([i.observer], t))
          );
        })(A.Component),
        bn = Object(c.g)(_n);
      var gn = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language;
          if (!In(t, n, a.clanSteamID.GetAccountID())) return null;
          var r = A.createElement(
            "div",
            { className: ht.a.SaleSectionHeader, style: Dn(t, a, n) },
            In(t, n, a.clanSteamID.GetAccountID())
          );
          return (
            t.label_link &&
              (r = A.createElement(
                "a",
                {
                  href:
                    (x.c.IN_CLIENT ? "steam://openurl/" : "") +
                    wn(t.label_link),
                  target: x.c.IN_CLIENT ? void 0 : "_blank"
                },
                r
              )),
            r
          );
        },
        yn = function(e) {
          var t = e.section,
            a = e.event;
          e.language;
          return A.createElement(
            "div",
            { className: qa.a.SaleSection, style: kn(t, a) },
            A.createElement(gn, Object(D.a)({}, e)),
            A.createElement(
              "div",
              { className: qa.a.SaleSectionLoginPrompt },
              Object(M.d)("#SalePage_LoginPrompt"),
              A.createElement(
                "button",
                { onClick: Re.a, className: qa.a.LoginButton },
                Object(M.d)("#Login_SignIn")
              )
            )
          );
        },
        En = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview;
          return A.createElement(
            "div",
            {
              className: Object(N.a)(qa.a.SaleSection, ta.a.SaleSectionCtn),
              style: kn(t, a)
            },
            A.createElement(gn, Object(D.a)({}, e)),
            A.createElement(
              "div",
              { className: ht.a.SaleSectionContainer },
              A.createElement(ga.a, {
                text: a.GetDescriptionWithFallback(n),
                partnerEventStore: w.c,
                showErrorInfo: r,
                event: a
              })
            )
          );
        },
        Sn = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview,
            o = "";
          return (
            t.text_section_contents &&
              (o =
                t.text_section_contents[n] || t.text_section_contents[0] || ""),
            A.createElement(
              "div",
              {
                className: Object(N.a)(qa.a.SaleSection, ta.a.SaleSectionCtn),
                style: kn(t, a)
              },
              A.createElement(gn, Object(D.a)({}, e)),
              A.createElement(
                "div",
                { className: ht.a.SaleSectionContainer },
                A.createElement(ga.a, {
                  text: o,
                  partnerEventStore: w.c,
                  showErrorInfo: r,
                  event: a
                })
              )
            )
          );
        },
        fn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bInitialLoadComplete: !1,
                nShowAdditionalRows: 0,
                bIsCapsuleArrayTruncated: !1,
                nHiddenCapsules: 0,
                capsules: [],
                bScreenIsWide: a.IsWideScreen(),
                nMaxCapsulesPerRow: a.GetMaxCapsulesPerRow()
              }),
              e
            );
          }
          var a;
          return (
            Object(D.d)(e, t),
            ((a = e).prototype.componentDidMount = function() {
              window.addEventListener("resize", this.OnResize),
                this.LoadCapsules();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              var t = this;
              (this.props.section == e.section &&
                this.props.event == e.event &&
                this.props.activeTab == e.activeTab &&
                this.props.nSaleDayIndex == e.nSaleDayIndex) ||
                this.setState(
                  { bInitialLoadComplete: !1, nShowAdditionalRows: 0 },
                  function() {
                    return t.LoadCapsules();
                  }
                );
            }),
            (e.prototype.componentWillUnmount = function() {
              window.removeEventListener("resize", this.OnResize);
            }),
            (e.IsWideScreen = function() {
              return 940 <= window.innerWidth;
            }),
            (e.GetMaxCapsulesPerRow = function() {
              return a.IsWideScreen()
                ? 4
                : Math.max(Math.floor(window.innerWidth / 300), 1);
            }),
            (e.prototype.ShowContents = function() {
              this.state.bAwaitingShowContentLoading ||
                this.setState(
                  { bAwaitingShowContentLoading: !0 },
                  this.EnsureAllContentLoaded
                );
            }),
            (e.prototype.EnsureAllContentLoaded = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        4,
                        (t = this.state.nShowAdditionalRows + 4),
                        [4, this.LoadCapsules(t)]
                      );
                    case 1:
                      return (
                        e.sent(),
                        this.setState({
                          nShowAdditionalRows: t,
                          bAwaitingShowContentLoading: !1
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetSectionForSession = function() {
              var e = this.props,
                t = e.section,
                a = e.event;
              if (t.use_random_order && !t.smart_section) {
                var n =
                  "section_" +
                  Object(k.a)(
                    t.unique_id ? t.unique_id.toString() : JSON.stringify(t)
                  ).toString();
                if (window.sessionStorage) {
                  var r = window.sessionStorage.getItem(n);
                  if (r) {
                    var o = JSON.parse(r);
                    if (o.rtime32_last_modified == a.rtime32_last_modified)
                      return o;
                  }
                  Object(ne.f)(t.capsules),
                    Object(ne.f)(t.links),
                    Object(ne.f)(t.events),
                    (t.rtime32_last_modified = a.rtime32_last_modified),
                    window.sessionStorage.setItem(n, JSON.stringify(t));
                }
              }
              return t;
            }),
            (e.prototype.LoadCapsules = function(C) {
              return (
                void 0 === C && (C = 0),
                Object(D.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n,
                    r,
                    o,
                    i,
                    s,
                    l,
                    c,
                    d,
                    p,
                    u,
                    m,
                    h,
                    v,
                    _,
                    b,
                    g,
                    y,
                    E,
                    S,
                    f,
                    O;
                  return Object(D.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t = this.GetSectionForSession()),
                          (a = this.props),
                          (n = a.event),
                          (r = a.promotionName),
                          (o = a.bIsPreview),
                          (i = a.activeTab),
                          (s = a.nSaleDayIndex),
                          "items" !== t.section_type ||
                          "sale_tabhub" == t.smart_section_type
                            ? [3, 10]
                            : [4, I.a.HintLoad()]
                        );
                      case 1:
                        return (
                          e.sent(),
                          (l = void 0),
                          t.smart_section
                            ? ((c = (function(e) {
                                var t = new Set();
                                return (
                                  e
                                    .filter(function(e) {
                                      return "items" == e.section_type;
                                    })
                                    .forEach(function(e) {
                                      return e.capsules.forEach(function(e) {
                                        "game" === e.type && t.add(e.id);
                                      });
                                    }),
                                  Array.from(t)
                                );
                              })(n.GetSaleSections())),
                              [
                                4,
                                (function(u, m, h, v) {
                                  return Object(D.b)(
                                    this,
                                    void 0,
                                    void 0,
                                    function() {
                                      var t, a, n, r, o, i, s, l, c, d, p;
                                      return Object(D.e)(this, function(e) {
                                        switch (e.label) {
                                          case 0:
                                            return (
                                              (t = m.smart_section_type),
                                              (a = m.smart_section_max_apps),
                                              (n = m.smart_section_tag),
                                              (r = m.smart_section_category),
                                              (o = m.random_from_entire_set),
                                              (i = a || 24),
                                              "tag" !== t
                                                ? [3, 2]
                                                : [
                                                    4,
                                                    xt.GetDiscounts({
                                                      tagid: n,
                                                      max_results: i,
                                                      feature: h,
                                                      random_across_set: o
                                                    })
                                                  ]
                                            );
                                          case 1:
                                            return [
                                              2,
                                              e.sent().map(function(e) {
                                                return {
                                                  id: Number(e),
                                                  type: "game"
                                                };
                                              })
                                            ];
                                          case 2:
                                            return "category" !== t
                                              ? [3, 4]
                                              : [
                                                  4,
                                                  xt.GetDiscounts({
                                                    categoryid: r,
                                                    max_results: i,
                                                    feature: h,
                                                    random_across_set: o
                                                  })
                                                ];
                                          case 3:
                                            return [
                                              2,
                                              e.sent().map(function(e) {
                                                return {
                                                  id: Number(e),
                                                  type: "game"
                                                };
                                              })
                                            ];
                                          case 4:
                                            return "top_n" !== t
                                              ? [3, 6]
                                              : [4, xt.GetTopN(h, i)];
                                          case 5:
                                            return [
                                              2,
                                              (s = e.sent()).map(function(e) {
                                                return { id: e, type: "game" };
                                              })
                                            ];
                                          case 6:
                                            return "popular_upcoming" !== t
                                              ? [3, 8]
                                              : [
                                                  4,
                                                  xt.GetWishlistedGamesInSale(
                                                    u,
                                                    "popular_upcoming",
                                                    i
                                                  )
                                                ];
                                          case 7:
                                            return [
                                              2,
                                              (s = e.sent()).map(function(e) {
                                                return { id: e, type: "game" };
                                              })
                                            ];
                                          case 8:
                                            return x.i.logged_in
                                              ? [3, 9]
                                              : [2, []];
                                          case 9:
                                            return !x.i.logged_in ||
                                              ("wishlist" !== t &&
                                                "interactive_recommender" !== t)
                                              ? [3, 10]
                                              : [
                                                  2,
                                                  (s = v.filter(function(e) {
                                                    return (
                                                      !I.a.BOwnsApp(e) &&
                                                      (("wishlist" === t &&
                                                        I.a.BIsGameWishlisted(
                                                          e
                                                        )) ||
                                                        ("interactive_recommender" ===
                                                          t &&
                                                          I.a.BIsGameRecommended(
                                                            e
                                                          )))
                                                    );
                                                  })).map(function(e) {
                                                    return {
                                                      id: e,
                                                      type: "game"
                                                    };
                                                  })
                                                ];
                                          case 10:
                                            if (
                                              !x.i.logged_in ||
                                              ("wishlist_onsale" !== t &&
                                                "dlc_onsale" !== t &&
                                                "dlc_music_onsale" !== t &&
                                                "interactive_recommender_onsale" !==
                                                  t &&
                                                "ir_subscription" !== t &&
                                                "tag_recommender" !== t)
                                            )
                                              return [3, 27];
                                            switch (((s = []), t)) {
                                              case "wishlist_onsale":
                                                return [3, 11];
                                              case "dlc_onsale":
                                                return [3, 14];
                                              case "dlc_music_onsale":
                                                return [3, 17];
                                              case "interactive_recommender_onsale":
                                                return [3, 19];
                                              case "tag_recommender":
                                                return [3, 22];
                                              case "ir_subscription":
                                                return [3, 24];
                                            }
                                            return [3, 26];
                                          case 11:
                                            return Ht.GetHideWishlist()
                                              ? [3, 13]
                                              : [4, xt.GetWishlistOnSale()];
                                          case 12:
                                            (s = e.sent()),
                                              (l = "game"),
                                              (e.label = 13);
                                          case 13:
                                            return [3, 26];
                                          case 14:
                                            return (
                                              (l = "dlc"),
                                              Ht.GetHideDLC()
                                                ? [3, 16]
                                                : [
                                                    4,
                                                    xt.GetDLCForGamesInMyLibraryOnSale()
                                                  ]
                                            );
                                          case 15:
                                            (s = e.sent()), (e.label = 16);
                                          case 16:
                                            return [3, 26];
                                          case 17:
                                            return (
                                              (l = "music"),
                                              [
                                                4,
                                                xt.GetSoundtracksForGamesInMyLibraryOnSale()
                                              ]
                                            );
                                          case 18:
                                            return (s = e.sent()), [3, 26];
                                          case 19:
                                            return (
                                              (l = "game"),
                                              Ht.GetHideIRList()
                                                ? [3, 21]
                                                : [
                                                    4,
                                                    xt.GetInteractiveRecommendationsOnSale()
                                                  ]
                                            );
                                          case 20:
                                            (s = e.sent()), (e.label = 21);
                                          case 21:
                                            return [3, 26];
                                          case 22:
                                            return (
                                              (l = "game"),
                                              [
                                                4,
                                                xt.GetTagRecommendorForThisSale(
                                                  u,
                                                  i
                                                )
                                              ]
                                            );
                                          case 23:
                                            return (s = e.sent()), [3, 26];
                                          case 24:
                                            return (
                                              (l = "game"),
                                              (c = 402931),
                                              [
                                                4,
                                                (d = Ft.Get()).LoadSubscriptionInfo(
                                                  c
                                                )
                                              ]
                                            );
                                          case 25:
                                            return (
                                              e.sent(),
                                              (p = d.GetAllAppForMaster(c)),
                                              (s = Array.from(p).filter(
                                                function(e) {
                                                  return I.a.BIsGameRecommended(
                                                    e
                                                  );
                                                }
                                              )),
                                              [3, 26]
                                            );
                                          case 26:
                                            return [
                                              2,
                                              s.map(function(e) {
                                                return { id: e, type: l };
                                              })
                                            ];
                                          case 27:
                                            return (
                                              console.warn(
                                                "unrecognized type",
                                                t
                                              ),
                                              [2, []]
                                            );
                                        }
                                      });
                                    }
                                  );
                                })(
                                  n,
                                  t,
                                  (function(e) {
                                    return (
                                      (x.c.IN_CLIENT
                                        ? "library-"
                                        : Object(x.e)() + "-") + e
                                    );
                                  })(r),
                                  c
                                )
                              ])
                            : [3, 3]
                        );
                      case 2:
                        return (l = e.sent()), [3, 4];
                      case 3:
                        (l = t.capsules), (e.label = 4);
                      case 4:
                        return (
                          (l = Cn(
                            (l = l.filter(function(e) {
                              return i.ShouldShowCapsule(e);
                            })),
                            s
                          )),
                          (d = this.GetRowsToShow(C)),
                          (p = !1),
                          0 < d &&
                            !t.smart_section &&
                            !t.use_random_order &&
                            !o &&
                            "store" === Object(x.e)() &&
                            ((u = (d + 1) * t.capsules_per_row),
                            l.length > u + 2 * t.capsules_per_row &&
                              ((l = l.slice(0, u)), (p = !0))),
                          [4, Object(Ja.e)(l)]
                        );
                      case 5:
                        return (
                          e.sent(), (m = On(t)) ? [4, Object(Ja.d)(l)] : [3, 8]
                        );
                      case 6:
                        return (
                          (h = e.sent()),
                          0 <
                          (v = h
                            .map(function(e) {
                              var t = Nt.a.GetAppLinkInfo(e);
                              return t && t.full_game_appid;
                            })
                            .filter(function(e) {
                              return !!e;
                            })).length
                            ? [4, Nt.a.LoadAppLinkInfo(v)]
                            : [3, 8]
                        );
                      case 7:
                        e.sent(), (e.label = 8);
                      case 8:
                        return [4, Object(Ja.a)(l, m)];
                      case 9:
                        return (
                          (_ = e.sent()),
                          (b = l.length - _.length),
                          this.setState({
                            nHiddenCapsules: b,
                            capsules: _,
                            bIsCapsuleArrayTruncated: p,
                            bInitialLoadComplete: !0
                          }),
                          [3, 19]
                        );
                      case 10:
                        return "events" !== t.section_type
                          ? [3, 16]
                          : ((g = void 0),
                            t.smart_section &&
                            "recent_events" === t.smart_section_type
                              ? [4, Rt.GetRecentEventsForSalesPage(n)]
                              : [3, 13]);
                      case 11:
                        return (
                          (y = e.sent()),
                          (E = y.map(function(e) {
                            var t = new T.a(e.clan_steamid);
                            return w.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                              t,
                              e.gid,
                              e.nLastModifiedTime
                            );
                          })),
                          [4, Promise.all(E)]
                        );
                      case 12:
                        return (g = e.sent()), [3, 15];
                      case 13:
                        return [
                          4,
                          w.c.LoadBatchPartnerEventsByAnnouncementGID(
                            null,
                            t.events.map(function(e) {
                              return e.announcement_gid;
                            })
                          )
                        ];
                      case 14:
                        (g = e.sent()), (e.label = 15);
                      case 15:
                        return (
                          (S = g.filter(function(e) {
                            return !!e && i.ShouldShowEvent(e);
                          })),
                          Nt.a.LoadAppLinkInfo(
                            S.map(function(e) {
                              return e.appid;
                            })
                          ),
                          this.setState({
                            events: S,
                            bInitialLoadComplete: !0
                          }),
                          [3, 19]
                        );
                      case 16:
                        return "links" !== t.section_type &&
                          "sale_tabhub" !== t.smart_section_type
                          ? [3, 19]
                          : ((f = t.links),
                            "sale_tabhub" !== t.smart_section_type
                              ? [3, 18]
                              : [4, xt.GetSaleTags()]);
                      case 17:
                        (O = e.sent()),
                          (f = O.map(function(e) {
                            return {
                              url: e.url,
                              localized_link_capsule: void 0,
                              materialized_link_capsule: e.square
                            };
                          })),
                          (e.label = 18);
                      case 18:
                        this.setState({ links: f, bInitialLoadComplete: !0 }),
                          (e.label = 19);
                      case 19:
                        return [2];
                    }
                  });
                })
              );
            }),
            (e.prototype.OnResize = function() {
              this.setState({
                bScreenIsWide: a.IsWideScreen(),
                nMaxCapsulesPerRow: a.GetMaxCapsulesPerRow()
              });
            }),
            (e.prototype.GetRowsToShow = function(e) {
              var t = this.props.section;
              if (t.show_as_carousel) return 0;
              var a = Object(it.o)(t);
              return a <= 0 ? 0 : a + e;
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.bIsPreview,
                n = e.language,
                r = this.state,
                o = r.bInitialLoadComplete,
                i = r.bIsCapsuleArrayTruncated,
                s = r.nHiddenCapsules,
                l = r.capsules,
                c = r.links,
                d = r.events,
                p = r.bScreenIsWide,
                u = r.nMaxCapsulesPerRow;
              if (!o) return null;
              var m = this.GetSectionForSession(),
                h = (function(e) {
                  var t = e.event,
                    r = e.section,
                    o = e.capsules,
                    a = e.links,
                    n = e.events,
                    i = e.language,
                    s = e.bShowParentApp,
                    l = t.clanSteamID.GetAccountID(),
                    c = t.BIsLockedToAppOwners();
                  {
                    if (Boolean("events" === r.section_type))
                      return n
                        ? n.map(function(t) {
                            return A.createElement(
                              "div",
                              {
                                key: r.unique_id + "_" + t.GID,
                                style: {},
                                className: na.a.OtherEvents
                              },
                              A.createElement(fa, {
                                event: t,
                                openNewWindow: !0,
                                appInfo: Nt.a.GetAppLinkInfo(t.appid),
                                onClick: function(e) {
                                  Object(pt.a)(t, ye.m(e)),
                                    e.stopPropagation(),
                                    e.preventDefault();
                                }
                              })
                            );
                          })
                        : [];
                    if (
                      Boolean("links" === r.section_type) ||
                      Boolean("sale_tabhub" === r.smart_section_type)
                    )
                      return a
                        ? a.map(function(e, t) {
                            return A.createElement(Aa.b, {
                              key: r.unique_id + "_" + t,
                              link: e,
                              language: i,
                              clanAccountID: l,
                              strClassName: qa.a.LinkCapsule
                            });
                          })
                        : [];
                    if (Boolean("items" === r.section_type))
                      return o
                        ? o.map(function(e, t) {
                            var a =
                                r.adaptive_capsules_per_row ||
                                1 < Math.min(r.capsules_per_row, o.length),
                              n =
                                r.unique_id +
                                "_" +
                                t +
                                "_" +
                                e.type +
                                "_" +
                                e.id;
                            return a
                              ? A.createElement(Aa.e, {
                                  key: n,
                                  capsule: e,
                                  bShowParentApp: s,
                                  bUseSubscriptionLayout: c,
                                  bUseDemoLayout: r.show_as_demos
                                })
                              : A.createElement(
                                  "div",
                                  {
                                    key: n,
                                    className: qa.a.AppSummaryWidgetCtn
                                  },
                                  A.createElement(Aa.f, {
                                    id: e.id,
                                    type: e.type
                                  })
                                );
                          })
                        : [];
                  }
                  return null;
                })({
                  event: t,
                  section: m,
                  capsules: l,
                  links: c,
                  events: d,
                  language: n,
                  bShowParentApp: On(m)
                }).filter(function(e) {
                  return !!e;
                }),
                v = null;
              if (0 < h.length) {
                var _ = Math.min(m.capsules_per_row, u, h.length);
                if (m.show_as_carousel && h.length > _) {
                  var b = void 0;
                  if ("items" === m.section_type)
                    b = [void 0, 454 / 243, 302 / 173, 227 / 137][_ - 1];
                  v = A.createElement(
                    Zt,
                    {
                      hideArrows: !p,
                      visibleElements: _,
                      slideAspectRatio: b,
                      className: "SaleSectionCarousel"
                    },
                    h
                  );
                } else {
                  var g =
                      !m.show_as_carousel &&
                      4 <= u &&
                      m.adaptive_capsules_per_row,
                    y = this.GetRowsToShow(this.state.nShowAdditionalRows);
                  !g &&
                    i &&
                    2 < y &&
                    y * _ > h.length &&
                    (y = Math.max(2, Math.floor(h.length / _)));
                  for (
                    var E = new Array(), S = 0, f = 0;
                    (0 == y || f < y) && S < h.length;
                    f++
                  ) {
                    var O = _;
                    if (g) {
                      var C = [2, 3, 4, 3];
                      O = C[f % C.length];
                    }
                    var T = Math.min(O, h.length - S);
                    E.push(
                      A.createElement(
                        "div",
                        {
                          key: "Row_" + f,
                          className: Object(N.a)(
                            ht.a.SaleSectionContainer,
                            qa.a.SaleSectionContainer
                          ),
                          style: {
                            gridTemplateColumns:
                              1 < O ? "repeat(" + O + ", minmax(0, 1fr))" : null
                          }
                        },
                        h.slice(S, S + T)
                      )
                    ),
                      (S += T);
                  }
                  var w = i || h.length > S;
                  v = A.createElement(
                    A.Fragment,
                    null,
                    E,
                    w &&
                      A.createElement(
                        "div",
                        { className: qa.a.ShowContentsContainer },
                        this.state.bAwaitingShowContentLoading
                          ? A.createElement(q.a, { size: "small" })
                          : A.createElement(
                              "button",
                              {
                                onClick: this.ShowContents,
                                className: qa.a.ShowContentsButton
                              },
                              Object(M.d)("#Sale_ShowMore")
                            )
                      )
                  );
                }
              }
              if (!v) {
                if (!a) return null;
                v = A.createElement(
                  "div",
                  { className: qa.a.preview_placeholder_section },
                  Object(M.d)(
                    m.smart_section
                      ? "#Sale_SmartPlaceHolder"
                      : "#Sale_PlaceHolder"
                  )
                );
              }
              var I = m.label_link
                ? (x.c.IN_CLIENT ? "steam://openurl/" : "") + wn(m.label_link)
                : void 0;
              return A.createElement(
                A.Fragment,
                null,
                A.createElement(
                  "div",
                  {
                    className: Object(N.a)(
                      qa.a.SaleSection,
                      m.show_as_carousel && qa.a.CarouselDisplay,
                      ta.a.SaleSectionCtn
                    ),
                    style: kn(m, t)
                  },
                  A.createElement(gn, Object(D.a)({}, this.props)),
                  0 < s &&
                    A.createElement(
                      "div",
                      {
                        className: qa.a.SaleSectionSubtext,
                        style: Dn(m, t, n)
                      },
                      Object(M.k)(
                        1 == s
                          ? "#Sale_HiddenItem_Single"
                          : "#Sale_HiddenItems",
                        s,
                        A.createElement(
                          "a",
                          {
                            href: x.c.STORE_BASE_URL + "account/preferences",
                            style: {
                              color: m.label_color,
                              filter: "brightness(150%)"
                            }
                          },
                          Object(M.d)("#Sale_StorePreferences")
                        )
                      )
                    ),
                  v,
                  Boolean(I) &&
                    A.createElement(
                      "div",
                      { className: qa.a.SaleViewAll },
                      A.createElement(
                        "a",
                        { href: I, target: x.c.IN_CLIENT ? void 0 : "_blank" },
                        Object(M.d)("#btn_live_streams_all")
                      )
                    )
                )
              );
            }),
            Object(D.c)([v.a], e.prototype, "ShowContents", null),
            Object(D.c)([v.a], e.prototype, "LoadCapsules", null),
            Object(D.c)([v.a], e.prototype, "OnResize", null),
            (e = a = Object(D.c)([i.observer], e))
          );
        })(A.Component);
      function On(e) {
        return (
          "dlc" === e.smart_section_type ||
          "dlc_onsale" === e.smart_section_type ||
          "dlc_music_onsale" === e.smart_section_type
        );
      }
      function Cn(e, t) {
        return e.filter(function(e) {
          return null == e.visibility_index || e.visibility_index == t;
        });
      }
      var Tn = function(e) {
        var t = e.text,
          a = e.url,
          n = e.color,
          r = e.bgcolor;
        return A.createElement(
          "a",
          {
            className: ht.a.BrowseMoreButton,
            href: wn(a),
            target: "_blank",
            style: { backgroundColor: r, color: n }
          },
          t || Object(M.d)("#Sale_BrowseMore_Text_Default")
        );
      };
      function wn(t) {
        var e = "",
          a = "";
        if (t && (0 <= t.indexOf("/") || 0 <= t.indexOf("?")))
          try {
            var n = new URL(t);
            (e = n.pathname.substring(1)),
              (a = n.search),
              x.c.SNR &&
                (a += 0 < a.length ? "&snr=" + x.c.SNR : "?snr=" + x.c.SNR);
          } catch (e) {
            console.warn(t, e);
          }
        return x.c.STORE_BASE_URL + e + a;
      }
      function In(e, t, a, n) {
        var r =
            e.localized_label[t] ||
            e.localized_label[0] ||
            ("#Sale_default_label" === e.default_label
              ? ""
              : Object(M.d)(e.default_label)),
          o =
            e.localized_label_image &&
            (e.localized_label_image[t] || e.localized_label_image[0]);
        if (n || !o) return r;
        var i = x.c.MEDIA_CDN_COMMUNITY_URL + "images/clans/" + a + "/" + o;
        return A.createElement("img", { loading: "lazy", src: i, alt: r });
      }
      function kn(e, t) {
        var a = "";
        e.background_image &&
          (a +=
            "url(" +
            te.a.GenerateArtworkURLFromHashAndExtensions(
              t.clanSteamID,
              e.background_image
            ) +
            "),");
        return {
          background:
            a +
            "linear-gradient(0deg, " +
            (e.background_gradient_bottom || "transparent") +
            " 0%, " +
            (e.background_gradient_top || "transparent") +
            " 100%)"
        };
      }
      function Dn(e, t, a) {
        return {
          fontFamily: jn(t.jsondata.sale_font, a),
          fontWeight: t.jsondata.sale_font_weight,
          fontSize: t.jsondata.sale_section_font_size,
          textTransform: t.jsondata.sale_section_disable_capitalize
            ? "initial"
            : null,
          color: e.label_color,
          textAlign: t.GetSaleLabelAlign()
        };
      }
      function jn(e, t) {
        return 12 === t
          ? e.replace("Jolly Lodger", "New Rocker")
          : 23 === t || 19 === t || 24 === t || 18 === t || 8 === t || 26 === t
          ? e.replace("Sigmar One", "Play")
          : 6 === t
          ? e.replace("Sigmar One", "Noto Serif SC")
          : 7 === t
          ? e.replace("Sigmar One", "Noto Serif TC")
          : 10 === t
          ? e.replace("Sigmar One", "M PLUS Rounded 1c")
          : 4 === t
          ? e.replace("Sigmar One", "Black Han Sans")
          : 9 === t
          ? e.replace("Sigmar One", "Prompt")
          : e;
      }
      var An = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.OnEnter = function() {
              this.state.bOnceVisible || this.setState({ bOnceVisible: !0 });
            }),
            (e.prototype.render = function() {
              var t = this;
              return A.createElement(
                S.a,
                null,
                A.createElement(
                  A.Suspense,
                  { fallback: A.createElement("div", null) },
                  A.createElement(
                    Q.a,
                    { onEnter: this.OnEnter },
                    A.createElement(
                      "div",
                      { className: qa.a.SaleBroadcastSection },
                      Boolean(this.state.bOnceVisible) &&
                        A.createElement(pn, {
                          promotionName: this.props.promotionName,
                          clanid: Number(x.b.CLANACCOUNTID),
                          event: this.props.eventModel,
                          bIsPreview: this.props.bIsPreview,
                          language: this.props.language,
                          fnFilterStreams: function(e) {
                            return t.props.activeTab.ShouldShowOnTab(
                              "game",
                              e.appid
                            );
                          }
                        }),
                      Boolean(!this.state.bOnceVisible) &&
                        A.createElement("span", null, Object(M.d)("#Loading"))
                    )
                  )
                )
              );
            }),
            Object(D.c)([v.a], e.prototype, "OnEnter", null),
            e
          );
        })(A.Component),
        Ln = Object(i.observer)(function(e) {
          var t = Mt.b.GetPlayReadyStream(),
            a = t && t.appid;
          b.a.EnsureStoreCapsuleInfoLoaded(a);
          var n = b.a.GetStoreCapsuleInfo(a),
            r = n && n.GetAppStoreData(),
            o = r && r.title;
          if (!o) return null;
          var i =
              "https://steamcdn-a.akamaihd.net/steamcommunity/public/" +
              (r.cover_image_asset_url
                ? "images/apps/" + a + "/" + r.cover_image_asset_url + ".jpg"
                : "images/apps/1195650/246e7e2a24c0aa965e505ac510d4e8e952f9a88a.jpg"),
            s = function() {
              return window.open(r.capsule_link, "_blank");
            };
          return A.createElement(
            "div",
            { className: qa.a.SalePageBroadcastContextHover },
            A.createElement("img", {
              src: i,
              className: qa.a.AlbumCoverImage,
              onClick: s
            }),
            A.createElement(
              "div",
              { className: qa.a.AlbumTitle, onClick: s },
              " ",
              o,
              " "
            )
          );
        }),
        Gn = a("BVKn"),
        Nn = Gn.a.Get(),
        Mn = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.state = {
                lookupGID: t.props.event_gid
                  ? t.props.event_gid
                  : Nn.GetClanEventGIDFromAnnouncementGID(
                      t.props.announcement_gid
                    )
              }),
              t
            );
          }
          return (
            Object(D.d)(e, a),
            (e.prototype.LoadEvent = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t,
                  a = this;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !this.props.event_gid ||
                        Nn.GetClanEventModel(this.props.event_gid)
                      )
                        return [3, 5];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          Nn.LoadPartnerEventGeneric(
                            this.props.clansteamid,
                            this.props.appid,
                            this.props.event_gid,
                            void 0,
                            0
                          )
                        ]
                      );
                    case 2:
                      return (
                        (t = e.sent()),
                        this.setState({ lookupGID: t.GID }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        e.sent(),
                        Nn.LoadPartnerEventGeneric(
                          this.props.clansteamid,
                          this.props.appid,
                          void 0,
                          this.props.event_gid,
                          0
                        )
                          .then(function(e) {
                            return a.setState({ lookupGID: e.GID });
                          })
                          .catch(function(e) {
                            return console.log(
                              "StoreEventDetailView failed " +
                                Object(Me.a)(e).strErrorMsg
                            );
                          }),
                        [3, 4]
                      );
                    case 4:
                      return [3, 6];
                    case 5:
                      this.props.announcement_gid &&
                        !Nn.GetClanEventGIDFromAnnouncementGID(
                          this.props.announcement_gid
                        ) &&
                        Nn.LoadPartnerEventGeneric(
                          this.props.clansteamid,
                          this.props.appid,
                          void 0,
                          this.props.announcement_gid,
                          0
                        )
                          .then(function(e) {
                            return a.setState({ lookupGID: e.GID });
                          })
                          .catch(function(e) {
                            return console.log(
                              "StoreEventDetailView failed " +
                                Object(Me.a)(e).strErrorMsg
                            );
                          }),
                        (e.label = 6);
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.componentDidMount = function() {
              this.LoadEvent(), this.UpdateDocumentUI();
            }),
            (e.prototype.componentDidUpdate = function() {
              this.UpdateDocumentUI();
            }),
            (e.prototype.UpdateDocumentUI = function() {
              var e,
                t =
                  this.state.lookupGID &&
                  Nn.GetClanEventModel(this.state.lookupGID);
              if (t && t.appid) {
                var a = b.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData();
                e = a && a.title;
              } else if (t && t.clanSteamID) {
                var n = g.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                );
                e = n && n.group_name;
              }
              var r = t && t.GetNameWithFallback(Object(ee.d)(x.c.LANGUAGE));
              if (t && e && r) {
                var o = Object(M.d)(
                  "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                  e,
                  r
                );
                document.title != o && (document.title = o);
              }
              document.body.classList.contains("events_hub") &&
                document.body.classList.remove("events_hub");
            }),
            (e.prototype.InfiniteScrollCloseModal = function() {
              var e = Nn.GetClanEventModel(this.state.lookupGID);
              e &&
                (e.appid
                  ? this.props.history.push("/newshub/app/" + e.appid)
                  : this.props.history.push(
                      "/newshub/group/" + e.clanSteamID.GetAccountID()
                    ));
            }),
            (e.prototype.render = function() {
              var e = Nn.GetClanEventModel(this.state.lookupGID);
              return e
                ? this.props.bInfiniteScroll
                  ? l.a.createElement(
                      S.a,
                      null,
                      l.a.createElement(Be, {
                        classname: F.a.StoreHeaderAdjust,
                        appid: e.appid,
                        trackingLocation: 0,
                        announcementGID: e.GetAnnouncementGID(),
                        partnerEventStore: Nn,
                        eventModel: e,
                        showAppHeader: !0,
                        closeModal: this.InfiniteScrollCloseModal
                      })
                    )
                  : l.a.createElement(
                      S.a,
                      null,
                      l.a.createElement(Ga, {
                        lang: Object(ee.d)(x.c.LANGUAGE),
                        partnerEventStore: Nn,
                        event: e,
                        adminPanel: l.a.createElement($t, {
                          eventModel: e,
                          partnerEventStore: Nn
                        }),
                        otherEventRow: l.a.createElement(Sa, {
                          appid: e.appid,
                          eventModel: e,
                          partnerEventStore: Nn
                        })
                      })
                    )
                : l.a.createElement(q.a, null);
            }),
            Object(D.c)([v.a], e.prototype, "InfiniteScrollCloseModal", null),
            (e = Object(D.c)([i.observer], e))
          );
        })(l.a.Component),
        xn = Object(c.g)(Mn),
        Bn = a("WBba"),
        Pn = a("r+ba"),
        Rn = a("apHd"),
        Hn = (function(n) {
          function e(e) {
            var a = n.call(this, e) || this;
            a.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: []
            };
            var t = Object(Rn.a)("EventWebRowEmbed");
            return (
              a.ValidateStoreDefault(t) &&
                ((a.state.bPreLoaded = t.bPreLoaded),
                (a.state.announcementGIDList = t.announcementGIDList),
                (a.state.events = []),
                a.state.announcementGIDList.forEach(function(e) {
                  var t = w.c.GetClanEventFromAnnouncementGID(e);
                  t && a.state.events.push(t);
                })),
              a
            );
          }
          return (
            Object(D.d)(e, n),
            (e.prototype.componentDidMount = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o,
                  i,
                  s,
                  l = this;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props),
                        (a = t.appid),
                        (n = t.event_customization),
                        (r = t.partnerEventStore),
                        (o = t.trackingLocation),
                        this.state.bPreLoaded
                          ? [3, 2]
                          : [
                              4,
                              r.LoadAdjacentPartnerEvents(
                                null,
                                null,
                                a,
                                0,
                                2,
                                n
                              )
                            ]
                      );
                    case 1:
                      (i = e.sent()),
                        this.setState({ events: i }),
                        o &&
                          i &&
                          0 < i.length &&
                          ((s = j.a.Get().GetTracker()),
                          this.state.events
                            .filter(function(e) {
                              return e.BIsPartnerEvent();
                            })
                            .forEach(function(e) {
                              return s.MarkEventShown(
                                e.GID,
                                e.clanSteamID.GetAccountID(),
                                o
                              );
                            }),
                          s.Flush()),
                        (e.label = 2);
                    case 2:
                      return (
                        (window.fnPartnerEvent_ShowInfiniteScroll = function(
                          e,
                          t
                        ) {
                          console.log("appid: " + e + " gid: " + t),
                            l.setState({
                              bShowModal: !0,
                              announcementGID: t,
                              modalInitialEvent: void 0
                            });
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              var t = e;
              return (
                !(!t || "object" != typeof t) &&
                (void 0 !== t.bPreLoaded &&
                  "boolean" == typeof t.bPreLoaded &&
                  Array.isArray(t.announcementGIDList))
              );
            }),
            (e.prototype.ShowModal = function(e) {
              var t = this.props.trackingLocation;
              this.setState({
                bShowModal: !0,
                modalInitialEvent: e,
                announcementGID: void 0
              });
              var a = j.a.Get().GetTracker();
              e.BIsPartnerEvent() &&
                a.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
                a.Flush();
            }),
            (e.prototype.CloseModal = function() {
              this.setState({ bShowModal: !1, modalInitialEvent: null });
            }),
            (e.prototype.render = function() {
              var a = this,
                n = this.state.events;
              if (!n)
                return l.a.createElement(
                  "div",
                  { className: Ge.a.FlexCenter },
                  l.a.createElement(q.a, { size: "medium", position: "center" })
                );
              if (n && 0 === n.length) return null;
              var e = window.screen.width <= 500 ? 1 : 2,
                t = this.props,
                r = t.partnerEventStore,
                o = t.strClassName,
                i = t.appid,
                s = t.trackingLocation;
              return l.a.createElement(
                "div",
                { className: o },
                this.state.bShowModal &&
                  l.a.createElement(Be, {
                    classname: Pn.StoreHeaderAdjust,
                    appid: i,
                    trackingLocation: s,
                    announcementGID: this.state.announcementGID
                      ? this.state.announcementGID
                      : this.state.modalInitialEvent.AnnouncementGID,
                    partnerEventStore: r,
                    eventModel: this.state.modalInitialEvent,
                    closeModal: this.CloseModal
                  }),
                l.a.createElement(
                  "h2",
                  null,
                  Object(M.d)("#EventBrowse_RecentEvents")
                ),
                l.a.createElement(
                  "div",
                  { className: Pn.SectionButtonCtn },
                  l.a.createElement(
                    "div",
                    {
                      className: Pn.SectionButton,
                      onClick: function() {
                        return a.ShowModal(n[0]);
                      }
                    },
                    Object(M.d)("#EventBrowse_MoreEventsBtn")
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: Pn.EventsSummariesCtn },
                  n.slice(0, e).map(function(t) {
                    var e =
                      1 === n.length && 500 < window.screen.width ? Oa : fa;
                    return l.a.createElement(e, {
                      key: t.GID,
                      event: t,
                      onClick: function(e) {
                        a.ShowModal(t), e.stopPropagation(), e.preventDefault();
                      }
                    });
                  })
                )
              );
            }),
            Object(D.c)([v.a], e.prototype, "ShowModal", null),
            Object(D.c)([v.a], e.prototype, "CloseModal", null),
            e
          );
        })(l.a.Component),
        Fn = (function(r) {
          function e(e) {
            var t = r.call(this, e) || this;
            t.m_rtimeOldest = 0;
            var a = L.a.GetTimeNowWithOverrideAsDate(),
              n = new Date(a.setUTCHours(0, 0, 0, 0) - 15552e6);
            return (t.m_rtimeOldest = Math.floor(n.getTime() / 1e3)), t;
          }
          return (
            Object(D.d)(e, r),
            (e.prototype.render = function() {
              var e = this.props.appid;
              return l.a.createElement(Hn, {
                appid: e,
                partnerEventStore: Gn.a.Get(),
                event_customization: {
                  rtime_oldestevent: this.m_rtimeOldest,
                  exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
                  exclude_event_types: [34]
                },
                strClassName: "early_access_announcements",
                trackingLocation: 3
              });
            }),
            e
          );
        })(l.a.Component);
      a.d(t, "EventModerationLanding", function() {
        return Wn;
      }),
        a.d(t, "EventBackfillLanding", function() {
          return Vn;
        }),
        a.d(t, "EventSaleDisplay", function() {
          return Zn;
        }),
        a.d(t, "EventCalendar", function() {
          return Yn;
        }),
        a.d(t, "EventDetailView", function() {
          return qn;
        }),
        a.d(t, "Events", function() {
          return Jn;
        }),
        Ne.a.Init(new Bn.a(x.c.WEBAPI_BASE_URL)),
        w.c.Init();
      var zn = function(e) {
        var t = e.children,
          a = Object(A.useState)(j.a.IsInitialized()),
          n = a[0],
          r = a[1];
        return n
          ? l.a.createElement(l.a.Fragment, null, t)
          : (j.a.InitGlobal().then(function() {
              return r(!0);
            }),
            null);
      };
      function Un(t) {
        return function(e) {
          return l.a.createElement(zn, null, l.a.createElement(t, e));
        };
      }
      var Wn = Un(St),
        Vn = Un(Gt),
        Zn = Un(un),
        Yn = Un(Je),
        qn = Un(xn),
        Jn = Un(Fn);
    },
    ZCZY: function(e, t, a) {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_3jswb" };
    },
    bUNj: function(e, t, a) {},
    dgee: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
    },
    dsx8: function(e, t, a) {
      e.exports = {
        StoreHeaderAdjust: "events_StoreHeaderAdjust_1MJYc",
        SectionButtonCtn: "events_SectionButtonCtn_xzUHb",
        SectionButton: "events_SectionButton_3I3q-",
        EventsSummariesCtn: "events_EventsSummariesCtn_1MHN3"
      };
    },
    go9d: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtNJREFUeNrsmk1rE0EYgHe19ZBIY2kj4qUQVGjxAz2J4gcVvfmBP8FI8eZF8OJNL4oFPYrGX1CK4lEMiChe/aCClNBeRGxLTTE5GDU+Y2bDJG5rL5lZ950XnsxkE5h9n8zszkw2bDabgeTYEAgPL8AL8AK8AC/AC/AC5EafegnDcM0vMVvMUOyA7bBNswVymgHYDOp7m/SxUNczRlvZdZ5XDX7oeh2+q9OAqq6rY99gRR9TfIXPmk8wS171f+QVhH9eYgRw/BhFEQ7q5MP/7MdVwmbhNZTI8fm6BPBe/XoP4XzKevs0XCDX6qoCdPIvYE9Kh/xbOBpJULl3XwQfpDh5FXt1ju1o9wDKQ7x/KeTif5icX3X3gKKgu18xbh4wLkjAeMcQIPLwRdgcaCssRD1gTOAkcMwcAgWBAgqmgBGBAkZMAfkeN1ZPoIC8KWCox409hePwJkEChmwKCPRi5ABMJOSO0yFg2EaLSPgF96nuhFt6aesqhk0BgzZbRsIKXKU6Co8dCRg0BWRdnAESKnCO6gl4Z7n5rCmg3+VgREKZYj9cUrMzS832mwJyrq9ISPgJ9/T1YRIaPW4y170YSkSozQq4QnU3POl1e4ndFUbCRzhD9RS8FyfAVvQl9cRYpu+iuA2nRQnQG7PX4LKNu1MkoOr6TkDiGykuwnULi7Mo57aAhuPk1RbVncDujnTDvAjWHCVegEdUnwX2t+NrpoBly4kPwE2qH+Cso463bA6BRUuJK+FqS/pG0NqUdBmLpoAlC8mrP1vvwr6E3HCWbAo46bCrrykgugb0egWWSeBca8EUMC9wFjxvCqgIFFAxBcwIFDDTFsCyU42HOUHJz+mcO5bDZUECynH7ASVBAkp/CVBPTFBMCUh+Sufayts/JGWE/uBI0HqkLG0xbSYf2wNi5u7yHpRcZSGT7kdlJYd/XN4L8AK8AC/AC/ACvACx8VuAAQDxke5GRJ5P8AAAAABJRU5ErkJggg==";
    },
    hmtA: function(e, t, a) {},
    i6tc: function(e, t, a) {
      e.exports = {
        TileContainer: "eventcalendartile_TileContainer_1E3An",
        LiveText: "eventcalendartile_LiveText_RNDf0",
        LiveNow: "eventcalendartile_LiveNow_EVDkY",
        FutureDateText: "eventcalendartile_FutureDateText_2xdhM",
        PastDateText: "eventcalendartile_PastDateText_4-fqV",
        SourceRecommended: "eventcalendartile_SourceRecommended_1yaRL",
        DateAndSourceLine: "eventcalendartile_DateAndSourceLine_2xxMB",
        SourceList: "eventcalendartile_SourceList_3BIx7",
        Source: "eventcalendartile_Source_2lYFq",
        EventTypeAndDateCtn: "eventcalendartile_EventTypeAndDateCtn_sUBHF",
        SmallAppName: "eventcalendartile_SmallAppName_1-Jl_",
        TileTextCategoryType: "eventcalendartile_TileTextCategoryType_1LkWX",
        EventType28: "eventcalendartile_EventType28_1qGfE",
        EventType11: "eventcalendartile_EventType11_2Gv13",
        EventType35: "eventcalendartile_EventType35_2wHiB",
        EventType13: "eventcalendartile_EventType13_2D0ZN",
        EventType14: "eventcalendartile_EventType14_2mVdt",
        EventType15: "eventcalendartile_EventType15_2Xke6",
        Tile: "eventcalendartile_Tile_3xvUZ",
        MainContentContainer: "eventcalendartile_MainContentContainer_2pq2v",
        CoverImageCtn: "eventcalendartile_CoverImageCtn_3HF9t",
        EventCapsuleCtn: "eventcalendartile_EventCapsuleCtn_27kWH",
        YoutubePreviewImage: "eventcalendartile_YoutubePreviewImage_1UgZv",
        TileImage: "eventcalendartile_TileImage_d8bPi",
        TileTextContainer: "eventcalendartile_TileTextContainer_3IQK4",
        EventType12: "eventcalendartile_EventType12_2X_hM",
        EventName: "eventcalendartile_EventName_1M8-P",
        EventSummary: "eventcalendartile_EventSummary_1yvEg",
        EventSubTitle: "eventcalendartile_EventSubTitle_1JjUp",
        EventTitleCtn: "eventcalendartile_EventTitleCtn_1h5cJ",
        TileTextHeader: "eventcalendartile_TileTextHeader_3-0KO",
        GameCapsuleCtn: "eventcalendartile_GameCapsuleCtn_3HJFi",
        AppBannerLogo: "eventcalendartile_AppBannerLogo_u8z1m",
        PatchIconCtn: "eventcalendartile_PatchIconCtn_Fm9_5",
        "Tag-steam_award_vote_request":
          "eventcalendartile_Tag-steam_award_vote_request_tAmZA",
        FallbackImage: "eventcalendartile_FallbackImage_9rv9P",
        LiveBroadcastPreview: "eventcalendartile_LiveBroadcastPreview_4UYuS",
        TileBackgroundImage: "eventcalendartile_TileBackgroundImage_gGujG",
        TileGameCapsule: "eventcalendartile_TileGameCapsule_2AXYk",
        EnableHovers: "eventcalendartile_EnableHovers_2BniJ",
        AppIcon: "eventcalendartile_AppIcon_3gwk6",
        TileTextAppName: "eventcalendartile_TileTextAppName_71phF",
        TileCoverImagePlayable:
          "eventcalendartile_TileCoverImagePlayable_2eoFk",
        TileCoverLiveIcon: "eventcalendartile_TileCoverLiveIcon__dmbj",
        ReminderContainer: "eventcalendartile_ReminderContainer_1_taB",
        EventSummaryDefault: "eventcalendartile_EventSummaryDefault_2g3Jj",
        Vote_NotLoggedIn: "eventcalendartile_Vote_NotLoggedIn_17oqR",
        Vote_LimitedUser: "eventcalendartile_Vote_LimitedUser_2FlPo",
        Vote_Positive: "eventcalendartile_Vote_Positive_ysX-k",
        RateIcon: "eventcalendartile_RateIcon_2se4H",
        Vote_Negative: "eventcalendartile_Vote_Negative_3LqNu",
        Vote_Ready: "eventcalendartile_Vote_Ready_3issE",
        Footer: "eventcalendartile_Footer_1tdf1",
        FooterRightSide: "eventcalendartile_FooterRightSide_1Hhqg",
        Options: "eventcalendartile_Options_3nZg0",
        TileViewerCount: "eventcalendartile_TileViewerCount_pg-a3",
        FooterStat: "eventcalendartile_FooterStat_3_86J",
        CommentIcon: "eventcalendartile_CommentIcon_Wn7qA",
        CommentIconCtn: "eventcalendartile_CommentIconCtn_PR8xM",
        MiniMode: "eventcalendartile_MiniMode_3GAeK",
        TileVideoIcon: "eventcalendartile_TileVideoIcon_aK0jl",
        DateAndTime: "eventcalendartile_DateAndTime_1gEM9",
        HasVideo: "eventcalendartile_HasVideo_qbgBA",
        VideoPlayerReady: "eventcalendartile_VideoPlayerReady_1onQj"
      };
    },
    qP7j: function(e, t, a) {
      e.exports = {
        ErrorStyles: "partnereventdialog_ErrorStyles_2Sg7W",
        ErrorStylesWithIcon: "partnereventdialog_ErrorStylesWithIcon_Lc2PK",
        ErrorIconLayout: "partnereventdialog_ErrorIconLayout_42__6",
        ErrorStylesBackground: "partnereventdialog_ErrorStylesBackground_3fVv6",
        WarningStyles: "partnereventdialog_WarningStyles_3gxgE",
        WarningStylesWithIcon: "partnereventdialog_WarningStylesWithIcon_1S_uS",
        WarningIconLayout: "partnereventdialog_WarningIconLayout_2jM80",
        WarningStylesBackground:
          "partnereventdialog_WarningStylesBackground_UYrHs",
        Padding: "partnereventdialog_Padding_36hma",
        NotTooWideModal: "partnereventdialog_NotTooWideModal_UfQcb"
      };
    },
    "r+ba": function(e, t, a) {
      e.exports = {
        Container: "partnereventwebrowembed_Container_2Jd3M",
        StoreHeaderAdjust: "partnereventwebrowembed_StoreHeaderAdjust_3YyCp",
        SectionButtonCtn: "partnereventwebrowembed_SectionButtonCtn_1HP0y",
        SectionButton: "partnereventwebrowembed_SectionButton_3n8sw",
        EventsSummariesCtn: "partnereventwebrowembed_EventsSummariesCtn_1snIw"
      };
    },
    sGzE: function(e, t, a) {
      e.exports = {
        StatsTitle: "partnereventstats_StatsTitle_3YLaB",
        StatsCtnTitle: "partnereventstats_StatsCtnTitle_1LlRF",
        SmallStatsMode: "partnereventstats_SmallStatsMode_2A2-p",
        StatsCtn: "partnereventstats_StatsCtn_hWCs4",
        StatsLeftSection: "partnereventstats_StatsLeftSection_3L-uh",
        StatsRightSection: "partnereventstats_StatsRightSection_1yibD"
      };
    },
    vNkc: function(e, t, a) {
      e.exports = { Error: "eventbackfill_Error_1eWgI" };
    }
  }
]);

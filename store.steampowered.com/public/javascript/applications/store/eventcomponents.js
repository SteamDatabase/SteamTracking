/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
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
        var r, o, i, l, e, s, c, d;
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
              var l = (i / 40) * a;
              new A.a.Shape({
                addTo: e.addTo,
                path: o,
                translate: { x: Math.cos(l) * n, z: Math.sin(l) * n },
                rotate: { y: l + a / 4 },
                fill: !0,
                stroke: 2,
                color: t.deep
              });
            }
            var s = -2.5,
              c = 2.5,
              d = {
                grill: new A.a.Vector({ x: -5, y: -1, z: c }),
                hood: new A.a.Vector({ x: -4, y: s, z: c }),
                wipers: new A.a.Vector({ x: -2, y: s, z: c }),
                windshield: new A.a.Vector({ x: -1, y: -4.5, z: 1.5 }),
                roof: new A.a.Vector({ x: 2, y: -4.5, z: 1.5 }),
                trunk: new A.a.Vector({ x: 4, y: s, z: c }),
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
                translate: { z: n, y: -6 },
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
              l = { x: 1, y: 1, z: -1 },
              s = new A.a.Anchor({
                addTo: o,
                scale: new A.a.Vector({ x: 1, y: 1, z: 1.25 })
              });
            new A.a.Shape({
              addTo: s,
              path: [{ x: -1, y: 1 }, i, l],
              translate: { x: -0.96, y: -1.5, z: 0 },
              stroke: 0.66,
              fill: !0,
              color: a.deep
            }).copy({ path: [i, { x: 1, y: 1 }, l] }),
              s.copyGraph({ scale: s.scale.copy().multiply({ x: -1 }) }),
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
              var l = n / 74,
                s = l * o,
                c = new A.a.Shape({
                  addTo: r,
                  path: [{}, { x: ((54 * t) / 74) * 0.8 }],
                  stroke: 22 + 8 * -Math.cos((t / 8) * (3 + 5 * l)),
                  translate: {
                    x: 54 * Math.sin(s),
                    z: 54 * Math.cos(s),
                    y: 6 * Math.sin(4 * s)
                  },
                  rotate: { y: l * -o },
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
              l = ZdogSpookyHouse.color,
              s = [],
              c = [];
            function t(e) {
              s.push(e);
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
                backface: l.deep
              },
              o = Object.assign({ color: l.light }, r),
              d = new A.a.Group({ addTo: n, translate: { z: 24 } });
            a(new A.a.Rect(Object.assign({}, o, { addTo: d }))),
              new A.a.Rect({
                addTo: d,
                width: 6,
                height: 8,
                translate: { y: 2 },
                color: l.dark,
                fill: !0,
                stroke: !1
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({ translate: { y: -12, z: 24 } }, o),
                pane: l.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({ translate: { y: -24, z: 24 } }, o),
                pane: l.highlight,
                wallRectCallback: a
              });
            var p = Object.assign(
                { color: l.medium, rotate: { y: -i / 4 } },
                r
              ),
              u = Object.assign({ color: l.medium, rotate: { y: i / 4 } }, r),
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
                color: l.dark
              });
            _.copy({ rotate: { y: i / 4 }, translate: { x: -8 } }),
              _.copy({
                rotate: { y: i / 2 },
                translate: { z: -8 },
                color: l.deep
              }),
              _.copy({
                rotate: { y: (3 * i) / 4 },
                translate: { x: 8 },
                color: l.deep
              }),
              new A.a.Rect({
                addTo: v,
                width: 8,
                height: 8,
                rotate: { x: -i / 4 },
                translate: { y: -6 },
                stroke: e.stroke,
                fill: !0,
                color: l.dark
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, o, { translate: { x: 12, z: 12 } }),
                pane: l.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, o, {
                  translate: { x: 12, y: -12, z: 12 }
                }),
                pane: l.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, o, { translate: { x: -12, z: 12 } }),
                pane: l.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, o, {
                  translate: { x: -12, y: -12, z: 12 }
                }),
                pane: l.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, p, { translate: { x: 18, z: 6 } }),
                pane: l.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, p, {
                  translate: { x: 18, y: -12, z: 6 }
                }),
                pane: l.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, p, { translate: { x: 18, z: -6 } }),
                pane: l.dark,
                wallRectCallback: t
              }),
              t(m.copy({ width: 6, translate: { x: 18, y: -12, z: -3 } }));
            var b = m.copy({
                width: 6,
                translate: { x: 15, z: -12 },
                rotate: { y: i / 2 },
                color: l.dark
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
                color: l.dark,
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
              color: l.dark
            }),
              g.copyGraph({ translate: { x: -3, y: -6, z: -12 } }),
              g.copyGraph({ translate: { x: -13, y: -6, z: -12 } }),
              b.copy({
                width: 36,
                height: 3,
                translate: { x: 0, y: 4.5, z: -12 },
                color: l.dark
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, u, { translate: { x: -18, z: -6 } }),
                pane: l.dark,
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
                pane: l.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, u, {
                  translate: { x: -24, y: -12, z: 6 }
                }),
                pane: l.highlight,
                wallRectCallback: t
              }),
              new A.a.Rect({
                addTo: n,
                width: 12,
                height: 6,
                translate: { x: -21, y: -6, z: 6 },
                stroke: e.stroke,
                fill: !0,
                color: l.deep,
                rotate: { x: i / 4, z: i / 4 }
              });
            var y = b.copy({
              width: 6,
              rotate: null,
              translate: { x: -21, y: -12, z: 12 },
              color: l.light
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
                color: l.medium
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
                color: l.medium
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
                color: l.deep
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
              color: l.medium,
              backface: l.deep,
              rotate: { x: i / 4 },
              stroke: !1
            }),
              new A.a.Cone({
                addTo: E,
                diameter: 16,
                length: 16,
                translate: { y: -12 },
                rotate: { x: i / 4 },
                color: l.deep,
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
                color: l.dark,
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
              color: l.dark
            });
            f.copy({
              scale: { x: -1 },
              translate: { x: 20, y: -24, z: 6 },
              rotate: { y: -i / 4 },
              color: l.deep
            }),
              f.copy({
                scale: { x: -1 },
                translate: { x: -18, y: -24, z: 14 }
              }),
              f.copy({
                translate: { x: -26, y: -24, z: 6 },
                rotate: { y: i / 4 }
              });
            var C = new A.a.Shape({
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
              color: l.dark
            });
            C.copy({
              rotate: { y: -i / 4 },
              translate: { x: 20, y: -24, z: -3 },
              color: l.deep
            }),
              C.copy({
                rotate: { y: -i / 2 },
                translate: { x: 9, y: -24, z: -14 },
                color: l.deep
              }),
              C.copy({
                rotate: { y: -i / 2 },
                translate: { x: 3, y: -24, z: -14 },
                color: l.deep
              });
            var O = new A.a.Anchor({ addTo: n, translate: { y: -30 } }),
              w = new A.a.Rect({
                addTo: O,
                width: 12,
                height: 10,
                rotate: { x: -i / 4 },
                translate: { z: 5 },
                stroke: e.stroke,
                fill: !0,
                color: l.dark
              });
            w.copy({ width: 10, translate: { x: 11, z: 5 } }),
              w.copy({ width: 10, translate: { x: 11, z: -5 } }),
              w.copy({ translate: { x: -12, z: 5 } }),
              w.copy({ width: 4, translate: { x: -20, z: 5 } }),
              w.copy({ width: 6, translate: { x: 3, z: -5 } }),
              w.copy({ height: 6, translate: { x: -6, z: -3 } });
            var T = new A.a.Anchor({ addTo: n, translate: { y: 2 } }),
              I = new A.a.Anchor({ addTo: T, translate: { x: 9, z: 30 } });
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
              color: l.deep
            });
            var k = new A.a.Rect({
              addTo: I,
              width: 6,
              height: 10,
              translate: { y: -1 },
              stroke: 1,
              color: l.deep
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
              color: l.dark
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
                color: l.deep
              }),
              j.copy({
                path: [
                  { x: 24, y: 2, z: -18 },
                  { x: 18, y: 0, z: -18 },
                  { x: 18, y: 0, z: -30 },
                  { x: 24, y: 2, z: -30 }
                ],
                color: l.deep
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
                color: l.dark
              }),
              {
                shape: n,
                animate: function(e, t) {
                  var a = Math.abs(Math.round((t.y / i) * 360) - 180),
                    n = a <= 50 || (60 <= a && a <= 65),
                    r = n ? l.highlight : l.deep,
                    o = n || l.deep;
                  s.forEach(function(e) {
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
            var l = new A.a.Shape({
              addTo: i,
              path: n,
              scale: 3,
              translate: { x: -4.5, z: -2 },
              color: o,
              stroke: 1.5
            });
            l.copy({ translate: { x: 4.5, z: -2 } }),
              l.copy({ translate: { x: 4.5, z: 2 } }),
              l.copy({ translate: { x: -4.5, z: 2 } });
            var s = new A.a.Anchor({ addTo: i, translate: { y: -8 } }),
              c = new A.a.Group({ addTo: s, rotate: { y: a / 2 } }),
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
                addTo: s,
                width: 5,
                height: 2,
                rotate: { x: a / 4 },
                translate: { y: 5 }
              }),
              new A.a.Shape({
                addTo: s,
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
          (l = A.a.TAU),
          (e = Math.sqrt(2)),
          (s = [{ x: -1 }, { x: 1 }, { y: -e }]),
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
                path: e.snub ? c : s,
                translate: { z: 1 },
                rotate: { x: l / 8 },
                stroke: a,
                fill: !0,
                color: e.color,
                backface: void 0 === e.backface || e.backface
              }),
              n.copyGraph({ rotate: { y: l / 4 } }),
              n.copyGraph({ rotate: { y: l / 2 } }),
              n.copyGraph({ rotate: { y: (3 * l) / 4 } }),
              e.snub &&
                new A.a.Rect({
                  addTo: t,
                  translate: { y: -0.5 },
                  rotate: { x: -l / 4 },
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
                    a.wallRectCallback && a.wallRectCallback(n);
                    return (
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
            var l = new A.a.Anchor({
              addTo: i,
              translate: { x: 20, y: 54, z: -16 },
              scale: { x: 4, y: -8, z: 4 }
            });
            ZdogSpookyHouse.getPyramid({
              addTo: l,
              scale: { y: -1 },
              color: t.deep
            }),
              ZdogSpookyHouse.getPyramid({ addTo: l, color: t.deep });
            var s = new A.a.Group({
                addTo: n,
                translate: { x: 18, z: 80 },
                scale: ZdogSpookyHouse.hillScale,
                updateSort: !0
              }),
              c = new A.a.Anchor({ addTo: s, scale: { x: 24, y: 32, z: 24 } });
            ZdogSpookyHouse.getPyramid({ addTo: c, color: t.dark }),
              ZdogSpookyHouse.getPyramid({
                addTo: c,
                scale: { y: -1 },
                snub: !0,
                color: t.deep
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: s,
                scale: { x: 6, y: -14, z: 6 },
                translate: { x: -8, y: 12, z: 8 },
                color: t.deep
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: s,
                scale: { x: 12, y: 46, z: 12 },
                translate: { x: -12, z: -4 },
                color: t.dark
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: s,
                diameter: 8,
                length: 10,
                translate: { x: 2, y: -15, z: 18 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: s,
                diameter: 8,
                length: 10,
                translate: { x: 15, y: -8, z: 16 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: s,
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
              l.copyGraph({
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
              C = new A.a.Anchor({ addTo: f, translate: { z: 88 } });
            new A.a.Hemisphere({
              addTo: C,
              diameter: 36,
              rotate: { x: r / 4 },
              color: g,
              stroke: 6
            }),
              E.copy({ addTo: C, translate: { x: 16, y: -14, z: -4 } }),
              S.copy({
                addTo: C,
                width: 28,
                height: 16,
                cornerRadius: 8,
                stroke: 10,
                scale: 2,
                translate: { x: 8, y: 2, z: 4 }
              });
            var O = ZdogSpookyHouse.addHouse({ addTo: i, stroke: 1 / o.zoom });
            ZdogSpookyHouse.addCats({ addTo: i }),
              ZdogSpookyHouse.addBones({ addTo: i });
            var w = ZdogSpookyHouse.addInteriorScene({
                addTo: O.shape,
                translate: { z: 6 }
              }),
              T = ZdogSpookyHouse.addFogMonster({
                addTo: n,
                translate: { y: 12 }
              }),
              I = ZdogSpookyHouse.addCarRoad({ addTo: n }),
              k = 0,
              D = 300;
            !(function e() {
              var t,
                a,
                n = k / D;
              ZdogSpookyHouse.wobbling & (n <= 2) &&
                ((t = A.a.easeInOut(n % 1) * r),
                (a = (-3 * r) / 64),
                (o.rotate.y = Math.sin(t) * a + r / 8),
                (o.rotate.x = (-0.5 * Math.cos(t) + 0.5) * a)),
                o.normalizeRotate(),
                T.animate(n),
                I.animate(n),
                O.animate(n, o.rotate),
                w.animate(n),
                (y.rotate.y = (n * r) / 12),
                (f.rotate.y = (n * r) / 16),
                (i.translate.y = 4 * Math.sin((n / 4) * r)),
                (m.translate.y = -4 * Math.sin((n / 1.5) * r)),
                (h.translate.y = -4 * Math.sin((n / 2.5) * r)),
                (u.translate.y = 4 * Math.sin((n / 3) * r)),
                (s.translate.y = 4 * Math.sin((n / 2) * r)),
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
        strMaxMobileWidth: "700px",
        strMinMobileHeight: "360px",
        strDesktopControlBarWidth: "300px",
        strDesktopGlobalHeaderHeight: "104px",
        strMobileGlobalHeaderHeight: "62px",
        strDesktopLabsBannerHeight: "46px",
        strMobileLabsBannerHeight: "42px",
        strDesktopHubBannerHeight: "80px",
        strMobileHubBannerHeight: "80px",
        strJumboHubBannerHeight: "150px",
        strDesktopGroupHeaderHeight: "70px",
        strMobileGroupHeaderHeight: "37px",
        strMobileNavBannerHeight: "52px",
        HubBanner: "eventcalendar_HubBanner_2zTu0",
        LargeMode: "eventcalendar_LargeMode_3OnTr",
        CloseFilterPage: "eventcalendar_CloseFilterPage_3XZe_",
        ShowSettings: "eventcalendar_ShowSettings_1qCUd",
        ControlPageContainer: "eventcalendar_ControlPageContainer_2LztM",
        FiltersTitle: "eventcalendar_FiltersTitle_tQZ7I",
        FiltersDescription: "eventcalendar_FiltersDescription_17nua",
        SideSteamLabsBannerCtn: "eventcalendar_SideSteamLabsBannerCtn_1UOp4",
        SteamLabsIdentifiers: "eventcalendar_SteamLabsIdentifiers_3SWqw",
        SteamLabsName: "eventcalendar_SteamLabsName_1wILk",
        SteamLabsNumber: "eventcalendar_SteamLabsNumber_2ByeP",
        SteamLabsButton: "eventcalendar_SteamLabsButton_3YoSz",
        SteamLabsBanner: "eventcalendar_SteamLabsBanner_8sQfl",
        SteamLabsBannerCtn: "eventcalendar_SteamLabsBannerCtn_3olyO",
        SidebarContainer: "eventcalendar_SidebarContainer_15YLD",
        SidebarCollapsed: "eventcalendar_SidebarCollapsed_3x2Ig",
        CollapseButton: "eventcalendar_CollapseButton_1RCio",
        DesktopButton: "eventcalendar_DesktopButton_2vMIl",
        SidebarBackground: "eventcalendar_SidebarBackground_1ZO60",
        Sidebar: "eventcalendar_Sidebar_1nf0v",
        SidebarTitle: "eventcalendar_SidebarTitle_3uZE-",
        FilterControlPage: "eventcalendar_FilterControlPage__uX0h",
        FilterOption: "eventcalendar_FilterOption_2LoOb",
        SideBarFilterNavLinks: "eventcalendar_SideBarFilterNavLinks_fhYfj",
        FilterLink: "eventcalendar_FilterLink_1zyVy",
        NumberDisplay: "eventcalendar_NumberDisplay_23qmf",
        FilterSettingsCtn: "eventcalendar_FilterSettingsCtn_3CSX8",
        OpenFilterSettings: "eventcalendar_OpenFilterSettings_3cMES",
        SidebarBackLink: "eventcalendar_SidebarBackLink_2NQEg",
        MobileCloseButton: "eventcalendar_MobileCloseButton_3Es2q",
        FilterSection: "eventcalendar_FilterSection_34HOA",
        FilterSubSection: "eventcalendar_FilterSubSection_1Ko6o",
        FilterSubSectionTitle: "eventcalendar_FilterSubSectionTitle_MeJhm",
        ConfigPanelSteamLabs: "eventcalendar_ConfigPanelSteamLabs_3wJ-z",
        ForceResponsiveLink: "eventcalendar_ForceResponsiveLink_3dRqL",
        SidebarLink: "eventcalendar_SidebarLink_2VFTM",
        SidebarManageMutedApps: "eventcalendar_SidebarManageMutedApps_2IWYf",
        MutedSourcesGroup: "eventcalendar_MutedSourcesGroup_2B7QL",
        MutedSourcesCount: "eventcalendar_MutedSourcesCount_3nwCq",
        SidebarFooter: "eventcalendar_SidebarFooter_3sXsg",
        FooterLegal: "eventcalendar_FooterLegal_3YG_3",
        MobileButton: "eventcalendar_MobileButton_3cMvc",
        BodyNoScroll: "eventcalendar_BodyNoScroll_1d-cx",
        EventCalendarContainer: "eventcalendar_EventCalendarContainer_1e3Wb",
        ReserveControlSpace: "eventcalendar_ReserveControlSpace_18npk",
        WideLeftGutter: "eventcalendar_WideLeftGutter_ws9AN",
        RowContainer: "eventcalendar_RowContainer_3yqpP",
        Loading: "eventcalendar_Loading_2XF_g",
        Rows: "eventcalendar_Rows_r3Dia",
        FutureSection: "eventcalendar_FutureSection_290nk",
        PastSection: "eventcalendar_PastSection_3FpvG",
        DarkerBackground: "eventcalendar_DarkerBackground_1U2BW",
        EmptySectionText: "eventcalendar_EmptySectionText_3TwYr",
        CalendarRow: "eventcalendar_CalendarRow_398u2",
        GroupHeader: "eventcalendar_GroupHeader_3j2de",
        GroupHeaderTitle: "eventcalendar_GroupHeaderTitle_2aVLR",
        GroupHeaderLine: "eventcalendar_GroupHeaderLine_bcTEU",
        SeeAllLink: "eventcalendar_SeeAllLink_28rp7",
        SeeAllCount: "eventcalendar_SeeAllCount_IOckO",
        HorizontalTileContainer: "eventcalendar_HorizontalTileContainer_muk0v",
        HorizontalTiles: "eventcalendar_HorizontalTiles_1YVOy",
        HeaderAtTop: "eventcalendar_HeaderAtTop_2VZun",
        EndOfRows: "eventcalendar_EndOfRows_1lK7p",
        BackToThePast: "eventcalendar_BackToThePast_18uWs",
        MobileSeeAllink: "eventcalendar_MobileSeeAllink_3yeVN",
        LiveText: "eventcalendar_LiveText_14EbB",
        LoginPrompt: "eventcalendar_LoginPrompt_1EXXC",
        LoginButton: "eventcalendar_LoginButton_1wuxX",
        SpecialEventListGroup: "eventcalendar_SpecialEventListGroup_5UEq9",
        SpecialEventListTitle: "eventcalendar_SpecialEventListTitle_2fFKi",
        SpecialEventList: "eventcalendar_SpecialEventList_3AESv",
        SpecialEvent: "eventcalendar_SpecialEvent_2s-UQ",
        SpecialEventTitle: "eventcalendar_SpecialEventTitle_3xq6F",
        SpecialEventTime: "eventcalendar_SpecialEventTime_3cGYp",
        NewsChannelGroup: "eventcalendar_NewsChannelGroup_3U5MY",
        NewsChannelListTitle: "eventcalendar_NewsChannelListTitle_3X16T",
        NewsChannelList: "eventcalendar_NewsChannelList_19CIw",
        NewsChannel: "eventcalendar_NewsChannel_1n4vp",
        NewsChannelText: "eventcalendar_NewsChannelText_2Nbub",
        NewChannelCount: "eventcalendar_NewChannelCount_1_4Ul",
        NewsChannelOnPage: "eventcalendar_NewsChannelOnPage_kJoC7",
        NewsChannelTitle: "eventcalendar_NewsChannelTitle_11O61",
        NewsChannelSubtitle: "eventcalendar_NewsChannelSubtitle_3_CIM",
        SidePanelGameSearch: "eventcalendar_SidePanelGameSearch_1LTVI",
        MobileNavBannerCtn: "eventcalendar_MobileNavBannerCtn_20PrZ",
        SearchDismiss: "eventcalendar_SearchDismiss_eIKAr",
        SearchBox: "eventcalendar_SearchBox_2i8gk",
        SearchExpanded: "eventcalendar_SearchExpanded_3rn-P",
        SettingsPanel: "eventcalendar_SettingsPanel_tifiV",
        MobileNavHScroll: "eventcalendar_MobileNavHScroll_yps0y",
        MobileNavBannerList: "eventcalendar_MobileNavBannerList_3xi45",
        MobileNavButton: "eventcalendar_MobileNavButton_3kOf_",
        MobileNavCount: "eventcalendar_MobileNavCount_3m7py",
        MobileNavButtonActive: "eventcalendar_MobileNavButtonActive_2XXBa"
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
        carouselNavButton: "carousel_carouselNavButton_13rGo",
        left: "carousel_left_S8IHd",
        carouselBtnCtn: "carousel_carouselBtnCtn_3zfZ9",
        right: "carousel_right_Cq59o",
        carouselBody: "carousel_carouselBody_3a31O",
        sliderBody: "carousel_sliderBody_2M3Sn",
        breadcrumbContainer: "carousel_breadcrumbContainer_3HjnE",
        pipList: "carousel_pipList_LY1m2",
        pipScrollerContainer: "carousel_pipScrollerContainer_3SyN-",
        pipScrollButton: "carousel_pipScrollButton_qE43J",
        scrollNavDiv: "carousel_scrollNavDiv_95I5g",
        scrollNavButton: "carousel_scrollNavButton_1cpdo",
        pipScroller: "carousel_pipScroller_EMd4F",
        scrollBackground: "carousel_scrollBackground_WUHeT",
        scrollForeground: "carousel_scrollForeground_PQzkJ",
        pipContainer: "carousel_pipContainer_3TKX3",
        pip: "carousel_pip_3Byg6",
        pipNumber: "carousel_pipNumber_1u4YJ"
      };
    },
    U9Ih: function(e, t, a) {
      e.exports = {
        SaleItemBrowserContainer:
          "saleitembrowser_SaleItemBrowserContainer_18byE",
        SaleItemBrowserHeaderContainer:
          "saleitembrowser_SaleItemBrowserHeaderContainer_1edLK",
        SaleItemBrowserHeader: "saleitembrowser_SaleItemBrowserHeader_Eh-ow",
        FlavorLabel: "saleitembrowser_FlavorLabel_KDLAS",
        SelectedFlavor: "saleitembrowser_SelectedFlavor_qYruX",
        EmptyResults: "saleitembrowser_EmptyResults_3U-cq",
        ShowContentsContainer: "saleitembrowser_ShowContentsContainer_36qA-",
        Loading: "saleitembrowser_Loading_nXk7R",
        ShowContentsButton: "saleitembrowser_ShowContentsButton_2tkiJ"
      };
    },
    Wym2: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "EventModerationLanding", function() {
          return mr;
        }),
        a.d(t, "EventBackfillLanding", function() {
          return hr;
        }),
        a.d(t, "EventSaleDisplay", function() {
          return vr;
        }),
        a.d(t, "EventCalendar", function() {
          return _r;
        }),
        a.d(t, "EventDetailView", function() {
          return br;
        }),
        a.d(t, "Events", function() {
          return gr;
        }),
        a.d(t, "EventSteamGameFestivalDebug", function() {
          return yr;
        });
      var M = a("q1tI"),
        c = a.n(M),
        B = a("mrSG"),
        n = a("vDqi"),
        g = a.n(n),
        m = a("2vnA"),
        r = a("TyAF"),
        o = a("Gp1o"),
        i = a("Ty5D"),
        p = a("qD+2"),
        L = a("kLLr"),
        _ = a("ir+G"),
        E = a("TQGK"),
        D = a("WF3T"),
        j = a("5izx"),
        x = a("9w6b"),
        N = a("6oCP"),
        b = a("IjL/"),
        s = a("bxiW"),
        l = a("55Ip"),
        v = a("kyHq"),
        d = a("KEpR"),
        u = a("Dhs6"),
        h = a("Mgs7"),
        A = a("6Y59"),
        y = a("5E+2"),
        S = a("+d9t"),
        R = a("exH9"),
        P = a("TLQK"),
        H = a("lkRc"),
        G = a("ee7K"),
        f = a("qiKp"),
        C = a("bS9Q"),
        O = a("I2Hi"),
        w = a.n(O),
        T = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { strSearchString: "", rgSuggestions: null }),
              (e.m_nHighestSentRequestID = 0),
              (e.m_nHighestReceivedRequestID = 0),
              (e.m_timerForChange = new f.b()),
              e
            );
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_timerForChange.Cancel();
            }),
            (e.prototype.GetAppSuggstionsFromServer = function(l) {
              var s;
              return Object(B.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o,
                  i = this;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        ++this.m_nHighestSentRequestID,
                        (t = this.m_nHighestSentRequestID),
                        (a = {
                          cc: H.c.COUNTRY,
                          l: H.c.LANGUAGE,
                          realm: v.d.k_ESteamRealmGlobal,
                          f: "jsonfull",
                          term: l.replace(" ", "+"),
                          require_type: this.props.filterStoreItemType
                            ? this.props.filterStoreItemType.join(",")
                            : void 0,
                          excluded_tags: G.a.GetExcludedTagsSortedByID(),
                          excluded_content_descriptors: G.a.GetExcludedContentDescriptor()
                        }),
                        (n = H.c.STORE_BASE_URL + "search/suggest"),
                        [4, g.a.get(n, { params: a, withCredentials: !0 })]
                      );
                    case 1:
                      return ((r = e.sent()),
                      this.m_nHighestReceivedRequestID > t)
                        ? [2]
                        : ((this.m_nHighestReceivedRequestID = t),
                          (o =
                            null !== (s = null == r ? void 0 : r.data) &&
                            void 0 !== s &&
                            s.length
                              ? r.data.map(function(e) {
                                  var t = M.createElement(
                                    "div",
                                    {
                                      className: w.a.ResultRow,
                                      key: "suggestion-" + e.id,
                                      onClick: function() {
                                        return i.props.fnOnSelected(e);
                                      }
                                    },
                                    M.createElement("img", {
                                      src: e.img,
                                      className: w.a.AvatarImage
                                    }),
                                    M.createElement(
                                      "div",
                                      { className: w.a.GameName },
                                      " ",
                                      Object(C.b)(e.name),
                                      " "
                                    )
                                  );
                                  return i.props.fnDecorateSuggestion
                                    ? i.props.fnDecorateSuggestion(e, t)
                                    : t;
                                })
                              : [
                                  M.createElement(
                                    "div",
                                    { key: "empty-results" },
                                    Object(P.d)(
                                      "#EventCalendar_GameSearch_NoneFound"
                                    )
                                  )
                                ]),
                          this.setState({
                            strSearchString: l,
                            rgSuggestions: o
                          }),
                          [2]);
                  }
                });
              });
            }),
            (e.prototype.UpdateAppSuggestions = function(n) {
              return Object(B.b)(this, void 0, void 0, function() {
                var t,
                  a = this;
                return Object(B.e)(this, function(e) {
                  return (
                    null != (t = n.target.value && n.target.value.trim()) &&
                    t.length
                      ? this.m_timerForChange.Schedule(300, function() {
                          return a.GetAppSuggstionsFromServer(t);
                        })
                      : (++this.m_nHighestSentRequestID,
                        (this.m_nHighestReceivedRequestID = this.m_nHighestSentRequestID),
                        this.m_timerForChange.Cancel(),
                        this.setState({
                          strSearchString: "",
                          rgSuggestions: null
                        })),
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
              return M.createElement(
                "div",
                { className: w.a.SuggestContainer },
                M.createElement(h.j, {
                  type: "text",
                  label: this.props.strLabel,
                  onChange: this.UpdateAppSuggestions,
                  bAlwaysShowClearAction: e,
                  focusOnMount: this.props.focusOnMount
                }),
                e &&
                  M.createElement(
                    "div",
                    {
                      className: Object(R.a)(
                        w.a.Results,
                        this.props.strResultsClass
                      )
                    },
                    this.state.rgSuggestions
                  )
              );
            }),
            Object(B.c)([s.a], e.prototype, "UpdateAppSuggestions", null),
            e
          );
        })(M.Component),
        I = a("IWyE"),
        F = a.n(I),
        k = a("wd/R"),
        z = a.n(k),
        U = (function() {
          function e() {
            this.m_dateLoadTime = j.a.GetTimeNowWithOverrideAsDate();
          }
          return (
            (e.prototype.IsCurrentlyVisible = function(e) {
              return (
                (!e.startVisible || e.startVisible <= this.m_dateLoadTime) &&
                (!e.endVisible || e.endVisible >= this.m_dateLoadTime)
              );
            }),
            (e.IsCurrentlyActive = function(e) {
              var t = j.a.GetTimeNowWithOverrideAsDate();
              return (
                (!e.startEvent || e.startEvent <= t) &&
                (!e.endEvent || e.endEvent >= t)
              );
            }),
            (e.LocalizeDateString = function(e) {
              if (!e.startEvent) return null;
              var t = e.startEvent.toLocaleDateString(
                P.c.GetPreferredLocales(),
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
                e.endEvent.toLocaleDateString(P.c.GetPreferredLocales(), a)
              );
            }),
            (e.prototype.GetVisibleSpecialEvents = function() {
              var t = this;
              return [
                {
                  sLocToken: "#NewsHubSpecialEvent_GameFestival",
                  endVisible: new Date(
                    1e3 * z()("2020-06-16T14:00:00-07:00").unix()
                  ),
                  startEvent: new Date(
                    1e3 * z()("2020-06-16T10:00:00-07:00").unix()
                  ),
                  endEvent: new Date(
                    1e3 * z()("2020-06-22T10:00:00-07:00").unix()
                  ),
                  newshubUrl: "newshub/collection/GameFestival2020?upcoming=1"
                },
                {
                  sLocToken: "#NewsHubSpecialEvent_GameFestival",
                  startVisible: new Date(
                    1e3 * z()("2020-06-16T14:00:00-07:00").unix()
                  ),
                  endVisible: new Date(
                    1e3 * z()("2020-06-22T10:00:00-07:00").unix()
                  ),
                  startEvent: new Date(
                    1e3 * z()("2020-06-16T10:00:00-07:00").unix()
                  ),
                  endEvent: new Date(
                    1e3 * z()("2020-06-22T10:00:00-07:00").unix()
                  ),
                  newshubUrl: "newshub/collection/GameFestival2020"
                }
              ].filter(function(e) {
                return t.IsCurrentlyVisible(e);
              });
            }),
            e
          );
        })(),
        V = new U(),
        W = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.specialEvent,
                t = window.location.href === H.c.STORE_BASE_URL + e.newshubUrl,
                a = U.IsCurrentlyActive(e),
                n = U.LocalizeDateString(e);
              return M.createElement(
                l.b,
                { to: "/" + e.newshubUrl },
                M.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      F.a.SpecialEvent,
                      t && F.a.SpecialEventOnPage,
                      a && F.a.SpecialEventActive
                    )
                  },
                  M.createElement(
                    "div",
                    { className: F.a.SpecialEventTitle },
                    Object(P.d)(e.sLocToken)
                  ),
                  n &&
                    M.createElement(
                      "div",
                      { className: F.a.SpecialEventTime },
                      n
                    )
                )
              );
            }),
            t
          );
        })(M.Component),
        Z = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.render = function() {
              var e = V.GetVisibleSpecialEvents();
              return 0 === e.length
                ? null
                : M.createElement(
                    "div",
                    { className: F.a.SpecialEventListGroup },
                    M.createElement(
                      "div",
                      { className: F.a.SpecialEventListTitle },
                      Object(P.d)("#Events_SpecialEvents")
                    ),
                    M.createElement(
                      "div",
                      { className: F.a.SpecialEventList },
                      e.map(function(e) {
                        return M.createElement(W, {
                          key: e.sLocToken,
                          specialEvent: e
                        });
                      })
                    )
                  );
            }),
            t
          );
        })(M.Component),
        Y = a("xLK1"),
        q = a.n(Y),
        J = (function(t) {
          function i() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bInScroll: !1, nStartXPos: 0, nStartScrollLeft: 0 }),
              (e.m_hSlider = M.createRef()),
              e
            );
          }
          return (
            Object(B.d)(i, t),
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
                    q.a.HorizontalScrollInDragForceCursor
                  ),
                  this.props.dragClassName &&
                    t.classList.remove(this.props.dragClassName)),
                t.removeEventListener("pointerup", this.OnPointerUp),
                t.removeEventListener("pointerleave", this.OnPointerUp),
                t.removeEventListener("pointercapturelost", this.OnPointerUp),
                t.removeEventListener("pointermove", this.OnPointerMove));
            }),
            (i.prototype.OnPointerMove = function(e) {
              var t,
                a,
                n,
                r,
                o = this.m_hSlider.current;
              o &&
                (e.preventDefault(),
                (t =
                  (e.pageX - o.offsetLeft - this.state.nStartXPos) *
                  (this.props.scrollMultiplier || i.knDefaultScrollMultiplier)),
                (a = this.state.nStartScrollLeft - t),
                (n = Math.abs(a - this.state.nStartScrollLeft)),
                (r = this.props.minDragPixels || i.knDefaultMinDragPixels),
                !this.state.bInScroll &&
                  r <= n &&
                  ((o.scrollLeft = a),
                  this.setState({ bInScroll: !0 }),
                  document.body.classList.add(
                    q.a.HorizontalScrollInDragForceCursor
                  ),
                  this.props.dragClassName &&
                    o.classList.add(this.props.dragClassName),
                  o.setPointerCapture(e.pointerId)),
                this.state.bInScroll && (o.scrollLeft = a));
            }),
            (i.prototype.render = function() {
              return M.createElement(
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
            Object(B.c)([s.a], i.prototype, "OnPointerDown", null),
            Object(B.c)([s.a], i.prototype, "OnPointerUp", null),
            Object(B.c)([s.a], i.prototype, "OnPointerMove", null),
            i
          );
        })(M.Component),
        Q = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.GetVisibilityStore = function() {
              return Object(D.a)().m_visibilityStore;
            }),
            (t.prototype.OnEventTypeChange = function(e, t) {
              this.GetVisibilityStore().SetEventTypeGroupAllowed(e, t),
                this.props.fnOnFilterChange();
            }),
            (t.prototype.RenderEventTypeCheckbox = function(t) {
              var a = this,
                e = this.GetVisibilityStore().BIsEventTypeGroupAllowed(t);
              return M.createElement(
                y.a,
                {
                  key: "group-" + t,
                  toolTipContent: Object(P.d)(
                    "#EventCalendar_EventTypeGroup_ttip_" + t
                  ),
                  direction: "top"
                },
                M.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      F.a.FilterOption,
                      F.a.FilterEventType
                    )
                  },
                  M.createElement(h.d, {
                    label: Object(P.d)("#EventCalendar_EventTypeGroup_" + t),
                    checked: e,
                    onChange: function(e) {
                      return a.OnEventTypeChange(t, e);
                    }
                  })
                )
              );
            }),
            (t.prototype.OnGameSourceChange = function(e, t) {
              this.GetVisibilityStore().SetGameSourceAllowed(e, t),
                this.props.fnOnFilterChange();
            }),
            (t.prototype.RenderGameSourceCheckbox = function(t, e) {
              var a = this,
                n = this.GetVisibilityStore().BIsGameSourceAllowed(t);
              return M.createElement(
                y.a,
                {
                  key: "gs-" + t,
                  direction: "top",
                  toolTipContent: e
                    ? Object(P.d)("#EventCalendar_DisabledFilter_LoginPrompt")
                    : Object(P.d)("#EventCalendar_GameSource_ttip_" + t)
                },
                M.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      F.a.FilterOption,
                      F.a.FilterGameSource
                    )
                  },
                  M.createElement(h.d, {
                    label: Object(P.d)("#EventCalendar_GameSource_" + t),
                    checked: n,
                    disabled: e,
                    onChange: function(e) {
                      return a.OnGameSourceChange(t, e);
                    }
                  })
                )
              );
            }),
            (t.prototype.render = function() {
              var e,
                t = this.props.bUserIsLoggedIn,
                a = Object(D.a)(),
                n = !0;
              !a.BIsSingleGroupCalendar() ||
                ((e = E.a.GetClanInfoByClanAccountID(a.GetSingleGroupID())) &&
                  e.has_rss_feed &&
                  (n = !1));
              var r = u.a.GetMutedSourceCount();
              return M.createElement(
                "div",
                { className: F.a.FilterControlPage },
                M.createElement(
                  "div",
                  { className: F.a.FiltersTitle },
                  Object(P.d)("#EventCalendar_FiltersTitle")
                ),
                M.createElement(
                  "div",
                  { className: F.a.FiltersDescription },
                  Object(P.d)(
                    a.BIsGlobalCalendar()
                      ? "#EventCalendar_FiltersDescription"
                      : "#EventCalendar_FiltersDescription_NonPersonalized"
                  )
                ),
                M.createElement(
                  "div",
                  { className: F.a.FilterSection },
                  n &&
                    M.createElement(
                      "div",
                      { className: F.a.FilterSubSection },
                      M.createElement(
                        "div",
                        { className: F.a.FilterSubSectionTitle },
                        Object(P.d)(
                          "#EventCalendar_FilterSubSection_EventTypeGroups"
                        )
                      ),
                      this.RenderEventTypeCheckbox(d.b.k_EEvents),
                      this.RenderEventTypeCheckbox(d.b.k_EStreaming),
                      this.RenderEventTypeCheckbox(d.b.k_EUpdates),
                      this.RenderEventTypeCheckbox(d.b.k_EReleases),
                      this.RenderEventTypeCheckbox(d.b.k_ESales),
                      this.RenderEventTypeCheckbox(d.b.k_ENews)
                    ),
                  Boolean(a.BIsGlobalCalendar()) &&
                    M.createElement(
                      "div",
                      { className: F.a.FilterSubSection },
                      M.createElement(
                        "div",
                        { className: F.a.FilterSubSectionTitle },
                        Object(P.d)(
                          "#EventCalendar_FilterSubSection_GameSources"
                        )
                      ),
                      this.RenderGameSourceCheckbox(d.c.k_ERecent, !t),
                      this.RenderGameSourceCheckbox(d.c.k_ELibrary, !t),
                      this.RenderGameSourceCheckbox(d.c.k_EWishist, !t),
                      this.RenderGameSourceCheckbox(d.c.k_EFollowing, !t),
                      this.RenderGameSourceCheckbox(d.c.k_ERecommended),
                      this.RenderGameSourceCheckbox(d.c.k_ESteam),
                      j.a.bIncludeFeaturedAsGameSource &&
                        this.RenderGameSourceCheckbox(d.c.k_EFeatured)
                    ),
                  Boolean(a.BIsSingleSourceMuted()) &&
                    M.createElement(
                      "div",
                      null,
                      Object(P.d)("#EventCalendar_SingleAppIsMuted")
                    )
                ),
                M.createElement(
                  "div",
                  { className: F.a.SideBarFilterNavLinks },
                  Boolean(a.BIsGlobalCalendar()) &&
                    0 < r &&
                    M.createElement(
                      S.a,
                      {
                        className: F.a.MutedSourcesGroup,
                        href: H.c.STORE_BASE_URL + "account/emailoptout/app",
                        bDisableContextMenu: !0
                      },
                      M.createElement(
                        "div",
                        { className: F.a.FilterLink },
                        M.createElement(A.Y, { muted: !0 }),
                        Object(P.d)("#EventCalendar_ManageMutedSources"),
                        M.createElement(
                          "div",
                          { className: F.a.NumberDisplay },
                          r
                        )
                      )
                    ),
                  M.createElement(
                    S.a,
                    {
                      href: H.c.STORE_BASE_URL + "account/preferences",
                      bDisableContextMenu: !0
                    },
                    M.createElement(
                      "div",
                      { className: F.a.FilterLink },
                      M.createElement(A.a, null),
                      Object(P.d)("#EventCalendar_ManageStorePref")
                    )
                  )
                ),
                M.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      F.a.SidePanelSteamLabs,
                      F.a.ConfigPanelSteamLabs
                    )
                  },
                  M.createElement(ae, null)
                )
              );
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        K = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bShowFilterPage: !1 }), e;
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.GetCalendarTitle = function(e) {
              return Object(P.k)(
                "#EventCalendar_Title",
                M.createElement("br", null)
              );
            }),
            (e.prototype.OpenFilterSettings = function(e) {
              this.setState({ bShowFilterPage: e });
            }),
            (e.prototype.render = function() {
              var e,
                t = this,
                a = this.props,
                n = a.bUserIsLoggedIn,
                r = a.nDisappearingHeaderVisibleHeight,
                o = (a.nGlobalHeaderTop, a.bIsCollapsed),
                i = a.bShouldIncludeLegalFooter,
                l = a.bShowUpcoming,
                s = a.fnToggleCollapsed,
                c = a.fnOnFilterChange,
                d = this.state.bShowFilterPage,
                p =
                  "Responsive_RequestMobileView" in window &&
                  window.Responsive_RequestMobileView,
                u = ct(),
                m = M.createElement(
                  "div",
                  { className: F.a.MobileCloseButton, onClick: s },
                  M.createElement(A.O, null)
                ),
                h = o ? Math.max(0, r) : 0,
                v = u
                  ? null
                  : M.createElement(
                      "div",
                      { onClick: s, className: F.a.CollapseButton },
                      M.createElement(
                        "div",
                        {
                          style: { marginTop: h + "px" },
                          className: F.a.DesktopButton
                        },
                        M.createElement(A.r, { angle: o ? 180 : 0 })
                      )
                    ),
                _ = u
                  ? null
                  : M.createElement(
                      "div",
                      {
                        onClick: function() {
                          return t.OpenFilterSettings(!1);
                        },
                        className: F.a.CollapseButton
                      },
                      M.createElement(
                        "div",
                        {
                          style: { marginTop: h + "px" },
                          className: F.a.DesktopButton
                        },
                        M.createElement(A.O, null)
                      )
                    ),
                b = d ? _ : v,
                g = o ? null : { top: r + "px" },
                y = Object(D.a)();
              return (
                !y.BIsSingleGroupCalendar() ||
                  ((e = E.a.GetClanInfoByClanAccountID(y.GetSingleGroupID())) &&
                    e.has_rss_feed &&
                    0),
                M.createElement(
                  M.Fragment,
                  null,
                  M.createElement(
                    "div",
                    {
                      className: Object(R.a)(
                        F.a.SidebarContainer,
                        o && F.a.SidebarCollapsed
                      ),
                      style: g
                    },
                    o
                      ? b
                      : M.createElement(
                          "div",
                          { className: F.a.Sidebar },
                          m,
                          b,
                          M.createElement(
                            "div",
                            { className: F.a.ControlPageContainer },
                            d
                              ? M.createElement(Q, {
                                  bUserIsLoggedIn: n,
                                  fnOnFilterChange: c
                                })
                              : M.createElement(
                                  M.Fragment,
                                  null,
                                  M.createElement(
                                    "div",
                                    { className: F.a.SidebarBackground },
                                    M.createElement(A.P, null)
                                  ),
                                  M.createElement(
                                    "div",
                                    { className: F.a.SidebarTitle },
                                    this.GetCalendarTitle(y)
                                  ),
                                  M.createElement(ce, { bIsUpcoming: l }),
                                  M.createElement(Z, null),
                                  M.createElement(
                                    "div",
                                    { className: F.a.SidePanelGameSearch },
                                    M.createElement($, {
                                      label: Object(P.d)(
                                        "#EventCalendar_GameSearch"
                                      )
                                    })
                                  ),
                                  M.createElement(
                                    "div",
                                    { className: F.a.FilterSettingsCtn },
                                    M.createElement(
                                      "div",
                                      {
                                        className: Object(R.a)(
                                          F.a.FilterLink,
                                          F.a.OpenFilterSettings
                                        ),
                                        onClick: function() {
                                          return t.OpenFilterSettings(!0);
                                        }
                                      },
                                      M.createElement(A.N, null),
                                      Object(P.d)("#EventCalendar_EditFilters")
                                    )
                                  ),
                                  p &&
                                    M.createElement(
                                      "div",
                                      {
                                        className: Object(R.a)(
                                          F.a.SidebarLink,
                                          F.a.ForceResponsiveLink
                                        ),
                                        onClick: p
                                      },
                                      Object(P.d)(
                                        "#EventCalendar_ShowResponsiveView"
                                      )
                                    ),
                                  M.createElement(
                                    "div",
                                    {
                                      className: Object(R.a)(
                                        F.a.SidePanelSteamLabs,
                                        i && F.a.SidePanelSteamLabsNarrow
                                      )
                                    },
                                    M.createElement(ae, null)
                                  ),
                                  i && M.createElement(X, null)
                                )
                          )
                        )
                  )
                )
              );
            }),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        X = function(e) {
          return M.createElement(
            "div",
            { className: F.a.SidebarFooter },
            M.createElement("img", {
              src: H.c.STORE_CDN_URL + "public/images/footerLogo_valve_new.png"
            }),
            M.createElement(
              "div",
              { className: F.a.FooterLegal },
              Object(P.d)("#Legal_Footer_WithYear", Object(P.h)(new Date()))
            )
          );
        },
        $ = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.DecorateSearchSuggestion = function(e, t) {
              return e && e.id && Object(v.a)(e.type)
                ? M.createElement(
                    l.b,
                    {
                      key: "suggestion-" + e.id,
                      to: "/newshub/app/" + e.id + "/"
                    },
                    t
                  )
                : t;
            }),
            (t.prototype.render = function() {
              return M.createElement(T, {
                strLabel: this.props.label,
                fnOnSelected: function() {},
                fnDecorateSuggestion: this.DecorateSearchSuggestion,
                filterStoreItemType: ["game", "software"],
                focusOnMount: this.props.focusOnMount
              });
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        ee = H.c.STORE_BASE_URL + "labs",
        te = H.c.COMMUNITY_BASE_URL + "groups/SteamLabs/discussions/11/",
        ae = function(e) {
          return M.createElement(
            "div",
            { className: F.a.SideSteamLabsBannerCtn },
            M.createElement(
              "div",
              { className: F.a.SteamLabsIdentifiers },
              M.createElement(
                "a",
                {
                  className: F.a.SteamLabsName,
                  href: (H.c.IN_CLIENT ? "steam://openurl/" : "") + ee,
                  target: H.c.IN_CLIENT ? void 0 : "_blank"
                },
                Object(P.d)("#SteamLabs")
              ),
              M.createElement(
                "div",
                { className: F.a.SteamLabsNumber },
                Object(P.d)("#SteamLabs_ExperimentNumber", "009")
              )
            ),
            M.createElement(
              "a",
              {
                className: F.a.SteamLabsButton,
                href: (H.c.IN_CLIENT ? "steam://openurl/" : "") + te,
                target: H.c.IN_CLIENT ? void 0 : "_blank"
              },
              M.createElement(A.g, null)
            )
          );
        };
      function ne(e, t) {
        var a = Object(D.a)().BIsGlobalCalendar(),
          n = Object(D.a)().BIsCollectionCalendar(),
          r = new Array();
        if (
          (r.push({
            name: Object(P.d)("#EventCalendar_NewsChannel_YourNews"),
            subtitle: Object(P.d)("#EventCalendar_NewsChannel_Personalized"),
            key: "default",
            url: "newshub/",
            onPage: a && !e
          }),
          r.push({
            name: Object(P.d)("#EventCalendar_NewsChannel_Upcoming"),
            shortName: Object(P.d)("#EventCalendar_NewsChannel_UpcomingShort"),
            subtitle: Object(P.d)("#EventCalendar_NewsChannel_Personalized"),
            key: "upcoming",
            url: "newshub?upcoming=1",
            onPage: a && e,
            count: (function() {
              if (Object(D.a)().BIsGlobalCalendar()) {
                var e =
                    Object(D.a)()
                      .GetStoreInitializationTimestamp()
                      .getTime() / 1e3,
                  t = Object(D.a)().GetCurrentlyLoadedEventCount(e);
                if (t)
                  return Object(D.a)().BHitEventHorizon("forward")
                    ? String(t.nCount)
                    : t.nCount + "+";
              }
            })()
          }),
          r.push({
            name: Object(P.d)("#EventCalendar_NewsChannel_Featured"),
            subtitle: Object(P.d)("#EventCalendar_NewsChannel_TopSellers"),
            key: "featured",
            url: "newshub/collection/featured/",
            onPage: n && "featured" == Object(D.a)().GetCollectionID()
          }),
          t)
        )
          for (var o = 0, i = V.GetVisibleSpecialEvents(); o < i.length; o++) {
            var l = i[o];
            r.push({
              name: Object(P.d)(l.sLocToken),
              url: l.newshubUrl,
              onPage: !1,
              key: "event_" + l.sLocToken
            });
          }
        return r;
      }
      function re(e) {
        var t = e.element,
          a = t.shortName,
          n = t.name,
          r = t.url,
          o = t.onPage,
          i = t.count;
        return M.createElement(
          l.b,
          { to: "/" + r },
          M.createElement(
            "div",
            {
              className: Object(R.a)(
                F.a.MobileNavButton,
                o && F.a.MobileNavButtonActive
              )
            },
            a || n,
            i && M.createElement("div", { className: F.a.MobileNavCount }, i)
          )
        );
      }
      function oe(e) {
        var t = e.element,
          a = t.name,
          n = t.subtitle,
          r = t.url,
          o = t.onPage,
          i = t.count;
        return M.createElement(
          l.b,
          { to: "/" + r },
          M.createElement(
            "div",
            {
              className: Object(R.a)(
                F.a.NewsChannel,
                o && F.a.NewsChannelOnPage
              )
            },
            M.createElement(
              "div",
              { className: F.a.NewsChannelText },
              M.createElement("div", { className: F.a.NewsChannelTitle }, a),
              n &&
                M.createElement(
                  "div",
                  { className: F.a.NewsChannelSubtitle },
                  n
                )
            ),
            void 0 !== i &&
              M.createElement("div", { className: F.a.NewChannelCount }, i)
          )
        );
      }
      var ie,
        le,
        se = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bSearchExpanded: !1 }), e;
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.onExpandSearch = function(e) {
              this.setState({ bSearchExpanded: e });
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.state.bSearchExpanded,
                a = ne(this.props.bIsUpcoming, !0);
              return M.createElement(
                "div",
                {
                  style: {
                    transform: "translateY(" + this.props.nTopOffset + "px)"
                  },
                  className: F.a.MobileNavBannerCtn
                },
                M.createElement(
                  "div",
                  {
                    className: F.a.SettingsPanel,
                    onClick: this.props.fnToggleCollapsed
                  },
                  M.createElement(A.N, null)
                ),
                M.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      F.a.SettingsPanel,
                      t && F.a.SearchExpanded
                    ),
                    onClick: function() {
                      return e.onExpandSearch(!t);
                    }
                  },
                  M.createElement(A.A, null)
                ),
                t &&
                  M.createElement(
                    M.Fragment,
                    null,
                    M.createElement("div", {
                      className: F.a.SearchDismiss,
                      onClick: function() {
                        return e.onExpandSearch(!1);
                      }
                    }),
                    M.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          F.a.SearchBox,
                          t && F.a.SearchExpanded
                        )
                      },
                      M.createElement($, { focusOnMount: !0 })
                    )
                  ),
                M.createElement(
                  J,
                  { className: F.a.MobileNavHScroll },
                  M.createElement(
                    "div",
                    { className: F.a.MobileNavBannerList },
                    a.map(function(e) {
                      return M.createElement(re, { key: e.key, element: e });
                    })
                  )
                )
              );
            }),
            Object(B.c)([s.a], e.prototype, "onExpandSearch", null),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        ce = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.render = function() {
              var e = ne(this.props.bIsUpcoming, !1);
              return M.createElement(
                "div",
                { className: F.a.NewsChannelGroup },
                M.createElement(
                  "div",
                  { className: F.a.NewsChannelListTitle },
                  Object(P.d)("#EventCalendar_NewsChannels")
                ),
                M.createElement(
                  "div",
                  { className: F.a.NewsChannelList },
                  e.map(function(e) {
                    return M.createElement(oe, { key: e.key, element: e });
                  })
                )
              );
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        de = a("0OaU"),
        pe = a("r64O"),
        ue = a("yJqL"),
        me = a("G24H"),
        he = a.n(me),
        ve = a("uuth"),
        _e = a("ylkE"),
        be = a("cGQe"),
        ge = a("XmAN"),
        ye = a("mgoM"),
        Ee = a("U+Q5"),
        Se = a("5bld"),
        fe = a("YLyR"),
        Ce = a("Kw0F");
      ((le = ie = ie || {})[(le.NotLoaded = 0)] = "NotLoaded"),
        (le[(le.Loading = 1)] = "Loading"),
        (le[(le.Loaded = 2)] = "Loaded");
      var Oe = ie.NotLoaded,
        we = [];
      function Te(t) {
        var e, a;
        Oe != ie.Loaded
          ? (Oe == ie.NotLoaded &&
              (((e = document.createElement("script")).src =
                "https://www.youtube.com/iframe_api"),
              (a = document.getElementsByTagName(
                "script"
              )[0]).parentNode.insertBefore(e, a),
              (window.onYouTubeIframeAPIReady = Ie)),
            we.findIndex(function(e) {
              return t == e;
            }) < 0 && we.push(t))
          : t();
      }
      function Ie() {
        Oe = ie.Loaded;
        for (var e = 0, t = we; e < t.length; e++) {
          (0, t[e])();
        }
        we = [];
      }
      var ke = (function(a) {
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
            Object(B.d)(n, a),
            (n.prototype.componentWillUnmount = function() {
              var e;
              this.DestroyPlayer(),
                (e = this.OnYoutubeScriptsReady),
                Ce.b(we, e);
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
                this.m_playerContainer && Te(this.OnYoutubeScriptsReady));
            }),
            (n.prototype.OnYoutubeScriptsReady = function() {
              this.CreatePlayer(this.props);
            }),
            (n.prototype.CreatePlayer = function(e) {
              var t, a, n, r, o, i, l;
              this.DestroyPlayer(),
                this.m_playerContainer &&
                  ((t = !1 === e.autoplay ? 0 : 1),
                  (a = !0 === e.showInfo ? 1 : 0),
                  (n = !0 === e.controls ? 1 : 0),
                  (r = !0 === e.showFullscreenBtn ? 1 : 0),
                  (o = !0 === e.playsInline ? 1 : 0),
                  (i = {
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
                  }),
                  (l = this.m_playerContainer.firstElementChild),
                  (this.m_bPlayerReady = !1),
                  (this.m_player = new YT.Player(l, i)));
            }),
            (n.prototype.OnPlayerReady = function(e) {
              var t, a;
              (this.m_bPlayerReady = !0),
                this.props.onVideoInfoChanged &&
                  ((a = { strAuthor: "", strTitle: "", strVideoID: "" }),
                  (t = this.m_player.getVideoData()).author &&
                    (a.strAuthor = t.author),
                  t.title && (a.strTitle = t.title),
                  t.video_id && (a.strVideoID = t.video_id),
                  this.props.onVideoInfoChanged(a)),
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
              var e = M.createElement(
                "div",
                {
                  key: this.m_strPlayerID,
                  ref: this.BindPlayerContainer,
                  className: Object(R.a)("YoutubePlayer", this.props.classnames)
                },
                M.createElement(de.a, { className: "YoutubePlayerThrobber" })
              );
              return this.props.autopause
                ? M.createElement(ve.a, { onLeave: this.OnPlayerLeftView }, e)
                : e;
            }),
            (n.s_nPlayerIndex = 0),
            Object(B.c)([s.a], n.prototype, "BindPlayerContainer", null),
            Object(B.c)([s.a], n.prototype, "OnYoutubeScriptsReady", null),
            Object(B.c)([s.a], n.prototype, "CreatePlayer", null),
            Object(B.c)([s.a], n.prototype, "OnPlayerReady", null),
            Object(B.c)([s.a], n.prototype, "OnPlayerStateChange", null),
            Object(B.c)([s.a], n.prototype, "OnError", null),
            Object(B.c)([s.a], n.prototype, "OnPlayerLeftView", null),
            n
          );
        })(M.Component),
        De = a("02Wr"),
        je = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bDismissedPreviewImage: !1 }), t;
          }
          return (
            Object(B.d)(e, a),
            (e.prototype.render = function() {
              var t = this;
              if (
                (this.props.preloadYoutubeScripts && Te(function() {}),
                this.state.bDismissedPreviewImage)
              )
                return M.createElement(ke, Object(B.a)({}, this.props));
              var e =
                  this.props.altImgWithFallback &&
                  0 < this.props.altImgWithFallback.length,
                a = this.props.altImg
                  ? this.props.altImg
                  : "https://img.youtube.com/vi/" +
                    this.props.video +
                    "/maxresdefault.jpg";
              return M.createElement(
                "div",
                {
                  className: Object(R.a)(
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
                e &&
                  M.createElement(De.b, {
                    className: "YoutubePreviewImage",
                    srcs: this.props.altImgWithFallback
                  }),
                !e &&
                  M.createElement("img", {
                    src: a,
                    className: "YoutubePreviewImage"
                  }),
                M.createElement(
                  "div",
                  { className: "YoutubePreviewPlay" },
                  M.createElement(A.V, null)
                ),
                M.createElement(
                  "div",
                  { className: "VideoHintText" },
                  Object(P.d)("#EventCalendar_WatchYouTubeVideo")
                )
              );
            }),
            e
          );
        })(M.Component),
        Ae = a("N0Ye"),
        Le = a("mB/g"),
        Ne = a("i6tc"),
        Ge = a.n(Ne),
        Me = a("RQmk"),
        Be = a("O0NR"),
        xe = a("ka0M"),
        Re = a("Jqb/"),
        Pe = a("X3Ds"),
        He = a("TtDX"),
        Fe = a("y+6m"),
        ze = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.OnMuteButton = function(e) {
              var t = this.props.calendarEvent,
                a = t.GetEntityName();
              Object(xe.d)(
                M.createElement(
                  Re.c,
                  {
                    strTitle: Object(P.d)("#EventCalendar_MuteApp"),
                    strDescription: Object(P.d)(
                      "#EventCalendar_MuteApp_details",
                      a
                    ),
                    onOK: function() {
                      return Object(D.a)().UpdateEventBlockFromCalenderEvent(
                        t,
                        !1
                      );
                    }
                  },
                  M.createElement(
                    "a",
                    {
                      href:
                        (H.c.IN_CLIENT ? "steam://openurl/" : "") +
                        H.c.STORE_BASE_URL +
                        "account/emailoptout/app",
                      target: H.c.IN_CLIENT ? void 0 : "_blank"
                    },
                    Object(P.d)("#EventCalendar_ManageMutedApps")
                  )
                ),
                Object(Pe.o)(e)
              );
            }),
            (t.prototype.OnUnMuteButton = function() {
              var e = this.props.calendarEvent;
              Object(D.a)().UpdateEventBlockFromCalenderEvent(e, !0);
            }),
            (t.prototype.HideAllEventsOfMyType = function() {
              var e = this.props.eventModel,
                t = this.GetVisibilityStore().MapClanEventTypeToGroup(
                  e.GetEventType()
                );
              this.GetVisibilityStore().SetEventTypeGroupAllowed(t, !1);
            }),
            (t.prototype.GetVisibilityStore = function() {
              return Object(D.a)().m_visibilityStore;
            }),
            (t.prototype.AddContextMenuForSource = function(e, t, a, n) {
              var r = this;
              void 0 === n && (n = !0),
                this.GetVisibilityStore().BIsGameSourceAllowed(t) &&
                  (n &&
                    e.push(
                      M.createElement(
                        Fe.d,
                        {
                          key: "item-source-" + a + "-" + t,
                          disabled: !0,
                          onSelected: function() {}
                        },
                        Object(P.d)("#EventCalender_Reason_" + t)
                      )
                    ),
                  e.push(
                    M.createElement(
                      Fe.d,
                      {
                        key: "item-hidesource-" + a + "-" + t,
                        onSelected: function() {
                          r.GetVisibilityStore().SetGameSourceAllowed(t, !1);
                        }
                      },
                      Object(P.d)("#EventCalender_Hide_Reason_" + t)
                    )
                  ));
            }),
            (t.prototype.RemoveFromWishlist = function() {
              G.a.UpdateGameWishlist(this.props.eventModel.appid, !1);
            }),
            (t.prototype.AddToWishlist = function() {
              G.a.UpdateGameWishlist(this.props.eventModel.appid, !0);
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
                l = Object(D.a)();
              l.BIsGlobalCalendar() &&
                (o &&
                  o & Se.a.k_eLibrary &&
                  (this.GetVisibilityStore().BIsGameSourceAllowed(
                    d.c.k_ERecent
                  ) && n.appInfo
                    ? (r.push(
                        M.createElement(
                          Fe.d,
                          {
                            key: "item-source-" + i + "-lastplayed",
                            disabled: !0,
                            onSelected: function() {}
                          },
                          Object(P.d)(
                            "#EventCalender_LastPlayed",
                            Object(P.n)(
                              j.a.GetTimeNowWithOverride() -
                                n.appInfo.last_played
                            )
                          )
                        )
                      ),
                      this.AddContextMenuForSource(r, d.c.k_ERecent, i, !1))
                    : this.AddContextMenuForSource(r, d.c.k_ELibrary, i)),
                o &&
                  o & Se.a.k_eWishlist &&
                  this.AddContextMenuForSource(r, d.c.k_EWishist, i),
                o &&
                  o & Se.a.k_eFollowing &&
                  this.AddContextMenuForSource(r, d.c.k_EFollowing, i),
                o &&
                  o & Se.a.k_eRecommended &&
                  this.AddContextMenuForSource(r, d.c.k_ERecommended, i),
                o &&
                  o & Se.a.k_eSteam &&
                  this.AddContextMenuForSource(r, d.c.k_ESteam, i),
                o &&
                  o & Se.a.k_eFeatured &&
                  this.AddContextMenuForSource(r, d.c.k_EFeatured, i)),
                r.push(
                  M.createElement(
                    Fe.d,
                    {
                      key: a.GID + "hidetype",
                      onSelected: this.HideAllEventsOfMyType
                    },
                    Object(P.d)(
                      "#EVentCalendar_Hide_EventType",
                      Object(P.d)(
                        "#EventCalendar_EventTypeGroup_" +
                          this.GetVisibilityStore().MapClanEventTypeToGroup(
                            a.GetEventType()
                          )
                      )
                    )
                  )
                ),
                H.i.logged_in &&
                  (u.a.BIsEventBlocked(n)
                    ? r.push(
                        M.createElement(
                          Fe.d,
                          {
                            key: a.GID + "unmuteapp",
                            onSelected: this.OnUnMuteButton
                          },
                          M.createElement(
                            y.a,
                            {
                              toolTipContent: Object(P.d)(
                                "#EventCalendar_UnMuteApp_ttip"
                              )
                            },
                            Object(P.d)(
                              "#EventCalendar_UnMuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      )
                    : r.push(
                        M.createElement(
                          Fe.d,
                          {
                            key: a.GID + "muteapp",
                            onSelected: this.OnMuteButton
                          },
                          M.createElement(
                            y.a,
                            {
                              toolTipContent: Object(P.d)(
                                "#EventCalendar_MuteApp_ttip"
                              )
                            },
                            Object(P.d)(
                              "#EventCalendar_MuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      )),
                l.BIsSingleSourceCalendar() ||
                  (a.appid
                    ? r.push(
                        M.createElement(
                          Fe.d,
                          { key: a.GID + "goto", onSelected: this.GotoAppID },
                          Object(P.d)(
                            "#EventCalendar_Goto_SpecificCalendar",
                            n.GetEntityName()
                          )
                        )
                      )
                    : r.push(
                        M.createElement(
                          Fe.d,
                          { key: a.GID + "goto", onSelected: this.GotoGroupID },
                          Object(P.d)(
                            "#EventCalendar_Goto_SpecificCalendar",
                            n.GetEntityName()
                          )
                        )
                      ));
              var s =
                H.c.STORE_BASE_URL +
                "feeds/newshub/" +
                (a.appid
                  ? "app/" + a.appid
                  : "group/" + a.clanSteamID.GetAccountID()) +
                "/";
              r.push(
                M.createElement(
                  Fe.d,
                  {
                    key: a.GID + "rss",
                    onSelected: function(e) {
                      Object(S.b)(e, s);
                    }
                  },
                  Object(P.d)("#EventCalendar_Goto_RSSFeed", n.GetEntityName())
                )
              ),
                Object(He.a)(M.createElement(Fe.c, null, r), e);
            }),
            (t.prototype.render = function() {
              return M.createElement(
                "div",
                {
                  className: Object(R.a)(Ge.a.FooterStat, Ge.a.Options),
                  onClick: this.CreateContextMenu
                },
                M.createElement(A.N, null)
              );
            }),
            Object(B.c)([s.a], t.prototype, "OnMuteButton", null),
            Object(B.c)([s.a], t.prototype, "OnUnMuteButton", null),
            Object(B.c)([s.a], t.prototype, "HideAllEventsOfMyType", null),
            Object(B.c)([s.a], t.prototype, "AddContextMenuForSource", null),
            Object(B.c)([s.a], t.prototype, "RemoveFromWishlist", null),
            Object(B.c)([s.a], t.prototype, "AddToWishlist", null),
            Object(B.c)([s.a], t.prototype, "GotoAppID", null),
            Object(B.c)([s.a], t.prototype, "GotoGroupID", null),
            Object(B.c)([s.a], t.prototype, "CreateContextMenu", null),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        Ue = Object(i.h)(ze),
        Ve = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bVideoPlayerReady: !1 }), e;
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.OnFallbackClick = function(e) {
              Be.b.RecordAppInteractionEvent(
                this.props.calendarEvent.appid,
                Be.a.k_eClickThrough
              ),
                this.props.fnOnClicked(this.props.eventModel),
                e.stopPropagation(),
                e.preventDefault();
            }),
            (e.prototype.componentDidMount = function() {
              var e;
              this.props.calendarEvent.clanInfo &&
                ((e = L.a.InitFromClanID(
                  this.props.calendarEvent.clanInfo.clanid
                )),
                E.a.LoadOGGClanInfoForClanSteamID(e));
            }),
            (e.prototype.getVideoPreviewControl = function() {
              var e = this,
                t = this.props.eventModel,
                a = t.video_preview_type,
                n = t.video_preview_id;
              if (!n) return null;
              if (12 === this.props.eventModel.type) return null;
              if ("youtube" !== a) return null;
              var r = Object(ye.f)(H.c.LANGUAGE),
                o =
                  dt() && 14 == this.props.eventModel.GetEventType()
                    ? Ee.c.full
                    : Ee.c.capsule_main,
                i = this.props.eventModel.GetImageForSizeAsArrayWithFallback(
                  "capsule",
                  r,
                  o,
                  !0
                );
              return M.createElement(je, {
                video: n,
                altImgWithFallback: i,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                imageClassnames: Ge.a.YoutubePreviewImage,
                onPlayerActivated: function() {
                  Be.b.RecordAppInteractionEvent(
                    e.props.calendarEvent.appid,
                    Be.a.k_ePlayedVideo
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
                o = x.a.Get(),
                i = a.GetEntityName(),
                l = a.GetGameCapsule(),
                s = Object(ye.f)(H.c.LANGUAGE),
                c = t.has_live_stream,
                d = t.has_live_stream,
                p =
                  dt() && 14 == t.GetEventType()
                    ? Ee.c.full
                    : Ee.c.capsule_main,
                u = "capsule",
                m = t.BImageNeedScreenshotFallback(u, s),
                h = Boolean(m && t.appid)
                  ? t.GetFallbackArtworkScreenshot()
                  : t.GetImageURLWithFallback(u, s, p),
                v = this.getVideoPreviewControl(),
                _ = !v && !r,
                b = t.GetCategoryAsString(),
                g = Ge.a["EventType" + t.GetEventType()],
                y = t.GetAllTags().map(function(e) {
                  return Ge.a["Tag-" + e];
                }),
                E = R.a.apply(
                  void 0,
                  Object(B.g)(
                    [
                      Ge.a.TileContainer,
                      g,
                      c && Ge.a.TileVideoIcon,
                      n ? Ge.a.DisableHovers : Ge.a.EnableHovers,
                      this.state.bVideoPlayerReady && Ge.a.VideoPlayerReady,
                      v && Ge.a.HasVideo,
                      o.HasEventBeenRead(t.GID) && Ge.a.HasBeenRead,
                      r && Ge.a.MiniMode
                    ],
                    y
                  )
                ),
                S = t.GetNameWithFallback(s),
                f = t.GetSubTitleWithLanguageFallback(s),
                C = t.GetSummaryWithFallback(s);
              f === C && (C = void 0), f === S && (f = void 0);
              var O =
                  28 !== t.type &&
                  12 !== t.type &&
                  j.a.GetTimeNowWithOverride() <
                    t.GetStartTimeAndDateUnixSeconds(),
                w = M.createElement(
                  "div",
                  { className: Ge.a.CoverImageCtn },
                  v,
                  _ &&
                    M.createElement(
                      M.Fragment,
                      null,
                      12 === t.type &&
                        M.createElement(
                          "div",
                          { className: Ge.a.GameCapsuleCtn },
                          M.createElement("div", {
                            className: Ge.a.AppBannerLogo,
                            style: { backgroundImage: "url(" + l + ")" }
                          })
                        ),
                      12 !== t.type &&
                        M.createElement(
                          "div",
                          {
                            className: Object(R.a)(
                              Ge.a.EventCapsuleCtn,
                              c && Ge.a.LiveBroadcastPreview
                            )
                          },
                          M.createElement("div", {
                            className: Object(R.a)(
                              Ge.a.TileImage,
                              m && Ge.a.FallbackImage
                            ),
                            style: { backgroundImage: "url(" + h + ")" }
                          }),
                          c &&
                            M.createElement("div", {
                              className: Ge.a.TileCoverImagePlayable
                            }),
                          d &&
                            M.createElement(
                              "div",
                              { className: Ge.a.TileCoverLiveIcon },
                              Object(P.d)("#home_page_live_broadcast")
                            ),
                          c &&
                            M.createElement(
                              "div",
                              { className: "VideoHintText" },
                              Object(P.d)("#EventCalendar_WatchLiveBroadcast")
                            )
                        )
                    )
                ),
                T = n && 14 != t.GetEventType() && !v,
                I = T && w,
                k = !T && w,
                D = r || n;
              return M.createElement(
                "div",
                { className: E },
                M.createElement(ge.a, { event: t, recordNewsHubStats: !0 }),
                M.createElement(
                  Le.c,
                  { eventModel: t, route: Le.a.k_eView },
                  M.createElement(
                    "div",
                    { className: Ge.a.Tile, onClick: this.OnFallbackClick },
                    14 === t.type &&
                      M.createElement("div", {
                        className: Object(R.a)(
                          Ge.a.TileBackgroundImage,
                          m && Ge.a.FallbackImage
                        ),
                        style: { backgroundImage: "url(" + h + ")" }
                      }),
                    M.createElement(
                      "div",
                      { className: Ge.a.MainContentContainer },
                      M.createElement(
                        "div",
                        { className: Ge.a.TileTextContainer },
                        M.createElement(
                          "div",
                          { className: Ge.a.PatchIconCtn },
                          M.createElement(A.G, null)
                        ),
                        M.createElement(
                          "div",
                          { className: Ge.a.EventTitleCtn },
                          I,
                          !this.props.bHideGameTitle &&
                            M.createElement(We, Object(B.a)({}, this.props)),
                          M.createElement(
                            "div",
                            { className: Ge.a.EventTypeAndDateCtn },
                            12 === t.type &&
                              !this.props.bHideGameTitle &&
                              M.createElement(
                                "div",
                                { className: Ge.a.SmallAppName },
                                i
                              ),
                            M.createElement(
                              "div",
                              {
                                className: Object(R.a)(
                                  Ge.a.TileTextCategoryType,
                                  g
                                )
                              },
                              b
                            ),
                            M.createElement(Ze, { eventModel: t })
                          ),
                          M.createElement(
                            "div",
                            { className: Ge.a.EventName },
                            S
                          ),
                          f &&
                            M.createElement(
                              "div",
                              { className: Ge.a.EventSubTitle },
                              f
                            ),
                          12 !== t.type &&
                            C &&
                            M.createElement(
                              "div",
                              {
                                className: Object(R.a)(
                                  Ge.a.EventSummaryDefault,
                                  f ? Ge.a.SubTitleShown : ""
                                )
                              },
                              C
                            ),
                          M.createElement(
                            "div",
                            {
                              className: Object(R.a)(
                                Ge.a.EventTypeAndDateCtn,
                                Ge.a.Mobile
                              )
                            },
                            12 === t.type &&
                              !this.props.bHideGameTitle &&
                              M.createElement(
                                "div",
                                { className: Ge.a.SmallAppName },
                                i
                              ),
                            M.createElement(
                              "div",
                              { className: Ge.a.TileTextCategoryType },
                              b
                            ),
                            M.createElement(Ze, { eventModel: t })
                          )
                        ),
                        O &&
                          M.createElement(
                            "div",
                            { className: Ge.a.ReminderContainer },
                            M.createElement(be.a, {
                              eventModel: t,
                              eventGID: t.GID,
                              lang: s,
                              bShowStartTime: !0,
                              bOnlyShowIcon: D
                            })
                          )
                      ),
                      k
                    )
                  )
                ),
                M.createElement(Ye, Object(B.a)({}, this.props))
              );
            }),
            Object(B.c)([s.a], e.prototype, "OnFallbackClick", null),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        We = function(e) {
          function t(e) {
            Object(Le.g)(a, Le.a.k_eStoreOwnerPage),
              e.stopPropagation(),
              e.preventDefault();
          }
          var a = e.eventModel,
            n = e.calendarEvent,
            r = e.bSuppressHoverEffects,
            o = n.GetEntityName(),
            i = n.GetGameIcon(),
            l = r
              ? M.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      Ge.a.TileGameCapsule,
                      Ge.a.DisableHovers
                    ),
                    onClick: t
                  },
                  M.createElement("img", { className: Ge.a.AppIcon, src: i }),
                  M.createElement("div", { className: Ge.a.TileTextAppName }, o)
                )
              : M.createElement(
                  "div",
                  { onClick: t },
                  M.createElement(
                    Me.b,
                    {
                      hoverClassName: Object(R.a)(
                        Ge.a.TileGameCapsule,
                        Ge.a.EnableHovers
                      ),
                      type: "app",
                      id: n.appid
                    },
                    M.createElement("img", { className: Ge.a.AppIcon, src: i }),
                    M.createElement(
                      "div",
                      { className: Ge.a.TileTextAppName },
                      o
                    )
                  )
                );
          return M.createElement(
            "div",
            { className: Ge.a.TileTextHeader },
            l,
            n.GetSource() === Se.a.k_eRecommended &&
              M.createElement(
                "div",
                { className: Ge.a.SourceRecommended },
                Object(P.d)("#EventCalendar_GameSource_recommended_Verbose")
              )
          );
        },
        Ze = Object(r.a)(function(e) {
          var t = e.eventModel,
            a = e.calendarEvent,
            n = j.a.GetTimeNowWithOverride(),
            r = t ? t.GetStartTimeAndDateUnixSeconds() : a.start_time,
            o = t ? t.GetPostTimeAndDateUnixSeconds() : a.start_time,
            i = t && Object(Ae.a)(t.type) && t.GetEndTimeAndDateUnixSeconds();
          if (i && r < n && n < i) {
            var l = i - n,
              s = Object(P.n)(l, !0);
            return M.createElement(
              "div",
              { className: Ge.a.LiveText },
              M.createElement(
                fe.e,
                { rtFullDate: r, stylesmodule: Ge.a },
                M.createElement(
                  "div",
                  { className: Ge.a.LiveNow },
                  Object(P.d)("#EventCalendar_LiveNow")
                )
              ),
              M.createElement(
                fe.e,
                { rtFullDate: i, stylesmodule: Ge.a },
                Object(P.d)("#EventCalendar_TimeLeft", s)
              )
            );
          }
          if (r < n) {
            var c = n - r,
              d = c < 86400 ? Object(P.n)(c) : Object(P.m)(r),
              p = 3600 < Math.abs(r - o);
            return M.createElement(
              fe.e,
              { rtFullDate: r, stylesmodule: Ge.a },
              M.createElement(
                "div",
                { className: Ge.a.PastDateText },
                p ? Object(P.d)("#EventCalendar_StartedAtTime", d) : d
              )
            );
          }
          var u = (l = r - n) < 86400;
          return M.createElement(
            fe.e,
            { rtFullDate: r, stylesmodule: Ge.a },
            M.createElement(
              "div",
              { className: Ge.a.FutureDateText },
              u
                ? Object(P.d)(
                    "#EventCalendar_WillStartAfterDuration",
                    Object(P.n)(l, !0)
                  )
                : Object(P.d)("#EventCalendar_WillStartAtTime", Object(P.m)(r))
            )
          );
        });
      var Ye = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.OnPerformVoteUp = function() {
              var e = this.props.eventModel,
                t = x.a.Get();
              !0 !== t.GetPreviouslyLoadedVote(this.props.eventModel) &&
                Object(_e.a)(e, t) &&
                (t.Vote(e, !0, g.a.CancelToken.source()),
                Be.b.RecordAppInteractionEvent(e.appid, Be.a.k_eThumbsUp));
            }),
            (t.prototype.OnDiscussionClicked = function() {
              var e = this.props.eventModel;
              Be.b.RecordAppInteractionEvent(e.appid, Be.a.k_eDiscussions);
            }),
            (t.prototype.render = function() {
              var e,
                t = x.a.Get(),
                a = this.props.eventModel,
                n = Math.max(0, a.nVotesUp - a.nVotesDown),
                r = t.GetPreviouslyLoadedVote(this.props.eventModel),
                o = ((e = r),
                t.BIsUserLoggedIn()
                  ? H.i.is_limited
                    ? Ge.a.Vote_LimitedUser
                    : !0 === e
                    ? Ge.a.Vote_Positive
                    : !1 === e
                    ? Ge.a.Vote_Negative
                    : Ge.a.Vote_Ready
                  : Ge.a.Vote_NotLoggedIn),
                i =
                  (H.c.IN_CLIENT ? "steam://openurl/" : "") +
                  a.GetForumTopicURL(),
                l =
                  0 < a.live_stream_viewer_count
                    ? a.live_stream_viewer_count
                    : void 0;
              return M.createElement(
                "div",
                { className: Ge.a.Footer },
                M.createElement(
                  "div",
                  { className: Ge.a.FooterRightSide },
                  Boolean(l) &&
                    M.createElement(
                      "div",
                      { className: Ge.a.TileViewerCount },
                      l.toLocaleString(P.c.GetPreferredLocales())
                    ),
                  M.createElement(
                    "div",
                    {
                      className: Object(R.a)(Ge.a.FooterStat, Ge.a.Vote, o),
                      onClick: this.OnPerformVoteUp
                    },
                    M.createElement(A.S, { className: Ge.a.RateIcon }),
                    M.createElement("span", null, Number(n).toLocaleString())
                  ),
                  M.createElement(
                    "div",
                    { className: Ge.a.FooterStat },
                    M.createElement(
                      "a",
                      {
                        href: i,
                        className: Ge.a.CommentIconCtn,
                        target: "_blank",
                        onClick: this.OnDiscussionClicked
                      },
                      M.createElement(A.n, { className: Ge.a.CommentIcon }),
                      M.createElement(
                        "span",
                        null,
                        Number(a.nCommentCount).toLocaleString()
                      )
                    )
                  ),
                  M.createElement(Ue, Object(B.a)({}, this.props))
                )
              );
            }),
            Object(B.c)([s.a], t.prototype, "OnPerformVoteUp", null),
            Object(B.c)([s.a], t.prototype, "OnDiscussionClicked", null),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        qe = Object(r.a)(function(t) {
          var e = t.calendarEvent,
            a = Ge.a["EventType" + e.event_type],
            n = Object(R.a)(Ge.a.TileContainer, a);
          return M.createElement(
            ve.a,
            {
              onEnter: function() {
                var e;
                t.partnerEventStore.QueueLoadPartnerEvent(
                  t.calendarEvent.clanid,
                  t.calendarEvent.unique_id
                ),
                  t.calendarEvent.appid &&
                    _.a.GetStoreCapsuleInfo(t.calendarEvent.appid),
                  t.calendarEvent.clanInfo &&
                    ((e = L.a.InitFromClanID(t.calendarEvent.clanInfo.clanid)),
                    E.a.LoadOGGClanInfoForClanSteamID(e));
              },
              topOffset: "-500px",
              bottomOffset: "-500px"
            },
            M.createElement(
              "div",
              { className: n },
              M.createElement("div", { className: Ge.a.Tile }),
              M.createElement("div", { className: Ge.a.Footer })
            )
          );
        }),
        Je = Object(r.a)(function(e) {
          var t = e.partnerEventStore,
            a = e.calendarEvent,
            n = Object(B.f)(e, ["partnerEventStore", "calendarEvent"]),
            r = t.GetClanEventModel(a.unique_id);
          return r
            ? M.createElement(
                Ve,
                Object(B.a)({ eventModel: r, calendarEvent: a }, n)
              )
            : M.createElement(qe, { calendarEvent: a, partnerEventStore: t });
        }),
        Qe = a("UWWC"),
        Ke = a("JJA/"),
        Xe = a("xnZ7"),
        $e = a.n(Xe),
        et = a("bDQf"),
        tt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoading: !1, eventModel: e.props.eventModel }),
              (e.m_refParent = M.createRef()),
              e
            );
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.state.eventModel ||
                this.setState({ bLoading: !0 }, this.LoadEvent);
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.add(Ke.BodyNoScroll);
            }),
            (e.prototype.componentWillUnmount = function() {
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.remove(Ke.BodyNoScroll);
            }),
            (e.prototype.GetBodyElement = function() {
              return this.m_refParent.current
                ? this.m_refParent.current.closest("body")
                : null;
            }),
            (e.prototype.LoadEvent = function() {
              return Object(B.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r = this;
                return Object(B.e)(this, function(e) {
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
                        var t = Object(et.a)(e);
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
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(B.e)(this, function(e) {
                  return (
                    (t = this.state.eventModel),
                    (a = this.props.trackingLocation),
                    t &&
                      t.BIsPartnerEvent() &&
                      x.a
                        .Get()
                        .GetTracker()
                        .MarkEventRead(
                          t.GID,
                          t.clanSteamID.GetAccountID(),
                          a
                        ) &&
                      x.a
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
                return M.createElement(
                  Re.h,
                  null,
                  M.createElement(
                    "div",
                    { className: $e.a.FlexCenter, style: { height: "400px" } },
                    M.createElement(de.a, null)
                  )
                );
              var e = this.props,
                t = e.classname,
                a = e.partnerEventStore,
                n = e.bPrimaryPageFeature;
              if (this.state.eventModel) {
                var r = M.createElement(
                  "div",
                  null,
                  M.createElement(ue.a, {
                    initialEvent: this.state.eventModel,
                    partnerEventStore: a,
                    emoticonStore: Qe.b,
                    appInfoStore: p.a,
                    closeModal: !n && this.props.closeModal,
                    showAppHeader: this.props.showAppHeader
                  })
                );
                return n ? r : M.createElement(Re.h, { className: t }, r);
              }
              return null;
            }),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        at = a("s4NR"),
        nt = a.n(at);
      function rt(e, t) {
        var a = "location" in e ? e.location : e,
          n = "search" in a ? a.search : a,
          r = nt.a.parse(n.substring(1))[t];
        return r && Array.isArray(r) ? r[r.length - 1] : r;
      }
      function ot(e, t, a) {
        var n = nt.a.parse(e.location.search.substring(1));
        null == a ? delete n[t] : (n[t] = a), e.push("?" + nt.a.stringify(n));
      }
      var it = a("BFsE"),
        lt = "global_header";
      function st() {
        var e = document.getElementById(lt);
        if (e && "none" != getComputedStyle(e).display) return e;
        var t = document.getElementsByClassName("responsive_header");
        return (
          Object(pe.a)(
            t.length <= 1,
            "Must have at most one responsive_header"
          ),
          1 != t.length ? null : t[0]
        );
      }
      function ct() {
        var e = st();
        return e && e.id != lt;
      }
      function dt() {
        return window.innerWidth < parseInt(F.a.strMaxMobileWidth);
      }
      function pt() {
        return (
          ct() ||
          window.innerWidth <
            parseInt(F.a.strDesktopControlBarWidth) +
              parseInt(F.a.strMaxMobileWidth)
        );
      }
      var ut,
        mt,
        ht = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUserIsLoggedIn: H.i.logged_in,
                nVisibleHeight: 0,
                nScrollTop: 0,
                bControlBarIsCollapsed: pt(),
                bControlBarWasOpenedByUser: !1,
                nDisappearingHeaderTop: 0,
                nSteamNavHeaderHeight: 0,
                nMobileNavBannerHeight: 0,
                nHubBannerHeight: 0,
                nGroupHeaderHeight: 0
              }),
              (e.m_refControlBar = M.createRef()),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          var c;
          return (
            Object(B.d)(e, t),
            ((c = e).prototype.componentDidMount = function() {
              this.InitEventCalendarStore(),
                this.UpdateDocumentUI(),
                window.addEventListener("resize", this.OnResize),
                window.addEventListener("scroll", this.OnScroll),
                this.setState({ nVisibleHeight: window.innerHeight }),
                window.scrollTo(0, 0);
            }),
            (e.prototype.componentDidUpdate = function(e, t) {
              (t.bUserIsLoggedIn == this.state.bUserIsLoggedIn &&
                JSON.stringify(e.filter_to_appids) ==
                  JSON.stringify(this.props.filter_to_appids) &&
                JSON.stringify(e.filter_to_clanids) ==
                  JSON.stringify(this.props.filter_to_clanids) &&
                e.filter_to_collection === this.props.filter_to_collection) ||
                (window.scrollTo(0, 0), this.InitEventCalendarStore()),
                this.UpdateDocumentUI(),
                this.LoadEventToShowAsModal();
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("component unmounted"),
                window.removeEventListener("resize", this.OnResize),
                window.removeEventListener("scroll", this.OnScroll),
                this.UpdateBodyScrollState(!0);
            }),
            (e.prototype.GetCurrentHubBannerHeight = function(e) {
              if (!Object(D.a)().BIsSingleSourceCalendar()) return 0;
              var t = e && !dt();
              return (
                parseInt(
                  t
                    ? F.a.strJumboHubBannerHeight
                    : F.a.strDesktopHubBannerHeight
                ) - 1
              );
            }),
            (e.prototype.GetCurrentHeaderHeights = function() {
              var e = ct(),
                t = dt(),
                a = 0;
              st() &&
                ((a = parseInt(
                  e
                    ? F.a.strMobileGlobalHeaderHeight
                    : F.a.strDesktopGlobalHeaderHeight
                )),
                --a);
              var n =
                parseInt(
                  t
                    ? F.a.strMobileGroupHeaderHeight
                    : F.a.strDesktopGroupHeaderHeight
                ) - 1;
              return {
                nSteamNavHeaderHeight: a,
                nMobileNavBannerHeight:
                  (e ? parseInt(F.a.strMobileNavBannerHeight) : 0) - 1,
                nHubBannerHeight: this.GetCurrentHubBannerHeight(
                  this.state.nScrollTop <= 0
                ),
                nGroupHeaderHeight: n
              };
            }),
            (e.prototype.LoadEventToShowAsModal = function() {
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return ((t = rt(this.props.location, "emclan")),
                      (a = rt(this.props.location, "emgid")),
                      t && a)
                        ? ((n = new L.a(t)),
                          this.state.modalEvent &&
                          this.state.modalEvent.clanSteamID.ConvertTo64BitString() ==
                            n.ConvertTo64BitString() &&
                          this.state.modalEvent.GID == a
                            ? [2]
                            : [
                                4,
                                N.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                                  n,
                                  a,
                                  0
                                )
                              ])
                        : [3, 2];
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
              var e = rt(this.props.location, "upcoming");
              return e && "false" != e;
            }),
            (e.prototype.UpdateDocumentUI = function() {
              var e,
                t,
                a,
                n,
                r,
                o = Object(D.a)();
              o.BIsSingleAppCalendar()
                ? (a =
                    (t =
                      (e = o.GetSingleAppID()) &&
                      _.a.GetStoreCapsuleInfo(e).GetAppStoreData()) && t.title)
                : o.BIsSingleGroupCalendar()
                ? (a =
                    (r =
                      (n = o.GetSingleGroupID()) &&
                      E.a.GetClanInfoByClanAccountID(n)) && r.group_name)
                : o.BIsCollectionCalendar();
              var i = a
                ? Object(P.d)("#EventCalendar_TabTitle_GroupHub", a)
                : Object(P.d)("#EventCalendar_TabTitle_Global");
              document.title != i && (document.title = i),
                document.body.classList.contains("events_hub") ||
                  document.body.classList.add("events_hub");
            }),
            (e.prototype.OnResize = function() {
              var r = this;
              this.setState(function(e) {
                var t = window.innerHeight,
                  a = !e.bControlBarWasOpenedByUser && pt(),
                  n = r.GetCurrentHeaderHeights();
                return (
                  r.UpdateBodyScrollState(a),
                  Object(B.a)(
                    { nVisibleHeight: t, bControlBarIsCollapsed: a },
                    n
                  )
                );
              });
            }),
            (e.prototype.OnScroll = function() {
              var s = this,
                c = Math.round(window.scrollY);
              this.setState(function(e) {
                var t = e.nScrollTop <= 0,
                  a = c <= 0,
                  n = e.nHubBannerHeight;
                if (
                  (t != a && (n = s.GetCurrentHubBannerHeight(a)),
                  Math.abs(c - e.nScrollTop) < 2)
                )
                  return {
                    nScrollTop: c,
                    nDisappearingHeaderTop: e.nDisappearingHeaderTop,
                    nHubBannerHeight: n
                  };
                var r = c > e.nScrollTop,
                  o = e.nSteamNavHeaderHeight + n + e.nMobileNavBannerHeight,
                  i =
                    (r && o < c && s.state.bControlBarIsCollapsed) ||
                    !!e.modalEvent
                      ? -1 * o
                      : 0,
                  l = st();
                return (
                  l && (l.style.transform = "translateY(" + i + "px)"),
                  {
                    nScrollTop: c,
                    nDisappearingHeaderTop: i,
                    nHubBannerHeight: n
                  }
                );
              });
            }),
            (e.prototype.InitEventCalendarStore = function() {
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        c.m_bInitialLoad,
                        (t = {
                          appids: this.props.filter_to_appids,
                          clanaccountids: this.props.filter_to_clanids,
                          collectionid: this.props.filter_to_collection
                        }),
                        (a = Object(D.b)(t)),
                        (n = Object(D.a)()),
                        (r = Boolean(
                          this.state.bUserIsLoggedIn && H.i.accountid
                        )),
                        (o = n.BIsGlobalCalendar() && r ? "local" : "session"),
                        (i = n.BIsGlobalCalendar() ? "U" + H.i.accountid : a),
                        n.m_visibilityStore.Init(r, i, o),
                        (l = !n.BIsCollectionCalendar()),
                        n.SetFilteredView(function(e) {
                          return n.m_visibilityStore.BShouldDisplayEvent(e);
                        }, l),
                        (s =
                          c.m_bInitialLoad &&
                          Object(H.f)("initialEvents", "application_config"))
                          ? [4, n.RegisterCalendarEventsAndModels(s)]
                          : [3, 2]
                      );
                    case 1:
                      return e.sent(), (c.m_bInitialLoad = !1), [3, 4];
                    case 2:
                      return [
                        4,
                        n.RegisterCalendarEventsAndModels({ success: 1 })
                      ];
                    case 3:
                      e.sent(), (e.label = 4);
                    case 4:
                      return (
                        n.BIsSingleSourceCalendar() &&
                          (n.BIsSingleAppCalendar()
                            ? _.a
                                .GetStoreCapsuleInfo(n.GetSingleAppID())
                                .HintLoadBroadcastAppData()
                            : E.a.LoadOGGClanInfoForClanSteamID(
                                L.a.InitFromClanID(n.GetSingleGroupID())
                              )),
                        this.OnResize(),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.UpdateBodyScrollState = function(e) {
              var t = !e && ct(),
                a = document.body;
              a &&
                (t
                  ? a.classList.add(F.a.BodyNoScroll)
                  : a.classList.remove(F.a.BodyNoScroll));
            }),
            (e.prototype.MobileNavOpenSettings = function() {
              this.ToggleControlBarCollapsed(),
                this.m_refControlBar.current &&
                  this.m_refControlBar.current.OpenFilterSettings(!0);
            }),
            (e.prototype.ToggleControlBarCollapsed = function() {
              var o = this;
              this.setState(function(e) {
                var t = !e.bControlBarIsCollapsed,
                  a = e.bControlBarIsCollapsed,
                  n = t ? e.nDisappearingHeaderTop : 0,
                  r = st();
                return (
                  r && (r.style.transform = "translateY(" + n + "px)"),
                  o.UpdateBodyScrollState(t),
                  {
                    bControlBarIsCollapsed: t,
                    bControlBarWasOpenedByUser: a,
                    nDisappearingHeaderTop: n
                  }
                );
              });
            }),
            (e.prototype.OnControlBarChange = function() {
              window.scrollTo(0, 0);
            }),
            (e.prototype.CloseEventModal = function() {
              var e = st();
              e &&
                (e.style.transform =
                  "translateY(" + this.state.nDisappearingHeaderTop + "px)"),
                this.props.history.goBack();
            }),
            (e.prototype.OnEventClicked = function(e) {
              x.a.Get().RecordEventRead(e, 8);
              var t,
                a =
                  this.state.nSteamNavHeaderHeight +
                  this.state.nHubBannerHeight +
                  this.state.nMobileNavBannerHeight,
                n = st();
              n && (n.style.transform = "translateY(" + -1 * a + "px)"),
                j.a.bOpenEventLandingPage
                  ? ((t = "/newshub/app/" + e.appid + "/view/" + e.GID),
                    this.props.history.push(t))
                  : (function(e, t) {
                      var a,
                        n = nt.a.parse(e.location.search.substring(1));
                      for (var r in t) {
                        t.hasOwnProperty(r) &&
                          (null == (a = t[r]) ? delete n[r] : (n[r] = a));
                      }
                      e.push("?" + nt.a.stringify(n));
                    })(this.props.history, {
                      emclan: e.clanSteamID.ConvertTo64BitString(),
                      emgid: e.GID
                    });
            }),
            (e.prototype.ToggleFutureView = function() {
              ot(
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
                  this.state.nSteamNavHeaderHeight +
                  this.state.nHubBannerHeight +
                  this.state.nMobileNavBannerHeight,
                t = this.state.nDisappearingHeaderTop,
                a = t + this.state.nSteamNavHeaderHeight,
                n = a + this.state.nMobileNavBannerHeight,
                r =
                  this.state.nVisibleHeight <= parseInt(F.a.strMinMobileHeight),
                o = r
                  ? 0
                  : this.state.nDisappearingHeaderTop +
                    this.state.nSteamNavHeaderHeight,
                i = r ? 0 : this.state.nDisappearingHeaderTop + e;
              return M.createElement(
                M.Fragment,
                null,
                M.createElement(
                  "div",
                  { className: F.a.EventCalendarContainer },
                  M.createElement(
                    b.a,
                    null,
                    this.state.modalEvent
                      ? M.createElement(tt, {
                          classname: F.a.StoreHeaderAdjust,
                          appid: this.state.modalEvent.appid,
                          trackingLocation: 0,
                          announcementGID: this.state.modalEvent.GetAnnouncementGID(),
                          partnerEventStore: N.c,
                          eventModel: this.state.modalEvent,
                          showAppHeader: !0,
                          closeModal: this.CloseEventModal
                        })
                      : null
                  ),
                  M.createElement(
                    b.a,
                    null,
                    M.createElement(K, {
                      ref: this.m_refControlBar,
                      bUserIsLoggedIn: this.state.bUserIsLoggedIn,
                      nDisappearingHeaderVisibleHeight: o,
                      nGlobalHeaderTop: t,
                      bIsCollapsed: this.state.bControlBarIsCollapsed,
                      bShowUpcoming: this.BShowFutureView(),
                      bShouldIncludeLegalFooter: !ct(),
                      fnToggleCollapsed: this.ToggleControlBarCollapsed,
                      fnOnFilterChange: this.OnControlBarChange
                    })
                  ),
                  M.createElement(
                    b.a,
                    null,
                    M.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          F.a.ReserveControlSpace,
                          !this.state.bControlBarIsCollapsed &&
                            F.a.WideLeftGutter
                        )
                      },
                      M.createElement(
                        b.a,
                        null,
                        0 < this.state.nMobileNavBannerHeight &&
                          M.createElement(se, {
                            bIsUpcoming: this.BShowFutureView(),
                            nTopOffset: a,
                            fnToggleCollapsed: this.MobileNavOpenSettings
                          }),
                        M.createElement(_t, {
                          nTopOffset: n,
                          bLargeMode: this.state.nScrollTop <= 0 && !dt()
                        })
                      ),
                      Boolean(
                        !this.BRequireLoggedInUser() ||
                          this.state.bUserIsLoggedIn
                      )
                        ? M.createElement(
                            b.a,
                            null,
                            M.createElement(bt, {
                              bShowFutureViewOnly: this.BShowFutureView(),
                              fnOnEventClick: this.OnEventClicked,
                              fnToggleSeeFuture: this.ToggleFutureView,
                              nVisibleHeight: this.state.nVisibleHeight,
                              nScrollTop: this.state.nScrollTop,
                              nDisappearingHeaderHeight: e,
                              nDisappearingHeaderVisibleHeight: i,
                              nGroupHeaderHeight: this.state.nGroupHeaderHeight
                            })
                          )
                        : M.createElement(
                            b.a,
                            null,
                            M.createElement(
                              "div",
                              { className: F.a.LoginPrompt },
                              Object(P.d)("#EventCalendar_MainLoginPrompt"),
                              M.createElement(
                                "button",
                                { onClick: it.a, className: F.a.LoginButton },
                                Object(P.d)("#Login_SignIn")
                              )
                            )
                          )
                    )
                  )
                )
              );
            }),
            (e.m_bInitialLoad = !0),
            Object(B.c)([s.a], e.prototype, "OnResize", null),
            Object(B.c)([s.a], e.prototype, "OnScroll", null),
            Object(B.c)([s.a], e.prototype, "MobileNavOpenSettings", null),
            Object(B.c)([s.a], e.prototype, "ToggleControlBarCollapsed", null),
            Object(B.c)([s.a], e.prototype, "OnControlBarChange", null),
            Object(B.c)([s.a], e.prototype, "CloseEventModal", null),
            Object(B.c)([s.a], e.prototype, "OnEventClicked", null),
            Object(B.c)([s.a], e.prototype, "ToggleFutureView", null),
            (e = c = Object(B.c)([r.a], e))
          );
        })(M.Component),
        vt = Object(i.h)(ht),
        _t = function(e) {
          if (!Object(D.a)().BIsSingleSourceCalendar()) return null;
          var t = Object(D.a)().BIsSingleAppCalendar()
              ? Object(D.a)().GetSingleAppID()
              : void 0,
            a = Object(D.a)().BIsSingleGroupCalendar()
              ? Object(D.a)().GetSingleGroupID()
              : void 0,
            n = Object(R.a)(
              F.a.HubBanner,
              he.a.WideBanner,
              e.bLargeMode && F.a.LargeMode,
              e.bLargeMode && he.a.TallBanner
            );
          return M.createElement(
            "div",
            {
              style: { transform: "translateY(" + e.nTopOffset + "px)" },
              className: n
            },
            M.createElement(ue.b, { appInfoStore: p.a, appId: t, clanId: a })
          );
        },
        bt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.GetCurrentSectionLayout = function() {
              var t = this.props.nDisappearingHeaderHeight;
              return Object(D.a)()
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
              e.nRenderedHeight != t && (e.nRenderedHeight = t);
            }),
            (t.prototype.render = function() {
              var g = this,
                e = this.props,
                y = e.bShowFutureViewOnly,
                E = e.fnOnEventClick,
                S = e.fnToggleSeeFuture,
                t = e.nVisibleHeight,
                f = e.nScrollTop,
                C = e.nDisappearingHeaderVisibleHeight,
                a = e.nDisappearingHeaderHeight,
                O = e.nGroupHeaderHeight,
                n = Object(D.a)().GetCalendarSections(y);
              if (0 == n.length) return null;
              var w = dt(),
                r = Object(D.a)().m_visibilityStore.BAreAllEventsHidden(),
                T = f + C,
                I = f + t,
                k = !0,
                o = r
                  ? []
                  : this.GetCurrentSectionLayout().map(function(e) {
                      var t = e.section,
                        a = e.nTopOfSection,
                        n = e.nBottomOfSection,
                        r = t.strId,
                        o = t.strSectionLabel,
                        i = t.rtSectionStart,
                        l = t.rtSectionEnd,
                        s = t.bIsFutureSection,
                        c = t.nRenderedHeight,
                        d = Math.max(0, T - n),
                        p = Math.max(0, a - I),
                        u = g.props.nVisibleHeight > Math.max(d, p),
                        m = a < T,
                        h = n - f - O,
                        v = m ? Math.min(C - 1, h) : -1,
                        _ = Object(R.a)(
                          F.a.PastSection,
                          k && F.a.DarkerBackground
                        );
                      0 < c && (k = !k);
                      var b = !y && s;
                      return M.createElement(
                        yt,
                        {
                          key: r,
                          bShouldRenderContents: u,
                          bRenderStickyHeader: m,
                          nExtraHeaderOffset: v,
                          strSectionLabel: o,
                          rtSectionStart: i,
                          rtSectionEnd: l,
                          strSectionClassname: _,
                          bUseHorizontalLayout: b,
                          fnOnSeeFutureClick: S,
                          bShowEarliestFirst: y || b,
                          nInitialHeight: c,
                          fnReportHeight: function(e) {
                            return g.RecordSectionRenderedHeight(t, e);
                          },
                          fnOnEventClick: E,
                          bSuppressHoverEffects: w
                        },
                        " "
                      );
                    }),
                i = n[0].rtSectionStart,
                l = Object(D.a)().GetCurrentlyLoadedEventCount(0, i),
                s = Object(D.a)().GetCurrentlyLoadedEventCount(i),
                c = y
                  ? s.nCount
                    ? "#EventCalendar_NoMoreFutureEvents"
                    : "#EventCalendar_NoFutureEvents"
                  : l.nCount
                  ? "#EventCalendar_NoMorePastEvents"
                  : "#EventCalendar_NoPastEvents",
                d = r
                  ? M.createElement(
                      "div",
                      {
                        key: "all-options-disabled",
                        className: Object(R.a)(F.a.EndOfRows, F.a.CalendarRow)
                      },
                      M.createElement(
                        "div",
                        { className: F.a.NoMoreRows },
                        " ",
                        Object(P.d)("#EventCalendar_EmptyCalendar"),
                        " "
                      )
                    )
                  : M.createElement(
                      M.Fragment,
                      null,
                      M.createElement(
                        "div",
                        {
                          key: "no-more-events",
                          className: Object(R.a)(F.a.EndOfRows, F.a.CalendarRow)
                        },
                        M.createElement(
                          "div",
                          { className: F.a.NoMoreRows },
                          " ",
                          Object(P.d)(c),
                          " "
                        )
                      ),
                      y &&
                        l &&
                        M.createElement(
                          "div",
                          {
                            key: "link-back",
                            className: F.a.BackToThePast,
                            onClick: S
                          },
                          Object(P.d)("#EventCalendar_PastEventsLink"),
                          M.createElement(
                            "span",
                            { className: F.a.SeeAllCount },
                            l.nCount + (l.bIsComplete ? "" : "+")
                          )
                        )
                    );
              return M.createElement(
                "div",
                { className: F.a.RowContainer },
                M.createElement(
                  "div",
                  { className: F.a.Rows },
                  M.createElement("div", {
                    className: F.a.FutureSection,
                    key: "spacer",
                    style: { height: a }
                  }),
                  o,
                  d
                )
              );
            }),
            Object(B.c)(
              [s.a],
              t.prototype,
              "RecordSectionRenderedHeight",
              null
            ),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        gt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.rgCalendarItems,
                a = e.fnOnEventClick,
                n = e.fnOnSeeFutureClick,
                r = e.bSuppressHoverEffects;
              if (!t || 0 == t.length) return null;
              var o = t[0].start_time,
                i = Object(D.a)().GetCurrentlyLoadedEventCount(o);
              return M.createElement(
                "div",
                { className: F.a.CalendarRow },
                M.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      F.a.HorizontalTileContainer,
                      "HorizontalTileCtn"
                    )
                  },
                  M.createElement(
                    "div",
                    { className: F.a.HorizontalTiles },
                    t.map(function(e) {
                      return M.createElement(Je, {
                        key: "ht-" + e.unique_id,
                        calendarEvent: e,
                        partnerEventStore: N.c,
                        fnOnClicked: a,
                        bSuppressHoverEffects: r,
                        bMiniMode: 1 < t.length,
                        bHideGameTitle: Object(D.a)().BIsSingleSourceCalendar()
                      });
                    })
                  ),
                  1 < t.length &&
                    M.createElement(
                      "div",
                      {
                        key: "see-all-link",
                        className: F.a.MobileSeeAllink,
                        onClick: n
                      },
                      Object(P.d)("#EventCalendar_FutureEventsLink"),
                      M.createElement(
                        "span",
                        { className: F.a.SeeAllCount },
                        i.nCount + (i.bIsComplete ? "" : "+")
                      )
                    )
                )
              );
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        yt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_ref = M.createRef()), (e.bNeedToReportHeight = !1), e;
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var e = this.m_ref.current.getBoundingClientRect().height;
              this.props.fnReportHeight(e);
            }),
            (e.prototype.componentDidUpdate = function() {
              var e;
              this.m_ref.current &&
                ((e = this.m_ref.current.getBoundingClientRect().height),
                (!this.bNeedToReportHeight && e == this.props.nInitialHeight) ||
                  (this.props.fnReportHeight(e),
                  (this.bNeedToReportHeight = !1)));
            }),
            Object.defineProperty(e.prototype, "cachedCalendarItems", {
              get: function() {
                var e = this;
                return Object(D.a)().GetCalendarItemsInTimeRange(
                  Object(o.a)(function() {
                    return e.props.rtSectionStart;
                  }),
                  Object(o.a)(function() {
                    return e.props.rtSectionEnd;
                  })
                );
              },
              enumerable: !1,
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
                l = e.fnOnSeeFutureClick,
                s = e.bShowEarliestFirst,
                c = e.nInitialHeight,
                d = e.fnOnEventClick,
                p = e.bSuppressHoverEffects;
              if (!t)
                return M.createElement(
                  "div",
                  {
                    ref: this.m_ref,
                    style: { minHeight: c + "px" },
                    className: o
                  },
                  " "
                );
              var u = this.cachedCalendarItems,
                m = u.rgCalendarItems,
                h = u.bIsComplete;
              if (0 == m.length && h)
                return M.createElement("div", {
                  ref: this.m_ref,
                  className: o
                });
              m.length && s && (m = m.slice().reverse());
              var v = M.createElement(
                  "div",
                  {
                    style: { top: n },
                    className: Object(R.a)(
                      F.a.GroupHeader,
                      F.a.CalendarRow,
                      a && F.a.HeaderAtTop
                    )
                  },
                  M.createElement(
                    "div",
                    { className: F.a.GroupHeaderTitle },
                    M.createElement("span", null, r),
                    M.createElement("div", { className: F.a.GroupHeaderLine }),
                    i &&
                      3 < m.length &&
                      M.createElement(
                        "div",
                        { className: F.a.SeeAllLink, onClick: l },
                        Object(P.d)("#EventCalendar_FutureEventsLink"),
                        M.createElement(
                          "span",
                          { className: F.a.SeeAllCount },
                          m.length + (h ? "" : "+")
                        )
                      )
                  )
                ),
                _ = i
                  ? M.createElement(gt, {
                      rgCalendarItems: m.slice(0, 3),
                      fnOnEventClick: d,
                      fnOnSeeFutureClick: l,
                      bSuppressHoverEffects: p
                    })
                  : m.map(function(e) {
                      return M.createElement(
                        "div",
                        { key: e.unique_id, className: F.a.CalendarRow },
                        M.createElement(Je, {
                          calendarEvent: e,
                          partnerEventStore: N.c,
                          fnOnClicked: d,
                          bSuppressHoverEffects: p,
                          bHideGameTitle: Object(
                            D.a
                          )().BIsSingleSourceCalendar()
                        })
                      );
                    });
              return M.createElement(
                "div",
                { ref: this.m_ref, className: o },
                v,
                _,
                !h &&
                  !i &&
                  M.createElement(
                    "div",
                    { className: F.a.Loading },
                    M.createElement(de.a, {
                      size: "xlarge",
                      position: "center"
                    })
                  )
              );
            }),
            Object(B.c)([m.k], e.prototype, "cachedCalendarItems", null),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        Et = a("AXHe"),
        St = a("Cs6D"),
        ft = a("3+zv");
      ((mt = ut = ut || {})[(mt.k_ModReviewed = 0)] = "k_ModReviewed"),
        (mt[(mt.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
        (mt[(mt.k_ChangeEventType = 2)] = "k_ChangeEventType"),
        (mt[(mt.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
        (mt[(mt.k_ModReReviewed = 4)] = "k_ModReReviewed");
      var Ct = "ModAct",
        Ot = (function() {
          function e() {}
          return (
            (e.prototype.ToModString = function() {
              var e =
                Ct +
                "_" +
                this.m_moderator +
                "_" +
                Math.floor(this.m_rtWhen) +
                "_" +
                this.m_action;
              switch (this.m_action) {
                case ut.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case ut.k_UpdateSeasonTags:
                  e += "_" + this.m_newTagAdded;
              }
              return e;
            }),
            (e.prototype.FromString = function(e) {
              var t = e.split("_");
              if (!t || t[0] !== Ct) return !1;
              switch (
                ((this.m_moderator = Number(t[1])),
                (this.m_rtWhen = Number(t[2])),
                (this.m_action = Number(t[3])),
                this.m_action)
              ) {
                case ut.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case ut.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function(e) {
              return (
                (this.m_moderator = H.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = ut.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function(e) {
              return (
                (this.m_moderator = H.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? ut.k_ModReviewed : ut.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function(e) {
              return (
                (this.m_moderator = H.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? ut.k_ModReReviewed : ut.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function(e) {
              return e.startsWith(Ct);
            }),
            (e.prototype.SetUpdateSeasonalTags = function(e) {
              return (
                (this.m_moderator = H.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = ut.k_UpdateSeasonTags),
                (this.m_newTagAdded = e),
                this
              );
            }),
            e
          );
        })(),
        wt = new ((function() {
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
              l,
              s,
              c,
              d,
              p,
              u
            ) {
              return (
                void 0 === o && (o = 0),
                void 0 === i && (i = 10),
                Object(B.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n = this;
                  return Object(B.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          this.GetLatestPartnerEvents(r, o, i, l, s, c, d, p, u)
                        ];
                      case 1:
                        return (
                          (t = e.sent()),
                          (a = new Array()),
                          Object(m.A)(function() {
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
              l,
              s,
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
                Object(B.b)(this, void 0, void 0, function() {
                  var t, a, n;
                  return Object(B.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t =
                            H.c.STORE_BASE_URL +
                            "events_admin/ajaxgetlatestpartnerevents"),
                          (a = {
                            page: o,
                            count: i,
                            date: d,
                            appids: void 0 === l ? void 0 : l.join(","),
                            required_tags: void 0 === s ? void 0 : s.join(","),
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
                            g.a.get(t, {
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
            (e.prototype.UpdateTagsOnPartnerEvent = function(r, o, i, l, s, c) {
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          H.c.STORE_BASE_URL + "events_admin/ajaxupdatetags"),
                        (a = l.join(",")),
                        c &&
                          (0 < l.length && (a += ","), (a += c.ToModString())),
                        (n = new FormData()).append("sessionid", H.c.SESSIONID),
                        n.append("clan_accountid", "" + o.GetAccountID()),
                        n.append("gid_announcement", i),
                        n.append("add_tags", a),
                        n.append("remove_tags", s.join(",")),
                        [
                          4,
                          g.a.post(t, n, {
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
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          H.c.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (a = new FormData()).append("sessionid", H.c.SESSIONID),
                        a.append("clan_accountid", "" + r.GetAccountID()),
                        a.append("gid_event", o),
                        a.append("new_event_type", "" + i),
                        [
                          4,
                          g.a.post(t, a, {
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
            Object(B.c)([m.y], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(B.c)([m.y], e.prototype, "m_listEvents", void 0),
            Object(B.c)([m.h], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })())(),
        Tt = a("Qcoi"),
        It = a("T27q"),
        kt = a("BpzF"),
        Dt = a("fpVW"),
        jt = a.n(Dt),
        At = a("UxvL"),
        Lt = a("E9gz"),
        Nt = a("dsx8"),
        Gt = a("f0Wu"),
        Mt = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0
        },
        Bt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = g.a.CancelToken.source()),
              (e.m_refScroll = M.createRef()),
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
            Object(B.d)(e, t),
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
              var n,
                r = void 0;
              "string" == typeof e.eventtype
                ? 0 < e.eventtype.length &&
                  ((n = Number.parseInt(e.eventtype)),
                  (r = [{ label: Object(Ae.b)(n), value: n }]))
                : e.excludedTags &&
                  ((r = []),
                  e.excludedTags.forEach(function(e) {
                    var t = Number.parseInt(e);
                    r.push({ label: Object(Ae.b)(t), value: t });
                  }));
              var o = void 0;
              "string" == typeof e.filterDate &&
                0 < e.filterDate.length &&
                (o = Gt.unix(Number(e.filterDate)));
              var i = !1;
              "string" == typeof e.orderByVisibility &&
                0 < e.orderByVisibility.length &&
                (i = Boolean(e.orderByVisibility)),
                this.setState({
                  selectedTags: t,
                  excludedTags: a,
                  filterEventTypes: r,
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
              var e, t, a, n, r, o;
              this.props.history &&
                ((t = (e = this.state).selectedTags),
                (a = e.excludedTags),
                (n = e.filterEventTypes),
                (r = e.filterDate),
                (o = e.bOrderByVisibilityStartTime),
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
                  : this.props.history.push("?"));
            }),
            (e.prototype.ClearTimer = function() {
              this.m_IntervalTimer &&
                (window.clearInterval(this.m_IntervalTimer),
                (this.m_IntervalTimer = void 0));
            }),
            (e.prototype.HandleError = function(e) {
              var t = Object(et.a)(e);
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
              return Object(B.b)(this, void 0, void 0, function() {
                return Object(B.e)(this, function(e) {
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
              var e,
                t,
                a,
                n = this;
              this.ClearTimer(),
                this.state.bInfiniteScrollLoading &&
                  ((e = this.state.filterEventTypes
                    ? this.state.filterEventTypes.map(function(e) {
                        return e.value;
                      })
                    : void 0),
                  (t = this.state.selectedTags
                    ? this.state.selectedTags.map(function(e) {
                        return e.value;
                      })
                    : void 0),
                  (a = this.state.excludedTags
                    ? this.state.excludedTags.map(function(e) {
                        return e.value;
                      })
                    : void 0),
                  wt
                    .LoadPartnerEventForModerationIncremental(
                      this.m_cancelSignal,
                      this.m_nPage,
                      this.state.eventsToLoadPerPaging,
                      [this.props.appid],
                      t,
                      a,
                      this.state.filterDate,
                      e,
                      this.state.bOrderByVisibilityStartTime
                    )
                    .then(function(e) {
                      (n.m_nPage += n.state.eventsToLoadPerPaging),
                        n.setState({
                          bInfiniteScrollLoading: !1,
                          bExhaustedEventList: 0 == e.length,
                          nLastFetchCompletedMS: Date.now()
                        });
                    })
                    .catch(function(e) {
                      return n.HandleError(e);
                    }));
            }),
            (e.prototype.UpdateQueryParametersAndLoadMoreEvents = function() {
              this.HandleUpdateQueryParameter(),
                this.LoadMoreModerationEvents();
            }),
            (e.prototype.RenderTiles = function() {
              var t = new Array();
              return (
                wt.GetAllSolrEvents().forEach(function(e) {
                  t.push(
                    M.createElement(Rt, { solrData: e, key: e.unique_id })
                  );
                }),
                t
              );
            }),
            (e.prototype.OnScroll = function() {
              var e;
              this.m_refScroll &&
                this.m_refScroll.current &&
                ((e = this.m_refScroll.current) &&
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
                          )))));
            }),
            (e.prototype.ClearPreviousData = function() {
              (this.m_nPage = 0), wt.ClearAllSolrEvents();
            }),
            (e.prototype.OnDateChange = function(e) {
              if ("string" == typeof e) {
                var t = Gt(e, "M/D/YYYY", !0);
                if (!t.isValid())
                  return void this.setState({ filterDateAsString: e });
                e = t;
              }
              this.state.filterDate != e &&
                (this.ClearPreviousData(),
                this.setState(
                  Object(B.a)(
                    { filterDateAsString: void 0, filterDate: e },
                    Mt
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                ));
            }),
            (e.prototype.IsValidDate = function(e) {
              var t = new Date();
              return (
                e.unix() <
                Gt.unix(t.getTime() / 1e3 + 86400)
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
                  Object(B.a)({ selectedTags: e }, Mt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventExcludeTags = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(B.a)({ excludedTags: e }, Mt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventTypeFilter = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(B.a)({ filterEventTypes: e }, Mt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnVisibilityStartTimeChange = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(B.a)(
                    { bOrderByVisibilityStartTime: e.currentTarget.checked },
                    Mt
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.render = function() {
              var e = this.RenderTiles(),
                t = v.c.map(function(e) {
                  return { value: e, label: Object(Ae.b)(e) };
                }),
                a = ft.a.map(function(e) {
                  return { value: e, label: e };
                }),
                n = {
                  option: function(e) {
                    return Object(B.a)(Object(B.a)({}, e), {
                      color: "#444444"
                    });
                  }
                };
              return M.createElement(
                "div",
                { className: Lt.ModerationContainer, ref: this.m_refScroll },
                M.createElement(
                  "div",
                  null,
                  M.createElement(
                    "h2",
                    null,
                    Object(P.d)("#EventModeration_Title")
                  ),
                  M.createElement(
                    b.a,
                    null,
                    M.createElement(
                      "div",
                      { className: Object(R.a)(jt.a.FlexRowContainer) },
                      M.createElement(
                        "div",
                        { className: Lt.FilterContainer },
                        M.createElement(
                          "span",
                          null,
                          Object(P.d)("#EventModeration_FilterByTag")
                        ),
                        M.createElement(St.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventSelectedTags,
                          value: this.state.selectedTags,
                          options: a,
                          styles: n
                        })
                      ),
                      M.createElement(
                        "div",
                        { className: Lt.FilterContainer },
                        M.createElement(
                          "span",
                          null,
                          Object(P.d)("#EventModeration_FilterExcludeByTag")
                        ),
                        M.createElement(St.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventExcludeTags,
                          value: this.state.excludedTags,
                          options: a,
                          styles: n
                        })
                      ),
                      M.createElement(
                        "div",
                        { className: Lt.FilterContainer },
                        M.createElement(
                          "span",
                          null,
                          Object(P.d)("#EventModeration_FilterToType")
                        ),
                        M.createElement(St.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventTypeFilter,
                          value: this.state.filterEventTypes,
                          options: t,
                          styles: n
                        })
                      ),
                      M.createElement(
                        "div",
                        { className: Lt.FilterContainer },
                        M.createElement(
                          "span",
                          null,
                          Object(P.d)("#EventModeration_FilterToDate")
                        ),
                        M.createElement(Et, {
                          onChange: this.OnDateChange,
                          timeFormat: !1,
                          value: this.state.filterDate,
                          isValidDate: this.IsValidDate,
                          inputProps: {
                            placeholder: Object(P.d)(
                              "#EventModeration_PickDatee"
                            ),
                            className: Lt.TimeWidth
                          }
                        })
                      ),
                      M.createElement(
                        "div",
                        { className: Lt.FilterContainer },
                        M.createElement(
                          "label",
                          { htmlFor: "EventPerLoad" },
                          Object(P.d)("#EventModeration_PerPageLoad")
                        ),
                        M.createElement(
                          "div",
                          null,
                          M.createElement("input", {
                            type: "number",
                            id: "EventPerLoad",
                            min: "10",
                            max: "5000",
                            value: this.state.eventsToLoadPerPaging,
                            onChange: this.OnEventPerPageLoad
                          })
                        )
                      ),
                      M.createElement(
                        "div",
                        { className: Lt.FilterContainer },
                        M.createElement("input", {
                          type: "checkbox",
                          id: "VisibilityStart",
                          checked: this.state.bOrderByVisibilityStartTime,
                          onChange: this.OnVisibilityStartTimeChange
                        }),
                        M.createElement(
                          "label",
                          { htmlFor: "VisibilityStart" },
                          Object(P.d)("#EventModeration_OrderByFirstVisible")
                        )
                      )
                    )
                  )
                ),
                M.createElement(b.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  M.createElement(de.a, {
                    position: "center",
                    size: "medium",
                    string: Object(P.d)("#Loading")
                  })
              );
            }),
            Object(B.c)([s.a], e.prototype, "HandleError", null),
            Object(B.c)(
              [s.a],
              e.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(B.c)([s.a], e.prototype, "LoadMoreModerationEvents", null),
            Object(B.c)(
              [s.a],
              e.prototype,
              "UpdateQueryParametersAndLoadMoreEvents",
              null
            ),
            Object(B.c)([s.a], e.prototype, "OnScroll", null),
            Object(B.c)([s.a], e.prototype, "OnDateChange", null),
            Object(B.c)([s.a], e.prototype, "IsValidDate", null),
            Object(B.c)([s.a], e.prototype, "OnEventPerPageLoad", null),
            Object(B.c)([s.a], e.prototype, "OnChangeEventSelectedTags", null),
            Object(B.c)([s.a], e.prototype, "OnChangeEventExcludeTags", null),
            Object(B.c)([s.a], e.prototype, "OnChangeEventTypeFilter", null),
            Object(B.c)(
              [s.a],
              e.prototype,
              "OnVisibilityStartTimeChange",
              null
            ),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        xt = Object(i.h)(Bt),
        Rt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingEvent: !N.c.BHasClanEventModel(
                  e.props.solrData.unique_id
                ),
                bShowAsModal: !1,
                bSavingModeration: !1
              }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var e,
                a = this,
                t = this.props.solrData,
                n = t.unique_id;
              N.c.BHasClanEventModel(n) ||
                ((e = Date.now() / 1e3),
                N.c
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new L.a(t.clan_steamid),
                    n,
                    e
                  )
                  .then(function() {
                    return a.setState({ bLoadingEvent: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(et.a)(e);
                    console.error(
                      "EventModerationTile: Event Load: " + t.strErrorMsg,
                      t
                    ),
                      a.setState({ bLoadingEvent: !1 });
                  }));
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "EventModerationTile component unmounted"
              );
            }),
            (e.prototype.ShowModalEvent = function() {
              var e = this.props.solrData.unique_id;
              !this.state.bLoadingEvent &&
                N.c.BHasClanEventModel(e) &&
                this.setState({ bShowAsModal: !0 });
            }),
            (e.prototype.HideModalEvent = function() {
              this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
            }),
            (e.prototype.OnModeratedChanged = function(e) {
              var t, a, n, r;
              this.state.bSavingModeration ||
                ((t = this.props.solrData.unique_id),
                (a = N.c.GetClanEventModel(t)),
                (n = e.target.checked),
                (r =
                  !a.BHasTag("mod_reviewed") ||
                  a.BHasTag("mod_require_rereview")),
                a &&
                  n === r &&
                  this.setState(
                    { bSavingModeration: !0 },
                    this.ApplyModerationToggle
                  ));
            }),
            (e.prototype.ApplyModerationToggle = function() {
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c, d;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props.solrData),
                        (a = t.unique_id),
                        (n = N.c.GetClanEventModel(a)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (r = new Array()),
                        (o = new Array()),
                        (i =
                          n.BHasTag("mod_reviewed") &&
                          !n.BHasTag("mod_require_rereview")),
                        (l = new Ot().SetReviewAction(!i)),
                        i
                          ? r.push("mod_require_rereview")
                          : (r.push("mod_reviewed"),
                            o.push("mod_require_rereview"),
                            n.BHasTag("mod_require_rereview") &&
                              l.SetReReviewAction(!i)),
                        [
                          4,
                          wt.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            r,
                            o,
                            l
                          )
                        ]
                      );
                    case 2:
                      return (s = e.sent()), (n.vecTags = s), [3, 4];
                    case 3:
                      return (
                        (c = e.sent()),
                        (d = Object(et.a)(c)),
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
                a = N.c.GetClanEventModel(t.unique_id);
              Object(xe.d)(
                M.createElement(Vt, { eventModel: a }),
                Object(Pe.o)(e)
              );
            }),
            (e.prototype.OnUpdateSeasonalTag = function(e) {
              var t = this.props.solrData,
                a = N.c.GetClanEventModel(t.unique_id);
              Object(xe.d)(
                M.createElement(Zt, { eventModel: a }),
                Object(Pe.o)(e)
              );
            }),
            (e.prototype.render = function() {
              var e = this.props.solrData,
                t = e.unique_id,
                a = Number(e.appid),
                n = Object(v.e)(H.c.LANGUAGE),
                r = N.c.GetClanEventModel(t);
              if (r) {
                if (this.state.bShowAsModal)
                  return M.createElement(
                    Re.h,
                    { className: Nt.StoreHeaderAdjust },
                    M.createElement(
                      "div",
                      null,
                      M.createElement(It.b, {
                        event: r,
                        fnClose: this.HideModalEvent
                      })
                    )
                  );
                var o = r.GetImageForSizeAsArrayWithFallback(
                    "capsule",
                    n,
                    Ee.c.capsule_main
                  ),
                  i = r.BImageNeedScreenshotFallback("capsule", n),
                  l =
                    0 < o.length
                      ? M.createElement(
                          M.Fragment,
                          null,
                          M.createElement(At.a, { rgSources: o }),
                          i &&
                            M.createElement(
                              "div",
                              { className: Lt.NoCapsule },
                              Object(P.d)("#EventModTile_FallbackImageText")
                            )
                        )
                      : M.createElement(
                          "div",
                          { className: Lt.NoCapsule },
                          Object(P.d)("#EventModTile_NoCapsule")
                        );
              } else l = Object(P.d)("#Loading");
              var s = e.hidden
                  ? e.published
                    ? Object(P.d)("#EVentModTile_State_Staged")
                    : Object(P.d)("#EVentModTile_State_Draft")
                  : Object(P.d)("#EVentModTile_State_Published"),
                c = r ? r.type : Number(e.event_type);
              return M.createElement(
                b.a,
                null,
                M.createElement(
                  "div",
                  { className: Lt.Tile },
                  M.createElement(
                    "div",
                    { className: Lt.TileCapsule, onClick: this.ShowModalEvent },
                    l
                  ),
                  M.createElement(
                    "div",
                    { className: Lt.TileDetails },
                    M.createElement(
                      "div",
                      { className: Lt.DetailsLeft },
                      M.createElement("div", null, s),
                      M.createElement(
                        "a",
                        {
                          href:
                            (H.c.IN_CLIENT ? "steam://openurl/" : "") +
                            H.c.COMMUNITY_BASE_URL +
                            "ogg/" +
                            a +
                            "/announcements/detail/" +
                            e.announcement_gid,
                          target: H.c.IN_CLIENT ? void 0 : "_blank",
                          className: Lt.EventTitle
                        },
                        e.event_name
                      ),
                      M.createElement(
                        "div",
                        {
                          className: Object(R.a)(
                            1 == c ? Lt.TileEventOtherType : ""
                          )
                        },
                        r ? r.GetCategoryAsString() : e.event_type
                      ),
                      this.state.bLoadingEvent &&
                        M.createElement(de.a, {
                          size: "small",
                          string: Object(P.d)("#Loading")
                        }),
                      M.createElement(Ht, {
                        accountID: Number(e.creator_accountid),
                        locToken: "#EventModTile_Author"
                      }),
                      Boolean(
                        e.updator_accountid &&
                          0 < Number(e.updator_accountid) &&
                          e.updator_accountid != e.creator_accountid
                      ) &&
                        M.createElement(Ht, {
                          accountID: Number(e.updator_accountid),
                          locToken: "#EventModTile_Updator"
                        }),
                      M.createElement(zt, {
                        appid: a,
                        clanSteamID: new L.a(e.clan_steamid)
                      })
                    ),
                    r &&
                      M.createElement(
                        M.Fragment,
                        null,
                        M.createElement(
                          "div",
                          { className: Lt.DetailsMiddle },
                          M.createElement(
                            "div",
                            { className: Lt.ModeratedFlagCtn },
                            M.createElement("input", {
                              type: "checkbox",
                              id: r.GID + "_moderated",
                              checked: Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ),
                              onChange: this.OnModeratedChanged
                            }),
                            M.createElement(
                              "label",
                              { htmlFor: r.GID + "_moderated" },
                              this.state.bSavingModeration &&
                                M.createElement(de.a, { size: "small" }),
                              Boolean(!r.BHasTag("mod_reviewed")) &&
                                Object(P.d)("#EventModTile_Moderated_Review"),
                              Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ) && Object(P.d)("#EventModTile_Moderated"),
                              Boolean(r.BHasTag("mod_require_rereview")) &&
                                Object(P.d)("#EventModTile_Moderated_ReReview")
                            )
                          ),
                          M.createElement(
                            "button",
                            {
                              className: Object(R.a)(jt.a.Button, Lt.Button),
                              onClick: this.OnChangeCategory
                            },
                            Object(P.d)("#EventModTile_ChangeEventType")
                          ),
                          r.BHasTag("halloween2019candidate") &&
                            M.createElement(
                              "button",
                              {
                                className: Object(R.a)(jt.a.Button),
                                onClick: this.OnUpdateSeasonalTag
                              },
                              Object(P.d)("#EventModTile_SeasonalTag")
                            ),
                          M.createElement(Wt, { eventModel: r })
                        ),
                        M.createElement(
                          "div",
                          { className: Lt.DetailsRight },
                          M.createElement(kt.b, {
                            event: r,
                            stylesmodule: Lt,
                            nOverrideEndTime: r.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: r.GetStartTimeAndDateUnixSeconds()
                          }),
                          M.createElement(Ft, { event: r }),
                          M.createElement(Ut, { event: r })
                        )
                      )
                  )
                )
              );
            }),
            Object(B.c)([s.a], e.prototype, "ShowModalEvent", null),
            Object(B.c)([s.a], e.prototype, "HideModalEvent", null),
            Object(B.c)([s.a], e.prototype, "OnModeratedChanged", null),
            Object(B.c)([s.a], e.prototype, "ApplyModerationToggle", null),
            Object(B.c)([s.a], e.prototype, "OnChangeCategory", null),
            Object(B.c)([s.a], e.prototype, "OnUpdateSeasonalTag", null),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component);
      function Pt(e) {
        return L.a.InitFromAccountID(e).ConvertTo64BitString();
      }
      var Ht = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                userProfile: Tt.a.GetProfile(Pt(e.props.accountID)),
                bLoadingProfile: !Tt.a.BHasProfile(Pt(e.props.accountID))
              }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.state.bLoadingProfile && this.LoadProfile();
            }),
            (e.prototype.LoadProfile = function() {
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = Pt(this.props.accountID)), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]), [4, Tt.a.LoadProfiles([t])]
                      );
                    case 2:
                      return e.sent(), [3, 4];
                    case 3:
                      return (
                        (a = e.sent()),
                        (n = Object(et.a)(a)),
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
                            userProfile: Tt.a.GetProfile(t),
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
                  (H.c.IN_CLIENT ? "steam://openurl/" : "") +
                  "https://steamsupport.valvesoftware.com/account/overview/" +
                  Pt(this.props.accountID);
              return M.createElement(
                "div",
                null,
                Object(P.k)(
                  a,
                  M.createElement(
                    "a",
                    { href: r, target: H.c.IN_CLIENT ? void 0 : "_blank" },
                    Boolean(n)
                      ? M.createElement(M.Fragment, null, n.persona_name)
                      : M.createElement(
                          M.Fragment,
                          null,
                          this.state.bLoadingProfile &&
                            M.createElement(de.a, { size: "small" }),
                          M.createElement("span", null, t)
                        )
                  )
                )
              );
            }),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        Ft = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bDownloadingImages: !1, nLocLanguages: 0 }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(B.d)(e, t),
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
              N.c
                .LoadClanEventLocalizationFromAnnouncementGID(
                  e.clanSteamID,
                  e.AnnouncementGID
                )
                .then(function(e) {
                  a.m_cancelSignal.token.reason ||
                    a.setState({ nLocLanguages: e.length });
                })
                .catch(function(e) {
                  var t = Object(et.a)(e);
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
                l = this.CountLanguages(e.jsondata.localized_subtitle);
              return M.createElement(
                "div",
                { className: Lt.AnalysisCtn },
                M.createElement(
                  "div",
                  { className: Lt.TileTitle },
                  Object(P.d)("#EventModTile_Analysis")
                ),
                M.createElement(
                  "div",
                  null,
                  Object(P.d)("#EventModTile_Stats_Comments", e.nCommentCount)
                ),
                M.createElement(
                  "div",
                  null,
                  Object(P.d)("#EventModTile_Stats_VoteUp", e.nVotesUp)
                ),
                M.createElement(
                  "div",
                  null,
                  Object(P.d)("#EventModTile_Stats_VoteDown", e.nVotesDown)
                ),
                Boolean(t) &&
                  M.createElement(
                    "div",
                    { className: Lt.ArtHeader },
                    Object(P.d)("#EventModTile_ImageAnalysis_Header", t),
                    " "
                  ),
                Boolean(a) &&
                  M.createElement(
                    "div",
                    null,
                    Object(P.d)("#EventModTile_ImageAnalysis_Capsule", a),
                    " "
                  ),
                Boolean(n) &&
                  M.createElement(
                    "div",
                    { className: Lt.ArtSpotlight },
                    Object(P.d)("#EventModTile_ImageAnalysis_Spotlight", n),
                    " "
                  ),
                Boolean(r) &&
                  M.createElement(
                    "div",
                    null,
                    Object(P.d)("#EventModTile_ImageAnalysis_Broadcast", r),
                    " "
                  ),
                0 == o &&
                  M.createElement(
                    "div",
                    { className: Lt.AnalysisMissing },
                    Object(P.d)("#EventModTile_ImageAnalysis_None"),
                    " "
                  ),
                0 == this.state.nLocLanguages &&
                  M.createElement(de.a, {
                    size: "small",
                    string: Object(P.d)("#EventModTile_LoadingLocs")
                  }),
                0 < this.state.nLocLanguages &&
                  M.createElement(
                    "div",
                    null,
                    Object(P.d)(
                      "#EventModTile_Languages",
                      this.state.nLocLanguages
                    )
                  ),
                Boolean(i) &&
                  M.createElement(
                    "div",
                    null,
                    Object(P.d)("#EventModTile_Languages_Summary", i),
                    " "
                  ),
                Boolean(l) &&
                  M.createElement(
                    "div",
                    null,
                    Object(P.d)("#EventModTile_Languages_Subtitle", l),
                    " "
                  )
              );
            }),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        zt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingAppInfo: !_.a.BIsAppidLoaded(e.props.appid)
              }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(B.d)(e, t),
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
              _.a.BIsAppidLoaded(t) ||
                _.a
                  .EnsureStoreCapsuleInfoLoaded(t)
                  .then(function() {
                    a.m_cancelSignal.token.reason ||
                      a.setState({ bLoadingAppInfo: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(et.a)(e);
                    console.error(
                      "EventModerationChannelInfo: App Load: " + t.strErrorMsg,
                      t
                    ),
                      a.m_cancelSignal.token.reason ||
                        a.setState({ bLoadingAppInfo: !1 });
                  }),
                n && E.a.LoadOGGClanInfoForClanSteamID(n);
            }),
            (e.prototype.render = function() {
              if (this.state.bLoadingAppInfo)
                return M.createElement(de.a, {
                  size: "small",
                  string: Object(P.d)("#EventModTile_AppInfoLoading")
                });
              var e = this.props,
                t = e.appid,
                a = e.clanSteamID;
              if (t) {
                var n = _.a.GetStoreCapsuleInfo(t).GetAppStoreData();
                return M.createElement(
                  "div",
                  { className: Lt.TileAppInfo },
                  M.createElement(
                    "div",
                    { className: Lt.TileAppInfoTitle },
                    M.createElement(
                      S.a,
                      { href: n.capsule_link },
                      M.createElement("img", {
                        className: Lt.TileAppInfoImage,
                        src: n.capsule
                      }),
                      M.createElement(
                        "div",
                        null,
                        Object(P.d)("#EventModTile_GameName", n.title)
                      )
                    )
                  ),
                  M.createElement(
                    "div",
                    null,
                    Object(P.d)("#EventModTile_ReleaseDate", n.release)
                  )
                );
              }
              if (a) {
                var r = a.GetAccountID(),
                  o = E.a.GetClanInfoByClanAccountID(r);
                if (o && o.is_curator)
                  return M.createElement(
                    "div",
                    { className: Lt.TileAppInfo },
                    M.createElement(
                      "div",
                      { className: Lt.TileAppInfoTitle },
                      M.createElement(
                        S.a,
                        { href: H.c.STORE_BASE_URL + "/curator/" + r + "/" },
                        M.createElement("img", {
                          className: Lt.TileAppInfoImage,
                          src: o.avatar_full_url
                        }),
                        M.createElement(
                          "div",
                          null,
                          Object(P.d)("#EventModTile_CuratorName", o.group_name)
                        )
                      )
                    )
                  );
              }
              return null;
            }),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        Ut = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.render = function() {
              var e = this.props.event,
                t = Object(ft.d)(e),
                a = Object(ft.c)(e),
                n = Object(ft.e)(e),
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
              return M.createElement(
                "div",
                { className: Lt.VisibiltyCtn },
                M.createElement(
                  "div",
                  { className: Lt.TileTitle },
                  Object(P.d)("#EventModTile_Visibility")
                ),
                M.createElement(
                  "div",
                  null,
                  Object(P.d)(
                    "#EventModTile_Store_Visibility",
                    r
                      ? Object(P.d)("#WriteReview_Dialog_Yes")
                      : Object(P.d)("#WriteReview_Dialog_No"),
                    r
                      ? ""
                      : n
                      ? Object(P.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_store")
                      ? Object(P.d)("#EventModTime_Hidden_OptOut")
                      : Object(P.d)("#EventModTime_Hidden_Moderator")
                  )
                ),
                M.createElement(
                  "div",
                  null,
                  Object(P.d)(
                    "#EventModTile_LibraryHome_Visibility",
                    o
                      ? Object(P.d)("#WriteReview_Dialog_Yes")
                      : Object(P.d)("#WriteReview_Dialog_No"),
                    o
                      ? ""
                      : n
                      ? Object(P.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_overview")
                      ? Object(P.d)("#EventModTime_Hidden_OptOut")
                      : Object(P.d)("#EventModTime_Hidden_Moderator")
                  )
                ),
                M.createElement(
                  "div",
                  null,
                  Object(P.d)(
                    "#EventModTile_LibraryDetail_Visibility",
                    i
                      ? Object(P.d)("#WriteReview_Dialog_Yes")
                      : Object(P.d)("#WriteReview_Dialog_No"),
                    i
                      ? ""
                      : n
                      ? Object(P.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_detail")
                      ? Object(P.d)("#EventModTime_Hidden_OptOut")
                      : Object(P.d)("#EventModTime_Hidden_Moderator")
                  )
                )
              );
            }),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        Vt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                newCategoryOption: {
                  label: Object(Ae.b)(34),
                  value: { eventType: 34 }
                }
              }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.ChangeCategoryForEvent = function() {
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c, d;
                return Object(B.e)(this, function(e) {
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
                          wt.UpdatePartnerEventType(
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
                        (i = ft.n),
                        (l = []),
                        r.value.tags &&
                          r.value.tags.forEach(function(e) {
                            l.push(e);
                            var t = new Ot()
                              .SetUpdateSeasonalTags(e)
                              .ToModString();
                            l.push(t);
                          }),
                        [
                          4,
                          wt.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.GetAnnouncementGID(),
                            l,
                            i,
                            new Ot().SetActionChangeEvent(o)
                          )
                        ]
                      );
                    case 3:
                      return (
                        (s = e.sent()),
                        Object(m.A)(function() {
                          (a.type = o), (a.vecTags = s);
                        }),
                        this.setState({ bUpdating: !1 }, n),
                        [3, 5]
                      );
                    case 4:
                      return (
                        (c = e.sent()),
                        (d = Object(et.a)(c)),
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
                r = v.c
                  .filter(function(e) {
                    return 1 == e || 4 == e || 9 <= e;
                  })
                  .map(function(e) {
                    var t = { eventType: e };
                    return (
                      12 == e && (t.tags = ["patchnotes"]),
                      { label: Object(Ae.b)(e), value: t }
                    );
                  });
              return (
                r.push({
                  label: Object(P.d)("#PartnerEvent_Curator_Group_Members"),
                  value: {
                    eventType: 28,
                    tags: ["curator", "curator_group_members"]
                  }
                }),
                r.push({
                  label: Object(P.d)("#PartnerEvent_Curator_Public"),
                  value: { eventType: 28, tags: ["curator", "curator_public"] }
                }),
                M.createElement(
                  Re.c,
                  {
                    strTitle: Object(P.d)("#EventModTile_ChangeEventType"),
                    strDescription: Object(P.d)(
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
                  M.createElement(
                    M.Fragment,
                    null,
                    M.createElement(
                      "div",
                      { className: Lt.CategoryChangeDialog },
                      M.createElement("br", null),
                      this.state.bUpdating &&
                        M.createElement(de.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        M.createElement(
                          "div",
                          null,
                          Object(P.d)("#Chat_Settings_Error_ServerError"),
                          M.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      M.createElement(St.a, {
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
            Object(B.c)([s.a], e.prototype, "ChangeCategoryForEvent", null),
            Object(B.c)([s.a], e.prototype, "OnChangeSelection", null),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        Wt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bCollapsed: !0 }), e;
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.RenderModAction = function(e) {
              var t = Object(P.i)(e.m_rtWhen),
                a = M.createElement(Ht, {
                  locToken: "#EventModTile_Moderator",
                  accountID: e.m_moderator
                });
              switch (e.m_action) {
                case ut.k_ModReviewed:
                  return M.createElement(
                    "div",
                    { className: Lt.ModeratorAuditActionCtn },
                    Object(P.k)(
                      "#EventModTile_Action_Reviewed",
                      M.createElement("span", null, t),
                      a
                    )
                  );
                case ut.k_ModUnreviewed:
                  return M.createElement(
                    "div",
                    { className: Lt.ModeratorAuditActionCtn },
                    Object(P.k)(
                      "#EventModTile_Action_UnReviewed",
                      M.createElement("span", null, t),
                      a
                    )
                  );
                case ut.k_ChangeEventType:
                  return M.createElement(
                    "div",
                    { className: Lt.ModeratorAuditActionCtn },
                    Object(P.k)(
                      "#EventModTile_Action_NewEventType",
                      M.createElement("span", null, t),
                      a,
                      Object(Ae.b)(e.m_newEventType)
                    )
                  );
                case ut.k_UpdateSeasonTags:
                  return M.createElement(
                    "div",
                    { className: Lt.ModeratorAuditActionCtn },
                    Object(P.k)(
                      "#EventModTile_Action_SeasonTagUpdate",
                      M.createElement("span", null, t),
                      a,
                      e.m_newTagAdded
                    )
                  );
                default:
                  return M.createElement(
                    "div",
                    { className: Lt.ModeratorAuditActionCtn },
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
                  var t = new Ot();
                  t.FromString(e),
                    n.push(
                      M.createElement(
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
                  return Ot.IsAuditAction(e);
                }),
                a = t.length,
                n = 3 < t.length && this.state.bCollapsed;
              if (0 == t.length) return null;
              n && (t = t.splice(0, 3));
              var r = this.RenderAudit(t);
              return M.createElement(
                "div",
                null,
                M.createElement(
                  "h4",
                  null,
                  Object(P.d)("#EventModTile_Action_Title")
                ),
                r,
                n &&
                  M.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !1 });
                      }
                    },
                    Object(P.d)("#EventModTile_Action_More", a - 3)
                  ),
                Boolean(!n && 3 < a) &&
                  M.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !0 });
                      }
                    },
                    Object(P.d)("#EventModTile_Action_Hide")
                  )
              );
            }),
            e
          );
        })(M.Component),
        Zt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                bAccept: e.props.eventModel.BHasTag("halloween2019"),
                bHorror: e.props.eventModel.BHasTag("horror"),
                bCute: e.props.eventModel.BHasTag("cute")
              }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(B.d)(e, t),
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
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i;
                return Object(B.e)(this, function(e) {
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
                          wt.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            t,
                            a,
                            new Ot().SetUpdateSeasonalTags(
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
                        (i = Object(et.a)(o)),
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
              return M.createElement(
                Re.c,
                {
                  strTitle: Object(P.d)("#EventModTile_SeasonalTag"),
                  onCancel: a,
                  onOK: function() {
                    return e.setState({ bUpdating: !0 }, e.ApplyAction);
                  }
                },
                M.createElement(
                  M.Fragment,
                  null,
                  M.createElement(
                    "div",
                    { className: Lt.CategoryChangeDialog },
                    M.createElement("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance
                    }),
                    M.createElement(
                      "label",
                      { htmlFor: "Acceptance" },
                      Object(P.d)("#EventModTile_SeasonalTag_Desc")
                    ),
                    M.createElement(
                      "div",
                      null,
                      Object(P.d)("#EventModTile_SeasonalTag_Desc_Secondary")
                    ),
                    M.createElement("input", {
                      id: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror
                    }),
                    M.createElement(
                      "label",
                      { htmlFor: "Horror" },
                      "Horror Tag"
                    ),
                    M.createElement("input", {
                      id: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute
                    }),
                    M.createElement("label", { htmlFor: "Cute" }, "Cute Tag"),
                    this.state.bUpdating &&
                      M.createElement(de.a, { size: "small" }),
                    this.state.strErrorMsg &&
                      M.createElement(
                        "div",
                        null,
                        Object(P.d)("#Chat_Settings_Error_ServerError"),
                        M.createElement("br", null),
                        this.state.strErrorMsg
                      )
                  )
                )
              );
            }),
            Object(B.c)([s.a], e.prototype, "ChangeAcceptance", null),
            Object(B.c)([s.a], e.prototype, "ChangeHorror", null),
            Object(B.c)([s.a], e.prototype, "ChangeCute", null),
            Object(B.c)([s.a], e.prototype, "ApplyAction", null),
            e
          );
        })(M.Component),
        Yt = a("5eAM"),
        qt = a("gOcu"),
        Jt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoadingEvent: !0 }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "SteamGameFestivalStoreDebug to unload "
              );
            }),
            (e.prototype.componentDidMount = function() {
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return ((t = this.props),
                      (a = t.clanEventGID),
                      (n = t.clanAccountID),
                      console.log(a, n, typeof a, typeof n),
                      !a || N.c.BHasClanEventModel(a))
                        ? [3, 8]
                        : ((r = L.a.InitFromClanID(Number.parseInt(n))),
                          [
                            4,
                            N.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                              r,
                              a,
                              0
                            )
                          ]);
                    case 1:
                      return ((o = e.sent()),
                      (i = new Array()),
                      (l = new Array()),
                      o.BHasSaleEnabled())
                        ? (this.setState({
                            event: o,
                            bLoadingEvent: !1,
                            bLoadingApps: !0,
                            bLoadingDemos: !0,
                            bLoadingAssociatedDemoInfo: !0
                          }),
                          (s = new Map()),
                          o.jsondata.sale_sections.forEach(function(e) {
                            "tabs" == e.section_type &&
                              e.tabs.forEach(function(e) {
                                e.capsules.forEach(function(e) {
                                  "game" == e.type ||
                                  "application" == e.type ||
                                  "software" == e.type
                                    ? s.has(e.id) ||
                                      (s.set(e.id, !0), i.push(e.id))
                                    : s.has(e.id) ||
                                      (s.set(e.id, !0), l.push(e.id));
                                });
                              });
                          }),
                          [4, Yt.a.LoadAppLinkInfo(i)])
                        : [3, 6];
                    case 2:
                      return (
                        e.sent(),
                        this.setState({
                          rgAppIDs: i,
                          rgUnknownTypeAppIDs: l,
                          bLoadingApps: !1
                        }),
                        [4, _.a.BatchLoadAppCapsules(i)]
                      );
                    case 3:
                      return (
                        e.sent(),
                        this.setState({ bLoadingAssociatedDemoInfo: !1 }),
                        qt.a
                          .Get()
                          .SetCollectionInfo(
                            "gamefestival2020",
                            "gamefestival2020info"
                          ),
                        [
                          4,
                          qt.a.Get().LoadAppIDsBatch(i, !1, this.m_cancelSignal)
                        ]
                      );
                    case 4:
                      return (
                        e.sent(),
                        (c = new Array()),
                        qt.a
                          .Get()
                          .GetAllDemoInfo()
                          .forEach(function(e) {
                            return c.push(e.demo_appid);
                          }),
                        [4, Yt.a.LoadAppLinkInfo(c)]
                      );
                    case 5:
                      return (
                        e.sent(),
                        this.setState({ bLoadingDemos: !1, rgDemoIDs: c }),
                        [3, 7]
                      );
                    case 6:
                      this.setState({ bLoadingEvent: !1, rgAppIDs: i }),
                        (e.label = 7);
                    case 7:
                      return [3, 9];
                    case 8:
                      this.setState({ bLoadingEvent: !1 }), (e.label = 9);
                    case 9:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              if (
                this.state.bLoadingEvent ||
                this.state.bLoadingDemos ||
                this.state.bLoadingApps ||
                this.state.bLoadingAssociatedDemoInfo
              )
                return M.createElement(de.a, {
                  string:
                    Object(P.d)("#Loading") +
                    (this.state.bLoadingEvent
                      ? " Events"
                      : this.state.bLoadingApps
                      ? " Apps"
                      : this.state.bLoadingAssociatedDemoInfo
                      ? " Associated Demo Info"
                      : this.state.bLoadingDemos
                      ? " Demos"
                      : "done"),
                  position: "center"
                });
              if (!this.state.event)
                return M.createElement("div", null, " Failed to load event");
              var e = this.state.event;
              if (!e.jsondata.bSaleEnabled)
                return M.createElement("div", null, "Not a sale evnet");
              var n = new Map();
              this.state.rgDemoIDs.forEach(function(e) {
                return n.set(e, !0);
              });
              var a = new Array(),
                r = new Array();
              Yt.a.GetMissingAppIDs().forEach(function(e, t) {
                a.push(
                  M.createElement(
                    "div",
                    { key: "missing: " + t },
                    M.createElement(
                      "a",
                      {
                        href: H.c.STORE_BASE_URL + "app/" + t + "/?beta=1",
                        target: "_blank"
                      },
                      t
                    )
                  )
                ),
                  r.push(t);
              });
              var o = new Array();
              Yt.a.GetAllLoadedAppLinks().forEach(function(e, t) {
                var a;
                n.has(t) ||
                  qt.a.Get().BHasDemoAppID(t) ||
                  ((a = Yt.a.GetAppLinkInfo(t)),
                  o.push(
                    M.createElement(
                      "div",
                      { key: "missingdemo_" + t },
                      "demo" == a.type &&
                        M.createElement(
                          "b",
                          null,
                          "--Error: Sale Page has Demo AppID, based game -- "
                        ),
                      a.name,
                      " (",
                      t,
                      ")",
                      M.createElement(
                        "a",
                        {
                          href: H.c.STORE_BASE_URL + "app/" + t + "/?beta=0",
                          target: "_blank"
                        },
                        "Store Page"
                      ),
                      " ",
                      M.createElement(
                        "a",
                        {
                          href: H.c.PARTNER_BASE_URL + "apps/landing/" + t,
                          target: "_blank"
                        },
                        "App Landing Page"
                      )
                    )
                  ));
              });
              var i = 0,
                l = 0,
                s = new Array(),
                c = 0,
                d = 0,
                p = 0,
                u = 0;
              _.a.GetAllAppInfos().forEach(function(e, t) {
                var a,
                  n = !1;
                e.BIsLoaded() &&
                  qt.a.Get().BHasDemoAppID(t) &&
                  ((a = qt.a.Get().GetDemoEventInfo(t)),
                  Yt.a.GetAppLinkInfo(a.demo_appid).coming_soon
                    ? ((c += 1), (n = !0))
                    : (d += 1)),
                  e.BIsLoaded() && e.GetAppStoreData().BHasDemoAppID()
                    ? ((i += 1), n && (p += 1))
                    : e.BIsLoaded() && qt.a.Get().BHasDemoAppID(t)
                    ? ((l += 1), n || (u += 1))
                    : -1 ==
                        r.findIndex(function(e) {
                          return e == t;
                        }) && s.push(e.GetAppStoreData());
              });
              var t = new Array();
              s.forEach(function(e) {
                t.push(
                  M.createElement(
                    "div",
                    { key: "missing_capps" + e.appid },
                    M.createElement(
                      "a",
                      {
                        href:
                          H.c.STORE_BASE_URL + "app/" + e.appid + "/?beta=1",
                        target: "_blank"
                      },
                      e.name,
                      " (",
                      e.appid,
                      ")"
                    )
                  )
                );
              });
              var m = 0;
              qt.a
                .Get()
                .GetAllDemoInfo()
                .forEach(function(e) {
                  e.info_clan_event_gid && (m += 1);
                });
              var h = 0;
              return (
                Yt.a.GetAllLoadedAppLinks().forEach(function(e) {
                  "demo" != e.type && (h += 1);
                }),
                M.createElement(
                  b.a,
                  null,
                  M.createElement(
                    "h1",
                    null,
                    e.GetNameWithFallback(Object(v.e)(H.c.LANGUAGE))
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement("b", null, "Unique AppIDs:"),
                    " ",
                    this.state.rgAppIDs.length,
                    " "
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement(
                      "b",
                      null,
                      "Visible Apps in ",
                      H.c.COUNTRY,
                      ":"
                    ),
                    " ",
                    h
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement("b", null, "Unknown AppID types:"),
                    " ",
                    this.state.rgUnknownTypeAppIDs.length
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement("b", null, "Missing AppIDs:"),
                    " ",
                    Yt.a.GetNumMissingAppLinks(),
                    " "
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement("b", null, "Demo via DemoStore:"),
                    " ",
                    qt.a.Get().GetNumDemos()
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement(
                      "b",
                      null,
                      "Visible apps missing demo store:"
                    ),
                    " ",
                    o.length
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement("b", null, "CApplications Loaded:"),
                    " ",
                    _.a.GetNumAppLinkLoaded(),
                    " "
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement(
                      "b",
                      null,
                      "CApplication with Associated Demos:"
                    ),
                    " ",
                    i
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement(
                      "b",
                      null,
                      "  Associated with store page but not released: "
                    ),
                    " ",
                    p
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement(
                      "b",
                      null,
                      "CApplication with demo without association:"
                    ),
                    " ",
                    l
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement(
                      "b",
                      null,
                      "  Released but not associated with store page: "
                    ),
                    " ",
                    u
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement("b", null, "CApplication missing:"),
                    " ",
                    _.a.GetMissingAppIDs().size
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement(
                      "b",
                      null,
                      "CApplication without demo store and demo associations:"
                    ),
                    " ",
                    s.length
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement("b", null, "Quick Pitches: "),
                    m
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement("b", null, "Released Demo: "),
                    d
                  ),
                  M.createElement(
                    "div",
                    null,
                    M.createElement("b", null, "Unreleased Demo: "),
                    c
                  ),
                  M.createElement("hr", null),
                  M.createElement("h2", null, "Missing Appids:"),
                  a,
                  M.createElement(
                    "h2",
                    null,
                    "Missing BOTH demo list and associated demo on product page:"
                  ),
                  t,
                  M.createElement(
                    "h2",
                    null,
                    "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):"
                  ),
                  o
                )
              );
            }),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        Qt = new ((function() {
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
            Object(B.c)([m.y], e.prototype, "m_backfill", void 0),
            Object(B.c)([m.y], e.prototype, "m_mapEventGIDProcessed", void 0),
            Object(B.c)([m.y], e.prototype, "m_bBackfillInProgress", void 0),
            Object(B.c)([m.y], e.prototype, "m_nProcessed", void 0),
            Object(B.c)([m.y], e.prototype, "m_nSuccesses", void 0),
            Object(B.c)([m.y], e.prototype, "m_nFailures", void 0),
            Object(B.c)([m.y], e.prototype, "m_nWarning", void 0),
            Object(B.c)([m.y], e.prototype, "m_nSkipped", void 0),
            Object(B.c)([m.h], e.prototype, "StartBackfill", null),
            Object(B.c)([m.h], e.prototype, "CompleteBackfill", null),
            Object(B.c)([m.h], e.prototype, "CloseProgress", null),
            e
          );
        })())(),
        Kt = a("vNkc"),
        Xt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = g.a.CancelToken.source()),
              (e.m_nImageID = 0),
              (e.m_mapArtworkResizeSuccess = new Map()),
              (e.state = { eBackfillState: void 0 }),
              e
            );
          }
          return (
            Object(B.d)(e, t),
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
                    var t = Object(et.a)(e);
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
                Object(B.b)(this, void 0, void 0, function() {
                  var t, a;
                  return Object(B.e)(this, function(e) {
                    return (
                      (t = Ee.a.GetExtensionTypeFromURL(r)),
                      (a = Ee.a.GetHashFromHashAndExt(r) + o),
                      [
                        2,
                        Ee.e.AsyncGetImageResolution(
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
              var r = Object(et.a)(t),
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
                    Qt.CloseProgress(e, n))
                  : Qt.CompleteBackfill("resize_image");
            }),
            (e.prototype.HandleResizeForImageType = function(p, u, m, h, v) {
              return Object(B.b)(this, void 0, void 0, function() {
                var t,
                  c,
                  a,
                  d = this;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = function(t) {
                        var a, n, r, o, i, l, s;
                        return Object(B.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return p[t] && 0 < p[t].length
                                ? ((a = p[t]),
                                  (n = Ee.a.GetExtensionTypeFromURL(a)),
                                  (r = new L.a(u.clan_steamid)),
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
                                Object(ft.i)(o.width, o.height, h)
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
                                (i = Ee.a.GetHashFromHashAndExt(a)),
                                (l = Ee.a.GetExtensionStringFromHashAndExt(a)),
                                (s = Ee.d.GetResizeDimension(h)),
                                [
                                  4,
                                  Ee.b
                                    .SendResizeRequest(
                                      c.m_cancelSignal,
                                      r,
                                      i,
                                      l,
                                      s
                                    )
                                    .then(function(e) {
                                      console.log(
                                        "success on the resize request"
                                      ),
                                        e == s.length
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
                                              s.length));
                                    })
                                    .catch(function(e) {
                                      m.bFailed = !0;
                                      var t = Object(et.a)(e);
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
              return Object(B.b)(this, void 0, void 0, function() {
                var t,
                  i,
                  a,
                  l,
                  n,
                  s = this;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      Qt.StartBackfill("resize_image"), (t = 0), (e.label = 1);
                    case 1:
                      return Qt.BIsBackkFillInProgress()
                        ? [
                            4,
                            wt
                              .LoadPartnerEventForModerationIncremental(
                                this.m_cancelSignal,
                                t,
                                25
                              )
                              .catch(function(e) {
                                return s.HandleErrorFatal(
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
                          Qt.CompleteBackfill("resize_image"),
                          console.log("Compelted the backfill"),
                          [3, 7]
                        );
                      (t += i.length),
                        (a = function(t) {
                          var a, n, r, o;
                          return Object(B.e)(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return (
                                  (a = i[t]),
                                  (n = Qt.CreateOrGetBackfillProgess(
                                    a.unique_id
                                  )),
                                  a.announcement_gid &&
                                  0 != a.announcement_gid.length
                                    ? [
                                        4,
                                        N.c
                                          .LoadPartnerEventFromAnnoucementGID(
                                            Number(a.appid),
                                            a.announcement_gid,
                                            100
                                          )
                                          .catch(function(e) {
                                            s.HandleErrorFatal(
                                              a.announcement_gid,
                                              e,
                                              "LoadPartnerEventFromAnnoucementGID",
                                              n
                                            );
                                          })
                                      ]
                                    : ((n.bSkipped = !0),
                                      (n.bWarning = !0),
                                      Qt.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                );
                              case 1:
                                return (e.sent(), n.bFailed)
                                  ? [2, "continue"]
                                  : (r = N.c.GetClanEventFromAnnouncementGID(
                                      a.announcement_gid
                                    ))
                                  ? n.bSucceeded ||
                                    n.bFailed ||
                                    n.bAlreadyProcessed
                                    ? ((n.bAlreadyProcessed = !0),
                                      Qt.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                    : ((n.bAnalysing = !0),
                                      l.setState({
                                        strInfo:
                                          "Processing " +
                                          Qt.GetBackfillGIDs().length +
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
                                            r.jsondata.localized_capsule_image),
                                          [
                                            4,
                                            l
                                              .HandleResizeForImageType(
                                                o,
                                                a,
                                                n,
                                                "capsule",
                                                Ee.c.capsule_main
                                              )
                                              .catch(function(e) {
                                                return s.HandleErrorFatal(
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
                                    Qt.CloseProgress(a.unique_id, n),
                                    [2, "continue"]);
                              case 2:
                                e.sent(), (e.label = 3);
                              case 3:
                                return r.jsondata &&
                                  r.jsondata.localized_title_image
                                  ? ((o = r.jsondata.localized_title_image),
                                    [
                                      4,
                                      l
                                        .HandleResizeForImageType(
                                          o,
                                          a,
                                          n,
                                          "background",
                                          Ee.c.background_mini
                                        )
                                        .catch(function(e) {
                                          return s.HandleErrorFatal(
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
                                      l
                                        .HandleResizeForImageType(
                                          o,
                                          a,
                                          n,
                                          "spotlight",
                                          Ee.c.spotlight_main
                                        )
                                        .catch(function(e) {
                                          return s.HandleErrorFatal(
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
                                  Qt.CloseProgress(a.unique_id, n),
                                  Qt.BIsBackkFillInProgress()
                                    ? [2]
                                    : [2, "break"]
                                );
                            }
                          });
                        }),
                        (l = this),
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
                      return 5e3 < Qt.m_nFailures
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
                0 < Qt.m_nFailures &&
                  Qt.GetBackfillGIDs().forEach(function(e) {
                    var t,
                      a = Qt.GetEventBackfillProgress().get(e);
                    a &&
                      a.bFailed &&
                      ((t = N.c.GetClanEventModel(e)) &&
                        n.push(
                          M.createElement(
                            "div",
                            { key: e },
                            M.createElement(
                              Le.c,
                              {
                                eventModel: t,
                                route: Le.a.k_eView,
                                openNewWindow: !0
                              },
                              t.GetNameWithFallback(0)
                            ),
                            M.createElement(
                              "div",
                              { className: Kt.Error },
                              a.strMessage
                            )
                          )
                        ));
                  }),
                n
              );
            }),
            (e.prototype.RenderResizeProgress = function() {
              var e = new Array();
              return (
                e.push(
                  M.createElement(
                    "div",
                    { key: "res_capsule" },
                    "Capsule Resized: ",
                    this.m_mapArtworkResizeSuccess.get("capsule"),
                    " "
                  )
                ),
                e.push(
                  M.createElement(
                    "div",
                    { key: "res_header" },
                    "Header Resized: ",
                    this.m_mapArtworkResizeSuccess.get("background"),
                    " "
                  )
                ),
                e.push(
                  M.createElement(
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
              return M.createElement(
                "div",
                null,
                M.createElement(
                  "h2",
                  null,
                  "Partner Events Backfill Processing Page"
                ),
                null == this.state.eBackfillState &&
                  M.createElement(
                    "div",
                    null,
                    M.createElement(
                      "button",
                      { onClick: this.OnArtworkResizeBackfill },
                      "Begin Artwork Resize Backfill"
                    )
                  ),
                M.createElement(
                  "div",
                  null,
                  M.createElement(
                    "button",
                    {
                      onClick: function() {
                        return Qt.CompleteBackfill("resize_image");
                      }
                    },
                    "Stop Backfill"
                  )
                ),
                this.state.strInfo &&
                  M.createElement(
                    "div",
                    null,
                    "Processing: ",
                    this.state.strInfo
                  ),
                M.createElement(
                  "div",
                  null,
                  "Events Processed: ",
                  Qt.m_nProcessed
                ),
                M.createElement(
                  "div",
                  null,
                  "Events Succeeded: ",
                  Qt.m_nSuccesses
                ),
                M.createElement("div", null, "Events Warning: ", Qt.m_nWarning),
                M.createElement("div", null, "Events Failed: ", Qt.m_nFailures),
                M.createElement("div", null, "Events Skipped: ", Qt.m_nSkipped),
                0 < e.length &&
                  M.createElement(
                    M.Fragment,
                    null,
                    M.createElement("h2", null, "Failure Info"),
                    e
                  ),
                Boolean(t) &&
                  M.createElement(
                    "div",
                    null,
                    M.createElement("h2", null, "Resizing Actions"),
                    t
                  ),
                "started" == this.state.eBackfillState &&
                  M.createElement(de.a, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress"
                  })
              );
            }),
            Object(B.c)([s.a], e.prototype, "OnArtworkResizeBackfill", null),
            Object(B.c)([s.a], e.prototype, "BeginArtworkResize", null),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        $t = a("nWbB"),
        ea = new ((function() {
          function e() {
            (this.m_rgMyWishlistOnSale = null),
              (this.m_rgMyDLCForGamesInLibraryOnSale = null),
              (this.m_rgMySoundtracksForGamesInLibraryOnSale = null),
              (this.m_rgMyInteractiveRecOnSale = null),
              (this.m_rgMySaleTags = null),
              (this.m_rgMyTagRecommendation = null),
              (this.m_mapSaleGameListsByFlavor = new Map()),
              (this.m_rgTopN = null);
          }
          return (
            (e.prototype.GetDiscounts = function(o) {
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(B.e)(this, function(e) {
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
                        (a = Object(H.f)(t, "application_config"))
                          ? [3, 2]
                          : [
                              4,
                              g.a.get(
                                H.c.STORE_BASE_URL + "actions/ajaxgetdiscounts",
                                {
                                  params: Object(B.a)(Object(B.a)({}, o), {
                                    cc: H.c.COUNTRY
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
                        (r = e.sent()), console.error(Object(et.a)(r)), [3, 4]
                      );
                    case 4:
                      return [2, []];
                  }
                });
              });
            }),
            (e.prototype.GetTopN = function(a, n) {
              return Object(B.b)(this, void 0, void 0, function() {
                var t;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgTopN
                        ? [3, 2]
                        : ((this.m_rgTopN = Object(H.f)(
                            "top_n",
                            "application_config"
                          )),
                          this.m_rgTopN
                            ? [3, 2]
                            : [
                                4,
                                ea.GetDiscounts({
                                  top_n_sellers: 500,
                                  max_results: n,
                                  feature: a
                                })
                              ]);
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
              return Object(B.b)(this, void 0, void 0, function() {
                var t;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyWishlistOnSale
                        ? [3, 2]
                        : ((this.m_rgMyWishlistOnSale = Object(H.f)(
                            "wishlist_onsale",
                            "application_config"
                          )),
                          this.m_rgMyWishlistOnSale
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  H.c.STORE_BASE_URL +
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
              return Object(B.b)(this, void 0, void 0, function() {
                var t;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyDLCForGamesInLibraryOnSale
                        ? [3, 2]
                        : ((this.m_rgMyDLCForGamesInLibraryOnSale = Object(H.f)(
                            "dlc_onsale",
                            "application_config"
                          )),
                          this.m_rgMyDLCForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  H.c.STORE_BASE_URL +
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
              return Object(B.b)(this, void 0, void 0, function() {
                var t;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMySoundtracksForGamesInLibraryOnSale
                        ? [3, 2]
                        : ((this.m_rgMySoundtracksForGamesInLibraryOnSale = Object(
                            H.f
                          )("dlc_music_onsale", "application_config")),
                          this.m_rgMySoundtracksForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  H.c.STORE_BASE_URL +
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
              return Object(B.b)(this, void 0, void 0, function() {
                var t;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyInteractiveRecOnSale
                        ? [3, 2]
                        : ((this.m_rgMyInteractiveRecOnSale = Object(H.f)(
                            "ir_onsale",
                            "application_config"
                          )),
                          this.m_rgMyInteractiveRecOnSale
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  H.c.STORE_BASE_URL +
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
              return Object(B.b)(this, void 0, void 0, function() {
                var t;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMySaleTags
                        ? [3, 2]
                        : ((this.m_rgMySaleTags = Object(H.f)(
                            "saletags",
                            "application_config"
                          )),
                          this.m_rgMySaleTags
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  H.c.STORE_BASE_URL +
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
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyTagRecommendation
                        ? [3, 2]
                        : ((this.m_rgMyTagRecommendation = Object(H.f)(
                            "tag_recommender",
                            "application_config"
                          )),
                          this.m_rgMyTagRecommendation
                            ? [3, 2]
                            : ((t =
                                H.c.STORE_BASE_URL +
                                "saleaction/ajaxgetsaletagsrecommendation"),
                              (a = {
                                cc: H.c.COUNTRY,
                                l: H.c.LANGUAGE,
                                clanAccountID: r.clanSteamID.GetAccountID(),
                                clanAnnouncementGID: r.AnnouncementGID,
                                count: o
                              }),
                              [
                                4,
                                g.a.get(t, { params: a, withCredentials: !1 })
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
            (e.prototype.GetFlavorCacheKey = function(e, t) {
              return "key-" + e + "-" + (t || "*");
            }),
            (e.prototype.GetSaleGamesByFlavor = function(u, m, h, v, _, b) {
              return (
                void 0 === b && (b = 0),
                Object(B.b)(this, void 0, void 0, function() {
                  var t, a, n, r, o, i, l, s, c, d, p;
                  return Object(B.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (11 == m && (m = void 0),
                        (t = this.GetFlavorCacheKey(v, m)),
                        !(a = this.m_mapSaleGameListsByFlavor.get(t)) &&
                          ((n = "browser_" + v + (m ? "_" + m : "_*")),
                          0 <
                            (a = Object(H.f)(n, "application_config") || [])
                              .length))
                          ? (this.m_mapSaleGameListsByFlavor.set(t, a),
                            [2, a.slice(b, _)])
                          : ((r = a.length),
                            0 < (o = b + _ - r)
                              ? ((i =
                                  H.c.STORE_BASE_URL +
                                  (u
                                    ? "saleaction/ajaxpreviewsaledynamicappquery"
                                    : "saleaction/ajaxgetsaledynamicappquery")),
                                (l = {
                                  cc: H.c.COUNTRY,
                                  l: H.c.LANGUAGE,
                                  clanAccountID: h.clanSteamID.GetAccountID(),
                                  clanAnnouncementGID: h.AnnouncementGID,
                                  flavor: v,
                                  start: r,
                                  count: Math.max(o, 25),
                                  tabuniqueid: m,
                                  return_capsules: !0
                                }),
                                [
                                  4,
                                  g.a.get(i, { params: l, withCredentials: u })
                                ])
                              : [3, 2]);
                      case 1:
                        if (
                          200 != (s = e.sent()).status ||
                          !s.data ||
                          !s.data.appids
                        )
                          throw new Error("query failed, status=" + s.status);
                        for (c = 0, d = s.data.appids; c < d.length; c++)
                          (p = d[c]), a.push(p);
                        s.data.app_info && Yt.a.AddAppLinks(s.data.app_info),
                          (e.label = 2);
                      case 2:
                        return (
                          this.m_mapSaleGameListsByFlavor.set(t, a),
                          [2, a.slice(b, _)]
                        );
                    }
                  });
                })
              );
            }),
            e
          );
        })())(),
        ta = new ((function() {
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
              var e,
                t = this;
              this.m_bLoaded ||
                ((e = Object(H.f)("points", "application_config")),
                this.ValidateStoreDefault(e) &&
                  Object(m.A)(function() {
                    (t.m_mySummary.points = e.points),
                      (t.m_mySummary.points_earned = e.points_earned),
                      (t.m_mySummary.points_spent = e.points_spent),
                      (t.m_bLoaded = !0);
                  }));
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              return (
                !(!e || "object" != typeof e) &&
                ("number" == typeof e.points &&
                  "number" == typeof e.points_earned &&
                  "number" == typeof e.points_spent)
              );
            }),
            (e.prototype.LoadSaleTokenPoints = function() {
              return Object(B.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (this.LazyInit(), this.m_bLoaded || !H.i.logged_in)
                        ? [3, 2]
                        : ((t =
                            H.c.STORE_BASE_URL +
                            "lunarnewyearmarket/ajaxgettokensummary"),
                          [4, g.a.get(t, { withCredentials: !0 })]);
                    case 1:
                      (a = e.sent()),
                        Object(m.A)(function() {
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
              return Object(B.b)(this, void 0, void 0, function() {
                return Object(B.e)(this, function(e) {
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
            Object(B.c)([m.y], e.prototype, "m_mySummary", void 0),
            e
          );
        })())();
      window.g_SaleTokenPointStore = ta;
      var aa = new ((function() {
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
              (Object(m.A)(function() {
                (e.m_userData = Object(H.f)("doorinfo", "application_config")),
                  (e.m_salePageBackgroundOverride = Object(H.f)(
                    "doorinfobackground",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundWEBM = Object(H.f)(
                    "doorinfowebm",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundMP4 = Object(H.f)(
                    "doorinfomp4",
                    "application_config"
                  )),
                  (e.m_storyImages = Object(H.f)(
                    "storyimages",
                    "application_config"
                  )),
                  e.m_storyImages || (e.m_storyImages = new Array(4));
              }),
              (this.m_bLoadedFromConfig = !0));
          }),
          (e.prototype.LoadDoorData = function() {
            return Object(B.b)(this, void 0, void 0, function() {
              var t, a;
              return Object(B.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = H.c.STORE_BASE_URL + "saleaction/ajaxgetopendoor"),
                      [4, g.a.get(t, { withCredentials: !0 })]
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
            var t = j.a.GetTimeNowWithOverride();
            return (
              H.i.logged_in &&
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
          (e.prototype.OpenDoor = function(i, l) {
            return (
              void 0 === l && (l = !0),
              Object(B.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o = this;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !H.i.logged_in ||
                        !this.m_userData ||
                        i > this.m_userData.length
                      )
                        return [2, null];
                      (t = H.c.STORE_BASE_URL + "saleaction/ajaxopendoor"),
                        (a = new FormData()).append("sessionid", H.c.SESSIONID),
                        a.append("authwgtoken", H.i.authwgtoken),
                        a.append("door_index", "" + i),
                        l || a.append("open_door", "0"),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, g.a.post(t, a, { withCredentials: !0 })]
                      );
                    case 2:
                      return 1 == (n = e.sent()).data.success
                        ? (Object(m.A)(function() {
                            (o.m_userData[i].opened = l),
                              (o.m_salePageBackgroundOverride =
                                n.data.sale_pg_background_override),
                              (o.m_salePageBackgroundMP4 =
                                n.data.sale_pg_background_mp4),
                              (o.m_salePageBackgroundWEBM =
                                n.data.sale_pg_background_webm),
                              (o.m_storyImages[i] = n.data.story_image),
                              (o.m_strLastDoorOpenKey =
                                "door_" + (l ? i : i - 1)),
                              l && ta.AddPoints(100);
                          }),
                          [2, n.data.rewards])
                        : (console.error(Object(et.a)(n)), [3, 4]);
                    case 3:
                      return (
                        (r = e.sent()), console.error(Object(et.a)(r)), [3, 4]
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
          Object(B.c)([m.y], e.prototype, "m_userData", void 0),
          Object(B.c)(
            [m.y],
            e.prototype,
            "m_salePageBackgroundOverride",
            void 0
          ),
          Object(B.c)([m.y], e.prototype, "m_salePageBackgroundWEBM", void 0),
          Object(B.c)([m.y], e.prototype, "m_salePageBackgroundMP4", void 0),
          Object(B.c)([m.y], e.prototype, "m_storyImages", void 0),
          Object(B.c)([m.y], e.prototype, "m_strLastDoorOpenKey", void 0),
          e
        );
      })())();
      window.g_DoorStore = aa;
      var na = new ((function() {
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
            return Object(B.b)(this, void 0, void 0, function() {
              var t, a, n, r, o;
              return Object(B.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return null != this.m_rgRecentEvent
                      ? [3, 5]
                      : ((t = Object(H.f)(
                          "recent_events",
                          "application_config"
                        )),
                        this.ValidateStoreDefault(t)
                          ? (this.AddAllRecentEvents(t), [3, 5])
                          : [3, 1]);
                  case 1:
                    (this.m_rgRecentEvent = new Array()),
                      (a = {
                        cc: H.c.COUNTRY || "US",
                        l: H.c.LANGUAGE,
                        clan_account_id: i.clanSteamID.GetAccountID(),
                        clan_event_gid: i.GID
                      }),
                      (n =
                        H.c.STORE_BASE_URL + "saleaction/ajaxrecentsaleevents"),
                      (e.label = 2);
                  case 2:
                    return (
                      e.trys.push([2, 4, , 5]),
                      [4, g.a.get(n, { params: a, withCredentials: !0 })]
                    );
                  case 3:
                    return (
                      1 == (r = e.sent()).data.success &&
                        (this.AddAllRecentEvents(r.data.recent_events),
                        N.c.RegisterClanEvents(r.data.partnerevents)),
                      [3, 5]
                    );
                  case 4:
                    return (
                      (o = e.sent()),
                      console.error(
                        "GetRecentEventsForSalesPage failed",
                        Object(et.a)(o)
                      ),
                      [3, 5]
                    );
                  case 5:
                    return [2, this.m_rgRecentEvent];
                }
              });
            });
          }),
          Object(B.c)([m.y], e.prototype, "m_rgRecentEvent", void 0),
          Object(B.c)([m.h], e.prototype, "AddAllRecentEvents", null),
          e
        );
      })())();
      window.g_EventListSaleStore = na;
      var ra = new ((function() {
          function e() {
            (this.m_saleExp = {}), (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var e;
              this.m_bLoadedFromConfig ||
                ((e = document.getElementById("application_config")) &&
                  (this.m_saleExp = Object(H.f)("xprmnt", e)),
                (this.m_bLoadedFromConfig = !0));
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
        oa = (function() {
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
                e = Object(H.f)("subscriptionsapps", "application_config");
              this.ValidateStoreDefault(e) &&
                Object(m.A)(function() {
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
              return Object(B.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_mapMasterAppToBenefitApps.has(r)
                        ? [2, !0]
                        : [
                            4,
                            g.a.get(
                              H.c.STORE_BASE_URL +
                                "actions/ajaxresolvesubscriptions",
                              {
                                params: {
                                  master_app_id: r,
                                  cc: H.c.COUNTRY,
                                  origin: self.origin
                                }
                              }
                            )
                          ];
                    case 1:
                      return (
                        (t = e.sent()),
                        (a = t && t.data)
                          ? (Object(m.A)(function() {
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
            Object(B.c)(
              [m.y],
              e.prototype,
              "m_mapMasterAppToBenefitApps",
              void 0
            ),
            e
          );
        })(),
        ia = a("mZMQ"),
        la = (a("hmtA"), a("dgee")),
        sa = a.n(la),
        ca = a("SS32"),
        da = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.renderScroller = function() {
              var e = this.props.showArrows,
                t = this.props.visibleSlides,
                a = this.props.totalSlides,
                n = this.props.currentSlide;
              if (a <= t) return null;
              var r = (100 * n) / a,
                o = 100 * (1 - Math.min(n + t, a) / a),
                i = r + (50 * t) / a,
                l = 100 - i;
              return M.createElement(
                "div",
                { className: ca.pipScrollerContainer },
                e &&
                  M.createElement(
                    ia.a,
                    {
                      className: Object(R.a)(
                        ca.pipScrollButton,
                        ca.left,
                        ca.carouselNavButton
                      )
                    },
                    M.createElement(A.o, null)
                  ),
                M.createElement(
                  "div",
                  { className: ca.pipScroller },
                  M.createElement("div", { className: ca.scrollBackground }),
                  M.createElement("div", {
                    className: ca.scrollForeground,
                    style: { left: r + "%", right: o + "%" }
                  }),
                  M.createElement(
                    "div",
                    {
                      className: ca.scrollNavDiv,
                      style: { left: "0%", width: i + "%" }
                    },
                    M.createElement(
                      ia.a,
                      {
                        className: Object(R.a)(
                          ca.carouselNavButton,
                          ca.scrollNavButton
                        )
                      },
                      M.createElement("div", null)
                    )
                  ),
                  M.createElement(
                    "div",
                    {
                      className: ca.scrollNavDiv,
                      style: { right: "0%", width: l + "%" }
                    },
                    M.createElement(
                      ia.b,
                      {
                        className: Object(R.a)(
                          ca.carouselNavButton,
                          ca.scrollNavButton
                        )
                      },
                      M.createElement("div", null)
                    )
                  )
                ),
                e &&
                  M.createElement(
                    ia.b,
                    {
                      className: Object(R.a)(
                        ca.pipScrollButton,
                        ca.right,
                        ca.carouselNavButton
                      )
                    },
                    M.createElement(A.o, null)
                  )
              );
            }),
            (t.prototype.renderPips = function() {
              for (
                var e,
                  t = new Array(),
                  a = !1,
                  n = this.props.visibleSlides,
                  r = this.props.totalSlides,
                  o = this.props.currentSlide,
                  i = o - 3 * n,
                  l = o + 4 * n,
                  l = Math.max(l, 9 * n),
                  i = Math.min(i, r - 9 * n),
                  s = 1,
                  c = 0;
                c < r;
                c++
              ) {
                c % n == 0 &&
                  ((e = !(i <= c && c < l) && (!(r - n <= c) && 0 !== c))
                    ? a ||
                      t.push(
                        M.createElement(
                          "div",
                          { className: ca.pipsSkipped },
                          "..."
                        )
                      )
                    : t.push(
                        M.createElement(
                          ia.d,
                          { slide: c, className: ca.pip },
                          M.createElement(
                            M.Fragment,
                            null,
                            M.createElement("img", { src: sa.a }),
                            M.createElement(
                              "div",
                              { className: ca.pipNumber },
                              s
                            )
                          )
                        )
                      ),
                  s++,
                  (a = e));
              }
              return M.createElement("div", { className: ca.pipContainer }, t);
            }),
            (t.prototype.render = function() {
              return this.renderScroller();
            }),
            t
          );
        })(M.Component),
        pa = Object(ia.g)(da, function(e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides
          };
        }),
        ua = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.GetNumElements = function() {
              return M.Children.count(this.props.children);
            }),
            (t.prototype.GetPageSize = function() {
              return Math.min(
                this.GetNumElements(),
                this.props.visibleElements
              );
            }),
            (t.prototype.RenderChildren = function() {
              return M.Children.map(this.props.children, function(e, t) {
                return M.createElement(
                  ia.e,
                  { key: "slide_" + t, index: t },
                  e
                );
              });
            }),
            (t.prototype.RenderBreadcrumbs = function(a) {
              return M.Children.map(this.props.children, function(e, t) {
                return t % a != 0
                  ? null
                  : M.createElement(
                      ia.d,
                      { slide: t, className: ca.pip },
                      M.createElement("img", { src: sa.a })
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
                M.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      ca.carouselBody,
                      this.props.className
                    )
                  },
                  M.createElement(
                    ia.c,
                    {
                      visibleSlides: this.props.visibleElements,
                      totalSlides: this.GetNumElements(),
                      naturalSlideWidth: 100 * o,
                      naturalSlideHeight: 100,
                      step: this.props.visibleElements,
                      infinite: !this.props.disableEdgeWrap,
                      isIntrinsicHeight: i
                    },
                    M.createElement(
                      "div",
                      { className: ca.sliderBody },
                      !n &&
                        M.createElement(
                          ia.a,
                          {
                            className: Object(R.a)(
                              ca.carouselBtnCtn,
                              ca.left,
                              ca.carouselNavButton
                            )
                          },
                          M.createElement(A.o, null)
                        ),
                      M.createElement(ia.f, null, this.RenderChildren()),
                      !n &&
                        M.createElement(
                          ia.b,
                          {
                            className: Object(R.a)(
                              ca.carouselBtnCtn,
                              ca.right,
                              ca.carouselNavButton
                            )
                          },
                          M.createElement(A.o, null)
                        )
                    ),
                    !r &&
                      (this.props.useTestScrollbar
                        ? M.createElement(pa, { showArrows: n })
                        : M.createElement(
                            "div",
                            { className: ca.breadcrumbContainer },
                            this.RenderBreadcrumbs(t)
                          ))
                  )
                )
              );
            }),
            t
          );
        })(M.Component),
        ma = a("qP7j"),
        ha = a.n(ma),
        va = new ((function() {
          function e() {}
          return (
            (e.prototype.DeleteForumTopic = function(r, o, i, l, s) {
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          H.c.COMMUNITY_BASE_URL +
                          "forum/" +
                          r.GetAccountID() +
                          "/" +
                          o +
                          "/deletetopic/"),
                        null != i && "" != i && (t += i + "/"),
                        (a = new FormData()).append("sessionid", H.c.SESSIONID),
                        a.append("gidforumtopic", l),
                        [
                          4,
                          g.a.post(t, a, {
                            withCredentials: !0,
                            cancelToken: s.token
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
        _a = (function(a) {
          function l(e) {
            var t = a.call(this, e) || this;
            return (
              (t.m_cancelSignal = g.a.CancelToken.source()),
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
            Object(B.d)(l, a),
            (l.prototype.componentDidMount = function() {
              this.props.bNoConfirmationNeeded && this.OnDelete();
            }),
            (l.prototype.OnDeleteEventSuccessCallback = function() {
              this.props.partnerEventStore.ResetModel(),
                this.state.bDeleteCommentThread
                  ? va
                      .DeleteForumTopic(
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
            (l.prototype.OnDeleteForumTopicSuccessCallback = function() {
              this.setState({ dialogState: "success" });
            }),
            (l.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("component unmounted");
            }),
            (l.prototype.OnDeleteEventFailureCallback = function(e) {
              this.setState(
                Object(B.a)({ dialogState: "error" }, Object(et.a)(e))
              );
            }),
            (l.prototype.OnDeleteForumTopicFailureCallback = function(e) {
              this.setState(
                Object(B.a)(
                  { dialogState: "failed_thread_delete" },
                  Object(et.a)(e)
                )
              );
            }),
            (l.prototype.SetToWaiting = function() {
              "waiting" != this.state.dialogState &&
                this.setState({ dialogState: "waiting" });
            }),
            (l.prototype.OnDelete = function() {
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
                r != ye.g
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
            (l.prototype.OnChangeDeleteForum = function() {
              this.setState({
                bDeleteCommentThread: !this.state.bDeleteCommentThread
              });
            }),
            (l.prototype.render = function() {
              var e = this,
                t = this.props.eventModel,
                a = this.props.closeModal,
                n = "",
                r = new Array();
              switch (this.state.dialogState) {
                case "confirmation":
                  var o = t.GetNameWithFallback(Object(ye.f)(H.c.LANGUAGE)),
                    i = t.BIsVisibleEvent()
                      ? "#EventDisplay_AreYouSure_Visible"
                      : "#EventDisplay_AreYouSure",
                    n = Object(P.d)(i, o),
                    a = this.OnDelete;
                  t.BHasForumTopicGID() &&
                    r.push(
                      M.createElement(
                        "div",
                        {
                          key: "WantToDeleteCmtThread",
                          className: ha.a.Padding
                        },
                        M.createElement("input", {
                          type: "checkbox",
                          id: "del_cmt_post",
                          name: "del_cmt_post",
                          defaultChecked: this.state.bDeleteCommentThread,
                          onChange: this.OnChangeDeleteForum
                        }),
                        M.createElement(
                          "label",
                          { htmlFor: "del_cmt_post" },
                          Object(P.d)("#EventDisplay_DeleteEvent_Comment")
                        )
                      )
                    );
                  break;
                case "waiting":
                  (n = Object(P.d)("#EventDisplay_DeleteEvent_InProgress")),
                    r.push(M.createElement(de.a, { key: "throbber" }));
                  break;
                case "error":
                  (n = Object(P.d)("#EventDisplay_DeleteEvent_Error")),
                    r.push(
                      M.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++l.m_uniqueError,
                          className: ha.a.ErrorStyles
                        },
                        this.state.strErrorMsg
                      )
                    );
                  break;
                case "failed_thread_delete":
                  (n = Object(P.d)(
                    "#EventDisplay_DeleteEvent_ForumTopicError"
                  )),
                    r.push(
                      M.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++l.m_uniqueError,
                          className: ha.a.ErrorStyles
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
                  (n = Object(P.d)("#EventDisplay_DeleteEvent_Success")),
                    this.props.onDeleteSuccessAndCloseDialog &&
                      (a = function() {
                        e.props.onDeleteSuccessAndCloseDialog(),
                          e.props.closeModal();
                      });
              }
              return M.createElement(
                Re.c,
                {
                  strTitle: Object(P.d)("#EventDisplay_DeleteEvent"),
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
            (l.m_uniqueError = 0),
            Object(B.c)(
              [s.a],
              l.prototype,
              "OnDeleteEventSuccessCallback",
              null
            ),
            Object(B.c)(
              [s.a],
              l.prototype,
              "OnDeleteForumTopicSuccessCallback",
              null
            ),
            Object(B.c)(
              [s.a],
              l.prototype,
              "OnDeleteEventFailureCallback",
              null
            ),
            Object(B.c)(
              [s.a],
              l.prototype,
              "OnDeleteForumTopicFailureCallback",
              null
            ),
            Object(B.c)([s.a], l.prototype, "SetToWaiting", null),
            Object(B.c)([s.a], l.prototype, "OnDelete", null),
            Object(B.c)([s.a], l.prototype, "OnChangeDeleteForum", null),
            l
          );
        })(M.Component),
        ba = a("6eA3"),
        ga = a.n(ba),
        ya = (function(t) {
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
            Object(B.d)(e, t),
            (e.prototype.OnDeleteVerifyRequest = function(e) {
              Object(xe.c)(
                M.createElement(_a, {
                  eventModel: this.props.eventModel,
                  onDeleteSuccessAndCloseDialog: this
                    .OnDeleteSuccessAndComplete,
                  partnerEventStore: this.props.partnerEventStore
                }),
                Object(Pe.o)(e)
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
                return Object(Le.h)(n, Le.a.k_eCommunityAdminPage);
              var i = x.a.Get().GetPartnerEventPermissions(n.clanSteamID),
                l = n.visibility_state == N.b.k_EEventStateVisible,
                s = n.visibility_state == N.b.k_EEventStateStaged;
              if (i.can_edit || i.support_user) {
                var c = [];
                if (void 0 !== this.state.nMaxSaleDayIndex)
                  for (var d = 0; d <= this.state.nMaxSaleDayIndex; ++d)
                    c.push({
                      label: Object(P.d)("#SalePage_Admin_SaleEventDay", d + 1),
                      data: d
                    });
                return M.createElement(
                  b.a,
                  null,
                  M.createElement(
                    "div",
                    { className: ba.DisplayAdminPanel },
                    M.createElement(
                      "span",
                      { className: ba.DisplayAdminPanel_Title },
                      Object(P.d)("#EventDisplay_Admin_Title")
                    ),
                    M.createElement(
                      "div",
                      { className: ba.DisplayAdminPanel_ctn },
                      a,
                      a &&
                        M.createElement(
                          "span",
                          { className: ba.DisplayAdminPanel_Spacer },
                          " "
                        ),
                      M.createElement(
                        Le.c,
                        {
                          eventModel: n,
                          route: Le.a.k_eCommunityEdit,
                          openNewWindow: o,
                          className: Object(R.a)(Dt.Button, ba.AdminButton)
                        },
                        Object(P.d)("#EventEditor_Edit")
                      ),
                      r &&
                        M.createElement(
                          "span",
                          {
                            className: Dt.Button + " " + ba.AdminButton,
                            onClick: this.OnDeleteVerifyRequest
                          },
                          Object(P.d)("#EventDisplay_DeleteEvent")
                        ),
                      !l &&
                        M.createElement(
                          M.Fragment,
                          null,
                          M.createElement(
                            Le.c,
                            {
                              eventModel: n,
                              route: Le.a.k_eCommunityPublish,
                              openNewWindow: o,
                              className: Object(R.a)(Dt.Button, ba.AdminButton)
                            },
                            Object(P.d)(
                              s
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish"
                            )
                          )
                        ),
                      M.createElement(
                        Le.c,
                        {
                          eventModel: n,
                          route: Le.a.k_eCommunityAdminPage,
                          openNewWindow: o,
                          className: Object(R.a)(Dt.Button, ba.AdminButton)
                        },
                        Object(P.d)("#EventDisplay_Events")
                      ),
                      Boolean(
                        void 0 !== this.state.nMaxSaleDayIndex && 0 < c.length
                      ) &&
                        M.createElement(h.g, {
                          strDropDownClassName: Dt.DropDownScroll,
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
                        M.createElement(
                          Le.c,
                          {
                            eventModel: n,
                            route: Le.a.k_eStoreSalePage,
                            openNewWindow: o,
                            className: Object(R.a)(Dt.Button, ba.AdminButton)
                          },
                          Object(P.d)("#EventDisplay_SalesPage")
                        ),
                      Boolean(
                        n.jsondata.bSaleEnabled && H.i.is_support && n.GID
                      ) &&
                        M.createElement(
                          "a",
                          {
                            href:
                              (H.c.IN_CLIENT ? "steam://openurl/" : "") +
                              "https://steamstats.valve.org/sales/details/?gid=" +
                              n.GID +
                              "&clanid=" +
                              n.clanSteamID.GetAccountID(),
                            target: H.c.IN_CLIENT ? "" : "_blank",
                            className: Object(R.a)(
                              Dt.Button,
                              ba.AdminButton,
                              Dt.ValveOnlyBackground
                            )
                          },
                          Object(P.d)("#EventDisplay_StatsPage")
                        )
                    )
                  )
                );
              }
              return M.createElement("span", null);
            }),
            Object(B.c)([s.a], e.prototype, "OnDeleteVerifyRequest", null),
            Object(B.c)([s.a], e.prototype, "OnDeleteSuccessAndComplete", null),
            Object(B.c)([s.a], e.prototype, "OnChangeVisibilityDate", null),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component);
      var Ea = a("bWts"),
        Sa = a.n(Ea),
        fa = a("XsxU"),
        Ca = a.n(fa),
        Oa = a("MnIK"),
        wa = a("Lql7"),
        Ta = a("uIWk"),
        Ia = a("7u3m"),
        ka = a.n(Ia),
        Da = a("D4G2"),
        ja = a.n(Da),
        Aa = a("Ff1b"),
        La = a.n(Aa),
        Na = a("go9d"),
        Ga = a.n(Na),
        Ma = a("/PpB"),
        Ba = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            t.m_cancelSignal = g.a.CancelToken.source();
            var a = L.a.InitFromClanID(e.creatorID.clan_account_id);
            return (
              (t.state = {
                bLoading: !Ta.a.BHasCreatorHomeLoaded(a) || !G.a.BIsLoaded()
              }),
              t
            );
          }
          return (
            Object(B.d)(e, n),
            (e.prototype.componentDidMount = function() {
              var e,
                t = this;
              this.state.bLoading &&
                (G.a.HintLoad(),
                (e = L.a.InitFromClanID(this.props.creatorID.clan_account_id)),
                Ta.a
                  .LoadCreatorHome(e, this.m_cancelSignal)
                  .then(function(e) {
                    G.a
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
                  }));
            }),
            (e.prototype.HandleLoadingError = function(e) {
              var t = Object(et.a)(e);
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
                    M.createElement(Ra, {
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
                t = x.a.Get().GetPartnerEventPermissions(e.clanSteamID);
              x.a.Get().BIsUserLoggedIn()
                ? t.limited_user
                  ? Object(xe.d)(M.createElement(Ma.a, null), window)
                  : this.setState(
                      { bApplyingFollowing: !0 },
                      this.TakeFollowAction
                    )
                : Object(xe.d)(
                    M.createElement(Re.c, {
                      strTitle: Object(P.d)("#EventDisplay_Share_NotLoggedIn"),
                      strDescription: Object(P.d)(
                        "#EventDisplay_Share_NotLoggedIn_Description"
                      ),
                      strOKButtonText: Object(P.d)("#MobileLogin_SignIn"),
                      onOK: function() {
                        return Object(it.a)();
                      }
                    }),
                    window
                  );
            }),
            (e.prototype.TakeFollowAction = function() {
              var a = this,
                n = this.props.creatorID,
                e = L.a.InitFromClanID(n.clan_account_id),
                r = G.a.BIsFollowingCreator(e),
                o = G.a.BIsIgnoringCreator(e);
              G.a
                .UpdateFollowOrIgnoreCurator(e, !o, !(o || r))
                .then(function(e) {
                  var t = Ta.a.GetCreatorHomeByID(n);
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
                return M.createElement(
                  "div",
                  { className: wa.DevSummaryWidgetCtn },
                  M.createElement(de.a, null)
                );
              if (this.state.strErrorMsg) return M.createElement("div", null);
              var e = this.props,
                t = e.creatorID,
                a = e.bShowTagline,
                n = L.a.InitFromClanID(t.clan_account_id),
                r = Ta.a.GetCreatorHomeByID(t),
                o = t.type,
                i =
                  "developer" == t.type
                    ? Object(P.d)("#CreatorHome_DevelopedBy")
                    : "publisher" == t.type
                    ? Object(P.d)("#CreatorHome_PublishedBy")
                    : Object(P.d)("#CreatorHome_InFranchise"),
                l = r.GetNumFollowers(),
                s = r.GetURL(o),
                c = this.GetSocialMediaElements(r),
                d = G.a.BIsFollowingCreator(n),
                p = G.a.BIsIgnoringCreator(n);
              return M.createElement(
                b.a,
                null,
                M.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      wa.DevSummaryCtn,
                      this.props.bSmallFormat ? wa.SmallFormat : wa.LargeFormat
                    )
                  },
                  !this.props.bHideCreatorType &&
                    M.createElement("span", { className: wa.Title }, i),
                  M.createElement(
                    "div",
                    { className: wa.DevSummaryWidgetCtn },
                    M.createElement("div", {
                      className: wa.DevSummaryBackground,
                      style: {
                        backgroundImage:
                          "url(" + r.GetAvatarURLFullSize() + " )"
                      }
                    }),
                    M.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          wa.DevSummaryContent,
                          Dt.FlexColumnContainer,
                          Dt.FlexContainSpaceBetween
                        )
                      },
                      M.createElement(
                        "div",
                        { className: Dt.FlexRowContainer },
                        M.createElement(
                          "a",
                          { href: s },
                          M.createElement("img", {
                            className: wa.Avatar,
                            src: r.GetAvatarURLFullSize()
                          })
                        ),
                        M.createElement(
                          "div",
                          {
                            className: Object(R.a)(
                              Dt.FlexColumnContainer,
                              wa.CreatorDescCtn
                            )
                          },
                          M.createElement(
                            "div",
                            {
                              className: Object(R.a)(
                                wa.CreatorTitleCtn,
                                Dt.FlexColumnContainer
                              )
                            },
                            M.createElement(
                              "a",
                              { href: s, className: wa.CreatorNameName },
                              r.GetName()
                            ),
                            a &&
                              M.createElement(
                                "div",
                                {
                                  className: Object(R.a)(
                                    Dt.FlexColumnContainer,
                                    wa.CreatorTagline
                                  )
                                },
                                r.GetTagLine()
                              )
                          ),
                          M.createElement(
                            "div",
                            {
                              className: this.props.bSmallFormat
                                ? Dt.FlexColumnContainer
                                : Dt.FlexRowContainer
                            },
                            M.createElement(
                              "div",
                              { className: wa.FollowBtnCtn },
                              M.createElement(
                                "div",
                                {
                                  className: Object(R.a)(
                                    Dt.Button,
                                    wa.FollowButton
                                  ),
                                  onClick: this.OnFollowClick
                                },
                                this.state.bApplyingFollowing &&
                                  M.createElement(de.a, { size: "small" }),
                                !this.state.bApplyingFollowing &&
                                  (d || p) &&
                                  M.createElement("img", {
                                    style: { height: "16px" },
                                    src:
                                      "https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_selected.png"
                                  }),
                                M.createElement(
                                  "div",
                                  { className: wa.FollowBtnText },
                                  !this.state.bApplyingFollowing &&
                                    (d
                                      ? Object(P.d)("#Button_Followed")
                                      : p
                                      ? Object(P.d)("#Button_Ignored")
                                      : Object(P.d)("#Button_Follow"))
                                )
                              ),
                              M.createElement(
                                "div",
                                { className: wa.Followers },
                                M.createElement(
                                  "span",
                                  null,
                                  l.toLocaleString(P.c.GetPreferredLocales())
                                ),
                                M.createElement("br", null),
                                Object(P.d)("#CreatorHome_JustFollowers")
                              )
                            ),
                            0 < c.length &&
                              M.createElement(
                                "div",
                                {
                                  className: Object(R.a)(
                                    wa.SocialContainer,
                                    Dt.FlexColumnContainer
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
            Object(B.c)([s.a], e.prototype, "OnFollowClick", null),
            Object(B.c)([s.a], e.prototype, "TakeFollowAction", null),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        xa = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bLoading: !_.a.BIsAppidLoaded(e.appid) }), t;
          }
          return (
            Object(B.d)(e, a),
            (e.prototype.componentDidMount = function() {
              var a = this,
                e = this.props.appid;
              this.state.bLoading &&
                _.a
                  .EnsureStoreCapsuleInfoLoaded(e)
                  .then(function() {
                    return a.setState({ bLoading: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(et.a)(e);
                    console.log(
                      "CreatorHomeEmbedForApp - failed to load appinfo " +
                        t.strErrorMsg
                    ),
                      a.setState({ strErrorMsg: t.strErrorMsg, bLoading: !1 });
                  });
            }),
            (e.prototype.render = function() {
              if (this.state.bLoading)
                return M.createElement(
                  "div",
                  { className: wa.DevSummaryWidgetCtn },
                  M.createElement(de.a, null)
                );
              var e = this.props,
                t = e.appid,
                a = e.eventModel,
                n = _.a.GetStoreCapsuleInfo(t).GetAppStoreData();
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
                  M.createElement(
                    b.a,
                    null,
                    M.createElement(Ba, {
                      creatorID: r || (o || i),
                      eventModel: a,
                      bSmallFormat: !0
                    })
                  )
                );
              }
              return M.createElement("div", null);
            }),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        Ra = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.social,
                t = "";
              switch (e.external_type) {
                case 3:
                case 7:
                  t = ka.a;
                  break;
                case 5:
                  t = La.a;
                  break;
                case 4:
                  t = ja.a;
                  break;
                case 6:
                  t = Ga.a;
              }
              return M.createElement(
                "a",
                {
                  href:
                    (H.c.IN_CLIENT ? "steam://openurl_external/" : "") +
                    e.external_url,
                  target: H.c.IN_CLIENT ? void 0 : "_blank",
                  "data-tooltip-text": e.external_user_name
                    ? e.external_user_name
                    : e.external_url,
                  className: Object(R.a)(wa.SocialLink)
                },
                M.createElement("img", {
                  className: Object(R.a)(wa.SocialImg),
                  src: t
                }),
                M.createElement(
                  "div",
                  null,
                  e.external_follows.toLocaleString(P.c.GetPreferredLocales())
                )
              );
            }),
            t
          );
        })(M.Component),
        Pa = a("TOXn"),
        Ha = a("NKJh"),
        Fa = a.n(Ha),
        za = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                events: [],
                bLoading: !1,
                bShowInfiniteScrollOverlay: !1
              }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.PrepLoadEvents = function() {
              var e = this.props,
                t = e.partnerEventStore,
                a = e.eventModel;
              t &&
                a.BHasAnnouncementGID() &&
                this.setState({ bLoading: !0 }, this.ActualLoadEvent);
            }),
            (e.prototype.ActualLoadEvent = function() {
              return Object(B.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r = this;
                return Object(B.e)(this, function(e) {
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
                            "EventDetails: " + Object(et.a)(e).strErrorMsg
                          );
                      }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.HandleTrackingWhenAdjacentLoadCompleted = function() {
              var t,
                e = this.props,
                a = e.eventModel,
                n = e.trackingLocation;
              n &&
                ((t = x.a.Get().GetTracker()),
                this.state.events &&
                  0 < this.state.events.length &&
                  this.state.events
                    .filter(function(e) {
                      return e.BIsPartnerEvent();
                    })
                    .forEach(function(e) {
                      return t.MarkEventShown(
                        e.GID,
                        e.clanSteamID.GetAccountID(),
                        n
                      );
                    }),
                a.BIsPartnerEvent() &&
                  a.BIsVisibleEvent() &&
                  t.MarkEventRead(a.GID, a.clanSteamID.GetAccountID(), n),
                t.Flush());
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
              var l = this.props.partnerEventStore;
              Ce.f(n);
              for (var s = 0, c = n; s < c.length; s++) {
                var d = c[s],
                  p = l.GetClanEventFromAnnouncementGID(d);
                if (
                  p &&
                  p.GID != a.GID &&
                  p.AnnouncementGID != a.AnnouncementGID &&
                  (p &&
                    p.visibility_state == N.b.k_EEventStateVisible &&
                    (e.push(
                      M.createElement(Ua, {
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
                return M.createElement(tt, {
                  appid: n,
                  eventModel: t,
                  announcementGID: t.GetAnnouncementGID(),
                  closeModal: this.HideInfiniteScroller,
                  partnerEventStore: a
                });
              if (this.state.bLoading)
                return M.createElement(de.a, {
                  position: "center",
                  size: "medium"
                });
              if (0 == this.state.events.length)
                return M.createElement("div", null);
              var r = _.a.GetStoreCapsuleInfo(n).GetAppStoreData(),
                o = E.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                );
              if (!o)
                return (
                  Object(pe.a)(
                    o,
                    "PartnerEventRow - clan info (" +
                      t.clanSteamID.GetAccountID() +
                      ") is missing"
                  ),
                  null
                );
              var i = this.ConstructEventRowCapsules();
              if (0 == i.length) return M.createElement("div", null);
              var l = t.BHasAnnouncementGID();
              return M.createElement(
                "div",
                { className: Ca.a.OtherEventsCtn },
                M.createElement(
                  "div",
                  { className: jt.a.EventSectionTitleCtn },
                  M.createElement(
                    "div",
                    { className: jt.a.EventSectionTitle },
                    Object(P.k)(
                      "#EventBrowse_MoreEventsTitle",
                      o.is_ogg ? r.title : o.group_name
                    ),
                    " "
                  ),
                  M.createElement(
                    "div",
                    { className: jt.a.EventSectionSpacer },
                    " "
                  ),
                  l && this.props.bViewAllShowInfiniteScroll
                    ? M.createElement(
                        "div",
                        {
                          className: jt.a.EventSectionMoreBtn,
                          onClick: this.OnViewAll
                        },
                        Object(P.d)("#EventBrowse_MoreEventsBtn")
                      )
                    : M.createElement(
                        Le.c,
                        {
                          eventModel: t,
                          route: Le.a.k_eViewWebSiteHub,
                          className: jt.a.EventSectionMoreBtn
                        },
                        Object(P.d)("#EventBrowse_MoreEventsBtn")
                      )
                ),
                M.createElement("div", { className: Ca.a.OtherEvents }, i)
              );
            }),
            Object(B.c)([s.a], e.prototype, "PrepLoadEvents", null),
            Object(B.c)([s.a], e.prototype, "ActualLoadEvent", null),
            Object(B.c)(
              [s.a],
              e.prototype,
              "HandleTrackingWhenAdjacentLoadCompleted",
              null
            ),
            Object(B.c)([s.a], e.prototype, "OnViewAll", null),
            Object(B.c)([s.a], e.prototype, "HideInfiniteScroller", null),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        Ua = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.imageURLOverride,
                n = e.openNewWindow,
                r = e.appInfo,
                o = e.langOverride,
                i = e.onClick;
              if (!t)
                return M.createElement("div", {
                  className: Ca.a.OtherEvents_EventCtn
                });
              var l = o || Object(ye.f)(H.c.LANGUAGE),
                s =
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        l,
                        Ee.c.capsule_main
                      ),
                c = t.GetNameWithFallback(l),
                d = t.GetCategoryAsString(),
                p = t.GetSummaryWithFallback(l),
                u = t.GetSubTitleWithLanguageFallback(l);
              return (
                u && (30 < u.length || 30 < c.length) && (u = void 0),
                M.createElement(
                  M.Fragment,
                  null,
                  M.createElement(
                    Le.c,
                    {
                      className: Object(R.a)(
                        Ca.a.OtherEvents_EventCtn,
                        Ca.a.HoversEnabled
                      ),
                      eventModel: t,
                      route: Le.a.k_eView,
                      openNewWindow: n,
                      onClick: i
                    },
                    M.createElement(
                      "div",
                      { className: Ca.a.EventSummaryContainer },
                      M.createElement(
                        "div",
                        { className: Ca.a.EventSummaryType },
                        d
                      ),
                      M.createElement(
                        "div",
                        { className: Ca.a.EventSummaryText },
                        p
                      )
                    ),
                    M.createElement("div", {
                      className: Ca.a.OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: "url(" + s + ")"
                      }
                    }),
                    M.createElement(
                      "div",
                      { className: Ca.a.OtherEvents_ContentCtn },
                      M.createElement(
                        "div",
                        { className: Ca.a.OtherEvents_MainImageCtn },
                        M.createElement("img", {
                          src: s,
                          className: Ca.a.OtherEvents_MainImage
                        })
                      ),
                      M.createElement(
                        "div",
                        { className: Ca.a.OtherEvents_TextCtn },
                        M.createElement(
                          "div",
                          { className: Ca.a.OtherEvents_TextTitle },
                          c
                        ),
                        u &&
                          M.createElement(
                            "div",
                            { className: Ca.a.OtherEvents_SubTitle },
                            u
                          ),
                        M.createElement(fe.a, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                        })
                      )
                    )
                  ),
                  r &&
                    M.createElement(
                      "span",
                      { className: Ca.a.AppCapsuleCtn },
                      M.createElement(
                        Me.a,
                        {
                          strURL: H.c.STORE_BASE_URL + "app/" + r.appid,
                          type: "app",
                          id: r.appid,
                          hoverClassName: Ca.a.AppCapsuleImageHover
                        },
                        M.createElement("img", {
                          className: Ca.a.AppCapsuleImage,
                          src: this.props.appInfo.tiny_capsule
                        })
                      ),
                      M.createElement(
                        "span",
                        { className: Ca.a.AppCapsulePrice },
                        Boolean(this.props.appInfo.discount_percent) &&
                          M.createElement(
                            "span",
                            { className: Fa.a.StoreSaleDiscountBox },
                            "-" + this.props.appInfo.discount_percent + "%"
                          ),
                        !this.props.appInfo.is_free &&
                          this.props.appInfo.price &&
                          M.createElement(
                            "span",
                            { className: Fa.a.StoreSalePriceBox },
                            this.props.appInfo.price
                          )
                      )
                    )
                )
              );
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        Va = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.imageURLOverride,
                n = e.openNewWindow,
                r = e.onClick;
              if (!t)
                return M.createElement("div", {
                  className: Ca.a.OtherEvents_EventCtn
                });
              var o = Object(ye.f)(H.c.LANGUAGE),
                i =
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        o,
                        Ee.c.capsule_main
                      ),
                l = t.GetNameWithFallback(o),
                s = t.GetCategoryAsString();
              return M.createElement(
                Le.c,
                {
                  className:
                    Ca.a.OtherEvents_EventCtn + " " + Ca.a.HorizontalEvent,
                  eventModel: t,
                  route: Le.a.k_eView,
                  openNewWindow: n,
                  onClick: r
                },
                M.createElement(
                  "div",
                  { className: Ca.a.OtherEvents_ContentCtn },
                  M.createElement(
                    "div",
                    { className: Ca.a.OtherEvents_MainImageCtn },
                    M.createElement("img", {
                      src: i,
                      className: Ca.a.OtherEvents_MainImage
                    })
                  )
                ),
                M.createElement(
                  "div",
                  { className: Ca.a.OtherEvents_TextCtn },
                  M.createElement(
                    "div",
                    { className: Ca.a.HorizontalDescriptionCtn },
                    M.createElement(
                      "div",
                      { className: Ca.a.HorizontalDescription },
                      s
                    ),
                    M.createElement(fe.a, {
                      bSingleLine: !0,
                      dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                    })
                  ),
                  M.createElement("div", { className: Ca.a.HorizontalTitle }, l)
                )
              );
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        Wa = (function() {
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
            Object(B.c)([m.y], e.prototype, "m_stats", void 0),
            Object(B.c)([m.y], e.prototype, "m_lastUpdateTime", void 0),
            e
          );
        })(),
        Za = new ((function() {
          function e() {
            (this.m_mapPerEventStats = new Map()),
              (this.m_mapSummaryStats = new Map()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var e,
                t,
                n = this;
              this.m_bLoadedFromConfig ||
                ((e = Object(H.f)("trackingdatasummary", "application_config")),
                this.ValidateStoreDefault(e) &&
                  this.m_mapSummaryStats.set(e.clan_account_id, new Wa(e)),
                (t = Object(H.f)("trackingdataevents", "application_config")),
                this.ValidateStoreDefaultList(t) &&
                  t.forEach(function(e) {
                    var t = L.a.InitFromClanID(e.clan_account_id),
                      a = n.GetKey(t, e.event_gid);
                    n.m_mapPerEventStats.set(a, new Wa(e));
                  }),
                (this.m_bLoadedFromConfig = !0));
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              return (
                !(!e || "object" != typeof e || !e.clan_account_id) &&
                ("number" == typeof e.clan_account_id && 0 < e.clan_account_id)
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
                  this.m_mapPerEventStats.set(a, new Wa(null)),
                this.m_mapPerEventStats.get(a)
              );
            }),
            (e.prototype.GetTotalStats = function(e) {
              return (
                this.LazyInit(),
                this.m_mapSummaryStats.has(e.GetAccountID()) ||
                  this.m_mapSummaryStats.set(e.GetAccountID(), new Wa(null)),
                this.m_mapSummaryStats.get(e.GetAccountID())
              );
            }),
            (e.prototype.GetKey = function(e, t) {
              return e.GetAccountID() + "_" + t;
            }),
            (e.prototype.LoadStatsForEvents = function(c, d, p) {
              return Object(B.b)(this, void 0, void 0, function() {
                var n,
                  t,
                  a,
                  r,
                  o,
                  i,
                  l,
                  s = this;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        (this.LazyInit(),
                        (n = Date.now() / 1e3),
                        !(t = d.filter(function(e) {
                          var t = s.GetKey(c, e),
                            a = s.m_mapPerEventStats.get(t);
                          return (
                            !a ||
                            null == a.m_stats ||
                            a.m_lastUpdateTime < n - 3600
                          );
                        })) || 0 == t.length)
                      )
                        return [2];
                      (a =
                        Object(H.d)() + "actions/ajaxgetpartnereventsreport"),
                        (r = {
                          sessionid: H.c.SESSIONID,
                          clan_account_id: c.GetAccountID(),
                          gidlist: t.join(",")
                        }),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          g.a.get(a, {
                            params: r,
                            withCredentials: !0,
                            cancelToken: p.token
                          })
                        ]
                      );
                    case 2:
                      return (
                        (o = e.sent()),
                        Object(m.A)(function() {
                          s.m_mapSummaryStats.set(
                            c.GetAccountID(),
                            new Wa(o.data.summary)
                          ),
                            o.data.events_detail.forEach(function(e) {
                              var t = s.GetKey(c, e.event_gid);
                              s.m_mapPerEventStats.has(t)
                                ? s.m_mapPerEventStats.get(t).reset(e)
                                : s.m_mapPerEventStats.set(t, new Wa(e));
                            });
                        }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = e.sent()),
                        (l = Object(et.a)(i)),
                        console.error(
                          "CPartnerEventReportingStore " + l.strErrorMsg,
                          l
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            Object(B.c)([m.y], e.prototype, "m_mapPerEventStats", void 0),
            Object(B.c)([m.y], e.prototype, "m_mapSummaryStats", void 0),
            Object(B.c)([m.h], e.prototype, "LazyInit", null),
            e
          );
        })())(),
        Ya = a("sGzE"),
        qa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.summary,
                a = e.bIncludeDescription;
              return 0 == t.total_read + t.total_showm
                ? null
                : M.createElement(
                    "div",
                    null,
                    M.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          Ya.StatsCtnTitle,
                          a ? Ya.NormalStatsMode : Ya.SmallStatsMode
                        )
                      },
                      M.createElement(
                        "h1",
                        null,
                        Object(P.d)("#EventDashBoard_SummaryStats_Title")
                      ),
                      Boolean(a) &&
                        M.createElement(
                          "p",
                          null,
                          Object(P.d)("#EventDashBoard_SummaryStats_Desc"),
                          " ",
                          M.createElement(
                            "a",
                            {
                              href:
                                "https://partner.steamgames.com/doc/marketing/event_tools/stats",
                              target: "_blank"
                            },
                            Object(P.d)("#EventDashBoard_SummaryStats_Link")
                          )
                        )
                    ),
                    M.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          Ya.StatsCtn,
                          a ? Ya.NormalStatsMode : Ya.SmallStatsMode
                        )
                      },
                      M.createElement(
                        "div",
                        { className: Ya.StatsLeftSection },
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle_ctn },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)("#EventDashBoard_Location_LibraryHome")
                          )
                        ),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_LibraryHome_Shown"
                            )
                          ),
                          M.createElement(
                            "span",
                            null,
                            t.library_overview_shown.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_LibraryHome_Read"
                            )
                          ),
                          M.createElement(
                            "span",
                            null,
                            t.library_overview_read.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        M.createElement("br", null),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle_ctn },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Location_LibraryDetail"
                            )
                          )
                        ),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Shown"
                            )
                          ),
                          M.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_shown.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Read"
                            )
                          ),
                          M.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_read.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        M.createElement("br", null),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_AppDetailActivity_Shown"
                            )
                          ),
                          M.createElement(
                            "span",
                            null,
                            t.app_details_activity_shown.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_AppDetailActivity_Read"
                            )
                          ),
                          M.createElement(
                            "span",
                            null,
                            t.app_details_activity_read.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        )
                      ),
                      M.createElement(
                        "div",
                        { className: Ya.StatsRightSection },
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle_ctn },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)("#EventDashBoard_Location_StoreDetail")
                          )
                        ),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_StoreAppPage_Shown"
                            )
                          ),
                          M.createElement(
                            "span",
                            null,
                            t.store_app_page_shown.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_StoreAppPage_Read"
                            )
                          ),
                          M.createElement(
                            "span",
                            null,
                            t.store_app_page_read.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        M.createElement("br", null),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle_ctn },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Location_CommunityDetail"
                            )
                          )
                        ),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_Community_Shown"
                            )
                          ),
                          M.createElement(
                            "span",
                            null,
                            t.community_hub_shown.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Summary_Community_Read"
                            )
                          ),
                          M.createElement(
                            "span",
                            null,
                            t.community_hub_read.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle_ctn },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)(
                              "#EventDashBoard_Location_NewsHubDetail"
                            )
                          )
                        ),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)("#EventDashBoard_Summary_NewsHub_Shown")
                          ),
                          M.createElement(
                            "span",
                            null,
                            t.news_hub_shown.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        ),
                        M.createElement(
                          "div",
                          { className: Ya.StatsTitle },
                          M.createElement(
                            "span",
                            null,
                            Object(P.d)("#EventDashBoard_Summary_NewsHub_Read")
                          ),
                          M.createElement(
                            "span",
                            null,
                            t.news_hub_read.toLocaleString(
                              P.c.GetPreferredLocales()
                            )
                          )
                        )
                      )
                    )
                  );
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        Ja = a("ZCZY"),
        Qa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.GenerateBreadCrumbs = function() {
              var t = new Array();
              return (
                this.props.crumbs.forEach(function(e) {
                  e.url.startsWith("http")
                    ? t.push(
                        M.createElement(
                          "a",
                          { key: "anchor_" + e.name, href: e.url },
                          e.name
                        )
                      )
                    : t.push(
                        M.createElement(
                          l.b,
                          { key: "link_" + e.name, to: e.url },
                          e.name
                        )
                      ),
                    t.push(
                      M.createElement("span", { key: e.name + "span" }, " > ")
                    );
                }),
                t
              );
            }),
            (t.prototype.render = function() {
              var e = this.GenerateBreadCrumbs();
              return M.createElement(
                "div",
                { className: Object(R.a)(Ja.BreadContainer) },
                M.createElement("div", { className: "blockbg" }, e),
                M.createElement("div", { style: { clear: "left" } })
              );
            }),
            t
          );
        })(M.Component),
        Ka = a("4sqd"),
        Xa = a("5L1o"),
        $a = M.lazy(function() {
          return Promise.all([a.e(0), a.e(1), a.e(6)]).then(
            a.bind(null, "NIbt")
          );
        }),
        en = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = g.a.CancelToken.source()),
              (e.state = {
                bLoadingAppInfo: !_.a.BIsAppidLoaded(e.props.event.appid),
                bLoadingClanInfo: !!E.a.GetClanInfoByClanAccountID(
                  e.props.event.clanSteamID.GetAccountID()
                )
              }),
              e
            );
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this;
              window.scrollTo(0, 0);
              var e = this.props.event.appid;
              this.state.bLoadingAppInfo &&
                _.a.EnsureStoreCapsuleInfoLoaded(e).then(function() {
                  return t.setState({ bLoadingAppInfo: !1 });
                }),
                this.state.bLoadingClanInfo &&
                  E.a
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
                l = e.adminPanel,
                s = e.previewMode,
                c = e.otherEventRow,
                d = e.titleBar;
              if (
                !this.props.event.bLoaded ||
                this.state.bLoadingAppInfo ||
                this.state.bLoadingClanInfo
              )
                return M.createElement(
                  "div",
                  { className: $e.a.FlexCenter, style: { height: "400px" } },
                  M.createElement(de.a, {
                    size: "medium",
                    string: Object(P.d)("#Loading")
                  })
                );
              var p = t.GetDescriptionWithFallback(a),
                u = _.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData(),
                m = Object(H.d)() == H.c.STORE_BASE_URL,
                h = E.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                ),
                v = Object(Le.d)(
                  t,
                  m ? Le.a.k_eStoreNewsHub : Le.a.k_eCommunityAllNews,
                  "allowRelative",
                  h && h.vanity_url
                );
              return M.createElement(tn, {
                event: t,
                lang: a,
                titleBar: d,
                body: M.createElement(
                  b.a,
                  null,
                  M.createElement(
                    "div",
                    { className: ga.a.EventDetailTitleContainer },
                    M.createElement(Qa, {
                      crumbs: [
                        {
                          name: Object(P.d)("#BreadCrumbs_AllEvents"),
                          url: Object(Le.d)(
                            t,
                            Le.a.k_eStoreUsersNewsHub,
                            "allowRelative"
                          )
                        },
                        {
                          name: Object(P.d)("#BreadCrumbs_GameEvents", u.title),
                          url: v
                        }
                      ]
                    }),
                    M.createElement(
                      "div",
                      { className: ga.a.EventDetailTitle },
                      t.GetNameWithFallback(a)
                    ),
                    t.BHasSubTitle(a) &&
                      M.createElement(
                        "div",
                        { className: ga.a.EventDetailsSubTitle },
                        t.GetSubTitle(a)
                      )
                  ),
                  t.BHasBroadcastEnabled() &&
                    M.createElement(
                      "div",
                      { className: ga.a.EventBroadcastCtn },
                      M.createElement(
                        M.Suspense,
                        { fallback: M.createElement("div", null) },
                        M.createElement($a, {
                          event: this.props.event,
                          bIsPreview: this.props.previewMode,
                          accountIDs: this.props.previewMode
                            ? this.props.event.jsondata.broadcast_whitelist
                            : void 0
                        })
                      )
                    ),
                  M.createElement(
                    "div",
                    { className: ga.a.EventColumns },
                    M.createElement(
                      "div",
                      { className: ga.a.EventDetailsDescription },
                      M.createElement(
                        b.a,
                        null,
                        t.BHasTag("steam_award_nomination_request") &&
                          M.createElement(Ka.a, {
                            event: t,
                            lang: a,
                            previewMode: s
                          }),
                        t.BHasTag("steam_award_vote_request") &&
                          M.createElement(Ka.b, {
                            event: t,
                            lang: a,
                            previewMode: s
                          })
                      ),
                      M.createElement(
                        b.a,
                        null,
                        M.createElement(
                          "div",
                          {
                            className: Object(R.a)(
                              "EventDetailsBody",
                              ga.a.EventDetailsBody
                            )
                          },
                          M.createElement(Pa.a, {
                            text: p || "",
                            partnerEventStore: n,
                            showErrorInfo: s,
                            event: t,
                            languageOverride: a
                          })
                        )
                      ),
                      Boolean(t.jsondata.read_more_link) &&
                        M.createElement(
                          S.a,
                          {
                            className: Object(R.a)(jt.a.Button),
                            href: t.jsondata.read_more_link
                          },
                          Object(P.d)("#EventEmail_Button_ClickForMoreDetails")
                        ),
                      M.createElement("span", { className: jt.a.Clear }),
                      M.createElement(
                        b.a,
                        null,
                        M.createElement(kt.a, { appid: t.appid })
                      )
                    ),
                    M.createElement(
                      b.a,
                      null,
                      M.createElement(an, {
                        event: t,
                        lang: a,
                        nOverrideStartTime: o,
                        nOverrideEndTime: i
                      })
                    )
                  ),
                  M.createElement(_e.b, {
                    eventModel: t,
                    emoticonStore: r,
                    partnerEventStore: n
                  })
                ),
                postbody: M.createElement(b.a, null, l, c),
                footer: M.createElement(
                  b.a,
                  null,
                  M.createElement(
                    "div",
                    { className: ga.a.AppSummaryCtn },
                    M.createElement(
                      "div",
                      { className: ga.a.EventBodyPosition },
                      Boolean(
                        null != u.appid && null != u.appid && 0 != u.appid
                      ) &&
                        M.createElement(
                          "div",
                          { className: ga.a.AppSummaryWidgetTitleCtn },
                          M.createElement(
                            "span",
                            { className: ga.a.Title },
                            Object(P.d)("#CreatorHome_ThisGame")
                          ),
                          M.createElement(
                            "div",
                            { className: ga.a.AppSummaryWidgetCtn },
                            M.createElement(Xa.g, { id: t.appid })
                          )
                        ),
                      M.createElement(xa, {
                        appid: t.appid,
                        eventModel: t,
                        bSmallFormat: !0
                      })
                    )
                  )
                )
              });
            }),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        tn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.lang,
                n = e.titleBar,
                r = e.body,
                o = e.postbody,
                i = e.footer,
                l = t.GetImageURLWithFallback("background", a),
                s = t.BIsImageSafeForAllAges("background", a),
                c = "lang_" + Object(ye.e)(a),
                d = t.BImageNeedScreenshotFallback("background", a);
              return M.createElement(
                "div",
                {
                  className: Object(R.a)(
                    ga.a.EventDetailsPageContainer,
                    c,
                    jt.a.PartnerEventFont,
                    s
                      ? ga.a.DetailArtworkAgeAppropriate
                      : ga.a.DetailArtworkAgeNotAppropriate,
                    d && ga.a.NoTitleArtwork
                  )
                },
                n,
                M.createElement(
                  "div",
                  { className: ga.a.EventCoverImageCtn },
                  M.createElement(
                    "div",
                    { className: ga.a.EventCoverImageBlr },
                    M.createElement("div", {
                      className: ga.a.EventCoverImageFuzz,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + l + ")"
                      }
                    }),
                    M.createElement("div", {
                      className: ga.a.EventCoverImage,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + l + ")"
                      }
                    })
                  ),
                  M.createElement("div", { className: ga.a.CoverImageGradient })
                ),
                M.createElement(
                  "div",
                  { className: ga.a.EventBodyCtn },
                  M.createElement("div", {
                    className: ga.a.EventBackgroundBlurCtn
                  }),
                  M.createElement(
                    "div",
                    { className: ga.a.EventBodyPosition },
                    M.createElement(
                      "div",
                      { className: ga.a.EventBody },
                      M.createElement("div", {
                        className: ga.a.EventBackgroundBlur,
                        style: { backgroundImage: "url(" + l + ")" }
                      }),
                      M.createElement(b.a, null, r)
                    ),
                    Boolean(o) && M.createElement(b.a, null, o)
                  )
                ),
                Boolean(i) && M.createElement(b.a, null, i)
              );
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        an = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.componentDidMount = function() {
              _.a.EnsureStoreCapsuleInfoLoaded(this.props.event.appid);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.lang,
                n = e.nOverrideStartTime,
                r = e.nOverrideEndTime,
                o = t.GetCategoryAsString(),
                i = E.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                );
              if (!i)
                return (
                  Object(pe.a)(
                    i,
                    "EventDetailsRightColumn - clan info (" +
                      t.clanSteamID.GetAccountID() +
                      ") is missing"
                  ),
                  null
                );
              var l = j.a.GetTimeNowWithOverride(),
                s = n || t.GetStartTimeAndDateUnixSeconds();
              return M.createElement(
                "div",
                { className: ga.a.EventDetailTitleDesc },
                M.createElement(
                  "div",
                  { className: ga.a.EventDetailsSticky },
                  i.is_ogg
                    ? M.createElement(nn, { appid: i.appid })
                    : M.createElement(rn, { clanSteamID: t.clanSteamID }),
                  M.createElement(kt.b, {
                    event: t,
                    nOverrideEndTime: r,
                    nOverrideStartTime: n
                  }),
                  28 !== t.type &&
                    l < s &&
                    M.createElement(
                      "div",
                      { className: ga.a.EventDetailTimeInfo },
                      M.createElement(be.a, {
                        eventModel: t,
                        eventGID: t.GID,
                        lang: a
                      })
                    ),
                  M.createElement(
                    "div",
                    { className: ga.a.EventDetailUserType },
                    M.createElement(
                      "div",
                      { className: ga.a.RightSideTitles },
                      Object(P.d)("#EventDisplay_RightColumnTitle_EventType")
                    ),
                    M.createElement(
                      "div",
                      { className: ga.a.EventDetailsType },
                      o,
                      " "
                    )
                  ),
                  M.createElement(ln, { event: t })
                )
              );
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        nn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.render = function() {
              var t = this.props.appid;
              Object(pe.a)(t && 0 != t, "Expected Appid In Game Info Section");
              var e = _.a.GetStoreCapsuleInfo(t).GetAppStoreData();
              return M.createElement(
                "div",
                { className: ga.a.EventDetailGameCallToAction },
                M.createElement(
                  "div",
                  { className: ga.a.RightSideTitles },
                  ft.t.some(function(e) {
                    return t === e;
                  })
                    ? Object(P.d)("#EventDisplay_RightColumnTitle_Blog")
                    : Object(P.d)("#EventDisplay_RightColumnTitle_Game")
                ),
                M.createElement(Xa.f, {
                  capsule: { id: t, type: "game" },
                  bHidePriceIfOwned: !0,
                  bHideStatusBanners: !0
                }),
                M.createElement(
                  "div",
                  { className: Object(R.a)(ga.a.GameActions) },
                  M.createElement(Xa.i, {
                    info: e,
                    className: ga.a.ActionButton
                  })
                )
              );
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        rn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.clanSteamID,
                t = E.a.GetClanInfoByClanAccountID(e.GetAccountID());
              return t
                ? M.createElement(
                    "div",
                    { className: ga.a.EventDetailGameCallToAction },
                    M.createElement(
                      "div",
                      { className: ga.a.RightSideTitles },
                      t.group_name
                    ),
                    M.createElement(
                      "a",
                      { href: E.a.GetCreatorStoreURL(e) },
                      M.createElement("div", {
                        className: ga.a.EventDetailsAvatar,
                        style: {
                          backgroundImage: "url(" + t.avatar_full_url + ")"
                        }
                      })
                    )
                  )
                : (Object(pe.a)(
                    t,
                    "EventDetailsRightCreatorInfo - clan info (" +
                      e.GetAccountID() +
                      ") is missing"
                  ),
                  null);
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        on = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"],
        ln = (M.Component,
        (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_cancelSignal = g.a.CancelToken.source()), e;
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this,
                a = this.props.event;
              a.BIsPartnerEvent() &&
                a.BIsVisibleEvent() &&
                x.a
                  .Get()
                  .LoadSingleAppEventPermissions(a.clanSteamID)
                  .then(function(e) {
                    e &&
                      e.can_edit &&
                      Za.LoadStatsForEvents(
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
              if (!x.a.Get().GetPartnerEventPermissions(e.clanSteamID).can_edit)
                return null;
              var t =
                e.BIsPartnerEvent() &&
                e.BIsVisibleEvent() &&
                Za.GetStatsFor(e.clanSteamID, e.GID);
              return M.createElement(
                b.a,
                null,
                M.createElement(
                  "div",
                  { className: ga.a.EditorStatsCtn },
                  M.createElement(
                    "div",
                    { className: ga.a.EditorStatsRow },
                    M.createElement(
                      "span",
                      null,
                      Object(P.d)("#EventEditor_Comments")
                    ),
                    M.createElement(
                      "span",
                      null,
                      e.nCommentCount.toLocaleString(P.c.GetPreferredLocales())
                    )
                  ),
                  M.createElement(
                    "div",
                    { className: ga.a.EditorStatsRow },
                    M.createElement(
                      "span",
                      null,
                      Object(P.d)("#EventEditor_UpVotes")
                    ),
                    M.createElement(
                      "span",
                      null,
                      e.nVotesUp
                        ? e.nVotesUp.toLocaleString(P.c.GetPreferredLocales())
                        : 0
                    )
                  ),
                  M.createElement(
                    "div",
                    { className: ga.a.EditorStatsRow },
                    M.createElement(
                      "span",
                      null,
                      Object(P.d)("#EventEditor_DownVotes")
                    ),
                    M.createElement(
                      "span",
                      null,
                      e.nVotesDown
                        ? e.nVotesDown.toLocaleString(P.c.GetPreferredLocales())
                        : 0
                    )
                  )
                ),
                Boolean(t) &&
                  M.createElement(
                    "div",
                    { className: ga.a.EditorStatsCtn },
                    Object(P.d)("#EventDashBoard_SummaryStats_Admin_Title"),
                    M.createElement(qa, { summary: t.m_stats })
                  )
              );
            }),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component)),
        sn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.componentDidMount = function() {
              aa.GetRawDoorData() || aa.LoadDoorData(),
                ta.LoadSaleTokenPoints();
            }),
            (t.prototype.render = function() {
              var e = aa.GetRawDoorData();
              if (!e) return null;
              for (
                var t = e.length - 1,
                  a = j.a.GetTimeNowWithOverride() > e[t].rtime_start,
                  n = [],
                  r = 0;
                r <= t;
                r++
              )
                n.push(
                  M.createElement(dn, {
                    key: "envelope-" + r,
                    iDoorIndex: r,
                    strFontFamily: this.props.strFontFamily
                  })
                );
              var o = ta.GetSaleTokenPoints().points;
              return M.createElement(
                b.a,
                null,
                M.createElement(
                  "div",
                  { className: ga.a.LunarNewYearHeader },
                  M.createElement(
                    "div",
                    { className: ga.a.EnvelopeArea },
                    0 <= o &&
                      M.createElement(
                        "div",
                        { className: ga.a.TokenBalanceContainer },
                        Object(P.d)("#Lunar2020_YourBalancePrefix"),
                        M.createElement(
                          "a",
                          {
                            className: ga.a.TokenBalance,
                            href: H.c.STORE_BASE_URL + "lunarnewyearmarket"
                          },
                          " ",
                          Object(P.d)("#Lunar2020_BalanceNumberOfTokens", o),
                          " "
                        )
                      ),
                    n
                  ),
                  !a &&
                    M.createElement(
                      "div",
                      { className: ga.a.BottomMessage },
                      Object(P.d)("#Lunar2020_CheckBackEachDay")
                    )
                )
              );
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        cn = [
          "#Lunar2020_FirstGift",
          "#Lunar2020_SecondGift",
          "#Lunar2020_ThirdGift",
          "#Lunar2020_FourthGift"
        ],
        dn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.OpenEnvelope = function(n) {
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = aa.BIsDoorOpened(this.props.iDoorIndex)),
                        (a = Object(Pe.o)(n)),
                        t
                          ? (Object(xe.b)(
                              M.createElement(
                                mn,
                                Object(B.a)({ bIsFirstOpen: !1 }, this.props)
                              ),
                              a
                            ),
                            [2])
                          : [4, aa.OpenDoor(this.props.iDoorIndex, !0)]
                      );
                    case 1:
                      return (
                        e.sent() &&
                          Object(xe.b)(
                            M.createElement(
                              mn,
                              Object(B.a)({ bIsFirstOpen: !0 }, this.props)
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
              var t = Object(Pe.o)(e),
                a = M.createElement(
                  "a",
                  { href: H.c.HELP_BASE_URL },
                  Object(P.d)("#User_LimitedAccount_UrlInfo")
                );
              Object(xe.b)(
                M.createElement(Re.c, {
                  strTitle: Object(P.d)("#Lunar2020_LimitedUserDialogTitle"),
                  strDescription: Object(P.k)("#User_LimitedAccount", a),
                  bAlertDialog: !0
                }),
                t
              );
            }),
            (t.prototype.VOOnClose = function() {
              H.i.is_support && aa.OpenDoor(this.props.iDoorIndex, !1);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.iDoorIndex,
                a = e.strFontFamily;
              Object(pe.a)(
                0 <= t && t < cn.length && t < aa.GetDoorCount(),
                "Day index #" + t + " not in valid range."
              );
              for (
                var n = Object(P.d)(cn[t]),
                  r = !H.i.logged_in,
                  o = aa.BIsDoorOpened(t),
                  i = aa.BCanUserOpenDoor(t),
                  l = !0,
                  s = 0;
                s < t;
                s++
              )
                l = l && aa.BIsDoorOpened(s);
              var c = !o && i && l,
                d = new Date(1e3 * aa.GetRawDoorData()[t].rtime_start),
                p = r
                  ? Object(P.d)("#Login_SignIn")
                  : o
                  ? Object(P.d)("#Lunar2020_RereadStory")
                  : c
                  ? Object(P.d)("#Lunar2020_GiftCanBeOpenedNow")
                  : i
                  ? Object(P.d)("#Lunar2020_GiftCanBeOpenedAfterThePreviousOne")
                  : Object(P.d)(
                      "#Lunar2020_GiftLockedUntilDate",
                      d.toLocaleDateString(P.c.GetPreferredLocales(), {
                        month: "numeric",
                        day: "numeric"
                      })
                    ),
                u = r
                  ? it.a
                  : H.i.is_limited
                  ? this.ShowLimitedUserDialog
                  : o || c
                  ? this.OpenEnvelope
                  : null,
                m = Object(R.a)(
                  ga.a.EnvelopeContainer,
                  r && ga.a.NeedLogin,
                  o && ga.a.Opened,
                  c && ga.a.Unlocked,
                  !o && !c && ga.a.Locked
                );
              return M.createElement(
                "div",
                { className: m },
                M.createElement("div", { className: ga.a.BackingRect }),
                M.createElement(
                  "div",
                  { className: ga.a.Envelope },
                  M.createElement(
                    "div",
                    { className: ga.a.GiftLabel, style: { fontFamily: a } },
                    n
                  )
                ),
                M.createElement(
                  "div",
                  { className: ga.a.OpenState, onClick: u },
                  p
                ),
                (H.i.is_support &&
                  o &&
                  ("beta" == H.c.WEB_UNIVERSE || "dev" == H.c.WEB_UNIVERSE) &&
                  M.createElement(
                    "div",
                    {
                      className: Object(R.a)(ga.a.OpenState, ga.a.VO),
                      onClick: this.VOOnClose
                    },
                    "(VO) Close Gift"
                  )) ||
                  null
              );
            }),
            Object(B.c)([s.a], t.prototype, "OpenEnvelope", null),
            Object(B.c)([s.a], t.prototype, "ShowLimitedUserDialog", null),
            Object(B.c)([s.a], t.prototype, "VOOnClose", null),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        pn = [
          "#Lunar2020_StoryDayOneHeader",
          "#Lunar2020_StoryDayTwoHeader",
          "#Lunar2020_StoryDayThreeHeader",
          "#Lunar2020_StoryDayFourHeader"
        ],
        un = [
          "#Lunar2020_StoryDayOne",
          "#Lunar2020_StoryDayTwo",
          "#Lunar2020_StoryDayThree",
          "#Lunar2020_StoryDayFour"
        ],
        mn = function(e) {
          var t = M.useState(!e.bIsFirstOpen),
            a = t[0],
            n = t[1];
          M.useEffect(function() {
            return n(!0);
          }, []);
          var r =
              H.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.mp4" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            o =
              H.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.webm" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            i = e.iDoorIndex == aa.GetDoorCount() - 1;
          return M.createElement(
            Re.d,
            {
              className: ga.a.LunarNewYearOpenEnvelopeVideoDialog,
              closeModal: e.closeModal
            },
            M.createElement(
              "div",
              { className: ga.a.Container },
              M.createElement(
                "div",
                { className: ga.a.Column },
                M.createElement(
                  "div",
                  { className: ga.a.StoryHeader },
                  Object(P.d)("#Lunar2020_StoryTitle")
                ),
                M.createElement(
                  "div",
                  { className: ga.a.StorySubHeader },
                  Object(P.d)("#Lunar2020_StorySubTitle")
                ),
                M.createElement(
                  "div",
                  { className: ga.a.StorySubHeader },
                  Object(P.d)(pn[e.iDoorIndex])
                ),
                M.createElement(
                  "div",
                  { className: ga.a.StoryText },
                  Object(P.d)(un[e.iDoorIndex])
                ),
                M.createElement(
                  "div",
                  { className: ga.a.VideoBox },
                  M.createElement(
                    "div",
                    {
                      className: Object(R.a)(ga.a.CoinText, a && ga.a.Visible)
                    },
                    Object(P.d)("#Lunar2020_ReceivedNumberOfTokens", 100)
                  ),
                  M.createElement(
                    "video",
                    {
                      autoPlay: e.bIsFirstOpen,
                      muted: !0,
                      className: ga.a.LunarNewYearOpenEnvelopeVideo
                    },
                    M.createElement("source", { src: r, type: "video/mp4" }),
                    M.createElement("source", { src: o, type: "video/webm" }),
                    Object(P.d)("#Lunar2020_ErrorLoadingVideo")
                  )
                )
              ),
              M.createElement(
                "div",
                { className: ga.a.Column },
                M.createElement(
                  "div",
                  { className: ga.a.StoryPicture },
                  M.createElement("img", {
                    src: aa.GetStoryImage(e.iDoorIndex)
                  })
                ),
                !i &&
                  M.createElement(
                    "div",
                    { className: ga.a.CheckBackText },
                    Object(P.d)("#Lunar2020_CheckBackEachDayForStory")
                  )
              )
            ),
            M.createElement(
              "div",
              { className: ga.a.Links },
              M.createElement(
                "div",
                { className: ga.a.MarketLink },
                M.createElement(
                  "a",
                  { href: H.c.STORE_BASE_URL + "lunarnewyearmarket" },
                  Object(P.d)("#Lunar2020_LinkFromVideoToMarket")
                )
              ),
              M.createElement(
                "div",
                { className: ga.a.MarketLink, onClick: e.closeModal },
                Object(P.d)("#Lunar2020_LinkBackToSale")
              )
            )
          );
        },
        hn = a("ZlHF"),
        vn = a.n(hn),
        _n = a("gyoR"),
        bn = (a("bUNj"), a("U9Ih")),
        gn = a.n(bn),
        yn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                currentFlavor: "topwishlisted",
                bInitialLoadComplete: !1,
                rgCapsules: [],
                nVisibleRows: 12,
                nNumRequestedLastTime: 0,
                bIsMoreAvailable: !1,
                bAwaitingMoreRowsLoading: !1,
                nHiddenCapsules: 0
              }),
              e
            );
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.LoadCapsules(12);
            }),
            (e.prototype.componentDidUpdate = function(e) {
              var t = this;
              (this.props.section == e.section &&
                this.props.event == e.event &&
                this.props.activeTab == e.activeTab) ||
                this.setState(
                  {
                    bInitialLoadComplete: !1,
                    nVisibleRows: 12,
                    nNumRequestedLastTime: 0
                  },
                  function() {
                    return t.LoadCapsules(12);
                  }
                );
            }),
            (e.prototype.ShowMoreRows = function() {
              var e = this;
              this.state.bAwaitingMoreRowsLoading ||
                this.setState({ bAwaitingMoreRowsLoading: !0 }, function() {
                  return Object(B.b)(e, void 0, void 0, function() {
                    var t;
                    return Object(B.e)(this, function(e) {
                      return (
                        (t = this.state.nVisibleRows + 8),
                        this.LoadCapsules(t),
                        [2]
                      );
                    });
                  });
                });
            }),
            (e.prototype.LoadCapsules = function(g) {
              var y;
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c, d, p, u, m, h, v, _, b;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props),
                        (a = t.event),
                        (n = t.bIsPreview),
                        (r = t.activeTab),
                        (o = this.state),
                        (i = o.currentFlavor),
                        (l = o.rgCapsules),
                        (s = o.nNumRequestedLastTime),
                        (c = o.nHiddenCapsules),
                        [4, G.a.HintLoad()]
                      );
                    case 1:
                      e.sent(),
                        (d = !0),
                        (p = Math.max(s, g + 1)),
                        (e.label = 2);
                    case 2:
                      if (!(l.length <= g && d)) return [3, 9];
                      (u = !1),
                        n ||
                          a.visibility_state === ft.l.k_EEventStateVisible ||
                          ((m = x.a
                            .Get()
                            .GetPartnerEventPermissions(a.clanSteamID)),
                          (u = m.can_edit)),
                        (h = void 0),
                        (e.label = 3);
                    case 3:
                      return (
                        e.trys.push([3, 5, , 6]),
                        [
                          4,
                          ea.GetSaleGamesByFlavor(
                            n || u,
                            null === (y = null == r ? void 0 : r.GetTab()) ||
                              void 0 === y
                              ? void 0
                              : y.unique_id,
                            a,
                            i,
                            p
                          )
                        ]
                      );
                    case 4:
                      return (h = e.sent()), (d = h.length >= p), [3, 6];
                    case 5:
                      return (
                        (v = e.sent()),
                        console.error(
                          "Failed to load games for browser;" + v.message
                        ),
                        this.setState({
                          bInitialLoadComplete: !0,
                          bAwaitingMoreRowsLoading: !1
                        }),
                        [2]
                      );
                    case 6:
                      return (
                        (l = (l = h.map(function(e) {
                          return { id: e, type: "game" };
                        })).filter(function(e) {
                          return r.ShouldShowCapsule(e);
                        })),
                        [4, Object(_n.e)(l)]
                      );
                    case 7:
                      return (
                        e.sent(), (_ = new Array()), [4, Object(_n.a)(l, !1, _)]
                      );
                    case 8:
                      return (
                        (l = e.sent()),
                        (c = _.length),
                        l.length <= g && (p += 8),
                        [3, 2]
                      );
                    case 9:
                      return (
                        (b = l.length > g || d),
                        this.setState({
                          bInitialLoadComplete: !0,
                          rgCapsules: l,
                          nVisibleRows: g,
                          nNumRequestedLastTime: p,
                          bIsMoreAvailable: b,
                          bAwaitingMoreRowsLoading: !1,
                          nHiddenCapsules: c
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.OnFlavorLabelClick = function(e) {
              var t = this;
              this.setState(
                {
                  currentFlavor: e,
                  bInitialLoadComplete: !1,
                  rgCapsules: [],
                  nVisibleRows: 12,
                  nNumRequestedLastTime: 0,
                  bIsMoreAvailable: !0,
                  bAwaitingMoreRowsLoading: !0,
                  nHiddenCapsules: 0
                },
                function() {
                  return t.LoadCapsules(12);
                }
              );
            }),
            (e.prototype.render = function() {
              var t = this,
                e = this.state,
                a = e.bInitialLoadComplete,
                n = e.currentFlavor,
                r = e.rgCapsules,
                o = e.nVisibleRows,
                i = e.bIsMoreAvailable,
                l = e.bAwaitingMoreRowsLoading,
                s = (e.nHiddenCapsules,
                [
                  {
                    label: Object(P.d)("#Sale_BrowserSortOption_TopWishlisted"),
                    flavor: "topwishlisted",
                    tooltip: Object(P.d)(
                      "#Sale_BrowserSortOption_TopWishlisted_ttip"
                    )
                  },
                  {
                    label: Object(P.d)(
                      "#Sale_BrowserSortOption_TrendingWishlisted"
                    ),
                    flavor: "trendingwishlisted",
                    tooltip: Object(P.d)(
                      "#Sale_BrowserSortOption_TrendingWishlisted_ttip"
                    )
                  },
                  {
                    label: Object(P.d)("#Sale_BrowserSortOption_PlayedNowDemo"),
                    flavor: "playednowdemo",
                    tooltip: Object(P.d)(
                      "#Sale_BrowserSortOption_PlayedNowDemo_ttip"
                    )
                  },
                  {
                    label: Object(P.d)(
                      "#Sale_BrowserSortOption_PopularUpcoming"
                    ),
                    flavor: "popularcomingsoon",
                    tooltip: Object(P.d)(
                      "#Sale_BrowserSortOption_PopularUpcoming_ttip"
                    )
                  }
                ]);
              return c.a.createElement(
                "div",
                { className: gn.a.SaleItemBrowserContainer },
                c.a.createElement(
                  J,
                  { className: gn.a.SaleItemBrowserHeaderContainer },
                  c.a.createElement(
                    "div",
                    { className: gn.a.SaleItemBrowserHeader },
                    s.map(function(e) {
                      return c.a.createElement(
                        y.a,
                        {
                          key: e.flavor,
                          toolTipContent: e.tooltip,
                          onClick: function() {
                            return t.OnFlavorLabelClick(e.flavor);
                          },
                          className: Object(R.a)(
                            gn.a.FlavorLabel,
                            n == e.flavor && gn.a.SelectedFlavor
                          )
                        },
                        e.label
                      );
                    })
                  )
                ),
                a &&
                  r.slice(0, o).map(function(e) {
                    return c.a.createElement(
                      "div",
                      { key: e.id, className: Fa.a.SaleItemBrowserRow },
                      c.a.createElement(Xa.g, {
                        id: e.id,
                        type: e.type,
                        bUseDemoLayout: !0
                      })
                    );
                  }),
                a &&
                  0 == r.length &&
                  c.a.createElement(
                    "div",
                    { className: gn.a.EmptyResults },
                    Object(P.d)("#Sale_EmptySearchResultsOrLoadFailure")
                  ),
                (!a || i) &&
                  c.a.createElement(
                    "div",
                    {
                      className: Object(R.a)(
                        gn.a.ShowContentsContainer,
                        !a && gn.a.Loading
                      )
                    },
                    !a || l
                      ? c.a.createElement(de.a, { size: "medium" })
                      : c.a.createElement(
                          "button",
                          {
                            onClick: this.ShowMoreRows,
                            className: gn.a.ShowContentsButton
                          },
                          Object(P.d)("#Sale_ShowMore")
                        )
                  )
              );
            }),
            Object(B.c)([s.a], e.prototype, "ShowMoreRows", null),
            (e = Object(B.c)([r.a], e))
          );
        })(c.a.Component),
        En = a("onkS"),
        Sn = a("oVVc"),
        fn = a("l2mU"),
        Cn = a("31dG"),
        On = a.n(Cn);
      function wn(e, t) {
        for (var a = [], n = 0, r = e.capsules; n < r.length; n++) {
          var o = r[n];
          if ("sub" === o.type) {
            var i = Sn.b.GetPackageInfo(o.id);
            if (i) {
              if ((console.log(JSON.stringify(i)), i.renewal_time_amount === t))
                return i.packageid;
            } else a.push(o.id);
          }
        }
        0 < a.length && Sn.b.LoadPackageInfo(a);
      }
      var Tn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.OnClickPurchase = function(e) {
              G.a.AddToCart(
                e,
                this.props.sub_package_id,
                H.c.STORE_BASE_URL + "cart/addtocart",
                H.c.STORE_BASE_URL + "cart"
              );
            }),
            (t.prototype.render = function() {
              var e = Sn.b.GetPackageInfo(this.props.sub_package_id),
                t = Sn.b.GetPackageInfo(this.props.compare_package_id);
              if (!e || (!t && this.props.compare_package_id))
                return (
                  Sn.b.LoadPackageInfo([
                    this.props.sub_package_id,
                    this.props.compare_package_id
                  ]),
                  null
                );
              if (!e.formatted_final_price) return null;
              var a = e.formatted_final_price,
                n = Object(fn.a)(e, t),
                r = [a, n || ""],
                o = P.d.apply(
                  void 0,
                  Object(B.g)([this.props.price_loc_token], r)
                ),
                i = P.d.apply(
                  void 0,
                  Object(B.g)([this.props.body_loc_token], r)
                ),
                l = P.d.apply(
                  void 0,
                  Object(B.g)(["#Sale_Subscription_Save"], r)
                ),
                s = M.createElement("div", { className: On.a.LogoImg }),
                c = (function(e) {
                  for (var t = 0, a = e.appids; t < a.length; t++) {
                    var n = a[t];
                    if (G.a.BOwnsApp(n)) return !0;
                  }
                  return !1;
                })(e),
                d = null,
                d = G.a.BOwnsPackage(this.props.sub_package_id)
                  ? M.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          On.a.PurchaseButton,
                          On.a.AlreadyOwnedPackage
                        )
                      },
                      Object(P.d)("#Sale_Subscription_AlreadyOwnedPackage")
                    )
                  : c
                  ? M.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          On.a.PurchaseButton,
                          On.a.AlreadyOwnedApp
                        )
                      },
                      Object(P.d)("#Sale_Subscription_AlreadyOwnedApp")
                    )
                  : M.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          On.a.PurchaseButton,
                          On.a.UnOwned
                        ),
                        onClick: this.OnClickPurchase
                      },
                      this.props.button_text
                    );
              return M.createElement(
                "div",
                { className: On.a.SubscriptionBlock },
                s,
                M.createElement(
                  "div",
                  { className: On.a.PriceBlock },
                  M.createElement("span", { className: On.a.PriceDisplay }, o),
                  Boolean(n) &&
                    M.createElement(
                      "span",
                      { className: On.a.SavingsDisplay },
                      l
                    )
                ),
                M.createElement("div", { className: On.a.BodyTextBlock }, i),
                d
              );
            }),
            Object(B.c)([s.a], t.prototype, "OnClickPurchase", null),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        In = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.render = function() {
              var e = wn(this.props.section, 12),
                t = wn(this.props.section, 3),
                a = wn(this.props.section, 1);
              return M.createElement(
                "div",
                { className: On.a.MainBlock },
                M.createElement(
                  "span",
                  { className: On.a.SelectAPlan },
                  Object(P.d)("#Sale_Subscription_SelectPlan")
                ),
                M.createElement(
                  "div",
                  { className: On.a.SubscriptionListBlock },
                  M.createElement(Tn, {
                    sub_package_id: e,
                    compare_package_id: a,
                    price_loc_token: "#Sale_Subscription_Annual_Price",
                    body_loc_token: "#Sale_Subscription_Annual_Body",
                    button_text: Object(P.d)("#Sale_Subscription_Annual_Button")
                  }),
                  M.createElement(Tn, {
                    sub_package_id: t,
                    price_loc_token: "#Sale_Subscription_Quarterly_Price",
                    body_loc_token: "#Sale_Subscription_Quarterly_Body",
                    button_text: Object(P.d)(
                      "#Sale_Subscription_Quarterly_Button"
                    )
                  }),
                  M.createElement(Tn, {
                    sub_package_id: a,
                    price_loc_token: "#Sale_Subscription_Monthly_Price",
                    body_loc_token: "#Sale_Subscription_Monthly_Body",
                    button_text: Object(P.d)(
                      "#Sale_Subscription_Monthly_Button"
                    )
                  })
                )
              );
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        kn = a("R+8l");
      function Dn(e, t, a) {
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
      function jn(e) {
        var t,
          a,
          n = e.tab,
          r = e.language,
          o = e.onTabSelected,
          i = e.classNames,
          l = e.section,
          s = e.selected,
          c = ((a = r),
          ((t = n).localized_label &&
            (t.localized_label[a] || t.localized_label[0])) ||
            ("#Sale_default_label" === t.default_label
              ? ""
              : Object(P.d)(t.default_label)));
        if (!c) return null;
        var d,
          p = ((d = l),
          s
            ? Dn(
                d.tab_active_label_color,
                d.tab_active_background_gradient_top,
                d.tab_active_background_gradient_bottom
              )
            : Dn(
                d.tab_inactive_label_color,
                d.tab_inactive_background_gradient_top,
                d.tab_inactive_background_gradient_bottom
              ));
        return M.createElement(
          "div",
          {
            className: Object(R.a)(vn.a.SaleTab, i),
            onClick: function() {
              return o(n);
            },
            style: p
          },
          M.createElement(
            "div",
            { className: Object(R.a)(vn.a.SaleTabLabel) },
            c
          )
        );
      }
      var An = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.GetTabReferences = function(t) {
              for (
                var a = this,
                  e = "",
                  n = 0,
                  r = this.props.event.GetSaleSections();
                n < r.length;
                n++
              ) {
                var o = r[n];
                "items" === o.section_type &&
                  o.capsules &&
                  ((o.show_on_tabs &&
                    0 < o.show_on_tabs.length &&
                    !o.show_on_tabs.some(function(e) {
                      return e === a.props.tab.unique_id;
                    })) ||
                    (o.capsules.find(function(e) {
                      return e.type === t.type && e.id === t.id;
                    }) &&
                      (e && (e += "; "),
                      (e += Qn(
                        o,
                        this.props.language,
                        this.props.event.clanSteamID.GetAccountID(),
                        !0
                      )))));
              }
              return e;
            }),
            (t.prototype.RenderTabCapsules = function() {
              var e = this.props.tab;
              if (!e || !e.capsules || !e.capsules.length)
                return M.createElement(
                  "div",
                  { className: vn.a.TabContentsElement },
                  Object(P.d)("#SalePage_Tabs_AllContents")
                );
              for (
                var t = new Array(), a = new Set(), n = 0, r = e.capsules;
                n < r.length;
                n++
              ) {
                var o,
                  i,
                  l,
                  s,
                  c = r[n],
                  d = Object(P.d)("#AppType_" + c.type) + "_" + c.id;
                a.has(d) ||
                  (a.add(d),
                  (o = null),
                  (i =
                    (o =
                      "bundle" === c.type
                        ? kn.a.GetBundleInfo(c.id)
                        : "sub" === c.type
                        ? Sn.b.GetPackageInfo(c.id)
                        : p.a.GetAppInfo(c.id)) && o.name
                      ? o.name
                      : d),
                  (l = void 0 === c.visibility_index ? -1 : c.visibility_index),
                  (s = this.props.showReferences
                    ? c.id +
                      " " +
                      c.type +
                      ', "' +
                      i +
                      '", ' +
                      this.GetTabReferences(c)
                    : void 0 === c.visibility_index
                    ? i
                    : Object(P.d)("#Sale_TabDayIndex", c.visibility_index)),
                  t.push({ sName: i, sKey: d, sDisplay: s, nDaySortIndex: l }));
              }
              return (
                t.sort(function(e, t) {
                  return e.nDaySortIndex !== t.nDaySortIndex
                    ? e.nDaySortIndex - t.nDaySortIndex
                    : e.sName.localeCompare(t.sName);
                }),
                M.createElement(
                  M.Fragment,
                  null,
                  t.map(function(e) {
                    return M.createElement(
                      "div",
                      { key: e.sKey, className: vn.a.TabContentsElement },
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
              return M.createElement(
                "div",
                { className: Object(R.a)(vn.a.SaleSection), style: Xn(t, a) },
                M.createElement(Hn, Object(B.a)({}, this.props)),
                M.createElement(
                  "div",
                  { className: vn.a.TabContentsContainer },
                  this.RenderTabCapsules()
                )
              );
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        Ln = (function(t) {
          function a() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { nMaxTabsPerRow: a.GetMaxTabsPerRow() }),
              (e.m_refTabLocation = M.createRef()),
              e
            );
          }
          return (
            Object(B.d)(a, t),
            (a.IsWideScreen = function() {
              return 940 <= window.innerWidth;
            }),
            (a.GetMaxTabsPerRow = function() {
              return Math.max(Math.floor(window.innerWidth / 160), 2);
            }),
            (a.prototype.OnTabSelected = function(e, t) {
              var a;
              t != this.props.activeTab &&
                this.m_refTabLocation.current &&
                ((a =
                  this.m_refTabLocation.current.getBoundingClientRect().top +
                  window.scrollY),
                window.scrollY > a && window.scrollTo(0, a)),
                this.props.onTabSelected(e, t);
            }),
            (a.prototype.render = function() {
              var a = this,
                e = this.props,
                n = e.section,
                t = e.event,
                r = e.language,
                o = e.activeTab;
              if (n.tabs.length < 2) return null;
              var i = Object(R.a)(vn.a.SaleSectionTabsTab),
                l = n.tabs.map(function(e) {
                  var t = "Tab_" + e.unique_id;
                  return M.createElement(jn, {
                    key: t,
                    section: n,
                    selected: e === o,
                    tab: e,
                    language: r,
                    classNames: Object(R.a)(
                      i,
                      e === o && vn.a.SaleSectionTabsSelected
                    ),
                    onTabSelected: function(e) {
                      return a.OnTabSelected(n, e);
                    }
                  });
                });
              return M.createElement(
                M.Fragment,
                null,
                M.createElement("div", { ref: this.m_refTabLocation }),
                M.createElement(
                  "div",
                  {
                    className: Object(R.a)(
                      vn.a.SaleSection,
                      vn.a.SaleSectionTabs
                    ),
                    style: Xn(n, t)
                  },
                  M.createElement(Hn, Object(B.a)({}, this.props)),
                  M.createElement(
                    J,
                    { className: vn.a.SaleSectionTabContainer },
                    M.createElement(
                      "div",
                      {
                        className: Object(R.a)(
                          jt.a.SaleSectionContainer,
                          vn.a.SaleSectionTabsRow
                        )
                      },
                      l
                    )
                  )
                )
              );
            }),
            Object(B.c)([s.a], a.prototype, "OnTabSelected", null),
            a
          );
        })(M.Component),
        Nn = M.lazy(function() {
          return Promise.all([a.e(0), a.e(1), a.e(6)]).then(
            a.bind(null, "NIbt")
          );
        });
      var Gn = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.state = {
                nSaleDayIndex: t.props.eventModel
                  ? t.props.eventModel.GetDayIndexFromEventStart()
                  : void 0
              }),
              t.props.eventModel && t.OnSaleDataLoaded(),
              t
            );
          }
          return (
            Object(B.d)(e, a),
            (e.prototype.componentDidMount = function() {
              return Object(B.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.props.eventModel
                        ? [3, 2]
                        : ((t = H.b.CLANSTEAMID),
                          (a = H.b.ANNOUNCEMENT_GID),
                          [
                            4,
                            N.c.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                              new L.a(t),
                              a,
                              null
                            )
                          ]);
                    case 1:
                      (n = e.sent()),
                        (r = n.GetDayIndexFromEventStart()),
                        this.state.nSaleDayIndex != r &&
                          this.setState({ nSaleDayIndex: r }),
                        this.OnSaleDataLoaded(),
                        (e.label = 2);
                    case 2:
                      return (
                        qt.a
                          .Get()
                          .SetCollectionInfo(
                            "gamefestival2020",
                            "gamefestival2020info"
                          ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetEventModel = function() {
              return this.props.eventModel
                ? this.props.eventModel
                : N.c.GetClanEventFromAnnouncementGID(H.b.ANNOUNCEMENT_GID);
            }),
            (e.prototype.OnChangeDayIndex = function(e) {
              var t;
              e != this.state.nSaleDayIndex &&
                ((t = this.GetEventModel()) && (t.m_overrideCurrentDay = e),
                this.setState({ nSaleDayIndex: e }));
            }),
            (e.prototype.OnSaleDataLoaded = function() {
              for (
                var e = 0, t = this.GetEventModel().GetSaleSections();
                e < t.length;
                e++
              ) {
                var a = t[e];
                if (
                  "vo_internal" === a.section_type &&
                  a.internal_section_data &&
                  "event_schedule" === a.internal_section_data.internal_type
                ) {
                  $t.c.DisableAutoPlay();
                  break;
                }
              }
            }),
            (e.prototype.render = function() {
              var e = this.GetEventModel();
              if (e && void 0 !== this.state.nSaleDayIndex) {
                var t = this.props.bIsPreview,
                  a = e.GetImageURLWithFallback(
                    "sale_header",
                    this.props.language
                  ),
                  n = null,
                  r = null;
                aa.BHasSalePageBackgroundOverride() &&
                  ((a = aa.GetSalePageBackgroundOverride()),
                  (n = aa.GetSalePageBackgroundWEBM()),
                  (r = aa.GetSalePageBackgroundMP4()));
                var o =
                    e.BHasBroadcastEnabled() &&
                    ("1688220857098505775" == e.GID ||
                      "1590261853006818581" == e.GID),
                  i = x.a.Get().GetPartnerEventPermissions(e.clanSteamID);
                return M.createElement(
                  b.a,
                  null,
                  M.createElement(
                    Mn,
                    {
                      className:
                        vn.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                      backgroundImage: a,
                      backgroundColor: e.jsondata.sale_background_color
                    },
                    Boolean(r || n) &&
                      M.createElement(
                        "div",
                        { className: vn.a.fullscreen_bg },
                        M.createElement(
                          "video",
                          {
                            key: aa.GetLastDoorOpen(),
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            ref: function(e) {
                              e && (e.playbackRate = 0.9);
                            },
                            className: Object(R.a)(
                              vn.a.SaleBackground,
                              vn.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                              "SaleBackground",
                              vn.a.fullscreen_bg__video
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
                          M.createElement("source", {
                            src: n,
                            type: "video/webm"
                          }),
                          !H.c.IN_CLIENT &&
                            M.createElement("source", {
                              src: r,
                              type: "video/mp4"
                            })
                        )
                      ),
                    M.createElement(
                      "div",
                      { className: vn.a.SaleHeaderContainer },
                      e.jsondata.sale_header_overlay &&
                        M.createElement(Bn, null),
                      e.GetImageURL("sale_overlay", this.props.language) &&
                        M.createElement(
                          "div",
                          {
                            className: Object(R.a)(
                              vn.a.SaleOverlayCtn,
                              "SaleOverlayCtn"
                            )
                          },
                          M.createElement("img", {
                            className: Object(R.a)(
                              vn.a.SaleOverlay,
                              "SaleOverlay"
                            ),
                            src: e.GetImageURLWithFallback(
                              "sale_overlay",
                              this.props.language
                            )
                          })
                        ),
                      e.jsondata.sale_title_overlay &&
                        M.createElement(
                          "div",
                          null,
                          M.createElement(
                            "h1",
                            {
                              style: {
                                fontFamily: $n(
                                  e.jsondata.sale_font,
                                  this.props.language
                                ),
                                fontWeight: e.jsondata.sale_font_weight
                              }
                            },
                            e.GetNameWithFallback(this.props.language)
                          ),
                          M.createElement("hr", null),
                          M.createElement(
                            "div",
                            {
                              style: {
                                fontFamily: $n(
                                  e.jsondata.sale_font,
                                  this.props.language
                                ),
                                fontWeight: e.jsondata.sale_font_weight
                              }
                            },
                            M.createElement(Pa.a, {
                              text: e.GetDescriptionWithFallback(
                                this.props.language
                              ),
                              partnerEventStore: N.c,
                              showErrorInfo: this.props.bIsPreview,
                              event: e
                            })
                          )
                        )
                    ),
                    M.createElement(
                      "div",
                      {
                        className:
                          vn.a.SaleOuterContainer +
                          " " +
                          vn.a["CustomStyle_" + e.jsondata.sale_vanity_id] +
                          " SaleOuterContainer",
                        style: {
                          marginTop: e.jsondata.sale_header_offset + "px"
                        }
                      },
                      Boolean(
                        e.BHasBroadcastEnabled() &&
                          e.BSaleShowBroadcastAtTopOfPage()
                      ) &&
                        M.createElement(
                          b.a,
                          null,
                          M.createElement(
                            "div",
                            { className: vn.a.SaleBroadcastCtn },
                            M.createElement(
                              M.Suspense,
                              { fallback: M.createElement("div", null) },
                              M.createElement(Nn, {
                                promotionName: this.props.promotionName,
                                clanid: Number(H.b.CLANACCOUNTID),
                                event: e,
                                bIsPreview: this.props.bIsPreview,
                                language: this.props.language,
                                accountIDs: this.props.bIsPreview
                                  ? e.jsondata.broadcast_whitelist
                                  : void 0,
                                bShowCapsuleArt: !0,
                                fnRenderBroadcastContext: o
                                  ? function() {
                                      return M.createElement(tr, null);
                                    }
                                  : null
                              })
                            )
                          )
                        ),
                      e.jsondata.sale_show_creator &&
                        M.createElement(
                          b.a,
                          null,
                          M.createElement(
                            "div",
                            {
                              style: {
                                width: "100%",
                                margin: "0 auto",
                                maxWidth: "940px"
                              }
                            },
                            M.createElement(Ba, {
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
                      M.createElement(Pn, {
                        bIsPreview: t,
                        event: e,
                        language: this.props.language,
                        promotionName: this.props.promotionName,
                        nSaleDayIndex: this.state.nSaleDayIndex
                      }),
                      e.jsondata.sale_browse_more_button &&
                        M.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "14px"
                            }
                          },
                          M.createElement(qn, {
                            text: Object(P.d)("#Sale_SeeAllSpecials"),
                            url: e.jsondata.sale_browsemore_url,
                            color: e.jsondata.sale_browsemore_color,
                            bgcolor: e.jsondata.sale_browsemore_bgcolor
                          })
                        ),
                      i.can_edit &&
                        M.createElement(ya, {
                          eventModel: e,
                          bPreviewMode: this.props.bIsPreview,
                          useAnchors: !this.props.bIsPreview,
                          fnOnUpdateSaleDayIndex: this.OnChangeDayIndex
                        })
                    )
                  )
                );
              }
              return M.createElement(
                "div",
                { className: $e.a.FlexCenter, style: { height: "500px" } },
                M.createElement(de.a, {
                  size: "medium",
                  string: Object(P.d)("#Loading")
                })
              );
            }),
            Object(B.c)([s.a], e.prototype, "OnChangeDayIndex", null),
            (e = Object(B.c)([r.a], e))
          );
        })(M.Component),
        Mn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_refBackgroundPanel = M.createRef()), e;
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t,
                a = this;
              this.props.backgroundImage &&
                (((t = new Image()).onload = function() {
                  var e = (100 * t.width) / 950 + "%";
                  a.m_refBackgroundPanel.current &&
                    a.m_refBackgroundPanel.current.style.setProperty(
                      "--background-scale",
                      e
                    );
                }),
                (t.src = this.props.backgroundImage));
            }),
            (e.prototype.render = function() {
              var e = this.props.backgroundImage
                ? "url(" + this.props.backgroundImage + ")"
                : null;
              return M.createElement(
                "div",
                {
                  className: Object(R.a)(
                    this.props.className,
                    vn.a.SaleBackground,
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
        })(M.Component),
        Bn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.componentDidMount = function() {
              a("+ZmX").Init();
            }),
            (t.prototype.render = function() {
              return M.createElement("canvas", {
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
        })(M.Component),
        xn = (function() {
          function n(e, t) {
            var a = this;
            (this.m_activeTab = null),
              (this.m_capsuleFilter = null),
              e &&
                ((this.m_activeTab = e).capsules && 0 !== e.capsules.length
                  ? ((this.m_capsuleFilter = new Set()),
                    Yn(e.capsules, t).forEach(function(e) {
                      a.m_capsuleFilter.add(n.GetSetName(e.type, e.id));
                    }))
                  : (this.m_capsuleFilter = null));
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
              return 0 === e.appid || this.ShouldShowOnTab("game", e.appid);
            }),
            n
          );
        })(),
        Rn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.GetTabSelectionsFromURL = function() {
              var n = this,
                r = new Map();
              return (
                this.props.event.GetSaleSections().forEach(function(e) {
                  var t, a;
                  "tabs" === e.section_type &&
                    e.tabs &&
                    0 < e.tabs.length &&
                    ((a =
                      (a =
                        0 < (t = Number(rt(n.props.location, "tab")))
                          ? e.tabs.find(function(e) {
                              return e.unique_id === t;
                            })
                          : void 0) || e.tabs[0]),
                    r.set(e, new xn(a, n.props.nSaleDayIndex)));
                }),
                r
              );
            }),
            (t.prototype.OnTabSelected = function(e, t) {
              ot(this.props.history, "tab", String(t.unique_id));
            }),
            (t.prototype.render = function() {
              var i = this,
                e = this.props,
                l = e.event,
                s = e.language,
                c = e.promotionName,
                d = e.bIsPreview,
                p = (e.nSaleDayIndex, this.GetTabSelectionsFromURL()),
                u = !1,
                m = !1,
                h = [
                  {
                    elements: [],
                    activeTab: new xn(null, this.props.nSaleDayIndex)
                  }
                ];
              l.GetSaleSections().forEach(function(e, t) {
                var a = h[h.length - 1].activeTab;
                if (a.ShouldShowSection(e)) {
                  var n,
                    r = null;
                  if (
                    "items" == (n = e).section_type &&
                    n.smart_section &&
                    ("wishlist" == n.smart_section_type ||
                      "interactive_recommender" == n.smart_section_type ||
                      "dlc_music_onsale" == n.smart_section_type ||
                      "ir_subscription" == n.smart_section_type ||
                      ("wishlist_onsale" == n.smart_section_type &&
                        !ra.GetHideWishlist()) ||
                      ("dlc_onsale" == n.smart_section_type &&
                        !ra.GetHideDLC()) ||
                      ("interactive_recommender_onsale" ==
                        n.smart_section_type &&
                        !ra.GetHideIRList())) &&
                    !H.i.logged_in
                  )
                    u ||
                      ((r = M.createElement(Fn, {
                        section: e,
                        event: l,
                        language: s
                      })),
                      (u = !0));
                  else
                    switch (e.section_type) {
                      case "items":
                      case "events":
                      case "links":
                        r = M.createElement(
                          Wn,
                          Object(B.a)({ section: e, activeTab: a }, i.props)
                        );
                        break;
                      case "broadcast":
                        l.BHasBroadcastEnabled() &&
                          !m &&
                          ((r = M.createElement(er, {
                            promotionName: c,
                            eventModel: l,
                            bIsPreview: d,
                            language: s,
                            activeTab: a,
                            bShowDemoOptions: e.show_as_demos
                          })),
                          (m = !0));
                        break;
                      case "event_description":
                        r = M.createElement(
                          zn,
                          Object(B.a)({ section: e }, i.props)
                        );
                        break;
                      case "doors":
                        r = M.createElement(sn, {
                          strFontFamily: $n(l.jsondata.sale_font, s)
                        });
                        break;
                      case "text_section":
                        r = M.createElement(
                          Un,
                          Object(B.a)({ section: e }, i.props)
                        );
                        break;
                      case "tabs":
                        var o = p.get(e);
                        h.push({ activeTab: o, elements: [] }),
                          (r = M.createElement(
                            Ln,
                            Object(B.a)({ section: e }, i.props, {
                              activeTab: o.GetTab(),
                              onTabSelected: i.OnTabSelected
                            })
                          ));
                        break;
                      case "vo_internal":
                        if (e.internal_section_data)
                          switch (e.internal_section_data.internal_type) {
                            case "subscription_pricing":
                              r = M.createElement(
                                In,
                                Object(B.a)({ section: e }, i.props)
                              );
                              break;
                            case "event_schedule":
                              r = M.createElement(
                                En.b,
                                Object(B.a)({ section: e }, i.props, {
                                  activeTab: a
                                })
                              );
                              break;
                            case "tab_contents":
                              r = M.createElement(
                                An,
                                Object(B.a)({ section: e }, i.props, {
                                  tab: a.GetTab(),
                                  showReferences: !1
                                })
                              );
                              break;
                            case "tab_references":
                              r = M.createElement(
                                An,
                                Object(B.a)({ section: e }, i.props, {
                                  tab: a.GetTab(),
                                  showReferences: !0
                                })
                              );
                          }
                        break;
                      case "sale_item_browser":
                        r = M.createElement(
                          Vn,
                          Object(B.a)({ section: e }, i.props, { activeTab: a })
                        );
                    }
                  h[h.length - 1].elements.push(
                    M.createElement(
                      b.a,
                      { key: "SaleSectionIndex_" + e.unique_id + "_" + t },
                      r
                    )
                  );
                }
              });
              var t = h.map(function(e, t) {
                return M.createElement(
                  "div",
                  {
                    key: "TabSection_" + t,
                    className: vn.a.SaleSectionTabListContainer
                  },
                  e.elements
                );
              });
              return M.createElement(
                "div",
                { className: vn.a.SaleSectionListContainer },
                t
              );
            }),
            Object(B.c)([s.a], t.prototype, "OnTabSelected", null),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        Pn = Object(i.h)(Rn);
      var Hn = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language;
          if (!Qn(t, n, a.clanSteamID.GetAccountID())) return null;
          var r,
            o,
            i,
            l = M.createElement(
              "div",
              {
                className: jt.a.SaleSectionHeader,
                style: ((r = t),
                (i = n),
                {
                  fontFamily: $n((o = a).jsondata.sale_font, i),
                  fontWeight: o.jsondata.sale_font_weight,
                  fontSize: o.jsondata.sale_section_font_size,
                  textTransform: o.jsondata.sale_section_disable_capitalize
                    ? "initial"
                    : null,
                  color: r.label_color
                })
              },
              Qn(t, n, a.clanSteamID.GetAccountID())
            );
          return (
            t.label_link &&
              (l = M.createElement(
                "a",
                {
                  href:
                    (H.c.IN_CLIENT ? "steam://openurl/" : "") +
                    Jn(t.label_link),
                  target: H.c.IN_CLIENT ? void 0 : "_blank"
                },
                l
              )),
            l
          );
        },
        Fn = function(e) {
          var t = e.section,
            a = e.event;
          e.language;
          return M.createElement(
            "div",
            { className: vn.a.SaleSection, style: Xn(t, a) },
            M.createElement(Hn, Object(B.a)({}, e)),
            M.createElement(
              "div",
              { className: vn.a.SaleSectionLoginPrompt },
              Object(P.d)("#SalePage_LoginPrompt"),
              M.createElement(
                "button",
                { onClick: it.a, className: vn.a.LoginButton },
                Object(P.d)("#Login_SignIn")
              )
            )
          );
        },
        zn = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview;
          return M.createElement(
            "div",
            {
              className: Object(R.a)(vn.a.SaleSection, Sa.a.SaleSectionCtn),
              style: Xn(t, a)
            },
            M.createElement(Hn, Object(B.a)({}, e)),
            M.createElement(
              "div",
              { className: jt.a.SaleSectionContainer },
              M.createElement(Pa.a, {
                text: a.GetDescriptionWithFallback(n),
                partnerEventStore: N.c,
                showErrorInfo: r,
                event: a
              })
            )
          );
        },
        Un = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview,
            o = "";
          return (
            t.text_section_contents &&
              (o =
                t.text_section_contents[n] || t.text_section_contents[0] || ""),
            M.createElement(
              "div",
              {
                className: Object(R.a)(vn.a.SaleSection, Sa.a.SaleSectionCtn),
                style: Xn(t, a)
              },
              M.createElement(Hn, Object(B.a)({}, e)),
              M.createElement(
                "div",
                { className: jt.a.SaleSectionContainer },
                M.createElement(Pa.a, {
                  text: o,
                  partnerEventStore: N.c,
                  showErrorInfo: r,
                  event: a
                })
              )
            )
          );
        },
        Vn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(B.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.section,
                a = e.event;
              return M.createElement(
                Oa.a,
                {
                  placeholderHeight: "100vh",
                  rootMargin: "0px 0px 100% 0px",
                  mode: "LoadAndUnload",
                  className: Object(R.a)(vn.a.SaleSection, Sa.a.SaleSectionCtn),
                  style: Xn(t, a)
                },
                M.createElement(Hn, Object(B.a)({}, this.props)),
                M.createElement(yn, Object(B.a)({}, this.props))
              );
            }),
            (t = Object(B.c)([r.a], t))
          );
        })(M.Component),
        Wn = (function(t) {
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
            Object(B.d)(e, t),
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
            (e.prototype.ShowMoreContents = function() {
              this.state.bAwaitingShowContentLoading ||
                this.setState(
                  { bAwaitingShowContentLoading: !0 },
                  this.LoadMoreContent
                );
            }),
            (e.prototype.LoadMoreContent = function() {
              return Object(B.b)(this, void 0, void 0, function() {
                var t;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
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
                  Object(C.a)(
                    t.unique_id ? t.unique_id.toString() : JSON.stringify(t)
                  ).toString();
                if (
                  (this.props.bIsPreview &&
                    a.rtime32_last_local_modification &&
                    (n += "_" + a.rtime32_last_local_modification),
                  window.sessionStorage)
                ) {
                  var r = window.sessionStorage.getItem(n);
                  if (r) {
                    var o = JSON.parse(r);
                    if (o.rtime32_last_modified == a.rtime32_last_modified)
                      return o;
                  }
                  Object(Ce.f)(t.capsules),
                    Object(Ce.f)(t.links),
                    Object(Ce.f)(t.events),
                    (t.rtime32_last_modified = a.rtime32_last_modified),
                    window.sessionStorage.setItem(n, JSON.stringify(t));
                }
              }
              return t;
            }),
            (e.prototype.LoadCapsules = function(A) {
              return (
                void 0 === A && (A = 0),
                Object(B.b)(this, void 0, void 0, function() {
                  var r,
                    o,
                    i,
                    l,
                    s,
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
                    C,
                    O,
                    w,
                    T,
                    I,
                    k,
                    D,
                    j;
                  return Object(B.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (r = this.GetSectionForSession()),
                          (o = this.props),
                          (i = o.event),
                          (l = o.promotionName),
                          (s = o.bIsPreview),
                          (c = o.activeTab),
                          (d = o.nSaleDayIndex),
                          "items" !== r.section_type ||
                          "sale_tabhub" == r.smart_section_type
                            ? [3, 10]
                            : [4, G.a.HintLoad()]
                        );
                      case 1:
                        return (e.sent(), (p = void 0), r.smart_section)
                          ? ((a = i.GetSaleSections()),
                            (n = new Set()),
                            a
                              .filter(function(e) {
                                return "items" == e.section_type;
                              })
                              .forEach(function(e) {
                                return e.capsules.forEach(function(e) {
                                  "game" === e.type && n.add(e.id);
                                });
                              }),
                            (u = Array.from(n)),
                            [
                              4,
                              (function(u, m, h, v, _, b) {
                                return Object(B.b)(
                                  this,
                                  void 0,
                                  void 0,
                                  function() {
                                    var t, a, n, r, o, i, l, s, c, d, p;
                                    return Object(B.e)(this, function(e) {
                                      switch (e.label) {
                                        case 0:
                                          return (
                                            (t = v.smart_section_type),
                                            (a = v.smart_section_max_apps),
                                            (n = v.smart_section_tag),
                                            (r = v.smart_section_category),
                                            (o = v.random_from_entire_set),
                                            (i = a || 24),
                                            "tag" !== t
                                              ? [3, 2]
                                              : [
                                                  4,
                                                  ea.GetDiscounts({
                                                    tagid: n,
                                                    max_results: i,
                                                    feature: _,
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
                                                ea.GetDiscounts({
                                                  categoryid: r,
                                                  max_results: i,
                                                  feature: _,
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
                                            : [4, ea.GetTopN(_, i)];
                                        case 5:
                                          return [
                                            2,
                                            (l = e.sent()).map(function(e) {
                                              return { id: e, type: "game" };
                                            })
                                          ];
                                        case 6:
                                          if (!Object(ft.g)(t)) return [3, 11];
                                          e.label = 7;
                                        case 7:
                                          return (
                                            e.trys.push([7, 9, , 10]),
                                            [
                                              4,
                                              ea.GetSaleGamesByFlavor(
                                                u,
                                                m
                                                  ? m.GetTab().unique_id
                                                  : void 0,
                                                h,
                                                t,
                                                i
                                              )
                                            ]
                                          );
                                        case 8:
                                          return [
                                            2,
                                            (l = e.sent()).map(function(e) {
                                              return { id: e, type: "game" };
                                            })
                                          ];
                                        case 9:
                                          return e.sent(), [2, []];
                                        case 10:
                                          return [3, 30];
                                        case 11:
                                          return H.i.logged_in
                                            ? [3, 12]
                                            : [2, []];
                                        case 12:
                                          return !H.i.logged_in ||
                                            ("wishlist" !== t &&
                                              "interactive_recommender" !== t)
                                            ? [3, 13]
                                            : [
                                                2,
                                                (l = b.filter(function(e) {
                                                  return (
                                                    !G.a.BOwnsApp(e) &&
                                                    (("wishlist" === t &&
                                                      G.a.BIsGameWishlisted(
                                                        e
                                                      )) ||
                                                      ("interactive_recommender" ===
                                                        t &&
                                                        G.a.BIsGameRecommended(
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
                                        case 13:
                                          if (
                                            !H.i.logged_in ||
                                            ("wishlist_onsale" !== t &&
                                              "dlc_onsale" !== t &&
                                              "dlc_music_onsale" !== t &&
                                              "interactive_recommender_onsale" !==
                                                t &&
                                              "ir_subscription" !== t &&
                                              "tag_recommender" !== t)
                                          )
                                            return [3, 30];
                                          switch (((l = []), t)) {
                                            case "wishlist_onsale":
                                              return [3, 14];
                                            case "dlc_onsale":
                                              return [3, 17];
                                            case "dlc_music_onsale":
                                              return [3, 20];
                                            case "interactive_recommender_onsale":
                                              return [3, 22];
                                            case "tag_recommender":
                                              return [3, 25];
                                            case "ir_subscription":
                                              return [3, 27];
                                          }
                                          return [3, 29];
                                        case 14:
                                          return ra.GetHideWishlist()
                                            ? [3, 16]
                                            : [4, ea.GetWishlistOnSale()];
                                        case 15:
                                          (l = e.sent()),
                                            (s = "game"),
                                            (e.label = 16);
                                        case 16:
                                          return [3, 29];
                                        case 17:
                                          return (
                                            (s = "dlc"),
                                            ra.GetHideDLC()
                                              ? [3, 19]
                                              : [
                                                  4,
                                                  ea.GetDLCForGamesInMyLibraryOnSale()
                                                ]
                                          );
                                        case 18:
                                          (l = e.sent()), (e.label = 19);
                                        case 19:
                                          return [3, 29];
                                        case 20:
                                          return (
                                            (s = "music"),
                                            [
                                              4,
                                              ea.GetSoundtracksForGamesInMyLibraryOnSale()
                                            ]
                                          );
                                        case 21:
                                          return (l = e.sent()), [3, 29];
                                        case 22:
                                          return (
                                            (s = "game"),
                                            ra.GetHideIRList()
                                              ? [3, 24]
                                              : [
                                                  4,
                                                  ea.GetInteractiveRecommendationsOnSale()
                                                ]
                                          );
                                        case 23:
                                          (l = e.sent()), (e.label = 24);
                                        case 24:
                                          return [3, 29];
                                        case 25:
                                          return (
                                            (s = "game"),
                                            [
                                              4,
                                              ea.GetTagRecommendorForThisSale(
                                                h,
                                                i
                                              )
                                            ]
                                          );
                                        case 26:
                                          return (l = e.sent()), [3, 29];
                                        case 27:
                                          return (
                                            (s = "game"),
                                            (c = 402931),
                                            [
                                              4,
                                              (d = oa.Get()).LoadSubscriptionInfo(
                                                c
                                              )
                                            ]
                                          );
                                        case 28:
                                          return (
                                            e.sent(),
                                            (p = d.GetAllAppForMaster(c)),
                                            (l = Array.from(p).filter(function(
                                              e
                                            ) {
                                              return G.a.BIsGameRecommended(e);
                                            })),
                                            [3, 29]
                                          );
                                        case 29:
                                          return [
                                            2,
                                            l.map(function(e) {
                                              return { id: e, type: s };
                                            })
                                          ];
                                        case 30:
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
                                this.props.bIsPreview,
                                c,
                                i,
                                r,
                                ((t = l),
                                (H.c.IN_CLIENT
                                  ? "library-"
                                  : Object(H.e)() + "-") + t),
                                u
                              )
                            ])
                          : [3, 3];
                      case 2:
                        return (p = e.sent()), [3, 4];
                      case 3:
                        (p = r.capsules), (e.label = 4);
                      case 4:
                        return (
                          (p = Yn(
                            (p = p.filter(function(e) {
                              return c.ShouldShowCapsule(e);
                            })),
                            d
                          )),
                          (m = !1),
                          (h = p.length),
                          0 < (v = this.GetRowsToShow(A)) &&
                            !s &&
                            "store" === Object(H.e)() &&
                            ((_ =
                              (function(e, t) {
                                for (var a = Kn(e), n = 0, r = 0; r < t; r++)
                                  n += a[r % a.length];
                                return n;
                              })(r, v) + 4) +
                              4 <
                              h &&
                              ((h = _), (m = !0))),
                          0 < (O = Object(ft.r)(r)) &&
                            ((b = Math.max(O + 5, Math.floor(1.1 * O))),
                            (h = Math.min(h, b))),
                          p.length > h && (p = p.slice(0, h)),
                          [4, Object(_n.e)(p)]
                        );
                      case 5:
                        return (
                          e.sent(), (g = Zn(r)) ? [4, Object(_n.d)(p)] : [3, 8]
                        );
                      case 6:
                        return (
                          (y = e.sent()),
                          0 <
                          (E = y
                            .map(function(e) {
                              var t = Yt.a.GetAppLinkInfo(e);
                              return t && t.full_game_appid;
                            })
                            .filter(function(e) {
                              return !!e;
                            })).length
                            ? [4, Yt.a.LoadAppLinkInfo(E)]
                            : [3, 8]
                        );
                      case 7:
                        e.sent(), (e.label = 8);
                      case 8:
                        return (S = new Array()), [4, Object(_n.a)(p, g, S)];
                      case 9:
                        return (
                          (f = e.sent()),
                          (C = S.length),
                          0 < (O = Object(ft.r)(r)) &&
                            O < f.length &&
                            (f = f.slice(0, O)),
                          this.setState({
                            nHiddenCapsules: C,
                            capsules: f,
                            bIsCapsuleArrayTruncated: m,
                            bInitialLoadComplete: !0
                          }),
                          [3, 19]
                        );
                      case 10:
                        return "events" !== r.section_type
                          ? [3, 16]
                          : ((w = void 0),
                            r.smart_section &&
                            "recent_events" === r.smart_section_type
                              ? [4, na.GetRecentEventsForSalesPage(i)]
                              : [3, 13]);
                      case 11:
                        return (
                          (T = e.sent()),
                          (I = T.map(function(e) {
                            var t = new L.a(e.clan_steamid);
                            return N.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                              t,
                              e.gid,
                              e.nLastModifiedTime
                            );
                          })),
                          [4, Promise.all(I)]
                        );
                      case 12:
                        return (w = e.sent()), [3, 15];
                      case 13:
                        return [
                          4,
                          N.c.LoadBatchPartnerEventsByAnnouncementGID(
                            null,
                            r.events.map(function(e) {
                              return e.announcement_gid;
                            })
                          )
                        ];
                      case 14:
                        (w = e.sent()), (e.label = 15);
                      case 15:
                        return (
                          (k = w.filter(function(e) {
                            return !!e && c.ShouldShowEvent(e);
                          })),
                          Yt.a.LoadAppLinkInfo(
                            k.map(function(e) {
                              return e.appid;
                            })
                          ),
                          this.setState({
                            events: k,
                            bInitialLoadComplete: !0
                          }),
                          [3, 19]
                        );
                      case 16:
                        return "links" !== r.section_type &&
                          "sale_tabhub" !== r.smart_section_type
                          ? [3, 19]
                          : ((D = r.links),
                            "sale_tabhub" !== r.smart_section_type
                              ? [3, 18]
                              : [4, ea.GetSaleTags()]);
                      case 17:
                        (j = e.sent()),
                          (D = j.map(function(e) {
                            return {
                              url: e.url,
                              localized_link_capsule: void 0,
                              materialized_link_capsule: e.square
                            };
                          })),
                          (e.label = 18);
                      case 18:
                        this.setState({ links: D, bInitialLoadComplete: !0 }),
                          (e.label = 19);
                      case 19:
                        return [2];
                    }
                    var t, a, n;
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
            (e.prototype.EstimateComponentHeight = function(e) {
              return (
                250 *
                Math.min(
                  (function(e, t) {
                    var a = Kn(e),
                      n = 0;
                    for (; 0 < t; ) (t -= a[n % a.length]), n++;
                    return n;
                  })(e, this.state.capsules.length),
                  this.GetRowsToShow(0)
                )
              );
            }),
            (e.prototype.GetRowsToShow = function(e) {
              var t = this.props.section;
              if (t.show_as_carousel) return 0;
              var a = Object(ft.p)(t);
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
                l = r.nHiddenCapsules,
                s = r.capsules,
                c = r.links,
                d = r.events,
                p = r.bScreenIsWide,
                u = r.nMaxCapsulesPerRow,
                m = r.bAwaitingShowContentLoading;
              if (!o) return null;
              var h = this.GetSectionForSession(),
                v = Kn(h),
                _ = (function(e) {
                  var t = e.event,
                    r = e.section,
                    a = e.capsules,
                    n = e.links,
                    o = e.events,
                    i = e.language,
                    l = e.bShowParentApp,
                    s = e.bCanShowSingleRowCapsules,
                    c = t.clanSteamID.GetAccountID(),
                    d = t.BIsLockedToAppOwners();
                  {
                    if (Boolean("events" === r.section_type))
                      return o
                        ? o.map(function(t) {
                            return M.createElement(
                              "div",
                              {
                                key: r.unique_id + "_" + t.GID,
                                style: {},
                                className: Ca.a.OtherEvents
                              },
                              M.createElement(ge.a, { event: t }),
                              M.createElement(Ua, {
                                event: t,
                                openNewWindow: !0,
                                appInfo: Yt.a.GetAppLinkInfo(t.appid),
                                onClick: function(e) {
                                  x.a.Get().RecordEventRead(t, 8),
                                    Object(It.a)(t, Pe.o(e)),
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
                      return n
                        ? n.map(function(e, t) {
                            return M.createElement(Xa.b, {
                              key: r.unique_id + "_" + t,
                              link: e,
                              language: i,
                              clanAccountID: c,
                              strClassName: vn.a.LinkCapsule
                            });
                          })
                        : [];
                    if (Boolean("items" === r.section_type))
                      return a
                        ? a.map(function(e, t) {
                            var a = !s,
                              n =
                                r.unique_id +
                                "_" +
                                t +
                                "_" +
                                e.type +
                                "_" +
                                e.id;
                            return a
                              ? M.createElement(Xa.f, {
                                  key: n,
                                  capsule: e,
                                  bShowParentApp: l,
                                  bUseSubscriptionLayout: d,
                                  bUseDemoLayout: r.show_as_demos,
                                  bHidePrice: r.hide_prices
                                })
                              : M.createElement(
                                  "div",
                                  {
                                    key: n,
                                    className: vn.a.AppSummaryWidgetCtn
                                  },
                                  M.createElement(Xa.g, {
                                    id: e.id,
                                    type: e.type,
                                    bUseDemoLayout: r.show_as_demos,
                                    bHidePrice: r.hide_prices
                                  })
                                );
                          })
                        : [];
                  }
                  return null;
                })({
                  event: t,
                  section: h,
                  capsules: s,
                  links: c,
                  events: d,
                  language: n,
                  bCanShowSingleRowCapsules: Kn(h).every(function(e) {
                    return 1 === e;
                  }),
                  bShowParentApp: Zn(h)
                }).filter(function(e) {
                  return !!e;
                }),
                b = null;
              if (0 < _.length) {
                var g = Boolean(this.props.activeTab.GetTab()),
                  y = Object(ft.q)(h),
                  E = v[0],
                  S = h.show_as_carousel && y <= 1;
                if (S && _.length > E)
                  b = M.createElement(
                    ua,
                    {
                      hideArrows: !p,
                      visibleElements: E,
                      className: Object(R.a)(
                        "SaleSectionCarousel",
                        "SaleSectionCarouselPadding"
                      ),
                      useTestScrollbar: g
                    },
                    _
                  );
                else {
                  var f = this.GetRowsToShow(this.state.nShowAdditionalRows),
                    C = !0;
                  if (h.show_as_carousel) (f = y), (C = S);
                  else if (0 == this.state.nShowAdditionalRows) {
                    for (var O = 0, w = 0; O < f; O++) {
                      if ((w += L = Math.min(v[O % v.length], u)) > _.length)
                        break;
                    }
                    f = Math.max(2, O);
                  }
                  for (
                    var T, I = new Array(), k = new Array(), D = 0, j = 0;
                    D < _.length;
                    j++
                  ) {
                    for (var A = 0; (0 == f || A < f) && D < _.length; A++) {
                      var L = Math.min(v[A % v.length], u),
                        N = Math.min(L, _.length - D);
                      k.push(
                        M.createElement(
                          "div",
                          {
                            key: "Row_" + A,
                            className: Object(R.a)(
                              jt.a.SaleSectionContainer,
                              vn.a.SaleSectionContainer
                            ),
                            style: {
                              gridTemplateColumns:
                                1 < L
                                  ? "repeat(" + L + ", minmax(0, 1fr))"
                                  : null
                            }
                          },
                          _.slice(D, D + N)
                        )
                      ),
                        (D += N);
                    }
                    if (C) break;
                    I.push(M.createElement("div", { key: "Page_" + j }, k)),
                      (k = []);
                  }
                  b =
                    0 == I.length
                      ? ((T = i || _.length > D),
                        M.createElement(
                          M.Fragment,
                          null,
                          k,
                          T &&
                            M.createElement(
                              "div",
                              { className: vn.a.ShowContentsContainer },
                              m
                                ? M.createElement(de.a, { size: "small" })
                                : M.createElement(
                                    "button",
                                    {
                                      onClick: this.ShowMoreContents,
                                      className: vn.a.ShowContentsButton
                                    },
                                    Object(P.d)("#Sale_ShowMore")
                                  )
                            )
                        ))
                      : M.createElement(
                          ua,
                          {
                            hideArrows: !p,
                            visibleElements: 1,
                            className: "SaleSectionCarousel",
                            useTestScrollbar: g
                          },
                          I
                        );
                }
              }
              if (!b) {
                if (!a) return null;
                b = M.createElement(
                  "div",
                  { className: vn.a.preview_placeholder_section },
                  Object(P.d)(
                    h.smart_section
                      ? "#Sale_SmartPlaceHolder"
                      : "#Sale_PlaceHolder"
                  )
                );
              }
              var G = h.label_link
                ? (H.c.IN_CLIENT ? "steam://openurl/" : "") + Jn(h.label_link)
                : void 0;
              return M.createElement(
                Oa.a,
                {
                  placeholderHeight: this.EstimateComponentHeight(h),
                  rootMargin: "0px 0px 100% 0px",
                  mode: "LoadAndUnload",
                  className: Object(R.a)(
                    vn.a.SaleSection,
                    h.show_as_carousel && vn.a.CarouselDisplay,
                    Sa.a.SaleSectionCtn
                  ),
                  style: Xn(h, t)
                },
                M.createElement(
                  "div",
                  { className: vn.a.SaleSectionTitleCtn },
                  M.createElement(Hn, Object(B.a)({}, this.props)),
                  0 < l &&
                    M.createElement(
                      "div",
                      {
                        className: vn.a.SaleSectionSubtext,
                        "data-tooltip-text": Object(P.d)(
                          "#Sale_HiddenItem_Tooltip"
                        )
                      },
                      M.createElement(
                        "a",
                        { href: H.c.STORE_BASE_URL + "account/preferences" },
                        Object(P.k)(
                          1 == l
                            ? "#Sale_HiddenItem_Single_Short"
                            : "#Sale_HiddenItems_Short",
                          l
                        )
                      )
                    )
                ),
                b,
                Boolean(G) &&
                  M.createElement(
                    "div",
                    { className: vn.a.SaleViewAll },
                    M.createElement(
                      "a",
                      { href: G, target: H.c.IN_CLIENT ? void 0 : "_blank" },
                      Object(P.d)("#btn_live_streams_all")
                    )
                  )
              );
            }),
            Object(B.c)([s.a], e.prototype, "ShowMoreContents", null),
            Object(B.c)([s.a], e.prototype, "LoadCapsules", null),
            Object(B.c)([s.a], e.prototype, "OnResize", null),
            (e = a = Object(B.c)([r.a], e))
          );
        })(M.Component);
      function Zn(e) {
        return (
          "dlc" === e.smart_section_type ||
          "dlc_onsale" === e.smart_section_type ||
          "dlc_music_onsale" === e.smart_section_type
        );
      }
      function Yn(e, t) {
        return e.filter(function(e) {
          return null == e.visibility_index || e.visibility_index == t;
        });
      }
      var qn = function(e) {
        var t = e.text,
          a = e.url,
          n = e.color,
          r = e.bgcolor;
        return M.createElement(
          "a",
          {
            className: jt.a.BrowseMoreButton,
            href: Jn(a),
            target: "_blank",
            style: { backgroundColor: r, color: n }
          },
          t || Object(P.d)("#Sale_BrowseMore_Text_Default")
        );
      };
      function Jn(t) {
        var e = "",
          a = "";
        if (t && (0 <= t.indexOf("/") || 0 <= t.indexOf("?")))
          try {
            var n = new URL(t),
              e = n.pathname.substring(1),
              a = n.search;
            H.c.SNR &&
              (a += 0 < a.length ? "&snr=" + H.c.SNR : "?snr=" + H.c.SNR);
          } catch (e) {
            console.warn(t, e);
          }
        return H.c.STORE_BASE_URL + e + a;
      }
      function Qn(e, t, a, n) {
        var r = (function(e) {
          if ("items" === e.section_type)
            switch (e.smart_section_type) {
              case "wishlist":
                return "#Sale_default_label_OnYourWishlist";
              case "interactive_recommender":
              case "tag_recommender":
                return "#Sale_default_label_RecommendedForYou";
            }
          return null;
        })(e);
        if (r) return Object(P.d)(r);
        var o =
            e.localized_label[t] ||
            e.localized_label[0] ||
            ("#Sale_default_label" === e.default_label
              ? ""
              : Object(P.d)(e.default_label)),
          i =
            e.localized_label_image &&
            (e.localized_label_image[t] || e.localized_label_image[0]);
        if (n || !i) return o;
        var l = H.c.MEDIA_CDN_COMMUNITY_URL + "images/clans/" + a + "/" + i;
        return M.createElement("img", { loading: "lazy", src: l, alt: o });
      }
      function Kn(e) {
        return e.capsules_per_row_array
          ? e.capsules_per_row_array
          : e.adaptive_capsules_per_row
          ? [2, 3, 4, 3]
          : [e.capsules_per_row || 1];
      }
      function Xn(e, t) {
        if (e.disable_background) return { paddingLeft: 0, paddingRight: 0 };
        var a = "";
        return (
          e.background_image &&
            (a +=
              ",url(" +
              Ee.a.GenerateArtworkURLFromHashAndExtensions(
                t.clanSteamID,
                e.background_image
              ) +
              ")"),
          {
            background:
              "linear-gradient(0deg, " +
              (e.background_gradient_bottom || "transparent") +
              " 0%, " +
              (e.background_gradient_top || "transparent") +
              " 100%)" +
              a
          }
        );
      }
      function $n(e, t) {
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
      var er = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(B.d)(e, t),
            (e.prototype.OnEnter = function() {
              this.state.bOnceVisible || this.setState({ bOnceVisible: !0 });
            }),
            (e.prototype.render = function() {
              var t = this,
                e = this.props,
                a = e.eventModel,
                n = e.bShowDemoOptions,
                r = e.bIsPreview,
                o = e.language,
                i = e.promotionName;
              return M.createElement(
                b.a,
                null,
                M.createElement(
                  M.Suspense,
                  { fallback: M.createElement("div", null) },
                  M.createElement(
                    ve.a,
                    { onEnter: this.OnEnter },
                    M.createElement(
                      "div",
                      { className: vn.a.SaleBroadcastSection },
                      Boolean(this.state.bOnceVisible) &&
                        M.createElement(Nn, {
                          promotionName: i,
                          clanid: Number(H.b.CLANACCOUNTID),
                          bShowDemoOptions: n,
                          event: a,
                          bIsPreview: r,
                          accountIDs: r
                            ? a.jsondata.broadcast_whitelist
                            : void 0,
                          language: o,
                          bShowCapsuleArt: !0,
                          fnFilterStreams: function(e) {
                            return t.props.activeTab.ShouldShowOnTab(
                              "game",
                              e.appid
                            );
                          }
                        }),
                      Boolean(!this.state.bOnceVisible) &&
                        M.createElement("span", null, Object(P.d)("#Loading"))
                    )
                  )
                )
              );
            }),
            Object(B.c)([s.a], e.prototype, "OnEnter", null),
            e
          );
        })(M.Component),
        tr = Object(r.a)(function(e) {
          var t = $t.c.GetPlayReadyStream(),
            a = t && t.appid;
          _.a.EnsureStoreCapsuleInfoLoaded(a);
          var n = _.a.GetStoreCapsuleInfo(a),
            r = n && n.GetAppStoreData(),
            o = r && r.title;
          if (!o) return null;
          function i() {
            return window.open(r.capsule_link, "_blank");
          }
          var l =
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/" +
            (r.cover_image_asset_url
              ? "images/apps/" + a + "/" + r.cover_image_asset_url + ".jpg"
              : "images/apps/1195650/246e7e2a24c0aa965e505ac510d4e8e952f9a88a.jpg");
          return M.createElement(
            "div",
            { className: vn.a.SalePageBroadcastContextHover },
            M.createElement("img", {
              src: l,
              className: vn.a.AlbumCoverImage,
              onClick: i
            }),
            M.createElement(
              "div",
              { className: vn.a.AlbumTitle, onClick: i },
              " ",
              o,
              " "
            )
          );
        }),
        ar = a("BVKn"),
        nr = ar.a.Get(),
        rr = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.state = {
                lookupGID: t.props.event_gid
                  ? t.props.event_gid
                  : nr.GetClanEventGIDFromAnnouncementGID(
                      t.props.announcement_gid
                    )
              }),
              t
            );
          }
          return (
            Object(B.d)(e, a),
            (e.prototype.LoadEvent = function() {
              return Object(B.b)(this, void 0, void 0, function() {
                var t,
                  a = this;
                return Object(B.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !this.props.event_gid ||
                        nr.GetClanEventModel(this.props.event_gid)
                      )
                        return [3, 5];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          nr.LoadPartnerEventGeneric(
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
                        nr
                          .LoadPartnerEventGeneric(
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
                                Object(et.a)(e).strErrorMsg
                            );
                          }),
                        [3, 4]
                      );
                    case 4:
                      return [3, 6];
                    case 5:
                      this.props.announcement_gid &&
                        !nr.GetClanEventGIDFromAnnouncementGID(
                          this.props.announcement_gid
                        ) &&
                        nr
                          .LoadPartnerEventGeneric(
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
                                Object(et.a)(e).strErrorMsg
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
                t,
                a,
                n =
                  this.state.lookupGID &&
                  nr.GetClanEventModel(this.state.lookupGID);
              n && n.appid
                ? (t =
                    (e = _.a.GetStoreCapsuleInfo(n.appid).GetAppStoreData()) &&
                    e.title)
                : n &&
                  n.clanSteamID &&
                  (t =
                    (a = E.a.GetClanInfoByClanAccountID(
                      n.clanSteamID.GetAccountID()
                    )) && a.group_name);
              var r,
                o = n && n.GetNameWithFallback(Object(ye.f)(H.c.LANGUAGE));
              n &&
                t &&
                o &&
                ((r = Object(P.d)(
                  "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                  t,
                  o
                )),
                document.title != r && (document.title = r)),
                document.body.classList.contains("events_hub") &&
                  document.body.classList.remove("events_hub");
            }),
            (e.prototype.InfiniteScrollCloseModal = function() {
              var e = nr.GetClanEventModel(this.state.lookupGID);
              e &&
                (e.appid
                  ? this.props.history.push("/newshub/app/" + e.appid)
                  : this.props.history.push(
                      "/newshub/group/" + e.clanSteamID.GetAccountID()
                    ));
            }),
            (e.prototype.render = function() {
              var e = nr.GetClanEventModel(this.state.lookupGID);
              return e
                ? this.props.bInfiniteScroll
                  ? c.a.createElement(
                      b.a,
                      null,
                      c.a.createElement(tt, {
                        classname: F.a.StoreHeaderAdjust,
                        appid: e.appid,
                        trackingLocation: 0,
                        announcementGID: e.GetAnnouncementGID(),
                        partnerEventStore: nr,
                        eventModel: e,
                        showAppHeader: !0,
                        closeModal: this.InfiniteScrollCloseModal
                      })
                    )
                  : c.a.createElement(
                      b.a,
                      null,
                      c.a.createElement(en, {
                        lang: Object(ye.f)(H.c.LANGUAGE),
                        partnerEventStore: nr,
                        event: e,
                        adminPanel: c.a.createElement(ya, {
                          eventModel: e,
                          partnerEventStore: nr
                        }),
                        otherEventRow: c.a.createElement(za, {
                          appid: e.appid,
                          eventModel: e,
                          partnerEventStore: nr
                        })
                      })
                    )
                : c.a.createElement(de.a, null);
            }),
            Object(B.c)([s.a], e.prototype, "InfiniteScrollCloseModal", null),
            (e = Object(B.c)([r.a], e))
          );
        })(c.a.Component),
        or = Object(i.h)(rr),
        ir = a("WBba"),
        lr = a("r+ba"),
        sr = a("apHd"),
        cr = (function(n) {
          function e(e) {
            var a = n.call(this, e) || this;
            a.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: []
            };
            var t = Object(sr.a)("EventWebRowEmbed");
            return (
              a.ValidateStoreDefault(t) &&
                ((a.state.bPreLoaded = t.bPreLoaded),
                (a.state.announcementGIDList = t.announcementGIDList),
                (a.state.events = []),
                a.state.announcementGIDList.forEach(function(e) {
                  var t = N.c.GetClanEventFromAnnouncementGID(e);
                  t && a.state.events.push(t);
                })),
              a
            );
          }
          return (
            Object(B.d)(e, n),
            (e.prototype.componentDidMount = function() {
              return Object(B.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o,
                  i,
                  l,
                  s = this;
                return Object(B.e)(this, function(e) {
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
                          ((l = x.a.Get().GetTracker()),
                          this.state.events
                            .filter(function(e) {
                              return e.BIsPartnerEvent();
                            })
                            .forEach(function(e) {
                              return l.MarkEventShown(
                                e.GID,
                                e.clanSteamID.GetAccountID(),
                                o
                              );
                            }),
                          l.Flush()),
                        (e.label = 2);
                    case 2:
                      return (
                        (window.fnPartnerEvent_ShowInfiniteScroll = function(
                          e,
                          t
                        ) {
                          console.log("appid: " + e + " gid: " + t),
                            s.setState({
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
              return (
                !(!e || "object" != typeof e) &&
                (void 0 !== e.bPreLoaded &&
                  "boolean" == typeof e.bPreLoaded &&
                  Array.isArray(e.announcementGIDList))
              );
            }),
            (e.prototype.ShowModal = function(e) {
              var t = this.props.trackingLocation;
              this.setState({
                bShowModal: !0,
                modalInitialEvent: e,
                announcementGID: void 0
              });
              var a = x.a.Get().GetTracker();
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
                return c.a.createElement(
                  "div",
                  { className: $e.a.FlexCenter },
                  c.a.createElement(de.a, {
                    size: "medium",
                    position: "center"
                  })
                );
              if (n && 0 === n.length) return null;
              var e = window.screen.width <= 500 ? 1 : 2,
                t = this.props,
                r = t.partnerEventStore,
                o = t.strClassName,
                i = t.appid,
                l = t.trackingLocation;
              return c.a.createElement(
                "div",
                { className: o },
                this.state.bShowModal &&
                  c.a.createElement(tt, {
                    classname: lr.StoreHeaderAdjust,
                    appid: i,
                    trackingLocation: l,
                    announcementGID: this.state.announcementGID
                      ? this.state.announcementGID
                      : this.state.modalInitialEvent.AnnouncementGID,
                    partnerEventStore: r,
                    eventModel: this.state.modalInitialEvent,
                    closeModal: this.CloseModal
                  }),
                c.a.createElement(
                  "h2",
                  null,
                  Object(P.d)("#EventBrowse_RecentEvents")
                ),
                c.a.createElement(
                  "div",
                  { className: lr.SectionButtonCtn },
                  this.props.bViewAllShowInfiniteScroll
                    ? c.a.createElement(
                        "div",
                        {
                          className: lr.SectionButton,
                          onClick: function() {
                            return a.ShowModal(n[0]);
                          }
                        },
                        Object(P.d)("#EventBrowse_MoreEventsBtn")
                      )
                    : c.a.createElement(
                        Le.c,
                        {
                          eventModel: n[0],
                          route: Le.a.k_eViewWebSiteHub,
                          className: lr.SectionButton
                        },
                        Object(P.d)("#EventBrowse_MoreEventsBtn")
                      )
                ),
                c.a.createElement(
                  "div",
                  { className: lr.EventsSummariesCtn },
                  n.slice(0, e).map(function(t) {
                    var e =
                      1 === n.length && 500 < window.screen.width ? Va : Ua;
                    return c.a.createElement(e, {
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
            Object(B.c)([s.a], e.prototype, "ShowModal", null),
            Object(B.c)([s.a], e.prototype, "CloseModal", null),
            e
          );
        })(c.a.Component),
        dr = (function(r) {
          function e(e) {
            var t = r.call(this, e) || this;
            t.m_rtimeOldest = 0;
            var a = j.a.GetTimeNowWithOverrideAsDate(),
              n = new Date(a.setUTCHours(0, 0, 0, 0) - 15552e6);
            return (t.m_rtimeOldest = Math.floor(n.getTime() / 1e3)), t;
          }
          return (
            Object(B.d)(e, r),
            (e.prototype.render = function() {
              var e = this.props.appid;
              return c.a.createElement(cr, {
                appid: e,
                partnerEventStore: ar.a.Get(),
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
        })(c.a.Component);
      p.a.Init(new ir.a(H.c.WEBAPI_BASE_URL)), N.c.Init();
      function pr(e) {
        var t = e.children,
          a = Object(M.useState)(x.a.IsInitialized()),
          n = a[0],
          r = a[1];
        return n
          ? c.a.createElement(c.a.Fragment, null, t)
          : (x.a.InitGlobal().then(function() {
              return r(!0);
            }),
            null);
      }
      function ur(t) {
        return function(e) {
          return c.a.createElement(pr, null, c.a.createElement(t, e));
        };
      }
      var mr = ur(xt),
        hr = ur(Xt),
        vr = ur(Gn),
        _r = ur(vt),
        br = ur(or),
        gr = ur(dr),
        yr = ur(Jt);
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
        EventSubTitle: "eventcalendartile_EventSubTitle_1JjUp",
        TileTextHeader: "eventcalendartile_TileTextHeader_3-0KO",
        GameCapsuleCtn: "eventcalendartile_GameCapsuleCtn_3HJFi",
        AppBannerLogo: "eventcalendartile_AppBannerLogo_u8z1m",
        PatchIconCtn: "eventcalendartile_PatchIconCtn_Fm9_5",
        EventTitleCtn: "eventcalendartile_EventTitleCtn_1h5cJ",
        Mobile: "eventcalendartile_Mobile_2-hIy",
        Footer: "eventcalendartile_Footer_1tdf1",
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
        SubTitleShown: "eventcalendartile_SubTitleShown_5C13z",
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
    },
    xLK1: function(e, t, a) {
      e.exports = {
        HorizontalScrollInDragForceCursor:
          "horizontalscrollcontainer_HorizontalScrollInDragForceCursor_2kFhN"
      };
    }
  }
]);

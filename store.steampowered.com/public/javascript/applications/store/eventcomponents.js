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
              u = {};
            for (var p in d) {
              var m = d[p];
              u[p] = m.copy().multiply({ z: -1 });
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
                path: [d[e], d[t], u[t], u[e]],
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
            var u = Object.assign(
                { color: l.medium, rotate: { y: -i / 4 } },
                r
              ),
              p = Object.assign({ color: l.medium, rotate: { y: i / 4 } }, r),
              m = new A.a.Rect(
                Object.assign({}, u, { translate: { x: 6, z: 18 } })
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
                wall: Object.assign({}, u, { translate: { x: 18, z: 6 } }),
                pane: l.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, u, {
                  translate: { x: 18, y: -12, z: 6 }
                }),
                pane: l.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, u, { translate: { x: 18, z: -6 } }),
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
                wall: Object.assign({}, p, { translate: { x: -18, z: -6 } }),
                pane: l.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, p, {
                  translate: { x: -18, y: -12, z: -6 }
                }),
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, p, { translate: { x: -18, z: 6 } }),
                pane: l.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, p, {
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
            var j = I.copyGraph({
              translate: { x: 24, z: 27 },
              rotate: { y: -i / 4 }
            });
            j.copyGraph({ translate: { x: 24, z: 21 } }),
              j.copyGraph({ translate: { x: 24, z: 15 } }),
              j.copyGraph({ translate: { x: 24, z: 9 } }),
              j.copyGraph({ translate: { x: 24, z: 3 } }),
              I.copyGraph({
                translate: { x: -12, z: 27 },
                rotate: { y: i / 4 }
              }).copyGraph({ translate: { x: -12, z: 21 } });
            var D = new A.a.Shape({
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
              D.copy({
                path: [
                  { x: 24, y: 2 },
                  { x: 6, y: 2 },
                  { x: 6, y: 0, z: -6 },
                  { x: 18, y: 0, z: -6 }
                ]
              }),
              D.copy({
                path: [
                  { x: 18, y: 0, z: -6 },
                  { x: 24, y: 2 },
                  { x: 24, y: 2, z: -18 },
                  { x: 18, y: 0, z: -18 }
                ],
                color: l.deep
              }),
              D.copy({
                path: [
                  { x: 24, y: 2, z: -18 },
                  { x: 18, y: 0, z: -18 },
                  { x: 18, y: 0, z: -30 },
                  { x: 24, y: 2, z: -30 }
                ],
                color: l.deep
              }),
              D.copy({
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
            var u = new A.a.Anchor({
              addTo: r,
              translate: { z: -15 },
              rotate: { z: -0.1 }
            });
            new A.a.Rect({
              addTo: u,
              width: 3,
              height: 3,
              rotate: { x: a / 4 },
              fill: !0,
              stroke: 1.5,
              color: o
            }),
              new A.a.Shape({
                addTo: u,
                path: n,
                scale: 3,
                stroke: 1.5,
                color: o
              });
            var p = new A.a.Shape({
              addTo: u,
              path: [{}, { z: -2.5, y: 0.5 }],
              translate: { y: 3 },
              stroke: 1,
              color: o
            });
            p.copy({ rotate: { y: (a / 5) * 1 } }),
              p.copy({ rotate: { y: (a / 5) * 2 } }),
              p.copy({ rotate: { y: (a / 5) * 3 } }),
              p.copy({ rotate: { y: (a / 5) * 4 } }),
              new A.a.Rect({
                addTo: u,
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
                    (u.translate.y = 2 * Math.sin(7 * e)),
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
              u = t.deep,
              p = new A.a.Group({
                addTo: n,
                translate: { x: -52, z: -64 },
                scale: ZdogSpookyHouse.hillScale,
                updateSort: !0
              });
            ZdogSpookyHouse.getPyramid({
              addTo: p,
              scale: { x: 26, y: 60, z: 26 },
              color: d
            }),
              ZdogSpookyHouse.getPyramid({
                addTo: p,
                scale: { x: 14, y: 52, z: 14 },
                translate: { x: 12, y: -2, z: -12 },
                color: d
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: p,
                scale: { x: 26, y: -26, z: 26 },
                color: u
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: p,
                scale: { x: 10, y: -20, z: 10 },
                translate: { x: 12, y: 2, z: -12 },
                color: u
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: p,
                diameter: 8,
                length: 10,
                translate: { x: 18, y: -26, z: 0 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: p,
                diameter: 8,
                length: 10,
                translate: { x: 32, y: -8, z: -4 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: p,
                diameter: 8,
                length: 10,
                translate: { x: 10, y: -16, z: 24 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: p,
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
              j = 300;
            !(function e() {
              var t,
                a,
                n = k / j;
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
                (p.translate.y = 4 * Math.sin((n / 3) * r)),
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
    "+g3F": function(e, t, a) {
      e.exports = {
        LanguageHeader: "curatorfeedbrowse_LanguageHeader_3lQvI",
        CuratorInfoRow: "curatorfeedbrowse_CuratorInfoRow_3tR2d",
        CuratorInfoImg: "curatorfeedbrowse_CuratorInfoImg_1BVHF",
        CuratorInfoName: "curatorfeedbrowse_CuratorInfoName_2X1CS",
        CuratorInfoTitleCtn: "curatorfeedbrowse_CuratorInfoTitleCtn_3odsm",
        CuratorInfoActionCtn: "curatorfeedbrowse_CuratorInfoActionCtn_2y3rS",
        CuratorInfoPreview: "curatorfeedbrowse_CuratorInfoPreview_1Ebwp",
        CuratorInfoIcon: "curatorfeedbrowse_CuratorInfoIcon_3Y0jF",
        CuratorInfoFollow: "curatorfeedbrowse_CuratorInfoFollow_1I_eQ"
      };
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
    "4SZ2": function(e, t, a) {
      e.exports = {
        simpleTitleSmallHeight: "80",
        simpleTitleLargeHeight: "200",
        SimpleTitleHeaderCtn:
          "eventcalendarcollectionheaders_SimpleTitleHeaderCtn_3VhPz",
        SimpleTitleCtn: "eventcalendarcollectionheaders_SimpleTitleCtn_zWLw0",
        Title: "eventcalendarcollectionheaders_Title_1_MCH",
        Subtitle: "eventcalendarcollectionheaders_Subtitle_2Ym_j",
        LargeHeader: "eventcalendarcollectionheaders_LargeHeader_1Y7af"
      };
    },
    "90oc": function(e, t, a) {
      e.exports = {
        EventTileCarousel: "eventtilecarousel_EventTileCarousel_1mKD0",
        HorizontalTiles: "eventtilecarousel_HorizontalTiles_1mUGB",
        EventTileCarouselTitleContainer:
          "eventtilecarousel_EventTileCarouselTitleContainer_3I_aG",
        EventTileCarouselTitle:
          "eventtilecarousel_EventTileCarouselTitle_3X3hC",
        EventTileCarouselFollow:
          "eventtilecarousel_EventTileCarouselFollow_1qgVA"
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
    FKsz: function(e, t, a) {
      e.exports = {
        FeedSuggestContainerBG:
          "curatorfeedsuggestrow_FeedSuggestContainerBG_3ICp4",
        FeedSuggestContainer:
          "curatorfeedsuggestrow_FeedSuggestContainer_1420T",
        FeedSuggestCaption: "curatorfeedsuggestrow_FeedSuggestCaption_38Zh0",
        RowContainer: "curatorfeedsuggestrow_RowContainer_39bJZ",
        ClanInfo: "curatorfeedsuggestrow_ClanInfo_2gUTg",
        DismissButton: "curatorfeedsuggestrow_DismissButton_3YtGj",
        BrowseMore: "curatorfeedsuggestrow_BrowseMore_2nWAP"
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
        EmptyResults: "storesuggest_EmptyResults_3w0K5",
        ResultSectionHeader: "storesuggest_ResultSectionHeader_1KK1s",
        ResultRow: "storesuggest_ResultRow_16oSf",
        AvatarImage: "storesuggest_AvatarImage_3dr2A",
        GameName: "storesuggest_GameName_3CWrp",
        Label: "storesuggest_Label_I1zVi"
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
        LoadingProgress: "eventcalendar_LoadingProgress_2k5Q_",
        AdjustFiltersText: "eventcalendar_AdjustFiltersText_gM9Yy",
        Rows: "eventcalendar_Rows_r3Dia",
        FutureSection: "eventcalendar_FutureSection_290nk",
        PastSection: "eventcalendar_PastSection_3FpvG",
        DarkerBackground: "eventcalendar_DarkerBackground_1U2BW",
        EmptySectionText: "eventcalendar_EmptySectionText_3TwYr",
        CalendarEventListRow: "eventcalendar_CalendarEventListRow_3m6GW",
        CalendarEventListContainer:
          "eventcalendar_CalendarEventListContainer_3Qenz",
        CalendarRow: "eventcalendar_CalendarRow_398u2",
        EventListTitle: "eventcalendar_EventListTitle__qpO2",
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
        NoCount: "eventcalendar_NoCount_2qW89",
        LiveText: "eventcalendar_LiveText_14EbB",
        UpdatePageBanner: "eventcalendar_UpdatePageBanner_1hWgY",
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
        NewsChannelCount: "eventcalendar_NewsChannelCount_1HQl8",
        NewsChannelOnPage: "eventcalendar_NewsChannelOnPage_kJoC7",
        NewsChannelTitle: "eventcalendar_NewsChannelTitle_11O61",
        NewsChannelSubtitle: "eventcalendar_NewsChannelSubtitle_3_CIM",
        DiscoverGroup: "eventcalendar_DiscoverGroup_kUY00",
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
        MobileNavButtonActive: "eventcalendar_MobileNavButtonActive_2XXBa",
        CalendarEventList: "eventcalendar_CalendarEventList_3Pm1a"
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
        SocialFollowersCtn: "creatorhomeembed_SocialFollowersCtn_BT3Bj",
        FollowBtnCtn: "creatorhomeembed_FollowBtnCtn_2artm",
        FollowButton: "creatorhomeembed_FollowButton_1HwWX",
        FollowBtnText: "creatorhomeembed_FollowBtnText_1a5dj",
        SocialContainer: "creatorhomeembed_SocialContainer_1o1Ds",
        SocialImg: "creatorhomeembed_SocialImg_2v_K1",
        SocialLink: "creatorhomeembed_SocialLink_3eCVb",
        CuratorHoverCtn: "creatorhomeembed_CuratorHoverCtn_30j_R",
        AvatarLink: "creatorhomeembed_AvatarLink_1N0rY"
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
        ShowContentsButton: "saleitembrowser_ShowContentsButton_2tkiJ",
        SuggestContainer: "saleitembrowser_SuggestContainer_1YWp1"
      };
    },
    Wym2: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "EventModerationLanding", function() {
          return qr;
        }),
        a.d(t, "EventBackfillLanding", function() {
          return Qr;
        }),
        a.d(t, "EventSaleDisplay", function() {
          return Jr;
        }),
        a.d(t, "EventCalendar", function() {
          return Kr;
        }),
        a.d(t, "EventDetailView", function() {
          return Xr;
        }),
        a.d(t, "Events", function() {
          return $r;
        }),
        a.d(t, "EventSteamGameFestivalDebug", function() {
          return eo;
        });
      var z = a("q1tI"),
        d = a.n(z),
        U = a("mrSG"),
        n = a("vDqi"),
        E = a.n(n),
        m = a("2vnA"),
        r = a("TyAF"),
        o = a("Gp1o"),
        i = a("Ty5D"),
        u = a("qD+2"),
        L = a("kLLr"),
        _ = a("ir+G"),
        S = a("TQGK"),
        N = a("WF3T"),
        G = a("5izx"),
        W = a("9w6b"),
        B = a("6oCP"),
        b = a("IjL/"),
        s = a("55Ip"),
        v = a("kyHq"),
        c = a("KEpR"),
        p = a("Dhs6"),
        g = a("Mgs7"),
        D = a("6Y59"),
        M = a("5E+2"),
        y = a("+d9t"),
        h = a("r64O"),
        V = a("exH9"),
        Z = a("X3Ds"),
        Y = a("TLQK"),
        f = a("bxiW"),
        q = a("lkRc"),
        l = a("ka0M"),
        x = a("ee7K"),
        A = a("mgoM"),
        C = (function() {
          function e() {
            (this.m_mapNewsCurators = new Map()),
              (this.m_bIsLoadComplete = !1),
              (this.m_mapLangToNewsCurators = new Map()),
              (this.m_LoadingPromise = null);
          }
          return (
            (e.Get = function() {
              return (
                e.s_newsCuratorStore ||
                  (((e.s_newsCuratorStore = new e()).m_LoadingPromise = e.s_newsCuratorStore.Init()),
                  (window.g_NewsCuratorStore = e.s_newsCuratorStore)),
                e.s_newsCuratorStore
              );
            }),
            (e.prototype.IsLoaded = function() {
              return this.m_bIsLoadComplete;
            }),
            (e.prototype.WaitForInitialLoad = function() {
              return this.m_LoadingPromise;
            }),
            Object.defineProperty(e.prototype, "allNewsCurators", {
              get: function() {
                return Array.from(this.m_mapNewsCurators.values());
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.GetCuratorsForLang = function(e) {
              return this.m_mapLangToNewsCurators.get(e);
            }),
            (e.prototype.GetNewsCuratorForAccount = function(e) {
              return this.m_mapNewsCurators.get(e);
            }),
            (e.prototype.BIsTrustedPressAccount = function(e) {
              return void 0 !== this.GetNewsCuratorForAccount(e);
            }),
            (e.prototype.Init = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r = this;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        A.g.forEach(function(e) {
                          return r.m_mapLangToNewsCurators.set(e, []);
                        }),
                        (t = q.c.STORE_BASE_URL + "events/ajaxgetnewscurators"),
                        (a = { origin: self.origin }),
                        [4, E.a.get(t, { params: a })]
                      );
                    case 1:
                      return (
                        (n = e.sent()),
                        Object(m.A)(function() {
                          n.data &&
                            n.data.success &&
                            r.HandleCuratorResponse(n.data),
                            (r.m_bIsLoadComplete = !0);
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.HandleCuratorResponse = function(e) {
              if (
                (e.groupvanityinfo && S.a.RegisterClanData(e.groupvanityinfo),
                e.newscuratorinfo)
              )
                for (var t = 0, a = e.newscuratorinfo; t < a.length; t++) {
                  var n,
                    r = a[t];
                  this.m_mapNewsCurators.has(r.clanAccountID) ||
                    (this.m_mapNewsCurators.set(r.clanAccountID, r),
                    (n = S.a.GetClanInfoByClanAccountID(r.clanAccountID)) &&
                      this.m_mapLangToNewsCurators.get(n.rss_language).push(r));
                }
            }),
            Object(U.c)([m.y], e.prototype, "m_mapNewsCurators", void 0),
            Object(U.c)([m.y], e.prototype, "m_bIsLoadComplete", void 0),
            Object(U.c)([m.y], e.prototype, "m_mapLangToNewsCurators", void 0),
            Object(U.c)([m.k], e.prototype, "allNewsCurators", null),
            Object(U.c)([m.h], e.prototype, "HandleCuratorResponse", null),
            e
          );
        })(),
        O = a("qiKp"),
        w = a("bS9Q"),
        T = a("I2Hi"),
        I = a.n(T);
      function k(e) {
        var t = new Set();
        return (
          (0 <= e.indexOf("games") || 0 <= e.indexOf("dlc")) && t.add("apps"),
          0 <= e.indexOf("curators") && t.add("curators"),
          t
        );
      }
      var j = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                strSearchString: "",
                rgAppSuggestions: null,
                rgCuratorSuggestions: null
              }),
              (e.m_nHighestSentRequestID = 0),
              (e.m_mapHighestReceivedRequestIDFromBackEnd = new Map([
                ["apps", 0],
                ["curators", 0]
              ])),
              (e.m_timerForChange = new O.b()),
              e
            );
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_timerForChange.Cancel();
            }),
            (e.prototype.GetSuggestionsFromServer = function(a) {
              return Object(U.b)(this, void 0, void 0, function() {
                var t;
                return Object(U.e)(this, function(e) {
                  return (
                    (t = k(this.props.rgCorporaToSearch)).has("apps") &&
                      this.GetAppSuggestionsFromServer(a),
                    t.has("curators") && this.GetCuratorSuggestions(a),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.GetCuratorSuggestions = function(d) {
              var u;
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c;
                return Object(U.e)(this, function(e) {
                  for (
                    t = C.Get().allNewsCurators, a = [], n = 0, r = t;
                    n < r.length;
                    n++
                  )
                    if (
                      ((o = r[n]),
                      (i = S.a.GetClanInfoByClanAccountID(o.clanAccountID)),
                      (l = {
                        corpus: "curators",
                        id: o.clanAccountID,
                        name: null == i ? void 0 : i.group_name,
                        img: null == i ? void 0 : i.avatar_full_url
                      }),
                      0 <=
                        (
                          (null === (u = null == i ? void 0 : i.group_name) ||
                          void 0 === u
                            ? void 0
                            : u.toLocaleLowerCase()) || ""
                        ).indexOf(d))
                    ) {
                      if (
                        this.props.fnFilterSuggestion &&
                        !this.props.fnFilterSuggestion(l)
                      )
                        continue;
                      if (x.a.BIsIgnoringCurator(i.clanAccountID)) continue;
                      (s = x.a.BIsFollowingCurator(i.clanAccountID)),
                        (c = z.createElement(R, {
                          suggestion: l,
                          fnOnSelected: this.props.fnOnSelected,
                          bShowFollowingLabel: s
                        })),
                        a.push(
                          this.props.fnDecorateSuggestion
                            ? this.props.fnDecorateSuggestion(l, c)
                            : c
                        );
                    }
                  return (
                    this.m_mapHighestReceivedRequestIDFromBackEnd.set(
                      "curators",
                      this.m_nHighestSentRequestID
                    ),
                    this.setState({ rgCuratorSuggestions: a }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.GetAppSuggestionsFromServer = function(s) {
              var c;
              return Object(U.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o,
                  i,
                  l = this;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.m_nHighestSentRequestID),
                        (a = []),
                        0 <= this.props.rgCorporaToSearch.indexOf("games") &&
                          (a.push("game"), a.push("software")),
                        0 <= this.props.rgCorporaToSearch.indexOf("dlc") &&
                          (a.push("dlc"), a.push("music")),
                        (n = {
                          cc: q.c.COUNTRY,
                          l: q.c.LANGUAGE,
                          realm: v.d.k_ESteamRealmGlobal,
                          f: "jsonfull",
                          term: s.replace(" ", "+"),
                          require_type: a.join(","),
                          excluded_tags: x.a.GetExcludedTagsSortedByID(),
                          excluded_content_descriptors: x.a.GetExcludedContentDescriptor()
                        }),
                        (r = q.c.STORE_BASE_URL + "search/suggest"),
                        [4, E.a.get(r, { params: n, withCredentials: !0 })]
                      );
                    case 1:
                      return ((o = e.sent()),
                      t <
                        this.m_mapHighestReceivedRequestIDFromBackEnd.get(
                          "apps"
                        ))
                        ? [2]
                        : (this.m_mapHighestReceivedRequestIDFromBackEnd.set(
                            "apps",
                            t
                          ),
                          null !== (c = null == o ? void 0 : o.data) &&
                            void 0 !== c &&
                            c.length &&
                            (i = o.data.map(function(e) {
                              var t,
                                a = Object(U.a)(
                                  Object(U.a)(
                                    {
                                      corpus:
                                        "game" == (t = e.type) ||
                                        "software" == t
                                          ? "games"
                                          : "dlc" == t || "music" == t
                                          ? "dlc"
                                          : null
                                    },
                                    e
                                  ),
                                  { id: parseInt(e.id) }
                                );
                              if (
                                l.props.fnFilterSuggestion &&
                                !l.props.fnFilterSuggestion(a)
                              )
                                return null;
                              var n = z.createElement(R, {
                                suggestion: a,
                                fnOnSelected: l.props.fnOnSelected
                              });
                              return l.props.fnDecorateSuggestion
                                ? l.props.fnDecorateSuggestion(a, n)
                                : n;
                            })),
                          this.setState({ rgAppSuggestions: i }),
                          [2]);
                  }
                });
              });
            }),
            (e.prototype.UpdateSuggestions = function(n) {
              return Object(U.b)(this, void 0, void 0, function() {
                var t,
                  a = this;
                return Object(U.e)(this, function(e) {
                  return (
                    (t =
                      n.target.value &&
                      n.target.value.trim().toLocaleLowerCase()),
                    this.m_nHighestSentRequestID++,
                    null != t && t.length
                      ? (this.setState({ strSearchString: t }),
                        this.m_timerForChange.Schedule(300, function() {
                          return a.GetSuggestionsFromServer(t);
                        }))
                      : (Array.from(k(this.props.rgCorporaToSearch)).forEach(
                          function(e) {
                            return a.m_mapHighestReceivedRequestIDFromBackEnd.set(
                              e,
                              a.m_nHighestSentRequestID
                            );
                          }
                        ),
                        this.m_timerForChange.Cancel(),
                        this.setState({ strSearchString: "" }),
                        this.ResetSuggestions()),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.ResetSuggestions = function() {
              this.setState({
                rgAppSuggestions: null,
                rgCuratorSuggestions: null
              });
            }),
            (e.prototype.GetLimitedSuggestions = function() {
              var e = this.state,
                t = e.rgAppSuggestions,
                a = e.rgCuratorSuggestions,
                n = t ? t.length : 10,
                r = a ? a.length : 10;
              return (
                10 < n + r && (n = 10 - Math.min(r, 2)),
                (r = 10 - n),
                {
                  rgAppSuggestions: (t = null == t ? void 0 : t.slice(0, n)),
                  rgCuratorSuggestions: (a = null == a ? void 0 : a.slice(0, r))
                }
              );
            }),
            (e.prototype.render = function() {
              var t = this,
                e = this.props,
                a = e.strLabel,
                n = e.focusOnMount,
                r = e.rgCorporaToSearch,
                o = e.strResultsClass,
                i = this.state.strSearchString,
                l = this.GetLimitedSuggestions(),
                s = l.rgAppSuggestions,
                c = l.rgCuratorSuggestions,
                d = 0 < (null == i ? void 0 : i.length),
                u = 0 < (null == s ? void 0 : s.length),
                p = 0 < (null == c ? void 0 : c.length),
                m = 1 < k(r).size,
                h =
                  m &&
                  u &&
                  Object(Y.d)(
                    0 <= r.indexOf("dlc")
                      ? "#EventCalendar_SearchResultsHeader_GameAndDLCSection"
                      : "#EventCalendar_SearchResultsHeader_GameSection"
                  ),
                v = Array.from(k(r)).some(function(e) {
                  return (
                    t.m_nHighestSentRequestID >
                    t.m_mapHighestReceivedRequestIDFromBackEnd.get(e)
                  );
                }),
                _ = !p && !u && !v;
              return z.createElement(
                "div",
                { className: I.a.SuggestContainer },
                z.createElement(g.j, {
                  type: "text",
                  label: a,
                  onChange: this.UpdateSuggestions,
                  bAlwaysShowClearAction: d,
                  focusOnMount: n
                }),
                d &&
                  z.createElement(
                    "div",
                    { className: Object(V.a)(I.a.Results, o) },
                    u &&
                      z.createElement(
                        "div",
                        { key: "game-suggestions" },
                        m &&
                          z.createElement(
                            "div",
                            { className: I.a.ResultSectionHeader },
                            h
                          ),
                        s
                      ),
                    p &&
                      z.createElement(
                        "div",
                        { key: "curator-suggestions" },
                        m &&
                          z.createElement(
                            "div",
                            { className: I.a.ResultSectionHeader },
                            Object(Y.d)(
                              "#EventCalendar_SearchResultsHeader_CuratorSection"
                            )
                          ),
                        c
                      ),
                    _ &&
                      z.createElement(
                        "div",
                        { className: I.a.EmptyResults, key: "empty-results" },
                        Object(Y.d)("#EventCalendar_GameSearch_NoneFound")
                      )
                  )
              );
            }),
            Object(U.c)([f.a], e.prototype, "UpdateSuggestions", null),
            e
          );
        })(z.Component),
        R = function(e) {
          return z.createElement(
            "div",
            {
              className: I.a.ResultRow,
              key: "suggestion-" + e.suggestion.id,
              onClick: function() {
                return e.fnOnSelected(e.suggestion);
              }
            },
            z.createElement("img", {
              src: e.suggestion.img,
              className: I.a.AvatarImage
            }),
            z.createElement(
              "div",
              { className: I.a.GameName },
              " ",
              Object(w.b)(e.suggestion.name),
              " "
            ),
            e.bShowFollowingLabel &&
              z.createElement(
                "div",
                { className: I.a.Label },
                Object(Y.d)("#EventCalendar_FollowingCurator")
              )
          );
        },
        F = a("fpVW"),
        Q = a.n(F),
        P = a("Jqb/"),
        J = a("0OaU"),
        H = a("bDQf"),
        K = a("Lql7"),
        X = a("uIWk"),
        $ = a("7u3m"),
        ee = a.n($),
        te = a("D4G2"),
        ae = a.n(te),
        ne = a("Ff1b"),
        re = a.n(ne),
        oe = a("go9d"),
        ie = a.n(oe),
        le = a("/PpB"),
        se = a("BFsE"),
        ce = a("y+6m"),
        de = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoading:
                  !X.a.BHasCreatorHomeLoaded(
                    L.a.InitFromClanID(e.props.creatorID.clan_account_id)
                  ) || !x.a.BIsLoaded()
              }),
              (e.m_cancelSignal = E.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var e,
                t,
                a = this;
              this.state.bLoading &&
                ((e = this.props.creatorID),
                x.a.HintLoad(),
                Object(h.a)(
                  e.clan_account_id,
                  "CreatorHomeEmbed clan account id missing"
                ),
                (t = L.a.InitFromClanID(e.clan_account_id)),
                X.a
                  .LoadCreatorHome(t, this.m_cancelSignal)
                  .then(function(e) {
                    x.a
                      .HintLoad()
                      .then(function(e) {
                        return a.setState({ bLoading: !1 });
                      })
                      .catch(function(e) {
                        return a.HandleLoadingError(e);
                      });
                  })
                  .catch(function(e) {
                    return a.HandleLoadingError(e);
                  }));
            }),
            (e.prototype.HandleLoadingError = function(e) {
              var t = Object(H.a)(e);
              console.log("CreatorHomeEmbed hit error: " + t.strErrorMsg, t),
                this.m_cancelSignal.token ||
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
                    z.createElement(_e, {
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
            (e.prototype.render = function() {
              if (this.state.bLoading)
                return z.createElement(
                  "div",
                  { className: K.DevSummaryWidgetCtn },
                  z.createElement(J.a, null)
                );
              if (this.state.strErrorMsg) return z.createElement("div", null);
              var e = this.props,
                t = e.creatorID,
                a = e.bShowTagline,
                n = X.a.GetCreatorHomeByID(t),
                r = t.type,
                o =
                  "developer" == t.type
                    ? Object(Y.d)("#CreatorHome_DevelopedBy")
                    : "publisher" == t.type
                    ? Object(Y.d)("#CreatorHome_PublishedBy")
                    : Object(Y.d)("#CreatorHome_InFranchise"),
                i = n.GetURL(r),
                l = this.GetSocialMediaElements(n),
                s = n.GetNumFollowers();
              return z.createElement(
                b.a,
                null,
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      K.DevSummaryCtn,
                      this.props.bSmallFormat ? K.SmallFormat : K.LargeFormat
                    )
                  },
                  !this.props.bHideCreatorType &&
                    z.createElement("span", { className: K.Title }, o),
                  z.createElement(
                    "div",
                    { className: K.DevSummaryWidgetCtn },
                    z.createElement("div", {
                      className: K.DevSummaryBackground,
                      style: {
                        backgroundImage:
                          "url(" + n.GetAvatarURLFullSize() + " )"
                      }
                    }),
                    z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          K.DevSummaryContent,
                          F.FlexColumnContainer,
                          F.FlexContainSpaceBetween
                        )
                      },
                      z.createElement(
                        "div",
                        { className: F.FlexRowContainer },
                        z.createElement(
                          "a",
                          { href: i, className: K.AvatarLink },
                          z.createElement("img", {
                            className: K.Avatar,
                            src: n.GetAvatarURLFullSize()
                          })
                        ),
                        z.createElement(
                          "div",
                          {
                            className: Object(V.a)(
                              F.FlexColumnContainer,
                              K.CreatorDescCtn
                            )
                          },
                          z.createElement(
                            "div",
                            {
                              className: Object(V.a)(
                                K.CreatorTitleCtn,
                                F.FlexColumnContainer
                              )
                            },
                            z.createElement(
                              "a",
                              { href: i, className: K.CreatorNameName },
                              n.GetName()
                            ),
                            a &&
                              z.createElement(
                                "div",
                                {
                                  className: Object(V.a)(
                                    F.FlexColumnContainer,
                                    K.CreatorTagline
                                  )
                                },
                                n.GetTagLine()
                              )
                          ),
                          z.createElement(
                            "div",
                            {
                              className: Object(V.a)(
                                this.props.bSmallFormat
                                  ? F.FlexColumnContainer
                                  : F.FlexRowContainer,
                                K.SocialFollowersCtn
                              )
                            },
                            z.createElement(
                              "div",
                              { className: K.FollowBtnCtn },
                              !this.props.bHideFollowButton &&
                                z.createElement(he, {
                                  clanAccountID: t.clan_account_id,
                                  creatorID: t
                                }),
                              z.createElement(
                                "div",
                                { className: K.Followers },
                                z.createElement(
                                  "span",
                                  null,
                                  s.toLocaleString(Y.c.GetPreferredLocales())
                                ),
                                z.createElement("br", null),
                                Object(Y.d)("#CreatorHome_JustFollowers")
                              )
                            ),
                            0 < l.length &&
                              z.createElement(
                                "div",
                                {
                                  className: Object(V.a)(
                                    K.SocialContainer,
                                    F.FlexColumnContainer
                                  )
                                },
                                l
                              )
                          )
                        )
                      )
                    )
                  )
                )
              );
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component);
      function ue(e) {
        var t = L.a.InitFromClanID(e),
          a = W.a.Get().GetPartnerEventPermissions(t);
        if (W.a.Get().BIsUserLoggedIn()) {
          if (!a.limited_user) return 1;
          Object(l.d)(z.createElement(le.a, null), window);
        } else
          Object(l.d)(
            z.createElement(P.c, {
              strTitle: Object(Y.d)("#EventDisplay_Share_NotLoggedIn"),
              strDescription: Object(Y.d)(
                "#EventDisplay_Share_NotLoggedIn_Description"
              ),
              strOKButtonText: Object(Y.d)("#MobileLogin_SignIn"),
              onOK: function() {
                return Object(se.a)();
              }
            }),
            window
          );
      }
      var pe,
        me,
        he = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bApplyingFollowing: !1 }), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.OnFollowClick = function() {
              ue(this.props.clanAccountID) &&
                this.setState(
                  { bApplyingFollowing: !0 },
                  this.TakeFollowAction
                );
            }),
            (e.prototype.TakeFollowAction = function() {
              var a = this,
                e = this.props,
                t = e.clanAccountID,
                n = e.creatorID,
                r = L.a.InitFromClanID(t),
                o = x.a.BIsFollowingCurator(r),
                i = !o && x.a.BIsIgnoringCurator(r);
              x.a
                .UpdateFollowOrIgnoreCurator(r, !i, !(i || o))
                .then(function(e) {
                  var t;
                  n &&
                    ((t = X.a.GetCreatorHomeByID(n)),
                    i || t.AdjustFollower(o ? -1 : 1)),
                    a.setState({ bApplyingFollowing: !1 });
                })
                .catch(function(e) {
                  a.setState({ bApplyingFollowing: !1 }),
                    a.HandleLoadingError(e);
                });
            }),
            (e.prototype.HandleLoadingError = function(e) {
              var t = Object(H.a)(e);
              console.error(
                "CuratorFollowButton hit error: " + t.strErrorMsg,
                t
              ),
                this.setState({ bApplyingFollowing: !1 });
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.clanAccountID,
                a = e.className,
                n = L.a.InitFromClanID(t),
                r = x.a.BIsFollowingCurator(n),
                o = !r && x.a.BIsIgnoringCurator(n);
              return z.createElement(
                "div",
                {
                  className: Object(V.a)(
                    F.Button,
                    K.FollowButton,
                    a,
                    r ? "Followed" : ""
                  ),
                  onClick: this.OnFollowClick
                },
                this.state.bApplyingFollowing &&
                  z.createElement(J.a, { size: "small" }),
                !this.state.bApplyingFollowing &&
                  (r || o) &&
                  z.createElement("img", {
                    style: { height: "16px" },
                    src:
                      "https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_selected.png"
                  }),
                z.createElement(
                  "div",
                  { className: K.FollowBtnText },
                  !this.state.bApplyingFollowing &&
                    (r
                      ? Object(Y.d)("#Button_Followed")
                      : o
                      ? Object(Y.d)("#Button_Ignored")
                      : Object(Y.d)("#Button_Follow"))
                )
              );
            }),
            Object(U.c)([f.a], e.prototype, "OnFollowClick", null),
            Object(U.c)([f.a], e.prototype, "TakeFollowAction", null),
            e
          );
        })(z.Component),
        ve = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bLoading: !_.a.BIsAppidLoaded(e.appid) }), t;
          }
          return (
            Object(U.d)(e, a),
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
                    var t = Object(H.a)(e);
                    console.log(
                      "CreatorHomeEmbedForApp - failed to load appinfo " +
                        t.strErrorMsg
                    ),
                      a.setState({ strErrorMsg: t.strErrorMsg, bLoading: !1 });
                  });
            }),
            (e.prototype.render = function() {
              if (this.state.bLoading)
                return z.createElement(
                  "div",
                  { className: K.DevSummaryWidgetCtn },
                  z.createElement(J.a, null)
                );
              var e = this.props.appid,
                t = _.a.GetStoreCapsuleInfo(e).GetAppStoreData();
              if (
                !this.state.strErrorMsg &&
                t.creator_list &&
                0 < t.creator_list.length
              ) {
                var a = void 0,
                  n = void 0,
                  r = void 0;
                return (
                  t.creator_list.forEach(function(e) {
                    switch (e.type) {
                      case "developer":
                        void 0 === a && (a = e);
                        break;
                      case "publisher":
                        void 0 === n && (n = e);
                        break;
                      default:
                        void 0 === r && (r = e);
                    }
                  }),
                  z.createElement(
                    b.a,
                    null,
                    z.createElement(de, {
                      creatorID: a || (n || r),
                      bSmallFormat: !0
                    })
                  )
                );
              }
              return z.createElement("div", null);
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        _e = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.social,
                t = "";
              switch (e.external_type) {
                case 3:
                case 7:
                  t = ee.a;
                  break;
                case 5:
                  t = re.a;
                  break;
                case 4:
                  t = ae.a;
                  break;
                case 6:
                  t = ie.a;
              }
              return z.createElement(
                "a",
                {
                  href:
                    (q.c.IN_CLIENT ? "steam://openurl_external/" : "") +
                    e.external_url,
                  target: q.c.IN_CLIENT ? void 0 : "_blank",
                  "data-tooltip-text": e.external_user_name
                    ? e.external_user_name
                    : e.external_url,
                  className: Object(V.a)(K.SocialLink)
                },
                z.createElement("img", {
                  className: Object(V.a)(K.SocialImg),
                  src: t
                }),
                z.createElement(
                  "div",
                  null,
                  e.external_follows.toLocaleString(Y.c.GetPreferredLocales())
                )
              );
            }),
            t
          );
        })(z.Component),
        be = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_refContainer = z.createRef()), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.componentDidMount = function() {
              x.a.HintLoad(),
                this.m_refContainer &&
                  this.m_refContainer.current &&
                  this.m_refContainer.current.focus();
            }),
            (e.prototype.Close = function() {
              this.props.fnClose && this.props.fnClose();
            }),
            (e.prototype.OnKeyDown = function(e) {
              27 == e.keyCode &&
                (this.Close(), e.preventDefault(), e.stopPropagation());
            }),
            (e.prototype.OnBlurInternal = function(e) {
              (e.relatedTarget && Z.c(e.currentTarget, e.relatedTarget)) ||
                this.Close();
            }),
            (e.prototype.OnMouseLeaveInternal = function(e) {
              (e.relatedTarget && Z.c(e.currentTarget, e.relatedTarget)) ||
                this.Close();
            }),
            (e.prototype.render = function() {
              var e = this.props.clanInfo;
              if (
                (Object(h.a)(
                  e && e.clanAccountID,
                  "CuratorHoverContent expect clanInfo, not supplied"
                ),
                e)
              ) {
                var t = {
                  clan_account_id: e.clanAccountID,
                  name: e.group_name,
                  type: "developer"
                };
                return z.createElement(
                  "div",
                  {
                    className: K.CuratorHoverCtn,
                    onKeyDown: this.OnKeyDown,
                    ref: this.m_refContainer,
                    onBlur: this.OnBlurInternal,
                    onMouseLeave: this.OnMouseLeaveInternal
                  },
                  z.createElement(de, {
                    creatorID: t,
                    bSmallFormat: !0,
                    bShowTagline: !0,
                    bHideCreatorType: !0
                  })
                );
              }
              return null;
            }),
            Object(U.c)([f.a], e.prototype, "Close", null),
            Object(U.c)([f.a], e.prototype, "OnKeyDown", null),
            Object(U.c)([f.a], e.prototype, "OnBlurInternal", null),
            Object(U.c)([f.a], e.prototype, "OnMouseLeaveInternal", null),
            e
          );
        })(z.Component),
        ge = a("+g3F"),
        ye = a.n(ge),
        Ee = a("UWWC"),
        Se = a("yJqL"),
        fe = a("JJA/"),
        Ce = a("xnZ7"),
        Oe = a.n(Ce),
        we = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoading: !1, eventModel: e.props.eventModel }),
              (e.m_refParent = z.createRef()),
              (e.m_cancelSignal = E.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.state.eventModel ||
                this.setState({ bLoading: !0 }, this.LoadEvent);
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.add(fe.BodyNoScroll);
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.remove(fe.BodyNoScroll);
            }),
            (e.prototype.GetBodyElement = function() {
              return this.m_refParent.current
                ? this.m_refParent.current.closest("body")
                : null;
            }),
            (e.prototype.LoadEvent = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o = this;
                return Object(U.e)(this, function(e) {
                  return (
                    (t = this.props),
                    (a = t.appid),
                    (n = t.clanSteamID),
                    (r = t.announcementGID),
                    t.partnerEventStore
                      .LoadAdjacentPartnerEventsByAnnouncement(
                        r,
                        n,
                        a,
                        0,
                        3,
                        null,
                        this.m_cancelSignal
                      )
                      .then(function(e) {
                        0 < e.length
                          ? o.setState(
                              { bLoading: !1, eventModel: e[0] },
                              o.HandleReadEvent
                            )
                          : o.props.onEventNotFound &&
                            o.props.onEventNotFound();
                      })
                      .catch(function(e) {
                        var t = Object(H.a)(e);
                        console.log(
                          "EventInfiniteScrollModal failed " + t.strErrorMsg,
                          t
                        ),
                          o.setState({ bLoading: !1 });
                      }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.HandleReadEvent = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(U.e)(this, function(e) {
                  return (
                    (t = this.state.eventModel),
                    (a = this.props.trackingLocation),
                    t &&
                      t.BIsPartnerEvent() &&
                      W.a
                        .Get()
                        .GetTracker()
                        .MarkEventRead(
                          t.GID,
                          t.clanSteamID.GetAccountID(),
                          a
                        ) &&
                      W.a
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
                return z.createElement(
                  P.h,
                  null,
                  z.createElement(
                    "div",
                    { className: Oe.a.FlexCenter, style: { height: "400px" } },
                    z.createElement(J.a, null)
                  )
                );
              var e = this.props,
                t = e.classname,
                a = e.partnerEventStore,
                n = e.bPrimaryPageFeature;
              if (this.state.eventModel) {
                var r = z.createElement(
                  "div",
                  null,
                  z.createElement(Se.a, {
                    initialEvent: this.state.eventModel,
                    partnerEventStore: a,
                    emoticonStore: Ee.b,
                    appInfoStore: u.a,
                    closeModal: !n && this.props.closeModal,
                    showAppHeader: this.props.showAppHeader
                  })
                );
                return n ? r : z.createElement(P.h, { className: t }, r);
              }
              return null;
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Te = a("uuth"),
        Ie = a("ylkE"),
        ke = a("cGQe"),
        je = a("XmAN"),
        De = a("U+Q5"),
        Ae = a("5bld"),
        Le = a("YLyR"),
        Ne = a("Kw0F");
      ((me = pe = pe || {})[(me.NotLoaded = 0)] = "NotLoaded"),
        (me[(me.Loading = 1)] = "Loading"),
        (me[(me.Loaded = 2)] = "Loaded");
      var Ge = pe.NotLoaded,
        Be = [];
      function Me(t) {
        var e, a;
        Ge != pe.Loaded
          ? (Ge == pe.NotLoaded &&
              (((e = document.createElement("script")).src =
                "https://www.youtube.com/iframe_api"),
              (a = document.getElementsByTagName(
                "script"
              )[0]).parentNode.insertBefore(e, a),
              (window.onYouTubeIframeAPIReady = xe)),
            Be.findIndex(function(e) {
              return t == e;
            }) < 0 && Be.push(t))
          : t();
      }
      function xe() {
        Ge = pe.Loaded;
        for (var e = 0, t = Be; e < t.length; e++) {
          (0, t[e])();
        }
        Be = [];
      }
      var Re = (function(a) {
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
            Object(U.d)(n, a),
            (n.prototype.componentWillUnmount = function() {
              var e;
              this.DestroyPlayer(),
                (e = this.OnYoutubeScriptsReady),
                Ne.b(Be, e);
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
                this.m_playerContainer && Me(this.OnYoutubeScriptsReady));
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
              var e = z.createElement(
                "div",
                {
                  key: this.m_strPlayerID,
                  ref: this.BindPlayerContainer,
                  className: Object(V.a)("YoutubePlayer", this.props.classnames)
                },
                z.createElement(J.a, { className: "YoutubePlayerThrobber" })
              );
              return this.props.autopause
                ? z.createElement(Te.a, { onLeave: this.OnPlayerLeftView }, e)
                : e;
            }),
            (n.s_nPlayerIndex = 0),
            Object(U.c)([f.a], n.prototype, "BindPlayerContainer", null),
            Object(U.c)([f.a], n.prototype, "OnYoutubeScriptsReady", null),
            Object(U.c)([f.a], n.prototype, "CreatePlayer", null),
            Object(U.c)([f.a], n.prototype, "OnPlayerReady", null),
            Object(U.c)([f.a], n.prototype, "OnPlayerStateChange", null),
            Object(U.c)([f.a], n.prototype, "OnError", null),
            Object(U.c)([f.a], n.prototype, "OnPlayerLeftView", null),
            n
          );
        })(z.Component),
        Fe = a("02Wr"),
        Pe = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e =
                  this.props.altImgWithFallback &&
                  0 < this.props.altImgWithFallback.length,
                t = this.props.altImg
                  ? this.props.altImg
                  : "https://img.youtube.com/vi/" +
                    this.props.video +
                    "/maxresdefault.jpg";
              return z.createElement(
                z.Fragment,
                null,
                e &&
                  z.createElement(Fe.b, {
                    className: this.props.className,
                    srcs: this.props.altImgWithFallback
                  }),
                !e &&
                  z.createElement("img", {
                    src: t,
                    className: this.props.className
                  })
              );
            }),
            t
          );
        })(z.Component),
        He = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bDismissedPreviewImage: !1 }), t;
          }
          return (
            Object(U.d)(e, a),
            (e.prototype.render = function() {
              var t = this;
              if (
                (this.props.preloadYoutubeScripts && Me(function() {}),
                this.state.bDismissedPreviewImage)
              )
                return z.createElement(Re, Object(U.a)({}, this.props));
              return z.createElement(
                "div",
                {
                  className: Object(V.a)(
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
                z.createElement(Pe, {
                  className: "YoutubePreviewImage",
                  altImgWithFallback: this.props.altImgWithFallback,
                  altImg: this.props.altImg,
                  video: this.props.video
                }),
                z.createElement(
                  "div",
                  { className: "YoutubePreviewPlay" },
                  z.createElement(D.Y, null)
                ),
                z.createElement(
                  "div",
                  { className: "VideoHintText" },
                  Object(Y.d)("#EventCalendar_WatchYouTubeVideo")
                )
              );
            }),
            e
          );
        })(z.Component),
        ze = a("N0Ye"),
        Ue = a("mB/g"),
        We = a("i6tc"),
        Ve = a.n(We),
        Ze = a("RQmk"),
        Ye = a("O0NR"),
        qe = a("TtDX"),
        Qe = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.OnMuteButton = function(e) {
              var t = this.props.calendarEvent,
                a = t.GetEntityName();
              Object(l.d)(
                z.createElement(
                  P.c,
                  {
                    strTitle: Object(Y.d)("#EventCalendar_MuteApp_Title", a),
                    strDescription: Object(Y.d)(
                      "#EventCalendar_MuteApp_details",
                      a
                    ),
                    onOK: function() {
                      return Object(N.a)().UpdateEventBlockFromCalendarEvent(
                        t,
                        !1
                      );
                    }
                  },
                  z.createElement(
                    "a",
                    {
                      href:
                        (q.c.IN_CLIENT ? "steam://openurl/" : "") +
                        q.c.STORE_BASE_URL +
                        "account/emailoptout/app",
                      target: q.c.IN_CLIENT ? void 0 : "_blank"
                    },
                    Object(Y.d)("#EventCalendar_ManageMutedSources")
                  )
                ),
                Object(Z.n)(e)
              );
            }),
            (t.prototype.OnUnMuteButton = function() {
              var e = this.props.calendarEvent;
              Object(N.a)().UpdateEventBlockFromCalendarEvent(e, !0);
            }),
            (t.prototype.HideAllEventsOfMyType = function() {
              var e = this.props.eventModel,
                t = this.GetVisibilityStore().MapClanEventTypeToGroup(
                  e.GetEventType()
                );
              this.GetVisibilityStore().SetEventTypeGroupAllowed(t, !1);
            }),
            (t.prototype.GetVisibilityStore = function() {
              return Object(N.a)().m_visibilityStore;
            }),
            (t.prototype.AddContextMenuForSource = function(e, t, a, n) {
              var r = this;
              void 0 === n && (n = !0),
                this.GetVisibilityStore().BIsGameSourceAllowed(t) &&
                  (n &&
                    e.push(
                      z.createElement(
                        ce.d,
                        {
                          key: "item-source-" + a + "-" + t,
                          disabled: !0,
                          onSelected: function() {}
                        },
                        Object(Y.d)("#EventCalender_Reason_" + t)
                      )
                    ),
                  e.push(
                    z.createElement(
                      ce.d,
                      {
                        key: "item-hidesource-" + a + "-" + t,
                        onSelected: function() {
                          r.GetVisibilityStore().SetGameSourceAllowed(t, !1);
                        }
                      },
                      Object(Y.d)("#EventCalender_Hide_Reason_" + t)
                    )
                  ));
            }),
            (t.prototype.RemoveFromWishlist = function() {
              x.a.UpdateGameWishlist(this.props.eventModel.appid, !1);
            }),
            (t.prototype.AddToWishlist = function() {
              x.a.UpdateGameWishlist(this.props.eventModel.appid, !0);
            }),
            (t.prototype.GotoGameOrClanHub = function() {
              var e = this.props.eventModel,
                t = Object(Ue.d)(e, Ue.a.k_eStoreNewsHub, "allowRelative");
              this.props.history.push(t);
            }),
            (t.prototype.ToggleFollowCurator = function() {
              !(function(n) {
                Object(U.b)(this, void 0, void 0, function() {
                  var t, a;
                  return Object(U.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return ue(n)
                          ? ((t = L.a.InitFromClanID(n)),
                            (a = x.a.BIsFollowingCurator(t)),
                            [4, x.a.UpdateFollowOrIgnoreCurator(t, !0, !a)])
                          : [3, 2];
                      case 1:
                        e.sent(), (e.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              })(this.props.eventModel.clanSteamID.GetAccountID());
            }),
            (t.prototype.CreateContextMenu = function(e) {
              var t,
                a = this.props,
                n = a.eventModel,
                r = a.calendarEvent,
                o = [],
                i = r.GetSource(),
                l = r.unique_id,
                s = Object(N.a)();
              s.BIsGlobalCalendar() &&
                (i &&
                  i & Ae.a.k_eLibrary &&
                  (this.GetVisibilityStore().BIsGameSourceAllowed(
                    c.c.k_ERecent
                  ) && r.appInfo
                    ? (o.push(
                        z.createElement(
                          ce.d,
                          {
                            key: "item-source-" + l + "-lastplayed",
                            disabled: !0,
                            onSelected: function() {}
                          },
                          Object(Y.d)(
                            "#EventCalender_LastPlayed",
                            Object(Y.o)(
                              G.a.GetTimeNowWithOverride() -
                                r.appInfo.last_played
                            )
                          )
                        )
                      ),
                      this.AddContextMenuForSource(o, c.c.k_ERecent, l, !1))
                    : this.AddContextMenuForSource(o, c.c.k_ELibrary, l)),
                i &&
                  i & Ae.a.k_eWishlist &&
                  this.AddContextMenuForSource(o, c.c.k_EWishist, l),
                i &&
                  i & Ae.a.k_eFollowing &&
                  this.AddContextMenuForSource(o, c.c.k_EFollowing, l),
                i &&
                  i & Ae.a.k_eCurator &&
                  this.AddContextMenuForSource(o, c.c.k_ECurator, l),
                i &&
                  i & Ae.a.k_eRecommended &&
                  this.AddContextMenuForSource(o, c.c.k_ERecommended, l),
                i &&
                  i & Ae.a.k_eSteam &&
                  this.AddContextMenuForSource(o, c.c.k_ESteam, l),
                i &&
                  i & Ae.a.k_eFeatured &&
                  this.AddContextMenuForSource(o, c.c.k_EFeatured, l)),
                o.push(
                  z.createElement(
                    ce.d,
                    {
                      key: n.GID + "hidetype",
                      onSelected: this.HideAllEventsOfMyType
                    },
                    Object(Y.d)(
                      "#EVentCalendar_Hide_EventType",
                      Object(Y.d)(
                        "#EventCalendar_EventTypeGroup_" +
                          this.GetVisibilityStore().MapClanEventTypeToGroup(
                            n.GetEventType()
                          )
                      )
                    )
                  )
                ),
                q.i.logged_in &&
                  (p.a.BIsEventBlocked(r)
                    ? o.push(
                        z.createElement(
                          ce.d,
                          {
                            key: n.GID + "unmuteapp",
                            onSelected: this.OnUnMuteButton
                          },
                          z.createElement(
                            M.a,
                            {
                              toolTipContent: Object(Y.d)(
                                "#EventCalendar_UnMuteApp_ttip"
                              )
                            },
                            Object(Y.d)(
                              "#EventCalendar_UnMuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      )
                    : o.push(
                        z.createElement(
                          ce.d,
                          {
                            key: n.GID + "muteapp",
                            onSelected: this.OnMuteButton
                          },
                          z.createElement(
                            M.a,
                            {
                              toolTipContent: Object(Y.d)(
                                "#EventCalendar_MuteApp_ttip"
                              )
                            },
                            Object(Y.d)(
                              "#EventCalendar_MuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      )),
                n.BIsOGGEvent() ||
                  ((t = x.a.BIsFollowingCurator(n.clanSteamID)),
                  o.push(
                    z.createElement(
                      ce.d,
                      {
                        key: n.GID + "followcurator",
                        onSelected: this.ToggleFollowCurator
                      },
                      z.createElement(
                        M.a,
                        {
                          toolTipContent: Object(Y.d)(
                            t
                              ? "#EventCalendar_UnFollowCurator_ttip"
                              : "#EventCalendar_FollowCurator_ttip"
                          )
                        },
                        Object(Y.d)(
                          t
                            ? "#EventCalendar_UnFollowCurator"
                            : "#EventCalendar_FollowCurator",
                          this.props.calendarEvent.GetEntityName()
                        )
                      )
                    )
                  )),
                s.BIsSingleSourceCalendar() ||
                  o.push(
                    z.createElement(
                      ce.d,
                      {
                        key: n.GID + "goto",
                        onSelected: this.GotoGameOrClanHub
                      },
                      Object(Y.d)(
                        "#EventCalendar_Goto_SpecificCalendar",
                        r.GetEntityName()
                      )
                    )
                  ),
                Object(qe.a)(z.createElement(ce.c, null, o), e);
            }),
            (t.prototype.render = function() {
              return z.createElement(
                "div",
                {
                  className: Object(V.a)(Ve.a.FooterStat, Ve.a.Options),
                  onClick: this.CreateContextMenu
                },
                z.createElement(D.E, null)
              );
            }),
            Object(U.c)([f.a], t.prototype, "OnMuteButton", null),
            Object(U.c)([f.a], t.prototype, "OnUnMuteButton", null),
            Object(U.c)([f.a], t.prototype, "HideAllEventsOfMyType", null),
            Object(U.c)([f.a], t.prototype, "AddContextMenuForSource", null),
            Object(U.c)([f.a], t.prototype, "RemoveFromWishlist", null),
            Object(U.c)([f.a], t.prototype, "AddToWishlist", null),
            Object(U.c)([f.a], t.prototype, "GotoGameOrClanHub", null),
            Object(U.c)([f.a], t.prototype, "ToggleFollowCurator", null),
            Object(U.c)([f.a], t.prototype, "CreateContextMenu", null),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Je = Object(i.h)(Qe),
        Ke = a("Fmfl"),
        Xe = a("5eAM"),
        $e = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bVideoPlayerReady: !1 }), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.OnFallbackClick = function(e) {
              Ye.b.RecordAppInteractionEvent(
                this.props.calendarEvent.appid,
                Ye.a.k_eClickThrough
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
                S.a.LoadClanInfoForClanSteamID(e));
            }),
            (e.prototype.getVideoPreviewControl = function() {
              var e = this,
                t = this.props.eventModel,
                a = t.video_preview_type,
                n = t.video_preview_id;
              if (!n) return null;
              if (12 === this.props.eventModel.type) return null;
              if ("youtube" !== a) return null;
              var r = Object(A.f)(q.c.LANGUAGE),
                o =
                  pa() && 14 == this.props.eventModel.GetEventType()
                    ? De.c.full
                    : De.c.capsule_main,
                i = this.props.eventModel.GetImageForSizeAsArrayWithFallback(
                  "capsule",
                  r,
                  o,
                  !0
                );
              if ("carousel" === this.props.mode)
                return z.createElement(Pe, {
                  altImgWithFallback: i,
                  video: n,
                  className: Ve.a.YoutubePreviewImage
                });
              return z.createElement(He, {
                video: n,
                altImgWithFallback: i,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                imageClassnames: Ve.a.YoutubePreviewImage,
                onPlayerActivated: function() {
                  Ye.b.RecordAppInteractionEvent(
                    e.props.calendarEvent.appid,
                    Ye.a.k_ePlayedVideo
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
                r = e.mode,
                o = W.a.Get(),
                i = (a.GetEntityName(), a.GetGameCapsule()),
                l = Object(A.f)(q.c.LANGUAGE),
                s = t.has_live_stream,
                c = t.has_live_stream,
                d =
                  pa() && 14 == t.GetEventType()
                    ? De.c.full
                    : De.c.capsule_main,
                u = "capsule",
                p = t.BImageNeedScreenshotFallback(u, l),
                m = Boolean(p && t.appid)
                  ? t.GetFallbackArtworkScreenshot()
                  : t.GetImageURLWithFallback(u, l, d),
                h = "upcoming" !== r && this.getVideoPreviewControl(),
                v = !h && "upcoming" !== r,
                _ = t.GetCategoryAsString(),
                b = Ve.a["EventType" + t.GetEventType()],
                g = t.GetAllTags().map(function(e) {
                  return Ve.a["Tag-" + e];
                }),
                y = V.a.apply(
                  void 0,
                  Object(U.g)(
                    [
                      Ve.a.TileContainer,
                      b,
                      s && Ve.a.TileVideoIcon,
                      n ? Ve.a.DisableHovers : Ve.a.EnableHovers,
                      this.state.bVideoPlayerReady && Ve.a.VideoPlayerReady,
                      h && Ve.a.HasVideo,
                      o.HasEventBeenRead(t.GID) && Ve.a.HasBeenRead,
                      "wide" === r && Ve.a.WideMode,
                      "carousel" === r && Ve.a.CarouselMode,
                      "upcoming" === r && Ve.a.UpcomingMode
                    ],
                    g
                  )
                ),
                E = t.GetNameWithFallback(l),
                S = t.GetSubTitleWithLanguageFallback(l),
                f = t.GetSummaryWithFallback(l);
              S === f && (f = void 0), S === E && (S = void 0);
              var C = z.createElement(
                  "div",
                  { className: Ve.a.CoverImageCtn },
                  h,
                  v &&
                    z.createElement(
                      z.Fragment,
                      null,
                      12 === t.type &&
                        z.createElement(
                          "div",
                          { className: Ve.a.GameCapsuleCtn },
                          z.createElement("div", {
                            className: Ve.a.AppBannerLogo,
                            style: { backgroundImage: "url(" + i + ")" }
                          })
                        ),
                      12 !== t.type &&
                        z.createElement(
                          "div",
                          {
                            className: Object(V.a)(
                              Ve.a.EventCapsuleCtn,
                              s && Ve.a.LiveBroadcastPreview
                            )
                          },
                          z.createElement("div", {
                            className: Object(V.a)(
                              Ve.a.TileImage,
                              p && Ve.a.FallbackImage
                            ),
                            style: { backgroundImage: "url(" + m + ")" }
                          }),
                          s &&
                            z.createElement("div", {
                              className: Ve.a.TileCoverImagePlayable
                            }),
                          c &&
                            z.createElement(
                              "div",
                              { className: Ve.a.TileCoverLiveIcon },
                              Object(Y.d)("#home_page_live_broadcast")
                            ),
                          s &&
                            z.createElement(
                              "div",
                              { className: "VideoHintText" },
                              Object(Y.d)("#EventCalendar_WatchLiveBroadcast")
                            )
                        )
                    )
                ),
                O = h && "carousel" !== r,
                w = n && 14 != t.GetEventType() && !O,
                T = w && C,
                I = !w && C,
                k = "wide" !== r || n,
                j =
                  28 !== t.type &&
                  12 !== t.type &&
                  G.a.GetTimeNowWithOverride() <
                    t.GetStartTimeAndDateUnixSeconds() &&
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        Ve.a.ReminderContainer,
                        k && Ve.a.OnlyIcon
                      )
                    },
                    z.createElement(ke.a, {
                      eventModel: t,
                      eventGID: t.GID,
                      lang: l,
                      bShowStartTime: !0,
                      bOnlyShowIcon: k,
                      bExpandLeft: k
                    })
                  );
              return z.createElement(
                "div",
                { className: y },
                z.createElement(je.a, { event: t, recordNewsHubStats: !0 }),
                z.createElement(
                  Ue.c,
                  { eventModel: t, route: Ue.a.k_eView },
                  z.createElement(
                    "div",
                    { className: Ve.a.Tile, onClick: this.OnFallbackClick },
                    14 === t.type &&
                      z.createElement("div", {
                        className: Object(V.a)(
                          Ve.a.TileBackgroundImage,
                          p && Ve.a.FallbackImage
                        ),
                        style: { backgroundImage: "url(" + m + ")" }
                      }),
                    z.createElement(
                      "div",
                      { className: Ve.a.MainContentContainer },
                      z.createElement(
                        "div",
                        { className: Ve.a.TileTextContainer },
                        z.createElement(
                          "div",
                          { className: Ve.a.PatchIconCtn },
                          z.createElement(D.I, null)
                        ),
                        z.createElement(
                          "div",
                          { className: Ve.a.EventTitleCtn },
                          T,
                          !this.props.bHideGameTitle &&
                            z.createElement(at, Object(U.a)({}, this.props)),
                          z.createElement(
                            "div",
                            { className: Ve.a.EventTypeAndDateCtn },
                            z.createElement(
                              "div",
                              {
                                className: Object(V.a)(
                                  Ve.a.TileTextCategoryType,
                                  b
                                )
                              },
                              _
                            ),
                            z.createElement(nt, {
                              eventModel: t,
                              className: Object(V.a)(
                                k && Ve.a.LeaveRoomForReminder
                              )
                            }),
                            k && j
                          ),
                          z.createElement(
                            "div",
                            { className: Ve.a.EventName },
                            E
                          ),
                          S &&
                            z.createElement(
                              "div",
                              { className: Ve.a.EventSubTitle },
                              S
                            ),
                          12 !== t.type &&
                            f &&
                            z.createElement(
                              "div",
                              {
                                className: Object(V.a)(
                                  Ve.a.EventSummaryDefault,
                                  S ? Ve.a.SubTitleShown : ""
                                )
                              },
                              f
                            ),
                          z.createElement(
                            "div",
                            {
                              className: Object(V.a)(
                                Ve.a.EventTypeAndDateCtn,
                                Ve.a.Mobile
                              )
                            },
                            z.createElement(
                              "div",
                              { className: Ve.a.TileTextCategoryType },
                              _
                            ),
                            z.createElement(nt, {
                              eventModel: t,
                              className: Object(V.a)(
                                k && Ve.a.LeaveRoomForReminder
                              )
                            }),
                            k && j
                          )
                        ),
                        !k && j
                      ),
                      I
                    )
                  )
                ),
                z.createElement(rt, Object(U.a)({}, this.props))
              );
            }),
            Object(U.c)([f.a], e.prototype, "OnFallbackClick", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        et = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = S.a.GetClanInfoByClanAccountID(this.props.clanid);
              if (!e) return this.props.children;
              var t = {
                  clan_account_id: e.clanAccountID,
                  name: e.group_name,
                  type: "developer"
                },
                a = z.createElement(
                  "div",
                  { className: Ve.a.CuratorHoverContainer },
                  z.createElement(de, {
                    creatorID: t,
                    bSmallFormat: !0,
                    bHideCreatorType: !0,
                    bHideFollowButton: !0
                  })
                );
              return z.createElement(
                M.a,
                { toolTipContent: a },
                this.props.children
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        tt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.RenderHoverSource = function(e) {
              var t = this.props.calendarEvent;
              if (t.appid) {
                var a = Xe.a.GetAppLinkInfo(t.appid);
                if (a) return z.createElement(Ke.b, { info: a, fnClose: e });
              } else if (t.clanid) {
                var n = S.a.GetClanInfoByClanAccountID(t.clanid);
                if (n) return z.createElement(be, { clanInfo: n, fnClose: e });
              }
              return null;
            }),
            (t.prototype.render = function() {
              return z.createElement(
                Ke.d,
                {
                  className: this.props.className,
                  fnRenderItem: this.RenderHoverSource
                },
                this.props.children
              );
            }),
            Object(U.c)([f.a], t.prototype, "RenderHoverSource", null),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        at = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.componentDidMount = function() {
              var e = this.props,
                t = e.calendarEvent,
                a = e.eventModel;
              t.appid && Object(Ke.a)()
                ? Xe.a.LoadAppLinkInfo([t.appid])
                : t.clanid && S.a.LoadClanInfoForClanSteamID(a.clanSteamID);
            }),
            (t.prototype.OnTitleClick = function(e) {
              var t = this.props.eventModel;
              Object(Ue.i)(t, Ue.a.k_eStoreOwnerPage),
                e.stopPropagation(),
                e.preventDefault();
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = (e.eventModel, e.calendarEvent),
                a = e.bSuppressHoverEffects,
                n = t.GetEntityName(),
                r = t.GetGameIcon(),
                o = z.createElement(
                  z.Fragment,
                  null,
                  z.createElement("img", { className: Ve.a.AppIcon, src: r }),
                  z.createElement("div", { className: Ve.a.TileTextAppName }, n)
                ),
                i = a
                  ? z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          Ve.a.GameTitleContainer,
                          Ve.a.DisableHovers
                        ),
                        onClick: this.OnTitleClick
                      },
                      o
                    )
                  : z.createElement(
                      "div",
                      { onClick: this.OnTitleClick },
                      Object(Ke.a)() || !t.appInfo
                        ? z.createElement(
                            tt,
                            {
                              className: Object(V.a)(
                                Ve.a.GameTitleContainer,
                                Ve.a.EnableHovers
                              ),
                              calendarEvent: t
                            },
                            o
                          )
                        : z.createElement(
                            Ze.b,
                            {
                              hoverClassName: Object(V.a)(
                                Ve.a.GameTitleContainer,
                                Ve.a.EnableHovers
                              ),
                              type: "app",
                              id: t.appid
                            },
                            o
                          )
                    );
              return z.createElement(
                b.a,
                null,
                z.createElement(
                  "div",
                  { className: Ve.a.TileTextHeader },
                  i,
                  t.GetSource() === Ae.a.k_eRecommended &&
                    z.createElement(
                      "div",
                      { className: Ve.a.SourceRecommended },
                      Object(Y.d)(
                        "#EventCalendar_GameSource_recommended_Verbose"
                      )
                    )
                )
              );
            }),
            Object(U.c)([f.a], t.prototype, "OnTitleClick", null),
            t
          );
        })(z.Component),
        nt = Object(r.a)(function(e) {
          var t = e.eventModel,
            a = e.calendarEvent,
            n = e.className,
            r = G.a.GetTimeNowWithOverride(),
            o = t ? t.GetStartTimeAndDateUnixSeconds() : a.start_time,
            i = t && Object(ze.a)(t.type) && t.GetEndTimeAndDateUnixSeconds();
          if (i && o < r && r < i) {
            var l = i - r,
              s = Object(Y.o)(l, !0);
            return z.createElement(
              "div",
              { className: Object(V.a)(Ve.a.LiveText, n) },
              z.createElement(
                Le.e,
                { rtFullDate: o, stylesmodule: Ve.a },
                z.createElement(
                  "div",
                  { className: Ve.a.LiveNow },
                  Object(Y.d)("#EventCalendar_LiveNow")
                )
              ),
              z.createElement(
                Le.e,
                { rtFullDate: i, stylesmodule: Ve.a },
                Object(Y.d)("#EventCalendar_TimeLeft", s)
              )
            );
          }
          if (o < r) {
            var c = r - o,
              d = c < 86400 ? Object(Y.o)(c, !1, !0) : Object(Y.n)(o);
            return z.createElement(
              Le.e,
              { className: n, rtFullDate: o, stylesmodule: Ve.a },
              z.createElement("div", { className: Ve.a.PastDateText }, d)
            );
          }
          var u = (l = o - r) < 86400;
          return z.createElement(
            Le.e,
            { className: n, rtFullDate: o, stylesmodule: Ve.a },
            z.createElement(
              "div",
              { className: Ve.a.FutureDateText },
              u
                ? Object(Y.d)(
                    "#EventCalendar_WillStartAfterDuration",
                    Object(Y.o)(l, !0)
                  )
                : Object(Y.d)("#EventCalendar_WillStartAtTime", Object(Y.n)(o))
            )
          );
        });
      var rt = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(U.d)(t, e),
          (t.prototype.OnPerformVoteUp = function() {
            var e = this.props.eventModel,
              t = W.a.Get();
            !0 !== t.GetPreviouslyLoadedVote(this.props.eventModel) &&
              Object(Ie.a)(e, t) &&
              (t.Vote(e, !0, E.a.CancelToken.source()),
              Ye.b.RecordAppInteractionEvent(e.appid, Ye.a.k_eThumbsUp));
          }),
          (t.prototype.OnDiscussionClicked = function() {
            var e = this.props.eventModel;
            Ye.b.RecordAppInteractionEvent(e.appid, Ye.a.k_eDiscussions);
          }),
          (t.prototype.render = function() {
            var e,
              t = W.a.Get(),
              a = this.props.eventModel,
              n = Math.max(0, a.nVotesUp - a.nVotesDown),
              r = t.GetPreviouslyLoadedVote(this.props.eventModel),
              o = ((e = r),
              t.BIsUserLoggedIn()
                ? q.i.is_limited
                  ? Ve.a.Vote_LimitedUser
                  : !0 === e
                  ? Ve.a.Vote_Positive
                  : !1 === e
                  ? Ve.a.Vote_Negative
                  : Ve.a.Vote_Ready
                : Ve.a.Vote_NotLoggedIn),
              i =
                (q.c.IN_CLIENT ? "steam://openurl/" : "") +
                a.GetForumTopicURL(),
              l =
                0 < a.live_stream_viewer_count
                  ? a.live_stream_viewer_count
                  : void 0;
            return z.createElement(
              "div",
              { className: Ve.a.Footer },
              z.createElement(
                "div",
                { className: Ve.a.FooterRightSide },
                Boolean(l) &&
                  z.createElement(
                    "div",
                    { className: Ve.a.TileViewerCount },
                    l.toLocaleString(Y.c.GetPreferredLocales())
                  ),
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(Ve.a.FooterStat, Ve.a.Vote, o),
                    onClick: this.OnPerformVoteUp
                  },
                  z.createElement(D.V, { className: Ve.a.RateIcon }),
                  z.createElement("span", null, Number(n).toLocaleString())
                ),
                z.createElement(
                  "div",
                  { className: Ve.a.FooterStat },
                  z.createElement(
                    "a",
                    {
                      href: i,
                      className: Ve.a.CommentIconCtn,
                      target: "_blank",
                      onClick: this.OnDiscussionClicked
                    },
                    z.createElement(D.n, { className: Ve.a.CommentIcon }),
                    z.createElement(
                      "span",
                      null,
                      Number(a.nCommentCount).toLocaleString()
                    )
                  )
                ),
                z.createElement(Je, Object(U.a)({}, this.props))
              )
            );
          }),
          Object(U.c)([f.a], t.prototype, "OnPerformVoteUp", null),
          Object(U.c)([f.a], t.prototype, "OnDiscussionClicked", null),
          (t = Object(U.c)([r.a], t))
        );
      })(z.Component);
      var ot = Object(r.a)(function(e) {
          var a = e.calendarEvent,
            n = e.partnerEventStore,
            t = Ve.a["EventType" + a.event_type],
            r = Object(V.a)(Ve.a.TileContainer, t);
          return z.createElement(
            Te.a,
            {
              onEnter: function() {
                var e, t;
                (e = a),
                  n.QueueLoadPartnerEvent(e.clanid, e.unique_id),
                  e.appid && _.a.GetStoreCapsuleInfo(e.appid),
                  e.clanInfo &&
                    ((t = L.a.InitFromClanID(e.clanInfo.clanid)),
                    S.a.LoadClanInfoForClanSteamID(t));
              },
              topOffset: "-500px",
              bottomOffset: "-500px"
            },
            z.createElement(
              "div",
              { className: r },
              z.createElement("div", { className: Ve.a.Tile }),
              z.createElement("div", { className: Ve.a.Footer })
            )
          );
        }),
        it = Object(r.a)(function(e) {
          var t = e.partnerEventStore,
            a = e.calendarEvent,
            n = Object(U.f)(e, ["partnerEventStore", "calendarEvent"]);
          if (
            ((r = a),
            !t.GetClanEventModel(r.unique_id) ||
              (r.appid && !_.a.BIsAppidLoaded(r.appid)) ||
              (r.clanInfo && !S.a.HasLoadedClanAccountID(r.clanInfo.clanid)))
          )
            return z.createElement(ot, {
              calendarEvent: a,
              partnerEventStore: t
            });
          var r,
            o = t.GetClanEventModel(a.unique_id);
          return z.createElement(
            $e,
            Object(U.a)({ eventModel: o, calendarEvent: a }, n)
          );
        }),
        lt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bLoaded: C.Get().IsLoaded() }), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.componentDidMount = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.bLoaded
                        ? [3, 2]
                        : [4, C.Get().WaitForInitialLoad()];
                    case 1:
                      e.sent(), this.setState({ bLoaded: !0 }), (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              var t = new Array();
              return (
                this.state.bLoaded &&
                  Y.c.GetELanguageFallbackOrder(!0).forEach(function(e) {
                    return t.push(
                      d.a.createElement(st, { key: "curlang" + e, lang: e })
                    );
                  }),
                d.a.createElement(
                  P.g,
                  { onEscKeypress: this.props.closeModal },
                  d.a.createElement(
                    b.a,
                    null,
                    d.a.createElement(
                      g.e,
                      null,
                      d.a.createElement(
                        g.i,
                        null,
                        Object(Y.d)("#EventCurator_BrowseDialog_Title")
                      ),
                      d.a.createElement(
                        g.a,
                        null,
                        d.a.createElement(
                          "div",
                          null,
                          Object(Y.d)("#EventCurator_BrowseDialog_Desc")
                        ),
                        this.state.bLoaded
                          ? d.a.createElement(d.a.Fragment, null, t)
                          : d.a.createElement(J.a, {
                              size: "medium",
                              position: "center",
                              string: Object(Y.d)("#Loading")
                            })
                      ),
                      d.a.createElement(
                        g.h,
                        null,
                        d.a.createElement(
                          g.o,
                          { onClick: this.props.closeModal },
                          Object(Y.d)("#Button_Dismiss")
                        )
                      )
                    )
                  )
                )
              );
            }),
            e
          );
        })(d.a.Component),
        st = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = C.Get()
                .GetCuratorsForLang(this.props.lang)
                .map(function(e) {
                  return S.a.GetClanInfoByClanAccountID(e.clanAccountID);
                })
                .filter(function(e) {
                  return Boolean(e);
                });
              if (0 == e.length) return null;
              e.sort(function(e, t) {
                return e.group_name.localeCompare(t.group_name);
              });
              var t = e.map(function(e) {
                return d.a.createElement(ct, {
                  clanInfo: e,
                  key: "curatorbrowse_" + e.clanAccountID,
                  layout: "row"
                });
              });
              return d.a.createElement(
                "div",
                null,
                d.a.createElement(
                  "div",
                  { className: ye.a.LanguageHeader },
                  Object(Y.d)(
                    "#EventCurator_BrowseDialog_LangCurator",
                    Object(Y.d)("#Language_" + Object(A.d)(this.props.lang))
                  )
                ),
                t
              );
            }),
            t
          );
        })(d.a.Component),
        ct = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bDisplayPreview: !1 }), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.OnPreview = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                return Object(U.e)(this, function(e) {
                  return this.setState({ bDisplayPreview: !0 }), [2];
                });
              });
            }),
            (e.prototype.OnCloseEventPreview = function() {
              this.setState({ bDisplayPreview: !1 });
            }),
            (e.prototype.OnEventNotFound = function() {
              Object(l.d)(
                d.a.createElement(P.e, {
                  strDescription: Object(Y.d)(
                    "#EventCurator_NoEventsFound_Body"
                  ),
                  strTitle: Object(Y.d)("#EventCurator_NoEventsFound_Title")
                }),
                window
              ),
                this.OnCloseEventPreview();
            }),
            (e.prototype.renderInfiniteScroll = function() {
              return this.state.bDisplayPreview
                ? d.a.createElement(
                    b.a,
                    null,
                    d.a.createElement(we, {
                      classname: ye.a.StoreHeaderAdjust,
                      onEventNotFound: this.OnEventNotFound,
                      appid: 0,
                      clanSteamID: this.props.clanInfo.clanSteamID,
                      trackingLocation: 8,
                      eventModel: void 0,
                      announcementGID: void 0,
                      partnerEventStore: B.c,
                      showAppHeader: !0,
                      closeModal: this.OnCloseEventPreview
                    })
                  )
                : null;
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.clanInfo,
                a = e.layout,
                n = (q.c.STORE_BASE_URL,
                t.clanAccountID,
                t.vanity_url && t.vanity_url,
                "row" === a ? ye.a.CuratorInfoRow : ye.a.CuratorInfoIcon),
                r = d.a.createElement(
                  et,
                  { clanid: t.clanSteamID.GetAccountID() },
                  d.a.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        Q.a.FlexRowContainer,
                        ye.a.CuratorInfoTitleCtn
                      )
                    },
                    d.a.createElement("img", {
                      className: ye.a.CuratorInfoImg,
                      src: t.avatar_full_url,
                      alt: t.group_name
                    }),
                    d.a.createElement(
                      "div",
                      { className: ye.a.CuratorInfoName },
                      t.group_name
                    )
                  )
                );
              return d.a.createElement(
                "div",
                {
                  className: Object(V.a)(
                    Q.a.FlexRowWrapSpaceBetweenContainer,
                    n
                  )
                },
                this.renderInfiniteScroll(),
                d.a.createElement("div", { onClick: this.OnPreview }, r),
                d.a.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      Q.a.FlexRowContainer,
                      ye.a.CuratorInfoActionCtn
                    )
                  },
                  d.a.createElement(he, {
                    clanAccountID: t.clanAccountID,
                    className: ye.a.CuratorInfoFollow
                  }),
                  d.a.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        Q.a.Button,
                        ye.a.CuratorInfoPreview
                      ),
                      onClick: this.OnPreview
                    },
                    Object(Y.d)("#Button_Preview")
                  )
                )
              );
            }),
            Object(U.c)([f.a], e.prototype, "OnPreview", null),
            Object(U.c)([f.a], e.prototype, "OnCloseEventPreview", null),
            Object(U.c)([f.a], e.prototype, "OnEventNotFound", null),
            e
          );
        })(d.a.Component),
        dt = a("IWyE"),
        ut = a.n(dt),
        pt = a("wd/R"),
        mt = a.n(pt),
        ht = (function() {
          function e() {
            this.m_dateLoadTime = G.a.GetTimeNowWithOverrideAsDate();
          }
          return (
            (e.prototype.IsCurrentlyVisible = function(e) {
              return (
                (!e.startVisible || e.startVisible <= this.m_dateLoadTime) &&
                (!e.endVisible || e.endVisible >= this.m_dateLoadTime)
              );
            }),
            (e.IsCurrentlyActive = function(e) {
              var t = G.a.GetTimeNowWithOverrideAsDate();
              return (
                (!e.startEvent || e.startEvent <= t) &&
                (!e.endEvent || e.endEvent >= t)
              );
            }),
            (e.LocalizeDateString = function(e) {
              if (!e.startEvent) return null;
              var t = e.startEvent.toLocaleDateString(
                Y.c.GetPreferredLocales(),
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
                e.endEvent.toLocaleDateString(Y.c.GetPreferredLocales(), a)
              );
            }),
            (e.prototype.GetVisibleSpecialEvents = function() {
              var t = this;
              return [
                {
                  sLocToken: "#NewsHubSpecialEvent_GameFestival",
                  startVisible: new Date(
                    1e3 * mt()("2020-06-16T14:00:00-07:00").unix()
                  ),
                  endVisible: new Date(
                    1e3 * mt()("2020-06-22T10:00:00-07:00").unix()
                  ),
                  startEvent: new Date(
                    1e3 * mt()("2020-06-16T10:00:00-07:00").unix()
                  ),
                  endEvent: new Date(
                    1e3 * mt()("2020-06-22T10:00:00-07:00").unix()
                  ),
                  newshubUrl: "news/collection/GameFestival2020"
                }
              ].filter(function(e) {
                return t.IsCurrentlyVisible(e);
              });
            }),
            e
          );
        })(),
        vt = new ht(),
        _t = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.specialEvent,
                t = window.location.href === q.c.STORE_BASE_URL + e.newshubUrl,
                a = ht.IsCurrentlyActive(e),
                n = ht.LocalizeDateString(e);
              return z.createElement(
                s.b,
                { to: "/" + e.newshubUrl },
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      ut.a.SpecialEvent,
                      t && ut.a.SpecialEventOnPage,
                      a && ut.a.SpecialEventActive
                    )
                  },
                  z.createElement(
                    "div",
                    { className: ut.a.SpecialEventTitle },
                    Object(Y.d)(e.sLocToken)
                  ),
                  n &&
                    z.createElement(
                      "div",
                      { className: ut.a.SpecialEventTime },
                      n
                    )
                )
              );
            }),
            t
          );
        })(z.Component),
        bt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = vt.GetVisibleSpecialEvents();
              return 0 === e.length
                ? null
                : z.createElement(
                    "div",
                    { className: ut.a.SpecialEventListGroup },
                    z.createElement(
                      "div",
                      { className: ut.a.SpecialEventListTitle },
                      Object(Y.d)("#Events_SpecialEvents")
                    ),
                    z.createElement(
                      "div",
                      { className: ut.a.SpecialEventList },
                      e.map(function(e) {
                        return z.createElement(_t, {
                          key: e.sLocToken,
                          specialEvent: e
                        });
                      })
                    )
                  );
            }),
            t
          );
        })(z.Component),
        gt = a("xLK1"),
        yt = a.n(gt),
        Et = (function(t) {
          function i() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bInScroll: !1, nStartXPos: 0, nStartScrollLeft: 0 }),
              (e.m_hSlider = z.createRef()),
              e
            );
          }
          return (
            Object(U.d)(i, t),
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
                    yt.a.HorizontalScrollInDragForceCursor
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
                    yt.a.HorizontalScrollInDragForceCursor
                  ),
                  this.props.dragClassName &&
                    o.classList.add(this.props.dragClassName),
                  o.setPointerCapture(e.pointerId)),
                this.state.bInScroll && (o.scrollLeft = a));
            }),
            (i.prototype.render = function() {
              return z.createElement(
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
            Object(U.c)([f.a], i.prototype, "OnPointerDown", null),
            Object(U.c)([f.a], i.prototype, "OnPointerUp", null),
            Object(U.c)([f.a], i.prototype, "OnPointerMove", null),
            i
          );
        })(z.Component),
        St = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.GetVisibilityStore = function() {
              return Object(N.a)().m_visibilityStore;
            }),
            (t.prototype.OnEventTypeChange = function(e, t) {
              this.GetVisibilityStore().SetEventTypeGroupAllowed(e, t),
                this.props.fnOnFilterChange();
            }),
            (t.prototype.RenderEventTypeCheckbox = function(t) {
              var a = this,
                e = this.GetVisibilityStore().BIsEventTypeGroupAllowed(t);
              return z.createElement(
                M.a,
                {
                  key: "group-" + t,
                  toolTipContent: Object(Y.d)(
                    "#EventCalendar_EventTypeGroup_ttip_" + t
                  ),
                  direction: "top"
                },
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      ut.a.FilterOption,
                      ut.a.FilterEventType
                    )
                  },
                  z.createElement(g.d, {
                    label: Object(Y.d)("#EventCalendar_EventTypeGroup_" + t),
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
              return z.createElement(
                M.a,
                {
                  key: "gs-" + t,
                  direction: "top",
                  toolTipContent: e
                    ? Object(Y.d)("#EventCalendar_DisabledFilter_LoginPrompt")
                    : Object(Y.d)("#EventCalendar_GameSource_ttip_" + t)
                },
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      ut.a.FilterOption,
                      ut.a.FilterGameSource
                    )
                  },
                  z.createElement(g.d, {
                    label: Object(Y.d)("#EventCalendar_GameSource_" + t),
                    checked: n,
                    disabled: e,
                    onChange: function(e) {
                      return a.OnGameSourceChange(t, e);
                    }
                  })
                )
              );
            }),
            (t.prototype.OnBrowseCurator = function(e) {
              Object(l.d)(z.createElement(lt, null), Object(Z.n)(e));
            }),
            (t.prototype.render = function() {
              var e,
                t = this.props.bUserIsLoggedIn,
                a = Object(N.a)(),
                n = !0;
              !a.BIsSingleGroupCalendar() ||
                ((e = S.a.GetClanInfoByClanAccountID(a.GetSingleGroupID())) &&
                  e.has_rss_feed &&
                  (n = !1));
              var r = p.a.GetMutedSourceCount();
              return z.createElement(
                "div",
                { className: ut.a.FilterControlPage },
                z.createElement(
                  "div",
                  { className: ut.a.FiltersTitle },
                  Object(Y.d)("#EventCalendar_FiltersTitle")
                ),
                z.createElement(
                  "div",
                  { className: ut.a.FiltersDescription },
                  Object(Y.d)(
                    a.BIsGlobalCalendar()
                      ? "#EventCalendar_FiltersDescription"
                      : "#EventCalendar_FiltersDescription_NonPersonalized"
                  )
                ),
                z.createElement(
                  "div",
                  { className: ut.a.FilterSection },
                  n &&
                    z.createElement(
                      "div",
                      { className: ut.a.FilterSubSection },
                      z.createElement(
                        "div",
                        { className: ut.a.FilterSubSectionTitle },
                        Object(Y.d)(
                          "#EventCalendar_FilterSubSection_EventTypeGroups"
                        )
                      ),
                      this.RenderEventTypeCheckbox(c.b.k_EEvents),
                      this.RenderEventTypeCheckbox(c.b.k_EStreaming),
                      this.RenderEventTypeCheckbox(c.b.k_EUpdates),
                      this.RenderEventTypeCheckbox(c.b.k_EReleases),
                      this.RenderEventTypeCheckbox(c.b.k_ESales),
                      this.RenderEventTypeCheckbox(c.b.k_ENews)
                    ),
                  Boolean(a.BIsGlobalCalendar()) &&
                    z.createElement(
                      z.Fragment,
                      null,
                      z.createElement(
                        "div",
                        { className: ut.a.FilterSubSection },
                        z.createElement(
                          "div",
                          { className: ut.a.FilterSubSectionTitle },
                          Object(Y.d)(
                            "#EventCalendar_FilterSubSection_GameSources"
                          )
                        ),
                        this.RenderGameSourceCheckbox(c.c.k_ERecent, !t),
                        this.RenderGameSourceCheckbox(c.c.k_ELibrary, !t),
                        this.RenderGameSourceCheckbox(c.c.k_EWishist, !t),
                        this.RenderGameSourceCheckbox(c.c.k_EFollowing, !t),
                        this.RenderGameSourceCheckbox(c.c.k_ERecommended),
                        this.RenderGameSourceCheckbox(c.c.k_ESteam),
                        G.a.bIncludeFeaturedAsGameSource &&
                          this.RenderGameSourceCheckbox(c.c.k_EFeatured)
                      ),
                      G.a.bIncludeCurators &&
                        z.createElement(
                          "div",
                          { className: ut.a.FilterSubSection },
                          z.createElement(
                            "div",
                            { className: ut.a.FilterSubSectionTitle },
                            Object(Y.d)(
                              "#EventCalendar_FilterSubSection_CuratorSources"
                            )
                          ),
                          this.RenderGameSourceCheckbox(c.c.k_ECurator, !t),
                          z.createElement(
                            "div",
                            {
                              className: ut.a.FilterLink,
                              onClick: this.OnBrowseCurator
                            },
                            Object(Y.d)("#EventCalendar_BrowseCurators")
                          )
                        )
                    ),
                  Boolean(a.BIsSingleSourceMuted()) &&
                    z.createElement(
                      "div",
                      null,
                      Object(Y.d)("#EventCalendar_SingleAppIsMuted")
                    )
                ),
                z.createElement(
                  "div",
                  { className: ut.a.SideBarFilterNavLinks },
                  !a.BIsSingleSourceCalendar() &&
                    0 < r &&
                    z.createElement(
                      y.a,
                      {
                        className: ut.a.MutedSourcesGroup,
                        href: q.c.STORE_BASE_URL + "account/emailoptout/app",
                        bDisableContextMenu: !0
                      },
                      z.createElement(
                        "div",
                        { className: ut.a.FilterLink },
                        z.createElement(D.bb, { muted: !0 }),
                        Object(Y.d)("#EventCalendar_ManageMutedSources"),
                        z.createElement(
                          "div",
                          { className: ut.a.NumberDisplay },
                          r
                        )
                      )
                    ),
                  z.createElement(
                    y.a,
                    {
                      href: q.c.STORE_BASE_URL + "account/preferences",
                      bDisableContextMenu: !0
                    },
                    z.createElement(
                      "div",
                      { className: ut.a.FilterLink },
                      z.createElement(D.a, null),
                      Object(Y.d)("#EventCalendar_ManageStorePref")
                    )
                  )
                ),
                !G.a.bIncludeCurators &&
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        ut.a.SidePanelSteamLabs,
                        ut.a.ConfigPanelSteamLabs
                      )
                    },
                    z.createElement(It, null)
                  )
              );
            }),
            Object(U.c)([f.a], t.prototype, "OnBrowseCurator", null),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        ft = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bShowFilterPage: !1 }), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.GetCalendarTitle = function(e) {
              return Object(Y.l)(
                "#EventCalendar_Title",
                z.createElement("br", null)
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
                u =
                  "Responsive_RequestMobileView" in window &&
                  window.Responsive_RequestMobileView,
                p = ua(),
                m = z.createElement(
                  "div",
                  { className: ut.a.MobileCloseButton, onClick: s },
                  z.createElement(D.R, null)
                ),
                h = o ? Math.max(0, r) : 0,
                v = p
                  ? null
                  : z.createElement(
                      "div",
                      { onClick: s, className: ut.a.CollapseButton },
                      z.createElement(
                        "div",
                        {
                          style: { marginTop: h + "px" },
                          className: ut.a.DesktopButton
                        },
                        z.createElement(D.r, { angle: o ? 180 : 0 })
                      )
                    ),
                _ = p
                  ? null
                  : z.createElement(
                      "div",
                      {
                        onClick: function() {
                          return t.OpenFilterSettings(!1);
                        },
                        className: ut.a.CollapseButton
                      },
                      z.createElement(
                        "div",
                        {
                          style: { marginTop: h + "px" },
                          className: ut.a.DesktopButton
                        },
                        z.createElement(D.R, null)
                      )
                    ),
                b = d ? _ : v,
                g = o ? null : { top: r + "px" },
                y = Object(N.a)();
              return (
                !y.BIsSingleGroupCalendar() ||
                  ((e = S.a.GetClanInfoByClanAccountID(y.GetSingleGroupID())) &&
                    e.has_rss_feed &&
                    0),
                z.createElement(
                  z.Fragment,
                  null,
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        ut.a.SidebarContainer,
                        o && ut.a.SidebarCollapsed
                      ),
                      style: g
                    },
                    o
                      ? b
                      : z.createElement(
                          "div",
                          { className: ut.a.Sidebar },
                          m,
                          b,
                          z.createElement(
                            "div",
                            { className: ut.a.ControlPageContainer },
                            d
                              ? z.createElement(St, {
                                  bUserIsLoggedIn: n,
                                  fnOnFilterChange: c
                                })
                              : z.createElement(
                                  z.Fragment,
                                  null,
                                  z.createElement(
                                    "div",
                                    { className: ut.a.SidebarBackground },
                                    z.createElement(D.S, null)
                                  ),
                                  z.createElement(
                                    "div",
                                    { className: ut.a.SidebarTitle },
                                    this.GetCalendarTitle(y)
                                  ),
                                  z.createElement(Gt, { bIsUpcoming: l }),
                                  z.createElement(bt, null),
                                  z.createElement(
                                    "div",
                                    { className: ut.a.SidePanelGameSearch },
                                    z.createElement(Ot, {
                                      label: Object(Y.d)(
                                        "#EventCalendar_UniversalSearch"
                                      )
                                    })
                                  ),
                                  z.createElement(Bt, { bIsUpcoming: l }),
                                  z.createElement(
                                    "div",
                                    { className: ut.a.FilterSettingsCtn },
                                    z.createElement(
                                      "div",
                                      {
                                        className: Object(V.a)(
                                          ut.a.FilterLink,
                                          ut.a.OpenFilterSettings
                                        ),
                                        onClick: function() {
                                          return t.OpenFilterSettings(!0);
                                        }
                                      },
                                      z.createElement(D.Q, null),
                                      Object(Y.d)("#EventCalendar_EditFilters")
                                    )
                                  ),
                                  u &&
                                    z.createElement(
                                      "div",
                                      {
                                        className: Object(V.a)(
                                          ut.a.SidebarLink,
                                          ut.a.ForceResponsiveLink
                                        ),
                                        onClick: u
                                      },
                                      Object(Y.d)(
                                        "#EventCalendar_ShowResponsiveView"
                                      )
                                    ),
                                  !G.a.bIncludeCurators &&
                                    z.createElement(
                                      "div",
                                      {
                                        className: Object(V.a)(
                                          ut.a.SidePanelSteamLabs,
                                          i && ut.a.SidePanelSteamLabsNarrow
                                        )
                                      },
                                      z.createElement(It, null)
                                    ),
                                  i && z.createElement(Ct, null)
                                )
                          )
                        )
                  )
                )
              );
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Ct = function(e) {
          return z.createElement(
            "div",
            { className: ut.a.SidebarFooter },
            z.createElement("img", {
              src: q.c.STORE_CDN_URL + "public/images/footerLogo_valve_new.png"
            }),
            z.createElement(
              "div",
              { className: ut.a.FooterLegal },
              Object(Y.d)("#Legal_Footer_WithYear", Object(Y.h)(new Date()))
            )
          );
        },
        Ot = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.DecorateSearchSuggestion = function(e, t) {
              if (e && e.id) {
                var a = "";
                return (
                  "curators" == e.corpus
                    ? (a = "group/" + e.id)
                    : "games" == e.corpus &&
                      (Object(h.a)(
                        Object(v.a)(e.type),
                        "Unexpected app type " + e.type
                      ),
                      (a = "app/" + e.id)),
                  z.createElement(
                    s.b,
                    {
                      key: "suggestion-" + e.id,
                      to: "/" + Object(Ue.f)() + "/" + a + "/"
                    },
                    t
                  )
                );
              }
              return t;
            }),
            (t.prototype.render = function() {
              return z.createElement(j, {
                strLabel: this.props.label,
                fnOnSelected: function() {},
                fnDecorateSuggestion: this.DecorateSearchSuggestion,
                rgCorporaToSearch: ["games", "curators"],
                focusOnMount: this.props.focusOnMount
              });
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        wt = q.c.STORE_BASE_URL + "labs",
        Tt = q.c.COMMUNITY_BASE_URL + "groups/SteamLabs/discussions/11/",
        It = function(e) {
          return z.createElement(
            "div",
            { className: ut.a.SideSteamLabsBannerCtn },
            z.createElement(
              "div",
              { className: ut.a.SteamLabsIdentifiers },
              z.createElement(
                "a",
                {
                  className: ut.a.SteamLabsName,
                  href: (q.c.IN_CLIENT ? "steam://openurl/" : "") + wt,
                  target: q.c.IN_CLIENT ? void 0 : "_blank"
                },
                Object(Y.d)("#SteamLabs")
              ),
              z.createElement(
                "div",
                { className: ut.a.SteamLabsNumber },
                Object(Y.d)("#SteamLabs_ExperimentNumber", "009")
              )
            ),
            z.createElement(
              "a",
              {
                className: ut.a.SteamLabsButton,
                href: (q.c.IN_CLIENT ? "steam://openurl/" : "") + Tt,
                target: q.c.IN_CLIENT ? void 0 : "_blank"
              },
              z.createElement(D.g, null)
            )
          );
        };
      function kt(e) {
        var t = Object(N.a)().BIsGlobalCalendar(),
          a = (Object(N.a)().BIsCollectionCalendar(), Object(Ue.f)()),
          n = new Array();
        return (
          n.push({
            name: Object(Y.d)("#EventCalendar_NewsChannel_YourNews"),
            subtitle: Object(Y.d)("#EventCalendar_NewsChannel_Personalized"),
            key: "default",
            url: a + "/",
            onPage: t && !e
          }),
          n.push({
            name: Object(Y.d)("#EventCalendar_NewsChannel_Upcoming"),
            shortName: Object(Y.d)("#EventCalendar_NewsChannel_UpcomingShort"),
            subtitle: Object(Y.d)("#EventCalendar_NewsChannel_Personalized"),
            key: "upcoming",
            url: a + "/?upcoming=1",
            onPage: t && e,
            count: (function() {
              if (Object(N.a)().BIsGlobalCalendar() && q.i.logged_in) {
                var e =
                    Object(N.a)()
                      .GetStoreInitializationTimestamp()
                      .getTime() / 1e3,
                  t = Object(N.a)().GetCurrentlyLoadedEventCount(e);
                if (t)
                  return Object(N.a)().BHitEventHorizon("forward")
                    ? String(t.nCount)
                    : t.nCount + "+";
              }
            })()
          }),
          n
        );
      }
      function jt() {
        Object(N.a)().BIsGlobalCalendar();
        var e = Object(N.a)().BIsCollectionCalendar(),
          t = Object(Ue.f)(),
          a = new Array();
        return (
          a.push({
            name: Object(Y.d)("#EventCalendar_NewsChannel_Featured"),
            subtitle: Object(Y.d)("#EventCalendar_NewsChannel_TopSellers"),
            key: "featured",
            url: t + "/collection/featured/",
            onPage: e && "featured" == Object(N.a)().GetCollectionID()
          }),
          a.push({
            name: Object(Y.d)("#EventCalendar_NewsChannel_Steam"),
            subtitle: Object(Y.d)("#EventCalendar_NewsChannel_SteamSubtitle"),
            key: "steam",
            url: t + "/collection/steam/",
            onPage: e && "steam" == Object(N.a)().GetCollectionID()
          }),
          a
        );
      }
      function Dt(e) {
        var t = e.element,
          a = t.shortName,
          n = t.name,
          r = t.url,
          o = t.onPage,
          i = t.count;
        return z.createElement(
          s.b,
          { to: "/" + r },
          z.createElement(
            "div",
            {
              className: Object(V.a)(
                ut.a.MobileNavButton,
                o && ut.a.MobileNavButtonActive
              )
            },
            a || n,
            i && z.createElement("div", { className: ut.a.MobileNavCount }, i)
          )
        );
      }
      function At(e) {
        var t = e.element,
          a = (t.key, t.name),
          n = t.subtitle,
          r = t.url,
          o = t.onPage,
          i = t.count,
          l = t.bValveOnly;
        return !q.i.is_support && l
          ? null
          : z.createElement(
              s.b,
              { to: "/" + r },
              z.createElement(
                "div",
                {
                  className: Object(V.a)(
                    ut.a.NewsChannel,
                    o && ut.a.NewsChannelOnPage
                  )
                },
                z.createElement(
                  "div",
                  { className: ut.a.NewsChannelText },
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        l && Q.a.ValveOnlyBackground,
                        ut.a.NewsChannelTitle
                      )
                    },
                    l && "(VO) ",
                    a
                  ),
                  n &&
                    z.createElement(
                      "div",
                      { className: ut.a.NewsChannelSubtitle },
                      n
                    )
                ),
                void 0 !== i &&
                  z.createElement(
                    "div",
                    { className: ut.a.NewsChannelCount },
                    i
                  )
              )
            );
      }
      function Lt(e) {
        var t = e.titleToken,
          a = e.subtitleToken,
          n = e.backgroundImg,
          r = n ? { backgroundImage: n } : {};
        return z.createElement(
          "div",
          {
            className: Object(V.a)(
              zt.a.CommonHeaderStyles,
              zt.a.SimpleTitleHeaderCtn,
              e.largeHeader && zt.a.LargeHeader
            ),
            style: r
          },
          z.createElement(
            "div",
            { className: zt.a.SimpleTitleCtn },
            z.createElement("div", { className: zt.a.Title }, Object(Y.d)(t)),
            a &&
              z.createElement(
                "div",
                { className: zt.a.Subtitle },
                Object(Y.d)(a)
              )
          )
        );
      }
      var Nt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bSearchExpanded: !1 }), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.onExpandSearch = function(e) {
              this.setState({ bSearchExpanded: e });
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.state.bSearchExpanded,
                a = kt(this.props.bIsUpcoming),
                n = jt(this.props.bIsUpcoming),
                r = Object(U.g)(a, n);
              return z.createElement(
                "div",
                {
                  style: {
                    transform: "translateY(" + this.props.nTopOffset + "px)"
                  },
                  className: ut.a.MobileNavBannerCtn
                },
                z.createElement(
                  "div",
                  {
                    className: ut.a.SettingsPanel,
                    onClick: this.props.fnToggleCollapsed
                  },
                  z.createElement(D.Q, null)
                ),
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      ut.a.SettingsPanel,
                      t && ut.a.SearchExpanded
                    ),
                    onClick: function() {
                      return e.onExpandSearch(!t);
                    }
                  },
                  z.createElement(D.B, null)
                ),
                t &&
                  z.createElement(
                    z.Fragment,
                    null,
                    z.createElement("div", {
                      className: ut.a.SearchDismiss,
                      onClick: function() {
                        return e.onExpandSearch(!1);
                      }
                    }),
                    z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          ut.a.SearchBox,
                          t && ut.a.SearchExpanded
                        )
                      },
                      z.createElement(Ot, { focusOnMount: !0 })
                    )
                  ),
                z.createElement(
                  Et,
                  { className: ut.a.MobileNavHScroll },
                  z.createElement(
                    "div",
                    { className: ut.a.MobileNavBannerList },
                    r.map(function(e) {
                      return z.createElement(Dt, { key: e.key, element: e });
                    })
                  )
                )
              );
            }),
            Object(U.c)([f.a], e.prototype, "onExpandSearch", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Gt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = kt(this.props.bIsUpcoming),
                t = jt(this.props.bIsUpcoming);
              return z.createElement(
                "div",
                { className: ut.a.NewsChannelGroup },
                z.createElement(
                  "div",
                  { className: ut.a.NewsChannelListTitle },
                  Object(Y.d)("#EventCalendar_NewsChannels")
                ),
                z.createElement(
                  "div",
                  { className: ut.a.NewsChannelList },
                  e.map(function(e) {
                    return z.createElement(At, { key: e.key, element: e });
                  })
                ),
                z.createElement(
                  "div",
                  { className: ut.a.NewsChannelListTitle },
                  Object(Y.d)("#EventCalendar_NewsChannels_Global")
                ),
                z.createElement(
                  "div",
                  { className: ut.a.NewsChannelList },
                  t.map(function(e) {
                    return z.createElement(At, { key: e.key, element: e });
                  })
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Bt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = (function(e) {
                Object(N.a)().BIsGlobalCalendar();
                var t = Object(N.a)().BIsCollectionCalendar(),
                  a = Object(Ue.f)(),
                  n = new Array();
                if (
                  (G.a.bIncludeCurators &&
                    n.push({
                      name: Object(Y.d)("#EventCalendar_NewsChannel_Press"),
                      key: "press",
                      url: a + "/collection/press/",
                      onPage: t && "press" == Object(N.a)().GetCollectionID()
                    }),
                  e)
                )
                  for (
                    var r = 0, o = vt.GetVisibleSpecialEvents();
                    r < o.length;
                    r++
                  ) {
                    var i = o[r];
                    n.push({
                      name: Object(Y.d)(i.sLocToken),
                      url: i.newshubUrl,
                      onPage: !1,
                      key: "event_" + i.sLocToken
                    });
                  }
                return (
                  q.i.is_support &&
                    (n.push({
                      name: Object(Y.d)("#EventCalendar_NewsChannel_All"),
                      key: "all",
                      url: a + "/collection/all/",
                      onPage: t && "all" == Object(N.a)().GetCollectionID(),
                      bValveOnly: !0
                    }),
                    n.push({
                      name: Object(Y.d)("#EventCalendar_NewsChannel_AllSales"),
                      key: "sales",
                      url: a + "/collection/sales/",
                      onPage: t && "sales" == Object(N.a)().GetCollectionID(),
                      bValveOnly: !0
                    }),
                    n.push({
                      name: "Associated To Apps Events",
                      key: "associated_press",
                      url: a + "/collection/associated_press/",
                      onPage:
                        t &&
                        "associated_press" == Object(N.a)().GetCollectionID(),
                      bValveOnly: !0
                    })),
                  n
                );
              })((this.props.bIsUpcoming, !1));
              return e && 0 < e.length
                ? z.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        ut.a.NewsChannelGroup,
                        ut.a.DiscoverGroup
                      )
                    },
                    z.createElement(
                      "div",
                      { className: ut.a.NewsChannelListTitle },
                      Object(Y.d)("#EventCalendar_NewsChannels_Discover")
                    ),
                    z.createElement(
                      "div",
                      { className: ut.a.NewsChannelList },
                      e.map(function(e) {
                        return z.createElement(At, { key: e.key, element: e });
                      })
                    )
                  )
                : null;
            }),
            t
          );
        })(z.Component),
        Mt = a("G24H"),
        xt = a.n(Mt),
        Rt = a("FKsz"),
        Ft = a.n(Rt),
        Pt = (function(t) {
          function a() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                rgCuratorList: null,
                nNumToDisplay: 0,
                bHasBeenDismissed: e.HasBeenDismissed()
              }),
              (e.m_ref = d.a.createRef()),
              e
            );
          }
          return (
            Object(U.d)(a, t),
            (a.prototype.componentDidMount = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.rgCuratorList
                        ? [3, 2]
                        : [4, C.Get().WaitForInitialLoad()];
                    case 1:
                      e.sent(),
                        this.setState({
                          rgCuratorList: this.GenerateNewsCuratorList()
                        }),
                        (e.label = 2);
                    case 2:
                      return (
                        window.addEventListener("resize", this.OnResize),
                        this.OnResize(),
                        [2]
                      );
                  }
                });
              });
            }),
            (a.prototype.componentWillUnmount = function() {
              window.removeEventListener("resize", this.OnResize);
            }),
            (a.prototype.GetMaxCapsulesPerRow = function() {
              if (!this.m_ref.current) return 0;
              var e = Math.floor(
                Math.min(this.m_ref.current.clientWidth, window.innerWidth) /
                  118
              );
              return Math.max(e - 1, 0);
            }),
            (a.prototype.OnResize = function() {
              this.setState({ nNumToDisplay: this.GetMaxCapsulesPerRow() });
            }),
            (a.prototype.HasBeenDismissed = function() {
              var e = JSON.parse(localStorage.getItem(a.s_strLocalStorageKey));
              return e && e.bDismissed;
            }),
            (a.prototype.OnCommitDismiss = function() {
              localStorage.setItem(
                a.s_strLocalStorageKey,
                JSON.stringify({ bDismissed: !0 })
              ),
                this.setState({ bHasBeenDismissed: !0 });
            }),
            (a.prototype.OnDismissButton = function(e) {
              Object(l.d)(
                d.a.createElement(P.c, {
                  strTitle: Object(Y.d)("#EventCurator_DismissTitle"),
                  strDescription: Object(Y.d)("#EventCurator_DismissBody"),
                  onOK: this.OnCommitDismiss
                }),
                Object(Z.n)(e)
              );
            }),
            (a.prototype.GenerateNewsCuratorList = function() {
              var e = Y.c.GetELanguageFallbackOrder(!1);
              void 0 ===
                e.find(function(e) {
                  return 0 === e;
                }) && e.push(0);
              for (var t = new Array(), a = 0, n = e; a < n.length; a++) {
                var r = n[a],
                  o = C.Get()
                    .GetCuratorsForLang(r)
                    .filter(function(e) {
                      return !x.a.BIsIgnoringCurator(e.clanAccountID);
                    });
                Object(Ne.f)(o), t.push.apply(t, o);
              }
              return t;
            }),
            (a.prototype.GenerateCurator = function(e) {
              var t = S.a.GetClanInfoByClanAccountID(e.clanAccountID);
              return t
                ? d.a.createElement(
                    "div",
                    { className: Ft.a.ClanInfo, key: t.clanAccountID },
                    d.a.createElement(ct, { clanInfo: t, layout: "icon" })
                  )
                : null;
            }),
            (a.prototype.OnBrowseCurator = function(e) {
              Object(l.d)(d.a.createElement(lt, null), Object(Z.n)(e));
            }),
            (a.prototype.render = function() {
              var t = this,
                e = this.props.bCanDismiss,
                a = this.state,
                n = a.bHasBeenDismissed,
                r = a.rgCuratorList;
              if (n || !r || 0 === r.length) return null;
              var o = r.slice(0, this.state.nNumToDisplay).map(function(e) {
                return t.GenerateCurator(e);
              });
              return d.a.createElement(
                b.a,
                null,
                d.a.createElement(
                  "div",
                  { className: Ft.a.FeedSuggestContainerBG },
                  d.a.createElement(
                    "div",
                    { className: Ft.a.FeedSuggestContainer },
                    d.a.createElement(
                      "div",
                      { className: Ft.a.FeedSuggestCaption },
                      Object(Y.d)("#EventCurator_FeedCaption_Long")
                    ),
                    e &&
                      d.a.createElement(
                        "div",
                        {
                          className: Ft.a.DismissButton,
                          onClick: this.OnDismissButton
                        },
                        d.a.createElement(D.R, null)
                      ),
                    d.a.createElement(
                      "div",
                      { className: Ft.a.RowContainer, ref: this.m_ref },
                      o || d.a.createElement(J.a, null),
                      d.a.createElement(
                        "div",
                        {
                          className: Ft.a.BrowseMore,
                          onClick: this.OnBrowseCurator
                        },
                        Object(Y.d)("#EventCurator_BrowseMore")
                      )
                    )
                  )
                )
              );
            }),
            (a.s_strLocalStorageKey = "SteamNewsHub_SuggestCuratorsDismissed"),
            Object(U.c)([f.a], a.prototype, "OnResize", null),
            Object(U.c)([f.a], a.prototype, "OnCommitDismiss", null),
            Object(U.c)([f.a], a.prototype, "OnDismissButton", null),
            Object(U.c)([f.a], a.prototype, "OnBrowseCurator", null),
            a
          );
        })(d.a.Component),
        Ht = a("4SZ2"),
        zt = a.n(Ht);
      var Ut,
        Wt,
        Vt,
        Zt = [
          ((Ut = "#EventCalendar_Collection_News_Title"),
          (Wt = "#EventCalendar_Collection_News_Subtitle"),
          {
            collection: "press",
            smallHeight: Number(zt.a.simpleTitleSmallHeight),
            largeHeight: Number(zt.a.simpleTitleLargeHeight),
            component: function(e) {
              return z.createElement(Lt, {
                largeHeader: e,
                titleToken: Ut,
                subtitleToken: Wt,
                backgroundImg: Vt
              });
            }
          })
        ],
        Yt = a("mZMQ"),
        qt = (a("hmtA"), a("dgee")),
        Qt = a.n(qt),
        Jt = a("SS32"),
        Kt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
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
              return z.createElement(
                "div",
                { className: Jt.pipScrollerContainer },
                e &&
                  z.createElement(
                    Yt.a,
                    {
                      className: Object(V.a)(
                        Jt.pipScrollButton,
                        Jt.left,
                        Jt.carouselNavButton
                      )
                    },
                    z.createElement(D.o, null)
                  ),
                z.createElement(
                  "div",
                  { className: Jt.pipScroller },
                  z.createElement("div", { className: Jt.scrollBackground }),
                  z.createElement("div", {
                    className: Jt.scrollForeground,
                    style: { left: r + "%", right: o + "%" }
                  }),
                  z.createElement(
                    "div",
                    {
                      className: Jt.scrollNavDiv,
                      style: { left: "0%", width: i + "%" }
                    },
                    z.createElement(
                      Yt.a,
                      {
                        className: Object(V.a)(
                          Jt.carouselNavButton,
                          Jt.scrollNavButton
                        )
                      },
                      z.createElement("div", null)
                    )
                  ),
                  z.createElement(
                    "div",
                    {
                      className: Jt.scrollNavDiv,
                      style: { right: "0%", width: l + "%" }
                    },
                    z.createElement(
                      Yt.b,
                      {
                        className: Object(V.a)(
                          Jt.carouselNavButton,
                          Jt.scrollNavButton
                        )
                      },
                      z.createElement("div", null)
                    )
                  )
                ),
                e &&
                  z.createElement(
                    Yt.b,
                    {
                      className: Object(V.a)(
                        Jt.pipScrollButton,
                        Jt.right,
                        Jt.carouselNavButton
                      )
                    },
                    z.createElement(D.o, null)
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
                        z.createElement(
                          "div",
                          { className: Jt.pipsSkipped },
                          "..."
                        )
                      )
                    : t.push(
                        z.createElement(
                          Yt.d,
                          { slide: c, className: Jt.pip },
                          z.createElement(
                            z.Fragment,
                            null,
                            z.createElement("img", { src: Qt.a }),
                            z.createElement(
                              "div",
                              { className: Jt.pipNumber },
                              s
                            )
                          )
                        )
                      ),
                  s++,
                  (a = e));
              }
              return z.createElement("div", { className: Jt.pipContainer }, t);
            }),
            (t.prototype.render = function() {
              return this.renderScroller();
            }),
            t
          );
        })(z.Component),
        Xt = Object(Yt.g)(Kt, function(e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides
          };
        }),
        $t = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.GetNumElements = function() {
              return z.Children.count(this.props.children);
            }),
            (t.prototype.GetPageSize = function() {
              return Math.min(
                this.GetNumElements(),
                this.props.visibleElements
              );
            }),
            (t.prototype.RenderChildren = function() {
              return z.Children.map(this.props.children, function(e, t) {
                return z.createElement(
                  Yt.e,
                  { key: "slide_" + t, index: t },
                  e
                );
              });
            }),
            (t.prototype.RenderBreadcrumbs = function(a) {
              return z.Children.map(this.props.children, function(e, t) {
                return t % a != 0
                  ? null
                  : z.createElement(
                      Yt.d,
                      { slide: t, className: Jt.pip },
                      z.createElement("img", { src: Qt.a })
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
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      Jt.carouselBody,
                      this.props.className
                    )
                  },
                  z.createElement(
                    Yt.c,
                    {
                      visibleSlides: this.props.visibleElements,
                      totalSlides: this.GetNumElements(),
                      naturalSlideWidth: 100 * o,
                      naturalSlideHeight: 100,
                      step: this.props.visibleElements,
                      infinite: !this.props.disableEdgeWrap,
                      isIntrinsicHeight: i
                    },
                    z.createElement(
                      "div",
                      { className: Jt.sliderBody },
                      !n &&
                        z.createElement(
                          Yt.a,
                          {
                            className: Object(V.a)(
                              Jt.carouselBtnCtn,
                              Jt.left,
                              Jt.carouselNavButton
                            )
                          },
                          z.createElement(D.o, null)
                        ),
                      z.createElement(Yt.f, null, this.RenderChildren()),
                      !n &&
                        z.createElement(
                          Yt.b,
                          {
                            className: Object(V.a)(
                              Jt.carouselBtnCtn,
                              Jt.right,
                              Jt.carouselNavButton
                            )
                          },
                          z.createElement(D.o, null)
                        )
                    ),
                    !r &&
                      (this.props.useTestScrollbar
                        ? z.createElement(Xt, { showArrows: n })
                        : z.createElement(
                            "div",
                            { className: Jt.breadcrumbContainer },
                            this.RenderBreadcrumbs(t)
                          ))
                  )
                )
              );
            }),
            t
          );
        })(z.Component),
        ea = a("90oc"),
        ta = a.n(ea),
        aa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.rgCalendarItems,
                a = e.bSuppressHoverEffects;
              if (!t || 0 == t.length) return null;
              var n = t[0];
              if (
                !t.every(function(e) {
                  return e.appid === n.appid && e.clanid === n.clanid;
                })
              )
                return null;
              var r = 0 === n.appid && q.i.accountid;
              return z.createElement(
                "div",
                { className: ta.a.EventTileCarouselTitleContainer },
                z.createElement(
                  "div",
                  { className: ta.a.EventTileCarouselTitle },
                  z.createElement(fa, {
                    calendarItem: n,
                    bSuppressHoverEffects: a
                  })
                ),
                r &&
                  z.createElement(
                    "div",
                    { className: ta.a.EventTileCarouselFollow },
                    z.createElement(he, { clanAccountID: n.clanid })
                  )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        na = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bScreenIsWide: a.IsWideScreen(),
                nMaxCapsulesPerRow: e.GetMaxCapsulesPerRow()
              }),
              e
            );
          }
          var a;
          return (
            Object(U.d)(e, t),
            ((a = e).prototype.componentDidMount = function() {
              window.addEventListener("resize", this.OnResize);
            }),
            (e.prototype.componentWillUnmount = function() {
              window.removeEventListener("resize", this.OnResize);
            }),
            (e.IsWideScreen = function() {
              return 980 <= window.innerWidth;
            }),
            (e.prototype.GetMaxCapsulesPerRow = function() {
              return a.IsWideScreen()
                ? 3
                : Math.max(Math.floor(window.innerWidth / 300), 1);
            }),
            (e.prototype.OnResize = function() {
              this.setState({
                bScreenIsWide: a.IsWideScreen(),
                nMaxCapsulesPerRow: this.GetMaxCapsulesPerRow()
              });
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.rgCalendarItems,
                a = e.fnOnEventClick,
                n = e.bSuppressHoverEffects,
                r = e.bHideGameTitle;
              if (!t || 0 == t.length) return null;
              var o = t.map(function(e) {
                return z.createElement(it, {
                  key: "ht-" + e.unique_id,
                  calendarEvent: e,
                  partnerEventStore: B.c,
                  fnOnClicked: a,
                  bSuppressHoverEffects: n,
                  mode: 1 < t.length ? "carousel" : "wide",
                  bHideGameTitle: r
                });
              });
              return z.createElement(
                "div",
                { className: ta.a.CalendarRow },
                z.createElement(aa, {
                  rgCalendarItems: t,
                  bSuppressHoverEffects: n
                }),
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      ta.a.EventTileCarousel,
                      "EventTileCarouselCtn"
                    )
                  },
                  z.createElement(
                    $t,
                    {
                      hideArrows: !0,
                      visibleElements: Math.min(
                        this.state.nMaxCapsulesPerRow,
                        this.props.rgCalendarItems.length
                      ),
                      className: ta.a.HorizontalTiles,
                      useTestScrollbar: !0
                    },
                    o
                  )
                )
              );
            }),
            Object(U.c)([f.a], e.prototype, "OnResize", null),
            (e = a = Object(U.c)([r.a], e))
          );
        })(z.Component),
        ra = a("s4NR"),
        oa = a.n(ra);
      function ia(e, t) {
        var a = "location" in e ? e.location : e,
          n = "search" in a ? a.search : a,
          r = oa.a.parse(n.substring(1))[t];
        return r && Array.isArray(r) ? r[r.length - 1] : r;
      }
      function la(e, t, a) {
        var n = oa.a.parse(e.location.search.substring(1));
        null == a ? delete n[t] : (n[t] = a), e.push("?" + oa.a.stringify(n));
      }
      function sa(e, t) {
        var a,
          n = oa.a.parse(e.location.search.substring(1));
        for (var r in t) {
          t.hasOwnProperty(r) &&
            (null == (a = t[r]) ? delete n[r] : (n[r] = a));
        }
        e.push("?" + oa.a.stringify(n));
      }
      var ca = "global_header";
      function da() {
        var e = document.getElementById(ca);
        if (e && "none" != getComputedStyle(e).display) return e;
        var t = document.getElementsByClassName("responsive_header");
        return (
          Object(h.a)(t.length <= 1, "Must have at most one responsive_header"),
          1 != t.length ? null : t[0]
        );
      }
      function ua() {
        var e = da();
        return e && e.id != ca;
      }
      function pa() {
        return window.innerWidth < parseInt(ut.a.strMaxMobileWidth);
      }
      function ma() {
        return (
          ua() ||
          window.innerWidth <
            parseInt(ut.a.strDesktopControlBarWidth) +
              parseInt(ut.a.strMaxMobileWidth)
        );
      }
      var ha,
        va,
        _a = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUserIsLoggedIn: q.i.logged_in,
                nVisibleHeight: 0,
                nScrollTop: 0,
                bControlBarIsCollapsed: ma(),
                bControlBarWasOpenedByUser: !1,
                nDisappearingHeaderTop: 0,
                nSteamNavHeaderHeight: 0,
                nMobileNavBannerHeight: 0,
                nHubBannerHeight: 0,
                nGroupHeaderHeight: 0
              }),
              (e.m_refControlBar = z.createRef()),
              (e.m_cancelSignal = E.a.CancelToken.source()),
              e
            );
          }
          var c;
          return (
            Object(U.d)(e, t),
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
              var t = e && !pa();
              return Object(N.a)().GetCollectionID()
                ? (function(t, e) {
                    if (!G.a.bUseSlashNews) return 0;
                    if (!t) return 0;
                    var a = Zt.find(function(e) {
                      return e.collection === t;
                    });
                    return a ? (e ? a.largeHeight : a.smallHeight) : 0;
                  })(Object(N.a)().GetCollectionID(), t)
                : Object(N.a)().BIsSingleSourceCalendar()
                ? parseInt(
                    t
                      ? ut.a.strJumboHubBannerHeight
                      : ut.a.strDesktopHubBannerHeight
                  ) - 1
                : 0;
            }),
            (e.prototype.GetCurrentHeaderHeights = function() {
              var e = ua(),
                t = pa(),
                a = 0;
              da() &&
                ((a = parseInt(
                  e
                    ? ut.a.strMobileGlobalHeaderHeight
                    : ut.a.strDesktopGlobalHeaderHeight
                )),
                --a);
              var n =
                parseInt(
                  t
                    ? ut.a.strMobileGroupHeaderHeight
                    : ut.a.strDesktopGroupHeaderHeight
                ) - 1;
              return {
                nSteamNavHeaderHeight: a,
                nMobileNavBannerHeight:
                  (e ? parseInt(ut.a.strMobileNavBannerHeight) : 0) - 1,
                nHubBannerHeight: this.GetCurrentHubBannerHeight(
                  this.state.nScrollTop <= 0
                ),
                nGroupHeaderHeight: n
              };
            }),
            (e.prototype.LoadEventToShowAsModal = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return ((t = ia(this.props.location, "emclan")),
                      (a = ia(this.props.location, "emgid")),
                      t && a)
                        ? ((n = new L.a(t)),
                          this.state.modalEvent &&
                          this.state.modalEvent.clanSteamID.ConvertTo64BitString() ==
                            n.ConvertTo64BitString() &&
                          this.state.modalEvent.GID == a
                            ? [2]
                            : [
                                4,
                                B.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
              var e = ia(this.props.location, "upcoming");
              return e && "false" != e;
            }),
            (e.prototype.BShowUpdatesOnly = function() {
              return "true" == ia(this.props.location, "updates");
            }),
            (e.prototype.UpdateDocumentUI = function() {
              var e,
                t,
                a,
                n,
                r,
                o = Object(N.a)();
              o.BIsSingleAppCalendar()
                ? (a =
                    (t =
                      (e = o.GetSingleAppID()) &&
                      _.a.GetStoreCapsuleInfo(e).GetAppStoreData()) && t.title)
                : o.BIsSingleGroupCalendar()
                ? (a =
                    (r =
                      (n = o.GetSingleGroupID()) &&
                      S.a.GetClanInfoByClanAccountID(n)) && r.group_name)
                : o.BIsCollectionCalendar();
              var i = a
                ? Object(Y.d)("#EventCalendar_TabTitle_GroupHub", a)
                : Object(Y.d)("#EventCalendar_TabTitle_Global");
              document.title != i && (document.title = i),
                document.body.classList.contains("events_hub") ||
                  document.body.classList.add("events_hub");
            }),
            (e.prototype.OnResize = function() {
              var r = this;
              this.setState(function(e) {
                var t = window.innerHeight,
                  a = !e.bControlBarWasOpenedByUser && ma(),
                  n = r.GetCurrentHeaderHeights();
                return (
                  r.UpdateBodyScrollState(a),
                  Object(U.a)(
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
                  l = da();
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        c.m_bInitialLoad,
                        (t = {
                          appids: this.props.filter_to_appids,
                          clanaccountids: this.props.filter_to_clanids,
                          collectionid: this.props.filter_to_collection
                        }),
                        (a = Object(N.b)(t)),
                        (n = Object(N.a)()),
                        (r = Boolean(
                          this.state.bUserIsLoggedIn && q.i.accountid
                        )),
                        (o = n.BIsGlobalCalendar() && r ? "local" : "session"),
                        (i = n.BIsGlobalCalendar() ? "U" + q.i.accountid : a),
                        n.m_visibilityStore.Init(
                          r,
                          this.BShowUpdatesOnly(),
                          i,
                          o
                        ),
                        (l = !n.BIsCollectionCalendar()),
                        n.SetFilteredView(function(e) {
                          return n.m_visibilityStore.BShouldDisplayEvent(e);
                        }, l),
                        (s =
                          c.m_bInitialLoad &&
                          Object(q.f)("initialEvents", "application_config"))
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
                            : S.a.LoadClanInfoForClanSteamID(
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
              var t = !e && ua(),
                a = document.body;
              a &&
                (t
                  ? a.classList.add(ut.a.BodyNoScroll)
                  : a.classList.remove(ut.a.BodyNoScroll));
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
                  r = da();
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
              var e = da();
              e &&
                (e.style.transform =
                  "translateY(" + this.state.nDisappearingHeaderTop + "px)"),
                "PUSH" === this.props.history.action
                  ? this.props.history.goBack()
                  : sa(this.props.history, { emclan: void 0, emgid: void 0 });
            }),
            (e.prototype.OnEventClicked = function(e) {
              W.a.Get().RecordEventRead(e, 8);
              var t,
                a =
                  this.state.nSteamNavHeaderHeight +
                  this.state.nHubBannerHeight +
                  this.state.nMobileNavBannerHeight,
                n = da();
              n && (n.style.transform = "translateY(" + -1 * a + "px)"),
                G.a.bOpenEventLandingPage
                  ? ((t = Object(Ue.d)(e, Ue.a.k_eStoreView, "allowRelative")),
                    this.props.history.push(t))
                  : sa(this.props.history, {
                      emclan: e.clanSteamID.ConvertTo64BitString(),
                      emgid: e.GID
                    });
            }),
            (e.prototype.ToggleFutureView = function() {
              la(
                this.props.history,
                "upcoming",
                this.BShowFutureView() ? "false" : "true"
              );
            }),
            (e.prototype.ResetAllFilters = function() {
              la(this.props.history, "updates", void 0),
                Object(N.a)().m_visibilityStore.InitDefaultCheckboxes(
                  this.state.bUserIsLoggedIn,
                  !1
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
                  this.state.nVisibleHeight <=
                  parseInt(ut.a.strMinMobileHeight),
                o = r
                  ? 0
                  : this.state.nDisappearingHeaderTop +
                    this.state.nSteamNavHeaderHeight,
                i = r ? 0 : this.state.nDisappearingHeaderTop + e,
                l = Object(N.a)().m_visibilityStore.BAreAnyEventsFiltered(
                  this.state.bUserIsLoggedIn
                )
                  ? this.ResetAllFilters
                  : null;
              return z.createElement(
                z.Fragment,
                null,
                z.createElement(
                  "div",
                  { className: ut.a.EventCalendarContainer },
                  z.createElement(
                    b.a,
                    null,
                    this.state.modalEvent
                      ? z.createElement(we, {
                          classname: ut.a.StoreHeaderAdjust,
                          appid: this.state.modalEvent.appid,
                          trackingLocation: 8,
                          announcementGID: this.state.modalEvent.GetAnnouncementGID(),
                          partnerEventStore: B.c,
                          eventModel: this.state.modalEvent,
                          showAppHeader: !0,
                          closeModal: this.CloseEventModal
                        })
                      : null
                  ),
                  z.createElement(
                    b.a,
                    null,
                    z.createElement(ft, {
                      ref: this.m_refControlBar,
                      bUserIsLoggedIn: this.state.bUserIsLoggedIn,
                      nDisappearingHeaderVisibleHeight: o,
                      nGlobalHeaderTop: t,
                      bIsCollapsed: this.state.bControlBarIsCollapsed,
                      bShowUpcoming: this.BShowFutureView(),
                      bShouldIncludeLegalFooter: !ua(),
                      fnToggleCollapsed: this.ToggleControlBarCollapsed,
                      fnOnFilterChange: this.OnControlBarChange
                    })
                  ),
                  z.createElement(
                    b.a,
                    null,
                    z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          ut.a.ReserveControlSpace,
                          !this.state.bControlBarIsCollapsed &&
                            ut.a.WideLeftGutter
                        )
                      },
                      z.createElement(
                        b.a,
                        null,
                        0 < this.state.nMobileNavBannerHeight &&
                          z.createElement(Nt, {
                            bIsUpcoming: this.BShowFutureView(),
                            nTopOffset: a,
                            fnToggleCollapsed: this.MobileNavOpenSettings
                          }),
                        z.createElement(ga, {
                          nTopOffset: n,
                          bLargeMode: this.state.nScrollTop <= 0 && !pa()
                        })
                      ),
                      Boolean(
                        !this.BRequireLoggedInUser() ||
                          this.state.bUserIsLoggedIn
                      )
                        ? z.createElement(
                            b.a,
                            null,
                            z.createElement(ya, {
                              bShowFutureViewOnly: this.BShowFutureView(),
                              bShowUpdatesOnly: this.BShowUpdatesOnly(),
                              fnOnEventClick: this.OnEventClicked,
                              fnToggleSeeFuture: this.ToggleFutureView,
                              fnResetFilters: l,
                              nVisibleHeight: this.state.nVisibleHeight,
                              nScrollTop: this.state.nScrollTop,
                              nDisappearingHeaderHeight: e,
                              nDisappearingHeaderVisibleHeight: i,
                              nGroupHeaderHeight: this.state.nGroupHeaderHeight
                            })
                          )
                        : z.createElement(
                            b.a,
                            null,
                            z.createElement(
                              "div",
                              { className: ut.a.LoginPrompt },
                              Object(Y.d)("#EventCalendar_MainLoginPrompt"),
                              z.createElement(
                                "button",
                                { onClick: se.a, className: ut.a.LoginButton },
                                Object(Y.d)("#Login_SignIn")
                              )
                            )
                          )
                    )
                  )
                )
              );
            }),
            (e.m_bInitialLoad = !0),
            Object(U.c)([f.a], e.prototype, "OnResize", null),
            Object(U.c)([f.a], e.prototype, "OnScroll", null),
            Object(U.c)([f.a], e.prototype, "MobileNavOpenSettings", null),
            Object(U.c)([f.a], e.prototype, "ToggleControlBarCollapsed", null),
            Object(U.c)([f.a], e.prototype, "OnControlBarChange", null),
            Object(U.c)([f.a], e.prototype, "CloseEventModal", null),
            Object(U.c)([f.a], e.prototype, "OnEventClicked", null),
            Object(U.c)([f.a], e.prototype, "ToggleFutureView", null),
            Object(U.c)([f.a], e.prototype, "ResetAllFilters", null),
            (e = c = Object(U.c)([r.a], e))
          );
        })(z.Component),
        ba = Object(i.h)(_a),
        ga = function(e) {
          if (Object(N.a)().GetCollectionID()) {
            var t = (function(t, e) {
              if (!G.a.bUseSlashNews) return null;
              if (!t) return null;
              var a = Zt.find(function(e) {
                return e.collection === t;
              });
              return a ? a.component(e) : null;
            })(Object(N.a)().GetCollectionID(), e.bLargeMode);
            if (!t) return null;
            var a = Object(V.a)(ut.a.HubBanner, xt.a.WideBanner);
            return z.createElement(
              "div",
              {
                style: { transform: "translateY(" + e.nTopOffset + "px)" },
                className: a
              },
              t
            );
          }
          if (Object(N.a)().BIsSingleSourceCalendar()) {
            var n = Object(N.a)().BIsSingleAppCalendar()
                ? Object(N.a)().GetSingleAppID()
                : void 0,
              r = Object(N.a)().BIsSingleGroupCalendar()
                ? Object(N.a)().GetSingleGroupID()
                : void 0,
              a = Object(V.a)(
                ut.a.HubBanner,
                xt.a.WideBanner,
                e.bLargeMode && ut.a.LargeMode,
                e.bLargeMode && xt.a.TallBanner
              );
            return z.createElement(
              "div",
              {
                style: { transform: "translateY(" + e.nTopOffset + "px)" },
                className: a
              },
              z.createElement(Se.b, {
                appInfoStore: u.a,
                appId: n,
                clanId: r,
                bShowRSSFeed: !0
              })
            );
          }
          return null;
        },
        ya = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.GetCurrentSectionLayout = function() {
              var t = this.props.nDisappearingHeaderHeight;
              return Object(N.a)()
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
              var y = this,
                e = Object(N.a)(),
                t = this.props,
                E = t.bShowFutureViewOnly,
                a = t.bShowUpdatesOnly,
                S = t.fnOnEventClick,
                f = t.fnToggleSeeFuture,
                n = t.fnResetFilters,
                r = t.nVisibleHeight,
                C = t.nScrollTop,
                O = t.nDisappearingHeaderVisibleHeight,
                o = t.nDisappearingHeaderHeight,
                w = t.nGroupHeaderHeight,
                i = e.GetCalendarSections(E);
              if (0 == i.length) return null;
              var T = pa(),
                l = e.m_visibilityStore.BAreAllEventsHidden(),
                I = C + O,
                k = C + r,
                j = !0,
                s =
                  G.a.bIncludeCurators &&
                  Object(N.a)().BIsGlobalCalendar() &&
                  q.i.accountid,
                D = s && !E,
                A = void 0,
                c = l
                  ? []
                  : this.GetCurrentSectionLayout().map(function(e, t) {
                      var a = e.section,
                        n = e.nTopOfSection,
                        r = e.nBottomOfSection,
                        o = a.strId,
                        i = a.strSectionLabel,
                        l = a.rtSectionStart,
                        s = a.rtSectionEnd,
                        c = a.bIsFutureSection,
                        d = a.nRenderedHeight,
                        u = Math.max(0, I - r),
                        p = Math.max(0, n - k),
                        m = y.props.nVisibleHeight > Math.max(u, p),
                        h = n < I,
                        v = r - C - w,
                        _ = h ? Math.min(O - 1, v) : -1,
                        b = Object(V.a)(
                          ut.a.PastSection,
                          j && ut.a.DarkerBackground
                        );
                      0 < d &&
                        ((j = !j), D && 1e3 <= n && void 0 === A && (A = t));
                      var g = !E && c;
                      return z.createElement(Ca, {
                        key: o,
                        bShouldRenderContents: m,
                        bRenderStickyHeader: h,
                        nExtraHeaderOffset: _,
                        strSectionLabel: i,
                        rtSectionStart: l,
                        rtSectionEnd: s,
                        strSectionClassname: b,
                        bUseHorizontalLayout: g,
                        fnOnSeeFutureClick: f,
                        bShowEarliestFirst: E || g,
                        nInitialHeight: d,
                        fnReportHeight: function(e) {
                          return y.RecordSectionRenderedHeight(a, e);
                        },
                        fnOnEventClick: S,
                        bSuppressHoverEffects: T,
                        bCollapseIfSameSource: !Object(
                          N.a
                        )().BIsSingleSourceCalendar()
                      });
                    });
              void 0 !== A &&
                c.splice(
                  A,
                  0,
                  z.createElement(Pt, {
                    key: "CuratorSuggestions",
                    bCanDismiss: !0
                  })
                );
              var d = i[0].rtSectionStart,
                u = Object(N.a)().GetCurrentlyLoadedEventCount(0, d),
                p = Object(N.a)().GetCurrentlyLoadedEventCount(d),
                m =
                  u &&
                  (u.nCount
                    ? "#EventCalendar_NoMorePastEvents"
                    : "#EventCalendar_NoPastEvents"),
                h =
                  n &&
                  z.createElement(
                    M.a,
                    {
                      key: "link-back",
                      toolTipContent: Object(Y.d)(
                        "#EventCalendar_ResetFilters_ttip"
                      ),
                      className: Object(V.a)(ut.a.BackToThePast, ut.a.NoCount),
                      onClick: n
                    },
                    Object(Y.d)("#EventCalendar_ResetFiltersButton")
                  );
              return (
                E
                  ? ((m =
                      p &&
                      (p.nCount
                        ? "#EventCalendar_NoMoreFutureEvents"
                        : "#EventCalendar_NoFutureEvents")),
                    (h =
                      u &&
                      z.createElement(
                        "div",
                        {
                          key: "link-back",
                          className: ut.a.BackToThePast,
                          onClick: f
                        },
                        Object(Y.d)("#EventCalendar_PastEventsLink"),
                        z.createElement(
                          "span",
                          { className: ut.a.SeeAllCount },
                          u.nCount + (u.bIsComplete ? "" : "+")
                        )
                      )))
                  : a &&
                    (m =
                      u &&
                      (u.nCount
                        ? "#EventCalendar_NoMorePastUpdates"
                        : "#EventCalendar_NoPastUpdates")),
                z.createElement(
                  "div",
                  { className: ut.a.RowContainer },
                  z.createElement(
                    "div",
                    { className: ut.a.Rows },
                    z.createElement("div", {
                      className: ut.a.FutureSection,
                      key: "spacer",
                      style: { height: o }
                    }),
                    a &&
                      z.createElement(
                        "div",
                        { className: ut.a.UpdatePageBanner },
                        Object(Y.d)("#EventCalendar_UpdatesViewHeader")
                      ),
                    c,
                    z.createElement(
                      "div",
                      {
                        key: "no-more-events",
                        className: Object(V.a)(ut.a.EndOfRows, ut.a.CalendarRow)
                      },
                      z.createElement(
                        "div",
                        { className: ut.a.NoMoreRows },
                        " ",
                        Object(Y.d)(m),
                        " "
                      )
                    ),
                    s &&
                      z.createElement(Pt, {
                        key: "CuratorSuggestions",
                        bCanDismiss: !1
                      }),
                    h
                  )
                )
              );
            }),
            Object(U.c)(
              [f.a],
              t.prototype,
              "RecordSectionRenderedHeight",
              null
            ),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Ea = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.rgCalendarItems[0].start_time,
                t = Object(N.a)().GetCurrentlyLoadedEventCount(e);
              return this.props.rgCalendarItems.length <= 1
                ? null
                : z.createElement(
                    "div",
                    {
                      key: "see-all-link",
                      className: ut.a.MobileSeeAllink,
                      onClick: this.props.fnOnSeeFutureClick
                    },
                    Object(Y.d)("#EventCalendar_FutureEventsLink"),
                    z.createElement(
                      "span",
                      { className: ut.a.SeeAllCount },
                      t.nCount + (t.bIsComplete ? "" : "+")
                    )
                  );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Sa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.rgCalendarItems,
                a = e.fnOnEventClick,
                n = e.fnOnSeeFutureClick,
                r = e.bSuppressHoverEffects;
              return t && 0 != t.length
                ? z.createElement(
                    "div",
                    { className: ut.a.CalendarRow },
                    z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          ut.a.HorizontalTileContainer,
                          "HorizontalTileCtn"
                        )
                      },
                      z.createElement(
                        "div",
                        { className: ut.a.HorizontalTiles },
                        t.map(function(e) {
                          return z.createElement(it, {
                            key: "ht-" + e.unique_id,
                            calendarEvent: e,
                            partnerEventStore: B.c,
                            fnOnClicked: a,
                            bSuppressHoverEffects: r,
                            mode: 1 < t.length ? "upcoming" : "wide",
                            bHideGameTitle:
                              Object(N.a)().BIsSingleSourceCalendar() &&
                              Object(N.a)().BEventMatchCalendarSingleSource(e)
                          });
                        })
                      ),
                      z.createElement(Ea, {
                        rgCalendarItems: t,
                        fnOnSeeFutureClick: n
                      })
                    )
                  )
                : null;
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        fa = function(e) {
          var t = e.calendarItem,
            a = e.bSuppressHoverEffects,
            n = B.c.GetClanEventModel(t.unique_id);
          return n
            ? z.createElement(
                "div",
                { className: ut.a.EventListTitle },
                z.createElement(at, {
                  eventModel: n,
                  calendarEvent: t,
                  bSuppressHoverEffects: a
                })
              )
            : null;
        },
        Ca = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_ref = z.createRef()), (e.bNeedToReportHeight = !1), e;
          }
          return (
            Object(U.d)(e, t),
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
                return Object(N.a)().GetCalendarItemsInTimeRange(
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
            (e.prototype.RenderEventList = function(e) {
              function t(e) {
                return z.createElement(
                  "div",
                  { key: e.unique_id, className: ut.a.CalendarRow },
                  z.createElement(it, {
                    calendarEvent: e,
                    partnerEventStore: B.c,
                    mode: "wide",
                    fnOnClicked: n,
                    bSuppressHoverEffects: r,
                    bHideGameTitle:
                      Object(N.a)().BIsSingleSourceCalendar() &&
                      Object(N.a)().BEventMatchCalendarSingleSource(e)
                  })
                );
              }
              var a = this.props,
                n = a.fnOnEventClick,
                r = a.bSuppressHoverEffects;
              if (!a.bCollapseIfSameSource) return e.map(t);
              for (var o = new Map(), i = 0, l = e; i < l.length; i++) {
                var s,
                  c = (h = l[i]).clanid,
                  d = o.get(c);
                d ? d.push(h) : ((s = new Array()).push(h), o.set(c, s));
              }
              for (var u = new Array(), p = 0, m = e; p < m.length; p++) {
                var h,
                  c = (h = m[p]).clanid,
                  v = o.get(c);
                v.length < 3
                  ? u.push(t(h))
                  : v[0] === h &&
                    u.push(
                      z.createElement(
                        "div",
                        {
                          key: h.unique_id,
                          className: ut.a.CalendarEventListRow
                        },
                        z.createElement(
                          "div",
                          { className: ut.a.CalendarEventListContainer },
                          z.createElement(na, {
                            key: h.unique_id,
                            rgCalendarItems: v,
                            bSuppressHoverEffects: r,
                            fnOnEventClick: n,
                            bHideGameTitle: !0
                          })
                        )
                      )
                    );
              }
              return u;
            }),
            (e.prototype.RenderLoadingState = function() {
              var e = Object(N.a)().GetTimeEdgeForDirection(
                this.props.bShowEarliestFirst ? "forward" : "backward",
                void 0
              );
              return z.createElement(
                "div",
                { className: ut.a.Loading },
                z.createElement(J.a, { size: "xlarge", position: "center" }),
                e &&
                  z.createElement(
                    z.Fragment,
                    null,
                    z.createElement(
                      "div",
                      { className: ut.a.LoadingProgress },
                      Object(Y.d)(
                        "#EventCalendar_LoadEventsProgress",
                        Number(
                          Object(N.a)().GetNumEventsLoaded()
                        ).toLocaleString(),
                        Object(Y.e)(e)
                      )
                    ),
                    z.createElement(
                      "div",
                      { className: ut.a.AdjustFiltersText },
                      Object(Y.d)("#EventCalendar_LoadEventsFilters")
                    )
                  )
              );
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
                u = e.bSuppressHoverEffects;
              if (!t)
                return z.createElement(
                  "div",
                  {
                    ref: this.m_ref,
                    style: { minHeight: c + "px" },
                    className: o
                  },
                  " "
                );
              var p = this.cachedCalendarItems,
                m = p.rgCalendarItems,
                h = p.bIsComplete;
              if (0 == m.length && h)
                return z.createElement("div", {
                  ref: this.m_ref,
                  className: o
                });
              m.length && s && (m = m.slice().reverse());
              var v = z.createElement(
                  "div",
                  {
                    style: { top: n },
                    className: Object(V.a)(
                      ut.a.GroupHeader,
                      ut.a.CalendarRow,
                      a && ut.a.HeaderAtTop
                    )
                  },
                  z.createElement(
                    "div",
                    { className: ut.a.GroupHeaderTitle },
                    z.createElement("span", null, r),
                    z.createElement("div", { className: ut.a.GroupHeaderLine }),
                    i &&
                      3 < m.length &&
                      z.createElement(
                        "div",
                        { className: ut.a.SeeAllLink, onClick: l },
                        Object(Y.d)("#EventCalendar_FutureEventsLink"),
                        z.createElement(
                          "span",
                          { className: ut.a.SeeAllCount },
                          m.length + (h ? "" : "+")
                        )
                      )
                  )
                ),
                _ = i
                  ? z.createElement(Sa, {
                      rgCalendarItems: m.slice(0, 3),
                      fnOnEventClick: d,
                      fnOnSeeFutureClick: l,
                      bSuppressHoverEffects: u
                    })
                  : this.RenderEventList(m);
              return z.createElement(
                "div",
                { ref: this.m_ref, className: o },
                v,
                _,
                !h && !i && this.RenderLoadingState()
              );
            }),
            Object(U.c)([m.k], e.prototype, "cachedCalendarItems", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Oa = a("AXHe"),
        wa = a("Cs6D"),
        Ta = a("3+zv");
      ((va = ha = ha || {})[(va.k_ModReviewed = 0)] = "k_ModReviewed"),
        (va[(va.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
        (va[(va.k_ChangeEventType = 2)] = "k_ChangeEventType"),
        (va[(va.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
        (va[(va.k_ModReReviewed = 4)] = "k_ModReReviewed");
      var Ia = "ModAct",
        ka = (function() {
          function e() {}
          return (
            (e.prototype.ToModString = function() {
              var e =
                Ia +
                "_" +
                this.m_moderator +
                "_" +
                Math.floor(this.m_rtWhen) +
                "_" +
                this.m_action;
              switch (this.m_action) {
                case ha.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case ha.k_UpdateSeasonTags:
                  e += "_" + this.m_newTagAdded;
              }
              return e;
            }),
            (e.prototype.FromString = function(e) {
              var t = e.split("_");
              if (!t || t[0] !== Ia) return !1;
              switch (
                ((this.m_moderator = Number(t[1])),
                (this.m_rtWhen = Number(t[2])),
                (this.m_action = Number(t[3])),
                this.m_action)
              ) {
                case ha.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case ha.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function(e) {
              return (
                (this.m_moderator = q.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = ha.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function(e) {
              return (
                (this.m_moderator = q.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? ha.k_ModReviewed : ha.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function(e) {
              return (
                (this.m_moderator = q.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? ha.k_ModReReviewed : ha.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function(e) {
              return e.startsWith(Ia);
            }),
            (e.prototype.SetUpdateSeasonalTags = function(e) {
              return (
                (this.m_moderator = q.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = ha.k_UpdateSeasonTags),
                (this.m_newTagAdded = e),
                this
              );
            }),
            e
          );
        })(),
        ja = new ((function() {
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
              u,
              p
            ) {
              return (
                void 0 === o && (o = 0),
                void 0 === i && (i = 10),
                Object(U.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n = this;
                  return Object(U.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          this.GetLatestPartnerEvents(r, o, i, l, s, c, d, u, p)
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
              u,
              p,
              m,
              h,
              v
            ) {
              return (
                void 0 === o && (o = 0),
                void 0 === i && (i = 10),
                Object(U.b)(this, void 0, void 0, function() {
                  var t, a, n;
                  return Object(U.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t =
                            q.c.STORE_BASE_URL +
                            "events_admin/ajaxgetlatestpartnerevents"),
                          (a = {
                            page: o,
                            count: i,
                            date: d,
                            appids: void 0 === l ? void 0 : l.join(","),
                            required_tags: void 0 === s ? void 0 : s.join(","),
                            exclude_tags: void 0 === c ? void 0 : c.join(","),
                            eventtypefilter:
                              void 0 === u ? void 0 : u.join(","),
                            orderByVisibility: p || void 0,
                            creator_home_clan_id:
                              void 0 === m ? void 0 : m.join(","),
                            showUnpublished: void 0 === v ? void 0 : v,
                            term: void 0 === h ? void 0 : h
                          }),
                          [
                            4,
                            E.a.get(t, {
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          q.c.STORE_BASE_URL + "events_admin/ajaxupdatetags"),
                        (a = l.join(",")),
                        c &&
                          (0 < l.length && (a += ","), (a += c.ToModString())),
                        (n = new FormData()).append("sessionid", q.c.SESSIONID),
                        n.append("clan_accountid", "" + o.GetAccountID()),
                        n.append("gid_announcement", i),
                        n.append("add_tags", a),
                        n.append("remove_tags", s.join(",")),
                        [
                          4,
                          E.a.post(t, n, {
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          q.c.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (a = new FormData()).append("sessionid", q.c.SESSIONID),
                        a.append("clan_accountid", "" + r.GetAccountID()),
                        a.append("gid_event", o),
                        a.append("new_event_type", "" + i),
                        [
                          4,
                          E.a.post(t, a, {
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
            Object(U.c)([m.y], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(U.c)([m.y], e.prototype, "m_listEvents", void 0),
            Object(U.c)([m.h], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })())(),
        Da = a("Qcoi"),
        Aa = a("T27q"),
        La = a("BpzF"),
        Na = a("UxvL"),
        Ga = a("E9gz"),
        Ba = a("dsx8"),
        Ma = a("f0Wu"),
        xa = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0
        },
        Ra = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = E.a.CancelToken.source()),
              (e.m_refScroll = z.createRef()),
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
            Object(U.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.setState(
                { bInfiniteScrollLoading: !0 },
                this.LoadMoreModerationEvents
              ),
                window.addEventListener("scroll", this.OnScroll, !0);
              var e = oa.a.parse(
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
                  (r = [{ label: Object(ze.b)(n), value: n }]))
                : e.excludedTags &&
                  ((r = []),
                  e.excludedTags.forEach(function(e) {
                    var t = Number.parseInt(e);
                    r.push({ label: Object(ze.b)(t), value: t });
                  }));
              var o = void 0;
              "string" == typeof e.filterDate &&
                0 < e.filterDate.length &&
                (o = Ma.unix(Number(e.filterDate)));
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
                        oa.a.stringify({
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
              var t = Object(H.a)(e);
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
              return Object(U.b)(this, void 0, void 0, function() {
                return Object(U.e)(this, function(e) {
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
                  ja
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
                ja.GetAllSolrEvents().forEach(function(e) {
                  t.push(
                    z.createElement(Pa, { solrData: e, key: e.unique_id })
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
              (this.m_nPage = 0), ja.ClearAllSolrEvents();
            }),
            (e.prototype.OnDateChange = function(e) {
              if ("string" == typeof e) {
                var t = Ma(e, "M/D/YYYY", !0);
                if (!t.isValid())
                  return void this.setState({ filterDateAsString: e });
                e = t;
              }
              this.state.filterDate != e &&
                (this.ClearPreviousData(),
                this.setState(
                  Object(U.a)(
                    { filterDateAsString: void 0, filterDate: e },
                    xa
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                ));
            }),
            (e.prototype.IsValidDate = function(e) {
              var t = new Date();
              return (
                e.unix() <
                Ma.unix(t.getTime() / 1e3 + 86400)
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
                  Object(U.a)({ selectedTags: e }, xa),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventExcludeTags = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(U.a)({ excludedTags: e }, xa),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventTypeFilter = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(U.a)({ filterEventTypes: e }, xa),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnVisibilityStartTimeChange = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(U.a)(
                    { bOrderByVisibilityStartTime: e.currentTarget.checked },
                    xa
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.render = function() {
              var e = this.RenderTiles(),
                t = v.c.map(function(e) {
                  return { value: e, label: Object(ze.b)(e) };
                }),
                a = Ta.a.map(function(e) {
                  return { value: e, label: e };
                }),
                n = {
                  option: function(e) {
                    return Object(U.a)(Object(U.a)({}, e), {
                      color: "#444444"
                    });
                  }
                };
              return z.createElement(
                "div",
                { className: Ga.ModerationContainer, ref: this.m_refScroll },
                z.createElement(
                  "div",
                  null,
                  z.createElement(
                    "h2",
                    null,
                    Object(Y.d)("#EventModeration_Title")
                  ),
                  z.createElement(
                    b.a,
                    null,
                    z.createElement(
                      "div",
                      { className: Object(V.a)(Q.a.FlexRowContainer) },
                      z.createElement(
                        "div",
                        { className: Ga.FilterContainer },
                        z.createElement(
                          "span",
                          null,
                          Object(Y.d)("#EventModeration_FilterByTag")
                        ),
                        z.createElement(wa.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventSelectedTags,
                          value: this.state.selectedTags,
                          options: a,
                          styles: n
                        })
                      ),
                      z.createElement(
                        "div",
                        { className: Ga.FilterContainer },
                        z.createElement(
                          "span",
                          null,
                          Object(Y.d)("#EventModeration_FilterExcludeByTag")
                        ),
                        z.createElement(wa.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventExcludeTags,
                          value: this.state.excludedTags,
                          options: a,
                          styles: n
                        })
                      ),
                      z.createElement(
                        "div",
                        { className: Ga.FilterContainer },
                        z.createElement(
                          "span",
                          null,
                          Object(Y.d)("#EventModeration_FilterToType")
                        ),
                        z.createElement(wa.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventTypeFilter,
                          value: this.state.filterEventTypes,
                          options: t,
                          styles: n
                        })
                      ),
                      z.createElement(
                        "div",
                        { className: Ga.FilterContainer },
                        z.createElement(
                          "span",
                          null,
                          Object(Y.d)("#EventModeration_FilterToDate")
                        ),
                        z.createElement(Oa, {
                          onChange: this.OnDateChange,
                          timeFormat: !1,
                          value: this.state.filterDate,
                          isValidDate: this.IsValidDate,
                          inputProps: {
                            placeholder: Object(Y.d)(
                              "#EventModeration_PickDatee"
                            ),
                            className: Ga.TimeWidth
                          }
                        })
                      ),
                      z.createElement(
                        "div",
                        { className: Ga.FilterContainer },
                        z.createElement(
                          "label",
                          { htmlFor: "EventPerLoad" },
                          Object(Y.d)("#EventModeration_PerPageLoad")
                        ),
                        z.createElement(
                          "div",
                          null,
                          z.createElement("input", {
                            type: "number",
                            id: "EventPerLoad",
                            min: "10",
                            max: "5000",
                            value: this.state.eventsToLoadPerPaging,
                            onChange: this.OnEventPerPageLoad
                          })
                        )
                      ),
                      z.createElement(
                        "div",
                        { className: Ga.FilterContainer },
                        z.createElement("input", {
                          type: "checkbox",
                          id: "VisibilityStart",
                          checked: this.state.bOrderByVisibilityStartTime,
                          onChange: this.OnVisibilityStartTimeChange
                        }),
                        z.createElement(
                          "label",
                          { htmlFor: "VisibilityStart" },
                          Object(Y.d)("#EventModeration_OrderByFirstVisible")
                        )
                      )
                    )
                  )
                ),
                z.createElement(b.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  z.createElement(J.a, {
                    position: "center",
                    size: "medium",
                    string: Object(Y.d)("#Loading")
                  })
              );
            }),
            Object(U.c)([f.a], e.prototype, "HandleError", null),
            Object(U.c)(
              [f.a],
              e.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(U.c)([f.a], e.prototype, "LoadMoreModerationEvents", null),
            Object(U.c)(
              [f.a],
              e.prototype,
              "UpdateQueryParametersAndLoadMoreEvents",
              null
            ),
            Object(U.c)([f.a], e.prototype, "OnScroll", null),
            Object(U.c)([f.a], e.prototype, "OnDateChange", null),
            Object(U.c)([f.a], e.prototype, "IsValidDate", null),
            Object(U.c)([f.a], e.prototype, "OnEventPerPageLoad", null),
            Object(U.c)([f.a], e.prototype, "OnChangeEventSelectedTags", null),
            Object(U.c)([f.a], e.prototype, "OnChangeEventExcludeTags", null),
            Object(U.c)([f.a], e.prototype, "OnChangeEventTypeFilter", null),
            Object(U.c)(
              [f.a],
              e.prototype,
              "OnVisibilityStartTimeChange",
              null
            ),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Fa = Object(i.h)(Ra),
        Pa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingEvent: !B.c.BHasClanEventModel(
                  e.props.solrData.unique_id
                ),
                bShowAsModal: !1,
                bSavingModeration: !1
              }),
              (e.m_cancelSignal = E.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var e,
                a = this,
                t = this.props.solrData,
                n = t.unique_id;
              B.c.BHasClanEventModel(n) ||
                ((e = Date.now() / 1e3),
                B.c
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new L.a(t.clan_steamid),
                    n,
                    e
                  )
                  .then(function() {
                    return a.setState({ bLoadingEvent: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(H.a)(e);
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
                B.c.BHasClanEventModel(e) &&
                this.setState({ bShowAsModal: !0 });
            }),
            (e.prototype.HideModalEvent = function() {
              this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
            }),
            (e.prototype.OnModeratedChanged = function(e) {
              var t, a, n, r;
              this.state.bSavingModeration ||
                ((t = this.props.solrData.unique_id),
                (a = B.c.GetClanEventModel(t)),
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c, d;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props.solrData),
                        (a = t.unique_id),
                        (n = B.c.GetClanEventModel(a)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (r = new Array()),
                        (o = new Array()),
                        (i =
                          n.BHasTag("mod_reviewed") &&
                          !n.BHasTag("mod_require_rereview")),
                        (l = new ka().SetReviewAction(!i)),
                        i
                          ? r.push("mod_require_rereview")
                          : (r.push("mod_reviewed"),
                            o.push("mod_require_rereview"),
                            n.BHasTag("mod_require_rereview") &&
                              l.SetReReviewAction(!i)),
                        [
                          4,
                          ja.UpdateTagsOnPartnerEvent(
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
                        (d = Object(H.a)(c)),
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
                a = B.c.GetClanEventModel(t.unique_id);
              Object(l.d)(
                z.createElement(Za, { eventModel: a }),
                Object(Z.n)(e)
              );
            }),
            (e.prototype.OnUpdateSeasonalTag = function(e) {
              var t = this.props.solrData,
                a = B.c.GetClanEventModel(t.unique_id);
              Object(l.d)(
                z.createElement(qa, { eventModel: a }),
                Object(Z.n)(e)
              );
            }),
            (e.prototype.render = function() {
              var e = this.props.solrData,
                t = e.unique_id,
                a = Number(e.appid),
                n = Object(v.e)(q.c.LANGUAGE),
                r = B.c.GetClanEventModel(t);
              if (r) {
                if (this.state.bShowAsModal)
                  return z.createElement(
                    P.h,
                    { className: Ba.StoreHeaderAdjust },
                    z.createElement(
                      "div",
                      null,
                      z.createElement(Aa.b, {
                        event: r,
                        fnClose: this.HideModalEvent
                      })
                    )
                  );
                var o = r.GetImageForSizeAsArrayWithFallback(
                    "capsule",
                    n,
                    De.c.capsule_main
                  ),
                  i = r.BImageNeedScreenshotFallback("capsule", n),
                  l =
                    0 < o.length
                      ? z.createElement(
                          z.Fragment,
                          null,
                          z.createElement(Na.a, { rgSources: o }),
                          i &&
                            z.createElement(
                              "div",
                              { className: Ga.NoCapsule },
                              Object(Y.d)("#EventModTile_FallbackImageText")
                            )
                        )
                      : z.createElement(
                          "div",
                          { className: Ga.NoCapsule },
                          Object(Y.d)("#EventModTile_NoCapsule")
                        );
              } else l = Object(Y.d)("#Loading");
              var s = e.hidden
                  ? e.published
                    ? Object(Y.d)("#EVentModTile_State_Staged")
                    : Object(Y.d)("#EVentModTile_State_Draft")
                  : Object(Y.d)("#EVentModTile_State_Published"),
                c = r ? r.type : Number(e.event_type);
              return z.createElement(
                b.a,
                null,
                z.createElement(
                  "div",
                  { className: Ga.Tile },
                  z.createElement(
                    "div",
                    { className: Ga.TileCapsule, onClick: this.ShowModalEvent },
                    l
                  ),
                  z.createElement(
                    "div",
                    { className: Ga.TileDetails },
                    z.createElement(
                      "div",
                      { className: Ga.DetailsLeft },
                      z.createElement("div", null, s),
                      z.createElement(
                        "a",
                        {
                          href:
                            (q.c.IN_CLIENT ? "steam://openurl/" : "") +
                            q.c.COMMUNITY_BASE_URL +
                            "ogg/" +
                            a +
                            "/announcements/detail/" +
                            e.announcement_gid,
                          target: q.c.IN_CLIENT ? void 0 : "_blank",
                          className: Ga.EventTitle
                        },
                        e.event_name
                      ),
                      z.createElement(
                        "div",
                        {
                          className: Object(V.a)(
                            1 == c ? Ga.TileEventOtherType : ""
                          )
                        },
                        r ? r.GetCategoryAsString() : e.event_type
                      ),
                      this.state.bLoadingEvent &&
                        z.createElement(J.a, {
                          size: "small",
                          string: Object(Y.d)("#Loading")
                        }),
                      z.createElement(za, {
                        accountID: Number(e.creator_accountid),
                        locToken: "#EventModTile_Author"
                      }),
                      Boolean(
                        e.updator_accountid &&
                          0 < Number(e.updator_accountid) &&
                          e.updator_accountid != e.creator_accountid
                      ) &&
                        z.createElement(za, {
                          accountID: Number(e.updator_accountid),
                          locToken: "#EventModTile_Updator"
                        }),
                      z.createElement(Wa, {
                        appid: a,
                        clanSteamID: new L.a(e.clan_steamid)
                      })
                    ),
                    r &&
                      z.createElement(
                        z.Fragment,
                        null,
                        z.createElement(
                          "div",
                          { className: Ga.DetailsMiddle },
                          z.createElement(
                            "div",
                            { className: Ga.ModeratedFlagCtn },
                            z.createElement("input", {
                              type: "checkbox",
                              id: r.GID + "_moderated",
                              checked: Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ),
                              onChange: this.OnModeratedChanged
                            }),
                            z.createElement(
                              "label",
                              { htmlFor: r.GID + "_moderated" },
                              this.state.bSavingModeration &&
                                z.createElement(J.a, { size: "small" }),
                              Boolean(!r.BHasTag("mod_reviewed")) &&
                                Object(Y.d)("#EventModTile_Moderated_Review"),
                              Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ) && Object(Y.d)("#EventModTile_Moderated"),
                              Boolean(r.BHasTag("mod_require_rereview")) &&
                                Object(Y.d)("#EventModTile_Moderated_ReReview")
                            )
                          ),
                          z.createElement(
                            "button",
                            {
                              className: Object(V.a)(Q.a.Button, Ga.Button),
                              onClick: this.OnChangeCategory
                            },
                            Object(Y.d)("#EventModTile_ChangeEventType")
                          ),
                          r.BHasTag("halloween2019candidate") &&
                            z.createElement(
                              "button",
                              {
                                className: Object(V.a)(Q.a.Button),
                                onClick: this.OnUpdateSeasonalTag
                              },
                              Object(Y.d)("#EventModTile_SeasonalTag")
                            ),
                          z.createElement(Ya, { eventModel: r })
                        ),
                        z.createElement(
                          "div",
                          { className: Ga.DetailsRight },
                          z.createElement(La.b, {
                            event: r,
                            stylesmodule: Ga,
                            nOverrideEndTime: r.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: r.GetStartTimeAndDateUnixSeconds()
                          }),
                          z.createElement(Ua, { event: r }),
                          z.createElement(Va, { event: r })
                        )
                      )
                  )
                )
              );
            }),
            Object(U.c)([f.a], e.prototype, "ShowModalEvent", null),
            Object(U.c)([f.a], e.prototype, "HideModalEvent", null),
            Object(U.c)([f.a], e.prototype, "OnModeratedChanged", null),
            Object(U.c)([f.a], e.prototype, "ApplyModerationToggle", null),
            Object(U.c)([f.a], e.prototype, "OnChangeCategory", null),
            Object(U.c)([f.a], e.prototype, "OnUpdateSeasonalTag", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component);
      function Ha(e) {
        return L.a.InitFromAccountID(e).ConvertTo64BitString();
      }
      var za = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                userProfile: Da.a.GetProfile(Ha(e.props.accountID)),
                bLoadingProfile: !Da.a.BHasProfile(Ha(e.props.accountID))
              }),
              (e.m_cancelSignal = E.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.state.bLoadingProfile && this.LoadProfile();
            }),
            (e.prototype.LoadProfile = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = Ha(this.props.accountID)), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]), [4, Da.a.LoadProfiles([t])]
                      );
                    case 2:
                      return e.sent(), [3, 4];
                    case 3:
                      return (
                        (a = e.sent()),
                        (n = Object(H.a)(a)),
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
                            userProfile: Da.a.GetProfile(t),
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
                  (q.c.IN_CLIENT ? "steam://openurl/" : "") +
                  "https://steamsupport.valvesoftware.com/account/overview/" +
                  Ha(this.props.accountID);
              return z.createElement(
                "div",
                null,
                Object(Y.l)(
                  a,
                  z.createElement(
                    "a",
                    { href: r, target: q.c.IN_CLIENT ? void 0 : "_blank" },
                    Boolean(n)
                      ? z.createElement(z.Fragment, null, n.persona_name)
                      : z.createElement(
                          z.Fragment,
                          null,
                          this.state.bLoadingProfile &&
                            z.createElement(J.a, { size: "small" }),
                          z.createElement("span", null, t)
                        )
                  )
                )
              );
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Ua = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bDownloadingImages: !1, nLocLanguages: 0 }),
              (e.m_cancelSignal = E.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(U.d)(e, t),
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
              B.c
                .LoadClanEventLocalizationFromAnnouncementGID(
                  e.clanSteamID,
                  e.AnnouncementGID
                )
                .then(function(e) {
                  a.m_cancelSignal.token.reason ||
                    a.setState({ nLocLanguages: e.length });
                })
                .catch(function(e) {
                  var t = Object(H.a)(e);
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
              return z.createElement(
                "div",
                { className: Ga.AnalysisCtn },
                z.createElement(
                  "div",
                  { className: Ga.TileTitle },
                  Object(Y.d)("#EventModTile_Analysis")
                ),
                z.createElement(
                  "div",
                  null,
                  Object(Y.d)("#EventModTile_Stats_Comments", e.nCommentCount)
                ),
                z.createElement(
                  "div",
                  null,
                  Object(Y.d)("#EventModTile_Stats_VoteUp", e.nVotesUp)
                ),
                z.createElement(
                  "div",
                  null,
                  Object(Y.d)("#EventModTile_Stats_VoteDown", e.nVotesDown)
                ),
                Boolean(t) &&
                  z.createElement(
                    "div",
                    { className: Ga.ArtHeader },
                    Object(Y.d)("#EventModTile_ImageAnalysis_Header", t),
                    " "
                  ),
                Boolean(a) &&
                  z.createElement(
                    "div",
                    null,
                    Object(Y.d)("#EventModTile_ImageAnalysis_Capsule", a),
                    " "
                  ),
                Boolean(n) &&
                  z.createElement(
                    "div",
                    { className: Ga.ArtSpotlight },
                    Object(Y.d)("#EventModTile_ImageAnalysis_Spotlight", n),
                    " "
                  ),
                Boolean(r) &&
                  z.createElement(
                    "div",
                    null,
                    Object(Y.d)("#EventModTile_ImageAnalysis_Broadcast", r),
                    " "
                  ),
                0 == o &&
                  z.createElement(
                    "div",
                    { className: Ga.AnalysisMissing },
                    Object(Y.d)("#EventModTile_ImageAnalysis_None"),
                    " "
                  ),
                0 == this.state.nLocLanguages &&
                  z.createElement(J.a, {
                    size: "small",
                    string: Object(Y.d)("#EventModTile_LoadingLocs")
                  }),
                0 < this.state.nLocLanguages &&
                  z.createElement(
                    "div",
                    null,
                    Object(Y.d)(
                      "#EventModTile_Languages",
                      this.state.nLocLanguages
                    )
                  ),
                Boolean(i) &&
                  z.createElement(
                    "div",
                    null,
                    Object(Y.d)("#EventModTile_Languages_Summary", i),
                    " "
                  ),
                Boolean(l) &&
                  z.createElement(
                    "div",
                    null,
                    Object(Y.d)("#EventModTile_Languages_Subtitle", l),
                    " "
                  )
              );
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Wa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingAppInfo: !_.a.BIsAppidLoaded(e.props.appid)
              }),
              (e.m_cancelSignal = E.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(U.d)(e, t),
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
                    var t = Object(H.a)(e);
                    console.error(
                      "EventModerationChannelInfo: App Load: " + t.strErrorMsg,
                      t
                    ),
                      a.m_cancelSignal.token.reason ||
                        a.setState({ bLoadingAppInfo: !1 });
                  }),
                n && S.a.LoadClanInfoForClanSteamID(n);
            }),
            (e.prototype.render = function() {
              if (this.state.bLoadingAppInfo)
                return z.createElement(J.a, {
                  size: "small",
                  string: Object(Y.d)("#EventModTile_AppInfoLoading")
                });
              var e = this.props,
                t = e.appid,
                a = e.clanSteamID;
              if (t) {
                var n = _.a.GetStoreCapsuleInfo(t).GetAppStoreData();
                return z.createElement(
                  "div",
                  { className: Ga.TileAppInfo },
                  z.createElement(
                    "div",
                    { className: Ga.TileAppInfoTitle },
                    z.createElement(
                      y.a,
                      { href: n.capsule_link },
                      z.createElement("img", {
                        className: Ga.TileAppInfoImage,
                        src: n.capsule
                      }),
                      z.createElement(
                        "div",
                        null,
                        Object(Y.d)("#EventModTile_GameName", n.title)
                      )
                    )
                  ),
                  z.createElement(
                    "div",
                    null,
                    Object(Y.d)("#EventModTile_ReleaseDate", n.release)
                  )
                );
              }
              if (a) {
                var r = a.GetAccountID(),
                  o = S.a.GetClanInfoByClanAccountID(r);
                if (o && o.is_curator)
                  return z.createElement(
                    "div",
                    { className: Ga.TileAppInfo },
                    z.createElement(
                      "div",
                      { className: Ga.TileAppInfoTitle },
                      z.createElement(
                        y.a,
                        { href: q.c.STORE_BASE_URL + "/curator/" + r + "/" },
                        z.createElement("img", {
                          className: Ga.TileAppInfoImage,
                          src: o.avatar_full_url
                        }),
                        z.createElement(
                          "div",
                          null,
                          Object(Y.d)("#EventModTile_CuratorName", o.group_name)
                        )
                      )
                    )
                  );
              }
              return null;
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Va = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.render = function() {
              var e = this.props.event,
                t = Object(Ta.d)(e),
                a = Object(Ta.c)(e),
                n = Object(Ta.e)(e),
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
              return z.createElement(
                "div",
                { className: Ga.VisibiltyCtn },
                z.createElement(
                  "div",
                  { className: Ga.TileTitle },
                  Object(Y.d)("#EventModTile_Visibility")
                ),
                z.createElement(
                  "div",
                  null,
                  Object(Y.d)(
                    "#EventModTile_Store_Visibility",
                    r
                      ? Object(Y.d)("#WriteReview_Dialog_Yes")
                      : Object(Y.d)("#WriteReview_Dialog_No"),
                    r
                      ? ""
                      : n
                      ? Object(Y.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_store")
                      ? Object(Y.d)("#EventModTime_Hidden_OptOut")
                      : Object(Y.d)("#EventModTime_Hidden_Moderator")
                  )
                ),
                z.createElement(
                  "div",
                  null,
                  Object(Y.d)(
                    "#EventModTile_LibraryHome_Visibility",
                    o
                      ? Object(Y.d)("#WriteReview_Dialog_Yes")
                      : Object(Y.d)("#WriteReview_Dialog_No"),
                    o
                      ? ""
                      : n
                      ? Object(Y.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_overview")
                      ? Object(Y.d)("#EventModTime_Hidden_OptOut")
                      : Object(Y.d)("#EventModTime_Hidden_Moderator")
                  )
                ),
                z.createElement(
                  "div",
                  null,
                  Object(Y.d)(
                    "#EventModTile_LibraryDetail_Visibility",
                    i
                      ? Object(Y.d)("#WriteReview_Dialog_Yes")
                      : Object(Y.d)("#WriteReview_Dialog_No"),
                    i
                      ? ""
                      : n
                      ? Object(Y.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_detail")
                      ? Object(Y.d)("#EventModTime_Hidden_OptOut")
                      : Object(Y.d)("#EventModTime_Hidden_Moderator")
                  )
                )
              );
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Za = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                newCategoryOption: {
                  label: Object(ze.b)(34),
                  value: { eventType: 34 }
                }
              }),
              (e.m_cancelSignal = E.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.ChangeCategoryForEvent = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c, d;
                return Object(U.e)(this, function(e) {
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
                          ja.UpdatePartnerEventType(
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
                        (i = Ta.o),
                        (l = []),
                        r.value.tags &&
                          r.value.tags.forEach(function(e) {
                            l.push(e);
                            var t = new ka()
                              .SetUpdateSeasonalTags(e)
                              .ToModString();
                            l.push(t);
                          }),
                        [
                          4,
                          ja.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.GetAnnouncementGID(),
                            l,
                            i,
                            new ka().SetActionChangeEvent(o)
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
                        (d = Object(H.a)(c)),
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
                      { label: Object(ze.b)(e), value: t }
                    );
                  });
              return (
                r.push({
                  label: Object(Y.d)("#PartnerEvent_Curator_Group_Members"),
                  value: {
                    eventType: 28,
                    tags: ["curator", "curator_group_members"]
                  }
                }),
                r.push({
                  label: Object(Y.d)("#PartnerEvent_Curator_Public"),
                  value: { eventType: 28, tags: ["curator", "curator_public"] }
                }),
                z.createElement(
                  P.c,
                  {
                    strTitle: Object(Y.d)("#EventModTile_ChangeEventType"),
                    strDescription: Object(Y.d)(
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
                  z.createElement(
                    z.Fragment,
                    null,
                    z.createElement(
                      "div",
                      { className: Ga.CategoryChangeDialog },
                      z.createElement("br", null),
                      this.state.bUpdating &&
                        z.createElement(J.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        z.createElement(
                          "div",
                          null,
                          Object(Y.d)("#Chat_Settings_Error_ServerError"),
                          z.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      z.createElement(wa.a, {
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
            Object(U.c)([f.a], e.prototype, "ChangeCategoryForEvent", null),
            Object(U.c)([f.a], e.prototype, "OnChangeSelection", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Ya = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bCollapsed: !0 }), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.RenderModAction = function(e) {
              var t = Object(Y.i)(e.m_rtWhen),
                a = z.createElement(za, {
                  locToken: "#EventModTile_Moderator",
                  accountID: e.m_moderator
                });
              switch (e.m_action) {
                case ha.k_ModReviewed:
                  return z.createElement(
                    "div",
                    { className: Ga.ModeratorAuditActionCtn },
                    Object(Y.l)(
                      "#EventModTile_Action_Reviewed",
                      z.createElement("span", null, t),
                      a
                    )
                  );
                case ha.k_ModUnreviewed:
                  return z.createElement(
                    "div",
                    { className: Ga.ModeratorAuditActionCtn },
                    Object(Y.l)(
                      "#EventModTile_Action_UnReviewed",
                      z.createElement("span", null, t),
                      a
                    )
                  );
                case ha.k_ChangeEventType:
                  return z.createElement(
                    "div",
                    { className: Ga.ModeratorAuditActionCtn },
                    Object(Y.l)(
                      "#EventModTile_Action_NewEventType",
                      z.createElement("span", null, t),
                      a,
                      Object(ze.b)(e.m_newEventType)
                    )
                  );
                case ha.k_UpdateSeasonTags:
                  return z.createElement(
                    "div",
                    { className: Ga.ModeratorAuditActionCtn },
                    Object(Y.l)(
                      "#EventModTile_Action_SeasonTagUpdate",
                      z.createElement("span", null, t),
                      a,
                      e.m_newTagAdded
                    )
                  );
                default:
                  return z.createElement(
                    "div",
                    { className: Ga.ModeratorAuditActionCtn },
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
                  var t = new ka();
                  t.FromString(e),
                    n.push(
                      z.createElement(
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
                  return ka.IsAuditAction(e);
                }),
                a = t.length,
                n = 3 < t.length && this.state.bCollapsed;
              if (0 == t.length) return null;
              n && (t = t.splice(0, 3));
              var r = this.RenderAudit(t);
              return z.createElement(
                "div",
                null,
                z.createElement(
                  "h4",
                  null,
                  Object(Y.d)("#EventModTile_Action_Title")
                ),
                r,
                n &&
                  z.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !1 });
                      }
                    },
                    Object(Y.d)("#EventModTile_Action_More", a - 3)
                  ),
                Boolean(!n && 3 < a) &&
                  z.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !0 });
                      }
                    },
                    Object(Y.d)("#EventModTile_Action_Hide")
                  )
              );
            }),
            e
          );
        })(z.Component),
        qa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                bAccept: e.props.eventModel.BHasTag("halloween2019"),
                bHorror: e.props.eventModel.BHasTag("horror"),
                bCute: e.props.eventModel.BHasTag("cute")
              }),
              (e.m_cancelSignal = E.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(U.d)(e, t),
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i;
                return Object(U.e)(this, function(e) {
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
                          ja.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            t,
                            a,
                            new ka().SetUpdateSeasonalTags(
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
                        (i = Object(H.a)(o)),
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
              return z.createElement(
                P.c,
                {
                  strTitle: Object(Y.d)("#EventModTile_SeasonalTag"),
                  onCancel: a,
                  onOK: function() {
                    return e.setState({ bUpdating: !0 }, e.ApplyAction);
                  }
                },
                z.createElement(
                  z.Fragment,
                  null,
                  z.createElement(
                    "div",
                    { className: Ga.CategoryChangeDialog },
                    z.createElement("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance
                    }),
                    z.createElement(
                      "label",
                      { htmlFor: "Acceptance" },
                      Object(Y.d)("#EventModTile_SeasonalTag_Desc")
                    ),
                    z.createElement(
                      "div",
                      null,
                      Object(Y.d)("#EventModTile_SeasonalTag_Desc_Secondary")
                    ),
                    z.createElement("input", {
                      id: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror
                    }),
                    z.createElement(
                      "label",
                      { htmlFor: "Horror" },
                      "Horror Tag"
                    ),
                    z.createElement("input", {
                      id: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute
                    }),
                    z.createElement("label", { htmlFor: "Cute" }, "Cute Tag"),
                    this.state.bUpdating &&
                      z.createElement(J.a, { size: "small" }),
                    this.state.strErrorMsg &&
                      z.createElement(
                        "div",
                        null,
                        Object(Y.d)("#Chat_Settings_Error_ServerError"),
                        z.createElement("br", null),
                        this.state.strErrorMsg
                      )
                  )
                )
              );
            }),
            Object(U.c)([f.a], e.prototype, "ChangeAcceptance", null),
            Object(U.c)([f.a], e.prototype, "ChangeHorror", null),
            Object(U.c)([f.a], e.prototype, "ChangeCute", null),
            Object(U.c)([f.a], e.prototype, "ApplyAction", null),
            e
          );
        })(z.Component),
        Qa = a("gOcu"),
        Ja = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoadingEvent: !0 }),
              (e.m_cancelSignal = E.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "SteamGameFestivalStoreDebug to unload "
              );
            }),
            (e.prototype.componentDidMount = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return ((t = this.props),
                      (a = t.clanEventGID),
                      (n = t.clanAccountID),
                      console.log(a, n, typeof a, typeof n),
                      !a || B.c.BHasClanEventModel(a))
                        ? [3, 8]
                        : ((r = L.a.InitFromClanID(Number.parseInt(n))),
                          [
                            4,
                            B.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
                          [4, Xe.a.LoadAppLinkInfo(i)])
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
                        Qa.a
                          .Get()
                          .SetCollectionInfo(
                            "gamefestival2020",
                            "gamefestival2020info"
                          ),
                        [
                          4,
                          Qa.a.Get().LoadAppIDsBatch(i, !1, this.m_cancelSignal)
                        ]
                      );
                    case 4:
                      return (
                        e.sent(),
                        (c = new Array()),
                        Qa.a
                          .Get()
                          .GetAllDemoInfo()
                          .forEach(function(e) {
                            return c.push(e.demo_appid);
                          }),
                        [4, Xe.a.LoadAppLinkInfo(c)]
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
                return z.createElement(J.a, {
                  string:
                    Object(Y.d)("#Loading") +
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
                return z.createElement("div", null, " Failed to load event");
              var e = this.state.event;
              if (!e.jsondata.bSaleEnabled)
                return z.createElement("div", null, "Not a sale evnet");
              var n = new Map();
              this.state.rgDemoIDs.forEach(function(e) {
                return n.set(e, !0);
              });
              var a = new Array(),
                r = new Array();
              Xe.a.GetMissingAppIDs().forEach(function(e, t) {
                a.push(
                  z.createElement(
                    "div",
                    { key: "missing: " + t },
                    z.createElement(
                      "a",
                      {
                        href: q.c.STORE_BASE_URL + "app/" + t + "/?beta=1",
                        target: "_blank"
                      },
                      t
                    )
                  )
                ),
                  r.push(t);
              });
              var o = new Array();
              Xe.a.GetAllLoadedAppLinks().forEach(function(e, t) {
                var a;
                n.has(t) ||
                  Qa.a.Get().BHasDemoAppID(t) ||
                  ((a = Xe.a.GetAppLinkInfo(t)),
                  o.push(
                    z.createElement(
                      "div",
                      { key: "missingdemo_" + t },
                      "demo" == a.type &&
                        z.createElement(
                          "b",
                          null,
                          "--Error: Sale Page has Demo AppID, based game -- "
                        ),
                      a.name,
                      " (",
                      t,
                      ")",
                      z.createElement(
                        "a",
                        {
                          href: q.c.STORE_BASE_URL + "app/" + t + "/?beta=0",
                          target: "_blank"
                        },
                        "Store Page"
                      ),
                      " ",
                      z.createElement(
                        "a",
                        {
                          href: q.c.PARTNER_BASE_URL + "apps/landing/" + t,
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
                u = 0,
                p = 0;
              _.a.GetAllAppInfos().forEach(function(e, t) {
                var a,
                  n = !1;
                e.BIsLoaded() &&
                  Qa.a.Get().BHasDemoAppID(t) &&
                  ((a = Qa.a.Get().GetDemoEventInfo(t)),
                  Xe.a.GetAppLinkInfo(a.demo_appid).coming_soon
                    ? ((c += 1), (n = !0))
                    : (d += 1)),
                  e.BIsLoaded() && e.GetAppStoreData().BHasDemoAppID()
                    ? ((i += 1), n && (u += 1))
                    : e.BIsLoaded() && Qa.a.Get().BHasDemoAppID(t)
                    ? ((l += 1), n || (p += 1))
                    : -1 ==
                        r.findIndex(function(e) {
                          return e == t;
                        }) && s.push(e.GetAppStoreData());
              });
              var t = new Array();
              s.forEach(function(e) {
                t.push(
                  z.createElement(
                    "div",
                    { key: "missing_capps" + e.appid },
                    z.createElement(
                      "a",
                      {
                        href:
                          q.c.STORE_BASE_URL + "app/" + e.appid + "/?beta=1",
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
              Qa.a
                .Get()
                .GetAllDemoInfo()
                .forEach(function(e) {
                  e.info_clan_event_gid && (m += 1);
                });
              var h = 0;
              return (
                Xe.a.GetAllLoadedAppLinks().forEach(function(e) {
                  "demo" != e.type && (h += 1);
                }),
                z.createElement(
                  b.a,
                  null,
                  z.createElement(
                    "h1",
                    null,
                    e.GetNameWithFallback(Object(v.e)(q.c.LANGUAGE))
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement("b", null, "Unique AppIDs:"),
                    " ",
                    this.state.rgAppIDs.length,
                    " "
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement(
                      "b",
                      null,
                      "Visible Apps in ",
                      q.c.COUNTRY,
                      ":"
                    ),
                    " ",
                    h
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement("b", null, "Unknown AppID types:"),
                    " ",
                    this.state.rgUnknownTypeAppIDs.length
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement("b", null, "Missing AppIDs:"),
                    " ",
                    Xe.a.GetNumMissingAppLinks(),
                    " "
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement("b", null, "Demo via DemoStore:"),
                    " ",
                    Qa.a.Get().GetNumDemos()
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement(
                      "b",
                      null,
                      "Visible apps missing demo store:"
                    ),
                    " ",
                    o.length
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement("b", null, "CApplications Loaded:"),
                    " ",
                    _.a.GetNumAppLinkLoaded(),
                    " "
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement(
                      "b",
                      null,
                      "CApplication with Associated Demos:"
                    ),
                    " ",
                    i
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement(
                      "b",
                      null,
                      "  Associated with store page but not released: "
                    ),
                    " ",
                    u
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement(
                      "b",
                      null,
                      "CApplication with demo without association:"
                    ),
                    " ",
                    l
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement(
                      "b",
                      null,
                      "  Released but not associated with store page: "
                    ),
                    " ",
                    p
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement("b", null, "CApplication missing:"),
                    " ",
                    _.a.GetMissingAppIDs().size
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement(
                      "b",
                      null,
                      "CApplication without demo store and demo associations:"
                    ),
                    " ",
                    s.length
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement("b", null, "Quick Pitches: "),
                    m
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement("b", null, "Released Demo: "),
                    d
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement("b", null, "Unreleased Demo: "),
                    c
                  ),
                  z.createElement("hr", null),
                  z.createElement("h2", null, "Missing Appids:"),
                  a,
                  z.createElement(
                    "h2",
                    null,
                    "Missing BOTH demo list and associated demo on product page:"
                  ),
                  t,
                  z.createElement(
                    "h2",
                    null,
                    "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):"
                  ),
                  o
                )
              );
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Ka = new ((function() {
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
            Object(U.c)([m.y], e.prototype, "m_backfill", void 0),
            Object(U.c)([m.y], e.prototype, "m_mapEventGIDProcessed", void 0),
            Object(U.c)([m.y], e.prototype, "m_bBackfillInProgress", void 0),
            Object(U.c)([m.y], e.prototype, "m_nProcessed", void 0),
            Object(U.c)([m.y], e.prototype, "m_nSuccesses", void 0),
            Object(U.c)([m.y], e.prototype, "m_nFailures", void 0),
            Object(U.c)([m.y], e.prototype, "m_nWarning", void 0),
            Object(U.c)([m.y], e.prototype, "m_nSkipped", void 0),
            Object(U.c)([m.h], e.prototype, "StartBackfill", null),
            Object(U.c)([m.h], e.prototype, "CompleteBackfill", null),
            Object(U.c)([m.h], e.prototype, "CloseProgress", null),
            e
          );
        })())(),
        Xa = a("vNkc"),
        $a = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = E.a.CancelToken.source()),
              (e.m_nImageID = 0),
              (e.m_mapArtworkResizeSuccess = new Map()),
              (e.state = { eBackfillState: void 0 }),
              e
            );
          }
          return (
            Object(U.d)(e, t),
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
                    var t = Object(H.a)(e);
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
                Object(U.b)(this, void 0, void 0, function() {
                  var t, a;
                  return Object(U.e)(this, function(e) {
                    return (
                      (t = De.a.GetExtensionTypeFromURL(r)),
                      (a = De.a.GetHashFromHashAndExt(r) + o),
                      [
                        2,
                        De.e.AsyncGetImageResolution(
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
              var r = Object(H.a)(t),
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
                    Ka.CloseProgress(e, n))
                  : Ka.CompleteBackfill("resize_image");
            }),
            (e.prototype.HandleResizeForImageType = function(u, p, m, h, v) {
              return Object(U.b)(this, void 0, void 0, function() {
                var t,
                  c,
                  a,
                  d = this;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = function(t) {
                        var a, n, r, o, i, l, s;
                        return Object(U.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return u[t] && 0 < u[t].length
                                ? ((a = u[t]),
                                  (n = De.a.GetExtensionTypeFromURL(a)),
                                  (r = new L.a(p.clan_steamid)),
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
                                Object(Ta.j)(o.width, o.height, h)
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
                                (i = De.a.GetHashFromHashAndExt(a)),
                                (l = De.a.GetExtensionStringFromHashAndExt(a)),
                                (s = De.d.GetResizeDimension(h)),
                                [
                                  4,
                                  De.b
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
                                      var t = Object(H.a)(e);
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
                      return a < u.length && a < 29 ? [5, t(a)] : [3, 4];
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t,
                  i,
                  a,
                  l,
                  n,
                  s = this;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      Ka.StartBackfill("resize_image"), (t = 0), (e.label = 1);
                    case 1:
                      return Ka.BIsBackkFillInProgress()
                        ? [
                            4,
                            ja
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
                          Ka.CompleteBackfill("resize_image"),
                          console.log("Compelted the backfill"),
                          [3, 7]
                        );
                      (t += i.length),
                        (a = function(t) {
                          var a, n, r, o;
                          return Object(U.e)(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return (
                                  (a = i[t]),
                                  (n = Ka.CreateOrGetBackfillProgess(
                                    a.unique_id
                                  )),
                                  a.announcement_gid &&
                                  0 != a.announcement_gid.length
                                    ? [
                                        4,
                                        B.c
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
                                      Ka.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                );
                              case 1:
                                return (e.sent(), n.bFailed)
                                  ? [2, "continue"]
                                  : (r = B.c.GetClanEventFromAnnouncementGID(
                                      a.announcement_gid
                                    ))
                                  ? n.bSucceeded ||
                                    n.bFailed ||
                                    n.bAlreadyProcessed
                                    ? ((n.bAlreadyProcessed = !0),
                                      Ka.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                    : ((n.bAnalysing = !0),
                                      l.setState({
                                        strInfo:
                                          "Processing " +
                                          Ka.GetBackfillGIDs().length +
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
                                                De.c.capsule_main
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
                                    Ka.CloseProgress(a.unique_id, n),
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
                                          De.c.background_mini
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
                                          De.c.spotlight_main
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
                                  Ka.CloseProgress(a.unique_id, n),
                                  Ka.BIsBackkFillInProgress()
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
                      return 5e3 < Ka.m_nFailures
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
                0 < Ka.m_nFailures &&
                  Ka.GetBackfillGIDs().forEach(function(e) {
                    var t,
                      a = Ka.GetEventBackfillProgress().get(e);
                    a &&
                      a.bFailed &&
                      ((t = B.c.GetClanEventModel(e)) &&
                        n.push(
                          z.createElement(
                            "div",
                            { key: e },
                            z.createElement(
                              Ue.c,
                              {
                                eventModel: t,
                                route: Ue.a.k_eView,
                                openNewWindow: !0
                              },
                              t.GetNameWithFallback(0)
                            ),
                            z.createElement(
                              "div",
                              { className: Xa.Error },
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
                  z.createElement(
                    "div",
                    { key: "res_capsule" },
                    "Capsule Resized: ",
                    this.m_mapArtworkResizeSuccess.get("capsule"),
                    " "
                  )
                ),
                e.push(
                  z.createElement(
                    "div",
                    { key: "res_header" },
                    "Header Resized: ",
                    this.m_mapArtworkResizeSuccess.get("background"),
                    " "
                  )
                ),
                e.push(
                  z.createElement(
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
              return z.createElement(
                "div",
                null,
                z.createElement(
                  "h2",
                  null,
                  "Partner Events Backfill Processing Page"
                ),
                null == this.state.eBackfillState &&
                  z.createElement(
                    "div",
                    null,
                    z.createElement(
                      "button",
                      { onClick: this.OnArtworkResizeBackfill },
                      "Begin Artwork Resize Backfill"
                    )
                  ),
                z.createElement(
                  "div",
                  null,
                  z.createElement(
                    "button",
                    {
                      onClick: function() {
                        return Ka.CompleteBackfill("resize_image");
                      }
                    },
                    "Stop Backfill"
                  )
                ),
                this.state.strInfo &&
                  z.createElement(
                    "div",
                    null,
                    "Processing: ",
                    this.state.strInfo
                  ),
                z.createElement(
                  "div",
                  null,
                  "Events Processed: ",
                  Ka.m_nProcessed
                ),
                z.createElement(
                  "div",
                  null,
                  "Events Succeeded: ",
                  Ka.m_nSuccesses
                ),
                z.createElement("div", null, "Events Warning: ", Ka.m_nWarning),
                z.createElement("div", null, "Events Failed: ", Ka.m_nFailures),
                z.createElement("div", null, "Events Skipped: ", Ka.m_nSkipped),
                0 < e.length &&
                  z.createElement(
                    z.Fragment,
                    null,
                    z.createElement("h2", null, "Failure Info"),
                    e
                  ),
                Boolean(t) &&
                  z.createElement(
                    "div",
                    null,
                    z.createElement("h2", null, "Resizing Actions"),
                    t
                  ),
                "started" == this.state.eBackfillState &&
                  z.createElement(J.a, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress"
                  })
              );
            }),
            Object(U.c)([f.a], e.prototype, "OnArtworkResizeBackfill", null),
            Object(U.c)([f.a], e.prototype, "BeginArtworkResize", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        en = a("nWbB"),
        tn = new ((function() {
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(U.e)(this, function(e) {
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
                        (a = Object(q.f)(t, "application_config"))
                          ? [3, 2]
                          : [
                              4,
                              E.a.get(
                                q.c.STORE_BASE_URL + "actions/ajaxgetdiscounts",
                                {
                                  params: Object(U.a)(Object(U.a)({}, o), {
                                    cc: q.c.COUNTRY
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
                        (r = e.sent()), console.error(Object(H.a)(r)), [3, 4]
                      );
                    case 4:
                      return [2, []];
                  }
                });
              });
            }),
            (e.prototype.GetTopN = function(a, n) {
              return Object(U.b)(this, void 0, void 0, function() {
                var t;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgTopN
                        ? [3, 2]
                        : ((this.m_rgTopN = Object(q.f)(
                            "top_n",
                            "application_config"
                          )),
                          this.m_rgTopN
                            ? [3, 2]
                            : [
                                4,
                                tn.GetDiscounts({
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyWishlistOnSale
                        ? [3, 2]
                        : ((this.m_rgMyWishlistOnSale = Object(q.f)(
                            "wishlist_onsale",
                            "application_config"
                          )),
                          this.m_rgMyWishlistOnSale
                            ? [3, 2]
                            : [
                                4,
                                E.a.get(
                                  q.c.STORE_BASE_URL +
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyDLCForGamesInLibraryOnSale
                        ? [3, 2]
                        : ((this.m_rgMyDLCForGamesInLibraryOnSale = Object(q.f)(
                            "dlc_onsale",
                            "application_config"
                          )),
                          this.m_rgMyDLCForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                E.a.get(
                                  q.c.STORE_BASE_URL +
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMySoundtracksForGamesInLibraryOnSale
                        ? [3, 2]
                        : ((this.m_rgMySoundtracksForGamesInLibraryOnSale = Object(
                            q.f
                          )("dlc_music_onsale", "application_config")),
                          this.m_rgMySoundtracksForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                E.a.get(
                                  q.c.STORE_BASE_URL +
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyInteractiveRecOnSale
                        ? [3, 2]
                        : ((this.m_rgMyInteractiveRecOnSale = Object(q.f)(
                            "ir_onsale",
                            "application_config"
                          )),
                          this.m_rgMyInteractiveRecOnSale
                            ? [3, 2]
                            : [
                                4,
                                E.a.get(
                                  q.c.STORE_BASE_URL +
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMySaleTags
                        ? [3, 2]
                        : ((this.m_rgMySaleTags = Object(q.f)(
                            "saletags",
                            "application_config"
                          )),
                          this.m_rgMySaleTags
                            ? [3, 2]
                            : [
                                4,
                                E.a.get(
                                  q.c.STORE_BASE_URL +
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyTagRecommendation
                        ? [3, 2]
                        : ((this.m_rgMyTagRecommendation = Object(q.f)(
                            "tag_recommender",
                            "application_config"
                          )),
                          this.m_rgMyTagRecommendation
                            ? [3, 2]
                            : ((t =
                                q.c.STORE_BASE_URL +
                                "saleaction/ajaxgetsaletagsrecommendation"),
                              (a = {
                                cc: q.c.COUNTRY,
                                l: q.c.LANGUAGE,
                                clanAccountID: r.clanSteamID.GetAccountID(),
                                clanAnnouncementGID: r.AnnouncementGID,
                                count: o
                              }),
                              [
                                4,
                                E.a.get(t, { params: a, withCredentials: !1 })
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
            (e.prototype.GetFlavorCacheKey = function(e, t, a) {
              return "key-" + e + "-" + (t || "*") + "-" + (a || "");
            }),
            (e.prototype.GetSaleGamesByFlavor = function(m, h, v, _, b, g, y) {
              return (
                void 0 === g && (g = 0),
                void 0 === y && (y = void 0),
                Object(U.b)(this, void 0, void 0, function() {
                  var t, a, n, r, o, i, l, s, c, d, u, p;
                  return Object(U.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (11 == h && (h = void 0),
                        (t = Boolean(y)) && (_ = "search"),
                        (a = this.GetFlavorCacheKey(_, h, y)),
                        !(n = this.m_mapSaleGameListsByFlavor.get(a)) &&
                          ((r =
                            "browser_" +
                            _ +
                            (h ? "_" + h : "_*") +
                            (t ? y : "")),
                          0 <
                            (n = Object(q.f)(r, "application_config") || [])
                              .length))
                          ? (this.m_mapSaleGameListsByFlavor.set(a, n),
                            [2, n.slice(g, b)])
                          : ((o = n.length),
                            0 < (i = g + b - o)
                              ? ((l =
                                  q.c.STORE_BASE_URL +
                                  (m
                                    ? "saleaction/ajaxpreviewsaledynamicappquery"
                                    : "saleaction/ajaxgetsaledynamicappquery")),
                                (s = {
                                  cc: q.c.COUNTRY,
                                  l: q.c.LANGUAGE,
                                  clanAccountID: v.clanSteamID.GetAccountID(),
                                  clanAnnouncementGID: v.AnnouncementGID,
                                  flavor: _,
                                  start: o,
                                  count: Math.max(i, 25),
                                  tabuniqueid: h,
                                  return_capsules: !0,
                                  search: y
                                }),
                                [
                                  4,
                                  E.a.get(l, { params: s, withCredentials: m })
                                ])
                              : [3, 2]);
                      case 1:
                        if (
                          200 != (c = e.sent()).status ||
                          !c.data ||
                          !c.data.appids
                        )
                          throw new Error("query failed, status=" + c.status);
                        for (d = 0, u = c.data.appids; d < u.length; d++)
                          (p = u[d]), n.push(p);
                        c.data.app_info && Xe.a.AddAppLinks(c.data.app_info),
                          (e.label = 2);
                      case 2:
                        return (
                          this.m_mapSaleGameListsByFlavor.set(a, n),
                          [2, n.slice(g, b)]
                        );
                    }
                  });
                })
              );
            }),
            e
          );
        })())(),
        an = new ((function() {
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
                ((e = Object(q.f)("points", "application_config")),
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (this.LazyInit(), this.m_bLoaded || !q.i.logged_in)
                        ? [3, 2]
                        : ((t =
                            q.c.STORE_BASE_URL +
                            "lunarnewyearmarket/ajaxgettokensummary"),
                          [4, E.a.get(t, { withCredentials: !0 })]);
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
              return Object(U.b)(this, void 0, void 0, function() {
                return Object(U.e)(this, function(e) {
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
            Object(U.c)([m.y], e.prototype, "m_mySummary", void 0),
            e
          );
        })())();
      window.g_SaleTokenPointStore = an;
      var nn = new ((function() {
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
                (e.m_userData = Object(q.f)("doorinfo", "application_config")),
                  (e.m_salePageBackgroundOverride = Object(q.f)(
                    "doorinfobackground",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundWEBM = Object(q.f)(
                    "doorinfowebm",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundMP4 = Object(q.f)(
                    "doorinfomp4",
                    "application_config"
                  )),
                  (e.m_storyImages = Object(q.f)(
                    "storyimages",
                    "application_config"
                  )),
                  e.m_storyImages || (e.m_storyImages = new Array(4));
              }),
              (this.m_bLoadedFromConfig = !0));
          }),
          (e.prototype.LoadDoorData = function() {
            return Object(U.b)(this, void 0, void 0, function() {
              var t, a;
              return Object(U.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = q.c.STORE_BASE_URL + "saleaction/ajaxgetopendoor"),
                      [4, E.a.get(t, { withCredentials: !0 })]
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
            var t = G.a.GetTimeNowWithOverride();
            return (
              q.i.logged_in &&
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
              Object(U.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o = this;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !q.i.logged_in ||
                        !this.m_userData ||
                        i > this.m_userData.length
                      )
                        return [2, null];
                      (t = q.c.STORE_BASE_URL + "saleaction/ajaxopendoor"),
                        (a = new FormData()).append("sessionid", q.c.SESSIONID),
                        a.append("authwgtoken", q.i.authwgtoken),
                        a.append("door_index", "" + i),
                        l || a.append("open_door", "0"),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, E.a.post(t, a, { withCredentials: !0 })]
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
                              l && an.AddPoints(100);
                          }),
                          [2, n.data.rewards])
                        : (console.error(Object(H.a)(n)), [3, 4]);
                    case 3:
                      return (
                        (r = e.sent()), console.error(Object(H.a)(r)), [3, 4]
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
          Object(U.c)([m.y], e.prototype, "m_userData", void 0),
          Object(U.c)(
            [m.y],
            e.prototype,
            "m_salePageBackgroundOverride",
            void 0
          ),
          Object(U.c)([m.y], e.prototype, "m_salePageBackgroundWEBM", void 0),
          Object(U.c)([m.y], e.prototype, "m_salePageBackgroundMP4", void 0),
          Object(U.c)([m.y], e.prototype, "m_storyImages", void 0),
          Object(U.c)([m.y], e.prototype, "m_strLastDoorOpenKey", void 0),
          e
        );
      })())();
      window.g_DoorStore = nn;
      var rn = new ((function() {
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
            return Object(U.b)(this, void 0, void 0, function() {
              var t, a, n, r, o;
              return Object(U.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return null != this.m_rgRecentEvent
                      ? [3, 5]
                      : ((t = Object(q.f)(
                          "recent_events",
                          "application_config"
                        )),
                        this.ValidateStoreDefault(t)
                          ? (this.AddAllRecentEvents(t), [3, 5])
                          : [3, 1]);
                  case 1:
                    (this.m_rgRecentEvent = new Array()),
                      (a = {
                        cc: q.c.COUNTRY || "US",
                        l: q.c.LANGUAGE,
                        clan_account_id: i.clanSteamID.GetAccountID(),
                        clan_event_gid: i.GID
                      }),
                      (n =
                        q.c.STORE_BASE_URL + "saleaction/ajaxrecentsaleevents"),
                      (e.label = 2);
                  case 2:
                    return (
                      e.trys.push([2, 4, , 5]),
                      [4, E.a.get(n, { params: a, withCredentials: !0 })]
                    );
                  case 3:
                    return (
                      1 == (r = e.sent()).data.success &&
                        (this.AddAllRecentEvents(r.data.recent_events),
                        B.c.RegisterClanEvents(r.data.partnerevents)),
                      [3, 5]
                    );
                  case 4:
                    return (
                      (o = e.sent()),
                      console.error(
                        "GetRecentEventsForSalesPage failed",
                        Object(H.a)(o)
                      ),
                      [3, 5]
                    );
                  case 5:
                    return [2, this.m_rgRecentEvent];
                }
              });
            });
          }),
          Object(U.c)([m.y], e.prototype, "m_rgRecentEvent", void 0),
          Object(U.c)([m.h], e.prototype, "AddAllRecentEvents", null),
          e
        );
      })())();
      window.g_EventListSaleStore = rn;
      var on = new ((function() {
          function e() {
            (this.m_saleExp = {}), (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var e;
              this.m_bLoadedFromConfig ||
                ((e = document.getElementById("application_config")) &&
                  (this.m_saleExp = Object(q.f)("xprmnt", e)),
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
        ln = (function() {
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
                e = Object(q.f)("subscriptionsapps", "application_config");
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_mapMasterAppToBenefitApps.has(r)
                        ? [2, !0]
                        : [
                            4,
                            E.a.get(
                              q.c.STORE_BASE_URL +
                                "actions/ajaxresolvesubscriptions",
                              {
                                params: {
                                  master_app_id: r,
                                  cc: q.c.COUNTRY,
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
            Object(U.c)(
              [m.y],
              e.prototype,
              "m_mapMasterAppToBenefitApps",
              void 0
            ),
            e
          );
        })(),
        sn = a("qP7j"),
        cn = a.n(sn),
        dn = new ((function() {
          function e() {}
          return (
            (e.prototype.DeleteForumTopic = function(r, o, i, l, s) {
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          q.c.COMMUNITY_BASE_URL +
                          "forum/" +
                          r.GetAccountID() +
                          "/" +
                          o +
                          "/deletetopic/"),
                        null != i && "" != i && (t += i + "/"),
                        (a = new FormData()).append("sessionid", q.c.SESSIONID),
                        a.append("gidforumtopic", l),
                        [
                          4,
                          E.a.post(t, a, {
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
        un = (function(a) {
          function l(e) {
            var t = a.call(this, e) || this;
            return (
              (t.m_cancelSignal = E.a.CancelToken.source()),
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
            Object(U.d)(l, a),
            (l.prototype.componentDidMount = function() {
              this.props.bNoConfirmationNeeded && this.OnDelete();
            }),
            (l.prototype.OnDeleteEventSuccessCallback = function() {
              this.props.partnerEventStore.ResetModel(),
                this.state.bDeleteCommentThread
                  ? dn
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
                Object(U.a)({ dialogState: "error" }, Object(H.a)(e))
              );
            }),
            (l.prototype.OnDeleteForumTopicFailureCallback = function(e) {
              this.setState(
                Object(U.a)(
                  { dialogState: "failed_thread_delete" },
                  Object(H.a)(e)
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
                r != A.h
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
                  var o = t.GetNameWithFallback(Object(A.f)(q.c.LANGUAGE)),
                    i = t.BIsVisibleEvent()
                      ? "#EventDisplay_AreYouSure_Visible"
                      : "#EventDisplay_AreYouSure",
                    n = Object(Y.d)(i, o),
                    a = this.OnDelete;
                  t.BHasForumTopicGID() &&
                    r.push(
                      z.createElement(
                        "div",
                        {
                          key: "WantToDeleteCmtThread",
                          className: cn.a.Padding
                        },
                        z.createElement("input", {
                          type: "checkbox",
                          id: "del_cmt_post",
                          name: "del_cmt_post",
                          defaultChecked: this.state.bDeleteCommentThread,
                          onChange: this.OnChangeDeleteForum
                        }),
                        z.createElement(
                          "label",
                          { htmlFor: "del_cmt_post" },
                          Object(Y.d)("#EventDisplay_DeleteEvent_Comment")
                        )
                      )
                    );
                  break;
                case "waiting":
                  (n = Object(Y.d)("#EventDisplay_DeleteEvent_InProgress")),
                    r.push(z.createElement(J.a, { key: "throbber" }));
                  break;
                case "error":
                  (n = Object(Y.d)("#EventDisplay_DeleteEvent_Error")),
                    r.push(
                      z.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++l.m_uniqueError,
                          className: cn.a.ErrorStyles
                        },
                        this.state.strErrorMsg
                      )
                    );
                  break;
                case "failed_thread_delete":
                  (n = Object(Y.d)(
                    "#EventDisplay_DeleteEvent_ForumTopicError"
                  )),
                    r.push(
                      z.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++l.m_uniqueError,
                          className: cn.a.ErrorStyles
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
                  (n = Object(Y.d)("#EventDisplay_DeleteEvent_Success")),
                    this.props.onDeleteSuccessAndCloseDialog &&
                      (a = function() {
                        e.props.onDeleteSuccessAndCloseDialog(),
                          e.props.closeModal();
                      });
              }
              return z.createElement(
                P.c,
                {
                  strTitle: Object(Y.d)("#EventDisplay_DeleteEvent"),
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
            Object(U.c)(
              [f.a],
              l.prototype,
              "OnDeleteEventSuccessCallback",
              null
            ),
            Object(U.c)(
              [f.a],
              l.prototype,
              "OnDeleteForumTopicSuccessCallback",
              null
            ),
            Object(U.c)(
              [f.a],
              l.prototype,
              "OnDeleteEventFailureCallback",
              null
            ),
            Object(U.c)(
              [f.a],
              l.prototype,
              "OnDeleteForumTopicFailureCallback",
              null
            ),
            Object(U.c)([f.a], l.prototype, "SetToWaiting", null),
            Object(U.c)([f.a], l.prototype, "OnDelete", null),
            Object(U.c)([f.a], l.prototype, "OnChangeDeleteForum", null),
            l
          );
        })(z.Component),
        pn = a("6eA3"),
        mn = a.n(pn),
        hn = (function(t) {
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
            Object(U.d)(e, t),
            (e.prototype.OnDeleteVerifyRequest = function(e) {
              Object(l.c)(
                z.createElement(un, {
                  eventModel: this.props.eventModel,
                  onDeleteSuccessAndCloseDialog: this
                    .OnDeleteSuccessAndComplete,
                  partnerEventStore: this.props.partnerEventStore
                }),
                Object(Z.n)(e)
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
                return Object(Ue.j)(n, Ue.a.k_eCommunityAdminPage);
              var i = W.a.Get().GetPartnerEventPermissions(n.clanSteamID),
                l = n.visibility_state == B.b.k_EEventStateVisible,
                s = n.visibility_state == B.b.k_EEventStateStaged;
              if (i.can_edit || i.support_user) {
                var c = [];
                if (void 0 !== this.state.nMaxSaleDayIndex)
                  for (var d = 0; d <= this.state.nMaxSaleDayIndex; ++d)
                    c.push({
                      label: Object(Y.d)("#SalePage_Admin_SaleEventDay", d + 1),
                      data: d
                    });
                return z.createElement(
                  b.a,
                  null,
                  z.createElement(
                    "div",
                    { className: pn.DisplayAdminPanel },
                    z.createElement(
                      "span",
                      { className: pn.DisplayAdminPanel_Title },
                      Object(Y.d)("#EventDisplay_Admin_Title")
                    ),
                    z.createElement(
                      "div",
                      { className: pn.DisplayAdminPanel_ctn },
                      a,
                      a &&
                        z.createElement(
                          "span",
                          { className: pn.DisplayAdminPanel_Spacer },
                          " "
                        ),
                      z.createElement(
                        Ue.c,
                        {
                          eventModel: n,
                          route: Ue.a.k_eCommunityEdit,
                          openNewWindow: o,
                          className: Object(V.a)(F.Button, pn.AdminButton)
                        },
                        Object(Y.d)("#EventEditor_Edit")
                      ),
                      r &&
                        z.createElement(
                          "span",
                          {
                            className: F.Button + " " + pn.AdminButton,
                            onClick: this.OnDeleteVerifyRequest
                          },
                          Object(Y.d)("#EventDisplay_DeleteEvent")
                        ),
                      !l &&
                        z.createElement(
                          z.Fragment,
                          null,
                          z.createElement(
                            Ue.c,
                            {
                              eventModel: n,
                              route: Ue.a.k_eCommunityPublish,
                              openNewWindow: o,
                              className: Object(V.a)(F.Button, pn.AdminButton)
                            },
                            Object(Y.d)(
                              s
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish"
                            )
                          )
                        ),
                      z.createElement(
                        Ue.c,
                        {
                          eventModel: n,
                          route: Ue.a.k_eCommunityAdminPage,
                          openNewWindow: o,
                          className: Object(V.a)(F.Button, pn.AdminButton)
                        },
                        Object(Y.d)("#EventDisplay_Events")
                      ),
                      Boolean(
                        void 0 !== this.state.nMaxSaleDayIndex && 0 < c.length
                      ) &&
                        z.createElement(g.g, {
                          strDropDownClassName: F.DropDownScroll,
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
                        z.createElement(
                          Ue.c,
                          {
                            eventModel: n,
                            route: Ue.a.k_eStoreSalePage,
                            openNewWindow: o,
                            className: Object(V.a)(F.Button, pn.AdminButton)
                          },
                          Object(Y.d)("#EventDisplay_SalesPage")
                        ),
                      Boolean(
                        n.jsondata.bSaleEnabled && q.i.is_support && n.GID
                      ) &&
                        z.createElement(
                          "a",
                          {
                            href:
                              (q.c.IN_CLIENT ? "steam://openurl/" : "") +
                              "https://steamstats.valve.org/sales/details/?gid=" +
                              n.GID +
                              "&clanid=" +
                              n.clanSteamID.GetAccountID(),
                            target: q.c.IN_CLIENT ? "" : "_blank",
                            className: Object(V.a)(
                              F.Button,
                              pn.AdminButton,
                              F.ValveOnlyBackground
                            )
                          },
                          Object(Y.d)("#EventDisplay_StatsPage")
                        )
                    )
                  )
                );
              }
              return z.createElement("span", null);
            }),
            Object(U.c)([f.a], e.prototype, "OnDeleteVerifyRequest", null),
            Object(U.c)([f.a], e.prototype, "OnDeleteSuccessAndComplete", null),
            Object(U.c)([f.a], e.prototype, "OnChangeVisibilityDate", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component);
      var vn = a("bWts"),
        _n = a.n(vn),
        bn = a("XsxU"),
        gn = a.n(bn),
        yn = a("MnIK"),
        En = a("TOXn"),
        Sn = a("NKJh"),
        fn = a.n(Sn),
        Cn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                events: [],
                bLoading: !1,
                bShowInfiniteScrollOverlay: !1
              }),
              (e.m_cancelSignal = E.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.PrepLoadEvents = function() {
              var e = this.props,
                t = e.partnerEventStore,
                a = e.eventModel;
              t &&
                a.BHasAnnouncementGID() &&
                this.setState({ bLoading: !0 }, this.ActualLoadEvent);
            }),
            (e.prototype.ActualLoadEvent = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r = this;
                return Object(U.e)(this, function(e) {
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
                            "EventDetails: " + Object(H.a)(e).strErrorMsg
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
                ((t = W.a.Get().GetTracker()),
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
              Ne.f(n);
              for (var s = 0, c = n; s < c.length; s++) {
                var d = c[s],
                  u = l.GetClanEventFromAnnouncementGID(d);
                if (
                  u &&
                  u.GID != a.GID &&
                  u.AnnouncementGID != a.AnnouncementGID &&
                  (u &&
                    u.visibility_state == B.b.k_EEventStateVisible &&
                    (e.push(
                      z.createElement(On, {
                        key: u.GID + " " + u.AnnouncementGID,
                        event: u
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
                return z.createElement(we, {
                  appid: n,
                  eventModel: t,
                  announcementGID: t.GetAnnouncementGID(),
                  closeModal: this.HideInfiniteScroller,
                  partnerEventStore: a
                });
              if (this.state.bLoading)
                return z.createElement(J.a, {
                  position: "center",
                  size: "medium"
                });
              if (0 == this.state.events.length)
                return z.createElement("div", null);
              var r = _.a.GetStoreCapsuleInfo(n).GetAppStoreData(),
                o = S.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                );
              if (!o)
                return (
                  Object(h.a)(
                    o,
                    "PartnerEventRow - clan info (" +
                      t.clanSteamID.GetAccountID() +
                      ") is missing"
                  ),
                  null
                );
              var i = this.ConstructEventRowCapsules();
              if (0 == i.length) return z.createElement("div", null);
              var l = t.BHasAnnouncementGID();
              return z.createElement(
                "div",
                { className: gn.a.OtherEventsCtn },
                z.createElement(
                  "div",
                  { className: Q.a.EventSectionTitleCtn },
                  z.createElement(
                    "div",
                    { className: Q.a.EventSectionTitle },
                    Object(Y.l)(
                      "#EventBrowse_MoreEventsTitle",
                      o.is_ogg ? r.title : o.group_name
                    ),
                    " "
                  ),
                  z.createElement(
                    "div",
                    { className: Q.a.EventSectionSpacer },
                    " "
                  ),
                  l && this.props.bViewAllShowInfiniteScroll
                    ? z.createElement(
                        "div",
                        {
                          className: Q.a.EventSectionMoreBtn,
                          onClick: this.OnViewAll
                        },
                        Object(Y.d)("#EventBrowse_MoreEventsBtn")
                      )
                    : z.createElement(
                        Ue.c,
                        {
                          eventModel: t,
                          route: Ue.a.k_eViewWebSiteHub,
                          className: Q.a.EventSectionMoreBtn
                        },
                        Object(Y.d)("#EventBrowse_MoreEventsBtn")
                      )
                ),
                z.createElement("div", { className: gn.a.OtherEvents }, i)
              );
            }),
            Object(U.c)([f.a], e.prototype, "PrepLoadEvents", null),
            Object(U.c)([f.a], e.prototype, "ActualLoadEvent", null),
            Object(U.c)(
              [f.a],
              e.prototype,
              "HandleTrackingWhenAdjacentLoadCompleted",
              null
            ),
            Object(U.c)([f.a], e.prototype, "OnViewAll", null),
            Object(U.c)([f.a], e.prototype, "HideInfiniteScroller", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        On = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.imageURLOverride,
                n = e.openNewWindow,
                r = e.appInfo,
                o = e.langOverride,
                i = e.onClick;
              if (!t)
                return z.createElement("div", {
                  className: gn.a.OtherEvents_EventCtn
                });
              var l = o || Object(A.f)(q.c.LANGUAGE),
                s =
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        l,
                        De.c.capsule_main
                      ),
                c = t.GetNameWithFallback(l),
                d = t.GetCategoryAsString(),
                u = t.GetSummaryWithFallback(l),
                p = t.GetSubTitleWithLanguageFallback(l);
              return (
                p && (30 < p.length || 30 < c.length) && (p = void 0),
                z.createElement(
                  z.Fragment,
                  null,
                  z.createElement(
                    Ue.c,
                    {
                      className: Object(V.a)(
                        gn.a.OtherEvents_EventCtn,
                        gn.a.HoversEnabled
                      ),
                      eventModel: t,
                      route: Ue.a.k_eView,
                      openNewWindow: n,
                      onClick: i
                    },
                    z.createElement(
                      "div",
                      { className: gn.a.EventSummaryContainer },
                      z.createElement(
                        "div",
                        { className: gn.a.EventSummaryType },
                        d
                      ),
                      z.createElement(
                        "div",
                        { className: gn.a.EventSummaryText },
                        u
                      )
                    ),
                    z.createElement("div", {
                      className: gn.a.OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: "url(" + s + ")"
                      }
                    }),
                    z.createElement(
                      "div",
                      { className: gn.a.OtherEvents_ContentCtn },
                      z.createElement(
                        "div",
                        { className: gn.a.OtherEvents_MainImageCtn },
                        z.createElement("img", {
                          src: s,
                          className: gn.a.OtherEvents_MainImage
                        })
                      ),
                      z.createElement(
                        "div",
                        { className: gn.a.OtherEvents_TextCtn },
                        z.createElement(
                          "div",
                          { className: gn.a.OtherEvents_TextTitle },
                          c
                        ),
                        p &&
                          z.createElement(
                            "div",
                            { className: gn.a.OtherEvents_SubTitle },
                            p
                          ),
                        z.createElement(Le.a, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                        })
                      )
                    )
                  ),
                  r &&
                    z.createElement(
                      "span",
                      { className: gn.a.AppCapsuleCtn },
                      z.createElement(
                        Ze.a,
                        {
                          strURL: q.c.STORE_BASE_URL + "app/" + r.appid,
                          type: "app",
                          id: r.appid,
                          hoverClassName: gn.a.AppCapsuleImageHover
                        },
                        z.createElement("img", {
                          className: gn.a.AppCapsuleImage,
                          src: this.props.appInfo.tiny_capsule
                        })
                      ),
                      z.createElement(
                        "span",
                        { className: gn.a.AppCapsulePrice },
                        Boolean(this.props.appInfo.discount_percent) &&
                          z.createElement(
                            "span",
                            { className: fn.a.StoreSaleDiscountBox },
                            "-" + this.props.appInfo.discount_percent + "%"
                          ),
                        !this.props.appInfo.is_free &&
                          this.props.appInfo.price &&
                          z.createElement(
                            "span",
                            { className: fn.a.StoreSalePriceBox },
                            this.props.appInfo.price
                          )
                      )
                    )
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        wn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.imageURLOverride,
                n = e.openNewWindow,
                r = e.onClick;
              if (!t)
                return z.createElement("div", {
                  className: gn.a.OtherEvents_EventCtn
                });
              var o = Object(A.f)(q.c.LANGUAGE),
                i =
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        o,
                        De.c.capsule_main
                      ),
                l = t.GetNameWithFallback(o),
                s = t.GetCategoryAsString();
              return z.createElement(
                Ue.c,
                {
                  className:
                    gn.a.OtherEvents_EventCtn + " " + gn.a.HorizontalEvent,
                  eventModel: t,
                  route: Ue.a.k_eView,
                  openNewWindow: n,
                  onClick: r
                },
                z.createElement(
                  "div",
                  { className: gn.a.OtherEvents_ContentCtn },
                  z.createElement(
                    "div",
                    { className: gn.a.OtherEvents_MainImageCtn },
                    z.createElement("img", {
                      src: i,
                      className: gn.a.OtherEvents_MainImage
                    })
                  )
                ),
                z.createElement(
                  "div",
                  { className: gn.a.OtherEvents_TextCtn },
                  z.createElement(
                    "div",
                    { className: gn.a.HorizontalDescriptionCtn },
                    z.createElement(
                      "div",
                      { className: gn.a.HorizontalDescription },
                      s
                    ),
                    z.createElement(Le.a, {
                      bSingleLine: !0,
                      dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                    })
                  ),
                  z.createElement("div", { className: gn.a.HorizontalTitle }, l)
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Tn = (function() {
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
            Object(U.c)([m.y], e.prototype, "m_stats", void 0),
            Object(U.c)([m.y], e.prototype, "m_lastUpdateTime", void 0),
            e
          );
        })(),
        In = new ((function() {
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
                ((e = Object(q.f)("trackingdatasummary", "application_config")),
                this.ValidateStoreDefault(e) &&
                  this.m_mapSummaryStats.set(e.clan_account_id, new Tn(e)),
                (t = Object(q.f)("trackingdataevents", "application_config")),
                this.ValidateStoreDefaultList(t) &&
                  t.forEach(function(e) {
                    var t = L.a.InitFromClanID(e.clan_account_id),
                      a = n.GetKey(t, e.event_gid);
                    n.m_mapPerEventStats.set(a, new Tn(e));
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
                  this.m_mapPerEventStats.set(a, new Tn(null)),
                this.m_mapPerEventStats.get(a)
              );
            }),
            (e.prototype.GetTotalStats = function(e) {
              return (
                this.LazyInit(),
                this.m_mapSummaryStats.has(e.GetAccountID()) ||
                  this.m_mapSummaryStats.set(e.GetAccountID(), new Tn(null)),
                this.m_mapSummaryStats.get(e.GetAccountID())
              );
            }),
            (e.prototype.GetKey = function(e, t) {
              return e.GetAccountID() + "_" + t;
            }),
            (e.prototype.LoadStatsForEvents = function(c, d, u) {
              return Object(U.b)(this, void 0, void 0, function() {
                var n,
                  t,
                  a,
                  r,
                  o,
                  i,
                  l,
                  s = this;
                return Object(U.e)(this, function(e) {
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
                        Object(q.d)() + "actions/ajaxgetpartnereventsreport"),
                        (r = {
                          sessionid: q.c.SESSIONID,
                          clan_account_id: c.GetAccountID(),
                          gidlist: t.join(",")
                        }),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          E.a.get(a, {
                            params: r,
                            withCredentials: !0,
                            cancelToken: u.token
                          })
                        ]
                      );
                    case 2:
                      return (
                        (o = e.sent()),
                        Object(m.A)(function() {
                          s.m_mapSummaryStats.set(
                            c.GetAccountID(),
                            new Tn(o.data.summary)
                          ),
                            o.data.events_detail.forEach(function(e) {
                              var t = s.GetKey(c, e.event_gid);
                              s.m_mapPerEventStats.has(t)
                                ? s.m_mapPerEventStats.get(t).reset(e)
                                : s.m_mapPerEventStats.set(t, new Tn(e));
                            });
                        }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = e.sent()),
                        (l = Object(H.a)(i)),
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
            Object(U.c)([m.y], e.prototype, "m_mapPerEventStats", void 0),
            Object(U.c)([m.y], e.prototype, "m_mapSummaryStats", void 0),
            Object(U.c)([m.h], e.prototype, "LazyInit", null),
            e
          );
        })())(),
        kn = a("sGzE"),
        jn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.summary,
                a = e.bIncludeDescription;
              return 0 == t.total_read + t.total_showm
                ? null
                : z.createElement(
                    "div",
                    null,
                    z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          kn.StatsCtnTitle,
                          a ? kn.NormalStatsMode : kn.SmallStatsMode
                        )
                      },
                      z.createElement(
                        "h1",
                        null,
                        Object(Y.d)("#EventDashBoard_SummaryStats_Title")
                      ),
                      Boolean(a) &&
                        z.createElement(
                          "p",
                          null,
                          Object(Y.d)("#EventDashBoard_SummaryStats_Desc"),
                          " ",
                          z.createElement(
                            "a",
                            {
                              href:
                                "https://partner.steamgames.com/doc/marketing/event_tools/stats",
                              target: "_blank"
                            },
                            Object(Y.d)("#EventDashBoard_SummaryStats_Link")
                          )
                        )
                    ),
                    z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          kn.StatsCtn,
                          a ? kn.NormalStatsMode : kn.SmallStatsMode
                        )
                      },
                      z.createElement(
                        "div",
                        { className: kn.StatsLeftSection },
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle_ctn },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)("#EventDashBoard_Location_LibraryHome")
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)(
                              "#EventDashBoard_Summary_LibraryHome_Shown"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.library_overview_shown.toLocaleString(
                              Y.c.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)(
                              "#EventDashBoard_Summary_LibraryHome_Read"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.library_overview_read.toLocaleString(
                              Y.c.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement("br", null),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle_ctn },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)(
                              "#EventDashBoard_Location_LibraryDetail"
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Shown"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_shown.toLocaleString(
                              Y.c.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Read"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_read.toLocaleString(
                              Y.c.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement("br", null),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)(
                              "#EventDashBoard_Summary_AppDetailActivity_Shown"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.app_details_activity_shown.toLocaleString(
                              Y.c.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)(
                              "#EventDashBoard_Summary_AppDetailActivity_Read"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.app_details_activity_read.toLocaleString(
                              Y.c.GetPreferredLocales()
                            )
                          )
                        )
                      ),
                      z.createElement(
                        "div",
                        { className: kn.StatsRightSection },
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle_ctn },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)("#EventDashBoard_Location_StoreDetail")
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)(
                              "#EventDashBoard_Summary_StoreAppPage_Shown"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.store_app_page_shown.toLocaleString(
                              Y.c.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)(
                              "#EventDashBoard_Summary_StoreAppPage_Read"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.store_app_page_read.toLocaleString(
                              Y.c.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement("br", null),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle_ctn },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)(
                              "#EventDashBoard_Location_CommunityDetail"
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)(
                              "#EventDashBoard_Summary_Community_Shown"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.community_hub_shown.toLocaleString(
                              Y.c.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)(
                              "#EventDashBoard_Summary_Community_Read"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.community_hub_read.toLocaleString(
                              Y.c.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle_ctn },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)(
                              "#EventDashBoard_Location_NewsHubDetail"
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)("#EventDashBoard_Summary_NewsHub_Shown")
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.news_hub_shown.toLocaleString(
                              Y.c.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: kn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(Y.d)("#EventDashBoard_Summary_NewsHub_Read")
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.news_hub_read.toLocaleString(
                              Y.c.GetPreferredLocales()
                            )
                          )
                        )
                      )
                    )
                  );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Dn = a("ZCZY"),
        An = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.GenerateBreadCrumbs = function() {
              var t = new Array();
              return (
                this.props.crumbs.forEach(function(e) {
                  e.url.startsWith("http")
                    ? t.push(
                        z.createElement(
                          "a",
                          { key: "anchor_" + e.name, href: e.url },
                          e.name
                        )
                      )
                    : t.push(
                        z.createElement(
                          s.b,
                          { key: "link_" + e.name, to: e.url },
                          e.name
                        )
                      ),
                    t.push(
                      z.createElement("span", { key: e.name + "span" }, " > ")
                    );
                }),
                t
              );
            }),
            (t.prototype.render = function() {
              var e = this.GenerateBreadCrumbs();
              return z.createElement(
                "div",
                { className: Object(V.a)(Dn.BreadContainer) },
                z.createElement("div", { className: "blockbg" }, e),
                z.createElement("div", { style: { clear: "left" } })
              );
            }),
            t
          );
        })(z.Component),
        Ln = a("4sqd"),
        Nn = a("5L1o"),
        Gn = a("45m9"),
        Bn = z.lazy(function() {
          return Promise.all([a.e(0), a.e(1), a.e(6)]).then(
            a.bind(null, "NIbt")
          );
        }),
        Mn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = E.a.CancelToken.source()),
              (e.state = {
                bLoadingAppInfo: !_.a.BIsAppidLoaded(e.props.event.appid),
                bLoadingClanInfo: !!S.a.GetClanInfoByClanAccountID(
                  e.props.event.clanSteamID.GetAccountID()
                )
              }),
              e
            );
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this;
              window.scrollTo(0, 0);
              var e = this.props.event.appid;
              this.state.bLoadingAppInfo &&
                _.a.EnsureStoreCapsuleInfoLoaded(e).then(function() {
                  return t.setState({ bLoadingAppInfo: !1 });
                }),
                this.state.bLoadingClanInfo &&
                  S.a
                    .LoadClanInfoForClanSteamID(this.props.event.clanSteamID)
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
                return z.createElement(
                  "div",
                  { className: Oe.a.FlexCenter, style: { height: "400px" } },
                  z.createElement(J.a, {
                    size: "medium",
                    string: Object(Y.d)("#Loading")
                  })
                );
              var u = t.GetDescriptionWithFallback(a),
                p = _.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData(),
                m = Object(q.d)() == q.c.STORE_BASE_URL,
                h = S.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                ),
                v = Object(Ue.d)(
                  t,
                  m ? Ue.a.k_eStoreNewsHub : Ue.a.k_eCommunityAllNews,
                  "allowRelative",
                  h && h.vanity_url
                );
              return z.createElement(xn, {
                event: t,
                lang: a,
                titleBar: d,
                body: z.createElement(
                  b.a,
                  null,
                  z.createElement(
                    "div",
                    { className: mn.a.EventDetailTitleContainer },
                    z.createElement(An, {
                      crumbs: [
                        {
                          name: Object(Y.d)("#BreadCrumbs_AllEvents"),
                          url: Object(Ue.d)(
                            t,
                            Ue.a.k_eStoreUsersNewsHub,
                            "allowRelative"
                          )
                        },
                        {
                          name: Object(Y.d)("#BreadCrumbs_GameEvents", p.title),
                          url: v
                        }
                      ]
                    }),
                    z.createElement(
                      "div",
                      { className: mn.a.EventDetailTitle },
                      t.GetNameWithFallback(a)
                    ),
                    t.BHasSubTitle(a) &&
                      z.createElement(
                        "div",
                        { className: mn.a.EventDetailsSubTitle },
                        t.GetSubTitle(a)
                      )
                  ),
                  t.BHasBroadcastEnabled() &&
                    z.createElement(
                      "div",
                      { className: mn.a.EventBroadcastCtn },
                      z.createElement(
                        z.Suspense,
                        { fallback: z.createElement("div", null) },
                        z.createElement(Bn, {
                          event: this.props.event,
                          bIsPreview: this.props.previewMode,
                          accountIDs: this.props.previewMode
                            ? this.props.event.jsondata.broadcast_whitelist
                            : void 0
                        })
                      )
                    ),
                  z.createElement(
                    "div",
                    { className: mn.a.EventColumns },
                    z.createElement(
                      "div",
                      { className: mn.a.EventDetailsDescription },
                      z.createElement(
                        b.a,
                        null,
                        t.BHasTag("steam_award_nomination_request") &&
                          z.createElement(Ln.a, {
                            event: t,
                            lang: a,
                            previewMode: s
                          }),
                        t.BHasTag("steam_award_vote_request") &&
                          z.createElement(Ln.b, {
                            event: t,
                            lang: a,
                            previewMode: s
                          })
                      ),
                      z.createElement(
                        b.a,
                        null,
                        z.createElement(
                          "div",
                          {
                            className: Object(V.a)(
                              "EventDetailsBody",
                              mn.a.EventDetailsBody
                            )
                          },
                          z.createElement(En.a, {
                            text: u || "",
                            partnerEventStore: n,
                            showErrorInfo: s,
                            event: t,
                            languageOverride: a
                          })
                        )
                      ),
                      z.createElement(
                        b.a,
                        null,
                        z.createElement(Gn.a, { event: this.props.event })
                      ),
                      Boolean(t.jsondata.read_more_link) &&
                        z.createElement(
                          y.a,
                          {
                            className: Object(V.a)(Q.a.Button),
                            href: t.jsondata.read_more_link
                          },
                          Object(Y.d)("#EventEmail_Button_ClickForMoreDetails")
                        ),
                      Boolean(
                        t.jsondata.bSaleEnabled && t.jsondata.sale_vanity_id
                      ) &&
                        z.createElement(
                          y.a,
                          {
                            className: Object(V.a)(Q.a.Button),
                            href:
                              q.c.STORE_BASE_URL +
                              (t.jsondata
                                .sale_vanity_id_valve_approved_for_sale_subpath
                                ? "sale/"
                                : "curator/" +
                                  t.clanSteamID.GetAccountID() +
                                  "/sale/ ") +
                              t.jsondata.sale_vanity_id
                          },
                          Object(Y.d)("#Event_Button_VisitSalePage")
                        ),
                      z.createElement("span", { className: Q.a.Clear }),
                      z.createElement(
                        b.a,
                        null,
                        z.createElement(La.a, { appid: t.appid })
                      )
                    ),
                    z.createElement(
                      b.a,
                      null,
                      z.createElement(Rn, {
                        event: t,
                        lang: a,
                        nOverrideStartTime: o,
                        nOverrideEndTime: i
                      })
                    )
                  ),
                  z.createElement(Ie.b, {
                    eventModel: t,
                    emoticonStore: r,
                    partnerEventStore: n
                  })
                ),
                postbody: z.createElement(b.a, null, l, c),
                footer: z.createElement(
                  b.a,
                  null,
                  z.createElement(
                    "div",
                    { className: mn.a.AppSummaryCtn },
                    z.createElement(
                      "div",
                      { className: mn.a.EventBodyPosition },
                      Boolean(
                        null != p.appid && null != p.appid && 0 != p.appid
                      ) &&
                        z.createElement(
                          "div",
                          { className: mn.a.AppSummaryWidgetTitleCtn },
                          z.createElement(
                            "span",
                            { className: mn.a.Title },
                            Object(Y.d)("#CreatorHome_ThisGame")
                          ),
                          z.createElement(
                            "div",
                            { className: mn.a.AppSummaryWidgetCtn },
                            z.createElement(Nn.g, { id: t.appid })
                          )
                        ),
                      z.createElement(ve, { appid: t.appid, bSmallFormat: !0 })
                    )
                  )
                )
              });
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        xn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
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
                c = "lang_" + Object(A.e)(a),
                d = t.BImageNeedScreenshotFallback("background", a);
              return z.createElement(
                "div",
                {
                  className: Object(V.a)(
                    mn.a.EventDetailsPageContainer,
                    c,
                    Q.a.PartnerEventFont,
                    s
                      ? mn.a.DetailArtworkAgeAppropriate
                      : mn.a.DetailArtworkAgeNotAppropriate,
                    d && mn.a.NoTitleArtwork
                  )
                },
                n,
                z.createElement(
                  "div",
                  { className: mn.a.EventCoverImageCtn },
                  z.createElement(
                    "div",
                    { className: mn.a.EventCoverImageBlr },
                    z.createElement("div", {
                      className: mn.a.EventCoverImageFuzz,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + l + ")"
                      }
                    }),
                    z.createElement("div", {
                      className: mn.a.EventCoverImage,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + l + ")"
                      }
                    })
                  ),
                  z.createElement("div", { className: mn.a.CoverImageGradient })
                ),
                z.createElement(
                  "div",
                  { className: mn.a.EventBodyCtn },
                  z.createElement("div", {
                    className: mn.a.EventBackgroundBlurCtn
                  }),
                  z.createElement(
                    "div",
                    { className: mn.a.EventBodyPosition },
                    z.createElement(
                      "div",
                      { className: mn.a.EventBody },
                      z.createElement("div", {
                        className: mn.a.EventBackgroundBlur,
                        style: { backgroundImage: "url(" + l + ")" }
                      }),
                      z.createElement(b.a, null, r)
                    ),
                    Boolean(o) && z.createElement(b.a, null, o)
                  )
                ),
                Boolean(i) && z.createElement(b.a, null, i)
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Rn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
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
                i = S.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                );
              if (!i)
                return (
                  Object(h.a)(
                    i,
                    "EventDetailsRightColumn - clan info (" +
                      t.clanSteamID.GetAccountID() +
                      ") is missing"
                  ),
                  null
                );
              var l = G.a.GetTimeNowWithOverride(),
                s = n || t.GetStartTimeAndDateUnixSeconds();
              return z.createElement(
                "div",
                { className: mn.a.EventDetailTitleDesc },
                z.createElement(
                  "div",
                  { className: mn.a.EventDetailsSticky },
                  i.is_ogg
                    ? z.createElement(Fn, { appid: i.appid })
                    : z.createElement(Pn, { clanSteamID: t.clanSteamID }),
                  z.createElement(La.b, {
                    event: t,
                    nOverrideEndTime: r,
                    nOverrideStartTime: n
                  }),
                  28 !== t.type &&
                    l < s &&
                    z.createElement(
                      "div",
                      { className: mn.a.EventDetailTimeInfo },
                      z.createElement(ke.a, {
                        eventModel: t,
                        eventGID: t.GID,
                        lang: a
                      })
                    ),
                  z.createElement(
                    "div",
                    { className: mn.a.EventDetailUserType },
                    z.createElement(
                      "div",
                      { className: mn.a.RightSideTitles },
                      Object(Y.d)("#EventDisplay_RightColumnTitle_EventType")
                    ),
                    z.createElement(
                      "div",
                      { className: mn.a.EventDetailsType },
                      o,
                      " "
                    )
                  ),
                  z.createElement(zn, { event: t })
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Fn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var t = this.props.appid;
              Object(h.a)(t && 0 != t, "Expected Appid In Game Info Section");
              var e = _.a.GetStoreCapsuleInfo(t).GetAppStoreData();
              return z.createElement(
                "div",
                { className: mn.a.EventDetailGameCallToAction },
                z.createElement(
                  "div",
                  { className: mn.a.RightSideTitles },
                  Ta.u.some(function(e) {
                    return t === e;
                  })
                    ? Object(Y.d)("#EventDisplay_RightColumnTitle_Blog")
                    : Object(Y.d)("#EventDisplay_RightColumnTitle_Game")
                ),
                z.createElement(Nn.f, {
                  capsule: { id: t, type: "game" },
                  bHidePriceIfOwned: !0,
                  bHideStatusBanners: !0
                }),
                z.createElement(
                  "div",
                  { className: Object(V.a)(mn.a.GameActions) },
                  z.createElement(Nn.i, {
                    info: e,
                    className: mn.a.ActionButton
                  })
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Pn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.clanSteamID,
                t = S.a.GetClanInfoByClanAccountID(e.GetAccountID());
              return t
                ? z.createElement(
                    "div",
                    { className: mn.a.EventDetailGameCallToAction },
                    z.createElement(
                      "div",
                      { className: mn.a.RightSideTitles },
                      t.group_name
                    ),
                    z.createElement(
                      "a",
                      { href: S.a.GetCreatorStoreURL(e) },
                      z.createElement("div", {
                        className: mn.a.EventDetailsAvatar,
                        style: {
                          backgroundImage: "url(" + t.avatar_full_url + ")"
                        }
                      })
                    )
                  )
                : (Object(h.a)(
                    t,
                    "EventDetailsRightCreatorInfo - clan info (" +
                      e.GetAccountID() +
                      ") is missing"
                  ),
                  null);
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Hn = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"],
        zn = (z.Component,
        (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_cancelSignal = E.a.CancelToken.source()), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this,
                a = this.props.event;
              a.BIsPartnerEvent() &&
                a.BIsVisibleEvent() &&
                W.a
                  .Get()
                  .LoadSingleAppEventPermissions(a.clanSteamID)
                  .then(function(e) {
                    e &&
                      e.can_edit &&
                      In.LoadStatsForEvents(
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
              if (!W.a.Get().GetPartnerEventPermissions(e.clanSteamID).can_edit)
                return null;
              var t =
                e.BIsPartnerEvent() &&
                e.BIsVisibleEvent() &&
                In.GetStatsFor(e.clanSteamID, e.GID);
              return z.createElement(
                b.a,
                null,
                z.createElement(
                  "div",
                  { className: mn.a.EditorStatsCtn },
                  z.createElement(
                    "div",
                    { className: mn.a.EditorStatsRow },
                    z.createElement(
                      "span",
                      null,
                      Object(Y.d)("#EventEditor_Comments")
                    ),
                    z.createElement(
                      "span",
                      null,
                      e.nCommentCount.toLocaleString(Y.c.GetPreferredLocales())
                    )
                  ),
                  z.createElement(
                    "div",
                    { className: mn.a.EditorStatsRow },
                    z.createElement(
                      "span",
                      null,
                      Object(Y.d)("#EventEditor_UpVotes")
                    ),
                    z.createElement(
                      "span",
                      null,
                      e.nVotesUp
                        ? e.nVotesUp.toLocaleString(Y.c.GetPreferredLocales())
                        : 0
                    )
                  ),
                  z.createElement(
                    "div",
                    { className: mn.a.EditorStatsRow },
                    z.createElement(
                      "span",
                      null,
                      Object(Y.d)("#EventEditor_DownVotes")
                    ),
                    z.createElement(
                      "span",
                      null,
                      e.nVotesDown
                        ? e.nVotesDown.toLocaleString(Y.c.GetPreferredLocales())
                        : 0
                    )
                  )
                ),
                Boolean(t) &&
                  z.createElement(
                    "div",
                    { className: mn.a.EditorStatsCtn },
                    Object(Y.d)("#EventDashBoard_SummaryStats_Admin_Title"),
                    z.createElement(jn, { summary: t.m_stats })
                  )
              );
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component)),
        Un = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.componentDidMount = function() {
              nn.GetRawDoorData() || nn.LoadDoorData(),
                an.LoadSaleTokenPoints();
            }),
            (t.prototype.render = function() {
              var e = nn.GetRawDoorData();
              if (!e) return null;
              for (
                var t = e.length - 1,
                  a = G.a.GetTimeNowWithOverride() > e[t].rtime_start,
                  n = [],
                  r = 0;
                r <= t;
                r++
              )
                n.push(
                  z.createElement(Vn, {
                    key: "envelope-" + r,
                    iDoorIndex: r,
                    strFontFamily: this.props.strFontFamily
                  })
                );
              var o = an.GetSaleTokenPoints().points;
              return z.createElement(
                b.a,
                null,
                z.createElement(
                  "div",
                  { className: mn.a.LunarNewYearHeader },
                  z.createElement(
                    "div",
                    { className: mn.a.EnvelopeArea },
                    0 <= o &&
                      z.createElement(
                        "div",
                        { className: mn.a.TokenBalanceContainer },
                        Object(Y.d)("#Lunar2020_YourBalancePrefix"),
                        z.createElement(
                          "a",
                          {
                            className: mn.a.TokenBalance,
                            href: q.c.STORE_BASE_URL + "lunarnewyearmarket"
                          },
                          " ",
                          Object(Y.d)("#Lunar2020_BalanceNumberOfTokens", o),
                          " "
                        )
                      ),
                    n
                  ),
                  !a &&
                    z.createElement(
                      "div",
                      { className: mn.a.BottomMessage },
                      Object(Y.d)("#Lunar2020_CheckBackEachDay")
                    )
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Wn = [
          "#Lunar2020_FirstGift",
          "#Lunar2020_SecondGift",
          "#Lunar2020_ThirdGift",
          "#Lunar2020_FourthGift"
        ],
        Vn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.OpenEnvelope = function(n) {
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = nn.BIsDoorOpened(this.props.iDoorIndex)),
                        (a = Object(Z.n)(n)),
                        t
                          ? (Object(l.b)(
                              z.createElement(
                                qn,
                                Object(U.a)({ bIsFirstOpen: !1 }, this.props)
                              ),
                              a
                            ),
                            [2])
                          : [4, nn.OpenDoor(this.props.iDoorIndex, !0)]
                      );
                    case 1:
                      return (
                        e.sent() &&
                          Object(l.b)(
                            z.createElement(
                              qn,
                              Object(U.a)({ bIsFirstOpen: !0 }, this.props)
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
              var t = Object(Z.n)(e),
                a = z.createElement(
                  "a",
                  { href: q.c.HELP_BASE_URL },
                  Object(Y.d)("#User_LimitedAccount_UrlInfo")
                );
              Object(l.b)(
                z.createElement(P.c, {
                  strTitle: Object(Y.d)("#Lunar2020_LimitedUserDialogTitle"),
                  strDescription: Object(Y.l)("#User_LimitedAccount", a),
                  bAlertDialog: !0
                }),
                t
              );
            }),
            (t.prototype.VOOnClose = function() {
              q.i.is_support && nn.OpenDoor(this.props.iDoorIndex, !1);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.iDoorIndex,
                a = e.strFontFamily;
              Object(h.a)(
                0 <= t && t < Wn.length && t < nn.GetDoorCount(),
                "Day index #" + t + " not in valid range."
              );
              for (
                var n = Object(Y.d)(Wn[t]),
                  r = !q.i.logged_in,
                  o = nn.BIsDoorOpened(t),
                  i = nn.BCanUserOpenDoor(t),
                  l = !0,
                  s = 0;
                s < t;
                s++
              )
                l = l && nn.BIsDoorOpened(s);
              var c = !o && i && l,
                d = new Date(1e3 * nn.GetRawDoorData()[t].rtime_start),
                u = r
                  ? Object(Y.d)("#Login_SignIn")
                  : o
                  ? Object(Y.d)("#Lunar2020_RereadStory")
                  : c
                  ? Object(Y.d)("#Lunar2020_GiftCanBeOpenedNow")
                  : i
                  ? Object(Y.d)("#Lunar2020_GiftCanBeOpenedAfterThePreviousOne")
                  : Object(Y.d)(
                      "#Lunar2020_GiftLockedUntilDate",
                      d.toLocaleDateString(Y.c.GetPreferredLocales(), {
                        month: "numeric",
                        day: "numeric"
                      })
                    ),
                p = r
                  ? se.a
                  : q.i.is_limited
                  ? this.ShowLimitedUserDialog
                  : o || c
                  ? this.OpenEnvelope
                  : null,
                m = Object(V.a)(
                  mn.a.EnvelopeContainer,
                  r && mn.a.NeedLogin,
                  o && mn.a.Opened,
                  c && mn.a.Unlocked,
                  !o && !c && mn.a.Locked
                );
              return z.createElement(
                "div",
                { className: m },
                z.createElement("div", { className: mn.a.BackingRect }),
                z.createElement(
                  "div",
                  { className: mn.a.Envelope },
                  z.createElement(
                    "div",
                    { className: mn.a.GiftLabel, style: { fontFamily: a } },
                    n
                  )
                ),
                z.createElement(
                  "div",
                  { className: mn.a.OpenState, onClick: p },
                  u
                ),
                (q.i.is_support &&
                  o &&
                  ("beta" == q.c.WEB_UNIVERSE || "dev" == q.c.WEB_UNIVERSE) &&
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(mn.a.OpenState, mn.a.VO),
                      onClick: this.VOOnClose
                    },
                    "(VO) Close Gift"
                  )) ||
                  null
              );
            }),
            Object(U.c)([f.a], t.prototype, "OpenEnvelope", null),
            Object(U.c)([f.a], t.prototype, "ShowLimitedUserDialog", null),
            Object(U.c)([f.a], t.prototype, "VOOnClose", null),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Zn = [
          "#Lunar2020_StoryDayOneHeader",
          "#Lunar2020_StoryDayTwoHeader",
          "#Lunar2020_StoryDayThreeHeader",
          "#Lunar2020_StoryDayFourHeader"
        ],
        Yn = [
          "#Lunar2020_StoryDayOne",
          "#Lunar2020_StoryDayTwo",
          "#Lunar2020_StoryDayThree",
          "#Lunar2020_StoryDayFour"
        ],
        qn = function(e) {
          var t = z.useState(!e.bIsFirstOpen),
            a = t[0],
            n = t[1];
          z.useEffect(function() {
            return n(!0);
          }, []);
          var r =
              q.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.mp4" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            o =
              q.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.webm" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            i = e.iDoorIndex == nn.GetDoorCount() - 1;
          return z.createElement(
            P.d,
            {
              className: mn.a.LunarNewYearOpenEnvelopeVideoDialog,
              closeModal: e.closeModal
            },
            z.createElement(
              "div",
              { className: mn.a.Container },
              z.createElement(
                "div",
                { className: mn.a.Column },
                z.createElement(
                  "div",
                  { className: mn.a.StoryHeader },
                  Object(Y.d)("#Lunar2020_StoryTitle")
                ),
                z.createElement(
                  "div",
                  { className: mn.a.StorySubHeader },
                  Object(Y.d)("#Lunar2020_StorySubTitle")
                ),
                z.createElement(
                  "div",
                  { className: mn.a.StorySubHeader },
                  Object(Y.d)(Zn[e.iDoorIndex])
                ),
                z.createElement(
                  "div",
                  { className: mn.a.StoryText },
                  Object(Y.d)(Yn[e.iDoorIndex])
                ),
                z.createElement(
                  "div",
                  { className: mn.a.VideoBox },
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(mn.a.CoinText, a && mn.a.Visible)
                    },
                    Object(Y.d)("#Lunar2020_ReceivedNumberOfTokens", 100)
                  ),
                  z.createElement(
                    "video",
                    {
                      autoPlay: e.bIsFirstOpen,
                      muted: !0,
                      className: mn.a.LunarNewYearOpenEnvelopeVideo
                    },
                    z.createElement("source", { src: r, type: "video/mp4" }),
                    z.createElement("source", { src: o, type: "video/webm" }),
                    Object(Y.d)("#Lunar2020_ErrorLoadingVideo")
                  )
                )
              ),
              z.createElement(
                "div",
                { className: mn.a.Column },
                z.createElement(
                  "div",
                  { className: mn.a.StoryPicture },
                  z.createElement("img", {
                    src: nn.GetStoryImage(e.iDoorIndex)
                  })
                ),
                !i &&
                  z.createElement(
                    "div",
                    { className: mn.a.CheckBackText },
                    Object(Y.d)("#Lunar2020_CheckBackEachDayForStory")
                  )
              )
            ),
            z.createElement(
              "div",
              { className: mn.a.Links },
              z.createElement(
                "div",
                { className: mn.a.MarketLink },
                z.createElement(
                  "a",
                  { href: q.c.STORE_BASE_URL + "lunarnewyearmarket" },
                  Object(Y.d)("#Lunar2020_LinkFromVideoToMarket")
                )
              ),
              z.createElement(
                "div",
                { className: mn.a.MarketLink, onClick: e.closeModal },
                Object(Y.d)("#Lunar2020_LinkBackToSale")
              )
            )
          );
        },
        Qn = a("ZlHF"),
        Jn = a.n(Qn),
        Kn = a("gyoR"),
        Xn = (a("bUNj"), a("U9Ih")),
        $n = a.n(Xn),
        er = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                currentFlavor: e.GetDefaultTab(),
                bInitialLoadComplete: !1,
                rgCapsules: [],
                nVisibleRows: 12,
                nNumRequestedLastTime: 0,
                bIsMoreAvailable: !1,
                bAwaitingMoreRowsLoading: !1,
                nHiddenCapsules: 0,
                strSearchQuery: "",
                strRawSearch: ""
              }),
              (e.m_timerForChange = new O.b()),
              (e.m_nHighestSentRequestID = 0),
              (e.m_nHighestReceivedRequestID = 0),
              e
            );
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.LoadCapsules(12);
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_timerForChange.Cancel();
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
                  return Object(U.b)(e, void 0, void 0, function() {
                    var t;
                    return Object(U.e)(this, function(e) {
                      return (
                        (t = this.state.nVisibleRows + 8),
                        this.LoadCapsules(t),
                        [2]
                      );
                    });
                  });
                });
            }),
            (e.prototype.LoadCapsules = function(E) {
              var S;
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c, d, u, p, m, h, v, _, b, g, y;
                return Object(U.e)(this, function(e) {
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
                        (d = o.strSearchQuery),
                        [4, x.a.HintLoad()]
                      );
                    case 1:
                      e.sent(),
                        (u = !0),
                        (p = Math.max(s, E + 1)),
                        (e.label = 2);
                    case 2:
                      if (!(l.length <= E && u)) return [3, 9];
                      (m = !1),
                        n ||
                          a.visibility_state === Ta.m.k_EEventStateVisible ||
                          ((h = W.a
                            .Get()
                            .GetPartnerEventPermissions(a.clanSteamID)),
                          (m = h.can_edit)),
                        (v = this.m_nHighestSentRequestID),
                        (_ = void 0),
                        (e.label = 3);
                    case 3:
                      return (
                        e.trys.push([3, 5, , 6]),
                        [
                          4,
                          tn.GetSaleGamesByFlavor(
                            n || m,
                            null === (S = null == r ? void 0 : r.GetTab()) ||
                              void 0 === S
                              ? void 0
                              : S.unique_id,
                            a,
                            i,
                            p,
                            0,
                            d
                          )
                        ]
                      );
                    case 4:
                      return (_ = e.sent()), (u = _.length >= p), [3, 6];
                    case 5:
                      return (
                        (b = e.sent()),
                        console.error(
                          "Failed to load games for browser;" + b.message
                        ),
                        this.setState({
                          bInitialLoadComplete: !0,
                          bAwaitingMoreRowsLoading: !1
                        }),
                        [2]
                      );
                    case 6:
                      return this.m_nHighestReceivedRequestID > v
                        ? [2]
                        : ((this.m_nHighestReceivedRequestID = v),
                          (l = (l = _.map(function(e) {
                            return { id: e, type: "game" };
                          })).filter(function(e) {
                            return r.ShouldShowCapsule(e);
                          })),
                          [4, Object(Kn.e)(l)]);
                    case 7:
                      return (
                        e.sent(), (g = new Array()), [4, Object(Kn.a)(l, !1, g)]
                      );
                    case 8:
                      return (
                        (l = e.sent()),
                        (c = g.length),
                        l.length <= E && (p += 8),
                        [3, 2]
                      );
                    case 9:
                      return (
                        (y = l.length > E || u),
                        this.setState({
                          bInitialLoadComplete: !0,
                          rgCapsules: l,
                          nVisibleRows: E,
                          nNumRequestedLastTime: p,
                          bIsMoreAvailable: y,
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
              this.m_timerForChange.Cancel(),
                this.setState(
                  {
                    currentFlavor: e,
                    bInitialLoadComplete: !1,
                    rgCapsules: [],
                    nVisibleRows: 12,
                    nNumRequestedLastTime: 0,
                    bIsMoreAvailable: !0,
                    bAwaitingMoreRowsLoading: !0,
                    strSearchQuery: "",
                    strRawSearch: ""
                  },
                  function() {
                    return t.LoadCapsules(12);
                  }
                );
            }),
            (e.prototype.GetDefaultTab = function() {
              var e = this.props.section.item_browse_section_data || {};
              return (
                (e.tabs &&
                  e.tabs.find(function(t) {
                    return Ta.w.find(function(e) {
                      return e.flavor === t;
                    });
                  })) ||
                null
              );
            }),
            (e.prototype.RenderTabHeaders = function() {
              var t = this,
                e = this.state,
                a = e.currentFlavor,
                n = e.strRawSearch,
                r = this.props.section.item_browse_section_data || {};
              if (!r.tabs) return null;
              var o = Boolean(n) ? "search" : a;
              return r.tabs
                .map(function(t) {
                  return Ta.w.find(function(e) {
                    return e.flavor === t;
                  });
                })
                .filter(function(e) {
                  return !!e;
                })
                .map(function(e) {
                  return d.a.createElement(
                    M.a,
                    {
                      key: e.flavor,
                      toolTipContent: Object(Y.d)(e.tooltip),
                      onClick: function() {
                        return t.OnFlavorLabelClick(e.flavor);
                      },
                      className: Object(V.a)(
                        $n.a.FlavorLabel,
                        o == e.flavor && $n.a.SelectedFlavor
                      )
                    },
                    Object(Y.d)(e.label)
                  );
                });
            }),
            (e.prototype.OnApplySearch = function(e) {
              var t = this;
              this.setState(
                {
                  bInitialLoadComplete: !1,
                  rgCapsules: [],
                  nVisibleRows: 12,
                  nNumRequestedLastTime: 0,
                  bIsMoreAvailable: !0,
                  bAwaitingMoreRowsLoading: !0,
                  strSearchQuery: e
                },
                function() {
                  return t.LoadCapsules(12);
                }
              );
            }),
            (e.prototype.OnUpdateSearch = function(e) {
              var t = this,
                a = e.target.value && e.target.value.trim().toLocaleLowerCase();
              this.setState({ strRawSearch: e.target.value }),
                this.m_nHighestSentRequestID++;
              this.m_timerForChange.Schedule(200, function() {
                return t.OnApplySearch(a);
              });
            }),
            (e.prototype.render = function() {
              var e = this.state,
                t = e.bInitialLoadComplete,
                a = e.rgCapsules,
                n = e.nVisibleRows,
                r = e.bIsMoreAvailable,
                o = e.bAwaitingMoreRowsLoading,
                i = e.strRawSearch,
                l = this.props.section.item_browse_section_data || {},
                s = Boolean(i),
                c = this.RenderTabHeaders();
              return c && 0 != c.length
                ? d.a.createElement(
                    "div",
                    { className: $n.a.SaleItemBrowserContainer },
                    d.a.createElement(
                      Et,
                      { className: $n.a.SaleItemBrowserHeaderContainer },
                      d.a.createElement(
                        "div",
                        { className: $n.a.SaleItemBrowserHeader },
                        c,
                        l.enable_search &&
                          d.a.createElement(
                            "div",
                            { className: $n.a.SuggestContainer },
                            d.a.createElement(D.B, null),
                            d.a.createElement(g.j, {
                              type: "text",
                              onChange: this.OnUpdateSearch,
                              bAlwaysShowClearAction: s,
                              value: i
                            })
                          )
                      )
                    ),
                    t &&
                      a.slice(0, n).map(function(e) {
                        return d.a.createElement(
                          "div",
                          { key: e.id, className: fn.a.SaleItemBrowserRow },
                          d.a.createElement(Nn.g, {
                            id: e.id,
                            type: e.type,
                            bUseDemoLayout: Boolean(l.show_as_demos)
                          })
                        );
                      }),
                    t &&
                      0 == a.length &&
                      d.a.createElement(
                        "div",
                        { className: $n.a.EmptyResults },
                        Object(Y.d)("#Sale_EmptySearchResultsOrLoadFailure")
                      ),
                    (!t || r) &&
                      d.a.createElement(
                        "div",
                        {
                          className: Object(V.a)(
                            $n.a.ShowContentsContainer,
                            !t && $n.a.Loading
                          )
                        },
                        !t || o
                          ? d.a.createElement(J.a, { size: "medium" })
                          : d.a.createElement(
                              "button",
                              {
                                onClick: this.ShowMoreRows,
                                className: $n.a.ShowContentsButton
                              },
                              Object(Y.d)("#Sale_ShowMore")
                            )
                      )
                  )
                : null;
            }),
            Object(U.c)([f.a], e.prototype, "ShowMoreRows", null),
            Object(U.c)([f.a], e.prototype, "OnUpdateSearch", null),
            (e = Object(U.c)([r.a], e))
          );
        })(d.a.Component),
        tr = a("onkS"),
        ar = a("oVVc"),
        nr = a("l2mU"),
        rr = a("31dG"),
        or = a.n(rr);
      function ir(e, t) {
        for (var a = [], n = 0, r = e.capsules; n < r.length; n++) {
          var o = r[n];
          if ("sub" === o.type) {
            var i = ar.b.GetPackageInfo(o.id);
            if (i) {
              if ((console.log(JSON.stringify(i)), i.renewal_time_amount === t))
                return i.packageid;
            } else a.push(o.id);
          }
        }
        0 < a.length && ar.b.LoadPackageInfo(a);
      }
      var lr = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.OnClickPurchase = function(e) {
              x.a.AddToCart(
                e,
                this.props.sub_package_id,
                q.c.STORE_BASE_URL + "cart/addtocart",
                q.c.STORE_BASE_URL + "cart"
              );
            }),
            (t.prototype.render = function() {
              var e = ar.b.GetPackageInfo(this.props.sub_package_id),
                t = ar.b.GetPackageInfo(this.props.compare_package_id);
              if (!e || (!t && this.props.compare_package_id))
                return (
                  ar.b.LoadPackageInfo([
                    this.props.sub_package_id,
                    this.props.compare_package_id
                  ]),
                  null
                );
              if (!e.formatted_final_price) return null;
              var a = e.formatted_final_price,
                n = Object(nr.a)(e, t),
                r = [a, n || ""],
                o = Y.d.apply(
                  void 0,
                  Object(U.g)([this.props.price_loc_token], r)
                ),
                i = Y.d.apply(
                  void 0,
                  Object(U.g)([this.props.body_loc_token], r)
                ),
                l = Y.d.apply(
                  void 0,
                  Object(U.g)(["#Sale_Subscription_Save"], r)
                ),
                s = z.createElement("div", { className: or.a.LogoImg }),
                c = (function(e) {
                  for (var t = 0, a = e.appids; t < a.length; t++) {
                    var n = a[t];
                    if (x.a.BOwnsApp(n)) return !0;
                  }
                  return !1;
                })(e),
                d = null,
                d = x.a.BOwnsPackage(this.props.sub_package_id)
                  ? z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          or.a.PurchaseButton,
                          or.a.AlreadyOwnedPackage
                        )
                      },
                      Object(Y.d)("#Sale_Subscription_AlreadyOwnedPackage")
                    )
                  : c
                  ? z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          or.a.PurchaseButton,
                          or.a.AlreadyOwnedApp
                        )
                      },
                      Object(Y.d)("#Sale_Subscription_AlreadyOwnedApp")
                    )
                  : z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          or.a.PurchaseButton,
                          or.a.UnOwned
                        ),
                        onClick: this.OnClickPurchase
                      },
                      this.props.button_text
                    );
              return z.createElement(
                "div",
                { className: or.a.SubscriptionBlock },
                s,
                z.createElement(
                  "div",
                  { className: or.a.PriceBlock },
                  z.createElement("span", { className: or.a.PriceDisplay }, o),
                  Boolean(n) &&
                    z.createElement(
                      "span",
                      { className: or.a.SavingsDisplay },
                      l
                    )
                ),
                z.createElement("div", { className: or.a.BodyTextBlock }, i),
                d
              );
            }),
            Object(U.c)([f.a], t.prototype, "OnClickPurchase", null),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        sr = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = ir(this.props.section, 12),
                t = ir(this.props.section, 3),
                a = ir(this.props.section, 1);
              return z.createElement(
                "div",
                { className: or.a.MainBlock },
                z.createElement(
                  "span",
                  { className: or.a.SelectAPlan },
                  Object(Y.d)("#Sale_Subscription_SelectPlan")
                ),
                z.createElement(
                  "div",
                  { className: or.a.SubscriptionListBlock },
                  z.createElement(lr, {
                    sub_package_id: e,
                    compare_package_id: a,
                    price_loc_token: "#Sale_Subscription_Annual_Price",
                    body_loc_token: "#Sale_Subscription_Annual_Body",
                    button_text: Object(Y.d)("#Sale_Subscription_Annual_Button")
                  }),
                  z.createElement(lr, {
                    sub_package_id: t,
                    price_loc_token: "#Sale_Subscription_Quarterly_Price",
                    body_loc_token: "#Sale_Subscription_Quarterly_Body",
                    button_text: Object(Y.d)(
                      "#Sale_Subscription_Quarterly_Button"
                    )
                  }),
                  z.createElement(lr, {
                    sub_package_id: a,
                    price_loc_token: "#Sale_Subscription_Monthly_Price",
                    body_loc_token: "#Sale_Subscription_Monthly_Body",
                    button_text: Object(Y.d)(
                      "#Sale_Subscription_Monthly_Button"
                    )
                  })
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        cr = a("R+8l");
      function dr(e, t, a) {
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
      function ur(e) {
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
              : Object(Y.d)(t.default_label)));
        if (!c) return null;
        var d,
          u = ((d = l),
          s
            ? dr(
                d.tab_active_label_color,
                d.tab_active_background_gradient_top,
                d.tab_active_background_gradient_bottom
              )
            : dr(
                d.tab_inactive_label_color,
                d.tab_inactive_background_gradient_top,
                d.tab_inactive_background_gradient_bottom
              ));
        return z.createElement(
          "div",
          {
            className: Object(V.a)(Jn.a.SaleTab, i),
            onClick: function() {
              return o(n);
            },
            style: u
          },
          z.createElement(
            "div",
            { className: Object(V.a)(Jn.a.SaleTabLabel) },
            c
          )
        );
      }
      var pr = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
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
                      (e += Ar(
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
                return z.createElement(
                  "div",
                  { className: Jn.a.TabContentsElement },
                  Object(Y.d)("#SalePage_Tabs_AllContents")
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
                  d = Object(Y.d)("#AppType_" + c.type) + "_" + c.id;
                a.has(d) ||
                  (a.add(d),
                  (o = null),
                  (i =
                    (o =
                      "bundle" === c.type
                        ? cr.a.GetBundleInfo(c.id)
                        : "sub" === c.type
                        ? ar.b.GetPackageInfo(c.id)
                        : u.a.GetAppInfo(c.id)) && o.name
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
                    : Object(Y.d)("#Sale_TabDayIndex", c.visibility_index)),
                  t.push({ sName: i, sKey: d, sDisplay: s, nDaySortIndex: l }));
              }
              return (
                t.sort(function(e, t) {
                  return e.nDaySortIndex !== t.nDaySortIndex
                    ? e.nDaySortIndex - t.nDaySortIndex
                    : e.sName.localeCompare(t.sName);
                }),
                z.createElement(
                  z.Fragment,
                  null,
                  t.map(function(e) {
                    return z.createElement(
                      "div",
                      { key: e.sKey, className: Jn.a.TabContentsElement },
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
              return z.createElement(
                "div",
                { className: Object(V.a)(Jn.a.SaleSection), style: Nr(t, a) },
                z.createElement(Sr, Object(U.a)({}, this.props)),
                z.createElement(
                  "div",
                  { className: Jn.a.TabContentsContainer },
                  this.RenderTabCapsules()
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        mr = (function(t) {
          function a() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { nMaxTabsPerRow: a.GetMaxTabsPerRow() }),
              (e.m_refTabLocation = z.createRef()),
              e
            );
          }
          return (
            Object(U.d)(a, t),
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
              var i = Object(V.a)(Jn.a.SaleSectionTabsTab),
                l = n.tabs.map(function(e) {
                  var t = "Tab_" + e.unique_id;
                  return z.createElement(ur, {
                    key: t,
                    section: n,
                    selected: e === o,
                    tab: e,
                    language: r,
                    classNames: Object(V.a)(
                      i,
                      e === o && Jn.a.SaleSectionTabsSelected
                    ),
                    onTabSelected: function(e) {
                      return a.OnTabSelected(n, e);
                    }
                  });
                });
              return z.createElement(
                z.Fragment,
                null,
                z.createElement("div", { ref: this.m_refTabLocation }),
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      Jn.a.SaleSection,
                      Jn.a.SaleSectionTabs
                    ),
                    style: Nr(n, t)
                  },
                  z.createElement(
                    Et,
                    { className: Jn.a.SaleSectionTabContainer },
                    z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          Q.a.SaleSectionContainer,
                          Jn.a.SaleSectionTabsRow
                        )
                      },
                      l
                    )
                  )
                )
              );
            }),
            Object(U.c)([f.a], a.prototype, "OnTabSelected", null),
            a
          );
        })(z.Component),
        hr = z.lazy(function() {
          return Promise.all([a.e(0), a.e(1), a.e(6)]).then(
            a.bind(null, "NIbt")
          );
        });
      var vr = (function(a) {
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
            Object(U.d)(e, a),
            (e.prototype.componentDidMount = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.props.eventModel
                        ? [3, 2]
                        : ((t = q.b.CLANSTEAMID),
                          (a = q.b.ANNOUNCEMENT_GID),
                          [
                            4,
                            B.c.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
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
                        Qa.a
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
                : B.c.GetClanEventFromAnnouncementGID(q.b.ANNOUNCEMENT_GID);
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
                if ("event_schedule" === t[e].section_type) {
                  en.c.DisableAutoPlay();
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
                nn.BHasSalePageBackgroundOverride() &&
                  ((a = nn.GetSalePageBackgroundOverride()),
                  (n = nn.GetSalePageBackgroundWEBM()),
                  (r = nn.GetSalePageBackgroundMP4()));
                var o =
                    e.BHasBroadcastEnabled() &&
                    ("1688220857098505775" == e.GID ||
                      "1590261853006818581" == e.GID),
                  i = W.a.Get().GetPartnerEventPermissions(e.clanSteamID);
                return z.createElement(
                  b.a,
                  null,
                  z.createElement(
                    _r,
                    {
                      className:
                        Jn.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                      backgroundImage: a,
                      backgroundColor: e.jsondata.sale_background_color
                    },
                    Boolean(r || n) &&
                      z.createElement(
                        "div",
                        { className: Jn.a.fullscreen_bg },
                        z.createElement(
                          "video",
                          {
                            key: nn.GetLastDoorOpen(),
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            ref: function(e) {
                              e && (e.playbackRate = 0.9);
                            },
                            className: Object(V.a)(
                              Jn.a.SaleBackground,
                              Jn.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                              "SaleBackground",
                              Jn.a.fullscreen_bg__video
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
                          z.createElement("source", {
                            src: n,
                            type: "video/webm"
                          }),
                          !q.c.IN_CLIENT &&
                            z.createElement("source", {
                              src: r,
                              type: "video/mp4"
                            })
                        )
                      ),
                    z.createElement(
                      "div",
                      { className: Jn.a.SaleHeaderContainer },
                      e.jsondata.sale_header_overlay &&
                        z.createElement(br, null),
                      e.jsondata.sale_title_overlay &&
                        z.createElement(
                          "div",
                          null,
                          z.createElement(
                            "h1",
                            {
                              style: {
                                fontFamily: Gr(
                                  e.jsondata.sale_font,
                                  this.props.language
                                ),
                                fontWeight: e.jsondata.sale_font_weight
                              }
                            },
                            e.GetNameWithFallback(this.props.language)
                          ),
                          z.createElement("hr", null),
                          z.createElement(
                            "div",
                            {
                              style: {
                                fontFamily: Gr(
                                  e.jsondata.sale_font,
                                  this.props.language
                                ),
                                fontWeight: e.jsondata.sale_font_weight
                              }
                            },
                            z.createElement(En.a, {
                              text: e.GetDescriptionWithFallback(
                                this.props.language
                              ),
                              partnerEventStore: B.c,
                              showErrorInfo: this.props.bIsPreview,
                              event: e
                            })
                          )
                        )
                    ),
                    z.createElement(
                      "div",
                      {
                        className:
                          Jn.a.SaleOuterContainer +
                          " " +
                          Jn.a["CustomStyle_" + e.jsondata.sale_vanity_id] +
                          " SaleOuterContainer",
                        style: {
                          marginTop: e.jsondata.sale_header_offset + "px"
                        }
                      },
                      Boolean(
                        e.BHasBroadcastEnabled() &&
                          e.BSaleShowBroadcastAtTopOfPage()
                      ) &&
                        z.createElement(
                          b.a,
                          null,
                          z.createElement(
                            "div",
                            { className: Jn.a.SaleBroadcastCtn },
                            z.createElement(
                              z.Suspense,
                              { fallback: z.createElement("div", null) },
                              z.createElement(hr, {
                                promotionName: this.props.promotionName,
                                clanid: Number(q.b.CLANACCOUNTID),
                                event: e,
                                bIsPreview: this.props.bIsPreview,
                                language: this.props.language,
                                accountIDs: this.props.bIsPreview
                                  ? e.jsondata.broadcast_whitelist
                                  : void 0,
                                bShowCapsuleArt: !0,
                                fnRenderBroadcastContext: o
                                  ? function() {
                                      return z.createElement(Mr, null);
                                    }
                                  : null
                              })
                            )
                          )
                        ),
                      e.jsondata.sale_show_creator &&
                        z.createElement(
                          b.a,
                          null,
                          z.createElement(
                            "div",
                            {
                              style: {
                                width: "100%",
                                margin: "0 auto",
                                maxWidth: "940px"
                              }
                            },
                            z.createElement(de, {
                              creatorID: {
                                name: null,
                                clan_account_id: e.clanSteamID.GetAccountID(),
                                type: "developer"
                              },
                              bShowTagline: !0,
                              bHideCreatorType: !0
                            })
                          )
                        ),
                      z.createElement(Er, {
                        bIsPreview: t,
                        event: e,
                        language: this.props.language,
                        promotionName: this.props.promotionName,
                        nSaleDayIndex: this.state.nSaleDayIndex
                      }),
                      e.jsondata.sale_browse_more_button &&
                        z.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "14px"
                            }
                          },
                          z.createElement(jr, {
                            text: Object(Y.d)("#Sale_SeeAllSpecials"),
                            url: e.jsondata.sale_browsemore_url,
                            color: e.jsondata.sale_browsemore_color,
                            bgcolor: e.jsondata.sale_browsemore_bgcolor
                          })
                        ),
                      i.can_edit &&
                        z.createElement(hn, {
                          eventModel: e,
                          bPreviewMode: this.props.bIsPreview,
                          useAnchors: !this.props.bIsPreview,
                          fnOnUpdateSaleDayIndex: this.OnChangeDayIndex
                        })
                    )
                  )
                );
              }
              return z.createElement(
                "div",
                { className: Oe.a.FlexCenter, style: { height: "500px" } },
                z.createElement(J.a, {
                  size: "medium",
                  string: Object(Y.d)("#Loading")
                })
              );
            }),
            Object(U.c)([f.a], e.prototype, "OnChangeDayIndex", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        _r = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_refBackgroundPanel = z.createRef()), e;
          }
          return (
            Object(U.d)(e, t),
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
              return z.createElement(
                "div",
                {
                  className: Object(V.a)(
                    this.props.className,
                    Jn.a.SaleBackground,
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
        })(z.Component),
        br = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.componentDidMount = function() {
              a("+ZmX").Init();
            }),
            (t.prototype.render = function() {
              return z.createElement("canvas", {
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
        })(z.Component),
        gr = (function() {
          function n(e, t) {
            var a = this;
            (this.m_activeTab = null),
              (this.m_capsuleFilter = null),
              e &&
                ((this.m_activeTab = e).capsules && 0 !== e.capsules.length
                  ? ((this.m_capsuleFilter = new Set()),
                    kr(e.capsules, t).forEach(function(e) {
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
        yr = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
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
                        0 < (t = Number(ia(n.props.location, "tab")))
                          ? e.tabs.find(function(e) {
                              return e.unique_id === t;
                            })
                          : void 0) || e.tabs[0]),
                    r.set(e, new gr(a, n.props.nSaleDayIndex)));
                }),
                r
              );
            }),
            (t.prototype.OnTabSelected = function(e, t) {
              la(this.props.history, "tab", String(t.unique_id));
            }),
            (t.prototype.render = function() {
              var l = this,
                e = this.props,
                s = e.event,
                c = e.language,
                d = e.promotionName,
                u = e.bIsPreview,
                p = (e.nSaleDayIndex, this.GetTabSelectionsFromURL()),
                m = !1,
                h = !1,
                v = new gr(null, this.props.nSaleDayIndex),
                _ = [{ elements: [], activeTab: v }];
              s.GetSaleSections().forEach(function(e, t) {
                var a = _[_.length - 1].activeTab;
                if (a.ShouldShowSection(e)) {
                  var n,
                    r = e.diable_tab_id_filtering ? v : a,
                    o = null;
                  if (
                    "items" == (n = e).section_type &&
                    n.smart_section &&
                    ("wishlist" == n.smart_section_type ||
                      "interactive_recommender" == n.smart_section_type ||
                      "dlc_music_onsale" == n.smart_section_type ||
                      "ir_subscription" == n.smart_section_type ||
                      ("wishlist_onsale" == n.smart_section_type &&
                        !on.GetHideWishlist()) ||
                      ("dlc_onsale" == n.smart_section_type &&
                        !on.GetHideDLC()) ||
                      ("interactive_recommender_onsale" ==
                        n.smart_section_type &&
                        !on.GetHideIRList())) &&
                    !q.i.logged_in
                  )
                    m ||
                      ((o = z.createElement(fr, {
                        section: e,
                        event: s,
                        language: c
                      })),
                      (m = !0));
                  else
                    switch (e.section_type) {
                      case "items":
                      case "events":
                      case "links":
                        o = z.createElement(
                          Tr,
                          Object(U.a)({ section: e, activeTab: r }, l.props)
                        );
                        break;
                      case "broadcast":
                        s.BHasBroadcastEnabled() &&
                          !h &&
                          ((o = z.createElement(Br, {
                            promotionName: d,
                            eventModel: s,
                            bIsPreview: u,
                            language: c,
                            activeTab: r,
                            bShowDemoOptions: e.show_as_demos
                          })),
                          (h = !0));
                        break;
                      case "event_description":
                        o = z.createElement(
                          Cr,
                          Object(U.a)({ section: e }, l.props)
                        );
                        break;
                      case "doors":
                        o = z.createElement(Un, {
                          strFontFamily: Gr(s.jsondata.sale_font, c)
                        });
                        break;
                      case "text_section":
                        o = z.createElement(
                          Or,
                          Object(U.a)({ section: e }, l.props)
                        );
                        break;
                      case "tabs":
                        var i = p.get(e);
                        _.push({ activeTab: i, elements: [] }),
                          (o = z.createElement(
                            mr,
                            Object(U.a)({ section: e }, l.props, {
                              activeTab: i.GetTab(),
                              onTabSelected: l.OnTabSelected
                            })
                          ));
                        break;
                      case "curator":
                        e.curator_clan_id &&
                          (o = z.createElement(
                            "div",
                            {
                              style: {
                                width: "100%",
                                margin: "0 auto",
                                maxWidth: "940px"
                              }
                            },
                            z.createElement(de, {
                              creatorID: {
                                name: null,
                                clan_account_id: e.curator_clan_id,
                                type: "developer"
                              },
                              bShowTagline: !0,
                              bHideCreatorType: !0
                            })
                          ));
                        break;
                      case "event_schedule":
                        o = z.createElement(
                          tr.b,
                          Object(U.a)({ section: e }, l.props, { activeTab: r })
                        );
                        break;
                      case "vo_internal":
                        if (e.internal_section_data)
                          switch (e.internal_section_data.internal_type) {
                            case "subscription_pricing":
                              o = z.createElement(
                                sr,
                                Object(U.a)({ section: e }, l.props)
                              );
                              break;
                            case "tab_contents":
                              o = z.createElement(
                                pr,
                                Object(U.a)({ section: e }, l.props, {
                                  tab: a.GetTab(),
                                  showReferences: !1
                                })
                              );
                              break;
                            case "tab_references":
                              o = z.createElement(
                                pr,
                                Object(U.a)({ section: e }, l.props, {
                                  tab: a.GetTab(),
                                  showReferences: !0
                                })
                              );
                          }
                        break;
                      case "sale_item_browser":
                        o = z.createElement(
                          wr,
                          Object(U.a)({ section: e }, l.props, { activeTab: r })
                        );
                    }
                  _[_.length - 1].elements.push(
                    z.createElement(
                      b.a,
                      { key: "SaleSectionIndex_" + e.unique_id + "_" + t },
                      o
                    )
                  );
                }
              });
              var t = _.map(function(e, t) {
                return z.createElement(
                  "div",
                  {
                    key: "TabSection_" + t,
                    className: Jn.a.SaleSectionTabListContainer
                  },
                  e.elements
                );
              });
              return z.createElement(
                "div",
                { className: Jn.a.SaleSectionListContainer },
                t
              );
            }),
            Object(U.c)([f.a], t.prototype, "OnTabSelected", null),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Er = Object(i.h)(yr);
      var Sr = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language;
          if (!Ar(t, n, a.clanSteamID.GetAccountID())) return null;
          var r,
            o,
            i,
            l = z.createElement(
              "div",
              {
                className: Q.a.SaleSectionHeader,
                style: ((r = t),
                (i = n),
                {
                  fontFamily: Gr((o = a).jsondata.sale_font, i),
                  fontWeight: o.jsondata.sale_font_weight,
                  fontSize: o.jsondata.sale_section_font_size,
                  textTransform: o.jsondata.sale_section_disable_capitalize
                    ? "initial"
                    : null,
                  color: r.label_color
                })
              },
              Ar(t, n, a.clanSteamID.GetAccountID())
            );
          return (
            t.label_link &&
              (l = z.createElement(
                "a",
                {
                  href:
                    (q.c.IN_CLIENT ? "steam://openurl/" : "") +
                    Dr(t.label_link),
                  target: q.c.IN_CLIENT ? void 0 : "_blank"
                },
                l
              )),
            l
          );
        },
        fr = function(e) {
          var t = e.section,
            a = e.event;
          e.language;
          return z.createElement(
            "div",
            { className: Jn.a.SaleSection, style: Nr(t, a) },
            z.createElement(Sr, Object(U.a)({}, e)),
            z.createElement(
              "div",
              { className: Jn.a.SaleSectionLoginPrompt },
              Object(Y.d)("#SalePage_LoginPrompt"),
              z.createElement(
                "button",
                { onClick: se.a, className: Jn.a.LoginButton },
                Object(Y.d)("#Login_SignIn")
              )
            )
          );
        },
        Cr = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview;
          return z.createElement(
            "div",
            {
              className: Object(V.a)(Jn.a.SaleSection, _n.a.SaleSectionCtn),
              style: Nr(t, a)
            },
            z.createElement(Sr, Object(U.a)({}, e)),
            z.createElement(
              "div",
              { className: Q.a.SaleSectionContainer },
              z.createElement(En.a, {
                text: a.GetDescriptionWithFallback(n),
                partnerEventStore: B.c,
                showErrorInfo: r,
                event: a
              })
            )
          );
        },
        Or = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview,
            o = "";
          return (
            t.text_section_contents &&
              (o =
                t.text_section_contents[n] || t.text_section_contents[0] || ""),
            z.createElement(
              "div",
              {
                className: Object(V.a)(Jn.a.SaleSection, _n.a.SaleSectionCtn),
                style: Nr(t, a)
              },
              z.createElement(Sr, Object(U.a)({}, e)),
              z.createElement(
                "div",
                { className: Q.a.SaleSectionContainer },
                z.createElement(En.a, {
                  text: o,
                  partnerEventStore: B.c,
                  showErrorInfo: r,
                  event: a
                })
              )
            )
          );
        },
        wr = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.section,
                a = e.event;
              return z.createElement(
                yn.a,
                {
                  placeholderHeight: "100vh",
                  rootMargin: "0px 0px 100% 0px",
                  mode: "LoadAndUnload",
                  className: Object(V.a)(Jn.a.SaleSection, _n.a.SaleSectionCtn),
                  style: Nr(t, a)
                },
                z.createElement(Sr, Object(U.a)({}, this.props)),
                z.createElement(er, Object(U.a)({}, this.props))
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Tr = (function(t) {
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
            Object(U.d)(e, t),
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t;
                return Object(U.e)(this, function(e) {
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
                  Object(w.a)(
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
                  Object(Ne.f)(t.capsules),
                    Object(Ne.f)(t.links),
                    Object(Ne.f)(t.events),
                    (t.rtime32_last_modified = a.rtime32_last_modified),
                    window.sessionStorage.setItem(n, JSON.stringify(t));
                }
              }
              return t;
            }),
            (e.prototype.LoadCapsules = function(A) {
              return (
                void 0 === A && (A = 0),
                Object(U.b)(this, void 0, void 0, function() {
                  var r,
                    o,
                    i,
                    l,
                    s,
                    c,
                    d,
                    u,
                    p,
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
                    j,
                    D;
                  return Object(U.e)(this, function(e) {
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
                            : [4, x.a.HintLoad()]
                        );
                      case 1:
                        return (e.sent(), (u = void 0), r.smart_section)
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
                            (p = Array.from(n)),
                            [
                              4,
                              (function(p, m, h, v, _, b) {
                                return Object(U.b)(
                                  this,
                                  void 0,
                                  void 0,
                                  function() {
                                    var t, a, n, r, o, i, l, s, c, d, u;
                                    return Object(U.e)(this, function(e) {
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
                                                  tn.GetDiscounts({
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
                                                tn.GetDiscounts({
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
                                            : [4, tn.GetTopN(_, i)];
                                        case 5:
                                          return [
                                            2,
                                            (l = e.sent()).map(function(e) {
                                              return { id: e, type: "game" };
                                            })
                                          ];
                                        case 6:
                                          if (!Object(Ta.g)(t)) return [3, 11];
                                          e.label = 7;
                                        case 7:
                                          return (
                                            e.trys.push([7, 9, , 10]),
                                            [
                                              4,
                                              tn.GetSaleGamesByFlavor(
                                                p,
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
                                          return q.i.logged_in
                                            ? [3, 12]
                                            : [2, []];
                                        case 12:
                                          return !q.i.logged_in ||
                                            ("wishlist" !== t &&
                                              "interactive_recommender" !== t)
                                            ? [3, 13]
                                            : [
                                                2,
                                                (l = b.filter(function(e) {
                                                  return (
                                                    !x.a.BOwnsApp(e) &&
                                                    (("wishlist" === t &&
                                                      x.a.BIsGameWishlisted(
                                                        e
                                                      )) ||
                                                      ("interactive_recommender" ===
                                                        t &&
                                                        x.a.BIsGameRecommended(
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
                                            !q.i.logged_in ||
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
                                          return on.GetHideWishlist()
                                            ? [3, 16]
                                            : [4, tn.GetWishlistOnSale()];
                                        case 15:
                                          (l = e.sent()),
                                            (s = "game"),
                                            (e.label = 16);
                                        case 16:
                                          return [3, 29];
                                        case 17:
                                          return (
                                            (s = "dlc"),
                                            on.GetHideDLC()
                                              ? [3, 19]
                                              : [
                                                  4,
                                                  tn.GetDLCForGamesInMyLibraryOnSale()
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
                                              tn.GetSoundtracksForGamesInMyLibraryOnSale()
                                            ]
                                          );
                                        case 21:
                                          return (l = e.sent()), [3, 29];
                                        case 22:
                                          return (
                                            (s = "game"),
                                            on.GetHideIRList()
                                              ? [3, 24]
                                              : [
                                                  4,
                                                  tn.GetInteractiveRecommendationsOnSale()
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
                                              tn.GetTagRecommendorForThisSale(
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
                                              (d = ln.Get()).LoadSubscriptionInfo(
                                                c
                                              )
                                            ]
                                          );
                                        case 28:
                                          return (
                                            e.sent(),
                                            (u = d.GetAllAppForMaster(c)),
                                            (l = Array.from(u).filter(function(
                                              e
                                            ) {
                                              return x.a.BIsGameRecommended(e);
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
                                (q.c.IN_CLIENT
                                  ? "library-"
                                  : Object(q.e)() + "-") + t),
                                p
                              )
                            ])
                          : [3, 3];
                      case 2:
                        return (u = e.sent()), [3, 4];
                      case 3:
                        (u = r.capsules), (e.label = 4);
                      case 4:
                        return (
                          (u = kr(
                            (u = u.filter(function(e) {
                              return c.ShouldShowCapsule(e);
                            })),
                            d
                          )),
                          (m = !1),
                          (h = u.length),
                          0 < (v = this.GetRowsToShow(A)) &&
                            !s &&
                            "store" === Object(q.e)() &&
                            ((_ =
                              (function(e, t) {
                                for (var a = Lr(e), n = 0, r = 0; r < t; r++)
                                  n += a[r % a.length];
                                return n;
                              })(r, v) + 4) +
                              4 <
                              h &&
                              ((h = _), (m = !0))),
                          0 < (O = Object(Ta.s)(r)) &&
                            ((b = Math.max(O + 5, Math.floor(1.1 * O))),
                            (h = Math.min(h, b))),
                          u.length > h && (u = u.slice(0, h)),
                          [4, Object(Kn.e)(u)]
                        );
                      case 5:
                        return (
                          e.sent(), (g = Ir(r)) ? [4, Object(Kn.d)(u)] : [3, 8]
                        );
                      case 6:
                        return (
                          (y = e.sent()),
                          0 <
                          (E = y
                            .map(function(e) {
                              var t = Xe.a.GetAppLinkInfo(e);
                              return t && t.full_game_appid;
                            })
                            .filter(function(e) {
                              return !!e;
                            })).length
                            ? [4, Xe.a.LoadAppLinkInfo(E)]
                            : [3, 8]
                        );
                      case 7:
                        e.sent(), (e.label = 8);
                      case 8:
                        return (S = new Array()), [4, Object(Kn.a)(u, g, S)];
                      case 9:
                        return (
                          (f = e.sent()),
                          (C = S.length),
                          0 < (O = Object(Ta.s)(r)) &&
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
                              ? [4, rn.GetRecentEventsForSalesPage(i)]
                              : [3, 13]);
                      case 11:
                        return (
                          (T = e.sent()),
                          (I = T.map(function(e) {
                            var t = new L.a(e.clan_steamid);
                            return B.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
                          B.c.LoadBatchPartnerEventsByAnnouncementGID(
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
                          Xe.a.LoadAppLinkInfo(
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
                          : ((j = r.links),
                            "sale_tabhub" !== r.smart_section_type
                              ? [3, 18]
                              : [4, tn.GetSaleTags()]);
                      case 17:
                        (D = e.sent()),
                          (j = D.map(function(e) {
                            return {
                              url: e.url,
                              localized_link_capsule: void 0,
                              materialized_link_capsule: e.square
                            };
                          })),
                          (e.label = 18);
                      case 18:
                        this.setState({ links: j, bInitialLoadComplete: !0 }),
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
                    var a = Lr(e),
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
              var a = Object(Ta.q)(t);
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
                u = r.bScreenIsWide,
                p = r.nMaxCapsulesPerRow,
                m = r.bAwaitingShowContentLoading;
              if (!o) return null;
              var h = this.GetSectionForSession(),
                v = 1 === s.length,
                _ = v ? [1] : Lr(h),
                b = (function(e) {
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
                            return z.createElement(
                              "div",
                              {
                                key: r.unique_id + "_" + t.GID,
                                style: {},
                                className: gn.a.OtherEvents
                              },
                              z.createElement(je.a, { event: t }),
                              z.createElement(On, {
                                event: t,
                                openNewWindow: !0,
                                appInfo: r.hide_prices
                                  ? void 0
                                  : Xe.a.GetAppLinkInfo(t.appid),
                                onClick: function(e) {
                                  W.a.Get().RecordEventRead(t, 8),
                                    Object(Aa.a)(t, Z.n(e)),
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
                            return z.createElement(Nn.b, {
                              key: r.unique_id + "_" + t,
                              link: e,
                              language: i,
                              clanAccountID: c,
                              strClassName: Jn.a.LinkCapsule
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
                              ? z.createElement(Nn.f, {
                                  key: n,
                                  capsule: e,
                                  bShowParentApp: l,
                                  bUseSubscriptionLayout: d,
                                  bUseDemoLayout: r.show_as_demos,
                                  bHidePrice: r.hide_prices
                                })
                              : z.createElement(
                                  "div",
                                  {
                                    key: n,
                                    className: Jn.a.AppSummaryWidgetCtn
                                  },
                                  z.createElement(Nn.g, {
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
                  bCanShowSingleRowCapsules:
                    (v && 1 < p) ||
                    Lr(h).every(function(e) {
                      return 1 === e;
                    }),
                  bShowParentApp: Ir(h)
                }).filter(function(e) {
                  return !!e;
                }),
                g = null;
              if (0 < b.length) {
                var y = Boolean(this.props.activeTab.GetTab()),
                  E = Object(Ta.r)(h),
                  S = _[0],
                  f = h.show_as_carousel && E <= 1;
                if (f && b.length > S)
                  g = z.createElement(
                    $t,
                    {
                      hideArrows: !u,
                      visibleElements: S,
                      className: Object(V.a)(
                        "SaleSectionCarousel",
                        "SaleSectionCarouselPadding"
                      ),
                      useTestScrollbar: y
                    },
                    b
                  );
                else {
                  var C = this.GetRowsToShow(this.state.nShowAdditionalRows),
                    O = !0;
                  if (h.show_as_carousel) (C = E), (O = f);
                  else if (0 == this.state.nShowAdditionalRows && 0 < C) {
                    for (var w = 0, T = 0; w < C; w++) {
                      if ((T += N = Math.min(_[w % _.length], p)) > b.length)
                        break;
                    }
                    C = Math.max(2, w);
                  }
                  for (
                    var I, k = new Array(), j = new Array(), D = 0, A = 0;
                    D < b.length;
                    A++
                  ) {
                    for (var L = 0; (0 == C || L < C) && D < b.length; L++) {
                      var N = Math.min(_[L % _.length], p),
                        G = Math.min(N, b.length - D);
                      G < N && 0 === L && (N = Math.max(2, G));
                      var B = N - G,
                        M =
                          B % 2 != 0
                            ? "minmax(0, 0.5fr) repeat(" +
                              (N - 1) +
                              ", minmax(0, 1fr)) minmax(0, 0.5fr)"
                            : "repeat(" + N + ", minmax(0, 1fr))",
                        x = null,
                        R = null;
                      if (0 < B)
                        for (
                          var F = Math.floor((1 + B) / 2),
                            x = new Array(),
                            R = new Array(),
                            P = 0;
                          P < F;
                          P++
                        )
                          x.push(z.createElement("div", { key: "front_" + P })),
                            R.push(
                              z.createElement("div", { key: "back_" + P })
                            );
                      j.push(
                        z.createElement(
                          "div",
                          {
                            key: "Row_" + L,
                            className: Object(V.a)(
                              Q.a.SaleSectionContainer,
                              Jn.a.SaleSectionContainer
                            ),
                            style: { gridTemplateColumns: 1 < N ? M : null }
                          },
                          x,
                          b.slice(D, D + G),
                          R
                        )
                      ),
                        (D += G);
                    }
                    if (O) break;
                    k.push(z.createElement("div", { key: "Page_" + A }, j)),
                      (j = []);
                  }
                  g =
                    0 == k.length
                      ? ((I = i || b.length > D),
                        z.createElement(
                          z.Fragment,
                          null,
                          j,
                          I &&
                            z.createElement(
                              "div",
                              { className: Jn.a.ShowContentsContainer },
                              m
                                ? z.createElement(J.a, { size: "small" })
                                : z.createElement(
                                    "button",
                                    {
                                      onClick: this.ShowMoreContents,
                                      className: Jn.a.ShowContentsButton
                                    },
                                    Object(Y.d)("#Sale_ShowMore")
                                  )
                            )
                        ))
                      : z.createElement(
                          $t,
                          {
                            hideArrows: !u,
                            visibleElements: 1,
                            className: "SaleSectionCarousel",
                            useTestScrollbar: y
                          },
                          k
                        );
                }
              }
              if (!g) {
                if (!a) return null;
                g = z.createElement(
                  "div",
                  { className: Jn.a.preview_placeholder_section },
                  Object(Y.d)(
                    h.smart_section
                      ? "#Sale_SmartPlaceHolder"
                      : "#Sale_PlaceHolder"
                  )
                );
              }
              var H = h.label_link
                ? (q.c.IN_CLIENT ? "steam://openurl/" : "") + Dr(h.label_link)
                : void 0;
              return z.createElement(
                yn.a,
                {
                  placeholderHeight: this.EstimateComponentHeight(h),
                  rootMargin: "0px 0px 100% 0px",
                  mode: "LoadAndUnload",
                  className: Object(V.a)(
                    Jn.a.SaleSection,
                    h.show_as_carousel && Jn.a.CarouselDisplay,
                    _n.a.SaleSectionCtn
                  ),
                  style: Nr(h, t)
                },
                z.createElement(
                  "div",
                  { className: Jn.a.SaleSectionTitleCtn },
                  z.createElement(Sr, Object(U.a)({}, this.props)),
                  0 < l &&
                    z.createElement(
                      "div",
                      {
                        className: Jn.a.SaleSectionSubtext,
                        "data-tooltip-text": Object(Y.d)(
                          "#Sale_HiddenItem_Tooltip"
                        )
                      },
                      z.createElement(
                        "a",
                        { href: q.c.STORE_BASE_URL + "account/preferences" },
                        Object(Y.l)(
                          1 == l
                            ? "#Sale_HiddenItem_Single_Short"
                            : "#Sale_HiddenItems_Short",
                          l
                        )
                      )
                    )
                ),
                g,
                Boolean(H) &&
                  z.createElement(
                    "div",
                    { className: Jn.a.SaleViewAll },
                    z.createElement(
                      "a",
                      { href: H, target: q.c.IN_CLIENT ? void 0 : "_blank" },
                      Object(Y.d)("#btn_live_streams_all")
                    )
                  )
              );
            }),
            Object(U.c)([f.a], e.prototype, "ShowMoreContents", null),
            Object(U.c)([f.a], e.prototype, "LoadCapsules", null),
            Object(U.c)([f.a], e.prototype, "OnResize", null),
            (e = a = Object(U.c)([r.a], e))
          );
        })(z.Component);
      function Ir(e) {
        return (
          "dlc" === e.smart_section_type ||
          "dlc_onsale" === e.smart_section_type ||
          "dlc_music_onsale" === e.smart_section_type
        );
      }
      function kr(e, t) {
        return e.filter(function(e) {
          return null == e.visibility_index || e.visibility_index == t;
        });
      }
      var jr = function(e) {
        var t = e.text,
          a = e.url,
          n = e.color,
          r = e.bgcolor;
        return z.createElement(
          "a",
          {
            className: Q.a.BrowseMoreButton,
            href: Dr(a),
            target: "_blank",
            style: { backgroundColor: r, color: n }
          },
          t || Object(Y.d)("#Sale_BrowseMore_Text_Default")
        );
      };
      function Dr(t) {
        var e = "",
          a = "";
        if (t && (0 <= t.indexOf("/") || 0 <= t.indexOf("?")))
          try {
            var n = new URL(t),
              e = n.pathname.substring(1),
              a = n.search;
            q.c.SNR &&
              (a += 0 < a.length ? "&snr=" + q.c.SNR : "?snr=" + q.c.SNR);
          } catch (e) {
            console.warn(t, e);
          }
        return q.c.STORE_BASE_URL + e + a;
      }
      function Ar(e, t, a, n) {
        var r = (function(e) {
          if ("items" === e.section_type)
            switch (e.smart_section_type) {
              case "wishlist":
                return "#Sale_default_label_OnYourWishlist";
              case "interactive_recommender":
              case "tag_recommender":
                return "#Sale_default_label_RecommendedForYou";
            }
          if ("tabs" === e.section_type) return "";
          if ("curator" !== e.section_type)
            return "event_schedule" === e.section_type
              ? "#Sale_EventSchedule"
              : null;
          if (e.curator_clan_id) {
            var t = L.a.InitFromClanID(e.curator_clan_id),
              a = X.a.GetCreatorHome(t);
            if (a) return Object(Y.d)("#Sale_CuratorSection_Name", a.GetName());
          }
          return "#Sale_CuratorSection";
        })(e);
        if (null !== r) return r && r.startsWith("#") ? Object(Y.d)(r) : r;
        var o =
            e.localized_label[t] ||
            e.localized_label[0] ||
            ("#Sale_default_label" === e.default_label
              ? ""
              : Object(Y.d)(e.default_label)),
          i =
            e.localized_label_image &&
            (e.localized_label_image[t] || e.localized_label_image[0]);
        if (n || !i) return o;
        var l = q.c.MEDIA_CDN_COMMUNITY_URL + "images/clans/" + a + "/" + i;
        return z.createElement("img", { loading: "lazy", src: l, alt: o });
      }
      function Lr(e) {
        return e.capsules_per_row_array
          ? e.capsules_per_row_array
          : e.adaptive_capsules_per_row
          ? [2, 3, 4, 3]
          : [e.capsules_per_row || 1];
      }
      function Nr(e, t) {
        if (e.disable_background) return { paddingLeft: 0, paddingRight: 0 };
        var a = "";
        return (
          e.background_image &&
            (a +=
              ",url(" +
              De.a.GenerateArtworkURLFromHashAndExtensions(
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
      function Gr(e, t) {
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
      var Br = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(U.d)(e, t),
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
              return z.createElement(
                b.a,
                null,
                z.createElement(
                  z.Suspense,
                  { fallback: z.createElement("div", null) },
                  z.createElement(
                    Te.a,
                    { onEnter: this.OnEnter },
                    z.createElement(
                      "div",
                      { className: Jn.a.SaleBroadcastSection },
                      Boolean(this.state.bOnceVisible) &&
                        z.createElement(hr, {
                          promotionName: i,
                          clanid: Number(q.b.CLANACCOUNTID),
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
                        z.createElement("span", null, Object(Y.d)("#Loading"))
                    )
                  )
                )
              );
            }),
            Object(U.c)([f.a], e.prototype, "OnEnter", null),
            e
          );
        })(z.Component),
        Mr = Object(r.a)(function(e) {
          var t = en.c.GetPlayReadyStream(),
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
          return z.createElement(
            "div",
            { className: Jn.a.SalePageBroadcastContextHover },
            z.createElement("img", {
              src: l,
              className: Jn.a.AlbumCoverImage,
              onClick: i
            }),
            z.createElement(
              "div",
              { className: Jn.a.AlbumTitle, onClick: i },
              " ",
              o,
              " "
            )
          );
        }),
        xr = a("BVKn"),
        Rr = xr.a.Get(),
        Fr = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.state = {
                lookupGID: t.props.event_gid
                  ? t.props.event_gid
                  : Rr.GetClanEventGIDFromAnnouncementGID(
                      t.props.announcement_gid
                    )
              }),
              t
            );
          }
          return (
            Object(U.d)(e, a),
            (e.prototype.LoadEvent = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                var t,
                  a = this;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !this.props.event_gid ||
                        Rr.GetClanEventModel(this.props.event_gid)
                      )
                        return [3, 5];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          Rr.LoadPartnerEventGeneric(
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
                        Rr.LoadPartnerEventGeneric(
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
                                Object(H.a)(e).strErrorMsg
                            );
                          }),
                        [3, 4]
                      );
                    case 4:
                      return [3, 6];
                    case 5:
                      this.props.announcement_gid &&
                        !Rr.GetClanEventGIDFromAnnouncementGID(
                          this.props.announcement_gid
                        ) &&
                        Rr.LoadPartnerEventGeneric(
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
                                Object(H.a)(e).strErrorMsg
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
                  Rr.GetClanEventModel(this.state.lookupGID);
              n && n.appid
                ? (t =
                    (e = _.a.GetStoreCapsuleInfo(n.appid).GetAppStoreData()) &&
                    e.title)
                : n &&
                  n.clanSteamID &&
                  (t =
                    (a = S.a.GetClanInfoByClanAccountID(
                      n.clanSteamID.GetAccountID()
                    )) && a.group_name);
              var r,
                o = n && n.GetNameWithFallback(Object(A.f)(q.c.LANGUAGE));
              n &&
                t &&
                o &&
                ((r = Object(Y.d)(
                  "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                  t,
                  o
                )),
                document.title != r && (document.title = r)),
                document.body.classList.contains("events_hub") &&
                  document.body.classList.remove("events_hub");
            }),
            (e.prototype.InfiniteScrollCloseModal = function() {
              var e,
                t = Rr.GetClanEventModel(this.state.lookupGID);
              t &&
                ((e = Object(Ue.d)(t, Ue.a.k_eStoreNewsHub, "allowRelative")),
                this.props.history.push(e));
            }),
            (e.prototype.render = function() {
              var e = Rr.GetClanEventModel(this.state.lookupGID);
              return e
                ? this.props.bInfiniteScroll
                  ? d.a.createElement(
                      b.a,
                      null,
                      d.a.createElement(we, {
                        classname: ut.a.StoreHeaderAdjust,
                        appid: e.appid,
                        trackingLocation: 7,
                        announcementGID: e.GetAnnouncementGID(),
                        partnerEventStore: Rr,
                        eventModel: e,
                        showAppHeader: !0,
                        closeModal: this.InfiniteScrollCloseModal
                      })
                    )
                  : d.a.createElement(
                      b.a,
                      null,
                      d.a.createElement(Mn, {
                        lang: Object(A.f)(q.c.LANGUAGE),
                        partnerEventStore: Rr,
                        event: e,
                        adminPanel: d.a.createElement(hn, {
                          eventModel: e,
                          partnerEventStore: Rr
                        }),
                        otherEventRow: d.a.createElement(Cn, {
                          appid: e.appid,
                          eventModel: e,
                          partnerEventStore: Rr
                        })
                      })
                    )
                : d.a.createElement(J.a, null);
            }),
            Object(U.c)([f.a], e.prototype, "InfiniteScrollCloseModal", null),
            (e = Object(U.c)([r.a], e))
          );
        })(d.a.Component),
        Pr = Object(i.h)(Fr),
        Hr = a("WBba"),
        zr = a("r+ba"),
        Ur = a("apHd"),
        Wr = (function(n) {
          function e(e) {
            var a = n.call(this, e) || this;
            a.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: []
            };
            var t = Object(Ur.a)("EventWebRowEmbed");
            return (
              a.ValidateStoreDefault(t) &&
                ((a.state.bPreLoaded = t.bPreLoaded),
                (a.state.announcementGIDList = t.announcementGIDList),
                (a.state.events = []),
                a.state.announcementGIDList.forEach(function(e) {
                  var t = B.c.GetClanEventFromAnnouncementGID(e);
                  t && a.state.events.push(t);
                })),
              a
            );
          }
          return (
            Object(U.d)(e, n),
            (e.prototype.componentDidMount = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o,
                  i,
                  l,
                  s = this;
                return Object(U.e)(this, function(e) {
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
                          ((l = W.a.Get().GetTracker()),
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
              var a = W.a.Get().GetTracker();
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
                return d.a.createElement(
                  "div",
                  { className: Oe.a.FlexCenter },
                  d.a.createElement(J.a, { size: "medium", position: "center" })
                );
              if (n && 0 === n.length) return null;
              var e = window.screen.width <= 500 ? 1 : 2,
                t = this.props,
                r = t.partnerEventStore,
                o = t.strClassName,
                i = t.appid,
                l = t.trackingLocation;
              return d.a.createElement(
                "div",
                { className: o },
                this.state.bShowModal &&
                  d.a.createElement(we, {
                    classname: zr.StoreHeaderAdjust,
                    appid: i,
                    trackingLocation: l,
                    announcementGID: this.state.announcementGID
                      ? this.state.announcementGID
                      : this.state.modalInitialEvent.AnnouncementGID,
                    partnerEventStore: r,
                    eventModel: this.state.modalInitialEvent,
                    closeModal: this.CloseModal
                  }),
                d.a.createElement(
                  "h2",
                  null,
                  Object(Y.d)("#EventBrowse_RecentEvents")
                ),
                d.a.createElement(
                  "div",
                  { className: zr.SectionButtonCtn },
                  this.props.bViewAllShowInfiniteScroll
                    ? d.a.createElement(
                        "div",
                        {
                          className: zr.SectionButton,
                          onClick: function() {
                            return a.ShowModal(n[0]);
                          }
                        },
                        Object(Y.d)("#EventBrowse_MoreEventsBtn")
                      )
                    : d.a.createElement(
                        Ue.c,
                        {
                          eventModel: n[0],
                          route: Ue.a.k_eViewWebSiteHub,
                          forceAnchor: !0,
                          className: zr.SectionButton
                        },
                        Object(Y.d)("#EventBrowse_MoreEventsBtn")
                      )
                ),
                d.a.createElement(
                  "div",
                  { className: zr.EventsSummariesCtn },
                  n.slice(0, e).map(function(t) {
                    var e =
                      1 === n.length && 500 < window.screen.width ? wn : On;
                    return d.a.createElement(e, {
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
            Object(U.c)([f.a], e.prototype, "ShowModal", null),
            Object(U.c)([f.a], e.prototype, "CloseModal", null),
            e
          );
        })(d.a.Component),
        Vr = (function(r) {
          function e(e) {
            var t = r.call(this, e) || this;
            t.m_rtimeOldest = 0;
            var a = G.a.GetTimeNowWithOverrideAsDate(),
              n = new Date(a.setUTCHours(0, 0, 0, 0) - 15552e6);
            return (t.m_rtimeOldest = Math.floor(n.getTime() / 1e3)), t;
          }
          return (
            Object(U.d)(e, r),
            (e.prototype.render = function() {
              var e = this.props.appid;
              return d.a.createElement(Wr, {
                appid: e,
                partnerEventStore: xr.a.Get(),
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
        })(d.a.Component);
      u.a.Init(new Hr.a(q.c.WEBAPI_BASE_URL)), B.c.Init();
      function Zr(e) {
        var t = e.children,
          a = Object(z.useState)(W.a.IsInitialized()),
          n = a[0],
          r = a[1];
        return n
          ? d.a.createElement(d.a.Fragment, null, t)
          : (W.a.InitGlobal().then(function() {
              return r(!0);
            }),
            null);
      }
      function Yr(t) {
        return function(e) {
          return d.a.createElement(Zr, null, d.a.createElement(t, e));
        };
      }
      var qr = Yr(Fa),
        Qr = Yr($a),
        Jr = Yr(vr),
        Kr = Yr(ba),
        Xr = Yr(Pr),
        $r = Yr(Vr),
        eo = Yr(Ja);
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
        GameTitleContainer: "eventcalendartile_GameTitleContainer_WHJ_W",
        AppIcon: "eventcalendartile_AppIcon_3gwk6",
        TileTextAppName: "eventcalendartile_TileTextAppName_71phF",
        EnableHovers: "eventcalendartile_EnableHovers_2BniJ",
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
        LeaveRoomForReminder: "eventcalendartile_LeaveRoomForReminder_3djUm",
        SmallAppName: "eventcalendartile_SmallAppName_1-Jl_",
        TileTextCategoryType: "eventcalendartile_TileTextCategoryType_1LkWX",
        EventType28: "eventcalendartile_EventType28_1qGfE",
        EventType10: "eventcalendartile_EventType10_22QY5",
        EventType11: "eventcalendartile_EventType11_2Gv13",
        EventType23: "eventcalendartile_EventType23_590_l",
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
        GameCapsuleCtn: "eventcalendartile_GameCapsuleCtn_3HJFi",
        AppBannerLogo: "eventcalendartile_AppBannerLogo_u8z1m",
        TileTextHeader: "eventcalendartile_TileTextHeader_3-0KO",
        PatchIconCtn: "eventcalendartile_PatchIconCtn_Fm9_5",
        EventTitleCtn: "eventcalendartile_EventTitleCtn_1h5cJ",
        Mobile: "eventcalendartile_Mobile_2-hIy",
        Footer: "eventcalendartile_Footer_1tdf1",
        FallbackImage: "eventcalendartile_FallbackImage_9rv9P",
        LiveBroadcastPreview: "eventcalendartile_LiveBroadcastPreview_4UYuS",
        TileBackgroundImage: "eventcalendartile_TileBackgroundImage_gGujG",
        TileCoverImagePlayable:
          "eventcalendartile_TileCoverImagePlayable_2eoFk",
        TileCoverLiveIcon: "eventcalendartile_TileCoverLiveIcon__dmbj",
        ReminderContainer: "eventcalendartile_ReminderContainer_1_taB",
        OnlyIcon: "eventcalendartile_OnlyIcon_iO5Eu",
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
        CarouselMode: "eventcalendartile_CarouselMode_144gh",
        UpcomingMode: "eventcalendartile_UpcomingMode_2vzY3",
        TileVideoIcon: "eventcalendartile_TileVideoIcon_aK0jl",
        DateAndTime: "eventcalendartile_DateAndTime_1gEM9",
        HasVideo: "eventcalendartile_HasVideo_qbgBA",
        SubTitleShown: "eventcalendartile_SubTitleShown_5C13z",
        VideoPlayerReady: "eventcalendartile_VideoPlayerReady_1onQj",
        CuratorHoverContainer: "eventcalendartile_CuratorHoverContainer_1Ygax"
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

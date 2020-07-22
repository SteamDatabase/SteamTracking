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
        CuratorInfoRow: "curatorfeedbrowse_CuratorInfoRow_3tR2d",
        CuratorInfoImg: "curatorfeedbrowse_CuratorInfoImg_1BVHF",
        CuratorInfoName: "curatorfeedbrowse_CuratorInfoName_2X1CS",
        CuratorInfoTitleCtn: "curatorfeedbrowse_CuratorInfoTitleCtn_3odsm",
        CuratorInfoActionCtn: "curatorfeedbrowse_CuratorInfoActionCtn_2y3rS",
        CuratorInfoIcon: "curatorfeedbrowse_CuratorInfoIcon_3Y0jF",
        CuratorInfoPreview: "curatorfeedbrowse_CuratorInfoPreview_1Ebwp",
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
        LiveText: "eventcalendar_LiveText_14EbB",
        EventTileCarousel: "eventcalendar_EventTileCarousel_1__jP",
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
          return Ar;
        }),
        a.d(t, "EventBackfillLanding", function() {
          return Lr;
        }),
        a.d(t, "EventSaleDisplay", function() {
          return Nr;
        }),
        a.d(t, "EventCalendar", function() {
          return Gr;
        }),
        a.d(t, "EventDetailView", function() {
          return Br;
        }),
        a.d(t, "Events", function() {
          return Mr;
        }),
        a.d(t, "EventSteamGameFestivalDebug", function() {
          return xr;
        });
      var B = a("q1tI"),
        c = a.n(B),
        M = a("mrSG"),
        n = a("vDqi"),
        g = a.n(n),
        m = a("2vnA"),
        r = a("TyAF"),
        o = a("Gp1o"),
        i = a("Ty5D"),
        u = a("qD+2"),
        L = a("kLLr"),
        _ = a("ir+G"),
        E = a("TQGK"),
        N = a("WF3T"),
        G = a("5izx"),
        x = a("9w6b"),
        R = a("6oCP"),
        d = a("mZMQ"),
        P = (a("hmtA"), a("exH9")),
        l = a("dgee"),
        p = a.n(l),
        D = a("6Y59"),
        h = a("SS32"),
        s = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
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
              return B.createElement(
                "div",
                { className: h.pipScrollerContainer },
                e &&
                  B.createElement(
                    d.a,
                    {
                      className: Object(P.a)(
                        h.pipScrollButton,
                        h.left,
                        h.carouselNavButton
                      )
                    },
                    B.createElement(D.o, null)
                  ),
                B.createElement(
                  "div",
                  { className: h.pipScroller },
                  B.createElement("div", { className: h.scrollBackground }),
                  B.createElement("div", {
                    className: h.scrollForeground,
                    style: { left: r + "%", right: o + "%" }
                  }),
                  B.createElement(
                    "div",
                    {
                      className: h.scrollNavDiv,
                      style: { left: "0%", width: i + "%" }
                    },
                    B.createElement(
                      d.a,
                      {
                        className: Object(P.a)(
                          h.carouselNavButton,
                          h.scrollNavButton
                        )
                      },
                      B.createElement("div", null)
                    )
                  ),
                  B.createElement(
                    "div",
                    {
                      className: h.scrollNavDiv,
                      style: { right: "0%", width: l + "%" }
                    },
                    B.createElement(
                      d.b,
                      {
                        className: Object(P.a)(
                          h.carouselNavButton,
                          h.scrollNavButton
                        )
                      },
                      B.createElement("div", null)
                    )
                  )
                ),
                e &&
                  B.createElement(
                    d.b,
                    {
                      className: Object(P.a)(
                        h.pipScrollButton,
                        h.right,
                        h.carouselNavButton
                      )
                    },
                    B.createElement(D.o, null)
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
                        B.createElement(
                          "div",
                          { className: h.pipsSkipped },
                          "..."
                        )
                      )
                    : t.push(
                        B.createElement(
                          d.d,
                          { slide: c, className: h.pip },
                          B.createElement(
                            B.Fragment,
                            null,
                            B.createElement("img", { src: p.a }),
                            B.createElement(
                              "div",
                              { className: h.pipNumber },
                              s
                            )
                          )
                        )
                      ),
                  s++,
                  (a = e));
              }
              return B.createElement("div", { className: h.pipContainer }, t);
            }),
            (t.prototype.render = function() {
              return this.renderScroller();
            }),
            t
          );
        })(B.Component),
        v = Object(d.g)(s, function(e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides
          };
        }),
        F = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.GetNumElements = function() {
              return B.Children.count(this.props.children);
            }),
            (t.prototype.GetPageSize = function() {
              return Math.min(
                this.GetNumElements(),
                this.props.visibleElements
              );
            }),
            (t.prototype.RenderChildren = function() {
              return B.Children.map(this.props.children, function(e, t) {
                return B.createElement(d.e, { key: "slide_" + t, index: t }, e);
              });
            }),
            (t.prototype.RenderBreadcrumbs = function(a) {
              return B.Children.map(this.props.children, function(e, t) {
                return t % a != 0
                  ? null
                  : B.createElement(
                      d.d,
                      { slide: t, className: h.pip },
                      B.createElement("img", { src: p.a })
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
                B.createElement(
                  "div",
                  {
                    className: Object(P.a)(h.carouselBody, this.props.className)
                  },
                  B.createElement(
                    d.c,
                    {
                      visibleSlides: this.props.visibleElements,
                      totalSlides: this.GetNumElements(),
                      naturalSlideWidth: 100 * o,
                      naturalSlideHeight: 100,
                      step: this.props.visibleElements,
                      infinite: !this.props.disableEdgeWrap,
                      isIntrinsicHeight: i
                    },
                    B.createElement(
                      "div",
                      { className: h.sliderBody },
                      !n &&
                        B.createElement(
                          d.a,
                          {
                            className: Object(P.a)(
                              h.carouselBtnCtn,
                              h.left,
                              h.carouselNavButton
                            )
                          },
                          B.createElement(D.o, null)
                        ),
                      B.createElement(d.f, null, this.RenderChildren()),
                      !n &&
                        B.createElement(
                          d.b,
                          {
                            className: Object(P.a)(
                              h.carouselBtnCtn,
                              h.right,
                              h.carouselNavButton
                            )
                          },
                          B.createElement(D.o, null)
                        )
                    ),
                    !r &&
                      (this.props.useTestScrollbar
                        ? B.createElement(v, { showArrows: n })
                        : B.createElement(
                            "div",
                            { className: h.breadcrumbContainer },
                            this.RenderBreadcrumbs(t)
                          ))
                  )
                )
              );
            }),
            t
          );
        })(B.Component),
        b = a("IjL/"),
        y = a("55Ip"),
        S = a("kyHq"),
        f = a("KEpR"),
        C = a("Dhs6"),
        O = a("Mgs7"),
        w = a("5E+2"),
        T = a("+d9t"),
        I = a("r64O"),
        H = a("X3Ds"),
        z = a("TLQK"),
        k = a("bxiW"),
        U = a("lkRc"),
        j = a("ka0M"),
        W = a("ee7K"),
        A = a("mgoM"),
        V = (function() {
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
                  ((e.s_newsCuratorStore = new e()).m_LoadingPromise = e.s_newsCuratorStore.Init()),
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        A.g.forEach(function(e) {
                          return n.m_mapLangToNewsCurators.set(e, []);
                        }),
                        (t = U.c.STORE_BASE_URL + "events/ajaxgetnewscurators"),
                        [4, g.a.get(t)]
                      );
                    case 1:
                      return (
                        (a = e.sent()),
                        Object(m.A)(function() {
                          a.data &&
                            a.data.success &&
                            n.HandleCuratorResponse(a.data),
                            (n.m_bIsLoadComplete = !0);
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.HandleCuratorResponse = function(e) {
              if (
                (e.groupvanityinfo && E.a.RegisterClanData(e.groupvanityinfo),
                e.newscuratorinfo)
              )
                for (var t = 0, a = e.newscuratorinfo; t < a.length; t++) {
                  var n,
                    r = a[t];
                  this.m_mapNewsCurators.has(r.clanAccountID) ||
                    (this.m_mapNewsCurators.set(r.clanAccountID, r),
                    (n = E.a.GetClanInfoByClanAccountID(r.clanAccountID)) &&
                      this.m_mapLangToNewsCurators.get(n.rss_language).push(r));
                }
            }),
            Object(M.c)([m.y], e.prototype, "m_mapNewsCurators", void 0),
            Object(M.c)([m.y], e.prototype, "m_bIsLoadComplete", void 0),
            Object(M.c)([m.y], e.prototype, "m_mapLangToNewsCurators", void 0),
            Object(M.c)([m.k], e.prototype, "allNewsCurators", null),
            Object(M.c)([m.h], e.prototype, "HandleCuratorResponse", null),
            e
          );
        })();
      window.g_NewsCuratorStore = V.Get();
      var Z = a("qiKp"),
        Y = a("bS9Q"),
        q = a("I2Hi"),
        J = a.n(q);
      function K(e) {
        var t = new Set();
        return (
          (0 <= e.indexOf("games") || 0 <= e.indexOf("dlc")) && t.add("apps"),
          0 <= e.indexOf("curators") && t.add("curators"),
          t
        );
      }
      var Q = (function(t) {
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
              (e.m_timerForChange = new Z.b()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_timerForChange.Cancel();
            }),
            (e.prototype.GetSuggestionsFromServer = function(a) {
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
                  return (
                    (t = K(this.props.rgCorporaToSearch)).has("apps") &&
                      this.GetAppSuggestionsFromServer(a),
                    t.has("curators") && this.GetCuratorSuggestions(a),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.GetCuratorSuggestions = function(d) {
              var u;
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c;
                return Object(M.e)(this, function(e) {
                  for (
                    t = V.Get().allNewsCurators, a = [], n = 0, r = t;
                    n < r.length;
                    n++
                  )
                    if (
                      ((o = r[n]),
                      (i = E.a.GetClanInfoByClanAccountID(o.clanAccountID)),
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
                      if (W.a.BIsIgnoringCurator(i.clanAccountID)) continue;
                      (s = W.a.BIsFollowingCurator(i.clanAccountID)),
                        (c = B.createElement(X, {
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o,
                  i,
                  l = this;
                return Object(M.e)(this, function(e) {
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
                          cc: U.c.COUNTRY,
                          l: U.c.LANGUAGE,
                          realm: S.d.k_ESteamRealmGlobal,
                          f: "jsonfull",
                          term: s.replace(" ", "+"),
                          require_type: a.join(","),
                          excluded_tags: W.a.GetExcludedTagsSortedByID(),
                          excluded_content_descriptors: W.a.GetExcludedContentDescriptor()
                        }),
                        (r = U.c.STORE_BASE_URL + "search/suggest"),
                        [4, g.a.get(r, { params: n, withCredentials: !0 })]
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
                                a = Object(M.a)(
                                  Object(M.a)(
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
                              var n = B.createElement(X, {
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a = this;
                return Object(M.e)(this, function(e) {
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
                      : (Array.from(K(this.props.rgCorporaToSearch)).forEach(
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
                m = 1 < K(r).size,
                h =
                  m &&
                  u &&
                  Object(z.d)(
                    0 <= r.indexOf("dlc")
                      ? "#EventCalendar_SearchResultsHeader_GameAndDLCSection"
                      : "#EventCalendar_SearchResultsHeader_GameSection"
                  ),
                v = Array.from(K(r)).some(function(e) {
                  return (
                    t.m_nHighestSentRequestID >
                    t.m_mapHighestReceivedRequestIDFromBackEnd.get(e)
                  );
                }),
                _ = !p && !u && !v;
              return B.createElement(
                "div",
                { className: J.a.SuggestContainer },
                B.createElement(O.j, {
                  type: "text",
                  label: a,
                  onChange: this.UpdateSuggestions,
                  bAlwaysShowClearAction: d,
                  focusOnMount: n
                }),
                d &&
                  B.createElement(
                    "div",
                    { className: Object(P.a)(J.a.Results, o) },
                    u &&
                      B.createElement(
                        "div",
                        { key: "game-suggestions" },
                        m &&
                          B.createElement(
                            "div",
                            { className: J.a.ResultSectionHeader },
                            h
                          ),
                        s
                      ),
                    p &&
                      B.createElement(
                        "div",
                        { key: "curator-suggestions" },
                        m &&
                          B.createElement(
                            "div",
                            { className: J.a.ResultSectionHeader },
                            Object(z.d)(
                              "#EventCalendar_SearchResultsHeader_CuratorSection"
                            )
                          ),
                        c
                      ),
                    _ &&
                      B.createElement(
                        "div",
                        { className: J.a.EmptyResults, key: "empty-results" },
                        Object(z.d)("#EventCalendar_GameSearch_NoneFound")
                      )
                  )
              );
            }),
            Object(M.c)([k.a], e.prototype, "UpdateSuggestions", null),
            e
          );
        })(B.Component),
        X = function(e) {
          return B.createElement(
            "div",
            {
              className: J.a.ResultRow,
              key: "suggestion-" + e.suggestion.id,
              onClick: function() {
                return e.fnOnSelected(e.suggestion);
              }
            },
            B.createElement("img", {
              src: e.suggestion.img,
              className: J.a.AvatarImage
            }),
            B.createElement(
              "div",
              { className: J.a.GameName },
              " ",
              Object(Y.b)(e.suggestion.name),
              " "
            ),
            e.bShowFollowingLabel &&
              B.createElement(
                "div",
                { className: J.a.Label },
                Object(z.d)("#EventCalendar_FollowingCurator")
              )
          );
        },
        $ = a("fpVW"),
        ee = a.n($),
        te = a("Jqb/"),
        ae = a("0OaU"),
        ne = a("bDQf"),
        re = a("Lql7"),
        oe = a("uIWk"),
        ie = a("7u3m"),
        le = a.n(ie),
        se = a("D4G2"),
        ce = a.n(se),
        de = a("Ff1b"),
        ue = a.n(de),
        pe = a("go9d"),
        me = a.n(pe),
        he = a("/PpB"),
        ve = a("BFsE"),
        _e = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            t.m_cancelSignal = g.a.CancelToken.source();
            var a = L.a.InitFromClanID(e.creatorID.clan_account_id);
            return (
              (t.state = {
                bLoading: !oe.a.BHasCreatorHomeLoaded(a) || !W.a.BIsLoaded()
              }),
              t
            );
          }
          return (
            Object(M.d)(e, n),
            (e.prototype.componentDidMount = function() {
              var e,
                t = this;
              this.state.bLoading &&
                (W.a.HintLoad(),
                (e = L.a.InitFromClanID(this.props.creatorID.clan_account_id)),
                oe.a
                  .LoadCreatorHome(e, this.m_cancelSignal)
                  .then(function(e) {
                    W.a
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
              var t = Object(ne.a)(e);
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
                    B.createElement(Ee, {
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
                return B.createElement(
                  "div",
                  { className: re.DevSummaryWidgetCtn },
                  B.createElement(ae.a, null)
                );
              if (this.state.strErrorMsg) return B.createElement("div", null);
              var e = this.props,
                t = e.creatorID,
                a = e.bShowTagline,
                n = oe.a.GetCreatorHomeByID(t),
                r = t.type,
                o =
                  "developer" == t.type
                    ? Object(z.d)("#CreatorHome_DevelopedBy")
                    : "publisher" == t.type
                    ? Object(z.d)("#CreatorHome_PublishedBy")
                    : Object(z.d)("#CreatorHome_InFranchise"),
                i = n.GetURL(r),
                l = this.GetSocialMediaElements(n),
                s = n.GetNumFollowers();
              return B.createElement(
                b.a,
                null,
                B.createElement(
                  "div",
                  {
                    className: Object(P.a)(
                      re.DevSummaryCtn,
                      this.props.bSmallFormat ? re.SmallFormat : re.LargeFormat
                    )
                  },
                  !this.props.bHideCreatorType &&
                    B.createElement("span", { className: re.Title }, o),
                  B.createElement(
                    "div",
                    { className: re.DevSummaryWidgetCtn },
                    B.createElement("div", {
                      className: re.DevSummaryBackground,
                      style: {
                        backgroundImage:
                          "url(" + n.GetAvatarURLFullSize() + " )"
                      }
                    }),
                    B.createElement(
                      "div",
                      {
                        className: Object(P.a)(
                          re.DevSummaryContent,
                          $.FlexColumnContainer,
                          $.FlexContainSpaceBetween
                        )
                      },
                      B.createElement(
                        "div",
                        { className: $.FlexRowContainer },
                        B.createElement(
                          "a",
                          { href: i },
                          B.createElement("img", {
                            className: re.Avatar,
                            src: n.GetAvatarURLFullSize()
                          })
                        ),
                        B.createElement(
                          "div",
                          {
                            className: Object(P.a)(
                              $.FlexColumnContainer,
                              re.CreatorDescCtn
                            )
                          },
                          B.createElement(
                            "div",
                            {
                              className: Object(P.a)(
                                re.CreatorTitleCtn,
                                $.FlexColumnContainer
                              )
                            },
                            B.createElement(
                              "a",
                              { href: i, className: re.CreatorNameName },
                              n.GetName()
                            ),
                            a &&
                              B.createElement(
                                "div",
                                {
                                  className: Object(P.a)(
                                    $.FlexColumnContainer,
                                    re.CreatorTagline
                                  )
                                },
                                n.GetTagLine()
                              )
                          ),
                          B.createElement(
                            "div",
                            {
                              className: Object(P.a)(
                                this.props.bSmallFormat
                                  ? $.FlexColumnContainer
                                  : $.FlexRowContainer,
                                re.SocialFollowersCtn
                              )
                            },
                            B.createElement(
                              "div",
                              { className: re.FollowBtnCtn },
                              B.createElement(ge, {
                                clanAccountID: t.clan_account_id,
                                creatorID: t
                              }),
                              B.createElement(
                                "div",
                                { className: re.Followers },
                                B.createElement(
                                  "span",
                                  null,
                                  s.toLocaleString(z.c.GetPreferredLocales())
                                ),
                                B.createElement("br", null),
                                Object(z.d)("#CreatorHome_JustFollowers")
                              )
                            ),
                            0 < l.length &&
                              B.createElement(
                                "div",
                                {
                                  className: Object(P.a)(
                                    re.SocialContainer,
                                    $.FlexColumnContainer
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
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component);
      function be(e) {
        var t = L.a.InitFromClanID(e),
          a = x.a.Get().GetPartnerEventPermissions(t);
        if (x.a.Get().BIsUserLoggedIn()) {
          if (!a.limited_user) return 1;
          Object(j.d)(B.createElement(he.a, null), window);
        } else
          Object(j.d)(
            B.createElement(te.c, {
              strTitle: Object(z.d)("#EventDisplay_Share_NotLoggedIn"),
              strDescription: Object(z.d)(
                "#EventDisplay_Share_NotLoggedIn_Description"
              ),
              strOKButtonText: Object(z.d)("#MobileLogin_SignIn"),
              onOK: function() {
                return Object(ve.a)();
              }
            }),
            window
          );
      }
      var ge = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bApplyingFollowing: !1 }), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.OnFollowClick = function() {
              be(this.props.clanAccountID) &&
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
                o = W.a.BIsFollowingCreator(r),
                i = W.a.BIsIgnoringCreator(r);
              W.a
                .UpdateFollowOrIgnoreCurator(r, !i, !(i || o))
                .then(function(e) {
                  var t;
                  n &&
                    ((t = oe.a.GetCreatorHomeByID(n)),
                    i || t.AdjustFollower(o ? -1 : 1)),
                    a.setState({ bApplyingFollowing: !1 });
                })
                .catch(function(e) {
                  a.setState({ bApplyingFollowing: !1 }),
                    a.HandleLoadingError(e);
                });
            }),
            (e.prototype.HandleLoadingError = function(e) {
              var t = Object(ne.a)(e);
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
                r = W.a.BIsFollowingCreator(n),
                o = W.a.BIsIgnoringCreator(n);
              return B.createElement(
                "div",
                {
                  className: Object(P.a)($.Button, re.FollowButton, a),
                  onClick: this.OnFollowClick
                },
                this.state.bApplyingFollowing &&
                  B.createElement(ae.a, { size: "small" }),
                !this.state.bApplyingFollowing &&
                  (r || o) &&
                  B.createElement("img", {
                    style: { height: "16px" },
                    src:
                      "https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_selected.png"
                  }),
                B.createElement(
                  "div",
                  { className: re.FollowBtnText },
                  !this.state.bApplyingFollowing &&
                    (r
                      ? Object(z.d)("#Button_Followed")
                      : o
                      ? Object(z.d)("#Button_Ignored")
                      : Object(z.d)("#Button_Follow"))
                )
              );
            }),
            Object(M.c)([k.a], e.prototype, "OnFollowClick", null),
            Object(M.c)([k.a], e.prototype, "TakeFollowAction", null),
            e
          );
        })(B.Component),
        ye = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bLoading: !_.a.BIsAppidLoaded(e.appid) }), t;
          }
          return (
            Object(M.d)(e, a),
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
                    var t = Object(ne.a)(e);
                    console.log(
                      "CreatorHomeEmbedForApp - failed to load appinfo " +
                        t.strErrorMsg
                    ),
                      a.setState({ strErrorMsg: t.strErrorMsg, bLoading: !1 });
                  });
            }),
            (e.prototype.render = function() {
              if (this.state.bLoading)
                return B.createElement(
                  "div",
                  { className: re.DevSummaryWidgetCtn },
                  B.createElement(ae.a, null)
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
                  B.createElement(
                    b.a,
                    null,
                    B.createElement(_e, {
                      creatorID: r || (o || i),
                      eventModel: a,
                      bSmallFormat: !0
                    })
                  )
                );
              }
              return B.createElement("div", null);
            }),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        Ee = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.social,
                t = "";
              switch (e.external_type) {
                case 3:
                case 7:
                  t = le.a;
                  break;
                case 5:
                  t = ue.a;
                  break;
                case 4:
                  t = ce.a;
                  break;
                case 6:
                  t = me.a;
              }
              return B.createElement(
                "a",
                {
                  href:
                    (U.c.IN_CLIENT ? "steam://openurl_external/" : "") +
                    e.external_url,
                  target: U.c.IN_CLIENT ? void 0 : "_blank",
                  "data-tooltip-text": e.external_user_name
                    ? e.external_user_name
                    : e.external_url,
                  className: Object(P.a)(re.SocialLink)
                },
                B.createElement("img", {
                  className: Object(P.a)(re.SocialImg),
                  src: t
                }),
                B.createElement(
                  "div",
                  null,
                  e.external_follows.toLocaleString(z.c.GetPreferredLocales())
                )
              );
            }),
            t
          );
        })(B.Component),
        Se = a("+g3F"),
        fe = a.n(Se),
        Ce = a("UWWC"),
        Oe = a("yJqL"),
        we = a("JJA/"),
        Te = a("xnZ7"),
        Ie = a.n(Te),
        ke = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoading: !1, eventModel: e.props.eventModel }),
              (e.m_refParent = B.createRef()),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.state.eventModel ||
                this.setState({ bLoading: !0 }, this.LoadEvent);
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.add(we.BodyNoScroll);
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.remove(we.BodyNoScroll);
            }),
            (e.prototype.GetBodyElement = function() {
              return this.m_refParent.current
                ? this.m_refParent.current.closest("body")
                : null;
            }),
            (e.prototype.LoadEvent = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o = this;
                return Object(M.e)(this, function(e) {
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
                        var t = Object(ne.a)(e);
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(M.e)(this, function(e) {
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
                return B.createElement(
                  te.h,
                  null,
                  B.createElement(
                    "div",
                    { className: Ie.a.FlexCenter, style: { height: "400px" } },
                    B.createElement(ae.a, null)
                  )
                );
              var e = this.props,
                t = e.classname,
                a = e.partnerEventStore,
                n = e.bPrimaryPageFeature;
              if (this.state.eventModel) {
                var r = B.createElement(
                  "div",
                  null,
                  B.createElement(Oe.a, {
                    initialEvent: this.state.eventModel,
                    partnerEventStore: a,
                    emoticonStore: Ce.b,
                    appInfoStore: u.a,
                    closeModal: !n && this.props.closeModal,
                    showAppHeader: this.props.showAppHeader
                  })
                );
                return n ? r : B.createElement(te.h, { className: t }, r);
              }
              return null;
            }),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        je = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bLoaded: V.Get().IsLoaded() }), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentDidMount = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.bLoaded
                        ? [3, 2]
                        : [4, V.Get().WaitForInitialLoad()];
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
                  z.c.GetELanguageFallbackOrder(!0).forEach(function(e) {
                    return t.push(
                      c.a.createElement(De, { key: "curlang" + e, lang: e })
                    );
                  }),
                c.a.createElement(
                  te.g,
                  { onEscKeypress: this.props.closeModal },
                  c.a.createElement(
                    b.a,
                    null,
                    c.a.createElement(
                      O.e,
                      null,
                      c.a.createElement(
                        O.i,
                        null,
                        Object(z.d)("#EventCurator_BrowseDialog_Title")
                      ),
                      c.a.createElement(
                        O.a,
                        null,
                        c.a.createElement(
                          "div",
                          null,
                          Object(z.d)("#EventCurator_BrowseDialog_Desc")
                        ),
                        this.state.bLoaded
                          ? c.a.createElement(c.a.Fragment, null, t)
                          : c.a.createElement(ae.a, {
                              size: "medium",
                              position: "center",
                              string: Object(z.d)("#Loading")
                            })
                      ),
                      c.a.createElement(
                        O.h,
                        null,
                        c.a.createElement(
                          O.o,
                          { onClick: this.props.closeModal },
                          Object(z.d)("#Button_Confirm")
                        )
                      )
                    )
                  )
                )
              );
            }),
            e
          );
        })(c.a.Component),
        De = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = V.Get()
                .GetCuratorsForLang(this.props.lang)
                .map(function(e) {
                  return E.a.GetClanInfoByClanAccountID(e.clanAccountID);
                })
                .filter(function(e) {
                  return Boolean(e);
                });
              if (0 == e.length) return null;
              e.sort(function(e, t) {
                return e.group_name.localeCompare(t.group_name);
              });
              var t = e.map(function(e) {
                return c.a.createElement(Ae, {
                  clanInfo: e,
                  key: "curatorbrowse_" + e.clanAccountID,
                  layout: "row"
                });
              });
              return c.a.createElement(
                "div",
                null,
                c.a.createElement(
                  "div",
                  null,
                  Object(z.d)(
                    "#EventCurator_BrowseDialog_LangCurator",
                    Object(z.d)("#Language_" + Object(A.d)(this.props.lang))
                  )
                ),
                t
              );
            }),
            t
          );
        })(c.a.Component),
        Ae = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bDisplayPreview: !1 }), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.OnPreview = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                return Object(M.e)(this, function(e) {
                  return this.setState({ bDisplayPreview: !0 }), [2];
                });
              });
            }),
            (e.prototype.OnCloseEventPreview = function() {
              this.setState({ bDisplayPreview: !1 });
            }),
            (e.prototype.OnEventNotFound = function() {
              Object(j.d)(
                c.a.createElement(te.e, {
                  strDescription: Object(z.d)(
                    "#EventCurator_NoEventsFound_Body"
                  ),
                  strTitle: Object(z.d)("#EventCurator_NoEventsFound_Title")
                }),
                window
              ),
                this.OnCloseEventPreview();
            }),
            (e.prototype.renderInfiniteScroll = function() {
              return this.state.bDisplayPreview
                ? c.a.createElement(
                    b.a,
                    null,
                    c.a.createElement(ke, {
                      classname: fe.a.StoreHeaderAdjust,
                      onEventNotFound: this.OnEventNotFound,
                      appid: 0,
                      clanSteamID: this.props.clanInfo.clanSteamID,
                      trackingLocation: 8,
                      eventModel: void 0,
                      announcementGID: void 0,
                      partnerEventStore: R.c,
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
                n =
                  U.c.STORE_BASE_URL +
                  "curator/" +
                  t.clanAccountID +
                  (t.vanity_url ? "-" + t.vanity_url : ""),
                r = "row" === a ? fe.a.CuratorInfoRow : fe.a.CuratorInfoIcon,
                o = c.a.createElement(
                  c.a.Fragment,
                  null,
                  c.a.createElement("img", {
                    className: fe.a.CuratorInfoImg,
                    src: t.avatar_full_url,
                    alt: t.group_name
                  }),
                  c.a.createElement(
                    "div",
                    { className: fe.a.CuratorInfoName },
                    t.group_name
                  )
                );
              return c.a.createElement(
                "div",
                {
                  className: Object(P.a)(
                    ee.a.FlexRowWrapSpaceBetweenContainer,
                    r
                  )
                },
                this.renderInfiniteScroll(),
                "row" === a &&
                  c.a.createElement(
                    "a",
                    {
                      className: Object(P.a)(
                        ee.a.FlexRowContainer,
                        fe.a.CuratorInfoTitleCtn
                      ),
                      href: (U.c.IN_CLIENT ? "steam://openurl/" : "") + n,
                      target: U.c.IN_CLIENT ? void 0 : "_blank"
                    },
                    o
                  ),
                "icon" === a &&
                  c.a.createElement(
                    "div",
                    {
                      className: Object(P.a)(
                        ee.a.FlexRowContainer,
                        fe.a.CuratorInfoTitleCtn
                      ),
                      onClick: this.OnPreview
                    },
                    o
                  ),
                c.a.createElement(
                  "div",
                  {
                    className: Object(P.a)(
                      ee.a.FlexRowContainer,
                      fe.a.CuratorInfoActionCtn
                    )
                  },
                  c.a.createElement(
                    "div",
                    {
                      className: Object(P.a)(
                        ee.a.Button,
                        fe.a.CuratorInfoPreview
                      ),
                      onClick: this.OnPreview
                    },
                    Object(z.d)("#Button_Preview")
                  ),
                  c.a.createElement(ge, {
                    clanAccountID: t.clanAccountID,
                    className: fe.a.CuratorInfoFollow
                  })
                )
              );
            }),
            Object(M.c)([k.a], e.prototype, "OnPreview", null),
            Object(M.c)([k.a], e.prototype, "OnCloseEventPreview", null),
            Object(M.c)([k.a], e.prototype, "OnEventNotFound", null),
            e
          );
        })(c.a.Component),
        Le = a("IWyE"),
        Ne = a.n(Le),
        Ge = a("wd/R"),
        Be = a.n(Ge),
        Me = (function() {
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
                z.c.GetPreferredLocales(),
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
                e.endEvent.toLocaleDateString(z.c.GetPreferredLocales(), a)
              );
            }),
            (e.prototype.GetVisibleSpecialEvents = function() {
              var t = this;
              return [
                {
                  sLocToken: "#NewsHubSpecialEvent_GameFestival",
                  startVisible: new Date(
                    1e3 * Be()("2020-06-16T14:00:00-07:00").unix()
                  ),
                  endVisible: new Date(
                    1e3 * Be()("2020-06-22T10:00:00-07:00").unix()
                  ),
                  startEvent: new Date(
                    1e3 * Be()("2020-06-16T10:00:00-07:00").unix()
                  ),
                  endEvent: new Date(
                    1e3 * Be()("2020-06-22T10:00:00-07:00").unix()
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
        xe = new Me(),
        Re = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.specialEvent,
                t = window.location.href === U.c.STORE_BASE_URL + e.newshubUrl,
                a = Me.IsCurrentlyActive(e),
                n = Me.LocalizeDateString(e);
              return B.createElement(
                y.b,
                { to: "/" + e.newshubUrl },
                B.createElement(
                  "div",
                  {
                    className: Object(P.a)(
                      Ne.a.SpecialEvent,
                      t && Ne.a.SpecialEventOnPage,
                      a && Ne.a.SpecialEventActive
                    )
                  },
                  B.createElement(
                    "div",
                    { className: Ne.a.SpecialEventTitle },
                    Object(z.d)(e.sLocToken)
                  ),
                  n &&
                    B.createElement(
                      "div",
                      { className: Ne.a.SpecialEventTime },
                      n
                    )
                )
              );
            }),
            t
          );
        })(B.Component),
        Pe = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = xe.GetVisibleSpecialEvents();
              return 0 === e.length
                ? null
                : B.createElement(
                    "div",
                    { className: Ne.a.SpecialEventListGroup },
                    B.createElement(
                      "div",
                      { className: Ne.a.SpecialEventListTitle },
                      Object(z.d)("#Events_SpecialEvents")
                    ),
                    B.createElement(
                      "div",
                      { className: Ne.a.SpecialEventList },
                      e.map(function(e) {
                        return B.createElement(Re, {
                          key: e.sLocToken,
                          specialEvent: e
                        });
                      })
                    )
                  );
            }),
            t
          );
        })(B.Component),
        Fe = a("mB/g"),
        He = a("xLK1"),
        ze = a.n(He),
        Ue = (function(t) {
          function i() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bInScroll: !1, nStartXPos: 0, nStartScrollLeft: 0 }),
              (e.m_hSlider = B.createRef()),
              e
            );
          }
          return (
            Object(M.d)(i, t),
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
                    ze.a.HorizontalScrollInDragForceCursor
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
                    ze.a.HorizontalScrollInDragForceCursor
                  ),
                  this.props.dragClassName &&
                    o.classList.add(this.props.dragClassName),
                  o.setPointerCapture(e.pointerId)),
                this.state.bInScroll && (o.scrollLeft = a));
            }),
            (i.prototype.render = function() {
              return B.createElement(
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
            Object(M.c)([k.a], i.prototype, "OnPointerDown", null),
            Object(M.c)([k.a], i.prototype, "OnPointerUp", null),
            Object(M.c)([k.a], i.prototype, "OnPointerMove", null),
            i
          );
        })(B.Component),
        We = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
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
              return B.createElement(
                w.a,
                {
                  key: "group-" + t,
                  toolTipContent: Object(z.d)(
                    "#EventCalendar_EventTypeGroup_ttip_" + t
                  ),
                  direction: "top"
                },
                B.createElement(
                  "div",
                  {
                    className: Object(P.a)(
                      Ne.a.FilterOption,
                      Ne.a.FilterEventType
                    )
                  },
                  B.createElement(O.d, {
                    label: Object(z.d)("#EventCalendar_EventTypeGroup_" + t),
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
              return B.createElement(
                w.a,
                {
                  key: "gs-" + t,
                  direction: "top",
                  toolTipContent: e
                    ? Object(z.d)("#EventCalendar_DisabledFilter_LoginPrompt")
                    : Object(z.d)("#EventCalendar_GameSource_ttip_" + t)
                },
                B.createElement(
                  "div",
                  {
                    className: Object(P.a)(
                      Ne.a.FilterOption,
                      Ne.a.FilterGameSource
                    )
                  },
                  B.createElement(O.d, {
                    label: Object(z.d)("#EventCalendar_GameSource_" + t),
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
              Object(j.d)(B.createElement(je, null), Object(H.o)(e));
            }),
            (t.prototype.render = function() {
              var e,
                t = this.props.bUserIsLoggedIn,
                a = Object(N.a)(),
                n = !0;
              !a.BIsSingleGroupCalendar() ||
                ((e = E.a.GetClanInfoByClanAccountID(a.GetSingleGroupID())) &&
                  e.has_rss_feed &&
                  (n = !1));
              var r = C.a.GetMutedSourceCount();
              return B.createElement(
                "div",
                { className: Ne.a.FilterControlPage },
                B.createElement(
                  "div",
                  { className: Ne.a.FiltersTitle },
                  Object(z.d)("#EventCalendar_FiltersTitle")
                ),
                B.createElement(
                  "div",
                  { className: Ne.a.FiltersDescription },
                  Object(z.d)(
                    a.BIsGlobalCalendar()
                      ? "#EventCalendar_FiltersDescription"
                      : "#EventCalendar_FiltersDescription_NonPersonalized"
                  )
                ),
                B.createElement(
                  "div",
                  { className: Ne.a.FilterSection },
                  n &&
                    B.createElement(
                      "div",
                      { className: Ne.a.FilterSubSection },
                      B.createElement(
                        "div",
                        { className: Ne.a.FilterSubSectionTitle },
                        Object(z.d)(
                          "#EventCalendar_FilterSubSection_EventTypeGroups"
                        )
                      ),
                      this.RenderEventTypeCheckbox(f.b.k_EEvents),
                      this.RenderEventTypeCheckbox(f.b.k_EStreaming),
                      this.RenderEventTypeCheckbox(f.b.k_EUpdates),
                      this.RenderEventTypeCheckbox(f.b.k_EReleases),
                      this.RenderEventTypeCheckbox(f.b.k_ESales),
                      this.RenderEventTypeCheckbox(f.b.k_ENews)
                    ),
                  Boolean(a.BIsGlobalCalendar()) &&
                    B.createElement(
                      B.Fragment,
                      null,
                      B.createElement(
                        "div",
                        { className: Ne.a.FilterSubSection },
                        B.createElement(
                          "div",
                          { className: Ne.a.FilterSubSectionTitle },
                          Object(z.d)(
                            "#EventCalendar_FilterSubSection_GameSources"
                          )
                        ),
                        this.RenderGameSourceCheckbox(f.c.k_ERecent, !t),
                        this.RenderGameSourceCheckbox(f.c.k_ELibrary, !t),
                        this.RenderGameSourceCheckbox(f.c.k_EWishist, !t),
                        this.RenderGameSourceCheckbox(f.c.k_EFollowing, !t),
                        this.RenderGameSourceCheckbox(f.c.k_ERecommended),
                        this.RenderGameSourceCheckbox(f.c.k_ESteam),
                        G.a.bIncludeFeaturedAsGameSource &&
                          this.RenderGameSourceCheckbox(f.c.k_EFeatured)
                      ),
                      B.createElement(
                        "div",
                        { className: Ne.a.FilterSubSection },
                        B.createElement(
                          "div",
                          { className: Ne.a.FilterSubSectionTitle },
                          Object(z.d)(
                            "#EventCalendar_FilterSubSection_CuratorSources"
                          )
                        ),
                        this.RenderGameSourceCheckbox(f.c.k_ECurator, !t),
                        B.createElement(
                          "div",
                          {
                            className: Ne.a.FilterLink,
                            onClick: this.OnBrowseCurator
                          },
                          Object(z.d)("#EventCalendar_BrowseCurators")
                        )
                      )
                    ),
                  Boolean(a.BIsSingleSourceMuted()) &&
                    B.createElement(
                      "div",
                      null,
                      Object(z.d)("#EventCalendar_SingleAppIsMuted")
                    )
                ),
                B.createElement(
                  "div",
                  { className: Ne.a.SideBarFilterNavLinks },
                  Boolean(a.BIsGlobalCalendar()) &&
                    0 < r &&
                    B.createElement(
                      T.a,
                      {
                        className: Ne.a.MutedSourcesGroup,
                        href: U.c.STORE_BASE_URL + "account/emailoptout/app",
                        bDisableContextMenu: !0
                      },
                      B.createElement(
                        "div",
                        { className: Ne.a.FilterLink },
                        B.createElement(D.Z, { muted: !0 }),
                        Object(z.d)("#EventCalendar_ManageMutedSources"),
                        B.createElement(
                          "div",
                          { className: Ne.a.NumberDisplay },
                          r
                        )
                      )
                    ),
                  B.createElement(
                    T.a,
                    {
                      href: U.c.STORE_BASE_URL + "account/preferences",
                      bDisableContextMenu: !0
                    },
                    B.createElement(
                      "div",
                      { className: Ne.a.FilterLink },
                      B.createElement(D.a, null),
                      Object(z.d)("#EventCalendar_ManageStorePref")
                    )
                  )
                ),
                B.createElement(
                  "div",
                  {
                    className: Object(P.a)(
                      Ne.a.SidePanelSteamLabs,
                      Ne.a.ConfigPanelSteamLabs
                    )
                  },
                  B.createElement(Ke, null)
                )
              );
            }),
            Object(M.c)([k.a], t.prototype, "OnBrowseCurator", null),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        Ve = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bShowFilterPage: !1 }), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.GetCalendarTitle = function(e) {
              return Object(z.l)(
                "#EventCalendar_Title",
                B.createElement("br", null)
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
                p = Yt(),
                m = B.createElement(
                  "div",
                  { className: Ne.a.MobileCloseButton, onClick: s },
                  B.createElement(D.P, null)
                ),
                h = o ? Math.max(0, r) : 0,
                v = p
                  ? null
                  : B.createElement(
                      "div",
                      { onClick: s, className: Ne.a.CollapseButton },
                      B.createElement(
                        "div",
                        {
                          style: { marginTop: h + "px" },
                          className: Ne.a.DesktopButton
                        },
                        B.createElement(D.r, { angle: o ? 180 : 0 })
                      )
                    ),
                _ = p
                  ? null
                  : B.createElement(
                      "div",
                      {
                        onClick: function() {
                          return t.OpenFilterSettings(!1);
                        },
                        className: Ne.a.CollapseButton
                      },
                      B.createElement(
                        "div",
                        {
                          style: { marginTop: h + "px" },
                          className: Ne.a.DesktopButton
                        },
                        B.createElement(D.P, null)
                      )
                    ),
                b = d ? _ : v,
                g = o ? null : { top: r + "px" },
                y = Object(N.a)();
              return (
                !y.BIsSingleGroupCalendar() ||
                  ((e = E.a.GetClanInfoByClanAccountID(y.GetSingleGroupID())) &&
                    e.has_rss_feed &&
                    0),
                B.createElement(
                  B.Fragment,
                  null,
                  B.createElement(
                    "div",
                    {
                      className: Object(P.a)(
                        Ne.a.SidebarContainer,
                        o && Ne.a.SidebarCollapsed
                      ),
                      style: g
                    },
                    o
                      ? b
                      : B.createElement(
                          "div",
                          { className: Ne.a.Sidebar },
                          m,
                          b,
                          B.createElement(
                            "div",
                            { className: Ne.a.ControlPageContainer },
                            d
                              ? B.createElement(We, {
                                  bUserIsLoggedIn: n,
                                  fnOnFilterChange: c
                                })
                              : B.createElement(
                                  B.Fragment,
                                  null,
                                  B.createElement(
                                    "div",
                                    { className: Ne.a.SidebarBackground },
                                    B.createElement(D.Q, null)
                                  ),
                                  B.createElement(
                                    "div",
                                    { className: Ne.a.SidebarTitle },
                                    this.GetCalendarTitle(y)
                                  ),
                                  B.createElement(nt, { bIsUpcoming: l }),
                                  B.createElement(Pe, null),
                                  B.createElement(
                                    "div",
                                    { className: Ne.a.SidePanelGameSearch },
                                    B.createElement(Ye, {
                                      label: Object(z.d)(
                                        "#EventCalendar_UniversalSearch"
                                      )
                                    })
                                  ),
                                  B.createElement(
                                    "div",
                                    { className: Ne.a.FilterSettingsCtn },
                                    B.createElement(
                                      "div",
                                      {
                                        className: Object(P.a)(
                                          Ne.a.FilterLink,
                                          Ne.a.OpenFilterSettings
                                        ),
                                        onClick: function() {
                                          return t.OpenFilterSettings(!0);
                                        }
                                      },
                                      B.createElement(D.O, null),
                                      Object(z.d)("#EventCalendar_EditFilters")
                                    )
                                  ),
                                  u &&
                                    B.createElement(
                                      "div",
                                      {
                                        className: Object(P.a)(
                                          Ne.a.SidebarLink,
                                          Ne.a.ForceResponsiveLink
                                        ),
                                        onClick: u
                                      },
                                      Object(z.d)(
                                        "#EventCalendar_ShowResponsiveView"
                                      )
                                    ),
                                  B.createElement(
                                    "div",
                                    {
                                      className: Object(P.a)(
                                        Ne.a.SidePanelSteamLabs,
                                        i && Ne.a.SidePanelSteamLabsNarrow
                                      )
                                    },
                                    B.createElement(Ke, null)
                                  ),
                                  i && B.createElement(Ze, null)
                                )
                          )
                        )
                  )
                )
              );
            }),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        Ze = function(e) {
          return B.createElement(
            "div",
            { className: Ne.a.SidebarFooter },
            B.createElement("img", {
              src: U.c.STORE_CDN_URL + "public/images/footerLogo_valve_new.png"
            }),
            B.createElement(
              "div",
              { className: Ne.a.FooterLegal },
              Object(z.d)("#Legal_Footer_WithYear", Object(z.h)(new Date()))
            )
          );
        },
        Ye = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.DecorateSearchSuggestion = function(e, t) {
              if (e && e.id) {
                var a = "";
                return (
                  "curators" == e.corpus
                    ? (a = "group/" + e.id)
                    : "games" == e.corpus &&
                      (Object(I.a)(
                        Object(S.a)(e.type),
                        "Unexpected app type " + e.type
                      ),
                      (a = "app/" + e.id)),
                  B.createElement(
                    y.b,
                    {
                      key: "suggestion-" + e.id,
                      to: "/" + Object(Fe.f)() + "/" + a + "/"
                    },
                    t
                  )
                );
              }
              return t;
            }),
            (t.prototype.render = function() {
              return B.createElement(Q, {
                strLabel: this.props.label,
                fnOnSelected: function() {},
                fnDecorateSuggestion: this.DecorateSearchSuggestion,
                rgCorporaToSearch: ["games", "curators"],
                focusOnMount: this.props.focusOnMount
              });
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        qe = U.c.STORE_BASE_URL + "labs",
        Je = U.c.COMMUNITY_BASE_URL + "groups/SteamLabs/discussions/11/",
        Ke = function(e) {
          return B.createElement(
            "div",
            { className: Ne.a.SideSteamLabsBannerCtn },
            B.createElement(
              "div",
              { className: Ne.a.SteamLabsIdentifiers },
              B.createElement(
                "a",
                {
                  className: Ne.a.SteamLabsName,
                  href: (U.c.IN_CLIENT ? "steam://openurl/" : "") + qe,
                  target: U.c.IN_CLIENT ? void 0 : "_blank"
                },
                Object(z.d)("#SteamLabs")
              ),
              B.createElement(
                "div",
                { className: Ne.a.SteamLabsNumber },
                Object(z.d)("#SteamLabs_ExperimentNumber", "009")
              )
            ),
            B.createElement(
              "a",
              {
                className: Ne.a.SteamLabsButton,
                href: (U.c.IN_CLIENT ? "steam://openurl/" : "") + Je,
                target: U.c.IN_CLIENT ? void 0 : "_blank"
              },
              B.createElement(D.g, null)
            )
          );
        };
      function Qe(e, t) {
        var a = Object(N.a)().BIsGlobalCalendar(),
          n = Object(N.a)().BIsCollectionCalendar(),
          r = Object(Fe.f)(),
          o = new Array();
        if (
          (o.push({
            name: Object(z.d)("#EventCalendar_NewsChannel_YourNews"),
            subtitle: Object(z.d)("#EventCalendar_NewsChannel_Personalized"),
            key: "default",
            url: r + "/",
            onPage: a && !e
          }),
          o.push({
            name: Object(z.d)("#EventCalendar_NewsChannel_Upcoming"),
            shortName: Object(z.d)("#EventCalendar_NewsChannel_UpcomingShort"),
            subtitle: Object(z.d)("#EventCalendar_NewsChannel_Personalized"),
            key: "upcoming",
            url: r + "/?upcoming=1",
            onPage: a && e,
            count: (function() {
              if (Object(N.a)().BIsGlobalCalendar()) {
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
          o.push({
            name: Object(z.d)("#EventCalendar_NewsChannel_Featured"),
            subtitle: Object(z.d)("#EventCalendar_NewsChannel_TopSellers"),
            key: "featured",
            url: r + "/collection/featured/",
            onPage: n && "featured" == Object(N.a)().GetCollectionID()
          }),
          t)
        )
          for (var i = 0, l = xe.GetVisibleSpecialEvents(); i < l.length; i++) {
            var s = l[i];
            o.push({
              name: Object(z.d)(s.sLocToken),
              url: s.newshubUrl,
              onPage: !1,
              key: "event_" + s.sLocToken
            });
          }
        return o;
      }
      function Xe(e) {
        var t = e.element,
          a = t.shortName,
          n = t.name,
          r = t.url,
          o = t.onPage,
          i = t.count;
        return B.createElement(
          y.b,
          { to: "/" + r },
          B.createElement(
            "div",
            {
              className: Object(P.a)(
                Ne.a.MobileNavButton,
                o && Ne.a.MobileNavButtonActive
              )
            },
            a || n,
            i && B.createElement("div", { className: Ne.a.MobileNavCount }, i)
          )
        );
      }
      function $e(e) {
        var t = e.element,
          a = t.name,
          n = t.subtitle,
          r = t.url,
          o = t.onPage,
          i = t.count;
        return B.createElement(
          y.b,
          { to: "/" + r },
          B.createElement(
            "div",
            {
              className: Object(P.a)(
                Ne.a.NewsChannel,
                o && Ne.a.NewsChannelOnPage
              )
            },
            B.createElement(
              "div",
              { className: Ne.a.NewsChannelText },
              B.createElement("div", { className: Ne.a.NewsChannelTitle }, a),
              n &&
                B.createElement(
                  "div",
                  { className: Ne.a.NewsChannelSubtitle },
                  n
                )
            ),
            void 0 !== i &&
              B.createElement("div", { className: Ne.a.NewChannelCount }, i)
          )
        );
      }
      var et,
        tt,
        at = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bSearchExpanded: !1 }), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.onExpandSearch = function(e) {
              this.setState({ bSearchExpanded: e });
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.state.bSearchExpanded,
                a = Qe(this.props.bIsUpcoming, !0);
              return B.createElement(
                "div",
                {
                  style: {
                    transform: "translateY(" + this.props.nTopOffset + "px)"
                  },
                  className: Ne.a.MobileNavBannerCtn
                },
                B.createElement(
                  "div",
                  {
                    className: Ne.a.SettingsPanel,
                    onClick: this.props.fnToggleCollapsed
                  },
                  B.createElement(D.O, null)
                ),
                B.createElement(
                  "div",
                  {
                    className: Object(P.a)(
                      Ne.a.SettingsPanel,
                      t && Ne.a.SearchExpanded
                    ),
                    onClick: function() {
                      return e.onExpandSearch(!t);
                    }
                  },
                  B.createElement(D.A, null)
                ),
                t &&
                  B.createElement(
                    B.Fragment,
                    null,
                    B.createElement("div", {
                      className: Ne.a.SearchDismiss,
                      onClick: function() {
                        return e.onExpandSearch(!1);
                      }
                    }),
                    B.createElement(
                      "div",
                      {
                        className: Object(P.a)(
                          Ne.a.SearchBox,
                          t && Ne.a.SearchExpanded
                        )
                      },
                      B.createElement(Ye, { focusOnMount: !0 })
                    )
                  ),
                B.createElement(
                  Ue,
                  { className: Ne.a.MobileNavHScroll },
                  B.createElement(
                    "div",
                    { className: Ne.a.MobileNavBannerList },
                    a.map(function(e) {
                      return B.createElement(Xe, { key: e.key, element: e });
                    })
                  )
                )
              );
            }),
            Object(M.c)([k.a], e.prototype, "onExpandSearch", null),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        nt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = Qe(this.props.bIsUpcoming, !1);
              return B.createElement(
                "div",
                { className: Ne.a.NewsChannelGroup },
                B.createElement(
                  "div",
                  { className: Ne.a.NewsChannelListTitle },
                  Object(z.d)("#EventCalendar_NewsChannels")
                ),
                B.createElement(
                  "div",
                  { className: Ne.a.NewsChannelList },
                  e.map(function(e) {
                    return B.createElement($e, { key: e.key, element: e });
                  })
                )
              );
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        rt = a("G24H"),
        ot = a.n(rt),
        it = a("uuth"),
        lt = a("ylkE"),
        st = a("cGQe"),
        ct = a("XmAN"),
        dt = a("U+Q5"),
        ut = a("5bld"),
        pt = a("YLyR"),
        mt = a("Kw0F");
      ((tt = et = et || {})[(tt.NotLoaded = 0)] = "NotLoaded"),
        (tt[(tt.Loading = 1)] = "Loading"),
        (tt[(tt.Loaded = 2)] = "Loaded");
      var ht = et.NotLoaded,
        vt = [];
      function _t(t) {
        var e, a;
        ht != et.Loaded
          ? (ht == et.NotLoaded &&
              (((e = document.createElement("script")).src =
                "https://www.youtube.com/iframe_api"),
              (a = document.getElementsByTagName(
                "script"
              )[0]).parentNode.insertBefore(e, a),
              (window.onYouTubeIframeAPIReady = bt)),
            vt.findIndex(function(e) {
              return t == e;
            }) < 0 && vt.push(t))
          : t();
      }
      function bt() {
        ht = et.Loaded;
        for (var e = 0, t = vt; e < t.length; e++) {
          (0, t[e])();
        }
        vt = [];
      }
      var gt = (function(a) {
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
            Object(M.d)(n, a),
            (n.prototype.componentWillUnmount = function() {
              var e;
              this.DestroyPlayer(),
                (e = this.OnYoutubeScriptsReady),
                mt.b(vt, e);
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
                this.m_playerContainer && _t(this.OnYoutubeScriptsReady));
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
              var e = B.createElement(
                "div",
                {
                  key: this.m_strPlayerID,
                  ref: this.BindPlayerContainer,
                  className: Object(P.a)("YoutubePlayer", this.props.classnames)
                },
                B.createElement(ae.a, { className: "YoutubePlayerThrobber" })
              );
              return this.props.autopause
                ? B.createElement(it.a, { onLeave: this.OnPlayerLeftView }, e)
                : e;
            }),
            (n.s_nPlayerIndex = 0),
            Object(M.c)([k.a], n.prototype, "BindPlayerContainer", null),
            Object(M.c)([k.a], n.prototype, "OnYoutubeScriptsReady", null),
            Object(M.c)([k.a], n.prototype, "CreatePlayer", null),
            Object(M.c)([k.a], n.prototype, "OnPlayerReady", null),
            Object(M.c)([k.a], n.prototype, "OnPlayerStateChange", null),
            Object(M.c)([k.a], n.prototype, "OnError", null),
            Object(M.c)([k.a], n.prototype, "OnPlayerLeftView", null),
            n
          );
        })(B.Component),
        yt = a("02Wr"),
        Et = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e =
                  this.props.altImgWithFallback &&
                  0 < this.props.altImgWithFallback.length,
                t = this.props.altImg
                  ? this.props.altImg
                  : "https://img.youtube.com/vi/" +
                    this.props.video +
                    "/maxresdefault.jpg";
              return B.createElement(
                B.Fragment,
                null,
                e &&
                  B.createElement(yt.b, {
                    className: this.props.className,
                    srcs: this.props.altImgWithFallback
                  }),
                !e &&
                  B.createElement("img", {
                    src: t,
                    className: this.props.className
                  })
              );
            }),
            t
          );
        })(B.Component),
        St = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bDismissedPreviewImage: !1 }), t;
          }
          return (
            Object(M.d)(e, a),
            (e.prototype.render = function() {
              var t = this;
              if (
                (this.props.preloadYoutubeScripts && _t(function() {}),
                this.state.bDismissedPreviewImage)
              )
                return B.createElement(gt, Object(M.a)({}, this.props));
              return B.createElement(
                "div",
                {
                  className: Object(P.a)(
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
                B.createElement(Et, {
                  className: "YoutubePreviewImage",
                  altImgWithFallback: this.props.altImgWithFallback,
                  altImg: this.props.altImg,
                  video: this.props.video
                }),
                B.createElement(
                  "div",
                  { className: "YoutubePreviewPlay" },
                  B.createElement(D.W, null)
                ),
                B.createElement(
                  "div",
                  { className: "VideoHintText" },
                  Object(z.d)("#EventCalendar_WatchYouTubeVideo")
                )
              );
            }),
            e
          );
        })(B.Component),
        ft = a("N0Ye"),
        Ct = a("i6tc"),
        Ot = a.n(Ct),
        wt = a("RQmk"),
        Tt = a("O0NR"),
        It = a("TtDX"),
        kt = a("y+6m"),
        jt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.OnMuteButton = function(e) {
              var t = this.props.calendarEvent,
                a = t.GetEntityName();
              Object(j.d)(
                B.createElement(
                  te.c,
                  {
                    strTitle: Object(z.d)("#EventCalendar_MuteApp_Title", a),
                    strDescription: Object(z.d)(
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
                  B.createElement(
                    "a",
                    {
                      href:
                        (U.c.IN_CLIENT ? "steam://openurl/" : "") +
                        U.c.STORE_BASE_URL +
                        "account/emailoptout/app",
                      target: U.c.IN_CLIENT ? void 0 : "_blank"
                    },
                    Object(z.d)("#EventCalendar_ManageMutedSources")
                  )
                ),
                Object(H.o)(e)
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
                      B.createElement(
                        kt.d,
                        {
                          key: "item-source-" + a + "-" + t,
                          disabled: !0,
                          onSelected: function() {}
                        },
                        Object(z.d)("#EventCalender_Reason_" + t)
                      )
                    ),
                  e.push(
                    B.createElement(
                      kt.d,
                      {
                        key: "item-hidesource-" + a + "-" + t,
                        onSelected: function() {
                          r.GetVisibilityStore().SetGameSourceAllowed(t, !1);
                        }
                      },
                      Object(z.d)("#EventCalender_Hide_Reason_" + t)
                    )
                  ));
            }),
            (t.prototype.RemoveFromWishlist = function() {
              W.a.UpdateGameWishlist(this.props.eventModel.appid, !1);
            }),
            (t.prototype.AddToWishlist = function() {
              W.a.UpdateGameWishlist(this.props.eventModel.appid, !0);
            }),
            (t.prototype.GotoGameOrClanHub = function() {
              var e = this.props.eventModel,
                t = Object(Fe.d)(e, Fe.a.k_eStoreNewsHub, "allowRelative");
              this.props.history.push(t);
            }),
            (t.prototype.ToggleFollowCurator = function() {
              !(function(n) {
                Object(M.b)(this, void 0, void 0, function() {
                  var t, a;
                  return Object(M.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return be(n)
                          ? ((t = L.a.InitFromClanID(n)),
                            (a = W.a.BIsFollowingCreator(t)),
                            [4, W.a.UpdateFollowOrIgnoreCurator(t, !0, !a)])
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
                  i & ut.a.k_eLibrary &&
                  (this.GetVisibilityStore().BIsGameSourceAllowed(
                    f.c.k_ERecent
                  ) && r.appInfo
                    ? (o.push(
                        B.createElement(
                          kt.d,
                          {
                            key: "item-source-" + l + "-lastplayed",
                            disabled: !0,
                            onSelected: function() {}
                          },
                          Object(z.d)(
                            "#EventCalender_LastPlayed",
                            Object(z.o)(
                              G.a.GetTimeNowWithOverride() -
                                r.appInfo.last_played
                            )
                          )
                        )
                      ),
                      this.AddContextMenuForSource(o, f.c.k_ERecent, l, !1))
                    : this.AddContextMenuForSource(o, f.c.k_ELibrary, l)),
                i &&
                  i & ut.a.k_eWishlist &&
                  this.AddContextMenuForSource(o, f.c.k_EWishist, l),
                i &&
                  i & ut.a.k_eFollowing &&
                  this.AddContextMenuForSource(o, f.c.k_EFollowing, l),
                i &&
                  i & ut.a.k_eRecommended &&
                  this.AddContextMenuForSource(o, f.c.k_ERecommended, l),
                i &&
                  i & ut.a.k_eSteam &&
                  this.AddContextMenuForSource(o, f.c.k_ESteam, l),
                i &&
                  i & ut.a.k_eFeatured &&
                  this.AddContextMenuForSource(o, f.c.k_EFeatured, l)),
                o.push(
                  B.createElement(
                    kt.d,
                    {
                      key: n.GID + "hidetype",
                      onSelected: this.HideAllEventsOfMyType
                    },
                    Object(z.d)(
                      "#EVentCalendar_Hide_EventType",
                      Object(z.d)(
                        "#EventCalendar_EventTypeGroup_" +
                          this.GetVisibilityStore().MapClanEventTypeToGroup(
                            n.GetEventType()
                          )
                      )
                    )
                  )
                ),
                U.i.logged_in &&
                  (C.a.BIsEventBlocked(r)
                    ? o.push(
                        B.createElement(
                          kt.d,
                          {
                            key: n.GID + "unmuteapp",
                            onSelected: this.OnUnMuteButton
                          },
                          B.createElement(
                            w.a,
                            {
                              toolTipContent: Object(z.d)(
                                "#EventCalendar_UnMuteApp_ttip"
                              )
                            },
                            Object(z.d)(
                              "#EventCalendar_UnMuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      )
                    : o.push(
                        B.createElement(
                          kt.d,
                          {
                            key: n.GID + "muteapp",
                            onSelected: this.OnMuteButton
                          },
                          B.createElement(
                            w.a,
                            {
                              toolTipContent: Object(z.d)(
                                "#EventCalendar_MuteApp_ttip"
                              )
                            },
                            Object(z.d)(
                              "#EventCalendar_MuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      )),
                n.BIsOGGEvent() ||
                  ((t = W.a.BIsFollowingCreator(n.clanSteamID)),
                  o.push(
                    B.createElement(
                      kt.d,
                      {
                        key: n.GID + "followcurator",
                        onSelected: this.ToggleFollowCurator
                      },
                      B.createElement(
                        w.a,
                        {
                          toolTipContent: Object(z.d)(
                            t
                              ? "#EventCalendar_UnFollowCurator_ttip"
                              : "#EventCalendar_FollowCurator_ttip"
                          )
                        },
                        Object(z.d)(
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
                    B.createElement(
                      kt.d,
                      {
                        key: n.GID + "goto",
                        onSelected: this.GotoGameOrClanHub
                      },
                      Object(z.d)(
                        "#EventCalendar_Goto_SpecificCalendar",
                        r.GetEntityName()
                      )
                    )
                  ),
                Object(It.a)(B.createElement(kt.c, null, o), e);
            }),
            (t.prototype.render = function() {
              return B.createElement(
                "div",
                {
                  className: Object(P.a)(Ot.a.FooterStat, Ot.a.Options),
                  onClick: this.CreateContextMenu
                },
                B.createElement(D.O, null)
              );
            }),
            Object(M.c)([k.a], t.prototype, "OnMuteButton", null),
            Object(M.c)([k.a], t.prototype, "OnUnMuteButton", null),
            Object(M.c)([k.a], t.prototype, "HideAllEventsOfMyType", null),
            Object(M.c)([k.a], t.prototype, "AddContextMenuForSource", null),
            Object(M.c)([k.a], t.prototype, "RemoveFromWishlist", null),
            Object(M.c)([k.a], t.prototype, "AddToWishlist", null),
            Object(M.c)([k.a], t.prototype, "GotoGameOrClanHub", null),
            Object(M.c)([k.a], t.prototype, "ToggleFollowCurator", null),
            Object(M.c)([k.a], t.prototype, "CreateContextMenu", null),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        Dt = Object(i.h)(jt),
        At = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bVideoPlayerReady: !1 }), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.OnFallbackClick = function(e) {
              Tt.b.RecordAppInteractionEvent(
                this.props.calendarEvent.appid,
                Tt.a.k_eClickThrough
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
              var r = Object(A.f)(U.c.LANGUAGE),
                o =
                  qt() && 14 == this.props.eventModel.GetEventType()
                    ? dt.c.full
                    : dt.c.capsule_main,
                i = this.props.eventModel.GetImageForSizeAsArrayWithFallback(
                  "capsule",
                  r,
                  o,
                  !0
                );
              if ("carousel" === this.props.mode)
                return B.createElement(Et, {
                  altImgWithFallback: i,
                  video: n,
                  className: Ot.a.YoutubePreviewImage
                });
              return B.createElement(St, {
                video: n,
                altImgWithFallback: i,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                imageClassnames: Ot.a.YoutubePreviewImage,
                onPlayerActivated: function() {
                  Tt.b.RecordAppInteractionEvent(
                    e.props.calendarEvent.appid,
                    Tt.a.k_ePlayedVideo
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
                o = x.a.Get(),
                i = (a.GetEntityName(), a.GetGameCapsule()),
                l = Object(A.f)(U.c.LANGUAGE),
                s = t.has_live_stream,
                c = t.has_live_stream,
                d =
                  qt() && 14 == t.GetEventType()
                    ? dt.c.full
                    : dt.c.capsule_main,
                u = "capsule",
                p = t.BImageNeedScreenshotFallback(u, l),
                m = Boolean(p && t.appid)
                  ? t.GetFallbackArtworkScreenshot()
                  : t.GetImageURLWithFallback(u, l, d),
                h = "upcoming" !== r && this.getVideoPreviewControl(),
                v = !h && "upcoming" !== r,
                _ = t.GetCategoryAsString(),
                b = Ot.a["EventType" + t.GetEventType()],
                g = t.GetAllTags().map(function(e) {
                  return Ot.a["Tag-" + e];
                }),
                y = P.a.apply(
                  void 0,
                  Object(M.g)(
                    [
                      Ot.a.TileContainer,
                      b,
                      s && Ot.a.TileVideoIcon,
                      n ? Ot.a.DisableHovers : Ot.a.EnableHovers,
                      this.state.bVideoPlayerReady && Ot.a.VideoPlayerReady,
                      h && Ot.a.HasVideo,
                      o.HasEventBeenRead(t.GID) && Ot.a.HasBeenRead,
                      "wide" === r && Ot.a.WideMode,
                      "carousel" === r && Ot.a.CarouselMode,
                      "upcoming" === r && Ot.a.UpcomingMode
                    ],
                    g
                  )
                ),
                E = t.GetNameWithFallback(l),
                S = t.GetSubTitleWithLanguageFallback(l),
                f = t.GetSummaryWithFallback(l);
              S === f && (f = void 0), S === E && (S = void 0);
              var C = B.createElement(
                  "div",
                  { className: Ot.a.CoverImageCtn },
                  h,
                  v &&
                    B.createElement(
                      B.Fragment,
                      null,
                      12 === t.type &&
                        B.createElement(
                          "div",
                          { className: Ot.a.GameCapsuleCtn },
                          B.createElement("div", {
                            className: Ot.a.AppBannerLogo,
                            style: { backgroundImage: "url(" + i + ")" }
                          })
                        ),
                      12 !== t.type &&
                        B.createElement(
                          "div",
                          {
                            className: Object(P.a)(
                              Ot.a.EventCapsuleCtn,
                              s && Ot.a.LiveBroadcastPreview
                            )
                          },
                          B.createElement("div", {
                            className: Object(P.a)(
                              Ot.a.TileImage,
                              p && Ot.a.FallbackImage
                            ),
                            style: { backgroundImage: "url(" + m + ")" }
                          }),
                          s &&
                            B.createElement("div", {
                              className: Ot.a.TileCoverImagePlayable
                            }),
                          c &&
                            B.createElement(
                              "div",
                              { className: Ot.a.TileCoverLiveIcon },
                              Object(z.d)("#home_page_live_broadcast")
                            ),
                          s &&
                            B.createElement(
                              "div",
                              { className: "VideoHintText" },
                              Object(z.d)("#EventCalendar_WatchLiveBroadcast")
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
                  B.createElement(
                    "div",
                    {
                      className: Object(P.a)(
                        Ot.a.ReminderContainer,
                        k && Ot.a.OnlyIcon
                      )
                    },
                    B.createElement(st.a, {
                      eventModel: t,
                      eventGID: t.GID,
                      lang: l,
                      bShowStartTime: !0,
                      bOnlyShowIcon: k,
                      bExpandLeft: k
                    })
                  );
              return B.createElement(
                "div",
                { className: y },
                B.createElement(ct.a, { event: t, recordNewsHubStats: !0 }),
                B.createElement(
                  Fe.c,
                  { eventModel: t, route: Fe.a.k_eView },
                  B.createElement(
                    "div",
                    { className: Ot.a.Tile, onClick: this.OnFallbackClick },
                    14 === t.type &&
                      B.createElement("div", {
                        className: Object(P.a)(
                          Ot.a.TileBackgroundImage,
                          p && Ot.a.FallbackImage
                        ),
                        style: { backgroundImage: "url(" + m + ")" }
                      }),
                    B.createElement(
                      "div",
                      { className: Ot.a.MainContentContainer },
                      B.createElement(
                        "div",
                        { className: Ot.a.TileTextContainer },
                        B.createElement(
                          "div",
                          { className: Ot.a.PatchIconCtn },
                          B.createElement(D.G, null)
                        ),
                        B.createElement(
                          "div",
                          { className: Ot.a.EventTitleCtn },
                          T,
                          !this.props.bHideGameTitle &&
                            B.createElement(Lt, Object(M.a)({}, this.props)),
                          B.createElement(
                            "div",
                            { className: Ot.a.EventTypeAndDateCtn },
                            B.createElement(
                              "div",
                              {
                                className: Object(P.a)(
                                  Ot.a.TileTextCategoryType,
                                  b
                                )
                              },
                              _
                            ),
                            B.createElement(Nt, {
                              eventModel: t,
                              className: Object(P.a)(
                                k && Ot.a.LeaveRoomForReminder
                              )
                            }),
                            k && j
                          ),
                          B.createElement(
                            "div",
                            { className: Ot.a.EventName },
                            E
                          ),
                          S &&
                            B.createElement(
                              "div",
                              { className: Ot.a.EventSubTitle },
                              S
                            ),
                          12 !== t.type &&
                            f &&
                            B.createElement(
                              "div",
                              {
                                className: Object(P.a)(
                                  Ot.a.EventSummaryDefault,
                                  S ? Ot.a.SubTitleShown : ""
                                )
                              },
                              f
                            ),
                          B.createElement(
                            "div",
                            {
                              className: Object(P.a)(
                                Ot.a.EventTypeAndDateCtn,
                                Ot.a.Mobile
                              )
                            },
                            B.createElement(
                              "div",
                              { className: Ot.a.TileTextCategoryType },
                              _
                            ),
                            B.createElement(Nt, {
                              eventModel: t,
                              className: Object(P.a)(
                                k && Ot.a.LeaveRoomForReminder
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
                B.createElement(Gt, Object(M.a)({}, this.props))
              );
            }),
            Object(M.c)([k.a], e.prototype, "OnFallbackClick", null),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        Lt = function(e) {
          function t(e) {
            Object(Fe.i)(a, Fe.a.k_eStoreOwnerPage),
              e.stopPropagation(),
              e.preventDefault();
          }
          var a = e.eventModel,
            n = e.calendarEvent,
            r = e.bSuppressHoverEffects,
            o = n.GetEntityName(),
            i = n.GetGameIcon(),
            l = r
              ? B.createElement(
                  "div",
                  {
                    className: Object(P.a)(
                      Ot.a.GameTitleContainer,
                      Ot.a.DisableHovers
                    ),
                    onClick: t
                  },
                  B.createElement("img", { className: Ot.a.AppIcon, src: i }),
                  B.createElement("div", { className: Ot.a.TileTextAppName }, o)
                )
              : B.createElement(
                  "div",
                  { onClick: t },
                  B.createElement(
                    wt.b,
                    {
                      hoverClassName: Object(P.a)(
                        Ot.a.GameTitleContainer,
                        Ot.a.EnableHovers
                      ),
                      type: "app",
                      id: n.appid
                    },
                    B.createElement("img", { className: Ot.a.AppIcon, src: i }),
                    B.createElement(
                      "div",
                      { className: Ot.a.TileTextAppName },
                      o
                    )
                  )
                );
          return B.createElement(
            "div",
            { className: Ot.a.TileTextHeader },
            l,
            n.GetSource() === ut.a.k_eRecommended &&
              B.createElement(
                "div",
                { className: Ot.a.SourceRecommended },
                Object(z.d)("#EventCalendar_GameSource_recommended_Verbose")
              )
          );
        },
        Nt = Object(r.a)(function(e) {
          var t = e.eventModel,
            a = e.calendarEvent,
            n = e.className,
            r = G.a.GetTimeNowWithOverride(),
            o = t ? t.GetStartTimeAndDateUnixSeconds() : a.start_time,
            i = t ? t.GetPostTimeAndDateUnixSeconds() : a.start_time,
            l = t && Object(ft.a)(t.type) && t.GetEndTimeAndDateUnixSeconds();
          if (l && o < r && r < l) {
            var s = l - r,
              c = Object(z.o)(s, !0);
            return B.createElement(
              "div",
              { className: Object(P.a)(Ot.a.LiveText, n) },
              B.createElement(
                pt.e,
                { rtFullDate: o, stylesmodule: Ot.a },
                B.createElement(
                  "div",
                  { className: Ot.a.LiveNow },
                  Object(z.d)("#EventCalendar_LiveNow")
                )
              ),
              B.createElement(
                pt.e,
                { rtFullDate: l, stylesmodule: Ot.a },
                Object(z.d)("#EventCalendar_TimeLeft", c)
              )
            );
          }
          if (o < r) {
            var d = r - o,
              u = d < 86400 ? Object(z.o)(d) : Object(z.n)(o),
              p = 3600 < Math.abs(o - i);
            return B.createElement(
              pt.e,
              { className: n, rtFullDate: o, stylesmodule: Ot.a },
              B.createElement(
                "div",
                { className: Ot.a.PastDateText },
                p ? Object(z.d)("#EventCalendar_StartedAtTime", u) : u
              )
            );
          }
          var m = (s = o - r) < 86400;
          return B.createElement(
            pt.e,
            { className: n, rtFullDate: o, stylesmodule: Ot.a },
            B.createElement(
              "div",
              { className: Ot.a.FutureDateText },
              m
                ? Object(z.d)(
                    "#EventCalendar_WillStartAfterDuration",
                    Object(z.o)(s, !0)
                  )
                : Object(z.d)("#EventCalendar_WillStartAtTime", Object(z.n)(o))
            )
          );
        });
      var Gt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.OnPerformVoteUp = function() {
              var e = this.props.eventModel,
                t = x.a.Get();
              !0 !== t.GetPreviouslyLoadedVote(this.props.eventModel) &&
                Object(lt.a)(e, t) &&
                (t.Vote(e, !0, g.a.CancelToken.source()),
                Tt.b.RecordAppInteractionEvent(e.appid, Tt.a.k_eThumbsUp));
            }),
            (t.prototype.OnDiscussionClicked = function() {
              var e = this.props.eventModel;
              Tt.b.RecordAppInteractionEvent(e.appid, Tt.a.k_eDiscussions);
            }),
            (t.prototype.render = function() {
              var e,
                t = x.a.Get(),
                a = this.props.eventModel,
                n = Math.max(0, a.nVotesUp - a.nVotesDown),
                r = t.GetPreviouslyLoadedVote(this.props.eventModel),
                o = ((e = r),
                t.BIsUserLoggedIn()
                  ? U.i.is_limited
                    ? Ot.a.Vote_LimitedUser
                    : !0 === e
                    ? Ot.a.Vote_Positive
                    : !1 === e
                    ? Ot.a.Vote_Negative
                    : Ot.a.Vote_Ready
                  : Ot.a.Vote_NotLoggedIn),
                i =
                  (U.c.IN_CLIENT ? "steam://openurl/" : "") +
                  a.GetForumTopicURL(),
                l =
                  0 < a.live_stream_viewer_count
                    ? a.live_stream_viewer_count
                    : void 0;
              return B.createElement(
                "div",
                { className: Ot.a.Footer },
                B.createElement(
                  "div",
                  { className: Ot.a.FooterRightSide },
                  Boolean(l) &&
                    B.createElement(
                      "div",
                      { className: Ot.a.TileViewerCount },
                      l.toLocaleString(z.c.GetPreferredLocales())
                    ),
                  B.createElement(
                    "div",
                    {
                      className: Object(P.a)(Ot.a.FooterStat, Ot.a.Vote, o),
                      onClick: this.OnPerformVoteUp
                    },
                    B.createElement(D.T, { className: Ot.a.RateIcon }),
                    B.createElement("span", null, Number(n).toLocaleString())
                  ),
                  B.createElement(
                    "div",
                    { className: Ot.a.FooterStat },
                    B.createElement(
                      "a",
                      {
                        href: i,
                        className: Ot.a.CommentIconCtn,
                        target: "_blank",
                        onClick: this.OnDiscussionClicked
                      },
                      B.createElement(D.n, { className: Ot.a.CommentIcon }),
                      B.createElement(
                        "span",
                        null,
                        Number(a.nCommentCount).toLocaleString()
                      )
                    )
                  ),
                  B.createElement(Dt, Object(M.a)({}, this.props))
                )
              );
            }),
            Object(M.c)([k.a], t.prototype, "OnPerformVoteUp", null),
            Object(M.c)([k.a], t.prototype, "OnDiscussionClicked", null),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        Bt = Object(r.a)(function(t) {
          var e = t.calendarEvent,
            a = Ot.a["EventType" + e.event_type],
            n = Object(P.a)(Ot.a.TileContainer, a);
          return B.createElement(
            it.a,
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
            B.createElement(
              "div",
              { className: n },
              B.createElement("div", { className: Ot.a.Tile }),
              B.createElement("div", { className: Ot.a.Footer })
            )
          );
        }),
        Mt = Object(r.a)(function(e) {
          var t = e.partnerEventStore,
            a = e.calendarEvent,
            n = Object(M.f)(e, ["partnerEventStore", "calendarEvent"]),
            r = t.GetClanEventModel(a.unique_id);
          return r
            ? B.createElement(
                At,
                Object(M.a)({ eventModel: r, calendarEvent: a }, n)
              )
            : B.createElement(Bt, { calendarEvent: a, partnerEventStore: t });
        }),
        xt = a("s4NR"),
        Rt = a.n(xt);
      function Pt(e, t) {
        var a = "location" in e ? e.location : e,
          n = "search" in a ? a.search : a,
          r = Rt.a.parse(n.substring(1))[t];
        return r && Array.isArray(r) ? r[r.length - 1] : r;
      }
      function Ft(e, t, a) {
        var n = Rt.a.parse(e.location.search.substring(1));
        null == a ? delete n[t] : (n[t] = a), e.push("?" + Rt.a.stringify(n));
      }
      function Ht(e, t) {
        var a,
          n = Rt.a.parse(e.location.search.substring(1));
        for (var r in t) {
          t.hasOwnProperty(r) &&
            (null == (a = t[r]) ? delete n[r] : (n[r] = a));
        }
        e.push("?" + Rt.a.stringify(n));
      }
      var zt = a("FKsz"),
        Ut = a.n(zt),
        Wt = (function(t) {
          function a() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                rgCuratorList: null,
                nNumToDisplay: 0,
                bHasBeenDismissed: e.HasBeenDismissed()
              }),
              (e.m_ref = c.a.createRef()),
              e
            );
          }
          return (
            Object(M.d)(a, t),
            (a.prototype.componentDidMount = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.rgCuratorList
                        ? [3, 2]
                        : [4, V.Get().WaitForInitialLoad()];
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
            (a.prototype.OnDismissButton = function() {
              localStorage.setItem(
                a.s_strLocalStorageKey,
                JSON.stringify({ bDismissed: !0 })
              ),
                this.setState({ bHasBeenDismissed: !0 });
            }),
            (a.prototype.GenerateNewsCuratorList = function() {
              var e = z.c.GetELanguageFallbackOrder(!1);
              void 0 ===
                e.find(function(e) {
                  return 0 === e;
                }) && e.push(0);
              for (var t = new Array(), a = 0, n = e; a < n.length; a++) {
                var r = n[a],
                  o = V.Get().GetCuratorsForLang(r);
                Object(mt.f)(o), t.push.apply(t, o);
              }
              return t;
            }),
            (a.prototype.GenerateCurator = function(e) {
              var t = E.a.GetClanInfoByClanAccountID(e.clanAccountID);
              return t
                ? c.a.createElement(
                    "div",
                    { className: Ut.a.ClanInfo, key: t.clanAccountID },
                    c.a.createElement(Ae, { clanInfo: t, layout: "icon" })
                  )
                : null;
            }),
            (a.prototype.OnBrowseCurator = function(e) {
              Object(j.d)(c.a.createElement(je, null), Object(H.o)(e));
            }),
            (a.prototype.render = function() {
              var t = this,
                e = this.props.bCanDismiss,
                a = this.state,
                n = a.bHasBeenDismissed,
                r = a.rgCuratorList;
              if (n || !r) return null;
              var o = r.slice(0, this.state.nNumToDisplay).map(function(e) {
                return t.GenerateCurator(e);
              });
              return c.a.createElement(
                b.a,
                null,
                c.a.createElement(
                  "div",
                  { className: Ut.a.FeedSuggestContainer },
                  c.a.createElement(
                    "div",
                    { className: Ut.a.FeedSuggestCaption },
                    Object(z.d)("#EventCurator_FeedCaption_Long")
                  ),
                  e &&
                    c.a.createElement(
                      "div",
                      {
                        className: Ut.a.DismissButton,
                        onClick: this.OnDismissButton
                      },
                      c.a.createElement(D.P, null)
                    ),
                  c.a.createElement(
                    "div",
                    { className: Ut.a.RowContainer, ref: this.m_ref },
                    o || c.a.createElement(ae.a, null),
                    c.a.createElement(
                      "div",
                      {
                        className: Ut.a.BrowseMore,
                        onClick: this.OnBrowseCurator
                      },
                      Object(z.d)("#EventCurator_BrowseMore")
                    )
                  )
                )
              );
            }),
            (a.s_strLocalStorageKey = "SteamNewsHub_SuggestCuratorsDismissed"),
            Object(M.c)([k.a], a.prototype, "OnResize", null),
            Object(M.c)([k.a], a.prototype, "OnDismissButton", null),
            Object(M.c)([k.a], a.prototype, "OnBrowseCurator", null),
            a
          );
        })(c.a.Component),
        Vt = "global_header";
      function Zt() {
        var e = document.getElementById(Vt);
        if (e && "none" != getComputedStyle(e).display) return e;
        var t = document.getElementsByClassName("responsive_header");
        return (
          Object(I.a)(t.length <= 1, "Must have at most one responsive_header"),
          1 != t.length ? null : t[0]
        );
      }
      function Yt() {
        var e = Zt();
        return e && e.id != Vt;
      }
      function qt() {
        return window.innerWidth < parseInt(Ne.a.strMaxMobileWidth);
      }
      function Jt() {
        return (
          Yt() ||
          window.innerWidth <
            parseInt(Ne.a.strDesktopControlBarWidth) +
              parseInt(Ne.a.strMaxMobileWidth)
        );
      }
      function Kt(e) {
        var t = e.calendarItem,
          a = e.bSuppressHoverEffects,
          n = R.c.GetClanEventModel(t.unique_id);
        return n
          ? B.createElement(
              "div",
              { className: Ne.a.EventListTitle },
              B.createElement(Lt, {
                eventModel: n,
                calendarEvent: t,
                bSuppressHoverEffects: a
              })
            )
          : null;
      }
      var Qt,
        Xt,
        $t = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUserIsLoggedIn: U.i.logged_in,
                nVisibleHeight: 0,
                nScrollTop: 0,
                bControlBarIsCollapsed: Jt(),
                bControlBarWasOpenedByUser: !1,
                nDisappearingHeaderTop: 0,
                nSteamNavHeaderHeight: 0,
                nMobileNavBannerHeight: 0,
                nHubBannerHeight: 0,
                nGroupHeaderHeight: 0
              }),
              (e.m_refControlBar = B.createRef()),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          var c;
          return (
            Object(M.d)(e, t),
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
              if (!Object(N.a)().BIsSingleSourceCalendar()) return 0;
              var t = e && !qt();
              return (
                parseInt(
                  t
                    ? Ne.a.strJumboHubBannerHeight
                    : Ne.a.strDesktopHubBannerHeight
                ) - 1
              );
            }),
            (e.prototype.GetCurrentHeaderHeights = function() {
              var e = Yt(),
                t = qt(),
                a = 0;
              Zt() &&
                ((a = parseInt(
                  e
                    ? Ne.a.strMobileGlobalHeaderHeight
                    : Ne.a.strDesktopGlobalHeaderHeight
                )),
                --a);
              var n =
                parseInt(
                  t
                    ? Ne.a.strMobileGroupHeaderHeight
                    : Ne.a.strDesktopGroupHeaderHeight
                ) - 1;
              return {
                nSteamNavHeaderHeight: a,
                nMobileNavBannerHeight:
                  (e ? parseInt(Ne.a.strMobileNavBannerHeight) : 0) - 1,
                nHubBannerHeight: this.GetCurrentHubBannerHeight(
                  this.state.nScrollTop <= 0
                ),
                nGroupHeaderHeight: n
              };
            }),
            (e.prototype.LoadEventToShowAsModal = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return ((t = Pt(this.props.location, "emclan")),
                      (a = Pt(this.props.location, "emgid")),
                      t && a)
                        ? ((n = new L.a(t)),
                          this.state.modalEvent &&
                          this.state.modalEvent.clanSteamID.ConvertTo64BitString() ==
                            n.ConvertTo64BitString() &&
                          this.state.modalEvent.GID == a
                            ? [2]
                            : [
                                4,
                                R.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
              var e = Pt(this.props.location, "upcoming");
              return e && "false" != e;
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
                      E.a.GetClanInfoByClanAccountID(n)) && r.group_name)
                : o.BIsCollectionCalendar();
              var i = a
                ? Object(z.d)("#EventCalendar_TabTitle_GroupHub", a)
                : Object(z.d)("#EventCalendar_TabTitle_Global");
              document.title != i && (document.title = i),
                document.body.classList.contains("events_hub") ||
                  document.body.classList.add("events_hub");
            }),
            (e.prototype.OnResize = function() {
              var r = this;
              this.setState(function(e) {
                var t = window.innerHeight,
                  a = !e.bControlBarWasOpenedByUser && Jt(),
                  n = r.GetCurrentHeaderHeights();
                return (
                  r.UpdateBodyScrollState(a),
                  Object(M.a)(
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
                  l = Zt();
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s;
                return Object(M.e)(this, function(e) {
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
                          this.state.bUserIsLoggedIn && U.i.accountid
                        )),
                        (o = n.BIsGlobalCalendar() && r ? "local" : "session"),
                        (i = n.BIsGlobalCalendar() ? "U" + U.i.accountid : a),
                        n.m_visibilityStore.Init(r, i, o),
                        (l = !n.BIsCollectionCalendar()),
                        n.SetFilteredView(function(e) {
                          return n.m_visibilityStore.BShouldDisplayEvent(e);
                        }, l),
                        (s =
                          c.m_bInitialLoad &&
                          Object(U.f)("initialEvents", "application_config"))
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
              var t = !e && Yt(),
                a = document.body;
              a &&
                (t
                  ? a.classList.add(Ne.a.BodyNoScroll)
                  : a.classList.remove(Ne.a.BodyNoScroll));
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
                  r = Zt();
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
              var e = Zt();
              e &&
                (e.style.transform =
                  "translateY(" + this.state.nDisappearingHeaderTop + "px)"),
                "PUSH" === this.props.history.action
                  ? this.props.history.goBack()
                  : Ht(this.props.history, { emclan: void 0, emgid: void 0 });
            }),
            (e.prototype.OnEventClicked = function(e) {
              x.a.Get().RecordEventRead(e, 8);
              var t,
                a =
                  this.state.nSteamNavHeaderHeight +
                  this.state.nHubBannerHeight +
                  this.state.nMobileNavBannerHeight,
                n = Zt();
              n && (n.style.transform = "translateY(" + -1 * a + "px)"),
                G.a.bOpenEventLandingPage
                  ? ((t = Object(Fe.d)(e, Fe.a.k_eStoreView, "allowRelative")),
                    this.props.history.push(t))
                  : Ht(this.props.history, {
                      emclan: e.clanSteamID.ConvertTo64BitString(),
                      emgid: e.GID
                    });
            }),
            (e.prototype.ToggleFutureView = function() {
              Ft(
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
                  this.state.nVisibleHeight <=
                  parseInt(Ne.a.strMinMobileHeight),
                o = r
                  ? 0
                  : this.state.nDisappearingHeaderTop +
                    this.state.nSteamNavHeaderHeight,
                i = r ? 0 : this.state.nDisappearingHeaderTop + e;
              return B.createElement(
                B.Fragment,
                null,
                B.createElement(
                  "div",
                  { className: Ne.a.EventCalendarContainer },
                  B.createElement(
                    b.a,
                    null,
                    this.state.modalEvent
                      ? B.createElement(ke, {
                          classname: Ne.a.StoreHeaderAdjust,
                          appid: this.state.modalEvent.appid,
                          trackingLocation: 8,
                          announcementGID: this.state.modalEvent.GetAnnouncementGID(),
                          partnerEventStore: R.c,
                          eventModel: this.state.modalEvent,
                          showAppHeader: !0,
                          closeModal: this.CloseEventModal
                        })
                      : null
                  ),
                  B.createElement(
                    b.a,
                    null,
                    B.createElement(Ve, {
                      ref: this.m_refControlBar,
                      bUserIsLoggedIn: this.state.bUserIsLoggedIn,
                      nDisappearingHeaderVisibleHeight: o,
                      nGlobalHeaderTop: t,
                      bIsCollapsed: this.state.bControlBarIsCollapsed,
                      bShowUpcoming: this.BShowFutureView(),
                      bShouldIncludeLegalFooter: !Yt(),
                      fnToggleCollapsed: this.ToggleControlBarCollapsed,
                      fnOnFilterChange: this.OnControlBarChange
                    })
                  ),
                  B.createElement(
                    b.a,
                    null,
                    B.createElement(
                      "div",
                      {
                        className: Object(P.a)(
                          Ne.a.ReserveControlSpace,
                          !this.state.bControlBarIsCollapsed &&
                            Ne.a.WideLeftGutter
                        )
                      },
                      B.createElement(
                        b.a,
                        null,
                        0 < this.state.nMobileNavBannerHeight &&
                          B.createElement(at, {
                            bIsUpcoming: this.BShowFutureView(),
                            nTopOffset: a,
                            fnToggleCollapsed: this.MobileNavOpenSettings
                          }),
                        B.createElement(ta, {
                          nTopOffset: n,
                          bLargeMode: this.state.nScrollTop <= 0 && !qt()
                        })
                      ),
                      Boolean(
                        !this.BRequireLoggedInUser() ||
                          this.state.bUserIsLoggedIn
                      )
                        ? B.createElement(
                            b.a,
                            null,
                            B.createElement(aa, {
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
                        : B.createElement(
                            b.a,
                            null,
                            B.createElement(
                              "div",
                              { className: Ne.a.LoginPrompt },
                              Object(z.d)("#EventCalendar_MainLoginPrompt"),
                              B.createElement(
                                "button",
                                { onClick: ve.a, className: Ne.a.LoginButton },
                                Object(z.d)("#Login_SignIn")
                              )
                            )
                          )
                    )
                  )
                )
              );
            }),
            (e.m_bInitialLoad = !0),
            Object(M.c)([k.a], e.prototype, "OnResize", null),
            Object(M.c)([k.a], e.prototype, "OnScroll", null),
            Object(M.c)([k.a], e.prototype, "MobileNavOpenSettings", null),
            Object(M.c)([k.a], e.prototype, "ToggleControlBarCollapsed", null),
            Object(M.c)([k.a], e.prototype, "OnControlBarChange", null),
            Object(M.c)([k.a], e.prototype, "CloseEventModal", null),
            Object(M.c)([k.a], e.prototype, "OnEventClicked", null),
            Object(M.c)([k.a], e.prototype, "ToggleFutureView", null),
            (e = c = Object(M.c)([r.a], e))
          );
        })(B.Component),
        ea = Object(i.h)($t),
        ta = function(e) {
          if (!Object(N.a)().BIsSingleSourceCalendar()) return null;
          var t = Object(N.a)().BIsSingleAppCalendar()
              ? Object(N.a)().GetSingleAppID()
              : void 0,
            a = Object(N.a)().BIsSingleGroupCalendar()
              ? Object(N.a)().GetSingleGroupID()
              : void 0,
            n = Object(P.a)(
              Ne.a.HubBanner,
              ot.a.WideBanner,
              e.bLargeMode && Ne.a.LargeMode,
              e.bLargeMode && ot.a.TallBanner
            );
          return B.createElement(
            "div",
            {
              style: { transform: "translateY(" + e.nTopOffset + "px)" },
              className: n
            },
            B.createElement(Oe.b, {
              appInfoStore: u.a,
              appId: t,
              clanId: a,
              bShowRSSFeed: !0
            })
          );
        },
        aa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
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
                S = t.fnOnEventClick,
                f = t.fnToggleSeeFuture,
                a = t.nVisibleHeight,
                C = t.nScrollTop,
                O = t.nDisappearingHeaderVisibleHeight,
                n = t.nDisappearingHeaderHeight,
                w = t.nGroupHeaderHeight,
                r = e.GetCalendarSections(E);
              if (0 == r.length) return null;
              var T = qt(),
                o = e.m_visibilityStore.BAreAllEventsHidden(),
                I = C + O,
                k = C + a,
                j = !0,
                i =
                  G.a.bIncludeCurators &&
                  Object(N.a)().BIsGlobalCalendar() &&
                  U.i.accountid,
                D = i && !E,
                A = void 0,
                l = o
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
                        b = Object(P.a)(
                          Ne.a.PastSection,
                          j && Ne.a.DarkerBackground
                        );
                      0 < d &&
                        ((j = !j), D && 1e3 <= n && void 0 === A && (A = t));
                      var g = !E && c;
                      return B.createElement(ia, {
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
                        bCollapseIfSameSource:
                          !Object(N.a)().BIsSingleSourceCalendar() &&
                          G.a.bAllowGroupingBySource
                      });
                    });
              void 0 !== A &&
                l.splice(
                  A,
                  0,
                  B.createElement(Wt, {
                    key: "CuratorSuggestions",
                    bCanDismiss: !0
                  })
                );
              var s = r[0].rtSectionStart,
                c = Object(N.a)().GetCurrentlyLoadedEventCount(0, s),
                d = Object(N.a)().GetCurrentlyLoadedEventCount(s),
                u = E
                  ? d.nCount
                    ? "#EventCalendar_NoMoreFutureEvents"
                    : "#EventCalendar_NoFutureEvents"
                  : c.nCount
                  ? "#EventCalendar_NoMorePastEvents"
                  : "#EventCalendar_NoPastEvents",
                p = o
                  ? B.createElement(
                      "div",
                      {
                        key: "all-options-disabled",
                        className: Object(P.a)(Ne.a.EndOfRows, Ne.a.CalendarRow)
                      },
                      B.createElement(
                        "div",
                        { className: Ne.a.NoMoreRows },
                        " ",
                        Object(z.d)("#EventCalendar_EmptyCalendar"),
                        " "
                      )
                    )
                  : B.createElement(
                      B.Fragment,
                      null,
                      B.createElement(
                        "div",
                        {
                          key: "no-more-events",
                          className: Object(P.a)(
                            Ne.a.EndOfRows,
                            Ne.a.CalendarRow
                          )
                        },
                        B.createElement(
                          "div",
                          { className: Ne.a.NoMoreRows },
                          " ",
                          Object(z.d)(u),
                          " "
                        )
                      ),
                      E &&
                        c &&
                        B.createElement(
                          "div",
                          {
                            key: "link-back",
                            className: Ne.a.BackToThePast,
                            onClick: f
                          },
                          Object(z.d)("#EventCalendar_PastEventsLink"),
                          B.createElement(
                            "span",
                            { className: Ne.a.SeeAllCount },
                            c.nCount + (c.bIsComplete ? "" : "+")
                          )
                        ),
                      i &&
                        B.createElement(Wt, {
                          key: "CuratorSuggestions",
                          bCanDismiss: !1
                        })
                    );
              return B.createElement(
                "div",
                { className: Ne.a.RowContainer },
                B.createElement(
                  "div",
                  { className: Ne.a.Rows },
                  B.createElement("div", {
                    className: Ne.a.FutureSection,
                    key: "spacer",
                    style: { height: n }
                  }),
                  l,
                  p
                )
              );
            }),
            Object(M.c)(
              [k.a],
              t.prototype,
              "RecordSectionRenderedHeight",
              null
            ),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        na = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.rgCalendarItems[0].start_time,
                t = Object(N.a)().GetCurrentlyLoadedEventCount(e);
              return this.props.rgCalendarItems.length <= 1
                ? null
                : B.createElement(
                    "div",
                    {
                      key: "see-all-link",
                      className: Ne.a.MobileSeeAllink,
                      onClick: this.props.fnOnSeeFutureClick
                    },
                    Object(z.d)("#EventCalendar_FutureEventsLink"),
                    B.createElement(
                      "span",
                      { className: Ne.a.SeeAllCount },
                      t.nCount + (t.bIsComplete ? "" : "+")
                    )
                  );
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        ra = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.rgCalendarItems,
                a = e.fnOnEventClick,
                n = e.fnOnSeeFutureClick,
                r = e.bSuppressHoverEffects;
              return t && 0 != t.length
                ? B.createElement(
                    "div",
                    { className: Ne.a.CalendarRow },
                    B.createElement(
                      "div",
                      {
                        className: Object(P.a)(
                          Ne.a.HorizontalTileContainer,
                          "HorizontalTileCtn"
                        )
                      },
                      B.createElement(
                        "div",
                        { className: Ne.a.HorizontalTiles },
                        t.map(function(e) {
                          return B.createElement(Mt, {
                            key: "ht-" + e.unique_id,
                            calendarEvent: e,
                            partnerEventStore: R.c,
                            fnOnClicked: a,
                            bSuppressHoverEffects: r,
                            mode: 1 < t.length ? "upcoming" : "wide",
                            bHideGameTitle:
                              Object(N.a)().BIsSingleSourceCalendar() &&
                              Object(N.a)().BEventMatchCalendarSingleSource(e)
                          });
                        })
                      ),
                      B.createElement(na, {
                        rgCalendarItems: t,
                        fnOnSeeFutureClick: n
                      })
                    )
                  )
                : null;
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        oa = (function(t) {
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
            Object(M.d)(e, t),
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
                return B.createElement(Mt, {
                  key: "ht-" + e.unique_id,
                  calendarEvent: e,
                  partnerEventStore: R.c,
                  fnOnClicked: a,
                  bSuppressHoverEffects: n,
                  mode: 1 < t.length ? "carousel" : "wide",
                  bHideGameTitle: r
                });
              });
              return B.createElement(
                "div",
                { className: Ne.a.CalendarRow },
                B.createElement(
                  "div",
                  {
                    className: Object(P.a)(
                      Ne.a.EventTileCarousel,
                      "EventTileCarouselCtn"
                    )
                  },
                  B.createElement(
                    F,
                    {
                      hideArrows: !0,
                      visibleElements: Math.min(
                        this.state.nMaxCapsulesPerRow,
                        this.props.rgCalendarItems.length
                      ),
                      className: Ne.a.HorizontalTiles,
                      useTestScrollbar: !0
                    },
                    o
                  )
                )
              );
            }),
            Object(M.c)([k.a], e.prototype, "OnResize", null),
            (e = a = Object(M.c)([r.a], e))
          );
        })(B.Component),
        ia = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_ref = B.createRef()), (e.bNeedToReportHeight = !1), e;
          }
          return (
            Object(M.d)(e, t),
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
                return B.createElement(
                  "div",
                  { key: e.unique_id, className: Ne.a.CalendarRow },
                  B.createElement(Mt, {
                    calendarEvent: e,
                    partnerEventStore: R.c,
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
                      B.createElement(
                        "div",
                        {
                          key: h.unique_id,
                          className: Ne.a.CalendarEventListRow
                        },
                        B.createElement(
                          "div",
                          { className: Ne.a.CalendarEventListContainer },
                          B.createElement(Kt, {
                            calendarItem: h,
                            bSuppressHoverEffects: r
                          }),
                          B.createElement(oa, {
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
                return B.createElement(
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
                return B.createElement("div", {
                  ref: this.m_ref,
                  className: o
                });
              m.length && s && (m = m.slice().reverse());
              var v = B.createElement(
                  "div",
                  {
                    style: { top: n },
                    className: Object(P.a)(
                      Ne.a.GroupHeader,
                      Ne.a.CalendarRow,
                      a && Ne.a.HeaderAtTop
                    )
                  },
                  B.createElement(
                    "div",
                    { className: Ne.a.GroupHeaderTitle },
                    B.createElement("span", null, r),
                    B.createElement("div", { className: Ne.a.GroupHeaderLine }),
                    i &&
                      3 < m.length &&
                      B.createElement(
                        "div",
                        { className: Ne.a.SeeAllLink, onClick: l },
                        Object(z.d)("#EventCalendar_FutureEventsLink"),
                        B.createElement(
                          "span",
                          { className: Ne.a.SeeAllCount },
                          m.length + (h ? "" : "+")
                        )
                      )
                  )
                ),
                _ = i
                  ? B.createElement(ra, {
                      rgCalendarItems: m.slice(0, 3),
                      fnOnEventClick: d,
                      fnOnSeeFutureClick: l,
                      bSuppressHoverEffects: u
                    })
                  : this.RenderEventList(m);
              return B.createElement(
                "div",
                { ref: this.m_ref, className: o },
                v,
                _,
                !h &&
                  !i &&
                  B.createElement(
                    "div",
                    { className: Ne.a.Loading },
                    B.createElement(ae.a, {
                      size: "xlarge",
                      position: "center"
                    })
                  )
              );
            }),
            Object(M.c)([m.k], e.prototype, "cachedCalendarItems", null),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        la = a("AXHe"),
        sa = a("Cs6D"),
        ca = a("3+zv");
      ((Xt = Qt = Qt || {})[(Xt.k_ModReviewed = 0)] = "k_ModReviewed"),
        (Xt[(Xt.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
        (Xt[(Xt.k_ChangeEventType = 2)] = "k_ChangeEventType"),
        (Xt[(Xt.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
        (Xt[(Xt.k_ModReReviewed = 4)] = "k_ModReReviewed");
      var da = "ModAct",
        ua = (function() {
          function e() {}
          return (
            (e.prototype.ToModString = function() {
              var e =
                da +
                "_" +
                this.m_moderator +
                "_" +
                Math.floor(this.m_rtWhen) +
                "_" +
                this.m_action;
              switch (this.m_action) {
                case Qt.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case Qt.k_UpdateSeasonTags:
                  e += "_" + this.m_newTagAdded;
              }
              return e;
            }),
            (e.prototype.FromString = function(e) {
              var t = e.split("_");
              if (!t || t[0] !== da) return !1;
              switch (
                ((this.m_moderator = Number(t[1])),
                (this.m_rtWhen = Number(t[2])),
                (this.m_action = Number(t[3])),
                this.m_action)
              ) {
                case Qt.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case Qt.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function(e) {
              return (
                (this.m_moderator = U.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = Qt.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function(e) {
              return (
                (this.m_moderator = U.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? Qt.k_ModReviewed : Qt.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function(e) {
              return (
                (this.m_moderator = U.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? Qt.k_ModReReviewed : Qt.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function(e) {
              return e.startsWith(da);
            }),
            (e.prototype.SetUpdateSeasonalTags = function(e) {
              return (
                (this.m_moderator = U.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = Qt.k_UpdateSeasonTags),
                (this.m_newTagAdded = e),
                this
              );
            }),
            e
          );
        })(),
        pa = new ((function() {
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
                Object(M.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n = this;
                  return Object(M.e)(this, function(e) {
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
                Object(M.b)(this, void 0, void 0, function() {
                  var t, a, n;
                  return Object(M.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t =
                            U.c.STORE_BASE_URL +
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          U.c.STORE_BASE_URL + "events_admin/ajaxupdatetags"),
                        (a = l.join(",")),
                        c &&
                          (0 < l.length && (a += ","), (a += c.ToModString())),
                        (n = new FormData()).append("sessionid", U.c.SESSIONID),
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          U.c.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (a = new FormData()).append("sessionid", U.c.SESSIONID),
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
            Object(M.c)([m.y], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(M.c)([m.y], e.prototype, "m_listEvents", void 0),
            Object(M.c)([m.h], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })())(),
        ma = a("Qcoi"),
        ha = a("T27q"),
        va = a("BpzF"),
        _a = a("UxvL"),
        ba = a("E9gz"),
        ga = a("dsx8"),
        ya = a("f0Wu"),
        Ea = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0
        },
        Sa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = g.a.CancelToken.source()),
              (e.m_refScroll = B.createRef()),
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
            Object(M.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.setState(
                { bInfiniteScrollLoading: !0 },
                this.LoadMoreModerationEvents
              ),
                window.addEventListener("scroll", this.OnScroll, !0);
              var e = Rt.a.parse(
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
                  (r = [{ label: Object(ft.b)(n), value: n }]))
                : e.excludedTags &&
                  ((r = []),
                  e.excludedTags.forEach(function(e) {
                    var t = Number.parseInt(e);
                    r.push({ label: Object(ft.b)(t), value: t });
                  }));
              var o = void 0;
              "string" == typeof e.filterDate &&
                0 < e.filterDate.length &&
                (o = ya.unix(Number(e.filterDate)));
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
                        Rt.a.stringify({
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
              var t = Object(ne.a)(e);
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
              return Object(M.b)(this, void 0, void 0, function() {
                return Object(M.e)(this, function(e) {
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
                  pa
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
                pa.GetAllSolrEvents().forEach(function(e) {
                  t.push(
                    B.createElement(Ca, { solrData: e, key: e.unique_id })
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
              (this.m_nPage = 0), pa.ClearAllSolrEvents();
            }),
            (e.prototype.OnDateChange = function(e) {
              if ("string" == typeof e) {
                var t = ya(e, "M/D/YYYY", !0);
                if (!t.isValid())
                  return void this.setState({ filterDateAsString: e });
                e = t;
              }
              this.state.filterDate != e &&
                (this.ClearPreviousData(),
                this.setState(
                  Object(M.a)(
                    { filterDateAsString: void 0, filterDate: e },
                    Ea
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                ));
            }),
            (e.prototype.IsValidDate = function(e) {
              var t = new Date();
              return (
                e.unix() <
                ya
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
                  Object(M.a)({ selectedTags: e }, Ea),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventExcludeTags = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(M.a)({ excludedTags: e }, Ea),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventTypeFilter = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(M.a)({ filterEventTypes: e }, Ea),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnVisibilityStartTimeChange = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(M.a)(
                    { bOrderByVisibilityStartTime: e.currentTarget.checked },
                    Ea
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.render = function() {
              var e = this.RenderTiles(),
                t = S.c.map(function(e) {
                  return { value: e, label: Object(ft.b)(e) };
                }),
                a = ca.a.map(function(e) {
                  return { value: e, label: e };
                }),
                n = {
                  option: function(e) {
                    return Object(M.a)(Object(M.a)({}, e), {
                      color: "#444444"
                    });
                  }
                };
              return B.createElement(
                "div",
                { className: ba.ModerationContainer, ref: this.m_refScroll },
                B.createElement(
                  "div",
                  null,
                  B.createElement(
                    "h2",
                    null,
                    Object(z.d)("#EventModeration_Title")
                  ),
                  B.createElement(
                    b.a,
                    null,
                    B.createElement(
                      "div",
                      { className: Object(P.a)(ee.a.FlexRowContainer) },
                      B.createElement(
                        "div",
                        { className: ba.FilterContainer },
                        B.createElement(
                          "span",
                          null,
                          Object(z.d)("#EventModeration_FilterByTag")
                        ),
                        B.createElement(sa.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventSelectedTags,
                          value: this.state.selectedTags,
                          options: a,
                          styles: n
                        })
                      ),
                      B.createElement(
                        "div",
                        { className: ba.FilterContainer },
                        B.createElement(
                          "span",
                          null,
                          Object(z.d)("#EventModeration_FilterExcludeByTag")
                        ),
                        B.createElement(sa.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventExcludeTags,
                          value: this.state.excludedTags,
                          options: a,
                          styles: n
                        })
                      ),
                      B.createElement(
                        "div",
                        { className: ba.FilterContainer },
                        B.createElement(
                          "span",
                          null,
                          Object(z.d)("#EventModeration_FilterToType")
                        ),
                        B.createElement(sa.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventTypeFilter,
                          value: this.state.filterEventTypes,
                          options: t,
                          styles: n
                        })
                      ),
                      B.createElement(
                        "div",
                        { className: ba.FilterContainer },
                        B.createElement(
                          "span",
                          null,
                          Object(z.d)("#EventModeration_FilterToDate")
                        ),
                        B.createElement(la, {
                          onChange: this.OnDateChange,
                          timeFormat: !1,
                          value: this.state.filterDate,
                          isValidDate: this.IsValidDate,
                          inputProps: {
                            placeholder: Object(z.d)(
                              "#EventModeration_PickDatee"
                            ),
                            className: ba.TimeWidth
                          }
                        })
                      ),
                      B.createElement(
                        "div",
                        { className: ba.FilterContainer },
                        B.createElement(
                          "label",
                          { htmlFor: "EventPerLoad" },
                          Object(z.d)("#EventModeration_PerPageLoad")
                        ),
                        B.createElement(
                          "div",
                          null,
                          B.createElement("input", {
                            type: "number",
                            id: "EventPerLoad",
                            min: "10",
                            max: "5000",
                            value: this.state.eventsToLoadPerPaging,
                            onChange: this.OnEventPerPageLoad
                          })
                        )
                      ),
                      B.createElement(
                        "div",
                        { className: ba.FilterContainer },
                        B.createElement("input", {
                          type: "checkbox",
                          id: "VisibilityStart",
                          checked: this.state.bOrderByVisibilityStartTime,
                          onChange: this.OnVisibilityStartTimeChange
                        }),
                        B.createElement(
                          "label",
                          { htmlFor: "VisibilityStart" },
                          Object(z.d)("#EventModeration_OrderByFirstVisible")
                        )
                      )
                    )
                  )
                ),
                B.createElement(b.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  B.createElement(ae.a, {
                    position: "center",
                    size: "medium",
                    string: Object(z.d)("#Loading")
                  })
              );
            }),
            Object(M.c)([k.a], e.prototype, "HandleError", null),
            Object(M.c)(
              [k.a],
              e.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(M.c)([k.a], e.prototype, "LoadMoreModerationEvents", null),
            Object(M.c)(
              [k.a],
              e.prototype,
              "UpdateQueryParametersAndLoadMoreEvents",
              null
            ),
            Object(M.c)([k.a], e.prototype, "OnScroll", null),
            Object(M.c)([k.a], e.prototype, "OnDateChange", null),
            Object(M.c)([k.a], e.prototype, "IsValidDate", null),
            Object(M.c)([k.a], e.prototype, "OnEventPerPageLoad", null),
            Object(M.c)([k.a], e.prototype, "OnChangeEventSelectedTags", null),
            Object(M.c)([k.a], e.prototype, "OnChangeEventExcludeTags", null),
            Object(M.c)([k.a], e.prototype, "OnChangeEventTypeFilter", null),
            Object(M.c)(
              [k.a],
              e.prototype,
              "OnVisibilityStartTimeChange",
              null
            ),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        fa = Object(i.h)(Sa),
        Ca = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingEvent: !R.c.BHasClanEventModel(
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
            Object(M.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var e,
                a = this,
                t = this.props.solrData,
                n = t.unique_id;
              R.c.BHasClanEventModel(n) ||
                ((e = Date.now() / 1e3),
                R.c
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new L.a(t.clan_steamid),
                    n,
                    e
                  )
                  .then(function() {
                    return a.setState({ bLoadingEvent: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(ne.a)(e);
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
                R.c.BHasClanEventModel(e) &&
                this.setState({ bShowAsModal: !0 });
            }),
            (e.prototype.HideModalEvent = function() {
              this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
            }),
            (e.prototype.OnModeratedChanged = function(e) {
              var t, a, n, r;
              this.state.bSavingModeration ||
                ((t = this.props.solrData.unique_id),
                (a = R.c.GetClanEventModel(t)),
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c, d;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props.solrData),
                        (a = t.unique_id),
                        (n = R.c.GetClanEventModel(a)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (r = new Array()),
                        (o = new Array()),
                        (i =
                          n.BHasTag("mod_reviewed") &&
                          !n.BHasTag("mod_require_rereview")),
                        (l = new ua().SetReviewAction(!i)),
                        i
                          ? r.push("mod_require_rereview")
                          : (r.push("mod_reviewed"),
                            o.push("mod_require_rereview"),
                            n.BHasTag("mod_require_rereview") &&
                              l.SetReReviewAction(!i)),
                        [
                          4,
                          pa.UpdateTagsOnPartnerEvent(
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
                        (d = Object(ne.a)(c)),
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
                a = R.c.GetClanEventModel(t.unique_id);
              Object(j.d)(
                B.createElement(ja, { eventModel: a }),
                Object(H.o)(e)
              );
            }),
            (e.prototype.OnUpdateSeasonalTag = function(e) {
              var t = this.props.solrData,
                a = R.c.GetClanEventModel(t.unique_id);
              Object(j.d)(
                B.createElement(Aa, { eventModel: a }),
                Object(H.o)(e)
              );
            }),
            (e.prototype.render = function() {
              var e = this.props.solrData,
                t = e.unique_id,
                a = Number(e.appid),
                n = Object(S.e)(U.c.LANGUAGE),
                r = R.c.GetClanEventModel(t);
              if (r) {
                if (this.state.bShowAsModal)
                  return B.createElement(
                    te.h,
                    { className: ga.StoreHeaderAdjust },
                    B.createElement(
                      "div",
                      null,
                      B.createElement(ha.b, {
                        event: r,
                        fnClose: this.HideModalEvent
                      })
                    )
                  );
                var o = r.GetImageForSizeAsArrayWithFallback(
                    "capsule",
                    n,
                    dt.c.capsule_main
                  ),
                  i = r.BImageNeedScreenshotFallback("capsule", n),
                  l =
                    0 < o.length
                      ? B.createElement(
                          B.Fragment,
                          null,
                          B.createElement(_a.a, { rgSources: o }),
                          i &&
                            B.createElement(
                              "div",
                              { className: ba.NoCapsule },
                              Object(z.d)("#EventModTile_FallbackImageText")
                            )
                        )
                      : B.createElement(
                          "div",
                          { className: ba.NoCapsule },
                          Object(z.d)("#EventModTile_NoCapsule")
                        );
              } else l = Object(z.d)("#Loading");
              var s = e.hidden
                  ? e.published
                    ? Object(z.d)("#EVentModTile_State_Staged")
                    : Object(z.d)("#EVentModTile_State_Draft")
                  : Object(z.d)("#EVentModTile_State_Published"),
                c = r ? r.type : Number(e.event_type);
              return B.createElement(
                b.a,
                null,
                B.createElement(
                  "div",
                  { className: ba.Tile },
                  B.createElement(
                    "div",
                    { className: ba.TileCapsule, onClick: this.ShowModalEvent },
                    l
                  ),
                  B.createElement(
                    "div",
                    { className: ba.TileDetails },
                    B.createElement(
                      "div",
                      { className: ba.DetailsLeft },
                      B.createElement("div", null, s),
                      B.createElement(
                        "a",
                        {
                          href:
                            (U.c.IN_CLIENT ? "steam://openurl/" : "") +
                            U.c.COMMUNITY_BASE_URL +
                            "ogg/" +
                            a +
                            "/announcements/detail/" +
                            e.announcement_gid,
                          target: U.c.IN_CLIENT ? void 0 : "_blank",
                          className: ba.EventTitle
                        },
                        e.event_name
                      ),
                      B.createElement(
                        "div",
                        {
                          className: Object(P.a)(
                            1 == c ? ba.TileEventOtherType : ""
                          )
                        },
                        r ? r.GetCategoryAsString() : e.event_type
                      ),
                      this.state.bLoadingEvent &&
                        B.createElement(ae.a, {
                          size: "small",
                          string: Object(z.d)("#Loading")
                        }),
                      B.createElement(wa, {
                        accountID: Number(e.creator_accountid),
                        locToken: "#EventModTile_Author"
                      }),
                      Boolean(
                        e.updator_accountid &&
                          0 < Number(e.updator_accountid) &&
                          e.updator_accountid != e.creator_accountid
                      ) &&
                        B.createElement(wa, {
                          accountID: Number(e.updator_accountid),
                          locToken: "#EventModTile_Updator"
                        }),
                      B.createElement(Ia, {
                        appid: a,
                        clanSteamID: new L.a(e.clan_steamid)
                      })
                    ),
                    r &&
                      B.createElement(
                        B.Fragment,
                        null,
                        B.createElement(
                          "div",
                          { className: ba.DetailsMiddle },
                          B.createElement(
                            "div",
                            { className: ba.ModeratedFlagCtn },
                            B.createElement("input", {
                              type: "checkbox",
                              id: r.GID + "_moderated",
                              checked: Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ),
                              onChange: this.OnModeratedChanged
                            }),
                            B.createElement(
                              "label",
                              { htmlFor: r.GID + "_moderated" },
                              this.state.bSavingModeration &&
                                B.createElement(ae.a, { size: "small" }),
                              Boolean(!r.BHasTag("mod_reviewed")) &&
                                Object(z.d)("#EventModTile_Moderated_Review"),
                              Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ) && Object(z.d)("#EventModTile_Moderated"),
                              Boolean(r.BHasTag("mod_require_rereview")) &&
                                Object(z.d)("#EventModTile_Moderated_ReReview")
                            )
                          ),
                          B.createElement(
                            "button",
                            {
                              className: Object(P.a)(ee.a.Button, ba.Button),
                              onClick: this.OnChangeCategory
                            },
                            Object(z.d)("#EventModTile_ChangeEventType")
                          ),
                          r.BHasTag("halloween2019candidate") &&
                            B.createElement(
                              "button",
                              {
                                className: Object(P.a)(ee.a.Button),
                                onClick: this.OnUpdateSeasonalTag
                              },
                              Object(z.d)("#EventModTile_SeasonalTag")
                            ),
                          B.createElement(Da, { eventModel: r })
                        ),
                        B.createElement(
                          "div",
                          { className: ba.DetailsRight },
                          B.createElement(va.b, {
                            event: r,
                            stylesmodule: ba,
                            nOverrideEndTime: r.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: r.GetStartTimeAndDateUnixSeconds()
                          }),
                          B.createElement(Ta, { event: r }),
                          B.createElement(ka, { event: r })
                        )
                      )
                  )
                )
              );
            }),
            Object(M.c)([k.a], e.prototype, "ShowModalEvent", null),
            Object(M.c)([k.a], e.prototype, "HideModalEvent", null),
            Object(M.c)([k.a], e.prototype, "OnModeratedChanged", null),
            Object(M.c)([k.a], e.prototype, "ApplyModerationToggle", null),
            Object(M.c)([k.a], e.prototype, "OnChangeCategory", null),
            Object(M.c)([k.a], e.prototype, "OnUpdateSeasonalTag", null),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component);
      function Oa(e) {
        return L.a.InitFromAccountID(e).ConvertTo64BitString();
      }
      var wa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                userProfile: ma.a.GetProfile(Oa(e.props.accountID)),
                bLoadingProfile: !ma.a.BHasProfile(Oa(e.props.accountID))
              }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.state.bLoadingProfile && this.LoadProfile();
            }),
            (e.prototype.LoadProfile = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = Oa(this.props.accountID)), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]), [4, ma.a.LoadProfiles([t])]
                      );
                    case 2:
                      return e.sent(), [3, 4];
                    case 3:
                      return (
                        (a = e.sent()),
                        (n = Object(ne.a)(a)),
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
                            userProfile: ma.a.GetProfile(t),
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
                  (U.c.IN_CLIENT ? "steam://openurl/" : "") +
                  "https://steamsupport.valvesoftware.com/account/overview/" +
                  Oa(this.props.accountID);
              return B.createElement(
                "div",
                null,
                Object(z.l)(
                  a,
                  B.createElement(
                    "a",
                    { href: r, target: U.c.IN_CLIENT ? void 0 : "_blank" },
                    Boolean(n)
                      ? B.createElement(B.Fragment, null, n.persona_name)
                      : B.createElement(
                          B.Fragment,
                          null,
                          this.state.bLoadingProfile &&
                            B.createElement(ae.a, { size: "small" }),
                          B.createElement("span", null, t)
                        )
                  )
                )
              );
            }),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        Ta = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bDownloadingImages: !1, nLocLanguages: 0 }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
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
              R.c
                .LoadClanEventLocalizationFromAnnouncementGID(
                  e.clanSteamID,
                  e.AnnouncementGID
                )
                .then(function(e) {
                  a.m_cancelSignal.token.reason ||
                    a.setState({ nLocLanguages: e.length });
                })
                .catch(function(e) {
                  var t = Object(ne.a)(e);
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
              return B.createElement(
                "div",
                { className: ba.AnalysisCtn },
                B.createElement(
                  "div",
                  { className: ba.TileTitle },
                  Object(z.d)("#EventModTile_Analysis")
                ),
                B.createElement(
                  "div",
                  null,
                  Object(z.d)("#EventModTile_Stats_Comments", e.nCommentCount)
                ),
                B.createElement(
                  "div",
                  null,
                  Object(z.d)("#EventModTile_Stats_VoteUp", e.nVotesUp)
                ),
                B.createElement(
                  "div",
                  null,
                  Object(z.d)("#EventModTile_Stats_VoteDown", e.nVotesDown)
                ),
                Boolean(t) &&
                  B.createElement(
                    "div",
                    { className: ba.ArtHeader },
                    Object(z.d)("#EventModTile_ImageAnalysis_Header", t),
                    " "
                  ),
                Boolean(a) &&
                  B.createElement(
                    "div",
                    null,
                    Object(z.d)("#EventModTile_ImageAnalysis_Capsule", a),
                    " "
                  ),
                Boolean(n) &&
                  B.createElement(
                    "div",
                    { className: ba.ArtSpotlight },
                    Object(z.d)("#EventModTile_ImageAnalysis_Spotlight", n),
                    " "
                  ),
                Boolean(r) &&
                  B.createElement(
                    "div",
                    null,
                    Object(z.d)("#EventModTile_ImageAnalysis_Broadcast", r),
                    " "
                  ),
                0 == o &&
                  B.createElement(
                    "div",
                    { className: ba.AnalysisMissing },
                    Object(z.d)("#EventModTile_ImageAnalysis_None"),
                    " "
                  ),
                0 == this.state.nLocLanguages &&
                  B.createElement(ae.a, {
                    size: "small",
                    string: Object(z.d)("#EventModTile_LoadingLocs")
                  }),
                0 < this.state.nLocLanguages &&
                  B.createElement(
                    "div",
                    null,
                    Object(z.d)(
                      "#EventModTile_Languages",
                      this.state.nLocLanguages
                    )
                  ),
                Boolean(i) &&
                  B.createElement(
                    "div",
                    null,
                    Object(z.d)("#EventModTile_Languages_Summary", i),
                    " "
                  ),
                Boolean(l) &&
                  B.createElement(
                    "div",
                    null,
                    Object(z.d)("#EventModTile_Languages_Subtitle", l),
                    " "
                  )
              );
            }),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        Ia = (function(t) {
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
            Object(M.d)(e, t),
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
                    var t = Object(ne.a)(e);
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
                return B.createElement(ae.a, {
                  size: "small",
                  string: Object(z.d)("#EventModTile_AppInfoLoading")
                });
              var e = this.props,
                t = e.appid,
                a = e.clanSteamID;
              if (t) {
                var n = _.a.GetStoreCapsuleInfo(t).GetAppStoreData();
                return B.createElement(
                  "div",
                  { className: ba.TileAppInfo },
                  B.createElement(
                    "div",
                    { className: ba.TileAppInfoTitle },
                    B.createElement(
                      T.a,
                      { href: n.capsule_link },
                      B.createElement("img", {
                        className: ba.TileAppInfoImage,
                        src: n.capsule
                      }),
                      B.createElement(
                        "div",
                        null,
                        Object(z.d)("#EventModTile_GameName", n.title)
                      )
                    )
                  ),
                  B.createElement(
                    "div",
                    null,
                    Object(z.d)("#EventModTile_ReleaseDate", n.release)
                  )
                );
              }
              if (a) {
                var r = a.GetAccountID(),
                  o = E.a.GetClanInfoByClanAccountID(r);
                if (o && o.is_curator)
                  return B.createElement(
                    "div",
                    { className: ba.TileAppInfo },
                    B.createElement(
                      "div",
                      { className: ba.TileAppInfoTitle },
                      B.createElement(
                        T.a,
                        { href: U.c.STORE_BASE_URL + "/curator/" + r + "/" },
                        B.createElement("img", {
                          className: ba.TileAppInfoImage,
                          src: o.avatar_full_url
                        }),
                        B.createElement(
                          "div",
                          null,
                          Object(z.d)("#EventModTile_CuratorName", o.group_name)
                        )
                      )
                    )
                  );
              }
              return null;
            }),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        ka = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.render = function() {
              var e = this.props.event,
                t = Object(ca.d)(e),
                a = Object(ca.c)(e),
                n = Object(ca.e)(e),
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
              return B.createElement(
                "div",
                { className: ba.VisibiltyCtn },
                B.createElement(
                  "div",
                  { className: ba.TileTitle },
                  Object(z.d)("#EventModTile_Visibility")
                ),
                B.createElement(
                  "div",
                  null,
                  Object(z.d)(
                    "#EventModTile_Store_Visibility",
                    r
                      ? Object(z.d)("#WriteReview_Dialog_Yes")
                      : Object(z.d)("#WriteReview_Dialog_No"),
                    r
                      ? ""
                      : n
                      ? Object(z.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_store")
                      ? Object(z.d)("#EventModTime_Hidden_OptOut")
                      : Object(z.d)("#EventModTime_Hidden_Moderator")
                  )
                ),
                B.createElement(
                  "div",
                  null,
                  Object(z.d)(
                    "#EventModTile_LibraryHome_Visibility",
                    o
                      ? Object(z.d)("#WriteReview_Dialog_Yes")
                      : Object(z.d)("#WriteReview_Dialog_No"),
                    o
                      ? ""
                      : n
                      ? Object(z.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_overview")
                      ? Object(z.d)("#EventModTime_Hidden_OptOut")
                      : Object(z.d)("#EventModTime_Hidden_Moderator")
                  )
                ),
                B.createElement(
                  "div",
                  null,
                  Object(z.d)(
                    "#EventModTile_LibraryDetail_Visibility",
                    i
                      ? Object(z.d)("#WriteReview_Dialog_Yes")
                      : Object(z.d)("#WriteReview_Dialog_No"),
                    i
                      ? ""
                      : n
                      ? Object(z.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_detail")
                      ? Object(z.d)("#EventModTime_Hidden_OptOut")
                      : Object(z.d)("#EventModTime_Hidden_Moderator")
                  )
                )
              );
            }),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        ja = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                newCategoryOption: {
                  label: Object(ft.b)(34),
                  value: { eventType: 34 }
                }
              }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.ChangeCategoryForEvent = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c, d;
                return Object(M.e)(this, function(e) {
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
                          pa.UpdatePartnerEventType(
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
                        (i = ca.n),
                        (l = []),
                        r.value.tags &&
                          r.value.tags.forEach(function(e) {
                            l.push(e);
                            var t = new ua()
                              .SetUpdateSeasonalTags(e)
                              .ToModString();
                            l.push(t);
                          }),
                        [
                          4,
                          pa.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.GetAnnouncementGID(),
                            l,
                            i,
                            new ua().SetActionChangeEvent(o)
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
                        (d = Object(ne.a)(c)),
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
                r = S.c
                  .filter(function(e) {
                    return 1 == e || 4 == e || 9 <= e;
                  })
                  .map(function(e) {
                    var t = { eventType: e };
                    return (
                      12 == e && (t.tags = ["patchnotes"]),
                      { label: Object(ft.b)(e), value: t }
                    );
                  });
              return (
                r.push({
                  label: Object(z.d)("#PartnerEvent_Curator_Group_Members"),
                  value: {
                    eventType: 28,
                    tags: ["curator", "curator_group_members"]
                  }
                }),
                r.push({
                  label: Object(z.d)("#PartnerEvent_Curator_Public"),
                  value: { eventType: 28, tags: ["curator", "curator_public"] }
                }),
                B.createElement(
                  te.c,
                  {
                    strTitle: Object(z.d)("#EventModTile_ChangeEventType"),
                    strDescription: Object(z.d)(
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
                  B.createElement(
                    B.Fragment,
                    null,
                    B.createElement(
                      "div",
                      { className: ba.CategoryChangeDialog },
                      B.createElement("br", null),
                      this.state.bUpdating &&
                        B.createElement(ae.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        B.createElement(
                          "div",
                          null,
                          Object(z.d)("#Chat_Settings_Error_ServerError"),
                          B.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      B.createElement(sa.a, {
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
            Object(M.c)([k.a], e.prototype, "ChangeCategoryForEvent", null),
            Object(M.c)([k.a], e.prototype, "OnChangeSelection", null),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        Da = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bCollapsed: !0 }), e;
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.RenderModAction = function(e) {
              var t = Object(z.i)(e.m_rtWhen),
                a = B.createElement(wa, {
                  locToken: "#EventModTile_Moderator",
                  accountID: e.m_moderator
                });
              switch (e.m_action) {
                case Qt.k_ModReviewed:
                  return B.createElement(
                    "div",
                    { className: ba.ModeratorAuditActionCtn },
                    Object(z.l)(
                      "#EventModTile_Action_Reviewed",
                      B.createElement("span", null, t),
                      a
                    )
                  );
                case Qt.k_ModUnreviewed:
                  return B.createElement(
                    "div",
                    { className: ba.ModeratorAuditActionCtn },
                    Object(z.l)(
                      "#EventModTile_Action_UnReviewed",
                      B.createElement("span", null, t),
                      a
                    )
                  );
                case Qt.k_ChangeEventType:
                  return B.createElement(
                    "div",
                    { className: ba.ModeratorAuditActionCtn },
                    Object(z.l)(
                      "#EventModTile_Action_NewEventType",
                      B.createElement("span", null, t),
                      a,
                      Object(ft.b)(e.m_newEventType)
                    )
                  );
                case Qt.k_UpdateSeasonTags:
                  return B.createElement(
                    "div",
                    { className: ba.ModeratorAuditActionCtn },
                    Object(z.l)(
                      "#EventModTile_Action_SeasonTagUpdate",
                      B.createElement("span", null, t),
                      a,
                      e.m_newTagAdded
                    )
                  );
                default:
                  return B.createElement(
                    "div",
                    { className: ba.ModeratorAuditActionCtn },
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
                  var t = new ua();
                  t.FromString(e),
                    n.push(
                      B.createElement(
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
                  return ua.IsAuditAction(e);
                }),
                a = t.length,
                n = 3 < t.length && this.state.bCollapsed;
              if (0 == t.length) return null;
              n && (t = t.splice(0, 3));
              var r = this.RenderAudit(t);
              return B.createElement(
                "div",
                null,
                B.createElement(
                  "h4",
                  null,
                  Object(z.d)("#EventModTile_Action_Title")
                ),
                r,
                n &&
                  B.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !1 });
                      }
                    },
                    Object(z.d)("#EventModTile_Action_More", a - 3)
                  ),
                Boolean(!n && 3 < a) &&
                  B.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !0 });
                      }
                    },
                    Object(z.d)("#EventModTile_Action_Hide")
                  )
              );
            }),
            e
          );
        })(B.Component),
        Aa = (function(t) {
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
            Object(M.d)(e, t),
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i;
                return Object(M.e)(this, function(e) {
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
                          pa.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            t,
                            a,
                            new ua().SetUpdateSeasonalTags(
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
                        (i = Object(ne.a)(o)),
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
              return B.createElement(
                te.c,
                {
                  strTitle: Object(z.d)("#EventModTile_SeasonalTag"),
                  onCancel: a,
                  onOK: function() {
                    return e.setState({ bUpdating: !0 }, e.ApplyAction);
                  }
                },
                B.createElement(
                  B.Fragment,
                  null,
                  B.createElement(
                    "div",
                    { className: ba.CategoryChangeDialog },
                    B.createElement("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance
                    }),
                    B.createElement(
                      "label",
                      { htmlFor: "Acceptance" },
                      Object(z.d)("#EventModTile_SeasonalTag_Desc")
                    ),
                    B.createElement(
                      "div",
                      null,
                      Object(z.d)("#EventModTile_SeasonalTag_Desc_Secondary")
                    ),
                    B.createElement("input", {
                      id: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror
                    }),
                    B.createElement(
                      "label",
                      { htmlFor: "Horror" },
                      "Horror Tag"
                    ),
                    B.createElement("input", {
                      id: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute
                    }),
                    B.createElement("label", { htmlFor: "Cute" }, "Cute Tag"),
                    this.state.bUpdating &&
                      B.createElement(ae.a, { size: "small" }),
                    this.state.strErrorMsg &&
                      B.createElement(
                        "div",
                        null,
                        Object(z.d)("#Chat_Settings_Error_ServerError"),
                        B.createElement("br", null),
                        this.state.strErrorMsg
                      )
                  )
                )
              );
            }),
            Object(M.c)([k.a], e.prototype, "ChangeAcceptance", null),
            Object(M.c)([k.a], e.prototype, "ChangeHorror", null),
            Object(M.c)([k.a], e.prototype, "ChangeCute", null),
            Object(M.c)([k.a], e.prototype, "ApplyAction", null),
            e
          );
        })(B.Component),
        La = a("5eAM"),
        Na = a("gOcu"),
        Ga = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoadingEvent: !0 }),
              (e.m_cancelSignal = g.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(M.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "SteamGameFestivalStoreDebug to unload "
              );
            }),
            (e.prototype.componentDidMount = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return ((t = this.props),
                      (a = t.clanEventGID),
                      (n = t.clanAccountID),
                      console.log(a, n, typeof a, typeof n),
                      !a || R.c.BHasClanEventModel(a))
                        ? [3, 8]
                        : ((r = L.a.InitFromClanID(Number.parseInt(n))),
                          [
                            4,
                            R.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
                          [4, La.a.LoadAppLinkInfo(i)])
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
                        Na.a
                          .Get()
                          .SetCollectionInfo(
                            "gamefestival2020",
                            "gamefestival2020info"
                          ),
                        [
                          4,
                          Na.a.Get().LoadAppIDsBatch(i, !1, this.m_cancelSignal)
                        ]
                      );
                    case 4:
                      return (
                        e.sent(),
                        (c = new Array()),
                        Na.a
                          .Get()
                          .GetAllDemoInfo()
                          .forEach(function(e) {
                            return c.push(e.demo_appid);
                          }),
                        [4, La.a.LoadAppLinkInfo(c)]
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
                return B.createElement(ae.a, {
                  string:
                    Object(z.d)("#Loading") +
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
                return B.createElement("div", null, " Failed to load event");
              var e = this.state.event;
              if (!e.jsondata.bSaleEnabled)
                return B.createElement("div", null, "Not a sale evnet");
              var n = new Map();
              this.state.rgDemoIDs.forEach(function(e) {
                return n.set(e, !0);
              });
              var a = new Array(),
                r = new Array();
              La.a.GetMissingAppIDs().forEach(function(e, t) {
                a.push(
                  B.createElement(
                    "div",
                    { key: "missing: " + t },
                    B.createElement(
                      "a",
                      {
                        href: U.c.STORE_BASE_URL + "app/" + t + "/?beta=1",
                        target: "_blank"
                      },
                      t
                    )
                  )
                ),
                  r.push(t);
              });
              var o = new Array();
              La.a.GetAllLoadedAppLinks().forEach(function(e, t) {
                var a;
                n.has(t) ||
                  Na.a.Get().BHasDemoAppID(t) ||
                  ((a = La.a.GetAppLinkInfo(t)),
                  o.push(
                    B.createElement(
                      "div",
                      { key: "missingdemo_" + t },
                      "demo" == a.type &&
                        B.createElement(
                          "b",
                          null,
                          "--Error: Sale Page has Demo AppID, based game -- "
                        ),
                      a.name,
                      " (",
                      t,
                      ")",
                      B.createElement(
                        "a",
                        {
                          href: U.c.STORE_BASE_URL + "app/" + t + "/?beta=0",
                          target: "_blank"
                        },
                        "Store Page"
                      ),
                      " ",
                      B.createElement(
                        "a",
                        {
                          href: U.c.PARTNER_BASE_URL + "apps/landing/" + t,
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
                  Na.a.Get().BHasDemoAppID(t) &&
                  ((a = Na.a.Get().GetDemoEventInfo(t)),
                  La.a.GetAppLinkInfo(a.demo_appid).coming_soon
                    ? ((c += 1), (n = !0))
                    : (d += 1)),
                  e.BIsLoaded() && e.GetAppStoreData().BHasDemoAppID()
                    ? ((i += 1), n && (u += 1))
                    : e.BIsLoaded() && Na.a.Get().BHasDemoAppID(t)
                    ? ((l += 1), n || (p += 1))
                    : -1 ==
                        r.findIndex(function(e) {
                          return e == t;
                        }) && s.push(e.GetAppStoreData());
              });
              var t = new Array();
              s.forEach(function(e) {
                t.push(
                  B.createElement(
                    "div",
                    { key: "missing_capps" + e.appid },
                    B.createElement(
                      "a",
                      {
                        href:
                          U.c.STORE_BASE_URL + "app/" + e.appid + "/?beta=1",
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
              Na.a
                .Get()
                .GetAllDemoInfo()
                .forEach(function(e) {
                  e.info_clan_event_gid && (m += 1);
                });
              var h = 0;
              return (
                La.a.GetAllLoadedAppLinks().forEach(function(e) {
                  "demo" != e.type && (h += 1);
                }),
                B.createElement(
                  b.a,
                  null,
                  B.createElement(
                    "h1",
                    null,
                    e.GetNameWithFallback(Object(S.e)(U.c.LANGUAGE))
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement("b", null, "Unique AppIDs:"),
                    " ",
                    this.state.rgAppIDs.length,
                    " "
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement(
                      "b",
                      null,
                      "Visible Apps in ",
                      U.c.COUNTRY,
                      ":"
                    ),
                    " ",
                    h
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement("b", null, "Unknown AppID types:"),
                    " ",
                    this.state.rgUnknownTypeAppIDs.length
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement("b", null, "Missing AppIDs:"),
                    " ",
                    La.a.GetNumMissingAppLinks(),
                    " "
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement("b", null, "Demo via DemoStore:"),
                    " ",
                    Na.a.Get().GetNumDemos()
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement(
                      "b",
                      null,
                      "Visible apps missing demo store:"
                    ),
                    " ",
                    o.length
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement("b", null, "CApplications Loaded:"),
                    " ",
                    _.a.GetNumAppLinkLoaded(),
                    " "
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement(
                      "b",
                      null,
                      "CApplication with Associated Demos:"
                    ),
                    " ",
                    i
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement(
                      "b",
                      null,
                      "  Associated with store page but not released: "
                    ),
                    " ",
                    u
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement(
                      "b",
                      null,
                      "CApplication with demo without association:"
                    ),
                    " ",
                    l
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement(
                      "b",
                      null,
                      "  Released but not associated with store page: "
                    ),
                    " ",
                    p
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement("b", null, "CApplication missing:"),
                    " ",
                    _.a.GetMissingAppIDs().size
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement(
                      "b",
                      null,
                      "CApplication without demo store and demo associations:"
                    ),
                    " ",
                    s.length
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement("b", null, "Quick Pitches: "),
                    m
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement("b", null, "Released Demo: "),
                    d
                  ),
                  B.createElement(
                    "div",
                    null,
                    B.createElement("b", null, "Unreleased Demo: "),
                    c
                  ),
                  B.createElement("hr", null),
                  B.createElement("h2", null, "Missing Appids:"),
                  a,
                  B.createElement(
                    "h2",
                    null,
                    "Missing BOTH demo list and associated demo on product page:"
                  ),
                  t,
                  B.createElement(
                    "h2",
                    null,
                    "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):"
                  ),
                  o
                )
              );
            }),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        Ba = new ((function() {
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
            Object(M.c)([m.y], e.prototype, "m_backfill", void 0),
            Object(M.c)([m.y], e.prototype, "m_mapEventGIDProcessed", void 0),
            Object(M.c)([m.y], e.prototype, "m_bBackfillInProgress", void 0),
            Object(M.c)([m.y], e.prototype, "m_nProcessed", void 0),
            Object(M.c)([m.y], e.prototype, "m_nSuccesses", void 0),
            Object(M.c)([m.y], e.prototype, "m_nFailures", void 0),
            Object(M.c)([m.y], e.prototype, "m_nWarning", void 0),
            Object(M.c)([m.y], e.prototype, "m_nSkipped", void 0),
            Object(M.c)([m.h], e.prototype, "StartBackfill", null),
            Object(M.c)([m.h], e.prototype, "CompleteBackfill", null),
            Object(M.c)([m.h], e.prototype, "CloseProgress", null),
            e
          );
        })())(),
        Ma = a("vNkc"),
        xa = (function(t) {
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
            Object(M.d)(e, t),
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
                    var t = Object(ne.a)(e);
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
                Object(M.b)(this, void 0, void 0, function() {
                  var t, a;
                  return Object(M.e)(this, function(e) {
                    return (
                      (t = dt.a.GetExtensionTypeFromURL(r)),
                      (a = dt.a.GetHashFromHashAndExt(r) + o),
                      [
                        2,
                        dt.e.AsyncGetImageResolution(
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
              var r = Object(ne.a)(t),
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
                    Ba.CloseProgress(e, n))
                  : Ba.CompleteBackfill("resize_image");
            }),
            (e.prototype.HandleResizeForImageType = function(u, p, m, h, v) {
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  c,
                  a,
                  d = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = function(t) {
                        var a, n, r, o, i, l, s;
                        return Object(M.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return u[t] && 0 < u[t].length
                                ? ((a = u[t]),
                                  (n = dt.a.GetExtensionTypeFromURL(a)),
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
                                Object(ca.i)(o.width, o.height, h)
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
                                (i = dt.a.GetHashFromHashAndExt(a)),
                                (l = dt.a.GetExtensionStringFromHashAndExt(a)),
                                (s = dt.d.GetResizeDimension(h)),
                                [
                                  4,
                                  dt.b
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
                                      var t = Object(ne.a)(e);
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  i,
                  a,
                  l,
                  n,
                  s = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      Ba.StartBackfill("resize_image"), (t = 0), (e.label = 1);
                    case 1:
                      return Ba.BIsBackkFillInProgress()
                        ? [
                            4,
                            pa
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
                          Ba.CompleteBackfill("resize_image"),
                          console.log("Compelted the backfill"),
                          [3, 7]
                        );
                      (t += i.length),
                        (a = function(t) {
                          var a, n, r, o;
                          return Object(M.e)(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return (
                                  (a = i[t]),
                                  (n = Ba.CreateOrGetBackfillProgess(
                                    a.unique_id
                                  )),
                                  a.announcement_gid &&
                                  0 != a.announcement_gid.length
                                    ? [
                                        4,
                                        R.c
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
                                      Ba.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                );
                              case 1:
                                return (e.sent(), n.bFailed)
                                  ? [2, "continue"]
                                  : (r = R.c.GetClanEventFromAnnouncementGID(
                                      a.announcement_gid
                                    ))
                                  ? n.bSucceeded ||
                                    n.bFailed ||
                                    n.bAlreadyProcessed
                                    ? ((n.bAlreadyProcessed = !0),
                                      Ba.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                    : ((n.bAnalysing = !0),
                                      l.setState({
                                        strInfo:
                                          "Processing " +
                                          Ba.GetBackfillGIDs().length +
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
                                                dt.c.capsule_main
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
                                    Ba.CloseProgress(a.unique_id, n),
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
                                          dt.c.background_mini
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
                                          dt.c.spotlight_main
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
                                  Ba.CloseProgress(a.unique_id, n),
                                  Ba.BIsBackkFillInProgress()
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
                      return 5e3 < Ba.m_nFailures
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
                0 < Ba.m_nFailures &&
                  Ba.GetBackfillGIDs().forEach(function(e) {
                    var t,
                      a = Ba.GetEventBackfillProgress().get(e);
                    a &&
                      a.bFailed &&
                      ((t = R.c.GetClanEventModel(e)) &&
                        n.push(
                          B.createElement(
                            "div",
                            { key: e },
                            B.createElement(
                              Fe.c,
                              {
                                eventModel: t,
                                route: Fe.a.k_eView,
                                openNewWindow: !0
                              },
                              t.GetNameWithFallback(0)
                            ),
                            B.createElement(
                              "div",
                              { className: Ma.Error },
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
                  B.createElement(
                    "div",
                    { key: "res_capsule" },
                    "Capsule Resized: ",
                    this.m_mapArtworkResizeSuccess.get("capsule"),
                    " "
                  )
                ),
                e.push(
                  B.createElement(
                    "div",
                    { key: "res_header" },
                    "Header Resized: ",
                    this.m_mapArtworkResizeSuccess.get("background"),
                    " "
                  )
                ),
                e.push(
                  B.createElement(
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
              return B.createElement(
                "div",
                null,
                B.createElement(
                  "h2",
                  null,
                  "Partner Events Backfill Processing Page"
                ),
                null == this.state.eBackfillState &&
                  B.createElement(
                    "div",
                    null,
                    B.createElement(
                      "button",
                      { onClick: this.OnArtworkResizeBackfill },
                      "Begin Artwork Resize Backfill"
                    )
                  ),
                B.createElement(
                  "div",
                  null,
                  B.createElement(
                    "button",
                    {
                      onClick: function() {
                        return Ba.CompleteBackfill("resize_image");
                      }
                    },
                    "Stop Backfill"
                  )
                ),
                this.state.strInfo &&
                  B.createElement(
                    "div",
                    null,
                    "Processing: ",
                    this.state.strInfo
                  ),
                B.createElement(
                  "div",
                  null,
                  "Events Processed: ",
                  Ba.m_nProcessed
                ),
                B.createElement(
                  "div",
                  null,
                  "Events Succeeded: ",
                  Ba.m_nSuccesses
                ),
                B.createElement("div", null, "Events Warning: ", Ba.m_nWarning),
                B.createElement("div", null, "Events Failed: ", Ba.m_nFailures),
                B.createElement("div", null, "Events Skipped: ", Ba.m_nSkipped),
                0 < e.length &&
                  B.createElement(
                    B.Fragment,
                    null,
                    B.createElement("h2", null, "Failure Info"),
                    e
                  ),
                Boolean(t) &&
                  B.createElement(
                    "div",
                    null,
                    B.createElement("h2", null, "Resizing Actions"),
                    t
                  ),
                "started" == this.state.eBackfillState &&
                  B.createElement(ae.a, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress"
                  })
              );
            }),
            Object(M.c)([k.a], e.prototype, "OnArtworkResizeBackfill", null),
            Object(M.c)([k.a], e.prototype, "BeginArtworkResize", null),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        Ra = a("nWbB"),
        Pa = new ((function() {
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(M.e)(this, function(e) {
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
                        (a = Object(U.f)(t, "application_config"))
                          ? [3, 2]
                          : [
                              4,
                              g.a.get(
                                U.c.STORE_BASE_URL + "actions/ajaxgetdiscounts",
                                {
                                  params: Object(M.a)(Object(M.a)({}, o), {
                                    cc: U.c.COUNTRY
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
                        (r = e.sent()), console.error(Object(ne.a)(r)), [3, 4]
                      );
                    case 4:
                      return [2, []];
                  }
                });
              });
            }),
            (e.prototype.GetTopN = function(a, n) {
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgTopN
                        ? [3, 2]
                        : ((this.m_rgTopN = Object(U.f)(
                            "top_n",
                            "application_config"
                          )),
                          this.m_rgTopN
                            ? [3, 2]
                            : [
                                4,
                                Pa.GetDiscounts({
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyWishlistOnSale
                        ? [3, 2]
                        : ((this.m_rgMyWishlistOnSale = Object(U.f)(
                            "wishlist_onsale",
                            "application_config"
                          )),
                          this.m_rgMyWishlistOnSale
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  U.c.STORE_BASE_URL +
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyDLCForGamesInLibraryOnSale
                        ? [3, 2]
                        : ((this.m_rgMyDLCForGamesInLibraryOnSale = Object(U.f)(
                            "dlc_onsale",
                            "application_config"
                          )),
                          this.m_rgMyDLCForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  U.c.STORE_BASE_URL +
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMySoundtracksForGamesInLibraryOnSale
                        ? [3, 2]
                        : ((this.m_rgMySoundtracksForGamesInLibraryOnSale = Object(
                            U.f
                          )("dlc_music_onsale", "application_config")),
                          this.m_rgMySoundtracksForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  U.c.STORE_BASE_URL +
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyInteractiveRecOnSale
                        ? [3, 2]
                        : ((this.m_rgMyInteractiveRecOnSale = Object(U.f)(
                            "ir_onsale",
                            "application_config"
                          )),
                          this.m_rgMyInteractiveRecOnSale
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  U.c.STORE_BASE_URL +
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMySaleTags
                        ? [3, 2]
                        : ((this.m_rgMySaleTags = Object(U.f)(
                            "saletags",
                            "application_config"
                          )),
                          this.m_rgMySaleTags
                            ? [3, 2]
                            : [
                                4,
                                g.a.get(
                                  U.c.STORE_BASE_URL +
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyTagRecommendation
                        ? [3, 2]
                        : ((this.m_rgMyTagRecommendation = Object(U.f)(
                            "tag_recommender",
                            "application_config"
                          )),
                          this.m_rgMyTagRecommendation
                            ? [3, 2]
                            : ((t =
                                U.c.STORE_BASE_URL +
                                "saleaction/ajaxgetsaletagsrecommendation"),
                              (a = {
                                cc: U.c.COUNTRY,
                                l: U.c.LANGUAGE,
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
            (e.prototype.GetSaleGamesByFlavor = function(p, m, h, v, _, b) {
              return (
                void 0 === b && (b = 0),
                Object(M.b)(this, void 0, void 0, function() {
                  var t, a, n, r, o, i, l, s, c, d, u;
                  return Object(M.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (11 == m && (m = void 0),
                        (t = this.GetFlavorCacheKey(v, m)),
                        !(a = this.m_mapSaleGameListsByFlavor.get(t)) &&
                          ((n = "browser_" + v + (m ? "_" + m : "_*")),
                          0 <
                            (a = Object(U.f)(n, "application_config") || [])
                              .length))
                          ? (this.m_mapSaleGameListsByFlavor.set(t, a),
                            [2, a.slice(b, _)])
                          : ((r = a.length),
                            0 < (o = b + _ - r)
                              ? ((i =
                                  U.c.STORE_BASE_URL +
                                  (p
                                    ? "saleaction/ajaxpreviewsaledynamicappquery"
                                    : "saleaction/ajaxgetsaledynamicappquery")),
                                (l = {
                                  cc: U.c.COUNTRY,
                                  l: U.c.LANGUAGE,
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
                                  g.a.get(i, { params: l, withCredentials: p })
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
                          (u = d[c]), a.push(u);
                        s.data.app_info && La.a.AddAppLinks(s.data.app_info),
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
        Fa = new ((function() {
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
                ((e = Object(U.f)("points", "application_config")),
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (this.LazyInit(), this.m_bLoaded || !U.i.logged_in)
                        ? [3, 2]
                        : ((t =
                            U.c.STORE_BASE_URL +
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
              return Object(M.b)(this, void 0, void 0, function() {
                return Object(M.e)(this, function(e) {
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
            Object(M.c)([m.y], e.prototype, "m_mySummary", void 0),
            e
          );
        })())();
      window.g_SaleTokenPointStore = Fa;
      var Ha = new ((function() {
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
                (e.m_userData = Object(U.f)("doorinfo", "application_config")),
                  (e.m_salePageBackgroundOverride = Object(U.f)(
                    "doorinfobackground",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundWEBM = Object(U.f)(
                    "doorinfowebm",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundMP4 = Object(U.f)(
                    "doorinfomp4",
                    "application_config"
                  )),
                  (e.m_storyImages = Object(U.f)(
                    "storyimages",
                    "application_config"
                  )),
                  e.m_storyImages || (e.m_storyImages = new Array(4));
              }),
              (this.m_bLoadedFromConfig = !0));
          }),
          (e.prototype.LoadDoorData = function() {
            return Object(M.b)(this, void 0, void 0, function() {
              var t, a;
              return Object(M.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = U.c.STORE_BASE_URL + "saleaction/ajaxgetopendoor"),
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
            var t = G.a.GetTimeNowWithOverride();
            return (
              U.i.logged_in &&
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
              Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !U.i.logged_in ||
                        !this.m_userData ||
                        i > this.m_userData.length
                      )
                        return [2, null];
                      (t = U.c.STORE_BASE_URL + "saleaction/ajaxopendoor"),
                        (a = new FormData()).append("sessionid", U.c.SESSIONID),
                        a.append("authwgtoken", U.i.authwgtoken),
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
                              l && Fa.AddPoints(100);
                          }),
                          [2, n.data.rewards])
                        : (console.error(Object(ne.a)(n)), [3, 4]);
                    case 3:
                      return (
                        (r = e.sent()), console.error(Object(ne.a)(r)), [3, 4]
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
          Object(M.c)([m.y], e.prototype, "m_userData", void 0),
          Object(M.c)(
            [m.y],
            e.prototype,
            "m_salePageBackgroundOverride",
            void 0
          ),
          Object(M.c)([m.y], e.prototype, "m_salePageBackgroundWEBM", void 0),
          Object(M.c)([m.y], e.prototype, "m_salePageBackgroundMP4", void 0),
          Object(M.c)([m.y], e.prototype, "m_storyImages", void 0),
          Object(M.c)([m.y], e.prototype, "m_strLastDoorOpenKey", void 0),
          e
        );
      })())();
      window.g_DoorStore = Ha;
      var za = new ((function() {
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
            return Object(M.b)(this, void 0, void 0, function() {
              var t, a, n, r, o;
              return Object(M.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return null != this.m_rgRecentEvent
                      ? [3, 5]
                      : ((t = Object(U.f)(
                          "recent_events",
                          "application_config"
                        )),
                        this.ValidateStoreDefault(t)
                          ? (this.AddAllRecentEvents(t), [3, 5])
                          : [3, 1]);
                  case 1:
                    (this.m_rgRecentEvent = new Array()),
                      (a = {
                        cc: U.c.COUNTRY || "US",
                        l: U.c.LANGUAGE,
                        clan_account_id: i.clanSteamID.GetAccountID(),
                        clan_event_gid: i.GID
                      }),
                      (n =
                        U.c.STORE_BASE_URL + "saleaction/ajaxrecentsaleevents"),
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
                        R.c.RegisterClanEvents(r.data.partnerevents)),
                      [3, 5]
                    );
                  case 4:
                    return (
                      (o = e.sent()),
                      console.error(
                        "GetRecentEventsForSalesPage failed",
                        Object(ne.a)(o)
                      ),
                      [3, 5]
                    );
                  case 5:
                    return [2, this.m_rgRecentEvent];
                }
              });
            });
          }),
          Object(M.c)([m.y], e.prototype, "m_rgRecentEvent", void 0),
          Object(M.c)([m.h], e.prototype, "AddAllRecentEvents", null),
          e
        );
      })())();
      window.g_EventListSaleStore = za;
      var Ua = new ((function() {
          function e() {
            (this.m_saleExp = {}), (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var e;
              this.m_bLoadedFromConfig ||
                ((e = document.getElementById("application_config")) &&
                  (this.m_saleExp = Object(U.f)("xprmnt", e)),
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
        Wa = (function() {
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
                e = Object(U.f)("subscriptionsapps", "application_config");
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_mapMasterAppToBenefitApps.has(r)
                        ? [2, !0]
                        : [
                            4,
                            g.a.get(
                              U.c.STORE_BASE_URL +
                                "actions/ajaxresolvesubscriptions",
                              {
                                params: {
                                  master_app_id: r,
                                  cc: U.c.COUNTRY,
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
            Object(M.c)(
              [m.y],
              e.prototype,
              "m_mapMasterAppToBenefitApps",
              void 0
            ),
            e
          );
        })(),
        Va = a("qP7j"),
        Za = a.n(Va),
        Ya = new ((function() {
          function e() {}
          return (
            (e.prototype.DeleteForumTopic = function(r, o, i, l, s) {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          U.c.COMMUNITY_BASE_URL +
                          "forum/" +
                          r.GetAccountID() +
                          "/" +
                          o +
                          "/deletetopic/"),
                        null != i && "" != i && (t += i + "/"),
                        (a = new FormData()).append("sessionid", U.c.SESSIONID),
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
        qa = (function(a) {
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
            Object(M.d)(l, a),
            (l.prototype.componentDidMount = function() {
              this.props.bNoConfirmationNeeded && this.OnDelete();
            }),
            (l.prototype.OnDeleteEventSuccessCallback = function() {
              this.props.partnerEventStore.ResetModel(),
                this.state.bDeleteCommentThread
                  ? Ya.DeleteForumTopic(
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
                Object(M.a)({ dialogState: "error" }, Object(ne.a)(e))
              );
            }),
            (l.prototype.OnDeleteForumTopicFailureCallback = function(e) {
              this.setState(
                Object(M.a)(
                  { dialogState: "failed_thread_delete" },
                  Object(ne.a)(e)
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
                  var o = t.GetNameWithFallback(Object(A.f)(U.c.LANGUAGE)),
                    i = t.BIsVisibleEvent()
                      ? "#EventDisplay_AreYouSure_Visible"
                      : "#EventDisplay_AreYouSure",
                    n = Object(z.d)(i, o),
                    a = this.OnDelete;
                  t.BHasForumTopicGID() &&
                    r.push(
                      B.createElement(
                        "div",
                        {
                          key: "WantToDeleteCmtThread",
                          className: Za.a.Padding
                        },
                        B.createElement("input", {
                          type: "checkbox",
                          id: "del_cmt_post",
                          name: "del_cmt_post",
                          defaultChecked: this.state.bDeleteCommentThread,
                          onChange: this.OnChangeDeleteForum
                        }),
                        B.createElement(
                          "label",
                          { htmlFor: "del_cmt_post" },
                          Object(z.d)("#EventDisplay_DeleteEvent_Comment")
                        )
                      )
                    );
                  break;
                case "waiting":
                  (n = Object(z.d)("#EventDisplay_DeleteEvent_InProgress")),
                    r.push(B.createElement(ae.a, { key: "throbber" }));
                  break;
                case "error":
                  (n = Object(z.d)("#EventDisplay_DeleteEvent_Error")),
                    r.push(
                      B.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++l.m_uniqueError,
                          className: Za.a.ErrorStyles
                        },
                        this.state.strErrorMsg
                      )
                    );
                  break;
                case "failed_thread_delete":
                  (n = Object(z.d)(
                    "#EventDisplay_DeleteEvent_ForumTopicError"
                  )),
                    r.push(
                      B.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++l.m_uniqueError,
                          className: Za.a.ErrorStyles
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
                  (n = Object(z.d)("#EventDisplay_DeleteEvent_Success")),
                    this.props.onDeleteSuccessAndCloseDialog &&
                      (a = function() {
                        e.props.onDeleteSuccessAndCloseDialog(),
                          e.props.closeModal();
                      });
              }
              return B.createElement(
                te.c,
                {
                  strTitle: Object(z.d)("#EventDisplay_DeleteEvent"),
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
            Object(M.c)(
              [k.a],
              l.prototype,
              "OnDeleteEventSuccessCallback",
              null
            ),
            Object(M.c)(
              [k.a],
              l.prototype,
              "OnDeleteForumTopicSuccessCallback",
              null
            ),
            Object(M.c)(
              [k.a],
              l.prototype,
              "OnDeleteEventFailureCallback",
              null
            ),
            Object(M.c)(
              [k.a],
              l.prototype,
              "OnDeleteForumTopicFailureCallback",
              null
            ),
            Object(M.c)([k.a], l.prototype, "SetToWaiting", null),
            Object(M.c)([k.a], l.prototype, "OnDelete", null),
            Object(M.c)([k.a], l.prototype, "OnChangeDeleteForum", null),
            l
          );
        })(B.Component),
        Ja = a("6eA3"),
        Ka = a.n(Ja),
        Qa = (function(t) {
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
            Object(M.d)(e, t),
            (e.prototype.OnDeleteVerifyRequest = function(e) {
              Object(j.c)(
                B.createElement(qa, {
                  eventModel: this.props.eventModel,
                  onDeleteSuccessAndCloseDialog: this
                    .OnDeleteSuccessAndComplete,
                  partnerEventStore: this.props.partnerEventStore
                }),
                Object(H.o)(e)
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
                return Object(Fe.j)(n, Fe.a.k_eCommunityAdminPage);
              var i = x.a.Get().GetPartnerEventPermissions(n.clanSteamID),
                l = n.visibility_state == R.b.k_EEventStateVisible,
                s = n.visibility_state == R.b.k_EEventStateStaged;
              if (i.can_edit || i.support_user) {
                var c = [];
                if (void 0 !== this.state.nMaxSaleDayIndex)
                  for (var d = 0; d <= this.state.nMaxSaleDayIndex; ++d)
                    c.push({
                      label: Object(z.d)("#SalePage_Admin_SaleEventDay", d + 1),
                      data: d
                    });
                return B.createElement(
                  b.a,
                  null,
                  B.createElement(
                    "div",
                    { className: Ja.DisplayAdminPanel },
                    B.createElement(
                      "span",
                      { className: Ja.DisplayAdminPanel_Title },
                      Object(z.d)("#EventDisplay_Admin_Title")
                    ),
                    B.createElement(
                      "div",
                      { className: Ja.DisplayAdminPanel_ctn },
                      a,
                      a &&
                        B.createElement(
                          "span",
                          { className: Ja.DisplayAdminPanel_Spacer },
                          " "
                        ),
                      B.createElement(
                        Fe.c,
                        {
                          eventModel: n,
                          route: Fe.a.k_eCommunityEdit,
                          openNewWindow: o,
                          className: Object(P.a)($.Button, Ja.AdminButton)
                        },
                        Object(z.d)("#EventEditor_Edit")
                      ),
                      r &&
                        B.createElement(
                          "span",
                          {
                            className: $.Button + " " + Ja.AdminButton,
                            onClick: this.OnDeleteVerifyRequest
                          },
                          Object(z.d)("#EventDisplay_DeleteEvent")
                        ),
                      !l &&
                        B.createElement(
                          B.Fragment,
                          null,
                          B.createElement(
                            Fe.c,
                            {
                              eventModel: n,
                              route: Fe.a.k_eCommunityPublish,
                              openNewWindow: o,
                              className: Object(P.a)($.Button, Ja.AdminButton)
                            },
                            Object(z.d)(
                              s
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish"
                            )
                          )
                        ),
                      B.createElement(
                        Fe.c,
                        {
                          eventModel: n,
                          route: Fe.a.k_eCommunityAdminPage,
                          openNewWindow: o,
                          className: Object(P.a)($.Button, Ja.AdminButton)
                        },
                        Object(z.d)("#EventDisplay_Events")
                      ),
                      Boolean(
                        void 0 !== this.state.nMaxSaleDayIndex && 0 < c.length
                      ) &&
                        B.createElement(O.g, {
                          strDropDownClassName: $.DropDownScroll,
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
                        B.createElement(
                          Fe.c,
                          {
                            eventModel: n,
                            route: Fe.a.k_eStoreSalePage,
                            openNewWindow: o,
                            className: Object(P.a)($.Button, Ja.AdminButton)
                          },
                          Object(z.d)("#EventDisplay_SalesPage")
                        ),
                      Boolean(
                        n.jsondata.bSaleEnabled && U.i.is_support && n.GID
                      ) &&
                        B.createElement(
                          "a",
                          {
                            href:
                              (U.c.IN_CLIENT ? "steam://openurl/" : "") +
                              "https://steamstats.valve.org/sales/details/?gid=" +
                              n.GID +
                              "&clanid=" +
                              n.clanSteamID.GetAccountID(),
                            target: U.c.IN_CLIENT ? "" : "_blank",
                            className: Object(P.a)(
                              $.Button,
                              Ja.AdminButton,
                              $.ValveOnlyBackground
                            )
                          },
                          Object(z.d)("#EventDisplay_StatsPage")
                        )
                    )
                  )
                );
              }
              return B.createElement("span", null);
            }),
            Object(M.c)([k.a], e.prototype, "OnDeleteVerifyRequest", null),
            Object(M.c)([k.a], e.prototype, "OnDeleteSuccessAndComplete", null),
            Object(M.c)([k.a], e.prototype, "OnChangeVisibilityDate", null),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component);
      var Xa = a("bWts"),
        $a = a.n(Xa),
        en = a("XsxU"),
        tn = a.n(en),
        an = a("MnIK"),
        nn = a("TOXn"),
        rn = a("NKJh"),
        on = a.n(rn),
        ln = (function(t) {
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
            Object(M.d)(e, t),
            (e.prototype.PrepLoadEvents = function() {
              var e = this.props,
                t = e.partnerEventStore,
                a = e.eventModel;
              t &&
                a.BHasAnnouncementGID() &&
                this.setState({ bLoading: !0 }, this.ActualLoadEvent);
            }),
            (e.prototype.ActualLoadEvent = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r = this;
                return Object(M.e)(this, function(e) {
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
                            "EventDetails: " + Object(ne.a)(e).strErrorMsg
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
              mt.f(n);
              for (var s = 0, c = n; s < c.length; s++) {
                var d = c[s],
                  u = l.GetClanEventFromAnnouncementGID(d);
                if (
                  u &&
                  u.GID != a.GID &&
                  u.AnnouncementGID != a.AnnouncementGID &&
                  (u &&
                    u.visibility_state == R.b.k_EEventStateVisible &&
                    (e.push(
                      B.createElement(sn, {
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
                return B.createElement(ke, {
                  appid: n,
                  eventModel: t,
                  announcementGID: t.GetAnnouncementGID(),
                  closeModal: this.HideInfiniteScroller,
                  partnerEventStore: a
                });
              if (this.state.bLoading)
                return B.createElement(ae.a, {
                  position: "center",
                  size: "medium"
                });
              if (0 == this.state.events.length)
                return B.createElement("div", null);
              var r = _.a.GetStoreCapsuleInfo(n).GetAppStoreData(),
                o = E.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                );
              if (!o)
                return (
                  Object(I.a)(
                    o,
                    "PartnerEventRow - clan info (" +
                      t.clanSteamID.GetAccountID() +
                      ") is missing"
                  ),
                  null
                );
              var i = this.ConstructEventRowCapsules();
              if (0 == i.length) return B.createElement("div", null);
              var l = t.BHasAnnouncementGID();
              return B.createElement(
                "div",
                { className: tn.a.OtherEventsCtn },
                B.createElement(
                  "div",
                  { className: ee.a.EventSectionTitleCtn },
                  B.createElement(
                    "div",
                    { className: ee.a.EventSectionTitle },
                    Object(z.l)(
                      "#EventBrowse_MoreEventsTitle",
                      o.is_ogg ? r.title : o.group_name
                    ),
                    " "
                  ),
                  B.createElement(
                    "div",
                    { className: ee.a.EventSectionSpacer },
                    " "
                  ),
                  l && this.props.bViewAllShowInfiniteScroll
                    ? B.createElement(
                        "div",
                        {
                          className: ee.a.EventSectionMoreBtn,
                          onClick: this.OnViewAll
                        },
                        Object(z.d)("#EventBrowse_MoreEventsBtn")
                      )
                    : B.createElement(
                        Fe.c,
                        {
                          eventModel: t,
                          route: Fe.a.k_eViewWebSiteHub,
                          className: ee.a.EventSectionMoreBtn
                        },
                        Object(z.d)("#EventBrowse_MoreEventsBtn")
                      )
                ),
                B.createElement("div", { className: tn.a.OtherEvents }, i)
              );
            }),
            Object(M.c)([k.a], e.prototype, "PrepLoadEvents", null),
            Object(M.c)([k.a], e.prototype, "ActualLoadEvent", null),
            Object(M.c)(
              [k.a],
              e.prototype,
              "HandleTrackingWhenAdjacentLoadCompleted",
              null
            ),
            Object(M.c)([k.a], e.prototype, "OnViewAll", null),
            Object(M.c)([k.a], e.prototype, "HideInfiniteScroller", null),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        sn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.imageURLOverride,
                n = e.openNewWindow,
                r = e.appInfo,
                o = e.langOverride,
                i = e.onClick;
              if (!t)
                return B.createElement("div", {
                  className: tn.a.OtherEvents_EventCtn
                });
              var l = o || Object(A.f)(U.c.LANGUAGE),
                s =
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        l,
                        dt.c.capsule_main
                      ),
                c = t.GetNameWithFallback(l),
                d = t.GetCategoryAsString(),
                u = t.GetSummaryWithFallback(l),
                p = t.GetSubTitleWithLanguageFallback(l);
              return (
                p && (30 < p.length || 30 < c.length) && (p = void 0),
                B.createElement(
                  B.Fragment,
                  null,
                  B.createElement(
                    Fe.c,
                    {
                      className: Object(P.a)(
                        tn.a.OtherEvents_EventCtn,
                        tn.a.HoversEnabled
                      ),
                      eventModel: t,
                      route: Fe.a.k_eView,
                      openNewWindow: n,
                      onClick: i
                    },
                    B.createElement(
                      "div",
                      { className: tn.a.EventSummaryContainer },
                      B.createElement(
                        "div",
                        { className: tn.a.EventSummaryType },
                        d
                      ),
                      B.createElement(
                        "div",
                        { className: tn.a.EventSummaryText },
                        u
                      )
                    ),
                    B.createElement("div", {
                      className: tn.a.OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: "url(" + s + ")"
                      }
                    }),
                    B.createElement(
                      "div",
                      { className: tn.a.OtherEvents_ContentCtn },
                      B.createElement(
                        "div",
                        { className: tn.a.OtherEvents_MainImageCtn },
                        B.createElement("img", {
                          src: s,
                          className: tn.a.OtherEvents_MainImage
                        })
                      ),
                      B.createElement(
                        "div",
                        { className: tn.a.OtherEvents_TextCtn },
                        B.createElement(
                          "div",
                          { className: tn.a.OtherEvents_TextTitle },
                          c
                        ),
                        p &&
                          B.createElement(
                            "div",
                            { className: tn.a.OtherEvents_SubTitle },
                            p
                          ),
                        B.createElement(pt.a, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                        })
                      )
                    )
                  ),
                  r &&
                    B.createElement(
                      "span",
                      { className: tn.a.AppCapsuleCtn },
                      B.createElement(
                        wt.a,
                        {
                          strURL: U.c.STORE_BASE_URL + "app/" + r.appid,
                          type: "app",
                          id: r.appid,
                          hoverClassName: tn.a.AppCapsuleImageHover
                        },
                        B.createElement("img", {
                          className: tn.a.AppCapsuleImage,
                          src: this.props.appInfo.tiny_capsule
                        })
                      ),
                      B.createElement(
                        "span",
                        { className: tn.a.AppCapsulePrice },
                        Boolean(this.props.appInfo.discount_percent) &&
                          B.createElement(
                            "span",
                            { className: on.a.StoreSaleDiscountBox },
                            "-" + this.props.appInfo.discount_percent + "%"
                          ),
                        !this.props.appInfo.is_free &&
                          this.props.appInfo.price &&
                          B.createElement(
                            "span",
                            { className: on.a.StoreSalePriceBox },
                            this.props.appInfo.price
                          )
                      )
                    )
                )
              );
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        cn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.imageURLOverride,
                n = e.openNewWindow,
                r = e.onClick;
              if (!t)
                return B.createElement("div", {
                  className: tn.a.OtherEvents_EventCtn
                });
              var o = Object(A.f)(U.c.LANGUAGE),
                i =
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        o,
                        dt.c.capsule_main
                      ),
                l = t.GetNameWithFallback(o),
                s = t.GetCategoryAsString();
              return B.createElement(
                Fe.c,
                {
                  className:
                    tn.a.OtherEvents_EventCtn + " " + tn.a.HorizontalEvent,
                  eventModel: t,
                  route: Fe.a.k_eView,
                  openNewWindow: n,
                  onClick: r
                },
                B.createElement(
                  "div",
                  { className: tn.a.OtherEvents_ContentCtn },
                  B.createElement(
                    "div",
                    { className: tn.a.OtherEvents_MainImageCtn },
                    B.createElement("img", {
                      src: i,
                      className: tn.a.OtherEvents_MainImage
                    })
                  )
                ),
                B.createElement(
                  "div",
                  { className: tn.a.OtherEvents_TextCtn },
                  B.createElement(
                    "div",
                    { className: tn.a.HorizontalDescriptionCtn },
                    B.createElement(
                      "div",
                      { className: tn.a.HorizontalDescription },
                      s
                    ),
                    B.createElement(pt.a, {
                      bSingleLine: !0,
                      dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                    })
                  ),
                  B.createElement("div", { className: tn.a.HorizontalTitle }, l)
                )
              );
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        dn = (function() {
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
            Object(M.c)([m.y], e.prototype, "m_stats", void 0),
            Object(M.c)([m.y], e.prototype, "m_lastUpdateTime", void 0),
            e
          );
        })(),
        un = new ((function() {
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
                ((e = Object(U.f)("trackingdatasummary", "application_config")),
                this.ValidateStoreDefault(e) &&
                  this.m_mapSummaryStats.set(e.clan_account_id, new dn(e)),
                (t = Object(U.f)("trackingdataevents", "application_config")),
                this.ValidateStoreDefaultList(t) &&
                  t.forEach(function(e) {
                    var t = L.a.InitFromClanID(e.clan_account_id),
                      a = n.GetKey(t, e.event_gid);
                    n.m_mapPerEventStats.set(a, new dn(e));
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
                  this.m_mapPerEventStats.set(a, new dn(null)),
                this.m_mapPerEventStats.get(a)
              );
            }),
            (e.prototype.GetTotalStats = function(e) {
              return (
                this.LazyInit(),
                this.m_mapSummaryStats.has(e.GetAccountID()) ||
                  this.m_mapSummaryStats.set(e.GetAccountID(), new dn(null)),
                this.m_mapSummaryStats.get(e.GetAccountID())
              );
            }),
            (e.prototype.GetKey = function(e, t) {
              return e.GetAccountID() + "_" + t;
            }),
            (e.prototype.LoadStatsForEvents = function(c, d, u) {
              return Object(M.b)(this, void 0, void 0, function() {
                var n,
                  t,
                  a,
                  r,
                  o,
                  i,
                  l,
                  s = this;
                return Object(M.e)(this, function(e) {
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
                        Object(U.d)() + "actions/ajaxgetpartnereventsreport"),
                        (r = {
                          sessionid: U.c.SESSIONID,
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
                            new dn(o.data.summary)
                          ),
                            o.data.events_detail.forEach(function(e) {
                              var t = s.GetKey(c, e.event_gid);
                              s.m_mapPerEventStats.has(t)
                                ? s.m_mapPerEventStats.get(t).reset(e)
                                : s.m_mapPerEventStats.set(t, new dn(e));
                            });
                        }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = e.sent()),
                        (l = Object(ne.a)(i)),
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
            Object(M.c)([m.y], e.prototype, "m_mapPerEventStats", void 0),
            Object(M.c)([m.y], e.prototype, "m_mapSummaryStats", void 0),
            Object(M.c)([m.h], e.prototype, "LazyInit", null),
            e
          );
        })())(),
        pn = a("sGzE"),
        mn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.summary,
                a = e.bIncludeDescription;
              return 0 == t.total_read + t.total_showm
                ? null
                : B.createElement(
                    "div",
                    null,
                    B.createElement(
                      "div",
                      {
                        className: Object(P.a)(
                          pn.StatsCtnTitle,
                          a ? pn.NormalStatsMode : pn.SmallStatsMode
                        )
                      },
                      B.createElement(
                        "h1",
                        null,
                        Object(z.d)("#EventDashBoard_SummaryStats_Title")
                      ),
                      Boolean(a) &&
                        B.createElement(
                          "p",
                          null,
                          Object(z.d)("#EventDashBoard_SummaryStats_Desc"),
                          " ",
                          B.createElement(
                            "a",
                            {
                              href:
                                "https://partner.steamgames.com/doc/marketing/event_tools/stats",
                              target: "_blank"
                            },
                            Object(z.d)("#EventDashBoard_SummaryStats_Link")
                          )
                        )
                    ),
                    B.createElement(
                      "div",
                      {
                        className: Object(P.a)(
                          pn.StatsCtn,
                          a ? pn.NormalStatsMode : pn.SmallStatsMode
                        )
                      },
                      B.createElement(
                        "div",
                        { className: pn.StatsLeftSection },
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle_ctn },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)("#EventDashBoard_Location_LibraryHome")
                          )
                        ),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)(
                              "#EventDashBoard_Summary_LibraryHome_Shown"
                            )
                          ),
                          B.createElement(
                            "span",
                            null,
                            t.library_overview_shown.toLocaleString(
                              z.c.GetPreferredLocales()
                            )
                          )
                        ),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)(
                              "#EventDashBoard_Summary_LibraryHome_Read"
                            )
                          ),
                          B.createElement(
                            "span",
                            null,
                            t.library_overview_read.toLocaleString(
                              z.c.GetPreferredLocales()
                            )
                          )
                        ),
                        B.createElement("br", null),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle_ctn },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)(
                              "#EventDashBoard_Location_LibraryDetail"
                            )
                          )
                        ),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Shown"
                            )
                          ),
                          B.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_shown.toLocaleString(
                              z.c.GetPreferredLocales()
                            )
                          )
                        ),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Read"
                            )
                          ),
                          B.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_read.toLocaleString(
                              z.c.GetPreferredLocales()
                            )
                          )
                        ),
                        B.createElement("br", null),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)(
                              "#EventDashBoard_Summary_AppDetailActivity_Shown"
                            )
                          ),
                          B.createElement(
                            "span",
                            null,
                            t.app_details_activity_shown.toLocaleString(
                              z.c.GetPreferredLocales()
                            )
                          )
                        ),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)(
                              "#EventDashBoard_Summary_AppDetailActivity_Read"
                            )
                          ),
                          B.createElement(
                            "span",
                            null,
                            t.app_details_activity_read.toLocaleString(
                              z.c.GetPreferredLocales()
                            )
                          )
                        )
                      ),
                      B.createElement(
                        "div",
                        { className: pn.StatsRightSection },
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle_ctn },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)("#EventDashBoard_Location_StoreDetail")
                          )
                        ),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)(
                              "#EventDashBoard_Summary_StoreAppPage_Shown"
                            )
                          ),
                          B.createElement(
                            "span",
                            null,
                            t.store_app_page_shown.toLocaleString(
                              z.c.GetPreferredLocales()
                            )
                          )
                        ),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)(
                              "#EventDashBoard_Summary_StoreAppPage_Read"
                            )
                          ),
                          B.createElement(
                            "span",
                            null,
                            t.store_app_page_read.toLocaleString(
                              z.c.GetPreferredLocales()
                            )
                          )
                        ),
                        B.createElement("br", null),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle_ctn },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)(
                              "#EventDashBoard_Location_CommunityDetail"
                            )
                          )
                        ),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)(
                              "#EventDashBoard_Summary_Community_Shown"
                            )
                          ),
                          B.createElement(
                            "span",
                            null,
                            t.community_hub_shown.toLocaleString(
                              z.c.GetPreferredLocales()
                            )
                          )
                        ),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)(
                              "#EventDashBoard_Summary_Community_Read"
                            )
                          ),
                          B.createElement(
                            "span",
                            null,
                            t.community_hub_read.toLocaleString(
                              z.c.GetPreferredLocales()
                            )
                          )
                        ),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle_ctn },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)(
                              "#EventDashBoard_Location_NewsHubDetail"
                            )
                          )
                        ),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)("#EventDashBoard_Summary_NewsHub_Shown")
                          ),
                          B.createElement(
                            "span",
                            null,
                            t.news_hub_shown.toLocaleString(
                              z.c.GetPreferredLocales()
                            )
                          )
                        ),
                        B.createElement(
                          "div",
                          { className: pn.StatsTitle },
                          B.createElement(
                            "span",
                            null,
                            Object(z.d)("#EventDashBoard_Summary_NewsHub_Read")
                          ),
                          B.createElement(
                            "span",
                            null,
                            t.news_hub_read.toLocaleString(
                              z.c.GetPreferredLocales()
                            )
                          )
                        )
                      )
                    )
                  );
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        hn = a("ZCZY"),
        vn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.GenerateBreadCrumbs = function() {
              var t = new Array();
              return (
                this.props.crumbs.forEach(function(e) {
                  e.url.startsWith("http")
                    ? t.push(
                        B.createElement(
                          "a",
                          { key: "anchor_" + e.name, href: e.url },
                          e.name
                        )
                      )
                    : t.push(
                        B.createElement(
                          y.b,
                          { key: "link_" + e.name, to: e.url },
                          e.name
                        )
                      ),
                    t.push(
                      B.createElement("span", { key: e.name + "span" }, " > ")
                    );
                }),
                t
              );
            }),
            (t.prototype.render = function() {
              var e = this.GenerateBreadCrumbs();
              return B.createElement(
                "div",
                { className: Object(P.a)(hn.BreadContainer) },
                B.createElement("div", { className: "blockbg" }, e),
                B.createElement("div", { style: { clear: "left" } })
              );
            }),
            t
          );
        })(B.Component),
        _n = a("4sqd"),
        bn = a("5L1o"),
        gn = B.lazy(function() {
          return Promise.all([a.e(0), a.e(1), a.e(6)]).then(
            a.bind(null, "NIbt")
          );
        }),
        yn = (function(t) {
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
            Object(M.d)(e, t),
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
                return B.createElement(
                  "div",
                  { className: Ie.a.FlexCenter, style: { height: "400px" } },
                  B.createElement(ae.a, {
                    size: "medium",
                    string: Object(z.d)("#Loading")
                  })
                );
              var u = t.GetDescriptionWithFallback(a),
                p = _.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData(),
                m = Object(U.d)() == U.c.STORE_BASE_URL,
                h = E.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                ),
                v = Object(Fe.d)(
                  t,
                  m ? Fe.a.k_eStoreNewsHub : Fe.a.k_eCommunityAllNews,
                  "allowRelative",
                  h && h.vanity_url
                );
              return B.createElement(En, {
                event: t,
                lang: a,
                titleBar: d,
                body: B.createElement(
                  b.a,
                  null,
                  B.createElement(
                    "div",
                    { className: Ka.a.EventDetailTitleContainer },
                    B.createElement(vn, {
                      crumbs: [
                        {
                          name: Object(z.d)("#BreadCrumbs_AllEvents"),
                          url: Object(Fe.d)(
                            t,
                            Fe.a.k_eStoreUsersNewsHub,
                            "allowRelative"
                          )
                        },
                        {
                          name: Object(z.d)("#BreadCrumbs_GameEvents", p.title),
                          url: v
                        }
                      ]
                    }),
                    B.createElement(
                      "div",
                      { className: Ka.a.EventDetailTitle },
                      t.GetNameWithFallback(a)
                    ),
                    t.BHasSubTitle(a) &&
                      B.createElement(
                        "div",
                        { className: Ka.a.EventDetailsSubTitle },
                        t.GetSubTitle(a)
                      )
                  ),
                  t.BHasBroadcastEnabled() &&
                    B.createElement(
                      "div",
                      { className: Ka.a.EventBroadcastCtn },
                      B.createElement(
                        B.Suspense,
                        { fallback: B.createElement("div", null) },
                        B.createElement(gn, {
                          event: this.props.event,
                          bIsPreview: this.props.previewMode,
                          accountIDs: this.props.previewMode
                            ? this.props.event.jsondata.broadcast_whitelist
                            : void 0
                        })
                      )
                    ),
                  B.createElement(
                    "div",
                    { className: Ka.a.EventColumns },
                    B.createElement(
                      "div",
                      { className: Ka.a.EventDetailsDescription },
                      B.createElement(
                        b.a,
                        null,
                        t.BHasTag("steam_award_nomination_request") &&
                          B.createElement(_n.a, {
                            event: t,
                            lang: a,
                            previewMode: s
                          }),
                        t.BHasTag("steam_award_vote_request") &&
                          B.createElement(_n.b, {
                            event: t,
                            lang: a,
                            previewMode: s
                          })
                      ),
                      B.createElement(
                        b.a,
                        null,
                        B.createElement(
                          "div",
                          {
                            className: Object(P.a)(
                              "EventDetailsBody",
                              Ka.a.EventDetailsBody
                            )
                          },
                          B.createElement(nn.a, {
                            text: u || "",
                            partnerEventStore: n,
                            showErrorInfo: s,
                            event: t,
                            languageOverride: a
                          })
                        )
                      ),
                      Boolean(t.jsondata.read_more_link) &&
                        B.createElement(
                          T.a,
                          {
                            className: Object(P.a)(ee.a.Button),
                            href: t.jsondata.read_more_link
                          },
                          Object(z.d)("#EventEmail_Button_ClickForMoreDetails")
                        ),
                      B.createElement("span", { className: ee.a.Clear }),
                      B.createElement(
                        b.a,
                        null,
                        B.createElement(va.a, { appid: t.appid })
                      )
                    ),
                    B.createElement(
                      b.a,
                      null,
                      B.createElement(Sn, {
                        event: t,
                        lang: a,
                        nOverrideStartTime: o,
                        nOverrideEndTime: i
                      })
                    )
                  ),
                  B.createElement(lt.b, {
                    eventModel: t,
                    emoticonStore: r,
                    partnerEventStore: n
                  })
                ),
                postbody: B.createElement(b.a, null, l, c),
                footer: B.createElement(
                  b.a,
                  null,
                  B.createElement(
                    "div",
                    { className: Ka.a.AppSummaryCtn },
                    B.createElement(
                      "div",
                      { className: Ka.a.EventBodyPosition },
                      Boolean(
                        null != p.appid && null != p.appid && 0 != p.appid
                      ) &&
                        B.createElement(
                          "div",
                          { className: Ka.a.AppSummaryWidgetTitleCtn },
                          B.createElement(
                            "span",
                            { className: Ka.a.Title },
                            Object(z.d)("#CreatorHome_ThisGame")
                          ),
                          B.createElement(
                            "div",
                            { className: Ka.a.AppSummaryWidgetCtn },
                            B.createElement(bn.g, { id: t.appid })
                          )
                        ),
                      B.createElement(ye, {
                        appid: t.appid,
                        eventModel: t,
                        bSmallFormat: !0
                      })
                    )
                  )
                )
              });
            }),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        En = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
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
              return B.createElement(
                "div",
                {
                  className: Object(P.a)(
                    Ka.a.EventDetailsPageContainer,
                    c,
                    ee.a.PartnerEventFont,
                    s
                      ? Ka.a.DetailArtworkAgeAppropriate
                      : Ka.a.DetailArtworkAgeNotAppropriate,
                    d && Ka.a.NoTitleArtwork
                  )
                },
                n,
                B.createElement(
                  "div",
                  { className: Ka.a.EventCoverImageCtn },
                  B.createElement(
                    "div",
                    { className: Ka.a.EventCoverImageBlr },
                    B.createElement("div", {
                      className: Ka.a.EventCoverImageFuzz,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + l + ")"
                      }
                    }),
                    B.createElement("div", {
                      className: Ka.a.EventCoverImage,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + l + ")"
                      }
                    })
                  ),
                  B.createElement("div", { className: Ka.a.CoverImageGradient })
                ),
                B.createElement(
                  "div",
                  { className: Ka.a.EventBodyCtn },
                  B.createElement("div", {
                    className: Ka.a.EventBackgroundBlurCtn
                  }),
                  B.createElement(
                    "div",
                    { className: Ka.a.EventBodyPosition },
                    B.createElement(
                      "div",
                      { className: Ka.a.EventBody },
                      B.createElement("div", {
                        className: Ka.a.EventBackgroundBlur,
                        style: { backgroundImage: "url(" + l + ")" }
                      }),
                      B.createElement(b.a, null, r)
                    ),
                    Boolean(o) && B.createElement(b.a, null, o)
                  )
                ),
                Boolean(i) && B.createElement(b.a, null, i)
              );
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        Sn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
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
                  Object(I.a)(
                    i,
                    "EventDetailsRightColumn - clan info (" +
                      t.clanSteamID.GetAccountID() +
                      ") is missing"
                  ),
                  null
                );
              var l = G.a.GetTimeNowWithOverride(),
                s = n || t.GetStartTimeAndDateUnixSeconds();
              return B.createElement(
                "div",
                { className: Ka.a.EventDetailTitleDesc },
                B.createElement(
                  "div",
                  { className: Ka.a.EventDetailsSticky },
                  i.is_ogg
                    ? B.createElement(fn, { appid: i.appid })
                    : B.createElement(Cn, { clanSteamID: t.clanSteamID }),
                  B.createElement(va.b, {
                    event: t,
                    nOverrideEndTime: r,
                    nOverrideStartTime: n
                  }),
                  28 !== t.type &&
                    l < s &&
                    B.createElement(
                      "div",
                      { className: Ka.a.EventDetailTimeInfo },
                      B.createElement(st.a, {
                        eventModel: t,
                        eventGID: t.GID,
                        lang: a
                      })
                    ),
                  B.createElement(
                    "div",
                    { className: Ka.a.EventDetailUserType },
                    B.createElement(
                      "div",
                      { className: Ka.a.RightSideTitles },
                      Object(z.d)("#EventDisplay_RightColumnTitle_EventType")
                    ),
                    B.createElement(
                      "div",
                      { className: Ka.a.EventDetailsType },
                      o,
                      " "
                    )
                  ),
                  B.createElement(wn, { event: t })
                )
              );
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        fn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var t = this.props.appid;
              Object(I.a)(t && 0 != t, "Expected Appid In Game Info Section");
              var e = _.a.GetStoreCapsuleInfo(t).GetAppStoreData();
              return B.createElement(
                "div",
                { className: Ka.a.EventDetailGameCallToAction },
                B.createElement(
                  "div",
                  { className: Ka.a.RightSideTitles },
                  ca.t.some(function(e) {
                    return t === e;
                  })
                    ? Object(z.d)("#EventDisplay_RightColumnTitle_Blog")
                    : Object(z.d)("#EventDisplay_RightColumnTitle_Game")
                ),
                B.createElement(bn.f, {
                  capsule: { id: t, type: "game" },
                  bHidePriceIfOwned: !0,
                  bHideStatusBanners: !0
                }),
                B.createElement(
                  "div",
                  { className: Object(P.a)(Ka.a.GameActions) },
                  B.createElement(bn.i, {
                    info: e,
                    className: Ka.a.ActionButton
                  })
                )
              );
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        Cn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.clanSteamID,
                t = E.a.GetClanInfoByClanAccountID(e.GetAccountID());
              return t
                ? B.createElement(
                    "div",
                    { className: Ka.a.EventDetailGameCallToAction },
                    B.createElement(
                      "div",
                      { className: Ka.a.RightSideTitles },
                      t.group_name
                    ),
                    B.createElement(
                      "a",
                      { href: E.a.GetCreatorStoreURL(e) },
                      B.createElement("div", {
                        className: Ka.a.EventDetailsAvatar,
                        style: {
                          backgroundImage: "url(" + t.avatar_full_url + ")"
                        }
                      })
                    )
                  )
                : (Object(I.a)(
                    t,
                    "EventDetailsRightCreatorInfo - clan info (" +
                      e.GetAccountID() +
                      ") is missing"
                  ),
                  null);
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        On = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"],
        wn = (B.Component,
        (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_cancelSignal = g.a.CancelToken.source()), e;
          }
          return (
            Object(M.d)(e, t),
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
                      un.LoadStatsForEvents(
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
                un.GetStatsFor(e.clanSteamID, e.GID);
              return B.createElement(
                b.a,
                null,
                B.createElement(
                  "div",
                  { className: Ka.a.EditorStatsCtn },
                  B.createElement(
                    "div",
                    { className: Ka.a.EditorStatsRow },
                    B.createElement(
                      "span",
                      null,
                      Object(z.d)("#EventEditor_Comments")
                    ),
                    B.createElement(
                      "span",
                      null,
                      e.nCommentCount.toLocaleString(z.c.GetPreferredLocales())
                    )
                  ),
                  B.createElement(
                    "div",
                    { className: Ka.a.EditorStatsRow },
                    B.createElement(
                      "span",
                      null,
                      Object(z.d)("#EventEditor_UpVotes")
                    ),
                    B.createElement(
                      "span",
                      null,
                      e.nVotesUp
                        ? e.nVotesUp.toLocaleString(z.c.GetPreferredLocales())
                        : 0
                    )
                  ),
                  B.createElement(
                    "div",
                    { className: Ka.a.EditorStatsRow },
                    B.createElement(
                      "span",
                      null,
                      Object(z.d)("#EventEditor_DownVotes")
                    ),
                    B.createElement(
                      "span",
                      null,
                      e.nVotesDown
                        ? e.nVotesDown.toLocaleString(z.c.GetPreferredLocales())
                        : 0
                    )
                  )
                ),
                Boolean(t) &&
                  B.createElement(
                    "div",
                    { className: Ka.a.EditorStatsCtn },
                    Object(z.d)("#EventDashBoard_SummaryStats_Admin_Title"),
                    B.createElement(mn, { summary: t.m_stats })
                  )
              );
            }),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component)),
        Tn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.componentDidMount = function() {
              Ha.GetRawDoorData() || Ha.LoadDoorData(),
                Fa.LoadSaleTokenPoints();
            }),
            (t.prototype.render = function() {
              var e = Ha.GetRawDoorData();
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
                  B.createElement(kn, {
                    key: "envelope-" + r,
                    iDoorIndex: r,
                    strFontFamily: this.props.strFontFamily
                  })
                );
              var o = Fa.GetSaleTokenPoints().points;
              return B.createElement(
                b.a,
                null,
                B.createElement(
                  "div",
                  { className: Ka.a.LunarNewYearHeader },
                  B.createElement(
                    "div",
                    { className: Ka.a.EnvelopeArea },
                    0 <= o &&
                      B.createElement(
                        "div",
                        { className: Ka.a.TokenBalanceContainer },
                        Object(z.d)("#Lunar2020_YourBalancePrefix"),
                        B.createElement(
                          "a",
                          {
                            className: Ka.a.TokenBalance,
                            href: U.c.STORE_BASE_URL + "lunarnewyearmarket"
                          },
                          " ",
                          Object(z.d)("#Lunar2020_BalanceNumberOfTokens", o),
                          " "
                        )
                      ),
                    n
                  ),
                  !a &&
                    B.createElement(
                      "div",
                      { className: Ka.a.BottomMessage },
                      Object(z.d)("#Lunar2020_CheckBackEachDay")
                    )
                )
              );
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        In = [
          "#Lunar2020_FirstGift",
          "#Lunar2020_SecondGift",
          "#Lunar2020_ThirdGift",
          "#Lunar2020_FourthGift"
        ],
        kn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.OpenEnvelope = function(n) {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = Ha.BIsDoorOpened(this.props.iDoorIndex)),
                        (a = Object(H.o)(n)),
                        t
                          ? (Object(j.b)(
                              B.createElement(
                                An,
                                Object(M.a)({ bIsFirstOpen: !1 }, this.props)
                              ),
                              a
                            ),
                            [2])
                          : [4, Ha.OpenDoor(this.props.iDoorIndex, !0)]
                      );
                    case 1:
                      return (
                        e.sent() &&
                          Object(j.b)(
                            B.createElement(
                              An,
                              Object(M.a)({ bIsFirstOpen: !0 }, this.props)
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
              var t = Object(H.o)(e),
                a = B.createElement(
                  "a",
                  { href: U.c.HELP_BASE_URL },
                  Object(z.d)("#User_LimitedAccount_UrlInfo")
                );
              Object(j.b)(
                B.createElement(te.c, {
                  strTitle: Object(z.d)("#Lunar2020_LimitedUserDialogTitle"),
                  strDescription: Object(z.l)("#User_LimitedAccount", a),
                  bAlertDialog: !0
                }),
                t
              );
            }),
            (t.prototype.VOOnClose = function() {
              U.i.is_support && Ha.OpenDoor(this.props.iDoorIndex, !1);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.iDoorIndex,
                a = e.strFontFamily;
              Object(I.a)(
                0 <= t && t < In.length && t < Ha.GetDoorCount(),
                "Day index #" + t + " not in valid range."
              );
              for (
                var n = Object(z.d)(In[t]),
                  r = !U.i.logged_in,
                  o = Ha.BIsDoorOpened(t),
                  i = Ha.BCanUserOpenDoor(t),
                  l = !0,
                  s = 0;
                s < t;
                s++
              )
                l = l && Ha.BIsDoorOpened(s);
              var c = !o && i && l,
                d = new Date(1e3 * Ha.GetRawDoorData()[t].rtime_start),
                u = r
                  ? Object(z.d)("#Login_SignIn")
                  : o
                  ? Object(z.d)("#Lunar2020_RereadStory")
                  : c
                  ? Object(z.d)("#Lunar2020_GiftCanBeOpenedNow")
                  : i
                  ? Object(z.d)("#Lunar2020_GiftCanBeOpenedAfterThePreviousOne")
                  : Object(z.d)(
                      "#Lunar2020_GiftLockedUntilDate",
                      d.toLocaleDateString(z.c.GetPreferredLocales(), {
                        month: "numeric",
                        day: "numeric"
                      })
                    ),
                p = r
                  ? ve.a
                  : U.i.is_limited
                  ? this.ShowLimitedUserDialog
                  : o || c
                  ? this.OpenEnvelope
                  : null,
                m = Object(P.a)(
                  Ka.a.EnvelopeContainer,
                  r && Ka.a.NeedLogin,
                  o && Ka.a.Opened,
                  c && Ka.a.Unlocked,
                  !o && !c && Ka.a.Locked
                );
              return B.createElement(
                "div",
                { className: m },
                B.createElement("div", { className: Ka.a.BackingRect }),
                B.createElement(
                  "div",
                  { className: Ka.a.Envelope },
                  B.createElement(
                    "div",
                    { className: Ka.a.GiftLabel, style: { fontFamily: a } },
                    n
                  )
                ),
                B.createElement(
                  "div",
                  { className: Ka.a.OpenState, onClick: p },
                  u
                ),
                (U.i.is_support &&
                  o &&
                  ("beta" == U.c.WEB_UNIVERSE || "dev" == U.c.WEB_UNIVERSE) &&
                  B.createElement(
                    "div",
                    {
                      className: Object(P.a)(Ka.a.OpenState, Ka.a.VO),
                      onClick: this.VOOnClose
                    },
                    "(VO) Close Gift"
                  )) ||
                  null
              );
            }),
            Object(M.c)([k.a], t.prototype, "OpenEnvelope", null),
            Object(M.c)([k.a], t.prototype, "ShowLimitedUserDialog", null),
            Object(M.c)([k.a], t.prototype, "VOOnClose", null),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        jn = [
          "#Lunar2020_StoryDayOneHeader",
          "#Lunar2020_StoryDayTwoHeader",
          "#Lunar2020_StoryDayThreeHeader",
          "#Lunar2020_StoryDayFourHeader"
        ],
        Dn = [
          "#Lunar2020_StoryDayOne",
          "#Lunar2020_StoryDayTwo",
          "#Lunar2020_StoryDayThree",
          "#Lunar2020_StoryDayFour"
        ],
        An = function(e) {
          var t = B.useState(!e.bIsFirstOpen),
            a = t[0],
            n = t[1];
          B.useEffect(function() {
            return n(!0);
          }, []);
          var r =
              U.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.mp4" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            o =
              U.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.webm" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            i = e.iDoorIndex == Ha.GetDoorCount() - 1;
          return B.createElement(
            te.d,
            {
              className: Ka.a.LunarNewYearOpenEnvelopeVideoDialog,
              closeModal: e.closeModal
            },
            B.createElement(
              "div",
              { className: Ka.a.Container },
              B.createElement(
                "div",
                { className: Ka.a.Column },
                B.createElement(
                  "div",
                  { className: Ka.a.StoryHeader },
                  Object(z.d)("#Lunar2020_StoryTitle")
                ),
                B.createElement(
                  "div",
                  { className: Ka.a.StorySubHeader },
                  Object(z.d)("#Lunar2020_StorySubTitle")
                ),
                B.createElement(
                  "div",
                  { className: Ka.a.StorySubHeader },
                  Object(z.d)(jn[e.iDoorIndex])
                ),
                B.createElement(
                  "div",
                  { className: Ka.a.StoryText },
                  Object(z.d)(Dn[e.iDoorIndex])
                ),
                B.createElement(
                  "div",
                  { className: Ka.a.VideoBox },
                  B.createElement(
                    "div",
                    {
                      className: Object(P.a)(Ka.a.CoinText, a && Ka.a.Visible)
                    },
                    Object(z.d)("#Lunar2020_ReceivedNumberOfTokens", 100)
                  ),
                  B.createElement(
                    "video",
                    {
                      autoPlay: e.bIsFirstOpen,
                      muted: !0,
                      className: Ka.a.LunarNewYearOpenEnvelopeVideo
                    },
                    B.createElement("source", { src: r, type: "video/mp4" }),
                    B.createElement("source", { src: o, type: "video/webm" }),
                    Object(z.d)("#Lunar2020_ErrorLoadingVideo")
                  )
                )
              ),
              B.createElement(
                "div",
                { className: Ka.a.Column },
                B.createElement(
                  "div",
                  { className: Ka.a.StoryPicture },
                  B.createElement("img", {
                    src: Ha.GetStoryImage(e.iDoorIndex)
                  })
                ),
                !i &&
                  B.createElement(
                    "div",
                    { className: Ka.a.CheckBackText },
                    Object(z.d)("#Lunar2020_CheckBackEachDayForStory")
                  )
              )
            ),
            B.createElement(
              "div",
              { className: Ka.a.Links },
              B.createElement(
                "div",
                { className: Ka.a.MarketLink },
                B.createElement(
                  "a",
                  { href: U.c.STORE_BASE_URL + "lunarnewyearmarket" },
                  Object(z.d)("#Lunar2020_LinkFromVideoToMarket")
                )
              ),
              B.createElement(
                "div",
                { className: Ka.a.MarketLink, onClick: e.closeModal },
                Object(z.d)("#Lunar2020_LinkBackToSale")
              )
            )
          );
        },
        Ln = a("ZlHF"),
        Nn = a.n(Ln),
        Gn = a("gyoR"),
        Bn = (a("bUNj"), a("U9Ih")),
        Mn = a.n(Bn),
        xn = (function(t) {
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
            Object(M.d)(e, t),
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
                  return Object(M.b)(e, void 0, void 0, function() {
                    var t;
                    return Object(M.e)(this, function(e) {
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c, d, u, p, m, h, v, _, b;
                return Object(M.e)(this, function(e) {
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
                        [4, W.a.HintLoad()]
                      );
                    case 1:
                      e.sent(),
                        (d = !0),
                        (u = Math.max(s, g + 1)),
                        (e.label = 2);
                    case 2:
                      if (!(l.length <= g && d)) return [3, 9];
                      (p = !1),
                        n ||
                          a.visibility_state === ca.l.k_EEventStateVisible ||
                          ((m = x.a
                            .Get()
                            .GetPartnerEventPermissions(a.clanSteamID)),
                          (p = m.can_edit)),
                        (h = void 0),
                        (e.label = 3);
                    case 3:
                      return (
                        e.trys.push([3, 5, , 6]),
                        [
                          4,
                          Pa.GetSaleGamesByFlavor(
                            n || p,
                            null === (y = null == r ? void 0 : r.GetTab()) ||
                              void 0 === y
                              ? void 0
                              : y.unique_id,
                            a,
                            i,
                            u
                          )
                        ]
                      );
                    case 4:
                      return (h = e.sent()), (d = h.length >= u), [3, 6];
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
                        [4, Object(Gn.e)(l)]
                      );
                    case 7:
                      return (
                        e.sent(), (_ = new Array()), [4, Object(Gn.a)(l, !1, _)]
                      );
                    case 8:
                      return (
                        (l = e.sent()),
                        (c = _.length),
                        l.length <= g && (u += 8),
                        [3, 2]
                      );
                    case 9:
                      return (
                        (b = l.length > g || d),
                        this.setState({
                          bInitialLoadComplete: !0,
                          rgCapsules: l,
                          nVisibleRows: g,
                          nNumRequestedLastTime: u,
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
                    label: Object(z.d)("#Sale_BrowserSortOption_TopWishlisted"),
                    flavor: "topwishlisted",
                    tooltip: Object(z.d)(
                      "#Sale_BrowserSortOption_TopWishlisted_ttip"
                    )
                  },
                  {
                    label: Object(z.d)(
                      "#Sale_BrowserSortOption_TrendingWishlisted"
                    ),
                    flavor: "trendingwishlisted",
                    tooltip: Object(z.d)(
                      "#Sale_BrowserSortOption_TrendingWishlisted_ttip"
                    )
                  },
                  {
                    label: Object(z.d)("#Sale_BrowserSortOption_PlayedNowDemo"),
                    flavor: "playednowdemo",
                    tooltip: Object(z.d)(
                      "#Sale_BrowserSortOption_PlayedNowDemo_ttip"
                    )
                  },
                  {
                    label: Object(z.d)(
                      "#Sale_BrowserSortOption_PopularUpcoming"
                    ),
                    flavor: "popularcomingsoon",
                    tooltip: Object(z.d)(
                      "#Sale_BrowserSortOption_PopularUpcoming_ttip"
                    )
                  }
                ]);
              return c.a.createElement(
                "div",
                { className: Mn.a.SaleItemBrowserContainer },
                c.a.createElement(
                  Ue,
                  { className: Mn.a.SaleItemBrowserHeaderContainer },
                  c.a.createElement(
                    "div",
                    { className: Mn.a.SaleItemBrowserHeader },
                    s.map(function(e) {
                      return c.a.createElement(
                        w.a,
                        {
                          key: e.flavor,
                          toolTipContent: e.tooltip,
                          onClick: function() {
                            return t.OnFlavorLabelClick(e.flavor);
                          },
                          className: Object(P.a)(
                            Mn.a.FlavorLabel,
                            n == e.flavor && Mn.a.SelectedFlavor
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
                      { key: e.id, className: on.a.SaleItemBrowserRow },
                      c.a.createElement(bn.g, {
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
                    { className: Mn.a.EmptyResults },
                    Object(z.d)("#Sale_EmptySearchResultsOrLoadFailure")
                  ),
                (!a || i) &&
                  c.a.createElement(
                    "div",
                    {
                      className: Object(P.a)(
                        Mn.a.ShowContentsContainer,
                        !a && Mn.a.Loading
                      )
                    },
                    !a || l
                      ? c.a.createElement(ae.a, { size: "medium" })
                      : c.a.createElement(
                          "button",
                          {
                            onClick: this.ShowMoreRows,
                            className: Mn.a.ShowContentsButton
                          },
                          Object(z.d)("#Sale_ShowMore")
                        )
                  )
              );
            }),
            Object(M.c)([k.a], e.prototype, "ShowMoreRows", null),
            (e = Object(M.c)([r.a], e))
          );
        })(c.a.Component),
        Rn = a("onkS"),
        Pn = a("oVVc"),
        Fn = a("l2mU"),
        Hn = a("31dG"),
        zn = a.n(Hn);
      function Un(e, t) {
        for (var a = [], n = 0, r = e.capsules; n < r.length; n++) {
          var o = r[n];
          if ("sub" === o.type) {
            var i = Pn.b.GetPackageInfo(o.id);
            if (i) {
              if ((console.log(JSON.stringify(i)), i.renewal_time_amount === t))
                return i.packageid;
            } else a.push(o.id);
          }
        }
        0 < a.length && Pn.b.LoadPackageInfo(a);
      }
      var Wn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.OnClickPurchase = function(e) {
              W.a.AddToCart(
                e,
                this.props.sub_package_id,
                U.c.STORE_BASE_URL + "cart/addtocart",
                U.c.STORE_BASE_URL + "cart"
              );
            }),
            (t.prototype.render = function() {
              var e = Pn.b.GetPackageInfo(this.props.sub_package_id),
                t = Pn.b.GetPackageInfo(this.props.compare_package_id);
              if (!e || (!t && this.props.compare_package_id))
                return (
                  Pn.b.LoadPackageInfo([
                    this.props.sub_package_id,
                    this.props.compare_package_id
                  ]),
                  null
                );
              if (!e.formatted_final_price) return null;
              var a = e.formatted_final_price,
                n = Object(Fn.a)(e, t),
                r = [a, n || ""],
                o = z.d.apply(
                  void 0,
                  Object(M.g)([this.props.price_loc_token], r)
                ),
                i = z.d.apply(
                  void 0,
                  Object(M.g)([this.props.body_loc_token], r)
                ),
                l = z.d.apply(
                  void 0,
                  Object(M.g)(["#Sale_Subscription_Save"], r)
                ),
                s = B.createElement("div", { className: zn.a.LogoImg }),
                c = (function(e) {
                  for (var t = 0, a = e.appids; t < a.length; t++) {
                    var n = a[t];
                    if (W.a.BOwnsApp(n)) return !0;
                  }
                  return !1;
                })(e),
                d = null,
                d = W.a.BOwnsPackage(this.props.sub_package_id)
                  ? B.createElement(
                      "div",
                      {
                        className: Object(P.a)(
                          zn.a.PurchaseButton,
                          zn.a.AlreadyOwnedPackage
                        )
                      },
                      Object(z.d)("#Sale_Subscription_AlreadyOwnedPackage")
                    )
                  : c
                  ? B.createElement(
                      "div",
                      {
                        className: Object(P.a)(
                          zn.a.PurchaseButton,
                          zn.a.AlreadyOwnedApp
                        )
                      },
                      Object(z.d)("#Sale_Subscription_AlreadyOwnedApp")
                    )
                  : B.createElement(
                      "div",
                      {
                        className: Object(P.a)(
                          zn.a.PurchaseButton,
                          zn.a.UnOwned
                        ),
                        onClick: this.OnClickPurchase
                      },
                      this.props.button_text
                    );
              return B.createElement(
                "div",
                { className: zn.a.SubscriptionBlock },
                s,
                B.createElement(
                  "div",
                  { className: zn.a.PriceBlock },
                  B.createElement("span", { className: zn.a.PriceDisplay }, o),
                  Boolean(n) &&
                    B.createElement(
                      "span",
                      { className: zn.a.SavingsDisplay },
                      l
                    )
                ),
                B.createElement("div", { className: zn.a.BodyTextBlock }, i),
                d
              );
            }),
            Object(M.c)([k.a], t.prototype, "OnClickPurchase", null),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        Vn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = Un(this.props.section, 12),
                t = Un(this.props.section, 3),
                a = Un(this.props.section, 1);
              return B.createElement(
                "div",
                { className: zn.a.MainBlock },
                B.createElement(
                  "span",
                  { className: zn.a.SelectAPlan },
                  Object(z.d)("#Sale_Subscription_SelectPlan")
                ),
                B.createElement(
                  "div",
                  { className: zn.a.SubscriptionListBlock },
                  B.createElement(Wn, {
                    sub_package_id: e,
                    compare_package_id: a,
                    price_loc_token: "#Sale_Subscription_Annual_Price",
                    body_loc_token: "#Sale_Subscription_Annual_Body",
                    button_text: Object(z.d)("#Sale_Subscription_Annual_Button")
                  }),
                  B.createElement(Wn, {
                    sub_package_id: t,
                    price_loc_token: "#Sale_Subscription_Quarterly_Price",
                    body_loc_token: "#Sale_Subscription_Quarterly_Body",
                    button_text: Object(z.d)(
                      "#Sale_Subscription_Quarterly_Button"
                    )
                  }),
                  B.createElement(Wn, {
                    sub_package_id: a,
                    price_loc_token: "#Sale_Subscription_Monthly_Price",
                    body_loc_token: "#Sale_Subscription_Monthly_Body",
                    button_text: Object(z.d)(
                      "#Sale_Subscription_Monthly_Button"
                    )
                  })
                )
              );
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        Zn = a("R+8l");
      function Yn(e, t, a) {
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
      function qn(e) {
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
              : Object(z.d)(t.default_label)));
        if (!c) return null;
        var d,
          u = ((d = l),
          s
            ? Yn(
                d.tab_active_label_color,
                d.tab_active_background_gradient_top,
                d.tab_active_background_gradient_bottom
              )
            : Yn(
                d.tab_inactive_label_color,
                d.tab_inactive_background_gradient_top,
                d.tab_inactive_background_gradient_bottom
              ));
        return B.createElement(
          "div",
          {
            className: Object(P.a)(Nn.a.SaleTab, i),
            onClick: function() {
              return o(n);
            },
            style: u
          },
          B.createElement(
            "div",
            { className: Object(P.a)(Nn.a.SaleTabLabel) },
            c
          )
        );
      }
      var Jn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
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
                      (e += hr(
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
                return B.createElement(
                  "div",
                  { className: Nn.a.TabContentsElement },
                  Object(z.d)("#SalePage_Tabs_AllContents")
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
                  d = Object(z.d)("#AppType_" + c.type) + "_" + c.id;
                a.has(d) ||
                  (a.add(d),
                  (o = null),
                  (i =
                    (o =
                      "bundle" === c.type
                        ? Zn.a.GetBundleInfo(c.id)
                        : "sub" === c.type
                        ? Pn.b.GetPackageInfo(c.id)
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
                    : Object(z.d)("#Sale_TabDayIndex", c.visibility_index)),
                  t.push({ sName: i, sKey: d, sDisplay: s, nDaySortIndex: l }));
              }
              return (
                t.sort(function(e, t) {
                  return e.nDaySortIndex !== t.nDaySortIndex
                    ? e.nDaySortIndex - t.nDaySortIndex
                    : e.sName.localeCompare(t.sName);
                }),
                B.createElement(
                  B.Fragment,
                  null,
                  t.map(function(e) {
                    return B.createElement(
                      "div",
                      { key: e.sKey, className: Nn.a.TabContentsElement },
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
              return B.createElement(
                "div",
                { className: Object(P.a)(Nn.a.SaleSection), style: _r(t, a) },
                B.createElement(rr, Object(M.a)({}, this.props)),
                B.createElement(
                  "div",
                  { className: Nn.a.TabContentsContainer },
                  this.RenderTabCapsules()
                )
              );
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        Kn = (function(t) {
          function a() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { nMaxTabsPerRow: a.GetMaxTabsPerRow() }),
              (e.m_refTabLocation = B.createRef()),
              e
            );
          }
          return (
            Object(M.d)(a, t),
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
              var i = Object(P.a)(Nn.a.SaleSectionTabsTab),
                l = n.tabs.map(function(e) {
                  var t = "Tab_" + e.unique_id;
                  return B.createElement(qn, {
                    key: t,
                    section: n,
                    selected: e === o,
                    tab: e,
                    language: r,
                    classNames: Object(P.a)(
                      i,
                      e === o && Nn.a.SaleSectionTabsSelected
                    ),
                    onTabSelected: function(e) {
                      return a.OnTabSelected(n, e);
                    }
                  });
                });
              return B.createElement(
                B.Fragment,
                null,
                B.createElement("div", { ref: this.m_refTabLocation }),
                B.createElement(
                  "div",
                  {
                    className: Object(P.a)(
                      Nn.a.SaleSection,
                      Nn.a.SaleSectionTabs
                    ),
                    style: _r(n, t)
                  },
                  B.createElement(rr, Object(M.a)({}, this.props)),
                  B.createElement(
                    Ue,
                    { className: Nn.a.SaleSectionTabContainer },
                    B.createElement(
                      "div",
                      {
                        className: Object(P.a)(
                          ee.a.SaleSectionContainer,
                          Nn.a.SaleSectionTabsRow
                        )
                      },
                      l
                    )
                  )
                )
              );
            }),
            Object(M.c)([k.a], a.prototype, "OnTabSelected", null),
            a
          );
        })(B.Component),
        Qn = B.lazy(function() {
          return Promise.all([a.e(0), a.e(1), a.e(6)]).then(
            a.bind(null, "NIbt")
          );
        });
      var Xn = (function(a) {
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
            Object(M.d)(e, a),
            (e.prototype.componentDidMount = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.props.eventModel
                        ? [3, 2]
                        : ((t = U.b.CLANSTEAMID),
                          (a = U.b.ANNOUNCEMENT_GID),
                          [
                            4,
                            R.c.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
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
                        Na.a
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
                : R.c.GetClanEventFromAnnouncementGID(U.b.ANNOUNCEMENT_GID);
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
                  Ra.c.DisableAutoPlay();
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
                Ha.BHasSalePageBackgroundOverride() &&
                  ((a = Ha.GetSalePageBackgroundOverride()),
                  (n = Ha.GetSalePageBackgroundWEBM()),
                  (r = Ha.GetSalePageBackgroundMP4()));
                var o =
                    e.BHasBroadcastEnabled() &&
                    ("1688220857098505775" == e.GID ||
                      "1590261853006818581" == e.GID),
                  i = x.a.Get().GetPartnerEventPermissions(e.clanSteamID);
                return B.createElement(
                  b.a,
                  null,
                  B.createElement(
                    $n,
                    {
                      className:
                        Nn.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                      backgroundImage: a,
                      backgroundColor: e.jsondata.sale_background_color
                    },
                    Boolean(r || n) &&
                      B.createElement(
                        "div",
                        { className: Nn.a.fullscreen_bg },
                        B.createElement(
                          "video",
                          {
                            key: Ha.GetLastDoorOpen(),
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            ref: function(e) {
                              e && (e.playbackRate = 0.9);
                            },
                            className: Object(P.a)(
                              Nn.a.SaleBackground,
                              Nn.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                              "SaleBackground",
                              Nn.a.fullscreen_bg__video
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
                          B.createElement("source", {
                            src: n,
                            type: "video/webm"
                          }),
                          !U.c.IN_CLIENT &&
                            B.createElement("source", {
                              src: r,
                              type: "video/mp4"
                            })
                        )
                      ),
                    B.createElement(
                      "div",
                      { className: Nn.a.SaleHeaderContainer },
                      e.jsondata.sale_header_overlay &&
                        B.createElement(er, null),
                      e.jsondata.sale_title_overlay &&
                        B.createElement(
                          "div",
                          null,
                          B.createElement(
                            "h1",
                            {
                              style: {
                                fontFamily: br(
                                  e.jsondata.sale_font,
                                  this.props.language
                                ),
                                fontWeight: e.jsondata.sale_font_weight
                              }
                            },
                            e.GetNameWithFallback(this.props.language)
                          ),
                          B.createElement("hr", null),
                          B.createElement(
                            "div",
                            {
                              style: {
                                fontFamily: br(
                                  e.jsondata.sale_font,
                                  this.props.language
                                ),
                                fontWeight: e.jsondata.sale_font_weight
                              }
                            },
                            B.createElement(nn.a, {
                              text: e.GetDescriptionWithFallback(
                                this.props.language
                              ),
                              partnerEventStore: R.c,
                              showErrorInfo: this.props.bIsPreview,
                              event: e
                            })
                          )
                        )
                    ),
                    B.createElement(
                      "div",
                      {
                        className:
                          Nn.a.SaleOuterContainer +
                          " " +
                          Nn.a["CustomStyle_" + e.jsondata.sale_vanity_id] +
                          " SaleOuterContainer",
                        style: {
                          marginTop: e.jsondata.sale_header_offset + "px"
                        }
                      },
                      Boolean(
                        e.BHasBroadcastEnabled() &&
                          e.BSaleShowBroadcastAtTopOfPage()
                      ) &&
                        B.createElement(
                          b.a,
                          null,
                          B.createElement(
                            "div",
                            { className: Nn.a.SaleBroadcastCtn },
                            B.createElement(
                              B.Suspense,
                              { fallback: B.createElement("div", null) },
                              B.createElement(Qn, {
                                promotionName: this.props.promotionName,
                                clanid: Number(U.b.CLANACCOUNTID),
                                event: e,
                                bIsPreview: this.props.bIsPreview,
                                language: this.props.language,
                                accountIDs: this.props.bIsPreview
                                  ? e.jsondata.broadcast_whitelist
                                  : void 0,
                                bShowCapsuleArt: !0,
                                fnRenderBroadcastContext: o
                                  ? function() {
                                      return B.createElement(yr, null);
                                    }
                                  : null
                              })
                            )
                          )
                        ),
                      e.jsondata.sale_show_creator &&
                        B.createElement(
                          b.a,
                          null,
                          B.createElement(
                            "div",
                            {
                              style: {
                                width: "100%",
                                margin: "0 auto",
                                maxWidth: "940px"
                              }
                            },
                            B.createElement(_e, {
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
                      B.createElement(nr, {
                        bIsPreview: t,
                        event: e,
                        language: this.props.language,
                        promotionName: this.props.promotionName,
                        nSaleDayIndex: this.state.nSaleDayIndex
                      }),
                      e.jsondata.sale_browse_more_button &&
                        B.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "14px"
                            }
                          },
                          B.createElement(pr, {
                            text: Object(z.d)("#Sale_SeeAllSpecials"),
                            url: e.jsondata.sale_browsemore_url,
                            color: e.jsondata.sale_browsemore_color,
                            bgcolor: e.jsondata.sale_browsemore_bgcolor
                          })
                        ),
                      i.can_edit &&
                        B.createElement(Qa, {
                          eventModel: e,
                          bPreviewMode: this.props.bIsPreview,
                          useAnchors: !this.props.bIsPreview,
                          fnOnUpdateSaleDayIndex: this.OnChangeDayIndex
                        })
                    )
                  )
                );
              }
              return B.createElement(
                "div",
                { className: Ie.a.FlexCenter, style: { height: "500px" } },
                B.createElement(ae.a, {
                  size: "medium",
                  string: Object(z.d)("#Loading")
                })
              );
            }),
            Object(M.c)([k.a], e.prototype, "OnChangeDayIndex", null),
            (e = Object(M.c)([r.a], e))
          );
        })(B.Component),
        $n = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_refBackgroundPanel = B.createRef()), e;
          }
          return (
            Object(M.d)(e, t),
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
              return B.createElement(
                "div",
                {
                  className: Object(P.a)(
                    this.props.className,
                    Nn.a.SaleBackground,
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
        })(B.Component),
        er = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.componentDidMount = function() {
              a("+ZmX").Init();
            }),
            (t.prototype.render = function() {
              return B.createElement("canvas", {
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
        })(B.Component),
        tr = (function() {
          function n(e, t) {
            var a = this;
            (this.m_activeTab = null),
              (this.m_capsuleFilter = null),
              e &&
                ((this.m_activeTab = e).capsules && 0 !== e.capsules.length
                  ? ((this.m_capsuleFilter = new Set()),
                    ur(e.capsules, t).forEach(function(e) {
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
        ar = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
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
                        0 < (t = Number(Pt(n.props.location, "tab")))
                          ? e.tabs.find(function(e) {
                              return e.unique_id === t;
                            })
                          : void 0) || e.tabs[0]),
                    r.set(e, new tr(a, n.props.nSaleDayIndex)));
                }),
                r
              );
            }),
            (t.prototype.OnTabSelected = function(e, t) {
              Ft(this.props.history, "tab", String(t.unique_id));
            }),
            (t.prototype.render = function() {
              var i = this,
                e = this.props,
                l = e.event,
                s = e.language,
                c = e.promotionName,
                d = e.bIsPreview,
                u = (e.nSaleDayIndex, this.GetTabSelectionsFromURL()),
                p = !1,
                m = !1,
                h = [
                  {
                    elements: [],
                    activeTab: new tr(null, this.props.nSaleDayIndex)
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
                        !Ua.GetHideWishlist()) ||
                      ("dlc_onsale" == n.smart_section_type &&
                        !Ua.GetHideDLC()) ||
                      ("interactive_recommender_onsale" ==
                        n.smart_section_type &&
                        !Ua.GetHideIRList())) &&
                    !U.i.logged_in
                  )
                    p ||
                      ((r = B.createElement(or, {
                        section: e,
                        event: l,
                        language: s
                      })),
                      (p = !0));
                  else
                    switch (e.section_type) {
                      case "items":
                      case "events":
                      case "links":
                        r = B.createElement(
                          cr,
                          Object(M.a)({ section: e, activeTab: a }, i.props)
                        );
                        break;
                      case "broadcast":
                        l.BHasBroadcastEnabled() &&
                          !m &&
                          ((r = B.createElement(gr, {
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
                        r = B.createElement(
                          ir,
                          Object(M.a)({ section: e }, i.props)
                        );
                        break;
                      case "doors":
                        r = B.createElement(Tn, {
                          strFontFamily: br(l.jsondata.sale_font, s)
                        });
                        break;
                      case "text_section":
                        r = B.createElement(
                          lr,
                          Object(M.a)({ section: e }, i.props)
                        );
                        break;
                      case "tabs":
                        var o = u.get(e);
                        h.push({ activeTab: o, elements: [] }),
                          (r = B.createElement(
                            Kn,
                            Object(M.a)({ section: e }, i.props, {
                              activeTab: o.GetTab(),
                              onTabSelected: i.OnTabSelected
                            })
                          ));
                        break;
                      case "vo_internal":
                        if (e.internal_section_data)
                          switch (e.internal_section_data.internal_type) {
                            case "subscription_pricing":
                              r = B.createElement(
                                Vn,
                                Object(M.a)({ section: e }, i.props)
                              );
                              break;
                            case "event_schedule":
                              r = B.createElement(
                                Rn.b,
                                Object(M.a)({ section: e }, i.props, {
                                  activeTab: a
                                })
                              );
                              break;
                            case "tab_contents":
                              r = B.createElement(
                                Jn,
                                Object(M.a)({ section: e }, i.props, {
                                  tab: a.GetTab(),
                                  showReferences: !1
                                })
                              );
                              break;
                            case "tab_references":
                              r = B.createElement(
                                Jn,
                                Object(M.a)({ section: e }, i.props, {
                                  tab: a.GetTab(),
                                  showReferences: !0
                                })
                              );
                          }
                        break;
                      case "sale_item_browser":
                        r = B.createElement(
                          sr,
                          Object(M.a)({ section: e }, i.props, { activeTab: a })
                        );
                    }
                  h[h.length - 1].elements.push(
                    B.createElement(
                      b.a,
                      { key: "SaleSectionIndex_" + e.unique_id + "_" + t },
                      r
                    )
                  );
                }
              });
              var t = h.map(function(e, t) {
                return B.createElement(
                  "div",
                  {
                    key: "TabSection_" + t,
                    className: Nn.a.SaleSectionTabListContainer
                  },
                  e.elements
                );
              });
              return B.createElement(
                "div",
                { className: Nn.a.SaleSectionListContainer },
                t
              );
            }),
            Object(M.c)([k.a], t.prototype, "OnTabSelected", null),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        nr = Object(i.h)(ar);
      var rr = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language;
          if (!hr(t, n, a.clanSteamID.GetAccountID())) return null;
          var r,
            o,
            i,
            l = B.createElement(
              "div",
              {
                className: ee.a.SaleSectionHeader,
                style: ((r = t),
                (i = n),
                {
                  fontFamily: br((o = a).jsondata.sale_font, i),
                  fontWeight: o.jsondata.sale_font_weight,
                  fontSize: o.jsondata.sale_section_font_size,
                  textTransform: o.jsondata.sale_section_disable_capitalize
                    ? "initial"
                    : null,
                  color: r.label_color
                })
              },
              hr(t, n, a.clanSteamID.GetAccountID())
            );
          return (
            t.label_link &&
              (l = B.createElement(
                "a",
                {
                  href:
                    (U.c.IN_CLIENT ? "steam://openurl/" : "") +
                    mr(t.label_link),
                  target: U.c.IN_CLIENT ? void 0 : "_blank"
                },
                l
              )),
            l
          );
        },
        or = function(e) {
          var t = e.section,
            a = e.event;
          e.language;
          return B.createElement(
            "div",
            { className: Nn.a.SaleSection, style: _r(t, a) },
            B.createElement(rr, Object(M.a)({}, e)),
            B.createElement(
              "div",
              { className: Nn.a.SaleSectionLoginPrompt },
              Object(z.d)("#SalePage_LoginPrompt"),
              B.createElement(
                "button",
                { onClick: ve.a, className: Nn.a.LoginButton },
                Object(z.d)("#Login_SignIn")
              )
            )
          );
        },
        ir = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview;
          return B.createElement(
            "div",
            {
              className: Object(P.a)(Nn.a.SaleSection, $a.a.SaleSectionCtn),
              style: _r(t, a)
            },
            B.createElement(rr, Object(M.a)({}, e)),
            B.createElement(
              "div",
              { className: ee.a.SaleSectionContainer },
              B.createElement(nn.a, {
                text: a.GetDescriptionWithFallback(n),
                partnerEventStore: R.c,
                showErrorInfo: r,
                event: a
              })
            )
          );
        },
        lr = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview,
            o = "";
          return (
            t.text_section_contents &&
              (o =
                t.text_section_contents[n] || t.text_section_contents[0] || ""),
            B.createElement(
              "div",
              {
                className: Object(P.a)(Nn.a.SaleSection, $a.a.SaleSectionCtn),
                style: _r(t, a)
              },
              B.createElement(rr, Object(M.a)({}, e)),
              B.createElement(
                "div",
                { className: ee.a.SaleSectionContainer },
                B.createElement(nn.a, {
                  text: o,
                  partnerEventStore: R.c,
                  showErrorInfo: r,
                  event: a
                })
              )
            )
          );
        },
        sr = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(M.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.section,
                a = e.event;
              return B.createElement(
                an.a,
                {
                  placeholderHeight: "100vh",
                  rootMargin: "0px 0px 100% 0px",
                  mode: "LoadAndUnload",
                  className: Object(P.a)(Nn.a.SaleSection, $a.a.SaleSectionCtn),
                  style: _r(t, a)
                },
                B.createElement(rr, Object(M.a)({}, this.props)),
                B.createElement(xn, Object(M.a)({}, this.props))
              );
            }),
            (t = Object(M.c)([r.a], t))
          );
        })(B.Component),
        cr = (function(t) {
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
            Object(M.d)(e, t),
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
              return Object(M.b)(this, void 0, void 0, function() {
                var t;
                return Object(M.e)(this, function(e) {
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
                  Object(Y.a)(
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
                  Object(mt.f)(t.capsules),
                    Object(mt.f)(t.links),
                    Object(mt.f)(t.events),
                    (t.rtime32_last_modified = a.rtime32_last_modified),
                    window.sessionStorage.setItem(n, JSON.stringify(t));
                }
              }
              return t;
            }),
            (e.prototype.LoadCapsules = function(A) {
              return (
                void 0 === A && (A = 0),
                Object(M.b)(this, void 0, void 0, function() {
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
                  return Object(M.e)(this, function(e) {
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
                            : [4, W.a.HintLoad()]
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
                                return Object(M.b)(
                                  this,
                                  void 0,
                                  void 0,
                                  function() {
                                    var t, a, n, r, o, i, l, s, c, d, u;
                                    return Object(M.e)(this, function(e) {
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
                                                  Pa.GetDiscounts({
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
                                                Pa.GetDiscounts({
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
                                            : [4, Pa.GetTopN(_, i)];
                                        case 5:
                                          return [
                                            2,
                                            (l = e.sent()).map(function(e) {
                                              return { id: e, type: "game" };
                                            })
                                          ];
                                        case 6:
                                          if (!Object(ca.g)(t)) return [3, 11];
                                          e.label = 7;
                                        case 7:
                                          return (
                                            e.trys.push([7, 9, , 10]),
                                            [
                                              4,
                                              Pa.GetSaleGamesByFlavor(
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
                                          return U.i.logged_in
                                            ? [3, 12]
                                            : [2, []];
                                        case 12:
                                          return !U.i.logged_in ||
                                            ("wishlist" !== t &&
                                              "interactive_recommender" !== t)
                                            ? [3, 13]
                                            : [
                                                2,
                                                (l = b.filter(function(e) {
                                                  return (
                                                    !W.a.BOwnsApp(e) &&
                                                    (("wishlist" === t &&
                                                      W.a.BIsGameWishlisted(
                                                        e
                                                      )) ||
                                                      ("interactive_recommender" ===
                                                        t &&
                                                        W.a.BIsGameRecommended(
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
                                            !U.i.logged_in ||
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
                                          return Ua.GetHideWishlist()
                                            ? [3, 16]
                                            : [4, Pa.GetWishlistOnSale()];
                                        case 15:
                                          (l = e.sent()),
                                            (s = "game"),
                                            (e.label = 16);
                                        case 16:
                                          return [3, 29];
                                        case 17:
                                          return (
                                            (s = "dlc"),
                                            Ua.GetHideDLC()
                                              ? [3, 19]
                                              : [
                                                  4,
                                                  Pa.GetDLCForGamesInMyLibraryOnSale()
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
                                              Pa.GetSoundtracksForGamesInMyLibraryOnSale()
                                            ]
                                          );
                                        case 21:
                                          return (l = e.sent()), [3, 29];
                                        case 22:
                                          return (
                                            (s = "game"),
                                            Ua.GetHideIRList()
                                              ? [3, 24]
                                              : [
                                                  4,
                                                  Pa.GetInteractiveRecommendationsOnSale()
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
                                              Pa.GetTagRecommendorForThisSale(
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
                                              (d = Wa.Get()).LoadSubscriptionInfo(
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
                                              return W.a.BIsGameRecommended(e);
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
                                (U.c.IN_CLIENT
                                  ? "library-"
                                  : Object(U.e)() + "-") + t),
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
                          (u = ur(
                            (u = u.filter(function(e) {
                              return c.ShouldShowCapsule(e);
                            })),
                            d
                          )),
                          (m = !1),
                          (h = u.length),
                          0 < (v = this.GetRowsToShow(A)) &&
                            !s &&
                            "store" === Object(U.e)() &&
                            ((_ =
                              (function(e, t) {
                                for (var a = vr(e), n = 0, r = 0; r < t; r++)
                                  n += a[r % a.length];
                                return n;
                              })(r, v) + 4) +
                              4 <
                              h &&
                              ((h = _), (m = !0))),
                          0 < (O = Object(ca.r)(r)) &&
                            ((b = Math.max(O + 5, Math.floor(1.1 * O))),
                            (h = Math.min(h, b))),
                          u.length > h && (u = u.slice(0, h)),
                          [4, Object(Gn.e)(u)]
                        );
                      case 5:
                        return (
                          e.sent(), (g = dr(r)) ? [4, Object(Gn.d)(u)] : [3, 8]
                        );
                      case 6:
                        return (
                          (y = e.sent()),
                          0 <
                          (E = y
                            .map(function(e) {
                              var t = La.a.GetAppLinkInfo(e);
                              return t && t.full_game_appid;
                            })
                            .filter(function(e) {
                              return !!e;
                            })).length
                            ? [4, La.a.LoadAppLinkInfo(E)]
                            : [3, 8]
                        );
                      case 7:
                        e.sent(), (e.label = 8);
                      case 8:
                        return (S = new Array()), [4, Object(Gn.a)(u, g, S)];
                      case 9:
                        return (
                          (f = e.sent()),
                          (C = S.length),
                          0 < (O = Object(ca.r)(r)) &&
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
                              ? [4, za.GetRecentEventsForSalesPage(i)]
                              : [3, 13]);
                      case 11:
                        return (
                          (T = e.sent()),
                          (I = T.map(function(e) {
                            var t = new L.a(e.clan_steamid);
                            return R.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
                          R.c.LoadBatchPartnerEventsByAnnouncementGID(
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
                          La.a.LoadAppLinkInfo(
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
                              : [4, Pa.GetSaleTags()]);
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
                    var a = vr(e),
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
              var a = Object(ca.p)(t);
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
                v = vr(h),
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
                            return B.createElement(
                              "div",
                              {
                                key: r.unique_id + "_" + t.GID,
                                style: {},
                                className: tn.a.OtherEvents
                              },
                              B.createElement(ct.a, { event: t }),
                              B.createElement(sn, {
                                event: t,
                                openNewWindow: !0,
                                appInfo: La.a.GetAppLinkInfo(t.appid),
                                onClick: function(e) {
                                  x.a.Get().RecordEventRead(t, 8),
                                    Object(ha.a)(t, H.o(e)),
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
                            return B.createElement(bn.b, {
                              key: r.unique_id + "_" + t,
                              link: e,
                              language: i,
                              clanAccountID: c,
                              strClassName: Nn.a.LinkCapsule
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
                              ? B.createElement(bn.f, {
                                  key: n,
                                  capsule: e,
                                  bShowParentApp: l,
                                  bUseSubscriptionLayout: d,
                                  bUseDemoLayout: r.show_as_demos,
                                  bHidePrice: r.hide_prices
                                })
                              : B.createElement(
                                  "div",
                                  {
                                    key: n,
                                    className: Nn.a.AppSummaryWidgetCtn
                                  },
                                  B.createElement(bn.g, {
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
                  bCanShowSingleRowCapsules: vr(h).every(function(e) {
                    return 1 === e;
                  }),
                  bShowParentApp: dr(h)
                }).filter(function(e) {
                  return !!e;
                }),
                b = null;
              if (0 < _.length) {
                var g = Boolean(this.props.activeTab.GetTab()),
                  y = Object(ca.q)(h),
                  E = v[0],
                  S = h.show_as_carousel && y <= 1;
                if (S && _.length > E)
                  b = B.createElement(
                    F,
                    {
                      hideArrows: !u,
                      visibleElements: E,
                      className: Object(P.a)(
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
                  else if (0 == this.state.nShowAdditionalRows && 0 < f) {
                    for (var O = 0, w = 0; O < f; O++) {
                      if ((w += L = Math.min(v[O % v.length], p)) > _.length)
                        break;
                    }
                    f = Math.max(2, O);
                  }
                  for (
                    var T, I = new Array(), k = new Array(), j = 0, D = 0;
                    j < _.length;
                    D++
                  ) {
                    for (var A = 0; (0 == f || A < f) && j < _.length; A++) {
                      var L = Math.min(v[A % v.length], p),
                        N = Math.min(L, _.length - j);
                      k.push(
                        B.createElement(
                          "div",
                          {
                            key: "Row_" + A,
                            className: Object(P.a)(
                              ee.a.SaleSectionContainer,
                              Nn.a.SaleSectionContainer
                            ),
                            style: {
                              gridTemplateColumns:
                                1 < L
                                  ? "repeat(" + L + ", minmax(0, 1fr))"
                                  : null
                            }
                          },
                          _.slice(j, j + N)
                        )
                      ),
                        (j += N);
                    }
                    if (C) break;
                    I.push(B.createElement("div", { key: "Page_" + D }, k)),
                      (k = []);
                  }
                  b =
                    0 == I.length
                      ? ((T = i || _.length > j),
                        B.createElement(
                          B.Fragment,
                          null,
                          k,
                          T &&
                            B.createElement(
                              "div",
                              { className: Nn.a.ShowContentsContainer },
                              m
                                ? B.createElement(ae.a, { size: "small" })
                                : B.createElement(
                                    "button",
                                    {
                                      onClick: this.ShowMoreContents,
                                      className: Nn.a.ShowContentsButton
                                    },
                                    Object(z.d)("#Sale_ShowMore")
                                  )
                            )
                        ))
                      : B.createElement(
                          F,
                          {
                            hideArrows: !u,
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
                b = B.createElement(
                  "div",
                  { className: Nn.a.preview_placeholder_section },
                  Object(z.d)(
                    h.smart_section
                      ? "#Sale_SmartPlaceHolder"
                      : "#Sale_PlaceHolder"
                  )
                );
              }
              var G = h.label_link
                ? (U.c.IN_CLIENT ? "steam://openurl/" : "") + mr(h.label_link)
                : void 0;
              return B.createElement(
                an.a,
                {
                  placeholderHeight: this.EstimateComponentHeight(h),
                  rootMargin: "0px 0px 100% 0px",
                  mode: "LoadAndUnload",
                  className: Object(P.a)(
                    Nn.a.SaleSection,
                    h.show_as_carousel && Nn.a.CarouselDisplay,
                    $a.a.SaleSectionCtn
                  ),
                  style: _r(h, t)
                },
                B.createElement(
                  "div",
                  { className: Nn.a.SaleSectionTitleCtn },
                  B.createElement(rr, Object(M.a)({}, this.props)),
                  0 < l &&
                    B.createElement(
                      "div",
                      {
                        className: Nn.a.SaleSectionSubtext,
                        "data-tooltip-text": Object(z.d)(
                          "#Sale_HiddenItem_Tooltip"
                        )
                      },
                      B.createElement(
                        "a",
                        { href: U.c.STORE_BASE_URL + "account/preferences" },
                        Object(z.l)(
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
                  B.createElement(
                    "div",
                    { className: Nn.a.SaleViewAll },
                    B.createElement(
                      "a",
                      { href: G, target: U.c.IN_CLIENT ? void 0 : "_blank" },
                      Object(z.d)("#btn_live_streams_all")
                    )
                  )
              );
            }),
            Object(M.c)([k.a], e.prototype, "ShowMoreContents", null),
            Object(M.c)([k.a], e.prototype, "LoadCapsules", null),
            Object(M.c)([k.a], e.prototype, "OnResize", null),
            (e = a = Object(M.c)([r.a], e))
          );
        })(B.Component);
      function dr(e) {
        return (
          "dlc" === e.smart_section_type ||
          "dlc_onsale" === e.smart_section_type ||
          "dlc_music_onsale" === e.smart_section_type
        );
      }
      function ur(e, t) {
        return e.filter(function(e) {
          return null == e.visibility_index || e.visibility_index == t;
        });
      }
      var pr = function(e) {
        var t = e.text,
          a = e.url,
          n = e.color,
          r = e.bgcolor;
        return B.createElement(
          "a",
          {
            className: ee.a.BrowseMoreButton,
            href: mr(a),
            target: "_blank",
            style: { backgroundColor: r, color: n }
          },
          t || Object(z.d)("#Sale_BrowseMore_Text_Default")
        );
      };
      function mr(t) {
        var e = "",
          a = "";
        if (t && (0 <= t.indexOf("/") || 0 <= t.indexOf("?")))
          try {
            var n = new URL(t),
              e = n.pathname.substring(1),
              a = n.search;
            U.c.SNR &&
              (a += 0 < a.length ? "&snr=" + U.c.SNR : "?snr=" + U.c.SNR);
          } catch (e) {
            console.warn(t, e);
          }
        return U.c.STORE_BASE_URL + e + a;
      }
      function hr(e, t, a, n) {
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
        if (r) return Object(z.d)(r);
        var o =
            e.localized_label[t] ||
            e.localized_label[0] ||
            ("#Sale_default_label" === e.default_label
              ? ""
              : Object(z.d)(e.default_label)),
          i =
            e.localized_label_image &&
            (e.localized_label_image[t] || e.localized_label_image[0]);
        if (n || !i) return o;
        var l = U.c.MEDIA_CDN_COMMUNITY_URL + "images/clans/" + a + "/" + i;
        return B.createElement("img", { loading: "lazy", src: l, alt: o });
      }
      function vr(e) {
        return e.capsules_per_row_array
          ? e.capsules_per_row_array
          : e.adaptive_capsules_per_row
          ? [2, 3, 4, 3]
          : [e.capsules_per_row || 1];
      }
      function _r(e, t) {
        if (e.disable_background) return { paddingLeft: 0, paddingRight: 0 };
        var a = "";
        return (
          e.background_image &&
            (a +=
              ",url(" +
              dt.a.GenerateArtworkURLFromHashAndExtensions(
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
      function br(e, t) {
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
      var gr = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(M.d)(e, t),
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
              return B.createElement(
                b.a,
                null,
                B.createElement(
                  B.Suspense,
                  { fallback: B.createElement("div", null) },
                  B.createElement(
                    it.a,
                    { onEnter: this.OnEnter },
                    B.createElement(
                      "div",
                      { className: Nn.a.SaleBroadcastSection },
                      Boolean(this.state.bOnceVisible) &&
                        B.createElement(Qn, {
                          promotionName: i,
                          clanid: Number(U.b.CLANACCOUNTID),
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
                        B.createElement("span", null, Object(z.d)("#Loading"))
                    )
                  )
                )
              );
            }),
            Object(M.c)([k.a], e.prototype, "OnEnter", null),
            e
          );
        })(B.Component),
        yr = Object(r.a)(function(e) {
          var t = Ra.c.GetPlayReadyStream(),
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
          return B.createElement(
            "div",
            { className: Nn.a.SalePageBroadcastContextHover },
            B.createElement("img", {
              src: l,
              className: Nn.a.AlbumCoverImage,
              onClick: i
            }),
            B.createElement(
              "div",
              { className: Nn.a.AlbumTitle, onClick: i },
              " ",
              o,
              " "
            )
          );
        }),
        Er = a("BVKn"),
        Sr = Er.a.Get(),
        fr = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.state = {
                lookupGID: t.props.event_gid
                  ? t.props.event_gid
                  : Sr.GetClanEventGIDFromAnnouncementGID(
                      t.props.announcement_gid
                    )
              }),
              t
            );
          }
          return (
            Object(M.d)(e, a),
            (e.prototype.LoadEvent = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a = this;
                return Object(M.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !this.props.event_gid ||
                        Sr.GetClanEventModel(this.props.event_gid)
                      )
                        return [3, 5];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          Sr.LoadPartnerEventGeneric(
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
                        Sr.LoadPartnerEventGeneric(
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
                                Object(ne.a)(e).strErrorMsg
                            );
                          }),
                        [3, 4]
                      );
                    case 4:
                      return [3, 6];
                    case 5:
                      this.props.announcement_gid &&
                        !Sr.GetClanEventGIDFromAnnouncementGID(
                          this.props.announcement_gid
                        ) &&
                        Sr.LoadPartnerEventGeneric(
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
                                Object(ne.a)(e).strErrorMsg
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
                  Sr.GetClanEventModel(this.state.lookupGID);
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
                o = n && n.GetNameWithFallback(Object(A.f)(U.c.LANGUAGE));
              n &&
                t &&
                o &&
                ((r = Object(z.d)(
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
                t = Sr.GetClanEventModel(this.state.lookupGID);
              t &&
                ((e = Object(Fe.d)(t, Fe.a.k_eStoreNewsHub, "allowRelative")),
                this.props.history.push(e));
            }),
            (e.prototype.render = function() {
              var e = Sr.GetClanEventModel(this.state.lookupGID);
              return e
                ? this.props.bInfiniteScroll
                  ? c.a.createElement(
                      b.a,
                      null,
                      c.a.createElement(ke, {
                        classname: Ne.a.StoreHeaderAdjust,
                        appid: e.appid,
                        trackingLocation: 7,
                        announcementGID: e.GetAnnouncementGID(),
                        partnerEventStore: Sr,
                        eventModel: e,
                        showAppHeader: !0,
                        closeModal: this.InfiniteScrollCloseModal
                      })
                    )
                  : c.a.createElement(
                      b.a,
                      null,
                      c.a.createElement(yn, {
                        lang: Object(A.f)(U.c.LANGUAGE),
                        partnerEventStore: Sr,
                        event: e,
                        adminPanel: c.a.createElement(Qa, {
                          eventModel: e,
                          partnerEventStore: Sr
                        }),
                        otherEventRow: c.a.createElement(ln, {
                          appid: e.appid,
                          eventModel: e,
                          partnerEventStore: Sr
                        })
                      })
                    )
                : c.a.createElement(ae.a, null);
            }),
            Object(M.c)([k.a], e.prototype, "InfiniteScrollCloseModal", null),
            (e = Object(M.c)([r.a], e))
          );
        })(c.a.Component),
        Cr = Object(i.h)(fr),
        Or = a("WBba"),
        wr = a("r+ba"),
        Tr = a("apHd"),
        Ir = (function(n) {
          function e(e) {
            var a = n.call(this, e) || this;
            a.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: []
            };
            var t = Object(Tr.a)("EventWebRowEmbed");
            return (
              a.ValidateStoreDefault(t) &&
                ((a.state.bPreLoaded = t.bPreLoaded),
                (a.state.announcementGIDList = t.announcementGIDList),
                (a.state.events = []),
                a.state.announcementGIDList.forEach(function(e) {
                  var t = R.c.GetClanEventFromAnnouncementGID(e);
                  t && a.state.events.push(t);
                })),
              a
            );
          }
          return (
            Object(M.d)(e, n),
            (e.prototype.componentDidMount = function() {
              return Object(M.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o,
                  i,
                  l,
                  s = this;
                return Object(M.e)(this, function(e) {
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
                  { className: Ie.a.FlexCenter },
                  c.a.createElement(ae.a, {
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
                  c.a.createElement(ke, {
                    classname: wr.StoreHeaderAdjust,
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
                  Object(z.d)("#EventBrowse_RecentEvents")
                ),
                c.a.createElement(
                  "div",
                  { className: wr.SectionButtonCtn },
                  this.props.bViewAllShowInfiniteScroll
                    ? c.a.createElement(
                        "div",
                        {
                          className: wr.SectionButton,
                          onClick: function() {
                            return a.ShowModal(n[0]);
                          }
                        },
                        Object(z.d)("#EventBrowse_MoreEventsBtn")
                      )
                    : c.a.createElement(
                        Fe.c,
                        {
                          eventModel: n[0],
                          route: Fe.a.k_eViewWebSiteHub,
                          className: wr.SectionButton
                        },
                        Object(z.d)("#EventBrowse_MoreEventsBtn")
                      )
                ),
                c.a.createElement(
                  "div",
                  { className: wr.EventsSummariesCtn },
                  n.slice(0, e).map(function(t) {
                    var e =
                      1 === n.length && 500 < window.screen.width ? cn : sn;
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
            Object(M.c)([k.a], e.prototype, "ShowModal", null),
            Object(M.c)([k.a], e.prototype, "CloseModal", null),
            e
          );
        })(c.a.Component),
        kr = (function(r) {
          function e(e) {
            var t = r.call(this, e) || this;
            t.m_rtimeOldest = 0;
            var a = G.a.GetTimeNowWithOverrideAsDate(),
              n = new Date(a.setUTCHours(0, 0, 0, 0) - 15552e6);
            return (t.m_rtimeOldest = Math.floor(n.getTime() / 1e3)), t;
          }
          return (
            Object(M.d)(e, r),
            (e.prototype.render = function() {
              var e = this.props.appid;
              return c.a.createElement(Ir, {
                appid: e,
                partnerEventStore: Er.a.Get(),
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
      u.a.Init(new Or.a(U.c.WEBAPI_BASE_URL)), R.c.Init();
      function jr(e) {
        var t = e.children,
          a = Object(B.useState)(x.a.IsInitialized()),
          n = a[0],
          r = a[1];
        return n
          ? c.a.createElement(c.a.Fragment, null, t)
          : (x.a.InitGlobal().then(function() {
              return r(!0);
            }),
            null);
      }
      function Dr(t) {
        return function(e) {
          return c.a.createElement(jr, null, c.a.createElement(t, e));
        };
      }
      var Ar = Dr(fa),
        Lr = Dr(xa),
        Nr = Dr(Xn),
        Gr = Dr(ea),
        Br = Dr(Cr),
        Mr = Dr(kr),
        xr = Dr(Ga);
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

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
        j = a.n(n);
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
            var t = j.a.TAU,
              a = ZdogSpookyHouse.color.light,
              n = new j.a.Shape({
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
                a = j.a.TAU,
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
              new j.a.Shape({
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
                grill: new j.a.Vector({ x: -5, y: -1, z: c }),
                hood: new j.a.Vector({ x: -4, y: l, z: c }),
                wipers: new j.a.Vector({ x: -2, y: l, z: c }),
                windshield: new j.a.Vector({ x: -1, y: -4.5, z: 1.5 }),
                roof: new j.a.Vector({ x: 2, y: -4.5, z: 1.5 }),
                trunk: new j.a.Vector({ x: 4, y: l, z: c }),
                bumper: new j.a.Vector({ x: 5, y: -1, z: c })
              },
              p = {};
            for (var u in d) {
              var m = d[u];
              p[u] = m.copy().multiply({ z: -1 });
            }
            var h = new j.a.Anchor({ addTo: e.addTo }),
              v = new j.a.Group({
                addTo: h,
                translate: { z: 120, y: -6 },
                scale: 1.2,
                updateSort: !0
              }),
              _ = new j.a.Shape({
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
            var g = new j.a.Vector({ x: -3.5, z: c, y: -1 }),
              y = new j.a.Ellipse({
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
                  (h.rotate.y = j.a.easeInOut((e / 4) % 1) * a + (3 * a) / 8),
                    (v.rotate.x = 0.1 * Math.sin(e * a * 2)),
                    (v.translate.y = 2 * Math.sin(e * a * 1.5) - 6);
                }
              }
            );
          }),
          (ZdogSpookyHouse.addCats = function(e) {
            var t = j.a.TAU,
              a = ZdogSpookyHouse.color,
              n = 1.1,
              r = new j.a.Anchor({
                addTo: e.addTo,
                translate: { z: -22, x: -28, y: -2 },
                scale: n,
                rotate: { y: t / 8 }
              });
            new j.a.Cone({
              addTo: r,
              diameter: 1,
              length: 3,
              rotate: { x: t / 4 },
              stroke: 4.4,
              color: a.deep
            });
            var o = new j.a.Shape({
              addTo: r,
              translate: { y: -4 },
              stroke: 5.5,
              color: a.deep
            });
            new j.a.Shape({
              addTo: o,
              translate: { x: -1, z: 1 },
              stroke: 0.9 * n,
              color: a.highlight
            }).copy({ translate: { x: 1, z: 1 } });
            var i = { x: -1, y: -1 },
              s = { x: 1, y: 1, z: -1 },
              l = new j.a.Anchor({
                addTo: o,
                scale: new j.a.Vector({ x: 1, y: 1, z: 1.25 })
              });
            new j.a.Shape({
              addTo: l,
              path: [{ x: -1, y: 1 }, i, s],
              translate: { x: -0.96, y: -1.5, z: 0 },
              stroke: 0.66,
              fill: !0,
              color: a.deep
            }).copy({ path: [i, { x: 1, y: 1 }, s] }),
              l.copyGraph({ scale: l.scale.copy().multiply({ x: -1 }) }),
              new j.a.Shape({
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
              var t = j.a.TAU,
                a = ZdogSpookyHouse.color,
                r = new j.a.Anchor(e),
                o = (4 * t) / 8,
                i = [],
                n = 0;
              n < 74;
              n++
            ) {
              var s = n / 74,
                l = s * o,
                c = new j.a.Shape({
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
              new j.a.Shape({
                addTo: i[0],
                translate: { x: -10, z: 8 },
                color: a.deep,
                stroke: 3.5
              }).copy({ translate: { x: -10, z: -8 } }),
              new j.a.Ellipse({
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
            var i = j.a.TAU,
              s = ZdogSpookyHouse.color,
              l = [],
              c = [];
            function t(e) {
              l.push(e);
            }
            function a(e) {
              c.push(e);
            }
            var n = new j.a.Anchor({
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
              d = new j.a.Group({ addTo: n, translate: { z: 24 } });
            a(new j.a.Rect(Object.assign({}, o, { addTo: d }))),
              new j.a.Rect({
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
              m = new j.a.Rect(
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
            var v = new j.a.Anchor({ addTo: n, translate: { y: -36, z: 18 } }),
              _ = new j.a.Shape({
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
              new j.a.Rect({
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
              g = new j.a.Shape({
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
            new j.a.Shape({
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
              new j.a.Rect({
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
              new j.a.Rect({
                addTo: n,
                width: 12,
                height: 6,
                translate: { x: 0, y: -33, z: -12 },
                rotate: { y: i / 4 },
                stroke: e.stroke,
                fill: !0,
                color: s.medium
              }),
              new j.a.Shape({
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
              new j.a.Rect({
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
            var E = new j.a.Anchor({
                addTo: n,
                translate: { x: 18, y: -18, z: -12 }
              }),
              S = new j.a.Group({ addTo: E });
            new j.a.Cylinder({
              addTo: S,
              diameter: 12,
              length: 24,
              color: s.medium,
              backface: s.deep,
              rotate: { x: i / 4 },
              stroke: !1
            }),
              new j.a.Cone({
                addTo: E,
                diameter: 16,
                length: 16,
                translate: { y: -12 },
                rotate: { x: i / 4 },
                color: s.deep,
                stroke: !1
              }),
              new j.a.Rect({
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
            var f = new j.a.Shape({
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
            var C = new j.a.Shape({
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
            C.copy({
              rotate: { y: -i / 4 },
              translate: { x: 20, y: -24, z: -3 },
              color: s.deep
            }),
              C.copy({
                rotate: { y: -i / 2 },
                translate: { x: 9, y: -24, z: -14 },
                color: s.deep
              }),
              C.copy({
                rotate: { y: -i / 2 },
                translate: { x: 3, y: -24, z: -14 },
                color: s.deep
              });
            var O = new j.a.Anchor({ addTo: n, translate: { y: -30 } }),
              I = new j.a.Rect({
                addTo: O,
                width: 12,
                height: 10,
                rotate: { x: -i / 4 },
                translate: { z: 5 },
                stroke: e.stroke,
                fill: !0,
                color: s.dark
              });
            I.copy({ width: 10, translate: { x: 11, z: 5 } }),
              I.copy({ width: 10, translate: { x: 11, z: -5 } }),
              I.copy({ translate: { x: -12, z: 5 } }),
              I.copy({ width: 4, translate: { x: -20, z: 5 } }),
              I.copy({ width: 6, translate: { x: 3, z: -5 } }),
              I.copy({ height: 6, translate: { x: -6, z: -3 } });
            var T = new j.a.Anchor({ addTo: n, translate: { y: 2 } }),
              w = new j.a.Anchor({ addTo: T, translate: { x: 9, z: 30 } });
            new j.a.Shape({
              addTo: w,
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
            var D = new j.a.Rect({
              addTo: w,
              width: 6,
              height: 10,
              translate: { y: -1 },
              stroke: 1,
              color: s.deep
            });
            D.copy({ height: 4, translate: { y: 2 } }),
              D.copy({ width: 2, height: 4, translate: { y: 2 } }),
              w.copyGraph({ translate: { x: 15, z: 30 } }),
              w.copyGraph({ translate: { x: 21, z: 30 } }),
              w.copyGraph({ translate: { x: -9, z: 30 } });
            var k = w.copyGraph({
              translate: { x: 24, z: 27 },
              rotate: { y: -i / 4 }
            });
            k.copyGraph({ translate: { x: 24, z: 21 } }),
              k.copyGraph({ translate: { x: 24, z: 15 } }),
              k.copyGraph({ translate: { x: 24, z: 9 } }),
              k.copyGraph({ translate: { x: 24, z: 3 } }),
              w
                .copyGraph({
                  translate: { x: -12, z: 27 },
                  rotate: { y: i / 4 }
                })
                .copyGraph({ translate: { x: -12, z: 21 } });
            var A = new j.a.Shape({
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
              A.copy({
                path: [
                  { x: 24, y: 2 },
                  { x: 6, y: 2 },
                  { x: 6, y: 0, z: -6 },
                  { x: 18, y: 0, z: -6 }
                ]
              }),
              A.copy({
                path: [
                  { x: 18, y: 0, z: -6 },
                  { x: 24, y: 2 },
                  { x: 24, y: 2, z: -18 },
                  { x: 18, y: 0, z: -18 }
                ],
                color: s.deep
              }),
              A.copy({
                path: [
                  { x: 24, y: 2, z: -18 },
                  { x: 18, y: 0, z: -18 },
                  { x: 18, y: 0, z: -30 },
                  { x: 24, y: 2, z: -30 }
                ],
                color: s.deep
              }),
              A.copy({
                path: [
                  { x: -6, y: 0, z: -6 },
                  { x: -12, y: 2 },
                  { x: -12, y: 2, z: -12 },
                  { x: -6, y: 0, z: -12 }
                ]
              }),
              new j.a.Rect({
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
              a = j.a.TAU,
              n = [{ y: 0 }, { y: 1 }],
              r = new j.a.Anchor({
                addTo: e.addTo,
                translate: e.translate,
                rotate: e.rotate
              }),
              o = t.medium,
              i = new j.a.Anchor({ addTo: r, rotate: { z: 0.1 } });
            new j.a.Rect({
              addTo: i,
              width: 9,
              height: 4,
              rotate: { x: a / 4 },
              fill: !0,
              color: o,
              stroke: 1.5
            });
            var s = new j.a.Shape({
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
            var l = new j.a.Anchor({ addTo: i, translate: { y: -8 } }),
              c = new j.a.Group({ addTo: l, rotate: { y: a / 2 } }),
              d = new j.a.Rect({
                addTo: c,
                width: 10,
                height: 5,
                color: t.deep,
                fill: !0,
                stroke: 1.5
              });
            new j.a.Rect({
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
              new j.a.Shape({
                addTo: l,
                path: n,
                scale: 2,
                translate: { y: 3.1 },
                stroke: 1.5,
                color: t.deep
              });
            var p = new j.a.Anchor({
              addTo: r,
              translate: { z: -15 },
              rotate: { z: -0.1 }
            });
            new j.a.Rect({
              addTo: p,
              width: 3,
              height: 3,
              rotate: { x: a / 4 },
              fill: !0,
              stroke: 1.5,
              color: o
            }),
              new j.a.Shape({
                addTo: p,
                path: n,
                scale: 3,
                stroke: 1.5,
                color: o
              });
            var u = new j.a.Shape({
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
              new j.a.Rect({
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
              h = new j.a.Anchor({
                addTo: r,
                translate: { z: -13, y: -6 },
                scale: 0.6
              }),
              v = new j.a.Shape({
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
            new j.a.Shape({
              addTo: v,
              path: n,
              scale: -1,
              translate: { y: -5.5 },
              stroke: 2.5,
              color: m
            });
            var _ = new j.a.Shape({
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
            var b = new j.a.Shape({
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
            j.a.extend(e, {
              rotate: { x: j.a.TAU / 4 },
              stroke: !1,
              color: ZdogSpookyHouse.color.deep
            });
            var t = new j.a.Cone(e);
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
            var t = j.a.TAU,
              a = ZdogSpookyHouse.color,
              n = new j.a.Anchor({ addTo: e.addTo, translate: e.translate });
            ZdogSpookyHouse.getPyramid({
              addTo: n,
              scale: { x: 9, y: -9, z: 9 },
              color: a.deep,
              snub: e.snub
            }),
              new j.a.Rect({
                width: 18,
                height: 18,
                addTo: n,
                rotate: { x: t / 4 },
                color: a.dark,
                stroke: 4,
                fill: !0
              });
            var r = new j.a.Rect({
              addTo: n,
              width: 4,
              height: 4,
              translate: { x: -4, y: -6 },
              rotate: { y: t / 4 },
              stroke: 3,
              color: a.medium
            });
            return (
              new j.a.Ellipse({
                addTo: r,
                diameter: 4,
                translate: { y: -2 },
                stroke: 3,
                color: a.medium
              }),
              n
            );
          }),
          (r = j.a.TAU),
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
            j.a.extend(e, {
              path: [{ y: 0 }, { y: t - 26 }],
              stroke: 0.5,
              color: o.deep
            });
            var a = new j.a.Shape(e),
              n = new j.a.Anchor({
                addTo: a,
                translate: { y: t - 14 },
                rotate: { y: -r / 8 }
              });
            return (
              new j.a.Shape({
                addTo: n,
                path: i,
                closed: !1,
                stroke: 0.6,
                color: o.deep
              }).copyGraph({ rotate: { y: r / 4 } }),
              a
            );
          }),
          (s = j.a.TAU),
          (e = Math.sqrt(2)),
          (l = [{ x: -1 }, { x: 1 }, { y: -e }]),
          (c = [
            { x: -1 },
            { x: 1 },
            { x: 0.5, y: -0.5 * e },
            { x: -0.5, y: -0.5 * e }
          ]),
          (ZdogSpookyHouse.getPyramid = function(e) {
            var t = new j.a.Anchor({
                addTo: e.addTo,
                translate: e.translate,
                scale: e.scale,
                rotate: e.rotate
              }),
              a = e.stroke || 4,
              n = new j.a.Anchor({ addTo: t });
            return (
              new j.a.Shape({
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
                new j.a.Rect({
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
                    var e = new j.a.Group(a.wall),
                      t = d.reduce(function(e, t) {
                        return (e[t] = a.wall[t]), e;
                      }, {});
                    t.addTo = e;
                    var n = new j.a.Rect(t);
                    return (
                      a.wallRectCallback && a.wallRectCallback(n),
                      new j.a.Rect({
                        addTo: e,
                        width: 8,
                        height: 6,
                        translate: { y: -1 },
                        color: ZdogSpookyHouse.color.dark,
                        fill: !0,
                        stroke: !1,
                        backface: !1
                      }),
                      new j.a.Rect({
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
                : ((t = new j.a.Rect(e.wall)),
                  e.wallRectCallback && e.wallRectCallback(t)),
              t
            );
          }),
          (ZdogSpookyHouse.init = function(e) {
            var r = j.a.TAU,
              t = ZdogSpookyHouse.color,
              a = Math.floor(e.width / 135) / 2,
              o = new j.a.Illustration({
                element: e,
                zoom: a,
                rotate: { y: r / 8 },
                dragRotate: !0,
                onDragStart: function() {
                  ZdogSpookyHouse.wobbling = !1;
                }
              }),
              n = new j.a.Anchor({
                addTo: o,
                translate: { y: ZdogSpookyHouse.sceneY }
              }),
              i = new j.a.Anchor({ addTo: n });
            new j.a.Rect({
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
            var s = new j.a.Anchor({
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
            var l = new j.a.Group({
                addTo: n,
                translate: { x: 18, z: 80 },
                scale: ZdogSpookyHouse.hillScale,
                updateSort: !0
              }),
              c = new j.a.Anchor({ addTo: l, scale: { x: 24, y: 32, z: 24 } });
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
              u = new j.a.Group({
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
            var m = new j.a.Group({
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
            var h = new j.a.Group({
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
            var b = new j.a.Anchor({
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
              y = new j.a.Anchor({ addTo: n, translate: { y: -94 } }),
              E = new j.a.Shape({
                addTo: y,
                translate: { z: -64 },
                stroke: 32,
                scale: 2,
                color: g
              });
            new j.a.Shape({
              addTo: E,
              translate: { x: -9, y: 4, z: 4 },
              stroke: 16,
              color: g
            }).copy({ translate: { x: 9, y: 5, z: 6 }, stroke: 20 });
            var S = new j.a.RoundedRect({
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
            var f = new j.a.Anchor({ addTo: n, translate: { y: -60 } }),
              C = new j.a.Anchor({ addTo: f, translate: { z: 88 } });
            new j.a.Hemisphere({
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
            var I = ZdogSpookyHouse.addInteriorScene({
                addTo: O.shape,
                translate: { z: 6 }
              }),
              T = ZdogSpookyHouse.addFogMonster({
                addTo: n,
                translate: { y: 12 }
              }),
              w = ZdogSpookyHouse.addCarRoad({ addTo: n }),
              D = 0,
              k = 300;
            !(function e() {
              var t = D / k;
              if (ZdogSpookyHouse.wobbling & (t <= 2)) {
                var a = j.a.easeInOut(t % 1) * r,
                  n = (-3 * r) / 64;
                (o.rotate.y = Math.sin(a) * n + r / 8),
                  (o.rotate.x = (-0.5 * Math.cos(a) + 0.5) * n);
              }
              o.normalizeRotate(),
                T.animate(t),
                w.animate(t),
                O.animate(t, o.rotate),
                I.animate(t),
                (y.rotate.y = (t * r) / 12),
                (f.rotate.y = (t * r) / 16),
                (i.translate.y = 4 * Math.sin((t / 4) * r)),
                (m.translate.y = -4 * Math.sin((t / 1.5) * r)),
                (h.translate.y = -4 * Math.sin((t / 2.5) * r)),
                (u.translate.y = 4 * Math.sin((t / 3) * r)),
                (l.translate.y = 4 * Math.sin((t / 2) * r)),
                D++,
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
        carouselBtnImg: "carousel_carouselBtnImg_2uouo",
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
      var j = a("q1tI"),
        l = a.n(j),
        k = a("mrSG"),
        n = a("vDqi"),
        _ = a.n(n),
        m = a("2vnA"),
        r = a("TyAF"),
        o = a("Gp1o"),
        i = a("s4NR"),
        s = a.n(i),
        c = a("Ty5D"),
        O = a("kLLr"),
        b = a("ir+G"),
        g = a("TQGK"),
        I = a("wd/R"),
        d = a.n(I),
        A = a("9w6b"),
        T = a("6oCP"),
        h = a("r64O"),
        L = a("TLQK"),
        y = a("bDQf"),
        G = a("lkRc"),
        E = a("KEpR"),
        p = a("5bld"),
        S = new ((function() {
          function e() {
            (this.m_mapBlockedAppIds = new Map()),
              (this.m_mapBlockedClanIds = new Map()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.GetMutedSourceCount = function() {
              return (
                this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size
              );
            }),
            (e.prototype.LazyInit = function() {
              var t = this;
              if (!this.m_bLoadedFromConfig) {
                var e = Object(G.f)("mutedcomminfo", "application_config");
                this.ValidateStoreDefault(e) &&
                  (("dev" != G.c.WEB_UNIVERSE && "beta" != G.c.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: CMutedCommunicationStore loading bundles payload: " +
                        JSON.stringify(e)
                    ),
                  e.appids &&
                    e.appids.forEach(function(e) {
                      return t.m_mapBlockedAppIds.set(e, !0);
                    }),
                  e.clanids &&
                    e.clanids.forEach(function(e) {
                      return t.m_mapBlockedClanIds.set(e, !0);
                    })),
                  (this.m_bLoadedFromConfig = !0);
              }
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              var t = e;
              return (
                !(!t || "object" != typeof t) &&
                ((Array.isArray(t.appids) && 0 < t.appids.length) ||
                  (Array.isArray(t.clanids) && 0 < t.clanids.length))
              );
            }),
            (e.prototype.BIsEventBlocked = function(e) {
              return (
                this.LazyInit(),
                e.appid
                  ? this.m_mapBlockedAppIds.has(e.appid)
                  : !!e.clanInfo &&
                    this.m_mapBlockedClanIds.has(e.clanInfo.clanid)
              );
            }),
            (e.prototype.BIsMutedAppID = function(e) {
              return this.LazyInit(), this.m_mapBlockedAppIds.has(e);
            }),
            (e.prototype.BIsMutedClanID = function(e) {
              return this.LazyInit(), this.m_mapBlockedClanIds.has(e);
            }),
            (e.prototype.UpdateCommunitionSetting = function(r, o, i) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        (this.LazyInit(),
                        (t =
                          G.c.STORE_BASE_URL +
                          "account/optoutappcommunication/"),
                        (a = new FormData()).append("sessionid", G.c.SESSIONID),
                        a.append("allowCommunication", r ? "1" : "0"),
                        o)
                      ) {
                        if (
                          (!r && this.m_mapBlockedAppIds.has(o)) ||
                          (r && !this.m_mapBlockedAppIds.has(o))
                        )
                          return [2, !0];
                        r
                          ? this.m_mapBlockedAppIds.delete(o)
                          : this.m_mapBlockedAppIds.set(o, !0),
                          a.append("appId", o.toString());
                      } else {
                        if (!i)
                          return (
                            Object(h.a)(
                              !1,
                              "BlockEventsFromCalenderEvent: Invalid AppID and ClanID"
                            ),
                            [2, !1]
                          );
                        if (
                          (!r && this.m_mapBlockedClanIds.has(i)) ||
                          (r && !this.m_mapBlockedClanIds.has(i))
                        )
                          return [2, !0];
                        r
                          ? this.m_mapBlockedClanIds.delete(i)
                          : this.m_mapBlockedClanIds.set(i, !0),
                          a.append("clanId", i.toString());
                      }
                      e.label = 1;
                    case 1:
                      return e.trys.push([1, 3, , 4]), [4, _.a.post(t, a)];
                    case 2:
                      return [2, 1 == e.sent().data.success];
                    case 3:
                      return (
                        (n = e.sent()),
                        console.error(
                          "Blocking app id hit error " + Object(y.a)(n)
                        ),
                        [2, !1]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            e
          );
        })())();
      window.g_MutedCommunicationStore = S;
      var u = a("O0NR"),
        w = a("ee7K"),
        N = a("5izx");
      function D(e, t, a, n) {
        return {
          strId: "section-" + t,
          strSectionLabel: t,
          rtSectionStart: a,
          rtSectionEnd: n,
          bIsFutureSection: e <= a,
          nRenderedHeight: 3e3
        };
      }
      var v = (function() {
          function e(e) {
            (this.m_nForwardStuckCount = 0),
              (this.m_nBackwardStuckCount = 0),
              (this.m_mapCalendarAppsByID = new Map()),
              (this.m_mapCalendarClansByID = new Map()),
              (this.m_mapCalendarEventsByGid = new Map()),
              (this.m_rgSortedCalendarEvents = new Array()),
              (this.m_bFinishedSearchingForward = !1),
              (this.m_bFinishedSearchingBackward = !1),
              (this.m_rgCalendarSections = []),
              (this.m_rgFutureSections = []),
              (this.m_key = e);
          }
          return (
            (e.prototype.BIsGlobalCalendar = function() {
              return (
                !this.m_key.appids &&
                !this.m_key.clanaccountids &&
                !this.m_key.collectionid
              );
            }),
            (e.prototype.BIsSingleSourceCalendar = function() {
              return Boolean(
                this.BIsSingleGroupCalendar()
                  ? !this.BIsSingleAppCalendar()
                  : this.BIsSingleAppCalendar()
              );
            }),
            (e.prototype.BIsSingleSourceMuted = function() {
              return (
                !!this.BIsSingleSourceCalendar() &&
                (this.BIsSingleAppCalendar()
                  ? S.BIsMutedAppID(this.GetSingleAppID())
                  : S.BIsMutedClanID(this.GetSingleGroupID()))
              );
            }),
            (e.prototype.BIsSingleGroupCalendar = function() {
              return Boolean(
                this.m_key.clanaccountids &&
                  1 == this.m_key.clanaccountids.length
              );
            }),
            (e.prototype.GetSingleGroupID = function() {
              return this.m_key.clanaccountids[0];
            }),
            (e.prototype.BIsSingleAppCalendar = function() {
              return Boolean(
                this.m_key.appids && 1 == this.m_key.appids.length
              );
            }),
            (e.prototype.GetSingleAppID = function() {
              return this.m_key.appids[0];
            }),
            (e.prototype.GetRequestInFlight = function(e) {
              return "forward" === e
                ? this.m_forwardRequestInFlight
                : this.m_backwardRequestInFlight;
            }),
            (e.prototype.SetRequestInFlight = function(e, t) {
              Object(h.a)(
                !t || !this.GetRequestInFlight(e),
                "Already have a request in flight for",
                e
              ),
                "forward" === e
                  ? (this.m_forwardRequestInFlight = t)
                  : (this.m_backwardRequestInFlight = t);
            }),
            (e.prototype.GetCalendarEventList = function() {
              return this.m_rgSortedCalendarEvents;
            }),
            (e.prototype.GetCalendarItemsInTimeRange = function(t, a, n) {
              var e = this.GetCalendarEventList().filter(function(e) {
                  return (
                    e.start_time >= t &&
                    (!a || e.start_time < a) &&
                    (n || E.c.BShouldDisplayEvent(e))
                  );
                }),
                r = a
                  ? this.BHitBackwardHorizon() ||
                    this.GetCalendarEventList().some(function(e) {
                      return e.start_time < t;
                    })
                  : this.BHitForwardHorizon();
              return (
                r || this.LoadAdditionalEvents(a ? "backward" : "forward"),
                { rgCalendarItems: e, bIsComplete: r }
              );
            }),
            (e.prototype.CountCalenderItemsInTimeRange = function(e, t, a) {
              for (
                var n = 0, r = 0, o = this.GetCalendarEventList();
                r < o.length;
                r++
              ) {
                var i = o[r];
                i.start_time >= e &&
                  (!t || i.start_time < t) &&
                  (a || E.c.BShouldDisplayEvent(i)) &&
                  (n += 1);
              }
              return n;
            }),
            (e.prototype.GetCalendarSections = function(e) {
              return e ? this.m_rgFutureSections : this.m_rgCalendarSections;
            }),
            (e.prototype.BMayHaveAnyVisibleFutureEvents = function() {
              var t = this.GetStoreInitializationTimestamp().getTime() / 1e3;
              return this.GetCalendarEventList().some(function(e) {
                return e.start_time >= t && E.c.BShouldDisplayEvent(e);
              });
            }),
            (e.prototype.GetStoreInitializationTimestamp = function() {
              return (
                this.m_dtInitTime ||
                  (this.m_dtInitTime = N.a.GetTimeNowWithOverrideAsDate()),
                this.m_dtInitTime
              );
            }),
            (e.prototype.InitCalendarSections = function() {
              var t = this,
                e = this.GetStoreInitializationTimestamp(),
                a = [],
                n = e.getTime() / 1e3;
              a.push(D(n, Object(L.d)("#EventCalendar_FutureEventsHeader"), n));
              var r = new Date(e);
              r.setHours(0, 0, 0, 1);
              var o = r.getTime() / 1e3;
              a.push(D(n, Object(L.d)("#Time_Today"), o, n)),
                r.setDate(r.getDate() - 1);
              var i = o;
              (o = r.getTime() / 1e3),
                a.push(D(n, Object(L.d)("#Time_Yesterday"), o, i));
              for (
                var s = this.m_rgSortedCalendarEvents[
                    this.m_rgSortedCalendarEvents.length - 1
                  ],
                  l = !1,
                  c = 0;
                c < 5 && !l;
                c++
              )
                r.setDate(r.getDate() - 1),
                  (i = o),
                  (o = r.getTime() / 1e3),
                  a.push(D(n, Object(L.f)(r), o, i)),
                  s && s.start_time > o && (l = !0);
              for (
                var d = new Date(r), p = o;
                d.getMonth() == e.getMonth() && 1 != d.getDate() && !l;

              ) {
                d.setDate(d.getDate() - 7);
                var u = d.getTime() / 1e3;
                a.push(D(n, Object(L.e)(p - 1), u, p)),
                  s && s.start_time > u && (l = !0),
                  (p = u);
              }
              var m = new Date(e);
              m.setHours(0, 0, 0, 1), m.setDate(1);
              for (var h = p, v = 1; v <= 14 && !l; v++) {
                var _ = new Date(m);
                _.setMonth(e.getMonth() - v, 1);
                var b = _.getTime() / 1e3;
                a.push(D(n, Object(L.e)(h - 1), b, h)),
                  s && s.start_time > b && (l = !0),
                  (h = b);
              }
              this.m_rgCalendarSections.length > a.length
                ? this.m_rgCalendarSections.splice(
                    a.length,
                    this.m_rgCalendarSections.length
                  )
                : a
                    .splice(this.m_rgCalendarSections.length, a.length)
                    .forEach(function(e) {
                      return t.m_rgCalendarSections.push(e);
                    });
            }),
            (e.prototype.InitFutureCalendarSections = function() {
              var t = this,
                e = this.GetStoreInitializationTimestamp(),
                a = [],
                n = new Date(e);
              n.setMonth(n.getMonth() + 14);
              var r = n.getTime() / 1e3;
              this.m_key.rtCalendarEnd &&
                this.m_key.rtCalendarEnd < r &&
                (r = this.m_key.rtCalendarEnd);
              var o =
                0 < this.m_rgSortedCalendarEvents.length &&
                this.m_rgSortedCalendarEvents[0];
              o && o.start_time < r && (r = o.start_time);
              var i = e.getTime() / 1e3,
                s = 3600 * Math.floor(e.getTime() / 1e3 / 3600),
                l = 3600 + s;
              a.push(D(i, Object(L.d)("#Time_Now"), s, l));
              var c = r <= l,
                d = new Date(e);
              d.setHours(24, 0, 0, 0);
              var p = d.getTime() / 1e3;
              c ||
                a.push(
                  D(
                    i,
                    Object(L.d)(
                      this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today"
                    ),
                    l,
                    p
                  )
                ),
                (c = r <= p);
              var u = p;
              d.setDate(d.getDate() + 1),
                (p = d.getTime() / 1e3),
                c || a.push(D(i, Object(L.d)("#Time_Tomorrow"), u, p)),
                (c = r <= p);
              for (var m = 6 - I(e).weekday(), h = 2; h <= m && !c; h++) {
                u = p;
                var v = Object(L.f)(d);
                d.setDate(d.getDate() + 1),
                  (p = d.getTime() / 1e3),
                  a.push(D(i, v, u, p)),
                  (c = r <= p);
              }
              if (this.m_key.bSectionByDay)
                for (; !c; ) {
                  u = p;
                  v = Object(L.g)(d);
                  d.setDate(d.getDate() + 1),
                    (p = d.getTime() / 1e3),
                    a.push(D(i, v, u, p)),
                    (c = r <= p);
                }
              else {
                var _ = new Date(d),
                  b = p,
                  g = I(e).daysInMonth();
                if (_.getMonth() == e.getMonth() && _.getDate() != g && !c) {
                  _.setDate(_.getDate() + 7);
                  var y = _.getTime() / 1e3;
                  a.push(D(i, Object(L.d)("#EventCalendar_NextWeek"), b, y)),
                    (c = r <= y),
                    (b = y);
                }
                var E = new Date(e);
                E.setMonth(E.getMonth() + 1),
                  E.setDate(1),
                  E.setHours(0, 0, 0, 0);
                var S = void 0;
                if (_ < E && !c) {
                  var f = E.getTime() / 1e3;
                  a.push(
                    D(i, Object(L.d)("#EventCalendar_LaterThisMonth"), b, f)
                  ),
                    (c = r <= f),
                    (S = f);
                } else S = b;
                for (var C = 2; C <= 14 && !c; C++) {
                  var O = new Date(E);
                  O.setMonth(e.getMonth() + C);
                  f = O.getTime() / 1e3;
                  a.push(D(i, Object(L.e)(S), S, f)), (c = r <= f), (S = f);
                }
              }
              this.m_rgFutureSections.length > a.length
                ? this.m_rgFutureSections.splice(
                    a.length,
                    this.m_rgFutureSections.length
                  )
                : a
                    .splice(this.m_rgFutureSections.length, a.length)
                    .forEach(function(e) {
                      return t.m_rgFutureSections.push(e);
                    });
            }),
            (e.prototype.BHitForwardHorizon = function() {
              return this.m_bFinishedSearchingForward;
            }),
            (e.prototype.BHitBackwardHorizon = function() {
              return this.m_bFinishedSearchingBackward;
            }),
            (e.prototype.RegisterCalendarEventsAndModels = function(e) {
              this.RegisterCalendarApps(e.apps),
                this.RegisterCalendarClans(e.clans),
                this.RegisterCalendarEvents(e.documents),
                T.c.RegisterClanEvents(e.events),
                this.RegisterReadEvents(e.events_read),
                this.RegisterEventVotes(e.event_votes),
                e.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                e.backwardComplete && (this.m_bFinishedSearchingBackward = !0),
                this.InitCalendarSections(),
                N.a.bEnableNewsHubMayUpdate &&
                  this.InitFutureCalendarSections();
            }),
            (e.prototype.RegisterCalendarApps = function(e) {
              if (e)
                for (var t = 0, a = e; t < a.length; t++) {
                  var n = a[t];
                  if (!this.m_mapCalendarAppsByID.has(n.appid)) {
                    var r = new p.b();
                    (r.appid = n.appid),
                      (r.source = n.source),
                      (r.playtime = n.playtime),
                      (r.last_played = n.last_played),
                      (r.wishlist_added = n.wishlist_added),
                      this.m_mapCalendarAppsByID.set(n.appid, r);
                  }
                }
            }),
            (e.prototype.RegisterCalendarClans = function(e) {
              if (e)
                for (var t = 0, a = e; t < a.length; t++) {
                  var n = a[t];
                  if (!this.m_mapCalendarClansByID.has(n.clanid)) {
                    var r = new p.c();
                    (r.clanid = n.clanid),
                      (r.source = n.source),
                      this.m_mapCalendarClansByID.set(n.clanid, r);
                  }
                }
            }),
            (e.prototype.RegisterReadEvents = function(e) {
              if (e)
                for (var t = A.a.Get(), a = 0, n = e; a < n.length; a++) {
                  var r = n[a];
                  t.SetEventAsRead(r);
                }
            }),
            (e.prototype.RegisterEventVotes = function(e) {
              if (e)
                for (var t = A.a.Get(), a = 0, n = e; a < n.length; a++) {
                  var r = n[a],
                    o = void 0 === r.vote ? void 0 : Boolean(r.vote);
                  t.SetVote(r.id, o);
                }
            }),
            (e.prototype.RegisterCalendarEvents = function(e) {
              if (e) {
                for (
                  var t = this.BIsGlobalCalendar(), a = !1, n = 0, r = e;
                  n < r.length;
                  n++
                ) {
                  var o = r[n];
                  (t &&
                    o.appid &&
                    (S.BIsMutedAppID(o.appid) ||
                      w.a.BIsGameIgnored(o.appid))) ||
                    (this.InternalInsertCalendarEventItem(o) && (a = !0));
                }
                a && this.RebuildSortedCalendarEventList();
              }
            }),
            (e.prototype.GetTimeEdgeForDirection = function(e, t) {
              return (
                void 0 === t && (t = void 0),
                "forward" === e
                  ? 0 < this.m_rgSortedCalendarEvents.length
                    ? this.m_rgSortedCalendarEvents[0].start_time
                    : t
                  : 0 < this.m_rgSortedCalendarEvents.length
                  ? this.m_rgSortedCalendarEvents[
                      this.m_rgSortedCalendarEvents.length - 1
                    ].start_time
                  : t
              );
            }),
            (e.prototype.UpdateStuckCounters = function(e, t) {
              var a =
                  "forward" === e
                    ? this.m_bFinishedSearchingForward
                    : this.m_bFinishedSearchingBackward,
                n = this.GetTimeEdgeForDirection(e, void 0);
              return a || n !== t
                ? ("forward" == e
                    ? (this.m_nForwardStuckCount = 0)
                    : (this.m_nBackwardStuckCount = 0),
                  !1)
                : ("forward" == e
                    ? this.m_nForwardStuckCount++
                    : this.m_nBackwardStuckCount++,
                  !0);
            }),
            (e.prototype.LoadAdditionalEvents = function(d, p, u, m) {
              return (
                void 0 === u && (u = !1),
                void 0 === m && (m = !1),
                Object(k.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n,
                    r,
                    o,
                    i,
                    s,
                    l,
                    c = this;
                  return Object(k.e)(this, function(e) {
                    return ("forward" === d
                    ? this.BHitForwardHorizon()
                    : this.BHitBackwardHorizon())
                      ? [2, 1]
                      : ((t =
                          G.c.STORE_BASE_URL +
                          "events/ajaxgetusereventcalendarrange/"),
                        (a =
                          "forward" === d
                            ? this.m_nForwardStuckCount
                            : this.m_nBackwardStuckCount),
                        (n = 3 <= a ? 1 : 0),
                        (r = 50 * (a < 3 ? a + 1 : 1)),
                        15,
                        (o = this.GetTimeEdgeForDirection(
                          d,
                          N.a.GetTimeNowWithOverride()
                        )),
                        (i = {
                          minTime: 0,
                          maxTime: 0,
                          ascending: !0,
                          maxResults: r,
                          populateEvents: 15,
                          appTypes: u ? null : E.c.GetGameSources().join(","),
                          eventTypes: m
                            ? null
                            : Array.from(E.c.enabledEventTypeSet).join(","),
                          appIdFilter: Boolean(
                            this.m_key.appids && 0 < this.m_key.appids.length
                          )
                            ? this.m_key.appids.sort().join(",")
                            : void 0,
                          clanIdFilter: Boolean(
                            this.m_key.clanaccountids &&
                              0 < this.m_key.clanaccountids.length
                          )
                            ? this.m_key.clanaccountids.sort().join(",")
                            : void 0,
                          collectionID: this.m_key.collectionid
                        }),
                        "forward" === d
                          ? ((i.minTime = Math.floor(o + n)),
                            (i.ascending = !0))
                          : ((i.maxTime = Math.floor(o - n)),
                            (i.ascending = !1)),
                        (s = this.GetRequestInFlight(d)) ||
                          ((l = _.a.get(t, {
                            params: i,
                            cancelToken: p ? p.token : void 0
                          })),
                          (s = l
                            .then(function(e) {
                              if (
                                (c.SetRequestInFlight(d, null),
                                1 == e.data.success)
                              ) {
                                if (
                                  (c.RegisterCalendarEventsAndModels(e.data),
                                  c.UpdateStuckCounters(d, o))
                                ) {
                                  var t = c.BIsSingleAppCalendar();
                                  return c.LoadAdditionalEvents(d, p, t, !1);
                                }
                              } else console.error("LoadAdditionalEvents was not successful: Msg" + e.data.msg);
                              return e.data.success;
                            })
                            .catch(function(e) {
                              return (
                                c.SetRequestInFlight(d, null),
                                console.error(
                                  "LoadAdditionalEvents hit error " +
                                    Object(y.a)(e)
                                ),
                                2
                              );
                            })),
                          this.SetRequestInFlight(d, s)),
                        [2, s]);
                  });
                })
              );
            }),
            (e.prototype.InternalInsertCalendarEventItem = function(e) {
              if (!e.unique_id)
                return (
                  Object(h.a)(
                    !1,
                    "Attmpted to register a calendar event item with an invalid unique id!"
                  ),
                  !1
                );
              if (this.m_mapCalendarEventsByGid.has(e.unique_id)) return !1;
              var t = this.m_mapCalendarAppsByID.get(e.appid),
                a = this.m_mapCalendarClansByID.get(e.clanid);
              if (!t && !a)
                return console.log("No AppInfo or ClanInfo For: ", e), !1;
              var n = new p.d();
              return (
                (n.clanid = e.clanid),
                (n.unique_id = e.unique_id),
                (n.event_type = e.event_type),
                (n.appid = e.appid),
                (n.start_time = e.start_time),
                (n.score = e.score),
                (n.appInfo = t),
                (n.clanInfo = a),
                this.m_rgSortedCalendarEvents.push(n),
                this.m_mapCalendarEventsByGid.set(n.unique_id, n),
                !0
              );
            }),
            (e.prototype.RebuildSortedCalendarEventList = function() {
              var e = this.m_rgSortedCalendarEvents.slice();
              this.m_rgSortedCalendarEvents = e.sort(function(e, t) {
                return t.start_time - e.start_time;
              });
            }),
            (e.prototype.UpdateEventBlockFromCalenderEvent = function(n, r) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = n.appInfo ? n.appid : void 0),
                        (a = n.clanInfo ? n.clanInfo.clanid : void 0),
                        null == t && null == a
                          ? (Object(h.a)(
                              !1,
                              "Both clan id and account id are missing, cannot change communication status"
                            ),
                            [2])
                          : [4, S.UpdateCommunitionSetting(r, t, a)]
                      );
                    case 1:
                      return (
                        e.sent() &&
                          !r &&
                          this.BIsGlobalCalendar() &&
                          (t || a) &&
                          this.FilterOutCalendarEntryBy(t, a),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.FilterOutCalendarEntryBy = function(e, t) {
              var a = new Array();
              if (e) {
                for (
                  var n = 0, r = this.m_rgSortedCalendarEvents;
                  n < r.length;
                  n++
                ) {
                  (s = r[n]).appid != e && a.push(s);
                }
                u.b.RecordAppInteractionEvent(e, u.a.k_eMuted);
              } else if (t)
                for (
                  var o = 0, i = this.m_rgSortedCalendarEvents;
                  o < i.length;
                  o++
                ) {
                  var s;
                  (s = i[o]).clanid != t && a.push(s);
                }
              this.m_rgSortedCalendarEvents = a;
            }),
            (e.prototype.IgnoreAppAndFilterCalendar = function(a) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [4, w.a.UpdateAppIgnore(a.appInfo.appid, !0)];
                    case 1:
                      return (
                        (t = e.sent()),
                        this.BIsGlobalCalendar() &&
                          1 == t.success &&
                          this.FilterOutCalendarEntryBy(
                            a.appInfo.appid,
                            void 0
                          ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.m_strCurCalendarKey = null),
            Object(k.c)(
              [m.observable],
              e.prototype,
              "m_mapCalendarEventsByGid",
              void 0
            ),
            Object(k.c)(
              [m.observable],
              e.prototype,
              "m_rgSortedCalendarEvents",
              void 0
            ),
            Object(k.c)(
              [m.observable],
              e.prototype,
              "m_bFinishedSearchingForward",
              void 0
            ),
            Object(k.c)(
              [m.observable],
              e.prototype,
              "m_bFinishedSearchingBackward",
              void 0
            ),
            Object(k.c)(
              [m.observable],
              e.prototype,
              "m_rgCalendarSections",
              void 0
            ),
            Object(k.c)(
              [m.observable],
              e.prototype,
              "m_rgFutureSections",
              void 0
            ),
            Object(k.c)([m.action], e.prototype, "InitCalendarSections", null),
            Object(k.c)(
              [m.action],
              e.prototype,
              "InitFutureCalendarSections",
              null
            ),
            Object(k.c)(
              [m.action],
              e.prototype,
              "RegisterCalendarEventsAndModels",
              null
            ),
            Object(k.c)([m.action], e.prototype, "RegisterCalendarApps", null),
            Object(k.c)([m.action], e.prototype, "RegisterCalendarClans", null),
            Object(k.c)([m.action], e.prototype, "RegisterReadEvents", null),
            Object(k.c)([m.action], e.prototype, "RegisterEventVotes", null),
            Object(k.c)(
              [m.action],
              e.prototype,
              "RegisterCalendarEvents",
              null
            ),
            Object(k.c)(
              [m.action],
              e.prototype,
              "UpdateEventBlockFromCalenderEvent",
              null
            ),
            Object(k.c)(
              [m.action],
              e.prototype,
              "FilterOutCalendarEntryBy",
              null
            ),
            Object(k.c)(
              [m.action],
              e.prototype,
              "IgnoreAppAndFilterCalendar",
              null
            ),
            Object(k.c)([m.observable], e, "m_strCurCalendarKey", void 0),
            e
          );
        })(),
        f = new Map();
      function C(e) {
        var t = "";
        return (
          e.appids &&
            0 < e.appids.length &&
            (t += "appids:" + e.appids.sort().join(",")),
          e.clanaccountids &&
            0 < e.clanaccountids.length &&
            (t += "clanids:" + e.clanaccountids.sort().join(",")),
          e.collectionid && (t += "collection:" + e.collectionid),
          e.bSectionByDay && (t += "_sectionbyday"),
          e.rtCalendarEnd && (t += "_end:" + e.rtCalendarEnd),
          v.m_strCurCalendarKey !== t &&
            ((v.m_strCurCalendarKey = t),
            f.has(v.m_strCurCalendarKey) ||
              f.set(v.m_strCurCalendarKey, new v(e))),
          t
        );
      }
      function B() {
        return (
          null == v.m_strCurCalendarKey && C({}), f.get(v.m_strCurCalendarKey)
        );
      }
      window.g_EventCalendarMap = f;
      var M,
        x,
        R = a("IjL/"),
        P = a("55Ip"),
        H = a("Mgs7"),
        F = a("6Y59"),
        z = a("5E+2"),
        U = a("+d9t"),
        W = a("exH9"),
        V = a("kyHq"),
        Z = a("bxiW"),
        Y = a("bS9Q"),
        q = a("I2Hi"),
        J = a.n(q),
        Q = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { strSearchString: "", rgSuggestions: null }),
              (e.m_currentRequest = 0),
              e
            );
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.UpdateAppSuggestions = function(a) {
              return Object(k.b)(this, void 0, void 0, function() {
                var s,
                  t = this;
                return Object(k.e)(this, function(e) {
                  return (
                    (null == (s = a.target.value && a.target.value.trim())
                    ? void 0
                    : s.length)
                      ? (window.clearTimeout(this.m_currentRequest),
                        (this.m_currentRequest = window.setTimeout(function() {
                          return Object(k.b)(t, void 0, void 0, function() {
                            var t,
                              a,
                              n,
                              r,
                              o,
                              i = this;
                            return Object(k.e)(this, function(e) {
                              switch (e.label) {
                                case 0:
                                  return (
                                    (t = {
                                      cc: G.c.COUNTRY,
                                      l: G.c.LANGUAGE,
                                      realm: V.d.k_ESteamRealmGlobal,
                                      f: "jsonfull",
                                      term: s.replace(" ", "+"),
                                      require_type: this.props
                                        .filterStoreItemType
                                        ? this.props.filterStoreItemType.join(
                                            ","
                                          )
                                        : void 0,
                                      excluded_tags: w.a.GetExcludedTagsSortedByID(),
                                      excluded_content_descriptors: w.a.GetExcludedContentDescriptor()
                                    }),
                                    (a = G.c.STORE_BASE_URL + "search/suggest"),
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
                                          var t = j.createElement(
                                            "div",
                                            {
                                              className: J.a.ResultRow,
                                              key: "suggestion-" + e.id,
                                              onClick: function() {
                                                return i.props.fnOnSelected(e);
                                              }
                                            },
                                            j.createElement("img", {
                                              src: e.img,
                                              className: J.a.AvatarImage
                                            }),
                                            j.createElement(
                                              "div",
                                              { className: J.a.GameName },
                                              " ",
                                              Object(Y.b)(e.name),
                                              " "
                                            )
                                          );
                                          return i.props.fnDecorateSuggestion
                                            ? i.props.fnDecorateSuggestion(e, t)
                                            : t;
                                        })
                                      : [
                                          j.createElement(
                                            "div",
                                            { key: "empty-results" },
                                            Object(L.d)(
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
              return j.createElement(
                "div",
                { className: J.a.SuggestContainer },
                j.createElement(H.j, {
                  type: "text",
                  label: this.props.strLabel,
                  onChange: this.UpdateAppSuggestions,
                  bAlwaysShowClearAction: e
                }),
                e &&
                  j.createElement(
                    "div",
                    {
                      className: Object(W.a)(
                        J.a.Results,
                        this.props.strResultsClass
                      )
                    },
                    this.state.rgSuggestions
                  )
              );
            }),
            Object(k.c)([Z.a], e.prototype, "UpdateAppSuggestions", null),
            e
          );
        })(j.Component),
        K = a("IWyE"),
        X = a.n(K),
        $ = (function() {
          function e() {
            this.m_dateLoadTime = N.a.GetTimeNowWithOverrideAsDate();
          }
          return (
            (e.prototype.IsCurrentlyVisible = function(e) {
              return (
                (!e.startVisible || e.startVisible <= this.m_dateLoadTime) &&
                (!e.endVisible || e.endVisible >= this.m_dateLoadTime)
              );
            }),
            (e.IsCurrentlyActive = function(e) {
              var t = N.a.GetTimeNowWithOverrideAsDate();
              return (
                (!e.startEvent || e.startEvent <= t) &&
                (!e.endEvent || e.endEvent >= t)
              );
            }),
            (e.LocalizeDateString = function(e) {
              if (!e.startEvent) return null;
              var t = e.startEvent.toLocaleDateString(
                L.c.GetPreferredLocales(),
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
                e.endEvent.toLocaleDateString(L.c.GetPreferredLocales(), a)
              );
            }),
            (e.prototype.GetVisibleSpecialEvents = function() {
              var t = this;
              return N.a.bEnableNewsHubMayUpdate
                ? [
                    {
                      sLocToken: "#NewsHubSpecialEvent_GameFestival",
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
        ee = new $(),
        te = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.specialEvent,
                t = window.location.href === G.c.STORE_BASE_URL + e.newshubUrl,
                a = $.IsCurrentlyActive(e),
                n = $.LocalizeDateString(e);
              return j.createElement(
                P.b,
                { to: "/" + e.newshubUrl },
                j.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      X.a.SpecialEvent,
                      t && X.a.SpecialEventOnPage,
                      a && X.a.SpecialEventActive
                    )
                  },
                  j.createElement(
                    "div",
                    { className: X.a.SpecialEventTitle },
                    Object(L.d)(e.sLocToken)
                  ),
                  n &&
                    j.createElement(
                      "div",
                      { className: X.a.SpecialEventTime },
                      n
                    )
                )
              );
            }),
            t
          );
        })(j.Component),
        ae = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = ee.GetVisibleSpecialEvents();
              return 0 === e.length
                ? null
                : j.createElement(
                    "div",
                    { className: X.a.SpecialEventListGroup },
                    j.createElement(
                      "div",
                      { className: X.a.SpecialEventListTitle },
                      Object(L.d)("#Events_SpecialEvents")
                    ),
                    j.createElement(
                      "div",
                      { className: X.a.SpecialEventList },
                      e.map(function(e) {
                        return j.createElement(te, {
                          key: e.sLocToken,
                          specialEvent: e
                        });
                      })
                    )
                  );
            }),
            t
          );
        })(j.Component),
        ne = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.componentDidMount = function() {}),
            (t.prototype.OnEventTypeChange = function(e, t) {
              E.c.SetEventTypeGroupAllowed(e, t), this.props.fnOnFilterChange();
            }),
            (t.prototype.RenderEventTypeCheckbox = function(t) {
              var a = this,
                e = E.c.BIsEventTypeGroupAllowed(t);
              return j.createElement(
                z.a,
                {
                  toolTipContent: Object(L.d)(
                    "#EventCalendar_EventTypeGroup_ttip_" + t
                  ),
                  direction: "top"
                },
                j.createElement(H.d, {
                  key: "group-" + t,
                  label: Object(L.d)("#EventCalendar_EventTypeGroup_" + t),
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
              return j.createElement(
                z.a,
                {
                  direction: "top",
                  toolTipContent: e
                    ? Object(L.d)("#EventCalendar_DisabledFilter_LoginPrompt")
                    : Object(L.d)("#EventCalendar_GameSource_ttip_" + t)
                },
                j.createElement(H.d, {
                  key: "gs-" + t,
                  label: Object(L.d)("#EventCalendar_GameSource_" + t),
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
                  ? p.d.GetEntityNameForID(e.GetSingleAppID(), void 0)
                  : p.d.GetEntityNameForID(
                      void 0,
                      Number(e.GetSingleGroupID())
                    );
                return Object(L.k)(
                  "#EventCalendar_SpecificCalendar",
                  t,
                  j.createElement("br", null)
                );
              }
              return Object(L.k)(
                "#EventCalendar_Title",
                j.createElement("br", null)
              );
            }),
            (t.prototype.DecorateSearchSuggestion = function(e, t) {
              return e && e.id && ("software" == e.type || "game" == e.type)
                ? j.createElement(
                    P.b,
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
                s = Xe(),
                l = s
                  ? j.createElement(
                      "div",
                      {
                        className: X.a.MobileButton,
                        onClick: i,
                        style: { transform: "translateY(" + n + "px)" }
                      },
                      r
                        ? j.createElement(F.a, null)
                        : j.createElement(F.y, null)
                    )
                  : null,
                c = r ? a : 0,
                d = s
                  ? null
                  : j.createElement(
                      "div",
                      { onClick: i, className: X.a.CollapseButton },
                      j.createElement(
                        "div",
                        {
                          style: { marginTop: c + "px" },
                          className: X.a.DesktopButton
                        },
                        j.createElement(F.g, { angle: r ? 180 : 0 })
                      )
                    ),
                p = r ? null : { top: a + "px" },
                u = B(),
                m = !0;
              if (u.BIsSingleGroupCalendar()) {
                var h = g.a.GetClanInfoByClanAccountID(u.GetSingleGroupID());
                h && h.has_rss_feed && (m = !1);
              }
              var v = S.GetMutedSourceCount(),
                _ =
                  "Responsive_RequestDesktopView" in window &&
                  window.Responsive_RequestDesktopView,
                b =
                  "Responsive_RequestMobileView" in window &&
                  window.Responsive_RequestMobileView;
              return j.createElement(
                j.Fragment,
                null,
                l,
                j.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      X.a.SidebarContainer,
                      r && X.a.SidebarCollapsed
                    ),
                    style: p
                  },
                  r
                    ? d
                    : j.createElement(
                        "div",
                        { className: X.a.Sidebar },
                        d,
                        j.createElement(
                          "div",
                          { className: X.a.SidebarBackground },
                          j.createElement(F.z, null)
                        ),
                        Boolean(!u.BIsGlobalCalendar()) &&
                          j.createElement(
                            "span",
                            { className: X.a.SidebarBackLink },
                            j.createElement(
                              P.b,
                              { to: "/newshub" },
                              j.createElement(F.g, {
                                angle: 0,
                                singlearrow: !0
                              }),
                              Object(L.d)(
                                "#EventCalendar_GlobalCalendar_Action"
                              )
                            )
                          ),
                        j.createElement(
                          "div",
                          { className: X.a.SidebarTitle },
                          this.GetCalendarTitle(u)
                        ),
                        j.createElement(
                          "div",
                          { className: X.a.FilterSection },
                          m &&
                            j.createElement(
                              "div",
                              { className: X.a.FilterSubSection },
                              j.createElement(
                                "div",
                                { className: X.a.FilterSubSectionTitle },
                                Object(L.d)(
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
                            j.createElement(
                              "div",
                              { className: X.a.FilterSubSection },
                              j.createElement(
                                "div",
                                { className: X.a.FilterSubSectionTitle },
                                Object(L.d)(
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
                              N.a.bIncludeFeaturedAsGameSource &&
                                this.RenderGameSourceCheckbox(E.b.k_EFeatured)
                            ),
                          Boolean(u.BIsSingleSourceMuted()) &&
                            j.createElement(
                              "div",
                              null,
                              Object(L.d)("#EventCalendar_SingleAppIsMuted")
                            )
                        ),
                        j.createElement(Q, {
                          strLabel: Object(L.d)("#EventCalendar_GameSearch"),
                          fnOnSelected: function() {},
                          fnDecorateSuggestion: this.DecorateSearchSuggestion,
                          filterStoreItemType: ["game", "software"]
                        }),
                        j.createElement(ae, null),
                        j.createElement(
                          "div",
                          { className: X.a.SidebarManageMutedApps },
                          _ &&
                            j.createElement(
                              "div",
                              {
                                className: Object(W.a)(
                                  X.a.SidebarLink,
                                  X.a.ForceDesktopLink
                                ),
                                onClick: _
                              },
                              Object(L.d)("#EventCalendar_ForceDesktopView")
                            ),
                          b &&
                            j.createElement(
                              "div",
                              {
                                className: Object(W.a)(
                                  X.a.SidebarLink,
                                  X.a.ForceResponsiveLink
                                ),
                                onClick: b
                              },
                              Object(L.d)("#EventCalendar_ShowResponsiveView")
                            ),
                          Boolean(u.BIsGlobalCalendar()) &&
                            0 < v &&
                            j.createElement(
                              U.a,
                              {
                                className: X.a.MutedSourcesGroup,
                                href:
                                  G.c.STORE_BASE_URL +
                                  "account/emailoptout/app",
                                bDisableContextMenu: !0
                              },
                              Object(L.d)("#EventCalendar_ManageMutedSources"),
                              j.createElement(
                                "div",
                                { className: X.a.MutedSourcesCount },
                                v
                              )
                            ),
                          j.createElement(
                            U.a,
                            {
                              href: G.c.STORE_BASE_URL + "account/preferences",
                              bDisableContextMenu: !0
                            },
                            Object(L.d)("#EventCalendar_ManageStorePref")
                          )
                        ),
                        o &&
                          j.createElement(
                            "div",
                            { className: X.a.SidebarFooter },
                            j.createElement("img", {
                              src:
                                G.c.STORE_CDN_URL +
                                "public/images/footerLogo_valve_new.png"
                            }),
                            j.createElement(
                              "div",
                              null,
                              Object(L.d)(
                                "#Legal_Footer_WithYear",
                                Object(L.h)(new Date())
                              )
                            )
                          )
                      )
                )
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        re = Object(c.g)(ne),
        oe = a("0OaU"),
        ie = a("uuth"),
        se = a("ylkE"),
        le = a("cGQe"),
        ce = a("qiKp"),
        de = (function() {
          return function() {
            (this.m_bHasBeenTracked = !1), (this.m_fnSubmit = null);
          };
        })(),
        pe = new ((function() {
          function e() {
            (this.m_nImpressionDelayMS = 500), (this.m_mapEvents = new Map());
          }
          return (
            (e.prototype.ShouldTrack = function(e) {
              if (e.bOldAnnouncement) return !1;
              var t = this.m_mapEvents.get(e.GID);
              return !t || !t.m_bHasBeenTracked;
            }),
            (e.prototype.StartTracking = function(e) {
              if (!e.bOldAnnouncement) {
                var t = this.m_mapEvents.get(e.GID);
                t || ((t = new de()), this.m_mapEvents.set(e.GID, t)),
                  t.m_bHasBeenTracked ||
                    t.m_fnSubmit ||
                    ((t.m_fnSubmit = new ce.b()),
                    t.m_fnSubmit.Schedule(
                      this.m_nImpressionDelayMS,
                      this.ReportImpression.bind(this, e)
                    ));
              }
            }),
            (e.prototype.StopTracking = function(e) {
              var t = this.m_mapEvents.get(e.GID);
              t &&
                t.m_fnSubmit &&
                (t.m_fnSubmit.Cancel(), (t.m_fnSubmit = null));
            }),
            (e.prototype.ReportImpression = function(e) {
              A.a.Get().RecordEventShown(e, 8),
                u.b.RecordViewedEvent(B(), e.GID);
              var t = this.m_mapEvents.get(e.GID);
              t &&
                ((t.m_bHasBeenTracked = !0),
                t.m_fnSubmit.Cancel(),
                (t.m_fnSubmit = null));
            }),
            e
          );
        })())(),
        ue = function(e) {
          var t = e.event;
          if (pe.ShouldTrack(t)) {
            return j.createElement(ie.a, {
              onEnter: function() {
                return pe.StartTracking(t);
              },
              onLeave: function() {
                return pe.StopTracking(t);
              }
            });
          }
          return null;
        },
        me = a("mgoM"),
        he = a("U+Q5"),
        ve = a("YLyR"),
        _e = a("Kw0F");
      ((x = M || (M = {}))[(x.NotLoaded = 0)] = "NotLoaded"),
        (x[(x.Loading = 1)] = "Loading"),
        (x[(x.Loaded = 2)] = "Loaded");
      var be = M.NotLoaded,
        ge = [];
      function ye(t) {
        if (be != M.Loaded) {
          if (be == M.NotLoaded) {
            var e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(e, a),
              (window.onYouTubeIframeAPIReady = Ee);
          }
          ge.findIndex(function(e) {
            return t == e;
          }) < 0 && ge.push(t);
        } else t();
      }
      function Ee() {
        be = M.Loaded;
        for (var e = 0, t = ge; e < t.length; e++) {
          (0, t[e])();
        }
        ge = [];
      }
      var Se = (function(a) {
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
            Object(k.d)(n, a),
            (n.prototype.componentWillUnmount = function() {
              this.DestroyPlayer(),
                (function(e) {
                  _e.b(ge, e);
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
                this.m_playerContainer && ye(this.OnYoutubeScriptsReady));
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
              var e = j.createElement(
                "div",
                {
                  key: this.m_strPlayerID,
                  ref: this.BindPlayerContainer,
                  className: Object(W.a)("YoutubePlayer", this.props.classnames)
                },
                j.createElement(oe.a, { className: "YoutubePlayerThrobber" })
              );
              return this.props.autopause
                ? j.createElement(ie.a, { onLeave: this.OnPlayerLeftView }, e)
                : e;
            }),
            (n.s_nPlayerIndex = 0),
            Object(k.c)([Z.a], n.prototype, "BindPlayerContainer", null),
            Object(k.c)([Z.a], n.prototype, "OnYoutubeScriptsReady", null),
            Object(k.c)([Z.a], n.prototype, "CreatePlayer", null),
            Object(k.c)([Z.a], n.prototype, "OnPlayerReady", null),
            Object(k.c)([Z.a], n.prototype, "OnPlayerStateChange", null),
            Object(k.c)([Z.a], n.prototype, "OnError", null),
            Object(k.c)([Z.a], n.prototype, "OnPlayerLeftView", null),
            n
          );
        })(j.Component),
        fe = a("02Wr"),
        Ce = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bDismissedPreviewImage: !1 }), t;
          }
          return (
            Object(k.d)(e, a),
            (e.prototype.render = function() {
              var t = this;
              if (
                (this.props.preloadYoutubeScripts && ye(function() {}),
                this.state.bDismissedPreviewImage)
              )
                return j.createElement(Se, Object(k.a)({}, this.props));
              var e = this.props.altImg
                ? this.props.altImg
                : "https://img.youtube.com/vi/" +
                  this.props.video +
                  "/maxresdefault.jpg";
              return j.createElement(
                "div",
                {
                  className: Object(W.a)(
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
                  j.createElement(fe.b, {
                    className: "YoutubePreviewImage",
                    srcs: this.props.altImgWithFallback
                  }),
                !this.props.altImgWithFallback &&
                  j.createElement("img", {
                    src: e,
                    className: "YoutubePreviewImage"
                  }),
                j.createElement(
                  "div",
                  { className: "YoutubePreviewPlay" },
                  j.createElement(F.D, null)
                ),
                j.createElement(
                  "div",
                  { className: "VideoHintText" },
                  Object(L.d)("#EventCalendar_WatchYouTubeVideo")
                )
              );
            }),
            e
          );
        })(j.Component),
        Oe = a("N0Ye"),
        Ie = a("mB/g"),
        Te = a("i6tc"),
        we = a.n(Te),
        De = a("RQmk"),
        ke = a("ka0M"),
        Ae = a("Jqb/"),
        je = a("X3Ds"),
        Le = a("TtDX"),
        Ge = a("y+6m"),
        Ne = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.OnMuteButton = function(e) {
              var t = this.props.calendarEvent,
                a = t.GetEntityName();
              Object(ke.d)(
                j.createElement(
                  Ae.b,
                  {
                    strTitle: Object(L.d)("#EventCalendar_MuteApp"),
                    strDescription: Object(L.d)(
                      "#EventCalendar_MuteApp_details",
                      a
                    ),
                    onOK: function() {
                      return B().UpdateEventBlockFromCalenderEvent(t, !1);
                    }
                  },
                  j.createElement(
                    "a",
                    {
                      href:
                        (G.c.IN_CLIENT ? "steam://openurl/" : "") +
                        G.c.STORE_BASE_URL +
                        "account/emailoptout/app",
                      target: G.c.IN_CLIENT ? void 0 : "_blank"
                    },
                    Object(L.d)("#EventCalendar_ManageMutedApps")
                  )
                ),
                Object(je.m)(e)
              );
            }),
            (t.prototype.OnUnMuteButton = function() {
              var e = this.props.calendarEvent;
              B().UpdateEventBlockFromCalenderEvent(e, !0);
            }),
            (t.prototype.IgnoreAppButton = function(e) {
              var t = this.props.calendarEvent;
              t.GetEntityName();
              Object(ke.d)(
                j.createElement(
                  Ae.b,
                  {
                    strTitle: Object(L.d)("#EventCalendar_Ignore"),
                    strDescription: Object(L.d)(
                      "#EventCalendar_IgnoreApp_ttip"
                    ),
                    onOK: function() {
                      return B().IgnoreAppAndFilterCalendar(t);
                    }
                  },
                  j.createElement("br", null),
                  j.createElement(
                    "p",
                    null,
                    Object(L.d)("#EventCalendar_IgnoreApp_newhub")
                  ),
                  j.createElement("br", null),
                  j.createElement(
                    "a",
                    {
                      href:
                        (G.c.IN_CLIENT ? "steam://openurl/" : "") +
                        G.c.STORE_BASE_URL +
                        "account/preferences",
                      target: G.c.IN_CLIENT ? void 0 : "_blank"
                    },
                    Object(L.d)("#EventCalendar_ManageStorePref")
                  )
                ),
                Object(je.m)(e)
              );
            }),
            (t.prototype.UnignoreAppButton = function() {
              var e = this.props.calendarEvent;
              w.a.UpdateAppIgnore(e.appInfo.appid, !1);
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
                      j.createElement(
                        Ge.d,
                        {
                          key: "item-source-" + a + "-" + t,
                          disabled: !0,
                          onSelected: function() {}
                        },
                        Object(L.d)("#EventCalender_Reason_" + t)
                      )
                    ),
                  e.push(
                    j.createElement(
                      Ge.d,
                      {
                        key: "item-hidesource-" + a + "-" + t,
                        onSelected: function() {
                          E.c.SetGameSourceAllowed(t, !1);
                        }
                      },
                      Object(L.d)("#EventCalender_Hide_Reason_" + t)
                    )
                  ));
            }),
            (t.prototype.RemoveFromWishlist = function() {
              w.a.UpdateGameWishlist(this.props.eventModel.appid, !1);
            }),
            (t.prototype.AddToWishlist = function() {
              w.a.UpdateGameWishlist(this.props.eventModel.appid, !0);
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
                s = B();
              s.BIsGlobalCalendar() &&
                (o &&
                  o & p.a.k_eLibrary &&
                  (E.c.BIsGameSourceAllowed(E.b.k_ERecent) && n.appInfo
                    ? (r.push(
                        j.createElement(
                          Ge.d,
                          {
                            key: "item-source-" + i + "-lastplayed",
                            disabled: !0,
                            onSelected: function() {}
                          },
                          Object(L.d)(
                            "#EventCalender_LastPlayed",
                            Object(L.n)(
                              N.a.GetTimeNowWithOverride() -
                                n.appInfo.last_played
                            )
                          )
                        )
                      ),
                      this.AddContextMenuForSource(r, E.b.k_ERecent, i, !1))
                    : this.AddContextMenuForSource(r, E.b.k_ELibrary, i)),
                o &&
                  o & p.a.k_eWishlist &&
                  this.AddContextMenuForSource(r, E.b.k_EWishist, i),
                o &&
                  o & p.a.k_eFollowing &&
                  this.AddContextMenuForSource(r, E.b.k_EFollowing, i),
                o &&
                  o & p.a.k_eRecommended &&
                  this.AddContextMenuForSource(r, E.b.k_ERecommended, i),
                o &&
                  o & p.a.k_eSteam &&
                  this.AddContextMenuForSource(r, E.b.k_ESteam, i),
                o &&
                  o & p.a.k_eFeatured &&
                  this.AddContextMenuForSource(r, E.b.k_EFeatured, i)),
                r.push(
                  j.createElement(
                    Ge.d,
                    {
                      key: a.GID + "hidetype",
                      onSelected: this.HideAllEventsOfMyType
                    },
                    Object(L.d)(
                      "#EVentCalendar_Hide_EventType",
                      Object(L.d)(
                        "#EventCalendar_EventTypeGroup_" +
                          E.c.MapClanEventTypeToGroup(a.GetEventType())
                      )
                    )
                  )
                ),
                G.i.logged_in &&
                  (S.BIsEventBlocked(n)
                    ? r.push(
                        j.createElement(
                          Ge.d,
                          {
                            key: a.GID + "unmuteapp",
                            onSelected: this.OnUnMuteButton
                          },
                          j.createElement(
                            z.a,
                            {
                              toolTipContent: Object(L.d)(
                                "#EventCalendar_UnMuteApp_ttip"
                              )
                            },
                            Object(L.d)(
                              "#EventCalendar_UnMuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      )
                    : r.push(
                        j.createElement(
                          Ge.d,
                          {
                            key: a.GID + "muteapp",
                            onSelected: this.OnMuteButton
                          },
                          j.createElement(
                            z.a,
                            {
                              toolTipContent: Object(L.d)(
                                "#EventCalendar_MuteApp_ttip"
                              )
                            },
                            Object(L.d)(
                              "#EventCalendar_MuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      ),
                  n.appInfo &&
                    (w.a.BIsGameIgnored(n.appInfo.appid)
                      ? r.push(
                          j.createElement(
                            Ge.d,
                            {
                              key: a.GID + "unignoreapp",
                              onSelected: this.UnignoreAppButton
                            },
                            Object(L.d)(
                              "#EventCalendar_UnignoreApp",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      : r.push(
                          j.createElement(
                            Ge.d,
                            {
                              key: a.GID + "ignoreapp",
                              onSelected: this.IgnoreAppButton
                            },
                            j.createElement(
                              z.a,
                              {
                                toolTipContent: Object(L.d)(
                                  "#EventCalendar_IgnoreApp_ttip"
                                )
                              },
                              Object(L.d)(
                                "#EventCalendar_IgnoreApp",
                                this.props.calendarEvent.GetEntityName()
                              )
                            )
                          )
                        ))),
                s.BIsSingleSourceCalendar() ||
                  (a.appid
                    ? r.push(
                        j.createElement(
                          Ge.d,
                          { key: a.GID + "goto", onSelected: this.GotoAppID },
                          Object(L.d)(
                            "#EventCalendar_Goto_SpecificCalendar",
                            n.GetEntityName()
                          )
                        )
                      )
                    : r.push(
                        j.createElement(
                          Ge.d,
                          { key: a.GID + "goto", onSelected: this.GotoGroupID },
                          Object(L.d)(
                            "#EventCalendar_Goto_SpecificCalendar",
                            n.GetEntityName()
                          )
                        )
                      )),
                Object(Le.a)(j.createElement(Ge.c, null, r), e);
            }),
            (t.prototype.render = function() {
              return j.createElement(
                "div",
                {
                  className: Object(W.a)(we.a.FooterStat, we.a.Options),
                  onClick: this.CreateContextMenu
                },
                j.createElement(F.x, null)
              );
            }),
            Object(k.c)([Z.a], t.prototype, "OnMuteButton", null),
            Object(k.c)([Z.a], t.prototype, "OnUnMuteButton", null),
            Object(k.c)([Z.a], t.prototype, "IgnoreAppButton", null),
            Object(k.c)([Z.a], t.prototype, "UnignoreAppButton", null),
            Object(k.c)([Z.a], t.prototype, "HideAllEventsOfMyType", null),
            Object(k.c)([Z.a], t.prototype, "NoOp", null),
            Object(k.c)([Z.a], t.prototype, "AddContextMenuForSource", null),
            Object(k.c)([Z.a], t.prototype, "RemoveFromWishlist", null),
            Object(k.c)([Z.a], t.prototype, "AddToWishlist", null),
            Object(k.c)([Z.a], t.prototype, "GotoAppID", null),
            Object(k.c)([Z.a], t.prototype, "GotoGroupID", null),
            Object(k.c)([Z.a], t.prototype, "CreateContextMenu", null),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Be = Object(c.g)(Ne),
        Me = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bVideoPlayerReady: !1 }), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.OnFallbackClick = function(e) {
              u.b.RecordAppInteractionEvent(
                this.props.calendarEvent.appid,
                u.a.k_eClickThrough
              ),
                this.props.fnOnClicked(this.props.eventModel),
                e.stopPropagation(),
                e.preventDefault();
            }),
            (e.prototype.componentDidMount = function() {
              if (this.props.calendarEvent.clanInfo) {
                var e = O.a.InitFromClanID(
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
              var r = Object(me.d)(G.c.LANGUAGE),
                o =
                  $e() && 14 == this.props.eventModel.GetEventType()
                    ? he.c.full
                    : he.c.capsule_main,
                i = this.props.eventModel.GetImageForSizeAsArrayWithFallback(
                  "capsule",
                  r,
                  o
                );
              return j.createElement(Ce, {
                video: n,
                altImgWithFallback: i,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                imageClassnames: we.a.YoutubePreviewImage,
                onPlayerActivated: function() {
                  u.b.RecordAppInteractionEvent(
                    e.props.calendarEvent.appid,
                    u.a.k_ePlayedVideo
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
                o = A.a.Get(),
                i = a.GetEntityName(),
                s = a.GetGameCapsule(),
                l = Object(me.d)(G.c.LANGUAGE),
                c = t.has_live_stream,
                d = t.has_live_stream,
                p =
                  $e() && 14 == t.GetEventType()
                    ? he.c.full
                    : he.c.capsule_main,
                u = "capsule",
                m = t.BImageNeedScreenshotFallback(u, l),
                h = Boolean(m && t.appid)
                  ? t.GetFallbackArtworkScreenshot()
                  : t.GetImageURLWithFallback(u, l, p),
                v = this.getVideoPreviewControl(),
                _ = !v && !r,
                b = t.GetCategoryAsString(),
                g = we.a["EventType" + t.GetEventType()],
                y = t.GetAllTags().map(function(e) {
                  return we.a["Tag-" + e];
                }),
                E = W.a.apply(
                  void 0,
                  Object(k.g)(
                    [
                      we.a.TileContainer,
                      g,
                      c && we.a.TileVideoIcon,
                      n ? we.a.DisableHovers : we.a.EnableHovers,
                      this.state.bVideoPlayerReady && we.a.VideoPlayerReady,
                      v && we.a.HasVideo,
                      o.HasEventBeenRead(t.GID) && we.a.HasBeenRead,
                      r && we.a.MiniMode
                    ],
                    y
                  )
                ),
                S = t.GetNameWithFallback(l),
                f = t.GetSubTitleWithLanguageFallback(l),
                C = t.GetSummaryWithFallback(l);
              f === C && (C = void 0), f === S && (f = void 0);
              var O =
                  28 !== t.type &&
                  12 !== t.type &&
                  N.a.GetTimeNowWithOverride() <
                    t.GetStartTimeAndDateUnixSeconds(),
                I = j.createElement(
                  "div",
                  { className: we.a.CoverImageCtn },
                  v,
                  _ &&
                    j.createElement(
                      j.Fragment,
                      null,
                      12 === t.type &&
                        j.createElement(
                          "div",
                          { className: we.a.GameCapsuleCtn },
                          j.createElement("div", {
                            className: we.a.AppBannerLogo,
                            style: { backgroundImage: "url(" + s + ")" }
                          })
                        ),
                      12 !== t.type &&
                        j.createElement(
                          "div",
                          {
                            className: Object(W.a)(
                              we.a.EventCapsuleCtn,
                              c && we.a.LiveBroadcastPreview
                            )
                          },
                          j.createElement("div", {
                            className: Object(W.a)(
                              we.a.TileImage,
                              m && we.a.FallbackImage
                            ),
                            style: { backgroundImage: "url(" + h + ")" }
                          }),
                          c &&
                            j.createElement("div", {
                              className: we.a.TileCoverImagePlayable
                            }),
                          d &&
                            j.createElement(
                              "div",
                              { className: we.a.TileCoverLiveIcon },
                              Object(L.d)("#home_page_live_broadcast")
                            ),
                          c &&
                            j.createElement(
                              "div",
                              { className: "VideoHintText" },
                              Object(L.d)("#EventCalendar_WatchLiveBroadcast")
                            )
                        )
                    ),
                  j.createElement(
                    "div",
                    { className: we.a.EventSummary },
                    j.createElement(
                      "div",
                      { className: Object(W.a)(we.a.TileTextCategoryType, g) },
                      b
                    )
                  )
                ),
                T = n && 14 != t.GetEventType() && !v,
                w = T && I,
                D = !T && I;
              return j.createElement(
                "div",
                { className: E },
                j.createElement(ue, { event: t }),
                j.createElement(
                  Ie.c,
                  { eventModel: t, route: Ie.a.k_eView },
                  j.createElement(
                    "div",
                    { className: we.a.Tile, onClick: this.OnFallbackClick },
                    14 === t.type &&
                      j.createElement("div", {
                        className: Object(W.a)(
                          we.a.TileBackgroundImage,
                          m && we.a.FallbackImage
                        ),
                        style: { backgroundImage: "url(" + h + ")" }
                      }),
                    j.createElement(
                      "div",
                      { className: we.a.MainContentContainer },
                      j.createElement(
                        "div",
                        { className: we.a.TileTextContainer },
                        j.createElement(
                          "div",
                          { className: we.a.PatchIconCtn },
                          j.createElement(F.r, null)
                        ),
                        j.createElement(
                          "div",
                          { className: we.a.EventTitleCtn },
                          w,
                          j.createElement(xe, Object(k.a)({}, this.props)),
                          j.createElement(
                            "div",
                            { className: we.a.EventName },
                            S
                          ),
                          f &&
                            j.createElement(
                              "div",
                              { className: we.a.EventSubTitle },
                              f
                            ),
                          12 !== t.type &&
                            C &&
                            j.createElement(
                              "div",
                              { className: we.a.EventSummaryDefault },
                              C
                            ),
                          j.createElement(
                            "div",
                            { className: we.a.EventTypeAndDateCtn },
                            12 === t.type &&
                              j.createElement(
                                "div",
                                { className: we.a.SmallAppName },
                                i
                              ),
                            j.createElement(Re, { eventModel: t })
                          )
                        ),
                        O &&
                          j.createElement(
                            "div",
                            { className: we.a.ReminderContainer },
                            j.createElement(le.a, {
                              eventModel: t,
                              eventGID: t.GID,
                              lang: l,
                              bShowStartTime: !0
                            })
                          )
                      ),
                      D
                    )
                  )
                ),
                j.createElement(Pe, Object(k.a)({}, this.props))
              );
            }),
            Object(k.c)([Z.a], e.prototype, "OnFallbackClick", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        xe = function(e) {
          var t = e.eventModel,
            a = e.calendarEvent,
            n = e.bSuppressHoverEffects,
            r = a.GetEntityName(),
            o = a.GetGameIcon(),
            i = function(e) {
              Object(Ie.g)(t, Ie.a.k_eStoreOwnerPage),
                e.stopPropagation(),
                e.preventDefault();
            },
            s = n
              ? j.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      we.a.TileGameCapsule,
                      we.a.DisableHovers
                    ),
                    onClick: i
                  },
                  j.createElement("img", { className: we.a.AppIcon, src: o }),
                  j.createElement("div", { className: we.a.TileTextAppName }, r)
                )
              : j.createElement(
                  "div",
                  { onClick: i },
                  j.createElement(
                    De.b,
                    {
                      hoverClassName: Object(W.a)(
                        we.a.TileGameCapsule,
                        we.a.EnableHovers
                      ),
                      type: "app",
                      id: a.appid
                    },
                    j.createElement("img", { className: we.a.AppIcon, src: o }),
                    j.createElement(
                      "div",
                      { className: we.a.TileTextAppName },
                      r
                    )
                  )
                );
          return j.createElement(
            "div",
            { className: we.a.TileTextHeader },
            s,
            a.GetSource() === p.a.k_eRecommended &&
              j.createElement(
                "div",
                { className: we.a.SourceRecommended },
                Object(L.d)("#EventCalendar_GameSource_recommended_Verbose")
              )
          );
        },
        Re = Object(r.observer)(function(e) {
          var t = e.eventModel,
            a = e.calendarEvent,
            n = N.a.GetTimeNowWithOverride(),
            r = t ? t.GetStartTimeAndDateUnixSeconds() : a.start_time,
            o = t ? t.GetPostTimeAndDateUnixSeconds() : a.start_time,
            i = t && Object(Oe.a)(t.type) && t.GetEndTimeAndDateUnixSeconds();
          if (i && r < n && n < i) {
            var s = i - n,
              l = Object(L.n)(s, !0);
            return j.createElement(
              "div",
              { className: we.a.LiveText },
              j.createElement(
                ve.e,
                { rtFullDate: r, stylesmodule: we.a },
                j.createElement(
                  "div",
                  { className: we.a.LiveNow },
                  Object(L.d)("#EventCalendar_LiveNow")
                )
              ),
              j.createElement(
                ve.e,
                { rtFullDate: i, stylesmodule: we.a },
                Object(L.d)("#EventCalendar_TimeLeft", l)
              )
            );
          }
          if (r < n) {
            var c = n - r,
              d = c < 86400 ? Object(L.n)(c) : Object(L.m)(r),
              p = 3600 < Math.abs(r - o);
            return j.createElement(
              ve.e,
              { rtFullDate: r, stylesmodule: we.a },
              j.createElement(
                "div",
                { className: we.a.PastDateText },
                Object(L.d)(
                  p
                    ? "#EventCalendar_StartedAtTime"
                    : "#EventCalendar_PostedAtTime",
                  d
                )
              )
            );
          }
          var u = (s = r - n) < 86400;
          return j.createElement(
            ve.e,
            { rtFullDate: r, stylesmodule: we.a },
            j.createElement(
              "div",
              { className: we.a.FutureDateText },
              u
                ? Object(L.d)(
                    "#EventCalendar_WillStartAfterDuration",
                    Object(L.n)(s, !0)
                  )
                : Object(L.d)("#EventCalendar_WillStartAtTime", Object(L.m)(r))
            )
          );
        });
      var Pe = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.OnPerformVoteUp = function() {
              var e = this.props.eventModel,
                t = A.a.Get();
              !0 !== t.GetPreviouslyLoadedVote(this.props.eventModel) &&
                Object(se.a)(e, t) &&
                (t.Vote(e, !0, _.a.CancelToken.source()),
                u.b.RecordAppInteractionEvent(e.appid, u.a.k_eThumbsUp));
            }),
            (t.prototype.OnDiscussionClicked = function() {
              var e = this.props.eventModel;
              u.b.RecordAppInteractionEvent(e.appid, u.a.k_eDiscussions);
            }),
            (t.prototype.render = function() {
              var e = A.a.Get(),
                t = this.props.eventModel,
                a = Math.max(0, t.nVotesUp - t.nVotesDown),
                n = e.GetPreviouslyLoadedVote(this.props.eventModel),
                r = (function(e, t) {
                  return e.BIsUserLoggedIn()
                    ? G.i.is_limited
                      ? we.a.Vote_LimitedUser
                      : !0 === t
                      ? we.a.Vote_Positive
                      : !1 === t
                      ? we.a.Vote_Negative
                      : we.a.Vote_Ready
                    : we.a.Vote_NotLoggedIn;
                })(e, n),
                o =
                  (G.c.IN_CLIENT ? "steam://openurl/" : "") +
                  t.GetForumTopicURL(),
                i =
                  0 < t.live_stream_viewer_count
                    ? t.live_stream_viewer_count
                    : void 0;
              return j.createElement(
                "div",
                { className: we.a.Footer },
                j.createElement(
                  "div",
                  { className: we.a.FooterRightSide },
                  Boolean(i) &&
                    j.createElement(
                      "div",
                      { className: we.a.TileViewerCount },
                      i.toLocaleString(L.c.GetPreferredLocales())
                    ),
                  j.createElement(
                    "div",
                    {
                      className: Object(W.a)(we.a.FooterStat, we.a.Vote, r),
                      onClick: this.OnPerformVoteUp
                    },
                    j.createElement(F.C, { className: we.a.RateIcon }),
                    j.createElement("span", null, Number(a).toLocaleString())
                  ),
                  j.createElement(
                    "div",
                    { className: we.a.FooterStat },
                    j.createElement(
                      "a",
                      {
                        href: o,
                        className: we.a.CommentIconCtn,
                        target: "_blank",
                        onClick: this.OnDiscussionClicked
                      },
                      j.createElement(F.e, { className: we.a.CommentIcon }),
                      j.createElement(
                        "span",
                        null,
                        Number(t.nCommentCount).toLocaleString()
                      )
                    )
                  ),
                  j.createElement(Be, Object(k.a)({}, this.props))
                )
              );
            }),
            Object(k.c)([Z.a], t.prototype, "OnPerformVoteUp", null),
            Object(k.c)([Z.a], t.prototype, "OnDiscussionClicked", null),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        He = Object(r.observer)(function(t) {
          var e = t.calendarEvent,
            a = we.a["EventType" + e.event_type],
            n = Object(W.a)(we.a.TileContainer, a);
          return j.createElement(
            ie.a,
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
                  var e = O.a.InitFromClanID(t.calendarEvent.clanInfo.clanid);
                  g.a.LoadOGGClanInfoForClanSteamID(e);
                }
              },
              topOffset: "-500px",
              bottomOffset: "-500px"
            },
            j.createElement(
              "div",
              { className: n },
              j.createElement("div", { className: we.a.Tile }),
              j.createElement("div", { className: we.a.Footer })
            )
          );
        }),
        Fe = Object(r.observer)(function(e) {
          var t = e.partnerEventStore,
            a = e.calendarEvent,
            n = Object(k.f)(e, ["partnerEventStore", "calendarEvent"]),
            r = t.GetClanEventModel(a.unique_id);
          return r
            ? j.createElement(
                Me,
                Object(k.a)({ eventModel: r, calendarEvent: a }, n)
              )
            : j.createElement(He, { calendarEvent: a, partnerEventStore: t });
        }),
        ze = a("UWWC"),
        Ue = a("yJqL"),
        We = a("xnZ7"),
        Ve = a.n(We),
        Ze = a("qD+2"),
        Ye = a("JJA/"),
        qe = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoading: !1, eventModel: e.props.eventModel }),
              (e.m_refParent = j.createRef()),
              e
            );
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.state.eventModel ||
                this.setState({ bLoading: !0 }, this.LoadEvent);
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.add(Ye.BodyNoScroll);
            }),
            (e.prototype.componentWillUnmount = function() {
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.remove(Ye.BodyNoScroll);
            }),
            (e.prototype.GetBodyElement = function() {
              return this.m_refParent.current
                ? this.m_refParent.current.closest("body")
                : null;
            }),
            (e.prototype.LoadEvent = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r = this;
                return Object(k.e)(this, function(e) {
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
                        var t = Object(y.a)(e);
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(k.e)(this, function(e) {
                  return (
                    (t = this.state.eventModel),
                    (a = this.props.trackingLocation),
                    t &&
                      t.BIsPartnerEvent() &&
                      A.a
                        .Get()
                        .GetTracker()
                        .MarkEventRead(
                          t.GID,
                          t.clanSteamID.GetAccountID(),
                          a
                        ) &&
                      A.a
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
                return j.createElement(
                  Ae.g,
                  null,
                  j.createElement(
                    "div",
                    { className: Ve.a.FlexCenter, style: { height: "400px" } },
                    j.createElement(oe.a, null)
                  )
                );
              var e = this.props,
                t = e.classname,
                a = e.partnerEventStore,
                n = e.bPrimaryPageFeature;
              if (this.state.eventModel) {
                var r = j.createElement(
                  "div",
                  null,
                  j.createElement(Ue.a, {
                    location: Ue.b.AppDetails,
                    initialEvent: this.state.eventModel,
                    partnerEventStore: a,
                    emoticonStore: ze.b,
                    appInfoStore: Ze.a,
                    closeFn: !n && this.props.closeModal,
                    showAppHeader: this.props.showAppHeader
                  })
                );
                return n ? r : j.createElement(Ae.g, { className: t }, r);
              }
              return null;
            }),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Je = a("BFsE"),
        Qe = "global_header";
      function Ke() {
        var e = document.getElementById(Qe);
        if (e && "none" != getComputedStyle(e).display) return e;
        var t = document.getElementsByClassName("responsive_header");
        return (
          Object(h.a)(t.length <= 1, "Must have at most one responsive_header"),
          1 != t.length ? null : t[0]
        );
      }
      function Xe() {
        var e = Ke();
        return e && e.id != Qe;
      }
      function $e() {
        return window.innerWidth < parseInt(X.a.strMaxMobileWidth);
      }
      function et() {
        return (
          Xe() ||
          window.innerWidth <
            parseInt(X.a.strDesktopControlBarWidth) +
              parseInt(X.a.strMaxMobileWidth)
        );
      }
      function tt() {
        var e = Xe(),
          t = $e(),
          a = 0;
        return (
          Ke() &&
            (a = parseInt(
              e
                ? X.a.strMobileGlobalHeaderHeight
                : X.a.strDesktopGlobalHeaderHeight
            )),
          {
            nGlobalHeaderHeight: a,
            nSteamLabsBannerHeight: parseInt(
              e ? X.a.strMobileLabsBannerHeight : X.a.strDesktopLabsBannerHeight
            ),
            nGroupHeaderHeight: parseInt(
              t
                ? X.a.strMobileGroupHeaderHeight
                : X.a.strDesktopGroupHeaderHeight
            )
          }
        );
      }
      var at,
        nt,
        rt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = Object(k.a)(
                {
                  bUserIsLoggedIn: G.i.logged_in,
                  bShowFutureViewOnly: !1,
                  nVisibleHeight: 0,
                  nScrollTop: null,
                  bControlBarIsCollapsed: et(),
                  bControlBarWasOpenedByUser: !1,
                  nDisappearingHeaderTop: 0
                },
                tt()
              )),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              (e.m_nForcedScrollPosition = null),
              (e.m_nInitialScrollPosition = null),
              (e.m_refDiv = j.createRef()),
              (e.k_nMaxScrollErrorInPixels = 2),
              e
            );
          }
          var n;
          return (
            Object(k.d)(e, t),
            ((n = e).prototype.componentDidMount = function() {
              this.InitEventCalendarStore(),
                this.UpdateDocumentUI(),
                window.addEventListener("resize", this.OnResize),
                window.addEventListener("scroll", this.OnScroll),
                this.setState({
                  nVisibleHeight: window.innerHeight,
                  bShowFutureViewOnly: this.BStartInFutureView()
                });
            }),
            (e.prototype.componentDidUpdate = function(e, t) {
              (t.bUserIsLoggedIn == this.state.bUserIsLoggedIn &&
                JSON.stringify(e.filter_to_appids) ==
                  JSON.stringify(this.props.filter_to_appids) &&
                JSON.stringify(e.filter_to_clanids) ==
                  JSON.stringify(this.props.filter_to_clanids) &&
                e.filter_to_collection === this.props.filter_to_collection) ||
                this.InitEventCalendarStore(),
                this.UpdateDocumentUI();
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("component unmounted"),
                window.removeEventListener("resize", this.OnResize),
                window.removeEventListener("scroll", this.OnScroll);
            }),
            (e.prototype.BStartInFutureView = function() {
              var e = s.a.parse(this.props.location.search.substring(1))
                .upcoming;
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
                ? Object(L.d)("#EventCalendar_TabTitle_GroupHub", e)
                : Object(L.d)("#EventCalendar_TabTitle_Global");
              document.title != o && (document.title = o),
                document.body.classList.contains("events_hub") ||
                  document.body.classList.add("events_hub");
            }),
            (e.prototype.OnResize = function() {
              this.setState(function(e) {
                var t = window.innerHeight,
                  a = !e.bControlBarWasOpenedByUser && et(),
                  n = tt();
                return Object(
                  k.a
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
                      r = Ke();
                    return (
                      r && (r.style.transform = "translateY(" + n + "px)"),
                      { nScrollTop: i, nDisappearingHeaderTop: n }
                    );
                  });
            }),
            (e.prototype.InitEventCalendarStore = function() {
              var e = n.m_bInitialLoad;
              if (this.state.bUserIsLoggedIn || !this.BRequireLoggedInUser()) {
                C({
                  appids: this.props.filter_to_appids,
                  clanaccountids: this.props.filter_to_clanids,
                  collectionid: this.props.filter_to_collection
                });
                var t = B(),
                  a = Object(G.f)("initialEvents", "application_config");
                a && n.m_bInitialLoad
                  ? (t.RegisterCalendarEventsAndModels(a),
                    (n.m_bInitialLoad = !1))
                  : t.RegisterCalendarEventsAndModels({ success: 1 }),
                  t.BIsSingleSourceCalendar() &&
                    (t.BIsSingleAppCalendar()
                      ? b.a
                          .GetStoreCapsuleInfo(t.GetSingleAppID())
                          .HintLoadBroadcastAppData()
                      : g.a.LoadOGGClanInfoForClanSteamID(
                          O.a.InitFromClanID(t.GetSingleGroupID())
                        ));
              }
              e &&
                E.c.InitializeCheckboxes(
                  this.state.bUserIsLoggedIn && G.i.accountid
                );
            }),
            (e.prototype.ToggleControlBarCollapsed = function() {
              this.setState(function(e) {
                var t = !e.bControlBarIsCollapsed,
                  a = e.bControlBarIsCollapsed,
                  n = t ? e.nDisappearingHeaderTop : 0,
                  r = Ke();
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
              var e = Ke();
              e &&
                (e.style.transform =
                  "translateY(" + this.state.nDisappearingHeaderTop + "px)"),
                this.setState({ modalEvent: null });
            }),
            (e.prototype.OnEventClicked = function(e) {
              A.a.Get().RecordEventRead(e, 8);
              var t =
                  this.state.nGlobalHeaderHeight +
                  this.state.nSteamLabsBannerHeight,
                a = Ke();
              if (
                (a && (a.style.transform = "translateY(" + -1 * t + "px)"),
                N.a.bOpenEventLandingPage)
              ) {
                var n = "/newshub/app/" + e.appid + "/view/" + e.GID;
                this.props.history.push(n);
              } else this.setState({ modalEvent: e });
            }),
            (e.prototype.ToggleFutureView = function() {
              this.setState(function(e) {
                return { bShowFutureViewOnly: !e.bShowFutureViewOnly };
              });
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
                  this.state.nVisibleHeight <= parseInt(X.a.strMinMobileHeight)
                    ? 0
                    : this.state.nDisappearingHeaderTop + e;
              return j.createElement(
                j.Fragment,
                null,
                j.createElement(
                  R.a,
                  null,
                  j.createElement(lt, { nTopOffset: a })
                ),
                j.createElement(
                  "div",
                  { ref: this.m_refDiv, className: X.a.EventCalendarContainer },
                  j.createElement(
                    R.a,
                    null,
                    this.state.modalEvent
                      ? j.createElement(qe, {
                          classname: X.a.StoreHeaderAdjust,
                          appid: this.state.modalEvent.appid,
                          trackingLocation: 0,
                          announcementGID: this.state.modalEvent.GetAnnouncementGID(),
                          partnerEventStore: T.c,
                          eventModel: this.state.modalEvent,
                          showAppHeader: !0,
                          closeModal: this.CloseEventModal
                        })
                      : null
                  ),
                  j.createElement(
                    R.a,
                    null,
                    j.createElement(re, {
                      bUserIsLoggedIn: this.state.bUserIsLoggedIn,
                      nDisappearingHeaderVisibleHeight: n,
                      nGlobalHeaderTop: t,
                      nVisibleHeight: this.state.nVisibleHeight,
                      bIsCollapsed: this.state.bControlBarIsCollapsed,
                      bShouldIncludeLegalFooter: !Xe(),
                      fnToggleCollapsed: this.ToggleControlBarCollapsed,
                      fnOnFilterChange: this.OnControlBarChange
                    })
                  ),
                  Boolean(
                    !this.BRequireLoggedInUser() || this.state.bUserIsLoggedIn
                  )
                    ? j.createElement(
                        R.a,
                        null,
                        j.createElement(ct, {
                          bShowFutureViewOnly: this.state.bShowFutureViewOnly,
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
                    : j.createElement(
                        R.a,
                        null,
                        j.createElement(
                          "div",
                          { className: X.a.LoginPrompt },
                          Object(L.d)("#EventCalendar_MainLoginPrompt"),
                          j.createElement(
                            "button",
                            { onClick: Je.a, className: X.a.LoginButton },
                            Object(L.d)("#Login_SignIn")
                          )
                        )
                      )
                )
              );
            }),
            (e.m_bInitialLoad = !0),
            Object(k.c)([Z.a], e.prototype, "OnResize", null),
            Object(k.c)([Z.a], e.prototype, "SetInitialScrollTop", null),
            Object(k.c)([Z.a], e.prototype, "ScrollToInitialPosition", null),
            Object(k.c)([Z.a], e.prototype, "OnScroll", null),
            Object(k.c)([Z.a], e.prototype, "ToggleControlBarCollapsed", null),
            Object(k.c)([Z.a], e.prototype, "OnControlBarChange", null),
            Object(k.c)([Z.a], e.prototype, "CloseEventModal", null),
            Object(k.c)([Z.a], e.prototype, "OnEventClicked", null),
            Object(k.c)([Z.a], e.prototype, "ToggleFutureView", null),
            (e = n = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        ot = Object(c.g)(rt),
        it = G.c.STORE_BASE_URL + "labs",
        st = G.c.COMMUNITY_BASE_URL + "groups/SteamLabs/discussions/11/",
        lt = function(e) {
          return j.createElement(
            "div",
            {
              style: { transform: "translateY(" + e.nTopOffset + "px)" },
              className: X.a.SteamLabsBanner
            },
            j.createElement(
              "div",
              { className: X.a.SteamLabsBannerCtn },
              j.createElement(
                "div",
                { className: X.a.SteamLabsIdentifiers },
                j.createElement(
                  "a",
                  {
                    className: X.a.SteamLabsName,
                    href: (G.c.IN_CLIENT ? "steam://openurl/" : "") + it,
                    target: G.c.IN_CLIENT ? void 0 : "_blank"
                  },
                  Object(L.d)("#SteamLabs")
                ),
                j.createElement(
                  "div",
                  { className: X.a.SteamLabsNumber },
                  Object(L.d)("#SteamLabs_ExperimentNumber", "009")
                )
              ),
              j.createElement(
                "a",
                {
                  className: X.a.SteamLabsButton,
                  href: (G.c.IN_CLIENT ? "steam://openurl/" : "") + st,
                  target: G.c.IN_CLIENT ? void 0 : "_blank"
                },
                Object(L.d)("#SteamLabs_DiscussionLink")
              )
            )
          );
        },
        ct = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.GetCurrentSectionLayout = function() {
              var t =
                this.props.nDisappearingHeaderHeight +
                parseInt(X.a.strEndOfRowsHeight);
              return B()
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
              if (e.bIsFutureSection && !N.a.bEnableNewsHubMayUpdate) {
                var a = Math.max(
                  0,
                  t +
                    parseInt(X.a.strEndOfRowsHeight) -
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
                C = e.fnOnSeeFutureClick,
                t = e.nVisibleHeight,
                O = e.nScrollTop,
                I = e.nDisappearingHeaderVisibleHeight,
                T = e.nGroupHeaderHeight,
                a = e.bSaveSpaceForControlBar;
              if (0 == B().GetCalendarSections(S).length) return null;
              var w = $e(),
                D = O + I,
                k = O + t,
                A = !0,
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
                    p = Math.max(0, D - r),
                    u = Math.max(0, n - k),
                    m = E.props.nVisibleHeight > Math.max(p, u),
                    h = n < D,
                    v = r - O - T,
                    _ = h ? Math.min(I, v) : 0,
                    b = r - D < 75,
                    g = N.a.bEnableNewsHubMayUpdate
                      ? Object(W.a)(X.a.PastSection, A && X.a.DarkerBackground)
                      : Object(W.a)(
                          c ? X.a.FutureSection : X.a.PastSection,
                          A && X.a.DarkerBackground
                        );
                  0 < d && (A = !A);
                  var y = N.a.bEnableNewsHubMayUpdate && !S && c;
                  return j.createElement(
                    pt,
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
                      fnOnSeeFutureClick: C,
                      bIsFutureSection: c && !N.a.bEnableNewsHubMayUpdate,
                      bIsNearBottom: b,
                      nInitialHeight: d,
                      fnReportHeight: function(e) {
                        return E.RecordSectionRenderedHeight(a, e);
                      },
                      fnOnEventClick: f,
                      bSuppressHoverEffects: w
                    },
                    " "
                  );
                }),
                r =
                  S || N.a.bEnableNewsHubMayUpdate
                    ? null
                    : j.createElement(
                        "div",
                        {
                          key: "no-more-future-events",
                          className: Object(W.a)(
                            X.a.EndOfRows,
                            X.a.CalendarRow,
                            X.a.FutureSection,
                            X.a.Visible
                          )
                        },
                        j.createElement(
                          "div",
                          { className: X.a.NoMoreRows },
                          B().BMayHaveAnyVisibleFutureEvents() &&
                            Object(L.d)("#EventCalendar_NoMoreFutureEvents")
                        )
                      ),
                o = S ? B().BHitForwardHorizon() : B().BHitBackwardHorizon(),
                i = j.createElement(
                  "div",
                  {
                    key: "no-more-events",
                    className: Object(W.a)(
                      X.a.EndOfRows,
                      X.a.CalendarRow,
                      o && X.a.Visible
                    )
                  },
                  j.createElement(
                    "div",
                    { className: X.a.NoMoreRows },
                    " ",
                    Object(L.d)(
                      S
                        ? "#EventCalendar_NoMoreFutureEvents"
                        : "#EventCalendar_NoMorePastEvents"
                    ),
                    " "
                  )
                );
              return j.createElement(
                "div",
                {
                  className: Object(W.a)(
                    X.a.RowContainer,
                    a && X.a.WideLeftGutter
                  )
                },
                j.createElement(
                  "div",
                  { className: X.a.Rows },
                  j.createElement("div", {
                    className: Object(W.a)(
                      X.a.DisappearingHeaderSpacer,
                      X.a.FutureSection
                    ),
                    key: "spacer"
                  }),
                  r,
                  n,
                  i
                )
              );
            }),
            Object(k.c)(
              [Z.a],
              t.prototype,
              "RecordSectionRenderedHeight",
              null
            ),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        dt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.rgCalendarItems,
                a = e.fnOnEventClick,
                n = e.bSuppressHoverEffects;
              return t && 0 != t.length
                ? j.createElement(
                    "div",
                    { className: X.a.CalendarRow },
                    j.createElement(
                      "div",
                      { className: X.a.HorizontalTileContainer },
                      j.createElement(
                        "div",
                        { className: X.a.HorizontalTiles },
                        t.map(function(e) {
                          return j.createElement(Fe, {
                            key: "ht-" + e.unique_id,
                            calendarEvent: e,
                            partnerEventStore: T.c,
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
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        pt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_ref = j.createRef()), (e.bNeedToReportHeight = !1), e;
          }
          return (
            Object(k.d)(e, t),
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
                  B().GetCalendarItemsInTimeRange(
                    Object(o.a)(function() {
                      return e.props.rtSectionStart;
                    }),
                    Object(o.a)(function() {
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
                c = e.bIsNearBottom,
                d = e.nInitialHeight,
                p = e.fnOnEventClick,
                u = e.bSuppressHoverEffects;
              if (!t)
                return j.createElement(
                  "div",
                  {
                    ref: this.m_ref,
                    style: { minHeight: d + "px" },
                    className: o
                  },
                  " "
                );
              var m = this.cachedCalendarItems,
                h = m.rgCalendarItems,
                v = m.bIsComplete;
              if (0 == h.length && v)
                return j.createElement("div", {
                  ref: this.m_ref,
                  className: o
                });
              var _ = l && c,
                b = j.createElement(
                  "div",
                  {
                    style: { top: n },
                    className: Object(W.a)(
                      X.a.GroupHeader,
                      X.a.CalendarRow,
                      a && X.a.HeaderAtTop,
                      _ && X.a.FutureHint
                    )
                  },
                  j.createElement(
                    "div",
                    { className: X.a.GroupHeaderTitle },
                    j.createElement(
                      "span",
                      null,
                      " ",
                      _ ? Object(L.d)("#EventCalendar_FutureEventsHint") : r,
                      " "
                    ),
                    i &&
                      j.createElement(
                        "div",
                        { className: X.a.SeeAllLink, onClick: s },
                        Object(L.d)("#EventCalendar_FutureEventsLink"),
                        j.createElement(
                          "span",
                          { className: X.a.SeeAllCount },
                          h.length + (v ? "" : "+")
                        )
                      )
                  )
                ),
                g = i
                  ? j.createElement(dt, {
                      rgCalendarItems: h.slice(-3).reverse(),
                      fnOnEventClick: p,
                      bSuppressHoverEffects: u
                    })
                  : h.map(function(e) {
                      return j.createElement(
                        "div",
                        { key: e.unique_id, className: X.a.CalendarRow },
                        j.createElement(Fe, {
                          calendarEvent: e,
                          partnerEventStore: T.c,
                          fnOnClicked: p,
                          bSuppressHoverEffects: u
                        })
                      );
                    });
              return j.createElement(
                "div",
                { ref: this.m_ref, className: o },
                !l || v
                  ? null
                  : j.createElement(oe.a, {
                      size: "xlarge",
                      position: "center"
                    }),
                b,
                g,
                l || v
                  ? null
                  : j.createElement(oe.a, {
                      size: "xlarge",
                      position: "center"
                    })
              );
            }),
            Object(k.c)([m.computed], e.prototype, "cachedCalendarItems", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        ut = a("AXHe"),
        mt = a("Cs6D"),
        ht = a("3+zv");
      ((nt = at || (at = {}))[(nt.k_ModReviewed = 0)] = "k_ModReviewed"),
        (nt[(nt.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
        (nt[(nt.k_ChangeEventType = 2)] = "k_ChangeEventType"),
        (nt[(nt.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
        (nt[(nt.k_ModReReviewed = 4)] = "k_ModReReviewed");
      var vt = "ModAct",
        _t = (function() {
          function e() {}
          return (
            (e.prototype.ToModString = function() {
              var e =
                vt +
                "_" +
                this.m_moderator +
                "_" +
                Math.floor(this.m_rtWhen) +
                "_" +
                this.m_action;
              switch (this.m_action) {
                case at.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case at.k_UpdateSeasonTags:
                  e += "_" + this.m_newTagAdded;
              }
              return e;
            }),
            (e.prototype.FromString = function(e) {
              var t = e.split("_");
              if (!t || t[0] !== vt) return !1;
              switch (
                ((this.m_moderator = Number(t[1])),
                (this.m_rtWhen = Number(t[2])),
                (this.m_action = Number(t[3])),
                this.m_action)
              ) {
                case at.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case at.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function(e) {
              return (
                (this.m_moderator = G.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = at.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function(e) {
              return (
                (this.m_moderator = G.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? at.k_ModReviewed : at.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function(e) {
              return (
                (this.m_moderator = G.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? at.k_ModReReviewed : at.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function(e) {
              return e.startsWith(vt);
            }),
            (e.prototype.SetUpdateSeasonalTags = function(e) {
              return (
                (this.m_moderator = G.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = at.k_UpdateSeasonTags),
                (this.m_newTagAdded = e),
                this
              );
            }),
            e
          );
        })(),
        bt = new ((function() {
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
                Object(k.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n = this;
                  return Object(k.e)(this, function(e) {
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
                Object(k.b)(this, void 0, void 0, function() {
                  var t, a, n;
                  return Object(k.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t =
                            G.c.STORE_BASE_URL +
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          G.c.STORE_BASE_URL + "events_admin/ajaxupdatetags"),
                        (a = s.join(",")),
                        c &&
                          (0 < s.length && (a += ","), (a += c.ToModString())),
                        (n = new FormData()).append("sessionid", G.c.SESSIONID),
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          G.c.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (a = new FormData()).append("sessionid", G.c.SESSIONID),
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
            Object(k.c)(
              [m.observable],
              e.prototype,
              "m_mapEventGIDToSolrData",
              void 0
            ),
            Object(k.c)([m.observable], e.prototype, "m_listEvents", void 0),
            Object(k.c)([m.action], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })())(),
        gt = a("Qcoi"),
        yt = a("T27q"),
        Et = a("BpzF"),
        St = a("fpVW"),
        ft = a.n(St),
        Ct = a("UxvL"),
        Ot = a("E9gz"),
        It = a("dsx8"),
        Tt = a("f0Wu"),
        wt = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0
        },
        Dt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = _.a.CancelToken.source()),
              (e.m_refScroll = j.createRef()),
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
            Object(k.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.setState(
                { bInfiniteScrollLoading: !0 },
                this.LoadMoreModerationEvents
              ),
                window.addEventListener("scroll", this.OnScroll, !0);
              var e = s.a.parse(
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
                  n = [{ label: Object(Oe.b)(r), value: r }];
                }
              } else
                e.excludedTags &&
                  ((n = []),
                  e.excludedTags.forEach(function(e) {
                    var t = Number.parseInt(e);
                    n.push({ label: Object(Oe.b)(t), value: t });
                  }));
              var o = void 0;
              "string" == typeof e.filterDate &&
                0 < e.filterDate.length &&
                (o = Tt.unix(Number(e.filterDate)));
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
                        s.a.stringify({
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
              var t = Object(y.a)(e);
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
              return Object(k.b)(this, void 0, void 0, function() {
                return Object(k.e)(this, function(e) {
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
                bt.LoadPartnerEventForModerationIncremental(
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
                bt.GetAllSolrEvents().forEach(function(e) {
                  t.push(
                    j.createElement(At, { solrData: e, key: e.unique_id })
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
              (this.m_nPage = 0), bt.ClearAllSolrEvents();
            }),
            (e.prototype.OnDateChange = function(e) {
              if ("string" == typeof e) {
                var t = Tt(e, "M/D/YYYY", !0);
                if (!t.isValid())
                  return void this.setState({ filterDateAsString: e });
                e = t;
              }
              this.state.filterDate != e &&
                (this.ClearPreviousData(),
                this.setState(
                  Object(k.a)(
                    { filterDateAsString: void 0, filterDate: e },
                    wt
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                ));
            }),
            (e.prototype.IsValidDate = function(e) {
              var t = new Date();
              return (
                e.unix() <
                Tt.unix(t.getTime() / 1e3 + 86400)
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
                  Object(k.a)({ selectedTags: e }, wt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventExcludeTags = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(k.a)({ excludedTags: e }, wt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventTypeFilter = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(k.a)({ filterEventTypes: e }, wt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnVisibilityStartTimeChange = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(k.a)(
                    { bOrderByVisibilityStartTime: e.currentTarget.checked },
                    wt
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.render = function() {
              var e = this.RenderTiles(),
                t = V.c.map(function(e) {
                  return { value: e, label: Object(Oe.b)(e) };
                }),
                a = ht.a.map(function(e) {
                  return { value: e, label: e };
                }),
                n = {
                  option: function(e) {
                    return Object(k.a)(Object(k.a)({}, e), {
                      color: "#444444"
                    });
                  }
                };
              return j.createElement(
                "div",
                { className: Ot.ModerationContainer, ref: this.m_refScroll },
                j.createElement(
                  "div",
                  null,
                  j.createElement(
                    "h2",
                    null,
                    Object(L.d)("#EventModeration_Title")
                  ),
                  j.createElement(
                    R.a,
                    null,
                    j.createElement(
                      "div",
                      { className: Object(W.a)(ft.a.FlexRowContainer) },
                      j.createElement(
                        "div",
                        { className: Ot.FilterContainer },
                        j.createElement(
                          "span",
                          null,
                          Object(L.d)("#EventModeration_FilterByTag")
                        ),
                        j.createElement(mt.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventSelectedTags,
                          value: this.state.selectedTags,
                          options: a,
                          styles: n
                        })
                      ),
                      j.createElement(
                        "div",
                        { className: Ot.FilterContainer },
                        j.createElement(
                          "span",
                          null,
                          Object(L.d)("#EventModeration_FilterExcludeByTag")
                        ),
                        j.createElement(mt.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventExcludeTags,
                          value: this.state.excludedTags,
                          options: a,
                          styles: n
                        })
                      ),
                      j.createElement(
                        "div",
                        { className: Ot.FilterContainer },
                        j.createElement(
                          "span",
                          null,
                          Object(L.d)("#EventModeration_FilterToType")
                        ),
                        j.createElement(mt.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventTypeFilter,
                          value: this.state.filterEventTypes,
                          options: t,
                          styles: n
                        })
                      ),
                      j.createElement(
                        "div",
                        { className: Ot.FilterContainer },
                        j.createElement(
                          "span",
                          null,
                          Object(L.d)("#EventModeration_FilterToDate")
                        ),
                        j.createElement(ut, {
                          onChange: this.OnDateChange,
                          timeFormat: !1,
                          value: this.state.filterDate,
                          isValidDate: this.IsValidDate,
                          inputProps: {
                            placeholder: Object(L.d)(
                              "#EventModeration_PickDatee"
                            ),
                            className: Ot.TimeWidth
                          }
                        })
                      ),
                      j.createElement(
                        "div",
                        { className: Ot.FilterContainer },
                        j.createElement(
                          "label",
                          { htmlFor: "EventPerLoad" },
                          Object(L.d)("#EventModeration_PerPageLoad")
                        ),
                        j.createElement(
                          "div",
                          null,
                          j.createElement("input", {
                            type: "number",
                            id: "EventPerLoad",
                            min: "10",
                            max: "5000",
                            value: this.state.eventsToLoadPerPaging,
                            onChange: this.OnEventPerPageLoad
                          })
                        )
                      ),
                      j.createElement(
                        "div",
                        { className: Ot.FilterContainer },
                        j.createElement("input", {
                          type: "checkbox",
                          id: "VisibilityStart",
                          checked: this.state.bOrderByVisibilityStartTime,
                          onChange: this.OnVisibilityStartTimeChange
                        }),
                        j.createElement(
                          "label",
                          { htmlFor: "VisibilityStart" },
                          Object(L.d)("#EventModeration_OrderByFirstVisible")
                        )
                      )
                    )
                  )
                ),
                j.createElement(R.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  j.createElement(oe.a, {
                    position: "center",
                    size: "medium",
                    string: Object(L.d)("#Loading")
                  })
              );
            }),
            Object(k.c)([Z.a], e.prototype, "HandleError", null),
            Object(k.c)(
              [Z.a],
              e.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(k.c)([Z.a], e.prototype, "LoadMoreModerationEvents", null),
            Object(k.c)(
              [Z.a],
              e.prototype,
              "UpdateQueryParametersAndLoadMoreEvents",
              null
            ),
            Object(k.c)([Z.a], e.prototype, "OnScroll", null),
            Object(k.c)([Z.a], e.prototype, "OnDateChange", null),
            Object(k.c)([Z.a], e.prototype, "IsValidDate", null),
            Object(k.c)([Z.a], e.prototype, "OnEventPerPageLoad", null),
            Object(k.c)([Z.a], e.prototype, "OnChangeEventSelectedTags", null),
            Object(k.c)([Z.a], e.prototype, "OnChangeEventExcludeTags", null),
            Object(k.c)([Z.a], e.prototype, "OnChangeEventTypeFilter", null),
            Object(k.c)(
              [Z.a],
              e.prototype,
              "OnVisibilityStartTimeChange",
              null
            ),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        kt = Object(c.g)(Dt),
        At = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingEvent: !T.c.BHasClanEventModel(
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
            Object(k.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var a = this,
                e = this.props.solrData,
                t = e.unique_id;
              if (!T.c.BHasClanEventModel(t)) {
                var n = Date.now() / 1e3;
                T.c
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new O.a(e.clan_steamid),
                    t,
                    n
                  )
                  .then(function() {
                    return a.setState({ bLoadingEvent: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(y.a)(e);
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
                T.c.BHasClanEventModel(e) &&
                this.setState({ bShowAsModal: !0 });
            }),
            (e.prototype.HideModalEvent = function() {
              this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
            }),
            (e.prototype.OnModeratedChanged = function(e) {
              if (!this.state.bSavingModeration) {
                var t = this.props.solrData.unique_id,
                  a = T.c.GetClanEventModel(t),
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, s, l, c, d;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props.solrData),
                        (a = t.unique_id),
                        (n = T.c.GetClanEventModel(a)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (r = new Array()),
                        (o = new Array()),
                        (i =
                          n.BHasTag("mod_reviewed") &&
                          !n.BHasTag("mod_require_rereview")),
                        (s = new _t().SetReviewAction(!i)),
                        i
                          ? r.push("mod_require_rereview")
                          : (r.push("mod_reviewed"),
                            o.push("mod_require_rereview"),
                            n.BHasTag("mod_require_rereview") &&
                              s.SetReReviewAction(!i)),
                        [
                          4,
                          bt.UpdateTagsOnPartnerEvent(
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
                        (d = Object(y.a)(c)),
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
                a = T.c.GetClanEventModel(t.unique_id);
              Object(ke.d)(
                j.createElement(Mt, { eventModel: a }),
                Object(je.m)(e)
              );
            }),
            (e.prototype.OnUpdateSeasonalTag = function(e) {
              var t = this.props.solrData,
                a = T.c.GetClanEventModel(t.unique_id);
              Object(ke.d)(
                j.createElement(Rt, { eventModel: a }),
                Object(je.m)(e)
              );
            }),
            (e.prototype.render = function() {
              var e,
                t = this.props.solrData,
                a = t.unique_id,
                n = Number(t.appid),
                r = Object(V.e)(G.c.LANGUAGE),
                o = T.c.GetClanEventModel(a);
              if (o) {
                if (this.state.bShowAsModal)
                  return j.createElement(
                    Ae.g,
                    { className: It.StoreHeaderAdjust },
                    j.createElement(
                      "div",
                      null,
                      j.createElement(yt.a, {
                        event: o,
                        fnClose: this.HideModalEvent
                      })
                    )
                  );
                var i = o.GetImageForSizeAsArrayWithFallback(
                    "capsule",
                    r,
                    he.c.capsule_main
                  ),
                  s = o.BImageNeedScreenshotFallback("capsule", r);
                e =
                  0 < i.length
                    ? j.createElement(
                        j.Fragment,
                        null,
                        j.createElement(Ct.a, { rgSources: i }),
                        s &&
                          j.createElement(
                            "div",
                            { className: Ot.NoCapsule },
                            Object(L.d)("#EventModTile_FallbackImageText")
                          )
                      )
                    : j.createElement(
                        "div",
                        { className: Ot.NoCapsule },
                        Object(L.d)("#EventModTile_NoCapsule")
                      );
              } else e = Object(L.d)("#Loading");
              var l = t.hidden
                  ? t.published
                    ? Object(L.d)("#EVentModTile_State_Staged")
                    : Object(L.d)("#EVentModTile_State_Draft")
                  : Object(L.d)("#EVentModTile_State_Published"),
                c = o ? o.type : Number(t.event_type);
              return j.createElement(
                R.a,
                null,
                j.createElement(
                  "div",
                  { className: Ot.Tile },
                  j.createElement(
                    "div",
                    { className: Ot.TileCapsule, onClick: this.ShowModalEvent },
                    e
                  ),
                  j.createElement(
                    "div",
                    { className: Ot.TileDetails },
                    j.createElement(
                      "div",
                      { className: Ot.DetailsLeft },
                      j.createElement("div", null, l),
                      j.createElement(
                        "a",
                        {
                          href:
                            (G.c.IN_CLIENT ? "steam://openurl/" : "") +
                            G.c.COMMUNITY_BASE_URL +
                            "ogg/" +
                            n +
                            "/announcements/detail/" +
                            t.announcement_gid,
                          target: G.c.IN_CLIENT ? void 0 : "_blank",
                          className: Ot.EventTitle
                        },
                        t.event_name
                      ),
                      j.createElement(
                        "div",
                        {
                          className: Object(W.a)(
                            1 == c ? Ot.TileEventOtherType : ""
                          )
                        },
                        o ? o.GetCategoryAsString() : t.event_type
                      ),
                      this.state.bLoadingEvent &&
                        j.createElement(oe.a, {
                          size: "small",
                          string: Object(L.d)("#Loading")
                        }),
                      j.createElement(Lt, {
                        accountID: Number(t.creator_accountid),
                        locToken: "#EventModTile_Author"
                      }),
                      Boolean(
                        t.updator_accountid &&
                          0 < Number(t.updator_accountid) &&
                          t.updator_accountid != t.creator_accountid
                      ) &&
                        j.createElement(Lt, {
                          accountID: Number(t.updator_accountid),
                          locToken: "#EventModTile_Updator"
                        }),
                      j.createElement(Nt, {
                        appid: n,
                        clanSteamID: new O.a(t.clan_steamid)
                      })
                    ),
                    o &&
                      j.createElement(
                        j.Fragment,
                        null,
                        j.createElement(
                          "div",
                          { className: Ot.DetailsMiddle },
                          j.createElement(
                            "div",
                            { className: Ot.ModeratedFlagCtn },
                            j.createElement("input", {
                              type: "checkbox",
                              id: o.GID + "_moderated",
                              checked: Boolean(
                                o.BHasTag("mod_reviewed") &&
                                  !o.BHasTag("mod_require_rereview")
                              ),
                              onChange: this.OnModeratedChanged
                            }),
                            j.createElement(
                              "label",
                              { htmlFor: o.GID + "_moderated" },
                              this.state.bSavingModeration &&
                                j.createElement(oe.a, { size: "small" }),
                              Boolean(!o.BHasTag("mod_reviewed")) &&
                                Object(L.d)("#EventModTile_Moderated_Review"),
                              Boolean(
                                o.BHasTag("mod_reviewed") &&
                                  !o.BHasTag("mod_require_rereview")
                              ) && Object(L.d)("#EventModTile_Moderated"),
                              Boolean(o.BHasTag("mod_require_rereview")) &&
                                Object(L.d)("#EventModTile_Moderated_ReReview")
                            )
                          ),
                          j.createElement(
                            "button",
                            {
                              className: Object(W.a)(ft.a.Button, Ot.Button),
                              onClick: this.OnChangeCategory
                            },
                            Object(L.d)("#EventModTile_ChangeEventType")
                          ),
                          o.BHasTag("halloween2019candidate") &&
                            j.createElement(
                              "button",
                              {
                                className: Object(W.a)(ft.a.Button),
                                onClick: this.OnUpdateSeasonalTag
                              },
                              Object(L.d)("#EventModTile_SeasonalTag")
                            ),
                          j.createElement(xt, { eventModel: o })
                        ),
                        j.createElement(
                          "div",
                          { className: Ot.DetailsRight },
                          j.createElement(Et.b, {
                            event: o,
                            stylesmodule: Ot,
                            nOverrideEndTime: o.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: o.GetStartTimeAndDateUnixSeconds()
                          }),
                          j.createElement(Gt, { event: o }),
                          j.createElement(Bt, { event: o })
                        )
                      )
                  )
                )
              );
            }),
            Object(k.c)([Z.a], e.prototype, "ShowModalEvent", null),
            Object(k.c)([Z.a], e.prototype, "HideModalEvent", null),
            Object(k.c)([Z.a], e.prototype, "OnModeratedChanged", null),
            Object(k.c)([Z.a], e.prototype, "ApplyModerationToggle", null),
            Object(k.c)([Z.a], e.prototype, "OnChangeCategory", null),
            Object(k.c)([Z.a], e.prototype, "OnUpdateSeasonalTag", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component);
      function jt(e) {
        return O.a.InitFromAccountID(e).ConvertTo64BitString();
      }
      var Lt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                userProfile: gt.a.GetProfile(jt(e.props.accountID)),
                bLoadingProfile: !gt.a.BHasProfile(jt(e.props.accountID))
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.state.bLoadingProfile && this.LoadProfile();
            }),
            (e.prototype.LoadProfile = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = jt(this.props.accountID)), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]), [4, gt.a.LoadProfiles([t])]
                      );
                    case 2:
                      return e.sent(), [3, 4];
                    case 3:
                      return (
                        (a = e.sent()),
                        (n = Object(y.a)(a)),
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
                            userProfile: gt.a.GetProfile(t),
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
                  (G.c.IN_CLIENT ? "steam://openurl/" : "") +
                  "https://steamsupport.valvesoftware.com/account/overview/" +
                  jt(this.props.accountID);
              return j.createElement(
                "div",
                null,
                Object(L.k)(
                  a,
                  j.createElement(
                    "a",
                    { href: r, target: G.c.IN_CLIENT ? void 0 : "_blank" },
                    Boolean(n)
                      ? j.createElement(j.Fragment, null, n.persona_name)
                      : j.createElement(
                          j.Fragment,
                          null,
                          this.state.bLoadingProfile &&
                            j.createElement(oe.a, { size: "small" }),
                          j.createElement("span", null, t)
                        )
                  )
                )
              );
            }),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Gt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bDownloadingImages: !1, nLocLanguages: 0 }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(k.d)(e, t),
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
              T.c
                .LoadClanEventLocalizationFromAnnouncementGID(
                  e.clanSteamID,
                  e.AnnouncementGID
                )
                .then(function(e) {
                  a.m_cancelSignal.token.reason ||
                    a.setState({ nLocLanguages: e.length });
                })
                .catch(function(e) {
                  var t = Object(y.a)(e);
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
              return j.createElement(
                "div",
                { className: Ot.AnalysisCtn },
                j.createElement(
                  "div",
                  { className: Ot.TileTitle },
                  Object(L.d)("#EventModTile_Analysis")
                ),
                j.createElement(
                  "div",
                  null,
                  Object(L.d)("#EventModTile_Stats_Comments", e.nCommentCount)
                ),
                j.createElement(
                  "div",
                  null,
                  Object(L.d)("#EventModTile_Stats_VoteUp", e.nVotesUp)
                ),
                j.createElement(
                  "div",
                  null,
                  Object(L.d)("#EventModTile_Stats_VoteDown", e.nVotesDown)
                ),
                Boolean(t) &&
                  j.createElement(
                    "div",
                    { className: Ot.ArtHeader },
                    Object(L.d)("#EventModTile_ImageAnalysis_Header", t),
                    " "
                  ),
                Boolean(a) &&
                  j.createElement(
                    "div",
                    null,
                    Object(L.d)("#EventModTile_ImageAnalysis_Capsule", a),
                    " "
                  ),
                Boolean(n) &&
                  j.createElement(
                    "div",
                    { className: Ot.ArtSpotlight },
                    Object(L.d)("#EventModTile_ImageAnalysis_Spotlight", n),
                    " "
                  ),
                Boolean(r) &&
                  j.createElement(
                    "div",
                    null,
                    Object(L.d)("#EventModTile_ImageAnalysis_Broadcast", r),
                    " "
                  ),
                0 == o &&
                  j.createElement(
                    "div",
                    { className: Ot.AnalysisMissing },
                    Object(L.d)("#EventModTile_ImageAnalysis_None"),
                    " "
                  ),
                0 == this.state.nLocLanguages &&
                  j.createElement(oe.a, {
                    size: "small",
                    string: Object(L.d)("#EventModTile_LoadingLocs")
                  }),
                0 < this.state.nLocLanguages &&
                  j.createElement(
                    "div",
                    null,
                    Object(L.d)(
                      "#EventModTile_Languages",
                      this.state.nLocLanguages
                    )
                  ),
                Boolean(i) &&
                  j.createElement(
                    "div",
                    null,
                    Object(L.d)("#EventModTile_Languages_Summary", i),
                    " "
                  ),
                Boolean(s) &&
                  j.createElement(
                    "div",
                    null,
                    Object(L.d)("#EventModTile_Languages_Subtitle", s),
                    " "
                  )
              );
            }),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Nt = (function(t) {
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
            Object(k.d)(e, t),
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
                    var t = Object(y.a)(e);
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
                return j.createElement(oe.a, {
                  size: "small",
                  string: Object(L.d)("#EventModTile_AppInfoLoading")
                });
              var e = this.props,
                t = e.appid,
                a = e.clanSteamID;
              if (t) {
                var n = b.a.GetStoreCapsuleInfo(t).GetAppStoreData();
                return j.createElement(
                  "div",
                  { className: Ot.TileAppInfo },
                  j.createElement(
                    "div",
                    { className: Ot.TileAppInfoTitle },
                    j.createElement(
                      U.a,
                      { href: n.capsule_link },
                      j.createElement("img", {
                        className: Ot.TileAppInfoImage,
                        src: n.capsule
                      }),
                      j.createElement(
                        "div",
                        null,
                        Object(L.d)("#EventModTile_GameName", n.title)
                      )
                    )
                  ),
                  j.createElement(
                    "div",
                    null,
                    Object(L.d)("#EventModTile_ReleaseDate", n.release)
                  )
                );
              }
              if (a) {
                var r = a.GetAccountID(),
                  o = g.a.GetClanInfoByClanAccountID(r);
                if (o && o.is_curator)
                  return j.createElement(
                    "div",
                    { className: Ot.TileAppInfo },
                    j.createElement(
                      "div",
                      { className: Ot.TileAppInfoTitle },
                      j.createElement(
                        U.a,
                        { href: G.c.STORE_BASE_URL + "/curator/" + r + "/" },
                        j.createElement("img", {
                          className: Ot.TileAppInfoImage,
                          src: o.avatar_full_url
                        }),
                        j.createElement(
                          "div",
                          null,
                          Object(L.d)("#EventModTile_CuratorName", o.group_name)
                        )
                      )
                    )
                  );
              }
              return null;
            }),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Bt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.render = function() {
              var e = this.props.event,
                t = Object(ht.d)(e),
                a = Object(ht.c)(e),
                n = Object(ht.e)(e),
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
              return j.createElement(
                "div",
                { className: Ot.VisibiltyCtn },
                j.createElement(
                  "div",
                  { className: Ot.TileTitle },
                  Object(L.d)("#EventModTile_Visibility")
                ),
                j.createElement(
                  "div",
                  null,
                  Object(L.d)(
                    "#EventModTile_Store_Visibility",
                    r
                      ? Object(L.d)("#WriteReview_Dialog_Yes")
                      : Object(L.d)("#WriteReview_Dialog_No"),
                    r
                      ? ""
                      : n
                      ? Object(L.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_store")
                      ? Object(L.d)("#EventModTime_Hidden_OptOut")
                      : Object(L.d)("#EventModTime_Hidden_Moderator")
                  )
                ),
                j.createElement(
                  "div",
                  null,
                  Object(L.d)(
                    "#EventModTile_LibraryHome_Visibility",
                    o
                      ? Object(L.d)("#WriteReview_Dialog_Yes")
                      : Object(L.d)("#WriteReview_Dialog_No"),
                    o
                      ? ""
                      : n
                      ? Object(L.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_overview")
                      ? Object(L.d)("#EventModTime_Hidden_OptOut")
                      : Object(L.d)("#EventModTime_Hidden_Moderator")
                  )
                ),
                j.createElement(
                  "div",
                  null,
                  Object(L.d)(
                    "#EventModTile_LibraryDetail_Visibility",
                    i
                      ? Object(L.d)("#WriteReview_Dialog_Yes")
                      : Object(L.d)("#WriteReview_Dialog_No"),
                    i
                      ? ""
                      : n
                      ? Object(L.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_detail")
                      ? Object(L.d)("#EventModTime_Hidden_OptOut")
                      : Object(L.d)("#EventModTime_Hidden_Moderator")
                  )
                )
              );
            }),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Mt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                newCategoryOption: {
                  label: Object(Oe.b)(34),
                  value: { eventType: 34 }
                }
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.ChangeCategoryForEvent = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, s, l, c, d;
                return Object(k.e)(this, function(e) {
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
                          bt.UpdatePartnerEventType(
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
                        (i = ht.m),
                        (s = []),
                        r.value.tags &&
                          r.value.tags.forEach(function(e) {
                            s.push(e);
                            var t = new _t()
                              .SetUpdateSeasonalTags(e)
                              .ToModString();
                            s.push(t);
                          }),
                        [
                          4,
                          bt.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.GetAnnouncementGID(),
                            s,
                            i,
                            new _t().SetActionChangeEvent(o)
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
                        (d = Object(y.a)(c)),
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
                r = V.c
                  .filter(function(e) {
                    return 1 == e || 4 == e || 9 <= e;
                  })
                  .map(function(e) {
                    var t = { eventType: e };
                    return (
                      12 == e && (t.tags = ["patchnotes"]),
                      { label: Object(Oe.b)(e), value: t }
                    );
                  });
              return (
                r.push({
                  label: Object(L.d)("#PartnerEvent_Curator_Group_Members"),
                  value: {
                    eventType: 28,
                    tags: ["curator", "curator_group_members"]
                  }
                }),
                r.push({
                  label: Object(L.d)("#PartnerEvent_Curator_Public"),
                  value: { eventType: 28, tags: ["curator", "curator_public"] }
                }),
                j.createElement(
                  Ae.b,
                  {
                    strTitle: Object(L.d)("#EventModTile_ChangeEventType"),
                    strDescription: Object(L.d)(
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
                  j.createElement(
                    j.Fragment,
                    null,
                    j.createElement(
                      "div",
                      { className: Ot.CategoryChangeDialog },
                      j.createElement("br", null),
                      this.state.bUpdating &&
                        j.createElement(oe.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        j.createElement(
                          "div",
                          null,
                          Object(L.d)("#Chat_Settings_Error_ServerError"),
                          j.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      j.createElement(mt.a, {
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
            Object(k.c)([Z.a], e.prototype, "ChangeCategoryForEvent", null),
            Object(k.c)([Z.a], e.prototype, "OnChangeSelection", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        xt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bCollapsed: !0 }), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.RenderModAction = function(e) {
              var t = Object(L.i)(e.m_rtWhen),
                a = j.createElement(Lt, {
                  locToken: "#EventModTile_Moderator",
                  accountID: e.m_moderator
                });
              switch (e.m_action) {
                case at.k_ModReviewed:
                  return j.createElement(
                    "div",
                    { className: Ot.ModeratorAuditActionCtn },
                    Object(L.k)(
                      "#EventModTile_Action_Reviewed",
                      j.createElement("span", null, t),
                      a
                    )
                  );
                case at.k_ModUnreviewed:
                  return j.createElement(
                    "div",
                    { className: Ot.ModeratorAuditActionCtn },
                    Object(L.k)(
                      "#EventModTile_Action_UnReviewed",
                      j.createElement("span", null, t),
                      a
                    )
                  );
                case at.k_ChangeEventType:
                  return j.createElement(
                    "div",
                    { className: Ot.ModeratorAuditActionCtn },
                    Object(L.k)(
                      "#EventModTile_Action_NewEventType",
                      j.createElement("span", null, t),
                      a,
                      Object(Oe.b)(e.m_newEventType)
                    )
                  );
                case at.k_UpdateSeasonTags:
                  return j.createElement(
                    "div",
                    { className: Ot.ModeratorAuditActionCtn },
                    Object(L.k)(
                      "#EventModTile_Action_SeasonTagUpdate",
                      j.createElement("span", null, t),
                      a,
                      e.m_newTagAdded
                    )
                  );
                default:
                  return j.createElement(
                    "div",
                    { className: Ot.ModeratorAuditActionCtn },
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
                  var t = new _t();
                  t.FromString(e),
                    n.push(
                      j.createElement(
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
                  return _t.IsAuditAction(e);
                }),
                a = t.length,
                n = 3 < t.length && this.state.bCollapsed;
              if (0 == t.length) return null;
              n && (t = t.splice(0, 3));
              var r = this.RenderAudit(t);
              return j.createElement(
                "div",
                null,
                j.createElement(
                  "h4",
                  null,
                  Object(L.d)("#EventModTile_Action_Title")
                ),
                r,
                n &&
                  j.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !1 });
                      }
                    },
                    Object(L.d)("#EventModTile_Action_More", a - 3)
                  ),
                Boolean(!n && 3 < a) &&
                  j.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !0 });
                      }
                    },
                    Object(L.d)("#EventModTile_Action_Hide")
                  )
              );
            }),
            e
          );
        })(j.Component),
        Rt = (function(t) {
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
            Object(k.d)(e, t),
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i;
                return Object(k.e)(this, function(e) {
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
                          bt.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            t,
                            a,
                            new _t().SetUpdateSeasonalTags(
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
                        (i = Object(y.a)(o)),
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
              return j.createElement(
                Ae.b,
                {
                  strTitle: Object(L.d)("#EventModTile_SeasonalTag"),
                  onCancel: a,
                  onOK: function() {
                    return e.setState({ bUpdating: !0 }, e.ApplyAction);
                  }
                },
                j.createElement(
                  j.Fragment,
                  null,
                  j.createElement(
                    "div",
                    { className: Ot.CategoryChangeDialog },
                    j.createElement("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance
                    }),
                    j.createElement(
                      "label",
                      { htmlFor: "Acceptance" },
                      Object(L.d)("#EventModTile_SeasonalTag_Desc")
                    ),
                    j.createElement(
                      "div",
                      null,
                      Object(L.d)("#EventModTile_SeasonalTag_Desc_Secondary")
                    ),
                    j.createElement("input", {
                      id: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror
                    }),
                    j.createElement(
                      "label",
                      { htmlFor: "Horror" },
                      "Horror Tag"
                    ),
                    j.createElement("input", {
                      id: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute
                    }),
                    j.createElement("label", { htmlFor: "Cute" }, "Cute Tag"),
                    this.state.bUpdating &&
                      j.createElement(oe.a, { size: "small" }),
                    this.state.strErrorMsg &&
                      j.createElement(
                        "div",
                        null,
                        Object(L.d)("#Chat_Settings_Error_ServerError"),
                        j.createElement("br", null),
                        this.state.strErrorMsg
                      )
                  )
                )
              );
            }),
            Object(k.c)([Z.a], e.prototype, "ChangeAcceptance", null),
            Object(k.c)([Z.a], e.prototype, "ChangeHorror", null),
            Object(k.c)([Z.a], e.prototype, "ChangeCute", null),
            Object(k.c)([Z.a], e.prototype, "ApplyAction", null),
            e
          );
        })(j.Component),
        Pt = new ((function() {
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
            Object(k.c)([m.observable], e.prototype, "m_backfill", void 0),
            Object(k.c)(
              [m.observable],
              e.prototype,
              "m_mapEventGIDProcessed",
              void 0
            ),
            Object(k.c)(
              [m.observable],
              e.prototype,
              "m_bBackfillInProgress",
              void 0
            ),
            Object(k.c)([m.observable], e.prototype, "m_nProcessed", void 0),
            Object(k.c)([m.observable], e.prototype, "m_nSuccesses", void 0),
            Object(k.c)([m.observable], e.prototype, "m_nFailures", void 0),
            Object(k.c)([m.observable], e.prototype, "m_nWarning", void 0),
            Object(k.c)([m.observable], e.prototype, "m_nSkipped", void 0),
            Object(k.c)([m.action], e.prototype, "StartBackfill", null),
            Object(k.c)([m.action], e.prototype, "CompleteBackfill", null),
            Object(k.c)([m.action], e.prototype, "CloseProgress", null),
            e
          );
        })())(),
        Ht = a("vNkc"),
        Ft = (function(t) {
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
            Object(k.d)(e, t),
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
                    var t = Object(y.a)(e);
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
                Object(k.b)(this, void 0, void 0, function() {
                  var t, a;
                  return Object(k.e)(this, function(e) {
                    return (
                      (t = he.a.GetExtensionTypeFromURL(r)),
                      (a = he.a.GetHashFromHashAndExt(r) + o),
                      [
                        2,
                        he.e.AsyncGetImageResolution(
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
              var r = Object(y.a)(t),
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
                    Pt.CloseProgress(e, n))
                  : Pt.CompleteBackfill("resize_image");
            }),
            (e.prototype.HandleResizeForImageType = function(p, u, m, h, v) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  c,
                  a,
                  d = this;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = function(t) {
                        var a, n, r, o, i, s, l;
                        return Object(k.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return p[t] && 0 < p[t].length
                                ? ((a = p[t]),
                                  (n = he.a.GetExtensionTypeFromURL(a)),
                                  (r = new O.a(u.clan_steamid)),
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
                                Object(ht.h)(o.width, o.height, h)
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
                                (i = he.a.GetHashFromHashAndExt(a)),
                                (s = he.a.GetExtensionStringFromHashAndExt(a)),
                                (l = he.d.GetResizeDimension(h)),
                                [
                                  4,
                                  he.b
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
                                      var t = Object(y.a)(e);
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  i,
                  a,
                  s,
                  n,
                  l = this;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      Pt.StartBackfill("resize_image"), (t = 0), (e.label = 1);
                    case 1:
                      return Pt.BIsBackkFillInProgress()
                        ? [
                            4,
                            bt
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
                          Pt.CompleteBackfill("resize_image"),
                          console.log("Compelted the backfill"),
                          [3, 7]
                        );
                      (t += i.length),
                        (a = function(t) {
                          var a, n, r, o;
                          return Object(k.e)(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return (
                                  (a = i[t]),
                                  (n = Pt.CreateOrGetBackfillProgess(
                                    a.unique_id
                                  )),
                                  a.announcement_gid &&
                                  0 != a.announcement_gid.length
                                    ? [
                                        4,
                                        T.c
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
                                      Pt.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                );
                              case 1:
                                return (
                                  e.sent(),
                                  n.bFailed
                                    ? [2, "continue"]
                                    : (r = T.c.GetClanEventFromAnnouncementGID(
                                        a.announcement_gid
                                      ))
                                    ? n.bSucceeded ||
                                      n.bFailed ||
                                      n.bAlreadyProcessed
                                      ? ((n.bAlreadyProcessed = !0),
                                        Pt.CloseProgress(a.unique_id, n),
                                        [2, "continue"])
                                      : ((n.bAnalysing = !0),
                                        s.setState({
                                          strInfo:
                                            "Processing " +
                                            Pt.GetBackfillGIDs().length +
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
                                                  he.c.capsule_main
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
                                      Pt.CloseProgress(a.unique_id, n),
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
                                          he.c.background_mini
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
                                          he.c.spotlight_main
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
                                  Pt.CloseProgress(a.unique_id, n),
                                  Pt.BIsBackkFillInProgress()
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
                      return 5e3 < Pt.m_nFailures
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
                0 < Pt.m_nFailures &&
                  Pt.GetBackfillGIDs().forEach(function(e) {
                    var t = Pt.GetEventBackfillProgress().get(e);
                    if (t && t.bFailed) {
                      var a = T.c.GetClanEventModel(e);
                      a &&
                        n.push(
                          j.createElement(
                            "div",
                            { key: e },
                            j.createElement(
                              Ie.c,
                              {
                                eventModel: a,
                                route: Ie.a.k_eView,
                                openNewWindow: !0
                              },
                              a.GetNameWithFallback(0)
                            ),
                            j.createElement(
                              "div",
                              { className: Ht.Error },
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
                  j.createElement(
                    "div",
                    { key: "res_capsule" },
                    "Capsule Resized: ",
                    this.m_mapArtworkResizeSuccess.get("capsule"),
                    " "
                  )
                ),
                e.push(
                  j.createElement(
                    "div",
                    { key: "res_header" },
                    "Header Resized: ",
                    this.m_mapArtworkResizeSuccess.get("background"),
                    " "
                  )
                ),
                e.push(
                  j.createElement(
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
              return j.createElement(
                "div",
                null,
                j.createElement(
                  "h2",
                  null,
                  "Partner Events Backfill Processing Page"
                ),
                null == this.state.eBackfillState &&
                  j.createElement(
                    "div",
                    null,
                    j.createElement(
                      "button",
                      { onClick: this.OnArtworkResizeBackfill },
                      "Begin Artwork Resize Backfill"
                    )
                  ),
                j.createElement(
                  "div",
                  null,
                  j.createElement(
                    "button",
                    {
                      onClick: function() {
                        return Pt.CompleteBackfill("resize_image");
                      }
                    },
                    "Stop Backfill"
                  )
                ),
                this.state.strInfo &&
                  j.createElement(
                    "div",
                    null,
                    "Processing: ",
                    this.state.strInfo
                  ),
                j.createElement(
                  "div",
                  null,
                  "Events Processed: ",
                  Pt.m_nProcessed
                ),
                j.createElement(
                  "div",
                  null,
                  "Events Succeeded: ",
                  Pt.m_nSuccesses
                ),
                j.createElement("div", null, "Events Warning: ", Pt.m_nWarning),
                j.createElement("div", null, "Events Failed: ", Pt.m_nFailures),
                j.createElement("div", null, "Events Skipped: ", Pt.m_nSkipped),
                0 < e.length &&
                  j.createElement(
                    j.Fragment,
                    null,
                    j.createElement("h2", null, "Failure Info"),
                    e
                  ),
                Boolean(t) &&
                  j.createElement(
                    "div",
                    null,
                    j.createElement("h2", null, "Resizing Actions"),
                    t
                  ),
                "started" == this.state.eBackfillState &&
                  j.createElement(oe.a, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress"
                  })
              );
            }),
            Object(k.c)([Z.a], e.prototype, "OnArtworkResizeBackfill", null),
            Object(k.c)([Z.a], e.prototype, "BeginArtworkResize", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        zt = a("5eAM"),
        Ut = a("nWbB"),
        Wt = new ((function() {
          function e() {
            (this.m_rgMyWishlistOnSale = null),
              (this.m_rgMyDLCForGamesInLibraryOnSale = null),
              (this.m_rgMySoundtracksForGamesInLibraryOnSale = null),
              (this.m_rgMyInteractiveRecOnSale = null),
              (this.m_rgMySaleTags = null),
              (this.m_rgTopN = null);
          }
          return (
            (e.prototype.GetDiscounts = function(o) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(k.e)(this, function(e) {
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
                        (a = Object(G.f)(t, "application_config"))
                          ? [3, 2]
                          : [
                              4,
                              _.a.get(
                                G.c.STORE_BASE_URL + "actions/ajaxgetdiscounts",
                                {
                                  params: Object(k.a)(Object(k.a)({}, o), {
                                    cc: G.c.COUNTRY
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
                        (r = e.sent()), console.error(Object(y.a)(r)), [3, 4]
                      );
                    case 4:
                      return [2, []];
                  }
                });
              });
            }),
            (e.prototype.GetTopN = function(a, n) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgTopN
                        ? [3, 2]
                        : ((this.m_rgTopN = Object(G.f)(
                            "top_n",
                            "application_config"
                          )),
                          this.m_rgTopN
                            ? [3, 2]
                            : (500,
                              [
                                4,
                                Wt.GetDiscounts({
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyWishlistOnSale
                        ? [3, 2]
                        : ((this.m_rgMyWishlistOnSale = Object(G.f)(
                            "wishlist_onsale",
                            "application_config"
                          )),
                          this.m_rgMyWishlistOnSale
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  G.c.STORE_BASE_URL +
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyDLCForGamesInLibraryOnSale
                        ? [3, 2]
                        : ((this.m_rgMyDLCForGamesInLibraryOnSale = Object(G.f)(
                            "dlc_onsale",
                            "application_config"
                          )),
                          this.m_rgMyDLCForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  G.c.STORE_BASE_URL +
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMySoundtracksForGamesInLibraryOnSale
                        ? [3, 2]
                        : ((this.m_rgMySoundtracksForGamesInLibraryOnSale = Object(
                            G.f
                          )("dlc_music_onsale", "application_config")),
                          this.m_rgMySoundtracksForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  G.c.STORE_BASE_URL +
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyInteractiveRecOnSale
                        ? [3, 2]
                        : ((this.m_rgMyInteractiveRecOnSale = Object(G.f)(
                            "ir_onsale",
                            "application_config"
                          )),
                          this.m_rgMyInteractiveRecOnSale
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  G.c.STORE_BASE_URL +
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMySaleTags
                        ? [3, 2]
                        : ((this.m_rgMySaleTags = Object(G.f)(
                            "saletags",
                            "application_config"
                          )),
                          this.m_rgMySaleTags
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  G.c.STORE_BASE_URL +
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
            e
          );
        })())(),
        Vt = new ((function() {
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
                var t = Object(G.f)("points", "application_config");
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.LazyInit(),
                        this.m_bLoaded || !G.i.logged_in
                          ? [3, 2]
                          : ((t =
                              G.c.STORE_BASE_URL +
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
              return Object(k.b)(this, void 0, void 0, function() {
                return Object(k.e)(this, function(e) {
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
            Object(k.c)([m.observable], e.prototype, "m_mySummary", void 0),
            e
          );
        })())();
      window.g_SaleTokenPointStore = Vt;
      var Zt = new ((function() {
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
                (e.m_userData = Object(G.f)("doorinfo", "application_config")),
                  (e.m_salePageBackgroundOverride = Object(G.f)(
                    "doorinfobackground",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundWEBM = Object(G.f)(
                    "doorinfowebm",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundMP4 = Object(G.f)(
                    "doorinfomp4",
                    "application_config"
                  )),
                  (e.m_storyImages = Object(G.f)(
                    "storyimages",
                    "application_config"
                  )),
                  e.m_storyImages || (e.m_storyImages = new Array(4));
              }),
              (this.m_bLoadedFromConfig = !0));
          }),
          (e.prototype.LoadDoorData = function() {
            return Object(k.b)(this, void 0, void 0, function() {
              var t, a;
              return Object(k.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = G.c.STORE_BASE_URL + "saleaction/ajaxgetopendoor"),
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
            var t = N.a.GetTimeNowWithOverride();
            return (
              G.i.logged_in &&
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
              Object(k.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o = this;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !G.i.logged_in ||
                        !this.m_userData ||
                        i > this.m_userData.length
                      )
                        return [2, null];
                      (t = G.c.STORE_BASE_URL + "saleaction/ajaxopendoor"),
                        (a = new FormData()).append("sessionid", G.c.SESSIONID),
                        a.append("authwgtoken", G.i.authwgtoken),
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
                              Vt.AddPoints(100);
                            }
                          }),
                          [2, n.data.rewards])
                        : (console.error(Object(y.a)(n)), [3, 4]);
                    case 3:
                      return (
                        (r = e.sent()), console.error(Object(y.a)(r)), [3, 4]
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
          Object(k.c)([m.observable], e.prototype, "m_userData", void 0),
          Object(k.c)(
            [m.observable],
            e.prototype,
            "m_salePageBackgroundOverride",
            void 0
          ),
          Object(k.c)(
            [m.observable],
            e.prototype,
            "m_salePageBackgroundWEBM",
            void 0
          ),
          Object(k.c)(
            [m.observable],
            e.prototype,
            "m_salePageBackgroundMP4",
            void 0
          ),
          Object(k.c)([m.observable], e.prototype, "m_storyImages", void 0),
          Object(k.c)(
            [m.observable],
            e.prototype,
            "m_strLastDoorOpenKey",
            void 0
          ),
          e
        );
      })())();
      window.g_DoorStore = Zt;
      var Yt = new ((function() {
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
            return Object(k.b)(this, void 0, void 0, function() {
              var t, a, n, r, o;
              return Object(k.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return null != this.m_rgRecentEvent
                      ? [3, 5]
                      : ((t = Object(G.f)(
                          "recent_events",
                          "application_config"
                        )),
                        this.ValidateStoreDefault(t)
                          ? (this.AddAllRecentEvents(t), [3, 5])
                          : [3, 1]);
                  case 1:
                    (this.m_rgRecentEvent = new Array()),
                      (a = {
                        cc: G.c.COUNTRY || "US",
                        l: G.c.LANGUAGE,
                        clan_account_id: i.clanSteamID.GetAccountID(),
                        clan_event_gid: i.GID
                      }),
                      (n =
                        G.c.STORE_BASE_URL + "saleaction/ajaxrecentsaleevents"),
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
                        T.c.RegisterClanEvents(r.data.partnerevents)),
                      [3, 5]
                    );
                  case 4:
                    return (
                      (o = e.sent()),
                      console.error(
                        "GetRecentEventsForSalesPage failed",
                        Object(y.a)(o)
                      ),
                      [3, 5]
                    );
                  case 5:
                    return [2, this.m_rgRecentEvent];
                }
              });
            });
          }),
          Object(k.c)([m.observable], e.prototype, "m_rgRecentEvent", void 0),
          Object(k.c)([m.action], e.prototype, "AddAllRecentEvents", null),
          e
        );
      })())();
      window.g_EventListSaleStore = Yt;
      var qt = new ((function() {
          function e() {
            (this.m_saleExp = {}), (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              if (!this.m_bLoadedFromConfig) {
                var e = document.getElementById("application_config");
                e && (this.m_saleExp = Object(G.f)("xprmnt", e)),
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
        Jt = (function() {
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
                e = Object(G.f)("subscriptionsapps", "application_config");
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_mapMasterAppToBenefitApps.has(r)
                        ? [2, !0]
                        : [
                            4,
                            _.a.get(
                              G.c.STORE_BASE_URL +
                                "actions/ajaxresolvesubscriptions",
                              {
                                params: {
                                  master_app_id: r,
                                  cc: G.c.COUNTRY,
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
            Object(k.c)(
              [m.observable],
              e.prototype,
              "m_mapMasterAppToBenefitApps",
              void 0
            ),
            e
          );
        })(),
        Qt = a("mZMQ"),
        Kt = (a("hmtA"), a("dgee")),
        Xt = a.n(Kt),
        $t = a("exzL"),
        ea = a.n($t),
        ta = a("SS32"),
        aa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.GetNumElements = function() {
              return j.Children.count(this.props.children);
            }),
            (t.prototype.GetPageSize = function() {
              return Math.min(
                this.GetNumElements(),
                this.props.visibleElements
              );
            }),
            (t.prototype.RenderChildren = function() {
              return j.Children.map(this.props.children, function(e, t) {
                return j.createElement(
                  Qt.e,
                  { key: "slide_" + t, index: t },
                  e
                );
              });
            }),
            (t.prototype.RenderBreadcrumbs = function(a) {
              return j.Children.map(this.props.children, function(e, t) {
                return t % a != 0
                  ? null
                  : j.createElement(
                      Qt.d,
                      { slide: t, className: ta.pip },
                      j.createElement("img", { src: Xt.a })
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
                j.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      ta.carouselBody,
                      this.props.className
                    )
                  },
                  j.createElement(
                    Qt.c,
                    {
                      visibleSlides: this.props.visibleElements,
                      totalSlides: this.GetNumElements(),
                      naturalSlideWidth: 100 * o,
                      naturalSlideHeight: 100,
                      step: this.props.visibleElements,
                      infinite: !this.props.disableEdgeWrap,
                      isIntrinsicHeight: i
                    },
                    j.createElement(
                      "div",
                      { className: ta.sliderBody },
                      !n &&
                        j.createElement(
                          Qt.a,
                          {
                            className: Object(W.a)(ta.carouselBtnCtn, ta.left)
                          },
                          j.createElement("img", {
                            src: ea.a,
                            className: Object(W.a)(ta.carouselBtnImg, ta.left)
                          })
                        ),
                      j.createElement(Qt.f, null, this.RenderChildren()),
                      !n &&
                        j.createElement(
                          Qt.b,
                          {
                            className: Object(W.a)(ta.carouselBtnCtn, ta.right)
                          },
                          j.createElement("img", {
                            src: ea.a,
                            className: Object(W.a)(ta.carouselBtnImg, ta.right)
                          })
                        )
                    ),
                    !r &&
                      j.createElement(
                        "div",
                        { className: ta.breadcrumbContainer },
                        this.RenderBreadcrumbs(t)
                      )
                  )
                )
              );
            }),
            t
          );
        })(j.Component),
        na = a("qP7j"),
        ra = a.n(na),
        oa = new ((function() {
          function e() {}
          return (
            (e.prototype.DeleteForumTopic = function(r, o, i, s, l) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          G.c.COMMUNITY_BASE_URL +
                          "forum/" +
                          r.GetAccountID() +
                          "/" +
                          o +
                          "/deletetopic/"),
                        null != i && "" != i && (t += i + "/"),
                        (a = new FormData()).append("sessionid", G.c.SESSIONID),
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
        ia = (function(a) {
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
            Object(k.d)(s, a),
            (s.prototype.componentDidMount = function() {
              this.props.bNoConfirmationNeeded && this.OnDelete();
            }),
            (s.prototype.OnDeleteEventSuccessCallback = function() {
              this.props.partnerEventStore.ResetModel(),
                this.state.bDeleteCommentThread
                  ? oa
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
            (s.prototype.OnDeleteForumTopicSuccessCallback = function() {
              this.setState({ dialogState: "success" });
            }),
            (s.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("component unmounted");
            }),
            (s.prototype.OnDeleteEventFailureCallback = function(e) {
              this.setState(
                Object(k.a)({ dialogState: "error" }, Object(y.a)(e))
              );
            }),
            (s.prototype.OnDeleteForumTopicFailureCallback = function(e) {
              this.setState(
                Object(k.a)(
                  { dialogState: "failed_thread_delete" },
                  Object(y.a)(e)
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
                r != me.e
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
                  var o = t.GetNameWithFallback(Object(me.d)(G.c.LANGUAGE)),
                    i = t.BIsVisibleEvent()
                      ? "#EventDisplay_AreYouSure_Visible"
                      : "#EventDisplay_AreYouSure";
                  (n = Object(L.d)(i, o)),
                    (a = this.OnDelete),
                    t.BHasForumTopicGID() &&
                      r.push(
                        j.createElement(
                          "div",
                          {
                            key: "WantToDeleteCmtThread",
                            className: ra.a.Padding
                          },
                          j.createElement("input", {
                            type: "checkbox",
                            id: "del_cmt_post",
                            name: "del_cmt_post",
                            defaultChecked: this.state.bDeleteCommentThread,
                            onChange: this.OnChangeDeleteForum
                          }),
                          j.createElement(
                            "label",
                            { htmlFor: "del_cmt_post" },
                            Object(L.d)("#EventDisplay_DeleteEvent_Comment")
                          )
                        )
                      );
                  break;
                case "waiting":
                  (n = Object(L.d)("#EventDisplay_DeleteEvent_InProgress")),
                    r.push(j.createElement(oe.a, { key: "throbber" }));
                  break;
                case "error":
                  (n = Object(L.d)("#EventDisplay_DeleteEvent_Error")),
                    r.push(
                      j.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++s.m_uniqueError,
                          className: ra.a.ErrorStyles
                        },
                        this.state.strErrorMsg
                      )
                    );
                  break;
                case "failed_thread_delete":
                  (n = Object(L.d)(
                    "#EventDisplay_DeleteEvent_ForumTopicError"
                  )),
                    r.push(
                      j.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++s.m_uniqueError,
                          className: ra.a.ErrorStyles
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
                  (n = Object(L.d)("#EventDisplay_DeleteEvent_Success")),
                    this.props.onDeleteSuccessAndCloseDialog &&
                      (a = function() {
                        e.props.onDeleteSuccessAndCloseDialog(),
                          e.props.closeModal();
                      });
              }
              return j.createElement(
                Ae.b,
                {
                  strTitle: Object(L.d)("#EventDisplay_DeleteEvent"),
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
            Object(k.c)(
              [Z.a],
              s.prototype,
              "OnDeleteEventSuccessCallback",
              null
            ),
            Object(k.c)(
              [Z.a],
              s.prototype,
              "OnDeleteForumTopicSuccessCallback",
              null
            ),
            Object(k.c)(
              [Z.a],
              s.prototype,
              "OnDeleteEventFailureCallback",
              null
            ),
            Object(k.c)(
              [Z.a],
              s.prototype,
              "OnDeleteForumTopicFailureCallback",
              null
            ),
            Object(k.c)([Z.a], s.prototype, "SetToWaiting", null),
            Object(k.c)([Z.a], s.prototype, "OnDelete", null),
            Object(k.c)([Z.a], s.prototype, "OnChangeDeleteForum", null),
            s
          );
        })(j.Component),
        sa = a("6eA3"),
        la = a.n(sa),
        ca = (function(t) {
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
            Object(k.d)(e, t),
            (e.prototype.OnDeleteVerifyRequest = function(e) {
              Object(ke.c)(
                j.createElement(ia, {
                  eventModel: this.props.eventModel,
                  onDeleteSuccessAndCloseDialog: this
                    .OnDeleteSuccessAndComplete,
                  partnerEventStore: this.props.partnerEventStore
                }),
                Object(je.m)(e)
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
                return Object(Ie.h)(n, Ie.a.k_eCommunityAdminPage);
              var i = A.a.Get().GetPartnerEventPermissions(n.clanSteamID),
                s = n.visibility_state == T.b.k_EEventStateVisible,
                l = n.visibility_state == T.b.k_EEventStateStaged;
              if (i.can_edit || i.support_user) {
                var c = [];
                if (void 0 !== this.state.nMaxSaleDayIndex)
                  for (var d = 0; d <= this.state.nMaxSaleDayIndex; ++d)
                    c.push({
                      label: Object(L.d)("#SalePage_Admin_SaleEventDay", d + 1),
                      data: d
                    });
                return j.createElement(
                  R.a,
                  null,
                  j.createElement(
                    "div",
                    { className: sa.DisplayAdminPanel },
                    j.createElement(
                      "span",
                      { className: sa.DisplayAdminPanel_Title },
                      Object(L.d)("#EventDisplay_Admin_Title")
                    ),
                    j.createElement(
                      "div",
                      { className: sa.DisplayAdminPanel_ctn },
                      a,
                      a &&
                        j.createElement(
                          "span",
                          { className: sa.DisplayAdminPanel_Spacer },
                          " "
                        ),
                      j.createElement(
                        Ie.c,
                        {
                          eventModel: n,
                          route: Ie.a.k_eCommunityEdit,
                          openNewWindow: o,
                          className: Object(W.a)(St.Button, sa.AdminButton)
                        },
                        Object(L.d)("#EventEditor_Edit")
                      ),
                      r &&
                        j.createElement(
                          "span",
                          {
                            className: St.Button + " " + sa.AdminButton,
                            onClick: this.OnDeleteVerifyRequest
                          },
                          Object(L.d)("#EventDisplay_DeleteEvent")
                        ),
                      !s &&
                        j.createElement(
                          j.Fragment,
                          null,
                          j.createElement(
                            Ie.c,
                            {
                              eventModel: n,
                              route: Ie.a.k_eCommunityPublish,
                              openNewWindow: o,
                              className: Object(W.a)(St.Button, sa.AdminButton)
                            },
                            Object(L.d)(
                              l
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish"
                            )
                          )
                        ),
                      j.createElement(
                        Ie.c,
                        {
                          eventModel: n,
                          route: Ie.a.k_eCommunityAdminPage,
                          openNewWindow: o,
                          className: Object(W.a)(St.Button, sa.AdminButton)
                        },
                        Object(L.d)("#EventDisplay_Events")
                      ),
                      Boolean(
                        void 0 !== this.state.nMaxSaleDayIndex && 0 < c.length
                      ) &&
                        j.createElement(H.g, {
                          strDropDownClassName: St.DropDownScroll,
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
                        j.createElement(
                          Ie.c,
                          {
                            eventModel: n,
                            route: Ie.a.k_eStoreSalePage,
                            openNewWindow: o,
                            className: Object(W.a)(St.Button, sa.AdminButton)
                          },
                          Object(L.d)("#EventDisplay_SalesPage")
                        ),
                      Boolean(
                        n.jsondata.bSaleEnabled && G.i.is_support && n.GID
                      ) &&
                        j.createElement(
                          "a",
                          {
                            href:
                              (G.c.IN_CLIENT ? "steam://openurl/" : "") +
                              "https://steamstats.valve.org/sales/details/?gid=" +
                              n.GID +
                              "&clanid=" +
                              n.clanSteamID.GetAccountID(),
                            target: G.c.IN_CLIENT ? "" : "_blank",
                            className: Object(W.a)(
                              St.Button,
                              sa.AdminButton,
                              St.ValveOnlyBackground
                            )
                          },
                          Object(L.d)("#EventDisplay_StatsPage")
                        )
                    )
                  )
                );
              }
              return j.createElement("span", null);
            }),
            Object(k.c)([Z.a], e.prototype, "OnDeleteVerifyRequest", null),
            Object(k.c)([Z.a], e.prototype, "OnDeleteSuccessAndComplete", null),
            Object(k.c)([Z.a], e.prototype, "OnChangeVisibilityDate", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component);
      var da = a("bWts"),
        pa = a.n(da),
        ua = a("XsxU"),
        ma = a.n(ua),
        ha = a("r+ba"),
        va = a.n(ha),
        _a = a("Lql7"),
        ba = a("uIWk"),
        ga = a("7u3m"),
        ya = a.n(ga),
        Ea = a("D4G2"),
        Sa = a.n(Ea),
        fa = a("Ff1b"),
        Ca = a.n(fa),
        Oa = a("go9d"),
        Ia = a.n(Oa),
        Ta = a("/PpB"),
        wa = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            t.m_cancelSignal = _.a.CancelToken.source();
            var a = O.a.InitFromClanID(e.creatorID.clan_account_id);
            return (
              (t.state = {
                bLoading: !ba.a.BHasCreatorHomeLoaded(a) || !w.a.BIsLoaded()
              }),
              t
            );
          }
          return (
            Object(k.d)(e, n),
            (e.prototype.componentDidMount = function() {
              var t = this;
              if (this.state.bLoading) {
                w.a.HintLoad();
                var e = O.a.InitFromClanID(
                  this.props.creatorID.clan_account_id
                );
                ba.a
                  .LoadCreatorHome(e, this.m_cancelSignal)
                  .then(function(e) {
                    w.a
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
              var t = Object(y.a)(e);
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
                    j.createElement(ka, {
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
                t = A.a.Get().GetPartnerEventPermissions(e.clanSteamID);
              A.a.Get().BIsUserLoggedIn()
                ? t.limited_user
                  ? Object(ke.d)(j.createElement(Ta.a, null), window)
                  : this.setState(
                      { bApplyingFollowing: !0 },
                      this.TakeFollowAction
                    )
                : Object(ke.d)(
                    j.createElement(Ae.b, {
                      strTitle: Object(L.d)("#EventDisplay_Share_NotLoggedIn"),
                      strDescription: Object(L.d)(
                        "#EventDisplay_Share_NotLoggedIn_Description"
                      ),
                      strOKButtonText: Object(L.d)("#MobileLogin_SignIn"),
                      onOK: function() {
                        return Object(Je.a)();
                      }
                    }),
                    window
                  );
            }),
            (e.prototype.TakeFollowAction = function() {
              var a = this,
                n = this.props.creatorID,
                e = O.a.InitFromClanID(n.clan_account_id),
                r = w.a.BIsFollowingCreator(e),
                o = w.a.BIsIgnoringCreator(e);
              w.a
                .UpdateFollowOrIgnoreCurator(e, !o, !(o || r))
                .then(function(e) {
                  var t = ba.a.GetCreatorHomeByID(n);
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
                return j.createElement(
                  "div",
                  { className: _a.DevSummaryWidgetCtn },
                  j.createElement(oe.a, null)
                );
              if (this.state.strErrorMsg) return j.createElement("div", null);
              var e = this.props,
                t = e.creatorID,
                a = e.bShowTagline,
                n = O.a.InitFromClanID(t.clan_account_id),
                r = ba.a.GetCreatorHomeByID(t),
                o = t.type,
                i =
                  "developer" == t.type
                    ? Object(L.d)("#CreatorHome_DevelopedBy")
                    : "publisher" == t.type
                    ? Object(L.d)("#CreatorHome_PublishedBy")
                    : Object(L.d)("#CreatorHome_InFranchise"),
                s = r.GetNumFollowers(),
                l = r.GetURL(o),
                c = this.GetSocialMediaElements(r),
                d = w.a.BIsFollowingCreator(n),
                p = w.a.BIsIgnoringCreator(n);
              return j.createElement(
                R.a,
                null,
                j.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      _a.DevSummaryCtn,
                      this.props.bSmallFormat ? _a.SmallFormat : _a.LargeFormat
                    )
                  },
                  !this.props.bHideCreatorType &&
                    j.createElement("span", { className: _a.Title }, i),
                  j.createElement(
                    "div",
                    { className: _a.DevSummaryWidgetCtn },
                    j.createElement("div", {
                      className: _a.DevSummaryBackground,
                      style: {
                        backgroundImage:
                          "url(" + r.GetAvatarURLFullSize() + " )"
                      }
                    }),
                    j.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          _a.DevSummaryContent,
                          St.FlexColumnContainer,
                          St.FlexContainSpaceBetween
                        )
                      },
                      j.createElement(
                        "div",
                        { className: St.FlexRowContainer },
                        j.createElement(
                          "a",
                          { href: l },
                          j.createElement("img", {
                            className: _a.Avatar,
                            src: r.GetAvatarURLFullSize()
                          })
                        ),
                        j.createElement(
                          "div",
                          {
                            className: Object(W.a)(
                              St.FlexColumnContainer,
                              _a.CreatorDescCtn
                            )
                          },
                          j.createElement(
                            "div",
                            {
                              className: Object(W.a)(
                                _a.CreatorTitleCtn,
                                St.FlexColumnContainer
                              )
                            },
                            j.createElement(
                              "a",
                              { href: l, className: _a.CreatorNameName },
                              r.GetName()
                            ),
                            a &&
                              j.createElement(
                                "div",
                                {
                                  className: Object(W.a)(
                                    St.FlexColumnContainer,
                                    _a.CreatorTagline
                                  )
                                },
                                r.GetTagLine()
                              )
                          ),
                          j.createElement(
                            "div",
                            {
                              className: this.props.bSmallFormat
                                ? St.FlexColumnContainer
                                : St.FlexRowContainer
                            },
                            j.createElement(
                              "div",
                              { className: _a.FollowBtnCtn },
                              j.createElement(
                                "div",
                                {
                                  className: Object(W.a)(
                                    St.Button,
                                    _a.FollowButton
                                  ),
                                  onClick: this.OnFollowClick
                                },
                                this.state.bApplyingFollowing &&
                                  j.createElement(oe.a, { size: "small" }),
                                !this.state.bApplyingFollowing &&
                                  (d || p) &&
                                  j.createElement("img", {
                                    style: { height: "16px" },
                                    src:
                                      "https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_selected.png"
                                  }),
                                j.createElement(
                                  "div",
                                  { className: _a.FollowBtnText },
                                  !this.state.bApplyingFollowing &&
                                    (d
                                      ? Object(L.d)("#Button_Followed")
                                      : p
                                      ? Object(L.d)("#Button_Ignored")
                                      : Object(L.d)("#Button_Follow"))
                                )
                              ),
                              j.createElement(
                                "div",
                                { className: _a.Followers },
                                j.createElement(
                                  "span",
                                  null,
                                  s.toLocaleString(L.c.GetPreferredLocales())
                                ),
                                j.createElement("br", null),
                                Object(L.d)("#CreatorHome_JustFollowers")
                              )
                            ),
                            0 < c.length &&
                              j.createElement(
                                "div",
                                {
                                  className: Object(W.a)(
                                    _a.SocialContainer,
                                    St.FlexColumnContainer
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
            Object(k.c)([Z.a], e.prototype, "OnFollowClick", null),
            Object(k.c)([Z.a], e.prototype, "TakeFollowAction", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Da = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bLoading: !b.a.BIsAppidLoaded(e.appid) }), t;
          }
          return (
            Object(k.d)(e, a),
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
                    var t = Object(y.a)(e);
                    console.log(
                      "CreatorHomeEmbedForApp - failed to load appinfo " +
                        t.strErrorMsg
                    ),
                      a.setState({ strErrorMsg: t.strErrorMsg, bLoading: !1 });
                  });
            }),
            (e.prototype.render = function() {
              if (this.state.bLoading)
                return j.createElement(
                  "div",
                  { className: _a.DevSummaryWidgetCtn },
                  j.createElement(oe.a, null)
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
                  j.createElement(
                    R.a,
                    null,
                    j.createElement(wa, {
                      creatorID: r || (o || i),
                      eventModel: a,
                      bSmallFormat: !0
                    })
                  )
                );
              }
              return j.createElement("div", null);
            }),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        ka = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.social,
                t = "";
              switch (e.external_type) {
                case 3:
                case 7:
                  t = ya.a;
                  break;
                case 5:
                  t = Ca.a;
                  break;
                case 4:
                  t = Sa.a;
                  break;
                case 6:
                  t = Ia.a;
              }
              return j.createElement(
                "a",
                {
                  href:
                    (G.c.IN_CLIENT ? "steam://openurl_external/" : "") +
                    e.external_url,
                  target: G.c.IN_CLIENT ? void 0 : "_blank",
                  "data-tooltip-text": e.external_user_name
                    ? e.external_user_name
                    : e.external_url,
                  className: Object(W.a)(_a.SocialLink)
                },
                j.createElement("img", {
                  className: Object(W.a)(_a.SocialImg),
                  src: t
                }),
                j.createElement(
                  "div",
                  null,
                  e.external_follows.toLocaleString(L.c.GetPreferredLocales())
                )
              );
            }),
            t
          );
        })(j.Component),
        Aa = a("TOXn"),
        ja = a("NKJh"),
        La = a.n(ja),
        Ga = (function(t) {
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
            Object(k.d)(e, t),
            (e.prototype.PrepLoadEvents = function() {
              var e = this.props,
                t = e.partnerEventStore,
                a = e.eventModel;
              t &&
                a.BHasAnnouncementGID() &&
                this.setState({ bLoading: !0 }, this.ActualLoadEvent);
            }),
            (e.prototype.ActualLoadEvent = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r = this;
                return Object(k.e)(this, function(e) {
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
                            "EventDetails: " + Object(y.a)(e).strErrorMsg
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
                var n = A.a.Get().GetTracker();
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
              _e.f(n);
              for (var l = 0, c = n; l < c.length; l++) {
                var d = c[l],
                  p = s.GetClanEventFromAnnouncementGID(d);
                if (
                  p &&
                  p.GID != a.GID &&
                  p.AnnouncementGID != a.AnnouncementGID &&
                  (p &&
                    p.visibility_state == T.b.k_EEventStateVisible &&
                    (e.push(
                      j.createElement(Na, {
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
                return j.createElement(qe, {
                  appid: n,
                  eventModel: t,
                  announcementGID: t.GetAnnouncementGID(),
                  closeModal: this.HideInfiniteScroller,
                  partnerEventStore: a
                });
              if (this.state.bLoading)
                return j.createElement(oe.a, {
                  position: "center",
                  size: "medium"
                });
              if (0 == this.state.events.length)
                return j.createElement("div", null);
              var r = b.a.GetStoreCapsuleInfo(n).GetAppStoreData(),
                o = g.a.GetClanInfoByClanAccountID(
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
              if (0 == i.length) return j.createElement("div", null);
              var s = t.BHasAnnouncementGID();
              return j.createElement(
                "div",
                { className: ma.a.OtherEventsCtn },
                j.createElement(
                  "div",
                  { className: ft.a.EventSectionTitleCtn },
                  j.createElement(
                    "div",
                    { className: ft.a.EventSectionTitle },
                    Object(L.k)(
                      "#EventBrowse_MoreEventsTitle",
                      o.is_ogg ? r.title : o.group_name
                    ),
                    " "
                  ),
                  j.createElement(
                    "div",
                    { className: ft.a.EventSectionSpacer },
                    " "
                  ),
                  s &&
                    j.createElement(
                      "div",
                      {
                        className: ft.a.EventSectionMoreBtn,
                        onClick: this.OnViewAll
                      },
                      Object(L.d)("#EventBrowse_MoreEventsBtn")
                    ),
                  !s &&
                    j.createElement(
                      "a",
                      {
                        href:
                          G.c.COMMUNITY_BASE_URL +
                          "ogg/" +
                          n +
                          "/announcements",
                        className: ft.a.EventSectionMoreBtn
                      },
                      Object(L.d)("#EventBrowse_MoreEventsBtn")
                    )
                ),
                j.createElement("div", { className: ma.a.OtherEvents }, i)
              );
            }),
            Object(k.c)([Z.a], e.prototype, "PrepLoadEvents", null),
            Object(k.c)([Z.a], e.prototype, "ActualLoadEvent", null),
            Object(k.c)(
              [Z.a],
              e.prototype,
              "HandleTrackingWhenAdjacentLoadCompleted",
              null
            ),
            Object(k.c)([Z.a], e.prototype, "OnViewAll", null),
            Object(k.c)([Z.a], e.prototype, "HideInfiniteScroller", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Na = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.imageURLOverride,
                n = e.openNewWindow,
                r = e.appInfo,
                o = e.langOverride,
                i = e.onClick;
              if (!t)
                return j.createElement("div", {
                  className: ma.a.OtherEvents_EventCtn
                });
              var s = o || Object(me.d)(G.c.LANGUAGE),
                l =
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        s,
                        he.c.capsule_main
                      ),
                c = t.GetNameWithFallback(s),
                d = t.GetCategoryAsString(),
                p = t.GetSummaryWithFallback(s),
                u = t.GetSubTitleWithLanguageFallback(s);
              return (
                u && (30 < u.length || 30 < c.length) && (u = void 0),
                j.createElement(
                  j.Fragment,
                  null,
                  j.createElement(
                    Ie.c,
                    {
                      className: Object(W.a)(
                        ma.a.OtherEvents_EventCtn,
                        ma.a.HoversEnabled
                      ),
                      eventModel: t,
                      route: Ie.a.k_eView,
                      openNewWindow: n,
                      onClick: i
                    },
                    j.createElement(
                      "div",
                      { className: ma.a.EventSummaryContainer },
                      j.createElement(
                        "div",
                        { className: ma.a.EventSummaryType },
                        d
                      ),
                      j.createElement(
                        "div",
                        { className: ma.a.EventSummaryText },
                        p
                      )
                    ),
                    j.createElement("div", {
                      className: ma.a.OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: "url(" + l + ")"
                      }
                    }),
                    j.createElement(
                      "div",
                      { className: ma.a.OtherEvents_ContentCtn },
                      j.createElement(
                        "div",
                        { className: ma.a.OtherEvents_MainImageCtn },
                        j.createElement("img", {
                          src: l,
                          className: ma.a.OtherEvents_MainImage
                        })
                      ),
                      j.createElement(
                        "div",
                        { className: ma.a.OtherEvents_TextCtn },
                        j.createElement(
                          "div",
                          { className: ma.a.OtherEvents_TextTitle },
                          c
                        ),
                        u &&
                          j.createElement(
                            "div",
                            { className: ma.a.OtherEvents_SubTitle },
                            u
                          ),
                        j.createElement(ve.a, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                        })
                      )
                    )
                  ),
                  r &&
                    j.createElement(
                      "span",
                      { className: ma.a.AppCapsuleCtn },
                      j.createElement(
                        De.a,
                        {
                          strURL: G.c.STORE_BASE_URL + "app/" + r.appid,
                          type: "app",
                          id: r.appid,
                          hoverClassName: ma.a.AppCapsuleImageHover
                        },
                        j.createElement("img", {
                          className: ma.a.AppCapsuleImage,
                          src: this.props.appInfo.tiny_capsule
                        })
                      ),
                      j.createElement(
                        "span",
                        { className: ma.a.AppCapsulePrice },
                        Boolean(this.props.appInfo.discount_percent) &&
                          j.createElement(
                            "span",
                            { className: La.a.StoreSaleDiscountBox },
                            "-" + this.props.appInfo.discount_percent + "%"
                          ),
                        !this.props.appInfo.is_free &&
                          this.props.appInfo.price &&
                          j.createElement(
                            "span",
                            { className: La.a.StoreSalePriceBox },
                            this.props.appInfo.price
                          )
                      )
                    )
                )
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Ba = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                a = e.imageURLOverride,
                n = e.openNewWindow,
                r = e.onClick;
              if (!t)
                return j.createElement("div", {
                  className: ma.a.OtherEvents_EventCtn
                });
              var o = Object(me.d)(G.c.LANGUAGE),
                i =
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        o,
                        he.c.capsule_main
                      ),
                s = t.GetNameWithFallback(o),
                l = t.GetCategoryAsString();
              return j.createElement(
                Ie.c,
                {
                  className:
                    ma.a.OtherEvents_EventCtn + " " + ma.a.HorizontalEvent,
                  eventModel: t,
                  route: Ie.a.k_eView,
                  openNewWindow: n,
                  onClick: r
                },
                j.createElement(
                  "div",
                  { className: ma.a.OtherEvents_ContentCtn },
                  j.createElement(
                    "div",
                    { className: ma.a.OtherEvents_MainImageCtn },
                    j.createElement("img", {
                      src: i,
                      className: ma.a.OtherEvents_MainImage
                    })
                  )
                ),
                j.createElement(
                  "div",
                  { className: ma.a.OtherEvents_TextCtn },
                  j.createElement(
                    "div",
                    { className: ma.a.HorizontalDescriptionCtn },
                    j.createElement(
                      "div",
                      { className: ma.a.HorizontalDescription },
                      l
                    ),
                    j.createElement(ve.a, {
                      bSingleLine: !0,
                      dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                    })
                  ),
                  j.createElement("div", { className: ma.a.HorizontalTitle }, s)
                )
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Ma = (function() {
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
            Object(k.c)([m.observable], e.prototype, "m_stats", void 0),
            Object(k.c)(
              [m.observable],
              e.prototype,
              "m_lastUpdateTime",
              void 0
            ),
            e
          );
        })(),
        xa = new ((function() {
          function e() {
            (this.m_mapPerEventStats = new Map()),
              (this.m_mapSummaryStats = new Map()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var n = this;
              if (!this.m_bLoadedFromConfig) {
                var e = Object(G.f)(
                  "trackingdatasummary",
                  "application_config"
                );
                this.ValidateStoreDefault(e) &&
                  this.m_mapSummaryStats.set(e.clan_account_id, new Ma(e));
                var t = Object(G.f)("trackingdataevents", "application_config");
                this.ValidateStoreDefaultList(t) &&
                  t.forEach(function(e) {
                    var t = O.a.InitFromClanID(e.clan_account_id),
                      a = n.GetKey(t, e.event_gid);
                    n.m_mapPerEventStats.set(a, new Ma(e));
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
                  this.m_mapPerEventStats.set(a, new Ma(null)),
                this.m_mapPerEventStats.get(a)
              );
            }),
            (e.prototype.GetTotalStats = function(e) {
              return (
                this.LazyInit(),
                this.m_mapSummaryStats.has(e.GetAccountID()) ||
                  this.m_mapSummaryStats.set(e.GetAccountID(), new Ma(null)),
                this.m_mapSummaryStats.get(e.GetAccountID())
              );
            }),
            (e.prototype.GetKey = function(e, t) {
              return e.GetAccountID() + "_" + t;
            }),
            (e.prototype.LoadStatsForEvents = function(c, d, p) {
              return Object(k.b)(this, void 0, void 0, function() {
                var n,
                  t,
                  a,
                  r,
                  o,
                  i,
                  s,
                  l = this;
                return Object(k.e)(this, function(e) {
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
                        Object(G.d)() + "actions/ajaxgetpartnereventsreport"),
                        (r = {
                          sessionid: G.c.SESSIONID,
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
                            new Ma(o.data.summary)
                          ),
                            o.data.events_detail.forEach(function(e) {
                              var t = l.GetKey(c, e.event_gid);
                              l.m_mapPerEventStats.has(t)
                                ? l.m_mapPerEventStats.get(t).reset(e)
                                : l.m_mapPerEventStats.set(t, new Ma(e));
                            });
                        }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = e.sent()),
                        (s = Object(y.a)(i)),
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
            Object(k.c)(
              [m.observable],
              e.prototype,
              "m_mapPerEventStats",
              void 0
            ),
            Object(k.c)(
              [m.observable],
              e.prototype,
              "m_mapSummaryStats",
              void 0
            ),
            Object(k.c)([m.action], e.prototype, "LazyInit", null),
            e
          );
        })())(),
        Ra = a("sGzE"),
        Pa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.summary,
                a = e.bIncludeDescription;
              return 0 == t.total_read + t.total_showm
                ? null
                : j.createElement(
                    "div",
                    null,
                    j.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          Ra.StatsCtnTitle,
                          a ? Ra.NormalStatsMode : Ra.SmallStatsMode
                        )
                      },
                      j.createElement(
                        "h1",
                        null,
                        Object(L.d)("#EventDashBoard_SummaryStats_Title")
                      ),
                      Boolean(a) &&
                        j.createElement(
                          "p",
                          null,
                          Object(L.d)("#EventDashBoard_SummaryStats_Desc"),
                          " ",
                          j.createElement(
                            "a",
                            {
                              href:
                                "https://partner.steamgames.com/doc/marketing/event_tools/stats",
                              target: "_blank"
                            },
                            Object(L.d)("#EventDashBoard_SummaryStats_Link")
                          )
                        )
                    ),
                    j.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          Ra.StatsCtn,
                          a ? Ra.NormalStatsMode : Ra.SmallStatsMode
                        )
                      },
                      j.createElement(
                        "div",
                        { className: Ra.StatsLeftSection },
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle_ctn },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)("#EventDashBoard_Location_LibraryHome")
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)(
                              "#EventDashBoard_Summary_LibraryHome_Shown"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.library_overview_shown.toLocaleString(
                              L.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)(
                              "#EventDashBoard_Summary_LibraryHome_Read"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.library_overview_read.toLocaleString(
                              L.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement("br", null),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle_ctn },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)(
                              "#EventDashBoard_Location_LibraryDetail"
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Shown"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_shown.toLocaleString(
                              L.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Read"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_read.toLocaleString(
                              L.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement("br", null),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)(
                              "#EventDashBoard_Summary_AppDetailActivity_Shown"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.app_details_activity_shown.toLocaleString(
                              L.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)(
                              "#EventDashBoard_Summary_AppDetailActivity_Read"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.app_details_activity_read.toLocaleString(
                              L.c.GetPreferredLocales()
                            )
                          )
                        )
                      ),
                      j.createElement(
                        "div",
                        { className: Ra.StatsRightSection },
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle_ctn },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)("#EventDashBoard_Location_StoreDetail")
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)(
                              "#EventDashBoard_Summary_StoreAppPage_Shown"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.store_app_page_shown.toLocaleString(
                              L.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)(
                              "#EventDashBoard_Summary_StoreAppPage_Read"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.store_app_page_read.toLocaleString(
                              L.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement("br", null),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle_ctn },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)(
                              "#EventDashBoard_Location_CommunityDetail"
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)(
                              "#EventDashBoard_Summary_Community_Shown"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.community_hub_shown.toLocaleString(
                              L.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)(
                              "#EventDashBoard_Summary_Community_Read"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.community_hub_read.toLocaleString(
                              L.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle_ctn },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)(
                              "#EventDashBoard_Location_NewsHubDetail"
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)("#EventDashBoard_Summary_NewsHub_Shown")
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.news_hub_shown.toLocaleString(
                              L.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Ra.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)("#EventDashBoard_Summary_NewsHub_Read")
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.news_hub_read.toLocaleString(
                              L.c.GetPreferredLocales()
                            )
                          )
                        )
                      )
                    )
                  );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Ha = a("ZCZY"),
        Fa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.GenerateBreadCrumbs = function() {
              var t = new Array();
              return (
                this.props.crumbs.forEach(function(e) {
                  e.url.startsWith("http")
                    ? t.push(
                        j.createElement(
                          "a",
                          { key: "anchor_" + e.name, href: e.url },
                          e.name
                        )
                      )
                    : t.push(
                        j.createElement(
                          P.b,
                          { key: "link_" + e.name, to: e.url },
                          e.name
                        )
                      ),
                    t.push(
                      j.createElement("span", { key: e.name + "span" }, " > ")
                    );
                }),
                t
              );
            }),
            (t.prototype.render = function() {
              var e = this.GenerateBreadCrumbs();
              return j.createElement(
                "div",
                { className: Object(W.a)(Ha.BreadContainer) },
                j.createElement("div", { className: "blockbg" }, e),
                j.createElement("div", { style: { clear: "left" } })
              );
            }),
            t
          );
        })(j.Component),
        za = a("4sqd"),
        Ua = a("5L1o"),
        Wa = j.lazy(function() {
          return Promise.all([a.e(0), a.e(1), a.e(6)]).then(
            a.bind(null, "NIbt")
          );
        }),
        Va = (function(t) {
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
            Object(k.d)(e, t),
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
                return j.createElement(
                  "div",
                  { className: Ve.a.FlexCenter, style: { height: "400px" } },
                  j.createElement(oe.a, {
                    size: "medium",
                    string: Object(L.d)("#Loading")
                  })
                );
              var p = t.GetDescriptionWithFallback(a),
                u = b.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData(),
                m = Object(G.d)() == G.c.STORE_BASE_URL,
                h = g.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                ),
                v = Object(Ie.d)(
                  t,
                  m ? Ie.a.k_eStoreNewsHub : Ie.a.k_eCommunityAllNews,
                  "allowRelative",
                  h && h.vanity_url
                );
              return j.createElement(Za, {
                event: t,
                lang: a,
                titleBar: d,
                body: j.createElement(
                  R.a,
                  null,
                  j.createElement(
                    "div",
                    { className: la.a.EventDetailTitleContainer },
                    j.createElement(Fa, {
                      crumbs: [
                        {
                          name: Object(L.d)("#BreadCrumbs_AllEvents"),
                          url: Object(Ie.d)(
                            t,
                            Ie.a.k_eStoreUsersNewsHub,
                            "allowRelative"
                          )
                        },
                        {
                          name: Object(L.d)("#BreadCrumbs_GameEvents", u.title),
                          url: v
                        }
                      ]
                    }),
                    j.createElement(
                      "div",
                      { className: la.a.EventDetailTitle },
                      t.GetNameWithFallback(a)
                    ),
                    t.BHasSubTitle(a) &&
                      j.createElement(
                        "div",
                        { className: la.a.EventDetailsSubTitle },
                        t.GetSubTitle(a)
                      )
                  ),
                  t.BHasBroadcastEnabled() &&
                    j.createElement(
                      "div",
                      { className: la.a.EventBroadcastCtn },
                      j.createElement(
                        j.Suspense,
                        { fallback: j.createElement("div", null) },
                        j.createElement(Wa, {
                          event: this.props.event,
                          bIsPreview: this.props.previewMode,
                          accountIDs: this.props.previewMode
                            ? this.props.event.jsondata.broadcast_whitelist
                            : void 0
                        })
                      )
                    ),
                  j.createElement(
                    "div",
                    { className: la.a.EventColumns },
                    j.createElement(
                      "div",
                      { className: la.a.EventDetailsDescription },
                      j.createElement(
                        R.a,
                        null,
                        t.BHasTag("steam_award_nomination_request") &&
                          j.createElement(za.a, {
                            event: t,
                            lang: a,
                            previewMode: l
                          }),
                        t.BHasTag("steam_award_vote_request") &&
                          j.createElement(za.b, {
                            event: t,
                            lang: a,
                            previewMode: l
                          })
                      ),
                      j.createElement(
                        R.a,
                        null,
                        j.createElement(
                          "div",
                          {
                            className: Object(W.a)(
                              "EventDetailsBody",
                              la.a.EventDetailsBody
                            )
                          },
                          j.createElement(Aa.a, {
                            text: p || "",
                            partnerEventStore: n,
                            showErrorInfo: l,
                            event: t,
                            languageOverride: a
                          })
                        )
                      ),
                      Boolean(t.jsondata.read_more_link) &&
                        j.createElement(
                          U.a,
                          {
                            className: Object(W.a)(ft.a.Button),
                            href: t.jsondata.read_more_link
                          },
                          Object(L.d)("#EventEmail_Button_ClickForMoreDetails")
                        ),
                      j.createElement("span", { className: ft.a.Clear }),
                      j.createElement(
                        R.a,
                        null,
                        j.createElement(Et.a, { appid: t.appid })
                      )
                    ),
                    j.createElement(
                      R.a,
                      null,
                      j.createElement(Ya, {
                        event: t,
                        lang: a,
                        nOverrideStartTime: o,
                        nOverrideEndTime: i
                      })
                    )
                  ),
                  j.createElement(se.b, {
                    eventModel: t,
                    emoticonStore: r,
                    partnerEventStore: n
                  })
                ),
                postbody: j.createElement(R.a, null, s, c),
                footer: j.createElement(
                  R.a,
                  null,
                  j.createElement(
                    "div",
                    { className: la.a.AppSummaryCtn },
                    j.createElement(
                      "div",
                      { className: la.a.EventBodyPosition },
                      Boolean(
                        null != u.appid && null != u.appid && 0 != u.appid
                      ) &&
                        j.createElement(
                          "div",
                          { className: la.a.AppSummaryWidgetTitleCtn },
                          j.createElement(
                            "span",
                            { className: la.a.Title },
                            Object(L.d)("#CreatorHome_ThisGame")
                          ),
                          j.createElement(
                            "div",
                            { className: la.a.AppSummaryWidgetCtn },
                            j.createElement(Ua.f, { id: t.appid })
                          )
                        ),
                      j.createElement(Da, {
                        appid: t.appid,
                        eventModel: t,
                        bSmallFormat: !0
                      })
                    )
                  )
                )
              });
            }),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Za = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
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
                c = "lang_" + Object(me.c)(a),
                d = t.BImageNeedScreenshotFallback("background", a);
              return j.createElement(
                "div",
                {
                  className: Object(W.a)(
                    la.a.EventDetailsPageContainer,
                    c,
                    ft.a.PartnerEventFont,
                    l
                      ? la.a.DetailArtworkAgeAppropriate
                      : la.a.DetailArtworkAgeNotAppropriate,
                    d && la.a.NoTitleArtwork
                  )
                },
                n,
                j.createElement(
                  "div",
                  { className: la.a.EventCoverImageCtn },
                  j.createElement(
                    "div",
                    { className: la.a.EventCoverImageBlr },
                    j.createElement("div", {
                      className: la.a.EventCoverImageFuzz,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + s + ")"
                      }
                    }),
                    j.createElement("div", {
                      className: la.a.EventCoverImage,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + s + ")"
                      }
                    })
                  ),
                  j.createElement("div", { className: la.a.CoverImageGradient })
                ),
                j.createElement(
                  "div",
                  { className: la.a.EventBodyCtn },
                  j.createElement("div", {
                    className: la.a.EventBackgroundBlurCtn
                  }),
                  j.createElement(
                    "div",
                    { className: la.a.EventBodyPosition },
                    j.createElement(
                      "div",
                      { className: la.a.EventBody },
                      j.createElement("div", {
                        className: la.a.EventBackgroundBlur,
                        style: { backgroundImage: "url(" + s + ")" }
                      }),
                      j.createElement(R.a, null, r)
                    ),
                    Boolean(o) && j.createElement(R.a, null, o)
                  )
                ),
                Boolean(i) && j.createElement(R.a, null, i)
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Ya = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
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
                  Object(h.a)(
                    i,
                    "EventDetailsRightColumn - clan info (" +
                      t.clanSteamID.GetAccountID() +
                      ") is missing"
                  ),
                  null
                );
              var s = N.a.GetTimeNowWithOverride(),
                l = n || t.GetStartTimeAndDateUnixSeconds();
              return j.createElement(
                "div",
                { className: la.a.EventDetailTitleDesc },
                j.createElement(
                  "div",
                  { className: la.a.EventDetailsSticky },
                  i.is_ogg
                    ? j.createElement(qa, { appid: i.appid })
                    : j.createElement(Ja, { clanSteamID: t.clanSteamID }),
                  j.createElement(Et.b, {
                    event: t,
                    nOverrideEndTime: r,
                    nOverrideStartTime: n
                  }),
                  28 !== t.type &&
                    s < l &&
                    j.createElement(
                      "div",
                      { className: la.a.EventDetailTimeInfo },
                      j.createElement(le.a, {
                        eventModel: t,
                        eventGID: t.GID,
                        lang: a
                      })
                    ),
                  j.createElement(
                    "div",
                    { className: la.a.EventDetailUserType },
                    j.createElement(
                      "div",
                      { className: la.a.RightSideTitles },
                      Object(L.d)("#EventDisplay_RightColumnTitle_EventType")
                    ),
                    j.createElement(
                      "div",
                      { className: la.a.EventDetailsType },
                      o,
                      " "
                    )
                  ),
                  j.createElement(Xa, { event: t })
                )
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        qa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var t = this.props.appid;
              Object(h.a)(t && 0 != t, "Expected Appid In Game Info Section");
              var e = b.a.GetStoreCapsuleInfo(t),
                a = e.GetAppStoreData();
              return j.createElement(
                "div",
                { className: la.a.EventDetailGameCallToAction },
                j.createElement(
                  "div",
                  { className: la.a.RightSideTitles },
                  ht.q.some(function(e) {
                    return t === e;
                  })
                    ? Object(L.d)("#EventDisplay_RightColumnTitle_Blog")
                    : Object(L.d)("#EventDisplay_RightColumnTitle_Game")
                ),
                j.createElement(
                  "a",
                  { href: e ? a.capsule_link : "" },
                  j.createElement("div", {
                    className: la.a.EventDetailsGame,
                    style: { backgroundImage: "url(" + a.capsule + ")" }
                  })
                ),
                j.createElement(Qa, { appid: t })
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Ja = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.clanSteamID,
                t = g.a.GetClanInfoByClanAccountID(e.GetAccountID());
              return t
                ? j.createElement(
                    "div",
                    { className: la.a.EventDetailGameCallToAction },
                    j.createElement(
                      "div",
                      { className: la.a.RightSideTitles },
                      t.group_name
                    ),
                    j.createElement(
                      "a",
                      { href: g.a.GetCreatorStoreURL(e) },
                      j.createElement("div", {
                        className: la.a.EventDetailsAvatar,
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
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Qa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.componentDidMount = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                return Object(k.e)(this, function(e) {
                  return (
                    b.a.EnsureStoreCapsuleInfoLoaded(this.props.appid),
                    w.a.HintLoad(),
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
              w.a.BOwnsApp(e)
                ? (n = Object(L.d)("#EventDisplay_CallToAction_InLibrary"))
                : t.GetAppStoreData().coming_soon && !t.GetAppStoreData().subid
                ? (n = Object(L.d)("#EventDisplay_CallToAction_ComingSoon"))
                : a.is_free
                ? (n = Object(L.d)("#EventDisplay_CallToAction_FreeToPlay"))
                : a.is_free || (n = a.price);
              var r =
                1 !== a.success ||
                ht.q.some(function(e) {
                  return a.appid === e;
                });
              return j.createElement(
                "div",
                { className: r ? la.a.SteamBlog : void 0 },
                j.createElement(
                  "div",
                  { className: la.a.GameActions },
                  j.createElement(
                    "div",
                    {
                      className: la.a.Ownership,
                      style: { fontSize: n && n.length < 10 ? "12px" : "10px" }
                    },
                    n || null
                  ),
                  j.createElement(Ua.a, { info: a })
                ),
                j.createElement(
                  "div",
                  { className: Object(W.a)(la.a.GameActions) },
                  j.createElement(Ua.h, { info: a })
                )
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Ka = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"],
        Xa = (j.Component,
        (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_cancelSignal = _.a.CancelToken.source()), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this,
                a = this.props.event;
              a.BIsPartnerEvent() &&
                a.BIsVisibleEvent() &&
                A.a
                  .Get()
                  .LoadSingleAppEventPermissions(a.clanSteamID)
                  .then(function(e) {
                    e &&
                      e.can_edit &&
                      xa.LoadStatsForEvents(
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
              if (!A.a.Get().GetPartnerEventPermissions(e.clanSteamID).can_edit)
                return null;
              var t =
                e.BIsPartnerEvent() &&
                e.BIsVisibleEvent() &&
                xa.GetStatsFor(e.clanSteamID, e.GID);
              return j.createElement(
                R.a,
                null,
                j.createElement(
                  "div",
                  { className: la.a.EditorStatsCtn },
                  j.createElement(
                    "div",
                    { className: la.a.EditorStatsRow },
                    j.createElement(
                      "span",
                      null,
                      Object(L.d)("#EventEditor_Comments")
                    ),
                    j.createElement(
                      "span",
                      null,
                      e.nCommentCount.toLocaleString(L.c.GetPreferredLocales())
                    )
                  ),
                  j.createElement(
                    "div",
                    { className: la.a.EditorStatsRow },
                    j.createElement(
                      "span",
                      null,
                      Object(L.d)("#EventEditor_UpVotes")
                    ),
                    j.createElement(
                      "span",
                      null,
                      e.nVotesUp
                        ? e.nVotesUp.toLocaleString(L.c.GetPreferredLocales())
                        : 0
                    )
                  ),
                  j.createElement(
                    "div",
                    { className: la.a.EditorStatsRow },
                    j.createElement(
                      "span",
                      null,
                      Object(L.d)("#EventEditor_DownVotes")
                    ),
                    j.createElement(
                      "span",
                      null,
                      e.nVotesDown
                        ? e.nVotesDown.toLocaleString(L.c.GetPreferredLocales())
                        : 0
                    )
                  )
                ),
                Boolean(t) &&
                  j.createElement(
                    "div",
                    { className: la.a.EditorStatsCtn },
                    Object(L.d)("#EventDashBoard_SummaryStats_Admin_Title"),
                    j.createElement(Pa, { summary: t.m_stats })
                  )
              );
            }),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component)),
        $a = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.componentDidMount = function() {
              Zt.GetRawDoorData() || Zt.LoadDoorData(),
                Vt.LoadSaleTokenPoints();
            }),
            (t.prototype.render = function() {
              var e = Zt.GetRawDoorData();
              if (!e) return null;
              for (
                var t = e.length - 1,
                  a = N.a.GetTimeNowWithOverride() > e[t].rtime_start,
                  n = [],
                  r = 0;
                r <= t;
                r++
              )
                n.push(
                  j.createElement(tn, {
                    key: "envelope-" + r,
                    iDoorIndex: r,
                    strFontFamily: this.props.strFontFamily
                  })
                );
              var o = Vt.GetSaleTokenPoints().points;
              return j.createElement(
                R.a,
                null,
                j.createElement(
                  "div",
                  { className: la.a.LunarNewYearHeader },
                  j.createElement(
                    "div",
                    { className: la.a.EnvelopeArea },
                    0 <= o &&
                      j.createElement(
                        "div",
                        { className: la.a.TokenBalanceContainer },
                        Object(L.d)("#Lunar2020_YourBalancePrefix"),
                        j.createElement(
                          "a",
                          {
                            className: la.a.TokenBalance,
                            href: G.c.STORE_BASE_URL + "lunarnewyearmarket"
                          },
                          " ",
                          Object(L.d)("#Lunar2020_BalanceNumberOfTokens", o),
                          " "
                        )
                      ),
                    n
                  ),
                  !a &&
                    j.createElement(
                      "div",
                      { className: la.a.BottomMessage },
                      Object(L.d)("#Lunar2020_CheckBackEachDay")
                    )
                )
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        en = [
          "#Lunar2020_FirstGift",
          "#Lunar2020_SecondGift",
          "#Lunar2020_ThirdGift",
          "#Lunar2020_FourthGift"
        ],
        tn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.OpenEnvelope = function(n) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = Zt.BIsDoorOpened(this.props.iDoorIndex)),
                        (a = Object(je.m)(n)),
                        t
                          ? (Object(ke.b)(
                              j.createElement(
                                rn,
                                Object(k.a)({ bIsFirstOpen: !1 }, this.props)
                              ),
                              a
                            ),
                            [2])
                          : [4, Zt.OpenDoor(this.props.iDoorIndex, !0)]
                      );
                    case 1:
                      return (
                        e.sent() &&
                          Object(ke.b)(
                            j.createElement(
                              rn,
                              Object(k.a)({ bIsFirstOpen: !0 }, this.props)
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
              var t = Object(je.m)(e),
                a = j.createElement(
                  "a",
                  { href: G.c.HELP_BASE_URL },
                  Object(L.d)("#User_LimitedAccount_UrlInfo")
                );
              Object(ke.b)(
                j.createElement(Ae.b, {
                  strTitle: Object(L.d)("#Lunar2020_LimitedUserDialogTitle"),
                  strDescription: Object(L.k)("#User_LimitedAccount", a),
                  bAlertDialog: !0
                }),
                t
              );
            }),
            (t.prototype.VOOnClose = function() {
              G.i.is_support && Zt.OpenDoor(this.props.iDoorIndex, !1);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.iDoorIndex,
                a = e.strFontFamily;
              Object(h.a)(
                0 <= t && t < en.length && t < Zt.GetDoorCount(),
                "Day index #" + t + " not in valid range."
              );
              for (
                var n = Object(L.d)(en[t]),
                  r = !G.i.logged_in,
                  o = Zt.BIsDoorOpened(t),
                  i = Zt.BCanUserOpenDoor(t),
                  s = !0,
                  l = 0;
                l < t;
                l++
              )
                s = s && Zt.BIsDoorOpened(l);
              var c = !o && i && s,
                d = new Date(1e3 * Zt.GetRawDoorData()[t].rtime_start),
                p = r
                  ? Object(L.d)("#Login_SignIn")
                  : o
                  ? Object(L.d)("#Lunar2020_RereadStory")
                  : c
                  ? Object(L.d)("#Lunar2020_GiftCanBeOpenedNow")
                  : i
                  ? Object(L.d)("#Lunar2020_GiftCanBeOpenedAfterThePreviousOne")
                  : Object(L.d)(
                      "#Lunar2020_GiftLockedUntilDate",
                      d.toLocaleDateString(L.c.GetPreferredLocales(), {
                        month: "numeric",
                        day: "numeric"
                      })
                    ),
                u = r
                  ? Je.a
                  : G.i.is_limited
                  ? this.ShowLimitedUserDialog
                  : o || c
                  ? this.OpenEnvelope
                  : null,
                m = Object(W.a)(
                  la.a.EnvelopeContainer,
                  r && la.a.NeedLogin,
                  o && la.a.Opened,
                  c && la.a.Unlocked,
                  !o && !c && la.a.Locked
                );
              return j.createElement(
                "div",
                { className: m },
                j.createElement("div", { className: la.a.BackingRect }),
                j.createElement(
                  "div",
                  { className: la.a.Envelope },
                  j.createElement(
                    "div",
                    { className: la.a.GiftLabel, style: { fontFamily: a } },
                    n
                  )
                ),
                j.createElement(
                  "div",
                  { className: la.a.OpenState, onClick: u },
                  p
                ),
                (G.i.is_support &&
                  o &&
                  ("beta" == G.c.WEB_UNIVERSE || "dev" == G.c.WEB_UNIVERSE) &&
                  j.createElement(
                    "div",
                    {
                      className: Object(W.a)(la.a.OpenState, la.a.VO),
                      onClick: this.VOOnClose
                    },
                    "(VO) Close Gift"
                  )) ||
                  null
              );
            }),
            Object(k.c)([Z.a], t.prototype, "OpenEnvelope", null),
            Object(k.c)([Z.a], t.prototype, "ShowLimitedUserDialog", null),
            Object(k.c)([Z.a], t.prototype, "VOOnClose", null),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        an = [
          "#Lunar2020_StoryDayOneHeader",
          "#Lunar2020_StoryDayTwoHeader",
          "#Lunar2020_StoryDayThreeHeader",
          "#Lunar2020_StoryDayFourHeader"
        ],
        nn = [
          "#Lunar2020_StoryDayOne",
          "#Lunar2020_StoryDayTwo",
          "#Lunar2020_StoryDayThree",
          "#Lunar2020_StoryDayFour"
        ],
        rn = function(e) {
          var t = j.useState(!e.bIsFirstOpen),
            a = t[0],
            n = t[1];
          j.useEffect(function() {
            return n(!0);
          }, []);
          var r =
              G.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.mp4" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            o =
              G.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.webm" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            i = e.iDoorIndex == Zt.GetDoorCount() - 1;
          return j.createElement(
            Ae.c,
            {
              className: la.a.LunarNewYearOpenEnvelopeVideoDialog,
              closeModal: e.closeModal
            },
            j.createElement(
              "div",
              { className: la.a.Container },
              j.createElement(
                "div",
                { className: la.a.Column },
                j.createElement(
                  "div",
                  { className: la.a.StoryHeader },
                  Object(L.d)("#Lunar2020_StoryTitle")
                ),
                j.createElement(
                  "div",
                  { className: la.a.StorySubHeader },
                  Object(L.d)("#Lunar2020_StorySubTitle")
                ),
                j.createElement(
                  "div",
                  { className: la.a.StorySubHeader },
                  Object(L.d)(an[e.iDoorIndex])
                ),
                j.createElement(
                  "div",
                  { className: la.a.StoryText },
                  Object(L.d)(nn[e.iDoorIndex])
                ),
                j.createElement(
                  "div",
                  { className: la.a.VideoBox },
                  j.createElement(
                    "div",
                    {
                      className: Object(W.a)(la.a.CoinText, a && la.a.Visible)
                    },
                    Object(L.d)("#Lunar2020_ReceivedNumberOfTokens", 100)
                  ),
                  j.createElement(
                    "video",
                    {
                      autoPlay: e.bIsFirstOpen,
                      muted: !0,
                      className: la.a.LunarNewYearOpenEnvelopeVideo
                    },
                    j.createElement("source", { src: r, type: "video/mp4" }),
                    j.createElement("source", { src: o, type: "video/webm" }),
                    Object(L.d)("#Lunar2020_ErrorLoadingVideo")
                  )
                )
              ),
              j.createElement(
                "div",
                { className: la.a.Column },
                j.createElement(
                  "div",
                  { className: la.a.StoryPicture },
                  j.createElement("img", {
                    src: Zt.GetStoryImage(e.iDoorIndex)
                  })
                ),
                !i &&
                  j.createElement(
                    "div",
                    { className: la.a.CheckBackText },
                    Object(L.d)("#Lunar2020_CheckBackEachDayForStory")
                  )
              )
            ),
            j.createElement(
              "div",
              { className: la.a.Links },
              j.createElement(
                "div",
                { className: la.a.MarketLink },
                j.createElement(
                  "a",
                  { href: G.c.STORE_BASE_URL + "lunarnewyearmarket" },
                  Object(L.d)("#Lunar2020_LinkFromVideoToMarket")
                )
              ),
              j.createElement(
                "div",
                { className: la.a.MarketLink, onClick: e.closeModal },
                Object(L.d)("#Lunar2020_LinkBackToSale")
              )
            )
          );
        },
        on = a("ZlHF"),
        sn = a.n(on),
        ln = a("gyoR"),
        cn = (a("bUNj"), a("SG7E")),
        dn = a("6Aav"),
        pn = (function() {
          function e(e) {
            (this.appid = e.appid),
              (this.demo_package = e.appid),
              (this.ogg_clanid = e.ogg_clanid),
              (this.info_clan_event_gid = e.info_clan_event_gid),
              (this.upcoming_clan_event_gid = e.upcoming_clan_event_gid),
              (this.upcoming_clan_event_type = e.upcoming_clan_event_type),
              (this.last_clan_event_gid = e.last_clan_event_gid),
              (this.last_clan_event_type = e.last_clan_event_type);
          }
          return (
            (e.prototype.BHasArtistStatement = function() {
              return Boolean(this.info_clan_event_gid);
            }),
            e
          );
        })(),
        un = (function() {
          function e() {
            (this.m_mapAppToDemoInfo = new Map()),
              (this.m_mapAppIDToLoadPromise = new Map());
          }
          return (
            (e.Get = function() {
              return (
                e.s_DemoEventStore || (e.s_DemoEventStore = new e()).Init(),
                e.s_DemoEventStore
              );
            }),
            (e.prototype.BHasDemoEventInfo = function(e) {
              return this.m_mapAppToDemoInfo.has(e);
            }),
            (e.prototype.GetDemoEventInfo = function(e) {
              return this.m_mapAppToDemoInfo.get(e);
            }),
            (e.prototype.BHasAboutDemo = function(e) {
              var t = this.m_mapAppToDemoInfo.get(e);
              return t && Boolean(t.info_clan_event_gid);
            }),
            (e.prototype.SetCollectionInfo = function(e, t) {
              (this.m_sFeaturedCollection = e), (this.m_sInfoCollection = t);
            }),
            (e.prototype.Init = function() {
              var t = this,
                e = Object(G.f)("demoeventstore", "application_config");
              this.ValidateStoreDefault(e) &&
                e.forEach(function(e) {
                  t.m_mapAppToDemoInfo.set(e.appid, new pn(e));
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
                ("number" == typeof t[0].appid &&
                  "number" == typeof t[0].demo_package)
              );
            }),
            (e.prototype.LoadAppIDsBatch = function(i, s, l) {
              return (
                void 0 === s && (s = !1),
                Object(k.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n,
                    r,
                    o = this;
                  return Object(k.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return this.m_sFeaturedCollection &&
                          this.m_sInfoCollection
                          ? ((t = new Array()),
                            (a = new Array()),
                            i.forEach(function(e) {
                              o.m_mapAppToDemoInfo.has(e)
                                ? o.m_mapAppIDToLoadPromise.has(e) &&
                                  a.push(o.m_mapAppIDToLoadPromise.get(e))
                                : t.push(e);
                            }),
                            0 === t.length && 0 === a.length
                              ? [2, !0]
                              : 0 === t.length && 1 === a.length
                              ? [2, a[0]]
                              : (0 < t.length &&
                                  ((n = this.InternalLoadAppIDsBatch(t, s, l)),
                                  t.forEach(function(e) {
                                    return o.m_mapAppIDToLoadPromise.set(e, n);
                                  }),
                                  a.push(n)),
                                (r = !0),
                                [
                                  4,
                                  Promise.all(a).then(function(e) {
                                    r = Boolean(r && e);
                                  })
                                ]))
                          : (console.error(
                              "DemoStore: LoadAppIDsBatch no collection initialized"
                            ),
                            [2, !1]);
                      case 1:
                        return e.sent(), [2, r];
                    }
                  });
                })
              );
            }),
            (e.prototype.InternalLoadAppIDsBatch = function(o, i, s) {
              return (
                void 0 === i && (i = !1),
                Object(k.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n,
                    r = this;
                  return Object(k.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          e.trys.push([0, 2, , 3]),
                          (t =
                            G.c.STORE_BASE_URL +
                            "saleaction/ajaxgetdemoevents"),
                          [
                            4,
                            _.a.get(t, {
                              params: {
                                appids: o,
                                cc: G.c.COUNTRY || "US",
                                origin: self.origin,
                                collectionid_featured: "gamefestival2020",
                                collectionid_info: "gamefestival2020info",
                                load_events: i
                              },
                              cancelToken: s ? s.token : void 0
                            })
                          ]
                        );
                      case 1:
                        return 1 === (a = e.sent()).data.success
                          ? (a.data.info.forEach(function(e) {
                              r.m_mapAppToDemoInfo.set(e.appid, new pn(e));
                            }),
                            T.c.RegisterClanEvents(a.data.events),
                            [2, !0])
                          : (console.log(
                              "Failed to call ajaxgetdemoevents with response:" +
                                a.data.err_msg
                            ),
                            [3, 3]);
                      case 2:
                        return (
                          (n = e.sent()),
                          console.log("Failed to call ajaxgetdemoevents:" + n),
                          [3, 3]
                        );
                      case 3:
                        return [2, !1];
                    }
                  });
                })
              );
            }),
            (e.prototype.EnsurePartnerEventLoadedForDemo = function(n, r) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = new Array()),
                        (a = this.m_mapAppToDemoInfo.get(n))
                          ? (a.info_clan_event_gid &&
                              t.push(a.info_clan_event_gid),
                            a.last_clan_event_gid &&
                              t.push(a.last_clan_event_gid),
                            a.upcoming_clan_event_gid &&
                              t.push(a.upcoming_clan_event_gid),
                            [
                              4,
                              T.c.LoadBatchPartnerEventsByAnnouncementGID(
                                t,
                                null,
                                r
                              )
                            ])
                          : [3, 2]
                      );
                    case 1:
                      e.sent(), (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            e
          );
        })(),
        mn = (function() {
          function e() {
            this.m_mapAppToTrailers = new Map();
          }
          return (
            (e.Get = function() {
              return (
                e.s_DemoEventStore || (e.s_DemoEventStore = new e()).Init(),
                e.s_DemoEventStore
              );
            }),
            (e.prototype.BHasTrailerForApp = function(e) {
              return this.m_mapAppToTrailers.has(e);
            }),
            (e.prototype.GetTrailersForApp = function(e) {
              return this.m_mapAppToTrailers.get(e);
            }),
            (e.prototype.Init = function() {}),
            (e.prototype.LoadTrailersForApp = function(o) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_mapAppToTrailers.has(o)
                        ? [2, this.m_mapAppToTrailers.get(o)]
                        : ((t = G.c.STORE_BASE_URL + "api/appdetails"),
                          (a = {
                            appids: o,
                            filters: "movies",
                            origin: self.origin
                          }),
                          [4, _.a.get(t, { params: a })]);
                    case 1:
                      return (
                        (n = e.sent()) &&
                        n.data &&
                        n.data[o] &&
                        1 == n.data[o].success
                          ? ((r = n.data[o].data.movies),
                            this.m_mapAppToTrailers.set(o, r || []))
                          : console.error(
                              "LoadTrailersForApp: failed for appid: " + o,
                              n
                            ),
                        [2, void 0]
                      );
                  }
                });
              });
            }),
            e
          );
        })(),
        hn = a("Z1oF"),
        vn = a("d+Me"),
        _n = a("YVfL"),
        bn = a.n(_n),
        gn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                config: a.SetupHardcodedConfig(
                  s.a.parse(e.props.history.location.search.substring(1))
                ),
                bLoaded: !1,
                rgVisibleApps: []
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          var a;
          return (
            Object(k.d)(e, t),
            ((a = e).prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "SaleSectionEventScheduleInner to unload"
              );
            }),
            (e.SetupHardcodedConfig = function(e) {
              var t = {
                sCollection: "gamefestival2020",
                sInfoCollcetion: "gamefestival2020info"
              };
              return (
                un.Get().SetCollectionInfo(t.sCollection, t.sInfoCollcetion), t
              );
            }),
            (e.prototype.componentDidMount = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.GetScheduleCalendarStore()).RegisterCalendarEventsAndModels(
                          { success: 1 }
                        ),
                        [
                          4,
                          Promise.all([
                            t.LoadAdditionalEvents(
                              "forward",
                              this.m_cancelSignal,
                              !0,
                              !0
                            )
                          ])
                        ]
                      );
                    case 1:
                      return (
                        e.sent(),
                        (a = s.a.parse(
                          this.props.history.location.search.substring(1)
                        )),
                        fn.Init(a, this.OnClanEventGIDSelectionChange),
                        fn.BIsSomeEventSelected()
                          ? ((n = void 0),
                            t.GetCalendarEventList().forEach(function(e) {
                              e.unique_id === fn.GetClanEventGID() && (n = e);
                            }),
                            n
                              ? [
                                  4,
                                  Promise.all([
                                    T.c.LoadPartnerEventFromClanEventGID(
                                      n.appid,
                                      n.unique_id,
                                      0
                                    ),
                                    zt.a.LoadAppLinkInfo([n.appid])
                                  ])
                                ]
                              : [3, 3])
                          : [3, 3]
                      );
                    case 2:
                      e.sent(), (e.label = 3);
                    case 3:
                      return this.setState({ bLoaded: !0 }), [2];
                  }
                });
              });
            }),
            (e.prototype.OnClanEventGIDSelectionChange = function(e) {
              var t = {};
              e && (t.selectedSchedEvent = e),
                N.a.BHasTimeOverride() &&
                  (t.t = d.a.unix(N.a.GetTimeNowWithOverride()).format()),
                e || N.a.BHasTimeOverride()
                  ? this.props.history.push("?" + s.a.stringify(t))
                  : this.props.history.push("?");
            }),
            (e.prototype.GetScheduleCalendarStore = function() {
              return (
                C({
                  collectionid: this.state.config.sCollection,
                  bSectionByDay: !0,
                  rtCalendarEnd: this.props.event.endTime
                }),
                B()
              );
            }),
            (e.prototype.BIsAppArrayEqual = function(e, t) {
              if (e === t) return !0;
              if (null == e || null == t) return !1;
              if (e.length != t.length) return !1;
              for (var a = 0; a < e.length; ++a) if (e[a] !== t[a]) return !1;
              return !0;
            }),
            (e.prototype.VisibleAppChanged = function(e) {
              this.BIsAppArrayEqual(e, this.state.rgVisibleApps) ||
                this.setState({ rgVisibleApps: e });
            }),
            (e.prototype.render = function() {
              if (!this.state.bLoaded)
                return j.createElement(oe.a, {
                  position: "center",
                  string: Object(L.d)("#Sale_EventSchedule")
                });
              var e = this.props.promotionName,
                t = this.GetScheduleCalendarStore(),
                a = new Array();
              if (this.state.rgVisibleApps)
                for (
                  var n = function(t) {
                      if (
                        rr(
                          r.props.activeTab,
                          t,
                          "game",
                          r.props.nSaleDayIndex
                        ) &&
                        (a.some(function(e) {
                          return t == e;
                        }) || a.push(t),
                        4 <= a.length)
                      )
                        return "break";
                    },
                    r = this,
                    o = 0,
                    i = this.state.rgVisibleApps;
                  o < i.length;
                  o++
                ) {
                  if ("break" === n(i[o])) break;
                }
              return j.createElement(
                "div",
                { className: Object(W.a)(sn.a.SaleSection, bn.a.SaleSchedCtn) },
                j.createElement(
                  "div",
                  { className: ft.a.SaleSectionHeader },
                  Object(L.d)("#Sale_EventSchedule")
                ),
                j.createElement(
                  "div",
                  { className: bn.a.SectionCtn },
                  j.createElement(En, {
                    calendarStore: t,
                    promotionName: e,
                    activeTab: this.props.activeTab,
                    nSaleDayIndex: this.props.nSaleDayIndex,
                    config: this.state.config,
                    fnVisibleAppChanged: this.VisibleAppChanged
                  }),
                  Boolean(fn.BIsSomeEventSelected())
                    ? j.createElement(wn, {
                        eventGID: fn.GetClanEventGID(),
                        promotionName: e
                      })
                    : j.createElement(In, { rgAppIDs: a, promotionName: e })
                )
              );
            }),
            Object(k.c)(
              [Z.a],
              e.prototype,
              "OnClanEventGIDSelectionChange",
              null
            ),
            Object(k.c)([Z.a], e.prototype, "VisibleAppChanged", null),
            (e = a = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        yn = Object(c.g)(gn),
        En = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), (e.m_AppVisible = new Array(100)), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.GetCalendarSections = function() {
              return this.props.calendarStore.GetCalendarSections(!0);
            }),
            (e.prototype.OnAppVisibilityChange = function(e, t, a) {
              this.m_AppVisible.length < a &&
                (this.m_AppVisible = Object(_e.e)(
                  this.m_AppVisible,
                  a + 1,
                  null
                )),
                (this.m_AppVisible[a] = e ? t : null),
                this.props.fnVisibleAppChanged(
                  this.m_AppVisible.filter(function(e) {
                    return null !== e;
                  })
                );
            }),
            (e.prototype.render = function() {
              var a = this,
                n = this.props.calendarStore,
                e = this.GetCalendarSections(),
                r = new Array(),
                o = 0;
              return (
                e.forEach(function(e, t) {
                  r.push(
                    j.createElement(
                      Sn,
                      Object(k.a)(
                        {
                          key: e.strSectionLabel,
                          strSectionLabel: e.strSectionLabel,
                          rtSectionStart: e.rtSectionStart,
                          rtSectionEnd: e.rtSectionEnd,
                          fnOnAppVisibilityChange: a.OnAppVisibilityChange,
                          nEventBeforeThisSection: o
                        },
                        a.props
                      )
                    )
                  ),
                    (o += n.CountCalenderItemsInTimeRange(
                      e.rtSectionStart,
                      e.rtSectionEnd,
                      !0
                    ));
                }),
                j.createElement(
                  "div",
                  null,
                  j.createElement(
                    "div",
                    { className: Object(W.a)(bn.a.SaleSchedListCtn) },
                    Boolean(0 == n.GetCalendarEventList().length) &&
                      j.createElement(
                        "div",
                        null,
                        Object(L.d)("#Sale_EventSchedule_NoUpcomingEvents")
                      ),
                    r
                  ),
                  j.createElement(
                    "a",
                    {
                      className: bn.a.NewsHubLink,
                      href:
                        G.c.STORE_BASE_URL +
                        "newshub/collection/" +
                        this.props.config.sCollection +
                        "?upcoming=true" +
                        (N.a.BHasTimeOverride()
                          ? "&t=" + N.a.GetTimeNowWithOverride()
                          : "")
                    },
                    Object(L.d)("#Sale_SeeAllUpcomingEvents")
                  )
                )
              );
            }),
            Object(k.c)([Z.a], e.prototype, "OnAppVisibilityChange", null),
            e
          );
        })(j.Component),
        Sn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            Object.defineProperty(t.prototype, "cachedCalendarItems", {
              get: function() {
                var e = this.props,
                  t = e.calendarStore,
                  a = e.rtSectionStart,
                  n = e.rtSectionEnd;
                return t.GetCalendarItemsInTimeRange(
                  Object(o.a)(function() {
                    return a;
                  }),
                  Object(o.a)(function() {
                    return n;
                  }),
                  !0
                );
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.render = function() {
              var a = this,
                e = this.props,
                t = e.strSectionLabel,
                n = e.fnOnAppVisibilityChange,
                r = e.activeTab,
                o = e.nSaleDayIndex,
                i = this.cachedCalendarItems,
                s = i.rgCalendarItems,
                l = (i.bIsComplete, new Array());
              return (
                s.reverse().forEach(function(e, t) {
                  rr(r, e.appid, "game", o) &&
                    l.push(
                      j.createElement(
                        vn.a,
                        {
                          key: "schedrow_" + e.unique_id,
                          topOffset: "10px",
                          bottomOffset: "-10px",
                          onEnter: function() {
                            return n(
                              !0,
                              e.appid,
                              a.props.nEventBeforeThisSection + t
                            );
                          },
                          onLeave: function() {
                            return n(
                              !1,
                              e.appid,
                              a.props.nEventBeforeThisSection + t
                            );
                          }
                        },
                        j.createElement(
                          "div",
                          null,
                          j.createElement(Cn, {
                            item: e,
                            promotionName: a.props.promotionName
                          })
                        )
                      )
                    );
                }),
                0 == l.length
                  ? null
                  : j.createElement(
                      j.Fragment,
                      null,
                      j.createElement(
                        "div",
                        { className: bn.a.SchedSectionLabel },
                        t
                      ),
                      0 == l.length &&
                        j.createElement(
                          "div",
                          null,
                          Object(L.d)("#Sale_EventSchedule_NoUpcomingEvents")
                        ),
                      l
                    )
              );
            }),
            Object(k.c)([m.computed], t.prototype, "cachedCalendarItems", null),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        fn = new ((function() {
          function e() {}
          return (
            (e.prototype.Init = function(e, t) {
              "string" == typeof e.selectedSchedEvent &&
                "dev" === G.c.WEB_UNIVERSE &&
                (this.m_gidClanEventSelected = e.selectedSchedEvent),
                (this.m_fnClanEventGIDSelected = t);
            }),
            (e.prototype.BIsSomeEventSelected = function() {
              return Boolean(this.m_gidClanEventSelected);
            }),
            (e.prototype.GetClanEventGID = function() {
              return this.m_gidClanEventSelected;
            }),
            (e.prototype.BIsEventSelected = function(e) {
              return this.m_gidClanEventSelected === e;
            }),
            (e.prototype.ToggleClanEventGID = function(e) {
              this.m_gidClanEventSelected === e
                ? (this.m_gidClanEventSelected = void 0)
                : (this.m_gidClanEventSelected = e),
                this.m_fnClanEventGIDSelected &&
                  this.m_fnClanEventGIDSelected(this.m_gidClanEventSelected);
            }),
            Object(k.c)(
              [m.observable],
              e.prototype,
              "m_gidClanEventSelected",
              void 0
            ),
            e
          );
        })())(),
        Cn = (function(t) {
          function a() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoaded: a.BHasLoadedRequiredData(e.props) }), e
            );
          }
          return (
            Object(k.d)(a, t),
            (a.BHasLoadedRequiredData = function(e) {
              return (
                T.c.BHasClanEventModel(e.item.unique_id) &&
                zt.a.BHasAppLinkLoaded(e.item.appid)
              );
            }),
            (a.prototype.componentDidMount = function() {
              this.DoLoad();
            }),
            (a.prototype.componentDidUpdate = function(e) {
              e.item.unique_id == this.props.item.unique_id ||
                a.BHasLoadedRequiredData(this.props) ||
                this.setState({ bLoaded: !1 }, this.DoLoad);
            }),
            (a.prototype.DoLoad = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.bLoaded
                        ? [3, 2]
                        : ((t = this.props.item),
                          (a = O.a.InitFromClanID(t.clanid)),
                          (n = new Array()),
                          T.c.BHasClanEventModel(t.unique_id) ||
                            n.push(
                              T.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                                a,
                                t.unique_id,
                                0
                              )
                            ),
                          zt.a.BHasAppLinkLoaded(t.appid) ||
                            n.push(zt.a.LoadAppLinkInfo([t.appid])),
                          [4, Promise.all(n)]);
                    case 1:
                      e.sent(), this.setState({ bLoaded: !0 }), (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (a.prototype.render = function() {
              if (!this.state.bLoaded)
                return j.createElement(
                  "div",
                  { className: bn.a.SaleSchedRowProxy },
                  j.createElement(oe.a, { size: "small" })
                );
              var e = this.props.item,
                t = T.c.GetClanEventModel(e.unique_id),
                a = zt.a.GetAppLinkInfo(e.appid);
              return t && a
                ? j.createElement(On, { item: this.props.item })
                : null;
            }),
            a
          );
        })(j.Component),
        On = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.OnToggleSelection = function() {
              fn.ToggleClanEventGID(this.props.item.unique_id);
            }),
            (e.prototype.render = function() {
              var e,
                t = this.props.item,
                a = T.c.GetClanEventModel(t.unique_id),
                n = zt.a.GetAppLinkInfo(t.appid);
              return j.createElement(
                "div",
                {
                  onClick: this.OnToggleSelection,
                  className: Object(W.a)(
                    ((e = {}),
                    (e[bn.a.SaleSchedRow] = !0),
                    (e[bn.a.SchedRowSelected] = fn.BIsEventSelected(
                      this.props.item.unique_id
                    )),
                    e)
                  )
                },
                j.createElement(ue, { event: a }),
                j.createElement(
                  "div",
                  { className: bn.a.Time },
                  Object(hn.g)(a.startTime)
                ),
                j.createElement(
                  "div",
                  { className: bn.a.DetailsCtn },
                  j.createElement("div", { className: bn.a.AppTitle }, n.title),
                  j.createElement(
                    "div",
                    { className: bn.a.EventTitle },
                    a.GetNameWithFallback(Object(me.d)(G.c.LANGUAGE))
                  )
                ),
                j.createElement(
                  "div",
                  { className: bn.a.Icon },
                  j.createElement("img", {
                    className: bn.a.CategoryTypeImage,
                    width: "26",
                    height: "26",
                    src:
                      G.c.IMG_URL +
                      "events/types/type_" +
                      (11 == a.type ? "11" : "9") +
                      ".png"
                  })
                )
              );
            }),
            Object(k.c)([Z.a], e.prototype, "OnToggleSelection", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        In = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoading: !zt.a.BHasAllAppLinksLoaded(e.props.rgAppIDs)
              }),
              e
            );
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.DoLoadCapsules();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              zt.a.BHasAllAppLinksLoaded(this.props.rgAppIDs) ||
                this.state.bLoading ||
                this.setState({ bLoading: !0 }, this.DoLoadCapsules);
            }),
            (e.prototype.DoLoadCapsules = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.bLoading
                        ? [4, zt.a.LoadAppLinkInfo(this.props.rgAppIDs)]
                        : [3, 2];
                    case 1:
                      e.sent(), this.setState({ bLoading: !1 }), (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              var a = this;
              if (this.state.bLoading) return j.createElement(oe.a, null);
              var n = new Array();
              return (
                this.props.rgAppIDs.forEach(function(e) {
                  var t = zt.a.GetAppLinkInfo(e);
                  t &&
                    n.push(
                      j.createElement(Tn, {
                        key: "democap_" + t.appid,
                        appCapsule: t,
                        promotionName: a.props.promotionName
                      })
                    );
                }),
                j.createElement(
                  "div",
                  { className: Object(W.a)(bn.a.SaleSchedGridCtn) },
                  n
                )
              );
            }),
            e
          );
        })(j.Component),
        Tn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bDemoLoadComplete: un
                  .Get()
                  .BHasDemoEventInfo(e.props.appCapsule.appid)
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "DemoAppCapsule to unload: " + this.props.appCapsule.appid
              );
            }),
            (e.prototype.componentDidMount = function() {
              this.DoLoadAboutAndDemoInfo();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              e.appCapsule.appid === this.props.appCapsule.appid ||
                un.Get().BHasDemoEventInfo(this.props.appCapsule.appid) ||
                this.m_cancelSignal.token.reason ||
                this.setState(
                  { bDemoLoadComplete: !1 },
                  this.DoLoadAboutAndDemoInfo
                );
            }),
            (e.prototype.DoLoadAboutAndDemoInfo = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.bDemoLoadComplete
                        ? [3, 2]
                        : ((t = this.props.appCapsule.appid),
                          [
                            4,
                            un
                              .Get()
                              .LoadAppIDsBatch([t], !0, this.m_cancelSignal)
                          ]);
                    case 1:
                      e.sent(),
                        this.m_cancelSignal.token.reason ||
                          this.setState({ bDemoLoadComplete: !0 }),
                        (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.OnPlayApp = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props.appCapsule.appid),
                        [
                          4,
                          un.Get().LoadAppIDsBatch([t], !0, this.m_cancelSignal)
                        ]
                      );
                    case 1:
                      return (
                        e.sent(),
                        (a = un.Get().GetDemoEventInfo(t)) &&
                          a.demo_appid &&
                          Object(cn.a)(a.demo_appid),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.ShowEventInModel = function(e) {
              this.state.showEventInModal !== e &&
                this.setState({ showEventInModal: e });
            }),
            (e.prototype.OnShowAboutDemo = function() {
              var e = this.props.appCapsule,
                t = un.Get().GetDemoEventInfo(e.appid);
              if (t && t.info_clan_event_gid) {
                var a = T.c.GetClanEventModel(t.info_clan_event_gid);
                this.ShowEventInModel(a);
              }
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props,
                a = t.appCapsule,
                n = (t.promotionName, un.Get().BHasAboutDemo(a.appid));
              return j.createElement(
                "div",
                { className: bn.a.DemoCapsuleCtn },
                this.state.bDemoLoadComplete
                  ? j.createElement(
                      j.Fragment,
                      null,
                      j.createElement(
                        De.a,
                        {
                          strURL: G.c.STORE_BASE_URL + "app/" + a.appid,
                          type: "app",
                          id: a.appid
                        },
                        j.createElement("img", {
                          src: a.capsule,
                          alt: a.title,
                          loading: "lazy",
                          width: "276",
                          height: "126"
                        })
                      ),
                      j.createElement(
                        "div",
                        { className: bn.a.DemoCapsuleActionCtn },
                        j.createElement(
                          H.c,
                          { onClick: this.OnPlayApp },
                          Object(L.d)("#Sale_PlayDemo")
                        ),
                        n &&
                          j.createElement(
                            H.c,
                            { onClick: this.OnShowAboutDemo },
                            Object(L.d)("#Button_About")
                          )
                      )
                    )
                  : j.createElement(oe.a, null),
                Boolean(this.state.showEventInModal) &&
                  j.createElement(
                    Ae.g,
                    { className: va.a.StoreHeaderAdjust },
                    j.createElement(
                      "div",
                      null,
                      j.createElement(yt.a, {
                        event: this.state.showEventInModal,
                        fnClose: function() {
                          return e.ShowEventInModel(void 0);
                        }
                      })
                    )
                  )
              );
            }),
            Object(k.c)([Z.a], e.prototype, "OnPlayApp", null),
            Object(k.c)([Z.a], e.prototype, "ShowEventInModel", null),
            Object(k.c)([Z.a], e.prototype, "OnShowAboutDemo", null),
            e
          );
        })(j.Component),
        wn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.eventGID;
              if (!e || !T.c.BHasClanEventModel(e)) return null;
              var t = T.c.GetClanEventModel(e),
                a = zt.a.GetAppLinkInfo(t.appid);
              return j.createElement(
                "div",
                { className: bn.a.SaleSchedDetailCtn },
                j.createElement(Dn, {
                  appCapsule: a,
                  promotionName: this.props.promotionName
                }),
                j.createElement(kn, { appCapsule: a }),
                j.createElement(An, { appCapsule: a }),
                j.createElement(Gn, { event: t })
              );
            }),
            t
          );
        })(j.Component),
        Dn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = _.a.CancelToken.source()), (e.state = {}), e
            );
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "SaleAppWideDetailWithAction to unload"
              );
            }),
            (e.prototype.OnPlayApp = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props.appCapsule.appid),
                        [
                          4,
                          un.Get().LoadAppIDsBatch([t], !1, this.m_cancelSignal)
                        ]
                      );
                    case 1:
                      return (
                        e.sent(),
                        (a = un.Get().GetDemoEventInfo(t)) &&
                          a.demo_appid &&
                          Object(cn.a)(a.demo_appid),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.ToggleWishlist = function() {
              this.setState({ bUpdatingWishlist: !0 }, this.DoToggleWishlist);
            }),
            (e.prototype.DoToggleWishlist = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props.appCapsule.appid),
                        (a = w.a.BIsGameWishlisted(t)),
                        [4, w.a.UpdateGameWishlist(t, !a)]
                      );
                    case 1:
                      return (
                        e.sent(), this.setState({ bUpdatingWishlist: !1 }), [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.appCapsule;
              e.promotionName;
              return j.createElement(
                "div",
                { className: bn.a.SaleAppWideCtn },
                j.createElement(
                  De.a,
                  {
                    strURL: G.c.STORE_BASE_URL + "app/" + t.appid,
                    type: "app",
                    id: t.appid
                  },
                  j.createElement("img", {
                    className: bn.a.WideHeader,
                    src: t.capsule,
                    alt: t.title
                  })
                ),
                j.createElement(
                  "div",
                  { className: bn.a.WideDetailCtn },
                  j.createElement("div", { className: bn.a.AppTitle }, t.title),
                  j.createElement(
                    "div",
                    { className: bn.a.ReleaseDate },
                    t.release
                  )
                ),
                j.createElement(
                  "div",
                  { className: bn.a.GameButtons },
                  Boolean(w.a.BOwnsApp(t.appid))
                    ? j.createElement(
                        H.c,
                        { disabled: !0 },
                        Object(L.d)("#Sale_InLibrary")
                      )
                    : j.createElement(
                        H.c,
                        {
                          onClick: this.ToggleWishlist,
                          disabled: this.state.bUpdatingWishlist
                        },
                        Boolean(this.state.bUpdatingWishlist) &&
                          j.createElement(oe.a, { size: "small" }),
                        Object(L.d)(
                          w.a.BIsGameWishlisted(t.appid)
                            ? "#Sale_Wishlisted"
                            : "#Sale_AddToWishlist"
                        )
                      ),
                  j.createElement(
                    H.c,
                    { onClick: this.OnPlayApp },
                    Object(L.d)("#Sale_PlayDemo")
                  )
                )
              );
            }),
            Object(k.c)([Z.a], e.prototype, "OnPlayApp", null),
            Object(k.c)([Z.a], e.prototype, "ToggleWishlist", null),
            e
          );
        })(j.Component),
        kn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.appCapsule;
              return j.createElement(
                "div",
                { className: bn.a.SaleTagAndOS },
                j.createElement(
                  "div",
                  { className: La.a.StoreSaleWidgetTags },
                  e.tags
                    ? e.tags.map(function(e) {
                        return j.createElement(
                          "div",
                          { key: "tag_" + e.tagid, className: La.a.AppTag },
                          e.name
                        );
                      })
                    : void 0
                ),
                j.createElement(Ua.d, { item: e })
              );
            }),
            t
          );
        })(j.Component),
        An = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.appCapsule;
              return j.createElement(
                "div",
                { className: bn.a.ArtistStatementAndHiglghtCtn },
                j.createElement(jn, { appCapsule: e }),
                j.createElement(Ln, { appCapsule: e })
              );
            }),
            t
          );
        })(j.Component),
        jn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingDemoDetails: !un
                  .Get()
                  .BHasDemoEventInfo(e.props.appCapsule.appid)
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.DoLoading();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              e.appCapsule.appid !== this.props.appCapsule.appid &&
                this.setState(
                  {
                    bLoadingDemoDetails: !un
                      .Get()
                      .BHasDemoEventInfo(this.props.appCapsule.appid)
                  },
                  this.DoLoading
                );
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "SaleScheduleArtistStatement to unload"
              );
            }),
            (e.prototype.DoLoading = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.bLoadingDemoDetails ||
                        this.state.bLoadingDescription
                        ? ((t = this.props.appCapsule.appid),
                          [
                            4,
                            Promise.all([
                              un
                                .Get()
                                .LoadAppIDsBatch([t], !0, this.m_cancelSignal),
                              dn.a.Get().LoadShortDesc(t, this.m_cancelSignal)
                            ])
                          ])
                        : [3, 2];
                    case 1:
                      e.sent(),
                        un
                          .Get()
                          .EnsurePartnerEventLoadedForDemo(
                            t,
                            this.m_cancelSignal
                          ),
                        this.setState({
                          bLoadingDemoDetails: !1,
                          bLoadingDescription: !1
                        }),
                        (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.ShowEventInModel = function(e) {
              this.state.showEventInModal !== e &&
                this.setState({ showEventInModal: e });
            }),
            (e.prototype.render = function() {
              var e = this;
              if (
                Boolean(
                  this.state.bLoadingDemoDetails ||
                    this.state.bLoadingDescription
                )
              )
                return j.createElement(oe.a, null);
              var t = this.props.appCapsule.appid,
                a = un.Get().GetDemoEventInfo(t),
                n =
                  a && a.BHasArtistStatement()
                    ? T.c.GetClanEventModel(a.info_clan_event_gid)
                    : void 0,
                r = Object(me.d)(G.c.LANGUAGE),
                o = dn.a.Get().GetShortDesc(t);
              return j.createElement(
                "div",
                { className: bn.a.StatementCtn },
                Boolean(n)
                  ? j.createElement(
                      "div",
                      null,
                      j.createElement(Aa.a, {
                        text: n.GetDescriptionWithFallback(r),
                        partnerEventStore: T.c,
                        showErrorInfo: !1,
                        event: n
                      }),
                      j.createElement(
                        H.c,
                        {
                          onClick: function() {
                            return e.ShowEventInModel(n);
                          }
                        },
                        Object(L.d)("#EventEmail_Button_ClickForMoreDetails")
                      )
                    )
                  : j.createElement("div", null, o),
                Boolean(this.state.showEventInModal) &&
                  j.createElement(
                    Ae.g,
                    { className: va.a.StoreHeaderAdjust },
                    j.createElement(
                      "div",
                      null,
                      j.createElement(yt.a, {
                        event: this.state.showEventInModal,
                        fnClose: function() {
                          return e.ShowEventInModel(void 0);
                        }
                      })
                    )
                  )
              );
            }),
            Object(k.c)([Z.a], e.prototype, "DoLoading", null),
            Object(k.c)([Z.a], e.prototype, "ShowEventInModel", null),
            e
          );
        })(j.Component),
        Ln = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bTrailerLoaded: mn
                  .Get()
                  .BHasTrailerForApp(e.props.appCapsule.appid),
                bPlayVideo: !1,
                nThumbnailedHovered: void 0
              }),
              e
            );
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.DoTrailerLoad();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              e.appCapsule.appid !== this.props.appCapsule.appid &&
                this.setState(
                  {
                    bTrailerLoaded: mn
                      .Get()
                      .BHasTrailerForApp(this.props.appCapsule.appid)
                  },
                  this.DoTrailerLoad
                );
            }),
            (e.prototype.DoTrailerLoad = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.bTrailerLoaded
                        ? [3, 2]
                        : [
                            4,
                            mn
                              .Get()
                              .LoadTrailersForApp(this.props.appCapsule.appid)
                          ];
                    case 1:
                      e.sent(),
                        this.setState({ bTrailerLoaded: !0 }),
                        (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.GetFirstHighlightTrailer = function() {
              var e = mn.Get().GetTrailersForApp(this.props.appCapsule.appid),
                t = void 0;
              return (
                e &&
                  e.forEach(function(e) {
                    e.highlight && !t && (t = e);
                  }),
                t
              );
            }),
            (e.prototype.TogglePlayTrailer = function() {
              this.GetFirstHighlightTrailer() &&
                this.setState({ bPlayVideo: !this.state.bPlayVideo });
            }),
            (e.prototype.OnThumbNailHovered = function(e) {
              this.setState({ nThumbnailedHovered: e });
            }),
            (e.prototype.render = function() {
              var a = this;
              if (!this.state.bTrailerLoaded)
                return j.createElement(
                  "div",
                  { className: bn.a.MediaContainer },
                  j.createElement(oe.a, { size: "medium" })
                );
              var e = this.props.appCapsule,
                n = this.GetFirstHighlightTrailer();
              if (!(n || (e.screenshot_list && 0 !== e.screenshot_list.length)))
                return null;
              var t =
                  n ||
                  (void 0 !== this.state.nThumbnailedHovered &&
                    -1 !== this.state.nThumbnailedHovered)
                    ? this.state.nThumbnailedHovered
                    : 0,
                r = new Array();
              return (
                e.screenshot_list.forEach(function(e, t) {
                  (n || 0 < t) &&
                    r.length < 3 &&
                    ((e = e.replace("http://", "https://")),
                    r.push(
                      j.createElement("img", {
                        key: t + "_" + e,
                        className: bn.a.ScreenshotThumbnail,
                        src: e,
                        onMouseEnter: function() {
                          return a.OnThumbNailHovered(t);
                        }
                      })
                    ));
                }),
                j.createElement(
                  "div",
                  { className: bn.a.MediaContainer },
                  j.createElement(
                    "div",
                    { className: bn.a.MainMediaCtn },
                    Boolean(n) &&
                      j.createElement(
                        "div",
                        {
                          className: Object(W.a)(
                            bn.a.VideoThumbnail,
                            this.state.bPlayVideo ? bn.a.videoPlaying : null
                          ),
                          onClick: this.TogglePlayTrailer
                        },
                        Boolean(-1 === t || void 0 === t)
                          ? j.createElement(
                              j.Fragment,
                              null,
                              j.createElement("img", { src: n.thumbnail }),
                              j.createElement(
                                "div",
                                { className: bn.a.VideoPlayButton },
                                j.createElement(F.t, null)
                              )
                            )
                          : j.createElement("img", {
                              src: e.screenshot_list[t]
                            })
                      ),
                    Boolean(!n) &&
                      j.createElement("img", { src: e.screenshot_list[t] })
                  ),
                  Boolean(0 < r.length) &&
                    j.createElement(
                      "div",
                      {
                        className: bn.a.Screenshot,
                        onMouseLeave: function() {
                          return a.OnThumbNailHovered(-1);
                        }
                      },
                      r
                    ),
                  j.createElement(
                    "div",
                    {
                      className: Object(W.a)(
                        bn.a.VideoLargeContainer,
                        this.state.bPlayVideo ? bn.a.videoPlaying : null
                      ),
                      onClick: this.TogglePlayTrailer
                    },
                    this.state.bPlayVideo &&
                      j.createElement("video", {
                        className: bn.a.VideoLarge,
                        src: n.webm[480].replace("http://", "https://"),
                        controls: !0,
                        autoPlay: !0
                      }),
                    j.createElement(
                      "div",
                      { onClick: this.TogglePlayTrailer },
                      j.createElement(F.H, null)
                    )
                  )
                )
              );
            }),
            Object(k.c)([Z.a], e.prototype, "DoTrailerLoad", null),
            Object(k.c)([Z.a], e.prototype, "TogglePlayTrailer", null),
            Object(k.c)([Z.a], e.prototype, "OnThumbNailHovered", null),
            e
          );
        })(j.Component),
        Gn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.ShowEventInModel = function(e) {
              this.state.showEventInModal != e &&
                this.setState({ showEventInModal: e });
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props.event,
                a = t.BIsEventInFuture(),
                n = Object(me.d)(G.c.LANGUAGE);
              return j.createElement(
                "div",
                { className: bn.a.EventWideCtn },
                j.createElement(
                  "div",
                  { className: bn.a.Title },
                  Object(L.d)("#Sale_EventSchedule")
                ),
                j.createElement("hr", null),
                j.createElement(
                  "div",
                  { className: bn.a.EventWideDetailCtn },
                  j.createElement(
                    "div",
                    { className: bn.a.EventDetails },
                    j.createElement(
                      "div",
                      { className: bn.a.EventIcon },
                      j.createElement("img", {
                        className: bn.a.CategoryTypeImage,
                        width: "40",
                        height: "40",
                        src:
                          G.c.IMG_URL +
                          "events/types/type_" +
                          (11 == t.type ? "11" : "9") +
                          ".png"
                      })
                    ),
                    j.createElement(
                      "div",
                      null,
                      j.createElement(
                        "div",
                        { className: bn.a.EventTitle },
                        t.GetNameWithFallback(n)
                      ),
                      j.createElement(
                        "div",
                        { className: bn.a.EventTime },
                        a
                          ? Object(L.j)(t.startTime) +
                              " " +
                              Object(L.m)(t.startTime)
                          : Object(L.n)(Date.now() / 1e3 - t.startTime)
                      )
                    )
                  ),
                  j.createElement(
                    "div",
                    { className: bn.a.EventOptionsCtn },
                    j.createElement(
                      H.c,
                      {
                        onClick: function() {
                          return e.ShowEventInModel(e.props.event);
                        }
                      },
                      Object(L.d)("#Sale_SeeEventDetails")
                    ),
                    a &&
                      j.createElement(le.a, {
                        eventModel: t,
                        eventGID: t.GID,
                        lang: n
                      })
                  )
                ),
                Boolean(this.state.showEventInModal) &&
                  j.createElement(
                    Ae.g,
                    { className: va.a.StoreHeaderAdjust },
                    j.createElement(
                      "div",
                      null,
                      j.createElement(yt.a, {
                        event: this.state.showEventInModal,
                        fnClose: function() {
                          return e.ShowEventInModel(void 0);
                        }
                      })
                    )
                  )
              );
            }),
            Object(k.c)([Z.a], e.prototype, "ShowEventInModel", null),
            e
          );
        })(j.Component),
        Nn = a("oVVc"),
        Bn = a("l2mU"),
        Mn = a("31dG"),
        xn = a.n(Mn);
      function Rn(e, t) {
        for (var a = [], n = 0, r = e.capsules; n < r.length; n++) {
          var o = r[n];
          if ("sub" === o.type) {
            var i = Nn.b.GetPackageInfo(o.id);
            if (i) {
              if ((console.log(JSON.stringify(i)), i.renewal_time_amount === t))
                return i.packageid;
            } else a.push(o.id);
          }
        }
        0 < a.length && Nn.b.LoadPackageInfo(a);
      }
      var Pn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.OnClickPurchase = function(e) {
              w.a.AddToCart(
                e,
                this.props.sub_package_id,
                G.c.STORE_BASE_URL + "cart/addtocart",
                G.c.STORE_BASE_URL + "cart"
              );
            }),
            (t.prototype.render = function() {
              var e = Nn.b.GetPackageInfo(this.props.sub_package_id),
                t = Nn.b.GetPackageInfo(this.props.compare_package_id);
              if (!e || (!t && this.props.compare_package_id))
                return (
                  Nn.b.LoadPackageInfo([
                    this.props.sub_package_id,
                    this.props.compare_package_id
                  ]),
                  null
                );
              if (!e.formatted_final_price) return null;
              var a = e.formatted_final_price,
                n = Object(Bn.a)(e, t),
                r = [a, n || ""],
                o = L.d.apply(
                  void 0,
                  Object(k.g)([this.props.price_loc_token], r)
                ),
                i = L.d.apply(
                  void 0,
                  Object(k.g)([this.props.body_loc_token], r)
                ),
                s = L.d.apply(
                  void 0,
                  Object(k.g)(["#Sale_Subscription_Save"], r)
                ),
                l = j.createElement("div", { className: xn.a.LogoImg }),
                c = (function(e) {
                  for (var t = 0, a = e.appids; t < a.length; t++) {
                    var n = a[t];
                    if (w.a.BOwnsApp(n)) return !0;
                  }
                  return !1;
                })(e),
                d = null;
              return (
                (d = w.a.BOwnsPackage(this.props.sub_package_id)
                  ? j.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          xn.a.PurchaseButton,
                          xn.a.AlreadyOwnedPackage
                        )
                      },
                      Object(L.d)("#Sale_Subscription_AlreadyOwnedPackage")
                    )
                  : c
                  ? j.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          xn.a.PurchaseButton,
                          xn.a.AlreadyOwnedApp
                        )
                      },
                      Object(L.d)("#Sale_Subscription_AlreadyOwnedApp")
                    )
                  : j.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          xn.a.PurchaseButton,
                          xn.a.UnOwned
                        ),
                        onClick: this.OnClickPurchase
                      },
                      this.props.button_text
                    )),
                j.createElement(
                  "div",
                  { className: xn.a.SubscriptionBlock },
                  l,
                  j.createElement(
                    "div",
                    { className: xn.a.PriceBlock },
                    j.createElement(
                      "span",
                      { className: xn.a.PriceDisplay },
                      o
                    ),
                    Boolean(n) &&
                      j.createElement(
                        "span",
                        { className: xn.a.SavingsDisplay },
                        s
                      )
                  ),
                  j.createElement("div", { className: xn.a.BodyTextBlock }, i),
                  d
                )
              );
            }),
            Object(k.c)([Z.a], t.prototype, "OnClickPurchase", null),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Hn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = Rn(this.props.section, 12),
                t = Rn(this.props.section, 3),
                a = Rn(this.props.section, 1);
              return j.createElement(
                "div",
                { className: xn.a.MainBlock },
                j.createElement(
                  "span",
                  { className: xn.a.SelectAPlan },
                  Object(L.d)("#Sale_Subscription_SelectPlan")
                ),
                j.createElement(
                  "div",
                  { className: xn.a.SubscriptionListBlock },
                  j.createElement(Pn, {
                    sub_package_id: e,
                    compare_package_id: a,
                    price_loc_token: "#Sale_Subscription_Annual_Price",
                    body_loc_token: "#Sale_Subscription_Annual_Body",
                    button_text: Object(L.d)("#Sale_Subscription_Annual_Button")
                  }),
                  j.createElement(Pn, {
                    sub_package_id: t,
                    price_loc_token: "#Sale_Subscription_Quarterly_Price",
                    body_loc_token: "#Sale_Subscription_Quarterly_Body",
                    button_text: Object(L.d)(
                      "#Sale_Subscription_Quarterly_Button"
                    )
                  }),
                  j.createElement(Pn, {
                    sub_package_id: a,
                    price_loc_token: "#Sale_Subscription_Monthly_Price",
                    body_loc_token: "#Sale_Subscription_Monthly_Body",
                    button_text: Object(L.d)(
                      "#Sale_Subscription_Monthly_Button"
                    )
                  })
                )
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Fn = a("R+8l");
      function zn(e, t, a) {
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
      var Un = function(e) {
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
                  : Object(L.d)(e.default_label))
              );
            })(t, a);
          if (!s) return null;
          var l = (function(e, t) {
            return e
              ? zn(
                  t.tab_active_label_color,
                  t.tab_active_background_gradient_top,
                  t.tab_active_background_gradient_bottom
                )
              : zn(
                  t.tab_inactive_label_color,
                  t.tab_inactive_background_gradient_top,
                  t.tab_inactive_background_gradient_bottom
                );
          })(i, o);
          return j.createElement(
            "div",
            {
              className: Object(W.a)(sn.a.SaleTab, r),
              onClick: function() {
                return n(t);
              },
              style: l
            },
            j.createElement(
              "div",
              { className: Object(W.a)(sn.a.SaleTabLabel) },
              s
            )
          );
        },
        Wn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.RenderTabCapsules = function() {
              var e = this.props.tab;
              if (!e || !e.capsules || !e.capsules.length)
                return j.createElement(
                  "div",
                  { className: sn.a.TabContentsElement },
                  Object(L.d)("#SalePage_Tabs_AllContents")
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
                    ? Fn.a.GetBundleInfo(r.id)
                    : "sub" === r.type
                    ? Nn.b.GetPackageInfo(r.id)
                    : Ze.a.GetAppInfo(r.id);
                var i = Object(L.d)("#AppType_" + r.type) + " " + r.id,
                  s = o && o.name ? o.name : i,
                  l =
                    void 0 === r.visibility_index
                      ? s
                      : Object(L.d)("#Sale_TabDayIndex", r.visibility_index),
                  c = void 0 === r.visibility_index ? -1 : r.visibility_index;
                t.push({ sName: s, sKey: i, sDisplay: l, nDaySortIndex: c });
              }
              return (
                t.sort(function(e, t) {
                  return e.nDaySortIndex !== t.nDaySortIndex
                    ? e.nDaySortIndex - t.nDaySortIndex
                    : e.sName.localeCompare(t.sName);
                }),
                j.createElement(
                  j.Fragment,
                  null,
                  t.map(function(e) {
                    return j.createElement(
                      "div",
                      { key: e.sKey, className: sn.a.TabContentsElement },
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
              return j.createElement(
                "div",
                { className: Object(W.a)(sn.a.SaleSection), style: lr(t, a) },
                j.createElement(Kn, Object(k.a)({}, this.props)),
                j.createElement(
                  "div",
                  { className: sn.a.TabContentsContainer },
                  this.RenderTabCapsules()
                )
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Vn = (function(t) {
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
            Object(k.d)(a, t),
            (a.IsWideScreen = function() {
              return 940 <= window.innerWidth;
            }),
            (a.GetMaxTabsPerRow = function() {
              return Math.max(Math.floor(window.innerWidth / 250), 2);
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
              var i = Object(W.a)(sn.a.SaleSectionTabsTab),
                s = n.tabs.map(function(e) {
                  var t = "Tab_" + e.unique_id;
                  return j.createElement(Un, {
                    key: t,
                    section: n,
                    selected: e === o,
                    tab: e,
                    language: r,
                    classNames: Object(W.a)(
                      i,
                      e === o && sn.a.SaleSectionTabsSelected
                    ),
                    onTabSelected: function(e) {
                      return a.props.onTabSelected(n, e);
                    }
                  });
                }),
                l = this.state.bScreenIsWide,
                c = Math.min(this.state.nMaxTabsPerRow, n.tabs.length);
              return j.createElement(
                "div",
                {
                  className: Object(W.a)(
                    sn.a.SaleSection,
                    sn.a.SaleSectionTabs
                  ),
                  style: lr(n, t)
                },
                j.createElement(Kn, Object(k.a)({}, this.props)),
                j.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      ft.a.SaleSectionContainer,
                      sn.a.SaleSectionTabsCarousel,
                      l && sn.a.SaleSectionTabsHasArrows
                    )
                  },
                  j.createElement(
                    aa,
                    { visibleElements: c, hideArrows: !l, hidePips: !0 },
                    s
                  )
                )
              );
            }),
            Object(k.c)([Z.a], a.prototype, "OnResize", null),
            a
          );
        })(j.Component),
        Zn = j.lazy(function() {
          return Promise.all([a.e(0), a.e(1), a.e(6)]).then(
            a.bind(null, "NIbt")
          );
        });
      var Yn = (function(t) {
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
            Object(k.d)(e, t),
            (e.prototype.componentDidMount = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = G.b.CLANSTEAMID),
                        (a = G.b.ANNOUNCEMENT_GID),
                        this.props.eventModel
                          ? [3, 2]
                          : [
                              4,
                              T.c.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                                new O.a(t),
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
                  : T.c.GetClanEventFromAnnouncementGID(G.b.ANNOUNCEMENT_GID);
                t && (t.m_overrideCurrentDay = e),
                  this.setState({ nSaleDayIndex: e });
              }
            }),
            (e.prototype.render = function() {
              var e =
                this.props.eventModel ||
                T.c.GetClanEventFromAnnouncementGID(G.b.ANNOUNCEMENT_GID);
              if (e && void 0 !== this.state.nSaleDayIndex) {
                var t = this.props.bIsPreview,
                  a = e.GetImageURLWithFallback(
                    "sale_header",
                    this.props.language
                  ),
                  n = null,
                  r = null;
                Zt.BHasSalePageBackgroundOverride() &&
                  ((a = Zt.GetSalePageBackgroundOverride()),
                  (n = Zt.GetSalePageBackgroundWEBM()),
                  (r = Zt.GetSalePageBackgroundMP4()));
                var o =
                    e.BHasBroadcastEnabled() &&
                    ("1688220857098505775" == e.GID ||
                      "1590261853006818581" == e.GID),
                  i = A.a.Get().GetPartnerEventPermissions(e.clanSteamID);
                return j.createElement(
                  R.a,
                  null,
                  j.createElement(
                    qn,
                    {
                      className:
                        sn.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                      backgroundImage: a,
                      backgroundColor: t
                        ? e.jsondata.sale_background_color
                        : void 0
                    },
                    Boolean(r || n) &&
                      j.createElement(
                        "div",
                        { className: sn.a.fullscreen_bg },
                        j.createElement(
                          "video",
                          {
                            key: Zt.GetLastDoorOpen(),
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            ref: function(e) {
                              e && (e.playbackRate = 0.9);
                            },
                            className: Object(W.a)(
                              sn.a.SaleBackground,
                              sn.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                              "SaleBackground",
                              sn.a.fullscreen_bg__video
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
                          j.createElement("source", {
                            src: n,
                            type: "video/webm"
                          }),
                          !G.c.IN_CLIENT &&
                            j.createElement("source", {
                              src: r,
                              type: "video/mp4"
                            })
                        )
                      ),
                    j.createElement(
                      "div",
                      { className: sn.a.SaleHeaderContainer },
                      e.jsondata.sale_header_overlay &&
                        j.createElement(Jn, null),
                      e.GetImageURL("sale_overlay", this.props.language) &&
                        j.createElement(
                          "div",
                          {
                            className: Object(W.a)(
                              sn.a.SaleOverlayCtn,
                              "SaleOverlayCtn"
                            )
                          },
                          j.createElement("img", {
                            className: Object(W.a)(
                              sn.a.SaleOverlay,
                              "SaleOverlay"
                            ),
                            src: e.GetImageURLWithFallback(
                              "sale_overlay",
                              this.props.language
                            )
                          })
                        ),
                      e.jsondata.sale_title_overlay &&
                        j.createElement(
                          "div",
                          null,
                          j.createElement(
                            "h1",
                            {
                              style: {
                                fontFamily: cr(
                                  e.jsondata.sale_font,
                                  this.props.language
                                ),
                                fontWeight: e.jsondata.sale_font_weight,
                                textAlign: e.GetSaleLabelAlign()
                              }
                            },
                            e.GetNameWithFallback(this.props.language)
                          ),
                          j.createElement("hr", null),
                          j.createElement(
                            "div",
                            {
                              style: {
                                textAlign: e.GetSaleLabelAlign(),
                                fontFamily: cr(
                                  e.jsondata.sale_font,
                                  this.props.language
                                ),
                                fontWeight: e.jsondata.sale_font_weight
                              }
                            },
                            j.createElement(Aa.a, {
                              text: e.GetDescriptionWithFallback(
                                this.props.language
                              ),
                              partnerEventStore: T.c,
                              showErrorInfo: this.props.bIsPreview,
                              event: e
                            })
                          )
                        )
                    ),
                    j.createElement(
                      "div",
                      {
                        className:
                          sn.a.SaleOuterContainer +
                          " " +
                          sn.a["CustomStyle_" + e.jsondata.sale_vanity_id] +
                          " SaleOuterContainer",
                        style: {
                          marginTop: e.jsondata.sale_header_offset + "px"
                        }
                      },
                      Boolean(
                        e.BHasBroadcastEnabled() &&
                          e.BSaleShowBroadcastAtTopOfPage()
                      ) &&
                        j.createElement(
                          R.a,
                          null,
                          j.createElement(
                            "div",
                            { className: sn.a.SaleBroadcastCtn },
                            j.createElement(
                              j.Suspense,
                              { fallback: j.createElement("div", null) },
                              j.createElement(Zn, {
                                promotionName: this.props.promotionName,
                                clanid: Number(G.b.CLANACCOUNTID),
                                event: e,
                                bIsPreview: this.props.bIsPreview,
                                language: this.props.language,
                                fnRenderBroadcastContext: o
                                  ? function() {
                                      return j.createElement(pr, null);
                                    }
                                  : null
                              })
                            )
                          )
                        ),
                      e.jsondata.sale_show_creator &&
                        j.createElement(
                          R.a,
                          null,
                          j.createElement(
                            "div",
                            {
                              style: {
                                width: "100%",
                                margin: "0 auto",
                                maxWidth: "940px"
                              }
                            },
                            j.createElement(wa, {
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
                      j.createElement(Qn, {
                        bIsPreview: t,
                        event: e,
                        language: this.props.language,
                        promotionName: this.props.promotionName,
                        nSaleDayIndex: this.state.nSaleDayIndex
                      }),
                      e.jsondata.sale_browse_more_button &&
                        j.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "14px"
                            }
                          },
                          j.createElement(or, {
                            text: Object(L.d)("#Sale_SeeAllSpecials"),
                            url: e.jsondata.sale_browsemore_url,
                            color: e.jsondata.sale_browsemore_color,
                            bgcolor: e.jsondata.sale_browsemore_bgcolor
                          })
                        ),
                      i.can_edit &&
                        j.createElement(ca, {
                          eventModel: e,
                          bPreviewMode: this.props.bIsPreview,
                          useAnchors: !this.props.bIsPreview,
                          fnOnUpdateSaleDayIndex: this.OnChangeDayIndex
                        })
                    )
                  )
                );
              }
              return j.createElement(
                "div",
                { className: Ve.a.FlexCenter, style: { height: "500px" } },
                j.createElement(oe.a, {
                  size: "medium",
                  string: Object(L.d)("#Loading")
                })
              );
            }),
            Object(k.c)([Z.a], e.prototype, "OnChangeDayIndex", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        qn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_refBackgroundPanel = j.createRef()), e;
          }
          return (
            Object(k.d)(e, t),
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
              return j.createElement(
                "div",
                {
                  className: Object(W.a)(
                    this.props.className,
                    sn.a.SaleBackground,
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
        })(j.Component),
        Jn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.componentDidMount = function() {
              a("+ZmX").Init();
            }),
            (t.prototype.render = function() {
              return j.createElement("canvas", {
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
        })(j.Component),
        Qn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { selectedTabs: e.GetStartingTabSelections() }), e
            );
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.GetStartingTabSelections = function() {
              var t = new Map();
              return (
                this.props.event.GetSaleSections().forEach(function(e) {
                  "tabs" === e.section_type &&
                    e.tabs &&
                    0 < e.tabs.length &&
                    t.set(e, e.tabs[0]);
                }),
                t
              );
            }),
            (e.prototype.OnTabSelected = function(a, n) {
              this.setState(function(e) {
                var t = e.selectedTabs;
                return t.set(a, n), { selectedTabs: t };
              });
            }),
            (e.prototype.render = function() {
              var o = this,
                e = this.props,
                i = e.event,
                s = e.language,
                l = e.promotionName,
                c = e.bIsPreview,
                d = e.nSaleDayIndex,
                p = !1,
                u = !1,
                m = [{ elements: [], activeTab: null }];
              i.GetSaleSections().forEach(function(e, t) {
                var a = m[m.length - 1].activeTab,
                  n = null;
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
                          !qt.GetHideWishlist()) ||
                        ("dlc_onsale" == e.smart_section_type &&
                          !qt.GetHideDLC()) ||
                        ("interactive_recommender_onsale" ==
                          e.smart_section_type &&
                          !qt.GetHideIRList()))
                    );
                  })(e) &&
                  !G.i.logged_in
                )
                  p ||
                    ((n = j.createElement(Xn, {
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
                      n = j.createElement(
                        tr,
                        Object(k.a)({ section: e, activeTab: a }, o.props)
                      );
                      break;
                    case "broadcast":
                      i.BHasBroadcastEnabled() &&
                        !u &&
                        ((n = j.createElement(dr, {
                          promotionName: l,
                          eventModel: i,
                          bIsPreview: c,
                          language: s
                        })),
                        (u = !0));
                      break;
                    case "event_description":
                      n = j.createElement(
                        $n,
                        Object(k.a)({ section: e }, o.props)
                      );
                      break;
                    case "doors":
                      n = j.createElement($a, {
                        strFontFamily: cr(i.jsondata.sale_font, s)
                      });
                      break;
                    case "text_section":
                      n = j.createElement(
                        er,
                        Object(k.a)({ section: e }, o.props)
                      );
                      break;
                    case "tabs":
                      var r = o.state.selectedTabs.get(e);
                      m.push({ activeTab: r, elements: [] }),
                        (n = j.createElement(
                          Vn,
                          Object(k.a)({ section: e }, o.props, {
                            activeTab: r,
                            onTabSelected: o.OnTabSelected
                          })
                        ));
                      break;
                    case "vo_internal":
                      if (e.internal_section_data)
                        switch (e.internal_section_data.internal_type) {
                          case "subscription_pricing":
                            n = j.createElement(
                              Hn,
                              Object(k.a)({ section: e }, o.props)
                            );
                            break;
                          case "event_schedule":
                            n = j.createElement(
                              yn,
                              Object(k.a)({ section: e }, o.props, {
                                activeTab: a
                              })
                            );
                            break;
                          case "tab_contents":
                            n = j.createElement(
                              Wn,
                              Object(k.a)({ section: e }, o.props, { tab: a })
                            );
                        }
                  }
                m[m.length - 1].elements.push(
                  j.createElement(
                    R.a,
                    { key: "SaleSectionIndex_" + t + "saleday_" + d },
                    n
                  )
                );
              });
              var t = m.map(function(e, t) {
                return j.createElement(
                  "div",
                  {
                    key: "TabSection_" + t,
                    className: sn.a.SaleSectionTabListContainer
                  },
                  e.elements
                );
              });
              return j.createElement(
                "div",
                { className: sn.a.SaleSectionListContainer },
                t
              );
            }),
            Object(k.c)([Z.a], e.prototype, "OnTabSelected", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component);
      var Kn = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language;
          if (!sr(t, n, a.clanSteamID.GetAccountID())) return null;
          var r = j.createElement(
            "div",
            {
              className: ft.a.SaleSectionHeader,
              style: (function(e, t, a) {
                return {
                  fontFamily: cr(t.jsondata.sale_font, a),
                  fontWeight: t.jsondata.sale_font_weight,
                  fontSize: t.jsondata.sale_section_font_size,
                  textTransform: t.jsondata.sale_section_disable_capitalize
                    ? "initial"
                    : null,
                  color: e.label_color,
                  textAlign: t.GetSaleLabelAlign()
                };
              })(t, a, n)
            },
            sr(t, n, a.clanSteamID.GetAccountID())
          );
          return (
            t.label_link &&
              (r = j.createElement(
                "a",
                {
                  href:
                    (G.c.IN_CLIENT ? "steam://openurl/" : "") +
                    ir(t.label_link),
                  target: G.c.IN_CLIENT ? void 0 : "_blank"
                },
                r
              )),
            r
          );
        },
        Xn = function(e) {
          var t = e.section,
            a = e.event;
          e.language;
          return j.createElement(
            "div",
            { className: sn.a.SaleSection, style: lr(t, a) },
            j.createElement(Kn, Object(k.a)({}, e)),
            j.createElement(
              "div",
              { className: sn.a.SaleSectionLoginPrompt },
              Object(L.d)("#SalePage_LoginPrompt"),
              j.createElement(
                "button",
                { onClick: Je.a, className: sn.a.LoginButton },
                Object(L.d)("#Login_SignIn")
              )
            )
          );
        },
        $n = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview;
          return j.createElement(
            "div",
            {
              className: Object(W.a)(sn.a.SaleSection, pa.a.SaleSectionCtn),
              style: lr(t, a)
            },
            j.createElement(Kn, Object(k.a)({}, e)),
            j.createElement(
              "div",
              { className: ft.a.SaleSectionContainer },
              j.createElement(Aa.a, {
                text: a.GetDescriptionWithFallback(n),
                partnerEventStore: T.c,
                showErrorInfo: r,
                event: a
              })
            )
          );
        },
        er = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview,
            o = "";
          return (
            t.text_section_contents &&
              (o =
                t.text_section_contents[n] || t.text_section_contents[0] || ""),
            j.createElement(
              "div",
              {
                className: Object(W.a)(sn.a.SaleSection, pa.a.SaleSectionCtn),
                style: lr(t, a)
              },
              j.createElement(Kn, Object(k.a)({}, e)),
              j.createElement(
                "div",
                { className: ft.a.SaleSectionContainer },
                j.createElement(Aa.a, {
                  text: o,
                  partnerEventStore: T.c,
                  showErrorInfo: r,
                  event: a
                })
              )
            )
          );
        },
        tr = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bInitialLoadComplete: !1,
                bShowContents: !1,
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
            Object(k.d)(e, t),
            ((a = e).prototype.componentDidMount = function() {
              window.addEventListener("resize", this.OnResize),
                this.LoadCapsules("initial_load");
            }),
            (e.prototype.componentDidUpdate = function(e) {
              var t = this;
              (this.props.section == e.section &&
                this.props.event == e.event &&
                this.props.activeTab == e.activeTab &&
                this.props.nSaleDayIndex == e.nSaleDayIndex) ||
                this.setState(
                  { bInitialLoadComplete: !1, bShowContents: !1 },
                  function() {
                    return t.LoadCapsules("initial_load");
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
              this.state.bShowContents ||
                this.state.bAwaitingShowContentLoading ||
                this.setState(
                  { bAwaitingShowContentLoading: !0 },
                  this.EnsureAllContentLoaded
                );
            }),
            (e.prototype.EnsureAllContentLoaded = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.LoadCapsules("all_content_load")];
                    case 1:
                      return (
                        e.sent(),
                        this.setState({
                          bShowContents: !0,
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
                if (window.sessionStorage) {
                  var r = window.sessionStorage.getItem(n);
                  if (r) {
                    var o = JSON.parse(r);
                    if (o.rtime32_last_modified == a.rtime32_last_modified)
                      return o;
                  }
                  Object(_e.f)(t.capsules),
                    Object(_e.f)(t.links),
                    Object(_e.f)(t.events),
                    (t.rtime32_last_modified = a.rtime32_last_modified),
                    window.sessionStorage.setItem(n, JSON.stringify(t));
                }
              }
              return t;
            }),
            (e.prototype.LoadCapsules = function(C) {
              return Object(k.b)(this, void 0, void 0, function() {
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
                  f;
                return Object(k.e)(this, function(e) {
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
                          : [4, w.a.HintLoad()]
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
                              (function(u, m, h) {
                                return Object(k.b)(
                                  this,
                                  void 0,
                                  void 0,
                                  function() {
                                    var t, a, n, r, o, i, s, l, c, d, p;
                                    return Object(k.e)(this, function(e) {
                                      switch (e.label) {
                                        case 0:
                                          return (
                                            (t = u.smart_section_type),
                                            (a = u.smart_section_max_apps),
                                            (n = u.smart_section_tag),
                                            (r = u.smart_section_category),
                                            (o = u.random_from_entire_set),
                                            (i = a || 24),
                                            "tag" !== t
                                              ? [3, 2]
                                              : [
                                                  4,
                                                  Wt.GetDiscounts({
                                                    tagid: n,
                                                    max_results: i,
                                                    feature: m,
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
                                                Wt.GetDiscounts({
                                                  categoryid: r,
                                                  max_results: i,
                                                  feature: m,
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
                                            : [4, Wt.GetTopN(m, i)];
                                        case 5:
                                          return [
                                            2,
                                            (s = e.sent()).map(function(e) {
                                              return { id: e, type: "game" };
                                            })
                                          ];
                                        case 6:
                                          return G.i.logged_in
                                            ? [3, 7]
                                            : [2, []];
                                        case 7:
                                          return !G.i.logged_in ||
                                            ("wishlist" !== t &&
                                              "interactive_recommender" !== t)
                                            ? [3, 8]
                                            : [
                                                2,
                                                (s = h.filter(function(e) {
                                                  return (
                                                    !w.a.BOwnsApp(e) &&
                                                    (("wishlist" === t &&
                                                      w.a.BIsGameWishlisted(
                                                        e
                                                      )) ||
                                                      ("interactive_recommender" ===
                                                        t &&
                                                        w.a.BIsGameRecommended(
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
                                        case 8:
                                          if (
                                            !G.i.logged_in ||
                                            ("wishlist_onsale" !== t &&
                                              "dlc_onsale" !== t &&
                                              "dlc_music_onsale" !== t &&
                                              "interactive_recommender_onsale" !==
                                                t &&
                                              "ir_subscription" !== t &&
                                              "tag_recommender" !== t)
                                          )
                                            return [3, 24];
                                          switch (((s = []), t)) {
                                            case "wishlist_onsale":
                                              return [3, 9];
                                            case "dlc_onsale":
                                              return [3, 12];
                                            case "dlc_music_onsale":
                                              return [3, 15];
                                            case "interactive_recommender_onsale":
                                              return [3, 17];
                                            case "tag_recommender":
                                              return [3, 20];
                                            case "ir_subscription":
                                              return [3, 21];
                                          }
                                          return [3, 23];
                                        case 9:
                                          return qt.GetHideWishlist()
                                            ? [3, 11]
                                            : [4, Wt.GetWishlistOnSale()];
                                        case 10:
                                          (s = e.sent()),
                                            (l = "game"),
                                            (e.label = 11);
                                        case 11:
                                          return [3, 23];
                                        case 12:
                                          return (
                                            (l = "dlc"),
                                            qt.GetHideDLC()
                                              ? [3, 14]
                                              : [
                                                  4,
                                                  Wt.GetDLCForGamesInMyLibraryOnSale()
                                                ]
                                          );
                                        case 13:
                                          (s = e.sent()), (e.label = 14);
                                        case 14:
                                          return [3, 23];
                                        case 15:
                                          return (
                                            (l = "music"),
                                            [
                                              4,
                                              Wt.GetSoundtracksForGamesInMyLibraryOnSale()
                                            ]
                                          );
                                        case 16:
                                          return (s = e.sent()), [3, 23];
                                        case 17:
                                          return (
                                            (l = "game"),
                                            qt.GetHideIRList()
                                              ? [3, 19]
                                              : [
                                                  4,
                                                  Wt.GetInteractiveRecommendationsOnSale()
                                                ]
                                          );
                                        case 18:
                                          (s = e.sent()), (e.label = 19);
                                        case 19:
                                          return [3, 23];
                                        case 20:
                                          return (
                                            (l = "game"),
                                            (s =
                                              Object(G.f)(
                                                "tag_recommender",
                                                "application_config"
                                              ) || []),
                                            [3, 23]
                                          );
                                        case 21:
                                          return (
                                            (l = "game"),
                                            (c = 402931),
                                            [
                                              4,
                                              (d = Jt.Get()).LoadSubscriptionInfo(
                                                c
                                              )
                                            ]
                                          );
                                        case 22:
                                          return (
                                            e.sent(),
                                            (p = d.GetAllAppForMaster(c)),
                                            (s = Array.from(p).filter(function(
                                              e
                                            ) {
                                              return w.a.BIsGameRecommended(e);
                                            })),
                                            [3, 23]
                                          );
                                        case 23:
                                          return [
                                            2,
                                            s.map(function(e) {
                                              return { id: e, type: l };
                                            })
                                          ];
                                        case 24:
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
                                t,
                                (function(e) {
                                  return (
                                    (G.c.IN_CLIENT
                                      ? "library-"
                                      : Object(G.e)() + "-") + e
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
                        (l = nr(
                          (l = (function(t, e, a) {
                            return e.filter(function(e) {
                              return rr(t, e.id, e.type, a);
                            });
                          })(i, l, s)),
                          s
                        )),
                        (d = !1),
                        "initial_load" != C ||
                          !t.cap_section_content ||
                          t.smart_section ||
                          t.use_random_order ||
                          t.show_as_carousel ||
                          o ||
                          "store" !== Object(G.e)() ||
                          ((p = (Object(ht.o)(t) + 1) * t.capsules_per_row),
                          l.length > p + 2 * t.capsules_per_row &&
                            ((l = l.slice(0, p)), (d = !0))),
                        [4, Object(ln.d)(l)]
                      );
                    case 5:
                      return (
                        e.sent(), (u = ar(t)) ? [4, Object(ln.c)(l)] : [3, 8]
                      );
                    case 6:
                      return (
                        (m = e.sent()),
                        0 <
                        (h = m
                          .map(function(e) {
                            var t = zt.a.GetAppLinkInfo(e);
                            return t && t.full_game_appid;
                          })
                          .filter(function(e) {
                            return !!e;
                          })).length
                          ? [4, zt.a.LoadAppLinkInfo(h)]
                          : [3, 8]
                      );
                    case 7:
                      e.sent(), (e.label = 8);
                    case 8:
                      return [4, Object(ln.a)(l, u)];
                    case 9:
                      return (
                        (v = e.sent()),
                        (_ = l.length - v.length),
                        this.setState({
                          nHiddenCapsules: _,
                          capsules: v,
                          bIsCapsuleArrayTruncated: d,
                          bInitialLoadComplete: !0
                        }),
                        [3, 19]
                      );
                    case 10:
                      return "events" !== t.section_type
                        ? [3, 16]
                        : ((b = void 0),
                          t.smart_section &&
                          "recent_events" === t.smart_section_type
                            ? [4, Yt.GetRecentEventsForSalesPage(n)]
                            : [3, 13]);
                    case 11:
                      return (
                        (g = e.sent()),
                        (y = g.map(function(e) {
                          var t = new O.a(e.clan_steamid);
                          return T.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                            t,
                            e.gid,
                            e.nLastModifiedTime
                          );
                        })),
                        [4, Promise.all(y)]
                      );
                    case 12:
                      return (b = e.sent()), [3, 15];
                    case 13:
                      return [
                        4,
                        T.c.LoadBatchPartnerEventsByAnnouncementGID(
                          null,
                          t.events.map(function(e) {
                            return e.announcement_gid;
                          })
                        )
                      ];
                    case 14:
                      (b = e.sent()), (e.label = 15);
                    case 15:
                      return (
                        (E = b.filter(function(e) {
                          return (
                            !!e &&
                            (function(e, t, a) {
                              return rr(e, t.appid, "game", a);
                            })(i, e, s)
                          );
                        })),
                        zt.a.LoadAppLinkInfo(
                          E.map(function(e) {
                            return e.appid;
                          })
                        ),
                        this.setState({ events: E, bInitialLoadComplete: !0 }),
                        [3, 19]
                      );
                    case 16:
                      return "links" !== t.section_type &&
                        "sale_tabhub" !== t.smart_section_type
                        ? [3, 19]
                        : ((S = t.links),
                          "sale_tabhub" !== t.smart_section_type
                            ? [3, 18]
                            : [4, Wt.GetSaleTags()]);
                    case 17:
                      (f = e.sent()),
                        (S = f.map(function(e) {
                          return {
                            url: e.url,
                            localized_link_capsule: void 0,
                            materialized_link_capsule: e.square
                          };
                        })),
                        (e.label = 18);
                    case 18:
                      this.setState({ links: S, bInitialLoadComplete: !0 }),
                        (e.label = 19);
                    case 19:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.OnResize = function() {
              this.setState({
                bScreenIsWide: a.IsWideScreen(),
                nMaxCapsulesPerRow: a.GetMaxCapsulesPerRow()
              });
            }),
            (e.prototype.ShowEventInModel = function(e) {
              this.state.showEventInModal != e &&
                this.setState({ showEventInModal: e });
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props,
                a = t.event,
                n = t.bIsPreview,
                r = t.language,
                o = t.activeTab,
                i = this.state,
                s = i.bInitialLoadComplete,
                l = i.bShowContents,
                c = i.bIsCapsuleArrayTruncated,
                d = i.nHiddenCapsules,
                p = i.capsules,
                u = i.links,
                m = i.events,
                h = i.bScreenIsWide,
                v = i.nMaxCapsulesPerRow;
              if (!s) return null;
              var _ = this.GetSectionForSession(),
                b = (function(e) {
                  var t = e.event,
                    r = e.section,
                    o = e.capsules,
                    a = e.links,
                    n = e.events,
                    i = e.language,
                    s = e.bShowParentApp,
                    l = e.fnShowEventInModal,
                    c = (e.activeTab, t.clanSteamID.GetAccountID()),
                    d = t.BIsLockedToAppOwners();
                  {
                    if (Boolean("events" === r.section_type))
                      return n
                        ? n.map(function(t) {
                            return j.createElement(
                              "div",
                              {
                                key: r.unique_id + "_" + t.GID,
                                style: {},
                                className: ma.a.OtherEvents
                              },
                              j.createElement(Na, {
                                event: t,
                                openNewWindow: !0,
                                appInfo: zt.a.GetAppLinkInfo(t.appid),
                                onClick: function(e) {
                                  l(t), e.stopPropagation(), e.preventDefault();
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
                            return j.createElement(Ua.b, {
                              key: r.unique_id + "_" + t,
                              link: e,
                              language: i,
                              clanAccountID: c,
                              strClassName: sn.a.LinkCapsule
                            });
                          })
                        : [];
                    if (Boolean("items" === r.section_type))
                      return o
                        ? o.map(function(e, t) {
                            var a = 1 < Math.min(r.capsules_per_row, o.length),
                              n =
                                r.unique_id +
                                "_" +
                                t +
                                "_" +
                                e.type +
                                "_" +
                                e.id;
                            return a
                              ? j.createElement(Ua.e, {
                                  key: n,
                                  capsule: e,
                                  bShowParentApp: s,
                                  bUseSubscriptionLayout: d
                                })
                              : j.createElement(
                                  "div",
                                  {
                                    key: n,
                                    className: sn.a.AppSummaryWidgetCtn
                                  },
                                  j.createElement(Ua.f, {
                                    id: e.id,
                                    type: e.type
                                  })
                                );
                          })
                        : [];
                  }
                  return null;
                })({
                  event: a,
                  section: _,
                  capsules: p,
                  links: u,
                  events: m,
                  language: r,
                  bShowParentApp: ar(_),
                  fnShowEventInModal: this.ShowEventInModel,
                  activeTab: o
                }).filter(function(e) {
                  return !!e;
                }),
                g = null;
              if (0 < b.length) {
                var y = Math.min(_.capsules_per_row, v, b.length);
                if (_.show_as_carousel && b.length > y) {
                  var E = void 0;
                  if ("items" === _.section_type)
                    E = [void 0, 454 / 243, 302 / 173, 227 / 137][y - 1];
                  g = j.createElement(
                    aa,
                    {
                      hideArrows: !h,
                      visibleElements: y,
                      slideAspectRatio: E,
                      className: "SaleSectionCarousel"
                    },
                    b
                  );
                } else {
                  var S = Object(ht.o)(_);
                  c &&
                    2 < S &&
                    S * y > b.length &&
                    (S = Math.max(2, Math.floor(b.length / y)));
                  var f = 0 == S || l ? b.length : S * y,
                    C = c || b.length > f;
                  g = j.createElement(
                    j.Fragment,
                    null,
                    j.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          ft.a.SaleSectionContainer,
                          sn.a.SaleSectionContainer
                        ),
                        style: {
                          gridTemplateColumns:
                            1 < y ? "repeat(" + y + ", minmax(0, 1fr))" : null
                        }
                      },
                      b.slice(0, f)
                    ),
                    C &&
                      j.createElement(
                        "div",
                        { className: sn.a.ShowContentsContainer },
                        this.state.bAwaitingShowContentLoading
                          ? j.createElement(oe.a, {
                              size: "small",
                              string: Object(L.d)("#Sale_ShowMore")
                            })
                          : j.createElement(
                              "button",
                              {
                                onClick: this.ShowContents,
                                className: sn.a.ShowContentsButton
                              },
                              Object(L.d)("#Sale_ShowMore")
                            )
                      )
                  );
                }
              }
              if (!g) {
                if (!n) return null;
                g = j.createElement(
                  "div",
                  { className: sn.a.preview_placeholder_section },
                  Object(L.d)(
                    _.smart_section
                      ? "#Sale_SmartPlaceHolder"
                      : "#Sale_PlaceHolder"
                  )
                );
              }
              var O = _.label_link
                ? (G.c.IN_CLIENT ? "steam://openurl/" : "") + ir(_.label_link)
                : void 0;
              return j.createElement(
                j.Fragment,
                null,
                j.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      sn.a.SaleSection,
                      _.show_as_carousel && sn.a.CarouselDisplay,
                      pa.a.SaleSectionCtn
                    ),
                    style: lr(_, a)
                  },
                  j.createElement(Kn, Object(k.a)({}, this.props)),
                  0 < d &&
                    j.createElement(
                      "div",
                      {
                        className: sn.a.SaleSectionSubtext,
                        style: { color: _.label_color }
                      },
                      Object(L.k)(
                        1 == d
                          ? "#Sale_HiddenItem_Single"
                          : "#Sale_HiddenItems",
                        d,
                        j.createElement(
                          "a",
                          {
                            href: G.c.STORE_BASE_URL + "account/preferences",
                            style: {
                              color: _.label_color,
                              filter: "brightness(150%)"
                            }
                          },
                          Object(L.d)("#Sale_StorePreferences")
                        )
                      )
                    ),
                  g,
                  Boolean(O) &&
                    j.createElement(
                      "div",
                      { className: sn.a.SaleViewAll },
                      j.createElement(
                        "a",
                        { href: O, target: G.c.IN_CLIENT ? void 0 : "_blank" },
                        Object(L.d)("#btn_live_streams_all")
                      )
                    )
                ),
                Boolean(this.state.showEventInModal) &&
                  j.createElement(
                    Ae.g,
                    { className: va.a.StoreHeaderAdjust },
                    j.createElement(
                      "div",
                      null,
                      j.createElement(yt.a, {
                        event: this.state.showEventInModal,
                        fnClose: function() {
                          return e.ShowEventInModel(void 0);
                        }
                      })
                    )
                  )
              );
            }),
            Object(k.c)([Z.a], e.prototype, "ShowContents", null),
            Object(k.c)([Z.a], e.prototype, "LoadCapsules", null),
            Object(k.c)([Z.a], e.prototype, "OnResize", null),
            Object(k.c)([Z.a], e.prototype, "ShowEventInModel", null),
            (e = a = Object(k.c)([r.observer], e))
          );
        })(j.Component);
      function ar(e) {
        return (
          "dlc" === e.smart_section_type ||
          "dlc_onsale" === e.smart_section_type ||
          "dlc_music_onsale" === e.smart_section_type
        );
      }
      function nr(e, t) {
        return e.filter(function(e) {
          return null == e.visibility_index || e.visibility_index == t;
        });
      }
      function rr(e, t, a, n) {
        if (!e || !e.capsules) return !0;
        var r = nr(e.capsules, n);
        return (
          0 == r.length ||
          r.some(function(e) {
            return e.id === t && e.type === a;
          })
        );
      }
      var or = function(e) {
        var t = e.text,
          a = e.url,
          n = e.color,
          r = e.bgcolor;
        return j.createElement(
          "a",
          {
            className: ft.a.BrowseMoreButton,
            href: ir(a),
            target: "_blank",
            style: { backgroundColor: r, color: n }
          },
          t || Object(L.d)("#Sale_BrowseMore_Text_Default")
        );
      };
      function ir(t) {
        var e = "",
          a = "";
        if (t && (0 <= t.indexOf("/") || 0 <= t.indexOf("?")))
          try {
            var n = new URL(t);
            (e = n.pathname.substring(1)),
              (a = n.search),
              G.c.SNR &&
                (a += 0 < a.length ? "&snr=" + G.c.SNR : "?snr=" + G.c.SNR);
          } catch (e) {
            console.warn(t, e);
          }
        return G.c.STORE_BASE_URL + e + a;
      }
      function sr(e, t, a, n) {
        var r =
            e.localized_label[t] ||
            e.localized_label[0] ||
            ("#Sale_default_label" === e.default_label
              ? ""
              : Object(L.d)(e.default_label)),
          o =
            e.localized_label_image &&
            (e.localized_label_image[t] || e.localized_label_image[0]);
        if (n || !o) return r;
        var i = G.c.MEDIA_CDN_COMMUNITY_URL + "images/clans/" + a + "/" + o;
        return j.createElement("img", { loading: "lazy", src: i, alt: r });
      }
      function lr(e, t) {
        var a = "";
        e.background_image &&
          (a +=
            "url(" +
            he.a.GenerateArtworkURLFromHashAndExtensions(
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
      function cr(e, t) {
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
      var dr = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.OnEnter = function() {
              this.state.bOnceVisible || this.setState({ bOnceVisible: !0 });
            }),
            (e.prototype.render = function() {
              return j.createElement(
                R.a,
                null,
                j.createElement(
                  j.Suspense,
                  { fallback: j.createElement("div", null) },
                  j.createElement(
                    ie.a,
                    { onEnter: this.OnEnter },
                    j.createElement(
                      "div",
                      {
                        style: {
                          width: "100%",
                          margin: "0 auto",
                          maxWidth: "940px"
                        }
                      },
                      Boolean(this.state.bOnceVisible) &&
                        j.createElement(Zn, {
                          promotionName: this.props.promotionName,
                          clanid: Number(G.b.CLANACCOUNTID),
                          event: this.props.eventModel,
                          bIsPreview: this.props.bIsPreview,
                          language: this.props.language
                        }),
                      Boolean(!this.state.bOnceVisible) &&
                        j.createElement("span", null, Object(L.d)("#Loading"))
                    )
                  )
                )
              );
            }),
            Object(k.c)([Z.a], e.prototype, "OnEnter", null),
            e
          );
        })(j.Component),
        pr = Object(r.observer)(function(e) {
          var t = Ut.b.GetPlayReadyStream(),
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
          return j.createElement(
            "div",
            { className: sn.a.SalePageBroadcastContextHover },
            j.createElement("img", {
              src: i,
              className: sn.a.AlbumCoverImage,
              onClick: s
            }),
            j.createElement(
              "div",
              { className: sn.a.AlbumTitle, onClick: s },
              " ",
              o,
              " "
            )
          );
        }),
        ur = a("BVKn"),
        mr = ur.a.Get(),
        hr = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.state = {
                lookupGID: t.props.event_gid
                  ? t.props.event_gid
                  : mr.GetClanEventGIDFromAnnouncementGID(
                      t.props.announcement_gid
                    )
              }),
              t
            );
          }
          return (
            Object(k.d)(e, a),
            (e.prototype.LoadEvent = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  a = this;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !this.props.event_gid ||
                        mr.GetClanEventModel(this.props.event_gid)
                      )
                        return [3, 5];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          mr.LoadPartnerEventGeneric(
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
                        mr
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
                                Object(y.a)(e).strErrorMsg
                            );
                          }),
                        [3, 4]
                      );
                    case 4:
                      return [3, 6];
                    case 5:
                      this.props.announcement_gid &&
                        !mr.GetClanEventGIDFromAnnouncementGID(
                          this.props.announcement_gid
                        ) &&
                        mr
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
                                Object(y.a)(e).strErrorMsg
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
                  mr.GetClanEventModel(this.state.lookupGID);
              if (t && t.appid) {
                var a = b.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData();
                e = a && a.title;
              } else if (t && t.clanSteamID) {
                var n = g.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                );
                e = n && n.group_name;
              }
              var r = t && t.GetNameWithFallback(Object(me.d)(G.c.LANGUAGE));
              if (t && e && r) {
                var o = Object(L.d)(
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
              var e = mr.GetClanEventModel(this.state.lookupGID);
              e &&
                (e.appid
                  ? this.props.history.push("/newshub/app/" + e.appid)
                  : this.props.history.push(
                      "/newshub/group/" + e.clanSteamID.GetAccountID()
                    ));
            }),
            (e.prototype.render = function() {
              var e = mr.GetClanEventModel(this.state.lookupGID);
              return e
                ? this.props.bInfiniteScroll
                  ? l.a.createElement(
                      R.a,
                      null,
                      l.a.createElement(qe, {
                        classname: X.a.StoreHeaderAdjust,
                        appid: e.appid,
                        trackingLocation: 0,
                        announcementGID: e.GetAnnouncementGID(),
                        partnerEventStore: mr,
                        eventModel: e,
                        showAppHeader: !0,
                        closeModal: this.InfiniteScrollCloseModal
                      })
                    )
                  : l.a.createElement(
                      R.a,
                      null,
                      l.a.createElement(Va, {
                        lang: Object(me.d)(G.c.LANGUAGE),
                        partnerEventStore: mr,
                        event: e,
                        adminPanel: l.a.createElement(ca, {
                          eventModel: e,
                          partnerEventStore: mr
                        }),
                        otherEventRow: l.a.createElement(Ga, {
                          appid: e.appid,
                          eventModel: e,
                          partnerEventStore: mr
                        })
                      })
                    )
                : l.a.createElement(oe.a, null);
            }),
            Object(k.c)([Z.a], e.prototype, "InfiniteScrollCloseModal", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(l.a.Component),
        vr = Object(c.g)(hr),
        _r = a("WBba"),
        br = a("apHd"),
        gr = (function(n) {
          function e(e) {
            var a = n.call(this, e) || this;
            a.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: []
            };
            var t = Object(br.a)("EventWebRowEmbed");
            return (
              a.ValidateStoreDefault(t) &&
                ((a.state.bPreLoaded = t.bPreLoaded),
                (a.state.announcementGIDList = t.announcementGIDList),
                (a.state.events = []),
                a.state.announcementGIDList.forEach(function(e) {
                  var t = T.c.GetClanEventFromAnnouncementGID(e);
                  t && a.state.events.push(t);
                })),
              a
            );
          }
          return (
            Object(k.d)(e, n),
            (e.prototype.componentDidMount = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o,
                  i,
                  s,
                  l = this;
                return Object(k.e)(this, function(e) {
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
                          ((s = A.a.Get().GetTracker()),
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
              var a = A.a.Get().GetTracker();
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
                  { className: Ve.a.FlexCenter },
                  l.a.createElement(oe.a, {
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
                s = t.trackingLocation;
              return l.a.createElement(
                "div",
                { className: o },
                this.state.bShowModal &&
                  l.a.createElement(qe, {
                    classname: ha.StoreHeaderAdjust,
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
                  Object(L.d)("#EventBrowse_RecentEvents")
                ),
                l.a.createElement(
                  "div",
                  { className: ha.SectionButtonCtn },
                  l.a.createElement(
                    "div",
                    {
                      className: ha.SectionButton,
                      onClick: function() {
                        return a.ShowModal(n[0]);
                      }
                    },
                    Object(L.d)("#EventBrowse_MoreEventsBtn")
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: ha.EventsSummariesCtn },
                  n.slice(0, e).map(function(t) {
                    var e =
                      1 === n.length && 500 < window.screen.width ? Ba : Na;
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
            Object(k.c)([Z.a], e.prototype, "ShowModal", null),
            Object(k.c)([Z.a], e.prototype, "CloseModal", null),
            e
          );
        })(l.a.Component),
        yr = (function(r) {
          function e(e) {
            var t = r.call(this, e) || this;
            t.m_rtimeOldest = 0;
            var a = N.a.GetTimeNowWithOverrideAsDate(),
              n = new Date(a.setUTCHours(0, 0, 0, 0) - 15552e6);
            return (t.m_rtimeOldest = Math.floor(n.getTime() / 1e3)), t;
          }
          return (
            Object(k.d)(e, r),
            (e.prototype.render = function() {
              var e = this.props.appid;
              return l.a.createElement(gr, {
                appid: e,
                partnerEventStore: ur.a.Get(),
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
        return fr;
      }),
        a.d(t, "EventBackfillLanding", function() {
          return Cr;
        }),
        a.d(t, "EventSaleDisplay", function() {
          return Or;
        }),
        a.d(t, "EventCalendar", function() {
          return Ir;
        }),
        a.d(t, "EventDetailView", function() {
          return Tr;
        }),
        a.d(t, "Events", function() {
          return wr;
        }),
        Ze.a.Init(new _r.a(G.c.WEBAPI_BASE_URL)),
        T.c.Init();
      var Er = function(e) {
        var t = e.children,
          a = Object(j.useState)(A.a.IsInitialized()),
          n = a[0],
          r = a[1];
        return n
          ? l.a.createElement(l.a.Fragment, null, t)
          : (A.a.InitGlobal().then(function() {
              return r(!0);
            }),
            null);
      };
      function Sr(t) {
        return function(e) {
          return l.a.createElement(Er, null, l.a.createElement(t, e));
        };
      }
      var fr = Sr(kt),
        Cr = Sr(Ft),
        Or = Sr(Yn),
        Ir = Sr(ot),
        Tr = Sr(vr),
        wr = Sr(yr);
    },
    YVfL: function(e, t, a) {
      e.exports = {
        SaleSchedCtn: "salesectioneventschedule_SaleSchedCtn_2g7il",
        SectionCtn: "salesectioneventschedule_SectionCtn_2wwgk",
        SaleSchedListCtn: "salesectioneventschedule_SaleSchedListCtn_1THwn",
        SaleSchedGridCtn: "salesectioneventschedule_SaleSchedGridCtn_50nbv",
        SchedSectionLabel: "salesectioneventschedule_SchedSectionLabel_2UAed",
        SaleSchedDetailCtn: "salesectioneventschedule_SaleSchedDetailCtn_31c5z",
        SaleSchedRowProxy: "salesectioneventschedule_SaleSchedRowProxy_2HMsx",
        SaleSchedRow: "salesectioneventschedule_SaleSchedRow_3l83c",
        Time: "salesectioneventschedule_Time_3qoMb",
        DetailsCtn: "salesectioneventschedule_DetailsCtn_3deMj",
        AppTitle: "salesectioneventschedule_AppTitle_3q715",
        Icon: "salesectioneventschedule_Icon_26VBx",
        SchedRowSelected: "salesectioneventschedule_SchedRowSelected_3GxYn",
        SaleAppWideCtn: "salesectioneventschedule_SaleAppWideCtn_3QOgi",
        WideHeader: "salesectioneventschedule_WideHeader_wI_4v",
        WideDetailCtn: "salesectioneventschedule_WideDetailCtn_2UUN8",
        ReleaseDate: "salesectioneventschedule_ReleaseDate_3pYbY",
        GameButtons: "salesectioneventschedule_GameButtons_nZS28",
        WideActionCtn: "salesectioneventschedule_WideActionCtn_mZEz5",
        SaleTagAndOS: "salesectioneventschedule_SaleTagAndOS_2rcuH",
        MediaContainer: "salesectioneventschedule_MediaContainer_u2Bv0",
        MainMediaCtn: "salesectioneventschedule_MainMediaCtn_64yk2",
        VideoThumbnail: "salesectioneventschedule_VideoThumbnail_TxIKn",
        ThumbnailsContainer:
          "salesectioneventschedule_ThumbnailsContainer_1QVAW",
        Screenshot: "salesectioneventschedule_Screenshot_jxi-O",
        ScreenshotThumbnail:
          "salesectioneventschedule_ScreenshotThumbnail_1_VV-",
        videoPlaying: "salesectioneventschedule_videoPlaying_3_Mmg",
        VideoPlayButton: "salesectioneventschedule_VideoPlayButton_3D5uj",
        VideoLargeContainer:
          "salesectioneventschedule_VideoLargeContainer_3WfQM",
        VideoLarge: "salesectioneventschedule_VideoLarge_k_PYH",
        ArtistStatementAndHiglghtCtn:
          "salesectioneventschedule_ArtistStatementAndHiglghtCtn_1mgog",
        StatementCtn: "salesectioneventschedule_StatementCtn_2p5xO",
        EventWideCtn: "salesectioneventschedule_EventWideCtn_3ebd7",
        Title: "salesectioneventschedule_Title_J6ivk",
        EventWideDetailCtn: "salesectioneventschedule_EventWideDetailCtn_jM8go",
        EventDetails: "salesectioneventschedule_EventDetails_1B7Oi",
        EventTitle: "salesectioneventschedule_EventTitle_109s-",
        EventTime: "salesectioneventschedule_EventTime_2-ep9",
        EventOptionsCtn: "salesectioneventschedule_EventOptionsCtn_3O1DS",
        EventIcon: "salesectioneventschedule_EventIcon_1qfgw",
        DemoCapsuleCtn: "salesectioneventschedule_DemoCapsuleCtn_YcUDX",
        DemoCapsuleActionCtn:
          "salesectioneventschedule_DemoCapsuleActionCtn_2Qy4b",
        NewsHubLink: "salesectioneventschedule_NewsHubLink_TafBI"
      };
    },
    ZCZY: function(e, t, a) {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_3jswb" };
    },
    bUNj: function(e, t, a) {},
    "d+Me": function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return i;
      });
      var n = a("mrSG"),
        r = a("q1tI"),
        o = a("uuth"),
        i = function(t) {
          return r.createElement(
            o.a,
            Object(n.a)({}, t, {
              onPositionChange: function(e) {
                return void 0 === e.previousPosition &&
                  e.currentPosition === o.a.above &&
                  t.onLeave
                  ? t.onLeave(e)
                  : t.onPositionChange && t.onPositionChange(e);
              }
            })
          );
        };
    },
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
    exzL: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAYAAADj79JYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDdGOTQ3RDYzRDc1MTFFQTk1MjRDRjc1M0VCNkRCRjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDdGOTQ3RDczRDc1MTFFQTk1MjRDRjc1M0VCNkRCRjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0N0Y5NDdENDNENzUxMUVBOTUyNENGNzUzRUI2REJGNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0N0Y5NDdENTNENzUxMUVBOTUyNENGNzUzRUI2REJGNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr88d9sAAAOESURBVHja7J1ZiI1hHMbfj5GSoiw35I7cOLaSpEkupDGSkosxjLU0yFxa7623dneMpGwzZGmIbGnsa5QtxFiyXCByPG/vufg6Y3Twvf/zLs9Tz+2Z7/z6zf/7zv+c850kn88rRi6diIDACZwhcAJnSktFho/VhM5LkqQtRFBZXc1laXg1egsHNokey42UvmgzoG9CuxFv+yQZvvApfqD76AyMmKscKTInzcHoJRzoMpQnZwHD0zmLzoLtT2m4TCrRGzjoGp405dID3Q3ojWhPjhS7I6U4zwoj5gxHikwGoKfwJNagXWi4fcPTuVa4fLxHw2UyHL2CJ1SPJjTcvuHpHEXnwvbXNFwmVcrsYybzslAufdDDgL4lxH2MayOlOA8KJ9RWjhSZDEIv4smuQDvTcPuGp3MOnQnbn9BwmYxVZh9TS8NlDE9nL7oQtn/wzXBfges8V2Yfc5ojRSb90RaAWId25UiRzfXC5eNdGi6TYcrsYxa7vo8JxfB0jqFzYPsrGi6TicrsY6a4eHChvpveGz0I6NvQ7hwpsnmI1mLEXOZIkclA9DyArXJhHxOD4elcUGYf84iGy2SMvmYHvDoaLp99yuxj3ksaHjNwnRdoHaC3cKTIpB96EjA3SO1jYjc8nZvK7GNu03CZ5NBWgF1qcx9Dw3+fE8rsY17ScJlM0CMGkKdm/cAE3nF6ofsBfUeW+xiOlNJyXJktJA0XyE50WlYPVkGeHeYdugAnzgNZnjQJvMSrFJ407eQb2qDntQ3YNLz9K80agL5j84/QcHN1tREdZRs2Df+LbSEN///ofXhOEnaswD+jswF6eqlvPnCk/Hv0e5r6HfzH5TqAWAz/ga5GK8sJOxbDM/lcCg0vLdvREa7ADtnwt+h8gD7k2oGFCNzKp2c5UtrnK7oErXIVdkiGW/8GBA030XuQ9ehoH2D7brjot9hiN1x/TzPnG2wfDf+ELgLoXb7+W/oEvKzftY9ppOg9yEp0nO+wfTDcmfulxGD4VmX2IMHAdtXwN8rc+L0pwLWDc8CdvatbaCPli77cQ6tDhu2K4V7cmTMEw3+ia5XZg0QBu5yGe3d3ZZ8N34MOjRG2tOEf0XqAblQRRwq4978B4ctI+Y4uR8cTtn3Dg/odH9cN34yOJGz7hrcVXpofIVr7hjejQwj7z0n4I9TxvLQncIbACZwhcAJnOs4vAQYAwpCDXwAmgMUAAAAASUVORK5CYII=";
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

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "+ZmX": function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "Init", function() {
          return r;
        });
      var n = a("5y3B"),
        G = a.n(n);
      function r() {
        var r, o, i, l, e, s, c, u;
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
            var t = G.a.TAU,
              a = ZdogSpookyHouse.color.light,
              n = new G.a.Shape({
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
                a = G.a.TAU,
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
              new G.a.Shape({
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
              u = {
                grill: new G.a.Vector({ x: -5, y: -1, z: c }),
                hood: new G.a.Vector({ x: -4, y: s, z: c }),
                wipers: new G.a.Vector({ x: -2, y: s, z: c }),
                windshield: new G.a.Vector({ x: -1, y: -4.5, z: 1.5 }),
                roof: new G.a.Vector({ x: 2, y: -4.5, z: 1.5 }),
                trunk: new G.a.Vector({ x: 4, y: s, z: c }),
                bumper: new G.a.Vector({ x: 5, y: -1, z: c })
              },
              d = {};
            for (var p in u) {
              var m = u[p];
              d[p] = m.copy().multiply({ z: -1 });
            }
            var v = new G.a.Anchor({ addTo: e.addTo }),
              h = new G.a.Group({
                addTo: v,
                translate: { z: n, y: -6 },
                scale: 1.2,
                updateSort: !0
              }),
              _ = new G.a.Shape({
                addTo: h,
                path: [
                  u.grill,
                  u.hood,
                  u.wipers,
                  u.windshield,
                  u.roof,
                  u.trunk,
                  u.bumper
                ],
                stroke: 2,
                fill: !0,
                color: t.paintjob
              });
            function b(e, t, a) {
              return _.copy({
                path: [u[e], u[t], d[t], d[e]],
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
            var g = new G.a.Vector({ x: -3.5, z: c, y: -1 }),
              f = new G.a.Ellipse({
                addTo: h,
                diameter: 1.8,
                translate: g,
                stroke: 2,
                fill: !0,
                color: t.paintjob
              });
            return (
              f.copy({ translate: g.copy().multiply({ x: -1 }) }),
              f.copy({ translate: g.copy().multiply({ z: -1 }) }),
              f.copy({ translate: g.copy().multiply({ x: -1, z: -1 }) }),
              {
                animate: function(e) {
                  (v.rotate.y = G.a.easeInOut((e / 4) % 1) * a + (3 * a) / 8),
                    (h.rotate.x = 0.1 * Math.sin(e * a * 2)),
                    (h.translate.y = 2 * Math.sin(e * a * 1.5) - 6);
                }
              }
            );
          }),
          (ZdogSpookyHouse.addCats = function(e) {
            var t = G.a.TAU,
              a = ZdogSpookyHouse.color,
              n = 1.1,
              r = new G.a.Anchor({
                addTo: e.addTo,
                translate: { z: -22, x: -28, y: -2 },
                scale: n,
                rotate: { y: t / 8 }
              });
            new G.a.Cone({
              addTo: r,
              diameter: 1,
              length: 3,
              rotate: { x: t / 4 },
              stroke: 4.4,
              color: a.deep
            });
            var o = new G.a.Shape({
              addTo: r,
              translate: { y: -4 },
              stroke: 5.5,
              color: a.deep
            });
            new G.a.Shape({
              addTo: o,
              translate: { x: -1, z: 1 },
              stroke: 0.9 * n,
              color: a.highlight
            }).copy({ translate: { x: 1, z: 1 } });
            var i = { x: -1, y: -1 },
              l = { x: 1, y: 1, z: -1 },
              s = new G.a.Anchor({
                addTo: o,
                scale: new G.a.Vector({ x: 1, y: 1, z: 1.25 })
              });
            new G.a.Shape({
              addTo: s,
              path: [{ x: -1, y: 1 }, i, l],
              translate: { x: -0.96, y: -1.5, z: 0 },
              stroke: 0.66,
              fill: !0,
              color: a.deep
            }).copy({ path: [i, { x: 1, y: 1 }, l] }),
              s.copyGraph({ scale: s.scale.copy().multiply({ x: -1 }) }),
              new G.a.Shape({
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
              var t = G.a.TAU,
                a = ZdogSpookyHouse.color,
                r = new G.a.Anchor(e),
                o = (4 * t) / 8,
                i = [],
                n = 0;
              n < 74;
              n++
            ) {
              var l = n / 74,
                s = l * o,
                c = new G.a.Shape({
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
              new G.a.Shape({
                addTo: i[0],
                translate: { x: -10, z: 8 },
                color: a.deep,
                stroke: 3.5
              }).copy({ translate: { x: -10, z: -8 } }),
              new G.a.Ellipse({
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
            var i = G.a.TAU,
              l = ZdogSpookyHouse.color,
              s = [],
              c = [];
            function t(e) {
              s.push(e);
            }
            function a(e) {
              c.push(e);
            }
            var n = new G.a.Anchor({
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
              u = new G.a.Group({ addTo: n, translate: { z: 24 } });
            a(new G.a.Rect(Object.assign({}, o, { addTo: u }))),
              new G.a.Rect({
                addTo: u,
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
            var d = Object.assign(
                { color: l.medium, rotate: { y: -i / 4 } },
                r
              ),
              p = Object.assign({ color: l.medium, rotate: { y: i / 4 } }, r),
              m = new G.a.Rect(
                Object.assign({}, d, { translate: { x: 6, z: 18 } })
              );
            t(m),
              t(m.copy({ translate: { x: 6, y: -12, z: 18 } })),
              t(m.copy({ translate: { x: 6, y: -24, z: 18 } }));
            var v = m.copy({
              translate: { x: -6, z: 18 },
              rotate: { y: i / 4 }
            });
            t(v),
              t(v.copy({ translate: { x: -6, y: -12, z: 18 } })),
              t(v.copy({ translate: { x: -6, y: -24, z: 18 } }));
            var h = new G.a.Anchor({ addTo: n, translate: { y: -36, z: 18 } }),
              _ = new G.a.Shape({
                addTo: h,
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
              new G.a.Rect({
                addTo: h,
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
                wall: Object.assign({}, d, { translate: { x: 18, z: 6 } }),
                pane: l.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, d, {
                  translate: { x: 18, y: -12, z: 6 }
                }),
                pane: l.dark,
                wallRectCallback: t
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, d, { translate: { x: 18, z: -6 } }),
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
              g = new G.a.Shape({
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
            new G.a.Shape({
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
              new G.a.Rect({
                addTo: n,
                width: 12,
                height: 6,
                translate: { x: -21, y: -6, z: 6 },
                stroke: e.stroke,
                fill: !0,
                color: l.deep,
                rotate: { x: i / 4, z: i / 4 }
              });
            var f = b.copy({
              width: 6,
              rotate: null,
              translate: { x: -21, y: -12, z: 12 },
              color: l.light
            });
            a(f),
              b.copy({ width: 6, translate: { x: -21, y: -12 } }),
              b.copy({
                width: 12,
                height: 18,
                translate: { x: -6, y: -27, z: -18 }
              }),
              new G.a.Rect({
                addTo: n,
                width: 12,
                height: 6,
                translate: { x: 0, y: -33, z: -12 },
                rotate: { y: i / 4 },
                stroke: e.stroke,
                fill: !0,
                color: l.medium
              }),
              new G.a.Shape({
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
              v.copy({ height: 18, translate: { x: -12, y: -27, z: -12 } }),
              f.copy({
                height: 6,
                width: 12,
                translate: { x: -6, y: -33, z: -6 }
              }),
              new G.a.Rect({
                addTo: n,
                width: 12,
                height: 6,
                translate: { x: -6, y: -18, z: -15 },
                rotate: { x: i / 4 },
                stroke: e.stroke,
                fill: !0,
                color: l.deep
              }),
              h.copyGraph({ translate: { x: -6, y: -42, z: -12 } });
            var E = new G.a.Anchor({
                addTo: n,
                translate: { x: 18, y: -18, z: -12 }
              }),
              y = new G.a.Group({ addTo: E });
            new G.a.Cylinder({
              addTo: y,
              diameter: 12,
              length: 24,
              color: l.medium,
              backface: l.deep,
              rotate: { x: i / 4 },
              stroke: !1
            }),
              new G.a.Cone({
                addTo: E,
                diameter: 16,
                length: 16,
                translate: { y: -12 },
                rotate: { x: i / 4 },
                color: l.deep,
                stroke: !1
              }),
              new G.a.Rect({
                addTo: y,
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
            var S = new G.a.Shape({
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
            S.copy({
              scale: { x: -1 },
              translate: { x: 20, y: -24, z: 6 },
              rotate: { y: -i / 4 },
              color: l.deep
            }),
              S.copy({
                scale: { x: -1 },
                translate: { x: -18, y: -24, z: 14 }
              }),
              S.copy({
                translate: { x: -26, y: -24, z: 6 },
                rotate: { y: i / 4 }
              });
            var C = new G.a.Shape({
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
            var O = new G.a.Anchor({ addTo: n, translate: { y: -30 } }),
              w = new G.a.Rect({
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
            var T = new G.a.Anchor({ addTo: n, translate: { y: 2 } }),
              I = new G.a.Anchor({ addTo: T, translate: { x: 9, z: 30 } });
            new G.a.Shape({
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
            var j = new G.a.Rect({
              addTo: I,
              width: 6,
              height: 10,
              translate: { y: -1 },
              stroke: 1,
              color: l.deep
            });
            j.copy({ height: 4, translate: { y: 2 } }),
              j.copy({ width: 2, height: 4, translate: { y: 2 } }),
              I.copyGraph({ translate: { x: 15, z: 30 } }),
              I.copyGraph({ translate: { x: 21, z: 30 } }),
              I.copyGraph({ translate: { x: -9, z: 30 } });
            var k = I.copyGraph({
              translate: { x: 24, z: 27 },
              rotate: { y: -i / 4 }
            });
            k.copyGraph({ translate: { x: 24, z: 21 } }),
              k.copyGraph({ translate: { x: 24, z: 15 } }),
              k.copyGraph({ translate: { x: 24, z: 9 } }),
              k.copyGraph({ translate: { x: 24, z: 3 } }),
              I.copyGraph({
                translate: { x: -12, z: 27 },
                rotate: { y: i / 4 }
              }).copyGraph({ translate: { x: -12, z: 21 } });
            var D = new G.a.Shape({
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
              new G.a.Rect({
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
              a = G.a.TAU,
              n = [{ y: 0 }, { y: 1 }],
              r = new G.a.Anchor({
                addTo: e.addTo,
                translate: e.translate,
                rotate: e.rotate
              }),
              o = t.medium,
              i = new G.a.Anchor({ addTo: r, rotate: { z: 0.1 } });
            new G.a.Rect({
              addTo: i,
              width: 9,
              height: 4,
              rotate: { x: a / 4 },
              fill: !0,
              color: o,
              stroke: 1.5
            });
            var l = new G.a.Shape({
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
            var s = new G.a.Anchor({ addTo: i, translate: { y: -8 } }),
              c = new G.a.Group({ addTo: s, rotate: { y: a / 2 } }),
              u = new G.a.Rect({
                addTo: c,
                width: 10,
                height: 5,
                color: t.deep,
                fill: !0,
                stroke: 1.5
              });
            new G.a.Rect({
              addTo: c,
              width: 9.5,
              height: 4.5,
              color: t.highlight,
              backface: !1,
              fill: !0,
              stroke: !1
            }),
              u.copy({
                addTo: s,
                width: 5,
                height: 2,
                rotate: { x: a / 4 },
                translate: { y: 5 }
              }),
              new G.a.Shape({
                addTo: s,
                path: n,
                scale: 2,
                translate: { y: 3.1 },
                stroke: 1.5,
                color: t.deep
              });
            var d = new G.a.Anchor({
              addTo: r,
              translate: { z: -15 },
              rotate: { z: -0.1 }
            });
            new G.a.Rect({
              addTo: d,
              width: 3,
              height: 3,
              rotate: { x: a / 4 },
              fill: !0,
              stroke: 1.5,
              color: o
            }),
              new G.a.Shape({
                addTo: d,
                path: n,
                scale: 3,
                stroke: 1.5,
                color: o
              });
            var p = new G.a.Shape({
              addTo: d,
              path: [{}, { z: -2.5, y: 0.5 }],
              translate: { y: 3 },
              stroke: 1,
              color: o
            });
            p.copy({ rotate: { y: (a / 5) * 1 } }),
              p.copy({ rotate: { y: (a / 5) * 2 } }),
              p.copy({ rotate: { y: (a / 5) * 3 } }),
              p.copy({ rotate: { y: (a / 5) * 4 } }),
              new G.a.Rect({
                addTo: d,
                width: 3,
                height: 4,
                translate: { z: -2.5, y: -2 },
                rotate: { x: 0.2 },
                stroke: 1.5,
                color: o,
                fill: !0
              });
            var m = t.deep,
              v = new G.a.Anchor({
                addTo: r,
                translate: { z: -13, y: -6 },
                scale: 0.6
              }),
              h = new G.a.Shape({
                addTo: v,
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
            new G.a.Shape({
              addTo: h,
              path: n,
              scale: -1,
              translate: { y: -5.5 },
              stroke: 2.5,
              color: m
            });
            var _ = new G.a.Shape({
              addTo: h,
              path: [{}, { y: 3 }, { z: 2, y: 4 }],
              translate: { x: -1.5, y: -3 },
              rotate: { x: 1, z: 0.5 },
              scale: 1.25,
              closed: !1,
              stroke: 1.5,
              color: m
            });
            _.copy({ translate: { x: 1.5, y: -3 }, rotate: { z: -1 } });
            var b = new G.a.Shape({
              addTo: v,
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
                    (d.translate.y = 2 * Math.sin(7 * e)),
                    (v.translate.y = 2 * Math.sin(8 * e) - 6);
                }
              }
            );
          }),
          (ZdogSpookyHouse.getConeTree = function(e) {
            G.a.extend(e, {
              rotate: { x: G.a.TAU / 4 },
              stroke: !1,
              color: ZdogSpookyHouse.color.deep
            });
            var t = new G.a.Cone(e);
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
            var t = G.a.TAU,
              a = ZdogSpookyHouse.color,
              n = new G.a.Anchor({ addTo: e.addTo, translate: e.translate });
            ZdogSpookyHouse.getPyramid({
              addTo: n,
              scale: { x: 9, y: -9, z: 9 },
              color: a.deep,
              snub: e.snub
            }),
              new G.a.Rect({
                width: 18,
                height: 18,
                addTo: n,
                rotate: { x: t / 4 },
                color: a.dark,
                stroke: 4,
                fill: !0
              });
            var r = new G.a.Rect({
              addTo: n,
              width: 4,
              height: 4,
              translate: { x: -4, y: -6 },
              rotate: { y: t / 4 },
              stroke: 3,
              color: a.medium
            });
            return (
              new G.a.Ellipse({
                addTo: r,
                diameter: 4,
                translate: { y: -2 },
                stroke: 3,
                color: a.medium
              }),
              n
            );
          }),
          (r = G.a.TAU),
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
            G.a.extend(e, {
              path: [{ y: 0 }, { y: t - 26 }],
              stroke: 0.5,
              color: o.deep
            });
            var a = new G.a.Shape(e),
              n = new G.a.Anchor({
                addTo: a,
                translate: { y: t - 14 },
                rotate: { y: -r / 8 }
              });
            return (
              new G.a.Shape({
                addTo: n,
                path: i,
                closed: !1,
                stroke: 0.6,
                color: o.deep
              }).copyGraph({ rotate: { y: r / 4 } }),
              a
            );
          }),
          (l = G.a.TAU),
          (e = Math.sqrt(2)),
          (s = [{ x: -1 }, { x: 1 }, { y: -e }]),
          (c = [
            { x: -1 },
            { x: 1 },
            { x: 0.5, y: -0.5 * e },
            { x: -0.5, y: -0.5 * e }
          ]),
          (ZdogSpookyHouse.getPyramid = function(e) {
            var t = new G.a.Anchor({
                addTo: e.addTo,
                translate: e.translate,
                scale: e.scale,
                rotate: e.rotate
              }),
              a = e.stroke || 4,
              n = new G.a.Anchor({ addTo: t });
            return (
              new G.a.Shape({
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
                new G.a.Rect({
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
          (u = ["color", "stroke", "fill", "width", "height", "backface"]),
          (ZdogSpookyHouse.getWallPanel = function(e) {
            var t;
            return (
              e.pane
                ? (t = (function(a) {
                    var e = new G.a.Group(a.wall),
                      t = u.reduce(function(e, t) {
                        return (e[t] = a.wall[t]), e;
                      }, {});
                    t.addTo = e;
                    var n = new G.a.Rect(t);
                    a.wallRectCallback && a.wallRectCallback(n);
                    return (
                      new G.a.Rect({
                        addTo: e,
                        width: 8,
                        height: 6,
                        translate: { y: -1 },
                        color: ZdogSpookyHouse.color.dark,
                        fill: !0,
                        stroke: !1,
                        backface: !1
                      }),
                      new G.a.Rect({
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
                : ((t = new G.a.Rect(e.wall)),
                  e.wallRectCallback && e.wallRectCallback(t)),
              t
            );
          }),
          (ZdogSpookyHouse.init = function(e) {
            var r = G.a.TAU,
              t = ZdogSpookyHouse.color,
              a = Math.floor(e.width / 135) / 2,
              o = new G.a.Illustration({
                element: e,
                zoom: a,
                rotate: { y: r / 8 },
                dragRotate: !0,
                onDragStart: function() {
                  ZdogSpookyHouse.wobbling = !1;
                }
              }),
              n = new G.a.Anchor({
                addTo: o,
                translate: { y: ZdogSpookyHouse.sceneY }
              }),
              i = new G.a.Anchor({ addTo: n });
            new G.a.Rect({
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
            var l = new G.a.Anchor({
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
            var s = new G.a.Group({
                addTo: n,
                translate: { x: 18, z: 80 },
                scale: ZdogSpookyHouse.hillScale,
                updateSort: !0
              }),
              c = new G.a.Anchor({ addTo: s, scale: { x: 24, y: 32, z: 24 } });
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
            var u = t.dark,
              d = t.deep,
              p = new G.a.Group({
                addTo: n,
                translate: { x: -52, z: -64 },
                scale: ZdogSpookyHouse.hillScale,
                updateSort: !0
              });
            ZdogSpookyHouse.getPyramid({
              addTo: p,
              scale: { x: 26, y: 60, z: 26 },
              color: u
            }),
              ZdogSpookyHouse.getPyramid({
                addTo: p,
                scale: { x: 14, y: 52, z: 14 },
                translate: { x: 12, y: -2, z: -12 },
                color: u
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: p,
                scale: { x: 26, y: -26, z: 26 },
                color: d
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: p,
                scale: { x: 10, y: -20, z: 10 },
                translate: { x: 12, y: 2, z: -12 },
                color: d
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
            var m = new G.a.Group({
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
            var v = new G.a.Group({
                addTo: n,
                translate: { x: -78, z: -36 },
                scale: ZdogSpookyHouse.hillScale,
                updateSort: !0
              }),
              h = t.dark,
              _ = t.deep;
            ZdogSpookyHouse.getPyramid({
              addTo: v,
              scale: { x: 26, y: 42, z: 26 },
              color: h
            }),
              ZdogSpookyHouse.getPyramid({
                addTo: v,
                scale: { x: 26, y: -40, z: 26 },
                color: _,
                snub: !0
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: v,
                scale: { x: 14, y: 29, z: 14 },
                translate: { x: 12, y: -2, z: -12 },
                color: h
              }),
              ZdogSpookyHouse.getPyramid({
                addTo: v,
                scale: { x: 16, y: 54, z: 16 },
                translate: { x: -4, y: -2, z: -4 },
                color: h
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: v,
                diameter: 8,
                length: 10,
                translate: { x: -16, y: -24, z: 6 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: v,
                diameter: 8,
                length: 10,
                translate: { x: -22, y: -14, z: -16 }
              }),
              ZdogSpookyHouse.getConeTree({
                addTo: v,
                diameter: 8,
                length: 8,
                translate: { x: -22, y: -10, z: 15 }
              });
            var b = new G.a.Anchor({
              addTo: v,
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
              f = new G.a.Anchor({ addTo: n, translate: { y: -94 } }),
              E = new G.a.Shape({
                addTo: f,
                translate: { z: -64 },
                stroke: 32,
                scale: 2,
                color: g
              });
            new G.a.Shape({
              addTo: E,
              translate: { x: -9, y: 4, z: 4 },
              stroke: 16,
              color: g
            }).copy({ translate: { x: 9, y: 5, z: 6 }, stroke: 20 });
            var y = new G.a.RoundedRect({
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
            y.copy({ translate: { x: 6, y: 9, z: 8 } });
            var S = new G.a.Anchor({ addTo: n, translate: { y: -60 } }),
              C = new G.a.Anchor({ addTo: S, translate: { z: 88 } });
            new G.a.Hemisphere({
              addTo: C,
              diameter: 36,
              rotate: { x: r / 4 },
              color: g,
              stroke: 6
            }),
              E.copy({ addTo: C, translate: { x: 16, y: -14, z: -4 } }),
              y.copy({
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
              j = 0,
              k = 300;
            !(function e() {
              var t,
                a,
                n = j / k;
              ZdogSpookyHouse.wobbling & (n <= 2) &&
                ((t = G.a.easeInOut(n % 1) * r),
                (a = (-3 * r) / 64),
                (o.rotate.y = Math.sin(t) * a + r / 8),
                (o.rotate.x = (-0.5 * Math.cos(t) + 0.5) * a)),
                o.normalizeRotate(),
                T.animate(n),
                I.animate(n),
                O.animate(n, o.rotate),
                w.animate(n),
                (f.rotate.y = (n * r) / 12),
                (S.rotate.y = (n * r) / 16),
                (i.translate.y = 4 * Math.sin((n / 4) * r)),
                (m.translate.y = -4 * Math.sin((n / 1.5) * r)),
                (v.translate.y = -4 * Math.sin((n / 2.5) * r)),
                (p.translate.y = 4 * Math.sin((n / 3) * r)),
                (s.translate.y = 4 * Math.sin((n / 2) * r)),
                j++,
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
        CuratorInfoFollow: "curatorfeedbrowse_CuratorInfoFollow_1I_eQ",
        CuratorHoverContainer: "curatorfeedbrowse_CuratorHoverContainer_38fVP",
        CuratorHoverToolTip: "curatorfeedbrowse_CuratorHoverToolTip_rSTyU"
      };
    },
    "2rGr": function(e, t, a) {
      e.exports = {
        LanguageFeedCtn: "languagefeedrow_LanguageFeedCtn_3o5ly",
        BodyFlow: "languagefeedrow_BodyFlow_1JI7C",
        LeftColumn: "languagefeedrow_LeftColumn_3l03T",
        RightColumn: "languagefeedrow_RightColumn_XKuYh",
        Title: "languagefeedrow_Title_Tzlhg",
        LanguageList: "languagefeedrow_LanguageList_1VBz-",
        Text: "languagefeedrow_Text_1SGbC",
        DismissButton: "languagefeedrow_DismissButton_3zHKD"
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
        LargeHeader: "eventcalendarcollectionheaders_LargeHeader_1Y7af",
        AppBannerLogoCtn:
          "eventcalendarcollectionheaders_AppBannerLogoCtn_1Vrsg",
        AppBannerLogo: "eventcalendarcollectionheaders_AppBannerLogo_QDuRw"
      };
    },
    "90oc": function(e, t, a) {
      e.exports = {
        EventTileCarousel: "eventtilecarousel_EventTileCarousel_1mKD0",
        HorizontalTiles: "eventtilecarousel_HorizontalTiles_1mUGB",
        EventTileCarouselTitleContainer:
          "eventtilecarousel_EventTileCarouselTitleContainer_3I_aG",
        EventTileCarouselTextTitle:
          "eventtilecarousel_EventTileCarouselTextTitle_1kQ9N",
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
        Button: "eventmoderation_Button_wu9Kr",
        RightSideTitles: "eventmoderation_RightSideTitles_XDAwD",
        DateAndTime: "eventmoderation_DateAndTime_2cW9N",
        StoreHeaderAdjust: "eventmoderation_StoreHeaderAdjust_3U7ja"
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
    FhLd: function(e, t, a) {
      e.exports = {
        FacetedBrowseCtn: "facetedbrowse_FacetedBrowseCtn_1Drr-",
        FacetedBrowseControls: "facetedbrowse_FacetedBrowseControls_1JM3A",
        FacetValue: "facetedbrowse_FacetValue_12piy",
        FacetValueEnabled: "facetedbrowse_FacetValueEnabled_TZdsh",
        FacetValueName: "facetedbrowse_FacetValueName_2uSEn",
        FacetValueDescription: "facetedbrowse_FacetValueDescription_1inQ1",
        FacetedBrowseItems: "facetedbrowse_FacetedBrowseItems_3EdZT"
      };
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
        strLogInBannerLargeHeight: "239px",
        strLogInBannerSmallHeight: "70px",
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
        FilterSubOption: "eventcalendar_FilterSubOption_2ctVa",
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
        LogInFeedRow: "eventcalendar_LogInFeedRow_nydHE",
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
        NewsChannelIcon: "eventcalendar_NewsChannelIcon_2NCtv",
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
        CalendarEventList: "eventcalendar_CalendarEventList_3Pm1a",
        LogInSmallMode: "eventcalendar_LogInSmallMode_21ANY",
        LogInFeedText: "eventcalendar_LogInFeedText_3HgPB",
        PromptCtn: "eventcalendar_PromptCtn_19gyw",
        LogInFeedTitle: "eventcalendar_LogInFeedTitle_cmQc6",
        LogInButton: "eventcalendar_LogInButton_35WTO",
        LazyCalendarSectionCtn: "eventcalendar_LazyCalendarSectionCtn_1_BP6"
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
    WGPV: function(e, t, a) {
      e.exports = {
        SectionContainer: "rss_moderation_SectionContainer_3P-ff",
        ModSectionTitle: "rss_moderation_ModSectionTitle_2lc8m",
        ResizeButton: "rss_moderation_ResizeButton_29RNN",
        TileContainer: "rss_moderation_TileContainer_2D4XH",
        CreatorCtn: "rss_moderation_CreatorCtn_GKust",
        TileSpread: "rss_moderation_TileSpread_1s_El"
      };
    },
    Wym2: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "EventModerationLanding", function() {
          return wo;
        }),
        a.d(t, "EventBackfillLanding", function() {
          return To;
        }),
        a.d(t, "EventSaleDisplay", function() {
          return Io;
        }),
        a.d(t, "EventCalendar", function() {
          return jo;
        }),
        a.d(t, "EventDetailView", function() {
          return ko;
        }),
        a.d(t, "Events", function() {
          return Do;
        }),
        a.d(t, "EventSteamGameFestivalDebug", function() {
          return Go;
        }),
        a.d(t, "RssEnabledAccountDashboard", function() {
          return Lo;
        });
      var H = a("q1tI"),
        g = a.n(H),
        z = a("mrSG"),
        n = a("vDqi"),
        T = a.n(n),
        m = a("2vnA"),
        r = a("TyAF"),
        o = a("Gp1o"),
        i = a("Ty5D"),
        A = a("mgoM"),
        v = a("kyHq"),
        u = a("5bld"),
        f = a("kLLr"),
        _ = a("ir+G"),
        N = a("U+Q5"),
        E = a("TQGK"),
        O = a("WF3T"),
        d = a("KEpR"),
        w = a("TAM5"),
        B = a("5izx"),
        U = a("9w6b"),
        p = a("Dhs6"),
        M = a("6oCP"),
        y = a("IjL/"),
        c = a("55Ip"),
        b = a("Mgs7"),
        h = a("fpVW"),
        V = a.n(h),
        R = a("6Y59"),
        I = a("5E+2"),
        S = a("+d9t"),
        C = a("r64O"),
        W = a("exH9"),
        q = a("X3Ds"),
        Z = a("TLQK"),
        s = a("bxiW"),
        Y = a("lkRc"),
        j = a("ka0M"),
        x = a("ee7K"),
        k = (function() {
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r = this;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        Z.b
                          .GetLanguageListForRealms([v.e.k_ESteamRealmGlobal])
                          .forEach(function(e) {
                            return r.m_mapLangToNewsCurators.set(e, []);
                          }),
                        (t = Y.c.STORE_BASE_URL + "events/ajaxgetnewscurators"),
                        (a = { origin: self.origin }),
                        [4, T.a.get(t, { params: a })]
                      );
                    case 1:
                      return (
                        (n = e.sent()),
                        Object(m.G)(function() {
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
            Object(z.c)([m.C], e.prototype, "m_mapNewsCurators", void 0),
            Object(z.c)([m.C], e.prototype, "m_bIsLoadComplete", void 0),
            Object(z.c)([m.C], e.prototype, "m_mapLangToNewsCurators", void 0),
            Object(z.c)([m.n], e.prototype, "allNewsCurators", null),
            Object(z.c)([m.k], e.prototype, "HandleCuratorResponse", null),
            e
          );
        })(),
        l = a("qiKp"),
        D = a("bS9Q"),
        G = a("I2Hi"),
        L = a.n(G);
      function F(e) {
        var t = new Set();
        return (
          (0 <= e.indexOf("games") || 0 <= e.indexOf("dlc")) && t.add("apps"),
          0 <= e.indexOf("curators") && t.add("curators"),
          t
        );
      }
      function P(e) {
        return g.a.createElement(
          X.g,
          { onEscKeypress: e.closeModal },
          g.a.createElement(
            y.a,
            null,
            g.a.createElement(
              b.f,
              null,
              g.a.createElement(
                b.j,
                null,
                Object(Z.f)("#EventCurator_BrowseDialog_Title")
              ),
              g.a.createElement(
                b.b,
                null,
                g.a.createElement(
                  "div",
                  null,
                  Object(Z.f)("#EventCurator_BrowseDialog_Desc")
                ),
                g.a.createElement(de, null)
              ),
              g.a.createElement(
                b.i,
                null,
                g.a.createElement(
                  b.p,
                  { onClick: e.closeModal },
                  Object(Z.f)("#Button_Dismiss")
                )
              )
            )
          )
        );
      }
      function Q(e) {
        return g.a.createElement(
          Be,
          {
            title: Object(Z.f)("#EventCurator_BrowseDialog_Title"),
            description: Object(Z.f)("#EventCurator_BrowseDialog_Desc")
          },
          g.a.createElement(de, null)
        );
      }
      var J = (function(t) {
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
              (e.m_timerForChange = new l.b()),
              e
            );
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_timerForChange.Cancel();
            }),
            (e.prototype.GetSuggestionsFromServer = function(a) {
              return Object(z.b)(this, void 0, void 0, function() {
                var t;
                return Object(z.e)(this, function(e) {
                  return (
                    (t = F(this.props.rgCorporaToSearch)).has("apps") &&
                      this.GetAppSuggestionsFromServer(a),
                    t.has("curators") && this.GetCuratorSuggestions(a),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.GetCuratorSuggestions = function(u) {
              var d;
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c;
                return Object(z.e)(this, function(e) {
                  for (
                    t = k.Get().allNewsCurators, a = [], n = 0, r = t;
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
                          (null === (d = null == i ? void 0 : i.group_name) ||
                          void 0 === d
                            ? void 0
                            : d.toLocaleLowerCase()) || ""
                        ).indexOf(u))
                    ) {
                      if (
                        this.props.fnFilterSuggestion &&
                        !this.props.fnFilterSuggestion(l)
                      )
                        continue;
                      if (x.a.BIsIgnoringCurator(i.clanAccountID)) continue;
                      (s = x.a.BIsFollowingCurator(i.clanAccountID)),
                        (c = H.createElement(K, {
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o,
                  i,
                  l = this;
                return Object(z.e)(this, function(e) {
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
                          cc: Y.c.COUNTRY,
                          l: Y.c.LANGUAGE,
                          realm: v.e.k_ESteamRealmGlobal,
                          origin: self.origin,
                          f: "jsonfull",
                          term: s.replace(" ", "+"),
                          require_type: a.join(","),
                          excluded_tags: x.a.GetExcludedTagsSortedByID(),
                          excluded_content_descriptors: x.a.GetExcludedContentDescriptor()
                        }),
                        (r = Y.c.STORE_BASE_URL + "search/suggest"),
                        [4, T.a.get(r, { params: n, withCredentials: !0 })]
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
                                a = Object(z.a)(
                                  Object(z.a)(
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
                              var n = H.createElement(K, {
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t,
                  a = this;
                return Object(z.e)(this, function(e) {
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
                      : (Array.from(F(this.props.rgCorporaToSearch)).forEach(
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
                u = 0 < (null == i ? void 0 : i.length),
                d = 0 < (null == s ? void 0 : s.length),
                p = 0 < (null == c ? void 0 : c.length),
                m = 1 < F(r).size,
                v =
                  m &&
                  d &&
                  Object(Z.f)(
                    0 <= r.indexOf("dlc")
                      ? "#EventCalendar_SearchResultsHeader_GameAndDLCSection"
                      : "#EventCalendar_SearchResultsHeader_GameSection"
                  ),
                h = Array.from(F(r)).some(function(e) {
                  return (
                    t.m_nHighestSentRequestID >
                    t.m_mapHighestReceivedRequestIDFromBackEnd.get(e)
                  );
                }),
                _ = !p && !d && !h;
              return H.createElement(
                "div",
                { className: L.a.SuggestContainer },
                H.createElement(b.k, {
                  type: "text",
                  label: a,
                  onChange: this.UpdateSuggestions,
                  bAlwaysShowClearAction: u,
                  focusOnMount: n
                }),
                u &&
                  H.createElement(
                    "div",
                    { className: Object(W.a)(L.a.Results, o) },
                    d &&
                      H.createElement(
                        "div",
                        { key: "game-suggestions" },
                        m &&
                          H.createElement(
                            "div",
                            { className: L.a.ResultSectionHeader },
                            v
                          ),
                        s
                      ),
                    p &&
                      H.createElement(
                        "div",
                        { key: "curator-suggestions" },
                        m &&
                          H.createElement(
                            "div",
                            { className: L.a.ResultSectionHeader },
                            Object(Z.f)(
                              "#EventCalendar_SearchResultsHeader_CuratorSection"
                            )
                          ),
                        c
                      ),
                    _ &&
                      H.createElement(
                        "div",
                        { className: L.a.EmptyResults, key: "empty-results" },
                        Object(Z.f)("#EventCalendar_GameSearch_NoneFound")
                      )
                  )
              );
            }),
            Object(z.c)([s.a], e.prototype, "UpdateSuggestions", null),
            e
          );
        })(H.Component),
        K = function(e) {
          return H.createElement(
            "div",
            {
              className: L.a.ResultRow,
              key: "suggestion-" + e.suggestion.id,
              onClick: function() {
                return e.fnOnSelected(e.suggestion);
              }
            },
            H.createElement("img", {
              src: e.suggestion.img,
              className: L.a.AvatarImage
            }),
            H.createElement(
              "div",
              { className: L.a.GameName },
              " ",
              Object(D.b)(e.suggestion.name),
              " "
            ),
            e.bShowFollowingLabel &&
              H.createElement(
                "div",
                { className: L.a.Label },
                Object(Z.f)("#EventCalendar_FollowingCurator")
              )
          );
        },
        X = a("Jqb/"),
        $ = a("0OaU"),
        ee = a("BRUS"),
        te = a("+g3F"),
        ae = a.n(te),
        ne = a("qD+2"),
        re = a("UWWC"),
        oe = a("yJqL"),
        ie = a("JJA/"),
        le = a("xnZ7"),
        se = a.n(le),
        ce = a("bDQf"),
        ue = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoading: !1, eventModel: e.props.eventModel }),
              (e.m_refParent = H.createRef()),
              (e.m_cancelSignal = T.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.state.eventModel ||
                this.setState({ bLoading: !0 }, this.LoadEvent);
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.add(ie.BodyNoScroll);
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.remove(ie.BodyNoScroll);
            }),
            (e.prototype.GetBodyElement = function() {
              return this.m_refParent.current
                ? this.m_refParent.current.closest("body")
                : null;
            }),
            (e.prototype.LoadEvent = function() {
              return Object(z.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o = this;
                return Object(z.e)(this, function(e) {
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
                        var t = Object(ce.a)(e);
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(z.e)(this, function(e) {
                  return (
                    (t = this.state.eventModel),
                    (a = this.props.trackingLocation),
                    t &&
                      t.BIsPartnerEvent() &&
                      U.a
                        .Get()
                        .GetTracker()
                        .MarkEventRead(
                          t.GID,
                          t.clanSteamID.GetAccountID(),
                          a
                        ) &&
                      U.a
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
                return H.createElement(
                  X.h,
                  null,
                  H.createElement(
                    "div",
                    { className: se.a.FlexCenter, style: { height: "400px" } },
                    H.createElement($.a, null)
                  )
                );
              var e = this.props,
                t = e.classname,
                a = e.partnerEventStore,
                n = e.bPrimaryPageFeature;
              if (this.state.eventModel) {
                var r = H.createElement(
                  "div",
                  null,
                  H.createElement(oe.a, {
                    initialEvent: this.state.eventModel,
                    partnerEventStore: a,
                    emoticonStore: re.b,
                    appInfoStore: ne.a,
                    closeModal: !n && this.props.closeModal,
                    showAppHeader: this.props.showAppHeader
                  })
                );
                return n ? r : H.createElement(X.h, { className: t }, r);
              }
              return null;
            }),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component),
        de = function(e) {
          var t = g.a.useState(k.Get().IsLoaded()),
            a = t[0],
            n = t[1];
          g.a.useEffect(
            function() {
              a ||
                Object(z.b)(void 0, void 0, void 0, function() {
                  return Object(z.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return [4, k.Get().WaitForInitialLoad()];
                      case 1:
                        return e.sent(), n(!0), [2];
                    }
                  });
                });
            },
            [a]
          );
          var r = new Array();
          return (
            a &&
              Z.e
                .GetELanguageFallbackOrder([v.e.k_ESteamRealmGlobal])
                .forEach(function(e) {
                  return r.push(
                    g.a.createElement(pe, { key: "curlang" + e, lang: e })
                  );
                }),
            g.a.createElement(
              g.a.Fragment,
              null,
              a
                ? g.a.createElement(g.a.Fragment, null, r)
                : g.a.createElement($.a, {
                    size: "medium",
                    position: "center",
                    string: Object(Z.f)("#Loading")
                  })
            )
          );
        },
        pe = function(e) {
          var t = k
            .Get()
            .GetCuratorsForLang(e.lang)
            .map(function(e) {
              return E.a.GetClanInfoByClanAccountID(e.clanAccountID);
            })
            .filter(function(e) {
              return Boolean(e);
            });
          if (0 == t.length) return null;
          t.sort(function(e, t) {
            return e.group_name.localeCompare(t.group_name);
          });
          var a = t.map(function(e) {
            return g.a.createElement(ve, {
              clanInfo: e,
              key: "curatorbrowse_" + e.clanAccountID,
              layout: "row"
            });
          });
          return g.a.createElement(
            "div",
            null,
            g.a.createElement(
              "div",
              { className: ae.a.LanguageHeader },
              Object(Z.f)(
                "#EventCurator_BrowseDialog_LangCurator",
                Object(Z.f)("#Language_" + Object(A.d)(e.lang))
              )
            ),
            a
          );
        },
        me = Object(r.a)(function(e) {
          var t = E.a.GetClanInfoByClanAccountID(e.clanid);
          if (!t) return g.a.createElement("div", null, e.children);
          var a = {
              clan_account_id: t.clanAccountID,
              name: t.group_name,
              type: "developer"
            },
            n = g.a.createElement(
              "div",
              { className: ae.a.CuratorHoverContainer },
              g.a.createElement(ee.a, {
                creatorID: a,
                bSmallFormat: !0,
                bHideCreatorType: !0,
                bHideFollowButton: !0
              })
            );
          return g.a.createElement(
            I.a,
            {
              toolTipContent: n,
              strTooltipClassname: ae.a.CuratorHoverToolTip
            },
            e.children
          );
        }),
        ve = function(e) {
          function t() {
            Object(j.d)(
              g.a.createElement(X.e, {
                strDescription: Object(Z.f)("#EventCurator_NoEventsFound_Body"),
                strTitle: Object(Z.f)("#EventCurator_NoEventsFound_Title")
              }),
              window
            ),
              r(!1);
          }
          var a = g.a.useState(!1),
            n = a[0],
            r = a[1],
            o = e.clanInfo,
            i = e.layout,
            l = (Y.c.STORE_BASE_URL,
            o.clanAccountID,
            o.vanity_url && o.vanity_url,
            "row" === i ? ae.a.CuratorInfoRow : ae.a.CuratorInfoIcon),
            s = g.a.createElement(
              me,
              { clanid: o.clanSteamID.GetAccountID() },
              g.a.createElement(
                "div",
                {
                  className: Object(W.a)(
                    V.a.FlexRowContainer,
                    ae.a.CuratorInfoTitleCtn
                  )
                },
                g.a.createElement("img", {
                  className: ae.a.CuratorInfoImg,
                  src: o.avatar_full_url,
                  alt: o.group_name
                }),
                g.a.createElement(
                  "div",
                  { className: ae.a.CuratorInfoName },
                  o.group_name
                )
              )
            );
          return g.a.createElement(
            "div",
            { className: Object(W.a)(V.a.FlexRowWrapSpaceBetweenContainer, l) },
            n
              ? g.a.createElement(
                  y.a,
                  null,
                  g.a.createElement(ue, {
                    onEventNotFound: t,
                    appid: 0,
                    clanSteamID: e.clanInfo.clanSteamID,
                    trackingLocation: 8,
                    eventModel: void 0,
                    announcementGID: void 0,
                    partnerEventStore: M.c,
                    showAppHeader: !0,
                    closeModal: function() {
                      return r(!1);
                    }
                  })
                )
              : null,
            g.a.createElement(
              "div",
              {
                onClick: function() {
                  return r(!0);
                }
              },
              s
            ),
            g.a.createElement(
              "div",
              {
                className: Object(W.a)(
                  V.a.FlexRowContainer,
                  ae.a.CuratorInfoActionCtn
                )
              },
              g.a.createElement(ee.c, {
                clanAccountID: o.clanAccountID,
                className: ae.a.CuratorInfoFollow
              }),
              g.a.createElement(
                "div",
                {
                  className: Object(W.a)(V.a.Button, ae.a.CuratorInfoPreview),
                  onClick: function() {
                    return r(!0);
                  }
                },
                Object(Z.f)("#Button_Preview")
              )
            )
          );
        },
        he = a("IWyE"),
        _e = a.n(he),
        be = a("wd/R"),
        ge = a.n(be),
        fe = (function() {
          function e() {
            this.m_dateLoadTime = B.a.GetTimeNowWithOverrideAsDate();
          }
          return (
            (e.prototype.IsCurrentlyVisible = function(e) {
              return (
                (!e.startVisible || e.startVisible <= this.m_dateLoadTime) &&
                (!e.endVisible || e.endVisible >= this.m_dateLoadTime)
              );
            }),
            (e.IsCurrentlyActive = function(e) {
              var t = B.a.GetTimeNowWithOverrideAsDate();
              return (
                (!e.startEvent || e.startEvent <= t) &&
                (!e.endEvent || e.endEvent >= t)
              );
            }),
            (e.LocalizeDateString = function(e) {
              if (!e.startEvent) return null;
              var t = e.startEvent.toLocaleDateString(
                Z.e.GetPreferredLocales(),
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
                e.endEvent.toLocaleDateString(Z.e.GetPreferredLocales(), a)
              );
            }),
            (e.prototype.GetVisibleSpecialEvents = function() {
              var t = this;
              return [
                {
                  sLocToken: "#NewsHubSpecialEvent_GameFestival",
                  startVisible: new Date(
                    1e3 * ge()("2020-06-16T14:00:00-07:00").unix()
                  ),
                  endVisible: new Date(
                    1e3 * ge()("2020-06-22T10:00:00-07:00").unix()
                  ),
                  startEvent: new Date(
                    1e3 * ge()("2020-06-16T10:00:00-07:00").unix()
                  ),
                  endEvent: new Date(
                    1e3 * ge()("2020-06-22T10:00:00-07:00").unix()
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
        Ee = new fe(),
        ye = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.specialEvent,
                t = window.location.href === Y.c.STORE_BASE_URL + e.newshubUrl,
                a = fe.IsCurrentlyActive(e),
                n = fe.LocalizeDateString(e);
              return H.createElement(
                c.b,
                { to: "/" + e.newshubUrl },
                H.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      _e.a.SpecialEvent,
                      t && _e.a.SpecialEventOnPage,
                      a && _e.a.SpecialEventActive
                    )
                  },
                  H.createElement(
                    "div",
                    { className: _e.a.SpecialEventTitle },
                    Object(Z.f)(e.sLocToken)
                  ),
                  n &&
                    H.createElement(
                      "div",
                      { className: _e.a.SpecialEventTime },
                      n
                    )
                )
              );
            }),
            t
          );
        })(H.Component),
        Se = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.render = function() {
              var e = Ee.GetVisibleSpecialEvents();
              return 0 === e.length
                ? null
                : H.createElement(
                    "div",
                    { className: _e.a.SpecialEventListGroup },
                    H.createElement(
                      "div",
                      { className: _e.a.SpecialEventListTitle },
                      Object(Z.f)("#Events_SpecialEvents")
                    ),
                    H.createElement(
                      "div",
                      { className: _e.a.SpecialEventList },
                      e.map(function(e) {
                        return H.createElement(ye, {
                          key: e.sLocToken,
                          specialEvent: e
                        });
                      })
                    )
                  );
            }),
            t
          );
        })(H.Component),
        Ce = a("mB/g"),
        Oe = a("s4NR"),
        we = a.n(Oe);
      function Te(e, t) {
        var a = "location" in e ? e.location : e,
          n = "search" in a ? a.search : a,
          r = we.a.parse(n.substring(1))[t];
        return r && Array.isArray(r) ? r[r.length - 1] : r;
      }
      var Ie = function(e) {
        return null != e;
      };
      function je(e, t, a) {
        var n = we.a.parse(e.location.search.substring(1));
        Ie(a) ? (n[t] = a) : delete n[t], e.push("?" + we.a.stringify(n));
      }
      function ke(e, t) {
        var a,
          n = we.a.parse(e.location.search.substring(1));
        for (var r in t) {
          t.hasOwnProperty(r) &&
            (null == (a = t[r]) ? delete n[r] : (n[r] = a));
        }
        e.push("?" + we.a.stringify(n));
      }
      var De = a("xLK1"),
        Ge = a.n(De),
        Le = (function(t) {
          function i() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bInScroll: !1, nStartXPos: 0, nStartScrollLeft: 0 }),
              (e.m_hSlider = H.createRef()),
              e
            );
          }
          return (
            Object(z.d)(i, t),
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
                    Ge.a.HorizontalScrollInDragForceCursor
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
                    Ge.a.HorizontalScrollInDragForceCursor
                  ),
                  this.props.dragClassName &&
                    o.classList.add(this.props.dragClassName),
                  o.setPointerCapture(e.pointerId)),
                this.state.bInScroll && (o.scrollLeft = a));
            }),
            (i.prototype.render = function() {
              return H.createElement(
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
            Object(z.c)([s.a], i.prototype, "OnPointerDown", null),
            Object(z.c)([s.a], i.prototype, "OnPointerUp", null),
            Object(z.c)([s.a], i.prototype, "OnPointerMove", null),
            i
          );
        })(H.Component),
        Ae = (function() {
          function t() {
            (this.m_curDisplay = "desktop_navigation"),
              (this.m_fnGetRouterHistory = void 0);
          }
          return (
            (t.Get = function() {
              return (
                t.s_GlobalStore || (t.s_GlobalStore = new t()), t.s_GlobalStore
              );
            }),
            (t.prototype.UpdateLocation = function(e, t) {
              this.m_fnGetRouterHistory = e;
              var a = Te(t, "optionpane");
              if (a)
                switch (a) {
                  case "event_filter":
                  case "browse_curator":
                  case "desktop_navigation":
                    this.m_curDisplay != a && (this.m_curDisplay = a);
                }
              else
                "desktop_navigation" != this.m_curDisplay &&
                  (this.m_curDisplay = "desktop_navigation");
              return this.m_curDisplay;
            }),
            (t.prototype.SetDisplay = function(e) {
              (this.m_curDisplay = e),
                this.m_fnGetRouterHistory &&
                  je(
                    this.m_fnGetRouterHistory(),
                    "optionpane",
                    "desktop_navigation" == this.m_curDisplay
                      ? void 0
                      : this.m_curDisplay
                  );
            }),
            (t.prototype.GetDisplay = function() {
              return this.m_curDisplay;
            }),
            (t.prototype.ShowBrowseCurator = function(e) {
              sa()
                ? t.Get().SetDisplay("browse_curator")
                : Object(j.d)(H.createElement(P, null), Object(q.m)(e));
            }),
            Object(z.c)([m.C], t.prototype, "m_curDisplay", void 0),
            t
          );
        })(),
        Ne = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.GetVisibilityStore = function() {
              return Object(O.b)().m_visibilityStore;
            }),
            (t.prototype.OnEventTypeChange = function(e, t) {
              this.GetVisibilityStore().SetEventTypeGroupAllowed(e, t),
                this.props.fnOnFilterChange();
            }),
            (t.prototype.RenderEventTypeCheckbox = function(t) {
              var a = this,
                e = this.GetVisibilityStore().BIsEventTypeGroupAllowed(t);
              return H.createElement(
                I.a,
                {
                  key: "group-" + t,
                  toolTipContent: Object(Z.f)(
                    "#EventCalendar_EventTypeGroup_ttip_" + t
                  ),
                  direction: "top"
                },
                H.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      _e.a.FilterOption,
                      _e.a.FilterEventType
                    )
                  },
                  H.createElement(b.e, {
                    label: Object(Z.f)("#EventCalendar_EventTypeGroup_" + t),
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
                n =
                  this.GetVisibilityStore().BIsGameSourceAllowed(t) ||
                  (t == d.c.k_ELibrary &&
                    this.GetVisibilityStore().BIsGameSourceAllowed(
                      d.c.k_ERecent
                    ));
              return H.createElement(
                I.a,
                {
                  key: "gs-" + t,
                  direction: "top",
                  toolTipContent: e
                    ? Object(Z.f)("#EventCalendar_DisabledFilter_LoginPrompt")
                    : Object(Z.f)("#EventCalendar_GameSource_ttip_" + t)
                },
                H.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      _e.a.FilterOption,
                      _e.a.FilterGameSource
                    )
                  },
                  H.createElement(b.e, {
                    label: Object(Z.f)("#EventCalendar_GameSource_" + t),
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
                a = Y.c.EREALM === v.e.k_ESteamRealmChina,
                n = Object(O.b)(),
                r = !0;
              n.BIsSingleGroupCalendar()
                ? (e = E.a.GetClanInfoByClanAccountID(n.GetSingleGroupID())) &&
                  e.has_rss_feed &&
                  (r = !1)
                : !n.BIsCollectionCalendar() ||
                  (n.GetKey().collectionid != w.a.Press &&
                    n.GetKey().collectionid != w.a.Dev_Sales &&
                    n.GetKey().collectionid != w.a.Dev_AssociatedPress) ||
                  (r = !1);
              var o = p.a.Get().GetMutedSourceCount(),
                i =
                  n.BIsSingleSourceMuted() ||
                  (!n.BIsSingleSourceCalendar() && 0 < o);
              return H.createElement(
                Be,
                {
                  title: Object(Z.f)("#EventCalendar_FiltersTitle"),
                  description: Object(Z.f)(
                    n.BIsGlobalCalendar()
                      ? "#EventCalendar_FiltersDescription"
                      : "#EventCalendar_FiltersDescription_NonPersonalized"
                  )
                },
                H.createElement(
                  "div",
                  { className: _e.a.FilterSection },
                  r &&
                    H.createElement(
                      "div",
                      { className: _e.a.FilterSubSection },
                      H.createElement(
                        "div",
                        { className: _e.a.FilterSubSectionTitle },
                        Object(Z.f)(
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
                  Boolean(n.BIsGlobalCalendar()) &&
                    H.createElement(
                      "div",
                      { className: _e.a.FilterSubSection },
                      H.createElement(
                        "div",
                        { className: _e.a.FilterSubSectionTitle },
                        Object(Z.f)(
                          "#EventCalendar_FilterSubSection_GameSources"
                        )
                      ),
                      this.RenderGameSourceCheckbox(d.c.k_ELibrary, !t),
                      H.createElement(
                        "div",
                        { className: _e.a.FilterSubOption },
                        this.RenderGameSourceCheckbox(d.c.k_ERecent, !t)
                      ),
                      this.RenderGameSourceCheckbox(d.c.k_EWishlist, !t),
                      this.RenderGameSourceCheckbox(d.c.k_EFollowing, !t),
                      this.RenderGameSourceCheckbox(d.c.k_ERecommended, !t),
                      this.RenderGameSourceCheckbox(d.c.k_ESteam),
                      B.a.bIncludeFeaturedAsGameSource &&
                        this.RenderGameSourceCheckbox(d.c.k_EFeatured)
                    ),
                  Boolean(
                    !a && (n.BIsGlobalCalendar() || n.BIsSingleAppCalendar())
                  ) &&
                    H.createElement(
                      "div",
                      { className: _e.a.FilterSubSection },
                      H.createElement(
                        "div",
                        { className: _e.a.FilterSubSectionTitle },
                        Object(Z.f)(
                          "#EventCalendar_FilterSubSection_CuratorSources"
                        )
                      ),
                      this.RenderGameSourceCheckbox(d.c.k_ECurator, !t),
                      H.createElement(
                        "div",
                        {
                          className: _e.a.FilterLink,
                          onClick: Ae.Get().ShowBrowseCurator
                        },
                        Object(Z.f)("#EventCalendar_BrowseCurators")
                      )
                    ),
                  Boolean(n.BIsSingleSourceMuted()) &&
                    H.createElement(
                      "div",
                      null,
                      Object(Z.f)(
                        n.BIsSingleGroupCalendar()
                          ? "#EventCalendar_SingleGroupIsMuted"
                          : "#EventCalendar_SingleAppIsMuted"
                      )
                    )
                ),
                H.createElement(
                  "div",
                  { className: _e.a.SideBarFilterNavLinks },
                  i &&
                    H.createElement(
                      S.a,
                      {
                        className: _e.a.MutedSourcesGroup,
                        href: Y.c.STORE_BASE_URL + "account/emailoptout/app",
                        bDisableContextMenu: !0
                      },
                      H.createElement(
                        "div",
                        { className: _e.a.FilterLink },
                        H.createElement(R.gb, { muted: !0 }),
                        Object(Z.f)("#EventCalendar_ManageMutedSources"),
                        H.createElement(
                          "div",
                          { className: _e.a.NumberDisplay },
                          o
                        )
                      )
                    ),
                  H.createElement(
                    S.a,
                    {
                      href: Y.c.STORE_BASE_URL + "account/preferences",
                      bDisableContextMenu: !0
                    },
                    H.createElement(
                      "div",
                      { className: _e.a.FilterLink },
                      H.createElement(R.a, null),
                      Object(Z.f)("#EventCalendar_ManageStorePref")
                    )
                  )
                ),
                B.a.bInSteamLabs &&
                  H.createElement(
                    "div",
                    {
                      className: Object(W.a)(
                        _e.a.SidePanelSteamLabs,
                        _e.a.ConfigPanelSteamLabs
                      )
                    },
                    H.createElement(ze, null)
                  )
              );
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        Be = function(e) {
          return H.createElement(
            "div",
            { className: _e.a.FilterControlPage },
            H.createElement("div", { className: _e.a.FiltersTitle }, e.title),
            Boolean(e.description) &&
              H.createElement(
                "div",
                { className: _e.a.FiltersDescription },
                e.description
              ),
            e.children
          );
        },
        Me = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.OpenFilterSettings = function(e) {
              Ae.Get().SetDisplay(e ? "event_filter" : "desktop_navigation");
            }),
            (t.prototype.render = function() {
              var e,
                t = this,
                a = this.props,
                n = a.bUserIsLoggedIn,
                r = a.nDisappearingHeaderVisibleHeight,
                o = a.bIsCollapsed,
                i = a.fnToggleCollapsed,
                l = a.fnOnFilterChange,
                s = sa(),
                c = H.createElement(
                  "div",
                  {
                    className: _e.a.MobileCloseButton,
                    onClick: function() {
                      t.OpenFilterSettings(!1), i();
                    }
                  },
                  H.createElement(R.V, null)
                ),
                u = o ? Math.max(0, r) : 0,
                d = s
                  ? null
                  : H.createElement(
                      "div",
                      { onClick: i, className: _e.a.CollapseButton },
                      H.createElement(
                        "div",
                        {
                          style: { marginTop: u + "px" },
                          className: _e.a.DesktopButton
                        },
                        H.createElement(R.u, { angle: o ? 180 : 0 })
                      )
                    ),
                p = s
                  ? null
                  : H.createElement(
                      "div",
                      {
                        onClick: function() {
                          return t.OpenFilterSettings(!1);
                        },
                        className: _e.a.CollapseButton
                      },
                      H.createElement(
                        "div",
                        {
                          style: { marginTop: u + "px" },
                          className: _e.a.DesktopButton
                        },
                        H.createElement(R.V, null)
                      )
                    ),
                m = "desktop_navigation" != Ae.Get().GetDisplay() ? p : d,
                v = o ? null : { top: r + "px" };
              Object(O.b)();
              switch (Ae.Get().GetDisplay()) {
                case "event_filter":
                  e = H.createElement(Ne, {
                    bUserIsLoggedIn: n,
                    fnOnFilterChange: l
                  });
                  break;
                case "browse_curator":
                  e = H.createElement(Q, null);
                  break;
                case "desktop_navigation":
                  e = H.createElement(
                    Re,
                    Object(z.a)({}, this.props, {
                      fnOpenFilterSettings: this.OpenFilterSettings
                    })
                  );
              }
              return H.createElement(
                H.Fragment,
                null,
                H.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      _e.a.SidebarContainer,
                      o && _e.a.SidebarCollapsed
                    ),
                    style: v
                  },
                  o
                    ? m
                    : H.createElement(
                        "div",
                        { className: _e.a.Sidebar },
                        c,
                        m,
                        H.createElement(
                          "div",
                          { className: _e.a.ControlPageContainer },
                          e
                        )
                      )
                )
              );
            }),
            Object(z.c)([s.a], t.prototype, "OpenFilterSettings", null),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        Re = Object(r.a)(function(e) {
          var t = e.bShouldIncludeLegalFooter,
            a = e.bShowUpcoming,
            n =
              "Responsive_RequestMobileView" in window &&
              window.Responsive_RequestMobileView;
          return H.createElement(
            H.Fragment,
            null,
            H.createElement(
              "div",
              { className: _e.a.SidebarBackground },
              H.createElement(R.W, null)
            ),
            H.createElement(
              "div",
              { className: _e.a.SidebarTitle },
              Object(Z.n)("#EventCalendar_Title", H.createElement("br", null))
            ),
            H.createElement(Ke, { bIsUpcoming: a }),
            H.createElement(Se, null),
            H.createElement(
              "div",
              { className: _e.a.SidePanelGameSearch },
              H.createElement(Fe, {
                label: Object(Z.f)("#EventCalendar_UniversalSearch")
              })
            ),
            H.createElement(Xe, { bIsUpcoming: a }),
            H.createElement(
              "div",
              { className: _e.a.FilterSettingsCtn },
              H.createElement(
                "div",
                {
                  className: Object(W.a)(
                    _e.a.FilterLink,
                    _e.a.OpenFilterSettings
                  ),
                  onClick: function() {
                    return e.fnOpenFilterSettings(!0);
                  }
                },
                H.createElement(R.U, null),
                Object(Z.f)("#EventCalendar_EditFilters")
              )
            ),
            n &&
              H.createElement(
                "div",
                {
                  className: Object(W.a)(
                    _e.a.SidebarLink,
                    _e.a.ForceResponsiveLink
                  ),
                  onClick: n
                },
                Object(Z.f)("#EventCalendar_ShowResponsiveView")
              ),
            B.a.bInSteamLabs &&
              H.createElement(
                "div",
                {
                  className: Object(W.a)(
                    _e.a.SidePanelSteamLabs,
                    t && _e.a.SidePanelSteamLabsNarrow
                  )
                },
                H.createElement(ze, null)
              ),
            t && H.createElement(xe, null)
          );
        }),
        xe = function(e) {
          return H.createElement(
            "div",
            { className: _e.a.SidebarFooter },
            H.createElement("img", {
              src: Y.c.STORE_CDN_URL + "public/images/footerLogo_valve_new.png"
            }),
            H.createElement(
              "div",
              { className: _e.a.FooterLegal },
              Object(Z.f)("#Legal_Footer_WithYear", Object(Z.j)(new Date()))
            )
          );
        },
        Fe = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.DecorateSearchSuggestion = function(e, t) {
              if (e && e.id) {
                var a = "";
                return (
                  "curators" == e.corpus
                    ? (a = "group/" + e.id)
                    : "games" == e.corpus &&
                      (Object(C.a)(
                        Object(v.b)(e.type),
                        "Unexpected app type " + e.type
                      ),
                      (a = "app/" + e.id)),
                  H.createElement(
                    c.b,
                    {
                      key: "suggestion-" + e.id,
                      to: "/" + Object(Ce.f)() + "/" + a + "/"
                    },
                    t
                  )
                );
              }
              return t;
            }),
            (t.prototype.render = function() {
              return H.createElement(J, {
                strLabel: this.props.label,
                fnOnSelected: function() {},
                fnDecorateSuggestion: this.DecorateSearchSuggestion,
                rgCorporaToSearch: ["games", "curators"],
                focusOnMount: this.props.focusOnMount
              });
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        Pe = Y.c.STORE_BASE_URL + "labs",
        He = Y.c.COMMUNITY_BASE_URL + "groups/SteamLabs/discussions/11/",
        ze = function(e) {
          return H.createElement(
            "div",
            { className: _e.a.SideSteamLabsBannerCtn },
            H.createElement(
              "div",
              { className: _e.a.SteamLabsIdentifiers },
              H.createElement(
                "a",
                {
                  className: _e.a.SteamLabsName,
                  href: Pe,
                  target: Y.c.IN_CLIENT ? void 0 : "_blank"
                },
                Object(Z.f)("#SteamLabs")
              ),
              H.createElement(
                "div",
                { className: _e.a.SteamLabsNumber },
                Object(Z.f)("#SteamLabs_ExperimentNumber", "009")
              )
            ),
            H.createElement(
              "a",
              {
                className: _e.a.SteamLabsButton,
                href: He,
                target: Y.c.IN_CLIENT ? void 0 : "_blank"
              },
              H.createElement(R.j, null)
            )
          );
        };
      function Ue(e, t) {
        var a = Object(w.b)(e);
        if ((Object(C.a)(!!a, "Must define collection " + e), !a)) return null;
        var n = Object(O.b)().GetCollectionID() == e,
          r = void 0;
        switch (e) {
          case w.a.Default:
            n = Object(O.b)().BIsGlobalCalendar() && !t;
            break;
          case w.a.Upcoming:
            (n = Object(O.b)().BIsGlobalCalendar() && t),
              (r = (function() {
                if (Object(O.b)().BIsGlobalCalendar() && Y.i.logged_in) {
                  var e =
                      Object(O.b)()
                        .GetStoreInitializationTimestamp()
                        .getTime() / 1e3,
                    t = Object(O.b)().GetCurrentlyLoadedEventCount(e);
                  if (t)
                    return Object(O.b)().BHitEventHorizon("forward")
                      ? String(t.nCount)
                      : t.nCount + "+";
                }
              })());
        }
        return {
          name: a.strName,
          shortName: a.strShortName,
          key: e,
          url: a.strUrl,
          subtitle: a.strSubtitle,
          onPage: n,
          count: r,
          bValveOnly: a.bIsValveOnly
        };
      }
      function Ve(e) {
        var t = new Array();
        return t.push(Ue(w.a.Default, e)), t.push(Ue(w.a.Upcoming, e)), t;
      }
      function We(e) {
        var t = new Array();
        return t.push(Ue(w.a.Featured, e)), t.push(Ue(w.a.Steam, e)), t;
      }
      function qe(e, t) {
        Object(O.b)().BIsCollectionCalendar(), Object(Ce.f)();
        var a = new Array();
        if (
          (Y.c.EREALM !== v.e.k_ESteamRealmChina && a.push(Ue(w.a.Press, e)), t)
        )
          for (var n = 0, r = Ee.GetVisibleSpecialEvents(); n < r.length; n++) {
            var o = r[n];
            a.push({
              name: Object(Z.f)(o.sLocToken),
              url: o.newshubUrl,
              onPage: !1,
              key: "event_" + o.sLocToken
            });
          }
        return (
          Y.i.is_support &&
            (a.push(Ue(w.a.Dev_All, e)),
            a.push(Ue(w.a.Dev_Sales, e)),
            a.push(Ue(w.a.Dev_AssociatedPress, e))),
          a
        );
      }
      function Ze(e) {
        var t = e.element,
          a = t.shortName,
          n = t.name,
          r = t.url,
          o = t.onPage,
          i = t.count,
          l = t.bValveOnly;
        return !Y.i.is_support && l
          ? null
          : H.createElement(
              c.b,
              { to: "/" + r },
              H.createElement(
                "div",
                {
                  className: Object(W.a)(
                    _e.a.MobileNavButton,
                    o && _e.a.MobileNavButtonActive
                  )
                },
                a || n,
                i &&
                  H.createElement("div", { className: _e.a.MobileNavCount }, i)
              )
            );
      }
      function Ye(e) {
        var t = e.element,
          a = (t.key, t.name),
          n = t.subtitle,
          r = t.url,
          o = t.onPage,
          i = t.count,
          l = t.bValveOnly,
          s = t.icon;
        return !Y.i.is_support && l
          ? null
          : H.createElement(
              c.b,
              { to: "/" + r },
              H.createElement(
                "div",
                {
                  className: Object(W.a)(
                    _e.a.NewsChannel,
                    o && _e.a.NewsChannelOnPage,
                    l && V.a.ValveOnlyBackground
                  )
                },
                Boolean(s) &&
                  H.createElement("img", {
                    className: Object(W.a)(_e.a.NewsChannelIcon),
                    src: s
                  }),
                H.createElement(
                  "div",
                  { className: _e.a.NewsChannelText },
                  H.createElement(
                    "div",
                    { className: _e.a.NewsChannelTitle },
                    l && "(VO) ",
                    a
                  ),
                  n &&
                    H.createElement(
                      "div",
                      { className: _e.a.NewsChannelSubtitle },
                      n
                    )
                ),
                Boolean(void 0 !== i) &&
                  H.createElement(
                    "div",
                    { className: _e.a.NewsChannelCount },
                    i
                  )
              )
            );
      }
      function Qe(e) {
        var t = e.titleToken,
          a = e.subtitleToken,
          n = e.backgroundImg,
          r = e.headerImg,
          o = e.headerURL,
          i = n ? { backgroundImage: n } : {};
        return H.createElement(
          "div",
          {
            className: Object(W.a)(
              lt.a.CommonHeaderStyles,
              lt.a.SimpleTitleHeaderCtn,
              e.largeHeader && lt.a.LargeHeader
            ),
            style: i
          },
          Boolean(o && r) &&
            H.createElement(
              "a",
              { href: o, className: lt.a.AppBannerLogoCtn },
              H.createElement("img", { className: lt.a.AppBannerLogo, src: r })
            ),
          Boolean(r && !o) &&
            H.createElement(
              "div",
              { className: lt.a.AppBannerLogoCtn },
              H.createElement("img", { className: lt.a.AppBannerLogo, src: r })
            ),
          H.createElement(
            "div",
            { className: lt.a.SimpleTitleCtn },
            H.createElement(
              "div",
              { className: lt.a.Title },
              t.startsWith("#") ? Object(Z.f)(t) : t
            ),
            a &&
              H.createElement(
                "div",
                { className: lt.a.Subtitle },
                a.startsWith("#") ? Object(Z.f)(a) : a
              )
          )
        );
      }
      var Je = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bSearchExpanded: !1 }), e;
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.onExpandSearch = function(e) {
              this.setState({ bSearchExpanded: e });
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.state.bSearchExpanded,
                a = Ve(this.props.bIsUpcoming),
                n = We(this.props.bIsUpcoming),
                r = qe(this.props.bIsUpcoming, !1),
                o = Object(z.g)(a, n, r);
              return H.createElement(
                "div",
                {
                  style: {
                    transform: "translateY(" + this.props.nTopOffset + "px)"
                  },
                  className: _e.a.MobileNavBannerCtn
                },
                H.createElement(
                  "div",
                  {
                    className: _e.a.SettingsPanel,
                    onClick: this.props.fnToggleCollapsed
                  },
                  H.createElement(R.U, null)
                ),
                H.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      _e.a.SettingsPanel,
                      t && _e.a.SearchExpanded
                    ),
                    onClick: function() {
                      return e.onExpandSearch(!t);
                    }
                  },
                  H.createElement(R.F, null)
                ),
                t &&
                  H.createElement(
                    H.Fragment,
                    null,
                    H.createElement("div", {
                      className: _e.a.SearchDismiss,
                      onClick: function() {
                        return e.onExpandSearch(!1);
                      }
                    }),
                    H.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          _e.a.SearchBox,
                          t && _e.a.SearchExpanded
                        )
                      },
                      H.createElement(Fe, { focusOnMount: !0 })
                    )
                  ),
                H.createElement(
                  Le,
                  { className: _e.a.MobileNavHScroll },
                  H.createElement(
                    "div",
                    { className: _e.a.MobileNavBannerList },
                    o.map(function(e) {
                      return H.createElement(Ze, { key: e.key, element: e });
                    })
                  )
                )
              );
            }),
            Object(z.c)([s.a], e.prototype, "onExpandSearch", null),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component),
        Ke = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.render = function() {
              var e = Ve(this.props.bIsUpcoming),
                t = We(this.props.bIsUpcoming);
              return H.createElement(
                "div",
                { className: _e.a.NewsChannelGroup },
                H.createElement(
                  "div",
                  { className: _e.a.NewsChannelListTitle },
                  Object(Z.f)("#EventCalendar_NewsChannels")
                ),
                H.createElement(
                  "div",
                  { className: _e.a.NewsChannelList },
                  e.map(function(e) {
                    return H.createElement(Ye, { key: e.key, element: e });
                  })
                ),
                H.createElement(
                  "div",
                  { className: _e.a.NewsChannelListTitle },
                  Object(Z.f)("#EventCalendar_NewsChannels_Global")
                ),
                H.createElement(
                  "div",
                  { className: _e.a.NewsChannelList },
                  t.map(function(e) {
                    return H.createElement(Ye, { key: e.key, element: e });
                  })
                )
              );
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        Xe = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.render = function() {
              var e = qe(this.props.bIsUpcoming, !1);
              return e && 0 < e.length
                ? H.createElement(
                    "div",
                    {
                      className: Object(W.a)(
                        _e.a.NewsChannelGroup,
                        _e.a.DiscoverGroup
                      )
                    },
                    H.createElement(
                      "div",
                      { className: _e.a.NewsChannelListTitle },
                      Object(Z.f)("#EventCalendar_NewsChannels_Discover")
                    ),
                    H.createElement(
                      "div",
                      { className: _e.a.NewsChannelList },
                      e.map(function(e) {
                        return H.createElement(Ye, { key: e.key, element: e });
                      })
                    )
                  )
                : null;
            }),
            t
          );
        })(H.Component),
        $e = a("MnIK"),
        et = a("G24H"),
        tt = a.n(et),
        at = a("Kw0F"),
        nt = a("FKsz"),
        rt = a.n(nt),
        ot = (function(t) {
          function a() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                rgCuratorList: null,
                nNumToDisplay: 0,
                bHasBeenDismissed: e.HasBeenDismissed()
              }),
              (e.m_ref = g.a.createRef()),
              (e.m_cancelSignal = T.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(z.d)(a, t),
            (a.prototype.componentDidMount = function() {
              return Object(z.b)(this, void 0, void 0, function() {
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.rgCuratorList
                        ? [3, 2]
                        : [4, k.Get().WaitForInitialLoad()];
                    case 1:
                      e.sent(),
                        this.m_cancelSignal.token.reason ||
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
              this.m_cancelSignal.cancel("CuratorFeedSuggestRow to unload"),
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
              this.m_cancelSignal.token.reason ||
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
                this.m_cancelSignal.token.reason ||
                  this.setState({ bHasBeenDismissed: !0 });
            }),
            (a.prototype.OnDismissButton = function(e) {
              Object(j.d)(
                g.a.createElement(X.c, {
                  strTitle: Object(Z.f)("#EventCurator_DismissTitle"),
                  strDescription: Object(Z.f)("#EventCurator_DismissBody"),
                  onOK: this.OnCommitDismiss
                }),
                Object(q.m)(e)
              );
            }),
            (a.prototype.GenerateNewsCuratorList = function() {
              var e = Z.e.GetELanguageFallbackOrder();
              void 0 ===
                e.find(function(e) {
                  return 0 === e;
                }) && e.push(0);
              for (var t = new Array(), a = 0, n = e; a < n.length; a++) {
                var r = n[a],
                  o = k
                    .Get()
                    .GetCuratorsForLang(r)
                    .filter(function(e) {
                      return !x.a.BIsIgnoringCurator(e.clanAccountID);
                    });
                Object(at.g)(o), t.push.apply(t, o);
              }
              return t;
            }),
            (a.prototype.GenerateCurator = function(e) {
              var t = E.a.GetClanInfoByClanAccountID(e.clanAccountID);
              return t
                ? g.a.createElement(
                    "div",
                    { className: rt.a.ClanInfo, key: t.clanAccountID },
                    g.a.createElement(ve, { clanInfo: t, layout: "icon" })
                  )
                : null;
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
              return g.a.createElement(
                y.a,
                null,
                g.a.createElement(
                  "div",
                  { className: rt.a.FeedSuggestContainerBG },
                  g.a.createElement(
                    "div",
                    { className: rt.a.FeedSuggestContainer },
                    g.a.createElement(
                      "div",
                      { className: rt.a.FeedSuggestCaption },
                      Object(Z.f)("#EventCurator_FeedCaption_Long")
                    ),
                    e &&
                      g.a.createElement(
                        "div",
                        {
                          className: rt.a.DismissButton,
                          onClick: this.OnDismissButton
                        },
                        g.a.createElement(R.V, null)
                      ),
                    g.a.createElement(
                      "div",
                      { className: rt.a.RowContainer, ref: this.m_ref },
                      o || g.a.createElement($.a, null),
                      g.a.createElement(
                        "div",
                        {
                          className: rt.a.BrowseMore,
                          onClick: Ae.Get().ShowBrowseCurator
                        },
                        Object(Z.f)("#EventCurator_BrowseMore")
                      )
                    )
                  )
                )
              );
            }),
            (a.s_strLocalStorageKey = "SteamNewsHub_SuggestCuratorsDismissed"),
            Object(z.c)([s.a], a.prototype, "OnResize", null),
            Object(z.c)([s.a], a.prototype, "OnCommitDismiss", null),
            Object(z.c)([s.a], a.prototype, "OnDismissButton", null),
            a
          );
        })(g.a.Component),
        it = a("4SZ2"),
        lt = a.n(it);
      function st(e) {
        var n = Object(w.b)(e);
        return (
          Object(C.a)(!!n, "Must define collection " + e),
          {
            collection: e,
            smallHeight: Number(lt.a.simpleTitleSmallHeight),
            largeHeight: Number(lt.a.simpleTitleLargeHeight),
            component: function(e, t, a) {
              return H.createElement(Qe, {
                largeHeader: e,
                titleToken: n.strHeaderTitle,
                subtitleToken: n.strHeaderSubtitle,
                headerImg: t,
                headerURL: a
              });
            }
          }
        );
      }
      var ct,
        ut,
        dt = [st(w.a.Press), st(w.a.Halloween)],
        pt = a("uuth"),
        mt = a("3+zv"),
        vt = a("O0NR"),
        ht = a("YLyR"),
        _t = a("02Wr");
      ((ut = ct = ct || {})[(ut.NotLoaded = 0)] = "NotLoaded"),
        (ut[(ut.Loading = 1)] = "Loading"),
        (ut[(ut.Loaded = 2)] = "Loaded");
      var bt = ct.NotLoaded,
        gt = [];
      function ft(t) {
        var e, a;
        bt != ct.Loaded
          ? (bt == ct.NotLoaded &&
              (((e = document.createElement("script")).src =
                "https://www.youtube.com/iframe_api"),
              (a = document.getElementsByTagName(
                "script"
              )[0]).parentNode.insertBefore(e, a),
              (window.onYouTubeIframeAPIReady = Et)),
            gt.findIndex(function(e) {
              return t == e;
            }) < 0 && gt.push(t))
          : t();
      }
      function Et() {
        bt = ct.Loaded;
        for (var e = 0, t = gt; e < t.length; e++) {
          (0, t[e])();
        }
        gt = [];
      }
      function yt(e) {
        var t = ["maxresdefault", "mqdefault", "default"],
          a = H.useState(0),
          n = a[0],
          r = a[1];
        H.useEffect(
          function() {
            return r(0);
          },
          [e.video]
        );
        var o = H.useRef();
        if (e.altImgWithFallback && 0 < e.altImgWithFallback.length)
          return H.createElement(_t.b, {
            className: e.className,
            srcs: e.altImgWithFallback
          });
        if (e.altImg)
          return H.createElement("img", {
            src: e.altImg,
            className: e.className
          });
        function i() {
          n + 1 < t.length && r(n + 1);
        }
        var l = "https://img.youtube.com/vi/" + e.video + "/" + t[n] + ".jpg";
        return H.createElement("img", {
          ref: o,
          onLoad: function() {
            o.current && o.current.naturalHeight < 91 && i();
          },
          onError: i,
          src: l,
          className: e.className
        });
      }
      function St(t) {
        var e = H.useState(!1),
          a = e[0],
          n = e[1];
        return (
          H.useEffect(
            function() {
              t.preloadYoutubeScripts && ft(function() {});
            },
            [t.preloadYoutubeScripts]
          ),
          a
            ? H.createElement(Ct, Object(z.a)({}, t))
            : H.createElement(
                "div",
                {
                  className: Object(W.a)(
                    "YoutubePreviewContainer",
                    t.imageClassnames
                  ),
                  onClick: function(e) {
                    t.onPlayerActivated && t.onPlayerActivated(),
                      n(!0),
                      e.stopPropagation(),
                      e.preventDefault();
                  }
                },
                H.createElement(yt, {
                  className: "YoutubePreviewImage",
                  altImgWithFallback: t.altImgWithFallback,
                  altImg: t.altImg,
                  video: t.video
                }),
                H.createElement(
                  "div",
                  { className: "YoutubePreviewPlay" },
                  H.createElement(R.eb, null)
                ),
                H.createElement(
                  "div",
                  { className: "VideoHintText" },
                  Object(Z.f)("#EventCalendar_WatchYouTubeVideo")
                )
              )
        );
      }
      var Ct = (function(a) {
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
            Object(z.d)(n, a),
            (n.prototype.componentWillUnmount = function() {
              var e;
              this.DestroyPlayer(),
                (e = this.OnYoutubeScriptsReady),
                at.c(gt, e);
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
                this.m_playerContainer && ft(this.OnYoutubeScriptsReady));
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
              var e = H.createElement(
                "div",
                {
                  key: this.m_strPlayerID,
                  ref: this.BindPlayerContainer,
                  className: Object(W.a)("YoutubePlayer", this.props.classnames)
                },
                H.createElement($.a, { className: "YoutubePlayerThrobber" })
              );
              return this.props.autopause
                ? H.createElement(pt.a, { onLeave: this.OnPlayerLeftView }, e)
                : e;
            }),
            (n.s_nPlayerIndex = 0),
            Object(z.c)([s.a], n.prototype, "BindPlayerContainer", null),
            Object(z.c)([s.a], n.prototype, "OnYoutubeScriptsReady", null),
            Object(z.c)([s.a], n.prototype, "CreatePlayer", null),
            Object(z.c)([s.a], n.prototype, "OnPlayerReady", null),
            Object(z.c)([s.a], n.prototype, "OnPlayerStateChange", null),
            Object(z.c)([s.a], n.prototype, "OnError", null),
            Object(z.c)([s.a], n.prototype, "OnPlayerLeftView", null),
            n
          );
        })(H.Component),
        Ot = a("N0Ye"),
        wt = a("ylkE"),
        Tt = a("i6tc"),
        It = a.n(Tt),
        jt = a("TtDX"),
        kt = a("y+6m"),
        Dt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.OnMuteButton = function(e) {
              var t = this.props.calendarEvent,
                a = t.GetEntityName();
              Object(j.d)(
                H.createElement(
                  X.c,
                  {
                    strTitle: Object(Z.f)("#EventCalendar_MuteApp_Title", a),
                    strDescription: Object(Z.f)(
                      "#EventCalendar_MuteApp_details",
                      a
                    ),
                    onOK: function() {
                      return Object(O.b)().UpdateEventBlockFromCalendarEvent(
                        t,
                        !1
                      );
                    }
                  },
                  H.createElement(
                    "a",
                    {
                      href: Y.c.STORE_BASE_URL + "account/emailoptout/app",
                      target: Y.c.IN_CLIENT ? void 0 : "_blank"
                    },
                    Object(Z.f)("#EventCalendar_ManageMutedSources")
                  )
                ),
                Object(q.m)(e)
              );
            }),
            (t.prototype.OnUnMuteButton = function() {
              var e = this.props.calendarEvent;
              Object(O.b)().UpdateEventBlockFromCalendarEvent(e, !0);
            }),
            (t.prototype.HideAllEventsOfMyType = function() {
              var e = this.props.eventModel,
                t = this.GetVisibilityStore().MapClanEventTypeToGroup(
                  e.GetEventType()
                );
              this.GetVisibilityStore().SetEventTypeGroupAllowed(t, !1);
            }),
            (t.prototype.GetVisibilityStore = function() {
              return Object(O.b)().m_visibilityStore;
            }),
            (t.prototype.AddContextMenuForSource = function(e, t, a, n) {
              var r = this;
              void 0 === n && (n = !0),
                this.GetVisibilityStore().BIsGameSourceAllowed(t) &&
                  (n &&
                    e.push(
                      H.createElement(
                        kt.d,
                        {
                          key: "item-source-" + a + "-" + t,
                          disabled: !0,
                          onSelected: function() {}
                        },
                        Object(Z.f)("#EventCalender_Reason_" + t)
                      )
                    ),
                  e.push(
                    H.createElement(
                      kt.d,
                      {
                        key: "item-hidesource-" + a + "-" + t,
                        onSelected: function() {
                          r.GetVisibilityStore().SetGameSourceAllowed(t, !1);
                        }
                      },
                      Object(Z.f)("#EventCalender_Hide_Reason_" + t)
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
                t = Object(Ce.d)(e, Ce.a.k_eStoreNewsHub, "allowRelative");
              this.props.history.push(t);
            }),
            (t.prototype.ToggleFollowCurator = function() {
              Object(ee.d)(this.props.eventModel.clanSteamID.GetAccountID());
            }),
            (t.prototype.CreateContextMenu = function(e) {
              var t,
                a = this.props,
                n = a.eventModel,
                r = a.calendarEvent,
                o = [],
                i = r.GetSource(),
                l = r.unique_id,
                s = Y.c.EREALM === v.e.k_ESteamRealmChina,
                c = Object(O.b)();
              c.BIsGlobalCalendar() &&
                (i &&
                  i & u.a.k_eLibrary &&
                  (this.GetVisibilityStore().BIsGameSourceAllowed(
                    d.c.k_ERecent
                  ) && r.appInfo
                    ? (o.push(
                        H.createElement(
                          kt.d,
                          {
                            key: "item-source-" + l + "-lastplayed",
                            disabled: !0,
                            onSelected: function() {}
                          },
                          Object(Z.f)(
                            "#EventCalender_LastPlayed",
                            Object(Z.q)(
                              B.a.GetTimeNowWithOverride() -
                                r.appInfo.last_played
                            )
                          )
                        )
                      ),
                      this.AddContextMenuForSource(o, d.c.k_ERecent, l, !1))
                    : this.AddContextMenuForSource(o, d.c.k_ELibrary, l)),
                i &&
                  i & u.a.k_eWishlist &&
                  this.AddContextMenuForSource(o, d.c.k_EWishlist, l),
                i &&
                  i & u.a.k_eFollowing &&
                  this.AddContextMenuForSource(o, d.c.k_EFollowing, l),
                !s &&
                  i &&
                  i & u.a.k_eCurator &&
                  this.AddContextMenuForSource(o, d.c.k_ECurator, l),
                i &&
                  i & u.a.k_eRecommended &&
                  this.AddContextMenuForSource(o, d.c.k_ERecommended, l),
                i &&
                  i & u.a.k_eSteam &&
                  this.AddContextMenuForSource(o, d.c.k_ESteam, l),
                i &&
                  i & u.a.k_eFeatured &&
                  this.AddContextMenuForSource(o, d.c.k_EFeatured, l)),
                o.push(
                  H.createElement(
                    kt.d,
                    {
                      key: n.GID + "hidetype",
                      onSelected: this.HideAllEventsOfMyType
                    },
                    Object(Z.f)(
                      "#EVentCalendar_Hide_EventType",
                      Object(Z.f)(
                        "#EventCalendar_EventTypeGroup_" +
                          this.GetVisibilityStore().MapClanEventTypeToGroup(
                            n.GetEventType()
                          )
                      )
                    )
                  )
                ),
                Y.i.logged_in &&
                  (p.a.Get().BIsEventBlocked(r)
                    ? o.push(
                        H.createElement(
                          kt.d,
                          {
                            key: n.GID + "unmuteapp",
                            onSelected: this.OnUnMuteButton
                          },
                          H.createElement(
                            I.a,
                            {
                              toolTipContent: Object(Z.f)(
                                "#EventCalendar_UnMuteApp_ttip"
                              )
                            },
                            Object(Z.f)(
                              "#EventCalendar_UnMuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      )
                    : o.push(
                        H.createElement(
                          kt.d,
                          {
                            key: n.GID + "muteapp",
                            onSelected: this.OnMuteButton
                          },
                          H.createElement(
                            I.a,
                            {
                              toolTipContent: Object(Z.f)(
                                "#EventCalendar_MuteApp_ttip"
                              )
                            },
                            Object(Z.f)(
                              "#EventCalendar_MuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      )),
                n.BIsOGGEvent() ||
                  s ||
                  ((t = x.a.BIsFollowingCurator(n.clanSteamID)),
                  o.push(
                    H.createElement(
                      kt.d,
                      {
                        key: n.GID + "followcurator",
                        onSelected: this.ToggleFollowCurator
                      },
                      H.createElement(
                        I.a,
                        {
                          toolTipContent: Object(Z.f)(
                            t
                              ? "#EventCalendar_UnFollowCurator_ttip"
                              : "#EventCalendar_FollowCurator_ttip"
                          )
                        },
                        Object(Z.f)(
                          t
                            ? "#EventCalendar_UnFollowCurator"
                            : "#EventCalendar_FollowCurator",
                          this.props.calendarEvent.GetEntityName()
                        )
                      )
                    )
                  )),
                c.BIsSingleSourceCalendar() ||
                  o.push(
                    H.createElement(
                      kt.d,
                      {
                        key: n.GID + "goto",
                        onSelected: this.GotoGameOrClanHub
                      },
                      Object(Z.f)(
                        "#EventCalendar_Goto_SpecificCalendar",
                        r.GetEntityName()
                      )
                    )
                  ),
                Object(jt.a)(H.createElement(kt.c, null, o), e);
            }),
            (t.prototype.render = function() {
              return H.createElement(
                "div",
                {
                  className: Object(W.a)(It.a.FooterStat, It.a.Options),
                  onClick: this.CreateContextMenu
                },
                H.createElement(R.I, null)
              );
            }),
            Object(z.c)([s.a], t.prototype, "OnMuteButton", null),
            Object(z.c)([s.a], t.prototype, "OnUnMuteButton", null),
            Object(z.c)([s.a], t.prototype, "HideAllEventsOfMyType", null),
            Object(z.c)([s.a], t.prototype, "AddContextMenuForSource", null),
            Object(z.c)([s.a], t.prototype, "RemoveFromWishlist", null),
            Object(z.c)([s.a], t.prototype, "AddToWishlist", null),
            Object(z.c)([s.a], t.prototype, "GotoGameOrClanHub", null),
            Object(z.c)([s.a], t.prototype, "ToggleFollowCurator", null),
            Object(z.c)([s.a], t.prototype, "CreateContextMenu", null),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        Gt = Object(i.i)(Dt),
        Lt = a("XmAN"),
        At = a("cGQe"),
        Nt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bVideoPlayerReady: !1 }), e;
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.OnFallbackClick = function(e) {
              vt.b.RecordAppInteractionEvent(
                this.props.calendarEvent.appid,
                vt.a.k_eClickThrough
              ),
                this.props.fnOnClicked(this.props.eventModel),
                e.stopPropagation(),
                e.preventDefault();
            }),
            (e.prototype.componentDidMount = function() {
              var e;
              this.props.calendarEvent.clanInfo &&
                ((e = f.a.InitFromClanID(
                  this.props.calendarEvent.clanInfo.clanid
                )),
                E.a.LoadClanInfoForClanSteamID(e));
            }),
            (e.prototype.getVideoPreviewControl = function() {
              var e = this,
                t = this.props.eventModel,
                a = t.video_preview_type,
                n = t.video_preview_id;
              if (!n) return null;
              if (12 === this.props.eventModel.type) return null;
              if ("youtube" !== a) return null;
              var r = Object(A.g)(Y.c.LANGUAGE),
                o =
                  ca() && 14 == this.props.eventModel.GetEventType()
                    ? N.c.full
                    : N.c.capsule_main,
                i = this.props.eventModel.GetImageForSizeAsArrayWithFallback(
                  "capsule",
                  r,
                  o,
                  !0
                );
              if ("carousel" === this.props.mode)
                return H.createElement(yt, {
                  altImgWithFallback: i,
                  video: n,
                  className: It.a.YoutubePreviewImage
                });
              return H.createElement(St, {
                video: n,
                altImgWithFallback: i,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                imageClassnames: It.a.YoutubePreviewImage,
                onPlayerActivated: function() {
                  vt.b.RecordAppInteractionEvent(
                    e.props.calendarEvent.appid,
                    vt.a.k_ePlayedVideo
                  ),
                    e.setState({ bVideoPlayerReady: !0 });
                },
                preloadYoutubeScripts: !0,
                playsInline: !0
              });
            }),
            (e.prototype.BIsSubTitleRedundant = function(e, t) {
              function a(e) {
                return e.replace(/\W+/g, "").toLocaleLowerCase();
              }
              var n = a(e);
              return a(t).startsWith(n);
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.eventModel,
                a = e.calendarEvent,
                n = e.bSuppressHoverEffects,
                r = e.mode,
                o = U.a.Get(),
                i = a.GetGameCapsule(),
                l = Object(A.g)(Y.c.LANGUAGE),
                s = t.has_live_stream,
                c = t.has_live_stream,
                u =
                  ca() && 14 == t.GetEventType() ? N.c.full : N.c.capsule_main,
                d = "capsule",
                p = t.BImageNeedScreenshotFallback(d, l),
                m = Boolean(p && t.appid)
                  ? t.GetFallbackArtworkScreenshot()
                  : t.GetImageURLWithFallback(d, l, u),
                v = "upcoming" !== r && this.getVideoPreviewControl(),
                h = !v && "upcoming" !== r,
                _ = t.GetCategoryAsString(),
                b = It.a["EventType" + t.GetEventType()],
                g = t.GetAllTags().map(function(e) {
                  return It.a["Tag-" + e];
                }),
                f = W.a.apply(
                  void 0,
                  Object(z.g)(
                    [
                      It.a.TileContainer,
                      b,
                      s && It.a.TileVideoIcon,
                      n ? It.a.DisableHovers : It.a.EnableHovers,
                      this.state.bVideoPlayerReady && It.a.VideoPlayerReady,
                      v && It.a.HasVideo,
                      o.HasEventBeenRead(t.GID) && It.a.HasBeenRead,
                      "wide" === r && It.a.WideMode,
                      "carousel" === r && It.a.CarouselMode,
                      "upcoming" === r && It.a.UpcomingMode
                    ],
                    g
                  )
                ),
                E = t.GetNameWithFallback(l),
                y = t.GetSubTitleWithLanguageFallback(l),
                S = t.GetSummaryWithFallback(l);
              y === S && (S = void 0), y === E && (y = void 0);
              var C = Object(mt.u)(m),
                O = H.createElement(
                  "div",
                  { className: It.a.CoverImageCtn },
                  v,
                  h &&
                    H.createElement(
                      H.Fragment,
                      null,
                      12 === t.type &&
                        H.createElement(
                          H.Fragment,
                          null,
                          H.createElement(
                            "div",
                            { className: It.a.GameCapsuleCtn },
                            H.createElement("div", {
                              className: It.a.AppBannerLogo,
                              style: { backgroundImage: "url(" + i + ")" }
                            })
                          ),
                          H.createElement(
                            "div",
                            { className: It.a.GameShortDescription },
                            S
                          )
                        ),
                      12 !== t.type &&
                        H.createElement(
                          "div",
                          {
                            className: Object(W.a)(
                              It.a.EventCapsuleCtn,
                              s && It.a.LiveBroadcastPreview
                            )
                          },
                          H.createElement("div", {
                            className: Object(W.a)(
                              It.a.TileImage,
                              p && It.a.FallbackImage
                            ),
                            style: { backgroundImage: "url(" + C + ")" }
                          }),
                          s &&
                            H.createElement("div", {
                              className: It.a.TileCoverImagePlayable
                            }),
                          c &&
                            H.createElement(
                              "div",
                              { className: It.a.TileCoverLiveIcon },
                              Object(Z.f)("#home_page_live_broadcast")
                            ),
                          s &&
                            H.createElement(
                              "div",
                              { className: "VideoHintText" },
                              Object(Z.f)("#EventCalendar_WatchLiveBroadcast")
                            )
                        )
                    )
                ),
                w = v && "carousel" !== r,
                T = n && 14 != t.GetEventType() && !w,
                I = T && O,
                j = !T && O,
                k = "wide" !== r || n,
                D =
                  28 !== t.type &&
                  12 !== t.type &&
                  B.a.GetTimeNowWithOverride() <
                    t.GetStartTimeAndDateUnixSeconds() &&
                  H.createElement(
                    "div",
                    {
                      className: Object(W.a)(
                        It.a.ReminderContainer,
                        k && It.a.OnlyIcon
                      )
                    },
                    H.createElement(At.a, {
                      eventModel: t,
                      eventGID: t.GID,
                      lang: l,
                      bShowStartTime: !0,
                      bOnlyShowIcon: k,
                      bExpandLeft: k
                    })
                  ),
                G = Boolean(12 !== t.type && S),
                L = Boolean(y && (!G || !this.BIsSubTitleRedundant(y, S)));
              return H.createElement(
                "div",
                { className: f },
                H.createElement(Lt.a, { event: t, recordNewsHubStats: !0 }),
                H.createElement(
                  Ce.c,
                  { eventModel: t, route: Ce.a.k_eView },
                  H.createElement(
                    "div",
                    { className: It.a.Tile, onClick: this.OnFallbackClick },
                    14 === t.type &&
                      H.createElement("div", {
                        className: Object(W.a)(
                          It.a.TileBackgroundImage,
                          p && It.a.FallbackImage
                        ),
                        style: { backgroundImage: "url(" + C + ")" }
                      }),
                    H.createElement(
                      "div",
                      { className: It.a.MainContentContainer },
                      H.createElement(
                        "div",
                        { className: It.a.TileTextContainer },
                        H.createElement(
                          "div",
                          { className: It.a.PatchIconCtn },
                          H.createElement(R.M, null)
                        ),
                        H.createElement(
                          "div",
                          { className: It.a.EventTitleCtn },
                          I,
                          !this.props.bHideGameTitle &&
                            H.createElement(
                              "div",
                              { className: It.a.GameSource },
                              H.createElement(Mt, Object(z.a)({}, this.props)),
                              a && H.createElement(xt, { calendarEvent: a })
                            ),
                          H.createElement(
                            "div",
                            { className: It.a.EventName },
                            E
                          ),
                          H.createElement(
                            "div",
                            { className: It.a.EventTypeAndDateCtn },
                            H.createElement(
                              "div",
                              {
                                className: Object(W.a)(
                                  It.a.TileTextCategoryType,
                                  b
                                )
                              },
                              _
                            ),
                            H.createElement(Rt, {
                              eventModel: t,
                              className: Object(W.a)(
                                k && It.a.LeaveRoomForReminder
                              )
                            }),
                            k && D
                          ),
                          L &&
                            H.createElement(
                              "div",
                              { className: It.a.EventSubTitle },
                              y
                            ),
                          G &&
                            H.createElement(
                              "div",
                              {
                                className: Object(W.a)(
                                  It.a.EventSummaryDefault,
                                  y ? It.a.SubTitleShown : ""
                                )
                              },
                              S
                            )
                        ),
                        !k && D
                      ),
                      j
                    )
                  )
                ),
                H.createElement(Pt, Object(z.a)({}, this.props))
              );
            }),
            Object(z.c)([s.a], e.prototype, "OnFallbackClick", null),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component),
        Bt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.OnTitleClick = function(e) {
              var t = this.props.eventModel,
                a = Object(Ce.d)(t, Ce.a.k_eStoreNewsHub, "allowRelative");
              this.props.history.push(a),
                e.stopPropagation(),
                e.preventDefault();
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = (e.eventModel, e.calendarEvent),
                a = e.bSuppressHoverEffects,
                n = t.GetEntityName(),
                r = t.GetGameIcon(),
                o = Object(W.a)(
                  It.a.GameTitleContainer,
                  a ? It.a.DisableHovers : It.a.EnableHovers
                );
              return H.createElement(
                y.a,
                null,
                H.createElement(
                  "div",
                  { className: It.a.TileTextHeader },
                  H.createElement(
                    "div",
                    { className: o, onClick: this.OnTitleClick },
                    H.createElement("img", { className: It.a.AppIcon, src: r }),
                    H.createElement(
                      "div",
                      { className: It.a.TileTextAppName },
                      n,
                      " "
                    )
                  )
                )
              );
            }),
            Object(z.c)([s.a], t.prototype, "OnTitleClick", null),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        Mt = Object(i.i)(Bt),
        Rt = Object(r.a)(function(e) {
          var t = e.eventModel,
            a = e.calendarEvent,
            n = e.className,
            r =
              Object(O.b)()
                .GetStoreInitializationTimestamp()
                .getTime() / 1e3,
            o = t ? t.GetStartTimeAndDateUnixSeconds() : a.start_time,
            i = t && Object(Ot.a)(t.type) && t.GetEndTimeAndDateUnixSeconds();
          if (i && o < r && r < i) {
            var l = i - r,
              s = Object(Z.q)(l, !0);
            return H.createElement(
              "div",
              { className: Object(W.a)(It.a.LiveText, n) },
              H.createElement(
                ht.f,
                { rtFullDate: o, stylesmodule: It.a },
                H.createElement(
                  "div",
                  { className: It.a.LiveNow },
                  Object(Z.f)("#EventCalendar_LiveNow")
                )
              ),
              H.createElement(
                ht.f,
                { rtFullDate: i, stylesmodule: It.a },
                Object(Z.f)("#EventCalendar_TimeLeft", s)
              )
            );
          }
          if (o < r) {
            var c = r - o,
              u = c < 86400 ? Object(Z.q)(c, !1, !0) : Object(Z.p)(o);
            return H.createElement(
              ht.f,
              { className: n, rtFullDate: o, stylesmodule: It.a },
              H.createElement("div", { className: It.a.PastDateText }, u)
            );
          }
          var d = new Date(1e3 * r);
          d.setHours(0, 0, 0, 1);
          var p = d.getTime() / 1e3,
            m = Math.floor((o - p) / 86400),
            v =
              1 < m && m <= 5 ? Object(Z.h)(new Date(1e3 * o)) : Object(Z.p)(o),
            h = Object(ht.e)(o);
          return H.createElement(
            ht.f,
            { className: n, rtFullDate: o, stylesmodule: It.a },
            H.createElement(
              "div",
              { className: It.a.FutureDateText },
              Object(Z.f)("#EventCalendar_WillStartAtDateTime", v, h)
            )
          );
        }),
        xt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.render = function() {
              var n = this,
                e = this.props.calendarEvent.GetSource(),
                r = [],
                t = Object(O.b)().m_visibilityStore;
              e & u.a.k_eLibrary && t.BIsGameSourceAllowed(d.c.k_ELibrary)
                ? r.push({
                    id: u.a.k_eLibrary,
                    name: "#EventCalendar_GameSource_inLibrary",
                    ttip:
                      "#EventCalendar_GameSource_EventExplanation_ttip_library",
                    styles: It.a.LibrarySource
                  })
                : e & u.a.k_eWishlist && t.BIsGameSourceAllowed(d.c.k_EWishlist)
                ? r.push({
                    id: u.a.k_eWishlist,
                    name: "#EventCalendar_GameSource_onWishlist",
                    ttip:
                      "#EventCalendar_GameSource_EventExplanation_ttip_wishlist",
                    styles: It.a.WishlistSource
                  })
                : e & u.a.k_eRecommended &&
                  t.BIsGameSourceAllowed(d.c.k_ERecommended)
                ? r.push({
                    id: u.a.k_eRecommended,
                    name: "#EventCalendar_GameSource_recommended_Verbose",
                    ttip:
                      "#EventCalendar_GameSource_EventExplanation_ttip_recommended",
                    styles: It.a.RecommendedSource
                  })
                : e & u.a.k_eFeatured &&
                  t.BIsGameSourceAllowed(d.c.k_EFeatured) &&
                  r.push({
                    id: u.a.k_eFeatured,
                    name: "#EventCalendar_GameSource_featured",
                    ttip: "#EventCalendar_GameSource_ttip_featured",
                    styles: It.a.FeaturedSource
                  }),
                e & u.a.k_eFollowing &&
                  t.BIsGameSourceAllowed(d.c.k_EFollowing) &&
                  r.push({
                    id: u.a.k_eFollowing,
                    name: "#EventCalendar_GameSource_followed",
                    ttip:
                      "#EventCalendar_GameSource_EventExplanation_ttip_following",
                    styles: It.a.FollowingSource
                  });
              var a = r.map(function(e, t) {
                var a = n.props.calendarEvent.unique_id;
                return Ft(
                  "item-source-" + a + "-" + e.id,
                  e.name,
                  e.ttip,
                  e.styles,
                  t + 1 < r.length
                );
              });
              return H.createElement("div", { className: It.a.SourceList }, a);
            }),
            t
          );
        })(H.Component),
        Ft = function(e, t, a, n, r) {
          return H.createElement(
            I.a,
            {
              key: e,
              className: Object(W.a)(It.a.Source, n),
              toolTipContent: Object(Z.f)(a)
            },
            Object(Z.f)(t) + (r ? ", " : "")
          );
        };
      var Pt = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(z.d)(t, e),
          (t.prototype.OnPerformVoteUp = function() {
            var e = this.props.eventModel,
              t = U.a.Get();
            !0 !== t.GetPreviouslyLoadedVote(this.props.eventModel) &&
              Object(wt.a)(e, t) &&
              (t.Vote(e, !0, T.a.CancelToken.source()),
              vt.b.RecordAppInteractionEvent(e.appid, vt.a.k_eThumbsUp));
          }),
          (t.prototype.OnDiscussionClicked = function() {
            var e = this.props.eventModel;
            vt.b.RecordAppInteractionEvent(e.appid, vt.a.k_eDiscussions);
          }),
          (t.prototype.render = function() {
            var e,
              t = U.a.Get(),
              a = this.props.eventModel,
              n = Math.max(0, a.nVotesUp - a.nVotesDown),
              r = t.GetPreviouslyLoadedVote(this.props.eventModel),
              o = ((e = r),
              t.BIsUserLoggedIn()
                ? Y.i.is_limited
                  ? It.a.Vote_LimitedUser
                  : !0 === e
                  ? It.a.Vote_Positive
                  : !1 === e
                  ? It.a.Vote_Negative
                  : It.a.Vote_Ready
                : It.a.Vote_NotLoggedIn),
              i = a.GetForumTopicURL(),
              l = Y.c.EREALM !== v.e.k_ESteamRealmChina && i,
              s =
                0 < a.live_stream_viewer_count
                  ? a.live_stream_viewer_count
                  : void 0;
            return H.createElement(
              "div",
              { className: It.a.Footer },
              H.createElement(
                "div",
                { className: It.a.FooterRightSide },
                Boolean(s) &&
                  H.createElement(
                    "div",
                    { className: It.a.TileViewerCount },
                    s.toLocaleString(Z.e.GetPreferredLocales())
                  ),
                H.createElement(
                  "div",
                  {
                    className: Object(W.a)(It.a.FooterStat, It.a.Vote, o),
                    onClick: this.OnPerformVoteUp
                  },
                  H.createElement(R.Z, { className: It.a.RateIcon }),
                  H.createElement("span", null, Number(n).toLocaleString())
                ),
                l &&
                  H.createElement(
                    "div",
                    { className: It.a.FooterStat },
                    H.createElement(
                      "a",
                      {
                        href: i,
                        className: It.a.CommentIconCtn,
                        target: "_blank",
                        onClick: this.OnDiscussionClicked
                      },
                      H.createElement(R.q, { className: It.a.CommentIcon }),
                      H.createElement(
                        "span",
                        null,
                        Number(a.nCommentCount).toLocaleString()
                      )
                    )
                  ),
                H.createElement(Gt, Object(z.a)({}, this.props))
              )
            );
          }),
          Object(z.c)([s.a], t.prototype, "OnPerformVoteUp", null),
          Object(z.c)([s.a], t.prototype, "OnDiscussionClicked", null),
          (t = Object(z.c)([r.a], t))
        );
      })(H.Component);
      function Ht(e) {
        var t,
          a = new Array();
        return (
          null !== (t = Y.c.SUPPORTED_LANGUAGES) && void 0 !== t && t.length
            ? (a = Y.c.SUPPORTED_LANGUAGES.map(function(e) {
                return e.localizedName;
              }))
            : a.push(Object(Z.f)("#Language_" + Y.c.LANGUAGE)),
          g.a.createElement(
            "div",
            { className: ra.a.LanguageList },
            a.join(", ")
          )
        );
      }
      function zt(e) {
        var t,
          a = "SteamNewsHub_LanguageDismissed",
          n = g.a.useState(
            (t = JSON.parse(localStorage.getItem(a))) && t.bDismissed
          ),
          r = n[0],
          o = n[1];
        if (r) return null;
        if (Y.c.EREALM === v.e.k_ESteamRealmChina) return null;
        var i = Y.c.STORE_BASE_URL + "account/languagepreferences/";
        return g.a.createElement(
          "div",
          { className: ra.a.LanguageFeedCtn },
          g.a.createElement(
            "div",
            {
              className: ra.a.DismissButton,
              onClick: function() {
                o(!0),
                  localStorage.setItem(a, JSON.stringify({ bDismissed: !0 }));
              }
            },
            g.a.createElement(R.V, null)
          ),
          g.a.createElement(
            "div",
            { className: ra.a.BodyFlow },
            g.a.createElement(
              "div",
              { className: ra.a.LeftColumn },
              g.a.createElement(R.B, null)
            ),
            g.a.createElement(
              "div",
              { className: ra.a.RightColumn },
              g.a.createElement(
                "div",
                { className: ra.a.Title },
                Object(Z.f)("#EventCalendar_NewsLanguage_Title")
              ),
              g.a.createElement(Ht, null),
              g.a.createElement(
                "div",
                { className: ra.a.Text },
                Object(Z.n)(
                  "#EventCalendar_NewsLanguage_Text",
                  g.a.createElement(
                    "a",
                    { href: i },
                    Object(Z.f)("#EventCalendar_NewsLanguage_TextInHyperlink")
                  )
                )
              )
            )
          )
        );
      }
      var Ut = Object(r.a)(function(e) {
          var a = e.calendarEvent,
            n = e.partnerEventStore,
            t = e.mode,
            r = It.a["EventType" + a.event_type],
            o = Object(W.a)(It.a.TileContainer, r),
            i = "carousel" === t;
          return H.createElement(
            pt.a,
            {
              onEnter: function() {
                var e, t;
                (e = a),
                  n.QueueLoadPartnerEvent(e.clanid, e.unique_id),
                  e.appid && _.a.GetStoreCapsuleInfo(e.appid),
                  e.clanInfo &&
                    ((t = f.a.InitFromClanID(e.clanInfo.clanid)),
                    E.a.LoadClanInfoForClanSteamID(t));
              },
              topOffset: "-500px",
              bottomOffset: "-500px"
            },
            H.createElement(
              "div",
              { className: o },
              H.createElement(
                "div",
                { className: Object(W.a)(It.a.Tile, It.a.LoadingTile) },
                i && H.createElement($.a, null)
              ),
              H.createElement("div", { className: It.a.Footer })
            )
          );
        }),
        Vt = Object(r.a)(function(e) {
          var t = e.partnerEventStore,
            a = e.calendarEvent,
            n = Object(z.f)(e, ["partnerEventStore", "calendarEvent"]);
          if (
            ((r = a),
            !t.GetClanEventModel(r.unique_id) ||
              (r.appid && !_.a.BIsAppidLoaded(r.appid)) ||
              (r.clanInfo && !E.a.HasLoadedClanAccountID(r.clanInfo.clanid)))
          )
            return H.createElement(
              Ut,
              Object(z.a)({ calendarEvent: a, partnerEventStore: t }, n)
            );
          var r,
            o = t.GetClanEventModel(a.unique_id);
          return H.createElement(
            Nt,
            Object(z.a)({ eventModel: o, calendarEvent: a }, n)
          );
        }),
        Wt = a("mZMQ"),
        qt = (a("hmtA"), a("dgee")),
        Zt = a.n(qt),
        Yt = a("SS32"),
        Qt = a("lypr"),
        Jt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.showArrows,
                t = this.props.visibleSlides,
                a = this.props.totalSlides,
                n = this.props.currentSlide;
              if (a <= t) return null;
              var r = (100 * n) / a,
                o = 100 * (1 - Math.min(n + t, a) / a),
                i = r + (50 * t) / a,
                l = 100 - i;
              return H.createElement(
                "div",
                { className: Yt.pipScrollerContainer },
                e &&
                  H.createElement(
                    Wt.a,
                    {
                      className: Object(W.a)(
                        Yt.pipScrollButton,
                        Yt.left,
                        Yt.carouselNavButton
                      )
                    },
                    H.createElement(R.r, null)
                  ),
                H.createElement(
                  "div",
                  { className: Yt.pipScroller },
                  H.createElement("div", { className: Yt.scrollBackground }),
                  H.createElement("div", {
                    className: Yt.scrollForeground,
                    style: { left: r + "%", right: o + "%" }
                  }),
                  H.createElement(
                    "div",
                    {
                      className: Yt.scrollNavDiv,
                      style: { left: "0%", width: i + "%" }
                    },
                    H.createElement(
                      Wt.a,
                      {
                        className: Object(W.a)(
                          Yt.carouselNavButton,
                          Yt.scrollNavButton
                        )
                      },
                      H.createElement("div", null)
                    )
                  ),
                  H.createElement(
                    "div",
                    {
                      className: Yt.scrollNavDiv,
                      style: { right: "0%", width: l + "%" }
                    },
                    H.createElement(
                      Wt.b,
                      {
                        className: Object(W.a)(
                          Yt.carouselNavButton,
                          Yt.scrollNavButton
                        )
                      },
                      H.createElement("div", null)
                    )
                  )
                ),
                e &&
                  H.createElement(
                    Wt.b,
                    {
                      className: Object(W.a)(
                        Yt.pipScrollButton,
                        Yt.right,
                        Yt.carouselNavButton
                      )
                    },
                    H.createElement(R.r, null)
                  )
              );
            }),
            t
          );
        })(H.Component),
        Kt = Object(Wt.g)(Jt, function(e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides
          };
        }),
        Xt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.GetNumElements = function() {
              return H.Children.count(this.props.children);
            }),
            (t.prototype.GetPageSize = function() {
              return Math.min(
                this.GetNumElements(),
                this.props.visibleElements
              );
            }),
            (t.prototype.RenderChildren = function() {
              var n = this,
                r = this.GetPageSize();
              return H.Children.map(this.props.children, function(e, t) {
                var a =
                  n.props.bLazyRenderChildren && r <= t
                    ? H.createElement(
                        $e.a,
                        { rootMargin: "0px 100% 0px 100%", bHorizontal: !0 },
                        e
                      )
                    : e;
                return H.createElement(
                  Wt.e,
                  { key: "slide_" + t, index: t },
                  a
                );
              });
            }),
            (t.prototype.RenderBreadcrumbs = function(a) {
              return H.Children.map(this.props.children, function(e, t) {
                return t % a != 0
                  ? null
                  : H.createElement(
                      Wt.d,
                      { slide: t, className: Yt.pip },
                      H.createElement("img", { src: Zt.a })
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
                H.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      Yt.carouselBody,
                      this.props.className
                    )
                  },
                  H.createElement(
                    Wt.c,
                    {
                      visibleSlides: this.props.visibleElements,
                      totalSlides: this.GetNumElements(),
                      naturalSlideWidth: 100 * o,
                      naturalSlideHeight: 100,
                      step: this.props.visibleElements,
                      infinite: !this.props.disableEdgeWrap,
                      isIntrinsicHeight: i
                    },
                    H.createElement(
                      "div",
                      { className: Yt.sliderBody },
                      !n &&
                        H.createElement(
                          Wt.a,
                          {
                            className: Object(W.a)(
                              Yt.carouselBtnCtn,
                              Yt.left,
                              Yt.carouselNavButton
                            )
                          },
                          H.createElement(R.r, null)
                        ),
                      H.createElement(
                        Wt.f,
                        { className: Qt.a.GetScrollableClassname() },
                        this.RenderChildren()
                      ),
                      !n &&
                        H.createElement(
                          Wt.b,
                          {
                            className: Object(W.a)(
                              Yt.carouselBtnCtn,
                              Yt.right,
                              Yt.carouselNavButton
                            )
                          },
                          H.createElement(R.r, null)
                        )
                    ),
                    !r &&
                      (this.props.useTestScrollbar
                        ? H.createElement(Kt, { showArrows: n })
                        : H.createElement(
                            "div",
                            { className: Yt.breadcrumbContainer },
                            this.RenderBreadcrumbs(t)
                          ))
                  )
                )
              );
            }),
            t
          );
        })(H.Component),
        $t = a("90oc"),
        ea = a.n($t),
        ta = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.rgCalendarItems,
                a = e.bSuppressHoverEffects,
                n = e.strMultipleSourceTitle;
              if (!t || 0 == t.length) return null;
              var r = t[0];
              if (
                !t.every(function(e) {
                  return e.appid === r.appid && e.clanid === r.clanid;
                })
              )
                return n
                  ? H.createElement(
                      "div",
                      { className: ea.a.EventTileCarouselTitleContainer },
                      H.createElement(
                        "div",
                        { className: ea.a.EventTileCarouselTextTitle },
                        n
                      )
                    )
                  : null;
              var o = Boolean(0 === r.appid && Y.i.accountid);
              return H.createElement(
                "div",
                { className: ea.a.EventTileCarouselTitleContainer },
                H.createElement(
                  "div",
                  { className: ea.a.EventTileCarouselTitle },
                  H.createElement(fa, {
                    calendarItem: r,
                    bSuppressHoverEffects: a
                  })
                ),
                o &&
                  H.createElement(
                    "div",
                    { className: ea.a.EventTileCarouselFollow },
                    H.createElement(ee.c, { clanAccountID: r.clanid })
                  )
              );
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        aa = (function(t) {
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
            Object(z.d)(e, t),
            ((a = e).prototype.componentDidMount = function() {
              window.addEventListener("resize", this.OnResize);
            }),
            (e.prototype.componentWillUnmount = function() {
              window.removeEventListener("resize", this.OnResize);
            }),
            (e.IsWideScreen = function() {
              return 910 <= window.innerWidth;
            }),
            (e.prototype.GetMaxCapsulesPerRow = function() {
              return a.IsWideScreen() ? 3 : 700 < window.innerWidth ? 2 : 1;
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
                r = e.bHideGameTitle,
                o = e.strMultipleSourceTitle;
              if (!t || 0 == t.length) return null;
              var i = t.map(function(e) {
                return H.createElement(Vt, {
                  key: "ht-" + e.unique_id,
                  calendarEvent: e,
                  partnerEventStore: M.c,
                  fnOnClicked: a,
                  bSuppressHoverEffects: n,
                  mode: 1 < t.length ? "carousel" : "wide",
                  bHideGameTitle: r
                });
              });
              return H.createElement(
                "div",
                { className: ea.a.CalendarRow },
                H.createElement(ta, {
                  rgCalendarItems: t,
                  bSuppressHoverEffects: n,
                  strMultipleSourceTitle: o
                }),
                H.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      ea.a.EventTileCarousel,
                      "EventTileCarouselCtn"
                    )
                  },
                  H.createElement(
                    Xt,
                    {
                      hideArrows: !0,
                      visibleElements: Math.min(
                        this.state.nMaxCapsulesPerRow,
                        this.props.rgCalendarItems.length
                      ),
                      className: ea.a.HorizontalTiles,
                      useTestScrollbar: !0,
                      bLazyRenderChildren: !0,
                      disableEdgeWrap: !0
                    },
                    i
                  )
                )
              );
            }),
            Object(z.c)([s.a], e.prototype, "OnResize", null),
            (e = a = Object(z.c)([r.a], e))
          );
        })(H.Component),
        na = a("2rGr"),
        ra = a.n(na),
        oa = a("BFsE"),
        ia = "global_header";
      function la() {
        var e = document.getElementById(ia);
        if (e && "none" != getComputedStyle(e).display) return e;
        var t = document.getElementsByClassName("responsive_header");
        return (
          Object(C.a)(t.length <= 1, "Must have at most one responsive_header"),
          1 != t.length ? null : t[0]
        );
      }
      function sa() {
        var e = la();
        return e && e.id != ia;
      }
      function ca() {
        return window.innerWidth < parseInt(_e.a.strMaxMobileWidth);
      }
      function ua() {
        return (
          sa() ||
          window.innerWidth <
            parseInt(_e.a.strDesktopControlBarWidth) +
              parseInt(_e.a.strMaxMobileWidth)
        );
      }
      var da,
        pa,
        ma = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUserIsLoggedIn: Y.i.logged_in,
                nVisibleHeight: 0,
                nScrollTop: 0,
                bControlBarIsCollapsed: ua(),
                bControlBarWasOpenedByUser: !1,
                nDisappearingHeaderTop: 0,
                nSteamNavHeaderHeight: 0,
                nMobileNavBannerHeight: 0,
                nHubBannerHeight: 0,
                nGroupHeaderHeight: 0,
                nLogInBannerHeight: 0,
                nAccumScrollUp: 0,
                nAccumScrollDown: 0
              }),
              (e.m_refControlBar = H.createRef()),
              (e.m_cancelSignal = T.a.CancelToken.source()),
              e
            );
          }
          var u;
          return (
            Object(z.d)(e, t),
            ((u = e).prototype.componentDidMount = function() {
              this.InitEventCalendarStore(),
                this.UpdateDocumentUI(),
                window.addEventListener("resize", this.OnResize),
                window.addEventListener("scroll", this.OnScroll),
                this.setState({ nVisibleHeight: window.innerHeight }),
                window.scrollTo(0, 0),
                this.UpdateEventControlLocationAndVisibility();
            }),
            (e.prototype.componentDidUpdate = function(e, t) {
              (t.bUserIsLoggedIn == this.state.bUserIsLoggedIn &&
                JSON.stringify(e.filter_to_appids) ==
                  JSON.stringify(this.props.filter_to_appids) &&
                JSON.stringify(e.filter_to_clanids) ==
                  JSON.stringify(this.props.filter_to_clanids) &&
                e.filter_to_collection === this.props.filter_to_collection &&
                e.filter_to_saleid === this.props.filter_to_saleid) ||
                (window.scrollTo(0, 0), this.InitEventCalendarStore()),
                this.UpdateDocumentUI(),
                this.LoadEventToShowAsModal(),
                this.UpdateEventControlLocationAndVisibility();
            }),
            (e.prototype.UpdateEventControlLocationAndVisibility = function() {
              var e,
                t = this;
              !this.props.location ||
                ((("desktop_navigation" !=
                  (e = Ae.Get().UpdateLocation(function() {
                    return t.props.history;
                  }, this.props.location)) &&
                  this.state.bControlBarIsCollapsed) ||
                  ("desktop_navigation" == e &&
                    !this.state.bControlBarIsCollapsed &&
                    sa())) &&
                  this.ToggleControlBarCollapsed());
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("component unmounted"),
                window.removeEventListener("resize", this.OnResize),
                window.removeEventListener("scroll", this.OnScroll),
                this.UpdateBodyScrollState(!0);
              var e = la();
              e && (e.style.transform = "");
            }),
            (e.prototype.GetCurrentHubBannerHeight = function(e) {
              var t,
                a,
                n = e && !ca();
              return Object(O.b)().GetCollectionID()
                ? (function(t, e) {
                    if (!t) return 0;
                    var a = dt.find(function(e) {
                      return e.collection === t;
                    });
                    return a ? (e ? a.largeHeight : a.smallHeight) : 0;
                  })(Object(O.b)().GetCollectionID(), n)
                : Object(O.b)().BIsSaleCalendar()
                ? ((t = Object(O.b)().GetSaleID()),
                  (a = n),
                  t && M.c.GetClanEventModel(t)
                    ? a
                      ? Number(lt.a.simpleTitleLargeHeight)
                      : Number(lt.a.simpleTitleSmallHeight)
                    : 0)
                : Object(O.b)().BIsSingleSourceCalendar()
                ? parseInt(
                    n
                      ? _e.a.strJumboHubBannerHeight
                      : _e.a.strDesktopHubBannerHeight
                  ) - 1
                : 0;
            }),
            (e.prototype.BShowLogInBanner = function() {
              return Boolean(
                !this.state.bUserIsLoggedIn && Object(O.b)().BIsGlobalCalendar()
              );
            }),
            (e.prototype.GetCurrentHeaderHeights = function(e) {
              var t = sa(),
                a = ca(),
                n = 0;
              la() &&
                ((n = parseInt(
                  t
                    ? _e.a.strMobileGlobalHeaderHeight
                    : _e.a.strDesktopGlobalHeaderHeight
                )),
                --n);
              var r =
                  parseInt(
                    a
                      ? _e.a.strMobileGroupHeaderHeight
                      : _e.a.strDesktopGroupHeaderHeight
                  ) - 1,
                o = (t ? parseInt(_e.a.strMobileNavBannerHeight) : 0) - 1,
                i = this.GetCurrentHubBannerHeight(e),
                l = 0;
              return (
                this.BShowLogInBanner() &&
                  (l =
                    e && !a
                      ? parseInt(_e.a.strLogInBannerLargeHeight)
                      : parseInt(_e.a.strLogInBannerSmallHeight)),
                {
                  nSteamNavHeaderHeight: n,
                  nMobileNavBannerHeight: o,
                  nHubBannerHeight: i,
                  nGroupHeaderHeight: r,
                  nLogInBannerHeight: l
                }
              );
            }),
            (e.prototype.LoadEventToShowAsModal = function() {
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return ((t = Te(this.props.location, "emclan")),
                      (a = Te(this.props.location, "emgid")),
                      t && a)
                        ? ((n = new f.a(t)),
                          this.state.modalEvent &&
                          this.state.modalEvent.clanSteamID.ConvertTo64BitString() ==
                            n.ConvertTo64BitString() &&
                          this.state.modalEvent.GID == a
                            ? [2]
                            : [
                                4,
                                M.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
              var e = Te(this.props.location, "upcoming");
              return e && "false" != e;
            }),
            (e.prototype.BShowUpdatesOnly = function() {
              return !(
                !this.props.filter_to_appids ||
                1 != this.props.filter_to_appids.length ||
                "true" != Te(this.props.location, "updates")
              );
            }),
            (e.prototype.UpdateDocumentUI = function() {
              var e,
                t,
                a,
                n,
                r,
                o,
                i,
                l,
                s,
                c,
                u,
                d,
                p = Object(O.b)();
              p.BIsGlobalCalendar()
                ? (r =
                    null !==
                      (e =
                        null ==
                        (l = Object(w.b)(
                          this.BShowFutureView() ? w.a.Upcoming : w.a.Default
                        ))
                          ? void 0
                          : l.strHeaderTitle) && void 0 !== e
                      ? e
                      : null == l
                      ? void 0
                      : l.strName)
                : p.BIsSingleAppCalendar()
                ? (r =
                    (c =
                      (o = p.GetSingleAppID()) &&
                      _.a.GetStoreCapsuleInfo(o).GetAppStoreData()) && c.title)
                : p.BIsSingleGroupCalendar()
                ? (r =
                    (d =
                      (u = p.GetSingleGroupID()) &&
                      E.a.GetClanInfoByClanAccountID(u)) && d.group_name)
                : p.BIsCollectionCalendar()
                ? ((i = p.GetCollectionID()),
                  (r =
                    null !==
                      (t =
                        null == (l = Object(w.b)(i))
                          ? void 0
                          : l.strHeaderTitle) && void 0 !== t
                      ? t
                      : null == l
                      ? void 0
                      : l.strName))
                : !p.BIsSaleCalendar() ||
                  ((s = M.c.GetClanEventModel(p.GetSaleID())) &&
                    ((r = s.appid
                      ? (c = _.a
                          .GetStoreCapsuleInfo(s.appid)
                          .GetAppStoreData()) && c.title
                      : (d =
                          (u =
                            null === (a = s.clanSteamID) || void 0 === a
                              ? void 0
                              : a.GetAccountID()) &&
                          E.a.GetClanInfoByClanAccountID(u)) && d.group_name),
                    (n =
                      s && s.GetNameWithFallback(Object(A.g)(Y.c.LANGUAGE)))));
              var m = Object(Z.f)("#EventCalendar_TabTitle_Global");
              r &&
                (m = n
                  ? Object(Z.f)(
                      "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                      r,
                      n
                    )
                  : Object(Z.f)("#EventCalendar_TabTitle_GroupHub", r)),
                document.title != m && (document.title = m),
                document.body.classList.contains("events_hub") ||
                  document.body.classList.add("events_hub");
            }),
            (e.prototype.OnResize = function() {
              var r = this;
              this.setState(function(e) {
                var t = window.innerHeight,
                  a = !e.bControlBarWasOpenedByUser && ua(),
                  n = r.GetCurrentHeaderHeights(r.state.nScrollTop <= 0);
                return (
                  r.UpdateBodyScrollState(a),
                  Object(z.a)(
                    { nVisibleHeight: t, bControlBarIsCollapsed: a },
                    n
                  )
                );
              });
            }),
            (e.prototype.OnScroll = function() {
              var m = this,
                v = Math.round(window.scrollY);
              this.setState(function(e) {
                var t,
                  a = e.nScrollTop <= 0,
                  n = v <= 0,
                  r = e.nHubBannerHeight,
                  o = e.nLogInBannerHeight;
                a != n &&
                  ((r = (t = m.GetCurrentHeaderHeights(n)).nHubBannerHeight),
                  (o = t.nLogInBannerHeight));
                var i = v - e.nScrollTop,
                  l = Math.max(0, e.nAccumScrollUp - i),
                  s = Math.max(0, e.nAccumScrollDown + i),
                  c = e.nDisappearingHeaderTop,
                  u = e.nDisappearingHeaderTop < 0;
                80 < s && (u = !(s = l = 0)),
                  (100 < l || n) && ((s = l = 0), (u = !1)),
                  m.state.bControlBarIsCollapsed || (u = !1),
                  e.modalEvent && (u = !0);
                var d,
                  p = e.nSteamNavHeaderHeight + r + e.nMobileNavBannerHeight;
                return (
                  (c = u ? -1 * p : 0) === e.nDisappearingHeaderTop ||
                    ((d = la()) &&
                      (d.style.transform = "translateY(" + c + "px)")),
                  {
                    nScrollTop: v,
                    nAccumScrollUp: l,
                    nAccumScrollDown: s,
                    nDisappearingHeaderTop: c,
                    nHubBannerHeight: r,
                    nLogInBannerHeight: o
                  }
                );
              });
            }),
            (e.prototype.InitEventCalendarStore = function() {
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = {
                          appids: this.props.filter_to_appids,
                          clanaccountids: this.props.filter_to_clanids,
                          collectionid: this.props.filter_to_collection,
                          saleid: this.props.filter_to_saleid
                        }),
                        (a = Object(O.c)(t)),
                        (n = Object(O.b)()),
                        p.a.Get(),
                        (r = Boolean(
                          this.state.bUserIsLoggedIn && Y.i.accountid
                        )),
                        (o = n.BIsGlobalCalendar() && r ? "local" : "session"),
                        (i = n.BIsGlobalCalendar() ? "U" + Y.i.accountid : a),
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
                        u.m_bInitialLoad &&
                          ((s = Object(Y.f)(
                            "metadatainfo",
                            "application_config"
                          )),
                          n.SetCollectionMetaData(
                            n.ValidateCollectionMetadata(s) ? s : null
                          )),
                        (c =
                          u.m_bInitialLoad &&
                          Object(Y.f)("initialEvents", "application_config"))
                          ? [4, n.RegisterCalendarEventsAndModels(c)]
                          : [3, 2]
                      );
                    case 1:
                      return e.sent(), (u.m_bInitialLoad = !1), [3, 4];
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
                            : E.a.LoadClanInfoForClanSteamID(
                                f.a.InitFromClanID(n.GetSingleGroupID())
                              )),
                        this.OnResize(),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.UpdateBodyScrollState = function(e) {
              var t = !e && sa(),
                a = document.body;
              a &&
                (t
                  ? a.classList.add(_e.a.BodyNoScroll)
                  : a.classList.remove(_e.a.BodyNoScroll));
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
                  r = la();
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
              var e = la();
              e &&
                (e.style.transform =
                  "translateY(" + this.state.nDisappearingHeaderTop + "px)"),
                "PUSH" === this.props.history.action
                  ? this.props.history.goBack()
                  : ke(this.props.history, { emclan: void 0, emgid: void 0 });
            }),
            (e.prototype.OnEventClicked = function(e) {
              U.a.Get().RecordEventRead(e, 8);
              var t,
                a =
                  this.state.nSteamNavHeaderHeight +
                  this.state.nHubBannerHeight +
                  this.state.nMobileNavBannerHeight,
                n = la();
              n && (n.style.transform = "translateY(" + -1 * a + "px)"),
                B.a.bOpenEventLandingPage
                  ? ((t = Object(Ce.d)(e, Ce.a.k_eStoreView, "allowRelative")),
                    this.props.history.push(t))
                  : ke(this.props.history, {
                      emclan: e.clanSteamID.ConvertTo64BitString(),
                      emgid: e.GID
                    });
            }),
            (e.prototype.ToggleFutureView = function() {
              je(
                this.props.history,
                "upcoming",
                this.BShowFutureView() ? "false" : "true"
              );
            }),
            (e.prototype.ResetAllFilters = function() {
              je(this.props.history, "updates", void 0),
                Object(O.b)().m_visibilityStore.InitDefaultCheckboxes(
                  this.state.bUserIsLoggedIn,
                  !1
                );
            }),
            (e.prototype.BRequireLoggedInUser = function() {
              return !(
                this.props.filter_to_appids ||
                this.props.filter_to_clanids ||
                this.props.filter_to_collection ||
                this.props.filter_to_saleid
              );
            }),
            (e.prototype.render = function() {
              var e =
                  this.state.nSteamNavHeaderHeight +
                  this.state.nHubBannerHeight +
                  this.state.nMobileNavBannerHeight +
                  this.state.nLogInBannerHeight,
                t =
                  this.state.nDisappearingHeaderTop +
                  this.state.nSteamNavHeaderHeight,
                a = t + this.state.nMobileNavBannerHeight,
                n = a + this.state.nLogInBannerHeight,
                r =
                  this.state.nVisibleHeight <=
                  parseInt(_e.a.strMinMobileHeight),
                o = r
                  ? 0
                  : this.state.nDisappearingHeaderTop +
                    this.state.nSteamNavHeaderHeight,
                i = r ? 0 : this.state.nDisappearingHeaderTop + e,
                l = Object(O.b)().m_visibilityStore.BAreAnyEventsFiltered(
                  this.state.bUserIsLoggedIn
                )
                  ? this.ResetAllFilters
                  : null;
              return H.createElement(
                H.Fragment,
                null,
                H.createElement(
                  "div",
                  { className: _e.a.EventCalendarContainer },
                  H.createElement(
                    y.a,
                    null,
                    this.state.modalEvent
                      ? H.createElement(ue, {
                          appid: this.state.modalEvent.appid,
                          trackingLocation: 8,
                          announcementGID: this.state.modalEvent.GetAnnouncementGID(),
                          partnerEventStore: M.c,
                          eventModel: this.state.modalEvent,
                          showAppHeader: !0,
                          closeModal: this.CloseEventModal
                        })
                      : null
                  ),
                  H.createElement(
                    y.a,
                    null,
                    H.createElement(Me, {
                      ref: this.m_refControlBar,
                      bUserIsLoggedIn: this.state.bUserIsLoggedIn,
                      nDisappearingHeaderVisibleHeight: o,
                      bIsCollapsed: this.state.bControlBarIsCollapsed,
                      bShowUpcoming: this.BShowFutureView(),
                      bShouldIncludeLegalFooter: !sa(),
                      fnToggleCollapsed: this.ToggleControlBarCollapsed,
                      fnOnFilterChange: this.OnControlBarChange
                    })
                  ),
                  H.createElement(
                    y.a,
                    null,
                    H.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          _e.a.ReserveControlSpace,
                          !this.state.bControlBarIsCollapsed &&
                            _e.a.WideLeftGutter
                        )
                      },
                      H.createElement(
                        y.a,
                        null,
                        0 < this.state.nLogInBannerHeight &&
                          H.createElement(Oa, {
                            nTopOffset: a,
                            bLargeMode: this.state.nScrollTop <= 0 && !ca()
                          })
                      ),
                      H.createElement(
                        y.a,
                        null,
                        0 < this.state.nMobileNavBannerHeight &&
                          H.createElement(Je, {
                            bIsUpcoming: this.BShowFutureView(),
                            nTopOffset: t,
                            fnToggleCollapsed: this.MobileNavOpenSettings
                          }),
                        H.createElement(ha, {
                          nTopOffset: n,
                          bLargeMode: this.state.nScrollTop <= 0 && !ca()
                        })
                      ),
                      H.createElement(
                        y.a,
                        null,
                        H.createElement(_a, {
                          bShowFutureViewOnly: this.BShowFutureView(),
                          bShowUpdatesOnly: this.BShowUpdatesOnly(),
                          fnOnEventClick: this.OnEventClicked,
                          fnToggleSeeFuture: this.ToggleFutureView,
                          fnResetFilters: l,
                          nVisibleHeight: this.state.nVisibleHeight,
                          nScrollTop: this.state.nScrollTop,
                          nDisappearingHeaderVisibleHeight: i,
                          bUserIsLoggedIn: Boolean(
                            this.state.bUserIsLoggedIn && Y.i.accountid
                          )
                        })
                      )
                    )
                  )
                )
              );
            }),
            (e.m_bInitialLoad = !0),
            Object(z.c)([s.a], e.prototype, "OnResize", null),
            Object(z.c)([s.a], e.prototype, "OnScroll", null),
            Object(z.c)([s.a], e.prototype, "MobileNavOpenSettings", null),
            Object(z.c)([s.a], e.prototype, "ToggleControlBarCollapsed", null),
            Object(z.c)([s.a], e.prototype, "OnControlBarChange", null),
            Object(z.c)([s.a], e.prototype, "CloseEventModal", null),
            Object(z.c)([s.a], e.prototype, "OnEventClicked", null),
            Object(z.c)([s.a], e.prototype, "ToggleFutureView", null),
            Object(z.c)([s.a], e.prototype, "ResetAllFilters", null),
            (e = u = Object(z.c)([r.a], e))
          );
        })(H.Component),
        va = Object(i.i)(ma),
        ha = Object(r.a)(function(e) {
          var n = Object(O.b)(),
            t = n.BHasCollectionMetaData(),
            a = H.useState(!1),
            r = a[0],
            o = a[1];
          if (
            (H.useEffect(
              function() {
                t &&
                  !M.c.GetClanEventModel(
                    n.GetCollectionMetaData().clan_event_gid
                  ) &&
                  (o(!0),
                  Object(z.b)(void 0, void 0, void 0, function() {
                    var t, a;
                    return Object(z.e)(this, function(e) {
                      switch (e.label) {
                        case 0:
                          return (
                            (t = n.GetCollectionMetaData()),
                            (a = f.a.InitFromClanID(t.clanid)),
                            [
                              4,
                              M.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                                a,
                                t.clan_event_gid,
                                0
                              )
                            ]
                          );
                        case 1:
                          return e.sent(), o(!1), [2];
                      }
                    });
                  }));
              },
              [n, t]
            ),
            n.GetCollectionID())
          ) {
            var i,
              l,
              s = void 0,
              c = void 0;
            if (
              (!t ||
                r ||
                ((i = M.c.GetClanEventModel(
                  n.GetCollectionMetaData().clan_event_gid
                )) &&
                  ((s = i.GetImageURLWithFallback(
                    "capsule",
                    Object(A.g)(Y.c.LANGUAGE),
                    N.c.capsule_main
                  )),
                  (c = i.GetSaleURL()))),
              !(l = (function(t, e, a, n) {
                if (!t) return null;
                var r = dt.find(function(e) {
                  return e.collection === t;
                });
                return r ? r.component(e, a, n) : null;
              })(n.GetCollectionID(), e.bLargeMode, s, c)))
            )
              return null;
            var u = Object(W.a)(_e.a.HubBanner, tt.a.WideBanner);
            return H.createElement(
              "div",
              {
                style: { transform: "translateY(" + e.nTopOffset + "px)" },
                className: u
              },
              l
            );
          }
          if (n.BIsSaleCalendar()) {
            if (
              !(l = (function(e, t) {
                if (!e) return null;
                var a = M.c.GetClanEventModel(e);
                if (!a) return null;
                var n = Object(A.g)(Y.c.LANGUAGE);
                return H.createElement(Qe, {
                  largeHeader: t,
                  titleToken: a.GetNameWithFallback(n),
                  subtitleToken: a.GetSubTitleWithSummaryFallback(n),
                  headerImg: a.GetImageURLWithFallback(
                    "capsule",
                    n,
                    N.c.capsule_main
                  )
                });
              })(n.GetSaleID(), e.bLargeMode))
            )
              return null;
            u = Object(W.a)(_e.a.HubBanner, tt.a.WideBanner);
            return H.createElement(
              "div",
              {
                style: { transform: "translateY(" + e.nTopOffset + "px)" },
                className: u
              },
              l
            );
          }
          if (n.BIsSingleSourceCalendar()) {
            var d = n.BIsSingleAppCalendar() ? n.GetSingleAppID() : void 0,
              p = n.BIsSingleGroupCalendar() ? n.GetSingleGroupID() : void 0,
              u = Object(W.a)(
                _e.a.HubBanner,
                tt.a.WideBanner,
                e.bLargeMode && _e.a.LargeMode,
                e.bLargeMode && tt.a.TallBanner
              );
            return H.createElement(
              "div",
              {
                style: { transform: "translateY(" + e.nTopOffset + "px)" },
                className: u
              },
              H.createElement(oe.b, { appId: d, clanId: p, bShowRSSFeed: !0 })
            );
          }
          return null;
        }),
        _a = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.GetCurrentSectionLayout = function() {
              var n = 0;
              return Object(O.b)()
                .GetCalendarSections(this.props.bShowFutureViewOnly)
                .map(function(e) {
                  var t = Math.max(n, e.nTopOffset),
                    a = t + e.nRenderedHeight;
                  return (n = a), { section: e, nTopOfSection: t };
                });
            }),
            (t.prototype.GetMergeEventsType = function() {
              var e = Object(O.b)(),
                t = e.GetCollectionID();
              return e.BIsSingleSourceCalendar() || t === w.a.Steam
                ? "none"
                : !e.BIsShowingFeaturedFeed() && t
                ? "samesource"
                : "full";
            }),
            (t.prototype.GetCuratorSuggestionSettings = function(e) {
              if (Y.i.accountid && Y.c.EREALM !== v.e.k_ESteamRealmChina)
                if (e.BIsGlobalCalendar() && !this.props.bShowFutureViewOnly) {
                  if (e.m_visibilityStore.BIsGameSourceAllowed(d.c.k_ECurator))
                    return {
                      nInlineOffset: 1e3,
                      bInlineDismissable: !0,
                      bShowAtEnd: !0
                    };
                } else if (e.GetCollectionID() === w.a.Press)
                  return {
                    nInlineOffset: 1e3,
                    bInlineDismissable: !1,
                    bShowAtEnd: !1
                  };
              return {
                nInlineOffset: void 0,
                bInlineDismissable: !1,
                bShowAtEnd: !1
              };
            }),
            (t.prototype.render = function() {
              var m = this,
                e = Object(O.b)(),
                t = this.props,
                v = t.bShowFutureViewOnly,
                a = t.bShowUpdatesOnly,
                h = t.fnOnEventClick,
                _ = t.fnToggleSeeFuture,
                n = t.fnResetFilters,
                r = t.nScrollTop,
                o = t.nDisappearingHeaderVisibleHeight,
                i = e.GetCalendarSections(v);
              if (0 == i.length) return null;
              var b = ca(),
                l = e.m_visibilityStore.BAreAllEventsHidden(),
                g = r,
                f = !0,
                E = this.GetCuratorSuggestionSettings(e),
                y = void 0,
                s = l
                  ? []
                  : this.GetCurrentSectionLayout().map(function(e, t) {
                      var a = e.section,
                        n = e.nTopOfSection,
                        r = a.strId,
                        o = a.strSectionLabel,
                        i = a.rtSectionStart,
                        l = a.rtSectionEnd,
                        s = a.bIsFutureSection,
                        c = a.nRenderedHeight,
                        u = n < g,
                        d = Object(W.a)(
                          _e.a.PastSection,
                          f && _e.a.DarkerBackground
                        );
                      0 < c &&
                        ((f = !f),
                        void 0 !== E.nInlineOffset &&
                          n >= E.nInlineOffset &&
                          void 0 === y &&
                          (y = t));
                      var p = !v && s;
                      return H.createElement(
                        $e.a,
                        {
                          key: r,
                          className: _e.a.LazyCalendarSectionCtn,
                          placeholderHeight: c,
                          rootMargin: "100% 0px 100% 0px"
                        },
                        H.createElement(Sa, {
                          bRenderStickyHeader: u,
                          strSectionLabel: o,
                          rtSectionStart: i,
                          rtSectionEnd: l,
                          strSectionClassname: d,
                          bUseHorizontalLayout: p,
                          fnOnSeeFutureClick: _,
                          bShowEarliestFirst: v || p,
                          section: a,
                          fnOnEventClick: h,
                          bSuppressHoverEffects: b,
                          strMergeEvents: m.GetMergeEventsType()
                        })
                      );
                    });
              void 0 !== y &&
                s.splice(
                  y,
                  0,
                  H.createElement(ot, {
                    key: "CuratorSuggestions",
                    bCanDismiss: E.bInlineDismissable
                  })
                ),
                e.GetCollectionID() === w.a.Press &&
                  s.splice(
                    0,
                    0,
                    H.createElement(zt, { key: "LanguageFeedRow" })
                  );
              var c = i[0].rtSectionStart,
                u = Object(O.b)().GetCurrentlyLoadedEventCount(0, c),
                d = Object(O.b)().GetCurrentlyLoadedEventCount(c),
                p =
                  u &&
                  (u.nCount
                    ? "#EventCalendar_NoMorePastEvents"
                    : "#EventCalendar_NoPastEvents"),
                S =
                  n &&
                  H.createElement(
                    I.a,
                    {
                      key: "link-back",
                      toolTipContent: Object(Z.f)(
                        "#EventCalendar_ResetFilters_ttip"
                      ),
                      className: Object(W.a)(_e.a.BackToThePast, _e.a.NoCount),
                      onClick: n
                    },
                    Object(Z.f)("#EventCalendar_ResetFiltersButton")
                  );
              v
                ? ((p =
                    d &&
                    (d.nCount
                      ? "#EventCalendar_NoMoreFutureEvents"
                      : "#EventCalendar_NoFutureEvents")),
                  (S =
                    u &&
                    H.createElement(
                      "div",
                      {
                        key: "link-back",
                        className: _e.a.BackToThePast,
                        onClick: _
                      },
                      Object(Z.f)("#EventCalendar_PastEventsLink"),
                      H.createElement(
                        "span",
                        { className: _e.a.SeeAllCount },
                        u.nCount + (u.bIsComplete ? "" : "+")
                      )
                    )))
                : a &&
                  (p =
                    u &&
                    (u.nCount
                      ? "#EventCalendar_NoMorePastUpdates"
                      : "#EventCalendar_NoPastUpdates"));
              var C = null;
              return (
                e.BHitEventHorizon(v ? "forward" : "backward") &&
                  (C = H.createElement(
                    H.Fragment,
                    null,
                    H.createElement(
                      "div",
                      {
                        key: "no-more-events",
                        className: Object(W.a)(_e.a.EndOfRows, _e.a.CalendarRow)
                      },
                      H.createElement(
                        "div",
                        { className: _e.a.NoMoreRows },
                        " ",
                        Object(Z.f)(p),
                        " "
                      )
                    ),
                    E.bShowAtEnd &&
                      H.createElement(ot, {
                        key: "CuratorSuggestions",
                        bCanDismiss: !1
                      }),
                    S
                  )),
                H.createElement(
                  "div",
                  {
                    className: _e.a.RowContainer,
                    style: { transform: "translateY(" + (o - 1) + "px)" }
                  },
                  H.createElement(
                    "div",
                    { className: _e.a.Rows },
                    a &&
                      H.createElement(
                        "div",
                        { className: _e.a.UpdatePageBanner },
                        Object(Z.f)("#EventCalendar_UpdatesViewHeader")
                      ),
                    s,
                    C
                  )
                )
              );
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        ba = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.rgCalendarItems[0].start_time,
                t = Object(O.b)().GetCurrentlyLoadedEventCount(e);
              return this.props.rgCalendarItems.length <= 1
                ? null
                : H.createElement(
                    "div",
                    {
                      key: "see-all-link",
                      className: _e.a.MobileSeeAllink,
                      onClick: this.props.fnOnSeeFutureClick
                    },
                    Object(Z.f)("#EventCalendar_FutureEventsLink"),
                    H.createElement(
                      "span",
                      { className: _e.a.SeeAllCount },
                      t.nCount + (t.bIsComplete ? "" : "+")
                    )
                  );
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        ga = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.rgCalendarItems,
                a = e.fnOnEventClick,
                n = e.fnOnSeeFutureClick,
                r = e.bSuppressHoverEffects;
              return t && 0 != t.length
                ? H.createElement(
                    "div",
                    { className: _e.a.CalendarRow },
                    H.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          _e.a.HorizontalTileContainer,
                          "HorizontalTileCtn"
                        )
                      },
                      H.createElement(
                        "div",
                        { className: _e.a.HorizontalTiles },
                        t.map(function(e) {
                          return H.createElement(Vt, {
                            key: "ht-" + e.unique_id,
                            calendarEvent: e,
                            partnerEventStore: M.c,
                            fnOnClicked: a,
                            bSuppressHoverEffects: r,
                            mode: 1 < t.length ? "upcoming" : "wide",
                            bHideGameTitle:
                              Object(O.b)().BIsSingleSourceCalendar() &&
                              Object(O.b)().BEventMatchCalendarSingleSource(e)
                          });
                        })
                      ),
                      H.createElement(ba, {
                        rgCalendarItems: t,
                        fnOnSeeFutureClick: n
                      })
                    )
                  )
                : null;
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        fa = Object(r.a)(function(e) {
          var t = e.calendarItem,
            a = e.bSuppressHoverEffects,
            n = M.c.GetClanEventModel(t.unique_id);
          return n
            ? H.createElement(
                "div",
                { className: _e.a.EventListTitle },
                H.createElement(Mt, {
                  eventModel: n,
                  calendarEvent: t,
                  bSuppressHoverEffects: a
                })
              )
            : null;
        });
      (pa = da = da || {})[(pa.eCurators = 1)] = "eCurators";
      var Ea,
        ya,
        Sa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_ref = H.createRef()), e;
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.UpdatePositioning();
            }),
            (e.prototype.componentDidUpdate = function() {
              this.UpdatePositioning();
            }),
            (e.prototype.UpdatePositioning = function() {
              var n = this;
              this.m_ref.current &&
                Object(m.G)(function() {
                  var e = n.props.section,
                    t = n.m_ref.current.getBoundingClientRect().height;
                  e.nRenderedHeight != t && (e.nRenderedHeight = t);
                  var a = n.m_ref.current.offsetTop;
                  e.nTopOffset != a && (e.nTopOffset = a);
                });
            }),
            Object.defineProperty(e.prototype, "cachedCalendarItems", {
              get: function() {
                var e = this;
                return Object(O.b)().GetCalendarItemsInTimeRange(
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
            (e.prototype.GetCarouselGroupTitle = function(e) {
              return e.BIsShowingFeaturedFeed()
                ? Object(Z.f)("#EventCalendar_GroupTitle_FeaturedCurators")
                : e.BIsGlobalCalendar()
                ? Object(Z.f)("#EventCalendar_GroupTitle_Curators")
                : "";
            }),
            (e.prototype.GenerateKeyFromItem = function(e, t) {
              return t.GetSource() & u.a.k_eSteam || t.appid || "full" !== e
                ? t.clanid
                : da.eCurators;
            }),
            (e.prototype.RenderEventList = function(e) {
              function i(e) {
                return H.createElement(
                  "div",
                  { key: e.unique_id, className: _e.a.CalendarRow },
                  H.createElement(Vt, {
                    calendarEvent: e,
                    partnerEventStore: M.c,
                    mode: "wide",
                    fnOnClicked: l,
                    bSuppressHoverEffects: s,
                    bHideGameTitle:
                      u.BIsSingleSourceCalendar() &&
                      u.BEventMatchCalendarSingleSource(e)
                  })
                );
              }
              var t = this.props,
                l = t.fnOnEventClick,
                s = t.bSuppressHoverEffects,
                c = t.strMergeEvents,
                u = Object(O.b)();
              if ("none" === c) return e.map(i);
              for (var d = new Map(), a = 0, n = e; a < n.length; a++) {
                var r,
                  o = n[a],
                  p = this.GenerateKeyFromItem(c, o),
                  m = d.get(p);
                m ? m.push(o) : ((r = new Array()).push(o), d.set(p, r));
              }
              for (
                var v = new Array(),
                  h = new Array(),
                  _ = "full" === c ? h : v,
                  b = this,
                  g = 0,
                  f = e;
                g < f.length;
                g++
              ) {
                !(function(t) {
                  var e = b.GenerateKeyFromItem(c, t),
                    a = d.get(e);
                  if (!a) return;
                  var n,
                    r,
                    o = e === da.eCurators ? _ : v;
                  a.length < 3
                    ? o.push(i(t))
                    : ((n =
                        e === da.eCurators ? b.GetCarouselGroupTitle(u) : ""),
                      (r = !a.find(function(e) {
                        return e.clanid != t.clanid;
                      })),
                      a.sort(function(e, t) {
                        return t.score != e.score
                          ? t.score - e.score
                          : t.start_time - e.start_time;
                      }),
                      o.push(
                        H.createElement(
                          "div",
                          {
                            key: t.unique_id,
                            className: _e.a.CalendarEventListRow
                          },
                          H.createElement(
                            "div",
                            { className: _e.a.CalendarEventListContainer },
                            H.createElement(aa, {
                              key: t.unique_id,
                              rgCalendarItems: a,
                              bSuppressHoverEffects: s,
                              fnOnEventClick: l,
                              bHideGameTitle: r,
                              strMultipleSourceTitle: n
                            })
                          )
                        )
                      ),
                      d.delete(e));
                })((o = f[g]));
              }
              return v.push(h), v;
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.bRenderStickyHeader,
                a = e.strSectionLabel,
                n = e.strSectionClassname,
                r = e.bUseHorizontalLayout,
                o = e.fnOnSeeFutureClick,
                i = e.bShowEarliestFirst,
                l = e.fnOnEventClick,
                s = e.bSuppressHoverEffects,
                c = this.cachedCalendarItems,
                u = c.rgCalendarItems,
                d = c.bIsComplete;
              if (0 == u.length && d)
                return H.createElement("div", {
                  ref: this.m_ref,
                  className: n
                });
              u.length && i && (u = u.slice().reverse());
              var p = null;
              0 < u.length &&
                (p = H.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      _e.a.GroupHeader,
                      _e.a.CalendarRow,
                      t && _e.a.HeaderAtTop
                    )
                  },
                  H.createElement(
                    "div",
                    { className: _e.a.GroupHeaderTitle },
                    H.createElement("span", null, a),
                    H.createElement("div", { className: _e.a.GroupHeaderLine }),
                    r &&
                      3 < u.length &&
                      H.createElement(
                        "div",
                        { className: _e.a.SeeAllLink, onClick: o },
                        Object(Z.f)("#EventCalendar_FutureEventsLink"),
                        H.createElement(
                          "span",
                          { className: _e.a.SeeAllCount },
                          u.length + (d ? "" : "+")
                        )
                      )
                  )
                ));
              var m = null;
              return (
                (!B.a.bRequireAllEventsLoadedInTimeBlock ||
                  d ||
                  (r && 3 <= u.length)) &&
                  (m = r
                    ? H.createElement(ga, {
                        rgCalendarItems: u.slice(0, 3),
                        fnOnEventClick: l,
                        fnOnSeeFutureClick: o,
                        bSuppressHoverEffects: s
                      })
                    : this.RenderEventList(u)),
                H.createElement(
                  "div",
                  { ref: this.m_ref, className: n },
                  p,
                  m,
                  !d &&
                    !r &&
                    H.createElement(Ca, {
                      bShowEarliestFirst: this.props.bShowEarliestFirst
                    })
                )
              );
            }),
            Object(z.c)([m.n], e.prototype, "cachedCalendarItems", null),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component),
        Ca = function(e) {
          var t = Object(O.b)().GetTimeEdgeForDirection(
            e.bShowEarliestFirst ? "forward" : "backward",
            void 0
          );
          return H.createElement(
            "div",
            { className: _e.a.Loading },
            H.createElement($.a, { size: "xlarge", position: "center" }),
            t &&
              H.createElement(
                H.Fragment,
                null,
                H.createElement(
                  "div",
                  { className: _e.a.LoadingProgress },
                  Object(Z.f)(
                    "#EventCalendar_LoadEventsProgress",
                    Number(Object(O.b)().GetNumEventsLoaded()).toLocaleString(),
                    Object(Z.g)(t)
                  )
                ),
                H.createElement(
                  "div",
                  { className: _e.a.AdjustFiltersText },
                  Object(Z.f)("#EventCalendar_LoadEventsFilters")
                )
              )
          );
        },
        Oa = function(e) {
          return H.createElement(
            "div",
            {
              className: Object(W.a)(
                _e.a.LogInFeedRow,
                !e.bLargeMode && _e.a.LogInSmallMode
              ),
              style: { transform: "translateY(" + e.nTopOffset + "px)" }
            },
            H.createElement(
              "div",
              { className: _e.a.PromptCtn },
              H.createElement(
                "div",
                { className: _e.a.LogInFeedTitle },
                Object(Z.f)("#EventCalendar_SignIn_Title")
              ),
              H.createElement(
                "button",
                { onClick: oa.a, className: _e.a.LogInButton },
                Object(Z.f)("#Login_SignIn")
              ),
              H.createElement(
                "div",
                { className: _e.a.LogInFeedText },
                Object(Z.f)("#EventCalendar_SignIn_Text")
              )
            )
          );
        },
        wa = a("AXHe"),
        Ta = a("Cs6D"),
        Ia = a("f0Wu"),
        ja = ["mod_reviewed", "auto_migrated"],
        ka = (function() {
          function e() {
            (this.selectedTags = void 0),
              (this.excludedTags = void 0),
              (this.filterDate = void 0),
              (this.eventsToLoadPerPaging = 20),
              (this.filterEventTypes = void 0),
              (this.bOrderByVisibilityStartTime = !1),
              (this.bUseCustomQuery = !1);
          }
          return (
            (e.Get = function() {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.Init = function(e) {
              var t = this,
                a = we.a.parse(e.substring(1)),
                n = void 0;
              "string" == typeof a.selectedTags
                ? 0 < a.selectedTags.length &&
                  (n = [{ label: a.selectedTags, value: a.selectedTags }])
                : a.selectedTags &&
                  ((n = []),
                  a.selectedTags.forEach(function(e) {
                    return n.push({ label: e, value: e });
                  }));
              var r = !1,
                o = ja.map(function(e) {
                  return { label: e, value: e };
                });
              "string" == typeof a.excludedTags
                ? 0 < a.excludedTags.length &&
                  ((r = !0),
                  (o = [{ label: a.excludedTags, value: a.excludedTags }]))
                : a.excludedTags &&
                  ((o = []),
                  a.excludedTags.forEach(function(e) {
                    return o.push({ label: e, value: e });
                  }),
                  (r = o && 0 < o.length));
              var i,
                l = void 0;
              "string" == typeof a.eventtype
                ? 0 < a.eventtype.length &&
                  ((i = Number.parseInt(a.eventtype)),
                  (l = [{ label: Object(Ot.b)(i), value: i }]))
                : a.eventtype &&
                  ((l = []),
                  a.eventtype.forEach(function(e) {
                    var t = Number.parseInt(e);
                    l.push({ label: Object(Ot.b)(t), value: t });
                  }));
              var s = void 0;
              "string" == typeof a.filterDate &&
                0 < a.filterDate.length &&
                (s = Ia.unix(Number(a.filterDate)));
              var c = !1;
              "string" == typeof a.orderByVisibility &&
                0 < a.orderByVisibility.length &&
                (c = Boolean(a.orderByVisibility)),
                Object(m.G)(function() {
                  (t.selectedTags = n),
                    (t.excludedTags = o),
                    (t.filterEventTypes = l),
                    (t.filterDate = s),
                    (t.bOrderByVisibilityStartTime = c),
                    (t.bUseCustomQuery =
                      (n && 0 < n.length) || r || (l && 0 < l.length));
                });
            }),
            Object(z.c)([m.C], e.prototype, "selectedTags", void 0),
            Object(z.c)([m.C], e.prototype, "excludedTags", void 0),
            Object(z.c)([m.C], e.prototype, "filterDate", void 0),
            Object(z.c)([m.C], e.prototype, "filterDateAsString", void 0),
            Object(z.c)([m.C], e.prototype, "eventsToLoadPerPaging", void 0),
            Object(z.c)([m.C], e.prototype, "filterEventTypes", void 0),
            Object(z.c)(
              [m.C],
              e.prototype,
              "bOrderByVisibilityStartTime",
              void 0
            ),
            Object(z.c)([m.C], e.prototype, "bUseCustomQuery", void 0),
            e
          );
        })();
      ((ya = Ea = Ea || {})[(ya.k_ModReviewed = 0)] = "k_ModReviewed"),
        (ya[(ya.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
        (ya[(ya.k_ChangeEventType = 2)] = "k_ChangeEventType"),
        (ya[(ya.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
        (ya[(ya.k_ModReReviewed = 4)] = "k_ModReReviewed");
      function Da(e) {
        var t = H.useState(!0),
          a = t[0],
          n = t[1],
          r = e.eventModel.GetAllTags().filter(function(e) {
            return La.IsAuditAction(e);
          }),
          o = r.length,
          i = 3 < r.length && a;
        if (0 == r.length) return null;
        i && (r = r.splice(0, 3));
        var l,
          s,
          c,
          u = ((l = r),
          (s = new Array()),
          (c = e.eventModel),
          l.forEach(function(e) {
            var t = new La();
            t.FromString(e),
              s.push(
                H.createElement(
                  "div",
                  { key: c.GID + e },
                  (function(e) {
                    var t = Object(Z.k)(e.m_rtWhen),
                      a = H.createElement(xa, {
                        locToken: "#EventModTile_Moderator",
                        accountID: e.m_moderator
                      });
                    switch (e.m_action) {
                      case Ea.k_ModReviewed:
                        return H.createElement(
                          "div",
                          { className: Ra.ModeratorAuditActionCtn },
                          Object(Z.n)(
                            "#EventModTile_Action_Reviewed",
                            H.createElement("span", null, t),
                            a
                          )
                        );
                      case Ea.k_ModUnreviewed:
                        return H.createElement(
                          "div",
                          { className: Ra.ModeratorAuditActionCtn },
                          Object(Z.n)(
                            "#EventModTile_Action_UnReviewed",
                            H.createElement("span", null, t),
                            a
                          )
                        );
                      case Ea.k_ChangeEventType:
                        return H.createElement(
                          "div",
                          { className: Ra.ModeratorAuditActionCtn },
                          Object(Z.n)(
                            "#EventModTile_Action_NewEventType",
                            H.createElement("span", null, t),
                            a,
                            Object(Ot.b)(e.m_newEventType)
                          )
                        );
                      case Ea.k_UpdateSeasonTags:
                        return H.createElement(
                          "div",
                          { className: Ra.ModeratorAuditActionCtn },
                          Object(Z.n)(
                            "#EventModTile_Action_SeasonTagUpdate",
                            H.createElement("span", null, t),
                            a,
                            e.m_newTagAdded
                          )
                        );
                      default:
                        return H.createElement(
                          "div",
                          { className: Ra.ModeratorAuditActionCtn },
                          e.ToModString
                        );
                    }
                  })(t)
                )
              );
          }),
          s);
        return H.createElement(
          "div",
          null,
          H.createElement(
            "h4",
            null,
            Object(Z.f)("#EventModTile_Action_Title")
          ),
          u,
          i &&
            H.createElement(
              "a",
              {
                onClick: function() {
                  return n(!1);
                }
              },
              Object(Z.f)("#EventModTile_Action_More", o - 3)
            ),
          Boolean(!i && 3 < o) &&
            H.createElement(
              "a",
              {
                onClick: function() {
                  return n(!0);
                }
              },
              Object(Z.f)("#EventModTile_Action_Hide")
            )
        );
      }
      var Ga = "ModAct",
        La = (function() {
          function e() {}
          return (
            (e.prototype.ToModString = function() {
              var e =
                Ga +
                "_" +
                this.m_moderator +
                "_" +
                Math.floor(this.m_rtWhen) +
                "_" +
                this.m_action;
              switch (this.m_action) {
                case Ea.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case Ea.k_UpdateSeasonTags:
                  e += "_" + this.m_newTagAdded;
              }
              return e;
            }),
            (e.prototype.FromString = function(e) {
              var t = e.split("_");
              if (!t || t[0] !== Ga) return !1;
              switch (
                ((this.m_moderator = Number(t[1])),
                (this.m_rtWhen = Number(t[2])),
                (this.m_action = Number(t[3])),
                this.m_action)
              ) {
                case Ea.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case Ea.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function(e) {
              return (
                (this.m_moderator = Y.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = Ea.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function(e) {
              return (
                (this.m_moderator = Y.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? Ea.k_ModReviewed : Ea.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function(e) {
              return (
                (this.m_moderator = Y.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? Ea.k_ModReReviewed : Ea.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function(e) {
              return e.startsWith(Ga);
            }),
            (e.prototype.SetUpdateSeasonalTags = function(e) {
              return (
                (this.m_moderator = Y.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = Ea.k_UpdateSeasonTags),
                (this.m_newTagAdded = e),
                this
              );
            }),
            e
          );
        })(),
        Aa = (function() {
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
            (e.Get = function() {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.ClearAllSolrEvents = function() {
              (this.m_mapEventGIDToSolrData = new Map()),
                (this.m_listEvents = new Array());
            }),
            (e.prototype.LoadPartnerEventForModerationIncremental = function(
              s,
              c,
              u
            ) {
              return (
                void 0 === c && (c = 0),
                void 0 === u && (u = 10),
                Object(z.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n,
                    r,
                    o,
                    i,
                    l = this;
                  return Object(z.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        (t =
                          Y.c.STORE_BASE_URL +
                          "events_admin/ajaxgetmoderationspecificpartnerevents"),
                          (a = { page: c, count: u }),
                          (e.label = 1);
                      case 1:
                        return (
                          e.trys.push([1, 3, , 4]),
                          [
                            4,
                            T.a.get(t, {
                              params: a,
                              withCredentials: !0,
                              cancelToken: s ? s.token : void 0
                            })
                          ]
                        );
                      case 2:
                        return (
                          (n = e.sent()),
                          s && s.token.reason
                            ? [2, []]
                            : n && n.data
                            ? ((r = new Array()),
                              Object(m.G)(function() {
                                n.data.docs.forEach(function(e) {
                                  l.m_mapEventGIDToSolrData.has(e.unique_id) ||
                                    (r.push(e),
                                    l.m_mapEventGIDToSolrData.set(
                                      e.unique_id,
                                      e
                                    ),
                                    l.m_listEvents.push(e));
                                });
                              }),
                              [2, r])
                            : [3, 4]
                        );
                      case 3:
                        return (
                          (o = e.sent()),
                          (i = Object(ce.a)(o)),
                          console.error(
                            "LoadPartnerEventForModerationIncremental failed:" +
                              i.strErrorMsg,
                            i
                          ),
                          [3, 4]
                        );
                      case 4:
                        return [2, []];
                    }
                  });
                })
              );
            }),
            (e.prototype.UpdateTagsOnPartnerEvent = function(r, o, i, l, s, c) {
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          Y.c.STORE_BASE_URL + "events_admin/ajaxupdatetags"),
                        (a = l.join(",")),
                        c &&
                          (0 < l.length && (a += ","), (a += c.ToModString())),
                        (n = new FormData()).append("sessionid", Y.c.SESSIONID),
                        n.append("clan_accountid", "" + o.GetAccountID()),
                        n.append("gid_announcement", i),
                        n.append("add_tags", a),
                        n.append("remove_tags", s.join(",")),
                        [
                          4,
                          T.a.post(t, n, {
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          Y.c.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (a = new FormData()).append("sessionid", Y.c.SESSIONID),
                        a.append("clan_accountid", "" + r.GetAccountID()),
                        a.append("gid_event", o),
                        a.append("new_event_type", "" + i),
                        [
                          4,
                          T.a.post(t, a, {
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
            Object(z.c)([m.C], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(z.c)([m.C], e.prototype, "m_listEvents", void 0),
            Object(z.c)([m.k], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })(),
        Na = (function() {
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
            (e.Get = function() {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.ClearAllSolrEvents = function() {
              (this.m_mapEventGIDToSolrData = new Map()),
                (this.m_listEvents = new Array());
            }),
            (e.prototype.LoadPartnerEventForQueryIncremental = function(
              r,
              o,
              i,
              l,
              s,
              c,
              u,
              d,
              p
            ) {
              return (
                void 0 === o && (o = 0),
                void 0 === i && (i = 10),
                Object(z.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n = this;
                  return Object(z.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          this.GetLatestPartnerEvents(r, o, i, l, s, c, u, d, p)
                        ];
                      case 1:
                        return (
                          (t = e.sent()),
                          (a = new Array()),
                          Object(m.G)(function() {
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
              u,
              d,
              p,
              m,
              v,
              h
            ) {
              return (
                void 0 === o && (o = 0),
                void 0 === i && (i = 10),
                Object(z.b)(this, void 0, void 0, function() {
                  var t, a, n;
                  return Object(z.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t =
                            Y.c.STORE_BASE_URL +
                            "events_admin/ajaxgetlatestpartnerevents"),
                          (a = {
                            page: o,
                            count: i,
                            date: u,
                            appids: void 0 === l ? void 0 : l.join(","),
                            required_tags: void 0 === s ? void 0 : s.join(","),
                            exclude_tags: void 0 === c ? void 0 : c.join(","),
                            eventtypefilter:
                              void 0 === d ? void 0 : d.join(","),
                            orderByVisibility: p || void 0,
                            creator_home_clan_id:
                              void 0 === m ? void 0 : m.join(","),
                            showUnpublished: void 0 === h ? void 0 : h,
                            term: void 0 === v ? void 0 : v
                          }),
                          [
                            4,
                            T.a.get(t, {
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
            Object(z.c)([m.C], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(z.c)([m.C], e.prototype, "m_listEvents", void 0),
            Object(z.c)([m.k], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })(),
        Ba = a("T27q"),
        Ma = a("Qcoi"),
        Ra = a("zrk3"),
        xa = Object(r.a)(function(e) {
          var t = e.accountID,
            a = e.locToken,
            n = f.a.InitFromAccountID(t).ConvertTo64BitString(),
            o = H.useRef(null),
            r = H.useState(Ma.a.GetProfile(n)),
            i = r[0],
            l = r[1],
            s = H.useState(!Ma.a.BHasProfile(n)),
            c = s[0],
            u = s[1];
          H.useEffect(
            function() {
              var r = f.a.InitFromAccountID(t).ConvertTo64BitString();
              return (
                Ma.a.BHasProfile(r) ||
                  (u(!0),
                  Object(z.b)(void 0, void 0, void 0, function() {
                    var t, a, n;
                    return Object(z.e)(this, function(e) {
                      switch (e.label) {
                        case 0:
                          (t = T.a.CancelToken.source()),
                            (o.current = t.cancel),
                            (e.label = 1);
                        case 1:
                          return (
                            e.trys.push([1, 3, , 4]),
                            [4, Ma.a.LoadProfiles([r])]
                          );
                        case 2:
                          return e.sent(), [3, 4];
                        case 3:
                          return (
                            (a = e.sent()),
                            (n = Object(ce.a)(a)),
                            console.error(
                              "EventModerationTile profile load : " +
                                n.strErrorMsg,
                              n
                            ),
                            [3, 4]
                          );
                        case 4:
                          return (
                            t.token.reason || (l(Ma.a.GetProfile(r)), u(!1)),
                            [2]
                          );
                      }
                    });
                  })),
                function() {
                  o.current && o.current("ModEventUserProfile: unmounting");
                }
              );
            },
            [t]
          );
          var d =
            "https://steamsupport.valvesoftware.com/account/overview/" + n;
          return H.createElement(
            "div",
            null,
            Object(Z.n)(
              a,
              H.createElement(
                "a",
                { href: d, target: Y.c.IN_CLIENT ? void 0 : "_blank" },
                Boolean(i)
                  ? H.createElement(H.Fragment, null, i.persona_name)
                  : H.createElement(
                      H.Fragment,
                      null,
                      c && H.createElement($.a, { size: "small" }),
                      H.createElement("span", null, t)
                    )
              )
            )
          );
        }),
        Fa = a("BpzF"),
        Pa = a("UxvL"),
        Ha = a("E9gz"),
        za = a("f0Wu"),
        Ua = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0
        },
        Va = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = T.a.CancelToken.source()),
              (e.m_refScroll = H.createRef()),
              (e.m_IntervalTimer = void 0),
              (e.state = {
                bInfiniteScrollLoading: !1,
                bExhaustedEventList: !1,
                nLastFetchCompletedMS: 0
              }),
              (e.m_nPage = 0),
              e
            );
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.setState(
                { bInfiniteScrollLoading: !0 },
                this.LoadMoreModerationEvents
              ),
                window.addEventListener("scroll", this.OnScroll, !0),
                ka.Get().Init(this.props.history.location.search);
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "EventModerationLanding component unmounted"
              ),
                window.removeEventListener("scroll", this.OnScroll),
                this.ClearTimer();
            }),
            (e.prototype.HandleUpdateQueryParameter = function() {
              var e,
                t,
                a,
                n,
                r,
                o = ka.Get();
              o.bUseCustomQuery &&
                this.props.history &&
                ((e = o.selectedTags),
                (t = o.excludedTags),
                (a = o.filterEventTypes),
                (n = o.filterDate),
                (r = o.bOrderByVisibilityStartTime),
                e || t || a || n || r
                  ? this.props.history.push(
                      "?" +
                        we.a.stringify({
                          selectedTags:
                            e && 0 < e.length
                              ? e.map(function(e) {
                                  return e.value;
                                })
                              : null,
                          excludedTags:
                            t && 0 < t.length
                              ? t.map(function(e) {
                                  return e.value;
                                })
                              : null,
                          eventtype:
                            a && 0 < a.length
                              ? a.map(function(e) {
                                  return "" + e.value;
                                })
                              : null,
                          filterDate: n && 0 < n.unix() ? "" + n.unix() : null,
                          orderByVisibility: r ? "1" : null
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
              var t = Object(ce.a)(e);
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
              return Object(z.b)(this, void 0, void 0, function() {
                return Object(z.e)(this, function(e) {
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
              var t,
                e,
                a,
                n,
                r = this;
              this.ClearTimer(),
                this.state.bInfiniteScrollLoading &&
                  ((t = ka.Get()).bUseCustomQuery
                    ? ((e = t.filterEventTypes
                        ? t.filterEventTypes.map(function(e) {
                            return e.value;
                          })
                        : void 0),
                      (a = t.selectedTags
                        ? t.selectedTags.map(function(e) {
                            return e.value;
                          })
                        : void 0),
                      (n = t.excludedTags
                        ? t.excludedTags.map(function(e) {
                            return e.value;
                          })
                        : void 0),
                      Na.Get().LoadPartnerEventForQueryIncremental(
                        this.m_cancelSignal,
                        this.m_nPage,
                        t.eventsToLoadPerPaging,
                        [this.props.appid],
                        a,
                        n,
                        t.filterDate,
                        e,
                        t.bOrderByVisibilityStartTime
                      ))
                    : Aa.Get().LoadPartnerEventForModerationIncremental(
                        this.m_cancelSignal,
                        this.m_nPage,
                        t.eventsToLoadPerPaging
                      )
                  )
                    .then(function(e) {
                      (r.m_nPage += t.eventsToLoadPerPaging),
                        r.setState({
                          bInfiniteScrollLoading: !1,
                          bExhaustedEventList: 0 == e.length,
                          nLastFetchCompletedMS: Date.now()
                        });
                    })
                    .catch(function(e) {
                      return r.HandleError(e);
                    });
            }),
            (e.prototype.UpdateQueryParametersAndLoadMoreEvents = function() {
              this.HandleUpdateQueryParameter(),
                this.LoadMoreModerationEvents();
            }),
            (e.prototype.RenderTiles = function() {
              var t = new Array();
              return (
                (ka.Get().bUseCustomQuery
                  ? Na.Get().GetAllSolrEvents()
                  : Aa.Get().GetAllSolrEvents()
                ).forEach(function(e) {
                  t.push(
                    H.createElement(Ya, { solrData: e, key: e.unique_id })
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
            (e.prototype.RefetchAllEventTiles = function() {
              (this.m_nPage = 0),
                Aa.Get().ClearAllSolrEvents(),
                Na.Get().ClearAllSolrEvents(),
                this.setState(
                  Object(z.a)({}, Ua),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.render = function() {
              var e = this.RenderTiles(),
                t = ka.Get();
              return H.createElement(
                "div",
                { className: Ha.ModerationContainer, ref: this.m_refScroll },
                H.createElement(
                  "div",
                  null,
                  H.createElement(
                    "h2",
                    null,
                    Object(Z.f)("#EventModeration_Title")
                  ),
                  H.createElement(
                    y.a,
                    null,
                    H.createElement(
                      "div",
                      { className: Object(W.a)(V.a.FlexRowContainer) },
                      H.createElement(qa, {
                        fnRequireRefetchEvents: this.RefetchAllEventTiles
                      }),
                      Boolean(t.bUseCustomQuery) &&
                        H.createElement(Za, {
                          fnRequireRefetchEvents: this.RefetchAllEventTiles
                        })
                    )
                  )
                ),
                H.createElement(y.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  H.createElement($.a, {
                    position: "center",
                    size: "medium",
                    string: Object(Z.f)("#Loading")
                  })
              );
            }),
            Object(z.c)([s.a], e.prototype, "HandleError", null),
            Object(z.c)(
              [s.a],
              e.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(z.c)([s.a], e.prototype, "LoadMoreModerationEvents", null),
            Object(z.c)(
              [s.a],
              e.prototype,
              "UpdateQueryParametersAndLoadMoreEvents",
              null
            ),
            Object(z.c)([s.a], e.prototype, "OnScroll", null),
            Object(z.c)([s.a], e.prototype, "RefetchAllEventTiles", null),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component),
        Wa = Object(i.i)(Va),
        qa = Object(r.a)(function(e) {
          var a = ka.Get(),
            t = e.fnRequireRefetchEvents;
          return H.createElement(
            H.Fragment,
            null,
            H.createElement(
              "div",
              { className: Ha.FilterContainer },
              H.createElement(
                I.a,
                {
                  toolTipContent: Object(Z.f)(
                    "#EventModeration_ShowCustomFilter_ttip"
                  )
                },
                H.createElement(b.e, {
                  label: Object(Z.f)("#EventModeration_ShowCustomFilter"),
                  checked: a.bUseCustomQuery,
                  onChange: function(e) {
                    (a.bUseCustomQuery = e), t();
                  }
                })
              )
            ),
            H.createElement(
              "div",
              { className: Ha.FilterContainer },
              H.createElement(
                "label",
                { htmlFor: "EventPerLoad" },
                Object(Z.f)("#EventModeration_PerPageLoad")
              ),
              H.createElement(
                "div",
                null,
                H.createElement("input", {
                  type: "number",
                  id: "EventPerLoad",
                  min: "10",
                  max: "200",
                  value: a.eventsToLoadPerPaging,
                  onChange: function(e) {
                    var t = Number.parseInt(e.currentTarget.value);
                    t &&
                      0 < t &&
                      t != a.eventsToLoadPerPaging &&
                      (a.eventsToLoadPerPaging = t);
                  }
                })
              )
            )
          );
        }),
        Za = Object(r.a)(function(e) {
          var a = ka.Get(),
            n = e.fnRequireRefetchEvents,
            t = v.d.map(function(e) {
              return { value: e, label: Object(Ot.b)(e) };
            }),
            r = mt.a.map(function(e) {
              return { value: e, label: e };
            }),
            o = {
              option: function(e) {
                return Object(z.a)(Object(z.a)({}, e), { color: "#444444" });
              }
            };
          return H.createElement(
            H.Fragment,
            null,
            H.createElement(
              "div",
              { className: Ha.FilterContainer },
              H.createElement(
                "span",
                null,
                Object(Z.f)("#EventModeration_FilterByTag")
              ),
              H.createElement(Ta.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: function(e) {
                  (a.selectedTags = e), n();
                },
                value: a.selectedTags,
                options: r,
                styles: o
              })
            ),
            H.createElement(
              "div",
              { className: Ha.FilterContainer },
              H.createElement(
                "span",
                null,
                Object(Z.f)("#EventModeration_FilterExcludeByTag")
              ),
              H.createElement(Ta.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: function(e) {
                  (a.excludedTags = e), n();
                },
                value: a.excludedTags,
                options: r,
                styles: o
              })
            ),
            H.createElement(
              "div",
              { className: Ha.FilterContainer },
              H.createElement(
                "span",
                null,
                Object(Z.f)("#EventModeration_FilterToType")
              ),
              H.createElement(Ta.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: function(e) {
                  (a.filterEventTypes = e), n();
                },
                value: a.filterEventTypes,
                options: t,
                styles: o
              })
            ),
            H.createElement(
              "div",
              { className: Ha.FilterContainer },
              H.createElement(
                "span",
                null,
                Object(Z.f)("#EventModeration_FilterToDate")
              ),
              H.createElement(wa, {
                timeFormat: !1,
                onChange: function(e) {
                  if ("string" == typeof e) {
                    var t = za(e, "M/D/YYYY", !0);
                    if (!t.isValid()) return void (a.filterDateAsString = e);
                    e = t;
                  }
                  a.filterDate != e &&
                    ((a.filterDateAsString = void 0), (a.filterDate = e), n());
                },
                value: a.filterDate,
                isValidDate: function(e) {
                  var t = new Date();
                  return (
                    e.unix() <
                    za
                      .unix(t.getTime() / 1e3 + 86400)
                      .hour(0)
                      .seconds(0)
                      .minute(0)
                      .unix()
                  );
                },
                inputProps: {
                  placeholder: Object(Z.f)("#EventModeration_PickDatee"),
                  className: Ha.TimeWidth
                }
              })
            ),
            H.createElement(
              "div",
              { className: Ha.FilterContainer },
              H.createElement("input", {
                type: "checkbox",
                id: "VisibilityStart",
                checked: a.bOrderByVisibilityStartTime,
                onChange: function(e) {
                  (a.bOrderByVisibilityStartTime = e.currentTarget.checked),
                    n();
                }
              }),
              H.createElement(
                "label",
                { htmlFor: "VisibilityStart" },
                Object(Z.f)("#EventModeration_OrderByFirstVisible")
              )
            )
          );
        }),
        Ya = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingEvent: !M.c.BHasClanEventModel(
                  e.props.solrData.unique_id
                ),
                bShowAsModal: !1,
                bSavingModeration: !1
              }),
              (e.m_cancelSignal = T.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var e,
                a = this,
                t = this.props.solrData,
                n = t.unique_id;
              M.c.BHasClanEventModel(n) ||
                ((e = Date.now() / 1e3),
                M.c
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new f.a(t.clan_steamid),
                    n,
                    e
                  )
                  .then(function() {
                    return a.setState({ bLoadingEvent: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(ce.a)(e);
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
                M.c.BHasClanEventModel(e) &&
                this.setState({ bShowAsModal: !0 });
            }),
            (e.prototype.HideModalEvent = function() {
              this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
            }),
            (e.prototype.OnModeratedChanged = function(e) {
              var t, a, n, r;
              this.state.bSavingModeration ||
                ((t = this.props.solrData.unique_id),
                (a = M.c.GetClanEventModel(t)),
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c, u;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props.solrData),
                        (a = t.unique_id),
                        (n = M.c.GetClanEventModel(a)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (r = new Array()),
                        (o = new Array()),
                        (i =
                          n.BHasTag("mod_reviewed") &&
                          !n.BHasTag("mod_require_rereview")),
                        (l = new La().SetReviewAction(!i)),
                        i
                          ? r.push("mod_require_rereview")
                          : (r.push("mod_reviewed"),
                            o.push("mod_require_rereview"),
                            n.BHasTag("mod_require_rereview") &&
                              l.SetReReviewAction(!i)),
                        [
                          4,
                          Aa.Get().UpdateTagsOnPartnerEvent(
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
                        (u = Object(ce.a)(c)),
                        console.error(
                          "EventModerationTile " + u.strErrorMsg,
                          u
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
                a = M.c.GetClanEventModel(t.unique_id);
              Object(j.d)(
                H.createElement(Xa, { eventModel: a }),
                Object(q.m)(e)
              );
            }),
            (e.prototype.OnUpdateSeasonalTag = function(e) {
              var t = this.props.solrData,
                a = M.c.GetClanEventModel(t.unique_id);
              Object(j.d)(
                H.createElement($a, { eventModel: a }),
                Object(q.m)(e)
              );
            }),
            (e.prototype.render = function() {
              var e = this.props.solrData,
                t = e.unique_id,
                a = Number(e.appid),
                n = Object(v.f)(Y.c.LANGUAGE),
                r = M.c.GetClanEventModel(t);
              if (r) {
                if (this.state.bShowAsModal)
                  return H.createElement(
                    X.h,
                    { className: Ha.StoreHeaderAdjust },
                    H.createElement(
                      "div",
                      null,
                      H.createElement(Ba.b, {
                        event: r,
                        fnClose: this.HideModalEvent
                      })
                    )
                  );
                var o = r.GetImageForSizeAsArrayWithFallback(
                    "capsule",
                    n,
                    N.c.capsule_main
                  ),
                  i = r.BImageNeedScreenshotFallback("capsule", n),
                  l =
                    0 < o.length
                      ? H.createElement(
                          H.Fragment,
                          null,
                          H.createElement(Pa.a, { rgSources: o }),
                          i &&
                            H.createElement(
                              "div",
                              { className: Ha.NoCapsule },
                              Object(Z.f)("#EventModTile_FallbackImageText")
                            )
                        )
                      : H.createElement(
                          "div",
                          { className: Ha.NoCapsule },
                          Object(Z.f)("#EventModTile_NoCapsule")
                        );
              } else l = Object(Z.f)("#Loading");
              var s = e.hidden
                  ? e.published
                    ? Object(Z.f)("#EVentModTile_State_Staged")
                    : Object(Z.f)("#EVentModTile_State_Draft")
                  : Object(Z.f)("#EVentModTile_State_Published"),
                c = r ? r.type : Number(e.event_type);
              return H.createElement(
                y.a,
                null,
                H.createElement(
                  "div",
                  { className: Ha.Tile },
                  H.createElement(
                    "div",
                    { className: Ha.TileCapsule, onClick: this.ShowModalEvent },
                    l
                  ),
                  H.createElement(
                    "div",
                    { className: Ha.TileDetails },
                    H.createElement(
                      "div",
                      { className: Ha.DetailsLeft },
                      H.createElement("div", null, s),
                      H.createElement(
                        "a",
                        {
                          href:
                            Y.c.COMMUNITY_BASE_URL +
                            "ogg/" +
                            a +
                            "/announcements/detail/" +
                            e.announcement_gid,
                          target: Y.c.IN_CLIENT ? void 0 : "_blank",
                          className: Ha.EventTitle
                        },
                        e.event_name
                      ),
                      H.createElement(
                        "div",
                        {
                          className: Object(W.a)(
                            1 == c ? Ha.TileEventOtherType : ""
                          )
                        },
                        r ? r.GetCategoryAsString() : e.event_type
                      ),
                      this.state.bLoadingEvent &&
                        H.createElement($.a, {
                          size: "small",
                          string: Object(Z.f)("#Loading")
                        }),
                      H.createElement(xa, {
                        accountID: Number(e.creator_accountid),
                        locToken: "#EventModTile_Author"
                      }),
                      Boolean(
                        e.updator_accountid &&
                          0 < Number(e.updator_accountid) &&
                          e.updator_accountid != e.creator_accountid
                      ) &&
                        H.createElement(xa, {
                          accountID: Number(e.updator_accountid),
                          locToken: "#EventModTile_Updator"
                        }),
                      H.createElement(Ja, {
                        appid: a,
                        clanSteamID: new f.a(e.clan_steamid)
                      })
                    ),
                    r &&
                      H.createElement(
                        H.Fragment,
                        null,
                        H.createElement(
                          "div",
                          { className: Ha.DetailsMiddle },
                          H.createElement(
                            "div",
                            { className: Ha.ModeratedFlagCtn },
                            H.createElement("input", {
                              type: "checkbox",
                              id: r.GID + "_moderated",
                              checked: Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ),
                              onChange: this.OnModeratedChanged
                            }),
                            H.createElement(
                              "label",
                              { htmlFor: r.GID + "_moderated" },
                              this.state.bSavingModeration &&
                                H.createElement($.a, { size: "small" }),
                              Boolean(!r.BHasTag("mod_reviewed")) &&
                                Object(Z.f)("#EventModTile_Moderated_Review"),
                              Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ) && Object(Z.f)("#EventModTile_Moderated"),
                              Boolean(r.BHasTag("mod_require_rereview")) &&
                                Object(Z.f)("#EventModTile_Moderated_ReReview")
                            )
                          ),
                          H.createElement(
                            "button",
                            {
                              className: Object(W.a)(V.a.Button, Ha.Button),
                              onClick: this.OnChangeCategory
                            },
                            Object(Z.f)("#EventModTile_ChangeEventType")
                          ),
                          r.BHasTag("halloween2019candidate") &&
                            H.createElement(
                              "button",
                              {
                                className: Object(W.a)(V.a.Button),
                                onClick: this.OnUpdateSeasonalTag
                              },
                              Object(Z.f)("#EventModTile_SeasonalTag")
                            ),
                          H.createElement(Da, { eventModel: r })
                        ),
                        H.createElement(
                          "div",
                          { className: Ha.DetailsRight },
                          H.createElement(Fa.b, {
                            event: r,
                            stylesmodule: Ha,
                            nOverrideEndTime: r.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: r.GetStartTimeAndDateUnixSeconds()
                          }),
                          H.createElement(Qa, { event: r }),
                          H.createElement(Ka, { event: r })
                        )
                      )
                  )
                )
              );
            }),
            Object(z.c)([s.a], e.prototype, "ShowModalEvent", null),
            Object(z.c)([s.a], e.prototype, "HideModalEvent", null),
            Object(z.c)([s.a], e.prototype, "OnModeratedChanged", null),
            Object(z.c)([s.a], e.prototype, "ApplyModerationToggle", null),
            Object(z.c)([s.a], e.prototype, "OnChangeCategory", null),
            Object(z.c)([s.a], e.prototype, "OnUpdateSeasonalTag", null),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component);
      var Qa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bDownloadingImages: !1, nLocLanguages: 0 }),
              (e.m_cancelSignal = T.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.CountLanguages = function(e) {
              var t = 0;
              if (e && 0 < e.length)
                for (var a = 0; a < e.length && a < 30; ++a)
                  e[a] && 0 < e[a].length && (t += 1);
              return t;
            }),
            (e.prototype.componentDidMount = function() {
              var a = this,
                e = this.props.event;
              M.c
                .LoadClanEventLocalizationFromAnnouncementGID(
                  e.clanSteamID,
                  e.AnnouncementGID
                )
                .then(function(e) {
                  a.m_cancelSignal.token.reason ||
                    a.setState({ nLocLanguages: e.length });
                })
                .catch(function(e) {
                  var t = Object(ce.a)(e);
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
              return H.createElement(
                "div",
                { className: Ha.AnalysisCtn },
                H.createElement(
                  "div",
                  { className: Ha.TileTitle },
                  Object(Z.f)("#EventModTile_Analysis")
                ),
                H.createElement(
                  "div",
                  null,
                  Object(Z.f)("#EventModTile_Stats_Comments", e.nCommentCount)
                ),
                H.createElement(
                  "div",
                  null,
                  Object(Z.f)("#EventModTile_Stats_VoteUp", e.nVotesUp)
                ),
                H.createElement(
                  "div",
                  null,
                  Object(Z.f)("#EventModTile_Stats_VoteDown", e.nVotesDown)
                ),
                Boolean(t) &&
                  H.createElement(
                    "div",
                    { className: Ha.ArtHeader },
                    Object(Z.f)("#EventModTile_ImageAnalysis_Header", t),
                    " "
                  ),
                Boolean(a) &&
                  H.createElement(
                    "div",
                    null,
                    Object(Z.f)("#EventModTile_ImageAnalysis_Capsule", a),
                    " "
                  ),
                Boolean(n) &&
                  H.createElement(
                    "div",
                    { className: Ha.ArtSpotlight },
                    Object(Z.f)("#EventModTile_ImageAnalysis_Spotlight", n),
                    " "
                  ),
                Boolean(r) &&
                  H.createElement(
                    "div",
                    null,
                    Object(Z.f)("#EventModTile_ImageAnalysis_Broadcast", r),
                    " "
                  ),
                0 == o &&
                  H.createElement(
                    "div",
                    { className: Ha.AnalysisMissing },
                    Object(Z.f)("#EventModTile_ImageAnalysis_None"),
                    " "
                  ),
                0 == this.state.nLocLanguages &&
                  H.createElement($.a, {
                    size: "small",
                    string: Object(Z.f)("#EventModTile_LoadingLocs")
                  }),
                0 < this.state.nLocLanguages &&
                  H.createElement(
                    "div",
                    null,
                    Object(Z.f)(
                      "#EventModTile_Languages",
                      this.state.nLocLanguages
                    )
                  ),
                Boolean(i) &&
                  H.createElement(
                    "div",
                    null,
                    Object(Z.f)("#EventModTile_Languages_Summary", i),
                    " "
                  ),
                Boolean(l) &&
                  H.createElement(
                    "div",
                    null,
                    Object(Z.f)("#EventModTile_Languages_Subtitle", l),
                    " "
                  )
              );
            }),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component),
        Ja = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingAppInfo: !_.a.BIsAppidLoaded(e.props.appid)
              }),
              (e.m_cancelSignal = T.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(z.d)(e, t),
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
                    var t = Object(ce.a)(e);
                    console.error(
                      "EventModerationChannelInfo: App Load: " + t.strErrorMsg,
                      t
                    ),
                      a.m_cancelSignal.token.reason ||
                        a.setState({ bLoadingAppInfo: !1 });
                  }),
                n && E.a.LoadClanInfoForClanSteamID(n);
            }),
            (e.prototype.render = function() {
              if (this.state.bLoadingAppInfo)
                return H.createElement($.a, {
                  size: "small",
                  string: Object(Z.f)("#EventModTile_AppInfoLoading")
                });
              var e = this.props,
                t = e.appid,
                a = e.clanSteamID;
              if (t) {
                var n = _.a.GetStoreCapsuleInfo(t).GetAppStoreData();
                return H.createElement(
                  "div",
                  { className: Ha.TileAppInfo },
                  H.createElement(
                    "div",
                    { className: Ha.TileAppInfoTitle },
                    H.createElement(
                      S.a,
                      { href: n.capsule_link },
                      H.createElement("img", {
                        className: Ha.TileAppInfoImage,
                        src: n.capsule
                      }),
                      H.createElement(
                        "div",
                        null,
                        Object(Z.f)("#EventModTile_GameName", n.title)
                      )
                    )
                  ),
                  H.createElement(
                    "div",
                    null,
                    Object(Z.f)("#EventModTile_ReleaseDate", n.release)
                  )
                );
              }
              if (a) {
                var r = a.GetAccountID(),
                  o = E.a.GetClanInfoByClanAccountID(r);
                if (o && o.is_curator)
                  return H.createElement(
                    "div",
                    { className: Ha.TileAppInfo },
                    H.createElement(
                      "div",
                      { className: Ha.TileAppInfoTitle },
                      H.createElement(
                        S.a,
                        { href: Y.c.STORE_BASE_URL + "/curator/" + r + "/" },
                        H.createElement("img", {
                          className: Ha.TileAppInfoImage,
                          src: o.avatar_full_url
                        }),
                        H.createElement(
                          "div",
                          null,
                          Object(Z.f)("#EventModTile_CuratorName", o.group_name)
                        )
                      )
                    )
                  );
              }
              return null;
            }),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component),
        Ka = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.render = function() {
              var e = this.props.event,
                t = Object(mt.d)(e),
                a = Object(mt.c)(e),
                n = Object(mt.e)(e),
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
              return H.createElement(
                "div",
                { className: Ha.VisibiltyCtn },
                H.createElement(
                  "div",
                  { className: Ha.TileTitle },
                  Object(Z.f)("#EventModTile_Visibility")
                ),
                H.createElement(
                  "div",
                  null,
                  Object(Z.f)(
                    "#EventModTile_Store_Visibility",
                    r
                      ? Object(Z.f)("#WriteReview_Dialog_Yes")
                      : Object(Z.f)("#WriteReview_Dialog_No"),
                    r
                      ? ""
                      : n
                      ? Object(Z.f)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_store")
                      ? Object(Z.f)("#EventModTime_Hidden_OptOut")
                      : Object(Z.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                H.createElement(
                  "div",
                  null,
                  Object(Z.f)(
                    "#EventModTile_LibraryHome_Visibility",
                    o
                      ? Object(Z.f)("#WriteReview_Dialog_Yes")
                      : Object(Z.f)("#WriteReview_Dialog_No"),
                    o
                      ? ""
                      : n
                      ? Object(Z.f)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_overview")
                      ? Object(Z.f)("#EventModTime_Hidden_OptOut")
                      : Object(Z.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                H.createElement(
                  "div",
                  null,
                  Object(Z.f)(
                    "#EventModTile_LibraryDetail_Visibility",
                    i
                      ? Object(Z.f)("#WriteReview_Dialog_Yes")
                      : Object(Z.f)("#WriteReview_Dialog_No"),
                    i
                      ? ""
                      : n
                      ? Object(Z.f)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_detail")
                      ? Object(Z.f)("#EventModTime_Hidden_OptOut")
                      : Object(Z.f)("#EventModTime_Hidden_Moderator")
                  )
                )
              );
            }),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component),
        Xa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                newCategoryOption: {
                  label: Object(Ot.b)(34),
                  value: { eventType: 34 }
                }
              }),
              (e.m_cancelSignal = T.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "ChangeEventTypeDialog component unmounted"
              );
            }),
            (e.prototype.ChangeCategoryForEvent = function() {
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c, u;
                return Object(z.e)(this, function(e) {
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
                          Aa.Get().UpdatePartnerEventType(
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
                        (i = mt.o),
                        (l = []),
                        r.value.tags &&
                          r.value.tags.forEach(function(e) {
                            l.push(e);
                            var t = new La()
                              .SetUpdateSeasonalTags(e)
                              .ToModString();
                            l.push(t);
                          }),
                        [
                          4,
                          Aa.Get().UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.GetAnnouncementGID(),
                            l,
                            i,
                            new La().SetActionChangeEvent(o)
                          )
                        ]
                      );
                    case 3:
                      return (
                        (s = e.sent()),
                        Object(m.G)(function() {
                          (a.type = o), (a.vecTags = s);
                        }),
                        this.setState({ bUpdating: !1 }, n),
                        [3, 5]
                      );
                    case 4:
                      return (
                        (c = e.sent()),
                        (u = Object(ce.a)(c)),
                        console.error(
                          "ChangeEventTypeDialog error " + u.strErrorMsg,
                          u
                        ),
                        this.setState({
                          bUpdating: !1,
                          strErrorMsg: u.strErrorMsg
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
                r = v.d
                  .filter(function(e) {
                    return 1 == e || 4 == e || 9 <= e;
                  })
                  .map(function(e) {
                    var t = { eventType: e };
                    return (
                      12 == e && (t.tags = ["patchnotes"]),
                      { label: Object(Ot.b)(e), value: t }
                    );
                  });
              return (
                r.push({
                  label: Object(Z.f)("#PartnerEvent_Curator_Group_Members"),
                  value: {
                    eventType: 28,
                    tags: ["curator", "curator_group_members"]
                  }
                }),
                r.push({
                  label: Object(Z.f)("#PartnerEvent_Curator_Public"),
                  value: { eventType: 28, tags: ["curator", "curator_public"] }
                }),
                r.unshift({
                  value: { eventType: 15, tags: ["halloween"] },
                  label: Object(Z.f)("#EventEditor_Category_DLC_Halloween")
                }),
                r.unshift({
                  value: { eventType: 22, tags: ["halloween"] },
                  label: Object(Z.f)("#PartnerEvent_22")
                }),
                r.unshift({
                  value: { eventType: 23, tags: ["halloween"] },
                  label: Object(Z.f)("#PartnerEvent_23")
                }),
                r.unshift({
                  value: { eventType: 24, tags: ["halloween"] },
                  label: Object(Z.f)("#PartnerEvent_24")
                }),
                r.unshift({
                  value: { eventType: 35, tags: ["halloween"] },
                  label: Object(Z.f)("#PartnerEvent_35")
                }),
                H.createElement(
                  X.c,
                  {
                    strTitle: Object(Z.f)("#EventModTile_ChangeEventType"),
                    strDescription: Object(Z.f)(
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
                  H.createElement(
                    H.Fragment,
                    null,
                    H.createElement(
                      "div",
                      { className: Ha.CategoryChangeDialog },
                      H.createElement("br", null),
                      this.state.bUpdating &&
                        H.createElement($.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        H.createElement(
                          "div",
                          null,
                          Object(Z.f)("#Chat_Settings_Error_ServerError"),
                          H.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      H.createElement(Ta.a, {
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
            Object(z.c)([s.a], e.prototype, "ChangeCategoryForEvent", null),
            Object(z.c)([s.a], e.prototype, "OnChangeSelection", null),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component),
        $a = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                bAccept: e.props.eventModel.BHasTag("halloween2019"),
                bHorror: e.props.eventModel.BHasTag("horror"),
                bCute: e.props.eventModel.BHasTag("cute")
              }),
              (e.m_cancelSignal = T.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(z.d)(e, t),
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i;
                return Object(z.e)(this, function(e) {
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
                          Aa.Get().UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            t,
                            a,
                            new La().SetUpdateSeasonalTags(
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
                        (i = Object(ce.a)(o)),
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
              return H.createElement(
                X.c,
                {
                  strTitle: Object(Z.f)("#EventModTile_SeasonalTag"),
                  onCancel: a,
                  onOK: function() {
                    return e.setState({ bUpdating: !0 }, e.ApplyAction);
                  }
                },
                H.createElement(
                  H.Fragment,
                  null,
                  H.createElement(
                    "div",
                    { className: Ha.CategoryChangeDialog },
                    H.createElement("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance
                    }),
                    H.createElement(
                      "label",
                      { htmlFor: "Acceptance" },
                      Object(Z.f)("#EventModTile_SeasonalTag_Desc")
                    ),
                    H.createElement(
                      "div",
                      null,
                      Object(Z.f)("#EventModTile_SeasonalTag_Desc_Secondary")
                    ),
                    H.createElement("input", {
                      id: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror
                    }),
                    H.createElement(
                      "label",
                      { htmlFor: "Horror" },
                      "Horror Tag"
                    ),
                    H.createElement("input", {
                      id: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute
                    }),
                    H.createElement("label", { htmlFor: "Cute" }, "Cute Tag"),
                    this.state.bUpdating &&
                      H.createElement($.a, { size: "small" }),
                    this.state.strErrorMsg &&
                      H.createElement(
                        "div",
                        null,
                        Object(Z.f)("#Chat_Settings_Error_ServerError"),
                        H.createElement("br", null),
                        this.state.strErrorMsg
                      )
                  )
                )
              );
            }),
            Object(z.c)([s.a], e.prototype, "ChangeAcceptance", null),
            Object(z.c)([s.a], e.prototype, "ChangeHorror", null),
            Object(z.c)([s.a], e.prototype, "ChangeCute", null),
            Object(z.c)([s.a], e.prototype, "ApplyAction", null),
            e
          );
        })(H.Component),
        en = a("5eAM"),
        tn = a("gOcu"),
        an = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoadingEvent: !0 }),
              (e.m_cancelSignal = T.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "SteamGameFestivalStoreDebug to unload "
              );
            }),
            (e.prototype.componentDidMount = function() {
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return ((t = this.props),
                      (a = t.clanEventGID),
                      (n = t.clanAccountID),
                      console.log(a, n, typeof a, typeof n),
                      !a || M.c.BHasClanEventModel(a))
                        ? [3, 8]
                        : ((r = f.a.InitFromClanID(Number.parseInt(n))),
                          [
                            4,
                            M.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
                          [4, en.a.LoadAppLinkInfo(i)])
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
                        [4, tn.a.Get().LoadAppIDsBatch(i, this.m_cancelSignal)]
                      );
                    case 4:
                      return (
                        e.sent(),
                        (c = new Array()),
                        tn.a
                          .Get()
                          .GetAllDemoInfo()
                          .forEach(function(e) {
                            return c.push(e.demo_appid);
                          }),
                        [4, en.a.LoadAppLinkInfo(c)]
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
                return H.createElement($.a, {
                  string:
                    Object(Z.f)("#Loading") +
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
                return H.createElement("div", null, " Failed to load event");
              var e = this.state.event;
              if (!e.jsondata.bSaleEnabled)
                return H.createElement("div", null, "Not a sale evnet");
              var n = new Map();
              this.state.rgDemoIDs.forEach(function(e) {
                return n.set(e, !0);
              });
              var a = new Array(),
                r = new Array();
              en.a.GetMissingAppIDs().forEach(function(e, t) {
                a.push(
                  H.createElement(
                    "div",
                    { key: "missing: " + t },
                    H.createElement(
                      "a",
                      {
                        href: Y.c.STORE_BASE_URL + "app/" + t + "/?beta=1",
                        target: "_blank"
                      },
                      t
                    )
                  )
                ),
                  r.push(t);
              });
              var o = new Array();
              en.a.GetAllLoadedAppLinks().forEach(function(e, t) {
                var a;
                n.has(t) ||
                  tn.a.Get().BHasDemoAppID(t) ||
                  ((a = en.a.GetAppLinkInfo(t)),
                  o.push(
                    H.createElement(
                      "div",
                      { key: "missingdemo_" + t },
                      "demo" == a.type &&
                        H.createElement(
                          "b",
                          null,
                          "--Error: Sale Page has Demo AppID, based game -- "
                        ),
                      a.name,
                      " (",
                      t,
                      ")",
                      H.createElement(
                        "a",
                        {
                          href: Y.c.STORE_BASE_URL + "app/" + t + "/?beta=0",
                          target: "_blank"
                        },
                        "Store Page"
                      ),
                      " ",
                      H.createElement(
                        "a",
                        {
                          href: Y.c.PARTNER_BASE_URL + "apps/landing/" + t,
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
                u = 0,
                d = 0,
                p = 0;
              _.a.GetAllAppInfos().forEach(function(e, t) {
                var a,
                  n = !1;
                e.BIsLoaded() &&
                  tn.a.Get().BHasDemoAppID(t) &&
                  ((a = tn.a.Get().GetDemoEventInfo(t)),
                  en.a.GetAppLinkInfo(a.demo_appid).coming_soon
                    ? ((c += 1), (n = !0))
                    : (u += 1)),
                  e.BIsLoaded() && e.GetAppStoreData().BHasDemoAppID()
                    ? ((i += 1), n && (d += 1))
                    : e.BIsLoaded() && tn.a.Get().BHasDemoAppID(t)
                    ? ((l += 1), n || (p += 1))
                    : -1 ==
                        r.findIndex(function(e) {
                          return e == t;
                        }) && s.push(e.GetAppStoreData());
              });
              var t = new Array();
              s.forEach(function(e) {
                t.push(
                  H.createElement(
                    "div",
                    { key: "missing_capps" + e.appid },
                    H.createElement(
                      "a",
                      {
                        href:
                          Y.c.STORE_BASE_URL + "app/" + e.appid + "/?beta=1",
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
              return (
                en.a.GetAllLoadedAppLinks().forEach(function(e) {
                  "demo" != e.type && (m += 1);
                }),
                H.createElement(
                  y.a,
                  null,
                  H.createElement(
                    "h1",
                    null,
                    e.GetNameWithFallback(Object(v.f)(Y.c.LANGUAGE))
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement("b", null, "Unique AppIDs:"),
                    " ",
                    this.state.rgAppIDs.length,
                    " "
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement(
                      "b",
                      null,
                      "Visible Apps in ",
                      Y.c.COUNTRY,
                      ":"
                    ),
                    " ",
                    m
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement("b", null, "Unknown AppID types:"),
                    " ",
                    this.state.rgUnknownTypeAppIDs.length
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement("b", null, "Missing AppIDs:"),
                    " ",
                    en.a.GetNumMissingAppLinks(),
                    " "
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement("b", null, "Demo via DemoStore:"),
                    " ",
                    tn.a.Get().GetNumDemos()
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement(
                      "b",
                      null,
                      "Visible apps missing demo store:"
                    ),
                    " ",
                    o.length
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement("b", null, "CApplications Loaded:"),
                    " ",
                    _.a.GetNumAppLinkLoaded(),
                    " "
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement(
                      "b",
                      null,
                      "CApplication with Associated Demos:"
                    ),
                    " ",
                    i
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement(
                      "b",
                      null,
                      "  Associated with store page but not released: "
                    ),
                    " ",
                    d
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement(
                      "b",
                      null,
                      "CApplication with demo without association:"
                    ),
                    " ",
                    l
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement(
                      "b",
                      null,
                      "  Released but not associated with store page: "
                    ),
                    " ",
                    p
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement("b", null, "CApplication missing:"),
                    " ",
                    _.a.GetMissingAppIDs().size
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement(
                      "b",
                      null,
                      "CApplication without demo store and demo associations:"
                    ),
                    " ",
                    s.length
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement("b", null, "Released Demo: "),
                    u
                  ),
                  H.createElement(
                    "div",
                    null,
                    H.createElement("b", null, "Unreleased Demo: "),
                    c
                  ),
                  H.createElement("hr", null),
                  H.createElement("h2", null, "Missing Appids:"),
                  a,
                  H.createElement(
                    "h2",
                    null,
                    "Missing BOTH demo list and associated demo on product page:"
                  ),
                  t,
                  H.createElement(
                    "h2",
                    null,
                    "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):"
                  ),
                  o
                )
              );
            }),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component),
        nn = new ((function() {
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
            Object(z.c)([m.C], e.prototype, "m_backfill", void 0),
            Object(z.c)([m.C], e.prototype, "m_mapEventGIDProcessed", void 0),
            Object(z.c)([m.C], e.prototype, "m_bBackfillInProgress", void 0),
            Object(z.c)([m.C], e.prototype, "m_nProcessed", void 0),
            Object(z.c)([m.C], e.prototype, "m_nSuccesses", void 0),
            Object(z.c)([m.C], e.prototype, "m_nFailures", void 0),
            Object(z.c)([m.C], e.prototype, "m_nWarning", void 0),
            Object(z.c)([m.C], e.prototype, "m_nSkipped", void 0),
            Object(z.c)([m.k], e.prototype, "StartBackfill", null),
            Object(z.c)([m.k], e.prototype, "CompleteBackfill", null),
            Object(z.c)([m.k], e.prototype, "CloseProgress", null),
            e
          );
        })())(),
        rn = a("vNkc"),
        on = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = T.a.CancelToken.source()),
              (e.m_nImageID = 0),
              (e.m_mapArtworkResizeSuccess = new Map()),
              (e.state = { eBackfillState: void 0 }),
              e
            );
          }
          return (
            Object(z.d)(e, t),
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
                    var t = Object(ce.a)(e);
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
                Object(z.b)(this, void 0, void 0, function() {
                  var t, a;
                  return Object(z.e)(this, function(e) {
                    return (
                      (t = N.a.GetExtensionTypeFromURL(r)),
                      (a = N.a.GetHashFromHashAndExt(r) + o),
                      [
                        2,
                        N.e.AsyncGetImageResolution(
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
              var r = Object(ce.a)(t),
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
                    nn.CloseProgress(e, n))
                  : nn.CompleteBackfill("resize_image");
            }),
            (e.prototype.HandleResizeForImageType = function(d, p, m, v, h) {
              return Object(z.b)(this, void 0, void 0, function() {
                var t,
                  c,
                  a,
                  u = this;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = function(t) {
                        var a, n, r, o, i, l, s;
                        return Object(z.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return d[t] && 0 < d[t].length
                                ? ((a = d[t]),
                                  (n = N.a.GetExtensionTypeFromURL(a)),
                                  (r = new f.a(p.clan_steamid)),
                                  n
                                    ? [
                                        4,
                                        c.GetImageInfo(r, a).catch(function(e) {
                                          return (
                                            u.HandleErrorFatal(
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
                                Object(mt.j)(o.width, o.height, v)
                                ? [
                                    4,
                                    c.GetImageInfo(r, a, h).catch(function(e) {
                                      return (
                                        u.HandleErrorFatal(
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
                                (i = N.a.GetHashFromHashAndExt(a)),
                                (l = N.a.GetExtensionStringFromHashAndExt(a)),
                                (s = N.d.GetResizeDimension(v)),
                                [
                                  4,
                                  N.b
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
                                            u.m_mapArtworkResizeSuccess.set(
                                              v,
                                              u.m_mapArtworkResizeSuccess.get(
                                                v
                                              ) + 1
                                            ))
                                          : ((m.bFailed = !0),
                                            (m.strMessage =
                                              "Did not resize all: " +
                                              v +
                                              " " +
                                              e +
                                              " / " +
                                              s.length));
                                    })
                                    .catch(function(e) {
                                      m.bFailed = !0;
                                      var t = Object(ce.a)(e);
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
                      return a < d.length && a < 30 ? [5, t(a)] : [3, 4];
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t,
                  i,
                  a,
                  l,
                  n,
                  s = this;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      nn.StartBackfill("resize_image"), (t = 0), (e.label = 1);
                    case 1:
                      return nn.BIsBackkFillInProgress()
                        ? [
                            4,
                            Na.Get()
                              .LoadPartnerEventForQueryIncremental(
                                this.m_cancelSignal,
                                t,
                                25
                              )
                              .catch(function(e) {
                                return s.HandleErrorFatal(
                                  null,
                                  e,
                                  "LoadPartnerEventForQueryIncremental"
                                );
                              })
                          ]
                        : [3, 7];
                    case 2:
                      if (!(i = e.sent()) || 0 == i.length)
                        return (
                          nn.CompleteBackfill("resize_image"),
                          console.log("Compelted the backfill"),
                          [3, 7]
                        );
                      (t += i.length),
                        (a = function(t) {
                          var a, n, r, o;
                          return Object(z.e)(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return (
                                  (a = i[t]),
                                  (n = nn.CreateOrGetBackfillProgess(
                                    a.unique_id
                                  )),
                                  a.announcement_gid &&
                                  0 != a.announcement_gid.length
                                    ? [
                                        4,
                                        M.c
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
                                      nn.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                );
                              case 1:
                                return (e.sent(), n.bFailed)
                                  ? [2, "continue"]
                                  : (r = M.c.GetClanEventFromAnnouncementGID(
                                      a.announcement_gid
                                    ))
                                  ? n.bSucceeded ||
                                    n.bFailed ||
                                    n.bAlreadyProcessed
                                    ? ((n.bAlreadyProcessed = !0),
                                      nn.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                    : ((n.bAnalysing = !0),
                                      l.setState({
                                        strInfo:
                                          "Processing " +
                                          nn.GetBackfillGIDs().length +
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
                                                N.c.capsule_main
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
                                    nn.CloseProgress(a.unique_id, n),
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
                                          N.c.background_mini
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
                                          N.c.spotlight_main
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
                                  nn.CloseProgress(a.unique_id, n),
                                  nn.BIsBackkFillInProgress()
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
                      return 5e3 < nn.m_nFailures
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
                0 < nn.m_nFailures &&
                  nn.GetBackfillGIDs().forEach(function(e) {
                    var t,
                      a = nn.GetEventBackfillProgress().get(e);
                    a &&
                      a.bFailed &&
                      ((t = M.c.GetClanEventModel(e)) &&
                        n.push(
                          H.createElement(
                            "div",
                            { key: e },
                            H.createElement(
                              Ce.c,
                              {
                                eventModel: t,
                                route: Ce.a.k_eView,
                                openNewWindow: !0
                              },
                              t.GetNameWithFallback(0)
                            ),
                            H.createElement(
                              "div",
                              { className: rn.Error },
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
                  H.createElement(
                    "div",
                    { key: "res_capsule" },
                    "Capsule Resized: ",
                    this.m_mapArtworkResizeSuccess.get("capsule"),
                    " "
                  )
                ),
                e.push(
                  H.createElement(
                    "div",
                    { key: "res_header" },
                    "Header Resized: ",
                    this.m_mapArtworkResizeSuccess.get("background"),
                    " "
                  )
                ),
                e.push(
                  H.createElement(
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
              return H.createElement(
                "div",
                null,
                H.createElement(
                  "h2",
                  null,
                  "Partner Events Backfill Processing Page"
                ),
                null == this.state.eBackfillState &&
                  H.createElement(
                    "div",
                    null,
                    H.createElement(
                      "button",
                      { onClick: this.OnArtworkResizeBackfill },
                      "Begin Artwork Resize Backfill"
                    )
                  ),
                H.createElement(
                  "div",
                  null,
                  H.createElement(
                    "button",
                    {
                      onClick: function() {
                        return nn.CompleteBackfill("resize_image");
                      }
                    },
                    "Stop Backfill"
                  )
                ),
                this.state.strInfo &&
                  H.createElement(
                    "div",
                    null,
                    "Processing: ",
                    this.state.strInfo
                  ),
                H.createElement(
                  "div",
                  null,
                  "Events Processed: ",
                  nn.m_nProcessed
                ),
                H.createElement(
                  "div",
                  null,
                  "Events Succeeded: ",
                  nn.m_nSuccesses
                ),
                H.createElement("div", null, "Events Warning: ", nn.m_nWarning),
                H.createElement("div", null, "Events Failed: ", nn.m_nFailures),
                H.createElement("div", null, "Events Skipped: ", nn.m_nSkipped),
                0 < e.length &&
                  H.createElement(
                    H.Fragment,
                    null,
                    H.createElement("h2", null, "Failure Info"),
                    e
                  ),
                Boolean(t) &&
                  H.createElement(
                    "div",
                    null,
                    H.createElement("h2", null, "Resizing Actions"),
                    t
                  ),
                "started" == this.state.eBackfillState &&
                  H.createElement($.a, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress"
                  })
              );
            }),
            Object(z.c)([s.a], e.prototype, "OnArtworkResizeBackfill", null),
            Object(z.c)([s.a], e.prototype, "BeginArtworkResize", null),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component),
        ln = a("nWbB"),
        sn = a("uIWk"),
        cn = new ((function() {
          function e() {
            (this.m_rgMyWishlistOnSale = null),
              (this.m_rgMyDLCForGamesInLibraryOnSale = null),
              (this.m_rgMySoundtracksForGamesInLibraryOnSale = null),
              (this.m_rgMyInteractiveRecOnSale = null),
              (this.m_rgMySaleTags = null),
              (this.m_rgMyTagRecommendation = null),
              (this.m_mapSaleGameListsByFlavor = new Map()),
              (this.m_mapPromisesByFlavor = new Map()),
              (this.m_rgTopN = null);
          }
          return (
            (e.prototype.GetDiscounts = function(o) {
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(z.e)(this, function(e) {
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
                        (a = Object(Y.f)(t, "application_config"))
                          ? [3, 2]
                          : [
                              4,
                              T.a.get(
                                Y.c.STORE_BASE_URL + "actions/ajaxgetdiscounts",
                                {
                                  params: Object(z.a)(Object(z.a)({}, o), {
                                    cc: Y.c.COUNTRY
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
                        (r = e.sent()), console.error(Object(ce.a)(r)), [3, 4]
                      );
                    case 4:
                      return [2, []];
                  }
                });
              });
            }),
            (e.prototype.GetTopN = function(a, n) {
              return Object(z.b)(this, void 0, void 0, function() {
                var t;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgTopN
                        ? [3, 2]
                        : ((this.m_rgTopN = Object(Y.f)(
                            "top_n",
                            "application_config"
                          )),
                          this.m_rgTopN
                            ? [3, 2]
                            : [
                                4,
                                cn.GetDiscounts({
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyWishlistOnSale
                        ? [3, 2]
                        : ((this.m_rgMyWishlistOnSale = Object(Y.f)(
                            "wishlist_onsale",
                            "application_config"
                          )),
                          this.m_rgMyWishlistOnSale
                            ? [3, 2]
                            : [
                                4,
                                T.a.get(
                                  Y.c.STORE_BASE_URL +
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyDLCForGamesInLibraryOnSale
                        ? [3, 2]
                        : ((this.m_rgMyDLCForGamesInLibraryOnSale = Object(Y.f)(
                            "dlc_onsale",
                            "application_config"
                          )),
                          this.m_rgMyDLCForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                T.a.get(
                                  Y.c.STORE_BASE_URL +
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMySoundtracksForGamesInLibraryOnSale
                        ? [3, 2]
                        : ((this.m_rgMySoundtracksForGamesInLibraryOnSale = Object(
                            Y.f
                          )("dlc_music_onsale", "application_config")),
                          this.m_rgMySoundtracksForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                T.a.get(
                                  Y.c.STORE_BASE_URL +
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyInteractiveRecOnSale
                        ? [3, 2]
                        : ((this.m_rgMyInteractiveRecOnSale = Object(Y.f)(
                            "ir_onsale",
                            "application_config"
                          )),
                          this.m_rgMyInteractiveRecOnSale
                            ? [3, 2]
                            : [
                                4,
                                T.a.get(
                                  Y.c.STORE_BASE_URL +
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMySaleTags
                        ? [3, 2]
                        : ((this.m_rgMySaleTags = Object(Y.f)(
                            "saletags",
                            "application_config"
                          )),
                          this.m_rgMySaleTags
                            ? [3, 2]
                            : [
                                4,
                                T.a.get(
                                  Y.c.STORE_BASE_URL +
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
            (e.prototype.GetTagRecommendorForThisSale = function(r, o, i) {
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyTagRecommendation
                        ? [3, 2]
                        : ((this.m_rgMyTagRecommendation = Object(Y.f)(
                            "tag_recommender",
                            "application_config"
                          )),
                          this.m_rgMyTagRecommendation
                            ? [3, 2]
                            : ((t =
                                Y.c.STORE_BASE_URL +
                                "saleaction/ajaxgetsaletagsrecommendation"),
                              (a = {
                                cc: Y.c.COUNTRY,
                                l: Y.c.LANGUAGE,
                                clanAccountID: r.clanSteamID.GetAccountID(),
                                clanAnnouncementGID: r.AnnouncementGID,
                                count: o,
                                nocache: i
                              }),
                              [
                                4,
                                T.a.get(t, { params: a, withCredentials: !0 })
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
            (e.prototype.GetFlavorCacheKey = function(e, t, a, n) {
              return "key-" + e + "-" + (t || "*") + "-" + (a || "") + "-" + n;
            }),
            (e.prototype.ValidateDataGameByFlavor = function(e) {
              return (
                e &&
                "object" == typeof e &&
                e.solr_index &&
                "number" == typeof e.solr_index &&
                e.appids &&
                Array.isArray(e.appids)
              );
            }),
            (e.prototype.InternalGetSaleGamesByFlavor = function(
              m,
              v,
              h,
              _,
              b,
              g,
              f,
              E,
              y,
              S
            ) {
              var C, O, w;
              return (
                void 0 === E && (E = 0),
                void 0 === y && (y = void 0),
                Object(z.b)(this, void 0, void 0, function() {
                  var t, a, n, r, o, i, l, s, c, u, d, p;
                  return Object(z.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return ((t = this.m_mapSaleGameListsByFlavor.get(m)) ||
                          ((a =
                            "browser_" +
                            g +
                            (_ ? "_" + _ : "_*") +
                            (v ? y : "")),
                          (n = Object(Y.f)(a, "application_config")),
                          this.ValidateDataGameByFlavor(n)
                            ? ((t = n),
                              this.m_mapSaleGameListsByFlavor.set(m, n))
                            : ((t = {
                                appids: [],
                                solr_index: 0,
                                possible_has_more: !0
                              }),
                              this.m_mapSaleGameListsByFlavor.set(m, t))),
                        (r = t.appids.length),
                        0 < (o = E + f - r) && t.possible_has_more)
                          ? ((i =
                              Y.c.STORE_BASE_URL +
                              (h
                                ? "saleaction/ajaxpreviewsaledynamicappquery"
                                : "saleaction/ajaxgetsaledynamicappquery")),
                            (l = {
                              cc: Y.c.COUNTRY,
                              l: Y.c.LANGUAGE,
                              clanAccountID: b.clanSteamID.GetAccountID(),
                              clanAnnouncementGID: b.AnnouncementGID,
                              flavor: g,
                              start: t.solr_index,
                              count: Math.max(o, 25),
                              tabuniqueid: _,
                              return_capsules: !0,
                              search: v ? y : void 0
                            }),
                            [
                              4,
                              T.a.get(i, {
                                params: l,
                                withCredentials: h,
                                cancelToken: null == S ? void 0 : S.token
                              })
                            ])
                          : [3, 2];
                      case 1:
                        if (
                          200 != (null == (s = e.sent()) ? void 0 : s.status) ||
                          1 !=
                            (null === (C = s.data) || void 0 === C
                              ? void 0
                              : C.success) ||
                          null === (O = s.data) ||
                          void 0 === O ||
                          !O.appids
                        )
                          throw new Error(
                            "query failed, status=" +
                              (null == s ? void 0 : s.status) +
                              " success: " +
                              (null === (w = null == s ? void 0 : s.data) ||
                              void 0 === w
                                ? void 0
                                : w.success)
                          );
                        for (c = 0, u = s.data.appids; c < u.length; c++)
                          (d = u[c]), t.appids.push(d);
                        (t.possible_has_more = s.data.possible_has_more),
                          (t.solr_index = s.data.solr_index),
                          s.data.app_info && en.a.AddAppLinks(s.data.app_info),
                          (e.label = 2);
                      case 2:
                        return (
                          this.m_mapSaleGameListsByFlavor.set(m, t),
                          (p = t.possible_has_more || E + f < t.appids.length),
                          [
                            2,
                            {
                              appids: t.appids.slice(E, f),
                              bHasPossibleMoreResults: p
                            }
                          ]
                        );
                    }
                  });
                })
              );
            }),
            (e.prototype.GetSaleGamesByFlavor = function(
              o,
              i,
              l,
              s,
              c,
              u,
              d,
              p
            ) {
              return (
                void 0 === u && (u = 0),
                void 0 === d && (d = void 0),
                Object(z.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n,
                    r = this;
                  return Object(z.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        (d = null == d ? void 0 : d.trim()),
                          (t = Boolean(d)) && ((s = "search"), (i = void 0)),
                          (a = this.GetFlavorCacheKey(
                            s,
                            i,
                            d,
                            l.AnnouncementGID
                          )),
                          (e.label = 1);
                      case 1:
                        if (!this.m_mapPromisesByFlavor.has(a)) return [3, 6];
                        e.label = 2;
                      case 2:
                        return (
                          e.trys.push([2, 4, , 5]),
                          [4, this.m_mapPromisesByFlavor.get(a)]
                        );
                      case 3:
                        return e.sent(), [3, 5];
                      case 4:
                        return e.sent(), [3, 5];
                      case 5:
                        return [3, 1];
                      case 6:
                        return (
                          (n = this.InternalGetSaleGamesByFlavor(
                            a,
                            t,
                            o,
                            i,
                            l,
                            s,
                            c,
                            u,
                            d,
                            p
                          )),
                          this.m_mapPromisesByFlavor.set(a, n),
                          (function() {
                            return Object(z.b)(r, void 0, void 0, function() {
                              return Object(z.e)(this, function(e) {
                                switch (e.label) {
                                  case 0:
                                    return e.trys.push([0, , 2, 3]), [4, n];
                                  case 1:
                                    return e.sent(), [3, 3];
                                  case 2:
                                    return (
                                      this.m_mapPromisesByFlavor.delete(a), [7]
                                    );
                                  case 3:
                                    return [2];
                                }
                              });
                            });
                          })(),
                          [2, n]
                        );
                    }
                  });
                })
              );
            }),
            e
          );
        })())(),
        un = new ((function() {
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
                ((e = Object(Y.f)("points", "application_config")),
                this.ValidateStoreDefault(e) &&
                  Object(m.G)(function() {
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (this.LazyInit(), this.m_bLoaded || !Y.i.logged_in)
                        ? [3, 2]
                        : ((t =
                            Y.c.STORE_BASE_URL +
                            "lunarnewyearmarket/ajaxgettokensummary"),
                          [4, T.a.get(t, { withCredentials: !0 })]);
                    case 1:
                      (a = e.sent()),
                        Object(m.G)(function() {
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
              return Object(z.b)(this, void 0, void 0, function() {
                return Object(z.e)(this, function(e) {
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
            Object(z.c)([m.C], e.prototype, "m_mySummary", void 0),
            e
          );
        })())();
      window.g_SaleTokenPointStore = un;
      var dn = new ((function() {
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
              (Object(m.G)(function() {
                (e.m_userData = Object(Y.f)("doorinfo", "application_config")),
                  (e.m_salePageBackgroundOverride = Object(Y.f)(
                    "doorinfobackground",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundWEBM = Object(Y.f)(
                    "doorinfowebm",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundMP4 = Object(Y.f)(
                    "doorinfomp4",
                    "application_config"
                  )),
                  (e.m_storyImages = Object(Y.f)(
                    "storyimages",
                    "application_config"
                  )),
                  e.m_storyImages || (e.m_storyImages = new Array(4));
              }),
              (this.m_bLoadedFromConfig = !0));
          }),
          (e.prototype.LoadDoorData = function() {
            return Object(z.b)(this, void 0, void 0, function() {
              var t, a;
              return Object(z.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = Y.c.STORE_BASE_URL + "saleaction/ajaxgetopendoor"),
                      [4, T.a.get(t, { withCredentials: !0 })]
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
            var t = B.a.GetTimeNowWithOverride();
            return (
              Y.i.logged_in &&
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
              Object(z.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o = this;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !Y.i.logged_in ||
                        !this.m_userData ||
                        i > this.m_userData.length
                      )
                        return [2, null];
                      (t = Y.c.STORE_BASE_URL + "saleaction/ajaxopendoor"),
                        (a = new FormData()).append("sessionid", Y.c.SESSIONID),
                        a.append("authwgtoken", Y.i.authwgtoken),
                        a.append("door_index", "" + i),
                        l || a.append("open_door", "0"),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, T.a.post(t, a, { withCredentials: !0 })]
                      );
                    case 2:
                      return 1 == (n = e.sent()).data.success
                        ? (Object(m.G)(function() {
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
                              l && un.AddPoints(100);
                          }),
                          [2, n.data.rewards])
                        : (console.error(Object(ce.a)(n)), [3, 4]);
                    case 3:
                      return (
                        (r = e.sent()), console.error(Object(ce.a)(r)), [3, 4]
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
          Object(z.c)([m.C], e.prototype, "m_userData", void 0),
          Object(z.c)(
            [m.C],
            e.prototype,
            "m_salePageBackgroundOverride",
            void 0
          ),
          Object(z.c)([m.C], e.prototype, "m_salePageBackgroundWEBM", void 0),
          Object(z.c)([m.C], e.prototype, "m_salePageBackgroundMP4", void 0),
          Object(z.c)([m.C], e.prototype, "m_storyImages", void 0),
          Object(z.c)([m.C], e.prototype, "m_strLastDoorOpenKey", void 0),
          e
        );
      })())();
      window.g_DoorStore = dn;
      var pn = ["recent_events", "recent_tagged_events"],
        mn = (function() {
          function e() {
            this.m_rgRecentEvent = new Map();
          }
          return (
            (e.Get = function() {
              return (
                e.s_Singleton ||
                  ((e.s_Singleton = new e()).Init(),
                  "dev" == Y.c.WEB_UNIVERSE &&
                    (window.g_EventListSaleStore = e.s_Singleton)),
                e.s_Singleton
              );
            }),
            (e.prototype.Init = function() {
              var a = this;
              pn.forEach(function(e) {
                var t = Object(Y.f)(e, "application_config");
                a.ValidateStoreDefault(t) && a.AddAllRecentEvents(e, t);
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
                ("string" == typeof t[0].clan_steamid &&
                  "string" == typeof t[0].gid &&
                  "number" == typeof t[0].appid)
              );
            }),
            (e.prototype.AddAllRecentEvents = function(e, t) {
              this.m_rgRecentEvent.has(e) ||
                this.m_rgRecentEvent.set(e, new Array());
              var a = this.m_rgRecentEvent.get(e);
              t.forEach(function(e) {
                return a.push(e);
              });
            }),
            (e.prototype.GetRecentEventsForSalesPage = function(a) {
              return Object(z.b)(this, void 0, void 0, function() {
                var t;
                return Object(z.e)(this, function(e) {
                  return (
                    (t = {
                      cc: Y.c.COUNTRY || "US",
                      l: Y.c.LANGUAGE,
                      clan_account_id: a.clanSteamID.GetAccountID(),
                      clan_event_gid: a.GID
                    }),
                    [
                      2,
                      this.InternalEventForSalePageSection("recent_events", t)
                    ]
                  );
                });
              });
            }),
            (e.prototype.GetRecentTaggedEventsForSalesPage = function(a, n) {
              return Object(z.b)(this, void 0, void 0, function() {
                var t;
                return Object(z.e)(this, function(e) {
                  return (
                    (t = {
                      cc: Y.c.COUNTRY || "US",
                      l: Y.c.LANGUAGE,
                      start_time: n.event_schedule_rtime_start
                        ? n.event_schedule_rtime_start
                        : a.startTime,
                      end_time: n.event_schedule_rtime_end
                        ? n.event_schedule_rtime_end
                        : a.endTime,
                      count: n.smart_section_max_apps,
                      tags: (n.smart_section_event_tags || []).join(",")
                    }),
                    [
                      2,
                      this.InternalEventForSalePageSection(
                        "recent_tagged_events",
                        t
                      )
                    ]
                  );
                });
              });
            }),
            (e.prototype.InternalEventForSalePageSection = function(i, l) {
              return Object(z.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o = this;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (this.m_rgRecentEvent.has(i)) return [3, 4];
                      this.m_rgRecentEvent.set(i, new Array()),
                        (t =
                          Y.c.STORE_BASE_URL +
                          ("recent_events" == i
                            ? "saleaction/ajaxrecentsaleevents"
                            : "saleaction/ajaxrecenttaggedsaleevents")),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, T.a.get(t, { params: l, withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        1 == (a = e.sent()).data.success &&
                          Object(m.G)(function() {
                            o.AddAllRecentEvents(i, a.data.recent_events),
                              a.data.partnerevents &&
                                M.c.RegisterClanEvents(a.data.partnerevents),
                              a.data.app_info &&
                                en.a.AddAppLinks(a.data.app_info);
                          }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (n = e.sent()),
                        (r = Object(ce.a)(n)),
                        console.error(
                          "InternalEventForSalePageSection for " +
                            i +
                            " failed:" +
                            r.strErrorMsg,
                          r
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, this.m_rgRecentEvent.get(i)];
                  }
                });
              });
            }),
            Object(z.c)([m.C], e.prototype, "m_rgRecentEvent", void 0),
            Object(z.c)([m.k], e.prototype, "Init", null),
            Object(z.c)([m.k], e.prototype, "AddAllRecentEvents", null),
            e
          );
        })(),
        vn = new ((function() {
          function e() {
            (this.m_saleExp = {}), (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var e;
              this.m_bLoadedFromConfig ||
                ((e = document.getElementById("application_config")) &&
                  (this.m_saleExp = Object(Y.f)("xprmnt", e)),
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
        hn = (function() {
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
                e = Object(Y.f)("subscriptionsapps", "application_config");
              this.ValidateStoreDefault(e) &&
                Object(m.G)(function() {
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
              return Object(z.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_mapMasterAppToBenefitApps.has(r)
                        ? [2, !0]
                        : [
                            4,
                            T.a.get(
                              Y.c.STORE_BASE_URL +
                                "actions/ajaxresolvesubscriptions",
                              {
                                params: {
                                  master_app_id: r,
                                  cc: Y.c.COUNTRY,
                                  origin: self.origin
                                }
                              }
                            )
                          ];
                    case 1:
                      return (
                        (t = e.sent()),
                        (a = t && t.data)
                          ? (Object(m.G)(function() {
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
            Object(z.c)(
              [m.C],
              e.prototype,
              "m_mapMasterAppToBenefitApps",
              void 0
            ),
            e
          );
        })(),
        _n = a("qP7j"),
        bn = a.n(_n),
        gn = new ((function() {
          function e() {}
          return (
            (e.prototype.DeleteForumTopic = function(r, o, i, l, s) {
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          Y.c.COMMUNITY_BASE_URL +
                          "forum/" +
                          r.GetAccountID() +
                          "/" +
                          o +
                          "/deletetopic/"),
                        null != i && "" != i && (t += i + "/"),
                        (a = new FormData()).append("sessionid", Y.c.SESSIONID),
                        a.append("gidforumtopic", l),
                        [
                          4,
                          T.a.post(t, a, {
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
        fn = (function(a) {
          function l(e) {
            var t = a.call(this, e) || this;
            return (
              (t.m_cancelSignal = T.a.CancelToken.source()),
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
            Object(z.d)(l, a),
            (l.prototype.componentDidMount = function() {
              this.props.bNoConfirmationNeeded && this.OnDelete();
            }),
            (l.prototype.OnDeleteEventSuccessCallback = function() {
              this.props.partnerEventStore.ResetModel(),
                this.state.bDeleteCommentThread
                  ? gn
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
                Object(z.a)({ dialogState: "error" }, Object(ce.a)(e))
              );
            }),
            (l.prototype.OnDeleteForumTopicFailureCallback = function(e) {
              this.setState(
                Object(z.a)(
                  { dialogState: "failed_thread_delete" },
                  Object(ce.a)(e)
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
                  var o = t.GetNameWithFallback(Object(A.g)(Y.c.LANGUAGE)),
                    i = t.BIsVisibleEvent()
                      ? "#EventDisplay_AreYouSure_Visible"
                      : "#EventDisplay_AreYouSure",
                    n = Object(Z.f)(i, o),
                    a = this.OnDelete;
                  t.BHasForumTopicGID() &&
                    r.push(
                      H.createElement(
                        "div",
                        {
                          key: "WantToDeleteCmtThread",
                          className: bn.a.Padding
                        },
                        H.createElement("input", {
                          type: "checkbox",
                          id: "del_cmt_post",
                          name: "del_cmt_post",
                          defaultChecked: this.state.bDeleteCommentThread,
                          onChange: this.OnChangeDeleteForum
                        }),
                        H.createElement(
                          "label",
                          { htmlFor: "del_cmt_post" },
                          Object(Z.f)("#EventDisplay_DeleteEvent_Comment")
                        )
                      )
                    );
                  break;
                case "waiting":
                  (n = Object(Z.f)("#EventDisplay_DeleteEvent_InProgress")),
                    r.push(H.createElement($.a, { key: "throbber" }));
                  break;
                case "error":
                  (n = Object(Z.f)("#EventDisplay_DeleteEvent_Error")),
                    r.push(
                      H.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++l.m_uniqueError,
                          className: bn.a.ErrorStyles
                        },
                        this.state.strErrorMsg
                      )
                    );
                  break;
                case "failed_thread_delete":
                  (n = Object(Z.f)(
                    "#EventDisplay_DeleteEvent_ForumTopicError"
                  )),
                    r.push(
                      H.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++l.m_uniqueError,
                          className: bn.a.ErrorStyles
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
                  (n = Object(Z.f)("#EventDisplay_DeleteEvent_Success")),
                    this.props.onDeleteSuccessAndCloseDialog &&
                      (a = function() {
                        e.props.onDeleteSuccessAndCloseDialog(),
                          e.props.closeModal();
                      });
              }
              return H.createElement(
                X.c,
                {
                  strTitle: Object(Z.f)("#EventDisplay_DeleteEvent"),
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
            Object(z.c)(
              [s.a],
              l.prototype,
              "OnDeleteEventSuccessCallback",
              null
            ),
            Object(z.c)(
              [s.a],
              l.prototype,
              "OnDeleteForumTopicSuccessCallback",
              null
            ),
            Object(z.c)(
              [s.a],
              l.prototype,
              "OnDeleteEventFailureCallback",
              null
            ),
            Object(z.c)(
              [s.a],
              l.prototype,
              "OnDeleteForumTopicFailureCallback",
              null
            ),
            Object(z.c)([s.a], l.prototype, "SetToWaiting", null),
            Object(z.c)([s.a], l.prototype, "OnDelete", null),
            Object(z.c)([s.a], l.prototype, "OnChangeDeleteForum", null),
            l
          );
        })(H.Component),
        En = a("6eA3"),
        yn = a.n(En),
        Sn = (function(t) {
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
            Object(z.d)(e, t),
            (e.prototype.OnDeleteVerifyRequest = function(e) {
              Object(j.c)(
                H.createElement(fn, {
                  eventModel: this.props.eventModel,
                  onDeleteSuccessAndCloseDialog: this
                    .OnDeleteSuccessAndComplete,
                  partnerEventStore: this.props.partnerEventStore
                }),
                Object(q.m)(e)
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
                r = e.bPreviewMode,
                o = e.partnerEventStore,
                i = e.useAnchors;
              if (this.state.bRedirectToHome)
                return Object(Ce.i)(n, Ce.a.k_eCommunityAdminPage);
              var l = U.a.Get().GetPartnerEventPermissions(n.clanSteamID),
                s = n.visibility_state == M.b.k_EEventStateVisible,
                c = n.visibility_state == M.b.k_EEventStateStaged;
              if (l.can_edit || l.support_user) {
                var u = [];
                if (void 0 !== this.state.nMaxSaleDayIndex)
                  for (var d = 0; d <= this.state.nMaxSaleDayIndex; ++d)
                    u.push({
                      label: Object(Z.f)("#SalePage_Admin_SaleEventDay", d + 1),
                      data: d
                    });
                var p = Object(Y.e)(),
                  m = "community" == p,
                  v = "store" == p;
                return H.createElement(
                  y.a,
                  null,
                  H.createElement(
                    "div",
                    { className: En.DisplayAdminPanel },
                    H.createElement(
                      "span",
                      { className: En.DisplayAdminPanel_Title },
                      Object(Z.f)("#EventDisplay_Admin_Title")
                    ),
                    H.createElement(
                      "div",
                      { className: En.DisplayAdminPanel_ctn },
                      a,
                      a &&
                        H.createElement(
                          "span",
                          { className: En.DisplayAdminPanel_Spacer },
                          " "
                        ),
                      H.createElement(
                        Ce.c,
                        {
                          eventModel: n,
                          route: Ce.a.k_eCommunityEdit,
                          openNewWindow: i,
                          className: Object(W.a)(h.Button, En.AdminButton)
                        },
                        Object(Z.f)("#EventEditor_Edit")
                      ),
                      o &&
                        H.createElement(
                          "span",
                          {
                            className: h.Button + " " + En.AdminButton,
                            onClick: this.OnDeleteVerifyRequest
                          },
                          Object(Z.f)("#EventDisplay_DeleteEvent")
                        ),
                      !s &&
                        H.createElement(
                          H.Fragment,
                          null,
                          H.createElement(
                            Ce.c,
                            {
                              eventModel: n,
                              route: Ce.a.k_eCommunityPublish,
                              openNewWindow: i,
                              className: Object(W.a)(h.Button, En.AdminButton)
                            },
                            Object(Z.f)(
                              c
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish"
                            )
                          )
                        ),
                      H.createElement(
                        Ce.c,
                        {
                          eventModel: n,
                          route: Ce.a.k_eCommunityAdminPage,
                          openNewWindow: i,
                          className: Object(W.a)(h.Button, En.AdminButton)
                        },
                        Object(Z.f)("#EventDisplay_Events")
                      ),
                      Boolean(
                        void 0 !== this.state.nMaxSaleDayIndex && 0 < u.length
                      ) &&
                        H.createElement(b.h, {
                          strDropDownClassName: h.DropDownScroll,
                          rgOptions: u,
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
                        H.createElement(
                          Ce.c,
                          {
                            eventModel: n,
                            route: Ce.a.k_eStoreSalePage,
                            openNewWindow: i,
                            className: Object(W.a)(h.Button, En.AdminButton)
                          },
                          Object(Z.f)("#EventDisplay_SalesPage")
                        ),
                      Boolean(
                        n.jsondata.bSaleEnabled && Y.i.is_support && n.GID
                      ) &&
                        H.createElement(
                          "a",
                          {
                            href:
                              Y.c.STATS_BASE_URL +
                              "sales/details/?gid=" +
                              n.GID +
                              "&clanid=" +
                              n.clanSteamID.GetAccountID(),
                            target: Y.c.IN_CLIENT ? "" : "_blank",
                            className: Object(W.a)(
                              h.Button,
                              En.AdminButton,
                              h.ValveOnlyBackground
                            )
                          },
                          Object(Z.f)("#EventDisplay_StatsPage")
                        ),
                      Boolean(s && (v || r)) &&
                        H.createElement(
                          Ce.c,
                          {
                            eventModel: n,
                            route: Ce.a.k_eCommunityView,
                            openNewWindow: i,
                            className: Object(W.a)(h.Button, En.AdminButton)
                          },
                          Object(Z.f)("#EventDisplay_ViewOnCommunity")
                        ),
                      Boolean(s && m) &&
                        H.createElement(
                          Ce.c,
                          {
                            eventModel: n,
                            route: Ce.a.k_eStoreView,
                            openNewWindow: i,
                            className: Object(W.a)(h.Button, En.AdminButton)
                          },
                          Object(Z.f)("#EventDisplay_ViewOnStore")
                        )
                    )
                  )
                );
              }
              return H.createElement("span", null);
            }),
            Object(z.c)([s.a], e.prototype, "OnDeleteVerifyRequest", null),
            Object(z.c)([s.a], e.prototype, "OnDeleteSuccessAndComplete", null),
            Object(z.c)([s.a], e.prototype, "OnChangeVisibilityDate", null),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component);
      var Cn = a("bWts"),
        On = a.n(Cn),
        wn = a("XsxU"),
        Tn = a.n(wn),
        In = a("TOXn"),
        jn = a("NKJh"),
        kn = a.n(jn),
        Dn = a("RQmk"),
        Gn = Object(r.a)(function(e) {
          var c = e.clanAccountID,
            u = e.gidAnnouncement,
            d = e.partnerEventStore,
            p = e.trackingLocation,
            t = e.bViewAllShowInfiniteScroll,
            a = f.a.InitFromClanID(c),
            m = Object(H.useRef)(null),
            n = Object(H.useState)(null),
            r = n[0],
            v = n[1],
            o = Object(H.useState)(!0),
            i = o[0],
            h = o[1],
            l = Object(H.useState)(!1),
            s = l[0],
            _ = l[1];
          if (
            (Object(H.useEffect)(
              function() {
                return (
                  Object(z.b)(void 0, void 0, void 0, function() {
                    var t, a, n, r, o, i, l, s;
                    return Object(z.e)(this, function(e) {
                      switch (e.label) {
                        case 0:
                          return (
                            m.current &&
                              m.current(
                                "PartnerEventRow Initializng new mount"
                              ),
                            (t = T.a.CancelToken.source()),
                            (m.current = t.cancel),
                            (a = f.a.InitFromClanID(c)),
                            [4, E.a.LoadClanInfoForClanSteamID(a)]
                          );
                        case 1:
                          return (
                            e.sent(),
                            [
                              4,
                              d.LoadAdjacentPartnerEventsByAnnouncement(
                                u,
                                a,
                                null,
                                4,
                                4,
                                void 0,
                                t
                              )
                            ]
                          );
                        case 2:
                          return (
                            (n = e.sent()),
                            t.token.reason ||
                              ((r = (n = n || [])
                                .filter(function(e) {
                                  return e.GetAnnouncementGID() != u;
                                })
                                .map(function(e) {
                                  return e.AnnouncementGID;
                                })),
                              at.g(r),
                              (o = r.slice(0, 3).map(function(e) {
                                return d.GetClanEventFromAnnouncementGID(e);
                              })),
                              v(o),
                              h(!1),
                              p &&
                                ((i = U.a.Get().GetTracker()),
                                (l = !1),
                                d.BHasClanAnnouncementGID(u) &&
                                  (s = d.GetClanEventFromAnnouncementGID(u)) &&
                                  s.BIsPartnerEvent() &&
                                  s.BIsVisibleEvent() &&
                                  (i.MarkEventRead(
                                    s.GID,
                                    s.clanSteamID.GetAccountID(),
                                    p
                                  ),
                                  (l = !0)),
                                0 < o.length &&
                                  (n
                                    .filter(function(e) {
                                      return e.BIsPartnerEvent();
                                    })
                                    .forEach(function(e) {
                                      return i.MarkEventShown(
                                        e.GID,
                                        e.clanSteamID.GetAccountID(),
                                        p
                                      );
                                    }),
                                  (l = !0)),
                                l && i.Flush())),
                            [2]
                          );
                      }
                    });
                  }),
                  function() {
                    m.current && m.current("PartnerEventRow: unmounting");
                  }
                );
              },
              [c, u, d, p]
            ),
            i)
          )
            return g.a.createElement($.a, {
              position: "center",
              size: "medium"
            });
          if (0 == r.length) return g.a.createElement("div", null);
          var b = E.a.GetClanInfoByClanAccountID(c);
          return g.a.createElement(
            y.a,
            null,
            g.a.createElement(
              "div",
              { className: Tn.a.OtherEventsCtn },
              g.a.createElement(
                "div",
                { className: V.a.EventSectionTitleCtn },
                g.a.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      V.a.EventSectionTitle,
                      "EventSectionTitle"
                    )
                  },
                  Object(Z.n)("#EventBrowse_MoreEventsTitle", b.group_name),
                  " "
                ),
                g.a.createElement(
                  "div",
                  { className: V.a.EventSectionSpacer },
                  " "
                ),
                t
                  ? g.a.createElement(
                      "div",
                      {
                        className: V.a.EventSectionMoreBtn,
                        onClick: function() {
                          return _(!0);
                        }
                      },
                      Object(Z.f)("#EventBrowse_MoreEventsBtn")
                    )
                  : g.a.createElement(
                      Ce.c,
                      {
                        eventModel: r[0],
                        route: Ce.a.k_eViewWebSiteHub,
                        className: V.a.EventSectionMoreBtn
                      },
                      Object(Z.f)("#EventBrowse_MoreEventsBtn")
                    )
              ),
              g.a.createElement(
                "div",
                { className: Tn.a.OtherEvents },
                r.map(function(e) {
                  return g.a.createElement(Ln, {
                    key: e.AnnouncementGID,
                    event: e
                  });
                })
              ),
              Boolean(s) &&
                g.a.createElement(ue, {
                  appid: r[0].appid,
                  clanSteamID: a,
                  announcementGID: r[0].AnnouncementGID,
                  closeModal: function() {
                    return _(!1);
                  },
                  partnerEventStore: d
                })
            )
          );
        }),
        Ln = Object(r.a)(function(e) {
          var t = e.event,
            a = e.imageURLOverride,
            n = e.openNewWindow,
            r = e.appInfo,
            o = e.langOverride,
            i = e.onClick;
          if (!t)
            return g.a.createElement("div", {
              className: Tn.a.OtherEvents_EventCtn
            });
          var l = o || Object(A.g)(Y.c.LANGUAGE),
            s =
              void 0 !== a
                ? a
                : t.GetImageURLWithFallback("capsule", l, N.c.capsule_main),
            c = t.GetNameWithFallback(l) || "",
            u = t.GetCategoryAsString(),
            d = t.GetSummaryWithFallback(l),
            p = t.GetSubTitleWithLanguageFallback(l) || "",
            m = Object(mt.u)(s);
          return (
            p && (30 < p.length || 30 < c.length) && (p = void 0),
            g.a.createElement(
              g.a.Fragment,
              null,
              g.a.createElement(
                Ce.c,
                {
                  className: Object(W.a)(
                    Tn.a.OtherEvents_EventCtn,
                    Tn.a.HoversEnabled
                  ),
                  eventModel: t,
                  route: Ce.a.k_eView,
                  openNewWindow: n,
                  onClick: i
                },
                g.a.createElement(
                  "div",
                  { className: Tn.a.EventSummaryContainer },
                  g.a.createElement(
                    "div",
                    { className: Tn.a.EventSummaryType },
                    u
                  ),
                  g.a.createElement(
                    "div",
                    { className: Tn.a.EventSummaryText },
                    d
                  )
                ),
                g.a.createElement("div", {
                  className: Tn.a.OtherEvents_BGImage,
                  style: {
                    backgroundColor: "#ffffff",
                    backgroundImage: "url(" + m + ")"
                  }
                }),
                g.a.createElement(
                  "div",
                  { className: Tn.a.OtherEvents_ContentCtn },
                  g.a.createElement(
                    "div",
                    { className: Tn.a.OtherEvents_MainImageCtn },
                    g.a.createElement("img", {
                      src: s,
                      className: Tn.a.OtherEvents_MainImage
                    })
                  ),
                  g.a.createElement(
                    "div",
                    { className: Tn.a.OtherEvents_TextCtn },
                    g.a.createElement(
                      "div",
                      { className: Tn.a.OtherEvents_TextTitle },
                      c
                    ),
                    p &&
                      g.a.createElement(
                        "div",
                        { className: Tn.a.OtherEvents_SubTitle },
                        p
                      ),
                    g.a.createElement(ht.a, {
                      bSingleLine: !0,
                      dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                    })
                  )
                )
              ),
              r &&
                g.a.createElement(
                  "span",
                  { className: Tn.a.AppCapsuleCtn },
                  g.a.createElement(
                    Dn.a,
                    {
                      strURL: Y.c.STORE_BASE_URL + "app/" + r.appid,
                      type: "app",
                      id: r.appid,
                      hoverClassName: Tn.a.AppCapsuleImageHover
                    },
                    g.a.createElement("img", {
                      className: Tn.a.AppCapsuleImage,
                      src: e.appInfo.tiny_capsule
                    })
                  ),
                  g.a.createElement(
                    "span",
                    { className: Tn.a.AppCapsulePrice },
                    Boolean(e.appInfo.discount_percent) &&
                      g.a.createElement(
                        "span",
                        { className: kn.a.StoreSaleDiscountBox },
                        "-" + e.appInfo.discount_percent + "%"
                      ),
                    !e.appInfo.is_free &&
                      e.appInfo.price &&
                      g.a.createElement(
                        "span",
                        { className: kn.a.StoreSalePriceBox },
                        e.appInfo.price
                      )
                  )
                )
            )
          );
        }),
        An = Object(r.a)(function(e) {
          var t = e.event,
            a = e.imageURLOverride,
            n = e.openNewWindow,
            r = e.onClick;
          if (!t)
            return g.a.createElement("div", {
              className: Tn.a.OtherEvents_EventCtn
            });
          var o = Object(A.g)(Y.c.LANGUAGE),
            i =
              void 0 !== a
                ? a
                : t.GetImageURLWithFallback("capsule", o, N.c.capsule_main),
            l = t.GetNameWithFallback(o),
            s = t.GetCategoryAsString();
          return g.a.createElement(
            Ce.c,
            {
              className: Tn.a.OtherEvents_EventCtn + " " + Tn.a.HorizontalEvent,
              eventModel: t,
              route: Ce.a.k_eView,
              openNewWindow: n,
              onClick: r
            },
            g.a.createElement(
              "div",
              { className: Tn.a.OtherEvents_ContentCtn },
              g.a.createElement(
                "div",
                { className: Tn.a.OtherEvents_MainImageCtn },
                g.a.createElement("img", {
                  src: i,
                  className: Tn.a.OtherEvents_MainImage
                })
              )
            ),
            g.a.createElement(
              "div",
              { className: Tn.a.OtherEvents_TextCtn },
              g.a.createElement(
                "div",
                { className: Tn.a.HorizontalDescriptionCtn },
                g.a.createElement(
                  "div",
                  { className: Tn.a.HorizontalDescription },
                  s
                ),
                g.a.createElement(ht.a, {
                  bSingleLine: !0,
                  dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                })
              ),
              g.a.createElement("div", { className: Tn.a.HorizontalTitle }, l)
            )
          );
        }),
        Nn = a("FhLd");
      function Bn(e, t) {
        if (e && t && t.facetFilters) {
          for (var a = 0, n = t.facetFilters; a < n.length; a++) {
            var r = n[a];
            if (r && r.tagFilters) {
              for (
                var o = !1, i = 0, l = 0, s = r.tagFilters;
                l < s.length;
                l++
              ) {
                var c = s[l];
                if (c && (i++, (o = zr(e, c)))) break;
              }
              if (0 !== i && !o) return;
            }
          }
          return 1;
        }
      }
      var Mn = Object(r.a)(function(e) {
          function a() {
            var e = { facetFilters: new Array() };
            (e.facetFilters = i.facetFilters.filter(function(e) {
              return 0 < e.tagFilters.length;
            })),
              c(e);
          }
          var n = e.language,
            r = e.facets,
            t = e.fnApplyFacetGroupFilter,
            o = Object(H.useState)(function() {
              var t = { facetFilters: new Array() };
              return (
                r.forEach(function(e) {
                  return t.facetFilters.push({ tagFilters: new Array() });
                }),
                t
              );
            }),
            i = o[0],
            l = (o[1], Object(H.useState)(null)),
            s = l[0],
            c = l[1];
          return (
            Object(H.useEffect)(
              function() {
                t(s);
              },
              [t, s]
            ),
            H.createElement(
              H.Fragment,
              null,
              H.createElement(
                "h1",
                null,
                Object(Z.f)("#FacetedBrowse_Heading")
              ),
              r.map(function(e, t) {
                return H.createElement(Rn, {
                  language: n,
                  key: "facet_" + Z.a.Get(e.name, n) + "_" + t,
                  facet: e,
                  facetFilter: i.facetFilters[t],
                  fnOnUpdateFacetGroupFilter: a
                });
              })
            )
          );
        }),
        Rn = Object(r.a)(function(e) {
          function a(e, t) {
            t
              ? r.tagFilters.push(e)
              : r.tagFilters.splice(r.tagFilters.indexOf(e)),
              o();
          }
          var n = e.language,
            t = e.facet,
            r = e.facetFilter,
            o = e.fnOnUpdateFacetGroupFilter,
            i = Object(Z.f)(Z.a.GetWithFallback(t.name, n));
          return H.createElement(
            H.Fragment,
            null,
            H.createElement("h2", null, i),
            t.facetValues.map(function(e, t) {
              return H.createElement(xn, {
                language: n,
                key: "facet_" + i + "_value_" + Z.a.Get(e.name, n) + "_" + t,
                value: e,
                fnOnToggleTagFilter: a
              });
            })
          );
        }),
        xn = Object(r.a)(function(e) {
          var t = e.language,
            a = e.value,
            n = e.fnOnToggleTagFilter,
            r = Object(H.useState)(!1),
            o = r[0],
            i = r[1],
            l = Z.a.Get(a.name, t),
            s = Boolean(a.subtitle) ? Z.a.Get(a.subtitle, t) : null;
          return H.createElement(
            "div",
            {
              className: o ? Nn.FacetValueEnabled : Nn.FacetValue,
              onClick: function(e) {
                i(!o), n(a.filter, !o);
              }
            },
            H.createElement("div", { className: Nn.FacetValueName }, l),
            Boolean(s) &&
              H.createElement("div", { className: Nn.FacetValueDescription }, s)
          );
        }),
        Fn = (function() {
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
            Object(z.c)([m.C], e.prototype, "m_stats", void 0),
            Object(z.c)([m.C], e.prototype, "m_lastUpdateTime", void 0),
            e
          );
        })(),
        Pn = new ((function() {
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
                ((e = Object(Y.f)("trackingdatasummary", "application_config")),
                this.ValidateStoreDefault(e) &&
                  this.m_mapSummaryStats.set(e.clan_account_id, new Fn(e)),
                (t = Object(Y.f)("trackingdataevents", "application_config")),
                this.ValidateStoreDefaultList(t) &&
                  t.forEach(function(e) {
                    var t = f.a.InitFromClanID(e.clan_account_id),
                      a = n.GetKey(t, e.event_gid);
                    n.m_mapPerEventStats.set(a, new Fn(e));
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
                  this.m_mapPerEventStats.set(a, new Fn(null)),
                this.m_mapPerEventStats.get(a)
              );
            }),
            (e.prototype.GetTotalStats = function(e) {
              return (
                this.LazyInit(),
                this.m_mapSummaryStats.has(e.GetAccountID()) ||
                  this.m_mapSummaryStats.set(e.GetAccountID(), new Fn(null)),
                this.m_mapSummaryStats.get(e.GetAccountID())
              );
            }),
            (e.prototype.GetKey = function(e, t) {
              return e.GetAccountID() + "_" + t;
            }),
            (e.prototype.LoadStatsForEvents = function(c, u, d) {
              return Object(z.b)(this, void 0, void 0, function() {
                var n,
                  t,
                  a,
                  r,
                  o,
                  i,
                  l,
                  s = this;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        (this.LazyInit(),
                        (n = Date.now() / 1e3),
                        !(t = u.filter(function(e) {
                          var t = s.GetKey(c, e),
                            a = s.m_mapPerEventStats.get(t);
                          return (
                            !a ||
                            null == a.m_stats ||
                            a.m_lastUpdateTime < n - 3600
                          );
                        })) || 0 == t.length)
                      )
                        return [2, !0];
                      (a =
                        Object(Y.d)() + "actions/ajaxgetpartnereventsreport"),
                        (r = {
                          sessionid: Y.c.SESSIONID,
                          clan_account_id: c.GetAccountID(),
                          gidlist: t.join(",")
                        }),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          T.a.get(a, {
                            params: r,
                            withCredentials: !0,
                            cancelToken: d.token
                          })
                        ]
                      );
                    case 2:
                      return (
                        (o = e.sent()),
                        Object(m.G)(function() {
                          s.m_mapSummaryStats.set(
                            c.GetAccountID(),
                            new Fn(o.data.summary)
                          ),
                            o.data.events_detail.forEach(function(e) {
                              var t = s.GetKey(c, e.event_gid);
                              s.m_mapPerEventStats.has(t)
                                ? s.m_mapPerEventStats.get(t).reset(e)
                                : s.m_mapPerEventStats.set(t, new Fn(e));
                            });
                        }),
                        [2, !0]
                      );
                    case 3:
                      return (
                        (i = e.sent()),
                        (l = Object(ce.a)(i)),
                        console.error(
                          "CPartnerEventReportingStore " + l.strErrorMsg,
                          l
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, !1];
                  }
                });
              });
            }),
            (e.prototype.BHasEventStats = function(e, t) {
              var a = f.a.InitFromClanID(e),
                n = this.GetKey(a, t),
                r = this.m_mapPerEventStats.get(n);
              return Boolean(r && r.m_stats);
            }),
            Object(z.c)([m.C], e.prototype, "m_mapPerEventStats", void 0),
            Object(z.c)([m.C], e.prototype, "m_mapSummaryStats", void 0),
            Object(z.c)([m.k], e.prototype, "LazyInit", null),
            e
          );
        })())(),
        Hn = a("sGzE"),
        zn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.summary,
                a = e.bEventIsInModerationQueue,
                n = e.bIsAllowedInLibrary,
                r = e.bIncludeDescription;
              return 0 == t.total_read + t.total_showm
                ? null
                : H.createElement(
                    "div",
                    null,
                    H.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          Hn.StatsCtnTitle,
                          r ? Hn.NormalStatsMode : Hn.SmallStatsMode
                        )
                      },
                      H.createElement(
                        "h1",
                        null,
                        Object(Z.f)("#EventDashBoard_SummaryStats_Title")
                      ),
                      Boolean(r) &&
                        H.createElement(
                          "p",
                          null,
                          Object(Z.f)("#EventDashBoard_SummaryStats_Desc"),
                          " ",
                          H.createElement(
                            "a",
                            {
                              href:
                                "https://partner.steamgames.com/doc/marketing/event_tools/stats",
                              target: "_blank"
                            },
                            Object(Z.f)("#EventDashBoard_SummaryStats_Link")
                          )
                        )
                    ),
                    n &&
                      a &&
                      H.createElement(
                        "div",
                        { className: Hn.ModerationWarning },
                        Object(Z.f)("#EventDashBoard_ModerationQueueWarning")
                      ),
                    H.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          Hn.StatsCtn,
                          r ? Hn.NormalStatsMode : Hn.SmallStatsMode
                        )
                      },
                      n &&
                        H.createElement(
                          "div",
                          {
                            className: Object(W.a)(
                              Hn.StatsLeftSection,
                              a && Hn.DisabledStats
                            )
                          },
                          H.createElement(
                            "div",
                            { className: Hn.StatsTitle_ctn },
                            H.createElement(
                              "span",
                              null,
                              Object(Z.f)(
                                "#EventDashBoard_Location_LibraryHome"
                              )
                            )
                          ),
                          H.createElement(
                            "div",
                            { className: Hn.StatsTitle },
                            H.createElement(
                              "span",
                              null,
                              Object(Z.f)(
                                "#EventDashBoard_Summary_LibraryHome_Shown"
                              )
                            ),
                            H.createElement(
                              "span",
                              null,
                              t.library_overview_shown.toLocaleString(
                                Z.e.GetPreferredLocales()
                              )
                            )
                          ),
                          H.createElement(
                            "div",
                            { className: Hn.StatsTitle },
                            H.createElement(
                              "span",
                              null,
                              Object(Z.f)(
                                "#EventDashBoard_Summary_LibraryHome_Read"
                              )
                            ),
                            H.createElement(
                              "span",
                              null,
                              t.library_overview_read.toLocaleString(
                                Z.e.GetPreferredLocales()
                              )
                            )
                          ),
                          H.createElement("br", null),
                          H.createElement(
                            "div",
                            { className: Hn.StatsTitle_ctn },
                            H.createElement(
                              "span",
                              null,
                              Object(Z.f)(
                                "#EventDashBoard_Location_LibraryDetail"
                              )
                            )
                          ),
                          H.createElement(
                            "div",
                            { className: Hn.StatsTitle },
                            H.createElement(
                              "span",
                              null,
                              Object(Z.f)(
                                "#EventDashBoard_Summary_AppDetailSpotlight_Shown"
                              )
                            ),
                            H.createElement(
                              "span",
                              null,
                              t.app_details_spotlight_shown.toLocaleString(
                                Z.e.GetPreferredLocales()
                              )
                            )
                          ),
                          H.createElement(
                            "div",
                            { className: Hn.StatsTitle },
                            H.createElement(
                              "span",
                              null,
                              Object(Z.f)(
                                "#EventDashBoard_Summary_AppDetailSpotlight_Read"
                              )
                            ),
                            H.createElement(
                              "span",
                              null,
                              t.app_details_spotlight_read.toLocaleString(
                                Z.e.GetPreferredLocales()
                              )
                            )
                          ),
                          H.createElement(
                            "div",
                            { className: Hn.StatsTitle },
                            H.createElement(
                              "span",
                              null,
                              Object(Z.f)(
                                "#EventDashBoard_Summary_AppDetailActivity_Shown"
                              )
                            ),
                            H.createElement(
                              "span",
                              null,
                              t.app_details_activity_shown.toLocaleString(
                                Z.e.GetPreferredLocales()
                              )
                            )
                          ),
                          H.createElement(
                            "div",
                            { className: Hn.StatsTitle },
                            H.createElement(
                              "span",
                              null,
                              Object(Z.f)(
                                "#EventDashBoard_Summary_AppDetailActivity_Read"
                              )
                            ),
                            H.createElement(
                              "span",
                              null,
                              t.app_details_activity_read.toLocaleString(
                                Z.e.GetPreferredLocales()
                              )
                            )
                          )
                        ),
                      H.createElement(
                        "div",
                        { className: Hn.StatsRightSection },
                        H.createElement(
                          "div",
                          { className: Hn.StatsTitle_ctn },
                          H.createElement(
                            "span",
                            null,
                            Object(Z.f)("#EventDashBoard_Location_StoreDetail")
                          )
                        ),
                        H.createElement(
                          "div",
                          { className: Hn.StatsTitle },
                          H.createElement(
                            "span",
                            null,
                            Object(Z.f)(
                              "#EventDashBoard_Summary_StoreAppPage_Shown"
                            )
                          ),
                          H.createElement(
                            "span",
                            null,
                            t.store_app_page_shown.toLocaleString(
                              Z.e.GetPreferredLocales()
                            )
                          )
                        ),
                        H.createElement(
                          "div",
                          { className: Hn.StatsTitle },
                          H.createElement(
                            "span",
                            null,
                            Object(Z.f)(
                              "#EventDashBoard_Summary_StoreAppPage_Read"
                            )
                          ),
                          H.createElement(
                            "span",
                            null,
                            t.store_app_page_read.toLocaleString(
                              Z.e.GetPreferredLocales()
                            )
                          )
                        ),
                        H.createElement("br", null),
                        H.createElement(
                          "div",
                          { className: Hn.StatsTitle_ctn },
                          H.createElement(
                            "span",
                            null,
                            Object(Z.f)(
                              "#EventDashBoard_Location_CommunityDetail"
                            )
                          )
                        ),
                        H.createElement(
                          "div",
                          { className: Hn.StatsTitle },
                          H.createElement(
                            "span",
                            null,
                            Object(Z.f)(
                              "#EventDashBoard_Summary_Community_Shown"
                            )
                          ),
                          H.createElement(
                            "span",
                            null,
                            t.community_hub_shown.toLocaleString(
                              Z.e.GetPreferredLocales()
                            )
                          )
                        ),
                        H.createElement(
                          "div",
                          { className: Hn.StatsTitle },
                          H.createElement(
                            "span",
                            null,
                            Object(Z.f)(
                              "#EventDashBoard_Summary_Community_Read"
                            )
                          ),
                          H.createElement(
                            "span",
                            null,
                            t.community_hub_read.toLocaleString(
                              Z.e.GetPreferredLocales()
                            )
                          )
                        ),
                        H.createElement("br", null),
                        H.createElement(
                          "div",
                          { className: Hn.StatsTitle_ctn },
                          H.createElement(
                            "span",
                            null,
                            Object(Z.f)(
                              "#EventDashBoard_Location_NewsHubDetail"
                            )
                          )
                        ),
                        H.createElement(
                          "div",
                          { className: Hn.StatsTitle },
                          H.createElement(
                            "span",
                            null,
                            Object(Z.f)("#EventDashBoard_Summary_NewsHub_Shown")
                          ),
                          H.createElement(
                            "span",
                            null,
                            t.news_hub_shown.toLocaleString(
                              Z.e.GetPreferredLocales()
                            )
                          )
                        ),
                        H.createElement(
                          "div",
                          { className: Hn.StatsTitle },
                          H.createElement(
                            "span",
                            null,
                            Object(Z.f)("#EventDashBoard_Summary_NewsHub_Read")
                          ),
                          H.createElement(
                            "span",
                            null,
                            t.news_hub_read.toLocaleString(
                              Z.e.GetPreferredLocales()
                            )
                          )
                        )
                      )
                    )
                  );
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        Un = a("ZCZY"),
        Vn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.GenerateBreadCrumbs = function() {
              var t = new Array();
              return (
                this.props.crumbs.forEach(function(e) {
                  e.url.startsWith("http")
                    ? t.push(
                        H.createElement(
                          "a",
                          { key: "anchor_" + e.name, href: e.url },
                          e.name
                        )
                      )
                    : t.push(
                        H.createElement(
                          c.b,
                          { key: "link_" + e.name, to: e.url },
                          e.name
                        )
                      ),
                    t.push(
                      H.createElement("span", { key: e.name + "span" }, " > ")
                    );
                }),
                t
              );
            }),
            (t.prototype.render = function() {
              var e = this.GenerateBreadCrumbs();
              return H.createElement(
                "div",
                { className: Object(W.a)(Un.BreadContainer) },
                H.createElement("div", { className: "blockbg" }, e),
                H.createElement("div", { style: { clear: "left" } })
              );
            }),
            t
          );
        })(H.Component),
        Wn = a("4sqd"),
        qn = a("5L1o"),
        Zn = a("45m9"),
        Yn = H.lazy(function() {
          return Promise.all([a.e(1), a.e(5)]).then(a.bind(null, "NIbt"));
        }),
        Qn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = T.a.CancelToken.source()),
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
            Object(z.d)(e, t),
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
                u = e.titleBar;
              if (
                !this.props.event.bLoaded ||
                this.state.bLoadingAppInfo ||
                this.state.bLoadingClanInfo
              )
                return H.createElement(
                  "div",
                  { className: se.a.FlexCenter, style: { height: "400px" } },
                  H.createElement($.a, {
                    size: "medium",
                    string: Object(Z.f)("#Loading")
                  })
                );
              var d = t.GetDescriptionWithFallback(a),
                p = _.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData(),
                m = Object(Y.d)() == Y.c.STORE_BASE_URL,
                v = E.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                ),
                h = Object(Ce.d)(
                  t,
                  m ? Ce.a.k_eStoreNewsHub : Ce.a.k_eCommunityAllNews,
                  "allowRelative",
                  v && v.vanity_url
                );
              return H.createElement(Jn, {
                event: t,
                lang: a,
                titleBar: u,
                body: H.createElement(
                  y.a,
                  null,
                  H.createElement(
                    "div",
                    { className: yn.a.EventDetailTitleContainer },
                    H.createElement(Vn, {
                      crumbs: [
                        {
                          name: Object(Z.f)("#BreadCrumbs_AllEvents"),
                          url: Object(Ce.d)(
                            t,
                            Ce.a.k_eStoreUsersNewsHub,
                            "allowRelative"
                          )
                        },
                        {
                          name: Object(Z.f)("#BreadCrumbs_GameEvents", p.title),
                          url: h
                        }
                      ]
                    }),
                    H.createElement(
                      "div",
                      { className: yn.a.EventDetailTitle },
                      t.GetNameWithFallback(a)
                    ),
                    t.BHasSubTitle(a) &&
                      H.createElement(
                        "div",
                        { className: yn.a.EventDetailsSubTitle },
                        t.GetSubTitle(a)
                      )
                  ),
                  Boolean(
                    t.BEventCanShowBroadcastWidget(this.props.previewMode)
                  ) &&
                    H.createElement(
                      "div",
                      { className: yn.a.EventBroadcastCtn },
                      H.createElement(
                        H.Suspense,
                        { fallback: H.createElement("div", null) },
                        H.createElement(Yn, {
                          event: this.props.event,
                          bIsPreview: this.props.previewMode,
                          accountIDs: this.props.previewMode
                            ? this.props.event.jsondata.broadcast_whitelist
                            : void 0
                        })
                      )
                    ),
                  H.createElement(
                    "div",
                    { className: yn.a.EventColumns },
                    H.createElement(
                      "div",
                      { className: yn.a.EventDetailsDescription },
                      H.createElement(
                        y.a,
                        null,
                        t.BHasTag("steam_award_nomination_request") &&
                          H.createElement(Wn.a, {
                            event: t,
                            lang: a,
                            previewMode: s
                          }),
                        t.BHasTag("steam_award_vote_request") &&
                          H.createElement(Wn.b, {
                            event: t,
                            lang: a,
                            previewMode: s
                          })
                      ),
                      H.createElement(
                        y.a,
                        null,
                        H.createElement(
                          "div",
                          {
                            className: Object(W.a)(
                              "EventDetailsBody",
                              yn.a.EventDetailsBody
                            )
                          },
                          H.createElement(In.b, {
                            text: d || "",
                            partnerEventStore: n,
                            showErrorInfo: s,
                            event: t,
                            languageOverride: a
                          })
                        )
                      ),
                      H.createElement(
                        y.a,
                        null,
                        H.createElement(Zn.a, { event: this.props.event })
                      ),
                      Boolean(t.jsondata.read_more_link) &&
                        H.createElement(
                          "div",
                          { className: Object(W.a)(yn.a.ReadMoreCnt) },
                          H.createElement(
                            S.a,
                            {
                              className: Object(W.a)(V.a.Button),
                              href: t.jsondata.read_more_link
                            },
                            Object(Z.f)(
                              "#EventEmail_Button_ClickForMoreDetails"
                            )
                          )
                        ),
                      Boolean(
                        t.jsondata.bSaleEnabled && t.jsondata.sale_vanity_id
                      ) &&
                        H.createElement(
                          "div",
                          { className: Object(W.a)(yn.a.ReadMoreCnt) },
                          H.createElement(
                            S.a,
                            {
                              className: Object(W.a)(V.a.Button),
                              href: t.GetSaleURL()
                            },
                            Object(Z.f)("#Event_Button_VisitSalePage")
                          )
                        ),
                      H.createElement("span", { className: V.a.Clear }),
                      H.createElement(
                        y.a,
                        null,
                        H.createElement(Fa.a, { appid: t.appid })
                      )
                    ),
                    H.createElement(
                      y.a,
                      null,
                      H.createElement(Kn, {
                        event: t,
                        lang: a,
                        nOverrideStartTime: o,
                        nOverrideEndTime: i
                      })
                    )
                  ),
                  H.createElement(wt.b, {
                    eventModel: t,
                    emoticonStore: r,
                    partnerEventStore: n
                  })
                ),
                postbody: H.createElement(y.a, null, l, c),
                footer: H.createElement(
                  y.a,
                  null,
                  H.createElement(
                    "div",
                    { className: yn.a.AppSummaryCtn },
                    H.createElement(
                      "div",
                      { className: yn.a.EventBodyPosition },
                      Boolean(
                        null != p.appid && null != p.appid && 0 != p.appid
                      ) &&
                        H.createElement(
                          "div",
                          { className: yn.a.AppSummaryWidgetTitleCtn },
                          H.createElement(
                            "span",
                            { className: yn.a.Title },
                            Object(Z.f)("#CreatorHome_ThisGame")
                          ),
                          H.createElement(
                            "div",
                            { className: yn.a.AppSummaryWidgetCtn },
                            H.createElement(qn.g, { id: t.appid })
                          )
                        ),
                      H.createElement(ee.b, {
                        appid: t.appid,
                        bSmallFormat: !0
                      })
                    )
                  )
                )
              });
            }),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component),
        Jn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
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
                u = t.BImageNeedScreenshotFallback("background", a);
              return H.createElement(
                "div",
                {
                  className: Object(W.a)(
                    yn.a.EventDetailsPageContainer,
                    c,
                    V.a.PartnerEventFont,
                    s
                      ? yn.a.DetailArtworkAgeAppropriate
                      : yn.a.DetailArtworkAgeNotAppropriate,
                    u && yn.a.NoTitleArtwork
                  )
                },
                H.createElement(oe.c, {
                  appId: t.appid,
                  clanId: t.clanSteamID.GetAccountID()
                }),
                n,
                H.createElement(
                  "div",
                  { className: yn.a.EventCoverImageCtn },
                  H.createElement(
                    "div",
                    { className: yn.a.EventCoverImageBlr },
                    H.createElement("div", {
                      className: yn.a.EventCoverImageFuzz,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + l + ")"
                      }
                    }),
                    H.createElement("div", {
                      className: yn.a.EventCoverImage,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + l + ")"
                      }
                    })
                  ),
                  H.createElement("div", { className: yn.a.CoverImageGradient })
                ),
                H.createElement(
                  "div",
                  { className: yn.a.EventBodyCtn },
                  H.createElement("div", {
                    className: yn.a.EventBackgroundBlurCtn
                  }),
                  H.createElement(
                    "div",
                    { className: yn.a.EventBodyPosition },
                    H.createElement(
                      "div",
                      { className: yn.a.EventBody },
                      H.createElement("div", {
                        className: yn.a.EventBackgroundBlur,
                        style: { backgroundImage: "url(" + l + ")" }
                      }),
                      H.createElement(y.a, null, r)
                    ),
                    Boolean(o) && H.createElement(y.a, null, o)
                  )
                ),
                Boolean(i) && H.createElement(y.a, null, i)
              );
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        Kn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
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
                  Object(C.a)(
                    i,
                    "EventDetailsRightColumn - clan info (" +
                      t.clanSteamID.GetAccountID() +
                      ") is missing"
                  ),
                  null
                );
              var l = B.a.GetTimeNowWithOverride(),
                s = n || t.GetStartTimeAndDateUnixSeconds();
              return H.createElement(
                "div",
                { className: yn.a.EventDetailTitleDesc },
                H.createElement(
                  "div",
                  { className: yn.a.EventDetailsSticky },
                  i.is_ogg
                    ? H.createElement(Xn, { appid: i.appid })
                    : H.createElement($n, { clanSteamID: t.clanSteamID }),
                  H.createElement(Fa.b, {
                    event: t,
                    nOverrideEndTime: r,
                    nOverrideStartTime: n
                  }),
                  28 !== t.type &&
                    l < s &&
                    H.createElement(
                      "div",
                      { className: yn.a.EventDetailTimeInfo },
                      H.createElement(At.a, {
                        eventModel: t,
                        eventGID: t.GID,
                        lang: a
                      })
                    ),
                  H.createElement(
                    "div",
                    { className: yn.a.EventDetailUserType },
                    H.createElement(
                      "div",
                      { className: yn.a.RightSideTitles },
                      Object(Z.f)("#EventDisplay_RightColumnTitle_EventType")
                    ),
                    H.createElement(
                      "div",
                      { className: yn.a.EventDetailsType },
                      o,
                      " "
                    )
                  ),
                  H.createElement(tr, { event: t, bIsOGG: i.is_ogg })
                )
              );
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        Xn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.render = function() {
              var t = this.props.appid;
              Object(C.a)(t && 0 != t, "Expected Appid In Game Info Section");
              var e = _.a.GetStoreCapsuleInfo(t).GetAppStoreData();
              return H.createElement(
                "div",
                { className: yn.a.EventDetailGameCallToAction },
                H.createElement(
                  "div",
                  { className: yn.a.RightSideTitles },
                  mt.w.some(function(e) {
                    return t === e;
                  })
                    ? Object(Z.f)("#EventDisplay_RightColumnTitle_Blog")
                    : Object(Z.f)("#EventDisplay_RightColumnTitle_Game")
                ),
                H.createElement(qn.f, {
                  imageType: "header",
                  capsule: { id: t, type: "game" },
                  bHidePriceIfOwned: !0,
                  bHideStatusBanners: !0
                }),
                H.createElement(
                  "div",
                  { className: Object(W.a)(yn.a.GameActions) },
                  H.createElement(qn.j, {
                    info: e,
                    className: yn.a.ActionButton
                  })
                )
              );
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        $n = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.clanSteamID,
                t = E.a.GetClanInfoByClanAccountID(e.GetAccountID());
              return t
                ? H.createElement(
                    "div",
                    { className: yn.a.EventDetailGameCallToAction },
                    H.createElement(
                      "div",
                      { className: yn.a.RightSideTitles },
                      t.group_name
                    ),
                    H.createElement(
                      "a",
                      { href: E.a.GetCreatorStoreURL(e) },
                      H.createElement("div", {
                        className: yn.a.EventDetailsAvatar,
                        style: {
                          backgroundImage: "url(" + t.avatar_full_url + ")"
                        }
                      })
                    )
                  )
                : (Object(C.a)(
                    t,
                    "EventDetailsRightCreatorInfo - clan info (" +
                      e.GetAccountID() +
                      ") is missing"
                  ),
                  null);
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        er = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"],
        tr = (H.Component,
        (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_cancelSignal = T.a.CancelToken.source()), e;
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this,
                a = this.props.event;
              a.BIsPartnerEvent() &&
                a.BIsVisibleEvent() &&
                U.a
                  .Get()
                  .LoadSingleAppEventPermissions(a.clanSteamID)
                  .then(function(e) {
                    e &&
                      e.can_edit &&
                      Pn.LoadStatsForEvents(
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
              var e = this.props,
                t = e.event,
                a = e.bIsOGG;
              if (!U.a.Get().GetPartnerEventPermissions(t.clanSteamID).can_edit)
                return null;
              var n =
                  t.BIsPartnerEvent() &&
                  t.BIsVisibleEvent() &&
                  Pn.GetStatsFor(t.clanSteamID, t.GID),
                r =
                  !t.BHasTag("mod_reviewed") ||
                  t.BHasTag("mod_require_rereview");
              return H.createElement(
                y.a,
                null,
                H.createElement(
                  "div",
                  { className: yn.a.EditorStatsCtn },
                  H.createElement(
                    "div",
                    { className: yn.a.EditorStatsRow },
                    H.createElement(
                      "span",
                      null,
                      Object(Z.f)("#EventEditor_Comments")
                    ),
                    H.createElement(
                      "span",
                      null,
                      t.nCommentCount.toLocaleString(Z.e.GetPreferredLocales())
                    )
                  ),
                  H.createElement(
                    "div",
                    { className: yn.a.EditorStatsRow },
                    H.createElement(
                      "span",
                      null,
                      Object(Z.f)("#EventEditor_UpVotes")
                    ),
                    H.createElement(
                      "span",
                      null,
                      t.nVotesUp
                        ? t.nVotesUp.toLocaleString(Z.e.GetPreferredLocales())
                        : 0
                    )
                  ),
                  H.createElement(
                    "div",
                    { className: yn.a.EditorStatsRow },
                    H.createElement(
                      "span",
                      null,
                      Object(Z.f)("#EventEditor_DownVotes")
                    ),
                    H.createElement(
                      "span",
                      null,
                      t.nVotesDown
                        ? t.nVotesDown.toLocaleString(Z.e.GetPreferredLocales())
                        : 0
                    )
                  )
                ),
                Boolean(n) &&
                  H.createElement(
                    "div",
                    { className: yn.a.EditorStatsCtn },
                    Object(Z.f)("#EventDashBoard_SummaryStats_Admin_Title"),
                    H.createElement(zn, {
                      summary: n.m_stats,
                      bIsAllowedInLibrary: a,
                      bEventIsInModerationQueue: r
                    })
                  )
              );
            }),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component)),
        ar = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.componentDidMount = function() {
              dn.GetRawDoorData() || dn.LoadDoorData(),
                un.LoadSaleTokenPoints();
            }),
            (t.prototype.render = function() {
              var e = dn.GetRawDoorData();
              if (!e) return null;
              for (
                var t = e.length - 1,
                  a = B.a.GetTimeNowWithOverride() > e[t].rtime_start,
                  n = [],
                  r = 0;
                r <= t;
                r++
              )
                n.push(
                  H.createElement(rr, {
                    key: "envelope-" + r,
                    iDoorIndex: r,
                    strFontFamily: this.props.strFontFamily
                  })
                );
              var o = un.GetSaleTokenPoints().points;
              return H.createElement(
                y.a,
                null,
                H.createElement(
                  "div",
                  { className: yn.a.LunarNewYearHeader },
                  H.createElement(
                    "div",
                    { className: yn.a.EnvelopeArea },
                    0 <= o &&
                      H.createElement(
                        "div",
                        { className: yn.a.TokenBalanceContainer },
                        Object(Z.f)("#Lunar2020_YourBalancePrefix"),
                        H.createElement(
                          "a",
                          {
                            className: yn.a.TokenBalance,
                            href: Y.c.STORE_BASE_URL + "lunarnewyearmarket"
                          },
                          " ",
                          Object(Z.f)("#Lunar2020_BalanceNumberOfTokens", o),
                          " "
                        )
                      ),
                    n
                  ),
                  !a &&
                    H.createElement(
                      "div",
                      { className: yn.a.BottomMessage },
                      Object(Z.f)("#Lunar2020_CheckBackEachDay")
                    )
                )
              );
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        nr = [
          "#Lunar2020_FirstGift",
          "#Lunar2020_SecondGift",
          "#Lunar2020_ThirdGift",
          "#Lunar2020_FourthGift"
        ],
        rr = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.OpenEnvelope = function(n) {
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = dn.BIsDoorOpened(this.props.iDoorIndex)),
                        (a = Object(q.m)(n)),
                        t
                          ? (Object(j.b)(
                              H.createElement(
                                lr,
                                Object(z.a)({ bIsFirstOpen: !1 }, this.props)
                              ),
                              a
                            ),
                            [2])
                          : [4, dn.OpenDoor(this.props.iDoorIndex, !0)]
                      );
                    case 1:
                      return (
                        e.sent() &&
                          Object(j.b)(
                            H.createElement(
                              lr,
                              Object(z.a)({ bIsFirstOpen: !0 }, this.props)
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
              var t = Object(q.m)(e),
                a = H.createElement(
                  "a",
                  { href: Y.c.HELP_BASE_URL },
                  Object(Z.f)("#User_LimitedAccount_UrlInfo")
                );
              Object(j.b)(
                H.createElement(X.c, {
                  strTitle: Object(Z.f)("#Lunar2020_LimitedUserDialogTitle"),
                  strDescription: Object(Z.n)("#User_LimitedAccount", a),
                  bAlertDialog: !0
                }),
                t
              );
            }),
            (t.prototype.VOOnClose = function() {
              Y.i.is_support && dn.OpenDoor(this.props.iDoorIndex, !1);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.iDoorIndex,
                a = e.strFontFamily;
              Object(C.a)(
                0 <= t && t < nr.length && t < dn.GetDoorCount(),
                "Day index #" + t + " not in valid range."
              );
              for (
                var n = Object(Z.f)(nr[t]),
                  r = !Y.i.logged_in,
                  o = dn.BIsDoorOpened(t),
                  i = dn.BCanUserOpenDoor(t),
                  l = !0,
                  s = 0;
                s < t;
                s++
              )
                l = l && dn.BIsDoorOpened(s);
              var c = !o && i && l,
                u = new Date(1e3 * dn.GetRawDoorData()[t].rtime_start),
                d = r
                  ? Object(Z.f)("#Login_SignIn")
                  : o
                  ? Object(Z.f)("#Lunar2020_RereadStory")
                  : c
                  ? Object(Z.f)("#Lunar2020_GiftCanBeOpenedNow")
                  : i
                  ? Object(Z.f)("#Lunar2020_GiftCanBeOpenedAfterThePreviousOne")
                  : Object(Z.f)(
                      "#Lunar2020_GiftLockedUntilDate",
                      u.toLocaleDateString(Z.e.GetPreferredLocales(), {
                        month: "numeric",
                        day: "numeric"
                      })
                    ),
                p = r
                  ? oa.a
                  : Y.i.is_limited
                  ? this.ShowLimitedUserDialog
                  : o || c
                  ? this.OpenEnvelope
                  : null,
                m = Object(W.a)(
                  yn.a.EnvelopeContainer,
                  r && yn.a.NeedLogin,
                  o && yn.a.Opened,
                  c && yn.a.Unlocked,
                  !o && !c && yn.a.Locked
                );
              return H.createElement(
                "div",
                { className: m },
                H.createElement("div", { className: yn.a.BackingRect }),
                H.createElement(
                  "div",
                  { className: yn.a.Envelope },
                  H.createElement(
                    "div",
                    { className: yn.a.GiftLabel, style: { fontFamily: a } },
                    n
                  )
                ),
                H.createElement(
                  "div",
                  { className: yn.a.OpenState, onClick: p },
                  d
                ),
                (Y.i.is_support &&
                  o &&
                  ("beta" == Y.c.WEB_UNIVERSE || "dev" == Y.c.WEB_UNIVERSE) &&
                  H.createElement(
                    "div",
                    {
                      className: Object(W.a)(yn.a.OpenState, yn.a.VO),
                      onClick: this.VOOnClose
                    },
                    "(VO) Close Gift"
                  )) ||
                  null
              );
            }),
            Object(z.c)([s.a], t.prototype, "OpenEnvelope", null),
            Object(z.c)([s.a], t.prototype, "ShowLimitedUserDialog", null),
            Object(z.c)([s.a], t.prototype, "VOOnClose", null),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        or = [
          "#Lunar2020_StoryDayOneHeader",
          "#Lunar2020_StoryDayTwoHeader",
          "#Lunar2020_StoryDayThreeHeader",
          "#Lunar2020_StoryDayFourHeader"
        ],
        ir = [
          "#Lunar2020_StoryDayOne",
          "#Lunar2020_StoryDayTwo",
          "#Lunar2020_StoryDayThree",
          "#Lunar2020_StoryDayFour"
        ],
        lr = function(e) {
          var t = H.useState(!e.bIsFirstOpen),
            a = t[0],
            n = t[1];
          H.useEffect(function() {
            return n(!0);
          }, []);
          var r =
              Y.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.mp4" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            o =
              Y.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.webm" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            i = e.iDoorIndex == dn.GetDoorCount() - 1;
          return H.createElement(
            X.d,
            {
              className: yn.a.LunarNewYearOpenEnvelopeVideoDialog,
              closeModal: e.closeModal
            },
            H.createElement(
              "div",
              { className: yn.a.Container },
              H.createElement(
                "div",
                { className: yn.a.Column },
                H.createElement(
                  "div",
                  { className: yn.a.StoryHeader },
                  Object(Z.f)("#Lunar2020_StoryTitle")
                ),
                H.createElement(
                  "div",
                  { className: yn.a.StorySubHeader },
                  Object(Z.f)("#Lunar2020_StorySubTitle")
                ),
                H.createElement(
                  "div",
                  { className: yn.a.StorySubHeader },
                  Object(Z.f)(or[e.iDoorIndex])
                ),
                H.createElement(
                  "div",
                  { className: yn.a.StoryText },
                  Object(Z.f)(ir[e.iDoorIndex])
                ),
                H.createElement(
                  "div",
                  { className: yn.a.VideoBox },
                  H.createElement(
                    "div",
                    {
                      className: Object(W.a)(yn.a.CoinText, a && yn.a.Visible)
                    },
                    Object(Z.f)("#Lunar2020_ReceivedNumberOfTokens", 100)
                  ),
                  H.createElement(
                    "video",
                    {
                      autoPlay: e.bIsFirstOpen,
                      muted: !0,
                      className: yn.a.LunarNewYearOpenEnvelopeVideo
                    },
                    H.createElement("source", { src: r, type: "video/mp4" }),
                    H.createElement("source", { src: o, type: "video/webm" }),
                    Object(Z.f)("#Lunar2020_ErrorLoadingVideo")
                  )
                )
              ),
              H.createElement(
                "div",
                { className: yn.a.Column },
                H.createElement(
                  "div",
                  { className: yn.a.StoryPicture },
                  H.createElement("img", {
                    src: dn.GetStoryImage(e.iDoorIndex)
                  })
                ),
                !i &&
                  H.createElement(
                    "div",
                    { className: yn.a.CheckBackText },
                    Object(Z.f)("#Lunar2020_CheckBackEachDayForStory")
                  )
              )
            ),
            H.createElement(
              "div",
              { className: yn.a.Links },
              H.createElement(
                "div",
                { className: yn.a.MarketLink },
                H.createElement(
                  "a",
                  { href: Y.c.STORE_BASE_URL + "lunarnewyearmarket" },
                  Object(Z.f)("#Lunar2020_LinkFromVideoToMarket")
                )
              ),
              H.createElement(
                "div",
                { className: yn.a.MarketLink, onClick: e.closeModal },
                Object(Z.f)("#Lunar2020_LinkBackToSale")
              )
            )
          );
        },
        sr = a("ZlHF"),
        cr = a.n(sr),
        ur = a("gyoR"),
        dr = (a("bUNj"), a("U9Ih")),
        pr = a.n(dr),
        mr = (function(t) {
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
              (e.m_timerForChange = new l.b()),
              (e.m_cancelSignal = T.a.CancelToken.source()),
              (e.m_nHighestSentRequestID = 0),
              (e.m_nHighestReceivedRequestID = 0),
              e
            );
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.LoadCapsules(12);
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_timerForChange.Cancel(),
                this.m_cancelSignal.cancel(
                  "SaleItemBrowser component unmounted"
                );
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
              this.m_cancelSignal.token.reason ||
                this.state.bAwaitingMoreRowsLoading ||
                this.setState({ bAwaitingMoreRowsLoading: !0 }, function() {
                  return Object(z.b)(e, void 0, void 0, function() {
                    var t;
                    return Object(z.e)(this, function(e) {
                      return (
                        (t = this.state.nVisibleRows + 8),
                        this.LoadCapsules(t),
                        [2]
                      );
                    });
                  });
                });
            }),
            (e.prototype.LoadCapsules = function(S) {
              var C;
              return Object(z.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o,
                  i,
                  l,
                  s,
                  c,
                  u,
                  d,
                  p,
                  m,
                  v,
                  h,
                  _,
                  b,
                  g,
                  f,
                  E,
                  y;
                return Object(z.e)(this, function(e) {
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
                        (u = o.strSearchQuery),
                        [4, x.a.HintLoad()]
                      );
                    case 1:
                      e.sent(),
                        (d = !0),
                        (p = Math.max(s, S + 1)),
                        r.BIsTabFilteringEnabled() && (p = Math.max(p, 100)),
                        (m = B.a.GetTimeNowWithOverride()),
                        (v = !86400),
                        n ||
                          a.visibility_state === mt.m.k_EEventStateVisible ||
                          (a.startTime &&
                            !(a.startTime + 1209600 - 3600 < m)) ||
                          ((h = U.a
                            .Get()
                            .GetPartnerEventPermissions(a.clanSteamID)),
                          (v = h.can_edit)),
                        (e.label = 2);
                    case 2:
                      if (!(l.length <= S && d)) return [3, 9];
                      (_ = this.m_nHighestSentRequestID),
                        (b = void 0),
                        (e.label = 3);
                    case 3:
                      return (
                        e.trys.push([3, 5, , 6]),
                        [
                          4,
                          cn.GetSaleGamesByFlavor(
                            n || v,
                            null === (C = null == r ? void 0 : r.GetTab()) ||
                              void 0 === C
                              ? void 0
                              : C.unique_id,
                            a,
                            i,
                            p,
                            0,
                            u,
                            this.m_cancelSignal
                          )
                        ]
                      );
                    case 4:
                      return (
                        (g = e.sent()),
                        (b = g.appids),
                        (d = g.bHasPossibleMoreResults),
                        [3, 6]
                      );
                    case 5:
                      return (
                        (f = e.sent()),
                        console.error(
                          "Failed to load games for browser;" + f.message
                        ),
                        this.m_cancelSignal.token.reason ||
                          this.setState({
                            bInitialLoadComplete: !0,
                            bAwaitingMoreRowsLoading: !1
                          }),
                        [2]
                      );
                    case 6:
                      return this.m_nHighestReceivedRequestID > _
                        ? [2]
                        : ((this.m_nHighestReceivedRequestID = _),
                          (l = b.map(function(e) {
                            return { id: e, type: "game" };
                          })),
                          this.state.strSearchQuery ||
                            (l = l.filter(function(e) {
                              return !r || r.ShouldShowCapsule(e);
                            })),
                          [4, Object(ur.e)(l)]);
                    case 7:
                      return (
                        e.sent(), (E = new Array()), [4, Object(ur.a)(l, !1, E)]
                      );
                    case 8:
                      return (
                        (l = e.sent()),
                        (c = E.length),
                        l.length <= S && (p += 8),
                        [3, 2]
                      );
                    case 9:
                      return this.m_cancelSignal.token.reason
                        ? [2]
                        : ((y = l.length > S || d),
                          this.setState({
                            bInitialLoadComplete: !0,
                            rgCapsules: l,
                            nVisibleRows: S,
                            nNumRequestedLastTime: p,
                            bIsMoreAvailable: y,
                            bAwaitingMoreRowsLoading: !1,
                            nHiddenCapsules: c
                          }),
                          [2]);
                  }
                });
              });
            }),
            (e.prototype.OnFlavorLabelClick = function(e) {
              var t = this;
              this.m_timerForChange.Cancel(),
                this.m_cancelSignal.token.reason ||
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
                    return mt.y.find(function(e) {
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
                  return mt.y.find(function(e) {
                    return e.flavor === t;
                  });
                })
                .filter(function(e) {
                  return !!e;
                })
                .map(function(e) {
                  return g.a.createElement(
                    I.a,
                    {
                      key: e.flavor,
                      toolTipContent: Object(Z.f)(e.tooltip),
                      onClick: function() {
                        return t.OnFlavorLabelClick(e.flavor);
                      },
                      className: Object(W.a)(
                        pr.a.FlavorLabel,
                        o == e.flavor && pr.a.SelectedFlavor
                      )
                    },
                    Object(Z.f)(e.label)
                  );
                });
            }),
            (e.prototype.OnApplySearch = function(e) {
              var t = this;
              this.m_cancelSignal.token.reason ||
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
              var t,
                a = this;
              this.m_cancelSignal.token.reason ||
                ((t =
                  e.target.value && e.target.value.trim().toLocaleLowerCase()),
                this.setState({ strRawSearch: e.target.value }),
                this.m_nHighestSentRequestID++,
                this.m_timerForChange.Schedule(200, function() {
                  return a.OnApplySearch(t);
                }));
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
                ? g.a.createElement(
                    "div",
                    { className: pr.a.SaleItemBrowserContainer },
                    g.a.createElement(
                      Le,
                      { className: pr.a.SaleItemBrowserHeaderContainer },
                      g.a.createElement(
                        "div",
                        { className: pr.a.SaleItemBrowserHeader },
                        c,
                        l.enable_search &&
                          g.a.createElement(
                            "div",
                            { className: pr.a.SuggestContainer },
                            g.a.createElement(R.F, null),
                            g.a.createElement(b.k, {
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
                        return g.a.createElement(
                          "div",
                          { key: e.id, className: kn.a.SaleItemBrowserRow },
                          g.a.createElement(qn.g, {
                            id: e.id,
                            type: e.type,
                            bShowDemoButton: Boolean(l.show_as_demos),
                            bLoadShortDescription: !1
                          })
                        );
                      }),
                    t &&
                      0 == a.length &&
                      g.a.createElement(
                        "div",
                        { className: pr.a.EmptyResults },
                        Object(Z.f)("#Sale_EmptySearchResultsOrLoadFailure")
                      ),
                    (!t || r) &&
                      g.a.createElement(
                        "div",
                        {
                          className: Object(W.a)(
                            pr.a.ShowContentsContainer,
                            !t && pr.a.Loading
                          )
                        },
                        !t || o
                          ? g.a.createElement($.a, { size: "medium" })
                          : g.a.createElement(
                              "button",
                              {
                                onClick: this.ShowMoreRows,
                                className: pr.a.ShowContentsButton
                              },
                              Object(Z.f)("#Sale_ShowMore")
                            )
                      )
                  )
                : null;
            }),
            Object(z.c)([s.a], e.prototype, "ShowMoreRows", null),
            Object(z.c)([s.a], e.prototype, "OnUpdateSearch", null),
            (e = Object(z.c)([r.a], e))
          );
        })(g.a.Component),
        vr = a("onkS"),
        hr = a("oVVc"),
        _r = a("l2mU"),
        br = a("31dG"),
        gr = a.n(br);
      function fr(e, t) {
        for (var a = [], n = 0, r = e.capsules; n < r.length; n++) {
          var o = r[n];
          if ("sub" === o.type) {
            var i = hr.b.GetPackageInfo(o.id);
            if (i) {
              if ((console.log(JSON.stringify(i)), i.renewal_time_amount === t))
                return i.packageid;
            } else a.push(o.id);
          }
        }
        0 < a.length && hr.b.LoadPackageInfo(a);
      }
      function Er(e, t, a, n) {
        var r = e.createElement("input");
        (r.type = "hidden"), (r.name = a), (r.value = n), t.appendChild(r);
      }
      var yr = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.OnClickPurchase = function(e) {
              var t, a, n, r;
              (t = e),
                (a = this.props.sub_package_id),
                (n = Object(q.m)(t)),
                ((r = n.document.createElement("form")).action =
                  Y.c.STORE_BASE_URL + "cart/"),
                (r.method = "POST"),
                (r.style.display = "none"),
                Er(document, r, "action", "add_to_cart"),
                Er(document, r, "subid", a.toString()),
                Er(document, r, "sessionid", Y.c.SESSIONID),
                n.document.documentElement.append(r),
                r.submit(),
                e.preventDefault();
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.language,
                a = e.logo_image,
                n = e.sub_package_id,
                r = e.compare_package_id,
                o = e.price_loc_token,
                i = e.body_loc_token,
                l = e.button_text,
                s = hr.b.GetPackageInfo(n),
                c = hr.b.GetPackageInfo(r);
              if (!s || (!c && r)) return hr.b.LoadPackageInfo([n, r]), null;
              if (!s.formatted_final_price) return null;
              var u,
                d,
                p = s.formatted_final_price,
                m = Object(_r.a)(s, c),
                v = [p, m || ""],
                h = Z.f.apply(void 0, Object(z.g)([o], v)),
                _ = Z.f.apply(void 0, Object(z.g)([i], v)),
                b = Z.f.apply(
                  void 0,
                  Object(z.g)(["#Sale_Subscription_Save"], v)
                ),
                g = null;
              a &&
                ((d = null),
                (d =
                  "string" == typeof (u = Object(In.a)(a, t))
                    ? H.createElement("img", { src: u })
                    : H.createElement(Pa.a, { rgSources: u })),
                (g = H.createElement("div", { className: gr.a.LogoImg }, d)));
              var f = (function(e) {
                  for (var t = 0, a = e.appids; t < a.length; t++) {
                    var n = a[t];
                    if (x.a.BOwnsApp(n)) return !0;
                  }
                  return !1;
                })(s),
                E = null,
                E = x.a.BOwnsPackage(n)
                  ? H.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          gr.a.PurchaseButton,
                          gr.a.AlreadyOwnedPackage
                        )
                      },
                      Object(Z.f)("#Sale_Subscription_AlreadyOwnedPackage")
                    )
                  : f
                  ? H.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          gr.a.PurchaseButton,
                          gr.a.AlreadyOwnedApp
                        )
                      },
                      Object(Z.f)("#Sale_Subscription_AlreadyOwnedApp")
                    )
                  : H.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          gr.a.PurchaseButton,
                          gr.a.UnOwned
                        ),
                        onClick: this.OnClickPurchase
                      },
                      l
                    );
              return H.createElement(
                "div",
                { className: gr.a.SubscriptionBlock },
                g,
                H.createElement(
                  "div",
                  { className: gr.a.PriceBlock },
                  H.createElement("span", { className: gr.a.PriceDisplay }, h),
                  Boolean(m) &&
                    H.createElement(
                      "span",
                      { className: gr.a.SavingsDisplay },
                      b
                    )
                ),
                H.createElement("div", { className: gr.a.BodyTextBlock }, _),
                E
              );
            }),
            Object(z.c)([s.a], t.prototype, "OnClickPurchase", null),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        Sr = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                a = t.section,
                n = t.language,
                r = fr(a, 12),
                o = fr(a, 3),
                i = fr(a, 1),
                l =
                  null === (e = a.internal_section_data) || void 0 === e
                    ? void 0
                    : e.subscription_logo_image;
              return H.createElement(
                "div",
                { className: gr.a.MainBlock },
                H.createElement(
                  "span",
                  { className: gr.a.SelectAPlan },
                  Object(Z.f)("#Sale_Subscription_SelectPlan")
                ),
                H.createElement(
                  "div",
                  { className: gr.a.SubscriptionListBlock },
                  H.createElement(yr, {
                    sub_package_id: r,
                    logo_image: l,
                    language: n,
                    compare_package_id: i,
                    price_loc_token: "#Sale_Subscription_Annual_Price",
                    body_loc_token: "#Sale_Subscription_Annual_Body",
                    button_text: Object(Z.f)("#Sale_Subscription_Annual_Button")
                  }),
                  H.createElement(yr, {
                    sub_package_id: o,
                    logo_image: l,
                    language: n,
                    price_loc_token: "#Sale_Subscription_Quarterly_Price",
                    body_loc_token: "#Sale_Subscription_Quarterly_Body",
                    button_text: Object(Z.f)(
                      "#Sale_Subscription_Quarterly_Button"
                    )
                  }),
                  H.createElement(yr, {
                    sub_package_id: i,
                    logo_image: l,
                    language: n,
                    price_loc_token: "#Sale_Subscription_Monthly_Price",
                    body_loc_token: "#Sale_Subscription_Monthly_Body",
                    button_text: Object(Z.f)(
                      "#Sale_Subscription_Monthly_Button"
                    )
                  })
                )
              );
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        Cr = a("R+8l");
      function Or(e, t, a) {
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
      function wr(e) {
        var t,
          a,
          n = e.tab,
          r = e.language,
          o = e.onTabSelected,
          i = e.classNames,
          l = e.section,
          s = e.selected,
          c = ((t = n),
          (a = r),
          Z.a.GetWithFallback(t.localized_label, a) ||
            ("#Sale_default_label" === t.default_label
              ? ""
              : Object(Z.f)(t.default_label)));
        if (!c) return null;
        var u,
          d = l
            ? ((u = l),
              s
                ? Or(
                    u.tab_active_label_color,
                    u.tab_active_background_gradient_top,
                    u.tab_active_background_gradient_bottom
                  )
                : Or(
                    u.tab_inactive_label_color,
                    u.tab_inactive_background_gradient_top,
                    u.tab_inactive_background_gradient_bottom
                  ))
            : void 0;
        return H.createElement(
          "div",
          {
            className: Object(W.a)(cr.a.SaleTab, i, "SaleTab", s && "Selected"),
            onClick: function() {
              return o(n);
            },
            style: d
          },
          H.createElement(
            "div",
            { className: Object(W.a)(cr.a.SaleTabLabel) },
            c
          )
        );
      }
      function Tr(e) {
        var r = e.section,
          o = e.activeTab,
          i = e.onTabSelected,
          t = e.event,
          l = e.language,
          s = e.hideActiveTab,
          a = (function(e) {
            for (var t = 0, a = e.GetSaleSections(); t < a.length; t++) {
              var n = a[t];
              if ("tabs" === n.section_type) return n;
            }
            return null;
          })(t);
        if (!a || !a.tabs || 0 === a.tabs.length) return null;
        var n = a.tabs.map(function(e) {
          var t,
            a =
              (null === (t = null == o ? void 0 : o.GetTab()) || void 0 === t
                ? void 0
                : t.unique_id) === e.unique_id;
          if (a && s) return null;
          var n = r.unique_id + "_tab_button_" + e.unique_id;
          return H.createElement(wr, {
            key: n,
            selected: a,
            tab: e,
            language: l,
            classNames: Object(W.a)(
              cr.a.TabButton,
              a && cr.a.TabButtonSelected
            ),
            onTabSelected: function(e) {
              return i(r, e);
            }
          });
        });
        return H.createElement(
          "div",
          { className: cr.a.SaleSection, style: Qr(r, t) },
          H.createElement(Mr, Object(z.a)({}, e)),
          H.createElement("div", { className: cr.a.TabButtonsCtn }, n)
        );
      }
      var Ir = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
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
                      (e += Zr(
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
                return H.createElement(
                  "div",
                  { className: cr.a.TabContentsElement },
                  Object(Z.f)("#SalePage_Tabs_AllContents")
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
                  u = Object(Z.f)("#AppType_" + c.type) + "_" + c.id;
                a.has(u) ||
                  (a.add(u),
                  (o = null),
                  (i =
                    (o =
                      "bundle" === c.type
                        ? Cr.a.GetBundleInfo(c.id)
                        : "sub" === c.type
                        ? hr.b.GetPackageInfo(c.id)
                        : ne.a.GetAppInfo(c.id)) && o.name
                      ? o.name
                      : u),
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
                    : Object(Z.f)("#Sale_TabDayIndex", c.visibility_index)),
                  t.push({ sName: i, sKey: u, sDisplay: s, nDaySortIndex: l }));
              }
              return (
                t.sort(function(e, t) {
                  return e.nDaySortIndex !== t.nDaySortIndex
                    ? e.nDaySortIndex - t.nDaySortIndex
                    : e.sName.localeCompare(t.sName);
                }),
                H.createElement(
                  H.Fragment,
                  null,
                  t.map(function(e) {
                    return H.createElement(
                      "div",
                      { key: e.sKey, className: cr.a.TabContentsElement },
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
              return H.createElement(
                "div",
                { className: Object(W.a)(cr.a.SaleSection), style: Qr(t, a) },
                H.createElement(Mr, Object(z.a)({}, this.props)),
                H.createElement(
                  "div",
                  { className: cr.a.TabContentsContainer },
                  this.RenderTabCapsules()
                )
              );
            }),
            (t = Object(z.c)([r.a], t))
          );
        })(H.Component),
        jr = (function(t) {
          function a() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { nMaxTabsPerRow: a.GetMaxTabsPerRow() }), e;
          }
          return (
            Object(z.d)(a, t),
            (a.GetMaxTabsPerRow = function() {
              return Math.max(Math.floor(window.innerWidth / 160), 2);
            }),
            (a.prototype.render = function() {
              var a = this,
                e = this.props,
                n = e.section,
                t = e.event,
                r = e.language,
                o = e.activeTab;
              if (n.tabs.length < 2) return null;
              var i = Object(W.a)(cr.a.SaleSectionTabsTab),
                l = n.tabs.map(function(e) {
                  var t = "Tab_" + e.unique_id;
                  return H.createElement(wr, {
                    key: t,
                    section: n,
                    selected: e === o,
                    tab: e,
                    language: r,
                    classNames: Object(W.a)(
                      i,
                      e === o && cr.a.SaleSectionTabsSelected
                    ),
                    onTabSelected: function(e) {
                      return a.props.onTabSelected(n, e);
                    }
                  });
                });
              return H.createElement(
                H.Fragment,
                null,
                H.createElement(
                  "div",
                  {
                    className: Object(W.a)(
                      cr.a.SaleSection,
                      cr.a.SaleSectionTabs,
                      "SaleSectionTabs"
                    ),
                    style: Qr(n, t)
                  },
                  H.createElement(
                    Le,
                    { className: cr.a.SaleSectionTabContainer },
                    H.createElement(
                      "div",
                      {
                        className: Object(W.a)(
                          V.a.SaleSectionContainer,
                          cr.a.SaleSectionTabsRow
                        )
                      },
                      l
                    )
                  )
                )
              );
            }),
            a
          );
        })(H.Component),
        kr = H.lazy(function() {
          return Promise.all([a.e(1), a.e(5)]).then(a.bind(null, "NIbt"));
        });
      var Dr = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.m_customCSSNode = null),
              (t.state = {
                nSaleDayIndex: t.props.eventModel
                  ? t.props.eventModel.GetDayIndexFromEventStart()
                  : void 0
              }),
              ln.a.Get().AddStreamsLoadedListener(t.OnBroadcastStreamsLoaded),
              t.props.eventModel && t.OnSaleDataLoaded(),
              t
            );
          }
          return (
            Object(z.d)(e, a),
            (e.prototype.componentDidMount = function() {
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.props.eventModel
                        ? [3, 2]
                        : ((t = Y.b.CLANSTEAMID),
                          (a = Y.b.ANNOUNCEMENT_GID),
                          [
                            4,
                            M.c.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                              new f.a(t),
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
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.componentWillUnmount = function() {
              ln.a
                .Get()
                .RemoveStreamsLoadedListener(this.OnBroadcastStreamsLoaded),
                this.m_customCSSNode &&
                  (this.m_customCSSNode.remove(),
                  (this.m_customCSSNode = null));
            }),
            (e.prototype.OnBroadcastStreamsLoaded = function(e) {
              if (e)
                for (
                  var t = this.GetEventModel(), a = 0, n = e;
                  a < n.length;
                  a++
                ) {
                  var r,
                    o = n[a],
                    i = t.GetBroadcastWhitelistPriority(
                      Number(o.accountid),
                      "primary"
                    );
                  i &&
                    ((r = (function(e) {
                      switch (e) {
                        case "primary":
                          return ln.b.k_ePrimary;
                        case "featured":
                          return ln.b.k_eFeatured;
                        case "default_featured":
                          return ln.b.k_eDefaultFeatured;
                        default:
                          return ln.b.k_eGeneral;
                      }
                    })(i)),
                    (o.default_selection_priority = r),
                    (o.current_selection_priority = r));
                }
            }),
            (e.prototype.GetEventModel = function() {
              return this.props.eventModel
                ? this.props.eventModel
                : M.c.GetClanEventFromAnnouncementGID(Y.b.ANNOUNCEMENT_GID);
            }),
            (e.prototype.OnChangeDayIndex = function(e) {
              var t;
              e != this.state.nSaleDayIndex &&
                ((t = this.GetEventModel()) && (t.m_overrideCurrentDay = e),
                this.setState({ nSaleDayIndex: e }));
            }),
            (e.prototype.OnSaleDataLoaded = function() {
              var e,
                t = this.GetEventModel();
              t.jsondata.sale_custom_css &&
                !this.m_customCSSNode &&
                this.props.bIsPreview &&
                Boolean(
                  t.jsondata.sale_vanity_id_valve_approved_for_sale_subpath
                ) &&
                ((e = document.getElementsByTagName("HEAD")[0]),
                (this.m_customCSSNode = document.createElement("style")),
                (this.m_customCSSNode.innerText = t.jsondata.sale_custom_css),
                e.appendChild(this.m_customCSSNode));
              for (var a = 0, n = t.GetSaleSections(); a < n.length; a++) {
                if ("event_schedule" === n[a].section_type) {
                  ln.a.Get().DisableAutoPlay();
                  break;
                }
              }
              this.DisableBackgroundImageFromPHP();
            }),
            (e.prototype.DisableBackgroundImageFromPHP = function() {
              var e = document.getElementsByClassName(
                "react_landing_background"
              );
              Object(C.a)(
                e.length <= 1,
                "Must have at most one react_landing_background"
              ),
                1 <= e.length && (e[0].style.backgroundImage = null);
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
                dn.BHasSalePageBackgroundOverride() &&
                  ((a = dn.GetSalePageBackgroundOverride()),
                  (n = dn.GetSalePageBackgroundWEBM()),
                  (r = dn.GetSalePageBackgroundMP4()));
                var o = {
                    promotionName: this.props.promotionName,
                    clanid: Number(Y.b.CLANACCOUNTID),
                    event: e,
                    bIsPreview: this.props.bIsPreview,
                    language: this.props.language,
                    accountIDs: this.props.bIsPreview
                      ? e.jsondata.broadcast_whitelist
                      : void 0
                  },
                  i =
                    e.BEventCanShowBroadcastWidget() &&
                    ("1688220857098505775" == e.GID ||
                      "1590261853006818581" == e.GID),
                  l = U.a.Get().GetPartnerEventPermissions(e.clanSteamID);
                return H.createElement(
                  y.a,
                  null,
                  H.createElement(
                    Gr,
                    {
                      className: Object(W.a)(
                        cr.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                        "SaleCustomCSS"
                      ),
                      backgroundImage: a,
                      backgroundColor: e.jsondata.sale_background_color
                    },
                    Boolean(r || n) &&
                      H.createElement(
                        "div",
                        { className: cr.a.fullscreen_bg },
                        H.createElement(
                          "video",
                          {
                            key: dn.GetLastDoorOpen(),
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            ref: function(e) {
                              e && (e.playbackRate = 0.9);
                            },
                            className: Object(W.a)(
                              cr.a.SaleBackground,
                              cr.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                              "SaleBackground",
                              cr.a.fullscreen_bg__video
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
                          H.createElement("source", {
                            src: n,
                            type: "video/webm"
                          }),
                          !Y.c.IN_CLIENT &&
                            H.createElement("source", {
                              src: r,
                              type: "video/mp4"
                            })
                        )
                      ),
                    H.createElement(
                      "div",
                      { className: cr.a.SaleHeaderContainer },
                      e.jsondata.sale_header_overlay &&
                        H.createElement(Lr, null)
                    ),
                    H.createElement(
                      "div",
                      {
                        className:
                          cr.a.SaleOuterContainer +
                          " " +
                          cr.a["CustomStyle_" + e.jsondata.sale_vanity_id] +
                          " SaleOuterContainer",
                        style: {
                          marginTop: e.jsondata.sale_header_offset + "px"
                        }
                      },
                      Boolean(
                        e.BEventCanShowBroadcastWidget() &&
                          e.BSaleShowBroadcastAtTopOfPage()
                      ) &&
                        H.createElement(
                          y.a,
                          null,
                          H.createElement(
                            "div",
                            { className: cr.a.SaleBroadcastCtn },
                            H.createElement(
                              H.Suspense,
                              { fallback: H.createElement("div", null) },
                              H.createElement(
                                kr,
                                Object(z.a)({}, o, {
                                  bShowCapsuleArt: !0,
                                  fnRenderBroadcastContext: i
                                    ? function() {
                                        return H.createElement(Xr, {
                                          broadcastContext: o
                                        });
                                      }
                                    : null
                                })
                              )
                            )
                          )
                        ),
                      e.jsondata.sale_show_creator &&
                        H.createElement(
                          y.a,
                          null,
                          H.createElement(
                            "div",
                            {
                              style: {
                                width: "100%",
                                margin: "0 auto",
                                maxWidth: "940px"
                              }
                            },
                            H.createElement(ee.a, {
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
                      H.createElement(Br, {
                        bIsPreview: t,
                        event: e,
                        language: this.props.language,
                        promotionName: this.props.promotionName,
                        nSaleDayIndex: this.state.nSaleDayIndex,
                        broadcastEmbedContext: o
                      }),
                      e.jsondata.sale_browse_more_button &&
                        H.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "14px"
                            }
                          },
                          H.createElement(Wr, {
                            text: Object(Z.f)("#Sale_SeeAllSpecials"),
                            url: e.jsondata.sale_browsemore_url,
                            color: e.jsondata.sale_browsemore_color,
                            bgcolor: e.jsondata.sale_browsemore_bgcolor
                          })
                        ),
                      l.can_edit &&
                        H.createElement(Sn, {
                          eventModel: e,
                          bPreviewMode: this.props.bIsPreview,
                          useAnchors: !this.props.bIsPreview,
                          fnOnUpdateSaleDayIndex: this.OnChangeDayIndex
                        })
                    )
                  )
                );
              }
              return H.createElement(
                "div",
                { className: se.a.FlexCenter, style: { height: "500px" } },
                H.createElement($.a, {
                  size: "medium",
                  string: Object(Z.f)("#Loading")
                })
              );
            }),
            Object(z.c)([s.a], e.prototype, "OnBroadcastStreamsLoaded", null),
            Object(z.c)([s.a], e.prototype, "OnChangeDayIndex", null),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component),
        Gr = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_refBackgroundPanel = H.createRef()), e;
          }
          return (
            Object(z.d)(e, t),
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
              return H.createElement(
                "div",
                {
                  className: Object(W.a)(
                    this.props.className,
                    cr.a.SaleBackground,
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
        })(H.Component),
        Lr = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(z.d)(t, e),
            (t.prototype.componentDidMount = function() {
              a("+ZmX").Init();
            }),
            (t.prototype.render = function() {
              return H.createElement("canvas", {
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
        })(H.Component),
        Ar = (function() {
          function e(e, t) {
            var a = this;
            (this.m_activeTab = null),
              (this.m_capsuleFilter = null),
              e &&
                ((this.m_activeTab = e).capsules && 0 !== e.capsules.length
                  ? ((this.m_capsuleFilter = new Set()),
                    Vr(e.capsules, t).forEach(function(e) {
                      a.m_capsuleFilter.add(Number(e.id));
                    }))
                  : (this.m_capsuleFilter = null));
          }
          return (
            (e.prototype.ShouldShowSection = function(e) {
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
            (e.prototype.GetTab = function() {
              return this.m_activeTab;
            }),
            (e.prototype.GetActiveTabUniqueID = function() {
              return this.m_activeTab.unique_id;
            }),
            (e.prototype.ShouldShowOnTab = function(e) {
              return (
                !this.m_capsuleFilter || this.m_capsuleFilter.has(Number(e))
              );
            }),
            (e.prototype.ShouldShowCapsule = function(e) {
              return this.ShouldShowOnTab(e.id);
            }),
            (e.prototype.ShouldShowEvent = function(e) {
              return 0 === e.appid || this.ShouldShowOnTab(e.appid);
            }),
            (e.prototype.BIsTabFilteringEnabled = function() {
              return Boolean(this.m_capsuleFilter);
            }),
            e
          );
        })(),
        Nr = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_refTabSection = H.createRef()), e;
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.GetTabSelectionsFromURL = function() {
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
                        0 < (t = Number(Te(n.props.location, "tab")))
                          ? e.tabs.find(function(e) {
                              return e.unique_id === t;
                            })
                          : void 0) || e.tabs[0]),
                    r.set(e, new Ar(a, n.props.nSaleDayIndex)));
                }),
                r
              );
            }),
            (e.prototype.OnTabSelected = function(e, t) {
              var a,
                n = this.GetTabSelectionsFromURL().get(e);
              (null == n ? void 0 : n.GetTab()) !== t &&
                (this.m_refTabSection.current &&
                  ((a =
                    this.m_refTabSection.current.getBoundingClientRect().top +
                    window.scrollY),
                  window.scrollY > a && window.scrollTo(0, a)),
                je(this.props.history, "tab", String(t.unique_id)));
            }),
            (e.prototype.render = function() {
              var s = this,
                e = this.props,
                c = e.event,
                u = e.language,
                d = (e.promotionName,
                e.bIsPreview,
                e.nSaleDayIndex,
                this.GetTabSelectionsFromURL()),
                p = !1,
                m = !1,
                v = new Ar(null, this.props.nSaleDayIndex),
                h = [{ elements: [], activeTab: v }];
              c.GetSaleSections().forEach(function(e, t) {
                var a = h[h.length - 1].activeTab;
                if (a.ShouldShowSection(e)) {
                  var n,
                    r = e.diable_tab_id_filtering ? v : a,
                    o = !0,
                    i = null;
                  if (
                    "items" == (n = e).section_type &&
                    n.smart_section &&
                    ("wishlist" == n.smart_section_type ||
                      "interactive_recommender" == n.smart_section_type ||
                      "dlc_music_onsale" == n.smart_section_type ||
                      "ir_subscription" == n.smart_section_type ||
                      ("wishlist_onsale" == n.smart_section_type &&
                        !vn.GetHideWishlist()) ||
                      ("dlc_onsale" == n.smart_section_type &&
                        !vn.GetHideDLC()) ||
                      ("interactive_recommender_onsale" ==
                        n.smart_section_type &&
                        !vn.GetHideIRList())) &&
                    !Y.i.logged_in
                  )
                    p ||
                      ((i = H.createElement(Rr, {
                        section: e,
                        event: c,
                        language: u
                      })),
                      (p = !0));
                  else
                    switch (e.section_type) {
                      case "items":
                      case "events":
                      case "links":
                        i = H.createElement(
                          Hr,
                          Object(z.a)({ section: e, activeTab: r }, s.props)
                        );
                        break;
                      case "broadcast":
                        c.BEventCanShowBroadcastWidget() &&
                          !m &&
                          ((i = H.createElement(Kr, {
                            broadcastEmbedContext:
                              s.props.broadcastEmbedContext,
                            activeTab: r
                          })),
                          (m = !0));
                        break;
                      case "event_description":
                        i = H.createElement(
                          xr,
                          Object(z.a)({ section: e }, s.props)
                        );
                        break;
                      case "doors":
                        i = H.createElement(ar, {
                          strFontFamily: Jr(c.jsondata.sale_font, u)
                        });
                        break;
                      case "text_section":
                        i = H.createElement(
                          Fr,
                          Object(z.a)({ section: e }, s.props)
                        );
                        break;
                      case "tabs":
                        var l = d.get(e);
                        h.push({ activeTab: l, elements: [] }),
                          (i = H.createElement(
                            H.Fragment,
                            null,
                            H.createElement("div", { ref: s.m_refTabSection }),
                            H.createElement(
                              jr,
                              Object(z.a)({ section: e }, s.props, {
                                activeTab: l.GetTab(),
                                onTabSelected: s.OnTabSelected
                              })
                            )
                          )),
                          (o = !1);
                        break;
                      case "tab_buttons":
                        i = H.createElement(
                          Tr,
                          Object(z.a)({ section: e }, s.props, {
                            activeTab: r,
                            onTabSelected: s.OnTabSelected,
                            hideActiveTab: !0
                          })
                        );
                        break;
                      case "curator":
                        e.curator_clan_id &&
                          (i = H.createElement(
                            "div",
                            {
                              style: {
                                width: "100%",
                                margin: "0 auto",
                                maxWidth: "940px"
                              }
                            },
                            H.createElement(ee.a, {
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
                        i = H.createElement(
                          vr.c,
                          Object(z.a)({ section: e }, s.props, { activeTab: r })
                        );
                        break;
                      case "vo_internal":
                        if (e.internal_section_data)
                          switch (e.internal_section_data.internal_type) {
                            case "subscription_pricing":
                              i = H.createElement(
                                Sr,
                                Object(z.a)({ section: e }, s.props)
                              );
                              break;
                            case "tab_contents":
                              i = H.createElement(
                                Ir,
                                Object(z.a)({ section: e }, s.props, {
                                  tab: a.GetTab(),
                                  showReferences: !1
                                })
                              );
                              break;
                            case "tab_references":
                              i = H.createElement(
                                Ir,
                                Object(z.a)({ section: e }, s.props, {
                                  tab: a.GetTab(),
                                  showReferences: !0
                                })
                              );
                          }
                        break;
                      case "sale_item_browser":
                        i = H.createElement(
                          Pr,
                          Object(z.a)({ section: e }, s.props, { activeTab: r })
                        );
                    }
                  h[h.length - 1].elements.push(
                    H.createElement(
                      y.a,
                      { key: "SaleSectionIndex_" + e.unique_id + "_" + t },
                      o
                        ? H.createElement(
                            "div",
                            {
                              id: "SaleSection_" + (e.unique_id || t),
                              className: Object(W.a)("SaleSectionCtn")
                            },
                            i
                          )
                        : i
                    )
                  );
                }
              });
              var t = h.map(function(e, t) {
                return H.createElement(
                  "div",
                  {
                    key: "TabSection_" + t,
                    className: Object(W.a)(
                      cr.a.SaleSectionTabListContainer,
                      "SaleSectionTabListContainer"
                    )
                  },
                  e.elements
                );
              });
              return H.createElement(
                "div",
                { className: cr.a.SaleSectionListContainer },
                t
              );
            }),
            Object(z.c)([s.a], e.prototype, "OnTabSelected", null),
            (e = Object(z.c)([r.a], e))
          );
        })(H.Component),
        Br = Object(i.i)(Nr);
      var Mr = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language;
          if (!Zr(t, n, a.clanSteamID.GetAccountID())) return null;
          var r,
            o,
            i,
            l = H.createElement(
              "div",
              {
                className: V.a.SaleSectionHeader,
                style: ((r = t),
                (i = n),
                {
                  fontFamily: Jr((o = a).jsondata.sale_font, i),
                  fontWeight: o.jsondata.sale_font_weight,
                  fontSize: o.jsondata.sale_section_font_size,
                  textTransform: o.jsondata.sale_section_disable_capitalize
                    ? "initial"
                    : null,
                  color: r.label_color
                })
              },
              Zr(t, n, a.clanSteamID.GetAccountID())
            );
          return (
            t.label_link &&
              (l = H.createElement(
                "a",
                {
                  href: qr(t.label_link),
                  target: Y.c.IN_CLIENT ? void 0 : "_blank"
                },
                l
              )),
            l
          );
        },
        Rr = function(e) {
          var t = e.section,
            a = e.event;
          e.language;
          return H.createElement(
            "div",
            { className: cr.a.SaleSection, style: Qr(t, a) },
            H.createElement(Mr, Object(z.a)({}, e)),
            H.createElement(
              "div",
              { className: cr.a.SaleSectionLoginPrompt },
              Object(Z.f)("#SalePage_LoginPrompt"),
              H.createElement(
                "button",
                { onClick: oa.a, className: cr.a.LoginButton },
                Object(Z.f)("#Login_SignIn")
              )
            )
          );
        },
        xr = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview;
          return H.createElement(
            "div",
            {
              className: Object(W.a)(
                cr.a.SaleSection,
                On.a.SaleSectionCtn,
                "SaleSectionForCustomCSS"
              ),
              style: Qr(t, a)
            },
            H.createElement(Mr, Object(z.a)({}, e)),
            H.createElement(
              "div",
              {
                className: Object(W.a)(V.a.SaleSectionContainer, "SaleTextCtn")
              },
              H.createElement(In.b, {
                text: a.GetDescriptionWithFallback(n),
                partnerEventStore: M.c,
                showErrorInfo: r,
                event: a
              })
            )
          );
        },
        Fr = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview,
            o = Z.a.GetWithFallback(t.text_section_contents, n);
          return H.createElement(
            "div",
            {
              className: Object(W.a)(
                cr.a.SaleSection,
                On.a.SaleSectionCtn,
                "SaleSectionForCustomCSS"
              ),
              style: Qr(t, a)
            },
            H.createElement(Mr, Object(z.a)({}, e)),
            H.createElement(
              "div",
              {
                className: Object(W.a)(V.a.SaleSectionContainer, "SaleTextCtn")
              },
              H.createElement(In.b, {
                text: o,
                partnerEventStore: M.c,
                showErrorInfo: r,
                event: a
              })
            )
          );
        },
        Pr = Object(r.a)(function(e) {
          var t = e.section,
            a = e.event,
            n = e.activeTab,
            r =
              "saleitembrowser_" +
              t.unique_id +
              (n.BIsTabFilteringEnabled()
                ? "_" + n.GetActiveTabUniqueID()
                : "");
          return H.createElement(
            $e.a,
            {
              placeholderHeight: "100vh",
              rootMargin: "0px 0px 100% 0px",
              mode: "LoadAndUnload",
              className: Object(W.a)(
                cr.a.SaleSection,
                On.a.SaleSectionCtn,
                "SaleSectionForCustomCSS"
              ),
              style: Qr(t, a)
            },
            H.createElement(Mr, Object(z.a)({}, e)),
            H.createElement(mr, Object(z.a)({ key: r }, e))
          );
        }),
        Hr = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bInitialLoadComplete: !1,
                nShowAdditionalRows: 0,
                bIsCapsuleArrayTruncated: !1,
                nHiddenCapsules: 0,
                capsules: [],
                allCapsules: [],
                bScreenIsWide: a.IsWideScreen(),
                nMaxCapsulesPerRow: e.GetMaxCapsulesPerRow(),
                prunedFacets: new Array(),
                bPrunedFacetsLoaded: !1
              }),
              e
            );
          }
          var a;
          return (
            Object(z.d)(e, t),
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
            (e.prototype.GetMaxCapsulesPerRow = function() {
              var e = Object(mt.t)(this.props.section.section_type);
              return a.IsWideScreen()
                ? e.nMaxItemsPerRow
                : Math.min(
                    Math.max(
                      Math.floor(window.innerWidth / e.nItemMinimumWidth),
                      1
                    ),
                    e.nMaxItemsPerRow
                  );
            }),
            (e.prototype.ShowMoreContents = function() {
              this.state.bAwaitingShowContentLoading ||
                this.setState(
                  { bAwaitingShowContentLoading: !0 },
                  this.LoadMoreContent
                );
            }),
            (e.prototype.LoadMoreContent = function() {
              return Object(z.b)(this, void 0, void 0, function() {
                var t;
                return Object(z.e)(this, function(e) {
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
            (e.prototype.GetItemListCacheName = function(e, t) {
              var a = this.props,
                n = a.section,
                r = a.event,
                o = a.bIsPreview,
                i =
                  "section_" +
                  e +
                  "_" +
                  r.GID +
                  (t || 0) +
                  Object(D.a)(
                    n.unique_id ? n.unique_id.toString() : JSON.stringify(n)
                  ).toString();
              return (
                o &&
                  r.rtime32_last_local_modification &&
                  (i += "_" + r.rtime32_last_local_modification),
                i
              );
            }),
            (e.prototype.GetCachedRandomizedOrder = function(e, t) {
              var a,
                n = this.props,
                r = n.section,
                o = n.event,
                i = n.activeTab;
              if (r.use_random_order) {
                var l = this.GetItemListCacheName(
                  e,
                  null === (a = null == i ? void 0 : i.GetTab()) || void 0 === a
                    ? void 0
                    : a.unique_id
                );
                if (window.sessionStorage) {
                  var s = window.sessionStorage.getItem(l);
                  if (s) {
                    var c = JSON.parse(s);
                    if (c.rtime32_last_modified == o.rtime32_last_modified)
                      return c.randomized;
                  }
                  var u = Array.from(t);
                  Object(at.g)(u);
                  var d = {
                    randomized: u,
                    rtime32_last_modified: o.rtime32_last_modified
                  };
                  return window.sessionStorage.setItem(l, JSON.stringify(d)), u;
                }
              }
              return t;
            }),
            (e.prototype.GetSectionForSession = function() {
              var e = this.props,
                t = e.section,
                a = e.event;
              if (t.use_random_order) {
                var n = this.GetItemListCacheName("section");
                if (window.sessionStorage) {
                  var r = window.sessionStorage.getItem(n);
                  if (r) {
                    var o = JSON.parse(r);
                    if (o.rtime32_last_modified == a.rtime32_last_modified)
                      return o;
                  }
                  Object(at.g)(t.capsules),
                    Object(at.g)(t.links),
                    Object(at.g)(t.events),
                    (t.rtime32_last_modified = a.rtime32_last_modified),
                    window.sessionStorage.setItem(n, JSON.stringify(t));
                }
              }
              return t;
            }),
            (e.prototype.LoadCapsules = function(L) {
              return (
                void 0 === L && (L = 0),
                Object(z.b)(this, void 0, void 0, function() {
                  var r,
                    o,
                    i,
                    l,
                    s,
                    c,
                    u,
                    d,
                    p,
                    m,
                    v,
                    h,
                    _,
                    b,
                    g,
                    f,
                    E,
                    y,
                    S,
                    C,
                    O,
                    w,
                    T,
                    I,
                    j,
                    k,
                    D,
                    G;
                  return Object(z.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (r = this.GetSectionForSession()),
                          (o = this.props),
                          (i = o.event),
                          (l = o.promotionName),
                          (s = o.bIsPreview),
                          (c = o.activeTab),
                          (u = o.nSaleDayIndex),
                          "items" !== r.section_type ||
                          "sale_tabhub" == r.smart_section_type
                            ? [3, 7]
                            : [4, x.a.HintLoad()]
                        );
                      case 1:
                        return (e.sent(), (d = void 0), r.smart_section)
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
                              (function(m, v, h, _, b, g) {
                                return Object(z.b)(
                                  this,
                                  void 0,
                                  void 0,
                                  function() {
                                    var t, a, n, r, o, i, l, s, c, u, d, p;
                                    return Object(z.e)(this, function(e) {
                                      switch (e.label) {
                                        case 0:
                                          return (
                                            (t = _.smart_section_type),
                                            (a = _.smart_section_max_apps),
                                            (n = _.smart_section_tag),
                                            (r = _.smart_section_category),
                                            (o = _.random_from_entire_set),
                                            (i = a || 24),
                                            "tag" !== t
                                              ? [3, 2]
                                              : [
                                                  4,
                                                  cn.GetDiscounts({
                                                    tagid: n,
                                                    max_results: i,
                                                    feature: b,
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
                                                cn.GetDiscounts({
                                                  categoryid: r,
                                                  max_results: i,
                                                  feature: b,
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
                                            : [4, cn.GetTopN(b, i)];
                                        case 5:
                                          return [
                                            2,
                                            (s = e.sent()).map(function(e) {
                                              return { id: e, type: "game" };
                                            })
                                          ];
                                        case 6:
                                          if (!Object(mt.g)(t)) return [3, 11];
                                          e.label = 7;
                                        case 7:
                                          return (
                                            e.trys.push([7, 9, , 10]),
                                            [
                                              4,
                                              cn.GetSaleGamesByFlavor(
                                                m,
                                                v
                                                  ? v.GetTab().unique_id
                                                  : void 0,
                                                h,
                                                t,
                                                i
                                              )
                                            ]
                                          );
                                        case 8:
                                          return (
                                            (l = e.sent()),
                                            [
                                              2,
                                              (s = l.appids).map(function(e) {
                                                return { id: e, type: "game" };
                                              })
                                            ]
                                          );
                                        case 9:
                                          return e.sent(), [2, []];
                                        case 10:
                                          return [3, 30];
                                        case 11:
                                          return Y.i.logged_in
                                            ? [3, 12]
                                            : [2, []];
                                        case 12:
                                          return !Y.i.logged_in ||
                                            ("wishlist" !== t &&
                                              "interactive_recommender" !== t)
                                            ? [3, 13]
                                            : [
                                                2,
                                                (s = g.filter(function(e) {
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
                                            !Y.i.logged_in ||
                                            ("wishlist_onsale" !== t &&
                                              "dlc_onsale" !== t &&
                                              "dlc_music_onsale" !== t &&
                                              "interactive_recommender_onsale" !==
                                                t &&
                                              "ir_subscription" !== t &&
                                              "tag_recommender" !== t)
                                          )
                                            return [3, 30];
                                          switch (((s = []), t)) {
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
                                          return vn.GetHideWishlist()
                                            ? [3, 16]
                                            : [4, cn.GetWishlistOnSale()];
                                        case 15:
                                          (s = e.sent()),
                                            (c = "game"),
                                            (e.label = 16);
                                        case 16:
                                          return [3, 29];
                                        case 17:
                                          return (
                                            (c = "dlc"),
                                            vn.GetHideDLC()
                                              ? [3, 19]
                                              : [
                                                  4,
                                                  cn.GetDLCForGamesInMyLibraryOnSale()
                                                ]
                                          );
                                        case 18:
                                          (s = e.sent()), (e.label = 19);
                                        case 19:
                                          return [3, 29];
                                        case 20:
                                          return (
                                            (c = "music"),
                                            [
                                              4,
                                              cn.GetSoundtracksForGamesInMyLibraryOnSale()
                                            ]
                                          );
                                        case 21:
                                          return (s = e.sent()), [3, 29];
                                        case 22:
                                          return (
                                            (c = "game"),
                                            vn.GetHideIRList()
                                              ? [3, 24]
                                              : [
                                                  4,
                                                  cn.GetInteractiveRecommendationsOnSale()
                                                ]
                                          );
                                        case 23:
                                          (s = e.sent()), (e.label = 24);
                                        case 24:
                                          return [3, 29];
                                        case 25:
                                          return (
                                            (c = "game"),
                                            [
                                              4,
                                              cn.GetTagRecommendorForThisSale(
                                                h,
                                                i,
                                                m
                                              )
                                            ]
                                          );
                                        case 26:
                                          return (s = e.sent()), [3, 29];
                                        case 27:
                                          return (
                                            (c = "game"),
                                            (u = 402931),
                                            [
                                              4,
                                              (d = hn.Get()).LoadSubscriptionInfo(
                                                u
                                              )
                                            ]
                                          );
                                        case 28:
                                          return (
                                            e.sent(),
                                            (p = d.GetAllAppForMaster(u)),
                                            (s = Array.from(p).filter(function(
                                              e
                                            ) {
                                              return x.a.BIsGameRecommended(e);
                                            })),
                                            [3, 29]
                                          );
                                        case 29:
                                          return [
                                            2,
                                            s.map(function(e) {
                                              return { id: e, type: c };
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
                                (Y.c.IN_CLIENT
                                  ? "library-"
                                  : Object(Y.e)() + "-") + t),
                                p
                              )
                            ])
                          : [3, 3];
                      case 2:
                        return (
                          (d = e.sent()),
                          (d = this.GetCachedRandomizedOrder("capsules", d)),
                          [3, 4]
                        );
                      case 3:
                        (d = r.capsules), (e.label = 4);
                      case 4:
                        return (
                          (d = Vr(
                            (d = d.filter(function(e) {
                              return c.ShouldShowCapsule(e);
                            })),
                            u
                          )),
                          (m = !1),
                          (v = d.length),
                          0 < (h = this.GetRowsToShow(L)) &&
                            !s &&
                            "store" === Object(Y.e)() &&
                            ((_ =
                              (function(e, t) {
                                for (var a = Yr(e), n = 0, r = 0; r < t; r++)
                                  n += a[r % a.length];
                                return n;
                              })(r, h) + 4) +
                              4 <
                              v &&
                              ((v = _), (m = !0))),
                          0 < (S = Object(mt.s)(r)) &&
                            ((b = Math.max(S + 5, Math.floor(1.1 * S))),
                            (v = Math.min(v, b))),
                          d.length > v && (d = d.slice(0, v)),
                          (g = Ur(r)),
                          [4, Object(ur.e)(d, g)]
                        );
                      case 5:
                        return (
                          e.sent(),
                          (f = new Array()),
                          [4, Object(ur.a)(d, g, f)]
                        );
                      case 6:
                        return (
                          (E = e.sent()),
                          (y = f.length),
                          0 < (S = Object(mt.s)(r)) &&
                            S < E.length &&
                            (E = E.slice(0, S)),
                          r.enable_faceted_browsing &&
                            ((C = r.min_capsule_matches_for_facet_values || 1),
                            (O = r.max_facet_values_for_facet || 100),
                            (w =
                              r.facet_sort_order || mt.n.k_ESortFacetsManually),
                            this.PruneFacets(E, r.facets, C, O, w)),
                          this.setState({
                            nHiddenCapsules: y,
                            capsules: E,
                            allCapsules: E,
                            bIsCapsuleArrayTruncated: m,
                            bInitialLoadComplete: !0
                          }),
                          [3, 19]
                        );
                      case 7:
                        return "events" !== r.section_type
                          ? [3, 16]
                          : ((T = void 0),
                            !r.smart_section ||
                            ("recent_events" !== r.smart_section_type &&
                              "recent_tagged_events" !== r.smart_section_type)
                              ? [3, 13]
                              : "recent_events" !== r.smart_section_type
                              ? [3, 9]
                              : [4, mn.Get().GetRecentEventsForSalesPage(i)]);
                      case 8:
                        return (I = e.sent()), [3, 11];
                      case 9:
                        return [
                          4,
                          mn.Get().GetRecentTaggedEventsForSalesPage(i, r)
                        ];
                      case 10:
                        (I = e.sent()), (e.label = 11);
                      case 11:
                        return [
                          4,
                          M.c.LoadBatchPartnerEventsByAnnouncementGID(
                            I.map(function(e) {
                              return e.gid;
                            }),
                            void 0
                          )
                        ];
                      case 12:
                        return (T = e.sent()), [3, 15];
                      case 13:
                        return [
                          4,
                          M.c.LoadBatchPartnerEventsByAnnouncementGID(
                            null,
                            r.events.map(function(e) {
                              return e.announcement_gid;
                            })
                          )
                        ];
                      case 14:
                        (T = e.sent()), (e.label = 15);
                      case 15:
                        return (
                          (j = T.map(function(e) {
                            return e.GID;
                          })),
                          (j = this.GetCachedRandomizedOrder("events2", j)),
                          (T = j.map(function(e) {
                            return M.c.GetClanEventModel(e);
                          })),
                          (k = T.filter(function(e) {
                            return !!e && c.ShouldShowEvent(e);
                          })),
                          en.a.LoadAppLinkInfo(
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
                              : [4, cn.GetSaleTags()]);
                      case 17:
                        (G = e.sent()),
                          (D = G.map(function(e) {
                            return {
                              url: e.url,
                              localized_link_capsule: void 0,
                              materialized_link_capsule: e.square
                            };
                          })),
                          (D = this.GetCachedRandomizedOrder("links", D)),
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
                nMaxCapsulesPerRow: this.GetMaxCapsulesPerRow()
              });
            }),
            (e.prototype.EstimateComponentHeight = function(e) {
              return (
                250 *
                Math.min(
                  (function(e, t) {
                    var a = Yr(e),
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
              var a = Object(mt.q)(t);
              return a <= 0 ? 0 : a + e;
            }),
            (e.prototype.WrapWithFacetedBrowsingControls = function(e, t, a) {
              return H.createElement(
                "div",
                { className: Nn.FacetedBrowseCtn },
                H.createElement(
                  "div",
                  { className: Nn.FacetedBrowseControls },
                  this.state.bPrunedFacetsLoaded
                    ? H.createElement(Mn, {
                        language: this.props.language,
                        facets: t,
                        fnApplyFacetGroupFilter: a
                      })
                    : H.createElement($.a, null)
                ),
                H.createElement("div", { className: Nn.FacetedBrowseItems }, e)
              );
            }),
            (e.prototype.CountCapsulesThatPassFilter = function(e, a) {
              for (var n = 0, t = 0, r = e; t < r.length; t++)
                for (
                  var o = 0,
                    i = r[t].map(function(e) {
                      return en.a.GetAppLinkInfo(e);
                    });
                  o < i.length;
                  o++
                ) {
                  if (
                    "break" ===
                    (function(e) {
                      var t = new Set();
                      if (
                        (e.tags.forEach(function(e) {
                          return t.add(e.name);
                        }),
                        zr(Array.from(t), a))
                      )
                        return ++n, "break";
                    })(i[o])
                  )
                    break;
                }
              return n;
            }),
            (e.prototype.PruneFacets = function(p, m, v, h, _) {
              return Object(z.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o,
                  i,
                  l,
                  s,
                  c,
                  u,
                  d = this;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      for (t = new Array(), a = 0, n = p; a < n.length; a++)
                        (r = n[a]), t.push(Object(ur.c)(r));
                      return [4, Promise.all(t)];
                    case 1:
                      for (
                        o = e.sent(), i = new Array(), l = 0, s = m;
                        l < s.length;
                        l++
                      )
                        (c = s[l]),
                          (u = new Array()),
                          (u = (u = c.facetValues.map(function(e) {
                            return {
                              facetValue: e,
                              nMatchingCapsules: d.CountCapsulesThatPassFilter(
                                o,
                                e.filter
                              )
                            };
                          })).filter(function(e) {
                            return (
                              v <= e.nMatchingCapsules &&
                              e.nMatchingCapsules < p.length
                            );
                          })),
                          _ === mt.n.k_ESortFacetsByName
                            ? u.sort(function(e, t) {
                                return e < t ? -1 : t < e ? 1 : 0;
                              })
                            : _ === mt.n.k_ESortFacetsByMatchCount &&
                              u.sort(function(e, t) {
                                return (
                                  t.nMatchingCapsules - e.nMatchingCapsules
                                );
                              }),
                          1 < (u = u.slice(0, h)).length &&
                            i.push({
                              name: c.name,
                              facetValues: u.map(function(e) {
                                return e.facetValue;
                              })
                            });
                      return (
                        this.setState({
                          prunedFacets: i,
                          bPrunedFacetsLoaded: !0
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.ApplyFacetGroupFilter = function(d) {
              var e = this;
              d && 0 !== d.facetFilters.length
                ? Object(z.b)(e, void 0, void 0, function() {
                    var a, t, n, r, o, i, l, s, c, u;
                    return Object(z.e)(this, function(e) {
                      switch (e.label) {
                        case 0:
                          (a = new Array()),
                            (t = 0),
                            (n = this.state.allCapsules),
                            (e.label = 1);
                        case 1:
                          return t < n.length
                            ? ((r = n[t]), [4, Object(ur.c)(r)])
                            : [3, 4];
                        case 2:
                          for (
                            o = e.sent(),
                              i = o.map(function(e) {
                                return en.a.GetAppLinkInfo(e);
                              }),
                              l = function(e) {
                                var t = new Array();
                                if (
                                  (e.tags.forEach(function(e) {
                                    return t.push(e.name);
                                  }),
                                  Bn(t, d))
                                )
                                  return a.push(r), "break";
                              },
                              s = 0,
                              c = i;
                            s < c.length && ((u = c[s]), "break" !== l(u));
                            s++
                          );
                          e.label = 3;
                        case 3:
                          return t++, [3, 1];
                        case 4:
                          return this.setState({ capsules: a }), [2];
                      }
                    });
                  })
                : this.setState({ capsules: this.state.allCapsules });
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
                u = r.events,
                d = r.bScreenIsWide,
                p = r.nMaxCapsulesPerRow,
                m = r.bAwaitingShowContentLoading;
              if (!o) return null;
              var v = this.GetSectionForSession(),
                h = 1 === s.length,
                _ = h ? [1] : Yr(v),
                b = (function(e) {
                  var t = e.event,
                    o = e.section,
                    a = e.capsules,
                    n = e.links,
                    r = e.events,
                    i = e.language,
                    l = e.bShowParentApp,
                    s = e.bCanShowSingleRowCapsules,
                    c = t.clanSteamID.GetAccountID(),
                    u = t.BIsLockedToAppOwners();
                  {
                    if (Boolean("events" === o.section_type))
                      return r
                        ? r.map(function(t) {
                            return H.createElement(
                              "div",
                              {
                                key: o.unique_id + "_" + t.GID,
                                style: {},
                                className: Tn.a.OtherEvents
                              },
                              H.createElement(Lt.a, { event: t }),
                              H.createElement(Ln, {
                                event: t,
                                openNewWindow: !0,
                                appInfo: o.hide_prices
                                  ? void 0
                                  : en.a.GetAppLinkInfo(t.appid),
                                onClick: function(e) {
                                  U.a.Get().RecordEventRead(t, 8),
                                    Object(Ba.a)(t, q.m(e)),
                                    e.stopPropagation(),
                                    e.preventDefault();
                                }
                              })
                            );
                          })
                        : [];
                    if (
                      Boolean("links" === o.section_type) ||
                      Boolean("sale_tabhub" === o.smart_section_type)
                    )
                      return n
                        ? n.map(function(e, t) {
                            return H.createElement(qn.b, {
                              key: o.unique_id + "_" + t,
                              link: e,
                              language: i,
                              clanAccountID: c,
                              strClassName: cr.a.LinkCapsule
                            });
                          })
                        : [];
                    if (Boolean("items" === o.section_type))
                      return a
                        ? a.map(function(e, t) {
                            var a = !s,
                              n = mt.v;
                            s &&
                              (n = o.single_item_style
                                ? o.single_item_style
                                : mt.v);
                            var r =
                              o.unique_id + "_" + t + "_" + e.type + "_" + e.id;
                            return a
                              ? H.createElement(qn.f, {
                                  imageType: "header",
                                  key: r,
                                  capsule: e,
                                  bShowParentApp: l,
                                  bUseSubscriptionLayout: u,
                                  bShowDemoButton: o.show_as_demos,
                                  bHidePrice: o.hide_prices
                                })
                              : H.createElement(
                                  "div",
                                  {
                                    key: r,
                                    className:
                                      "bordered" == n
                                        ? cr.a.AppSummaryWidgetCtn
                                        : ""
                                  },
                                  H.createElement(qn.i, {
                                    id: e.id,
                                    type: e.type,
                                    displayStyle: n,
                                    bUseSubscriptionLayout: u,
                                    bShowDemoButton: o.show_as_demos,
                                    bHidePrice: o.hide_prices
                                  })
                                );
                          })
                        : [];
                  }
                  return null;
                })({
                  event: t,
                  section: v,
                  capsules: s,
                  links: c,
                  events: u,
                  language: n,
                  bCanShowSingleRowCapsules:
                    (h && 1 < p) ||
                    Yr(v).every(function(e) {
                      return 1 === e;
                    }),
                  bShowParentApp: Ur(v)
                }).filter(function(e) {
                  return !!e;
                }),
                g = null;
              if (0 < b.length) {
                var f = Object(mt.r)(v),
                  E = Math.min(_[0], p),
                  y = v.show_as_carousel && f <= 1;
                if (y && b.length > E)
                  g = H.createElement(
                    Xt,
                    {
                      hideArrows: !d,
                      visibleElements: E,
                      className: Object(W.a)(
                        "SaleSectionCarousel",
                        "SaleSectionCarouselPadding"
                      ),
                      useTestScrollbar: !0,
                      bLazyRenderChildren: !0
                    },
                    b
                  );
                else {
                  var S = this.GetRowsToShow(this.state.nShowAdditionalRows),
                    C = !0;
                  if (v.show_as_carousel) (S = f), (C = y);
                  else if (0 == this.state.nShowAdditionalRows && 0 < S) {
                    for (var O = 0, w = 0; O < S; O++) {
                      if ((w += L = Math.min(_[O % _.length], p)) > b.length)
                        break;
                    }
                    S = Math.max(2, O);
                  }
                  for (
                    var T, I = new Array(), j = new Array(), k = 0, D = 0;
                    k < b.length;
                    D++
                  ) {
                    for (var G = 0; (0 == S || G < S) && k < b.length; G++) {
                      var L = Math.min(_[G % _.length], p),
                        A = Math.min(L, b.length - k);
                      A < L && 0 === G && (L = Math.max(2, A));
                      var N = L - A,
                        B =
                          N % 2 != 0
                            ? "minmax(0, 0.5fr) repeat(" +
                              (L - 1) +
                              ", minmax(0, 1fr)) minmax(0, 0.5fr)"
                            : "repeat(" + L + ", minmax(0, 1fr))",
                        M = null,
                        R = null;
                      if (0 < N)
                        for (
                          var x = Math.floor((1 + N) / 2),
                            M = new Array(),
                            R = new Array(),
                            F = 0;
                          F < x;
                          F++
                        )
                          M.push(H.createElement("div", { key: "front_" + F })),
                            R.push(
                              H.createElement("div", { key: "back_" + F })
                            );
                      j.push(
                        H.createElement(
                          "div",
                          {
                            key: "Row_" + G,
                            className: Object(W.a)(
                              V.a.SaleSectionContainer,
                              cr.a.SaleSectionContainer
                            ),
                            style: { gridTemplateColumns: 1 < L ? B : null }
                          },
                          M,
                          b.slice(k, k + A),
                          R
                        )
                      ),
                        (k += A);
                    }
                    if (C) break;
                    I.push(
                      H.createElement(
                        "div",
                        { className: cr.a.CarouselPage, key: "Page_" + D },
                        j
                      )
                    ),
                      (j = []);
                  }
                  g =
                    0 == I.length
                      ? ((T = i || b.length > k),
                        H.createElement(
                          H.Fragment,
                          null,
                          j,
                          T &&
                            H.createElement(
                              "div",
                              { className: cr.a.ShowContentsContainer },
                              m
                                ? H.createElement($.a, { size: "small" })
                                : H.createElement(
                                    "button",
                                    {
                                      onClick: this.ShowMoreContents,
                                      className: cr.a.ShowContentsButton
                                    },
                                    Object(Z.f)("#Sale_ShowMore")
                                  )
                            )
                        ))
                      : H.createElement(
                          Xt,
                          {
                            hideArrows: !d,
                            visibleElements: 1,
                            className: "SaleSectionCarousel",
                            useTestScrollbar: !0,
                            bLazyRenderChildren: !0
                          },
                          I
                        );
                }
              }
              if (!g) {
                if (!a) return null;
                g = H.createElement(
                  "div",
                  { className: cr.a.preview_placeholder_section },
                  Object(Z.f)(
                    v.smart_section
                      ? "#Sale_SmartPlaceHolder"
                      : "#Sale_PlaceHolder"
                  )
                );
              }
              var P = v.label_link ? qr(v.label_link) : void 0;
              return (
                v.enable_faceted_browsing &&
                  (g = this.WrapWithFacetedBrowsingControls(
                    g,
                    this.state.prunedFacets,
                    this.ApplyFacetGroupFilter
                  )),
                H.createElement(
                  $e.a,
                  {
                    placeholderHeight: this.EstimateComponentHeight(v),
                    rootMargin: "0px 0px 100% 0px",
                    className: Object(W.a)(
                      cr.a.SaleSection,
                      v.show_as_carousel && cr.a.CarouselDisplay,
                      On.a.SaleSectionCtn,
                      "SaleSectionForCustomCSS"
                    ),
                    style: Qr(v, t)
                  },
                  H.createElement(
                    "div",
                    { className: cr.a.SaleSectionTitleCtn },
                    H.createElement(Mr, Object(z.a)({}, this.props)),
                    0 < l &&
                      H.createElement(
                        "div",
                        {
                          className: cr.a.SaleSectionSubtext,
                          "data-tooltip-text": Object(Z.f)(
                            "#Sale_HiddenItem_Tooltip"
                          )
                        },
                        H.createElement(
                          "a",
                          { href: Y.c.STORE_BASE_URL + "account/preferences" },
                          Object(Z.n)(
                            1 == l
                              ? "#Sale_HiddenItem_Single_Short"
                              : "#Sale_HiddenItems_Short",
                            l
                          )
                        )
                      )
                  ),
                  g,
                  Boolean(P) &&
                    H.createElement(
                      "div",
                      { className: cr.a.SaleViewAll },
                      H.createElement(
                        "a",
                        { href: P, target: Y.c.IN_CLIENT ? void 0 : "_blank" },
                        Object(Z.f)("#btn_live_streams_all")
                      )
                    )
                )
              );
            }),
            Object(z.c)([s.a], e.prototype, "ShowMoreContents", null),
            Object(z.c)([s.a], e.prototype, "LoadCapsules", null),
            Object(z.c)([s.a], e.prototype, "OnResize", null),
            Object(z.c)(
              [s.a],
              e.prototype,
              "WrapWithFacetedBrowsingControls",
              null
            ),
            Object(z.c)([s.a], e.prototype, "PruneFacets", null),
            Object(z.c)([s.a], e.prototype, "ApplyFacetGroupFilter", null),
            (e = a = Object(z.c)([r.a], e))
          );
        })(H.Component);
      function zr(e, t) {
        if (t && t.clauses) {
          var a = new Set();
          e.forEach(function(e) {
            return a.add(e.toLocaleLowerCase());
          });
          for (var n = 0, r = t.clauses; n < r.length; n++) {
            var o = r[n];
            if (o.or_tags) {
              for (var i = !1, l = 0, s = 0, c = o.or_tags; s < c.length; s++) {
                var u = c[s];
                if (u && (l++, (i = a.has(u.toLocaleLowerCase())))) break;
              }
              if (0 !== l) if (!("Must have" === o.type ? i : !i)) return !1;
            }
          }
        }
        return !0;
      }
      function Ur(e) {
        return (
          "dlc" === e.smart_section_type ||
          "dlc_onsale" === e.smart_section_type ||
          "dlc_music_onsale" === e.smart_section_type
        );
      }
      function Vr(e, t) {
        return e.filter(function(e) {
          return null == e.visibility_index || e.visibility_index == t;
        });
      }
      var Wr = function(e) {
        var t = e.text,
          a = e.url,
          n = e.color,
          r = e.bgcolor;
        return H.createElement(
          "a",
          {
            className: V.a.BrowseMoreButton,
            href: qr(a),
            target: "_blank",
            style: { backgroundColor: r, color: n }
          },
          t || Object(Z.f)("#Sale_BrowseMore_Text_Default")
        );
      };
      function qr(t) {
        var e = "",
          a = "";
        if (t && (0 <= t.indexOf("/") || 0 <= t.indexOf("?")))
          try {
            var n = new URL(t),
              e = n.pathname.substring(1),
              a = n.search;
            Y.c.SNR &&
              (a += 0 < a.length ? "&snr=" + Y.c.SNR : "?snr=" + Y.c.SNR);
          } catch (e) {
            console.warn(t, e);
          }
        return Y.c.STORE_BASE_URL + e + a;
      }
      function Zr(e, t, a, n) {
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
            var t = f.a.InitFromClanID(e.curator_clan_id),
              a = sn.a.GetCreatorHome(t);
            if (a) return Object(Z.f)("#Sale_CuratorSection_Name", a.GetName());
          }
          return "#Sale_CuratorSection";
        })(e);
        if (null !== r) return r && r.startsWith("#") ? Object(Z.f)(r) : r;
        var o =
            Z.a.GetWithFallback(e.localized_label, t) ||
            ("#Sale_default_label" === e.default_label
              ? ""
              : Object(Z.f)(e.default_label)),
          i = Z.a.GetWithFallback(e.localized_label_image, t);
        if (n || !i) return o;
        var l = Y.c.MEDIA_CDN_COMMUNITY_URL + "images/clans/" + a + "/" + i;
        return H.createElement("img", { loading: "lazy", src: l, alt: o });
      }
      function Yr(e) {
        return e.capsules_per_row_array
          ? e.capsules_per_row_array
          : e.adaptive_capsules_per_row
          ? [2, 3, 4, 3]
          : [e.capsules_per_row || 1];
      }
      function Qr(e, t) {
        if (e.disable_background) return { paddingLeft: 0, paddingRight: 0 };
        var a = "";
        return (
          e.background_image &&
            (a +=
              ",url(" +
              N.a.GenerateArtworkURLFromHashAndExtensions(
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
      function Jr(e, t) {
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
      var Kr = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(z.d)(e, t),
            (e.prototype.OnEnter = function() {
              this.state.bOnceVisible || this.setState({ bOnceVisible: !0 });
            }),
            (e.prototype.render = function() {
              var t = this.props.activeTab;
              return H.createElement(
                y.a,
                null,
                H.createElement(
                  H.Suspense,
                  { fallback: H.createElement("div", null) },
                  H.createElement(
                    pt.a,
                    { onEnter: this.OnEnter },
                    H.createElement(
                      "div",
                      { className: cr.a.SaleBroadcastSection },
                      Boolean(this.state.bOnceVisible) &&
                        H.createElement(
                          kr,
                          Object(z.a)({}, this.props.broadcastEmbedContext, {
                            bShowCapsuleArt: !0,
                            fnFilterStreams: function(e) {
                              return t.ShouldShowOnTab(e.appid);
                            }
                          })
                        ),
                      Boolean(!this.state.bOnceVisible) &&
                        H.createElement("span", null, Object(Z.f)("#Loading"))
                    )
                  )
                )
              );
            }),
            Object(z.c)([s.a], e.prototype, "OnEnter", null),
            e
          );
        })(H.Component),
        Xr = Object(r.a)(function(e) {
          var t = ln.a.Get().GetPlayReadyStream(e.broadcastContext),
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
          return H.createElement(
            "div",
            { className: cr.a.SalePageBroadcastContextHover },
            H.createElement("img", {
              src: l,
              className: cr.a.AlbumCoverImage,
              onClick: i
            }),
            H.createElement(
              "div",
              { className: cr.a.AlbumTitle, onClick: i },
              " ",
              o,
              " "
            )
          );
        }),
        $r = a("BVKn"),
        eo = $r.a.Get(),
        to = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.state = {
                lookupGID: t.props.event_gid
                  ? t.props.event_gid
                  : eo.GetClanEventGIDFromAnnouncementGID(
                      t.props.announcement_gid
                    )
              }),
              t
            );
          }
          return (
            Object(z.d)(e, a),
            (e.prototype.LoadEvent = function() {
              return Object(z.b)(this, void 0, void 0, function() {
                var t,
                  a = this;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !this.props.event_gid ||
                        eo.GetClanEventModel(this.props.event_gid)
                      )
                        return [3, 5];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          eo.LoadPartnerEventGeneric(
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
                        eo
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
                                Object(ce.a)(e).strErrorMsg
                            );
                          }),
                        [3, 4]
                      );
                    case 4:
                      return [3, 6];
                    case 5:
                      this.props.announcement_gid &&
                        !eo.GetClanEventGIDFromAnnouncementGID(
                          this.props.announcement_gid
                        ) &&
                        eo
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
                                Object(ce.a)(e).strErrorMsg
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
                  eo.GetClanEventModel(this.state.lookupGID);
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
                o = n && n.GetNameWithFallback(Object(A.g)(Y.c.LANGUAGE));
              n &&
                t &&
                o &&
                ((r = Object(Z.f)(
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
                t = eo.GetClanEventModel(this.state.lookupGID);
              t &&
                ((e = Object(Ce.d)(t, Ce.a.k_eStoreNewsHub, "allowRelative")),
                this.props.history.push(e));
            }),
            (e.prototype.render = function() {
              var e = eo.GetClanEventModel(this.state.lookupGID);
              return e
                ? this.props.bInfiniteScroll
                  ? g.a.createElement(
                      y.a,
                      null,
                      g.a.createElement(ue, {
                        appid: e.appid,
                        trackingLocation: 7,
                        announcementGID: e.GetAnnouncementGID(),
                        partnerEventStore: eo,
                        eventModel: e,
                        showAppHeader: !0,
                        closeModal: this.InfiniteScrollCloseModal
                      })
                    )
                  : g.a.createElement(
                      y.a,
                      null,
                      g.a.createElement(Qn, {
                        lang: Object(A.g)(Y.c.LANGUAGE),
                        partnerEventStore: eo,
                        event: e,
                        adminPanel: g.a.createElement(Sn, {
                          eventModel: e,
                          partnerEventStore: eo
                        }),
                        otherEventRow: g.a.createElement(Gn, {
                          clanAccountID: e.clanSteamID.GetAccountID(),
                          gidAnnouncement: e.AnnouncementGID,
                          partnerEventStore: eo
                        })
                      })
                    )
                : g.a.createElement($.a, null);
            }),
            Object(z.c)([s.a], e.prototype, "InfiniteScrollCloseModal", null),
            (e = Object(z.c)([r.a], e))
          );
        })(g.a.Component),
        ao = Object(i.i)(to),
        no = a("WBba"),
        ro = a("r+ba"),
        oo = a("apHd"),
        io = (function(n) {
          function e(e) {
            var a = n.call(this, e) || this;
            a.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: []
            };
            var t = Object(oo.a)("EventWebRowEmbed");
            return (
              a.ValidateStoreDefault(t) &&
                ((a.state.bPreLoaded = t.bPreLoaded),
                (a.state.announcementGIDList = t.announcementGIDList),
                (a.state.events = []),
                a.state.announcementGIDList.forEach(function(e) {
                  var t = M.c.GetClanEventFromAnnouncementGID(e);
                  t && a.state.events.push(t);
                })),
              a
            );
          }
          return (
            Object(z.d)(e, n),
            (e.prototype.componentDidMount = function() {
              return Object(z.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o,
                  i,
                  l,
                  s = this;
                return Object(z.e)(this, function(e) {
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
                          ((l = U.a.Get().GetTracker()),
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
              var a = U.a.Get().GetTracker();
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
                return g.a.createElement(
                  "div",
                  { className: se.a.FlexCenter },
                  g.a.createElement($.a, { size: "medium", position: "center" })
                );
              if (n && 0 === n.length) return null;
              var e = window.screen.width <= 500 ? 1 : 2,
                t = this.props,
                r = t.partnerEventStore,
                o = t.strClassName,
                i = t.appid,
                l = t.trackingLocation;
              return g.a.createElement(
                "div",
                { className: o },
                this.state.bShowModal &&
                  g.a.createElement(ue, {
                    classname: ro.StoreHeaderAdjust,
                    appid: i,
                    trackingLocation: l,
                    announcementGID: this.state.announcementGID
                      ? this.state.announcementGID
                      : this.state.modalInitialEvent.AnnouncementGID,
                    partnerEventStore: r,
                    eventModel: this.state.modalInitialEvent,
                    closeModal: this.CloseModal
                  }),
                g.a.createElement(
                  "h2",
                  null,
                  Object(Z.f)("#EventBrowse_RecentEvents")
                ),
                g.a.createElement(
                  "div",
                  { className: ro.SectionButtonCtn },
                  this.props.bViewAllShowInfiniteScroll
                    ? g.a.createElement(
                        "div",
                        {
                          className: ro.SectionButton,
                          onClick: function() {
                            return a.ShowModal(n[0]);
                          }
                        },
                        Object(Z.f)("#EventBrowse_MoreEventsBtn")
                      )
                    : g.a.createElement(
                        Ce.c,
                        {
                          eventModel: n[0],
                          route: Ce.a.k_eViewWebSiteHub,
                          forceAnchor: !0,
                          className: ro.SectionButton
                        },
                        Object(Z.f)("#EventBrowse_MoreEventsBtn")
                      )
                ),
                g.a.createElement(
                  "div",
                  { className: ro.EventsSummariesCtn },
                  n.slice(0, e).map(function(t) {
                    var e =
                      1 === n.length && 500 < window.screen.width ? An : Ln;
                    return g.a.createElement(e, {
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
            Object(z.c)([s.a], e.prototype, "ShowModal", null),
            Object(z.c)([s.a], e.prototype, "CloseModal", null),
            e
          );
        })(g.a.Component),
        lo = (function(r) {
          function e(e) {
            var t = r.call(this, e) || this;
            t.m_rtimeOldest = 0;
            var a = B.a.GetTimeNowWithOverrideAsDate(),
              n = new Date(a.setUTCHours(0, 0, 0, 0) - 15552e6);
            return (t.m_rtimeOldest = Math.floor(n.getTime() / 1e3)), t;
          }
          return (
            Object(z.d)(e, r),
            (e.prototype.render = function() {
              var e = this.props.appid;
              return g.a.createElement(io, {
                appid: e,
                partnerEventStore: $r.a.Get(),
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
        })(g.a.Component),
        so = a("2l+k"),
        co = (function() {
          function e() {
            this.m_rgRSSEnabledClans = [];
          }
          return (
            (e.prototype.GetAllRSSEnabledClans = function() {
              return this.m_rgRSSEnabledClans;
            }),
            (e.prototype.GetTrustedEnabledClans = function(t) {
              return this.m_rgRSSEnabledClans
                .filter(function(e) {
                  return e.is_trusted_press == t;
                })
                .map(function(e) {
                  return e.clan_accoundid;
                });
            }),
            (e.Get = function() {
              return (
                e.s_Singleton || (e.s_Singleton = new e()).Init(), e.s_Singleton
              );
            }),
            (e.prototype.Init = function() {
              var e = Object(Y.f)("rssaccountinfo", "application_config");
              this.ValidateRSSAccountConfig(e) &&
                (this.m_rgRSSEnabledClans = e);
            }),
            (e.prototype.ValidateRSSAccountConfig = function(e) {
              var t = e;
              return (
                t &&
                Array.isArray(t) &&
                0 < t.length &&
                "object" == typeof t[0] &&
                "number" == typeof t[0].clan_accoundid
              );
            }),
            (e.prototype.LoadKnownAllRSSInfo = function() {
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = new Array()),
                        (a = so.a.Get()),
                        this.m_rgRSSEnabledClans.forEach(function(e) {
                          a.BHasClanIDLoaded(e.clan_accoundid) ||
                            t.push(
                              a.QueueCuratorAdminInfoLoad(e.clan_accoundid)
                            );
                        }),
                        [4, Promise.all(t)]
                      );
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.ExtractWithoutRSSAutomation = function() {
              var a = [],
                n = so.a.Get();
              return (
                this.m_rgRSSEnabledClans.forEach(function(e) {
                  var t = n.GetRSSAdminForClanAccountID(e.clan_accoundid);
                  t && !t.BIsAutomationEnabled() && a.push(e.clan_accoundid);
                }),
                a
              );
            }),
            (e.prototype.HintLoadAccounts = function() {
              return Object(z.b)(this, void 0, void 0, function() {
                return Object(z.e)(this, function(e) {
                  return [2];
                });
              });
            }),
            (e.prototype.ReindexClanEventsAndReloadAccount = function(i) {
              var l;
              return Object(z.b)(this, void 0, void 0, function() {
                var t, a, n, r, o;
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t =
                        Y.c.STORE_BASE_URL +
                        "events_admin/ajaxflushandreindexrss"),
                        (a = new FormData()).set("sessionid", Y.c.SESSIONID),
                        a.append("clanids", "" + i),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, T.a.post(t, a, { withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        (n = e.sent()),
                        1 ==
                        (null === (l = null == n ? void 0 : n.data) ||
                        void 0 === l
                          ? void 0
                          : l.success)
                          ? [2, !0]
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (r = e.sent()),
                        (o = Object(ce.a)(r)),
                        console.error(
                          "Failed to ReindexClanEventsAndReloadAccount: " +
                            o.strErrorMsg,
                          o
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, !1];
                  }
                });
              });
            }),
            e
          );
        })(),
        uo = a("wjMc"),
        po = a("d+Me"),
        mo = a("WGPV"),
        vo = a.n(mo),
        ho = Object(i.i)(function(e) {
          var t = Object(H.useState)(!0),
            a = t[0],
            n = t[1];
          if (
            (Object(H.useEffect)(function() {
              Object(z.b)(void 0, void 0, void 0, function() {
                return Object(z.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return E.a.Init(), [4, co.Get().HintLoadAccounts()];
                    case 1:
                      return e.sent(), n(!1), [2];
                  }
                });
              });
            }, []),
            a)
          )
            return g.a.createElement($.a, {
              string: Object(Z.f)("#Loading"),
              size: "medium"
            });
          var r = co.Get().GetTrustedEnabledClans(!0),
            o = co.Get().GetTrustedEnabledClans(!1);
          return g.a.createElement(
            "div",
            null,
            g.a.createElement(
              y.a,
              null,
              g.a.createElement(
                "h1",
                null,
                Object(Z.f)("#RSSModeration_Title")
              ),
              g.a.createElement(_o, null),
              g.a.createElement(yo, {
                rgClanIDs: co
                  .Get()
                  .GetAllRSSEnabledClans()
                  .map(function(e) {
                    return e.clan_accoundid;
                  })
              }),
              g.a.createElement(bo, {
                rgClanIDs: r,
                strTitle: Object(Z.f)("#RSSModeration_TrustTitle")
              }),
              g.a.createElement(bo, {
                rgClanIDs: o,
                strTitle: Object(Z.f)("#RSSModeration_RestTitle")
              })
            )
          );
        }),
        _o = Object(r.a)(function(e) {
          var t = Object(H.useState)(!1),
            a = t[0],
            n = t[1],
            r = Object(H.useState)(void 0),
            o = r[0],
            i = r[1];
          return a
            ? g.a.createElement($.a, {
                string: Object(Z.f)("#Loading"),
                size: "medium"
              })
            : void 0 !== o
            ? Boolean(0 < o.length)
              ? g.a.createElement(bo, {
                  rgClanIDs: o,
                  strTitle: Object(Z.f)("#RSSModeration_InactiveAutomation")
                })
              : g.a.createElement(
                  "div",
                  null,
                  Object(Z.f)("#RSSModreation_AllAutomationEnabled")
                )
            : g.a.createElement(
                b.d,
                {
                  onClick: function() {
                    return Object(z.b)(void 0, void 0, void 0, function() {
                      return Object(z.e)(this, function(e) {
                        switch (e.label) {
                          case 0:
                            return n(!0), [4, co.Get().LoadKnownAllRSSInfo()];
                          case 1:
                            return (
                              e.sent(),
                              i(co.Get().ExtractWithoutRSSAutomation()),
                              n(!1),
                              [2]
                            );
                        }
                      });
                    });
                  }
                },
                Object(Z.f)("#RSSModeration_FindInActive"),
                " "
              );
        }),
        bo = function(e) {
          var t = e.rgClanIDs,
            a = e.strTitle,
            n = Object(H.useState)(!1),
            r = n[0],
            o = n[1],
            i = null;
          return (
            r ||
              (i = t.map(function(e) {
                return g.a.createElement(go, { key: e, clanAccountID: e });
              })),
            g.a.createElement(
              "div",
              { className: Object(W.a)(vo.a.SectionContainer) },
              g.a.createElement(
                "h2",
                {
                  className: Object(W.a)(vo.a.ModSectionTitle),
                  onDoubleClick: function() {
                    return o(!r);
                  }
                },
                a,
                g.a.createElement("span", null, " "),
                g.a.createElement(
                  b.d,
                  {
                    className: vo.a.ResizeButton,
                    onClick: function() {
                      return o(!r);
                    }
                  },
                  r
                    ? g.a.createElement(R.G, null)
                    : g.a.createElement(R.J, null)
                )
              ),
              r &&
                g.a.createElement(
                  b.d,
                  {
                    onClick: function() {
                      return o(!1);
                    }
                  },
                  Object(Z.f)("#Sale_ShowContents")
                ),
              i
            )
          );
        },
        go = Object(r.a)(function(e) {
          var t = e.clanAccountID;
          return E.a.BHasClanInfoLoadedByAccountID(t) &&
            so.a.Get().BHasClanIDLoaded(t)
            ? g.a.createElement(Eo, {
                clanInfo: E.a.GetClanInfoByClanAccountID(t),
                rssAdminInfo: so.a.Get().GetRSSAdminForClanAccountID(t)
              })
            : g.a.createElement(fo, { clanAccountID: t });
        }),
        fo = function(e) {
          var a = e.clanAccountID;
          return g.a.createElement(
            po.a,
            {
              onEnter: function() {
                return Object(z.b)(void 0, void 0, void 0, function() {
                  var t;
                  return Object(z.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t = f.a.InitFromClanID(a)),
                          [
                            4,
                            Promise.all([
                              E.a.LoadClanInfoForClanSteamID(t),
                              so.a.Get().QueueCuratorAdminInfoLoad(a)
                            ])
                          ]
                        );
                      case 1:
                        return e.sent(), [2];
                    }
                  });
                });
              },
              topOffset: "-500px",
              bottomOffset: "-500px"
            },
            g.a.createElement(
              "div",
              { className: vo.a.TileContainer },
              g.a.createElement("div", null, Object(Z.f)("#Loading"), " - ", a)
            )
          );
        },
        Eo = function(e) {
          var t = e.clanInfo,
            a = e.rssAdminInfo,
            n = Object(H.useState)(!1),
            r = n[0],
            o = n[1],
            i = Y.c.STORE_BASE_URL + "newshub/group/" + t.clanAccountID,
            l =
              Y.c.STORE_BASE_URL +
              "curator/" +
              t.clanAccountID +
              "/admin/manage_rss",
            s = Y.c.COMMUNITY_BASE_URL + "group/" + t.clanAccountID,
            c =
              "https://steamsupport.valvesoftware.com/clan/overview/" +
              f.a.InitFromClanID(t.clanAccountID).ConvertTo64BitString(),
            u = so.a.Get().GetRSSAdminStats(t.clanAccountID);
          return g.a.createElement(
            "div",
            { className: Object(W.a)(vo.a.TileContainer) },
            g.a.createElement(
              "div",
              { className: Object(W.a)(vo.a.TileSpread) },
              g.a.createElement(
                "div",
                null,
                g.a.createElement(
                  "div",
                  null,
                  t.group_name,
                  " - ",
                  t.clanAccountID
                ),
                g.a.createElement(
                  "div",
                  null,
                  g.a.createElement(
                    "div",
                    null,
                    Object(Z.f)("#CuratorAdmin_RSSFeed"),
                    ":"
                  ),
                  g.a.createElement("a", { href: a.GetRSSUrl() }, a.GetRSSUrl())
                ),
                Boolean(u) &&
                  g.a.createElement(
                    "div",
                    null,
                    g.a.createElement(
                      "div",
                      null,
                      Object(Z.f)(
                        "#RSSModeration_TotalEvents",
                        u.total_event_count.toLocaleString()
                      )
                    ),
                    g.a.createElement(
                      "div",
                      null,
                      Object(Z.f)(
                        "#RSSModeration_RSSEvents",
                        u.rss_event_count.toLocaleString()
                      )
                    )
                  ),
                g.a.createElement(
                  b.d,
                  {
                    onClick: function() {
                      return o(!r);
                    }
                  },
                  Object(Z.f)(
                    r
                      ? "#Bbcode_Expand_Details_Expanded"
                      : "#Bbcode_Expand_Details_Collapsed"
                  )
                )
              ),
              g.a.createElement(
                "div",
                null,
                g.a.createElement(
                  "ul",
                  null,
                  g.a.createElement(
                    "li",
                    null,
                    g.a.createElement(
                      "a",
                      { href: i },
                      Object(Z.f)("#EventDisplay_NewsHubSubtitle")
                    )
                  ),
                  g.a.createElement(
                    "li",
                    null,
                    g.a.createElement(
                      "a",
                      { href: l },
                      Object(Z.f)("#CuratorAdmin_RSSFeed_title")
                    )
                  ),
                  g.a.createElement(
                    "li",
                    null,
                    g.a.createElement(
                      "a",
                      { href: s },
                      Object(Z.f)("#RSSModeration_GroupPage")
                    )
                  ),
                  g.a.createElement(
                    "li",
                    null,
                    g.a.createElement(
                      "a",
                      { href: c },
                      Object(Z.f)("#RSSModeration_SupportPage")
                    )
                  ),
                  g.a.createElement(
                    "li",
                    null,
                    g.a.createElement(yo, { rgClanIDs: [t.clanAccountID] })
                  )
                )
              ),
              g.a.createElement(
                "div",
                { className: vo.a.CreatorCtn },
                g.a.createElement(ee.a, {
                  bHideCreatorType: !0,
                  creatorID: {
                    name: null,
                    clan_account_id: t.clanAccountID,
                    type: "developer"
                  },
                  bSmallFormat: !0
                })
              )
            ),
            Boolean(r) &&
              g.a.createElement(
                g.a.Fragment,
                null,
                Boolean(a.BHasSavedRSSURL())
                  ? g.a.createElement(uo.a, {
                      strRssURL: a.GetRSSUrl(),
                      admin: a
                    })
                  : g.a.createElement(
                      "div",
                      null,
                      Object(Z.f)("#RSSModeration_NoRSSFeed")
                    )
              )
          );
        },
        yo = function(t) {
          return g.a.createElement(
            I.a,
            {
              toolTipContent: Object(Z.f)(
                "#RSSModeration_ReindexAndReload_ttip"
              )
            },
            g.a.createElement(
              b.d,
              {
                onClick: function(e) {
                  Object(j.d)(
                    g.a.createElement(So, Object(z.a)({}, t)),
                    Object(q.m)(e)
                  );
                }
              },
              Object(Z.f)("#RSSModeration_ReindexAndReload")
            )
          );
        },
        So = function(r) {
          function e() {
            return r.closeModal && r.closeModal();
          }
          var t = Object(H.useState)(void 0),
            a = t[0],
            o = t[1],
            n = Object(H.useState)(!1),
            i = n[0],
            l = n[1],
            s = Object(H.useState)(void 0),
            c = s[0],
            u = s[1];
          return g.a.createElement(
            X.g,
            { onEscKeypress: e },
            g.a.createElement(
              b.f,
              null,
              g.a.createElement(
                b.j,
                null,
                " ",
                Object(Z.f)("#RSSModeration_ReindexAndReload"),
                " "
              ),
              g.a.createElement(
                b.b,
                null,
                g.a.createElement(
                  b.c,
                  null,
                  void 0 === a
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(
                          "span",
                          null,
                          Object(Z.f)(
                            "#RSSModeration_Reindex_Verify",
                            r.rgClanIDs.length
                          )
                        ),
                        g.a.createElement(
                          b.p,
                          {
                            onClick: function() {
                              return Object(z.b)(
                                void 0,
                                void 0,
                                void 0,
                                function() {
                                  var t, a, n;
                                  return Object(z.e)(this, function(e) {
                                    switch (e.label) {
                                      case 0:
                                        o((t = 0)), (a = 0), (e.label = 1);
                                      case 1:
                                        return a < r.rgClanIDs.length
                                          ? ((n = r.rgClanIDs[a]),
                                            [
                                              4,
                                              co
                                                .Get()
                                                .ReindexClanEventsAndReloadAccount(
                                                  n
                                                )
                                            ])
                                          : [3, 4];
                                      case 2:
                                        if (!e.sent())
                                          return (
                                            u(
                                              Object(Z.f)(
                                                "#Error_Generic_Label"
                                              )
                                            ),
                                            [3, 4]
                                          );
                                        o((t += 1)), (e.label = 3);
                                      case 3:
                                        return ++a, [3, 1];
                                      case 4:
                                        return l(!0), [2];
                                    }
                                  });
                                }
                              );
                            }
                          },
                          Object(Z.f)("#Button_Continue")
                        )
                      )
                    : g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(
                          "span",
                          null,
                          Object(Z.f)(
                            "#RSSModeration_Reindex_Action",
                            a,
                            r.rgClanIDs.length
                          )
                        ),
                        i
                          ? g.a.createElement(
                              "span",
                              null,
                              Object(Z.f)(
                                "#EventEditor_ImportFromHTML_ConvertFinished"
                              )
                            )
                          : g.a.createElement($.a, {
                              size: "small",
                              string: Object(Z.f)("#Updating")
                            })
                      ),
                  Boolean(c) && g.a.createElement("span", null, c, " ")
                ),
                g.a.createElement(
                  b.i,
                  null,
                  g.a.createElement(
                    b.d,
                    { onClick: e },
                    Object(Z.f)(i ? "#Button_OK" : "#Button_Cancel")
                  )
                )
              )
            )
          );
        };
      ne.a.Init(new no.a(Y.c.WEBAPI_BASE_URL)), M.c.Init();
      function Co(e) {
        var t = e.children,
          a = Object(H.useState)(U.a.IsInitialized()),
          n = a[0],
          r = a[1];
        return n
          ? g.a.createElement(g.a.Fragment, null, t)
          : (U.a.InitGlobal().then(function() {
              return r(!0);
            }),
            null);
      }
      function Oo(t) {
        return function(e) {
          return g.a.createElement(Co, null, g.a.createElement(t, e));
        };
      }
      var wo = Oo(Wa),
        To = Oo(on),
        Io = Oo(Dr),
        jo = Oo(va),
        ko = Oo(ao),
        Do = Oo(lo),
        Go = Oo(an),
        Lo = Oo(ho);
    },
    ZCZY: function(e, t, a) {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_3jswb" };
    },
    bUNj: function(e, t, a) {},
    dgee: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
    },
    hmtA: function(e, t, a) {},
    i6tc: function(e, t, a) {
      e.exports = {
        GameTitleContainer: "eventcalendartile_GameTitleContainer_WHJ_W",
        AppIcon: "eventcalendartile_AppIcon_3gwk6",
        TileTextAppName: "eventcalendartile_TileTextAppName_71phF",
        EnableHovers: "eventcalendartile_EnableHovers_2BniJ",
        TileContainer: "eventcalendartile_TileContainer_1E3An",
        CoverImageCtn: "eventcalendartile_CoverImageCtn_3HF9t",
        GameShortDescription: "eventcalendartile_GameShortDescription_3Se1T",
        LiveText: "eventcalendartile_LiveText_RNDf0",
        LiveNow: "eventcalendartile_LiveNow_EVDkY",
        FutureDateText: "eventcalendartile_FutureDateText_2xdhM",
        PastDateText: "eventcalendartile_PastDateText_4-fqV",
        GameSource: "eventcalendartile_GameSource_vfv1Q",
        SourceList: "eventcalendartile_SourceList_3BIx7",
        Source: "eventcalendartile_Source_2lYFq",
        SourceRecommended: "eventcalendartile_SourceRecommended_1yaRL",
        DateAndSourceLine: "eventcalendartile_DateAndSourceLine_2xxMB",
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
        LoadingTile: "eventcalendartile_LoadingTile_24QfL",
        CarouselMode: "eventcalendartile_CarouselMode_144gh",
        UpcomingMode: "eventcalendartile_UpcomingMode_2vzY3",
        TileVideoIcon: "eventcalendartile_TileVideoIcon_aK0jl",
        DateAndTime: "eventcalendartile_DateAndTime_1gEM9",
        HasVideo: "eventcalendartile_HasVideo_qbgBA",
        SubTitleShown: "eventcalendartile_SubTitleShown_5C13z",
        VideoPlayerReady: "eventcalendartile_VideoPlayerReady_1onQj"
      };
    },
    sGzE: function(e, t, a) {
      e.exports = {
        StatsTitle: "partnereventstats_StatsTitle_3YLaB",
        StatsCtnTitle: "partnereventstats_StatsCtnTitle_1LlRF",
        SmallStatsMode: "partnereventstats_SmallStatsMode_2A2-p",
        StatsCtn: "partnereventstats_StatsCtn_hWCs4",
        StatsLeftSection: "partnereventstats_StatsLeftSection_3L-uh",
        StatsRightSection: "partnereventstats_StatsRightSection_1yibD",
        ModerationWarning: "partnereventstats_ModerationWarning_1aIU0",
        DisabledStats: "partnereventstats_DisabledStats_2Zp-j"
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
    },
    zrk3: function(e, t, a) {
      e.exports = {
        ModeratorAuditActionCtn:
          "eventmoderationaudit_ModeratorAuditActionCtn_f6z__"
      };
    }
  }
]);

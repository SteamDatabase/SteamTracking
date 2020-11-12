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
        L = a.n(n);
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
            var t = L.a.TAU,
              a = ZdogSpookyHouse.color.light,
              n = new L.a.Shape({
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
                a = L.a.TAU,
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
              new L.a.Shape({
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
                grill: new L.a.Vector({ x: -5, y: -1, z: c }),
                hood: new L.a.Vector({ x: -4, y: s, z: c }),
                wipers: new L.a.Vector({ x: -2, y: s, z: c }),
                windshield: new L.a.Vector({ x: -1, y: -4.5, z: 1.5 }),
                roof: new L.a.Vector({ x: 2, y: -4.5, z: 1.5 }),
                trunk: new L.a.Vector({ x: 4, y: s, z: c }),
                bumper: new L.a.Vector({ x: 5, y: -1, z: c })
              },
              d = {};
            for (var p in u) {
              var m = u[p];
              d[p] = m.copy().multiply({ z: -1 });
            }
            var h = new L.a.Anchor({ addTo: e.addTo }),
              v = new L.a.Group({
                addTo: h,
                translate: { z: n, y: -6 },
                scale: 1.2,
                updateSort: !0
              }),
              _ = new L.a.Shape({
                addTo: v,
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
            var g = new L.a.Vector({ x: -3.5, z: c, y: -1 }),
              f = new L.a.Ellipse({
                addTo: v,
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
                  (h.rotate.y = L.a.easeInOut((e / 4) % 1) * a + (3 * a) / 8),
                    (v.rotate.x = 0.1 * Math.sin(e * a * 2)),
                    (v.translate.y = 2 * Math.sin(e * a * 1.5) - 6);
                }
              }
            );
          }),
          (ZdogSpookyHouse.addCats = function(e) {
            var t = L.a.TAU,
              a = ZdogSpookyHouse.color,
              n = 1.1,
              r = new L.a.Anchor({
                addTo: e.addTo,
                translate: { z: -22, x: -28, y: -2 },
                scale: n,
                rotate: { y: t / 8 }
              });
            new L.a.Cone({
              addTo: r,
              diameter: 1,
              length: 3,
              rotate: { x: t / 4 },
              stroke: 4.4,
              color: a.deep
            });
            var o = new L.a.Shape({
              addTo: r,
              translate: { y: -4 },
              stroke: 5.5,
              color: a.deep
            });
            new L.a.Shape({
              addTo: o,
              translate: { x: -1, z: 1 },
              stroke: 0.9 * n,
              color: a.highlight
            }).copy({ translate: { x: 1, z: 1 } });
            var i = { x: -1, y: -1 },
              l = { x: 1, y: 1, z: -1 },
              s = new L.a.Anchor({
                addTo: o,
                scale: new L.a.Vector({ x: 1, y: 1, z: 1.25 })
              });
            new L.a.Shape({
              addTo: s,
              path: [{ x: -1, y: 1 }, i, l],
              translate: { x: -0.96, y: -1.5, z: 0 },
              stroke: 0.66,
              fill: !0,
              color: a.deep
            }).copy({ path: [i, { x: 1, y: 1 }, l] }),
              s.copyGraph({ scale: s.scale.copy().multiply({ x: -1 }) }),
              new L.a.Shape({
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
              var t = L.a.TAU,
                a = ZdogSpookyHouse.color,
                r = new L.a.Anchor(e),
                o = (4 * t) / 8,
                i = [],
                n = 0;
              n < 74;
              n++
            ) {
              var l = n / 74,
                s = l * o,
                c = new L.a.Shape({
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
              new L.a.Shape({
                addTo: i[0],
                translate: { x: -10, z: 8 },
                color: a.deep,
                stroke: 3.5
              }).copy({ translate: { x: -10, z: -8 } }),
              new L.a.Ellipse({
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
            var i = L.a.TAU,
              l = ZdogSpookyHouse.color,
              s = [],
              c = [];
            function t(e) {
              s.push(e);
            }
            function a(e) {
              c.push(e);
            }
            var n = new L.a.Anchor({
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
              u = new L.a.Group({ addTo: n, translate: { z: 24 } });
            a(new L.a.Rect(Object.assign({}, o, { addTo: u }))),
              new L.a.Rect({
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
              m = new L.a.Rect(
                Object.assign({}, d, { translate: { x: 6, z: 18 } })
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
            var v = new L.a.Anchor({ addTo: n, translate: { y: -36, z: 18 } }),
              _ = new L.a.Shape({
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
              new L.a.Rect({
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
              g = new L.a.Shape({
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
            new L.a.Shape({
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
              new L.a.Rect({
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
              new L.a.Rect({
                addTo: n,
                width: 12,
                height: 6,
                translate: { x: 0, y: -33, z: -12 },
                rotate: { y: i / 4 },
                stroke: e.stroke,
                fill: !0,
                color: l.medium
              }),
              new L.a.Shape({
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
              f.copy({
                height: 6,
                width: 12,
                translate: { x: -6, y: -33, z: -6 }
              }),
              new L.a.Rect({
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
            var E = new L.a.Anchor({
                addTo: n,
                translate: { x: 18, y: -18, z: -12 }
              }),
              y = new L.a.Group({ addTo: E });
            new L.a.Cylinder({
              addTo: y,
              diameter: 12,
              length: 24,
              color: l.medium,
              backface: l.deep,
              rotate: { x: i / 4 },
              stroke: !1
            }),
              new L.a.Cone({
                addTo: E,
                diameter: 16,
                length: 16,
                translate: { y: -12 },
                rotate: { x: i / 4 },
                color: l.deep,
                stroke: !1
              }),
              new L.a.Rect({
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
            var S = new L.a.Shape({
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
            var C = new L.a.Shape({
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
            var O = new L.a.Anchor({ addTo: n, translate: { y: -30 } }),
              w = new L.a.Rect({
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
            var T = new L.a.Anchor({ addTo: n, translate: { y: 2 } }),
              I = new L.a.Anchor({ addTo: T, translate: { x: 9, z: 30 } });
            new L.a.Shape({
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
            var j = new L.a.Rect({
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
            var D = new L.a.Shape({
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
              new L.a.Rect({
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
              a = L.a.TAU,
              n = [{ y: 0 }, { y: 1 }],
              r = new L.a.Anchor({
                addTo: e.addTo,
                translate: e.translate,
                rotate: e.rotate
              }),
              o = t.medium,
              i = new L.a.Anchor({ addTo: r, rotate: { z: 0.1 } });
            new L.a.Rect({
              addTo: i,
              width: 9,
              height: 4,
              rotate: { x: a / 4 },
              fill: !0,
              color: o,
              stroke: 1.5
            });
            var l = new L.a.Shape({
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
            var s = new L.a.Anchor({ addTo: i, translate: { y: -8 } }),
              c = new L.a.Group({ addTo: s, rotate: { y: a / 2 } }),
              u = new L.a.Rect({
                addTo: c,
                width: 10,
                height: 5,
                color: t.deep,
                fill: !0,
                stroke: 1.5
              });
            new L.a.Rect({
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
              new L.a.Shape({
                addTo: s,
                path: n,
                scale: 2,
                translate: { y: 3.1 },
                stroke: 1.5,
                color: t.deep
              });
            var d = new L.a.Anchor({
              addTo: r,
              translate: { z: -15 },
              rotate: { z: -0.1 }
            });
            new L.a.Rect({
              addTo: d,
              width: 3,
              height: 3,
              rotate: { x: a / 4 },
              fill: !0,
              stroke: 1.5,
              color: o
            }),
              new L.a.Shape({
                addTo: d,
                path: n,
                scale: 3,
                stroke: 1.5,
                color: o
              });
            var p = new L.a.Shape({
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
              new L.a.Rect({
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
              h = new L.a.Anchor({
                addTo: r,
                translate: { z: -13, y: -6 },
                scale: 0.6
              }),
              v = new L.a.Shape({
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
            new L.a.Shape({
              addTo: v,
              path: n,
              scale: -1,
              translate: { y: -5.5 },
              stroke: 2.5,
              color: m
            });
            var _ = new L.a.Shape({
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
            var b = new L.a.Shape({
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
                    (d.translate.y = 2 * Math.sin(7 * e)),
                    (h.translate.y = 2 * Math.sin(8 * e) - 6);
                }
              }
            );
          }),
          (ZdogSpookyHouse.getConeTree = function(e) {
            L.a.extend(e, {
              rotate: { x: L.a.TAU / 4 },
              stroke: !1,
              color: ZdogSpookyHouse.color.deep
            });
            var t = new L.a.Cone(e);
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
            var t = L.a.TAU,
              a = ZdogSpookyHouse.color,
              n = new L.a.Anchor({ addTo: e.addTo, translate: e.translate });
            ZdogSpookyHouse.getPyramid({
              addTo: n,
              scale: { x: 9, y: -9, z: 9 },
              color: a.deep,
              snub: e.snub
            }),
              new L.a.Rect({
                width: 18,
                height: 18,
                addTo: n,
                rotate: { x: t / 4 },
                color: a.dark,
                stroke: 4,
                fill: !0
              });
            var r = new L.a.Rect({
              addTo: n,
              width: 4,
              height: 4,
              translate: { x: -4, y: -6 },
              rotate: { y: t / 4 },
              stroke: 3,
              color: a.medium
            });
            return (
              new L.a.Ellipse({
                addTo: r,
                diameter: 4,
                translate: { y: -2 },
                stroke: 3,
                color: a.medium
              }),
              n
            );
          }),
          (r = L.a.TAU),
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
            L.a.extend(e, {
              path: [{ y: 0 }, { y: t - 26 }],
              stroke: 0.5,
              color: o.deep
            });
            var a = new L.a.Shape(e),
              n = new L.a.Anchor({
                addTo: a,
                translate: { y: t - 14 },
                rotate: { y: -r / 8 }
              });
            return (
              new L.a.Shape({
                addTo: n,
                path: i,
                closed: !1,
                stroke: 0.6,
                color: o.deep
              }).copyGraph({ rotate: { y: r / 4 } }),
              a
            );
          }),
          (l = L.a.TAU),
          (e = Math.sqrt(2)),
          (s = [{ x: -1 }, { x: 1 }, { y: -e }]),
          (c = [
            { x: -1 },
            { x: 1 },
            { x: 0.5, y: -0.5 * e },
            { x: -0.5, y: -0.5 * e }
          ]),
          (ZdogSpookyHouse.getPyramid = function(e) {
            var t = new L.a.Anchor({
                addTo: e.addTo,
                translate: e.translate,
                scale: e.scale,
                rotate: e.rotate
              }),
              a = e.stroke || 4,
              n = new L.a.Anchor({ addTo: t });
            return (
              new L.a.Shape({
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
                new L.a.Rect({
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
                    var e = new L.a.Group(a.wall),
                      t = u.reduce(function(e, t) {
                        return (e[t] = a.wall[t]), e;
                      }, {});
                    t.addTo = e;
                    var n = new L.a.Rect(t);
                    a.wallRectCallback && a.wallRectCallback(n);
                    return (
                      new L.a.Rect({
                        addTo: e,
                        width: 8,
                        height: 6,
                        translate: { y: -1 },
                        color: ZdogSpookyHouse.color.dark,
                        fill: !0,
                        stroke: !1,
                        backface: !1
                      }),
                      new L.a.Rect({
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
                : ((t = new L.a.Rect(e.wall)),
                  e.wallRectCallback && e.wallRectCallback(t)),
              t
            );
          }),
          (ZdogSpookyHouse.init = function(e) {
            var r = L.a.TAU,
              t = ZdogSpookyHouse.color,
              a = Math.floor(e.width / 135) / 2,
              o = new L.a.Illustration({
                element: e,
                zoom: a,
                rotate: { y: r / 8 },
                dragRotate: !0,
                onDragStart: function() {
                  ZdogSpookyHouse.wobbling = !1;
                }
              }),
              n = new L.a.Anchor({
                addTo: o,
                translate: { y: ZdogSpookyHouse.sceneY }
              }),
              i = new L.a.Anchor({ addTo: n });
            new L.a.Rect({
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
            var l = new L.a.Anchor({
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
            var s = new L.a.Group({
                addTo: n,
                translate: { x: 18, z: 80 },
                scale: ZdogSpookyHouse.hillScale,
                updateSort: !0
              }),
              c = new L.a.Anchor({ addTo: s, scale: { x: 24, y: 32, z: 24 } });
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
              p = new L.a.Group({
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
            var m = new L.a.Group({
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
            var h = new L.a.Group({
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
            var b = new L.a.Anchor({
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
              f = new L.a.Anchor({ addTo: n, translate: { y: -94 } }),
              E = new L.a.Shape({
                addTo: f,
                translate: { z: -64 },
                stroke: 32,
                scale: 2,
                color: g
              });
            new L.a.Shape({
              addTo: E,
              translate: { x: -9, y: 4, z: 4 },
              stroke: 16,
              color: g
            }).copy({ translate: { x: 9, y: 5, z: 6 }, stroke: 20 });
            var y = new L.a.RoundedRect({
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
            var S = new L.a.Anchor({ addTo: n, translate: { y: -60 } }),
              C = new L.a.Anchor({ addTo: S, translate: { z: 88 } });
            new L.a.Hemisphere({
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
                ((t = L.a.easeInOut(n % 1) * r),
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
                (h.translate.y = -4 * Math.sin((n / 2.5) * r)),
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
        strLogInBannerSmallHeight: "100px",
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
        LogInFeedRow: "eventcalendar_LogInFeedRow_nydHE",
        LogInSmallMode: "eventcalendar_LogInSmallMode_21ANY",
        LogInFeedText: "eventcalendar_LogInFeedText_3HgPB",
        LogInButton: "eventcalendar_LogInButton_35WTO",
        LogInFeedTitle: "eventcalendar_LogInFeedTitle_cmQc6"
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
          return lo;
        }),
        a.d(t, "EventBackfillLanding", function() {
          return so;
        }),
        a.d(t, "EventSaleDisplay", function() {
          return co;
        }),
        a.d(t, "EventCalendar", function() {
          return uo;
        }),
        a.d(t, "EventDetailView", function() {
          return po;
        }),
        a.d(t, "Events", function() {
          return mo;
        }),
        a.d(t, "EventSteamGameFestivalDebug", function() {
          return ho;
        }),
        a.d(t, "RssEnabledAccountDashboard", function() {
          return vo;
        });
      var z = a("q1tI"),
        _ = a.n(z),
        U = a("mrSG"),
        n = a("vDqi"),
        y = a.n(n),
        m = a("2vnA"),
        r = a("TyAF"),
        o = a("Gp1o"),
        i = a("Ty5D"),
        G = a("mgoM"),
        b = a("kyHq"),
        u = a("5bld"),
        g = a("kLLr"),
        f = a("ir+G"),
        N = a("U+Q5"),
        E = a("TQGK"),
        A = a("WF3T"),
        B = a("KEpR"),
        M = a("5izx"),
        W = a("9w6b"),
        d = a("Dhs6"),
        D = a("6oCP"),
        S = a("IjL/"),
        c = a("55Ip"),
        C = a("Mgs7"),
        R = a("6Y59"),
        x = a("5E+2"),
        O = a("+d9t"),
        h = a("r64O"),
        V = a("exH9"),
        Z = a("X3Ds"),
        q = a("TLQK"),
        s = a("bxiW"),
        Y = a("lkRc"),
        l = a("ka0M"),
        L = a("ee7K"),
        p = (function() {
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
                        q.b
                          .GetLanguageListForRealms([b.e.k_ESteamRealmGlobal])
                          .forEach(function(e) {
                            return r.m_mapLangToNewsCurators.set(e, []);
                          }),
                        (t = Y.c.STORE_BASE_URL + "events/ajaxgetnewscurators"),
                        (a = { origin: self.origin }),
                        [4, y.a.get(t, { params: a })]
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
            Object(U.c)([m.C], e.prototype, "m_mapNewsCurators", void 0),
            Object(U.c)([m.C], e.prototype, "m_bIsLoadComplete", void 0),
            Object(U.c)([m.C], e.prototype, "m_mapLangToNewsCurators", void 0),
            Object(U.c)([m.n], e.prototype, "allNewsCurators", null),
            Object(U.c)([m.k], e.prototype, "HandleCuratorResponse", null),
            e
          );
        })(),
        v = a("qiKp"),
        w = a("bS9Q"),
        T = a("I2Hi"),
        I = a.n(T);
      function j(e) {
        var t = new Set();
        return (
          (0 <= e.indexOf("games") || 0 <= e.indexOf("dlc")) && t.add("apps"),
          0 <= e.indexOf("curators") && t.add("curators"),
          t
        );
      }
      var k,
        F,
        P = (function(t) {
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
              (e.m_timerForChange = new v.b()),
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
                    (t = j(this.props.rgCorporaToSearch)).has("apps") &&
                      this.GetAppSuggestionsFromServer(a),
                    t.has("curators") && this.GetCuratorSuggestions(a),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.GetCuratorSuggestions = function(u) {
              var d;
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c;
                return Object(U.e)(this, function(e) {
                  for (
                    t = p.Get().allNewsCurators, a = [], n = 0, r = t;
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
                      if (L.a.BIsIgnoringCurator(i.clanAccountID)) continue;
                      (s = L.a.BIsFollowingCurator(i.clanAccountID)),
                        (c = z.createElement(H, {
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
                          cc: Y.c.COUNTRY,
                          l: Y.c.LANGUAGE,
                          realm: b.e.k_ESteamRealmGlobal,
                          origin: self.origin,
                          f: "jsonfull",
                          term: s.replace(" ", "+"),
                          require_type: a.join(","),
                          excluded_tags: L.a.GetExcludedTagsSortedByID(),
                          excluded_content_descriptors: L.a.GetExcludedContentDescriptor()
                        }),
                        (r = Y.c.STORE_BASE_URL + "search/suggest"),
                        [4, y.a.get(r, { params: n, withCredentials: !0 })]
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
                              var n = z.createElement(H, {
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
                      : (Array.from(j(this.props.rgCorporaToSearch)).forEach(
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
                m = 1 < j(r).size,
                h =
                  m &&
                  d &&
                  Object(q.f)(
                    0 <= r.indexOf("dlc")
                      ? "#EventCalendar_SearchResultsHeader_GameAndDLCSection"
                      : "#EventCalendar_SearchResultsHeader_GameSection"
                  ),
                v = Array.from(j(r)).some(function(e) {
                  return (
                    t.m_nHighestSentRequestID >
                    t.m_mapHighestReceivedRequestIDFromBackEnd.get(e)
                  );
                }),
                _ = !p && !d && !v;
              return z.createElement(
                "div",
                { className: I.a.SuggestContainer },
                z.createElement(C.k, {
                  type: "text",
                  label: a,
                  onChange: this.UpdateSuggestions,
                  bAlwaysShowClearAction: u,
                  focusOnMount: n
                }),
                u &&
                  z.createElement(
                    "div",
                    { className: Object(V.a)(I.a.Results, o) },
                    d &&
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
                            Object(q.f)(
                              "#EventCalendar_SearchResultsHeader_CuratorSection"
                            )
                          ),
                        c
                      ),
                    _ &&
                      z.createElement(
                        "div",
                        { className: I.a.EmptyResults, key: "empty-results" },
                        Object(q.f)("#EventCalendar_GameSearch_NoneFound")
                      )
                  )
              );
            }),
            Object(U.c)([s.a], e.prototype, "UpdateSuggestions", null),
            e
          );
        })(z.Component),
        H = function(e) {
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
                Object(q.f)("#EventCalendar_FollowingCurator")
              )
          );
        },
        Q = a("fpVW"),
        J = a.n(Q),
        K = a("Jqb/"),
        X = a("0OaU"),
        $ = a("BRUS"),
        ee = a("+g3F"),
        te = a.n(ee),
        ae = a("qD+2"),
        ne = a("UWWC"),
        re = a("yJqL"),
        oe = a("JJA/"),
        ie = a("xnZ7"),
        le = a.n(ie),
        se = a("bDQf"),
        ce = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoading: !1, eventModel: e.props.eventModel }),
              (e.m_refParent = z.createRef()),
              (e.m_cancelSignal = y.a.CancelToken.source()),
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
                e.classList.add(oe.BodyNoScroll);
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.remove(oe.BodyNoScroll);
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
                        var t = Object(se.a)(e);
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
                  K.h,
                  null,
                  z.createElement(
                    "div",
                    { className: le.a.FlexCenter, style: { height: "400px" } },
                    z.createElement(X.a, null)
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
                  z.createElement(re.a, {
                    initialEvent: this.state.eventModel,
                    partnerEventStore: a,
                    emoticonStore: ne.b,
                    appInfoStore: ae.a,
                    closeModal: !n && this.props.closeModal,
                    showAppHeader: this.props.showAppHeader
                  })
                );
                return n ? r : z.createElement(K.h, { className: t }, r);
              }
              return null;
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        ue = a("uuth"),
        de = a("5eAM"),
        pe = a("O0NR"),
        me = a("mB/g"),
        he = a("YLyR"),
        ve = a("02Wr"),
        _e = a("Kw0F");
      ((F = k = k || {})[(F.NotLoaded = 0)] = "NotLoaded"),
        (F[(F.Loading = 1)] = "Loading"),
        (F[(F.Loaded = 2)] = "Loaded");
      var be = k.NotLoaded,
        ge = [];
      function fe(t) {
        var e, a;
        be != k.Loaded
          ? (be == k.NotLoaded &&
              (((e = document.createElement("script")).src =
                "https://www.youtube.com/iframe_api"),
              (a = document.getElementsByTagName(
                "script"
              )[0]).parentNode.insertBefore(e, a),
              (window.onYouTubeIframeAPIReady = Ee)),
            ge.findIndex(function(e) {
              return t == e;
            }) < 0 && ge.push(t))
          : t();
      }
      function Ee() {
        be = k.Loaded;
        for (var e = 0, t = ge; e < t.length; e++) {
          (0, t[e])();
        }
        ge = [];
      }
      function ye(e) {
        var t = ["maxresdefault", "mqdefault", "default"],
          a = z.useState(0),
          n = a[0],
          r = a[1];
        z.useEffect(
          function() {
            return r(0);
          },
          [e.video]
        );
        var o = z.useRef();
        if (e.altImgWithFallback && 0 < e.altImgWithFallback.length)
          return z.createElement(ve.b, {
            className: e.className,
            srcs: e.altImgWithFallback
          });
        if (e.altImg)
          return z.createElement("img", {
            src: e.altImg,
            className: e.className
          });
        function i() {
          n + 1 < t.length && r(n + 1);
        }
        var l = "https://img.youtube.com/vi/" + e.video + "/" + t[n] + ".jpg";
        return z.createElement("img", {
          ref: o,
          onLoad: function() {
            o.current && o.current.naturalHeight < 91 && i();
          },
          onError: i,
          src: l,
          className: e.className
        });
      }
      function Se(t) {
        var e = z.useState(!1),
          a = e[0],
          n = e[1];
        return (
          z.useEffect(function() {
            t.preloadYoutubeScripts && fe(function() {});
          }, []),
          a
            ? z.createElement(Ce, Object(U.a)({}, t))
            : z.createElement(
                "div",
                {
                  className: Object(V.a)(
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
                z.createElement(ye, {
                  className: "YoutubePreviewImage",
                  altImgWithFallback: t.altImgWithFallback,
                  altImg: t.altImg,
                  video: t.video
                }),
                z.createElement(
                  "div",
                  { className: "YoutubePreviewPlay" },
                  z.createElement(R.db, null)
                ),
                z.createElement(
                  "div",
                  { className: "VideoHintText" },
                  Object(q.f)("#EventCalendar_WatchYouTubeVideo")
                )
              )
        );
      }
      var Ce = (function(a) {
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
                _e.c(ge, e);
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
                this.m_playerContainer && fe(this.OnYoutubeScriptsReady));
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
                z.createElement(X.a, { className: "YoutubePlayerThrobber" })
              );
              return this.props.autopause
                ? z.createElement(ue.a, { onLeave: this.OnPlayerLeftView }, e)
                : e;
            }),
            (n.s_nPlayerIndex = 0),
            Object(U.c)([s.a], n.prototype, "BindPlayerContainer", null),
            Object(U.c)([s.a], n.prototype, "OnYoutubeScriptsReady", null),
            Object(U.c)([s.a], n.prototype, "CreatePlayer", null),
            Object(U.c)([s.a], n.prototype, "OnPlayerReady", null),
            Object(U.c)([s.a], n.prototype, "OnPlayerStateChange", null),
            Object(U.c)([s.a], n.prototype, "OnError", null),
            Object(U.c)([s.a], n.prototype, "OnPlayerLeftView", null),
            n
          );
        })(z.Component),
        Oe = a("N0Ye"),
        we = a("ylkE"),
        Te = a("i6tc"),
        Ie = a.n(Te),
        je = a("TtDX"),
        ke = a("y+6m"),
        De = (function(e) {
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
                  K.c,
                  {
                    strTitle: Object(q.f)("#EventCalendar_MuteApp_Title", a),
                    strDescription: Object(q.f)(
                      "#EventCalendar_MuteApp_details",
                      a
                    ),
                    onOK: function() {
                      return Object(A.a)().UpdateEventBlockFromCalendarEvent(
                        t,
                        !1
                      );
                    }
                  },
                  z.createElement(
                    "a",
                    {
                      href: Y.c.STORE_BASE_URL + "account/emailoptout/app",
                      target: Y.c.IN_CLIENT ? void 0 : "_blank"
                    },
                    Object(q.f)("#EventCalendar_ManageMutedSources")
                  )
                ),
                Object(Z.m)(e)
              );
            }),
            (t.prototype.OnUnMuteButton = function() {
              var e = this.props.calendarEvent;
              Object(A.a)().UpdateEventBlockFromCalendarEvent(e, !0);
            }),
            (t.prototype.HideAllEventsOfMyType = function() {
              var e = this.props.eventModel,
                t = this.GetVisibilityStore().MapClanEventTypeToGroup(
                  e.GetEventType()
                );
              this.GetVisibilityStore().SetEventTypeGroupAllowed(t, !1);
            }),
            (t.prototype.GetVisibilityStore = function() {
              return Object(A.a)().m_visibilityStore;
            }),
            (t.prototype.AddContextMenuForSource = function(e, t, a, n) {
              var r = this;
              void 0 === n && (n = !0),
                this.GetVisibilityStore().BIsGameSourceAllowed(t) &&
                  (n &&
                    e.push(
                      z.createElement(
                        ke.d,
                        {
                          key: "item-source-" + a + "-" + t,
                          disabled: !0,
                          onSelected: function() {}
                        },
                        Object(q.f)("#EventCalender_Reason_" + t)
                      )
                    ),
                  e.push(
                    z.createElement(
                      ke.d,
                      {
                        key: "item-hidesource-" + a + "-" + t,
                        onSelected: function() {
                          r.GetVisibilityStore().SetGameSourceAllowed(t, !1);
                        }
                      },
                      Object(q.f)("#EventCalender_Hide_Reason_" + t)
                    )
                  ));
            }),
            (t.prototype.RemoveFromWishlist = function() {
              L.a.UpdateGameWishlist(this.props.eventModel.appid, !1);
            }),
            (t.prototype.AddToWishlist = function() {
              L.a.UpdateGameWishlist(this.props.eventModel.appid, !0);
            }),
            (t.prototype.GotoGameOrClanHub = function() {
              var e = this.props.eventModel,
                t = Object(me.d)(e, me.a.k_eStoreNewsHub, "allowRelative");
              this.props.history.push(t);
            }),
            (t.prototype.ToggleFollowCurator = function() {
              Object($.e)(this.props.eventModel.clanSteamID.GetAccountID());
            }),
            (t.prototype.CreateContextMenu = function(e) {
              var t,
                a = this.props,
                n = a.eventModel,
                r = a.calendarEvent,
                o = [],
                i = r.GetSource(),
                l = r.unique_id,
                s = Y.c.EREALM === b.e.k_ESteamRealmChina,
                c = Object(A.a)();
              c.BIsGlobalCalendar() &&
                (i &&
                  i & u.a.k_eLibrary &&
                  (this.GetVisibilityStore().BIsGameSourceAllowed(
                    B.c.k_ERecent
                  ) && r.appInfo
                    ? (o.push(
                        z.createElement(
                          ke.d,
                          {
                            key: "item-source-" + l + "-lastplayed",
                            disabled: !0,
                            onSelected: function() {}
                          },
                          Object(q.f)(
                            "#EventCalender_LastPlayed",
                            Object(q.q)(
                              M.a.GetTimeNowWithOverride() -
                                r.appInfo.last_played
                            )
                          )
                        )
                      ),
                      this.AddContextMenuForSource(o, B.c.k_ERecent, l, !1))
                    : this.AddContextMenuForSource(o, B.c.k_ELibrary, l)),
                i &&
                  i & u.a.k_eWishlist &&
                  this.AddContextMenuForSource(o, B.c.k_EWishlist, l),
                i &&
                  i & u.a.k_eFollowing &&
                  this.AddContextMenuForSource(o, B.c.k_EFollowing, l),
                !s &&
                  i &&
                  i & u.a.k_eCurator &&
                  this.AddContextMenuForSource(o, B.c.k_ECurator, l),
                i &&
                  i & u.a.k_eRecommended &&
                  this.AddContextMenuForSource(o, B.c.k_ERecommended, l),
                i &&
                  i & u.a.k_eSteam &&
                  this.AddContextMenuForSource(o, B.c.k_ESteam, l),
                i &&
                  i & u.a.k_eFeatured &&
                  this.AddContextMenuForSource(o, B.c.k_EFeatured, l)),
                o.push(
                  z.createElement(
                    ke.d,
                    {
                      key: n.GID + "hidetype",
                      onSelected: this.HideAllEventsOfMyType
                    },
                    Object(q.f)(
                      "#EVentCalendar_Hide_EventType",
                      Object(q.f)(
                        "#EventCalendar_EventTypeGroup_" +
                          this.GetVisibilityStore().MapClanEventTypeToGroup(
                            n.GetEventType()
                          )
                      )
                    )
                  )
                ),
                Y.i.logged_in &&
                  (d.a.Get().BIsEventBlocked(r)
                    ? o.push(
                        z.createElement(
                          ke.d,
                          {
                            key: n.GID + "unmuteapp",
                            onSelected: this.OnUnMuteButton
                          },
                          z.createElement(
                            x.a,
                            {
                              toolTipContent: Object(q.f)(
                                "#EventCalendar_UnMuteApp_ttip"
                              )
                            },
                            Object(q.f)(
                              "#EventCalendar_UnMuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      )
                    : o.push(
                        z.createElement(
                          ke.d,
                          {
                            key: n.GID + "muteapp",
                            onSelected: this.OnMuteButton
                          },
                          z.createElement(
                            x.a,
                            {
                              toolTipContent: Object(q.f)(
                                "#EventCalendar_MuteApp_ttip"
                              )
                            },
                            Object(q.f)(
                              "#EventCalendar_MuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      )),
                n.BIsOGGEvent() ||
                  s ||
                  ((t = L.a.BIsFollowingCurator(n.clanSteamID)),
                  o.push(
                    z.createElement(
                      ke.d,
                      {
                        key: n.GID + "followcurator",
                        onSelected: this.ToggleFollowCurator
                      },
                      z.createElement(
                        x.a,
                        {
                          toolTipContent: Object(q.f)(
                            t
                              ? "#EventCalendar_UnFollowCurator_ttip"
                              : "#EventCalendar_FollowCurator_ttip"
                          )
                        },
                        Object(q.f)(
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
                    z.createElement(
                      ke.d,
                      {
                        key: n.GID + "goto",
                        onSelected: this.GotoGameOrClanHub
                      },
                      Object(q.f)(
                        "#EventCalendar_Goto_SpecificCalendar",
                        r.GetEntityName()
                      )
                    )
                  ),
                Object(je.a)(z.createElement(ke.c, null, o), e);
            }),
            (t.prototype.render = function() {
              return z.createElement(
                "div",
                {
                  className: Object(V.a)(Ie.a.FooterStat, Ie.a.Options),
                  onClick: this.CreateContextMenu
                },
                z.createElement(R.H, null)
              );
            }),
            Object(U.c)([s.a], t.prototype, "OnMuteButton", null),
            Object(U.c)([s.a], t.prototype, "OnUnMuteButton", null),
            Object(U.c)([s.a], t.prototype, "HideAllEventsOfMyType", null),
            Object(U.c)([s.a], t.prototype, "AddContextMenuForSource", null),
            Object(U.c)([s.a], t.prototype, "RemoveFromWishlist", null),
            Object(U.c)([s.a], t.prototype, "AddToWishlist", null),
            Object(U.c)([s.a], t.prototype, "GotoGameOrClanHub", null),
            Object(U.c)([s.a], t.prototype, "ToggleFollowCurator", null),
            Object(U.c)([s.a], t.prototype, "CreateContextMenu", null),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Le = Object(i.i)(De),
        Ge = a("XmAN"),
        Ne = a("cGQe"),
        Ae = a("Fmfl"),
        Be = a("RQmk"),
        Me = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bVideoPlayerReady: !1 }), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.OnFallbackClick = function(e) {
              pe.b.RecordAppInteractionEvent(
                this.props.calendarEvent.appid,
                pe.a.k_eClickThrough
              ),
                this.props.fnOnClicked(this.props.eventModel),
                e.stopPropagation(),
                e.preventDefault();
            }),
            (e.prototype.componentDidMount = function() {
              var e;
              this.props.calendarEvent.clanInfo &&
                ((e = g.a.InitFromClanID(
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
              var r = Object(G.g)(Y.c.LANGUAGE),
                o =
                  $t() && 14 == this.props.eventModel.GetEventType()
                    ? N.c.full
                    : N.c.capsule_main,
                i = this.props.eventModel.GetImageForSizeAsArrayWithFallback(
                  "capsule",
                  r,
                  o,
                  !0
                );
              if ("carousel" === this.props.mode)
                return z.createElement(ye, {
                  altImgWithFallback: i,
                  video: n,
                  className: Ie.a.YoutubePreviewImage
                });
              return z.createElement(Se, {
                video: n,
                altImgWithFallback: i,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                imageClassnames: Ie.a.YoutubePreviewImage,
                onPlayerActivated: function() {
                  pe.b.RecordAppInteractionEvent(
                    e.props.calendarEvent.appid,
                    pe.a.k_ePlayedVideo
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
                o = W.a.Get(),
                i = a.GetGameCapsule(),
                l = Object(G.g)(Y.c.LANGUAGE),
                s = t.has_live_stream,
                c = t.has_live_stream,
                u =
                  $t() && 14 == t.GetEventType() ? N.c.full : N.c.capsule_main,
                d = "capsule",
                p = t.BImageNeedScreenshotFallback(d, l),
                m = Boolean(p && t.appid)
                  ? t.GetFallbackArtworkScreenshot()
                  : t.GetImageURLWithFallback(d, l, u),
                h = "upcoming" !== r && this.getVideoPreviewControl(),
                v = !h && "upcoming" !== r,
                _ = t.GetCategoryAsString(),
                b = Ie.a["EventType" + t.GetEventType()],
                g = t.GetAllTags().map(function(e) {
                  return Ie.a["Tag-" + e];
                }),
                f = V.a.apply(
                  void 0,
                  Object(U.g)(
                    [
                      Ie.a.TileContainer,
                      b,
                      s && Ie.a.TileVideoIcon,
                      n ? Ie.a.DisableHovers : Ie.a.EnableHovers,
                      this.state.bVideoPlayerReady && Ie.a.VideoPlayerReady,
                      h && Ie.a.HasVideo,
                      o.HasEventBeenRead(t.GID) && Ie.a.HasBeenRead,
                      "wide" === r && Ie.a.WideMode,
                      "carousel" === r && Ie.a.CarouselMode,
                      "upcoming" === r && Ie.a.UpcomingMode
                    ],
                    g
                  )
                ),
                E = t.GetNameWithFallback(l),
                y = t.GetSubTitleWithLanguageFallback(l),
                S = t.GetSummaryWithFallback(l);
              y === S && (S = void 0), y === E && (y = void 0);
              var C = z.createElement(
                  "div",
                  { className: Ie.a.CoverImageCtn },
                  h,
                  v &&
                    z.createElement(
                      z.Fragment,
                      null,
                      12 === t.type &&
                        z.createElement(
                          z.Fragment,
                          null,
                          z.createElement(
                            "div",
                            { className: Ie.a.GameCapsuleCtn },
                            z.createElement("div", {
                              className: Ie.a.AppBannerLogo,
                              style: { backgroundImage: "url(" + i + ")" }
                            })
                          ),
                          z.createElement(
                            "div",
                            { className: Ie.a.GameShortDescription },
                            S
                          )
                        ),
                      12 !== t.type &&
                        z.createElement(
                          "div",
                          {
                            className: Object(V.a)(
                              Ie.a.EventCapsuleCtn,
                              s && Ie.a.LiveBroadcastPreview
                            )
                          },
                          z.createElement("div", {
                            className: Object(V.a)(
                              Ie.a.TileImage,
                              p && Ie.a.FallbackImage
                            ),
                            style: { backgroundImage: "url(" + m + ")" }
                          }),
                          s &&
                            z.createElement("div", {
                              className: Ie.a.TileCoverImagePlayable
                            }),
                          c &&
                            z.createElement(
                              "div",
                              { className: Ie.a.TileCoverLiveIcon },
                              Object(q.f)("#home_page_live_broadcast")
                            ),
                          s &&
                            z.createElement(
                              "div",
                              { className: "VideoHintText" },
                              Object(q.f)("#EventCalendar_WatchLiveBroadcast")
                            )
                        )
                    )
                ),
                O = h && "carousel" !== r,
                w = n && 14 != t.GetEventType() && !O,
                T = w && C,
                I = !w && C,
                j = "wide" !== r || n,
                k =
                  28 !== t.type &&
                  12 !== t.type &&
                  M.a.GetTimeNowWithOverride() <
                    t.GetStartTimeAndDateUnixSeconds() &&
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        Ie.a.ReminderContainer,
                        j && Ie.a.OnlyIcon
                      )
                    },
                    z.createElement(Ne.a, {
                      eventModel: t,
                      eventGID: t.GID,
                      lang: l,
                      bShowStartTime: !0,
                      bOnlyShowIcon: j,
                      bExpandLeft: j
                    })
                  ),
                D = Boolean(12 !== t.type && S),
                L = Boolean(y && (!D || !this.BIsSubTitleRedundant(y, S)));
              return z.createElement(
                "div",
                { className: f },
                z.createElement(Ge.a, { event: t, recordNewsHubStats: !0 }),
                z.createElement(
                  me.c,
                  { eventModel: t, route: me.a.k_eView },
                  z.createElement(
                    "div",
                    { className: Ie.a.Tile, onClick: this.OnFallbackClick },
                    14 === t.type &&
                      z.createElement("div", {
                        className: Object(V.a)(
                          Ie.a.TileBackgroundImage,
                          p && Ie.a.FallbackImage
                        ),
                        style: { backgroundImage: "url(" + m + ")" }
                      }),
                    z.createElement(
                      "div",
                      { className: Ie.a.MainContentContainer },
                      z.createElement(
                        "div",
                        { className: Ie.a.TileTextContainer },
                        z.createElement(
                          "div",
                          { className: Ie.a.PatchIconCtn },
                          z.createElement(R.L, null)
                        ),
                        z.createElement(
                          "div",
                          { className: Ie.a.EventTitleCtn },
                          T,
                          !this.props.bHideGameTitle &&
                            z.createElement(
                              "div",
                              { className: Ie.a.GameSource },
                              z.createElement(Fe, Object(U.a)({}, this.props)),
                              a && z.createElement(He, { calendarEvent: a })
                            ),
                          z.createElement(
                            "div",
                            { className: Ie.a.EventTypeAndDateCtn },
                            z.createElement(
                              "div",
                              {
                                className: Object(V.a)(
                                  Ie.a.TileTextCategoryType,
                                  b
                                )
                              },
                              _
                            ),
                            z.createElement(Pe, {
                              eventModel: t,
                              className: Object(V.a)(
                                j && Ie.a.LeaveRoomForReminder
                              )
                            }),
                            j && k
                          ),
                          z.createElement(
                            "div",
                            { className: Ie.a.EventName },
                            E
                          ),
                          L &&
                            z.createElement(
                              "div",
                              { className: Ie.a.EventSubTitle },
                              y
                            ),
                          D &&
                            z.createElement(
                              "div",
                              {
                                className: Object(V.a)(
                                  Ie.a.EventSummaryDefault,
                                  y ? Ie.a.SubTitleShown : ""
                                )
                              },
                              S
                            ),
                          z.createElement(
                            "div",
                            {
                              className: Object(V.a)(
                                Ie.a.EventTypeAndDateCtn,
                                Ie.a.Mobile
                              )
                            },
                            z.createElement(
                              "div",
                              { className: Ie.a.TileTextCategoryType },
                              _
                            ),
                            z.createElement(Pe, {
                              eventModel: t,
                              className: Object(V.a)(
                                j && Ie.a.LeaveRoomForReminder
                              )
                            }),
                            j && k
                          )
                        ),
                        !j && k
                      ),
                      I
                    )
                  )
                ),
                z.createElement(Ue, Object(U.a)({}, this.props))
              );
            }),
            Object(U.c)([s.a], e.prototype, "OnFallbackClick", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Re = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = E.a.GetClanInfoByClanAccountID(this.props.clanid);
              if (!e) return this.props.children;
              var t = {
                  clan_account_id: e.clanAccountID,
                  name: e.group_name,
                  type: "developer"
                },
                a = z.createElement(
                  "div",
                  { className: Ie.a.CuratorHoverContainer },
                  z.createElement($.a, {
                    creatorID: t,
                    bSmallFormat: !0,
                    bHideCreatorType: !0,
                    bHideFollowButton: !0
                  })
                );
              return z.createElement(
                x.a,
                { toolTipContent: a },
                this.props.children
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        xe = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.RenderHoverSource = function(e) {
              var t = this.props.calendarEvent;
              if (t.appid) {
                var a = de.a.GetAppLinkInfo(t.appid);
                if (a) return z.createElement(Ae.b, { info: a, fnClose: e });
              } else if (t.clanid) {
                var n = E.a.GetClanInfoByClanAccountID(t.clanid);
                if (n) return z.createElement($.d, { clanInfo: n, fnClose: e });
              }
              return null;
            }),
            (t.prototype.render = function() {
              return z.createElement(
                Ae.d,
                {
                  hoverProps: {
                    direction: "overlay",
                    style: { minWidth: "350px" }
                  },
                  className: this.props.className,
                  fnRenderItem: this.RenderHoverSource
                },
                this.props.children
              );
            }),
            Object(U.c)([s.a], t.prototype, "RenderHoverSource", null),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Fe = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.componentDidMount = function() {
              var e = this.props,
                t = e.calendarEvent,
                a = e.eventModel;
              t.appid && Object(Ae.a)()
                ? de.a.LoadAppLinkInfo([t.appid])
                : t.clanid && E.a.LoadClanInfoForClanSteamID(a.clanSteamID);
            }),
            (t.prototype.OnTitleClick = function(e) {
              var t = this.props.eventModel;
              Object(me.i)(t, me.a.k_eStoreOwnerPage),
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
                  z.createElement("img", { className: Ie.a.AppIcon, src: r }),
                  z.createElement(
                    "div",
                    { className: Ie.a.TileTextAppName },
                    n,
                    " "
                  )
                ),
                i = a
                  ? z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          Ie.a.GameTitleContainer,
                          Ie.a.DisableHovers
                        ),
                        onClick: this.OnTitleClick
                      },
                      o
                    )
                  : z.createElement(
                      "div",
                      { onClick: this.OnTitleClick },
                      Object(Ae.a)() || !t.appInfo
                        ? z.createElement(
                            xe,
                            {
                              className: Object(V.a)(
                                Ie.a.GameTitleContainer,
                                Ie.a.EnableHovers
                              ),
                              calendarEvent: t
                            },
                            o
                          )
                        : z.createElement(
                            Be.b,
                            {
                              hoverClassName: Object(V.a)(
                                Ie.a.GameTitleContainer,
                                Ie.a.EnableHovers
                              ),
                              type: "app",
                              id: t.appid
                            },
                            o
                          )
                    );
              return z.createElement(
                S.a,
                null,
                z.createElement("div", { className: Ie.a.TileTextHeader }, i)
              );
            }),
            Object(U.c)([s.a], t.prototype, "OnTitleClick", null),
            t
          );
        })(z.Component),
        Pe = Object(r.a)(function(e) {
          var t = e.eventModel,
            a = e.calendarEvent,
            n = e.className,
            r =
              Object(A.a)()
                .GetStoreInitializationTimestamp()
                .getTime() / 1e3,
            o = t ? t.GetStartTimeAndDateUnixSeconds() : a.start_time,
            i = t && Object(Oe.a)(t.type) && t.GetEndTimeAndDateUnixSeconds();
          if (i && o < r && r < i) {
            var l = i - r,
              s = Object(q.q)(l, !0);
            return z.createElement(
              "div",
              { className: Object(V.a)(Ie.a.LiveText, n) },
              z.createElement(
                he.f,
                { rtFullDate: o, stylesmodule: Ie.a },
                z.createElement(
                  "div",
                  { className: Ie.a.LiveNow },
                  Object(q.f)("#EventCalendar_LiveNow")
                )
              ),
              z.createElement(
                he.f,
                { rtFullDate: i, stylesmodule: Ie.a },
                Object(q.f)("#EventCalendar_TimeLeft", s)
              )
            );
          }
          if (o < r) {
            var c = r - o,
              u = c < 86400 ? Object(q.q)(c, !1, !0) : Object(q.p)(o);
            return z.createElement(
              he.f,
              { className: n, rtFullDate: o, stylesmodule: Ie.a },
              z.createElement("div", { className: Ie.a.PastDateText }, u)
            );
          }
          var d = new Date(1e3 * r);
          d.setHours(0, 0, 0, 1);
          var p = d.getTime() / 1e3,
            m = Math.floor((o - p) / 86400),
            h =
              1 < m && m <= 5 ? Object(q.h)(new Date(1e3 * o)) : Object(q.p)(o),
            v = Object(he.e)(o);
          return z.createElement(
            he.f,
            { className: n, rtFullDate: o, stylesmodule: Ie.a },
            z.createElement(
              "div",
              { className: Ie.a.FutureDateText },
              Object(q.f)("#EventCalendar_WillStartAtDateTime", h, v)
            )
          );
        }),
        He = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var n = this,
                e = this.props.calendarEvent.GetSource(),
                r = [],
                t = Object(A.a)().m_visibilityStore;
              e & u.a.k_eLibrary && t.BIsGameSourceAllowed(B.c.k_ELibrary)
                ? r.push({
                    id: u.a.k_eLibrary,
                    name: "#EventCalendar_GameSource_inLibrary",
                    ttip:
                      "#EventCalendar_GameSource_EventExplanation_ttip_library",
                    styles: Ie.a.LibrarySource
                  })
                : e & u.a.k_eWishlist && t.BIsGameSourceAllowed(B.c.k_EWishlist)
                ? r.push({
                    id: u.a.k_eWishlist,
                    name: "#EventCalendar_GameSource_onWishlist",
                    ttip:
                      "#EventCalendar_GameSource_EventExplanation_ttip_wishlist",
                    styles: Ie.a.WishlistSource
                  })
                : e & u.a.k_eRecommended &&
                  t.BIsGameSourceAllowed(B.c.k_ERecommended)
                ? r.push({
                    id: u.a.k_eRecommended,
                    name: "#EventCalendar_GameSource_recommended_Verbose",
                    ttip:
                      "#EventCalendar_GameSource_EventExplanation_ttip_recommended",
                    styles: Ie.a.RecommendedSource
                  })
                : e & u.a.k_eFeatured &&
                  t.BIsGameSourceAllowed(B.c.k_EFeatured) &&
                  r.push({
                    id: u.a.k_eFeatured,
                    name: "#EventCalendar_GameSource_featured",
                    ttip: "#EventCalendar_GameSource_ttip_featured",
                    styles: Ie.a.FeaturedSource
                  }),
                e & u.a.k_eFollowing &&
                  t.BIsGameSourceAllowed(B.c.k_EFollowing) &&
                  r.push({
                    id: u.a.k_eFollowing,
                    name: "#EventCalendar_GameSource_followed",
                    ttip:
                      "#EventCalendar_GameSource_EventExplanation_ttip_following",
                    styles: Ie.a.FollowingSource
                  });
              var a = r.map(function(e, t) {
                var a = n.props.calendarEvent.unique_id;
                return ze(
                  "item-source-" + a + "-" + e.id,
                  e.name,
                  e.ttip,
                  e.styles,
                  t + 1 < r.length
                );
              });
              return z.createElement("div", { className: Ie.a.SourceList }, a);
            }),
            t
          );
        })(z.Component),
        ze = function(e, t, a, n, r) {
          return z.createElement(
            x.a,
            {
              key: e,
              className: Object(V.a)(Ie.a.Source, n),
              toolTipContent: Object(q.f)(a)
            },
            Object(q.f)(t) + (r ? ", " : "")
          );
        };
      var Ue = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(U.d)(t, e),
          (t.prototype.OnPerformVoteUp = function() {
            var e = this.props.eventModel,
              t = W.a.Get();
            !0 !== t.GetPreviouslyLoadedVote(this.props.eventModel) &&
              Object(we.a)(e, t) &&
              (t.Vote(e, !0, y.a.CancelToken.source()),
              pe.b.RecordAppInteractionEvent(e.appid, pe.a.k_eThumbsUp));
          }),
          (t.prototype.OnDiscussionClicked = function() {
            var e = this.props.eventModel;
            pe.b.RecordAppInteractionEvent(e.appid, pe.a.k_eDiscussions);
          }),
          (t.prototype.render = function() {
            var e,
              t = W.a.Get(),
              a = this.props.eventModel,
              n = Math.max(0, a.nVotesUp - a.nVotesDown),
              r = t.GetPreviouslyLoadedVote(this.props.eventModel),
              o = ((e = r),
              t.BIsUserLoggedIn()
                ? Y.i.is_limited
                  ? Ie.a.Vote_LimitedUser
                  : !0 === e
                  ? Ie.a.Vote_Positive
                  : !1 === e
                  ? Ie.a.Vote_Negative
                  : Ie.a.Vote_Ready
                : Ie.a.Vote_NotLoggedIn),
              i = a.GetForumTopicURL(),
              l = Y.c.EREALM !== b.e.k_ESteamRealmChina && i,
              s =
                0 < a.live_stream_viewer_count
                  ? a.live_stream_viewer_count
                  : void 0;
            return z.createElement(
              "div",
              { className: Ie.a.Footer },
              z.createElement(
                "div",
                { className: Ie.a.FooterRightSide },
                Boolean(s) &&
                  z.createElement(
                    "div",
                    { className: Ie.a.TileViewerCount },
                    s.toLocaleString(q.e.GetPreferredLocales())
                  ),
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(Ie.a.FooterStat, Ie.a.Vote, o),
                    onClick: this.OnPerformVoteUp
                  },
                  z.createElement(R.Y, { className: Ie.a.RateIcon }),
                  z.createElement("span", null, Number(n).toLocaleString())
                ),
                l &&
                  z.createElement(
                    "div",
                    { className: Ie.a.FooterStat },
                    z.createElement(
                      "a",
                      {
                        href: i,
                        className: Ie.a.CommentIconCtn,
                        target: "_blank",
                        onClick: this.OnDiscussionClicked
                      },
                      z.createElement(R.q, { className: Ie.a.CommentIcon }),
                      z.createElement(
                        "span",
                        null,
                        Number(a.nCommentCount).toLocaleString()
                      )
                    )
                  ),
                z.createElement(Le, Object(U.a)({}, this.props))
              )
            );
          }),
          Object(U.c)([s.a], t.prototype, "OnPerformVoteUp", null),
          Object(U.c)([s.a], t.prototype, "OnDiscussionClicked", null),
          (t = Object(U.c)([r.a], t))
        );
      })(z.Component);
      var We = Object(r.a)(function(e) {
          var a = e.calendarEvent,
            n = e.partnerEventStore,
            t = e.mode,
            r = Ie.a["EventType" + a.event_type],
            o = Object(V.a)(Ie.a.TileContainer, r),
            i = "carousel" === t;
          return z.createElement(
            ue.a,
            {
              onEnter: function() {
                var e, t;
                (e = a),
                  n.QueueLoadPartnerEvent(e.clanid, e.unique_id),
                  e.appid && f.a.GetStoreCapsuleInfo(e.appid),
                  e.clanInfo &&
                    ((t = g.a.InitFromClanID(e.clanInfo.clanid)),
                    E.a.LoadClanInfoForClanSteamID(t));
              },
              topOffset: "-500px",
              bottomOffset: "-500px"
            },
            z.createElement(
              "div",
              { className: o },
              z.createElement(
                "div",
                { className: Object(V.a)(Ie.a.Tile, Ie.a.LoadingTile) },
                i && z.createElement(X.a, null)
              ),
              z.createElement("div", { className: Ie.a.Footer })
            )
          );
        }),
        Ve = Object(r.a)(function(e) {
          var t = e.partnerEventStore,
            a = e.calendarEvent,
            n = Object(U.f)(e, ["partnerEventStore", "calendarEvent"]);
          if (
            ((r = a),
            !t.GetClanEventModel(r.unique_id) ||
              (r.appid && !f.a.BIsAppidLoaded(r.appid)) ||
              (r.clanInfo && !E.a.HasLoadedClanAccountID(r.clanInfo.clanid)))
          )
            return z.createElement(
              We,
              Object(U.a)({ calendarEvent: a, partnerEventStore: t }, n)
            );
          var r,
            o = t.GetClanEventModel(a.unique_id);
          return z.createElement(
            Me,
            Object(U.a)({ eventModel: o, calendarEvent: a }, n)
          );
        }),
        Ze = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bLoaded: p.Get().IsLoaded() }), e;
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
                        : [4, p.Get().WaitForInitialLoad()];
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
                  q.e
                    .GetELanguageFallbackOrder([b.e.k_ESteamRealmGlobal])
                    .forEach(function(e) {
                      return t.push(
                        _.a.createElement(qe, { key: "curlang" + e, lang: e })
                      );
                    }),
                _.a.createElement(
                  K.g,
                  { onEscKeypress: this.props.closeModal },
                  _.a.createElement(
                    S.a,
                    null,
                    _.a.createElement(
                      C.f,
                      null,
                      _.a.createElement(
                        C.j,
                        null,
                        Object(q.f)("#EventCurator_BrowseDialog_Title")
                      ),
                      _.a.createElement(
                        C.b,
                        null,
                        _.a.createElement(
                          "div",
                          null,
                          Object(q.f)("#EventCurator_BrowseDialog_Desc")
                        ),
                        this.state.bLoaded
                          ? _.a.createElement(_.a.Fragment, null, t)
                          : _.a.createElement(X.a, {
                              size: "medium",
                              position: "center",
                              string: Object(q.f)("#Loading")
                            })
                      ),
                      _.a.createElement(
                        C.i,
                        null,
                        _.a.createElement(
                          C.p,
                          { onClick: this.props.closeModal },
                          Object(q.f)("#Button_Dismiss")
                        )
                      )
                    )
                  )
                )
              );
            }),
            e
          );
        })(_.a.Component),
        qe = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = p
                .Get()
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
                return _.a.createElement(Ye, {
                  clanInfo: e,
                  key: "curatorbrowse_" + e.clanAccountID,
                  layout: "row"
                });
              });
              return _.a.createElement(
                "div",
                null,
                _.a.createElement(
                  "div",
                  { className: te.a.LanguageHeader },
                  Object(q.f)(
                    "#EventCurator_BrowseDialog_LangCurator",
                    Object(q.f)("#Language_" + Object(G.d)(this.props.lang))
                  )
                ),
                t
              );
            }),
            t
          );
        })(_.a.Component),
        Ye = (function(t) {
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
                _.a.createElement(K.e, {
                  strDescription: Object(q.f)(
                    "#EventCurator_NoEventsFound_Body"
                  ),
                  strTitle: Object(q.f)("#EventCurator_NoEventsFound_Title")
                }),
                window
              ),
                this.OnCloseEventPreview();
            }),
            (e.prototype.renderInfiniteScroll = function() {
              return this.state.bDisplayPreview
                ? _.a.createElement(
                    S.a,
                    null,
                    _.a.createElement(ce, {
                      onEventNotFound: this.OnEventNotFound,
                      appid: 0,
                      clanSteamID: this.props.clanInfo.clanSteamID,
                      trackingLocation: 8,
                      eventModel: void 0,
                      announcementGID: void 0,
                      partnerEventStore: D.c,
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
                n = (Y.c.STORE_BASE_URL,
                t.clanAccountID,
                t.vanity_url && t.vanity_url,
                "row" === a ? te.a.CuratorInfoRow : te.a.CuratorInfoIcon),
                r = _.a.createElement(
                  Re,
                  { clanid: t.clanSteamID.GetAccountID() },
                  _.a.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        J.a.FlexRowContainer,
                        te.a.CuratorInfoTitleCtn
                      )
                    },
                    _.a.createElement("img", {
                      className: te.a.CuratorInfoImg,
                      src: t.avatar_full_url,
                      alt: t.group_name
                    }),
                    _.a.createElement(
                      "div",
                      { className: te.a.CuratorInfoName },
                      t.group_name
                    )
                  )
                );
              return _.a.createElement(
                "div",
                {
                  className: Object(V.a)(
                    J.a.FlexRowWrapSpaceBetweenContainer,
                    n
                  )
                },
                this.renderInfiniteScroll(),
                _.a.createElement("div", { onClick: this.OnPreview }, r),
                _.a.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      J.a.FlexRowContainer,
                      te.a.CuratorInfoActionCtn
                    )
                  },
                  _.a.createElement($.c, {
                    clanAccountID: t.clanAccountID,
                    className: te.a.CuratorInfoFollow
                  }),
                  _.a.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        J.a.Button,
                        te.a.CuratorInfoPreview
                      ),
                      onClick: this.OnPreview
                    },
                    Object(q.f)("#Button_Preview")
                  )
                )
              );
            }),
            Object(U.c)([s.a], e.prototype, "OnPreview", null),
            Object(U.c)([s.a], e.prototype, "OnCloseEventPreview", null),
            Object(U.c)([s.a], e.prototype, "OnEventNotFound", null),
            e
          );
        })(_.a.Component),
        Qe = a("IWyE"),
        Je = a.n(Qe),
        Ke = a("wd/R"),
        Xe = a.n(Ke),
        $e = (function() {
          function e() {
            this.m_dateLoadTime = M.a.GetTimeNowWithOverrideAsDate();
          }
          return (
            (e.prototype.IsCurrentlyVisible = function(e) {
              return (
                (!e.startVisible || e.startVisible <= this.m_dateLoadTime) &&
                (!e.endVisible || e.endVisible >= this.m_dateLoadTime)
              );
            }),
            (e.IsCurrentlyActive = function(e) {
              var t = M.a.GetTimeNowWithOverrideAsDate();
              return (
                (!e.startEvent || e.startEvent <= t) &&
                (!e.endEvent || e.endEvent >= t)
              );
            }),
            (e.LocalizeDateString = function(e) {
              if (!e.startEvent) return null;
              var t = e.startEvent.toLocaleDateString(
                q.e.GetPreferredLocales(),
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
                e.endEvent.toLocaleDateString(q.e.GetPreferredLocales(), a)
              );
            }),
            (e.prototype.GetVisibleSpecialEvents = function() {
              var t = this;
              return [
                {
                  sLocToken: "#NewsHubSpecialEvent_GameFestival",
                  startVisible: new Date(
                    1e3 * Xe()("2020-06-16T14:00:00-07:00").unix()
                  ),
                  endVisible: new Date(
                    1e3 * Xe()("2020-06-22T10:00:00-07:00").unix()
                  ),
                  startEvent: new Date(
                    1e3 * Xe()("2020-06-16T10:00:00-07:00").unix()
                  ),
                  endEvent: new Date(
                    1e3 * Xe()("2020-06-22T10:00:00-07:00").unix()
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
        et = new $e(),
        tt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.specialEvent,
                t = window.location.href === Y.c.STORE_BASE_URL + e.newshubUrl,
                a = $e.IsCurrentlyActive(e),
                n = $e.LocalizeDateString(e);
              return z.createElement(
                c.b,
                { to: "/" + e.newshubUrl },
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      Je.a.SpecialEvent,
                      t && Je.a.SpecialEventOnPage,
                      a && Je.a.SpecialEventActive
                    )
                  },
                  z.createElement(
                    "div",
                    { className: Je.a.SpecialEventTitle },
                    Object(q.f)(e.sLocToken)
                  ),
                  n &&
                    z.createElement(
                      "div",
                      { className: Je.a.SpecialEventTime },
                      n
                    )
                )
              );
            }),
            t
          );
        })(z.Component),
        at = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = et.GetVisibleSpecialEvents();
              return 0 === e.length
                ? null
                : z.createElement(
                    "div",
                    { className: Je.a.SpecialEventListGroup },
                    z.createElement(
                      "div",
                      { className: Je.a.SpecialEventListTitle },
                      Object(q.f)("#Events_SpecialEvents")
                    ),
                    z.createElement(
                      "div",
                      { className: Je.a.SpecialEventList },
                      e.map(function(e) {
                        return z.createElement(tt, {
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
        nt = a("xLK1"),
        rt = a.n(nt),
        ot = (function(t) {
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
                    rt.a.HorizontalScrollInDragForceCursor
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
                    rt.a.HorizontalScrollInDragForceCursor
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
            Object(U.c)([s.a], i.prototype, "OnPointerDown", null),
            Object(U.c)([s.a], i.prototype, "OnPointerUp", null),
            Object(U.c)([s.a], i.prototype, "OnPointerMove", null),
            i
          );
        })(z.Component),
        it = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.GetVisibilityStore = function() {
              return Object(A.a)().m_visibilityStore;
            }),
            (t.prototype.OnEventTypeChange = function(e, t) {
              this.GetVisibilityStore().SetEventTypeGroupAllowed(e, t),
                this.props.fnOnFilterChange();
            }),
            (t.prototype.RenderEventTypeCheckbox = function(t) {
              var a = this,
                e = this.GetVisibilityStore().BIsEventTypeGroupAllowed(t);
              return z.createElement(
                x.a,
                {
                  key: "group-" + t,
                  toolTipContent: Object(q.f)(
                    "#EventCalendar_EventTypeGroup_ttip_" + t
                  ),
                  direction: "top"
                },
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      Je.a.FilterOption,
                      Je.a.FilterEventType
                    )
                  },
                  z.createElement(C.e, {
                    label: Object(q.f)("#EventCalendar_EventTypeGroup_" + t),
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
                x.a,
                {
                  key: "gs-" + t,
                  direction: "top",
                  toolTipContent: e
                    ? Object(q.f)("#EventCalendar_DisabledFilter_LoginPrompt")
                    : Object(q.f)("#EventCalendar_GameSource_ttip_" + t)
                },
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      Je.a.FilterOption,
                      Je.a.FilterGameSource
                    )
                  },
                  z.createElement(C.e, {
                    label: Object(q.f)("#EventCalendar_GameSource_" + t),
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
              Object(l.d)(z.createElement(Ze, null), Object(Z.m)(e));
            }),
            (t.prototype.render = function() {
              var e,
                t = this.props.bUserIsLoggedIn,
                a = Y.c.EREALM === b.e.k_ESteamRealmChina,
                n = Object(A.a)(),
                r = !0;
              !n.BIsSingleGroupCalendar() ||
                ((e = E.a.GetClanInfoByClanAccountID(n.GetSingleGroupID())) &&
                  e.has_rss_feed &&
                  (r = !1));
              var o = d.a.Get().GetMutedSourceCount();
              return z.createElement(
                "div",
                { className: Je.a.FilterControlPage },
                z.createElement(
                  "div",
                  { className: Je.a.FiltersTitle },
                  Object(q.f)("#EventCalendar_FiltersTitle")
                ),
                z.createElement(
                  "div",
                  { className: Je.a.FiltersDescription },
                  Object(q.f)(
                    n.BIsGlobalCalendar()
                      ? "#EventCalendar_FiltersDescription"
                      : "#EventCalendar_FiltersDescription_NonPersonalized"
                  )
                ),
                z.createElement(
                  "div",
                  { className: Je.a.FilterSection },
                  r &&
                    z.createElement(
                      "div",
                      { className: Je.a.FilterSubSection },
                      z.createElement(
                        "div",
                        { className: Je.a.FilterSubSectionTitle },
                        Object(q.f)(
                          "#EventCalendar_FilterSubSection_EventTypeGroups"
                        )
                      ),
                      this.RenderEventTypeCheckbox(B.b.k_EEvents),
                      this.RenderEventTypeCheckbox(B.b.k_EStreaming),
                      this.RenderEventTypeCheckbox(B.b.k_EUpdates),
                      this.RenderEventTypeCheckbox(B.b.k_EReleases),
                      this.RenderEventTypeCheckbox(B.b.k_ESales),
                      this.RenderEventTypeCheckbox(B.b.k_ENews)
                    ),
                  Boolean(n.BIsGlobalCalendar()) &&
                    z.createElement(
                      "div",
                      { className: Je.a.FilterSubSection },
                      z.createElement(
                        "div",
                        { className: Je.a.FilterSubSectionTitle },
                        Object(q.f)(
                          "#EventCalendar_FilterSubSection_GameSources"
                        )
                      ),
                      this.RenderGameSourceCheckbox(B.c.k_ERecent, !t),
                      this.RenderGameSourceCheckbox(B.c.k_ELibrary, !t),
                      this.RenderGameSourceCheckbox(B.c.k_EWishlist, !t),
                      this.RenderGameSourceCheckbox(B.c.k_EFollowing, !t),
                      this.RenderGameSourceCheckbox(B.c.k_ERecommended, !t),
                      this.RenderGameSourceCheckbox(B.c.k_ESteam),
                      M.a.bIncludeFeaturedAsGameSource &&
                        this.RenderGameSourceCheckbox(B.c.k_EFeatured)
                    ),
                  Boolean(
                    !a && (n.BIsGlobalCalendar() || n.BIsSingleSourceCalendar())
                  ) &&
                    z.createElement(
                      "div",
                      { className: Je.a.FilterSubSection },
                      z.createElement(
                        "div",
                        { className: Je.a.FilterSubSectionTitle },
                        Object(q.f)(
                          "#EventCalendar_FilterSubSection_CuratorSources"
                        )
                      ),
                      this.RenderGameSourceCheckbox(B.c.k_ECurator, !t),
                      z.createElement(
                        "div",
                        {
                          className: Je.a.FilterLink,
                          onClick: this.OnBrowseCurator
                        },
                        Object(q.f)("#EventCalendar_BrowseCurators")
                      )
                    ),
                  Boolean(n.BIsSingleSourceMuted()) &&
                    z.createElement(
                      "div",
                      null,
                      Object(q.f)("#EventCalendar_SingleAppIsMuted")
                    )
                ),
                z.createElement(
                  "div",
                  { className: Je.a.SideBarFilterNavLinks },
                  !n.BIsSingleSourceCalendar() &&
                    0 < o &&
                    z.createElement(
                      O.a,
                      {
                        className: Je.a.MutedSourcesGroup,
                        href: Y.c.STORE_BASE_URL + "account/emailoptout/app",
                        bDisableContextMenu: !0
                      },
                      z.createElement(
                        "div",
                        { className: Je.a.FilterLink },
                        z.createElement(R.fb, { muted: !0 }),
                        Object(q.f)("#EventCalendar_ManageMutedSources"),
                        z.createElement(
                          "div",
                          { className: Je.a.NumberDisplay },
                          o
                        )
                      )
                    ),
                  z.createElement(
                    O.a,
                    {
                      href: Y.c.STORE_BASE_URL + "account/preferences",
                      bDisableContextMenu: !0
                    },
                    z.createElement(
                      "div",
                      { className: Je.a.FilterLink },
                      z.createElement(R.a, null),
                      Object(q.f)("#EventCalendar_ManageStorePref")
                    )
                  )
                ),
                M.a.bInSteamLabs &&
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        Je.a.SidePanelSteamLabs,
                        Je.a.ConfigPanelSteamLabs
                      )
                    },
                    z.createElement(pt, null)
                  )
              );
            }),
            Object(U.c)([s.a], t.prototype, "OnBrowseCurator", null),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        lt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bShowFilterPage: !1 }), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.GetCalendarTitle = function(e) {
              return Object(q.n)(
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
                u = this.state.bShowFilterPage,
                d =
                  "Responsive_RequestMobileView" in window &&
                  window.Responsive_RequestMobileView,
                p = Xt(),
                m = z.createElement(
                  "div",
                  { className: Je.a.MobileCloseButton, onClick: s },
                  z.createElement(R.U, null)
                ),
                h = o ? Math.max(0, r) : 0,
                v = p
                  ? null
                  : z.createElement(
                      "div",
                      { onClick: s, className: Je.a.CollapseButton },
                      z.createElement(
                        "div",
                        {
                          style: { marginTop: h + "px" },
                          className: Je.a.DesktopButton
                        },
                        z.createElement(R.u, { angle: o ? 180 : 0 })
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
                        className: Je.a.CollapseButton
                      },
                      z.createElement(
                        "div",
                        {
                          style: { marginTop: h + "px" },
                          className: Je.a.DesktopButton
                        },
                        z.createElement(R.U, null)
                      )
                    ),
                b = u ? _ : v,
                g = o ? null : { top: r + "px" },
                f = Object(A.a)();
              return (
                !f.BIsSingleGroupCalendar() ||
                  ((e = E.a.GetClanInfoByClanAccountID(f.GetSingleGroupID())) &&
                    e.has_rss_feed &&
                    0),
                z.createElement(
                  z.Fragment,
                  null,
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        Je.a.SidebarContainer,
                        o && Je.a.SidebarCollapsed
                      ),
                      style: g
                    },
                    o
                      ? b
                      : z.createElement(
                          "div",
                          { className: Je.a.Sidebar },
                          m,
                          b,
                          z.createElement(
                            "div",
                            { className: Je.a.ControlPageContainer },
                            u
                              ? z.createElement(it, {
                                  bUserIsLoggedIn: n,
                                  fnOnFilterChange: c
                                })
                              : z.createElement(
                                  z.Fragment,
                                  null,
                                  z.createElement(
                                    "div",
                                    { className: Je.a.SidebarBackground },
                                    z.createElement(R.V, null)
                                  ),
                                  z.createElement(
                                    "div",
                                    { className: Je.a.SidebarTitle },
                                    this.GetCalendarTitle(f)
                                  ),
                                  z.createElement(ft, { bIsUpcoming: l }),
                                  z.createElement(at, null),
                                  z.createElement(
                                    "div",
                                    { className: Je.a.SidePanelGameSearch },
                                    z.createElement(ct, {
                                      label: Object(q.f)(
                                        "#EventCalendar_UniversalSearch"
                                      )
                                    })
                                  ),
                                  z.createElement(Et, { bIsUpcoming: l }),
                                  z.createElement(
                                    "div",
                                    { className: Je.a.FilterSettingsCtn },
                                    z.createElement(
                                      "div",
                                      {
                                        className: Object(V.a)(
                                          Je.a.FilterLink,
                                          Je.a.OpenFilterSettings
                                        ),
                                        onClick: function() {
                                          return t.OpenFilterSettings(!0);
                                        }
                                      },
                                      z.createElement(R.T, null),
                                      Object(q.f)("#EventCalendar_EditFilters")
                                    )
                                  ),
                                  d &&
                                    z.createElement(
                                      "div",
                                      {
                                        className: Object(V.a)(
                                          Je.a.SidebarLink,
                                          Je.a.ForceResponsiveLink
                                        ),
                                        onClick: d
                                      },
                                      Object(q.f)(
                                        "#EventCalendar_ShowResponsiveView"
                                      )
                                    ),
                                  M.a.bInSteamLabs &&
                                    z.createElement(
                                      "div",
                                      {
                                        className: Object(V.a)(
                                          Je.a.SidePanelSteamLabs,
                                          i && Je.a.SidePanelSteamLabsNarrow
                                        )
                                      },
                                      z.createElement(pt, null)
                                    ),
                                  i && z.createElement(st, null)
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
        st = function(e) {
          return z.createElement(
            "div",
            { className: Je.a.SidebarFooter },
            z.createElement("img", {
              src: Y.c.STORE_CDN_URL + "public/images/footerLogo_valve_new.png"
            }),
            z.createElement(
              "div",
              { className: Je.a.FooterLegal },
              Object(q.f)("#Legal_Footer_WithYear", Object(q.j)(new Date()))
            )
          );
        },
        ct = (function(e) {
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
                        Object(b.b)(e.type),
                        "Unexpected app type " + e.type
                      ),
                      (a = "app/" + e.id)),
                  z.createElement(
                    c.b,
                    {
                      key: "suggestion-" + e.id,
                      to: "/" + Object(me.f)() + "/" + a + "/"
                    },
                    t
                  )
                );
              }
              return t;
            }),
            (t.prototype.render = function() {
              return z.createElement(P, {
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
        ut = Y.c.STORE_BASE_URL + "labs",
        dt = Y.c.COMMUNITY_BASE_URL + "groups/SteamLabs/discussions/11/",
        pt = function(e) {
          return z.createElement(
            "div",
            { className: Je.a.SideSteamLabsBannerCtn },
            z.createElement(
              "div",
              { className: Je.a.SteamLabsIdentifiers },
              z.createElement(
                "a",
                {
                  className: Je.a.SteamLabsName,
                  href: ut,
                  target: Y.c.IN_CLIENT ? void 0 : "_blank"
                },
                Object(q.f)("#SteamLabs")
              ),
              z.createElement(
                "div",
                { className: Je.a.SteamLabsNumber },
                Object(q.f)("#SteamLabs_ExperimentNumber", "009")
              )
            ),
            z.createElement(
              "a",
              {
                className: Je.a.SteamLabsButton,
                href: dt,
                target: Y.c.IN_CLIENT ? void 0 : "_blank"
              },
              z.createElement(R.j, null)
            )
          );
        };
      function mt(e) {
        var t = Object(A.a)().BIsGlobalCalendar(),
          a = (Object(A.a)().BIsCollectionCalendar(), Object(me.f)()),
          n = new Array();
        return (
          n.push({
            name: Object(q.f)("#EventCalendar_NewsChannel_YourNews"),
            subtitle: Object(q.f)("#EventCalendar_NewsChannel_Personalized"),
            key: "default",
            url: a + "/",
            onPage: t && !e
          }),
          n.push({
            name: Object(q.f)("#EventCalendar_NewsChannel_Upcoming"),
            shortName: Object(q.f)("#EventCalendar_NewsChannel_UpcomingShort"),
            subtitle: Object(q.f)("#EventCalendar_NewsChannel_Personalized"),
            key: "upcoming",
            url: a + "/?upcoming=1",
            onPage: t && e,
            count: (function() {
              if (Object(A.a)().BIsGlobalCalendar() && Y.i.logged_in) {
                var e =
                    Object(A.a)()
                      .GetStoreInitializationTimestamp()
                      .getTime() / 1e3,
                  t = Object(A.a)().GetCurrentlyLoadedEventCount(e);
                if (t)
                  return Object(A.a)().BHitEventHorizon("forward")
                    ? String(t.nCount)
                    : t.nCount + "+";
              }
            })()
          }),
          n
        );
      }
      function ht() {
        Object(A.a)().BIsGlobalCalendar();
        var e = Object(A.a)().BIsCollectionCalendar(),
          t = Object(me.f)(),
          a = new Array();
        a.push({
          name: Object(q.f)("#EventCalendar_NewsChannel_Featured"),
          subtitle: Object(q.f)("#EventCalendar_NewsChannel_TopSellers"),
          key: "featured",
          url: t + "/collection/featured/",
          onPage: e && "featured" == Object(A.a)().GetCollectionID()
        }),
          a.push({
            name: Object(q.f)("#EventCalendar_NewsChannel_Steam"),
            subtitle: Object(q.f)("#EventCalendar_NewsChannel_SteamSubtitle"),
            key: "steam",
            url: t + "/collection/steam/",
            onPage: e && "steam" == Object(A.a)().GetCollectionID()
          });
        var n,
          r = M.a.GetTimeNowWithOverrideAsDate(),
          o = new Date(),
          i = new Date();
        return (
          o.setMonth(9, 0),
          i.setMonth(10, 7),
          o < r &&
            r < i &&
            ((n = Y.c.IMG_URL + "events/types/type_halloween_35.png?v=2"),
            a.push({
              name: Object(q.f)("#EventCalendar_NewsChannel_Halloween"),
              subtitle: Object(q.f)(
                "#EventCalendar_NewsChannel_HalloweenSubtitle"
              ),
              key: "halloween",
              url: t + "/collection/halloween/",
              onPage: e && "halloween" == Object(A.a)().GetCollectionID(),
              icon: n,
              bValveOnly: !1
            })),
          a
        );
      }
      function vt(e) {
        var t = e.element,
          a = t.shortName,
          n = t.name,
          r = t.url,
          o = t.onPage,
          i = t.count,
          l = t.bValveOnly;
        return !Y.i.is_support && l
          ? null
          : z.createElement(
              c.b,
              { to: "/" + r },
              z.createElement(
                "div",
                {
                  className: Object(V.a)(
                    Je.a.MobileNavButton,
                    o && Je.a.MobileNavButtonActive
                  )
                },
                a || n,
                i &&
                  z.createElement("div", { className: Je.a.MobileNavCount }, i)
              )
            );
      }
      function _t(e) {
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
          : z.createElement(
              c.b,
              { to: "/" + r },
              z.createElement(
                "div",
                {
                  className: Object(V.a)(
                    Je.a.NewsChannel,
                    o && Je.a.NewsChannelOnPage
                  )
                },
                Boolean(s) &&
                  z.createElement("img", {
                    className: Object(V.a)(Je.a.NewsChannelIcon),
                    src: s
                  }),
                z.createElement(
                  "div",
                  { className: Je.a.NewsChannelText },
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        l && J.a.ValveOnlyBackground,
                        Je.a.NewsChannelTitle
                      )
                    },
                    l && "(VO) ",
                    a
                  ),
                  n &&
                    z.createElement(
                      "div",
                      { className: Je.a.NewsChannelSubtitle },
                      n
                    )
                ),
                Boolean(void 0 !== i) &&
                  z.createElement(
                    "div",
                    { className: Je.a.NewsChannelCount },
                    i
                  )
              )
            );
      }
      function bt(e) {
        var t = e.titleToken,
          a = e.subtitleToken,
          n = e.backgroundImg,
          r = e.headerImg,
          o = e.headerURL,
          i = n ? { backgroundImage: n } : {};
        return z.createElement(
          "div",
          {
            className: Object(V.a)(
              It.a.CommonHeaderStyles,
              It.a.SimpleTitleHeaderCtn,
              e.largeHeader && It.a.LargeHeader
            ),
            style: i
          },
          Boolean(o && r) &&
            z.createElement(
              "a",
              { href: o, className: It.a.AppBannerLogoCtn },
              z.createElement("img", { className: It.a.AppBannerLogo, src: r })
            ),
          Boolean(r && !o) &&
            z.createElement(
              "div",
              { className: It.a.AppBannerLogoCtn },
              z.createElement("img", { className: It.a.AppBannerLogo, src: r })
            ),
          z.createElement(
            "div",
            { className: It.a.SimpleTitleCtn },
            z.createElement(
              "div",
              { className: It.a.Title },
              t.startsWith("#") ? Object(q.f)(t) : t
            ),
            a &&
              z.createElement(
                "div",
                { className: It.a.Subtitle },
                a.startsWith("#") ? Object(q.f)(a) : a
              )
          )
        );
      }
      var gt = (function(t) {
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
                a = mt(this.props.bIsUpcoming),
                n = ht(this.props.bIsUpcoming),
                r = Object(U.g)(a, n);
              return z.createElement(
                "div",
                {
                  style: {
                    transform: "translateY(" + this.props.nTopOffset + "px)"
                  },
                  className: Je.a.MobileNavBannerCtn
                },
                z.createElement(
                  "div",
                  {
                    className: Je.a.SettingsPanel,
                    onClick: this.props.fnToggleCollapsed
                  },
                  z.createElement(R.T, null)
                ),
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      Je.a.SettingsPanel,
                      t && Je.a.SearchExpanded
                    ),
                    onClick: function() {
                      return e.onExpandSearch(!t);
                    }
                  },
                  z.createElement(R.E, null)
                ),
                t &&
                  z.createElement(
                    z.Fragment,
                    null,
                    z.createElement("div", {
                      className: Je.a.SearchDismiss,
                      onClick: function() {
                        return e.onExpandSearch(!1);
                      }
                    }),
                    z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          Je.a.SearchBox,
                          t && Je.a.SearchExpanded
                        )
                      },
                      z.createElement(ct, { focusOnMount: !0 })
                    )
                  ),
                z.createElement(
                  ot,
                  { className: Je.a.MobileNavHScroll },
                  z.createElement(
                    "div",
                    { className: Je.a.MobileNavBannerList },
                    r.map(function(e) {
                      return z.createElement(vt, { key: e.key, element: e });
                    })
                  )
                )
              );
            }),
            Object(U.c)([s.a], e.prototype, "onExpandSearch", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        ft = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = mt(this.props.bIsUpcoming),
                t = ht(this.props.bIsUpcoming);
              return z.createElement(
                "div",
                { className: Je.a.NewsChannelGroup },
                z.createElement(
                  "div",
                  { className: Je.a.NewsChannelListTitle },
                  Object(q.f)("#EventCalendar_NewsChannels")
                ),
                z.createElement(
                  "div",
                  { className: Je.a.NewsChannelList },
                  e.map(function(e) {
                    return z.createElement(_t, { key: e.key, element: e });
                  })
                ),
                z.createElement(
                  "div",
                  { className: Je.a.NewsChannelListTitle },
                  Object(q.f)("#EventCalendar_NewsChannels_Global")
                ),
                z.createElement(
                  "div",
                  { className: Je.a.NewsChannelList },
                  t.map(function(e) {
                    return z.createElement(_t, { key: e.key, element: e });
                  })
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Et = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = (function(e) {
                var t = Object(A.a)().BIsCollectionCalendar(),
                  a = Object(me.f)(),
                  n = new Array();
                if (
                  (Y.c.EREALM !== b.e.k_ESteamRealmChina &&
                    n.push({
                      name: Object(q.f)("#EventCalendar_NewsChannel_Press"),
                      key: "press",
                      url: a + "/collection/press/",
                      onPage: t && "press" == Object(A.a)().GetCollectionID()
                    }),
                  e)
                )
                  for (
                    var r = 0, o = et.GetVisibleSpecialEvents();
                    r < o.length;
                    r++
                  ) {
                    var i = o[r];
                    n.push({
                      name: Object(q.f)(i.sLocToken),
                      url: i.newshubUrl,
                      onPage: !1,
                      key: "event_" + i.sLocToken
                    });
                  }
                return (
                  Y.i.is_support &&
                    (n.push({
                      name: Object(q.f)("#EventCalendar_NewsChannel_All"),
                      key: "all",
                      url: a + "/collection/all/",
                      onPage: t && "all" == Object(A.a)().GetCollectionID(),
                      bValveOnly: !0
                    }),
                    n.push({
                      name: Object(q.f)("#EventCalendar_NewsChannel_AllSales"),
                      key: "sales",
                      url: a + "/collection/sales/",
                      onPage: t && "sales" == Object(A.a)().GetCollectionID(),
                      bValveOnly: !0
                    }),
                    n.push({
                      name: "Associated To Apps Events",
                      key: "associated_press",
                      url: a + "/collection/associated_press/",
                      onPage:
                        t &&
                        "associated_press" == Object(A.a)().GetCollectionID(),
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
                        Je.a.NewsChannelGroup,
                        Je.a.DiscoverGroup
                      )
                    },
                    z.createElement(
                      "div",
                      { className: Je.a.NewsChannelListTitle },
                      Object(q.f)("#EventCalendar_NewsChannels_Discover")
                    ),
                    z.createElement(
                      "div",
                      { className: Je.a.NewsChannelList },
                      e.map(function(e) {
                        return z.createElement(_t, { key: e.key, element: e });
                      })
                    )
                  )
                : null;
            }),
            t
          );
        })(z.Component),
        yt = a("G24H"),
        St = a.n(yt),
        Ct = a("FKsz"),
        Ot = a.n(Ct),
        wt = (function(t) {
          function a() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                rgCuratorList: null,
                nNumToDisplay: 0,
                bHasBeenDismissed: e.HasBeenDismissed()
              }),
              (e.m_ref = _.a.createRef()),
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
                        : [4, p.Get().WaitForInitialLoad()];
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
                _.a.createElement(K.c, {
                  strTitle: Object(q.f)("#EventCurator_DismissTitle"),
                  strDescription: Object(q.f)("#EventCurator_DismissBody"),
                  onOK: this.OnCommitDismiss
                }),
                Object(Z.m)(e)
              );
            }),
            (a.prototype.GenerateNewsCuratorList = function() {
              var e = q.e.GetELanguageFallbackOrder();
              void 0 ===
                e.find(function(e) {
                  return 0 === e;
                }) && e.push(0);
              for (var t = new Array(), a = 0, n = e; a < n.length; a++) {
                var r = n[a],
                  o = p
                    .Get()
                    .GetCuratorsForLang(r)
                    .filter(function(e) {
                      return !L.a.BIsIgnoringCurator(e.clanAccountID);
                    });
                Object(_e.g)(o), t.push.apply(t, o);
              }
              return t;
            }),
            (a.prototype.GenerateCurator = function(e) {
              var t = E.a.GetClanInfoByClanAccountID(e.clanAccountID);
              return t
                ? _.a.createElement(
                    "div",
                    { className: Ot.a.ClanInfo, key: t.clanAccountID },
                    _.a.createElement(Ye, { clanInfo: t, layout: "icon" })
                  )
                : null;
            }),
            (a.prototype.OnBrowseCurator = function(e) {
              Object(l.d)(_.a.createElement(Ze, null), Object(Z.m)(e));
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
              return _.a.createElement(
                S.a,
                null,
                _.a.createElement(
                  "div",
                  { className: Ot.a.FeedSuggestContainerBG },
                  _.a.createElement(
                    "div",
                    { className: Ot.a.FeedSuggestContainer },
                    _.a.createElement(
                      "div",
                      { className: Ot.a.FeedSuggestCaption },
                      Object(q.f)("#EventCurator_FeedCaption_Long")
                    ),
                    e &&
                      _.a.createElement(
                        "div",
                        {
                          className: Ot.a.DismissButton,
                          onClick: this.OnDismissButton
                        },
                        _.a.createElement(R.U, null)
                      ),
                    _.a.createElement(
                      "div",
                      { className: Ot.a.RowContainer, ref: this.m_ref },
                      o || _.a.createElement(X.a, null),
                      _.a.createElement(
                        "div",
                        {
                          className: Ot.a.BrowseMore,
                          onClick: this.OnBrowseCurator
                        },
                        Object(q.f)("#EventCurator_BrowseMore")
                      )
                    )
                  )
                )
              );
            }),
            (a.s_strLocalStorageKey = "SteamNewsHub_SuggestCuratorsDismissed"),
            Object(U.c)([s.a], a.prototype, "OnResize", null),
            Object(U.c)([s.a], a.prototype, "OnCommitDismiss", null),
            Object(U.c)([s.a], a.prototype, "OnDismissButton", null),
            Object(U.c)([s.a], a.prototype, "OnBrowseCurator", null),
            a
          );
        })(_.a.Component),
        Tt = a("4SZ2"),
        It = a.n(Tt);
      function jt(e, n, r, o) {
        return {
          collection: e,
          smallHeight: Number(It.a.simpleTitleSmallHeight),
          largeHeight: Number(It.a.simpleTitleLargeHeight),
          component: function(e, t, a) {
            return z.createElement(bt, {
              largeHeader: e,
              titleToken: n,
              subtitleToken: r,
              backgroundImg: o,
              headerImg: t,
              headerURL: a
            });
          }
        };
      }
      var kt = [
          jt(
            "press",
            "#EventCalendar_Collection_News_Title",
            "#EventCalendar_Collection_News_Subtitle"
          ),
          jt(
            "halloween",
            "#EventCalendar_Collection_Halloween_Title",
            "#EventCalendar_Collection_Halloween_Subtitle"
          )
        ],
        Dt = a("mZMQ"),
        Lt = (a("hmtA"), a("dgee")),
        Gt = a.n(Lt),
        Nt = a("SS32"),
        At = a("MnIK"),
        Bt = a("lypr"),
        Mt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
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
              return z.createElement(
                "div",
                { className: Nt.pipScrollerContainer },
                e &&
                  z.createElement(
                    Dt.a,
                    {
                      className: Object(V.a)(
                        Nt.pipScrollButton,
                        Nt.left,
                        Nt.carouselNavButton
                      )
                    },
                    z.createElement(R.r, null)
                  ),
                z.createElement(
                  "div",
                  { className: Nt.pipScroller },
                  z.createElement("div", { className: Nt.scrollBackground }),
                  z.createElement("div", {
                    className: Nt.scrollForeground,
                    style: { left: r + "%", right: o + "%" }
                  }),
                  z.createElement(
                    "div",
                    {
                      className: Nt.scrollNavDiv,
                      style: { left: "0%", width: i + "%" }
                    },
                    z.createElement(
                      Dt.a,
                      {
                        className: Object(V.a)(
                          Nt.carouselNavButton,
                          Nt.scrollNavButton
                        )
                      },
                      z.createElement("div", null)
                    )
                  ),
                  z.createElement(
                    "div",
                    {
                      className: Nt.scrollNavDiv,
                      style: { right: "0%", width: l + "%" }
                    },
                    z.createElement(
                      Dt.b,
                      {
                        className: Object(V.a)(
                          Nt.carouselNavButton,
                          Nt.scrollNavButton
                        )
                      },
                      z.createElement("div", null)
                    )
                  )
                ),
                e &&
                  z.createElement(
                    Dt.b,
                    {
                      className: Object(V.a)(
                        Nt.pipScrollButton,
                        Nt.right,
                        Nt.carouselNavButton
                      )
                    },
                    z.createElement(R.r, null)
                  )
              );
            }),
            t
          );
        })(z.Component),
        Rt = Object(Dt.g)(Mt, function(e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides
          };
        }),
        xt = (function(e) {
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
              var n = this;
              return z.Children.map(this.props.children, function(e, t) {
                var a = n.props.bLazyRenderChildren
                  ? z.createElement(
                      At.a,
                      { rootMargin: "0px 100% 0px 100%", bHorizontal: !0 },
                      e
                    )
                  : e;
                return z.createElement(
                  Dt.e,
                  { key: "slide_" + t, index: t },
                  a
                );
              });
            }),
            (t.prototype.RenderBreadcrumbs = function(a) {
              return z.Children.map(this.props.children, function(e, t) {
                return t % a != 0
                  ? null
                  : z.createElement(
                      Dt.d,
                      { slide: t, className: Nt.pip },
                      z.createElement("img", { src: Gt.a })
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
                      Nt.carouselBody,
                      this.props.className,
                      Bt.a.GetScrollableClassname()
                    )
                  },
                  z.createElement(
                    Dt.c,
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
                      { className: Nt.sliderBody },
                      !n &&
                        z.createElement(
                          Dt.a,
                          {
                            className: Object(V.a)(
                              Nt.carouselBtnCtn,
                              Nt.left,
                              Nt.carouselNavButton
                            )
                          },
                          z.createElement(R.r, null)
                        ),
                      z.createElement(Dt.f, null, this.RenderChildren()),
                      !n &&
                        z.createElement(
                          Dt.b,
                          {
                            className: Object(V.a)(
                              Nt.carouselBtnCtn,
                              Nt.right,
                              Nt.carouselNavButton
                            )
                          },
                          z.createElement(R.r, null)
                        )
                    ),
                    !r &&
                      (this.props.useTestScrollbar
                        ? z.createElement(Rt, { showArrows: n })
                        : z.createElement(
                            "div",
                            { className: Nt.breadcrumbContainer },
                            this.RenderBreadcrumbs(t)
                          ))
                  )
                )
              );
            }),
            t
          );
        })(z.Component),
        Ft = a("90oc"),
        Pt = a.n(Ft),
        Ht = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
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
                  ? z.createElement(
                      "div",
                      { className: Pt.a.EventTileCarouselTitleContainer },
                      z.createElement(
                        "div",
                        { className: Pt.a.EventTileCarouselTextTitle },
                        n
                      )
                    )
                  : null;
              var o = Boolean(0 === r.appid && Y.i.accountid);
              return z.createElement(
                "div",
                { className: Pt.a.EventTileCarouselTitleContainer },
                z.createElement(
                  "div",
                  { className: Pt.a.EventTileCarouselTitle },
                  z.createElement(ca, {
                    calendarItem: r,
                    bSuppressHoverEffects: a
                  })
                ),
                o &&
                  z.createElement(
                    "div",
                    { className: Pt.a.EventTileCarouselFollow },
                    z.createElement($.c, { clanAccountID: r.clanid })
                  )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        zt = (function(t) {
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
                return z.createElement(Ve, {
                  key: "ht-" + e.unique_id,
                  calendarEvent: e,
                  partnerEventStore: D.c,
                  fnOnClicked: a,
                  bSuppressHoverEffects: n,
                  mode: 1 < t.length ? "carousel" : "wide",
                  bHideGameTitle: r
                });
              });
              return z.createElement(
                "div",
                { className: Pt.a.CalendarRow },
                z.createElement(Ht, {
                  rgCalendarItems: t,
                  bSuppressHoverEffects: n,
                  strMultipleSourceTitle: o
                }),
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      Pt.a.EventTileCarousel,
                      "EventTileCarouselCtn"
                    )
                  },
                  z.createElement(
                    xt,
                    {
                      hideArrows: !0,
                      visibleElements: Math.min(
                        this.state.nMaxCapsulesPerRow,
                        this.props.rgCalendarItems.length
                      ),
                      className: Pt.a.HorizontalTiles,
                      useTestScrollbar: !0,
                      bLazyRenderChildren: !0,
                      disableEdgeWrap: !0
                    },
                    i
                  )
                )
              );
            }),
            Object(U.c)([s.a], e.prototype, "OnResize", null),
            (e = a = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Ut = a("s4NR"),
        Wt = a.n(Ut);
      function Vt(e, t) {
        var a = "location" in e ? e.location : e,
          n = "search" in a ? a.search : a,
          r = Wt.a.parse(n.substring(1))[t];
        return r && Array.isArray(r) ? r[r.length - 1] : r;
      }
      var Zt = function(e) {
        return null != e;
      };
      function qt(e, t, a) {
        var n = Wt.a.parse(e.location.search.substring(1));
        Zt(a) ? (n[t] = a) : delete n[t], e.push("?" + Wt.a.stringify(n));
      }
      function Yt(e, t) {
        var a,
          n = Wt.a.parse(e.location.search.substring(1));
        for (var r in t) {
          t.hasOwnProperty(r) &&
            (null == (a = t[r]) ? delete n[r] : (n[r] = a));
        }
        e.push("?" + Wt.a.stringify(n));
      }
      var Qt = a("BFsE"),
        Jt = "global_header";
      function Kt() {
        var e = document.getElementById(Jt);
        if (e && "none" != getComputedStyle(e).display) return e;
        var t = document.getElementsByClassName("responsive_header");
        return (
          Object(h.a)(t.length <= 1, "Must have at most one responsive_header"),
          1 != t.length ? null : t[0]
        );
      }
      function Xt() {
        var e = Kt();
        return e && e.id != Jt;
      }
      function $t() {
        return window.innerWidth < parseInt(Je.a.strMaxMobileWidth);
      }
      function ea() {
        return (
          Xt() ||
          window.innerWidth <
            parseInt(Je.a.strDesktopControlBarWidth) +
              parseInt(Je.a.strMaxMobileWidth)
        );
      }
      var ta,
        aa,
        na = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUserIsLoggedIn: Y.i.logged_in,
                nVisibleHeight: 0,
                nScrollTop: 0,
                bControlBarIsCollapsed: ea(),
                bControlBarWasOpenedByUser: !1,
                nDisappearingHeaderTop: 0,
                nSteamNavHeaderHeight: 0,
                nMobileNavBannerHeight: 0,
                nHubBannerHeight: 0,
                nGroupHeaderHeight: 0,
                nLogInBannerHeight: 0
              }),
              (e.m_refControlBar = z.createRef()),
              (e.m_cancelSignal = y.a.CancelToken.source()),
              e
            );
          }
          var u;
          return (
            Object(U.d)(e, t),
            ((u = e).prototype.componentDidMount = function() {
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
                e.filter_to_collection === this.props.filter_to_collection &&
                e.filter_to_saleid === this.props.filter_to_saleid) ||
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
              var t,
                a,
                n = e && !$t();
              return Object(A.a)().GetCollectionID()
                ? (function(t, e) {
                    if (!t) return 0;
                    var a = kt.find(function(e) {
                      return e.collection === t;
                    });
                    return a ? (e ? a.largeHeight : a.smallHeight) : 0;
                  })(Object(A.a)().GetCollectionID(), n)
                : Object(A.a)().BIsSaleCalendar()
                ? ((t = Object(A.a)().GetSaleID()),
                  (a = n),
                  t && D.c.GetClanEventModel(t)
                    ? a
                      ? Number(It.a.simpleTitleLargeHeight)
                      : Number(It.a.simpleTitleSmallHeight)
                    : 0)
                : Object(A.a)().BIsSingleSourceCalendar()
                ? parseInt(
                    n
                      ? Je.a.strJumboHubBannerHeight
                      : Je.a.strDesktopHubBannerHeight
                  ) - 1
                : 0;
            }),
            (e.prototype.BShowLogInBanner = function() {
              return Boolean(
                !this.state.bUserIsLoggedIn && Object(A.a)().BIsGlobalCalendar()
              );
            }),
            (e.prototype.GetCurrentHeaderHeights = function(e) {
              var t = Xt(),
                a = $t(),
                n = 0;
              Kt() &&
                ((n = parseInt(
                  t
                    ? Je.a.strMobileGlobalHeaderHeight
                    : Je.a.strDesktopGlobalHeaderHeight
                )),
                --n);
              var r =
                  parseInt(
                    a
                      ? Je.a.strMobileGroupHeaderHeight
                      : Je.a.strDesktopGroupHeaderHeight
                  ) - 1,
                o = (t ? parseInt(Je.a.strMobileNavBannerHeight) : 0) - 1,
                i = this.GetCurrentHubBannerHeight(e),
                l = 0;
              return (
                this.BShowLogInBanner() &&
                  (l =
                    e && !a
                      ? parseInt(Je.a.strLogInBannerLargeHeight)
                      : parseInt(Je.a.strLogInBannerSmallHeight)),
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return ((t = Vt(this.props.location, "emclan")),
                      (a = Vt(this.props.location, "emgid")),
                      t && a)
                        ? ((n = new g.a(t)),
                          this.state.modalEvent &&
                          this.state.modalEvent.clanSteamID.ConvertTo64BitString() ==
                            n.ConvertTo64BitString() &&
                          this.state.modalEvent.GID == a
                            ? [2]
                            : [
                                4,
                                D.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
              var e = Vt(this.props.location, "upcoming");
              return e && "false" != e;
            }),
            (e.prototype.BShowUpdatesOnly = function() {
              return !(
                !this.props.filter_to_appids ||
                1 != this.props.filter_to_appids.length ||
                "true" != Vt(this.props.location, "updates")
              );
            }),
            (e.prototype.UpdateDocumentUI = function() {
              var e,
                t,
                a,
                n,
                r,
                o = Object(A.a)();
              o.BIsSingleAppCalendar()
                ? (a =
                    (t =
                      (e = o.GetSingleAppID()) &&
                      f.a.GetStoreCapsuleInfo(e).GetAppStoreData()) && t.title)
                : o.BIsSingleGroupCalendar()
                ? (a =
                    (r =
                      (n = o.GetSingleGroupID()) &&
                      E.a.GetClanInfoByClanAccountID(n)) && r.group_name)
                : o.BIsCollectionCalendar();
              var i = a
                ? Object(q.f)("#EventCalendar_TabTitle_GroupHub", a)
                : Object(q.f)("#EventCalendar_TabTitle_Global");
              document.title != i && (document.title = i),
                document.body.classList.contains("events_hub") ||
                  document.body.classList.add("events_hub");
            }),
            (e.prototype.OnResize = function() {
              var r = this;
              this.setState(function(e) {
                var t = window.innerHeight,
                  a = !e.bControlBarWasOpenedByUser && ea(),
                  n = r.GetCurrentHeaderHeights(r.state.nScrollTop <= 0);
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
              var u = this,
                d = Math.round(window.scrollY);
              this.setState(function(e) {
                var t,
                  a = e.nScrollTop <= 0,
                  n = d <= 0,
                  r = e.nHubBannerHeight,
                  o = e.nLogInBannerHeight;
                if (
                  (a != n &&
                    ((r = (t = u.GetCurrentHeaderHeights(n)).nHubBannerHeight),
                    (o = t.nLogInBannerHeight)),
                  Math.abs(d - e.nScrollTop) < 2)
                )
                  return {
                    nScrollTop: d,
                    nDisappearingHeaderTop: e.nDisappearingHeaderTop,
                    nHubBannerHeight: r,
                    nLogInBannerHeight: o
                  };
                var i = d > e.nScrollTop,
                  l = e.nSteamNavHeaderHeight + r + e.nMobileNavBannerHeight,
                  s =
                    (i && l < d && u.state.bControlBarIsCollapsed) ||
                    !!e.modalEvent
                      ? -1 * l
                      : 0,
                  c = Kt();
                return (
                  c && (c.style.transform = "translateY(" + s + "px)"),
                  {
                    nScrollTop: d,
                    nDisappearingHeaderTop: s,
                    nHubBannerHeight: r,
                    nLogInBannerHeight: o
                  }
                );
              });
            }),
            (e.prototype.InitEventCalendarStore = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = {
                          appids: this.props.filter_to_appids,
                          clanaccountids: this.props.filter_to_clanids,
                          collectionid: this.props.filter_to_collection,
                          saleid: this.props.filter_to_saleid
                        }),
                        (a = Object(A.b)(t)),
                        (n = Object(A.a)()),
                        d.a.Get(),
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
                            ? f.a
                                .GetStoreCapsuleInfo(n.GetSingleAppID())
                                .HintLoadBroadcastAppData()
                            : E.a.LoadClanInfoForClanSteamID(
                                g.a.InitFromClanID(n.GetSingleGroupID())
                              )),
                        this.OnResize(),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.UpdateBodyScrollState = function(e) {
              var t = !e && Xt(),
                a = document.body;
              a &&
                (t
                  ? a.classList.add(Je.a.BodyNoScroll)
                  : a.classList.remove(Je.a.BodyNoScroll));
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
                  r = Kt();
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
              var e = Kt();
              e &&
                (e.style.transform =
                  "translateY(" + this.state.nDisappearingHeaderTop + "px)"),
                "PUSH" === this.props.history.action
                  ? this.props.history.goBack()
                  : Yt(this.props.history, { emclan: void 0, emgid: void 0 });
            }),
            (e.prototype.OnEventClicked = function(e) {
              W.a.Get().RecordEventRead(e, 8);
              var t,
                a =
                  this.state.nSteamNavHeaderHeight +
                  this.state.nHubBannerHeight +
                  this.state.nMobileNavBannerHeight,
                n = Kt();
              n && (n.style.transform = "translateY(" + -1 * a + "px)"),
                M.a.bOpenEventLandingPage
                  ? ((t = Object(me.d)(e, me.a.k_eStoreView, "allowRelative")),
                    this.props.history.push(t))
                  : Yt(this.props.history, {
                      emclan: e.clanSteamID.ConvertTo64BitString(),
                      emgid: e.GID
                    });
            }),
            (e.prototype.ToggleFutureView = function() {
              qt(
                this.props.history,
                "upcoming",
                this.BShowFutureView() ? "false" : "true"
              );
            }),
            (e.prototype.ResetAllFilters = function() {
              qt(this.props.history, "updates", void 0),
                Object(A.a)().m_visibilityStore.InitDefaultCheckboxes(
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
                t = this.state.nDisappearingHeaderTop,
                a = t + this.state.nSteamNavHeaderHeight,
                n = a + this.state.nMobileNavBannerHeight,
                r = n + this.state.nLogInBannerHeight,
                o =
                  this.state.nVisibleHeight <=
                  parseInt(Je.a.strMinMobileHeight),
                i = o
                  ? 0
                  : this.state.nDisappearingHeaderTop +
                    this.state.nSteamNavHeaderHeight,
                l = o ? 0 : this.state.nDisappearingHeaderTop + e,
                s = Object(A.a)().m_visibilityStore.BAreAnyEventsFiltered(
                  this.state.bUserIsLoggedIn
                )
                  ? this.ResetAllFilters
                  : null;
              return z.createElement(
                z.Fragment,
                null,
                z.createElement(
                  "div",
                  { className: Je.a.EventCalendarContainer },
                  z.createElement(
                    S.a,
                    null,
                    this.state.modalEvent
                      ? z.createElement(ce, {
                          appid: this.state.modalEvent.appid,
                          trackingLocation: 8,
                          announcementGID: this.state.modalEvent.GetAnnouncementGID(),
                          partnerEventStore: D.c,
                          eventModel: this.state.modalEvent,
                          showAppHeader: !0,
                          closeModal: this.CloseEventModal
                        })
                      : null
                  ),
                  z.createElement(
                    S.a,
                    null,
                    z.createElement(lt, {
                      ref: this.m_refControlBar,
                      bUserIsLoggedIn: this.state.bUserIsLoggedIn,
                      nDisappearingHeaderVisibleHeight: i,
                      nGlobalHeaderTop: t,
                      bIsCollapsed: this.state.bControlBarIsCollapsed,
                      bShowUpcoming: this.BShowFutureView(),
                      bShouldIncludeLegalFooter: !Xt(),
                      fnToggleCollapsed: this.ToggleControlBarCollapsed,
                      fnOnFilterChange: this.OnControlBarChange
                    })
                  ),
                  z.createElement(
                    S.a,
                    null,
                    z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          Je.a.ReserveControlSpace,
                          !this.state.bControlBarIsCollapsed &&
                            Je.a.WideLeftGutter
                        )
                      },
                      z.createElement(
                        S.a,
                        null,
                        0 < this.state.nLogInBannerHeight &&
                          z.createElement(ma, {
                            nTopOffset: n,
                            bLargeMode: this.state.nScrollTop <= 0 && !$t()
                          })
                      ),
                      z.createElement(
                        S.a,
                        null,
                        0 < this.state.nMobileNavBannerHeight &&
                          z.createElement(gt, {
                            bIsUpcoming: this.BShowFutureView(),
                            nTopOffset: a,
                            fnToggleCollapsed: this.MobileNavOpenSettings
                          }),
                        z.createElement(oa, {
                          nTopOffset: r,
                          bLargeMode: this.state.nScrollTop <= 0 && !$t()
                        })
                      ),
                      z.createElement(
                        S.a,
                        null,
                        z.createElement(ia, {
                          bShowFutureViewOnly: this.BShowFutureView(),
                          bShowUpdatesOnly: this.BShowUpdatesOnly(),
                          fnOnEventClick: this.OnEventClicked,
                          fnToggleSeeFuture: this.ToggleFutureView,
                          fnResetFilters: s,
                          nVisibleHeight: this.state.nVisibleHeight,
                          nScrollTop: this.state.nScrollTop,
                          nDisappearingHeaderHeight: e,
                          nDisappearingHeaderVisibleHeight: l,
                          nTotalBannerHeight:
                            this.state.nGroupHeaderHeight +
                            this.state.nLogInBannerHeight,
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
            Object(U.c)([s.a], e.prototype, "OnResize", null),
            Object(U.c)([s.a], e.prototype, "OnScroll", null),
            Object(U.c)([s.a], e.prototype, "MobileNavOpenSettings", null),
            Object(U.c)([s.a], e.prototype, "ToggleControlBarCollapsed", null),
            Object(U.c)([s.a], e.prototype, "OnControlBarChange", null),
            Object(U.c)([s.a], e.prototype, "CloseEventModal", null),
            Object(U.c)([s.a], e.prototype, "OnEventClicked", null),
            Object(U.c)([s.a], e.prototype, "ToggleFutureView", null),
            Object(U.c)([s.a], e.prototype, "ResetAllFilters", null),
            (e = u = Object(U.c)([r.a], e))
          );
        })(z.Component),
        ra = Object(i.i)(na),
        oa = Object(r.a)(function(e) {
          var n = Object(A.a)(),
            t = z.useState(!1),
            a = t[0],
            r = t[1];
          if (
            (z.useEffect(
              function() {
                n.BHasCollectionMetaData() &&
                  !D.c.GetClanEventModel(
                    n.GetCollectionMetaData().clan_event_gid
                  ) &&
                  (r(!0),
                  Object(U.b)(void 0, void 0, void 0, function() {
                    var t, a;
                    return Object(U.e)(this, function(e) {
                      switch (e.label) {
                        case 0:
                          return (
                            (t = n.GetCollectionMetaData()),
                            (a = g.a.InitFromClanID(t.clanid)),
                            [
                              4,
                              D.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                                a,
                                t.clan_event_gid,
                                0
                              )
                            ]
                          );
                        case 1:
                          return e.sent(), r(!1), [2];
                      }
                    });
                  }));
              },
              [n.GetKey(), n.BHasCollectionMetaData()]
            ),
            n.GetCollectionID())
          ) {
            var o,
              i,
              l = void 0,
              s = void 0;
            if (
              (!n.BHasCollectionMetaData() ||
                a ||
                ((o = D.c.GetClanEventModel(
                  n.GetCollectionMetaData().clan_event_gid
                )) &&
                  ((l = o.GetImageURLWithFallback(
                    "capsule",
                    Object(G.g)(Y.c.LANGUAGE),
                    N.c.capsule_main
                  )),
                  (s = o.GetSaleURL()))),
              !(i = (function(t, e, a, n) {
                if (!t) return null;
                var r = kt.find(function(e) {
                  return e.collection === t;
                });
                return r ? r.component(e, a, n) : null;
              })(n.GetCollectionID(), e.bLargeMode, l, s)))
            )
              return null;
            var c = Object(V.a)(Je.a.HubBanner, St.a.WideBanner);
            return z.createElement(
              "div",
              {
                style: { transform: "translateY(" + e.nTopOffset + "px)" },
                className: c
              },
              i
            );
          }
          if (n.BIsSaleCalendar()) {
            if (
              !(i = (function(e, t) {
                if (!e) return null;
                var a = D.c.GetClanEventModel(e);
                if (!a) return null;
                var n = Object(G.g)(Y.c.LANGUAGE);
                return z.createElement(bt, {
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
            c = Object(V.a)(Je.a.HubBanner, St.a.WideBanner);
            return z.createElement(
              "div",
              {
                style: { transform: "translateY(" + e.nTopOffset + "px)" },
                className: c
              },
              i
            );
          }
          if (n.BIsSingleSourceCalendar()) {
            var u = n.BIsSingleAppCalendar() ? n.GetSingleAppID() : void 0,
              d = n.BIsSingleGroupCalendar() ? n.GetSingleGroupID() : void 0,
              c = Object(V.a)(
                Je.a.HubBanner,
                St.a.WideBanner,
                e.bLargeMode && Je.a.LargeMode,
                e.bLargeMode && St.a.TallBanner
              );
            return z.createElement(
              "div",
              {
                style: { transform: "translateY(" + e.nTopOffset + "px)" },
                className: c
              },
              z.createElement(re.b, { appId: u, clanId: d, bShowRSSFeed: !0 })
            );
          }
          return null;
        }),
        ia = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.GetCurrentSectionLayout = function() {
              var n = 0;
              return Object(A.a)()
                .GetCalendarSections(this.props.bShowFutureViewOnly)
                .map(function(e) {
                  var t = Math.max(n, e.nTopOffset),
                    a = t + e.nRenderedHeight;
                  return {
                    section: e,
                    nTopOfSection: t,
                    nBottomOfSection: (n = a)
                  };
                });
            }),
            (t.prototype.RecordSectionRenderedPositioning = function(e, t, a) {
              e.nRenderedHeight != t && (e.nRenderedHeight = t),
                e.nTopOffset != a && (e.nTopOffset = a);
            }),
            (t.prototype.GetMergeEventsType = function() {
              return Object(A.a)().BIsSingleSourceCalendar()
                ? "none"
                : Object(A.a)().GetCollectionID()
                ? "samesource"
                : "full";
            }),
            (t.prototype.render = function() {
              var f = this,
                e = Object(A.a)(),
                t = this.props,
                E = t.bShowFutureViewOnly,
                a = t.bShowUpdatesOnly,
                y = t.fnOnEventClick,
                S = t.fnToggleSeeFuture,
                n = t.fnResetFilters,
                r = t.nVisibleHeight,
                C = t.nScrollTop,
                O = t.nDisappearingHeaderVisibleHeight,
                o = t.nDisappearingHeaderHeight,
                w = t.nTotalBannerHeight,
                i = e.GetCalendarSections(E);
              if (0 == i.length) return null;
              var T = $t(),
                l = e.m_visibilityStore.BAreAllEventsHidden(),
                I = C + O,
                j = C + r,
                k = !0,
                s = Y.c.EREALM === b.e.k_ESteamRealmChina,
                c = e.m_visibilityStore.BIsGameSourceAllowed(B.c.k_ECurator),
                u =
                  !s && c && Object(A.a)().BIsGlobalCalendar() && Y.i.accountid,
                D = !s && u && !E,
                L = void 0,
                d = l
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
                        u = a.nRenderedHeight,
                        d = Math.max(0, I - r),
                        p = Math.max(0, n - j),
                        m = f.props.nVisibleHeight > Math.max(d, p),
                        h = n < I,
                        v = r - C - w,
                        _ = h ? Math.min(O - 1, v) : -1,
                        b = Object(V.a)(
                          Je.a.PastSection,
                          k && Je.a.DarkerBackground
                        );
                      0 < u &&
                        ((k = !k), D && 1e3 <= n && void 0 === L && (L = t));
                      var g = !E && c;
                      return z.createElement(pa, {
                        key: o,
                        bShouldRenderContents: m,
                        bRenderStickyHeader: h,
                        nExtraHeaderOffset: _,
                        strSectionLabel: i,
                        rtSectionStart: l,
                        rtSectionEnd: s,
                        strSectionClassname: b,
                        bUseHorizontalLayout: g,
                        fnOnSeeFutureClick: S,
                        bShowEarliestFirst: E || g,
                        nInitialHeight: u,
                        fnReportPositioning: function(e, t) {
                          return f.RecordSectionRenderedPositioning(a, e, t);
                        },
                        fnOnEventClick: y,
                        bSuppressHoverEffects: T,
                        strMergeEvents: f.GetMergeEventsType()
                      });
                    });
              void 0 !== L &&
                d.splice(
                  L,
                  0,
                  z.createElement(wt, {
                    key: "CuratorSuggestions",
                    bCanDismiss: !0
                  })
                );
              var p = i[0].rtSectionStart,
                m = Object(A.a)().GetCurrentlyLoadedEventCount(0, p),
                h = Object(A.a)().GetCurrentlyLoadedEventCount(p),
                v =
                  m &&
                  (m.nCount
                    ? "#EventCalendar_NoMorePastEvents"
                    : "#EventCalendar_NoPastEvents"),
                _ =
                  n &&
                  z.createElement(
                    x.a,
                    {
                      key: "link-back",
                      toolTipContent: Object(q.f)(
                        "#EventCalendar_ResetFilters_ttip"
                      ),
                      className: Object(V.a)(Je.a.BackToThePast, Je.a.NoCount),
                      onClick: n
                    },
                    Object(q.f)("#EventCalendar_ResetFiltersButton")
                  );
              return (
                E
                  ? ((v =
                      h &&
                      (h.nCount
                        ? "#EventCalendar_NoMoreFutureEvents"
                        : "#EventCalendar_NoFutureEvents")),
                    (_ =
                      m &&
                      z.createElement(
                        "div",
                        {
                          key: "link-back",
                          className: Je.a.BackToThePast,
                          onClick: S
                        },
                        Object(q.f)("#EventCalendar_PastEventsLink"),
                        z.createElement(
                          "span",
                          { className: Je.a.SeeAllCount },
                          m.nCount + (m.bIsComplete ? "" : "+")
                        )
                      )))
                  : a &&
                    (v =
                      m &&
                      (m.nCount
                        ? "#EventCalendar_NoMorePastUpdates"
                        : "#EventCalendar_NoPastUpdates")),
                z.createElement(
                  "div",
                  { className: Je.a.RowContainer },
                  z.createElement(
                    "div",
                    { className: Je.a.Rows },
                    z.createElement("div", {
                      className: Je.a.FutureSection,
                      key: "spacer",
                      style: { height: o }
                    }),
                    a &&
                      z.createElement(
                        "div",
                        { className: Je.a.UpdatePageBanner },
                        Object(q.f)("#EventCalendar_UpdatesViewHeader")
                      ),
                    d,
                    z.createElement(
                      "div",
                      {
                        key: "no-more-events",
                        className: Object(V.a)(Je.a.EndOfRows, Je.a.CalendarRow)
                      },
                      z.createElement(
                        "div",
                        { className: Je.a.NoMoreRows },
                        " ",
                        Object(q.f)(v),
                        " "
                      )
                    ),
                    u &&
                      z.createElement(wt, {
                        key: "CuratorSuggestions",
                        bCanDismiss: !1
                      }),
                    _
                  )
                )
              );
            }),
            Object(U.c)(
              [s.a],
              t.prototype,
              "RecordSectionRenderedPositioning",
              null
            ),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        la = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.rgCalendarItems[0].start_time,
                t = Object(A.a)().GetCurrentlyLoadedEventCount(e);
              return this.props.rgCalendarItems.length <= 1
                ? null
                : z.createElement(
                    "div",
                    {
                      key: "see-all-link",
                      className: Je.a.MobileSeeAllink,
                      onClick: this.props.fnOnSeeFutureClick
                    },
                    Object(q.f)("#EventCalendar_FutureEventsLink"),
                    z.createElement(
                      "span",
                      { className: Je.a.SeeAllCount },
                      t.nCount + (t.bIsComplete ? "" : "+")
                    )
                  );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        sa = (function(e) {
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
                    { className: Je.a.CalendarRow },
                    z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          Je.a.HorizontalTileContainer,
                          "HorizontalTileCtn"
                        )
                      },
                      z.createElement(
                        "div",
                        { className: Je.a.HorizontalTiles },
                        t.map(function(e) {
                          return z.createElement(Ve, {
                            key: "ht-" + e.unique_id,
                            calendarEvent: e,
                            partnerEventStore: D.c,
                            fnOnClicked: a,
                            bSuppressHoverEffects: r,
                            mode: 1 < t.length ? "upcoming" : "wide",
                            bHideGameTitle:
                              Object(A.a)().BIsSingleSourceCalendar() &&
                              Object(A.a)().BEventMatchCalendarSingleSource(e)
                          });
                        })
                      ),
                      z.createElement(la, {
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
        ca = function(e) {
          var t = e.calendarItem,
            a = e.bSuppressHoverEffects,
            n = D.c.GetClanEventModel(t.unique_id);
          return n
            ? z.createElement(
                "div",
                { className: Je.a.EventListTitle },
                z.createElement(Fe, {
                  eventModel: n,
                  calendarEvent: t,
                  bSuppressHoverEffects: a
                })
              )
            : null;
        };
      (aa = ta = ta || {})[(aa.eCurators = 1)] = "eCurators";
      var ua,
        da,
        pa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_ref = z.createRef()), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.UpdatePositioning();
            }),
            (e.prototype.componentDidUpdate = function() {
              this.UpdatePositioning();
            }),
            (e.prototype.UpdatePositioning = function() {
              var e, t;
              this.m_ref.current &&
                ((e = this.m_ref.current.getBoundingClientRect().height),
                (t = this.m_ref.current.offsetTop),
                this.props.fnReportPositioning(e, t));
            }),
            Object.defineProperty(e.prototype, "cachedCalendarItems", {
              get: function() {
                var e = this;
                return Object(A.a)().GetCalendarItemsInTimeRange(
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
            (e.prototype.GenerateKeyFromItem = function(e, t) {
              return !(t.GetSource() & u.a.k_eSteam) &&
                !t.appid &&
                t.GetSource() & u.a.k_eCurator &&
                "full" === e
                ? ta.eCurators
                : t.clanid;
            }),
            (e.prototype.RenderEventList = function(e) {
              function o(e) {
                return z.createElement(
                  "div",
                  { key: e.unique_id, className: Je.a.CalendarRow },
                  z.createElement(Ve, {
                    calendarEvent: e,
                    partnerEventStore: D.c,
                    mode: "wide",
                    fnOnClicked: i,
                    bSuppressHoverEffects: l,
                    bHideGameTitle:
                      Object(A.a)().BIsSingleSourceCalendar() &&
                      Object(A.a)().BEventMatchCalendarSingleSource(e)
                  })
                );
              }
              var t = this.props,
                i = t.fnOnEventClick,
                l = t.bSuppressHoverEffects,
                s = t.strMergeEvents;
              if ("none" === s) return e.map(o);
              for (var c = new Map(), a = 0, n = e; a < n.length; a++) {
                var r,
                  u = n[a],
                  d = this.GenerateKeyFromItem(s, u),
                  p = c.get(d);
                p ? p.push(u) : ((r = new Array()).push(u), c.set(d, r));
              }
              for (
                var m = new Array(), h = this, v = 0, _ = e;
                v < _.length;
                v++
              ) {
                !(function(t) {
                  var e,
                    a,
                    n = h.GenerateKeyFromItem(s, t),
                    r = c.get(n);
                  r.length < 3
                    ? m.push(o(t))
                    : r[0] === t &&
                      ((e =
                        n === ta.eCurators
                          ? Object(q.f)("#EventCalendar_GroupTitle_Curators")
                          : ""),
                      (a = !r.find(function(e) {
                        return e.clanid != t.clanid;
                      })),
                      m.push(
                        z.createElement(
                          "div",
                          {
                            key: t.unique_id,
                            className: Je.a.CalendarEventListRow
                          },
                          z.createElement(
                            "div",
                            { className: Je.a.CalendarEventListContainer },
                            z.createElement(zt, {
                              key: t.unique_id,
                              rgCalendarItems: r,
                              bSuppressHoverEffects: l,
                              fnOnEventClick: i,
                              bHideGameTitle: a,
                              strMultipleSourceTitle: e
                            })
                          )
                        )
                      ));
                })((u = _[v]));
              }
              return m;
            }),
            (e.prototype.RenderLoadingState = function() {
              var e = Object(A.a)().GetTimeEdgeForDirection(
                this.props.bShowEarliestFirst ? "forward" : "backward",
                void 0
              );
              return z.createElement(
                "div",
                { className: Je.a.Loading },
                z.createElement(X.a, { size: "xlarge", position: "center" }),
                e &&
                  z.createElement(
                    z.Fragment,
                    null,
                    z.createElement(
                      "div",
                      { className: Je.a.LoadingProgress },
                      Object(q.f)(
                        "#EventCalendar_LoadEventsProgress",
                        Number(
                          Object(A.a)().GetNumEventsLoaded()
                        ).toLocaleString(),
                        Object(q.g)(e)
                      )
                    ),
                    z.createElement(
                      "div",
                      { className: Je.a.AdjustFiltersText },
                      Object(q.f)("#EventCalendar_LoadEventsFilters")
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
                u = e.fnOnEventClick,
                d = e.bSuppressHoverEffects;
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
                      Je.a.GroupHeader,
                      Je.a.CalendarRow,
                      a && Je.a.HeaderAtTop
                    )
                  },
                  z.createElement(
                    "div",
                    { className: Je.a.GroupHeaderTitle },
                    z.createElement("span", null, r),
                    z.createElement("div", { className: Je.a.GroupHeaderLine }),
                    i &&
                      3 < m.length &&
                      z.createElement(
                        "div",
                        { className: Je.a.SeeAllLink, onClick: l },
                        Object(q.f)("#EventCalendar_FutureEventsLink"),
                        z.createElement(
                          "span",
                          { className: Je.a.SeeAllCount },
                          m.length + (h ? "" : "+")
                        )
                      )
                  )
                ),
                _ =
                  !M.a.bRequireAllEventsLoadedInTimeBlock ||
                  h ||
                  (i && 3 <= m.length),
                b = null;
              return (
                _ &&
                  (b = i
                    ? z.createElement(sa, {
                        rgCalendarItems: m.slice(0, 3),
                        fnOnEventClick: u,
                        fnOnSeeFutureClick: l,
                        bSuppressHoverEffects: d
                      })
                    : this.RenderEventList(m)),
                z.createElement(
                  "div",
                  { ref: this.m_ref, className: o },
                  v,
                  b,
                  !_ && !i && this.RenderLoadingState()
                )
              );
            }),
            Object(U.c)([m.n], e.prototype, "cachedCalendarItems", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        ma = function(e) {
          return z.createElement(
            "div",
            {
              className: Object(V.a)(
                Je.a.LogInFeedRow,
                !e.bLargeMode && Je.a.LogInSmallMode
              ),
              style: { transform: "translateY(" + e.nTopOffset + "px)" }
            },
            z.createElement(
              "div",
              { className: Je.a.LogInFeedTitle },
              Object(q.f)("#EventCalendar_SignIn_Title")
            ),
            z.createElement(
              "button",
              { onClick: Qt.a, className: Je.a.LogInButton },
              Object(q.f)("#Login_SignIn")
            ),
            z.createElement(
              "div",
              { className: Je.a.LogInFeedText },
              Object(q.f)("#EventCalendar_SignIn_Text")
            )
          );
        },
        ha = a("AXHe"),
        va = a("Cs6D"),
        _a = a("3+zv"),
        ba = a("f0Wu"),
        ga = ["mod_reviewed", "auto_migrated"],
        fa = (function() {
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
                a = Wt.a.parse(e.substring(1)),
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
                o = ga.map(function(e) {
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
                  (l = [{ label: Object(Oe.b)(i), value: i }]))
                : a.eventtype &&
                  ((l = []),
                  a.eventtype.forEach(function(e) {
                    var t = Number.parseInt(e);
                    l.push({ label: Object(Oe.b)(t), value: t });
                  }));
              var s = void 0;
              "string" == typeof a.filterDate &&
                0 < a.filterDate.length &&
                (s = ba.unix(Number(a.filterDate)));
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
            Object(U.c)([m.C], e.prototype, "selectedTags", void 0),
            Object(U.c)([m.C], e.prototype, "excludedTags", void 0),
            Object(U.c)([m.C], e.prototype, "filterDate", void 0),
            Object(U.c)([m.C], e.prototype, "filterDateAsString", void 0),
            Object(U.c)([m.C], e.prototype, "eventsToLoadPerPaging", void 0),
            Object(U.c)([m.C], e.prototype, "filterEventTypes", void 0),
            Object(U.c)(
              [m.C],
              e.prototype,
              "bOrderByVisibilityStartTime",
              void 0
            ),
            Object(U.c)([m.C], e.prototype, "bUseCustomQuery", void 0),
            e
          );
        })();
      ((da = ua = ua || {})[(da.k_ModReviewed = 0)] = "k_ModReviewed"),
        (da[(da.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
        (da[(da.k_ChangeEventType = 2)] = "k_ChangeEventType"),
        (da[(da.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
        (da[(da.k_ModReReviewed = 4)] = "k_ModReReviewed");
      function Ea(e) {
        var t = z.useState(!0),
          a = t[0],
          n = t[1],
          r = e.eventModel.GetAllTags().filter(function(e) {
            return Sa.IsAuditAction(e);
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
            var t = new Sa();
            t.FromString(e),
              s.push(
                z.createElement(
                  "div",
                  { key: c.GID + e },
                  (function(e) {
                    var t = Object(q.k)(e.m_rtWhen),
                      a = z.createElement(ja, {
                        locToken: "#EventModTile_Moderator",
                        accountID: e.m_moderator
                      });
                    switch (e.m_action) {
                      case ua.k_ModReviewed:
                        return z.createElement(
                          "div",
                          { className: Ia.ModeratorAuditActionCtn },
                          Object(q.n)(
                            "#EventModTile_Action_Reviewed",
                            z.createElement("span", null, t),
                            a
                          )
                        );
                      case ua.k_ModUnreviewed:
                        return z.createElement(
                          "div",
                          { className: Ia.ModeratorAuditActionCtn },
                          Object(q.n)(
                            "#EventModTile_Action_UnReviewed",
                            z.createElement("span", null, t),
                            a
                          )
                        );
                      case ua.k_ChangeEventType:
                        return z.createElement(
                          "div",
                          { className: Ia.ModeratorAuditActionCtn },
                          Object(q.n)(
                            "#EventModTile_Action_NewEventType",
                            z.createElement("span", null, t),
                            a,
                            Object(Oe.b)(e.m_newEventType)
                          )
                        );
                      case ua.k_UpdateSeasonTags:
                        return z.createElement(
                          "div",
                          { className: Ia.ModeratorAuditActionCtn },
                          Object(q.n)(
                            "#EventModTile_Action_SeasonTagUpdate",
                            z.createElement("span", null, t),
                            a,
                            e.m_newTagAdded
                          )
                        );
                      default:
                        return z.createElement(
                          "div",
                          { className: Ia.ModeratorAuditActionCtn },
                          e.ToModString
                        );
                    }
                  })(t)
                )
              );
          }),
          s);
        return z.createElement(
          "div",
          null,
          z.createElement(
            "h4",
            null,
            Object(q.f)("#EventModTile_Action_Title")
          ),
          u,
          i &&
            z.createElement(
              "a",
              {
                onClick: function() {
                  return n(!1);
                }
              },
              Object(q.f)("#EventModTile_Action_More", o - 3)
            ),
          Boolean(!i && 3 < o) &&
            z.createElement(
              "a",
              {
                onClick: function() {
                  return n(!0);
                }
              },
              Object(q.f)("#EventModTile_Action_Hide")
            )
        );
      }
      var ya = "ModAct",
        Sa = (function() {
          function e() {}
          return (
            (e.prototype.ToModString = function() {
              var e =
                ya +
                "_" +
                this.m_moderator +
                "_" +
                Math.floor(this.m_rtWhen) +
                "_" +
                this.m_action;
              switch (this.m_action) {
                case ua.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case ua.k_UpdateSeasonTags:
                  e += "_" + this.m_newTagAdded;
              }
              return e;
            }),
            (e.prototype.FromString = function(e) {
              var t = e.split("_");
              if (!t || t[0] !== ya) return !1;
              switch (
                ((this.m_moderator = Number(t[1])),
                (this.m_rtWhen = Number(t[2])),
                (this.m_action = Number(t[3])),
                this.m_action)
              ) {
                case ua.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case ua.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function(e) {
              return (
                (this.m_moderator = Y.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = ua.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function(e) {
              return (
                (this.m_moderator = Y.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? ua.k_ModReviewed : ua.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function(e) {
              return (
                (this.m_moderator = Y.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? ua.k_ModReReviewed : ua.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function(e) {
              return e.startsWith(ya);
            }),
            (e.prototype.SetUpdateSeasonalTags = function(e) {
              return (
                (this.m_moderator = Y.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = ua.k_UpdateSeasonTags),
                (this.m_newTagAdded = e),
                this
              );
            }),
            e
          );
        })(),
        Ca = (function() {
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
                Object(U.b)(this, void 0, void 0, function() {
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
                            y.a.get(t, {
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
                          (i = Object(se.a)(o)),
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(U.e)(this, function(e) {
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
                          y.a.post(t, n, {
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
                          Y.c.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (a = new FormData()).append("sessionid", Y.c.SESSIONID),
                        a.append("clan_accountid", "" + r.GetAccountID()),
                        a.append("gid_event", o),
                        a.append("new_event_type", "" + i),
                        [
                          4,
                          y.a.post(t, a, {
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
            Object(U.c)([m.C], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(U.c)([m.C], e.prototype, "m_listEvents", void 0),
            Object(U.c)([m.k], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })(),
        Oa = (function() {
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
                Object(U.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n = this;
                  return Object(U.e)(this, function(e) {
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
                            showUnpublished: void 0 === v ? void 0 : v,
                            term: void 0 === h ? void 0 : h
                          }),
                          [
                            4,
                            y.a.get(t, {
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
            Object(U.c)([m.C], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(U.c)([m.C], e.prototype, "m_listEvents", void 0),
            Object(U.c)([m.k], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })(),
        wa = a("T27q"),
        Ta = a("Qcoi"),
        Ia = a("zrk3"),
        ja = Object(r.a)(function(e) {
          var t = e.accountID,
            a = e.locToken,
            r = g.a.InitFromAccountID(t).ConvertTo64BitString(),
            o = z.useRef(null),
            n = z.useState(Ta.a.GetProfile(r)),
            i = n[0],
            l = n[1],
            s = z.useState(!Ta.a.BHasProfile(r)),
            c = s[0],
            u = s[1];
          z.useEffect(
            function() {
              return (
                Ta.a.BHasProfile(r) ||
                  (u(!0),
                  Object(U.b)(void 0, void 0, void 0, function() {
                    var t, a, n;
                    return Object(U.e)(this, function(e) {
                      switch (e.label) {
                        case 0:
                          (t = y.a.CancelToken.source()),
                            (o.current = t.cancel),
                            (e.label = 1);
                        case 1:
                          return (
                            e.trys.push([1, 3, , 4]),
                            [4, Ta.a.LoadProfiles([r])]
                          );
                        case 2:
                          return e.sent(), [3, 4];
                        case 3:
                          return (
                            (a = e.sent()),
                            (n = Object(se.a)(a)),
                            console.error(
                              "EventModerationTile profile load : " +
                                n.strErrorMsg,
                              n
                            ),
                            [3, 4]
                          );
                        case 4:
                          return (
                            t.token.reason || (l(Ta.a.GetProfile(r)), u(!1)),
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
            "https://steamsupport.valvesoftware.com/account/overview/" + r;
          return z.createElement(
            "div",
            null,
            Object(q.n)(
              a,
              z.createElement(
                "a",
                { href: d, target: Y.c.IN_CLIENT ? void 0 : "_blank" },
                Boolean(i)
                  ? z.createElement(z.Fragment, null, i.persona_name)
                  : z.createElement(
                      z.Fragment,
                      null,
                      c && z.createElement(X.a, { size: "small" }),
                      z.createElement("span", null, t)
                    )
              )
            )
          );
        }),
        ka = a("BpzF"),
        Da = a("UxvL"),
        La = a("E9gz"),
        Ga = a("f0Wu"),
        Na = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0
        },
        Aa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = y.a.CancelToken.source()),
              (e.m_refScroll = z.createRef()),
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
            Object(U.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.setState(
                { bInfiniteScrollLoading: !0 },
                this.LoadMoreModerationEvents
              ),
                window.addEventListener("scroll", this.OnScroll, !0),
                fa.Get().Init(this.props.history.location.search);
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
                o = fa.Get();
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
                        Wt.a.stringify({
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
              var t = Object(se.a)(e);
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
              var t,
                e,
                a,
                n,
                r = this;
              this.ClearTimer(),
                this.state.bInfiniteScrollLoading &&
                  ((t = fa.Get()).bUseCustomQuery
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
                      Oa.Get().LoadPartnerEventForQueryIncremental(
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
                    : Ca.Get().LoadPartnerEventForModerationIncremental(
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
                (fa.Get().bUseCustomQuery
                  ? Oa.Get().GetAllSolrEvents()
                  : Ca.Get().GetAllSolrEvents()
                ).forEach(function(e) {
                  t.push(
                    z.createElement(xa, { solrData: e, key: e.unique_id })
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
                Ca.Get().ClearAllSolrEvents(),
                Oa.Get().ClearAllSolrEvents(),
                this.setState(
                  Object(U.a)({}, Na),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.render = function() {
              var e = this.RenderTiles(),
                t = fa.Get();
              return z.createElement(
                "div",
                { className: La.ModerationContainer, ref: this.m_refScroll },
                z.createElement(
                  "div",
                  null,
                  z.createElement(
                    "h2",
                    null,
                    Object(q.f)("#EventModeration_Title")
                  ),
                  z.createElement(
                    S.a,
                    null,
                    z.createElement(
                      "div",
                      { className: Object(V.a)(J.a.FlexRowContainer) },
                      z.createElement(Ma, {
                        fnRequireRefetchEvents: this.RefetchAllEventTiles
                      }),
                      Boolean(t.bUseCustomQuery) &&
                        z.createElement(Ra, {
                          fnRequireRefetchEvents: this.RefetchAllEventTiles
                        })
                    )
                  )
                ),
                z.createElement(S.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  z.createElement(X.a, {
                    position: "center",
                    size: "medium",
                    string: Object(q.f)("#Loading")
                  })
              );
            }),
            Object(U.c)([s.a], e.prototype, "HandleError", null),
            Object(U.c)(
              [s.a],
              e.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(U.c)([s.a], e.prototype, "LoadMoreModerationEvents", null),
            Object(U.c)(
              [s.a],
              e.prototype,
              "UpdateQueryParametersAndLoadMoreEvents",
              null
            ),
            Object(U.c)([s.a], e.prototype, "OnScroll", null),
            Object(U.c)([s.a], e.prototype, "RefetchAllEventTiles", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Ba = Object(i.i)(Aa),
        Ma = Object(r.a)(function(e) {
          var a = fa.Get(),
            t = e.fnRequireRefetchEvents;
          return z.createElement(
            z.Fragment,
            null,
            z.createElement(
              "div",
              { className: La.FilterContainer },
              z.createElement(
                x.a,
                {
                  toolTipContent: Object(q.f)(
                    "#EventModeration_ShowCustomFilter_ttip"
                  )
                },
                z.createElement(C.e, {
                  label: Object(q.f)("#EventModeration_ShowCustomFilter"),
                  checked: a.bUseCustomQuery,
                  onChange: function(e) {
                    (a.bUseCustomQuery = e), t();
                  }
                })
              )
            ),
            z.createElement(
              "div",
              { className: La.FilterContainer },
              z.createElement(
                "label",
                { htmlFor: "EventPerLoad" },
                Object(q.f)("#EventModeration_PerPageLoad")
              ),
              z.createElement(
                "div",
                null,
                z.createElement("input", {
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
        Ra = Object(r.a)(function(e) {
          var a = fa.Get(),
            n = e.fnRequireRefetchEvents,
            t = b.d.map(function(e) {
              return { value: e, label: Object(Oe.b)(e) };
            }),
            r = _a.a.map(function(e) {
              return { value: e, label: e };
            }),
            o = {
              option: function(e) {
                return Object(U.a)(Object(U.a)({}, e), { color: "#444444" });
              }
            };
          return z.createElement(
            z.Fragment,
            null,
            z.createElement(
              "div",
              { className: La.FilterContainer },
              z.createElement(
                "span",
                null,
                Object(q.f)("#EventModeration_FilterByTag")
              ),
              z.createElement(va.a, {
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
            z.createElement(
              "div",
              { className: La.FilterContainer },
              z.createElement(
                "span",
                null,
                Object(q.f)("#EventModeration_FilterExcludeByTag")
              ),
              z.createElement(va.a, {
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
            z.createElement(
              "div",
              { className: La.FilterContainer },
              z.createElement(
                "span",
                null,
                Object(q.f)("#EventModeration_FilterToType")
              ),
              z.createElement(va.a, {
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
            z.createElement(
              "div",
              { className: La.FilterContainer },
              z.createElement(
                "span",
                null,
                Object(q.f)("#EventModeration_FilterToDate")
              ),
              z.createElement(ha, {
                timeFormat: !1,
                onChange: function(e) {
                  if ("string" == typeof e) {
                    var t = Ga(e, "M/D/YYYY", !0);
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
                    Ga.unix(t.getTime() / 1e3 + 86400)
                      .hour(0)
                      .seconds(0)
                      .minute(0)
                      .unix()
                  );
                },
                inputProps: {
                  placeholder: Object(q.f)("#EventModeration_PickDatee"),
                  className: La.TimeWidth
                }
              })
            ),
            z.createElement(
              "div",
              { className: La.FilterContainer },
              z.createElement("input", {
                type: "checkbox",
                id: "VisibilityStart",
                checked: a.bOrderByVisibilityStartTime,
                onChange: function(e) {
                  (a.bOrderByVisibilityStartTime = e.currentTarget.checked),
                    n();
                }
              }),
              z.createElement(
                "label",
                { htmlFor: "VisibilityStart" },
                Object(q.f)("#EventModeration_OrderByFirstVisible")
              )
            )
          );
        }),
        xa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingEvent: !D.c.BHasClanEventModel(
                  e.props.solrData.unique_id
                ),
                bShowAsModal: !1,
                bSavingModeration: !1
              }),
              (e.m_cancelSignal = y.a.CancelToken.source()),
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
              D.c.BHasClanEventModel(n) ||
                ((e = Date.now() / 1e3),
                D.c
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new g.a(t.clan_steamid),
                    n,
                    e
                  )
                  .then(function() {
                    return a.setState({ bLoadingEvent: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(se.a)(e);
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
                D.c.BHasClanEventModel(e) &&
                this.setState({ bShowAsModal: !0 });
            }),
            (e.prototype.HideModalEvent = function() {
              this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
            }),
            (e.prototype.OnModeratedChanged = function(e) {
              var t, a, n, r;
              this.state.bSavingModeration ||
                ((t = this.props.solrData.unique_id),
                (a = D.c.GetClanEventModel(t)),
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
                var t, a, n, r, o, i, l, s, c, u;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props.solrData),
                        (a = t.unique_id),
                        (n = D.c.GetClanEventModel(a)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (r = new Array()),
                        (o = new Array()),
                        (i =
                          n.BHasTag("mod_reviewed") &&
                          !n.BHasTag("mod_require_rereview")),
                        (l = new Sa().SetReviewAction(!i)),
                        i
                          ? r.push("mod_require_rereview")
                          : (r.push("mod_reviewed"),
                            o.push("mod_require_rereview"),
                            n.BHasTag("mod_require_rereview") &&
                              l.SetReReviewAction(!i)),
                        [
                          4,
                          Ca.Get().UpdateTagsOnPartnerEvent(
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
                        (u = Object(se.a)(c)),
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
                a = D.c.GetClanEventModel(t.unique_id);
              Object(l.d)(
                z.createElement(za, { eventModel: a }),
                Object(Z.m)(e)
              );
            }),
            (e.prototype.OnUpdateSeasonalTag = function(e) {
              var t = this.props.solrData,
                a = D.c.GetClanEventModel(t.unique_id);
              Object(l.d)(
                z.createElement(Ua, { eventModel: a }),
                Object(Z.m)(e)
              );
            }),
            (e.prototype.render = function() {
              var e = this.props.solrData,
                t = e.unique_id,
                a = Number(e.appid),
                n = Object(b.f)(Y.c.LANGUAGE),
                r = D.c.GetClanEventModel(t);
              if (r) {
                if (this.state.bShowAsModal)
                  return z.createElement(
                    K.h,
                    { className: La.StoreHeaderAdjust },
                    z.createElement(
                      "div",
                      null,
                      z.createElement(wa.b, {
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
                      ? z.createElement(
                          z.Fragment,
                          null,
                          z.createElement(Da.a, { rgSources: o }),
                          i &&
                            z.createElement(
                              "div",
                              { className: La.NoCapsule },
                              Object(q.f)("#EventModTile_FallbackImageText")
                            )
                        )
                      : z.createElement(
                          "div",
                          { className: La.NoCapsule },
                          Object(q.f)("#EventModTile_NoCapsule")
                        );
              } else l = Object(q.f)("#Loading");
              var s = e.hidden
                  ? e.published
                    ? Object(q.f)("#EVentModTile_State_Staged")
                    : Object(q.f)("#EVentModTile_State_Draft")
                  : Object(q.f)("#EVentModTile_State_Published"),
                c = r ? r.type : Number(e.event_type);
              return z.createElement(
                S.a,
                null,
                z.createElement(
                  "div",
                  { className: La.Tile },
                  z.createElement(
                    "div",
                    { className: La.TileCapsule, onClick: this.ShowModalEvent },
                    l
                  ),
                  z.createElement(
                    "div",
                    { className: La.TileDetails },
                    z.createElement(
                      "div",
                      { className: La.DetailsLeft },
                      z.createElement("div", null, s),
                      z.createElement(
                        "a",
                        {
                          href:
                            Y.c.COMMUNITY_BASE_URL +
                            "ogg/" +
                            a +
                            "/announcements/detail/" +
                            e.announcement_gid,
                          target: Y.c.IN_CLIENT ? void 0 : "_blank",
                          className: La.EventTitle
                        },
                        e.event_name
                      ),
                      z.createElement(
                        "div",
                        {
                          className: Object(V.a)(
                            1 == c ? La.TileEventOtherType : ""
                          )
                        },
                        r ? r.GetCategoryAsString() : e.event_type
                      ),
                      this.state.bLoadingEvent &&
                        z.createElement(X.a, {
                          size: "small",
                          string: Object(q.f)("#Loading")
                        }),
                      z.createElement(ja, {
                        accountID: Number(e.creator_accountid),
                        locToken: "#EventModTile_Author"
                      }),
                      Boolean(
                        e.updator_accountid &&
                          0 < Number(e.updator_accountid) &&
                          e.updator_accountid != e.creator_accountid
                      ) &&
                        z.createElement(ja, {
                          accountID: Number(e.updator_accountid),
                          locToken: "#EventModTile_Updator"
                        }),
                      z.createElement(Pa, {
                        appid: a,
                        clanSteamID: new g.a(e.clan_steamid)
                      })
                    ),
                    r &&
                      z.createElement(
                        z.Fragment,
                        null,
                        z.createElement(
                          "div",
                          { className: La.DetailsMiddle },
                          z.createElement(
                            "div",
                            { className: La.ModeratedFlagCtn },
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
                                z.createElement(X.a, { size: "small" }),
                              Boolean(!r.BHasTag("mod_reviewed")) &&
                                Object(q.f)("#EventModTile_Moderated_Review"),
                              Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ) && Object(q.f)("#EventModTile_Moderated"),
                              Boolean(r.BHasTag("mod_require_rereview")) &&
                                Object(q.f)("#EventModTile_Moderated_ReReview")
                            )
                          ),
                          z.createElement(
                            "button",
                            {
                              className: Object(V.a)(J.a.Button, La.Button),
                              onClick: this.OnChangeCategory
                            },
                            Object(q.f)("#EventModTile_ChangeEventType")
                          ),
                          r.BHasTag("halloween2019candidate") &&
                            z.createElement(
                              "button",
                              {
                                className: Object(V.a)(J.a.Button),
                                onClick: this.OnUpdateSeasonalTag
                              },
                              Object(q.f)("#EventModTile_SeasonalTag")
                            ),
                          z.createElement(Ea, { eventModel: r })
                        ),
                        z.createElement(
                          "div",
                          { className: La.DetailsRight },
                          z.createElement(ka.b, {
                            event: r,
                            stylesmodule: La,
                            nOverrideEndTime: r.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: r.GetStartTimeAndDateUnixSeconds()
                          }),
                          z.createElement(Fa, { event: r }),
                          z.createElement(Ha, { event: r })
                        )
                      )
                  )
                )
              );
            }),
            Object(U.c)([s.a], e.prototype, "ShowModalEvent", null),
            Object(U.c)([s.a], e.prototype, "HideModalEvent", null),
            Object(U.c)([s.a], e.prototype, "OnModeratedChanged", null),
            Object(U.c)([s.a], e.prototype, "ApplyModerationToggle", null),
            Object(U.c)([s.a], e.prototype, "OnChangeCategory", null),
            Object(U.c)([s.a], e.prototype, "OnUpdateSeasonalTag", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component);
      var Fa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bDownloadingImages: !1, nLocLanguages: 0 }),
              (e.m_cancelSignal = y.a.CancelToken.source()),
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
                for (var a = 0; a < e.length && a < 30; ++a)
                  e[a] && 0 < e[a].length && (t += 1);
              return t;
            }),
            (e.prototype.componentDidMount = function() {
              var a = this,
                e = this.props.event;
              D.c
                .LoadClanEventLocalizationFromAnnouncementGID(
                  e.clanSteamID,
                  e.AnnouncementGID
                )
                .then(function(e) {
                  a.m_cancelSignal.token.reason ||
                    a.setState({ nLocLanguages: e.length });
                })
                .catch(function(e) {
                  var t = Object(se.a)(e);
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
                { className: La.AnalysisCtn },
                z.createElement(
                  "div",
                  { className: La.TileTitle },
                  Object(q.f)("#EventModTile_Analysis")
                ),
                z.createElement(
                  "div",
                  null,
                  Object(q.f)("#EventModTile_Stats_Comments", e.nCommentCount)
                ),
                z.createElement(
                  "div",
                  null,
                  Object(q.f)("#EventModTile_Stats_VoteUp", e.nVotesUp)
                ),
                z.createElement(
                  "div",
                  null,
                  Object(q.f)("#EventModTile_Stats_VoteDown", e.nVotesDown)
                ),
                Boolean(t) &&
                  z.createElement(
                    "div",
                    { className: La.ArtHeader },
                    Object(q.f)("#EventModTile_ImageAnalysis_Header", t),
                    " "
                  ),
                Boolean(a) &&
                  z.createElement(
                    "div",
                    null,
                    Object(q.f)("#EventModTile_ImageAnalysis_Capsule", a),
                    " "
                  ),
                Boolean(n) &&
                  z.createElement(
                    "div",
                    { className: La.ArtSpotlight },
                    Object(q.f)("#EventModTile_ImageAnalysis_Spotlight", n),
                    " "
                  ),
                Boolean(r) &&
                  z.createElement(
                    "div",
                    null,
                    Object(q.f)("#EventModTile_ImageAnalysis_Broadcast", r),
                    " "
                  ),
                0 == o &&
                  z.createElement(
                    "div",
                    { className: La.AnalysisMissing },
                    Object(q.f)("#EventModTile_ImageAnalysis_None"),
                    " "
                  ),
                0 == this.state.nLocLanguages &&
                  z.createElement(X.a, {
                    size: "small",
                    string: Object(q.f)("#EventModTile_LoadingLocs")
                  }),
                0 < this.state.nLocLanguages &&
                  z.createElement(
                    "div",
                    null,
                    Object(q.f)(
                      "#EventModTile_Languages",
                      this.state.nLocLanguages
                    )
                  ),
                Boolean(i) &&
                  z.createElement(
                    "div",
                    null,
                    Object(q.f)("#EventModTile_Languages_Summary", i),
                    " "
                  ),
                Boolean(l) &&
                  z.createElement(
                    "div",
                    null,
                    Object(q.f)("#EventModTile_Languages_Subtitle", l),
                    " "
                  )
              );
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Pa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingAppInfo: !f.a.BIsAppidLoaded(e.props.appid)
              }),
              (e.m_cancelSignal = y.a.CancelToken.source()),
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
              f.a.BIsAppidLoaded(t) ||
                f.a
                  .EnsureStoreCapsuleInfoLoaded(t)
                  .then(function() {
                    a.m_cancelSignal.token.reason ||
                      a.setState({ bLoadingAppInfo: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(se.a)(e);
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
                return z.createElement(X.a, {
                  size: "small",
                  string: Object(q.f)("#EventModTile_AppInfoLoading")
                });
              var e = this.props,
                t = e.appid,
                a = e.clanSteamID;
              if (t) {
                var n = f.a.GetStoreCapsuleInfo(t).GetAppStoreData();
                return z.createElement(
                  "div",
                  { className: La.TileAppInfo },
                  z.createElement(
                    "div",
                    { className: La.TileAppInfoTitle },
                    z.createElement(
                      O.a,
                      { href: n.capsule_link },
                      z.createElement("img", {
                        className: La.TileAppInfoImage,
                        src: n.capsule
                      }),
                      z.createElement(
                        "div",
                        null,
                        Object(q.f)("#EventModTile_GameName", n.title)
                      )
                    )
                  ),
                  z.createElement(
                    "div",
                    null,
                    Object(q.f)("#EventModTile_ReleaseDate", n.release)
                  )
                );
              }
              if (a) {
                var r = a.GetAccountID(),
                  o = E.a.GetClanInfoByClanAccountID(r);
                if (o && o.is_curator)
                  return z.createElement(
                    "div",
                    { className: La.TileAppInfo },
                    z.createElement(
                      "div",
                      { className: La.TileAppInfoTitle },
                      z.createElement(
                        O.a,
                        { href: Y.c.STORE_BASE_URL + "/curator/" + r + "/" },
                        z.createElement("img", {
                          className: La.TileAppInfoImage,
                          src: o.avatar_full_url
                        }),
                        z.createElement(
                          "div",
                          null,
                          Object(q.f)("#EventModTile_CuratorName", o.group_name)
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
        Ha = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.render = function() {
              var e = this.props.event,
                t = Object(_a.d)(e),
                a = Object(_a.c)(e),
                n = Object(_a.e)(e),
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
                { className: La.VisibiltyCtn },
                z.createElement(
                  "div",
                  { className: La.TileTitle },
                  Object(q.f)("#EventModTile_Visibility")
                ),
                z.createElement(
                  "div",
                  null,
                  Object(q.f)(
                    "#EventModTile_Store_Visibility",
                    r
                      ? Object(q.f)("#WriteReview_Dialog_Yes")
                      : Object(q.f)("#WriteReview_Dialog_No"),
                    r
                      ? ""
                      : n
                      ? Object(q.f)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_store")
                      ? Object(q.f)("#EventModTime_Hidden_OptOut")
                      : Object(q.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                z.createElement(
                  "div",
                  null,
                  Object(q.f)(
                    "#EventModTile_LibraryHome_Visibility",
                    o
                      ? Object(q.f)("#WriteReview_Dialog_Yes")
                      : Object(q.f)("#WriteReview_Dialog_No"),
                    o
                      ? ""
                      : n
                      ? Object(q.f)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_overview")
                      ? Object(q.f)("#EventModTime_Hidden_OptOut")
                      : Object(q.f)("#EventModTime_Hidden_Moderator")
                  )
                ),
                z.createElement(
                  "div",
                  null,
                  Object(q.f)(
                    "#EventModTile_LibraryDetail_Visibility",
                    i
                      ? Object(q.f)("#WriteReview_Dialog_Yes")
                      : Object(q.f)("#WriteReview_Dialog_No"),
                    i
                      ? ""
                      : n
                      ? Object(q.f)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_detail")
                      ? Object(q.f)("#EventModTime_Hidden_OptOut")
                      : Object(q.f)("#EventModTime_Hidden_Moderator")
                  )
                )
              );
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        za = (function(t) {
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
              (e.m_cancelSignal = y.a.CancelToken.source()),
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
                var t, a, n, r, o, i, l, s, c, u;
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
                          Ca.Get().UpdatePartnerEventType(
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
                        (i = _a.o),
                        (l = []),
                        r.value.tags &&
                          r.value.tags.forEach(function(e) {
                            l.push(e);
                            var t = new Sa()
                              .SetUpdateSeasonalTags(e)
                              .ToModString();
                            l.push(t);
                          }),
                        [
                          4,
                          Ca.Get().UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.GetAnnouncementGID(),
                            l,
                            i,
                            new Sa().SetActionChangeEvent(o)
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
                        (u = Object(se.a)(c)),
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
                r = b.d
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
                  label: Object(q.f)("#PartnerEvent_Curator_Group_Members"),
                  value: {
                    eventType: 28,
                    tags: ["curator", "curator_group_members"]
                  }
                }),
                r.push({
                  label: Object(q.f)("#PartnerEvent_Curator_Public"),
                  value: { eventType: 28, tags: ["curator", "curator_public"] }
                }),
                r.unshift({
                  value: { eventType: 15, tags: ["halloween"] },
                  label: Object(q.f)("#EventEditor_Category_DLC_Halloween")
                }),
                r.unshift({
                  value: { eventType: 22, tags: ["halloween"] },
                  label: Object(q.f)("#PartnerEvent_22")
                }),
                r.unshift({
                  value: { eventType: 23, tags: ["halloween"] },
                  label: Object(q.f)("#PartnerEvent_23")
                }),
                r.unshift({
                  value: { eventType: 24, tags: ["halloween"] },
                  label: Object(q.f)("#PartnerEvent_24")
                }),
                r.unshift({
                  value: { eventType: 35, tags: ["halloween"] },
                  label: Object(q.f)("#PartnerEvent_35")
                }),
                z.createElement(
                  K.c,
                  {
                    strTitle: Object(q.f)("#EventModTile_ChangeEventType"),
                    strDescription: Object(q.f)(
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
                      { className: La.CategoryChangeDialog },
                      z.createElement("br", null),
                      this.state.bUpdating &&
                        z.createElement(X.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        z.createElement(
                          "div",
                          null,
                          Object(q.f)("#Chat_Settings_Error_ServerError"),
                          z.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      z.createElement(va.a, {
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
            Object(U.c)([s.a], e.prototype, "ChangeCategoryForEvent", null),
            Object(U.c)([s.a], e.prototype, "OnChangeSelection", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Ua = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                bAccept: e.props.eventModel.BHasTag("halloween2019"),
                bHorror: e.props.eventModel.BHasTag("horror"),
                bCute: e.props.eventModel.BHasTag("cute")
              }),
              (e.m_cancelSignal = y.a.CancelToken.source()),
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
                          Ca.Get().UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            t,
                            a,
                            new Sa().SetUpdateSeasonalTags(
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
                        (i = Object(se.a)(o)),
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
                K.c,
                {
                  strTitle: Object(q.f)("#EventModTile_SeasonalTag"),
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
                    { className: La.CategoryChangeDialog },
                    z.createElement("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance
                    }),
                    z.createElement(
                      "label",
                      { htmlFor: "Acceptance" },
                      Object(q.f)("#EventModTile_SeasonalTag_Desc")
                    ),
                    z.createElement(
                      "div",
                      null,
                      Object(q.f)("#EventModTile_SeasonalTag_Desc_Secondary")
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
                      z.createElement(X.a, { size: "small" }),
                    this.state.strErrorMsg &&
                      z.createElement(
                        "div",
                        null,
                        Object(q.f)("#Chat_Settings_Error_ServerError"),
                        z.createElement("br", null),
                        this.state.strErrorMsg
                      )
                  )
                )
              );
            }),
            Object(U.c)([s.a], e.prototype, "ChangeAcceptance", null),
            Object(U.c)([s.a], e.prototype, "ChangeHorror", null),
            Object(U.c)([s.a], e.prototype, "ChangeCute", null),
            Object(U.c)([s.a], e.prototype, "ApplyAction", null),
            e
          );
        })(z.Component),
        Wa = a("gOcu"),
        Va = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoadingEvent: !0 }),
              (e.m_cancelSignal = y.a.CancelToken.source()),
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
                      !a || D.c.BHasClanEventModel(a))
                        ? [3, 8]
                        : ((r = g.a.InitFromClanID(Number.parseInt(n))),
                          [
                            4,
                            D.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
                          [4, de.a.LoadAppLinkInfo(i)])
                        : [3, 6];
                    case 2:
                      return (
                        e.sent(),
                        this.setState({
                          rgAppIDs: i,
                          rgUnknownTypeAppIDs: l,
                          bLoadingApps: !1
                        }),
                        [4, f.a.BatchLoadAppCapsules(i)]
                      );
                    case 3:
                      return (
                        e.sent(),
                        this.setState({ bLoadingAssociatedDemoInfo: !1 }),
                        [4, Wa.a.Get().LoadAppIDsBatch(i, this.m_cancelSignal)]
                      );
                    case 4:
                      return (
                        e.sent(),
                        (c = new Array()),
                        Wa.a
                          .Get()
                          .GetAllDemoInfo()
                          .forEach(function(e) {
                            return c.push(e.demo_appid);
                          }),
                        [4, de.a.LoadAppLinkInfo(c)]
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
                return z.createElement(X.a, {
                  string:
                    Object(q.f)("#Loading") +
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
              de.a.GetMissingAppIDs().forEach(function(e, t) {
                a.push(
                  z.createElement(
                    "div",
                    { key: "missing: " + t },
                    z.createElement(
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
              de.a.GetAllLoadedAppLinks().forEach(function(e, t) {
                var a;
                n.has(t) ||
                  Wa.a.Get().BHasDemoAppID(t) ||
                  ((a = de.a.GetAppLinkInfo(t)),
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
                          href: Y.c.STORE_BASE_URL + "app/" + t + "/?beta=0",
                          target: "_blank"
                        },
                        "Store Page"
                      ),
                      " ",
                      z.createElement(
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
              f.a.GetAllAppInfos().forEach(function(e, t) {
                var a,
                  n = !1;
                e.BIsLoaded() &&
                  Wa.a.Get().BHasDemoAppID(t) &&
                  ((a = Wa.a.Get().GetDemoEventInfo(t)),
                  de.a.GetAppLinkInfo(a.demo_appid).coming_soon
                    ? ((c += 1), (n = !0))
                    : (u += 1)),
                  e.BIsLoaded() && e.GetAppStoreData().BHasDemoAppID()
                    ? ((i += 1), n && (d += 1))
                    : e.BIsLoaded() && Wa.a.Get().BHasDemoAppID(t)
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
                de.a.GetAllLoadedAppLinks().forEach(function(e) {
                  "demo" != e.type && (m += 1);
                }),
                z.createElement(
                  S.a,
                  null,
                  z.createElement(
                    "h1",
                    null,
                    e.GetNameWithFallback(Object(b.f)(Y.c.LANGUAGE))
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
                      Y.c.COUNTRY,
                      ":"
                    ),
                    " ",
                    m
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
                    de.a.GetNumMissingAppLinks(),
                    " "
                  ),
                  z.createElement(
                    "div",
                    null,
                    z.createElement("b", null, "Demo via DemoStore:"),
                    " ",
                    Wa.a.Get().GetNumDemos()
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
                    f.a.GetNumAppLinkLoaded(),
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
                    d
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
                    f.a.GetMissingAppIDs().size
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
                    z.createElement("b", null, "Released Demo: "),
                    u
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
        Za = new ((function() {
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
            Object(U.c)([m.C], e.prototype, "m_backfill", void 0),
            Object(U.c)([m.C], e.prototype, "m_mapEventGIDProcessed", void 0),
            Object(U.c)([m.C], e.prototype, "m_bBackfillInProgress", void 0),
            Object(U.c)([m.C], e.prototype, "m_nProcessed", void 0),
            Object(U.c)([m.C], e.prototype, "m_nSuccesses", void 0),
            Object(U.c)([m.C], e.prototype, "m_nFailures", void 0),
            Object(U.c)([m.C], e.prototype, "m_nWarning", void 0),
            Object(U.c)([m.C], e.prototype, "m_nSkipped", void 0),
            Object(U.c)([m.k], e.prototype, "StartBackfill", null),
            Object(U.c)([m.k], e.prototype, "CompleteBackfill", null),
            Object(U.c)([m.k], e.prototype, "CloseProgress", null),
            e
          );
        })())(),
        qa = a("vNkc"),
        Ya = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = y.a.CancelToken.source()),
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
                    var t = Object(se.a)(e);
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
              var r = Object(se.a)(t),
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
                    Za.CloseProgress(e, n))
                  : Za.CompleteBackfill("resize_image");
            }),
            (e.prototype.HandleResizeForImageType = function(d, p, m, h, v) {
              return Object(U.b)(this, void 0, void 0, function() {
                var t,
                  c,
                  a,
                  u = this;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = function(t) {
                        var a, n, r, o, i, l, s;
                        return Object(U.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return d[t] && 0 < d[t].length
                                ? ((a = d[t]),
                                  (n = N.a.GetExtensionTypeFromURL(a)),
                                  (r = new g.a(p.clan_steamid)),
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
                                Object(_a.j)(o.width, o.height, h)
                                ? [
                                    4,
                                    c.GetImageInfo(r, a, v).catch(function(e) {
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
                                (s = N.d.GetResizeDimension(h)),
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
                                              h,
                                              u.m_mapArtworkResizeSuccess.get(
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
                                      var t = Object(se.a)(e);
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
                      Za.StartBackfill("resize_image"), (t = 0), (e.label = 1);
                    case 1:
                      return Za.BIsBackkFillInProgress()
                        ? [
                            4,
                            Oa.Get()
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
                          Za.CompleteBackfill("resize_image"),
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
                                  (n = Za.CreateOrGetBackfillProgess(
                                    a.unique_id
                                  )),
                                  a.announcement_gid &&
                                  0 != a.announcement_gid.length
                                    ? [
                                        4,
                                        D.c
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
                                      Za.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                );
                              case 1:
                                return (e.sent(), n.bFailed)
                                  ? [2, "continue"]
                                  : (r = D.c.GetClanEventFromAnnouncementGID(
                                      a.announcement_gid
                                    ))
                                  ? n.bSucceeded ||
                                    n.bFailed ||
                                    n.bAlreadyProcessed
                                    ? ((n.bAlreadyProcessed = !0),
                                      Za.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                    : ((n.bAnalysing = !0),
                                      l.setState({
                                        strInfo:
                                          "Processing " +
                                          Za.GetBackfillGIDs().length +
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
                                    Za.CloseProgress(a.unique_id, n),
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
                                  Za.CloseProgress(a.unique_id, n),
                                  Za.BIsBackkFillInProgress()
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
                      return 5e3 < Za.m_nFailures
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
                0 < Za.m_nFailures &&
                  Za.GetBackfillGIDs().forEach(function(e) {
                    var t,
                      a = Za.GetEventBackfillProgress().get(e);
                    a &&
                      a.bFailed &&
                      ((t = D.c.GetClanEventModel(e)) &&
                        n.push(
                          z.createElement(
                            "div",
                            { key: e },
                            z.createElement(
                              me.c,
                              {
                                eventModel: t,
                                route: me.a.k_eView,
                                openNewWindow: !0
                              },
                              t.GetNameWithFallback(0)
                            ),
                            z.createElement(
                              "div",
                              { className: qa.Error },
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
                        return Za.CompleteBackfill("resize_image");
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
                  Za.m_nProcessed
                ),
                z.createElement(
                  "div",
                  null,
                  "Events Succeeded: ",
                  Za.m_nSuccesses
                ),
                z.createElement("div", null, "Events Warning: ", Za.m_nWarning),
                z.createElement("div", null, "Events Failed: ", Za.m_nFailures),
                z.createElement("div", null, "Events Skipped: ", Za.m_nSkipped),
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
                  z.createElement(X.a, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress"
                  })
              );
            }),
            Object(U.c)([s.a], e.prototype, "OnArtworkResizeBackfill", null),
            Object(U.c)([s.a], e.prototype, "BeginArtworkResize", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Qa = a("nWbB"),
        Ja = new ((function() {
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
                        (a = Object(Y.f)(t, "application_config"))
                          ? [3, 2]
                          : [
                              4,
                              y.a.get(
                                Y.c.STORE_BASE_URL + "actions/ajaxgetdiscounts",
                                {
                                  params: Object(U.a)(Object(U.a)({}, o), {
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
                        (r = e.sent()), console.error(Object(se.a)(r)), [3, 4]
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
                        : ((this.m_rgTopN = Object(Y.f)(
                            "top_n",
                            "application_config"
                          )),
                          this.m_rgTopN
                            ? [3, 2]
                            : [
                                4,
                                Ja.GetDiscounts({
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
                        : ((this.m_rgMyWishlistOnSale = Object(Y.f)(
                            "wishlist_onsale",
                            "application_config"
                          )),
                          this.m_rgMyWishlistOnSale
                            ? [3, 2]
                            : [
                                4,
                                y.a.get(
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t;
                return Object(U.e)(this, function(e) {
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
                                y.a.get(
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t;
                return Object(U.e)(this, function(e) {
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
                                y.a.get(
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t;
                return Object(U.e)(this, function(e) {
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
                                y.a.get(
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t;
                return Object(U.e)(this, function(e) {
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
                                y.a.get(
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(U.e)(this, function(e) {
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
                                y.a.get(t, { params: a, withCredentials: !0 })
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
            (e.prototype.GetSaleGamesByFlavor = function(h, v, _, b, g, f, E) {
              return (
                void 0 === f && (f = 0),
                void 0 === E && (E = void 0),
                Object(U.b)(this, void 0, void 0, function() {
                  var t, a, n, r, o, i, l, s, c, u, d, p, m;
                  return Object(U.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        if (
                          ((t = Boolean(E)) && ((b = "search"), (v = void 0)),
                          (a = this.GetFlavorCacheKey(
                            b,
                            v,
                            E,
                            _.AnnouncementGID
                          )),
                          !(n = this.m_mapSaleGameListsByFlavor.get(a)))
                        ) {
                          if (
                            ((r =
                              "browser_" +
                              b +
                              (v ? "_" + v : "_*") +
                              (t ? E : "")),
                            (o = Object(Y.f)(r, "application_config")),
                            this.ValidateDataGameByFlavor(o))
                          )
                            return (
                              (n = o),
                              this.m_mapSaleGameListsByFlavor.set(a, o),
                              [2, n.appids.slice(f, g)]
                            );
                          (n = {
                            appids: [],
                            solr_index: 0,
                            possible_has_more: !0
                          }),
                            this.m_mapSaleGameListsByFlavor.set(a, n);
                        }
                        return ((i = n.appids.length),
                        0 < (l = f + g - i) && n.possible_has_more)
                          ? ((s =
                              Y.c.STORE_BASE_URL +
                              (h
                                ? "saleaction/ajaxpreviewsaledynamicappquery"
                                : "saleaction/ajaxgetsaledynamicappquery")),
                            (c = {
                              cc: Y.c.COUNTRY,
                              l: Y.c.LANGUAGE,
                              clanAccountID: _.clanSteamID.GetAccountID(),
                              clanAnnouncementGID: _.AnnouncementGID,
                              flavor: b,
                              start: n.solr_index,
                              count: Math.max(l, 25),
                              tabuniqueid: v,
                              return_capsules: !0,
                              search: E
                            }),
                            [4, y.a.get(s, { params: c, withCredentials: h })])
                          : [3, 2];
                      case 1:
                        if (
                          200 != (u = e.sent()).status ||
                          !u.data ||
                          !u.data.appids
                        )
                          throw new Error("query failed, status=" + u.status);
                        for (d = 0, p = u.data.appids; d < p.length; d++)
                          (m = p[d]), n.appids.push(m);
                        (n.possible_has_more = u.data.possible_has_more),
                          (n.solr_index = u.data.solr_index),
                          u.data.app_info && de.a.AddAppLinks(u.data.app_info),
                          (e.label = 2);
                      case 2:
                        return (
                          this.m_mapSaleGameListsByFlavor.set(a, n),
                          [2, n.appids.slice(f, g)]
                        );
                    }
                  });
                })
              );
            }),
            e
          );
        })())(),
        Ka = new ((function() {
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (this.LazyInit(), this.m_bLoaded || !Y.i.logged_in)
                        ? [3, 2]
                        : ((t =
                            Y.c.STORE_BASE_URL +
                            "lunarnewyearmarket/ajaxgettokensummary"),
                          [4, y.a.get(t, { withCredentials: !0 })]);
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
            Object(U.c)([m.C], e.prototype, "m_mySummary", void 0),
            e
          );
        })())();
      window.g_SaleTokenPointStore = Ka;
      var Xa = new ((function() {
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
            return Object(U.b)(this, void 0, void 0, function() {
              var t, a;
              return Object(U.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = Y.c.STORE_BASE_URL + "saleaction/ajaxgetopendoor"),
                      [4, y.a.get(t, { withCredentials: !0 })]
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
            var t = M.a.GetTimeNowWithOverride();
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
                        [4, y.a.post(t, a, { withCredentials: !0 })]
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
                              l && Ka.AddPoints(100);
                          }),
                          [2, n.data.rewards])
                        : (console.error(Object(se.a)(n)), [3, 4]);
                    case 3:
                      return (
                        (r = e.sent()), console.error(Object(se.a)(r)), [3, 4]
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
          Object(U.c)([m.C], e.prototype, "m_userData", void 0),
          Object(U.c)(
            [m.C],
            e.prototype,
            "m_salePageBackgroundOverride",
            void 0
          ),
          Object(U.c)([m.C], e.prototype, "m_salePageBackgroundWEBM", void 0),
          Object(U.c)([m.C], e.prototype, "m_salePageBackgroundMP4", void 0),
          Object(U.c)([m.C], e.prototype, "m_storyImages", void 0),
          Object(U.c)([m.C], e.prototype, "m_strLastDoorOpenKey", void 0),
          e
        );
      })())();
      window.g_DoorStore = Xa;
      var $a = ["recent_events", "recent_tagged_events"],
        en = (function() {
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
              $a.forEach(function(e) {
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t;
                return Object(U.e)(this, function(e) {
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t;
                return Object(U.e)(this, function(e) {
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
              return Object(U.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n,
                  r,
                  o = this;
                return Object(U.e)(this, function(e) {
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
                        [4, y.a.get(t, { params: l, withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        1 == (a = e.sent()).data.success &&
                          Object(m.G)(function() {
                            o.AddAllRecentEvents(i, a.data.recent_events),
                              a.data.partnerevents &&
                                D.c.RegisterClanEvents(a.data.partnerevents),
                              a.data.app_info &&
                                de.a.AddAppLinks(a.data.app_info);
                          }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (n = e.sent()),
                        (r = Object(se.a)(n)),
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
            Object(U.c)([m.C], e.prototype, "m_rgRecentEvent", void 0),
            Object(U.c)([m.k], e.prototype, "Init", null),
            Object(U.c)([m.k], e.prototype, "AddAllRecentEvents", null),
            e
          );
        })(),
        tn = new ((function() {
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
        an = (function() {
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
                            y.a.get(
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
            Object(U.c)(
              [m.C],
              e.prototype,
              "m_mapMasterAppToBenefitApps",
              void 0
            ),
            e
          );
        })(),
        nn = a("qP7j"),
        rn = a.n(nn),
        on = new ((function() {
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
                          y.a.post(t, a, {
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
        ln = (function(a) {
          function l(e) {
            var t = a.call(this, e) || this;
            return (
              (t.m_cancelSignal = y.a.CancelToken.source()),
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
                  ? on
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
                Object(U.a)({ dialogState: "error" }, Object(se.a)(e))
              );
            }),
            (l.prototype.OnDeleteForumTopicFailureCallback = function(e) {
              this.setState(
                Object(U.a)(
                  { dialogState: "failed_thread_delete" },
                  Object(se.a)(e)
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
                r != G.h
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
                  var o = t.GetNameWithFallback(Object(G.g)(Y.c.LANGUAGE)),
                    i = t.BIsVisibleEvent()
                      ? "#EventDisplay_AreYouSure_Visible"
                      : "#EventDisplay_AreYouSure",
                    n = Object(q.f)(i, o),
                    a = this.OnDelete;
                  t.BHasForumTopicGID() &&
                    r.push(
                      z.createElement(
                        "div",
                        {
                          key: "WantToDeleteCmtThread",
                          className: rn.a.Padding
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
                          Object(q.f)("#EventDisplay_DeleteEvent_Comment")
                        )
                      )
                    );
                  break;
                case "waiting":
                  (n = Object(q.f)("#EventDisplay_DeleteEvent_InProgress")),
                    r.push(z.createElement(X.a, { key: "throbber" }));
                  break;
                case "error":
                  (n = Object(q.f)("#EventDisplay_DeleteEvent_Error")),
                    r.push(
                      z.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++l.m_uniqueError,
                          className: rn.a.ErrorStyles
                        },
                        this.state.strErrorMsg
                      )
                    );
                  break;
                case "failed_thread_delete":
                  (n = Object(q.f)(
                    "#EventDisplay_DeleteEvent_ForumTopicError"
                  )),
                    r.push(
                      z.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++l.m_uniqueError,
                          className: rn.a.ErrorStyles
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
                  (n = Object(q.f)("#EventDisplay_DeleteEvent_Success")),
                    this.props.onDeleteSuccessAndCloseDialog &&
                      (a = function() {
                        e.props.onDeleteSuccessAndCloseDialog(),
                          e.props.closeModal();
                      });
              }
              return z.createElement(
                K.c,
                {
                  strTitle: Object(q.f)("#EventDisplay_DeleteEvent"),
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
              [s.a],
              l.prototype,
              "OnDeleteEventSuccessCallback",
              null
            ),
            Object(U.c)(
              [s.a],
              l.prototype,
              "OnDeleteForumTopicSuccessCallback",
              null
            ),
            Object(U.c)(
              [s.a],
              l.prototype,
              "OnDeleteEventFailureCallback",
              null
            ),
            Object(U.c)(
              [s.a],
              l.prototype,
              "OnDeleteForumTopicFailureCallback",
              null
            ),
            Object(U.c)([s.a], l.prototype, "SetToWaiting", null),
            Object(U.c)([s.a], l.prototype, "OnDelete", null),
            Object(U.c)([s.a], l.prototype, "OnChangeDeleteForum", null),
            l
          );
        })(z.Component),
        sn = a("6eA3"),
        cn = a.n(sn),
        un = (function(t) {
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
                z.createElement(ln, {
                  eventModel: this.props.eventModel,
                  onDeleteSuccessAndCloseDialog: this
                    .OnDeleteSuccessAndComplete,
                  partnerEventStore: this.props.partnerEventStore
                }),
                Object(Z.m)(e)
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
                return Object(me.j)(n, me.a.k_eCommunityAdminPage);
              var l = W.a.Get().GetPartnerEventPermissions(n.clanSteamID),
                s = n.visibility_state == D.b.k_EEventStateVisible,
                c = n.visibility_state == D.b.k_EEventStateStaged;
              if (l.can_edit || l.support_user) {
                var u = [];
                if (void 0 !== this.state.nMaxSaleDayIndex)
                  for (var d = 0; d <= this.state.nMaxSaleDayIndex; ++d)
                    u.push({
                      label: Object(q.f)("#SalePage_Admin_SaleEventDay", d + 1),
                      data: d
                    });
                var p = Object(Y.e)(),
                  m = "community" == p,
                  h = "store" == p;
                return z.createElement(
                  S.a,
                  null,
                  z.createElement(
                    "div",
                    { className: sn.DisplayAdminPanel },
                    z.createElement(
                      "span",
                      { className: sn.DisplayAdminPanel_Title },
                      Object(q.f)("#EventDisplay_Admin_Title")
                    ),
                    z.createElement(
                      "div",
                      { className: sn.DisplayAdminPanel_ctn },
                      a,
                      a &&
                        z.createElement(
                          "span",
                          { className: sn.DisplayAdminPanel_Spacer },
                          " "
                        ),
                      z.createElement(
                        me.c,
                        {
                          eventModel: n,
                          route: me.a.k_eCommunityEdit,
                          openNewWindow: i,
                          className: Object(V.a)(Q.Button, sn.AdminButton)
                        },
                        Object(q.f)("#EventEditor_Edit")
                      ),
                      o &&
                        z.createElement(
                          "span",
                          {
                            className: Q.Button + " " + sn.AdminButton,
                            onClick: this.OnDeleteVerifyRequest
                          },
                          Object(q.f)("#EventDisplay_DeleteEvent")
                        ),
                      !s &&
                        z.createElement(
                          z.Fragment,
                          null,
                          z.createElement(
                            me.c,
                            {
                              eventModel: n,
                              route: me.a.k_eCommunityPublish,
                              openNewWindow: i,
                              className: Object(V.a)(Q.Button, sn.AdminButton)
                            },
                            Object(q.f)(
                              c
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish"
                            )
                          )
                        ),
                      z.createElement(
                        me.c,
                        {
                          eventModel: n,
                          route: me.a.k_eCommunityAdminPage,
                          openNewWindow: i,
                          className: Object(V.a)(Q.Button, sn.AdminButton)
                        },
                        Object(q.f)("#EventDisplay_Events")
                      ),
                      Boolean(
                        void 0 !== this.state.nMaxSaleDayIndex && 0 < u.length
                      ) &&
                        z.createElement(C.h, {
                          strDropDownClassName: Q.DropDownScroll,
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
                        z.createElement(
                          me.c,
                          {
                            eventModel: n,
                            route: me.a.k_eStoreSalePage,
                            openNewWindow: i,
                            className: Object(V.a)(Q.Button, sn.AdminButton)
                          },
                          Object(q.f)("#EventDisplay_SalesPage")
                        ),
                      Boolean(
                        n.jsondata.bSaleEnabled && Y.i.is_support && n.GID
                      ) &&
                        z.createElement(
                          "a",
                          {
                            href:
                              Y.c.STATS_BASE_URL +
                              "sales/details/?gid=" +
                              n.GID +
                              "&clanid=" +
                              n.clanSteamID.GetAccountID(),
                            target: Y.c.IN_CLIENT ? "" : "_blank",
                            className: Object(V.a)(
                              Q.Button,
                              sn.AdminButton,
                              Q.ValveOnlyBackground
                            )
                          },
                          Object(q.f)("#EventDisplay_StatsPage")
                        ),
                      Boolean(s && (h || r)) &&
                        z.createElement(
                          me.c,
                          {
                            eventModel: n,
                            route: me.a.k_eCommunityView,
                            openNewWindow: i,
                            className: Object(V.a)(Q.Button, sn.AdminButton)
                          },
                          Object(q.f)("#EventDisplay_ViewOnCommunity")
                        ),
                      Boolean(s && m) &&
                        z.createElement(
                          me.c,
                          {
                            eventModel: n,
                            route: me.a.k_eStoreView,
                            openNewWindow: i,
                            className: Object(V.a)(Q.Button, sn.AdminButton)
                          },
                          Object(q.f)("#EventDisplay_ViewOnStore")
                        )
                    )
                  )
                );
              }
              return z.createElement("span", null);
            }),
            Object(U.c)([s.a], e.prototype, "OnDeleteVerifyRequest", null),
            Object(U.c)([s.a], e.prototype, "OnDeleteSuccessAndComplete", null),
            Object(U.c)([s.a], e.prototype, "OnChangeVisibilityDate", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component);
      var dn = a("bWts"),
        pn = a.n(dn),
        mn = a("XsxU"),
        hn = a.n(mn),
        vn = a("TOXn"),
        _n = a("NKJh"),
        bn = a.n(_n),
        gn = Object(r.a)(function(c) {
          var u = c.partnerEventStore,
            d = c.gidAnnouncement,
            e = c.clanAccountID,
            p = g.a.InitFromClanID(e),
            m = Object(z.useRef)(null),
            t = Object(z.useState)(null),
            a = t[0],
            h = t[1],
            n = Object(z.useState)(!0),
            r = n[0],
            v = n[1],
            o = Object(z.useState)(!1),
            i = o[0],
            l = o[1];
          if (
            (Object(z.useEffect)(
              function() {
                return (
                  Object(U.b)(void 0, void 0, void 0, function() {
                    var t, a, n, r, o, i, l, s;
                    return Object(U.e)(this, function(e) {
                      switch (e.label) {
                        case 0:
                          return (
                            m.current &&
                              m.current(
                                "PartnerEventRow Initializng new mount"
                              ),
                            (t = y.a.CancelToken.source()),
                            (m.current = t.cancel),
                            [4, E.a.LoadClanInfoForClanSteamID(p)]
                          );
                        case 1:
                          return (
                            e.sent(),
                            [
                              4,
                              u.LoadAdjacentPartnerEventsByAnnouncement(
                                c.gidAnnouncement,
                                p,
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
                            (a = e.sent()),
                            t.token.reason ||
                              ((n = (a = a || [])
                                .filter(function(e) {
                                  return e.GetAnnouncementGID() != d;
                                })
                                .map(function(e) {
                                  return e.AnnouncementGID;
                                })),
                              _e.g(n),
                              (r = n.slice(0, 3).map(function(e) {
                                return u.GetClanEventFromAnnouncementGID(e);
                              })),
                              h(r),
                              v(!1),
                              (o = c.trackingLocation) &&
                                ((i = W.a.Get().GetTracker()),
                                (l = !1),
                                u.BHasClanAnnouncementGID(c.gidAnnouncement) &&
                                  (s = u.GetClanEventFromAnnouncementGID(
                                    c.gidAnnouncement
                                  )) &&
                                  s.BIsPartnerEvent() &&
                                  s.BIsVisibleEvent() &&
                                  (i.MarkEventRead(
                                    s.GID,
                                    s.clanSteamID.GetAccountID(),
                                    o
                                  ),
                                  (l = !0)),
                                0 < r.length &&
                                  (a
                                    .filter(function(e) {
                                      return e.BIsPartnerEvent();
                                    })
                                    .forEach(function(e) {
                                      return i.MarkEventShown(
                                        e.GID,
                                        e.clanSteamID.GetAccountID(),
                                        o
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
              [c.clanAccountID, c.gidAnnouncement]
            ),
            r)
          )
            return _.a.createElement(X.a, {
              position: "center",
              size: "medium"
            });
          if (0 == a.length) return _.a.createElement("div", null);
          var s = E.a.GetClanInfoByClanAccountID(e);
          return _.a.createElement(
            S.a,
            null,
            _.a.createElement(
              "div",
              { className: hn.a.OtherEventsCtn },
              _.a.createElement(
                "div",
                { className: J.a.EventSectionTitleCtn },
                _.a.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      J.a.EventSectionTitle,
                      "EventSectionTitle"
                    )
                  },
                  Object(q.n)("#EventBrowse_MoreEventsTitle", s.group_name),
                  " "
                ),
                _.a.createElement(
                  "div",
                  { className: J.a.EventSectionSpacer },
                  " "
                ),
                c.bViewAllShowInfiniteScroll
                  ? _.a.createElement(
                      "div",
                      {
                        className: J.a.EventSectionMoreBtn,
                        onClick: function() {
                          return l(!0);
                        }
                      },
                      Object(q.f)("#EventBrowse_MoreEventsBtn")
                    )
                  : _.a.createElement(
                      me.c,
                      {
                        eventModel: a[0],
                        route: me.a.k_eViewWebSiteHub,
                        className: J.a.EventSectionMoreBtn
                      },
                      Object(q.f)("#EventBrowse_MoreEventsBtn")
                    )
              ),
              _.a.createElement(
                "div",
                { className: hn.a.OtherEvents },
                a.map(function(e) {
                  return _.a.createElement(fn, {
                    key: e.AnnouncementGID,
                    event: e
                  });
                })
              ),
              Boolean(i) &&
                _.a.createElement(ce, {
                  appid: a[0].appid,
                  clanSteamID: p,
                  announcementGID: a[0].AnnouncementGID,
                  closeModal: function() {
                    return l(!1);
                  },
                  partnerEventStore: u
                })
            )
          );
        }),
        fn = Object(r.a)(function(e) {
          var t = e.event,
            a = e.imageURLOverride,
            n = e.openNewWindow,
            r = e.appInfo,
            o = e.langOverride,
            i = e.onClick;
          if (!t)
            return _.a.createElement("div", {
              className: hn.a.OtherEvents_EventCtn
            });
          var l = o || Object(G.g)(Y.c.LANGUAGE),
            s =
              void 0 !== a
                ? a
                : t.GetImageURLWithFallback("capsule", l, N.c.capsule_main),
            c = t.GetNameWithFallback(l) || "",
            u = t.GetCategoryAsString(),
            d = t.GetSummaryWithFallback(l),
            p = t.GetSubTitleWithLanguageFallback(l) || "";
          return (
            p && (30 < p.length || 30 < c.length) && (p = void 0),
            _.a.createElement(
              _.a.Fragment,
              null,
              _.a.createElement(
                me.c,
                {
                  className: Object(V.a)(
                    hn.a.OtherEvents_EventCtn,
                    hn.a.HoversEnabled
                  ),
                  eventModel: t,
                  route: me.a.k_eView,
                  openNewWindow: n,
                  onClick: i
                },
                _.a.createElement(
                  "div",
                  { className: hn.a.EventSummaryContainer },
                  _.a.createElement(
                    "div",
                    { className: hn.a.EventSummaryType },
                    u
                  ),
                  _.a.createElement(
                    "div",
                    { className: hn.a.EventSummaryText },
                    d
                  )
                ),
                _.a.createElement("div", {
                  className: hn.a.OtherEvents_BGImage,
                  style: {
                    backgroundColor: "#ffffff",
                    backgroundImage: "url(" + s + ")"
                  }
                }),
                _.a.createElement(
                  "div",
                  { className: hn.a.OtherEvents_ContentCtn },
                  _.a.createElement(
                    "div",
                    { className: hn.a.OtherEvents_MainImageCtn },
                    _.a.createElement("img", {
                      src: s,
                      className: hn.a.OtherEvents_MainImage
                    })
                  ),
                  _.a.createElement(
                    "div",
                    { className: hn.a.OtherEvents_TextCtn },
                    _.a.createElement(
                      "div",
                      { className: hn.a.OtherEvents_TextTitle },
                      c
                    ),
                    p &&
                      _.a.createElement(
                        "div",
                        { className: hn.a.OtherEvents_SubTitle },
                        p
                      ),
                    _.a.createElement(he.a, {
                      bSingleLine: !0,
                      dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                    })
                  )
                )
              ),
              r &&
                _.a.createElement(
                  "span",
                  { className: hn.a.AppCapsuleCtn },
                  _.a.createElement(
                    Be.a,
                    {
                      strURL: Y.c.STORE_BASE_URL + "app/" + r.appid,
                      type: "app",
                      id: r.appid,
                      hoverClassName: hn.a.AppCapsuleImageHover
                    },
                    _.a.createElement("img", {
                      className: hn.a.AppCapsuleImage,
                      src: e.appInfo.tiny_capsule
                    })
                  ),
                  _.a.createElement(
                    "span",
                    { className: hn.a.AppCapsulePrice },
                    Boolean(e.appInfo.discount_percent) &&
                      _.a.createElement(
                        "span",
                        { className: bn.a.StoreSaleDiscountBox },
                        "-" + e.appInfo.discount_percent + "%"
                      ),
                    !e.appInfo.is_free &&
                      e.appInfo.price &&
                      _.a.createElement(
                        "span",
                        { className: bn.a.StoreSalePriceBox },
                        e.appInfo.price
                      )
                  )
                )
            )
          );
        }),
        En = Object(r.a)(function(e) {
          var t = e.event,
            a = e.imageURLOverride,
            n = e.openNewWindow,
            r = e.onClick;
          if (!t)
            return _.a.createElement("div", {
              className: hn.a.OtherEvents_EventCtn
            });
          var o = Object(G.g)(Y.c.LANGUAGE),
            i =
              void 0 !== a
                ? a
                : t.GetImageURLWithFallback("capsule", o, N.c.capsule_main),
            l = t.GetNameWithFallback(o),
            s = t.GetCategoryAsString();
          return _.a.createElement(
            me.c,
            {
              className: hn.a.OtherEvents_EventCtn + " " + hn.a.HorizontalEvent,
              eventModel: t,
              route: me.a.k_eView,
              openNewWindow: n,
              onClick: r
            },
            _.a.createElement(
              "div",
              { className: hn.a.OtherEvents_ContentCtn },
              _.a.createElement(
                "div",
                { className: hn.a.OtherEvents_MainImageCtn },
                _.a.createElement("img", {
                  src: i,
                  className: hn.a.OtherEvents_MainImage
                })
              )
            ),
            _.a.createElement(
              "div",
              { className: hn.a.OtherEvents_TextCtn },
              _.a.createElement(
                "div",
                { className: hn.a.HorizontalDescriptionCtn },
                _.a.createElement(
                  "div",
                  { className: hn.a.HorizontalDescription },
                  s
                ),
                _.a.createElement(he.a, {
                  bSingleLine: !0,
                  dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                })
              ),
              _.a.createElement("div", { className: hn.a.HorizontalTitle }, l)
            )
          );
        }),
        yn = (function() {
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
            Object(U.c)([m.C], e.prototype, "m_stats", void 0),
            Object(U.c)([m.C], e.prototype, "m_lastUpdateTime", void 0),
            e
          );
        })(),
        Sn = new ((function() {
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
                  this.m_mapSummaryStats.set(e.clan_account_id, new yn(e)),
                (t = Object(Y.f)("trackingdataevents", "application_config")),
                this.ValidateStoreDefaultList(t) &&
                  t.forEach(function(e) {
                    var t = g.a.InitFromClanID(e.clan_account_id),
                      a = n.GetKey(t, e.event_gid);
                    n.m_mapPerEventStats.set(a, new yn(e));
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
                  this.m_mapPerEventStats.set(a, new yn(null)),
                this.m_mapPerEventStats.get(a)
              );
            }),
            (e.prototype.GetTotalStats = function(e) {
              return (
                this.LazyInit(),
                this.m_mapSummaryStats.has(e.GetAccountID()) ||
                  this.m_mapSummaryStats.set(e.GetAccountID(), new yn(null)),
                this.m_mapSummaryStats.get(e.GetAccountID())
              );
            }),
            (e.prototype.GetKey = function(e, t) {
              return e.GetAccountID() + "_" + t;
            }),
            (e.prototype.LoadStatsForEvents = function(c, u, d) {
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
                          y.a.get(a, {
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
                            new yn(o.data.summary)
                          ),
                            o.data.events_detail.forEach(function(e) {
                              var t = s.GetKey(c, e.event_gid);
                              s.m_mapPerEventStats.has(t)
                                ? s.m_mapPerEventStats.get(t).reset(e)
                                : s.m_mapPerEventStats.set(t, new yn(e));
                            });
                        }),
                        [2, !0]
                      );
                    case 3:
                      return (
                        (i = e.sent()),
                        (l = Object(se.a)(i)),
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
              var a = g.a.InitFromClanID(e),
                n = this.GetKey(a, t),
                r = this.m_mapPerEventStats.get(n);
              return Boolean(r && r.m_stats);
            }),
            Object(U.c)([m.C], e.prototype, "m_mapPerEventStats", void 0),
            Object(U.c)([m.C], e.prototype, "m_mapSummaryStats", void 0),
            Object(U.c)([m.k], e.prototype, "LazyInit", null),
            e
          );
        })())(),
        Cn = a("sGzE"),
        On = (function(e) {
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
                          Cn.StatsCtnTitle,
                          a ? Cn.NormalStatsMode : Cn.SmallStatsMode
                        )
                      },
                      z.createElement(
                        "h1",
                        null,
                        Object(q.f)("#EventDashBoard_SummaryStats_Title")
                      ),
                      Boolean(a) &&
                        z.createElement(
                          "p",
                          null,
                          Object(q.f)("#EventDashBoard_SummaryStats_Desc"),
                          " ",
                          z.createElement(
                            "a",
                            {
                              href:
                                "https://partner.steamgames.com/doc/marketing/event_tools/stats",
                              target: "_blank"
                            },
                            Object(q.f)("#EventDashBoard_SummaryStats_Link")
                          )
                        )
                    ),
                    z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          Cn.StatsCtn,
                          a ? Cn.NormalStatsMode : Cn.SmallStatsMode
                        )
                      },
                      z.createElement(
                        "div",
                        { className: Cn.StatsLeftSection },
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle_ctn },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)("#EventDashBoard_Location_LibraryHome")
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)(
                              "#EventDashBoard_Summary_LibraryHome_Shown"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.library_overview_shown.toLocaleString(
                              q.e.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)(
                              "#EventDashBoard_Summary_LibraryHome_Read"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.library_overview_read.toLocaleString(
                              q.e.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement("br", null),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle_ctn },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)(
                              "#EventDashBoard_Location_LibraryDetail"
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Shown"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_shown.toLocaleString(
                              q.e.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Read"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_read.toLocaleString(
                              q.e.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement("br", null),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)(
                              "#EventDashBoard_Summary_AppDetailActivity_Shown"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.app_details_activity_shown.toLocaleString(
                              q.e.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)(
                              "#EventDashBoard_Summary_AppDetailActivity_Read"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.app_details_activity_read.toLocaleString(
                              q.e.GetPreferredLocales()
                            )
                          )
                        )
                      ),
                      z.createElement(
                        "div",
                        { className: Cn.StatsRightSection },
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle_ctn },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)("#EventDashBoard_Location_StoreDetail")
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)(
                              "#EventDashBoard_Summary_StoreAppPage_Shown"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.store_app_page_shown.toLocaleString(
                              q.e.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)(
                              "#EventDashBoard_Summary_StoreAppPage_Read"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.store_app_page_read.toLocaleString(
                              q.e.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement("br", null),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle_ctn },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)(
                              "#EventDashBoard_Location_CommunityDetail"
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)(
                              "#EventDashBoard_Summary_Community_Shown"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.community_hub_shown.toLocaleString(
                              q.e.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)(
                              "#EventDashBoard_Summary_Community_Read"
                            )
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.community_hub_read.toLocaleString(
                              q.e.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle_ctn },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)(
                              "#EventDashBoard_Location_NewsHubDetail"
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)("#EventDashBoard_Summary_NewsHub_Shown")
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.news_hub_shown.toLocaleString(
                              q.e.GetPreferredLocales()
                            )
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: Cn.StatsTitle },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)("#EventDashBoard_Summary_NewsHub_Read")
                          ),
                          z.createElement(
                            "span",
                            null,
                            t.news_hub_read.toLocaleString(
                              q.e.GetPreferredLocales()
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
        wn = a("ZCZY"),
        Tn = (function(e) {
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
                          c.b,
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
                { className: Object(V.a)(wn.BreadContainer) },
                z.createElement("div", { className: "blockbg" }, e),
                z.createElement("div", { style: { clear: "left" } })
              );
            }),
            t
          );
        })(z.Component),
        In = a("4sqd"),
        jn = a("5L1o"),
        kn = a("45m9"),
        Dn = z.lazy(function() {
          return Promise.all([a.e(1), a.e(5)]).then(a.bind(null, "NIbt"));
        }),
        Ln = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = y.a.CancelToken.source()),
              (e.state = {
                bLoadingAppInfo: !f.a.BIsAppidLoaded(e.props.event.appid),
                bLoadingClanInfo: !!E.a.GetClanInfoByClanAccountID(
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
                f.a.EnsureStoreCapsuleInfoLoaded(e).then(function() {
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
                return z.createElement(
                  "div",
                  { className: le.a.FlexCenter, style: { height: "400px" } },
                  z.createElement(X.a, {
                    size: "medium",
                    string: Object(q.f)("#Loading")
                  })
                );
              var d = t.GetDescriptionWithFallback(a),
                p = f.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData(),
                m = Object(Y.d)() == Y.c.STORE_BASE_URL,
                h = E.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                ),
                v = Object(me.d)(
                  t,
                  m ? me.a.k_eStoreNewsHub : me.a.k_eCommunityAllNews,
                  "allowRelative",
                  h && h.vanity_url
                );
              return z.createElement(Gn, {
                event: t,
                lang: a,
                titleBar: u,
                body: z.createElement(
                  S.a,
                  null,
                  z.createElement(
                    "div",
                    { className: cn.a.EventDetailTitleContainer },
                    z.createElement(Tn, {
                      crumbs: [
                        {
                          name: Object(q.f)("#BreadCrumbs_AllEvents"),
                          url: Object(me.d)(
                            t,
                            me.a.k_eStoreUsersNewsHub,
                            "allowRelative"
                          )
                        },
                        {
                          name: Object(q.f)("#BreadCrumbs_GameEvents", p.title),
                          url: v
                        }
                      ]
                    }),
                    z.createElement(
                      "div",
                      { className: cn.a.EventDetailTitle },
                      t.GetNameWithFallback(a)
                    ),
                    t.BHasSubTitle(a) &&
                      z.createElement(
                        "div",
                        { className: cn.a.EventDetailsSubTitle },
                        t.GetSubTitle(a)
                      )
                  ),
                  Boolean(
                    t.BEventCanShowBroadcastWidget(this.props.previewMode)
                  ) &&
                    z.createElement(
                      "div",
                      { className: cn.a.EventBroadcastCtn },
                      z.createElement(
                        z.Suspense,
                        { fallback: z.createElement("div", null) },
                        z.createElement(Dn, {
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
                    { className: cn.a.EventColumns },
                    z.createElement(
                      "div",
                      { className: cn.a.EventDetailsDescription },
                      z.createElement(
                        S.a,
                        null,
                        t.BHasTag("steam_award_nomination_request") &&
                          z.createElement(In.a, {
                            event: t,
                            lang: a,
                            previewMode: s
                          }),
                        t.BHasTag("steam_award_vote_request") &&
                          z.createElement(In.b, {
                            event: t,
                            lang: a,
                            previewMode: s
                          })
                      ),
                      z.createElement(
                        S.a,
                        null,
                        z.createElement(
                          "div",
                          {
                            className: Object(V.a)(
                              "EventDetailsBody",
                              cn.a.EventDetailsBody
                            )
                          },
                          z.createElement(vn.b, {
                            text: d || "",
                            partnerEventStore: n,
                            showErrorInfo: s,
                            event: t,
                            languageOverride: a
                          })
                        )
                      ),
                      z.createElement(
                        S.a,
                        null,
                        z.createElement(kn.a, { event: this.props.event })
                      ),
                      Boolean(t.jsondata.read_more_link) &&
                        z.createElement(
                          "div",
                          { className: Object(V.a)(cn.a.ReadMoreCnt) },
                          z.createElement(
                            O.a,
                            {
                              className: Object(V.a)(J.a.Button),
                              href: t.jsondata.read_more_link
                            },
                            Object(q.f)(
                              "#EventEmail_Button_ClickForMoreDetails"
                            )
                          )
                        ),
                      Boolean(
                        t.jsondata.bSaleEnabled && t.jsondata.sale_vanity_id
                      ) &&
                        z.createElement(
                          "div",
                          { className: Object(V.a)(cn.a.ReadMoreCnt) },
                          z.createElement(
                            O.a,
                            {
                              className: Object(V.a)(J.a.Button),
                              href: t.GetSaleURL()
                            },
                            Object(q.f)("#Event_Button_VisitSalePage")
                          )
                        ),
                      z.createElement("span", { className: J.a.Clear }),
                      z.createElement(
                        S.a,
                        null,
                        z.createElement(ka.a, { appid: t.appid })
                      )
                    ),
                    z.createElement(
                      S.a,
                      null,
                      z.createElement(Nn, {
                        event: t,
                        lang: a,
                        nOverrideStartTime: o,
                        nOverrideEndTime: i
                      })
                    )
                  ),
                  z.createElement(we.b, {
                    eventModel: t,
                    emoticonStore: r,
                    partnerEventStore: n
                  })
                ),
                postbody: z.createElement(S.a, null, l, c),
                footer: z.createElement(
                  S.a,
                  null,
                  z.createElement(
                    "div",
                    { className: cn.a.AppSummaryCtn },
                    z.createElement(
                      "div",
                      { className: cn.a.EventBodyPosition },
                      Boolean(
                        null != p.appid && null != p.appid && 0 != p.appid
                      ) &&
                        z.createElement(
                          "div",
                          { className: cn.a.AppSummaryWidgetTitleCtn },
                          z.createElement(
                            "span",
                            { className: cn.a.Title },
                            Object(q.f)("#CreatorHome_ThisGame")
                          ),
                          z.createElement(
                            "div",
                            { className: cn.a.AppSummaryWidgetCtn },
                            z.createElement(jn.g, { id: t.appid })
                          )
                        ),
                      z.createElement($.b, { appid: t.appid, bSmallFormat: !0 })
                    )
                  )
                )
              });
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Gn = (function(e) {
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
                c = "lang_" + Object(G.e)(a),
                u = t.BImageNeedScreenshotFallback("background", a);
              return z.createElement(
                "div",
                {
                  className: Object(V.a)(
                    cn.a.EventDetailsPageContainer,
                    c,
                    J.a.PartnerEventFont,
                    s
                      ? cn.a.DetailArtworkAgeAppropriate
                      : cn.a.DetailArtworkAgeNotAppropriate,
                    u && cn.a.NoTitleArtwork
                  )
                },
                z.createElement(re.c, {
                  appId: t.appid,
                  clanId: t.clanSteamID.GetAccountID()
                }),
                n,
                z.createElement(
                  "div",
                  { className: cn.a.EventCoverImageCtn },
                  z.createElement(
                    "div",
                    { className: cn.a.EventCoverImageBlr },
                    z.createElement("div", {
                      className: cn.a.EventCoverImageFuzz,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + l + ")"
                      }
                    }),
                    z.createElement("div", {
                      className: cn.a.EventCoverImage,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + l + ")"
                      }
                    })
                  ),
                  z.createElement("div", { className: cn.a.CoverImageGradient })
                ),
                z.createElement(
                  "div",
                  { className: cn.a.EventBodyCtn },
                  z.createElement("div", {
                    className: cn.a.EventBackgroundBlurCtn
                  }),
                  z.createElement(
                    "div",
                    { className: cn.a.EventBodyPosition },
                    z.createElement(
                      "div",
                      { className: cn.a.EventBody },
                      z.createElement("div", {
                        className: cn.a.EventBackgroundBlur,
                        style: { backgroundImage: "url(" + l + ")" }
                      }),
                      z.createElement(S.a, null, r)
                    ),
                    Boolean(o) && z.createElement(S.a, null, o)
                  )
                ),
                Boolean(i) && z.createElement(S.a, null, i)
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Nn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.componentDidMount = function() {
              f.a.EnsureStoreCapsuleInfoLoaded(this.props.event.appid);
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
                  Object(h.a)(
                    i,
                    "EventDetailsRightColumn - clan info (" +
                      t.clanSteamID.GetAccountID() +
                      ") is missing"
                  ),
                  null
                );
              var l = M.a.GetTimeNowWithOverride(),
                s = n || t.GetStartTimeAndDateUnixSeconds();
              return z.createElement(
                "div",
                { className: cn.a.EventDetailTitleDesc },
                z.createElement(
                  "div",
                  { className: cn.a.EventDetailsSticky },
                  i.is_ogg
                    ? z.createElement(An, { appid: i.appid })
                    : z.createElement(Bn, { clanSteamID: t.clanSteamID }),
                  z.createElement(ka.b, {
                    event: t,
                    nOverrideEndTime: r,
                    nOverrideStartTime: n
                  }),
                  28 !== t.type &&
                    l < s &&
                    z.createElement(
                      "div",
                      { className: cn.a.EventDetailTimeInfo },
                      z.createElement(Ne.a, {
                        eventModel: t,
                        eventGID: t.GID,
                        lang: a
                      })
                    ),
                  z.createElement(
                    "div",
                    { className: cn.a.EventDetailUserType },
                    z.createElement(
                      "div",
                      { className: cn.a.RightSideTitles },
                      Object(q.f)("#EventDisplay_RightColumnTitle_EventType")
                    ),
                    z.createElement(
                      "div",
                      { className: cn.a.EventDetailsType },
                      o,
                      " "
                    )
                  ),
                  z.createElement(Rn, { event: t })
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        An = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var t = this.props.appid;
              Object(h.a)(t && 0 != t, "Expected Appid In Game Info Section");
              var e = f.a.GetStoreCapsuleInfo(t).GetAppStoreData();
              return z.createElement(
                "div",
                { className: cn.a.EventDetailGameCallToAction },
                z.createElement(
                  "div",
                  { className: cn.a.RightSideTitles },
                  _a.v.some(function(e) {
                    return t === e;
                  })
                    ? Object(q.f)("#EventDisplay_RightColumnTitle_Blog")
                    : Object(q.f)("#EventDisplay_RightColumnTitle_Game")
                ),
                z.createElement(jn.f, {
                  capsule: { id: t, type: "game" },
                  bHidePriceIfOwned: !0,
                  bHideStatusBanners: !0
                }),
                z.createElement(
                  "div",
                  { className: Object(V.a)(cn.a.GameActions) },
                  z.createElement(jn.i, {
                    info: e,
                    className: cn.a.ActionButton
                  })
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Bn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.clanSteamID,
                t = E.a.GetClanInfoByClanAccountID(e.GetAccountID());
              return t
                ? z.createElement(
                    "div",
                    { className: cn.a.EventDetailGameCallToAction },
                    z.createElement(
                      "div",
                      { className: cn.a.RightSideTitles },
                      t.group_name
                    ),
                    z.createElement(
                      "a",
                      { href: E.a.GetCreatorStoreURL(e) },
                      z.createElement("div", {
                        className: cn.a.EventDetailsAvatar,
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
        Mn = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"],
        Rn = (z.Component,
        (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_cancelSignal = y.a.CancelToken.source()), e;
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
                      Sn.LoadStatsForEvents(
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
                Sn.GetStatsFor(e.clanSteamID, e.GID);
              return z.createElement(
                S.a,
                null,
                z.createElement(
                  "div",
                  { className: cn.a.EditorStatsCtn },
                  z.createElement(
                    "div",
                    { className: cn.a.EditorStatsRow },
                    z.createElement(
                      "span",
                      null,
                      Object(q.f)("#EventEditor_Comments")
                    ),
                    z.createElement(
                      "span",
                      null,
                      e.nCommentCount.toLocaleString(q.e.GetPreferredLocales())
                    )
                  ),
                  z.createElement(
                    "div",
                    { className: cn.a.EditorStatsRow },
                    z.createElement(
                      "span",
                      null,
                      Object(q.f)("#EventEditor_UpVotes")
                    ),
                    z.createElement(
                      "span",
                      null,
                      e.nVotesUp
                        ? e.nVotesUp.toLocaleString(q.e.GetPreferredLocales())
                        : 0
                    )
                  ),
                  z.createElement(
                    "div",
                    { className: cn.a.EditorStatsRow },
                    z.createElement(
                      "span",
                      null,
                      Object(q.f)("#EventEditor_DownVotes")
                    ),
                    z.createElement(
                      "span",
                      null,
                      e.nVotesDown
                        ? e.nVotesDown.toLocaleString(q.e.GetPreferredLocales())
                        : 0
                    )
                  )
                ),
                Boolean(t) &&
                  z.createElement(
                    "div",
                    { className: cn.a.EditorStatsCtn },
                    Object(q.f)("#EventDashBoard_SummaryStats_Admin_Title"),
                    z.createElement(On, { summary: t.m_stats })
                  )
              );
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component)),
        xn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.componentDidMount = function() {
              Xa.GetRawDoorData() || Xa.LoadDoorData(),
                Ka.LoadSaleTokenPoints();
            }),
            (t.prototype.render = function() {
              var e = Xa.GetRawDoorData();
              if (!e) return null;
              for (
                var t = e.length - 1,
                  a = M.a.GetTimeNowWithOverride() > e[t].rtime_start,
                  n = [],
                  r = 0;
                r <= t;
                r++
              )
                n.push(
                  z.createElement(Pn, {
                    key: "envelope-" + r,
                    iDoorIndex: r,
                    strFontFamily: this.props.strFontFamily
                  })
                );
              var o = Ka.GetSaleTokenPoints().points;
              return z.createElement(
                S.a,
                null,
                z.createElement(
                  "div",
                  { className: cn.a.LunarNewYearHeader },
                  z.createElement(
                    "div",
                    { className: cn.a.EnvelopeArea },
                    0 <= o &&
                      z.createElement(
                        "div",
                        { className: cn.a.TokenBalanceContainer },
                        Object(q.f)("#Lunar2020_YourBalancePrefix"),
                        z.createElement(
                          "a",
                          {
                            className: cn.a.TokenBalance,
                            href: Y.c.STORE_BASE_URL + "lunarnewyearmarket"
                          },
                          " ",
                          Object(q.f)("#Lunar2020_BalanceNumberOfTokens", o),
                          " "
                        )
                      ),
                    n
                  ),
                  !a &&
                    z.createElement(
                      "div",
                      { className: cn.a.BottomMessage },
                      Object(q.f)("#Lunar2020_CheckBackEachDay")
                    )
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Fn = [
          "#Lunar2020_FirstGift",
          "#Lunar2020_SecondGift",
          "#Lunar2020_ThirdGift",
          "#Lunar2020_FourthGift"
        ],
        Pn = (function(e) {
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
                        (t = Xa.BIsDoorOpened(this.props.iDoorIndex)),
                        (a = Object(Z.m)(n)),
                        t
                          ? (Object(l.b)(
                              z.createElement(
                                Un,
                                Object(U.a)({ bIsFirstOpen: !1 }, this.props)
                              ),
                              a
                            ),
                            [2])
                          : [4, Xa.OpenDoor(this.props.iDoorIndex, !0)]
                      );
                    case 1:
                      return (
                        e.sent() &&
                          Object(l.b)(
                            z.createElement(
                              Un,
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
              var t = Object(Z.m)(e),
                a = z.createElement(
                  "a",
                  { href: Y.c.HELP_BASE_URL },
                  Object(q.f)("#User_LimitedAccount_UrlInfo")
                );
              Object(l.b)(
                z.createElement(K.c, {
                  strTitle: Object(q.f)("#Lunar2020_LimitedUserDialogTitle"),
                  strDescription: Object(q.n)("#User_LimitedAccount", a),
                  bAlertDialog: !0
                }),
                t
              );
            }),
            (t.prototype.VOOnClose = function() {
              Y.i.is_support && Xa.OpenDoor(this.props.iDoorIndex, !1);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.iDoorIndex,
                a = e.strFontFamily;
              Object(h.a)(
                0 <= t && t < Fn.length && t < Xa.GetDoorCount(),
                "Day index #" + t + " not in valid range."
              );
              for (
                var n = Object(q.f)(Fn[t]),
                  r = !Y.i.logged_in,
                  o = Xa.BIsDoorOpened(t),
                  i = Xa.BCanUserOpenDoor(t),
                  l = !0,
                  s = 0;
                s < t;
                s++
              )
                l = l && Xa.BIsDoorOpened(s);
              var c = !o && i && l,
                u = new Date(1e3 * Xa.GetRawDoorData()[t].rtime_start),
                d = r
                  ? Object(q.f)("#Login_SignIn")
                  : o
                  ? Object(q.f)("#Lunar2020_RereadStory")
                  : c
                  ? Object(q.f)("#Lunar2020_GiftCanBeOpenedNow")
                  : i
                  ? Object(q.f)("#Lunar2020_GiftCanBeOpenedAfterThePreviousOne")
                  : Object(q.f)(
                      "#Lunar2020_GiftLockedUntilDate",
                      u.toLocaleDateString(q.e.GetPreferredLocales(), {
                        month: "numeric",
                        day: "numeric"
                      })
                    ),
                p = r
                  ? Qt.a
                  : Y.i.is_limited
                  ? this.ShowLimitedUserDialog
                  : o || c
                  ? this.OpenEnvelope
                  : null,
                m = Object(V.a)(
                  cn.a.EnvelopeContainer,
                  r && cn.a.NeedLogin,
                  o && cn.a.Opened,
                  c && cn.a.Unlocked,
                  !o && !c && cn.a.Locked
                );
              return z.createElement(
                "div",
                { className: m },
                z.createElement("div", { className: cn.a.BackingRect }),
                z.createElement(
                  "div",
                  { className: cn.a.Envelope },
                  z.createElement(
                    "div",
                    { className: cn.a.GiftLabel, style: { fontFamily: a } },
                    n
                  )
                ),
                z.createElement(
                  "div",
                  { className: cn.a.OpenState, onClick: p },
                  d
                ),
                (Y.i.is_support &&
                  o &&
                  ("beta" == Y.c.WEB_UNIVERSE || "dev" == Y.c.WEB_UNIVERSE) &&
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(cn.a.OpenState, cn.a.VO),
                      onClick: this.VOOnClose
                    },
                    "(VO) Close Gift"
                  )) ||
                  null
              );
            }),
            Object(U.c)([s.a], t.prototype, "OpenEnvelope", null),
            Object(U.c)([s.a], t.prototype, "ShowLimitedUserDialog", null),
            Object(U.c)([s.a], t.prototype, "VOOnClose", null),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Hn = [
          "#Lunar2020_StoryDayOneHeader",
          "#Lunar2020_StoryDayTwoHeader",
          "#Lunar2020_StoryDayThreeHeader",
          "#Lunar2020_StoryDayFourHeader"
        ],
        zn = [
          "#Lunar2020_StoryDayOne",
          "#Lunar2020_StoryDayTwo",
          "#Lunar2020_StoryDayThree",
          "#Lunar2020_StoryDayFour"
        ],
        Un = function(e) {
          var t = z.useState(!e.bIsFirstOpen),
            a = t[0],
            n = t[1];
          z.useEffect(function() {
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
            i = e.iDoorIndex == Xa.GetDoorCount() - 1;
          return z.createElement(
            K.d,
            {
              className: cn.a.LunarNewYearOpenEnvelopeVideoDialog,
              closeModal: e.closeModal
            },
            z.createElement(
              "div",
              { className: cn.a.Container },
              z.createElement(
                "div",
                { className: cn.a.Column },
                z.createElement(
                  "div",
                  { className: cn.a.StoryHeader },
                  Object(q.f)("#Lunar2020_StoryTitle")
                ),
                z.createElement(
                  "div",
                  { className: cn.a.StorySubHeader },
                  Object(q.f)("#Lunar2020_StorySubTitle")
                ),
                z.createElement(
                  "div",
                  { className: cn.a.StorySubHeader },
                  Object(q.f)(Hn[e.iDoorIndex])
                ),
                z.createElement(
                  "div",
                  { className: cn.a.StoryText },
                  Object(q.f)(zn[e.iDoorIndex])
                ),
                z.createElement(
                  "div",
                  { className: cn.a.VideoBox },
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(cn.a.CoinText, a && cn.a.Visible)
                    },
                    Object(q.f)("#Lunar2020_ReceivedNumberOfTokens", 100)
                  ),
                  z.createElement(
                    "video",
                    {
                      autoPlay: e.bIsFirstOpen,
                      muted: !0,
                      className: cn.a.LunarNewYearOpenEnvelopeVideo
                    },
                    z.createElement("source", { src: r, type: "video/mp4" }),
                    z.createElement("source", { src: o, type: "video/webm" }),
                    Object(q.f)("#Lunar2020_ErrorLoadingVideo")
                  )
                )
              ),
              z.createElement(
                "div",
                { className: cn.a.Column },
                z.createElement(
                  "div",
                  { className: cn.a.StoryPicture },
                  z.createElement("img", {
                    src: Xa.GetStoryImage(e.iDoorIndex)
                  })
                ),
                !i &&
                  z.createElement(
                    "div",
                    { className: cn.a.CheckBackText },
                    Object(q.f)("#Lunar2020_CheckBackEachDayForStory")
                  )
              )
            ),
            z.createElement(
              "div",
              { className: cn.a.Links },
              z.createElement(
                "div",
                { className: cn.a.MarketLink },
                z.createElement(
                  "a",
                  { href: Y.c.STORE_BASE_URL + "lunarnewyearmarket" },
                  Object(q.f)("#Lunar2020_LinkFromVideoToMarket")
                )
              ),
              z.createElement(
                "div",
                { className: cn.a.MarketLink, onClick: e.closeModal },
                Object(q.f)("#Lunar2020_LinkBackToSale")
              )
            )
          );
        },
        Wn = a("ZlHF"),
        Vn = a.n(Wn),
        Zn = a("gyoR"),
        qn = (a("bUNj"), a("U9Ih")),
        Yn = a.n(qn),
        Qn = (function(t) {
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
              (e.m_timerForChange = new v.b()),
              (e.m_bMounted = !1),
              (e.m_nHighestSentRequestID = 0),
              (e.m_nHighestReceivedRequestID = 0),
              e
            );
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.componentDidMount = function() {
              (this.m_bMounted = !0), this.LoadCapsules(12);
            }),
            (e.prototype.componentWillUnmount = function() {
              (this.m_bMounted = !1), this.m_timerForChange.Cancel();
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
              this.m_bMounted &&
                !this.state.bAwaitingMoreRowsLoading &&
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
              var y;
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c, u, d, p, m, h, v, _, b, g, f;
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
                        (u = o.strSearchQuery),
                        [4, L.a.HintLoad()]
                      );
                    case 1:
                      e.sent(),
                        (d = !0),
                        (p = Math.max(s, E + 1)),
                        (e.label = 2);
                    case 2:
                      if (!(l.length <= E && d)) return [3, 9];
                      (m = !1),
                        n ||
                          a.visibility_state === _a.m.k_EEventStateVisible ||
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
                          Ja.GetSaleGamesByFlavor(
                            n || m,
                            null === (y = null == r ? void 0 : r.GetTab()) ||
                              void 0 === y
                              ? void 0
                              : y.unique_id,
                            a,
                            i,
                            p,
                            0,
                            u
                          )
                        ]
                      );
                    case 4:
                      return (_ = e.sent()), (d = _.length >= p), [3, 6];
                    case 5:
                      return (
                        (b = e.sent()),
                        console.error(
                          "Failed to load games for browser;" + b.message
                        ),
                        this.m_bMounted &&
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
                          (l = _.map(function(e) {
                            return { id: e, type: "game" };
                          })),
                          this.state.strSearchQuery ||
                            (l = l.filter(function(e) {
                              return !r || r.ShouldShowCapsule(e);
                            })),
                          [4, Object(Zn.d)(l)]);
                    case 7:
                      return (
                        e.sent(), (g = new Array()), [4, Object(Zn.a)(l, !1, g)]
                      );
                    case 8:
                      return (
                        (l = e.sent()),
                        (c = g.length),
                        l.length <= E && (p += 8),
                        [3, 2]
                      );
                    case 9:
                      return this.m_bMounted
                        ? ((f = l.length > E || d),
                          this.setState({
                            bInitialLoadComplete: !0,
                            rgCapsules: l,
                            nVisibleRows: E,
                            nNumRequestedLastTime: p,
                            bIsMoreAvailable: f,
                            bAwaitingMoreRowsLoading: !1,
                            nHiddenCapsules: c
                          }),
                          [2])
                        : [2];
                  }
                });
              });
            }),
            (e.prototype.OnFlavorLabelClick = function(e) {
              var t = this;
              this.m_timerForChange.Cancel(),
                this.m_bMounted &&
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
                    return _a.x.find(function(e) {
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
                  return _a.x.find(function(e) {
                    return e.flavor === t;
                  });
                })
                .filter(function(e) {
                  return !!e;
                })
                .map(function(e) {
                  return _.a.createElement(
                    x.a,
                    {
                      key: e.flavor,
                      toolTipContent: Object(q.f)(e.tooltip),
                      onClick: function() {
                        return t.OnFlavorLabelClick(e.flavor);
                      },
                      className: Object(V.a)(
                        Yn.a.FlavorLabel,
                        o == e.flavor && Yn.a.SelectedFlavor
                      )
                    },
                    Object(q.f)(e.label)
                  );
                });
            }),
            (e.prototype.OnApplySearch = function(e) {
              var t = this;
              this.m_bMounted &&
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
              this.m_bMounted &&
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
                ? _.a.createElement(
                    "div",
                    { className: Yn.a.SaleItemBrowserContainer },
                    _.a.createElement(
                      ot,
                      { className: Yn.a.SaleItemBrowserHeaderContainer },
                      _.a.createElement(
                        "div",
                        { className: Yn.a.SaleItemBrowserHeader },
                        c,
                        l.enable_search &&
                          _.a.createElement(
                            "div",
                            { className: Yn.a.SuggestContainer },
                            _.a.createElement(R.E, null),
                            _.a.createElement(C.k, {
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
                        return _.a.createElement(
                          "div",
                          { key: e.id, className: bn.a.SaleItemBrowserRow },
                          _.a.createElement(jn.g, {
                            id: e.id,
                            type: e.type,
                            bShowDemoButton: Boolean(l.show_as_demos),
                            bLoadShortDescription: !1
                          })
                        );
                      }),
                    t &&
                      0 == a.length &&
                      _.a.createElement(
                        "div",
                        { className: Yn.a.EmptyResults },
                        Object(q.f)("#Sale_EmptySearchResultsOrLoadFailure")
                      ),
                    (!t || r) &&
                      _.a.createElement(
                        "div",
                        {
                          className: Object(V.a)(
                            Yn.a.ShowContentsContainer,
                            !t && Yn.a.Loading
                          )
                        },
                        !t || o
                          ? _.a.createElement(X.a, { size: "medium" })
                          : _.a.createElement(
                              "button",
                              {
                                onClick: this.ShowMoreRows,
                                className: Yn.a.ShowContentsButton
                              },
                              Object(q.f)("#Sale_ShowMore")
                            )
                      )
                  )
                : null;
            }),
            Object(U.c)([s.a], e.prototype, "ShowMoreRows", null),
            Object(U.c)([s.a], e.prototype, "OnUpdateSearch", null),
            (e = Object(U.c)([r.a], e))
          );
        })(_.a.Component),
        Jn = a("onkS"),
        Kn = a("oVVc"),
        Xn = a("l2mU"),
        $n = a("31dG"),
        er = a.n($n);
      function tr(e, t) {
        for (var a = [], n = 0, r = e.capsules; n < r.length; n++) {
          var o = r[n];
          if ("sub" === o.type) {
            var i = Kn.b.GetPackageInfo(o.id);
            if (i) {
              if ((console.log(JSON.stringify(i)), i.renewal_time_amount === t))
                return i.packageid;
            } else a.push(o.id);
          }
        }
        0 < a.length && Kn.b.LoadPackageInfo(a);
      }
      function ar(e, t, a, n) {
        var r = e.createElement("input");
        (r.type = "hidden"), (r.name = a), (r.value = n), t.appendChild(r);
      }
      var nr = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.OnClickPurchase = function(e) {
              var t, a, n, r;
              (t = e),
                (a = this.props.sub_package_id),
                (n = Object(Z.m)(t)),
                ((r = n.document.createElement("form")).action =
                  Y.c.STORE_BASE_URL + "cart/"),
                (r.method = "POST"),
                (r.style.display = "none"),
                ar(document, r, "action", "add_to_cart"),
                ar(document, r, "subid", a.toString()),
                ar(document, r, "sessionid", Y.c.SESSIONID),
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
                s = Kn.b.GetPackageInfo(n),
                c = Kn.b.GetPackageInfo(r);
              if (!s || (!c && r)) return Kn.b.LoadPackageInfo([n, r]), null;
              if (!s.formatted_final_price) return null;
              var u,
                d,
                p = s.formatted_final_price,
                m = Object(Xn.a)(s, c),
                h = [p, m || ""],
                v = q.f.apply(void 0, Object(U.g)([o], h)),
                _ = q.f.apply(void 0, Object(U.g)([i], h)),
                b = q.f.apply(
                  void 0,
                  Object(U.g)(["#Sale_Subscription_Save"], h)
                ),
                g = null;
              a &&
                ((d = null),
                (d =
                  "string" == typeof (u = Object(vn.a)(a, t))
                    ? z.createElement("img", { src: u })
                    : z.createElement(Da.a, { rgSources: u })),
                (g = z.createElement("div", { className: er.a.LogoImg }, d)));
              var f = (function(e) {
                  for (var t = 0, a = e.appids; t < a.length; t++) {
                    var n = a[t];
                    if (L.a.BOwnsApp(n)) return !0;
                  }
                  return !1;
                })(s),
                E = null,
                E = L.a.BOwnsPackage(n)
                  ? z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          er.a.PurchaseButton,
                          er.a.AlreadyOwnedPackage
                        )
                      },
                      Object(q.f)("#Sale_Subscription_AlreadyOwnedPackage")
                    )
                  : f
                  ? z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          er.a.PurchaseButton,
                          er.a.AlreadyOwnedApp
                        )
                      },
                      Object(q.f)("#Sale_Subscription_AlreadyOwnedApp")
                    )
                  : z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          er.a.PurchaseButton,
                          er.a.UnOwned
                        ),
                        onClick: this.OnClickPurchase
                      },
                      l
                    );
              return z.createElement(
                "div",
                { className: er.a.SubscriptionBlock },
                g,
                z.createElement(
                  "div",
                  { className: er.a.PriceBlock },
                  z.createElement("span", { className: er.a.PriceDisplay }, v),
                  Boolean(m) &&
                    z.createElement(
                      "span",
                      { className: er.a.SavingsDisplay },
                      b
                    )
                ),
                z.createElement("div", { className: er.a.BodyTextBlock }, _),
                E
              );
            }),
            Object(U.c)([s.a], t.prototype, "OnClickPurchase", null),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        rr = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                a = t.section,
                n = t.language,
                r = tr(a, 12),
                o = tr(a, 3),
                i = tr(a, 1),
                l =
                  null === (e = a.internal_section_data) || void 0 === e
                    ? void 0
                    : e.subscription_logo_image;
              return z.createElement(
                "div",
                { className: er.a.MainBlock },
                z.createElement(
                  "span",
                  { className: er.a.SelectAPlan },
                  Object(q.f)("#Sale_Subscription_SelectPlan")
                ),
                z.createElement(
                  "div",
                  { className: er.a.SubscriptionListBlock },
                  z.createElement(nr, {
                    sub_package_id: r,
                    logo_image: l,
                    language: n,
                    compare_package_id: i,
                    price_loc_token: "#Sale_Subscription_Annual_Price",
                    body_loc_token: "#Sale_Subscription_Annual_Body",
                    button_text: Object(q.f)("#Sale_Subscription_Annual_Button")
                  }),
                  z.createElement(nr, {
                    sub_package_id: o,
                    logo_image: l,
                    language: n,
                    price_loc_token: "#Sale_Subscription_Quarterly_Price",
                    body_loc_token: "#Sale_Subscription_Quarterly_Body",
                    button_text: Object(q.f)(
                      "#Sale_Subscription_Quarterly_Button"
                    )
                  }),
                  z.createElement(nr, {
                    sub_package_id: i,
                    logo_image: l,
                    language: n,
                    price_loc_token: "#Sale_Subscription_Monthly_Price",
                    body_loc_token: "#Sale_Subscription_Monthly_Body",
                    button_text: Object(q.f)(
                      "#Sale_Subscription_Monthly_Button"
                    )
                  })
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        or = a("R+8l");
      function ir(e, t, a) {
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
      function lr(e) {
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
          q.a.GetWithFallback(t.localized_label, a) ||
            ("#Sale_default_label" === t.default_label
              ? ""
              : Object(q.f)(t.default_label)));
        if (!c) return null;
        var u,
          d = l
            ? ((u = l),
              s
                ? ir(
                    u.tab_active_label_color,
                    u.tab_active_background_gradient_top,
                    u.tab_active_background_gradient_bottom
                  )
                : ir(
                    u.tab_inactive_label_color,
                    u.tab_inactive_background_gradient_top,
                    u.tab_inactive_background_gradient_bottom
                  ))
            : void 0;
        return z.createElement(
          "div",
          {
            className: Object(V.a)(Vn.a.SaleTab, i, "SaleTab", s && "Selected"),
            onClick: function() {
              return o(n);
            },
            style: d
          },
          z.createElement(
            "div",
            { className: Object(V.a)(Vn.a.SaleTabLabel) },
            c
          )
        );
      }
      function sr(e) {
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
          return z.createElement(lr, {
            key: n,
            selected: a,
            tab: e,
            language: l,
            classNames: Object(V.a)(
              Vn.a.TabButton,
              a && Vn.a.TabButtonSelected
            ),
            onTabSelected: function(e) {
              return i(r, e);
            }
          });
        });
        return z.createElement(
          "div",
          { className: Vn.a.SaleSection, style: Br(r, t) },
          z.createElement(Cr, Object(U.a)({}, e)),
          z.createElement("div", { className: Vn.a.TabButtonsCtn }, n)
        );
      }
      var cr = (function(e) {
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
                      (e += Nr(
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
                  { className: Vn.a.TabContentsElement },
                  Object(q.f)("#SalePage_Tabs_AllContents")
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
                  u = Object(q.f)("#AppType_" + c.type) + "_" + c.id;
                a.has(u) ||
                  (a.add(u),
                  (o = null),
                  (i =
                    (o =
                      "bundle" === c.type
                        ? or.a.GetBundleInfo(c.id)
                        : "sub" === c.type
                        ? Kn.b.GetPackageInfo(c.id)
                        : ae.a.GetAppInfo(c.id)) && o.name
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
                    : Object(q.f)("#Sale_TabDayIndex", c.visibility_index)),
                  t.push({ sName: i, sKey: u, sDisplay: s, nDaySortIndex: l }));
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
                      { key: e.sKey, className: Vn.a.TabContentsElement },
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
                { className: Object(V.a)(Vn.a.SaleSection), style: Br(t, a) },
                z.createElement(Cr, Object(U.a)({}, this.props)),
                z.createElement(
                  "div",
                  { className: Vn.a.TabContentsContainer },
                  this.RenderTabCapsules()
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        ur = (function(t) {
          function a() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { nMaxTabsPerRow: a.GetMaxTabsPerRow() }), e;
          }
          return (
            Object(U.d)(a, t),
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
              var i = Object(V.a)(Vn.a.SaleSectionTabsTab),
                l = n.tabs.map(function(e) {
                  var t = "Tab_" + e.unique_id;
                  return z.createElement(lr, {
                    key: t,
                    section: n,
                    selected: e === o,
                    tab: e,
                    language: r,
                    classNames: Object(V.a)(
                      i,
                      e === o && Vn.a.SaleSectionTabsSelected
                    ),
                    onTabSelected: function(e) {
                      return a.props.onTabSelected(n, e);
                    }
                  });
                });
              return z.createElement(
                z.Fragment,
                null,
                z.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      Vn.a.SaleSection,
                      Vn.a.SaleSectionTabs,
                      "SaleSectionTabs"
                    ),
                    style: Br(n, t)
                  },
                  z.createElement(
                    ot,
                    { className: Vn.a.SaleSectionTabContainer },
                    z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          J.a.SaleSectionContainer,
                          Vn.a.SaleSectionTabsRow
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
        })(z.Component),
        dr = a("uIWk"),
        pr = a("FhLd"),
        mr = Object(r.a)(function(e) {
          function a() {
            var e = { clauses: new Array() };
            (e.clauses = i.clauses.filter(function(e) {
              return 0 < e.or_tags.length;
            })),
              c(e);
          }
          var n = e.language,
            r = e.facets,
            t = e.fnApplyFilter,
            o = Object(z.useState)(function() {
              var t = { clauses: new Array() };
              return (
                r.forEach(function(e) {
                  return t.clauses.push({
                    type: "Must have",
                    or_tags: new Array()
                  });
                }),
                t
              );
            }),
            i = o[0],
            l = (o[1], Object(z.useState)(null)),
            s = l[0],
            c = l[1];
          return (
            Object(z.useEffect)(
              function() {
                t(s);
              },
              [s]
            ),
            z.createElement(
              z.Fragment,
              null,
              z.createElement(
                "h1",
                null,
                Object(q.f)("#FacetedBrowse_Heading")
              ),
              r.map(function(e, t) {
                return z.createElement(hr, {
                  language: n,
                  key: "facet_" + q.a.Get(e.name, n) + "_" + t,
                  facet: e,
                  filterClause: i.clauses[t],
                  fnOnUpdateFilter: a
                });
              })
            )
          );
        }),
        hr = Object(r.a)(function(e) {
          function a(e, t) {
            t ? r.or_tags.push(e) : r.or_tags.splice(r.or_tags.indexOf(e)), o();
          }
          var n = e.language,
            t = e.facet,
            r = e.filterClause,
            o = e.fnOnUpdateFilter,
            i = q.a.Get(t.name, n);
          return z.createElement(
            z.Fragment,
            null,
            z.createElement("h2", null, i),
            t.facetValues.map(function(e, t) {
              return z.createElement(vr, {
                language: n,
                key: "facet_" + i + "_value_" + q.a.Get(e.name, n) + "_" + t,
                value: e,
                fnOnToggleTag: a
              });
            })
          );
        }),
        vr = Object(r.a)(function(e) {
          var t = e.language,
            a = e.value,
            n = e.fnOnToggleTag,
            r = Object(z.useState)(!1),
            o = r[0],
            i = r[1],
            l = q.a.Get(a.name, t),
            s = Boolean(a.subtitle) ? q.a.Get(a.subtitle, t) : null;
          return z.createElement(
            "div",
            {
              className: o ? pr.FacetValueEnabled : pr.FacetValue,
              onClick: function(e) {
                i(!o), n(a.tag, !o);
              }
            },
            z.createElement("div", { className: pr.FacetValueName }, l),
            Boolean(s) &&
              z.createElement("div", { className: pr.FacetValueDescription }, s)
          );
        }),
        _r = z.lazy(function() {
          return Promise.all([a.e(1), a.e(5)]).then(a.bind(null, "NIbt"));
        });
      var br = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.m_customCSSNode = null),
              (t.state = {
                nSaleDayIndex: t.props.eventModel
                  ? t.props.eventModel.GetDayIndexFromEventStart()
                  : void 0
              }),
              Qa.a.Get().AddStreamsLoadedListener(t.OnBroadcastStreamsLoaded),
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
                        : ((t = Y.b.CLANSTEAMID),
                          (a = Y.b.ANNOUNCEMENT_GID),
                          [
                            4,
                            D.c.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                              new g.a(t),
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
              Qa.a
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
                          return Qa.b.k_ePrimary;
                        case "featured":
                          return Qa.b.k_eFeatured;
                        case "default_featured":
                          return Qa.b.k_eDefaultFeatured;
                        default:
                          return Qa.b.k_eGeneral;
                      }
                    })(i)),
                    (o.default_selection_priority = r),
                    (o.current_selection_priority = r));
                }
            }),
            (e.prototype.GetEventModel = function() {
              return this.props.eventModel
                ? this.props.eventModel
                : D.c.GetClanEventFromAnnouncementGID(Y.b.ANNOUNCEMENT_GID);
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
                ((e = document.getElementsByTagName("HEAD")[0]),
                (this.m_customCSSNode = document.createElement("style")),
                (this.m_customCSSNode.innerText = t.jsondata.sale_custom_css),
                e.appendChild(this.m_customCSSNode));
              for (var a = 0, n = t.GetSaleSections(); a < n.length; a++) {
                if ("event_schedule" === n[a].section_type) {
                  Qa.a.Get().DisableAutoPlay();
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
                Xa.BHasSalePageBackgroundOverride() &&
                  ((a = Xa.GetSalePageBackgroundOverride()),
                  (n = Xa.GetSalePageBackgroundWEBM()),
                  (r = Xa.GetSalePageBackgroundMP4()));
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
                  l = W.a.Get().GetPartnerEventPermissions(e.clanSteamID);
                return z.createElement(
                  S.a,
                  null,
                  z.createElement(
                    gr,
                    {
                      className: Object(V.a)(
                        Vn.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                        "SaleCustomCSS"
                      ),
                      backgroundImage: a,
                      backgroundColor: e.jsondata.sale_background_color
                    },
                    Boolean(r || n) &&
                      z.createElement(
                        "div",
                        { className: Vn.a.fullscreen_bg },
                        z.createElement(
                          "video",
                          {
                            key: Xa.GetLastDoorOpen(),
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            ref: function(e) {
                              e && (e.playbackRate = 0.9);
                            },
                            className: Object(V.a)(
                              Vn.a.SaleBackground,
                              Vn.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                              "SaleBackground",
                              Vn.a.fullscreen_bg__video
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
                          !Y.c.IN_CLIENT &&
                            z.createElement("source", {
                              src: r,
                              type: "video/mp4"
                            })
                        )
                      ),
                    z.createElement(
                      "div",
                      { className: Vn.a.SaleHeaderContainer },
                      e.jsondata.sale_header_overlay &&
                        z.createElement(fr, null)
                    ),
                    z.createElement(
                      "div",
                      {
                        className:
                          Vn.a.SaleOuterContainer +
                          " " +
                          Vn.a["CustomStyle_" + e.jsondata.sale_vanity_id] +
                          " SaleOuterContainer",
                        style: {
                          marginTop: e.jsondata.sale_header_offset + "px"
                        }
                      },
                      Boolean(
                        e.BEventCanShowBroadcastWidget() &&
                          e.BSaleShowBroadcastAtTopOfPage()
                      ) &&
                        z.createElement(
                          S.a,
                          null,
                          z.createElement(
                            "div",
                            { className: Vn.a.SaleBroadcastCtn },
                            z.createElement(
                              z.Suspense,
                              { fallback: z.createElement("div", null) },
                              z.createElement(
                                _r,
                                Object(U.a)({}, o, {
                                  bShowCapsuleArt: !0,
                                  fnRenderBroadcastContext: i
                                    ? function() {
                                        return z.createElement(xr, {
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
                        z.createElement(
                          S.a,
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
                            z.createElement($.a, {
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
                      z.createElement(Sr, {
                        bIsPreview: t,
                        event: e,
                        language: this.props.language,
                        promotionName: this.props.promotionName,
                        nSaleDayIndex: this.state.nSaleDayIndex,
                        broadcastEmbedContext: o
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
                          z.createElement(Lr, {
                            text: Object(q.f)("#Sale_SeeAllSpecials"),
                            url: e.jsondata.sale_browsemore_url,
                            color: e.jsondata.sale_browsemore_color,
                            bgcolor: e.jsondata.sale_browsemore_bgcolor
                          })
                        ),
                      l.can_edit &&
                        z.createElement(un, {
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
                { className: le.a.FlexCenter, style: { height: "500px" } },
                z.createElement(X.a, {
                  size: "medium",
                  string: Object(q.f)("#Loading")
                })
              );
            }),
            Object(U.c)([s.a], e.prototype, "OnBroadcastStreamsLoaded", null),
            Object(U.c)([s.a], e.prototype, "OnChangeDayIndex", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        gr = (function(t) {
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
                    Vn.a.SaleBackground,
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
        fr = (function(e) {
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
        Er = (function() {
          function e(e, t) {
            var a = this;
            (this.m_activeTab = null),
              (this.m_capsuleFilter = null),
              e &&
                ((this.m_activeTab = e).capsules && 0 !== e.capsules.length
                  ? ((this.m_capsuleFilter = new Set()),
                    Dr(e.capsules, t).forEach(function(e) {
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
            e
          );
        })(),
        yr = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_refTabSection = z.createRef()), e;
          }
          return (
            Object(U.d)(e, t),
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
                        0 < (t = Number(Vt(n.props.location, "tab")))
                          ? e.tabs.find(function(e) {
                              return e.unique_id === t;
                            })
                          : void 0) || e.tabs[0]),
                    r.set(e, new Er(a, n.props.nSaleDayIndex)));
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
                qt(this.props.history, "tab", String(t.unique_id)));
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
                h = new Er(null, this.props.nSaleDayIndex),
                v = [{ elements: [], activeTab: h }];
              c.GetSaleSections().forEach(function(e, t) {
                var a = v[v.length - 1].activeTab;
                if (a.ShouldShowSection(e)) {
                  var n,
                    r = e.diable_tab_id_filtering ? h : a,
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
                        !tn.GetHideWishlist()) ||
                      ("dlc_onsale" == n.smart_section_type &&
                        !tn.GetHideDLC()) ||
                      ("interactive_recommender_onsale" ==
                        n.smart_section_type &&
                        !tn.GetHideIRList())) &&
                    !Y.i.logged_in
                  )
                    p ||
                      ((i = z.createElement(Or, {
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
                        i = z.createElement(
                          jr,
                          Object(U.a)({ section: e, activeTab: r }, s.props)
                        );
                        break;
                      case "broadcast":
                        c.BEventCanShowBroadcastWidget() &&
                          !m &&
                          ((i = z.createElement(Rr, {
                            broadcastEmbedContext:
                              s.props.broadcastEmbedContext,
                            activeTab: r
                          })),
                          (m = !0));
                        break;
                      case "event_description":
                        i = z.createElement(
                          wr,
                          Object(U.a)({ section: e }, s.props)
                        );
                        break;
                      case "doors":
                        i = z.createElement(xn, {
                          strFontFamily: Mr(c.jsondata.sale_font, u)
                        });
                        break;
                      case "text_section":
                        i = z.createElement(
                          Tr,
                          Object(U.a)({ section: e }, s.props)
                        );
                        break;
                      case "tabs":
                        var l = d.get(e);
                        v.push({ activeTab: l, elements: [] }),
                          (i = z.createElement(
                            z.Fragment,
                            null,
                            z.createElement("div", { ref: s.m_refTabSection }),
                            z.createElement(
                              ur,
                              Object(U.a)({ section: e }, s.props, {
                                activeTab: l.GetTab(),
                                onTabSelected: s.OnTabSelected
                              })
                            )
                          )),
                          (o = !1);
                        break;
                      case "tab_buttons":
                        i = z.createElement(
                          sr,
                          Object(U.a)({ section: e }, s.props, {
                            activeTab: r,
                            onTabSelected: s.OnTabSelected,
                            hideActiveTab: !0
                          })
                        );
                        break;
                      case "curator":
                        e.curator_clan_id &&
                          (i = z.createElement(
                            "div",
                            {
                              style: {
                                width: "100%",
                                margin: "0 auto",
                                maxWidth: "940px"
                              }
                            },
                            z.createElement($.a, {
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
                        i = z.createElement(
                          Jn.c,
                          Object(U.a)({ section: e }, s.props, { activeTab: r })
                        );
                        break;
                      case "vo_internal":
                        if (e.internal_section_data)
                          switch (e.internal_section_data.internal_type) {
                            case "subscription_pricing":
                              i = z.createElement(
                                rr,
                                Object(U.a)({ section: e }, s.props)
                              );
                              break;
                            case "tab_contents":
                              i = z.createElement(
                                cr,
                                Object(U.a)({ section: e }, s.props, {
                                  tab: a.GetTab(),
                                  showReferences: !1
                                })
                              );
                              break;
                            case "tab_references":
                              i = z.createElement(
                                cr,
                                Object(U.a)({ section: e }, s.props, {
                                  tab: a.GetTab(),
                                  showReferences: !0
                                })
                              );
                          }
                        break;
                      case "sale_item_browser":
                        i = z.createElement(
                          Ir,
                          Object(U.a)({ section: e }, s.props, { activeTab: r })
                        );
                    }
                  v[v.length - 1].elements.push(
                    z.createElement(
                      S.a,
                      { key: "SaleSectionIndex_" + e.unique_id + "_" + t },
                      o
                        ? z.createElement(
                            "div",
                            {
                              id: "SaleSection_" + (e.unique_id || t),
                              className: Object(V.a)("SaleSectionCtn")
                            },
                            i
                          )
                        : i
                    )
                  );
                }
              });
              var t = v.map(function(e, t) {
                return z.createElement(
                  "div",
                  {
                    key: "TabSection_" + t,
                    className: Vn.a.SaleSectionTabListContainer
                  },
                  e.elements
                );
              });
              return z.createElement(
                "div",
                { className: Vn.a.SaleSectionListContainer },
                t
              );
            }),
            Object(U.c)([s.a], e.prototype, "OnTabSelected", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Sr = Object(i.i)(yr);
      var Cr = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language;
          if (!Nr(t, n, a.clanSteamID.GetAccountID())) return null;
          var r,
            o,
            i,
            l = z.createElement(
              "div",
              {
                className: J.a.SaleSectionHeader,
                style: ((r = t),
                (i = n),
                {
                  fontFamily: Mr((o = a).jsondata.sale_font, i),
                  fontWeight: o.jsondata.sale_font_weight,
                  fontSize: o.jsondata.sale_section_font_size,
                  textTransform: o.jsondata.sale_section_disable_capitalize
                    ? "initial"
                    : null,
                  color: r.label_color
                })
              },
              Nr(t, n, a.clanSteamID.GetAccountID())
            );
          return (
            t.label_link &&
              (l = z.createElement(
                "a",
                {
                  href: Gr(t.label_link),
                  target: Y.c.IN_CLIENT ? void 0 : "_blank"
                },
                l
              )),
            l
          );
        },
        Or = function(e) {
          var t = e.section,
            a = e.event;
          e.language;
          return z.createElement(
            "div",
            { className: Vn.a.SaleSection, style: Br(t, a) },
            z.createElement(Cr, Object(U.a)({}, e)),
            z.createElement(
              "div",
              { className: Vn.a.SaleSectionLoginPrompt },
              Object(q.f)("#SalePage_LoginPrompt"),
              z.createElement(
                "button",
                { onClick: Qt.a, className: Vn.a.LoginButton },
                Object(q.f)("#Login_SignIn")
              )
            )
          );
        },
        wr = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview;
          return z.createElement(
            "div",
            {
              className: Object(V.a)(Vn.a.SaleSection, pn.a.SaleSectionCtn),
              style: Br(t, a)
            },
            z.createElement(Cr, Object(U.a)({}, e)),
            z.createElement(
              "div",
              {
                className: Object(V.a)(J.a.SaleSectionContainer, "SaleTextCtn")
              },
              z.createElement(vn.b, {
                text: a.GetDescriptionWithFallback(n),
                partnerEventStore: D.c,
                showErrorInfo: r,
                event: a
              })
            )
          );
        },
        Tr = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview,
            o = q.a.GetWithFallback(t.text_section_contents, n);
          return z.createElement(
            "div",
            {
              className: Object(V.a)(Vn.a.SaleSection, pn.a.SaleSectionCtn),
              style: Br(t, a)
            },
            z.createElement(Cr, Object(U.a)({}, e)),
            z.createElement(
              "div",
              {
                className: Object(V.a)(J.a.SaleSectionContainer, "SaleTextCtn")
              },
              z.createElement(vn.b, {
                text: o,
                partnerEventStore: D.c,
                showErrorInfo: r,
                event: a
              })
            )
          );
        },
        Ir = (function(e) {
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
                At.a,
                {
                  placeholderHeight: "100vh",
                  rootMargin: "0px 0px 100% 0px",
                  mode: "LoadAndUnload",
                  className: Object(V.a)(Vn.a.SaleSection, pn.a.SaleSectionCtn),
                  style: Br(t, a)
                },
                z.createElement(Cr, Object(U.a)({}, this.props)),
                z.createElement(Qn, Object(U.a)({}, this.props))
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        jr = (function(t) {
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
                nMaxCapsulesPerRow: e.GetMaxCapsulesPerRow()
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
            (e.prototype.GetMaxCapsulesPerRow = function() {
              var e = Object(_a.t)(this.props.section.section_type);
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
                  Object(w.a)(
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
                  Object(_e.g)(u);
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
                  Object(_e.g)(t.capsules),
                    Object(_e.g)(t.links),
                    Object(_e.g)(t.events),
                    (t.rtime32_last_modified = a.rtime32_last_modified),
                    window.sessionStorage.setItem(n, JSON.stringify(t));
                }
              }
              return t;
            }),
            (e.prototype.LoadCapsules = function(k) {
              return (
                void 0 === k && (k = 0),
                Object(U.b)(this, void 0, void 0, function() {
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
                    h,
                    v,
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
                    j;
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
                          (u = o.nSaleDayIndex),
                          "items" !== r.section_type ||
                          "sale_tabhub" == r.smart_section_type
                            ? [3, 7]
                            : [4, L.a.HintLoad()]
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
                              (function(p, m, h, v, _, b) {
                                return Object(U.b)(
                                  this,
                                  void 0,
                                  void 0,
                                  function() {
                                    var t, a, n, r, o, i, l, s, c, u, d;
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
                                                  Ja.GetDiscounts({
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
                                                Ja.GetDiscounts({
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
                                            : [4, Ja.GetTopN(_, i)];
                                        case 5:
                                          return [
                                            2,
                                            (l = e.sent()).map(function(e) {
                                              return { id: e, type: "game" };
                                            })
                                          ];
                                        case 6:
                                          if (!Object(_a.g)(t)) return [3, 11];
                                          e.label = 7;
                                        case 7:
                                          return (
                                            e.trys.push([7, 9, , 10]),
                                            [
                                              4,
                                              Ja.GetSaleGamesByFlavor(
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
                                                (l = b.filter(function(e) {
                                                  return (
                                                    !L.a.BOwnsApp(e) &&
                                                    (("wishlist" === t &&
                                                      L.a.BIsGameWishlisted(
                                                        e
                                                      )) ||
                                                      ("interactive_recommender" ===
                                                        t &&
                                                        L.a.BIsGameRecommended(
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
                                          return tn.GetHideWishlist()
                                            ? [3, 16]
                                            : [4, Ja.GetWishlistOnSale()];
                                        case 15:
                                          (l = e.sent()),
                                            (s = "game"),
                                            (e.label = 16);
                                        case 16:
                                          return [3, 29];
                                        case 17:
                                          return (
                                            (s = "dlc"),
                                            tn.GetHideDLC()
                                              ? [3, 19]
                                              : [
                                                  4,
                                                  Ja.GetDLCForGamesInMyLibraryOnSale()
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
                                              Ja.GetSoundtracksForGamesInMyLibraryOnSale()
                                            ]
                                          );
                                        case 21:
                                          return (l = e.sent()), [3, 29];
                                        case 22:
                                          return (
                                            (s = "game"),
                                            tn.GetHideIRList()
                                              ? [3, 24]
                                              : [
                                                  4,
                                                  Ja.GetInteractiveRecommendationsOnSale()
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
                                              Ja.GetTagRecommendorForThisSale(
                                                h,
                                                i,
                                                p
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
                                              (u = an.Get()).LoadSubscriptionInfo(
                                                c
                                              )
                                            ]
                                          );
                                        case 28:
                                          return (
                                            e.sent(),
                                            (d = u.GetAllAppForMaster(c)),
                                            (l = Array.from(d).filter(function(
                                              e
                                            ) {
                                              return L.a.BIsGameRecommended(e);
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
                          (d = Dr(
                            (d = d.filter(function(e) {
                              return c.ShouldShowCapsule(e);
                            })),
                            u
                          )),
                          (m = !1),
                          (h = d.length),
                          0 < (v = this.GetRowsToShow(k)) &&
                            !s &&
                            "store" === Object(Y.e)() &&
                            ((_ =
                              (function(e, t) {
                                for (var a = Ar(e), n = 0, r = 0; r < t; r++)
                                  n += a[r % a.length];
                                return n;
                              })(r, v) + 4) +
                              4 <
                              h &&
                              ((h = _), (m = !0))),
                          0 < (S = Object(_a.s)(r)) &&
                            ((b = Math.max(S + 5, Math.floor(1.1 * S))),
                            (h = Math.min(h, b))),
                          d.length > h && (d = d.slice(0, h)),
                          (g = kr(r)),
                          [4, Object(Zn.d)(d, g)]
                        );
                      case 5:
                        return (
                          e.sent(),
                          (f = new Array()),
                          [4, Object(Zn.a)(d, g, f)]
                        );
                      case 6:
                        return (
                          (E = e.sent()),
                          (y = f.length),
                          0 < (S = Object(_a.s)(r)) &&
                            S < E.length &&
                            (E = E.slice(0, S)),
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
                          : ((C = void 0),
                            !r.smart_section ||
                            ("recent_events" !== r.smart_section_type &&
                              "recent_tagged_events" !== r.smart_section_type)
                              ? [3, 13]
                              : "recent_events" !== r.smart_section_type
                              ? [3, 9]
                              : [4, en.Get().GetRecentEventsForSalesPage(i)]);
                      case 8:
                        return (O = e.sent()), [3, 11];
                      case 9:
                        return [
                          4,
                          en.Get().GetRecentTaggedEventsForSalesPage(i, r)
                        ];
                      case 10:
                        (O = e.sent()), (e.label = 11);
                      case 11:
                        return [
                          4,
                          D.c.LoadBatchPartnerEventsByAnnouncementGID(
                            O.map(function(e) {
                              return e.gid;
                            }),
                            void 0
                          )
                        ];
                      case 12:
                        return (C = e.sent()), [3, 15];
                      case 13:
                        return [
                          4,
                          D.c.LoadBatchPartnerEventsByAnnouncementGID(
                            null,
                            r.events.map(function(e) {
                              return e.announcement_gid;
                            })
                          )
                        ];
                      case 14:
                        (C = e.sent()), (e.label = 15);
                      case 15:
                        return (
                          (w = C.map(function(e) {
                            return e.GID;
                          })),
                          (w = this.GetCachedRandomizedOrder("events2", w)),
                          (C = w.map(function(e) {
                            return D.c.GetClanEventModel(e);
                          })),
                          (T = C.filter(function(e) {
                            return !!e && c.ShouldShowEvent(e);
                          })),
                          de.a.LoadAppLinkInfo(
                            T.map(function(e) {
                              return e.appid;
                            })
                          ),
                          this.setState({
                            events: T,
                            bInitialLoadComplete: !0
                          }),
                          [3, 19]
                        );
                      case 16:
                        return "links" !== r.section_type &&
                          "sale_tabhub" !== r.smart_section_type
                          ? [3, 19]
                          : ((I = r.links),
                            "sale_tabhub" !== r.smart_section_type
                              ? [3, 18]
                              : [4, Ja.GetSaleTags()]);
                      case 17:
                        (j = e.sent()),
                          (I = j.map(function(e) {
                            return {
                              url: e.url,
                              localized_link_capsule: void 0,
                              materialized_link_capsule: e.square
                            };
                          })),
                          (I = this.GetCachedRandomizedOrder("links", I)),
                          (e.label = 18);
                      case 18:
                        this.setState({ links: I, bInitialLoadComplete: !0 }),
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
                    var a = Ar(e),
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
              var a = Object(_a.q)(t);
              return a <= 0 ? 0 : a + e;
            }),
            (e.prototype.WrapWithFacetedBrowsingControls = function(e, t, a) {
              return z.createElement(
                "div",
                { className: pr.FacetedBrowseCtn },
                z.createElement(
                  "div",
                  { className: pr.FacetedBrowseControls },
                  z.createElement(mr, {
                    language: this.props.language,
                    facets: t,
                    fnApplyFilter: a
                  })
                ),
                z.createElement("div", { className: pr.FacetedBrowseItems }, e)
              );
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props,
                a = t.event,
                n = t.bIsPreview,
                r = t.language,
                o = this.state,
                i = o.bInitialLoadComplete,
                l = o.bIsCapsuleArrayTruncated,
                s = o.nHiddenCapsules,
                c = o.capsules,
                u = o.links,
                d = o.events,
                p = o.bScreenIsWide,
                m = o.nMaxCapsulesPerRow,
                h = o.bAwaitingShowContentLoading;
              if (!i) return null;
              var v = this.GetSectionForSession(),
                _ = 1 === c.length,
                b = _ ? [1] : Ar(v),
                g = (function(e) {
                  var t = e.event,
                    r = e.section,
                    a = e.capsules,
                    n = e.links,
                    o = e.events,
                    i = e.language,
                    l = e.bShowParentApp,
                    s = e.bCanShowSingleRowCapsules,
                    c = t.clanSteamID.GetAccountID(),
                    u = t.BIsLockedToAppOwners();
                  {
                    if (Boolean("events" === r.section_type))
                      return o
                        ? o.map(function(t) {
                            return z.createElement(
                              "div",
                              {
                                key: r.unique_id + "_" + t.GID,
                                style: {},
                                className: hn.a.OtherEvents
                              },
                              z.createElement(Ge.a, { event: t }),
                              z.createElement(fn, {
                                event: t,
                                openNewWindow: !0,
                                appInfo: r.hide_prices
                                  ? void 0
                                  : de.a.GetAppLinkInfo(t.appid),
                                onClick: function(e) {
                                  W.a.Get().RecordEventRead(t, 8),
                                    Object(wa.a)(t, Z.m(e)),
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
                            return z.createElement(jn.b, {
                              key: r.unique_id + "_" + t,
                              link: e,
                              language: i,
                              clanAccountID: c,
                              strClassName: Vn.a.LinkCapsule
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
                              ? z.createElement(jn.f, {
                                  key: n,
                                  capsule: e,
                                  bShowParentApp: l,
                                  bUseSubscriptionLayout: u,
                                  bShowDemoButton: r.show_as_demos,
                                  bHidePrice: r.hide_prices
                                })
                              : z.createElement(
                                  "div",
                                  {
                                    key: n,
                                    className: Vn.a.AppSummaryWidgetCtn
                                  },
                                  z.createElement(jn.g, {
                                    id: e.id,
                                    type: e.type,
                                    bUseSubscriptionLayout: u,
                                    bShowDemoButton: r.show_as_demos,
                                    bHidePrice: r.hide_prices
                                  })
                                );
                          })
                        : [];
                  }
                  return null;
                })({
                  event: a,
                  section: v,
                  capsules: c,
                  links: u,
                  events: d,
                  language: r,
                  bCanShowSingleRowCapsules:
                    (_ && 1 < m) ||
                    Ar(v).every(function(e) {
                      return 1 === e;
                    }),
                  bShowParentApp: kr(v)
                }).filter(function(e) {
                  return !!e;
                }),
                f = null;
              if (0 < g.length) {
                var E = Object(_a.r)(v),
                  y = Math.min(b[0], m),
                  S = v.show_as_carousel && E <= 1;
                if (S && g.length > y)
                  f = z.createElement(
                    xt,
                    {
                      hideArrows: !p,
                      visibleElements: y,
                      className: Object(V.a)(
                        "SaleSectionCarousel",
                        "SaleSectionCarouselPadding"
                      ),
                      useTestScrollbar: !0,
                      bLazyRenderChildren: !0
                    },
                    g
                  );
                else {
                  var C = this.GetRowsToShow(this.state.nShowAdditionalRows),
                    O = !0;
                  if (v.show_as_carousel) (C = E), (O = S);
                  else if (0 == this.state.nShowAdditionalRows && 0 < C) {
                    for (var w = 0, T = 0; w < C; w++) {
                      if ((T += N = Math.min(b[w % b.length], m)) > g.length)
                        break;
                    }
                    C = Math.max(2, w);
                  }
                  for (
                    var I, j = new Array(), k = new Array(), D = 0, L = 0;
                    D < g.length;
                    L++
                  ) {
                    for (var G = 0; (0 == C || G < C) && D < g.length; G++) {
                      var N = Math.min(b[G % b.length], m),
                        A = Math.min(N, g.length - D);
                      A < N && 0 === G && (N = Math.max(2, A));
                      var B = N - A,
                        M =
                          B % 2 != 0
                            ? "minmax(0, 0.5fr) repeat(" +
                              (N - 1) +
                              ", minmax(0, 1fr)) minmax(0, 0.5fr)"
                            : "repeat(" + N + ", minmax(0, 1fr))",
                        R = null,
                        x = null;
                      if (0 < B)
                        for (
                          var F = Math.floor((1 + B) / 2),
                            R = new Array(),
                            x = new Array(),
                            P = 0;
                          P < F;
                          P++
                        )
                          R.push(z.createElement("div", { key: "front_" + P })),
                            x.push(
                              z.createElement("div", { key: "back_" + P })
                            );
                      k.push(
                        z.createElement(
                          "div",
                          {
                            key: "Row_" + G,
                            className: Object(V.a)(
                              J.a.SaleSectionContainer,
                              Vn.a.SaleSectionContainer
                            ),
                            style: { gridTemplateColumns: 1 < N ? M : null }
                          },
                          R,
                          g.slice(D, D + A),
                          x
                        )
                      ),
                        (D += A);
                    }
                    if (O) break;
                    j.push(
                      z.createElement(
                        "div",
                        { className: Vn.a.CarouselPage, key: "Page_" + L },
                        k
                      )
                    ),
                      (k = []);
                  }
                  f =
                    0 == j.length
                      ? ((I = l || g.length > D),
                        z.createElement(
                          z.Fragment,
                          null,
                          k,
                          I &&
                            z.createElement(
                              "div",
                              { className: Vn.a.ShowContentsContainer },
                              h
                                ? z.createElement(X.a, { size: "small" })
                                : z.createElement(
                                    "button",
                                    {
                                      onClick: this.ShowMoreContents,
                                      className: Vn.a.ShowContentsButton
                                    },
                                    Object(q.f)("#Sale_ShowMore")
                                  )
                            )
                        ))
                      : z.createElement(
                          xt,
                          {
                            hideArrows: !p,
                            visibleElements: 1,
                            className: "SaleSectionCarousel",
                            useTestScrollbar: !0,
                            bLazyRenderChildren: !0
                          },
                          j
                        );
                }
              }
              if (!f) {
                if (!n) return null;
                f = z.createElement(
                  "div",
                  { className: Vn.a.preview_placeholder_section },
                  Object(q.f)(
                    v.smart_section
                      ? "#Sale_SmartPlaceHolder"
                      : "#Sale_PlaceHolder"
                  )
                );
              }
              var H = v.label_link ? Gr(v.label_link) : void 0;
              return (
                v.enable_faceted_browsing &&
                  (f = this.WrapWithFacetedBrowsingControls(
                    f,
                    v.facets,
                    function(d) {
                      d && 0 !== d.clauses.length
                        ? Object(U.b)(e, void 0, void 0, function() {
                            var a, t, n, r, o, i, l, s, c, u;
                            return Object(U.e)(this, function(e) {
                              switch (e.label) {
                                case 0:
                                  (a = new Array()),
                                    (t = 0),
                                    (n = this.state.allCapsules),
                                    (e.label = 1);
                                case 1:
                                  return t < n.length
                                    ? ((r = n[t]), [4, Object(Zn.c)(r)])
                                    : [3, 4];
                                case 2:
                                  for (
                                    o = e.sent(),
                                      i = o.map(function(e) {
                                        return de.a.GetAppLinkInfo(e);
                                      }),
                                      l = function(e) {
                                        var t = new Array();
                                        if (
                                          (e.tags.forEach(function(e) {
                                            return t.push(e.name);
                                          }),
                                          (function(e, t) {
                                            if (t && t.clauses) {
                                              var a = new Set();
                                              e.forEach(function(e) {
                                                return a.add(
                                                  e.toLocaleLowerCase()
                                                );
                                              });
                                              for (
                                                var n = 0, r = t.clauses;
                                                n < r.length;
                                                n++
                                              ) {
                                                var o = r[n];
                                                if (o.or_tags) {
                                                  for (
                                                    var i = !1,
                                                      l = 0,
                                                      s = 0,
                                                      c = o.or_tags;
                                                    s < c.length;
                                                    s++
                                                  ) {
                                                    var u = c[s];
                                                    if (
                                                      u &&
                                                      (l++,
                                                      (i = a.has(
                                                        u.toLocaleLowerCase()
                                                      )))
                                                    )
                                                      break;
                                                  }
                                                  if (
                                                    0 !== l &&
                                                    !("Must have" === o.type
                                                      ? i
                                                      : !i)
                                                  )
                                                    return;
                                                }
                                              }
                                            }
                                            return 1;
                                          })(t, d))
                                        )
                                          return a.push(r), "break";
                                      },
                                      s = 0,
                                      c = i;
                                    s < c.length &&
                                    ((u = c[s]), "break" !== l(u));
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
                        : e.setState({ capsules: e.state.allCapsules });
                    }
                  )),
                z.createElement(
                  At.a,
                  {
                    placeholderHeight: this.EstimateComponentHeight(v),
                    rootMargin: "0px 0px 100% 0px",
                    className: Object(V.a)(
                      Vn.a.SaleSection,
                      v.show_as_carousel && Vn.a.CarouselDisplay,
                      pn.a.SaleSectionCtn,
                      "SaleSectionForCustomCSS"
                    ),
                    style: Br(v, a)
                  },
                  z.createElement(
                    "div",
                    { className: Vn.a.SaleSectionTitleCtn },
                    z.createElement(Cr, Object(U.a)({}, this.props)),
                    0 < s &&
                      z.createElement(
                        "div",
                        {
                          className: Vn.a.SaleSectionSubtext,
                          "data-tooltip-text": Object(q.f)(
                            "#Sale_HiddenItem_Tooltip"
                          )
                        },
                        z.createElement(
                          "a",
                          { href: Y.c.STORE_BASE_URL + "account/preferences" },
                          Object(q.n)(
                            1 == s
                              ? "#Sale_HiddenItem_Single_Short"
                              : "#Sale_HiddenItems_Short",
                            s
                          )
                        )
                      )
                  ),
                  f,
                  Boolean(H) &&
                    z.createElement(
                      "div",
                      { className: Vn.a.SaleViewAll },
                      z.createElement(
                        "a",
                        { href: H, target: Y.c.IN_CLIENT ? void 0 : "_blank" },
                        Object(q.f)("#btn_live_streams_all")
                      )
                    )
                )
              );
            }),
            Object(U.c)([s.a], e.prototype, "ShowMoreContents", null),
            Object(U.c)([s.a], e.prototype, "LoadCapsules", null),
            Object(U.c)([s.a], e.prototype, "OnResize", null),
            Object(U.c)(
              [s.a],
              e.prototype,
              "WrapWithFacetedBrowsingControls",
              null
            ),
            (e = a = Object(U.c)([r.a], e))
          );
        })(z.Component);
      function kr(e) {
        return (
          "dlc" === e.smart_section_type ||
          "dlc_onsale" === e.smart_section_type ||
          "dlc_music_onsale" === e.smart_section_type
        );
      }
      function Dr(e, t) {
        return e.filter(function(e) {
          return null == e.visibility_index || e.visibility_index == t;
        });
      }
      var Lr = function(e) {
        var t = e.text,
          a = e.url,
          n = e.color,
          r = e.bgcolor;
        return z.createElement(
          "a",
          {
            className: J.a.BrowseMoreButton,
            href: Gr(a),
            target: "_blank",
            style: { backgroundColor: r, color: n }
          },
          t || Object(q.f)("#Sale_BrowseMore_Text_Default")
        );
      };
      function Gr(t) {
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
      function Nr(e, t, a, n) {
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
            var t = g.a.InitFromClanID(e.curator_clan_id),
              a = dr.a.GetCreatorHome(t);
            if (a) return Object(q.f)("#Sale_CuratorSection_Name", a.GetName());
          }
          return "#Sale_CuratorSection";
        })(e);
        if (null !== r) return r && r.startsWith("#") ? Object(q.f)(r) : r;
        var o =
            q.a.GetWithFallback(e.localized_label, t) ||
            ("#Sale_default_label" === e.default_label
              ? ""
              : Object(q.f)(e.default_label)),
          i = q.a.GetWithFallback(e.localized_label_image, t);
        if (n || !i) return o;
        var l = Y.c.MEDIA_CDN_COMMUNITY_URL + "images/clans/" + a + "/" + i;
        return z.createElement("img", { loading: "lazy", src: l, alt: o });
      }
      function Ar(e) {
        return e.capsules_per_row_array
          ? e.capsules_per_row_array
          : e.adaptive_capsules_per_row
          ? [2, 3, 4, 3]
          : [e.capsules_per_row || 1];
      }
      function Br(e, t) {
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
      function Mr(e, t) {
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
      var Rr = (function(t) {
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
              var t = this.props.activeTab;
              return z.createElement(
                S.a,
                null,
                z.createElement(
                  z.Suspense,
                  { fallback: z.createElement("div", null) },
                  z.createElement(
                    ue.a,
                    { onEnter: this.OnEnter },
                    z.createElement(
                      "div",
                      { className: Vn.a.SaleBroadcastSection },
                      Boolean(this.state.bOnceVisible) &&
                        z.createElement(
                          _r,
                          Object(U.a)({}, this.props.broadcastEmbedContext, {
                            bShowCapsuleArt: !0,
                            fnFilterStreams: function(e) {
                              return t.ShouldShowOnTab(e.appid);
                            }
                          })
                        ),
                      Boolean(!this.state.bOnceVisible) &&
                        z.createElement("span", null, Object(q.f)("#Loading"))
                    )
                  )
                )
              );
            }),
            Object(U.c)([s.a], e.prototype, "OnEnter", null),
            e
          );
        })(z.Component),
        xr = Object(r.a)(function(e) {
          var t = Qa.a.Get().GetPlayReadyStream(e.broadcastContext),
            a = t && t.appid;
          f.a.EnsureStoreCapsuleInfoLoaded(a);
          var n = f.a.GetStoreCapsuleInfo(a),
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
            { className: Vn.a.SalePageBroadcastContextHover },
            z.createElement("img", {
              src: l,
              className: Vn.a.AlbumCoverImage,
              onClick: i
            }),
            z.createElement(
              "div",
              { className: Vn.a.AlbumTitle, onClick: i },
              " ",
              o,
              " "
            )
          );
        }),
        Fr = a("BVKn"),
        Pr = Fr.a.Get(),
        Hr = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.state = {
                lookupGID: t.props.event_gid
                  ? t.props.event_gid
                  : Pr.GetClanEventGIDFromAnnouncementGID(
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
                        Pr.GetClanEventModel(this.props.event_gid)
                      )
                        return [3, 5];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          Pr.LoadPartnerEventGeneric(
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
                        Pr.LoadPartnerEventGeneric(
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
                                Object(se.a)(e).strErrorMsg
                            );
                          }),
                        [3, 4]
                      );
                    case 4:
                      return [3, 6];
                    case 5:
                      this.props.announcement_gid &&
                        !Pr.GetClanEventGIDFromAnnouncementGID(
                          this.props.announcement_gid
                        ) &&
                        Pr.LoadPartnerEventGeneric(
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
                                Object(se.a)(e).strErrorMsg
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
                  Pr.GetClanEventModel(this.state.lookupGID);
              n && n.appid
                ? (t =
                    (e = f.a.GetStoreCapsuleInfo(n.appid).GetAppStoreData()) &&
                    e.title)
                : n &&
                  n.clanSteamID &&
                  (t =
                    (a = E.a.GetClanInfoByClanAccountID(
                      n.clanSteamID.GetAccountID()
                    )) && a.group_name);
              var r,
                o = n && n.GetNameWithFallback(Object(G.g)(Y.c.LANGUAGE));
              n &&
                t &&
                o &&
                ((r = Object(q.f)(
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
                t = Pr.GetClanEventModel(this.state.lookupGID);
              t &&
                ((e = Object(me.d)(t, me.a.k_eStoreNewsHub, "allowRelative")),
                this.props.history.push(e));
            }),
            (e.prototype.render = function() {
              var e = Pr.GetClanEventModel(this.state.lookupGID);
              return e
                ? this.props.bInfiniteScroll
                  ? _.a.createElement(
                      S.a,
                      null,
                      _.a.createElement(ce, {
                        appid: e.appid,
                        trackingLocation: 7,
                        announcementGID: e.GetAnnouncementGID(),
                        partnerEventStore: Pr,
                        eventModel: e,
                        showAppHeader: !0,
                        closeModal: this.InfiniteScrollCloseModal
                      })
                    )
                  : _.a.createElement(
                      S.a,
                      null,
                      _.a.createElement(Ln, {
                        lang: Object(G.g)(Y.c.LANGUAGE),
                        partnerEventStore: Pr,
                        event: e,
                        adminPanel: _.a.createElement(un, {
                          eventModel: e,
                          partnerEventStore: Pr
                        }),
                        otherEventRow: _.a.createElement(gn, {
                          clanAccountID: e.clanSteamID.GetAccountID(),
                          gidAnnouncement: e.AnnouncementGID,
                          partnerEventStore: Pr
                        })
                      })
                    )
                : _.a.createElement(X.a, null);
            }),
            Object(U.c)([s.a], e.prototype, "InfiniteScrollCloseModal", null),
            (e = Object(U.c)([r.a], e))
          );
        })(_.a.Component),
        zr = Object(i.i)(Hr),
        Ur = a("WBba"),
        Wr = a("r+ba"),
        Vr = a("apHd"),
        Zr = (function(n) {
          function e(e) {
            var a = n.call(this, e) || this;
            a.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: []
            };
            var t = Object(Vr.a)("EventWebRowEmbed");
            return (
              a.ValidateStoreDefault(t) &&
                ((a.state.bPreLoaded = t.bPreLoaded),
                (a.state.announcementGIDList = t.announcementGIDList),
                (a.state.events = []),
                a.state.announcementGIDList.forEach(function(e) {
                  var t = D.c.GetClanEventFromAnnouncementGID(e);
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
                return _.a.createElement(
                  "div",
                  { className: le.a.FlexCenter },
                  _.a.createElement(X.a, { size: "medium", position: "center" })
                );
              if (n && 0 === n.length) return null;
              var e = window.screen.width <= 500 ? 1 : 2,
                t = this.props,
                r = t.partnerEventStore,
                o = t.strClassName,
                i = t.appid,
                l = t.trackingLocation;
              return _.a.createElement(
                "div",
                { className: o },
                this.state.bShowModal &&
                  _.a.createElement(ce, {
                    classname: Wr.StoreHeaderAdjust,
                    appid: i,
                    trackingLocation: l,
                    announcementGID: this.state.announcementGID
                      ? this.state.announcementGID
                      : this.state.modalInitialEvent.AnnouncementGID,
                    partnerEventStore: r,
                    eventModel: this.state.modalInitialEvent,
                    closeModal: this.CloseModal
                  }),
                _.a.createElement(
                  "h2",
                  null,
                  Object(q.f)("#EventBrowse_RecentEvents")
                ),
                _.a.createElement(
                  "div",
                  { className: Wr.SectionButtonCtn },
                  this.props.bViewAllShowInfiniteScroll
                    ? _.a.createElement(
                        "div",
                        {
                          className: Wr.SectionButton,
                          onClick: function() {
                            return a.ShowModal(n[0]);
                          }
                        },
                        Object(q.f)("#EventBrowse_MoreEventsBtn")
                      )
                    : _.a.createElement(
                        me.c,
                        {
                          eventModel: n[0],
                          route: me.a.k_eViewWebSiteHub,
                          forceAnchor: !0,
                          className: Wr.SectionButton
                        },
                        Object(q.f)("#EventBrowse_MoreEventsBtn")
                      )
                ),
                _.a.createElement(
                  "div",
                  { className: Wr.EventsSummariesCtn },
                  n.slice(0, e).map(function(t) {
                    var e =
                      1 === n.length && 500 < window.screen.width ? En : fn;
                    return _.a.createElement(e, {
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
            Object(U.c)([s.a], e.prototype, "ShowModal", null),
            Object(U.c)([s.a], e.prototype, "CloseModal", null),
            e
          );
        })(_.a.Component),
        qr = (function(r) {
          function e(e) {
            var t = r.call(this, e) || this;
            t.m_rtimeOldest = 0;
            var a = M.a.GetTimeNowWithOverrideAsDate(),
              n = new Date(a.setUTCHours(0, 0, 0, 0) - 15552e6);
            return (t.m_rtimeOldest = Math.floor(n.getTime() / 1e3)), t;
          }
          return (
            Object(U.d)(e, r),
            (e.prototype.render = function() {
              var e = this.props.appid;
              return _.a.createElement(Zr, {
                appid: e,
                partnerEventStore: Fr.a.Get(),
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
        })(_.a.Component),
        Yr = a("2l+k"),
        Qr = (function() {
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
            (e.prototype.HintLoadAccounts = function() {
              return Object(U.b)(this, void 0, void 0, function() {
                return Object(U.e)(this, function(e) {
                  return [2];
                });
              });
            }),
            e
          );
        })(),
        Jr = a("wjMc"),
        Kr = a("d+Me"),
        Xr = a("WGPV"),
        $r = a.n(Xr),
        eo = Object(i.i)(function(e) {
          var t = Object(z.useState)(!0),
            a = t[0],
            n = t[1];
          if (
            (Object(z.useEffect)(function() {
              Object(U.b)(void 0, void 0, void 0, function() {
                return Object(U.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return E.a.Init(), [4, Qr.Get().HintLoadAccounts()];
                    case 1:
                      return e.sent(), n(!1), [2];
                  }
                });
              });
            }, []),
            a)
          )
            return _.a.createElement(X.a, {
              string: Object(q.f)("#Loading"),
              size: "medium"
            });
          var r = Qr.Get().GetTrustedEnabledClans(!0),
            o = Qr.Get().GetTrustedEnabledClans(!1);
          return _.a.createElement(
            "div",
            null,
            _.a.createElement(
              S.a,
              null,
              _.a.createElement(
                "h1",
                null,
                Object(q.f)("#RSSModeration_Title")
              ),
              _.a.createElement(to, {
                rgClanIDs: r,
                strTitle: Object(q.f)("#RSSModeration_TrustTitle")
              }),
              _.a.createElement(to, {
                rgClanIDs: o,
                strTitle: Object(q.f)("#RSSModeration_RestTitle")
              })
            )
          );
        }),
        to = function(e) {
          var t = e.rgClanIDs,
            a = e.strTitle,
            n = Object(z.useState)(!1),
            r = n[0],
            o = n[1],
            i = null;
          return (
            r ||
              (i = t.map(function(e) {
                return _.a.createElement(ao, { key: e, clanAccountID: e });
              })),
            _.a.createElement(
              "div",
              { className: Object(V.a)($r.a.SectionContainer) },
              _.a.createElement(
                "h2",
                {
                  className: Object(V.a)($r.a.ModSectionTitle),
                  onDoubleClick: function() {
                    return o(!r);
                  }
                },
                a,
                _.a.createElement("span", null, " "),
                _.a.createElement(
                  C.d,
                  {
                    className: $r.a.ResizeButton,
                    onClick: function() {
                      return o(!r);
                    }
                  },
                  r
                    ? _.a.createElement(R.F, null)
                    : _.a.createElement(R.I, null)
                )
              ),
              r &&
                _.a.createElement(
                  C.d,
                  {
                    onClick: function() {
                      return o(!1);
                    }
                  },
                  Object(q.f)("#Sale_ShowContents")
                ),
              i
            )
          );
        },
        ao = Object(r.a)(function(e) {
          var t = e.clanAccountID;
          return E.a.BHasClanInfoLoadedByAccountID(t) &&
            Yr.a.Get().BHasClanIDLoaded(t)
            ? _.a.createElement(ro, {
                clanInfo: E.a.GetClanInfoByClanAccountID(t),
                rssAdminInfo: Yr.a.Get().GetRSSAdminForClanAccountID(t)
              })
            : _.a.createElement(no, { clanAccountID: t });
        }),
        no = function(e) {
          var a = e.clanAccountID;
          return _.a.createElement(
            Kr.a,
            {
              onEnter: function() {
                return Object(U.b)(void 0, void 0, void 0, function() {
                  var t;
                  return Object(U.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t = g.a.InitFromClanID(a)),
                          [
                            4,
                            Promise.all([
                              E.a.LoadClanInfoForClanSteamID(t),
                              Yr.a.Get().QueueCuratorAdminInfoLoad(a)
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
            _.a.createElement(
              "div",
              { className: $r.a.TileContainer },
              _.a.createElement("div", null, Object(q.f)("#Loading"), " - ", a)
            )
          );
        },
        ro = function(e) {
          var t = e.clanInfo,
            a = e.rssAdminInfo,
            n = Object(z.useState)(!1),
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
              g.a.InitFromClanID(t.clanAccountID).ConvertTo64BitString(),
            u = Yr.a.Get().GetRSSAdminStats(t.clanAccountID);
          return _.a.createElement(
            "div",
            { className: Object(V.a)($r.a.TileContainer) },
            _.a.createElement(
              "div",
              { className: Object(V.a)($r.a.TileSpread) },
              _.a.createElement(
                "div",
                null,
                _.a.createElement(
                  "div",
                  null,
                  t.group_name,
                  " - ",
                  t.clanAccountID
                ),
                _.a.createElement(
                  "div",
                  null,
                  _.a.createElement(
                    "div",
                    null,
                    Object(q.f)("#CuratorAdmin_RSSFeed"),
                    ":"
                  ),
                  _.a.createElement("a", { href: a.GetRSSUrl() }, a.GetRSSUrl())
                ),
                Boolean(u) &&
                  _.a.createElement(
                    "div",
                    null,
                    _.a.createElement(
                      "div",
                      null,
                      Object(q.f)(
                        "#RSSModeration_TotalEvents",
                        u.total_event_count.toLocaleString()
                      )
                    ),
                    _.a.createElement(
                      "div",
                      null,
                      Object(q.f)(
                        "#RSSModeration_RSSEvents",
                        u.rss_event_count.toLocaleString()
                      )
                    )
                  ),
                _.a.createElement(
                  C.d,
                  {
                    onClick: function() {
                      return o(!r);
                    }
                  },
                  Object(q.f)(
                    r
                      ? "#Bbcode_Expand_Details_Expanded"
                      : "#Bbcode_Expand_Details_Collapsed"
                  )
                )
              ),
              _.a.createElement(
                "div",
                null,
                _.a.createElement(
                  "ul",
                  null,
                  _.a.createElement(
                    "li",
                    null,
                    _.a.createElement(
                      "a",
                      { href: i },
                      Object(q.f)("#EventDisplay_NewsHubSubtitle")
                    )
                  ),
                  _.a.createElement(
                    "li",
                    null,
                    _.a.createElement(
                      "a",
                      { href: l },
                      Object(q.f)("#CuratorAdmin_RSSFeed_title")
                    )
                  ),
                  _.a.createElement(
                    "li",
                    null,
                    _.a.createElement(
                      "a",
                      { href: s },
                      Object(q.f)("#RSSModeration_GroupPage")
                    )
                  ),
                  _.a.createElement(
                    "li",
                    null,
                    _.a.createElement(
                      "a",
                      { href: c },
                      Object(q.f)("#RSSModeration_SupportPage")
                    )
                  )
                )
              ),
              _.a.createElement(
                "div",
                { className: $r.a.CreatorCtn },
                _.a.createElement($.a, {
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
              _.a.createElement(
                _.a.Fragment,
                null,
                Boolean(a.BHasSavedRSSURL())
                  ? _.a.createElement(Jr.a, {
                      strRssURL: a.GetRSSUrl(),
                      admin: a
                    })
                  : _.a.createElement(
                      "div",
                      null,
                      Object(q.f)("#RSSModeration_NoRSSFeed")
                    )
              )
          );
        };
      ae.a.Init(new Ur.a(Y.c.WEBAPI_BASE_URL)), D.c.Init();
      function oo(e) {
        var t = e.children,
          a = Object(z.useState)(W.a.IsInitialized()),
          n = a[0],
          r = a[1];
        return n
          ? _.a.createElement(_.a.Fragment, null, t)
          : (W.a.InitGlobal().then(function() {
              return r(!0);
            }),
            null);
      }
      function io(t) {
        return function(e) {
          return _.a.createElement(oo, null, _.a.createElement(t, e));
        };
      }
      var lo = io(Ba),
        so = io(Ya),
        co = io(br),
        uo = io(ra),
        po = io(zr),
        mo = io(qr),
        ho = io(Va),
        vo = io(eo);
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
        LoadingTile: "eventcalendartile_LoadingTile_24QfL",
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
    },
    zrk3: function(e, t, a) {
      e.exports = {
        ModeratorAuditActionCtn:
          "eventmoderationaudit_ModeratorAuditActionCtn_f6z__"
      };
    }
  }
]);

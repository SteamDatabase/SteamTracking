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
        L = a.n(n);
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
              d = {
                grill: new L.a.Vector({ x: -5, y: -1, z: c }),
                hood: new L.a.Vector({ x: -4, y: s, z: c }),
                wipers: new L.a.Vector({ x: -2, y: s, z: c }),
                windshield: new L.a.Vector({ x: -1, y: -4.5, z: 1.5 }),
                roof: new L.a.Vector({ x: 2, y: -4.5, z: 1.5 }),
                trunk: new L.a.Vector({ x: 4, y: s, z: c }),
                bumper: new L.a.Vector({ x: 5, y: -1, z: c })
              },
              u = {};
            for (var p in d) {
              var m = d[p];
              u[p] = m.copy().multiply({ z: -1 });
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
              d = new L.a.Group({ addTo: n, translate: { z: 24 } });
            a(new L.a.Rect(Object.assign({}, o, { addTo: d }))),
              new L.a.Rect({
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
              m = new L.a.Rect(
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
            var y = new L.a.Anchor({
                addTo: n,
                translate: { x: 18, y: -18, z: -12 }
              }),
              E = new L.a.Group({ addTo: y });
            new L.a.Cylinder({
              addTo: E,
              diameter: 12,
              length: 24,
              color: l.medium,
              backface: l.deep,
              rotate: { x: i / 4 },
              stroke: !1
            }),
              new L.a.Cone({
                addTo: y,
                diameter: 16,
                length: 16,
                translate: { y: -12 },
                rotate: { x: i / 4 },
                color: l.deep,
                stroke: !1
              }),
              new L.a.Rect({
                addTo: E,
                width: 2,
                height: 6,
                translate: { x: 5, y: -6 },
                rotate: { y: -i / 4 },
                fill: !0,
                stroke: !1,
                color: l.dark,
                backface: !1
              }).copy({ translate: { y: 6, z: -5 }, rotate: { y: i / 2 } }),
              y.copyGraph({
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
            var k = new L.a.Rect({
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
              d = new L.a.Rect({
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
              d.copy({
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
            var u = new L.a.Anchor({
              addTo: r,
              translate: { z: -15 },
              rotate: { z: -0.1 }
            });
            new L.a.Rect({
              addTo: u,
              width: 3,
              height: 3,
              rotate: { x: a / 4 },
              fill: !0,
              stroke: 1.5,
              color: o
            }),
              new L.a.Shape({
                addTo: u,
                path: n,
                scale: 3,
                stroke: 1.5,
                color: o
              });
            var p = new L.a.Shape({
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
              new L.a.Rect({
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
                    (u.translate.y = 2 * Math.sin(7 * e)),
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
          (d = ["color", "stroke", "fill", "width", "height", "backface"]),
          (ZdogSpookyHouse.getWallPanel = function(e) {
            var t;
            return (
              e.pane
                ? (t = (function(a) {
                    var e = new L.a.Group(a.wall),
                      t = d.reduce(function(e, t) {
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
            var d = t.dark,
              u = t.deep,
              p = new L.a.Group({
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
              y = new L.a.Shape({
                addTo: f,
                translate: { z: -64 },
                stroke: 32,
                scale: 2,
                color: g
              });
            new L.a.Shape({
              addTo: y,
              translate: { x: -9, y: 4, z: 4 },
              stroke: 16,
              color: g
            }).copy({ translate: { x: 9, y: 5, z: 6 }, stroke: 20 });
            var E = new L.a.RoundedRect({
              addTo: y,
              width: 26,
              height: 12,
              cornerRadius: 6,
              translate: { x: -6, y: 7, z: 4 },
              rotate: { x: r / 4 },
              stroke: 6,
              color: g,
              fill: !0
            });
            E.copy({ translate: { x: 6, y: 9, z: 8 } });
            var S = new L.a.Anchor({ addTo: n, translate: { y: -60 } }),
              C = new L.a.Anchor({ addTo: S, translate: { z: 88 } });
            new L.a.Hemisphere({
              addTo: C,
              diameter: 36,
              rotate: { x: r / 4 },
              color: g,
              stroke: 6
            }),
              y.copy({ addTo: C, translate: { x: 16, y: -14, z: -4 } }),
              E.copy({
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
        CalendarEventList: "eventcalendar_CalendarEventList_3Pm1a"
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
          return Wr;
        }),
        a.d(t, "EventBackfillLanding", function() {
          return Vr;
        }),
        a.d(t, "EventSaleDisplay", function() {
          return Zr;
        }),
        a.d(t, "EventCalendar", function() {
          return qr;
        }),
        a.d(t, "EventDetailView", function() {
          return Yr;
        }),
        a.d(t, "Events", function() {
          return Qr;
        }),
        a.d(t, "EventSteamGameFestivalDebug", function() {
          return Jr;
        });
      var z = a("q1tI"),
        _ = a.n(z),
        U = a("mrSG"),
        n = a("vDqi"),
        E = a.n(n),
        m = a("2vnA"),
        r = a("TyAF"),
        o = a("Gp1o"),
        i = a("Ty5D"),
        D = a("mgoM"),
        b = a("kyHq"),
        d = a("5bld"),
        g = a("kLLr"),
        f = a("ir+G"),
        y = a("TQGK"),
        N = a("WF3T"),
        G = a("KEpR"),
        L = a("5izx"),
        W = a("9w6b"),
        u = a("Dhs6"),
        A = a("6oCP"),
        S = a("IjL/"),
        c = a("55Ip"),
        C = a("Mgs7"),
        B = a("6Y59"),
        M = a("5E+2"),
        O = a("+d9t"),
        h = a("r64O"),
        V = a("exH9"),
        Z = a("X3Ds"),
        q = a("TLQK"),
        s = a("bxiW"),
        Y = a("lkRc"),
        l = a("ka0M"),
        x = a("ee7K"),
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
                          .GetLanguageListForRealms([b.f.k_ESteamRealmGlobal])
                          .forEach(function(e) {
                            return r.m_mapLangToNewsCurators.set(e, []);
                          }),
                        (t = Y.c.STORE_BASE_URL + "events/ajaxgetnewscurators"),
                        (a = { origin: self.origin }),
                        [4, E.a.get(t, { params: a })]
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
                (e.groupvanityinfo && y.a.RegisterClanData(e.groupvanityinfo),
                e.newscuratorinfo)
              )
                for (var t = 0, a = e.newscuratorinfo; t < a.length; t++) {
                  var n,
                    r = a[t];
                  this.m_mapNewsCurators.has(r.clanAccountID) ||
                    (this.m_mapNewsCurators.set(r.clanAccountID, r),
                    (n = y.a.GetClanInfoByClanAccountID(r.clanAccountID)) &&
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
      function k(e) {
        var t = new Set();
        return (
          (0 <= e.indexOf("games") || 0 <= e.indexOf("dlc")) && t.add("apps"),
          0 <= e.indexOf("curators") && t.add("curators"),
          t
        );
      }
      var j,
        R,
        F = (function(t) {
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
                    t = p.Get().allNewsCurators, a = [], n = 0, r = t;
                    n < r.length;
                    n++
                  )
                    if (
                      ((o = r[n]),
                      (i = y.a.GetClanInfoByClanAccountID(o.clanAccountID)),
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
                        (c = z.createElement(P, {
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
                          realm: b.f.k_ESteamRealmGlobal,
                          origin: self.origin,
                          f: "jsonfull",
                          term: s.replace(" ", "+"),
                          require_type: a.join(","),
                          excluded_tags: x.a.GetExcludedTagsSortedByID(),
                          excluded_content_descriptors: x.a.GetExcludedContentDescriptor()
                        }),
                        (r = Y.c.STORE_BASE_URL + "search/suggest"),
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
                              var n = z.createElement(P, {
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
                  Object(q.f)(
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
                z.createElement(C.k, {
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
        P = function(e) {
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
        H = a("fpVW"),
        Q = a.n(H),
        J = a("Jqb/"),
        K = a("0OaU"),
        X = a("BRUS"),
        $ = a("+g3F"),
        ee = a.n($),
        te = a("qD+2"),
        ae = a("UWWC"),
        ne = a("yJqL"),
        re = a("JJA/"),
        oe = a("xnZ7"),
        ie = a.n(oe),
        le = a("bDQf"),
        se = (function(t) {
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
                e.classList.add(re.BodyNoScroll);
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("EventInfiniteScrollModal unmounting");
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.remove(re.BodyNoScroll);
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
                        var t = Object(le.a)(e);
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
                  J.h,
                  null,
                  z.createElement(
                    "div",
                    { className: ie.a.FlexCenter, style: { height: "400px" } },
                    z.createElement(K.a, null)
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
                  z.createElement(ne.a, {
                    initialEvent: this.state.eventModel,
                    partnerEventStore: a,
                    emoticonStore: ae.b,
                    appInfoStore: te.a,
                    closeModal: !n && this.props.closeModal,
                    showAppHeader: this.props.showAppHeader
                  })
                );
                return n ? r : z.createElement(J.h, { className: t }, r);
              }
              return null;
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        ce = a("uuth"),
        de = a("5eAM"),
        ue = a("U+Q5"),
        pe = a("O0NR"),
        me = a("mB/g"),
        he = a("YLyR"),
        ve = a("Kw0F");
      ((R = j = j || {})[(R.NotLoaded = 0)] = "NotLoaded"),
        (R[(R.Loading = 1)] = "Loading"),
        (R[(R.Loaded = 2)] = "Loaded");
      var _e = j.NotLoaded,
        be = [];
      function ge(t) {
        var e, a;
        _e != j.Loaded
          ? (_e == j.NotLoaded &&
              (((e = document.createElement("script")).src =
                "https://www.youtube.com/iframe_api"),
              (a = document.getElementsByTagName(
                "script"
              )[0]).parentNode.insertBefore(e, a),
              (window.onYouTubeIframeAPIReady = fe)),
            be.findIndex(function(e) {
              return t == e;
            }) < 0 && be.push(t))
          : t();
      }
      function fe() {
        _e = j.Loaded;
        for (var e = 0, t = be; e < t.length; e++) {
          (0, t[e])();
        }
        be = [];
      }
      var ye = (function(a) {
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
                ve.c(be, e);
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
                this.m_playerContainer && ge(this.OnYoutubeScriptsReady));
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
                z.createElement(K.a, { className: "YoutubePlayerThrobber" })
              );
              return this.props.autopause
                ? z.createElement(ce.a, { onLeave: this.OnPlayerLeftView }, e)
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
        Ee = a("02Wr"),
        Se = (function(e) {
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
                  z.createElement(Ee.b, {
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
        Ce = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bDismissedPreviewImage: !1 }), t;
          }
          return (
            Object(U.d)(e, a),
            (e.prototype.render = function() {
              var t = this;
              if (
                (this.props.preloadYoutubeScripts && ge(function() {}),
                this.state.bDismissedPreviewImage)
              )
                return z.createElement(ye, Object(U.a)({}, this.props));
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
                z.createElement(Se, {
                  className: "YoutubePreviewImage",
                  altImgWithFallback: this.props.altImgWithFallback,
                  altImg: this.props.altImg,
                  video: this.props.video
                }),
                z.createElement(
                  "div",
                  { className: "YoutubePreviewPlay" },
                  z.createElement(B.db, null)
                ),
                z.createElement(
                  "div",
                  { className: "VideoHintText" },
                  Object(q.f)("#EventCalendar_WatchYouTubeVideo")
                )
              );
            }),
            e
          );
        })(z.Component),
        Oe = a("N0Ye"),
        we = a("ylkE"),
        Te = a("i6tc"),
        Ie = a.n(Te),
        ke = a("TtDX"),
        je = a("y+6m"),
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
                  J.c,
                  {
                    strTitle: Object(q.f)("#EventCalendar_MuteApp_Title", a),
                    strDescription: Object(q.f)(
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
                        je.d,
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
                      je.d,
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
              x.a.UpdateGameWishlist(this.props.eventModel.appid, !1);
            }),
            (t.prototype.AddToWishlist = function() {
              x.a.UpdateGameWishlist(this.props.eventModel.appid, !0);
            }),
            (t.prototype.GotoGameOrClanHub = function() {
              var e = this.props.eventModel,
                t = Object(me.d)(e, me.a.k_eStoreNewsHub, "allowRelative");
              this.props.history.push(t);
            }),
            (t.prototype.ToggleFollowCurator = function() {
              Object(X.e)(this.props.eventModel.clanSteamID.GetAccountID());
            }),
            (t.prototype.CreateContextMenu = function(e) {
              var t,
                a = this.props,
                n = a.eventModel,
                r = a.calendarEvent,
                o = [],
                i = r.GetSource(),
                l = r.unique_id,
                s = Y.c.EREALM === b.f.k_ESteamRealmChina,
                c = Object(N.a)();
              c.BIsGlobalCalendar() &&
                (i &&
                  i & d.a.k_eLibrary &&
                  (this.GetVisibilityStore().BIsGameSourceAllowed(
                    G.c.k_ERecent
                  ) && r.appInfo
                    ? (o.push(
                        z.createElement(
                          je.d,
                          {
                            key: "item-source-" + l + "-lastplayed",
                            disabled: !0,
                            onSelected: function() {}
                          },
                          Object(q.f)(
                            "#EventCalender_LastPlayed",
                            Object(q.q)(
                              L.a.GetTimeNowWithOverride() -
                                r.appInfo.last_played
                            )
                          )
                        )
                      ),
                      this.AddContextMenuForSource(o, G.c.k_ERecent, l, !1))
                    : this.AddContextMenuForSource(o, G.c.k_ELibrary, l)),
                i &&
                  i & d.a.k_eWishlist &&
                  this.AddContextMenuForSource(o, G.c.k_EWishlist, l),
                i &&
                  i & d.a.k_eFollowing &&
                  this.AddContextMenuForSource(o, G.c.k_EFollowing, l),
                !s &&
                  i &&
                  i & d.a.k_eCurator &&
                  this.AddContextMenuForSource(o, G.c.k_ECurator, l),
                i &&
                  i & d.a.k_eRecommended &&
                  this.AddContextMenuForSource(o, G.c.k_ERecommended, l),
                i &&
                  i & d.a.k_eSteam &&
                  this.AddContextMenuForSource(o, G.c.k_ESteam, l),
                i &&
                  i & d.a.k_eFeatured &&
                  this.AddContextMenuForSource(o, G.c.k_EFeatured, l)),
                o.push(
                  z.createElement(
                    je.d,
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
                  (u.a.Get().BIsEventBlocked(r)
                    ? o.push(
                        z.createElement(
                          je.d,
                          {
                            key: n.GID + "unmuteapp",
                            onSelected: this.OnUnMuteButton
                          },
                          z.createElement(
                            M.a,
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
                          je.d,
                          {
                            key: n.GID + "muteapp",
                            onSelected: this.OnMuteButton
                          },
                          z.createElement(
                            M.a,
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
                  ((t = x.a.BIsFollowingCurator(n.clanSteamID)),
                  o.push(
                    z.createElement(
                      je.d,
                      {
                        key: n.GID + "followcurator",
                        onSelected: this.ToggleFollowCurator
                      },
                      z.createElement(
                        M.a,
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
                      je.d,
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
                Object(ke.a)(z.createElement(je.c, null, o), e);
            }),
            (t.prototype.render = function() {
              return z.createElement(
                "div",
                {
                  className: Object(V.a)(Ie.a.FooterStat, Ie.a.Options),
                  onClick: this.CreateContextMenu
                },
                z.createElement(B.H, null)
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
        Ne = a("XmAN"),
        Ge = a("cGQe"),
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
                y.a.LoadClanInfoForClanSteamID(e));
            }),
            (e.prototype.getVideoPreviewControl = function() {
              var e = this,
                t = this.props.eventModel,
                a = t.video_preview_type,
                n = t.video_preview_id;
              if (!n) return null;
              if (12 === this.props.eventModel.type) return null;
              if ("youtube" !== a) return null;
              var r = Object(D.g)(Y.c.LANGUAGE),
                o =
                  $t() && 14 == this.props.eventModel.GetEventType()
                    ? ue.c.full
                    : ue.c.capsule_main,
                i = this.props.eventModel.GetImageForSizeAsArrayWithFallback(
                  "capsule",
                  r,
                  o,
                  !0
                );
              if ("carousel" === this.props.mode)
                return z.createElement(Se, {
                  altImgWithFallback: i,
                  video: n,
                  className: Ie.a.YoutubePreviewImage
                });
              return z.createElement(Ce, {
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
            (e.prototype.render = function() {
              var e = this.props,
                t = e.eventModel,
                a = e.calendarEvent,
                n = e.bSuppressHoverEffects,
                r = e.mode,
                o = W.a.Get(),
                i = a.GetGameCapsule(),
                l = Object(D.g)(Y.c.LANGUAGE),
                s = t.has_live_stream,
                c = t.has_live_stream,
                d =
                  $t() && 14 == t.GetEventType()
                    ? ue.c.full
                    : ue.c.capsule_main,
                u = "capsule",
                p = t.BImageNeedScreenshotFallback(u, l),
                m = Boolean(p && t.appid)
                  ? t.GetFallbackArtworkScreenshot()
                  : t.GetImageURLWithFallback(u, l, d),
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
                y = t.GetNameWithFallback(l),
                E = t.GetSubTitleWithLanguageFallback(l),
                S = t.GetSummaryWithFallback(l);
              E === S && (S = void 0), E === y && (E = void 0);
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
                k = "wide" !== r || n,
                j =
                  28 !== t.type &&
                  12 !== t.type &&
                  L.a.GetTimeNowWithOverride() <
                    t.GetStartTimeAndDateUnixSeconds() &&
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        Ie.a.ReminderContainer,
                        k && Ie.a.OnlyIcon
                      )
                    },
                    z.createElement(Ge.a, {
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
                { className: f },
                z.createElement(Ne.a, { event: t, recordNewsHubStats: !0 }),
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
                          z.createElement(B.L, null)
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
                                k && Ie.a.LeaveRoomForReminder
                              )
                            }),
                            k && j
                          ),
                          z.createElement(
                            "div",
                            { className: Ie.a.EventName },
                            y
                          ),
                          E &&
                            z.createElement(
                              "div",
                              { className: Ie.a.EventSubTitle },
                              E
                            ),
                          12 !== t.type &&
                            S &&
                            z.createElement(
                              "div",
                              {
                                className: Object(V.a)(
                                  Ie.a.EventSummaryDefault,
                                  E ? Ie.a.SubTitleShown : ""
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
                                k && Ie.a.LeaveRoomForReminder
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
                z.createElement(Ue, Object(U.a)({}, this.props))
              );
            }),
            Object(U.c)([s.a], e.prototype, "OnFallbackClick", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        xe = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = y.a.GetClanInfoByClanAccountID(this.props.clanid);
              if (!e) return this.props.children;
              var t = {
                  clan_account_id: e.clanAccountID,
                  name: e.group_name,
                  type: "developer"
                },
                a = z.createElement(
                  "div",
                  { className: Ie.a.CuratorHoverContainer },
                  z.createElement(X.a, {
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
        Re = (function(e) {
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
                var n = y.a.GetClanInfoByClanAccountID(t.clanid);
                if (n) return z.createElement(X.d, { clanInfo: n, fnClose: e });
              }
              return null;
            }),
            (t.prototype.render = function() {
              return z.createElement(
                Ae.c,
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
                : t.clanid && y.a.LoadClanInfoForClanSteamID(a.clanSteamID);
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
                            Re,
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
            r = L.a.GetTimeNowWithOverride(),
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
              d = c < 86400 ? Object(q.q)(c, !1, !0) : Object(q.p)(o);
            return z.createElement(
              he.f,
              { className: n, rtFullDate: o, stylesmodule: Ie.a },
              z.createElement("div", { className: Ie.a.PastDateText }, d)
            );
          }
          var u = new Date(1e3 * r);
          u.setHours(0, 0, 0, 1);
          var p = u.getTime() / 1e3,
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
                t = Object(N.a)().m_visibilityStore;
              e & d.a.k_eLibrary && t.BIsGameSourceAllowed(G.c.k_ELibrary)
                ? r.push({
                    id: d.a.k_eLibrary,
                    name: "#EventCalendar_GameSource_inLibrary",
                    ttip:
                      "#EventCalendar_GameSource_EventExplanation_ttip_library",
                    styles: Ie.a.LibrarySource
                  })
                : e & d.a.k_eWishlist && t.BIsGameSourceAllowed(G.c.k_EWishlist)
                ? r.push({
                    id: d.a.k_eWishlist,
                    name: "#EventCalendar_GameSource_onWishlist",
                    ttip:
                      "#EventCalendar_GameSource_EventExplanation_ttip_wishlist",
                    styles: Ie.a.WishlistSource
                  })
                : e & d.a.k_eRecommended &&
                  t.BIsGameSourceAllowed(G.c.k_ERecommended)
                ? r.push({
                    id: d.a.k_eRecommended,
                    name: "#EventCalendar_GameSource_recommended_Verbose",
                    ttip:
                      "#EventCalendar_GameSource_EventExplanation_ttip_recommended",
                    styles: Ie.a.RecommendedSource
                  })
                : e & d.a.k_eFeatured &&
                  t.BIsGameSourceAllowed(G.c.k_EFeatured) &&
                  r.push({
                    id: d.a.k_eFeatured,
                    name: "#EventCalendar_GameSource_featured",
                    ttip: "#EventCalendar_GameSource_ttip_featured",
                    styles: Ie.a.FeaturedSource
                  }),
                e & d.a.k_eFollowing &&
                  t.BIsGameSourceAllowed(G.c.k_EFollowing) &&
                  r.push({
                    id: d.a.k_eFollowing,
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
            M.a,
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
              (t.Vote(e, !0, E.a.CancelToken.source()),
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
              l = Y.c.EREALM !== b.f.k_ESteamRealmChina && i,
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
                  z.createElement(B.Y, { className: Ie.a.RateIcon }),
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
                      z.createElement(B.q, { className: Ie.a.CommentIcon }),
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
            t = Ie.a["EventType" + a.event_type],
            r = Object(V.a)(Ie.a.TileContainer, t);
          return z.createElement(
            ce.a,
            {
              onEnter: function() {
                var e, t;
                (e = a),
                  n.QueueLoadPartnerEvent(e.clanid, e.unique_id),
                  e.appid && f.a.GetStoreCapsuleInfo(e.appid),
                  e.clanInfo &&
                    ((t = g.a.InitFromClanID(e.clanInfo.clanid)),
                    y.a.LoadClanInfoForClanSteamID(t));
              },
              topOffset: "-500px",
              bottomOffset: "-500px"
            },
            z.createElement(
              "div",
              { className: r },
              z.createElement("div", { className: Ie.a.Tile }),
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
              (r.clanInfo && !y.a.HasLoadedClanAccountID(r.clanInfo.clanid)))
          )
            return z.createElement(We, {
              calendarEvent: a,
              partnerEventStore: t
            });
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
                    .GetELanguageFallbackOrder([b.f.k_ESteamRealmGlobal])
                    .forEach(function(e) {
                      return t.push(
                        _.a.createElement(qe, { key: "curlang" + e, lang: e })
                      );
                    }),
                _.a.createElement(
                  J.g,
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
                          : _.a.createElement(K.a, {
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
                  return y.a.GetClanInfoByClanAccountID(e.clanAccountID);
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
                  { className: ee.a.LanguageHeader },
                  Object(q.f)(
                    "#EventCurator_BrowseDialog_LangCurator",
                    Object(q.f)("#Language_" + Object(D.e)(this.props.lang))
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
                _.a.createElement(J.e, {
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
                    _.a.createElement(se, {
                      onEventNotFound: this.OnEventNotFound,
                      appid: 0,
                      clanSteamID: this.props.clanInfo.clanSteamID,
                      trackingLocation: 8,
                      eventModel: void 0,
                      announcementGID: void 0,
                      partnerEventStore: A.c,
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
                "row" === a ? ee.a.CuratorInfoRow : ee.a.CuratorInfoIcon),
                r = _.a.createElement(
                  xe,
                  { clanid: t.clanSteamID.GetAccountID() },
                  _.a.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        Q.a.FlexRowContainer,
                        ee.a.CuratorInfoTitleCtn
                      )
                    },
                    _.a.createElement("img", {
                      className: ee.a.CuratorInfoImg,
                      src: t.avatar_full_url,
                      alt: t.group_name
                    }),
                    _.a.createElement(
                      "div",
                      { className: ee.a.CuratorInfoName },
                      t.group_name
                    )
                  )
                );
              return _.a.createElement(
                "div",
                {
                  className: Object(V.a)(
                    Q.a.FlexRowWrapSpaceBetweenContainer,
                    n
                  )
                },
                this.renderInfiniteScroll(),
                _.a.createElement("div", { onClick: this.OnPreview }, r),
                _.a.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      Q.a.FlexRowContainer,
                      ee.a.CuratorInfoActionCtn
                    )
                  },
                  _.a.createElement(X.c, {
                    clanAccountID: t.clanAccountID,
                    className: ee.a.CuratorInfoFollow
                  }),
                  _.a.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        Q.a.Button,
                        ee.a.CuratorInfoPreview
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
                M.a,
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
                a = Y.c.EREALM === b.f.k_ESteamRealmChina,
                n = Object(N.a)(),
                r = !0;
              !n.BIsSingleGroupCalendar() ||
                ((e = y.a.GetClanInfoByClanAccountID(n.GetSingleGroupID())) &&
                  e.has_rss_feed &&
                  (r = !1));
              var o = u.a.Get().GetMutedSourceCount();
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
                      this.RenderEventTypeCheckbox(G.b.k_EEvents),
                      this.RenderEventTypeCheckbox(G.b.k_EStreaming),
                      this.RenderEventTypeCheckbox(G.b.k_EUpdates),
                      this.RenderEventTypeCheckbox(G.b.k_EReleases),
                      this.RenderEventTypeCheckbox(G.b.k_ESales),
                      this.RenderEventTypeCheckbox(G.b.k_ENews)
                    ),
                  Boolean(n.BIsGlobalCalendar()) &&
                    z.createElement(
                      z.Fragment,
                      null,
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
                        this.RenderGameSourceCheckbox(G.c.k_ERecent, !t),
                        this.RenderGameSourceCheckbox(G.c.k_ELibrary, !t),
                        this.RenderGameSourceCheckbox(G.c.k_EWishlist, !t),
                        this.RenderGameSourceCheckbox(G.c.k_EFollowing, !t),
                        this.RenderGameSourceCheckbox(G.c.k_ERecommended),
                        this.RenderGameSourceCheckbox(G.c.k_ESteam),
                        L.a.bIncludeFeaturedAsGameSource &&
                          this.RenderGameSourceCheckbox(G.c.k_EFeatured)
                      ),
                      !a &&
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
                          this.RenderGameSourceCheckbox(G.c.k_ECurator, !t),
                          z.createElement(
                            "div",
                            {
                              className: Je.a.FilterLink,
                              onClick: this.OnBrowseCurator
                            },
                            Object(q.f)("#EventCalendar_BrowseCurators")
                          )
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
                        z.createElement(B.fb, { muted: !0 }),
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
                      z.createElement(B.a, null),
                      Object(q.f)("#EventCalendar_ManageStorePref")
                    )
                  )
                ),
                L.a.bInSteamLabs &&
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
                d = this.state.bShowFilterPage,
                u =
                  "Responsive_RequestMobileView" in window &&
                  window.Responsive_RequestMobileView,
                p = Xt(),
                m = z.createElement(
                  "div",
                  { className: Je.a.MobileCloseButton, onClick: s },
                  z.createElement(B.U, null)
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
                        z.createElement(B.u, { angle: o ? 180 : 0 })
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
                        z.createElement(B.U, null)
                      )
                    ),
                b = d ? _ : v,
                g = o ? null : { top: r + "px" },
                f = Object(N.a)();
              return (
                !f.BIsSingleGroupCalendar() ||
                  ((e = y.a.GetClanInfoByClanAccountID(f.GetSingleGroupID())) &&
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
                            d
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
                                    z.createElement(B.V, null)
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
                                  z.createElement(yt, { bIsUpcoming: l }),
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
                                      z.createElement(B.T, null),
                                      Object(q.f)("#EventCalendar_EditFilters")
                                    )
                                  ),
                                  u &&
                                    z.createElement(
                                      "div",
                                      {
                                        className: Object(V.a)(
                                          Je.a.SidebarLink,
                                          Je.a.ForceResponsiveLink
                                        ),
                                        onClick: u
                                      },
                                      Object(q.f)(
                                        "#EventCalendar_ShowResponsiveView"
                                      )
                                    ),
                                  L.a.bInSteamLabs &&
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
                        Object(b.c)(e.type),
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
              return z.createElement(F, {
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
        dt = Y.c.STORE_BASE_URL + "labs",
        ut = Y.c.COMMUNITY_BASE_URL + "groups/SteamLabs/discussions/11/",
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
                  href: dt,
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
                href: ut,
                target: Y.c.IN_CLIENT ? void 0 : "_blank"
              },
              z.createElement(B.j, null)
            )
          );
        };
      function mt(e) {
        var t = Object(N.a)().BIsGlobalCalendar(),
          a = (Object(N.a)().BIsCollectionCalendar(), Object(me.f)()),
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
              if (Object(N.a)().BIsGlobalCalendar() && Y.i.logged_in) {
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
      function ht() {
        Object(N.a)().BIsGlobalCalendar();
        var e = Object(N.a)().BIsCollectionCalendar(),
          t = Object(me.f)(),
          a = new Array();
        a.push({
          name: Object(q.f)("#EventCalendar_NewsChannel_Featured"),
          subtitle: Object(q.f)("#EventCalendar_NewsChannel_TopSellers"),
          key: "featured",
          url: t + "/collection/featured/",
          onPage: e && "featured" == Object(N.a)().GetCollectionID()
        }),
          a.push({
            name: Object(q.f)("#EventCalendar_NewsChannel_Steam"),
            subtitle: Object(q.f)("#EventCalendar_NewsChannel_SteamSubtitle"),
            key: "steam",
            url: t + "/collection/steam/",
            onPage: e && "steam" == Object(N.a)().GetCollectionID()
          });
        var n,
          r = L.a.GetTimeNowWithOverrideAsDate(),
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
              onPage: e && "halloween" == Object(N.a)().GetCollectionID(),
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
                        l && Q.a.ValveOnlyBackground,
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
                  z.createElement(B.T, null)
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
                  z.createElement(B.E, null)
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
        yt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = (function(e) {
                var t = Object(N.a)().BIsCollectionCalendar(),
                  a = Object(me.f)(),
                  n = new Array();
                if (
                  (Y.c.EREALM !== b.f.k_ESteamRealmChina &&
                    n.push({
                      name: Object(q.f)("#EventCalendar_NewsChannel_Press"),
                      key: "press",
                      url: a + "/collection/press/",
                      onPage: t && "press" == Object(N.a)().GetCollectionID()
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
                      onPage: t && "all" == Object(N.a)().GetCollectionID(),
                      bValveOnly: !0
                    }),
                    n.push({
                      name: Object(q.f)("#EventCalendar_NewsChannel_AllSales"),
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
        Et = a("G24H"),
        St = a.n(Et),
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
                _.a.createElement(J.c, {
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
                      return !x.a.BIsIgnoringCurator(e.clanAccountID);
                    });
                Object(ve.g)(o), t.push.apply(t, o);
              }
              return t;
            }),
            (a.prototype.GenerateCurator = function(e) {
              var t = y.a.GetClanInfoByClanAccountID(e.clanAccountID);
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
                        _.a.createElement(B.U, null)
                      ),
                    _.a.createElement(
                      "div",
                      { className: Ot.a.RowContainer, ref: this.m_ref },
                      o || _.a.createElement(K.a, null),
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
      function kt(e, n, r, o) {
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
      var jt = [
          kt(
            "press",
            "#EventCalendar_Collection_News_Title",
            "#EventCalendar_Collection_News_Subtitle"
          ),
          kt(
            "halloween",
            "#EventCalendar_Collection_Halloween_Title",
            "#EventCalendar_Collection_Halloween_Subtitle"
          )
        ],
        Dt = a("mZMQ"),
        Lt = (a("hmtA"), a("dgee")),
        Nt = a.n(Lt),
        Gt = a("SS32"),
        At = a("MnIK"),
        Bt = a("lypr"),
        Mt = (function(e) {
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
                { className: Gt.pipScrollerContainer },
                e &&
                  z.createElement(
                    Dt.a,
                    {
                      className: Object(V.a)(
                        Gt.pipScrollButton,
                        Gt.left,
                        Gt.carouselNavButton
                      )
                    },
                    z.createElement(B.r, null)
                  ),
                z.createElement(
                  "div",
                  { className: Gt.pipScroller },
                  z.createElement("div", { className: Gt.scrollBackground }),
                  z.createElement("div", {
                    className: Gt.scrollForeground,
                    style: { left: r + "%", right: o + "%" }
                  }),
                  z.createElement(
                    "div",
                    {
                      className: Gt.scrollNavDiv,
                      style: { left: "0%", width: i + "%" }
                    },
                    z.createElement(
                      Dt.a,
                      {
                        className: Object(V.a)(
                          Gt.carouselNavButton,
                          Gt.scrollNavButton
                        )
                      },
                      z.createElement("div", null)
                    )
                  ),
                  z.createElement(
                    "div",
                    {
                      className: Gt.scrollNavDiv,
                      style: { right: "0%", width: l + "%" }
                    },
                    z.createElement(
                      Dt.b,
                      {
                        className: Object(V.a)(
                          Gt.carouselNavButton,
                          Gt.scrollNavButton
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
                        Gt.pipScrollButton,
                        Gt.right,
                        Gt.carouselNavButton
                      )
                    },
                    z.createElement(B.r, null)
                  )
              );
            }),
            (t.prototype.render = function() {
              return this.renderScroller();
            }),
            t
          );
        })(z.Component),
        xt = Object(Dt.g)(Mt, function(e) {
          return {
            currentSlide: e.currentSlide,
            totalSlides: e.totalSlides,
            visibleSlides: e.visibleSlides
          };
        }),
        Rt = (function(e) {
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
                      { slide: t, className: Gt.pip },
                      z.createElement("img", { src: Nt.a })
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
                      Gt.carouselBody,
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
                      { className: Gt.sliderBody },
                      !n &&
                        z.createElement(
                          Dt.a,
                          {
                            className: Object(V.a)(
                              Gt.carouselBtnCtn,
                              Gt.left,
                              Gt.carouselNavButton
                            )
                          },
                          z.createElement(B.r, null)
                        ),
                      z.createElement(Dt.f, null, this.RenderChildren()),
                      !n &&
                        z.createElement(
                          Dt.b,
                          {
                            className: Object(V.a)(
                              Gt.carouselBtnCtn,
                              Gt.right,
                              Gt.carouselNavButton
                            )
                          },
                          z.createElement(B.r, null)
                        )
                    ),
                    !r &&
                      (this.props.useTestScrollbar
                        ? z.createElement(xt, { showArrows: n })
                        : z.createElement(
                            "div",
                            { className: Gt.breadcrumbContainer },
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
                    z.createElement(X.c, { clanAccountID: r.clanid })
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
                  partnerEventStore: A.c,
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
                    Rt,
                    {
                      hideArrows: !0,
                      visibleElements: Math.min(
                        this.state.nMaxCapsulesPerRow,
                        this.props.rgCalendarItems.length
                      ),
                      className: Pt.a.HorizontalTiles,
                      useTestScrollbar: !0
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
                nGroupHeaderHeight: 0
              }),
              (e.m_refControlBar = z.createRef()),
              (e.m_cancelSignal = E.a.CancelToken.source()),
              e
            );
          }
          var d;
          return (
            Object(U.d)(e, t),
            ((d = e).prototype.componentDidMount = function() {
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
              return Object(N.a)().GetCollectionID()
                ? (function(t, e) {
                    if (!t) return 0;
                    var a = jt.find(function(e) {
                      return e.collection === t;
                    });
                    return a ? (e ? a.largeHeight : a.smallHeight) : 0;
                  })(Object(N.a)().GetCollectionID(), n)
                : Object(N.a)().BIsSaleCalendar()
                ? ((t = Object(N.a)().GetSaleID()),
                  (a = n),
                  t && A.c.GetClanEventModel(t)
                    ? a
                      ? Number(It.a.simpleTitleLargeHeight)
                      : Number(It.a.simpleTitleSmallHeight)
                    : 0)
                : Object(N.a)().BIsSingleSourceCalendar()
                ? parseInt(
                    n
                      ? Je.a.strJumboHubBannerHeight
                      : Je.a.strDesktopHubBannerHeight
                  ) - 1
                : 0;
            }),
            (e.prototype.GetCurrentHeaderHeights = function() {
              var e = Xt(),
                t = $t(),
                a = 0;
              Kt() &&
                ((a = parseInt(
                  e
                    ? Je.a.strMobileGlobalHeaderHeight
                    : Je.a.strDesktopGlobalHeaderHeight
                )),
                --a);
              var n =
                parseInt(
                  t
                    ? Je.a.strMobileGroupHeaderHeight
                    : Je.a.strDesktopGroupHeaderHeight
                ) - 1;
              return {
                nSteamNavHeaderHeight: a,
                nMobileNavBannerHeight:
                  (e ? parseInt(Je.a.strMobileNavBannerHeight) : 0) - 1,
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
                                A.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
                o = Object(N.a)();
              o.BIsSingleAppCalendar()
                ? (a =
                    (t =
                      (e = o.GetSingleAppID()) &&
                      f.a.GetStoreCapsuleInfo(e).GetAppStoreData()) && t.title)
                : o.BIsSingleGroupCalendar()
                ? (a =
                    (r =
                      (n = o.GetSingleGroupID()) &&
                      y.a.GetClanInfoByClanAccountID(n)) && r.group_name)
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
                  l = Kt();
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
                        (a = Object(N.b)(t)),
                        (n = Object(N.a)()),
                        u.a.Get(),
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
                        d.m_bInitialLoad &&
                          ((s = Object(Y.f)(
                            "metadatainfo",
                            "application_config"
                          )),
                          n.SetCollectionMetaData(
                            n.ValidateCollectionMetadata(s) ? s : null
                          )),
                        (c =
                          d.m_bInitialLoad &&
                          Object(Y.f)("initialEvents", "application_config"))
                          ? [4, n.RegisterCalendarEventsAndModels(c)]
                          : [3, 2]
                      );
                    case 1:
                      return e.sent(), (d.m_bInitialLoad = !1), [3, 4];
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
                            : y.a.LoadClanInfoForClanSteamID(
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
                L.a.bOpenEventLandingPage
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
                Object(N.a)().m_visibilityStore.InitDefaultCheckboxes(
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
                  this.state.nMobileNavBannerHeight,
                t = this.state.nDisappearingHeaderTop,
                a = t + this.state.nSteamNavHeaderHeight,
                n = a + this.state.nMobileNavBannerHeight,
                r =
                  this.state.nVisibleHeight <=
                  parseInt(Je.a.strMinMobileHeight),
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
                  { className: Je.a.EventCalendarContainer },
                  z.createElement(
                    S.a,
                    null,
                    this.state.modalEvent
                      ? z.createElement(se, {
                          appid: this.state.modalEvent.appid,
                          trackingLocation: 8,
                          announcementGID: this.state.modalEvent.GetAnnouncementGID(),
                          partnerEventStore: A.c,
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
                      nDisappearingHeaderVisibleHeight: o,
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
                        0 < this.state.nMobileNavBannerHeight &&
                          z.createElement(gt, {
                            bIsUpcoming: this.BShowFutureView(),
                            nTopOffset: a,
                            fnToggleCollapsed: this.MobileNavOpenSettings
                          }),
                        z.createElement(oa, {
                          nTopOffset: n,
                          bLargeMode: this.state.nScrollTop <= 0 && !$t()
                        })
                      ),
                      Boolean(
                        !this.BRequireLoggedInUser() ||
                          this.state.bUserIsLoggedIn
                      )
                        ? z.createElement(
                            S.a,
                            null,
                            z.createElement(ia, {
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
                            S.a,
                            null,
                            z.createElement(
                              "div",
                              { className: Je.a.LoginPrompt },
                              Object(q.f)("#EventCalendar_MainLoginPrompt"),
                              z.createElement(
                                "button",
                                { onClick: Qt.a, className: Je.a.LoginButton },
                                Object(q.f)("#Login_SignIn")
                              )
                            )
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
            (e = d = Object(U.c)([r.a], e))
          );
        })(z.Component),
        ra = Object(i.i)(na),
        oa = Object(r.a)(function(e) {
          var n = Object(N.a)(),
            t = z.useState(!1),
            a = t[0],
            r = t[1];
          if (
            (z.useEffect(
              function() {
                n.BHasCollectionMetaData() &&
                  !A.c.GetClanEventModel(
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
                              A.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
                ((o = A.c.GetClanEventModel(
                  n.GetCollectionMetaData().clan_event_gid
                )) &&
                  ((l = o.GetImageURLWithFallback(
                    "capsule",
                    Object(D.g)(Y.c.LANGUAGE),
                    ue.c.capsule_main
                  )),
                  (s = o.GetSaleURL()))),
              !(i = (function(t, e, a, n) {
                if (!t) return null;
                var r = jt.find(function(e) {
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
                var a = A.c.GetClanEventModel(e);
                if (!a) return null;
                var n = Object(D.g)(Y.c.LANGUAGE);
                return z.createElement(bt, {
                  largeHeader: t,
                  titleToken: a.GetNameWithFallback(n),
                  subtitleToken: a.GetSubTitleWithSummaryFallback(n),
                  headerImg: a.GetImageURLWithFallback(
                    "capsule",
                    n,
                    ue.c.capsule_main
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
            var d = n.BIsSingleAppCalendar() ? n.GetSingleAppID() : void 0,
              u = n.BIsSingleGroupCalendar() ? n.GetSingleGroupID() : void 0,
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
              z.createElement(ne.b, { appId: d, clanId: u, bShowRSSFeed: !0 })
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
              return Object(N.a)()
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
              return Object(N.a)().BIsSingleSourceCalendar()
                ? "none"
                : Object(N.a)().GetCollectionID()
                ? "samesource"
                : "full";
            }),
            (t.prototype.render = function() {
              var f = this,
                e = Object(N.a)(),
                t = this.props,
                y = t.bShowFutureViewOnly,
                a = t.bShowUpdatesOnly,
                E = t.fnOnEventClick,
                S = t.fnToggleSeeFuture,
                n = t.fnResetFilters,
                r = t.nVisibleHeight,
                C = t.nScrollTop,
                O = t.nDisappearingHeaderVisibleHeight,
                o = t.nDisappearingHeaderHeight,
                w = t.nGroupHeaderHeight,
                i = e.GetCalendarSections(y);
              if (0 == i.length) return null;
              var T = $t(),
                l = e.m_visibilityStore.BAreAllEventsHidden(),
                I = C + O,
                k = C + r,
                j = !0,
                s = Y.c.EREALM === b.f.k_ESteamRealmChina,
                c = e.m_visibilityStore.BIsGameSourceAllowed(G.c.k_ECurator),
                d =
                  !s && c && Object(N.a)().BIsGlobalCalendar() && Y.i.accountid,
                D = !s && d && !y,
                L = void 0,
                u = l
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
                        m = f.props.nVisibleHeight > Math.max(u, p),
                        h = n < I,
                        v = r - C - w,
                        _ = h ? Math.min(O - 1, v) : -1,
                        b = Object(V.a)(
                          Je.a.PastSection,
                          j && Je.a.DarkerBackground
                        );
                      0 < d &&
                        ((j = !j), D && 1e3 <= n && void 0 === L && (L = t));
                      var g = !y && c;
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
                        bShowEarliestFirst: y || g,
                        nInitialHeight: d,
                        fnReportPositioning: function(e, t) {
                          return f.RecordSectionRenderedPositioning(a, e, t);
                        },
                        fnOnEventClick: E,
                        bSuppressHoverEffects: T,
                        strMergeEvents: f.GetMergeEventsType()
                      });
                    });
              void 0 !== L &&
                u.splice(
                  L,
                  0,
                  z.createElement(wt, {
                    key: "CuratorSuggestions",
                    bCanDismiss: !0
                  })
                );
              var p = i[0].rtSectionStart,
                m = Object(N.a)().GetCurrentlyLoadedEventCount(0, p),
                h = Object(N.a)().GetCurrentlyLoadedEventCount(p),
                v =
                  m &&
                  (m.nCount
                    ? "#EventCalendar_NoMorePastEvents"
                    : "#EventCalendar_NoPastEvents"),
                _ =
                  n &&
                  z.createElement(
                    M.a,
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
                y
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
                    u,
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
                    d &&
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
                t = Object(N.a)().GetCurrentlyLoadedEventCount(e);
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
                            partnerEventStore: A.c,
                            fnOnClicked: a,
                            bSuppressHoverEffects: r,
                            mode: 1 < t.length ? "upcoming" : "wide",
                            bHideGameTitle:
                              Object(N.a)().BIsSingleSourceCalendar() &&
                              Object(N.a)().BEventMatchCalendarSingleSource(e)
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
            n = A.c.GetClanEventModel(t.unique_id);
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
      var da,
        ua,
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
            (e.prototype.GenerateKeyFromItem = function(e, t) {
              return !(t.GetSource() & d.a.k_eSteam) &&
                !t.appid &&
                t.GetSource() & d.a.k_eCurator &&
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
                    partnerEventStore: A.c,
                    mode: "wide",
                    fnOnClicked: i,
                    bSuppressHoverEffects: l,
                    bHideGameTitle:
                      Object(N.a)().BIsSingleSourceCalendar() &&
                      Object(N.a)().BEventMatchCalendarSingleSource(e)
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
                  d = n[a],
                  u = this.GenerateKeyFromItem(s, d),
                  p = c.get(u);
                p ? p.push(d) : ((r = new Array()).push(d), c.set(u, r));
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
                })((d = _[v]));
              }
              return m;
            }),
            (e.prototype.RenderLoadingState = function() {
              var e = Object(N.a)().GetTimeEdgeForDirection(
                this.props.bShowEarliestFirst ? "forward" : "backward",
                void 0
              );
              return z.createElement(
                "div",
                { className: Je.a.Loading },
                z.createElement(K.a, { size: "xlarge", position: "center" }),
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
                          Object(N.a)().GetNumEventsLoaded()
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
                _ = i
                  ? z.createElement(sa, {
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
            Object(U.c)([m.n], e.prototype, "cachedCalendarItems", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        ma = a("AXHe"),
        ha = a("Cs6D"),
        va = a("3+zv");
      ((ua = da = da || {})[(ua.k_ModReviewed = 0)] = "k_ModReviewed"),
        (ua[(ua.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
        (ua[(ua.k_ChangeEventType = 2)] = "k_ChangeEventType"),
        (ua[(ua.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
        (ua[(ua.k_ModReReviewed = 4)] = "k_ModReReviewed");
      function _a(e) {
        var t = z.useState(!0),
          a = t[0],
          n = t[1],
          r = e.eventModel.GetAllTags().filter(function(e) {
            return ga.IsAuditAction(e);
          }),
          o = r.length,
          i = 3 < r.length && a;
        if (0 == r.length) return null;
        i && (r = r.splice(0, 3));
        var l,
          s,
          c,
          d = ((l = r),
          (s = new Array()),
          (c = e.eventModel),
          l.forEach(function(e) {
            var t = new ga();
            t.FromString(e),
              s.push(
                z.createElement(
                  "div",
                  { key: c.GID + e },
                  (function(e) {
                    var t = Object(q.k)(e.m_rtWhen),
                      a = z.createElement(Ta, {
                        locToken: "#EventModTile_Moderator",
                        accountID: e.m_moderator
                      });
                    switch (e.m_action) {
                      case da.k_ModReviewed:
                        return z.createElement(
                          "div",
                          { className: wa.ModeratorAuditActionCtn },
                          Object(q.n)(
                            "#EventModTile_Action_Reviewed",
                            z.createElement("span", null, t),
                            a
                          )
                        );
                      case da.k_ModUnreviewed:
                        return z.createElement(
                          "div",
                          { className: wa.ModeratorAuditActionCtn },
                          Object(q.n)(
                            "#EventModTile_Action_UnReviewed",
                            z.createElement("span", null, t),
                            a
                          )
                        );
                      case da.k_ChangeEventType:
                        return z.createElement(
                          "div",
                          { className: wa.ModeratorAuditActionCtn },
                          Object(q.n)(
                            "#EventModTile_Action_NewEventType",
                            z.createElement("span", null, t),
                            a,
                            Object(Oe.b)(e.m_newEventType)
                          )
                        );
                      case da.k_UpdateSeasonTags:
                        return z.createElement(
                          "div",
                          { className: wa.ModeratorAuditActionCtn },
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
                          { className: wa.ModeratorAuditActionCtn },
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
          d,
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
      var ba = "ModAct",
        ga = (function() {
          function e() {}
          return (
            (e.prototype.ToModString = function() {
              var e =
                ba +
                "_" +
                this.m_moderator +
                "_" +
                Math.floor(this.m_rtWhen) +
                "_" +
                this.m_action;
              switch (this.m_action) {
                case da.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case da.k_UpdateSeasonTags:
                  e += "_" + this.m_newTagAdded;
              }
              return e;
            }),
            (e.prototype.FromString = function(e) {
              var t = e.split("_");
              if (!t || t[0] !== ba) return !1;
              switch (
                ((this.m_moderator = Number(t[1])),
                (this.m_rtWhen = Number(t[2])),
                (this.m_action = Number(t[3])),
                this.m_action)
              ) {
                case da.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case da.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function(e) {
              return (
                (this.m_moderator = Y.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = da.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function(e) {
              return (
                (this.m_moderator = Y.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? da.k_ModReviewed : da.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function(e) {
              return (
                (this.m_moderator = Y.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? da.k_ModReReviewed : da.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function(e) {
              return e.startsWith(ba);
            }),
            (e.prototype.SetUpdateSeasonalTags = function(e) {
              return (
                (this.m_moderator = Y.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = da.k_UpdateSeasonTags),
                (this.m_newTagAdded = e),
                this
              );
            }),
            e
          );
        })(),
        fa = new ((function() {
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
                            Y.c.STORE_BASE_URL +
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
                          Y.c.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (a = new FormData()).append("sessionid", Y.c.SESSIONID),
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
            Object(U.c)([m.C], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(U.c)([m.C], e.prototype, "m_listEvents", void 0),
            Object(U.c)([m.k], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })())(),
        ya = a("T27q"),
        Ea = a("BpzF"),
        Sa = a("UxvL"),
        Ca = a("E9gz"),
        Oa = a("Qcoi"),
        wa = a("zrk3"),
        Ta = Object(r.a)(function(e) {
          var t = e.accountID,
            a = e.locToken,
            r = g.a.InitFromAccountID(t).ConvertTo64BitString(),
            o = z.useRef(null),
            n = z.useState(Oa.a.GetProfile(r)),
            i = n[0],
            l = n[1],
            s = z.useState(!Oa.a.BHasProfile(r)),
            c = s[0],
            d = s[1];
          z.useEffect(
            function() {
              return (
                Oa.a.BHasProfile(r) ||
                  (d(!0),
                  Object(U.b)(void 0, void 0, void 0, function() {
                    var t, a, n;
                    return Object(U.e)(this, function(e) {
                      switch (e.label) {
                        case 0:
                          (t = E.a.CancelToken.source()),
                            (o.current = t.cancel),
                            (e.label = 1);
                        case 1:
                          return (
                            e.trys.push([1, 3, , 4]),
                            [4, Oa.a.LoadProfiles([r])]
                          );
                        case 2:
                          return e.sent(), [3, 4];
                        case 3:
                          return (
                            (a = e.sent()),
                            (n = Object(le.a)(a)),
                            console.error(
                              "EventModerationTile profile load : " +
                                n.strErrorMsg,
                              n
                            ),
                            [3, 4]
                          );
                        case 4:
                          return (
                            t.token.reason || (l(Oa.a.GetProfile(r)), d(!1)),
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
          var u =
            "https://steamsupport.valvesoftware.com/account/overview/" + r;
          return z.createElement(
            "div",
            null,
            Object(q.n)(
              a,
              z.createElement(
                "a",
                { href: u, target: Y.c.IN_CLIENT ? void 0 : "_blank" },
                Boolean(i)
                  ? z.createElement(z.Fragment, null, i.persona_name)
                  : z.createElement(
                      z.Fragment,
                      null,
                      c && z.createElement(K.a, { size: "small" }),
                      z.createElement("span", null, t)
                    )
              )
            )
          );
        }),
        Ia = a("f0Wu"),
        ka = ["mod_reviewed", "auto_migrated"],
        ja = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0
        },
        Da = (function(t) {
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
              var e = Wt.a.parse(
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
              var a = ka.map(function(e) {
                return { label: e, value: e };
              });
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
                  (r = [{ label: Object(Oe.b)(n), value: n }]))
                : e.eventtype &&
                  ((r = []),
                  e.eventtype.forEach(function(e) {
                    var t = Number.parseInt(e);
                    r.push({ label: Object(Oe.b)(t), value: t });
                  }));
              var o = void 0;
              "string" == typeof e.filterDate &&
                0 < e.filterDate.length &&
                (o = Ia.unix(Number(e.filterDate)));
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
                        Wt.a.stringify({
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
              var t = Object(le.a)(e);
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
                  fa
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
                fa.GetAllSolrEvents().forEach(function(e) {
                  t.push(
                    z.createElement(Na, { solrData: e, key: e.unique_id })
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
              (this.m_nPage = 0), fa.ClearAllSolrEvents();
            }),
            (e.prototype.OnDateChange = function(e) {
              if ("string" == typeof e) {
                var t = Ia(e, "M/D/YYYY", !0);
                if (!t.isValid())
                  return void this.setState({ filterDateAsString: e });
                e = t;
              }
              this.state.filterDate != e &&
                (this.ClearPreviousData(),
                this.setState(
                  Object(U.a)(
                    { filterDateAsString: void 0, filterDate: e },
                    ja
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                ));
            }),
            (e.prototype.IsValidDate = function(e) {
              var t = new Date();
              return (
                e.unix() <
                Ia.unix(t.getTime() / 1e3 + 86400)
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
                  Object(U.a)({ selectedTags: e }, ja),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventExcludeTags = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(U.a)({ excludedTags: e }, ja),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventTypeFilter = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(U.a)({ filterEventTypes: e }, ja),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnVisibilityStartTimeChange = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(U.a)(
                    { bOrderByVisibilityStartTime: e.currentTarget.checked },
                    ja
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.render = function() {
              var e = this.RenderTiles(),
                t = b.e.map(function(e) {
                  return { value: e, label: Object(Oe.b)(e) };
                }),
                a = va.a.map(function(e) {
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
                { className: Ca.ModerationContainer, ref: this.m_refScroll },
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
                      { className: Object(V.a)(Q.a.FlexRowContainer) },
                      z.createElement(
                        "div",
                        { className: Ca.FilterContainer },
                        z.createElement(
                          "span",
                          null,
                          Object(q.f)("#EventModeration_FilterByTag")
                        ),
                        z.createElement(ha.a, {
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
                        { className: Ca.FilterContainer },
                        z.createElement(
                          "span",
                          null,
                          Object(q.f)("#EventModeration_FilterExcludeByTag")
                        ),
                        z.createElement(ha.a, {
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
                        { className: Ca.FilterContainer },
                        z.createElement(
                          "span",
                          null,
                          Object(q.f)("#EventModeration_FilterToType")
                        ),
                        z.createElement(ha.a, {
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
                        { className: Ca.FilterContainer },
                        z.createElement(
                          "span",
                          null,
                          Object(q.f)("#EventModeration_FilterToDate")
                        ),
                        z.createElement(ma, {
                          onChange: this.OnDateChange,
                          timeFormat: !1,
                          value: this.state.filterDate,
                          isValidDate: this.IsValidDate,
                          inputProps: {
                            placeholder: Object(q.f)(
                              "#EventModeration_PickDatee"
                            ),
                            className: Ca.TimeWidth
                          }
                        })
                      ),
                      z.createElement(
                        "div",
                        { className: Ca.FilterContainer },
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
                            max: "5000",
                            value: this.state.eventsToLoadPerPaging,
                            onChange: this.OnEventPerPageLoad
                          })
                        )
                      ),
                      z.createElement(
                        "div",
                        { className: Ca.FilterContainer },
                        z.createElement("input", {
                          type: "checkbox",
                          id: "VisibilityStart",
                          checked: this.state.bOrderByVisibilityStartTime,
                          onChange: this.OnVisibilityStartTimeChange
                        }),
                        z.createElement(
                          "label",
                          { htmlFor: "VisibilityStart" },
                          Object(q.f)("#EventModeration_OrderByFirstVisible")
                        )
                      )
                    )
                  )
                ),
                z.createElement(S.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  z.createElement(K.a, {
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
            Object(U.c)([s.a], e.prototype, "OnDateChange", null),
            Object(U.c)([s.a], e.prototype, "IsValidDate", null),
            Object(U.c)([s.a], e.prototype, "OnEventPerPageLoad", null),
            Object(U.c)([s.a], e.prototype, "OnChangeEventSelectedTags", null),
            Object(U.c)([s.a], e.prototype, "OnChangeEventExcludeTags", null),
            Object(U.c)([s.a], e.prototype, "OnChangeEventTypeFilter", null),
            Object(U.c)(
              [s.a],
              e.prototype,
              "OnVisibilityStartTimeChange",
              null
            ),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        La = Object(i.i)(Da),
        Na = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingEvent: !A.c.BHasClanEventModel(
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
              A.c.BHasClanEventModel(n) ||
                ((e = Date.now() / 1e3),
                A.c
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new g.a(t.clan_steamid),
                    n,
                    e
                  )
                  .then(function() {
                    return a.setState({ bLoadingEvent: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(le.a)(e);
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
                A.c.BHasClanEventModel(e) &&
                this.setState({ bShowAsModal: !0 });
            }),
            (e.prototype.HideModalEvent = function() {
              this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
            }),
            (e.prototype.OnModeratedChanged = function(e) {
              var t, a, n, r;
              this.state.bSavingModeration ||
                ((t = this.props.solrData.unique_id),
                (a = A.c.GetClanEventModel(t)),
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
                        (n = A.c.GetClanEventModel(a)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (r = new Array()),
                        (o = new Array()),
                        (i =
                          n.BHasTag("mod_reviewed") &&
                          !n.BHasTag("mod_require_rereview")),
                        (l = new ga().SetReviewAction(!i)),
                        i
                          ? r.push("mod_require_rereview")
                          : (r.push("mod_reviewed"),
                            o.push("mod_require_rereview"),
                            n.BHasTag("mod_require_rereview") &&
                              l.SetReReviewAction(!i)),
                        [
                          4,
                          fa.UpdateTagsOnPartnerEvent(
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
                        (d = Object(le.a)(c)),
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
                a = A.c.GetClanEventModel(t.unique_id);
              Object(l.d)(
                z.createElement(Ma, { eventModel: a }),
                Object(Z.m)(e)
              );
            }),
            (e.prototype.OnUpdateSeasonalTag = function(e) {
              var t = this.props.solrData,
                a = A.c.GetClanEventModel(t.unique_id);
              Object(l.d)(
                z.createElement(xa, { eventModel: a }),
                Object(Z.m)(e)
              );
            }),
            (e.prototype.render = function() {
              var e = this.props.solrData,
                t = e.unique_id,
                a = Number(e.appid),
                n = Object(b.g)(Y.c.LANGUAGE),
                r = A.c.GetClanEventModel(t);
              if (r) {
                if (this.state.bShowAsModal)
                  return z.createElement(
                    J.h,
                    { className: Ca.StoreHeaderAdjust },
                    z.createElement(
                      "div",
                      null,
                      z.createElement(ya.b, {
                        event: r,
                        fnClose: this.HideModalEvent
                      })
                    )
                  );
                var o = r.GetImageForSizeAsArrayWithFallback(
                    "capsule",
                    n,
                    ue.c.capsule_main
                  ),
                  i = r.BImageNeedScreenshotFallback("capsule", n),
                  l =
                    0 < o.length
                      ? z.createElement(
                          z.Fragment,
                          null,
                          z.createElement(Sa.a, { rgSources: o }),
                          i &&
                            z.createElement(
                              "div",
                              { className: Ca.NoCapsule },
                              Object(q.f)("#EventModTile_FallbackImageText")
                            )
                        )
                      : z.createElement(
                          "div",
                          { className: Ca.NoCapsule },
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
                  { className: Ca.Tile },
                  z.createElement(
                    "div",
                    { className: Ca.TileCapsule, onClick: this.ShowModalEvent },
                    l
                  ),
                  z.createElement(
                    "div",
                    { className: Ca.TileDetails },
                    z.createElement(
                      "div",
                      { className: Ca.DetailsLeft },
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
                          className: Ca.EventTitle
                        },
                        e.event_name
                      ),
                      z.createElement(
                        "div",
                        {
                          className: Object(V.a)(
                            1 == c ? Ca.TileEventOtherType : ""
                          )
                        },
                        r ? r.GetCategoryAsString() : e.event_type
                      ),
                      this.state.bLoadingEvent &&
                        z.createElement(K.a, {
                          size: "small",
                          string: Object(q.f)("#Loading")
                        }),
                      z.createElement(Ta, {
                        accountID: Number(e.creator_accountid),
                        locToken: "#EventModTile_Author"
                      }),
                      Boolean(
                        e.updator_accountid &&
                          0 < Number(e.updator_accountid) &&
                          e.updator_accountid != e.creator_accountid
                      ) &&
                        z.createElement(Ta, {
                          accountID: Number(e.updator_accountid),
                          locToken: "#EventModTile_Updator"
                        }),
                      z.createElement(Aa, {
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
                          { className: Ca.DetailsMiddle },
                          z.createElement(
                            "div",
                            { className: Ca.ModeratedFlagCtn },
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
                                z.createElement(K.a, { size: "small" }),
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
                              className: Object(V.a)(Q.a.Button, Ca.Button),
                              onClick: this.OnChangeCategory
                            },
                            Object(q.f)("#EventModTile_ChangeEventType")
                          ),
                          r.BHasTag("halloween2019candidate") &&
                            z.createElement(
                              "button",
                              {
                                className: Object(V.a)(Q.a.Button),
                                onClick: this.OnUpdateSeasonalTag
                              },
                              Object(q.f)("#EventModTile_SeasonalTag")
                            ),
                          z.createElement(_a, { eventModel: r })
                        ),
                        z.createElement(
                          "div",
                          { className: Ca.DetailsRight },
                          z.createElement(Ea.b, {
                            event: r,
                            stylesmodule: Ca,
                            nOverrideEndTime: r.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: r.GetStartTimeAndDateUnixSeconds()
                          }),
                          z.createElement(Ga, { event: r }),
                          z.createElement(Ba, { event: r })
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
      var Ga = (function(t) {
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
                for (var a = 0; a < e.length && a < 30; ++a)
                  e[a] && 0 < e[a].length && (t += 1);
              return t;
            }),
            (e.prototype.componentDidMount = function() {
              var a = this,
                e = this.props.event;
              A.c
                .LoadClanEventLocalizationFromAnnouncementGID(
                  e.clanSteamID,
                  e.AnnouncementGID
                )
                .then(function(e) {
                  a.m_cancelSignal.token.reason ||
                    a.setState({ nLocLanguages: e.length });
                })
                .catch(function(e) {
                  var t = Object(le.a)(e);
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
                { className: Ca.AnalysisCtn },
                z.createElement(
                  "div",
                  { className: Ca.TileTitle },
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
                    { className: Ca.ArtHeader },
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
                    { className: Ca.ArtSpotlight },
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
                    { className: Ca.AnalysisMissing },
                    Object(q.f)("#EventModTile_ImageAnalysis_None"),
                    " "
                  ),
                0 == this.state.nLocLanguages &&
                  z.createElement(K.a, {
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
        Aa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingAppInfo: !f.a.BIsAppidLoaded(e.props.appid)
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
              f.a.BIsAppidLoaded(t) ||
                f.a
                  .EnsureStoreCapsuleInfoLoaded(t)
                  .then(function() {
                    a.m_cancelSignal.token.reason ||
                      a.setState({ bLoadingAppInfo: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(le.a)(e);
                    console.error(
                      "EventModerationChannelInfo: App Load: " + t.strErrorMsg,
                      t
                    ),
                      a.m_cancelSignal.token.reason ||
                        a.setState({ bLoadingAppInfo: !1 });
                  }),
                n && y.a.LoadClanInfoForClanSteamID(n);
            }),
            (e.prototype.render = function() {
              if (this.state.bLoadingAppInfo)
                return z.createElement(K.a, {
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
                  { className: Ca.TileAppInfo },
                  z.createElement(
                    "div",
                    { className: Ca.TileAppInfoTitle },
                    z.createElement(
                      O.a,
                      { href: n.capsule_link },
                      z.createElement("img", {
                        className: Ca.TileAppInfoImage,
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
                  o = y.a.GetClanInfoByClanAccountID(r);
                if (o && o.is_curator)
                  return z.createElement(
                    "div",
                    { className: Ca.TileAppInfo },
                    z.createElement(
                      "div",
                      { className: Ca.TileAppInfoTitle },
                      z.createElement(
                        O.a,
                        { href: Y.c.STORE_BASE_URL + "/curator/" + r + "/" },
                        z.createElement("img", {
                          className: Ca.TileAppInfoImage,
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
        Ba = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(U.d)(e, t),
            (e.prototype.render = function() {
              var e = this.props.event,
                t = Object(va.d)(e),
                a = Object(va.c)(e),
                n = Object(va.e)(e),
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
                { className: Ca.VisibiltyCtn },
                z.createElement(
                  "div",
                  { className: Ca.TileTitle },
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
        Ma = (function(t) {
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
                          fa.UpdatePartnerEventType(
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
                        (i = va.o),
                        (l = []),
                        r.value.tags &&
                          r.value.tags.forEach(function(e) {
                            l.push(e);
                            var t = new ga()
                              .SetUpdateSeasonalTags(e)
                              .ToModString();
                            l.push(t);
                          }),
                        [
                          4,
                          fa.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.GetAnnouncementGID(),
                            l,
                            i,
                            new ga().SetActionChangeEvent(o)
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
                        (d = Object(le.a)(c)),
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
                r = b.e
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
                  J.c,
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
                      { className: Ca.CategoryChangeDialog },
                      z.createElement("br", null),
                      this.state.bUpdating &&
                        z.createElement(K.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        z.createElement(
                          "div",
                          null,
                          Object(q.f)("#Chat_Settings_Error_ServerError"),
                          z.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      z.createElement(ha.a, {
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
        xa = (function(t) {
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
                          fa.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            t,
                            a,
                            new ga().SetUpdateSeasonalTags(
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
                        (i = Object(le.a)(o)),
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
                J.c,
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
                    { className: Ca.CategoryChangeDialog },
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
                      z.createElement(K.a, { size: "small" }),
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
        Ra = a("gOcu"),
        Fa = (function(t) {
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
                      !a || A.c.BHasClanEventModel(a))
                        ? [3, 8]
                        : ((r = g.a.InitFromClanID(Number.parseInt(n))),
                          [
                            4,
                            A.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
                        [4, Ra.a.Get().LoadAppIDsBatch(i, this.m_cancelSignal)]
                      );
                    case 4:
                      return (
                        e.sent(),
                        (c = new Array()),
                        Ra.a
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
                return z.createElement(K.a, {
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
                  Ra.a.Get().BHasDemoAppID(t) ||
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
                d = 0,
                u = 0,
                p = 0;
              f.a.GetAllAppInfos().forEach(function(e, t) {
                var a,
                  n = !1;
                e.BIsLoaded() &&
                  Ra.a.Get().BHasDemoAppID(t) &&
                  ((a = Ra.a.Get().GetDemoEventInfo(t)),
                  de.a.GetAppLinkInfo(a.demo_appid).coming_soon
                    ? ((c += 1), (n = !0))
                    : (d += 1)),
                  e.BIsLoaded() && e.GetAppStoreData().BHasDemoAppID()
                    ? ((i += 1), n && (u += 1))
                    : e.BIsLoaded() && Ra.a.Get().BHasDemoAppID(t)
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
                    e.GetNameWithFallback(Object(b.g)(Y.c.LANGUAGE))
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
                    Ra.a.Get().GetNumDemos()
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
        Pa = new ((function() {
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
        Ha = a("vNkc"),
        za = (function(t) {
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
                    var t = Object(le.a)(e);
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
                      (t = ue.a.GetExtensionTypeFromURL(r)),
                      (a = ue.a.GetHashFromHashAndExt(r) + o),
                      [
                        2,
                        ue.e.AsyncGetImageResolution(
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
              var r = Object(le.a)(t),
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
                    Pa.CloseProgress(e, n))
                  : Pa.CompleteBackfill("resize_image");
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
                                  (n = ue.a.GetExtensionTypeFromURL(a)),
                                  (r = new g.a(p.clan_steamid)),
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
                                Object(va.j)(o.width, o.height, h)
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
                                (i = ue.a.GetHashFromHashAndExt(a)),
                                (l = ue.a.GetExtensionStringFromHashAndExt(a)),
                                (s = ue.d.GetResizeDimension(h)),
                                [
                                  4,
                                  ue.b
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
                                      var t = Object(le.a)(e);
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
                      return a < u.length && a < 30 ? [5, t(a)] : [3, 4];
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
                      Pa.StartBackfill("resize_image"), (t = 0), (e.label = 1);
                    case 1:
                      return Pa.BIsBackkFillInProgress()
                        ? [
                            4,
                            fa
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
                          Pa.CompleteBackfill("resize_image"),
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
                                  (n = Pa.CreateOrGetBackfillProgess(
                                    a.unique_id
                                  )),
                                  a.announcement_gid &&
                                  0 != a.announcement_gid.length
                                    ? [
                                        4,
                                        A.c
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
                                      Pa.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                );
                              case 1:
                                return (e.sent(), n.bFailed)
                                  ? [2, "continue"]
                                  : (r = A.c.GetClanEventFromAnnouncementGID(
                                      a.announcement_gid
                                    ))
                                  ? n.bSucceeded ||
                                    n.bFailed ||
                                    n.bAlreadyProcessed
                                    ? ((n.bAlreadyProcessed = !0),
                                      Pa.CloseProgress(a.unique_id, n),
                                      [2, "continue"])
                                    : ((n.bAnalysing = !0),
                                      l.setState({
                                        strInfo:
                                          "Processing " +
                                          Pa.GetBackfillGIDs().length +
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
                                                ue.c.capsule_main
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
                                    Pa.CloseProgress(a.unique_id, n),
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
                                          ue.c.background_mini
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
                                          ue.c.spotlight_main
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
                                  Pa.CloseProgress(a.unique_id, n),
                                  Pa.BIsBackkFillInProgress()
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
                      return 5e3 < Pa.m_nFailures
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
                0 < Pa.m_nFailures &&
                  Pa.GetBackfillGIDs().forEach(function(e) {
                    var t,
                      a = Pa.GetEventBackfillProgress().get(e);
                    a &&
                      a.bFailed &&
                      ((t = A.c.GetClanEventModel(e)) &&
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
                              { className: Ha.Error },
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
                        return Pa.CompleteBackfill("resize_image");
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
                  Pa.m_nProcessed
                ),
                z.createElement(
                  "div",
                  null,
                  "Events Succeeded: ",
                  Pa.m_nSuccesses
                ),
                z.createElement("div", null, "Events Warning: ", Pa.m_nWarning),
                z.createElement("div", null, "Events Failed: ", Pa.m_nFailures),
                z.createElement("div", null, "Events Skipped: ", Pa.m_nSkipped),
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
                  z.createElement(K.a, {
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
        Ua = a("nWbB"),
        Wa = new ((function() {
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
                              E.a.get(
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
                        (r = e.sent()), console.error(Object(le.a)(r)), [3, 4]
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
                                Wa.GetDiscounts({
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
                                E.a.get(
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
                                E.a.get(
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
                                E.a.get(
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
                                E.a.get(
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
                                E.a.get(
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
                                E.a.get(t, { params: a, withCredentials: !0 })
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
            (e.prototype.GetSaleGamesByFlavor = function(h, v, _, b, g, f, y) {
              return (
                void 0 === f && (f = 0),
                void 0 === y && (y = void 0),
                Object(U.b)(this, void 0, void 0, function() {
                  var t, a, n, r, o, i, l, s, c, d, u, p, m;
                  return Object(U.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        if (
                          ((t = Boolean(y)) && ((b = "search"), (v = void 0)),
                          (a = this.GetFlavorCacheKey(
                            b,
                            v,
                            y,
                            _.AnnouncementGID
                          )),
                          !(n = this.m_mapSaleGameListsByFlavor.get(a)))
                        ) {
                          if (
                            ((r =
                              "browser_" +
                              b +
                              (v ? "_" + v : "_*") +
                              (t ? y : "")),
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
                              search: y
                            }),
                            [4, E.a.get(s, { params: c, withCredentials: h })])
                          : [3, 2];
                      case 1:
                        if (
                          200 != (d = e.sent()).status ||
                          !d.data ||
                          !d.data.appids
                        )
                          throw new Error("query failed, status=" + d.status);
                        for (u = 0, p = d.data.appids; u < p.length; u++)
                          (m = p[u]), n.appids.push(m);
                        (n.possible_has_more = d.data.possible_has_more),
                          (n.solr_index = d.data.solr_index),
                          d.data.app_info && de.a.AddAppLinks(d.data.app_info),
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
        Va = new ((function() {
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
                          [4, E.a.get(t, { withCredentials: !0 })]);
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
      window.g_SaleTokenPointStore = Va;
      var Za = new ((function() {
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
            var t = L.a.GetTimeNowWithOverride();
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
                        [4, E.a.post(t, a, { withCredentials: !0 })]
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
                              l && Va.AddPoints(100);
                          }),
                          [2, n.data.rewards])
                        : (console.error(Object(le.a)(n)), [3, 4]);
                    case 3:
                      return (
                        (r = e.sent()), console.error(Object(le.a)(r)), [3, 4]
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
      window.g_DoorStore = Za;
      var qa = ["recent_events", "recent_tagged_events"],
        Ya = (function() {
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
              qa.forEach(function(e) {
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
                        [4, E.a.get(t, { params: l, withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        1 == (a = e.sent()).data.success &&
                          Object(m.G)(function() {
                            o.AddAllRecentEvents(i, a.data.recent_events),
                              a.data.partnerevents &&
                                A.c.RegisterClanEvents(a.data.partnerevents),
                              a.data.app_info &&
                                de.a.AddAppLinks(a.data.app_info);
                          }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (n = e.sent()),
                        (r = Object(le.a)(n)),
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
        Qa = new ((function() {
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
        Ja = (function() {
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
                            E.a.get(
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
        Ka = a("qP7j"),
        Xa = a.n(Ka),
        $a = new ((function() {
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
        en = (function(a) {
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
                  ? $a
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
                Object(U.a)({ dialogState: "error" }, Object(le.a)(e))
              );
            }),
            (l.prototype.OnDeleteForumTopicFailureCallback = function(e) {
              this.setState(
                Object(U.a)(
                  { dialogState: "failed_thread_delete" },
                  Object(le.a)(e)
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
                r != D.h
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
                  var o = t.GetNameWithFallback(Object(D.g)(Y.c.LANGUAGE)),
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
                          className: Xa.a.Padding
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
                    r.push(z.createElement(K.a, { key: "throbber" }));
                  break;
                case "error":
                  (n = Object(q.f)("#EventDisplay_DeleteEvent_Error")),
                    r.push(
                      z.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++l.m_uniqueError,
                          className: Xa.a.ErrorStyles
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
                          className: Xa.a.ErrorStyles
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
                J.c,
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
        tn = a("6eA3"),
        an = a.n(tn),
        nn = (function(t) {
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
                z.createElement(en, {
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
                s = n.visibility_state == A.b.k_EEventStateVisible,
                c = n.visibility_state == A.b.k_EEventStateStaged;
              if (l.can_edit || l.support_user) {
                var d = [];
                if (void 0 !== this.state.nMaxSaleDayIndex)
                  for (var u = 0; u <= this.state.nMaxSaleDayIndex; ++u)
                    d.push({
                      label: Object(q.f)("#SalePage_Admin_SaleEventDay", u + 1),
                      data: u
                    });
                var p = Object(Y.e)(),
                  m = "community" == p,
                  h = "store" == p;
                return z.createElement(
                  S.a,
                  null,
                  z.createElement(
                    "div",
                    { className: tn.DisplayAdminPanel },
                    z.createElement(
                      "span",
                      { className: tn.DisplayAdminPanel_Title },
                      Object(q.f)("#EventDisplay_Admin_Title")
                    ),
                    z.createElement(
                      "div",
                      { className: tn.DisplayAdminPanel_ctn },
                      a,
                      a &&
                        z.createElement(
                          "span",
                          { className: tn.DisplayAdminPanel_Spacer },
                          " "
                        ),
                      z.createElement(
                        me.c,
                        {
                          eventModel: n,
                          route: me.a.k_eCommunityEdit,
                          openNewWindow: i,
                          className: Object(V.a)(H.Button, tn.AdminButton)
                        },
                        Object(q.f)("#EventEditor_Edit")
                      ),
                      o &&
                        z.createElement(
                          "span",
                          {
                            className: H.Button + " " + tn.AdminButton,
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
                              className: Object(V.a)(H.Button, tn.AdminButton)
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
                          className: Object(V.a)(H.Button, tn.AdminButton)
                        },
                        Object(q.f)("#EventDisplay_Events")
                      ),
                      Boolean(
                        void 0 !== this.state.nMaxSaleDayIndex && 0 < d.length
                      ) &&
                        z.createElement(C.h, {
                          strDropDownClassName: H.DropDownScroll,
                          rgOptions: d,
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
                            className: Object(V.a)(H.Button, tn.AdminButton)
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
                              H.Button,
                              tn.AdminButton,
                              H.ValveOnlyBackground
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
                            className: Object(V.a)(H.Button, tn.AdminButton)
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
                            className: Object(V.a)(H.Button, tn.AdminButton)
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
      var rn = a("bWts"),
        on = a.n(rn),
        ln = a("XsxU"),
        sn = a.n(ln),
        cn = a("TOXn"),
        dn = a("NKJh"),
        un = a.n(dn),
        pn = Object(r.a)(function(c) {
          var d = c.partnerEventStore,
            u = c.gidAnnouncement,
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
                            (t = E.a.CancelToken.source()),
                            (m.current = t.cancel),
                            [4, y.a.LoadClanInfoForClanSteamID(p)]
                          );
                        case 1:
                          return (
                            e.sent(),
                            [
                              4,
                              d.LoadAdjacentPartnerEventsByAnnouncement(
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
                                  return e.GetAnnouncementGID() != u;
                                })
                                .map(function(e) {
                                  return e.AnnouncementGID;
                                })),
                              ve.g(n),
                              (r = n.slice(0, 3).map(function(e) {
                                return d.GetClanEventFromAnnouncementGID(e);
                              })),
                              h(r),
                              v(!1),
                              (o = c.trackingLocation) &&
                                ((i = W.a.Get().GetTracker()),
                                (l = !1),
                                d.BHasClanAnnouncementGID(c.gidAnnouncement) &&
                                  (s = d.GetClanEventFromAnnouncementGID(
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
            return _.a.createElement(K.a, {
              position: "center",
              size: "medium"
            });
          if (0 == a.length) return _.a.createElement("div", null);
          var s = y.a.GetClanInfoByClanAccountID(e);
          return _.a.createElement(
            S.a,
            null,
            _.a.createElement(
              "div",
              { className: sn.a.OtherEventsCtn },
              _.a.createElement(
                "div",
                { className: Q.a.EventSectionTitleCtn },
                _.a.createElement(
                  "div",
                  {
                    className: Object(V.a)(
                      Q.a.EventSectionTitle,
                      "EventSectionTitle"
                    )
                  },
                  Object(q.n)("#EventBrowse_MoreEventsTitle", s.group_name),
                  " "
                ),
                _.a.createElement(
                  "div",
                  { className: Q.a.EventSectionSpacer },
                  " "
                ),
                c.bViewAllShowInfiniteScroll
                  ? _.a.createElement(
                      "div",
                      {
                        className: Q.a.EventSectionMoreBtn,
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
                        className: Q.a.EventSectionMoreBtn
                      },
                      Object(q.f)("#EventBrowse_MoreEventsBtn")
                    )
              ),
              _.a.createElement(
                "div",
                { className: sn.a.OtherEvents },
                a.map(function(e) {
                  return _.a.createElement(mn, {
                    key: e.AnnouncementGID,
                    event: e
                  });
                })
              ),
              Boolean(i) &&
                _.a.createElement(se, {
                  appid: a[0].appid,
                  clanSteamID: p,
                  announcementGID: a[0].AnnouncementGID,
                  closeModal: function() {
                    return l(!1);
                  },
                  partnerEventStore: d
                })
            )
          );
        }),
        mn = Object(r.a)(function(e) {
          var t = e.event,
            a = e.imageURLOverride,
            n = e.openNewWindow,
            r = e.appInfo,
            o = e.langOverride,
            i = e.onClick;
          if (!t)
            return _.a.createElement("div", {
              className: sn.a.OtherEvents_EventCtn
            });
          var l = o || Object(D.g)(Y.c.LANGUAGE),
            s =
              void 0 !== a
                ? a
                : t.GetImageURLWithFallback("capsule", l, ue.c.capsule_main),
            c = t.GetNameWithFallback(l) || "",
            d = t.GetCategoryAsString(),
            u = t.GetSummaryWithFallback(l),
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
                    sn.a.OtherEvents_EventCtn,
                    sn.a.HoversEnabled
                  ),
                  eventModel: t,
                  route: me.a.k_eView,
                  openNewWindow: n,
                  onClick: i
                },
                _.a.createElement(
                  "div",
                  { className: sn.a.EventSummaryContainer },
                  _.a.createElement(
                    "div",
                    { className: sn.a.EventSummaryType },
                    d
                  ),
                  _.a.createElement(
                    "div",
                    { className: sn.a.EventSummaryText },
                    u
                  )
                ),
                _.a.createElement("div", {
                  className: sn.a.OtherEvents_BGImage,
                  style: {
                    backgroundColor: "#ffffff",
                    backgroundImage: "url(" + s + ")"
                  }
                }),
                _.a.createElement(
                  "div",
                  { className: sn.a.OtherEvents_ContentCtn },
                  _.a.createElement(
                    "div",
                    { className: sn.a.OtherEvents_MainImageCtn },
                    _.a.createElement("img", {
                      src: s,
                      className: sn.a.OtherEvents_MainImage
                    })
                  ),
                  _.a.createElement(
                    "div",
                    { className: sn.a.OtherEvents_TextCtn },
                    _.a.createElement(
                      "div",
                      { className: sn.a.OtherEvents_TextTitle },
                      c
                    ),
                    p &&
                      _.a.createElement(
                        "div",
                        { className: sn.a.OtherEvents_SubTitle },
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
                  { className: sn.a.AppCapsuleCtn },
                  _.a.createElement(
                    Be.a,
                    {
                      strURL: Y.c.STORE_BASE_URL + "app/" + r.appid,
                      type: "app",
                      id: r.appid,
                      hoverClassName: sn.a.AppCapsuleImageHover
                    },
                    _.a.createElement("img", {
                      className: sn.a.AppCapsuleImage,
                      src: e.appInfo.tiny_capsule
                    })
                  ),
                  _.a.createElement(
                    "span",
                    { className: sn.a.AppCapsulePrice },
                    Boolean(e.appInfo.discount_percent) &&
                      _.a.createElement(
                        "span",
                        { className: un.a.StoreSaleDiscountBox },
                        "-" + e.appInfo.discount_percent + "%"
                      ),
                    !e.appInfo.is_free &&
                      e.appInfo.price &&
                      _.a.createElement(
                        "span",
                        { className: un.a.StoreSalePriceBox },
                        e.appInfo.price
                      )
                  )
                )
            )
          );
        }),
        hn = Object(r.a)(function(e) {
          var t = e.event,
            a = e.imageURLOverride,
            n = e.openNewWindow,
            r = e.onClick;
          if (!t)
            return _.a.createElement("div", {
              className: sn.a.OtherEvents_EventCtn
            });
          var o = Object(D.g)(Y.c.LANGUAGE),
            i =
              void 0 !== a
                ? a
                : t.GetImageURLWithFallback("capsule", o, ue.c.capsule_main),
            l = t.GetNameWithFallback(o),
            s = t.GetCategoryAsString();
          return _.a.createElement(
            me.c,
            {
              className: sn.a.OtherEvents_EventCtn + " " + sn.a.HorizontalEvent,
              eventModel: t,
              route: me.a.k_eView,
              openNewWindow: n,
              onClick: r
            },
            _.a.createElement(
              "div",
              { className: sn.a.OtherEvents_ContentCtn },
              _.a.createElement(
                "div",
                { className: sn.a.OtherEvents_MainImageCtn },
                _.a.createElement("img", {
                  src: i,
                  className: sn.a.OtherEvents_MainImage
                })
              )
            ),
            _.a.createElement(
              "div",
              { className: sn.a.OtherEvents_TextCtn },
              _.a.createElement(
                "div",
                { className: sn.a.HorizontalDescriptionCtn },
                _.a.createElement(
                  "div",
                  { className: sn.a.HorizontalDescription },
                  s
                ),
                _.a.createElement(he.a, {
                  bSingleLine: !0,
                  dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                })
              ),
              _.a.createElement("div", { className: sn.a.HorizontalTitle }, l)
            )
          );
        }),
        vn = (function() {
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
        _n = new ((function() {
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
                  this.m_mapSummaryStats.set(e.clan_account_id, new vn(e)),
                (t = Object(Y.f)("trackingdataevents", "application_config")),
                this.ValidateStoreDefaultList(t) &&
                  t.forEach(function(e) {
                    var t = g.a.InitFromClanID(e.clan_account_id),
                      a = n.GetKey(t, e.event_gid);
                    n.m_mapPerEventStats.set(a, new vn(e));
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
                  this.m_mapPerEventStats.set(a, new vn(null)),
                this.m_mapPerEventStats.get(a)
              );
            }),
            (e.prototype.GetTotalStats = function(e) {
              return (
                this.LazyInit(),
                this.m_mapSummaryStats.has(e.GetAccountID()) ||
                  this.m_mapSummaryStats.set(e.GetAccountID(), new vn(null)),
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
                        Object(m.G)(function() {
                          s.m_mapSummaryStats.set(
                            c.GetAccountID(),
                            new vn(o.data.summary)
                          ),
                            o.data.events_detail.forEach(function(e) {
                              var t = s.GetKey(c, e.event_gid);
                              s.m_mapPerEventStats.has(t)
                                ? s.m_mapPerEventStats.get(t).reset(e)
                                : s.m_mapPerEventStats.set(t, new vn(e));
                            });
                        }),
                        [2, !0]
                      );
                    case 3:
                      return (
                        (i = e.sent()),
                        (l = Object(le.a)(i)),
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
        bn = a("sGzE"),
        gn = (function(e) {
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
                          bn.StatsCtnTitle,
                          a ? bn.NormalStatsMode : bn.SmallStatsMode
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
                          bn.StatsCtn,
                          a ? bn.NormalStatsMode : bn.SmallStatsMode
                        )
                      },
                      z.createElement(
                        "div",
                        { className: bn.StatsLeftSection },
                        z.createElement(
                          "div",
                          { className: bn.StatsTitle_ctn },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)("#EventDashBoard_Location_LibraryHome")
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: bn.StatsTitle },
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
                          { className: bn.StatsTitle },
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
                          { className: bn.StatsTitle_ctn },
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
                          { className: bn.StatsTitle },
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
                          { className: bn.StatsTitle },
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
                          { className: bn.StatsTitle },
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
                          { className: bn.StatsTitle },
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
                        { className: bn.StatsRightSection },
                        z.createElement(
                          "div",
                          { className: bn.StatsTitle_ctn },
                          z.createElement(
                            "span",
                            null,
                            Object(q.f)("#EventDashBoard_Location_StoreDetail")
                          )
                        ),
                        z.createElement(
                          "div",
                          { className: bn.StatsTitle },
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
                          { className: bn.StatsTitle },
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
                          { className: bn.StatsTitle_ctn },
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
                          { className: bn.StatsTitle },
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
                          { className: bn.StatsTitle },
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
                          { className: bn.StatsTitle_ctn },
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
                          { className: bn.StatsTitle },
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
                          { className: bn.StatsTitle },
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
        fn = a("ZCZY"),
        yn = (function(e) {
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
                { className: Object(V.a)(fn.BreadContainer) },
                z.createElement("div", { className: "blockbg" }, e),
                z.createElement("div", { style: { clear: "left" } })
              );
            }),
            t
          );
        })(z.Component),
        En = a("4sqd"),
        Sn = a("5L1o"),
        Cn = a("45m9"),
        On = z.lazy(function() {
          return Promise.all([a.e(1), a.e(4)]).then(a.bind(null, "NIbt"));
        }),
        wn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = E.a.CancelToken.source()),
              (e.state = {
                bLoadingAppInfo: !f.a.BIsAppidLoaded(e.props.event.appid),
                bLoadingClanInfo: !!y.a.GetClanInfoByClanAccountID(
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
                  y.a
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
                  { className: ie.a.FlexCenter, style: { height: "400px" } },
                  z.createElement(K.a, {
                    size: "medium",
                    string: Object(q.f)("#Loading")
                  })
                );
              var u = t.GetDescriptionWithFallback(a),
                p = f.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData(),
                m = Object(Y.d)() == Y.c.STORE_BASE_URL,
                h = y.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                ),
                v = Object(me.d)(
                  t,
                  m ? me.a.k_eStoreNewsHub : me.a.k_eCommunityAllNews,
                  "allowRelative",
                  h && h.vanity_url
                );
              return z.createElement(Tn, {
                event: t,
                lang: a,
                titleBar: d,
                body: z.createElement(
                  S.a,
                  null,
                  z.createElement(
                    "div",
                    { className: an.a.EventDetailTitleContainer },
                    z.createElement(yn, {
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
                      { className: an.a.EventDetailTitle },
                      t.GetNameWithFallback(a)
                    ),
                    t.BHasSubTitle(a) &&
                      z.createElement(
                        "div",
                        { className: an.a.EventDetailsSubTitle },
                        t.GetSubTitle(a)
                      )
                  ),
                  Boolean(
                    t.BEventCanShowBroadcastWidget(this.props.previewMode)
                  ) &&
                    z.createElement(
                      "div",
                      { className: an.a.EventBroadcastCtn },
                      z.createElement(
                        z.Suspense,
                        { fallback: z.createElement("div", null) },
                        z.createElement(On, {
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
                    { className: an.a.EventColumns },
                    z.createElement(
                      "div",
                      { className: an.a.EventDetailsDescription },
                      z.createElement(
                        S.a,
                        null,
                        t.BHasTag("steam_award_nomination_request") &&
                          z.createElement(En.a, {
                            event: t,
                            lang: a,
                            previewMode: s
                          }),
                        t.BHasTag("steam_award_vote_request") &&
                          z.createElement(En.b, {
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
                              an.a.EventDetailsBody
                            )
                          },
                          z.createElement(cn.b, {
                            text: u || "",
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
                        z.createElement(Cn.a, { event: this.props.event })
                      ),
                      Boolean(t.jsondata.read_more_link) &&
                        z.createElement(
                          "div",
                          { className: Object(V.a)(an.a.ReadMoreCnt) },
                          z.createElement(
                            O.a,
                            {
                              className: Object(V.a)(Q.a.Button),
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
                          { className: Object(V.a)(an.a.ReadMoreCnt) },
                          z.createElement(
                            O.a,
                            {
                              className: Object(V.a)(Q.a.Button),
                              href: t.GetSaleURL()
                            },
                            Object(q.f)("#Event_Button_VisitSalePage")
                          )
                        ),
                      z.createElement("span", { className: Q.a.Clear }),
                      z.createElement(
                        S.a,
                        null,
                        z.createElement(Ea.a, { appid: t.appid })
                      )
                    ),
                    z.createElement(
                      S.a,
                      null,
                      z.createElement(In, {
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
                    { className: an.a.AppSummaryCtn },
                    z.createElement(
                      "div",
                      { className: an.a.EventBodyPosition },
                      Boolean(
                        null != p.appid && null != p.appid && 0 != p.appid
                      ) &&
                        z.createElement(
                          "div",
                          { className: an.a.AppSummaryWidgetTitleCtn },
                          z.createElement(
                            "span",
                            { className: an.a.Title },
                            Object(q.f)("#CreatorHome_ThisGame")
                          ),
                          z.createElement(
                            "div",
                            { className: an.a.AppSummaryWidgetCtn },
                            z.createElement(Sn.g, { id: t.appid })
                          )
                        ),
                      z.createElement(X.b, { appid: t.appid, bSmallFormat: !0 })
                    )
                  )
                )
              });
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        Tn = (function(e) {
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
                c = "lang_" + Object(D.f)(a),
                d = t.BImageNeedScreenshotFallback("background", a);
              return z.createElement(
                "div",
                {
                  className: Object(V.a)(
                    an.a.EventDetailsPageContainer,
                    c,
                    Q.a.PartnerEventFont,
                    s
                      ? an.a.DetailArtworkAgeAppropriate
                      : an.a.DetailArtworkAgeNotAppropriate,
                    d && an.a.NoTitleArtwork
                  )
                },
                z.createElement(ne.c, {
                  appId: t.appid,
                  clanId: t.clanSteamID.GetAccountID()
                }),
                n,
                z.createElement(
                  "div",
                  { className: an.a.EventCoverImageCtn },
                  z.createElement(
                    "div",
                    { className: an.a.EventCoverImageBlr },
                    z.createElement("div", {
                      className: an.a.EventCoverImageFuzz,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + l + ")"
                      }
                    }),
                    z.createElement("div", {
                      className: an.a.EventCoverImage,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + l + ")"
                      }
                    })
                  ),
                  z.createElement("div", { className: an.a.CoverImageGradient })
                ),
                z.createElement(
                  "div",
                  { className: an.a.EventBodyCtn },
                  z.createElement("div", {
                    className: an.a.EventBackgroundBlurCtn
                  }),
                  z.createElement(
                    "div",
                    { className: an.a.EventBodyPosition },
                    z.createElement(
                      "div",
                      { className: an.a.EventBody },
                      z.createElement("div", {
                        className: an.a.EventBackgroundBlur,
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
        In = (function(e) {
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
                i = y.a.GetClanInfoByClanAccountID(
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
              var l = L.a.GetTimeNowWithOverride(),
                s = n || t.GetStartTimeAndDateUnixSeconds();
              return z.createElement(
                "div",
                { className: an.a.EventDetailTitleDesc },
                z.createElement(
                  "div",
                  { className: an.a.EventDetailsSticky },
                  i.is_ogg
                    ? z.createElement(kn, { appid: i.appid })
                    : z.createElement(jn, { clanSteamID: t.clanSteamID }),
                  z.createElement(Ea.b, {
                    event: t,
                    nOverrideEndTime: r,
                    nOverrideStartTime: n
                  }),
                  28 !== t.type &&
                    l < s &&
                    z.createElement(
                      "div",
                      { className: an.a.EventDetailTimeInfo },
                      z.createElement(Ge.a, {
                        eventModel: t,
                        eventGID: t.GID,
                        lang: a
                      })
                    ),
                  z.createElement(
                    "div",
                    { className: an.a.EventDetailUserType },
                    z.createElement(
                      "div",
                      { className: an.a.RightSideTitles },
                      Object(q.f)("#EventDisplay_RightColumnTitle_EventType")
                    ),
                    z.createElement(
                      "div",
                      { className: an.a.EventDetailsType },
                      o,
                      " "
                    )
                  ),
                  z.createElement(Ln, { event: t })
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        kn = (function(e) {
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
                { className: an.a.EventDetailGameCallToAction },
                z.createElement(
                  "div",
                  { className: an.a.RightSideTitles },
                  va.v.some(function(e) {
                    return t === e;
                  })
                    ? Object(q.f)("#EventDisplay_RightColumnTitle_Blog")
                    : Object(q.f)("#EventDisplay_RightColumnTitle_Game")
                ),
                z.createElement(Sn.f, {
                  capsule: { id: t, type: "game" },
                  bHidePriceIfOwned: !0,
                  bHideStatusBanners: !0
                }),
                z.createElement(
                  "div",
                  { className: Object(V.a)(an.a.GameActions) },
                  z.createElement(Sn.i, {
                    info: e,
                    className: an.a.ActionButton
                  })
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        jn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.clanSteamID,
                t = y.a.GetClanInfoByClanAccountID(e.GetAccountID());
              return t
                ? z.createElement(
                    "div",
                    { className: an.a.EventDetailGameCallToAction },
                    z.createElement(
                      "div",
                      { className: an.a.RightSideTitles },
                      t.group_name
                    ),
                    z.createElement(
                      "a",
                      { href: y.a.GetCreatorStoreURL(e) },
                      z.createElement("div", {
                        className: an.a.EventDetailsAvatar,
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
        Dn = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"],
        Ln = (z.Component,
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
                      _n.LoadStatsForEvents(
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
                _n.GetStatsFor(e.clanSteamID, e.GID);
              return z.createElement(
                S.a,
                null,
                z.createElement(
                  "div",
                  { className: an.a.EditorStatsCtn },
                  z.createElement(
                    "div",
                    { className: an.a.EditorStatsRow },
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
                    { className: an.a.EditorStatsRow },
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
                    { className: an.a.EditorStatsRow },
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
                    { className: an.a.EditorStatsCtn },
                    Object(q.f)("#EventDashBoard_SummaryStats_Admin_Title"),
                    z.createElement(gn, { summary: t.m_stats })
                  )
              );
            }),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component)),
        Nn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(U.d)(t, e),
            (t.prototype.componentDidMount = function() {
              Za.GetRawDoorData() || Za.LoadDoorData(),
                Va.LoadSaleTokenPoints();
            }),
            (t.prototype.render = function() {
              var e = Za.GetRawDoorData();
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
                  z.createElement(An, {
                    key: "envelope-" + r,
                    iDoorIndex: r,
                    strFontFamily: this.props.strFontFamily
                  })
                );
              var o = Va.GetSaleTokenPoints().points;
              return z.createElement(
                S.a,
                null,
                z.createElement(
                  "div",
                  { className: an.a.LunarNewYearHeader },
                  z.createElement(
                    "div",
                    { className: an.a.EnvelopeArea },
                    0 <= o &&
                      z.createElement(
                        "div",
                        { className: an.a.TokenBalanceContainer },
                        Object(q.f)("#Lunar2020_YourBalancePrefix"),
                        z.createElement(
                          "a",
                          {
                            className: an.a.TokenBalance,
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
                      { className: an.a.BottomMessage },
                      Object(q.f)("#Lunar2020_CheckBackEachDay")
                    )
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Gn = [
          "#Lunar2020_FirstGift",
          "#Lunar2020_SecondGift",
          "#Lunar2020_ThirdGift",
          "#Lunar2020_FourthGift"
        ],
        An = (function(e) {
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
                        (t = Za.BIsDoorOpened(this.props.iDoorIndex)),
                        (a = Object(Z.m)(n)),
                        t
                          ? (Object(l.b)(
                              z.createElement(
                                xn,
                                Object(U.a)({ bIsFirstOpen: !1 }, this.props)
                              ),
                              a
                            ),
                            [2])
                          : [4, Za.OpenDoor(this.props.iDoorIndex, !0)]
                      );
                    case 1:
                      return (
                        e.sent() &&
                          Object(l.b)(
                            z.createElement(
                              xn,
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
                z.createElement(J.c, {
                  strTitle: Object(q.f)("#Lunar2020_LimitedUserDialogTitle"),
                  strDescription: Object(q.n)("#User_LimitedAccount", a),
                  bAlertDialog: !0
                }),
                t
              );
            }),
            (t.prototype.VOOnClose = function() {
              Y.i.is_support && Za.OpenDoor(this.props.iDoorIndex, !1);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.iDoorIndex,
                a = e.strFontFamily;
              Object(h.a)(
                0 <= t && t < Gn.length && t < Za.GetDoorCount(),
                "Day index #" + t + " not in valid range."
              );
              for (
                var n = Object(q.f)(Gn[t]),
                  r = !Y.i.logged_in,
                  o = Za.BIsDoorOpened(t),
                  i = Za.BCanUserOpenDoor(t),
                  l = !0,
                  s = 0;
                s < t;
                s++
              )
                l = l && Za.BIsDoorOpened(s);
              var c = !o && i && l,
                d = new Date(1e3 * Za.GetRawDoorData()[t].rtime_start),
                u = r
                  ? Object(q.f)("#Login_SignIn")
                  : o
                  ? Object(q.f)("#Lunar2020_RereadStory")
                  : c
                  ? Object(q.f)("#Lunar2020_GiftCanBeOpenedNow")
                  : i
                  ? Object(q.f)("#Lunar2020_GiftCanBeOpenedAfterThePreviousOne")
                  : Object(q.f)(
                      "#Lunar2020_GiftLockedUntilDate",
                      d.toLocaleDateString(q.e.GetPreferredLocales(), {
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
                  an.a.EnvelopeContainer,
                  r && an.a.NeedLogin,
                  o && an.a.Opened,
                  c && an.a.Unlocked,
                  !o && !c && an.a.Locked
                );
              return z.createElement(
                "div",
                { className: m },
                z.createElement("div", { className: an.a.BackingRect }),
                z.createElement(
                  "div",
                  { className: an.a.Envelope },
                  z.createElement(
                    "div",
                    { className: an.a.GiftLabel, style: { fontFamily: a } },
                    n
                  )
                ),
                z.createElement(
                  "div",
                  { className: an.a.OpenState, onClick: p },
                  u
                ),
                (Y.i.is_support &&
                  o &&
                  ("beta" == Y.c.WEB_UNIVERSE || "dev" == Y.c.WEB_UNIVERSE) &&
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(an.a.OpenState, an.a.VO),
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
        Bn = [
          "#Lunar2020_StoryDayOneHeader",
          "#Lunar2020_StoryDayTwoHeader",
          "#Lunar2020_StoryDayThreeHeader",
          "#Lunar2020_StoryDayFourHeader"
        ],
        Mn = [
          "#Lunar2020_StoryDayOne",
          "#Lunar2020_StoryDayTwo",
          "#Lunar2020_StoryDayThree",
          "#Lunar2020_StoryDayFour"
        ],
        xn = function(e) {
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
            i = e.iDoorIndex == Za.GetDoorCount() - 1;
          return z.createElement(
            J.d,
            {
              className: an.a.LunarNewYearOpenEnvelopeVideoDialog,
              closeModal: e.closeModal
            },
            z.createElement(
              "div",
              { className: an.a.Container },
              z.createElement(
                "div",
                { className: an.a.Column },
                z.createElement(
                  "div",
                  { className: an.a.StoryHeader },
                  Object(q.f)("#Lunar2020_StoryTitle")
                ),
                z.createElement(
                  "div",
                  { className: an.a.StorySubHeader },
                  Object(q.f)("#Lunar2020_StorySubTitle")
                ),
                z.createElement(
                  "div",
                  { className: an.a.StorySubHeader },
                  Object(q.f)(Bn[e.iDoorIndex])
                ),
                z.createElement(
                  "div",
                  { className: an.a.StoryText },
                  Object(q.f)(Mn[e.iDoorIndex])
                ),
                z.createElement(
                  "div",
                  { className: an.a.VideoBox },
                  z.createElement(
                    "div",
                    {
                      className: Object(V.a)(an.a.CoinText, a && an.a.Visible)
                    },
                    Object(q.f)("#Lunar2020_ReceivedNumberOfTokens", 100)
                  ),
                  z.createElement(
                    "video",
                    {
                      autoPlay: e.bIsFirstOpen,
                      muted: !0,
                      className: an.a.LunarNewYearOpenEnvelopeVideo
                    },
                    z.createElement("source", { src: r, type: "video/mp4" }),
                    z.createElement("source", { src: o, type: "video/webm" }),
                    Object(q.f)("#Lunar2020_ErrorLoadingVideo")
                  )
                )
              ),
              z.createElement(
                "div",
                { className: an.a.Column },
                z.createElement(
                  "div",
                  { className: an.a.StoryPicture },
                  z.createElement("img", {
                    src: Za.GetStoryImage(e.iDoorIndex)
                  })
                ),
                !i &&
                  z.createElement(
                    "div",
                    { className: an.a.CheckBackText },
                    Object(q.f)("#Lunar2020_CheckBackEachDayForStory")
                  )
              )
            ),
            z.createElement(
              "div",
              { className: an.a.Links },
              z.createElement(
                "div",
                { className: an.a.MarketLink },
                z.createElement(
                  "a",
                  { href: Y.c.STORE_BASE_URL + "lunarnewyearmarket" },
                  Object(q.f)("#Lunar2020_LinkFromVideoToMarket")
                )
              ),
              z.createElement(
                "div",
                { className: an.a.MarketLink, onClick: e.closeModal },
                Object(q.f)("#Lunar2020_LinkBackToSale")
              )
            )
          );
        },
        Rn = a("ZlHF"),
        Fn = a.n(Rn),
        Pn = a("gyoR"),
        Hn = (a("bUNj"), a("U9Ih")),
        zn = a.n(Hn),
        Un = (function(t) {
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
            (e.prototype.LoadCapsules = function(y) {
              var E;
              return Object(U.b)(this, void 0, void 0, function() {
                var t, a, n, r, o, i, l, s, c, d, u, p, m, h, v, _, b, g, f;
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
                        (p = Math.max(s, y + 1)),
                        (e.label = 2);
                    case 2:
                      if (!(l.length <= y && u)) return [3, 9];
                      (m = !1),
                        n ||
                          a.visibility_state === va.m.k_EEventStateVisible ||
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
                          Wa.GetSaleGamesByFlavor(
                            n || m,
                            null === (E = null == r ? void 0 : r.GetTab()) ||
                              void 0 === E
                              ? void 0
                              : E.unique_id,
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
                          [4, Object(Pn.d)(l)]);
                    case 7:
                      return (
                        e.sent(), (g = new Array()), [4, Object(Pn.a)(l, !1, g)]
                      );
                    case 8:
                      return (
                        (l = e.sent()),
                        (c = g.length),
                        l.length <= y && (p += 8),
                        [3, 2]
                      );
                    case 9:
                      return this.m_bMounted
                        ? ((f = l.length > y || u),
                          this.setState({
                            bInitialLoadComplete: !0,
                            rgCapsules: l,
                            nVisibleRows: y,
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
                    return va.x.find(function(e) {
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
                  return va.x.find(function(e) {
                    return e.flavor === t;
                  });
                })
                .filter(function(e) {
                  return !!e;
                })
                .map(function(e) {
                  return _.a.createElement(
                    M.a,
                    {
                      key: e.flavor,
                      toolTipContent: Object(q.f)(e.tooltip),
                      onClick: function() {
                        return t.OnFlavorLabelClick(e.flavor);
                      },
                      className: Object(V.a)(
                        zn.a.FlavorLabel,
                        o == e.flavor && zn.a.SelectedFlavor
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
                    { className: zn.a.SaleItemBrowserContainer },
                    _.a.createElement(
                      ot,
                      { className: zn.a.SaleItemBrowserHeaderContainer },
                      _.a.createElement(
                        "div",
                        { className: zn.a.SaleItemBrowserHeader },
                        c,
                        l.enable_search &&
                          _.a.createElement(
                            "div",
                            { className: zn.a.SuggestContainer },
                            _.a.createElement(B.E, null),
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
                          { key: e.id, className: un.a.SaleItemBrowserRow },
                          _.a.createElement(Sn.g, {
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
                        { className: zn.a.EmptyResults },
                        Object(q.f)("#Sale_EmptySearchResultsOrLoadFailure")
                      ),
                    (!t || r) &&
                      _.a.createElement(
                        "div",
                        {
                          className: Object(V.a)(
                            zn.a.ShowContentsContainer,
                            !t && zn.a.Loading
                          )
                        },
                        !t || o
                          ? _.a.createElement(K.a, { size: "medium" })
                          : _.a.createElement(
                              "button",
                              {
                                onClick: this.ShowMoreRows,
                                className: zn.a.ShowContentsButton
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
        Wn = a("onkS"),
        Vn = a("oVVc"),
        Zn = a("l2mU"),
        qn = a("31dG"),
        Yn = a.n(qn);
      function Qn(e, t) {
        for (var a = [], n = 0, r = e.capsules; n < r.length; n++) {
          var o = r[n];
          if ("sub" === o.type) {
            var i = Vn.b.GetPackageInfo(o.id);
            if (i) {
              if ((console.log(JSON.stringify(i)), i.renewal_time_amount === t))
                return i.packageid;
            } else a.push(o.id);
          }
        }
        0 < a.length && Vn.b.LoadPackageInfo(a);
      }
      function Jn(e, t, a, n) {
        var r = e.createElement("input");
        (r.type = "hidden"), (r.name = a), (r.value = n), t.appendChild(r);
      }
      var Kn = (function(e) {
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
                Jn(document, r, "action", "add_to_cart"),
                Jn(document, r, "subid", a.toString()),
                Jn(document, r, "sessionid", Y.c.SESSIONID),
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
                s = Vn.b.GetPackageInfo(n),
                c = Vn.b.GetPackageInfo(r);
              if (!s || (!c && r)) return Vn.b.LoadPackageInfo([n, r]), null;
              if (!s.formatted_final_price) return null;
              var d,
                u,
                p = s.formatted_final_price,
                m = Object(Zn.a)(s, c),
                h = [p, m || ""],
                v = q.f.apply(void 0, Object(U.g)([o], h)),
                _ = q.f.apply(void 0, Object(U.g)([i], h)),
                b = q.f.apply(
                  void 0,
                  Object(U.g)(["#Sale_Subscription_Save"], h)
                ),
                g = null;
              a &&
                ((u = null),
                (u =
                  "string" == typeof (d = Object(cn.a)(a, t))
                    ? z.createElement("img", { src: d })
                    : z.createElement(Sa.a, { rgSources: d })),
                (g = z.createElement("div", { className: Yn.a.LogoImg }, u)));
              var f = (function(e) {
                  for (var t = 0, a = e.appids; t < a.length; t++) {
                    var n = a[t];
                    if (x.a.BOwnsApp(n)) return !0;
                  }
                  return !1;
                })(s),
                y = null,
                y = x.a.BOwnsPackage(n)
                  ? z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          Yn.a.PurchaseButton,
                          Yn.a.AlreadyOwnedPackage
                        )
                      },
                      Object(q.f)("#Sale_Subscription_AlreadyOwnedPackage")
                    )
                  : f
                  ? z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          Yn.a.PurchaseButton,
                          Yn.a.AlreadyOwnedApp
                        )
                      },
                      Object(q.f)("#Sale_Subscription_AlreadyOwnedApp")
                    )
                  : z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          Yn.a.PurchaseButton,
                          Yn.a.UnOwned
                        ),
                        onClick: this.OnClickPurchase
                      },
                      l
                    );
              return z.createElement(
                "div",
                { className: Yn.a.SubscriptionBlock },
                g,
                z.createElement(
                  "div",
                  { className: Yn.a.PriceBlock },
                  z.createElement("span", { className: Yn.a.PriceDisplay }, v),
                  Boolean(m) &&
                    z.createElement(
                      "span",
                      { className: Yn.a.SavingsDisplay },
                      b
                    )
                ),
                z.createElement("div", { className: Yn.a.BodyTextBlock }, _),
                y
              );
            }),
            Object(U.c)([s.a], t.prototype, "OnClickPurchase", null),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Xn = (function(e) {
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
                r = Qn(a, 12),
                o = Qn(a, 3),
                i = Qn(a, 1),
                l =
                  null === (e = a.internal_section_data) || void 0 === e
                    ? void 0
                    : e.subscription_logo_image;
              return z.createElement(
                "div",
                { className: Yn.a.MainBlock },
                z.createElement(
                  "span",
                  { className: Yn.a.SelectAPlan },
                  Object(q.f)("#Sale_Subscription_SelectPlan")
                ),
                z.createElement(
                  "div",
                  { className: Yn.a.SubscriptionListBlock },
                  z.createElement(Kn, {
                    sub_package_id: r,
                    logo_image: l,
                    language: n,
                    compare_package_id: i,
                    price_loc_token: "#Sale_Subscription_Annual_Price",
                    body_loc_token: "#Sale_Subscription_Annual_Body",
                    button_text: Object(q.f)("#Sale_Subscription_Annual_Button")
                  }),
                  z.createElement(Kn, {
                    sub_package_id: o,
                    logo_image: l,
                    language: n,
                    price_loc_token: "#Sale_Subscription_Quarterly_Price",
                    body_loc_token: "#Sale_Subscription_Quarterly_Body",
                    button_text: Object(q.f)(
                      "#Sale_Subscription_Quarterly_Button"
                    )
                  }),
                  z.createElement(Kn, {
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
        $n = a("R+8l");
      function er(e, t, a) {
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
      function tr(e) {
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
        var d,
          u = l
            ? ((d = l),
              s
                ? er(
                    d.tab_active_label_color,
                    d.tab_active_background_gradient_top,
                    d.tab_active_background_gradient_bottom
                  )
                : er(
                    d.tab_inactive_label_color,
                    d.tab_inactive_background_gradient_top,
                    d.tab_inactive_background_gradient_bottom
                  ))
            : void 0;
        return z.createElement(
          "div",
          {
            className: Object(V.a)(Fn.a.SaleTab, i, "SaleTab", s && "Selected"),
            onClick: function() {
              return o(n);
            },
            style: u
          },
          z.createElement(
            "div",
            { className: Object(V.a)(Fn.a.SaleTabLabel) },
            c
          )
        );
      }
      function ar(e) {
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
          return z.createElement(tr, {
            key: n,
            selected: a,
            tab: e,
            language: l,
            classNames: Object(V.a)(
              Fn.a.TabButton,
              a && Fn.a.TabButtonSelected
            ),
            onTabSelected: function(e) {
              return i(r, e);
            }
          });
        });
        return z.createElement(
          "div",
          { className: Fn.a.SaleSection, style: jr(r, t) },
          z.createElement(br, Object(U.a)({}, e)),
          z.createElement("div", { className: Fn.a.TabButtonsCtn }, n)
        );
      }
      var nr = (function(e) {
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
                      (e += Ir(
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
                  { className: Fn.a.TabContentsElement },
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
                  d = Object(q.f)("#AppType_" + c.type) + "_" + c.id;
                a.has(d) ||
                  (a.add(d),
                  (o = null),
                  (i =
                    (o =
                      "bundle" === c.type
                        ? $n.a.GetBundleInfo(c.id)
                        : "sub" === c.type
                        ? Vn.b.GetPackageInfo(c.id)
                        : te.a.GetAppInfo(c.id)) && o.name
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
                    : Object(q.f)("#Sale_TabDayIndex", c.visibility_index)),
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
                      { key: e.sKey, className: Fn.a.TabContentsElement },
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
                { className: Object(V.a)(Fn.a.SaleSection), style: jr(t, a) },
                z.createElement(br, Object(U.a)({}, this.props)),
                z.createElement(
                  "div",
                  { className: Fn.a.TabContentsContainer },
                  this.RenderTabCapsules()
                )
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        rr = (function(t) {
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
              var i = Object(V.a)(Fn.a.SaleSectionTabsTab),
                l = n.tabs.map(function(e) {
                  var t = "Tab_" + e.unique_id;
                  return z.createElement(tr, {
                    key: t,
                    section: n,
                    selected: e === o,
                    tab: e,
                    language: r,
                    classNames: Object(V.a)(
                      i,
                      e === o && Fn.a.SaleSectionTabsSelected
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
                      Fn.a.SaleSection,
                      Fn.a.SaleSectionTabs,
                      "SaleSectionTabs"
                    ),
                    style: jr(n, t)
                  },
                  z.createElement(
                    ot,
                    { className: Fn.a.SaleSectionTabContainer },
                    z.createElement(
                      "div",
                      {
                        className: Object(V.a)(
                          Q.a.SaleSectionContainer,
                          Fn.a.SaleSectionTabsRow
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
        or = a("uIWk"),
        ir = a("FhLd"),
        lr = Object(r.a)(function(e) {
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
                return z.createElement(sr, {
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
        sr = Object(r.a)(function(e) {
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
              return z.createElement(cr, {
                language: n,
                key: "facet_" + i + "_value_" + q.a.Get(e.name, n) + "_" + t,
                value: e,
                fnOnToggleTag: a
              });
            })
          );
        }),
        cr = Object(r.a)(function(e) {
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
              className: o ? ir.FacetValueEnabled : ir.FacetValue,
              onClick: function(e) {
                i(!o), n(a.tag, !o);
              }
            },
            z.createElement("div", { className: ir.FacetValueName }, l),
            Boolean(s) &&
              z.createElement("div", { className: ir.FacetValueDescription }, s)
          );
        }),
        dr = z.lazy(function() {
          return Promise.all([a.e(1), a.e(4)]).then(a.bind(null, "NIbt"));
        });
      var ur = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.m_customCSSNode = null),
              (t.state = {
                nSaleDayIndex: t.props.eventModel
                  ? t.props.eventModel.GetDayIndexFromEventStart()
                  : void 0
              }),
              Ua.a.Get().AddStreamsLoadedListener(t.OnBroadcastStreamsLoaded),
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
                            A.c.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
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
              Ua.a
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
                          return Ua.b.k_ePrimary;
                        case "featured":
                          return Ua.b.k_eFeatured;
                        case "default_featured":
                          return Ua.b.k_eDefaultFeatured;
                        default:
                          return Ua.b.k_eGeneral;
                      }
                    })(i)),
                    (o.default_selection_priority = r),
                    (o.current_selection_priority = r));
                }
            }),
            (e.prototype.GetEventModel = function() {
              return this.props.eventModel
                ? this.props.eventModel
                : A.c.GetClanEventFromAnnouncementGID(Y.b.ANNOUNCEMENT_GID);
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
                  Ua.a.Get().DisableAutoPlay();
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
                Za.BHasSalePageBackgroundOverride() &&
                  ((a = Za.GetSalePageBackgroundOverride()),
                  (n = Za.GetSalePageBackgroundWEBM()),
                  (r = Za.GetSalePageBackgroundMP4()));
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
                    pr,
                    {
                      className: Object(V.a)(
                        Fn.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                        "SaleCustomCSS"
                      ),
                      backgroundImage: a,
                      backgroundColor: e.jsondata.sale_background_color
                    },
                    Boolean(r || n) &&
                      z.createElement(
                        "div",
                        { className: Fn.a.fullscreen_bg },
                        z.createElement(
                          "video",
                          {
                            key: Za.GetLastDoorOpen(),
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            ref: function(e) {
                              e && (e.playbackRate = 0.9);
                            },
                            className: Object(V.a)(
                              Fn.a.SaleBackground,
                              Fn.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                              "SaleBackground",
                              Fn.a.fullscreen_bg__video
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
                      { className: Fn.a.SaleHeaderContainer },
                      e.jsondata.sale_header_overlay &&
                        z.createElement(mr, null)
                    ),
                    z.createElement(
                      "div",
                      {
                        className:
                          Fn.a.SaleOuterContainer +
                          " " +
                          Fn.a["CustomStyle_" + e.jsondata.sale_vanity_id] +
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
                            { className: Fn.a.SaleBroadcastCtn },
                            z.createElement(
                              z.Suspense,
                              { fallback: z.createElement("div", null) },
                              z.createElement(
                                dr,
                                Object(U.a)({}, o, {
                                  bShowCapsuleArt: !0,
                                  fnRenderBroadcastContext: i
                                    ? function() {
                                        return z.createElement(Nr, {
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
                            z.createElement(X.a, {
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
                      z.createElement(_r, {
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
                          z.createElement(wr, {
                            text: Object(q.f)("#Sale_SeeAllSpecials"),
                            url: e.jsondata.sale_browsemore_url,
                            color: e.jsondata.sale_browsemore_color,
                            bgcolor: e.jsondata.sale_browsemore_bgcolor
                          })
                        ),
                      l.can_edit &&
                        z.createElement(nn, {
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
                { className: ie.a.FlexCenter, style: { height: "500px" } },
                z.createElement(K.a, {
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
        pr = (function(t) {
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
                    Fn.a.SaleBackground,
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
        mr = (function(e) {
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
        hr = (function() {
          function e(e, t) {
            var a = this;
            (this.m_activeTab = null),
              (this.m_capsuleFilter = null),
              e &&
                ((this.m_activeTab = e).capsules && 0 !== e.capsules.length
                  ? ((this.m_capsuleFilter = new Set()),
                    Or(e.capsules, t).forEach(function(e) {
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
        vr = (function(t) {
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
                    r.set(e, new hr(a, n.props.nSaleDayIndex)));
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
                d = e.language,
                u = (e.promotionName,
                e.bIsPreview,
                e.nSaleDayIndex,
                this.GetTabSelectionsFromURL()),
                p = !1,
                m = !1,
                h = new hr(null, this.props.nSaleDayIndex),
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
                        !Qa.GetHideWishlist()) ||
                      ("dlc_onsale" == n.smart_section_type &&
                        !Qa.GetHideDLC()) ||
                      ("interactive_recommender_onsale" ==
                        n.smart_section_type &&
                        !Qa.GetHideIRList())) &&
                    !Y.i.logged_in
                  )
                    p ||
                      ((i = z.createElement(gr, {
                        section: e,
                        event: c,
                        language: d
                      })),
                      (p = !0));
                  else
                    switch (e.section_type) {
                      case "items":
                      case "events":
                      case "links":
                        i = z.createElement(
                          Sr,
                          Object(U.a)({ section: e, activeTab: r }, s.props)
                        );
                        break;
                      case "broadcast":
                        c.BEventCanShowBroadcastWidget() &&
                          !m &&
                          ((i = z.createElement(Lr, {
                            broadcastEmbedContext:
                              s.props.broadcastEmbedContext,
                            activeTab: r
                          })),
                          (m = !0));
                        break;
                      case "event_description":
                        i = z.createElement(
                          fr,
                          Object(U.a)({ section: e }, s.props)
                        );
                        break;
                      case "doors":
                        i = z.createElement(Nn, {
                          strFontFamily: Dr(c.jsondata.sale_font, d)
                        });
                        break;
                      case "text_section":
                        i = z.createElement(
                          yr,
                          Object(U.a)({ section: e }, s.props)
                        );
                        break;
                      case "tabs":
                        var l = u.get(e);
                        v.push({ activeTab: l, elements: [] }),
                          (i = z.createElement(
                            z.Fragment,
                            null,
                            z.createElement("div", { ref: s.m_refTabSection }),
                            z.createElement(
                              rr,
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
                          ar,
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
                            z.createElement(X.a, {
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
                          Wn.c,
                          Object(U.a)({ section: e }, s.props, { activeTab: r })
                        );
                        break;
                      case "vo_internal":
                        if (e.internal_section_data)
                          switch (e.internal_section_data.internal_type) {
                            case "subscription_pricing":
                              i = z.createElement(
                                Xn,
                                Object(U.a)({ section: e }, s.props)
                              );
                              break;
                            case "tab_contents":
                              i = z.createElement(
                                nr,
                                Object(U.a)({ section: e }, s.props, {
                                  tab: a.GetTab(),
                                  showReferences: !1
                                })
                              );
                              break;
                            case "tab_references":
                              i = z.createElement(
                                nr,
                                Object(U.a)({ section: e }, s.props, {
                                  tab: a.GetTab(),
                                  showReferences: !0
                                })
                              );
                          }
                        break;
                      case "sale_item_browser":
                        i = z.createElement(
                          Er,
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
                    className: Fn.a.SaleSectionTabListContainer
                  },
                  e.elements
                );
              });
              return z.createElement(
                "div",
                { className: Fn.a.SaleSectionListContainer },
                t
              );
            }),
            Object(U.c)([s.a], e.prototype, "OnTabSelected", null),
            (e = Object(U.c)([r.a], e))
          );
        })(z.Component),
        _r = Object(i.i)(vr);
      var br = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language;
          if (!Ir(t, n, a.clanSteamID.GetAccountID())) return null;
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
                  fontFamily: Dr((o = a).jsondata.sale_font, i),
                  fontWeight: o.jsondata.sale_font_weight,
                  fontSize: o.jsondata.sale_section_font_size,
                  textTransform: o.jsondata.sale_section_disable_capitalize
                    ? "initial"
                    : null,
                  color: r.label_color
                })
              },
              Ir(t, n, a.clanSteamID.GetAccountID())
            );
          return (
            t.label_link &&
              (l = z.createElement(
                "a",
                {
                  href: Tr(t.label_link),
                  target: Y.c.IN_CLIENT ? void 0 : "_blank"
                },
                l
              )),
            l
          );
        },
        gr = function(e) {
          var t = e.section,
            a = e.event;
          e.language;
          return z.createElement(
            "div",
            { className: Fn.a.SaleSection, style: jr(t, a) },
            z.createElement(br, Object(U.a)({}, e)),
            z.createElement(
              "div",
              { className: Fn.a.SaleSectionLoginPrompt },
              Object(q.f)("#SalePage_LoginPrompt"),
              z.createElement(
                "button",
                { onClick: Qt.a, className: Fn.a.LoginButton },
                Object(q.f)("#Login_SignIn")
              )
            )
          );
        },
        fr = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview;
          return z.createElement(
            "div",
            {
              className: Object(V.a)(Fn.a.SaleSection, on.a.SaleSectionCtn),
              style: jr(t, a)
            },
            z.createElement(br, Object(U.a)({}, e)),
            z.createElement(
              "div",
              {
                className: Object(V.a)(Q.a.SaleSectionContainer, "SaleTextCtn")
              },
              z.createElement(cn.b, {
                text: a.GetDescriptionWithFallback(n),
                partnerEventStore: A.c,
                showErrorInfo: r,
                event: a
              })
            )
          );
        },
        yr = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            r = e.bIsPreview,
            o = q.a.GetWithFallback(t.text_section_contents, n);
          return z.createElement(
            "div",
            {
              className: Object(V.a)(Fn.a.SaleSection, on.a.SaleSectionCtn),
              style: jr(t, a)
            },
            z.createElement(br, Object(U.a)({}, e)),
            z.createElement(
              "div",
              {
                className: Object(V.a)(Q.a.SaleSectionContainer, "SaleTextCtn")
              },
              z.createElement(cn.b, {
                text: o,
                partnerEventStore: A.c,
                showErrorInfo: r,
                event: a
              })
            )
          );
        },
        Er = (function(e) {
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
                  className: Object(V.a)(Fn.a.SaleSection, on.a.SaleSectionCtn),
                  style: jr(t, a)
                },
                z.createElement(br, Object(U.a)({}, this.props)),
                z.createElement(Un, Object(U.a)({}, this.props))
              );
            }),
            (t = Object(U.c)([r.a], t))
          );
        })(z.Component),
        Sr = (function(t) {
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
              var e = Object(va.t)(this.props.section.section_type);
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
                  var d = Array.from(t);
                  Object(ve.g)(d);
                  var u = {
                    randomized: d,
                    rtime32_last_modified: o.rtime32_last_modified
                  };
                  return window.sessionStorage.setItem(l, JSON.stringify(u)), d;
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
                  Object(ve.g)(t.capsules),
                    Object(ve.g)(t.links),
                    Object(ve.g)(t.events),
                    (t.rtime32_last_modified = a.rtime32_last_modified),
                    window.sessionStorage.setItem(n, JSON.stringify(t));
                }
              }
              return t;
            }),
            (e.prototype.LoadCapsules = function(j) {
              return (
                void 0 === j && (j = 0),
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
                    f,
                    y,
                    E,
                    S,
                    C,
                    O,
                    w,
                    T,
                    I,
                    k;
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
                            ? [3, 7]
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
                                                  Wa.GetDiscounts({
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
                                                Wa.GetDiscounts({
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
                                            : [4, Wa.GetTopN(_, i)];
                                        case 5:
                                          return [
                                            2,
                                            (l = e.sent()).map(function(e) {
                                              return { id: e, type: "game" };
                                            })
                                          ];
                                        case 6:
                                          if (!Object(va.g)(t)) return [3, 11];
                                          e.label = 7;
                                        case 7:
                                          return (
                                            e.trys.push([7, 9, , 10]),
                                            [
                                              4,
                                              Wa.GetSaleGamesByFlavor(
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
                                          return Qa.GetHideWishlist()
                                            ? [3, 16]
                                            : [4, Wa.GetWishlistOnSale()];
                                        case 15:
                                          (l = e.sent()),
                                            (s = "game"),
                                            (e.label = 16);
                                        case 16:
                                          return [3, 29];
                                        case 17:
                                          return (
                                            (s = "dlc"),
                                            Qa.GetHideDLC()
                                              ? [3, 19]
                                              : [
                                                  4,
                                                  Wa.GetDLCForGamesInMyLibraryOnSale()
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
                                              Wa.GetSoundtracksForGamesInMyLibraryOnSale()
                                            ]
                                          );
                                        case 21:
                                          return (l = e.sent()), [3, 29];
                                        case 22:
                                          return (
                                            (s = "game"),
                                            Qa.GetHideIRList()
                                              ? [3, 24]
                                              : [
                                                  4,
                                                  Wa.GetInteractiveRecommendationsOnSale()
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
                                              Wa.GetTagRecommendorForThisSale(
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
                                              (d = Ja.Get()).LoadSubscriptionInfo(
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
                                (Y.c.IN_CLIENT
                                  ? "library-"
                                  : Object(Y.e)() + "-") + t),
                                p
                              )
                            ])
                          : [3, 3];
                      case 2:
                        return (
                          (u = e.sent()),
                          (u = this.GetCachedRandomizedOrder("capsules", u)),
                          [3, 4]
                        );
                      case 3:
                        (u = r.capsules), (e.label = 4);
                      case 4:
                        return (
                          (u = Or(
                            (u = u.filter(function(e) {
                              return c.ShouldShowCapsule(e);
                            })),
                            d
                          )),
                          (m = !1),
                          (h = u.length),
                          0 < (v = this.GetRowsToShow(j)) &&
                            !s &&
                            "store" === Object(Y.e)() &&
                            ((_ =
                              (function(e, t) {
                                for (var a = kr(e), n = 0, r = 0; r < t; r++)
                                  n += a[r % a.length];
                                return n;
                              })(r, v) + 4) +
                              4 <
                              h &&
                              ((h = _), (m = !0))),
                          0 < (S = Object(va.s)(r)) &&
                            ((b = Math.max(S + 5, Math.floor(1.1 * S))),
                            (h = Math.min(h, b))),
                          u.length > h && (u = u.slice(0, h)),
                          (g = Cr(r)),
                          [4, Object(Pn.d)(u, g)]
                        );
                      case 5:
                        return (
                          e.sent(),
                          (f = new Array()),
                          [4, Object(Pn.a)(u, g, f)]
                        );
                      case 6:
                        return (
                          (y = e.sent()),
                          (E = f.length),
                          0 < (S = Object(va.s)(r)) &&
                            S < y.length &&
                            (y = y.slice(0, S)),
                          this.setState({
                            nHiddenCapsules: E,
                            capsules: y,
                            allCapsules: y,
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
                              : [4, Ya.Get().GetRecentEventsForSalesPage(i)]);
                      case 8:
                        return (O = e.sent()), [3, 11];
                      case 9:
                        return [
                          4,
                          Ya.Get().GetRecentTaggedEventsForSalesPage(i, r)
                        ];
                      case 10:
                        (O = e.sent()), (e.label = 11);
                      case 11:
                        return [
                          4,
                          A.c.LoadBatchPartnerEventsByAnnouncementGID(
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
                          A.c.LoadBatchPartnerEventsByAnnouncementGID(
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
                            return A.c.GetClanEventModel(e);
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
                              : [4, Wa.GetSaleTags()]);
                      case 17:
                        (k = e.sent()),
                          (I = k.map(function(e) {
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
                    var a = kr(e),
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
              var a = Object(va.q)(t);
              return a <= 0 ? 0 : a + e;
            }),
            (e.prototype.WrapWithFacetedBrowsingControls = function(e, t, a) {
              return z.createElement(
                "div",
                { className: ir.FacetedBrowseCtn },
                z.createElement(
                  "div",
                  { className: ir.FacetedBrowseControls },
                  z.createElement(lr, {
                    language: this.props.language,
                    facets: t,
                    fnApplyFilter: a
                  })
                ),
                z.createElement("div", { className: ir.FacetedBrowseItems }, e)
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
                d = o.links,
                u = o.events,
                p = o.bScreenIsWide,
                m = o.nMaxCapsulesPerRow,
                h = o.bAwaitingShowContentLoading;
              if (!i) return null;
              var v = this.GetSectionForSession(),
                _ = 1 === c.length,
                b = _ ? [1] : kr(v),
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
                                className: sn.a.OtherEvents
                              },
                              z.createElement(Ne.a, { event: t }),
                              z.createElement(mn, {
                                event: t,
                                openNewWindow: !0,
                                appInfo: r.hide_prices
                                  ? void 0
                                  : de.a.GetAppLinkInfo(t.appid),
                                onClick: function(e) {
                                  W.a.Get().RecordEventRead(t, 8),
                                    Object(ya.a)(t, Z.m(e)),
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
                            return z.createElement(Sn.b, {
                              key: r.unique_id + "_" + t,
                              link: e,
                              language: i,
                              clanAccountID: c,
                              strClassName: Fn.a.LinkCapsule
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
                              ? z.createElement(Sn.f, {
                                  key: n,
                                  capsule: e,
                                  bShowParentApp: l,
                                  bUseSubscriptionLayout: d,
                                  bShowDemoButton: r.show_as_demos,
                                  bHidePrice: r.hide_prices
                                })
                              : z.createElement(
                                  "div",
                                  {
                                    key: n,
                                    className: Fn.a.AppSummaryWidgetCtn
                                  },
                                  z.createElement(Sn.g, {
                                    id: e.id,
                                    type: e.type,
                                    bUseSubscriptionLayout: d,
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
                  links: d,
                  events: u,
                  language: r,
                  bCanShowSingleRowCapsules:
                    (_ && 1 < m) ||
                    kr(v).every(function(e) {
                      return 1 === e;
                    }),
                  bShowParentApp: Cr(v)
                }).filter(function(e) {
                  return !!e;
                }),
                f = null;
              if (0 < g.length) {
                var y = Object(va.r)(v),
                  E = Math.min(b[0], m),
                  S = v.show_as_carousel && y <= 1;
                if (S && g.length > E)
                  f = z.createElement(
                    Rt,
                    {
                      hideArrows: !p,
                      visibleElements: E,
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
                  if (v.show_as_carousel) (C = y), (O = S);
                  else if (0 == this.state.nShowAdditionalRows && 0 < C) {
                    for (var w = 0, T = 0; w < C; w++) {
                      if ((T += G = Math.min(b[w % b.length], m)) > g.length)
                        break;
                    }
                    C = Math.max(2, w);
                  }
                  for (
                    var I, k = new Array(), j = new Array(), D = 0, L = 0;
                    D < g.length;
                    L++
                  ) {
                    for (var N = 0; (0 == C || N < C) && D < g.length; N++) {
                      var G = Math.min(b[N % b.length], m),
                        A = Math.min(G, g.length - D);
                      A < G && 0 === N && (G = Math.max(2, A));
                      var B = G - A,
                        M =
                          B % 2 != 0
                            ? "minmax(0, 0.5fr) repeat(" +
                              (G - 1) +
                              ", minmax(0, 1fr)) minmax(0, 0.5fr)"
                            : "repeat(" + G + ", minmax(0, 1fr))",
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
                            key: "Row_" + N,
                            className: Object(V.a)(
                              Q.a.SaleSectionContainer,
                              Fn.a.SaleSectionContainer
                            ),
                            style: { gridTemplateColumns: 1 < G ? M : null }
                          },
                          x,
                          g.slice(D, D + A),
                          R
                        )
                      ),
                        (D += A);
                    }
                    if (O) break;
                    k.push(
                      z.createElement(
                        "div",
                        { className: Fn.a.CarouselPage, key: "Page_" + L },
                        j
                      )
                    ),
                      (j = []);
                  }
                  f =
                    0 == k.length
                      ? ((I = l || g.length > D),
                        z.createElement(
                          z.Fragment,
                          null,
                          j,
                          I &&
                            z.createElement(
                              "div",
                              { className: Fn.a.ShowContentsContainer },
                              h
                                ? z.createElement(K.a, { size: "small" })
                                : z.createElement(
                                    "button",
                                    {
                                      onClick: this.ShowMoreContents,
                                      className: Fn.a.ShowContentsButton
                                    },
                                    Object(q.f)("#Sale_ShowMore")
                                  )
                            )
                        ))
                      : z.createElement(
                          Rt,
                          {
                            hideArrows: !p,
                            visibleElements: 1,
                            className: "SaleSectionCarousel",
                            useTestScrollbar: !0,
                            bLazyRenderChildren: !0
                          },
                          k
                        );
                }
              }
              if (!f) {
                if (!n) return null;
                f = z.createElement(
                  "div",
                  { className: Fn.a.preview_placeholder_section },
                  Object(q.f)(
                    v.smart_section
                      ? "#Sale_SmartPlaceHolder"
                      : "#Sale_PlaceHolder"
                  )
                );
              }
              var H = v.label_link ? Tr(v.label_link) : void 0;
              return (
                v.enable_faceted_browsing &&
                  (f = this.WrapWithFacetedBrowsingControls(
                    f,
                    v.facets,
                    function(u) {
                      u && 0 !== u.clauses.length
                        ? Object(U.b)(e, void 0, void 0, function() {
                            var a, t, n, r, o, i, l, s, c, d;
                            return Object(U.e)(this, function(e) {
                              switch (e.label) {
                                case 0:
                                  (a = new Array()),
                                    (t = 0),
                                    (n = this.state.allCapsules),
                                    (e.label = 1);
                                case 1:
                                  return t < n.length
                                    ? ((r = n[t]), [4, Object(Pn.c)(r)])
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
                                                    var d = c[s];
                                                    if (
                                                      d &&
                                                      (l++,
                                                      (i = a.has(
                                                        d.toLocaleLowerCase()
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
                                          })(t, u))
                                        )
                                          return a.push(r), "break";
                                      },
                                      s = 0,
                                      c = i;
                                    s < c.length &&
                                    ((d = c[s]), "break" !== l(d));
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
                      Fn.a.SaleSection,
                      v.show_as_carousel && Fn.a.CarouselDisplay,
                      on.a.SaleSectionCtn
                    ),
                    style: jr(v, a)
                  },
                  z.createElement(
                    "div",
                    { className: Fn.a.SaleSectionTitleCtn },
                    z.createElement(br, Object(U.a)({}, this.props)),
                    0 < s &&
                      z.createElement(
                        "div",
                        {
                          className: Fn.a.SaleSectionSubtext,
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
                      { className: Fn.a.SaleViewAll },
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
      function Cr(e) {
        return (
          "dlc" === e.smart_section_type ||
          "dlc_onsale" === e.smart_section_type ||
          "dlc_music_onsale" === e.smart_section_type
        );
      }
      function Or(e, t) {
        return e.filter(function(e) {
          return null == e.visibility_index || e.visibility_index == t;
        });
      }
      var wr = function(e) {
        var t = e.text,
          a = e.url,
          n = e.color,
          r = e.bgcolor;
        return z.createElement(
          "a",
          {
            className: Q.a.BrowseMoreButton,
            href: Tr(a),
            target: "_blank",
            style: { backgroundColor: r, color: n }
          },
          t || Object(q.f)("#Sale_BrowseMore_Text_Default")
        );
      };
      function Tr(t) {
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
      function Ir(e, t, a, n) {
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
              a = or.a.GetCreatorHome(t);
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
      function kr(e) {
        return e.capsules_per_row_array
          ? e.capsules_per_row_array
          : e.adaptive_capsules_per_row
          ? [2, 3, 4, 3]
          : [e.capsules_per_row || 1];
      }
      function jr(e, t) {
        if (e.disable_background) return { paddingLeft: 0, paddingRight: 0 };
        var a = "";
        return (
          e.background_image &&
            (a +=
              ",url(" +
              ue.a.GenerateArtworkURLFromHashAndExtensions(
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
      function Dr(e, t) {
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
      var Lr = (function(t) {
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
                    ce.a,
                    { onEnter: this.OnEnter },
                    z.createElement(
                      "div",
                      { className: Fn.a.SaleBroadcastSection },
                      Boolean(this.state.bOnceVisible) &&
                        z.createElement(
                          dr,
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
        Nr = Object(r.a)(function(e) {
          var t = Ua.a.Get().GetPlayReadyStream(e.broadcastContext),
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
            { className: Fn.a.SalePageBroadcastContextHover },
            z.createElement("img", {
              src: l,
              className: Fn.a.AlbumCoverImage,
              onClick: i
            }),
            z.createElement(
              "div",
              { className: Fn.a.AlbumTitle, onClick: i },
              " ",
              o,
              " "
            )
          );
        }),
        Gr = a("BVKn"),
        Ar = Gr.a.Get(),
        Br = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.state = {
                lookupGID: t.props.event_gid
                  ? t.props.event_gid
                  : Ar.GetClanEventGIDFromAnnouncementGID(
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
                        Ar.GetClanEventModel(this.props.event_gid)
                      )
                        return [3, 5];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          Ar.LoadPartnerEventGeneric(
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
                        Ar.LoadPartnerEventGeneric(
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
                                Object(le.a)(e).strErrorMsg
                            );
                          }),
                        [3, 4]
                      );
                    case 4:
                      return [3, 6];
                    case 5:
                      this.props.announcement_gid &&
                        !Ar.GetClanEventGIDFromAnnouncementGID(
                          this.props.announcement_gid
                        ) &&
                        Ar.LoadPartnerEventGeneric(
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
                                Object(le.a)(e).strErrorMsg
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
                  Ar.GetClanEventModel(this.state.lookupGID);
              n && n.appid
                ? (t =
                    (e = f.a.GetStoreCapsuleInfo(n.appid).GetAppStoreData()) &&
                    e.title)
                : n &&
                  n.clanSteamID &&
                  (t =
                    (a = y.a.GetClanInfoByClanAccountID(
                      n.clanSteamID.GetAccountID()
                    )) && a.group_name);
              var r,
                o = n && n.GetNameWithFallback(Object(D.g)(Y.c.LANGUAGE));
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
                t = Ar.GetClanEventModel(this.state.lookupGID);
              t &&
                ((e = Object(me.d)(t, me.a.k_eStoreNewsHub, "allowRelative")),
                this.props.history.push(e));
            }),
            (e.prototype.render = function() {
              var e = Ar.GetClanEventModel(this.state.lookupGID);
              return e
                ? this.props.bInfiniteScroll
                  ? _.a.createElement(
                      S.a,
                      null,
                      _.a.createElement(se, {
                        appid: e.appid,
                        trackingLocation: 7,
                        announcementGID: e.GetAnnouncementGID(),
                        partnerEventStore: Ar,
                        eventModel: e,
                        showAppHeader: !0,
                        closeModal: this.InfiniteScrollCloseModal
                      })
                    )
                  : _.a.createElement(
                      S.a,
                      null,
                      _.a.createElement(wn, {
                        lang: Object(D.g)(Y.c.LANGUAGE),
                        partnerEventStore: Ar,
                        event: e,
                        adminPanel: _.a.createElement(nn, {
                          eventModel: e,
                          partnerEventStore: Ar
                        }),
                        otherEventRow: _.a.createElement(pn, {
                          clanAccountID: e.clanSteamID.GetAccountID(),
                          gidAnnouncement: e.AnnouncementGID,
                          partnerEventStore: Ar
                        })
                      })
                    )
                : _.a.createElement(K.a, null);
            }),
            Object(U.c)([s.a], e.prototype, "InfiniteScrollCloseModal", null),
            (e = Object(U.c)([r.a], e))
          );
        })(_.a.Component),
        Mr = Object(i.i)(Br),
        xr = a("WBba"),
        Rr = a("r+ba"),
        Fr = a("apHd"),
        Pr = (function(n) {
          function e(e) {
            var a = n.call(this, e) || this;
            a.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: []
            };
            var t = Object(Fr.a)("EventWebRowEmbed");
            return (
              a.ValidateStoreDefault(t) &&
                ((a.state.bPreLoaded = t.bPreLoaded),
                (a.state.announcementGIDList = t.announcementGIDList),
                (a.state.events = []),
                a.state.announcementGIDList.forEach(function(e) {
                  var t = A.c.GetClanEventFromAnnouncementGID(e);
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
                  { className: ie.a.FlexCenter },
                  _.a.createElement(K.a, { size: "medium", position: "center" })
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
                  _.a.createElement(se, {
                    classname: Rr.StoreHeaderAdjust,
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
                  { className: Rr.SectionButtonCtn },
                  this.props.bViewAllShowInfiniteScroll
                    ? _.a.createElement(
                        "div",
                        {
                          className: Rr.SectionButton,
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
                          className: Rr.SectionButton
                        },
                        Object(q.f)("#EventBrowse_MoreEventsBtn")
                      )
                ),
                _.a.createElement(
                  "div",
                  { className: Rr.EventsSummariesCtn },
                  n.slice(0, e).map(function(t) {
                    var e =
                      1 === n.length && 500 < window.screen.width ? hn : mn;
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
        Hr = (function(r) {
          function e(e) {
            var t = r.call(this, e) || this;
            t.m_rtimeOldest = 0;
            var a = L.a.GetTimeNowWithOverrideAsDate(),
              n = new Date(a.setUTCHours(0, 0, 0, 0) - 15552e6);
            return (t.m_rtimeOldest = Math.floor(n.getTime() / 1e3)), t;
          }
          return (
            Object(U.d)(e, r),
            (e.prototype.render = function() {
              var e = this.props.appid;
              return _.a.createElement(Pr, {
                appid: e,
                partnerEventStore: Gr.a.Get(),
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
        })(_.a.Component);
      te.a.Init(new xr.a(Y.c.WEBAPI_BASE_URL)), A.c.Init();
      function zr(e) {
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
      function Ur(t) {
        return function(e) {
          return _.a.createElement(zr, null, _.a.createElement(t, e));
        };
      }
      var Wr = Ur(La),
        Vr = Ur(za),
        Zr = Ur(ur),
        qr = Ur(ra),
        Yr = Ur(Mr),
        Qr = Ur(Hr),
        Jr = Ur(Fa);
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
    },
    zrk3: function(e, t, a) {
      e.exports = {
        ModeratorAuditActionCtn:
          "eventmoderationaudit_ModeratorAuditActionCtn_f6z__"
      };
    }
  }
]);

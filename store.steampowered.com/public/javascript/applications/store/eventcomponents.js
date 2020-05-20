/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "+ZmX": function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "Init", function() {
          return o;
        });
      var n = a("5y3B"),
        j = a.n(n);
      function o() {
        var o, r, i, s, e, l, c, d;
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
              o = n.copy({
                translate: { x: -6, y: 15, z: -28 },
                rotate: { y: -t / 8, z: t / 8 }
              }),
              r = n.copy({
                addTo: o,
                path: [{ x: 1, y: -1 }, { x: 0, y: 0 }, { x: 1, y: 1 }],
                closed: !1,
                rotate: null,
                translate: { x: 2 }
              });
            o.copyGraph({
              translate: { x: 1, y: 6, z: -31 },
              rotate: { z: -t / 8, x: t / 8 },
              scale: 0.75
            }),
              n.copy({
                scale: 0.25,
                translate: { y: 18, z: -26 },
                rotate: { z: t / 8 }
              });
            var i = o.copyGraph({
              translate: { x: -9, y: 10, z: -30 },
              rotate: { z: -t / 16 }
            });
            r.copy({ addTo: i, scale: { x: -1 }, translate: { x: -2 } }),
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
                o = (125 * a) / 40 / 2,
                r = [
                  { x: 1 - o, z: 5 },
                  { x: o - 1, z: 5 },
                  { x: o, z: -5 },
                  { x: -o, z: -5 }
                ],
                i = 0;
              i < 40;
              i++
            ) {
              var s = (i / 40) * a;
              new j.a.Shape({
                addTo: e.addTo,
                path: r,
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
              o = new j.a.Anchor({
                addTo: e.addTo,
                translate: { z: -22, x: -28, y: -2 },
                scale: n,
                rotate: { y: t / 8 }
              });
            new j.a.Cone({
              addTo: o,
              diameter: 1,
              length: 3,
              rotate: { x: t / 4 },
              stroke: 4.4,
              color: a.deep
            });
            var r = new j.a.Shape({
              addTo: o,
              translate: { y: -4 },
              stroke: 5.5,
              color: a.deep
            });
            new j.a.Shape({
              addTo: r,
              translate: { x: -1, z: 1 },
              stroke: 0.9 * n,
              color: a.highlight
            }).copy({ translate: { x: 1, z: 1 } });
            var i = { x: -1, y: -1 },
              s = { x: 1, y: 1, z: -1 },
              l = new j.a.Anchor({
                addTo: r,
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
                addTo: o,
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
              o.copyGraph({
                translate: { z: -6, x: -42, y: -15 },
                scale: n,
                rotate: { y: t / 4 }
              }),
              o.copyGraph({
                translate: { z: -30, x: -30, y: -2 },
                scale: n,
                rotate: { y: t / 4 }
              });
          }),
          (ZdogSpookyHouse.addFogMonster = function(e) {
            for (
              var t = j.a.TAU,
                a = ZdogSpookyHouse.color,
                o = new j.a.Anchor(e),
                r = (4 * t) / 8,
                i = [],
                n = 0;
              n < 74;
              n++
            ) {
              var s = n / 74,
                l = s * r,
                c = new j.a.Shape({
                  addTo: o,
                  path: [{}, { x: ((54 * t) / 74) * 0.8 }],
                  stroke: 22 + 8 * -Math.cos((t / 8) * (3 + 5 * s)),
                  translate: {
                    x: 54 * Math.sin(l),
                    z: 54 * Math.cos(l),
                    y: 6 * Math.sin(4 * l)
                  },
                  rotate: { y: s * -r },
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
                  var n = (o.rotate.y = (e * t) / 6);
                  i.forEach(function(e, t) {
                    var a = (t / 74) * r;
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
              o = {
                addTo: n,
                width: 12,
                height: 12,
                stroke: e.stroke,
                fill: !0,
                backface: s.deep
              },
              r = Object.assign({ color: s.light }, o),
              d = new j.a.Group({ addTo: n, translate: { z: 24 } });
            a(new j.a.Rect(Object.assign({}, r, { addTo: d }))),
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
                wall: Object.assign({ translate: { y: -12, z: 24 } }, r),
                pane: s.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({ translate: { y: -24, z: 24 } }, r),
                pane: s.highlight,
                wallRectCallback: a
              });
            var p = Object.assign(
                { color: s.medium, rotate: { y: -i / 4 } },
                o
              ),
              u = Object.assign({ color: s.medium, rotate: { y: i / 4 } }, o),
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
                wall: Object.assign({}, r, { translate: { x: 12, z: 12 } }),
                pane: s.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, r, {
                  translate: { x: 12, y: -12, z: 12 }
                }),
                pane: s.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, r, { translate: { x: -12, z: 12 } }),
                pane: s.medium,
                wallRectCallback: a
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, r, {
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
            var A = w.copyGraph({
              translate: { x: 24, z: 27 },
              rotate: { y: -i / 4 }
            });
            A.copyGraph({ translate: { x: 24, z: 21 } }),
              A.copyGraph({ translate: { x: 24, z: 15 } }),
              A.copyGraph({ translate: { x: 24, z: 9 } }),
              A.copyGraph({ translate: { x: 24, z: 3 } }),
              w
                .copyGraph({
                  translate: { x: -12, z: 27 },
                  rotate: { y: i / 4 }
                })
                .copyGraph({ translate: { x: -12, z: 21 } });
            var k = new j.a.Shape({
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
              k.copy({
                path: [
                  { x: 24, y: 2 },
                  { x: 6, y: 2 },
                  { x: 6, y: 0, z: -6 },
                  { x: 18, y: 0, z: -6 }
                ]
              }),
              k.copy({
                path: [
                  { x: 18, y: 0, z: -6 },
                  { x: 24, y: 2 },
                  { x: 24, y: 2, z: -18 },
                  { x: 18, y: 0, z: -18 }
                ],
                color: s.deep
              }),
              k.copy({
                path: [
                  { x: 24, y: 2, z: -18 },
                  { x: 18, y: 0, z: -18 },
                  { x: 18, y: 0, z: -30 },
                  { x: 24, y: 2, z: -30 }
                ],
                color: s.deep
              }),
              k.copy({
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
                    o = n ? s.highlight : s.deep,
                    r = n || s.deep;
                  l.forEach(function(e) {
                    e.backface = o;
                  }),
                    c.forEach(function(e) {
                      e.backface = r;
                    });
                }
              }
            );
          }),
          (ZdogSpookyHouse.addInteriorScene = function(e) {
            var t = ZdogSpookyHouse.color,
              a = j.a.TAU,
              n = [{ y: 0 }, { y: 1 }],
              o = new j.a.Anchor({
                addTo: e.addTo,
                translate: e.translate,
                rotate: e.rotate
              }),
              r = t.medium,
              i = new j.a.Anchor({ addTo: o, rotate: { z: 0.1 } });
            new j.a.Rect({
              addTo: i,
              width: 9,
              height: 4,
              rotate: { x: a / 4 },
              fill: !0,
              color: r,
              stroke: 1.5
            });
            var s = new j.a.Shape({
              addTo: i,
              path: n,
              scale: 3,
              translate: { x: -4.5, z: -2 },
              color: r,
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
              addTo: o,
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
              color: r
            }),
              new j.a.Shape({
                addTo: p,
                path: n,
                scale: 3,
                stroke: 1.5,
                color: r
              });
            var u = new j.a.Shape({
              addTo: p,
              path: [{}, { z: -2.5, y: 0.5 }],
              translate: { y: 3 },
              stroke: 1,
              color: r
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
                color: r,
                fill: !0
              });
            var m = t.deep,
              h = new j.a.Anchor({
                addTo: o,
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
            var o = new j.a.Rect({
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
                addTo: o,
                diameter: 4,
                translate: { y: -2 },
                stroke: 3,
                color: a.medium
              }),
              n
            );
          }),
          (o = j.a.TAU),
          (r = ZdogSpookyHouse.color),
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
              color: r.deep
            });
            var a = new j.a.Shape(e),
              n = new j.a.Anchor({
                addTo: a,
                translate: { y: t - 14 },
                rotate: { y: -o / 8 }
              });
            return (
              new j.a.Shape({
                addTo: n,
                path: i,
                closed: !1,
                stroke: 0.6,
                color: r.deep
              }).copyGraph({ rotate: { y: o / 4 } }),
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
            var o = j.a.TAU,
              t = ZdogSpookyHouse.color,
              a = Math.floor(e.width / 135) / 2,
              r = new j.a.Illustration({
                element: e,
                zoom: a,
                rotate: { y: o / 8 },
                dragRotate: !0,
                onDragStart: function() {
                  ZdogSpookyHouse.wobbling = !1;
                }
              }),
              n = new j.a.Anchor({
                addTo: r,
                translate: { y: ZdogSpookyHouse.sceneY }
              }),
              i = new j.a.Anchor({ addTo: n });
            new j.a.Rect({
              addTo: i,
              width: 72,
              height: 72,
              rotate: { x: o / 4 },
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
              rotate: { x: o / 4 },
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
              rotate: { x: o / 4 },
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
            var O = ZdogSpookyHouse.addHouse({ addTo: i, stroke: 1 / r.zoom });
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
              A = 300;
            !(function e() {
              var t = D / A;
              if (ZdogSpookyHouse.wobbling & (t <= 2)) {
                var a = j.a.easeInOut(t % 1) * o,
                  n = (-3 * o) / 64;
                (r.rotate.y = Math.sin(a) * n + o / 8),
                  (r.rotate.x = (-0.5 * Math.cos(a) + 0.5) * n);
              }
              r.normalizeRotate(),
                T.animate(t),
                w.animate(t),
                O.animate(t, r.rotate),
                I.animate(t),
                (y.rotate.y = (t * o) / 12),
                (f.rotate.y = (t * o) / 16),
                (i.translate.y = 4 * Math.sin((t / 4) * o)),
                (m.translate.y = -4 * Math.sin((t / 1.5) * o)),
                (h.translate.y = -4 * Math.sin((t / 2.5) * o)),
                (u.translate.y = 4 * Math.sin((t / 3) * o)),
                (l.translate.y = 4 * Math.sin((t / 2) * o)),
                D++,
                r.updateRenderGraph(),
                requestAnimationFrame(e);
            })();
          });
        var t = document.querySelector(".zdog-canvas");
        ZdogSpookyHouse.init(t);
      }
    },
    "2TyT": function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAYAAADj79JYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDdGOTQ3RDYzRDc1MTFFQTk1MjRDRjc1M0VCNkRCRjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDdGOTQ3RDczRDc1MTFFQTk1MjRDRjc1M0VCNkRCRjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0N0Y5NDdENDNENzUxMUVBOTUyNENGNzUzRUI2REJGNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0N0Y5NDdENTNENzUxMUVBOTUyNENGNzUzRUI2REJGNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr88d9sAAAOESURBVHja7J1ZiI1hHMbfj5GSoiw35I7cOLaSpEkupDGSkosxjLU0yFxa7623dneMpGwzZGmIbGnsa5QtxFiyXCByPG/vufg6Y3Twvf/zLs9Tz+2Z7/z6zf/7zv+c850kn88rRi6diIDACZwhcAJnSktFho/VhM5LkqQtRFBZXc1laXg1egsHNokey42UvmgzoG9CuxFv+yQZvvApfqD76AyMmKscKTInzcHoJRzoMpQnZwHD0zmLzoLtT2m4TCrRGzjoGp405dID3Q3ojWhPjhS7I6U4zwoj5gxHikwGoKfwJNagXWi4fcPTuVa4fLxHw2UyHL2CJ1SPJjTcvuHpHEXnwvbXNFwmVcrsYybzslAufdDDgL4lxH2MayOlOA8KJ9RWjhSZDEIv4smuQDvTcPuGp3MOnQnbn9BwmYxVZh9TS8NlDE9nL7oQtn/wzXBfges8V2Yfc5ojRSb90RaAWId25UiRzfXC5eNdGi6TYcrsYxa7vo8JxfB0jqFzYPsrGi6TicrsY6a4eHChvpveGz0I6NvQ7hwpsnmI1mLEXOZIkclA9DyArXJhHxOD4elcUGYf84iGy2SMvmYHvDoaLp99yuxj3ksaHjNwnRdoHaC3cKTIpB96EjA3SO1jYjc8nZvK7GNu03CZ5NBWgF1qcx9Dw3+fE8rsY17ScJlM0CMGkKdm/cAE3nF6ofsBfUeW+xiOlNJyXJktJA0XyE50WlYPVkGeHeYdugAnzgNZnjQJvMSrFJ407eQb2qDntQ3YNLz9K80agL5j84/QcHN1tREdZRs2Df+LbSEN///ofXhOEnaswD+jswF6eqlvPnCk/Hv0e5r6HfzH5TqAWAz/ga5GK8sJOxbDM/lcCg0vLdvREa7ADtnwt+h8gD7k2oGFCNzKp2c5UtrnK7oErXIVdkiGW/8GBA030XuQ9ehoH2D7brjot9hiN1x/TzPnG2wfDf+ELgLoXb7+W/oEvKzftY9ppOg9yEp0nO+wfTDcmfulxGD4VmX2IMHAdtXwN8rc+L0pwLWDc8CdvatbaCPli77cQ6tDhu2K4V7cmTMEw3+ia5XZg0QBu5yGe3d3ZZ8N34MOjRG2tOEf0XqAblQRRwq4978B4ctI+Y4uR8cTtn3Dg/odH9cN34yOJGz7hrcVXpofIVr7hjejQwj7z0n4I9TxvLQncIbACZwhcAJnOs4vAQYAwpCDXwAmgMUAAAAASUVORK5CYII=";
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
    JtYz: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjJDNUE2RjczRDc4MTFFQUJCNUM5MTQ1OEUyRDM3MUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjJDNUE2RjgzRDc4MTFFQUJCNUM5MTQ1OEUyRDM3MUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMkM1QTZGNTNENzgxMUVBQkI1QzkxNDU4RTJEMzcxQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMkM1QTZGNjNENzgxMUVBQkI1QzkxNDU4RTJEMzcxQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpcPAGYAAABcSURBVHjaYvz//z8DNQHjCDQQRAANNQBS9kAsSKY574H4ICMj4wVGqGEBVHLgBpCBeUCGEJUMfMdERcNAQIiJgcpg1MBBauA7KpoHToeHqGjgIZrk5RFWHgIEGADwni0lk+j0EwAAAABJRU5ErkJggg==";
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
        carouselBtnImg: "carousel_carouselBtnImg_2uouo",
        carouselBody: "carousel_carouselBody_3a31O",
        breadcrumbContainer: "carousel_breadcrumbContainer_3HjnE",
        pip: "carousel_pip_3Byg6"
      };
    },
    Wym2: function(e, t, a) {
      "use strict";
      a.r(t);
      var j = a("q1tI"),
        l = a.n(j),
        D = a("mrSG"),
        n = a("vDqi"),
        _ = a.n(n),
        m = a("2vnA"),
        o = a("TyAF"),
        r = a("Gp1o"),
        i = a("Ty5D"),
        f = a("kLLr"),
        b = a("ir+G"),
        g = a("TQGK"),
        S = a("wd/R"),
        s = a.n(S),
        A = a("9w6b"),
        C = a("6oCP"),
        h = a("r64O"),
        G = a("TLQK"),
        y = a("bDQf"),
        k = a("lkRc"),
        E = a("KEpR"),
        c = a("5bld"),
        O = new ((function() {
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
                var e = Object(k.f)("mutedcomminfo", "application_config");
                this.ValidateStoreDefault(e) &&
                  (("dev" != k.c.WEB_UNIVERSE && "beta" != k.c.WEB_UNIVERSE) ||
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
            (e.prototype.UpdateCommunitionSetting = function(o, r, i) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        (this.LazyInit(),
                        (t =
                          k.c.STORE_BASE_URL +
                          "account/optoutappcommunication/"),
                        (a = new FormData()).append("sessionid", k.c.SESSIONID),
                        a.append("allowCommunication", o ? "1" : "0"),
                        r)
                      ) {
                        if (
                          (!o && this.m_mapBlockedAppIds.has(r)) ||
                          (o && !this.m_mapBlockedAppIds.has(r))
                        )
                          return [2, !0];
                        o
                          ? this.m_mapBlockedAppIds.delete(r)
                          : this.m_mapBlockedAppIds.set(r, !0),
                          a.append("appId", r.toString());
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
                          (!o && this.m_mapBlockedClanIds.has(i)) ||
                          (o && !this.m_mapBlockedClanIds.has(i))
                        )
                          return [2, !0];
                        o
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
      window.g_MutedCommunicationStore = O;
      var d = a("O0NR"),
        I = a("ee7K"),
        L = a("5izx");
      function T(e, t, a, n) {
        return {
          strId: "section-" + t,
          strSectionLabel: t,
          rtSectionStart: a,
          rtSectionEnd: n,
          bIsFutureSection: e <= a,
          nRenderedHeight: 3e3
        };
      }
      var p = (function() {
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
                  ? O.BIsMutedAppID(this.GetSingleAppID())
                  : O.BIsMutedClanID(this.GetSingleGroupID()))
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
            (e.prototype.GetCalendarItemsInTimeRange = function(t, a) {
              var e = this.GetCalendarEventList().filter(function(e) {
                  return (
                    e.start_time >= t &&
                    (!a || e.start_time < a) &&
                    E.c.BShouldDisplayEvent(e)
                  );
                }),
                n = a
                  ? this.BHitBackwardHorizon() ||
                    this.GetCalendarEventList().some(function(e) {
                      return e.start_time < t;
                    })
                  : this.BHitForwardHorizon();
              return (
                n || this.LoadAdditionalEvents(a ? "backward" : "forward"),
                { rgCalendarItems: e, bIsComplete: n }
              );
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
                  (this.m_dtInitTime = L.a.GetTimeNowWithOverrideAsDate()),
                this.m_dtInitTime
              );
            }),
            (e.prototype.InitCalendarSections = function() {
              var t = this,
                e = this.GetStoreInitializationTimestamp(),
                a = [],
                n = e.getTime() / 1e3;
              a.push(T(n, Object(G.d)("#EventCalendar_FutureEventsHeader"), n));
              var o = new Date(e);
              o.setHours(0, 0, 0, 1);
              var r = o.getTime() / 1e3;
              a.push(T(n, Object(G.d)("#Time_Today"), r, n)),
                o.setDate(o.getDate() - 1);
              var i = r;
              (r = o.getTime() / 1e3),
                a.push(T(n, Object(G.d)("#Time_Yesterday"), r, i));
              for (
                var s = this.m_rgSortedCalendarEvents[
                    this.m_rgSortedCalendarEvents.length - 1
                  ],
                  l = !1,
                  c = 0;
                c < 5 && !l;
                c++
              )
                o.setDate(o.getDate() - 1),
                  (i = r),
                  (r = o.getTime() / 1e3),
                  a.push(T(n, Object(G.f)(o), r, i)),
                  s && s.start_time > r && (l = !0);
              for (
                var d = new Date(o), p = r;
                d.getMonth() == e.getMonth() && 1 != d.getDate() && !l;

              ) {
                d.setDate(d.getDate() - 7);
                var u = d.getTime() / 1e3;
                a.push(T(n, Object(G.e)(p - 1), u, p)),
                  s && s.start_time > u && (l = !0),
                  (p = u);
              }
              var m = new Date(e);
              m.setHours(0, 0, 0, 1), m.setDate(1);
              for (var h = p, v = 1; v <= 14 && !l; v++) {
                var _ = new Date(m);
                _.setMonth(e.getMonth() - v, 1);
                var b = _.getTime() / 1e3;
                a.push(T(n, Object(G.e)(h - 1), b, h)),
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
                n = e.getTime() / 1e3,
                o = new Date(e);
              o.setHours(24, 0, 0, 0);
              var r = o.getTime() / 1e3;
              a.push(T(n, Object(G.d)("#Time_Today"), n, r));
              var i = r;
              o.setDate(o.getDate() + 1),
                (r = o.getTime() / 1e3),
                a.push(T(n, Object(G.d)("#Time_Tomorrow"), i, r));
              for (
                var s =
                    0 < this.m_rgSortedCalendarEvents.length &&
                    this.m_rgSortedCalendarEvents[0],
                  l = !1,
                  c = 6 - S(e).weekday(),
                  d = 2;
                d <= c && !l;
                d++
              ) {
                i = r;
                var p = Object(G.f)(o);
                o.setDate(o.getDate() + 1),
                  (r = o.getTime() / 1e3),
                  a.push(T(n, p, i, r)),
                  s && s.start_time <= r && (l = !0);
              }
              var u = new Date(o),
                m = r,
                h = S(e).daysInMonth();
              if (u.getMonth() == e.getMonth() && u.getDate() != h && !l) {
                u.setDate(u.getDate() + 7);
                var v = u.getTime() / 1e3;
                a.push(T(n, Object(G.d)("#EventCalendar_NextWeek"), m, v)),
                  s && s.start_time <= v && (l = !0),
                  (m = v);
              }
              var _,
                b = new Date(e);
              if (
                (b.setMonth(b.getMonth() + 1),
                b.setDate(1),
                b.setHours(0, 0, 0, 0),
                u < b && !l)
              ) {
                var g = b.getTime() / 1e3;
                a.push(
                  T(n, Object(G.d)("#EventCalendar_LaterThisMonth"), m, g)
                ),
                  s && s.start_time <= g && (l = !0),
                  (_ = g);
              } else _ = m;
              for (var y = 2; y <= 14 && !l; y++) {
                var E = new Date(b);
                E.setMonth(e.getMonth() + y);
                g = E.getTime() / 1e3;
                a.push(T(n, Object(G.e)(_), _, g)),
                  s && s.start_time <= g && (l = !0),
                  (_ = g);
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
                C.c.RegisterClanEvents(e.events),
                this.RegisterReadEvents(e.events_read),
                this.RegisterEventVotes(e.event_votes),
                e.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                e.backwardComplete && (this.m_bFinishedSearchingBackward = !0),
                this.InitCalendarSections(),
                L.a.bEnableNewsHubMayUpdate &&
                  this.InitFutureCalendarSections();
            }),
            (e.prototype.RegisterCalendarApps = function(e) {
              if (e)
                for (var t = 0, a = e; t < a.length; t++) {
                  var n = a[t];
                  if (!this.m_mapCalendarAppsByID.has(n.appid)) {
                    var o = new c.b();
                    (o.appid = n.appid),
                      (o.source = n.source),
                      (o.playtime = n.playtime),
                      (o.last_played = n.last_played),
                      (o.wishlist_added = n.wishlist_added),
                      this.m_mapCalendarAppsByID.set(n.appid, o);
                  }
                }
            }),
            (e.prototype.RegisterCalendarClans = function(e) {
              if (e)
                for (var t = 0, a = e; t < a.length; t++) {
                  var n = a[t];
                  if (!this.m_mapCalendarClansByID.has(n.clanid)) {
                    var o = new c.c();
                    (o.clanid = n.clanid),
                      (o.source = n.source),
                      this.m_mapCalendarClansByID.set(n.clanid, o);
                  }
                }
            }),
            (e.prototype.RegisterReadEvents = function(e) {
              if (e)
                for (var t = A.a.Get(), a = 0, n = e; a < n.length; a++) {
                  var o = n[a];
                  t.SetEventAsRead(o);
                }
            }),
            (e.prototype.RegisterEventVotes = function(e) {
              if (e)
                for (var t = A.a.Get(), a = 0, n = e; a < n.length; a++) {
                  var o = n[a],
                    r = void 0 === o.vote ? void 0 : Boolean(o.vote);
                  t.SetVote(o.id, r);
                }
            }),
            (e.prototype.RegisterCalendarEvents = function(e) {
              if (e) {
                for (
                  var t = this.BIsGlobalCalendar(), a = !1, n = 0, o = e;
                  n < o.length;
                  n++
                ) {
                  var r = o[n];
                  (t &&
                    r.appid &&
                    (O.BIsMutedAppID(r.appid) ||
                      I.a.BIsGameIgnored(r.appid))) ||
                    (this.InternalInsertCalendarEventItem(r) && (a = !0));
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
                Object(D.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n,
                    o,
                    r,
                    i,
                    s,
                    l,
                    c = this;
                  return Object(D.e)(this, function(e) {
                    return ("forward" === d
                    ? this.BHitForwardHorizon()
                    : this.BHitBackwardHorizon())
                      ? [2, 1]
                      : ((t =
                          k.c.STORE_BASE_URL +
                          "events/ajaxgetusereventcalendarrange/"),
                        (a =
                          "forward" === d
                            ? this.m_nForwardStuckCount
                            : this.m_nBackwardStuckCount),
                        (n = 3 <= a ? 1 : 0),
                        (o = 50 * (a < 3 ? a + 1 : 1)),
                        15,
                        (r = this.GetTimeEdgeForDirection(
                          d,
                          L.a.GetTimeNowWithOverride()
                        )),
                        (i = {
                          minTime: 0,
                          maxTime: 0,
                          ascending: !0,
                          maxResults: o,
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
                          ? ((i.minTime = Math.floor(r + n)),
                            (i.ascending = !0))
                          : ((i.maxTime = Math.floor(r - n)),
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
                                  c.UpdateStuckCounters(d, r))
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
              var n = new c.d();
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
            (e.prototype.UpdateEventBlockFromCalenderEvent = function(n, o) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(D.e)(this, function(e) {
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
                          : [4, O.UpdateCommunitionSetting(o, t, a)]
                      );
                    case 1:
                      return (
                        e.sent() &&
                          !o &&
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
                  var n = 0, o = this.m_rgSortedCalendarEvents;
                  n < o.length;
                  n++
                ) {
                  (s = o[n]).appid != e && a.push(s);
                }
                d.b.RecordAppInteractionEvent(e, d.a.k_eMuted);
              } else if (t)
                for (
                  var r = 0, i = this.m_rgSortedCalendarEvents;
                  r < i.length;
                  r++
                ) {
                  var s;
                  (s = i[r]).clanid != t && a.push(s);
                }
              this.m_rgSortedCalendarEvents = a;
            }),
            (e.prototype.IgnoreAppAndFilterCalendar = function(a) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [4, I.a.UpdateAppIgnore(a.appInfo.appid, !0)];
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
            Object(D.c)(
              [m.observable],
              e.prototype,
              "m_mapCalendarEventsByGid",
              void 0
            ),
            Object(D.c)(
              [m.observable],
              e.prototype,
              "m_rgSortedCalendarEvents",
              void 0
            ),
            Object(D.c)(
              [m.observable],
              e.prototype,
              "m_bFinishedSearchingForward",
              void 0
            ),
            Object(D.c)(
              [m.observable],
              e.prototype,
              "m_bFinishedSearchingBackward",
              void 0
            ),
            Object(D.c)(
              [m.observable],
              e.prototype,
              "m_rgCalendarSections",
              void 0
            ),
            Object(D.c)(
              [m.observable],
              e.prototype,
              "m_rgFutureSections",
              void 0
            ),
            Object(D.c)([m.action], e.prototype, "InitCalendarSections", null),
            Object(D.c)(
              [m.action],
              e.prototype,
              "InitFutureCalendarSections",
              null
            ),
            Object(D.c)(
              [m.action],
              e.prototype,
              "RegisterCalendarEventsAndModels",
              null
            ),
            Object(D.c)([m.action], e.prototype, "RegisterCalendarApps", null),
            Object(D.c)([m.action], e.prototype, "RegisterCalendarClans", null),
            Object(D.c)([m.action], e.prototype, "RegisterReadEvents", null),
            Object(D.c)([m.action], e.prototype, "RegisterEventVotes", null),
            Object(D.c)(
              [m.action],
              e.prototype,
              "RegisterCalendarEvents",
              null
            ),
            Object(D.c)(
              [m.action],
              e.prototype,
              "UpdateEventBlockFromCalenderEvent",
              null
            ),
            Object(D.c)(
              [m.action],
              e.prototype,
              "FilterOutCalendarEntryBy",
              null
            ),
            Object(D.c)(
              [m.action],
              e.prototype,
              "IgnoreAppAndFilterCalendar",
              null
            ),
            Object(D.c)([m.observable], e, "m_strCurCalendarKey", void 0),
            e
          );
        })(),
        u = new Map();
      function v(e) {
        var t = "";
        return (
          e.appids &&
            0 < e.appids.length &&
            (t += "appids:" + e.appids.sort().join(",")),
          e.clanaccountids &&
            0 < e.clanaccountids.length &&
            (t += "clanids:" + e.clanaccountids.sort().join(",")),
          e.collectionid && (t += "collection:" + e.collectionid),
          p.m_strCurCalendarKey !== t &&
            ((p.m_strCurCalendarKey = t),
            u.has(p.m_strCurCalendarKey) ||
              u.set(p.m_strCurCalendarKey, new p(e))),
          t
        );
      }
      function N() {
        return (
          null == p.m_strCurCalendarKey && v({}), u.get(p.m_strCurCalendarKey)
        );
      }
      window.g_EventCalendarMap = u;
      var w,
        M,
        B = a("IjL/"),
        x = a("55Ip"),
        R = a("Mgs7"),
        P = a("6Y59"),
        H = a("5E+2"),
        F = a("+d9t"),
        z = a("exH9"),
        U = a("kyHq"),
        W = a("bxiW"),
        V = a("bS9Q"),
        Z = a("I2Hi"),
        Y = a.n(Z),
        J = (function(t) {
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
                              o,
                              r,
                              i = this;
                            return Object(D.e)(this, function(e) {
                              switch (e.label) {
                                case 0:
                                  return (
                                    (t = {
                                      cc: k.c.COUNTRY,
                                      l: k.c.LANGUAGE,
                                      realm: U.d.k_ESteamRealmGlobal,
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
                                    (a = k.c.STORE_BASE_URL + "search/suggest"),
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
                                    (o = (null ===
                                      (r = null == n ? void 0 : n.data) ||
                                    void 0 === r
                                    ? void 0
                                    : r.length)
                                      ? n.data.map(function(e) {
                                          var t = j.createElement(
                                            "div",
                                            {
                                              className: Y.a.ResultRow,
                                              key: "suggestion-" + e.id,
                                              onClick: function() {
                                                return i.props.fnOnSelected(e);
                                              }
                                            },
                                            j.createElement("img", {
                                              src: e.img,
                                              className: Y.a.AvatarImage
                                            }),
                                            j.createElement(
                                              "div",
                                              { className: Y.a.GameName },
                                              " ",
                                              Object(V.b)(e.name),
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
                                            Object(G.d)(
                                              "#EventCalendar_GameSearch_NoneFound"
                                            )
                                          )
                                        ]),
                                    this.setState({
                                      strSearchString: s,
                                      rgSuggestions: o
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
                { className: Y.a.SuggestContainer },
                j.createElement(R.j, {
                  type: "text",
                  label: this.props.strLabel,
                  onChange: this.UpdateAppSuggestions,
                  bAlwaysShowClearAction: e
                }),
                e &&
                  j.createElement(
                    "div",
                    {
                      className: Object(z.a)(
                        Y.a.Results,
                        this.props.strResultsClass
                      )
                    },
                    this.state.rgSuggestions
                  )
              );
            }),
            Object(D.c)([W.a], e.prototype, "UpdateAppSuggestions", null),
            e
          );
        })(j.Component),
        Q = a("IWyE"),
        q = a.n(Q),
        X = (function() {
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
                G.c.GetPreferredLocales(),
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
                e.endEvent.toLocaleDateString(G.c.GetPreferredLocales(), a)
              );
            }),
            (e.prototype.GetVisibleSpecialEvents = function() {
              var t = this;
              return L.a.bEnableNewsHubMayUpdate
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
        K = new X(),
        $ = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.specialEvent,
                t = window.location.href === k.c.STORE_BASE_URL + e.newshubUrl,
                a = X.IsCurrentlyActive(e),
                n = X.LocalizeDateString(e);
              return j.createElement(
                x.b,
                { to: "/" + e.newshubUrl },
                j.createElement(
                  "div",
                  {
                    className: Object(z.a)(
                      q.a.SpecialEvent,
                      t && q.a.SpecialEventOnPage,
                      a && q.a.SpecialEventActive
                    )
                  },
                  j.createElement(
                    "div",
                    { className: q.a.SpecialEventTitle },
                    Object(G.d)(e.sLocToken)
                  ),
                  n &&
                    j.createElement(
                      "div",
                      { className: q.a.SpecialEventTime },
                      n
                    )
                )
              );
            }),
            t
          );
        })(j.Component),
        ee = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = K.GetVisibleSpecialEvents();
              return 0 === e.length
                ? null
                : j.createElement(
                    "div",
                    { className: q.a.SpecialEventListGroup },
                    j.createElement(
                      "div",
                      { className: q.a.SpecialEventListTitle },
                      Object(G.d)("#Events_SpecialEvents")
                    ),
                    j.createElement(
                      "div",
                      { className: q.a.SpecialEventList },
                      e.map(function(e) {
                        return j.createElement($, {
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
        te = (function(e) {
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
              return j.createElement(
                H.a,
                {
                  toolTipContent: Object(G.d)(
                    "#EventCalendar_EventTypeGroup_ttip_" + t
                  ),
                  direction: "top"
                },
                j.createElement(R.d, {
                  key: "group-" + t,
                  label: Object(G.d)("#EventCalendar_EventTypeGroup_" + t),
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
                H.a,
                {
                  direction: "top",
                  toolTipContent: e
                    ? Object(G.d)("#EventCalendar_DisabledFilter_LoginPrompt")
                    : Object(G.d)("#EventCalendar_GameSource_ttip_" + t)
                },
                j.createElement(R.d, {
                  key: "gs-" + t,
                  label: Object(G.d)("#EventCalendar_GameSource_" + t),
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
                  ? c.d.GetEntityNameForID(e.GetSingleAppID(), void 0)
                  : c.d.GetEntityNameForID(
                      void 0,
                      Number(e.GetSingleGroupID())
                    );
                return Object(G.j)(
                  "#EventCalendar_SpecificCalendar",
                  t,
                  j.createElement("br", null)
                );
              }
              return Object(G.j)(
                "#EventCalendar_Title",
                j.createElement("br", null)
              );
            }),
            (t.prototype.DecorateSearchSuggestion = function(e, t) {
              return e && e.id && ("software" == e.type || "game" == e.type)
                ? j.createElement(
                    x.b,
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
                o = (e.nVisibleHeight, e.bIsCollapsed),
                r = e.bShouldIncludeLegalFooter,
                i = e.fnToggleCollapsed,
                s = qe(),
                l = s
                  ? j.createElement(
                      "div",
                      {
                        className: q.a.MobileButton,
                        onClick: i,
                        style: { transform: "translateY(" + n + "px)" }
                      },
                      o
                        ? j.createElement(P.a, null)
                        : j.createElement(P.y, null)
                    )
                  : null,
                c = o ? a : 0,
                d = s
                  ? null
                  : j.createElement(
                      "div",
                      { onClick: i, className: q.a.CollapseButton },
                      j.createElement(
                        "div",
                        {
                          style: { marginTop: c + "px" },
                          className: q.a.DesktopButton
                        },
                        j.createElement(P.g, { angle: o ? 180 : 0 })
                      )
                    ),
                p = o ? null : { top: a + "px" },
                u = N(),
                m = !0;
              if (u.BIsSingleGroupCalendar()) {
                var h = g.a.GetClanInfoByClanAccountID(u.GetSingleGroupID());
                h && h.has_rss_feed && (m = !1);
              }
              var v = O.GetMutedSourceCount(),
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
                    className: Object(z.a)(
                      q.a.SidebarContainer,
                      o && q.a.SidebarCollapsed
                    ),
                    style: p
                  },
                  o
                    ? d
                    : j.createElement(
                        "div",
                        { className: q.a.Sidebar },
                        d,
                        j.createElement(
                          "div",
                          { className: q.a.SidebarBackground },
                          j.createElement(P.z, null)
                        ),
                        Boolean(!u.BIsGlobalCalendar()) &&
                          j.createElement(
                            "span",
                            { className: q.a.SidebarBackLink },
                            j.createElement(
                              x.b,
                              { to: "/newshub" },
                              j.createElement(P.g, {
                                angle: 0,
                                singlearrow: !0
                              }),
                              Object(G.d)(
                                "#EventCalendar_GlobalCalendar_Action"
                              )
                            )
                          ),
                        j.createElement(
                          "div",
                          { className: q.a.SidebarTitle },
                          this.GetCalendarTitle(u)
                        ),
                        j.createElement(
                          "div",
                          { className: q.a.FilterSection },
                          m &&
                            j.createElement(
                              "div",
                              { className: q.a.FilterSubSection },
                              j.createElement(
                                "div",
                                { className: q.a.FilterSubSectionTitle },
                                Object(G.d)(
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
                              { className: q.a.FilterSubSection },
                              j.createElement(
                                "div",
                                { className: q.a.FilterSubSectionTitle },
                                Object(G.d)(
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
                            j.createElement(
                              "div",
                              null,
                              Object(G.d)("#EventCalendar_SingleAppIsMuted")
                            )
                        ),
                        j.createElement(J, {
                          strLabel: Object(G.d)("#EventCalendar_GameSearch"),
                          fnOnSelected: function() {},
                          fnDecorateSuggestion: this.DecorateSearchSuggestion,
                          filterStoreItemType: ["game", "software"]
                        }),
                        j.createElement(ee, null),
                        j.createElement(
                          "div",
                          { className: q.a.SidebarManageMutedApps },
                          _ &&
                            j.createElement(
                              "div",
                              {
                                className: Object(z.a)(
                                  q.a.SidebarLink,
                                  q.a.ForceDesktopLink
                                ),
                                onClick: _
                              },
                              Object(G.d)("#EventCalendar_ForceDesktopView")
                            ),
                          b &&
                            j.createElement(
                              "div",
                              {
                                className: Object(z.a)(
                                  q.a.SidebarLink,
                                  q.a.ForceResponsiveLink
                                ),
                                onClick: b
                              },
                              Object(G.d)("#EventCalendar_ShowResponsiveView")
                            ),
                          Boolean(u.BIsGlobalCalendar()) &&
                            0 < v &&
                            j.createElement(
                              F.a,
                              {
                                className: q.a.MutedSourcesGroup,
                                href:
                                  k.c.STORE_BASE_URL +
                                  "account/emailoptout/app",
                                bDisableContextMenu: !0
                              },
                              Object(G.d)("#EventCalendar_ManageMutedSources"),
                              j.createElement(
                                "div",
                                { className: q.a.MutedSourcesCount },
                                v
                              )
                            ),
                          j.createElement(
                            F.a,
                            {
                              href: k.c.STORE_BASE_URL + "account/preferences",
                              bDisableContextMenu: !0
                            },
                            Object(G.d)("#EventCalendar_ManageStorePref")
                          )
                        ),
                        r &&
                          j.createElement(
                            "div",
                            { className: q.a.SidebarFooter },
                            j.createElement("img", {
                              src:
                                k.c.STORE_CDN_URL +
                                "public/images/footerLogo_valve_new.png"
                            }),
                            j.createElement(
                              "div",
                              null,
                              Object(G.d)(
                                "#Legal_Footer_WithYear",
                                Object(G.g)(new Date())
                              )
                            )
                          )
                      )
                )
              );
            }),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        ae = Object(i.g)(te),
        ne = a("0OaU"),
        oe = a("uuth"),
        re = a("ylkE"),
        ie = a("cGQe"),
        se = a("qiKp"),
        le = (function() {
          return function() {
            (this.m_bHasBeenTracked = !1), (this.m_fnSubmit = null);
          };
        })(),
        ce = new ((function() {
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
                t || ((t = new le()), this.m_mapEvents.set(e.GID, t)),
                  t.m_bHasBeenTracked ||
                    t.m_fnSubmit ||
                    ((t.m_fnSubmit = new se.b()),
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
                d.b.RecordViewedEvent(N(), e.GID);
              var t = this.m_mapEvents.get(e.GID);
              t &&
                ((t.m_bHasBeenTracked = !0),
                t.m_fnSubmit.Cancel(),
                (t.m_fnSubmit = null));
            }),
            e
          );
        })())(),
        de = function(e) {
          var t = e.event;
          if (ce.ShouldTrack(t)) {
            return j.createElement(oe.a, {
              onEnter: function() {
                return ce.StartTracking(t);
              },
              onLeave: function() {
                return ce.StopTracking(t);
              }
            });
          }
          return null;
        },
        pe = a("mgoM"),
        ue = a("U+Q5"),
        me = a("YLyR"),
        he = a("Kw0F");
      ((M = w || (w = {}))[(M.NotLoaded = 0)] = "NotLoaded"),
        (M[(M.Loading = 1)] = "Loading"),
        (M[(M.Loaded = 2)] = "Loaded");
      var ve = w.NotLoaded,
        _e = [];
      function be(t) {
        if (ve != w.Loaded) {
          if (ve == w.NotLoaded) {
            var e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(e, a),
              (window.onYouTubeIframeAPIReady = ge);
          }
          _e.findIndex(function(e) {
            return t == e;
          }) < 0 && _e.push(t);
        } else t();
      }
      function ge() {
        ve = w.Loaded;
        for (var e = 0, t = _e; e < t.length; e++) {
          (0, t[e])();
        }
        _e = [];
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
            Object(D.d)(n, a),
            (n.prototype.componentWillUnmount = function() {
              this.DestroyPlayer(),
                (function(e) {
                  he.b(_e, e);
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
                this.m_playerContainer && be(this.OnYoutubeScriptsReady));
            }),
            (n.prototype.OnYoutubeScriptsReady = function() {
              this.CreatePlayer(this.props);
            }),
            (n.prototype.CreatePlayer = function(e) {
              if ((this.DestroyPlayer(), this.m_playerContainer)) {
                var t = !1 === e.autoplay ? 0 : 1,
                  a = !0 === e.showInfo ? 1 : 0,
                  n = !0 === e.controls ? 1 : 0,
                  o = !0 === e.showFullscreenBtn ? 1 : 0,
                  r = !0 === e.playsInline ? 1 : 0,
                  i = {
                    width: void 0 !== e.width ? String(e.width) : void 0,
                    height: void 0 !== e.height ? String(e.height) : void 0,
                    videoId: e.video,
                    playerVars: {
                      autoplay: t,
                      showinfo: a,
                      autohide: 1,
                      fs: o,
                      modestbranding: 1,
                      rel: 0,
                      playsinline: r,
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
                  className: Object(z.a)("YoutubePlayer", this.props.classnames)
                },
                j.createElement(ne.a, { className: "YoutubePlayerThrobber" })
              );
              return this.props.autopause
                ? j.createElement(oe.a, { onLeave: this.OnPlayerLeftView }, e)
                : e;
            }),
            (n.s_nPlayerIndex = 0),
            Object(D.c)([W.a], n.prototype, "BindPlayerContainer", null),
            Object(D.c)([W.a], n.prototype, "OnYoutubeScriptsReady", null),
            Object(D.c)([W.a], n.prototype, "CreatePlayer", null),
            Object(D.c)([W.a], n.prototype, "OnPlayerReady", null),
            Object(D.c)([W.a], n.prototype, "OnPlayerStateChange", null),
            Object(D.c)([W.a], n.prototype, "OnError", null),
            Object(D.c)([W.a], n.prototype, "OnPlayerLeftView", null),
            n
          );
        })(j.Component),
        Ee = a("02Wr"),
        Se = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { bDismissedPreviewImage: !1 }), t;
          }
          return (
            Object(D.d)(e, a),
            (e.prototype.render = function() {
              var t = this;
              if (
                (this.props.preloadYoutubeScripts && be(function() {}),
                this.state.bDismissedPreviewImage)
              )
                return j.createElement(ye, Object(D.a)({}, this.props));
              var e = this.props.altImg
                ? this.props.altImg
                : "https://img.youtube.com/vi/" +
                  this.props.video +
                  "/maxresdefault.jpg";
              return j.createElement(
                "div",
                {
                  className: Object(z.a)(
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
                  j.createElement(Ee.b, {
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
                  j.createElement(P.D, null)
                ),
                j.createElement(
                  "div",
                  { className: "VideoHintText" },
                  Object(G.d)("#EventCalendar_WatchYouTubeVideo")
                )
              );
            }),
            e
          );
        })(j.Component),
        fe = a("N0Ye"),
        Ce = a("mB/g"),
        Oe = a("i6tc"),
        Ie = a.n(Oe),
        Te = a("RQmk"),
        we = a("ka0M"),
        De = a("Jqb/"),
        Ae = a("X3Ds"),
        ke = a("TtDX"),
        je = a("y+6m"),
        Ge = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.OnMuteButton = function(e) {
              var t = this.props.calendarEvent,
                a = t.GetEntityName();
              Object(we.d)(
                j.createElement(
                  De.b,
                  {
                    strTitle: Object(G.d)("#EventCalendar_MuteApp"),
                    strDescription: Object(G.d)(
                      "#EventCalendar_MuteApp_details",
                      a
                    ),
                    onOK: function() {
                      return N().UpdateEventBlockFromCalenderEvent(t, !1);
                    }
                  },
                  j.createElement(
                    "a",
                    {
                      href:
                        (k.c.IN_CLIENT ? "steam://openurl/" : "") +
                        k.c.STORE_BASE_URL +
                        "account/emailoptout/app",
                      target: k.c.IN_CLIENT ? void 0 : "_blank"
                    },
                    Object(G.d)("#EventCalendar_ManageMutedApps")
                  )
                ),
                Object(Ae.m)(e)
              );
            }),
            (t.prototype.OnUnMuteButton = function() {
              var e = this.props.calendarEvent;
              N().UpdateEventBlockFromCalenderEvent(e, !0);
            }),
            (t.prototype.IgnoreAppButton = function(e) {
              var t = this.props.calendarEvent;
              t.GetEntityName();
              Object(we.d)(
                j.createElement(
                  De.b,
                  {
                    strTitle: Object(G.d)("#EventCalendar_Ignore"),
                    strDescription: Object(G.d)(
                      "#EventCalendar_IgnoreApp_ttip"
                    ),
                    onOK: function() {
                      return N().IgnoreAppAndFilterCalendar(t);
                    }
                  },
                  j.createElement("br", null),
                  j.createElement(
                    "p",
                    null,
                    Object(G.d)("#EventCalendar_IgnoreApp_newhub")
                  ),
                  j.createElement("br", null),
                  j.createElement(
                    "a",
                    {
                      href:
                        (k.c.IN_CLIENT ? "steam://openurl/" : "") +
                        k.c.STORE_BASE_URL +
                        "account/preferences",
                      target: k.c.IN_CLIENT ? void 0 : "_blank"
                    },
                    Object(G.d)("#EventCalendar_ManageStorePref")
                  )
                ),
                Object(Ae.m)(e)
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
                      j.createElement(
                        je.d,
                        {
                          key: "item-source-" + a + "-" + t,
                          disabled: !0,
                          onSelected: function() {}
                        },
                        Object(G.d)("#EventCalender_Reason_" + t)
                      )
                    ),
                  e.push(
                    j.createElement(
                      je.d,
                      {
                        key: "item-hidesource-" + a + "-" + t,
                        onSelected: function() {
                          E.c.SetGameSourceAllowed(t, !1);
                        }
                      },
                      Object(G.d)("#EventCalender_Hide_Reason_" + t)
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
                o = [],
                r = n.GetSource(),
                i = n.unique_id,
                s = N();
              s.BIsGlobalCalendar() &&
                (r &&
                  r & c.a.k_eLibrary &&
                  (E.c.BIsGameSourceAllowed(E.b.k_ERecent) && n.appInfo
                    ? (o.push(
                        j.createElement(
                          je.d,
                          {
                            key: "item-source-" + i + "-lastplayed",
                            disabled: !0,
                            onSelected: function() {}
                          },
                          Object(G.d)(
                            "#EventCalender_LastPlayed",
                            Object(G.m)(
                              L.a.GetTimeNowWithOverride() -
                                n.appInfo.last_played
                            )
                          )
                        )
                      ),
                      this.AddContextMenuForSource(o, E.b.k_ERecent, i, !1))
                    : this.AddContextMenuForSource(o, E.b.k_ELibrary, i)),
                r &&
                  r & c.a.k_eWishlist &&
                  this.AddContextMenuForSource(o, E.b.k_EWishist, i),
                r &&
                  r & c.a.k_eFollowing &&
                  this.AddContextMenuForSource(o, E.b.k_EFollowing, i),
                r &&
                  r & c.a.k_eRecommended &&
                  this.AddContextMenuForSource(o, E.b.k_ERecommended, i),
                r &&
                  r & c.a.k_eSteam &&
                  this.AddContextMenuForSource(o, E.b.k_ESteam, i),
                r &&
                  r & c.a.k_eFeatured &&
                  this.AddContextMenuForSource(o, E.b.k_EFeatured, i)),
                o.push(
                  j.createElement(
                    je.d,
                    {
                      key: a.GID + "hidetype",
                      onSelected: this.HideAllEventsOfMyType
                    },
                    Object(G.d)(
                      "#EVentCalendar_Hide_EventType",
                      Object(G.d)(
                        "#EventCalendar_EventTypeGroup_" +
                          E.c.MapClanEventTypeToGroup(a.GetEventType())
                      )
                    )
                  )
                ),
                k.i.logged_in &&
                  (O.BIsEventBlocked(n)
                    ? o.push(
                        j.createElement(
                          je.d,
                          {
                            key: a.GID + "unmuteapp",
                            onSelected: this.OnUnMuteButton
                          },
                          j.createElement(
                            H.a,
                            {
                              toolTipContent: Object(G.d)(
                                "#EventCalendar_UnMuteApp_ttip"
                              )
                            },
                            Object(G.d)(
                              "#EventCalendar_UnMuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      )
                    : o.push(
                        j.createElement(
                          je.d,
                          {
                            key: a.GID + "muteapp",
                            onSelected: this.OnMuteButton
                          },
                          j.createElement(
                            H.a,
                            {
                              toolTipContent: Object(G.d)(
                                "#EventCalendar_MuteApp_ttip"
                              )
                            },
                            Object(G.d)(
                              "#EventCalendar_MuteApp_Title",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      ),
                  n.appInfo &&
                    (I.a.BIsGameIgnored(n.appInfo.appid)
                      ? o.push(
                          j.createElement(
                            je.d,
                            {
                              key: a.GID + "unignoreapp",
                              onSelected: this.UnignoreAppButton
                            },
                            Object(G.d)(
                              "#EventCalendar_UnignoreApp",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      : o.push(
                          j.createElement(
                            je.d,
                            {
                              key: a.GID + "ignoreapp",
                              onSelected: this.IgnoreAppButton
                            },
                            j.createElement(
                              H.a,
                              {
                                toolTipContent: Object(G.d)(
                                  "#EventCalendar_IgnoreApp_ttip"
                                )
                              },
                              Object(G.d)(
                                "#EventCalendar_IgnoreApp",
                                this.props.calendarEvent.GetEntityName()
                              )
                            )
                          )
                        ))),
                s.BIsSingleSourceCalendar() ||
                  (a.appid
                    ? o.push(
                        j.createElement(
                          je.d,
                          { key: a.GID + "goto", onSelected: this.GotoAppID },
                          Object(G.d)(
                            "#EventCalendar_Goto_SpecificCalendar",
                            n.GetEntityName()
                          )
                        )
                      )
                    : o.push(
                        j.createElement(
                          je.d,
                          { key: a.GID + "goto", onSelected: this.GotoGroupID },
                          Object(G.d)(
                            "#EventCalendar_Goto_SpecificCalendar",
                            n.GetEntityName()
                          )
                        )
                      )),
                Object(ke.a)(j.createElement(je.c, null, o), e);
            }),
            (t.prototype.render = function() {
              return j.createElement(
                "div",
                {
                  className: Object(z.a)(Ie.a.FooterStat, Ie.a.Options),
                  onClick: this.CreateContextMenu
                },
                j.createElement(P.x, null)
              );
            }),
            Object(D.c)([W.a], t.prototype, "OnMuteButton", null),
            Object(D.c)([W.a], t.prototype, "OnUnMuteButton", null),
            Object(D.c)([W.a], t.prototype, "IgnoreAppButton", null),
            Object(D.c)([W.a], t.prototype, "UnignoreAppButton", null),
            Object(D.c)([W.a], t.prototype, "HideAllEventsOfMyType", null),
            Object(D.c)([W.a], t.prototype, "NoOp", null),
            Object(D.c)([W.a], t.prototype, "AddContextMenuForSource", null),
            Object(D.c)([W.a], t.prototype, "RemoveFromWishlist", null),
            Object(D.c)([W.a], t.prototype, "AddToWishlist", null),
            Object(D.c)([W.a], t.prototype, "GotoAppID", null),
            Object(D.c)([W.a], t.prototype, "GotoGroupID", null),
            Object(D.c)([W.a], t.prototype, "CreateContextMenu", null),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        Le = Object(i.g)(Ge),
        Ne = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bVideoPlayerReady: !1 }), e;
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.OnFallbackClick = function(e) {
              d.b.RecordAppInteractionEvent(
                this.props.calendarEvent.appid,
                d.a.k_eClickThrough
              ),
                this.props.fnOnClicked(this.props.eventModel),
                e.stopPropagation(),
                e.preventDefault();
            }),
            (e.prototype.componentDidMount = function() {
              if (this.props.calendarEvent.clanInfo) {
                var e = f.a.InitFromClanID(
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
              var o = Object(pe.d)(k.c.LANGUAGE),
                r =
                  Xe() && 14 == this.props.eventModel.GetEventType()
                    ? ue.c.full
                    : ue.c.capsule_main,
                i = this.props.eventModel.GetImageForSizeAsArrayWithFallback(
                  "capsule",
                  o,
                  r
                );
              return j.createElement(Se, {
                video: n,
                altImgWithFallback: i,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                imageClassnames: Ie.a.YoutubePreviewImage,
                onPlayerActivated: function() {
                  d.b.RecordAppInteractionEvent(
                    e.props.calendarEvent.appid,
                    d.a.k_ePlayedVideo
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
                o = A.a.Get(),
                r = a.GetEntityName(),
                i = a.GetGameCapsule(),
                s = Object(pe.d)(k.c.LANGUAGE),
                l = t.has_live_stream,
                c = t.has_live_stream,
                d =
                  Xe() && 14 == t.GetEventType()
                    ? ue.c.full
                    : ue.c.capsule_main,
                p = "capsule",
                u = t.BImageNeedScreenshotFallback(p, s),
                m = Boolean(u && t.appid)
                  ? t.GetFallbackArtworkScreenshot()
                  : t.GetImageURLWithFallback(p, s, d),
                h = this.getVideoPreviewControl(),
                v = !h,
                _ = t.GetCategoryAsString(),
                b = Ie.a["EventType" + t.GetEventType()],
                g = t.GetAllTags().map(function(e) {
                  return Ie.a["Tag-" + e];
                }),
                y = z.a.apply(
                  void 0,
                  Object(D.g)(
                    [
                      Ie.a.TileContainer,
                      b,
                      l && Ie.a.TileVideoIcon,
                      n ? Ie.a.DisableHovers : Ie.a.EnableHovers,
                      this.state.bVideoPlayerReady && Ie.a.VideoPlayerReady,
                      h && Ie.a.HasVideo,
                      o.HasEventBeenRead(t.GID) && Ie.a.HasBeenRead
                    ],
                    g
                  )
                ),
                E = t.GetNameWithFallback(s),
                S = t.GetSubTitleWithLanguageFallback(s),
                f = t.GetSummaryWithFallback(s);
              S === f && (f = void 0), S === E && (S = void 0);
              var C =
                  28 !== t.type &&
                  12 !== t.type &&
                  L.a.GetTimeNowWithOverride() <
                    t.GetStartTimeAndDateUnixSeconds(),
                O = j.createElement(
                  "div",
                  { className: Ie.a.CoverImageCtn },
                  h,
                  v &&
                    j.createElement(
                      j.Fragment,
                      null,
                      12 === t.type &&
                        j.createElement(
                          "div",
                          { className: Ie.a.GameCapsuleCtn },
                          j.createElement("div", {
                            className: Ie.a.AppBannerLogo,
                            style: { backgroundImage: "url(" + i + ")" }
                          })
                        ),
                      12 !== t.type &&
                        j.createElement(
                          "div",
                          {
                            className: Object(z.a)(
                              Ie.a.EventCapsuleCtn,
                              l && Ie.a.LiveBroadcastPreview
                            )
                          },
                          j.createElement("div", {
                            className: Object(z.a)(
                              Ie.a.TileImage,
                              u && Ie.a.FallbackImage
                            ),
                            style: { backgroundImage: "url(" + m + ")" }
                          }),
                          l &&
                            j.createElement("div", {
                              className: Ie.a.TileCoverImagePlayable
                            }),
                          c &&
                            j.createElement(
                              "div",
                              { className: Ie.a.TileCoverLiveIcon },
                              Object(G.d)("#home_page_live_broadcast")
                            ),
                          l &&
                            j.createElement(
                              "div",
                              { className: "VideoHintText" },
                              Object(G.d)("#EventCalendar_WatchLiveBroadcast")
                            )
                        )
                    ),
                  j.createElement(
                    "div",
                    { className: Ie.a.EventSummary },
                    j.createElement(
                      "div",
                      { className: Object(z.a)(Ie.a.TileTextCategoryType, b) },
                      _
                    )
                  )
                ),
                I = n && 14 != t.GetEventType() && !h,
                T = I && O,
                w = !I && O;
              return j.createElement(
                "div",
                { className: y },
                j.createElement(de, { event: t }),
                j.createElement(
                  Ce.c,
                  { eventModel: t, route: Ce.a.k_eView },
                  j.createElement(
                    "div",
                    { className: Ie.a.Tile, onClick: this.OnFallbackClick },
                    14 === t.type &&
                      j.createElement("div", {
                        className: Object(z.a)(
                          Ie.a.TileBackgroundImage,
                          u && Ie.a.FallbackImage
                        ),
                        style: { backgroundImage: "url(" + m + ")" }
                      }),
                    j.createElement(
                      "div",
                      { className: Ie.a.MainContentContainer },
                      j.createElement(
                        "div",
                        { className: Ie.a.TileTextContainer },
                        j.createElement(
                          "div",
                          { className: Ie.a.PatchIconCtn },
                          j.createElement(P.r, null)
                        ),
                        j.createElement(
                          "div",
                          { className: Ie.a.EventTitleCtn },
                          T,
                          j.createElement(Me, Object(D.a)({}, this.props)),
                          j.createElement(
                            "div",
                            { className: Ie.a.EventName },
                            E
                          ),
                          S &&
                            j.createElement(
                              "div",
                              { className: Ie.a.EventSubTitle },
                              S
                            ),
                          12 !== t.type &&
                            f &&
                            j.createElement(
                              "div",
                              { className: Ie.a.EventSummaryDefault },
                              f
                            ),
                          j.createElement(
                            "div",
                            { className: Ie.a.EventTypeAndDateCtn },
                            12 === t.type &&
                              j.createElement(
                                "div",
                                { className: Ie.a.SmallAppName },
                                r
                              ),
                            j.createElement(Be, { eventModel: t })
                          )
                        ),
                        C &&
                          j.createElement(
                            "div",
                            { className: Ie.a.ReminderContainer },
                            j.createElement(ie.a, {
                              eventModel: t,
                              eventGID: t.GID,
                              lang: s,
                              bShowStartTime: !0
                            })
                          )
                      ),
                      w
                    )
                  )
                ),
                j.createElement(xe, Object(D.a)({}, this.props))
              );
            }),
            Object(D.c)([W.a], e.prototype, "OnFallbackClick", null),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        Me = function(e) {
          var t = e.eventModel,
            a = e.calendarEvent,
            n = e.bSuppressHoverEffects,
            o = a.GetEntityName(),
            r = a.GetGameIcon(),
            i = function(e) {
              Object(Ce.g)(t, Ce.a.k_eStoreOwnerPage),
                e.stopPropagation(),
                e.preventDefault();
            },
            s = n
              ? j.createElement(
                  "div",
                  {
                    className: Object(z.a)(
                      Ie.a.TileGameCapsule,
                      Ie.a.DisableHovers
                    ),
                    onClick: i
                  },
                  j.createElement("img", { className: Ie.a.AppIcon, src: r }),
                  j.createElement("div", { className: Ie.a.TileTextAppName }, o)
                )
              : j.createElement(
                  "div",
                  { onClick: i },
                  j.createElement(
                    Te.b,
                    {
                      hoverClassName: Object(z.a)(
                        Ie.a.TileGameCapsule,
                        Ie.a.EnableHovers
                      ),
                      type: "app",
                      id: a.appid
                    },
                    j.createElement("img", { className: Ie.a.AppIcon, src: r }),
                    j.createElement(
                      "div",
                      { className: Ie.a.TileTextAppName },
                      o
                    )
                  )
                );
          return j.createElement(
            "div",
            { className: Ie.a.TileTextHeader },
            s,
            a.GetSource() === c.a.k_eRecommended &&
              j.createElement(
                "div",
                { className: Ie.a.SourceRecommended },
                Object(G.d)("#EventCalendar_GameSource_recommended_Verbose")
              )
          );
        },
        Be = Object(o.observer)(function(e) {
          var t = e.eventModel,
            a = e.calendarEvent,
            n = L.a.GetTimeNowWithOverride(),
            o = t ? t.GetStartTimeAndDateUnixSeconds() : a.start_time,
            r = t ? t.GetPostTimeAndDateUnixSeconds() : a.start_time,
            i = t && Object(fe.a)(t.type) && t.GetEndTimeAndDateUnixSeconds();
          if (i && o < n && n < i) {
            var s = i - n,
              l = Object(G.m)(s, !0);
            return j.createElement(
              "div",
              { className: Ie.a.LiveText },
              j.createElement(
                me.e,
                { rtFullDate: o, stylesmodule: Ie.a },
                j.createElement(
                  "div",
                  { className: Ie.a.LiveNow },
                  Object(G.d)("#EventCalendar_LiveNow")
                )
              ),
              j.createElement(
                me.e,
                { rtFullDate: i, stylesmodule: Ie.a },
                Object(G.d)("#EventCalendar_TimeLeft", l)
              )
            );
          }
          if (o < n) {
            var c = n - o,
              d = c < 86400 ? Object(G.m)(c) : Object(G.l)(o),
              p = 3600 < Math.abs(o - r);
            return j.createElement(
              me.e,
              { rtFullDate: o, stylesmodule: Ie.a },
              j.createElement(
                "div",
                { className: Ie.a.PastDateText },
                Object(G.d)(
                  p
                    ? "#EventCalendar_StartedAtTime"
                    : "#EventCalendar_PostedAtTime",
                  d
                )
              )
            );
          }
          var u = (s = o - n) < 86400;
          return j.createElement(
            me.e,
            { rtFullDate: o, stylesmodule: Ie.a },
            j.createElement(
              "div",
              { className: Ie.a.FutureDateText },
              u
                ? Object(G.d)(
                    "#EventCalendar_WillStartAfterDuration",
                    Object(G.m)(s, !0)
                  )
                : Object(G.d)("#EventCalendar_WillStartAtTime", Object(G.l)(o))
            )
          );
        });
      var xe = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.OnPerformVoteUp = function() {
              var e = this.props.eventModel,
                t = A.a.Get();
              !0 !== t.GetPreviouslyLoadedVote(this.props.eventModel) &&
                Object(re.a)(e, t) &&
                (t.Vote(e, !0, _.a.CancelToken.source()),
                d.b.RecordAppInteractionEvent(e.appid, d.a.k_eThumbsUp));
            }),
            (t.prototype.OnDiscussionClicked = function() {
              var e = this.props.eventModel;
              d.b.RecordAppInteractionEvent(e.appid, d.a.k_eDiscussions);
            }),
            (t.prototype.render = function() {
              var e = A.a.Get(),
                t = this.props.eventModel,
                a = Math.max(0, t.nVotesUp - t.nVotesDown),
                n = e.GetPreviouslyLoadedVote(this.props.eventModel),
                o = (function(e, t) {
                  return e.BIsUserLoggedIn()
                    ? k.i.is_limited
                      ? Ie.a.Vote_LimitedUser
                      : !0 === t
                      ? Ie.a.Vote_Positive
                      : !1 === t
                      ? Ie.a.Vote_Negative
                      : Ie.a.Vote_Ready
                    : Ie.a.Vote_NotLoggedIn;
                })(e, n),
                r =
                  (k.c.IN_CLIENT ? "steam://openurl/" : "") +
                  t.GetForumTopicURL(),
                i =
                  0 < t.live_stream_viewer_count
                    ? t.live_stream_viewer_count
                    : void 0;
              return j.createElement(
                "div",
                { className: Ie.a.Footer },
                j.createElement(
                  "div",
                  { className: Ie.a.FooterRightSide },
                  Boolean(i) &&
                    j.createElement(
                      "div",
                      { className: Ie.a.TileViewerCount },
                      i.toLocaleString(G.c.GetPreferredLocales())
                    ),
                  j.createElement(
                    "div",
                    {
                      className: Object(z.a)(Ie.a.FooterStat, Ie.a.Vote, o),
                      onClick: this.OnPerformVoteUp
                    },
                    j.createElement(P.C, { className: Ie.a.RateIcon }),
                    j.createElement("span", null, Number(a).toLocaleString())
                  ),
                  j.createElement(
                    "div",
                    { className: Ie.a.FooterStat },
                    j.createElement(
                      "a",
                      {
                        href: r,
                        className: Ie.a.CommentIconCtn,
                        target: "_blank",
                        onClick: this.OnDiscussionClicked
                      },
                      j.createElement(P.e, { className: Ie.a.CommentIcon }),
                      j.createElement(
                        "span",
                        null,
                        Number(t.nCommentCount).toLocaleString()
                      )
                    )
                  ),
                  j.createElement(Le, Object(D.a)({}, this.props))
                )
              );
            }),
            Object(D.c)([W.a], t.prototype, "OnPerformVoteUp", null),
            Object(D.c)([W.a], t.prototype, "OnDiscussionClicked", null),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        Re = Object(o.observer)(function(t) {
          var e = t.calendarEvent,
            a = Ie.a["EventType" + e.event_type],
            n = Object(z.a)(Ie.a.TileContainer, a);
          return j.createElement(
            oe.a,
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
                  var e = f.a.InitFromClanID(t.calendarEvent.clanInfo.clanid);
                  g.a.LoadOGGClanInfoForClanSteamID(e);
                }
              },
              topOffset: "-500px",
              bottomOffset: "-500px"
            },
            j.createElement(
              "div",
              { className: n },
              j.createElement("div", { className: Ie.a.Tile }),
              j.createElement("div", { className: Ie.a.Footer })
            )
          );
        }),
        Pe = Object(o.observer)(function(e) {
          var t = e.partnerEventStore,
            a = e.calendarEvent,
            n = Object(D.f)(e, ["partnerEventStore", "calendarEvent"]),
            o = t.GetClanEventModel(a.unique_id);
          return o
            ? j.createElement(
                Ne,
                Object(D.a)({ eventModel: o, calendarEvent: a }, n)
              )
            : j.createElement(Re, { calendarEvent: a, partnerEventStore: t });
        }),
        He = a("UWWC"),
        Fe = a("yJqL"),
        ze = a("xnZ7"),
        Ue = a.n(ze),
        We = a("qD+2"),
        Ve = a("JJA/"),
        Ze = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoading: !1, eventModel: e.props.eventModel }),
              (e.m_refParent = j.createRef()),
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
                e.classList.add(Ve.BodyNoScroll);
            }),
            (e.prototype.componentWillUnmount = function() {
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.remove(Ve.BodyNoScroll);
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
                  o = this;
                return Object(D.e)(this, function(e) {
                  return (
                    (t = this.props),
                    (a = t.appid),
                    (n = t.announcementGID),
                    t.partnerEventStore
                      .LoadPartnerEventFromAnnoucementGID(a, n, 0)
                      .then(function(e) {
                        return o.setState(
                          { bLoading: !1, eventModel: e },
                          o.HandleReadEvent
                        );
                      })
                      .catch(function(e) {
                        var t = Object(y.a)(e);
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
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(D.e)(this, function(e) {
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
                  De.g,
                  null,
                  j.createElement(
                    "div",
                    { className: Ue.a.FlexCenter, style: { height: "400px" } },
                    j.createElement(ne.a, null)
                  )
                );
              var e = this.props,
                t = e.classname,
                a = e.partnerEventStore,
                n = e.bPrimaryPageFeature;
              if (this.state.eventModel) {
                var o = j.createElement(
                  "div",
                  null,
                  j.createElement(Fe.a, {
                    location: Fe.b.AppDetails,
                    initialEvent: this.state.eventModel,
                    partnerEventStore: a,
                    emoticonStore: He.b,
                    appInfoStore: We.a,
                    closeFn: !n && this.props.closeModal,
                    showAppHeader: this.props.showAppHeader
                  })
                );
                return n ? o : j.createElement(De.g, { className: t }, o);
              }
              return null;
            }),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        Ye = a("BFsE"),
        Je = "global_header";
      function Qe() {
        var e = document.getElementById(Je);
        if (e && "none" != getComputedStyle(e).display) return e;
        var t = document.getElementsByClassName("responsive_header");
        return (
          Object(h.a)(t.length <= 1, "Must have at most one responsive_header"),
          1 != t.length ? null : t[0]
        );
      }
      function qe() {
        var e = Qe();
        return e && e.id != Je;
      }
      function Xe() {
        return window.innerWidth < parseInt(q.a.strMaxMobileWidth);
      }
      function Ke() {
        return (
          qe() ||
          window.innerWidth <
            parseInt(q.a.strDesktopControlBarWidth) +
              parseInt(q.a.strMaxMobileWidth)
        );
      }
      function $e() {
        var e = qe(),
          t = Xe(),
          a = 0;
        return (
          Qe() &&
            (a = parseInt(
              e
                ? q.a.strMobileGlobalHeaderHeight
                : q.a.strDesktopGlobalHeaderHeight
            )),
          {
            nGlobalHeaderHeight: a,
            nSteamLabsBannerHeight: parseInt(
              e ? q.a.strMobileLabsBannerHeight : q.a.strDesktopLabsBannerHeight
            ),
            nGroupHeaderHeight: parseInt(
              t
                ? q.a.strMobileGroupHeaderHeight
                : q.a.strDesktopGroupHeaderHeight
            )
          }
        );
      }
      var et,
        tt,
        at = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = Object(D.a)(
                {
                  bUserIsLoggedIn: k.i.logged_in,
                  bShowFutureViewOnly: !1,
                  nVisibleHeight: 0,
                  nScrollTop: null,
                  bControlBarIsCollapsed: Ke(),
                  bControlBarWasOpenedByUser: !1,
                  nDisappearingHeaderTop: 0
                },
                $e()
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
            Object(D.d)(e, t),
            ((n = e).prototype.componentDidMount = function() {
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
                this.UpdateDocumentUI();
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("component unmounted"),
                window.removeEventListener("resize", this.OnResize),
                window.removeEventListener("scroll", this.OnScroll);
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
                  o = n && g.a.GetClanInfoByClanAccountID(n);
                e = o && o.group_name;
              }
              var r = e
                ? Object(G.d)("#EventCalendar_TabTitle_GroupHub", e)
                : Object(G.d)("#EventCalendar_TabTitle_Global");
              document.title != r && (document.title = r),
                document.body.classList.contains("events_hub") ||
                  document.body.classList.add("events_hub");
            }),
            (e.prototype.OnResize = function() {
              this.setState(function(e) {
                var t = window.innerHeight,
                  a = !e.bControlBarWasOpenedByUser && Ke(),
                  n = $e();
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
              var r = this,
                i = Math.round(window.scrollY);
              null != this.m_nForcedScrollPosition &&
              Math.abs(this.m_nForcedScrollPosition - i) >
                this.k_nMaxScrollErrorInPixels &&
              this.m_refDiv.current.clientHeight >
                window.innerHeight + this.m_nForcedScrollPosition
                ? window.setTimeout(function() {
                    return window.scrollTo({ top: r.m_nForcedScrollPosition });
                  }, 0)
                : this.setState(function(e) {
                    if (null != r.m_nForcedScrollPosition)
                      return (
                        (r.m_nForcedScrollPosition = null),
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
                        (i > e.nScrollTop && r.state.bControlBarIsCollapsed) ||
                        !!e.modalEvent,
                      a = e.nGlobalHeaderHeight + e.nSteamLabsBannerHeight,
                      n = t ? -1 * a : 0,
                      o = Qe();
                    return (
                      o && (o.style.transform = "translateY(" + n + "px)"),
                      { nScrollTop: i, nDisappearingHeaderTop: n }
                    );
                  });
            }),
            (e.prototype.InitEventCalendarStore = function() {
              var e = n.m_bInitialLoad;
              if (this.state.bUserIsLoggedIn || !this.BRequireLoggedInUser()) {
                v({
                  appids: this.props.filter_to_appids,
                  clanaccountids: this.props.filter_to_clanids,
                  collectionid: this.props.filter_to_collection
                });
                var t = N(),
                  a = Object(k.f)("initialEvents", "application_config");
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
                          f.a.InitFromClanID(t.GetSingleGroupID())
                        ));
              }
              e &&
                E.c.InitializeCheckboxes(
                  this.state.bUserIsLoggedIn && k.i.accountid
                );
            }),
            (e.prototype.ToggleControlBarCollapsed = function() {
              this.setState(function(e) {
                var t = !e.bControlBarIsCollapsed,
                  a = e.bControlBarIsCollapsed,
                  n = t ? e.nDisappearingHeaderTop : 0,
                  o = Qe();
                return (
                  o && (o.style.transform = "translateY(" + n + "px)"),
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
              var e = Qe();
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
                a = Qe();
              if (
                (a && (a.style.transform = "translateY(" + -1 * t + "px)"),
                L.a.bOpenEventLandingPage)
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
                  this.state.nVisibleHeight <= parseInt(q.a.strMinMobileHeight)
                    ? 0
                    : this.state.nDisappearingHeaderTop + e;
              return j.createElement(
                j.Fragment,
                null,
                j.createElement(
                  B.a,
                  null,
                  j.createElement(it, { nTopOffset: a })
                ),
                j.createElement(
                  "div",
                  { ref: this.m_refDiv, className: q.a.EventCalendarContainer },
                  j.createElement(
                    B.a,
                    null,
                    this.state.modalEvent
                      ? j.createElement(Ze, {
                          classname: q.a.StoreHeaderAdjust,
                          appid: this.state.modalEvent.appid,
                          trackingLocation: 0,
                          announcementGID: this.state.modalEvent.GetAnnouncementGID(),
                          partnerEventStore: C.c,
                          eventModel: this.state.modalEvent,
                          showAppHeader: !0,
                          closeModal: this.CloseEventModal
                        })
                      : null
                  ),
                  j.createElement(
                    B.a,
                    null,
                    j.createElement(ae, {
                      bUserIsLoggedIn: this.state.bUserIsLoggedIn,
                      nDisappearingHeaderVisibleHeight: n,
                      nGlobalHeaderTop: t,
                      nVisibleHeight: this.state.nVisibleHeight,
                      bIsCollapsed: this.state.bControlBarIsCollapsed,
                      bShouldIncludeLegalFooter: !qe(),
                      fnToggleCollapsed: this.ToggleControlBarCollapsed,
                      fnOnFilterChange: this.OnControlBarChange
                    })
                  ),
                  Boolean(
                    !this.BRequireLoggedInUser() || this.state.bUserIsLoggedIn
                  )
                    ? j.createElement(
                        B.a,
                        null,
                        j.createElement(st, {
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
                        B.a,
                        null,
                        j.createElement(
                          "div",
                          { className: q.a.LoginPrompt },
                          Object(G.d)("#EventCalendar_MainLoginPrompt"),
                          j.createElement(
                            "button",
                            { onClick: Ye.a, className: q.a.LoginButton },
                            Object(G.d)("#Login_SignIn")
                          )
                        )
                      )
                )
              );
            }),
            (e.m_bInitialLoad = !0),
            Object(D.c)([W.a], e.prototype, "OnResize", null),
            Object(D.c)([W.a], e.prototype, "SetInitialScrollTop", null),
            Object(D.c)([W.a], e.prototype, "ScrollToInitialPosition", null),
            Object(D.c)([W.a], e.prototype, "OnScroll", null),
            Object(D.c)([W.a], e.prototype, "ToggleControlBarCollapsed", null),
            Object(D.c)([W.a], e.prototype, "OnControlBarChange", null),
            Object(D.c)([W.a], e.prototype, "CloseEventModal", null),
            Object(D.c)([W.a], e.prototype, "OnEventClicked", null),
            Object(D.c)([W.a], e.prototype, "ToggleFutureView", null),
            (e = n = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        nt = Object(i.g)(at),
        ot = k.c.STORE_BASE_URL + "labs",
        rt = k.c.COMMUNITY_BASE_URL + "groups/SteamLabs/discussions/11/",
        it = function(e) {
          return j.createElement(
            "div",
            {
              style: { transform: "translateY(" + e.nTopOffset + "px)" },
              className: q.a.SteamLabsBanner
            },
            j.createElement(
              "div",
              { className: q.a.SteamLabsBannerCtn },
              j.createElement(
                "div",
                { className: q.a.SteamLabsIdentifiers },
                j.createElement(
                  "a",
                  {
                    className: q.a.SteamLabsName,
                    href: (k.c.IN_CLIENT ? "steam://openurl/" : "") + ot,
                    target: k.c.IN_CLIENT ? void 0 : "_blank"
                  },
                  Object(G.d)("#SteamLabs")
                ),
                j.createElement(
                  "div",
                  { className: q.a.SteamLabsNumber },
                  Object(G.d)("#SteamLabs_ExperimentNumber", "009")
                )
              ),
              j.createElement(
                "a",
                {
                  className: q.a.SteamLabsButton,
                  href: (k.c.IN_CLIENT ? "steam://openurl/" : "") + rt,
                  target: k.c.IN_CLIENT ? void 0 : "_blank"
                },
                Object(G.d)("#SteamLabs_DiscussionLink")
              )
            )
          );
        },
        st = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.GetCurrentSectionLayout = function() {
              var t =
                this.props.nDisappearingHeaderHeight +
                parseInt(q.a.strEndOfRowsHeight);
              return N()
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
                    parseInt(q.a.strEndOfRowsHeight) -
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
              if (0 == N().GetCalendarSections(S).length) return null;
              var w = Xe(),
                D = O + I,
                A = O + t,
                k = !0,
                n = this.GetCurrentSectionLayout().map(function(e, t) {
                  var a = e.section,
                    n = e.nTopOfSection,
                    o = e.nBottomOfSection,
                    r = a.strId,
                    i = a.strSectionLabel,
                    s = a.rtSectionStart,
                    l = a.rtSectionEnd,
                    c = a.bIsFutureSection,
                    d = a.nRenderedHeight,
                    p = Math.max(0, D - o),
                    u = Math.max(0, n - A),
                    m = E.props.nVisibleHeight > Math.max(p, u),
                    h = n < D,
                    v = o - O - T,
                    _ = h ? Math.min(I, v) : 0,
                    b = o - D < 75,
                    g = L.a.bEnableNewsHubMayUpdate
                      ? Object(z.a)(q.a.PastSection, k && q.a.DarkerBackground)
                      : Object(z.a)(
                          c ? q.a.FutureSection : q.a.PastSection,
                          k && q.a.DarkerBackground
                        );
                  0 < d && (k = !k);
                  var y = L.a.bEnableNewsHubMayUpdate && !S && c;
                  return j.createElement(
                    ct,
                    {
                      key: r,
                      bShouldRenderContents: m,
                      bRenderStickyHeader: h,
                      nExtraHeaderOffset: _,
                      strSectionLabel: i,
                      rtSectionStart: s,
                      rtSectionEnd: l,
                      strSectionClassname: g,
                      bUseHorizontalLayout: y,
                      fnOnSeeFutureClick: C,
                      bIsFutureSection: c && !L.a.bEnableNewsHubMayUpdate,
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
                o =
                  S || L.a.bEnableNewsHubMayUpdate
                    ? null
                    : j.createElement(
                        "div",
                        {
                          key: "no-more-future-events",
                          className: Object(z.a)(
                            q.a.EndOfRows,
                            q.a.CalendarRow,
                            q.a.FutureSection,
                            q.a.Visible
                          )
                        },
                        j.createElement(
                          "div",
                          { className: q.a.NoMoreRows },
                          N().BMayHaveAnyVisibleFutureEvents() &&
                            Object(G.d)("#EventCalendar_NoMoreFutureEvents")
                        )
                      ),
                r = S ? N().BHitForwardHorizon() : N().BHitBackwardHorizon(),
                i = j.createElement(
                  "div",
                  {
                    key: "no-more-events",
                    className: Object(z.a)(
                      q.a.EndOfRows,
                      q.a.CalendarRow,
                      r && q.a.Visible
                    )
                  },
                  j.createElement(
                    "div",
                    { className: q.a.NoMoreRows },
                    " ",
                    Object(G.d)(
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
                  className: Object(z.a)(
                    q.a.RowContainer,
                    a && q.a.WideLeftGutter
                  )
                },
                j.createElement(
                  "div",
                  { className: q.a.Rows },
                  j.createElement("div", {
                    className: Object(z.a)(
                      q.a.DisappearingHeaderSpacer,
                      q.a.FutureSection
                    ),
                    key: "spacer"
                  }),
                  o,
                  n,
                  i
                )
              );
            }),
            Object(D.c)(
              [W.a],
              t.prototype,
              "RecordSectionRenderedHeight",
              null
            ),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        lt = (function(e) {
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
              if (!t || 0 == t.length) return null;
              var o = t[0];
              return j.createElement(
                "div",
                { className: q.a.CalendarRow },
                "TODO: show smaller tiles here. currently available: (" +
                  t.length +
                  ")",
                j.createElement(Pe, {
                  calendarEvent: o,
                  partnerEventStore: C.c,
                  fnOnClicked: a,
                  bSuppressHoverEffects: n
                })
              );
            }),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        ct = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_ref = j.createRef()), (e.bNeedToReportHeight = !1), e;
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
                  N().GetCalendarItemsInTimeRange(
                    Object(r.a)(function() {
                      return e.props.rtSectionStart;
                    }),
                    Object(r.a)(function() {
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
                o = e.strSectionLabel,
                r = e.strSectionClassname,
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
                    className: r
                  },
                  " "
                );
              var m = this.cachedCalendarItems,
                h = m.rgCalendarItems,
                v = m.bIsComplete;
              if (0 == h.length && v)
                return j.createElement("div", {
                  ref: this.m_ref,
                  className: r
                });
              var _ = l && c,
                b = j.createElement(
                  "div",
                  {
                    style: { top: n },
                    className: Object(z.a)(
                      q.a.GroupHeader,
                      q.a.CalendarRow,
                      a && q.a.HeaderAtTop,
                      _ && q.a.FutureHint
                    )
                  },
                  j.createElement(
                    "div",
                    { className: q.a.GroupHeaderTitle },
                    j.createElement(
                      "span",
                      null,
                      " ",
                      _ ? Object(G.d)("#EventCalendar_FutureEventsHint") : o,
                      " "
                    ),
                    i &&
                      j.createElement(
                        "div",
                        { className: q.a.SeeAllLink, onClick: s },
                        Object(G.d)("#EventCalendar_FutureEventsLink"),
                        j.createElement(
                          "span",
                          { className: q.a.SeeAllCount },
                          h.length + (v ? "" : "+")
                        )
                      )
                  )
                ),
                g = i
                  ? j.createElement(lt, {
                      rgCalendarItems: h.slice(0, 3),
                      fnOnEventClick: p,
                      bSuppressHoverEffects: u
                    })
                  : h.map(function(e) {
                      return j.createElement(
                        "div",
                        { key: e.unique_id, className: q.a.CalendarRow },
                        j.createElement(Pe, {
                          calendarEvent: e,
                          partnerEventStore: C.c,
                          fnOnClicked: p,
                          bSuppressHoverEffects: u
                        })
                      );
                    });
              return j.createElement(
                "div",
                { ref: this.m_ref, className: r },
                !l || v
                  ? null
                  : j.createElement(ne.a, {
                      size: "xlarge",
                      position: "center"
                    }),
                b,
                g,
                l || v
                  ? null
                  : j.createElement(ne.a, {
                      size: "xlarge",
                      position: "center"
                    })
              );
            }),
            Object(D.c)([m.computed], e.prototype, "cachedCalendarItems", null),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        dt = a("s4NR"),
        pt = a.n(dt),
        ut = a("AXHe"),
        mt = a("Cs6D"),
        ht = a("3+zv");
      ((tt = et || (et = {}))[(tt.k_ModReviewed = 0)] = "k_ModReviewed"),
        (tt[(tt.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
        (tt[(tt.k_ChangeEventType = 2)] = "k_ChangeEventType"),
        (tt[(tt.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
        (tt[(tt.k_ModReReviewed = 4)] = "k_ModReReviewed");
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
                case et.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case et.k_UpdateSeasonTags:
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
                case et.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case et.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function(e) {
              return (
                (this.m_moderator = k.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = et.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function(e) {
              return (
                (this.m_moderator = k.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? et.k_ModReviewed : et.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function(e) {
              return (
                (this.m_moderator = k.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? et.k_ModReReviewed : et.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function(e) {
              return e.startsWith(vt);
            }),
            (e.prototype.SetUpdateSeasonalTags = function(e) {
              return (
                (this.m_moderator = k.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = et.k_UpdateSeasonTags),
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
              o,
              r,
              i,
              s,
              l,
              c,
              d,
              p,
              u
            ) {
              return (
                void 0 === r && (r = 0),
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
                          this.GetLatestPartnerEvents(o, r, i, s, l, c, d, p, u)
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
              o,
              r,
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
                void 0 === r && (r = 0),
                void 0 === i && (i = 10),
                Object(D.b)(this, void 0, void 0, function() {
                  var t, a, n;
                  return Object(D.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t =
                            k.c.STORE_BASE_URL +
                            "events_admin/ajaxgetlatestpartnerevents"),
                          (a = {
                            page: r,
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
                              cancelToken: o ? o.token : void 0
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
            (e.prototype.UpdateTagsOnPartnerEvent = function(o, r, i, s, l, c) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          k.c.STORE_BASE_URL + "events_admin/ajaxupdatetags"),
                        (a = s.join(",")),
                        c &&
                          (0 < s.length && (a += ","), (a += c.ToModString())),
                        (n = new FormData()).append("sessionid", k.c.SESSIONID),
                        n.append("clan_accountid", "" + r.GetAccountID()),
                        n.append("gid_announcement", i),
                        n.append("add_tags", a),
                        n.append("remove_tags", l.join(",")),
                        [
                          4,
                          _.a.post(t, n, {
                            withCredentials: !0,
                            cancelToken: o.token
                          })
                        ]
                      );
                    case 1:
                      return [2, e.sent().data.tags];
                  }
                });
              });
            }),
            (e.prototype.UpdatePartnerEventType = function(n, o, r, i) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          k.c.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (a = new FormData()).append("sessionid", k.c.SESSIONID),
                        a.append("clan_accountid", "" + o.GetAccountID()),
                        a.append("gid_event", r),
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
            Object(D.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.setState(
                { bInfiniteScrollLoading: !0 },
                this.LoadMoreModerationEvents
              ),
                window.addEventListener("scroll", this.OnScroll, !0);
              var e = pt.a.parse(
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
                  var o = Number.parseInt(e.eventtype);
                  n = [{ label: Object(fe.b)(o), value: o }];
                }
              } else
                e.excludedTags &&
                  ((n = []),
                  e.excludedTags.forEach(function(e) {
                    var t = Number.parseInt(e);
                    n.push({ label: Object(fe.b)(t), value: t });
                  }));
              var r = void 0;
              "string" == typeof e.filterDate &&
                0 < e.filterDate.length &&
                (r = Tt.unix(Number(e.filterDate)));
              var i = !1;
              "string" == typeof e.orderByVisibility &&
                0 < e.orderByVisibility.length &&
                (i = Boolean(e.orderByVisibility)),
                this.setState({
                  selectedTags: t,
                  excludedTags: a,
                  filterEventTypes: n,
                  filterDate: r,
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
                  o = e.filterDate,
                  r = e.bOrderByVisibilityStartTime;
                t || a || n || o || r
                  ? this.props.history.push(
                      "?" +
                        pt.a.stringify({
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
                          filterDate: o && 0 < o.unix() ? "" + o.unix() : null,
                          orderByVisibility: r ? "1" : null
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
                    j.createElement(kt, { solrData: e, key: e.unique_id })
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
                  Object(D.a)(
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
                  Object(D.a)({ selectedTags: e }, wt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventExcludeTags = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(D.a)({ excludedTags: e }, wt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventTypeFilter = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(D.a)({ filterEventTypes: e }, wt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnVisibilityStartTimeChange = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(D.a)(
                    { bOrderByVisibilityStartTime: e.currentTarget.checked },
                    wt
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.render = function() {
              var e = this.RenderTiles(),
                t = U.c.map(function(e) {
                  return { value: e, label: Object(fe.b)(e) };
                }),
                a = ht.a.map(function(e) {
                  return { value: e, label: e };
                }),
                n = {
                  option: function(e) {
                    return Object(D.a)(Object(D.a)({}, e), {
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
                    Object(G.d)("#EventModeration_Title")
                  ),
                  j.createElement(
                    B.a,
                    null,
                    j.createElement(
                      "div",
                      { className: Object(z.a)(ft.a.FlexRowContainer) },
                      j.createElement(
                        "div",
                        { className: Ot.FilterContainer },
                        j.createElement(
                          "span",
                          null,
                          Object(G.d)("#EventModeration_FilterByTag")
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
                          Object(G.d)("#EventModeration_FilterExcludeByTag")
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
                          Object(G.d)("#EventModeration_FilterToType")
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
                          Object(G.d)("#EventModeration_FilterToDate")
                        ),
                        j.createElement(ut, {
                          onChange: this.OnDateChange,
                          timeFormat: !1,
                          value: this.state.filterDate,
                          isValidDate: this.IsValidDate,
                          inputProps: {
                            placeholder: Object(G.d)(
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
                          Object(G.d)("#EventModeration_PerPageLoad")
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
                          Object(G.d)("#EventModeration_OrderByFirstVisible")
                        )
                      )
                    )
                  )
                ),
                j.createElement(B.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  j.createElement(ne.a, {
                    position: "center",
                    size: "medium",
                    string: Object(G.d)("#Loading")
                  })
              );
            }),
            Object(D.c)([W.a], e.prototype, "HandleError", null),
            Object(D.c)(
              [W.a],
              e.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(D.c)([W.a], e.prototype, "LoadMoreModerationEvents", null),
            Object(D.c)(
              [W.a],
              e.prototype,
              "UpdateQueryParametersAndLoadMoreEvents",
              null
            ),
            Object(D.c)([W.a], e.prototype, "OnScroll", null),
            Object(D.c)([W.a], e.prototype, "OnDateChange", null),
            Object(D.c)([W.a], e.prototype, "IsValidDate", null),
            Object(D.c)([W.a], e.prototype, "OnEventPerPageLoad", null),
            Object(D.c)([W.a], e.prototype, "OnChangeEventSelectedTags", null),
            Object(D.c)([W.a], e.prototype, "OnChangeEventExcludeTags", null),
            Object(D.c)([W.a], e.prototype, "OnChangeEventTypeFilter", null),
            Object(D.c)(
              [W.a],
              e.prototype,
              "OnVisibilityStartTimeChange",
              null
            ),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        At = Object(i.g)(Dt),
        kt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingEvent: !C.c.BHasClanEventModel(
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
              if (!C.c.BHasClanEventModel(t)) {
                var n = Date.now() / 1e3;
                C.c
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new f.a(e.clan_steamid),
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
                C.c.BHasClanEventModel(e) &&
                this.setState({ bShowAsModal: !0 });
            }),
            (e.prototype.HideModalEvent = function() {
              this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
            }),
            (e.prototype.OnModeratedChanged = function(e) {
              if (!this.state.bSavingModeration) {
                var t = this.props.solrData.unique_id,
                  a = C.c.GetClanEventModel(t),
                  n = e.target.checked,
                  o =
                    !a.BHasTag("mod_reviewed") ||
                    a.BHasTag("mod_require_rereview");
                a &&
                  n === o &&
                  this.setState(
                    { bSavingModeration: !0 },
                    this.ApplyModerationToggle
                  );
              }
            }),
            (e.prototype.ApplyModerationToggle = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n, o, r, i, s, l, c, d;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props.solrData),
                        (a = t.unique_id),
                        (n = C.c.GetClanEventModel(a)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (o = new Array()),
                        (r = new Array()),
                        (i =
                          n.BHasTag("mod_reviewed") &&
                          !n.BHasTag("mod_require_rereview")),
                        (s = new _t().SetReviewAction(!i)),
                        i
                          ? o.push("mod_require_rereview")
                          : (o.push("mod_reviewed"),
                            r.push("mod_require_rereview"),
                            n.BHasTag("mod_require_rereview") &&
                              s.SetReReviewAction(!i)),
                        [
                          4,
                          bt.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.AnnouncementGID,
                            o,
                            r,
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
                a = C.c.GetClanEventModel(t.unique_id);
              Object(we.d)(
                j.createElement(Bt, { eventModel: a }),
                Object(Ae.m)(e)
              );
            }),
            (e.prototype.OnUpdateSeasonalTag = function(e) {
              var t = this.props.solrData,
                a = C.c.GetClanEventModel(t.unique_id);
              Object(we.d)(
                j.createElement(Rt, { eventModel: a }),
                Object(Ae.m)(e)
              );
            }),
            (e.prototype.render = function() {
              var e,
                t = this.props.solrData,
                a = t.unique_id,
                n = Number(t.appid),
                o = Object(U.e)(k.c.LANGUAGE),
                r = C.c.GetClanEventModel(a);
              if (r) {
                if (this.state.bShowAsModal)
                  return j.createElement(
                    De.g,
                    { className: It.StoreHeaderAdjust },
                    j.createElement(
                      "div",
                      null,
                      j.createElement(yt.a, {
                        event: r,
                        fnClose: this.HideModalEvent
                      })
                    )
                  );
                var i = r.GetImageForSizeAsArrayWithFallback(
                    "capsule",
                    o,
                    ue.c.capsule_main
                  ),
                  s = r.BImageNeedScreenshotFallback("capsule", o);
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
                            Object(G.d)("#EventModTile_FallbackImageText")
                          )
                      )
                    : j.createElement(
                        "div",
                        { className: Ot.NoCapsule },
                        Object(G.d)("#EventModTile_NoCapsule")
                      );
              } else e = Object(G.d)("#Loading");
              var l = t.hidden
                  ? t.published
                    ? Object(G.d)("#EVentModTile_State_Staged")
                    : Object(G.d)("#EVentModTile_State_Draft")
                  : Object(G.d)("#EVentModTile_State_Published"),
                c = r ? r.type : Number(t.event_type);
              return j.createElement(
                B.a,
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
                            (k.c.IN_CLIENT ? "steam://openurl/" : "") +
                            k.c.COMMUNITY_BASE_URL +
                            "ogg/" +
                            n +
                            "/announcements/detail/" +
                            t.announcement_gid,
                          target: k.c.IN_CLIENT ? void 0 : "_blank",
                          className: Ot.EventTitle
                        },
                        t.event_name
                      ),
                      j.createElement(
                        "div",
                        {
                          className: Object(z.a)(
                            1 == c ? Ot.TileEventOtherType : ""
                          )
                        },
                        r ? r.GetCategoryAsString() : t.event_type
                      ),
                      this.state.bLoadingEvent &&
                        j.createElement(ne.a, {
                          size: "small",
                          string: Object(G.d)("#Loading")
                        }),
                      j.createElement(Gt, {
                        accountID: Number(t.creator_accountid),
                        locToken: "#EventModTile_Author"
                      }),
                      Boolean(
                        t.updator_accountid &&
                          0 < Number(t.updator_accountid) &&
                          t.updator_accountid != t.creator_accountid
                      ) &&
                        j.createElement(Gt, {
                          accountID: Number(t.updator_accountid),
                          locToken: "#EventModTile_Updator"
                        }),
                      j.createElement(Nt, {
                        appid: n,
                        clanSteamID: new f.a(t.clan_steamid)
                      })
                    ),
                    r &&
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
                              id: r.GID + "_moderated",
                              checked: Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ),
                              onChange: this.OnModeratedChanged
                            }),
                            j.createElement(
                              "label",
                              { htmlFor: r.GID + "_moderated" },
                              this.state.bSavingModeration &&
                                j.createElement(ne.a, { size: "small" }),
                              Boolean(!r.BHasTag("mod_reviewed")) &&
                                Object(G.d)("#EventModTile_Moderated_Review"),
                              Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ) && Object(G.d)("#EventModTile_Moderated"),
                              Boolean(r.BHasTag("mod_require_rereview")) &&
                                Object(G.d)("#EventModTile_Moderated_ReReview")
                            )
                          ),
                          j.createElement(
                            "button",
                            {
                              className: Object(z.a)(ft.a.Button, Ot.Button),
                              onClick: this.OnChangeCategory
                            },
                            Object(G.d)("#EventModTile_ChangeEventType")
                          ),
                          r.BHasTag("halloween2019candidate") &&
                            j.createElement(
                              "button",
                              {
                                className: Object(z.a)(ft.a.Button),
                                onClick: this.OnUpdateSeasonalTag
                              },
                              Object(G.d)("#EventModTile_SeasonalTag")
                            ),
                          j.createElement(xt, { eventModel: r })
                        ),
                        j.createElement(
                          "div",
                          { className: Ot.DetailsRight },
                          j.createElement(Et.b, {
                            event: r,
                            stylesmodule: Ot,
                            nOverrideEndTime: r.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: r.GetStartTimeAndDateUnixSeconds()
                          }),
                          j.createElement(Lt, { event: r }),
                          j.createElement(Mt, { event: r })
                        )
                      )
                  )
                )
              );
            }),
            Object(D.c)([W.a], e.prototype, "ShowModalEvent", null),
            Object(D.c)([W.a], e.prototype, "HideModalEvent", null),
            Object(D.c)([W.a], e.prototype, "OnModeratedChanged", null),
            Object(D.c)([W.a], e.prototype, "ApplyModerationToggle", null),
            Object(D.c)([W.a], e.prototype, "OnChangeCategory", null),
            Object(D.c)([W.a], e.prototype, "OnUpdateSeasonalTag", null),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component);
      function jt(e) {
        return f.a.InitFromAccountID(e).ConvertTo64BitString();
      }
      var Gt = (function(t) {
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
                o =
                  (k.c.IN_CLIENT ? "steam://openurl/" : "") +
                  "https://steamsupport.valvesoftware.com/account/overview/" +
                  jt(this.props.accountID);
              return j.createElement(
                "div",
                null,
                Object(G.j)(
                  a,
                  j.createElement(
                    "a",
                    { href: o, target: k.c.IN_CLIENT ? void 0 : "_blank" },
                    Boolean(n)
                      ? j.createElement(j.Fragment, null, n.persona_name)
                      : j.createElement(
                          j.Fragment,
                          null,
                          this.state.bLoadingProfile &&
                            j.createElement(ne.a, { size: "small" }),
                          j.createElement("span", null, t)
                        )
                  )
                )
              );
            }),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        Lt = (function(t) {
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
              C.c
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
                o = Math.max(
                  this.CountLanguages(
                    e.jsondata.localized_broadcast_left_image
                  ),
                  this.CountLanguages(
                    e.jsondata.localized_broadcast_right_image
                  )
                ),
                r = t + a + n + o,
                i = this.CountLanguages(e.jsondata.localized_summary),
                s = this.CountLanguages(e.jsondata.localized_subtitle);
              return j.createElement(
                "div",
                { className: Ot.AnalysisCtn },
                j.createElement(
                  "div",
                  { className: Ot.TileTitle },
                  Object(G.d)("#EventModTile_Analysis")
                ),
                j.createElement(
                  "div",
                  null,
                  Object(G.d)("#EventModTile_Stats_Comments", e.nCommentCount)
                ),
                j.createElement(
                  "div",
                  null,
                  Object(G.d)("#EventModTile_Stats_VoteUp", e.nVotesUp)
                ),
                j.createElement(
                  "div",
                  null,
                  Object(G.d)("#EventModTile_Stats_VoteDown", e.nVotesDown)
                ),
                Boolean(t) &&
                  j.createElement(
                    "div",
                    { className: Ot.ArtHeader },
                    Object(G.d)("#EventModTile_ImageAnalysis_Header", t),
                    " "
                  ),
                Boolean(a) &&
                  j.createElement(
                    "div",
                    null,
                    Object(G.d)("#EventModTile_ImageAnalysis_Capsule", a),
                    " "
                  ),
                Boolean(n) &&
                  j.createElement(
                    "div",
                    { className: Ot.ArtSpotlight },
                    Object(G.d)("#EventModTile_ImageAnalysis_Spotlight", n),
                    " "
                  ),
                Boolean(o) &&
                  j.createElement(
                    "div",
                    null,
                    Object(G.d)("#EventModTile_ImageAnalysis_Broadcast", o),
                    " "
                  ),
                0 == r &&
                  j.createElement(
                    "div",
                    { className: Ot.AnalysisMissing },
                    Object(G.d)("#EventModTile_ImageAnalysis_None"),
                    " "
                  ),
                0 == this.state.nLocLanguages &&
                  j.createElement(ne.a, {
                    size: "small",
                    string: Object(G.d)("#EventModTile_LoadingLocs")
                  }),
                0 < this.state.nLocLanguages &&
                  j.createElement(
                    "div",
                    null,
                    Object(G.d)(
                      "#EventModTile_Languages",
                      this.state.nLocLanguages
                    )
                  ),
                Boolean(i) &&
                  j.createElement(
                    "div",
                    null,
                    Object(G.d)("#EventModTile_Languages_Summary", i),
                    " "
                  ),
                Boolean(s) &&
                  j.createElement(
                    "div",
                    null,
                    Object(G.d)("#EventModTile_Languages_Subtitle", s),
                    " "
                  )
              );
            }),
            (e = Object(D.c)([o.observer], e))
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
                return j.createElement(ne.a, {
                  size: "small",
                  string: Object(G.d)("#EventModTile_AppInfoLoading")
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
                      F.a,
                      { href: n.capsule_link },
                      j.createElement("img", {
                        className: Ot.TileAppInfoImage,
                        src: n.capsule
                      }),
                      j.createElement(
                        "div",
                        null,
                        Object(G.d)("#EventModTile_GameName", n.title)
                      )
                    )
                  ),
                  j.createElement(
                    "div",
                    null,
                    Object(G.d)("#EventModTile_ReleaseDate", n.release)
                  )
                );
              }
              if (a) {
                var o = a.GetAccountID(),
                  r = g.a.GetClanInfoByClanAccountID(o);
                if (r && r.is_curator)
                  return j.createElement(
                    "div",
                    { className: Ot.TileAppInfo },
                    j.createElement(
                      "div",
                      { className: Ot.TileAppInfoTitle },
                      j.createElement(
                        F.a,
                        { href: k.c.STORE_BASE_URL + "/curator/" + o + "/" },
                        j.createElement("img", {
                          className: Ot.TileAppInfoImage,
                          src: r.avatar_full_url
                        }),
                        j.createElement(
                          "div",
                          null,
                          Object(G.d)("#EventModTile_CuratorName", r.group_name)
                        )
                      )
                    )
                  );
              }
              return null;
            }),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        Mt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.render = function() {
              var e = this.props.event,
                t = Object(ht.d)(e),
                a = Object(ht.c)(e),
                n = Object(ht.e)(e),
                o =
                  n && !e.BHasTag("hide_store") && !e.BHasTag("mod_hide_store"),
                r =
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
                  Object(G.d)("#EventModTile_Visibility")
                ),
                j.createElement(
                  "div",
                  null,
                  Object(G.d)(
                    "#EventModTile_Store_Visibility",
                    o
                      ? Object(G.d)("#WriteReview_Dialog_Yes")
                      : Object(G.d)("#WriteReview_Dialog_No"),
                    o
                      ? ""
                      : n
                      ? Object(G.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_store")
                      ? Object(G.d)("#EventModTime_Hidden_OptOut")
                      : Object(G.d)("#EventModTime_Hidden_Moderator")
                  )
                ),
                j.createElement(
                  "div",
                  null,
                  Object(G.d)(
                    "#EventModTile_LibraryHome_Visibility",
                    r
                      ? Object(G.d)("#WriteReview_Dialog_Yes")
                      : Object(G.d)("#WriteReview_Dialog_No"),
                    r
                      ? ""
                      : n
                      ? Object(G.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_overview")
                      ? Object(G.d)("#EventModTime_Hidden_OptOut")
                      : Object(G.d)("#EventModTime_Hidden_Moderator")
                  )
                ),
                j.createElement(
                  "div",
                  null,
                  Object(G.d)(
                    "#EventModTile_LibraryDetail_Visibility",
                    i
                      ? Object(G.d)("#WriteReview_Dialog_Yes")
                      : Object(G.d)("#WriteReview_Dialog_No"),
                    i
                      ? ""
                      : n
                      ? Object(G.d)(
                          "#EventModTime_Hidden_EventType",
                          e.GetEventTypeAsString()
                        )
                      : e.BHasTag("hide_library_detail")
                      ? Object(G.d)("#EventModTime_Hidden_OptOut")
                      : Object(G.d)("#EventModTime_Hidden_Moderator")
                  )
                )
              );
            }),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        Bt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                newCategoryOption: {
                  label: Object(fe.b)(34),
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
                var t, a, n, o, r, i, s, l, c, d;
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
                        (o = this.state.newCategoryOption),
                        (r = o.value.eventType),
                        [
                          4,
                          bt.UpdatePartnerEventType(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.GID,
                            r
                          )
                        ]
                      );
                    case 2:
                      return (
                        e.sent(),
                        (i = ht.m),
                        (s = []),
                        o.value.tags &&
                          o.value.tags.forEach(function(e) {
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
                            new _t().SetActionChangeEvent(r)
                          )
                        ]
                      );
                    case 3:
                      return (
                        (l = e.sent()),
                        Object(m.runInAction)(function() {
                          (a.type = r), (a.vecTags = l);
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
                o = U.c
                  .filter(function(e) {
                    return 1 == e || 4 == e || 9 <= e;
                  })
                  .map(function(e) {
                    var t = { eventType: e };
                    return (
                      12 == e && (t.tags = ["patchnotes"]),
                      { label: Object(fe.b)(e), value: t }
                    );
                  });
              return (
                o.push({
                  label: Object(G.d)("#PartnerEvent_Curator_Group_Members"),
                  value: {
                    eventType: 28,
                    tags: ["curator", "curator_group_members"]
                  }
                }),
                o.push({
                  label: Object(G.d)("#PartnerEvent_Curator_Public"),
                  value: { eventType: 28, tags: ["curator", "curator_public"] }
                }),
                j.createElement(
                  De.b,
                  {
                    strTitle: Object(G.d)("#EventModTile_ChangeEventType"),
                    strDescription: Object(G.d)(
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
                        j.createElement(ne.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        j.createElement(
                          "div",
                          null,
                          Object(G.d)("#Chat_Settings_Error_ServerError"),
                          j.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      j.createElement(mt.a, {
                        isSearchable: !0,
                        onChange: this.OnChangeSelection,
                        value: this.state.newCategoryOption,
                        options: o
                      })
                    )
                  )
                )
              );
            }),
            Object(D.c)([W.a], e.prototype, "ChangeCategoryForEvent", null),
            Object(D.c)([W.a], e.prototype, "OnChangeSelection", null),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        xt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bCollapsed: !0 }), e;
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.RenderModAction = function(e) {
              var t = Object(G.h)(e.m_rtWhen),
                a = j.createElement(Gt, {
                  locToken: "#EventModTile_Moderator",
                  accountID: e.m_moderator
                });
              switch (e.m_action) {
                case et.k_ModReviewed:
                  return j.createElement(
                    "div",
                    { className: Ot.ModeratorAuditActionCtn },
                    Object(G.j)(
                      "#EventModTile_Action_Reviewed",
                      j.createElement("span", null, t),
                      a
                    )
                  );
                case et.k_ModUnreviewed:
                  return j.createElement(
                    "div",
                    { className: Ot.ModeratorAuditActionCtn },
                    Object(G.j)(
                      "#EventModTile_Action_UnReviewed",
                      j.createElement("span", null, t),
                      a
                    )
                  );
                case et.k_ChangeEventType:
                  return j.createElement(
                    "div",
                    { className: Ot.ModeratorAuditActionCtn },
                    Object(G.j)(
                      "#EventModTile_Action_NewEventType",
                      j.createElement("span", null, t),
                      a,
                      Object(fe.b)(e.m_newEventType)
                    )
                  );
                case et.k_UpdateSeasonTags:
                  return j.createElement(
                    "div",
                    { className: Ot.ModeratorAuditActionCtn },
                    Object(G.j)(
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
                o = this.props.eventModel;
              return (
                e.forEach(function(e) {
                  var t = new _t();
                  t.FromString(e),
                    n.push(
                      j.createElement(
                        "div",
                        { key: o.GID + e },
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
              var o = this.RenderAudit(t);
              return j.createElement(
                "div",
                null,
                j.createElement(
                  "h4",
                  null,
                  Object(G.d)("#EventModTile_Action_Title")
                ),
                o,
                n &&
                  j.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !1 });
                      }
                    },
                    Object(G.d)("#EventModTile_Action_More", a - 3)
                  ),
                Boolean(!n && 3 < a) &&
                  j.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !0 });
                      }
                    },
                    Object(G.d)("#EventModTile_Action_Hide")
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
                var t, a, n, o, r, i;
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
                        (o = e.sent()),
                        (n.vecTags = o),
                        this.props.closeModal(),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (r = e.sent()),
                        (i = Object(y.a)(r)),
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
                De.b,
                {
                  strTitle: Object(G.d)("#EventModTile_SeasonalTag"),
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
                      Object(G.d)("#EventModTile_SeasonalTag_Desc")
                    ),
                    j.createElement(
                      "div",
                      null,
                      Object(G.d)("#EventModTile_SeasonalTag_Desc_Secondary")
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
                      j.createElement(ne.a, { size: "small" }),
                    this.state.strErrorMsg &&
                      j.createElement(
                        "div",
                        null,
                        Object(G.d)("#Chat_Settings_Error_ServerError"),
                        j.createElement("br", null),
                        this.state.strErrorMsg
                      )
                  )
                )
              );
            }),
            Object(D.c)([W.a], e.prototype, "ChangeAcceptance", null),
            Object(D.c)([W.a], e.prototype, "ChangeHorror", null),
            Object(D.c)([W.a], e.prototype, "ChangeCute", null),
            Object(D.c)([W.a], e.prototype, "ApplyAction", null),
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
                    var t = Object(y.a)(e);
                    console.error(
                      "EventBackfillLanding: error " + t.strErrorMsg,
                      t
                    ),
                      a.setState({ eBackfillState: "error" });
                  });
            }),
            (e.prototype.GetImageInfo = function(n, o, r) {
              return (
                void 0 === r && (r = ""),
                Object(D.b)(this, void 0, void 0, function() {
                  var t, a;
                  return Object(D.e)(this, function(e) {
                    return (
                      (t = ue.a.GetExtensionTypeFromURL(o)),
                      (a = ue.a.GetHashFromHashAndExt(o) + r),
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
              var o = Object(y.a)(t),
                r =
                  "EventBackfillLanding: " +
                  a +
                  " on GID " +
                  e +
                  " : " +
                  o.strErrorMsg;
              console.error(r, o),
                n
                  ? ((n.bFailed = !0),
                    (n.strMessage = r),
                    Pt.CloseProgress(e, n))
                  : Pt.CompleteBackfill("resize_image");
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
                        var a, n, o, r, i, s, l;
                        return Object(D.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return p[t] && 0 < p[t].length
                                ? ((a = p[t]),
                                  (n = ue.a.GetExtensionTypeFromURL(a)),
                                  (o = new f.a(u.clan_steamid)),
                                  n
                                    ? [
                                        4,
                                        c.GetImageInfo(o, a).catch(function(e) {
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
                              return 1 == (r = e.sent()).success &&
                                Object(ht.h)(r.width, r.height, h)
                                ? [
                                    4,
                                    c.GetImageInfo(o, a, v).catch(function(e) {
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
                                (s = ue.a.GetExtensionStringFromHashAndExt(a)),
                                (l = ue.d.GetResizeDimension(h)),
                                [
                                  4,
                                  ue.b
                                    .SendResizeRequest(
                                      c.m_cancelSignal,
                                      o,
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
                          var a, n, o, r;
                          return Object(D.e)(this, function(e) {
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
                                        C.c
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
                                    : (o = C.c.GetClanEventFromAnnouncementGID(
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
                                            o.appid +
                                            " Event " +
                                            o.GID +
                                            " Title: " +
                                            o.GetNameWithFallback(0)
                                        }),
                                        o.jsondata &&
                                        o.jsondata.localized_capsule_image
                                          ? ((r =
                                              o.jsondata
                                                .localized_capsule_image),
                                            [
                                              4,
                                              s
                                                .HandleResizeForImageType(
                                                  r,
                                                  a,
                                                  n,
                                                  "capsule",
                                                  ue.c.capsule_main
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
                                return o.jsondata &&
                                  o.jsondata.localized_title_image
                                  ? ((r = o.jsondata.localized_title_image),
                                    [
                                      4,
                                      s
                                        .HandleResizeForImageType(
                                          r,
                                          a,
                                          n,
                                          "background",
                                          ue.c.background_mini
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
                                return o.jsondata &&
                                  o.jsondata.localized_spotlight_image
                                  ? ((r = o.jsondata.localized_spotlight_image),
                                    [
                                      4,
                                      s
                                        .HandleResizeForImageType(
                                          r,
                                          a,
                                          n,
                                          "spotlight",
                                          ue.c.spotlight_main
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
                      var a = C.c.GetClanEventModel(e);
                      a &&
                        n.push(
                          j.createElement(
                            "div",
                            { key: e },
                            j.createElement(
                              Ce.c,
                              {
                                eventModel: a,
                                route: Ce.a.k_eView,
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
                  j.createElement(ne.a, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress"
                  })
              );
            }),
            Object(D.c)([W.a], e.prototype, "OnArtworkResizeBackfill", null),
            Object(D.c)([W.a], e.prototype, "BeginArtworkResize", null),
            (e = Object(D.c)([o.observer], e))
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
            (e.prototype.GetDiscounts = function(r) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n, o;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        e.trys.push([0, 3, , 4]),
                        (t = "discount"),
                        (t += r.tagid ? "_tag" + r.tagid : ""),
                        (t += r.categoryid ? "_categoryid" + r.categoryid : ""),
                        (t += r.top_n_sellers ? "_ntop" + r.top_n_sellers : ""),
                        (t += r.max_results ? "_max" + r.max_results : ""),
                        (t += r.random_across_set ? "_rand" : ""),
                        (a = Object(k.f)(t, "application_config"))
                          ? [3, 2]
                          : [
                              4,
                              _.a.get(
                                k.c.STORE_BASE_URL + "actions/ajaxgetdiscounts",
                                {
                                  params: Object(D.a)(Object(D.a)({}, r), {
                                    cc: k.c.COUNTRY
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
                        (o = e.sent()), console.error(Object(y.a)(o)), [3, 4]
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
                        : ((this.m_rgTopN = Object(k.f)(
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
              return Object(D.b)(this, void 0, void 0, function() {
                var t;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyWishlistOnSale
                        ? [3, 2]
                        : ((this.m_rgMyWishlistOnSale = Object(k.f)(
                            "wishlist_onsale",
                            "application_config"
                          )),
                          this.m_rgMyWishlistOnSale
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  k.c.STORE_BASE_URL +
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
                        : ((this.m_rgMyDLCForGamesInLibraryOnSale = Object(k.f)(
                            "dlc_onsale",
                            "application_config"
                          )),
                          this.m_rgMyDLCForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  k.c.STORE_BASE_URL +
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
                            k.f
                          )("dlc_music_onsale", "application_config")),
                          this.m_rgMySoundtracksForGamesInLibraryOnSale
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  k.c.STORE_BASE_URL +
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
                        : ((this.m_rgMyInteractiveRecOnSale = Object(k.f)(
                            "ir_onsale",
                            "application_config"
                          )),
                          this.m_rgMyInteractiveRecOnSale
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  k.c.STORE_BASE_URL +
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
                        : ((this.m_rgMySaleTags = Object(k.f)(
                            "saletags",
                            "application_config"
                          )),
                          this.m_rgMySaleTags
                            ? [3, 2]
                            : [
                                4,
                                _.a.get(
                                  k.c.STORE_BASE_URL +
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
                var t = Object(k.f)("points", "application_config");
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
                        this.m_bLoaded || !k.i.logged_in
                          ? [3, 2]
                          : ((t =
                              k.c.STORE_BASE_URL +
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
                (e.m_userData = Object(k.f)("doorinfo", "application_config")),
                  (e.m_salePageBackgroundOverride = Object(k.f)(
                    "doorinfobackground",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundWEBM = Object(k.f)(
                    "doorinfowebm",
                    "application_config"
                  )),
                  (e.m_salePageBackgroundMP4 = Object(k.f)(
                    "doorinfomp4",
                    "application_config"
                  )),
                  (e.m_storyImages = Object(k.f)(
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
                      (t = k.c.STORE_BASE_URL + "saleaction/ajaxgetopendoor"),
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
              k.i.logged_in &&
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
                  o,
                  r = this;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !k.i.logged_in ||
                        !this.m_userData ||
                        i > this.m_userData.length
                      )
                        return [2, null];
                      (t = k.c.STORE_BASE_URL + "saleaction/ajaxopendoor"),
                        (a = new FormData()).append("sessionid", k.c.SESSIONID),
                        a.append("authwgtoken", k.i.authwgtoken),
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
                              ((r.m_userData[i].opened = s),
                              (r.m_salePageBackgroundOverride =
                                n.data.sale_pg_background_override),
                              (r.m_salePageBackgroundMP4 =
                                n.data.sale_pg_background_mp4),
                              (r.m_salePageBackgroundWEBM =
                                n.data.sale_pg_background_webm),
                              (r.m_storyImages[i] = n.data.story_image),
                              (r.m_strLastDoorOpenKey =
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
                        (o = e.sent()), console.error(Object(y.a)(o)), [3, 4]
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
            return Object(D.b)(this, void 0, void 0, function() {
              var t, a, n, o, r;
              return Object(D.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return null != this.m_rgRecentEvent
                      ? [3, 5]
                      : ((t = Object(k.f)(
                          "recent_events",
                          "application_config"
                        )),
                        this.ValidateStoreDefault(t)
                          ? (this.AddAllRecentEvents(t), [3, 5])
                          : [3, 1]);
                  case 1:
                    (this.m_rgRecentEvent = new Array()),
                      (a = {
                        cc: k.c.COUNTRY || "US",
                        l: k.c.LANGUAGE,
                        clan_account_id: i.clanSteamID.GetAccountID(),
                        clan_event_gid: i.GID
                      }),
                      (n =
                        k.c.STORE_BASE_URL + "saleaction/ajaxrecentsaleevents"),
                      (e.label = 2);
                  case 2:
                    return (
                      e.trys.push([2, 4, , 5]),
                      [4, _.a.get(n, { params: a, withCredentials: !0 })]
                    );
                  case 3:
                    return (
                      1 == (o = e.sent()).data.success &&
                        (this.AddAllRecentEvents(o.data.recent_events),
                        C.c.RegisterClanEvents(o.data.partnerevents)),
                      [3, 5]
                    );
                  case 4:
                    return (
                      (r = e.sent()),
                      console.error(
                        "GetRecentEventsForSalesPage failed",
                        Object(y.a)(r)
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
      window.g_EventListSaleStore = Yt;
      var Jt = new ((function() {
          function e() {
            (this.m_saleExp = {}), (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              if (!this.m_bLoadedFromConfig) {
                var e = document.getElementById("application_config");
                e && (this.m_saleExp = Object(k.f)("xprmnt", e)),
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
        Qt = (function() {
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
                e = Object(k.f)("subscriptionsapps", "application_config");
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
            (e.prototype.LoadSubscriptionInfo = function(o) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t,
                  a,
                  n = this;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_mapMasterAppToBenefitApps.has(o)
                        ? [2, !0]
                        : [
                            4,
                            _.a.get(
                              k.c.STORE_BASE_URL +
                                "actions/ajaxresolvesubscriptions",
                              {
                                params: {
                                  master_app_id: o,
                                  cc: k.c.COUNTRY,
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
        qt = a("Dl0Y"),
        Xt = (a("a6qw"), a("SS32")),
        Kt = a("exzL"),
        $t = a.n(Kt),
        ea = a("Xkb6"),
        ta = a.n(ea),
        aa = a("2TyT"),
        na = a.n(aa),
        oa = a("dgee"),
        ra = a.n(oa),
        ia = a("JtYz"),
        sa = a.n(ia),
        la = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                currentSlide: 0,
                animatingTo: -1,
                prevDown: !1,
                nextDown: !1
              }),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.GetNumElements = function() {
              return j.Children.count(this.props.children);
            }),
            (e.prototype.AdjustSelection = function(e) {
              var t = this.GetCurrentSlide() + e,
                a = this.GetNumElements() - 1;
              a < t && (t = this.props.disableEdgeWrap ? a : 0),
                t < 0 && (t = this.props.disableEdgeWrap ? 0 : a),
                this.GoToElement(t);
            }),
            (e.prototype.GetPageSize = function() {
              return Math.min(
                this.GetNumElements(),
                this.props.visibleElements
              );
            }),
            (e.prototype.NextPage = function() {
              this.AdjustSelection(this.GetPageSize());
            }),
            (e.prototype.PrevPage = function() {
              this.AdjustSelection(-this.GetPageSize());
            }),
            (e.prototype.PrevUp = function() {
              this.setState({ prevDown: !1 });
            }),
            (e.prototype.PrevDown = function() {
              this.setState({ prevDown: !0 });
            }),
            (e.prototype.NextUp = function() {
              this.setState({ nextDown: !1 });
            }),
            (e.prototype.NextDown = function() {
              this.setState({ nextDown: !0 });
            }),
            (e.prototype.GoToElement = function(e) {
              var t = Math.floor(this.GetDisplayOffset(e, this.GetPageSize()));
              this.setState({ currentSlide: e, animatingTo: t });
            }),
            (e.prototype.UpdateCurrentSlide = function(e) {
              var t = this.GetCurrentSlide(),
                a = Math.floor(e);
              0 <= this.state.animatingTo
                ? a === this.state.animatingTo &&
                  this.setState({ animatingTo: -1 })
                : t !== a &&
                  (console.log("Updated to", t, a),
                  this.setState({ currentSlide: a }));
            }),
            (e.prototype.GetCurrentSlide = function() {
              return Math.min(
                this.state.currentSlide,
                Math.max(0, this.GetNumElements() - 1)
              );
            }),
            (e.prototype.GetElementPage = function(e, t) {
              return (
                e > this.GetNumElements() - t &&
                  (e = this.GetNumElements() - 1),
                Math.floor(e / t)
              );
            }),
            (e.prototype.RenderBreadcrumbs = function(n) {
              var o = this,
                e = this.GetCurrentSlide(),
                r = this.GetElementPage(e, n);
              return j.Children.map(this.props.children, function(e, t) {
                if (t % n != 0) return null;
                var a = o.GetElementPage(t, n);
                return j.createElement("img", {
                  src: a === r ? ra.a : sa.a,
                  onClick: function() {
                    return o.GoToElement(t);
                  },
                  className: Xt.pip
                });
              });
            }),
            (e.prototype.GetDisplayOffset = function(e, t) {
              var a = (t - 1) / 2,
                n = this.GetNumElements() - 1 - a,
                o = this.GetElementPage(e, t);
              return Math.min(a + o * t, n);
            }),
            (e.prototype.render = function() {
              var e = this.GetNumElements(),
                t = this.GetPageSize();
              if (!e || !t) return null;
              var a = this.GetCurrentSlide(),
                n = t < this.GetNumElements(),
                o = this.props.hideArrows || !n,
                r = this.GetDisplayOffset(a, t),
                i = this.props.disableEdgeWrap && a < t ? ta.a : $t.a;
              this.state.prevDown && (i = na.a);
              var s = this.props.disableEdgeWrap && e - t <= a ? ta.a : $t.a;
              return (
                this.state.nextDown && (s = na.a),
                j.createElement(
                  "div",
                  { className: Xt.carouselBody },
                  !o &&
                    j.createElement(
                      "div",
                      { className: Object(z.a)(Xt.carouselBtnCtn, Xt.left) },
                      j.createElement("img", {
                        onClick: this.PrevPage,
                        onMouseDown: this.PrevDown,
                        onMouseUp: this.PrevUp,
                        src: i,
                        className: Object(z.a)(Xt.carouselBtnImg, Xt.left)
                      })
                    ),
                  j.createElement(
                    qt.Carousel,
                    {
                      showThumbs: !1,
                      showStatus: !1,
                      centerMode: 1 < t,
                      centerSlidePercentage: 100 / t,
                      showArrows: !1,
                      showIndicators: !1,
                      selectedItem: r,
                      onChange: this.UpdateCurrentSlide
                    },
                    this.props.children
                  ),
                  !o &&
                    j.createElement(
                      "div",
                      { className: Object(z.a)(Xt.carouselBtnCtn, Xt.right) },
                      j.createElement("img", {
                        onClick: this.NextPage,
                        onMouseDown: this.NextDown,
                        onMouseUp: this.NextUp,
                        src: s,
                        className: Object(z.a)(Xt.carouselBtnImg, Xt.right)
                      })
                    ),
                  n &&
                    j.createElement(
                      "div",
                      { className: Xt.breadcrumbContainer },
                      this.RenderBreadcrumbs(t)
                    )
                )
              );
            }),
            Object(D.c)([W.a], e.prototype, "NextPage", null),
            Object(D.c)([W.a], e.prototype, "PrevPage", null),
            Object(D.c)([W.a], e.prototype, "PrevUp", null),
            Object(D.c)([W.a], e.prototype, "PrevDown", null),
            Object(D.c)([W.a], e.prototype, "NextUp", null),
            Object(D.c)([W.a], e.prototype, "NextDown", null),
            Object(D.c)([W.a], e.prototype, "GoToElement", null),
            Object(D.c)([W.a], e.prototype, "UpdateCurrentSlide", null),
            e
          );
        })(j.Component),
        ca = a("qP7j"),
        da = a.n(ca),
        pa = new ((function() {
          function e() {}
          return (
            (e.prototype.DeleteForumTopic = function(o, r, i, s, l) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          k.c.COMMUNITY_BASE_URL +
                          "forum/" +
                          o.GetAccountID() +
                          "/" +
                          r +
                          "/deletetopic/"),
                        null != i && "" != i && (t += i + "/"),
                        (a = new FormData()).append("sessionid", k.c.SESSIONID),
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
        ua = (function(a) {
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
                  ? pa
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
                Object(D.a)({ dialogState: "error" }, Object(y.a)(e))
              );
            }),
            (s.prototype.OnDeleteForumTopicFailureCallback = function(e) {
              this.setState(
                Object(D.a)(
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
                o = t.GID,
                r = t.AnnouncementGID;
              (this.m_forumTopicGID = t.forumTopicGID),
                (this.m_clanSteamID = n),
                !this.props.eventModel.bOldAnnouncement &&
                o &&
                "0" != o &&
                o != pe.e
                  ? (this.SetToWaiting(),
                    a
                      .DeleteClanEvent(n, o)
                      .then(this.OnDeleteEventSuccessCallback)
                      .catch(this.OnDeleteEventFailureCallback))
                  : this.props.eventModel.bOldAnnouncement
                  ? (this.SetToWaiting(),
                    a
                      .DeleteOldAnnouncement(n, r)
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
                o = new Array();
              switch (this.state.dialogState) {
                case "confirmation":
                  var r = t.GetNameWithFallback(Object(pe.d)(k.c.LANGUAGE)),
                    i = t.BIsVisibleEvent()
                      ? "#EventDisplay_AreYouSure_Visible"
                      : "#EventDisplay_AreYouSure";
                  (n = Object(G.d)(i, r)),
                    (a = this.OnDelete),
                    t.BHasForumTopicGID() &&
                      o.push(
                        j.createElement(
                          "div",
                          {
                            key: "WantToDeleteCmtThread",
                            className: da.a.Padding
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
                            Object(G.d)("#EventDisplay_DeleteEvent_Comment")
                          )
                        )
                      );
                  break;
                case "waiting":
                  (n = Object(G.d)("#EventDisplay_DeleteEvent_InProgress")),
                    o.push(j.createElement(ne.a, { key: "throbber" }));
                  break;
                case "error":
                  (n = Object(G.d)("#EventDisplay_DeleteEvent_Error")),
                    o.push(
                      j.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++s.m_uniqueError,
                          className: da.a.ErrorStyles
                        },
                        this.state.strErrorMsg
                      )
                    );
                  break;
                case "failed_thread_delete":
                  (n = Object(G.d)(
                    "#EventDisplay_DeleteEvent_ForumTopicError"
                  )),
                    o.push(
                      j.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++s.m_uniqueError,
                          className: da.a.ErrorStyles
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
                  (n = Object(G.d)("#EventDisplay_DeleteEvent_Success")),
                    this.props.onDeleteSuccessAndCloseDialog &&
                      (a = function() {
                        e.props.onDeleteSuccessAndCloseDialog(),
                          e.props.closeModal();
                      });
              }
              return j.createElement(
                De.b,
                {
                  strTitle: Object(G.d)("#EventDisplay_DeleteEvent"),
                  strDescription: n,
                  onCancel: this.props.closeModal,
                  onOK: a,
                  bAlertDialog: "confirmation" != this.state.dialogState,
                  bOKDisabled: "waiting" == this.state.dialogState,
                  bDestructiveWarning: "error" == this.state.dialogState
                },
                o
              );
            }),
            (s.m_uniqueError = 0),
            Object(D.c)(
              [W.a],
              s.prototype,
              "OnDeleteEventSuccessCallback",
              null
            ),
            Object(D.c)(
              [W.a],
              s.prototype,
              "OnDeleteForumTopicSuccessCallback",
              null
            ),
            Object(D.c)(
              [W.a],
              s.prototype,
              "OnDeleteEventFailureCallback",
              null
            ),
            Object(D.c)(
              [W.a],
              s.prototype,
              "OnDeleteForumTopicFailureCallback",
              null
            ),
            Object(D.c)([W.a], s.prototype, "SetToWaiting", null),
            Object(D.c)([W.a], s.prototype, "OnDelete", null),
            Object(D.c)([W.a], s.prototype, "OnChangeDeleteForum", null),
            s
          );
        })(j.Component),
        ma = a("6eA3"),
        ha = a.n(ma),
        va = (function(t) {
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
              Object(we.c)(
                j.createElement(ua, {
                  eventModel: this.props.eventModel,
                  onDeleteSuccessAndCloseDialog: this
                    .OnDeleteSuccessAndComplete,
                  partnerEventStore: this.props.partnerEventStore
                }),
                Object(Ae.m)(e)
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
                o = e.partnerEventStore,
                r = e.useAnchors;
              if (this.state.bRedirectToHome)
                return Object(Ce.h)(n, Ce.a.k_eCommunityAdminPage);
              var i = A.a.Get().GetPartnerEventPermissions(n.clanSteamID),
                s = n.visibility_state == C.b.k_EEventStateVisible,
                l = n.visibility_state == C.b.k_EEventStateStaged;
              if (i.can_edit || i.support_user) {
                var c = [];
                if (void 0 !== this.state.nMaxSaleDayIndex)
                  for (var d = 0; d <= this.state.nMaxSaleDayIndex; ++d)
                    c.push({
                      label: Object(G.d)("#SalePage_Admin_SaleEventDay", d + 1),
                      data: d
                    });
                return j.createElement(
                  B.a,
                  null,
                  j.createElement(
                    "div",
                    { className: ma.DisplayAdminPanel },
                    j.createElement(
                      "span",
                      { className: ma.DisplayAdminPanel_Title },
                      Object(G.d)("#EventDisplay_Admin_Title")
                    ),
                    j.createElement(
                      "div",
                      { className: ma.DisplayAdminPanel_ctn },
                      a,
                      a &&
                        j.createElement(
                          "span",
                          { className: ma.DisplayAdminPanel_Spacer },
                          " "
                        ),
                      j.createElement(
                        Ce.c,
                        {
                          eventModel: n,
                          route: Ce.a.k_eCommunityEdit,
                          openNewWindow: r,
                          className: Object(z.a)(St.Button, ma.AdminButton)
                        },
                        Object(G.d)("#EventEditor_Edit")
                      ),
                      o &&
                        j.createElement(
                          "span",
                          {
                            className: St.Button + " " + ma.AdminButton,
                            onClick: this.OnDeleteVerifyRequest
                          },
                          Object(G.d)("#EventDisplay_DeleteEvent")
                        ),
                      !s &&
                        j.createElement(
                          j.Fragment,
                          null,
                          j.createElement(
                            Ce.c,
                            {
                              eventModel: n,
                              route: Ce.a.k_eCommunityPublish,
                              openNewWindow: r,
                              className: Object(z.a)(St.Button, ma.AdminButton)
                            },
                            Object(G.d)(
                              l
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish"
                            )
                          )
                        ),
                      j.createElement(
                        Ce.c,
                        {
                          eventModel: n,
                          route: Ce.a.k_eCommunityAdminPage,
                          openNewWindow: r,
                          className: Object(z.a)(St.Button, ma.AdminButton)
                        },
                        Object(G.d)("#EventDisplay_Events")
                      ),
                      Boolean(
                        void 0 !== this.state.nMaxSaleDayIndex && 0 < c.length
                      ) &&
                        j.createElement(R.g, {
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
                          Ce.c,
                          {
                            eventModel: n,
                            route: Ce.a.k_eStoreSalePage,
                            openNewWindow: r,
                            className: Object(z.a)(St.Button, ma.AdminButton)
                          },
                          Object(G.d)("#EventDisplay_SalesPage")
                        ),
                      Boolean(
                        n.jsondata.bSaleEnabled && k.i.is_support && n.GID
                      ) &&
                        j.createElement(
                          "a",
                          {
                            href:
                              (k.c.IN_CLIENT ? "steam://openurl/" : "") +
                              "https://steamstats/sales/details/?gid=" +
                              n.GID +
                              "&clanid=" +
                              n.clanSteamID.GetAccountID(),
                            target: k.c.IN_CLIENT ? "" : "_blank",
                            className: Object(z.a)(
                              St.Button,
                              ma.AdminButton,
                              St.ValveOnlyBackground
                            )
                          },
                          Object(G.d)("#EventDisplay_StatsPage")
                        )
                    )
                  )
                );
              }
              return j.createElement("span", null);
            }),
            Object(D.c)([W.a], e.prototype, "OnDeleteVerifyRequest", null),
            Object(D.c)([W.a], e.prototype, "OnDeleteSuccessAndComplete", null),
            Object(D.c)([W.a], e.prototype, "OnChangeVisibilityDate", null),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component);
      var _a = a("bWts"),
        ba = a.n(_a),
        ga = a("XsxU"),
        ya = a.n(ga),
        Ea = a("r+ba"),
        Sa = a.n(Ea),
        fa = a("Lql7"),
        Ca = a("uIWk"),
        Oa = a("7u3m"),
        Ia = a.n(Oa),
        Ta = a("D4G2"),
        wa = a.n(Ta),
        Da = a("Ff1b"),
        Aa = a.n(Da),
        ka = a("go9d"),
        ja = a.n(ka),
        Ga = a("/PpB"),
        La = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            t.m_cancelSignal = _.a.CancelToken.source();
            var a = f.a.InitFromClanID(e.creatorID.clan_account_id);
            return (
              (t.state = {
                bLoading: !Ca.a.BHasCreatorHomeLoaded(a) || !I.a.BIsLoaded()
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
                var e = f.a.InitFromClanID(
                  this.props.creatorID.clan_account_id
                );
                Ca.a
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
                    j.createElement(Ma, {
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
                  ? Object(we.d)(j.createElement(Ga.a, null), window)
                  : this.setState(
                      { bApplyingFollowing: !0 },
                      this.TakeFollowAction
                    )
                : Object(we.d)(
                    j.createElement(De.b, {
                      strTitle: Object(G.d)("#EventDisplay_Share_NotLoggedIn"),
                      strDescription: Object(G.d)(
                        "#EventDisplay_Share_NotLoggedIn_Description"
                      ),
                      strOKButtonText: Object(G.d)("#MobileLogin_SignIn"),
                      onOK: function() {
                        return Object(Ye.a)();
                      }
                    }),
                    window
                  );
            }),
            (e.prototype.TakeFollowAction = function() {
              var a = this,
                n = this.props.creatorID,
                e = f.a.InitFromClanID(n.clan_account_id),
                o = I.a.BIsFollowingCreator(e),
                r = I.a.BIsIgnoringCreator(e);
              I.a
                .UpdateFollowOrIgnoreCurator(e, !r, !(r || o))
                .then(function(e) {
                  var t = Ca.a.GetCreatorHomeByID(n);
                  r || t.AdjustFollower(o ? -1 : 1),
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
                  { className: fa.DevSummaryWidgetCtn },
                  j.createElement(ne.a, null)
                );
              if (this.state.strErrorMsg) return j.createElement("div", null);
              var e = this.props,
                t = e.creatorID,
                a = e.bShowTagline,
                n = f.a.InitFromClanID(t.clan_account_id),
                o = Ca.a.GetCreatorHomeByID(t),
                r = t.type,
                i =
                  "developer" == t.type
                    ? Object(G.d)("#CreatorHome_DevelopedBy")
                    : "publisher" == t.type
                    ? Object(G.d)("#CreatorHome_PublishedBy")
                    : Object(G.d)("#CreatorHome_InFranchise"),
                s = o.GetNumFollowers(),
                l = o.GetURL(r),
                c = this.GetSocialMediaElements(o),
                d = I.a.BIsFollowingCreator(n),
                p = I.a.BIsIgnoringCreator(n);
              return j.createElement(
                B.a,
                null,
                j.createElement(
                  "div",
                  {
                    className: Object(z.a)(
                      fa.DevSummaryCtn,
                      this.props.bSmallFormat ? fa.SmallFormat : fa.LargeFormat
                    )
                  },
                  !this.props.bHideCreatorType &&
                    j.createElement("span", { className: fa.Title }, i),
                  j.createElement(
                    "div",
                    { className: fa.DevSummaryWidgetCtn },
                    j.createElement("div", {
                      className: fa.DevSummaryBackground,
                      style: {
                        backgroundImage:
                          "url(" + o.GetAvatarURLFullSize() + " )"
                      }
                    }),
                    j.createElement(
                      "div",
                      {
                        className: Object(z.a)(
                          fa.DevSummaryContent,
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
                            className: fa.Avatar,
                            src: o.GetAvatarURLFullSize()
                          })
                        ),
                        j.createElement(
                          "div",
                          {
                            className: Object(z.a)(
                              St.FlexColumnContainer,
                              fa.CreatorDescCtn
                            )
                          },
                          j.createElement(
                            "div",
                            {
                              className: Object(z.a)(
                                fa.CreatorTitleCtn,
                                St.FlexColumnContainer
                              )
                            },
                            j.createElement(
                              "a",
                              { href: l, className: fa.CreatorNameName },
                              o.GetName()
                            ),
                            a &&
                              j.createElement(
                                "div",
                                {
                                  className: Object(z.a)(
                                    St.FlexColumnContainer,
                                    fa.CreatorTagline
                                  )
                                },
                                o.GetTagLine()
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
                              { className: fa.FollowBtnCtn },
                              j.createElement(
                                "div",
                                {
                                  className: Object(z.a)(
                                    St.Button,
                                    fa.FollowButton
                                  ),
                                  onClick: this.OnFollowClick
                                },
                                this.state.bApplyingFollowing &&
                                  j.createElement(ne.a, { size: "small" }),
                                !this.state.bApplyingFollowing &&
                                  (d || p) &&
                                  j.createElement("img", {
                                    style: { height: "16px" },
                                    src:
                                      "https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_selected.png"
                                  }),
                                j.createElement(
                                  "div",
                                  { className: fa.FollowBtnText },
                                  !this.state.bApplyingFollowing &&
                                    (d
                                      ? Object(G.d)("#Button_Followed")
                                      : p
                                      ? Object(G.d)("#Button_Ignored")
                                      : Object(G.d)("#Button_Follow"))
                                )
                              ),
                              j.createElement(
                                "div",
                                { className: fa.Followers },
                                j.createElement(
                                  "span",
                                  null,
                                  s.toLocaleString(G.c.GetPreferredLocales())
                                ),
                                j.createElement("br", null),
                                Object(G.d)("#CreatorHome_JustFollowers")
                              )
                            ),
                            0 < c.length &&
                              j.createElement(
                                "div",
                                {
                                  className: Object(z.a)(
                                    fa.SocialContainer,
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
            Object(D.c)([W.a], e.prototype, "OnFollowClick", null),
            Object(D.c)([W.a], e.prototype, "TakeFollowAction", null),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        Na = (function(a) {
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
                  { className: fa.DevSummaryWidgetCtn },
                  j.createElement(ne.a, null)
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
                var o = void 0,
                  r = void 0,
                  i = void 0;
                return (
                  n.creator_list.forEach(function(e) {
                    switch (e.type) {
                      case "developer":
                        void 0 === o && (o = e);
                        break;
                      case "publisher":
                        void 0 === r && (r = e);
                        break;
                      default:
                        void 0 === i && (i = e);
                    }
                  }),
                  j.createElement(
                    B.a,
                    null,
                    j.createElement(La, {
                      creatorID: o || (r || i),
                      eventModel: a,
                      bSmallFormat: !0
                    })
                  )
                );
              }
              return j.createElement("div", null);
            }),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        Ma = (function(e) {
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
                  t = Ia.a;
                  break;
                case 5:
                  t = Aa.a;
                  break;
                case 4:
                  t = wa.a;
                  break;
                case 6:
                  t = ja.a;
              }
              return j.createElement(
                "a",
                {
                  href:
                    (k.c.IN_CLIENT ? "steam://openurl_external/" : "") +
                    e.external_url,
                  target: k.c.IN_CLIENT ? void 0 : "_blank",
                  "data-tooltip-text": e.external_user_name
                    ? e.external_user_name
                    : e.external_url,
                  className: Object(z.a)(fa.SocialLink)
                },
                j.createElement("img", {
                  className: Object(z.a)(fa.SocialImg),
                  src: t
                }),
                j.createElement(
                  "div",
                  null,
                  e.external_follows.toLocaleString(G.c.GetPreferredLocales())
                )
              );
            }),
            t
          );
        })(j.Component),
        Ba = a("TOXn"),
        xa = a("NKJh"),
        Ra = a.n(xa),
        Pa = (function(t) {
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
                  o = this;
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
                        !o.m_cancelSignal.token.reason && e && 0 < e.length
                          ? o.setState(
                              { bLoading: !1, events: e },
                              o.HandleTrackingWhenAdjacentLoadCompleted
                            )
                          : o.setState({ bLoading: !1 });
                      })
                      .catch(function(e) {
                        o.setState(
                          { bLoading: !1 },
                          o.HandleTrackingWhenAdjacentLoadCompleted
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
                  o = 0,
                  r = this.state.events;
                o < r.length;
                o++
              ) {
                var i = r[o];
                i.BHasAnnouncementGID() && n.push(i.AnnouncementGID);
              }
              var s = this.props.partnerEventStore;
              he.f(n);
              for (var l = 0, c = n; l < c.length; l++) {
                var d = c[l],
                  p = s.GetClanEventFromAnnouncementGID(d);
                if (
                  p &&
                  p.GID != a.GID &&
                  p.AnnouncementGID != a.AnnouncementGID &&
                  (p &&
                    p.visibility_state == C.b.k_EEventStateVisible &&
                    (e.push(
                      j.createElement(Ha, {
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
                return j.createElement(Ze, {
                  appid: n,
                  eventModel: t,
                  announcementGID: t.GetAnnouncementGID(),
                  closeModal: this.HideInfiniteScroller,
                  partnerEventStore: a
                });
              if (this.state.bLoading)
                return j.createElement(ne.a, {
                  position: "center",
                  size: "medium"
                });
              if (0 == this.state.events.length)
                return j.createElement("div", null);
              var o = b.a.GetStoreCapsuleInfo(n).GetAppStoreData(),
                r = g.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                );
              if (!r)
                return (
                  Object(h.a)(
                    r,
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
                { className: ya.a.OtherEventsCtn },
                j.createElement(
                  "div",
                  { className: ft.a.EventSectionTitleCtn },
                  j.createElement(
                    "div",
                    { className: ft.a.EventSectionTitle },
                    Object(G.j)(
                      "#EventBrowse_MoreEventsTitle",
                      r.is_ogg ? o.title : r.group_name
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
                      Object(G.d)("#EventBrowse_MoreEventsBtn")
                    ),
                  !s &&
                    j.createElement(
                      "a",
                      {
                        href:
                          k.c.COMMUNITY_BASE_URL +
                          "ogg/" +
                          n +
                          "/announcements",
                        className: ft.a.EventSectionMoreBtn
                      },
                      Object(G.d)("#EventBrowse_MoreEventsBtn")
                    )
                ),
                j.createElement("div", { className: ya.a.OtherEvents }, i)
              );
            }),
            Object(D.c)([W.a], e.prototype, "PrepLoadEvents", null),
            Object(D.c)([W.a], e.prototype, "ActualLoadEvent", null),
            Object(D.c)(
              [W.a],
              e.prototype,
              "HandleTrackingWhenAdjacentLoadCompleted",
              null
            ),
            Object(D.c)([W.a], e.prototype, "OnViewAll", null),
            Object(D.c)([W.a], e.prototype, "HideInfiniteScroller", null),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        Ha = (function(e) {
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
                o = e.appInfo,
                r = e.langOverride,
                i = e.onClick;
              if (!t)
                return j.createElement("div", {
                  className: ya.a.OtherEvents_EventCtn
                });
              var s = r || Object(pe.d)(k.c.LANGUAGE),
                l =
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        s,
                        ue.c.capsule_main
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
                    Ce.c,
                    {
                      className: Object(z.a)(
                        ya.a.OtherEvents_EventCtn,
                        ya.a.HoversEnabled
                      ),
                      eventModel: t,
                      route: Ce.a.k_eView,
                      openNewWindow: n,
                      onClick: i
                    },
                    j.createElement(
                      "div",
                      { className: ya.a.EventSummaryContainer },
                      j.createElement(
                        "div",
                        { className: ya.a.EventSummaryType },
                        d
                      ),
                      j.createElement(
                        "div",
                        { className: ya.a.EventSummaryText },
                        p
                      )
                    ),
                    j.createElement("div", {
                      className: ya.a.OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: "url(" + l + ")"
                      }
                    }),
                    j.createElement(
                      "div",
                      { className: ya.a.OtherEvents_ContentCtn },
                      j.createElement(
                        "div",
                        { className: ya.a.OtherEvents_MainImageCtn },
                        j.createElement("img", {
                          src: l,
                          className: ya.a.OtherEvents_MainImage
                        })
                      ),
                      j.createElement(
                        "div",
                        { className: ya.a.OtherEvents_TextCtn },
                        j.createElement(
                          "div",
                          { className: ya.a.OtherEvents_TextTitle },
                          c
                        ),
                        u &&
                          j.createElement(
                            "div",
                            { className: ya.a.OtherEvents_SubTitle },
                            u
                          ),
                        j.createElement(me.a, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                        })
                      )
                    )
                  ),
                  o &&
                    j.createElement(
                      "span",
                      { className: ya.a.AppCapsuleCtn },
                      j.createElement(
                        Te.a,
                        {
                          strURL: k.c.STORE_BASE_URL + "app/" + o.appid,
                          type: "app",
                          id: o.appid,
                          hoverClassName: ya.a.AppCapsuleImageHover
                        },
                        j.createElement("img", {
                          className: ya.a.AppCapsuleImage,
                          src: this.props.appInfo.tiny_capsule
                        })
                      ),
                      j.createElement(
                        "span",
                        { className: ya.a.AppCapsulePrice },
                        Boolean(this.props.appInfo.discount_percent) &&
                          j.createElement(
                            "span",
                            { className: Ra.a.StoreSaleDiscountBox },
                            "-" + this.props.appInfo.discount_percent + "%"
                          ),
                        !this.props.appInfo.is_free &&
                          this.props.appInfo.price &&
                          j.createElement(
                            "span",
                            { className: Ra.a.StoreSalePriceBox },
                            this.props.appInfo.price
                          )
                      )
                    )
                )
              );
            }),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        Fa = (function(e) {
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
                o = e.onClick;
              if (!t)
                return j.createElement("div", {
                  className: ya.a.OtherEvents_EventCtn
                });
              var r = Object(pe.d)(k.c.LANGUAGE),
                i =
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        r,
                        ue.c.capsule_main
                      ),
                s = t.GetNameWithFallback(r),
                l = t.GetCategoryAsString();
              return j.createElement(
                Ce.c,
                {
                  className:
                    ya.a.OtherEvents_EventCtn + " " + ya.a.HorizontalEvent,
                  eventModel: t,
                  route: Ce.a.k_eView,
                  openNewWindow: n,
                  onClick: o
                },
                j.createElement(
                  "div",
                  { className: ya.a.OtherEvents_ContentCtn },
                  j.createElement(
                    "div",
                    { className: ya.a.OtherEvents_MainImageCtn },
                    j.createElement("img", {
                      src: i,
                      className: ya.a.OtherEvents_MainImage
                    })
                  )
                ),
                j.createElement(
                  "div",
                  { className: ya.a.OtherEvents_TextCtn },
                  j.createElement(
                    "div",
                    { className: ya.a.HorizontalDescriptionCtn },
                    j.createElement(
                      "div",
                      { className: ya.a.HorizontalDescription },
                      l
                    ),
                    j.createElement(me.a, {
                      bSingleLine: !0,
                      dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                    })
                  ),
                  j.createElement("div", { className: ya.a.HorizontalTitle }, s)
                )
              );
            }),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        za = (function() {
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
        Ua = new ((function() {
          function e() {
            (this.m_mapPerEventStats = new Map()),
              (this.m_mapSummaryStats = new Map()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var n = this;
              if (!this.m_bLoadedFromConfig) {
                var e = Object(k.f)(
                  "trackingdatasummary",
                  "application_config"
                );
                this.ValidateStoreDefault(e) &&
                  this.m_mapSummaryStats.set(e.clan_account_id, new za(e));
                var t = Object(k.f)("trackingdataevents", "application_config");
                this.ValidateStoreDefaultList(t) &&
                  t.forEach(function(e) {
                    var t = f.a.InitFromClanID(e.clan_account_id),
                      a = n.GetKey(t, e.event_gid);
                    n.m_mapPerEventStats.set(a, new za(e));
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
                  this.m_mapPerEventStats.set(a, new za(null)),
                this.m_mapPerEventStats.get(a)
              );
            }),
            (e.prototype.GetTotalStats = function(e) {
              return (
                this.LazyInit(),
                this.m_mapSummaryStats.has(e.GetAccountID()) ||
                  this.m_mapSummaryStats.set(e.GetAccountID(), new za(null)),
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
                  o,
                  r,
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
                        Object(k.d)() + "actions/ajaxgetpartnereventsreport"),
                        (o = {
                          sessionid: k.c.SESSIONID,
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
                            params: o,
                            withCredentials: !0,
                            cancelToken: p.token
                          })
                        ]
                      );
                    case 2:
                      return (
                        (r = e.sent()),
                        Object(m.runInAction)(function() {
                          l.m_mapSummaryStats.set(
                            c.GetAccountID(),
                            new za(r.data.summary)
                          ),
                            r.data.events_detail.forEach(function(e) {
                              var t = l.GetKey(c, e.event_gid);
                              l.m_mapPerEventStats.has(t)
                                ? l.m_mapPerEventStats.get(t).reset(e)
                                : l.m_mapPerEventStats.set(t, new za(e));
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
        Wa = a("sGzE"),
        Va = (function(e) {
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
                : j.createElement(
                    "div",
                    null,
                    j.createElement(
                      "div",
                      {
                        className: Object(z.a)(
                          Wa.StatsCtnTitle,
                          a ? Wa.NormalStatsMode : Wa.SmallStatsMode
                        )
                      },
                      j.createElement(
                        "h1",
                        null,
                        Object(G.d)("#EventDashBoard_SummaryStats_Title")
                      ),
                      Boolean(a) &&
                        j.createElement(
                          "p",
                          null,
                          Object(G.d)("#EventDashBoard_SummaryStats_Desc"),
                          " ",
                          j.createElement(
                            "a",
                            {
                              href:
                                "https://partner.steamgames.com/doc/marketing/event_tools/stats",
                              target: "_blank"
                            },
                            Object(G.d)("#EventDashBoard_SummaryStats_Link")
                          )
                        )
                    ),
                    j.createElement(
                      "div",
                      {
                        className: Object(z.a)(
                          Wa.StatsCtn,
                          a ? Wa.NormalStatsMode : Wa.SmallStatsMode
                        )
                      },
                      j.createElement(
                        "div",
                        { className: Wa.StatsLeftSection },
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle_ctn },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)("#EventDashBoard_Location_LibraryHome")
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)(
                              "#EventDashBoard_Summary_LibraryHome_Shown"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.library_overview_shown.toLocaleString(
                              G.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)(
                              "#EventDashBoard_Summary_LibraryHome_Read"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.library_overview_read.toLocaleString(
                              G.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement("br", null),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle_ctn },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)(
                              "#EventDashBoard_Location_LibraryDetail"
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Shown"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_shown.toLocaleString(
                              G.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)(
                              "#EventDashBoard_Summary_AppDetailSpotlight_Read"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.app_details_spotlight_read.toLocaleString(
                              G.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement("br", null),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)(
                              "#EventDashBoard_Summary_AppDetailActivity_Shown"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.app_details_activity_shown.toLocaleString(
                              G.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)(
                              "#EventDashBoard_Summary_AppDetailActivity_Read"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.app_details_activity_read.toLocaleString(
                              G.c.GetPreferredLocales()
                            )
                          )
                        )
                      ),
                      j.createElement(
                        "div",
                        { className: Wa.StatsRightSection },
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle_ctn },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)("#EventDashBoard_Location_StoreDetail")
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)(
                              "#EventDashBoard_Summary_StoreAppPage_Shown"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.store_app_page_shown.toLocaleString(
                              G.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)(
                              "#EventDashBoard_Summary_StoreAppPage_Read"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.store_app_page_read.toLocaleString(
                              G.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement("br", null),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle_ctn },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)(
                              "#EventDashBoard_Location_CommunityDetail"
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)(
                              "#EventDashBoard_Summary_Community_Shown"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.community_hub_shown.toLocaleString(
                              G.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)(
                              "#EventDashBoard_Summary_Community_Read"
                            )
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.community_hub_read.toLocaleString(
                              G.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle_ctn },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)(
                              "#EventDashBoard_Location_NewsHubDetail"
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)("#EventDashBoard_Summary_NewsHub_Shown")
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.news_hub_shown.toLocaleString(
                              G.c.GetPreferredLocales()
                            )
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Wa.StatsTitle },
                          j.createElement(
                            "span",
                            null,
                            Object(G.d)("#EventDashBoard_Summary_NewsHub_Read")
                          ),
                          j.createElement(
                            "span",
                            null,
                            t.news_hub_read.toLocaleString(
                              G.c.GetPreferredLocales()
                            )
                          )
                        )
                      )
                    )
                  );
            }),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        Za = a("ZCZY"),
        Ya = (function(e) {
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
                        j.createElement(
                          "a",
                          { key: "anchor_" + e.name, href: e.url },
                          e.name
                        )
                      )
                    : t.push(
                        j.createElement(
                          x.b,
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
                { className: Object(z.a)(Za.BreadContainer) },
                j.createElement("div", { className: "blockbg" }, e),
                j.createElement("div", { style: { clear: "left" } })
              );
            }),
            t
          );
        })(j.Component),
        Ja = a("4sqd"),
        Qa = a("5L1o"),
        qa = j.lazy(function() {
          return Promise.all([a.e(0), a.e(1), a.e(6)]).then(
            a.bind(null, "NIbt")
          );
        }),
        Xa = (function(t) {
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
                o = e.emoticonStore,
                r = e.nOverrideStartTime,
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
                  { className: Ue.a.FlexCenter, style: { height: "400px" } },
                  j.createElement(ne.a, {
                    size: "medium",
                    string: Object(G.d)("#Loading")
                  })
                );
              var p = t.GetDescriptionWithFallback(a),
                u = b.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData(),
                m = Object(k.d)() == k.c.STORE_BASE_URL,
                h = g.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                ),
                v = Object(Ce.d)(
                  t,
                  m ? Ce.a.k_eStoreNewsHub : Ce.a.k_eCommunityAllNews,
                  "allowRelative",
                  h && h.vanity_url
                );
              return j.createElement(Ka, {
                event: t,
                lang: a,
                titleBar: d,
                body: j.createElement(
                  B.a,
                  null,
                  j.createElement(
                    "div",
                    { className: ha.a.EventDetailTitleContainer },
                    j.createElement(Ya, {
                      crumbs: [
                        {
                          name: Object(G.d)("#BreadCrumbs_AllEvents"),
                          url: Object(Ce.d)(
                            t,
                            Ce.a.k_eStoreUsersNewsHub,
                            "allowRelative"
                          )
                        },
                        {
                          name: Object(G.d)("#BreadCrumbs_GameEvents", u.title),
                          url: v
                        }
                      ]
                    }),
                    j.createElement(
                      "div",
                      { className: ha.a.EventDetailTitle },
                      t.GetNameWithFallback(a)
                    ),
                    t.BHasSubTitle(a) &&
                      j.createElement(
                        "div",
                        { className: ha.a.EventDetailsSubTitle },
                        t.GetSubTitle(a)
                      )
                  ),
                  t.BHasBroadcastEnabled() &&
                    j.createElement(
                      "div",
                      { className: ha.a.EventBroadcastCtn },
                      j.createElement(
                        j.Suspense,
                        { fallback: j.createElement("div", null) },
                        j.createElement(qa, {
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
                    { className: ha.a.EventColumns },
                    j.createElement(
                      "div",
                      { className: ha.a.EventDetailsDescription },
                      j.createElement(
                        B.a,
                        null,
                        t.BHasTag("steam_award_nomination_request") &&
                          j.createElement(Ja.a, {
                            event: t,
                            lang: a,
                            previewMode: l
                          }),
                        t.BHasTag("steam_award_vote_request") &&
                          j.createElement(Ja.b, {
                            event: t,
                            lang: a,
                            previewMode: l
                          })
                      ),
                      j.createElement(
                        B.a,
                        null,
                        j.createElement(
                          "div",
                          {
                            className: Object(z.a)(
                              "EventDetailsBody",
                              ha.a.EventDetailsBody
                            )
                          },
                          j.createElement(Ba.a, {
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
                          F.a,
                          {
                            className: Object(z.a)(ft.a.Button),
                            href: t.jsondata.read_more_link
                          },
                          Object(G.d)("#EventEmail_Button_ClickForMoreDetails")
                        ),
                      j.createElement("span", { className: ft.a.Clear }),
                      j.createElement(
                        B.a,
                        null,
                        j.createElement(Et.a, { appid: t.appid })
                      )
                    ),
                    j.createElement(
                      B.a,
                      null,
                      j.createElement($a, {
                        event: t,
                        lang: a,
                        nOverrideStartTime: r,
                        nOverrideEndTime: i
                      })
                    )
                  ),
                  j.createElement(re.b, {
                    eventModel: t,
                    emoticonStore: o,
                    partnerEventStore: n
                  })
                ),
                postbody: j.createElement(B.a, null, s, c),
                footer: j.createElement(
                  B.a,
                  null,
                  j.createElement(
                    "div",
                    { className: ha.a.AppSummaryCtn },
                    j.createElement(
                      "div",
                      { className: ha.a.EventBodyPosition },
                      Boolean(
                        null != u.appid && null != u.appid && 0 != u.appid
                      ) &&
                        j.createElement(
                          "div",
                          { className: ha.a.AppSummaryWidgetTitleCtn },
                          j.createElement(
                            "span",
                            { className: ha.a.Title },
                            Object(G.d)("#CreatorHome_ThisGame")
                          ),
                          j.createElement(
                            "div",
                            { className: ha.a.AppSummaryWidgetCtn },
                            j.createElement(Qa.h, { appid: t.appid })
                          )
                        ),
                      j.createElement(Na, {
                        appid: t.appid,
                        eventModel: t,
                        bSmallFormat: !0
                      })
                    )
                  )
                )
              });
            }),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        Ka = (function(e) {
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
                o = e.body,
                r = e.postbody,
                i = e.footer,
                s = t.GetImageURLWithFallback("background", a),
                l = t.BIsImageSafeForAllAges("background", a),
                c = "lang_" + Object(pe.c)(a),
                d = t.BImageNeedScreenshotFallback("background", a);
              return j.createElement(
                "div",
                {
                  className: Object(z.a)(
                    ha.a.EventDetailsPageContainer,
                    c,
                    ft.a.PartnerEventFont,
                    l
                      ? ha.a.DetailArtworkAgeAppropriate
                      : ha.a.DetailArtworkAgeNotAppropriate,
                    d && ha.a.NoTitleArtwork
                  )
                },
                n,
                j.createElement(
                  "div",
                  { className: ha.a.EventCoverImageCtn },
                  j.createElement(
                    "div",
                    { className: ha.a.EventCoverImageBlr },
                    j.createElement("div", {
                      className: ha.a.EventCoverImageFuzz,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + s + ")"
                      }
                    }),
                    j.createElement("div", {
                      className: ha.a.EventCoverImage,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + s + ")"
                      }
                    })
                  ),
                  j.createElement("div", { className: ha.a.CoverImageGradient })
                ),
                j.createElement(
                  "div",
                  { className: ha.a.EventBodyCtn },
                  j.createElement("div", {
                    className: ha.a.EventBackgroundBlurCtn
                  }),
                  j.createElement(
                    "div",
                    { className: ha.a.EventBodyPosition },
                    j.createElement(
                      "div",
                      { className: ha.a.EventBody },
                      j.createElement("div", {
                        className: ha.a.EventBackgroundBlur,
                        style: { backgroundImage: "url(" + s + ")" }
                      }),
                      j.createElement(B.a, null, o)
                    ),
                    Boolean(r) && j.createElement(B.a, null, r)
                  )
                ),
                Boolean(i) && j.createElement(B.a, null, i)
              );
            }),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        $a = (function(e) {
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
                o = e.nOverrideEndTime,
                r = t.GetCategoryAsString(),
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
              var s = L.a.GetTimeNowWithOverride(),
                l = n || t.GetStartTimeAndDateUnixSeconds();
              return j.createElement(
                "div",
                { className: ha.a.EventDetailTitleDesc },
                j.createElement(
                  "div",
                  { className: ha.a.EventDetailsSticky },
                  i.is_ogg
                    ? j.createElement(en, { appid: i.appid })
                    : j.createElement(tn, { clanSteamID: t.clanSteamID }),
                  j.createElement(Et.b, {
                    event: t,
                    nOverrideEndTime: o,
                    nOverrideStartTime: n
                  }),
                  28 !== t.type &&
                    s < l &&
                    j.createElement(
                      "div",
                      { className: ha.a.EventDetailTimeInfo },
                      j.createElement(ie.a, {
                        eventModel: t,
                        eventGID: t.GID,
                        lang: a
                      })
                    ),
                  j.createElement(
                    "div",
                    { className: ha.a.EventDetailUserType },
                    j.createElement(
                      "div",
                      { className: ha.a.RightSideTitles },
                      Object(G.d)("#EventDisplay_RightColumnTitle_EventType")
                    ),
                    j.createElement(
                      "div",
                      { className: ha.a.EventDetailsType },
                      r,
                      " "
                    )
                  ),
                  j.createElement(on, { event: t })
                )
              );
            }),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        en = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var t = this.props.appid;
              Object(h.a)(t && 0 != t, "Expected Appid In Game Info Section");
              var e = b.a.GetStoreCapsuleInfo(t),
                a = e.GetAppStoreData();
              return j.createElement(
                "div",
                { className: ha.a.EventDetailGameCallToAction },
                j.createElement(
                  "div",
                  { className: ha.a.RightSideTitles },
                  ht.q.some(function(e) {
                    return t === e;
                  })
                    ? Object(G.d)("#EventDisplay_RightColumnTitle_Blog")
                    : Object(G.d)("#EventDisplay_RightColumnTitle_Game")
                ),
                j.createElement(
                  "a",
                  { href: e ? a.capsule_link : "" },
                  j.createElement("div", {
                    className: ha.a.EventDetailsGame,
                    style: { backgroundImage: "url(" + a.capsule + ")" }
                  })
                ),
                j.createElement(an, { appid: t })
              );
            }),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        tn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.clanSteamID,
                t = g.a.GetClanInfoByClanAccountID(e.GetAccountID());
              return t
                ? j.createElement(
                    "div",
                    { className: ha.a.EventDetailGameCallToAction },
                    j.createElement(
                      "div",
                      { className: ha.a.RightSideTitles },
                      t.group_name
                    ),
                    j.createElement(
                      "a",
                      { href: g.a.GetCreatorStoreURL(e) },
                      j.createElement("div", {
                        className: ha.a.EventDetailsAvatar,
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
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        an = (function(e) {
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
                ? (n = Object(G.d)("#EventDisplay_CallToAction_InLibrary"))
                : t.GetAppStoreData().coming_soon && !t.GetAppStoreData().subid
                ? (n = Object(G.d)("#EventDisplay_CallToAction_ComingSoon"))
                : a.is_free
                ? (n = Object(G.d)("#EventDisplay_CallToAction_FreeToPlay"))
                : a.is_free || (n = a.price);
              var o =
                1 !== a.success ||
                ht.q.some(function(e) {
                  return a.appid === e;
                });
              return j.createElement(
                "div",
                { className: o ? ha.a.SteamBlog : void 0 },
                j.createElement(
                  "div",
                  { className: ha.a.GameActions },
                  j.createElement(
                    "div",
                    {
                      className: ha.a.Ownership,
                      style: { fontSize: n && n.length < 10 ? "12px" : "10px" }
                    },
                    n || null
                  ),
                  j.createElement(Qa.a, { appid: e })
                ),
                j.createElement(
                  "div",
                  { className: Object(z.a)(ha.a.GameActions) },
                  j.createElement(Qa.j, { appid: e })
                )
              );
            }),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        nn = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"],
        on = (j.Component,
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
                A.a
                  .Get()
                  .LoadSingleAppEventPermissions(a.clanSteamID)
                  .then(function(e) {
                    e &&
                      e.can_edit &&
                      Ua.LoadStatsForEvents(
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
                Ua.GetStatsFor(e.clanSteamID, e.GID);
              return j.createElement(
                B.a,
                null,
                j.createElement(
                  "div",
                  { className: ha.a.EditorStatsCtn },
                  j.createElement(
                    "div",
                    { className: ha.a.EditorStatsRow },
                    j.createElement(
                      "span",
                      null,
                      Object(G.d)("#EventEditor_Comments")
                    ),
                    j.createElement(
                      "span",
                      null,
                      e.nCommentCount.toLocaleString(G.c.GetPreferredLocales())
                    )
                  ),
                  j.createElement(
                    "div",
                    { className: ha.a.EditorStatsRow },
                    j.createElement(
                      "span",
                      null,
                      Object(G.d)("#EventEditor_UpVotes")
                    ),
                    j.createElement(
                      "span",
                      null,
                      e.nVotesUp
                        ? e.nVotesUp.toLocaleString(G.c.GetPreferredLocales())
                        : 0
                    )
                  ),
                  j.createElement(
                    "div",
                    { className: ha.a.EditorStatsRow },
                    j.createElement(
                      "span",
                      null,
                      Object(G.d)("#EventEditor_DownVotes")
                    ),
                    j.createElement(
                      "span",
                      null,
                      e.nVotesDown
                        ? e.nVotesDown.toLocaleString(G.c.GetPreferredLocales())
                        : 0
                    )
                  )
                ),
                Boolean(t) &&
                  j.createElement(
                    "div",
                    { className: ha.a.EditorStatsCtn },
                    Object(G.d)("#EventDashBoard_SummaryStats_Admin_Title"),
                    j.createElement(Va, { summary: t.m_stats })
                  )
              );
            }),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component)),
        rn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.componentDidMount = function() {
              Zt.GetRawDoorData() || Zt.LoadDoorData(),
                Vt.LoadSaleTokenPoints();
            }),
            (t.prototype.render = function() {
              var e = Zt.GetRawDoorData();
              if (!e) return null;
              for (
                var t = e.length - 1,
                  a = L.a.GetTimeNowWithOverride() > e[t].rtime_start,
                  n = [],
                  o = 0;
                o <= t;
                o++
              )
                n.push(
                  j.createElement(ln, {
                    key: "envelope-" + o,
                    iDoorIndex: o,
                    strFontFamily: this.props.strFontFamily
                  })
                );
              var r = Vt.GetSaleTokenPoints().points;
              return j.createElement(
                B.a,
                null,
                j.createElement(
                  "div",
                  { className: ha.a.LunarNewYearHeader },
                  j.createElement(
                    "div",
                    { className: ha.a.EnvelopeArea },
                    0 <= r &&
                      j.createElement(
                        "div",
                        { className: ha.a.TokenBalanceContainer },
                        Object(G.d)("#Lunar2020_YourBalancePrefix"),
                        j.createElement(
                          "a",
                          {
                            className: ha.a.TokenBalance,
                            href: k.c.STORE_BASE_URL + "lunarnewyearmarket"
                          },
                          " ",
                          Object(G.d)("#Lunar2020_BalanceNumberOfTokens", r),
                          " "
                        )
                      ),
                    n
                  ),
                  !a &&
                    j.createElement(
                      "div",
                      { className: ha.a.BottomMessage },
                      Object(G.d)("#Lunar2020_CheckBackEachDay")
                    )
                )
              );
            }),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        sn = [
          "#Lunar2020_FirstGift",
          "#Lunar2020_SecondGift",
          "#Lunar2020_ThirdGift",
          "#Lunar2020_FourthGift"
        ],
        ln = (function(e) {
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
                        (t = Zt.BIsDoorOpened(this.props.iDoorIndex)),
                        (a = Object(Ae.m)(n)),
                        t
                          ? (Object(we.b)(
                              j.createElement(
                                pn,
                                Object(D.a)({ bIsFirstOpen: !1 }, this.props)
                              ),
                              a
                            ),
                            [2])
                          : [4, Zt.OpenDoor(this.props.iDoorIndex, !0)]
                      );
                    case 1:
                      return (
                        e.sent() &&
                          Object(we.b)(
                            j.createElement(
                              pn,
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
              var t = Object(Ae.m)(e),
                a = j.createElement(
                  "a",
                  { href: k.c.HELP_BASE_URL },
                  Object(G.d)("#User_LimitedAccount_UrlInfo")
                );
              Object(we.b)(
                j.createElement(De.b, {
                  strTitle: Object(G.d)("#Lunar2020_LimitedUserDialogTitle"),
                  strDescription: Object(G.j)("#User_LimitedAccount", a),
                  bAlertDialog: !0
                }),
                t
              );
            }),
            (t.prototype.VOOnClose = function() {
              k.i.is_support && Zt.OpenDoor(this.props.iDoorIndex, !1);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.iDoorIndex,
                a = e.strFontFamily;
              Object(h.a)(
                0 <= t && t < sn.length && t < Zt.GetDoorCount(),
                "Day index #" + t + " not in valid range."
              );
              for (
                var n = Object(G.d)(sn[t]),
                  o = !k.i.logged_in,
                  r = Zt.BIsDoorOpened(t),
                  i = Zt.BCanUserOpenDoor(t),
                  s = !0,
                  l = 0;
                l < t;
                l++
              )
                s = s && Zt.BIsDoorOpened(l);
              var c = !r && i && s,
                d = new Date(1e3 * Zt.GetRawDoorData()[t].rtime_start),
                p = o
                  ? Object(G.d)("#Login_SignIn")
                  : r
                  ? Object(G.d)("#Lunar2020_RereadStory")
                  : c
                  ? Object(G.d)("#Lunar2020_GiftCanBeOpenedNow")
                  : i
                  ? Object(G.d)("#Lunar2020_GiftCanBeOpenedAfterThePreviousOne")
                  : Object(G.d)(
                      "#Lunar2020_GiftLockedUntilDate",
                      d.toLocaleDateString(G.c.GetPreferredLocales(), {
                        month: "numeric",
                        day: "numeric"
                      })
                    ),
                u = o
                  ? Ye.a
                  : k.i.is_limited
                  ? this.ShowLimitedUserDialog
                  : r || c
                  ? this.OpenEnvelope
                  : null,
                m = Object(z.a)(
                  ha.a.EnvelopeContainer,
                  o && ha.a.NeedLogin,
                  r && ha.a.Opened,
                  c && ha.a.Unlocked,
                  !r && !c && ha.a.Locked
                );
              return j.createElement(
                "div",
                { className: m },
                j.createElement("div", { className: ha.a.BackingRect }),
                j.createElement(
                  "div",
                  { className: ha.a.Envelope },
                  j.createElement(
                    "div",
                    { className: ha.a.GiftLabel, style: { fontFamily: a } },
                    n
                  )
                ),
                j.createElement(
                  "div",
                  { className: ha.a.OpenState, onClick: u },
                  p
                ),
                (k.i.is_support &&
                  r &&
                  ("beta" == k.c.WEB_UNIVERSE || "dev" == k.c.WEB_UNIVERSE) &&
                  j.createElement(
                    "div",
                    {
                      className: Object(z.a)(ha.a.OpenState, ha.a.VO),
                      onClick: this.VOOnClose
                    },
                    "(VO) Close Gift"
                  )) ||
                  null
              );
            }),
            Object(D.c)([W.a], t.prototype, "OpenEnvelope", null),
            Object(D.c)([W.a], t.prototype, "ShowLimitedUserDialog", null),
            Object(D.c)([W.a], t.prototype, "VOOnClose", null),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        cn = [
          "#Lunar2020_StoryDayOneHeader",
          "#Lunar2020_StoryDayTwoHeader",
          "#Lunar2020_StoryDayThreeHeader",
          "#Lunar2020_StoryDayFourHeader"
        ],
        dn = [
          "#Lunar2020_StoryDayOne",
          "#Lunar2020_StoryDayTwo",
          "#Lunar2020_StoryDayThree",
          "#Lunar2020_StoryDayFour"
        ],
        pn = function(e) {
          var t = j.useState(!e.bIsFirstOpen),
            a = t[0],
            n = t[1];
          j.useEffect(function() {
            return n(!0);
          }, []);
          var o =
              k.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.mp4" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            r =
              k.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.webm" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            i = e.iDoorIndex == Zt.GetDoorCount() - 1;
          return j.createElement(
            De.c,
            {
              className: ha.a.LunarNewYearOpenEnvelopeVideoDialog,
              closeModal: e.closeModal
            },
            j.createElement(
              "div",
              { className: ha.a.Container },
              j.createElement(
                "div",
                { className: ha.a.Column },
                j.createElement(
                  "div",
                  { className: ha.a.StoryHeader },
                  Object(G.d)("#Lunar2020_StoryTitle")
                ),
                j.createElement(
                  "div",
                  { className: ha.a.StorySubHeader },
                  Object(G.d)("#Lunar2020_StorySubTitle")
                ),
                j.createElement(
                  "div",
                  { className: ha.a.StorySubHeader },
                  Object(G.d)(cn[e.iDoorIndex])
                ),
                j.createElement(
                  "div",
                  { className: ha.a.StoryText },
                  Object(G.d)(dn[e.iDoorIndex])
                ),
                j.createElement(
                  "div",
                  { className: ha.a.VideoBox },
                  j.createElement(
                    "div",
                    {
                      className: Object(z.a)(ha.a.CoinText, a && ha.a.Visible)
                    },
                    Object(G.d)("#Lunar2020_ReceivedNumberOfTokens", 100)
                  ),
                  j.createElement(
                    "video",
                    {
                      autoPlay: e.bIsFirstOpen,
                      muted: !0,
                      className: ha.a.LunarNewYearOpenEnvelopeVideo
                    },
                    j.createElement("source", { src: o, type: "video/mp4" }),
                    j.createElement("source", { src: r, type: "video/webm" }),
                    Object(G.d)("#Lunar2020_ErrorLoadingVideo")
                  )
                )
              ),
              j.createElement(
                "div",
                { className: ha.a.Column },
                j.createElement(
                  "div",
                  { className: ha.a.StoryPicture },
                  j.createElement("img", {
                    src: Zt.GetStoryImage(e.iDoorIndex)
                  })
                ),
                !i &&
                  j.createElement(
                    "div",
                    { className: ha.a.CheckBackText },
                    Object(G.d)("#Lunar2020_CheckBackEachDayForStory")
                  )
              )
            ),
            j.createElement(
              "div",
              { className: ha.a.Links },
              j.createElement(
                "div",
                { className: ha.a.MarketLink },
                j.createElement(
                  "a",
                  { href: k.c.STORE_BASE_URL + "lunarnewyearmarket" },
                  Object(G.d)("#Lunar2020_LinkFromVideoToMarket")
                )
              ),
              j.createElement(
                "div",
                { className: ha.a.MarketLink, onClick: e.closeModal },
                Object(G.d)("#Lunar2020_LinkBackToSale")
              )
            )
          );
        },
        un = a("ZlHF"),
        mn = a.n(un),
        hn = a("gyoR"),
        vn = (a("bUNj"), a("SG7E")),
        _n = (function() {
          function e() {
            (this.m_mapAppToShortDesc = new Map()),
              (this.m_mapAppPromises = new Map());
          }
          return (
            (e.prototype.BHasShortDesc = function(e) {
              return this.m_mapAppToShortDesc.has(e);
            }),
            (e.prototype.GetShortDesc = function(e) {
              return this.m_mapAppToShortDesc.get(e);
            }),
            (e.Get = function() {
              return (
                e.s_ShortDescStore || (e.s_ShortDescStore = new e()).Init(),
                e.s_ShortDescStore
              );
            }),
            (e.prototype.Init = function() {}),
            (e.prototype.LoadShortDesc = function(a, n) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t;
                return Object(D.e)(this, function(e) {
                  return this.m_mapAppToShortDesc.has(a)
                    ? [2, !0]
                    : this.m_mapAppPromises.has(a)
                    ? [2, this.m_mapAppPromises.get(a)]
                    : ((t = this.InternalLoadShortDesc(a, n)),
                      this.m_mapAppPromises.set(a, t),
                      [2, t]);
                });
              });
            }),
            (e.prototype.InternalLoadShortDesc = function(r, i) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n, o;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        e.trys.push([0, 2, , 3]),
                        (t = k.c.STORE_BASE_URL + "api/ajaxgetappshortdesc"),
                        (a = {
                          appid: r,
                          cc: k.c.COUNTRY,
                          l: k.c.LANGUAGE,
                          origin: self.origin
                        }),
                        [
                          4,
                          _.a.get(t, {
                            params: a,
                            cancelToken: i ? i.token : void 0
                          })
                        ]
                      );
                    case 1:
                      return (n = e.sent()) &&
                        n.data &&
                        n.data.short_description
                        ? (this.m_mapAppToShortDesc.set(
                            r,
                            n.data.short_description
                          ),
                          [2, !0])
                        : [3, 3];
                    case 2:
                      return (
                        (o = e.sent()),
                        console.error(
                          "CAppShortDescriptionStore.LoadBatchShortDesc failed: ",
                          o
                        ),
                        [3, 3]
                      );
                    case 3:
                      return [2, !1];
                  }
                });
              });
            }),
            e
          );
        })(),
        bn = (function() {
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
        gn = (function() {
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
                e = Object(k.f)("demoeventstore", "application_config");
              this.ValidateStoreDefault(e) &&
                e.forEach(function(e) {
                  t.m_mapAppToDemoInfo.set(e.appid, new bn(e));
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
                Object(D.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n,
                    o,
                    r = this;
                  return Object(D.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return this.m_sFeaturedCollection &&
                          this.m_sInfoCollection
                          ? ((t = new Array()),
                            (a = new Array()),
                            i.forEach(function(e) {
                              r.m_mapAppToDemoInfo.has(e)
                                ? r.m_mapAppIDToLoadPromise.has(e) &&
                                  a.push(r.m_mapAppIDToLoadPromise.get(e))
                                : t.push(e);
                            }),
                            0 === t.length && 0 === a.length
                              ? [2, !0]
                              : 0 === t.length && 1 === a.length
                              ? [2, a[0]]
                              : (0 < t.length &&
                                  ((n = this.InternalLoadAppIDsBatch(t, s, l)),
                                  t.forEach(function(e) {
                                    return r.m_mapAppIDToLoadPromise.set(e, n);
                                  }),
                                  a.push(n)),
                                (o = !0),
                                [
                                  4,
                                  Promise.all(a).then(function(e) {
                                    o = Boolean(o && e);
                                  })
                                ]))
                          : (console.error(
                              "DemoStore: LoadAppIDsBatch no collection initialized"
                            ),
                            [2, !1]);
                      case 1:
                        return e.sent(), [2, o];
                    }
                  });
                })
              );
            }),
            (e.prototype.InternalLoadAppIDsBatch = function(r, i, s) {
              return (
                void 0 === i && (i = !1),
                Object(D.b)(this, void 0, void 0, function() {
                  var t,
                    a,
                    n,
                    o = this;
                  return Object(D.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          e.trys.push([0, 2, , 3]),
                          (t =
                            k.c.STORE_BASE_URL +
                            "saleaction/ajaxgetdemoevents"),
                          [
                            4,
                            _.a.get(t, {
                              params: {
                                appids: r,
                                cc: k.c.COUNTRY || "US",
                                origin: self.origin,
                                collectionid_featured:
                                  "gamefestival2020featured",
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
                              o.m_mapAppToDemoInfo.set(e.appid, new bn(e));
                            }),
                            C.c.RegisterClanEvents(a.data.events),
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
            (e.prototype.EnsurePartnerEventLoadedForDemo = function(n, o) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(D.e)(this, function(e) {
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
                              C.c.LoadBatchPartnerEventsByAnnouncementGID(
                                t,
                                null,
                                o
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
        yn = (function() {
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
            (e.prototype.LoadTrailersForApp = function(r) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n, o;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_mapAppToTrailers.has(r)
                        ? [2, this.m_mapAppToTrailers.get(r)]
                        : ((t = k.c.STORE_BASE_URL + "api/appdetails"),
                          (a = {
                            appids: r,
                            filters: "movies",
                            origin: self.origin
                          }),
                          [4, _.a.get(t, { params: a })]);
                    case 1:
                      return (
                        (n = e.sent()) &&
                        n.data &&
                        n.data[r] &&
                        1 == n.data[r].success
                          ? ((o = n.data[r].data.movies),
                            this.m_mapAppToTrailers.set(r, o || []))
                          : console.error(
                              "LoadTrailersForApp: failed for appid: " + r,
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
        En = a("Z1oF"),
        Sn = a("YVfL"),
        fn = a.n(Sn),
        Cn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                config: a.SetupHardcodedConfig(
                  pt.a.parse(e.props.history.location.search.substring(1))
                ),
                bLoaded: !1
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          var a;
          return (
            Object(D.d)(e, t),
            ((a = e).prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "SaleSectionEventScheduleInner to unload"
              );
            }),
            (e.SetupHardcodedConfig = function(e) {
              L.a.ParseDevNowOverride(e);
              var t = {
                sCollection: "gamefestival2020",
                sInfoCollcetoin: "gamefestival2020info"
              };
              return (
                gn.Get().SetCollectionInfo(t.sCollection, t.sInfoCollcetoin), t
              );
            }),
            (e.prototype.componentDidMount = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n;
                return Object(D.e)(this, function(e) {
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
                        (a = pt.a.parse(
                          this.props.history.location.search.substring(1)
                        )),
                        Tn.Init(a, this.OnClanEventGIDSelectionChange),
                        Tn.BIsSomeEventSelected()
                          ? ((n = void 0),
                            t.GetCalendarEventList().forEach(function(e) {
                              e.unique_id === Tn.GetClanEventGID() && (n = e);
                            }),
                            n
                              ? [
                                  4,
                                  Promise.all([
                                    C.c.LoadPartnerEventFromClanEventGID(
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
                L.a.BHasTimeOverride() &&
                  (t.t = s.a.unix(L.a.GetTimeNowWithOverride()).format()),
                e || L.a.BHasTimeOverride()
                  ? this.props.history.push("?" + pt.a.stringify(t))
                  : this.props.history.push("?");
            }),
            (e.prototype.GetScheduleCalendarStore = function() {
              return v({ collectionid: this.state.config.sCollection }), N();
            }),
            (e.prototype.render = function() {
              if (!this.state.bLoaded) return null;
              for (
                var e = this.GetScheduleCalendarStore(),
                  a = new Array(),
                  t = function(t) {
                    if (
                      t &&
                      so(
                        n.props.activeTab,
                        t.appid,
                        "game",
                        n.props.nSaleDayIndex
                      ) &&
                      (a.some(function(e) {
                        return t.appid == e;
                      }) || a.push(t.appid),
                      4 <= a.length)
                    )
                      return "break";
                  },
                  n = this,
                  o = 0,
                  r = e.GetCalendarEventList();
                o < r.length;
                o++
              ) {
                if ("break" === t(r[o])) break;
              }
              return j.createElement(
                "div",
                { className: Object(z.a)(mn.a.SaleSection, fn.a.SaleSchedCtn) },
                j.createElement(
                  "div",
                  { className: ft.a.SaleSectionHeader },
                  Object(G.d)("#Sale_EventSchedule")
                ),
                j.createElement(
                  "div",
                  { className: fn.a.SectionCtn },
                  j.createElement(In, {
                    calendarStore: e,
                    promotionName: this.props.promotionname,
                    activeTab: this.props.activeTab,
                    nSaleDayIndex: this.props.nSaleDayIndex
                  }),
                  Boolean(Tn.BIsSomeEventSelected())
                    ? j.createElement(jn, { eventGID: Tn.GetClanEventGID() })
                    : j.createElement(An, { rgAppIDs: a })
                )
              );
            }),
            Object(D.c)(
              [W.a],
              e.prototype,
              "OnClanEventGIDSelectionChange",
              null
            ),
            (e = a = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        On = Object(i.g)(Cn),
        In = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.GetCalendarItemsForRange = function() {
              var e = this.props.calendarStore;
              Math.floor(Date.now() / 1e3 / 3600);
              return e.GetCalendarEventList() || [];
            }),
            (t.prototype.render = function() {
              var t = this,
                e = this.GetCalendarItemsForRange(),
                a = new Array();
              return (
                e.forEach(function(e) {
                  so(
                    t.props.activeTab,
                    e.appid,
                    "game",
                    t.props.nSaleDayIndex
                  ) &&
                    a.push(
                      j.createElement(wn, {
                        key: "schedrow_" + e.unique_id,
                        item: e,
                        promotionName: t.props.promotionName
                      })
                    );
                }),
                console.log(a.length),
                j.createElement(
                  "div",
                  { className: Object(z.a)(fn.a.SaleSchedListCtn) },
                  a
                )
              );
            }),
            t
          );
        })(j.Component),
        Tn = new ((function() {
          function e() {}
          return (
            (e.prototype.Init = function(e, t) {
              "string" == typeof e.selectedSchedEvent &&
                "dev" === k.c.WEB_UNIVERSE &&
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
            Object(D.c)(
              [m.observable],
              e.prototype,
              "m_gidClanEventSelected",
              void 0
            ),
            e
          );
        })())(),
        wn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bLoaded: !1 }), e;
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentDidMount = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props.item),
                        (a = f.a.InitFromClanID(t.clanid)),
                        [
                          4,
                          Promise.all([
                            C.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                              a,
                              t.unique_id,
                              0
                            ),
                            zt.a.LoadAppLinkInfo([t.appid])
                          ])
                        ]
                      );
                    case 1:
                      return e.sent(), this.setState({ bLoaded: !0 }), [2];
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              var e = this.props.item,
                t = C.c.GetClanEventModel(e.unique_id),
                a = zt.a.GetAppLinkInfo(e.appid);
              return t && a
                ? j.createElement(Dn, { item: this.props.item })
                : j.createElement(
                    "div",
                    { className: fn.a.SaleSchedRowProxy },
                    j.createElement(ne.a, { size: "small" })
                  );
            }),
            e
          );
        })(j.Component),
        Dn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.OnToggleSelection = function() {
              Tn.ToggleClanEventGID(this.props.item.unique_id);
            }),
            (t.prototype.render = function() {
              var e,
                t = this.props.item,
                a = C.c.GetClanEventModel(t.unique_id),
                n = zt.a.GetAppLinkInfo(t.appid);
              return j.createElement(
                "div",
                {
                  onClick: this.OnToggleSelection,
                  className: Object(z.a)(
                    ((e = {}),
                    (e[fn.a.SaleSchedRow] = !0),
                    (e[fn.a.SchedRowSelected] = Tn.BIsEventSelected(
                      this.props.item.unique_id
                    )),
                    e)
                  )
                },
                j.createElement(de, { event: a }),
                j.createElement(
                  "div",
                  { className: fn.a.Time },
                  Object(En.f)(a.startTime)
                ),
                j.createElement(
                  "div",
                  { className: fn.a.DetailsCtn },
                  j.createElement("div", { className: fn.a.AppTitle }, n.title),
                  j.createElement(
                    "div",
                    { className: fn.a.EventTitle },
                    a.GetNameWithFallback(Object(pe.d)(k.c.LANGUAGE))
                  )
                ),
                j.createElement("div", { className: fn.a.Icon }, "icon")
              );
            }),
            Object(D.c)([W.a], t.prototype, "OnToggleSelection", null),
            t
          );
        })(j.Component),
        An = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoading: !zt.b.BHasAllAppLinks(e.props.rgAppIDs) }),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.DoLoadCapsules();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              zt.b.BHasAllAppLinks(this.props.rgAppIDs) ||
                this.state.bLoading ||
                this.setState({ bLoading: !0 }, this.DoLoadCapsules);
            }),
            (e.prototype.DoLoadCapsules = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                return Object(D.e)(this, function(e) {
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
              if (this.state.bLoading) return j.createElement(ne.a, null);
              var a = new Array();
              return (
                this.props.rgAppIDs.forEach(function(e) {
                  var t = zt.a.GetAppLinkInfo(e);
                  t &&
                    a.push(
                      j.createElement(kn, {
                        key: "democap_" + t.appid,
                        appCapsule: t
                      })
                    );
                }),
                j.createElement(
                  "div",
                  { className: Object(z.a)(fn.a.SaleSchedGridCtn) },
                  a
                )
              );
            }),
            e
          );
        })(j.Component),
        kn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bDemoLoadComplete: gn
                  .Get()
                  .BHasDemoEventInfo(e.props.appCapsule.appid)
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel("DemoAppCapsule to unload");
            }),
            (e.prototype.componentDidMount = function() {
              this.DoLoadAboutAndDemoInfo();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              e.appCapsule.appid === this.props.appCapsule.appid ||
                gn.Get().BHasDemoEventInfo(this.props.appCapsule.appid) ||
                this.setState(
                  { bDemoLoadComplete: !1 },
                  this.DoLoadAboutAndDemoInfo
                );
            }),
            (e.prototype.DoLoadAboutAndDemoInfo = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.bDemoLoadComplete
                        ? [3, 2]
                        : ((t = this.props.appCapsule.appid),
                          [
                            4,
                            gn
                              .Get()
                              .LoadAppIDsBatch([t], !0, this.m_cancelSignal)
                          ]);
                    case 1:
                      e.sent(),
                        this.setState({ bDemoLoadComplete: !0 }),
                        (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.OnPlayApp = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props.appCapsule.appid),
                        [
                          4,
                          gn.Get().LoadAppIDsBatch([t], !0, this.m_cancelSignal)
                        ]
                      );
                    case 1:
                      return (
                        e.sent(),
                        (a = gn.Get().GetDemoEventInfo(t)) &&
                          a.demo_appid &&
                          Object(vn.a)(a.demo_appid),
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
                t = gn.Get().GetDemoEventInfo(e.appid);
              if (t && t.info_clan_event_gid) {
                var a = C.c.GetClanEventModel(t.info_clan_event_gid);
                this.ShowEventInModel(a);
              }
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props.appCapsule,
                a = gn.Get().BHasAboutDemo(t.appid);
              return j.createElement(
                "div",
                { className: fn.a.DemoCapsuleCtn },
                this.state.bDemoLoadComplete
                  ? j.createElement(
                      j.Fragment,
                      null,
                      j.createElement("img", { src: t.capsule, alt: t.title }),
                      j.createElement(
                        "div",
                        { className: fn.a.DemoCapsuleActionCtn },
                        j.createElement(
                          R.c,
                          { onClick: this.OnPlayApp },
                          Object(G.d)("#Sale_PlayDemo")
                        ),
                        a &&
                          j.createElement(
                            R.c,
                            { onClick: this.OnShowAboutDemo },
                            Object(G.d)("#Button_About")
                          )
                      )
                    )
                  : j.createElement(ne.a, null),
                Boolean(this.state.showEventInModal) &&
                  j.createElement(
                    De.g,
                    { className: Sa.a.StoreHeaderAdjust },
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
            Object(D.c)([W.a], e.prototype, "OnPlayApp", null),
            Object(D.c)([W.a], e.prototype, "ShowEventInModel", null),
            Object(D.c)([W.a], e.prototype, "OnShowAboutDemo", null),
            e
          );
        })(j.Component),
        jn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.eventGID;
              if (!e || !C.c.BHasClanEventModel(e)) return null;
              var t = C.c.GetClanEventModel(e),
                a = zt.a.GetAppLinkInfo(t.appid);
              return j.createElement(
                "div",
                { className: fn.a.SaleSchedDetailCtn },
                j.createElement(Gn, { appCapsule: a }),
                j.createElement(Ln, { appCapsule: a }),
                j.createElement(Nn, { appCapsule: a }),
                j.createElement(xn, { event: t })
              );
            }),
            t
          );
        })(j.Component),
        Gn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = _.a.CancelToken.source()), (e.state = {}), e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "SaleAppWideDetailWithAction to unload"
              );
            }),
            (e.prototype.OnPlayApp = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props.appCapsule.appid),
                        [
                          4,
                          gn.Get().LoadAppIDsBatch([t], !1, this.m_cancelSignal)
                        ]
                      );
                    case 1:
                      return (
                        e.sent(),
                        (a = gn.Get().GetDemoEventInfo(t)) &&
                          a.demo_appid &&
                          Object(vn.a)(a.demo_appid),
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
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props.appCapsule.appid),
                        (a = I.a.BIsGameWishlisted(t)),
                        [4, I.a.UpdateGameWishlist(t, !a)]
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
              var e = this.props.appCapsule;
              return j.createElement(
                "div",
                { className: fn.a.SaleAppWideCtn },
                j.createElement("img", {
                  className: fn.a.WideHeader,
                  src: e.capsule,
                  alt: e.title
                }),
                j.createElement(
                  "div",
                  { className: fn.a.WideDetailCtn },
                  j.createElement("div", { className: fn.a.AppTitle }, e.title),
                  j.createElement(
                    "div",
                    { className: fn.a.ReleaseDate },
                    e.release
                  )
                ),
                j.createElement(
                  "div",
                  { className: fn.a.GameButtons },
                  Boolean(I.a.BOwnsApp(e.appid))
                    ? j.createElement(
                        R.c,
                        { disabled: !0 },
                        Object(G.d)("#Sale_InLibrary")
                      )
                    : j.createElement(
                        R.c,
                        {
                          onClick: this.ToggleWishlist,
                          disabled: this.state.bUpdatingWishlist
                        },
                        Boolean(this.state.bUpdatingWishlist) &&
                          j.createElement(ne.a, { size: "small" }),
                        Object(G.d)(
                          I.a.BIsGameWishlisted(e.appid)
                            ? "#Sale_Wishlisted"
                            : "#Sale_AddToWishlist"
                        )
                      ),
                  j.createElement(
                    R.c,
                    { onClick: this.OnPlayApp },
                    Object(G.d)("#Sale_PlayDemo")
                  )
                )
              );
            }),
            Object(D.c)([W.a], e.prototype, "OnPlayApp", null),
            Object(D.c)([W.a], e.prototype, "ToggleWishlist", null),
            e
          );
        })(j.Component),
        Ln = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.appCapsule;
              return j.createElement(
                "div",
                { className: fn.a.SaleTagAndOS },
                j.createElement(
                  "div",
                  { className: Ra.a.StoreSaleWidgetTags },
                  e.tags
                    ? e.tags.map(function(e) {
                        return j.createElement(
                          "div",
                          { key: "tag_" + e.tagid, className: Ra.a.AppTag },
                          e.name
                        );
                      })
                    : void 0
                ),
                j.createElement(Qa.f, { item: e })
              );
            }),
            t
          );
        })(j.Component),
        Nn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.appCapsule;
              return j.createElement(
                "div",
                { className: fn.a.ArtistStatementAndHiglghtCtn },
                j.createElement(Mn, { appCapsule: e }),
                j.createElement(Bn, { appCapsule: e })
              );
            }),
            t
          );
        })(j.Component),
        Mn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingDemoDetails: !gn
                  .Get()
                  .BHasDemoEventInfo(e.props.appCapsule.appid)
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.DoLoading();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              e.appCapsule.appid !== this.props.appCapsule.appid &&
                this.setState(
                  {
                    bLoadingDemoDetails: !gn
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
              return Object(D.b)(this, void 0, void 0, function() {
                var t;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.bLoadingDemoDetails ||
                        this.state.bLoadingDescription
                        ? ((t = this.props.appCapsule.appid),
                          [
                            4,
                            Promise.all([
                              gn
                                .Get()
                                .LoadAppIDsBatch([t], !0, this.m_cancelSignal),
                              _n.Get().LoadShortDesc(t, this.m_cancelSignal)
                            ])
                          ])
                        : [3, 2];
                    case 1:
                      e.sent(),
                        gn
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
                return j.createElement(ne.a, null);
              var t = this.props.appCapsule.appid,
                a = gn.Get().GetDemoEventInfo(t),
                n =
                  a && a.BHasArtistStatement()
                    ? C.c.GetClanEventModel(a.info_clan_event_gid)
                    : void 0,
                o = Object(pe.d)(k.c.LANGUAGE),
                r = _n.Get().GetShortDesc(t);
              return j.createElement(
                "div",
                { className: fn.a.StatementCtn },
                Boolean(n)
                  ? j.createElement(
                      "div",
                      null,
                      j.createElement(Ba.a, {
                        text: n.GetDescriptionWithFallback(o),
                        partnerEventStore: C.c,
                        showErrorInfo: !1,
                        event: n
                      }),
                      j.createElement(
                        R.c,
                        {
                          onClick: function() {
                            return e.ShowEventInModel(n);
                          }
                        },
                        Object(G.d)("#EventEmail_Button_ClickForMoreDetails")
                      )
                    )
                  : j.createElement("div", null, r),
                Boolean(this.state.showEventInModal) &&
                  j.createElement(
                    De.g,
                    { className: Sa.a.StoreHeaderAdjust },
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
            Object(D.c)([W.a], e.prototype, "DoLoading", null),
            Object(D.c)([W.a], e.prototype, "ShowEventInModel", null),
            e
          );
        })(j.Component),
        Bn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bTrailerLoaded: yn
                  .Get()
                  .BHasTrailerForApp(e.props.appCapsule.appid),
                bPlayVideo: !1,
                nThumbnailedHovered: void 0
              }),
              e
            );
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.DoTrailerLoad();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              e.appCapsule.appid !== this.props.appCapsule.appid &&
                this.setState(
                  {
                    bTrailerLoaded: yn
                      .Get()
                      .BHasTrailerForApp(this.props.appCapsule.appid)
                  },
                  this.DoTrailerLoad
                );
            }),
            (e.prototype.DoTrailerLoad = function() {
              return Object(D.b)(this, void 0, void 0, function() {
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.bTrailerLoaded
                        ? [3, 2]
                        : [
                            4,
                            yn
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
              var e = yn.Get().GetTrailersForApp(this.props.appCapsule.appid),
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
                return j.createElement(ne.a, null);
              var e = this.props.appCapsule,
                n = this.GetFirstHighlightTrailer();
              if (!n && !e.screenshot_list && 0 !== e.screenshot_list.length)
                return null;
              var t =
                  n ||
                  (void 0 !== this.state.nThumbnailedHovered &&
                    -1 !== this.state.nThumbnailedHovered)
                    ? this.state.nThumbnailedHovered
                    : 0,
                o = new Array();
              return (
                e.screenshot_list.forEach(function(e, t) {
                  (n || 0 < t) &&
                    o.length < 3 &&
                    ((e = e.replace("http://", "https://")),
                    o.push(
                      j.createElement("img", {
                        key: t + "_" + e,
                        className: fn.a.ScreenshotThumbnail,
                        src: e,
                        onMouseEnter: function() {
                          return a.OnThumbNailHovered(t);
                        }
                      })
                    ));
                }),
                j.createElement(
                  "div",
                  { className: fn.a.MediaContainer },
                  j.createElement(
                    "div",
                    { className: fn.a.MainMediaCtn },
                    Boolean(n) &&
                      j.createElement(
                        "div",
                        {
                          className: Object(z.a)(
                            fn.a.VideoThumbnail,
                            this.state.bPlayVideo ? fn.a.videoPlaying : null
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
                                { className: fn.a.VideoPlayButton },
                                j.createElement(P.t, null)
                              )
                            )
                          : j.createElement("img", {
                              src: e.screenshot_list[t]
                            })
                      ),
                    Boolean(!n) &&
                      j.createElement("img", { src: e.screenshot_list[t] })
                  ),
                  Boolean(0 < o.length) &&
                    j.createElement(
                      "div",
                      {
                        className: fn.a.Screenshot,
                        onMouseLeave: function() {
                          return a.OnThumbNailHovered(-1);
                        }
                      },
                      o
                    ),
                  j.createElement(
                    "div",
                    {
                      className: Object(z.a)(
                        fn.a.VideoLargeContainer,
                        this.state.bPlayVideo ? fn.a.videoPlaying : null
                      ),
                      onClick: this.TogglePlayTrailer
                    },
                    this.state.bPlayVideo &&
                      j.createElement("video", {
                        className: fn.a.VideoLarge,
                        src: n.webm[480].replace("http://", "https://"),
                        controls: !0,
                        autoPlay: !0
                      }),
                    j.createElement(
                      "div",
                      { onClick: this.TogglePlayTrailer },
                      j.createElement(P.H, null)
                    )
                  )
                )
              );
            }),
            Object(D.c)([W.a], e.prototype, "DoTrailerLoad", null),
            Object(D.c)([W.a], e.prototype, "TogglePlayTrailer", null),
            Object(D.c)([W.a], e.prototype, "OnThumbNailHovered", null),
            e
          );
        })(j.Component),
        xn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(D.d)(e, t),
            (e.prototype.ShowEventInModel = function(e) {
              this.state.showEventInModal != e &&
                this.setState({ showEventInModal: e });
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props.event,
                a = t.BIsEventInFuture(),
                n = Object(pe.d)(k.c.LANGUAGE);
              return j.createElement(
                "div",
                { className: fn.a.EventWideCtn },
                j.createElement(
                  "div",
                  { className: fn.a.Title },
                  Object(G.d)("#Sale_EventSchedule")
                ),
                j.createElement("hr", null),
                j.createElement(
                  "div",
                  { className: fn.a.EventWideDetailCtn },
                  j.createElement(
                    "div",
                    { className: fn.a.EventDetails },
                    j.createElement(
                      "div",
                      { className: fn.a.EventIcon },
                      "Icon"
                    ),
                    j.createElement(
                      "div",
                      null,
                      j.createElement(
                        "div",
                        { className: fn.a.EventTitle },
                        t.GetNameWithFallback(n)
                      ),
                      j.createElement(
                        "div",
                        { className: fn.a.EventTime },
                        a
                          ? Object(G.i)(t.startTime) +
                              " " +
                              Object(G.l)(t.startTime)
                          : Object(G.m)(Date.now() / 1e3 - t.startTime)
                      )
                    )
                  ),
                  j.createElement(
                    "div",
                    { className: fn.a.EventOptionsCtn },
                    j.createElement(
                      R.c,
                      {
                        onClick: function() {
                          return e.ShowEventInModel(e.props.event);
                        }
                      },
                      Object(G.d)("#Sale_SeeEventDetails")
                    ),
                    a &&
                      j.createElement(ie.a, {
                        eventModel: t,
                        eventGID: t.GID,
                        lang: n
                      })
                  )
                ),
                Boolean(this.state.showEventInModal) &&
                  j.createElement(
                    De.g,
                    { className: Sa.a.StoreHeaderAdjust },
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
            Object(D.c)([W.a], e.prototype, "ShowEventInModel", null),
            e
          );
        })(j.Component),
        Rn = a("oVVc"),
        Pn = a("l2mU"),
        Hn = a("31dG"),
        Fn = a.n(Hn);
      function zn(e, t) {
        for (var a = [], n = 0, o = e.capsules; n < o.length; n++) {
          var r = o[n];
          if ("sub" === r.type) {
            var i = Rn.b.GetPackageInfo(r.id);
            if (i) {
              if ((console.log(JSON.stringify(i)), i.renewal_time_amount === t))
                return i.packageid;
            } else a.push(r.id);
          }
        }
        0 < a.length && Rn.b.LoadPackageInfo(a);
      }
      var Un = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.OnClickPurchase = function(e) {
              I.a.AddToCart(
                e,
                this.props.sub_package_id,
                k.c.STORE_BASE_URL + "cart/addtocart",
                k.c.STORE_BASE_URL + "cart"
              );
            }),
            (t.prototype.render = function() {
              var e = Rn.b.GetPackageInfo(this.props.sub_package_id),
                t = Rn.b.GetPackageInfo(this.props.compare_package_id);
              if (!e || (!t && this.props.compare_package_id))
                return (
                  Rn.b.LoadPackageInfo([
                    this.props.sub_package_id,
                    this.props.compare_package_id
                  ]),
                  null
                );
              if (!e.formatted_final_price) return null;
              var a = e.formatted_final_price,
                n = Object(Pn.a)(e, t),
                o = [a, n || ""],
                r = G.d.apply(
                  void 0,
                  Object(D.g)([this.props.price_loc_token], o)
                ),
                i = G.d.apply(
                  void 0,
                  Object(D.g)([this.props.body_loc_token], o)
                ),
                s = G.d.apply(
                  void 0,
                  Object(D.g)(["#Sale_Subscription_Save"], o)
                ),
                l = j.createElement("div", { className: Fn.a.LogoImg }),
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
                  ? j.createElement(
                      "div",
                      {
                        className: Object(z.a)(
                          Fn.a.PurchaseButton,
                          Fn.a.AlreadyOwnedPackage
                        )
                      },
                      Object(G.d)("#Sale_Subscription_AlreadyOwnedPackage")
                    )
                  : c
                  ? j.createElement(
                      "div",
                      {
                        className: Object(z.a)(
                          Fn.a.PurchaseButton,
                          Fn.a.AlreadyOwnedApp
                        )
                      },
                      Object(G.d)("#Sale_Subscription_AlreadyOwnedApp")
                    )
                  : j.createElement(
                      "div",
                      {
                        className: Object(z.a)(
                          Fn.a.PurchaseButton,
                          Fn.a.UnOwned
                        ),
                        onClick: this.OnClickPurchase
                      },
                      this.props.button_text
                    )),
                j.createElement(
                  "div",
                  { className: Fn.a.SubscriptionBlock },
                  l,
                  j.createElement(
                    "div",
                    { className: Fn.a.PriceBlock },
                    j.createElement(
                      "span",
                      { className: Fn.a.PriceDisplay },
                      r
                    ),
                    Boolean(n) &&
                      j.createElement(
                        "span",
                        { className: Fn.a.SavingsDisplay },
                        s
                      )
                  ),
                  j.createElement("div", { className: Fn.a.BodyTextBlock }, i),
                  d
                )
              );
            }),
            Object(D.c)([W.a], t.prototype, "OnClickPurchase", null),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        Wn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var e = zn(this.props.section, 12),
                t = zn(this.props.section, 3),
                a = zn(this.props.section, 1);
              return j.createElement(
                "div",
                { className: Fn.a.MainBlock },
                j.createElement(
                  "span",
                  { className: Fn.a.SelectAPlan },
                  Object(G.d)("#Sale_Subscription_SelectPlan")
                ),
                j.createElement(
                  "div",
                  { className: Fn.a.SubscriptionListBlock },
                  j.createElement(Un, {
                    sub_package_id: e,
                    compare_package_id: a,
                    price_loc_token: "#Sale_Subscription_Annual_Price",
                    body_loc_token: "#Sale_Subscription_Annual_Body",
                    button_text: Object(G.d)("#Sale_Subscription_Annual_Button")
                  }),
                  j.createElement(Un, {
                    sub_package_id: t,
                    price_loc_token: "#Sale_Subscription_Quarterly_Price",
                    body_loc_token: "#Sale_Subscription_Quarterly_Body",
                    button_text: Object(G.d)(
                      "#Sale_Subscription_Quarterly_Button"
                    )
                  }),
                  j.createElement(Un, {
                    sub_package_id: a,
                    price_loc_token: "#Sale_Subscription_Monthly_Price",
                    body_loc_token: "#Sale_Subscription_Monthly_Body",
                    button_text: Object(G.d)(
                      "#Sale_Subscription_Monthly_Button"
                    )
                  })
                )
              );
            }),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        Vn = a("R+8l"),
        Zn = function(e) {
          var t = e.tab,
            a = e.language,
            n = e.onTabSelected,
            o = e.classNames,
            r = (function(e, t) {
              return (
                (e.localized_label &&
                  (e.localized_label[t] || e.localized_label[0])) ||
                ("#Sale_default_label" === e.default_label
                  ? ""
                  : Object(G.d)(e.default_label))
              );
            })(t, a);
          return r
            ? j.createElement(
                "div",
                {
                  className: Object(z.a)(mn.a.SaleTab, o),
                  onClick: function() {
                    return n(t);
                  }
                },
                r
              )
            : null;
        },
        Yn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.RenderTabCapsules = function() {
              var e = this.props.tab;
              if (!e || !e.capsules || !e.capsules.length)
                return j.createElement(
                  "div",
                  { className: mn.a.TabContentsElement },
                  Object(G.d)("#SalePage_Tabs_AllContents")
                );
              for (
                var t = new Array(), a = 0, n = e.capsules;
                a < n.length;
                a++
              ) {
                var o = n[a],
                  r = null;
                r =
                  "bundle" === o.type
                    ? Vn.a.GetBundleInfo(o.id)
                    : "sub" === o.type
                    ? Rn.b.GetPackageInfo(o.id)
                    : We.a.GetAppInfo(o.id);
                var i = Object(G.d)("#AppType_" + o.type) + " " + o.id,
                  s = r && r.name ? r.name : i,
                  l =
                    void 0 === o.visibility_index
                      ? s
                      : Object(G.d)("#Sale_TabDayIndex", o.visibility_index),
                  c = void 0 === o.visibility_index ? -1 : o.visibility_index;
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
                      { key: e.sKey, className: mn.a.TabContentsElement },
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
                { className: Object(z.a)(mn.a.SaleSection), style: po(t, a) },
                j.createElement(eo, Object(D.a)({}, this.props)),
                j.createElement(
                  "div",
                  { className: mn.a.TabContentsContainer },
                  this.RenderTabCapsules()
                )
              );
            }),
            (t = Object(D.c)([o.observer], t))
          );
        })(j.Component),
        Jn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
            (t.prototype.render = function() {
              var a = this,
                e = this.props,
                n = e.section,
                t = e.event,
                o = e.language,
                r = e.activeTab,
                i = Object(z.a)(mn.a.SaleSectionTabsTab),
                s = n.tabs.map(function(e) {
                  var t = "Tab_" + e.unique_id;
                  return j.createElement(Zn, {
                    key: t,
                    tab: e,
                    language: o,
                    classNames: Object(z.a)(
                      i,
                      e === r && mn.a.SaleSectionTabsSelected
                    ),
                    onTabSelected: function(e) {
                      return a.props.onTabSelected(n, e);
                    }
                  });
                });
              return j.createElement(
                "div",
                {
                  className: Object(z.a)(
                    mn.a.SaleSection,
                    mn.a.SaleSectionTabs
                  ),
                  style: po(n, t)
                },
                j.createElement(eo, Object(D.a)({}, this.props)),
                j.createElement(
                  "div",
                  {
                    className: Object(z.a)(
                      ft.a.SaleSectionContainer,
                      mn.a.SaleSectionTabsList
                    )
                  },
                  s
                )
              );
            }),
            t
          );
        })(j.Component),
        Qn = j.lazy(function() {
          return Promise.all([a.e(0), a.e(1), a.e(6)]).then(
            a.bind(null, "NIbt")
          );
        });
      var qn = (function(t) {
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
                var t, a, n, o;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = k.b.CLANSTEAMID),
                        (a = k.b.ANNOUNCEMENT_GID),
                        this.props.eventModel
                          ? [3, 2]
                          : [
                              4,
                              C.c.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                                new f.a(t),
                                a,
                                null
                              )
                            ]
                      );
                    case 1:
                      (n = e.sent()),
                        (o = n.GetDayIndexFromEventStart()),
                        this.state.nSaleDayIndex != o &&
                          this.setState({ nSaleDayIndex: o }),
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
                  : C.c.GetClanEventFromAnnouncementGID(k.b.ANNOUNCEMENT_GID);
                t && (t.m_overrideCurrentDay = e),
                  this.setState({ nSaleDayIndex: e });
              }
            }),
            (e.prototype.render = function() {
              var e =
                this.props.eventModel ||
                C.c.GetClanEventFromAnnouncementGID(k.b.ANNOUNCEMENT_GID);
              if (e && void 0 !== this.state.nSaleDayIndex) {
                var t = this.props.bIsPreview,
                  a = e.GetImageURLWithFallback(
                    "sale_header",
                    this.props.language
                  ),
                  n = null,
                  o = null;
                Zt.BHasSalePageBackgroundOverride() &&
                  ((a = Zt.GetSalePageBackgroundOverride()),
                  (n = Zt.GetSalePageBackgroundWEBM()),
                  (o = Zt.GetSalePageBackgroundMP4()));
                var r =
                    e.BHasBroadcastEnabled() &&
                    ("1688220857098505775" == e.GID ||
                      "1590261853006818581" == e.GID),
                  i = A.a.Get().GetPartnerEventPermissions(e.clanSteamID);
                return j.createElement(
                  B.a,
                  null,
                  j.createElement(
                    Xn,
                    {
                      className:
                        mn.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                      backgroundImage: a,
                      backgroundColor: t
                        ? e.jsondata.sale_background_color
                        : void 0
                    },
                    Boolean(o || n) &&
                      j.createElement(
                        "div",
                        { className: mn.a.fullscreen_bg },
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
                            className: Object(z.a)(
                              mn.a.SaleBackground,
                              mn.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                              "SaleBackground",
                              mn.a.fullscreen_bg__video
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
                          !k.c.IN_CLIENT &&
                            j.createElement("source", {
                              src: o,
                              type: "video/mp4"
                            })
                        )
                      ),
                    j.createElement(
                      "div",
                      { className: mn.a.SaleHeaderContainer },
                      e.jsondata.sale_header_overlay &&
                        j.createElement(Kn, null),
                      e.GetImageURL("sale_overlay", this.props.language) &&
                        j.createElement(
                          "div",
                          {
                            className: Object(z.a)(
                              mn.a.SaleOverlayCtn,
                              "SaleOverlayCtn"
                            )
                          },
                          j.createElement("img", {
                            className: Object(z.a)(
                              mn.a.SaleOverlay,
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
                                fontFamily: uo(
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
                                fontFamily: uo(
                                  e.jsondata.sale_font,
                                  this.props.language
                                ),
                                fontWeight: e.jsondata.sale_font_weight
                              }
                            },
                            j.createElement(Ba.a, {
                              text: e.GetDescriptionWithFallback(
                                this.props.language
                              ),
                              partnerEventStore: C.c,
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
                          mn.a.SaleOuterContainer +
                          " " +
                          mn.a["CustomStyle_" + e.jsondata.sale_vanity_id] +
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
                          B.a,
                          null,
                          j.createElement(
                            "div",
                            { className: mn.a.SaleBroadcastCtn },
                            j.createElement(
                              j.Suspense,
                              { fallback: j.createElement("div", null) },
                              j.createElement(Qn, {
                                promotionname: this.props.promotionname,
                                clanid: Number(k.b.CLANACCOUNTID),
                                event: e,
                                bIsPreview: this.props.bIsPreview,
                                language: this.props.language,
                                fnRenderBroadcastContext: r
                                  ? function() {
                                      return j.createElement(ho, null);
                                    }
                                  : null
                              })
                            )
                          )
                        ),
                      e.jsondata.sale_show_creator &&
                        j.createElement(
                          B.a,
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
                            j.createElement(La, {
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
                      j.createElement($n, {
                        bIsPreview: t,
                        event: e,
                        language: this.props.language,
                        promotionname: this.props.promotionname,
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
                          j.createElement(lo, {
                            text: Object(G.d)("#Sale_SeeAllSpecials"),
                            url: e.jsondata.sale_browsemore_url,
                            color: e.jsondata.sale_browsemore_color,
                            bgcolor: e.jsondata.sale_browsemore_bgcolor
                          })
                        ),
                      i.can_edit &&
                        j.createElement(va, {
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
                { className: Ue.a.FlexCenter, style: { height: "500px" } },
                j.createElement(ne.a, {
                  size: "medium",
                  string: Object(G.d)("#Loading")
                })
              );
            }),
            Object(D.c)([W.a], e.prototype, "OnChangeDayIndex", null),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component),
        Xn = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_refBackgroundPanel = j.createRef()), e;
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
              return j.createElement(
                "div",
                {
                  className: Object(z.a)(
                    this.props.className,
                    mn.a.SaleBackground,
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
        Kn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(D.d)(t, e),
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
        $n = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { selectedTabs: e.GetStartingTabSelections() }), e
            );
          }
          return (
            Object(D.d)(e, t),
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
              var r = this,
                e = this.props,
                i = e.event,
                s = e.language,
                l = e.promotionname,
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
                          !Jt.GetHideWishlist()) ||
                        ("dlc_onsale" == e.smart_section_type &&
                          !Jt.GetHideDLC()) ||
                        ("interactive_recommender_onsale" ==
                          e.smart_section_type &&
                          !Jt.GetHideIRList()))
                    );
                  })(e) &&
                  !k.i.logged_in
                )
                  p ||
                    ((n = j.createElement(to, {
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
                        oo,
                        Object(D.a)({ section: e, activeTab: a }, r.props)
                      );
                      break;
                    case "broadcast":
                      i.BHasBroadcastEnabled() &&
                        !u &&
                        ((n = j.createElement(mo, {
                          promotionname: l,
                          eventModel: i,
                          bIsPreview: c,
                          language: s
                        })),
                        (u = !0));
                      break;
                    case "event_description":
                      n = j.createElement(
                        ao,
                        Object(D.a)({ section: e }, r.props)
                      );
                      break;
                    case "doors":
                      n = j.createElement(rn, {
                        strFontFamily: uo(i.jsondata.sale_font, s)
                      });
                      break;
                    case "text_section":
                      n = j.createElement(
                        no,
                        Object(D.a)({ section: e }, r.props)
                      );
                      break;
                    case "tabs":
                      var o = r.state.selectedTabs.get(e);
                      m.push({ activeTab: o, elements: [] }),
                        (n = j.createElement(
                          Jn,
                          Object(D.a)({ section: e }, r.props, {
                            activeTab: o,
                            onTabSelected: r.OnTabSelected
                          })
                        ));
                      break;
                    case "vo_internal":
                      if (e.internal_section_data)
                        switch (e.internal_section_data.internal_type) {
                          case "subscription_pricing":
                            n = j.createElement(
                              Wn,
                              Object(D.a)({ section: e }, r.props)
                            );
                            break;
                          case "event_schedule":
                            n = j.createElement(
                              On,
                              Object(D.a)({ section: e }, r.props, {
                                activeTab: a
                              })
                            );
                            break;
                          case "tab_contents":
                            n = j.createElement(
                              Yn,
                              Object(D.a)({ section: e }, r.props, { tab: a })
                            );
                        }
                  }
                m[m.length - 1].elements.push(
                  j.createElement(
                    B.a,
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
                    className: mn.a.SaleSectionTabListContainer
                  },
                  e.elements
                );
              });
              return j.createElement(
                "div",
                { className: mn.a.SaleSectionListContainer },
                t
              );
            }),
            Object(D.c)([W.a], e.prototype, "OnTabSelected", null),
            (e = Object(D.c)([o.observer], e))
          );
        })(j.Component);
      var eo = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            o = j.createElement(
              "div",
              {
                className: ft.a.SaleSectionHeader,
                style: (function(e, t, a) {
                  return {
                    fontFamily: uo(t.jsondata.sale_font, a),
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
              (function(e, t, a, n) {
                var o =
                    e.localized_label[t] ||
                    e.localized_label[0] ||
                    ("#Sale_default_label" === e.default_label
                      ? ""
                      : Object(G.d)(e.default_label)),
                  r =
                    e.localized_label_image &&
                    (e.localized_label_image[t] || e.localized_label_image[0]);
                {
                  if (n || !r) return o;
                  var i =
                    k.c.MEDIA_CDN_COMMUNITY_URL + "images/clans/" + a + "/" + r;
                  return j.createElement("img", {
                    loading: "lazy",
                    src: i,
                    alt: o
                  });
                }
              })(t, n, a.clanSteamID.GetAccountID())
            );
          return (
            t.label_link &&
              (o = j.createElement(
                "a",
                {
                  href:
                    (k.c.IN_CLIENT ? "steam://openurl/" : "") +
                    co(t.label_link),
                  target: k.c.IN_CLIENT ? void 0 : "_blank"
                },
                o
              )),
            o
          );
        },
        to = function(e) {
          var t = e.section,
            a = e.event;
          e.language;
          return j.createElement(
            "div",
            { className: mn.a.SaleSection, style: po(t, a) },
            j.createElement(eo, Object(D.a)({}, e)),
            j.createElement(
              "div",
              { className: mn.a.SaleSectionLoginPrompt },
              Object(G.d)("#SalePage_LoginPrompt"),
              j.createElement(
                "button",
                { onClick: Ye.a, className: mn.a.LoginButton },
                Object(G.d)("#Login_SignIn")
              )
            )
          );
        },
        ao = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            o = e.bIsPreview;
          return j.createElement(
            "div",
            {
              className: Object(z.a)(mn.a.SaleSection, ba.a.SaleSectionCtn),
              style: po(t, a)
            },
            j.createElement(eo, Object(D.a)({}, e)),
            j.createElement(
              "div",
              { className: ft.a.SaleSectionContainer },
              j.createElement(Ba.a, {
                text: a.GetDescriptionWithFallback(n),
                partnerEventStore: C.c,
                showErrorInfo: o,
                event: a
              })
            )
          );
        },
        no = function(e) {
          var t = e.section,
            a = e.event,
            n = e.language,
            o = e.bIsPreview,
            r = "";
          return (
            t.text_section_contents &&
              (r =
                t.text_section_contents[n] || t.text_section_contents[0] || ""),
            j.createElement(
              "div",
              {
                className: Object(z.a)(mn.a.SaleSection, ba.a.SaleSectionCtn),
                style: po(t, a)
              },
              j.createElement(eo, Object(D.a)({}, e)),
              j.createElement(
                "div",
                { className: ft.a.SaleSectionContainer },
                j.createElement(Ba.a, {
                  text: r,
                  partnerEventStore: C.c,
                  showErrorInfo: o,
                  event: a
                })
              )
            )
          );
        },
        oo = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bInitialLoadComplete: !1,
                bShowContents: !1,
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
                this.LoadCapsules("initial_load");
            }),
            (e.prototype.componentDidUpdate = function(e) {
              var t = this;
              (this.props.section == e.section &&
                this.props.event == e.event &&
                this.props.activeTab == e.activeTab &&
                this.props.nSaleDayIndex == e.nSaleDayIndex) ||
                this.setState(
                  {
                    bInitialLoadComplete: !1,
                    bShowContents: !1,
                    bAwaitingShowContentLoading: !0
                  },
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
              return Object(D.b)(this, void 0, void 0, function() {
                return Object(D.e)(this, function(e) {
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
                  Object(V.a)(
                    t.unique_id ? t.unique_id.toString() : JSON.stringify(t)
                  ).toString();
                if (window.sessionStorage) {
                  var o = window.sessionStorage.getItem(n);
                  if (o) {
                    var r = JSON.parse(o);
                    if (r.rtime32_last_modified == a.rtime32_last_modified)
                      return r;
                  }
                  Object(he.f)(t.capsules),
                    Object(he.f)(t.links),
                    Object(he.f)(t.events),
                    (t.rtime32_last_modified = a.rtime32_last_modified),
                    window.sessionStorage.setItem(n, JSON.stringify(t));
                }
              }
              return t;
            }),
            (e.prototype.LoadCapsules = function(S) {
              return Object(D.b)(this, void 0, void 0, function() {
                var t, a, n, o, r, i, s, l, c, d, p, u, m, h, v, _, b, g, y, E;
                return Object(D.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.GetSectionForSession()),
                        (a = this.props),
                        (n = a.event),
                        (o = a.promotionname),
                        (r = a.bIsPreview),
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
                              (function(u, m, h) {
                                return Object(D.b)(
                                  this,
                                  void 0,
                                  void 0,
                                  function() {
                                    var t, a, n, o, r, i, s, l, c, d, p;
                                    return Object(D.e)(this, function(e) {
                                      switch (e.label) {
                                        case 0:
                                          return (
                                            (t = u.smart_section_type),
                                            (a = u.smart_section_max_apps),
                                            (n = u.smart_section_tag),
                                            (o = u.smart_section_category),
                                            (r = u.random_from_entire_set),
                                            (i = a || 24),
                                            "tag" !== t
                                              ? [3, 2]
                                              : [
                                                  4,
                                                  Wt.GetDiscounts({
                                                    tagid: n,
                                                    max_results: i,
                                                    feature: m,
                                                    random_across_set: r
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
                                                  categoryid: o,
                                                  max_results: i,
                                                  feature: m,
                                                  random_across_set: r
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
                                          return k.i.logged_in
                                            ? [3, 7]
                                            : [2, []];
                                        case 7:
                                          return !k.i.logged_in ||
                                            ("wishlist" !== t &&
                                              "interactive_recommender" !== t)
                                            ? [3, 8]
                                            : [
                                                2,
                                                (s = h.filter(function(e) {
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
                                        case 8:
                                          if (
                                            !k.i.logged_in ||
                                            ("wishlist_onsale" !== t &&
                                              "dlc_onsale" !== t &&
                                              "dlc_music_onsale" !== t &&
                                              "interactive_recommender_onsale" !==
                                                t &&
                                              "ir_subscription" !== t)
                                          )
                                            return [3, 23];
                                          switch (((s = []), t)) {
                                            case "wishlist_onsale":
                                              return [3, 9];
                                            case "dlc_onsale":
                                              return [3, 12];
                                            case "dlc_music_onsale":
                                              return [3, 15];
                                            case "interactive_recommender_onsale":
                                              return [3, 17];
                                            case "ir_subscription":
                                              return [3, 20];
                                          }
                                          return [3, 22];
                                        case 9:
                                          return Jt.GetHideWishlist()
                                            ? [3, 11]
                                            : [4, Wt.GetWishlistOnSale()];
                                        case 10:
                                          (s = e.sent()),
                                            (l = "game"),
                                            (e.label = 11);
                                        case 11:
                                          return [3, 22];
                                        case 12:
                                          return (
                                            (l = "dlc"),
                                            Jt.GetHideDLC()
                                              ? [3, 14]
                                              : [
                                                  4,
                                                  Wt.GetDLCForGamesInMyLibraryOnSale()
                                                ]
                                          );
                                        case 13:
                                          (s = e.sent()), (e.label = 14);
                                        case 14:
                                          return [3, 22];
                                        case 15:
                                          return (
                                            (l = "dlc"),
                                            [
                                              4,
                                              Wt.GetSoundtracksForGamesInMyLibraryOnSale()
                                            ]
                                          );
                                        case 16:
                                          return (s = e.sent()), [3, 22];
                                        case 17:
                                          return (
                                            (l = "game"),
                                            Jt.GetHideIRList()
                                              ? [3, 19]
                                              : [
                                                  4,
                                                  Wt.GetInteractiveRecommendationsOnSale()
                                                ]
                                          );
                                        case 18:
                                          (s = e.sent()), (e.label = 19);
                                        case 19:
                                          return [3, 22];
                                        case 20:
                                          return (
                                            (l = "game"),
                                            (c = 402931),
                                            [
                                              4,
                                              (d = Qt.Get()).LoadSubscriptionInfo(
                                                c
                                              )
                                            ]
                                          );
                                        case 21:
                                          return (
                                            e.sent(),
                                            (p = d.GetAllAppForMaster(c)),
                                            (s = Array.from(p).filter(function(
                                              e
                                            ) {
                                              return I.a.BIsGameRecommended(e);
                                            })),
                                            [3, 22]
                                          );
                                        case 22:
                                          return [
                                            2,
                                            s.map(function(e) {
                                              return { id: e, type: l };
                                            })
                                          ];
                                        case 23:
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
                                    (k.c.IN_CLIENT
                                      ? "library-"
                                      : Object(k.e)() + "-") + e
                                  );
                                })(o),
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
                        (l = io(
                          (l = (function(t, e, a) {
                            return e.filter(function(e) {
                              return so(t, e.id, e.type, a);
                            });
                          })(i, l, s)),
                          s
                        )),
                        "initial_load" != S ||
                          !t.cap_section_content ||
                          t.smart_section ||
                          t.use_random_order ||
                          t.show_as_carousel ||
                          r ||
                          "store" !== Object(k.e)() ||
                          (l = l.slice(
                            0,
                            (Object(ht.o)(t) + 1) * t.capsules_per_row
                          )),
                        [4, Object(hn.d)(l)]
                      );
                    case 5:
                      return (
                        e.sent(), (d = ro(t)) ? [4, Object(hn.c)(l)] : [3, 8]
                      );
                    case 6:
                      return (
                        (p = e.sent()),
                        0 <
                        (u = p
                          .map(function(e) {
                            var t = zt.a.GetAppLinkInfo(e);
                            return t && t.full_game_appid;
                          })
                          .filter(function(e) {
                            return !!e;
                          })).length
                          ? [4, zt.a.LoadAppLinkInfo(u)]
                          : [3, 8]
                      );
                    case 7:
                      e.sent(), (e.label = 8);
                    case 8:
                      return [4, Object(hn.a)(l, d)];
                    case 9:
                      return (
                        (m = e.sent()),
                        (h = l.length - m.length),
                        this.setState({
                          nHiddenCapsules: h,
                          capsules: m,
                          bInitialLoadComplete: !0
                        }),
                        [3, 19]
                      );
                    case 10:
                      return "events" !== t.section_type
                        ? [3, 16]
                        : ((v = void 0),
                          t.smart_section &&
                          "recent_events" === t.smart_section_type
                            ? [4, Yt.GetRecentEventsForSalesPage(n)]
                            : [3, 13]);
                    case 11:
                      return (
                        (_ = e.sent()),
                        (b = _.map(function(e) {
                          var t = new f.a(e.clan_steamid);
                          return C.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                            t,
                            e.gid,
                            e.nLastModifiedTime
                          );
                        })),
                        [4, Promise.all(b)]
                      );
                    case 12:
                      return (v = e.sent()), [3, 15];
                    case 13:
                      return [
                        4,
                        C.c.LoadBatchPartnerEventsByAnnouncementGID(
                          null,
                          t.events.map(function(e) {
                            return e.announcement_gid;
                          })
                        )
                      ];
                    case 14:
                      (v = e.sent()), (e.label = 15);
                    case 15:
                      return (
                        (g = v.filter(function(e) {
                          return (
                            !!e &&
                            (function(e, t, a) {
                              return so(e, t.appid, "game", a);
                            })(i, e, s)
                          );
                        })),
                        zt.a.LoadAppLinkInfo(
                          g.map(function(e) {
                            return e.appid;
                          })
                        ),
                        this.setState({ events: g, bInitialLoadComplete: !0 }),
                        [3, 19]
                      );
                    case 16:
                      return "links" !== t.section_type &&
                        "sale_tabhub" !== t.smart_section_type
                        ? [3, 19]
                        : ((y = t.links),
                          "sale_tabhub" !== t.smart_section_type
                            ? [3, 18]
                            : [4, Wt.GetSaleTags()]);
                    case 17:
                      (E = e.sent()),
                        (y = E.map(function(e) {
                          return {
                            url: e.url,
                            localized_link_capsule: void 0,
                            materialized_link_capsule: e.square
                          };
                        })),
                        (e.label = 18);
                    case 18:
                      this.setState({ links: y, bInitialLoadComplete: !0 }),
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
                o = t.language,
                r = t.activeTab,
                i = this.state,
                s = i.bInitialLoadComplete,
                l = i.bShowContents,
                c = i.nHiddenCapsules,
                d = i.capsules,
                p = i.links,
                u = i.events,
                m = i.bScreenIsWide,
                h = i.nMaxCapsulesPerRow;
              if (!s) return null;
              var v = this.GetSectionForSession(),
                _ = (function(e) {
                  var t = e.event,
                    r = e.section,
                    a = e.capsules,
                    n = e.links,
                    o = e.events,
                    i = e.language,
                    s = e.bShowParentApp,
                    l = e.fnShowEventInModal,
                    c = (e.activeTab, t.clanSteamID.GetAccountID()),
                    d = t.BIsLockedToAppOwners();
                  {
                    if (Boolean("events" === r.section_type))
                      return o
                        ? o.map(function(t) {
                            return j.createElement(
                              "div",
                              {
                                key: r.unique_id + "_" + t.GID,
                                style: {},
                                className: ya.a.OtherEvents
                              },
                              j.createElement(Ha, {
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
                      return n
                        ? n.map(function(e, t) {
                            return j.createElement(Qa.c, {
                              key: r.unique_id + "_" + t,
                              link: e,
                              language: i,
                              clanAccountID: c,
                              strClassName: Object(z.a)(
                                r.show_as_carousel && mn.a.in_carousel
                              )
                            });
                          })
                        : [];
                    if (Boolean("items" === r.section_type))
                      return a
                        ? a.map(function(e, t) {
                            var a = 1 < r.capsules_per_row;
                            if ("bundle" === e.type) {
                              var n =
                                r.unique_id +
                                "_" +
                                t +
                                "_" +
                                e.type +
                                "_" +
                                e.id;
                              return a
                                ? j.createElement(Qa.g, {
                                    key: n,
                                    capsule: e,
                                    bInCarousel: r.show_as_carousel,
                                    bShowParentApp: s
                                  })
                                : j.createElement(
                                    "div",
                                    {
                                      key: n,
                                      className: mn.a.AppSummaryWidgetCtn
                                    },
                                    j.createElement(Qa.b, { bundleid: e.id })
                                  );
                            }
                            if ("sub" === e.type) {
                              var n =
                                r.unique_id +
                                "_" +
                                t +
                                "_" +
                                e.type +
                                "_" +
                                e.id;
                              return a
                                ? j.createElement(Qa.g, {
                                    key: n,
                                    capsule: e,
                                    bShowParentApp: s,
                                    bInCarousel: r.show_as_carousel
                                  })
                                : j.createElement(
                                    "div",
                                    {
                                      key: n,
                                      className: mn.a.AppSummaryWidgetCtn
                                    },
                                    j.createElement(Qa.e, { packageid: e.id })
                                  );
                            }
                            var o = zt.a.GetAppLinkInfo(e.id);
                            if (!o) return null;
                            var n =
                              r.unique_id + "_" + t + "_" + e.type + "_" + e.id;
                            return a
                              ? j.createElement(Qa.g, {
                                  key: n,
                                  capsule: e,
                                  bShowParentApp: s,
                                  bUseSubscriptionLayout: d,
                                  bInCarousel: r.show_as_carousel
                                })
                              : j.createElement(
                                  "div",
                                  {
                                    key: n,
                                    className: mn.a.AppSummaryWidgetCtn
                                  },
                                  j.createElement(Qa.h, { appid: e.id })
                                );
                          })
                        : [];
                  }
                  return null;
                })({
                  event: a,
                  section: v,
                  capsules: d,
                  links: p,
                  events: u,
                  language: o,
                  bShowParentApp: ro(v),
                  fnShowEventInModal: this.ShowEventInModel,
                  activeTab: r
                }).filter(function(e) {
                  return !!e;
                }),
                b = null;
              if (0 < _.length) {
                var g = Math.min(v.capsules_per_row, h, _.length);
                if (v.show_as_carousel)
                  b = j.createElement(
                    la,
                    { hideArrows: !m, visibleElements: g },
                    _
                  );
                else {
                  var y = Object(ht.o)(v),
                    E = 0 == y || l ? _.length : y * g,
                    S = v.capsules.length > E && !l;
                  b = j.createElement(
                    j.Fragment,
                    null,
                    j.createElement(
                      "div",
                      {
                        className: Object(z.a)(
                          ft.a.SaleSectionContainer,
                          mn.a.SaleSectionContainer
                        ),
                        style: {
                          gridTemplateColumns:
                            1 < g ? "repeat(" + g + ", minmax(0, 1fr))" : null
                        }
                      },
                      v.use_event_body &&
                        j.createElement(Ba.a, {
                          text: a.GetDescriptionWithFallback(o),
                          partnerEventStore: C.c,
                          showErrorInfo: n,
                          event: a
                        }),
                      _.slice(0, E)
                    ),
                    S &&
                      j.createElement(
                        "div",
                        { className: mn.a.ShowContentsContainer },
                        this.state.bAwaitingShowContentLoading
                          ? j.createElement(ne.a, {
                              size: "small",
                              string: Object(G.d)("#Sale_ShowMore")
                            })
                          : j.createElement(
                              "button",
                              {
                                onClick: this.ShowContents,
                                className: mn.a.ShowContentsButton
                              },
                              Object(G.d)("#Sale_ShowMore")
                            )
                      )
                  );
                }
              }
              if (!b) {
                if (!n) return null;
                b = j.createElement(
                  "div",
                  { className: mn.a.preview_placeholder_section },
                  Object(G.d)(
                    v.smart_section
                      ? "#Sale_SmartPlaceHolder"
                      : "#Sale_PlaceHolder"
                  )
                );
              }
              var f = v.label_link
                ? (k.c.IN_CLIENT ? "steam://openurl/" : "") + co(v.label_link)
                : void 0;
              return j.createElement(
                j.Fragment,
                null,
                j.createElement(
                  "div",
                  {
                    className: Object(z.a)(
                      mn.a.SaleSection,
                      v.show_as_carousel && mn.a.CarouselDisplay,
                      ba.a.SaleSectionCtn
                    ),
                    style: po(v, a)
                  },
                  j.createElement(eo, Object(D.a)({}, this.props)),
                  0 < c &&
                    j.createElement(
                      "div",
                      {
                        className: mn.a.SaleSectionSubtext,
                        style: { color: v.label_color }
                      },
                      Object(G.j)(
                        1 == c
                          ? "#Sale_HiddenItem_Single"
                          : "#Sale_HiddenItems",
                        c,
                        j.createElement(
                          "a",
                          {
                            href: k.c.STORE_BASE_URL + "account/preferences",
                            style: {
                              color: v.label_color,
                              filter: "brightness(150%)"
                            }
                          },
                          Object(G.d)("#Sale_StorePreferences")
                        )
                      )
                    ),
                  b,
                  Boolean(f) &&
                    j.createElement(
                      "div",
                      { className: mn.a.SaleViewAll },
                      j.createElement(
                        "a",
                        { href: f, target: k.c.IN_CLIENT ? void 0 : "_blank" },
                        Object(G.d)("#btn_live_streams_all")
                      )
                    )
                ),
                Boolean(this.state.showEventInModal) &&
                  j.createElement(
                    De.g,
                    { className: Sa.a.StoreHeaderAdjust },
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
            Object(D.c)([W.a], e.prototype, "ShowContents", null),
            Object(D.c)([W.a], e.prototype, "LoadCapsules", null),
            Object(D.c)([W.a], e.prototype, "OnResize", null),
            Object(D.c)([W.a], e.prototype, "ShowEventInModel", null),
            (e = a = Object(D.c)([o.observer], e))
          );
        })(j.Component);
      function ro(e) {
        return (
          "dlc" === e.smart_section_type ||
          "dlc_onsale" === e.smart_section_type ||
          "dlc_music_onsale" === e.smart_section_type
        );
      }
      function io(e, t) {
        return e.filter(function(e) {
          return null == e.visibility_index || e.visibility_index == t;
        });
      }
      function so(e, t, a, n) {
        if (!e || !e.capsules) return !0;
        var o = io(e.capsules, n);
        return (
          0 == o.length ||
          o.some(function(e) {
            return e.id === t && e.type === a;
          })
        );
      }
      var lo = function(e) {
        var t = e.text,
          a = e.url,
          n = e.color,
          o = e.bgcolor;
        return j.createElement(
          "a",
          {
            className: ft.a.BrowseMoreButton,
            href: co(a),
            target: "_blank",
            style: { backgroundColor: o, color: n }
          },
          t || Object(G.d)("#Sale_BrowseMore_Text_Default")
        );
      };
      function co(t) {
        var e = "",
          a = "";
        if (t && (0 <= t.indexOf("/") || 0 <= t.indexOf("?")))
          try {
            var n = new URL(t);
            (e = n.pathname.substring(1)),
              (a = n.search),
              k.c.SNR &&
                (a += 0 < a.length ? "&snr=" + k.c.SNR : "?snr=" + k.c.SNR);
          } catch (e) {
            console.warn(t, e);
          }
        return k.c.STORE_BASE_URL + e + a;
      }
      function po(e, t) {
        var a = "";
        e.background_image &&
          (a +=
            "url(" +
            ue.a.GenerateArtworkURLFromHashAndExtensions(
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
      function uo(e, t) {
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
      var mo = (function(t) {
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
              return j.createElement(
                B.a,
                null,
                j.createElement(
                  j.Suspense,
                  { fallback: j.createElement("div", null) },
                  j.createElement(
                    oe.a,
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
                        j.createElement(Qn, {
                          promotionname: this.props.promotionname,
                          clanid: Number(k.b.CLANACCOUNTID),
                          event: this.props.eventModel,
                          bIsPreview: this.props.bIsPreview,
                          language: this.props.language
                        }),
                      Boolean(!this.state.bOnceVisible) &&
                        j.createElement("span", null, Object(G.d)("#Loading"))
                    )
                  )
                )
              );
            }),
            Object(D.c)([W.a], e.prototype, "OnEnter", null),
            e
          );
        })(j.Component),
        ho = Object(o.observer)(function(e) {
          var t = Ut.b.GetPlayReadyStream(),
            a = t && t.appid;
          b.a.EnsureStoreCapsuleInfoLoaded(a);
          var n = b.a.GetStoreCapsuleInfo(a),
            o = n && n.GetAppStoreData(),
            r = o && o.title;
          if (!r) return null;
          var i =
              "https://steamcdn-a.akamaihd.net/steamcommunity/public/" +
              (o.cover_image_asset_url
                ? "images/apps/" + a + "/" + o.cover_image_asset_url + ".jpg"
                : "images/apps/1195650/246e7e2a24c0aa965e505ac510d4e8e952f9a88a.jpg"),
            s = function() {
              return window.open(o.capsule_link, "_blank");
            };
          return j.createElement(
            "div",
            { className: mn.a.SalePageBroadcastContextHover },
            j.createElement("img", {
              src: i,
              className: mn.a.AlbumCoverImage,
              onClick: s
            }),
            j.createElement(
              "div",
              { className: mn.a.AlbumTitle, onClick: s },
              " ",
              r,
              " "
            )
          );
        }),
        vo = a("BVKn"),
        _o = vo.a.Get(),
        bo = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.state = {
                lookupGID: t.props.event_gid
                  ? t.props.event_gid
                  : _o.GetClanEventGIDFromAnnouncementGID(
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
                        _o.GetClanEventModel(this.props.event_gid)
                      )
                        return [3, 5];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          _o.LoadPartnerEventGeneric(
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
                        _o
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
                        !_o.GetClanEventGIDFromAnnouncementGID(
                          this.props.announcement_gid
                        ) &&
                        _o
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
                  _o.GetClanEventModel(this.state.lookupGID);
              if (t && t.appid) {
                var a = b.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData();
                e = a && a.title;
              } else if (t && t.clanSteamID) {
                var n = g.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                );
                e = n && n.group_name;
              }
              var o = t && t.GetNameWithFallback(Object(pe.d)(k.c.LANGUAGE));
              if (t && e && o) {
                var r = Object(G.d)(
                  "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                  e,
                  o
                );
                document.title != r && (document.title = r);
              }
              document.body.classList.contains("events_hub") &&
                document.body.classList.remove("events_hub");
            }),
            (e.prototype.InfiniteScrollCloseModal = function() {
              var e = _o.GetClanEventModel(this.state.lookupGID);
              e &&
                (e.appid
                  ? this.props.history.push("/newshub/app/" + e.appid)
                  : this.props.history.push(
                      "/newshub/group/" + e.clanSteamID.GetAccountID()
                    ));
            }),
            (e.prototype.render = function() {
              var e = _o.GetClanEventModel(this.state.lookupGID);
              return e
                ? this.props.bInfiniteScroll
                  ? l.a.createElement(
                      B.a,
                      null,
                      l.a.createElement(Ze, {
                        classname: q.a.StoreHeaderAdjust,
                        appid: e.appid,
                        trackingLocation: 0,
                        announcementGID: e.GetAnnouncementGID(),
                        partnerEventStore: _o,
                        eventModel: e,
                        showAppHeader: !0,
                        closeModal: this.InfiniteScrollCloseModal
                      })
                    )
                  : l.a.createElement(
                      B.a,
                      null,
                      l.a.createElement(Xa, {
                        lang: Object(pe.d)(k.c.LANGUAGE),
                        partnerEventStore: _o,
                        event: e,
                        adminPanel: l.a.createElement(va, {
                          eventModel: e,
                          partnerEventStore: _o
                        }),
                        otherEventRow: l.a.createElement(Pa, {
                          appid: e.appid,
                          eventModel: e,
                          partnerEventStore: _o
                        })
                      })
                    )
                : l.a.createElement(ne.a, null);
            }),
            Object(D.c)([W.a], e.prototype, "InfiniteScrollCloseModal", null),
            (e = Object(D.c)([o.observer], e))
          );
        })(l.a.Component),
        go = Object(i.g)(bo),
        yo = a("WBba"),
        Eo = a("apHd"),
        So = (function(n) {
          function e(e) {
            var a = n.call(this, e) || this;
            a.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: []
            };
            var t = Object(Eo.a)("EventWebRowEmbed");
            return (
              a.ValidateStoreDefault(t) &&
                ((a.state.bPreLoaded = t.bPreLoaded),
                (a.state.announcementGIDList = t.announcementGIDList),
                (a.state.events = []),
                a.state.announcementGIDList.forEach(function(e) {
                  var t = C.c.GetClanEventFromAnnouncementGID(e);
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
                  o,
                  r,
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
                        (o = t.partnerEventStore),
                        (r = t.trackingLocation),
                        this.state.bPreLoaded
                          ? [3, 2]
                          : [
                              4,
                              o.LoadAdjacentPartnerEvents(
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
                        r &&
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
                                r
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
                  { className: Ue.a.FlexCenter },
                  l.a.createElement(ne.a, {
                    size: "medium",
                    position: "center"
                  })
                );
              if (n && 0 === n.length) return null;
              var e = window.screen.width <= 500 ? 1 : 2,
                t = this.props,
                o = t.partnerEventStore,
                r = t.strClassName,
                i = t.appid,
                s = t.trackingLocation;
              return l.a.createElement(
                "div",
                { className: r },
                this.state.bShowModal &&
                  l.a.createElement(Ze, {
                    classname: Ea.StoreHeaderAdjust,
                    appid: i,
                    trackingLocation: s,
                    announcementGID: this.state.announcementGID
                      ? this.state.announcementGID
                      : this.state.modalInitialEvent.AnnouncementGID,
                    partnerEventStore: o,
                    eventModel: this.state.modalInitialEvent,
                    closeModal: this.CloseModal
                  }),
                l.a.createElement(
                  "h2",
                  null,
                  Object(G.d)("#EventBrowse_RecentEvents")
                ),
                l.a.createElement(
                  "div",
                  { className: Ea.SectionButtonCtn },
                  l.a.createElement(
                    "div",
                    {
                      className: Ea.SectionButton,
                      onClick: function() {
                        return a.ShowModal(n[0]);
                      }
                    },
                    Object(G.d)("#EventBrowse_MoreEventsBtn")
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: Ea.EventsSummariesCtn },
                  n.slice(0, e).map(function(t) {
                    var e =
                      1 === n.length && 500 < window.screen.width ? Fa : Ha;
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
            Object(D.c)([W.a], e.prototype, "ShowModal", null),
            Object(D.c)([W.a], e.prototype, "CloseModal", null),
            e
          );
        })(l.a.Component),
        fo = (function(o) {
          function e(e) {
            var t = o.call(this, e) || this;
            t.m_rtimeOldest = 0;
            var a = L.a.GetTimeNowWithOverrideAsDate(),
              n = new Date(a.setUTCHours(0, 0, 0, 0) - 15552e6);
            return (t.m_rtimeOldest = Math.floor(n.getTime() / 1e3)), t;
          }
          return (
            Object(D.d)(e, o),
            (e.prototype.render = function() {
              var e = this.props.appid;
              return l.a.createElement(So, {
                appid: e,
                partnerEventStore: vo.a.Get(),
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
        return Io;
      }),
        a.d(t, "EventBackfillLanding", function() {
          return To;
        }),
        a.d(t, "EventSaleDisplay", function() {
          return wo;
        }),
        a.d(t, "EventCalendar", function() {
          return Do;
        }),
        a.d(t, "EventDetailView", function() {
          return Ao;
        }),
        a.d(t, "Events", function() {
          return ko;
        }),
        We.a.Init(new yo.a(k.c.WEBAPI_BASE_URL)),
        C.c.Init();
      var Co = function(e) {
        var t = e.children,
          a = Object(j.useState)(A.a.IsInitialized()),
          n = a[0],
          o = a[1];
        return n
          ? l.a.createElement(l.a.Fragment, null, t)
          : (A.a.InitGlobal().then(function() {
              return o(!0);
            }),
            null);
      };
      function Oo(t) {
        return function(e) {
          return l.a.createElement(Co, null, l.a.createElement(t, e));
        };
      }
      var Io = Oo(At),
        To = Oo(Ft),
        wo = Oo(qn),
        Do = Oo(nt),
        Ao = Oo(go),
        ko = Oo(fo);
    },
    Xkb6: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAYAAADj79JYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NERCMzNDMkIzRDc1MTFFQUJGNkRGNDBDMjk3NUMxN0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NERCMzNDMkMzRDc1MTFFQUJGNkRGNDBDMjk3NUMxN0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0REIzM0MyOTNENzUxMUVBQkY2REY0MEMyOTc1QzE3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0REIzM0MyQTNENzUxMUVBQkY2REY0MEMyOTc1QzE3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrJ8Y1kAAAOhSURBVHja7J1piE1hHIffsYTJlj2EFCHGmiRZS44lKetgxhiSLUqyf5LspWSnlOyyc0VjkGVMYyyTJT5YQmMPH6wZz9s5XxSi5vzvWf6/erqf7r1vT7/e95z3nnNuSklJidHIpYwqUOEqXKPCVbjm31KutD4okUgc4yXbcZyX//m+pApgvKFt+EAoQuAA7bHclFIHjiN9PaSqXrk5fDJcQ3oHVSy3aLaAPKTPBV2chY5SysNSyEV6Y9Utd1jYHW4iPV2Fy6Ua7ET6LqiuwuUyymt7DxUul0ZwFunLvHlehQt99xy4Ci1VuFza22N2mAIpKlwmlWCdPUuFuipcLv2hCAapcLnUhqOwEVJVuFwmwXXopMLl0hyuwHwoq8JlYn8kWQLnoIkKl0s3e4YKY1S4XKrCDtgD1VW4XEZ4h4+9VLhcGkIOrIAKKlwmditgNuRBKxUul3bG3Y+ZZgK+HxOl3xorwlo4CfVUuFz6eQvqYBUul1pwGDZDZRUul4lQCJ1VuFyawSVYaAKwHxOXC3TsfsxiuABNVbhcusINyFThcqkC22Ef1FDhchkGtxKJRB8VLpcGcAbpq6CCCpeJ3QqYBflIb63C5ZIGBUifASkqXCZ2WlkDp5BeX4XLpa+3oA5R4XKpCQeRvhUqq3C5ZMMBFS6XbTC0NPcYNL/PG5joOM6h0vxQFf77nIYsZD/XRdPffIGZ0M8P2drwX3ML0hF9W880/Y19BtVq6Oy3bG24Mc8gE9E5Ul8Y54bvhzRJ2XEV/hHGwXB4K/3lcZtSLhv3cueHyRpAXBr+HRYZ957/h8kcSBwa/sBrdX4QBhP1hm+BDkGRHeWGv4YJcCRoA4ui8FOQBcVBHFyUppTPMN24dzMXB3WQUWm4vZpqNNwJ+kDD3nC7D7ISuoRBdtgb/hQyIDdMgw5rw/ca9zqS3LANPGzCP8BYGAnvwtiUME0pFz3Zj8K86ISh4XYfZAH0DLvsMDT8vne4VxCVk4UgN3yTcfdBIiM7qA1/ZdyrnY5FcNshcMLtXcTj4YWJaIIypXyCqcZ9yn5kZQel4de9hfGuiUGS2fAfsNy4+yCxkJ1M4U+gt+M4c3n9amKUZAjfDW2Rfd7EMJJz+HuYguhdJsaREm7vcc9A9mMT8/g9pXyDed58HXvZfjf8nj3cQ3Shava/4Rugo8r2v+H2j+/GI/qEqvW/4fbp9m1U9t+Ton9CHZ9TexWuUeEqXKPCVbjmz/kpwAD6adOjS2vEgwAAAABJRU5ErkJggg==";
    },
    YVfL: function(e, t, a) {
      e.exports = {
        SaleSchedCtn: "salesectioneventschedule_SaleSchedCtn_2g7il",
        SectionCtn: "salesectioneventschedule_SectionCtn_2wwgk",
        SaleSchedListCtn: "salesectioneventschedule_SaleSchedListCtn_1THwn",
        SaleSchedGridCtn: "salesectioneventschedule_SaleSchedGridCtn_50nbv",
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
          "salesectioneventschedule_DemoCapsuleActionCtn_2Qy4b"
      };
    },
    ZCZY: function(e, t, a) {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_3jswb" };
    },
    a6qw: function(e, t, a) {},
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
    exzL: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAYAAADj79JYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDdGOTQ3RDYzRDc1MTFFQTk1MjRDRjc1M0VCNkRCRjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDdGOTQ3RDczRDc1MTFFQTk1MjRDRjc1M0VCNkRCRjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0N0Y5NDdENDNENzUxMUVBOTUyNENGNzUzRUI2REJGNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0N0Y5NDdENTNENzUxMUVBOTUyNENGNzUzRUI2REJGNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr88d9sAAAOESURBVHja7J1ZiI1hHMbfj5GSoiw35I7cOLaSpEkupDGSkosxjLU0yFxa7623dneMpGwzZGmIbGnsa5QtxFiyXCByPG/vufg6Y3Twvf/zLs9Tz+2Z7/z6zf/7zv+c850kn88rRi6diIDACZwhcAJnSktFho/VhM5LkqQtRFBZXc1laXg1egsHNokey42UvmgzoG9CuxFv+yQZvvApfqD76AyMmKscKTInzcHoJRzoMpQnZwHD0zmLzoLtT2m4TCrRGzjoGp405dID3Q3ojWhPjhS7I6U4zwoj5gxHikwGoKfwJNagXWi4fcPTuVa4fLxHw2UyHL2CJ1SPJjTcvuHpHEXnwvbXNFwmVcrsYybzslAufdDDgL4lxH2MayOlOA8KJ9RWjhSZDEIv4smuQDvTcPuGp3MOnQnbn9BwmYxVZh9TS8NlDE9nL7oQtn/wzXBfges8V2Yfc5ojRSb90RaAWId25UiRzfXC5eNdGi6TYcrsYxa7vo8JxfB0jqFzYPsrGi6TicrsY6a4eHChvpveGz0I6NvQ7hwpsnmI1mLEXOZIkclA9DyArXJhHxOD4elcUGYf84iGy2SMvmYHvDoaLp99yuxj3ksaHjNwnRdoHaC3cKTIpB96EjA3SO1jYjc8nZvK7GNu03CZ5NBWgF1qcx9Dw3+fE8rsY17ScJlM0CMGkKdm/cAE3nF6ofsBfUeW+xiOlNJyXJktJA0XyE50WlYPVkGeHeYdugAnzgNZnjQJvMSrFJ407eQb2qDntQ3YNLz9K80agL5j84/QcHN1tREdZRs2Df+LbSEN///ofXhOEnaswD+jswF6eqlvPnCk/Hv0e5r6HfzH5TqAWAz/ga5GK8sJOxbDM/lcCg0vLdvREa7ADtnwt+h8gD7k2oGFCNzKp2c5UtrnK7oErXIVdkiGW/8GBA030XuQ9ehoH2D7brjot9hiN1x/TzPnG2wfDf+ELgLoXb7+W/oEvKzftY9ppOg9yEp0nO+wfTDcmfulxGD4VmX2IMHAdtXwN8rc+L0pwLWDc8CdvatbaCPli77cQ6tDhu2K4V7cmTMEw3+ia5XZg0QBu5yGe3d3ZZ8N34MOjRG2tOEf0XqAblQRRwq4978B4ctI+Y4uR8cTtn3Dg/odH9cN34yOJGz7hrcVXpofIVr7hjejQwj7z0n4I9TxvLQncIbACZwhcAJnOs4vAQYAwpCDXwAmgMUAAAAASUVORK5CYII=";
    },
    go9d: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtNJREFUeNrsmk1rE0EYgHe19ZBIY2kj4qUQVGjxAz2J4gcVvfmBP8FI8eZF8OJNL4oFPYrGX1CK4lEMiChe/aCClNBeRGxLTTE5GDU+Y2bDJG5rL5lZ950XnsxkE5h9n8zszkw2bDabgeTYEAgPL8AL8AK8AC/AC/AC5EafegnDcM0vMVvMUOyA7bBNswVymgHYDOp7m/SxUNczRlvZdZ5XDX7oeh2+q9OAqq6rY99gRR9TfIXPmk8wS171f+QVhH9eYgRw/BhFEQ7q5MP/7MdVwmbhNZTI8fm6BPBe/XoP4XzKevs0XCDX6qoCdPIvYE9Kh/xbOBpJULl3XwQfpDh5FXt1ju1o9wDKQ7x/KeTif5icX3X3gKKgu18xbh4wLkjAeMcQIPLwRdgcaCssRD1gTOAkcMwcAgWBAgqmgBGBAkZMAfkeN1ZPoIC8KWCox409hePwJkEChmwKCPRi5ABMJOSO0yFg2EaLSPgF96nuhFt6aesqhk0BgzZbRsIKXKU6Co8dCRg0BWRdnAESKnCO6gl4Z7n5rCmg3+VgREKZYj9cUrMzS832mwJyrq9ISPgJ9/T1YRIaPW4y170YSkSozQq4QnU3POl1e4ndFUbCRzhD9RS8FyfAVvQl9cRYpu+iuA2nRQnQG7PX4LKNu1MkoOr6TkDiGykuwnULi7Mo57aAhuPk1RbVncDujnTDvAjWHCVegEdUnwX2t+NrpoBly4kPwE2qH+Cso463bA6BRUuJK+FqS/pG0NqUdBmLpoAlC8mrP1vvwr6E3HCWbAo46bCrrykgugb0egWWSeBca8EUMC9wFjxvCqgIFFAxBcwIFDDTFsCyU42HOUHJz+mcO5bDZUECynH7ASVBAkp/CVBPTFBMCUh+Sufayts/JGWE/uBI0HqkLG0xbSYf2wNi5u7yHpRcZSGT7kdlJYd/XN4L8AK8AC/AC/ACvACx8VuAAQDxke5GRJ5P8AAAAABJRU5ErkJggg==";
    },
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

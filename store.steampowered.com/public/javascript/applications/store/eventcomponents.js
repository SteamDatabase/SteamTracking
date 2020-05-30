/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "+ZmX": function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "Init", function() {
          return o;
        });
      var a = n("5y3B"),
        j = n.n(a);
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
              n = ZdogSpookyHouse.color.light,
              a = new j.a.Shape({
                addTo: e.addTo,
                path: [{ x: -2 }, { x: 2 }],
                closed: !1,
                stroke: 1.3,
                color: n,
                translate: { y: 12, z: -30 },
                rotate: { y: t / 16, z: t / 16 }
              }),
              o = a.copy({
                translate: { x: -6, y: 15, z: -28 },
                rotate: { y: -t / 8, z: t / 8 }
              }),
              r = a.copy({
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
              a.copy({
                scale: 0.25,
                translate: { y: 18, z: -26 },
                rotate: { z: t / 8 }
              });
            var i = o.copyGraph({
              translate: { x: -9, y: 10, z: -30 },
              rotate: { z: -t / 16 }
            });
            r.copy({ addTo: i, scale: { x: -1 }, translate: { x: -2 } }),
              a.copy({
                scale: 0.4,
                translate: { x: -12, y: 14, z: -28 },
                rotate: { z: -t / 16 }
              });
          }),
          (ZdogSpookyHouse.addCarRoad = function(e) {
            for (
              var t = ZdogSpookyHouse.color,
                n = j.a.TAU,
                a = 120,
                o = (125 * n) / 40 / 2,
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
              var s = (i / 40) * n;
              new j.a.Shape({
                addTo: e.addTo,
                path: r,
                translate: { x: Math.cos(s) * a, z: Math.sin(s) * a },
                rotate: { y: s + n / 4 },
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
            function b(e, t, n) {
              return _.copy({
                path: [d[e], d[t], p[t], p[e]],
                color: n || _.color
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
                  (h.rotate.y = j.a.easeInOut((e / 4) % 1) * n + (3 * n) / 8),
                    (v.rotate.x = 0.1 * Math.sin(e * n * 2)),
                    (v.translate.y = 2 * Math.sin(e * n * 1.5) - 6);
                }
              }
            );
          }),
          (ZdogSpookyHouse.addCats = function(e) {
            var t = j.a.TAU,
              n = ZdogSpookyHouse.color,
              a = 1.1,
              o = new j.a.Anchor({
                addTo: e.addTo,
                translate: { z: -22, x: -28, y: -2 },
                scale: a,
                rotate: { y: t / 8 }
              });
            new j.a.Cone({
              addTo: o,
              diameter: 1,
              length: 3,
              rotate: { x: t / 4 },
              stroke: 4.4,
              color: n.deep
            });
            var r = new j.a.Shape({
              addTo: o,
              translate: { y: -4 },
              stroke: 5.5,
              color: n.deep
            });
            new j.a.Shape({
              addTo: r,
              translate: { x: -1, z: 1 },
              stroke: 0.9 * a,
              color: n.highlight
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
              color: n.deep
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
                color: n.deep
              }),
              o.copyGraph({
                translate: { z: -6, x: -42, y: -15 },
                scale: a,
                rotate: { y: t / 4 }
              }),
              o.copyGraph({
                translate: { z: -30, x: -30, y: -2 },
                scale: a,
                rotate: { y: t / 4 }
              });
          }),
          (ZdogSpookyHouse.addFogMonster = function(e) {
            for (
              var t = j.a.TAU,
                n = ZdogSpookyHouse.color,
                o = new j.a.Anchor(e),
                r = (4 * t) / 8,
                i = [],
                a = 0;
              a < 74;
              a++
            ) {
              var s = a / 74,
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
                  color: n.fog
                });
              i.push(c);
            }
            return (
              new j.a.Shape({
                addTo: i[0],
                translate: { x: -10, z: 8 },
                color: n.deep,
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
                color: n.deep
              }),
              {
                animate: function(e) {
                  var a = (o.rotate.y = (e * t) / 6);
                  i.forEach(function(e, t) {
                    var n = (t / 74) * r;
                    e.translate.y = 6 * Math.sin(4 * (n - a));
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
            function n(e) {
              c.push(e);
            }
            var a = new j.a.Anchor({
                addTo: e.addTo,
                translate: { x: 0, y: -8, z: -6 }
              }),
              o = {
                addTo: a,
                width: 12,
                height: 12,
                stroke: e.stroke,
                fill: !0,
                backface: s.deep
              },
              r = Object.assign({ color: s.light }, o),
              d = new j.a.Group({ addTo: a, translate: { z: 24 } });
            n(new j.a.Rect(Object.assign({}, r, { addTo: d }))),
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
                wallRectCallback: n
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({ translate: { y: -24, z: 24 } }, r),
                pane: s.highlight,
                wallRectCallback: n
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
            var v = new j.a.Anchor({ addTo: a, translate: { y: -36, z: 18 } }),
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
                wallRectCallback: n
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, r, {
                  translate: { x: 12, y: -12, z: 12 }
                }),
                pane: s.medium,
                wallRectCallback: n
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, r, { translate: { x: -12, z: 12 } }),
                pane: s.medium,
                wallRectCallback: n
              }),
              ZdogSpookyHouse.getWallPanel({
                wall: Object.assign({}, r, {
                  translate: { x: -12, y: -12, z: 12 }
                }),
                pane: s.medium,
                wallRectCallback: n
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
                addTo: a,
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
                addTo: a,
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
            n(y),
              b.copy({ width: 6, translate: { x: -21, y: -12 } }),
              b.copy({
                width: 12,
                height: 18,
                translate: { x: -6, y: -27, z: -18 }
              }),
              new j.a.Rect({
                addTo: a,
                width: 12,
                height: 6,
                translate: { x: 0, y: -33, z: -12 },
                rotate: { y: i / 4 },
                stroke: e.stroke,
                fill: !0,
                color: s.medium
              }),
              new j.a.Shape({
                addTo: a,
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
                addTo: a,
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
                addTo: a,
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
              addTo: a,
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
              addTo: a,
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
            var O = new j.a.Anchor({ addTo: a, translate: { y: -30 } }),
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
            var T = new j.a.Anchor({ addTo: a, translate: { y: 2 } }),
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
              addTo: a,
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
                addTo: a,
                width: 12,
                height: 12,
                translate: { x: 12, y: -6, z: 18 },
                rotate: { x: -i / 4 },
                fill: !0,
                stroke: e.stroke,
                color: s.dark
              }),
              {
                shape: a,
                animate: function(e, t) {
                  var n = Math.abs(Math.round((t.y / i) * 360) - 180),
                    a = n <= 50 || (60 <= n && n <= 65),
                    o = a ? s.highlight : s.deep,
                    r = a || s.deep;
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
              n = j.a.TAU,
              a = [{ y: 0 }, { y: 1 }],
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
              rotate: { x: n / 4 },
              fill: !0,
              color: r,
              stroke: 1.5
            });
            var s = new j.a.Shape({
              addTo: i,
              path: a,
              scale: 3,
              translate: { x: -4.5, z: -2 },
              color: r,
              stroke: 1.5
            });
            s.copy({ translate: { x: 4.5, z: -2 } }),
              s.copy({ translate: { x: 4.5, z: 2 } }),
              s.copy({ translate: { x: -4.5, z: 2 } });
            var l = new j.a.Anchor({ addTo: i, translate: { y: -8 } }),
              c = new j.a.Group({ addTo: l, rotate: { y: n / 2 } }),
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
                rotate: { x: n / 4 },
                translate: { y: 5 }
              }),
              new j.a.Shape({
                addTo: l,
                path: a,
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
              rotate: { x: n / 4 },
              fill: !0,
              stroke: 1.5,
              color: r
            }),
              new j.a.Shape({
                addTo: p,
                path: a,
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
            u.copy({ rotate: { y: (n / 5) * 1 } }),
              u.copy({ rotate: { y: (n / 5) * 2 } }),
              u.copy({ rotate: { y: (n / 5) * 3 } }),
              u.copy({ rotate: { y: (n / 5) * 4 } }),
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
              path: a,
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
              n = ZdogSpookyHouse.color,
              a = new j.a.Anchor({ addTo: e.addTo, translate: e.translate });
            ZdogSpookyHouse.getPyramid({
              addTo: a,
              scale: { x: 9, y: -9, z: 9 },
              color: n.deep,
              snub: e.snub
            }),
              new j.a.Rect({
                width: 18,
                height: 18,
                addTo: a,
                rotate: { x: t / 4 },
                color: n.dark,
                stroke: 4,
                fill: !0
              });
            var o = new j.a.Rect({
              addTo: a,
              width: 4,
              height: 4,
              translate: { x: -4, y: -6 },
              rotate: { y: t / 4 },
              stroke: 3,
              color: n.medium
            });
            return (
              new j.a.Ellipse({
                addTo: o,
                diameter: 4,
                translate: { y: -2 },
                stroke: 3,
                color: n.medium
              }),
              a
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
            var n = new j.a.Shape(e),
              a = new j.a.Anchor({
                addTo: n,
                translate: { y: t - 14 },
                rotate: { y: -o / 8 }
              });
            return (
              new j.a.Shape({
                addTo: a,
                path: i,
                closed: !1,
                stroke: 0.6,
                color: r.deep
              }).copyGraph({ rotate: { y: o / 4 } }),
              n
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
              n = e.stroke || 4,
              a = new j.a.Anchor({ addTo: t });
            return (
              new j.a.Shape({
                addTo: a,
                path: e.snub ? c : l,
                translate: { z: 1 },
                rotate: { x: s / 8 },
                stroke: n,
                fill: !0,
                color: e.color,
                backface: void 0 === e.backface || e.backface
              }),
              a.copyGraph({ rotate: { y: s / 4 } }),
              a.copyGraph({ rotate: { y: s / 2 } }),
              a.copyGraph({ rotate: { y: (3 * s) / 4 } }),
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
                ? (t = (function(n) {
                    var e = new j.a.Group(n.wall),
                      t = d.reduce(function(e, t) {
                        return (e[t] = n.wall[t]), e;
                      }, {});
                    t.addTo = e;
                    var a = new j.a.Rect(t);
                    return (
                      n.wallRectCallback && n.wallRectCallback(a),
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
                        color: n.pane,
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
              n = Math.floor(e.width / 135) / 2,
              r = new j.a.Illustration({
                element: e,
                zoom: n,
                rotate: { y: o / 8 },
                dragRotate: !0,
                onDragStart: function() {
                  ZdogSpookyHouse.wobbling = !1;
                }
              }),
              a = new j.a.Anchor({
                addTo: r,
                translate: { y: ZdogSpookyHouse.sceneY }
              }),
              i = new j.a.Anchor({ addTo: a });
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
                addTo: a,
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
                addTo: a,
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
              addTo: a,
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
                addTo: a,
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
                addTo: a,
                translate: { x: 62, z: -32 }
              }),
              ZdogSpookyHouse.getGraveIsland({
                addTo: a,
                translate: { x: 60, z: -60 }
              }),
              ZdogSpookyHouse.getGraveIsland({
                addTo: a,
                translate: { x: 32, z: -64 }
              });
            var g = t.darker,
              y = new j.a.Anchor({ addTo: a, translate: { y: -94 } }),
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
            var f = new j.a.Anchor({ addTo: a, translate: { y: -60 } }),
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
                addTo: a,
                translate: { y: 12 }
              }),
              w = ZdogSpookyHouse.addCarRoad({ addTo: a }),
              D = 0,
              k = 300;
            !(function e() {
              var t = D / k;
              if (ZdogSpookyHouse.wobbling & (t <= 2)) {
                var n = j.a.easeInOut(t % 1) * o,
                  a = (-3 * o) / 64;
                (r.rotate.y = Math.sin(n) * a + o / 8),
                  (r.rotate.x = (-0.5 * Math.cos(n) + 0.5) * a);
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
    "31dG": function(e, t, n) {
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
    E9gz: function(e, t, n) {
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
    I2Hi: function(e, t, n) {
      e.exports = {
        SuggestContainer: "storesuggest_SuggestContainer_2gBFq",
        Results: "storesuggest_Results_3eXNg",
        ResultRow: "storesuggest_ResultRow_16oSf",
        AvatarImage: "storesuggest_AvatarImage_3dr2A",
        GameName: "storesuggest_GameName_3CWrp"
      };
    },
    IWyE: function(e, t, n) {
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
    Lql7: function(e, t, n) {
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
    SS32: function(e, t, n) {
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
    Wym2: function(e, t, n) {
      "use strict";
      n.r(t);
      var j = n("q1tI"),
        l = n.n(j),
        k = n("mrSG"),
        a = n("vDqi"),
        _ = n.n(a),
        m = n("2vnA"),
        r = n("TyAF"),
        o = n("Gp1o"),
        i = n("s4NR"),
        s = n.n(i),
        c = n("Ty5D"),
        O = n("kLLr"),
        b = n("ir+G"),
        g = n("TQGK"),
        I = n("wd/R"),
        d = n.n(I),
        p = n("5bld"),
        T = n("5eAM"),
        A = n("9w6b"),
        w = n("6oCP"),
        D = n("gyoR"),
        h = n("r64O"),
        L = n("TLQK"),
        y = n("bDQf"),
        G = n("lkRc"),
        M = n("ee7K"),
        u = n("O0NR"),
        E = n("KEpR"),
        N = n("5izx"),
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
            (e.prototype.UpdateCommunitionSetting = function(o, r, i) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        (this.LazyInit(),
                        (t =
                          G.c.STORE_BASE_URL +
                          "account/optoutappcommunication/"),
                        (n = new FormData()).append("sessionid", G.c.SESSIONID),
                        n.append("allowCommunication", o ? "1" : "0"),
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
                          n.append("appId", r.toString());
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
                          n.append("clanId", i.toString());
                      }
                      e.label = 1;
                    case 1:
                      return e.trys.push([1, 3, , 4]), [4, _.a.post(t, n)];
                    case 2:
                      return [2, 1 == e.sent().data.success];
                    case 3:
                      return (
                        (a = e.sent()),
                        console.error(
                          "Blocking app id hit error " + Object(y.a)(a)
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
      function B(e, t, n, a) {
        return {
          strId: "section-" + t,
          strSectionLabel: t,
          rtSectionStart: n,
          rtSectionEnd: a,
          bIsFutureSection: e <= n,
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
              (this.m_key = e),
              M.a.HintLoad();
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
            (e.prototype.BIsCollectionCalendar = function() {
              return !!this.m_key.collectionid;
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
            (e.prototype.GetCalendarItemsInTimeRange = function(t, n, a) {
              var e = this.GetCalendarEventList().filter(function(e) {
                  return (
                    e.start_time >= t &&
                    (!n || e.start_time < n) &&
                    (a || E.c.BShouldDisplayEvent(e))
                  );
                }),
                o = this.GetStoreInitializationTimestamp().getTime() / 1e3,
                r = t < o,
                i = r ? "backward" : "forward",
                s = this.GetTimeEdgeForDirection(i),
                l = r
                  ? this.BHitBackwardHorizon() || (s && s < t)
                  : this.BHitForwardHorizon() || (n && s && n < s);
              return (
                l || this.LoadAdditionalEvents(i),
                { rgCalendarItems: e, bIsComplete: l }
              );
            }),
            (e.prototype.CountCalenderItemsInTimeRange = function(e, t, n) {
              for (
                var a = 0, o = 0, r = this.GetCalendarEventList();
                o < r.length;
                o++
              ) {
                var i = r[o];
                i.start_time >= e &&
                  (!t || i.start_time < t) &&
                  (n || E.c.BShouldDisplayEvent(i)) &&
                  (a += 1);
              }
              return a;
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
                n = [],
                a = e.getTime() / 1e3;
              n.push(B(a, Object(L.d)("#EventCalendar_FutureEventsHeader"), a));
              var o = new Date(e);
              o.setHours(0, 0, 0, 1);
              var r = o.getTime() / 1e3;
              n.push(B(a, Object(L.d)("#Time_Today"), r, a)),
                o.setDate(o.getDate() - 1);
              var i = r;
              (r = o.getTime() / 1e3),
                n.push(B(a, Object(L.d)("#Time_Yesterday"), r, i));
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
                  n.push(B(a, Object(L.f)(o), r, i)),
                  s && s.start_time > r && (l = !0);
              for (
                var d = new Date(o), p = r;
                d.getMonth() == e.getMonth() && 1 != d.getDate() && !l;

              ) {
                d.setDate(d.getDate() - 7);
                var u = d.getTime() / 1e3;
                n.push(B(a, Object(L.e)(p - 1), u, p)),
                  s && s.start_time > u && (l = !0),
                  (p = u);
              }
              var m = new Date(e);
              m.setHours(0, 0, 0, 1), m.setDate(1);
              for (var h = p, v = 1; v <= 14 && !l; v++) {
                var _ = new Date(m);
                _.setMonth(e.getMonth() - v, 1);
                var b = _.getTime() / 1e3;
                n.push(B(a, Object(L.e)(h - 1), b, h)),
                  s && s.start_time > b && (l = !0),
                  (h = b);
              }
              this.m_rgCalendarSections.length > n.length
                ? this.m_rgCalendarSections.splice(
                    n.length,
                    this.m_rgCalendarSections.length
                  )
                : n
                    .splice(this.m_rgCalendarSections.length, n.length)
                    .forEach(function(e) {
                      return t.m_rgCalendarSections.push(e);
                    });
            }),
            (e.prototype.InitFutureCalendarSections = function() {
              var t = this,
                e = this.GetStoreInitializationTimestamp(),
                n = [],
                a = new Date(e);
              a.setMonth(a.getMonth() + 14);
              var o = a.getTime() / 1e3;
              this.m_key.rtCalendarEnd &&
                this.m_key.rtCalendarEnd < o &&
                (o = this.m_key.rtCalendarEnd);
              var r =
                0 < this.m_rgSortedCalendarEvents.length &&
                this.m_rgSortedCalendarEvents[0];
              r && r.start_time < o && (o = r.start_time);
              var i = e.getTime() / 1e3,
                s = 3600 * Math.floor(e.getTime() / 1e3 / 3600),
                l = 3600 + s;
              n.push(B(i, Object(L.d)("#Time_Now"), s, l));
              var c = o <= l,
                d = new Date(e);
              d.setHours(24, 0, 0, 0);
              var p = d.getTime() / 1e3;
              c ||
                n.push(
                  B(
                    i,
                    Object(L.d)(
                      this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today"
                    ),
                    l,
                    p
                  )
                ),
                (c = o <= p);
              var u = p;
              d.setDate(d.getDate() + 1),
                (p = d.getTime() / 1e3),
                c || n.push(B(i, Object(L.d)("#Time_Tomorrow"), u, p)),
                (c = o <= p);
              for (var m = 6 - I(e).weekday(), h = 2; h <= m && !c; h++) {
                u = p;
                var v = Object(L.f)(d);
                d.setDate(d.getDate() + 1),
                  (p = d.getTime() / 1e3),
                  n.push(B(i, v, u, p)),
                  (c = o <= p);
              }
              if (this.m_key.bSectionByDay)
                for (; !c; ) {
                  u = p;
                  v = Object(L.g)(d);
                  d.setDate(d.getDate() + 1),
                    (p = d.getTime() / 1e3),
                    n.push(B(i, v, u, p)),
                    (c = o <= p);
                }
              else {
                var _ = new Date(d),
                  b = p,
                  g = I(e).daysInMonth();
                if (_.getMonth() == e.getMonth() && _.getDate() != g && !c) {
                  _.setDate(_.getDate() + 7);
                  var y = _.getTime() / 1e3;
                  n.push(B(i, Object(L.d)("#EventCalendar_NextWeek"), b, y)),
                    (c = o <= y),
                    (b = y);
                }
                var E = new Date(e);
                E.setMonth(E.getMonth() + 1),
                  E.setDate(1),
                  E.setHours(0, 0, 0, 0);
                var S = void 0;
                if (_ < E && !c) {
                  var f = E.getTime() / 1e3;
                  n.push(
                    B(i, Object(L.d)("#EventCalendar_LaterThisMonth"), b, f)
                  ),
                    (c = o <= f),
                    (S = f);
                } else S = b;
                for (var C = 2; C <= 14 && !c; C++) {
                  var O = new Date(E);
                  O.setMonth(e.getMonth() + C);
                  f = O.getTime() / 1e3;
                  n.push(B(i, Object(L.e)(S), S, f)), (c = o <= f), (S = f);
                }
              }
              this.m_rgFutureSections.length > n.length
                ? this.m_rgFutureSections.splice(
                    n.length,
                    this.m_rgFutureSections.length
                  )
                : n
                    .splice(this.m_rgFutureSections.length, n.length)
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
            (e.prototype.RegisterCalendarEventsAndModels = function(t) {
              return Object(k.b)(this, void 0, void 0, function() {
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.RegisterCalendarApps(t.apps),
                        this.RegisterCalendarClans(t.clans),
                        [4, this.RegisterCalendarEvents(t.documents)]
                      );
                    case 1:
                      return (
                        e.sent(),
                        w.c.RegisterClanEvents(t.events),
                        this.RegisterReadEvents(t.events_read),
                        this.RegisterEventVotes(t.event_votes),
                        t.forwardComplete &&
                          (this.m_bFinishedSearchingForward = !0),
                        t.backwardComplete &&
                          (this.m_bFinishedSearchingBackward = !0),
                        this.InitCalendarSections(),
                        N.a.bEnableNewsHubMayUpdate &&
                          this.InitFutureCalendarSections(),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.RegisterCalendarApps = function(e) {
              if (e) {
                for (var t = [], n = 0, a = e; n < a.length; n++) {
                  var o = a[n];
                  if (!this.m_mapCalendarAppsByID.has(o.appid)) {
                    var r = new p.b();
                    (r.appid = o.appid),
                      (r.source = o.source),
                      (r.playtime = o.playtime),
                      (r.last_played = o.last_played),
                      (r.wishlist_added = o.wishlist_added),
                      this.m_mapCalendarAppsByID.set(o.appid, r),
                      t.push(o.appid);
                  }
                }
                0 < t.length && T.a.LoadAppLinkInfo(t);
              }
            }),
            (e.prototype.RegisterCalendarClans = function(e) {
              if (e)
                for (var t = 0, n = e; t < n.length; t++) {
                  var a = n[t];
                  if (!this.m_mapCalendarClansByID.has(a.clanid)) {
                    var o = new p.c();
                    (o.clanid = a.clanid),
                      (o.source = a.source),
                      this.m_mapCalendarClansByID.set(a.clanid, o);
                  }
                }
            }),
            (e.prototype.RegisterReadEvents = function(e) {
              if (e)
                for (var t = A.a.Get(), n = 0, a = e; n < a.length; n++) {
                  var o = a[n];
                  t.SetEventAsRead(o);
                }
            }),
            (e.prototype.RegisterEventVotes = function(e) {
              if (e)
                for (var t = A.a.Get(), n = 0, a = e; n < a.length; n++) {
                  var o = a[n],
                    r = void 0 === o.vote ? void 0 : Boolean(o.vote);
                  t.SetVote(o.id, r);
                }
            }),
            (e.prototype.RegisterCalendarEvents = function(i) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n, a, o, r;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (!i) return [3, 10];
                      (t = !1), (n = 0), (a = i), (e.label = 1);
                    case 1:
                      return n < a.length
                        ? ((o = a[n]),
                          (r = void 0),
                          o.appid
                            ? [4, T.a.LoadAppLinkInfo([o.appid])]
                            : [3, 3])
                        : [3, 9];
                    case 2:
                      if ((e.sent(), !(r = T.a.GetAppLinkInfo(o.appid))))
                        return [3, 8];
                      e.label = 3;
                    case 3:
                      return this.BIsGlobalCalendar() && o.appid
                        ? [4, M.a.HintLoad()]
                        : [3, 5];
                    case 4:
                      if (
                        (e.sent(),
                        S.BIsMutedAppID(o.appid) || M.a.BIsGameIgnored(o.appid))
                      )
                        return [3, 8];
                      e.label = 5;
                    case 5:
                      return this.BIsCollectionCalendar() && o.appid
                        ? [4, M.a.HintLoad()]
                        : [3, 7];
                    case 6:
                      if (
                        (e.sent(), Object(D.b)(r) || S.BIsMutedAppID(o.appid))
                      )
                        return [3, 8];
                      e.label = 7;
                    case 7:
                      this.InternalInsertCalendarEventItem(o) && (t = !0),
                        (e.label = 8);
                    case 8:
                      return n++, [3, 1];
                    case 9:
                      t && this.RebuildSortedCalendarEventList(),
                        (e.label = 10);
                    case 10:
                      return [2];
                  }
                });
              });
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
              var n =
                  "forward" === e
                    ? this.m_bFinishedSearchingForward
                    : this.m_bFinishedSearchingBackward,
                a = this.GetTimeEdgeForDirection(e, void 0);
              return n || a !== t
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
                    n,
                    a,
                    o,
                    r,
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
                        (n =
                          "forward" === d
                            ? this.m_nForwardStuckCount
                            : this.m_nBackwardStuckCount),
                        (a = 3 <= n ? 1 : 0),
                        (o = 50 * (n < 3 ? n + 1 : 1)),
                        15,
                        (r = this.GetTimeEdgeForDirection(
                          d,
                          N.a.GetTimeNowWithOverride()
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
                          ? ((i.minTime = Math.floor(r + a)),
                            (i.ascending = !0))
                          : ((i.maxTime = Math.floor(r - a)),
                            (i.ascending = !1)),
                        (s = this.GetRequestInFlight(d)) ||
                          ((l = _.a.get(t, {
                            params: i,
                            cancelToken: p ? p.token : void 0
                          })),
                          (s = l
                            .then(function(n) {
                              return Object(k.b)(c, void 0, void 0, function() {
                                var t;
                                return Object(k.e)(this, function(e) {
                                  switch (e.label) {
                                    case 0:
                                      return (
                                        this.SetRequestInFlight(d, null),
                                        1 != n.data.success
                                          ? [3, 2]
                                          : [
                                              4,
                                              this.RegisterCalendarEventsAndModels(
                                                n.data
                                              )
                                            ]
                                      );
                                    case 1:
                                      return (
                                        e.sent(),
                                        this.UpdateStuckCounters(d, r)
                                          ? ((t = this.BIsSingleAppCalendar()),
                                            [
                                              2,
                                              this.LoadAdditionalEvents(
                                                d,
                                                p,
                                                t,
                                                !1
                                              )
                                            ])
                                          : [3, 3]
                                      );
                                    case 2:
                                      console.error(
                                        "LoadAdditionalEvents was not successful: Msg" +
                                          n.data.msg
                                      ),
                                        (e.label = 3);
                                    case 3:
                                      return [2, n.data.success];
                                  }
                                });
                              });
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
                n = this.m_mapCalendarClansByID.get(e.clanid);
              if (!t && !n)
                return console.log("No AppInfo or ClanInfo For: ", e), !1;
              var a = new p.d();
              return (
                (a.clanid = e.clanid),
                (a.unique_id = e.unique_id),
                (a.event_type = e.event_type),
                (a.appid = e.appid),
                (a.start_time = e.start_time),
                (a.score = e.score),
                (a.appInfo = t),
                (a.clanInfo = n),
                this.m_rgSortedCalendarEvents.push(a),
                this.m_mapCalendarEventsByGid.set(a.unique_id, a),
                !0
              );
            }),
            (e.prototype.RebuildSortedCalendarEventList = function() {
              var e = this.m_rgSortedCalendarEvents.slice();
              this.m_rgSortedCalendarEvents = e.sort(function(e, t) {
                return t.start_time - e.start_time;
              });
            }),
            (e.prototype.UpdateEventBlockFromCalenderEvent = function(a, o) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = a.appInfo ? a.appid : void 0),
                        (n = a.clanInfo ? a.clanInfo.clanid : void 0),
                        null == t && null == n
                          ? (Object(h.a)(
                              !1,
                              "Both clan id and account id are missing, cannot change communication status"
                            ),
                            [2])
                          : [4, S.UpdateCommunitionSetting(o, t, n)]
                      );
                    case 1:
                      return (
                        e.sent() &&
                          !o &&
                          this.BIsGlobalCalendar() &&
                          (t || n) &&
                          this.FilterOutCalendarEntryBy(t, n),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.FilterOutCalendarEntryBy = function(e, t) {
              var n = new Array();
              if (e) {
                for (
                  var a = 0, o = this.m_rgSortedCalendarEvents;
                  a < o.length;
                  a++
                ) {
                  (s = o[a]).appid != e && n.push(s);
                }
                u.b.RecordAppInteractionEvent(e, u.a.k_eMuted);
              } else if (t)
                for (
                  var r = 0, i = this.m_rgSortedCalendarEvents;
                  r < i.length;
                  r++
                ) {
                  var s;
                  (s = i[r]).clanid != t && n.push(s);
                }
              this.m_rgSortedCalendarEvents = n;
            }),
            (e.prototype.IgnoreAppAndFilterCalendar = function(n) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [4, M.a.UpdateAppIgnore(n.appInfo.appid, !0)];
                    case 1:
                      return (
                        (t = e.sent()),
                        this.BIsGlobalCalendar() &&
                          1 == t.success &&
                          this.FilterOutCalendarEntryBy(
                            n.appInfo.appid,
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
      function x() {
        return (
          null == v.m_strCurCalendarKey && C({}), f.get(v.m_strCurCalendarKey)
        );
      }
      window.g_EventCalendarMap = f;
      var R,
        P,
        F = n("IjL/"),
        H = n("55Ip"),
        z = n("Mgs7"),
        U = n("6Y59"),
        W = n("5E+2"),
        V = n("+d9t"),
        Z = n("exH9"),
        Y = n("kyHq"),
        q = n("bxiW"),
        J = n("bS9Q"),
        Q = n("I2Hi"),
        X = n.n(Q),
        K = (function(t) {
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
            (e.prototype.UpdateAppSuggestions = function(n) {
              return Object(k.b)(this, void 0, void 0, function() {
                var s,
                  t = this;
                return Object(k.e)(this, function(e) {
                  return (
                    (null == (s = n.target.value && n.target.value.trim())
                    ? void 0
                    : s.length)
                      ? (window.clearTimeout(this.m_currentRequest),
                        (this.m_currentRequest = window.setTimeout(function() {
                          return Object(k.b)(t, void 0, void 0, function() {
                            var t,
                              n,
                              a,
                              o,
                              r,
                              i = this;
                            return Object(k.e)(this, function(e) {
                              switch (e.label) {
                                case 0:
                                  return (
                                    (t = {
                                      cc: G.c.COUNTRY,
                                      l: G.c.LANGUAGE,
                                      realm: Y.d.k_ESteamRealmGlobal,
                                      f: "jsonfull",
                                      term: s.replace(" ", "+"),
                                      require_type: this.props
                                        .filterStoreItemType
                                        ? this.props.filterStoreItemType.join(
                                            ","
                                          )
                                        : void 0,
                                      excluded_tags: M.a.GetExcludedTagsSortedByID(),
                                      excluded_content_descriptors: M.a.GetExcludedContentDescriptor()
                                    }),
                                    (n = G.c.STORE_BASE_URL + "search/suggest"),
                                    [
                                      4,
                                      _.a.get(n, {
                                        params: t,
                                        withCredentials: !0
                                      })
                                    ]
                                  );
                                case 1:
                                  return (
                                    (a = e.sent()),
                                    (o = (null ===
                                      (r = null == a ? void 0 : a.data) ||
                                    void 0 === r
                                    ? void 0
                                    : r.length)
                                      ? a.data.map(function(e) {
                                          var t = j.createElement(
                                            "div",
                                            {
                                              className: X.a.ResultRow,
                                              key: "suggestion-" + e.id,
                                              onClick: function() {
                                                return i.props.fnOnSelected(e);
                                              }
                                            },
                                            j.createElement("img", {
                                              src: e.img,
                                              className: X.a.AvatarImage
                                            }),
                                            j.createElement(
                                              "div",
                                              { className: X.a.GameName },
                                              " ",
                                              Object(J.b)(e.name),
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
                { className: X.a.SuggestContainer },
                j.createElement(z.j, {
                  type: "text",
                  label: this.props.strLabel,
                  onChange: this.UpdateAppSuggestions,
                  bAlwaysShowClearAction: e
                }),
                e &&
                  j.createElement(
                    "div",
                    {
                      className: Object(Z.a)(
                        X.a.Results,
                        this.props.strResultsClass
                      )
                    },
                    this.state.rgSuggestions
                  )
              );
            }),
            Object(k.c)([q.a], e.prototype, "UpdateAppSuggestions", null),
            e
          );
        })(j.Component),
        $ = n("IWyE"),
        ee = n.n($),
        te = (function() {
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
              var n = {
                month:
                  e.startEvent.getMonth() != e.endEvent.getMonth()
                    ? "long"
                    : void 0,
                day: "numeric"
              };
              return (
                t +
                " - " +
                e.endEvent.toLocaleDateString(L.c.GetPreferredLocales(), n)
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
        ne = new te(),
        ae = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.specialEvent,
                t = window.location.href === G.c.STORE_BASE_URL + e.newshubUrl,
                n = te.IsCurrentlyActive(e),
                a = te.LocalizeDateString(e);
              return j.createElement(
                H.b,
                { to: "/" + e.newshubUrl },
                j.createElement(
                  "div",
                  {
                    className: Object(Z.a)(
                      ee.a.SpecialEvent,
                      t && ee.a.SpecialEventOnPage,
                      n && ee.a.SpecialEventActive
                    )
                  },
                  j.createElement(
                    "div",
                    { className: ee.a.SpecialEventTitle },
                    Object(L.d)(e.sLocToken)
                  ),
                  a &&
                    j.createElement(
                      "div",
                      { className: ee.a.SpecialEventTime },
                      a
                    )
                )
              );
            }),
            t
          );
        })(j.Component),
        oe = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = ne.GetVisibleSpecialEvents();
              return 0 === e.length
                ? null
                : j.createElement(
                    "div",
                    { className: ee.a.SpecialEventListGroup },
                    j.createElement(
                      "div",
                      { className: ee.a.SpecialEventListTitle },
                      Object(L.d)("#Events_SpecialEvents")
                    ),
                    j.createElement(
                      "div",
                      { className: ee.a.SpecialEventList },
                      e.map(function(e) {
                        return j.createElement(ae, {
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
        re = (function(e) {
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
              var n = this,
                e = E.c.BIsEventTypeGroupAllowed(t);
              return j.createElement(
                W.a,
                {
                  toolTipContent: Object(L.d)(
                    "#EventCalendar_EventTypeGroup_ttip_" + t
                  ),
                  direction: "top"
                },
                j.createElement(z.d, {
                  key: "group-" + t,
                  label: Object(L.d)("#EventCalendar_EventTypeGroup_" + t),
                  checked: e,
                  onChange: function(e) {
                    return n.OnEventTypeChange(t, e);
                  }
                })
              );
            }),
            (t.prototype.OnGameSourceChange = function(e, t) {
              E.c.SetGameSourceAllowed(e, t), this.props.fnOnFilterChange();
            }),
            (t.prototype.RenderGameSourceCheckbox = function(t, e) {
              var n = this,
                a = E.c.BIsGameSourceAllowed(t);
              return j.createElement(
                W.a,
                {
                  direction: "top",
                  toolTipContent: e
                    ? Object(L.d)("#EventCalendar_DisabledFilter_LoginPrompt")
                    : Object(L.d)("#EventCalendar_GameSource_ttip_" + t)
                },
                j.createElement(z.d, {
                  key: "gs-" + t,
                  label: Object(L.d)("#EventCalendar_GameSource_" + t),
                  checked: a,
                  disabled: e,
                  onChange: function(e) {
                    return n.OnGameSourceChange(t, e);
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
                    H.b,
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
                n = e.nDisappearingHeaderVisibleHeight,
                a = e.nGlobalHeaderTop,
                o = (e.nVisibleHeight, e.bIsCollapsed),
                r = e.bShouldIncludeLegalFooter,
                i = e.fnToggleCollapsed,
                s = et(),
                l = s
                  ? j.createElement(
                      "div",
                      {
                        className: ee.a.MobileButton,
                        onClick: i,
                        style: { transform: "translateY(" + a + "px)" }
                      },
                      o
                        ? j.createElement(U.a, null)
                        : j.createElement(U.y, null)
                    )
                  : null,
                c = o ? n : 0,
                d = s
                  ? null
                  : j.createElement(
                      "div",
                      { onClick: i, className: ee.a.CollapseButton },
                      j.createElement(
                        "div",
                        {
                          style: { marginTop: c + "px" },
                          className: ee.a.DesktopButton
                        },
                        j.createElement(U.g, { angle: o ? 180 : 0 })
                      )
                    ),
                p = o ? null : { top: n + "px" },
                u = x(),
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
                    className: Object(Z.a)(
                      ee.a.SidebarContainer,
                      o && ee.a.SidebarCollapsed
                    ),
                    style: p
                  },
                  o
                    ? d
                    : j.createElement(
                        "div",
                        { className: ee.a.Sidebar },
                        d,
                        j.createElement(
                          "div",
                          { className: ee.a.SidebarBackground },
                          j.createElement(U.z, null)
                        ),
                        Boolean(!u.BIsGlobalCalendar()) &&
                          j.createElement(
                            "span",
                            { className: ee.a.SidebarBackLink },
                            j.createElement(
                              H.b,
                              { to: "/newshub" },
                              j.createElement(U.g, {
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
                          { className: ee.a.SidebarTitle },
                          this.GetCalendarTitle(u)
                        ),
                        j.createElement(
                          "div",
                          { className: ee.a.FilterSection },
                          m &&
                            j.createElement(
                              "div",
                              { className: ee.a.FilterSubSection },
                              j.createElement(
                                "div",
                                { className: ee.a.FilterSubSectionTitle },
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
                              { className: ee.a.FilterSubSection },
                              j.createElement(
                                "div",
                                { className: ee.a.FilterSubSectionTitle },
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
                        j.createElement(K, {
                          strLabel: Object(L.d)("#EventCalendar_GameSearch"),
                          fnOnSelected: function() {},
                          fnDecorateSuggestion: this.DecorateSearchSuggestion,
                          filterStoreItemType: ["game", "software"]
                        }),
                        j.createElement(oe, null),
                        j.createElement(
                          "div",
                          { className: ee.a.SidebarManageMutedApps },
                          _ &&
                            j.createElement(
                              "div",
                              {
                                className: Object(Z.a)(
                                  ee.a.SidebarLink,
                                  ee.a.ForceDesktopLink
                                ),
                                onClick: _
                              },
                              Object(L.d)("#EventCalendar_ForceDesktopView")
                            ),
                          b &&
                            j.createElement(
                              "div",
                              {
                                className: Object(Z.a)(
                                  ee.a.SidebarLink,
                                  ee.a.ForceResponsiveLink
                                ),
                                onClick: b
                              },
                              Object(L.d)("#EventCalendar_ShowResponsiveView")
                            ),
                          Boolean(u.BIsGlobalCalendar()) &&
                            0 < v &&
                            j.createElement(
                              V.a,
                              {
                                className: ee.a.MutedSourcesGroup,
                                href:
                                  G.c.STORE_BASE_URL +
                                  "account/emailoptout/app",
                                bDisableContextMenu: !0
                              },
                              Object(L.d)("#EventCalendar_ManageMutedSources"),
                              j.createElement(
                                "div",
                                { className: ee.a.MutedSourcesCount },
                                v
                              )
                            ),
                          j.createElement(
                            V.a,
                            {
                              href: G.c.STORE_BASE_URL + "account/preferences",
                              bDisableContextMenu: !0
                            },
                            Object(L.d)("#EventCalendar_ManageStorePref")
                          )
                        ),
                        r &&
                          j.createElement(
                            "div",
                            { className: ee.a.SidebarFooter },
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
        ie = Object(c.g)(re),
        se = n("0OaU"),
        le = n("uuth"),
        ce = n("ylkE"),
        de = n("cGQe"),
        pe = n("qiKp"),
        ue = (function() {
          return function() {
            (this.m_bHasBeenTracked = !1), (this.m_fnSubmit = null);
          };
        })(),
        me = new ((function() {
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
                t || ((t = new ue()), this.m_mapEvents.set(e.GID, t)),
                  t.m_bHasBeenTracked ||
                    t.m_fnSubmit ||
                    ((t.m_fnSubmit = new pe.b()),
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
                u.b.RecordViewedEvent(x(), e.GID);
              var t = this.m_mapEvents.get(e.GID);
              t &&
                ((t.m_bHasBeenTracked = !0),
                t.m_fnSubmit.Cancel(),
                (t.m_fnSubmit = null));
            }),
            e
          );
        })())(),
        he = function(e) {
          var t = e.event;
          if (me.ShouldTrack(t)) {
            return j.createElement(le.a, {
              onEnter: function() {
                return me.StartTracking(t);
              },
              onLeave: function() {
                return me.StopTracking(t);
              }
            });
          }
          return null;
        },
        ve = n("mgoM"),
        _e = n("U+Q5"),
        be = n("YLyR"),
        ge = n("Kw0F");
      ((P = R || (R = {}))[(P.NotLoaded = 0)] = "NotLoaded"),
        (P[(P.Loading = 1)] = "Loading"),
        (P[(P.Loaded = 2)] = "Loaded");
      var ye = R.NotLoaded,
        Ee = [];
      function Se(t) {
        if (ye != R.Loaded) {
          if (ye == R.NotLoaded) {
            var e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(e, n),
              (window.onYouTubeIframeAPIReady = fe);
          }
          Ee.findIndex(function(e) {
            return t == e;
          }) < 0 && Ee.push(t);
        } else t();
      }
      function fe() {
        ye = R.Loaded;
        for (var e = 0, t = Ee; e < t.length; e++) {
          (0, t[e])();
        }
        Ee = [];
      }
      var Ce = (function(n) {
          function a(e) {
            var t = n.call(this, e) || this;
            return (
              (t.m_strPlayerID = ""),
              (t.m_player = null),
              (t.m_playerContainer = null),
              (t.m_bPlayerReady = !1),
              (t.m_strPlayerID = "YoutubePlayer_" + a.s_nPlayerIndex++),
              (t.state = { bYoutubeLoaded: !1 }),
              t
            );
          }
          return (
            Object(k.d)(a, n),
            (a.prototype.componentWillUnmount = function() {
              this.DestroyPlayer(),
                (function(e) {
                  ge.b(Ee, e);
                })(this.OnYoutubeScriptsReady);
            }),
            (a.prototype.shouldComponentUpdate = function(e, t) {
              if (!this.m_player) return !1;
              var n = this.props;
              return (
                n.autoplay != e.autoplay ||
                n.controls != e.controls ||
                n.showInfo != e.showInfo ||
                n.video != e.video
                  ? this.CreatePlayer(e)
                  : (n.width == e.width && n.height == e.height) ||
                    (this.m_bPlayerReady &&
                      e.width &&
                      e.height &&
                      this.m_player.setSize(e.width, e.height)),
                !1
              );
            }),
            (a.prototype.DestroyPlayer = function() {
              if (this.m_player)
                try {
                  this.m_player.stopVideo && this.m_player.stopVideo(),
                    this.m_player.destroy && this.m_player.destroy();
                } catch (e) {
                } finally {
                  this.m_player = null;
                }
            }),
            (a.prototype.BindPlayerContainer = function(e) {
              this.m_playerContainer != e &&
                ((this.m_playerContainer = e),
                this.DestroyPlayer(),
                this.m_playerContainer && Se(this.OnYoutubeScriptsReady));
            }),
            (a.prototype.OnYoutubeScriptsReady = function() {
              this.CreatePlayer(this.props);
            }),
            (a.prototype.CreatePlayer = function(e) {
              if ((this.DestroyPlayer(), this.m_playerContainer)) {
                var t = !1 === e.autoplay ? 0 : 1,
                  n = !0 === e.showInfo ? 1 : 0,
                  a = !0 === e.controls ? 1 : 0,
                  o = !0 === e.showFullscreenBtn ? 1 : 0,
                  r = !0 === e.playsInline ? 1 : 0,
                  i = {
                    width: void 0 !== e.width ? String(e.width) : void 0,
                    height: void 0 !== e.height ? String(e.height) : void 0,
                    videoId: e.video,
                    playerVars: {
                      autoplay: t,
                      showinfo: n,
                      autohide: 1,
                      fs: o,
                      modestbranding: 1,
                      rel: 0,
                      playsinline: r,
                      iv_load_policy: 3,
                      controls: a,
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
            (a.prototype.OnPlayerReady = function(e) {
              if (((this.m_bPlayerReady = !0), this.props.onVideoInfoChanged)) {
                var t = this.m_player.getVideoData(),
                  n = { strAuthor: "", strTitle: "", strVideoID: "" };
                t.author && (n.strAuthor = t.author),
                  t.title && (n.strTitle = t.title),
                  t.video_id && (n.strVideoID = t.video_id),
                  this.props.onVideoInfoChanged(n);
              }
              this.props.width &&
                this.props.height &&
                this.m_player.setSize(this.props.width, this.props.height),
                this.props.autoplay && this.m_player.playVideo(),
                this.props.onPlayerReady && this.props.onPlayerReady();
            }),
            (a.prototype.OnPlayerStateChange = function(e) {
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
            (a.prototype.OnError = function(e) {
              console.log("Youtube: Playback failed", e),
                this.props.onError && this.props.onError(e);
            }),
            (a.prototype.OnPlayerLeftView = function() {
              this.props.autopause &&
                this.m_player &&
                this.m_bPlayerReady &&
                this.m_player.pauseVideo();
            }),
            (a.prototype.render = function() {
              var e = j.createElement(
                "div",
                {
                  key: this.m_strPlayerID,
                  ref: this.BindPlayerContainer,
                  className: Object(Z.a)("YoutubePlayer", this.props.classnames)
                },
                j.createElement(se.a, { className: "YoutubePlayerThrobber" })
              );
              return this.props.autopause
                ? j.createElement(le.a, { onLeave: this.OnPlayerLeftView }, e)
                : e;
            }),
            (a.s_nPlayerIndex = 0),
            Object(k.c)([q.a], a.prototype, "BindPlayerContainer", null),
            Object(k.c)([q.a], a.prototype, "OnYoutubeScriptsReady", null),
            Object(k.c)([q.a], a.prototype, "CreatePlayer", null),
            Object(k.c)([q.a], a.prototype, "OnPlayerReady", null),
            Object(k.c)([q.a], a.prototype, "OnPlayerStateChange", null),
            Object(k.c)([q.a], a.prototype, "OnError", null),
            Object(k.c)([q.a], a.prototype, "OnPlayerLeftView", null),
            a
          );
        })(j.Component),
        Oe = n("02Wr"),
        Ie = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.state = { bDismissedPreviewImage: !1 }), t;
          }
          return (
            Object(k.d)(e, n),
            (e.prototype.render = function() {
              var t = this;
              if (
                (this.props.preloadYoutubeScripts && Se(function() {}),
                this.state.bDismissedPreviewImage)
              )
                return j.createElement(Ce, Object(k.a)({}, this.props));
              var e = this.props.altImg
                ? this.props.altImg
                : "https://img.youtube.com/vi/" +
                  this.props.video +
                  "/maxresdefault.jpg";
              return j.createElement(
                "div",
                {
                  className: Object(Z.a)(
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
                  j.createElement(Oe.b, {
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
                  j.createElement(U.D, null)
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
        Te = n("N0Ye"),
        we = n("mB/g"),
        De = n("i6tc"),
        ke = n.n(De),
        Ae = n("RQmk"),
        je = n("ka0M"),
        Le = n("Jqb/"),
        Ge = n("X3Ds"),
        Me = n("TtDX"),
        Ne = n("y+6m"),
        Be = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.OnMuteButton = function(e) {
              var t = this.props.calendarEvent,
                n = t.GetEntityName();
              Object(je.d)(
                j.createElement(
                  Le.c,
                  {
                    strTitle: Object(L.d)("#EventCalendar_MuteApp"),
                    strDescription: Object(L.d)(
                      "#EventCalendar_MuteApp_details",
                      n
                    ),
                    onOK: function() {
                      return x().UpdateEventBlockFromCalenderEvent(t, !1);
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
                Object(Ge.m)(e)
              );
            }),
            (t.prototype.OnUnMuteButton = function() {
              var e = this.props.calendarEvent;
              x().UpdateEventBlockFromCalenderEvent(e, !0);
            }),
            (t.prototype.IgnoreAppButton = function(e) {
              var t = this.props.calendarEvent;
              t.GetEntityName();
              Object(je.d)(
                j.createElement(
                  Le.c,
                  {
                    strTitle: Object(L.d)("#EventCalendar_Ignore"),
                    strDescription: Object(L.d)(
                      "#EventCalendar_IgnoreApp_ttip"
                    ),
                    onOK: function() {
                      return x().IgnoreAppAndFilterCalendar(t);
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
                Object(Ge.m)(e)
              );
            }),
            (t.prototype.UnignoreAppButton = function() {
              var e = this.props.calendarEvent;
              M.a.UpdateAppIgnore(e.appInfo.appid, !1);
            }),
            (t.prototype.HideAllEventsOfMyType = function() {
              var e = this.props.eventModel,
                t = E.c.MapClanEventTypeToGroup(e.GetEventType());
              E.c.SetEventTypeGroupAllowed(t, !1);
            }),
            (t.prototype.NoOp = function() {}),
            (t.prototype.AddContextMenuForSource = function(e, t, n, a) {
              void 0 === a && (a = !0),
                E.c.BIsGameSourceAllowed(t) &&
                  (a &&
                    e.push(
                      j.createElement(
                        Ne.d,
                        {
                          key: "item-source-" + n + "-" + t,
                          disabled: !0,
                          onSelected: function() {}
                        },
                        Object(L.d)("#EventCalender_Reason_" + t)
                      )
                    ),
                  e.push(
                    j.createElement(
                      Ne.d,
                      {
                        key: "item-hidesource-" + n + "-" + t,
                        onSelected: function() {
                          E.c.SetGameSourceAllowed(t, !1);
                        }
                      },
                      Object(L.d)("#EventCalender_Hide_Reason_" + t)
                    )
                  ));
            }),
            (t.prototype.RemoveFromWishlist = function() {
              M.a.UpdateGameWishlist(this.props.eventModel.appid, !1);
            }),
            (t.prototype.AddToWishlist = function() {
              M.a.UpdateGameWishlist(this.props.eventModel.appid, !0);
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
                n = t.eventModel,
                a = t.calendarEvent,
                o = [],
                r = a.GetSource(),
                i = a.unique_id,
                s = x();
              s.BIsGlobalCalendar() &&
                (r &&
                  r & p.a.k_eLibrary &&
                  (E.c.BIsGameSourceAllowed(E.b.k_ERecent) && a.appInfo
                    ? (o.push(
                        j.createElement(
                          Ne.d,
                          {
                            key: "item-source-" + i + "-lastplayed",
                            disabled: !0,
                            onSelected: function() {}
                          },
                          Object(L.d)(
                            "#EventCalender_LastPlayed",
                            Object(L.n)(
                              N.a.GetTimeNowWithOverride() -
                                a.appInfo.last_played
                            )
                          )
                        )
                      ),
                      this.AddContextMenuForSource(o, E.b.k_ERecent, i, !1))
                    : this.AddContextMenuForSource(o, E.b.k_ELibrary, i)),
                r &&
                  r & p.a.k_eWishlist &&
                  this.AddContextMenuForSource(o, E.b.k_EWishist, i),
                r &&
                  r & p.a.k_eFollowing &&
                  this.AddContextMenuForSource(o, E.b.k_EFollowing, i),
                r &&
                  r & p.a.k_eRecommended &&
                  this.AddContextMenuForSource(o, E.b.k_ERecommended, i),
                r &&
                  r & p.a.k_eSteam &&
                  this.AddContextMenuForSource(o, E.b.k_ESteam, i),
                r &&
                  r & p.a.k_eFeatured &&
                  this.AddContextMenuForSource(o, E.b.k_EFeatured, i)),
                o.push(
                  j.createElement(
                    Ne.d,
                    {
                      key: n.GID + "hidetype",
                      onSelected: this.HideAllEventsOfMyType
                    },
                    Object(L.d)(
                      "#EVentCalendar_Hide_EventType",
                      Object(L.d)(
                        "#EventCalendar_EventTypeGroup_" +
                          E.c.MapClanEventTypeToGroup(n.GetEventType())
                      )
                    )
                  )
                ),
                G.i.logged_in &&
                  (S.BIsEventBlocked(a)
                    ? o.push(
                        j.createElement(
                          Ne.d,
                          {
                            key: n.GID + "unmuteapp",
                            onSelected: this.OnUnMuteButton
                          },
                          j.createElement(
                            W.a,
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
                    : o.push(
                        j.createElement(
                          Ne.d,
                          {
                            key: n.GID + "muteapp",
                            onSelected: this.OnMuteButton
                          },
                          j.createElement(
                            W.a,
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
                  a.appInfo &&
                    (M.a.BIsGameIgnored(a.appInfo.appid)
                      ? o.push(
                          j.createElement(
                            Ne.d,
                            {
                              key: n.GID + "unignoreapp",
                              onSelected: this.UnignoreAppButton
                            },
                            Object(L.d)(
                              "#EventCalendar_UnignoreApp",
                              this.props.calendarEvent.GetEntityName()
                            )
                          )
                        )
                      : o.push(
                          j.createElement(
                            Ne.d,
                            {
                              key: n.GID + "ignoreapp",
                              onSelected: this.IgnoreAppButton
                            },
                            j.createElement(
                              W.a,
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
                  (n.appid
                    ? o.push(
                        j.createElement(
                          Ne.d,
                          { key: n.GID + "goto", onSelected: this.GotoAppID },
                          Object(L.d)(
                            "#EventCalendar_Goto_SpecificCalendar",
                            a.GetEntityName()
                          )
                        )
                      )
                    : o.push(
                        j.createElement(
                          Ne.d,
                          { key: n.GID + "goto", onSelected: this.GotoGroupID },
                          Object(L.d)(
                            "#EventCalendar_Goto_SpecificCalendar",
                            a.GetEntityName()
                          )
                        )
                      )),
                Object(Me.a)(j.createElement(Ne.c, null, o), e);
            }),
            (t.prototype.render = function() {
              return j.createElement(
                "div",
                {
                  className: Object(Z.a)(ke.a.FooterStat, ke.a.Options),
                  onClick: this.CreateContextMenu
                },
                j.createElement(U.x, null)
              );
            }),
            Object(k.c)([q.a], t.prototype, "OnMuteButton", null),
            Object(k.c)([q.a], t.prototype, "OnUnMuteButton", null),
            Object(k.c)([q.a], t.prototype, "IgnoreAppButton", null),
            Object(k.c)([q.a], t.prototype, "UnignoreAppButton", null),
            Object(k.c)([q.a], t.prototype, "HideAllEventsOfMyType", null),
            Object(k.c)([q.a], t.prototype, "NoOp", null),
            Object(k.c)([q.a], t.prototype, "AddContextMenuForSource", null),
            Object(k.c)([q.a], t.prototype, "RemoveFromWishlist", null),
            Object(k.c)([q.a], t.prototype, "AddToWishlist", null),
            Object(k.c)([q.a], t.prototype, "GotoAppID", null),
            Object(k.c)([q.a], t.prototype, "GotoGroupID", null),
            Object(k.c)([q.a], t.prototype, "CreateContextMenu", null),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        xe = Object(c.g)(Be),
        Re = (function(t) {
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
                n = t.video_preview_type,
                a = t.video_preview_id;
              if (!a) return null;
              if (12 === this.props.eventModel.type) return null;
              if ("youtube" !== n) return null;
              var o = Object(ve.d)(G.c.LANGUAGE),
                r =
                  tt() && 14 == this.props.eventModel.GetEventType()
                    ? _e.c.full
                    : _e.c.capsule_main,
                i = this.props.eventModel.GetImageForSizeAsArrayWithFallback(
                  "capsule",
                  o,
                  r
                );
              return j.createElement(Ie, {
                video: a,
                altImgWithFallback: i,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                imageClassnames: ke.a.YoutubePreviewImage,
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
                n = e.calendarEvent,
                a = e.bSuppressHoverEffects,
                o = e.bMiniMode,
                r = A.a.Get(),
                i = n.GetEntityName(),
                s = n.GetGameCapsule(),
                l = Object(ve.d)(G.c.LANGUAGE),
                c = t.has_live_stream,
                d = t.has_live_stream,
                p =
                  tt() && 14 == t.GetEventType()
                    ? _e.c.full
                    : _e.c.capsule_main,
                u = "capsule",
                m = t.BImageNeedScreenshotFallback(u, l),
                h = Boolean(m && t.appid)
                  ? t.GetFallbackArtworkScreenshot()
                  : t.GetImageURLWithFallback(u, l, p),
                v = this.getVideoPreviewControl(),
                _ = !v && !o,
                b = t.GetCategoryAsString(),
                g = ke.a["EventType" + t.GetEventType()],
                y = t.GetAllTags().map(function(e) {
                  return ke.a["Tag-" + e];
                }),
                E = Z.a.apply(
                  void 0,
                  Object(k.g)(
                    [
                      ke.a.TileContainer,
                      g,
                      c && ke.a.TileVideoIcon,
                      a ? ke.a.DisableHovers : ke.a.EnableHovers,
                      this.state.bVideoPlayerReady && ke.a.VideoPlayerReady,
                      v && ke.a.HasVideo,
                      r.HasEventBeenRead(t.GID) && ke.a.HasBeenRead,
                      o && ke.a.MiniMode
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
                  { className: ke.a.CoverImageCtn },
                  v,
                  _ &&
                    j.createElement(
                      j.Fragment,
                      null,
                      12 === t.type &&
                        j.createElement(
                          "div",
                          { className: ke.a.GameCapsuleCtn },
                          j.createElement("div", {
                            className: ke.a.AppBannerLogo,
                            style: { backgroundImage: "url(" + s + ")" }
                          })
                        ),
                      12 !== t.type &&
                        j.createElement(
                          "div",
                          {
                            className: Object(Z.a)(
                              ke.a.EventCapsuleCtn,
                              c && ke.a.LiveBroadcastPreview
                            )
                          },
                          j.createElement("div", {
                            className: Object(Z.a)(
                              ke.a.TileImage,
                              m && ke.a.FallbackImage
                            ),
                            style: { backgroundImage: "url(" + h + ")" }
                          }),
                          c &&
                            j.createElement("div", {
                              className: ke.a.TileCoverImagePlayable
                            }),
                          d &&
                            j.createElement(
                              "div",
                              { className: ke.a.TileCoverLiveIcon },
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
                    { className: ke.a.EventSummary },
                    j.createElement(
                      "div",
                      { className: Object(Z.a)(ke.a.TileTextCategoryType, g) },
                      b
                    )
                  )
                ),
                T = a && 14 != t.GetEventType() && !v,
                w = T && I,
                D = !T && I;
              return j.createElement(
                "div",
                { className: E },
                j.createElement(he, { event: t }),
                j.createElement(
                  we.c,
                  { eventModel: t, route: we.a.k_eView },
                  j.createElement(
                    "div",
                    { className: ke.a.Tile, onClick: this.OnFallbackClick },
                    14 === t.type &&
                      j.createElement("div", {
                        className: Object(Z.a)(
                          ke.a.TileBackgroundImage,
                          m && ke.a.FallbackImage
                        ),
                        style: { backgroundImage: "url(" + h + ")" }
                      }),
                    j.createElement(
                      "div",
                      { className: ke.a.MainContentContainer },
                      j.createElement(
                        "div",
                        { className: ke.a.TileTextContainer },
                        j.createElement(
                          "div",
                          { className: ke.a.PatchIconCtn },
                          j.createElement(U.r, null)
                        ),
                        j.createElement(
                          "div",
                          { className: ke.a.EventTitleCtn },
                          w,
                          j.createElement(Pe, Object(k.a)({}, this.props)),
                          j.createElement(
                            "div",
                            { className: ke.a.EventName },
                            S
                          ),
                          f &&
                            j.createElement(
                              "div",
                              { className: ke.a.EventSubTitle },
                              f
                            ),
                          12 !== t.type &&
                            C &&
                            j.createElement(
                              "div",
                              { className: ke.a.EventSummaryDefault },
                              C
                            ),
                          j.createElement(
                            "div",
                            { className: ke.a.EventTypeAndDateCtn },
                            12 === t.type &&
                              j.createElement(
                                "div",
                                { className: ke.a.SmallAppName },
                                i
                              ),
                            j.createElement(Fe, { eventModel: t })
                          )
                        ),
                        O &&
                          j.createElement(
                            "div",
                            { className: ke.a.ReminderContainer },
                            j.createElement(de.a, {
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
                j.createElement(He, Object(k.a)({}, this.props))
              );
            }),
            Object(k.c)([q.a], e.prototype, "OnFallbackClick", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Pe = function(e) {
          var t = e.eventModel,
            n = e.calendarEvent,
            a = e.bSuppressHoverEffects,
            o = n.GetEntityName(),
            r = n.GetGameIcon(),
            i = function(e) {
              Object(we.g)(t, we.a.k_eStoreOwnerPage),
                e.stopPropagation(),
                e.preventDefault();
            },
            s = a
              ? j.createElement(
                  "div",
                  {
                    className: Object(Z.a)(
                      ke.a.TileGameCapsule,
                      ke.a.DisableHovers
                    ),
                    onClick: i
                  },
                  j.createElement("img", { className: ke.a.AppIcon, src: r }),
                  j.createElement("div", { className: ke.a.TileTextAppName }, o)
                )
              : j.createElement(
                  "div",
                  { onClick: i },
                  j.createElement(
                    Ae.b,
                    {
                      hoverClassName: Object(Z.a)(
                        ke.a.TileGameCapsule,
                        ke.a.EnableHovers
                      ),
                      type: "app",
                      id: n.appid
                    },
                    j.createElement("img", { className: ke.a.AppIcon, src: r }),
                    j.createElement(
                      "div",
                      { className: ke.a.TileTextAppName },
                      o
                    )
                  )
                );
          return j.createElement(
            "div",
            { className: ke.a.TileTextHeader },
            s,
            n.GetSource() === p.a.k_eRecommended &&
              j.createElement(
                "div",
                { className: ke.a.SourceRecommended },
                Object(L.d)("#EventCalendar_GameSource_recommended_Verbose")
              )
          );
        },
        Fe = Object(r.observer)(function(e) {
          var t = e.eventModel,
            n = e.calendarEvent,
            a = N.a.GetTimeNowWithOverride(),
            o = t ? t.GetStartTimeAndDateUnixSeconds() : n.start_time,
            r = t ? t.GetPostTimeAndDateUnixSeconds() : n.start_time,
            i = t && Object(Te.a)(t.type) && t.GetEndTimeAndDateUnixSeconds();
          if (i && o < a && a < i) {
            var s = i - a,
              l = Object(L.n)(s, !0);
            return j.createElement(
              "div",
              { className: ke.a.LiveText },
              j.createElement(
                be.e,
                { rtFullDate: o, stylesmodule: ke.a },
                j.createElement(
                  "div",
                  { className: ke.a.LiveNow },
                  Object(L.d)("#EventCalendar_LiveNow")
                )
              ),
              j.createElement(
                be.e,
                { rtFullDate: i, stylesmodule: ke.a },
                Object(L.d)("#EventCalendar_TimeLeft", l)
              )
            );
          }
          if (o < a) {
            var c = a - o,
              d = c < 86400 ? Object(L.n)(c) : Object(L.m)(o),
              p = 3600 < Math.abs(o - r);
            return j.createElement(
              be.e,
              { rtFullDate: o, stylesmodule: ke.a },
              j.createElement(
                "div",
                { className: ke.a.PastDateText },
                Object(L.d)(
                  p
                    ? "#EventCalendar_StartedAtTime"
                    : "#EventCalendar_PostedAtTime",
                  d
                )
              )
            );
          }
          var u = (s = o - a) < 86400;
          return j.createElement(
            be.e,
            { rtFullDate: o, stylesmodule: ke.a },
            j.createElement(
              "div",
              { className: ke.a.FutureDateText },
              u
                ? Object(L.d)(
                    "#EventCalendar_WillStartAfterDuration",
                    Object(L.n)(s, !0)
                  )
                : Object(L.d)("#EventCalendar_WillStartAtTime", Object(L.m)(o))
            )
          );
        });
      var He = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.OnPerformVoteUp = function() {
              var e = this.props.eventModel,
                t = A.a.Get();
              !0 !== t.GetPreviouslyLoadedVote(this.props.eventModel) &&
                Object(ce.a)(e, t) &&
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
                n = Math.max(0, t.nVotesUp - t.nVotesDown),
                a = e.GetPreviouslyLoadedVote(this.props.eventModel),
                o = (function(e, t) {
                  return e.BIsUserLoggedIn()
                    ? G.i.is_limited
                      ? ke.a.Vote_LimitedUser
                      : !0 === t
                      ? ke.a.Vote_Positive
                      : !1 === t
                      ? ke.a.Vote_Negative
                      : ke.a.Vote_Ready
                    : ke.a.Vote_NotLoggedIn;
                })(e, a),
                r =
                  (G.c.IN_CLIENT ? "steam://openurl/" : "") +
                  t.GetForumTopicURL(),
                i =
                  0 < t.live_stream_viewer_count
                    ? t.live_stream_viewer_count
                    : void 0;
              return j.createElement(
                "div",
                { className: ke.a.Footer },
                j.createElement(
                  "div",
                  { className: ke.a.FooterRightSide },
                  Boolean(i) &&
                    j.createElement(
                      "div",
                      { className: ke.a.TileViewerCount },
                      i.toLocaleString(L.c.GetPreferredLocales())
                    ),
                  j.createElement(
                    "div",
                    {
                      className: Object(Z.a)(ke.a.FooterStat, ke.a.Vote, o),
                      onClick: this.OnPerformVoteUp
                    },
                    j.createElement(U.C, { className: ke.a.RateIcon }),
                    j.createElement("span", null, Number(n).toLocaleString())
                  ),
                  j.createElement(
                    "div",
                    { className: ke.a.FooterStat },
                    j.createElement(
                      "a",
                      {
                        href: r,
                        className: ke.a.CommentIconCtn,
                        target: "_blank",
                        onClick: this.OnDiscussionClicked
                      },
                      j.createElement(U.e, { className: ke.a.CommentIcon }),
                      j.createElement(
                        "span",
                        null,
                        Number(t.nCommentCount).toLocaleString()
                      )
                    )
                  ),
                  j.createElement(xe, Object(k.a)({}, this.props))
                )
              );
            }),
            Object(k.c)([q.a], t.prototype, "OnPerformVoteUp", null),
            Object(k.c)([q.a], t.prototype, "OnDiscussionClicked", null),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        ze = Object(r.observer)(function(t) {
          var e = t.calendarEvent,
            n = ke.a["EventType" + e.event_type],
            a = Object(Z.a)(ke.a.TileContainer, n);
          return j.createElement(
            le.a,
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
              { className: a },
              j.createElement("div", { className: ke.a.Tile }),
              j.createElement("div", { className: ke.a.Footer })
            )
          );
        }),
        Ue = Object(r.observer)(function(e) {
          var t = e.partnerEventStore,
            n = e.calendarEvent,
            a = Object(k.f)(e, ["partnerEventStore", "calendarEvent"]),
            o = t.GetClanEventModel(n.unique_id);
          return o
            ? j.createElement(
                Re,
                Object(k.a)({ eventModel: o, calendarEvent: n }, a)
              )
            : j.createElement(ze, { calendarEvent: n, partnerEventStore: t });
        }),
        We = n("UWWC"),
        Ve = n("yJqL"),
        Ze = n("xnZ7"),
        Ye = n.n(Ze),
        qe = n("qD+2"),
        Je = n("JJA/"),
        Qe = (function(t) {
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
                e.classList.add(Je.BodyNoScroll);
            }),
            (e.prototype.componentWillUnmount = function() {
              var e = this.GetBodyElement();
              e &&
                this.props.bPrimaryPageFeature &&
                e.classList.remove(Je.BodyNoScroll);
            }),
            (e.prototype.GetBodyElement = function() {
              return this.m_refParent.current
                ? this.m_refParent.current.closest("body")
                : null;
            }),
            (e.prototype.LoadEvent = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  n,
                  a,
                  o = this;
                return Object(k.e)(this, function(e) {
                  return (
                    (t = this.props),
                    (n = t.appid),
                    (a = t.announcementGID),
                    t.partnerEventStore
                      .LoadPartnerEventFromAnnoucementGID(n, a, 0)
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(k.e)(this, function(e) {
                  return (
                    (t = this.state.eventModel),
                    (n = this.props.trackingLocation),
                    t &&
                      t.BIsPartnerEvent() &&
                      A.a
                        .Get()
                        .GetTracker()
                        .MarkEventRead(
                          t.GID,
                          t.clanSteamID.GetAccountID(),
                          n
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
                  Le.h,
                  null,
                  j.createElement(
                    "div",
                    { className: Ye.a.FlexCenter, style: { height: "400px" } },
                    j.createElement(se.a, null)
                  )
                );
              var e = this.props,
                t = e.classname,
                n = e.partnerEventStore,
                a = e.bPrimaryPageFeature;
              if (this.state.eventModel) {
                var o = j.createElement(
                  "div",
                  null,
                  j.createElement(Ve.a, {
                    location: Ve.b.AppDetails,
                    initialEvent: this.state.eventModel,
                    partnerEventStore: n,
                    emoticonStore: We.b,
                    appInfoStore: qe.a,
                    closeFn: !a && this.props.closeModal,
                    showAppHeader: this.props.showAppHeader
                  })
                );
                return a ? o : j.createElement(Le.h, { className: t }, o);
              }
              return null;
            }),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Xe = n("BFsE"),
        Ke = "global_header";
      function $e() {
        var e = document.getElementById(Ke);
        if (e && "none" != getComputedStyle(e).display) return e;
        var t = document.getElementsByClassName("responsive_header");
        return (
          Object(h.a)(t.length <= 1, "Must have at most one responsive_header"),
          1 != t.length ? null : t[0]
        );
      }
      function et() {
        var e = $e();
        return e && e.id != Ke;
      }
      function tt() {
        return window.innerWidth < parseInt(ee.a.strMaxMobileWidth);
      }
      function nt() {
        return (
          et() ||
          window.innerWidth <
            parseInt(ee.a.strDesktopControlBarWidth) +
              parseInt(ee.a.strMaxMobileWidth)
        );
      }
      function at() {
        var e = et(),
          t = tt(),
          n = 0;
        return (
          $e() &&
            (n = parseInt(
              e
                ? ee.a.strMobileGlobalHeaderHeight
                : ee.a.strDesktopGlobalHeaderHeight
            )),
          {
            nGlobalHeaderHeight: n,
            nSteamLabsBannerHeight: parseInt(
              e
                ? ee.a.strMobileLabsBannerHeight
                : ee.a.strDesktopLabsBannerHeight
            ),
            nGroupHeaderHeight: parseInt(
              t
                ? ee.a.strMobileGroupHeaderHeight
                : ee.a.strDesktopGroupHeaderHeight
            )
          }
        );
      }
      var ot,
        rt,
        it = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = Object(k.a)(
                {
                  bUserIsLoggedIn: G.i.logged_in,
                  bShowFutureViewOnly: !1,
                  nVisibleHeight: 0,
                  nScrollTop: null,
                  bControlBarIsCollapsed: nt(),
                  bControlBarWasOpenedByUser: !1,
                  nDisappearingHeaderTop: 0
                },
                at()
              )),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              (e.m_nForcedScrollPosition = null),
              (e.m_nInitialScrollPosition = null),
              (e.m_refDiv = j.createRef()),
              (e.k_nMaxScrollErrorInPixels = 2),
              e
            );
          }
          var o;
          return (
            Object(k.d)(e, t),
            ((o = e).prototype.componentDidMount = function() {
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
                  n = t && b.a.GetStoreCapsuleInfo(t).GetAppStoreData();
                e = n && n.title;
              } else if (
                this.props.filter_to_clanids &&
                1 == this.props.filter_to_clanids.length
              ) {
                var a = this.props.filter_to_clanids[0],
                  o = a && g.a.GetClanInfoByClanAccountID(a);
                e = o && o.group_name;
              }
              var r = e
                ? Object(L.d)("#EventCalendar_TabTitle_GroupHub", e)
                : Object(L.d)("#EventCalendar_TabTitle_Global");
              document.title != r && (document.title = r),
                document.body.classList.contains("events_hub") ||
                  document.body.classList.add("events_hub");
            }),
            (e.prototype.OnResize = function() {
              this.setState(function(e) {
                var t = window.innerHeight,
                  n = !e.bControlBarWasOpenedByUser && nt(),
                  a = at();
                return Object(
                  k.a
                )({ nVisibleHeight: t, bControlBarIsCollapsed: n }, a);
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
                      n = e.nGlobalHeaderHeight + e.nSteamLabsBannerHeight,
                      a = t ? -1 * n : 0,
                      o = $e();
                    return (
                      o && (o.style.transform = "translateY(" + a + "px)"),
                      { nScrollTop: i, nDisappearingHeaderTop: a }
                    );
                  });
            }),
            (e.prototype.InitEventCalendarStore = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = o.m_bInitialLoad),
                        !this.state.bUserIsLoggedIn &&
                        this.BRequireLoggedInUser()
                          ? [3, 5]
                          : (C({
                              appids: this.props.filter_to_appids,
                              clanaccountids: this.props.filter_to_clanids,
                              collectionid: this.props.filter_to_collection
                            }),
                            (n = x()),
                            (a = Object(G.f)(
                              "initialEvents",
                              "application_config"
                            )) && o.m_bInitialLoad
                              ? [4, n.RegisterCalendarEventsAndModels(a)]
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
                              O.a.InitFromClanID(n.GetSingleGroupID())
                            )),
                        (e.label = 5);
                    case 5:
                      return (
                        t &&
                          E.c.InitializeCheckboxes(
                            this.state.bUserIsLoggedIn && G.i.accountid
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
                  n = e.bControlBarIsCollapsed,
                  a = t ? e.nDisappearingHeaderTop : 0,
                  o = $e();
                return (
                  o && (o.style.transform = "translateY(" + a + "px)"),
                  {
                    bControlBarIsCollapsed: t,
                    bControlBarWasOpenedByUser: n,
                    nDisappearingHeaderTop: a
                  }
                );
              });
            }),
            (e.prototype.OnControlBarChange = function() {
              (this.m_nInitialScrollPosition = null), window.scrollTo(0, 0);
            }),
            (e.prototype.CloseEventModal = function() {
              var e = $e();
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
                n = $e();
              if (
                (n && (n.style.transform = "translateY(" + -1 * t + "px)"),
                N.a.bOpenEventLandingPage)
              ) {
                var a = "/newshub/app/" + e.appid + "/view/" + e.GID;
                this.props.history.push(a);
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
                n = t + this.state.nGlobalHeaderHeight,
                a =
                  this.state.nVisibleHeight <= parseInt(ee.a.strMinMobileHeight)
                    ? 0
                    : this.state.nDisappearingHeaderTop + e;
              return j.createElement(
                j.Fragment,
                null,
                j.createElement(
                  F.a,
                  null,
                  j.createElement(dt, { nTopOffset: n })
                ),
                j.createElement(
                  "div",
                  {
                    ref: this.m_refDiv,
                    className: ee.a.EventCalendarContainer
                  },
                  j.createElement(
                    F.a,
                    null,
                    this.state.modalEvent
                      ? j.createElement(Qe, {
                          classname: ee.a.StoreHeaderAdjust,
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
                  j.createElement(
                    F.a,
                    null,
                    j.createElement(ie, {
                      bUserIsLoggedIn: this.state.bUserIsLoggedIn,
                      nDisappearingHeaderVisibleHeight: a,
                      nGlobalHeaderTop: t,
                      nVisibleHeight: this.state.nVisibleHeight,
                      bIsCollapsed: this.state.bControlBarIsCollapsed,
                      bShouldIncludeLegalFooter: !et(),
                      fnToggleCollapsed: this.ToggleControlBarCollapsed,
                      fnOnFilterChange: this.OnControlBarChange
                    })
                  ),
                  Boolean(
                    !this.BRequireLoggedInUser() || this.state.bUserIsLoggedIn
                  )
                    ? j.createElement(
                        F.a,
                        null,
                        j.createElement(pt, {
                          bShowFutureViewOnly: this.state.bShowFutureViewOnly,
                          fnOnEventClick: this.OnEventClicked,
                          fnOnSeeFutureClick: this.ToggleFutureView,
                          fnSetInitialScrollPosition: this.SetInitialScrollTop,
                          nVisibleHeight: this.state.nVisibleHeight,
                          nScrollTop: this.state.nScrollTop,
                          nDisappearingHeaderHeight: e,
                          nDisappearingHeaderVisibleHeight: a,
                          nGroupHeaderHeight: this.state.nGroupHeaderHeight,
                          bSaveSpaceForControlBar: !this.state
                            .bControlBarIsCollapsed
                        })
                      )
                    : j.createElement(
                        F.a,
                        null,
                        j.createElement(
                          "div",
                          { className: ee.a.LoginPrompt },
                          Object(L.d)("#EventCalendar_MainLoginPrompt"),
                          j.createElement(
                            "button",
                            { onClick: Xe.a, className: ee.a.LoginButton },
                            Object(L.d)("#Login_SignIn")
                          )
                        )
                      )
                )
              );
            }),
            (e.m_bInitialLoad = !0),
            Object(k.c)([q.a], e.prototype, "OnResize", null),
            Object(k.c)([q.a], e.prototype, "SetInitialScrollTop", null),
            Object(k.c)([q.a], e.prototype, "ScrollToInitialPosition", null),
            Object(k.c)([q.a], e.prototype, "OnScroll", null),
            Object(k.c)([q.a], e.prototype, "ToggleControlBarCollapsed", null),
            Object(k.c)([q.a], e.prototype, "OnControlBarChange", null),
            Object(k.c)([q.a], e.prototype, "CloseEventModal", null),
            Object(k.c)([q.a], e.prototype, "OnEventClicked", null),
            Object(k.c)([q.a], e.prototype, "ToggleFutureView", null),
            (e = o = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        st = Object(c.g)(it),
        lt = G.c.STORE_BASE_URL + "labs",
        ct = G.c.COMMUNITY_BASE_URL + "groups/SteamLabs/discussions/11/",
        dt = function(e) {
          return j.createElement(
            "div",
            {
              style: { transform: "translateY(" + e.nTopOffset + "px)" },
              className: ee.a.SteamLabsBanner
            },
            j.createElement(
              "div",
              { className: ee.a.SteamLabsBannerCtn },
              j.createElement(
                "div",
                { className: ee.a.SteamLabsIdentifiers },
                j.createElement(
                  "a",
                  {
                    className: ee.a.SteamLabsName,
                    href: (G.c.IN_CLIENT ? "steam://openurl/" : "") + lt,
                    target: G.c.IN_CLIENT ? void 0 : "_blank"
                  },
                  Object(L.d)("#SteamLabs")
                ),
                j.createElement(
                  "div",
                  { className: ee.a.SteamLabsNumber },
                  Object(L.d)("#SteamLabs_ExperimentNumber", "009")
                )
              ),
              j.createElement(
                "a",
                {
                  className: ee.a.SteamLabsButton,
                  href: (G.c.IN_CLIENT ? "steam://openurl/" : "") + ct,
                  target: G.c.IN_CLIENT ? void 0 : "_blank"
                },
                Object(L.d)("#SteamLabs_DiscussionLink")
              )
            )
          );
        },
        pt = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.GetCurrentSectionLayout = function() {
              var t =
                this.props.nDisappearingHeaderHeight +
                parseInt(ee.a.strEndOfRowsHeight);
              return x()
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
                var n = Math.max(
                  0,
                  t +
                    parseInt(ee.a.strEndOfRowsHeight) -
                    this.props.nGroupHeaderHeight +
                    this.props.nDisappearingHeaderHeight -
                    this.props.nDisappearingHeaderVisibleHeight
                );
                this.props.fnSetInitialScrollPosition(n);
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
                n = e.bSaveSpaceForControlBar;
              if (0 == x().GetCalendarSections(S).length) return null;
              var w = tt(),
                D = O + I,
                k = O + t,
                A = !0,
                a = this.GetCurrentSectionLayout().map(function(e, t) {
                  var n = e.section,
                    a = e.nTopOfSection,
                    o = e.nBottomOfSection,
                    r = n.strId,
                    i = n.strSectionLabel,
                    s = n.rtSectionStart,
                    l = n.rtSectionEnd,
                    c = n.bIsFutureSection,
                    d = n.nRenderedHeight,
                    p = Math.max(0, D - o),
                    u = Math.max(0, a - k),
                    m = E.props.nVisibleHeight > Math.max(p, u),
                    h = a < D,
                    v = o - O - T,
                    _ = h ? Math.min(I, v) : 0,
                    b = o - D < 75,
                    g = N.a.bEnableNewsHubMayUpdate
                      ? Object(Z.a)(
                          ee.a.PastSection,
                          A && ee.a.DarkerBackground
                        )
                      : Object(Z.a)(
                          c ? ee.a.FutureSection : ee.a.PastSection,
                          A && ee.a.DarkerBackground
                        );
                  0 < d && (A = !A);
                  var y = N.a.bEnableNewsHubMayUpdate && !S && c;
                  return j.createElement(
                    mt,
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
                      bIsFutureSection: c && !N.a.bEnableNewsHubMayUpdate,
                      bShowEarliestFirst: S || y,
                      bIsNearBottom: b,
                      nInitialHeight: d,
                      fnReportHeight: function(e) {
                        return E.RecordSectionRenderedHeight(n, e);
                      },
                      fnOnEventClick: f,
                      bSuppressHoverEffects: w
                    },
                    " "
                  );
                }),
                o =
                  S || N.a.bEnableNewsHubMayUpdate
                    ? null
                    : j.createElement(
                        "div",
                        {
                          key: "no-more-future-events",
                          className: Object(Z.a)(
                            ee.a.EndOfRows,
                            ee.a.CalendarRow,
                            ee.a.FutureSection,
                            ee.a.Visible
                          )
                        },
                        j.createElement(
                          "div",
                          { className: ee.a.NoMoreRows },
                          x().BMayHaveAnyVisibleFutureEvents() &&
                            Object(L.d)("#EventCalendar_NoMoreFutureEvents")
                        )
                      ),
                r = S ? x().BHitForwardHorizon() : x().BHitBackwardHorizon(),
                i = j.createElement(
                  "div",
                  {
                    key: "no-more-events",
                    className: Object(Z.a)(
                      ee.a.EndOfRows,
                      ee.a.CalendarRow,
                      r && ee.a.Visible
                    )
                  },
                  j.createElement(
                    "div",
                    { className: ee.a.NoMoreRows },
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
                  className: Object(Z.a)(
                    ee.a.RowContainer,
                    n && ee.a.WideLeftGutter
                  )
                },
                j.createElement(
                  "div",
                  { className: ee.a.Rows },
                  j.createElement("div", {
                    className: Object(Z.a)(
                      ee.a.DisappearingHeaderSpacer,
                      ee.a.FutureSection
                    ),
                    key: "spacer"
                  }),
                  o,
                  a,
                  i
                )
              );
            }),
            Object(k.c)(
              [q.a],
              t.prototype,
              "RecordSectionRenderedHeight",
              null
            ),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        ut = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.rgCalendarItems,
                n = e.fnOnEventClick,
                a = e.bSuppressHoverEffects;
              return t && 0 != t.length
                ? j.createElement(
                    "div",
                    { className: ee.a.CalendarRow },
                    j.createElement(
                      "div",
                      { className: ee.a.HorizontalTileContainer },
                      j.createElement(
                        "div",
                        { className: ee.a.HorizontalTiles },
                        t.map(function(e) {
                          return j.createElement(Ue, {
                            key: "ht-" + e.unique_id,
                            calendarEvent: e,
                            partnerEventStore: w.c,
                            fnOnClicked: n,
                            bSuppressHoverEffects: a,
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
        mt = (function(t) {
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
                  x().GetCalendarItemsInTimeRange(
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
                n = e.bRenderStickyHeader,
                a = e.nExtraHeaderOffset,
                o = e.strSectionLabel,
                r = e.strSectionClassname,
                i = e.bUseHorizontalLayout,
                s = e.fnOnSeeFutureClick,
                l = e.bIsFutureSection,
                c = e.bShowEarliestFirst,
                d = e.bIsNearBottom,
                p = e.nInitialHeight,
                u = e.fnOnEventClick,
                m = e.bSuppressHoverEffects;
              if (!t)
                return j.createElement(
                  "div",
                  {
                    ref: this.m_ref,
                    style: { minHeight: p + "px" },
                    className: r
                  },
                  " "
                );
              var h = this.cachedCalendarItems,
                v = h.rgCalendarItems,
                _ = h.bIsComplete;
              if (0 == v.length && _)
                return j.createElement("div", {
                  ref: this.m_ref,
                  className: r
                });
              c && (v = v.reverse());
              var b = l && d,
                g = j.createElement(
                  "div",
                  {
                    style: { top: a },
                    className: Object(Z.a)(
                      ee.a.GroupHeader,
                      ee.a.CalendarRow,
                      n && ee.a.HeaderAtTop,
                      b && ee.a.FutureHint
                    )
                  },
                  j.createElement(
                    "div",
                    { className: ee.a.GroupHeaderTitle },
                    j.createElement(
                      "span",
                      null,
                      " ",
                      b ? Object(L.d)("#EventCalendar_FutureEventsHint") : o,
                      " "
                    ),
                    i &&
                      3 < v.length &&
                      j.createElement(
                        "div",
                        { className: ee.a.SeeAllLink, onClick: s },
                        Object(L.d)("#EventCalendar_FutureEventsLink"),
                        j.createElement(
                          "span",
                          { className: ee.a.SeeAllCount },
                          v.length + (_ ? "" : "+")
                        )
                      )
                  )
                ),
                y = i
                  ? j.createElement(ut, {
                      rgCalendarItems: v.slice(0, 3),
                      fnOnEventClick: u,
                      bSuppressHoverEffects: m
                    })
                  : v.map(function(e) {
                      return j.createElement(
                        "div",
                        { key: e.unique_id, className: ee.a.CalendarRow },
                        j.createElement(Ue, {
                          calendarEvent: e,
                          partnerEventStore: w.c,
                          fnOnClicked: u,
                          bSuppressHoverEffects: m
                        })
                      );
                    });
              return j.createElement(
                "div",
                { ref: this.m_ref, className: r },
                !l || _
                  ? null
                  : j.createElement(se.a, {
                      size: "xlarge",
                      position: "center"
                    }),
                g,
                y,
                l || _
                  ? null
                  : j.createElement(se.a, {
                      size: "xlarge",
                      position: "center"
                    })
              );
            }),
            Object(k.c)([m.computed], e.prototype, "cachedCalendarItems", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        ht = n("AXHe"),
        vt = n("Cs6D"),
        _t = n("3+zv");
      ((rt = ot || (ot = {}))[(rt.k_ModReviewed = 0)] = "k_ModReviewed"),
        (rt[(rt.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
        (rt[(rt.k_ChangeEventType = 2)] = "k_ChangeEventType"),
        (rt[(rt.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
        (rt[(rt.k_ModReReviewed = 4)] = "k_ModReReviewed");
      var bt = "ModAct",
        gt = (function() {
          function e() {}
          return (
            (e.prototype.ToModString = function() {
              var e =
                bt +
                "_" +
                this.m_moderator +
                "_" +
                Math.floor(this.m_rtWhen) +
                "_" +
                this.m_action;
              switch (this.m_action) {
                case ot.k_ChangeEventType:
                  e += "_" + this.m_newEventType;
                  break;
                case ot.k_UpdateSeasonTags:
                  e += "_" + this.m_newTagAdded;
              }
              return e;
            }),
            (e.prototype.FromString = function(e) {
              var t = e.split("_");
              if (!t || t[0] !== bt) return !1;
              switch (
                ((this.m_moderator = Number(t[1])),
                (this.m_rtWhen = Number(t[2])),
                (this.m_action = Number(t[3])),
                this.m_action)
              ) {
                case ot.k_ChangeEventType:
                  this.m_newEventType = Number(t[4]);
                  break;
                case ot.k_UpdateSeasonTags:
                  this.m_newTagAdded = t.slice(4).join("_");
              }
              return !0;
            }),
            (e.prototype.SetActionChangeEvent = function(e) {
              return (
                (this.m_moderator = G.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = ot.k_ChangeEventType),
                (this.m_newEventType = e),
                this
              );
            }),
            (e.prototype.SetReviewAction = function(e) {
              return (
                (this.m_moderator = G.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? ot.k_ModReviewed : ot.k_ModUnreviewed),
                this
              );
            }),
            (e.prototype.SetReReviewAction = function(e) {
              return (
                (this.m_moderator = G.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = e ? ot.k_ModReReviewed : ot.k_ModUnreviewed),
                this
              );
            }),
            (e.IsAuditAction = function(e) {
              return e.startsWith(bt);
            }),
            (e.prototype.SetUpdateSeasonalTags = function(e) {
              return (
                (this.m_moderator = G.i.accountid),
                (this.m_rtWhen = Date.now() / 1e3),
                (this.m_action = ot.k_UpdateSeasonTags),
                (this.m_newTagAdded = e),
                this
              );
            }),
            e
          );
        })(),
        yt = new ((function() {
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
                Object(k.b)(this, void 0, void 0, function() {
                  var t,
                    n,
                    a = this;
                  return Object(k.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          this.GetLatestPartnerEvents(o, r, i, s, l, c, d, p, u)
                        ];
                      case 1:
                        return (
                          (t = e.sent()),
                          (n = new Array()),
                          Object(m.runInAction)(function() {
                            t.forEach(function(e) {
                              a.m_mapEventGIDToSolrData.has(e.unique_id) ||
                                (n.push(e),
                                a.m_mapEventGIDToSolrData.set(e.unique_id, e),
                                a.m_listEvents.push(e));
                            });
                          }),
                          [2, n]
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
                Object(k.b)(this, void 0, void 0, function() {
                  var t, n, a;
                  return Object(k.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t =
                            G.c.STORE_BASE_URL +
                            "events_admin/ajaxgetlatestpartnerevents"),
                          (n = {
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
                              params: n,
                              withCredentials: !0,
                              cancelToken: o ? o.token : void 0
                            })
                          ]
                        );
                      case 1:
                        return [2, (a = e.sent()).data ? a.data.docs : []];
                    }
                  });
                })
              );
            }),
            (e.prototype.UpdateTagsOnPartnerEvent = function(o, r, i, s, l, c) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          G.c.STORE_BASE_URL + "events_admin/ajaxupdatetags"),
                        (n = s.join(",")),
                        c &&
                          (0 < s.length && (n += ","), (n += c.ToModString())),
                        (a = new FormData()).append("sessionid", G.c.SESSIONID),
                        a.append("clan_accountid", "" + r.GetAccountID()),
                        a.append("gid_announcement", i),
                        a.append("add_tags", n),
                        a.append("remove_tags", l.join(",")),
                        [
                          4,
                          _.a.post(t, a, {
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
            (e.prototype.UpdatePartnerEventType = function(a, o, r, i) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          G.c.STORE_BASE_URL +
                          "events_admin/ajaxupdateeventtype"),
                        (n = new FormData()).append("sessionid", G.c.SESSIONID),
                        n.append("clan_accountid", "" + o.GetAccountID()),
                        n.append("gid_event", r),
                        n.append("new_event_type", "" + i),
                        [
                          4,
                          _.a.post(t, n, {
                            withCredentials: !0,
                            cancelToken: a.token
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
        Et = n("Qcoi"),
        St = n("T27q"),
        ft = n("BpzF"),
        Ct = n("fpVW"),
        Ot = n.n(Ct),
        It = n("UxvL"),
        Tt = n("E9gz"),
        wt = n("dsx8"),
        Dt = n("f0Wu"),
        kt = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0
        },
        At = (function(t) {
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
              var n = void 0;
              "string" == typeof e.excludedTags
                ? 0 < e.excludedTags.length &&
                  (n = [{ label: e.excludedTags, value: e.excludedTags }])
                : e.excludedTags &&
                  ((n = []),
                  e.excludedTags.forEach(function(e) {
                    return n.push({ label: e, value: e });
                  }));
              var a = void 0;
              if ("string" == typeof e.eventtype) {
                if (0 < e.eventtype.length) {
                  var o = Number.parseInt(e.eventtype);
                  a = [{ label: Object(Te.b)(o), value: o }];
                }
              } else
                e.excludedTags &&
                  ((a = []),
                  e.excludedTags.forEach(function(e) {
                    var t = Number.parseInt(e);
                    a.push({ label: Object(Te.b)(t), value: t });
                  }));
              var r = void 0;
              "string" == typeof e.filterDate &&
                0 < e.filterDate.length &&
                (r = Dt.unix(Number(e.filterDate)));
              var i = !1;
              "string" == typeof e.orderByVisibility &&
                0 < e.orderByVisibility.length &&
                (i = Boolean(e.orderByVisibility)),
                this.setState({
                  selectedTags: t,
                  excludedTags: n,
                  filterEventTypes: a,
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
                  n = e.excludedTags,
                  a = e.filterEventTypes,
                  o = e.filterDate,
                  r = e.bOrderByVisibilityStartTime;
                t || n || a || o || r
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
                            n && 0 < n.length
                              ? n.map(function(e) {
                                  return e.value;
                                })
                              : null,
                          eventtype:
                            a && 0 < a.length
                              ? a.map(function(e) {
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
                  n = this.state.selectedTags
                    ? this.state.selectedTags.map(function(e) {
                        return e.value;
                      })
                    : void 0,
                  a = this.state.excludedTags
                    ? this.state.excludedTags.map(function(e) {
                        return e.value;
                      })
                    : void 0;
                yt.LoadPartnerEventForModerationIncremental(
                  this.m_cancelSignal,
                  this.m_nPage,
                  this.state.eventsToLoadPerPaging,
                  [this.props.appid],
                  n,
                  a,
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
                yt.GetAllSolrEvents().forEach(function(e) {
                  t.push(
                    j.createElement(Lt, { solrData: e, key: e.unique_id })
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
              (this.m_nPage = 0), yt.ClearAllSolrEvents();
            }),
            (e.prototype.OnDateChange = function(e) {
              if ("string" == typeof e) {
                var t = Dt(e, "M/D/YYYY", !0);
                if (!t.isValid())
                  return void this.setState({ filterDateAsString: e });
                e = t;
              }
              this.state.filterDate != e &&
                (this.ClearPreviousData(),
                this.setState(
                  Object(k.a)(
                    { filterDateAsString: void 0, filterDate: e },
                    kt
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                ));
            }),
            (e.prototype.IsValidDate = function(e) {
              var t = new Date();
              return (
                e.unix() <
                Dt.unix(t.getTime() / 1e3 + 86400)
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
                  Object(k.a)({ selectedTags: e }, kt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventExcludeTags = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(k.a)({ excludedTags: e }, kt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnChangeEventTypeFilter = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(k.a)({ filterEventTypes: e }, kt),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.OnVisibilityStartTimeChange = function(e) {
              this.ClearPreviousData(),
                this.setState(
                  Object(k.a)(
                    { bOrderByVisibilityStartTime: e.currentTarget.checked },
                    kt
                  ),
                  this.UpdateQueryParametersAndLoadMoreEvents
                );
            }),
            (e.prototype.render = function() {
              var e = this.RenderTiles(),
                t = Y.c.map(function(e) {
                  return { value: e, label: Object(Te.b)(e) };
                }),
                n = _t.a.map(function(e) {
                  return { value: e, label: e };
                }),
                a = {
                  option: function(e) {
                    return Object(k.a)(Object(k.a)({}, e), {
                      color: "#444444"
                    });
                  }
                };
              return j.createElement(
                "div",
                { className: Tt.ModerationContainer, ref: this.m_refScroll },
                j.createElement(
                  "div",
                  null,
                  j.createElement(
                    "h2",
                    null,
                    Object(L.d)("#EventModeration_Title")
                  ),
                  j.createElement(
                    F.a,
                    null,
                    j.createElement(
                      "div",
                      { className: Object(Z.a)(Ot.a.FlexRowContainer) },
                      j.createElement(
                        "div",
                        { className: Tt.FilterContainer },
                        j.createElement(
                          "span",
                          null,
                          Object(L.d)("#EventModeration_FilterByTag")
                        ),
                        j.createElement(vt.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventSelectedTags,
                          value: this.state.selectedTags,
                          options: n,
                          styles: a
                        })
                      ),
                      j.createElement(
                        "div",
                        { className: Tt.FilterContainer },
                        j.createElement(
                          "span",
                          null,
                          Object(L.d)("#EventModeration_FilterExcludeByTag")
                        ),
                        j.createElement(vt.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventExcludeTags,
                          value: this.state.excludedTags,
                          options: n,
                          styles: a
                        })
                      ),
                      j.createElement(
                        "div",
                        { className: Tt.FilterContainer },
                        j.createElement(
                          "span",
                          null,
                          Object(L.d)("#EventModeration_FilterToType")
                        ),
                        j.createElement(vt.a, {
                          isSearchable: !0,
                          isMulti: !0,
                          onChange: this.OnChangeEventTypeFilter,
                          value: this.state.filterEventTypes,
                          options: t,
                          styles: a
                        })
                      ),
                      j.createElement(
                        "div",
                        { className: Tt.FilterContainer },
                        j.createElement(
                          "span",
                          null,
                          Object(L.d)("#EventModeration_FilterToDate")
                        ),
                        j.createElement(ht, {
                          onChange: this.OnDateChange,
                          timeFormat: !1,
                          value: this.state.filterDate,
                          isValidDate: this.IsValidDate,
                          inputProps: {
                            placeholder: Object(L.d)(
                              "#EventModeration_PickDatee"
                            ),
                            className: Tt.TimeWidth
                          }
                        })
                      ),
                      j.createElement(
                        "div",
                        { className: Tt.FilterContainer },
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
                        { className: Tt.FilterContainer },
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
                j.createElement(F.a, null, e),
                this.state.bInfiniteScrollLoading &&
                  j.createElement(se.a, {
                    position: "center",
                    size: "medium",
                    string: Object(L.d)("#Loading")
                  })
              );
            }),
            Object(k.c)([q.a], e.prototype, "HandleError", null),
            Object(k.c)(
              [q.a],
              e.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(k.c)([q.a], e.prototype, "LoadMoreModerationEvents", null),
            Object(k.c)(
              [q.a],
              e.prototype,
              "UpdateQueryParametersAndLoadMoreEvents",
              null
            ),
            Object(k.c)([q.a], e.prototype, "OnScroll", null),
            Object(k.c)([q.a], e.prototype, "OnDateChange", null),
            Object(k.c)([q.a], e.prototype, "IsValidDate", null),
            Object(k.c)([q.a], e.prototype, "OnEventPerPageLoad", null),
            Object(k.c)([q.a], e.prototype, "OnChangeEventSelectedTags", null),
            Object(k.c)([q.a], e.prototype, "OnChangeEventExcludeTags", null),
            Object(k.c)([q.a], e.prototype, "OnChangeEventTypeFilter", null),
            Object(k.c)(
              [q.a],
              e.prototype,
              "OnVisibilityStartTimeChange",
              null
            ),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        jt = Object(c.g)(At),
        Lt = (function(t) {
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
            Object(k.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var n = this,
                e = this.props.solrData,
                t = e.unique_id;
              if (!w.c.BHasClanEventModel(t)) {
                var a = Date.now() / 1e3;
                w.c
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new O.a(e.clan_steamid),
                    t,
                    a
                  )
                  .then(function() {
                    return n.setState({ bLoadingEvent: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(y.a)(e);
                    console.error(
                      "EventModerationTile: Event Load: " + t.strErrorMsg,
                      t
                    ),
                      n.setState({ bLoadingEvent: !1 });
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
                  n = w.c.GetClanEventModel(t),
                  a = e.target.checked,
                  o =
                    !n.BHasTag("mod_reviewed") ||
                    n.BHasTag("mod_require_rereview");
                n &&
                  a === o &&
                  this.setState(
                    { bSavingModeration: !0 },
                    this.ApplyModerationToggle
                  );
              }
            }),
            (e.prototype.ApplyModerationToggle = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n, a, o, r, i, s, l, c, d;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props.solrData),
                        (n = t.unique_id),
                        (a = w.c.GetClanEventModel(n)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (o = new Array()),
                        (r = new Array()),
                        (i =
                          a.BHasTag("mod_reviewed") &&
                          !a.BHasTag("mod_require_rereview")),
                        (s = new gt().SetReviewAction(!i)),
                        i
                          ? o.push("mod_require_rereview")
                          : (o.push("mod_reviewed"),
                            r.push("mod_require_rereview"),
                            a.BHasTag("mod_require_rereview") &&
                              s.SetReReviewAction(!i)),
                        [
                          4,
                          yt.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.AnnouncementGID,
                            o,
                            r,
                            s
                          )
                        ]
                      );
                    case 2:
                      return (l = e.sent()), (a.vecTags = l), [3, 4];
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
                n = w.c.GetClanEventModel(t.unique_id);
              Object(je.d)(
                j.createElement(Rt, { eventModel: n }),
                Object(Ge.m)(e)
              );
            }),
            (e.prototype.OnUpdateSeasonalTag = function(e) {
              var t = this.props.solrData,
                n = w.c.GetClanEventModel(t.unique_id);
              Object(je.d)(
                j.createElement(Ft, { eventModel: n }),
                Object(Ge.m)(e)
              );
            }),
            (e.prototype.render = function() {
              var e,
                t = this.props.solrData,
                n = t.unique_id,
                a = Number(t.appid),
                o = Object(Y.e)(G.c.LANGUAGE),
                r = w.c.GetClanEventModel(n);
              if (r) {
                if (this.state.bShowAsModal)
                  return j.createElement(
                    Le.h,
                    { className: wt.StoreHeaderAdjust },
                    j.createElement(
                      "div",
                      null,
                      j.createElement(St.b, {
                        event: r,
                        fnClose: this.HideModalEvent
                      })
                    )
                  );
                var i = r.GetImageForSizeAsArrayWithFallback(
                    "capsule",
                    o,
                    _e.c.capsule_main
                  ),
                  s = r.BImageNeedScreenshotFallback("capsule", o);
                e =
                  0 < i.length
                    ? j.createElement(
                        j.Fragment,
                        null,
                        j.createElement(It.a, { rgSources: i }),
                        s &&
                          j.createElement(
                            "div",
                            { className: Tt.NoCapsule },
                            Object(L.d)("#EventModTile_FallbackImageText")
                          )
                      )
                    : j.createElement(
                        "div",
                        { className: Tt.NoCapsule },
                        Object(L.d)("#EventModTile_NoCapsule")
                      );
              } else e = Object(L.d)("#Loading");
              var l = t.hidden
                  ? t.published
                    ? Object(L.d)("#EVentModTile_State_Staged")
                    : Object(L.d)("#EVentModTile_State_Draft")
                  : Object(L.d)("#EVentModTile_State_Published"),
                c = r ? r.type : Number(t.event_type);
              return j.createElement(
                F.a,
                null,
                j.createElement(
                  "div",
                  { className: Tt.Tile },
                  j.createElement(
                    "div",
                    { className: Tt.TileCapsule, onClick: this.ShowModalEvent },
                    e
                  ),
                  j.createElement(
                    "div",
                    { className: Tt.TileDetails },
                    j.createElement(
                      "div",
                      { className: Tt.DetailsLeft },
                      j.createElement("div", null, l),
                      j.createElement(
                        "a",
                        {
                          href:
                            (G.c.IN_CLIENT ? "steam://openurl/" : "") +
                            G.c.COMMUNITY_BASE_URL +
                            "ogg/" +
                            a +
                            "/announcements/detail/" +
                            t.announcement_gid,
                          target: G.c.IN_CLIENT ? void 0 : "_blank",
                          className: Tt.EventTitle
                        },
                        t.event_name
                      ),
                      j.createElement(
                        "div",
                        {
                          className: Object(Z.a)(
                            1 == c ? Tt.TileEventOtherType : ""
                          )
                        },
                        r ? r.GetCategoryAsString() : t.event_type
                      ),
                      this.state.bLoadingEvent &&
                        j.createElement(se.a, {
                          size: "small",
                          string: Object(L.d)("#Loading")
                        }),
                      j.createElement(Mt, {
                        accountID: Number(t.creator_accountid),
                        locToken: "#EventModTile_Author"
                      }),
                      Boolean(
                        t.updator_accountid &&
                          0 < Number(t.updator_accountid) &&
                          t.updator_accountid != t.creator_accountid
                      ) &&
                        j.createElement(Mt, {
                          accountID: Number(t.updator_accountid),
                          locToken: "#EventModTile_Updator"
                        }),
                      j.createElement(Bt, {
                        appid: a,
                        clanSteamID: new O.a(t.clan_steamid)
                      })
                    ),
                    r &&
                      j.createElement(
                        j.Fragment,
                        null,
                        j.createElement(
                          "div",
                          { className: Tt.DetailsMiddle },
                          j.createElement(
                            "div",
                            { className: Tt.ModeratedFlagCtn },
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
                                j.createElement(se.a, { size: "small" }),
                              Boolean(!r.BHasTag("mod_reviewed")) &&
                                Object(L.d)("#EventModTile_Moderated_Review"),
                              Boolean(
                                r.BHasTag("mod_reviewed") &&
                                  !r.BHasTag("mod_require_rereview")
                              ) && Object(L.d)("#EventModTile_Moderated"),
                              Boolean(r.BHasTag("mod_require_rereview")) &&
                                Object(L.d)("#EventModTile_Moderated_ReReview")
                            )
                          ),
                          j.createElement(
                            "button",
                            {
                              className: Object(Z.a)(Ot.a.Button, Tt.Button),
                              onClick: this.OnChangeCategory
                            },
                            Object(L.d)("#EventModTile_ChangeEventType")
                          ),
                          r.BHasTag("halloween2019candidate") &&
                            j.createElement(
                              "button",
                              {
                                className: Object(Z.a)(Ot.a.Button),
                                onClick: this.OnUpdateSeasonalTag
                              },
                              Object(L.d)("#EventModTile_SeasonalTag")
                            ),
                          j.createElement(Pt, { eventModel: r })
                        ),
                        j.createElement(
                          "div",
                          { className: Tt.DetailsRight },
                          j.createElement(ft.b, {
                            event: r,
                            stylesmodule: Tt,
                            nOverrideEndTime: r.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime: r.GetStartTimeAndDateUnixSeconds()
                          }),
                          j.createElement(Nt, { event: r }),
                          j.createElement(xt, { event: r })
                        )
                      )
                  )
                )
              );
            }),
            Object(k.c)([q.a], e.prototype, "ShowModalEvent", null),
            Object(k.c)([q.a], e.prototype, "HideModalEvent", null),
            Object(k.c)([q.a], e.prototype, "OnModeratedChanged", null),
            Object(k.c)([q.a], e.prototype, "ApplyModerationToggle", null),
            Object(k.c)([q.a], e.prototype, "OnChangeCategory", null),
            Object(k.c)([q.a], e.prototype, "OnUpdateSeasonalTag", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component);
      function Gt(e) {
        return O.a.InitFromAccountID(e).ConvertTo64BitString();
      }
      var Mt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                userProfile: Et.a.GetProfile(Gt(e.props.accountID)),
                bLoadingProfile: !Et.a.BHasProfile(Gt(e.props.accountID))
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
                var t, n, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = Gt(this.props.accountID)), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]), [4, Et.a.LoadProfiles([t])]
                      );
                    case 2:
                      return e.sent(), [3, 4];
                    case 3:
                      return (
                        (n = e.sent()),
                        (a = Object(y.a)(n)),
                        console.error(
                          "EventModerationTile profile load : " + a.strErrorMsg,
                          a
                        ),
                        [3, 4]
                      );
                    case 4:
                      return (
                        this.m_cancelSignal.token.reason ||
                          this.setState({
                            userProfile: Et.a.GetProfile(t),
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
                n = e.locToken,
                a = this.state.userProfile,
                o =
                  (G.c.IN_CLIENT ? "steam://openurl/" : "") +
                  "https://steamsupport.valvesoftware.com/account/overview/" +
                  Gt(this.props.accountID);
              return j.createElement(
                "div",
                null,
                Object(L.k)(
                  n,
                  j.createElement(
                    "a",
                    { href: o, target: G.c.IN_CLIENT ? void 0 : "_blank" },
                    Boolean(a)
                      ? j.createElement(j.Fragment, null, a.persona_name)
                      : j.createElement(
                          j.Fragment,
                          null,
                          this.state.bLoadingProfile &&
                            j.createElement(se.a, { size: "small" }),
                          j.createElement("span", null, t)
                        )
                  )
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
                for (var n = 0; n < e.length && n < 29; ++n)
                  e[n] && 0 < e[n].length && (t += 1);
              return t;
            }),
            (e.prototype.componentDidMount = function() {
              var n = this,
                e = this.props.event;
              w.c
                .LoadClanEventLocalizationFromAnnouncementGID(
                  e.clanSteamID,
                  e.AnnouncementGID
                )
                .then(function(e) {
                  n.m_cancelSignal.token.reason ||
                    n.setState({ nLocLanguages: e.length });
                })
                .catch(function(e) {
                  var t = Object(y.a)(e);
                  console.log(
                    "EventInspection.LoadLoc : error " + t.strErrorMsg,
                    t
                  ),
                    n.m_cancelSignal.token.reason ||
                      n.setState({ nLocLanguages: -1 });
                });
            }),
            (e.prototype.render = function() {
              var e = this.props.event,
                t = this.CountLanguages(e.jsondata.localized_title_image),
                n = this.CountLanguages(e.jsondata.localized_capsule_image),
                a = this.CountLanguages(e.jsondata.localized_spotlight_image),
                o = Math.max(
                  this.CountLanguages(
                    e.jsondata.localized_broadcast_left_image
                  ),
                  this.CountLanguages(
                    e.jsondata.localized_broadcast_right_image
                  )
                ),
                r = t + n + a + o,
                i = this.CountLanguages(e.jsondata.localized_summary),
                s = this.CountLanguages(e.jsondata.localized_subtitle);
              return j.createElement(
                "div",
                { className: Tt.AnalysisCtn },
                j.createElement(
                  "div",
                  { className: Tt.TileTitle },
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
                    { className: Tt.ArtHeader },
                    Object(L.d)("#EventModTile_ImageAnalysis_Header", t),
                    " "
                  ),
                Boolean(n) &&
                  j.createElement(
                    "div",
                    null,
                    Object(L.d)("#EventModTile_ImageAnalysis_Capsule", n),
                    " "
                  ),
                Boolean(a) &&
                  j.createElement(
                    "div",
                    { className: Tt.ArtSpotlight },
                    Object(L.d)("#EventModTile_ImageAnalysis_Spotlight", a),
                    " "
                  ),
                Boolean(o) &&
                  j.createElement(
                    "div",
                    null,
                    Object(L.d)("#EventModTile_ImageAnalysis_Broadcast", o),
                    " "
                  ),
                0 == r &&
                  j.createElement(
                    "div",
                    { className: Tt.AnalysisMissing },
                    Object(L.d)("#EventModTile_ImageAnalysis_None"),
                    " "
                  ),
                0 == this.state.nLocLanguages &&
                  j.createElement(se.a, {
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
        Bt = (function(t) {
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
              var n = this,
                e = this.props,
                t = e.appid,
                a = e.clanSteamID;
              b.a.BIsAppidLoaded(t) ||
                b.a
                  .EnsureStoreCapsuleInfoLoaded(t)
                  .then(function() {
                    n.m_cancelSignal.token.reason ||
                      n.setState({ bLoadingAppInfo: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(y.a)(e);
                    console.error(
                      "EventModerationChannelInfo: App Load: " + t.strErrorMsg,
                      t
                    ),
                      n.m_cancelSignal.token.reason ||
                        n.setState({ bLoadingAppInfo: !1 });
                  }),
                a && g.a.LoadOGGClanInfoForClanSteamID(a);
            }),
            (e.prototype.render = function() {
              if (this.state.bLoadingAppInfo)
                return j.createElement(se.a, {
                  size: "small",
                  string: Object(L.d)("#EventModTile_AppInfoLoading")
                });
              var e = this.props,
                t = e.appid,
                n = e.clanSteamID;
              if (t) {
                var a = b.a.GetStoreCapsuleInfo(t).GetAppStoreData();
                return j.createElement(
                  "div",
                  { className: Tt.TileAppInfo },
                  j.createElement(
                    "div",
                    { className: Tt.TileAppInfoTitle },
                    j.createElement(
                      V.a,
                      { href: a.capsule_link },
                      j.createElement("img", {
                        className: Tt.TileAppInfoImage,
                        src: a.capsule
                      }),
                      j.createElement(
                        "div",
                        null,
                        Object(L.d)("#EventModTile_GameName", a.title)
                      )
                    )
                  ),
                  j.createElement(
                    "div",
                    null,
                    Object(L.d)("#EventModTile_ReleaseDate", a.release)
                  )
                );
              }
              if (n) {
                var o = n.GetAccountID(),
                  r = g.a.GetClanInfoByClanAccountID(o);
                if (r && r.is_curator)
                  return j.createElement(
                    "div",
                    { className: Tt.TileAppInfo },
                    j.createElement(
                      "div",
                      { className: Tt.TileAppInfoTitle },
                      j.createElement(
                        V.a,
                        { href: G.c.STORE_BASE_URL + "/curator/" + o + "/" },
                        j.createElement("img", {
                          className: Tt.TileAppInfoImage,
                          src: r.avatar_full_url
                        }),
                        j.createElement(
                          "div",
                          null,
                          Object(L.d)("#EventModTile_CuratorName", r.group_name)
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
        xt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.render = function() {
              var e = this.props.event,
                t = Object(_t.d)(e),
                n = Object(_t.c)(e),
                a = Object(_t.e)(e),
                o =
                  a && !e.BHasTag("hide_store") && !e.BHasTag("mod_hide_store"),
                r =
                  t &&
                  !e.BHasTag("hide_library_overview") &&
                  !e.BHasTag("mod_hide_library_overview"),
                i =
                  n &&
                  !e.BHasTag("hide_library_detail") &&
                  !e.BHasTag("mod_hide_library_detail");
              return j.createElement(
                "div",
                { className: Tt.VisibiltyCtn },
                j.createElement(
                  "div",
                  { className: Tt.TileTitle },
                  Object(L.d)("#EventModTile_Visibility")
                ),
                j.createElement(
                  "div",
                  null,
                  Object(L.d)(
                    "#EventModTile_Store_Visibility",
                    o
                      ? Object(L.d)("#WriteReview_Dialog_Yes")
                      : Object(L.d)("#WriteReview_Dialog_No"),
                    o
                      ? ""
                      : a
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
                    r
                      ? Object(L.d)("#WriteReview_Dialog_Yes")
                      : Object(L.d)("#WriteReview_Dialog_No"),
                    r
                      ? ""
                      : a
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
                      : a
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
        Rt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdating: !1,
                newCategoryOption: {
                  label: Object(Te.b)(34),
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
                var t, n, a, o, r, i, s, l, c, d;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = this.props),
                        (n = t.eventModel),
                        (a = t.closeModal),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 4, , 5]),
                        (o = this.state.newCategoryOption),
                        (r = o.value.eventType),
                        [
                          4,
                          yt.UpdatePartnerEventType(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.GID,
                            r
                          )
                        ]
                      );
                    case 2:
                      return (
                        e.sent(),
                        (i = _t.m),
                        (s = []),
                        o.value.tags &&
                          o.value.tags.forEach(function(e) {
                            s.push(e);
                            var t = new gt()
                              .SetUpdateSeasonalTags(e)
                              .ToModString();
                            s.push(t);
                          }),
                        [
                          4,
                          yt.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            n.clanSteamID,
                            n.GetAnnouncementGID(),
                            s,
                            i,
                            new gt().SetActionChangeEvent(r)
                          )
                        ]
                      );
                    case 3:
                      return (
                        (l = e.sent()),
                        Object(m.runInAction)(function() {
                          (n.type = r), (n.vecTags = l);
                        }),
                        this.setState({ bUpdating: !1 }, a),
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
                n = t.eventModel,
                a = t.closeModal,
                o = Y.c
                  .filter(function(e) {
                    return 1 == e || 4 == e || 9 <= e;
                  })
                  .map(function(e) {
                    var t = { eventType: e };
                    return (
                      12 == e && (t.tags = ["patchnotes"]),
                      { label: Object(Te.b)(e), value: t }
                    );
                  });
              return (
                o.push({
                  label: Object(L.d)("#PartnerEvent_Curator_Group_Members"),
                  value: {
                    eventType: 28,
                    tags: ["curator", "curator_group_members"]
                  }
                }),
                o.push({
                  label: Object(L.d)("#PartnerEvent_Curator_Public"),
                  value: { eventType: 28, tags: ["curator", "curator_public"] }
                }),
                j.createElement(
                  Le.c,
                  {
                    strTitle: Object(L.d)("#EventModTile_ChangeEventType"),
                    strDescription: Object(L.d)(
                      "#EventModTile_ChangeEventType_Desc",
                      n.GetEventTypeAsString()
                    ),
                    onCancel: a,
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
                      { className: Tt.CategoryChangeDialog },
                      j.createElement("br", null),
                      this.state.bUpdating &&
                        j.createElement(se.a, { size: "small" }),
                      this.state.strErrorMsg &&
                        j.createElement(
                          "div",
                          null,
                          Object(L.d)("#Chat_Settings_Error_ServerError"),
                          j.createElement("br", null),
                          this.state.strErrorMsg
                        ),
                      j.createElement(vt.a, {
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
            Object(k.c)([q.a], e.prototype, "ChangeCategoryForEvent", null),
            Object(k.c)([q.a], e.prototype, "OnChangeSelection", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Pt = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bCollapsed: !0 }), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.RenderModAction = function(e) {
              var t = Object(L.i)(e.m_rtWhen),
                n = j.createElement(Mt, {
                  locToken: "#EventModTile_Moderator",
                  accountID: e.m_moderator
                });
              switch (e.m_action) {
                case ot.k_ModReviewed:
                  return j.createElement(
                    "div",
                    { className: Tt.ModeratorAuditActionCtn },
                    Object(L.k)(
                      "#EventModTile_Action_Reviewed",
                      j.createElement("span", null, t),
                      n
                    )
                  );
                case ot.k_ModUnreviewed:
                  return j.createElement(
                    "div",
                    { className: Tt.ModeratorAuditActionCtn },
                    Object(L.k)(
                      "#EventModTile_Action_UnReviewed",
                      j.createElement("span", null, t),
                      n
                    )
                  );
                case ot.k_ChangeEventType:
                  return j.createElement(
                    "div",
                    { className: Tt.ModeratorAuditActionCtn },
                    Object(L.k)(
                      "#EventModTile_Action_NewEventType",
                      j.createElement("span", null, t),
                      n,
                      Object(Te.b)(e.m_newEventType)
                    )
                  );
                case ot.k_UpdateSeasonTags:
                  return j.createElement(
                    "div",
                    { className: Tt.ModeratorAuditActionCtn },
                    Object(L.k)(
                      "#EventModTile_Action_SeasonTagUpdate",
                      j.createElement("span", null, t),
                      n,
                      e.m_newTagAdded
                    )
                  );
                default:
                  return j.createElement(
                    "div",
                    { className: Tt.ModeratorAuditActionCtn },
                    e.ToModString
                  );
              }
            }),
            (e.prototype.RenderAudit = function(e) {
              var n = this,
                a = new Array(),
                o = this.props.eventModel;
              return (
                e.forEach(function(e) {
                  var t = new gt();
                  t.FromString(e),
                    a.push(
                      j.createElement(
                        "div",
                        { key: o.GID + e },
                        n.RenderModAction(t)
                      )
                    );
                }),
                a
              );
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props.eventModel.GetAllTags().filter(function(e) {
                  return gt.IsAuditAction(e);
                }),
                n = t.length,
                a = 3 < t.length && this.state.bCollapsed;
              if (0 == t.length) return null;
              a && (t = t.splice(0, 3));
              var o = this.RenderAudit(t);
              return j.createElement(
                "div",
                null,
                j.createElement(
                  "h4",
                  null,
                  Object(L.d)("#EventModTile_Action_Title")
                ),
                o,
                a &&
                  j.createElement(
                    "a",
                    {
                      onClick: function() {
                        return e.setState({ bCollapsed: !1 });
                      }
                    },
                    Object(L.d)("#EventModTile_Action_More", n - 3)
                  ),
                Boolean(!a && 3 < n) &&
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
        Ft = (function(t) {
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
                var t, n, a, o, r, i;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = new Array()),
                        (n = new Array()),
                        this.state.bAccept
                          ? (t.push("halloween2019"),
                            n.push("halloween2019reviewed"))
                          : (n.push("halloween2019"),
                            t.push("halloween2019reviewed")),
                        this.state.bCute ? t.push("cute") : n.push("cute"),
                        this.state.bHorror
                          ? t.push("horror")
                          : n.push("horror"),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (a = this.props.eventModel),
                        [
                          4,
                          yt.UpdateTagsOnPartnerEvent(
                            this.m_cancelSignal,
                            a.clanSteamID,
                            a.AnnouncementGID,
                            t,
                            n,
                            new gt().SetUpdateSeasonalTags(
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
                        (a.vecTags = o),
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
                n = (t.eventModel, t.closeModal);
              return j.createElement(
                Le.c,
                {
                  strTitle: Object(L.d)("#EventModTile_SeasonalTag"),
                  onCancel: n,
                  onOK: function() {
                    return e.setState({ bUpdating: !0 }, e.ApplyAction);
                  }
                },
                j.createElement(
                  j.Fragment,
                  null,
                  j.createElement(
                    "div",
                    { className: Tt.CategoryChangeDialog },
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
                      j.createElement(se.a, { size: "small" }),
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
            Object(k.c)([q.a], e.prototype, "ChangeAcceptance", null),
            Object(k.c)([q.a], e.prototype, "ChangeHorror", null),
            Object(k.c)([q.a], e.prototype, "ChangeCute", null),
            Object(k.c)([q.a], e.prototype, "ApplyAction", null),
            e
          );
        })(j.Component),
        Ht = new ((function() {
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
        zt = n("vNkc"),
        Ut = (function(t) {
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
              var n = this;
              this.m_mapArtworkResizeSuccess.set("capsule", 0),
                this.m_mapArtworkResizeSuccess.set("spotlight", 0),
                this.m_mapArtworkResizeSuccess.set("background", 0),
                this.RunArtworkResizeBackfill()
                  .then(function() {
                    return n.setState({ eBackfillState: "success" });
                  })
                  .catch(function(e) {
                    var t = Object(y.a)(e);
                    console.error(
                      "EventBackfillLanding: error " + t.strErrorMsg,
                      t
                    ),
                      n.setState({ eBackfillState: "error" });
                  });
            }),
            (e.prototype.GetImageInfo = function(a, o, r) {
              return (
                void 0 === r && (r = ""),
                Object(k.b)(this, void 0, void 0, function() {
                  var t, n;
                  return Object(k.e)(this, function(e) {
                    return (
                      (t = _e.a.GetExtensionTypeFromURL(o)),
                      (n = _e.a.GetHashFromHashAndExt(o) + r),
                      [
                        2,
                        _e.e.AsyncGetImageResolution(
                          a,
                          n,
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
            (e.prototype.HandleErrorFatal = function(e, t, n, a) {
              var o = Object(y.a)(t),
                r =
                  "EventBackfillLanding: " +
                  n +
                  " on GID " +
                  e +
                  " : " +
                  o.strErrorMsg;
              console.error(r, o),
                a
                  ? ((a.bFailed = !0),
                    (a.strMessage = r),
                    Ht.CloseProgress(e, a))
                  : Ht.CompleteBackfill("resize_image");
            }),
            (e.prototype.HandleResizeForImageType = function(p, u, m, h, v) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  c,
                  n,
                  d = this;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = function(t) {
                        var n, a, o, r, i, s, l;
                        return Object(k.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return p[t] && 0 < p[t].length
                                ? ((n = p[t]),
                                  (a = _e.a.GetExtensionTypeFromURL(n)),
                                  (o = new O.a(u.clan_steamid)),
                                  a
                                    ? [
                                        4,
                                        c.GetImageInfo(o, n).catch(function(e) {
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
                                Object(_t.h)(r.width, r.height, h)
                                ? [
                                    4,
                                    c.GetImageInfo(o, n, v).catch(function(e) {
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
                                (i = _e.a.GetHashFromHashAndExt(n)),
                                (s = _e.a.GetExtensionStringFromHashAndExt(n)),
                                (l = _e.d.GetResizeDimension(h)),
                                [
                                  4,
                                  _e.b
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
                        (n = 0),
                        (e.label = 1);
                    case 1:
                      return n < p.length && n < 29 ? [5, t(n)] : [3, 4];
                    case 2:
                      e.sent(), (e.label = 3);
                    case 3:
                      return ++n, [3, 1];
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
                  n,
                  s,
                  a,
                  l = this;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      Ht.StartBackfill("resize_image"), (t = 0), (e.label = 1);
                    case 1:
                      return Ht.BIsBackkFillInProgress()
                        ? [
                            4,
                            yt
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
                          Ht.CompleteBackfill("resize_image"),
                          console.log("Compelted the backfill"),
                          [3, 7]
                        );
                      (t += i.length),
                        (n = function(t) {
                          var n, a, o, r;
                          return Object(k.e)(this, function(e) {
                            switch (e.label) {
                              case 0:
                                return (
                                  (n = i[t]),
                                  (a = Ht.CreateOrGetBackfillProgess(
                                    n.unique_id
                                  )),
                                  n.announcement_gid &&
                                  0 != n.announcement_gid.length
                                    ? [
                                        4,
                                        w.c
                                          .LoadPartnerEventFromAnnoucementGID(
                                            Number(n.appid),
                                            n.announcement_gid,
                                            100
                                          )
                                          .catch(function(e) {
                                            l.HandleErrorFatal(
                                              n.announcement_gid,
                                              e,
                                              "LoadPartnerEventFromAnnoucementGID",
                                              a
                                            );
                                          })
                                      ]
                                    : ((a.bSkipped = !0),
                                      (a.bWarning = !0),
                                      Ht.CloseProgress(n.unique_id, a),
                                      [2, "continue"])
                                );
                              case 1:
                                return (
                                  e.sent(),
                                  a.bFailed
                                    ? [2, "continue"]
                                    : (o = w.c.GetClanEventFromAnnouncementGID(
                                        n.announcement_gid
                                      ))
                                    ? a.bSucceeded ||
                                      a.bFailed ||
                                      a.bAlreadyProcessed
                                      ? ((a.bAlreadyProcessed = !0),
                                        Ht.CloseProgress(n.unique_id, a),
                                        [2, "continue"])
                                      : ((a.bAnalysing = !0),
                                        s.setState({
                                          strInfo:
                                            "Processing " +
                                            Ht.GetBackfillGIDs().length +
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
                                                  n,
                                                  a,
                                                  "capsule",
                                                  _e.c.capsule_main
                                                )
                                                .catch(function(e) {
                                                  return l.HandleErrorFatal(
                                                    null,
                                                    e,
                                                    "HandleResizeForImageType capsule",
                                                    a
                                                  );
                                                })
                                            ])
                                          : [3, 3])
                                    : ((a.bFailed = !0),
                                      (a.strMessage =
                                        "Failed to load the event: " +
                                        n.unique_id),
                                      Ht.CloseProgress(n.unique_id, a),
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
                                          n,
                                          a,
                                          "background",
                                          _e.c.background_mini
                                        )
                                        .catch(function(e) {
                                          return l.HandleErrorFatal(
                                            null,
                                            e,
                                            "HandleResizeForImageType background",
                                            a
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
                                          n,
                                          a,
                                          "spotlight",
                                          _e.c.spotlight_main
                                        )
                                        .catch(function(e) {
                                          return l.HandleErrorFatal(
                                            null,
                                            e,
                                            "HandleResizeForImageType spotlight",
                                            a
                                          );
                                        })
                                    ])
                                  : [3, 7];
                              case 6:
                                e.sent(), (e.label = 7);
                              case 7:
                                return (
                                  Ht.CloseProgress(n.unique_id, a),
                                  Ht.BIsBackkFillInProgress()
                                    ? [2]
                                    : [2, "break"]
                                );
                            }
                          });
                        }),
                        (s = this),
                        (a = 0),
                        (e.label = 3);
                    case 3:
                      return a < i.length ? [5, n(a)] : [3, 6];
                    case 4:
                      if ("break" === e.sent()) return [3, 6];
                      e.label = 5;
                    case 5:
                      return ++a, [3, 3];
                    case 6:
                      return 5e3 < Ht.m_nFailures
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
              var a = new Array();
              return (
                0 < Ht.m_nFailures &&
                  Ht.GetBackfillGIDs().forEach(function(e) {
                    var t = Ht.GetEventBackfillProgress().get(e);
                    if (t && t.bFailed) {
                      var n = w.c.GetClanEventModel(e);
                      n &&
                        a.push(
                          j.createElement(
                            "div",
                            { key: e },
                            j.createElement(
                              we.c,
                              {
                                eventModel: n,
                                route: we.a.k_eView,
                                openNewWindow: !0
                              },
                              n.GetNameWithFallback(0)
                            ),
                            j.createElement(
                              "div",
                              { className: zt.Error },
                              t.strMessage
                            )
                          )
                        );
                    }
                  }),
                a
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
                        return Ht.CompleteBackfill("resize_image");
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
                  Ht.m_nProcessed
                ),
                j.createElement(
                  "div",
                  null,
                  "Events Succeeded: ",
                  Ht.m_nSuccesses
                ),
                j.createElement("div", null, "Events Warning: ", Ht.m_nWarning),
                j.createElement("div", null, "Events Failed: ", Ht.m_nFailures),
                j.createElement("div", null, "Events Skipped: ", Ht.m_nSkipped),
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
                  j.createElement(se.a, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress"
                  })
              );
            }),
            Object(k.c)([q.a], e.prototype, "OnArtworkResizeBackfill", null),
            Object(k.c)([q.a], e.prototype, "BeginArtworkResize", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Wt = n("nWbB"),
        Vt = new ((function() {
          function e() {
            (this.m_rgMyWishlistOnSale = null),
              (this.m_rgMyDLCForGamesInLibraryOnSale = null),
              (this.m_rgMySoundtracksForGamesInLibraryOnSale = null),
              (this.m_rgMyInteractiveRecOnSale = null),
              (this.m_rgMySaleTags = null),
              (this.m_rgMyTagRecommendation = null),
              (this.m_rgTopN = null);
          }
          return (
            (e.prototype.GetDiscounts = function(r) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n, a, o;
                return Object(k.e)(this, function(e) {
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
                        (n = Object(G.f)(t, "application_config"))
                          ? [3, 2]
                          : [
                              4,
                              _.a.get(
                                G.c.STORE_BASE_URL + "actions/ajaxgetdiscounts",
                                {
                                  params: Object(k.a)(Object(k.a)({}, r), {
                                    cc: G.c.COUNTRY
                                  })
                                }
                              )
                            ]
                      );
                    case 1:
                      (a = e.sent()), (n = a.data), (e.label = 2);
                    case 2:
                      return [2, n];
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
            (e.prototype.GetTopN = function(n, a) {
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
                                Vt.GetDiscounts({
                                  top_n_sellers: 500,
                                  max_results: a,
                                  feature: n
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
            (e.prototype.GetTagRecommendorForThisSale = function(o, r) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_rgMyTagRecommendation
                        ? [3, 2]
                        : ((this.m_rgMyTagRecommendation = Object(G.f)(
                            "tag_recommender",
                            "application_config"
                          )),
                          this.m_rgMyTagRecommendation
                            ? [3, 2]
                            : ((t =
                                G.c.STORE_BASE_URL +
                                "saleaction/ajaxgetsaletagsrecommendation"),
                              (n = {
                                cc: G.c.COUNTRY,
                                l: G.c.LANGUAGE,
                                clanAccountID: o.clanSteamID.GetAccountID(),
                                clanAnnouncementGID: o.AnnouncementGID,
                                count: r
                              }),
                              [
                                4,
                                _.a.get(t, { params: n, withCredentials: !1 })
                              ]));
                    case 1:
                      200 == (a = e.sent()).status &&
                      a.data &&
                      a.data.tag_recommender
                        ? (this.m_rgMyTagRecommendation =
                            a.data.tag_recommender)
                        : (this.m_rgMyTagRecommendation = []),
                        (e.label = 2);
                    case 2:
                      return [2, this.m_rgMyTagRecommendation];
                  }
                });
              });
            }),
            e
          );
        })())(),
        Zt = new ((function() {
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
                  n,
                  a = this;
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
                      (n = e.sent()),
                        Object(m.runInAction)(function() {
                          (a.m_mySummary.points = n.data.summary.points),
                            (a.m_mySummary.points_earned =
                              n.data.summary.points_earned),
                            (a.m_mySummary.points_spent =
                              n.data.summary.points_spent),
                            (a.m_bLoaded = !0);
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
      window.g_SaleTokenPointStore = Zt;
      var Yt = new ((function() {
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
              var t, n;
              return Object(k.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = G.c.STORE_BASE_URL + "saleaction/ajaxgetopendoor"),
                      [4, _.a.get(t, { withCredentials: !0 })]
                    );
                  case 1:
                    return (
                      (n = e.sent()),
                      (this.m_userData = n.data.doordata),
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
                  n,
                  a,
                  o,
                  r = this;
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
                        (n = new FormData()).append("sessionid", G.c.SESSIONID),
                        n.append("authwgtoken", G.i.authwgtoken),
                        n.append("door_index", "" + i),
                        s || n.append("open_door", "0"),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, _.a.post(t, n, { withCredentials: !0 })]
                      );
                    case 2:
                      return 1 == (a = e.sent()).data.success
                        ? (Object(m.runInAction)(function() {
                            if (
                              ((r.m_userData[i].opened = s),
                              (r.m_salePageBackgroundOverride =
                                a.data.sale_pg_background_override),
                              (r.m_salePageBackgroundMP4 =
                                a.data.sale_pg_background_mp4),
                              (r.m_salePageBackgroundWEBM =
                                a.data.sale_pg_background_webm),
                              (r.m_storyImages[i] = a.data.story_image),
                              (r.m_strLastDoorOpenKey =
                                "door_" + (s ? i : i - 1)),
                              s)
                            ) {
                              Zt.AddPoints(100);
                            }
                          }),
                          [2, a.data.rewards])
                        : (console.error(Object(y.a)(a)), [3, 4]);
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
      window.g_DoorStore = Yt;
      var qt = new ((function() {
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
              var t, n, a, o, r;
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
                      (n = {
                        cc: G.c.COUNTRY || "US",
                        l: G.c.LANGUAGE,
                        clan_account_id: i.clanSteamID.GetAccountID(),
                        clan_event_gid: i.GID
                      }),
                      (a =
                        G.c.STORE_BASE_URL + "saleaction/ajaxrecentsaleevents"),
                      (e.label = 2);
                  case 2:
                    return (
                      e.trys.push([2, 4, , 5]),
                      [4, _.a.get(a, { params: n, withCredentials: !0 })]
                    );
                  case 3:
                    return (
                      1 == (o = e.sent()).data.success &&
                        (this.AddAllRecentEvents(o.data.recent_events),
                        w.c.RegisterClanEvents(o.data.partnerevents)),
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
          Object(k.c)([m.observable], e.prototype, "m_rgRecentEvent", void 0),
          Object(k.c)([m.action], e.prototype, "AddAllRecentEvents", null),
          e
        );
      })())();
      window.g_EventListSaleStore = qt;
      var Jt = new ((function() {
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
              var n = this,
                e = Object(G.f)("subscriptionsapps", "application_config");
              this.ValidateStoreDefault(e) &&
                Object(m.runInAction)(function() {
                  e.forEach(function(e) {
                    var t = new Set();
                    e.benefit_appid.forEach(function(e) {
                      return t.add(e);
                    }),
                      n.m_mapMasterAppToBenefitApps.set(e.master_appid, t);
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
              var n = this.m_mapMasterAppToBenefitApps.get(e);
              return n && n.has(t);
            }),
            (e.prototype.LoadSubscriptionInfo = function(o) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  n,
                  a = this;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_mapMasterAppToBenefitApps.has(o)
                        ? [2, !0]
                        : [
                            4,
                            _.a.get(
                              G.c.STORE_BASE_URL +
                                "actions/ajaxresolvesubscriptions",
                              {
                                params: {
                                  master_app_id: o,
                                  cc: G.c.COUNTRY,
                                  origin: self.origin
                                }
                              }
                            )
                          ];
                    case 1:
                      return (
                        (t = e.sent()),
                        (n = t && t.data)
                          ? (Object(m.runInAction)(function() {
                              var t = new Set();
                              n.benefit_appid.forEach(function(e) {
                                return t.add(e);
                              }),
                                a.m_mapMasterAppToBenefitApps.set(
                                  n.master_appid,
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
        Xt = n("mZMQ"),
        Kt = (n("hmtA"), n("dgee")),
        $t = n.n(Kt),
        en = n("exzL"),
        tn = n.n(en),
        nn = n("SS32"),
        an = (function(e) {
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
                  Xt.e,
                  { key: "slide_" + t, index: t },
                  e
                );
              });
            }),
            (t.prototype.RenderBreadcrumbs = function(n) {
              return j.Children.map(this.props.children, function(e, t) {
                return t % n != 0
                  ? null
                  : j.createElement(
                      Xt.d,
                      { slide: t, className: nn.pip },
                      j.createElement("img", { src: $t.a })
                    );
              });
            }),
            (t.prototype.render = function() {
              var e = this.GetNumElements(),
                t = this.GetPageSize();
              if (!e || !t) return null;
              var n = t < e,
                a = this.props.hideArrows || !n,
                o = !n || this.props.hidePips,
                r = 4 / 3,
                i = !0;
              return (
                this.props.slideAspectRatio &&
                  ((r = this.props.slideAspectRatio), (i = !1)),
                j.createElement(
                  "div",
                  {
                    className: Object(Z.a)(
                      nn.carouselBody,
                      this.props.className
                    )
                  },
                  j.createElement(
                    Xt.c,
                    {
                      visibleSlides: this.props.visibleElements,
                      totalSlides: this.GetNumElements(),
                      naturalSlideWidth: 100 * r,
                      naturalSlideHeight: 100,
                      step: this.props.visibleElements,
                      infinite: !this.props.disableEdgeWrap,
                      isIntrinsicHeight: i
                    },
                    j.createElement(
                      "div",
                      { className: nn.sliderBody },
                      !a &&
                        j.createElement(
                          Xt.a,
                          {
                            className: Object(Z.a)(nn.carouselBtnCtn, nn.left)
                          },
                          j.createElement("img", {
                            src: tn.a,
                            className: Object(Z.a)(nn.carouselBtnImg, nn.left)
                          })
                        ),
                      j.createElement(Xt.f, null, this.RenderChildren()),
                      !a &&
                        j.createElement(
                          Xt.b,
                          {
                            className: Object(Z.a)(nn.carouselBtnCtn, nn.right)
                          },
                          j.createElement("img", {
                            src: tn.a,
                            className: Object(Z.a)(nn.carouselBtnImg, nn.right)
                          })
                        )
                    ),
                    !o &&
                      j.createElement(
                        "div",
                        { className: nn.breadcrumbContainer },
                        this.RenderBreadcrumbs(t)
                      )
                  )
                )
              );
            }),
            t
          );
        })(j.Component),
        on = n("qP7j"),
        rn = n.n(on),
        sn = new ((function() {
          function e() {}
          return (
            (e.prototype.DeleteForumTopic = function(o, r, i, s, l) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          G.c.COMMUNITY_BASE_URL +
                          "forum/" +
                          o.GetAccountID() +
                          "/" +
                          r +
                          "/deletetopic/"),
                        null != i && "" != i && (t += i + "/"),
                        (n = new FormData()).append("sessionid", G.c.SESSIONID),
                        n.append("gidforumtopic", s),
                        [
                          4,
                          _.a.post(t, n, {
                            withCredentials: !0,
                            cancelToken: l.token
                          })
                        ]
                      );
                    case 1:
                      if (1 != (a = e.sent()).data.success) throw a.data;
                      return [2, a.data];
                  }
                });
              });
            }),
            e
          );
        })())(),
        ln = (function(n) {
          function s(e) {
            var t = n.call(this, e) || this;
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
            Object(k.d)(s, n),
            (s.prototype.componentDidMount = function() {
              this.props.bNoConfirmationNeeded && this.OnDelete();
            }),
            (s.prototype.OnDeleteEventSuccessCallback = function() {
              this.props.partnerEventStore.ResetModel(),
                this.state.bDeleteCommentThread
                  ? sn
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
                n = e.partnerEventStore,
                a = t.clanSteamID,
                o = t.GID,
                r = t.AnnouncementGID;
              (this.m_forumTopicGID = t.forumTopicGID),
                (this.m_clanSteamID = a),
                !this.props.eventModel.bOldAnnouncement &&
                o &&
                "0" != o &&
                o != ve.e
                  ? (this.SetToWaiting(),
                    n
                      .DeleteClanEvent(a, o)
                      .then(this.OnDeleteEventSuccessCallback)
                      .catch(this.OnDeleteEventFailureCallback))
                  : this.props.eventModel.bOldAnnouncement
                  ? (this.SetToWaiting(),
                    n
                      .DeleteOldAnnouncement(a, r)
                      .then(this.OnDeleteEventSuccessCallback)
                      .catch(this.OnDeleteEventFailureCallback))
                  : (n.ResetModel(), this.setState({ dialogState: "success" }));
            }),
            (s.prototype.OnChangeDeleteForum = function() {
              this.setState({
                bDeleteCommentThread: !this.state.bDeleteCommentThread
              });
            }),
            (s.prototype.render = function() {
              var e = this,
                t = this.props.eventModel,
                n = this.props.closeModal,
                a = "",
                o = new Array();
              switch (this.state.dialogState) {
                case "confirmation":
                  var r = t.GetNameWithFallback(Object(ve.d)(G.c.LANGUAGE)),
                    i = t.BIsVisibleEvent()
                      ? "#EventDisplay_AreYouSure_Visible"
                      : "#EventDisplay_AreYouSure";
                  (a = Object(L.d)(i, r)),
                    (n = this.OnDelete),
                    t.BHasForumTopicGID() &&
                      o.push(
                        j.createElement(
                          "div",
                          {
                            key: "WantToDeleteCmtThread",
                            className: rn.a.Padding
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
                  (a = Object(L.d)("#EventDisplay_DeleteEvent_InProgress")),
                    o.push(j.createElement(se.a, { key: "throbber" }));
                  break;
                case "error":
                  (a = Object(L.d)("#EventDisplay_DeleteEvent_Error")),
                    o.push(
                      j.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++s.m_uniqueError,
                          className: rn.a.ErrorStyles
                        },
                        this.state.strErrorMsg
                      )
                    );
                  break;
                case "failed_thread_delete":
                  (a = Object(L.d)(
                    "#EventDisplay_DeleteEvent_ForumTopicError"
                  )),
                    o.push(
                      j.createElement(
                        "div",
                        {
                          key: "deleteerror_" + ++s.m_uniqueError,
                          className: rn.a.ErrorStyles
                        },
                        this.state.strErrorMsg
                      )
                    ),
                    this.props.onDeleteSuccessAndCloseDialog &&
                      (n = function() {
                        e.props.onDeleteSuccessAndCloseDialog(),
                          e.props.closeModal();
                      });
                  break;
                case "success":
                  (a = Object(L.d)("#EventDisplay_DeleteEvent_Success")),
                    this.props.onDeleteSuccessAndCloseDialog &&
                      (n = function() {
                        e.props.onDeleteSuccessAndCloseDialog(),
                          e.props.closeModal();
                      });
              }
              return j.createElement(
                Le.c,
                {
                  strTitle: Object(L.d)("#EventDisplay_DeleteEvent"),
                  strDescription: a,
                  onCancel: this.props.closeModal,
                  onOK: n,
                  bAlertDialog: "confirmation" != this.state.dialogState,
                  bOKDisabled: "waiting" == this.state.dialogState,
                  bDestructiveWarning: "error" == this.state.dialogState
                },
                o
              );
            }),
            (s.m_uniqueError = 0),
            Object(k.c)(
              [q.a],
              s.prototype,
              "OnDeleteEventSuccessCallback",
              null
            ),
            Object(k.c)(
              [q.a],
              s.prototype,
              "OnDeleteForumTopicSuccessCallback",
              null
            ),
            Object(k.c)(
              [q.a],
              s.prototype,
              "OnDeleteEventFailureCallback",
              null
            ),
            Object(k.c)(
              [q.a],
              s.prototype,
              "OnDeleteForumTopicFailureCallback",
              null
            ),
            Object(k.c)([q.a], s.prototype, "SetToWaiting", null),
            Object(k.c)([q.a], s.prototype, "OnDelete", null),
            Object(k.c)([q.a], s.prototype, "OnChangeDeleteForum", null),
            s
          );
        })(j.Component),
        cn = n("6eA3"),
        dn = n.n(cn),
        pn = (function(t) {
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
              Object(je.c)(
                j.createElement(ln, {
                  eventModel: this.props.eventModel,
                  onDeleteSuccessAndCloseDialog: this
                    .OnDeleteSuccessAndComplete,
                  partnerEventStore: this.props.partnerEventStore
                }),
                Object(Ge.m)(e)
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
                n = e.addtionalAdminButtons,
                a = e.eventModel,
                o = e.partnerEventStore,
                r = e.useAnchors;
              if (this.state.bRedirectToHome)
                return Object(we.h)(a, we.a.k_eCommunityAdminPage);
              var i = A.a.Get().GetPartnerEventPermissions(a.clanSteamID),
                s = a.visibility_state == w.b.k_EEventStateVisible,
                l = a.visibility_state == w.b.k_EEventStateStaged;
              if (i.can_edit || i.support_user) {
                var c = [];
                if (void 0 !== this.state.nMaxSaleDayIndex)
                  for (var d = 0; d <= this.state.nMaxSaleDayIndex; ++d)
                    c.push({
                      label: Object(L.d)("#SalePage_Admin_SaleEventDay", d + 1),
                      data: d
                    });
                return j.createElement(
                  F.a,
                  null,
                  j.createElement(
                    "div",
                    { className: cn.DisplayAdminPanel },
                    j.createElement(
                      "span",
                      { className: cn.DisplayAdminPanel_Title },
                      Object(L.d)("#EventDisplay_Admin_Title")
                    ),
                    j.createElement(
                      "div",
                      { className: cn.DisplayAdminPanel_ctn },
                      n,
                      n &&
                        j.createElement(
                          "span",
                          { className: cn.DisplayAdminPanel_Spacer },
                          " "
                        ),
                      j.createElement(
                        we.c,
                        {
                          eventModel: a,
                          route: we.a.k_eCommunityEdit,
                          openNewWindow: r,
                          className: Object(Z.a)(Ct.Button, cn.AdminButton)
                        },
                        Object(L.d)("#EventEditor_Edit")
                      ),
                      o &&
                        j.createElement(
                          "span",
                          {
                            className: Ct.Button + " " + cn.AdminButton,
                            onClick: this.OnDeleteVerifyRequest
                          },
                          Object(L.d)("#EventDisplay_DeleteEvent")
                        ),
                      !s &&
                        j.createElement(
                          j.Fragment,
                          null,
                          j.createElement(
                            we.c,
                            {
                              eventModel: a,
                              route: we.a.k_eCommunityPublish,
                              openNewWindow: r,
                              className: Object(Z.a)(Ct.Button, cn.AdminButton)
                            },
                            Object(L.d)(
                              l
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish"
                            )
                          )
                        ),
                      j.createElement(
                        we.c,
                        {
                          eventModel: a,
                          route: we.a.k_eCommunityAdminPage,
                          openNewWindow: r,
                          className: Object(Z.a)(Ct.Button, cn.AdminButton)
                        },
                        Object(L.d)("#EventDisplay_Events")
                      ),
                      Boolean(
                        void 0 !== this.state.nMaxSaleDayIndex && 0 < c.length
                      ) &&
                        j.createElement(z.g, {
                          strDropDownClassName: Ct.DropDownScroll,
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
                        a.jsondata.bSaleEnabled && this.props.bPreviewMode
                      ) &&
                        j.createElement(
                          we.c,
                          {
                            eventModel: a,
                            route: we.a.k_eStoreSalePage,
                            openNewWindow: r,
                            className: Object(Z.a)(Ct.Button, cn.AdminButton)
                          },
                          Object(L.d)("#EventDisplay_SalesPage")
                        ),
                      Boolean(
                        a.jsondata.bSaleEnabled && G.i.is_support && a.GID
                      ) &&
                        j.createElement(
                          "a",
                          {
                            href:
                              (G.c.IN_CLIENT ? "steam://openurl/" : "") +
                              "https://steamstats.valve.org/sales/details/?gid=" +
                              a.GID +
                              "&clanid=" +
                              a.clanSteamID.GetAccountID(),
                            target: G.c.IN_CLIENT ? "" : "_blank",
                            className: Object(Z.a)(
                              Ct.Button,
                              cn.AdminButton,
                              Ct.ValveOnlyBackground
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
            Object(k.c)([q.a], e.prototype, "OnDeleteVerifyRequest", null),
            Object(k.c)([q.a], e.prototype, "OnDeleteSuccessAndComplete", null),
            Object(k.c)([q.a], e.prototype, "OnChangeVisibilityDate", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component);
      var un = n("bWts"),
        mn = n.n(un),
        hn = n("XsxU"),
        vn = n.n(hn),
        _n = n("Lql7"),
        bn = n("uIWk"),
        gn = n("7u3m"),
        yn = n.n(gn),
        En = n("D4G2"),
        Sn = n.n(En),
        fn = n("Ff1b"),
        Cn = n.n(fn),
        On = n("go9d"),
        In = n.n(On),
        Tn = n("/PpB"),
        wn = (function(a) {
          function e(e) {
            var t = a.call(this, e) || this;
            t.m_cancelSignal = _.a.CancelToken.source();
            var n = O.a.InitFromClanID(e.creatorID.clan_account_id);
            return (
              (t.state = {
                bLoading: !bn.a.BHasCreatorHomeLoaded(n) || !M.a.BIsLoaded()
              }),
              t
            );
          }
          return (
            Object(k.d)(e, a),
            (e.prototype.componentDidMount = function() {
              var t = this;
              if (this.state.bLoading) {
                M.a.HintLoad();
                var e = O.a.InitFromClanID(
                  this.props.creatorID.clan_account_id
                );
                bn.a
                  .LoadCreatorHome(e, this.m_cancelSignal)
                  .then(function(e) {
                    M.a
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
              var n = new Array();
              return (
                t.GetSocialList().forEach(function(e) {
                  return n.push(
                    j.createElement(kn, {
                      social: e,
                      key:
                        "creator_" +
                        t.GetClanAccountID() +
                        "_" +
                        e.external_type
                    })
                  );
                }),
                n
              );
            }),
            (e.prototype.OnFollowClick = function() {
              var e = this.props.eventModel,
                t = A.a.Get().GetPartnerEventPermissions(e.clanSteamID);
              A.a.Get().BIsUserLoggedIn()
                ? t.limited_user
                  ? Object(je.d)(j.createElement(Tn.a, null), window)
                  : this.setState(
                      { bApplyingFollowing: !0 },
                      this.TakeFollowAction
                    )
                : Object(je.d)(
                    j.createElement(Le.c, {
                      strTitle: Object(L.d)("#EventDisplay_Share_NotLoggedIn"),
                      strDescription: Object(L.d)(
                        "#EventDisplay_Share_NotLoggedIn_Description"
                      ),
                      strOKButtonText: Object(L.d)("#MobileLogin_SignIn"),
                      onOK: function() {
                        return Object(Xe.a)();
                      }
                    }),
                    window
                  );
            }),
            (e.prototype.TakeFollowAction = function() {
              var n = this,
                a = this.props.creatorID,
                e = O.a.InitFromClanID(a.clan_account_id),
                o = M.a.BIsFollowingCreator(e),
                r = M.a.BIsIgnoringCreator(e);
              M.a
                .UpdateFollowOrIgnoreCurator(e, !r, !(r || o))
                .then(function(e) {
                  var t = bn.a.GetCreatorHomeByID(a);
                  r || t.AdjustFollower(o ? -1 : 1),
                    n.setState({ bApplyingFollowing: !1 });
                })
                .catch(function(e) {
                  n.setState({ bApplyingFollowing: !1 }),
                    n.HandleLoadingError(e);
                });
            }),
            (e.prototype.render = function() {
              if (this.state.bLoading)
                return j.createElement(
                  "div",
                  { className: _n.DevSummaryWidgetCtn },
                  j.createElement(se.a, null)
                );
              if (this.state.strErrorMsg) return j.createElement("div", null);
              var e = this.props,
                t = e.creatorID,
                n = e.bShowTagline,
                a = O.a.InitFromClanID(t.clan_account_id),
                o = bn.a.GetCreatorHomeByID(t),
                r = t.type,
                i =
                  "developer" == t.type
                    ? Object(L.d)("#CreatorHome_DevelopedBy")
                    : "publisher" == t.type
                    ? Object(L.d)("#CreatorHome_PublishedBy")
                    : Object(L.d)("#CreatorHome_InFranchise"),
                s = o.GetNumFollowers(),
                l = o.GetURL(r),
                c = this.GetSocialMediaElements(o),
                d = M.a.BIsFollowingCreator(a),
                p = M.a.BIsIgnoringCreator(a);
              return j.createElement(
                F.a,
                null,
                j.createElement(
                  "div",
                  {
                    className: Object(Z.a)(
                      _n.DevSummaryCtn,
                      this.props.bSmallFormat ? _n.SmallFormat : _n.LargeFormat
                    )
                  },
                  !this.props.bHideCreatorType &&
                    j.createElement("span", { className: _n.Title }, i),
                  j.createElement(
                    "div",
                    { className: _n.DevSummaryWidgetCtn },
                    j.createElement("div", {
                      className: _n.DevSummaryBackground,
                      style: {
                        backgroundImage:
                          "url(" + o.GetAvatarURLFullSize() + " )"
                      }
                    }),
                    j.createElement(
                      "div",
                      {
                        className: Object(Z.a)(
                          _n.DevSummaryContent,
                          Ct.FlexColumnContainer,
                          Ct.FlexContainSpaceBetween
                        )
                      },
                      j.createElement(
                        "div",
                        { className: Ct.FlexRowContainer },
                        j.createElement(
                          "a",
                          { href: l },
                          j.createElement("img", {
                            className: _n.Avatar,
                            src: o.GetAvatarURLFullSize()
                          })
                        ),
                        j.createElement(
                          "div",
                          {
                            className: Object(Z.a)(
                              Ct.FlexColumnContainer,
                              _n.CreatorDescCtn
                            )
                          },
                          j.createElement(
                            "div",
                            {
                              className: Object(Z.a)(
                                _n.CreatorTitleCtn,
                                Ct.FlexColumnContainer
                              )
                            },
                            j.createElement(
                              "a",
                              { href: l, className: _n.CreatorNameName },
                              o.GetName()
                            ),
                            n &&
                              j.createElement(
                                "div",
                                {
                                  className: Object(Z.a)(
                                    Ct.FlexColumnContainer,
                                    _n.CreatorTagline
                                  )
                                },
                                o.GetTagLine()
                              )
                          ),
                          j.createElement(
                            "div",
                            {
                              className: this.props.bSmallFormat
                                ? Ct.FlexColumnContainer
                                : Ct.FlexRowContainer
                            },
                            j.createElement(
                              "div",
                              { className: _n.FollowBtnCtn },
                              j.createElement(
                                "div",
                                {
                                  className: Object(Z.a)(
                                    Ct.Button,
                                    _n.FollowButton
                                  ),
                                  onClick: this.OnFollowClick
                                },
                                this.state.bApplyingFollowing &&
                                  j.createElement(se.a, { size: "small" }),
                                !this.state.bApplyingFollowing &&
                                  (d || p) &&
                                  j.createElement("img", {
                                    style: { height: "16px" },
                                    src:
                                      "https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_selected.png"
                                  }),
                                j.createElement(
                                  "div",
                                  { className: _n.FollowBtnText },
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
                                { className: _n.Followers },
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
                                  className: Object(Z.a)(
                                    _n.SocialContainer,
                                    Ct.FlexColumnContainer
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
            Object(k.c)([q.a], e.prototype, "OnFollowClick", null),
            Object(k.c)([q.a], e.prototype, "TakeFollowAction", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Dn = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.state = { bLoading: !b.a.BIsAppidLoaded(e.appid) }), t;
          }
          return (
            Object(k.d)(e, n),
            (e.prototype.componentDidMount = function() {
              var n = this,
                e = this.props.appid;
              this.state.bLoading &&
                b.a
                  .EnsureStoreCapsuleInfoLoaded(e)
                  .then(function() {
                    return n.setState({ bLoading: !1 });
                  })
                  .catch(function(e) {
                    var t = Object(y.a)(e);
                    console.log(
                      "CreatorHomeEmbedForApp - failed to load appinfo " +
                        t.strErrorMsg
                    ),
                      n.setState({ strErrorMsg: t.strErrorMsg, bLoading: !1 });
                  });
            }),
            (e.prototype.render = function() {
              if (this.state.bLoading)
                return j.createElement(
                  "div",
                  { className: _n.DevSummaryWidgetCtn },
                  j.createElement(se.a, null)
                );
              var e = this.props,
                t = e.appid,
                n = e.eventModel,
                a = b.a.GetStoreCapsuleInfo(t).GetAppStoreData();
              if (
                !this.state.strErrorMsg &&
                a.creator_list &&
                0 < a.creator_list.length
              ) {
                var o = void 0,
                  r = void 0,
                  i = void 0;
                return (
                  a.creator_list.forEach(function(e) {
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
                    F.a,
                    null,
                    j.createElement(wn, {
                      creatorID: o || (r || i),
                      eventModel: n,
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
        kn = (function(e) {
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
                  t = yn.a;
                  break;
                case 5:
                  t = Cn.a;
                  break;
                case 4:
                  t = Sn.a;
                  break;
                case 6:
                  t = In.a;
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
                  className: Object(Z.a)(_n.SocialLink)
                },
                j.createElement("img", {
                  className: Object(Z.a)(_n.SocialImg),
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
        An = n("TOXn"),
        jn = n("NKJh"),
        Ln = n.n(jn),
        Gn = (function(t) {
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
                n = e.eventModel;
              t &&
                n.BHasAnnouncementGID() &&
                this.setState({ bLoading: !0 }, this.ActualLoadEvent);
            }),
            (e.prototype.ActualLoadEvent = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  n,
                  a,
                  o = this;
                return Object(k.e)(this, function(e) {
                  return (
                    (t = this.props),
                    (n = t.partnerEventStore),
                    (a = t.eventModel),
                    n
                      .LoadAdjacentPartnerEventsByEvent(
                        a,
                        a.clanSteamID,
                        a.appid,
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
                n = e.trackingLocation;
              if (n) {
                var a = A.a.Get().GetTracker();
                this.state.events &&
                  0 < this.state.events.length &&
                  this.state.events
                    .filter(function(e) {
                      return e.BIsPartnerEvent();
                    })
                    .forEach(function(e) {
                      return a.MarkEventShown(
                        e.GID,
                        e.clanSteamID.GetAccountID(),
                        n
                      );
                    }),
                  t.BIsPartnerEvent() &&
                    t.BIsVisibleEvent() &&
                    a.MarkEventRead(t.GID, t.clanSteamID.GetAccountID(), n),
                  a.Flush();
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
                  n = this.props.eventModel,
                  a = new Array(),
                  o = 0,
                  r = this.state.events;
                o < r.length;
                o++
              ) {
                var i = r[o];
                i.BHasAnnouncementGID() && a.push(i.AnnouncementGID);
              }
              var s = this.props.partnerEventStore;
              ge.f(a);
              for (var l = 0, c = a; l < c.length; l++) {
                var d = c[l],
                  p = s.GetClanEventFromAnnouncementGID(d);
                if (
                  p &&
                  p.GID != n.GID &&
                  p.AnnouncementGID != n.AnnouncementGID &&
                  (p &&
                    p.visibility_state == w.b.k_EEventStateVisible &&
                    (e.push(
                      j.createElement(Mn, {
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
                n = e.partnerEventStore,
                a = e.appid;
              if (this.state.bShowInfiniteScrollOverlay)
                return j.createElement(Qe, {
                  appid: a,
                  eventModel: t,
                  announcementGID: t.GetAnnouncementGID(),
                  closeModal: this.HideInfiniteScroller,
                  partnerEventStore: n
                });
              if (this.state.bLoading)
                return j.createElement(se.a, {
                  position: "center",
                  size: "medium"
                });
              if (0 == this.state.events.length)
                return j.createElement("div", null);
              var o = b.a.GetStoreCapsuleInfo(a).GetAppStoreData(),
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
                { className: vn.a.OtherEventsCtn },
                j.createElement(
                  "div",
                  { className: Ot.a.EventSectionTitleCtn },
                  j.createElement(
                    "div",
                    { className: Ot.a.EventSectionTitle },
                    Object(L.k)(
                      "#EventBrowse_MoreEventsTitle",
                      r.is_ogg ? o.title : r.group_name
                    ),
                    " "
                  ),
                  j.createElement(
                    "div",
                    { className: Ot.a.EventSectionSpacer },
                    " "
                  ),
                  s &&
                    j.createElement(
                      "div",
                      {
                        className: Ot.a.EventSectionMoreBtn,
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
                          a +
                          "/announcements",
                        className: Ot.a.EventSectionMoreBtn
                      },
                      Object(L.d)("#EventBrowse_MoreEventsBtn")
                    )
                ),
                j.createElement("div", { className: vn.a.OtherEvents }, i)
              );
            }),
            Object(k.c)([q.a], e.prototype, "PrepLoadEvents", null),
            Object(k.c)([q.a], e.prototype, "ActualLoadEvent", null),
            Object(k.c)(
              [q.a],
              e.prototype,
              "HandleTrackingWhenAdjacentLoadCompleted",
              null
            ),
            Object(k.c)([q.a], e.prototype, "OnViewAll", null),
            Object(k.c)([q.a], e.prototype, "HideInfiniteScroller", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Mn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                n = e.imageURLOverride,
                a = e.openNewWindow,
                o = e.appInfo,
                r = e.langOverride,
                i = e.onClick;
              if (!t)
                return j.createElement("div", {
                  className: vn.a.OtherEvents_EventCtn
                });
              var s = r || Object(ve.d)(G.c.LANGUAGE),
                l =
                  void 0 !== n
                    ? n
                    : t.GetImageURLWithFallback(
                        "capsule",
                        s,
                        _e.c.capsule_main
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
                    we.c,
                    {
                      className: Object(Z.a)(
                        vn.a.OtherEvents_EventCtn,
                        vn.a.HoversEnabled
                      ),
                      eventModel: t,
                      route: we.a.k_eView,
                      openNewWindow: a,
                      onClick: i
                    },
                    j.createElement(
                      "div",
                      { className: vn.a.EventSummaryContainer },
                      j.createElement(
                        "div",
                        { className: vn.a.EventSummaryType },
                        d
                      ),
                      j.createElement(
                        "div",
                        { className: vn.a.EventSummaryText },
                        p
                      )
                    ),
                    j.createElement("div", {
                      className: vn.a.OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: "url(" + l + ")"
                      }
                    }),
                    j.createElement(
                      "div",
                      { className: vn.a.OtherEvents_ContentCtn },
                      j.createElement(
                        "div",
                        { className: vn.a.OtherEvents_MainImageCtn },
                        j.createElement("img", {
                          src: l,
                          className: vn.a.OtherEvents_MainImage
                        })
                      ),
                      j.createElement(
                        "div",
                        { className: vn.a.OtherEvents_TextCtn },
                        j.createElement(
                          "div",
                          { className: vn.a.OtherEvents_TextTitle },
                          c
                        ),
                        u &&
                          j.createElement(
                            "div",
                            { className: vn.a.OtherEvents_SubTitle },
                            u
                          ),
                        j.createElement(be.a, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                        })
                      )
                    )
                  ),
                  o &&
                    j.createElement(
                      "span",
                      { className: vn.a.AppCapsuleCtn },
                      j.createElement(
                        Ae.a,
                        {
                          strURL: G.c.STORE_BASE_URL + "app/" + o.appid,
                          type: "app",
                          id: o.appid,
                          hoverClassName: vn.a.AppCapsuleImageHover
                        },
                        j.createElement("img", {
                          className: vn.a.AppCapsuleImage,
                          src: this.props.appInfo.tiny_capsule
                        })
                      ),
                      j.createElement(
                        "span",
                        { className: vn.a.AppCapsulePrice },
                        Boolean(this.props.appInfo.discount_percent) &&
                          j.createElement(
                            "span",
                            { className: Ln.a.StoreSaleDiscountBox },
                            "-" + this.props.appInfo.discount_percent + "%"
                          ),
                        !this.props.appInfo.is_free &&
                          this.props.appInfo.price &&
                          j.createElement(
                            "span",
                            { className: Ln.a.StoreSalePriceBox },
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
        Nn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                n = e.imageURLOverride,
                a = e.openNewWindow,
                o = e.onClick;
              if (!t)
                return j.createElement("div", {
                  className: vn.a.OtherEvents_EventCtn
                });
              var r = Object(ve.d)(G.c.LANGUAGE),
                i =
                  void 0 !== n
                    ? n
                    : t.GetImageURLWithFallback(
                        "capsule",
                        r,
                        _e.c.capsule_main
                      ),
                s = t.GetNameWithFallback(r),
                l = t.GetCategoryAsString();
              return j.createElement(
                we.c,
                {
                  className:
                    vn.a.OtherEvents_EventCtn + " " + vn.a.HorizontalEvent,
                  eventModel: t,
                  route: we.a.k_eView,
                  openNewWindow: a,
                  onClick: o
                },
                j.createElement(
                  "div",
                  { className: vn.a.OtherEvents_ContentCtn },
                  j.createElement(
                    "div",
                    { className: vn.a.OtherEvents_MainImageCtn },
                    j.createElement("img", {
                      src: i,
                      className: vn.a.OtherEvents_MainImage
                    })
                  )
                ),
                j.createElement(
                  "div",
                  { className: vn.a.OtherEvents_TextCtn },
                  j.createElement(
                    "div",
                    { className: vn.a.HorizontalDescriptionCtn },
                    j.createElement(
                      "div",
                      { className: vn.a.HorizontalDescription },
                      l
                    ),
                    j.createElement(be.a, {
                      bSingleLine: !0,
                      dateAndTime: t.GetStartTimeAndDateUnixSeconds()
                    })
                  ),
                  j.createElement("div", { className: vn.a.HorizontalTitle }, s)
                )
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Bn = (function() {
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
        xn = new ((function() {
          function e() {
            (this.m_mapPerEventStats = new Map()),
              (this.m_mapSummaryStats = new Map()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var a = this;
              if (!this.m_bLoadedFromConfig) {
                var e = Object(G.f)(
                  "trackingdatasummary",
                  "application_config"
                );
                this.ValidateStoreDefault(e) &&
                  this.m_mapSummaryStats.set(e.clan_account_id, new Bn(e));
                var t = Object(G.f)("trackingdataevents", "application_config");
                this.ValidateStoreDefaultList(t) &&
                  t.forEach(function(e) {
                    var t = O.a.InitFromClanID(e.clan_account_id),
                      n = a.GetKey(t, e.event_gid);
                    a.m_mapPerEventStats.set(n, new Bn(e));
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
              var n = this.GetKey(e, t);
              return (
                this.m_mapPerEventStats.has(n) ||
                  this.m_mapPerEventStats.set(n, new Bn(null)),
                this.m_mapPerEventStats.get(n)
              );
            }),
            (e.prototype.GetTotalStats = function(e) {
              return (
                this.LazyInit(),
                this.m_mapSummaryStats.has(e.GetAccountID()) ||
                  this.m_mapSummaryStats.set(e.GetAccountID(), new Bn(null)),
                this.m_mapSummaryStats.get(e.GetAccountID())
              );
            }),
            (e.prototype.GetKey = function(e, t) {
              return e.GetAccountID() + "_" + t;
            }),
            (e.prototype.LoadStatsForEvents = function(c, d, p) {
              return Object(k.b)(this, void 0, void 0, function() {
                var a,
                  t,
                  n,
                  o,
                  r,
                  i,
                  s,
                  l = this;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        (this.LazyInit(),
                        (a = Date.now() / 1e3),
                        !(t = d.filter(function(e) {
                          var t = l.GetKey(c, e),
                            n = l.m_mapPerEventStats.get(t);
                          return (
                            !n ||
                            null == n.m_stats ||
                            n.m_lastUpdateTime < a - 3600
                          );
                        })) || 0 == t.length)
                      )
                        return [2];
                      (n =
                        Object(G.d)() + "actions/ajaxgetpartnereventsreport"),
                        (o = {
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
                          _.a.get(n, {
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
                            new Bn(r.data.summary)
                          ),
                            r.data.events_detail.forEach(function(e) {
                              var t = l.GetKey(c, e.event_gid);
                              l.m_mapPerEventStats.has(t)
                                ? l.m_mapPerEventStats.get(t).reset(e)
                                : l.m_mapPerEventStats.set(t, new Bn(e));
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
        Rn = n("sGzE"),
        Pn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.summary,
                n = e.bIncludeDescription;
              return 0 == t.total_read + t.total_showm
                ? null
                : j.createElement(
                    "div",
                    null,
                    j.createElement(
                      "div",
                      {
                        className: Object(Z.a)(
                          Rn.StatsCtnTitle,
                          n ? Rn.NormalStatsMode : Rn.SmallStatsMode
                        )
                      },
                      j.createElement(
                        "h1",
                        null,
                        Object(L.d)("#EventDashBoard_SummaryStats_Title")
                      ),
                      Boolean(n) &&
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
                        className: Object(Z.a)(
                          Rn.StatsCtn,
                          n ? Rn.NormalStatsMode : Rn.SmallStatsMode
                        )
                      },
                      j.createElement(
                        "div",
                        { className: Rn.StatsLeftSection },
                        j.createElement(
                          "div",
                          { className: Rn.StatsTitle_ctn },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)("#EventDashBoard_Location_LibraryHome")
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Rn.StatsTitle },
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
                          { className: Rn.StatsTitle },
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
                          { className: Rn.StatsTitle_ctn },
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
                          { className: Rn.StatsTitle },
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
                          { className: Rn.StatsTitle },
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
                          { className: Rn.StatsTitle },
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
                          { className: Rn.StatsTitle },
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
                        { className: Rn.StatsRightSection },
                        j.createElement(
                          "div",
                          { className: Rn.StatsTitle_ctn },
                          j.createElement(
                            "span",
                            null,
                            Object(L.d)("#EventDashBoard_Location_StoreDetail")
                          )
                        ),
                        j.createElement(
                          "div",
                          { className: Rn.StatsTitle },
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
                          { className: Rn.StatsTitle },
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
                          { className: Rn.StatsTitle_ctn },
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
                          { className: Rn.StatsTitle },
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
                          { className: Rn.StatsTitle },
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
                          { className: Rn.StatsTitle_ctn },
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
                          { className: Rn.StatsTitle },
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
                          { className: Rn.StatsTitle },
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
        Fn = n("ZCZY"),
        Hn = (function(e) {
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
                          H.b,
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
                { className: Object(Z.a)(Fn.BreadContainer) },
                j.createElement("div", { className: "blockbg" }, e),
                j.createElement("div", { style: { clear: "left" } })
              );
            }),
            t
          );
        })(j.Component),
        zn = n("4sqd"),
        Un = n("5L1o"),
        Wn = j.lazy(function() {
          return Promise.all([n.e(0), n.e(1), n.e(6)]).then(
            n.bind(null, "NIbt")
          );
        }),
        Vn = (function(t) {
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
                n = e.lang,
                a = e.partnerEventStore,
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
                  { className: Ye.a.FlexCenter, style: { height: "400px" } },
                  j.createElement(se.a, {
                    size: "medium",
                    string: Object(L.d)("#Loading")
                  })
                );
              var p = t.GetDescriptionWithFallback(n),
                u = b.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData(),
                m = Object(G.d)() == G.c.STORE_BASE_URL,
                h = g.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                ),
                v = Object(we.d)(
                  t,
                  m ? we.a.k_eStoreNewsHub : we.a.k_eCommunityAllNews,
                  "allowRelative",
                  h && h.vanity_url
                );
              return j.createElement(Zn, {
                event: t,
                lang: n,
                titleBar: d,
                body: j.createElement(
                  F.a,
                  null,
                  j.createElement(
                    "div",
                    { className: dn.a.EventDetailTitleContainer },
                    j.createElement(Hn, {
                      crumbs: [
                        {
                          name: Object(L.d)("#BreadCrumbs_AllEvents"),
                          url: Object(we.d)(
                            t,
                            we.a.k_eStoreUsersNewsHub,
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
                      { className: dn.a.EventDetailTitle },
                      t.GetNameWithFallback(n)
                    ),
                    t.BHasSubTitle(n) &&
                      j.createElement(
                        "div",
                        { className: dn.a.EventDetailsSubTitle },
                        t.GetSubTitle(n)
                      )
                  ),
                  t.BHasBroadcastEnabled() &&
                    j.createElement(
                      "div",
                      { className: dn.a.EventBroadcastCtn },
                      j.createElement(
                        j.Suspense,
                        { fallback: j.createElement("div", null) },
                        j.createElement(Wn, {
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
                    { className: dn.a.EventColumns },
                    j.createElement(
                      "div",
                      { className: dn.a.EventDetailsDescription },
                      j.createElement(
                        F.a,
                        null,
                        t.BHasTag("steam_award_nomination_request") &&
                          j.createElement(zn.a, {
                            event: t,
                            lang: n,
                            previewMode: l
                          }),
                        t.BHasTag("steam_award_vote_request") &&
                          j.createElement(zn.b, {
                            event: t,
                            lang: n,
                            previewMode: l
                          })
                      ),
                      j.createElement(
                        F.a,
                        null,
                        j.createElement(
                          "div",
                          {
                            className: Object(Z.a)(
                              "EventDetailsBody",
                              dn.a.EventDetailsBody
                            )
                          },
                          j.createElement(An.a, {
                            text: p || "",
                            partnerEventStore: a,
                            showErrorInfo: l,
                            event: t,
                            languageOverride: n
                          })
                        )
                      ),
                      Boolean(t.jsondata.read_more_link) &&
                        j.createElement(
                          V.a,
                          {
                            className: Object(Z.a)(Ot.a.Button),
                            href: t.jsondata.read_more_link
                          },
                          Object(L.d)("#EventEmail_Button_ClickForMoreDetails")
                        ),
                      j.createElement("span", { className: Ot.a.Clear }),
                      j.createElement(
                        F.a,
                        null,
                        j.createElement(ft.a, { appid: t.appid })
                      )
                    ),
                    j.createElement(
                      F.a,
                      null,
                      j.createElement(Yn, {
                        event: t,
                        lang: n,
                        nOverrideStartTime: r,
                        nOverrideEndTime: i
                      })
                    )
                  ),
                  j.createElement(ce.b, {
                    eventModel: t,
                    emoticonStore: o,
                    partnerEventStore: a
                  })
                ),
                postbody: j.createElement(F.a, null, s, c),
                footer: j.createElement(
                  F.a,
                  null,
                  j.createElement(
                    "div",
                    { className: dn.a.AppSummaryCtn },
                    j.createElement(
                      "div",
                      { className: dn.a.EventBodyPosition },
                      Boolean(
                        null != u.appid && null != u.appid && 0 != u.appid
                      ) &&
                        j.createElement(
                          "div",
                          { className: dn.a.AppSummaryWidgetTitleCtn },
                          j.createElement(
                            "span",
                            { className: dn.a.Title },
                            Object(L.d)("#CreatorHome_ThisGame")
                          ),
                          j.createElement(
                            "div",
                            { className: dn.a.AppSummaryWidgetCtn },
                            j.createElement(Un.f, { id: t.appid })
                          )
                        ),
                      j.createElement(Dn, {
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
        Zn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.event,
                n = e.lang,
                a = e.titleBar,
                o = e.body,
                r = e.postbody,
                i = e.footer,
                s = t.GetImageURLWithFallback("background", n),
                l = t.BIsImageSafeForAllAges("background", n),
                c = "lang_" + Object(ve.c)(n),
                d = t.BImageNeedScreenshotFallback("background", n);
              return j.createElement(
                "div",
                {
                  className: Object(Z.a)(
                    dn.a.EventDetailsPageContainer,
                    c,
                    Ot.a.PartnerEventFont,
                    l
                      ? dn.a.DetailArtworkAgeAppropriate
                      : dn.a.DetailArtworkAgeNotAppropriate,
                    d && dn.a.NoTitleArtwork
                  )
                },
                a,
                j.createElement(
                  "div",
                  { className: dn.a.EventCoverImageCtn },
                  j.createElement(
                    "div",
                    { className: dn.a.EventCoverImageBlr },
                    j.createElement("div", {
                      className: dn.a.EventCoverImageFuzz,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + s + ")"
                      }
                    }),
                    j.createElement("div", {
                      className: dn.a.EventCoverImage,
                      style: {
                        backgroundColor: "rgb(37, 41, 46)",
                        backgroundImage: "url(" + s + ")"
                      }
                    })
                  ),
                  j.createElement("div", { className: dn.a.CoverImageGradient })
                ),
                j.createElement(
                  "div",
                  { className: dn.a.EventBodyCtn },
                  j.createElement("div", {
                    className: dn.a.EventBackgroundBlurCtn
                  }),
                  j.createElement(
                    "div",
                    { className: dn.a.EventBodyPosition },
                    j.createElement(
                      "div",
                      { className: dn.a.EventBody },
                      j.createElement("div", {
                        className: dn.a.EventBackgroundBlur,
                        style: { backgroundImage: "url(" + s + ")" }
                      }),
                      j.createElement(F.a, null, o)
                    ),
                    Boolean(r) && j.createElement(F.a, null, r)
                  )
                ),
                Boolean(i) && j.createElement(F.a, null, i)
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Yn = (function(e) {
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
                n = e.lang,
                a = e.nOverrideStartTime,
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
              var s = N.a.GetTimeNowWithOverride(),
                l = a || t.GetStartTimeAndDateUnixSeconds();
              return j.createElement(
                "div",
                { className: dn.a.EventDetailTitleDesc },
                j.createElement(
                  "div",
                  { className: dn.a.EventDetailsSticky },
                  i.is_ogg
                    ? j.createElement(qn, { appid: i.appid })
                    : j.createElement(Jn, { clanSteamID: t.clanSteamID }),
                  j.createElement(ft.b, {
                    event: t,
                    nOverrideEndTime: o,
                    nOverrideStartTime: a
                  }),
                  28 !== t.type &&
                    s < l &&
                    j.createElement(
                      "div",
                      { className: dn.a.EventDetailTimeInfo },
                      j.createElement(de.a, {
                        eventModel: t,
                        eventGID: t.GID,
                        lang: n
                      })
                    ),
                  j.createElement(
                    "div",
                    { className: dn.a.EventDetailUserType },
                    j.createElement(
                      "div",
                      { className: dn.a.RightSideTitles },
                      Object(L.d)("#EventDisplay_RightColumnTitle_EventType")
                    ),
                    j.createElement(
                      "div",
                      { className: dn.a.EventDetailsType },
                      r,
                      " "
                    )
                  ),
                  j.createElement(Kn, { event: t })
                )
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        qn = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var t = this.props.appid;
              Object(h.a)(t && 0 != t, "Expected Appid In Game Info Section");
              var e = b.a.GetStoreCapsuleInfo(t),
                n = e.GetAppStoreData();
              return j.createElement(
                "div",
                { className: dn.a.EventDetailGameCallToAction },
                j.createElement(
                  "div",
                  { className: dn.a.RightSideTitles },
                  _t.q.some(function(e) {
                    return t === e;
                  })
                    ? Object(L.d)("#EventDisplay_RightColumnTitle_Blog")
                    : Object(L.d)("#EventDisplay_RightColumnTitle_Game")
                ),
                j.createElement(
                  "a",
                  { href: e ? n.capsule_link : "" },
                  j.createElement("div", {
                    className: dn.a.EventDetailsGame,
                    style: { backgroundImage: "url(" + n.capsule + ")" }
                  })
                ),
                j.createElement(Qn, { appid: t })
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Jn = (function(e) {
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
                    { className: dn.a.EventDetailGameCallToAction },
                    j.createElement(
                      "div",
                      { className: dn.a.RightSideTitles },
                      t.group_name
                    ),
                    j.createElement(
                      "a",
                      { href: g.a.GetCreatorStoreURL(e) },
                      j.createElement("div", {
                        className: dn.a.EventDetailsAvatar,
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
        Qn = (function(e) {
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
                    M.a.HintLoad(),
                    [2]
                  );
                });
              });
            }),
            (t.prototype.render = function() {
              var e = this.props.appid,
                t = b.a.GetStoreCapsuleInfo(e),
                n = t.GetAppStoreData(),
                a = null;
              M.a.BOwnsApp(e)
                ? (a = Object(L.d)("#EventDisplay_CallToAction_InLibrary"))
                : t.GetAppStoreData().coming_soon && !t.GetAppStoreData().subid
                ? (a = Object(L.d)("#EventDisplay_CallToAction_ComingSoon"))
                : n.is_free
                ? (a = Object(L.d)("#EventDisplay_CallToAction_FreeToPlay"))
                : n.is_free || (a = n.price);
              var o =
                1 !== n.success ||
                _t.q.some(function(e) {
                  return n.appid === e;
                });
              return j.createElement(
                "div",
                { className: o ? dn.a.SteamBlog : void 0 },
                j.createElement(
                  "div",
                  { className: dn.a.GameActions },
                  j.createElement(
                    "div",
                    {
                      className: dn.a.Ownership,
                      style: { fontSize: a && a.length < 10 ? "12px" : "10px" }
                    },
                    a || null
                  ),
                  j.createElement(Un.a, { info: n })
                ),
                j.createElement(
                  "div",
                  { className: Object(Z.a)(dn.a.GameActions) },
                  j.createElement(Un.h, { info: n })
                )
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Xn = ["", "en-US", "en-GB", "zh-CN", "es-ES", "br-BR"],
        Kn = (j.Component,
        (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_cancelSignal = _.a.CancelToken.source()), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this,
                n = this.props.event;
              n.BIsPartnerEvent() &&
                n.BIsVisibleEvent() &&
                A.a
                  .Get()
                  .LoadSingleAppEventPermissions(n.clanSteamID)
                  .then(function(e) {
                    e &&
                      e.can_edit &&
                      xn.LoadStatsForEvents(
                        n.clanSteamID,
                        [n.GID],
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
                xn.GetStatsFor(e.clanSteamID, e.GID);
              return j.createElement(
                F.a,
                null,
                j.createElement(
                  "div",
                  { className: dn.a.EditorStatsCtn },
                  j.createElement(
                    "div",
                    { className: dn.a.EditorStatsRow },
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
                    { className: dn.a.EditorStatsRow },
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
                    { className: dn.a.EditorStatsRow },
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
                    { className: dn.a.EditorStatsCtn },
                    Object(L.d)("#EventDashBoard_SummaryStats_Admin_Title"),
                    j.createElement(Pn, { summary: t.m_stats })
                  )
              );
            }),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component)),
        $n = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.componentDidMount = function() {
              Yt.GetRawDoorData() || Yt.LoadDoorData(),
                Zt.LoadSaleTokenPoints();
            }),
            (t.prototype.render = function() {
              var e = Yt.GetRawDoorData();
              if (!e) return null;
              for (
                var t = e.length - 1,
                  n = N.a.GetTimeNowWithOverride() > e[t].rtime_start,
                  a = [],
                  o = 0;
                o <= t;
                o++
              )
                a.push(
                  j.createElement(ta, {
                    key: "envelope-" + o,
                    iDoorIndex: o,
                    strFontFamily: this.props.strFontFamily
                  })
                );
              var r = Zt.GetSaleTokenPoints().points;
              return j.createElement(
                F.a,
                null,
                j.createElement(
                  "div",
                  { className: dn.a.LunarNewYearHeader },
                  j.createElement(
                    "div",
                    { className: dn.a.EnvelopeArea },
                    0 <= r &&
                      j.createElement(
                        "div",
                        { className: dn.a.TokenBalanceContainer },
                        Object(L.d)("#Lunar2020_YourBalancePrefix"),
                        j.createElement(
                          "a",
                          {
                            className: dn.a.TokenBalance,
                            href: G.c.STORE_BASE_URL + "lunarnewyearmarket"
                          },
                          " ",
                          Object(L.d)("#Lunar2020_BalanceNumberOfTokens", r),
                          " "
                        )
                      ),
                    a
                  ),
                  !n &&
                    j.createElement(
                      "div",
                      { className: dn.a.BottomMessage },
                      Object(L.d)("#Lunar2020_CheckBackEachDay")
                    )
                )
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        ea = [
          "#Lunar2020_FirstGift",
          "#Lunar2020_SecondGift",
          "#Lunar2020_ThirdGift",
          "#Lunar2020_FourthGift"
        ],
        ta = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.OpenEnvelope = function(a) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = Yt.BIsDoorOpened(this.props.iDoorIndex)),
                        (n = Object(Ge.m)(a)),
                        t
                          ? (Object(je.b)(
                              j.createElement(
                                oa,
                                Object(k.a)({ bIsFirstOpen: !1 }, this.props)
                              ),
                              n
                            ),
                            [2])
                          : [4, Yt.OpenDoor(this.props.iDoorIndex, !0)]
                      );
                    case 1:
                      return (
                        e.sent() &&
                          Object(je.b)(
                            j.createElement(
                              oa,
                              Object(k.a)({ bIsFirstOpen: !0 }, this.props)
                            ),
                            n
                          ),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.ShowLimitedUserDialog = function(e) {
              var t = Object(Ge.m)(e),
                n = j.createElement(
                  "a",
                  { href: G.c.HELP_BASE_URL },
                  Object(L.d)("#User_LimitedAccount_UrlInfo")
                );
              Object(je.b)(
                j.createElement(Le.c, {
                  strTitle: Object(L.d)("#Lunar2020_LimitedUserDialogTitle"),
                  strDescription: Object(L.k)("#User_LimitedAccount", n),
                  bAlertDialog: !0
                }),
                t
              );
            }),
            (t.prototype.VOOnClose = function() {
              G.i.is_support && Yt.OpenDoor(this.props.iDoorIndex, !1);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.iDoorIndex,
                n = e.strFontFamily;
              Object(h.a)(
                0 <= t && t < ea.length && t < Yt.GetDoorCount(),
                "Day index #" + t + " not in valid range."
              );
              for (
                var a = Object(L.d)(ea[t]),
                  o = !G.i.logged_in,
                  r = Yt.BIsDoorOpened(t),
                  i = Yt.BCanUserOpenDoor(t),
                  s = !0,
                  l = 0;
                l < t;
                l++
              )
                s = s && Yt.BIsDoorOpened(l);
              var c = !r && i && s,
                d = new Date(1e3 * Yt.GetRawDoorData()[t].rtime_start),
                p = o
                  ? Object(L.d)("#Login_SignIn")
                  : r
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
                u = o
                  ? Xe.a
                  : G.i.is_limited
                  ? this.ShowLimitedUserDialog
                  : r || c
                  ? this.OpenEnvelope
                  : null,
                m = Object(Z.a)(
                  dn.a.EnvelopeContainer,
                  o && dn.a.NeedLogin,
                  r && dn.a.Opened,
                  c && dn.a.Unlocked,
                  !r && !c && dn.a.Locked
                );
              return j.createElement(
                "div",
                { className: m },
                j.createElement("div", { className: dn.a.BackingRect }),
                j.createElement(
                  "div",
                  { className: dn.a.Envelope },
                  j.createElement(
                    "div",
                    { className: dn.a.GiftLabel, style: { fontFamily: n } },
                    a
                  )
                ),
                j.createElement(
                  "div",
                  { className: dn.a.OpenState, onClick: u },
                  p
                ),
                (G.i.is_support &&
                  r &&
                  ("beta" == G.c.WEB_UNIVERSE || "dev" == G.c.WEB_UNIVERSE) &&
                  j.createElement(
                    "div",
                    {
                      className: Object(Z.a)(dn.a.OpenState, dn.a.VO),
                      onClick: this.VOOnClose
                    },
                    "(VO) Close Gift"
                  )) ||
                  null
              );
            }),
            Object(k.c)([q.a], t.prototype, "OpenEnvelope", null),
            Object(k.c)([q.a], t.prototype, "ShowLimitedUserDialog", null),
            Object(k.c)([q.a], t.prototype, "VOOnClose", null),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        na = [
          "#Lunar2020_StoryDayOneHeader",
          "#Lunar2020_StoryDayTwoHeader",
          "#Lunar2020_StoryDayThreeHeader",
          "#Lunar2020_StoryDayFourHeader"
        ],
        aa = [
          "#Lunar2020_StoryDayOne",
          "#Lunar2020_StoryDayTwo",
          "#Lunar2020_StoryDayThree",
          "#Lunar2020_StoryDayFour"
        ],
        oa = function(e) {
          var t = j.useState(!e.bIsFirstOpen),
            n = t[0],
            a = t[1];
          j.useEffect(function() {
            return a(!0);
          }, []);
          var o =
              G.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.mp4" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            r =
              G.c.MEDIA_CDN_URL +
              "store/promo/lunar2020/red_envelope_2020.webm" +
              (e.bIsFirstOpen ? "" : "#t=5,6"),
            i = e.iDoorIndex == Yt.GetDoorCount() - 1;
          return j.createElement(
            Le.d,
            {
              className: dn.a.LunarNewYearOpenEnvelopeVideoDialog,
              closeModal: e.closeModal
            },
            j.createElement(
              "div",
              { className: dn.a.Container },
              j.createElement(
                "div",
                { className: dn.a.Column },
                j.createElement(
                  "div",
                  { className: dn.a.StoryHeader },
                  Object(L.d)("#Lunar2020_StoryTitle")
                ),
                j.createElement(
                  "div",
                  { className: dn.a.StorySubHeader },
                  Object(L.d)("#Lunar2020_StorySubTitle")
                ),
                j.createElement(
                  "div",
                  { className: dn.a.StorySubHeader },
                  Object(L.d)(na[e.iDoorIndex])
                ),
                j.createElement(
                  "div",
                  { className: dn.a.StoryText },
                  Object(L.d)(aa[e.iDoorIndex])
                ),
                j.createElement(
                  "div",
                  { className: dn.a.VideoBox },
                  j.createElement(
                    "div",
                    {
                      className: Object(Z.a)(dn.a.CoinText, n && dn.a.Visible)
                    },
                    Object(L.d)("#Lunar2020_ReceivedNumberOfTokens", 100)
                  ),
                  j.createElement(
                    "video",
                    {
                      autoPlay: e.bIsFirstOpen,
                      muted: !0,
                      className: dn.a.LunarNewYearOpenEnvelopeVideo
                    },
                    j.createElement("source", { src: o, type: "video/mp4" }),
                    j.createElement("source", { src: r, type: "video/webm" }),
                    Object(L.d)("#Lunar2020_ErrorLoadingVideo")
                  )
                )
              ),
              j.createElement(
                "div",
                { className: dn.a.Column },
                j.createElement(
                  "div",
                  { className: dn.a.StoryPicture },
                  j.createElement("img", {
                    src: Yt.GetStoryImage(e.iDoorIndex)
                  })
                ),
                !i &&
                  j.createElement(
                    "div",
                    { className: dn.a.CheckBackText },
                    Object(L.d)("#Lunar2020_CheckBackEachDayForStory")
                  )
              )
            ),
            j.createElement(
              "div",
              { className: dn.a.Links },
              j.createElement(
                "div",
                { className: dn.a.MarketLink },
                j.createElement(
                  "a",
                  { href: G.c.STORE_BASE_URL + "lunarnewyearmarket" },
                  Object(L.d)("#Lunar2020_LinkFromVideoToMarket")
                )
              ),
              j.createElement(
                "div",
                { className: dn.a.MarketLink, onClick: e.closeModal },
                Object(L.d)("#Lunar2020_LinkBackToSale")
              )
            )
          );
        },
        ra = n("ZlHF"),
        ia = n.n(ra),
        sa = (n("bUNj"), n("SG7E")),
        la = n("6Aav"),
        ca = (function() {
          function e(e) {
            (this.appid = e.appid),
              (this.demo_appid = e.demo_appid),
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
        da = (function() {
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
            (e.prototype.BHasDemoAppID = function(e) {
              var t = this.m_mapAppToDemoInfo.get(e);
              return t && Boolean(t.demo_appid);
            }),
            (e.prototype.SetCollectionInfo = function(e, t) {
              (this.m_sFeaturedCollection = e), (this.m_sInfoCollection = t);
            }),
            (e.prototype.Init = function() {
              var t = this,
                e = Object(G.f)("demoeventstore", "application_config");
              this.ValidateStoreDefault(e) &&
                e.forEach(function(e) {
                  t.m_mapAppToDemoInfo.set(e.appid, new ca(e));
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
                    n,
                    a,
                    o,
                    r = this;
                  return Object(k.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return this.m_sFeaturedCollection &&
                          this.m_sInfoCollection
                          ? ((t = new Array()),
                            (n = new Array()),
                            i.forEach(function(e) {
                              r.m_mapAppToDemoInfo.has(e)
                                ? r.m_mapAppIDToLoadPromise.has(e) &&
                                  n.push(r.m_mapAppIDToLoadPromise.get(e))
                                : t.push(e);
                            }),
                            0 === t.length && 0 === n.length
                              ? [2, !0]
                              : 0 === t.length && 1 === n.length
                              ? [2, n[0]]
                              : (0 < t.length &&
                                  ((a = this.InternalLoadAppIDsBatch(t, s, l)),
                                  t.forEach(function(e) {
                                    return r.m_mapAppIDToLoadPromise.set(e, a);
                                  }),
                                  n.push(a)),
                                (o = !0),
                                [
                                  4,
                                  Promise.all(n).then(function(e) {
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
                Object(k.b)(this, void 0, void 0, function() {
                  var t,
                    n,
                    a,
                    o = this;
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
                                appids: r,
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
                        return 1 === (n = e.sent()).data.success
                          ? (n.data.info.forEach(function(e) {
                              o.m_mapAppToDemoInfo.set(e.appid, new ca(e));
                            }),
                            w.c.RegisterClanEvents(n.data.events),
                            [2, !0])
                          : (console.log(
                              "Failed to call ajaxgetdemoevents with response:" +
                                n.data.err_msg
                            ),
                            [3, 3]);
                      case 2:
                        return (
                          (a = e.sent()),
                          console.log("Failed to call ajaxgetdemoevents:" + a),
                          [3, 3]
                        );
                      case 3:
                        return [2, !1];
                    }
                  });
                })
              );
            }),
            (e.prototype.EnsurePartnerEventLoadedForDemo = function(a, o) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = new Array()),
                        (n = this.m_mapAppToDemoInfo.get(a))
                          ? (n.info_clan_event_gid &&
                              t.push(n.info_clan_event_gid),
                            n.last_clan_event_gid &&
                              t.push(n.last_clan_event_gid),
                            n.upcoming_clan_event_gid &&
                              t.push(n.upcoming_clan_event_gid),
                            [
                              4,
                              w.c.LoadBatchPartnerEventsByAnnouncementGID(
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
        pa = (function() {
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
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n, a, o;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_mapAppToTrailers.has(r)
                        ? [2, this.m_mapAppToTrailers.get(r)]
                        : ((t = G.c.STORE_BASE_URL + "api/appdetails"),
                          (n = {
                            appids: r,
                            filters: "movies",
                            origin: self.origin
                          }),
                          [4, _.a.get(t, { params: n })]);
                    case 1:
                      return (
                        (a = e.sent()) &&
                        a.data &&
                        a.data[r] &&
                        1 == a.data[r].success
                          ? ((o = a.data[r].data.movies),
                            this.m_mapAppToTrailers.set(r, o || []))
                          : console.error(
                              "LoadTrailersForApp: failed for appid: " + r,
                              a
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
        ua = n("+jbA"),
        ma = n("Z1oF"),
        ha = n("d+Me"),
        va = n("YVfL"),
        _a = n.n(va),
        ba = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                config: n.SetupHardcodedConfig(),
                bLoaded: !1,
                rgVisibleApps: []
              }),
              (e.m_cancelSignal = _.a.CancelToken.source()),
              e
            );
          }
          var n;
          return (
            Object(k.d)(e, t),
            ((n = e).prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "SaleSectionEventScheduleInner to unload"
              );
            }),
            (e.prototype.componentDidUpdate = function(e) {
              var t, n, a, o;
              (null ===
                (n =
                  null === (t = e.activeTab) || void 0 === t
                    ? void 0
                    : t.GetTab()) || void 0 === n
                ? void 0
                : n.unique_id) !=
                (null ===
                  (o =
                    null === (a = e.activeTab) || void 0 === a
                      ? void 0
                      : a.GetTab()) || void 0 === o
                  ? void 0
                  : o.unique_id) && Sa.ClearSelection();
            }),
            (e.SetupHardcodedConfig = function() {
              var e = {
                sCollection: "gamefestival2020",
                sInfoCollcetion: "gamefestival2020info"
              };
              return (
                da.Get().SetCollectionInfo(e.sCollection, e.sInfoCollcetion), e
              );
            }),
            (e.prototype.componentDidMount = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        (t = this.GetScheduleCalendarStore()).RegisterCalendarEventsAndModels(
                          { success: 1 }
                        )
                      ];
                    case 1:
                      return (
                        e.sent(),
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
                    case 2:
                      return (
                        e.sent(),
                        (n = s.a.parse(
                          this.props.history.location.search.substring(1)
                        )),
                        Sa.Init(n, this.OnClanEventGIDSelectionChange),
                        Sa.BIsSomeEventSelected()
                          ? ((a = void 0),
                            t.GetCalendarEventList().forEach(function(e) {
                              e.unique_id === Sa.GetClanEventGID() && (a = e);
                            }),
                            a
                              ? [
                                  4,
                                  Promise.all([
                                    w.c.LoadPartnerEventFromClanEventGID(
                                      a.appid,
                                      a.unique_id,
                                      0
                                    ),
                                    T.a.LoadAppLinkInfo([a.appid])
                                  ])
                                ]
                              : [3, 4])
                          : [3, 4]
                      );
                    case 3:
                      e.sent(), (e.label = 4);
                    case 4:
                      return this.setState({ bLoaded: !0 }), [2];
                  }
                });
              });
            }),
            (e.prototype.OnClanEventGIDSelectionChange = function(e) {
              var t = { selectedScheduleEvent: void 0, t: void 0 },
                n = !1;
              e && ((t.selectedSchedEvent = e), (n = !0)),
                N.a.BHasTimeOverride() &&
                  ((t.t = d.a.unix(N.a.GetTimeNowWithOverride()).format()),
                  (n = !0));
              var a = s.a.parse(
                  this.props.history.location.search.substring(1)
                ),
                o = Object.assign(a, t);
              this.props.history.push(n ? "?" + s.a.stringify(o) : "?");
            }),
            (e.prototype.GetScheduleCalendarStore = function() {
              return (
                C({
                  collectionid: this.state.config.sCollection,
                  bSectionByDay: !0,
                  rtCalendarEnd: this.props.event.endTime
                }),
                x()
              );
            }),
            (e.prototype.BIsAppArrayEqual = function(e, t) {
              if (e === t) return !0;
              if (null == e || null == t) return !1;
              if (e.length != t.length) return !1;
              for (var n = 0; n < e.length; ++n) if (e[n] !== t[n]) return !1;
              return !0;
            }),
            (e.prototype.VisibleAppChanged = function(e) {
              this.BIsAppArrayEqual(e, this.state.rgVisibleApps) ||
                this.setState({ rgVisibleApps: e });
            }),
            (e.prototype.render = function() {
              if (!this.state.bLoaded)
                return j.createElement(se.a, {
                  position: "center",
                  string: Object(L.d)("#Sale_EventSchedule")
                });
              var e = this.props.promotionName,
                t = this.GetScheduleCalendarStore(),
                n = new Array();
              if (this.state.rgVisibleApps)
                for (
                  var a = function(t) {
                      if (
                        o.props.activeTab.ShouldShowOnTab("game", t) &&
                        (n.some(function(e) {
                          return t == e;
                        }) || n.push(t),
                        4 <= n.length)
                      )
                        return "break";
                    },
                    o = this,
                    r = 0,
                    i = this.state.rgVisibleApps;
                  r < i.length;
                  r++
                ) {
                  if ("break" === a(i[r])) break;
                }
              return j.createElement(
                "div",
                { className: Object(Z.a)(ia.a.SaleSection, _a.a.SaleSchedCtn) },
                j.createElement(
                  "div",
                  { className: Ot.a.SaleSectionHeader },
                  Object(L.d)("#Sale_EventSchedule")
                ),
                j.createElement(
                  "div",
                  { className: _a.a.SectionCtn },
                  j.createElement(ya, {
                    calendarStore: t,
                    promotionName: e,
                    activeTab: this.props.activeTab,
                    config: this.state.config,
                    fnVisibleAppChanged: this.VisibleAppChanged
                  }),
                  Boolean(Sa.BIsSomeEventSelected())
                    ? j.createElement(Ta, {
                        eventGID: Sa.GetClanEventGID(),
                        promotionName: e
                      })
                    : j.createElement(Oa, { rgAppIDs: n, promotionName: e })
                )
              );
            }),
            Object(k.c)(
              [q.a],
              e.prototype,
              "OnClanEventGIDSelectionChange",
              null
            ),
            Object(k.c)([q.a], e.prototype, "VisibleAppChanged", null),
            (e = n = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        ga = Object(c.g)(ba),
        ya = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), (e.m_AppVisible = new Array(100)), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.GetCalendarSections = function() {
              return this.props.calendarStore.GetCalendarSections(!0);
            }),
            (e.prototype.OnAppVisibilityChange = function(e, t, n) {
              this.m_AppVisible.length < n &&
                (this.m_AppVisible = Object(ge.e)(
                  this.m_AppVisible,
                  n + 1,
                  null
                )),
                (this.m_AppVisible[n] = e ? t : null),
                this.props.fnVisibleAppChanged(
                  this.m_AppVisible.filter(function(e) {
                    return null !== e;
                  })
                );
            }),
            (e.prototype.render = function() {
              var n = this,
                a = this.props.calendarStore,
                e = this.GetCalendarSections(),
                o = new Array(),
                r = 0;
              return (
                e.forEach(function(e, t) {
                  o.push(
                    j.createElement(
                      Ea,
                      Object(k.a)(
                        {
                          key: e.strSectionLabel,
                          strSectionLabel: e.strSectionLabel,
                          rtSectionStart: e.rtSectionStart,
                          rtSectionEnd: e.rtSectionEnd,
                          fnOnAppVisibilityChange: n.OnAppVisibilityChange,
                          nEventBeforeThisSection: r
                        },
                        n.props
                      )
                    )
                  ),
                    (r += a.CountCalenderItemsInTimeRange(
                      e.rtSectionStart,
                      e.rtSectionEnd,
                      !0
                    ));
                }),
                j.createElement(
                  "div",
                  { className: _a.a.SaleSchedListCtn },
                  j.createElement(
                    "div",
                    { className: Object(Z.a)(_a.a.SaleSchedList) },
                    Boolean(0 == a.GetCalendarEventList().length) &&
                      j.createElement(
                        "div",
                        { className: _a.a.NoEventsYet },
                        Object(L.d)("#Sale_EventSchedule_NoEventsScheduled")
                      ),
                    o
                  ),
                  j.createElement(
                    "a",
                    {
                      className: Object(Z.a)(_a.a.NewsHubLink, Ot.a.Button),
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
            Object(k.c)([q.a], e.prototype, "OnAppVisibilityChange", null),
            e
          );
        })(j.Component),
        Ea = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            Object.defineProperty(t.prototype, "cachedCalendarItems", {
              get: function() {
                var e = this.props,
                  t = e.calendarStore,
                  n = e.rtSectionStart,
                  a = e.rtSectionEnd;
                return t.GetCalendarItemsInTimeRange(
                  Object(o.a)(function() {
                    return n;
                  }),
                  Object(o.a)(function() {
                    return a;
                  }),
                  !0
                );
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.render = function() {
              var n = this,
                e = this.props,
                t = e.strSectionLabel,
                a = e.fnOnAppVisibilityChange,
                o = e.activeTab,
                r = this.cachedCalendarItems,
                i = r.rgCalendarItems,
                s = (r.bIsComplete, new Array());
              return (
                i.reverse().forEach(function(e, t) {
                  o.ShouldShowOnTab("game", e.appid) &&
                    s.push(
                      j.createElement(
                        ha.a,
                        {
                          key: "schedrow_" + e.unique_id,
                          topOffset: "10px",
                          bottomOffset: "-10px",
                          onEnter: function() {
                            return a(
                              !0,
                              e.appid,
                              n.props.nEventBeforeThisSection + t
                            );
                          },
                          onLeave: function() {
                            return a(
                              !1,
                              e.appid,
                              n.props.nEventBeforeThisSection + t
                            );
                          }
                        },
                        j.createElement(
                          "div",
                          null,
                          j.createElement(fa, {
                            item: e,
                            promotionName: n.props.promotionName
                          })
                        )
                      )
                    );
                }),
                0 == s.length
                  ? null
                  : j.createElement(
                      j.Fragment,
                      null,
                      j.createElement(
                        "div",
                        { className: _a.a.SchedSectionLabel },
                        t
                      ),
                      0 == s.length &&
                        j.createElement(
                          "div",
                          null,
                          Object(L.d)("#Sale_EventSchedule_NoUpcomingEvents")
                        ),
                      s
                    )
              );
            }),
            Object(k.c)([m.computed], t.prototype, "cachedCalendarItems", null),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Sa = new ((function() {
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
            (e.prototype.ClearSelection = function() {
              void 0 !== this.m_gidClanEventSelected &&
                (this.m_gidClanEventSelected = void 0);
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
        fa = (function(t) {
          function n() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bLoaded: n.BHasLoadedRequiredData(e.props) }), e
            );
          }
          return (
            Object(k.d)(n, t),
            (n.BHasLoadedRequiredData = function(e) {
              return (
                w.c.BHasClanEventModel(e.item.unique_id) &&
                T.a.BHasAppLinkLoaded(e.item.appid)
              );
            }),
            (n.prototype.componentDidMount = function() {
              this.DoLoad();
            }),
            (n.prototype.componentDidUpdate = function(e) {
              e.item.unique_id == this.props.item.unique_id ||
                n.BHasLoadedRequiredData(this.props) ||
                this.setState({ bLoaded: !1 }, this.DoLoad);
            }),
            (n.prototype.DoLoad = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n, a;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.bLoaded
                        ? [3, 2]
                        : ((t = this.props.item),
                          (n = O.a.InitFromClanID(t.clanid)),
                          (a = new Array()),
                          w.c.BHasClanEventModel(t.unique_id) ||
                            a.push(
                              w.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                                n,
                                t.unique_id,
                                0
                              )
                            ),
                          T.a.BHasAppLinkLoaded(t.appid) ||
                            a.push(T.a.LoadAppLinkInfo([t.appid])),
                          [4, Promise.all(a)]);
                    case 1:
                      e.sent(), this.setState({ bLoaded: !0 }), (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (n.prototype.render = function() {
              if (!this.state.bLoaded)
                return j.createElement(
                  "div",
                  { className: _a.a.SaleSchedRowProxy },
                  j.createElement(se.a, { size: "small" })
                );
              var e = this.props.item,
                t = w.c.GetClanEventModel(e.unique_id),
                n = T.a.GetAppLinkInfo(e.appid);
              return t && n
                ? j.createElement(Ca, { item: this.props.item })
                : null;
            }),
            n
          );
        })(j.Component),
        Ca = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.OnRowClick = function() {
              var e = this.props.item.unique_id;
              if (window.innerWidth > parseInt(_a.a.strMaxMobileWidth))
                Sa.ToggleClanEventGID(e);
              else {
                var t = w.c.GetClanEventModel(e);
                t && Object(St.a)(t, window);
              }
            }),
            (e.prototype.render = function() {
              var e,
                t = this.props.item,
                n = w.c.GetClanEventModel(t.unique_id),
                a = T.a.GetAppLinkInfo(t.appid),
                o = new Date(1e3 * n.startTime);
              o.setMinutes(o.getMinutes() <= 50 ? 0 : 60);
              var r = o.getTime() / 1e3;
              return j.createElement(
                "div",
                {
                  onClick: this.OnRowClick,
                  className: Object(Z.a)(
                    ((e = {}),
                    (e[_a.a.SaleSchedRow] = !0),
                    (e[_a.a.SchedRowSelected] = Sa.BIsEventSelected(
                      this.props.item.unique_id
                    )),
                    e)
                  )
                },
                j.createElement(he, { event: n }),
                j.createElement(
                  "div",
                  { className: _a.a.Time },
                  Object(ma.g)(r)
                ),
                j.createElement(
                  "div",
                  { className: _a.a.DetailsCtn },
                  j.createElement("div", { className: _a.a.AppTitle }, a.title),
                  j.createElement(
                    "div",
                    { className: _a.a.EventTitle },
                    n.GetNameWithFallback(Object(ve.d)(G.c.LANGUAGE))
                  )
                ),
                j.createElement(
                  "div",
                  { className: _a.a.Icon },
                  j.createElement("img", {
                    className: _a.a.CategoryTypeImage,
                    width: "26",
                    height: "26",
                    src:
                      G.c.IMG_URL +
                      "events/types/type_" +
                      (11 == n.type ? "11" : "9") +
                      ".png"
                  })
                )
              );
            }),
            Object(k.c)([q.a], e.prototype, "OnRowClick", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        Oa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoading: !T.a.BHasAllAppLinksLoaded(e.props.rgAppIDs)
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
              T.a.BHasAllAppLinksLoaded(this.props.rgAppIDs) ||
                this.state.bLoading ||
                this.setState({ bLoading: !0 }, this.DoLoadCapsules);
            }),
            (e.prototype.DoLoadCapsules = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.bLoading
                        ? [4, T.a.LoadAppLinkInfo(this.props.rgAppIDs)]
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
              var n = this;
              if (this.state.bLoading) return j.createElement(se.a, null);
              var a = new Array();
              return (
                this.props.rgAppIDs.forEach(function(e) {
                  var t = T.a.GetAppLinkInfo(e);
                  t &&
                    a.push(
                      j.createElement(Ia, {
                        key: "democap_" + t.appid,
                        appCapsule: t,
                        promotionName: n.props.promotionName
                      })
                    );
                }),
                j.createElement(
                  "div",
                  { className: Object(Z.a)(_a.a.SaleSchedGridCtn) },
                  a
                )
              );
            }),
            e
          );
        })(j.Component),
        Ia = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                demoInfo: da.Get().GetDemoEventInfo(e.props.appCapsule.appid)
              }),
              (e.m_refMoreActionsButton = j.createRef()),
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
              M.a.HintLoad(), this.DoLoadAboutAndDemoInfo();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              e.appCapsule.appid === this.props.appCapsule.appid ||
                (this.state.demoInfo &&
                  this.state.demoInfo.appid == this.props.appCapsule.appid) ||
                this.m_cancelSignal.token.reason ||
                this.setState(
                  {
                    demoInfo: da
                      .Get()
                      .GetDemoEventInfo(this.props.appCapsule.appid)
                  },
                  this.DoLoadAboutAndDemoInfo
                );
            }),
            (e.prototype.DoLoadAboutAndDemoInfo = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.demoInfo
                        ? [3, 2]
                        : ((t = this.props.appCapsule.appid),
                          [
                            4,
                            da
                              .Get()
                              .LoadAppIDsBatch([t], !0, this.m_cancelSignal)
                          ]);
                    case 1:
                      e.sent(),
                        (n = da.Get().GetDemoEventInfo(t)),
                        this.m_cancelSignal.token.reason ||
                          this.setState({ demoInfo: n }),
                        (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.OnInstallDemo = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t;
                return Object(k.e)(this, function(e) {
                  return (
                    (t = this.state.demoInfo) &&
                      t.demo_appid &&
                      Object(sa.a)(t.demo_appid),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.ShowQuickPitch = function(e) {
              var t = this.state.demoInfo;
              if (t && t.info_clan_event_gid) {
                var n = w.c.GetClanEventModel(t.info_clan_event_gid);
                Object(St.a)(n, Ge.m(e));
              }
              this.HideMenu();
            }),
            (e.prototype.AddToWishlist = function() {
              M.a.UpdateGameWishlist(this.props.appCapsule.appid, !0),
                this.HideMenu();
            }),
            (e.prototype.OnOtherActionsMenuClick = function() {
              this.state.bIsMoreActionsMenuOpen
                ? this.HideMenu()
                : this.ShowMenu();
            }),
            (e.prototype.ShowMenu = function() {
              if (this.m_moreActionsMenu) this.m_moreActionsMenu.Show();
              else {
                var e = this.state.demoInfo,
                  t = !!(
                    e &&
                    e.info_clan_event_gid &&
                    w.c.GetClanEventModel(e.info_clan_event_gid)
                  ),
                  n = j.createElement(
                    "div",
                    null,
                    t &&
                      j.createElement(
                        "div",
                        {
                          className: _a.a.MoreActionsMenuItem,
                          onClick: this.ShowQuickPitch
                        },
                        Object(L.d)("#Sale_ReadDemoBlurb")
                      ),
                    j.createElement(
                      "a",
                      {
                        className: _a.a.MoreActionsMenuItem,
                        onClick: this.HideMenu,
                        href:
                          G.c.STORE_BASE_URL +
                          "newshub/app/" +
                          this.props.appCapsule.appid +
                          "?upcoming=true"
                      },
                      Object(L.d)("#Sale_SeeUpcomingEvents")
                    ),
                    j.createElement(
                      "div",
                      {
                        className: _a.a.MoreActionsMenuItem,
                        onClick: this.AddToWishlist
                      },
                      Object(L.d)("#Sale_AddToWishlist")
                    ),
                    j.createElement(
                      "a",
                      {
                        className: _a.a.MoreActionsMenuItem,
                        onClick: this.HideMenu,
                        href:
                          G.c.STORE_BASE_URL +
                          "app/" +
                          this.props.appCapsule.appid
                      },
                      Object(L.d)("#Sale_VisitStorePage")
                    )
                  ),
                  a = {
                    bOverlapHorizontal: !0,
                    bDisablePopTop: !0,
                    strClassName: Object(Z.a)(
                      _a.a.MoreActionsMenu,
                      ua.contextMenu
                    )
                  };
                (this.m_moreActionsMenu = Object(Me.a)(
                  n,
                  this.m_refMoreActionsButton.current,
                  a
                )),
                  this.m_moreActionsMenu.SetOnHideCallback(this.HideMenu);
              }
              this.setState({ bIsMoreActionsMenuOpen: !0 });
            }),
            (e.prototype.HideMenu = function() {
              this.m_moreActionsMenu && this.m_moreActionsMenu.Hide(),
                this.setState({ bIsMoreActionsMenuOpen: !1 });
            }),
            (e.prototype.render = function() {
              var e,
                t = this.props,
                n = t.appCapsule,
                a = t.promotionName,
                o = this.state.demoInfo;
              o &&
                o.upcoming_clan_event_gid &&
                (((e = new p.d()).clanid = o.ogg_clanid),
                (e.unique_id = o.upcoming_clan_event_gid),
                (e.appid = n.appid),
                (e.event_type = o.upcoming_clan_event_type));
              var r = !(!o || !o.demo_appid);
              return j.createElement(
                "div",
                { className: _a.a.DemoCapsuleCtn },
                o
                  ? j.createElement(
                      j.Fragment,
                      null,
                      j.createElement(
                        Ae.a,
                        {
                          strURL: G.c.STORE_BASE_URL + "app/" + n.appid,
                          type: "app",
                          id: n.appid,
                          hoverClassName: _a.a.DemoCapsuleImageCtn
                        },
                        j.createElement("img", {
                          src: n.capsule,
                          alt: n.title,
                          loading: "lazy",
                          className: _a.a.DemoCapsuleImage
                        })
                      ),
                      e
                        ? j.createElement(
                            "div",
                            { className: _a.a.DemoCapsuleEventReference },
                            j.createElement(fa, { item: e, promotionName: a })
                          )
                        : n.release &&
                            j.createElement(
                              "div",
                              { className: _a.a.DemoCapsuleRelease },
                              n.coming_soon
                                ? n.release
                                : Object(L.d)("#Sale_ReleaseDate", n.release)
                            ),
                      j.createElement(
                        "div",
                        { className: _a.a.DemoCapsuleActionCtn },
                        j.createElement(
                          "div",
                          {
                            onClick: this.OnOtherActionsMenuClick,
                            className: _a.a.DemoButton,
                            ref: this.m_refMoreActionsButton
                          },
                          Object(L.d)("#Sale_OtherActions_MenuLabel"),
                          j.createElement(
                            "div",
                            { className: _a.a.DownArrow },
                            j.createElement(U.k, { angle: 180 })
                          )
                        ),
                        j.createElement(
                          W.a,
                          {
                            toolTipContent: Object(L.d)(
                              r
                                ? "#InstallDemo_ttip"
                                : "#Sale_CannotInstallDemo_ttip",
                              n.title
                            ),
                            onClick: r ? this.OnInstallDemo : null,
                            className: Object(Z.a)(
                              _a.a.DemoButton,
                              !r && _a.a.DisabledButton
                            )
                          },
                          Object(L.d)("#Sale_InstallDemo")
                        )
                      )
                    )
                  : j.createElement(se.a, null)
              );
            }),
            Object(k.c)([q.a], e.prototype, "OnInstallDemo", null),
            Object(k.c)([q.a], e.prototype, "ShowQuickPitch", null),
            Object(k.c)([q.a], e.prototype, "AddToWishlist", null),
            Object(k.c)([q.a], e.prototype, "OnOtherActionsMenuClick", null),
            Object(k.c)([q.a], e.prototype, "ShowMenu", null),
            Object(k.c)([q.a], e.prototype, "HideMenu", null),
            e
          );
        })(j.Component),
        Ta = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.eventGID;
              if (!e || !w.c.BHasClanEventModel(e)) return null;
              var t = w.c.GetClanEventModel(e),
                n = T.a.GetAppLinkInfo(t.appid);
              return j.createElement(
                "div",
                { className: _a.a.SaleSchedDetailCtn },
                j.createElement(wa, {
                  appCapsule: n,
                  promotionName: this.props.promotionName
                }),
                j.createElement(Da, { appCapsule: n }),
                j.createElement(ka, { appCapsule: n }),
                j.createElement(La, { event: t })
              );
            }),
            t
          );
        })(j.Component),
        wa = (function(t) {
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
                var t, n;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props.appCapsule.appid),
                        [
                          4,
                          da.Get().LoadAppIDsBatch([t], !1, this.m_cancelSignal)
                        ]
                      );
                    case 1:
                      return (
                        e.sent(),
                        (n = da.Get().GetDemoEventInfo(t)) &&
                          n.demo_appid &&
                          Object(sa.a)(n.demo_appid),
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
                var t, n;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props.appCapsule.appid),
                        (n = M.a.BIsGameWishlisted(t)),
                        [4, M.a.UpdateGameWishlist(t, !n)]
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
                t = e.appCapsule,
                n = (e.promotionName, da.Get().GetDemoEventInfo(t.appid)),
                a = !(!n || !n.demo_appid);
              return j.createElement(
                "div",
                { className: _a.a.SaleAppWideCtn },
                j.createElement(
                  Ae.a,
                  {
                    strURL: G.c.STORE_BASE_URL + "app/" + t.appid,
                    type: "app",
                    id: t.appid
                  },
                  j.createElement("img", {
                    className: _a.a.WideHeader,
                    src: t.capsule,
                    alt: t.title
                  })
                ),
                j.createElement(
                  "div",
                  { className: _a.a.WideDetailCtn },
                  j.createElement("div", { className: _a.a.AppTitle }, t.title),
                  j.createElement(
                    "div",
                    { className: _a.a.ReleaseDate },
                    t.release
                  )
                ),
                j.createElement(
                  "div",
                  { className: _a.a.GameButtons },
                  Boolean(M.a.BOwnsApp(t.appid))
                    ? j.createElement(
                        z.c,
                        { disabled: !0 },
                        Object(L.d)("#Sale_InLibrary")
                      )
                    : j.createElement(
                        z.c,
                        {
                          onClick: this.ToggleWishlist,
                          disabled: this.state.bUpdatingWishlist
                        },
                        Boolean(this.state.bUpdatingWishlist) &&
                          j.createElement(se.a, { size: "small" }),
                        Object(L.d)(
                          M.a.BIsGameWishlisted(t.appid)
                            ? "#Sale_Wishlisted"
                            : "#Sale_AddToWishlist"
                        )
                      ),
                  j.createElement(
                    W.a,
                    {
                      toolTipContent: Object(L.d)(
                        a
                          ? "#InstallDemo_ttip"
                          : "#Sale_CannotInstallDemo_ttip",
                        t.title
                      ),
                      className: Object(Z.a)(
                        _a.a.DemoButton,
                        !a && _a.a.DisabledButton
                      )
                    },
                    j.createElement(
                      z.c,
                      { disabled: !a, onClick: this.OnPlayApp },
                      Object(L.d)("#Sale_PlayDemo")
                    )
                  )
                )
              );
            }),
            Object(k.c)([q.a], e.prototype, "OnPlayApp", null),
            Object(k.c)([q.a], e.prototype, "ToggleWishlist", null),
            e
          );
        })(j.Component),
        Da = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.appCapsule;
              return j.createElement(
                "div",
                { className: _a.a.SaleTagAndOS },
                j.createElement(
                  "div",
                  { className: Ln.a.StoreSaleWidgetTags },
                  e.tags
                    ? e.tags.map(function(e) {
                        return j.createElement(
                          "div",
                          { key: "tag_" + e.tagid, className: Ln.a.AppTag },
                          e.name
                        );
                      })
                    : void 0
                ),
                j.createElement(Un.d, { item: e })
              );
            }),
            t
          );
        })(j.Component),
        ka = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.appCapsule;
              return j.createElement(
                j.Fragment,
                null,
                j.createElement(Aa, { appCapsule: e }),
                j.createElement(ja, { appCapsule: e })
              );
            }),
            t
          );
        })(j.Component),
        Aa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bLoadingDemoDetails: !da
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
                    bLoadingDemoDetails: !da
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
                              da
                                .Get()
                                .LoadAppIDsBatch([t], !0, this.m_cancelSignal),
                              la.a.Get().LoadShortDesc(t, this.m_cancelSignal)
                            ])
                          ])
                        : [3, 2];
                    case 1:
                      e.sent(),
                        da
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
            (e.prototype.ShowEventInModal = function(e, t) {
              Object(St.a)(e, Ge.m(t));
            }),
            (e.prototype.render = function() {
              var t = this;
              if (
                Boolean(
                  this.state.bLoadingDemoDetails ||
                    this.state.bLoadingDescription
                )
              )
                return j.createElement(se.a, null);
              var e = this.props.appCapsule.appid,
                n = da.Get().GetDemoEventInfo(e),
                a =
                  n && n.BHasArtistStatement()
                    ? w.c.GetClanEventModel(n.info_clan_event_gid)
                    : void 0,
                o = Object(ve.d)(G.c.LANGUAGE),
                r = la.a.Get().GetShortDesc(e);
              return j.createElement(
                "div",
                { className: _a.a.StatementCtn },
                Boolean(a)
                  ? j.createElement(
                      "div",
                      null,
                      j.createElement(An.a, {
                        text: a.GetDescriptionWithFallback(o),
                        partnerEventStore: w.c,
                        showErrorInfo: !1,
                        event: a
                      }),
                      j.createElement(
                        z.c,
                        {
                          onClick: function(e) {
                            return t.ShowEventInModal(a, e);
                          }
                        },
                        Object(L.d)("#EventEmail_Button_ClickForMoreDetails")
                      )
                    )
                  : j.createElement("div", null, r)
              );
            }),
            Object(k.c)([q.a], e.prototype, "DoLoading", null),
            Object(k.c)([q.a], e.prototype, "ShowEventInModal", null),
            e
          );
        })(j.Component),
        ja = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bTrailerLoaded: pa
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
                    bTrailerLoaded: pa
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
                            pa
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
              var e = pa.Get().GetTrailersForApp(this.props.appCapsule.appid),
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
              var n = this;
              if (!this.state.bTrailerLoaded)
                return j.createElement(
                  "div",
                  { className: _a.a.MediaContainer },
                  j.createElement(se.a, { size: "medium" })
                );
              var e = this.props.appCapsule,
                a = this.GetFirstHighlightTrailer();
              if (!(a || (e.screenshot_list && 0 !== e.screenshot_list.length)))
                return null;
              var t =
                  a ||
                  (void 0 !== this.state.nThumbnailedHovered &&
                    -1 !== this.state.nThumbnailedHovered)
                    ? this.state.nThumbnailedHovered
                    : 0,
                o = new Array();
              return (
                e.screenshot_list.forEach(function(e, t) {
                  (a || 0 < t) &&
                    o.length < 3 &&
                    ((e = e.replace("http://", "https://")),
                    o.push(
                      j.createElement("img", {
                        key: t + "_" + e,
                        className: _a.a.ScreenshotThumbnail,
                        src: e,
                        onMouseEnter: function() {
                          return n.OnThumbNailHovered(t);
                        }
                      })
                    ));
                }),
                j.createElement(
                  "div",
                  { className: _a.a.MediaContainer },
                  j.createElement(
                    "div",
                    { className: _a.a.MainMediaCtn },
                    Boolean(a) &&
                      j.createElement(
                        "div",
                        {
                          className: Object(Z.a)(
                            _a.a.VideoThumbnail,
                            this.state.bPlayVideo ? _a.a.videoPlaying : null
                          ),
                          onClick: this.TogglePlayTrailer
                        },
                        Boolean(-1 === t || void 0 === t)
                          ? j.createElement(
                              j.Fragment,
                              null,
                              j.createElement("img", { src: a.thumbnail }),
                              j.createElement(
                                "div",
                                { className: _a.a.VideoPlayButton },
                                j.createElement(U.t, null)
                              )
                            )
                          : j.createElement("img", {
                              src: e.screenshot_list[t]
                            })
                      ),
                    Boolean(!a) &&
                      j.createElement("img", { src: e.screenshot_list[t] })
                  ),
                  Boolean(0 < o.length) &&
                    j.createElement(
                      "div",
                      {
                        className: _a.a.Screenshot,
                        onMouseLeave: function() {
                          return n.OnThumbNailHovered(-1);
                        }
                      },
                      o
                    ),
                  j.createElement(
                    "div",
                    {
                      className: Object(Z.a)(
                        _a.a.VideoLargeContainer,
                        this.state.bPlayVideo ? _a.a.videoPlaying : null
                      ),
                      onClick: this.TogglePlayTrailer
                    },
                    this.state.bPlayVideo &&
                      j.createElement("video", {
                        className: _a.a.VideoLarge,
                        src: a.webm[480].replace("http://", "https://"),
                        controls: !0,
                        autoPlay: !0
                      }),
                    j.createElement(
                      "div",
                      { onClick: this.TogglePlayTrailer },
                      j.createElement(U.H, null)
                    )
                  )
                )
              );
            }),
            Object(k.c)([q.a], e.prototype, "DoTrailerLoad", null),
            Object(k.c)([q.a], e.prototype, "TogglePlayTrailer", null),
            Object(k.c)([q.a], e.prototype, "OnThumbNailHovered", null),
            e
          );
        })(j.Component),
        La = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.ShowEventInModel = function(e, t) {
              Object(St.a)(e, Ge.m(t));
            }),
            (e.prototype.render = function() {
              var t = this,
                n = this.props.event,
                e = n.BIsEventInFuture(),
                a = Object(ve.d)(G.c.LANGUAGE);
              return j.createElement(
                "div",
                { className: _a.a.EventWideCtn },
                j.createElement(
                  "div",
                  { className: _a.a.Title },
                  Object(L.d)("#Sale_EventSchedule")
                ),
                j.createElement("hr", null),
                j.createElement(
                  "div",
                  { className: _a.a.EventWideDetailCtn },
                  j.createElement(
                    "div",
                    { className: _a.a.EventDetails },
                    j.createElement(
                      "div",
                      { className: _a.a.EventIcon },
                      j.createElement("img", {
                        className: _a.a.CategoryTypeImage,
                        width: "40",
                        height: "40",
                        src:
                          G.c.IMG_URL +
                          "events/types/type_" +
                          (11 == n.type ? "11" : "9") +
                          ".png"
                      })
                    ),
                    j.createElement(
                      "div",
                      null,
                      j.createElement(
                        "div",
                        { className: _a.a.EventTitle },
                        n.GetNameWithFallback(a)
                      ),
                      j.createElement(
                        "div",
                        { className: _a.a.EventTime },
                        e
                          ? Object(L.j)(n.startTime) +
                              " " +
                              Object(L.m)(n.startTime)
                          : Object(L.n)(Date.now() / 1e3 - n.startTime)
                      )
                    )
                  ),
                  j.createElement(
                    "div",
                    { className: _a.a.EventOptionsCtn },
                    j.createElement(
                      z.c,
                      {
                        onClick: function(e) {
                          return t.ShowEventInModel(n, e);
                        }
                      },
                      Object(L.d)("#Sale_SeeEventDetails")
                    ),
                    e &&
                      j.createElement(de.a, {
                        eventModel: n,
                        eventGID: n.GID,
                        lang: a
                      })
                  )
                )
              );
            }),
            Object(k.c)([q.a], e.prototype, "ShowEventInModel", null),
            e
          );
        })(j.Component),
        Ga = n("oVVc"),
        Ma = n("l2mU"),
        Na = n("31dG"),
        Ba = n.n(Na);
      function xa(e, t) {
        for (var n = [], a = 0, o = e.capsules; a < o.length; a++) {
          var r = o[a];
          if ("sub" === r.type) {
            var i = Ga.b.GetPackageInfo(r.id);
            if (i) {
              if ((console.log(JSON.stringify(i)), i.renewal_time_amount === t))
                return i.packageid;
            } else n.push(r.id);
          }
        }
        0 < n.length && Ga.b.LoadPackageInfo(n);
      }
      var Ra = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.OnClickPurchase = function(e) {
              M.a.AddToCart(
                e,
                this.props.sub_package_id,
                G.c.STORE_BASE_URL + "cart/addtocart",
                G.c.STORE_BASE_URL + "cart"
              );
            }),
            (t.prototype.render = function() {
              var e = Ga.b.GetPackageInfo(this.props.sub_package_id),
                t = Ga.b.GetPackageInfo(this.props.compare_package_id);
              if (!e || (!t && this.props.compare_package_id))
                return (
                  Ga.b.LoadPackageInfo([
                    this.props.sub_package_id,
                    this.props.compare_package_id
                  ]),
                  null
                );
              if (!e.formatted_final_price) return null;
              var n = e.formatted_final_price,
                a = Object(Ma.a)(e, t),
                o = [n, a || ""],
                r = L.d.apply(
                  void 0,
                  Object(k.g)([this.props.price_loc_token], o)
                ),
                i = L.d.apply(
                  void 0,
                  Object(k.g)([this.props.body_loc_token], o)
                ),
                s = L.d.apply(
                  void 0,
                  Object(k.g)(["#Sale_Subscription_Save"], o)
                ),
                l = j.createElement("div", { className: Ba.a.LogoImg }),
                c = (function(e) {
                  for (var t = 0, n = e.appids; t < n.length; t++) {
                    var a = n[t];
                    if (M.a.BOwnsApp(a)) return !0;
                  }
                  return !1;
                })(e),
                d = null;
              return (
                (d = M.a.BOwnsPackage(this.props.sub_package_id)
                  ? j.createElement(
                      "div",
                      {
                        className: Object(Z.a)(
                          Ba.a.PurchaseButton,
                          Ba.a.AlreadyOwnedPackage
                        )
                      },
                      Object(L.d)("#Sale_Subscription_AlreadyOwnedPackage")
                    )
                  : c
                  ? j.createElement(
                      "div",
                      {
                        className: Object(Z.a)(
                          Ba.a.PurchaseButton,
                          Ba.a.AlreadyOwnedApp
                        )
                      },
                      Object(L.d)("#Sale_Subscription_AlreadyOwnedApp")
                    )
                  : j.createElement(
                      "div",
                      {
                        className: Object(Z.a)(
                          Ba.a.PurchaseButton,
                          Ba.a.UnOwned
                        ),
                        onClick: this.OnClickPurchase
                      },
                      this.props.button_text
                    )),
                j.createElement(
                  "div",
                  { className: Ba.a.SubscriptionBlock },
                  l,
                  j.createElement(
                    "div",
                    { className: Ba.a.PriceBlock },
                    j.createElement(
                      "span",
                      { className: Ba.a.PriceDisplay },
                      r
                    ),
                    Boolean(a) &&
                      j.createElement(
                        "span",
                        { className: Ba.a.SavingsDisplay },
                        s
                      )
                  ),
                  j.createElement("div", { className: Ba.a.BodyTextBlock }, i),
                  d
                )
              );
            }),
            Object(k.c)([q.a], t.prototype, "OnClickPurchase", null),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Pa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.render = function() {
              var e = xa(this.props.section, 12),
                t = xa(this.props.section, 3),
                n = xa(this.props.section, 1);
              return j.createElement(
                "div",
                { className: Ba.a.MainBlock },
                j.createElement(
                  "span",
                  { className: Ba.a.SelectAPlan },
                  Object(L.d)("#Sale_Subscription_SelectPlan")
                ),
                j.createElement(
                  "div",
                  { className: Ba.a.SubscriptionListBlock },
                  j.createElement(Ra, {
                    sub_package_id: e,
                    compare_package_id: n,
                    price_loc_token: "#Sale_Subscription_Annual_Price",
                    body_loc_token: "#Sale_Subscription_Annual_Body",
                    button_text: Object(L.d)("#Sale_Subscription_Annual_Button")
                  }),
                  j.createElement(Ra, {
                    sub_package_id: t,
                    price_loc_token: "#Sale_Subscription_Quarterly_Price",
                    body_loc_token: "#Sale_Subscription_Quarterly_Body",
                    button_text: Object(L.d)(
                      "#Sale_Subscription_Quarterly_Button"
                    )
                  }),
                  j.createElement(Ra, {
                    sub_package_id: n,
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
        Fa = n("R+8l");
      function Ha(e, t, n) {
        return {
          color: e,
          background:
            "linear-gradient(0deg, " +
            (n || "transparent") +
            " 0%, " +
            (t || "transparent") +
            " 100%)"
        };
      }
      var za = function(e) {
          var t = e.tab,
            n = e.language,
            a = e.onTabSelected,
            o = e.classNames,
            r = e.section,
            i = e.selected,
            s = (function(e, t) {
              return (
                (e.localized_label &&
                  (e.localized_label[t] || e.localized_label[0])) ||
                ("#Sale_default_label" === e.default_label
                  ? ""
                  : Object(L.d)(e.default_label))
              );
            })(t, n);
          if (!s) return null;
          var l = (function(e, t) {
            return e
              ? Ha(
                  t.tab_active_label_color,
                  t.tab_active_background_gradient_top,
                  t.tab_active_background_gradient_bottom
                )
              : Ha(
                  t.tab_inactive_label_color,
                  t.tab_inactive_background_gradient_top,
                  t.tab_inactive_background_gradient_bottom
                );
          })(i, r);
          return j.createElement(
            "div",
            {
              className: Object(Z.a)(ia.a.SaleTab, o),
              onClick: function() {
                return a(t);
              },
              style: l
            },
            j.createElement(
              "div",
              { className: Object(Z.a)(ia.a.SaleTabLabel) },
              s
            )
          );
        },
        Ua = (function(e) {
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
                  { className: ia.a.TabContentsElement },
                  Object(L.d)("#SalePage_Tabs_AllContents")
                );
              for (
                var t = new Array(), n = 0, a = e.capsules;
                n < a.length;
                n++
              ) {
                var o = a[n],
                  r = null;
                r =
                  "bundle" === o.type
                    ? Fa.a.GetBundleInfo(o.id)
                    : "sub" === o.type
                    ? Ga.b.GetPackageInfo(o.id)
                    : qe.a.GetAppInfo(o.id);
                var i = Object(L.d)("#AppType_" + o.type) + " " + o.id,
                  s = r && r.name ? r.name : i,
                  l =
                    void 0 === o.visibility_index
                      ? s
                      : Object(L.d)("#Sale_TabDayIndex", o.visibility_index),
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
                      { key: e.sKey, className: ia.a.TabContentsElement },
                      e.sDisplay
                    );
                  })
                )
              );
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.section,
                n = e.event;
              return j.createElement(
                "div",
                { className: Object(Z.a)(ia.a.SaleSection), style: co(t, n) },
                j.createElement($a, Object(k.a)({}, this.props)),
                j.createElement(
                  "div",
                  { className: ia.a.TabContentsContainer },
                  this.RenderTabCapsules()
                )
              );
            }),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Wa = (function(t) {
          function n() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bScreenIsWide: n.IsWideScreen(),
                nMaxTabsPerRow: n.GetMaxTabsPerRow()
              }),
              e
            );
          }
          return (
            Object(k.d)(n, t),
            (n.IsWideScreen = function() {
              return 940 <= window.innerWidth;
            }),
            (n.GetMaxTabsPerRow = function() {
              return Math.max(Math.floor(window.innerWidth / 160), 2);
            }),
            (n.prototype.componentDidMount = function() {
              window.addEventListener("resize", this.OnResize);
            }),
            (n.prototype.componentWillUnmount = function() {
              window.removeEventListener("resize", this.OnResize);
            }),
            (n.prototype.OnResize = function() {
              this.setState({
                bScreenIsWide: n.IsWideScreen(),
                nMaxTabsPerRow: n.GetMaxTabsPerRow()
              });
            }),
            (n.prototype.render = function() {
              var n = this,
                e = this.props,
                a = e.section,
                t = e.event,
                o = e.language,
                r = e.activeTab;
              if (a.tabs.length < 2) return null;
              var i = Object(Z.a)(ia.a.SaleSectionTabsTab),
                s = a.tabs.map(function(e) {
                  var t = "Tab_" + e.unique_id;
                  return j.createElement(za, {
                    key: t,
                    section: a,
                    selected: e === r,
                    tab: e,
                    language: o,
                    classNames: Object(Z.a)(
                      i,
                      e === r && ia.a.SaleSectionTabsSelected
                    ),
                    onTabSelected: function(e) {
                      return n.props.onTabSelected(a, e);
                    }
                  });
                });
              return j.createElement(
                "div",
                {
                  className: Object(Z.a)(
                    ia.a.SaleSection,
                    ia.a.SaleSectionTabs
                  ),
                  style: co(a, t)
                },
                j.createElement($a, Object(k.a)({}, this.props)),
                j.createElement(
                  Va,
                  { className: ia.a.SaleSectionTabContainer },
                  j.createElement(
                    "div",
                    {
                      className: Object(Z.a)(
                        Ot.a.SaleSectionContainer,
                        ia.a.SaleSectionTabsRow
                      )
                    },
                    s
                  )
                )
              );
            }),
            Object(k.c)([q.a], n.prototype, "OnResize", null),
            n
          );
        })(j.Component),
        Va = (function(t) {
          function i() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bInScroll: !1, nStartXPos: 0, nStartScrollLeft: 0 }),
              (e.m_hSlider = j.createRef()),
              e
            );
          }
          return (
            Object(k.d)(i, t),
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
                    ia.a.HorizontalScrollInDragForceCursor
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
                var n =
                    (e.pageX - t.offsetLeft - this.state.nStartXPos) *
                    (this.props.scrollMultiplier ||
                      i.knDefaultScrollMultiplier),
                  a = this.state.nStartScrollLeft - n,
                  o = Math.abs(a - this.state.nStartScrollLeft),
                  r = this.props.minDragPixels || i.knDefaultMinDragPixels;
                !this.state.bInScroll &&
                  r <= o &&
                  ((t.scrollLeft = a),
                  this.setState({ bInScroll: !0 }),
                  document.body.classList.add(
                    ia.a.HorizontalScrollInDragForceCursor
                  ),
                  this.props.dragClassName &&
                    t.classList.add(this.props.dragClassName),
                  t.setPointerCapture(e.pointerId)),
                  this.state.bInScroll && (t.scrollLeft = a);
              }
            }),
            (i.prototype.render = function() {
              return j.createElement(
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
            Object(k.c)([q.a], i.prototype, "OnPointerDown", null),
            Object(k.c)([q.a], i.prototype, "OnPointerUp", null),
            Object(k.c)([q.a], i.prototype, "OnPointerMove", null),
            i
          );
        })(j.Component),
        Za = j.lazy(function() {
          return Promise.all([n.e(0), n.e(1), n.e(6)]).then(
            n.bind(null, "NIbt")
          );
        });
      var Ya = (function(t) {
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
                var t, n, a, o;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = G.b.CLANSTEAMID),
                        (n = G.b.ANNOUNCEMENT_GID),
                        this.props.eventModel
                          ? [3, 2]
                          : [
                              4,
                              w.c.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                                new O.a(t),
                                n,
                                null
                              )
                            ]
                      );
                    case 1:
                      (a = e.sent()),
                        (o = a.GetDayIndexFromEventStart()),
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
                  : w.c.GetClanEventFromAnnouncementGID(G.b.ANNOUNCEMENT_GID);
                t && (t.m_overrideCurrentDay = e),
                  this.setState({ nSaleDayIndex: e });
              }
            }),
            (e.prototype.render = function() {
              var e =
                this.props.eventModel ||
                w.c.GetClanEventFromAnnouncementGID(G.b.ANNOUNCEMENT_GID);
              if (e && void 0 !== this.state.nSaleDayIndex) {
                var t = this.props.bIsPreview,
                  n = e.GetImageURLWithFallback(
                    "sale_header",
                    this.props.language
                  ),
                  a = null,
                  o = null;
                Yt.BHasSalePageBackgroundOverride() &&
                  ((n = Yt.GetSalePageBackgroundOverride()),
                  (a = Yt.GetSalePageBackgroundWEBM()),
                  (o = Yt.GetSalePageBackgroundMP4()));
                var r =
                    e.BHasBroadcastEnabled() &&
                    ("1688220857098505775" == e.GID ||
                      "1590261853006818581" == e.GID),
                  i = A.a.Get().GetPartnerEventPermissions(e.clanSteamID);
                return j.createElement(
                  F.a,
                  null,
                  j.createElement(
                    qa,
                    {
                      className:
                        ia.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                      backgroundImage: n,
                      backgroundColor: t
                        ? e.jsondata.sale_background_color
                        : void 0
                    },
                    Boolean(o || a) &&
                      j.createElement(
                        "div",
                        { className: ia.a.fullscreen_bg },
                        j.createElement(
                          "video",
                          {
                            key: Yt.GetLastDoorOpen(),
                            loop: !0,
                            muted: !0,
                            autoPlay: !0,
                            ref: function(e) {
                              e && (e.playbackRate = 0.9);
                            },
                            className: Object(Z.a)(
                              ia.a.SaleBackground,
                              ia.a["CustomStyle_" + e.jsondata.sale_vanity_id],
                              "SaleBackground",
                              ia.a.fullscreen_bg__video
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
                            src: a,
                            type: "video/webm"
                          }),
                          !G.c.IN_CLIENT &&
                            j.createElement("source", {
                              src: o,
                              type: "video/mp4"
                            })
                        )
                      ),
                    j.createElement(
                      "div",
                      { className: ia.a.SaleHeaderContainer },
                      e.jsondata.sale_header_overlay &&
                        j.createElement(Ja, null),
                      e.GetImageURL("sale_overlay", this.props.language) &&
                        j.createElement(
                          "div",
                          {
                            className: Object(Z.a)(
                              ia.a.SaleOverlayCtn,
                              "SaleOverlayCtn"
                            )
                          },
                          j.createElement("img", {
                            className: Object(Z.a)(
                              ia.a.SaleOverlay,
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
                                fontFamily: po(
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
                                fontFamily: po(
                                  e.jsondata.sale_font,
                                  this.props.language
                                ),
                                fontWeight: e.jsondata.sale_font_weight
                              }
                            },
                            j.createElement(An.a, {
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
                    j.createElement(
                      "div",
                      {
                        className:
                          ia.a.SaleOuterContainer +
                          " " +
                          ia.a["CustomStyle_" + e.jsondata.sale_vanity_id] +
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
                          F.a,
                          null,
                          j.createElement(
                            "div",
                            { className: ia.a.SaleBroadcastCtn },
                            j.createElement(
                              j.Suspense,
                              { fallback: j.createElement("div", null) },
                              j.createElement(Za, {
                                promotionName: this.props.promotionName,
                                clanid: Number(G.b.CLANACCOUNTID),
                                event: e,
                                bIsPreview: this.props.bIsPreview,
                                language: this.props.language,
                                fnRenderBroadcastContext: r
                                  ? function() {
                                      return j.createElement(mo, null);
                                    }
                                  : null
                              })
                            )
                          )
                        ),
                      e.jsondata.sale_show_creator &&
                        j.createElement(
                          F.a,
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
                            j.createElement(wn, {
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
                      j.createElement(Ka, {
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
                          j.createElement(io, {
                            text: Object(L.d)("#Sale_SeeAllSpecials"),
                            url: e.jsondata.sale_browsemore_url,
                            color: e.jsondata.sale_browsemore_color,
                            bgcolor: e.jsondata.sale_browsemore_bgcolor
                          })
                        ),
                      i.can_edit &&
                        j.createElement(pn, {
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
                { className: Ye.a.FlexCenter, style: { height: "500px" } },
                j.createElement(se.a, {
                  size: "medium",
                  string: Object(L.d)("#Loading")
                })
              );
            }),
            Object(k.c)([q.a], e.prototype, "OnChangeDayIndex", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(j.Component),
        qa = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_refBackgroundPanel = j.createRef()), e;
          }
          return (
            Object(k.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this;
              if (this.props.backgroundImage) {
                var n = new Image();
                (n.onload = function() {
                  var e = (100 * n.width) / 950 + "%";
                  t.m_refBackgroundPanel.current &&
                    t.m_refBackgroundPanel.current.style.setProperty(
                      "--background-scale",
                      e
                    );
                }),
                  (n.src = this.props.backgroundImage);
              }
            }),
            (e.prototype.render = function() {
              var e = this.props.backgroundImage
                ? "url(" + this.props.backgroundImage + ")"
                : null;
              return j.createElement(
                "div",
                {
                  className: Object(Z.a)(
                    this.props.className,
                    ia.a.SaleBackground,
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
        Ja = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.componentDidMount = function() {
              n("+ZmX").Init();
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
        Qa = (function() {
          function a(e, t) {
            var n = this;
            (this.m_activeTab = null),
              (this.m_capsuleFilter = null),
              e &&
                ((this.m_activeTab = e),
                (this.m_capsuleFilter = new Set()),
                ro(e.capsules, t).forEach(function(e) {
                  n.m_capsuleFilter.add(a.GetSetName(e.type, e.id));
                }));
          }
          return (
            (a.GetSetName = function(e, t) {
              return (e || "") + t;
            }),
            (a.prototype.ShouldShowSection = function(e) {
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
            (a.prototype.GetTab = function() {
              return this.m_activeTab;
            }),
            (a.prototype.ShouldShowOnTab = function(e, t) {
              return (
                !this.m_capsuleFilter ||
                this.m_capsuleFilter.has(a.GetSetName(e, t))
              );
            }),
            (a.prototype.ShouldShowCapsule = function(e) {
              return this.ShouldShowOnTab(e.type, e.id);
            }),
            (a.prototype.ShouldShowEvent = function(e) {
              return this.ShouldShowOnTab("game", e.appid);
            }),
            a
          );
        })(),
        Xa = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(k.d)(t, e),
            (t.prototype.GetTabSelectionsFromURL = function() {
              var o = this,
                r = new Map();
              return (
                this.props.event.GetSaleSections().forEach(function(e) {
                  if (
                    "tabs" === e.section_type &&
                    e.tabs &&
                    0 < e.tabs.length
                  ) {
                    var t = s.a.parse(
                        o.props.history.location.search.substring(1)
                      ),
                      n = Number(t.tab) || 0,
                      a = n < e.tabs.length ? n : 0;
                    r.set(e, new Qa(e.tabs[a], o.props.nSaleDayIndex));
                  }
                }),
                r
              );
            }),
            (t.prototype.OnTabSelected = function(e, t) {
              var n = e.tabs.indexOf(t),
                a = s.a.parse(this.props.history.location.search.substring(1)),
                o = Object.assign(a, { tab: 0 <= n ? n : void 0 });
              this.props.history.push("?" + s.a.stringify(o));
            }),
            (t.prototype.render = function() {
              var r = this,
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
                    activeTab: new Qa(null, this.props.nSaleDayIndex)
                  }
                ];
              i.GetSaleSections().forEach(function(e, t) {
                var n = m[m.length - 1].activeTab;
                if (n.ShouldShowSection(e)) {
                  var a = null;
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
                    !G.i.logged_in
                  )
                    p ||
                      ((a = j.createElement(eo, {
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
                        a = j.createElement(
                          ao,
                          Object(k.a)({ section: e, activeTab: n }, r.props)
                        );
                        break;
                      case "broadcast":
                        i.BHasBroadcastEnabled() &&
                          !u &&
                          ((a = j.createElement(uo, {
                            promotionName: l,
                            eventModel: i,
                            bIsPreview: c,
                            language: s,
                            activeTab: n
                          })),
                          (u = !0));
                        break;
                      case "event_description":
                        a = j.createElement(
                          to,
                          Object(k.a)({ section: e }, r.props)
                        );
                        break;
                      case "doors":
                        a = j.createElement($n, {
                          strFontFamily: po(i.jsondata.sale_font, s)
                        });
                        break;
                      case "text_section":
                        a = j.createElement(
                          no,
                          Object(k.a)({ section: e }, r.props)
                        );
                        break;
                      case "tabs":
                        var o = d.get(e);
                        m.push({ activeTab: o, elements: [] }),
                          (a = j.createElement(
                            Wa,
                            Object(k.a)({ section: e }, r.props, {
                              activeTab: o.GetTab(),
                              onTabSelected: r.OnTabSelected
                            })
                          ));
                        break;
                      case "vo_internal":
                        if (e.internal_section_data)
                          switch (e.internal_section_data.internal_type) {
                            case "subscription_pricing":
                              a = j.createElement(
                                Pa,
                                Object(k.a)({ section: e }, r.props)
                              );
                              break;
                            case "event_schedule":
                              a = j.createElement(
                                ga,
                                Object(k.a)({ section: e }, r.props, {
                                  activeTab: n
                                })
                              );
                              break;
                            case "tab_contents":
                              a = j.createElement(
                                Ua,
                                Object(k.a)({ section: e }, r.props, {
                                  tab: n.GetTab()
                                })
                              );
                          }
                    }
                  m[m.length - 1].elements.push(
                    j.createElement(
                      F.a,
                      { key: "SaleSectionIndex_" + e.unique_id + "_" + t },
                      a
                    )
                  );
                }
              });
              var t = m.map(function(e, t) {
                return j.createElement(
                  "div",
                  {
                    key: "TabSection_" + t,
                    className: ia.a.SaleSectionTabListContainer
                  },
                  e.elements
                );
              });
              return j.createElement(
                "div",
                { className: ia.a.SaleSectionListContainer },
                t
              );
            }),
            Object(k.c)([q.a], t.prototype, "OnTabSelected", null),
            (t = Object(k.c)([r.observer], t))
          );
        })(j.Component),
        Ka = Object(c.g)(Xa);
      var $a = function(e) {
          var t = e.section,
            n = e.event,
            a = e.language;
          if (!lo(t, a, n.clanSteamID.GetAccountID())) return null;
          var o = j.createElement(
            "div",
            {
              className: Ot.a.SaleSectionHeader,
              style: (function(e, t, n) {
                return {
                  fontFamily: po(t.jsondata.sale_font, n),
                  fontWeight: t.jsondata.sale_font_weight,
                  fontSize: t.jsondata.sale_section_font_size,
                  textTransform: t.jsondata.sale_section_disable_capitalize
                    ? "initial"
                    : null,
                  color: e.label_color,
                  textAlign: t.GetSaleLabelAlign()
                };
              })(t, n, a)
            },
            lo(t, a, n.clanSteamID.GetAccountID())
          );
          return (
            t.label_link &&
              (o = j.createElement(
                "a",
                {
                  href:
                    (G.c.IN_CLIENT ? "steam://openurl/" : "") +
                    so(t.label_link),
                  target: G.c.IN_CLIENT ? void 0 : "_blank"
                },
                o
              )),
            o
          );
        },
        eo = function(e) {
          var t = e.section,
            n = e.event;
          e.language;
          return j.createElement(
            "div",
            { className: ia.a.SaleSection, style: co(t, n) },
            j.createElement($a, Object(k.a)({}, e)),
            j.createElement(
              "div",
              { className: ia.a.SaleSectionLoginPrompt },
              Object(L.d)("#SalePage_LoginPrompt"),
              j.createElement(
                "button",
                { onClick: Xe.a, className: ia.a.LoginButton },
                Object(L.d)("#Login_SignIn")
              )
            )
          );
        },
        to = function(e) {
          var t = e.section,
            n = e.event,
            a = e.language,
            o = e.bIsPreview;
          return j.createElement(
            "div",
            {
              className: Object(Z.a)(ia.a.SaleSection, mn.a.SaleSectionCtn),
              style: co(t, n)
            },
            j.createElement($a, Object(k.a)({}, e)),
            j.createElement(
              "div",
              { className: Ot.a.SaleSectionContainer },
              j.createElement(An.a, {
                text: n.GetDescriptionWithFallback(a),
                partnerEventStore: w.c,
                showErrorInfo: o,
                event: n
              })
            )
          );
        },
        no = function(e) {
          var t = e.section,
            n = e.event,
            a = e.language,
            o = e.bIsPreview,
            r = "";
          return (
            t.text_section_contents &&
              (r =
                t.text_section_contents[a] || t.text_section_contents[0] || ""),
            j.createElement(
              "div",
              {
                className: Object(Z.a)(ia.a.SaleSection, mn.a.SaleSectionCtn),
                style: co(t, n)
              },
              j.createElement($a, Object(k.a)({}, e)),
              j.createElement(
                "div",
                { className: Ot.a.SaleSectionContainer },
                j.createElement(An.a, {
                  text: r,
                  partnerEventStore: w.c,
                  showErrorInfo: o,
                  event: n
                })
              )
            )
          );
        },
        ao = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bInitialLoadComplete: !1,
                bShowContents: !1,
                bIsCapsuleArrayTruncated: !1,
                nHiddenCapsules: 0,
                capsules: [],
                bScreenIsWide: n.IsWideScreen(),
                nMaxCapsulesPerRow: n.GetMaxCapsulesPerRow()
              }),
              e
            );
          }
          var n;
          return (
            Object(k.d)(e, t),
            ((n = e).prototype.componentDidMount = function() {
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
              return n.IsWideScreen()
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
                n = e.event;
              if (t.use_random_order && !t.smart_section) {
                var a =
                  "section_" +
                  Object(J.a)(
                    t.unique_id ? t.unique_id.toString() : JSON.stringify(t)
                  ).toString();
                if (window.sessionStorage) {
                  var o = window.sessionStorage.getItem(a);
                  if (o) {
                    var r = JSON.parse(o);
                    if (r.rtime32_last_modified == n.rtime32_last_modified)
                      return r;
                  }
                  Object(ge.f)(t.capsules),
                    Object(ge.f)(t.links),
                    Object(ge.f)(t.events),
                    (t.rtime32_last_modified = n.rtime32_last_modified),
                    window.sessionStorage.setItem(a, JSON.stringify(t));
                }
              }
              return t;
            }),
            (e.prototype.LoadCapsules = function(C) {
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  n,
                  a,
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
                        (n = this.props),
                        (a = n.event),
                        (o = n.promotionName),
                        (r = n.bIsPreview),
                        (i = n.activeTab),
                        (s = n.nSaleDayIndex),
                        "items" !== t.section_type ||
                        "sale_tabhub" == t.smart_section_type
                          ? [3, 10]
                          : [4, M.a.HintLoad()]
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
                            })(a.GetSaleSections())),
                            [
                              4,
                              (function(u, m, h, v) {
                                return Object(k.b)(
                                  this,
                                  void 0,
                                  void 0,
                                  function() {
                                    var t, n, a, o, r, i, s, l, c, d, p;
                                    return Object(k.e)(this, function(e) {
                                      switch (e.label) {
                                        case 0:
                                          return (
                                            (t = m.smart_section_type),
                                            (n = m.smart_section_max_apps),
                                            (a = m.smart_section_tag),
                                            (o = m.smart_section_category),
                                            (r = m.random_from_entire_set),
                                            (i = n || 24),
                                            "tag" !== t
                                              ? [3, 2]
                                              : [
                                                  4,
                                                  Vt.GetDiscounts({
                                                    tagid: a,
                                                    max_results: i,
                                                    feature: h,
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
                                                Vt.GetDiscounts({
                                                  categoryid: o,
                                                  max_results: i,
                                                  feature: h,
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
                                            : [4, Vt.GetTopN(h, i)];
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
                                                (s = v.filter(function(e) {
                                                  return (
                                                    !M.a.BOwnsApp(e) &&
                                                    (("wishlist" === t &&
                                                      M.a.BIsGameWishlisted(
                                                        e
                                                      )) ||
                                                      ("interactive_recommender" ===
                                                        t &&
                                                        M.a.BIsGameRecommended(
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
                                            return [3, 25];
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
                                              return [3, 22];
                                          }
                                          return [3, 24];
                                        case 9:
                                          return Jt.GetHideWishlist()
                                            ? [3, 11]
                                            : [4, Vt.GetWishlistOnSale()];
                                        case 10:
                                          (s = e.sent()),
                                            (l = "game"),
                                            (e.label = 11);
                                        case 11:
                                          return [3, 24];
                                        case 12:
                                          return (
                                            (l = "dlc"),
                                            Jt.GetHideDLC()
                                              ? [3, 14]
                                              : [
                                                  4,
                                                  Vt.GetDLCForGamesInMyLibraryOnSale()
                                                ]
                                          );
                                        case 13:
                                          (s = e.sent()), (e.label = 14);
                                        case 14:
                                          return [3, 24];
                                        case 15:
                                          return (
                                            (l = "music"),
                                            [
                                              4,
                                              Vt.GetSoundtracksForGamesInMyLibraryOnSale()
                                            ]
                                          );
                                        case 16:
                                          return (s = e.sent()), [3, 24];
                                        case 17:
                                          return (
                                            (l = "game"),
                                            Jt.GetHideIRList()
                                              ? [3, 19]
                                              : [
                                                  4,
                                                  Vt.GetInteractiveRecommendationsOnSale()
                                                ]
                                          );
                                        case 18:
                                          (s = e.sent()), (e.label = 19);
                                        case 19:
                                          return [3, 24];
                                        case 20:
                                          return (
                                            (l = "game"),
                                            [
                                              4,
                                              Vt.GetTagRecommendorForThisSale(
                                                u,
                                                i
                                              )
                                            ]
                                          );
                                        case 21:
                                          return (s = e.sent()), [3, 24];
                                        case 22:
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
                                        case 23:
                                          return (
                                            e.sent(),
                                            (p = d.GetAllAppForMaster(c)),
                                            (s = Array.from(p).filter(function(
                                              e
                                            ) {
                                              return M.a.BIsGameRecommended(e);
                                            })),
                                            [3, 24]
                                          );
                                        case 24:
                                          return [
                                            2,
                                            s.map(function(e) {
                                              return { id: e, type: l };
                                            })
                                          ];
                                        case 25:
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
                                a,
                                t,
                                (function(e) {
                                  return (
                                    (G.c.IN_CLIENT
                                      ? "library-"
                                      : Object(G.e)() + "-") + e
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
                        (l = ro(
                          (l = l.filter(function(e) {
                            return i.ShouldShowCapsule(e);
                          })),
                          s
                        )),
                        (d = !1),
                        "initial_load" != C ||
                          !t.cap_section_content ||
                          t.smart_section ||
                          t.use_random_order ||
                          t.show_as_carousel ||
                          r ||
                          "store" !== Object(G.e)() ||
                          ((p = (Object(_t.o)(t) + 1) * t.capsules_per_row),
                          l.length > p + 2 * t.capsules_per_row &&
                            ((l = l.slice(0, p)), (d = !0))),
                        [4, Object(D.e)(l)]
                      );
                    case 5:
                      return (
                        e.sent(), (u = oo(t)) ? [4, Object(D.d)(l)] : [3, 8]
                      );
                    case 6:
                      return (
                        (m = e.sent()),
                        0 <
                        (h = m
                          .map(function(e) {
                            var t = T.a.GetAppLinkInfo(e);
                            return t && t.full_game_appid;
                          })
                          .filter(function(e) {
                            return !!e;
                          })).length
                          ? [4, T.a.LoadAppLinkInfo(h)]
                          : [3, 8]
                      );
                    case 7:
                      e.sent(), (e.label = 8);
                    case 8:
                      return [4, Object(D.a)(l, u)];
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
                            ? [4, qt.GetRecentEventsForSalesPage(a)]
                            : [3, 13]);
                    case 11:
                      return (
                        (g = e.sent()),
                        (y = g.map(function(e) {
                          var t = new O.a(e.clan_steamid);
                          return w.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
                        w.c.LoadBatchPartnerEventsByAnnouncementGID(
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
                          return !!e && i.ShouldShowEvent(e);
                        })),
                        T.a.LoadAppLinkInfo(
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
                            : [4, Vt.GetSaleTags()]);
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
                bScreenIsWide: n.IsWideScreen(),
                nMaxCapsulesPerRow: n.GetMaxCapsulesPerRow()
              });
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.event,
                n = e.bIsPreview,
                a = e.language,
                o = e.activeTab,
                r = this.state,
                i = r.bInitialLoadComplete,
                s = r.bShowContents,
                l = r.bIsCapsuleArrayTruncated,
                c = r.nHiddenCapsules,
                d = r.capsules,
                p = r.links,
                u = r.events,
                m = r.bScreenIsWide,
                h = r.nMaxCapsulesPerRow;
              if (!i) return null;
              var v = this.GetSectionForSession(),
                _ = (function(e) {
                  var t = e.event,
                    o = e.section,
                    r = e.capsules,
                    n = e.links,
                    a = e.events,
                    i = e.language,
                    s = e.bShowParentApp,
                    l = (e.activeTab, t.clanSteamID.GetAccountID()),
                    c = t.BIsLockedToAppOwners();
                  {
                    if (Boolean("events" === o.section_type))
                      return a
                        ? a.map(function(t) {
                            return j.createElement(
                              "div",
                              {
                                key: o.unique_id + "_" + t.GID,
                                style: {},
                                className: vn.a.OtherEvents
                              },
                              j.createElement(Mn, {
                                event: t,
                                openNewWindow: !0,
                                appInfo: T.a.GetAppLinkInfo(t.appid),
                                onClick: function(e) {
                                  Object(St.a)(t, Ge.m(e)),
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
                            return j.createElement(Un.b, {
                              key: o.unique_id + "_" + t,
                              link: e,
                              language: i,
                              clanAccountID: l,
                              strClassName: ia.a.LinkCapsule
                            });
                          })
                        : [];
                    if (Boolean("items" === o.section_type))
                      return r
                        ? r.map(function(e, t) {
                            var n = 1 < Math.min(o.capsules_per_row, r.length),
                              a =
                                o.unique_id +
                                "_" +
                                t +
                                "_" +
                                e.type +
                                "_" +
                                e.id;
                            return n
                              ? j.createElement(Un.e, {
                                  key: a,
                                  capsule: e,
                                  bShowParentApp: s,
                                  bUseSubscriptionLayout: c
                                })
                              : j.createElement(
                                  "div",
                                  {
                                    key: a,
                                    className: ia.a.AppSummaryWidgetCtn
                                  },
                                  j.createElement(Un.f, {
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
                  section: v,
                  capsules: d,
                  links: p,
                  events: u,
                  language: a,
                  bShowParentApp: oo(v),
                  activeTab: o
                }).filter(function(e) {
                  return !!e;
                }),
                b = null;
              if (0 < _.length) {
                var g = Math.min(v.capsules_per_row, h, _.length);
                if (v.show_as_carousel && _.length > g) {
                  var y = void 0;
                  if ("items" === v.section_type)
                    y = [void 0, 454 / 243, 302 / 173, 227 / 137][g - 1];
                  b = j.createElement(
                    an,
                    {
                      hideArrows: !m,
                      visibleElements: g,
                      slideAspectRatio: y,
                      className: "SaleSectionCarousel"
                    },
                    _
                  );
                } else {
                  var E = Object(_t.o)(v);
                  l &&
                    2 < E &&
                    E * g > _.length &&
                    (E = Math.max(2, Math.floor(_.length / g)));
                  var S = 0 == E || s ? _.length : E * g,
                    f = l || _.length > S;
                  b = j.createElement(
                    j.Fragment,
                    null,
                    j.createElement(
                      "div",
                      {
                        className: Object(Z.a)(
                          Ot.a.SaleSectionContainer,
                          ia.a.SaleSectionContainer
                        ),
                        style: {
                          gridTemplateColumns:
                            1 < g ? "repeat(" + g + ", minmax(0, 1fr))" : null
                        }
                      },
                      _.slice(0, S)
                    ),
                    f &&
                      j.createElement(
                        "div",
                        { className: ia.a.ShowContentsContainer },
                        this.state.bAwaitingShowContentLoading
                          ? j.createElement(se.a, {
                              size: "small",
                              string: Object(L.d)("#Sale_ShowMore")
                            })
                          : j.createElement(
                              "button",
                              {
                                onClick: this.ShowContents,
                                className: ia.a.ShowContentsButton
                              },
                              Object(L.d)("#Sale_ShowMore")
                            )
                      )
                  );
                }
              }
              if (!b) {
                if (!n) return null;
                b = j.createElement(
                  "div",
                  { className: ia.a.preview_placeholder_section },
                  Object(L.d)(
                    v.smart_section
                      ? "#Sale_SmartPlaceHolder"
                      : "#Sale_PlaceHolder"
                  )
                );
              }
              var C = v.label_link
                ? (G.c.IN_CLIENT ? "steam://openurl/" : "") + so(v.label_link)
                : void 0;
              return j.createElement(
                j.Fragment,
                null,
                j.createElement(
                  "div",
                  {
                    className: Object(Z.a)(
                      ia.a.SaleSection,
                      v.show_as_carousel && ia.a.CarouselDisplay,
                      mn.a.SaleSectionCtn
                    ),
                    style: co(v, t)
                  },
                  j.createElement($a, Object(k.a)({}, this.props)),
                  0 < c &&
                    j.createElement(
                      "div",
                      {
                        className: ia.a.SaleSectionSubtext,
                        style: { color: v.label_color }
                      },
                      Object(L.k)(
                        1 == c
                          ? "#Sale_HiddenItem_Single"
                          : "#Sale_HiddenItems",
                        c,
                        j.createElement(
                          "a",
                          {
                            href: G.c.STORE_BASE_URL + "account/preferences",
                            style: {
                              color: v.label_color,
                              filter: "brightness(150%)"
                            }
                          },
                          Object(L.d)("#Sale_StorePreferences")
                        )
                      )
                    ),
                  b,
                  Boolean(C) &&
                    j.createElement(
                      "div",
                      { className: ia.a.SaleViewAll },
                      j.createElement(
                        "a",
                        { href: C, target: G.c.IN_CLIENT ? void 0 : "_blank" },
                        Object(L.d)("#btn_live_streams_all")
                      )
                    )
                )
              );
            }),
            Object(k.c)([q.a], e.prototype, "ShowContents", null),
            Object(k.c)([q.a], e.prototype, "LoadCapsules", null),
            Object(k.c)([q.a], e.prototype, "OnResize", null),
            (e = n = Object(k.c)([r.observer], e))
          );
        })(j.Component);
      function oo(e) {
        return (
          "dlc" === e.smart_section_type ||
          "dlc_onsale" === e.smart_section_type ||
          "dlc_music_onsale" === e.smart_section_type
        );
      }
      function ro(e, t) {
        return e.filter(function(e) {
          return null == e.visibility_index || e.visibility_index == t;
        });
      }
      var io = function(e) {
        var t = e.text,
          n = e.url,
          a = e.color,
          o = e.bgcolor;
        return j.createElement(
          "a",
          {
            className: Ot.a.BrowseMoreButton,
            href: so(n),
            target: "_blank",
            style: { backgroundColor: o, color: a }
          },
          t || Object(L.d)("#Sale_BrowseMore_Text_Default")
        );
      };
      function so(t) {
        var e = "",
          n = "";
        if (t && (0 <= t.indexOf("/") || 0 <= t.indexOf("?")))
          try {
            var a = new URL(t);
            (e = a.pathname.substring(1)),
              (n = a.search),
              G.c.SNR &&
                (n += 0 < n.length ? "&snr=" + G.c.SNR : "?snr=" + G.c.SNR);
          } catch (e) {
            console.warn(t, e);
          }
        return G.c.STORE_BASE_URL + e + n;
      }
      function lo(e, t, n, a) {
        var o =
            e.localized_label[t] ||
            e.localized_label[0] ||
            ("#Sale_default_label" === e.default_label
              ? ""
              : Object(L.d)(e.default_label)),
          r =
            e.localized_label_image &&
            (e.localized_label_image[t] || e.localized_label_image[0]);
        if (a || !r) return o;
        var i = G.c.MEDIA_CDN_COMMUNITY_URL + "images/clans/" + n + "/" + r;
        return j.createElement("img", { loading: "lazy", src: i, alt: o });
      }
      function co(e, t) {
        var n = "";
        e.background_image &&
          (n +=
            "url(" +
            _e.a.GenerateArtworkURLFromHashAndExtensions(
              t.clanSteamID,
              e.background_image
            ) +
            "),");
        return {
          background:
            n +
            "linear-gradient(0deg, " +
            (e.background_gradient_bottom || "transparent") +
            " 0%, " +
            (e.background_gradient_top || "transparent") +
            " 100%)"
        };
      }
      function po(e, t) {
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
      var uo = (function(t) {
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
              var t = this;
              return j.createElement(
                F.a,
                null,
                j.createElement(
                  j.Suspense,
                  { fallback: j.createElement("div", null) },
                  j.createElement(
                    le.a,
                    { onEnter: this.OnEnter },
                    j.createElement(
                      "div",
                      { className: ia.a.SaleBroadcastSection },
                      Boolean(this.state.bOnceVisible) &&
                        j.createElement(Za, {
                          promotionName: this.props.promotionName,
                          clanid: Number(G.b.CLANACCOUNTID),
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
                        j.createElement("span", null, Object(L.d)("#Loading"))
                    )
                  )
                )
              );
            }),
            Object(k.c)([q.a], e.prototype, "OnEnter", null),
            e
          );
        })(j.Component),
        mo = Object(r.observer)(function(e) {
          var t = Wt.b.GetPlayReadyStream(),
            n = t && t.appid;
          b.a.EnsureStoreCapsuleInfoLoaded(n);
          var a = b.a.GetStoreCapsuleInfo(n),
            o = a && a.GetAppStoreData(),
            r = o && o.title;
          if (!r) return null;
          var i =
              "https://steamcdn-a.akamaihd.net/steamcommunity/public/" +
              (o.cover_image_asset_url
                ? "images/apps/" + n + "/" + o.cover_image_asset_url + ".jpg"
                : "images/apps/1195650/246e7e2a24c0aa965e505ac510d4e8e952f9a88a.jpg"),
            s = function() {
              return window.open(o.capsule_link, "_blank");
            };
          return j.createElement(
            "div",
            { className: ia.a.SalePageBroadcastContextHover },
            j.createElement("img", {
              src: i,
              className: ia.a.AlbumCoverImage,
              onClick: s
            }),
            j.createElement(
              "div",
              { className: ia.a.AlbumTitle, onClick: s },
              " ",
              r,
              " "
            )
          );
        }),
        ho = n("BVKn"),
        vo = ho.a.Get(),
        _o = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.state = {
                lookupGID: t.props.event_gid
                  ? t.props.event_gid
                  : vo.GetClanEventGIDFromAnnouncementGID(
                      t.props.announcement_gid
                    )
              }),
              t
            );
          }
          return (
            Object(k.d)(e, n),
            (e.prototype.LoadEvent = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  n = this;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        !this.props.event_gid ||
                        vo.GetClanEventModel(this.props.event_gid)
                      )
                        return [3, 5];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          vo.LoadPartnerEventGeneric(
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
                        vo
                          .LoadPartnerEventGeneric(
                            this.props.clansteamid,
                            this.props.appid,
                            void 0,
                            this.props.event_gid,
                            0
                          )
                          .then(function(e) {
                            return n.setState({ lookupGID: e.GID });
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
                        !vo.GetClanEventGIDFromAnnouncementGID(
                          this.props.announcement_gid
                        ) &&
                        vo
                          .LoadPartnerEventGeneric(
                            this.props.clansteamid,
                            this.props.appid,
                            void 0,
                            this.props.announcement_gid,
                            0
                          )
                          .then(function(e) {
                            return n.setState({ lookupGID: e.GID });
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
                  vo.GetClanEventModel(this.state.lookupGID);
              if (t && t.appid) {
                var n = b.a.GetStoreCapsuleInfo(t.appid).GetAppStoreData();
                e = n && n.title;
              } else if (t && t.clanSteamID) {
                var a = g.a.GetClanInfoByClanAccountID(
                  t.clanSteamID.GetAccountID()
                );
                e = a && a.group_name;
              }
              var o = t && t.GetNameWithFallback(Object(ve.d)(G.c.LANGUAGE));
              if (t && e && o) {
                var r = Object(L.d)(
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
              var e = vo.GetClanEventModel(this.state.lookupGID);
              e &&
                (e.appid
                  ? this.props.history.push("/newshub/app/" + e.appid)
                  : this.props.history.push(
                      "/newshub/group/" + e.clanSteamID.GetAccountID()
                    ));
            }),
            (e.prototype.render = function() {
              var e = vo.GetClanEventModel(this.state.lookupGID);
              return e
                ? this.props.bInfiniteScroll
                  ? l.a.createElement(
                      F.a,
                      null,
                      l.a.createElement(Qe, {
                        classname: ee.a.StoreHeaderAdjust,
                        appid: e.appid,
                        trackingLocation: 0,
                        announcementGID: e.GetAnnouncementGID(),
                        partnerEventStore: vo,
                        eventModel: e,
                        showAppHeader: !0,
                        closeModal: this.InfiniteScrollCloseModal
                      })
                    )
                  : l.a.createElement(
                      F.a,
                      null,
                      l.a.createElement(Vn, {
                        lang: Object(ve.d)(G.c.LANGUAGE),
                        partnerEventStore: vo,
                        event: e,
                        adminPanel: l.a.createElement(pn, {
                          eventModel: e,
                          partnerEventStore: vo
                        }),
                        otherEventRow: l.a.createElement(Gn, {
                          appid: e.appid,
                          eventModel: e,
                          partnerEventStore: vo
                        })
                      })
                    )
                : l.a.createElement(se.a, null);
            }),
            Object(k.c)([q.a], e.prototype, "InfiniteScrollCloseModal", null),
            (e = Object(k.c)([r.observer], e))
          );
        })(l.a.Component),
        bo = Object(c.g)(_o),
        go = n("WBba"),
        yo = n("r+ba"),
        Eo = n("apHd"),
        So = (function(a) {
          function e(e) {
            var n = a.call(this, e) || this;
            n.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: []
            };
            var t = Object(Eo.a)("EventWebRowEmbed");
            return (
              n.ValidateStoreDefault(t) &&
                ((n.state.bPreLoaded = t.bPreLoaded),
                (n.state.announcementGIDList = t.announcementGIDList),
                (n.state.events = []),
                n.state.announcementGIDList.forEach(function(e) {
                  var t = w.c.GetClanEventFromAnnouncementGID(e);
                  t && n.state.events.push(t);
                })),
              n
            );
          }
          return (
            Object(k.d)(e, a),
            (e.prototype.componentDidMount = function() {
              return Object(k.b)(this, void 0, void 0, function() {
                var t,
                  n,
                  a,
                  o,
                  r,
                  i,
                  s,
                  l = this;
                return Object(k.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props),
                        (n = t.appid),
                        (a = t.event_customization),
                        (o = t.partnerEventStore),
                        (r = t.trackingLocation),
                        this.state.bPreLoaded
                          ? [3, 2]
                          : [
                              4,
                              o.LoadAdjacentPartnerEvents(
                                null,
                                null,
                                n,
                                0,
                                2,
                                a
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
              var n = A.a.Get().GetTracker();
              e.BIsPartnerEvent() &&
                n.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
                n.Flush();
            }),
            (e.prototype.CloseModal = function() {
              this.setState({ bShowModal: !1, modalInitialEvent: null });
            }),
            (e.prototype.render = function() {
              var n = this,
                a = this.state.events;
              if (!a)
                return l.a.createElement(
                  "div",
                  { className: Ye.a.FlexCenter },
                  l.a.createElement(se.a, {
                    size: "medium",
                    position: "center"
                  })
                );
              if (a && 0 === a.length) return null;
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
                  l.a.createElement(Qe, {
                    classname: yo.StoreHeaderAdjust,
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
                  Object(L.d)("#EventBrowse_RecentEvents")
                ),
                l.a.createElement(
                  "div",
                  { className: yo.SectionButtonCtn },
                  l.a.createElement(
                    "div",
                    {
                      className: yo.SectionButton,
                      onClick: function() {
                        return n.ShowModal(a[0]);
                      }
                    },
                    Object(L.d)("#EventBrowse_MoreEventsBtn")
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: yo.EventsSummariesCtn },
                  a.slice(0, e).map(function(t) {
                    var e =
                      1 === a.length && 500 < window.screen.width ? Nn : Mn;
                    return l.a.createElement(e, {
                      key: t.GID,
                      event: t,
                      onClick: function(e) {
                        n.ShowModal(t), e.stopPropagation(), e.preventDefault();
                      }
                    });
                  })
                )
              );
            }),
            Object(k.c)([q.a], e.prototype, "ShowModal", null),
            Object(k.c)([q.a], e.prototype, "CloseModal", null),
            e
          );
        })(l.a.Component),
        fo = (function(o) {
          function e(e) {
            var t = o.call(this, e) || this;
            t.m_rtimeOldest = 0;
            var n = N.a.GetTimeNowWithOverrideAsDate(),
              a = new Date(n.setUTCHours(0, 0, 0, 0) - 15552e6);
            return (t.m_rtimeOldest = Math.floor(a.getTime() / 1e3)), t;
          }
          return (
            Object(k.d)(e, o),
            (e.prototype.render = function() {
              var e = this.props.appid;
              return l.a.createElement(So, {
                appid: e,
                partnerEventStore: ho.a.Get(),
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
      n.d(t, "EventModerationLanding", function() {
        return Io;
      }),
        n.d(t, "EventBackfillLanding", function() {
          return To;
        }),
        n.d(t, "EventSaleDisplay", function() {
          return wo;
        }),
        n.d(t, "EventCalendar", function() {
          return Do;
        }),
        n.d(t, "EventDetailView", function() {
          return ko;
        }),
        n.d(t, "Events", function() {
          return Ao;
        }),
        qe.a.Init(new go.a(G.c.WEBAPI_BASE_URL)),
        w.c.Init();
      var Co = function(e) {
        var t = e.children,
          n = Object(j.useState)(A.a.IsInitialized()),
          a = n[0],
          o = n[1];
        return a
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
      var Io = Oo(jt),
        To = Oo(Ut),
        wo = Oo(Ya),
        Do = Oo(st),
        ko = Oo(bo),
        Ao = Oo(fo);
    },
    YVfL: function(e, t, n) {
      e.exports = {
        strMaxMobileWidth: "600px",
        SaleSchedCtn: "salesectioneventschedule_SaleSchedCtn_2g7il",
        SectionCtn: "salesectioneventschedule_SectionCtn_2wwgk",
        SaleSchedListCtn: "salesectioneventschedule_SaleSchedListCtn_1THwn",
        SaleSchedRow: "salesectioneventschedule_SaleSchedRow_3l83c",
        SaleSchedList: "salesectioneventschedule_SaleSchedList_2BWbK",
        NoEventsYet: "salesectioneventschedule_NoEventsYet_1ZTMP",
        SaleSchedGridCtn: "salesectioneventschedule_SaleSchedGridCtn_50nbv",
        DemoCapsuleCtn: "salesectioneventschedule_DemoCapsuleCtn_YcUDX",
        SchedSectionLabel: "salesectioneventschedule_SchedSectionLabel_2UAed",
        SaleSchedDetailCtn: "salesectioneventschedule_SaleSchedDetailCtn_31c5z",
        SaleAppWideCtn: "salesectioneventschedule_SaleAppWideCtn_3QOgi",
        SaleTagAndOS: "salesectioneventschedule_SaleTagAndOS_2rcuH",
        StatementCtn: "salesectioneventschedule_StatementCtn_2p5xO",
        MediaContainer: "salesectioneventschedule_MediaContainer_u2Bv0",
        EventWideCtn: "salesectioneventschedule_EventWideCtn_3ebd7",
        SaleSchedRowProxy: "salesectioneventschedule_SaleSchedRowProxy_2HMsx",
        Time: "salesectioneventschedule_Time_3qoMb",
        DetailsCtn: "salesectioneventschedule_DetailsCtn_3deMj",
        AppTitle: "salesectioneventschedule_AppTitle_3q715",
        EventTitle: "salesectioneventschedule_EventTitle_109s-",
        Icon: "salesectioneventschedule_Icon_26VBx",
        SchedRowSelected: "salesectioneventschedule_SchedRowSelected_3GxYn",
        WideHeader: "salesectioneventschedule_WideHeader_wI_4v",
        WideDetailCtn: "salesectioneventschedule_WideDetailCtn_2UUN8",
        ReleaseDate: "salesectioneventschedule_ReleaseDate_3pYbY",
        GameButtons: "salesectioneventschedule_GameButtons_nZS28",
        WideActionCtn: "salesectioneventschedule_WideActionCtn_mZEz5",
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
        Title: "salesectioneventschedule_Title_J6ivk",
        EventWideDetailCtn: "salesectioneventschedule_EventWideDetailCtn_jM8go",
        EventDetails: "salesectioneventschedule_EventDetails_1B7Oi",
        EventTime: "salesectioneventschedule_EventTime_2-ep9",
        EventOptionsCtn: "salesectioneventschedule_EventOptionsCtn_3O1DS",
        EventIcon: "salesectioneventschedule_EventIcon_1qfgw",
        DemoCapsuleImageCtn:
          "salesectioneventschedule_DemoCapsuleImageCtn_2lXIM",
        DemoCapsuleImage: "salesectioneventschedule_DemoCapsuleImage_2CkjJ",
        DemoCapsuleEventReference:
          "salesectioneventschedule_DemoCapsuleEventReference_2Dg_w",
        DemoCapsuleRelease: "salesectioneventschedule_DemoCapsuleRelease_1vj_i",
        DemoCapsuleActionCtn:
          "salesectioneventschedule_DemoCapsuleActionCtn_2Qy4b",
        DemoButton: "salesectioneventschedule_DemoButton_20uhj",
        DisabledButton: "salesectioneventschedule_DisabledButton_1l58G",
        MenuOpened: "salesectioneventschedule_MenuOpened_3_ryW",
        DownArrow: "salesectioneventschedule_DownArrow_3hgfo",
        MoreActionsMenu: "salesectioneventschedule_MoreActionsMenu_3iDlX",
        MoreActionsMenuItem:
          "salesectioneventschedule_MoreActionsMenuItem_O831_",
        NewsHubLink: "salesectioneventschedule_NewsHubLink_TafBI"
      };
    },
    ZCZY: function(e, t, n) {
      e.exports = { BreadContainer: "breadcrumbs_BreadContainer_3jswb" };
    },
    bUNj: function(e, t, n) {},
    "d+Me": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      });
      var a = n("mrSG"),
        o = n("q1tI"),
        r = n("uuth"),
        i = function(t) {
          return o.createElement(
            r.a,
            Object(a.a)({}, t, {
              onPositionChange: function(e) {
                return void 0 === e.previousPosition &&
                  e.currentPosition === r.a.above &&
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
    dsx8: function(e, t, n) {
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
    hmtA: function(e, t, n) {},
    i6tc: function(e, t, n) {
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
    qP7j: function(e, t, n) {
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
    sGzE: function(e, t, n) {
      e.exports = {
        StatsTitle: "partnereventstats_StatsTitle_3YLaB",
        StatsCtnTitle: "partnereventstats_StatsCtnTitle_1LlRF",
        SmallStatsMode: "partnereventstats_SmallStatsMode_2A2-p",
        StatsCtn: "partnereventstats_StatsCtn_hWCs4",
        StatsLeftSection: "partnereventstats_StatsLeftSection_3L-uh",
        StatsRightSection: "partnereventstats_StatsRightSection_1yibD"
      };
    },
    vNkc: function(e, t, n) {
      e.exports = { Error: "eventbackfill_Error_1eWgI" };
    }
  }
]);

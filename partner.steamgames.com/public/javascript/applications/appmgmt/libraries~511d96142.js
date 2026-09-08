/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5193],
  {
    55552: () => {},
    71353: () => {},
    62759: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => l });
      var o = n(98403),
        r = n(90865),
        i = n(90150),
        s = n(73077),
        a = n(12260),
        l = (0, o.gu)({
          chartName: "LineChart",
          GraphicalChild: r.N,
          axisComponents: [
            { axisType: "xAxis", AxisComp: i.W },
            { axisType: "yAxis", AxisComp: s.h },
          ],
          formatAxisMap: a.pr,
        });
    },
    47316: (e, t, n) => {
      "use strict";
      n.d(t, {
        h7: () => Ne,
        Gc: () => Vt,
        Ln: () => Rt,
        fM: () => Xt,
        ck: () => qt,
        PF: () => Ht,
      });
      var o = n(7850);
      function r(e) {
        if ("string" == typeof e || "number" == typeof e) return "" + e;
        let t = "";
        if (Array.isArray(e))
          for (let n, o = 0; o < e.length; o++)
            "" !== (n = r(e[o])) && (t += (t && " ") + n);
        else for (let n in e) e[n] && (t += (t && " ") + n);
        return t;
      }
      var i = n(81451),
        s = n(90626),
        a = n(72648);
      const l = (e) => {
          let t;
          const n = new Set(),
            o = (e, o) => {
              const r = "function" == typeof e ? e(t) : e;
              if (!Object.is(r, t)) {
                const e = t;
                (t = (null != o ? o : "object" != typeof r || null === r)
                  ? r
                  : Object.assign({}, t, r)),
                  n.forEach((n) => n(t, e));
              }
            },
            r = () => t,
            i = {
              setState: o,
              getState: r,
              getInitialState: () => s,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
              destroy: () => {
                console.warn(
                  "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.",
                ),
                  n.clear();
              },
            },
            s = (t = e(o, r, i));
          return i;
        },
        c = (e) => (e ? l(e) : l);
      const { useDebugValue: u } = s,
        { useSyncExternalStoreWithSelector: d } = a,
        h = (e) => e;
      function f(e, t = h, n) {
        const o = d(
          e.subscribe,
          e.getState,
          e.getServerState || e.getInitialState,
          t,
          n,
        );
        return u(o), o;
      }
      const p = (e, t) => {
        const n = c(e),
          o = (e, o = t) => f(n, e, o);
        return Object.assign(o, n), o;
      };
      function g(e, t) {
        if (Object.is(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        if (e instanceof Map && t instanceof Map) {
          if (e.size !== t.size) return !1;
          for (const [n, o] of e) if (!Object.is(o, t.get(n))) return !1;
          return !0;
        }
        if (e instanceof Set && t instanceof Set) {
          if (e.size !== t.size) return !1;
          for (const n of e) if (!t.has(n)) return !1;
          return !0;
        }
        const n = Object.keys(e);
        if (n.length !== Object.keys(t).length) return !1;
        for (const o of n)
          if (
            !Object.prototype.hasOwnProperty.call(t, o) ||
            !Object.is(e[o], t[o])
          )
            return !1;
        return !0;
      }
      n(72739);
      const m = (0, s.createContext)(null),
        y = m.Provider,
        v = i.xc.error001();
      function x(e, t) {
        const n = (0, s.useContext)(m);
        if (null === n) throw new Error(v);
        return f(n, e, t);
      }
      function b() {
        const e = (0, s.useContext)(m);
        if (null === e) throw new Error(v);
        return (0, s.useMemo)(
          () => ({
            getState: e.getState,
            setState: e.setState,
            subscribe: e.subscribe,
          }),
          [e],
        );
      }
      const w = { display: "none" },
        S = {
          position: "absolute",
          width: 1,
          height: 1,
          margin: -1,
          border: 0,
          padding: 0,
          overflow: "hidden",
          clip: "rect(0px, 0px, 0px, 0px)",
          clipPath: "inset(100%)",
        },
        E = "react-flow__node-desc",
        _ = "react-flow__edge-desc",
        C = (e) => e.ariaLiveMessage;
      function k({ rfId: e }) {
        const t = x(C);
        return (0, o.jsx)("div", {
          id: `react-flow__aria-live-${e}`,
          "aria-live": "assertive",
          "aria-atomic": "true",
          style: S,
          children: t,
        });
      }
      function M({ rfId: e, disableKeyboardA11y: t }) {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("div", {
              id: `${E}-${e}`,
              style: w,
              children: [
                "Press enter or space to select a node.",
                !t &&
                  "You can then use the arrow keys to move the node around.",
                " Press delete to remove it and escape to cancel.",
                " ",
              ],
            }),
            (0, o.jsx)("div", {
              id: `${_}-${e}`,
              style: w,
              children:
                "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
            }),
            !t && (0, o.jsx)(k, { rfId: e }),
          ],
        });
      }
      const N = (e) => (e.userSelectionActive ? "none" : "all"),
        P = (0, s.forwardRef)(
          (
            {
              position: e = "top-left",
              children: t,
              className: n,
              style: i,
              ...s
            },
            a,
          ) => {
            const l = x(N),
              c = `${e}`.split("-");
            return (0, o.jsx)("div", {
              className: r(["react-flow__panel", n, ...c]),
              style: { ...i, pointerEvents: l },
              ref: a,
              ...s,
              children: t,
            });
          },
        );
      function A({ proOptions: e, position: t = "bottom-right" }) {
        return e?.hideAttribution
          ? null
          : (0, o.jsx)(P, {
              position: t,
              className: "react-flow__attribution",
              "data-message":
                "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",
              children: (0, o.jsx)("a", {
                href: "https://reactflow.dev",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "React Flow attribution",
                children: "React Flow",
              }),
            });
      }
      const O = (e) => {
          const t = [],
            n = [];
          for (const [, n] of e.nodeLookup)
            n.selected && t.push(n.internals.userNode);
          for (const [, t] of e.edgeLookup) t.selected && n.push(t);
          return { selectedNodes: t, selectedEdges: n };
        },
        D = (e) => e.id;
      function j(e, t) {
        return (
          g(e.selectedNodes.map(D), t.selectedNodes.map(D)) &&
          g(e.selectedEdges.map(D), t.selectedEdges.map(D))
        );
      }
      function I({ onSelectionChange: e }) {
        const t = b(),
          { selectedNodes: n, selectedEdges: o } = x(O, j);
        return (
          (0, s.useEffect)(() => {
            const r = { nodes: n, edges: o };
            e?.(r), t.getState().onSelectionChangeHandlers.forEach((e) => e(r));
          }, [n, o, e]),
          null
        );
      }
      const z = (e) => !!e.onSelectionChangeHandlers;
      function B({ onSelectionChange: e }) {
        const t = x(z);
        return e || t ? (0, o.jsx)(I, { onSelectionChange: e }) : null;
      }
      const L = [0, 0],
        R = { x: 0, y: 0, zoom: 1 },
        $ = [
          "nodes",
          "edges",
          "defaultNodes",
          "defaultEdges",
          "onConnect",
          "onConnectStart",
          "onConnectEnd",
          "onClickConnectStart",
          "onClickConnectEnd",
          "nodesDraggable",
          "nodesConnectable",
          "nodesFocusable",
          "edgesFocusable",
          "edgesReconnectable",
          "elevateNodesOnSelect",
          "elevateEdgesOnSelect",
          "minZoom",
          "maxZoom",
          "nodeExtent",
          "onNodesChange",
          "onEdgesChange",
          "elementsSelectable",
          "connectionMode",
          "snapGrid",
          "snapToGrid",
          "translateExtent",
          "connectOnClick",
          "defaultEdgeOptions",
          "fitView",
          "fitViewOptions",
          "onNodesDelete",
          "onEdgesDelete",
          "onDelete",
          "onNodeDrag",
          "onNodeDragStart",
          "onNodeDragStop",
          "onSelectionDrag",
          "onSelectionDragStart",
          "onSelectionDragStop",
          "onMoveStart",
          "onMove",
          "onMoveEnd",
          "noPanClassName",
          "nodeOrigin",
          "autoPanOnConnect",
          "autoPanOnNodeDrag",
          "onError",
          "connectionRadius",
          "isValidConnection",
          "selectNodesOnDrag",
          "nodeDragThreshold",
          "onBeforeDelete",
          "debug",
          "autoPanSpeed",
          "paneClickDistance",
          "rfId",
        ],
        T = (e) => ({
          setNodes: e.setNodes,
          setEdges: e.setEdges,
          setMinZoom: e.setMinZoom,
          setMaxZoom: e.setMaxZoom,
          setTranslateExtent: e.setTranslateExtent,
          setNodeExtent: e.setNodeExtent,
          reset: e.reset,
          setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
          setPaneClickDistance: e.setPaneClickDistance,
        }),
        V = {
          translateExtent: i.ZO,
          nodeOrigin: L,
          minZoom: 0.5,
          maxZoom: 2,
          elementsSelectable: !0,
          noPanClassName: "nopan",
          rfId: "1",
          paneClickDistance: 0,
        };
      function H(e) {
        const {
            setNodes: t,
            setEdges: n,
            setMinZoom: o,
            setMaxZoom: r,
            setTranslateExtent: i,
            setNodeExtent: a,
            reset: l,
            setDefaultNodesAndEdges: c,
            setPaneClickDistance: u,
          } = x(T, g),
          d = b();
        (0, s.useEffect)(
          () => (
            c(e.defaultNodes, e.defaultEdges),
            () => {
              (h.current = V), l();
            }
          ),
          [],
        );
        const h = (0, s.useRef)(V);
        return (
          (0, s.useEffect)(
            () => {
              for (const s of $) {
                const l = e[s];
                l !== h.current[s] &&
                  void 0 !== e[s] &&
                  ("nodes" === s
                    ? t(l)
                    : "edges" === s
                      ? n(l)
                      : "minZoom" === s
                        ? o(l)
                        : "maxZoom" === s
                          ? r(l)
                          : "translateExtent" === s
                            ? i(l)
                            : "nodeExtent" === s
                              ? a(l)
                              : "paneClickDistance" === s
                                ? u(l)
                                : "fitView" === s
                                  ? d.setState({ fitViewOnInit: l })
                                  : "fitViewOptions" === s
                                    ? d.setState({ fitViewOnInitOptions: l })
                                    : d.setState({ [s]: l }));
              }
              h.current = e;
            },
            $.map((t) => e[t]),
          ),
          null
        );
      }
      function q() {
        return "undefined" != typeof window && window.matchMedia
          ? window.matchMedia("(prefers-color-scheme: dark)")
          : null;
      }
      const X = "undefined" != typeof document ? document : null;
      function Z(e = null, t = { target: X, actInsideInputWithModifier: !0 }) {
        const [n, o] = (0, s.useState)(!1),
          r = (0, s.useRef)(!1),
          a = (0, s.useRef)(new Set([])),
          [l, c] = (0, s.useMemo)(() => {
            if (null !== e) {
              const t = (Array.isArray(e) ? e : [e])
                  .filter((e) => "string" == typeof e)
                  .map((e) =>
                    e.replace("+", "\n").replace("\n\n", "\n+").split("\n"),
                  ),
                n = t.reduce((e, t) => e.concat(...t), []);
              return [t, n];
            }
            return [[], []];
          }, [e]);
        return (
          (0, s.useEffect)(() => {
            const n = t?.target || X;
            if (null !== e) {
              const e = (e) => {
                  r.current = e.ctrlKey || e.metaKey || e.shiftKey;
                  if (
                    (!r.current ||
                      (r.current && !t.actInsideInputWithModifier)) &&
                    (0, i.v5)(e)
                  )
                    return !1;
                  const n = F(e.code, c);
                  a.current.add(e[n]),
                    Y(l, a.current, !1) && (e.preventDefault(), o(!0));
                },
                s = (e) => {
                  if (
                    (!r.current ||
                      (r.current && !t.actInsideInputWithModifier)) &&
                    (0, i.v5)(e)
                  )
                    return !1;
                  const n = F(e.code, c);
                  Y(l, a.current, !0)
                    ? (o(!1), a.current.clear())
                    : a.current.delete(e[n]),
                    "Meta" === e.key && a.current.clear(),
                    (r.current = !1);
                },
                u = () => {
                  a.current.clear(), o(!1);
                };
              return (
                n?.addEventListener("keydown", e),
                n?.addEventListener("keyup", s),
                window.addEventListener("blur", u),
                window.addEventListener("contextmenu", u),
                () => {
                  n?.removeEventListener("keydown", e),
                    n?.removeEventListener("keyup", s),
                    window.removeEventListener("blur", u),
                    window.removeEventListener("contextmenu", u);
                }
              );
            }
          }, [e, o]),
          n
        );
      }
      function Y(e, t, n) {
        return e
          .filter((e) => n || e.length === t.size)
          .some((e) => e.every((e) => t.has(e)));
      }
      function F(e, t) {
        return t.includes(e) ? "code" : "key";
      }
      function K(e, t) {
        const n = [],
          o = new Map(),
          r = [];
        for (const t of e)
          if ("add" !== t.type)
            if ("remove" === t.type || "replace" === t.type) o.set(t.id, [t]);
            else {
              const e = o.get(t.id);
              e ? e.push(t) : o.set(t.id, [t]);
            }
          else r.push(t);
        for (const e of t) {
          const t = o.get(e.id);
          if (!t) {
            n.push(e);
            continue;
          }
          if ("remove" === t[0].type) continue;
          if ("replace" === t[0].type) {
            n.push({ ...t[0].item });
            continue;
          }
          const r = { ...e };
          for (const e of t) W(e, r);
          n.push(r);
        }
        return (
          r.length &&
            r.forEach((e) => {
              void 0 !== e.index
                ? n.splice(e.index, 0, { ...e.item })
                : n.push({ ...e.item });
            }),
          n
        );
      }
      function W(e, t) {
        switch (e.type) {
          case "select":
            t.selected = e.selected;
            break;
          case "position":
            void 0 !== e.position && (t.position = e.position),
              void 0 !== e.dragging && (t.dragging = e.dragging);
            break;
          case "dimensions":
            void 0 !== e.dimensions &&
              ((t.measured ??= {}),
              (t.measured.width = e.dimensions.width),
              (t.measured.height = e.dimensions.height),
              e.setAttributes &&
                ((t.width = e.dimensions.width),
                (t.height = e.dimensions.height))),
              "boolean" == typeof e.resizing && (t.resizing = e.resizing);
        }
      }
      function G(e, t) {
        return K(e, t);
      }
      function U(e, t) {
        return K(e, t);
      }
      function Q(e, t) {
        return { id: e, type: "select", selected: t };
      }
      function J(e, t = new Set(), n = !1) {
        const o = [];
        for (const [r, i] of e) {
          const e = t.has(r);
          (void 0 === i.selected && !e) ||
            i.selected === e ||
            (n && (i.selected = e), o.push(Q(i.id, e)));
        }
        return o;
      }
      function ee({ items: e = [], lookup: t }) {
        const n = [],
          o = new Map(e.map((e) => [e.id, e]));
        for (const [o, r] of e.entries()) {
          const e = t.get(r.id),
            i = e?.internals?.userNode ?? e;
          void 0 !== i &&
            i !== r &&
            n.push({ id: r.id, item: r, type: "replace" }),
            void 0 === i && n.push({ item: r, type: "add", index: o });
        }
        for (const [e] of t) {
          void 0 === o.get(e) && n.push({ id: e, type: "remove" });
        }
        return n;
      }
      function te(e) {
        return { id: e.id, type: "remove" };
      }
      const ne = (e) => (0, i.oB)(e);
      function oe(e) {
        return (0, s.forwardRef)(e);
      }
      const re = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect;
      function ie(e) {
        const [t, n] = (0, s.useState)(BigInt(0)),
          [o] = (0, s.useState)(() =>
            (function (e) {
              let t = [];
              return {
                get: () => t,
                reset: () => {
                  t = [];
                },
                push: (n) => {
                  t.push(n), e();
                },
              };
            })(() => n((e) => e + BigInt(1))),
          );
        return (
          re(() => {
            const t = o.get();
            t.length && (e(t), o.reset());
          }, [t]),
          o
        );
      }
      const se = (0, s.createContext)(null);
      function ae({ children: e }) {
        const t = b(),
          n = ie(
            (0, s.useCallback)((e) => {
              const {
                nodes: n = [],
                setNodes: o,
                hasDefaultNodes: r,
                onNodesChange: i,
                nodeLookup: s,
              } = t.getState();
              let a = n;
              for (const t of e) a = "function" == typeof t ? t(a) : t;
              r ? o(a) : i && i(ee({ items: a, lookup: s }));
            }, []),
          ),
          r = ie(
            (0, s.useCallback)((e) => {
              const {
                edges: n = [],
                setEdges: o,
                hasDefaultEdges: r,
                onEdgesChange: i,
                edgeLookup: s,
              } = t.getState();
              let a = n;
              for (const t of e) a = "function" == typeof t ? t(a) : t;
              r ? o(a) : i && i(ee({ items: a, lookup: s }));
            }, []),
          ),
          i = (0, s.useMemo)(() => ({ nodeQueue: n, edgeQueue: r }), []);
        return (0, o.jsx)(se.Provider, { value: i, children: e });
      }
      const le = (e) => !!e.panZoom;
      function ce() {
        const e = (() => {
            const e = b();
            return (0, s.useMemo)(
              () => ({
                zoomIn: (t) => {
                  const { panZoom: n } = e.getState();
                  return n
                    ? n.scaleBy(1.2, { duration: t?.duration })
                    : Promise.resolve(!1);
                },
                zoomOut: (t) => {
                  const { panZoom: n } = e.getState();
                  return n
                    ? n.scaleBy(1 / 1.2, { duration: t?.duration })
                    : Promise.resolve(!1);
                },
                zoomTo: (t, n) => {
                  const { panZoom: o } = e.getState();
                  return o
                    ? o.scaleTo(t, { duration: n?.duration })
                    : Promise.resolve(!1);
                },
                getZoom: () => e.getState().transform[2],
                setViewport: async (t, n) => {
                  const {
                    transform: [o, r, i],
                    panZoom: s,
                  } = e.getState();
                  return s
                    ? (await s.setViewport(
                        { x: t.x ?? o, y: t.y ?? r, zoom: t.zoom ?? i },
                        { duration: n?.duration },
                      ),
                      Promise.resolve(!0))
                    : Promise.resolve(!1);
                },
                getViewport: () => {
                  const [t, n, o] = e.getState().transform;
                  return { x: t, y: n, zoom: o };
                },
                fitView: (t) => {
                  const {
                    nodeLookup: n,
                    minZoom: o,
                    maxZoom: r,
                    panZoom: s,
                    domNode: a,
                  } = e.getState();
                  if (!s || !a) return Promise.resolve(!1);
                  const l = (0, i.YV)(n, t),
                    { width: c, height: u } = (0, i.Eo)(a);
                  return (0, i.Pr)(
                    {
                      nodes: l,
                      width: c,
                      height: u,
                      minZoom: o,
                      maxZoom: r,
                      panZoom: s,
                    },
                    t,
                  );
                },
                setCenter: async (t, n, o) => {
                  const {
                      width: r,
                      height: i,
                      maxZoom: s,
                      panZoom: a,
                    } = e.getState(),
                    l = void 0 !== o?.zoom ? o.zoom : s,
                    c = r / 2 - t * l,
                    u = i / 2 - n * l;
                  return a
                    ? (await a.setViewport(
                        { x: c, y: u, zoom: l },
                        { duration: o?.duration },
                      ),
                      Promise.resolve(!0))
                    : Promise.resolve(!1);
                },
                fitBounds: async (t, n) => {
                  const {
                      width: o,
                      height: r,
                      minZoom: s,
                      maxZoom: a,
                      panZoom: l,
                    } = e.getState(),
                    c = (0, i.R4)(t, o, r, s, a, n?.padding ?? 0.1);
                  return l
                    ? (await l.setViewport(c, { duration: n?.duration }),
                      Promise.resolve(!0))
                    : Promise.resolve(!1);
                },
                screenToFlowPosition: (t, n = { snapToGrid: !0 }) => {
                  const {
                    transform: o,
                    snapGrid: r,
                    domNode: s,
                  } = e.getState();
                  if (!s) return t;
                  const { x: a, y: l } = s.getBoundingClientRect(),
                    c = { x: t.x - a, y: t.y - l };
                  return (0, i.Ff)(c, o, n.snapToGrid, r);
                },
                flowToScreenPosition: (t) => {
                  const { transform: n, domNode: o } = e.getState();
                  if (!o) return t;
                  const { x: r, y: s } = o.getBoundingClientRect(),
                    a = (0, i.zj)(t, n);
                  return { x: a.x + r, y: a.y + s };
                },
              }),
              [],
            );
          })(),
          t = b(),
          n = (function () {
            const e = (0, s.useContext)(se);
            if (!e)
              throw new Error(
                "useBatchContext must be used within a BatchProvider",
              );
            return e;
          })(),
          o = x(le),
          r = (0, s.useMemo)(() => {
            const e = (e) => t.getState().nodeLookup.get(e),
              o = (e) => {
                n.nodeQueue.push(e);
              },
              r = (e) => {
                n.edgeQueue.push(e);
              },
              s = (e) => {
                const { nodeLookup: n, nodeOrigin: o } = t.getState(),
                  r = ne(e) ? e : n.get(e.id),
                  s = r.parentId
                    ? (0, i.us)(r.position, r.measured, r.parentId, n, o)
                    : r.position,
                  a = {
                    ...r,
                    position: s,
                    width: r.measured?.width ?? r.width,
                    height: r.measured?.height ?? r.height,
                  };
                return (0, i.kM)(a);
              },
              a = (e, t, n = { replace: !1 }) => {
                o((o) =>
                  o.map((o) => {
                    if (o.id === e) {
                      const e = "function" == typeof t ? t(o) : t;
                      return n.replace && ne(e) ? e : { ...o, ...e };
                    }
                    return o;
                  }),
                );
              },
              l = (e, t, n = { replace: !1 }) => {
                r((o) =>
                  o.map((o) => {
                    if (o.id === e) {
                      const e = "function" == typeof t ? t(o) : t;
                      return n.replace && ((r = e), (0, i.b$)(r))
                        ? e
                        : { ...o, ...e };
                    }
                    var r;
                    return o;
                  }),
                );
              };
            return {
              getNodes: () => t.getState().nodes.map((e) => ({ ...e })),
              getNode: (t) => e(t)?.internals.userNode,
              getInternalNode: e,
              getEdges: () => {
                const { edges: e = [] } = t.getState();
                return e.map((e) => ({ ...e }));
              },
              getEdge: (e) => t.getState().edgeLookup.get(e),
              setNodes: o,
              setEdges: r,
              addNodes: (e) => {
                const t = Array.isArray(e) ? e : [e];
                n.nodeQueue.push((e) => [...e, ...t]);
              },
              addEdges: (e) => {
                const t = Array.isArray(e) ? e : [e];
                n.edgeQueue.push((e) => [...e, ...t]);
              },
              toObject: () => {
                const {
                    nodes: e = [],
                    edges: n = [],
                    transform: o,
                  } = t.getState(),
                  [r, i, s] = o;
                return {
                  nodes: e.map((e) => ({ ...e })),
                  edges: n.map((e) => ({ ...e })),
                  viewport: { x: r, y: i, zoom: s },
                };
              },
              deleteElements: async ({ nodes: e = [], edges: n = [] }) => {
                const {
                    nodes: o,
                    edges: r,
                    onNodesDelete: s,
                    onEdgesDelete: a,
                    triggerNodeChanges: l,
                    triggerEdgeChanges: c,
                    onDelete: u,
                    onBeforeDelete: d,
                  } = t.getState(),
                  { nodes: h, edges: f } = await (0, i.Tq)({
                    nodesToRemove: e,
                    edgesToRemove: n,
                    nodes: o,
                    edges: r,
                    onBeforeDelete: d,
                  }),
                  p = f.length > 0,
                  g = h.length > 0;
                if (p) {
                  const e = f.map(te);
                  a?.(f), c(e);
                }
                if (g) {
                  const e = h.map(te);
                  s?.(h), l(e);
                }
                return (
                  (g || p) && u?.({ nodes: h, edges: f }),
                  { deletedNodes: h, deletedEdges: f }
                );
              },
              getIntersectingNodes: (e, n = !0, o) => {
                const r = (0, i.mW)(e),
                  a = r ? e : s(e),
                  l = void 0 !== o;
                return a
                  ? (o || t.getState().nodes).filter((o) => {
                      const s = t.getState().nodeLookup.get(o.id);
                      if (
                        s &&
                        !r &&
                        (o.id === e.id || !s.internals.positionAbsolute)
                      )
                        return !1;
                      const c = (0, i.kM)(l ? o : s),
                        u = (0, i.X6)(c, a);
                      return (n && u > 0) || u >= a.width * a.height;
                    })
                  : [];
              },
              isNodeIntersecting: (e, t, n = !0) => {
                const o = (0, i.mW)(e) ? e : s(e);
                if (!o) return !1;
                const r = (0, i.X6)(o, t);
                return (n && r > 0) || r >= o.width * o.height;
              },
              updateNode: a,
              updateNodeData: (e, t, n = { replace: !1 }) => {
                a(
                  e,
                  (e) => {
                    const o = "function" == typeof t ? t(e) : t;
                    return n.replace
                      ? { ...e, data: o }
                      : { ...e, data: { ...e.data, ...o } };
                  },
                  n,
                );
              },
              updateEdge: l,
              updateEdgeData: (e, t, n = { replace: !1 }) => {
                l(
                  e,
                  (e) => {
                    const o = "function" == typeof t ? t(e) : t;
                    return n.replace
                      ? { ...e, data: o }
                      : { ...e, data: { ...e.data, ...o } };
                  },
                  n,
                );
              },
              getNodesBounds: (e) => {
                const { nodeLookup: n, nodeOrigin: o } = t.getState();
                return (0, i.Jo)(e, { nodeLookup: n, nodeOrigin: o });
              },
              getHandleConnections: ({ type: e, id: n, nodeId: o }) =>
                Array.from(
                  t
                    .getState()
                    .connectionLookup.get(`${o}-${e}-${n ?? null}`)
                    ?.values() ?? [],
                ),
            };
          }, []);
        return (0, s.useMemo)(
          () => ({ ...r, ...e, viewportInitialized: o }),
          [o],
        );
      }
      const ue = (e) => e.selected,
        de = { actInsideInputWithModifier: !1 },
        he = "undefined" != typeof window ? window : void 0;
      const fe = {
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        },
        pe = (e) => ({
          userSelectionActive: e.userSelectionActive,
          lib: e.lib,
        });
      function ge({
        onPaneContextMenu: e,
        zoomOnScroll: t = !0,
        zoomOnPinch: n = !0,
        panOnScroll: r = !1,
        panOnScrollSpeed: a = 0.5,
        panOnScrollMode: l = i.ny.Free,
        zoomOnDoubleClick: c = !0,
        panOnDrag: u = !0,
        defaultViewport: d,
        translateExtent: h,
        minZoom: f,
        maxZoom: p,
        zoomActivationKeyCode: m,
        preventScrolling: y = !0,
        children: v,
        noWheelClassName: w,
        noPanClassName: S,
        onViewportChange: E,
        isControlledViewport: _,
        paneClickDistance: C,
      }) {
        const k = b(),
          M = (0, s.useRef)(null),
          { userSelectionActive: N, lib: P } = x(pe, g),
          A = Z(m),
          O = (0, s.useRef)();
        !(function (e) {
          const t = b();
          (0, s.useEffect)(() => {
            const n = () => {
              if (!e.current) return !1;
              const n = (0, i.Eo)(e.current);
              (0 !== n.height && 0 !== n.width) ||
                t.getState().onError?.("004", i.xc.error004()),
                t.setState({ width: n.width || 500, height: n.height || 500 });
            };
            if (e.current) {
              n(), window.addEventListener("resize", n);
              const t = new ResizeObserver(() => n());
              return (
                t.observe(e.current),
                () => {
                  window.removeEventListener("resize", n),
                    t && e.current && t.unobserve(e.current);
                }
              );
            }
          }, []);
        })(M);
        const D = (0, s.useCallback)(
          (e) => {
            E?.({ x: e[0], y: e[1], zoom: e[2] }),
              _ || k.setState({ transform: e });
          },
          [E, _],
        );
        return (
          (0, s.useEffect)(() => {
            if (M.current) {
              O.current = (0, i.kO)({
                domNode: M.current,
                minZoom: f,
                maxZoom: p,
                translateExtent: h,
                viewport: d,
                paneClickDistance: C,
                onDraggingChange: (e) => k.setState({ paneDragging: e }),
                onPanZoomStart: (e, t) => {
                  const { onViewportChangeStart: n, onMoveStart: o } =
                    k.getState();
                  o?.(e, t), n?.(t);
                },
                onPanZoom: (e, t) => {
                  const { onViewportChange: n, onMove: o } = k.getState();
                  o?.(e, t), n?.(t);
                },
                onPanZoomEnd: (e, t) => {
                  const { onViewportChangeEnd: n, onMoveEnd: o } = k.getState();
                  o?.(e, t), n?.(t);
                },
              });
              const { x: e, y: t, zoom: n } = O.current.getViewport();
              return (
                k.setState({
                  panZoom: O.current,
                  transform: [e, t, n],
                  domNode: M.current.closest(".react-flow"),
                }),
                () => {
                  O.current?.destroy();
                }
              );
            }
          }, []),
          (0, s.useEffect)(() => {
            O.current?.update({
              onPaneContextMenu: e,
              zoomOnScroll: t,
              zoomOnPinch: n,
              panOnScroll: r,
              panOnScrollSpeed: a,
              panOnScrollMode: l,
              zoomOnDoubleClick: c,
              panOnDrag: u,
              zoomActivationKeyPressed: A,
              preventScrolling: y,
              noPanClassName: S,
              userSelectionActive: N,
              noWheelClassName: w,
              lib: P,
              onTransformChange: D,
            });
          }, [e, t, n, r, a, l, c, u, A, y, S, N, w, P, D]),
          (0, o.jsx)("div", {
            className: "react-flow__renderer",
            ref: M,
            style: fe,
            children: v,
          })
        );
      }
      const me = (e) => ({
        userSelectionActive: e.userSelectionActive,
        userSelectionRect: e.userSelectionRect,
      });
      function ye() {
        const { userSelectionActive: e, userSelectionRect: t } = x(me, g);
        return e && t
          ? (0, o.jsx)("div", {
              className: "react-flow__selection react-flow__container",
              style: {
                width: t.width,
                height: t.height,
                transform: `translate(${t.x}px, ${t.y}px)`,
              },
            })
          : null;
      }
      const ve = (e, t) => (n) => {
          n.target === t.current && e?.(n);
        },
        xe = (e) => ({
          userSelectionActive: e.userSelectionActive,
          elementsSelectable: e.elementsSelectable,
          dragging: e.paneDragging,
        });
      function be({
        isSelecting: e,
        selectionKeyPressed: t,
        selectionMode: n = i.Qc.Full,
        panOnDrag: a,
        selectionOnDrag: l,
        onSelectionStart: c,
        onSelectionEnd: u,
        onPaneClick: d,
        onPaneContextMenu: h,
        onPaneScroll: f,
        onPaneMouseEnter: p,
        onPaneMouseMove: m,
        onPaneMouseLeave: y,
        children: v,
      }) {
        const w = (0, s.useRef)(null),
          S = b(),
          E = (0, s.useRef)(0),
          _ = (0, s.useRef)(0),
          C = (0, s.useRef)(),
          k = (0, s.useRef)(new Map()),
          {
            userSelectionActive: M,
            elementsSelectable: N,
            dragging: P,
          } = x(xe, g),
          A = N && (e || M),
          O = (0, s.useRef)(!1),
          D = (0, s.useRef)(!1),
          j = (e) => {
            O.current
              ? (O.current = !1)
              : (d?.(e),
                S.getState().resetSelectedElements(),
                S.setState({ nodesSelectionActive: !1 }));
          },
          I = f ? (e) => f(e) : void 0,
          z = !0 === a || (Array.isArray(a) && a.includes(0));
        return (0, o.jsxs)("div", {
          className: r([
            "react-flow__pane",
            { draggable: z, dragging: P, selection: e },
          ]),
          onClick: A ? void 0 : ve(j, w),
          onContextMenu: ve((e) => {
            Array.isArray(a) && a?.includes(2) ? e.preventDefault() : h?.(e);
          }, w),
          onWheel: ve(I, w),
          onPointerEnter: A ? void 0 : p,
          onPointerDown: A
            ? (t) => {
                const {
                  resetSelectedElements: n,
                  domNode: o,
                  edgeLookup: r,
                } = S.getState();
                if (
                  ((C.current = o?.getBoundingClientRect()),
                  !N ||
                    !e ||
                    0 !== t.button ||
                    t.target !== w.current ||
                    !C.current)
                )
                  return;
                t.target?.setPointerCapture?.(t.pointerId),
                  (D.current = !0),
                  (O.current = !1),
                  (k.current = new Map());
                for (const [e, t] of r)
                  k.current.set(
                    t.source,
                    k.current.get(t.source)?.add(e) || new Set([e]),
                  ),
                    k.current.set(
                      t.target,
                      k.current.get(t.target)?.add(e) || new Set([e]),
                    );
                const { x: s, y: a } = (0, i.q1)(t.nativeEvent, C.current);
                n(),
                  S.setState({
                    userSelectionRect: {
                      width: 0,
                      height: 0,
                      startX: s,
                      startY: a,
                      x: s,
                      y: a,
                    },
                  }),
                  c?.(t);
              }
            : m,
          onPointerMove: A
            ? (e) => {
                const {
                  userSelectionRect: t,
                  edgeLookup: o,
                  transform: r,
                  nodeLookup: s,
                  triggerNodeChanges: a,
                  triggerEdgeChanges: l,
                } = S.getState();
                if (!C.current || !t) return;
                O.current = !0;
                const { x: c, y: u } = (0, i.q1)(e.nativeEvent, C.current),
                  { startX: d, startY: h } = t,
                  f = {
                    startX: d,
                    startY: h,
                    x: c < d ? c : d,
                    y: u < h ? u : h,
                    width: Math.abs(c - d),
                    height: Math.abs(u - h),
                  },
                  p = (0, i.U$)(s, f, r, n === i.Qc.Partial, !0),
                  g = new Set(),
                  m = new Set();
                for (const e of p) {
                  m.add(e.id);
                  const t = k.current.get(e.id);
                  if (t) for (const e of t) g.add(e);
                }
                if (E.current !== m.size) {
                  E.current = m.size;
                  a(J(s, m, !0));
                }
                if (_.current !== g.size) {
                  _.current = g.size;
                  l(J(o, g));
                }
                S.setState({
                  userSelectionRect: f,
                  userSelectionActive: !0,
                  nodesSelectionActive: !1,
                });
              }
            : m,
          onPointerUp: A
            ? (e) => {
                if (0 !== e.button || !D.current) return;
                e.target?.releasePointerCapture?.(e.pointerId);
                const { userSelectionRect: n } = S.getState();
                !M && n && e.target === w.current && j?.(e),
                  E.current > 0 && S.setState({ nodesSelectionActive: !0 }),
                  S.setState({
                    userSelectionActive: !1,
                    userSelectionRect: null,
                  }),
                  (E.current = 0),
                  (_.current = 0),
                  u?.(e),
                  (t || l) && (O.current = !1),
                  (D.current = !1);
              }
            : void 0,
          onPointerLeave: y,
          ref: w,
          style: fe,
          children: [v, (0, o.jsx)(ye, {})],
        });
      }
      function we({ id: e, store: t, unselect: n = !1, nodeRef: o }) {
        const {
            addSelectedNodes: r,
            unselectNodesAndEdges: s,
            multiSelectionActive: a,
            nodeLookup: l,
            onError: c,
          } = t.getState(),
          u = l.get(e);
        u
          ? (t.setState({ nodesSelectionActive: !1 }),
            u.selected
              ? (n || (u.selected && a)) &&
                (s({ nodes: [u], edges: [] }),
                requestAnimationFrame(() => o?.current?.blur()))
              : r([e]))
          : c?.("012", i.xc.error012(e));
      }
      function Se({
        nodeRef: e,
        disabled: t = !1,
        noDragClassName: n,
        handleSelector: o,
        nodeId: r,
        isSelectable: a,
        nodeClickDistance: l,
      }) {
        const c = b(),
          [u, d] = (0, s.useState)(!1),
          h = (0, s.useRef)();
        return (
          (0, s.useEffect)(() => {
            h.current = (0, i.I$)({
              getStoreItems: () => c.getState(),
              onNodeMouseDown: (t) => {
                we({ id: t, store: c, nodeRef: e });
              },
              onDragStart: () => {
                d(!0);
              },
              onDragStop: () => {
                d(!1);
              },
            });
          }, []),
          (0, s.useEffect)(() => {
            if (t) h.current?.destroy();
            else if (e.current)
              return (
                h.current?.update({
                  noDragClassName: n,
                  handleSelector: o,
                  domNode: e.current,
                  isSelectable: a,
                  nodeId: r,
                  nodeClickDistance: l,
                }),
                () => {
                  h.current?.destroy();
                }
              );
          }, [n, o, t, a, e, r]),
          u
        );
      }
      function Ee() {
        const e = b();
        return (0, s.useCallback)((t) => {
          const {
              nodeExtent: n,
              snapToGrid: o,
              snapGrid: r,
              nodesDraggable: s,
              onError: a,
              updateNodePositions: l,
              nodeLookup: c,
              nodeOrigin: u,
            } = e.getState(),
            d = new Map(),
            h = (
              (e) => (t) =>
                t.selected && (t.draggable || (e && void 0 === t.draggable))
            )(s),
            f = o ? r[0] : 5,
            p = o ? r[1] : 5,
            g = t.direction.x * f * t.factor,
            m = t.direction.y * p * t.factor;
          for (const [, e] of c) {
            if (!h(e)) continue;
            let t = {
              x: e.internals.positionAbsolute.x + g,
              y: e.internals.positionAbsolute.y + m,
            };
            o && (t = (0, i.s_)(t, r));
            const { position: s, positionAbsolute: l } = (0, i.aE)({
              nodeId: e.id,
              nextPosition: t,
              nodeLookup: c,
              nodeExtent: n,
              nodeOrigin: u,
              onError: a,
            });
            (e.position = s),
              (e.internals.positionAbsolute = l),
              d.set(e.id, e);
          }
          l(d);
        }, []);
      }
      const _e = (0, s.createContext)(null),
        Ce = _e.Provider;
      _e.Consumer;
      const ke = () => (0, s.useContext)(_e),
        Me = (e) => ({
          connectOnClick: e.connectOnClick,
          noPanClassName: e.noPanClassName,
          rfId: e.rfId,
        });
      const Ne = (0, s.memo)(
        oe(function (
          {
            type: e = "source",
            position: t = i.yX.Top,
            isValidConnection: n,
            isConnectable: s = !0,
            isConnectableStart: a = !0,
            isConnectableEnd: l = !0,
            id: c,
            onConnect: u,
            children: d,
            className: h,
            onMouseDown: f,
            onTouchStart: p,
            ...m
          },
          y,
        ) {
          const v = c || null,
            w = "target" === e,
            S = b(),
            E = ke(),
            { connectOnClick: _, noPanClassName: C, rfId: k } = x(Me, g),
            {
              connectingFrom: M,
              connectingTo: N,
              clickConnecting: P,
              isPossibleEndHandle: A,
              connectionInProcess: O,
              valid: D,
            } = x(
              ((e, t, n) => (o) => {
                const {
                    connectionClickStartHandle: r,
                    connectionMode: s,
                    connection: a,
                  } = o,
                  { fromHandle: l, toHandle: c, isValid: u } = a,
                  d = c?.nodeId === e && c?.id === t && c?.type === n;
                return {
                  connectingFrom:
                    l?.nodeId === e && l?.id === t && l?.type === n,
                  connectingTo: d,
                  clickConnecting:
                    r?.nodeId === e && r?.id === t && r?.type === n,
                  isPossibleEndHandle:
                    s === i.WZ.Strict
                      ? l?.type !== n
                      : e !== l?.nodeId || t !== l?.id,
                  connectionInProcess: !!l,
                  valid: d && u,
                };
              })(E, v, e),
              g,
            );
          E || S.getState().onError?.("010", i.xc.error010());
          const j = (e) => {
              const {
                  defaultEdgeOptions: t,
                  onConnect: n,
                  hasDefaultEdges: o,
                } = S.getState(),
                r = { ...t, ...e };
              if (o) {
                const { edges: e, setEdges: t } = S.getState();
                t((0, i.rN)(r, e));
              }
              n?.(r), u?.(r);
            },
            I = (e) => {
              if (!E) return;
              const t = (0, i.Er)(e.nativeEvent);
              if (a && ((t && 0 === e.button) || !t)) {
                const t = S.getState();
                i.aQ.onPointerDown(e.nativeEvent, {
                  autoPanOnConnect: t.autoPanOnConnect,
                  connectionMode: t.connectionMode,
                  connectionRadius: t.connectionRadius,
                  domNode: t.domNode,
                  nodeLookup: t.nodeLookup,
                  lib: t.lib,
                  isTarget: w,
                  handleId: v,
                  nodeId: E,
                  flowId: t.rfId,
                  panBy: t.panBy,
                  cancelConnection: t.cancelConnection,
                  onConnectStart: t.onConnectStart,
                  onConnectEnd: t.onConnectEnd,
                  updateConnection: t.updateConnection,
                  onConnect: j,
                  isValidConnection: n || t.isValidConnection,
                  getTransform: () => S.getState().transform,
                  getFromHandle: () => S.getState().connection.fromHandle,
                  autoPanSpeed: t.autoPanSpeed,
                });
              }
              t ? f?.(e) : p?.(e);
            };
          return (0, o.jsx)("div", {
            "data-handleid": v,
            "data-nodeid": E,
            "data-handlepos": t,
            "data-id": `${k}-${E}-${v}-${e}`,
            className: r([
              "react-flow__handle",
              `react-flow__handle-${t}`,
              "nodrag",
              C,
              h,
              {
                source: !w,
                target: w,
                connectable: s,
                connectablestart: a,
                connectableend: l,
                clickconnecting: P,
                connectingfrom: M,
                connectingto: N,
                valid: D,
                connectionindicator: s && (!O || A) && (O ? l : a),
              },
            ]),
            onMouseDown: I,
            onTouchStart: I,
            onClick: _
              ? (t) => {
                  const {
                    onClickConnectStart: o,
                    onClickConnectEnd: r,
                    connectionClickStartHandle: s,
                    connectionMode: l,
                    isValidConnection: c,
                    lib: u,
                    rfId: d,
                    nodeLookup: h,
                    connection: f,
                  } = S.getState();
                  if (!E || (!s && !a)) return;
                  if (!s)
                    return (
                      o?.(t.nativeEvent, {
                        nodeId: E,
                        handleId: v,
                        handleType: e,
                      }),
                      void S.setState({
                        connectionClickStartHandle: {
                          nodeId: E,
                          type: e,
                          id: v,
                        },
                      })
                    );
                  const p = (0, i.oj)(t.target),
                    g = n || c,
                    { connection: m, isValid: y } = i.aQ.isValid(
                      t.nativeEvent,
                      {
                        handle: { nodeId: E, id: v, type: e },
                        connectionMode: l,
                        fromNodeId: s.nodeId,
                        fromHandleId: s.id || null,
                        fromType: s.type,
                        isValidConnection: g,
                        flowId: d,
                        doc: p,
                        lib: u,
                        nodeLookup: h,
                      },
                    );
                  y && m && j(m);
                  const x = structuredClone(f);
                  delete x.inProgress,
                    (x.toPosition = x.toHandle ? x.toHandle.position : null),
                    r?.(t, x),
                    S.setState({ connectionClickStartHandle: null });
                }
              : void 0,
            ref: y,
            ...m,
            children: d,
          });
        }),
      );
      const Pe = {
          ArrowUp: { x: 0, y: -1 },
          ArrowDown: { x: 0, y: 1 },
          ArrowLeft: { x: -1, y: 0 },
          ArrowRight: { x: 1, y: 0 },
        },
        Ae = {
          input: function ({
            data: e,
            isConnectable: t,
            sourcePosition: n = i.yX.Bottom,
          }) {
            return (0, o.jsxs)(o.Fragment, {
              children: [
                e?.label,
                (0, o.jsx)(Ne, {
                  type: "source",
                  position: n,
                  isConnectable: t,
                }),
              ],
            });
          },
          default: function ({
            data: e,
            isConnectable: t,
            targetPosition: n = i.yX.Top,
            sourcePosition: r = i.yX.Bottom,
          }) {
            return (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(Ne, {
                  type: "target",
                  position: n,
                  isConnectable: t,
                }),
                e?.label,
                (0, o.jsx)(Ne, {
                  type: "source",
                  position: r,
                  isConnectable: t,
                }),
              ],
            });
          },
          output: function ({
            data: e,
            isConnectable: t,
            targetPosition: n = i.yX.Top,
          }) {
            return (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(Ne, {
                  type: "target",
                  position: n,
                  isConnectable: t,
                }),
                e?.label,
              ],
            });
          },
          group: function () {
            return null;
          },
        };
      const Oe = (e) => {
        const {
          width: t,
          height: n,
          x: o,
          y: r,
        } = (0, i.aZ)(e.nodeLookup, { filter: (e) => !!e.selected });
        return {
          width: (0, i.kf)(t) ? t : null,
          height: (0, i.kf)(n) ? n : null,
          userSelectionActive: e.userSelectionActive,
          transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`,
        };
      };
      function De({
        onSelectionContextMenu: e,
        noPanClassName: t,
        disableKeyboardA11y: n,
      }) {
        const i = b(),
          {
            width: a,
            height: l,
            transformString: c,
            userSelectionActive: u,
          } = x(Oe, g),
          d = Ee(),
          h = (0, s.useRef)(null);
        if (
          ((0, s.useEffect)(() => {
            n || h.current?.focus({ preventScroll: !0 });
          }, [n]),
          Se({ nodeRef: h }),
          u || !a || !l)
        )
          return null;
        const f = e
          ? (t) => {
              const n = i.getState().nodes.filter((e) => e.selected);
              e(t, n);
            }
          : void 0;
        return (0, o.jsx)("div", {
          className: r([
            "react-flow__nodesselection",
            "react-flow__container",
            t,
          ]),
          style: { transform: c },
          children: (0, o.jsx)("div", {
            ref: h,
            className: "react-flow__nodesselection-rect",
            onContextMenu: f,
            tabIndex: n ? void 0 : -1,
            onKeyDown: n
              ? void 0
              : (e) => {
                  Object.prototype.hasOwnProperty.call(Pe, e.key) &&
                    (e.preventDefault(),
                    d({ direction: Pe[e.key], factor: e.shiftKey ? 4 : 1 }));
                },
            style: { width: a, height: l },
          }),
        });
      }
      const je = "undefined" != typeof window ? window : void 0,
        Ie = (e) => ({
          nodesSelectionActive: e.nodesSelectionActive,
          userSelectionActive: e.userSelectionActive,
        });
      function ze({
        children: e,
        onPaneClick: t,
        onPaneMouseEnter: n,
        onPaneMouseMove: r,
        onPaneMouseLeave: i,
        onPaneContextMenu: a,
        onPaneScroll: l,
        paneClickDistance: c,
        deleteKeyCode: u,
        selectionKeyCode: d,
        selectionOnDrag: h,
        selectionMode: f,
        onSelectionStart: p,
        onSelectionEnd: g,
        multiSelectionKeyCode: m,
        panActivationKeyCode: y,
        zoomActivationKeyCode: v,
        elementsSelectable: w,
        zoomOnScroll: S,
        zoomOnPinch: E,
        panOnScroll: _,
        panOnScrollSpeed: C,
        panOnScrollMode: k,
        zoomOnDoubleClick: M,
        panOnDrag: N,
        defaultViewport: P,
        translateExtent: A,
        minZoom: O,
        maxZoom: D,
        preventScrolling: j,
        onSelectionContextMenu: I,
        noWheelClassName: z,
        noPanClassName: B,
        disableKeyboardA11y: L,
        onViewportChange: R,
        isControlledViewport: $,
      }) {
        const { nodesSelectionActive: T, userSelectionActive: V } = x(Ie),
          H = Z(d, { target: je }),
          q = Z(y, { target: je }),
          X = q || N,
          Y = q || _,
          F = h && !0 !== X,
          K = H || V || F;
        return (
          (function ({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
            const n = b(),
              { deleteElements: o } = ce(),
              r = Z(e, de),
              i = Z(t, { target: he });
            (0, s.useEffect)(() => {
              if (r) {
                const { edges: e, nodes: t } = n.getState();
                o({ nodes: t.filter(ue), edges: e.filter(ue) }),
                  n.setState({ nodesSelectionActive: !1 });
              }
            }, [r]),
              (0, s.useEffect)(() => {
                n.setState({ multiSelectionActive: i });
              }, [i]);
          })({ deleteKeyCode: u, multiSelectionKeyCode: m }),
          (0, o.jsx)(ge, {
            onPaneContextMenu: a,
            elementsSelectable: w,
            zoomOnScroll: S,
            zoomOnPinch: E,
            panOnScroll: Y,
            panOnScrollSpeed: C,
            panOnScrollMode: k,
            zoomOnDoubleClick: M,
            panOnDrag: !H && X,
            defaultViewport: P,
            translateExtent: A,
            minZoom: O,
            maxZoom: D,
            zoomActivationKeyCode: v,
            preventScrolling: j,
            noWheelClassName: z,
            noPanClassName: B,
            onViewportChange: R,
            isControlledViewport: $,
            paneClickDistance: c,
            children: (0, o.jsxs)(be, {
              onSelectionStart: p,
              onSelectionEnd: g,
              onPaneClick: t,
              onPaneMouseEnter: n,
              onPaneMouseMove: r,
              onPaneMouseLeave: i,
              onPaneContextMenu: a,
              onPaneScroll: l,
              panOnDrag: X,
              isSelecting: !!K,
              selectionMode: f,
              selectionKeyPressed: H,
              selectionOnDrag: F,
              children: [
                e,
                T &&
                  (0, o.jsx)(De, {
                    onSelectionContextMenu: I,
                    noPanClassName: B,
                    disableKeyboardA11y: L,
                  }),
              ],
            }),
          })
        );
      }
      ze.displayName = "FlowRenderer";
      const Be = (0, s.memo)(ze);
      function Le(e) {
        return x(
          (0, s.useCallback)(
            (
              (e) => (t) =>
                e
                  ? (0, i.U$)(
                      t.nodeLookup,
                      { x: 0, y: 0, width: t.width, height: t.height },
                      t.transform,
                      !0,
                    ).map((e) => e.id)
                  : Array.from(t.nodeLookup.keys())
            )(e),
            [e],
          ),
          g,
        );
      }
      const Re = (e) => e.updateNodeInternals;
      function $e({
        id: e,
        onClick: t,
        onMouseEnter: n,
        onMouseMove: a,
        onMouseLeave: l,
        onContextMenu: c,
        onDoubleClick: u,
        nodesDraggable: d,
        elementsSelectable: h,
        nodesConnectable: f,
        nodesFocusable: p,
        resizeObserver: m,
        noDragClassName: y,
        noPanClassName: v,
        disableKeyboardA11y: w,
        rfId: S,
        nodeTypes: _,
        nodeExtent: C,
        nodeClickDistance: k,
        onError: M,
      }) {
        const {
          node: N,
          internals: P,
          isParent: A,
        } = x((t) => {
          const n = t.nodeLookup.get(e),
            o = t.parentLookup.has(e);
          return { node: n, internals: n.internals, isParent: o };
        }, g);
        let O = N.type || "default",
          D = _?.[O] || Ae[O];
        void 0 === D &&
          (M?.("003", i.xc.error003(O)), (O = "default"), (D = Ae.default));
        const j = !!(N.draggable || (d && void 0 === N.draggable)),
          I = !!(N.selectable || (h && void 0 === N.selectable)),
          z = !!(N.connectable || (f && void 0 === N.connectable)),
          B = !!(N.focusable || (p && void 0 === N.focusable)),
          L = b(),
          R = (0, i.QE)(N),
          $ = (function ({
            node: e,
            nodeType: t,
            hasDimensions: n,
            resizeObserver: o,
          }) {
            const r = b(),
              i = (0, s.useRef)(null),
              a = (0, s.useRef)(null),
              l = (0, s.useRef)(e.sourcePosition),
              c = (0, s.useRef)(e.targetPosition),
              u = (0, s.useRef)(t),
              d = n && !!e.internals.handleBounds;
            return (
              (0, s.useEffect)(() => {
                !i.current ||
                  e.hidden ||
                  (d && a.current === i.current) ||
                  (a.current && o?.unobserve(a.current),
                  o?.observe(i.current),
                  (a.current = i.current));
              }, [d, e.hidden]),
              (0, s.useEffect)(
                () => () => {
                  a.current && (o?.unobserve(a.current), (a.current = null));
                },
                [],
              ),
              (0, s.useEffect)(() => {
                if (i.current) {
                  const n = u.current !== t,
                    o = l.current !== e.sourcePosition,
                    s = c.current !== e.targetPosition;
                  (n || o || s) &&
                    ((u.current = t),
                    (l.current = e.sourcePosition),
                    (c.current = e.targetPosition),
                    r
                      .getState()
                      .updateNodeInternals(
                        new Map([
                          [
                            e.id,
                            { id: e.id, nodeElement: i.current, force: !0 },
                          ],
                        ]),
                      ));
                }
              }, [e.id, t, e.sourcePosition, e.targetPosition]),
              i
            );
          })({ node: N, nodeType: O, hasDimensions: R, resizeObserver: m }),
          T = Se({
            nodeRef: $,
            disabled: N.hidden || !j,
            noDragClassName: y,
            handleSelector: N.dragHandle,
            nodeId: e,
            isSelectable: I,
            nodeClickDistance: k,
          }),
          V = Ee();
        if (N.hidden) return null;
        const H = (0, i.uD)(N),
          q = (function (e) {
            return void 0 === e.internals.handleBounds
              ? {
                  width: e.width ?? e.initialWidth ?? e.style?.width,
                  height: e.height ?? e.initialHeight ?? e.style?.height,
                }
              : {
                  width: e.width ?? e.style?.width,
                  height: e.height ?? e.style?.height,
                };
          })(N),
          X = I || j || t || n || a || l,
          Z = n ? (e) => n(e, { ...P.userNode }) : void 0,
          Y = a ? (e) => a(e, { ...P.userNode }) : void 0,
          F = l ? (e) => l(e, { ...P.userNode }) : void 0,
          K = c ? (e) => c(e, { ...P.userNode }) : void 0,
          W = u ? (e) => u(e, { ...P.userNode }) : void 0;
        return (0, o.jsx)("div", {
          className: r([
            "react-flow__node",
            `react-flow__node-${O}`,
            { [v]: j },
            N.className,
            {
              selected: N.selected,
              selectable: I,
              parent: A,
              draggable: j,
              dragging: T,
            },
          ]),
          ref: $,
          style: {
            zIndex: P.z,
            transform: `translate(${P.positionAbsolute.x}px,${P.positionAbsolute.y}px)`,
            pointerEvents: X ? "all" : "none",
            visibility: R ? "visible" : "hidden",
            ...N.style,
            ...q,
          },
          "data-id": e,
          "data-testid": `rf__node-${e}`,
          onMouseEnter: Z,
          onMouseMove: Y,
          onMouseLeave: F,
          onContextMenu: K,
          onClick: (n) => {
            const { selectNodesOnDrag: o, nodeDragThreshold: r } = L.getState();
            I && (!o || !j || r > 0) && we({ id: e, store: L, nodeRef: $ }),
              t && t(n, { ...P.userNode });
          },
          onDoubleClick: W,
          onKeyDown: B
            ? (t) => {
                if (!(0, i.v5)(t.nativeEvent) && !w)
                  if (i.tn.includes(t.key) && I) {
                    const n = "Escape" === t.key;
                    we({ id: e, store: L, unselect: n, nodeRef: $ });
                  } else
                    j &&
                      N.selected &&
                      Object.prototype.hasOwnProperty.call(Pe, t.key) &&
                      (t.preventDefault(),
                      L.setState({
                        ariaLiveMessage: `Moved selected node ${t.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~P.positionAbsolute.x}, y: ${~~P.positionAbsolute.y}`,
                      }),
                      V({ direction: Pe[t.key], factor: t.shiftKey ? 4 : 1 }));
              }
            : void 0,
          tabIndex: B ? 0 : void 0,
          role: B ? "button" : void 0,
          "aria-describedby": w ? void 0 : `${E}-${S}`,
          "aria-label": N.ariaLabel,
          children: (0, o.jsx)(Ce, {
            value: e,
            children: (0, o.jsx)(D, {
              id: e,
              data: N.data,
              type: O,
              positionAbsoluteX: P.positionAbsolute.x,
              positionAbsoluteY: P.positionAbsolute.y,
              selected: N.selected,
              selectable: I,
              draggable: j,
              deletable: N.deletable ?? !0,
              isConnectable: z,
              sourcePosition: N.sourcePosition,
              targetPosition: N.targetPosition,
              dragging: T,
              dragHandle: N.dragHandle,
              zIndex: P.z,
              parentId: N.parentId,
              ...H,
            }),
          }),
        });
      }
      const Te = (e) => ({
        nodesDraggable: e.nodesDraggable,
        nodesConnectable: e.nodesConnectable,
        nodesFocusable: e.nodesFocusable,
        elementsSelectable: e.elementsSelectable,
        onError: e.onError,
      });
      function Ve(e) {
        const {
            nodesDraggable: t,
            nodesConnectable: n,
            nodesFocusable: r,
            elementsSelectable: i,
            onError: a,
          } = x(Te, g),
          l = Le(e.onlyRenderVisibleElements),
          c = (function () {
            const e = x(Re),
              [t] = (0, s.useState)(() =>
                "undefined" == typeof ResizeObserver
                  ? null
                  : new ResizeObserver((t) => {
                      const n = new Map();
                      t.forEach((e) => {
                        const t = e.target.getAttribute("data-id");
                        n.set(t, { id: t, nodeElement: e.target, force: !0 });
                      }),
                        e(n);
                    }),
              );
            return (
              (0, s.useEffect)(
                () => () => {
                  t?.disconnect();
                },
                [t],
              ),
              t
            );
          })();
        return (0, o.jsx)("div", {
          className: "react-flow__nodes",
          style: fe,
          children: l.map((s) =>
            (0, o.jsx)(
              $e,
              {
                id: s,
                nodeTypes: e.nodeTypes,
                nodeExtent: e.nodeExtent,
                onClick: e.onNodeClick,
                onMouseEnter: e.onNodeMouseEnter,
                onMouseMove: e.onNodeMouseMove,
                onMouseLeave: e.onNodeMouseLeave,
                onContextMenu: e.onNodeContextMenu,
                onDoubleClick: e.onNodeDoubleClick,
                noDragClassName: e.noDragClassName,
                noPanClassName: e.noPanClassName,
                rfId: e.rfId,
                disableKeyboardA11y: e.disableKeyboardA11y,
                resizeObserver: c,
                nodesDraggable: t,
                nodesConnectable: n,
                nodesFocusable: r,
                elementsSelectable: i,
                nodeClickDistance: e.nodeClickDistance,
                onError: a,
              },
              s,
            ),
          ),
        });
      }
      Ve.displayName = "NodeRenderer";
      const He = (0, s.memo)(Ve);
      const qe = {
        [i.TG.Arrow]: ({ color: e = "none", strokeWidth: t = 1 }) =>
          (0, o.jsx)("polyline", {
            style: { stroke: e, strokeWidth: t },
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none",
            points: "-5,-4 0,0 -5,4",
          }),
        [i.TG.ArrowClosed]: ({ color: e = "none", strokeWidth: t = 1 }) =>
          (0, o.jsx)("polyline", {
            style: { stroke: e, fill: e, strokeWidth: t },
            strokeLinecap: "round",
            strokeLinejoin: "round",
            points: "-5,-4 0,0 -5,4 -5,-4",
          }),
      };
      const Xe = ({
          id: e,
          type: t,
          color: n,
          width: r = 12.5,
          height: a = 12.5,
          markerUnits: l = "strokeWidth",
          strokeWidth: c,
          orient: u = "auto-start-reverse",
        }) => {
          const d = (function (e) {
            const t = b();
            return (0, s.useMemo)(
              () =>
                Object.prototype.hasOwnProperty.call(qe, e)
                  ? qe[e]
                  : (t.getState().onError?.("009", i.xc.error009(e)), null),
              [e],
            );
          })(t);
          return d
            ? (0, o.jsx)("marker", {
                className: "react-flow__arrowhead",
                id: e,
                markerWidth: `${r}`,
                markerHeight: `${a}`,
                viewBox: "-10 -10 20 20",
                markerUnits: l,
                orient: u,
                refX: "0",
                refY: "0",
                children: (0, o.jsx)(d, { color: n, strokeWidth: c }),
              })
            : null;
        },
        Ze = ({ defaultColor: e, rfId: t }) => {
          const n = x((e) => e.edges),
            r = x((e) => e.defaultEdgeOptions),
            a = (0, s.useMemo)(
              () =>
                (0, i.Hm)(n, {
                  id: t,
                  defaultColor: e,
                  defaultMarkerStart: r?.markerStart,
                  defaultMarkerEnd: r?.markerEnd,
                }),
              [n, r, t, e],
            );
          return a.length
            ? (0, o.jsx)("svg", {
                className: "react-flow__marker",
                children: (0, o.jsx)("defs", {
                  children: a.map((e) =>
                    (0, o.jsx)(
                      Xe,
                      {
                        id: e.id,
                        type: e.type,
                        color: e.color,
                        width: e.width,
                        height: e.height,
                        markerUnits: e.markerUnits,
                        strokeWidth: e.strokeWidth,
                        orient: e.orient,
                      },
                      e.id,
                    ),
                  ),
                }),
              })
            : null;
        };
      Ze.displayName = "MarkerDefinitions";
      var Ye = (0, s.memo)(Ze);
      function Fe({
        x: e,
        y: t,
        label: n,
        labelStyle: i = {},
        labelShowBg: a = !0,
        labelBgStyle: l = {},
        labelBgPadding: c = [2, 4],
        labelBgBorderRadius: u = 2,
        children: d,
        className: h,
        ...f
      }) {
        const [p, g] = (0, s.useState)({ x: 1, y: 0, width: 0, height: 0 }),
          m = r(["react-flow__edge-textwrapper", h]),
          y = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            if (y.current) {
              const e = y.current.getBBox();
              g({ x: e.x, y: e.y, width: e.width, height: e.height });
            }
          }, [n]),
          void 0 !== n && n
            ? (0, o.jsxs)("g", {
                transform: `translate(${e - p.width / 2} ${t - p.height / 2})`,
                className: m,
                visibility: p.width ? "visible" : "hidden",
                ...f,
                children: [
                  a &&
                    (0, o.jsx)("rect", {
                      width: p.width + 2 * c[0],
                      x: -c[0],
                      y: -c[1],
                      height: p.height + 2 * c[1],
                      className: "react-flow__edge-textbg",
                      style: l,
                      rx: u,
                      ry: u,
                    }),
                  (0, o.jsx)("text", {
                    className: "react-flow__edge-text",
                    y: p.height / 2,
                    dy: "0.3em",
                    ref: y,
                    style: i,
                    children: n,
                  }),
                  d,
                ],
              })
            : null
        );
      }
      Fe.displayName = "EdgeText";
      const Ke = (0, s.memo)(Fe);
      function We({
        path: e,
        labelX: t,
        labelY: n,
        label: s,
        labelStyle: a,
        labelShowBg: l,
        labelBgStyle: c,
        labelBgPadding: u,
        labelBgBorderRadius: d,
        interactionWidth: h = 20,
        ...f
      }) {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("path", {
              ...f,
              d: e,
              fill: "none",
              className: r(["react-flow__edge-path", f.className]),
            }),
            h &&
              (0, o.jsx)("path", {
                d: e,
                fill: "none",
                strokeOpacity: 0,
                strokeWidth: h,
                className: "react-flow__edge-interaction",
              }),
            s && (0, i.kf)(t) && (0, i.kf)(n)
              ? (0, o.jsx)(Ke, {
                  x: t,
                  y: n,
                  label: s,
                  labelStyle: a,
                  labelShowBg: l,
                  labelBgStyle: c,
                  labelBgPadding: u,
                  labelBgBorderRadius: d,
                })
              : null,
          ],
        });
      }
      function Ge({ pos: e, x1: t, y1: n, x2: o, y2: r }) {
        return e === i.yX.Left || e === i.yX.Right
          ? [0.5 * (t + o), n]
          : [t, 0.5 * (n + r)];
      }
      function Ue({
        sourceX: e,
        sourceY: t,
        sourcePosition: n = i.yX.Bottom,
        targetX: o,
        targetY: r,
        targetPosition: s = i.yX.Top,
      }) {
        const [a, l] = Ge({ pos: n, x1: e, y1: t, x2: o, y2: r }),
          [c, u] = Ge({ pos: s, x1: o, y1: r, x2: e, y2: t }),
          [d, h, f, p] = (0, i.e_)({
            sourceX: e,
            sourceY: t,
            targetX: o,
            targetY: r,
            sourceControlX: a,
            sourceControlY: l,
            targetControlX: c,
            targetControlY: u,
          });
        return [`M${e},${t} C${a},${l} ${c},${u} ${o},${r}`, d, h, f, p];
      }
      function Qe(e) {
        return (0, s.memo)(
          ({
            id: t,
            sourceX: n,
            sourceY: r,
            targetX: s,
            targetY: a,
            sourcePosition: l = i.yX.Bottom,
            targetPosition: c = i.yX.Top,
            label: u,
            labelStyle: d,
            labelShowBg: h,
            labelBgStyle: f,
            labelBgPadding: p,
            labelBgBorderRadius: g,
            style: m,
            markerEnd: y,
            markerStart: v,
            interactionWidth: x,
          }) => {
            const [b, w, S] = Ue({
                sourceX: n,
                sourceY: r,
                sourcePosition: l,
                targetX: s,
                targetY: a,
                targetPosition: c,
              }),
              E = e.isInternal ? void 0 : t;
            return (0, o.jsx)(We, {
              id: E,
              path: b,
              labelX: w,
              labelY: S,
              label: u,
              labelStyle: d,
              labelShowBg: h,
              labelBgStyle: f,
              labelBgPadding: p,
              labelBgBorderRadius: g,
              style: m,
              markerEnd: y,
              markerStart: v,
              interactionWidth: x,
            });
          },
        );
      }
      const Je = Qe({ isInternal: !1 }),
        et = Qe({ isInternal: !0 });
      function tt(e) {
        return (0, s.memo)(
          ({
            id: t,
            sourceX: n,
            sourceY: r,
            targetX: s,
            targetY: a,
            label: l,
            labelStyle: c,
            labelShowBg: u,
            labelBgStyle: d,
            labelBgPadding: h,
            labelBgBorderRadius: f,
            style: p,
            sourcePosition: g = i.yX.Bottom,
            targetPosition: m = i.yX.Top,
            markerEnd: y,
            markerStart: v,
            pathOptions: x,
            interactionWidth: b,
          }) => {
            const [w, S, E] = (0, i.oN)({
                sourceX: n,
                sourceY: r,
                sourcePosition: g,
                targetX: s,
                targetY: a,
                targetPosition: m,
                borderRadius: x?.borderRadius,
                offset: x?.offset,
              }),
              _ = e.isInternal ? void 0 : t;
            return (0, o.jsx)(We, {
              id: _,
              path: w,
              labelX: S,
              labelY: E,
              label: l,
              labelStyle: c,
              labelShowBg: u,
              labelBgStyle: d,
              labelBgPadding: h,
              labelBgBorderRadius: f,
              style: p,
              markerEnd: y,
              markerStart: v,
              interactionWidth: b,
            });
          },
        );
      }
      (Je.displayName = "SimpleBezierEdge"),
        (et.displayName = "SimpleBezierEdgeInternal");
      const nt = tt({ isInternal: !1 }),
        ot = tt({ isInternal: !0 });
      function rt(e) {
        return (0, s.memo)(({ id: t, ...n }) => {
          const r = e.isInternal ? void 0 : t;
          return (0, o.jsx)(nt, {
            ...n,
            id: r,
            pathOptions: (0, s.useMemo)(
              () => ({ borderRadius: 0, offset: n.pathOptions?.offset }),
              [n.pathOptions?.offset],
            ),
          });
        });
      }
      (nt.displayName = "SmoothStepEdge"),
        (ot.displayName = "SmoothStepEdgeInternal");
      const it = rt({ isInternal: !1 }),
        st = rt({ isInternal: !0 });
      function at(e) {
        return (0, s.memo)(
          ({
            id: t,
            sourceX: n,
            sourceY: r,
            targetX: s,
            targetY: a,
            label: l,
            labelStyle: c,
            labelShowBg: u,
            labelBgStyle: d,
            labelBgPadding: h,
            labelBgBorderRadius: f,
            style: p,
            markerEnd: g,
            markerStart: m,
            interactionWidth: y,
          }) => {
            const [v, x, b] = (0, i.ah)({
                sourceX: n,
                sourceY: r,
                targetX: s,
                targetY: a,
              }),
              w = e.isInternal ? void 0 : t;
            return (0, o.jsx)(We, {
              id: w,
              path: v,
              labelX: x,
              labelY: b,
              label: l,
              labelStyle: c,
              labelShowBg: u,
              labelBgStyle: d,
              labelBgPadding: h,
              labelBgBorderRadius: f,
              style: p,
              markerEnd: g,
              markerStart: m,
              interactionWidth: y,
            });
          },
        );
      }
      (it.displayName = "StepEdge"), (st.displayName = "StepEdgeInternal");
      const lt = at({ isInternal: !1 }),
        ct = at({ isInternal: !0 });
      function ut(e) {
        return (0, s.memo)(
          ({
            id: t,
            sourceX: n,
            sourceY: r,
            targetX: s,
            targetY: a,
            sourcePosition: l = i.yX.Bottom,
            targetPosition: c = i.yX.Top,
            label: u,
            labelStyle: d,
            labelShowBg: h,
            labelBgStyle: f,
            labelBgPadding: p,
            labelBgBorderRadius: g,
            style: m,
            markerEnd: y,
            markerStart: v,
            pathOptions: x,
            interactionWidth: b,
          }) => {
            const [w, S, E] = (0, i.Fp)({
                sourceX: n,
                sourceY: r,
                sourcePosition: l,
                targetX: s,
                targetY: a,
                targetPosition: c,
                curvature: x?.curvature,
              }),
              _ = e.isInternal ? void 0 : t;
            return (0, o.jsx)(We, {
              id: _,
              path: w,
              labelX: S,
              labelY: E,
              label: u,
              labelStyle: d,
              labelShowBg: h,
              labelBgStyle: f,
              labelBgPadding: p,
              labelBgBorderRadius: g,
              style: m,
              markerEnd: y,
              markerStart: v,
              interactionWidth: b,
            });
          },
        );
      }
      (lt.displayName = "StraightEdge"),
        (ct.displayName = "StraightEdgeInternal");
      const dt = ut({ isInternal: !1 }),
        ht = ut({ isInternal: !0 });
      (dt.displayName = "BezierEdge"), (ht.displayName = "BezierEdgeInternal");
      const ft = {
          default: ht,
          straight: ct,
          step: st,
          smoothstep: ot,
          simplebezier: et,
        },
        pt = {
          sourceX: null,
          sourceY: null,
          targetX: null,
          targetY: null,
          sourcePosition: null,
          targetPosition: null,
        },
        gt = (e, t, n) =>
          n === i.yX.Left ? e - t : n === i.yX.Right ? e + t : e,
        mt = (e, t, n) =>
          n === i.yX.Top ? e - t : n === i.yX.Bottom ? e + t : e,
        yt = "react-flow__edgeupdater";
      function vt({
        position: e,
        centerX: t,
        centerY: n,
        radius: i = 10,
        onMouseDown: s,
        onMouseEnter: a,
        onMouseOut: l,
        type: c,
      }) {
        return (0, o.jsx)("circle", {
          onMouseDown: s,
          onMouseEnter: a,
          onMouseOut: l,
          className: r([yt, `${yt}-${c}`]),
          cx: gt(t, i, e),
          cy: mt(n, i, e),
          r: i,
          stroke: "transparent",
          fill: "transparent",
        });
      }
      function xt({
        isReconnectable: e,
        reconnectRadius: t,
        edge: n,
        sourceX: r,
        sourceY: s,
        targetX: a,
        targetY: l,
        sourcePosition: c,
        targetPosition: u,
        onReconnect: d,
        onReconnectStart: h,
        onReconnectEnd: f,
        setReconnecting: p,
        setUpdateHover: g,
      }) {
        const m = b(),
          y = (e, t) => {
            if (0 !== e.button) return;
            const {
                autoPanOnConnect: o,
                domNode: r,
                isValidConnection: s,
                connectionMode: a,
                connectionRadius: l,
                lib: c,
                onConnectStart: u,
                onConnectEnd: g,
                cancelConnection: y,
                nodeLookup: v,
                rfId: x,
                panBy: b,
                updateConnection: w,
              } = m.getState(),
              S = "target" === t.type;
            p(!0), h?.(e, n, t.type);
            i.aQ.onPointerDown(e.nativeEvent, {
              autoPanOnConnect: o,
              connectionMode: a,
              connectionRadius: l,
              domNode: r,
              handleId: t.id,
              nodeId: t.nodeId,
              nodeLookup: v,
              isTarget: S,
              edgeUpdaterType: t.type,
              lib: c,
              flowId: x,
              cancelConnection: y,
              panBy: b,
              isValidConnection: s,
              onConnect: (e) => d?.(n, e),
              onConnectStart: u,
              onConnectEnd: g,
              onReconnectEnd: (e, o) => {
                p(!1), f?.(e, n, t.type, o);
              },
              updateConnection: w,
              getTransform: () => m.getState().transform,
              getFromHandle: () => m.getState().connection.fromHandle,
            });
          },
          v = () => g(!0),
          x = () => g(!1);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (!0 === e || "source" === e) &&
              (0, o.jsx)(vt, {
                position: c,
                centerX: r,
                centerY: s,
                radius: t,
                onMouseDown: (e) =>
                  y(e, {
                    nodeId: n.target,
                    id: n.targetHandle ?? null,
                    type: "target",
                  }),
                onMouseEnter: v,
                onMouseOut: x,
                type: "source",
              }),
            (!0 === e || "target" === e) &&
              (0, o.jsx)(vt, {
                position: u,
                centerX: a,
                centerY: l,
                radius: t,
                onMouseDown: (e) =>
                  y(e, {
                    nodeId: n.source,
                    id: n.sourceHandle ?? null,
                    type: "source",
                  }),
                onMouseEnter: v,
                onMouseOut: x,
                type: "target",
              }),
          ],
        });
      }
      function bt({
        id: e,
        edgesFocusable: t,
        edgesReconnectable: n,
        elementsSelectable: a,
        onClick: l,
        onDoubleClick: c,
        onContextMenu: u,
        onMouseEnter: d,
        onMouseMove: h,
        onMouseLeave: f,
        reconnectRadius: p,
        onReconnect: m,
        onReconnectStart: y,
        onReconnectEnd: v,
        rfId: w,
        edgeTypes: S,
        noPanClassName: E,
        onError: C,
        disableKeyboardA11y: k,
      }) {
        let M = x((t) => t.edgeLookup.get(e));
        const N = x((e) => e.defaultEdgeOptions);
        M = N ? { ...N, ...M } : M;
        let P = M.type || "default",
          A = S?.[P] || ft[P];
        void 0 === A &&
          (C?.("011", i.xc.error011(P)), (P = "default"), (A = ft.default));
        const O = !!(M.focusable || (t && void 0 === M.focusable)),
          D =
            void 0 !== m &&
            (M.reconnectable || (n && void 0 === M.reconnectable)),
          j = !!(M.selectable || (a && void 0 === M.selectable)),
          I = (0, s.useRef)(null),
          [z, B] = (0, s.useState)(!1),
          [L, R] = (0, s.useState)(!1),
          $ = b(),
          {
            zIndex: T,
            sourceX: V,
            sourceY: H,
            targetX: q,
            targetY: X,
            sourcePosition: Z,
            targetPosition: Y,
          } = x(
            (0, s.useCallback)(
              (t) => {
                const n = t.nodeLookup.get(M.source),
                  o = t.nodeLookup.get(M.target);
                if (!n || !o) return { zIndex: M.zIndex, ...pt };
                const r = (0, i.b5)({
                  id: e,
                  sourceNode: n,
                  targetNode: o,
                  sourceHandle: M.sourceHandle || null,
                  targetHandle: M.targetHandle || null,
                  connectionMode: t.connectionMode,
                  onError: C,
                });
                return {
                  zIndex: (0, i.qX)({
                    selected: M.selected,
                    zIndex: M.zIndex,
                    sourceNode: n,
                    targetNode: o,
                    elevateOnSelect: t.elevateEdgesOnSelect,
                  }),
                  ...(r || pt),
                };
              },
              [
                M.source,
                M.target,
                M.sourceHandle,
                M.targetHandle,
                M.selected,
                M.zIndex,
              ],
            ),
            g,
          ),
          F = (0, s.useMemo)(
            () =>
              M.markerStart ? `url('#${(0, i.aW)(M.markerStart, w)}')` : void 0,
            [M.markerStart, w],
          ),
          K = (0, s.useMemo)(
            () =>
              M.markerEnd ? `url('#${(0, i.aW)(M.markerEnd, w)}')` : void 0,
            [M.markerEnd, w],
          );
        if (M.hidden || null === V || null === H || null === q || null === X)
          return null;
        const W = c
            ? (e) => {
                c(e, { ...M });
              }
            : void 0,
          G = u
            ? (e) => {
                u(e, { ...M });
              }
            : void 0,
          U = d
            ? (e) => {
                d(e, { ...M });
              }
            : void 0,
          Q = h
            ? (e) => {
                h(e, { ...M });
              }
            : void 0,
          J = f
            ? (e) => {
                f(e, { ...M });
              }
            : void 0;
        return (0, o.jsx)("svg", {
          style: { zIndex: T },
          children: (0, o.jsxs)("g", {
            className: r([
              "react-flow__edge",
              `react-flow__edge-${P}`,
              M.className,
              E,
              {
                selected: M.selected,
                animated: M.animated,
                inactive: !j && !l,
                updating: z,
                selectable: j,
              },
            ]),
            onClick: (t) => {
              const {
                addSelectedEdges: n,
                unselectNodesAndEdges: o,
                multiSelectionActive: r,
              } = $.getState();
              j &&
                ($.setState({ nodesSelectionActive: !1 }),
                M.selected && r
                  ? (o({ nodes: [], edges: [M] }), I.current?.blur())
                  : n([e])),
                l && l(t, M);
            },
            onDoubleClick: W,
            onContextMenu: G,
            onMouseEnter: U,
            onMouseMove: Q,
            onMouseLeave: J,
            onKeyDown: O
              ? (t) => {
                  if (!k && i.tn.includes(t.key) && j) {
                    const { unselectNodesAndEdges: n, addSelectedEdges: o } =
                      $.getState();
                    "Escape" === t.key
                      ? (I.current?.blur(), n({ edges: [M] }))
                      : o([e]);
                  }
                }
              : void 0,
            tabIndex: O ? 0 : void 0,
            role: O ? "button" : "img",
            "data-id": e,
            "data-testid": `rf__edge-${e}`,
            "aria-label":
              null === M.ariaLabel
                ? void 0
                : M.ariaLabel || `Edge from ${M.source} to ${M.target}`,
            "aria-describedby": O ? `${_}-${w}` : void 0,
            ref: I,
            children: [
              !L &&
                (0, o.jsx)(A, {
                  id: e,
                  source: M.source,
                  target: M.target,
                  type: M.type,
                  selected: M.selected,
                  animated: M.animated,
                  selectable: j,
                  deletable: M.deletable ?? !0,
                  label: M.label,
                  labelStyle: M.labelStyle,
                  labelShowBg: M.labelShowBg,
                  labelBgStyle: M.labelBgStyle,
                  labelBgPadding: M.labelBgPadding,
                  labelBgBorderRadius: M.labelBgBorderRadius,
                  sourceX: V,
                  sourceY: H,
                  targetX: q,
                  targetY: X,
                  sourcePosition: Z,
                  targetPosition: Y,
                  data: M.data,
                  style: M.style,
                  sourceHandleId: M.sourceHandle,
                  targetHandleId: M.targetHandle,
                  markerStart: F,
                  markerEnd: K,
                  pathOptions: "pathOptions" in M ? M.pathOptions : void 0,
                  interactionWidth: M.interactionWidth,
                }),
              D &&
                (0, o.jsx)(xt, {
                  edge: M,
                  isReconnectable: D,
                  reconnectRadius: p,
                  onReconnect: m,
                  onReconnectStart: y,
                  onReconnectEnd: v,
                  sourceX: V,
                  sourceY: H,
                  targetX: q,
                  targetY: X,
                  sourcePosition: Z,
                  targetPosition: Y,
                  setUpdateHover: B,
                  setReconnecting: R,
                }),
            ],
          }),
        });
      }
      const wt = (e) => ({
        edgesFocusable: e.edgesFocusable,
        edgesReconnectable: e.edgesReconnectable,
        elementsSelectable: e.elementsSelectable,
        connectionMode: e.connectionMode,
        onError: e.onError,
      });
      function St({
        defaultMarkerColor: e,
        onlyRenderVisibleElements: t,
        rfId: n,
        edgeTypes: r,
        noPanClassName: a,
        onReconnect: l,
        onEdgeContextMenu: c,
        onEdgeMouseEnter: u,
        onEdgeMouseMove: d,
        onEdgeMouseLeave: h,
        onEdgeClick: f,
        reconnectRadius: p,
        onEdgeDoubleClick: m,
        onReconnectStart: y,
        onReconnectEnd: v,
        disableKeyboardA11y: b,
      }) {
        const {
            edgesFocusable: w,
            edgesReconnectable: S,
            elementsSelectable: E,
            onError: _,
          } = x(wt, g),
          C =
            ((k = t),
            x(
              (0, s.useCallback)(
                (e) => {
                  if (!k) return e.edges.map((e) => e.id);
                  const t = [];
                  if (e.width && e.height)
                    for (const n of e.edges) {
                      const o = e.nodeLookup.get(n.source),
                        r = e.nodeLookup.get(n.target);
                      o &&
                        r &&
                        (0, i.uj)({
                          sourceNode: o,
                          targetNode: r,
                          width: e.width,
                          height: e.height,
                          transform: e.transform,
                        }) &&
                        t.push(n.id);
                    }
                  return t;
                },
                [k],
              ),
              g,
            ));
        var k;
        return (0, o.jsxs)("div", {
          className: "react-flow__edges",
          children: [
            (0, o.jsx)(Ye, { defaultColor: e, rfId: n }),
            C.map((e) =>
              (0, o.jsx)(
                bt,
                {
                  id: e,
                  edgesFocusable: w,
                  edgesReconnectable: S,
                  elementsSelectable: E,
                  noPanClassName: a,
                  onReconnect: l,
                  onContextMenu: c,
                  onMouseEnter: u,
                  onMouseMove: d,
                  onMouseLeave: h,
                  onClick: f,
                  reconnectRadius: p,
                  onDoubleClick: m,
                  onReconnectStart: y,
                  onReconnectEnd: v,
                  rfId: n,
                  onError: _,
                  edgeTypes: r,
                  disableKeyboardA11y: b,
                },
                e,
              ),
            ),
          ],
        });
      }
      St.displayName = "EdgeRenderer";
      const Et = (0, s.memo)(St),
        _t = (e) =>
          `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
      function Ct({ children: e }) {
        const t = x(_t);
        return (0, o.jsx)("div", {
          className:
            "react-flow__viewport xyflow__viewport react-flow__container",
          style: { transform: t },
          children: e,
        });
      }
      const kt = (e) => e.panZoom?.syncViewport;
      function Mt(e) {
        return e.connection.inProgress
          ? { ...e.connection, to: (0, i.Ff)(e.connection.to, e.transform) }
          : { ...e.connection };
      }
      function Nt(e) {
        const t = (function (e) {
          if (e)
            return (t) => {
              const n = Mt(t);
              return e(n);
            };
          return Mt;
        })(e);
        return x(t, g);
      }
      const Pt = (e) => ({
        nodesConnectable: e.nodesConnectable,
        isValid: e.connection.isValid,
        inProgress: e.connection.inProgress,
        width: e.width,
        height: e.height,
      });
      function At({ containerStyle: e, style: t, type: n, component: s }) {
        const {
          nodesConnectable: a,
          width: l,
          height: c,
          isValid: u,
          inProgress: d,
        } = x(Pt, g);
        return !!(l && a && d)
          ? (0, o.jsx)("svg", {
              style: e,
              width: l,
              height: c,
              className: "react-flow__connectionline react-flow__container",
              children: (0, o.jsx)("g", {
                className: r(["react-flow__connection", (0, i.HF)(u)]),
                children: (0, o.jsx)(Ot, {
                  style: t,
                  type: n,
                  CustomComponent: s,
                  isValid: u,
                }),
              }),
            })
          : null;
      }
      const Ot = ({
        style: e,
        type: t = i.Do.Bezier,
        CustomComponent: n,
        isValid: r,
      }) => {
        const {
          inProgress: s,
          from: a,
          fromNode: l,
          fromHandle: c,
          fromPosition: u,
          to: d,
          toNode: h,
          toHandle: f,
          toPosition: p,
        } = Nt();
        if (!s) return;
        if (n)
          return (0, o.jsx)(n, {
            connectionLineType: t,
            connectionLineStyle: e,
            fromNode: l,
            fromHandle: c,
            fromX: a.x,
            fromY: a.y,
            toX: d.x,
            toY: d.y,
            fromPosition: u,
            toPosition: p,
            connectionStatus: (0, i.HF)(r),
            toNode: h,
            toHandle: f,
          });
        let g = "";
        const m = {
          sourceX: a.x,
          sourceY: a.y,
          sourcePosition: u,
          targetX: d.x,
          targetY: d.y,
          targetPosition: p,
        };
        switch (t) {
          case i.Do.Bezier:
            [g] = (0, i.Fp)(m);
            break;
          case i.Do.SimpleBezier:
            [g] = Ue(m);
            break;
          case i.Do.Step:
            [g] = (0, i.oN)({ ...m, borderRadius: 0 });
            break;
          case i.Do.SmoothStep:
            [g] = (0, i.oN)(m);
            break;
          default:
            [g] = (0, i.ah)(m);
        }
        return (0, o.jsx)("path", {
          d: g,
          fill: "none",
          className: "react-flow__connection-path",
          style: e,
        });
      };
      Ot.displayName = "ConnectionLine";
      const Dt = {};
      function jt(e = Dt) {
        (0, s.useRef)(e), b();
        (0, s.useEffect)(() => {
          0;
        }, [e]);
      }
      function It({
        nodeTypes: e,
        edgeTypes: t,
        onInit: n,
        onNodeClick: r,
        onEdgeClick: i,
        onNodeDoubleClick: a,
        onEdgeDoubleClick: l,
        onNodeMouseEnter: c,
        onNodeMouseMove: u,
        onNodeMouseLeave: d,
        onNodeContextMenu: h,
        onSelectionContextMenu: f,
        onSelectionStart: p,
        onSelectionEnd: g,
        connectionLineType: m,
        connectionLineStyle: y,
        connectionLineComponent: v,
        connectionLineContainerStyle: w,
        selectionKeyCode: S,
        selectionOnDrag: E,
        selectionMode: _,
        multiSelectionKeyCode: C,
        panActivationKeyCode: k,
        zoomActivationKeyCode: M,
        deleteKeyCode: N,
        onlyRenderVisibleElements: P,
        elementsSelectable: A,
        defaultViewport: O,
        translateExtent: D,
        minZoom: j,
        maxZoom: I,
        preventScrolling: z,
        defaultMarkerColor: B,
        zoomOnScroll: L,
        zoomOnPinch: R,
        panOnScroll: $,
        panOnScrollSpeed: T,
        panOnScrollMode: V,
        zoomOnDoubleClick: H,
        panOnDrag: q,
        onPaneClick: X,
        onPaneMouseEnter: Z,
        onPaneMouseMove: Y,
        onPaneMouseLeave: F,
        onPaneScroll: K,
        onPaneContextMenu: W,
        paneClickDistance: G,
        nodeClickDistance: U,
        onEdgeContextMenu: Q,
        onEdgeMouseEnter: J,
        onEdgeMouseMove: ee,
        onEdgeMouseLeave: te,
        reconnectRadius: ne,
        onReconnect: oe,
        onReconnectStart: re,
        onReconnectEnd: ie,
        noDragClassName: se,
        noWheelClassName: ae,
        noPanClassName: le,
        disableKeyboardA11y: ue,
        nodeExtent: de,
        rfId: he,
        viewport: fe,
        onViewportChange: pe,
      }) {
        return (
          jt(e),
          jt(t),
          b(),
          (0, s.useRef)(!1),
          (0, s.useEffect)(() => {}, []),
          (function (e) {
            const t = ce(),
              n = (0, s.useRef)(!1);
            (0, s.useEffect)(() => {
              !n.current &&
                t.viewportInitialized &&
                e &&
                (setTimeout(() => e(t), 1), (n.current = !0));
            }, [e, t.viewportInitialized]);
          })(n),
          (function (e) {
            const t = x(kt),
              n = b();
            (0, s.useEffect)(() => {
              e && (t?.(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
            }, [e, t]);
          })(fe),
          (0, o.jsx)(Be, {
            onPaneClick: X,
            onPaneMouseEnter: Z,
            onPaneMouseMove: Y,
            onPaneMouseLeave: F,
            onPaneContextMenu: W,
            onPaneScroll: K,
            paneClickDistance: G,
            deleteKeyCode: N,
            selectionKeyCode: S,
            selectionOnDrag: E,
            selectionMode: _,
            onSelectionStart: p,
            onSelectionEnd: g,
            multiSelectionKeyCode: C,
            panActivationKeyCode: k,
            zoomActivationKeyCode: M,
            elementsSelectable: A,
            zoomOnScroll: L,
            zoomOnPinch: R,
            zoomOnDoubleClick: H,
            panOnScroll: $,
            panOnScrollSpeed: T,
            panOnScrollMode: V,
            panOnDrag: q,
            defaultViewport: O,
            translateExtent: D,
            minZoom: j,
            maxZoom: I,
            onSelectionContextMenu: f,
            preventScrolling: z,
            noDragClassName: se,
            noWheelClassName: ae,
            noPanClassName: le,
            disableKeyboardA11y: ue,
            onViewportChange: pe,
            isControlledViewport: !!fe,
            children: (0, o.jsxs)(Ct, {
              children: [
                (0, o.jsx)(Et, {
                  edgeTypes: t,
                  onEdgeClick: i,
                  onEdgeDoubleClick: l,
                  onReconnect: oe,
                  onReconnectStart: re,
                  onReconnectEnd: ie,
                  onlyRenderVisibleElements: P,
                  onEdgeContextMenu: Q,
                  onEdgeMouseEnter: J,
                  onEdgeMouseMove: ee,
                  onEdgeMouseLeave: te,
                  reconnectRadius: ne,
                  defaultMarkerColor: B,
                  noPanClassName: le,
                  disableKeyboardA11y: ue,
                  rfId: he,
                }),
                (0, o.jsx)(At, {
                  style: y,
                  type: m,
                  component: v,
                  containerStyle: w,
                }),
                (0, o.jsx)("div", {
                  className: "react-flow__edgelabel-renderer",
                }),
                (0, o.jsx)(He, {
                  nodeTypes: e,
                  onNodeClick: r,
                  onNodeDoubleClick: a,
                  onNodeMouseEnter: c,
                  onNodeMouseMove: u,
                  onNodeMouseLeave: d,
                  onNodeContextMenu: h,
                  nodeClickDistance: U,
                  onlyRenderVisibleElements: P,
                  noPanClassName: le,
                  noDragClassName: se,
                  disableKeyboardA11y: ue,
                  nodeExtent: de,
                  rfId: he,
                }),
                (0, o.jsx)("div", { className: "react-flow__viewport-portal" }),
              ],
            }),
          })
        );
      }
      It.displayName = "GraphView";
      const zt = (0, s.memo)(It),
        Bt = ({
          nodes: e,
          edges: t,
          defaultNodes: n,
          defaultEdges: o,
          width: r,
          height: s,
          fitView: a,
          nodeOrigin: l,
          nodeExtent: c,
        } = {}) => {
          const u = new Map(),
            d = new Map(),
            h = new Map(),
            f = new Map(),
            p = o ?? t ?? [],
            g = n ?? e ?? [],
            m = l ?? [0, 0],
            y = c ?? i.ZO;
          (0, i.qn)(h, f, p),
            (0, i.bi)(g, u, d, {
              nodeOrigin: m,
              nodeExtent: y,
              elevateNodesOnSelect: !1,
            });
          let v = [0, 0, 1];
          if (a && r && s) {
            const e = (0, i.aZ)(u, {
                filter: (e) =>
                  !(
                    (!e.width && !e.initialWidth) ||
                    (!e.height && !e.initialHeight)
                  ),
              }),
              { x: t, y: n, zoom: o } = (0, i.R4)(e, r, s, 0.5, 2, 0.1);
            v = [t, n, o];
          }
          return {
            rfId: "1",
            width: 0,
            height: 0,
            transform: v,
            nodes: g,
            nodeLookup: u,
            parentLookup: d,
            edges: p,
            edgeLookup: f,
            connectionLookup: h,
            onNodesChange: null,
            onEdgesChange: null,
            hasDefaultNodes: void 0 !== n,
            hasDefaultEdges: void 0 !== o,
            panZoom: null,
            minZoom: 0.5,
            maxZoom: 2,
            translateExtent: i.ZO,
            nodeExtent: y,
            nodesSelectionActive: !1,
            userSelectionActive: !1,
            userSelectionRect: null,
            connectionMode: i.WZ.Strict,
            domNode: null,
            paneDragging: !1,
            noPanClassName: "nopan",
            nodeOrigin: m,
            nodeDragThreshold: 1,
            snapGrid: [15, 15],
            snapToGrid: !1,
            nodesDraggable: !0,
            nodesConnectable: !0,
            nodesFocusable: !0,
            edgesFocusable: !0,
            edgesReconnectable: !0,
            elementsSelectable: !0,
            elevateNodesOnSelect: !0,
            elevateEdgesOnSelect: !1,
            fitViewOnInit: !1,
            fitViewDone: !1,
            fitViewOnInitOptions: void 0,
            selectNodesOnDrag: !0,
            multiSelectionActive: !1,
            connection: { ...i.bK },
            connectionClickStartHandle: null,
            connectOnClick: !0,
            ariaLiveMessage: "",
            autoPanOnConnect: !0,
            autoPanOnNodeDrag: !0,
            autoPanSpeed: 15,
            connectionRadius: 20,
            onError: i.KE,
            isValidConnection: void 0,
            onSelectionChangeHandlers: [],
            lib: "react",
            debug: !1,
          };
        },
        Lt = ({
          nodes: e,
          edges: t,
          defaultNodes: n,
          defaultEdges: o,
          width: r,
          height: s,
          fitView: a,
          nodeOrigin: l,
          nodeExtent: c,
        }) => {
          return (
            (u = (u, d) => ({
              ...Bt({
                nodes: e,
                edges: t,
                width: r,
                height: s,
                fitView: a,
                nodeOrigin: l,
                nodeExtent: c,
                defaultNodes: n,
                defaultEdges: o,
              }),
              setNodes: (e) => {
                const {
                  nodeLookup: t,
                  parentLookup: n,
                  nodeOrigin: o,
                  elevateNodesOnSelect: r,
                } = d();
                (0, i.bi)(e, t, n, {
                  nodeOrigin: o,
                  nodeExtent: c,
                  elevateNodesOnSelect: r,
                  checkEquality: !0,
                }),
                  u({ nodes: e });
              },
              setEdges: (e) => {
                const { connectionLookup: t, edgeLookup: n } = d();
                (0, i.qn)(t, n, e), u({ edges: e });
              },
              setDefaultNodesAndEdges: (e, t) => {
                if (e) {
                  const { setNodes: t } = d();
                  t(e), u({ hasDefaultNodes: !0 });
                }
                if (t) {
                  const { setEdges: e } = d();
                  e(t), u({ hasDefaultEdges: !0 });
                }
              },
              updateNodeInternals: (e, t = { triggerFitView: !0 }) => {
                const {
                    triggerNodeChanges: n,
                    nodeLookup: o,
                    parentLookup: r,
                    fitViewOnInit: s,
                    fitViewDone: a,
                    fitViewOnInitOptions: l,
                    domNode: c,
                    nodeOrigin: h,
                    nodeExtent: f,
                    debug: p,
                    fitViewSync: g,
                  } = d(),
                  { changes: m, updatedInternals: y } = (0, i.uL)(
                    e,
                    o,
                    r,
                    c,
                    h,
                    f,
                  );
                if (y) {
                  if (
                    ((0, i.vS)(o, r, { nodeOrigin: h, nodeExtent: f }),
                    t.triggerFitView)
                  ) {
                    let e = a;
                    !a && s && (e = g({ ...l, nodes: l?.nodes })),
                      u({ fitViewDone: e });
                  } else u({});
                  m?.length > 0 &&
                    (p && console.log("React Flow: trigger node changes", m),
                    n?.(m));
                }
              },
              updateNodePositions: (e, t = !1) => {
                const n = [],
                  o = [];
                for (const [r, i] of e) {
                  const e = !!(i?.expandParent && i?.parentId && i?.position),
                    s = {
                      id: r,
                      type: "position",
                      position: e
                        ? {
                            x: Math.max(0, i.position.x),
                            y: Math.max(0, i.position.y),
                          }
                        : i.position,
                      dragging: t,
                    };
                  e &&
                    n.push({
                      id: r,
                      parentId: i.parentId,
                      rect: {
                        ...i.internals.positionAbsolute,
                        width: i.measured.width,
                        height: i.measured.height,
                      },
                    }),
                    o.push(s);
                }
                if (n.length > 0) {
                  const { nodeLookup: e, parentLookup: t, nodeOrigin: r } = d(),
                    s = (0, i.r8)(n, e, t, r);
                  o.push(...s);
                }
                d().triggerNodeChanges(o);
              },
              triggerNodeChanges: (e) => {
                const {
                  onNodesChange: t,
                  setNodes: n,
                  nodes: o,
                  hasDefaultNodes: r,
                  debug: i,
                } = d();
                e?.length &&
                  (r && n(G(e, o)),
                  i && console.log("React Flow: trigger node changes", e),
                  t?.(e));
              },
              triggerEdgeChanges: (e) => {
                const {
                  onEdgesChange: t,
                  setEdges: n,
                  edges: o,
                  hasDefaultEdges: r,
                  debug: i,
                } = d();
                e?.length &&
                  (r && n(U(e, o)),
                  i && console.log("React Flow: trigger edge changes", e),
                  t?.(e));
              },
              addSelectedNodes: (e) => {
                const {
                  multiSelectionActive: t,
                  edgeLookup: n,
                  nodeLookup: o,
                  triggerNodeChanges: r,
                  triggerEdgeChanges: i,
                } = d();
                t
                  ? r(e.map((e) => Q(e, !0)))
                  : (r(J(o, new Set([...e]), !0)), i(J(n)));
              },
              addSelectedEdges: (e) => {
                const {
                  multiSelectionActive: t,
                  edgeLookup: n,
                  nodeLookup: o,
                  triggerNodeChanges: r,
                  triggerEdgeChanges: i,
                } = d();
                t
                  ? i(e.map((e) => Q(e, !0)))
                  : (i(J(n, new Set([...e]))), r(J(o, new Set(), !0)));
              },
              unselectNodesAndEdges: ({ nodes: e, edges: t } = {}) => {
                const {
                    edges: n,
                    nodes: o,
                    nodeLookup: r,
                    triggerNodeChanges: i,
                    triggerEdgeChanges: s,
                  } = d(),
                  a = t || n,
                  l = (e || o).map((e) => {
                    const t = r.get(e.id);
                    return t && (t.selected = !1), Q(e.id, !1);
                  }),
                  c = a.map((e) => Q(e.id, !1));
                i(l), s(c);
              },
              setMinZoom: (e) => {
                const { panZoom: t, maxZoom: n } = d();
                t?.setScaleExtent([e, n]), u({ minZoom: e });
              },
              setMaxZoom: (e) => {
                const { panZoom: t, minZoom: n } = d();
                t?.setScaleExtent([n, e]), u({ maxZoom: e });
              },
              setTranslateExtent: (e) => {
                d().panZoom?.setTranslateExtent(e), u({ translateExtent: e });
              },
              setPaneClickDistance: (e) => {
                d().panZoom?.setClickDistance(e);
              },
              resetSelectedElements: () => {
                const {
                    edges: e,
                    nodes: t,
                    triggerNodeChanges: n,
                    triggerEdgeChanges: o,
                  } = d(),
                  r = t.reduce(
                    (e, t) => (t.selected ? [...e, Q(t.id, !1)] : e),
                    [],
                  ),
                  i = e.reduce(
                    (e, t) => (t.selected ? [...e, Q(t.id, !1)] : e),
                    [],
                  );
                n(r), o(i);
              },
              setNodeExtent: (e) => {
                const {
                  nodes: t,
                  nodeLookup: n,
                  parentLookup: o,
                  nodeOrigin: r,
                  elevateNodesOnSelect: s,
                  nodeExtent: a,
                } = d();
                (e[0][0] === a[0][0] &&
                  e[0][1] === a[0][1] &&
                  e[1][0] === a[1][0] &&
                  e[1][1] === a[1][1]) ||
                  ((0, i.bi)(t, n, o, {
                    nodeOrigin: r,
                    nodeExtent: e,
                    elevateNodesOnSelect: s,
                    checkEquality: !1,
                  }),
                  u({ nodeExtent: e }));
              },
              panBy: (e) => {
                const {
                  transform: t,
                  width: n,
                  height: o,
                  panZoom: r,
                  translateExtent: s,
                } = d();
                return (0, i.No)({
                  delta: e,
                  panZoom: r,
                  transform: t,
                  translateExtent: s,
                  width: n,
                  height: o,
                });
              },
              fitView: (e) => {
                const {
                  panZoom: t,
                  width: n,
                  height: o,
                  minZoom: r,
                  maxZoom: s,
                  nodeLookup: a,
                } = d();
                if (!t) return Promise.resolve(!1);
                const l = (0, i.YV)(a, e);
                return (0, i.Pr)(
                  {
                    nodes: l,
                    width: n,
                    height: o,
                    panZoom: t,
                    minZoom: r,
                    maxZoom: s,
                  },
                  e,
                );
              },
              fitViewSync: (e) => {
                const {
                  panZoom: t,
                  width: n,
                  height: o,
                  minZoom: r,
                  maxZoom: s,
                  nodeLookup: a,
                } = d();
                if (!t) return !1;
                const l = (0, i.YV)(a, e);
                return (
                  (0, i.Pr)(
                    {
                      nodes: l,
                      width: n,
                      height: o,
                      panZoom: t,
                      minZoom: r,
                      maxZoom: s,
                    },
                    e,
                  ),
                  l.size > 0
                );
              },
              cancelConnection: () => {
                u({ connection: { ...i.bK } });
              },
              updateConnection: (e) => {
                u({ connection: e });
              },
              reset: () => u({ ...Bt() }),
            })),
            (d = Object.is),
            u ? p(u, d) : p
          );
          var u, d;
        };
      function Rt({
        initialNodes: e,
        initialEdges: t,
        defaultNodes: n,
        defaultEdges: r,
        initialWidth: i,
        initialHeight: a,
        fitView: l,
        nodeOrigin: c,
        nodeExtent: u,
        children: d,
      }) {
        const [h] = (0, s.useState)(() =>
          Lt({
            nodes: e,
            edges: t,
            defaultNodes: n,
            defaultEdges: r,
            width: i,
            height: a,
            fitView: l,
            nodeOrigin: c,
            nodeExtent: u,
          }),
        );
        return (0, o.jsx)(y, {
          value: h,
          children: (0, o.jsx)(ae, { children: d }),
        });
      }
      function $t({
        children: e,
        nodes: t,
        edges: n,
        defaultNodes: r,
        defaultEdges: i,
        width: a,
        height: l,
        fitView: c,
        nodeOrigin: u,
        nodeExtent: d,
      }) {
        return (0, s.useContext)(m)
          ? (0, o.jsx)(o.Fragment, { children: e })
          : (0, o.jsx)(Rt, {
              initialNodes: t,
              initialEdges: n,
              defaultNodes: r,
              defaultEdges: i,
              initialWidth: a,
              initialHeight: l,
              fitView: c,
              nodeOrigin: u,
              nodeExtent: d,
              children: e,
            });
      }
      const Tt = {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        zIndex: 0,
      };
      var Vt = oe(function (
        {
          nodes: e,
          edges: t,
          defaultNodes: n,
          defaultEdges: a,
          className: l,
          nodeTypes: c,
          edgeTypes: u,
          onNodeClick: d,
          onEdgeClick: h,
          onInit: f,
          onMove: p,
          onMoveStart: g,
          onMoveEnd: m,
          onConnect: y,
          onConnectStart: v,
          onConnectEnd: x,
          onClickConnectStart: b,
          onClickConnectEnd: w,
          onNodeMouseEnter: S,
          onNodeMouseMove: E,
          onNodeMouseLeave: _,
          onNodeContextMenu: C,
          onNodeDoubleClick: k,
          onNodeDragStart: N,
          onNodeDrag: P,
          onNodeDragStop: O,
          onNodesDelete: D,
          onEdgesDelete: j,
          onDelete: I,
          onSelectionChange: z,
          onSelectionDragStart: $,
          onSelectionDrag: T,
          onSelectionDragStop: V,
          onSelectionContextMenu: X,
          onSelectionStart: Z,
          onSelectionEnd: Y,
          onBeforeDelete: F,
          connectionMode: K,
          connectionLineType: W = i.Do.Bezier,
          connectionLineStyle: G,
          connectionLineComponent: U,
          connectionLineContainerStyle: Q,
          deleteKeyCode: J = "Backspace",
          selectionKeyCode: ee = "Shift",
          selectionOnDrag: te = !1,
          selectionMode: ne = i.Qc.Full,
          panActivationKeyCode: oe = "Space",
          multiSelectionKeyCode: re = (0, i.Ue)() ? "Meta" : "Control",
          zoomActivationKeyCode: ie = (0, i.Ue)() ? "Meta" : "Control",
          snapToGrid: se,
          snapGrid: ae,
          onlyRenderVisibleElements: le = !1,
          selectNodesOnDrag: ce,
          nodesDraggable: ue,
          nodesConnectable: de,
          nodesFocusable: he,
          nodeOrigin: fe = L,
          edgesFocusable: pe,
          edgesReconnectable: ge,
          elementsSelectable: me = !0,
          defaultViewport: ye = R,
          minZoom: ve = 0.5,
          maxZoom: xe = 2,
          translateExtent: be = i.ZO,
          preventScrolling: we = !0,
          nodeExtent: Se,
          defaultMarkerColor: Ee = "#b1b1b7",
          zoomOnScroll: _e = !0,
          zoomOnPinch: Ce = !0,
          panOnScroll: ke = !1,
          panOnScrollSpeed: Me = 0.5,
          panOnScrollMode: Ne = i.ny.Free,
          zoomOnDoubleClick: Pe = !0,
          panOnDrag: Ae = !0,
          onPaneClick: Oe,
          onPaneMouseEnter: De,
          onPaneMouseMove: je,
          onPaneMouseLeave: Ie,
          onPaneScroll: ze,
          onPaneContextMenu: Be,
          paneClickDistance: Le = 0,
          nodeClickDistance: Re = 0,
          children: $e,
          onReconnect: Te,
          onReconnectStart: Ve,
          onReconnectEnd: He,
          onEdgeContextMenu: qe,
          onEdgeDoubleClick: Xe,
          onEdgeMouseEnter: Ze,
          onEdgeMouseMove: Ye,
          onEdgeMouseLeave: Fe,
          reconnectRadius: Ke = 10,
          onNodesChange: We,
          onEdgesChange: Ge,
          noDragClassName: Ue = "nodrag",
          noWheelClassName: Qe = "nowheel",
          noPanClassName: Je = "nopan",
          fitView: et,
          fitViewOptions: tt,
          connectOnClick: nt,
          attributionPosition: ot,
          proOptions: rt,
          defaultEdgeOptions: it,
          elevateNodesOnSelect: st,
          elevateEdgesOnSelect: at,
          disableKeyboardA11y: lt = !1,
          autoPanOnConnect: ct,
          autoPanOnNodeDrag: ut,
          autoPanSpeed: dt,
          connectionRadius: ht,
          isValidConnection: ft,
          onError: pt,
          style: gt,
          id: mt,
          nodeDragThreshold: yt,
          viewport: vt,
          onViewportChange: xt,
          width: bt,
          height: wt,
          colorMode: St = "light",
          debug: Et,
          ..._t
        },
        Ct,
      ) {
        const kt = mt || "1",
          Mt = (function (e) {
            const [t, n] = (0, s.useState)("system" === e ? null : e);
            return (
              (0, s.useEffect)(() => {
                if ("system" !== e) return void n(e);
                const t = q(),
                  o = () => n(t?.matches ? "dark" : "light");
                return (
                  o(),
                  t?.addEventListener("change", o),
                  () => {
                    t?.removeEventListener("change", o);
                  }
                );
              }, [e]),
              null !== t ? t : q()?.matches ? "dark" : "light"
            );
          })(St);
        return (0, o.jsx)("div", {
          "data-testid": "rf__wrapper",
          ..._t,
          style: { ...gt, ...Tt },
          ref: Ct,
          className: r(["react-flow", l, Mt]),
          id: mt,
          children: (0, o.jsxs)($t, {
            nodes: e,
            edges: t,
            width: bt,
            height: wt,
            fitView: et,
            nodeOrigin: fe,
            nodeExtent: Se,
            children: [
              (0, o.jsx)(zt, {
                onInit: f,
                onNodeClick: d,
                onEdgeClick: h,
                onNodeMouseEnter: S,
                onNodeMouseMove: E,
                onNodeMouseLeave: _,
                onNodeContextMenu: C,
                onNodeDoubleClick: k,
                nodeTypes: c,
                edgeTypes: u,
                connectionLineType: W,
                connectionLineStyle: G,
                connectionLineComponent: U,
                connectionLineContainerStyle: Q,
                selectionKeyCode: ee,
                selectionOnDrag: te,
                selectionMode: ne,
                deleteKeyCode: J,
                multiSelectionKeyCode: re,
                panActivationKeyCode: oe,
                zoomActivationKeyCode: ie,
                onlyRenderVisibleElements: le,
                defaultViewport: ye,
                translateExtent: be,
                minZoom: ve,
                maxZoom: xe,
                preventScrolling: we,
                zoomOnScroll: _e,
                zoomOnPinch: Ce,
                zoomOnDoubleClick: Pe,
                panOnScroll: ke,
                panOnScrollSpeed: Me,
                panOnScrollMode: Ne,
                panOnDrag: Ae,
                onPaneClick: Oe,
                onPaneMouseEnter: De,
                onPaneMouseMove: je,
                onPaneMouseLeave: Ie,
                onPaneScroll: ze,
                onPaneContextMenu: Be,
                paneClickDistance: Le,
                nodeClickDistance: Re,
                onSelectionContextMenu: X,
                onSelectionStart: Z,
                onSelectionEnd: Y,
                onReconnect: Te,
                onReconnectStart: Ve,
                onReconnectEnd: He,
                onEdgeContextMenu: qe,
                onEdgeDoubleClick: Xe,
                onEdgeMouseEnter: Ze,
                onEdgeMouseMove: Ye,
                onEdgeMouseLeave: Fe,
                reconnectRadius: Ke,
                defaultMarkerColor: Ee,
                noDragClassName: Ue,
                noWheelClassName: Qe,
                noPanClassName: Je,
                rfId: kt,
                disableKeyboardA11y: lt,
                nodeExtent: Se,
                viewport: vt,
                onViewportChange: xt,
              }),
              (0, o.jsx)(H, {
                nodes: e,
                edges: t,
                defaultNodes: n,
                defaultEdges: a,
                onConnect: y,
                onConnectStart: v,
                onConnectEnd: x,
                onClickConnectStart: b,
                onClickConnectEnd: w,
                nodesDraggable: ue,
                nodesConnectable: de,
                nodesFocusable: he,
                edgesFocusable: pe,
                edgesReconnectable: ge,
                elementsSelectable: me,
                elevateNodesOnSelect: st,
                elevateEdgesOnSelect: at,
                minZoom: ve,
                maxZoom: xe,
                nodeExtent: Se,
                onNodesChange: We,
                onEdgesChange: Ge,
                snapToGrid: se,
                snapGrid: ae,
                connectionMode: K,
                translateExtent: be,
                connectOnClick: nt,
                defaultEdgeOptions: it,
                fitView: et,
                fitViewOptions: tt,
                onNodesDelete: D,
                onEdgesDelete: j,
                onDelete: I,
                onNodeDragStart: N,
                onNodeDrag: P,
                onNodeDragStop: O,
                onSelectionDrag: T,
                onSelectionDragStart: $,
                onSelectionDragStop: V,
                onMove: p,
                onMoveStart: g,
                onMoveEnd: m,
                noPanClassName: Je,
                nodeOrigin: fe,
                rfId: kt,
                autoPanOnConnect: ct,
                autoPanOnNodeDrag: ut,
                autoPanSpeed: dt,
                onError: pt,
                connectionRadius: ht,
                isValidConnection: ft,
                selectNodesOnDrag: ce,
                nodeDragThreshold: yt,
                onBeforeDelete: F,
                paneClickDistance: Le,
                debug: Et,
              }),
              (0, o.jsx)(B, { onSelectionChange: z }),
              $e,
              (0, o.jsx)(A, { proOptions: rt, position: ot }),
              (0, o.jsx)(M, { rfId: kt, disableKeyboardA11y: lt }),
            ],
          }),
        });
      });
      function Ht() {
        const e = b();
        return (0, s.useCallback)((t) => {
          const { domNode: n, updateNodeInternals: o } = e.getState(),
            r = Array.isArray(t) ? t : [t],
            i = new Map();
          r.forEach((e) => {
            const t = n?.querySelector(`.react-flow__node[data-id="${e}"]`);
            t && i.set(e, { id: e, nodeElement: t, force: !0 });
          }),
            requestAnimationFrame(() => o(i, { triggerFitView: !1 }));
        }, []);
      }
      function qt(e) {
        const [t, n] = (0, s.useState)(e),
          o = (0, s.useCallback)((e) => n((t) => G(e, t)), []);
        return [t, n, o];
      }
      function Xt(e) {
        const [t, n] = (0, s.useState)(e),
          o = (0, s.useCallback)((e) => n((t) => U(e, t)), []);
        return [t, n, o];
      }
      function Zt({ dimensions: e, lineWidth: t, variant: n, className: i }) {
        return (0, o.jsx)("path", {
          strokeWidth: t,
          d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`,
          className: r(["react-flow__background-pattern", n, i]),
        });
      }
      function Yt({ radius: e, className: t }) {
        return (0, o.jsx)("circle", {
          cx: e,
          cy: e,
          r: e,
          className: r(["react-flow__background-pattern", "dots", t]),
        });
      }
      var Ft;
      !(function (e) {
        (e.Lines = "lines"), (e.Dots = "dots"), (e.Cross = "cross");
      })(Ft || (Ft = {}));
      const Kt = { [Ft.Dots]: 1, [Ft.Lines]: 1, [Ft.Cross]: 6 },
        Wt = (e) => ({
          transform: e.transform,
          patternId: `pattern-${e.rfId}`,
        });
      function Gt({
        id: e,
        variant: t = Ft.Dots,
        gap: n = 20,
        size: i,
        lineWidth: a = 1,
        offset: l = 0,
        color: c,
        bgColor: u,
        style: d,
        className: h,
        patternClassName: f,
      }) {
        const p = (0, s.useRef)(null),
          { transform: m, patternId: y } = x(Wt, g),
          v = i || Kt[t],
          b = t === Ft.Dots,
          w = t === Ft.Cross,
          S = Array.isArray(n) ? n : [n, n],
          E = [S[0] * m[2] || 1, S[1] * m[2] || 1],
          _ = v * m[2],
          C = Array.isArray(l) ? l : [l, l],
          k = w ? [_, _] : E,
          M = [C[0] * m[2] || 1 + k[0] / 2, C[1] * m[2] || 1 + k[1] / 2],
          N = `${y}${e || ""}`;
        return (0, o.jsxs)("svg", {
          className: r(["react-flow__background", h]),
          style: {
            ...d,
            ...fe,
            "--xy-background-color-props": u,
            "--xy-background-pattern-color-props": c,
          },
          ref: p,
          "data-testid": "rf__background",
          children: [
            (0, o.jsx)("pattern", {
              id: N,
              x: m[0] % E[0],
              y: m[1] % E[1],
              width: E[0],
              height: E[1],
              patternUnits: "userSpaceOnUse",
              patternTransform: `translate(-${M[0]},-${M[1]})`,
              children: b
                ? (0, o.jsx)(Yt, { radius: _ / 2, className: f })
                : (0, o.jsx)(Zt, {
                    dimensions: k,
                    lineWidth: a,
                    variant: t,
                    className: f,
                  }),
            }),
            (0, o.jsx)("rect", {
              x: "0",
              y: "0",
              width: "100%",
              height: "100%",
              fill: `url(#${N})`,
            }),
          ],
        });
      }
      Gt.displayName = "Background";
      (0, s.memo)(Gt);
      function Ut() {
        return (0, o.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 32",
          children: (0, o.jsx)("path", {
            d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z",
          }),
        });
      }
      function Qt() {
        return (0, o.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 5",
          children: (0, o.jsx)("path", { d: "M0 0h32v4.2H0z" }),
        });
      }
      function Jt() {
        return (0, o.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 30",
          children: (0, o.jsx)("path", {
            d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z",
          }),
        });
      }
      function en() {
        return (0, o.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 25 32",
          children: (0, o.jsx)("path", {
            d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z",
          }),
        });
      }
      function tn() {
        return (0, o.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 25 32",
          children: (0, o.jsx)("path", {
            d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z",
          }),
        });
      }
      function nn({ children: e, className: t, ...n }) {
        return (0, o.jsx)("button", {
          type: "button",
          className: r(["react-flow__controls-button", t]),
          ...n,
          children: e,
        });
      }
      const on = (e) => ({
        isInteractive:
          e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
        minZoomReached: e.transform[2] <= e.minZoom,
        maxZoomReached: e.transform[2] >= e.maxZoom,
      });
      function rn({
        style: e,
        showZoom: t = !0,
        showFitView: n = !0,
        showInteractive: i = !0,
        fitViewOptions: s,
        onZoomIn: a,
        onZoomOut: l,
        onFitView: c,
        onInteractiveChange: u,
        className: d,
        children: h,
        position: f = "bottom-left",
        orientation: p = "vertical",
        "aria-label": m = "React Flow controls",
      }) {
        const y = b(),
          { isInteractive: v, minZoomReached: w, maxZoomReached: S } = x(on, g),
          { zoomIn: E, zoomOut: _, fitView: C } = ce(),
          k = "horizontal" === p ? "horizontal" : "vertical";
        return (0, o.jsxs)(P, {
          className: r(["react-flow__controls", k, d]),
          position: f,
          style: e,
          "data-testid": "rf__controls",
          "aria-label": m,
          children: [
            t &&
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(nn, {
                    onClick: () => {
                      E(), a?.();
                    },
                    className: "react-flow__controls-zoomin",
                    title: "zoom in",
                    "aria-label": "zoom in",
                    disabled: S,
                    children: (0, o.jsx)(Ut, {}),
                  }),
                  (0, o.jsx)(nn, {
                    onClick: () => {
                      _(), l?.();
                    },
                    className: "react-flow__controls-zoomout",
                    title: "zoom out",
                    "aria-label": "zoom out",
                    disabled: w,
                    children: (0, o.jsx)(Qt, {}),
                  }),
                ],
              }),
            n &&
              (0, o.jsx)(nn, {
                className: "react-flow__controls-fitview",
                onClick: () => {
                  C(s), c?.();
                },
                title: "fit view",
                "aria-label": "fit view",
                children: (0, o.jsx)(Jt, {}),
              }),
            i &&
              (0, o.jsx)(nn, {
                className: "react-flow__controls-interactive",
                onClick: () => {
                  y.setState({
                    nodesDraggable: !v,
                    nodesConnectable: !v,
                    elementsSelectable: !v,
                  }),
                    u?.(!v);
                },
                title: "toggle interactivity",
                "aria-label": "toggle interactivity",
                children: v ? (0, o.jsx)(tn, {}) : (0, o.jsx)(en, {}),
              }),
            h,
          ],
        });
      }
      rn.displayName = "Controls";
      (0, s.memo)(rn);
      const sn = (0, s.memo)(function ({
          id: e,
          x: t,
          y: n,
          width: i,
          height: s,
          style: a,
          color: l,
          strokeColor: c,
          strokeWidth: u,
          className: d,
          borderRadius: h,
          shapeRendering: f,
          selected: p,
          onClick: g,
        }) {
          const { background: m, backgroundColor: y } = a || {},
            v = l || m || y;
          return (0, o.jsx)("rect", {
            className: r(["react-flow__minimap-node", { selected: p }, d]),
            x: t,
            y: n,
            rx: h,
            ry: h,
            width: i,
            height: s,
            style: { fill: v, stroke: c, strokeWidth: u },
            shapeRendering: f,
            onClick: g ? (t) => g(t, e) : void 0,
          });
        }),
        an = (e) => e.nodes.map((e) => e.id),
        ln = (e) => (e instanceof Function ? e : () => e);
      const cn = (0, s.memo)(function ({
        id: e,
        nodeColorFunc: t,
        nodeStrokeColorFunc: n,
        nodeClassNameFunc: r,
        nodeBorderRadius: s,
        nodeStrokeWidth: a,
        shapeRendering: l,
        NodeComponent: c,
        onClick: u,
      }) {
        const {
          node: d,
          x: h,
          y: f,
          width: p,
          height: m,
        } = x((t) => {
          const n = t.nodeLookup.get(e),
            { x: o, y: r } = n.internals.positionAbsolute,
            { width: s, height: a } = (0, i.uD)(n);
          return { node: n, x: o, y: r, width: s, height: a };
        }, g);
        return d && !d.hidden && (0, i.QE)(d)
          ? (0, o.jsx)(c, {
              x: h,
              y: f,
              width: p,
              height: m,
              style: d.style,
              selected: !!d.selected,
              className: r(d),
              color: t(d),
              borderRadius: s,
              strokeColor: n(d),
              strokeWidth: a,
              shapeRendering: l,
              onClick: u,
              id: d.id,
            })
          : null;
      });
      var un = (0, s.memo)(function ({
        nodeStrokeColor: e,
        nodeColor: t,
        nodeClassName: n = "",
        nodeBorderRadius: r = 5,
        nodeStrokeWidth: i,
        nodeComponent: s = sn,
        onClick: a,
      }) {
        const l = x(an, g),
          c = ln(t),
          u = ln(e),
          d = ln(n),
          h =
            "undefined" == typeof window || window.chrome
              ? "crispEdges"
              : "geometricPrecision";
        return (0, o.jsx)(o.Fragment, {
          children: l.map((e) =>
            (0, o.jsx)(
              cn,
              {
                id: e,
                nodeColorFunc: c,
                nodeStrokeColorFunc: u,
                nodeClassNameFunc: d,
                nodeBorderRadius: r,
                nodeStrokeWidth: i,
                NodeComponent: s,
                onClick: a,
                shapeRendering: h,
              },
              e,
            ),
          ),
        });
      });
      const dn = (e) => {
        const t = {
          x: -e.transform[0] / e.transform[2],
          y: -e.transform[1] / e.transform[2],
          width: e.width / e.transform[2],
          height: e.height / e.transform[2],
        };
        return {
          viewBB: t,
          boundingRect:
            e.nodeLookup.size > 0 ? (0, i.Mi)((0, i.aZ)(e.nodeLookup), t) : t,
          rfId: e.rfId,
          panZoom: e.panZoom,
          translateExtent: e.translateExtent,
          flowWidth: e.width,
          flowHeight: e.height,
        };
      };
      function hn({
        style: e,
        className: t,
        nodeStrokeColor: n,
        nodeColor: a,
        nodeClassName: l = "",
        nodeBorderRadius: c = 5,
        nodeStrokeWidth: u,
        nodeComponent: d,
        bgColor: h,
        maskColor: f,
        maskStrokeColor: p,
        maskStrokeWidth: m,
        position: y = "bottom-right",
        onClick: v,
        onNodeClick: w,
        pannable: S = !1,
        zoomable: E = !1,
        ariaLabel: _ = "React Flow mini map",
        inversePan: C,
        zoomStep: k = 10,
        offsetScale: M = 5,
      }) {
        const N = b(),
          A = (0, s.useRef)(null),
          {
            boundingRect: O,
            viewBB: D,
            rfId: j,
            panZoom: I,
            translateExtent: z,
            flowWidth: B,
            flowHeight: L,
          } = x(dn, g),
          R = e?.width ?? 200,
          $ = e?.height ?? 150,
          T = O.width / R,
          V = O.height / $,
          H = Math.max(T, V),
          q = H * R,
          X = H * $,
          Z = M * H,
          Y = O.x - (q - O.width) / 2 - Z,
          F = O.y - (X - O.height) / 2 - Z,
          K = q + 2 * Z,
          W = X + 2 * Z,
          G = `react-flow__minimap-desc-${j}`,
          U = (0, s.useRef)(0),
          Q = (0, s.useRef)();
        (U.current = H),
          (0, s.useEffect)(() => {
            if (A.current && I)
              return (
                (Q.current = (0, i.di)({
                  domNode: A.current,
                  panZoom: I,
                  getTransform: () => N.getState().transform,
                  getViewScale: () => U.current,
                })),
                () => {
                  Q.current?.destroy();
                }
              );
          }, [I]),
          (0, s.useEffect)(() => {
            Q.current?.update({
              translateExtent: z,
              width: B,
              height: L,
              inversePan: C,
              pannable: S,
              zoomStep: k,
              zoomable: E,
            });
          }, [S, E, C, k, z, B, L]);
        const J = v
            ? (e) => {
                const [t, n] = Q.current?.pointer(e) || [0, 0];
                v(e, { x: t, y: n });
              }
            : void 0,
          ee = w
            ? (0, s.useCallback)((e, t) => {
                const n = N.getState().nodeLookup.get(t);
                w(e, n);
              }, [])
            : void 0;
        return (0, o.jsx)(P, {
          position: y,
          style: {
            ...e,
            "--xy-minimap-background-color-props":
              "string" == typeof h ? h : void 0,
            "--xy-minimap-mask-background-color-props":
              "string" == typeof f ? f : void 0,
            "--xy-minimap-mask-stroke-color-props":
              "string" == typeof p ? p : void 0,
            "--xy-minimap-mask-stroke-width-props":
              "number" == typeof m ? m * H : void 0,
            "--xy-minimap-node-background-color-props":
              "string" == typeof a ? a : void 0,
            "--xy-minimap-node-stroke-color-props":
              "string" == typeof n ? n : void 0,
            "--xy-minimap-node-stroke-width-props":
              "string" == typeof u ? u : void 0,
          },
          className: r(["react-flow__minimap", t]),
          "data-testid": "rf__minimap",
          children: (0, o.jsxs)("svg", {
            width: R,
            height: $,
            viewBox: `${Y} ${F} ${K} ${W}`,
            className: "react-flow__minimap-svg",
            role: "img",
            "aria-labelledby": G,
            ref: A,
            onClick: J,
            children: [
              _ && (0, o.jsx)("title", { id: G, children: _ }),
              (0, o.jsx)(un, {
                onClick: ee,
                nodeColor: a,
                nodeStrokeColor: n,
                nodeBorderRadius: c,
                nodeClassName: l,
                nodeStrokeWidth: u,
                nodeComponent: d,
              }),
              (0, o.jsx)("path", {
                className: "react-flow__minimap-mask",
                d: `M${Y - Z},${F - Z}h${K + 2 * Z}v${W + 2 * Z}h${-K - 2 * Z}z\n        M${D.x},${D.y}h${D.width}v${D.height}h${-D.width}z`,
                fillRule: "evenodd",
                pointerEvents: "none",
              }),
            ],
          }),
        });
      }
      hn.displayName = "MiniMap";
      (0, s.memo)(hn);
      (0, s.memo)(function ({
        nodeId: e,
        position: t,
        variant: n = i.xN.Handle,
        className: a,
        style: l = {},
        children: c,
        color: u,
        minWidth: d = 10,
        minHeight: h = 10,
        maxWidth: f = Number.MAX_VALUE,
        maxHeight: p = Number.MAX_VALUE,
        keepAspectRatio: g = !1,
        shouldResize: m,
        onResizeStart: y,
        onResize: v,
        onResizeEnd: x,
      }) {
        const w = ke(),
          S = "string" == typeof e ? e : w,
          E = b(),
          _ = (0, s.useRef)(null),
          C = n === i.xN.Line ? "right" : "bottom-right",
          k = t ?? C,
          M = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
          if (_.current && S)
            return (
              M.current ||
                (M.current = (0, i.ET)({
                  domNode: _.current,
                  nodeId: S,
                  getStoreItems: () => {
                    const {
                      nodeLookup: e,
                      transform: t,
                      snapGrid: n,
                      snapToGrid: o,
                      nodeOrigin: r,
                      domNode: i,
                    } = E.getState();
                    return {
                      nodeLookup: e,
                      transform: t,
                      snapGrid: n,
                      snapToGrid: o,
                      nodeOrigin: r,
                      paneDomNode: i,
                    };
                  },
                  onChange: (e, t) => {
                    const {
                        triggerNodeChanges: n,
                        nodeLookup: o,
                        parentLookup: r,
                        nodeOrigin: s,
                      } = E.getState(),
                      a = [],
                      l = { x: e.x, y: e.y },
                      c = o.get(S);
                    if (c && c.expandParent && c.parentId) {
                      const t = c.origin ?? s,
                        n = e.width ?? c.measured.width,
                        u = e.height ?? c.measured.height,
                        d = {
                          id: c.id,
                          parentId: c.parentId,
                          rect: {
                            width: n,
                            height: u,
                            ...(0, i.us)(
                              {
                                x: e.x ?? c.position.x,
                                y: e.y ?? c.position.y,
                              },
                              { width: n, height: u },
                              c.parentId,
                              o,
                              t,
                            ),
                          },
                        },
                        h = (0, i.r8)([d], o, r, s);
                      a.push(...h),
                        (l.x = e.x ? Math.max(t[0] * n, e.x) : void 0),
                        (l.y = e.y ? Math.max(t[1] * u, e.y) : void 0);
                    }
                    if (void 0 !== l.x && void 0 !== l.y) {
                      const e = { id: S, type: "position", position: { ...l } };
                      a.push(e);
                    }
                    if (void 0 !== e.width && void 0 !== e.height) {
                      const t = {
                        id: S,
                        type: "dimensions",
                        resizing: !0,
                        setAttributes: !0,
                        dimensions: { width: e.width, height: e.height },
                      };
                      a.push(t);
                    }
                    for (const e of t) {
                      const t = { ...e, type: "position" };
                      a.push(t);
                    }
                    n(a);
                  },
                  onEnd: () => {
                    const e = { id: S, type: "dimensions", resizing: !1 };
                    E.getState().triggerNodeChanges([e]);
                  },
                })),
              M.current.update({
                controlPosition: k,
                boundaries: {
                  minWidth: d,
                  minHeight: h,
                  maxWidth: f,
                  maxHeight: p,
                },
                keepAspectRatio: g,
                onResizeStart: y,
                onResize: v,
                onResizeEnd: x,
                shouldResize: m,
              }),
              () => {
                M.current?.destroy();
              }
            );
        }, [k, d, h, f, p, g, y, v, x, m]);
        const N = k.split("-"),
          P = n === i.xN.Line ? "borderColor" : "backgroundColor",
          A = u ? { ...l, [P]: u } : l;
        return (0, o.jsx)("div", {
          className: r(["react-flow__resize-control", "nodrag", ...N, n, a]),
          ref: _,
          style: A,
          children: c,
        });
      });
    },
    81451: (e, t, n) => {
      "use strict";
      n.d(t, {
        Do: () => mn,
        WZ: () => hn,
        TG: () => yn,
        ny: () => fn,
        yX: () => vn,
        xN: () => cr,
        Qc: () => pn,
        I$: () => Fo,
        aQ: () => Jo,
        di: () => er,
        kO: () => lr,
        ET: () => yr,
        rN: () => bo,
        bi: () => Lo,
        aE: () => On,
        Hm: () => Do,
        KE: () => Fn,
        tn: () => dn,
        xc: () => cn,
        us: () => no,
        Pr: () => An,
        e_: () => ho,
        Fp: () => go,
        Mi: () => qn,
        HF: () => bn,
        Eo: () => ro,
        b5: () => Mo,
        Tq: () => Dn,
        qX: () => yo,
        q1: () => co,
        YV: () => Pn,
        oj: () => io,
        aZ: () => kn,
        aW: () => Oo,
        uD: () => eo,
        Jo: () => Cn,
        U$: () => Mn,
        X6: () => Xn,
        oN: () => Co,
        ah: () => wo,
        R4: () => Un,
        r8: () => To,
        ZO: () => un,
        bK: () => gn,
        b$: () => wn,
        uj: () => vo,
        v5: () => ao,
        Ue: () => Qn,
        Er: () => lo,
        oB: () => Sn,
        kf: () => Yn,
        mW: () => Zn,
        QE: () => to,
        kM: () => Vn,
        No: () => Ho,
        Ff: () => Wn,
        zj: () => Gn,
        s_: () => Kn,
        vS: () => Bo,
        qn: () => qo,
        uL: () => Vo,
      });
      var o = { value: () => {} };
      function r() {
        for (var e, t = 0, n = arguments.length, o = {}; t < n; ++t) {
          if (!(e = arguments[t] + "") || e in o || /[\s.]/.test(e))
            throw new Error("illegal type: " + e);
          o[e] = [];
        }
        return new i(o);
      }
      function i(e) {
        this._ = e;
      }
      function s(e, t) {
        for (var n, o = 0, r = e.length; o < r; ++o)
          if ((n = e[o]).name === t) return n.value;
      }
      function a(e, t, n) {
        for (var r = 0, i = e.length; r < i; ++r)
          if (e[r].name === t) {
            (e[r] = o), (e = e.slice(0, r).concat(e.slice(r + 1)));
            break;
          }
        return null != n && e.push({ name: t, value: n }), e;
      }
      i.prototype = r.prototype = {
        constructor: i,
        on: function (e, t) {
          var n,
            o,
            r = this._,
            i =
              ((o = r),
              (e + "")
                .trim()
                .split(/^|\s+/)
                .map(function (e) {
                  var t = "",
                    n = e.indexOf(".");
                  if (
                    (n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))),
                    e && !o.hasOwnProperty(e))
                  )
                    throw new Error("unknown type: " + e);
                  return { type: e, name: t };
                })),
            l = -1,
            c = i.length;
          if (!(arguments.length < 2)) {
            if (null != t && "function" != typeof t)
              throw new Error("invalid callback: " + t);
            for (; ++l < c; )
              if ((n = (e = i[l]).type)) r[n] = a(r[n], e.name, t);
              else if (null == t) for (n in r) r[n] = a(r[n], e.name, null);
            return this;
          }
          for (; ++l < c; )
            if ((n = (e = i[l]).type) && (n = s(r[n], e.name))) return n;
        },
        copy: function () {
          var e = {},
            t = this._;
          for (var n in t) e[n] = t[n].slice();
          return new i(e);
        },
        call: function (e, t) {
          if ((n = arguments.length - 2) > 0)
            for (var n, o, r = new Array(n), i = 0; i < n; ++i)
              r[i] = arguments[i + 2];
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (i = 0, n = (o = this._[e]).length; i < n; ++i)
            o[i].value.apply(t, r);
        },
        apply: function (e, t, n) {
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (var o = this._[e], r = 0, i = o.length; r < i; ++r)
            o[r].value.apply(t, n);
        },
      };
      const l = r;
      function c() {}
      function u(e) {
        return null == e
          ? c
          : function () {
              return this.querySelector(e);
            };
      }
      function d() {
        return [];
      }
      function h(e) {
        return null == e
          ? d
          : function () {
              return this.querySelectorAll(e);
            };
      }
      function f(e) {
        return function () {
          return null == (t = e.apply(this, arguments))
            ? []
            : Array.isArray(t)
              ? t
              : Array.from(t);
          var t;
        };
      }
      function p(e) {
        return function () {
          return this.matches(e);
        };
      }
      function g(e) {
        return function (t) {
          return t.matches(e);
        };
      }
      var m = Array.prototype.find;
      function y() {
        return this.firstElementChild;
      }
      var v = Array.prototype.filter;
      function x() {
        return Array.from(this.children);
      }
      function b(e) {
        return new Array(e.length);
      }
      function w(e, t) {
        (this.ownerDocument = e.ownerDocument),
          (this.namespaceURI = e.namespaceURI),
          (this._next = null),
          (this._parent = e),
          (this.__data__ = t);
      }
      function S(e, t, n, o, r, i) {
        for (var s, a = 0, l = t.length, c = i.length; a < c; ++a)
          (s = t[a])
            ? ((s.__data__ = i[a]), (o[a] = s))
            : (n[a] = new w(e, i[a]));
        for (; a < l; ++a) (s = t[a]) && (r[a] = s);
      }
      function E(e, t, n, o, r, i, s) {
        var a,
          l,
          c,
          u = new Map(),
          d = t.length,
          h = i.length,
          f = new Array(d);
        for (a = 0; a < d; ++a)
          (l = t[a]) &&
            ((f[a] = c = s.call(l, l.__data__, a, t) + ""),
            u.has(c) ? (r[a] = l) : u.set(c, l));
        for (a = 0; a < h; ++a)
          (c = s.call(e, i[a], a, i) + ""),
            (l = u.get(c))
              ? ((o[a] = l), (l.__data__ = i[a]), u.delete(c))
              : (n[a] = new w(e, i[a]));
        for (a = 0; a < d; ++a) (l = t[a]) && u.get(f[a]) === l && (r[a] = l);
      }
      function _(e) {
        return e.__data__;
      }
      function C(e) {
        return "object" == typeof e && "length" in e ? e : Array.from(e);
      }
      function k(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      }
      w.prototype = {
        constructor: w,
        appendChild: function (e) {
          return this._parent.insertBefore(e, this._next);
        },
        insertBefore: function (e, t) {
          return this._parent.insertBefore(e, t);
        },
        querySelector: function (e) {
          return this._parent.querySelector(e);
        },
        querySelectorAll: function (e) {
          return this._parent.querySelectorAll(e);
        },
      };
      var M = "http://www.w3.org/1999/xhtml";
      const N = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: M,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      };
      function P(e) {
        var t = (e += ""),
          n = t.indexOf(":");
        return (
          n >= 0 && "xmlns" !== (t = e.slice(0, n)) && (e = e.slice(n + 1)),
          N.hasOwnProperty(t) ? { space: N[t], local: e } : e
        );
      }
      function A(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function O(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function D(e, t) {
        return function () {
          this.setAttribute(e, t);
        };
      }
      function j(e, t) {
        return function () {
          this.setAttributeNS(e.space, e.local, t);
        };
      }
      function I(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n ? this.removeAttribute(e) : this.setAttribute(e, n);
        };
      }
      function z(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n
            ? this.removeAttributeNS(e.space, e.local)
            : this.setAttributeNS(e.space, e.local, n);
        };
      }
      function B(e) {
        return (
          (e.ownerDocument && e.ownerDocument.defaultView) ||
          (e.document && e) ||
          e.defaultView
        );
      }
      function L(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      function R(e, t, n) {
        return function () {
          this.style.setProperty(e, t, n);
        };
      }
      function $(e, t, n) {
        return function () {
          var o = t.apply(this, arguments);
          null == o
            ? this.style.removeProperty(e)
            : this.style.setProperty(e, o, n);
        };
      }
      function T(e, t) {
        return (
          e.style.getPropertyValue(t) ||
          B(e).getComputedStyle(e, null).getPropertyValue(t)
        );
      }
      function V(e) {
        return function () {
          delete this[e];
        };
      }
      function H(e, t) {
        return function () {
          this[e] = t;
        };
      }
      function q(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n ? delete this[e] : (this[e] = n);
        };
      }
      function X(e) {
        return e.trim().split(/^|\s+/);
      }
      function Z(e) {
        return e.classList || new Y(e);
      }
      function Y(e) {
        (this._node = e), (this._names = X(e.getAttribute("class") || ""));
      }
      function F(e, t) {
        for (var n = Z(e), o = -1, r = t.length; ++o < r; ) n.add(t[o]);
      }
      function K(e, t) {
        for (var n = Z(e), o = -1, r = t.length; ++o < r; ) n.remove(t[o]);
      }
      function W(e) {
        return function () {
          F(this, e);
        };
      }
      function G(e) {
        return function () {
          K(this, e);
        };
      }
      function U(e, t) {
        return function () {
          (t.apply(this, arguments) ? F : K)(this, e);
        };
      }
      function Q() {
        this.textContent = "";
      }
      function J(e) {
        return function () {
          this.textContent = e;
        };
      }
      function ee(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.textContent = null == t ? "" : t;
        };
      }
      function te() {
        this.innerHTML = "";
      }
      function ne(e) {
        return function () {
          this.innerHTML = e;
        };
      }
      function oe(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.innerHTML = null == t ? "" : t;
        };
      }
      function re() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function ie() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function se(e) {
        return function () {
          var t = this.ownerDocument,
            n = this.namespaceURI;
          return n === M && t.documentElement.namespaceURI === M
            ? t.createElement(e)
            : t.createElementNS(n, e);
        };
      }
      function ae(e) {
        return function () {
          return this.ownerDocument.createElementNS(e.space, e.local);
        };
      }
      function le(e) {
        var t = P(e);
        return (t.local ? ae : se)(t);
      }
      function ce() {
        return null;
      }
      function ue() {
        var e = this.parentNode;
        e && e.removeChild(this);
      }
      function de() {
        var e = this.cloneNode(!1),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function he() {
        var e = this.cloneNode(!0),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function fe(e) {
        return function () {
          var t = this.__on;
          if (t) {
            for (var n, o = 0, r = -1, i = t.length; o < i; ++o)
              (n = t[o]),
                (e.type && n.type !== e.type) || n.name !== e.name
                  ? (t[++r] = n)
                  : this.removeEventListener(n.type, n.listener, n.options);
            ++r ? (t.length = r) : delete this.__on;
          }
        };
      }
      function pe(e, t, n) {
        return function () {
          var o,
            r = this.__on,
            i = (function (e) {
              return function (t) {
                e.call(this, t, this.__data__);
              };
            })(t);
          if (r)
            for (var s = 0, a = r.length; s < a; ++s)
              if ((o = r[s]).type === e.type && o.name === e.name)
                return (
                  this.removeEventListener(o.type, o.listener, o.options),
                  this.addEventListener(
                    o.type,
                    (o.listener = i),
                    (o.options = n),
                  ),
                  void (o.value = t)
                );
          this.addEventListener(e.type, i, n),
            (o = {
              type: e.type,
              name: e.name,
              value: t,
              listener: i,
              options: n,
            }),
            r ? r.push(o) : (this.__on = [o]);
        };
      }
      function ge(e, t, n) {
        var o = B(e),
          r = o.CustomEvent;
        "function" == typeof r
          ? (r = new r(t, n))
          : ((r = o.document.createEvent("Event")),
            n
              ? (r.initEvent(t, n.bubbles, n.cancelable), (r.detail = n.detail))
              : r.initEvent(t, !1, !1)),
          e.dispatchEvent(r);
      }
      function me(e, t) {
        return function () {
          return ge(this, e, t);
        };
      }
      function ye(e, t) {
        return function () {
          return ge(this, e, t.apply(this, arguments));
        };
      }
      Y.prototype = {
        add: function (e) {
          this._names.indexOf(e) < 0 &&
            (this._names.push(e),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (e) {
          var t = this._names.indexOf(e);
          t >= 0 &&
            (this._names.splice(t, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (e) {
          return this._names.indexOf(e) >= 0;
        },
      };
      var ve = [null];
      function xe(e, t) {
        (this._groups = e), (this._parents = t);
      }
      function be() {
        return new xe([[document.documentElement]], ve);
      }
      xe.prototype = be.prototype = {
        constructor: xe,
        select: function (e) {
          "function" != typeof e && (e = u(e));
          for (
            var t = this._groups, n = t.length, o = new Array(n), r = 0;
            r < n;
            ++r
          )
            for (
              var i,
                s,
                a = t[r],
                l = a.length,
                c = (o[r] = new Array(l)),
                d = 0;
              d < l;
              ++d
            )
              (i = a[d]) &&
                (s = e.call(i, i.__data__, d, a)) &&
                ("__data__" in i && (s.__data__ = i.__data__), (c[d] = s));
          return new xe(o, this._parents);
        },
        selectAll: function (e) {
          e = "function" == typeof e ? f(e) : h(e);
          for (
            var t = this._groups, n = t.length, o = [], r = [], i = 0;
            i < n;
            ++i
          )
            for (var s, a = t[i], l = a.length, c = 0; c < l; ++c)
              (s = a[c]) && (o.push(e.call(s, s.__data__, c, a)), r.push(s));
          return new xe(o, r);
        },
        selectChild: function (e) {
          return this.select(
            null == e
              ? y
              : (function (e) {
                  return function () {
                    return m.call(this.children, e);
                  };
                })("function" == typeof e ? e : g(e)),
          );
        },
        selectChildren: function (e) {
          return this.selectAll(
            null == e
              ? x
              : (function (e) {
                  return function () {
                    return v.call(this.children, e);
                  };
                })("function" == typeof e ? e : g(e)),
          );
        },
        filter: function (e) {
          "function" != typeof e && (e = p(e));
          for (
            var t = this._groups, n = t.length, o = new Array(n), r = 0;
            r < n;
            ++r
          )
            for (
              var i, s = t[r], a = s.length, l = (o[r] = []), c = 0;
              c < a;
              ++c
            )
              (i = s[c]) && e.call(i, i.__data__, c, s) && l.push(i);
          return new xe(o, this._parents);
        },
        data: function (e, t) {
          if (!arguments.length) return Array.from(this, _);
          var n,
            o = t ? E : S,
            r = this._parents,
            i = this._groups;
          "function" != typeof e &&
            ((n = e),
            (e = function () {
              return n;
            }));
          for (
            var s = i.length,
              a = new Array(s),
              l = new Array(s),
              c = new Array(s),
              u = 0;
            u < s;
            ++u
          ) {
            var d = r[u],
              h = i[u],
              f = h.length,
              p = C(e.call(d, d && d.__data__, u, r)),
              g = p.length,
              m = (l[u] = new Array(g)),
              y = (a[u] = new Array(g));
            o(d, h, m, y, (c[u] = new Array(f)), p, t);
            for (var v, x, b = 0, w = 0; b < g; ++b)
              if ((v = m[b])) {
                for (b >= w && (w = b + 1); !(x = y[w]) && ++w < g; );
                v._next = x || null;
              }
          }
          return ((a = new xe(a, r))._enter = l), (a._exit = c), a;
        },
        enter: function () {
          return new xe(this._enter || this._groups.map(b), this._parents);
        },
        exit: function () {
          return new xe(this._exit || this._groups.map(b), this._parents);
        },
        join: function (e, t, n) {
          var o = this.enter(),
            r = this,
            i = this.exit();
          return (
            "function" == typeof e
              ? (o = e(o)) && (o = o.selection())
              : (o = o.append(e + "")),
            null != t && (r = t(r)) && (r = r.selection()),
            null == n ? i.remove() : n(i),
            o && r ? o.merge(r).order() : r
          );
        },
        merge: function (e) {
          for (
            var t = e.selection ? e.selection() : e,
              n = this._groups,
              o = t._groups,
              r = n.length,
              i = o.length,
              s = Math.min(r, i),
              a = new Array(r),
              l = 0;
            l < s;
            ++l
          )
            for (
              var c,
                u = n[l],
                d = o[l],
                h = u.length,
                f = (a[l] = new Array(h)),
                p = 0;
              p < h;
              ++p
            )
              (c = u[p] || d[p]) && (f[p] = c);
          for (; l < r; ++l) a[l] = n[l];
          return new xe(a, this._parents);
        },
        selection: function () {
          return this;
        },
        order: function () {
          for (var e = this._groups, t = -1, n = e.length; ++t < n; )
            for (var o, r = e[t], i = r.length - 1, s = r[i]; --i >= 0; )
              (o = r[i]) &&
                (s &&
                  4 ^ o.compareDocumentPosition(s) &&
                  s.parentNode.insertBefore(o, s),
                (s = o));
          return this;
        },
        sort: function (e) {
          function t(t, n) {
            return t && n ? e(t.__data__, n.__data__) : !t - !n;
          }
          e || (e = k);
          for (
            var n = this._groups, o = n.length, r = new Array(o), i = 0;
            i < o;
            ++i
          ) {
            for (
              var s, a = n[i], l = a.length, c = (r[i] = new Array(l)), u = 0;
              u < l;
              ++u
            )
              (s = a[u]) && (c[u] = s);
            c.sort(t);
          }
          return new xe(r, this._parents).order();
        },
        call: function () {
          var e = arguments[0];
          return (arguments[0] = this), e.apply(null, arguments), this;
        },
        nodes: function () {
          return Array.from(this);
        },
        node: function () {
          for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
            for (var o = e[t], r = 0, i = o.length; r < i; ++r) {
              var s = o[r];
              if (s) return s;
            }
          return null;
        },
        size: function () {
          let e = 0;
          for (const t of this) ++e;
          return e;
        },
        empty: function () {
          return !this.node();
        },
        each: function (e) {
          for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
            for (var r, i = t[n], s = 0, a = i.length; s < a; ++s)
              (r = i[s]) && e.call(r, r.__data__, s, i);
          return this;
        },
        attr: function (e, t) {
          var n = P(e);
          if (arguments.length < 2) {
            var o = this.node();
            return n.local
              ? o.getAttributeNS(n.space, n.local)
              : o.getAttribute(n);
          }
          return this.each(
            (null == t
              ? n.local
                ? O
                : A
              : "function" == typeof t
                ? n.local
                  ? z
                  : I
                : n.local
                  ? j
                  : D)(n, t),
          );
        },
        style: function (e, t, n) {
          return arguments.length > 1
            ? this.each(
                (null == t ? L : "function" == typeof t ? $ : R)(
                  e,
                  t,
                  null == n ? "" : n,
                ),
              )
            : T(this.node(), e);
        },
        property: function (e, t) {
          return arguments.length > 1
            ? this.each((null == t ? V : "function" == typeof t ? q : H)(e, t))
            : this.node()[e];
        },
        classed: function (e, t) {
          var n = X(e + "");
          if (arguments.length < 2) {
            for (var o = Z(this.node()), r = -1, i = n.length; ++r < i; )
              if (!o.contains(n[r])) return !1;
            return !0;
          }
          return this.each(("function" == typeof t ? U : t ? W : G)(n, t));
        },
        text: function (e) {
          return arguments.length
            ? this.each(null == e ? Q : ("function" == typeof e ? ee : J)(e))
            : this.node().textContent;
        },
        html: function (e) {
          return arguments.length
            ? this.each(null == e ? te : ("function" == typeof e ? oe : ne)(e))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(re);
        },
        lower: function () {
          return this.each(ie);
        },
        append: function (e) {
          var t = "function" == typeof e ? e : le(e);
          return this.select(function () {
            return this.appendChild(t.apply(this, arguments));
          });
        },
        insert: function (e, t) {
          var n = "function" == typeof e ? e : le(e),
            o = null == t ? ce : "function" == typeof t ? t : u(t);
          return this.select(function () {
            return this.insertBefore(
              n.apply(this, arguments),
              o.apply(this, arguments) || null,
            );
          });
        },
        remove: function () {
          return this.each(ue);
        },
        clone: function (e) {
          return this.select(e ? he : de);
        },
        datum: function (e) {
          return arguments.length
            ? this.property("__data__", e)
            : this.node().__data__;
        },
        on: function (e, t, n) {
          var o,
            r,
            i = (function (e) {
              return e
                .trim()
                .split(/^|\s+/)
                .map(function (e) {
                  var t = "",
                    n = e.indexOf(".");
                  return (
                    n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))),
                    { type: e, name: t }
                  );
                });
            })(e + ""),
            s = i.length;
          if (!(arguments.length < 2)) {
            for (a = t ? pe : fe, o = 0; o < s; ++o) this.each(a(i[o], t, n));
            return this;
          }
          var a = this.node().__on;
          if (a)
            for (var l, c = 0, u = a.length; c < u; ++c)
              for (o = 0, l = a[c]; o < s; ++o)
                if ((r = i[o]).type === l.type && r.name === l.name)
                  return l.value;
        },
        dispatch: function (e, t) {
          return this.each(("function" == typeof t ? ye : me)(e, t));
        },
        [Symbol.iterator]: function* () {
          for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
            for (var o, r = e[t], i = 0, s = r.length; i < s; ++i)
              (o = r[i]) && (yield o);
        },
      };
      const we = be;
      function Se(e) {
        return "string" == typeof e
          ? new xe([[document.querySelector(e)]], [document.documentElement])
          : new xe([[e]], ve);
      }
      function Ee(e, t) {
        if (
          ((e = (function (e) {
            let t;
            for (; (t = e.sourceEvent); ) e = t;
            return e;
          })(e)),
          void 0 === t && (t = e.currentTarget),
          t)
        ) {
          var n = t.ownerSVGElement || t;
          if (n.createSVGPoint) {
            var o = n.createSVGPoint();
            return (
              (o.x = e.clientX),
              (o.y = e.clientY),
              [(o = o.matrixTransform(t.getScreenCTM().inverse())).x, o.y]
            );
          }
          if (t.getBoundingClientRect) {
            var r = t.getBoundingClientRect();
            return [
              e.clientX - r.left - t.clientLeft,
              e.clientY - r.top - t.clientTop,
            ];
          }
        }
        return [e.pageX, e.pageY];
      }
      const _e = { passive: !1 },
        Ce = { capture: !0, passive: !1 };
      function ke(e) {
        e.stopImmediatePropagation();
      }
      function Me(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
      function Ne(e) {
        var t = e.document.documentElement,
          n = Se(e).on("dragstart.drag", Me, Ce);
        "onselectstart" in t
          ? n.on("selectstart.drag", Me, Ce)
          : ((t.__noselect = t.style.MozUserSelect),
            (t.style.MozUserSelect = "none"));
      }
      function Pe(e, t) {
        var n = e.document.documentElement,
          o = Se(e).on("dragstart.drag", null);
        t &&
          (o.on("click.drag", Me, Ce),
          setTimeout(function () {
            o.on("click.drag", null);
          }, 0)),
          "onselectstart" in n
            ? o.on("selectstart.drag", null)
            : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
      }
      const Ae = (e) => () => e;
      function Oe(
        e,
        {
          sourceEvent: t,
          subject: n,
          target: o,
          identifier: r,
          active: i,
          x: s,
          y: a,
          dx: l,
          dy: c,
          dispatch: u,
        },
      ) {
        Object.defineProperties(this, {
          type: { value: e, enumerable: !0, configurable: !0 },
          sourceEvent: { value: t, enumerable: !0, configurable: !0 },
          subject: { value: n, enumerable: !0, configurable: !0 },
          target: { value: o, enumerable: !0, configurable: !0 },
          identifier: { value: r, enumerable: !0, configurable: !0 },
          active: { value: i, enumerable: !0, configurable: !0 },
          x: { value: s, enumerable: !0, configurable: !0 },
          y: { value: a, enumerable: !0, configurable: !0 },
          dx: { value: l, enumerable: !0, configurable: !0 },
          dy: { value: c, enumerable: !0, configurable: !0 },
          _: { value: u },
        });
      }
      function De(e) {
        return !e.ctrlKey && !e.button;
      }
      function je() {
        return this.parentNode;
      }
      function Ie(e, t) {
        return null == t ? { x: e.x, y: e.y } : t;
      }
      function ze() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function Be() {
        var e,
          t,
          n,
          o,
          r = De,
          i = je,
          s = Ie,
          a = ze,
          c = {},
          u = l("start", "drag", "end"),
          d = 0,
          h = 0;
        function f(e) {
          e.on("mousedown.drag", p)
            .filter(a)
            .on("touchstart.drag", y)
            .on("touchmove.drag", v, _e)
            .on("touchend.drag touchcancel.drag", x)
            .style("touch-action", "none")
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function p(s, a) {
          if (!o && r.call(this, s, a)) {
            var l = b(this, i.call(this, s, a), s, a, "mouse");
            l &&
              (Se(s.view).on("mousemove.drag", g, Ce).on("mouseup.drag", m, Ce),
              Ne(s.view),
              ke(s),
              (n = !1),
              (e = s.clientX),
              (t = s.clientY),
              l("start", s));
          }
        }
        function g(o) {
          if ((Me(o), !n)) {
            var r = o.clientX - e,
              i = o.clientY - t;
            n = r * r + i * i > h;
          }
          c.mouse("drag", o);
        }
        function m(e) {
          Se(e.view).on("mousemove.drag mouseup.drag", null),
            Pe(e.view, n),
            Me(e),
            c.mouse("end", e);
        }
        function y(e, t) {
          if (r.call(this, e, t)) {
            var n,
              o,
              s = e.changedTouches,
              a = i.call(this, e, t),
              l = s.length;
            for (n = 0; n < l; ++n)
              (o = b(this, a, e, t, s[n].identifier, s[n])) &&
                (ke(e), o("start", e, s[n]));
          }
        }
        function v(e) {
          var t,
            n,
            o = e.changedTouches,
            r = o.length;
          for (t = 0; t < r; ++t)
            (n = c[o[t].identifier]) && (Me(e), n("drag", e, o[t]));
        }
        function x(e) {
          var t,
            n,
            r = e.changedTouches,
            i = r.length;
          for (
            o && clearTimeout(o),
              o = setTimeout(function () {
                o = null;
              }, 500),
              t = 0;
            t < i;
            ++t
          )
            (n = c[r[t].identifier]) && (ke(e), n("end", e, r[t]));
        }
        function b(e, t, n, o, r, i) {
          var a,
            l,
            h,
            p = u.copy(),
            g = Ee(i || n, t);
          if (
            null !=
            (h = s.call(
              e,
              new Oe("beforestart", {
                sourceEvent: n,
                target: f,
                identifier: r,
                active: d,
                x: g[0],
                y: g[1],
                dx: 0,
                dy: 0,
                dispatch: p,
              }),
              o,
            ))
          )
            return (
              (a = h.x - g[0] || 0),
              (l = h.y - g[1] || 0),
              function n(i, s, u) {
                var m,
                  y = g;
                switch (i) {
                  case "start":
                    (c[r] = n), (m = d++);
                    break;
                  case "end":
                    delete c[r], --d;
                  case "drag":
                    (g = Ee(u || s, t)), (m = d);
                }
                p.call(
                  i,
                  e,
                  new Oe(i, {
                    sourceEvent: s,
                    subject: h,
                    target: f,
                    identifier: r,
                    active: m,
                    x: g[0] + a,
                    y: g[1] + l,
                    dx: g[0] - y[0],
                    dy: g[1] - y[1],
                    dispatch: p,
                  }),
                  o,
                );
              }
            );
        }
        return (
          (f.filter = function (e) {
            return arguments.length
              ? ((r = "function" == typeof e ? e : Ae(!!e)), f)
              : r;
          }),
          (f.container = function (e) {
            return arguments.length
              ? ((i = "function" == typeof e ? e : Ae(e)), f)
              : i;
          }),
          (f.subject = function (e) {
            return arguments.length
              ? ((s = "function" == typeof e ? e : Ae(e)), f)
              : s;
          }),
          (f.touchable = function (e) {
            return arguments.length
              ? ((a = "function" == typeof e ? e : Ae(!!e)), f)
              : a;
          }),
          (f.on = function () {
            var e = u.on.apply(u, arguments);
            return e === u ? f : e;
          }),
          (f.clickDistance = function (e) {
            return arguments.length ? ((h = (e = +e) * e), f) : Math.sqrt(h);
          }),
          f
        );
      }
      Oe.prototype.on = function () {
        var e = this._.on.apply(this._, arguments);
        return e === this._ ? this : e;
      };
      function Le(e) {
        return ((e = Math.exp(e)) + 1 / e) / 2;
      }
      const Re = (function e(t, n, o) {
        function r(e, r) {
          var i,
            s,
            a = e[0],
            l = e[1],
            c = e[2],
            u = r[0],
            d = r[1],
            h = r[2],
            f = u - a,
            p = d - l,
            g = f * f + p * p;
          if (g < 1e-12)
            (s = Math.log(h / c) / t),
              (i = function (e) {
                return [a + e * f, l + e * p, c * Math.exp(t * e * s)];
              });
          else {
            var m = Math.sqrt(g),
              y = (h * h - c * c + o * g) / (2 * c * n * m),
              v = (h * h - c * c - o * g) / (2 * h * n * m),
              x = Math.log(Math.sqrt(y * y + 1) - y),
              b = Math.log(Math.sqrt(v * v + 1) - v);
            (s = (b - x) / t),
              (i = function (e) {
                var o,
                  r = e * s,
                  i = Le(x),
                  u =
                    (c / (n * m)) *
                    (i *
                      ((o = t * r + x), ((o = Math.exp(2 * o)) - 1) / (o + 1)) -
                      (function (e) {
                        return ((e = Math.exp(e)) - 1 / e) / 2;
                      })(x));
                return [a + u * f, l + u * p, (c * i) / Le(t * r + x)];
              });
          }
          return (i.duration = (1e3 * s * t) / Math.SQRT2), i;
        }
        return (
          (r.rho = function (t) {
            var n = Math.max(0.001, +t),
              o = n * n;
            return e(n, o, o * o);
          }),
          r
        );
      })(Math.SQRT2, 2, 4);
      var $e,
        Te,
        Ve = 0,
        He = 0,
        qe = 0,
        Xe = 0,
        Ze = 0,
        Ye = 0,
        Fe =
          "object" == typeof performance && performance.now
            ? performance
            : Date,
        Ke =
          "object" == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (e) {
                setTimeout(e, 17);
              };
      function We() {
        return Ze || (Ke(Ge), (Ze = Fe.now() + Ye));
      }
      function Ge() {
        Ze = 0;
      }
      function Ue() {
        this._call = this._time = this._next = null;
      }
      function Qe(e, t, n) {
        var o = new Ue();
        return o.restart(e, t, n), o;
      }
      function Je() {
        (Ze = (Xe = Fe.now()) + Ye), (Ve = He = 0);
        try {
          !(function () {
            We(), ++Ve;
            for (var e, t = $e; t; )
              (e = Ze - t._time) >= 0 && t._call.call(void 0, e), (t = t._next);
            --Ve;
          })();
        } finally {
          (Ve = 0),
            (function () {
              var e,
                t,
                n = $e,
                o = 1 / 0;
              for (; n; )
                n._call
                  ? (o > n._time && (o = n._time), (e = n), (n = n._next))
                  : ((t = n._next),
                    (n._next = null),
                    (n = e ? (e._next = t) : ($e = t)));
              (Te = e), tt(o);
            })(),
            (Ze = 0);
        }
      }
      function et() {
        var e = Fe.now(),
          t = e - Xe;
        t > 1e3 && ((Ye -= t), (Xe = e));
      }
      function tt(e) {
        Ve ||
          (He && (He = clearTimeout(He)),
          e - Ze > 24
            ? (e < 1 / 0 && (He = setTimeout(Je, e - Fe.now() - Ye)),
              qe && (qe = clearInterval(qe)))
            : (qe || ((Xe = Fe.now()), (qe = setInterval(et, 1e3))),
              (Ve = 1),
              Ke(Je)));
      }
      function nt(e, t, n) {
        var o = new Ue();
        return (
          (t = null == t ? 0 : +t),
          o.restart(
            (n) => {
              o.stop(), e(n + t);
            },
            t,
            n,
          ),
          o
        );
      }
      Ue.prototype = Qe.prototype = {
        constructor: Ue,
        restart: function (e, t, n) {
          if ("function" != typeof e)
            throw new TypeError("callback is not a function");
          (n = (null == n ? We() : +n) + (null == t ? 0 : +t)),
            this._next ||
              Te === this ||
              (Te ? (Te._next = this) : ($e = this), (Te = this)),
            (this._call = e),
            (this._time = n),
            tt();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), tt());
        },
      };
      var ot = l("start", "end", "cancel", "interrupt"),
        rt = [],
        it = 2,
        st = 5,
        at = 6;
      function lt(e, t, n, o, r, i) {
        var s = e.__transition;
        if (s) {
          if (n in s) return;
        } else e.__transition = {};
        !(function (e, t, n) {
          var o,
            r = e.__transition;
          function i(e) {
            (n.state = 1),
              n.timer.restart(s, n.delay, n.time),
              n.delay <= e && s(e - n.delay);
          }
          function s(i) {
            var c, u, d, h;
            if (1 !== n.state) return l();
            for (c in r)
              if ((h = r[c]).name === n.name) {
                if (3 === h.state) return nt(s);
                4 === h.state
                  ? ((h.state = at),
                    h.timer.stop(),
                    h.on.call("interrupt", e, e.__data__, h.index, h.group),
                    delete r[c])
                  : +c < t &&
                    ((h.state = at),
                    h.timer.stop(),
                    h.on.call("cancel", e, e.__data__, h.index, h.group),
                    delete r[c]);
              }
            if (
              (nt(function () {
                3 === n.state &&
                  ((n.state = 4), n.timer.restart(a, n.delay, n.time), a(i));
              }),
              (n.state = it),
              n.on.call("start", e, e.__data__, n.index, n.group),
              n.state === it)
            ) {
              for (
                n.state = 3, o = new Array((d = n.tween.length)), c = 0, u = -1;
                c < d;
                ++c
              )
                (h = n.tween[c].value.call(e, e.__data__, n.index, n.group)) &&
                  (o[++u] = h);
              o.length = u + 1;
            }
          }
          function a(t) {
            for (
              var r =
                  t < n.duration
                    ? n.ease.call(null, t / n.duration)
                    : (n.timer.restart(l), (n.state = st), 1),
                i = -1,
                s = o.length;
              ++i < s;
            )
              o[i].call(e, r);
            n.state === st &&
              (n.on.call("end", e, e.__data__, n.index, n.group), l());
          }
          function l() {
            for (var o in ((n.state = at), n.timer.stop(), delete r[t], r))
              return;
            delete e.__transition;
          }
          (r[t] = n), (n.timer = Qe(i, 0, n.time));
        })(e, n, {
          name: t,
          index: o,
          group: r,
          on: ot,
          tween: rt,
          time: i.time,
          delay: i.delay,
          duration: i.duration,
          ease: i.ease,
          timer: null,
          state: 0,
        });
      }
      function ct(e, t) {
        var n = dt(e, t);
        if (n.state > 0) throw new Error("too late; already scheduled");
        return n;
      }
      function ut(e, t) {
        var n = dt(e, t);
        if (n.state > 3) throw new Error("too late; already running");
        return n;
      }
      function dt(e, t) {
        var n = e.__transition;
        if (!n || !(n = n[t])) throw new Error("transition not found");
        return n;
      }
      function ht(e, t) {
        var n,
          o,
          r,
          i = e.__transition,
          s = !0;
        if (i) {
          for (r in ((t = null == t ? null : t + ""), i))
            (n = i[r]).name === t
              ? ((o = n.state > it && n.state < st),
                (n.state = at),
                n.timer.stop(),
                n.on.call(
                  o ? "interrupt" : "cancel",
                  e,
                  e.__data__,
                  n.index,
                  n.group,
                ),
                delete i[r])
              : (s = !1);
          s && delete e.__transition;
        }
      }
      var ft,
        pt = n(55797),
        gt = 180 / Math.PI,
        mt = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        };
      function yt(e, t, n, o, r, i) {
        var s, a, l;
        return (
          (s = Math.sqrt(e * e + t * t)) && ((e /= s), (t /= s)),
          (l = e * n + t * o) && ((n -= e * l), (o -= t * l)),
          (a = Math.sqrt(n * n + o * o)) && ((n /= a), (o /= a), (l /= a)),
          e * o < t * n && ((e = -e), (t = -t), (l = -l), (s = -s)),
          {
            translateX: r,
            translateY: i,
            rotate: Math.atan2(t, e) * gt,
            skewX: Math.atan(l) * gt,
            scaleX: s,
            scaleY: a,
          }
        );
      }
      function vt(e, t, n, o) {
        function r(e) {
          return e.length ? e.pop() + " " : "";
        }
        return function (i, s) {
          var a = [],
            l = [];
          return (
            (i = e(i)),
            (s = e(s)),
            (function (e, o, r, i, s, a) {
              if (e !== r || o !== i) {
                var l = s.push("translate(", null, t, null, n);
                a.push(
                  { i: l - 4, x: (0, pt.A)(e, r) },
                  { i: l - 2, x: (0, pt.A)(o, i) },
                );
              } else (r || i) && s.push("translate(" + r + t + i + n);
            })(i.translateX, i.translateY, s.translateX, s.translateY, a, l),
            (function (e, t, n, i) {
              e !== t
                ? (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
                  i.push({
                    i: n.push(r(n) + "rotate(", null, o) - 2,
                    x: (0, pt.A)(e, t),
                  }))
                : t && n.push(r(n) + "rotate(" + t + o);
            })(i.rotate, s.rotate, a, l),
            (function (e, t, n, i) {
              e !== t
                ? i.push({
                    i: n.push(r(n) + "skewX(", null, o) - 2,
                    x: (0, pt.A)(e, t),
                  })
                : t && n.push(r(n) + "skewX(" + t + o);
            })(i.skewX, s.skewX, a, l),
            (function (e, t, n, o, i, s) {
              if (e !== n || t !== o) {
                var a = i.push(r(i) + "scale(", null, ",", null, ")");
                s.push(
                  { i: a - 4, x: (0, pt.A)(e, n) },
                  { i: a - 2, x: (0, pt.A)(t, o) },
                );
              } else
                (1 === n && 1 === o) ||
                  i.push(r(i) + "scale(" + n + "," + o + ")");
            })(i.scaleX, i.scaleY, s.scaleX, s.scaleY, a, l),
            (i = s = null),
            function (e) {
              for (var t, n = -1, o = l.length; ++n < o; )
                a[(t = l[n]).i] = t.x(e);
              return a.join("");
            }
          );
        };
      }
      var xt = vt(
          function (e) {
            const t = new (
              "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
            )(e + "");
            return t.isIdentity ? mt : yt(t.a, t.b, t.c, t.d, t.e, t.f);
          },
          "px, ",
          "px)",
          "deg)",
        ),
        bt = vt(
          function (e) {
            return null == e
              ? mt
              : (ft ||
                  (ft = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g",
                  )),
                ft.setAttribute("transform", e),
                (e = ft.transform.baseVal.consolidate())
                  ? yt((e = e.matrix).a, e.b, e.c, e.d, e.e, e.f)
                  : mt);
          },
          ", ",
          ")",
          ")",
        );
      function wt(e, t) {
        var n, o;
        return function () {
          var r = ut(this, e),
            i = r.tween;
          if (i !== n)
            for (var s = 0, a = (o = n = i).length; s < a; ++s)
              if (o[s].name === t) {
                (o = o.slice()).splice(s, 1);
                break;
              }
          r.tween = o;
        };
      }
      function St(e, t, n) {
        var o, r;
        if ("function" != typeof n) throw new Error();
        return function () {
          var i = ut(this, e),
            s = i.tween;
          if (s !== o) {
            r = (o = s).slice();
            for (var a = { name: t, value: n }, l = 0, c = r.length; l < c; ++l)
              if (r[l].name === t) {
                r[l] = a;
                break;
              }
            l === c && r.push(a);
          }
          i.tween = r;
        };
      }
      function Et(e, t, n) {
        var o = e._id;
        return (
          e.each(function () {
            var e = ut(this, o);
            (e.value || (e.value = {}))[t] = n.apply(this, arguments);
          }),
          function (e) {
            return dt(e, o).value[t];
          }
        );
      }
      var _t = n(25705),
        Ct = n(92789),
        kt = n(14553);
      function Mt(e, t) {
        var n;
        return (
          "number" == typeof t
            ? pt.A
            : t instanceof _t.Ay
              ? Ct.Ay
              : (n = (0, _t.Ay)(t))
                ? ((t = n), Ct.Ay)
                : kt.A
        )(e, t);
      }
      function Nt(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function Pt(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function At(e, t, n) {
        var o,
          r,
          i = n + "";
        return function () {
          var s = this.getAttribute(e);
          return s === i ? null : s === o ? r : (r = t((o = s), n));
        };
      }
      function Ot(e, t, n) {
        var o,
          r,
          i = n + "";
        return function () {
          var s = this.getAttributeNS(e.space, e.local);
          return s === i ? null : s === o ? r : (r = t((o = s), n));
        };
      }
      function Dt(e, t, n) {
        var o, r, i;
        return function () {
          var s,
            a,
            l = n(this);
          if (null != l)
            return (s = this.getAttribute(e)) === (a = l + "")
              ? null
              : s === o && a === r
                ? i
                : ((r = a), (i = t((o = s), l)));
          this.removeAttribute(e);
        };
      }
      function jt(e, t, n) {
        var o, r, i;
        return function () {
          var s,
            a,
            l = n(this);
          if (null != l)
            return (s = this.getAttributeNS(e.space, e.local)) === (a = l + "")
              ? null
              : s === o && a === r
                ? i
                : ((r = a), (i = t((o = s), l)));
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function It(e, t) {
        var n, o;
        function r() {
          var r = t.apply(this, arguments);
          return (
            r !== o &&
              (n =
                (o = r) &&
                (function (e, t) {
                  return function (n) {
                    this.setAttributeNS(e.space, e.local, t.call(this, n));
                  };
                })(e, r)),
            n
          );
        }
        return (r._value = t), r;
      }
      function zt(e, t) {
        var n, o;
        function r() {
          var r = t.apply(this, arguments);
          return (
            r !== o &&
              (n =
                (o = r) &&
                (function (e, t) {
                  return function (n) {
                    this.setAttribute(e, t.call(this, n));
                  };
                })(e, r)),
            n
          );
        }
        return (r._value = t), r;
      }
      function Bt(e, t) {
        return function () {
          ct(this, e).delay = +t.apply(this, arguments);
        };
      }
      function Lt(e, t) {
        return (
          (t = +t),
          function () {
            ct(this, e).delay = t;
          }
        );
      }
      function Rt(e, t) {
        return function () {
          ut(this, e).duration = +t.apply(this, arguments);
        };
      }
      function $t(e, t) {
        return (
          (t = +t),
          function () {
            ut(this, e).duration = t;
          }
        );
      }
      var Tt = we.prototype.constructor;
      function Vt(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      var Ht = 0;
      function qt(e, t, n, o) {
        (this._groups = e),
          (this._parents = t),
          (this._name = n),
          (this._id = o);
      }
      function Xt() {
        return ++Ht;
      }
      var Zt = we.prototype;
      qt.prototype = function (e) {
        return we().transition(e);
      }.prototype = {
        constructor: qt,
        select: function (e) {
          var t = this._name,
            n = this._id;
          "function" != typeof e && (e = u(e));
          for (
            var o = this._groups, r = o.length, i = new Array(r), s = 0;
            s < r;
            ++s
          )
            for (
              var a,
                l,
                c = o[s],
                d = c.length,
                h = (i[s] = new Array(d)),
                f = 0;
              f < d;
              ++f
            )
              (a = c[f]) &&
                (l = e.call(a, a.__data__, f, c)) &&
                ("__data__" in a && (l.__data__ = a.__data__),
                (h[f] = l),
                lt(h[f], t, n, f, h, dt(a, n)));
          return new qt(i, this._parents, t, n);
        },
        selectAll: function (e) {
          var t = this._name,
            n = this._id;
          "function" != typeof e && (e = h(e));
          for (
            var o = this._groups, r = o.length, i = [], s = [], a = 0;
            a < r;
            ++a
          )
            for (var l, c = o[a], u = c.length, d = 0; d < u; ++d)
              if ((l = c[d])) {
                for (
                  var f,
                    p = e.call(l, l.__data__, d, c),
                    g = dt(l, n),
                    m = 0,
                    y = p.length;
                  m < y;
                  ++m
                )
                  (f = p[m]) && lt(f, t, n, m, p, g);
                i.push(p), s.push(l);
              }
          return new qt(i, s, t, n);
        },
        selectChild: Zt.selectChild,
        selectChildren: Zt.selectChildren,
        filter: function (e) {
          "function" != typeof e && (e = p(e));
          for (
            var t = this._groups, n = t.length, o = new Array(n), r = 0;
            r < n;
            ++r
          )
            for (
              var i, s = t[r], a = s.length, l = (o[r] = []), c = 0;
              c < a;
              ++c
            )
              (i = s[c]) && e.call(i, i.__data__, c, s) && l.push(i);
          return new qt(o, this._parents, this._name, this._id);
        },
        merge: function (e) {
          if (e._id !== this._id) throw new Error();
          for (
            var t = this._groups,
              n = e._groups,
              o = t.length,
              r = n.length,
              i = Math.min(o, r),
              s = new Array(o),
              a = 0;
            a < i;
            ++a
          )
            for (
              var l,
                c = t[a],
                u = n[a],
                d = c.length,
                h = (s[a] = new Array(d)),
                f = 0;
              f < d;
              ++f
            )
              (l = c[f] || u[f]) && (h[f] = l);
          for (; a < o; ++a) s[a] = t[a];
          return new qt(s, this._parents, this._name, this._id);
        },
        selection: function () {
          return new Tt(this._groups, this._parents);
        },
        transition: function () {
          for (
            var e = this._name,
              t = this._id,
              n = Xt(),
              o = this._groups,
              r = o.length,
              i = 0;
            i < r;
            ++i
          )
            for (var s, a = o[i], l = a.length, c = 0; c < l; ++c)
              if ((s = a[c])) {
                var u = dt(s, t);
                lt(s, e, n, c, a, {
                  time: u.time + u.delay + u.duration,
                  delay: 0,
                  duration: u.duration,
                  ease: u.ease,
                });
              }
          return new qt(o, this._parents, e, n);
        },
        call: Zt.call,
        nodes: Zt.nodes,
        node: Zt.node,
        size: Zt.size,
        empty: Zt.empty,
        each: Zt.each,
        on: function (e, t) {
          var n = this._id;
          return arguments.length < 2
            ? dt(this.node(), n).on.on(e)
            : this.each(
                (function (e, t, n) {
                  var o,
                    r,
                    i = (function (e) {
                      return (e + "")
                        .trim()
                        .split(/^|\s+/)
                        .every(function (e) {
                          var t = e.indexOf(".");
                          return (
                            t >= 0 && (e = e.slice(0, t)), !e || "start" === e
                          );
                        });
                    })(t)
                      ? ct
                      : ut;
                  return function () {
                    var s = i(this, e),
                      a = s.on;
                    a !== o && (r = (o = a).copy()).on(t, n), (s.on = r);
                  };
                })(n, e, t),
              );
        },
        attr: function (e, t) {
          var n = P(e),
            o = "transform" === n ? bt : Mt;
          return this.attrTween(
            e,
            "function" == typeof t
              ? (n.local ? jt : Dt)(n, o, Et(this, "attr." + e, t))
              : null == t
                ? (n.local ? Pt : Nt)(n)
                : (n.local ? Ot : At)(n, o, t),
          );
        },
        attrTween: function (e, t) {
          var n = "attr." + e;
          if (arguments.length < 2) return (n = this.tween(n)) && n._value;
          if (null == t) return this.tween(n, null);
          if ("function" != typeof t) throw new Error();
          var o = P(e);
          return this.tween(n, (o.local ? It : zt)(o, t));
        },
        style: function (e, t, n) {
          var o = "transform" == (e += "") ? xt : Mt;
          return null == t
            ? this.styleTween(
                e,
                (function (e, t) {
                  var n, o, r;
                  return function () {
                    var i = T(this, e),
                      s = (this.style.removeProperty(e), T(this, e));
                    return i === s
                      ? null
                      : i === n && s === o
                        ? r
                        : (r = t((n = i), (o = s)));
                  };
                })(e, o),
              ).on("end.style." + e, Vt(e))
            : "function" == typeof t
              ? this.styleTween(
                  e,
                  (function (e, t, n) {
                    var o, r, i;
                    return function () {
                      var s = T(this, e),
                        a = n(this),
                        l = a + "";
                      return (
                        null == a &&
                          (this.style.removeProperty(e), (l = a = T(this, e))),
                        s === l
                          ? null
                          : s === o && l === r
                            ? i
                            : ((r = l), (i = t((o = s), a)))
                      );
                    };
                  })(e, o, Et(this, "style." + e, t)),
                ).each(
                  (function (e, t) {
                    var n,
                      o,
                      r,
                      i,
                      s = "style." + t,
                      a = "end." + s;
                    return function () {
                      var l = ut(this, e),
                        c = l.on,
                        u = null == l.value[s] ? i || (i = Vt(t)) : void 0;
                      (c === n && r === u) ||
                        (o = (n = c).copy()).on(a, (r = u)),
                        (l.on = o);
                    };
                  })(this._id, e),
                )
              : this.styleTween(
                  e,
                  (function (e, t, n) {
                    var o,
                      r,
                      i = n + "";
                    return function () {
                      var s = T(this, e);
                      return s === i ? null : s === o ? r : (r = t((o = s), n));
                    };
                  })(e, o, t),
                  n,
                ).on("end.style." + e, null);
        },
        styleTween: function (e, t, n) {
          var o = "style." + (e += "");
          if (arguments.length < 2) return (o = this.tween(o)) && o._value;
          if (null == t) return this.tween(o, null);
          if ("function" != typeof t) throw new Error();
          return this.tween(
            o,
            (function (e, t, n) {
              var o, r;
              function i() {
                var i = t.apply(this, arguments);
                return (
                  i !== r &&
                    (o =
                      (r = i) &&
                      (function (e, t, n) {
                        return function (o) {
                          this.style.setProperty(e, t.call(this, o), n);
                        };
                      })(e, i, n)),
                  o
                );
              }
              return (i._value = t), i;
            })(e, t, null == n ? "" : n),
          );
        },
        text: function (e) {
          return this.tween(
            "text",
            "function" == typeof e
              ? (function (e) {
                  return function () {
                    var t = e(this);
                    this.textContent = null == t ? "" : t;
                  };
                })(Et(this, "text", e))
              : (function (e) {
                  return function () {
                    this.textContent = e;
                  };
                })(null == e ? "" : e + ""),
          );
        },
        textTween: function (e) {
          var t = "text";
          if (arguments.length < 1) return (t = this.tween(t)) && t._value;
          if (null == e) return this.tween(t, null);
          if ("function" != typeof e) throw new Error();
          return this.tween(
            t,
            (function (e) {
              var t, n;
              function o() {
                var o = e.apply(this, arguments);
                return (
                  o !== n &&
                    (t =
                      (n = o) &&
                      (function (e) {
                        return function (t) {
                          this.textContent = e.call(this, t);
                        };
                      })(o)),
                  t
                );
              }
              return (o._value = e), o;
            })(e),
          );
        },
        remove: function () {
          return this.on(
            "end.remove",
            (function (e) {
              return function () {
                var t = this.parentNode;
                for (var n in this.__transition) if (+n !== e) return;
                t && t.removeChild(this);
              };
            })(this._id),
          );
        },
        tween: function (e, t) {
          var n = this._id;
          if (((e += ""), arguments.length < 2)) {
            for (
              var o, r = dt(this.node(), n).tween, i = 0, s = r.length;
              i < s;
              ++i
            )
              if ((o = r[i]).name === e) return o.value;
            return null;
          }
          return this.each((null == t ? wt : St)(n, e, t));
        },
        delay: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(("function" == typeof e ? Bt : Lt)(t, e))
            : dt(this.node(), t).delay;
        },
        duration: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(("function" == typeof e ? Rt : $t)(t, e))
            : dt(this.node(), t).duration;
        },
        ease: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(
                (function (e, t) {
                  if ("function" != typeof t) throw new Error();
                  return function () {
                    ut(this, e).ease = t;
                  };
                })(t, e),
              )
            : dt(this.node(), t).ease;
        },
        easeVarying: function (e) {
          if ("function" != typeof e) throw new Error();
          return this.each(
            (function (e, t) {
              return function () {
                var n = t.apply(this, arguments);
                if ("function" != typeof n) throw new Error();
                ut(this, e).ease = n;
              };
            })(this._id, e),
          );
        },
        end: function () {
          var e,
            t,
            n = this,
            o = n._id,
            r = n.size();
          return new Promise(function (i, s) {
            var a = { value: s },
              l = {
                value: function () {
                  0 === --r && i();
                },
              };
            n.each(function () {
              var n = ut(this, o),
                r = n.on;
              r !== e &&
                ((t = (e = r).copy())._.cancel.push(a),
                t._.interrupt.push(a),
                t._.end.push(l)),
                (n.on = t);
            }),
              0 === r && i();
          });
        },
        [Symbol.iterator]: Zt[Symbol.iterator],
      };
      var Yt = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (e) {
          return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
        },
      };
      function Ft(e, t) {
        for (var n; !(n = e.__transition) || !(n = n[t]); )
          if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
        return n;
      }
      (we.prototype.interrupt = function (e) {
        return this.each(function () {
          ht(this, e);
        });
      }),
        (we.prototype.transition = function (e) {
          var t, n;
          e instanceof qt
            ? ((t = e._id), (e = e._name))
            : ((t = Xt()),
              ((n = Yt).time = We()),
              (e = null == e ? null : e + ""));
          for (var o = this._groups, r = o.length, i = 0; i < r; ++i)
            for (var s, a = o[i], l = a.length, c = 0; c < l; ++c)
              (s = a[c]) && lt(s, e, t, c, a, n || Ft(s, t));
          return new qt(o, this._parents, e, t);
        });
      const Kt = (e) => () => e;
      function Wt(e, { sourceEvent: t, target: n, transform: o, dispatch: r }) {
        Object.defineProperties(this, {
          type: { value: e, enumerable: !0, configurable: !0 },
          sourceEvent: { value: t, enumerable: !0, configurable: !0 },
          target: { value: n, enumerable: !0, configurable: !0 },
          transform: { value: o, enumerable: !0, configurable: !0 },
          _: { value: r },
        });
      }
      function Gt(e, t, n) {
        (this.k = e), (this.x = t), (this.y = n);
      }
      Gt.prototype = {
        constructor: Gt,
        scale: function (e) {
          return 1 === e ? this : new Gt(this.k * e, this.x, this.y);
        },
        translate: function (e, t) {
          return (0 === e) & (0 === t)
            ? this
            : new Gt(this.k, this.x + this.k * e, this.y + this.k * t);
        },
        apply: function (e) {
          return [e[0] * this.k + this.x, e[1] * this.k + this.y];
        },
        applyX: function (e) {
          return e * this.k + this.x;
        },
        applyY: function (e) {
          return e * this.k + this.y;
        },
        invert: function (e) {
          return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
        },
        invertX: function (e) {
          return (e - this.x) / this.k;
        },
        invertY: function (e) {
          return (e - this.y) / this.k;
        },
        rescaleX: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertX, this).map(e.invert, e));
        },
        rescaleY: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertY, this).map(e.invert, e));
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          );
        },
      };
      var Ut = new Gt(1, 0, 0);
      function Qt(e) {
        for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ut;
        return e.__zoom;
      }
      function Jt(e) {
        e.stopImmediatePropagation();
      }
      function en(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
      function tn(e) {
        return !((e.ctrlKey && "wheel" !== e.type) || e.button);
      }
      function nn() {
        var e = this;
        return e instanceof SVGElement
          ? (e = e.ownerSVGElement || e).hasAttribute("viewBox")
            ? [
                [(e = e.viewBox.baseVal).x, e.y],
                [e.x + e.width, e.y + e.height],
              ]
            : [
                [0, 0],
                [e.width.baseVal.value, e.height.baseVal.value],
              ]
          : [
              [0, 0],
              [e.clientWidth, e.clientHeight],
            ];
      }
      function on() {
        return this.__zoom || Ut;
      }
      function rn(e) {
        return (
          -e.deltaY *
          (1 === e.deltaMode ? 0.05 : e.deltaMode ? 1 : 0.002) *
          (e.ctrlKey ? 10 : 1)
        );
      }
      function sn() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function an(e, t, n) {
        var o = e.invertX(t[0][0]) - n[0][0],
          r = e.invertX(t[1][0]) - n[1][0],
          i = e.invertY(t[0][1]) - n[0][1],
          s = e.invertY(t[1][1]) - n[1][1];
        return e.translate(
          r > o ? (o + r) / 2 : Math.min(0, o) || Math.max(0, r),
          s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s),
        );
      }
      function ln() {
        var e,
          t,
          n,
          o = tn,
          r = nn,
          i = an,
          s = rn,
          a = sn,
          c = [0, 1 / 0],
          u = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          d = 250,
          h = Re,
          f = l("start", "zoom", "end"),
          p = 0,
          g = 10;
        function m(e) {
          e.property("__zoom", on)
            .on("wheel.zoom", E, { passive: !1 })
            .on("mousedown.zoom", _)
            .on("dblclick.zoom", C)
            .filter(a)
            .on("touchstart.zoom", k)
            .on("touchmove.zoom", M)
            .on("touchend.zoom touchcancel.zoom", N)
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function y(e, t) {
          return (t = Math.max(c[0], Math.min(c[1], t))) === e.k
            ? e
            : new Gt(t, e.x, e.y);
        }
        function v(e, t, n) {
          var o = t[0] - n[0] * e.k,
            r = t[1] - n[1] * e.k;
          return o === e.x && r === e.y ? e : new Gt(e.k, o, r);
        }
        function x(e) {
          return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
        }
        function b(e, t, n, o) {
          e.on("start.zoom", function () {
            w(this, arguments).event(o).start();
          })
            .on("interrupt.zoom end.zoom", function () {
              w(this, arguments).event(o).end();
            })
            .tween("zoom", function () {
              var e = this,
                i = arguments,
                s = w(e, i).event(o),
                a = r.apply(e, i),
                l =
                  null == n ? x(a) : "function" == typeof n ? n.apply(e, i) : n,
                c = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                u = e.__zoom,
                d = "function" == typeof t ? t.apply(e, i) : t,
                f = h(u.invert(l).concat(c / u.k), d.invert(l).concat(c / d.k));
              return function (e) {
                if (1 === e) e = d;
                else {
                  var t = f(e),
                    n = c / t[2];
                  e = new Gt(n, l[0] - t[0] * n, l[1] - t[1] * n);
                }
                s.zoom(null, e);
              };
            });
        }
        function w(e, t, n) {
          return (!n && e.__zooming) || new S(e, t);
        }
        function S(e, t) {
          (this.that = e),
            (this.args = t),
            (this.active = 0),
            (this.sourceEvent = null),
            (this.extent = r.apply(e, t)),
            (this.taps = 0);
        }
        function E(e, ...t) {
          if (o.apply(this, arguments)) {
            var n = w(this, t).event(e),
              r = this.__zoom,
              a = Math.max(
                c[0],
                Math.min(c[1], r.k * Math.pow(2, s.apply(this, arguments))),
              ),
              l = Ee(e);
            if (n.wheel)
              (n.mouse[0][0] === l[0] && n.mouse[0][1] === l[1]) ||
                (n.mouse[1] = r.invert((n.mouse[0] = l))),
                clearTimeout(n.wheel);
            else {
              if (r.k === a) return;
              (n.mouse = [l, r.invert(l)]), ht(this), n.start();
            }
            en(e),
              (n.wheel = setTimeout(function () {
                (n.wheel = null), n.end();
              }, 150)),
              n.zoom(
                "mouse",
                i(v(y(r, a), n.mouse[0], n.mouse[1]), n.extent, u),
              );
          }
        }
        function _(e, ...t) {
          if (!n && o.apply(this, arguments)) {
            var r = e.currentTarget,
              s = w(this, t, !0).event(e),
              a = Se(e.view)
                .on(
                  "mousemove.zoom",
                  function (e) {
                    if ((en(e), !s.moved)) {
                      var t = e.clientX - c,
                        n = e.clientY - d;
                      s.moved = t * t + n * n > p;
                    }
                    s.event(e).zoom(
                      "mouse",
                      i(
                        v(s.that.__zoom, (s.mouse[0] = Ee(e, r)), s.mouse[1]),
                        s.extent,
                        u,
                      ),
                    );
                  },
                  !0,
                )
                .on(
                  "mouseup.zoom",
                  function (e) {
                    a.on("mousemove.zoom mouseup.zoom", null),
                      Pe(e.view, s.moved),
                      en(e),
                      s.event(e).end();
                  },
                  !0,
                ),
              l = Ee(e, r),
              c = e.clientX,
              d = e.clientY;
            Ne(e.view),
              Jt(e),
              (s.mouse = [l, this.__zoom.invert(l)]),
              ht(this),
              s.start();
          }
        }
        function C(e, ...t) {
          if (o.apply(this, arguments)) {
            var n = this.__zoom,
              s = Ee(e.changedTouches ? e.changedTouches[0] : e, this),
              a = n.invert(s),
              l = n.k * (e.shiftKey ? 0.5 : 2),
              c = i(v(y(n, l), s, a), r.apply(this, t), u);
            en(e),
              d > 0
                ? Se(this).transition().duration(d).call(b, c, s, e)
                : Se(this).call(m.transform, c, s, e);
          }
        }
        function k(n, ...r) {
          if (o.apply(this, arguments)) {
            var i,
              s,
              a,
              l,
              c = n.touches,
              u = c.length,
              d = w(this, r, n.changedTouches.length === u).event(n);
            for (Jt(n), s = 0; s < u; ++s)
              (l = [
                (l = Ee((a = c[s]), this)),
                this.__zoom.invert(l),
                a.identifier,
              ]),
                d.touch0
                  ? d.touch1 ||
                    d.touch0[2] === l[2] ||
                    ((d.touch1 = l), (d.taps = 0))
                  : ((d.touch0 = l), (i = !0), (d.taps = 1 + !!e));
            e && (e = clearTimeout(e)),
              i &&
                (d.taps < 2 &&
                  ((t = l[0]),
                  (e = setTimeout(function () {
                    e = null;
                  }, 500))),
                ht(this),
                d.start());
          }
        }
        function M(e, ...t) {
          if (this.__zooming) {
            var n,
              o,
              r,
              s,
              a = w(this, t).event(e),
              l = e.changedTouches,
              c = l.length;
            for (en(e), n = 0; n < c; ++n)
              (r = Ee((o = l[n]), this)),
                a.touch0 && a.touch0[2] === o.identifier
                  ? (a.touch0[0] = r)
                  : a.touch1 &&
                    a.touch1[2] === o.identifier &&
                    (a.touch1[0] = r);
            if (((o = a.that.__zoom), a.touch1)) {
              var d = a.touch0[0],
                h = a.touch0[1],
                f = a.touch1[0],
                p = a.touch1[1],
                g = (g = f[0] - d[0]) * g + (g = f[1] - d[1]) * g,
                m = (m = p[0] - h[0]) * m + (m = p[1] - h[1]) * m;
              (o = y(o, Math.sqrt(g / m))),
                (r = [(d[0] + f[0]) / 2, (d[1] + f[1]) / 2]),
                (s = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2]);
            } else {
              if (!a.touch0) return;
              (r = a.touch0[0]), (s = a.touch0[1]);
            }
            a.zoom("touch", i(v(o, r, s), a.extent, u));
          }
        }
        function N(e, ...o) {
          if (this.__zooming) {
            var r,
              i,
              s = w(this, o).event(e),
              a = e.changedTouches,
              l = a.length;
            for (
              Jt(e),
                n && clearTimeout(n),
                n = setTimeout(function () {
                  n = null;
                }, 500),
                r = 0;
              r < l;
              ++r
            )
              (i = a[r]),
                s.touch0 && s.touch0[2] === i.identifier
                  ? delete s.touch0
                  : s.touch1 && s.touch1[2] === i.identifier && delete s.touch1;
            if (
              (s.touch1 &&
                !s.touch0 &&
                ((s.touch0 = s.touch1), delete s.touch1),
              s.touch0)
            )
              s.touch0[1] = this.__zoom.invert(s.touch0[0]);
            else if (
              (s.end(),
              2 === s.taps &&
                ((i = Ee(i, this)), Math.hypot(t[0] - i[0], t[1] - i[1]) < g))
            ) {
              var c = Se(this).on("dblclick.zoom");
              c && c.apply(this, arguments);
            }
          }
        }
        return (
          (m.transform = function (e, t, n, o) {
            var r = e.selection ? e.selection() : e;
            r.property("__zoom", on),
              e !== r
                ? b(e, t, n, o)
                : r.interrupt().each(function () {
                    w(this, arguments)
                      .event(o)
                      .start()
                      .zoom(
                        null,
                        "function" == typeof t ? t.apply(this, arguments) : t,
                      )
                      .end();
                  });
          }),
          (m.scaleBy = function (e, t, n, o) {
            m.scaleTo(
              e,
              function () {
                return (
                  this.__zoom.k *
                  ("function" == typeof t ? t.apply(this, arguments) : t)
                );
              },
              n,
              o,
            );
          }),
          (m.scaleTo = function (e, t, n, o) {
            m.transform(
              e,
              function () {
                var e = r.apply(this, arguments),
                  o = this.__zoom,
                  s =
                    null == n
                      ? x(e)
                      : "function" == typeof n
                        ? n.apply(this, arguments)
                        : n,
                  a = o.invert(s),
                  l = "function" == typeof t ? t.apply(this, arguments) : t;
                return i(v(y(o, l), s, a), e, u);
              },
              n,
              o,
            );
          }),
          (m.translateBy = function (e, t, n, o) {
            m.transform(
              e,
              function () {
                return i(
                  this.__zoom.translate(
                    "function" == typeof t ? t.apply(this, arguments) : t,
                    "function" == typeof n ? n.apply(this, arguments) : n,
                  ),
                  r.apply(this, arguments),
                  u,
                );
              },
              null,
              o,
            );
          }),
          (m.translateTo = function (e, t, n, o, s) {
            m.transform(
              e,
              function () {
                var e = r.apply(this, arguments),
                  s = this.__zoom,
                  a =
                    null == o
                      ? x(e)
                      : "function" == typeof o
                        ? o.apply(this, arguments)
                        : o;
                return i(
                  Ut.translate(a[0], a[1])
                    .scale(s.k)
                    .translate(
                      "function" == typeof t ? -t.apply(this, arguments) : -t,
                      "function" == typeof n ? -n.apply(this, arguments) : -n,
                    ),
                  e,
                  u,
                );
              },
              o,
              s,
            );
          }),
          (S.prototype = {
            event: function (e) {
              return e && (this.sourceEvent = e), this;
            },
            start: function () {
              return (
                1 === ++this.active &&
                  ((this.that.__zooming = this), this.emit("start")),
                this
              );
            },
            zoom: function (e, t) {
              return (
                this.mouse &&
                  "mouse" !== e &&
                  (this.mouse[1] = t.invert(this.mouse[0])),
                this.touch0 &&
                  "touch" !== e &&
                  (this.touch0[1] = t.invert(this.touch0[0])),
                this.touch1 &&
                  "touch" !== e &&
                  (this.touch1[1] = t.invert(this.touch1[0])),
                (this.that.__zoom = t),
                this.emit("zoom"),
                this
              );
            },
            end: function () {
              return (
                0 === --this.active &&
                  (delete this.that.__zooming, this.emit("end")),
                this
              );
            },
            emit: function (e) {
              var t = Se(this.that).datum();
              f.call(
                e,
                this.that,
                new Wt(e, {
                  sourceEvent: this.sourceEvent,
                  target: m,
                  type: e,
                  transform: this.that.__zoom,
                  dispatch: f,
                }),
                t,
              );
            },
          }),
          (m.wheelDelta = function (e) {
            return arguments.length
              ? ((s = "function" == typeof e ? e : Kt(+e)), m)
              : s;
          }),
          (m.filter = function (e) {
            return arguments.length
              ? ((o = "function" == typeof e ? e : Kt(!!e)), m)
              : o;
          }),
          (m.touchable = function (e) {
            return arguments.length
              ? ((a = "function" == typeof e ? e : Kt(!!e)), m)
              : a;
          }),
          (m.extent = function (e) {
            return arguments.length
              ? ((r =
                  "function" == typeof e
                    ? e
                    : Kt([
                        [+e[0][0], +e[0][1]],
                        [+e[1][0], +e[1][1]],
                      ])),
                m)
              : r;
          }),
          (m.scaleExtent = function (e) {
            return arguments.length
              ? ((c[0] = +e[0]), (c[1] = +e[1]), m)
              : [c[0], c[1]];
          }),
          (m.translateExtent = function (e) {
            return arguments.length
              ? ((u[0][0] = +e[0][0]),
                (u[1][0] = +e[1][0]),
                (u[0][1] = +e[0][1]),
                (u[1][1] = +e[1][1]),
                m)
              : [
                  [u[0][0], u[0][1]],
                  [u[1][0], u[1][1]],
                ];
          }),
          (m.constrain = function (e) {
            return arguments.length ? ((i = e), m) : i;
          }),
          (m.duration = function (e) {
            return arguments.length ? ((d = +e), m) : d;
          }),
          (m.interpolate = function (e) {
            return arguments.length ? ((h = e), m) : h;
          }),
          (m.on = function () {
            var e = f.on.apply(f, arguments);
            return e === f ? m : e;
          }),
          (m.clickDistance = function (e) {
            return arguments.length ? ((p = (e = +e) * e), m) : Math.sqrt(p);
          }),
          (m.tapDistance = function (e) {
            return arguments.length ? ((g = +e), m) : g;
          }),
          m
        );
      }
      Qt.prototype = Gt.prototype;
      const cn = {
          error001: () =>
            "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
          error002: () =>
            "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
          error003: (e) =>
            `Node type "${e}" not found. Using fallback type "default".`,
          error004: () =>
            "The React Flow parent container needs a width and a height to render the graph.",
          error005: () => "Only child nodes can use a parent extent.",
          error006: () =>
            "Can't create edge. An edge needs a source and a target.",
          error007: (e) => `The old edge with id=${e} does not exist.`,
          error009: (e) => `Marker type "${e}" doesn't exist.`,
          error008: (e, { id: t, sourceHandle: n, targetHandle: o }) =>
            `Couldn't create edge for ${e} handle id: "${"source" === e ? n : o}", edge id: ${t}.`,
          error010: () =>
            "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
          error011: (e) =>
            `Edge type "${e}" not found. Using fallback type "default".`,
          error012: (e) =>
            `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
          error013: (e = "react") =>
            `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
        },
        un = [
          [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
          [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
        ],
        dn = ["Enter", " ", "Escape"];
      var hn, fn, pn;
      !(function (e) {
        (e.Strict = "strict"), (e.Loose = "loose");
      })(hn || (hn = {})),
        (function (e) {
          (e.Free = "free"),
            (e.Vertical = "vertical"),
            (e.Horizontal = "horizontal");
        })(fn || (fn = {})),
        (function (e) {
          (e.Partial = "partial"), (e.Full = "full");
        })(pn || (pn = {}));
      const gn = {
        inProgress: !1,
        isValid: null,
        from: null,
        fromHandle: null,
        fromPosition: null,
        fromNode: null,
        to: null,
        toHandle: null,
        toPosition: null,
        toNode: null,
      };
      var mn, yn, vn;
      !(function (e) {
        (e.Bezier = "default"),
          (e.Straight = "straight"),
          (e.Step = "step"),
          (e.SmoothStep = "smoothstep"),
          (e.SimpleBezier = "simplebezier");
      })(mn || (mn = {})),
        (function (e) {
          (e.Arrow = "arrow"), (e.ArrowClosed = "arrowclosed");
        })(yn || (yn = {})),
        (function (e) {
          (e.Left = "left"),
            (e.Top = "top"),
            (e.Right = "right"),
            (e.Bottom = "bottom");
        })(vn || (vn = {}));
      const xn = {
        [vn.Left]: vn.Right,
        [vn.Right]: vn.Left,
        [vn.Top]: vn.Bottom,
        [vn.Bottom]: vn.Top,
      };
      function bn(e) {
        return null === e ? null : e ? "valid" : "invalid";
      }
      const wn = (e) => "id" in e && "source" in e && "target" in e,
        Sn = (e) =>
          "id" in e && "position" in e && !("source" in e) && !("target" in e),
        En = (e) =>
          "id" in e && "internals" in e && !("source" in e) && !("target" in e),
        _n = (e, t = [0, 0]) => {
          const { width: n, height: o } = eo(e),
            r = e.origin ?? t,
            i = n * r[0],
            s = o * r[1];
          return { x: e.position.x - i, y: e.position.y - s };
        },
        Cn = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
          if (0 === e.length) return { x: 0, y: 0, width: 0, height: 0 };
          const n = e.reduce(
            (e, n) => {
              const o = "string" == typeof n;
              let r = t.nodeLookup || o ? void 0 : n;
              t.nodeLookup &&
                (r = o
                  ? t.nodeLookup.get(n)
                  : En(n)
                    ? n
                    : t.nodeLookup.get(n.id));
              const i = r ? Hn(r, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
              return Rn(e, i);
            },
            { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
          );
          return Tn(n);
        },
        kn = (e, t = {}) => {
          if (0 === e.size) return { x: 0, y: 0, width: 0, height: 0 };
          let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
          return (
            e.forEach((e) => {
              if (void 0 === t.filter || t.filter(e)) {
                const t = Hn(e);
                n = Rn(n, t);
              }
            }),
            Tn(n)
          );
        },
        Mn = (e, t, [n, o, r] = [0, 0, 1], i = !1, s = !1) => {
          const a = {
              ...Wn(t, [n, o, r]),
              width: t.width / r,
              height: t.height / r,
            },
            l = [];
          for (const t of e.values()) {
            const { measured: e, selectable: n = !0, hidden: o = !1 } = t;
            if ((s && !n) || o) continue;
            const r = e.width ?? t.width ?? t.initialWidth ?? null,
              c = e.height ?? t.height ?? t.initialHeight ?? null,
              u = Xn(a, Vn(t)),
              d = (r ?? 0) * (c ?? 0),
              h = i && u > 0;
            (!t.internals.handleBounds || h || u >= d || t.dragging) &&
              l.push(t);
          }
          return l;
        },
        Nn = (e, t) => {
          const n = new Set();
          return (
            e.forEach((e) => {
              n.add(e.id);
            }),
            t.filter((e) => n.has(e.source) || n.has(e.target))
          );
        };
      function Pn(e, t) {
        const n = new Map(),
          o = t?.nodes ? new Set(t.nodes.map((e) => e.id)) : null;
        return (
          e.forEach((e) => {
            !(
              e.measured.width &&
              e.measured.height &&
              (t?.includeHiddenNodes || !e.hidden)
            ) ||
              (o && !o.has(e.id)) ||
              n.set(e.id, e);
          }),
          n
        );
      }
      async function An(
        { nodes: e, width: t, height: n, panZoom: o, minZoom: r, maxZoom: i },
        s,
      ) {
        if (0 === e.size) return Promise.resolve(!1);
        const a = kn(e),
          l = Un(a, t, n, s?.minZoom ?? r, s?.maxZoom ?? i, s?.padding ?? 0.1);
        return (
          await o.setViewport(l, { duration: s?.duration }), Promise.resolve(!0)
        );
      }
      function On({
        nodeId: e,
        nextPosition: t,
        nodeLookup: n,
        nodeOrigin: o = [0, 0],
        nodeExtent: r,
        onError: i,
      }) {
        const s = n.get(e),
          a = s.parentId ? n.get(s.parentId) : void 0,
          { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 },
          u = s.origin ?? o;
        let d = r;
        if ("parent" !== s.extent || s.expandParent)
          a &&
            Jn(s.extent) &&
            (d = [
              [s.extent[0][0] + l, s.extent[0][1] + c],
              [s.extent[1][0] + l, s.extent[1][1] + c],
            ]);
        else if (a) {
          const e = a.measured.width,
            t = a.measured.height;
          e &&
            t &&
            (d = [
              [l, c],
              [l + e, c + t],
            ]);
        } else i?.("005", cn.error005());
        const h = Jn(d) ? In(t, d, s.measured) : t;
        return {
          position: {
            x: h.x - l + s.measured.width * u[0],
            y: h.y - c + s.measured.height * u[1],
          },
          positionAbsolute: h,
        };
      }
      async function Dn({
        nodesToRemove: e = [],
        edgesToRemove: t = [],
        nodes: n,
        edges: o,
        onBeforeDelete: r,
      }) {
        const i = new Set(e.map((e) => e.id)),
          s = [];
        for (const e of n) {
          if (!1 === e.deletable) continue;
          const t = i.has(e.id),
            n = !t && e.parentId && s.find((t) => t.id === e.parentId);
          (t || n) && s.push(e);
        }
        const a = new Set(t.map((e) => e.id)),
          l = o.filter((e) => !1 !== e.deletable),
          c = Nn(s, l);
        for (const e of l) {
          a.has(e.id) && !c.find((t) => t.id === e.id) && c.push(e);
        }
        if (!r) return { edges: c, nodes: s };
        const u = await r({ nodes: s, edges: c });
        return "boolean" == typeof u
          ? u
            ? { edges: c, nodes: s }
            : { edges: [], nodes: [] }
          : u;
      }
      const jn = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
        In = (e = { x: 0, y: 0 }, t, n) => ({
          x: jn(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
          y: jn(e.y, t[0][1], t[1][1] - (n?.height ?? 0)),
        });
      function zn(e, t, n) {
        const { width: o, height: r } = eo(n),
          { x: i, y: s } = n.internals.positionAbsolute;
        return In(
          e,
          [
            [i, s],
            [i + o, s + r],
          ],
          t,
        );
      }
      const Bn = (e, t, n) =>
          e < t
            ? jn(Math.abs(e - t), 1, t) / t
            : e > n
              ? -jn(Math.abs(e - n), 1, t) / t
              : 0,
        Ln = (e, t, n = 15, o = 40) => [
          Bn(e.x, o, t.width - o) * n,
          Bn(e.y, o, t.height - o) * n,
        ],
        Rn = (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          x2: Math.max(e.x2, t.x2),
          y2: Math.max(e.y2, t.y2),
        }),
        $n = ({ x: e, y: t, width: n, height: o }) => ({
          x: e,
          y: t,
          x2: e + n,
          y2: t + o,
        }),
        Tn = ({ x: e, y: t, x2: n, y2: o }) => ({
          x: e,
          y: t,
          width: n - e,
          height: o - t,
        }),
        Vn = (e, t = [0, 0]) => {
          const { x: n, y: o } = En(e)
            ? e.internals.positionAbsolute
            : _n(e, t);
          return {
            x: n,
            y: o,
            width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
            height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0,
          };
        },
        Hn = (e, t = [0, 0]) => {
          const { x: n, y: o } = En(e)
            ? e.internals.positionAbsolute
            : _n(e, t);
          return {
            x: n,
            y: o,
            x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
            y2: o + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0),
          };
        },
        qn = (e, t) => Tn(Rn($n(e), $n(t))),
        Xn = (e, t) => {
          const n = Math.max(
              0,
              Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x),
            ),
            o = Math.max(
              0,
              Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y),
            );
          return Math.ceil(n * o);
        },
        Zn = (e) => Yn(e.width) && Yn(e.height) && Yn(e.x) && Yn(e.y),
        Yn = (e) => !isNaN(e) && isFinite(e),
        Fn = (e, t) => {
          0;
        },
        Kn = (e, t = [1, 1]) => ({
          x: t[0] * Math.round(e.x / t[0]),
          y: t[1] * Math.round(e.y / t[1]),
        }),
        Wn = ({ x: e, y: t }, [n, o, r], i = !1, s = [1, 1]) => {
          const a = { x: (e - n) / r, y: (t - o) / r };
          return i ? Kn(a, s) : a;
        },
        Gn = ({ x: e, y: t }, [n, o, r]) => ({ x: e * r + n, y: t * r + o }),
        Un = (e, t, n, o, r, i) => {
          const s = t / (e.width * (1 + i)),
            a = n / (e.height * (1 + i)),
            l = Math.min(s, a),
            c = jn(l, o, r);
          return {
            x: t / 2 - (e.x + e.width / 2) * c,
            y: n / 2 - (e.y + e.height / 2) * c,
            zoom: c,
          };
        },
        Qn = () =>
          "undefined" != typeof navigator &&
          navigator?.userAgent?.indexOf("Mac") >= 0;
      function Jn(e) {
        return void 0 !== e && "parent" !== e;
      }
      function eo(e) {
        return {
          width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
          height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0,
        };
      }
      function to(e) {
        return (
          void 0 !== (e.measured?.width ?? e.width ?? e.initialWidth) &&
          void 0 !== (e.measured?.height ?? e.height ?? e.initialHeight)
        );
      }
      function no(e, t = { width: 0, height: 0 }, n, o, r) {
        const i = { ...e },
          s = o.get(n);
        if (s) {
          const e = s.origin || r;
          (i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * e[0]),
            (i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * e[1]);
        }
        return i;
      }
      function oo(
        e,
        {
          snapGrid: t = [0, 0],
          snapToGrid: n = !1,
          transform: o,
          containerBounds: r,
        },
      ) {
        const { x: i, y: s } = co(e),
          a = Wn({ x: i - (r?.left ?? 0), y: s - (r?.top ?? 0) }, o),
          { x: l, y: c } = n ? Kn(a, t) : a;
        return { xSnapped: l, ySnapped: c, ...a };
      }
      const ro = (e) => ({ width: e.offsetWidth, height: e.offsetHeight }),
        io = (e) => e.getRootNode?.() || window?.document,
        so = ["INPUT", "SELECT", "TEXTAREA"];
      function ao(e) {
        const t = e.composedPath?.()?.[0] || e.target;
        return (
          so.includes(t?.nodeName) ||
          t?.hasAttribute?.("contenteditable") ||
          !!t?.closest(".nokey")
        );
      }
      const lo = (e) => "clientX" in e,
        co = (e, t) => {
          const n = lo(e),
            o = n ? e.clientX : e.touches?.[0].clientX,
            r = n ? e.clientY : e.touches?.[0].clientY;
          return { x: o - (t?.left ?? 0), y: r - (t?.top ?? 0) };
        },
        uo = (e, t, n, o, r) => {
          const i = t.querySelectorAll(`.${e}`);
          return i && i.length
            ? Array.from(i).map((t) => {
                const i = t.getBoundingClientRect();
                return {
                  id: t.getAttribute("data-handleid"),
                  type: e,
                  nodeId: r,
                  position: t.getAttribute("data-handlepos"),
                  x: (i.left - n.left) / o,
                  y: (i.top - n.top) / o,
                  ...ro(t),
                };
              })
            : null;
        };
      function ho({
        sourceX: e,
        sourceY: t,
        targetX: n,
        targetY: o,
        sourceControlX: r,
        sourceControlY: i,
        targetControlX: s,
        targetControlY: a,
      }) {
        const l = 0.125 * e + 0.375 * r + 0.375 * s + 0.125 * n,
          c = 0.125 * t + 0.375 * i + 0.375 * a + 0.125 * o;
        return [l, c, Math.abs(l - e), Math.abs(c - t)];
      }
      function fo(e, t) {
        return e >= 0 ? 0.5 * e : 25 * t * Math.sqrt(-e);
      }
      function po({ pos: e, x1: t, y1: n, x2: o, y2: r, c: i }) {
        switch (e) {
          case vn.Left:
            return [t - fo(t - o, i), n];
          case vn.Right:
            return [t + fo(o - t, i), n];
          case vn.Top:
            return [t, n - fo(n - r, i)];
          case vn.Bottom:
            return [t, n + fo(r - n, i)];
        }
      }
      function go({
        sourceX: e,
        sourceY: t,
        sourcePosition: n = vn.Bottom,
        targetX: o,
        targetY: r,
        targetPosition: i = vn.Top,
        curvature: s = 0.25,
      }) {
        const [a, l] = po({ pos: n, x1: e, y1: t, x2: o, y2: r, c: s }),
          [c, u] = po({ pos: i, x1: o, y1: r, x2: e, y2: t, c: s }),
          [d, h, f, p] = ho({
            sourceX: e,
            sourceY: t,
            targetX: o,
            targetY: r,
            sourceControlX: a,
            sourceControlY: l,
            targetControlX: c,
            targetControlY: u,
          });
        return [`M${e},${t} C${a},${l} ${c},${u} ${o},${r}`, d, h, f, p];
      }
      function mo({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
        const r = Math.abs(n - e) / 2,
          i = n < e ? n + r : n - r,
          s = Math.abs(o - t) / 2;
        return [i, o < t ? o + s : o - s, r, s];
      }
      function yo({
        sourceNode: e,
        targetNode: t,
        selected: n = !1,
        zIndex: o = 0,
        elevateOnSelect: r = !1,
      }) {
        if (!r) return o;
        const i = n || t.selected || e.selected,
          s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
        return o + (i ? s : 0);
      }
      function vo({
        sourceNode: e,
        targetNode: t,
        width: n,
        height: o,
        transform: r,
      }) {
        const i = Rn(Hn(e), Hn(t));
        i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
        const s = {
          x: -r[0] / r[2],
          y: -r[1] / r[2],
          width: n / r[2],
          height: o / r[2],
        };
        return Xn(s, Tn(i)) > 0;
      }
      const xo = ({ source: e, sourceHandle: t, target: n, targetHandle: o }) =>
          `xy-edge__${e}${t || ""}-${n}${o || ""}`,
        bo = (e, t) => {
          if (!e.source || !e.target) return Fn("006", cn.error006()), t;
          let n;
          return (
            (n = wn(e) ? { ...e } : { ...e, id: xo(e) }),
            ((e, t) =>
              t.some(
                (t) =>
                  !(
                    t.source !== e.source ||
                    t.target !== e.target ||
                    (t.sourceHandle !== e.sourceHandle &&
                      (t.sourceHandle || e.sourceHandle)) ||
                    (t.targetHandle !== e.targetHandle &&
                      (t.targetHandle || e.targetHandle))
                  ),
              ))(n, t)
              ? t
              : (null === n.sourceHandle && delete n.sourceHandle,
                null === n.targetHandle && delete n.targetHandle,
                t.concat(n))
          );
        };
      function wo({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
        const [r, i, s, a] = mo({
          sourceX: e,
          sourceY: t,
          targetX: n,
          targetY: o,
        });
        return [`M ${e},${t}L ${n},${o}`, r, i, s, a];
      }
      const So = {
          [vn.Left]: { x: -1, y: 0 },
          [vn.Right]: { x: 1, y: 0 },
          [vn.Top]: { x: 0, y: -1 },
          [vn.Bottom]: { x: 0, y: 1 },
        },
        Eo = ({ source: e, sourcePosition: t = vn.Bottom, target: n }) =>
          t === vn.Left || t === vn.Right
            ? e.x < n.x
              ? { x: 1, y: 0 }
              : { x: -1, y: 0 }
            : e.y < n.y
              ? { x: 0, y: 1 }
              : { x: 0, y: -1 },
        _o = (e, t) =>
          Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      function Co({
        sourceX: e,
        sourceY: t,
        sourcePosition: n = vn.Bottom,
        targetX: o,
        targetY: r,
        targetPosition: i = vn.Top,
        borderRadius: s = 5,
        centerX: a,
        centerY: l,
        offset: c = 20,
      }) {
        const [u, d, h, f, p] = (function ({
            source: e,
            sourcePosition: t = vn.Bottom,
            target: n,
            targetPosition: o = vn.Top,
            center: r,
            offset: i,
          }) {
            const s = So[t],
              a = So[o],
              l = { x: e.x + s.x * i, y: e.y + s.y * i },
              c = { x: n.x + a.x * i, y: n.y + a.y * i },
              u = Eo({ source: l, sourcePosition: t, target: c }),
              d = 0 !== u.x ? "x" : "y",
              h = u[d];
            let f,
              p,
              g = [];
            const m = { x: 0, y: 0 },
              y = { x: 0, y: 0 },
              [v, x, b, w] = mo({
                sourceX: e.x,
                sourceY: e.y,
                targetX: n.x,
                targetY: n.y,
              });
            if (s[d] * a[d] === -1) {
              (f = r.x ?? v), (p = r.y ?? x);
              const e = [
                  { x: f, y: l.y },
                  { x: f, y: c.y },
                ],
                t = [
                  { x: l.x, y: p },
                  { x: c.x, y: p },
                ];
              g = s[d] === h ? ("x" === d ? e : t) : "x" === d ? t : e;
            } else {
              const r = [{ x: l.x, y: c.y }],
                u = [{ x: c.x, y: l.y }];
              if (
                ((g = "x" === d ? (s.x === h ? u : r) : s.y === h ? r : u),
                t === o)
              ) {
                const t = Math.abs(e[d] - n[d]);
                if (t <= i) {
                  const o = Math.min(i - 1, i - t);
                  s[d] === h
                    ? (m[d] = (l[d] > e[d] ? -1 : 1) * o)
                    : (y[d] = (c[d] > n[d] ? -1 : 1) * o);
                }
              }
              if (t !== o) {
                const e = "x" === d ? "y" : "x",
                  t = s[d] === a[e],
                  n = l[e] > c[e],
                  o = l[e] < c[e];
                ((1 === s[d] && ((!t && n) || (t && o))) ||
                  (1 !== s[d] && ((!t && o) || (t && n)))) &&
                  (g = "x" === d ? r : u);
              }
              const v = { x: l.x + m.x, y: l.y + m.y },
                x = { x: c.x + y.x, y: c.y + y.y };
              Math.max(Math.abs(v.x - g[0].x), Math.abs(x.x - g[0].x)) >=
              Math.max(Math.abs(v.y - g[0].y), Math.abs(x.y - g[0].y))
                ? ((f = (v.x + x.x) / 2), (p = g[0].y))
                : ((f = g[0].x), (p = (v.y + x.y) / 2));
            }
            return [
              [
                e,
                { x: l.x + m.x, y: l.y + m.y },
                ...g,
                { x: c.x + y.x, y: c.y + y.y },
                n,
              ],
              f,
              p,
              b,
              w,
            ];
          })({
            source: { x: e, y: t },
            sourcePosition: n,
            target: { x: o, y: r },
            targetPosition: i,
            center: { x: a, y: l },
            offset: c,
          }),
          g = u.reduce((e, t, n) => {
            let o = "";
            return (
              (o =
                n > 0 && n < u.length - 1
                  ? (function (e, t, n, o) {
                      const r = Math.min(_o(e, t) / 2, _o(t, n) / 2, o),
                        { x: i, y: s } = t;
                      if ((e.x === i && i === n.x) || (e.y === s && s === n.y))
                        return `L${i} ${s}`;
                      if (e.y === s)
                        return `L ${i + r * (e.x < n.x ? -1 : 1)},${s}Q ${i},${s} ${i},${s + r * (e.y < n.y ? 1 : -1)}`;
                      const a = e.x < n.x ? 1 : -1;
                      return `L ${i},${s + r * (e.y < n.y ? -1 : 1)}Q ${i},${s} ${i + r * a},${s}`;
                    })(u[n - 1], t, u[n + 1], s)
                  : `${0 === n ? "M" : "L"}${t.x} ${t.y}`),
              (e += o)
            );
          }, "");
        return [g, d, h, f, p];
      }
      function ko(e) {
        return (
          e &&
          !(!e.internals.handleBounds && !e.handles?.length) &&
          !!(e.measured.width || e.width || e.initialWidth)
        );
      }
      function Mo(e) {
        const { sourceNode: t, targetNode: n } = e;
        if (!ko(t) || !ko(n)) return null;
        const o = t.internals.handleBounds || No(t.handles),
          r = n.internals.handleBounds || No(n.handles),
          i = Ao(o?.source ?? [], e.sourceHandle),
          s = Ao(
            e.connectionMode === hn.Strict
              ? (r?.target ?? [])
              : (r?.target ?? []).concat(r?.source ?? []),
            e.targetHandle,
          );
        if (!i || !s)
          return (
            e.onError?.(
              "008",
              cn.error008(i ? "target" : "source", {
                id: e.id,
                sourceHandle: e.sourceHandle,
                targetHandle: e.targetHandle,
              }),
            ),
            null
          );
        const a = i?.position || vn.Bottom,
          l = s?.position || vn.Top,
          c = Po(t, i, a),
          u = Po(n, s, l);
        return {
          sourceX: c.x,
          sourceY: c.y,
          targetX: u.x,
          targetY: u.y,
          sourcePosition: a,
          targetPosition: l,
        };
      }
      function No(e) {
        if (!e) return null;
        const t = [],
          n = [];
        for (const o of e)
          (o.width = o.width ?? 1),
            (o.height = o.height ?? 1),
            "source" === o.type ? t.push(o) : "target" === o.type && n.push(o);
        return { source: t, target: n };
      }
      function Po(e, t, n = vn.Left, o = !1) {
        const r = (t?.x ?? 0) + e.internals.positionAbsolute.x,
          i = (t?.y ?? 0) + e.internals.positionAbsolute.y,
          { width: s, height: a } = t ?? eo(e);
        if (o) return { x: r + s / 2, y: i + a / 2 };
        switch (t?.position ?? n) {
          case vn.Top:
            return { x: r + s / 2, y: i };
          case vn.Right:
            return { x: r + s, y: i + a / 2 };
          case vn.Bottom:
            return { x: r + s / 2, y: i + a };
          case vn.Left:
            return { x: r, y: i + a / 2 };
        }
      }
      function Ao(e, t) {
        return (e && (t ? e.find((e) => e.id === t) : e[0])) || null;
      }
      function Oo(e, t) {
        if (!e) return "";
        if ("string" == typeof e) return e;
        return `${t ? `${t}__` : ""}${Object.keys(e)
          .sort()
          .map((t) => `${t}=${e[t]}`)
          .join("&")}`;
      }
      function Do(
        e,
        { id: t, defaultColor: n, defaultMarkerStart: o, defaultMarkerEnd: r },
      ) {
        const i = new Set();
        return e
          .reduce(
            (e, s) => (
              [s.markerStart || o, s.markerEnd || r].forEach((o) => {
                if (o && "object" == typeof o) {
                  const r = Oo(o, t);
                  i.has(r) ||
                    (e.push({ id: r, color: o.color || n, ...o }), i.add(r));
                }
              }),
              e
            ),
            [],
          )
          .sort((e, t) => e.id.localeCompare(t.id));
      }
      const jo = {
          nodeOrigin: [0, 0],
          nodeExtent: un,
          elevateNodesOnSelect: !0,
          defaults: {},
        },
        Io = { ...jo, checkEquality: !0 };
      function zo(e, t) {
        const n = { ...e };
        for (const e in t) void 0 !== t[e] && (n[e] = t[e]);
        return n;
      }
      function Bo(e, t, n) {
        const o = zo(jo, n);
        for (const n of e.values())
          if (n.parentId) Ro(n, e, t, o);
          else {
            const e = _n(n, o.nodeOrigin),
              t = Jn(n.extent) ? n.extent : o.nodeExtent,
              r = In(e, t, eo(n));
            n.internals.positionAbsolute = r;
          }
      }
      function Lo(e, t, n, o) {
        const r = zo(Io, o),
          i = new Map(t),
          s = r?.elevateNodesOnSelect ? 1e3 : 0;
        t.clear(), n.clear();
        for (const a of e) {
          let e = i.get(a.id);
          if (r.checkEquality && a === e?.internals.userNode) t.set(a.id, e);
          else {
            const n = _n(a, r.nodeOrigin),
              o = Jn(a.extent) ? a.extent : r.nodeExtent,
              i = In(n, o, eo(a));
            (e = {
              ...r.defaults,
              ...a,
              measured: {
                width: a.measured?.width,
                height: a.measured?.height,
              },
              internals: {
                positionAbsolute: i,
                handleBounds: a.measured ? e?.internals.handleBounds : void 0,
                z: $o(a, s),
                userNode: a,
              },
            }),
              t.set(a.id, e);
          }
          a.parentId && Ro(e, t, n, o);
        }
      }
      function Ro(e, t, n, o) {
        const {
            elevateNodesOnSelect: r,
            nodeOrigin: i,
            nodeExtent: s,
          } = zo(jo, o),
          a = e.parentId,
          l = t.get(a);
        if (!l)
          return void console.warn(
            `Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`,
          );
        !(function (e, t) {
          if (!e.parentId) return;
          const n = t.get(e.parentId);
          n ? n.set(e.id, e) : t.set(e.parentId, new Map([[e.id, e]]));
        })(e, n);
        const c = r ? 1e3 : 0,
          {
            x: u,
            y: d,
            z: h,
          } = (function (e, t, n, o, r) {
            const { x: i, y: s } = t.internals.positionAbsolute,
              a = eo(e),
              l = _n(e, n),
              c = Jn(e.extent) ? In(l, e.extent, a) : l;
            let u = In({ x: i + c.x, y: s + c.y }, o, a);
            "parent" === e.extent && (u = zn(u, a, t));
            const d = $o(e, r),
              h = t.internals.z ?? 0;
            return { x: u.x, y: u.y, z: h > d ? h : d };
          })(e, l, i, s, c),
          { positionAbsolute: f } = e.internals,
          p = u !== f.x || d !== f.y;
        (p || h !== e.internals.z) &&
          (e.internals = {
            ...e.internals,
            positionAbsolute: p ? { x: u, y: d } : f,
            z: h,
          });
      }
      function $o(e, t) {
        return (Yn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
      }
      function To(e, t, n, o = [0, 0]) {
        const r = [],
          i = new Map();
        for (const n of e) {
          const e = t.get(n.parentId);
          if (!e) continue;
          const o = i.get(n.parentId)?.expandedRect ?? Vn(e),
            r = qn(o, n.rect);
          i.set(n.parentId, { expandedRect: r, parent: e });
        }
        return (
          i.size > 0 &&
            i.forEach(({ expandedRect: t, parent: i }, s) => {
              const a = i.internals.positionAbsolute,
                l = eo(i),
                c = i.origin ?? o,
                u = t.x < a.x ? Math.round(Math.abs(a.x - t.x)) : 0,
                d = t.y < a.y ? Math.round(Math.abs(a.y - t.y)) : 0,
                h = Math.max(l.width, Math.round(t.width)),
                f = Math.max(l.height, Math.round(t.height)),
                p = (h - l.width) * c[0],
                g = (f - l.height) * c[1];
              (u > 0 || d > 0 || p || g) &&
                (r.push({
                  id: s,
                  type: "position",
                  position: {
                    x: i.position.x - u + p,
                    y: i.position.y - d + g,
                  },
                }),
                n.get(s)?.forEach((t) => {
                  e.some((e) => e.id === t.id) ||
                    r.push({
                      id: t.id,
                      type: "position",
                      position: { x: t.position.x + u, y: t.position.y + d },
                    });
                })),
                (l.width < t.width || l.height < t.height || u || d) &&
                  r.push({
                    id: s,
                    type: "dimensions",
                    setAttributes: !0,
                    dimensions: {
                      width: h + (u ? c[0] * u - p : 0),
                      height: f + (d ? c[1] * d - g : 0),
                    },
                  });
            }),
          r
        );
      }
      function Vo(e, t, n, o, r, i) {
        const s = o?.querySelector(".xyflow__viewport");
        let a = !1;
        if (!s) return { changes: [], updatedInternals: a };
        const l = [],
          c = window.getComputedStyle(s),
          { m22: u } = new window.DOMMatrixReadOnly(c.transform),
          d = [];
        for (const o of e.values()) {
          const e = t.get(o.id);
          if (e)
            if (e.hidden)
              (e.internals = { ...e.internals, handleBounds: void 0 }),
                (a = !0);
            else {
              const s = ro(o.nodeElement),
                c =
                  e.measured.width !== s.width ||
                  e.measured.height !== s.height;
              if (
                !(
                  !s.width ||
                  !s.height ||
                  (!c && e.internals.handleBounds && !o.force)
                )
              ) {
                const h = o.nodeElement.getBoundingClientRect(),
                  f = Jn(e.extent) ? e.extent : i;
                let { positionAbsolute: p } = e.internals;
                e.parentId && "parent" === e.extent
                  ? (p = zn(p, s, t.get(e.parentId)))
                  : f && (p = In(p, f, s)),
                  (e.measured = s),
                  (e.internals = {
                    ...e.internals,
                    positionAbsolute: p,
                    handleBounds: {
                      source: uo("source", o.nodeElement, h, u, e.id),
                      target: uo("target", o.nodeElement, h, u, e.id),
                    },
                  }),
                  e.parentId && Ro(e, t, n, { nodeOrigin: r }),
                  (a = !0),
                  c &&
                    (l.push({ id: e.id, type: "dimensions", dimensions: s }),
                    e.expandParent &&
                      e.parentId &&
                      d.push({
                        id: e.id,
                        parentId: e.parentId,
                        rect: Vn(e, r),
                      }));
              }
            }
        }
        if (d.length > 0) {
          const e = To(d, t, n, r);
          l.push(...e);
        }
        return { changes: l, updatedInternals: a };
      }
      async function Ho({
        delta: e,
        panZoom: t,
        transform: n,
        translateExtent: o,
        width: r,
        height: i,
      }) {
        if (!t || (!e.x && !e.y)) return Promise.resolve(!1);
        const s = await t.setViewportConstrained(
            { x: n[0] + e.x, y: n[1] + e.y, zoom: n[2] },
            [
              [0, 0],
              [r, i],
            ],
            o,
          ),
          a = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
        return Promise.resolve(a);
      }
      function qo(e, t, n) {
        e.clear(), t.clear();
        for (const o of n) {
          const {
              source: n,
              target: r,
              sourceHandle: i = null,
              targetHandle: s = null,
            } = o,
            a = `${n}-source-${i}`,
            l = `${r}-target-${s}`,
            c = e.get(a) || new Map(),
            u = e.get(l) || new Map(),
            d = {
              edgeId: o.id,
              source: n,
              target: r,
              sourceHandle: i,
              targetHandle: s,
            };
          t.set(o.id, o),
            e.set(a, c.set(`${r}-${s}`, d)),
            e.set(l, u.set(`${n}-${i}`, d));
        }
      }
      function Xo(e, t) {
        if (!e.parentId) return !1;
        const n = t.get(e.parentId);
        return !!n && (!!n.selected || Xo(n, t));
      }
      function Zo(e, t, n) {
        let o = e;
        do {
          if (o?.matches(t)) return !0;
          if (o === n) return !1;
          o = o.parentElement;
        } while (o);
        return !1;
      }
      function Yo({
        nodeId: e,
        dragItems: t,
        nodeLookup: n,
        dragging: o = !0,
      }) {
        const r = [];
        for (const [e, i] of t) {
          const t = n.get(e)?.internals.userNode;
          t && r.push({ ...t, position: i.position, dragging: o });
        }
        if (!e) return [r[0], r];
        const i = n.get(e)?.internals.userNode;
        return [
          i
            ? { ...i, position: t.get(e)?.position || i.position, dragging: o }
            : r[0],
          r,
        ];
      }
      function Fo({
        onNodeMouseDown: e,
        getStoreItems: t,
        onDragStart: n,
        onDrag: o,
        onDragStop: r,
      }) {
        let i = { x: null, y: null },
          s = 0,
          a = new Map(),
          l = !1,
          c = { x: 0, y: 0 },
          u = null,
          d = !1,
          h = null,
          f = !1;
        return {
          update: function ({
            noDragClassName: p,
            handleSelector: g,
            domNode: m,
            isSelectable: y,
            nodeId: v,
            nodeClickDistance: x = 0,
          }) {
            function b({ x: e, y: n }, r) {
              const {
                nodeLookup: s,
                nodeExtent: l,
                snapGrid: c,
                snapToGrid: u,
                nodeOrigin: d,
                onNodeDrag: h,
                onSelectionDrag: f,
                onError: p,
                updateNodePositions: g,
              } = t();
              i = { x: e, y: n };
              let m = !1,
                y = { x: 0, y: 0, x2: 0, y2: 0 };
              if (a.size > 1 && l) {
                const e = kn(a);
                y = $n(e);
              }
              for (const [t, o] of a) {
                if (!s.has(t)) continue;
                let r = { x: e - o.distance.x, y: n - o.distance.y };
                u && (r = Kn(r, c));
                let i = [
                  [l[0][0], l[0][1]],
                  [l[1][0], l[1][1]],
                ];
                if (a.size > 1 && l && !o.extent) {
                  const { positionAbsolute: e } = o.internals,
                    t = e.x - y.x + l[0][0],
                    n = e.x + o.measured.width - y.x2 + l[1][0];
                  i = [
                    [t, e.y - y.y + l[0][1]],
                    [n, e.y + o.measured.height - y.y2 + l[1][1]],
                  ];
                }
                const { position: h, positionAbsolute: f } = On({
                  nodeId: t,
                  nextPosition: r,
                  nodeLookup: s,
                  nodeExtent: i,
                  nodeOrigin: d,
                  onError: p,
                });
                (m = m || o.position.x !== h.x || o.position.y !== h.y),
                  (o.position = h),
                  (o.internals.positionAbsolute = f);
              }
              if (m && (g(a, !0), r && (o || h || (!v && f)))) {
                const [e, t] = Yo({ nodeId: v, dragItems: a, nodeLookup: s });
                o?.(r, a, e, t), h?.(r, e, t), v || f?.(r, t);
              }
            }
            async function w() {
              if (!u) return;
              const { transform: e, panBy: n, autoPanSpeed: o } = t(),
                [r, a] = Ln(c, u, o);
              (0 === r && 0 === a) ||
                ((i.x = (i.x ?? 0) - r / e[2]),
                (i.y = (i.y ?? 0) - a / e[2]),
                (await n({ x: r, y: a })) && b(i, null)),
                (s = requestAnimationFrame(w));
            }
            function S(o) {
              const {
                nodeLookup: r,
                multiSelectionActive: s,
                nodesDraggable: l,
                transform: c,
                snapGrid: h,
                snapToGrid: f,
                selectNodesOnDrag: p,
                onNodeDragStart: g,
                onSelectionDragStart: m,
                unselectNodesAndEdges: x,
              } = t();
              (d = !0),
                (p && y) || s || !v || r.get(v)?.selected || x(),
                y && p && v && e?.(v);
              const b = oo(o.sourceEvent, {
                transform: c,
                snapGrid: h,
                snapToGrid: f,
                containerBounds: u,
              });
              if (
                ((i = b),
                (a = (function (e, t, n, o) {
                  const r = new Map();
                  for (const [i, s] of e)
                    if (
                      (s.selected || s.id === o) &&
                      (!s.parentId || !Xo(s, e)) &&
                      (s.draggable || (t && void 0 === s.draggable))
                    ) {
                      const t = e.get(i);
                      t &&
                        r.set(i, {
                          id: i,
                          position: t.position || { x: 0, y: 0 },
                          distance: {
                            x: n.x - t.internals.positionAbsolute.x,
                            y: n.y - t.internals.positionAbsolute.y,
                          },
                          extent: t.extent,
                          parentId: t.parentId,
                          origin: t.origin,
                          expandParent: t.expandParent,
                          internals: {
                            positionAbsolute: t.internals.positionAbsolute || {
                              x: 0,
                              y: 0,
                            },
                          },
                          measured: {
                            width: t.measured.width ?? 0,
                            height: t.measured.height ?? 0,
                          },
                        });
                    }
                  return r;
                })(r, l, b, v)),
                a.size > 0 && (n || g || (!v && m)))
              ) {
                const [e, t] = Yo({ nodeId: v, dragItems: a, nodeLookup: r });
                n?.(o.sourceEvent, a, e, t),
                  g?.(o.sourceEvent, e, t),
                  v || m?.(o.sourceEvent, t);
              }
            }
            h = Se(m);
            const E = Be()
              .clickDistance(x)
              .on("start", (e) => {
                const {
                  domNode: n,
                  nodeDragThreshold: o,
                  transform: r,
                  snapGrid: s,
                  snapToGrid: a,
                } = t();
                (u = n?.getBoundingClientRect() || null),
                  (f = !1),
                  0 === o && S(e);
                const l = oo(e.sourceEvent, {
                  transform: r,
                  snapGrid: s,
                  snapToGrid: a,
                  containerBounds: u,
                });
                (i = l), (c = co(e.sourceEvent, u));
              })
              .on("drag", (e) => {
                const {
                    autoPanOnNodeDrag: n,
                    transform: o,
                    snapGrid: r,
                    snapToGrid: s,
                    nodeDragThreshold: h,
                    nodeLookup: p,
                  } = t(),
                  g = oo(e.sourceEvent, {
                    transform: o,
                    snapGrid: r,
                    snapToGrid: s,
                    containerBounds: u,
                  });
                if (
                  ((("touchmove" === e.sourceEvent.type &&
                    e.sourceEvent.touches.length > 1) ||
                    (v && !p.has(v))) &&
                    (f = !0),
                  !f)
                ) {
                  if ((!l && n && d && ((l = !0), w()), !d)) {
                    const t = g.xSnapped - (i.x ?? 0),
                      n = g.ySnapped - (i.y ?? 0);
                    Math.sqrt(t * t + n * n) > h && S(e);
                  }
                  (i.x !== g.xSnapped || i.y !== g.ySnapped) &&
                    a &&
                    d &&
                    ((c = co(e.sourceEvent, u)), b(g, e.sourceEvent));
                }
              })
              .on("end", (e) => {
                if (
                  d &&
                  !f &&
                  ((l = !1), (d = !1), cancelAnimationFrame(s), a.size > 0)
                ) {
                  const {
                    nodeLookup: n,
                    updateNodePositions: o,
                    onNodeDragStop: i,
                    onSelectionDragStop: s,
                  } = t();
                  if ((o(a, !1), r || i || (!v && s))) {
                    const [t, o] = Yo({
                      nodeId: v,
                      dragItems: a,
                      nodeLookup: n,
                      dragging: !1,
                    });
                    r?.(e.sourceEvent, a, t, o),
                      i?.(e.sourceEvent, t, o),
                      v || s?.(e.sourceEvent, o);
                  }
                }
              })
              .filter((e) => {
                const t = e.target;
                return (
                  !e.button && (!p || !Zo(t, `.${p}`, m)) && (!g || Zo(t, g, m))
                );
              });
            h.call(E);
          },
          destroy: function () {
            h?.on(".drag", null);
          },
        };
      }
      function Ko(e, t, n, o) {
        let r = [],
          i = 1 / 0;
        const s = (function (e, t, n) {
          const o = [],
            r = { x: e.x - n, y: e.y - n, width: 2 * n, height: 2 * n };
          for (const e of t.values()) Xn(r, Vn(e)) > 0 && o.push(e);
          return o;
        })(e, n, t + 250);
        for (const n of s) {
          const s = [
            ...(n.internals.handleBounds?.source ?? []),
            ...(n.internals.handleBounds?.target ?? []),
          ];
          for (const a of s) {
            if (o.nodeId === a.nodeId && o.type === a.type && o.id === a.id)
              continue;
            const { x: s, y: l } = Po(n, a, a.position, !0),
              c = Math.sqrt(Math.pow(s - e.x, 2) + Math.pow(l - e.y, 2));
            c > t ||
              (c < i
                ? ((r = [{ ...a, x: s, y: l }]), (i = c))
                : c === i && r.push({ ...a, x: s, y: l }));
          }
        }
        if (!r.length) return null;
        if (r.length > 1) {
          const e = "source" === o.type ? "target" : "source";
          return r.find((t) => t.type === e) ?? r[0];
        }
        return r[0];
      }
      function Wo(e, t, n, o, r, i = !1) {
        const s = o.get(e);
        if (!s) return null;
        const a =
            "strict" === r
              ? s.internals.handleBounds?.[t]
              : [
                  ...(s.internals.handleBounds?.source ?? []),
                  ...(s.internals.handleBounds?.target ?? []),
                ],
          l = (n ? a?.find((e) => e.id === n) : a?.[0]) ?? null;
        return l && i ? { ...l, ...Po(s, l, l.position, !0) } : l;
      }
      function Go(e, t) {
        return (
          e ||
          (t?.classList.contains("target")
            ? "target"
            : t?.classList.contains("source")
              ? "source"
              : null)
        );
      }
      const Uo = () => !0;
      function Qo(
        e,
        {
          handle: t,
          connectionMode: n,
          fromNodeId: o,
          fromHandleId: r,
          fromType: i,
          doc: s,
          lib: a,
          flowId: l,
          isValidConnection: c = Uo,
          nodeLookup: u,
        },
      ) {
        const d = "target" === i,
          h = t
            ? s.querySelector(
                `.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`,
              )
            : null,
          { x: f, y: p } = co(e),
          g = s.elementFromPoint(f, p),
          m = g?.classList.contains(`${a}-flow__handle`) ? g : h,
          y = {
            handleDomNode: m,
            isValid: !1,
            connection: null,
            toHandle: null,
          };
        if (m) {
          const e = Go(void 0, m),
            t = m.getAttribute("data-nodeid"),
            i = m.getAttribute("data-handleid"),
            s = m.classList.contains("connectable"),
            a = m.classList.contains("connectableend");
          if (!t || !e) return y;
          const l = {
            source: d ? t : o,
            sourceHandle: d ? i : r,
            target: d ? o : t,
            targetHandle: d ? r : i,
          };
          y.connection = l;
          const h =
            s &&
            a &&
            (n === hn.Strict
              ? (d && "source" === e) || (!d && "target" === e)
              : t !== o || i !== r);
          (y.isValid = h && c(l)), (y.toHandle = Wo(t, e, i, u, n, !1));
        }
        return y;
      }
      const Jo = {
        onPointerDown: function (
          e,
          {
            connectionMode: t,
            connectionRadius: n,
            handleId: o,
            nodeId: r,
            edgeUpdaterType: i,
            isTarget: s,
            domNode: a,
            nodeLookup: l,
            lib: c,
            autoPanOnConnect: u,
            flowId: d,
            panBy: h,
            cancelConnection: f,
            onConnectStart: p,
            onConnect: g,
            onConnectEnd: m,
            isValidConnection: y = Uo,
            onReconnectEnd: v,
            updateConnection: x,
            getTransform: b,
            getFromHandle: w,
            autoPanSpeed: S,
          },
        ) {
          const E = io(e.target);
          let _,
            C = 0;
          const { x: k, y: M } = co(e),
            N = E?.elementFromPoint(k, M),
            P = Go(i, N),
            A = a?.getBoundingClientRect();
          if (!A || !P) return;
          const O = Wo(r, P, o, l, t);
          if (!O) return;
          let D = co(e, A),
            j = !1,
            I = null,
            z = !1,
            B = null;
          function L() {
            if (!u || !A) return;
            const [e, t] = Ln(D, A, S);
            h({ x: e, y: t }), (C = requestAnimationFrame(L));
          }
          const R = { ...O, nodeId: r, type: P, position: O.position },
            $ = l.get(r),
            T = {
              inProgress: !0,
              isValid: null,
              from: Po($, R, vn.Left, !0),
              fromHandle: R,
              fromPosition: R.position,
              fromNode: $,
              to: D,
              toHandle: null,
              toPosition: xn[R.position],
              toNode: null,
            };
          x(T);
          let V = T;
          function H(e) {
            if (!w() || !R) return void q(e);
            const i = b();
            (D = co(e, A)),
              (_ = Ko(Wn(D, i, !1, [1, 1]), n, l, R)),
              j || (L(), (j = !0));
            const a = Qo(e, {
              handle: _,
              connectionMode: t,
              fromNodeId: r,
              fromHandleId: o,
              fromType: s ? "target" : "source",
              isValidConnection: y,
              doc: E,
              lib: c,
              flowId: d,
              nodeLookup: l,
            });
            (B = a.handleDomNode),
              (I = a.connection),
              (z = (function (e, t) {
                let n = null;
                return t ? (n = !0) : e && !t && (n = !1), n;
              })(!!_, a.isValid));
            const u = {
              ...V,
              isValid: z,
              to: _ && z ? Gn({ x: _.x, y: _.y }, i) : D,
              toHandle: a.toHandle,
              toPosition:
                z && a.toHandle ? a.toHandle.position : xn[R.position],
              toNode: a.toHandle ? l.get(a.toHandle.nodeId) : null,
            };
            (z &&
              _ &&
              V.toHandle &&
              u.toHandle &&
              V.toHandle.type === u.toHandle.type &&
              V.toHandle.nodeId === u.toHandle.nodeId &&
              V.toHandle.id === u.toHandle.id &&
              V.to.x === u.to.x &&
              V.to.y === u.to.y) ||
              (x(u), (V = u));
          }
          function q(e) {
            (_ || B) && I && z && g?.(I);
            const { inProgress: t, ...n } = V,
              o = { ...n, toPosition: V.toHandle ? V.toPosition : null };
            m?.(e, o),
              i && v?.(e, o),
              f(),
              cancelAnimationFrame(C),
              (j = !1),
              (z = !1),
              (I = null),
              (B = null),
              E.removeEventListener("mousemove", H),
              E.removeEventListener("mouseup", q),
              E.removeEventListener("touchmove", H),
              E.removeEventListener("touchend", q);
          }
          p?.(e, { nodeId: r, handleId: o, handleType: P }),
            E.addEventListener("mousemove", H),
            E.addEventListener("mouseup", q),
            E.addEventListener("touchmove", H),
            E.addEventListener("touchend", q);
        },
        isValid: Qo,
      };
      function er({
        domNode: e,
        panZoom: t,
        getTransform: n,
        getViewScale: o,
      }) {
        const r = Se(e);
        return {
          update: function ({
            translateExtent: e,
            width: i,
            height: s,
            zoomStep: a = 10,
            pannable: l = !0,
            zoomable: c = !0,
            inversePan: u = !1,
          }) {
            let d = [0, 0];
            const h = ln()
              .on("start", (e) => {
                ("mousedown" !== e.sourceEvent.type &&
                  "touchstart" !== e.sourceEvent.type) ||
                  (d = [
                    e.sourceEvent.clientX ?? e.sourceEvent.touches[0].clientX,
                    e.sourceEvent.clientY ?? e.sourceEvent.touches[0].clientY,
                  ]);
              })
              .on(
                "zoom",
                l
                  ? (r) => {
                      const a = n();
                      if (
                        ("mousemove" !== r.sourceEvent.type &&
                          "touchmove" !== r.sourceEvent.type) ||
                        !t
                      )
                        return;
                      const l = [
                          r.sourceEvent.clientX ??
                            r.sourceEvent.touches[0].clientX,
                          r.sourceEvent.clientY ??
                            r.sourceEvent.touches[0].clientY,
                        ],
                        c = [l[0] - d[0], l[1] - d[1]];
                      d = l;
                      const h =
                          o() * Math.max(a[2], Math.log(a[2])) * (u ? -1 : 1),
                        f = { x: a[0] - c[0] * h, y: a[1] - c[1] * h },
                        p = [
                          [0, 0],
                          [i, s],
                        ];
                      t.setViewportConstrained(
                        { x: f.x, y: f.y, zoom: a[2] },
                        p,
                        e,
                      );
                    }
                  : null,
              )
              .on(
                "zoom.wheel",
                c
                  ? (e) => {
                      const o = n();
                      if ("wheel" !== e.sourceEvent.type || !t) return;
                      const r =
                          -e.sourceEvent.deltaY *
                          (1 === e.sourceEvent.deltaMode
                            ? 0.05
                            : e.sourceEvent.deltaMode
                              ? 1
                              : 0.002) *
                          a,
                        i = o[2] * Math.pow(2, r);
                      t.scaleTo(i);
                    }
                  : null,
              );
            r.call(h, {});
          },
          destroy: function () {
            r.on("zoom", null);
          },
          pointer: Ee,
        };
      }
      const tr = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k,
        nr = (e) => ({ x: e.x, y: e.y, zoom: e.k }),
        or = ({ x: e, y: t, zoom: n }) => Ut.translate(e, t).scale(n),
        rr = (e, t) => e.target.closest(`.${t}`),
        ir = (e, t) => 2 === t && Array.isArray(e) && e.includes(2),
        sr = (e, t = 0, n = () => {}) => {
          const o = "number" == typeof t && t > 0;
          return o || n(), o ? e.transition().duration(t).on("end", n) : e;
        },
        ar = (e) => {
          const t = e.ctrlKey && Qn() ? 10 : 1;
          return (
            -e.deltaY * (1 === e.deltaMode ? 0.05 : e.deltaMode ? 1 : 0.002) * t
          );
        };
      function lr({
        domNode: e,
        minZoom: t,
        maxZoom: n,
        paneClickDistance: o,
        translateExtent: r,
        viewport: i,
        onPanZoom: s,
        onPanZoomStart: a,
        onPanZoomEnd: l,
        onDraggingChange: c,
      }) {
        const u = {
            isZoomingOrPanning: !1,
            usedRightMouseButton: !1,
            prevViewport: { x: 0, y: 0, zoom: 0 },
            mouseButton: 0,
            timerId: void 0,
            panScrollTimeout: void 0,
            isPanScrolling: !1,
          },
          d = e.getBoundingClientRect(),
          h = ln()
            .clickDistance(!Yn(o) || o < 0 ? 0 : o)
            .scaleExtent([t, n])
            .translateExtent(r),
          f = Se(e).call(h);
        v(
          { x: i.x, y: i.y, zoom: jn(i.zoom, t, n) },
          [
            [0, 0],
            [d.width, d.height],
          ],
          r,
        );
        const p = f.on("wheel.zoom"),
          g = f.on("dblclick.zoom");
        function m(e, t) {
          return f
            ? new Promise((n) => {
                h?.transform(
                  sr(f, t?.duration, () => n(!0)),
                  e,
                );
              })
            : Promise.resolve(!1);
        }
        function y() {
          h.on("zoom", null);
        }
        async function v(e, t, n) {
          const o = or(e),
            r = h?.constrain()(o, t, n);
          return r && (await m(r)), new Promise((e) => e(r));
        }
        return (
          h.wheelDelta(ar),
          {
            update: function ({
              noWheelClassName: e,
              noPanClassName: t,
              onPaneContextMenu: n,
              userSelectionActive: o,
              panOnScroll: r,
              panOnDrag: i,
              panOnScrollMode: d,
              panOnScrollSpeed: m,
              preventScrolling: v,
              zoomOnPinch: x,
              zoomOnScroll: b,
              zoomOnDoubleClick: w,
              zoomActivationKeyPressed: S,
              lib: E,
              onTransformChange: _,
            }) {
              o && !u.isZoomingOrPanning && y();
              const C =
                r && !S && !o
                  ? (function ({
                      zoomPanValues: e,
                      noWheelClassName: t,
                      d3Selection: n,
                      d3Zoom: o,
                      panOnScrollMode: r,
                      panOnScrollSpeed: i,
                      zoomOnPinch: s,
                      onPanZoomStart: a,
                      onPanZoom: l,
                      onPanZoomEnd: c,
                    }) {
                      return (u) => {
                        if (rr(u, t)) return !1;
                        u.preventDefault(), u.stopImmediatePropagation();
                        const d = n.property("__zoom").k || 1;
                        if (u.ctrlKey && s) {
                          const e = Ee(u),
                            t = ar(u),
                            r = d * Math.pow(2, t);
                          return void o.scaleTo(n, r, e, u);
                        }
                        const h = 1 === u.deltaMode ? 20 : 1;
                        let f = r === fn.Vertical ? 0 : u.deltaX * h,
                          p = r === fn.Horizontal ? 0 : u.deltaY * h;
                        !Qn() &&
                          u.shiftKey &&
                          r !== fn.Vertical &&
                          ((f = u.deltaY * h), (p = 0)),
                          o.translateBy(n, (-f / d) * i, (-p / d) * i, {
                            internal: !0,
                          });
                        const g = nr(n.property("__zoom"));
                        clearTimeout(e.panScrollTimeout),
                          e.isPanScrolling ||
                            ((e.isPanScrolling = !0), a?.(u, g)),
                          e.isPanScrolling &&
                            (l?.(u, g),
                            (e.panScrollTimeout = setTimeout(() => {
                              c?.(u, g), (e.isPanScrolling = !1);
                            }, 150)));
                      };
                    })({
                      zoomPanValues: u,
                      noWheelClassName: e,
                      d3Selection: f,
                      d3Zoom: h,
                      panOnScrollMode: d,
                      panOnScrollSpeed: m,
                      zoomOnPinch: x,
                      onPanZoomStart: a,
                      onPanZoom: s,
                      onPanZoomEnd: l,
                    })
                  : (function ({
                      noWheelClassName: e,
                      preventScrolling: t,
                      d3ZoomHandler: n,
                    }) {
                      return function (o, r) {
                        if (
                          (!t && "wheel" === o.type && !o.ctrlKey) ||
                          rr(o, e)
                        )
                          return null;
                        o.preventDefault(), n.call(this, o, r);
                      };
                    })({
                      noWheelClassName: e,
                      preventScrolling: v,
                      d3ZoomHandler: p,
                    });
              if ((f.on("wheel.zoom", C, { passive: !1 }), !o)) {
                const e = (function ({
                  zoomPanValues: e,
                  onDraggingChange: t,
                  onPanZoomStart: n,
                }) {
                  return (o) => {
                    if (o.sourceEvent?.internal) return;
                    const r = nr(o.transform);
                    (e.mouseButton = o.sourceEvent?.button || 0),
                      (e.isZoomingOrPanning = !0),
                      (e.prevViewport = r),
                      "mousedown" === o.sourceEvent?.type && t(!0),
                      n && n?.(o.sourceEvent, r);
                  };
                })({
                  zoomPanValues: u,
                  onDraggingChange: c,
                  onPanZoomStart: a,
                });
                h.on("start", e);
                const t = (function ({
                  zoomPanValues: e,
                  panOnDrag: t,
                  onPaneContextMenu: n,
                  onTransformChange: o,
                  onPanZoom: r,
                }) {
                  return (i) => {
                    (e.usedRightMouseButton = !(
                      !n || !ir(t, e.mouseButton ?? 0)
                    )),
                      i.sourceEvent?.sync ||
                        o([i.transform.x, i.transform.y, i.transform.k]),
                      r &&
                        !i.sourceEvent?.internal &&
                        r?.(i.sourceEvent, nr(i.transform));
                  };
                })({
                  zoomPanValues: u,
                  panOnDrag: i,
                  onPaneContextMenu: !!n,
                  onPanZoom: s,
                  onTransformChange: _,
                });
                h.on("zoom", t);
                const o = (function ({
                  zoomPanValues: e,
                  panOnDrag: t,
                  panOnScroll: n,
                  onDraggingChange: o,
                  onPanZoomEnd: r,
                  onPaneContextMenu: i,
                }) {
                  return (s) => {
                    if (
                      !s.sourceEvent?.internal &&
                      ((e.isZoomingOrPanning = !1),
                      i &&
                        ir(t, e.mouseButton ?? 0) &&
                        !e.usedRightMouseButton &&
                        s.sourceEvent &&
                        i(s.sourceEvent),
                      (e.usedRightMouseButton = !1),
                      o(!1),
                      r && tr(e.prevViewport, s.transform))
                    ) {
                      const t = nr(s.transform);
                      (e.prevViewport = t),
                        clearTimeout(e.timerId),
                        (e.timerId = setTimeout(
                          () => {
                            r?.(s.sourceEvent, t);
                          },
                          n ? 150 : 0,
                        ));
                    }
                  };
                })({
                  zoomPanValues: u,
                  panOnDrag: i,
                  panOnScroll: r,
                  onPaneContextMenu: n,
                  onPanZoomEnd: l,
                  onDraggingChange: c,
                });
                h.on("end", o);
              }
              const k = (function ({
                zoomActivationKeyPressed: e,
                zoomOnScroll: t,
                zoomOnPinch: n,
                panOnDrag: o,
                panOnScroll: r,
                zoomOnDoubleClick: i,
                userSelectionActive: s,
                noWheelClassName: a,
                noPanClassName: l,
                lib: c,
              }) {
                return (u) => {
                  const d = e || t,
                    h = n && u.ctrlKey;
                  if (
                    1 === u.button &&
                    "mousedown" === u.type &&
                    (rr(u, `${c}-flow__node`) || rr(u, `${c}-flow__edge`))
                  )
                    return !0;
                  if (!(o || d || r || i || n)) return !1;
                  if (s) return !1;
                  if (rr(u, a) && "wheel" === u.type) return !1;
                  if (
                    rr(u, l) &&
                    ("wheel" !== u.type || (r && "wheel" === u.type && !e))
                  )
                    return !1;
                  if (!n && u.ctrlKey && "wheel" === u.type) return !1;
                  if (!n && "touchstart" === u.type && u.touches?.length > 1)
                    return u.preventDefault(), !1;
                  if (!d && !r && !h && "wheel" === u.type) return !1;
                  if (!o && ("mousedown" === u.type || "touchstart" === u.type))
                    return !1;
                  if (
                    Array.isArray(o) &&
                    !o.includes(u.button) &&
                    "mousedown" === u.type
                  )
                    return !1;
                  const f =
                    (Array.isArray(o) && o.includes(u.button)) ||
                    !u.button ||
                    u.button <= 1;
                  return (!u.ctrlKey || "wheel" === u.type) && f;
                };
              })({
                zoomActivationKeyPressed: S,
                panOnDrag: i,
                zoomOnScroll: b,
                panOnScroll: r,
                zoomOnDoubleClick: w,
                zoomOnPinch: x,
                userSelectionActive: o,
                noPanClassName: t,
                noWheelClassName: e,
                lib: E,
              });
              h.filter(k),
                w ? f.on("dblclick.zoom", g) : f.on("dblclick.zoom", null);
            },
            destroy: y,
            setViewport: async function (e, t) {
              const n = or(e);
              return await m(n, t), new Promise((e) => e(n));
            },
            setViewportConstrained: v,
            getViewport: function () {
              const e = f ? Qt(f.node()) : { x: 0, y: 0, k: 1 };
              return { x: e.x, y: e.y, zoom: e.k };
            },
            scaleTo: function (e, t) {
              return f
                ? new Promise((n) => {
                    h?.scaleTo(
                      sr(f, t?.duration, () => n(!0)),
                      e,
                    );
                  })
                : Promise.resolve(!1);
            },
            scaleBy: function (e, t) {
              return f
                ? new Promise((n) => {
                    h?.scaleBy(
                      sr(f, t?.duration, () => n(!0)),
                      e,
                    );
                  })
                : Promise.resolve(!1);
            },
            setScaleExtent: function (e) {
              h?.scaleExtent(e);
            },
            setTranslateExtent: function (e) {
              h?.translateExtent(e);
            },
            syncViewport: function (e) {
              if (f) {
                const t = or(e),
                  n = f.property("__zoom");
                (n.k === e.zoom && n.x === e.x && n.y === e.y) ||
                  h?.transform(f, t, null, { sync: !0 });
              }
            },
            setClickDistance: function (e) {
              const t = !Yn(e) || e < 0 ? 0 : e;
              h?.clickDistance(t);
            },
          }
        );
      }
      var cr;
      !(function (e) {
        (e.Line = "line"), (e.Handle = "handle");
      })(cr || (cr = {}));
      function ur(e, t) {
        return Math.max(0, t - e);
      }
      function dr(e, t) {
        return Math.max(0, e - t);
      }
      function hr(e, t, n) {
        return Math.max(0, t - e, e - n);
      }
      function fr(e, t) {
        return e ? !t : t;
      }
      const pr = { width: 0, height: 0, x: 0, y: 0 },
        gr = { ...pr, pointerX: 0, pointerY: 0, aspectRatio: 1 };
      function mr(e, t, n) {
        const o = t.position.x + e.position.x,
          r = t.position.y + e.position.y,
          i = e.measured.width ?? 0,
          s = e.measured.height ?? 0,
          a = n[0] * i,
          l = n[1] * s;
        return [
          [o - a, r - l],
          [o + i - a, r + s - l],
        ];
      }
      function yr({
        domNode: e,
        nodeId: t,
        getStoreItems: n,
        onChange: o,
        onEnd: r,
      }) {
        const i = Se(e);
        return {
          update: function ({
            controlPosition: e,
            boundaries: s,
            keepAspectRatio: a,
            onResizeStart: l,
            onResize: c,
            onResizeEnd: u,
            shouldResize: d,
          }) {
            let h = { ...pr },
              f = { ...gr };
            const p = (function (e) {
              return {
                isHorizontal: e.includes("right") || e.includes("left"),
                isVertical: e.includes("bottom") || e.includes("top"),
                affectsX: e.includes("left"),
                affectsY: e.includes("top"),
              };
            })(e);
            let g,
              m,
              y,
              v,
              x = null,
              b = [];
            const w = Be()
              .on("start", (e) => {
                const {
                  nodeLookup: o,
                  transform: r,
                  snapGrid: i,
                  snapToGrid: s,
                  nodeOrigin: a,
                  paneDomNode: c,
                } = n();
                if (((g = o.get(t)), !g)) return;
                x = c?.getBoundingClientRect() ?? null;
                const { xSnapped: u, ySnapped: d } = oo(e.sourceEvent, {
                  transform: r,
                  snapGrid: i,
                  snapToGrid: s,
                  containerBounds: x,
                });
                (h = {
                  width: g.measured.width ?? 0,
                  height: g.measured.height ?? 0,
                  x: g.position.x ?? 0,
                  y: g.position.y ?? 0,
                }),
                  (f = {
                    ...h,
                    pointerX: u,
                    pointerY: d,
                    aspectRatio: h.width / h.height,
                  }),
                  (m = void 0),
                  g.parentId &&
                    ("parent" === g.extent || g.expandParent) &&
                    ((m = o.get(g.parentId)),
                    (y =
                      m && "parent" === g.extent
                        ? (function (e) {
                            return [
                              [0, 0],
                              [e.measured.width, e.measured.height],
                            ];
                          })(m)
                        : void 0)),
                  (b = []),
                  (v = void 0);
                for (const [e, n] of o)
                  if (
                    n.parentId === t &&
                    (b.push({
                      id: e,
                      position: { ...n.position },
                      extent: n.extent,
                    }),
                    "parent" === n.extent || n.expandParent)
                  ) {
                    const e = mr(n, g, n.origin ?? a);
                    v = v
                      ? [
                          [
                            Math.min(e[0][0], v[0][0]),
                            Math.min(e[0][1], v[0][1]),
                          ],
                          [
                            Math.max(e[1][0], v[1][0]),
                            Math.max(e[1][1], v[1][1]),
                          ],
                        ]
                      : e;
                  }
                l?.(e, { ...h });
              })
              .on("drag", (e) => {
                const {
                    transform: t,
                    snapGrid: r,
                    snapToGrid: i,
                    nodeOrigin: l,
                  } = n(),
                  u = oo(e.sourceEvent, {
                    transform: t,
                    snapGrid: r,
                    snapToGrid: i,
                    containerBounds: x,
                  }),
                  w = [];
                if (!g) return;
                const { x: S, y: E, width: _, height: C } = h,
                  k = {},
                  M = g.origin ?? l,
                  {
                    width: N,
                    height: P,
                    x: A,
                    y: O,
                  } = (function (e, t, n, o, r, i, s, a) {
                    let { affectsX: l, affectsY: c } = t;
                    const { isHorizontal: u, isVertical: d } = t,
                      h = u && d,
                      { xSnapped: f, ySnapped: p } = n,
                      {
                        minWidth: g,
                        maxWidth: m,
                        minHeight: y,
                        maxHeight: v,
                      } = o,
                      { x, y: b, width: w, height: S, aspectRatio: E } = e;
                    let _ = Math.floor(u ? f - e.pointerX : 0),
                      C = Math.floor(d ? p - e.pointerY : 0);
                    const k = w + (l ? -_ : _),
                      M = S + (c ? -C : C),
                      N = -i[0] * w,
                      P = -i[1] * S;
                    let A = hr(k, g, m),
                      O = hr(M, y, v);
                    if (s) {
                      let e = 0,
                        t = 0;
                      l && _ < 0
                        ? (e = ur(x + _ + N, s[0][0]))
                        : !l && _ > 0 && (e = dr(x + k + N, s[1][0])),
                        c && C < 0
                          ? (t = ur(b + C + P, s[0][1]))
                          : !c && C > 0 && (t = dr(b + M + P, s[1][1])),
                        (A = Math.max(A, e)),
                        (O = Math.max(O, t));
                    }
                    if (a) {
                      let e = 0,
                        t = 0;
                      l && _ > 0
                        ? (e = dr(x + _, a[0][0]))
                        : !l && _ < 0 && (e = ur(x + k, a[1][0])),
                        c && C > 0
                          ? (t = dr(b + C, a[0][1]))
                          : !c && C < 0 && (t = ur(b + M, a[1][1])),
                        (A = Math.max(A, e)),
                        (O = Math.max(O, t));
                    }
                    if (r) {
                      if (u) {
                        const e = hr(k / E, y, v) * E;
                        if (((A = Math.max(A, e)), s)) {
                          let e = 0;
                          (e =
                            (!l && !c) || (l && !c && h)
                              ? dr(b + P + k / E, s[1][1]) * E
                              : ur(b + P + (l ? _ : -_) / E, s[0][1]) * E),
                            (A = Math.max(A, e));
                        }
                        if (a) {
                          let e = 0;
                          (e =
                            (!l && !c) || (l && !c && h)
                              ? ur(b + k / E, a[1][1]) * E
                              : dr(b + (l ? _ : -_) / E, a[0][1]) * E),
                            (A = Math.max(A, e));
                        }
                      }
                      if (d) {
                        const e = hr(M * E, g, m) / E;
                        if (((O = Math.max(O, e)), s)) {
                          let e = 0;
                          (e =
                            (!l && !c) || (c && !l && h)
                              ? dr(x + M * E + N, s[1][0]) / E
                              : ur(x + (c ? C : -C) * E + N, s[0][0]) / E),
                            (O = Math.max(O, e));
                        }
                        if (a) {
                          let e = 0;
                          (e =
                            (!l && !c) || (c && !l && h)
                              ? ur(x + M * E, a[1][0]) / E
                              : dr(x + (c ? C : -C) * E, a[0][0]) / E),
                            (O = Math.max(O, e));
                        }
                      }
                    }
                    (C += C < 0 ? O : -O),
                      (_ += _ < 0 ? A : -A),
                      r &&
                        (h
                          ? k > M * E
                            ? (C = (fr(l, c) ? -_ : _) / E)
                            : (_ = (fr(l, c) ? -C : C) * E)
                          : u
                            ? ((C = _ / E), (c = l))
                            : ((_ = C * E), (l = c)));
                    const D = l ? x + _ : x,
                      j = c ? b + C : b;
                    return {
                      width: w + (l ? -_ : _),
                      height: S + (c ? -C : C),
                      x: i[0] * _ * (l ? -1 : 1) + D,
                      y: i[1] * C * (c ? -1 : 1) + j,
                    };
                  })(f, p, u, s, a, M, y, v),
                  D = N !== _,
                  j = P !== C,
                  I = A !== S && D,
                  z = O !== E && j;
                if (!(I || z || D || j)) return;
                if (
                  (I || z || 1 === M[0] || 1 === M[1]) &&
                  ((k.x = I ? A : h.x),
                  (k.y = z ? O : h.y),
                  (h.x = k.x),
                  (h.y = k.y),
                  b.length > 0)
                ) {
                  const e = A - S,
                    t = O - E;
                  for (const n of b)
                    (n.position = {
                      x: n.position.x - e + M[0] * (N - _),
                      y: n.position.y - t + M[1] * (P - C),
                    }),
                      w.push(n);
                }
                if (
                  ((D || j) &&
                    ((k.width = D ? N : h.width),
                    (k.height = j ? P : h.height),
                    (h.width = k.width),
                    (h.height = k.height)),
                  m && g.expandParent)
                ) {
                  const e = M[0] * (k.width ?? 0);
                  k.x && k.x < e && ((h.x = e), (f.x = f.x - (k.x - e)));
                  const t = M[1] * (k.height ?? 0);
                  k.y && k.y < t && ((h.y = t), (f.y = f.y - (k.y - t)));
                }
                const B = (function ({
                    width: e,
                    prevWidth: t,
                    height: n,
                    prevHeight: o,
                    affectsX: r,
                    affectsY: i,
                  }) {
                    const s = e - t,
                      a = n - o,
                      l = [
                        s > 0 ? 1 : s < 0 ? -1 : 0,
                        a > 0 ? 1 : a < 0 ? -1 : 0,
                      ];
                    return (
                      s && r && (l[0] = -1 * l[0]),
                      a && i && (l[1] = -1 * l[1]),
                      l
                    );
                  })({
                    width: h.width,
                    prevWidth: _,
                    height: h.height,
                    prevHeight: C,
                    affectsX: p.affectsX,
                    affectsY: p.affectsY,
                  }),
                  L = { ...h, direction: B },
                  R = d?.(e, L);
                !1 !== R && (c?.(e, L), o(k, w));
              })
              .on("end", (e) => {
                u?.(e, { ...h }), r?.();
              });
            i.call(w);
          },
          destroy: function () {
            i.on(".drag", null);
          },
        };
      }
    },
    16303: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => Io });
      const o = (e) => {
          if (
            null == e ||
            "bigint" == typeof e ||
            Number.isNaN(e) ||
            e === 1 / 0 ||
            e === -1 / 0
          )
            return;
          if (["string", "number", "boolean"].includes(typeof e)) return e;
          if (Array.isArray(e)) return e.map(o).filter((e) => void 0 !== e);
          const t = {};
          for (const [n, r] of Object.entries(e)) {
            const e = o(r);
            void 0 !== e && (t[n] = e);
          }
          return t;
        },
        r = (e, t, n = !1) => {
          if (!Array.isArray(e) || !Array.isArray(t))
            throw new Error("Both arguments should be arrays.");
          const o = e.length,
            r = t.length,
            i = new Array(o + r);
          if (n) {
            for (let e = 0; e < r; e++) i[e] = t[r - e - 1];
            for (let t = 0; t < o; t++) i[t + r] = e[t];
            return i;
          }
          for (let t = 0; t < o; t++) i[t] = e[t];
          for (let e = 0; e < r; e++) i[e + o] = t[e];
          return i;
        },
        i = (e, t = new Map()) => {
          if ("object" != typeof e || null === e) return !1;
          if (t.has(e)) return !0;
          if ((t.set(e, !0), Array.isArray(e))) {
            for (let n = 0; n < e.length; n++) if (i(e[n], t)) return !0;
            return !1;
          }
          for (const n in e) if (i(e[n], t)) return !0;
          return !1;
        },
        s = (e, t, n, o = 1 / 0, r) => {
          if (!e || "object" != typeof e) {
            let o;
            if (
              (Number.isNaN(e) ||
                e === 1 / 0 ||
                e === -1 / 0 ||
                "bigint" == typeof e ||
                (o = JSON.stringify(e, t, n)),
              void 0 === o)
            )
              switch (r) {
                case Ao.throw:
                  throw new Error(
                    `Value is not valid in JSON, got ${String(e)}`,
                  );
                case Ao.stringify:
                  return a(e);
                default:
                  throw new Error(
                    "Should not reach here, please report this bug.",
                  );
              }
            return o;
          }
          const i =
            o < 1
              ? '"..."'
              : Array.isArray(e)
                ? `[${e.map((e) => s(e, t, n, o - 1, r)).join(",")}]`
                : `{${Object.keys(e)
                    .map((i) => `"${i}": ${s(e[i], t, n, o - 1, r)}`)
                    .join(", ")}}`;
          return JSON.stringify(JSON.parse(i), t, n);
        },
        a = (e) =>
          void 0 === e
            ? "undefined"
            : e === 1 / 0
              ? "Infinity"
              : e === -1 / 0
                ? "-Infinity"
                : Number.isNaN(e)
                  ? "NaN"
                  : "bigint" == typeof e
                    ? `${e}n`
                    : String(e),
        l = (e, t = 1 / 0, n = !1, o = Ao.stringify) =>
          null === e
            ? "null"
            : Array.isArray(e) || "object" == typeof e
              ? s(e, void 0, n ? 1 : void 0, t, o)
              : s(e, void 0, void 0, void 0, o),
        c = (e) =>
          "boolean" == typeof e
            ? 0
            : "number" == typeof e
              ? 1
              : "string" == typeof e
                ? 2
                : null === e
                  ? 3
                  : Array.isArray(e)
                    ? 4
                    : "object" == typeof e
                      ? 5
                      : "symbol" == typeof e
                        ? 6
                        : "function" == typeof e
                          ? 7
                          : "bigint" == typeof e
                            ? 8
                            : -1,
        u = (e, t, n) => {
          const o = n.keyOrdersMap?.get(e),
            r = n.keyOrdersMap?.get(t);
          if (void 0 !== o && void 0 !== r) return o - r;
          const i = c(e),
            s = c(t);
          if (i !== s) return i - s;
          if (
            (null === e && null === t) ||
            (Array.isArray(e) && Array.isArray(t)) ||
            (5 === i && 5 === s)
          )
            return 0;
          switch (typeof e) {
            case "number":
              return (Number.isNaN(e) && Number.isNaN(t)) ||
                (e === 1 / 0 && t === 1 / 0) ||
                (e === -1 / 0 && t === -1 / 0)
                ? 0
                : e - t;
            case "string":
              return (
                n.ignoreCase && ((e = e.toLowerCase()), (t = t.toLowerCase())),
                e < t ? -1 : e > t ? 1 : 0
              );
            case "boolean":
              return +e - +t;
            case "symbol":
            case "function":
              return String(e).localeCompare(String(t));
          }
          if ("bigint" == typeof e && "bigint" == typeof t) {
            const n = BigInt(e) - BigInt(t);
            return n < 0 ? -1 : n > 0 ? 1 : 0;
          }
          return String(e).localeCompare(String(t));
        },
        d = (e) =>
          Array.isArray(e) ? "array" : null === e ? "null" : typeof e,
        h = (e, t, n, o, r, i, s, a) => {
          const c = { ignoreCase: a.ignoreCase },
            d = l(r, a.maxDepth, !0, a.undefinedBehavior).split("\n"),
            h = l(i, a.maxDepth, !0, a.undefinedBehavior).split("\n");
          if (0 !== u(r, i, c))
            if (a.showModifications) {
              const r = Math.max(d.length, h.length);
              for (let e = d.length; e < r; e++) d.push("");
              for (let e = h.length; e < r; e++) h.push("");
              e.push({
                level: s,
                type: "modify",
                text: n ? `"${n}": ${d[0]}` : d[0],
              });
              for (let t = 1; t < d.length; t++)
                e.push({
                  level: s + (d[t].match(/^\s+/)?.[0]?.length || 0),
                  type: "modify",
                  text: d[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              for (let t = d.length; t < r; t++)
                e.push({ level: s, type: "equal", text: "" });
              t.push({
                level: s,
                type: "modify",
                text: o ? `"${o}": ${h[0]}` : h[0],
              });
              for (let e = 1; e < h.length; e++)
                t.push({
                  level: s + (h[e].match(/^\s+/)?.[0]?.length || 0),
                  type: "modify",
                  text: h[e].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              for (let e = h.length; e < r; e++)
                t.push({ level: s, type: "equal", text: "" });
            } else {
              e.push({
                level: s,
                type: "remove",
                text: n ? `"${n}": ${d[0]}` : d[0],
              });
              for (let t = 1; t < d.length; t++)
                e.push({
                  level: s + (d[t].match(/^\s+/)?.[0]?.length || 0),
                  type: "remove",
                  text: d[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              for (let t = 0; t < h.length; t++)
                e.push({ level: s, type: "equal", text: "" });
              for (let e = 0; e < d.length; e++)
                t.push({ level: s, type: "equal", text: "" });
              t.push({
                level: s,
                type: "add",
                text: o ? `"${o}": ${h[0]}` : h[0],
              });
              for (let e = 1; e < h.length; e++)
                t.push({
                  level: s + (h[e].match(/^\s+/)?.[0]?.length || 0),
                  type: "add",
                  text: h[e].replace(/^\s+/, "").replace(/,$/g, ""),
                });
            }
          else {
            const r = Math.max(d.length, h.length);
            for (let e = d.length; e < r; e++) d.push("");
            for (let e = h.length; e < r; e++) h.push("");
            e.push({
              level: s,
              type: "equal",
              text: n ? `"${n}": ${d[0]}` : d[0],
            });
            for (let t = 1; t < d.length; t++)
              e.push({
                level: s + (d[t].match(/^\s+/)?.[0]?.length || 0),
                type: "equal",
                text: d[t].replace(/^\s+/, "").replace(/,$/g, ""),
              });
            t.push({
              level: s,
              type: "equal",
              text: o ? `"${o}": ${h[0]}` : h[0],
            });
            for (let e = 1; e < h.length; e++)
              t.push({
                level: s + (h[e].match(/^\s+/)?.[0]?.length || 0),
                type: "equal",
                text: h[e].replace(/^\s+/, "").replace(/,$/g, ""),
              });
          }
        },
        f = (e, t) =>
          e.sort((e, n) => u(e, n, { ignoreCase: t.ignoreCaseForKey })),
        p = (e, t, n = 1, o, i) => {
          if (n > (o.maxDepth || 1 / 0))
            return [
              [{ level: n, type: "equal", text: "..." }],
              [{ level: n, type: "equal", text: "..." }],
            ];
          let a = [],
            l = [];
          if ((null === e && null === t) || (void 0 === e && void 0 === t))
            return [a, l];
          if (null == e) {
            const e = s(t, void 0, 1, void 0, o.undefinedBehavior).split("\n");
            for (let t = 0; t < e.length; t++)
              a.push({ level: n, type: "equal", text: "" }),
                l.push({
                  level: n + (e[t].match(/^\s+/)?.[0]?.length || 0),
                  type: "add",
                  text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
            return [a, l];
          }
          if (null == t) {
            const t = s(e, void 0, 1, void 0, o.undefinedBehavior).split("\n");
            for (let e = 0; e < t.length; e++)
              a.push({
                level: n + (t[e].match(/^\s+/)?.[0]?.length || 0),
                type: "remove",
                text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
              }),
                l.push({ level: n, type: "equal", text: "" });
            return [a, l];
          }
          const c = Object.keys(e),
            g = Object.keys(t),
            m = new Map();
          if (o.preserveKeyOrder) {
            if ("before" === o.preserveKeyOrder) {
              for (let e = 0; e < c.length; e++) m.set(c[e], e);
              for (let e = 0; e < g.length; e++)
                m.has(g[e]) || m.set(g[e], c.length + e);
              g.sort((e, t) => m.get(e) - m.get(t));
            } else if ("after" === o.preserveKeyOrder) {
              for (let e = 0; e < g.length; e++) m.set(g[e], e);
              for (let e = 0; e < c.length; e++)
                m.has(c[e]) || m.set(c[e], g.length + e);
              c.sort((e, t) => m.get(e) - m.get(t));
            }
          } else f(c, o), f(g, o);
          const y = { ignoreCase: o.ignoreCaseForKey, keyOrdersMap: m };
          for (; c.length || g.length; ) {
            const f = c[0],
              m = g[0],
              v = u(f, m, y);
            if (0 === v)
              if (d(e[f]) !== d(t[m])) h(a, l, f, m, e[f], t[m], n, o);
              else if (Array.isArray(e[f])) {
                const s = [...e[f]],
                  c = [...t[m]],
                  [u, d] = i(s, c, f, m, n, o, [], []);
                (a = r(a, u)), (l = r(l, d));
              } else if (null === e[f])
                a.push({ level: n, type: "equal", text: `"${f}": null` }),
                  l.push({ level: n, type: "equal", text: `"${m}": null` });
              else if ("object" == typeof e[f]) {
                const s = p(e[f], t[m], n + 1, o, i);
                a.push({ level: n, type: "equal", text: `"${f}": {` }),
                  (a = r(a, s[0])),
                  a.push({ level: n, type: "equal", text: "}" }),
                  l.push({ level: n, type: "equal", text: `"${m}": {` }),
                  (l = r(l, s[1])),
                  l.push({ level: n, type: "equal", text: "}" });
              } else h(a, l, f, m, e[f], t[m], n, o);
            else if (c.length && g.length)
              if (v < 0) {
                const t = s(e[f], void 0, 1, void 0, o.undefinedBehavior).split(
                  "\n",
                );
                for (let e = 0; e < t.length; e++) {
                  const o = t[e].replace(/^\s+/, "").replace(/,$/g, "");
                  a.push({
                    level: n + (t[e].match(/^\s+/)?.[0]?.length || 0),
                    type: "remove",
                    text: e ? o : `"${f}": ${o}`,
                  }),
                    l.push({ level: n, type: "equal", text: "" });
                }
              } else {
                const e = s(t[m], void 0, 1, void 0, o.undefinedBehavior).split(
                  "\n",
                );
                for (let t = 0; t < e.length; t++) {
                  const o = e[t].replace(/^\s+/, "").replace(/,$/g, "");
                  a.push({ level: n, type: "equal", text: "" }),
                    l.push({
                      level: n + (e[t].match(/^\s+/)?.[0]?.length || 0),
                      type: "add",
                      text: t ? o : `"${m}": ${o}`,
                    });
                }
              }
            else if (c.length) {
              const t = s(e[f], void 0, 1, void 0, o.undefinedBehavior).split(
                "\n",
              );
              for (let e = 0; e < t.length; e++) {
                const o = t[e].replace(/^\s+/, "").replace(/,$/g, "");
                a.push({
                  level: n + (t[e].match(/^\s+/)?.[0]?.length || 0),
                  type: "remove",
                  text: e ? o : `"${f}": ${o}`,
                }),
                  l.push({ level: n, type: "equal", text: "" });
              }
            } else if (g.length) {
              const e = s(t[m], void 0, 1, void 0, o.undefinedBehavior).split(
                "\n",
              );
              for (let t = 0; t < e.length; t++) {
                const o = e[t].replace(/^\s+/, "").replace(/,$/g, "");
                a.push({ level: n, type: "equal", text: "" }),
                  l.push({
                    level: n + (e[t].match(/^\s+/)?.[0]?.length || 0),
                    type: "add",
                    text: t ? o : `"${m}": ${o}`,
                  });
              }
            }
            f
              ? m
                ? 0 === v
                  ? (c.shift(), g.shift())
                  : v < 0
                    ? c.shift()
                    : g.shift()
                : c.shift()
              : g.shift();
          }
          if (a.length !== l.length)
            throw new Error(
              "Diff error: length not match for left & right, please report a bug with your data.",
            );
          return [a, l];
        };
      var g = function () {
        (this.__data__ = []), (this.size = 0);
      };
      var m = function (e, t) {
          return e === t || (e != e && t != t);
        },
        y = m;
      var v = function (e, t) {
          for (var n = e.length; n--; ) if (y(e[n][0], t)) return n;
          return -1;
        },
        x = v,
        b = Array.prototype.splice;
      var w = v;
      var S = v;
      var E = v;
      var _ = g,
        C = function (e) {
          var t = this.__data__,
            n = x(t, e);
          return (
            !(n < 0) &&
            (n == t.length - 1 ? t.pop() : b.call(t, n, 1), --this.size, !0)
          );
        },
        k = function (e) {
          var t = this.__data__,
            n = w(t, e);
          return n < 0 ? void 0 : t[n][1];
        },
        M = function (e) {
          return S(this.__data__, e) > -1;
        },
        N = function (e, t) {
          var n = this.__data__,
            o = E(n, e);
          return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
        };
      function P(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      (P.prototype.clear = _),
        (P.prototype.delete = C),
        (P.prototype.get = k),
        (P.prototype.has = M),
        (P.prototype.set = N);
      var A = P,
        O = A;
      var D = function () {
        (this.__data__ = new O()), (this.size = 0);
      };
      var j = function (e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      };
      var I = function (e) {
        return this.__data__.get(e);
      };
      var z = function (e) {
          return this.__data__.has(e);
        },
        B =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
              ? window
              : void 0 !== n.g
                ? n.g
                : "undefined" != typeof self
                  ? self
                  : {},
        L = "object" == typeof B && B && B.Object === Object && B,
        R = L,
        $ = "object" == typeof self && self && self.Object === Object && self,
        T = R || $ || Function("return this")(),
        V = T.Symbol,
        H = V,
        q = Object.prototype,
        X = q.hasOwnProperty,
        Z = q.toString,
        Y = H ? H.toStringTag : void 0;
      var F = function (e) {
          var t = X.call(e, Y),
            n = e[Y];
          try {
            e[Y] = void 0;
            var o = !0;
          } catch (e) {}
          var r = Z.call(e);
          return o && (t ? (e[Y] = n) : delete e[Y]), r;
        },
        K = Object.prototype.toString;
      var W = F,
        G = function (e) {
          return K.call(e);
        },
        U = V ? V.toStringTag : void 0;
      var Q = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : U && U in Object(e)
            ? W(e)
            : G(e);
      };
      var J = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        },
        ee = Q,
        te = J;
      var ne,
        oe = function (e) {
          if (!te(e)) return !1;
          var t = ee(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        },
        re = T["__core-js_shared__"],
        ie = (ne = /[^.]+$/.exec((re && re.keys && re.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + ne
          : "";
      var se = function (e) {
          return !!ie && ie in e;
        },
        ae = Function.prototype.toString;
      var le = function (e) {
          if (null != e) {
            try {
              return ae.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        },
        ce = oe,
        ue = se,
        de = J,
        he = le,
        fe = /^\[object .+?Constructor\]$/,
        pe = Function.prototype,
        ge = Object.prototype,
        me = pe.toString,
        ye = ge.hasOwnProperty,
        ve = RegExp(
          "^" +
            me
              .call(ye)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      var xe = function (e) {
          return !(!de(e) || ue(e)) && (ce(e) ? ve : fe).test(he(e));
        },
        be = function (e, t) {
          return null == e ? void 0 : e[t];
        };
      var we = function (e, t) {
          var n = be(e, t);
          return xe(n) ? n : void 0;
        },
        Se = we(T, "Map"),
        Ee = we(Object, "create"),
        _e = Ee;
      var Ce = function () {
        (this.__data__ = _e ? _e(null) : {}), (this.size = 0);
      };
      var ke = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        },
        Me = Ee,
        Ne = Object.prototype.hasOwnProperty;
      var Pe = function (e) {
          var t = this.__data__;
          if (Me) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return Ne.call(t, e) ? t[e] : void 0;
        },
        Ae = Ee,
        Oe = Object.prototype.hasOwnProperty;
      var De = Ee;
      var je = Ce,
        Ie = ke,
        ze = Pe,
        Be = function (e) {
          var t = this.__data__;
          return Ae ? void 0 !== t[e] : Oe.call(t, e);
        },
        Le = function (e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = De && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        };
      function Re(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      (Re.prototype.clear = je),
        (Re.prototype.delete = Ie),
        (Re.prototype.get = ze),
        (Re.prototype.has = Be),
        (Re.prototype.set = Le);
      var $e = Re,
        Te = A,
        Ve = Se;
      var He = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
      var qe = function (e, t) {
          var n = e.__data__;
          return He(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        },
        Xe = qe;
      var Ze = qe;
      var Ye = qe;
      var Fe = qe;
      var Ke = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new $e(),
              map: new (Ve || Te)(),
              string: new $e(),
            });
        },
        We = function (e) {
          var t = Xe(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        },
        Ge = function (e) {
          return Ze(this, e).get(e);
        },
        Ue = function (e) {
          return Ye(this, e).has(e);
        },
        Qe = function (e, t) {
          var n = Fe(this, e),
            o = n.size;
          return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
        };
      function Je(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      (Je.prototype.clear = Ke),
        (Je.prototype.delete = We),
        (Je.prototype.get = Ge),
        (Je.prototype.has = Ue),
        (Je.prototype.set = Qe);
      var et = Je,
        tt = A,
        nt = Se,
        ot = et;
      var rt = A,
        it = D,
        st = j,
        at = I,
        lt = z,
        ct = function (e, t) {
          var n = this.__data__;
          if (n instanceof tt) {
            var o = n.__data__;
            if (!nt || o.length < 199)
              return o.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new ot(o);
          }
          return n.set(e, t), (this.size = n.size), this;
        };
      function ut(e) {
        var t = (this.__data__ = new rt(e));
        this.size = t.size;
      }
      (ut.prototype.clear = it),
        (ut.prototype.delete = st),
        (ut.prototype.get = at),
        (ut.prototype.has = lt),
        (ut.prototype.set = ct);
      var dt = ut;
      var ht = et,
        ft = function (e) {
          return this.__data__.set(e, "__lodash_hash_undefined__"), this;
        },
        pt = function (e) {
          return this.__data__.has(e);
        };
      function gt(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new ht(); ++t < n; ) this.add(e[t]);
      }
      (gt.prototype.add = gt.prototype.push = ft), (gt.prototype.has = pt);
      var mt = gt,
        yt = function (e, t) {
          for (var n = -1, o = null == e ? 0 : e.length; ++n < o; )
            if (t(e[n], n, e)) return !0;
          return !1;
        },
        vt = function (e, t) {
          return e.has(t);
        };
      var xt = function (e, t, n, o, r, i) {
        var s = 1 & n,
          a = e.length,
          l = t.length;
        if (a != l && !(s && l > a)) return !1;
        var c = i.get(e),
          u = i.get(t);
        if (c && u) return c == t && u == e;
        var d = -1,
          h = !0,
          f = 2 & n ? new mt() : void 0;
        for (i.set(e, t), i.set(t, e); ++d < a; ) {
          var p = e[d],
            g = t[d];
          if (o) var m = s ? o(g, p, d, t, e, i) : o(p, g, d, e, t, i);
          if (void 0 !== m) {
            if (m) continue;
            h = !1;
            break;
          }
          if (f) {
            if (
              !yt(t, function (e, t) {
                if (!vt(f, t) && (p === e || r(p, e, n, o, i)))
                  return f.push(t);
              })
            ) {
              h = !1;
              break;
            }
          } else if (p !== g && !r(p, g, n, o, i)) {
            h = !1;
            break;
          }
        }
        return i.delete(e), i.delete(t), h;
      };
      var bt = T.Uint8Array,
        wt = m,
        St = xt,
        Et = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, o) {
              n[++t] = [o, e];
            }),
            n
          );
        },
        _t = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        },
        Ct = V ? V.prototype : void 0,
        kt = Ct ? Ct.valueOf : void 0;
      var Mt = function (e, t, n, o, r, i, s) {
        switch (n) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !i(new bt(e), new bt(t)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return wt(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var a = Et;
          case "[object Set]":
            var l = 1 & o;
            if ((a || (a = _t), e.size != t.size && !l)) return !1;
            var c = s.get(e);
            if (c) return c == t;
            (o |= 2), s.set(e, t);
            var u = St(a(e), a(t), o, r, i, s);
            return s.delete(e), u;
          case "[object Symbol]":
            if (kt) return kt.call(e) == kt.call(t);
        }
        return !1;
      };
      var Nt = function (e, t) {
          for (var n = -1, o = t.length, r = e.length; ++n < o; )
            e[r + n] = t[n];
          return e;
        },
        Pt = Array.isArray,
        At = Nt,
        Ot = Pt;
      var Dt = function (e, t, n) {
        var o = t(e);
        return Ot(e) ? o : At(o, n(e));
      };
      var jt = function (e, t) {
          for (
            var n = -1, o = null == e ? 0 : e.length, r = 0, i = [];
            ++n < o;
          ) {
            var s = e[n];
            t(s, n, e) && (i[r++] = s);
          }
          return i;
        },
        It = function () {
          return [];
        },
        zt = Object.prototype.propertyIsEnumerable,
        Bt = Object.getOwnPropertySymbols,
        Lt = Bt
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  jt(Bt(e), function (t) {
                    return zt.call(e, t);
                  }));
            }
          : It;
      var Rt = function (e, t) {
        for (var n = -1, o = Array(e); ++n < e; ) o[n] = t(n);
        return o;
      };
      var $t = function (e) {
          return null != e && "object" == typeof e;
        },
        Tt = Q,
        Vt = $t;
      var Ht = function (e) {
          return Vt(e) && "[object Arguments]" == Tt(e);
        },
        qt = $t,
        Xt = Object.prototype,
        Zt = Xt.hasOwnProperty,
        Yt = Xt.propertyIsEnumerable,
        Ft = Ht(
          (function () {
            return arguments;
          })(),
        )
          ? Ht
          : function (e) {
              return qt(e) && Zt.call(e, "callee") && !Yt.call(e, "callee");
            },
        Kt = { exports: {} };
      var Wt = function () {
        return !1;
      };
      !(function (e, t) {
        var n = T,
          o = Wt,
          r = t && !t.nodeType && t,
          i = r && e && !e.nodeType && e,
          s = i && i.exports === r ? n.Buffer : void 0,
          a = (s ? s.isBuffer : void 0) || o;
        e.exports = a;
      })(Kt, Kt.exports);
      var Gt = /^(?:0|[1-9]\d*)$/;
      var Ut = function (e, t) {
        var n = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == n || ("symbol" != n && Gt.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
      var Qt = function (e) {
          return (
            "number" == typeof e &&
            e > -1 &&
            e % 1 == 0 &&
            e <= 9007199254740991
          );
        },
        Jt = Q,
        en = Qt,
        tn = $t,
        nn = {};
      (nn["[object Float32Array]"] =
        nn["[object Float64Array]"] =
        nn["[object Int8Array]"] =
        nn["[object Int16Array]"] =
        nn["[object Int32Array]"] =
        nn["[object Uint8Array]"] =
        nn["[object Uint8ClampedArray]"] =
        nn["[object Uint16Array]"] =
        nn["[object Uint32Array]"] =
          !0),
        (nn["[object Arguments]"] =
          nn["[object Array]"] =
          nn["[object ArrayBuffer]"] =
          nn["[object Boolean]"] =
          nn["[object DataView]"] =
          nn["[object Date]"] =
          nn["[object Error]"] =
          nn["[object Function]"] =
          nn["[object Map]"] =
          nn["[object Number]"] =
          nn["[object Object]"] =
          nn["[object RegExp]"] =
          nn["[object Set]"] =
          nn["[object String]"] =
          nn["[object WeakMap]"] =
            !1);
      var on = function (e) {
        return tn(e) && en(e.length) && !!nn[Jt(e)];
      };
      var rn = function (e) {
          return function (t) {
            return e(t);
          };
        },
        sn = { exports: {} };
      !(function (e, t) {
        var n = L,
          o = t && !t.nodeType && t,
          r = o && e && !e.nodeType && e,
          i = r && r.exports === o && n.process,
          s = (function () {
            try {
              var e = r && r.require && r.require("util").types;
              return e || (i && i.binding && i.binding("util"));
            } catch (e) {}
          })();
        e.exports = s;
      })(sn, sn.exports);
      var an = on,
        ln = rn,
        cn = sn.exports,
        un = cn && cn.isTypedArray,
        dn = un ? ln(un) : an,
        hn = Rt,
        fn = Ft,
        pn = Pt,
        gn = Kt.exports,
        mn = Ut,
        yn = dn,
        vn = Object.prototype.hasOwnProperty;
      var xn = function (e, t) {
          var n = pn(e),
            o = !n && fn(e),
            r = !n && !o && gn(e),
            i = !n && !o && !r && yn(e),
            s = n || o || r || i,
            a = s ? hn(e.length, String) : [],
            l = a.length;
          for (var c in e)
            (!t && !vn.call(e, c)) ||
              (s &&
                ("length" == c ||
                  (r && ("offset" == c || "parent" == c)) ||
                  (i &&
                    ("buffer" == c ||
                      "byteLength" == c ||
                      "byteOffset" == c)) ||
                  mn(c, l))) ||
              a.push(c);
          return a;
        },
        bn = Object.prototype;
      var wn = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || bn);
      };
      var Sn = (function (e, t) {
          return function (n) {
            return e(t(n));
          };
        })(Object.keys, Object),
        En = wn,
        _n = Sn,
        Cn = Object.prototype.hasOwnProperty;
      var kn = oe,
        Mn = Qt;
      var Nn = xn,
        Pn = function (e) {
          if (!En(e)) return _n(e);
          var t = [];
          for (var n in Object(e))
            Cn.call(e, n) && "constructor" != n && t.push(n);
          return t;
        },
        An = function (e) {
          return null != e && Mn(e.length) && !kn(e);
        };
      var On = Dt,
        Dn = Lt,
        jn = function (e) {
          return An(e) ? Nn(e) : Pn(e);
        };
      var In = function (e) {
          return On(e, jn, Dn);
        },
        zn = Object.prototype.hasOwnProperty;
      var Bn = function (e, t, n, o, r, i) {
          var s = 1 & n,
            a = In(e),
            l = a.length;
          if (l != In(t).length && !s) return !1;
          for (var c = l; c--; ) {
            var u = a[c];
            if (!(s ? u in t : zn.call(t, u))) return !1;
          }
          var d = i.get(e),
            h = i.get(t);
          if (d && h) return d == t && h == e;
          var f = !0;
          i.set(e, t), i.set(t, e);
          for (var p = s; ++c < l; ) {
            var g = e[(u = a[c])],
              m = t[u];
            if (o) var y = s ? o(m, g, u, t, e, i) : o(g, m, u, e, t, i);
            if (!(void 0 === y ? g === m || r(g, m, n, o, i) : y)) {
              f = !1;
              break;
            }
            p || (p = "constructor" == u);
          }
          if (f && !p) {
            var v = e.constructor,
              x = t.constructor;
            v == x ||
              !("constructor" in e) ||
              !("constructor" in t) ||
              ("function" == typeof v &&
                v instanceof v &&
                "function" == typeof x &&
                x instanceof x) ||
              (f = !1);
          }
          return i.delete(e), i.delete(t), f;
        },
        Ln = we(T, "DataView"),
        Rn = Se,
        $n = we(T, "Promise"),
        Tn = we(T, "Set"),
        Vn = we(T, "WeakMap"),
        Hn = Q,
        qn = le,
        Xn = "[object Map]",
        Zn = "[object Promise]",
        Yn = "[object Set]",
        Fn = "[object WeakMap]",
        Kn = "[object DataView]",
        Wn = qn(Ln),
        Gn = qn(Rn),
        Un = qn($n),
        Qn = qn(Tn),
        Jn = qn(Vn),
        eo = Hn;
      ((Ln && eo(new Ln(new ArrayBuffer(1))) != Kn) ||
        (Rn && eo(new Rn()) != Xn) ||
        ($n && eo($n.resolve()) != Zn) ||
        (Tn && eo(new Tn()) != Yn) ||
        (Vn && eo(new Vn()) != Fn)) &&
        (eo = function (e) {
          var t = Hn(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            o = n ? qn(n) : "";
          if (o)
            switch (o) {
              case Wn:
                return Kn;
              case Gn:
                return Xn;
              case Un:
                return Zn;
              case Qn:
                return Yn;
              case Jn:
                return Fn;
            }
          return t;
        });
      var to = dt,
        no = xt,
        oo = Mt,
        ro = Bn,
        io = eo,
        so = Pt,
        ao = Kt.exports,
        lo = dn,
        co = "[object Arguments]",
        uo = "[object Array]",
        ho = "[object Object]",
        fo = Object.prototype.hasOwnProperty;
      var po = function (e, t, n, o, r, i) {
          var s = so(e),
            a = so(t),
            l = s ? uo : io(e),
            c = a ? uo : io(t),
            u = (l = l == co ? ho : l) == ho,
            d = (c = c == co ? ho : c) == ho,
            h = l == c;
          if (h && ao(e)) {
            if (!ao(t)) return !1;
            (s = !0), (u = !1);
          }
          if (h && !u)
            return (
              i || (i = new to()),
              s || lo(e) ? no(e, t, n, o, r, i) : oo(e, t, l, n, o, r, i)
            );
          if (!(1 & n)) {
            var f = u && fo.call(e, "__wrapped__"),
              p = d && fo.call(t, "__wrapped__");
            if (f || p) {
              var g = f ? e.value() : e,
                m = p ? t.value() : t;
              return i || (i = new to()), r(g, m, n, o, i);
            }
          }
          return !!h && (i || (i = new to()), ro(e, t, n, o, r, i));
        },
        go = $t;
      var mo = function e(t, n, o, r, i) {
          return (
            t === n ||
            (null == t || null == n || (!go(t) && !go(n))
              ? t != t && n != n
              : po(t, n, o, r, e, i))
          );
        },
        yo = mo;
      var vo = function (e, t, n) {
        var o = (n = "function" == typeof n ? n : void 0) ? n(e, t) : void 0;
        return void 0 === o ? yo(e, t, void 0, n) : !!o;
      };
      const xo = (e, t, n) =>
          n.ignoreCase
            ? "string" == typeof e &&
              "string" == typeof t &&
              e.toLowerCase() === t.toLowerCase()
            : "symbol" == typeof e && "symbol" == typeof t
              ? e.toString() === t.toString()
              : n.recursiveEqual
                ? vo(e, t, (e, t) =>
                    n.ignoreCase && "string" == typeof e && "string" == typeof t
                      ? e.toLowerCase() === t.toLowerCase()
                      : void 0,
                  )
                : e === t,
        bo = (e, t) => {
          if (e === t) return 1;
          if (null === e || null === t) return 0;
          if ("object" != typeof e || "object" != typeof t) return 0;
          let n = 0;
          for (const o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              Object.prototype.hasOwnProperty.call(t, o) &&
              e[o] === t[o] &&
              n++;
          return Math.max(n / Object.keys(e).length, n / Object.keys(t).length);
        },
        wo = (e, t, n, o, r) => {
          n && o
            ? (e.push({ level: r, type: "equal", text: `"${n}": [` }),
              t.push({ level: r, type: "equal", text: `"${o}": [` }))
            : (e.push({ level: r, type: "equal", text: "[" }),
              t.push({ level: r, type: "equal", text: "[" }));
        },
        So = (e, t, n) => {
          e.push({ level: n, type: "equal", text: "]" }),
            t.push({ level: n, type: "equal", text: "]" });
        },
        Eo = (e, t, n) => {
          e.push({ level: n + 1, type: "equal", text: "..." }),
            t.push({ level: n + 1, type: "equal", text: "..." });
        },
        _o = (e, t, n, o, i, a, c = [], u = []) => {
          if ((wo(c, u, n, o, i), i >= (a.maxDepth || 1 / 0))) Eo(c, u, i);
          else {
            const [f, g] = ((e, t, n, o, i, a) => {
              const c = Array(e.length + 1)
                  .fill(0)
                  .map(() => Array(t.length + 1).fill(0)),
                u = Array(e.length + 1)
                  .fill(0)
                  .map(() => Array(t.length + 1).fill(0));
              for (let t = 1; t <= e.length; t++) u[t][0] = "up";
              for (let e = 1; e <= t.length; e++) u[0][e] = "left";
              for (let n = 1; n <= e.length; n++)
                for (let o = 1; o <= t.length; o++) {
                  const r = d(e[n - 1]);
                  r !== d(t[o - 1]) || ("array" !== r && "object" !== r)
                    ? xo(e[n - 1], t[o - 1], a)
                      ? ((c[n][o] = c[n - 1][o - 1] + 1), (u[n][o] = "diag"))
                      : c[n - 1][o] >= c[n][o - 1]
                        ? ((c[n][o] = c[n - 1][o]), (u[n][o] = "up"))
                        : ((c[n][o] = c[n][o - 1]), (u[n][o] = "left"))
                    : a.recursiveEqual
                      ? xo(e[n - 1], t[o - 1], a) ||
                        bo(e[n - 1], t[o - 1]) > 0.5
                        ? ((c[n][o] = c[n - 1][o - 1] + 1), (u[n][o] = "diag"))
                        : c[n - 1][o] >= c[n][o - 1]
                          ? ((c[n][o] = c[n - 1][o]), (u[n][o] = "up"))
                          : ((c[n][o] = c[n][o - 1]), (u[n][o] = "left"))
                      : ((c[n][o] = c[n - 1][o - 1] + 1), (u[n][o] = "diag"));
                }
              let f = e.length,
                g = t.length,
                m = [],
                y = [];
              for (; f > 0 || g > 0; )
                if ("diag" === u[f][g]) {
                  const s = d(e[f - 1]);
                  if (
                    a.recursiveEqual &&
                    ("array" === s || "object" === s) &&
                    xo(e[f - 1], t[g - 1], a)
                  ) {
                    const n = [],
                      o = [];
                    h(n, o, "", "", e[f - 1], t[g - 1], i + 1, a),
                      (m = r(m, n.reverse(), !0)),
                      (y = r(y, o.reverse(), !0));
                  } else if ("array" === s) {
                    const [s, l] = _o(e[f - 1], t[g - 1], n, o, i + 1, a);
                    (m = r(m, s.reverse(), !0)), (y = r(y, l.reverse(), !0));
                  } else if ("object" === s) {
                    const [n, o] = p(e[f - 1], t[g - 1], i + 2, a, _o);
                    m.unshift({ level: i + 1, type: "equal", text: "}" }),
                      y.unshift({ level: i + 1, type: "equal", text: "}" }),
                      (m = r(m, n.reverse(), !0)),
                      (y = r(y, o.reverse(), !0)),
                      m.unshift({ level: i + 1, type: "equal", text: "{" }),
                      y.unshift({ level: i + 1, type: "equal", text: "{" });
                  } else {
                    const n = [],
                      o = [];
                    h(n, o, "", "", e[f - 1], t[g - 1], i + 1, a),
                      (m = r(m, n.reverse(), !0)),
                      (y = r(y, o.reverse(), !0));
                  }
                  f--, g--;
                } else if ("up" === u[f][g])
                  if (a.showModifications && f > 1 && "left" === u[f - 1][g]) {
                    const s = d(e[f - 1]);
                    if (s === d(t[g - 1]))
                      if ("array" === s) {
                        const [s, l] = _o(e[f - 1], t[g - 1], n, o, i + 1, a);
                        (m = r(m, s.reverse(), !0)),
                          (y = r(y, l.reverse(), !0));
                      } else if ("object" === s) {
                        const [n, o] = p(e[f - 1], t[g - 1], i + 2, a, _o);
                        m.unshift({ level: i + 1, type: "equal", text: "}" }),
                          y.unshift({ level: i + 1, type: "equal", text: "}" }),
                          (m = r(m, n.reverse(), !0)),
                          (y = r(y, o.reverse(), !0)),
                          m.unshift({ level: i + 1, type: "equal", text: "{" }),
                          y.unshift({ level: i + 1, type: "equal", text: "{" });
                      } else
                        m.unshift({
                          level: i + 1,
                          type: "modify",
                          text: l(
                            e[f - 1],
                            void 0,
                            void 0,
                            a.undefinedBehavior,
                          ),
                        }),
                          y.unshift({
                            level: i + 1,
                            type: "modify",
                            text: l(
                              t[g - 1],
                              void 0,
                              void 0,
                              a.undefinedBehavior,
                            ),
                          });
                    else {
                      const n = [],
                        o = [];
                      h(n, o, "", "", e[f - 1], t[g - 1], i + 1, a),
                        (m = r(m, n.reverse(), !0)),
                        (y = r(y, o.reverse(), !0));
                    }
                    f--, g--;
                  } else {
                    const t = s(
                      e[f - 1],
                      void 0,
                      1,
                      void 0,
                      a.undefinedBehavior,
                    ).split("\n");
                    for (let e = t.length - 1; e >= 0; e--)
                      m.unshift({
                        level: i + 1 + (t[e].match(/^\s+/)?.[0]?.length || 0),
                        type: "remove",
                        text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
                      }),
                        y.unshift({ level: i + 1, type: "equal", text: "" });
                    f--;
                  }
                else {
                  const e = s(
                    t[g - 1],
                    void 0,
                    1,
                    void 0,
                    a.undefinedBehavior,
                  ).split("\n");
                  for (let t = e.length - 1; t >= 0; t--)
                    m.unshift({ level: i + 1, type: "equal", text: "" }),
                      y.unshift({
                        level: i + 1 + (e[t].match(/^\s+/)?.[0]?.length || 0),
                        type: "add",
                        text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                      });
                  g--;
                }
              return [m, y];
            })(e, t, n, o, i, a);
            (c = r(c, f)), (u = r(u, g));
          }
          return So(c, u, i), [c, u];
        };
      function Co(e, t) {
        for (const n of e) {
          if ("object" === d(n)) {
            if (!(t in n)) return !1;
            for (const e of Object.values(n))
              if (Array.isArray(e) && !Co(e, t)) return !1;
          } else if (Array.isArray(n) && !Co(n, t)) return !1;
        }
        return !0;
      }
      const ko = function e(t, n, o, i, a, c, u = [], f = []) {
        if (!c.compareKey) return No(t, n, o, i, a, c, u, f);
        const g = (e) => e.every((e) => "object" === d(e));
        if (!(g(t) && g(n) && Co(t, c.compareKey) && Co(n, c.compareKey)))
          return No(t, n, o, i, a, c, u, f);
        if ((wo(u, f, o, i, a), a >= (c.maxDepth || 1 / 0))) Eo(u, f, a);
        else {
          const o = new Set(),
            i = new Set();
          for (let s = 0; s < t.length; s++) {
            const g = t[s];
            if (o.has(s)) continue;
            if ("object" !== d(g) || !(c.compareKey in g)) continue;
            const m = g[c.compareKey];
            let y = -1;
            for (let e = 0; e < n.length; e++) {
              if (i.has(e)) continue;
              const t = n[e];
              if ("object" !== d(t) || !(c.compareKey in t)) continue;
              const o = t[c.compareKey];
              if (xo(m, o, c)) {
                y = e;
                break;
              }
            }
            if (-1 !== y) {
              const t = n[y],
                m = d(g);
              if (m !== d(t)) h(u, f, "", "", g, t, a + 1, c);
              else if ("object" === m) {
                u.push({ level: a + 1, type: "equal", text: "{" }),
                  f.push({ level: a + 1, type: "equal", text: "{" });
                const n = Array.from(
                  new Set([...Object.keys(g), ...Object.keys(t)]),
                );
                for (const o of n) {
                  const n = g[o],
                    i = t[o];
                  if (Array.isArray(n) && Array.isArray(i)) {
                    const [t, s] = e(n, i, o, o, a + 2, c, [], []);
                    (u = r(u, t)), (f = r(f, s));
                  } else if (Array.isArray(n) || Array.isArray(i))
                    h(u, f, o, o, n, i, a + 2, c);
                  else {
                    const [t, s] = p({ [o]: n }, { [o]: i }, a + 2, c, e);
                    (u = r(u, t)), (f = r(f, s));
                  }
                }
                u.push({ level: a + 1, type: "equal", text: "}" }),
                  f.push({ level: a + 1, type: "equal", text: "}" });
              } else if ("array" === m) {
                const [n, o] = e(g, t, "", "", a + 1, c, [], []);
                (u = r(u, n)), (f = r(f, o));
              } else
                xo(g, t, c)
                  ? (u.push({
                      level: a + 1,
                      type: "equal",
                      text: l(g, void 0, void 0, c.undefinedBehavior),
                    }),
                    f.push({
                      level: a + 1,
                      type: "equal",
                      text: l(t, void 0, void 0, c.undefinedBehavior),
                    }))
                  : c.showModifications
                    ? (u.push({
                        level: a + 1,
                        type: "modify",
                        text: l(g, void 0, void 0, c.undefinedBehavior),
                      }),
                      f.push({
                        level: a + 1,
                        type: "modify",
                        text: l(t, void 0, void 0, c.undefinedBehavior),
                      }))
                    : (u.push({
                        level: a + 1,
                        type: "remove",
                        text: l(g, void 0, void 0, c.undefinedBehavior),
                      }),
                      u.push({ level: a + 1, type: "equal", text: "" }),
                      f.push({ level: a + 1, type: "equal", text: "" }),
                      f.push({
                        level: a + 1,
                        type: "add",
                        text: l(t, void 0, void 0, c.undefinedBehavior),
                      }));
              o.add(s), i.add(y);
            }
          }
          for (let e = 0; e < t.length; e++) {
            if (o.has(e)) continue;
            const n = t[e],
              r = s(n, void 0, 1, void 0, c.undefinedBehavior).split("\n");
            for (let e = 0; e < r.length; e++)
              u.push({
                level: a + 1 + (r[e].match(/^\s+/)?.[0]?.length || 0),
                type: "remove",
                text: r[e].replace(/^\s+/, "").replace(/,$/g, ""),
              }),
                f.push({ level: a + 1, type: "equal", text: "" });
          }
          for (let e = 0; e < n.length; e++) {
            if (i.has(e)) continue;
            const t = n[e],
              o = s(t, void 0, 1, void 0, c.undefinedBehavior).split("\n");
            for (let e = 0; e < o.length; e++)
              u.push({ level: a + 1, type: "equal", text: "" }),
                f.push({
                  level: a + 1 + (o[e].match(/^\s+/)?.[0]?.length || 0),
                  type: "add",
                  text: o[e].replace(/^\s+/, "").replace(/,$/g, ""),
                });
          }
        }
        return So(u, f, a), [u, f];
      };
      function Mo(e, t, n, o, i, s, a) {
        let l = [],
          c = [];
        const u = Array.from(
          new Set([...Object.keys(e || {}), ...Object.keys(t || {})]),
        );
        for (const d of u) {
          const u = e ? e[d] : void 0,
            f = t ? t[d] : void 0;
          if (
            Array.isArray(u) &&
            Array.isArray(f) &&
            o.compareKey &&
            a(u, o.compareKey) &&
            a(f, o.compareKey)
          ) {
            const [e, t] = s(u, f, "", "", n + 2, o, [], []);
            (l = r(l, e)), (c = r(c, t));
            continue;
          }
          if (Array.isArray(u) && Array.isArray(f)) {
            const [e, t] = i(u, f, "", "", n + 2, o, [], []);
            (l = r(l, e)), (c = r(c, t));
          } else if (Array.isArray(u) || Array.isArray(f))
            h(l, c, d, d, u, f, n + 2, o);
          else {
            const [e, t] = p({ [d]: u }, { [d]: f }, n + 2, o, i);
            (l = r(l, e)), (c = r(c, t));
          }
        }
        return [l, c];
      }
      const No = (e, t, n, o, i, s, a = [], c = []) => {
          if (
            ((e = [...e]),
            (t = [...t]),
            wo(a, c, n, o, i),
            i >= (s.maxDepth || 1 / 0))
          )
            Eo(a, c, i);
          else
            for (; e.length || t.length; ) {
              const n = e[0],
                o = t[0],
                f = d(n),
                g = d(o);
              if (e.length && t.length) {
                if (f !== g) h(a, c, "", "", n, o, i + 1, s);
                else if (
                  s.recursiveEqual &&
                  ["object", "array"].includes(f) &&
                  xo(n, o, s)
                )
                  h(a, c, "", "", n, o, i + 1, s);
                else if ("object" === f) {
                  let e, t;
                  a.push({ level: i + 1, type: "equal", text: "{" }),
                    c.push({ level: i + 1, type: "equal", text: "{" }),
                    "compare-key" === s.arrayDiffMethod
                      ? ([e, t] = Mo(n, o, i, s, No, ko, Co))
                      : ([e, t] = p(n, o, i + 2, s, No)),
                    (a = r(a, e)),
                    (c = r(c, t)),
                    a.push({ level: i + 1, type: "equal", text: "}" }),
                    c.push({ level: i + 1, type: "equal", text: "}" });
                } else if ("array" === f)
                  if (
                    s.compareKey &&
                    Co(n, s.compareKey) &&
                    Co(o, s.compareKey)
                  ) {
                    const [e, t] = ko(n, o, "", "", i + 1, s, [], []);
                    (a = r(a, e)), (c = r(c, t));
                  } else {
                    const [e, t] = No(n, o, "", "", i + 1, s, [], []);
                    (a = r(a, e)), (c = r(c, t));
                  }
                else
                  0 === u(n, o, { ignoreCase: s.ignoreCase })
                    ? (a.push({
                        level: i + 1,
                        type: "equal",
                        text: l(n, void 0, void 0, s.undefinedBehavior),
                      }),
                      c.push({
                        level: i + 1,
                        type: "equal",
                        text: l(o, void 0, void 0, s.undefinedBehavior),
                      }))
                    : s.showModifications
                      ? (a.push({
                          level: i + 1,
                          type: "modify",
                          text: l(n, void 0, void 0, s.undefinedBehavior),
                        }),
                        c.push({
                          level: i + 1,
                          type: "modify",
                          text: l(o, void 0, void 0, s.undefinedBehavior),
                        }))
                      : (a.push({
                          level: i + 1,
                          type: "remove",
                          text: l(n, void 0, void 0, s.undefinedBehavior),
                        }),
                        a.push({ level: i + 1, type: "equal", text: "" }),
                        c.push({ level: i + 1, type: "equal", text: "" }),
                        c.push({
                          level: i + 1,
                          type: "add",
                          text: l(o, void 0, void 0, s.undefinedBehavior),
                        }));
                e.shift(), t.shift();
              } else if (e.length) {
                const t = l(n, void 0, !0, s.undefinedBehavior).split("\n");
                for (let e = 0; e < t.length; e++)
                  a.push({
                    level: i + 1 + (t[e].match(/^\s+/)?.[0]?.length || 0),
                    type: "remove",
                    text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
                  }),
                    c.push({ level: i + 1, type: "equal", text: "" });
                e.shift();
              } else if (t.length) {
                const e = l(o, void 0, !0, s.undefinedBehavior).split("\n");
                for (let t = 0; t < e.length; t++)
                  a.push({ level: i + 1, type: "equal", text: "" }),
                    c.push({
                      level: i + 1 + (e[t].match(/^\s+/)?.[0]?.length || 0),
                      type: "add",
                      text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                    });
                t.shift();
              }
            }
          return So(a, c, i), [a, c];
        },
        Po = (e, t) => {
          if (!e || "object" != typeof e) return e;
          if (Array.isArray(e)) {
            const n = [...e];
            return (
              n.sort((e, n) => u(e, n, { ignoreCase: t?.ignoreCase })),
              n.map((e) => Po(e, t))
            );
          }
          const n = { ...e };
          for (const e in n) n[e] = Po(n[e], t);
          return n;
        };
      var Ao = (function (e) {
        return (
          (e.stringify = "stringify"),
          (e.ignore = "ignore"),
          (e.throw = "throw"),
          e
        );
      })({});
      const Oo = { level: 0, type: "equal", text: "" },
        Do = { level: 0, type: "equal", text: "{" },
        jo = { level: 0, type: "equal", text: "}" };
      let Io = class {
        detectCircular(e) {
          if (this.options.detectCircular && i(e))
            throw new Error(
              `Circular reference detected in object (with keys ${Object.keys(e)
                .map((e) => `"${e}"`)
                .join(", ")})`,
            );
        }
        sortResultLines(e, t) {
          for (let n = 0; n < e.length; n++) {
            let n = !1;
            for (let o = 1; o < e.length; o++)
              if (
                "remove" === e[o].type &&
                "equal" === e[o - 1].type &&
                "equal" === t[o].type &&
                "add" === t[o - 1].type
              ) {
                const r = e[o - 1];
                (e[o - 1] = e[o]), (e[o] = r);
                const i = t[o - 1];
                (t[o - 1] = t[o]), (t[o] = i), (n = !0);
              }
            if (!n) break;
          }
        }
        calculateLineNumbers(e) {
          let t = 0;
          for (const n of e) n.text && (n.lineNumber = ++t);
        }
        calculateCommas(e) {
          const t = Array(e.length).fill(0);
          for (let n = e.length - 1; n > 0; n--)
            e[n].text ? (t[n - 1] = n) : (t[n - 1] = t[n]);
          for (let n = 0; n < e.length; n++)
            !e[n].text.endsWith("{") &&
              !e[n].text.endsWith("[") &&
              e[n].text &&
              t[n] &&
              e[n].level <= e[t[n]].level &&
              (e[n].comma = !0);
        }
        diff(e, t) {
          this.detectCircular(e),
            this.detectCircular(t),
            ("unorder-normal" !== this.options.arrayDiffMethod &&
              "unorder-lcs" !== this.options.arrayDiffMethod) ||
              ((e = Po(e, this.options)), (t = Po(t, this.options))),
            "ignore" === this.options.undefinedBehavior &&
              ((e = o(e) ?? null), (t = o(t) ?? null));
          let n = [],
            i = [];
          const a = d(e);
          if (a !== d(t)) {
            n = s(
              e,
              void 0,
              1,
              this.options.maxDepth,
              this.options.undefinedBehavior,
            )
              .split("\n")
              .map((e) => ({
                level: e.match(/^\s+/)?.[0]?.length || 0,
                type: "remove",
                text: e.replace(/^\s+/, "").replace(/,$/g, ""),
                comma: e.endsWith(","),
              }));
            i = s(
              t,
              void 0,
              1,
              this.options.maxDepth,
              this.options.undefinedBehavior,
            )
              .split("\n")
              .map((e) => ({
                level: e.match(/^\s+/)?.[0]?.length || 0,
                type: "add",
                text: e.replace(/^\s+/, "").replace(/,$/g, ""),
                comma: e.endsWith(","),
              }));
            const o = n.length,
              a = i.length;
            (n = r(
              n,
              Array(a)
                .fill(0)
                .map(() => ({ ...Oo })),
            )),
              (i = r(
                i,
                Array(o)
                  .fill(0)
                  .map(() => ({ ...Oo })),
                !0,
              ));
          } else
            "object" === a
              ? (([n, i] = p(e, t, 1, this.options, this.arrayDiffFunc)),
                n.unshift({ ...Do }),
                n.push({ ...jo }),
                i.unshift({ ...Do }),
                i.push({ ...jo }))
              : "array" === a
                ? ([n, i] = this.arrayDiffFunc(e, t, "", "", 0, this.options))
                : e !== t
                  ? this.options.ignoreCase
                    ? "string" == typeof e &&
                      "string" == typeof t &&
                      e.toLowerCase() === t.toLowerCase() &&
                      ((n = [{ level: 0, type: "equal", text: e }]),
                      (i = [{ level: 0, type: "equal", text: t }]))
                    : this.options.showModifications
                      ? ((n = [
                          {
                            level: 0,
                            type: "modify",
                            text: s(
                              e,
                              void 0,
                              void 0,
                              this.options.maxDepth,
                              this.options.undefinedBehavior,
                            ),
                          },
                        ]),
                        (i = [
                          {
                            level: 0,
                            type: "modify",
                            text: s(
                              t,
                              void 0,
                              void 0,
                              this.options.maxDepth,
                              this.options.undefinedBehavior,
                            ),
                          },
                        ]))
                      : ((n = [
                          {
                            level: 0,
                            type: "remove",
                            text: s(
                              e,
                              void 0,
                              void 0,
                              this.options.maxDepth,
                              this.options.undefinedBehavior,
                            ),
                          },
                          { ...Oo },
                        ]),
                        (i = [
                          { ...Oo },
                          {
                            level: 0,
                            type: "add",
                            text: s(
                              t,
                              void 0,
                              void 0,
                              this.options.maxDepth,
                              this.options.undefinedBehavior,
                            ),
                          },
                        ]))
                  : ((n = [
                      {
                        level: 0,
                        type: "equal",
                        text: s(
                          e,
                          void 0,
                          void 0,
                          this.options.maxDepth,
                          this.options.undefinedBehavior,
                        ),
                      },
                    ]),
                    (i = [
                      {
                        level: 0,
                        type: "equal",
                        text: s(
                          t,
                          void 0,
                          void 0,
                          this.options.maxDepth,
                          this.options.undefinedBehavior,
                        ),
                      },
                    ]));
          return (
            this.sortResultLines(n, i),
            this.calculateLineNumbers(n),
            this.calculateLineNumbers(i),
            this.calculateCommas(n),
            this.calculateCommas(i),
            [n, i]
          );
        }
        constructor({
          detectCircular: e = !0,
          maxDepth: t = 1 / 0,
          showModifications: n = !0,
          arrayDiffMethod: o = "normal",
          ignoreCase: r = !1,
          ignoreCaseForKey: i = !1,
          recursiveEqual: s = !1,
          preserveKeyOrder: a,
          compareKey: l,
          undefinedBehavior: c = "stringify",
        } = {}) {
          (this.options = {
            detectCircular: e,
            maxDepth: t,
            showModifications: n,
            arrayDiffMethod: o,
            ignoreCase: r,
            ignoreCaseForKey: i,
            recursiveEqual: s,
            preserveKeyOrder: a,
            compareKey: l,
            undefinedBehavior: c,
          }),
            (this.arrayDiffFunc =
              "compare-key" === o
                ? ko
                : "lcs" === o || "unorder-lcs" === o
                  ? _o
                  : No);
        }
      };
    },
    13017: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => x });
      var o = n(90626);
      const r = (e) => "hasLinesBefore" in e || "hasLinesAfter" in e,
        i = (e, t, n) => (r(e) ? n : t * (e.end - e.start + 1)),
        s = (e, t) => {
          const n = [];
          let o, r;
          if (e.length && t.length)
            for (
              e = [...e],
                t = [...t],
                o = { ...e.shift() },
                r = { ...t.shift() };
              ;
            ) {
              if (o.start === r.start) {
                const e = Math.min(o.end, r.end);
                n.push({ ...o, ...r, end: e }), (o.start = r.start = e);
              } else if (o.start < r.start) {
                const e = Math.min(o.end, r.start);
                n.push({ ...r, ...o, end: e }), (o.start = e);
              } else {
                const e = Math.min(o.start, r.end);
                n.push({ ...o, ...r, end: e }), (r.start = e);
              }
              if (!e.length || !t.length) break;
              o.start === o.end && (o = { ...e.shift() }),
                r.start === r.end && (r = { ...t.shift() });
            }
          return (
            e.length ||
              n.push(...t.map((e) => ({ ...e, token: o.token || "plain" }))),
            t.length || n.push(...e),
            n
          );
        };
      var a = {};
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.applyPatch =
          a.calcPatch =
          h =
          a.lcs =
          a.diff =
          a.diff_core =
            void 0);
      let l = class {
        [Symbol.iterator]() {
          return this;
        }
        next() {
          const { state: e, result: t } = this;
          if (this.c > 1) return (t.done = !0), (t.value = void 0), t;
          const n = (function (e, t) {
            const { b: n, eq: o, stack_base: r } = e;
            let { i, N: s, j: a, M: l, Z: c, stack_top: u } = e;
            for (;;)
              switch (t) {
                case 0:
                  e: for (; s > 0 && l > 0; ) {
                    n.fill(0, 0, 2 * c);
                    const e = s - l,
                      t = s + l,
                      d = 1 & t,
                      h = i + s - 1,
                      f = a + l - 1,
                      p = (t + d) / 2;
                    let g;
                    t: for (let t = 0; t <= p; t++) {
                      const p = 2 * Math.max(0, t - l) - t,
                        m = t - 2 * Math.max(0, t - s);
                      for (let h = p; h <= m; h += 2) {
                        const f = n[h - 1 - c * Math.floor((h - 1) / c)],
                          p = n[h + 1 - c * Math.floor((h + 1) / c)],
                          m = h === -t || (h !== t && f < p) ? p : f + 1,
                          y = m - h;
                        let v = m,
                          x = y;
                        for (; v < s && x < l && o(i + v, a + x); ) v++, x++;
                        if (
                          ((n[h - c * Math.floor(h / c)] = v),
                          1 === d &&
                            (g = e - h) >= 1 - t &&
                            g < t &&
                            v + n[c + g - c * Math.floor(g / c)] >= s)
                        ) {
                          if (t > 1 || v !== m) {
                            (r[u++] = i + v),
                              (r[u++] = s - v),
                              (r[u++] = a + x),
                              (r[u++] = l - x),
                              (s = m),
                              (l = y),
                              (c = 2 * (Math.min(s, l) + 1));
                            continue e;
                          }
                          break t;
                        }
                      }
                      for (let y = p; y <= m; y += 2) {
                        const p = n[c + y - 1 - c * Math.floor((y - 1) / c)],
                          m = n[c + y + 1 - c * Math.floor((y + 1) / c)],
                          v = y === -t || (y !== t && p < m) ? m : p + 1,
                          x = v - y;
                        let b = v,
                          w = x;
                        for (; b < s && w < l && o(h - b, f - w); ) b++, w++;
                        if (
                          ((n[c + y - c * Math.floor(y / c)] = b),
                          0 === d &&
                            (g = e - y) >= -t &&
                            g <= t &&
                            b + n[g - c * Math.floor(g / c)] >= s)
                        ) {
                          if (t > 0 || b !== v) {
                            (r[u++] = i + s - v),
                              (r[u++] = v),
                              (r[u++] = a + l - x),
                              (r[u++] = x),
                              (s -= b),
                              (l -= w),
                              (c = 2 * (Math.min(s, l) + 1));
                            continue e;
                          }
                          break t;
                        }
                      }
                    }
                    if (s !== l) {
                      l > s
                        ? ((i += s), (a += s), (l -= s), (s = 0))
                        : ((i += l), (a += l), (s -= l), (l = 0));
                      break;
                    }
                  }
                  if (s + l !== 0)
                    if (e.pxe === i || e.pye === a)
                      (e.pxe = i + s), (e.pye = a + l);
                    else {
                      const t = e.pxs;
                      if (
                        ((e.oxs = e.pxs),
                        (e.oxe = e.pxe),
                        (e.oys = e.pys),
                        (e.oye = e.pye),
                        (e.pxs = i),
                        (e.pxe = i + s),
                        (e.pys = a),
                        (e.pye = a + l),
                        t >= 0)
                      )
                        return (
                          (e.i = i),
                          (e.N = s),
                          (e.j = a),
                          (e.M = l),
                          (e.Z = c),
                          (e.stack_top = u),
                          1
                        );
                    }
                case 1:
                  if (0 === u) return 2;
                  (l = r[--u]),
                    (a = r[--u]),
                    (s = r[--u]),
                    (i = r[--u]),
                    (c = 2 * (Math.min(s, l) + 1)),
                    (t = 0);
              }
          })(e, this.c);
          return (
            (this.c = n),
            1 === n
              ? ((t.value = [e.oxs, e.oxe, e.oys, e.oye]), t)
              : e.pxs >= 0
                ? ((t.value = [e.pxs, e.pxe, e.pys, e.pye]), t)
                : ((t.done = !0), (t.value = void 0), t)
          );
        }
        constructor(e) {
          (this.state = e),
            (this.c = 0),
            (this.result = { value: null, done: !1 });
        }
      };
      function c(e, t, n, o, r) {
        const i = 2 * (Math.min(t, o) + 1),
          s = t + o,
          a = new (
            s < 256 ? Uint8Array : s < 65536 ? Uint16Array : Uint32Array
          )(2 * i);
        return new l({
          i: e,
          N: t,
          j: n,
          M: o,
          Z: i,
          b: a,
          eq: r,
          pxs: -1,
          pxe: -1,
          pys: -1,
          pye: -1,
          oxs: -1,
          oxe: -1,
          oys: -1,
          oye: -1,
          stack_top: 0,
          stack_base: [],
        });
      }
      function u(e, t) {
        let [n, o, r] = [0, e.length, t.length];
        for (; n < o && n < r && e[n] === t[n]; ) n++;
        if (n === o && n === r) return [][Symbol.iterator]();
        for (; e[--o] === t[--r] && o > n && r > n; );
        return c(n, o + 1 - n, n, r + 1 - n, (n, o) => e[n] === t[o]);
      }
      (a.diff_core = c), (a.diff = u);
      let d = class {
        [Symbol.iterator]() {
          return this;
        }
        next() {
          const e = this.diff.next();
          if (e.done) {
            const { i: t, j: n, N: o } = this;
            return (
              t < o && ((e.done = !1), (e.value = [t, n, o - t]), (this.i = o)),
              e
            );
          }
          const t = e.value,
            n = t[0],
            o = t[1],
            r = t[3],
            { i, j: s } = this;
          return (
            i !== n && (t.length--, (t[0] = i), (t[1] = s), (t[2] = n - i)),
            (this.i = o),
            (this.j = r),
            e
          );
        }
        constructor(e, t) {
          (this.diff = e), (this.N = t), (this.i = 0), (this.j = 0);
        }
      };
      var h = (a.lcs = function (e, t) {
        return new d(u(e, t), e.length);
      });
      (a.calcPatch = function* (e, t) {
        const n = ArrayBuffer.isView(e)
          ? Uint8Array.prototype.subarray
          : e.slice;
        for (const o of u(e, t)) (o[2] = n.call(t, o[2], o[3])), yield o;
      }),
        (a.applyPatch = function* (e, t) {
          let n = 0;
          const o = ArrayBuffer.isView(e)
            ? Uint8Array.prototype.subarray
            : e.slice;
          for (const [r, i, s] of t)
            n < r && (yield o.call(e, n, r)),
              s.length > 0 && (yield s),
              (n = i);
          n < e.length && (yield o.call(e, n));
        });
      const f = (e, t) => {
          const n = [];
          let o = 0;
          for (const r of e) n.push(o), (o += r.length + t);
          return n.push(o - t), n;
        },
        p = (e) => e.filter((e) => e.end > e.start),
        g = (e, t, n) => {
          if (!e) return [{ token: "plain", start: n, end: t.length + n }];
          if (
            "undefined" === t ||
            "Infinity" === t ||
            "-Infinity" === t ||
            "NaN" === t ||
            /^\d+n$/i.test(t) ||
            t.startsWith("Symbol(") ||
            t.startsWith("function") ||
            t.startsWith("(")
          )
            return [{ token: "invalid", start: n, end: t.length + n }];
          if (!Number.isNaN(Number(t)))
            return [{ token: "number", start: n, end: t.length + n }];
          if ("true" === t || "false" === t)
            return [{ token: "boolean", start: n, end: t.length + n }];
          if ("null" === t)
            return [{ token: "null", start: n, end: t.length + n }];
          if (t.startsWith('"')) {
            if (t.endsWith(": [") || t.endsWith(": {"))
              return [
                { token: "key", start: n, end: t.length - 3 + n },
                {
                  token: "punctuation",
                  start: t.length - 3,
                  end: t.length - 2 + n,
                },
                { token: "plain", start: t.length - 2, end: t.length - 1 + n },
                {
                  token: "punctuation",
                  start: t.length - 1,
                  end: t.length + n,
                },
              ];
            let o = 1;
            for (; o < t.length && '"' !== t[o]; ) "\\" === t[o] && ++o, ++o;
            return o === t.length - 1
              ? [{ token: "string", start: n, end: t.length + n }]
              : [
                  { token: "key", start: n, end: o + 1 + n },
                  { token: "punctuation", start: o + 1, end: o + 2 + n },
                  { token: "plain", start: o + 2, end: o + 3 + n },
                  ...g(e, t.substring(o + 3), n + o + 3),
                ];
          }
          return "{" === t || "}" === t || "[" === t || "]" === t
            ? [{ token: "punctuation", start: n, end: t.length + n }]
            : [{ token: "plain", start: n, end: t.length + n }];
        },
        m = { threshold: 8, margin: 3 },
        y = (e, t, n, o) => {
          if (!n || o) return [{ start: 0, end: e.length, isEqual: !1 }];
          const r = [];
          for (let n = 0; n < e.length; n++)
            "equal" === e[n].type && "equal" === t[n].type
              ? r.length && r[r.length - 1].isEqual
                ? r[r.length - 1].end++
                : r.push({ start: n, end: n + 1, isEqual: !0 })
              : r.length && !r[r.length - 1].isEqual
                ? r[r.length - 1].end++
                : r.push({ start: n, end: n + 1, isEqual: !1 });
          const i = !0 === n ? m : { ...m, ...n },
            { threshold: s, margin: a } = i;
          s < 2 * a + 1 &&
            console.warn(
              `Threshold (${s}) is no more than 2 margins + 1 "expand" line (${a} * 2 + 1), it's not necessary to hide unchanged areas which have less than ${2 * a + 1} lines.`,
            );
          const l = [];
          for (let t = 0; t < r.length; t++) {
            const n = r[t];
            !n.isEqual || n.end - n.start < s || n.end - n.start <= 2 * a + 1
              ? l.push(n)
              : t
                ? t === r.length - 1
                  ? (l.push({ start: n.start, end: n.start + a, isEqual: !0 }),
                    l.push({
                      hasLinesBefore: !1,
                      hasLinesAfter: !0,
                      start: n.start + a,
                      end: e.length,
                      isEqual: !0,
                    }))
                  : (l.push({ start: n.start, end: n.start + a, isEqual: !0 }),
                    l.push({
                      hasLinesBefore: !0,
                      hasLinesAfter: !0,
                      start: n.start + a,
                      end: n.end - a,
                      isEqual: !0,
                    }),
                    l.push({ start: n.end - a, end: n.end, isEqual: !0 }))
                : (l.push({
                    hasLinesBefore: !0,
                    hasLinesAfter: !1,
                    start: 0,
                    end: n.end - a,
                    isEqual: !0,
                  }),
                  l.push({ start: n.end - a, end: n.end, isEqual: !0 }));
          }
          return l;
        },
        v = {
          noChangeDetected: "No change detected",
          showLinesBefore: "⭡ Show %d lines before",
          showLinesAfter: "⭣ Show %d lines after",
          showAll: "⭥ Show all unchanged lines",
        },
        x = (e) => {
          const [t, n] = e.diff,
            a = o.useMemo(
              () =>
                t.length === n.length &&
                t.every((e) => "equal" === e.type) &&
                n.every((e) => "equal" === e.type),
              [t, n],
            ),
            l = { ...v, ...e.texts },
            c = e.lineNumbers ? `calc(${String(t.length).length}ch + 16px)` : 0,
            u = e.indent ?? 2,
            d = "tab" === u ? "\t" : " ",
            m = "tab" === u ? 1 : u,
            x = {
              mode: e.inlineDiffOptions?.mode || "char",
              wordSeparator: e.inlineDiffOptions?.wordSeparator || "",
            },
            b = e.hideUnchangedLines ?? !1,
            {
              scrollContainer: w = "body",
              itemHeight: S = 18,
              expandLineHeight: E = 26,
            } = e.virtual && !0 !== e.virtual ? e.virtual : {},
            _ = "body" === w ? document.body : document.querySelector(w),
            C = o.useRef(t),
            k = o.useRef(n),
            M = o.useRef(y(t, n, b, a)),
            N = o.useRef([]),
            P = o.useRef(0),
            A = o.useRef(null),
            [, O] = o.useState({}),
            D = () => {
              if (((N.current = []), e.virtual)) {
                let e = 0;
                for (const t of M.current)
                  r(t)
                    ? (N.current.push(e), (e += E))
                    : (N.current.push(e), (e += S * (t.end - t.start)));
                P.current = M.current.reduce(
                  (e, t) => (r(t) ? e + E : e + (t.end - t.start) * S),
                  0,
                );
              }
              O({});
            };
          o.useEffect(() => {
            (C.current = t), (k.current = n), (M.current = y(t, n, b, a)), D();
          }, [b, t, n]),
            o.useEffect(() => {
              if (!e.virtual || !_) return;
              const t = () => O({});
              return (
                _.addEventListener("scroll", t),
                () => {
                  _.removeEventListener("scroll", t);
                }
              );
            }, [e.virtual, _]);
          const j = (e) => (t) => {
              const n = [...M.current],
                o = n[e];
              (n[e] = { ...o, end: Math.max(o.end - t, o.start) }),
                e + 1 < M.current.length - 1 &&
                  (n[e + 1] = {
                    ...n[e + 1],
                    start: Math.max(o.end - t, o.start),
                  }),
                (M.current = n),
                D();
            },
            I = (e) => (t) => {
              const n = [...M.current],
                o = n[e];
              (n[e] = { ...o, start: Math.min(o.start + t, o.end) }),
                e > 1 &&
                  (n[e - 1] = {
                    ...n[e - 1],
                    end: Math.min(o.start + t, o.end),
                  }),
                (M.current = n),
                D();
            },
            z = (e) => () => {
              const t = [...M.current],
                n = t[e];
              (t[e] = { ...n, start: n.start, end: n.start }),
                e + 1 < M.current.length - 1
                  ? (t[e + 1] = { ...t[e + 1], start: n.start })
                  : (t[e - 1] = { ...t[e - 1], end: n.end }),
                (M.current = t),
                D();
            },
            B = (e, t = [], n = !1, r = !1) =>
              o.createElement(
                o.Fragment,
                null,
                t.map((t, n) => {
                  const r = e.slice(t.start, t.end);
                  if (!t.type && !t.token) return r;
                  const i = [
                    t.type ? `inline-diff-${t.type}` : "",
                    t.token ? `token ${t.token}` : "",
                  ]
                    .filter(Boolean)
                    .join(" ");
                  return o.createElement(
                    "span",
                    { key: `${n}-${t.type}-${r}`, className: i },
                    r,
                  );
                }),
                n &&
                  (r
                    ? o.createElement(
                        "span",
                        { className: "token punctuation" },
                        ",",
                      )
                    : ","),
              ),
            L = (t, n) => {
              const r = C.current[t],
                i = k.current[t],
                [a, l] =
                  e.highlightInlineDiff &&
                  "modify" === r.type &&
                  "modify" === i.type
                    ? ((e, t, n) => {
                        let o = [],
                          r = [],
                          i = 0,
                          s = 0;
                        if ("word" === n.mode) {
                          const a = n.wordSeparator || " ",
                            l = e.split(a),
                            c = t.split(a),
                            u = [...h(l, c)],
                            d = a.length,
                            g = f(l, d),
                            m = f(c, d);
                          for (const [e, t, n] of u)
                            e > i &&
                              o.push({
                                type: "remove",
                                start: g[i],
                                end: g[e],
                              }),
                              t > s &&
                                r.push({ type: "add", start: m[s], end: m[t] }),
                              (i = e + n),
                              (s = t + n),
                              o.push({ start: g[e], end: g[i] }),
                              r.push({ start: m[t], end: m[s] });
                          return (
                            e.length > i &&
                              o.push({
                                type: "remove",
                                start: g[i],
                                end: e.length,
                              }),
                            t.length > s &&
                              r.push({
                                type: "add",
                                start: m[s],
                                end: t.length,
                              }),
                            (o = p(o)),
                            (r = p(r)),
                            [o, r]
                          );
                        }
                        const a = h(e, t);
                        for (const [e, t, n] of a)
                          e > i && o.push({ type: "remove", start: i, end: e }),
                            t > s && r.push({ type: "add", start: s, end: t }),
                            (i = e + n),
                            (s = t + n),
                            o.push({ start: e, end: i }),
                            r.push({ start: t, end: s });
                        return (
                          e.length > i &&
                            o.push({ type: "remove", start: i, end: e.length }),
                          t.length > s &&
                            r.push({ type: "add", start: s, end: t.length }),
                          (o = p(o)),
                          (r = p(r)),
                          [o, r]
                        );
                      })(r.text, i.text, x)
                    : [[], []],
                c = g(n, r.text, 0),
                u = g(n, i.text, 0),
                y = s(c, a),
                v = s(u, l),
                b = "equal" !== r.type ? (e.bgColour?.[r.type] ?? "") : "",
                w = "equal" !== i.type ? (e.bgColour?.[i.type] ?? "") : "";
              return o.createElement(
                "tr",
                { key: t },
                e.lineNumbers &&
                  o.createElement(
                    "td",
                    {
                      className: `line-${r.type} line-number`,
                      style: { backgroundColor: b },
                    },
                    r.lineNumber,
                  ),
                o.createElement(
                  "td",
                  {
                    className: `line-${r.type}`,
                    style: { backgroundColor: b },
                  },
                  o.createElement(
                    "pre",
                    null,
                    r.text && d.repeat(r.level * m),
                    B(r.text, y, r.comma, n),
                  ),
                ),
                e.lineNumbers &&
                  o.createElement(
                    "td",
                    {
                      className: `line-${i.type} line-number`,
                      style: { backgroundColor: w },
                    },
                    i.lineNumber,
                  ),
                o.createElement(
                  "td",
                  {
                    className: `line-${i.type}`,
                    style: { backgroundColor: w },
                  },
                  o.createElement(
                    "pre",
                    null,
                    i.text && d.repeat(i.level * m),
                    B(i.text, v, i.comma, n),
                  ),
                ),
              );
            },
            R = (e, t, n, r) =>
              o.createElement(
                o.Fragment,
                null,
                e &&
                  o.createElement(
                    "button",
                    { onClick: () => j(r)(n) },
                    l.showLinesBefore.replaceAll("%d", String(n)),
                  ),
                o.createElement("button", { onClick: () => z(r)() }, l.showAll),
                t &&
                  o.createElement(
                    "button",
                    { onClick: () => I(r)(n) },
                    l.showLinesAfter.replaceAll("%d", String(n)),
                  ),
              ),
            $ = (e, t, n, i, s) => {
              let { start: a, end: l } = e;
              if (((a = Math.max(a, n)), (l = Math.min(l, i)), a === l))
                return null;
              if (!r(e))
                return Array(l - a)
                  .fill(0)
                  .map((e, t) => L(a + t, s));
              const { hasLinesBefore: c, hasLinesAfter: u } = e,
                d = "boolean" == typeof b ? 20 : b.expandMoreLinesLimit || 20;
              return [
                o.createElement(
                  "tr",
                  { key: `expand-line-${t}`, className: "expand-line" },
                  o.createElement(
                    "td",
                    {
                      colSpan: 4,
                      className: `${c ? "has-lines-before" : ""} ${u ? "has-lines-after" : ""}`,
                    },
                    "boolean" != typeof b && b.expandLineRenderer
                      ? b.expandLineRenderer({
                          hasLinesBefore: c,
                          hasLinesAfter: u,
                          onExpandBefore: j(t),
                          onExpandAfter: I(t),
                          onExpandAll: z(t),
                        })
                      : R(c, u, d, t),
                  ),
                ),
              ];
            },
            T = [
              "json-diff-viewer",
              e.virtual && "json-diff-viewer-virtual",
              e.syntaxHighlight &&
                `json-diff-viewer-theme-${e.syntaxHighlight.theme || "monokai"}`,
              e.className,
            ]
              .filter(Boolean)
              .join(" "),
            V = !!e.syntaxHighlight;
          return o.createElement(
            "table",
            { className: T, style: e.style },
            o.createElement(
              "colgroup",
              { className: "measure-line" },
              e.lineNumbers && o.createElement("col", { style: { width: c } }),
              o.createElement("col", null),
              e.lineNumbers && o.createElement("col", { style: { width: c } }),
              o.createElement("col", null),
            ),
            o.createElement(
              "tbody",
              { ref: A },
              ((t) => {
                if (a && b)
                  return o.createElement(
                    "tr",
                    { key: "message-line", className: "message-line" },
                    o.createElement("td", { colSpan: 4 }, l.noChangeDetected),
                  );
                if (!e.virtual)
                  return M.current.map((e, n) =>
                    $(e, n, 0, C.current.length, t),
                  );
                const n = _?.clientHeight ?? 0,
                  s = _?.scrollTop ?? 0,
                  c = s + n;
                let u = A.current,
                  d = u?.offsetTop ?? 0;
                for (; u?.offsetParent && u?.offsetParent !== _; )
                  (u = u.offsetParent), (d += u.offsetTop);
                if (d > c || d + P.current < s)
                  return o.createElement(
                    "tr",
                    null,
                    o.createElement("td", {
                      colSpan: 4,
                      style: { height: `${P.current}px` },
                    }),
                  );
                const h = s - d,
                  f = c - d,
                  [p, g, m, y] = ((e, t, n, o, s, a) => {
                    if (!t.length) return [0, 0, 0, 0];
                    let l = 0,
                      c = 0,
                      u = 0,
                      d = 0,
                      h = 0,
                      f = e.length - 1;
                    for (;;) {
                      const o = Math.floor((h + f) / 2);
                      if (
                        (t[o] + i(e[o], s, a) <= n ? (h = o + 1) : (f = o),
                        h === f)
                      ) {
                        l = h;
                        break;
                      }
                    }
                    const p = e[l];
                    for (
                      u = r(p) ? p.start : p.start + Math.floor((n - t[l]) / s),
                        h = 0,
                        f = e.length - 1;
                      ;
                    ) {
                      const e = Math.floor((h + f + 1) / 2);
                      if ((t[e] >= o ? (f = e - 1) : (h = e), h === f)) {
                        c = h;
                        break;
                      }
                    }
                    const g = e[c];
                    return (
                      (d = r(g) ? g.end : g.start + Math.ceil((o - t[c]) / s)),
                      [l, u, c, d]
                    );
                  })(M.current, N.current, h, f, S, E),
                  [v, x] = ((e, t, n, o, i, s, a, l, c) => {
                    if (!t.length) return [0, 0];
                    let u = 0,
                      d = 0;
                    const h = e[n];
                    u = r(h) ? t[n] : t[n] + (o - h.start) * a;
                    const f = e[i];
                    return (
                      (d = r(f) ? c - t[i] - l : c - t[i] - (s - f.start) * a),
                      [u, d]
                    );
                  })(M.current, N.current, p, g, m, y, S, E, P.current),
                  w = M.current.slice(p, m + 1);
                return w.length
                  ? o.createElement(
                      o.Fragment,
                      null,
                      o.createElement(
                        "tr",
                        null,
                        o.createElement("td", {
                          colSpan: 4,
                          style: { height: v, padding: 0 },
                        }),
                      ),
                      w.map((e, n) => $(e, n, g, y, t)),
                      o.createElement(
                        "tr",
                        null,
                        o.createElement("td", {
                          colSpan: 4,
                          style: { height: x, padding: 0 },
                        }),
                      ),
                    )
                  : o.createElement(
                      "tr",
                      null,
                      o.createElement("td", {
                        colSpan: 4,
                        style: { height: `${P.current}px` },
                      }),
                    );
              })(V),
            ),
          );
        };
      x.displayName = "Viewer";
    },
    18010: (e, t, n) => {
      "use strict";
      n.d(t, { P2: () => g });
      const o = (e, t) => t.some((t) => e instanceof t);
      let r, i;
      const s = new WeakMap(),
        a = new WeakMap(),
        l = new WeakMap();
      let c = {
        get(e, t, n) {
          if (e instanceof IDBTransaction) {
            if ("done" === t) return s.get(e);
            if ("store" === t)
              return n.objectStoreNames[1]
                ? void 0
                : n.objectStore(n.objectStoreNames[0]);
          }
          return f(e[t]);
        },
        set: (e, t, n) => ((e[t] = n), !0),
        has: (e, t) =>
          (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
          t in e,
      };
      function u(e) {
        c = e(c);
      }
      function d(e) {
        return (
          i ||
          (i = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
          ])
        ).includes(e)
          ? function (...t) {
              return e.apply(p(this), t), f(this.request);
            }
          : function (...t) {
              return f(e.apply(p(this), t));
            };
      }
      function h(e) {
        return "function" == typeof e
          ? d(e)
          : (e instanceof IDBTransaction &&
              (function (e) {
                if (s.has(e)) return;
                const t = new Promise((t, n) => {
                  const o = () => {
                      e.removeEventListener("complete", r),
                        e.removeEventListener("error", i),
                        e.removeEventListener("abort", i);
                    },
                    r = () => {
                      t(), o();
                    },
                    i = () => {
                      n(
                        e.error || new DOMException("AbortError", "AbortError"),
                      ),
                        o();
                    };
                  e.addEventListener("complete", r),
                    e.addEventListener("error", i),
                    e.addEventListener("abort", i);
                });
                s.set(e, t);
              })(e),
            o(
              e,
              r ||
                (r = [
                  IDBDatabase,
                  IDBObjectStore,
                  IDBIndex,
                  IDBCursor,
                  IDBTransaction,
                ]),
            )
              ? new Proxy(e, c)
              : e);
      }
      function f(e) {
        if (e instanceof IDBRequest)
          return (function (e) {
            const t = new Promise((t, n) => {
              const o = () => {
                  e.removeEventListener("success", r),
                    e.removeEventListener("error", i);
                },
                r = () => {
                  t(f(e.result)), o();
                },
                i = () => {
                  n(e.error), o();
                };
              e.addEventListener("success", r), e.addEventListener("error", i);
            });
            return l.set(t, e), t;
          })(e);
        if (a.has(e)) return a.get(e);
        const t = h(e);
        return t !== e && (a.set(e, t), l.set(t, e)), t;
      }
      const p = (e) => l.get(e);
      function g(
        e,
        t,
        { blocked: n, upgrade: o, blocking: r, terminated: i } = {},
      ) {
        const s = indexedDB.open(e, t),
          a = f(s);
        return (
          o &&
            s.addEventListener("upgradeneeded", (e) => {
              o(f(s.result), e.oldVersion, e.newVersion, f(s.transaction), e);
            }),
          n &&
            s.addEventListener("blocked", (e) =>
              n(e.oldVersion, e.newVersion, e),
            ),
          a
            .then((e) => {
              i && e.addEventListener("close", () => i()),
                r &&
                  e.addEventListener("versionchange", (e) =>
                    r(e.oldVersion, e.newVersion, e),
                  );
            })
            .catch(() => {}),
          a
        );
      }
      const m = ["get", "getKey", "getAll", "getAllKeys", "count"],
        y = ["put", "add", "delete", "clear"],
        v = new Map();
      function x(e, t) {
        if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t)
          return;
        if (v.get(t)) return v.get(t);
        const n = t.replace(/FromIndex$/, ""),
          o = t !== n,
          r = y.includes(n);
        if (
          !(n in (o ? IDBIndex : IDBObjectStore).prototype) ||
          (!r && !m.includes(n))
        )
          return;
        const i = async function (e, ...t) {
          const i = this.transaction(e, r ? "readwrite" : "readonly");
          let s = i.store;
          return (
            o && (s = s.index(t.shift())),
            (await Promise.all([s[n](...t), r && i.done]))[0]
          );
        };
        return v.set(t, i), i;
      }
      u((e) => ({
        ...e,
        get: (t, n, o) => x(t, n) || e.get(t, n, o),
        has: (t, n) => !!x(t, n) || e.has(t, n),
      }));
      const b = ["continue", "continuePrimaryKey", "advance"],
        w = {},
        S = new WeakMap(),
        E = new WeakMap(),
        _ = {
          get(e, t) {
            if (!b.includes(t)) return e[t];
            let n = w[t];
            return (
              n ||
                (n = w[t] =
                  function (...e) {
                    S.set(this, E.get(this)[t](...e));
                  }),
              n
            );
          },
        };
      async function* C(...e) {
        let t = this;
        if ((t instanceof IDBCursor || (t = await t.openCursor(...e)), !t))
          return;
        const n = new Proxy(t, _);
        for (E.set(n, t), l.set(n, p(t)); t; )
          yield n, (t = await (S.get(n) || t.continue())), S.delete(n);
      }
      function k(e, t) {
        return (
          (t === Symbol.asyncIterator &&
            o(e, [IDBIndex, IDBObjectStore, IDBCursor])) ||
          ("iterate" === t && o(e, [IDBIndex, IDBObjectStore]))
        );
      }
      u((e) => ({
        ...e,
        get: (t, n, o) => (k(t, n) ? C : e.get(t, n, o)),
        has: (t, n) => k(t, n) || e.has(t, n),
      }));
    },
  },
]);

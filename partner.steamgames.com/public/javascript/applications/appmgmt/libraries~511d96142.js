/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5193],
  {
    55552: () => {},
    47316: (e, t, n) => {
      "use strict";
      n.d(t, {
        h7: () => Ie,
        Gc: () => Zt,
        Ln: () => Ht,
        fM: () => Ut,
        ck: () => Ft,
        PF: () => Yt,
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
        f = (e) => e;
      function h(e, t = f, n) {
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
          o = (e, o = t) => h(n, e, o);
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
      const y = (0, s.createContext)(null),
        m = y.Provider,
        v = i.xc.error001();
      function x(e, t) {
        const n = (0, s.useContext)(y);
        if (null === n) throw new Error(v);
        return h(n, e, t);
      }
      function w() {
        const e = (0, s.useContext)(y);
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
      const b = { display: "none" },
        E = {
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
        S = "react-flow__node-desc",
        _ = "react-flow__edge-desc",
        C = "react-flow__aria-live",
        k = (e) => e.ariaLiveMessage;
      function M({ rfId: e }) {
        const t = x(k);
        return (0, o.jsx)("div", {
          id: `${C}-${e}`,
          "aria-live": "assertive",
          "aria-atomic": "true",
          style: E,
          children: t,
        });
      }
      function N({ rfId: e, disableKeyboardA11y: t }) {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("div", {
              id: `${S}-${e}`,
              style: b,
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
              style: b,
              children:
                "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
            }),
            !t && (0, o.jsx)(M, { rfId: e }),
          ],
        });
      }
      const P = (e) => (e.userSelectionActive ? "none" : "all"),
        A = (0, s.forwardRef)(
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
            const l = x(P),
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
      function O({ proOptions: e, position: t = "bottom-right" }) {
        return e?.hideAttribution
          ? null
          : (0, o.jsx)(A, {
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
      const I = (e) => {
          const t = [],
            n = [];
          for (const [, n] of e.nodeLookup)
            n.selected && t.push(n.internals.userNode);
          for (const [, t] of e.edgeLookup) t.selected && n.push(t);
          return { selectedNodes: t, selectedEdges: n };
        },
        B = (e) => e.id;
      function D(e, t) {
        return (
          g(e.selectedNodes.map(B), t.selectedNodes.map(B)) &&
          g(e.selectedEdges.map(B), t.selectedEdges.map(B))
        );
      }
      function j({ onSelectionChange: e }) {
        const t = w(),
          { selectedNodes: n, selectedEdges: o } = x(I, D);
        return (
          (0, s.useEffect)(() => {
            const r = { nodes: n, edges: o };
            e?.(r), t.getState().onSelectionChangeHandlers.forEach((e) => e(r));
          }, [n, o, e]),
          null
        );
      }
      const z = (e) => !!e.onSelectionChangeHandlers;
      function R({ onSelectionChange: e }) {
        const t = x(z);
        return e || t ? (0, o.jsx)(j, { onSelectionChange: e }) : null;
      }
      const L = [0, 0],
        $ = { x: 0, y: 0, zoom: 1 },
        T = [
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
        V = (e) => ({
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
        H = {
          translateExtent: i.ZO,
          nodeOrigin: L,
          minZoom: 0.5,
          maxZoom: 2,
          elementsSelectable: !0,
          noPanClassName: "nopan",
          rfId: "1",
          paneClickDistance: 0,
        };
      function X(e) {
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
          } = x(V, g),
          d = w();
        (0, s.useEffect)(
          () => (
            c(e.defaultNodes, e.defaultEdges),
            () => {
              (f.current = H), l();
            }
          ),
          [],
        );
        const f = (0, s.useRef)(H);
        return (
          (0, s.useEffect)(
            () => {
              for (const s of T) {
                const l = e[s];
                l !== f.current[s] &&
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
              f.current = e;
            },
            T.map((t) => e[t]),
          ),
          null
        );
      }
      function q() {
        return "undefined" != typeof window && window.matchMedia
          ? window.matchMedia("(prefers-color-scheme: dark)")
          : null;
      }
      const Z = "undefined" != typeof document ? document : null;
      function Y(e = null, t = { target: Z, actInsideInputWithModifier: !0 }) {
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
            const n = t?.target || Z;
            if (null !== e) {
              const e = (e) => {
                  r.current = e.ctrlKey || e.metaKey || e.shiftKey;
                  if (
                    (!r.current ||
                      (r.current && !t.actInsideInputWithModifier)) &&
                    (0, i.v5)(e)
                  )
                    return !1;
                  const n = U(e.code, c);
                  a.current.add(e[n]),
                    F(l, a.current, !1) && (e.preventDefault(), o(!0));
                },
                s = (e) => {
                  if (
                    (!r.current ||
                      (r.current && !t.actInsideInputWithModifier)) &&
                    (0, i.v5)(e)
                  )
                    return !1;
                  const n = U(e.code, c);
                  F(l, a.current, !0)
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
      function F(e, t, n) {
        return e
          .filter((e) => n || e.length === t.size)
          .some((e) => e.every((e) => t.has(e)));
      }
      function U(e, t) {
        return t.includes(e) ? "code" : "key";
      }
      const W = () => {
        const e = w();
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
              const { transform: o, snapGrid: r, domNode: s } = e.getState();
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
      };
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
          for (const e of t) G(e, r);
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
      function G(e, t) {
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
      function Q(e, t) {
        return K(e, t);
      }
      function J(e, t) {
        return K(e, t);
      }
      function ee(e, t) {
        return { id: e, type: "select", selected: t };
      }
      function te(e, t = new Set(), n = !1) {
        const o = [];
        for (const [r, i] of e) {
          const e = t.has(r);
          (void 0 === i.selected && !e) ||
            i.selected === e ||
            (n && (i.selected = e), o.push(ee(i.id, e)));
        }
        return o;
      }
      function ne({ items: e = [], lookup: t }) {
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
      function oe(e) {
        return { id: e.id, type: "remove" };
      }
      const re = (e) => (0, i.oB)(e),
        ie = (e) => (0, i.b$)(e);
      function se(e) {
        return (0, s.forwardRef)(e);
      }
      const ae = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect;
      function le(e) {
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
          ae(() => {
            const t = o.get();
            t.length && (e(t), o.reset());
          }, [t]),
          o
        );
      }
      const ce = (0, s.createContext)(null);
      function ue({ children: e }) {
        const t = w(),
          n = le(
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
              r ? o(a) : i && i(ne({ items: a, lookup: s }));
            }, []),
          ),
          r = le(
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
              r ? o(a) : i && i(ne({ items: a, lookup: s }));
            }, []),
          ),
          i = (0, s.useMemo)(() => ({ nodeQueue: n, edgeQueue: r }), []);
        return (0, o.jsx)(ce.Provider, { value: i, children: e });
      }
      const de = (e) => !!e.panZoom;
      function fe() {
        const e = W(),
          t = w(),
          n = (function () {
            const e = (0, s.useContext)(ce);
            if (!e)
              throw new Error(
                "useBatchContext must be used within a BatchProvider",
              );
            return e;
          })(),
          o = x(de),
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
                  r = re(e) ? e : n.get(e.id),
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
                      return n.replace && re(e) ? e : { ...o, ...e };
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
                      return n.replace && ie(e) ? e : { ...o, ...e };
                    }
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
                  { nodes: f, edges: h } = await (0, i.Tq)({
                    nodesToRemove: e,
                    edgesToRemove: n,
                    nodes: o,
                    edges: r,
                    onBeforeDelete: d,
                  }),
                  p = h.length > 0,
                  g = f.length > 0;
                if (p) {
                  const e = h.map(oe);
                  a?.(h), c(e);
                }
                if (g) {
                  const e = f.map(oe);
                  s?.(f), l(e);
                }
                return (
                  (g || p) && u?.({ nodes: f, edges: h }),
                  { deletedNodes: f, deletedEdges: h }
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
      const he = (e) => e.selected,
        pe = { actInsideInputWithModifier: !1 },
        ge = "undefined" != typeof window ? window : void 0;
      const ye = {
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        },
        me = (e) => ({
          userSelectionActive: e.userSelectionActive,
          lib: e.lib,
        });
      function ve({
        onPaneContextMenu: e,
        zoomOnScroll: t = !0,
        zoomOnPinch: n = !0,
        panOnScroll: r = !1,
        panOnScrollSpeed: a = 0.5,
        panOnScrollMode: l = i.ny.Free,
        zoomOnDoubleClick: c = !0,
        panOnDrag: u = !0,
        defaultViewport: d,
        translateExtent: f,
        minZoom: h,
        maxZoom: p,
        zoomActivationKeyCode: y,
        preventScrolling: m = !0,
        children: v,
        noWheelClassName: b,
        noPanClassName: E,
        onViewportChange: S,
        isControlledViewport: _,
        paneClickDistance: C,
      }) {
        const k = w(),
          M = (0, s.useRef)(null),
          { userSelectionActive: N, lib: P } = x(me, g),
          A = Y(y),
          O = (0, s.useRef)();
        !(function (e) {
          const t = w();
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
        const I = (0, s.useCallback)(
          (e) => {
            S?.({ x: e[0], y: e[1], zoom: e[2] }),
              _ || k.setState({ transform: e });
          },
          [S, _],
        );
        return (
          (0, s.useEffect)(() => {
            if (M.current) {
              O.current = (0, i.kO)({
                domNode: M.current,
                minZoom: h,
                maxZoom: p,
                translateExtent: f,
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
              preventScrolling: m,
              noPanClassName: E,
              userSelectionActive: N,
              noWheelClassName: b,
              lib: P,
              onTransformChange: I,
            });
          }, [e, t, n, r, a, l, c, u, A, m, E, N, b, P, I]),
          (0, o.jsx)("div", {
            className: "react-flow__renderer",
            ref: M,
            style: ye,
            children: v,
          })
        );
      }
      const xe = (e) => ({
        userSelectionActive: e.userSelectionActive,
        userSelectionRect: e.userSelectionRect,
      });
      function we() {
        const { userSelectionActive: e, userSelectionRect: t } = x(xe, g);
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
      const be = (e, t) => (n) => {
          n.target === t.current && e?.(n);
        },
        Ee = (e) => ({
          userSelectionActive: e.userSelectionActive,
          elementsSelectable: e.elementsSelectable,
          dragging: e.paneDragging,
        });
      function Se({
        isSelecting: e,
        selectionKeyPressed: t,
        selectionMode: n = i.Qc.Full,
        panOnDrag: a,
        selectionOnDrag: l,
        onSelectionStart: c,
        onSelectionEnd: u,
        onPaneClick: d,
        onPaneContextMenu: f,
        onPaneScroll: h,
        onPaneMouseEnter: p,
        onPaneMouseMove: y,
        onPaneMouseLeave: m,
        children: v,
      }) {
        const b = (0, s.useRef)(null),
          E = w(),
          S = (0, s.useRef)(0),
          _ = (0, s.useRef)(0),
          C = (0, s.useRef)(),
          k = (0, s.useRef)(new Map()),
          {
            userSelectionActive: M,
            elementsSelectable: N,
            dragging: P,
          } = x(Ee, g),
          A = N && (e || M),
          O = (0, s.useRef)(!1),
          I = (0, s.useRef)(!1),
          B = (e) => {
            O.current
              ? (O.current = !1)
              : (d?.(e),
                E.getState().resetSelectedElements(),
                E.setState({ nodesSelectionActive: !1 }));
          },
          D = h ? (e) => h(e) : void 0,
          j = !0 === a || (Array.isArray(a) && a.includes(0));
        return (0, o.jsxs)("div", {
          className: r([
            "react-flow__pane",
            { draggable: j, dragging: P, selection: e },
          ]),
          onClick: A ? void 0 : be(B, b),
          onContextMenu: be((e) => {
            Array.isArray(a) && a?.includes(2) ? e.preventDefault() : f?.(e);
          }, b),
          onWheel: be(D, b),
          onPointerEnter: A ? void 0 : p,
          onPointerDown: A
            ? (t) => {
                const {
                  resetSelectedElements: n,
                  domNode: o,
                  edgeLookup: r,
                } = E.getState();
                if (
                  ((C.current = o?.getBoundingClientRect()),
                  !N ||
                    !e ||
                    0 !== t.button ||
                    t.target !== b.current ||
                    !C.current)
                )
                  return;
                t.target?.setPointerCapture?.(t.pointerId),
                  (I.current = !0),
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
                  E.setState({
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
            : y,
          onPointerMove: A
            ? (e) => {
                const {
                  userSelectionRect: t,
                  edgeLookup: o,
                  transform: r,
                  nodeLookup: s,
                  triggerNodeChanges: a,
                  triggerEdgeChanges: l,
                } = E.getState();
                if (!C.current || !t) return;
                O.current = !0;
                const { x: c, y: u } = (0, i.q1)(e.nativeEvent, C.current),
                  { startX: d, startY: f } = t,
                  h = {
                    startX: d,
                    startY: f,
                    x: c < d ? c : d,
                    y: u < f ? u : f,
                    width: Math.abs(c - d),
                    height: Math.abs(u - f),
                  },
                  p = (0, i.U$)(s, h, r, n === i.Qc.Partial, !0),
                  g = new Set(),
                  y = new Set();
                for (const e of p) {
                  y.add(e.id);
                  const t = k.current.get(e.id);
                  if (t) for (const e of t) g.add(e);
                }
                if (S.current !== y.size) {
                  S.current = y.size;
                  a(te(s, y, !0));
                }
                if (_.current !== g.size) {
                  _.current = g.size;
                  l(te(o, g));
                }
                E.setState({
                  userSelectionRect: h,
                  userSelectionActive: !0,
                  nodesSelectionActive: !1,
                });
              }
            : y,
          onPointerUp: A
            ? (e) => {
                if (0 !== e.button || !I.current) return;
                e.target?.releasePointerCapture?.(e.pointerId);
                const { userSelectionRect: n } = E.getState();
                !M && n && e.target === b.current && B?.(e),
                  S.current > 0 && E.setState({ nodesSelectionActive: !0 }),
                  E.setState({
                    userSelectionActive: !1,
                    userSelectionRect: null,
                  }),
                  (S.current = 0),
                  (_.current = 0),
                  u?.(e),
                  (t || l) && (O.current = !1),
                  (I.current = !1);
              }
            : void 0,
          onPointerLeave: m,
          ref: b,
          style: ye,
          children: [v, (0, o.jsx)(we, {})],
        });
      }
      function _e({ id: e, store: t, unselect: n = !1, nodeRef: o }) {
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
      function Ce({
        nodeRef: e,
        disabled: t = !1,
        noDragClassName: n,
        handleSelector: o,
        nodeId: r,
        isSelectable: a,
        nodeClickDistance: l,
      }) {
        const c = w(),
          [u, d] = (0, s.useState)(!1),
          f = (0, s.useRef)();
        return (
          (0, s.useEffect)(() => {
            f.current = (0, i.I$)({
              getStoreItems: () => c.getState(),
              onNodeMouseDown: (t) => {
                _e({ id: t, store: c, nodeRef: e });
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
            if (t) f.current?.destroy();
            else if (e.current)
              return (
                f.current?.update({
                  noDragClassName: n,
                  handleSelector: o,
                  domNode: e.current,
                  isSelectable: a,
                  nodeId: r,
                  nodeClickDistance: l,
                }),
                () => {
                  f.current?.destroy();
                }
              );
          }, [n, o, t, a, e, r]),
          u
        );
      }
      const ke = (e) => (t) =>
        t.selected && (t.draggable || (e && void 0 === t.draggable));
      function Me() {
        const e = w();
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
            f = ke(s),
            h = o ? r[0] : 5,
            p = o ? r[1] : 5,
            g = t.direction.x * h * t.factor,
            y = t.direction.y * p * t.factor;
          for (const [, e] of c) {
            if (!f(e)) continue;
            let t = {
              x: e.internals.positionAbsolute.x + g,
              y: e.internals.positionAbsolute.y + y,
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
      const Ne = (0, s.createContext)(null),
        Pe = Ne.Provider;
      Ne.Consumer;
      const Ae = () => (0, s.useContext)(Ne),
        Oe = (e) => ({
          connectOnClick: e.connectOnClick,
          noPanClassName: e.noPanClassName,
          rfId: e.rfId,
        });
      const Ie = (0, s.memo)(
        se(function (
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
            className: f,
            onMouseDown: h,
            onTouchStart: p,
            ...y
          },
          m,
        ) {
          const v = c || null,
            b = "target" === e,
            E = w(),
            S = Ae(),
            { connectOnClick: _, noPanClassName: C, rfId: k } = x(Oe, g),
            {
              connectingFrom: M,
              connectingTo: N,
              clickConnecting: P,
              isPossibleEndHandle: A,
              connectionInProcess: O,
              valid: I,
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
              })(S, v, e),
              g,
            );
          S || E.getState().onError?.("010", i.xc.error010());
          const B = (e) => {
              const {
                  defaultEdgeOptions: t,
                  onConnect: n,
                  hasDefaultEdges: o,
                } = E.getState(),
                r = { ...t, ...e };
              if (o) {
                const { edges: e, setEdges: t } = E.getState();
                t((0, i.rN)(r, e));
              }
              n?.(r), u?.(r);
            },
            D = (e) => {
              if (!S) return;
              const t = (0, i.Er)(e.nativeEvent);
              if (a && ((t && 0 === e.button) || !t)) {
                const t = E.getState();
                i.aQ.onPointerDown(e.nativeEvent, {
                  autoPanOnConnect: t.autoPanOnConnect,
                  connectionMode: t.connectionMode,
                  connectionRadius: t.connectionRadius,
                  domNode: t.domNode,
                  nodeLookup: t.nodeLookup,
                  lib: t.lib,
                  isTarget: b,
                  handleId: v,
                  nodeId: S,
                  flowId: t.rfId,
                  panBy: t.panBy,
                  cancelConnection: t.cancelConnection,
                  onConnectStart: t.onConnectStart,
                  onConnectEnd: t.onConnectEnd,
                  updateConnection: t.updateConnection,
                  onConnect: B,
                  isValidConnection: n || t.isValidConnection,
                  getTransform: () => E.getState().transform,
                  getFromHandle: () => E.getState().connection.fromHandle,
                  autoPanSpeed: t.autoPanSpeed,
                });
              }
              t ? h?.(e) : p?.(e);
            };
          return (0, o.jsx)("div", {
            "data-handleid": v,
            "data-nodeid": S,
            "data-handlepos": t,
            "data-id": `${k}-${S}-${v}-${e}`,
            className: r([
              "react-flow__handle",
              `react-flow__handle-${t}`,
              "nodrag",
              C,
              f,
              {
                source: !b,
                target: b,
                connectable: s,
                connectablestart: a,
                connectableend: l,
                clickconnecting: P,
                connectingfrom: M,
                connectingto: N,
                valid: I,
                connectionindicator: s && (!O || A) && (O ? l : a),
              },
            ]),
            onMouseDown: D,
            onTouchStart: D,
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
                    nodeLookup: f,
                    connection: h,
                  } = E.getState();
                  if (!S || (!s && !a)) return;
                  if (!s)
                    return (
                      o?.(t.nativeEvent, {
                        nodeId: S,
                        handleId: v,
                        handleType: e,
                      }),
                      void E.setState({
                        connectionClickStartHandle: {
                          nodeId: S,
                          type: e,
                          id: v,
                        },
                      })
                    );
                  const p = (0, i.oj)(t.target),
                    g = n || c,
                    { connection: y, isValid: m } = i.aQ.isValid(
                      t.nativeEvent,
                      {
                        handle: { nodeId: S, id: v, type: e },
                        connectionMode: l,
                        fromNodeId: s.nodeId,
                        fromHandleId: s.id || null,
                        fromType: s.type,
                        isValidConnection: g,
                        flowId: d,
                        doc: p,
                        lib: u,
                        nodeLookup: f,
                      },
                    );
                  m && y && B(y);
                  const x = structuredClone(h);
                  delete x.inProgress,
                    (x.toPosition = x.toHandle ? x.toHandle.position : null),
                    r?.(t, x),
                    E.setState({ connectionClickStartHandle: null });
                }
              : void 0,
            ref: m,
            ...y,
            children: d,
          });
        }),
      );
      const Be = {
          ArrowUp: { x: 0, y: -1 },
          ArrowDown: { x: 0, y: 1 },
          ArrowLeft: { x: -1, y: 0 },
          ArrowRight: { x: 1, y: 0 },
        },
        De = {
          input: function ({
            data: e,
            isConnectable: t,
            sourcePosition: n = i.yX.Bottom,
          }) {
            return (0, o.jsxs)(o.Fragment, {
              children: [
                e?.label,
                (0, o.jsx)(Ie, {
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
                (0, o.jsx)(Ie, {
                  type: "target",
                  position: n,
                  isConnectable: t,
                }),
                e?.label,
                (0, o.jsx)(Ie, {
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
                (0, o.jsx)(Ie, {
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
      const je = (e) => {
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
      function ze({
        onSelectionContextMenu: e,
        noPanClassName: t,
        disableKeyboardA11y: n,
      }) {
        const i = w(),
          {
            width: a,
            height: l,
            transformString: c,
            userSelectionActive: u,
          } = x(je, g),
          d = Me(),
          f = (0, s.useRef)(null);
        if (
          ((0, s.useEffect)(() => {
            n || f.current?.focus({ preventScroll: !0 });
          }, [n]),
          Ce({ nodeRef: f }),
          u || !a || !l)
        )
          return null;
        const h = e
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
            ref: f,
            className: "react-flow__nodesselection-rect",
            onContextMenu: h,
            tabIndex: n ? void 0 : -1,
            onKeyDown: n
              ? void 0
              : (e) => {
                  Object.prototype.hasOwnProperty.call(Be, e.key) &&
                    (e.preventDefault(),
                    d({ direction: Be[e.key], factor: e.shiftKey ? 4 : 1 }));
                },
            style: { width: a, height: l },
          }),
        });
      }
      const Re = "undefined" != typeof window ? window : void 0,
        Le = (e) => ({
          nodesSelectionActive: e.nodesSelectionActive,
          userSelectionActive: e.userSelectionActive,
        });
      function $e({
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
        selectionOnDrag: f,
        selectionMode: h,
        onSelectionStart: p,
        onSelectionEnd: g,
        multiSelectionKeyCode: y,
        panActivationKeyCode: m,
        zoomActivationKeyCode: v,
        elementsSelectable: b,
        zoomOnScroll: E,
        zoomOnPinch: S,
        panOnScroll: _,
        panOnScrollSpeed: C,
        panOnScrollMode: k,
        zoomOnDoubleClick: M,
        panOnDrag: N,
        defaultViewport: P,
        translateExtent: A,
        minZoom: O,
        maxZoom: I,
        preventScrolling: B,
        onSelectionContextMenu: D,
        noWheelClassName: j,
        noPanClassName: z,
        disableKeyboardA11y: R,
        onViewportChange: L,
        isControlledViewport: $,
      }) {
        const { nodesSelectionActive: T, userSelectionActive: V } = x(Le),
          H = Y(d, { target: Re }),
          X = Y(m, { target: Re }),
          q = X || N,
          Z = X || _,
          F = f && !0 !== q,
          U = H || V || F;
        return (
          (function ({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
            const n = w(),
              { deleteElements: o } = fe(),
              r = Y(e, pe),
              i = Y(t, { target: ge });
            (0, s.useEffect)(() => {
              if (r) {
                const { edges: e, nodes: t } = n.getState();
                o({ nodes: t.filter(he), edges: e.filter(he) }),
                  n.setState({ nodesSelectionActive: !1 });
              }
            }, [r]),
              (0, s.useEffect)(() => {
                n.setState({ multiSelectionActive: i });
              }, [i]);
          })({ deleteKeyCode: u, multiSelectionKeyCode: y }),
          (0, o.jsx)(ve, {
            onPaneContextMenu: a,
            elementsSelectable: b,
            zoomOnScroll: E,
            zoomOnPinch: S,
            panOnScroll: Z,
            panOnScrollSpeed: C,
            panOnScrollMode: k,
            zoomOnDoubleClick: M,
            panOnDrag: !H && q,
            defaultViewport: P,
            translateExtent: A,
            minZoom: O,
            maxZoom: I,
            zoomActivationKeyCode: v,
            preventScrolling: B,
            noWheelClassName: j,
            noPanClassName: z,
            onViewportChange: L,
            isControlledViewport: $,
            paneClickDistance: c,
            children: (0, o.jsxs)(Se, {
              onSelectionStart: p,
              onSelectionEnd: g,
              onPaneClick: t,
              onPaneMouseEnter: n,
              onPaneMouseMove: r,
              onPaneMouseLeave: i,
              onPaneContextMenu: a,
              onPaneScroll: l,
              panOnDrag: q,
              isSelecting: !!U,
              selectionMode: h,
              selectionKeyPressed: H,
              selectionOnDrag: F,
              children: [
                e,
                T &&
                  (0, o.jsx)(ze, {
                    onSelectionContextMenu: D,
                    noPanClassName: z,
                    disableKeyboardA11y: R,
                  }),
              ],
            }),
          })
        );
      }
      $e.displayName = "FlowRenderer";
      const Te = (0, s.memo)($e),
        Ve = (e) => (t) =>
          e
            ? (0, i.U$)(
                t.nodeLookup,
                { x: 0, y: 0, width: t.width, height: t.height },
                t.transform,
                !0,
              ).map((e) => e.id)
            : Array.from(t.nodeLookup.keys());
      const He = (e) => e.updateNodeInternals;
      function Xe({
        id: e,
        onClick: t,
        onMouseEnter: n,
        onMouseMove: a,
        onMouseLeave: l,
        onContextMenu: c,
        onDoubleClick: u,
        nodesDraggable: d,
        elementsSelectable: f,
        nodesConnectable: h,
        nodesFocusable: p,
        resizeObserver: y,
        noDragClassName: m,
        noPanClassName: v,
        disableKeyboardA11y: b,
        rfId: E,
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
          I = _?.[O] || De[O];
        void 0 === I &&
          (M?.("003", i.xc.error003(O)), (O = "default"), (I = De.default));
        const B = !!(N.draggable || (d && void 0 === N.draggable)),
          D = !!(N.selectable || (f && void 0 === N.selectable)),
          j = !!(N.connectable || (h && void 0 === N.connectable)),
          z = !!(N.focusable || (p && void 0 === N.focusable)),
          R = w(),
          L = (0, i.QE)(N),
          $ = (function ({
            node: e,
            nodeType: t,
            hasDimensions: n,
            resizeObserver: o,
          }) {
            const r = w(),
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
          })({ node: N, nodeType: O, hasDimensions: L, resizeObserver: y }),
          T = Ce({
            nodeRef: $,
            disabled: N.hidden || !B,
            noDragClassName: m,
            handleSelector: N.dragHandle,
            nodeId: e,
            isSelectable: D,
            nodeClickDistance: k,
          }),
          V = Me();
        if (N.hidden) return null;
        const H = (0, i.uD)(N),
          X = (function (e) {
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
          q = D || B || t || n || a || l,
          Z = n ? (e) => n(e, { ...P.userNode }) : void 0,
          Y = a ? (e) => a(e, { ...P.userNode }) : void 0,
          F = l ? (e) => l(e, { ...P.userNode }) : void 0,
          U = c ? (e) => c(e, { ...P.userNode }) : void 0,
          W = u ? (e) => u(e, { ...P.userNode }) : void 0;
        return (0, o.jsx)("div", {
          className: r([
            "react-flow__node",
            `react-flow__node-${O}`,
            { [v]: B },
            N.className,
            {
              selected: N.selected,
              selectable: D,
              parent: A,
              draggable: B,
              dragging: T,
            },
          ]),
          ref: $,
          style: {
            zIndex: P.z,
            transform: `translate(${P.positionAbsolute.x}px,${P.positionAbsolute.y}px)`,
            pointerEvents: q ? "all" : "none",
            visibility: L ? "visible" : "hidden",
            ...N.style,
            ...X,
          },
          "data-id": e,
          "data-testid": `rf__node-${e}`,
          onMouseEnter: Z,
          onMouseMove: Y,
          onMouseLeave: F,
          onContextMenu: U,
          onClick: (n) => {
            const { selectNodesOnDrag: o, nodeDragThreshold: r } = R.getState();
            D && (!o || !B || r > 0) && _e({ id: e, store: R, nodeRef: $ }),
              t && t(n, { ...P.userNode });
          },
          onDoubleClick: W,
          onKeyDown: z
            ? (t) => {
                if (!(0, i.v5)(t.nativeEvent) && !b)
                  if (i.tn.includes(t.key) && D) {
                    const n = "Escape" === t.key;
                    _e({ id: e, store: R, unselect: n, nodeRef: $ });
                  } else
                    B &&
                      N.selected &&
                      Object.prototype.hasOwnProperty.call(Be, t.key) &&
                      (t.preventDefault(),
                      R.setState({
                        ariaLiveMessage: `Moved selected node ${t.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~P.positionAbsolute.x}, y: ${~~P.positionAbsolute.y}`,
                      }),
                      V({ direction: Be[t.key], factor: t.shiftKey ? 4 : 1 }));
              }
            : void 0,
          tabIndex: z ? 0 : void 0,
          role: z ? "button" : void 0,
          "aria-describedby": b ? void 0 : `${S}-${E}`,
          "aria-label": N.ariaLabel,
          children: (0, o.jsx)(Pe, {
            value: e,
            children: (0, o.jsx)(I, {
              id: e,
              data: N.data,
              type: O,
              positionAbsoluteX: P.positionAbsolute.x,
              positionAbsoluteY: P.positionAbsolute.y,
              selected: N.selected,
              selectable: D,
              draggable: B,
              deletable: N.deletable ?? !0,
              isConnectable: j,
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
      const qe = (e) => ({
        nodesDraggable: e.nodesDraggable,
        nodesConnectable: e.nodesConnectable,
        nodesFocusable: e.nodesFocusable,
        elementsSelectable: e.elementsSelectable,
        onError: e.onError,
      });
      function Ze(e) {
        const {
            nodesDraggable: t,
            nodesConnectable: n,
            nodesFocusable: r,
            elementsSelectable: i,
            onError: a,
          } = x(qe, g),
          l =
            ((c = e.onlyRenderVisibleElements),
            x((0, s.useCallback)(Ve(c), [c]), g));
        var c;
        const u = (function () {
          const e = x(He),
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
          style: ye,
          children: l.map((s) =>
            (0, o.jsx)(
              Xe,
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
                resizeObserver: u,
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
      Ze.displayName = "NodeRenderer";
      const Ye = (0, s.memo)(Ze);
      const Fe = {
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
      const Ue = ({
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
            const t = w();
            return (0, s.useMemo)(
              () =>
                Object.prototype.hasOwnProperty.call(Fe, e)
                  ? Fe[e]
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
        We = ({ defaultColor: e, rfId: t }) => {
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
                      Ue,
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
      We.displayName = "MarkerDefinitions";
      var Ke = (0, s.memo)(We);
      function Ge({
        x: e,
        y: t,
        label: n,
        labelStyle: i = {},
        labelShowBg: a = !0,
        labelBgStyle: l = {},
        labelBgPadding: c = [2, 4],
        labelBgBorderRadius: u = 2,
        children: d,
        className: f,
        ...h
      }) {
        const [p, g] = (0, s.useState)({ x: 1, y: 0, width: 0, height: 0 }),
          y = r(["react-flow__edge-textwrapper", f]),
          m = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            if (m.current) {
              const e = m.current.getBBox();
              g({ x: e.x, y: e.y, width: e.width, height: e.height });
            }
          }, [n]),
          void 0 !== n && n
            ? (0, o.jsxs)("g", {
                transform: `translate(${e - p.width / 2} ${t - p.height / 2})`,
                className: y,
                visibility: p.width ? "visible" : "hidden",
                ...h,
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
                    ref: m,
                    style: i,
                    children: n,
                  }),
                  d,
                ],
              })
            : null
        );
      }
      Ge.displayName = "EdgeText";
      const Qe = (0, s.memo)(Ge);
      function Je({
        path: e,
        labelX: t,
        labelY: n,
        label: s,
        labelStyle: a,
        labelShowBg: l,
        labelBgStyle: c,
        labelBgPadding: u,
        labelBgBorderRadius: d,
        interactionWidth: f = 20,
        ...h
      }) {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("path", {
              ...h,
              d: e,
              fill: "none",
              className: r(["react-flow__edge-path", h.className]),
            }),
            f &&
              (0, o.jsx)("path", {
                d: e,
                fill: "none",
                strokeOpacity: 0,
                strokeWidth: f,
                className: "react-flow__edge-interaction",
              }),
            s && (0, i.kf)(t) && (0, i.kf)(n)
              ? (0, o.jsx)(Qe, {
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
      function et({ pos: e, x1: t, y1: n, x2: o, y2: r }) {
        return e === i.yX.Left || e === i.yX.Right
          ? [0.5 * (t + o), n]
          : [t, 0.5 * (n + r)];
      }
      function tt({
        sourceX: e,
        sourceY: t,
        sourcePosition: n = i.yX.Bottom,
        targetX: o,
        targetY: r,
        targetPosition: s = i.yX.Top,
      }) {
        const [a, l] = et({ pos: n, x1: e, y1: t, x2: o, y2: r }),
          [c, u] = et({ pos: s, x1: o, y1: r, x2: e, y2: t }),
          [d, f, h, p] = (0, i.e_)({
            sourceX: e,
            sourceY: t,
            targetX: o,
            targetY: r,
            sourceControlX: a,
            sourceControlY: l,
            targetControlX: c,
            targetControlY: u,
          });
        return [`M${e},${t} C${a},${l} ${c},${u} ${o},${r}`, d, f, h, p];
      }
      function nt(e) {
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
            labelShowBg: f,
            labelBgStyle: h,
            labelBgPadding: p,
            labelBgBorderRadius: g,
            style: y,
            markerEnd: m,
            markerStart: v,
            interactionWidth: x,
          }) => {
            const [w, b, E] = tt({
                sourceX: n,
                sourceY: r,
                sourcePosition: l,
                targetX: s,
                targetY: a,
                targetPosition: c,
              }),
              S = e.isInternal ? void 0 : t;
            return (0, o.jsx)(Je, {
              id: S,
              path: w,
              labelX: b,
              labelY: E,
              label: u,
              labelStyle: d,
              labelShowBg: f,
              labelBgStyle: h,
              labelBgPadding: p,
              labelBgBorderRadius: g,
              style: y,
              markerEnd: m,
              markerStart: v,
              interactionWidth: x,
            });
          },
        );
      }
      const ot = nt({ isInternal: !1 }),
        rt = nt({ isInternal: !0 });
      function it(e) {
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
            labelBgPadding: f,
            labelBgBorderRadius: h,
            style: p,
            sourcePosition: g = i.yX.Bottom,
            targetPosition: y = i.yX.Top,
            markerEnd: m,
            markerStart: v,
            pathOptions: x,
            interactionWidth: w,
          }) => {
            const [b, E, S] = (0, i.oN)({
                sourceX: n,
                sourceY: r,
                sourcePosition: g,
                targetX: s,
                targetY: a,
                targetPosition: y,
                borderRadius: x?.borderRadius,
                offset: x?.offset,
              }),
              _ = e.isInternal ? void 0 : t;
            return (0, o.jsx)(Je, {
              id: _,
              path: b,
              labelX: E,
              labelY: S,
              label: l,
              labelStyle: c,
              labelShowBg: u,
              labelBgStyle: d,
              labelBgPadding: f,
              labelBgBorderRadius: h,
              style: p,
              markerEnd: m,
              markerStart: v,
              interactionWidth: w,
            });
          },
        );
      }
      (ot.displayName = "SimpleBezierEdge"),
        (rt.displayName = "SimpleBezierEdgeInternal");
      const st = it({ isInternal: !1 }),
        at = it({ isInternal: !0 });
      function lt(e) {
        return (0, s.memo)(({ id: t, ...n }) => {
          const r = e.isInternal ? void 0 : t;
          return (0, o.jsx)(st, {
            ...n,
            id: r,
            pathOptions: (0, s.useMemo)(
              () => ({ borderRadius: 0, offset: n.pathOptions?.offset }),
              [n.pathOptions?.offset],
            ),
          });
        });
      }
      (st.displayName = "SmoothStepEdge"),
        (at.displayName = "SmoothStepEdgeInternal");
      const ct = lt({ isInternal: !1 }),
        ut = lt({ isInternal: !0 });
      function dt(e) {
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
            labelBgPadding: f,
            labelBgBorderRadius: h,
            style: p,
            markerEnd: g,
            markerStart: y,
            interactionWidth: m,
          }) => {
            const [v, x, w] = (0, i.ah)({
                sourceX: n,
                sourceY: r,
                targetX: s,
                targetY: a,
              }),
              b = e.isInternal ? void 0 : t;
            return (0, o.jsx)(Je, {
              id: b,
              path: v,
              labelX: x,
              labelY: w,
              label: l,
              labelStyle: c,
              labelShowBg: u,
              labelBgStyle: d,
              labelBgPadding: f,
              labelBgBorderRadius: h,
              style: p,
              markerEnd: g,
              markerStart: y,
              interactionWidth: m,
            });
          },
        );
      }
      (ct.displayName = "StepEdge"), (ut.displayName = "StepEdgeInternal");
      const ft = dt({ isInternal: !1 }),
        ht = dt({ isInternal: !0 });
      function pt(e) {
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
            labelShowBg: f,
            labelBgStyle: h,
            labelBgPadding: p,
            labelBgBorderRadius: g,
            style: y,
            markerEnd: m,
            markerStart: v,
            pathOptions: x,
            interactionWidth: w,
          }) => {
            const [b, E, S] = (0, i.Fp)({
                sourceX: n,
                sourceY: r,
                sourcePosition: l,
                targetX: s,
                targetY: a,
                targetPosition: c,
                curvature: x?.curvature,
              }),
              _ = e.isInternal ? void 0 : t;
            return (0, o.jsx)(Je, {
              id: _,
              path: b,
              labelX: E,
              labelY: S,
              label: u,
              labelStyle: d,
              labelShowBg: f,
              labelBgStyle: h,
              labelBgPadding: p,
              labelBgBorderRadius: g,
              style: y,
              markerEnd: m,
              markerStart: v,
              interactionWidth: w,
            });
          },
        );
      }
      (ft.displayName = "StraightEdge"),
        (ht.displayName = "StraightEdgeInternal");
      const gt = pt({ isInternal: !1 }),
        yt = pt({ isInternal: !0 });
      (gt.displayName = "BezierEdge"), (yt.displayName = "BezierEdgeInternal");
      const mt = {
          default: yt,
          straight: ht,
          step: ut,
          smoothstep: at,
          simplebezier: rt,
        },
        vt = {
          sourceX: null,
          sourceY: null,
          targetX: null,
          targetY: null,
          sourcePosition: null,
          targetPosition: null,
        },
        xt = (e, t, n) =>
          n === i.yX.Left ? e - t : n === i.yX.Right ? e + t : e,
        wt = (e, t, n) =>
          n === i.yX.Top ? e - t : n === i.yX.Bottom ? e + t : e,
        bt = "react-flow__edgeupdater";
      function Et({
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
          className: r([bt, `${bt}-${c}`]),
          cx: xt(t, i, e),
          cy: wt(n, i, e),
          r: i,
          stroke: "transparent",
          fill: "transparent",
        });
      }
      function St({
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
        onReconnectStart: f,
        onReconnectEnd: h,
        setReconnecting: p,
        setUpdateHover: g,
      }) {
        const y = w(),
          m = (e, t) => {
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
                cancelConnection: m,
                nodeLookup: v,
                rfId: x,
                panBy: w,
                updateConnection: b,
              } = y.getState(),
              E = "target" === t.type;
            p(!0), f?.(e, n, t.type);
            i.aQ.onPointerDown(e.nativeEvent, {
              autoPanOnConnect: o,
              connectionMode: a,
              connectionRadius: l,
              domNode: r,
              handleId: t.id,
              nodeId: t.nodeId,
              nodeLookup: v,
              isTarget: E,
              edgeUpdaterType: t.type,
              lib: c,
              flowId: x,
              cancelConnection: m,
              panBy: w,
              isValidConnection: s,
              onConnect: (e) => d?.(n, e),
              onConnectStart: u,
              onConnectEnd: g,
              onReconnectEnd: (e, o) => {
                p(!1), h?.(e, n, t.type, o);
              },
              updateConnection: b,
              getTransform: () => y.getState().transform,
              getFromHandle: () => y.getState().connection.fromHandle,
            });
          },
          v = () => g(!0),
          x = () => g(!1);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (!0 === e || "source" === e) &&
              (0, o.jsx)(Et, {
                position: c,
                centerX: r,
                centerY: s,
                radius: t,
                onMouseDown: (e) =>
                  m(e, {
                    nodeId: n.target,
                    id: n.targetHandle ?? null,
                    type: "target",
                  }),
                onMouseEnter: v,
                onMouseOut: x,
                type: "source",
              }),
            (!0 === e || "target" === e) &&
              (0, o.jsx)(Et, {
                position: u,
                centerX: a,
                centerY: l,
                radius: t,
                onMouseDown: (e) =>
                  m(e, {
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
      function _t({
        id: e,
        edgesFocusable: t,
        edgesReconnectable: n,
        elementsSelectable: a,
        onClick: l,
        onDoubleClick: c,
        onContextMenu: u,
        onMouseEnter: d,
        onMouseMove: f,
        onMouseLeave: h,
        reconnectRadius: p,
        onReconnect: y,
        onReconnectStart: m,
        onReconnectEnd: v,
        rfId: b,
        edgeTypes: E,
        noPanClassName: S,
        onError: C,
        disableKeyboardA11y: k,
      }) {
        let M = x((t) => t.edgeLookup.get(e));
        const N = x((e) => e.defaultEdgeOptions);
        M = N ? { ...N, ...M } : M;
        let P = M.type || "default",
          A = E?.[P] || mt[P];
        void 0 === A &&
          (C?.("011", i.xc.error011(P)), (P = "default"), (A = mt.default));
        const O = !!(M.focusable || (t && void 0 === M.focusable)),
          I =
            void 0 !== y &&
            (M.reconnectable || (n && void 0 === M.reconnectable)),
          B = !!(M.selectable || (a && void 0 === M.selectable)),
          D = (0, s.useRef)(null),
          [j, z] = (0, s.useState)(!1),
          [R, L] = (0, s.useState)(!1),
          $ = w(),
          {
            zIndex: T,
            sourceX: V,
            sourceY: H,
            targetX: X,
            targetY: q,
            sourcePosition: Z,
            targetPosition: Y,
          } = x(
            (0, s.useCallback)(
              (t) => {
                const n = t.nodeLookup.get(M.source),
                  o = t.nodeLookup.get(M.target);
                if (!n || !o) return { zIndex: M.zIndex, ...vt };
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
                  ...(r || vt),
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
              M.markerStart ? `url('#${(0, i.aW)(M.markerStart, b)}')` : void 0,
            [M.markerStart, b],
          ),
          U = (0, s.useMemo)(
            () =>
              M.markerEnd ? `url('#${(0, i.aW)(M.markerEnd, b)}')` : void 0,
            [M.markerEnd, b],
          );
        if (M.hidden || null === V || null === H || null === X || null === q)
          return null;
        const W = c
            ? (e) => {
                c(e, { ...M });
              }
            : void 0,
          K = u
            ? (e) => {
                u(e, { ...M });
              }
            : void 0,
          G = d
            ? (e) => {
                d(e, { ...M });
              }
            : void 0,
          Q = f
            ? (e) => {
                f(e, { ...M });
              }
            : void 0,
          J = h
            ? (e) => {
                h(e, { ...M });
              }
            : void 0;
        return (0, o.jsx)("svg", {
          style: { zIndex: T },
          children: (0, o.jsxs)("g", {
            className: r([
              "react-flow__edge",
              `react-flow__edge-${P}`,
              M.className,
              S,
              {
                selected: M.selected,
                animated: M.animated,
                inactive: !B && !l,
                updating: j,
                selectable: B,
              },
            ]),
            onClick: (t) => {
              const {
                addSelectedEdges: n,
                unselectNodesAndEdges: o,
                multiSelectionActive: r,
              } = $.getState();
              B &&
                ($.setState({ nodesSelectionActive: !1 }),
                M.selected && r
                  ? (o({ nodes: [], edges: [M] }), D.current?.blur())
                  : n([e])),
                l && l(t, M);
            },
            onDoubleClick: W,
            onContextMenu: K,
            onMouseEnter: G,
            onMouseMove: Q,
            onMouseLeave: J,
            onKeyDown: O
              ? (t) => {
                  if (!k && i.tn.includes(t.key) && B) {
                    const { unselectNodesAndEdges: n, addSelectedEdges: o } =
                      $.getState();
                    "Escape" === t.key
                      ? (D.current?.blur(), n({ edges: [M] }))
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
            "aria-describedby": O ? `${_}-${b}` : void 0,
            ref: D,
            children: [
              !R &&
                (0, o.jsx)(A, {
                  id: e,
                  source: M.source,
                  target: M.target,
                  type: M.type,
                  selected: M.selected,
                  animated: M.animated,
                  selectable: B,
                  deletable: M.deletable ?? !0,
                  label: M.label,
                  labelStyle: M.labelStyle,
                  labelShowBg: M.labelShowBg,
                  labelBgStyle: M.labelBgStyle,
                  labelBgPadding: M.labelBgPadding,
                  labelBgBorderRadius: M.labelBgBorderRadius,
                  sourceX: V,
                  sourceY: H,
                  targetX: X,
                  targetY: q,
                  sourcePosition: Z,
                  targetPosition: Y,
                  data: M.data,
                  style: M.style,
                  sourceHandleId: M.sourceHandle,
                  targetHandleId: M.targetHandle,
                  markerStart: F,
                  markerEnd: U,
                  pathOptions: "pathOptions" in M ? M.pathOptions : void 0,
                  interactionWidth: M.interactionWidth,
                }),
              I &&
                (0, o.jsx)(St, {
                  edge: M,
                  isReconnectable: I,
                  reconnectRadius: p,
                  onReconnect: y,
                  onReconnectStart: m,
                  onReconnectEnd: v,
                  sourceX: V,
                  sourceY: H,
                  targetX: X,
                  targetY: q,
                  sourcePosition: Z,
                  targetPosition: Y,
                  setUpdateHover: z,
                  setReconnecting: L,
                }),
            ],
          }),
        });
      }
      const Ct = (e) => ({
        edgesFocusable: e.edgesFocusable,
        edgesReconnectable: e.edgesReconnectable,
        elementsSelectable: e.elementsSelectable,
        connectionMode: e.connectionMode,
        onError: e.onError,
      });
      function kt({
        defaultMarkerColor: e,
        onlyRenderVisibleElements: t,
        rfId: n,
        edgeTypes: r,
        noPanClassName: a,
        onReconnect: l,
        onEdgeContextMenu: c,
        onEdgeMouseEnter: u,
        onEdgeMouseMove: d,
        onEdgeMouseLeave: f,
        onEdgeClick: h,
        reconnectRadius: p,
        onEdgeDoubleClick: y,
        onReconnectStart: m,
        onReconnectEnd: v,
        disableKeyboardA11y: w,
      }) {
        const {
            edgesFocusable: b,
            edgesReconnectable: E,
            elementsSelectable: S,
            onError: _,
          } = x(Ct, g),
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
            (0, o.jsx)(Ke, { defaultColor: e, rfId: n }),
            C.map((e) =>
              (0, o.jsx)(
                _t,
                {
                  id: e,
                  edgesFocusable: b,
                  edgesReconnectable: E,
                  elementsSelectable: S,
                  noPanClassName: a,
                  onReconnect: l,
                  onContextMenu: c,
                  onMouseEnter: u,
                  onMouseMove: d,
                  onMouseLeave: f,
                  onClick: h,
                  reconnectRadius: p,
                  onDoubleClick: y,
                  onReconnectStart: m,
                  onReconnectEnd: v,
                  rfId: n,
                  onError: _,
                  edgeTypes: r,
                  disableKeyboardA11y: w,
                },
                e,
              ),
            ),
          ],
        });
      }
      kt.displayName = "EdgeRenderer";
      const Mt = (0, s.memo)(kt),
        Nt = (e) =>
          `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
      function Pt({ children: e }) {
        const t = x(Nt);
        return (0, o.jsx)("div", {
          className:
            "react-flow__viewport xyflow__viewport react-flow__container",
          style: { transform: t },
          children: e,
        });
      }
      const At = (e) => e.panZoom?.syncViewport;
      function Ot(e) {
        return e.connection.inProgress
          ? { ...e.connection, to: (0, i.Ff)(e.connection.to, e.transform) }
          : { ...e.connection };
      }
      function It(e) {
        const t = (function (e) {
          if (e)
            return (t) => {
              const n = Ot(t);
              return e(n);
            };
          return Ot;
        })(e);
        return x(t, g);
      }
      const Bt = (e) => ({
        nodesConnectable: e.nodesConnectable,
        isValid: e.connection.isValid,
        inProgress: e.connection.inProgress,
        width: e.width,
        height: e.height,
      });
      function Dt({ containerStyle: e, style: t, type: n, component: s }) {
        const {
          nodesConnectable: a,
          width: l,
          height: c,
          isValid: u,
          inProgress: d,
        } = x(Bt, g);
        return !!(l && a && d)
          ? (0, o.jsx)("svg", {
              style: e,
              width: l,
              height: c,
              className: "react-flow__connectionline react-flow__container",
              children: (0, o.jsx)("g", {
                className: r(["react-flow__connection", (0, i.HF)(u)]),
                children: (0, o.jsx)(jt, {
                  style: t,
                  type: n,
                  CustomComponent: s,
                  isValid: u,
                }),
              }),
            })
          : null;
      }
      const jt = ({
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
          toNode: f,
          toHandle: h,
          toPosition: p,
        } = It();
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
            toNode: f,
            toHandle: h,
          });
        let g = "";
        const y = {
          sourceX: a.x,
          sourceY: a.y,
          sourcePosition: u,
          targetX: d.x,
          targetY: d.y,
          targetPosition: p,
        };
        switch (t) {
          case i.Do.Bezier:
            [g] = (0, i.Fp)(y);
            break;
          case i.Do.SimpleBezier:
            [g] = tt(y);
            break;
          case i.Do.Step:
            [g] = (0, i.oN)({ ...y, borderRadius: 0 });
            break;
          case i.Do.SmoothStep:
            [g] = (0, i.oN)(y);
            break;
          default:
            [g] = (0, i.ah)(y);
        }
        return (0, o.jsx)("path", {
          d: g,
          fill: "none",
          className: "react-flow__connection-path",
          style: e,
        });
      };
      jt.displayName = "ConnectionLine";
      const zt = {};
      function Rt(e = zt) {
        (0, s.useRef)(e), w();
        (0, s.useEffect)(() => {
          0;
        }, [e]);
      }
      function Lt({
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
        onNodeContextMenu: f,
        onSelectionContextMenu: h,
        onSelectionStart: p,
        onSelectionEnd: g,
        connectionLineType: y,
        connectionLineStyle: m,
        connectionLineComponent: v,
        connectionLineContainerStyle: b,
        selectionKeyCode: E,
        selectionOnDrag: S,
        selectionMode: _,
        multiSelectionKeyCode: C,
        panActivationKeyCode: k,
        zoomActivationKeyCode: M,
        deleteKeyCode: N,
        onlyRenderVisibleElements: P,
        elementsSelectable: A,
        defaultViewport: O,
        translateExtent: I,
        minZoom: B,
        maxZoom: D,
        preventScrolling: j,
        defaultMarkerColor: z,
        zoomOnScroll: R,
        zoomOnPinch: L,
        panOnScroll: $,
        panOnScrollSpeed: T,
        panOnScrollMode: V,
        zoomOnDoubleClick: H,
        panOnDrag: X,
        onPaneClick: q,
        onPaneMouseEnter: Z,
        onPaneMouseMove: Y,
        onPaneMouseLeave: F,
        onPaneScroll: U,
        onPaneContextMenu: W,
        paneClickDistance: K,
        nodeClickDistance: G,
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
        disableKeyboardA11y: ce,
        nodeExtent: ue,
        rfId: de,
        viewport: he,
        onViewportChange: pe,
      }) {
        return (
          Rt(e),
          Rt(t),
          w(),
          (0, s.useRef)(!1),
          (0, s.useEffect)(() => {}, []),
          (function (e) {
            const t = fe(),
              n = (0, s.useRef)(!1);
            (0, s.useEffect)(() => {
              !n.current &&
                t.viewportInitialized &&
                e &&
                (setTimeout(() => e(t), 1), (n.current = !0));
            }, [e, t.viewportInitialized]);
          })(n),
          (function (e) {
            const t = x(At),
              n = w();
            (0, s.useEffect)(() => {
              e && (t?.(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
            }, [e, t]);
          })(he),
          (0, o.jsx)(Te, {
            onPaneClick: q,
            onPaneMouseEnter: Z,
            onPaneMouseMove: Y,
            onPaneMouseLeave: F,
            onPaneContextMenu: W,
            onPaneScroll: U,
            paneClickDistance: K,
            deleteKeyCode: N,
            selectionKeyCode: E,
            selectionOnDrag: S,
            selectionMode: _,
            onSelectionStart: p,
            onSelectionEnd: g,
            multiSelectionKeyCode: C,
            panActivationKeyCode: k,
            zoomActivationKeyCode: M,
            elementsSelectable: A,
            zoomOnScroll: R,
            zoomOnPinch: L,
            zoomOnDoubleClick: H,
            panOnScroll: $,
            panOnScrollSpeed: T,
            panOnScrollMode: V,
            panOnDrag: X,
            defaultViewport: O,
            translateExtent: I,
            minZoom: B,
            maxZoom: D,
            onSelectionContextMenu: h,
            preventScrolling: j,
            noDragClassName: se,
            noWheelClassName: ae,
            noPanClassName: le,
            disableKeyboardA11y: ce,
            onViewportChange: pe,
            isControlledViewport: !!he,
            children: (0, o.jsxs)(Pt, {
              children: [
                (0, o.jsx)(Mt, {
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
                  defaultMarkerColor: z,
                  noPanClassName: le,
                  disableKeyboardA11y: ce,
                  rfId: de,
                }),
                (0, o.jsx)(Dt, {
                  style: m,
                  type: y,
                  component: v,
                  containerStyle: b,
                }),
                (0, o.jsx)("div", {
                  className: "react-flow__edgelabel-renderer",
                }),
                (0, o.jsx)(Ye, {
                  nodeTypes: e,
                  onNodeClick: r,
                  onNodeDoubleClick: a,
                  onNodeMouseEnter: c,
                  onNodeMouseMove: u,
                  onNodeMouseLeave: d,
                  onNodeContextMenu: f,
                  nodeClickDistance: G,
                  onlyRenderVisibleElements: P,
                  noPanClassName: le,
                  noDragClassName: se,
                  disableKeyboardA11y: ce,
                  nodeExtent: ue,
                  rfId: de,
                }),
                (0, o.jsx)("div", { className: "react-flow__viewport-portal" }),
              ],
            }),
          })
        );
      }
      Lt.displayName = "GraphView";
      const $t = (0, s.memo)(Lt),
        Tt = ({
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
            f = new Map(),
            h = new Map(),
            p = o ?? t ?? [],
            g = n ?? e ?? [],
            y = l ?? [0, 0],
            m = c ?? i.ZO;
          (0, i.qn)(f, h, p),
            (0, i.bi)(g, u, d, {
              nodeOrigin: y,
              nodeExtent: m,
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
            edgeLookup: h,
            connectionLookup: f,
            onNodesChange: null,
            onEdgesChange: null,
            hasDefaultNodes: void 0 !== n,
            hasDefaultEdges: void 0 !== o,
            panZoom: null,
            minZoom: 0.5,
            maxZoom: 2,
            translateExtent: i.ZO,
            nodeExtent: m,
            nodesSelectionActive: !1,
            userSelectionActive: !1,
            userSelectionRect: null,
            connectionMode: i.WZ.Strict,
            domNode: null,
            paneDragging: !1,
            noPanClassName: "nopan",
            nodeOrigin: y,
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
        Vt = ({
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
              ...Tt({
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
                    nodeOrigin: f,
                    nodeExtent: h,
                    debug: p,
                    fitViewSync: g,
                  } = d(),
                  { changes: y, updatedInternals: m } = (0, i.uL)(
                    e,
                    o,
                    r,
                    c,
                    f,
                    h,
                  );
                if (m) {
                  if (
                    ((0, i.vS)(o, r, { nodeOrigin: f, nodeExtent: h }),
                    t.triggerFitView)
                  ) {
                    let e = a;
                    !a && s && (e = g({ ...l, nodes: l?.nodes })),
                      u({ fitViewDone: e });
                  } else u({});
                  y?.length > 0 &&
                    (p && console.log("React Flow: trigger node changes", y),
                    n?.(y));
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
                  (r && n(Q(e, o)),
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
                  (r && n(J(e, o)),
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
                  ? r(e.map((e) => ee(e, !0)))
                  : (r(te(o, new Set([...e]), !0)), i(te(n)));
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
                  ? i(e.map((e) => ee(e, !0)))
                  : (i(te(n, new Set([...e]))), r(te(o, new Set(), !0)));
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
                    return t && (t.selected = !1), ee(e.id, !1);
                  }),
                  c = a.map((e) => ee(e.id, !1));
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
                    (e, t) => (t.selected ? [...e, ee(t.id, !1)] : e),
                    [],
                  ),
                  i = e.reduce(
                    (e, t) => (t.selected ? [...e, ee(t.id, !1)] : e),
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
              reset: () => u({ ...Tt() }),
            })),
            (d = Object.is),
            u ? p(u, d) : p
          );
          var u, d;
        };
      function Ht({
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
        const [f] = (0, s.useState)(() =>
          Vt({
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
        return (0, o.jsx)(m, {
          value: f,
          children: (0, o.jsx)(ue, { children: d }),
        });
      }
      function Xt({
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
        return (0, s.useContext)(y)
          ? (0, o.jsx)(o.Fragment, { children: e })
          : (0, o.jsx)(Ht, {
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
      const qt = {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        zIndex: 0,
      };
      var Zt = se(function (
        {
          nodes: e,
          edges: t,
          defaultNodes: n,
          defaultEdges: a,
          className: l,
          nodeTypes: c,
          edgeTypes: u,
          onNodeClick: d,
          onEdgeClick: f,
          onInit: h,
          onMove: p,
          onMoveStart: g,
          onMoveEnd: y,
          onConnect: m,
          onConnectStart: v,
          onConnectEnd: x,
          onClickConnectStart: w,
          onClickConnectEnd: b,
          onNodeMouseEnter: E,
          onNodeMouseMove: S,
          onNodeMouseLeave: _,
          onNodeContextMenu: C,
          onNodeDoubleClick: k,
          onNodeDragStart: M,
          onNodeDrag: P,
          onNodeDragStop: A,
          onNodesDelete: I,
          onEdgesDelete: B,
          onDelete: D,
          onSelectionChange: j,
          onSelectionDragStart: z,
          onSelectionDrag: T,
          onSelectionDragStop: V,
          onSelectionContextMenu: H,
          onSelectionStart: Z,
          onSelectionEnd: Y,
          onBeforeDelete: F,
          connectionMode: U,
          connectionLineType: W = i.Do.Bezier,
          connectionLineStyle: K,
          connectionLineComponent: G,
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
          nodesFocusable: fe,
          nodeOrigin: he = L,
          edgesFocusable: pe,
          edgesReconnectable: ge,
          elementsSelectable: ye = !0,
          defaultViewport: me = $,
          minZoom: ve = 0.5,
          maxZoom: xe = 2,
          translateExtent: we = i.ZO,
          preventScrolling: be = !0,
          nodeExtent: Ee,
          defaultMarkerColor: Se = "#b1b1b7",
          zoomOnScroll: _e = !0,
          zoomOnPinch: Ce = !0,
          panOnScroll: ke = !1,
          panOnScrollSpeed: Me = 0.5,
          panOnScrollMode: Ne = i.ny.Free,
          zoomOnDoubleClick: Pe = !0,
          panOnDrag: Ae = !0,
          onPaneClick: Oe,
          onPaneMouseEnter: Ie,
          onPaneMouseMove: Be,
          onPaneMouseLeave: De,
          onPaneScroll: je,
          onPaneContextMenu: ze,
          paneClickDistance: Re = 0,
          nodeClickDistance: Le = 0,
          children: $e,
          onReconnect: Te,
          onReconnectStart: Ve,
          onReconnectEnd: He,
          onEdgeContextMenu: Xe,
          onEdgeDoubleClick: qe,
          onEdgeMouseEnter: Ze,
          onEdgeMouseMove: Ye,
          onEdgeMouseLeave: Fe,
          reconnectRadius: Ue = 10,
          onNodesChange: We,
          onEdgesChange: Ke,
          noDragClassName: Ge = "nodrag",
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
          connectionRadius: ft,
          isValidConnection: ht,
          onError: pt,
          style: gt,
          id: yt,
          nodeDragThreshold: mt,
          viewport: vt,
          onViewportChange: xt,
          width: wt,
          height: bt,
          colorMode: Et = "light",
          debug: St,
          ..._t
        },
        Ct,
      ) {
        const kt = yt || "1",
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
          })(Et);
        return (0, o.jsx)("div", {
          "data-testid": "rf__wrapper",
          ..._t,
          style: { ...gt, ...qt },
          ref: Ct,
          className: r(["react-flow", l, Mt]),
          id: yt,
          children: (0, o.jsxs)(Xt, {
            nodes: e,
            edges: t,
            width: wt,
            height: bt,
            fitView: et,
            nodeOrigin: he,
            nodeExtent: Ee,
            children: [
              (0, o.jsx)($t, {
                onInit: h,
                onNodeClick: d,
                onEdgeClick: f,
                onNodeMouseEnter: E,
                onNodeMouseMove: S,
                onNodeMouseLeave: _,
                onNodeContextMenu: C,
                onNodeDoubleClick: k,
                nodeTypes: c,
                edgeTypes: u,
                connectionLineType: W,
                connectionLineStyle: K,
                connectionLineComponent: G,
                connectionLineContainerStyle: Q,
                selectionKeyCode: ee,
                selectionOnDrag: te,
                selectionMode: ne,
                deleteKeyCode: J,
                multiSelectionKeyCode: re,
                panActivationKeyCode: oe,
                zoomActivationKeyCode: ie,
                onlyRenderVisibleElements: le,
                defaultViewport: me,
                translateExtent: we,
                minZoom: ve,
                maxZoom: xe,
                preventScrolling: be,
                zoomOnScroll: _e,
                zoomOnPinch: Ce,
                zoomOnDoubleClick: Pe,
                panOnScroll: ke,
                panOnScrollSpeed: Me,
                panOnScrollMode: Ne,
                panOnDrag: Ae,
                onPaneClick: Oe,
                onPaneMouseEnter: Ie,
                onPaneMouseMove: Be,
                onPaneMouseLeave: De,
                onPaneScroll: je,
                onPaneContextMenu: ze,
                paneClickDistance: Re,
                nodeClickDistance: Le,
                onSelectionContextMenu: H,
                onSelectionStart: Z,
                onSelectionEnd: Y,
                onReconnect: Te,
                onReconnectStart: Ve,
                onReconnectEnd: He,
                onEdgeContextMenu: Xe,
                onEdgeDoubleClick: qe,
                onEdgeMouseEnter: Ze,
                onEdgeMouseMove: Ye,
                onEdgeMouseLeave: Fe,
                reconnectRadius: Ue,
                defaultMarkerColor: Se,
                noDragClassName: Ge,
                noWheelClassName: Qe,
                noPanClassName: Je,
                rfId: kt,
                disableKeyboardA11y: lt,
                nodeExtent: Ee,
                viewport: vt,
                onViewportChange: xt,
              }),
              (0, o.jsx)(X, {
                nodes: e,
                edges: t,
                defaultNodes: n,
                defaultEdges: a,
                onConnect: m,
                onConnectStart: v,
                onConnectEnd: x,
                onClickConnectStart: w,
                onClickConnectEnd: b,
                nodesDraggable: ue,
                nodesConnectable: de,
                nodesFocusable: fe,
                edgesFocusable: pe,
                edgesReconnectable: ge,
                elementsSelectable: ye,
                elevateNodesOnSelect: st,
                elevateEdgesOnSelect: at,
                minZoom: ve,
                maxZoom: xe,
                nodeExtent: Ee,
                onNodesChange: We,
                onEdgesChange: Ke,
                snapToGrid: se,
                snapGrid: ae,
                connectionMode: U,
                translateExtent: we,
                connectOnClick: nt,
                defaultEdgeOptions: it,
                fitView: et,
                fitViewOptions: tt,
                onNodesDelete: I,
                onEdgesDelete: B,
                onDelete: D,
                onNodeDragStart: M,
                onNodeDrag: P,
                onNodeDragStop: A,
                onSelectionDrag: T,
                onSelectionDragStart: z,
                onSelectionDragStop: V,
                onMove: p,
                onMoveStart: g,
                onMoveEnd: y,
                noPanClassName: Je,
                nodeOrigin: he,
                rfId: kt,
                autoPanOnConnect: ct,
                autoPanOnNodeDrag: ut,
                autoPanSpeed: dt,
                onError: pt,
                connectionRadius: ft,
                isValidConnection: ht,
                selectNodesOnDrag: ce,
                nodeDragThreshold: mt,
                onBeforeDelete: F,
                paneClickDistance: Re,
                debug: St,
              }),
              (0, o.jsx)(R, { onSelectionChange: j }),
              $e,
              (0, o.jsx)(O, { proOptions: rt, position: ot }),
              (0, o.jsx)(N, { rfId: kt, disableKeyboardA11y: lt }),
            ],
          }),
        });
      });
      function Yt() {
        const e = w();
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
      function Ft(e) {
        const [t, n] = (0, s.useState)(e),
          o = (0, s.useCallback)((e) => n((t) => Q(e, t)), []);
        return [t, n, o];
      }
      function Ut(e) {
        const [t, n] = (0, s.useState)(e),
          o = (0, s.useCallback)((e) => n((t) => J(e, t)), []);
        return [t, n, o];
      }
      function Wt({ dimensions: e, lineWidth: t, variant: n, className: i }) {
        return (0, o.jsx)("path", {
          strokeWidth: t,
          d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`,
          className: r(["react-flow__background-pattern", n, i]),
        });
      }
      function Kt({ radius: e, className: t }) {
        return (0, o.jsx)("circle", {
          cx: e,
          cy: e,
          r: e,
          className: r(["react-flow__background-pattern", "dots", t]),
        });
      }
      var Gt;
      !(function (e) {
        (e.Lines = "lines"), (e.Dots = "dots"), (e.Cross = "cross");
      })(Gt || (Gt = {}));
      const Qt = { [Gt.Dots]: 1, [Gt.Lines]: 1, [Gt.Cross]: 6 },
        Jt = (e) => ({
          transform: e.transform,
          patternId: `pattern-${e.rfId}`,
        });
      function en({
        id: e,
        variant: t = Gt.Dots,
        gap: n = 20,
        size: i,
        lineWidth: a = 1,
        offset: l = 0,
        color: c,
        bgColor: u,
        style: d,
        className: f,
        patternClassName: h,
      }) {
        const p = (0, s.useRef)(null),
          { transform: y, patternId: m } = x(Jt, g),
          v = i || Qt[t],
          w = t === Gt.Dots,
          b = t === Gt.Cross,
          E = Array.isArray(n) ? n : [n, n],
          S = [E[0] * y[2] || 1, E[1] * y[2] || 1],
          _ = v * y[2],
          C = Array.isArray(l) ? l : [l, l],
          k = b ? [_, _] : S,
          M = [C[0] * y[2] || 1 + k[0] / 2, C[1] * y[2] || 1 + k[1] / 2],
          N = `${m}${e || ""}`;
        return (0, o.jsxs)("svg", {
          className: r(["react-flow__background", f]),
          style: {
            ...d,
            ...ye,
            "--xy-background-color-props": u,
            "--xy-background-pattern-color-props": c,
          },
          ref: p,
          "data-testid": "rf__background",
          children: [
            (0, o.jsx)("pattern", {
              id: N,
              x: y[0] % S[0],
              y: y[1] % S[1],
              width: S[0],
              height: S[1],
              patternUnits: "userSpaceOnUse",
              patternTransform: `translate(-${M[0]},-${M[1]})`,
              children: w
                ? (0, o.jsx)(Kt, { radius: _ / 2, className: h })
                : (0, o.jsx)(Wt, {
                    dimensions: k,
                    lineWidth: a,
                    variant: t,
                    className: h,
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
      en.displayName = "Background";
      (0, s.memo)(en);
      function tn() {
        return (0, o.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 32",
          children: (0, o.jsx)("path", {
            d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z",
          }),
        });
      }
      function nn() {
        return (0, o.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 5",
          children: (0, o.jsx)("path", { d: "M0 0h32v4.2H0z" }),
        });
      }
      function on() {
        return (0, o.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 30",
          children: (0, o.jsx)("path", {
            d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z",
          }),
        });
      }
      function rn() {
        return (0, o.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 25 32",
          children: (0, o.jsx)("path", {
            d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z",
          }),
        });
      }
      function sn() {
        return (0, o.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 25 32",
          children: (0, o.jsx)("path", {
            d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z",
          }),
        });
      }
      function an({ children: e, className: t, ...n }) {
        return (0, o.jsx)("button", {
          type: "button",
          className: r(["react-flow__controls-button", t]),
          ...n,
          children: e,
        });
      }
      const ln = (e) => ({
        isInteractive:
          e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
        minZoomReached: e.transform[2] <= e.minZoom,
        maxZoomReached: e.transform[2] >= e.maxZoom,
      });
      function cn({
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
        children: f,
        position: h = "bottom-left",
        orientation: p = "vertical",
        "aria-label": y = "React Flow controls",
      }) {
        const m = w(),
          { isInteractive: v, minZoomReached: b, maxZoomReached: E } = x(ln, g),
          { zoomIn: S, zoomOut: _, fitView: C } = fe(),
          k = "horizontal" === p ? "horizontal" : "vertical";
        return (0, o.jsxs)(A, {
          className: r(["react-flow__controls", k, d]),
          position: h,
          style: e,
          "data-testid": "rf__controls",
          "aria-label": y,
          children: [
            t &&
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(an, {
                    onClick: () => {
                      S(), a?.();
                    },
                    className: "react-flow__controls-zoomin",
                    title: "zoom in",
                    "aria-label": "zoom in",
                    disabled: E,
                    children: (0, o.jsx)(tn, {}),
                  }),
                  (0, o.jsx)(an, {
                    onClick: () => {
                      _(), l?.();
                    },
                    className: "react-flow__controls-zoomout",
                    title: "zoom out",
                    "aria-label": "zoom out",
                    disabled: b,
                    children: (0, o.jsx)(nn, {}),
                  }),
                ],
              }),
            n &&
              (0, o.jsx)(an, {
                className: "react-flow__controls-fitview",
                onClick: () => {
                  C(s), c?.();
                },
                title: "fit view",
                "aria-label": "fit view",
                children: (0, o.jsx)(on, {}),
              }),
            i &&
              (0, o.jsx)(an, {
                className: "react-flow__controls-interactive",
                onClick: () => {
                  m.setState({
                    nodesDraggable: !v,
                    nodesConnectable: !v,
                    elementsSelectable: !v,
                  }),
                    u?.(!v);
                },
                title: "toggle interactivity",
                "aria-label": "toggle interactivity",
                children: v ? (0, o.jsx)(sn, {}) : (0, o.jsx)(rn, {}),
              }),
            f,
          ],
        });
      }
      cn.displayName = "Controls";
      (0, s.memo)(cn);
      const un = (0, s.memo)(function ({
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
          borderRadius: f,
          shapeRendering: h,
          selected: p,
          onClick: g,
        }) {
          const { background: y, backgroundColor: m } = a || {},
            v = l || y || m;
          return (0, o.jsx)("rect", {
            className: r(["react-flow__minimap-node", { selected: p }, d]),
            x: t,
            y: n,
            rx: f,
            ry: f,
            width: i,
            height: s,
            style: { fill: v, stroke: c, strokeWidth: u },
            shapeRendering: h,
            onClick: g ? (t) => g(t, e) : void 0,
          });
        }),
        dn = (e) => e.nodes.map((e) => e.id),
        fn = (e) => (e instanceof Function ? e : () => e);
      const hn = (0, s.memo)(function ({
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
          x: f,
          y: h,
          width: p,
          height: y,
        } = x((t) => {
          const n = t.nodeLookup.get(e),
            { x: o, y: r } = n.internals.positionAbsolute,
            { width: s, height: a } = (0, i.uD)(n);
          return { node: n, x: o, y: r, width: s, height: a };
        }, g);
        return d && !d.hidden && (0, i.QE)(d)
          ? (0, o.jsx)(c, {
              x: f,
              y: h,
              width: p,
              height: y,
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
      var pn = (0, s.memo)(function ({
        nodeStrokeColor: e,
        nodeColor: t,
        nodeClassName: n = "",
        nodeBorderRadius: r = 5,
        nodeStrokeWidth: i,
        nodeComponent: s = un,
        onClick: a,
      }) {
        const l = x(dn, g),
          c = fn(t),
          u = fn(e),
          d = fn(n),
          f =
            "undefined" == typeof window || window.chrome
              ? "crispEdges"
              : "geometricPrecision";
        return (0, o.jsx)(o.Fragment, {
          children: l.map((e) =>
            (0, o.jsx)(
              hn,
              {
                id: e,
                nodeColorFunc: c,
                nodeStrokeColorFunc: u,
                nodeClassNameFunc: d,
                nodeBorderRadius: r,
                nodeStrokeWidth: i,
                NodeComponent: s,
                onClick: a,
                shapeRendering: f,
              },
              e,
            ),
          ),
        });
      });
      const gn = (e) => {
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
      function yn({
        style: e,
        className: t,
        nodeStrokeColor: n,
        nodeColor: a,
        nodeClassName: l = "",
        nodeBorderRadius: c = 5,
        nodeStrokeWidth: u,
        nodeComponent: d,
        bgColor: f,
        maskColor: h,
        maskStrokeColor: p,
        maskStrokeWidth: y,
        position: m = "bottom-right",
        onClick: v,
        onNodeClick: b,
        pannable: E = !1,
        zoomable: S = !1,
        ariaLabel: _ = "React Flow mini map",
        inversePan: C,
        zoomStep: k = 10,
        offsetScale: M = 5,
      }) {
        const N = w(),
          P = (0, s.useRef)(null),
          {
            boundingRect: O,
            viewBB: I,
            rfId: B,
            panZoom: D,
            translateExtent: j,
            flowWidth: z,
            flowHeight: R,
          } = x(gn, g),
          L = e?.width ?? 200,
          $ = e?.height ?? 150,
          T = O.width / L,
          V = O.height / $,
          H = Math.max(T, V),
          X = H * L,
          q = H * $,
          Z = M * H,
          Y = O.x - (X - O.width) / 2 - Z,
          F = O.y - (q - O.height) / 2 - Z,
          U = X + 2 * Z,
          W = q + 2 * Z,
          K = `react-flow__minimap-desc-${B}`,
          G = (0, s.useRef)(0),
          Q = (0, s.useRef)();
        (G.current = H),
          (0, s.useEffect)(() => {
            if (P.current && D)
              return (
                (Q.current = (0, i.di)({
                  domNode: P.current,
                  panZoom: D,
                  getTransform: () => N.getState().transform,
                  getViewScale: () => G.current,
                })),
                () => {
                  Q.current?.destroy();
                }
              );
          }, [D]),
          (0, s.useEffect)(() => {
            Q.current?.update({
              translateExtent: j,
              width: z,
              height: R,
              inversePan: C,
              pannable: E,
              zoomStep: k,
              zoomable: S,
            });
          }, [E, S, C, k, j, z, R]);
        const J = v
            ? (e) => {
                const [t, n] = Q.current?.pointer(e) || [0, 0];
                v(e, { x: t, y: n });
              }
            : void 0,
          ee = b
            ? (0, s.useCallback)((e, t) => {
                const n = N.getState().nodeLookup.get(t);
                b(e, n);
              }, [])
            : void 0;
        return (0, o.jsx)(A, {
          position: m,
          style: {
            ...e,
            "--xy-minimap-background-color-props":
              "string" == typeof f ? f : void 0,
            "--xy-minimap-mask-background-color-props":
              "string" == typeof h ? h : void 0,
            "--xy-minimap-mask-stroke-color-props":
              "string" == typeof p ? p : void 0,
            "--xy-minimap-mask-stroke-width-props":
              "number" == typeof y ? y * H : void 0,
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
            width: L,
            height: $,
            viewBox: `${Y} ${F} ${U} ${W}`,
            className: "react-flow__minimap-svg",
            role: "img",
            "aria-labelledby": K,
            ref: P,
            onClick: J,
            children: [
              _ && (0, o.jsx)("title", { id: K, children: _ }),
              (0, o.jsx)(pn, {
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
                d: `M${Y - Z},${F - Z}h${U + 2 * Z}v${W + 2 * Z}h${-U - 2 * Z}z\n        M${I.x},${I.y}h${I.width}v${I.height}h${-I.width}z`,
                fillRule: "evenodd",
                pointerEvents: "none",
              }),
            ],
          }),
        });
      }
      yn.displayName = "MiniMap";
      (0, s.memo)(yn);
      (0, s.memo)(function ({
        nodeId: e,
        position: t,
        variant: n = i.xN.Handle,
        className: a,
        style: l = {},
        children: c,
        color: u,
        minWidth: d = 10,
        minHeight: f = 10,
        maxWidth: h = Number.MAX_VALUE,
        maxHeight: p = Number.MAX_VALUE,
        keepAspectRatio: g = !1,
        shouldResize: y,
        onResizeStart: m,
        onResize: v,
        onResizeEnd: x,
      }) {
        const b = Ae(),
          E = "string" == typeof e ? e : b,
          S = w(),
          _ = (0, s.useRef)(null),
          C = n === i.xN.Line ? "right" : "bottom-right",
          k = t ?? C,
          M = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
          if (_.current && E)
            return (
              M.current ||
                (M.current = (0, i.ET)({
                  domNode: _.current,
                  nodeId: E,
                  getStoreItems: () => {
                    const {
                      nodeLookup: e,
                      transform: t,
                      snapGrid: n,
                      snapToGrid: o,
                      nodeOrigin: r,
                      domNode: i,
                    } = S.getState();
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
                      } = S.getState(),
                      a = [],
                      l = { x: e.x, y: e.y },
                      c = o.get(E);
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
                        f = (0, i.r8)([d], o, r, s);
                      a.push(...f),
                        (l.x = e.x ? Math.max(t[0] * n, e.x) : void 0),
                        (l.y = e.y ? Math.max(t[1] * u, e.y) : void 0);
                    }
                    if (void 0 !== l.x && void 0 !== l.y) {
                      const e = { id: E, type: "position", position: { ...l } };
                      a.push(e);
                    }
                    if (void 0 !== e.width && void 0 !== e.height) {
                      const t = {
                        id: E,
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
                    const e = { id: E, type: "dimensions", resizing: !1 };
                    S.getState().triggerNodeChanges([e]);
                  },
                })),
              M.current.update({
                controlPosition: k,
                boundaries: {
                  minWidth: d,
                  minHeight: f,
                  maxWidth: h,
                  maxHeight: p,
                },
                keepAspectRatio: g,
                onResizeStart: m,
                onResize: v,
                onResizeEnd: x,
                shouldResize: y,
              }),
              () => {
                M.current?.destroy();
              }
            );
        }, [k, d, f, h, p, g, m, v, x, y]);
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
        Do: () => bn,
        WZ: () => mn,
        TG: () => En,
        ny: () => vn,
        yX: () => Sn,
        xN: () => gr,
        Qc: () => xn,
        I$: () => Qo,
        aQ: () => ir,
        di: () => sr,
        kO: () => pr,
        ET: () => Sr,
        rN: () => Co,
        bi: () => Ho,
        aE: () => zn,
        Hm: () => Ro,
        KE: () => Qn,
        tn: () => yn,
        xc: () => pn,
        us: () => ao,
        Pr: () => jn,
        e_: () => mo,
        Fp: () => wo,
        Mi: () => Un,
        HF: () => Cn,
        Eo: () => co,
        b5: () => Io,
        Tq: () => Rn,
        qX: () => Eo,
        q1: () => go,
        YV: () => Dn,
        oj: () => uo,
        aZ: () => On,
        aW: () => zo,
        uD: () => io,
        Jo: () => An,
        U$: () => In,
        X6: () => Wn,
        oN: () => Ao,
        ah: () => ko,
        R4: () => no,
        r8: () => Zo,
        ZO: () => gn,
        bK: () => wn,
        b$: () => kn,
        uj: () => So,
        v5: () => ho,
        Ue: () => oo,
        Er: () => po,
        oB: () => Mn,
        kf: () => Gn,
        mW: () => Kn,
        QE: () => so,
        kM: () => Yn,
        No: () => Fo,
        Ff: () => eo,
        zj: () => to,
        s_: () => Jn,
        vS: () => Vo,
        qn: () => Uo,
        uL: () => Yo,
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
      function f(e) {
        return null == e
          ? d
          : function () {
              return this.querySelectorAll(e);
            };
      }
      function h(e) {
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
      var y = Array.prototype.find;
      function m() {
        return this.firstElementChild;
      }
      var v = Array.prototype.filter;
      function x() {
        return Array.from(this.children);
      }
      function w(e) {
        return new Array(e.length);
      }
      function b(e, t) {
        (this.ownerDocument = e.ownerDocument),
          (this.namespaceURI = e.namespaceURI),
          (this._next = null),
          (this._parent = e),
          (this.__data__ = t);
      }
      function E(e, t, n, o, r, i) {
        for (var s, a = 0, l = t.length, c = i.length; a < c; ++a)
          (s = t[a])
            ? ((s.__data__ = i[a]), (o[a] = s))
            : (n[a] = new b(e, i[a]));
        for (; a < l; ++a) (s = t[a]) && (r[a] = s);
      }
      function S(e, t, n, o, r, i, s) {
        var a,
          l,
          c,
          u = new Map(),
          d = t.length,
          f = i.length,
          h = new Array(d);
        for (a = 0; a < d; ++a)
          (l = t[a]) &&
            ((h[a] = c = s.call(l, l.__data__, a, t) + ""),
            u.has(c) ? (r[a] = l) : u.set(c, l));
        for (a = 0; a < f; ++a)
          (c = s.call(e, i[a], a, i) + ""),
            (l = u.get(c))
              ? ((o[a] = l), (l.__data__ = i[a]), u.delete(c))
              : (n[a] = new b(e, i[a]));
        for (a = 0; a < d; ++a) (l = t[a]) && u.get(h[a]) === l && (r[a] = l);
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
      b.prototype = {
        constructor: b,
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
      function I(e, t) {
        return function () {
          this.setAttribute(e, t);
        };
      }
      function B(e, t) {
        return function () {
          this.setAttributeNS(e.space, e.local, t);
        };
      }
      function D(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n ? this.removeAttribute(e) : this.setAttribute(e, n);
        };
      }
      function j(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n
            ? this.removeAttributeNS(e.space, e.local)
            : this.setAttributeNS(e.space, e.local, n);
        };
      }
      function z(e) {
        return (
          (e.ownerDocument && e.ownerDocument.defaultView) ||
          (e.document && e) ||
          e.defaultView
        );
      }
      function R(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      function L(e, t, n) {
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
          z(e).getComputedStyle(e, null).getPropertyValue(t)
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
      function X(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n ? delete this[e] : (this[e] = n);
        };
      }
      function q(e) {
        return e.trim().split(/^|\s+/);
      }
      function Z(e) {
        return e.classList || new Y(e);
      }
      function Y(e) {
        (this._node = e), (this._names = q(e.getAttribute("class") || ""));
      }
      function F(e, t) {
        for (var n = Z(e), o = -1, r = t.length; ++o < r; ) n.add(t[o]);
      }
      function U(e, t) {
        for (var n = Z(e), o = -1, r = t.length; ++o < r; ) n.remove(t[o]);
      }
      function W(e) {
        return function () {
          F(this, e);
        };
      }
      function K(e) {
        return function () {
          U(this, e);
        };
      }
      function G(e, t) {
        return function () {
          (t.apply(this, arguments) ? F : U)(this, e);
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
      function fe() {
        var e = this.cloneNode(!0),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function he(e) {
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
        var o = z(e),
          r = o.CustomEvent;
        "function" == typeof r
          ? (r = new r(t, n))
          : ((r = o.document.createEvent("Event")),
            n
              ? (r.initEvent(t, n.bubbles, n.cancelable), (r.detail = n.detail))
              : r.initEvent(t, !1, !1)),
          e.dispatchEvent(r);
      }
      function ye(e, t) {
        return function () {
          return ge(this, e, t);
        };
      }
      function me(e, t) {
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
      function we() {
        return new xe([[document.documentElement]], ve);
      }
      xe.prototype = we.prototype = {
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
          e = "function" == typeof e ? h(e) : f(e);
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
              ? m
              : (function (e) {
                  return function () {
                    return y.call(this.children, e);
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
            o = t ? S : E,
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
              f = i[u],
              h = f.length,
              p = C(e.call(d, d && d.__data__, u, r)),
              g = p.length,
              y = (l[u] = new Array(g)),
              m = (a[u] = new Array(g));
            o(d, f, y, m, (c[u] = new Array(h)), p, t);
            for (var v, x, w = 0, b = 0; w < g; ++w)
              if ((v = y[w])) {
                for (w >= b && (b = w + 1); !(x = m[b]) && ++b < g; );
                v._next = x || null;
              }
          }
          return ((a = new xe(a, r))._enter = l), (a._exit = c), a;
        },
        enter: function () {
          return new xe(this._enter || this._groups.map(w), this._parents);
        },
        exit: function () {
          return new xe(this._exit || this._groups.map(w), this._parents);
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
                f = u.length,
                h = (a[l] = new Array(f)),
                p = 0;
              p < f;
              ++p
            )
              (c = u[p] || d[p]) && (h[p] = c);
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
                  ? j
                  : D
                : n.local
                  ? B
                  : I)(n, t),
          );
        },
        style: function (e, t, n) {
          return arguments.length > 1
            ? this.each(
                (null == t ? R : "function" == typeof t ? $ : L)(
                  e,
                  t,
                  null == n ? "" : n,
                ),
              )
            : T(this.node(), e);
        },
        property: function (e, t) {
          return arguments.length > 1
            ? this.each((null == t ? V : "function" == typeof t ? X : H)(e, t))
            : this.node()[e];
        },
        classed: function (e, t) {
          var n = q(e + "");
          if (arguments.length < 2) {
            for (var o = Z(this.node()), r = -1, i = n.length; ++r < i; )
              if (!o.contains(n[r])) return !1;
            return !0;
          }
          return this.each(("function" == typeof t ? G : t ? W : K)(n, t));
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
          return this.select(e ? fe : de);
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
            for (a = t ? pe : he, o = 0; o < s; ++o) this.each(a(i[o], t, n));
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
          return this.each(("function" == typeof t ? me : ye)(e, t));
        },
        [Symbol.iterator]: function* () {
          for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
            for (var o, r = e[t], i = 0, s = r.length; i < s; ++i)
              (o = r[i]) && (yield o);
        },
      };
      const be = we;
      function Ee(e) {
        return "string" == typeof e
          ? new xe([[document.querySelector(e)]], [document.documentElement])
          : new xe([[e]], ve);
      }
      function Se(e, t) {
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
          n = Ee(e).on("dragstart.drag", Me, Ce);
        "onselectstart" in t
          ? n.on("selectstart.drag", Me, Ce)
          : ((t.__noselect = t.style.MozUserSelect),
            (t.style.MozUserSelect = "none"));
      }
      function Pe(e, t) {
        var n = e.document.documentElement,
          o = Ee(e).on("dragstart.drag", null);
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
      function Ie(e) {
        return !e.ctrlKey && !e.button;
      }
      function Be() {
        return this.parentNode;
      }
      function De(e, t) {
        return null == t ? { x: e.x, y: e.y } : t;
      }
      function je() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function ze() {
        var e,
          t,
          n,
          o,
          r = Ie,
          i = Be,
          s = De,
          a = je,
          c = {},
          u = l("start", "drag", "end"),
          d = 0,
          f = 0;
        function h(e) {
          e.on("mousedown.drag", p)
            .filter(a)
            .on("touchstart.drag", m)
            .on("touchmove.drag", v, _e)
            .on("touchend.drag touchcancel.drag", x)
            .style("touch-action", "none")
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function p(s, a) {
          if (!o && r.call(this, s, a)) {
            var l = w(this, i.call(this, s, a), s, a, "mouse");
            l &&
              (Ee(s.view).on("mousemove.drag", g, Ce).on("mouseup.drag", y, Ce),
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
            n = r * r + i * i > f;
          }
          c.mouse("drag", o);
        }
        function y(e) {
          Ee(e.view).on("mousemove.drag mouseup.drag", null),
            Pe(e.view, n),
            Me(e),
            c.mouse("end", e);
        }
        function m(e, t) {
          if (r.call(this, e, t)) {
            var n,
              o,
              s = e.changedTouches,
              a = i.call(this, e, t),
              l = s.length;
            for (n = 0; n < l; ++n)
              (o = w(this, a, e, t, s[n].identifier, s[n])) &&
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
        function w(e, t, n, o, r, i) {
          var a,
            l,
            f,
            p = u.copy(),
            g = Se(i || n, t);
          if (
            null !=
            (f = s.call(
              e,
              new Oe("beforestart", {
                sourceEvent: n,
                target: h,
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
              (a = f.x - g[0] || 0),
              (l = f.y - g[1] || 0),
              function n(i, s, u) {
                var y,
                  m = g;
                switch (i) {
                  case "start":
                    (c[r] = n), (y = d++);
                    break;
                  case "end":
                    delete c[r], --d;
                  case "drag":
                    (g = Se(u || s, t)), (y = d);
                }
                p.call(
                  i,
                  e,
                  new Oe(i, {
                    sourceEvent: s,
                    subject: f,
                    target: h,
                    identifier: r,
                    active: y,
                    x: g[0] + a,
                    y: g[1] + l,
                    dx: g[0] - m[0],
                    dy: g[1] - m[1],
                    dispatch: p,
                  }),
                  o,
                );
              }
            );
        }
        return (
          (h.filter = function (e) {
            return arguments.length
              ? ((r = "function" == typeof e ? e : Ae(!!e)), h)
              : r;
          }),
          (h.container = function (e) {
            return arguments.length
              ? ((i = "function" == typeof e ? e : Ae(e)), h)
              : i;
          }),
          (h.subject = function (e) {
            return arguments.length
              ? ((s = "function" == typeof e ? e : Ae(e)), h)
              : s;
          }),
          (h.touchable = function (e) {
            return arguments.length
              ? ((a = "function" == typeof e ? e : Ae(!!e)), h)
              : a;
          }),
          (h.on = function () {
            var e = u.on.apply(u, arguments);
            return e === u ? h : e;
          }),
          (h.clickDistance = function (e) {
            return arguments.length ? ((f = (e = +e) * e), h) : Math.sqrt(f);
          }),
          h
        );
      }
      Oe.prototype.on = function () {
        var e = this._.on.apply(this._, arguments);
        return e === this._ ? this : e;
      };
      function Re(e) {
        return ((e = Math.exp(e)) + 1 / e) / 2;
      }
      const Le = (function e(t, n, o) {
        function r(e, r) {
          var i,
            s,
            a = e[0],
            l = e[1],
            c = e[2],
            u = r[0],
            d = r[1],
            f = r[2],
            h = u - a,
            p = d - l,
            g = h * h + p * p;
          if (g < 1e-12)
            (s = Math.log(f / c) / t),
              (i = function (e) {
                return [a + e * h, l + e * p, c * Math.exp(t * e * s)];
              });
          else {
            var y = Math.sqrt(g),
              m = (f * f - c * c + o * g) / (2 * c * n * y),
              v = (f * f - c * c - o * g) / (2 * f * n * y),
              x = Math.log(Math.sqrt(m * m + 1) - m),
              w = Math.log(Math.sqrt(v * v + 1) - v);
            (s = (w - x) / t),
              (i = function (e) {
                var o,
                  r = e * s,
                  i = Re(x),
                  u =
                    (c / (n * y)) *
                    (i *
                      ((o = t * r + x), ((o = Math.exp(2 * o)) - 1) / (o + 1)) -
                      (function (e) {
                        return ((e = Math.exp(e)) - 1 / e) / 2;
                      })(x));
                return [a + u * h, l + u * p, (c * i) / Re(t * r + x)];
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
        Xe = 0,
        qe = 1e3,
        Ze = 0,
        Ye = 0,
        Fe = 0,
        Ue =
          "object" == typeof performance && performance.now
            ? performance
            : Date,
        We =
          "object" == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (e) {
                setTimeout(e, 17);
              };
      function Ke() {
        return Ye || (We(Ge), (Ye = Ue.now() + Fe));
      }
      function Ge() {
        Ye = 0;
      }
      function Qe() {
        this._call = this._time = this._next = null;
      }
      function Je(e, t, n) {
        var o = new Qe();
        return o.restart(e, t, n), o;
      }
      function et() {
        (Ye = (Ze = Ue.now()) + Fe), (Ve = He = 0);
        try {
          !(function () {
            Ke(), ++Ve;
            for (var e, t = $e; t; )
              (e = Ye - t._time) >= 0 && t._call.call(void 0, e), (t = t._next);
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
              (Te = e), nt(o);
            })(),
            (Ye = 0);
        }
      }
      function tt() {
        var e = Ue.now(),
          t = e - Ze;
        t > qe && ((Fe -= t), (Ze = e));
      }
      function nt(e) {
        Ve ||
          (He && (He = clearTimeout(He)),
          e - Ye > 24
            ? (e < 1 / 0 && (He = setTimeout(et, e - Ue.now() - Fe)),
              Xe && (Xe = clearInterval(Xe)))
            : (Xe || ((Ze = Ue.now()), (Xe = setInterval(tt, qe))),
              (Ve = 1),
              We(et)));
      }
      function ot(e, t, n) {
        var o = new Qe();
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
      Qe.prototype = Je.prototype = {
        constructor: Qe,
        restart: function (e, t, n) {
          if ("function" != typeof e)
            throw new TypeError("callback is not a function");
          (n = (null == n ? Ke() : +n) + (null == t ? 0 : +t)),
            this._next ||
              Te === this ||
              (Te ? (Te._next = this) : ($e = this), (Te = this)),
            (this._call = e),
            (this._time = n),
            nt();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), nt());
        },
      };
      var rt = l("start", "end", "cancel", "interrupt"),
        it = [],
        st = 0,
        at = 1,
        lt = 2,
        ct = 3,
        ut = 4,
        dt = 5,
        ft = 6;
      function ht(e, t, n, o, r, i) {
        var s = e.__transition;
        if (s) {
          if (n in s) return;
        } else e.__transition = {};
        !(function (e, t, n) {
          var o,
            r = e.__transition;
          function i(e) {
            (n.state = at),
              n.timer.restart(s, n.delay, n.time),
              n.delay <= e && s(e - n.delay);
          }
          function s(i) {
            var c, u, d, f;
            if (n.state !== at) return l();
            for (c in r)
              if ((f = r[c]).name === n.name) {
                if (f.state === ct) return ot(s);
                f.state === ut
                  ? ((f.state = ft),
                    f.timer.stop(),
                    f.on.call("interrupt", e, e.__data__, f.index, f.group),
                    delete r[c])
                  : +c < t &&
                    ((f.state = ft),
                    f.timer.stop(),
                    f.on.call("cancel", e, e.__data__, f.index, f.group),
                    delete r[c]);
              }
            if (
              (ot(function () {
                n.state === ct &&
                  ((n.state = ut), n.timer.restart(a, n.delay, n.time), a(i));
              }),
              (n.state = lt),
              n.on.call("start", e, e.__data__, n.index, n.group),
              n.state === lt)
            ) {
              for (
                n.state = ct,
                  o = new Array((d = n.tween.length)),
                  c = 0,
                  u = -1;
                c < d;
                ++c
              )
                (f = n.tween[c].value.call(e, e.__data__, n.index, n.group)) &&
                  (o[++u] = f);
              o.length = u + 1;
            }
          }
          function a(t) {
            for (
              var r =
                  t < n.duration
                    ? n.ease.call(null, t / n.duration)
                    : (n.timer.restart(l), (n.state = dt), 1),
                i = -1,
                s = o.length;
              ++i < s;
            )
              o[i].call(e, r);
            n.state === dt &&
              (n.on.call("end", e, e.__data__, n.index, n.group), l());
          }
          function l() {
            for (var o in ((n.state = ft), n.timer.stop(), delete r[t], r))
              return;
            delete e.__transition;
          }
          (r[t] = n), (n.timer = Je(i, 0, n.time));
        })(e, n, {
          name: t,
          index: o,
          group: r,
          on: rt,
          tween: it,
          time: i.time,
          delay: i.delay,
          duration: i.duration,
          ease: i.ease,
          timer: null,
          state: st,
        });
      }
      function pt(e, t) {
        var n = yt(e, t);
        if (n.state > st) throw new Error("too late; already scheduled");
        return n;
      }
      function gt(e, t) {
        var n = yt(e, t);
        if (n.state > ct) throw new Error("too late; already running");
        return n;
      }
      function yt(e, t) {
        var n = e.__transition;
        if (!n || !(n = n[t])) throw new Error("transition not found");
        return n;
      }
      function mt(e, t) {
        var n,
          o,
          r,
          i = e.__transition,
          s = !0;
        if (i) {
          for (r in ((t = null == t ? null : t + ""), i))
            (n = i[r]).name === t
              ? ((o = n.state > lt && n.state < dt),
                (n.state = ft),
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
      var vt,
        xt = n(55797),
        wt = 180 / Math.PI,
        bt = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        };
      function Et(e, t, n, o, r, i) {
        var s, a, l;
        return (
          (s = Math.sqrt(e * e + t * t)) && ((e /= s), (t /= s)),
          (l = e * n + t * o) && ((n -= e * l), (o -= t * l)),
          (a = Math.sqrt(n * n + o * o)) && ((n /= a), (o /= a), (l /= a)),
          e * o < t * n && ((e = -e), (t = -t), (l = -l), (s = -s)),
          {
            translateX: r,
            translateY: i,
            rotate: Math.atan2(t, e) * wt,
            skewX: Math.atan(l) * wt,
            scaleX: s,
            scaleY: a,
          }
        );
      }
      function St(e, t, n, o) {
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
                  { i: l - 4, x: (0, xt.A)(e, r) },
                  { i: l - 2, x: (0, xt.A)(o, i) },
                );
              } else (r || i) && s.push("translate(" + r + t + i + n);
            })(i.translateX, i.translateY, s.translateX, s.translateY, a, l),
            (function (e, t, n, i) {
              e !== t
                ? (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
                  i.push({
                    i: n.push(r(n) + "rotate(", null, o) - 2,
                    x: (0, xt.A)(e, t),
                  }))
                : t && n.push(r(n) + "rotate(" + t + o);
            })(i.rotate, s.rotate, a, l),
            (function (e, t, n, i) {
              e !== t
                ? i.push({
                    i: n.push(r(n) + "skewX(", null, o) - 2,
                    x: (0, xt.A)(e, t),
                  })
                : t && n.push(r(n) + "skewX(" + t + o);
            })(i.skewX, s.skewX, a, l),
            (function (e, t, n, o, i, s) {
              if (e !== n || t !== o) {
                var a = i.push(r(i) + "scale(", null, ",", null, ")");
                s.push(
                  { i: a - 4, x: (0, xt.A)(e, n) },
                  { i: a - 2, x: (0, xt.A)(t, o) },
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
      var _t = St(
          function (e) {
            const t = new (
              "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
            )(e + "");
            return t.isIdentity ? bt : Et(t.a, t.b, t.c, t.d, t.e, t.f);
          },
          "px, ",
          "px)",
          "deg)",
        ),
        Ct = St(
          function (e) {
            return null == e
              ? bt
              : (vt ||
                  (vt = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g",
                  )),
                vt.setAttribute("transform", e),
                (e = vt.transform.baseVal.consolidate())
                  ? Et((e = e.matrix).a, e.b, e.c, e.d, e.e, e.f)
                  : bt);
          },
          ", ",
          ")",
          ")",
        );
      function kt(e, t) {
        var n, o;
        return function () {
          var r = gt(this, e),
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
      function Mt(e, t, n) {
        var o, r;
        if ("function" != typeof n) throw new Error();
        return function () {
          var i = gt(this, e),
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
      function Nt(e, t, n) {
        var o = e._id;
        return (
          e.each(function () {
            var e = gt(this, o);
            (e.value || (e.value = {}))[t] = n.apply(this, arguments);
          }),
          function (e) {
            return yt(e, o).value[t];
          }
        );
      }
      var Pt = n(25705),
        At = n(92789),
        Ot = n(14553);
      function It(e, t) {
        var n;
        return (
          "number" == typeof t
            ? xt.A
            : t instanceof Pt.Ay
              ? At.Ay
              : (n = (0, Pt.Ay)(t))
                ? ((t = n), At.Ay)
                : Ot.A
        )(e, t);
      }
      function Bt(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function Dt(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function jt(e, t, n) {
        var o,
          r,
          i = n + "";
        return function () {
          var s = this.getAttribute(e);
          return s === i ? null : s === o ? r : (r = t((o = s), n));
        };
      }
      function zt(e, t, n) {
        var o,
          r,
          i = n + "";
        return function () {
          var s = this.getAttributeNS(e.space, e.local);
          return s === i ? null : s === o ? r : (r = t((o = s), n));
        };
      }
      function Rt(e, t, n) {
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
      function Lt(e, t, n) {
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
      function $t(e, t) {
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
      function Tt(e, t) {
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
      function Vt(e, t) {
        return function () {
          pt(this, e).delay = +t.apply(this, arguments);
        };
      }
      function Ht(e, t) {
        return (
          (t = +t),
          function () {
            pt(this, e).delay = t;
          }
        );
      }
      function Xt(e, t) {
        return function () {
          gt(this, e).duration = +t.apply(this, arguments);
        };
      }
      function qt(e, t) {
        return (
          (t = +t),
          function () {
            gt(this, e).duration = t;
          }
        );
      }
      var Zt = be.prototype.constructor;
      function Yt(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      var Ft = 0;
      function Ut(e, t, n, o) {
        (this._groups = e),
          (this._parents = t),
          (this._name = n),
          (this._id = o);
      }
      function Wt() {
        return ++Ft;
      }
      var Kt = be.prototype;
      Ut.prototype = function (e) {
        return be().transition(e);
      }.prototype = {
        constructor: Ut,
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
                f = (i[s] = new Array(d)),
                h = 0;
              h < d;
              ++h
            )
              (a = c[h]) &&
                (l = e.call(a, a.__data__, h, c)) &&
                ("__data__" in a && (l.__data__ = a.__data__),
                (f[h] = l),
                ht(f[h], t, n, h, f, yt(a, n)));
          return new Ut(i, this._parents, t, n);
        },
        selectAll: function (e) {
          var t = this._name,
            n = this._id;
          "function" != typeof e && (e = f(e));
          for (
            var o = this._groups, r = o.length, i = [], s = [], a = 0;
            a < r;
            ++a
          )
            for (var l, c = o[a], u = c.length, d = 0; d < u; ++d)
              if ((l = c[d])) {
                for (
                  var h,
                    p = e.call(l, l.__data__, d, c),
                    g = yt(l, n),
                    y = 0,
                    m = p.length;
                  y < m;
                  ++y
                )
                  (h = p[y]) && ht(h, t, n, y, p, g);
                i.push(p), s.push(l);
              }
          return new Ut(i, s, t, n);
        },
        selectChild: Kt.selectChild,
        selectChildren: Kt.selectChildren,
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
          return new Ut(o, this._parents, this._name, this._id);
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
                f = (s[a] = new Array(d)),
                h = 0;
              h < d;
              ++h
            )
              (l = c[h] || u[h]) && (f[h] = l);
          for (; a < o; ++a) s[a] = t[a];
          return new Ut(s, this._parents, this._name, this._id);
        },
        selection: function () {
          return new Zt(this._groups, this._parents);
        },
        transition: function () {
          for (
            var e = this._name,
              t = this._id,
              n = Wt(),
              o = this._groups,
              r = o.length,
              i = 0;
            i < r;
            ++i
          )
            for (var s, a = o[i], l = a.length, c = 0; c < l; ++c)
              if ((s = a[c])) {
                var u = yt(s, t);
                ht(s, e, n, c, a, {
                  time: u.time + u.delay + u.duration,
                  delay: 0,
                  duration: u.duration,
                  ease: u.ease,
                });
              }
          return new Ut(o, this._parents, e, n);
        },
        call: Kt.call,
        nodes: Kt.nodes,
        node: Kt.node,
        size: Kt.size,
        empty: Kt.empty,
        each: Kt.each,
        on: function (e, t) {
          var n = this._id;
          return arguments.length < 2
            ? yt(this.node(), n).on.on(e)
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
                      ? pt
                      : gt;
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
            o = "transform" === n ? Ct : It;
          return this.attrTween(
            e,
            "function" == typeof t
              ? (n.local ? Lt : Rt)(n, o, Nt(this, "attr." + e, t))
              : null == t
                ? (n.local ? Dt : Bt)(n)
                : (n.local ? zt : jt)(n, o, t),
          );
        },
        attrTween: function (e, t) {
          var n = "attr." + e;
          if (arguments.length < 2) return (n = this.tween(n)) && n._value;
          if (null == t) return this.tween(n, null);
          if ("function" != typeof t) throw new Error();
          var o = P(e);
          return this.tween(n, (o.local ? $t : Tt)(o, t));
        },
        style: function (e, t, n) {
          var o = "transform" == (e += "") ? _t : It;
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
              ).on("end.style." + e, Yt(e))
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
                  })(e, o, Nt(this, "style." + e, t)),
                ).each(
                  (function (e, t) {
                    var n,
                      o,
                      r,
                      i,
                      s = "style." + t,
                      a = "end." + s;
                    return function () {
                      var l = gt(this, e),
                        c = l.on,
                        u = null == l.value[s] ? i || (i = Yt(t)) : void 0;
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
                })(Nt(this, "text", e))
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
              var o, r = yt(this.node(), n).tween, i = 0, s = r.length;
              i < s;
              ++i
            )
              if ((o = r[i]).name === e) return o.value;
            return null;
          }
          return this.each((null == t ? kt : Mt)(n, e, t));
        },
        delay: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(("function" == typeof e ? Vt : Ht)(t, e))
            : yt(this.node(), t).delay;
        },
        duration: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(("function" == typeof e ? Xt : qt)(t, e))
            : yt(this.node(), t).duration;
        },
        ease: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(
                (function (e, t) {
                  if ("function" != typeof t) throw new Error();
                  return function () {
                    gt(this, e).ease = t;
                  };
                })(t, e),
              )
            : yt(this.node(), t).ease;
        },
        easeVarying: function (e) {
          if ("function" != typeof e) throw new Error();
          return this.each(
            (function (e, t) {
              return function () {
                var n = t.apply(this, arguments);
                if ("function" != typeof n) throw new Error();
                gt(this, e).ease = n;
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
                  0 == --r && i();
                },
              };
            n.each(function () {
              var n = gt(this, o),
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
        [Symbol.iterator]: Kt[Symbol.iterator],
      };
      var Gt = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (e) {
          return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
        },
      };
      function Qt(e, t) {
        for (var n; !(n = e.__transition) || !(n = n[t]); )
          if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
        return n;
      }
      (be.prototype.interrupt = function (e) {
        return this.each(function () {
          mt(this, e);
        });
      }),
        (be.prototype.transition = function (e) {
          var t, n;
          e instanceof Ut
            ? ((t = e._id), (e = e._name))
            : ((t = Wt()),
              ((n = Gt).time = Ke()),
              (e = null == e ? null : e + ""));
          for (var o = this._groups, r = o.length, i = 0; i < r; ++i)
            for (var s, a = o[i], l = a.length, c = 0; c < l; ++c)
              (s = a[c]) && ht(s, e, t, c, a, n || Qt(s, t));
          return new Ut(o, this._parents, e, t);
        });
      const Jt = (e) => () => e;
      function en(e, { sourceEvent: t, target: n, transform: o, dispatch: r }) {
        Object.defineProperties(this, {
          type: { value: e, enumerable: !0, configurable: !0 },
          sourceEvent: { value: t, enumerable: !0, configurable: !0 },
          target: { value: n, enumerable: !0, configurable: !0 },
          transform: { value: o, enumerable: !0, configurable: !0 },
          _: { value: r },
        });
      }
      function tn(e, t, n) {
        (this.k = e), (this.x = t), (this.y = n);
      }
      tn.prototype = {
        constructor: tn,
        scale: function (e) {
          return 1 === e ? this : new tn(this.k * e, this.x, this.y);
        },
        translate: function (e, t) {
          return (0 === e) & (0 === t)
            ? this
            : new tn(this.k, this.x + this.k * e, this.y + this.k * t);
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
      var nn = new tn(1, 0, 0);
      function on(e) {
        for (; !e.__zoom; ) if (!(e = e.parentNode)) return nn;
        return e.__zoom;
      }
      function rn(e) {
        e.stopImmediatePropagation();
      }
      function sn(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
      function an(e) {
        return !((e.ctrlKey && "wheel" !== e.type) || e.button);
      }
      function ln() {
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
      function cn() {
        return this.__zoom || nn;
      }
      function un(e) {
        return (
          -e.deltaY *
          (1 === e.deltaMode ? 0.05 : e.deltaMode ? 1 : 0.002) *
          (e.ctrlKey ? 10 : 1)
        );
      }
      function dn() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function fn(e, t, n) {
        var o = e.invertX(t[0][0]) - n[0][0],
          r = e.invertX(t[1][0]) - n[1][0],
          i = e.invertY(t[0][1]) - n[0][1],
          s = e.invertY(t[1][1]) - n[1][1];
        return e.translate(
          r > o ? (o + r) / 2 : Math.min(0, o) || Math.max(0, r),
          s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s),
        );
      }
      function hn() {
        var e,
          t,
          n,
          o = an,
          r = ln,
          i = fn,
          s = un,
          a = dn,
          c = [0, 1 / 0],
          u = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          d = 250,
          f = Le,
          h = l("start", "zoom", "end"),
          p = 500,
          g = 150,
          y = 0,
          m = 10;
        function v(e) {
          e.property("__zoom", cn)
            .on("wheel.zoom", C, { passive: !1 })
            .on("mousedown.zoom", k)
            .on("dblclick.zoom", M)
            .filter(a)
            .on("touchstart.zoom", N)
            .on("touchmove.zoom", P)
            .on("touchend.zoom touchcancel.zoom", A)
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function x(e, t) {
          return (t = Math.max(c[0], Math.min(c[1], t))) === e.k
            ? e
            : new tn(t, e.x, e.y);
        }
        function w(e, t, n) {
          var o = t[0] - n[0] * e.k,
            r = t[1] - n[1] * e.k;
          return o === e.x && r === e.y ? e : new tn(e.k, o, r);
        }
        function b(e) {
          return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
        }
        function E(e, t, n, o) {
          e.on("start.zoom", function () {
            S(this, arguments).event(o).start();
          })
            .on("interrupt.zoom end.zoom", function () {
              S(this, arguments).event(o).end();
            })
            .tween("zoom", function () {
              var e = this,
                i = arguments,
                s = S(e, i).event(o),
                a = r.apply(e, i),
                l =
                  null == n ? b(a) : "function" == typeof n ? n.apply(e, i) : n,
                c = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                u = e.__zoom,
                d = "function" == typeof t ? t.apply(e, i) : t,
                h = f(u.invert(l).concat(c / u.k), d.invert(l).concat(c / d.k));
              return function (e) {
                if (1 === e) e = d;
                else {
                  var t = h(e),
                    n = c / t[2];
                  e = new tn(n, l[0] - t[0] * n, l[1] - t[1] * n);
                }
                s.zoom(null, e);
              };
            });
        }
        function S(e, t, n) {
          return (!n && e.__zooming) || new _(e, t);
        }
        function _(e, t) {
          (this.that = e),
            (this.args = t),
            (this.active = 0),
            (this.sourceEvent = null),
            (this.extent = r.apply(e, t)),
            (this.taps = 0);
        }
        function C(e, ...t) {
          if (o.apply(this, arguments)) {
            var n = S(this, t).event(e),
              r = this.__zoom,
              a = Math.max(
                c[0],
                Math.min(c[1], r.k * Math.pow(2, s.apply(this, arguments))),
              ),
              l = Se(e);
            if (n.wheel)
              (n.mouse[0][0] === l[0] && n.mouse[0][1] === l[1]) ||
                (n.mouse[1] = r.invert((n.mouse[0] = l))),
                clearTimeout(n.wheel);
            else {
              if (r.k === a) return;
              (n.mouse = [l, r.invert(l)]), mt(this), n.start();
            }
            sn(e),
              (n.wheel = setTimeout(function () {
                (n.wheel = null), n.end();
              }, g)),
              n.zoom(
                "mouse",
                i(w(x(r, a), n.mouse[0], n.mouse[1]), n.extent, u),
              );
          }
        }
        function k(e, ...t) {
          if (!n && o.apply(this, arguments)) {
            var r = e.currentTarget,
              s = S(this, t, !0).event(e),
              a = Ee(e.view)
                .on(
                  "mousemove.zoom",
                  function (e) {
                    if ((sn(e), !s.moved)) {
                      var t = e.clientX - c,
                        n = e.clientY - d;
                      s.moved = t * t + n * n > y;
                    }
                    s.event(e).zoom(
                      "mouse",
                      i(
                        w(s.that.__zoom, (s.mouse[0] = Se(e, r)), s.mouse[1]),
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
                      sn(e),
                      s.event(e).end();
                  },
                  !0,
                ),
              l = Se(e, r),
              c = e.clientX,
              d = e.clientY;
            Ne(e.view),
              rn(e),
              (s.mouse = [l, this.__zoom.invert(l)]),
              mt(this),
              s.start();
          }
        }
        function M(e, ...t) {
          if (o.apply(this, arguments)) {
            var n = this.__zoom,
              s = Se(e.changedTouches ? e.changedTouches[0] : e, this),
              a = n.invert(s),
              l = n.k * (e.shiftKey ? 0.5 : 2),
              c = i(w(x(n, l), s, a), r.apply(this, t), u);
            sn(e),
              d > 0
                ? Ee(this).transition().duration(d).call(E, c, s, e)
                : Ee(this).call(v.transform, c, s, e);
          }
        }
        function N(n, ...r) {
          if (o.apply(this, arguments)) {
            var i,
              s,
              a,
              l,
              c = n.touches,
              u = c.length,
              d = S(this, r, n.changedTouches.length === u).event(n);
            for (rn(n), s = 0; s < u; ++s)
              (l = [
                (l = Se((a = c[s]), this)),
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
                  }, p))),
                mt(this),
                d.start());
          }
        }
        function P(e, ...t) {
          if (this.__zooming) {
            var n,
              o,
              r,
              s,
              a = S(this, t).event(e),
              l = e.changedTouches,
              c = l.length;
            for (sn(e), n = 0; n < c; ++n)
              (r = Se((o = l[n]), this)),
                a.touch0 && a.touch0[2] === o.identifier
                  ? (a.touch0[0] = r)
                  : a.touch1 &&
                    a.touch1[2] === o.identifier &&
                    (a.touch1[0] = r);
            if (((o = a.that.__zoom), a.touch1)) {
              var d = a.touch0[0],
                f = a.touch0[1],
                h = a.touch1[0],
                p = a.touch1[1],
                g = (g = h[0] - d[0]) * g + (g = h[1] - d[1]) * g,
                y = (y = p[0] - f[0]) * y + (y = p[1] - f[1]) * y;
              (o = x(o, Math.sqrt(g / y))),
                (r = [(d[0] + h[0]) / 2, (d[1] + h[1]) / 2]),
                (s = [(f[0] + p[0]) / 2, (f[1] + p[1]) / 2]);
            } else {
              if (!a.touch0) return;
              (r = a.touch0[0]), (s = a.touch0[1]);
            }
            a.zoom("touch", i(w(o, r, s), a.extent, u));
          }
        }
        function A(e, ...o) {
          if (this.__zooming) {
            var r,
              i,
              s = S(this, o).event(e),
              a = e.changedTouches,
              l = a.length;
            for (
              rn(e),
                n && clearTimeout(n),
                n = setTimeout(function () {
                  n = null;
                }, p),
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
                ((i = Se(i, this)), Math.hypot(t[0] - i[0], t[1] - i[1]) < m))
            ) {
              var c = Ee(this).on("dblclick.zoom");
              c && c.apply(this, arguments);
            }
          }
        }
        return (
          (v.transform = function (e, t, n, o) {
            var r = e.selection ? e.selection() : e;
            r.property("__zoom", cn),
              e !== r
                ? E(e, t, n, o)
                : r.interrupt().each(function () {
                    S(this, arguments)
                      .event(o)
                      .start()
                      .zoom(
                        null,
                        "function" == typeof t ? t.apply(this, arguments) : t,
                      )
                      .end();
                  });
          }),
          (v.scaleBy = function (e, t, n, o) {
            v.scaleTo(
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
          (v.scaleTo = function (e, t, n, o) {
            v.transform(
              e,
              function () {
                var e = r.apply(this, arguments),
                  o = this.__zoom,
                  s =
                    null == n
                      ? b(e)
                      : "function" == typeof n
                        ? n.apply(this, arguments)
                        : n,
                  a = o.invert(s),
                  l = "function" == typeof t ? t.apply(this, arguments) : t;
                return i(w(x(o, l), s, a), e, u);
              },
              n,
              o,
            );
          }),
          (v.translateBy = function (e, t, n, o) {
            v.transform(
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
          (v.translateTo = function (e, t, n, o, s) {
            v.transform(
              e,
              function () {
                var e = r.apply(this, arguments),
                  s = this.__zoom,
                  a =
                    null == o
                      ? b(e)
                      : "function" == typeof o
                        ? o.apply(this, arguments)
                        : o;
                return i(
                  nn
                    .translate(a[0], a[1])
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
          (_.prototype = {
            event: function (e) {
              return e && (this.sourceEvent = e), this;
            },
            start: function () {
              return (
                1 == ++this.active &&
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
                0 == --this.active &&
                  (delete this.that.__zooming, this.emit("end")),
                this
              );
            },
            emit: function (e) {
              var t = Ee(this.that).datum();
              h.call(
                e,
                this.that,
                new en(e, {
                  sourceEvent: this.sourceEvent,
                  target: v,
                  type: e,
                  transform: this.that.__zoom,
                  dispatch: h,
                }),
                t,
              );
            },
          }),
          (v.wheelDelta = function (e) {
            return arguments.length
              ? ((s = "function" == typeof e ? e : Jt(+e)), v)
              : s;
          }),
          (v.filter = function (e) {
            return arguments.length
              ? ((o = "function" == typeof e ? e : Jt(!!e)), v)
              : o;
          }),
          (v.touchable = function (e) {
            return arguments.length
              ? ((a = "function" == typeof e ? e : Jt(!!e)), v)
              : a;
          }),
          (v.extent = function (e) {
            return arguments.length
              ? ((r =
                  "function" == typeof e
                    ? e
                    : Jt([
                        [+e[0][0], +e[0][1]],
                        [+e[1][0], +e[1][1]],
                      ])),
                v)
              : r;
          }),
          (v.scaleExtent = function (e) {
            return arguments.length
              ? ((c[0] = +e[0]), (c[1] = +e[1]), v)
              : [c[0], c[1]];
          }),
          (v.translateExtent = function (e) {
            return arguments.length
              ? ((u[0][0] = +e[0][0]),
                (u[1][0] = +e[1][0]),
                (u[0][1] = +e[0][1]),
                (u[1][1] = +e[1][1]),
                v)
              : [
                  [u[0][0], u[0][1]],
                  [u[1][0], u[1][1]],
                ];
          }),
          (v.constrain = function (e) {
            return arguments.length ? ((i = e), v) : i;
          }),
          (v.duration = function (e) {
            return arguments.length ? ((d = +e), v) : d;
          }),
          (v.interpolate = function (e) {
            return arguments.length ? ((f = e), v) : f;
          }),
          (v.on = function () {
            var e = h.on.apply(h, arguments);
            return e === h ? v : e;
          }),
          (v.clickDistance = function (e) {
            return arguments.length ? ((y = (e = +e) * e), v) : Math.sqrt(y);
          }),
          (v.tapDistance = function (e) {
            return arguments.length ? ((m = +e), v) : m;
          }),
          v
        );
      }
      on.prototype = tn.prototype;
      const pn = {
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
        gn = [
          [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
          [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
        ],
        yn = ["Enter", " ", "Escape"];
      var mn, vn, xn;
      !(function (e) {
        (e.Strict = "strict"), (e.Loose = "loose");
      })(mn || (mn = {})),
        (function (e) {
          (e.Free = "free"),
            (e.Vertical = "vertical"),
            (e.Horizontal = "horizontal");
        })(vn || (vn = {})),
        (function (e) {
          (e.Partial = "partial"), (e.Full = "full");
        })(xn || (xn = {}));
      const wn = {
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
      var bn, En, Sn;
      !(function (e) {
        (e.Bezier = "default"),
          (e.Straight = "straight"),
          (e.Step = "step"),
          (e.SmoothStep = "smoothstep"),
          (e.SimpleBezier = "simplebezier");
      })(bn || (bn = {})),
        (function (e) {
          (e.Arrow = "arrow"), (e.ArrowClosed = "arrowclosed");
        })(En || (En = {})),
        (function (e) {
          (e.Left = "left"),
            (e.Top = "top"),
            (e.Right = "right"),
            (e.Bottom = "bottom");
        })(Sn || (Sn = {}));
      const _n = {
        [Sn.Left]: Sn.Right,
        [Sn.Right]: Sn.Left,
        [Sn.Top]: Sn.Bottom,
        [Sn.Bottom]: Sn.Top,
      };
      function Cn(e) {
        return null === e ? null : e ? "valid" : "invalid";
      }
      const kn = (e) => "id" in e && "source" in e && "target" in e,
        Mn = (e) =>
          "id" in e && "position" in e && !("source" in e) && !("target" in e),
        Nn = (e) =>
          "id" in e && "internals" in e && !("source" in e) && !("target" in e),
        Pn = (e, t = [0, 0]) => {
          const { width: n, height: o } = io(e),
            r = e.origin ?? t,
            i = n * r[0],
            s = o * r[1];
          return { x: e.position.x - i, y: e.position.y - s };
        },
        An = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
          if (0 === e.length) return { x: 0, y: 0, width: 0, height: 0 };
          const n = e.reduce(
            (e, n) => {
              const o = "string" == typeof n;
              let r = t.nodeLookup || o ? void 0 : n;
              t.nodeLookup &&
                (r = o
                  ? t.nodeLookup.get(n)
                  : Nn(n)
                    ? n
                    : t.nodeLookup.get(n.id));
              const i = r ? Fn(r, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
              return Xn(e, i);
            },
            { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
          );
          return Zn(n);
        },
        On = (e, t = {}) => {
          if (0 === e.size) return { x: 0, y: 0, width: 0, height: 0 };
          let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
          return (
            e.forEach((e) => {
              if (void 0 === t.filter || t.filter(e)) {
                const t = Fn(e);
                n = Xn(n, t);
              }
            }),
            Zn(n)
          );
        },
        In = (e, t, [n, o, r] = [0, 0, 1], i = !1, s = !1) => {
          const a = {
              ...eo(t, [n, o, r]),
              width: t.width / r,
              height: t.height / r,
            },
            l = [];
          for (const t of e.values()) {
            const { measured: e, selectable: n = !0, hidden: o = !1 } = t;
            if ((s && !n) || o) continue;
            const r = e.width ?? t.width ?? t.initialWidth ?? null,
              c = e.height ?? t.height ?? t.initialHeight ?? null,
              u = Wn(a, Yn(t)),
              d = (r ?? 0) * (c ?? 0),
              f = i && u > 0;
            (!t.internals.handleBounds || f || u >= d || t.dragging) &&
              l.push(t);
          }
          return l;
        },
        Bn = (e, t) => {
          const n = new Set();
          return (
            e.forEach((e) => {
              n.add(e.id);
            }),
            t.filter((e) => n.has(e.source) || n.has(e.target))
          );
        };
      function Dn(e, t) {
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
      async function jn(
        { nodes: e, width: t, height: n, panZoom: o, minZoom: r, maxZoom: i },
        s,
      ) {
        if (0 === e.size) return Promise.resolve(!1);
        const a = On(e),
          l = no(a, t, n, s?.minZoom ?? r, s?.maxZoom ?? i, s?.padding ?? 0.1);
        return (
          await o.setViewport(l, { duration: s?.duration }), Promise.resolve(!0)
        );
      }
      function zn({
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
            ro(s.extent) &&
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
        } else i?.("005", pn.error005());
        const f = ro(d) ? $n(t, d, s.measured) : t;
        return {
          position: {
            x: f.x - l + s.measured.width * u[0],
            y: f.y - c + s.measured.height * u[1],
          },
          positionAbsolute: f,
        };
      }
      async function Rn({
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
          c = Bn(s, l);
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
      const Ln = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
        $n = (e = { x: 0, y: 0 }, t, n) => ({
          x: Ln(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
          y: Ln(e.y, t[0][1], t[1][1] - (n?.height ?? 0)),
        });
      function Tn(e, t, n) {
        const { width: o, height: r } = io(n),
          { x: i, y: s } = n.internals.positionAbsolute;
        return $n(
          e,
          [
            [i, s],
            [i + o, s + r],
          ],
          t,
        );
      }
      const Vn = (e, t, n) =>
          e < t
            ? Ln(Math.abs(e - t), 1, t) / t
            : e > n
              ? -Ln(Math.abs(e - n), 1, t) / t
              : 0,
        Hn = (e, t, n = 15, o = 40) => [
          Vn(e.x, o, t.width - o) * n,
          Vn(e.y, o, t.height - o) * n,
        ],
        Xn = (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          x2: Math.max(e.x2, t.x2),
          y2: Math.max(e.y2, t.y2),
        }),
        qn = ({ x: e, y: t, width: n, height: o }) => ({
          x: e,
          y: t,
          x2: e + n,
          y2: t + o,
        }),
        Zn = ({ x: e, y: t, x2: n, y2: o }) => ({
          x: e,
          y: t,
          width: n - e,
          height: o - t,
        }),
        Yn = (e, t = [0, 0]) => {
          const { x: n, y: o } = Nn(e)
            ? e.internals.positionAbsolute
            : Pn(e, t);
          return {
            x: n,
            y: o,
            width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
            height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0,
          };
        },
        Fn = (e, t = [0, 0]) => {
          const { x: n, y: o } = Nn(e)
            ? e.internals.positionAbsolute
            : Pn(e, t);
          return {
            x: n,
            y: o,
            x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
            y2: o + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0),
          };
        },
        Un = (e, t) => Zn(Xn(qn(e), qn(t))),
        Wn = (e, t) => {
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
        Kn = (e) => Gn(e.width) && Gn(e.height) && Gn(e.x) && Gn(e.y),
        Gn = (e) => !isNaN(e) && isFinite(e),
        Qn = (e, t) => {
          0;
        },
        Jn = (e, t = [1, 1]) => ({
          x: t[0] * Math.round(e.x / t[0]),
          y: t[1] * Math.round(e.y / t[1]),
        }),
        eo = ({ x: e, y: t }, [n, o, r], i = !1, s = [1, 1]) => {
          const a = { x: (e - n) / r, y: (t - o) / r };
          return i ? Jn(a, s) : a;
        },
        to = ({ x: e, y: t }, [n, o, r]) => ({ x: e * r + n, y: t * r + o }),
        no = (e, t, n, o, r, i) => {
          const s = t / (e.width * (1 + i)),
            a = n / (e.height * (1 + i)),
            l = Math.min(s, a),
            c = Ln(l, o, r);
          return {
            x: t / 2 - (e.x + e.width / 2) * c,
            y: n / 2 - (e.y + e.height / 2) * c,
            zoom: c,
          };
        },
        oo = () =>
          "undefined" != typeof navigator &&
          navigator?.userAgent?.indexOf("Mac") >= 0;
      function ro(e) {
        return void 0 !== e && "parent" !== e;
      }
      function io(e) {
        return {
          width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
          height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0,
        };
      }
      function so(e) {
        return (
          void 0 !== (e.measured?.width ?? e.width ?? e.initialWidth) &&
          void 0 !== (e.measured?.height ?? e.height ?? e.initialHeight)
        );
      }
      function ao(e, t = { width: 0, height: 0 }, n, o, r) {
        const i = { ...e },
          s = o.get(n);
        if (s) {
          const e = s.origin || r;
          (i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * e[0]),
            (i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * e[1]);
        }
        return i;
      }
      function lo(
        e,
        {
          snapGrid: t = [0, 0],
          snapToGrid: n = !1,
          transform: o,
          containerBounds: r,
        },
      ) {
        const { x: i, y: s } = go(e),
          a = eo({ x: i - (r?.left ?? 0), y: s - (r?.top ?? 0) }, o),
          { x: l, y: c } = n ? Jn(a, t) : a;
        return { xSnapped: l, ySnapped: c, ...a };
      }
      const co = (e) => ({ width: e.offsetWidth, height: e.offsetHeight }),
        uo = (e) => e.getRootNode?.() || window?.document,
        fo = ["INPUT", "SELECT", "TEXTAREA"];
      function ho(e) {
        const t = e.composedPath?.()?.[0] || e.target;
        return (
          fo.includes(t?.nodeName) ||
          t?.hasAttribute?.("contenteditable") ||
          !!t?.closest(".nokey")
        );
      }
      const po = (e) => "clientX" in e,
        go = (e, t) => {
          const n = po(e),
            o = n ? e.clientX : e.touches?.[0].clientX,
            r = n ? e.clientY : e.touches?.[0].clientY;
          return { x: o - (t?.left ?? 0), y: r - (t?.top ?? 0) };
        },
        yo = (e, t, n, o, r) => {
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
                  ...co(t),
                };
              })
            : null;
        };
      function mo({
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
      function vo(e, t) {
        return e >= 0 ? 0.5 * e : 25 * t * Math.sqrt(-e);
      }
      function xo({ pos: e, x1: t, y1: n, x2: o, y2: r, c: i }) {
        switch (e) {
          case Sn.Left:
            return [t - vo(t - o, i), n];
          case Sn.Right:
            return [t + vo(o - t, i), n];
          case Sn.Top:
            return [t, n - vo(n - r, i)];
          case Sn.Bottom:
            return [t, n + vo(r - n, i)];
        }
      }
      function wo({
        sourceX: e,
        sourceY: t,
        sourcePosition: n = Sn.Bottom,
        targetX: o,
        targetY: r,
        targetPosition: i = Sn.Top,
        curvature: s = 0.25,
      }) {
        const [a, l] = xo({ pos: n, x1: e, y1: t, x2: o, y2: r, c: s }),
          [c, u] = xo({ pos: i, x1: o, y1: r, x2: e, y2: t, c: s }),
          [d, f, h, p] = mo({
            sourceX: e,
            sourceY: t,
            targetX: o,
            targetY: r,
            sourceControlX: a,
            sourceControlY: l,
            targetControlX: c,
            targetControlY: u,
          });
        return [`M${e},${t} C${a},${l} ${c},${u} ${o},${r}`, d, f, h, p];
      }
      function bo({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
        const r = Math.abs(n - e) / 2,
          i = n < e ? n + r : n - r,
          s = Math.abs(o - t) / 2;
        return [i, o < t ? o + s : o - s, r, s];
      }
      function Eo({
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
      function So({
        sourceNode: e,
        targetNode: t,
        width: n,
        height: o,
        transform: r,
      }) {
        const i = Xn(Fn(e), Fn(t));
        i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
        const s = {
          x: -r[0] / r[2],
          y: -r[1] / r[2],
          width: n / r[2],
          height: o / r[2],
        };
        return Wn(s, Zn(i)) > 0;
      }
      const _o = ({ source: e, sourceHandle: t, target: n, targetHandle: o }) =>
          `xy-edge__${e}${t || ""}-${n}${o || ""}`,
        Co = (e, t) => {
          if (!e.source || !e.target) return Qn("006", pn.error006()), t;
          let n;
          return (
            (n = kn(e) ? { ...e } : { ...e, id: _o(e) }),
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
      function ko({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
        const [r, i, s, a] = bo({
          sourceX: e,
          sourceY: t,
          targetX: n,
          targetY: o,
        });
        return [`M ${e},${t}L ${n},${o}`, r, i, s, a];
      }
      const Mo = {
          [Sn.Left]: { x: -1, y: 0 },
          [Sn.Right]: { x: 1, y: 0 },
          [Sn.Top]: { x: 0, y: -1 },
          [Sn.Bottom]: { x: 0, y: 1 },
        },
        No = ({ source: e, sourcePosition: t = Sn.Bottom, target: n }) =>
          t === Sn.Left || t === Sn.Right
            ? e.x < n.x
              ? { x: 1, y: 0 }
              : { x: -1, y: 0 }
            : e.y < n.y
              ? { x: 0, y: 1 }
              : { x: 0, y: -1 },
        Po = (e, t) =>
          Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      function Ao({
        sourceX: e,
        sourceY: t,
        sourcePosition: n = Sn.Bottom,
        targetX: o,
        targetY: r,
        targetPosition: i = Sn.Top,
        borderRadius: s = 5,
        centerX: a,
        centerY: l,
        offset: c = 20,
      }) {
        const [u, d, f, h, p] = (function ({
            source: e,
            sourcePosition: t = Sn.Bottom,
            target: n,
            targetPosition: o = Sn.Top,
            center: r,
            offset: i,
          }) {
            const s = Mo[t],
              a = Mo[o],
              l = { x: e.x + s.x * i, y: e.y + s.y * i },
              c = { x: n.x + a.x * i, y: n.y + a.y * i },
              u = No({ source: l, sourcePosition: t, target: c }),
              d = 0 !== u.x ? "x" : "y",
              f = u[d];
            let h,
              p,
              g = [];
            const y = { x: 0, y: 0 },
              m = { x: 0, y: 0 },
              [v, x, w, b] = bo({
                sourceX: e.x,
                sourceY: e.y,
                targetX: n.x,
                targetY: n.y,
              });
            if (s[d] * a[d] == -1) {
              (h = r.x ?? v), (p = r.y ?? x);
              const e = [
                  { x: h, y: l.y },
                  { x: h, y: c.y },
                ],
                t = [
                  { x: l.x, y: p },
                  { x: c.x, y: p },
                ];
              g = s[d] === f ? ("x" === d ? e : t) : "x" === d ? t : e;
            } else {
              const r = [{ x: l.x, y: c.y }],
                u = [{ x: c.x, y: l.y }];
              if (
                ((g = "x" === d ? (s.x === f ? u : r) : s.y === f ? r : u),
                t === o)
              ) {
                const t = Math.abs(e[d] - n[d]);
                if (t <= i) {
                  const o = Math.min(i - 1, i - t);
                  s[d] === f
                    ? (y[d] = (l[d] > e[d] ? -1 : 1) * o)
                    : (m[d] = (c[d] > n[d] ? -1 : 1) * o);
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
              const v = { x: l.x + y.x, y: l.y + y.y },
                x = { x: c.x + m.x, y: c.y + m.y };
              Math.max(Math.abs(v.x - g[0].x), Math.abs(x.x - g[0].x)) >=
              Math.max(Math.abs(v.y - g[0].y), Math.abs(x.y - g[0].y))
                ? ((h = (v.x + x.x) / 2), (p = g[0].y))
                : ((h = g[0].x), (p = (v.y + x.y) / 2));
            }
            return [
              [
                e,
                { x: l.x + y.x, y: l.y + y.y },
                ...g,
                { x: c.x + m.x, y: c.y + m.y },
                n,
              ],
              h,
              p,
              w,
              b,
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
                      const r = Math.min(Po(e, t) / 2, Po(t, n) / 2, o),
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
        return [g, d, f, h, p];
      }
      function Oo(e) {
        return (
          e &&
          !(!e.internals.handleBounds && !e.handles?.length) &&
          !!(e.measured.width || e.width || e.initialWidth)
        );
      }
      function Io(e) {
        const { sourceNode: t, targetNode: n } = e;
        if (!Oo(t) || !Oo(n)) return null;
        const o = t.internals.handleBounds || Bo(t.handles),
          r = n.internals.handleBounds || Bo(n.handles),
          i = jo(o?.source ?? [], e.sourceHandle),
          s = jo(
            e.connectionMode === mn.Strict
              ? (r?.target ?? [])
              : (r?.target ?? []).concat(r?.source ?? []),
            e.targetHandle,
          );
        if (!i || !s)
          return (
            e.onError?.(
              "008",
              pn.error008(i ? "target" : "source", {
                id: e.id,
                sourceHandle: e.sourceHandle,
                targetHandle: e.targetHandle,
              }),
            ),
            null
          );
        const a = i?.position || Sn.Bottom,
          l = s?.position || Sn.Top,
          c = Do(t, i, a),
          u = Do(n, s, l);
        return {
          sourceX: c.x,
          sourceY: c.y,
          targetX: u.x,
          targetY: u.y,
          sourcePosition: a,
          targetPosition: l,
        };
      }
      function Bo(e) {
        if (!e) return null;
        const t = [],
          n = [];
        for (const o of e)
          (o.width = o.width ?? 1),
            (o.height = o.height ?? 1),
            "source" === o.type ? t.push(o) : "target" === o.type && n.push(o);
        return { source: t, target: n };
      }
      function Do(e, t, n = Sn.Left, o = !1) {
        const r = (t?.x ?? 0) + e.internals.positionAbsolute.x,
          i = (t?.y ?? 0) + e.internals.positionAbsolute.y,
          { width: s, height: a } = t ?? io(e);
        if (o) return { x: r + s / 2, y: i + a / 2 };
        switch (t?.position ?? n) {
          case Sn.Top:
            return { x: r + s / 2, y: i };
          case Sn.Right:
            return { x: r + s, y: i + a / 2 };
          case Sn.Bottom:
            return { x: r + s / 2, y: i + a };
          case Sn.Left:
            return { x: r, y: i + a / 2 };
        }
      }
      function jo(e, t) {
        return (e && (t ? e.find((e) => e.id === t) : e[0])) || null;
      }
      function zo(e, t) {
        if (!e) return "";
        if ("string" == typeof e) return e;
        return `${t ? `${t}__` : ""}${Object.keys(e)
          .sort()
          .map((t) => `${t}=${e[t]}`)
          .join("&")}`;
      }
      function Ro(
        e,
        { id: t, defaultColor: n, defaultMarkerStart: o, defaultMarkerEnd: r },
      ) {
        const i = new Set();
        return e
          .reduce(
            (e, s) => (
              [s.markerStart || o, s.markerEnd || r].forEach((o) => {
                if (o && "object" == typeof o) {
                  const r = zo(o, t);
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
      const Lo = {
          nodeOrigin: [0, 0],
          nodeExtent: gn,
          elevateNodesOnSelect: !0,
          defaults: {},
        },
        $o = { ...Lo, checkEquality: !0 };
      function To(e, t) {
        const n = { ...e };
        for (const e in t) void 0 !== t[e] && (n[e] = t[e]);
        return n;
      }
      function Vo(e, t, n) {
        const o = To(Lo, n);
        for (const n of e.values())
          if (n.parentId) Xo(n, e, t, o);
          else {
            const e = Pn(n, o.nodeOrigin),
              t = ro(n.extent) ? n.extent : o.nodeExtent,
              r = $n(e, t, io(n));
            n.internals.positionAbsolute = r;
          }
      }
      function Ho(e, t, n, o) {
        const r = To($o, o),
          i = new Map(t),
          s = r?.elevateNodesOnSelect ? 1e3 : 0;
        t.clear(), n.clear();
        for (const a of e) {
          let e = i.get(a.id);
          if (r.checkEquality && a === e?.internals.userNode) t.set(a.id, e);
          else {
            const n = Pn(a, r.nodeOrigin),
              o = ro(a.extent) ? a.extent : r.nodeExtent,
              i = $n(n, o, io(a));
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
                z: qo(a, s),
                userNode: a,
              },
            }),
              t.set(a.id, e);
          }
          a.parentId && Xo(e, t, n, o);
        }
      }
      function Xo(e, t, n, o) {
        const {
            elevateNodesOnSelect: r,
            nodeOrigin: i,
            nodeExtent: s,
          } = To(Lo, o),
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
            z: f,
          } = (function (e, t, n, o, r) {
            const { x: i, y: s } = t.internals.positionAbsolute,
              a = io(e),
              l = Pn(e, n),
              c = ro(e.extent) ? $n(l, e.extent, a) : l;
            let u = $n({ x: i + c.x, y: s + c.y }, o, a);
            "parent" === e.extent && (u = Tn(u, a, t));
            const d = qo(e, r),
              f = t.internals.z ?? 0;
            return { x: u.x, y: u.y, z: f > d ? f : d };
          })(e, l, i, s, c),
          { positionAbsolute: h } = e.internals,
          p = u !== h.x || d !== h.y;
        (p || f !== e.internals.z) &&
          (e.internals = {
            ...e.internals,
            positionAbsolute: p ? { x: u, y: d } : h,
            z: f,
          });
      }
      function qo(e, t) {
        return (Gn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
      }
      function Zo(e, t, n, o = [0, 0]) {
        const r = [],
          i = new Map();
        for (const n of e) {
          const e = t.get(n.parentId);
          if (!e) continue;
          const o = i.get(n.parentId)?.expandedRect ?? Yn(e),
            r = Un(o, n.rect);
          i.set(n.parentId, { expandedRect: r, parent: e });
        }
        return (
          i.size > 0 &&
            i.forEach(({ expandedRect: t, parent: i }, s) => {
              const a = i.internals.positionAbsolute,
                l = io(i),
                c = i.origin ?? o,
                u = t.x < a.x ? Math.round(Math.abs(a.x - t.x)) : 0,
                d = t.y < a.y ? Math.round(Math.abs(a.y - t.y)) : 0,
                f = Math.max(l.width, Math.round(t.width)),
                h = Math.max(l.height, Math.round(t.height)),
                p = (f - l.width) * c[0],
                g = (h - l.height) * c[1];
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
                      width: f + (u ? c[0] * u - p : 0),
                      height: h + (d ? c[1] * d - g : 0),
                    },
                  });
            }),
          r
        );
      }
      function Yo(e, t, n, o, r, i) {
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
              const s = co(o.nodeElement),
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
                const f = o.nodeElement.getBoundingClientRect(),
                  h = ro(e.extent) ? e.extent : i;
                let { positionAbsolute: p } = e.internals;
                e.parentId && "parent" === e.extent
                  ? (p = Tn(p, s, t.get(e.parentId)))
                  : h && (p = $n(p, h, s)),
                  (e.measured = s),
                  (e.internals = {
                    ...e.internals,
                    positionAbsolute: p,
                    handleBounds: {
                      source: yo("source", o.nodeElement, f, u, e.id),
                      target: yo("target", o.nodeElement, f, u, e.id),
                    },
                  }),
                  e.parentId && Xo(e, t, n, { nodeOrigin: r }),
                  (a = !0),
                  c &&
                    (l.push({ id: e.id, type: "dimensions", dimensions: s }),
                    e.expandParent &&
                      e.parentId &&
                      d.push({
                        id: e.id,
                        parentId: e.parentId,
                        rect: Yn(e, r),
                      }));
              }
            }
        }
        if (d.length > 0) {
          const e = Zo(d, t, n, r);
          l.push(...e);
        }
        return { changes: l, updatedInternals: a };
      }
      async function Fo({
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
      function Uo(e, t, n) {
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
      function Wo(e, t) {
        if (!e.parentId) return !1;
        const n = t.get(e.parentId);
        return !!n && (!!n.selected || Wo(n, t));
      }
      function Ko(e, t, n) {
        let o = e;
        do {
          if (o?.matches(t)) return !0;
          if (o === n) return !1;
          o = o.parentElement;
        } while (o);
        return !1;
      }
      function Go({
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
      function Qo({
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
          f = null,
          h = !1;
        return {
          update: function ({
            noDragClassName: p,
            handleSelector: g,
            domNode: y,
            isSelectable: m,
            nodeId: v,
            nodeClickDistance: x = 0,
          }) {
            function w({ x: e, y: n }, r) {
              const {
                nodeLookup: s,
                nodeExtent: l,
                snapGrid: c,
                snapToGrid: u,
                nodeOrigin: d,
                onNodeDrag: f,
                onSelectionDrag: h,
                onError: p,
                updateNodePositions: g,
              } = t();
              i = { x: e, y: n };
              let y = !1,
                m = { x: 0, y: 0, x2: 0, y2: 0 };
              if (a.size > 1 && l) {
                const e = On(a);
                m = qn(e);
              }
              for (const [t, o] of a) {
                if (!s.has(t)) continue;
                let r = { x: e - o.distance.x, y: n - o.distance.y };
                u && (r = Jn(r, c));
                let i = [
                  [l[0][0], l[0][1]],
                  [l[1][0], l[1][1]],
                ];
                if (a.size > 1 && l && !o.extent) {
                  const { positionAbsolute: e } = o.internals,
                    t = e.x - m.x + l[0][0],
                    n = e.x + o.measured.width - m.x2 + l[1][0];
                  i = [
                    [t, e.y - m.y + l[0][1]],
                    [n, e.y + o.measured.height - m.y2 + l[1][1]],
                  ];
                }
                const { position: f, positionAbsolute: h } = zn({
                  nodeId: t,
                  nextPosition: r,
                  nodeLookup: s,
                  nodeExtent: i,
                  nodeOrigin: d,
                  onError: p,
                });
                (y = y || o.position.x !== f.x || o.position.y !== f.y),
                  (o.position = f),
                  (o.internals.positionAbsolute = h);
              }
              if (y && (g(a, !0), r && (o || f || (!v && h)))) {
                const [e, t] = Go({ nodeId: v, dragItems: a, nodeLookup: s });
                o?.(r, a, e, t), f?.(r, e, t), v || h?.(r, t);
              }
            }
            async function b() {
              if (!u) return;
              const { transform: e, panBy: n, autoPanSpeed: o } = t(),
                [r, a] = Hn(c, u, o);
              (0 === r && 0 === a) ||
                ((i.x = (i.x ?? 0) - r / e[2]),
                (i.y = (i.y ?? 0) - a / e[2]),
                (await n({ x: r, y: a })) && w(i, null)),
                (s = requestAnimationFrame(b));
            }
            function E(o) {
              const {
                nodeLookup: r,
                multiSelectionActive: s,
                nodesDraggable: l,
                transform: c,
                snapGrid: f,
                snapToGrid: h,
                selectNodesOnDrag: p,
                onNodeDragStart: g,
                onSelectionDragStart: y,
                unselectNodesAndEdges: x,
              } = t();
              (d = !0),
                (p && m) || s || !v || r.get(v)?.selected || x(),
                m && p && v && e?.(v);
              const w = lo(o.sourceEvent, {
                transform: c,
                snapGrid: f,
                snapToGrid: h,
                containerBounds: u,
              });
              if (
                ((i = w),
                (a = (function (e, t, n, o) {
                  const r = new Map();
                  for (const [i, s] of e)
                    if (
                      (s.selected || s.id === o) &&
                      (!s.parentId || !Wo(s, e)) &&
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
                })(r, l, w, v)),
                a.size > 0 && (n || g || (!v && y)))
              ) {
                const [e, t] = Go({ nodeId: v, dragItems: a, nodeLookup: r });
                n?.(o.sourceEvent, a, e, t),
                  g?.(o.sourceEvent, e, t),
                  v || y?.(o.sourceEvent, t);
              }
            }
            f = Ee(y);
            const S = ze()
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
                  (h = !1),
                  0 === o && E(e);
                const l = lo(e.sourceEvent, {
                  transform: r,
                  snapGrid: s,
                  snapToGrid: a,
                  containerBounds: u,
                });
                (i = l), (c = go(e.sourceEvent, u));
              })
              .on("drag", (e) => {
                const {
                    autoPanOnNodeDrag: n,
                    transform: o,
                    snapGrid: r,
                    snapToGrid: s,
                    nodeDragThreshold: f,
                    nodeLookup: p,
                  } = t(),
                  g = lo(e.sourceEvent, {
                    transform: o,
                    snapGrid: r,
                    snapToGrid: s,
                    containerBounds: u,
                  });
                if (
                  ((("touchmove" === e.sourceEvent.type &&
                    e.sourceEvent.touches.length > 1) ||
                    (v && !p.has(v))) &&
                    (h = !0),
                  !h)
                ) {
                  if ((!l && n && d && ((l = !0), b()), !d)) {
                    const t = g.xSnapped - (i.x ?? 0),
                      n = g.ySnapped - (i.y ?? 0);
                    Math.sqrt(t * t + n * n) > f && E(e);
                  }
                  (i.x !== g.xSnapped || i.y !== g.ySnapped) &&
                    a &&
                    d &&
                    ((c = go(e.sourceEvent, u)), w(g, e.sourceEvent));
                }
              })
              .on("end", (e) => {
                if (
                  d &&
                  !h &&
                  ((l = !1), (d = !1), cancelAnimationFrame(s), a.size > 0)
                ) {
                  const {
                    nodeLookup: n,
                    updateNodePositions: o,
                    onNodeDragStop: i,
                    onSelectionDragStop: s,
                  } = t();
                  if ((o(a, !1), r || i || (!v && s))) {
                    const [t, o] = Go({
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
                  !e.button && (!p || !Ko(t, `.${p}`, y)) && (!g || Ko(t, g, y))
                );
              });
            f.call(S);
          },
          destroy: function () {
            f?.on(".drag", null);
          },
        };
      }
      const Jo = 250;
      function er(e, t, n, o) {
        let r = [],
          i = 1 / 0;
        const s = (function (e, t, n) {
          const o = [],
            r = { x: e.x - n, y: e.y - n, width: 2 * n, height: 2 * n };
          for (const e of t.values()) Wn(r, Yn(e)) > 0 && o.push(e);
          return o;
        })(e, n, t + Jo);
        for (const n of s) {
          const s = [
            ...(n.internals.handleBounds?.source ?? []),
            ...(n.internals.handleBounds?.target ?? []),
          ];
          for (const a of s) {
            if (o.nodeId === a.nodeId && o.type === a.type && o.id === a.id)
              continue;
            const { x: s, y: l } = Do(n, a, a.position, !0),
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
      function tr(e, t, n, o, r, i = !1) {
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
        return l && i ? { ...l, ...Do(s, l, l.position, !0) } : l;
      }
      function nr(e, t) {
        return (
          e ||
          (t?.classList.contains("target")
            ? "target"
            : t?.classList.contains("source")
              ? "source"
              : null)
        );
      }
      const or = () => !0;
      function rr(
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
          isValidConnection: c = or,
          nodeLookup: u,
        },
      ) {
        const d = "target" === i,
          f = t
            ? s.querySelector(
                `.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`,
              )
            : null,
          { x: h, y: p } = go(e),
          g = s.elementFromPoint(h, p),
          y = g?.classList.contains(`${a}-flow__handle`) ? g : f,
          m = {
            handleDomNode: y,
            isValid: !1,
            connection: null,
            toHandle: null,
          };
        if (y) {
          const e = nr(void 0, y),
            t = y.getAttribute("data-nodeid"),
            i = y.getAttribute("data-handleid"),
            s = y.classList.contains("connectable"),
            a = y.classList.contains("connectableend");
          if (!t || !e) return m;
          const l = {
            source: d ? t : o,
            sourceHandle: d ? i : r,
            target: d ? o : t,
            targetHandle: d ? r : i,
          };
          m.connection = l;
          const f =
            s &&
            a &&
            (n === mn.Strict
              ? (d && "source" === e) || (!d && "target" === e)
              : t !== o || i !== r);
          (m.isValid = f && c(l)), (m.toHandle = tr(t, e, i, u, n, !1));
        }
        return m;
      }
      const ir = {
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
            panBy: f,
            cancelConnection: h,
            onConnectStart: p,
            onConnect: g,
            onConnectEnd: y,
            isValidConnection: m = or,
            onReconnectEnd: v,
            updateConnection: x,
            getTransform: w,
            getFromHandle: b,
            autoPanSpeed: E,
          },
        ) {
          const S = uo(e.target);
          let _,
            C = 0;
          const { x: k, y: M } = go(e),
            N = S?.elementFromPoint(k, M),
            P = nr(i, N),
            A = a?.getBoundingClientRect();
          if (!A || !P) return;
          const O = tr(r, P, o, l, t);
          if (!O) return;
          let I = go(e, A),
            B = !1,
            D = null,
            j = !1,
            z = null;
          function R() {
            if (!u || !A) return;
            const [e, t] = Hn(I, A, E);
            f({ x: e, y: t }), (C = requestAnimationFrame(R));
          }
          const L = { ...O, nodeId: r, type: P, position: O.position },
            $ = l.get(r),
            T = {
              inProgress: !0,
              isValid: null,
              from: Do($, L, Sn.Left, !0),
              fromHandle: L,
              fromPosition: L.position,
              fromNode: $,
              to: I,
              toHandle: null,
              toPosition: _n[L.position],
              toNode: null,
            };
          x(T);
          let V = T;
          function H(e) {
            if (!b() || !L) return void X(e);
            const i = w();
            (I = go(e, A)),
              (_ = er(eo(I, i, !1, [1, 1]), n, l, L)),
              B || (R(), (B = !0));
            const a = rr(e, {
              handle: _,
              connectionMode: t,
              fromNodeId: r,
              fromHandleId: o,
              fromType: s ? "target" : "source",
              isValidConnection: m,
              doc: S,
              lib: c,
              flowId: d,
              nodeLookup: l,
            });
            (z = a.handleDomNode),
              (D = a.connection),
              (j = (function (e, t) {
                let n = null;
                return t ? (n = !0) : e && !t && (n = !1), n;
              })(!!_, a.isValid));
            const u = {
              ...V,
              isValid: j,
              to: _ && j ? to({ x: _.x, y: _.y }, i) : I,
              toHandle: a.toHandle,
              toPosition:
                j && a.toHandle ? a.toHandle.position : _n[L.position],
              toNode: a.toHandle ? l.get(a.toHandle.nodeId) : null,
            };
            (j &&
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
          function X(e) {
            (_ || z) && D && j && g?.(D);
            const { inProgress: t, ...n } = V,
              o = { ...n, toPosition: V.toHandle ? V.toPosition : null };
            y?.(e, o),
              i && v?.(e, o),
              h(),
              cancelAnimationFrame(C),
              (B = !1),
              (j = !1),
              (D = null),
              (z = null),
              S.removeEventListener("mousemove", H),
              S.removeEventListener("mouseup", X),
              S.removeEventListener("touchmove", H),
              S.removeEventListener("touchend", X);
          }
          p?.(e, { nodeId: r, handleId: o, handleType: P }),
            S.addEventListener("mousemove", H),
            S.addEventListener("mouseup", X),
            S.addEventListener("touchmove", H),
            S.addEventListener("touchend", X);
        },
        isValid: rr,
      };
      function sr({
        domNode: e,
        panZoom: t,
        getTransform: n,
        getViewScale: o,
      }) {
        const r = Ee(e);
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
            const f = hn()
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
                      const f =
                          o() * Math.max(a[2], Math.log(a[2])) * (u ? -1 : 1),
                        h = { x: a[0] - c[0] * f, y: a[1] - c[1] * f },
                        p = [
                          [0, 0],
                          [i, s],
                        ];
                      t.setViewportConstrained(
                        { x: h.x, y: h.y, zoom: a[2] },
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
            r.call(f, {});
          },
          destroy: function () {
            r.on("zoom", null);
          },
          pointer: Se,
        };
      }
      const ar = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k,
        lr = (e) => ({ x: e.x, y: e.y, zoom: e.k }),
        cr = ({ x: e, y: t, zoom: n }) => nn.translate(e, t).scale(n),
        ur = (e, t) => e.target.closest(`.${t}`),
        dr = (e, t) => 2 === t && Array.isArray(e) && e.includes(2),
        fr = (e, t = 0, n = () => {}) => {
          const o = "number" == typeof t && t > 0;
          return o || n(), o ? e.transition().duration(t).on("end", n) : e;
        },
        hr = (e) => {
          const t = e.ctrlKey && oo() ? 10 : 1;
          return (
            -e.deltaY * (1 === e.deltaMode ? 0.05 : e.deltaMode ? 1 : 0.002) * t
          );
        };
      function pr({
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
          f = hn()
            .clickDistance(!Gn(o) || o < 0 ? 0 : o)
            .scaleExtent([t, n])
            .translateExtent(r),
          h = Ee(e).call(f);
        v(
          { x: i.x, y: i.y, zoom: Ln(i.zoom, t, n) },
          [
            [0, 0],
            [d.width, d.height],
          ],
          r,
        );
        const p = h.on("wheel.zoom"),
          g = h.on("dblclick.zoom");
        function y(e, t) {
          return h
            ? new Promise((n) => {
                f?.transform(
                  fr(h, t?.duration, () => n(!0)),
                  e,
                );
              })
            : Promise.resolve(!1);
        }
        function m() {
          f.on("zoom", null);
        }
        async function v(e, t, n) {
          const o = cr(e),
            r = f?.constrain()(o, t, n);
          return r && (await y(r)), new Promise((e) => e(r));
        }
        return (
          f.wheelDelta(hr),
          {
            update: function ({
              noWheelClassName: e,
              noPanClassName: t,
              onPaneContextMenu: n,
              userSelectionActive: o,
              panOnScroll: r,
              panOnDrag: i,
              panOnScrollMode: d,
              panOnScrollSpeed: y,
              preventScrolling: v,
              zoomOnPinch: x,
              zoomOnScroll: w,
              zoomOnDoubleClick: b,
              zoomActivationKeyPressed: E,
              lib: S,
              onTransformChange: _,
            }) {
              o && !u.isZoomingOrPanning && m();
              const C =
                r && !E && !o
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
                        if (ur(u, t)) return !1;
                        u.preventDefault(), u.stopImmediatePropagation();
                        const d = n.property("__zoom").k || 1;
                        if (u.ctrlKey && s) {
                          const e = Se(u),
                            t = hr(u),
                            r = d * Math.pow(2, t);
                          return void o.scaleTo(n, r, e, u);
                        }
                        const f = 1 === u.deltaMode ? 20 : 1;
                        let h = r === vn.Vertical ? 0 : u.deltaX * f,
                          p = r === vn.Horizontal ? 0 : u.deltaY * f;
                        !oo() &&
                          u.shiftKey &&
                          r !== vn.Vertical &&
                          ((h = u.deltaY * f), (p = 0)),
                          o.translateBy(n, (-h / d) * i, (-p / d) * i, {
                            internal: !0,
                          });
                        const g = lr(n.property("__zoom"));
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
                      d3Selection: h,
                      d3Zoom: f,
                      panOnScrollMode: d,
                      panOnScrollSpeed: y,
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
                          ur(o, e)
                        )
                          return null;
                        o.preventDefault(), n.call(this, o, r);
                      };
                    })({
                      noWheelClassName: e,
                      preventScrolling: v,
                      d3ZoomHandler: p,
                    });
              if ((h.on("wheel.zoom", C, { passive: !1 }), !o)) {
                const e = (function ({
                  zoomPanValues: e,
                  onDraggingChange: t,
                  onPanZoomStart: n,
                }) {
                  return (o) => {
                    if (o.sourceEvent?.internal) return;
                    const r = lr(o.transform);
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
                f.on("start", e);
                const t = (function ({
                  zoomPanValues: e,
                  panOnDrag: t,
                  onPaneContextMenu: n,
                  onTransformChange: o,
                  onPanZoom: r,
                }) {
                  return (i) => {
                    (e.usedRightMouseButton = !(
                      !n || !dr(t, e.mouseButton ?? 0)
                    )),
                      i.sourceEvent?.sync ||
                        o([i.transform.x, i.transform.y, i.transform.k]),
                      r &&
                        !i.sourceEvent?.internal &&
                        r?.(i.sourceEvent, lr(i.transform));
                  };
                })({
                  zoomPanValues: u,
                  panOnDrag: i,
                  onPaneContextMenu: !!n,
                  onPanZoom: s,
                  onTransformChange: _,
                });
                f.on("zoom", t);
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
                        dr(t, e.mouseButton ?? 0) &&
                        !e.usedRightMouseButton &&
                        s.sourceEvent &&
                        i(s.sourceEvent),
                      (e.usedRightMouseButton = !1),
                      o(!1),
                      r && ar(e.prevViewport, s.transform))
                    ) {
                      const t = lr(s.transform);
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
                f.on("end", o);
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
                    f = n && u.ctrlKey;
                  if (
                    1 === u.button &&
                    "mousedown" === u.type &&
                    (ur(u, `${c}-flow__node`) || ur(u, `${c}-flow__edge`))
                  )
                    return !0;
                  if (!(o || d || r || i || n)) return !1;
                  if (s) return !1;
                  if (ur(u, a) && "wheel" === u.type) return !1;
                  if (
                    ur(u, l) &&
                    ("wheel" !== u.type || (r && "wheel" === u.type && !e))
                  )
                    return !1;
                  if (!n && u.ctrlKey && "wheel" === u.type) return !1;
                  if (!n && "touchstart" === u.type && u.touches?.length > 1)
                    return u.preventDefault(), !1;
                  if (!d && !r && !f && "wheel" === u.type) return !1;
                  if (!o && ("mousedown" === u.type || "touchstart" === u.type))
                    return !1;
                  if (
                    Array.isArray(o) &&
                    !o.includes(u.button) &&
                    "mousedown" === u.type
                  )
                    return !1;
                  const h =
                    (Array.isArray(o) && o.includes(u.button)) ||
                    !u.button ||
                    u.button <= 1;
                  return (!u.ctrlKey || "wheel" === u.type) && h;
                };
              })({
                zoomActivationKeyPressed: E,
                panOnDrag: i,
                zoomOnScroll: w,
                panOnScroll: r,
                zoomOnDoubleClick: b,
                zoomOnPinch: x,
                userSelectionActive: o,
                noPanClassName: t,
                noWheelClassName: e,
                lib: S,
              });
              f.filter(k),
                b ? h.on("dblclick.zoom", g) : h.on("dblclick.zoom", null);
            },
            destroy: m,
            setViewport: async function (e, t) {
              const n = cr(e);
              return await y(n, t), new Promise((e) => e(n));
            },
            setViewportConstrained: v,
            getViewport: function () {
              const e = h ? on(h.node()) : { x: 0, y: 0, k: 1 };
              return { x: e.x, y: e.y, zoom: e.k };
            },
            scaleTo: function (e, t) {
              return h
                ? new Promise((n) => {
                    f?.scaleTo(
                      fr(h, t?.duration, () => n(!0)),
                      e,
                    );
                  })
                : Promise.resolve(!1);
            },
            scaleBy: function (e, t) {
              return h
                ? new Promise((n) => {
                    f?.scaleBy(
                      fr(h, t?.duration, () => n(!0)),
                      e,
                    );
                  })
                : Promise.resolve(!1);
            },
            setScaleExtent: function (e) {
              f?.scaleExtent(e);
            },
            setTranslateExtent: function (e) {
              f?.translateExtent(e);
            },
            syncViewport: function (e) {
              if (h) {
                const t = cr(e),
                  n = h.property("__zoom");
                (n.k === e.zoom && n.x === e.x && n.y === e.y) ||
                  f?.transform(h, t, null, { sync: !0 });
              }
            },
            setClickDistance: function (e) {
              const t = !Gn(e) || e < 0 ? 0 : e;
              f?.clickDistance(t);
            },
          }
        );
      }
      var gr;
      !(function (e) {
        (e.Line = "line"), (e.Handle = "handle");
      })(gr || (gr = {}));
      function yr(e, t) {
        return Math.max(0, t - e);
      }
      function mr(e, t) {
        return Math.max(0, e - t);
      }
      function vr(e, t, n) {
        return Math.max(0, t - e, e - n);
      }
      function xr(e, t) {
        return e ? !t : t;
      }
      const wr = { width: 0, height: 0, x: 0, y: 0 },
        br = { ...wr, pointerX: 0, pointerY: 0, aspectRatio: 1 };
      function Er(e, t, n) {
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
      function Sr({
        domNode: e,
        nodeId: t,
        getStoreItems: n,
        onChange: o,
        onEnd: r,
      }) {
        const i = Ee(e);
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
            let f = { ...wr },
              h = { ...br };
            const p = (function (e) {
              return {
                isHorizontal: e.includes("right") || e.includes("left"),
                isVertical: e.includes("bottom") || e.includes("top"),
                affectsX: e.includes("left"),
                affectsY: e.includes("top"),
              };
            })(e);
            let g,
              y,
              m,
              v,
              x = null,
              w = [];
            const b = ze()
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
                const { xSnapped: u, ySnapped: d } = lo(e.sourceEvent, {
                  transform: r,
                  snapGrid: i,
                  snapToGrid: s,
                  containerBounds: x,
                });
                (f = {
                  width: g.measured.width ?? 0,
                  height: g.measured.height ?? 0,
                  x: g.position.x ?? 0,
                  y: g.position.y ?? 0,
                }),
                  (h = {
                    ...f,
                    pointerX: u,
                    pointerY: d,
                    aspectRatio: f.width / f.height,
                  }),
                  (y = void 0),
                  g.parentId &&
                    ("parent" === g.extent || g.expandParent) &&
                    ((y = o.get(g.parentId)),
                    (m =
                      y && "parent" === g.extent
                        ? (function (e) {
                            return [
                              [0, 0],
                              [e.measured.width, e.measured.height],
                            ];
                          })(y)
                        : void 0)),
                  (w = []),
                  (v = void 0);
                for (const [e, n] of o)
                  if (
                    n.parentId === t &&
                    (w.push({
                      id: e,
                      position: { ...n.position },
                      extent: n.extent,
                    }),
                    "parent" === n.extent || n.expandParent)
                  ) {
                    const e = Er(n, g, n.origin ?? a);
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
                l?.(e, { ...f });
              })
              .on("drag", (e) => {
                const {
                    transform: t,
                    snapGrid: r,
                    snapToGrid: i,
                    nodeOrigin: l,
                  } = n(),
                  u = lo(e.sourceEvent, {
                    transform: t,
                    snapGrid: r,
                    snapToGrid: i,
                    containerBounds: x,
                  }),
                  b = [];
                if (!g) return;
                const { x: E, y: S, width: _, height: C } = f,
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
                      f = u && d,
                      { xSnapped: h, ySnapped: p } = n,
                      {
                        minWidth: g,
                        maxWidth: y,
                        minHeight: m,
                        maxHeight: v,
                      } = o,
                      { x, y: w, width: b, height: E, aspectRatio: S } = e;
                    let _ = Math.floor(u ? h - e.pointerX : 0),
                      C = Math.floor(d ? p - e.pointerY : 0);
                    const k = b + (l ? -_ : _),
                      M = E + (c ? -C : C),
                      N = -i[0] * b,
                      P = -i[1] * E;
                    let A = vr(k, g, y),
                      O = vr(M, m, v);
                    if (s) {
                      let e = 0,
                        t = 0;
                      l && _ < 0
                        ? (e = yr(x + _ + N, s[0][0]))
                        : !l && _ > 0 && (e = mr(x + k + N, s[1][0])),
                        c && C < 0
                          ? (t = yr(w + C + P, s[0][1]))
                          : !c && C > 0 && (t = mr(w + M + P, s[1][1])),
                        (A = Math.max(A, e)),
                        (O = Math.max(O, t));
                    }
                    if (a) {
                      let e = 0,
                        t = 0;
                      l && _ > 0
                        ? (e = mr(x + _, a[0][0]))
                        : !l && _ < 0 && (e = yr(x + k, a[1][0])),
                        c && C > 0
                          ? (t = mr(w + C, a[0][1]))
                          : !c && C < 0 && (t = yr(w + M, a[1][1])),
                        (A = Math.max(A, e)),
                        (O = Math.max(O, t));
                    }
                    if (r) {
                      if (u) {
                        const e = vr(k / S, m, v) * S;
                        if (((A = Math.max(A, e)), s)) {
                          let e = 0;
                          (e =
                            (!l && !c) || (l && !c && f)
                              ? mr(w + P + k / S, s[1][1]) * S
                              : yr(w + P + (l ? _ : -_) / S, s[0][1]) * S),
                            (A = Math.max(A, e));
                        }
                        if (a) {
                          let e = 0;
                          (e =
                            (!l && !c) || (l && !c && f)
                              ? yr(w + k / S, a[1][1]) * S
                              : mr(w + (l ? _ : -_) / S, a[0][1]) * S),
                            (A = Math.max(A, e));
                        }
                      }
                      if (d) {
                        const e = vr(M * S, g, y) / S;
                        if (((O = Math.max(O, e)), s)) {
                          let e = 0;
                          (e =
                            (!l && !c) || (c && !l && f)
                              ? mr(x + M * S + N, s[1][0]) / S
                              : yr(x + (c ? C : -C) * S + N, s[0][0]) / S),
                            (O = Math.max(O, e));
                        }
                        if (a) {
                          let e = 0;
                          (e =
                            (!l && !c) || (c && !l && f)
                              ? yr(x + M * S, a[1][0]) / S
                              : mr(x + (c ? C : -C) * S, a[0][0]) / S),
                            (O = Math.max(O, e));
                        }
                      }
                    }
                    (C += C < 0 ? O : -O),
                      (_ += _ < 0 ? A : -A),
                      r &&
                        (f
                          ? k > M * S
                            ? (C = (xr(l, c) ? -_ : _) / S)
                            : (_ = (xr(l, c) ? -C : C) * S)
                          : u
                            ? ((C = _ / S), (c = l))
                            : ((_ = C * S), (l = c)));
                    const I = l ? x + _ : x,
                      B = c ? w + C : w;
                    return {
                      width: b + (l ? -_ : _),
                      height: E + (c ? -C : C),
                      x: i[0] * _ * (l ? -1 : 1) + I,
                      y: i[1] * C * (c ? -1 : 1) + B,
                    };
                  })(h, p, u, s, a, M, m, v),
                  I = N !== _,
                  B = P !== C,
                  D = A !== E && I,
                  j = O !== S && B;
                if (!(D || j || I || B)) return;
                if (
                  (D || j || 1 === M[0] || 1 === M[1]) &&
                  ((k.x = D ? A : f.x),
                  (k.y = j ? O : f.y),
                  (f.x = k.x),
                  (f.y = k.y),
                  w.length > 0)
                ) {
                  const e = A - E,
                    t = O - S;
                  for (const n of w)
                    (n.position = {
                      x: n.position.x - e + M[0] * (N - _),
                      y: n.position.y - t + M[1] * (P - C),
                    }),
                      b.push(n);
                }
                if (
                  ((I || B) &&
                    ((k.width = I ? N : f.width),
                    (k.height = B ? P : f.height),
                    (f.width = k.width),
                    (f.height = k.height)),
                  y && g.expandParent)
                ) {
                  const e = M[0] * (k.width ?? 0);
                  k.x && k.x < e && ((f.x = e), (h.x = h.x - (k.x - e)));
                  const t = M[1] * (k.height ?? 0);
                  k.y && k.y < t && ((f.y = t), (h.y = h.y - (k.y - t)));
                }
                const z = (function ({
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
                    width: f.width,
                    prevWidth: _,
                    height: f.height,
                    prevHeight: C,
                    affectsX: p.affectsX,
                    affectsY: p.affectsY,
                  }),
                  R = { ...f, direction: z },
                  L = d?.(e, R);
                !1 !== L && (c?.(e, R), o(k, b));
              })
              .on("end", (e) => {
                u?.(e, { ...f }), r?.();
              });
            i.call(b);
          },
          destroy: function () {
            i.on(".drag", null);
          },
        };
      }
    },
    74761: (e, t, n) => {
      "use strict";
      const o = n(71944),
        r = n(61621),
        i =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (t.hp = l), (t.IS = 50);
      const s = 2147483647;
      function a(e) {
        if (e > s)
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"',
          );
        const t = new Uint8Array(e);
        return Object.setPrototypeOf(t, l.prototype), t;
      }
      function l(e, t, n) {
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number',
            );
          return d(e);
        }
        return c(e, t, n);
      }
      function c(e, t, n) {
        if ("string" == typeof e)
          return (function (e, t) {
            ("string" == typeof t && "" !== t) || (t = "utf8");
            if (!l.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
            const n = 0 | g(e, t);
            let o = a(n);
            const r = o.write(e, t);
            r !== n && (o = o.slice(0, r));
            return o;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (W(e, Uint8Array)) {
              const t = new Uint8Array(e);
              return h(t.buffer, t.byteOffset, t.byteLength);
            }
            return f(e);
          })(e);
        if (null == e)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof e,
          );
        if (W(e, ArrayBuffer) || (e && W(e.buffer, ArrayBuffer)))
          return h(e, t, n);
        if (
          "undefined" != typeof SharedArrayBuffer &&
          (W(e, SharedArrayBuffer) || (e && W(e.buffer, SharedArrayBuffer)))
        )
          return h(e, t, n);
        if ("number" == typeof e)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number',
          );
        const o = e.valueOf && e.valueOf();
        if (null != o && o !== e) return l.from(o, t, n);
        const r = (function (e) {
          if (l.isBuffer(e)) {
            const t = 0 | p(e.length),
              n = a(t);
            return 0 === n.length || e.copy(n, 0, 0, t), n;
          }
          if (void 0 !== e.length)
            return "number" != typeof e.length || K(e.length) ? a(0) : f(e);
          if ("Buffer" === e.type && Array.isArray(e.data)) return f(e.data);
        })(e);
        if (r) return r;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof e[Symbol.toPrimitive]
        )
          return l.from(e[Symbol.toPrimitive]("string"), t, n);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof e,
        );
      }
      function u(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be of type number');
        if (e < 0)
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"',
          );
      }
      function d(e) {
        return u(e), a(e < 0 ? 0 : 0 | p(e));
      }
      function f(e) {
        const t = e.length < 0 ? 0 : 0 | p(e.length),
          n = a(t);
        for (let o = 0; o < t; o += 1) n[o] = 255 & e[o];
        return n;
      }
      function h(e, t, n) {
        if (t < 0 || e.byteLength < t)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (n || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let o;
        return (
          (o =
            void 0 === t && void 0 === n
              ? new Uint8Array(e)
              : void 0 === n
                ? new Uint8Array(e, t)
                : new Uint8Array(e, t, n)),
          Object.setPrototypeOf(o, l.prototype),
          o
        );
      }
      function p(e) {
        if (e >= s)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              s.toString(16) +
              " bytes",
          );
        return 0 | e;
      }
      function g(e, t) {
        if (l.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || W(e, ArrayBuffer)) return e.byteLength;
        if ("string" != typeof e)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e,
          );
        const n = e.length,
          o = arguments.length > 2 && !0 === arguments[2];
        if (!o && 0 === n) return 0;
        let r = !1;
        for (;;)
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
              return Y(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return F(e).length;
            default:
              if (r) return o ? -1 : Y(e).length;
              (t = ("" + t).toLowerCase()), (r = !0);
          }
      }
      function y(e, t, n) {
        let o = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
          return "";
        if ((n >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return A(this, t, n);
            case "utf8":
            case "utf-8":
              return k(this, t, n);
            case "ascii":
              return N(this, t, n);
            case "latin1":
            case "binary":
              return P(this, t, n);
            case "base64":
              return C(this, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return O(this, t, n);
            default:
              if (o) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (o = !0);
          }
      }
      function m(e, t, n) {
        const o = e[t];
        (e[t] = e[n]), (e[n] = o);
      }
      function v(e, t, n, o, r) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof n
            ? ((o = n), (n = 0))
            : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
          K((n = +n)) && (n = r ? 0 : e.length - 1),
          n < 0 && (n = e.length + n),
          n >= e.length)
        ) {
          if (r) return -1;
          n = e.length - 1;
        } else if (n < 0) {
          if (!r) return -1;
          n = 0;
        }
        if (("string" == typeof t && (t = l.from(t, o)), l.isBuffer(t)))
          return 0 === t.length ? -1 : x(e, t, n, o, r);
        if ("number" == typeof t)
          return (
            (t &= 255),
            "function" == typeof Uint8Array.prototype.indexOf
              ? r
                ? Uint8Array.prototype.indexOf.call(e, t, n)
                : Uint8Array.prototype.lastIndexOf.call(e, t, n)
              : x(e, [t], n, o, r)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function x(e, t, n, o, r) {
        let i,
          s = 1,
          a = e.length,
          l = t.length;
        if (
          void 0 !== o &&
          ("ucs2" === (o = String(o).toLowerCase()) ||
            "ucs-2" === o ||
            "utf16le" === o ||
            "utf-16le" === o)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (s = 2), (a /= 2), (l /= 2), (n /= 2);
        }
        function c(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (r) {
          let o = -1;
          for (i = n; i < a; i++)
            if (c(e, i) === c(t, -1 === o ? 0 : i - o)) {
              if ((-1 === o && (o = i), i - o + 1 === l)) return o * s;
            } else -1 !== o && (i -= i - o), (o = -1);
        } else
          for (n + l > a && (n = a - l), i = n; i >= 0; i--) {
            let n = !0;
            for (let o = 0; o < l; o++)
              if (c(e, i + o) !== c(t, o)) {
                n = !1;
                break;
              }
            if (n) return i;
          }
        return -1;
      }
      function w(e, t, n, o) {
        n = Number(n) || 0;
        const r = e.length - n;
        o ? (o = Number(o)) > r && (o = r) : (o = r);
        const i = t.length;
        let s;
        for (o > i / 2 && (o = i / 2), s = 0; s < o; ++s) {
          const o = parseInt(t.substr(2 * s, 2), 16);
          if (K(o)) return s;
          e[n + s] = o;
        }
        return s;
      }
      function b(e, t, n, o) {
        return U(Y(t, e.length - n), e, n, o);
      }
      function E(e, t, n, o) {
        return U(
          (function (e) {
            const t = [];
            for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
            return t;
          })(t),
          e,
          n,
          o,
        );
      }
      function S(e, t, n, o) {
        return U(F(t), e, n, o);
      }
      function _(e, t, n, o) {
        return U(
          (function (e, t) {
            let n, o, r;
            const i = [];
            for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
              (n = e.charCodeAt(s)),
                (o = n >> 8),
                (r = n % 256),
                i.push(r),
                i.push(o);
            return i;
          })(t, e.length - n),
          e,
          n,
          o,
        );
      }
      function C(e, t, n) {
        return 0 === t && n === e.length
          ? o.fromByteArray(e)
          : o.fromByteArray(e.slice(t, n));
      }
      function k(e, t, n) {
        n = Math.min(e.length, n);
        const o = [];
        let r = t;
        for (; r < n; ) {
          const t = e[r];
          let i = null,
            s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
          if (r + s <= n) {
            let n, o, a, l;
            switch (s) {
              case 1:
                t < 128 && (i = t);
                break;
              case 2:
                (n = e[r + 1]),
                  128 == (192 & n) &&
                    ((l = ((31 & t) << 6) | (63 & n)), l > 127 && (i = l));
                break;
              case 3:
                (n = e[r + 1]),
                  (o = e[r + 2]),
                  128 == (192 & n) &&
                    128 == (192 & o) &&
                    ((l = ((15 & t) << 12) | ((63 & n) << 6) | (63 & o)),
                    l > 2047 && (l < 55296 || l > 57343) && (i = l));
                break;
              case 4:
                (n = e[r + 1]),
                  (o = e[r + 2]),
                  (a = e[r + 3]),
                  128 == (192 & n) &&
                    128 == (192 & o) &&
                    128 == (192 & a) &&
                    ((l =
                      ((15 & t) << 18) |
                      ((63 & n) << 12) |
                      ((63 & o) << 6) |
                      (63 & a)),
                    l > 65535 && l < 1114112 && (i = l));
            }
          }
          null === i
            ? ((i = 65533), (s = 1))
            : i > 65535 &&
              ((i -= 65536),
              o.push(((i >>> 10) & 1023) | 55296),
              (i = 56320 | (1023 & i))),
            o.push(i),
            (r += s);
        }
        return (function (e) {
          const t = e.length;
          if (t <= M) return String.fromCharCode.apply(String, e);
          let n = "",
            o = 0;
          for (; o < t; )
            n += String.fromCharCode.apply(String, e.slice(o, (o += M)));
          return n;
        })(o);
      }
      (l.TYPED_ARRAY_SUPPORT = (function () {
        try {
          const e = new Uint8Array(1),
            t = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(t, Uint8Array.prototype),
            Object.setPrototypeOf(e, t),
            42 === e.foo()
          );
        } catch (e) {
          return !1;
        }
      })()),
        l.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
          ),
        Object.defineProperty(l.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (l.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(l.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (l.isBuffer(this)) return this.byteOffset;
          },
        }),
        (l.poolSize = 8192),
        (l.from = function (e, t, n) {
          return c(e, t, n);
        }),
        Object.setPrototypeOf(l.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(l, Uint8Array),
        (l.alloc = function (e, t, n) {
          return (function (e, t, n) {
            return (
              u(e),
              e <= 0
                ? a(e)
                : void 0 !== t
                  ? "string" == typeof n
                    ? a(e).fill(t, n)
                    : a(e).fill(t)
                  : a(e)
            );
          })(e, t, n);
        }),
        (l.allocUnsafe = function (e) {
          return d(e);
        }),
        (l.allocUnsafeSlow = function (e) {
          return d(e);
        }),
        (l.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== l.prototype;
        }),
        (l.compare = function (e, t) {
          if (
            (W(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
            W(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
            !l.isBuffer(e) || !l.isBuffer(t))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
            );
          if (e === t) return 0;
          let n = e.length,
            o = t.length;
          for (let r = 0, i = Math.min(n, o); r < i; ++r)
            if (e[r] !== t[r]) {
              (n = e[r]), (o = t[r]);
              break;
            }
          return n < o ? -1 : o < n ? 1 : 0;
        }),
        (l.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (l.concat = function (e, t) {
          if (!Array.isArray(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return l.alloc(0);
          let n;
          if (void 0 === t)
            for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
          const o = l.allocUnsafe(t);
          let r = 0;
          for (n = 0; n < e.length; ++n) {
            let t = e[n];
            if (W(t, Uint8Array))
              r + t.length > o.length
                ? (l.isBuffer(t) || (t = l.from(t)), t.copy(o, r))
                : Uint8Array.prototype.set.call(o, t, r);
            else {
              if (!l.isBuffer(t))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              t.copy(o, r);
            }
            r += t.length;
          }
          return o;
        }),
        (l.byteLength = g),
        (l.prototype._isBuffer = !0),
        (l.prototype.swap16 = function () {
          const e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let t = 0; t < e; t += 2) m(this, t, t + 1);
          return this;
        }),
        (l.prototype.swap32 = function () {
          const e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let t = 0; t < e; t += 4)
            m(this, t, t + 3), m(this, t + 1, t + 2);
          return this;
        }),
        (l.prototype.swap64 = function () {
          const e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let t = 0; t < e; t += 8)
            m(this, t, t + 7),
              m(this, t + 1, t + 6),
              m(this, t + 2, t + 5),
              m(this, t + 3, t + 4);
          return this;
        }),
        (l.prototype.toString = function () {
          const e = this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
              ? k(this, 0, e)
              : y.apply(this, arguments);
        }),
        (l.prototype.toLocaleString = l.prototype.toString),
        (l.prototype.equals = function (e) {
          if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === l.compare(this, e);
        }),
        (l.prototype.inspect = function () {
          let e = "";
          const n = t.IS;
          return (
            (e = this.toString("hex", 0, n)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > n && (e += " ... "),
            "<Buffer " + e + ">"
          );
        }),
        i && (l.prototype[i] = l.prototype.inspect),
        (l.prototype.compare = function (e, t, n, o, r) {
          if (
            (W(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
            !l.isBuffer(e))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e,
            );
          if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === o && (o = 0),
            void 0 === r && (r = this.length),
            t < 0 || n > e.length || o < 0 || r > this.length)
          )
            throw new RangeError("out of range index");
          if (o >= r && t >= n) return 0;
          if (o >= r) return -1;
          if (t >= n) return 1;
          if (this === e) return 0;
          let i = (r >>>= 0) - (o >>>= 0),
            s = (n >>>= 0) - (t >>>= 0);
          const a = Math.min(i, s),
            c = this.slice(o, r),
            u = e.slice(t, n);
          for (let e = 0; e < a; ++e)
            if (c[e] !== u[e]) {
              (i = c[e]), (s = u[e]);
              break;
            }
          return i < s ? -1 : s < i ? 1 : 0;
        }),
        (l.prototype.includes = function (e, t, n) {
          return -1 !== this.indexOf(e, t, n);
        }),
        (l.prototype.indexOf = function (e, t, n) {
          return v(this, e, t, n, !0);
        }),
        (l.prototype.lastIndexOf = function (e, t, n) {
          return v(this, e, t, n, !1);
        }),
        (l.prototype.write = function (e, t, n, o) {
          if (void 0 === t) (o = "utf8"), (n = this.length), (t = 0);
          else if (void 0 === n && "string" == typeof t)
            (o = t), (n = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported",
              );
            (t >>>= 0),
              isFinite(n)
                ? ((n >>>= 0), void 0 === o && (o = "utf8"))
                : ((o = n), (n = void 0));
          }
          const r = this.length - t;
          if (
            ((void 0 === n || n > r) && (n = r),
            (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          o || (o = "utf8");
          let i = !1;
          for (;;)
            switch (o) {
              case "hex":
                return w(this, e, t, n);
              case "utf8":
              case "utf-8":
                return b(this, e, t, n);
              case "ascii":
              case "latin1":
              case "binary":
                return E(this, e, t, n);
              case "base64":
                return S(this, e, t, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return _(this, e, t, n);
              default:
                if (i) throw new TypeError("Unknown encoding: " + o);
                (o = ("" + o).toLowerCase()), (i = !0);
            }
        }),
        (l.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      const M = 4096;
      function N(e, t, n) {
        let o = "";
        n = Math.min(e.length, n);
        for (let r = t; r < n; ++r) o += String.fromCharCode(127 & e[r]);
        return o;
      }
      function P(e, t, n) {
        let o = "";
        n = Math.min(e.length, n);
        for (let r = t; r < n; ++r) o += String.fromCharCode(e[r]);
        return o;
      }
      function A(e, t, n) {
        const o = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > o) && (n = o);
        let r = "";
        for (let o = t; o < n; ++o) r += G[e[o]];
        return r;
      }
      function O(e, t, n) {
        const o = e.slice(t, n);
        let r = "";
        for (let e = 0; e < o.length - 1; e += 2)
          r += String.fromCharCode(o[e] + 256 * o[e + 1]);
        return r;
      }
      function I(e, t, n) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > n)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function B(e, t, n, o, r, i) {
        if (!l.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > r || t < i)
          throw new RangeError('"value" argument is out of bounds');
        if (n + o > e.length) throw new RangeError("Index out of range");
      }
      function D(e, t, n, o, r) {
        H(t, o, r, e, n, 7);
        let i = Number(t & BigInt(4294967295));
        (e[n++] = i),
          (i >>= 8),
          (e[n++] = i),
          (i >>= 8),
          (e[n++] = i),
          (i >>= 8),
          (e[n++] = i);
        let s = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[n++] = s),
          (s >>= 8),
          (e[n++] = s),
          (s >>= 8),
          (e[n++] = s),
          (s >>= 8),
          (e[n++] = s),
          n
        );
      }
      function j(e, t, n, o, r) {
        H(t, o, r, e, n, 7);
        let i = Number(t & BigInt(4294967295));
        (e[n + 7] = i),
          (i >>= 8),
          (e[n + 6] = i),
          (i >>= 8),
          (e[n + 5] = i),
          (i >>= 8),
          (e[n + 4] = i);
        let s = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[n + 3] = s),
          (s >>= 8),
          (e[n + 2] = s),
          (s >>= 8),
          (e[n + 1] = s),
          (s >>= 8),
          (e[n] = s),
          n + 8
        );
      }
      function z(e, t, n, o, r, i) {
        if (n + o > e.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }
      function R(e, t, n, o, i) {
        return (
          (t = +t),
          (n >>>= 0),
          i || z(e, 0, n, 4),
          r.write(e, t, n, o, 23, 4),
          n + 4
        );
      }
      function L(e, t, n, o, i) {
        return (
          (t = +t),
          (n >>>= 0),
          i || z(e, 0, n, 8),
          r.write(e, t, n, o, 52, 8),
          n + 8
        );
      }
      (l.prototype.slice = function (e, t) {
        const n = this.length;
        (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
          (t = void 0 === t ? n : ~~t) < 0
            ? (t += n) < 0 && (t = 0)
            : t > n && (t = n),
          t < e && (t = e);
        const o = this.subarray(e, t);
        return Object.setPrototypeOf(o, l.prototype), o;
      }),
        (l.prototype.readUintLE = l.prototype.readUIntLE =
          function (e, t, n) {
            (e >>>= 0), (t >>>= 0), n || I(e, t, this.length);
            let o = this[e],
              r = 1,
              i = 0;
            for (; ++i < t && (r *= 256); ) o += this[e + i] * r;
            return o;
          }),
        (l.prototype.readUintBE = l.prototype.readUIntBE =
          function (e, t, n) {
            (e >>>= 0), (t >>>= 0), n || I(e, t, this.length);
            let o = this[e + --t],
              r = 1;
            for (; t > 0 && (r *= 256); ) o += this[e + --t] * r;
            return o;
          }),
        (l.prototype.readUint8 = l.prototype.readUInt8 =
          function (e, t) {
            return (e >>>= 0), t || I(e, 1, this.length), this[e];
          }),
        (l.prototype.readUint16LE = l.prototype.readUInt16LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || I(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            );
          }),
        (l.prototype.readUint16BE = l.prototype.readUInt16BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || I(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            );
          }),
        (l.prototype.readUint32LE = l.prototype.readUInt32LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || I(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
        (l.prototype.readUint32BE = l.prototype.readUInt32BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || I(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
        (l.prototype.readBigUInt64LE = Q(function (e) {
          X((e >>>= 0), "offset");
          const t = this[e],
            n = this[e + 7];
          (void 0 !== t && void 0 !== n) || q(e, this.length - 8);
          const o =
              t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
            r = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 2 ** 24;
          return BigInt(o) + (BigInt(r) << BigInt(32));
        })),
        (l.prototype.readBigUInt64BE = Q(function (e) {
          X((e >>>= 0), "offset");
          const t = this[e],
            n = this[e + 7];
          (void 0 !== t && void 0 !== n) || q(e, this.length - 8);
          const o =
              t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
            r = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n;
          return (BigInt(o) << BigInt(32)) + BigInt(r);
        })),
        (l.prototype.readIntLE = function (e, t, n) {
          (e >>>= 0), (t >>>= 0), n || I(e, t, this.length);
          let o = this[e],
            r = 1,
            i = 0;
          for (; ++i < t && (r *= 256); ) o += this[e + i] * r;
          return (r *= 128), o >= r && (o -= Math.pow(2, 8 * t)), o;
        }),
        (l.prototype.readIntBE = function (e, t, n) {
          (e >>>= 0), (t >>>= 0), n || I(e, t, this.length);
          let o = t,
            r = 1,
            i = this[e + --o];
          for (; o > 0 && (r *= 256); ) i += this[e + --o] * r;
          return (r *= 128), i >= r && (i -= Math.pow(2, 8 * t)), i;
        }),
        (l.prototype.readInt8 = function (e, t) {
          return (
            (e >>>= 0),
            t || I(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (l.prototype.readInt16LE = function (e, t) {
          (e >>>= 0), t || I(e, 2, this.length);
          const n = this[e] | (this[e + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (l.prototype.readInt16BE = function (e, t) {
          (e >>>= 0), t || I(e, 2, this.length);
          const n = this[e + 1] | (this[e] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (l.prototype.readInt32LE = function (e, t) {
          return (
            (e >>>= 0),
            t || I(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (l.prototype.readInt32BE = function (e, t) {
          return (
            (e >>>= 0),
            t || I(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (l.prototype.readBigInt64LE = Q(function (e) {
          X((e >>>= 0), "offset");
          const t = this[e],
            n = this[e + 7];
          (void 0 !== t && void 0 !== n) || q(e, this.length - 8);
          const o =
            this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
          return (
            (BigInt(o) << BigInt(32)) +
            BigInt(
              t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
            )
          );
        })),
        (l.prototype.readBigInt64BE = Q(function (e) {
          X((e >>>= 0), "offset");
          const t = this[e],
            n = this[e + 7];
          (void 0 !== t && void 0 !== n) || q(e, this.length - 8);
          const o = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
          return (
            (BigInt(o) << BigInt(32)) +
            BigInt(
              this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n,
            )
          );
        })),
        (l.prototype.readFloatLE = function (e, t) {
          return (
            (e >>>= 0), t || I(e, 4, this.length), r.read(this, e, !0, 23, 4)
          );
        }),
        (l.prototype.readFloatBE = function (e, t) {
          return (
            (e >>>= 0), t || I(e, 4, this.length), r.read(this, e, !1, 23, 4)
          );
        }),
        (l.prototype.readDoubleLE = function (e, t) {
          return (
            (e >>>= 0), t || I(e, 8, this.length), r.read(this, e, !0, 52, 8)
          );
        }),
        (l.prototype.readDoubleBE = function (e, t) {
          return (
            (e >>>= 0), t || I(e, 8, this.length), r.read(this, e, !1, 52, 8)
          );
        }),
        (l.prototype.writeUintLE = l.prototype.writeUIntLE =
          function (e, t, n, o) {
            if (((e = +e), (t >>>= 0), (n >>>= 0), !o)) {
              B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            }
            let r = 1,
              i = 0;
            for (this[t] = 255 & e; ++i < n && (r *= 256); )
              this[t + i] = (e / r) & 255;
            return t + n;
          }),
        (l.prototype.writeUintBE = l.prototype.writeUIntBE =
          function (e, t, n, o) {
            if (((e = +e), (t >>>= 0), (n >>>= 0), !o)) {
              B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            }
            let r = n - 1,
              i = 1;
            for (this[t + r] = 255 & e; --r >= 0 && (i *= 256); )
              this[t + r] = (e / i) & 255;
            return t + n;
          }),
        (l.prototype.writeUint8 = l.prototype.writeUInt8 =
          function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || B(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (l.prototype.writeUint16LE = l.prototype.writeUInt16LE =
          function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || B(this, e, t, 2, 65535, 0),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
        (l.prototype.writeUint16BE = l.prototype.writeUInt16BE =
          function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || B(this, e, t, 2, 65535, 0),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
        (l.prototype.writeUint32LE = l.prototype.writeUInt32LE =
          function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || B(this, e, t, 4, 4294967295, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            );
          }),
        (l.prototype.writeUint32BE = l.prototype.writeUInt32BE =
          function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || B(this, e, t, 4, 4294967295, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
        (l.prototype.writeBigUInt64LE = Q(function (e, t = 0) {
          return D(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (l.prototype.writeBigUInt64BE = Q(function (e, t = 0) {
          return j(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (l.prototype.writeIntLE = function (e, t, n, o) {
          if (((e = +e), (t >>>= 0), !o)) {
            const o = Math.pow(2, 8 * n - 1);
            B(this, e, t, n, o - 1, -o);
          }
          let r = 0,
            i = 1,
            s = 0;
          for (this[t] = 255 & e; ++r < n && (i *= 256); )
            e < 0 && 0 === s && 0 !== this[t + r - 1] && (s = 1),
              (this[t + r] = (((e / i) >> 0) - s) & 255);
          return t + n;
        }),
        (l.prototype.writeIntBE = function (e, t, n, o) {
          if (((e = +e), (t >>>= 0), !o)) {
            const o = Math.pow(2, 8 * n - 1);
            B(this, e, t, n, o - 1, -o);
          }
          let r = n - 1,
            i = 1,
            s = 0;
          for (this[t + r] = 255 & e; --r >= 0 && (i *= 256); )
            e < 0 && 0 === s && 0 !== this[t + r + 1] && (s = 1),
              (this[t + r] = (((e / i) >> 0) - s) & 255);
          return t + n;
        }),
        (l.prototype.writeInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || B(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || B(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (l.prototype.writeInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || B(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (l.prototype.writeInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || B(this, e, t, 4, 2147483647, -2147483648),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          );
        }),
        (l.prototype.writeInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || B(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
        (l.prototype.writeBigInt64LE = Q(function (e, t = 0) {
          return D(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff"),
          );
        })),
        (l.prototype.writeBigInt64BE = Q(function (e, t = 0) {
          return j(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff"),
          );
        })),
        (l.prototype.writeFloatLE = function (e, t, n) {
          return R(this, e, t, !0, n);
        }),
        (l.prototype.writeFloatBE = function (e, t, n) {
          return R(this, e, t, !1, n);
        }),
        (l.prototype.writeDoubleLE = function (e, t, n) {
          return L(this, e, t, !0, n);
        }),
        (l.prototype.writeDoubleBE = function (e, t, n) {
          return L(this, e, t, !1, n);
        }),
        (l.prototype.copy = function (e, t, n, o) {
          if (!l.isBuffer(e))
            throw new TypeError("argument should be a Buffer");
          if (
            (n || (n = 0),
            o || 0 === o || (o = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            o > 0 && o < n && (o = n),
            o === n)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length)
            throw new RangeError("Index out of range");
          if (o < 0) throw new RangeError("sourceEnd out of bounds");
          o > this.length && (o = this.length),
            e.length - t < o - n && (o = e.length - t + n);
          const r = o - n;
          return (
            this === e && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, n, o)
              : Uint8Array.prototype.set.call(e, this.subarray(n, o), t),
            r
          );
        }),
        (l.prototype.fill = function (e, t, n, o) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((o = t), (t = 0), (n = this.length))
                : "string" == typeof n && ((o = n), (n = this.length)),
              void 0 !== o && "string" != typeof o)
            )
              throw new TypeError("encoding must be a string");
            if ("string" == typeof o && !l.isEncoding(o))
              throw new TypeError("Unknown encoding: " + o);
            if (1 === e.length) {
              const t = e.charCodeAt(0);
              (("utf8" === o && t < 128) || "latin1" === o) && (e = t);
            }
          } else
            "number" == typeof e
              ? (e &= 255)
              : "boolean" == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < n)
            throw new RangeError("Out of range index");
          if (n <= t) return this;
          let r;
          if (
            ((t >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (r = t; r < n; ++r) this[r] = e;
          else {
            const i = l.isBuffer(e) ? e : l.from(e, o),
              s = i.length;
            if (0 === s)
              throw new TypeError(
                'The value "' + e + '" is invalid for argument "value"',
              );
            for (r = 0; r < n - t; ++r) this[r + t] = i[r % s];
          }
          return this;
        });
      const $ = {};
      function T(e, t, n) {
        $[e] = class extends n {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${e}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return e;
          }
          set code(e) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: e,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      function V(e) {
        let t = "",
          n = e.length;
        const o = "-" === e[0] ? 1 : 0;
        for (; n >= o + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
        return `${e.slice(0, n)}${t}`;
      }
      function H(e, t, n, o, r, i) {
        if (e > n || e < t) {
          const o = "bigint" == typeof t ? "n" : "";
          let r;
          throw (
            ((r =
              i > 3
                ? 0 === t || t === BigInt(0)
                  ? `>= 0${o} and < 2${o} ** ${8 * (i + 1)}${o}`
                  : `>= -(2${o} ** ${8 * (i + 1) - 1}${o}) and < 2 ** ${8 * (i + 1) - 1}${o}`
                : `>= ${t}${o} and <= ${n}${o}`),
            new $.ERR_OUT_OF_RANGE("value", r, e))
          );
        }
        !(function (e, t, n) {
          X(t, "offset"),
            (void 0 !== e[t] && void 0 !== e[t + n]) ||
              q(t, e.length - (n + 1));
        })(o, r, i);
      }
      function X(e, t) {
        if ("number" != typeof e)
          throw new $.ERR_INVALID_ARG_TYPE(t, "number", e);
      }
      function q(e, t, n) {
        if (Math.floor(e) !== e)
          throw (
            (X(e, n), new $.ERR_OUT_OF_RANGE(n || "offset", "an integer", e))
          );
        if (t < 0) throw new $.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new $.ERR_OUT_OF_RANGE(
          n || "offset",
          `>= ${n ? 1 : 0} and <= ${t}`,
          e,
        );
      }
      T(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (e) {
          return e
            ? `${e} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError,
      ),
        T(
          "ERR_INVALID_ARG_TYPE",
          function (e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`;
          },
          TypeError,
        ),
        T(
          "ERR_OUT_OF_RANGE",
          function (e, t, n) {
            let o = `The value of "${e}" is out of range.`,
              r = n;
            return (
              Number.isInteger(n) && Math.abs(n) > 2 ** 32
                ? (r = V(String(n)))
                : "bigint" == typeof n &&
                  ((r = String(n)),
                  (n > BigInt(2) ** BigInt(32) ||
                    n < -(BigInt(2) ** BigInt(32))) &&
                    (r = V(r)),
                  (r += "n")),
              (o += ` It must be ${t}. Received ${r}`),
              o
            );
          },
          RangeError,
        );
      const Z = /[^+/0-9A-Za-z-_]/g;
      function Y(e, t) {
        let n;
        t = t || 1 / 0;
        const o = e.length;
        let r = null;
        const i = [];
        for (let s = 0; s < o; ++s) {
          if (((n = e.charCodeAt(s)), n > 55295 && n < 57344)) {
            if (!r) {
              if (n > 56319) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (s + 1 === o) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              r = n;
              continue;
            }
            if (n < 56320) {
              (t -= 3) > -1 && i.push(239, 191, 189), (r = n);
              continue;
            }
            n = 65536 + (((r - 55296) << 10) | (n - 56320));
          } else r && (t -= 3) > -1 && i.push(239, 191, 189);
          if (((r = null), n < 128)) {
            if ((t -= 1) < 0) break;
            i.push(n);
          } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            i.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            i.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128,
            );
          }
        }
        return i;
      }
      function F(e) {
        return o.toByteArray(
          (function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(Z, "")).length < 2)
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e),
        );
      }
      function U(e, t, n, o) {
        let r;
        for (r = 0; r < o && !(r + n >= t.length || r >= e.length); ++r)
          t[r + n] = e[r];
        return r;
      }
      function W(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        );
      }
      function K(e) {
        return e != e;
      }
      const G = (function () {
        const e = "0123456789abcdef",
          t = new Array(256);
        for (let n = 0; n < 16; ++n) {
          const o = 16 * n;
          for (let r = 0; r < 16; ++r) t[o + r] = e[n] + e[r];
        }
        return t;
      })();
      function Q(e) {
        return "undefined" == typeof BigInt ? J : e;
      }
      function J() {
        throw new Error("BigInt not supported");
      }
    },
    61621: (e, t) => {
      (t.read = function (e, t, n, o, r) {
        var i,
          s,
          a = 8 * r - o - 1,
          l = (1 << a) - 1,
          c = l >> 1,
          u = -7,
          d = n ? r - 1 : 0,
          f = n ? -1 : 1,
          h = e[t + d];
        for (
          d += f, i = h & ((1 << -u) - 1), h >>= -u, u += a;
          u > 0;
          i = 256 * i + e[t + d], d += f, u -= 8
        );
        for (
          s = i & ((1 << -u) - 1), i >>= -u, u += o;
          u > 0;
          s = 256 * s + e[t + d], d += f, u -= 8
        );
        if (0 === i) i = 1 - c;
        else {
          if (i === l) return s ? NaN : (1 / 0) * (h ? -1 : 1);
          (s += Math.pow(2, o)), (i -= c);
        }
        return (h ? -1 : 1) * s * Math.pow(2, i - o);
      }),
        (t.write = function (e, t, n, o, r, i) {
          var s,
            a,
            l,
            c = 8 * i - r - 1,
            u = (1 << c) - 1,
            d = u >> 1,
            f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = o ? 0 : i - 1,
            p = o ? 1 : -1,
            g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((a = isNaN(t) ? 1 : 0), (s = u))
                : ((s = Math.floor(Math.log(t) / Math.LN2)),
                  t * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
                  (t += s + d >= 1 ? f / l : f * Math.pow(2, 1 - d)) * l >= 2 &&
                    (s++, (l /= 2)),
                  s + d >= u
                    ? ((a = 0), (s = u))
                    : s + d >= 1
                      ? ((a = (t * l - 1) * Math.pow(2, r)), (s += d))
                      : ((a = t * Math.pow(2, d - 1) * Math.pow(2, r)),
                        (s = 0)));
            r >= 8;
            e[n + h] = 255 & a, h += p, a /= 256, r -= 8
          );
          for (
            s = (s << r) | a, c += r;
            c > 0;
            e[n + h] = 255 & s, h += p, s /= 256, c -= 8
          );
          e[n + h - p] |= 128 * g;
        });
    },
    88092: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => Mo, j: () => Zo });
      const o = (e, t, n = !1) => {
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
        r = (e, t = new Map()) => {
          if ("object" != typeof e || null === e) return !1;
          if (t.has(e)) return !0;
          if ((t.set(e, !0), Array.isArray(e))) {
            for (let n = 0; n < e.length; n++) if (r(e[n], t)) return !0;
            return !1;
          }
          for (const n in e) if (r(e[n], t)) return !0;
          return !1;
        },
        i = (e, t, n, o = 1 / 0) => {
          if (!e || "object" != typeof e) return JSON.stringify(e, t, n);
          const r =
            o < 1
              ? '"..."'
              : Array.isArray(e)
                ? `[${e.map((e) => i(e, t, n, o - 1)).join(",")}]`
                : `{${Object.keys(e)
                    .map((r) => `"${r}": ${i(e[r], t, n, o - 1)}`)
                    .join(", ")}}`;
          return JSON.stringify(JSON.parse(r), t, n);
        },
        s = (e, t = 1 / 0, n = !1) =>
          Number.isNaN(e) || null === e
            ? "null"
            : Array.isArray(e) || "object" == typeof e
              ? i(e, void 0, n ? 1 : void 0, t)
              : i(e),
        a = (e) =>
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
                      : -1,
        l = (e, t, n) => {
          const o = a(e),
            r = a(t);
          if (o !== r) return o - r;
          if (
            (null === e && null === t) ||
            (Array.isArray(e) && Array.isArray(t)) ||
            (5 === o && 5 === r)
          )
            return 0;
          switch (typeof e) {
            case "number":
              return e - t;
            case "string":
              return (
                (null == n ? void 0 : n.ignoreCase) &&
                  ((e = e.toLowerCase()), (t = t.toLowerCase())),
                e < t ? -1 : e > t ? 1 : 0
              );
            case "boolean":
              return +e - +t;
          }
          return 0;
        },
        c = (e) =>
          Array.isArray(e) ? "array" : null === e ? "null" : typeof e,
        u = (e, t, n, o, r, i, a, c) => {
          const u = { ignoreCase: c.ignoreCase },
            d = s(r, c.maxDepth, !0).split("\n"),
            f = s(i, c.maxDepth, !0).split("\n");
          if (0 !== l(r, i, u))
            if (c.showModifications) {
              const r = Math.max(d.length, f.length);
              for (let e = d.length; e < r; e++) d.push("");
              for (let e = f.length; e < r; e++) f.push("");
              e.push({
                level: a,
                type: "modify",
                text: n ? `"${n}": ${d[0]}` : d[0],
              });
              for (let t = 1; t < d.length; t++) {
                var h, p;
                e.push({
                  level:
                    a +
                    ((null == (h = d[t].match(/^\s+/)) || null == (p = h[0])
                      ? void 0
                      : p.length) || 0),
                  type: "modify",
                  text: d[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
              for (let t = d.length; t < r; t++)
                e.push({ level: a, type: "equal", text: "" });
              t.push({
                level: a,
                type: "modify",
                text: o ? `"${o}": ${f[0]}` : f[0],
              });
              for (let e = 1; e < f.length; e++) {
                var g, y;
                t.push({
                  level:
                    a +
                    ((null == (g = f[e].match(/^\s+/)) || null == (y = g[0])
                      ? void 0
                      : y.length) || 0),
                  type: "modify",
                  text: f[e].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
              for (let e = f.length; e < r; e++)
                t.push({ level: a, type: "equal", text: "" });
            } else {
              e.push({
                level: a,
                type: "remove",
                text: n ? `"${n}": ${d[0]}` : d[0],
              });
              for (let t = 1; t < d.length; t++) {
                var m, v;
                e.push({
                  level:
                    a +
                    ((null == (m = d[t].match(/^\s+/)) || null == (v = m[0])
                      ? void 0
                      : v.length) || 0),
                  type: "remove",
                  text: d[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
              for (let t = 0; t < f.length; t++)
                e.push({ level: a, type: "equal", text: "" });
              for (let e = 0; e < d.length; e++)
                t.push({ level: a, type: "equal", text: "" });
              t.push({
                level: a,
                type: "add",
                text: o ? `"${o}": ${f[0]}` : f[0],
              });
              for (let e = 1; e < f.length; e++) {
                var x, w;
                t.push({
                  level:
                    a +
                    ((null == (x = f[e].match(/^\s+/)) || null == (w = x[0])
                      ? void 0
                      : w.length) || 0),
                  type: "add",
                  text: f[e].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
            }
          else {
            const r = Math.max(d.length, f.length);
            for (let e = d.length; e < r; e++) d.push("");
            for (let e = f.length; e < r; e++) f.push("");
            e.push({
              level: a,
              type: "equal",
              text: n ? `"${n}": ${d[0]}` : d[0],
            });
            for (let t = 1; t < d.length; t++) {
              var b, E;
              e.push({
                level:
                  a +
                  ((null == (b = d[t].match(/^\s+/)) || null == (E = b[0])
                    ? void 0
                    : E.length) || 0),
                type: "equal",
                text: d[t].replace(/^\s+/, "").replace(/,$/g, ""),
              });
            }
            t.push({
              level: a,
              type: "equal",
              text: o ? `"${o}": ${f[0]}` : f[0],
            });
            for (let e = 1; e < f.length; e++) {
              var S, _;
              t.push({
                level:
                  a +
                  ((null == (S = f[e].match(/^\s+/)) || null == (_ = S[0])
                    ? void 0
                    : _.length) || 0),
                type: "equal",
                text: f[e].replace(/^\s+/, "").replace(/,$/g, ""),
              });
            }
          }
        },
        d = (e, t) =>
          e.sort((e, n) => l(e, n, { ignoreCase: t.ignoreCaseForKey })),
        f = (e, t, n = 1, r, s) => {
          if (n > (r.maxDepth || 1 / 0))
            return [
              [{ level: n, type: "equal", text: "..." }],
              [{ level: n, type: "equal", text: "..." }],
            ];
          let a = [],
            h = [];
          if ((null === e && null === t) || (void 0 === e && void 0 === t))
            return [a, h];
          if (null == e) {
            const e = i(t, void 0, 1).split("\n");
            for (let t = 0; t < e.length; t++) {
              var p, g;
              a.push({ level: n, type: "equal", text: "" }),
                h.push({
                  level:
                    n +
                    ((null == (p = e[t].match(/^\s+/)) || null == (g = p[0])
                      ? void 0
                      : g.length) || 0),
                  type: "add",
                  text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
            }
            return [a, h];
          }
          if (null == t) {
            const t = i(e, void 0, 1).split("\n");
            for (let e = 0; e < t.length; e++) {
              var y, m;
              a.push({
                level:
                  n +
                  ((null == (y = t[e].match(/^\s+/)) || null == (m = y[0])
                    ? void 0
                    : m.length) || 0),
                type: "remove",
                text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
              }),
                h.push({ level: n, type: "equal", text: "" });
            }
            return [a, h];
          }
          const v = Object.keys(e),
            x = Object.keys(t);
          d(v, r), d(x, r);
          const w = { ignoreCase: r.ignoreCaseForKey };
          for (r.ignoreCase; v.length || x.length; ) {
            const d = v[0],
              p = x[0],
              g = l(d, p, w);
            if (0 === g)
              if (c(e[d]) !== c(t[p])) u(a, h, d, p, e[d], t[p], n, r);
              else if (Array.isArray(e[d])) {
                const i = [...e[d]],
                  l = [...t[p]],
                  [c, u] = s(i, l, d, p, n, r, [], []);
                (a = o(a, c)), (h = o(h, u));
              } else if (null === e[d])
                a.push({ level: n, type: "equal", text: `"${d}": null` }),
                  h.push({ level: n, type: "equal", text: `"${p}": null` });
              else if ("object" == typeof e[d]) {
                const i = f(e[d], t[p], n + 1, r, s);
                a.push({ level: n, type: "equal", text: `"${d}": {` }),
                  (a = o(a, i[0])),
                  a.push({ level: n, type: "equal", text: "}" }),
                  h.push({ level: n, type: "equal", text: `"${p}": {` }),
                  (h = o(h, i[1])),
                  h.push({ level: n, type: "equal", text: "}" });
              } else u(a, h, d, p, e[d], t[p], n, r);
            else if (v.length && x.length)
              if (d < p) {
                const t = i(e[d], void 0, 1).split("\n");
                for (let e = 0; e < t.length; e++) {
                  var b, E;
                  const o = t[e].replace(/^\s+/, "").replace(/,$/g, "");
                  a.push({
                    level:
                      n +
                      ((null == (b = t[e].match(/^\s+/)) || null == (E = b[0])
                        ? void 0
                        : E.length) || 0),
                    type: "remove",
                    text: e ? o : `"${d}": ${o}`,
                  }),
                    h.push({ level: n, type: "equal", text: "" });
                }
              } else {
                const e = i(t[p], void 0, 1).split("\n");
                for (let t = 0; t < e.length; t++) {
                  var S, _;
                  const o = e[t].replace(/^\s+/, "").replace(/,$/g, "");
                  a.push({ level: n, type: "equal", text: "" }),
                    h.push({
                      level:
                        n +
                        ((null == (S = e[t].match(/^\s+/)) || null == (_ = S[0])
                          ? void 0
                          : _.length) || 0),
                      type: "add",
                      text: t ? o : `"${p}": ${o}`,
                    });
                }
              }
            else if (v.length) {
              const t = i(e[d], void 0, 1).split("\n");
              for (let e = 0; e < t.length; e++) {
                var C, k;
                const o = t[e].replace(/^\s+/, "").replace(/,$/g, "");
                a.push({
                  level:
                    n +
                    ((null == (C = t[e].match(/^\s+/)) || null == (k = C[0])
                      ? void 0
                      : k.length) || 0),
                  type: "remove",
                  text: e ? o : `"${d}": ${o}`,
                }),
                  h.push({ level: n, type: "equal", text: "" });
              }
            } else if (x.length) {
              const e = i(t[p], void 0, 1).split("\n");
              for (let t = 0; t < e.length; t++) {
                var M, N;
                const o = e[t].replace(/^\s+/, "").replace(/,$/g, "");
                a.push({ level: n, type: "equal", text: "" }),
                  h.push({
                    level:
                      n +
                      ((null == (M = e[t].match(/^\s+/)) || null == (N = M[0])
                        ? void 0
                        : N.length) || 0),
                    type: "add",
                    text: t ? o : `"${p}": ${o}`,
                  });
              }
            }
            d
              ? p
                ? 0 === g
                  ? (v.shift(), x.shift())
                  : g < 0
                    ? v.shift()
                    : x.shift()
                : v.shift()
              : x.shift();
          }
          if (a.length !== h.length)
            throw new Error(
              "Diff error: length not match for left & right, please report a bug with your data.",
            );
          return [a, h];
        };
      var h = function () {
        (this.__data__ = []), (this.size = 0);
      };
      var p = function (e, t) {
          return e === t || (e != e && t != t);
        },
        g = p;
      var y = function (e, t) {
          for (var n = e.length; n--; ) if (g(e[n][0], t)) return n;
          return -1;
        },
        m = y,
        v = Array.prototype.splice;
      var x = y;
      var w = y;
      var b = y;
      var E = h,
        S = function (e) {
          var t = this.__data__,
            n = m(t, e);
          return (
            !(n < 0) &&
            (n == t.length - 1 ? t.pop() : v.call(t, n, 1), --this.size, !0)
          );
        },
        _ = function (e) {
          var t = this.__data__,
            n = x(t, e);
          return n < 0 ? void 0 : t[n][1];
        },
        C = function (e) {
          return w(this.__data__, e) > -1;
        },
        k = function (e, t) {
          var n = this.__data__,
            o = b(n, e);
          return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
        };
      function M(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      (M.prototype.clear = E),
        (M.prototype.delete = S),
        (M.prototype.get = _),
        (M.prototype.has = C),
        (M.prototype.set = k);
      var N = M,
        P = N;
      var A = function () {
        (this.__data__ = new P()), (this.size = 0);
      };
      var O = function (e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      };
      var I = function (e) {
        return this.__data__.get(e);
      };
      var B = function (e) {
          return this.__data__.has(e);
        },
        D =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
              ? window
              : void 0 !== n.g
                ? n.g
                : "undefined" != typeof self
                  ? self
                  : {},
        j = "object" == typeof D && D && D.Object === Object && D,
        z = j,
        R = "object" == typeof self && self && self.Object === Object && self,
        L = z || R || Function("return this")(),
        $ = L.Symbol,
        T = $,
        V = Object.prototype,
        H = V.hasOwnProperty,
        X = V.toString,
        q = T ? T.toStringTag : void 0;
      var Z = function (e) {
          var t = H.call(e, q),
            n = e[q];
          try {
            e[q] = void 0;
            var o = !0;
          } catch (e) {}
          var r = X.call(e);
          return o && (t ? (e[q] = n) : delete e[q]), r;
        },
        Y = Object.prototype.toString;
      var F = Z,
        U = function (e) {
          return Y.call(e);
        },
        W = $ ? $.toStringTag : void 0;
      var K = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : W && W in Object(e)
            ? F(e)
            : U(e);
      };
      var G = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        },
        Q = K,
        J = G;
      var ee,
        te = function (e) {
          if (!J(e)) return !1;
          var t = Q(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        },
        ne = L["__core-js_shared__"],
        oe = (ee = /[^.]+$/.exec((ne && ne.keys && ne.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + ee
          : "";
      var re = function (e) {
          return !!oe && oe in e;
        },
        ie = Function.prototype.toString;
      var se = function (e) {
          if (null != e) {
            try {
              return ie.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        },
        ae = te,
        le = re,
        ce = G,
        ue = se,
        de = /^\[object .+?Constructor\]$/,
        fe = Function.prototype,
        he = Object.prototype,
        pe = fe.toString,
        ge = he.hasOwnProperty,
        ye = RegExp(
          "^" +
            pe
              .call(ge)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      var me = function (e) {
          return !(!ce(e) || le(e)) && (ae(e) ? ye : de).test(ue(e));
        },
        ve = function (e, t) {
          return null == e ? void 0 : e[t];
        };
      var xe = function (e, t) {
          var n = ve(e, t);
          return me(n) ? n : void 0;
        },
        we = xe(L, "Map"),
        be = xe(Object, "create"),
        Ee = be;
      var Se = function () {
        (this.__data__ = Ee ? Ee(null) : {}), (this.size = 0);
      };
      var _e = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        },
        Ce = be,
        ke = Object.prototype.hasOwnProperty;
      var Me = function (e) {
          var t = this.__data__;
          if (Ce) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return ke.call(t, e) ? t[e] : void 0;
        },
        Ne = be,
        Pe = Object.prototype.hasOwnProperty;
      var Ae = be;
      var Oe = Se,
        Ie = _e,
        Be = Me,
        De = function (e) {
          var t = this.__data__;
          return Ne ? void 0 !== t[e] : Pe.call(t, e);
        },
        je = function (e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = Ae && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        };
      function ze(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      (ze.prototype.clear = Oe),
        (ze.prototype.delete = Ie),
        (ze.prototype.get = Be),
        (ze.prototype.has = De),
        (ze.prototype.set = je);
      var Re = ze,
        Le = N,
        $e = we;
      var Te = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
      var Ve = function (e, t) {
          var n = e.__data__;
          return Te(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        },
        He = Ve;
      var Xe = Ve;
      var qe = Ve;
      var Ze = Ve;
      var Ye = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new Re(),
              map: new ($e || Le)(),
              string: new Re(),
            });
        },
        Fe = function (e) {
          var t = He(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        },
        Ue = function (e) {
          return Xe(this, e).get(e);
        },
        We = function (e) {
          return qe(this, e).has(e);
        },
        Ke = function (e, t) {
          var n = Ze(this, e),
            o = n.size;
          return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
        };
      function Ge(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      (Ge.prototype.clear = Ye),
        (Ge.prototype.delete = Fe),
        (Ge.prototype.get = Ue),
        (Ge.prototype.has = We),
        (Ge.prototype.set = Ke);
      var Qe = Ge,
        Je = N,
        et = we,
        tt = Qe;
      var nt = N,
        ot = A,
        rt = O,
        it = I,
        st = B,
        at = function (e, t) {
          var n = this.__data__;
          if (n instanceof Je) {
            var o = n.__data__;
            if (!et || o.length < 199)
              return o.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new tt(o);
          }
          return n.set(e, t), (this.size = n.size), this;
        };
      function lt(e) {
        var t = (this.__data__ = new nt(e));
        this.size = t.size;
      }
      (lt.prototype.clear = ot),
        (lt.prototype.delete = rt),
        (lt.prototype.get = it),
        (lt.prototype.has = st),
        (lt.prototype.set = at);
      var ct = lt;
      var ut = Qe,
        dt = function (e) {
          return this.__data__.set(e, "__lodash_hash_undefined__"), this;
        },
        ft = function (e) {
          return this.__data__.has(e);
        };
      function ht(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new ut(); ++t < n; ) this.add(e[t]);
      }
      (ht.prototype.add = ht.prototype.push = dt), (ht.prototype.has = ft);
      var pt = ht,
        gt = function (e, t) {
          for (var n = -1, o = null == e ? 0 : e.length; ++n < o; )
            if (t(e[n], n, e)) return !0;
          return !1;
        },
        yt = function (e, t) {
          return e.has(t);
        };
      var mt = function (e, t, n, o, r, i) {
        var s = 1 & n,
          a = e.length,
          l = t.length;
        if (a != l && !(s && l > a)) return !1;
        var c = i.get(e),
          u = i.get(t);
        if (c && u) return c == t && u == e;
        var d = -1,
          f = !0,
          h = 2 & n ? new pt() : void 0;
        for (i.set(e, t), i.set(t, e); ++d < a; ) {
          var p = e[d],
            g = t[d];
          if (o) var y = s ? o(g, p, d, t, e, i) : o(p, g, d, e, t, i);
          if (void 0 !== y) {
            if (y) continue;
            f = !1;
            break;
          }
          if (h) {
            if (
              !gt(t, function (e, t) {
                if (!yt(h, t) && (p === e || r(p, e, n, o, i)))
                  return h.push(t);
              })
            ) {
              f = !1;
              break;
            }
          } else if (p !== g && !r(p, g, n, o, i)) {
            f = !1;
            break;
          }
        }
        return i.delete(e), i.delete(t), f;
      };
      var vt = L.Uint8Array,
        xt = p,
        wt = mt,
        bt = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, o) {
              n[++t] = [o, e];
            }),
            n
          );
        },
        Et = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        },
        St = $ ? $.prototype : void 0,
        _t = St ? St.valueOf : void 0;
      var Ct = function (e, t, n, o, r, i, s) {
        switch (n) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !i(new vt(e), new vt(t)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return xt(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var a = bt;
          case "[object Set]":
            var l = 1 & o;
            if ((a || (a = Et), e.size != t.size && !l)) return !1;
            var c = s.get(e);
            if (c) return c == t;
            (o |= 2), s.set(e, t);
            var u = wt(a(e), a(t), o, r, i, s);
            return s.delete(e), u;
          case "[object Symbol]":
            if (_t) return _t.call(e) == _t.call(t);
        }
        return !1;
      };
      var kt = function (e, t) {
          for (var n = -1, o = t.length, r = e.length; ++n < o; )
            e[r + n] = t[n];
          return e;
        },
        Mt = Array.isArray,
        Nt = kt,
        Pt = Mt;
      var At = function (e, t, n) {
        var o = t(e);
        return Pt(e) ? o : Nt(o, n(e));
      };
      var Ot = function (e, t) {
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
        Bt = Object.prototype.propertyIsEnumerable,
        Dt = Object.getOwnPropertySymbols,
        jt = Dt
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  Ot(Dt(e), function (t) {
                    return Bt.call(e, t);
                  }));
            }
          : It;
      var zt = function (e, t) {
        for (var n = -1, o = Array(e); ++n < e; ) o[n] = t(n);
        return o;
      };
      var Rt = function (e) {
          return null != e && "object" == typeof e;
        },
        Lt = K,
        $t = Rt;
      var Tt = function (e) {
          return $t(e) && "[object Arguments]" == Lt(e);
        },
        Vt = Rt,
        Ht = Object.prototype,
        Xt = Ht.hasOwnProperty,
        qt = Ht.propertyIsEnumerable,
        Zt = Tt(
          (function () {
            return arguments;
          })(),
        )
          ? Tt
          : function (e) {
              return Vt(e) && Xt.call(e, "callee") && !qt.call(e, "callee");
            },
        Yt = { exports: {} };
      var Ft = function () {
        return !1;
      };
      !(function (e, t) {
        var n = L,
          o = Ft,
          r = t && !t.nodeType && t,
          i = r && e && !e.nodeType && e,
          s = i && i.exports === r ? n.Buffer : void 0,
          a = (s ? s.isBuffer : void 0) || o;
        e.exports = a;
      })(Yt, Yt.exports);
      var Ut = /^(?:0|[1-9]\d*)$/;
      var Wt = function (e, t) {
        var n = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == n || ("symbol" != n && Ut.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
      var Kt = function (e) {
          return (
            "number" == typeof e &&
            e > -1 &&
            e % 1 == 0 &&
            e <= 9007199254740991
          );
        },
        Gt = K,
        Qt = Kt,
        Jt = Rt,
        en = {};
      (en["[object Float32Array]"] =
        en["[object Float64Array]"] =
        en["[object Int8Array]"] =
        en["[object Int16Array]"] =
        en["[object Int32Array]"] =
        en["[object Uint8Array]"] =
        en["[object Uint8ClampedArray]"] =
        en["[object Uint16Array]"] =
        en["[object Uint32Array]"] =
          !0),
        (en["[object Arguments]"] =
          en["[object Array]"] =
          en["[object ArrayBuffer]"] =
          en["[object Boolean]"] =
          en["[object DataView]"] =
          en["[object Date]"] =
          en["[object Error]"] =
          en["[object Function]"] =
          en["[object Map]"] =
          en["[object Number]"] =
          en["[object Object]"] =
          en["[object RegExp]"] =
          en["[object Set]"] =
          en["[object String]"] =
          en["[object WeakMap]"] =
            !1);
      var tn = function (e) {
        return Jt(e) && Qt(e.length) && !!en[Gt(e)];
      };
      var nn = function (e) {
          return function (t) {
            return e(t);
          };
        },
        on = { exports: {} };
      !(function (e, t) {
        var n = j,
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
      })(on, on.exports);
      var rn = tn,
        sn = nn,
        an = on.exports,
        ln = an && an.isTypedArray,
        cn = ln ? sn(ln) : rn,
        un = zt,
        dn = Zt,
        fn = Mt,
        hn = Yt.exports,
        pn = Wt,
        gn = cn,
        yn = Object.prototype.hasOwnProperty;
      var mn = function (e, t) {
          var n = fn(e),
            o = !n && dn(e),
            r = !n && !o && hn(e),
            i = !n && !o && !r && gn(e),
            s = n || o || r || i,
            a = s ? un(e.length, String) : [],
            l = a.length;
          for (var c in e)
            (!t && !yn.call(e, c)) ||
              (s &&
                ("length" == c ||
                  (r && ("offset" == c || "parent" == c)) ||
                  (i &&
                    ("buffer" == c ||
                      "byteLength" == c ||
                      "byteOffset" == c)) ||
                  pn(c, l))) ||
              a.push(c);
          return a;
        },
        vn = Object.prototype;
      var xn = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || vn);
      };
      var wn = (function (e, t) {
          return function (n) {
            return e(t(n));
          };
        })(Object.keys, Object),
        bn = xn,
        En = wn,
        Sn = Object.prototype.hasOwnProperty;
      var _n = te,
        Cn = Kt;
      var kn = mn,
        Mn = function (e) {
          if (!bn(e)) return En(e);
          var t = [];
          for (var n in Object(e))
            Sn.call(e, n) && "constructor" != n && t.push(n);
          return t;
        },
        Nn = function (e) {
          return null != e && Cn(e.length) && !_n(e);
        };
      var Pn = At,
        An = jt,
        On = function (e) {
          return Nn(e) ? kn(e) : Mn(e);
        };
      var In = function (e) {
          return Pn(e, On, An);
        },
        Bn = Object.prototype.hasOwnProperty;
      var Dn = function (e, t, n, o, r, i) {
          var s = 1 & n,
            a = In(e),
            l = a.length;
          if (l != In(t).length && !s) return !1;
          for (var c = l; c--; ) {
            var u = a[c];
            if (!(s ? u in t : Bn.call(t, u))) return !1;
          }
          var d = i.get(e),
            f = i.get(t);
          if (d && f) return d == t && f == e;
          var h = !0;
          i.set(e, t), i.set(t, e);
          for (var p = s; ++c < l; ) {
            var g = e[(u = a[c])],
              y = t[u];
            if (o) var m = s ? o(y, g, u, t, e, i) : o(g, y, u, e, t, i);
            if (!(void 0 === m ? g === y || r(g, y, n, o, i) : m)) {
              h = !1;
              break;
            }
            p || (p = "constructor" == u);
          }
          if (h && !p) {
            var v = e.constructor,
              x = t.constructor;
            v == x ||
              !("constructor" in e) ||
              !("constructor" in t) ||
              ("function" == typeof v &&
                v instanceof v &&
                "function" == typeof x &&
                x instanceof x) ||
              (h = !1);
          }
          return i.delete(e), i.delete(t), h;
        },
        jn = xe(L, "DataView"),
        zn = we,
        Rn = xe(L, "Promise"),
        Ln = xe(L, "Set"),
        $n = xe(L, "WeakMap"),
        Tn = K,
        Vn = se,
        Hn = "[object Map]",
        Xn = "[object Promise]",
        qn = "[object Set]",
        Zn = "[object WeakMap]",
        Yn = "[object DataView]",
        Fn = Vn(jn),
        Un = Vn(zn),
        Wn = Vn(Rn),
        Kn = Vn(Ln),
        Gn = Vn($n),
        Qn = Tn;
      ((jn && Qn(new jn(new ArrayBuffer(1))) != Yn) ||
        (zn && Qn(new zn()) != Hn) ||
        (Rn && Qn(Rn.resolve()) != Xn) ||
        (Ln && Qn(new Ln()) != qn) ||
        ($n && Qn(new $n()) != Zn)) &&
        (Qn = function (e) {
          var t = Tn(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            o = n ? Vn(n) : "";
          if (o)
            switch (o) {
              case Fn:
                return Yn;
              case Un:
                return Hn;
              case Wn:
                return Xn;
              case Kn:
                return qn;
              case Gn:
                return Zn;
            }
          return t;
        });
      var Jn = ct,
        eo = mt,
        to = Ct,
        no = Dn,
        oo = Qn,
        ro = Mt,
        io = Yt.exports,
        so = cn,
        ao = "[object Arguments]",
        lo = "[object Array]",
        co = "[object Object]",
        uo = Object.prototype.hasOwnProperty;
      var fo = function (e, t, n, o, r, i) {
          var s = ro(e),
            a = ro(t),
            l = s ? lo : oo(e),
            c = a ? lo : oo(t),
            u = (l = l == ao ? co : l) == co,
            d = (c = c == ao ? co : c) == co,
            f = l == c;
          if (f && io(e)) {
            if (!io(t)) return !1;
            (s = !0), (u = !1);
          }
          if (f && !u)
            return (
              i || (i = new Jn()),
              s || so(e) ? eo(e, t, n, o, r, i) : to(e, t, l, n, o, r, i)
            );
          if (!(1 & n)) {
            var h = u && uo.call(e, "__wrapped__"),
              p = d && uo.call(t, "__wrapped__");
            if (h || p) {
              var g = h ? e.value() : e,
                y = p ? t.value() : t;
              return i || (i = new Jn()), r(g, y, n, o, i);
            }
          }
          return !!f && (i || (i = new Jn()), no(e, t, n, o, r, i));
        },
        ho = Rt;
      var po = function e(t, n, o, r, i) {
          return (
            t === n ||
            (null == t || null == n || (!ho(t) && !ho(n))
              ? t != t && n != n
              : fo(t, n, o, r, e, i))
          );
        },
        go = po;
      var yo = function (e, t, n) {
        var o = (n = "function" == typeof n ? n : void 0) ? n(e, t) : void 0;
        return void 0 === o ? go(e, t, void 0, n) : !!o;
      };
      const mo = (e, t, n) =>
          n.ignoreCase
            ? "string" == typeof e &&
              "string" == typeof t &&
              e.toLowerCase() === t.toLowerCase()
            : n.recursiveEqual
              ? yo(e, t, (e, t) =>
                  n.ignoreCase && "string" == typeof e && "string" == typeof t
                    ? e.toLowerCase() === t.toLowerCase()
                    : void 0,
                )
              : e === t,
        vo = (e, t) => {
          if (e === t) return 1;
          if (null === e || null === t) return 0;
          if ("object" != typeof e || "object" != typeof t) return 0;
          const n = Object.keys(e),
            o = Object.keys(t),
            r = n.length,
            i = o.length;
          if (0 === r || 0 === i) return 0;
          const s = new Set(n),
            a = new Set(o),
            l = new Set([...s].filter((e) => a.has(e)));
          return 0 === l.size
            ? 0
            : 1 !== l.size || (1 !== r && 1 !== i) || e[n[0]] === t[o[0]]
              ? Math.max(l.size / r, l.size / i)
              : 0;
        },
        xo = (e, t, n, r, a, l, d = [], h = []) => {
          if (
            (n && r
              ? (d.push({ level: a, type: "equal", text: `"${n}": [` }),
                h.push({ level: a, type: "equal", text: `"${r}": [` }))
              : (d.push({ level: a, type: "equal", text: "[" }),
                h.push({ level: a, type: "equal", text: "[" })),
            a >= (l.maxDepth || 1 / 0))
          )
            d.push({ level: a + 1, type: "equal", text: "..." }),
              h.push({ level: a + 1, type: "equal", text: "..." });
          else {
            const [p, g] = ((e, t, n, r, a, l) => {
              const d = Array(e.length + 1)
                  .fill(0)
                  .map(() => Array(t.length + 1).fill(0)),
                h = Array(e.length + 1)
                  .fill(0)
                  .map(() => Array(t.length + 1).fill(0));
              for (let t = 1; t <= e.length; t++) h[t][0] = "up";
              for (let e = 1; e <= t.length; e++) h[0][e] = "left";
              for (let n = 1; n <= e.length; n++)
                for (let o = 1; o <= t.length; o++) {
                  const r = c(e[n - 1]);
                  r !== c(t[o - 1]) || ("array" !== r && "object" !== r)
                    ? mo(e[n - 1], t[o - 1], l)
                      ? ((d[n][o] = d[n - 1][o - 1] + 1), (h[n][o] = "diag"))
                      : d[n - 1][o] >= d[n][o - 1]
                        ? ((d[n][o] = d[n - 1][o]), (h[n][o] = "up"))
                        : ((d[n][o] = d[n][o - 1]), (h[n][o] = "left"))
                    : l.recursiveEqual
                      ? mo(e[n - 1], t[o - 1], l) ||
                        vo(e[n - 1], t[o - 1]) > 0.5
                        ? ((d[n][o] = d[n - 1][o - 1] + 1), (h[n][o] = "diag"))
                        : d[n - 1][o] >= d[n][o - 1]
                          ? ((d[n][o] = d[n - 1][o]), (h[n][o] = "up"))
                          : ((d[n][o] = d[n][o - 1]), (h[n][o] = "left"))
                      : ((d[n][o] = d[n - 1][o - 1] + 1), (h[n][o] = "diag"));
                }
              let p = e.length,
                g = t.length,
                y = [],
                m = [];
              for (; p > 0 || g > 0; )
                if ("diag" === h[p][g]) {
                  const i = c(e[p - 1]);
                  if (
                    l.recursiveEqual &&
                    ("array" === i || "object" === i) &&
                    mo(e[p - 1], t[g - 1], l)
                  ) {
                    const n = [],
                      r = [];
                    u(n, r, "", "", e[p - 1], t[g - 1], a + 1, l),
                      (y = o(y, n.reverse(), !0)),
                      (m = o(m, r.reverse(), !0));
                  } else if ("array" === i) {
                    const [i, s] = xo(e[p - 1], t[g - 1], n, r, a + 1, l);
                    (y = o(y, i.reverse(), !0)), (m = o(m, s.reverse(), !0));
                  } else if ("object" === i) {
                    const [n, r] = f(e[p - 1], t[g - 1], a + 2, l, xo);
                    y.unshift({ level: a + 1, type: "equal", text: "}" }),
                      m.unshift({ level: a + 1, type: "equal", text: "}" }),
                      (y = o(y, n.reverse(), !0)),
                      (m = o(m, r.reverse(), !0)),
                      y.unshift({ level: a + 1, type: "equal", text: "{" }),
                      m.unshift({ level: a + 1, type: "equal", text: "{" });
                  } else {
                    const n = [],
                      r = [];
                    u(n, r, "", "", e[p - 1], t[g - 1], a + 1, l),
                      (y = o(y, n.reverse(), !0)),
                      (m = o(m, r.reverse(), !0));
                  }
                  p--, g--;
                } else if ("up" === h[p][g])
                  if (l.showModifications && p > 1 && "left" === h[p - 1][g]) {
                    const i = c(e[p - 1]);
                    if (i === c(t[g - 1]))
                      if ("array" === i) {
                        const [i, s] = xo(e[p - 1], t[g - 1], n, r, a + 1, l);
                        (y = o(y, i.reverse(), !0)),
                          (m = o(m, s.reverse(), !0));
                      } else if ("object" === i) {
                        const [n, r] = f(e[p - 1], t[g - 1], a + 2, l, xo);
                        y.unshift({ level: a + 1, type: "equal", text: "}" }),
                          m.unshift({ level: a + 1, type: "equal", text: "}" }),
                          (y = o(y, n.reverse(), !0)),
                          (m = o(m, r.reverse(), !0)),
                          y.unshift({ level: a + 1, type: "equal", text: "{" }),
                          m.unshift({ level: a + 1, type: "equal", text: "{" });
                      } else
                        y.unshift({
                          level: a + 1,
                          type: "modify",
                          text: s(e[p - 1]),
                        }),
                          m.unshift({
                            level: a + 1,
                            type: "modify",
                            text: s(t[g - 1]),
                          });
                    else {
                      const n = [],
                        r = [];
                      u(n, r, "", "", e[p - 1], t[g - 1], a + 1, l),
                        (y = o(y, n.reverse(), !0)),
                        (m = o(m, r.reverse(), !0));
                    }
                    p--, g--;
                  } else {
                    const t = i(e[p - 1], void 0, 1).split("\n");
                    for (let e = t.length - 1; e >= 0; e--) {
                      var v, x;
                      y.unshift({
                        level:
                          a +
                          1 +
                          ((null == (v = t[e].match(/^\s+/)) ||
                          null == (x = v[0])
                            ? void 0
                            : x.length) || 0),
                        type: "remove",
                        text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
                      }),
                        m.unshift({ level: a + 1, type: "equal", text: "" });
                    }
                    p--;
                  }
                else {
                  const e = i(t[g - 1], void 0, 1).split("\n");
                  for (let t = e.length - 1; t >= 0; t--) {
                    var w, b;
                    y.unshift({ level: a + 1, type: "equal", text: "" }),
                      m.unshift({
                        level:
                          a +
                          1 +
                          ((null == (w = e[t].match(/^\s+/)) ||
                          null == (b = w[0])
                            ? void 0
                            : b.length) || 0),
                        type: "add",
                        text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                      });
                  }
                  g--;
                }
              return [y, m];
            })(e, t, n, r, a, l);
            (d = o(d, p)), (h = o(h, g));
          }
          return (
            d.push({ level: a, type: "equal", text: "]" }),
            h.push({ level: a, type: "equal", text: "]" }),
            [d, h]
          );
        },
        wo = (e, t, n, r, i, a, l = [], d = []) => {
          if (
            ((e = [...e]),
            (t = [...t]),
            n && r
              ? (l.push({ level: i, type: "equal", text: `"${n}": [` }),
                d.push({ level: i, type: "equal", text: `"${r}": [` }))
              : (l.push({ level: i, type: "equal", text: "[" }),
                d.push({ level: i, type: "equal", text: "[" })),
            i >= (a.maxDepth || 1 / 0))
          )
            l.push({ level: i + 1, type: "equal", text: "..." }),
              d.push({ level: i + 1, type: "equal", text: "..." });
          else
            for (; e.length || t.length; ) {
              const n = e[0],
                r = t[0],
                m = c(n),
                v = c(r);
              if (e.length && t.length) {
                if (m !== v) u(l, d, "", "", n, r, i + 1, a);
                else if (
                  a.recursiveEqual &&
                  ["object", "array"].includes(m) &&
                  mo(n, r, a)
                )
                  u(l, d, "", "", n, r, i + 1, a);
                else if ("object" === m) {
                  l.push({ level: i + 1, type: "equal", text: "{" }),
                    d.push({ level: i + 1, type: "equal", text: "{" });
                  const [e, t] = f(n, r, i + 2, a, wo);
                  (l = o(l, e)),
                    (d = o(d, t)),
                    l.push({ level: i + 1, type: "equal", text: "}" }),
                    d.push({ level: i + 1, type: "equal", text: "}" });
                } else if ("array" === m) {
                  const [e, t] = wo(n, r, "", "", i + 1, a, [], []);
                  (l = o(l, e)), (d = o(d, t));
                } else
                  n === r
                    ? (l.push({ level: i + 1, type: "equal", text: s(n) }),
                      d.push({ level: i + 1, type: "equal", text: s(r) }))
                    : a.showModifications
                      ? (l.push({ level: i + 1, type: "modify", text: s(n) }),
                        d.push({ level: i + 1, type: "modify", text: s(r) }))
                      : (l.push({ level: i + 1, type: "remove", text: s(n) }),
                        l.push({ level: i + 1, type: "equal", text: "" }),
                        d.push({ level: i + 1, type: "equal", text: "" }),
                        d.push({ level: i + 1, type: "add", text: s(r) }));
                e.shift(), t.shift();
              } else if (e.length) {
                const t = s(n, void 0, !0).split("\n");
                for (let e = 0; e < t.length; e++) {
                  var h, p;
                  l.push({
                    level:
                      i +
                      1 +
                      ((null == (h = t[e].match(/^\s+/)) || null == (p = h[0])
                        ? void 0
                        : p.length) || 0),
                    type: "remove",
                    text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
                  }),
                    d.push({ level: i + 1, type: "equal", text: "" });
                }
                e.shift();
              } else if (t.length) {
                const e = s(r, void 0, !0).split("\n");
                for (let t = 0; t < e.length; t++) {
                  var g, y;
                  l.push({ level: i + 1, type: "equal", text: "" }),
                    d.push({
                      level:
                        i +
                        1 +
                        ((null == (g = e[t].match(/^\s+/)) || null == (y = g[0])
                          ? void 0
                          : y.length) || 0),
                      type: "add",
                      text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                    });
                }
                t.shift();
              }
            }
          return (
            l.push({ level: i, type: "equal", text: "]" }),
            d.push({ level: i, type: "equal", text: "]" }),
            [l, d]
          );
        };
      function bo() {
        return (
          (bo =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }),
          bo.apply(this, arguments)
        );
      }
      const Eo = (e, t) => {
        if (!e || "object" != typeof e) return e;
        if (Array.isArray(e)) {
          const n = [...e];
          return (
            n.sort((e, n) =>
              l(e, n, { ignoreCase: null == t ? void 0 : t.ignoreCase }),
            ),
            n.map((e) => Eo(e, t))
          );
        }
        const n = bo({}, e);
        for (const e in n) n[e] = Eo(n[e], t);
        return n;
      };
      function So() {
        return (
          (So =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }),
          So.apply(this, arguments)
        );
      }
      const _o = { level: 0, type: "equal", text: "" },
        Co = { level: 0, type: "equal", text: "{" },
        ko = { level: 0, type: "equal", text: "}" };
      let Mo = class {
        detectCircular(e) {
          if (this.options.detectCircular && r(e))
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
              ((e = Eo(e, this.options)), (t = Eo(t, this.options)));
          let n = [],
            r = [];
          const s = c(e);
          if (s !== c(t)) {
            (n = i(e, void 0, 1, this.options.maxDepth)
              .split("\n")
              .map((e) => {
                var t, n;
                return {
                  level:
                    (null == (t = e.match(/^\s+/)) || null == (n = t[0])
                      ? void 0
                      : n.length) || 0,
                  type: "remove",
                  text: e.replace(/^\s+/, "").replace(/,$/g, ""),
                  comma: e.endsWith(","),
                };
              })),
              (r = i(t, void 0, 1, this.options.maxDepth)
                .split("\n")
                .map((e) => {
                  var t, n;
                  return {
                    level:
                      (null == (t = e.match(/^\s+/)) || null == (n = t[0])
                        ? void 0
                        : n.length) || 0,
                    type: "add",
                    text: e.replace(/^\s+/, "").replace(/,$/g, ""),
                    comma: e.endsWith(","),
                  };
                }));
            const s = n.length,
              a = r.length;
            (n = o(
              n,
              Array(a)
                .fill(0)
                .map(() => So({}, _o)),
            )),
              (r = o(
                r,
                Array(s)
                  .fill(0)
                  .map(() => So({}, _o)),
                !0,
              ));
          } else
            "object" === s
              ? (([n, r] = f(e, t, 1, this.options, this.arrayDiffFunc)),
                n.unshift(So({}, Co)),
                n.push(So({}, ko)),
                r.unshift(So({}, Co)),
                r.push(So({}, ko)))
              : "array" === s
                ? ([n, r] = this.arrayDiffFunc(e, t, "", "", 0, this.options))
                : e !== t
                  ? this.options.ignoreCase
                    ? "string" == typeof e &&
                      "string" == typeof t &&
                      e.toLowerCase() === t.toLowerCase() &&
                      ((n = [{ level: 0, type: "equal", text: e }]),
                      (r = [{ level: 0, type: "equal", text: t }]))
                    : this.options.showModifications
                      ? ((n = [
                          {
                            level: 0,
                            type: "modify",
                            text: i(e, void 0, void 0, this.options.maxDepth),
                          },
                        ]),
                        (r = [
                          {
                            level: 0,
                            type: "modify",
                            text: i(t, void 0, void 0, this.options.maxDepth),
                          },
                        ]))
                      : ((n = [
                          {
                            level: 0,
                            type: "remove",
                            text: i(e, void 0, void 0, this.options.maxDepth),
                          },
                          So({}, _o),
                        ]),
                        (r = [
                          So({}, _o),
                          {
                            level: 0,
                            type: "add",
                            text: i(t, void 0, void 0, this.options.maxDepth),
                          },
                        ]))
                  : ((n = [
                      {
                        level: 0,
                        type: "equal",
                        text: i(e, void 0, void 0, this.options.maxDepth),
                      },
                    ]),
                    (r = [
                      {
                        level: 0,
                        type: "equal",
                        text: i(t, void 0, void 0, this.options.maxDepth),
                      },
                    ]));
          return (
            this.sortResultLines(n, r),
            this.calculateLineNumbers(n),
            this.calculateLineNumbers(r),
            this.calculateCommas(n),
            this.calculateCommas(r),
            [n, r]
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
        } = {}) {
          (this.options = {
            detectCircular: e,
            maxDepth: t,
            showModifications: n,
            arrayDiffMethod: o,
            ignoreCase: r,
            ignoreCaseForKey: i,
            recursiveEqual: s,
          }),
            (this.arrayDiffFunc = "lcs" === o || "unorder-lcs" === o ? xo : wo);
        }
      };
      var No = n(90626);
      function Po() {
        return (
          (Po =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }),
          Po.apply(this, arguments)
        );
      }
      const Ao = (e) => "hasLinesBefore" in e || "hasLinesAfter" in e,
        Oo = (e, t, n) => (Ao(e) ? n : t * (e.end - e.start + 1)),
        Io = (e, t) => {
          const n = [];
          let o, r;
          if (e.length && t.length)
            for (
              e = [...e],
                t = [...t],
                o = Po({}, e.shift()),
                r = Po({}, t.shift());
              ;
            ) {
              if (o.start === r.start) {
                const e = Math.min(o.end, r.end);
                n.push(Po({}, o, r, { end: e })), (o.start = r.start = e);
              } else if (o.start < r.start) {
                const e = Math.min(o.end, r.start);
                n.push(Po({}, r, o, { end: e })), (o.start = e);
              } else {
                const e = Math.min(o.start, r.end);
                n.push(Po({}, o, r, { end: e })), (r.start = e);
              }
              if (!e.length || !t.length) break;
              o.start === o.end && (o = Po({}, e.shift())),
                r.start === r.end && (r = Po({}, t.shift()));
            }
          return (
            e.length ||
              n.push(...t.map((e) => Po({}, e, { token: o.token || "plain" }))),
            t.length || n.push(...e),
            n
          );
        };
      var Bo = {};
      Object.defineProperty(Bo, "__esModule", { value: !0 }),
        (Bo.applyPatch =
          Bo.calcPatch =
          Lo =
          Bo.lcs =
          Bo.diff =
          Bo.diff_core =
            void 0);
      let Do = class {
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
                      f = i + s - 1,
                      h = a + l - 1,
                      p = (t + d) / 2;
                    let g;
                    t: for (let t = 0; t <= p; t++) {
                      const p = 2 * Math.max(0, t - l) - t,
                        y = t - 2 * Math.max(0, t - s);
                      for (let f = p; f <= y; f += 2) {
                        const h = n[f - 1 - c * Math.floor((f - 1) / c)],
                          p = n[f + 1 - c * Math.floor((f + 1) / c)],
                          y = f === -t || (f !== t && h < p) ? p : h + 1,
                          m = y - f;
                        let v = y,
                          x = m;
                        for (; v < s && x < l && o(i + v, a + x); ) v++, x++;
                        if (
                          ((n[f - c * Math.floor(f / c)] = v),
                          1 === d &&
                            (g = e - f) >= 1 - t &&
                            g < t &&
                            v + n[c + g - c * Math.floor(g / c)] >= s)
                        ) {
                          if (t > 1 || v !== y) {
                            (r[u++] = i + v),
                              (r[u++] = s - v),
                              (r[u++] = a + x),
                              (r[u++] = l - x),
                              (s = y),
                              (l = m),
                              (c = 2 * (Math.min(s, l) + 1));
                            continue e;
                          }
                          break t;
                        }
                      }
                      for (let m = p; m <= y; m += 2) {
                        const p = n[c + m - 1 - c * Math.floor((m - 1) / c)],
                          y = n[c + m + 1 - c * Math.floor((m + 1) / c)],
                          v = m === -t || (m !== t && p < y) ? y : p + 1,
                          x = v - m;
                        let w = v,
                          b = x;
                        for (; w < s && b < l && o(f - w, h - b); ) w++, b++;
                        if (
                          ((n[c + m - c * Math.floor(m / c)] = w),
                          0 === d &&
                            (g = e - m) >= -t &&
                            g <= t &&
                            w + n[g - c * Math.floor(g / c)] >= s)
                        ) {
                          if (t > 0 || w !== v) {
                            (r[u++] = i + s - v),
                              (r[u++] = v),
                              (r[u++] = a + l - x),
                              (r[u++] = x),
                              (s -= w),
                              (l -= b),
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
      function jo(e, t, n, o, r) {
        const i = 2 * (Math.min(t, o) + 1),
          s = t + o,
          a = new (
            s < 256 ? Uint8Array : s < 65536 ? Uint16Array : Uint32Array
          )(2 * i);
        return new Do({
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
      function zo(e, t) {
        let [n, o, r] = [0, e.length, t.length];
        for (; n < o && n < r && e[n] === t[n]; ) n++;
        if (n === o && n === r) return [][Symbol.iterator]();
        for (; e[--o] === t[--r] && o > n && r > n; );
        return jo(n, o + 1 - n, n, r + 1 - n, (n, o) => e[n] === t[o]);
      }
      (Bo.diff_core = jo), (Bo.diff = zo);
      let Ro = class {
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
      var Lo = (Bo.lcs = function (e, t) {
        return new Ro(zo(e, t), e.length);
      });
      (Bo.calcPatch = function* (e, t) {
        const n = ArrayBuffer.isView(e)
          ? Uint8Array.prototype.subarray
          : e.slice;
        for (const o of zo(e, t)) (o[2] = n.call(t, o[2], o[3])), yield o;
      }),
        (Bo.applyPatch = function* (e, t) {
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
      const $o = (e, t) => {
          const n = [];
          let o = 0;
          for (const r of e) n.push(o), (o += r.length + t);
          return n.push(o - t), n;
        },
        To = (e) => e.filter((e) => e.end > e.start),
        Vo = (e, t, n) => {
          if (!e) return [{ token: "plain", start: n, end: t.length + n }];
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
                  ...Vo(e, t.substring(o + 3), n + o + 3),
                ];
          }
          return "{" === t || "}" === t || "[" === t || "]" === t
            ? [{ token: "punctuation", start: n, end: t.length + n }]
            : [{ token: "plain", start: n, end: t.length + n }];
        },
        Ho = { threshold: 8, margin: 3 },
        Xo = (e, t, n) => {
          if (!n) return [{ start: 0, end: e.length, isEqual: !1 }];
          const o = [];
          for (let n = 0; n < e.length; n++)
            "equal" === e[n].type && "equal" === t[n].type
              ? o.length && o[o.length - 1].isEqual
                ? o[o.length - 1].end++
                : o.push({ start: n, end: n + 1, isEqual: !0 })
              : o.length && !o[o.length - 1].isEqual
                ? o[o.length - 1].end++
                : o.push({ start: n, end: n + 1, isEqual: !1 });
          const r = !0 === n ? Ho : n,
            { threshold: i, margin: s } = r;
          i < 2 * s + 1 &&
            console.warn(
              `Threshold (${i}) is no more than 2 margins + 1 "expand" line (${s} * 2 + 1), it's not necessary to hide unchanged areas which have less than ${2 * s + 1} lines.`,
            );
          const a = [];
          for (let t = 0; t < o.length; t++) {
            const n = o[t];
            !n.isEqual || n.end - n.start < i || n.end - n.start <= 2 * s + 1
              ? a.push(n)
              : t
                ? t === o.length - 1
                  ? (a.push({ start: n.start, end: n.start + s, isEqual: !0 }),
                    a.push({
                      hasLinesBefore: !1,
                      hasLinesAfter: !0,
                      start: n.start + s,
                      end: e.length,
                      isEqual: !0,
                    }))
                  : (a.push({ start: n.start, end: n.start + s, isEqual: !0 }),
                    a.push({
                      hasLinesBefore: !0,
                      hasLinesAfter: !0,
                      start: n.start + s,
                      end: n.end - s,
                      isEqual: !0,
                    }),
                    a.push({ start: n.end - s, end: n.end, isEqual: !0 }))
                : (a.push({
                    hasLinesBefore: !0,
                    hasLinesAfter: !1,
                    start: 0,
                    end: n.end - s,
                    isEqual: !0,
                  }),
                  a.push({ start: n.end - s, end: n.end, isEqual: !0 }));
          }
          return a;
        };
      function qo() {
        return (
          (qo =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }),
          qo.apply(this, arguments)
        );
      }
      const Zo = (e) => {
        var t, n;
        const [o, r] = e.diff,
          i = e.lineNumbers ? `calc(${String(o.length).length}ch + 16px)` : 0;
        var s;
        const a = null != (s = e.indent) ? s : 2,
          l = "tab" === a ? "\t" : " ",
          c = "tab" === a ? 1 : a,
          u = {
            mode:
              (null == (t = e.inlineDiffOptions) ? void 0 : t.mode) || "char",
            wordSeparator:
              (null == (n = e.inlineDiffOptions) ? void 0 : n.wordSeparator) ||
              "",
          };
        var d;
        const f = null != (d = e.hideUnchangedLines) && d,
          {
            scrollContainer: h = "body",
            itemHeight: p = 18,
            expandLineHeight: g = 26,
          } = e.virtual && !0 !== e.virtual ? e.virtual : {},
          y = "body" === h ? document.body : document.querySelector(h),
          m = No.useRef(o),
          v = No.useRef(r),
          x = No.useRef(Xo(o, r, f)),
          w = No.useRef([]),
          b = No.useRef(0),
          E = No.useRef(null),
          [, S] = No.useState({}),
          _ = () => {
            if (((w.current = []), e.virtual)) {
              let e = 0;
              for (const t of x.current)
                Ao(t)
                  ? (w.current.push(e), (e += g))
                  : (w.current.push(e), (e += p * (t.end - t.start)));
              b.current = x.current.reduce(
                (e, t) => (Ao(t) ? e + g : e + (t.end - t.start) * p),
                0,
              );
            }
            S({});
          };
        No.useEffect(() => {
          (m.current = o), (v.current = r), (x.current = Xo(o, r, f)), _();
        }, [f, o, r]),
          No.useEffect(() => {
            if (!e.virtual || !y) return;
            const t = () => S({});
            return (
              y.addEventListener("scroll", t),
              () => {
                y.removeEventListener("scroll", t);
              }
            );
          }, [e.virtual, y]);
        const C = (e) => (t) => {
            const n = [...x.current],
              o = n[e];
            (n[e] = qo({}, o, { end: Math.max(o.end - t, o.start) })),
              e + 1 < x.current.length - 1 &&
                (n[e + 1] = qo({}, n[e + 1], {
                  start: Math.max(o.end - t, o.start),
                })),
              (x.current = n),
              _();
          },
          k = (e) => (t) => {
            const n = [...x.current],
              o = n[e];
            (n[e] = qo({}, o, { start: Math.min(o.start + t, o.end) })),
              e > 1 &&
                (n[e - 1] = qo({}, n[e - 1], {
                  end: Math.min(o.start + t, o.end),
                })),
              (x.current = n),
              _();
          },
          M = (e) => () => {
            const t = [...x.current],
              n = t[e];
            (t[e] = qo({}, n, { start: n.start, end: n.start })),
              e + 1 < x.current.length - 1
                ? (t[e + 1] = qo({}, t[e + 1], { start: n.start }))
                : (t[e - 1] = qo({}, t[e - 1], { end: n.end })),
              (x.current = t),
              _();
          },
          N = (e, t = [], n = !1, o = !1) =>
            No.createElement(
              No.Fragment,
              null,
              t.map((t, n) => {
                const o = e.slice(t.start, t.end);
                if (!t.type && !t.token) return o;
                const r = [
                  t.type ? `inline-diff-${t.type}` : "",
                  t.token ? `token ${t.token}` : "",
                ]
                  .filter(Boolean)
                  .join(" ");
                return No.createElement(
                  "span",
                  { key: `${n}-${t.type}-${o}`, className: r },
                  o,
                );
              }),
              n &&
                (o
                  ? No.createElement(
                      "span",
                      { className: "token punctuation" },
                      ",",
                    )
                  : ","),
            ),
          P = (t, n) => {
            var o, r;
            const i = m.current[t],
              s = v.current[t],
              [a, d] =
                e.highlightInlineDiff &&
                "modify" === i.type &&
                "modify" === s.type
                  ? ((e, t, n) => {
                      let o = [],
                        r = [],
                        i = 0,
                        s = 0;
                      if ("word" === n.mode) {
                        const a = n.wordSeparator || " ",
                          l = e.split(a),
                          c = t.split(a),
                          u = [...Lo(l, c)],
                          d = a.length,
                          f = $o(l, d),
                          h = $o(c, d);
                        for (const [e, t, n] of u)
                          e > i &&
                            o.push({ type: "remove", start: f[i], end: f[e] }),
                            t > s &&
                              r.push({ type: "add", start: h[s], end: h[t] }),
                            (i = e + n),
                            (s = t + n),
                            o.push({ start: f[e], end: f[i] }),
                            r.push({ start: h[t], end: h[s] });
                        return (
                          e.length > i &&
                            o.push({
                              type: "remove",
                              start: f[i],
                              end: e.length,
                            }),
                          t.length > s &&
                            r.push({ type: "add", start: h[s], end: t.length }),
                          (o = To(o)),
                          (r = To(r)),
                          [o, r]
                        );
                      }
                      const a = Lo(e, t);
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
                        (o = To(o)),
                        (r = To(r)),
                        [o, r]
                      );
                    })(i.text, s.text, u)
                  : [[], []],
              f = Vo(n, i.text, 0),
              h = Vo(n, s.text, 0),
              p = Io(f, a),
              g = Io(h, d);
            var y;
            const x =
              "equal" !== i.type &&
              null != (y = null == (o = e.bgColour) ? void 0 : o[i.type])
                ? y
                : "";
            var w;
            const b =
              "equal" !== s.type &&
              null != (w = null == (r = e.bgColour) ? void 0 : r[s.type])
                ? w
                : "";
            return No.createElement(
              "tr",
              { key: t },
              e.lineNumbers &&
                No.createElement(
                  "td",
                  {
                    className: `line-${i.type} line-number`,
                    style: { backgroundColor: x },
                  },
                  i.lineNumber,
                ),
              No.createElement(
                "td",
                { className: `line-${i.type}`, style: { backgroundColor: x } },
                No.createElement(
                  "pre",
                  null,
                  i.text && l.repeat(i.level * c),
                  N(i.text, p, i.comma, n),
                ),
              ),
              e.lineNumbers &&
                No.createElement(
                  "td",
                  {
                    className: `line-${s.type} line-number`,
                    style: { backgroundColor: b },
                  },
                  s.lineNumber,
                ),
              No.createElement(
                "td",
                { className: `line-${s.type}`, style: { backgroundColor: b } },
                No.createElement(
                  "pre",
                  null,
                  s.text && l.repeat(s.level * c),
                  N(s.text, g, s.comma, n),
                ),
              ),
            );
          },
          A = (e, t, n, o) =>
            No.createElement(
              No.Fragment,
              null,
              e &&
                No.createElement(
                  "button",
                  { onClick: () => C(o)(n) },
                  "⬆️ Show ",
                  n,
                  " lines before",
                ),
              No.createElement(
                "button",
                { onClick: () => M(o)() },
                "↕️ Show all unchanged lines",
              ),
              t &&
                No.createElement(
                  "button",
                  { onClick: () => k(o)(n) },
                  "⬇️ Show ",
                  n,
                  " lines after",
                ),
            ),
          O = (e, t, n, o, r) => {
            let { start: i, end: s } = e;
            if (((i = Math.max(i, n)), (s = Math.min(s, o)), i === s))
              return null;
            if (!Ao(e))
              return Array(s - i)
                .fill(0)
                .map((e, t) => P(i + t, r));
            const { hasLinesBefore: a, hasLinesAfter: l } = e,
              c = "boolean" == typeof f ? 20 : f.expandMoreLinesLimit || 20;
            return [
              No.createElement(
                "tr",
                { key: `expand-line-${t}`, className: "expand-line" },
                No.createElement(
                  "td",
                  {
                    colSpan: 4,
                    className: `${a ? "has-lines-before" : ""} ${l ? "has-lines-after" : ""}`,
                  },
                  "boolean" != typeof f && f.expandLineRenderer
                    ? f.expandLineRenderer({
                        hasLinesBefore: a,
                        hasLinesAfter: l,
                        onExpandBefore: C(t),
                        onExpandAfter: k(t),
                        onExpandAll: M(t),
                      })
                    : A(a, l, c, t),
                ),
              ),
            ];
          },
          I = [
            "json-diff-viewer",
            e.virtual && "json-diff-viewer-virtual",
            e.syntaxHighlight &&
              `json-diff-viewer-theme-${e.syntaxHighlight.theme || "monokai"}`,
            e.className,
          ]
            .filter(Boolean)
            .join(" "),
          B = !!e.syntaxHighlight;
        return No.createElement(
          "table",
          { className: I, style: e.style },
          No.createElement(
            "colgroup",
            { className: "measure-line" },
            e.lineNumbers && No.createElement("col", { style: { width: i } }),
            No.createElement("col", null),
            e.lineNumbers && No.createElement("col", { style: { width: i } }),
            No.createElement("col", null),
          ),
          No.createElement(
            "tbody",
            { ref: E },
            ((t) => {
              if (!e.virtual)
                return x.current.map((e, n) => O(e, n, 0, m.current.length, t));
              var n;
              const o =
                null != (n = null == y ? void 0 : y.clientHeight) ? n : 0;
              var r;
              const i = null != (r = null == y ? void 0 : y.scrollTop) ? r : 0,
                s = i + o;
              let a = E.current;
              var l;
              let c = null != (l = null == a ? void 0 : a.offsetTop) ? l : 0;
              for (
                ;
                (null == a ? void 0 : a.offsetParent) &&
                (null == a ? void 0 : a.offsetParent) !== y;
              )
                (a = a.offsetParent), (c += a.offsetTop);
              if (c > s || c + b.current < i)
                return No.createElement(
                  "tr",
                  null,
                  No.createElement("td", {
                    colSpan: 4,
                    style: { height: `${b.current}px` },
                  }),
                );
              const u = i - c,
                d = s - c,
                [f, h, v, S] = ((e, t, n, o, r, i) => {
                  if (!t.length) return [0, 0, 0, 0];
                  let s = 0,
                    a = 0,
                    l = 0,
                    c = 0,
                    u = 0,
                    d = e.length - 1;
                  for (;;) {
                    let o = Math.floor((u + d) / 2);
                    if (
                      (t[o] + Oo(e[o], r, i) <= n ? (u = o + 1) : (d = o),
                      u === d)
                    ) {
                      s = u;
                      break;
                    }
                  }
                  const f = e[s];
                  for (
                    l = Ao(f) ? f.start : f.start + Math.floor((n - t[s]) / r),
                      u = 0,
                      d = e.length - 1;
                    ;
                  ) {
                    let e = Math.floor((u + d + 1) / 2);
                    if ((t[e] >= o ? (d = e - 1) : (u = e), u === d)) {
                      a = u;
                      break;
                    }
                  }
                  const h = e[a];
                  return (
                    (c = Ao(h) ? h.end : h.start + Math.ceil((o - t[a]) / r)),
                    [s, l, a, c]
                  );
                })(x.current, w.current, u, d, p, g),
                [_, C] = ((e, t, n, o, r, i, s, a, l) => {
                  if (!t.length) return [0, 0];
                  let c = 0,
                    u = 0;
                  const d = e[n];
                  c = Ao(d) ? t[n] : t[n] + (o - d.start) * s;
                  const f = e[r];
                  return (
                    (u = Ao(f) ? l - t[r] - a : l - t[r] - (i - f.start) * s),
                    [c, u]
                  );
                })(x.current, w.current, f, h, v, S, p, g, b.current),
                k = x.current.slice(f, v + 1);
              return k.length
                ? No.createElement(
                    No.Fragment,
                    null,
                    No.createElement(
                      "tr",
                      null,
                      No.createElement("td", {
                        colSpan: 4,
                        style: { height: _, padding: 0 },
                      }),
                    ),
                    k.map((e, n) => O(e, n, h, S, t)),
                    No.createElement(
                      "tr",
                      null,
                      No.createElement("td", {
                        colSpan: 4,
                        style: { height: C, padding: 0 },
                      }),
                    ),
                  )
                : No.createElement(
                    "tr",
                    null,
                    No.createElement("td", {
                      colSpan: 4,
                      style: { height: `${b.current}px` },
                    }),
                  );
            })(B),
          ),
        );
      };
      Zo.displayName = "Viewer";
    },
    66251: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => l });
      var o = n(1839),
        r = n(76549),
        i = n(36058),
        s = n(55241),
        a = n(5608),
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
    18994: (e, t, n) => {
      "use strict";
      var o = n(90626),
        r = n(61702);
      var i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        s = r.useSyncExternalStore,
        a = o.useRef,
        l = o.useEffect,
        c = o.useMemo,
        u = o.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, o, r) {
        var d = a(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        d = c(
          function () {
            function e(e) {
              if (!l) {
                if (
                  ((l = !0), (s = e), (e = o(e)), void 0 !== r && f.hasValue)
                ) {
                  var t = f.value;
                  if (r(t, e)) return (a = t);
                }
                return (a = e);
              }
              if (((t = a), i(s, e))) return t;
              var n = o(e);
              return void 0 !== r && r(t, n) ? t : ((s = e), (a = n));
            }
            var s,
              a,
              l = !1,
              c = void 0 === n ? null : n;
            return [
              function () {
                return e(t());
              },
              null === c
                ? void 0
                : function () {
                    return e(c());
                  },
            ];
          },
          [t, n, o, r],
        );
        var h = s(e, d[0], d[1]);
        return (
          l(
            function () {
              (f.hasValue = !0), (f.value = h);
            },
            [h],
          ),
          u(h),
          h
        );
      };
    },
    72648: (e, t, n) => {
      "use strict";
      e.exports = n(18994);
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
          return h(e[t]);
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
              return e.apply(p(this), t), h(this.request);
            }
          : function (...t) {
              return h(e.apply(p(this), t));
            };
      }
      function f(e) {
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
      function h(e) {
        if (e instanceof IDBRequest)
          return (function (e) {
            const t = new Promise((t, n) => {
              const o = () => {
                  e.removeEventListener("success", r),
                    e.removeEventListener("error", i);
                },
                r = () => {
                  t(h(e.result)), o();
                },
                i = () => {
                  n(e.error), o();
                };
              e.addEventListener("success", r), e.addEventListener("error", i);
            });
            return l.set(t, e), t;
          })(e);
        if (a.has(e)) return a.get(e);
        const t = f(e);
        return t !== e && (a.set(e, t), l.set(t, e)), t;
      }
      const p = (e) => l.get(e);
      function g(
        e,
        t,
        { blocked: n, upgrade: o, blocking: r, terminated: i } = {},
      ) {
        const s = indexedDB.open(e, t),
          a = h(s);
        return (
          o &&
            s.addEventListener("upgradeneeded", (e) => {
              o(h(s.result), e.oldVersion, e.newVersion, h(s.transaction), e);
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
      const y = ["get", "getKey", "getAll", "getAllKeys", "count"],
        m = ["put", "add", "delete", "clear"],
        v = new Map();
      function x(e, t) {
        if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t)
          return;
        if (v.get(t)) return v.get(t);
        const n = t.replace(/FromIndex$/, ""),
          o = t !== n,
          r = m.includes(n);
        if (
          !(n in (o ? IDBIndex : IDBObjectStore).prototype) ||
          (!r && !y.includes(n))
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
      const w = ["continue", "continuePrimaryKey", "advance"],
        b = {},
        E = new WeakMap(),
        S = new WeakMap(),
        _ = {
          get(e, t) {
            if (!w.includes(t)) return e[t];
            let n = b[t];
            return (
              n ||
                (n = b[t] =
                  function (...e) {
                    E.set(this, S.get(this)[t](...e));
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
        for (S.set(n, t), l.set(n, p(t)); t; )
          yield n, (t = await (E.get(n) || t.continue())), E.delete(n);
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

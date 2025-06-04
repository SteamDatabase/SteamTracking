import { m as Ee, p as ie } from "./chunk-TSBVJ6DK.js";
import { a as M } from "./chunk-GI6JRRGT.js";
import { d as Ce, e as x } from "./chunk-QYDZXQ52.js";
var R = class {
  constructor() {
    (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(e) {
    return (
      this.listeners.add(e),
      this.onSubscribe(),
      () => {
        this.listeners.delete(e), this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
};
var S = typeof window > "u" || "Deno" in globalThis;
function v() {}
function He(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function J(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function oe(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function F(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function O(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ae(e, t) {
  let {
    type: r = "all",
    exact: s,
    fetchStatus: n,
    predicate: i,
    queryKey: u,
    stale: o,
  } = e;
  if (u) {
    if (s) {
      if (t.queryHash !== Y(u, t.options)) return !1;
    } else if (!K(t.queryKey, u)) return !1;
  }
  if (r !== "all") {
    let a = t.isActive();
    if ((r === "active" && !a) || (r === "inactive" && a)) return !1;
  }
  return !(
    (typeof o == "boolean" && t.isStale() !== o) ||
    (n && n !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function ue(e, t) {
  let { exact: r, status: s, predicate: n, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (P(t.options.mutationKey) !== P(i)) return !1;
    } else if (!K(t.options.mutationKey, i)) return !1;
  }
  return !((s && t.state.status !== s) || (n && !n(t)));
}
function Y(e, t) {
  return (t?.queryKeyHashFn || P)(e);
}
function P(e) {
  return JSON.stringify(e, (t, r) =>
    Te(r)
      ? Object.keys(r)
          .sort()
          .reduce((s, n) => ((s[n] = r[n]), s), {})
      : r,
  );
}
function K(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? !Object.keys(t).some((r) => !K(e[r], t[r]))
        : !1;
}
function X(e, t) {
  if (e === t) return e;
  let r = je(e) && je(t);
  if (r || (Te(e) && Te(t))) {
    let s = r ? e : Object.keys(e),
      n = s.length,
      i = r ? t : Object.keys(t),
      u = i.length,
      o = r ? [] : {},
      a = 0;
    for (let h = 0; h < u; h++) {
      let l = r ? h : i[h];
      ((!r && s.includes(l)) || r) && e[l] === void 0 && t[l] === void 0
        ? ((o[l] = void 0), a++)
        : ((o[l] = X(e[l], t[l])), o[l] === e[l] && e[l] !== void 0 && a++);
    }
    return n === u && a === n ? e : o;
  }
  return t;
}
function B(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let r in e) if (e[r] !== t[r]) return !1;
  return !0;
}
function je(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Te(e) {
  if (!Le(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let r = t.prototype;
  return !(
    !Le(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Le(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ke(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function ee(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (0)
      try {
      } catch (s) {}
    return X(e, t);
  }
  return t;
}
function Be(e, t, r = 0) {
  let s = [...e, t];
  return r && s.length > r ? s.slice(1) : s;
}
function ze(e, t, r = 0) {
  let s = [t, ...e];
  return r && s.length > r ? s.slice(0, -1) : s;
}
var z = Symbol();
function le(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === z
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var bt = class extends R {
    #e;
    #t;
    #s;
    constructor() {
      super(),
        (this.#s = (e) => {
          if (!S && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener("visibilitychange", t, !1),
              () => {
                window.removeEventListener("visibilitychange", t);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#s);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      (this.#s = e),
        this.#t?.(),
        (this.#t = e((t) => {
          typeof t == "boolean" ? this.setFocused(t) : this.onFocus();
        }));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  G = new bt();
var vt = class extends R {
    #e = !0;
    #t;
    #s;
    constructor() {
      super(),
        (this.#s = (e) => {
          if (!S && window.addEventListener) {
            let t = () => e(!0),
              r = () => e(!1);
            return (
              window.addEventListener("online", t, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", t),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#s);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      (this.#s = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this)));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((r) => {
          r(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  $ = new vt();
function te() {
  let e,
    t,
    r = new Promise((n, i) => {
      (e = n), (t = i);
    });
  (r.status = "pending"), r.catch(() => {});
  function s(n) {
    Object.assign(r, n), delete r.resolve, delete r.reject;
  }
  return (
    (r.resolve = (n) => {
      s({ status: "fulfilled", value: n }), e(n);
    }),
    (r.reject = (n) => {
      s({ status: "rejected", reason: n }), t(n);
    }),
    r
  );
}
function wt(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Pe(e) {
  return (e ?? "online") === "online" ? $.isOnline() : !0;
}
var Ge = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e?.revert),
      (this.silent = e?.silent);
  }
};
function ce(e) {
  return e instanceof Ge;
}
function he(e) {
  let t = !1,
    r = 0,
    s = !1,
    n,
    i = te(),
    u = (c) => {
      s || (p(new Ge(c)), e.abort?.());
    },
    o = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    h = () =>
      G.isFocused() &&
      (e.networkMode === "always" || $.isOnline()) &&
      e.canRun(),
    l = () => Pe(e.networkMode) && e.canRun(),
    b = (c) => {
      s || ((s = !0), e.onSuccess?.(c), n?.(), i.resolve(c));
    },
    p = (c) => {
      s || ((s = !0), e.onError?.(c), n?.(), i.reject(c));
    },
    y = () =>
      new Promise((c) => {
        (n = (m) => {
          (s || h()) && c(m);
        }),
          e.onPause?.();
      }).then(() => {
        (n = void 0), s || e.onContinue?.();
      }),
    d = () => {
      if (s) return;
      let c,
        m = r === 0 ? e.initialPromise : void 0;
      try {
        c = m ?? e.fn();
      } catch (g) {
        c = Promise.reject(g);
      }
      Promise.resolve(c)
        .then(b)
        .catch((g) => {
          if (s) return;
          let E = e.retry ?? (S ? 0 : 3),
            Q = e.retryDelay ?? wt,
            U = typeof Q == "function" ? Q(r, g) : Q,
            Ie =
              E === !0 ||
              (typeof E == "number" && r < E) ||
              (typeof E == "function" && E(r, g));
          if (t || !Ie) {
            p(g);
            return;
          }
          r++,
            e.onFail?.(r, g),
            Ke(U)
              .then(() => (h() ? void 0 : y()))
              .then(() => {
                t ? p(g) : d();
              });
        });
    };
  return {
    promise: i,
    cancel: u,
    continue: () => (n?.(), i),
    cancelRetry: o,
    continueRetry: a,
    canStart: l,
    start: () => (l() ? d() : y().then(d), i),
  };
}
function Rt() {
  let e = [],
    t = 0,
    r = (o) => {
      o();
    },
    s = (o) => {
      o();
    },
    n = (o) => setTimeout(o, 0),
    i = (o) => {
      t
        ? e.push(o)
        : n(() => {
            r(o);
          });
    },
    u = () => {
      let o = e;
      (e = []),
        o.length &&
          n(() => {
            s(() => {
              o.forEach((a) => {
                r(a);
              });
            });
          });
    };
  return {
    batch: (o) => {
      let a;
      t++;
      try {
        a = o();
      } finally {
        t--, t || u();
      }
      return a;
    },
    batchCalls:
      (o) =>
      (...a) => {
        i(() => {
          o(...a);
        });
      },
    schedule: i,
    setNotifyFunction: (o) => {
      r = o;
    },
    setBatchNotifyFunction: (o) => {
      s = o;
    },
    setScheduler: (o) => {
      n = o;
    },
  };
}
var f = Rt();
var de = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      J(this.gcTime) &&
        (this.#e = setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e ?? (S ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.#e && (clearTimeout(this.#e), (this.#e = void 0));
  }
};
var $e = class extends de {
  #e;
  #t;
  #s;
  #r;
  #n;
  #i;
  constructor(e) {
    super(),
      (this.#i = !1),
      (this.#n = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#s = e.cache),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#e = St(this.options)),
      (this.state = e.state ?? this.#e),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    return this.#r?.promise;
  }
  setOptions(e) {
    (this.options = { ...this.#n, ...e }),
      this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.#s.remove(this);
  }
  setData(e, t) {
    let r = ee(this.state.data, e, this.options);
    return (
      this.#o({
        data: r,
        type: "success",
        dataUpdatedAt: t?.updatedAt,
        manual: t?.manual,
      }),
      r
    );
  }
  setState(e, t) {
    this.#o({ type: "setState", state: e, setStateOptions: t });
  }
  cancel(e) {
    let t = this.#r?.promise;
    return this.#r?.cancel(e), t ? t.then(v).catch(v) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.#e);
  }
  isActive() {
    return this.observers.some((e) => O(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === z ||
          this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated
      ? !0
      : this.getObserversCount() > 0
        ? this.observers.some((e) => e.getCurrentResult().isStale)
        : this.state.data === void 0;
  }
  isStaleByTime(e = 0) {
    return (
      this.state.isInvalidated ||
      this.state.data === void 0 ||
      !oe(this.state.dataUpdatedAt, e)
    );
  }
  onFocus() {
    this.observers
      .find((t) => t.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#r?.continue();
  }
  onOnline() {
    this.observers
      .find((t) => t.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#r?.continue();
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#s.notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.#r &&
          (this.#i ? this.#r.cancel({ revert: !0 }) : this.#r.cancelRetry()),
        this.scheduleGc()),
      this.#s.notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.#o({ type: "invalidate" });
  }
  fetch(e, t) {
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#r) return this.#r.continueRetry(), this.#r.promise;
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let o = this.observers.find((a) => a.options.queryFn);
      o && this.setOptions(o.options);
    }
    let r = new AbortController(),
      s = (o) => {
        Object.defineProperty(o, "signal", {
          enumerable: !0,
          get: () => ((this.#i = !0), r.signal),
        });
      },
      n = () => {
        let o = le(this.options, t),
          a = { queryKey: this.queryKey, meta: this.meta };
        return (
          s(a),
          (this.#i = !1),
          this.options.persister ? this.options.persister(o, a, this) : o(a)
        );
      },
      i = {
        fetchOptions: t,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: n,
      };
    s(i),
      this.options.behavior?.onFetch(i, this),
      (this.#t = this.state),
      (this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !== i.fetchOptions?.meta) &&
        this.#o({ type: "fetch", meta: i.fetchOptions?.meta });
    let u = (o) => {
      (ce(o) && o.silent) || this.#o({ type: "error", error: o }),
        ce(o) ||
          (this.#s.config.onError?.(o, this),
          this.#s.config.onSettled?.(this.state.data, o, this)),
        this.scheduleGc();
    };
    return (
      (this.#r = he({
        initialPromise: t?.initialPromise,
        fn: i.fetchFn,
        abort: r.abort.bind(r),
        onSuccess: (o) => {
          if (o === void 0) {
            u(new Error(`${this.queryHash} data is undefined`));
            return;
          }
          try {
            this.setData(o);
          } catch (a) {
            u(a);
            return;
          }
          this.#s.config.onSuccess?.(o, this),
            this.#s.config.onSettled?.(o, this.state.error, this),
            this.scheduleGc();
        },
        onError: u,
        onFail: (o, a) => {
          this.#o({ type: "failed", failureCount: o, error: a });
        },
        onPause: () => {
          this.#o({ type: "pause" });
        },
        onContinue: () => {
          this.#o({ type: "continue" });
        },
        retry: i.options.retry,
        retryDelay: i.options.retryDelay,
        networkMode: i.options.networkMode,
        canRun: () => !0,
      })),
      this.#r.start()
    );
  }
  #o(e) {
    let t = (r) => {
      switch (e.type) {
        case "failed":
          return {
            ...r,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          };
        case "pause":
          return { ...r, fetchStatus: "paused" };
        case "continue":
          return { ...r, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...r,
            ...ke(r.data, this.options),
            fetchMeta: e.meta ?? null,
          };
        case "success":
          return {
            ...r,
            data: e.data,
            dataUpdateCount: r.dataUpdateCount + 1,
            dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...(!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
        case "error":
          let s = e.error;
          return ce(s) && s.revert && this.#t
            ? { ...this.#t, fetchStatus: "idle" }
            : {
                ...r,
                error: s,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: s,
                fetchStatus: "idle",
                status: "error",
              };
        case "invalidate":
          return { ...r, isInvalidated: !0 };
        case "setState":
          return { ...r, ...e.state };
      }
    };
    (this.state = t(this.state)),
      f.batch(() => {
        this.observers.forEach((r) => {
          r.onQueryUpdate();
        }),
          this.#s.notify({ query: this, type: "updated", action: e });
      });
  }
};
function ke(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Pe(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function St(e) {
  let t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
    r = t !== void 0,
    s = r
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (s ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Ve = class extends R {
  constructor(e = {}) {
    super(), (this.config = e), (this.#e = new Map());
  }
  #e;
  build(e, t, r) {
    let s = t.queryKey,
      n = t.queryHash ?? Y(s, t),
      i = this.get(n);
    return (
      i ||
        ((i = new $e({
          cache: this,
          queryKey: s,
          queryHash: n,
          options: e.defaultQueryOptions(t),
          state: r,
          defaultOptions: e.getQueryDefaults(s),
        })),
        this.add(i)),
      i
    );
  }
  add(e) {
    this.#e.has(e.queryHash) ||
      (this.#e.set(e.queryHash, e), this.notify({ type: "added", query: e }));
  }
  remove(e) {
    let t = this.#e.get(e.queryHash);
    t &&
      (e.destroy(),
      t === e && this.#e.delete(e.queryHash),
      this.notify({ type: "removed", query: e }));
  }
  clear() {
    f.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return this.#e.get(e);
  }
  getAll() {
    return [...this.#e.values()];
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((r) => ae(t, r));
  }
  findAll(e = {}) {
    let t = this.getAll();
    return Object.keys(e).length > 0 ? t.filter((r) => ae(e, r)) : t;
  }
  notify(e) {
    f.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  onFocus() {
    f.batch(() => {
      this.getAll().forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    f.batch(() => {
      this.getAll().forEach((e) => {
        e.onOnline();
      });
    });
  }
};
var We = class extends de {
  #e;
  #t;
  #s;
  constructor(e) {
    super(),
      (this.mutationId = e.mutationId),
      (this.#t = e.mutationCache),
      (this.#e = []),
      (this.state = e.state || Qe()),
      this.setOptions(e.options),
      this.scheduleGc();
  }
  setOptions(e) {
    (this.options = e), this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#e.includes(e) ||
      (this.#e.push(e),
      this.clearGcTimeout(),
      this.#t.notify({ type: "observerAdded", mutation: this, observer: e }));
  }
  removeObserver(e) {
    (this.#e = this.#e.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#t.notify({ type: "observerRemoved", mutation: this, observer: e });
  }
  optionalRemove() {
    this.#e.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#t.remove(this));
  }
  continue() {
    return this.#s?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    this.#s = he({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (s, n) => {
        this.#r({ type: "failed", failureCount: s, error: n });
      },
      onPause: () => {
        this.#r({ type: "pause" });
      },
      onContinue: () => {
        this.#r({ type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#t.canRun(this),
    });
    let t = this.state.status === "pending",
      r = !this.#s.canStart();
    try {
      if (!t) {
        this.#r({ type: "pending", variables: e, isPaused: r }),
          await this.#t.config.onMutate?.(e, this);
        let n = await this.options.onMutate?.(e);
        n !== this.state.context &&
          this.#r({ type: "pending", context: n, variables: e, isPaused: r });
      }
      let s = await this.#s.start();
      return (
        await this.#t.config.onSuccess?.(s, e, this.state.context, this),
        await this.options.onSuccess?.(s, e, this.state.context),
        await this.#t.config.onSettled?.(
          s,
          null,
          this.state.variables,
          this.state.context,
          this,
        ),
        await this.options.onSettled?.(s, null, e, this.state.context),
        this.#r({ type: "success", data: s }),
        s
      );
    } catch (s) {
      try {
        throw (
          (await this.#t.config.onError?.(s, e, this.state.context, this),
          await this.options.onError?.(s, e, this.state.context),
          await this.#t.config.onSettled?.(
            void 0,
            s,
            this.state.variables,
            this.state.context,
            this,
          ),
          await this.options.onSettled?.(void 0, s, e, this.state.context),
          s)
        );
      } finally {
        this.#r({ type: "error", error: s });
      }
    } finally {
      this.#t.runNext(this);
    }
  }
  #r(e) {
    let t = (r) => {
      switch (e.type) {
        case "failed":
          return { ...r, failureCount: e.failureCount, failureReason: e.error };
        case "pause":
          return { ...r, isPaused: !0 };
        case "continue":
          return { ...r, isPaused: !1 };
        case "pending":
          return {
            ...r,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: "pending",
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...r,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: e.error,
            failureCount: r.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    (this.state = t(this.state)),
      f.batch(() => {
        this.#e.forEach((r) => {
          r.onMutationUpdate(e);
        }),
          this.#t.notify({ mutation: this, type: "updated", action: e });
      });
  }
};
function Qe() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Ze = class extends R {
  constructor(e = {}) {
    super(), (this.config = e), (this.#e = new Map()), (this.#t = Date.now());
  }
  #e;
  #t;
  build(e, t, r) {
    let s = new We({
      mutationCache: this,
      mutationId: ++this.#t,
      options: e.defaultMutationOptions(t),
      state: r,
    });
    return this.add(s), s;
  }
  add(e) {
    let t = fe(e),
      r = this.#e.get(t) ?? [];
    r.push(e), this.#e.set(t, r), this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    let t = fe(e);
    if (this.#e.has(t)) {
      let r = this.#e.get(t)?.filter((s) => s !== e);
      r && (r.length === 0 ? this.#e.delete(t) : this.#e.set(t, r));
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    let t = this.#e.get(fe(e))?.find((r) => r.state.status === "pending");
    return !t || t === e;
  }
  runNext(e) {
    return (
      this.#e
        .get(fe(e))
        ?.find((r) => r !== e && r.state.isPaused)
        ?.continue() ?? Promise.resolve()
    );
  }
  clear() {
    f.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return [...this.#e.values()].flat();
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((r) => ue(t, r));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => ue(e, t));
  }
  notify(e) {
    f.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((t) => t.state.isPaused);
    return f.batch(() => Promise.all(e.map((t) => t.continue().catch(v))));
  }
};
function fe(e) {
  return e.options.scope?.id ?? String(e.mutationId);
}
function Me(e) {
  return {
    onFetch: (t, r) => {
      let s = t.options,
        n = t.fetchOptions?.meta?.fetchMore?.direction,
        i = t.state.data?.pages || [],
        u = t.state.data?.pageParams || [],
        o = { pages: [], pageParams: [] },
        a = 0,
        h = async () => {
          let l = !1,
            b = (d) => {
              Object.defineProperty(d, "signal", {
                enumerable: !0,
                get: () => (
                  t.signal.aborted
                    ? (l = !0)
                    : t.signal.addEventListener("abort", () => {
                        l = !0;
                      }),
                  t.signal
                ),
              });
            },
            p = le(t.options, t.fetchOptions),
            y = async (d, c, m) => {
              if (l) return Promise.reject();
              if (c == null && d.pages.length) return Promise.resolve(d);
              let g = {
                queryKey: t.queryKey,
                pageParam: c,
                direction: m ? "backward" : "forward",
                meta: t.options.meta,
              };
              b(g);
              let E = await p(g),
                { maxPages: Q } = t.options,
                U = m ? ze : Be;
              return {
                pages: U(d.pages, E, Q),
                pageParams: U(d.pageParams, c, Q),
              };
            };
          if (n && i.length) {
            let d = n === "backward",
              c = d ? xt : Je,
              m = { pages: i, pageParams: u },
              g = c(s, m);
            o = await y(m, g, d);
          } else {
            let d = e ?? i.length;
            do {
              let c = a === 0 ? (u[0] ?? s.initialPageParam) : Je(s, o);
              if (a > 0 && c == null) break;
              (o = await y(o, c)), a++;
            } while (a < d);
          }
          return o;
        };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              h,
              { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
              r,
            ))
        : (t.fetchFn = h);
    },
  };
}
function Je(e, { pages: t, pageParams: r }) {
  let s = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[s], t, r[s], r) : void 0;
}
function xt(e, { pages: t, pageParams: r }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
}
var Ot = class {
  #e;
  #t;
  #s;
  #r;
  #n;
  #i;
  #o;
  #a;
  constructor(e = {}) {
    (this.#e = e.queryCache || new Ve()),
      (this.#t = e.mutationCache || new Ze()),
      (this.#s = e.defaultOptions || {}),
      (this.#r = new Map()),
      (this.#n = new Map()),
      (this.#i = 0);
  }
  mount() {
    this.#i++,
      this.#i === 1 &&
        ((this.#o = G.subscribe(async (e) => {
          e && (await this.resumePausedMutations(), this.#e.onFocus());
        })),
        (this.#a = $.subscribe(async (e) => {
          e && (await this.resumePausedMutations(), this.#e.onOnline());
        })));
  }
  unmount() {
    this.#i--,
      this.#i === 0 &&
        (this.#o?.(), (this.#o = void 0), this.#a?.(), (this.#a = void 0));
  }
  isFetching(e) {
    return this.#e.findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return this.#t.findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    let t = this.defaultQueryOptions({ queryKey: e });
    return this.#e.get(t.queryHash)?.state.data;
  }
  ensureQueryData(e) {
    let t = this.getQueryData(e.queryKey);
    if (t === void 0) return this.fetchQuery(e);
    {
      let r = this.defaultQueryOptions(e),
        s = this.#e.build(this, r);
      return (
        e.revalidateIfStale &&
          s.isStaleByTime(F(r.staleTime, s)) &&
          this.prefetchQuery(r),
        Promise.resolve(t)
      );
    }
  }
  getQueriesData(e) {
    return this.#e.findAll(e).map(({ queryKey: t, state: r }) => {
      let s = r.data;
      return [t, s];
    });
  }
  setQueryData(e, t, r) {
    let s = this.defaultQueryOptions({ queryKey: e }),
      i = this.#e.get(s.queryHash)?.state.data,
      u = He(t, i);
    if (u !== void 0)
      return this.#e.build(this, s).setData(u, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return f.batch(() =>
      this.#e
        .findAll(e)
        .map(({ queryKey: s }) => [s, this.setQueryData(s, t, r)]),
    );
  }
  getQueryState(e) {
    let t = this.defaultQueryOptions({ queryKey: e });
    return this.#e.get(t.queryHash)?.state;
  }
  removeQueries(e) {
    let t = this.#e;
    f.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    let r = this.#e,
      s = { type: "active", ...e };
    return f.batch(
      () => (
        r.findAll(e).forEach((n) => {
          n.reset();
        }),
        this.refetchQueries(s, t)
      ),
    );
  }
  cancelQueries(e = {}, t = {}) {
    let r = { revert: !0, ...t },
      s = f.batch(() => this.#e.findAll(e).map((n) => n.cancel(r)));
    return Promise.all(s).then(v).catch(v);
  }
  invalidateQueries(e = {}, t = {}) {
    return f.batch(() => {
      if (
        (this.#e.findAll(e).forEach((s) => {
          s.invalidate();
        }),
        e.refetchType === "none")
      )
        return Promise.resolve();
      let r = { ...e, type: e.refetchType ?? e.type ?? "active" };
      return this.refetchQueries(r, t);
    });
  }
  refetchQueries(e = {}, t) {
    let r = { ...t, cancelRefetch: t?.cancelRefetch ?? !0 },
      s = f.batch(() =>
        this.#e
          .findAll(e)
          .filter((n) => !n.isDisabled())
          .map((n) => {
            let i = n.fetch(void 0, r);
            return (
              r.throwOnError || (i = i.catch(v)),
              n.state.fetchStatus === "paused" ? Promise.resolve() : i
            );
          }),
      );
    return Promise.all(s).then(v);
  }
  fetchQuery(e) {
    let t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    let r = this.#e.build(this, t);
    return r.isStaleByTime(F(t.staleTime, r))
      ? r.fetch(t)
      : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(v).catch(v);
  }
  fetchInfiniteQuery(e) {
    return (e.behavior = Me(e.pages)), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(v).catch(v);
  }
  ensureInfiniteQueryData(e) {
    return (e.behavior = Me(e.pages)), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return $.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return this.#e;
  }
  getMutationCache() {
    return this.#t;
  }
  getDefaultOptions() {
    return this.#s;
  }
  setDefaultOptions(e) {
    this.#s = e;
  }
  setQueryDefaults(e, t) {
    this.#r.set(P(e), { queryKey: e, defaultOptions: t });
  }
  getQueryDefaults(e) {
    let t = [...this.#r.values()],
      r = {};
    return (
      t.forEach((s) => {
        K(e, s.queryKey) && (r = { ...r, ...s.defaultOptions });
      }),
      r
    );
  }
  setMutationDefaults(e, t) {
    this.#n.set(P(e), { mutationKey: e, defaultOptions: t });
  }
  getMutationDefaults(e) {
    let t = [...this.#n.values()],
      r = {};
    return (
      t.forEach((s) => {
        K(e, s.mutationKey) && (r = { ...r, ...s.defaultOptions });
      }),
      r
    );
  }
  defaultQueryOptions(e) {
    if (e._defaulted) return e;
    let t = {
      ...this.#s.queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0,
    };
    return (
      t.queryHash || (t.queryHash = Y(t.queryKey, t)),
      t.refetchOnReconnect === void 0 &&
        (t.refetchOnReconnect = t.networkMode !== "always"),
      t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
      !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
      t.enabled !== !0 && t.queryFn === z && (t.enabled = !1),
      t
    );
  }
  defaultMutationOptions(e) {
    return e?._defaulted
      ? e
      : {
          ...this.#s.mutations,
          ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
          ...e,
          _defaulted: !0,
        };
  }
  clear() {
    this.#e.clear(), this.#t.clear();
  }
};
var N = class extends R {
  constructor(e, t) {
    super(),
      (this.options = t),
      (this.#e = e),
      (this.#a = null),
      (this.#o = te()),
      this.options.experimental_prefetchInRender ||
        this.#o.reject(
          new Error(
            "experimental_prefetchInRender feature flag is not enabled",
          ),
        ),
      this.bindMethods(),
      this.setOptions(t);
  }
  #e;
  #t = void 0;
  #s = void 0;
  #r = void 0;
  #n;
  #i;
  #o;
  #a;
  #d;
  #h;
  #u;
  #l;
  #c;
  #f;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      Ye(this.#t, this.options) ? this.#p() : this.updateResult(),
      this.#v());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Ae(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Ae(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    (this.listeners = new Set()),
      this.#w(),
      this.#R(),
      this.#t.removeObserver(this);
  }
  setOptions(e, t) {
    let r = this.options,
      s = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(e)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != "boolean" &&
        typeof this.options.enabled != "function" &&
        typeof O(this.options.enabled, this.#t) != "boolean")
    )
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean",
      );
    this.#S(),
      this.#t.setOptions(this.options),
      r._defaulted &&
        !B(this.options, r) &&
        this.#e
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this,
          });
    let n = this.hasListeners();
    n && Xe(this.#t, s, this.options, r) && this.#p(),
      this.updateResult(t),
      n &&
        (this.#t !== s ||
          O(this.options.enabled, this.#t) !== O(r.enabled, this.#t) ||
          F(this.options.staleTime, this.#t) !== F(r.staleTime, this.#t)) &&
        this.#y();
    let i = this.#g();
    n &&
      (this.#t !== s ||
        O(this.options.enabled, this.#t) !== O(r.enabled, this.#t) ||
        i !== this.#f) &&
      this.#b(i);
  }
  getOptimisticResult(e) {
    let t = this.#e.getQueryCache().build(this.#e, e),
      r = this.createResult(t, e);
    return (
      Et(this, r) &&
        ((this.#r = r), (this.#i = this.options), (this.#n = this.#t.state)),
      r
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(e, t) {
    let r = {};
    return (
      Object.keys(e).forEach((s) => {
        Object.defineProperty(r, s, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackProp(s), t?.(s), e[s]),
        });
      }),
      r
    );
  }
  trackProp(e) {
    this.#m.add(e);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...e } = {}) {
    return this.fetch({ ...e });
  }
  fetchOptimistic(e) {
    let t = this.#e.defaultQueryOptions(e),
      r = this.#e.getQueryCache().build(this.#e, t);
    return r.fetch().then(() => this.createResult(r, t));
  }
  fetch(e) {
    return this.#p({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#r),
    );
  }
  #p(e) {
    this.#S();
    let t = this.#t.fetch(this.options, e);
    return e?.throwOnError || (t = t.catch(v)), t;
  }
  #y() {
    this.#w();
    let e = F(this.options.staleTime, this.#t);
    if (S || this.#r.isStale || !J(e)) return;
    let r = oe(this.#r.dataUpdatedAt, e) + 1;
    this.#l = setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, r);
  }
  #g() {
    return (
      (typeof this.options.refetchInterval == "function"
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #b(e) {
    this.#R(),
      (this.#f = e),
      !(
        S ||
        O(this.options.enabled, this.#t) === !1 ||
        !J(this.#f) ||
        this.#f === 0
      ) &&
        (this.#c = setInterval(() => {
          (this.options.refetchIntervalInBackground || G.isFocused()) &&
            this.#p();
        }, this.#f));
  }
  #v() {
    this.#y(), this.#b(this.#g());
  }
  #w() {
    this.#l && (clearTimeout(this.#l), (this.#l = void 0));
  }
  #R() {
    this.#c && (clearInterval(this.#c), (this.#c = void 0));
  }
  createResult(e, t) {
    let r = this.#t,
      s = this.options,
      n = this.#r,
      i = this.#n,
      u = this.#i,
      a = e !== r ? e.state : this.#s,
      { state: h } = e,
      l = { ...h },
      b = !1,
      p;
    if (t._optimisticResults) {
      let w = this.hasListeners(),
        L = !w && Ye(e, t),
        H = w && Xe(e, r, t, s);
      (L || H) && (l = { ...l, ...ke(h.data, e.options) }),
        t._optimisticResults === "isRestoring" && (l.fetchStatus = "idle");
    }
    let { error: y, errorUpdatedAt: d, status: c } = l;
    if (t.select && l.data !== void 0)
      if (n && l.data === i?.data && t.select === this.#d) p = this.#h;
      else
        try {
          (this.#d = t.select),
            (p = t.select(l.data)),
            (p = ee(n?.data, p, t)),
            (this.#h = p),
            (this.#a = null);
        } catch (w) {
          this.#a = w;
        }
    else p = l.data;
    if (t.placeholderData !== void 0 && p === void 0 && c === "pending") {
      let w;
      if (n?.isPlaceholderData && t.placeholderData === u?.placeholderData)
        w = n.data;
      else if (
        ((w =
          typeof t.placeholderData == "function"
            ? t.placeholderData(this.#u?.state.data, this.#u)
            : t.placeholderData),
        t.select && w !== void 0)
      )
        try {
          (w = t.select(w)), (this.#a = null);
        } catch (L) {
          this.#a = L;
        }
      w !== void 0 && ((c = "success"), (p = ee(n?.data, w, t)), (b = !0));
    }
    this.#a && ((y = this.#a), (p = this.#h), (d = Date.now()), (c = "error"));
    let m = l.fetchStatus === "fetching",
      g = c === "pending",
      E = c === "error",
      Q = g && m,
      U = p !== void 0,
      T = {
        status: c,
        fetchStatus: l.fetchStatus,
        isPending: g,
        isSuccess: c === "success",
        isError: E,
        isInitialLoading: Q,
        isLoading: Q,
        data: p,
        dataUpdatedAt: l.dataUpdatedAt,
        error: y,
        errorUpdatedAt: d,
        failureCount: l.fetchFailureCount,
        failureReason: l.fetchFailureReason,
        errorUpdateCount: l.errorUpdateCount,
        isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
        isFetchedAfterMount:
          l.dataUpdateCount > a.dataUpdateCount ||
          l.errorUpdateCount > a.errorUpdateCount,
        isFetching: m,
        isRefetching: m && !g,
        isLoadingError: E && !U,
        isPaused: l.fetchStatus === "paused",
        isPlaceholderData: b,
        isRefetchError: E && U,
        isStale: De(e, t),
        refetch: this.refetch,
        promise: this.#o,
      };
    if (this.options.experimental_prefetchInRender) {
      let w = (ne) => {
          T.status === "error"
            ? ne.reject(T.error)
            : T.data !== void 0 && ne.resolve(T.data);
        },
        L = () => {
          let ne = (this.#o = T.promise = te());
          w(ne);
        },
        H = this.#o;
      switch (H.status) {
        case "pending":
          e.queryHash === r.queryHash && w(H);
          break;
        case "fulfilled":
          (T.status === "error" || T.data !== H.value) && L();
          break;
        case "rejected":
          (T.status !== "error" || T.error !== H.reason) && L();
          break;
      }
    }
    return T;
  }
  updateResult(e) {
    let t = this.#r,
      r = this.createResult(this.#t, this.options);
    if (
      ((this.#n = this.#t.state),
      (this.#i = this.options),
      this.#n.data !== void 0 && (this.#u = this.#t),
      B(r, t))
    )
      return;
    this.#r = r;
    let s = {},
      n = () => {
        if (!t) return !0;
        let { notifyOnChangeProps: i } = this.options,
          u = typeof i == "function" ? i() : i;
        if (u === "all" || (!u && !this.#m.size)) return !0;
        let o = new Set(u ?? this.#m);
        return (
          this.options.throwOnError && o.add("error"),
          Object.keys(this.#r).some((a) => {
            let h = a;
            return this.#r[h] !== t[h] && o.has(h);
          })
        );
      };
    e?.listeners !== !1 && n() && (s.listeners = !0), this.#x({ ...s, ...e });
  }
  #S() {
    let e = this.#e.getQueryCache().build(this.#e, this.options);
    if (e === this.#t) return;
    let t = this.#t;
    (this.#t = e),
      (this.#s = e.state),
      this.hasListeners() && (t?.removeObserver(this), e.addObserver(this));
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && this.#v();
  }
  #x(e) {
    f.batch(() => {
      e.listeners &&
        this.listeners.forEach((t) => {
          t(this.#r);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: "observerResultsUpdated" });
    });
  }
};
function Ct(e, t) {
  return (
    O(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Ye(e, t) {
  return Ct(e, t) || (e.state.data !== void 0 && Ae(e, t, t.refetchOnMount));
}
function Ae(e, t, r) {
  if (O(t.enabled, e) !== !1) {
    let s = typeof r == "function" ? r(e) : r;
    return s === "always" || (s !== !1 && De(e, t));
  }
  return !1;
}
function Xe(e, t, r, s) {
  return (
    (e !== t || O(s.enabled, e) === !1) &&
    (!r.suspense || e.state.status !== "error") &&
    De(e, r)
  );
}
function De(e, t) {
  return O(t.enabled, e) !== !1 && e.isStaleByTime(F(t.staleTime, e));
}
function Et(e, t) {
  return !B(e.getCurrentResult(), t);
}
function et(e, t) {
  return e.filter((r) => !t.includes(r));
}
function Tt(e, t, r) {
  let s = e.slice(0);
  return (s[t] = r), s;
}
var Fe = class extends R {
  #e;
  #t;
  #s;
  #r;
  #n;
  #i;
  #o;
  #a;
  constructor(e, t, r) {
    super(),
      (this.#e = e),
      (this.#r = r),
      (this.#s = []),
      (this.#n = []),
      (this.#t = []),
      this.setQueries(t);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      this.#n.forEach((e) => {
        e.subscribe((t) => {
          this.#l(e, t);
        });
      });
  }
  onUnsubscribe() {
    this.listeners.size || this.destroy();
  }
  destroy() {
    (this.listeners = new Set()),
      this.#n.forEach((e) => {
        e.destroy();
      });
  }
  setQueries(e, t, r) {
    (this.#s = e),
      (this.#r = t),
      f.batch(() => {
        let s = this.#n,
          n = this.#u(this.#s);
        n.forEach((a) => a.observer.setOptions(a.defaultedQueryOptions, r));
        let i = n.map((a) => a.observer),
          u = i.map((a) => a.getCurrentResult()),
          o = i.some((a, h) => a !== s[h]);
        (s.length === i.length && !o) ||
          ((this.#n = i),
          (this.#t = u),
          this.hasListeners() &&
            (et(s, i).forEach((a) => {
              a.destroy();
            }),
            et(i, s).forEach((a) => {
              a.subscribe((h) => {
                this.#l(a, h);
              });
            }),
            this.#c()));
      });
  }
  getCurrentResult() {
    return this.#t;
  }
  getQueries() {
    return this.#n.map((e) => e.getCurrentQuery());
  }
  getObservers() {
    return this.#n;
  }
  getOptimisticResult(e, t) {
    let s = this.#u(e).map((n) =>
      n.observer.getOptimisticResult(n.defaultedQueryOptions),
    );
    return [s, (n) => this.#h(n ?? s, t), () => this.#d(s, e)];
  }
  #d(e, t) {
    let r = this.#u(t);
    return r.map((s, n) => {
      let i = e[n];
      return s.defaultedQueryOptions.notifyOnChangeProps
        ? i
        : s.observer.trackResult(i, (u) => {
            r.forEach((o) => {
              o.observer.trackProp(u);
            });
          });
    });
  }
  #h(e, t) {
    return t
      ? ((!this.#i || this.#t !== this.#a || t !== this.#o) &&
          ((this.#o = t), (this.#a = this.#t), (this.#i = X(this.#i, t(e)))),
        this.#i)
      : e;
  }
  #u(e) {
    let t = new Map(this.#n.map((s) => [s.options.queryHash, s])),
      r = [];
    return (
      e.forEach((s) => {
        let n = this.#e.defaultQueryOptions(s),
          i = t.get(n.queryHash);
        if (i) r.push({ defaultedQueryOptions: n, observer: i });
        else {
          let u = this.#n.find((o) => o.options.queryHash === n.queryHash);
          r.push({
            defaultedQueryOptions: n,
            observer: u ?? new N(this.#e, n),
          });
        }
      }),
      r.sort(
        (s, n) =>
          e.findIndex(
            (i) => i.queryHash === s.defaultedQueryOptions.queryHash,
          ) -
          e.findIndex((i) => i.queryHash === n.defaultedQueryOptions.queryHash),
      )
    );
  }
  #l(e, t) {
    let r = this.#n.indexOf(e);
    r !== -1 && ((this.#t = Tt(this.#t, r, t)), this.#c());
  }
  #c() {
    if (this.hasListeners()) {
      let e = this.#i,
        t = this.#h(this.#d(this.#t, this.#s), this.#r?.combine);
      e !== t &&
        f.batch(() => {
          this.listeners.forEach((r) => {
            r(this.#t);
          });
        });
    }
  }
};
var qe = class extends R {
  #e;
  #t = void 0;
  #s;
  #r;
  constructor(e, t) {
    super(), (this.#e = e), this.setOptions(t), this.bindMethods(), this.#n();
  }
  bindMethods() {
    (this.mutate = this.mutate.bind(this)),
      (this.reset = this.reset.bind(this));
  }
  setOptions(e) {
    let t = this.options;
    (this.options = this.#e.defaultMutationOptions(e)),
      B(this.options, t) ||
        this.#e
          .getMutationCache()
          .notify({
            type: "observerOptionsUpdated",
            mutation: this.#s,
            observer: this,
          }),
      t?.mutationKey &&
      this.options.mutationKey &&
      P(t.mutationKey) !== P(this.options.mutationKey)
        ? this.reset()
        : this.#s?.state.status === "pending" &&
          this.#s.setOptions(this.options);
  }
  onUnsubscribe() {
    this.hasListeners() || this.#s?.removeObserver(this);
  }
  onMutationUpdate(e) {
    this.#n(), this.#i(e);
  }
  getCurrentResult() {
    return this.#t;
  }
  reset() {
    this.#s?.removeObserver(this), (this.#s = void 0), this.#n(), this.#i();
  }
  mutate(e, t) {
    return (
      (this.#r = t),
      this.#s?.removeObserver(this),
      (this.#s = this.#e.getMutationCache().build(this.#e, this.options)),
      this.#s.addObserver(this),
      this.#s.execute(e)
    );
  }
  #n() {
    let e = this.#s?.state ?? Qe();
    this.#t = {
      ...e,
      isPending: e.status === "pending",
      isSuccess: e.status === "success",
      isError: e.status === "error",
      isIdle: e.status === "idle",
      mutate: this.mutate,
      reset: this.reset,
    };
  }
  #i(e) {
    f.batch(() => {
      if (this.#r && this.hasListeners()) {
        let t = this.#t.variables,
          r = this.#t.context;
        e?.type === "success"
          ? (this.#r.onSuccess?.(e.data, t, r),
            this.#r.onSettled?.(e.data, null, t, r))
          : e?.type === "error" &&
            (this.#r.onError?.(e.error, t, r),
            this.#r.onSettled?.(void 0, e.error, t, r));
      }
      this.listeners.forEach((t) => {
        t(this.#t);
      });
    });
  }
};
function Pt(e) {
  return e;
}
function pe(e, t, r) {
  if (typeof t != "object" || t === null) return;
  let s = e.getMutationCache(),
    n = e.getQueryCache(),
    i =
      r?.defaultOptions?.deserializeData ??
      e.getDefaultOptions().hydrate?.deserializeData ??
      Pt,
    u = t.mutations || [],
    o = t.queries || [];
  u.forEach(({ state: a, ...h }) => {
    s.build(
      e,
      {
        ...e.getDefaultOptions().hydrate?.mutations,
        ...r?.defaultOptions?.mutations,
        ...h,
      },
      a,
    );
  }),
    o.forEach(
      ({ queryKey: a, state: h, queryHash: l, meta: b, promise: p }) => {
        let y = n.get(l),
          d = h.data === void 0 ? h.data : i(h.data);
        if (y) {
          if (y.state.dataUpdatedAt < h.dataUpdatedAt) {
            let { fetchStatus: c, ...m } = h;
            y.setState({ ...m, data: d });
          }
        } else
          y = n.build(
            e,
            {
              ...e.getDefaultOptions().hydrate?.queries,
              ...r?.defaultOptions?.queries,
              queryKey: a,
              queryHash: l,
              meta: b,
            },
            { ...h, data: d, fetchStatus: "idle" },
          );
        if (p) {
          let c = Promise.resolve(p).then(i);
          y.fetch(void 0, { initialPromise: c });
        }
      },
    );
}
var q = x(M(), 1);
var V = x(M(), 1),
  tt = x(ie(), 1),
  _e = V.createContext(void 0),
  A = (e) => {
    let t = V.useContext(_e);
    if (e) return e;
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  kt = ({ client: e, children: t }) => (
    V.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, tt.jsx)(_e.Provider, { value: e, children: t })
  );
var re = x(M(), 1),
  Qt = x(ie(), 1);
function Mt() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var At = re.createContext(Mt()),
  me = () => re.useContext(At);
var rt = x(M(), 1);
function ye(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function I() {}
var ge = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  be = (e) => {
    rt.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  ve = ({ result: e, errorResetBoundary: t, throwOnError: r, query: s }) =>
    e.isError && !t.isReset() && !e.isFetching && s && ye(r, [e.error, s]);
var we = x(M(), 1),
  st = we.createContext(!1),
  Re = () => we.useContext(st),
  Ys = st.Provider;
var Se = (e) => {
    e.suspense &&
      (e.staleTime === void 0 && (e.staleTime = 1e3),
      typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  xe = (e, t) => e.isLoading && e.isFetching && !t,
  se = (e, t) => e?.suspense && t.isPending,
  W = (e, t, r) =>
    t.fetchOptimistic(e).catch(() => {
      r.clearReset();
    });
function nt(e, t, r) {
  let s = A(r),
    n = Re(),
    i = me(),
    u = s.defaultQueryOptions(e);
  s.getDefaultOptions().queries?._experimental_beforeQuery?.(u),
    (u._optimisticResults = n ? "isRestoring" : "optimistic"),
    Se(u),
    ge(u, i),
    be(i);
  let o = !s.getQueryCache().get(u.queryHash),
    [a] = q.useState(() => new t(s, u)),
    h = a.getOptimisticResult(u);
  if (
    (q.useSyncExternalStore(
      q.useCallback(
        (l) => {
          let b = n ? I : a.subscribe(f.batchCalls(l));
          return a.updateResult(), b;
        },
        [a, n],
      ),
      () => a.getCurrentResult(),
      () => a.getCurrentResult(),
    ),
    q.useEffect(() => {
      a.setOptions(u, { listeners: !1 });
    }, [u, a]),
    se(u, h))
  )
    throw W(u, a, i);
  if (
    ve({
      result: h,
      errorResetBoundary: i,
      throwOnError: u.throwOnError,
      query: s.getQueryCache().get(u.queryHash),
    })
  )
    throw h.error;
  return (
    s.getDefaultOptions().queries?._experimental_afterQuery?.(u, h),
    u.experimental_prefetchInRender &&
      !S &&
      xe(h, n) &&
      (o ? W(u, a, i) : s.getQueryCache().get(u.queryHash)?.promise)
        ?.catch(I)
        .finally(() => {
          a.updateResult();
        }),
    u.notifyOnChangeProps ? h : a.trackResult(h)
  );
}
function Dt(e, t) {
  return nt(e, N, t);
}
var D = x(M(), 1);
function Ft(e, t) {
  let r = A(t),
    [s] = D.useState(() => new qe(r, e));
  D.useEffect(() => {
    s.setOptions(e);
  }, [s, e]);
  let n = D.useSyncExternalStore(
      D.useCallback((u) => s.subscribe(f.batchCalls(u)), [s]),
      () => s.getCurrentResult(),
      () => s.getCurrentResult(),
    ),
    i = D.useCallback(
      (u, o) => {
        s.mutate(u, o).catch(I);
      },
      [s],
    );
  if (n.error && ye(s.options.throwOnError, [n.error])) throw n.error;
  return { ...n, mutate: i, mutateAsync: n.mutate };
}
var k = x(M(), 1);
function qt({ queries: e, ...t }, r) {
  let s = A(r),
    n = Re(),
    i = me(),
    u = k.useMemo(
      () =>
        e.map((d) => {
          let c = s.defaultQueryOptions(d);
          return (c._optimisticResults = n ? "isRestoring" : "optimistic"), c;
        }),
      [e, s, n],
    );
  u.forEach((d) => {
    Se(d), ge(d, i);
  }),
    be(i);
  let [o] = k.useState(() => new Fe(s, u, t)),
    [a, h, l] = o.getOptimisticResult(u, t.combine);
  k.useSyncExternalStore(
    k.useCallback((d) => (n ? I : o.subscribe(f.batchCalls(d))), [o, n]),
    () => o.getCurrentResult(),
    () => o.getCurrentResult(),
  ),
    k.useEffect(() => {
      o.setQueries(u, t, { listeners: !1 });
    }, [u, t, o]);
  let p = a.some((d, c) => se(u[c], d))
    ? a.flatMap((d, c) => {
        let m = u[c];
        if (m) {
          let g = new N(s, m);
          if (se(m, d)) return W(m, g, i);
          xe(d, n) && W(m, g, i);
        }
        return [];
      })
    : [];
  if (p.length > 0) throw Promise.all(p);
  let y = a.find((d, c) => {
    let m = u[c];
    return (
      m &&
      ve({
        result: d,
        errorResetBoundary: i,
        throwOnError: m.throwOnError,
        query: s.getQueryCache().get(m.queryHash),
      })
    );
  });
  if (y?.error) throw y.error;
  return h(l());
}
var _ = x(M(), 1);
var _t = ({ children: e, options: t = {}, state: r, queryClient: s }) => {
  let n = A(s),
    [i, u] = _.useState(),
    o = _.useRef(t);
  return (
    (o.current = t),
    _.useMemo(() => {
      if (r) {
        if (typeof r != "object") return;
        let a = n.getQueryCache(),
          h = r.queries || [],
          l = [],
          b = [];
        for (let p of h) {
          let y = a.get(p.queryHash);
          if (!y) l.push(p);
          else {
            let d = p.state.dataUpdatedAt > y.state.dataUpdatedAt,
              c = i?.find((m) => m.queryHash === p.queryHash);
            d &&
              (!c || p.state.dataUpdatedAt > c.state.dataUpdatedAt) &&
              b.push(p);
          }
        }
        l.length > 0 && pe(n, { queries: l }, o.current),
          b.length > 0 && u((p) => (p ? [...p, ...b] : b));
      }
    }, [n, i, r]),
    _.useEffect(() => {
      i && (pe(n, { queries: i }, o.current), u(void 0));
    }, [n, i]),
    e
  );
};
function Ut(e, t, ...r) {
  console.assert
    ? r.length == 0
      ? console.assert(!!e, t)
      : console.assert(!!e, t, ...r)
    : e || console.warn(t, ...r);
}
function _n(e, t, ...r) {
  Ut(!1, t, ...r);
}
var Ne = {};
Ce(Ne, {
  ArrayEquals: () => Ht,
  ArrayEqualsUnsorted: () => Kt,
  ArrayWithoutElement: () => zt,
  BInsertBeforeElement: () => Yt,
  CountMatches: () => Bt,
  FilterInPlace: () => Vt,
  FindAndRemove: () => Ue,
  FindAndRemoveWhere: () => at,
  FindLast: () => Zt,
  GetNRandomElements: () => It,
  GetRandomElementArray: () => jt,
  MoveElement: () => ot,
  MoveElementToTail: () => Lt,
  PadArray: () => Wt,
  RandomElement: () => Nt,
  ShallowCompare: () => Gt,
  ShuffleArray: () => it,
  SortedFindLessOrEqual: () => ut,
  SortedInsert: () => $t,
  Unique: () => Jt,
  Zip: () => Xt,
});
function it(e, t = 0, r = Math.random) {
  if (e?.length > 1) {
    let s = t > 0 ? Math.min(t, e.length) : e.length;
    for (; s !== 0; ) {
      let n = Math.floor(r() * s);
      s -= 1;
      let i = e[s];
      (e[s] = e[n]), (e[n] = i);
    }
  }
  return e;
}
function Nt(e, t = Math.random) {
  return e[Math.floor(t() * e.length)];
}
function It(e, t, r = Math.random) {
  let s = [],
    n = t;
  for (let i = 0; i < e.length && n > 0; i++)
    r() <= n / (e.length - i) && (s.push(e[i]), n--);
  return s;
}
function jt(e, t) {
  let r = e.slice();
  return it(r), r.slice(0, t);
}
function ot(e, t, r) {
  if (t >= 0 || r >= 0) {
    let s = e.splice(t, 1)[0];
    r >= e.length ? (e[r] = s) : e.splice(r, 0, s);
  }
  return e;
}
function Lt(e, t) {
  ot(e, t, e.length - 1);
}
function Ht(e, t) {
  if (!e && !t) return !0;
  if (!e || !t || e.length != t.length) return !1;
  for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Kt(e, t, r) {
  if (!e && !t) return !0;
  if (!e || !t || e.length !== t.length) return !1;
  let s = e.slice().sort(r),
    n = t.slice().sort(r);
  for (let i = 0; i < s.length; i++) if (s[i] !== n[i]) return !1;
  return !0;
}
function Ue(e, t) {
  return at(e, (r) => t == r);
}
function at(e, t) {
  let r = e.findIndex(t);
  return r >= 0 ? (e.splice(r, 1), !0) : !1;
}
function Bt(e, t) {
  return e.reduce((r, s, n, i) => r + (t(s, n, i) ? 1 : 0), 0);
}
function zt(e, t) {
  return e.filter((r) => t !== r);
}
function Gt(e, t) {
  if (e.length != t.length) return !1;
  for (let r = 0; r < e.length; r++) if (e[r] != t[r]) return !1;
  return !0;
}
function ut(e, t) {
  let r = 0,
    s = e.length - 1;
  for (; r <= s; ) {
    let n = Math.floor((r + s) / 2),
      i = t(e[n]);
    if (i > 0) r = n + 1;
    else if (i < 0) s = n - 1;
    else {
      if (s == n) return n;
      if (n == r) return s > n && t(e[n + 1]) < 0 ? n : n + 1;
      r = n;
    }
  }
  return s;
}
function $t(e, t, r) {
  let n = ut(e, (i) => r(t, i));
  e.splice(n + 1, 0, t);
}
function Vt(e, t) {
  let r = 0,
    s = 0;
  for (; r < e.length; ) {
    let n = e[r];
    t(n, r, e) && (e[s++] = n), r++;
  }
  return (e.length = s), e;
}
function Wt(e, t, r) {
  return (
    e ||
      console.error(
        "array should be defined for us to fill in the missing indexes",
      ),
    e.length < t ? e.concat(Array(t - e.length).fill(r)) : e
  );
}
function Zt(e, t) {
  if (t)
    for (let r = e.length - 1; r >= 0; --r) {
      let s = e[r];
      if (t(s, r, e)) return s;
    }
}
function Jt(e) {
  return Array.from(new Set(e));
}
function Yt(e, t, r) {
  let s = e.findIndex(r);
  return s >= 0 ? (e.splice(s, 0, t), !0) : !1;
}
function Xt(e, t) {
  let r = Math.min(e.length, t.length);
  return Array.from({ length: r }, (s, n) => [e[n], t[n]]);
}
var lt = {};
Ce(lt, { GenerateRandomSeed: () => tr, SeededRandom: () => er });
function er(e) {
  return () => (
    (e = (e * 1664525 + 1013904223) % 4294967296), (e >>> 0) / 4294967296
  );
}
function tr() {
  return Math.floor(Math.random() * 4294967296);
}
var ct = {};
Ce(ct, { GenerateSHA: () => rr });
async function rr(e, t = "SHA-256") {
  let r;
  typeof e == "string" ? (r = nr(e)) : (r = e);
  let s = await window.crypto.subtle.digest(t, r);
  return sr(s);
}
function sr(e) {
  return Array.prototype.map
    .call(new Uint8Array(e), (t) => ("00" + t.toString(16)).slice(-2))
    .join("");
}
function nr(e) {
  return new TextEncoder().encode(e).buffer;
}
var ht = class extends Error {
  eResult;
  constructor(t, r) {
    super(r ? `EResult ${t}: ${r}` : `EResult ${t}`), (this.eResult = t);
  }
};
var dt = class {
  m_vecCallbacks = [];
  Register(t) {
    return (
      this.m_vecCallbacks.push(t),
      {
        Unregister: () => {
          Ue(this.m_vecCallbacks, t);
        },
      }
    );
  }
  Dispatch(...t) {
    for (let r of Array.from(this.m_vecCallbacks)) r(...t);
  }
  ClearAllCallbacks() {
    this.m_vecCallbacks = [];
  }
  CountRegistered() {
    return this.m_vecCallbacks.length;
  }
};
function jn(e, t) {
  return e.split(t);
}
function Hn(e) {
  return !!e;
}
var ir = /^(steam|ftp|https?):\/\//;
function ft(e) {
  return ir.test(e) ? e : "https://" + e;
}
function pt(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function or(e) {
  if (!pt(e)) return !1;
  let t = e.constructor;
  if (typeof t > "u") return !0;
  let r = t.prototype;
  return !(!pt(r) || !Object.prototype.hasOwnProperty.call(r, "isPrototypeOf"));
}
function zn(...e) {
  return JSON.stringify(e, (t, r) => {
    if (or(r)) {
      let s = {};
      return (
        Object.keys(r)
          .sort()
          .forEach((n) => {
            s[n] = r[n];
          }),
        s
      );
    }
    return r;
  });
}
function $n(e, t, r) {
  return {
    get() {
      let s = r.value.bind(this);
      return (
        Object.prototype.hasOwnProperty.call(this, t) ||
          Object.defineProperty(this, t, { value: s }),
        s
      );
    },
  };
}
var mt = {
  unknown: 0,
  "store.steampowered.com": 1,
  "steamcommunity.com": 2,
  global: 3,
  default: 4,
  application: 5,
  subscription: 6,
  search: 7,
  cart: 8,
  app: 9,
  "global-nav": 10,
  "global-account": 11,
  storemenu: 12,
  "search-suggestion": 13,
  about: 14,
  suggest: 15,
  dlc: 16,
  "storemenu-recommendedtags": 17,
  creator: 18,
  "footer-genre-dropdown": 20,
  "footer-category-dropdown": 21,
  "footer-about-dropdown": 22,
  "footer-help-dropdown": 23,
  "footer-publisher-catalogs": 24,
  wishlist: 25,
  spotlight: 40,
  message: 41,
  "marketing-message": 42,
  "daily-deal": 43,
  footer: 44,
  header: 45,
  name: 46,
  "more-details": 47,
  notification: 48,
  category: 49,
  steamdeck: 50,
  login: 60,
  prompt: 61,
  "join-steam": 62,
  "successful-login": 63,
  "successful-joinsteam": 64,
  "main-cluster": 100,
  "featured-win-games": 101,
  "featured-mac-games": 102,
  "tab-NewReleases": 103,
  "tab-TopSellers": 104,
  "tab-ComingSoon": 105,
  "tab-Discounts": 106,
  "smallcap-videos": 107,
  "smallcap-demos": 108,
  "home-headlines": 109,
  "community-activity": 110,
  "home-underten": 111,
  "home-specials": 112,
  "home-partners": 113,
  "home-steam-install": 114,
  "community-activity-recentlyplayed": 115,
  "community-activity-recentlybought": 116,
  "promo-banner": 117,
  "promo-takeover": 118,
  "featured-linux-games": 119,
  "updated-games": 120,
  "featured-updated-games": 121,
  "discovery-queue": 122,
  "new-on-steam": 123,
  "curated-app": 124,
  "home-gutter": 125,
  "upcoming-queue": 126,
  "home-specials-under10": 127,
  "main-cluster-recommended": 128,
  "main-cluster-topseller": 129,
  "main-cluster-newonsteam": 130,
  "recommended-spotlight": 131,
  "hardware-promo": 132,
  "popular-new-on-steam": 133,
  "main-cluster-recommended-byfriends": 134,
  "main-cluster-recommended-bycurators": 135,
  "main-cluster-recenttopseller": 136,
  "home-under10": 137,
  "friends-trending": 138,
  "spotlight-specials": 139,
  "curator-recommended": 140,
  "best-selling-vr": 141,
  "creator-recommendations": 142,
  "live-broadcast": 143,
  "main-cluster-followed-creator": 144,
  "tab-PopularNewReleases": 145,
  "home-big-blue-buttons": 146,
  "home-banner": 147,
  "top-new-releases": 148,
  "curated-main-app": 149,
  "search-results": 150,
  query: 151,
  "search-share": 152,
  genre: 200,
  "large-cluster": 201,
  "find-more": 202,
  "friend-activity": 203,
  specials: 2300,
  breadcrumbs: 205,
  freestuff: 220,
  demos: 1900,
  "tab-NewDemos": 222,
  "tab-TopDemos": 223,
  "browse-demos": 224,
  videos: 100002,
  "popular-videos": 226,
  "tab-NewVideos": 227,
  browse: 230,
  mac: 231,
  under10: 232,
  under5: 233,
  publisher: 234,
  publishers: 235,
  "publisher-listing": 236,
  tag: 237,
  gettaggames: 238,
  explore: 239,
  "browse-tags": 240,
  tags: 241,
  "content-hub-carousel": 242,
  Action: 250,
  Adventure: 251,
  Strategy: 252,
  RPG: 253,
  Indie: 254,
  "Massively Multiplayer": 255,
  Casual: 256,
  Family: 257,
  Simulation: 258,
  Racing: 259,
  Sports: 260,
  recommended: 300,
  "recommendation-main": 301,
  "friend-recommendations": 302,
  "recommended-friendplaytime": 303,
  "recommended-recentlyviewed": 304,
  "recommended-morerecentlyviewed": 305,
  "recommended-genrehighlights": 306,
  morelike: 307,
  "morelike-mainitem": 308,
  "friendactivity.js": 309,
  "friendactivity-wishlist-spotlight": 310,
  "friendactivity-purchases": 311,
  "friendactivity-playedandwanted": 312,
  byafriend: 313,
  "friend-recommendation": 314,
  ajaxgetfriendactivity: 315,
  "recommend-franchise": 316,
  "more-from-franchise": 317,
  "wishlist-capsule": 318,
  "game-highlights": 400,
  "recommend-game": 401,
  "view-own-recommendation": 402,
  "game-purchase": 403,
  "game-purchase-guide": 404,
  "game-purchase-dlc": 405,
  "game-friend-recommendations": 406,
  "game-add-to-wishlist": 407,
  "game-details": 408,
  "game-highlight-tags": 409,
  "game-tags-dialog": 410,
  "game-tags-yours": 411,
  "bundle-component-preview": 412,
  "dlc-parent-app-link": 413,
  "similar-recent-apps": 414,
  "demo-parent-app-link": 415,
  "package-purchase": 420,
  "package-contents": 421,
  "package-details": 422,
  "category-list": 423,
  bundle: 430,
  "bundle-contents": 431,
  "cart-remove-item": 500,
  "cart-items": 501,
  "cart-continue-shopping": 502,
  "cart-purchase": 503,
  "checkout-logo-abandon": 504,
  "checkout-success": 505,
  checkout: 506,
  gift: 507,
  self: 508,
  "checkout-complete-return": 509,
  "checkout-complete-logo": 510,
  purchaserequest: 511,
  display: 512,
  initial: 513,
  gifts: 514,
  "upsell-recommended": 520,
  "upsell-specials": 521,
  "external-site": 550,
  facebook: 551,
  twitter: 552,
  referral: 553,
  summersale: 600,
  prizebooth: 610,
  "activity-game-link": 611,
  "activity-game-discount": 612,
  "prize-info": 613,
  promotion: 614,
  sale: 615,
  "sale-item": 616,
  "sale-dailydeals": 617,
  "sale-publishers": 618,
  "sale-genres": 619,
  email: 620,
  "cart-icon": 621,
  "sale-category-links": 622,
  "sale-notification-callout": 623,
  "sale-yesterdaydeals": 624,
  "sale-flashsales": 625,
  "sale-fromyourwishlist": 626,
  "closed-beta-access": 627,
  "sale-tag-bucket": 628,
  "sale-hero": 629,
  "sale-franchises": 630,
  "sale-dlcforyou": 631,
  "sale-recommended-by-steam-labs": 632,
  "sale-recommended-by-deep-dive": 633,
  "sale-dailydeals-tier2": 634,
  "sale-deep-discounts": 635,
  "sale-deck-mostplayed": 636,
  "home-chart-deckmostplayed": 637,
  "home-deck-banner": 638,
  "sale-tag-bucket-top": 639,
  "sale-dailydeals-none": 640,
  "sale-dailydeals-tags": 641,
  "sale-dailydeals-ir": 642,
  "sale-dailydeals-tier2-none": 645,
  "sale-dailydeals-tier2-tags": 646,
  "sale-dailydeals-tier2-ir": 647,
  "sale-hero-none": 650,
  "sale-hero-tags": 651,
  "sale-hero-ir": 652,
  autumnsale: 660,
  wintersale: 661,
  yearinreview: 662,
  springsale: 663,
  mobileapp: 700,
  summary: 701,
  mobilestorefront: 702,
  home: 703,
  "winter2012-today-square": 800,
  "winter2012-today-square-button": 801,
  "winter2012-hires": 802,
  "winter2012-hires-button": 803,
  "winter2012-yesterday-square": 804,
  "winter2012-yesterday-square-button": 805,
  "winter2012-flash": 806,
  "winter2012-flash-button": 807,
  "winter2012-pack": 808,
  "winter2012-pack-button": 809,
  "winter2012-topsellers": 810,
  "winter2012-topsellers-button": 811,
  "winter2012-vote-winner": 812,
  "winter2012-vote-winner-button": 821,
  "winter2012-vote-option-voting": 813,
  "winter2012-vote-option-voted": 814,
  "winter2012-nav": 815,
  "winter2012-500-callout": 816,
  "winter2012-500-callout-button": 820,
  "winter2012-featured": 817,
  "winter2012-lower-nav": 822,
  "winter2012-vote-option-vote-results": 823,
  "fall2014-48": 850,
  "fall2014-24": 851,
  "fall2014-TopSellers": 852,
  "fall2014-Upcoming": 853,
  "fall2014-Under10": 854,
  "fall2014-Under5": 855,
  "fall2014-PopularNewReleases": 856,
  "fall2014-specials-more": 857,
  "fall2014-recommend-wishlist": 858,
  "fall2014-recommend-contentforyourgames": 859,
  renderspecials: 860,
  recommend: 861,
  "recommended-ranked-played": 862,
  "redeem-wallet-complete-return": 900,
  "redeem-wallet-complete-return-app": 901,
  updated: 1e3,
  curators: 1050,
  curatorrecommendations: 1051,
  ajaxgetcuratorrecommendations: 1052,
  curatorscombinedrecommendations: 1053,
  ajaxgetcombinedrecommendations: 1054,
  curatorlist: 1055,
  curator: 1056,
  curatorfeaturedlist: 1057,
  curator_featured_list: 1057,
  mycuratorsreviewing: 1058,
  creatorfeaturedrecs: 1059,
  new_dlc: 1060,
  "browse-dlc": 1061,
  curatorlistcapsule: 1062,
  widget: 1100,
  appvisibilitystats: 1101,
  render: 1200,
  "recommendationfeed-single-friends": 1210,
  "recommendationfeed-single-curators": 1211,
  "recommendationfeed-single-recent": 1212,
  "recommendationfeed-single-wishlist": 1213,
  "recommendationfeed-single-played": 1214,
  "recommendationfeed-two": 1250,
  "recommendationfeed-four": 1251,
  "winter2014-featured": 1300,
  "winter2014-yesterday": 1301,
  "winter2014-flash": 1302,
  "winter2014-flash2": 1303,
  "winter2014-vote": 1304,
  "winter2014-specials-more": 1305,
  "winter2014-recommend-wishlist": 1306,
  "winter2014-frontpage-wishlist": 1307,
  "winter2014-TopSellers": 1308,
  "winter2014-Upcoming": 1309,
  "winter2014-Under10": 1310,
  "winter2014-Under5": 1311,
  "winter2014-PopularNewReleases": 1312,
  "winter2017-FeaturedBanner": 1313,
  "summer2018-standardview-curated": 1314,
  "summer2018-standardview-recommend-basic": 1315,
  "summer2018-standardview-recommend-neural": 1316,
  "summer2018-mergedview-curated": 1317,
  "summer2018-mergedview-recommend-neural": 1318,
  "summer2018-salien-giveaway": 1319,
  "summer2018-creator-recommend": 1320,
  "summer2018-live-stream": 1321,
  "sale-vr": 1322,
  "sale-moddable": 1323,
  "discovery-queue-0": 1324,
  "wishlist-onsale": 1400,
  "wishlist-newrelease": 1401,
  "greenlight-newrelease": 1402,
  "sales-event-enhanced": 1403,
  "creator-newrelease": 1404,
  "generic-onsale": 1405,
  "topsellers-onsale": 1406,
  "recommended-onsale": 1407,
  "demo-newrelease": 1408,
  "Free to Play": 1420,
  "tab-mostplayednewreleases": 1421,
  "tab-mostplayed": 1422,
  "tab-comingsoon": 1423,
  "tab-discounts": 1424,
  "tab-ConcurrentUsers": 1454,
  vr: 1453,
  "hub-vr-recommended": 1455,
  "hub-vr-specials": 1459,
  "hub-vr-featured": 1463,
  "hub-vr-takeover": 1467,
  games: 1452,
  "hub-games-recommended": 1456,
  "hub-games-specials": 1460,
  "hub-games-featured": 1464,
  "hub-games-takeover": 1468,
  software: 1451,
  "hub-software-recommended": 1457,
  "hub-software-specials": 1461,
  "hub-software-featured": 1465,
  "hub-software-takeover": 1469,
  "hub-videos-recommended": 1458,
  "hub-videos-specials": 1462,
  "hub-videos-featured": 1466,
  "hub-videos-takeover": 1470,
  macos: 1480,
  "hub-macos-recommended": 1481,
  "hub-macos-specials": 1482,
  "hub-macos-featured": 1483,
  "hub-macos-takeover": 1484,
  linux: 1490,
  "hub-linux-recommended": 1491,
  "hub-linux-specials": 1492,
  "hub-linux-featured": 1493,
  "hub-linux-takeover": 1494,
  controller: 1500,
  "hub-controller-recommended": 1501,
  "hub-controller-specials": 1502,
  "hub-controller-featured": 1503,
  "hub-controller-takeover": 1504,
  freetoplay: 1510,
  "hub-freetoplay-recommended": 1511,
  "hub-freetoplay-specials": 1512,
  "hub-freetoplay-featured": 1513,
  "hub-freetoplay-takeover": 1514,
  earlyaccess: 1520,
  "hub-earlyaccess-recommended": 1521,
  "hub-earlyaccess-specials": 1522,
  "hub-earlyaccess-featured": 1523,
  "hub-earlyaccess-takeover": 1524,
  pccafe: 1530,
  "hub-pccafe-recommended": 1531,
  "hub-pccafe-specials": 1532,
  "hub-pccafe-featured": 1533,
  "hub-pccafe-takeover": 1534,
  remoteplayphone: 1540,
  "hub-remoteplayphone-recommended": 1541,
  "hub-remoteplayphone-specials": 1542,
  "hub-remoteplayphone-featured": 1543,
  "hub-remoteplayphone-takeover": 1544,
  remoteplaytablet: 1550,
  "hub-remoteplaytablet-recommended": 1551,
  "hub-remoteplaytablet-specials": 1552,
  "hub-remoteplaytablet-featured": 1553,
  "hub-remoteplaytablet-takeover": 1554,
  remoteplaytv: 1560,
  "hub-remoteplaytv-recommended": 1561,
  "hub-remoteplaytv-specials": 1562,
  "hub-remoteplaytv-featured": 1563,
  "hub-remoteplaytv-takeover": 1564,
  remoteplaytogether: 1570,
  "hub-remoteplaytogether-recommended": 1571,
  "hub-remoteplaytogether-specials": 1572,
  "hub-remoteplaytogether-featured": 1573,
  "hub-remoteplaytogether-takeover": 1574,
  "remote-play-about": 1580,
  remoteplay: 1581,
  turnbasedrpg: 1582,
  arcaderhythm: 1583,
  greatondeck: 1584,
  remoteplaylanding: 1585,
  fightingmartialarts: 1586,
  actionfps: 1587,
  hackandslash: 1588,
  actionrunjump: 1589,
  shmup: 1590,
  adventure: 1591,
  action: 1592,
  adventurerpg: 1593,
  hiddenobject: 1594,
  metroidvania: 1595,
  puzzlematching: 1596,
  storyrich: 1597,
  visualnovel: 1598,
  casual: 1559,
  querypaginated: 1600,
  n_section: 1601,
  rpgjrpg: 1602,
  rpgpartybased: 1603,
  roguelikeroguelite: 1604,
  rpgaction: 1605,
  rpg: 1606,
  rpgstrategytactics: 1607,
  rpgturnbased: 1608,
  simulation: 1609,
  simbuildingautomation: 1610,
  simdating: 1611,
  simfarmingcrafting: 1612,
  simhobbysim: 1613,
  simlife: 1614,
  simphysicssandbox: 1615,
  simspaceflight: 1616,
  strategy: 1617,
  strategycardboard: 1618,
  strategycitiessettlements: 1619,
  soundtracks: 1620,
  "hub-soundtracks-recommended": 1621,
  "hub-soundtracks-specials": 1622,
  "hub-soundtracks-featured": 1623,
  "hub-soundtracks-takeover": 1624,
  strategygrand4x: 1625,
  strategymilitary: 1626,
  strategyrealtime: 1627,
  towerdefense: 1628,
  strategyturnbased: 1629,
  sportsandracing: 1630,
  sports: 1631,
  sportsfishinghunting: 1632,
  sportsindividual: 1633,
  racing: 1634,
  racingsim: 1635,
  sportssim: 1636,
  sportsteam: 1637,
  anime: 1638,
  horror: 1639,
  mysterydetective: 1640,
  explorationopenworld: 1641,
  sciencefiction: 1642,
  space: 1643,
  survival: 1644,
  multiplayercoop: 1645,
  multiplayerlan: 1646,
  multiplayerlocalparty: 1647,
  multiplayermmo: 1648,
  multiplayer: 1649,
  multiplayeronlinecompetitive: 1650,
  singleplayer: 1651,
  upcoming: 1700,
  "comingsoon-recommendedcomingsoon": 1701,
  "comingsoon-popularwishlist": 1702,
  "comingsoon-newdlc": 1703,
  "comingsoon-followedcreator": 1704,
  "comingsoon-mywishlist": 1705,
  "comingsoon-largecap": 1706,
  "tab-PopularUpcoming": 1707,
  "tab-AllUpcoming": 1708,
  "in-library-game-event-update": 1800,
  "on-wishlist-game-event-update": 1801,
  "in-library-game-remind-me": 1802,
  "hub-demos-recommended": 1901,
  "hub-demos-specials": 1902,
  "hub-demos-featured": 1903,
  "hub-demos-takeover": 1904,
  "creator-home-product-page": 2e3,
  "franchise-home-link": 2001,
  ajaxgetappinfoforcap: 2100,
  "partner-events": 2101,
  "library-partner-events": 2102,
  "store-partner-events": 2103,
  "steamtv-partner-events": 2104,
  "community-partner-events": 2105,
  "partnerweb-partner-events": 2106,
  "store-calendar-partner-events": 2107,
  events: 2108,
  subscriptions: 2109,
  ea: 2110,
  subscriptionplansea: 2111,
  download_event: 2112,
  reminder: 2113,
  steamtv: 2200,
  "hub-specials-recommended": 2301,
  "hub-specials-specials": 2302,
  "hub-specials-featured": 2303,
  "hub-specials-takeover": 2304,
  recommender: 2400,
  "recommended-by-steam-labs": 2401,
  labs: 2500,
  automaticshow: 2501,
  microtrailers: 2502,
  "now-playing": 2503,
  deepdive: 2504,
  "game-add-to-wishlist-deepdive": 2505,
  dbdetailsmulti: 2506,
  dbgetlinkparam: 2507,
  "recommended-by-deep-dive": 2508,
  "recommended-by-deep-dive-carousel": 2509,
  "recommended-by-deep-dive-carousel_default": 2510,
  "recommended-by-deep-dive-carousel_cluster_recent": 2511,
  "recommended-by-deep-dive-carousel_cluster_games": 2512,
  "recommended-by-deep-dive-carousel_cluster_playtime": 2513,
  "recommended-by-deep-dive-carousel-default": 2514,
  "recommended-by-deep-dive-carousel-cluster-recent": 2515,
  "recommended-by-deep-dive-carousel-cluster-games": 2516,
  "recommended-by-deep-dive-carousel-cluster-playtime": 2517,
  trendingreviews: 2600,
  ajaxgetrecentreviews: 2601,
  "community-recommendations": 2602,
  lunarnewyear2020: 2700,
  lunarnewyear: 2701,
  lunarnewyearmarket: 2702,
  "steam-logo": 2750,
  "sale-banner": 2751,
  "sale-button-top": 2752,
  "sale-button-bottom": 2753,
  "wishlist-button-bottom": 2754,
  "footer-steam-logo": 2755,
  steamclient: 5e3,
  library: 5100,
  friendsui: 5200,
  friendcontextmenu: 5201,
  nextfest: 6e3,
  topsellers: 7e3,
  steamcharts: 7001,
  weeklytopsellers: 7002,
  topchartlist: 7003,
  overview: 7004,
  mostplayed: 7005,
  salesmartdailyactiveuserdemo: 7006,
  salesmartmostplayeddemo: 7007,
  salesmartdecktopplayed: 7008,
  salesmartcategory: 7009,
  vrhardwarelanding: 7010,
  apphome: 1e5,
  images: 100001,
  allnews: 100003,
  news: 100004,
  announcements: 100005,
  discussions: 100006,
  reporteddiscussions: 100007,
  tradingforum: 100008,
  guides: 100009,
  reviews: 100010,
  positivereviews: 100011,
  negativereviews: 100012,
  workshop: 100013,
  broadcasts: 100014,
  eventcomments: 100015,
  sharedfiles: 100100,
  filedetails: 100101,
  screenshot: 100102,
  workshopitem: 100103,
  mtxitem: 100104,
  collection: 100105,
  guide: 100106,
  integratedguide: 100107,
  merch: 100108,
  artwork: 100109,
  video: 100110,
  topicsearch: 100201,
  singletopic: 100202,
  profiles: 100300,
  review: 100301,
  profileshowcase: 100302,
  broadcast: 100400,
  watch: 100401,
  friendactivityfeed: 100500,
  announcement: 100501,
  curatorreview: 100502,
  friendpurchase: 100503,
  workshopitempublished: 100504,
  artworkpublished: 100505,
  screenshotpublished: 100506,
  guidepublished: 100507,
  collectionpublished: 100508,
  itemfavorited: 100509,
  userreviewpublished: 100510,
  "partner.steamgames.com": 100600,
  "help.steampowered.com": 100601,
  salecreatorhome: 100700,
  saleitembrowse: 100701,
  salefacetbrowse: 100702,
  salesection: 100703,
  saletabsection: 100704,
  salebroadcast: 100705,
  salecuratorrec: 100706,
  saleeventsched: 100707,
  salesubscription: 100708,
  saleitemsearch: 100709,
  salesmartwishlist: 100710,
  salesmartir: 100711,
  salesmartdlc: 100712,
  salesmarttagrec: 100713,
  salebrowsetopwishlisted: 100714,
  salebrowsetrendingwishlisted: 100715,
  salebrowsepopularcomingsoon: 100716,
  salebrowsemostplayeddemo: 100717,
  salebrowsedailyactiveuserdemo: 100718,
  salebrowseplayednowdemo: 100719,
  salebrowserecentlyreleased: 100720,
  salebrowsepopularpurchased: 100721,
  salebrowsepopularpurchaseddiscounted: 100722,
  salebrowsediscounted: 100723,
  salebrowseprice: 100724,
  salebrowsenewandtrending: 100725,
  salebrowsetopsellers: 100726,
  salebrowsetoprated: 100727,
  discoveryqueue2022: 100728,
  saleeventsection: 100729,
  salesectionlinks: 100730,
  salesectionrewards: 100731,
  salesectiontext: 100732,
  salesectioneventschedule: 100733,
  salesmartpersonalizedcarousel: 100734,
  "promo-takeunder": 100735,
  salesmartwr: 100736,
  salesmartwishlist_allsale: 100737,
  salesmartir_allsale: 100738,
  autopopulatetag: 100739,
  autopopulatecategory: 100740,
  salesmartrecentevents: 100741,
  seasonpassproductpage: 100742,
  itemcollections: 100743,
  crosspromotesalepage: 100744,
  "mm-auto-render": 100745,
  salequiz: 100746,
  templatemediacontent: 100747,
  templatefaq: 100748,
  templatetechspec: 100749,
  topnewreleases: 100750,
  newreleases: 100751,
};
var Z = mt;
function ur(e) {
  return e in Z;
}
var C = class e {
  static InstrumentLink(t, r, s = null) {
    let n = e.GetLinkParam(r, s);
    return e.AddNavParamToURL(t, n);
  }
  static ParseSNR(t) {
    let r = t.split("_") || [];
    return {
      domain: e.DecodeEventComponent(r[0]),
      controller: e.DecodeEventComponent(r[1]),
      method: e.DecodeEventComponent(r[2]),
      submethod: e.DecodeEventComponent(r[3]),
      feature: e.DecodeEventComponent(r[4]),
      depth: r[5] ? Number(r[5]) : void 0,
    };
  }
  static GetLinkParam(t, r = null) {
    let s = e.ComputeLinkPrefix(t.domain, t.controller, t.method, t.submethod);
    r = r ?? t.depth ?? null;
    let n = e.EncodeEventComponent(t.feature);
    return n && ((s += "_" + n), r && (s += "_" + r)), s;
  }
  static AddNavParamToURL(t, r) {
    try {
      let s = new URL(ft(t)),
        n = new URLSearchParams(s.search);
      return (
        n.set("snr", encodeURIComponent(r ?? "")),
        s.origin + s.pathname + "?" + n.toString() + s.hash
      );
    } catch (s) {
      return console.error(t, s), t;
    }
  }
  static ComputeLinkPrefix(t, r, s, n) {
    let i = "";
    return (
      (i += e.EncodeEventComponent(t)),
      (i += "_"),
      (i += e.EncodeEventComponent(r)),
      (i += "_"),
      (i += e.EncodeEventComponent(s)),
      (i += "_"),
      (i += e.EncodeEventComponent(n)),
      i
    );
  }
  static EncodeEventComponent(t) {
    return t
      ? ur(t)
        ? "" + Z[t]
        : (t.match(/^[0-9]+$/) || (t = t.replace(/^[0-9]+/, "")),
          t.replace(/[^a-zA-Z0-9\- ]+/g, ""))
      : "";
  }
  static DecodeEventComponent(t) {
    let r = t && parseInt(t);
    if (r && Z) {
      for (let s in Z) if (Z[s] == r) return s;
    }
    return e.SanitizeEventComponent(t);
  }
  static SanitizeEventComponent(t) {
    return !t || !t.match(/^[a-zA-Z0-9\-.]*$/) ? "" : t;
  }
};
function gi(e) {
  return {
    ...e,
    domain: C.SanitizeEventComponent(e.domain),
    controller: C.SanitizeEventComponent(e.controller),
    method: C.SanitizeEventComponent(e.method),
    submethod: C.SanitizeEventComponent(e.submethod),
    feature: C.SanitizeEventComponent(e.feature),
    depth: e.depth || 0,
  };
}
var j = x(M());
var gt = x(ie()),
  yt = j.default.createContext({}),
  Ri = j.default.createContext(void 0);
function Si(e) {
  let { children: t, ...r } = e,
    s = Oe(),
    n = j.default.useMemo(
      () => ({ ...s, ...r }),
      [s, r.domain, r.controller, r.method, r.submethod, r.feature, r.depth],
    );
  return (0, gt.jsx)(yt.Provider, { value: n, children: t });
}
function Oe() {
  return j.default.useContext(yt);
}
function xi(e, t) {
  return lr(Oe(), e, t);
}
function lr(e, t, r) {
  return {
    ...e,
    feature: t || e.feature,
    depth: r || e.depth,
    countrycode: Ee.COUNTRY,
    is_client: Ee.IN_CLIENT,
  };
}
function Oi(e, t, r) {
  let s = Oe();
  return j.default.useMemo(() => e && cr(s, e, t, r), [e, s, t, r]);
}
function Ci(e, t) {
  let r = Oe();
  return j.default.useMemo(
    () => C.GetLinkParam({ ...r, feature: e || r.feature }, t),
    [r, e, t],
  );
}
function cr(e, t, r, s) {
  let n = C.GetLinkParam({ ...e, feature: r || e.feature }, s);
  return C.AddNavParamToURL(t, n);
}
export {
  Ot as a,
  A as b,
  kt as c,
  qt as d,
  Dt as e,
  _t as f,
  Ft as g,
  Ut as h,
  _n as i,
  Ue as j,
  Ne as k,
  lt as l,
  ct as m,
  ht as n,
  dt as o,
  jn as p,
  Hn as q,
  zn as r,
  $n as s,
  C as t,
  gi as u,
  Si as v,
  Oe as w,
  xi as x,
  Oi as y,
  Ci as z,
  cr as A,
};

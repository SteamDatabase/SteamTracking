const CLSTAMP = 9564007;

import { j as me, m as ee } from "./chunk-3XUDDVHM.js";
import { a as Q } from "./chunk-YWB64WUS.js";
import { c as fe, d as C } from "./chunk-EBDYFHBQ.js";
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
function b() {}
function Ae(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function te(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function A(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function x(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function re(e, t) {
  let {
    type: r = "all",
    exact: s,
    fetchStatus: n,
    predicate: i,
    queryKey: o,
    stale: a,
  } = e;
  if (o) {
    if (s) {
      if (t.queryHash !== V(o, t.options)) return !1;
    } else if (!j(t.queryKey, o)) return !1;
  }
  if (r !== "all") {
    let u = t.isActive();
    if ((r === "active" && !u) || (r === "inactive" && u)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (n && n !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function se(e, t) {
  let { exact: r, status: s, predicate: n, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (T(t.options.mutationKey) !== T(i)) return !1;
    } else if (!j(t.options.mutationKey, i)) return !1;
  }
  return !((s && t.state.status !== s) || (n && !n(t)));
}
function V(e, t) {
  return (t?.queryKeyHashFn || T)(e);
}
function T(e) {
  return JSON.stringify(e, (t, r) =>
    pe(r)
      ? Object.keys(r)
          .sort()
          .reduce((s, n) => ((s[n] = r[n]), s), {})
      : r,
  );
}
function j(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? !Object.keys(t).some((r) => !j(e[r], t[r]))
        : !1;
}
function ye(e, t) {
  if (e === t) return e;
  let r = Me(e) && Me(t);
  if (r || (pe(e) && pe(t))) {
    let s = r ? e : Object.keys(e),
      n = s.length,
      i = r ? t : Object.keys(t),
      o = i.length,
      a = r ? [] : {},
      u = 0;
    for (let c = 0; c < o; c++) {
      let l = r ? c : i[c];
      ((!r && s.includes(l)) || r) && e[l] === void 0 && t[l] === void 0
        ? ((a[l] = void 0), u++)
        : ((a[l] = ye(e[l], t[l])), a[l] === e[l] && e[l] !== void 0 && u++);
    }
    return n === o && u === n ? e : a;
  }
  return t;
}
function L(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let r in e) if (e[r] !== t[r]) return !1;
  return !0;
}
function Me(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function pe(e) {
  if (!Qe(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let r = t.prototype;
  return !(
    !Qe(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Qe(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function De(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function W(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (0)
      try {
      } catch (s) {}
    return ye(e, t);
  }
  return t;
}
function Fe(e, t, r = 0) {
  let s = [...e, t];
  return r && s.length > r ? s.slice(1) : s;
}
function Ne(e, t, r = 0) {
  let s = [t, ...e];
  return r && s.length > r ? s.slice(0, -1) : s;
}
var K = Symbol();
function ne(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === K
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var yt = class extends R {
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
  H = new yt();
var gt = class extends R {
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
  B = new gt();
function J() {
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
function bt(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function ge(e) {
  return (e ?? "online") === "online" ? B.isOnline() : !0;
}
var _e = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e?.revert),
      (this.silent = e?.silent);
  }
};
function ie(e) {
  return e instanceof _e;
}
function ae(e) {
  let t = !1,
    r = 0,
    s = !1,
    n,
    i = J(),
    o = (h) => {
      s || (d(new _e(h)), e.abort?.());
    },
    a = () => {
      t = !0;
    },
    u = () => {
      t = !1;
    },
    c = () =>
      H.isFocused() &&
      (e.networkMode === "always" || B.isOnline()) &&
      e.canRun(),
    l = () => ge(e.networkMode) && e.canRun(),
    v = (h) => {
      s || ((s = !0), e.onSuccess?.(h), n?.(), i.resolve(h));
    },
    d = (h) => {
      s || ((s = !0), e.onError?.(h), n?.(), i.reject(h));
    },
    p = () =>
      new Promise((h) => {
        (n = (y) => {
          (s || c()) && h(y);
        }),
          e.onPause?.();
      }).then(() => {
        (n = void 0), s || e.onContinue?.();
      }),
    m = () => {
      if (s) return;
      let h,
        y = r === 0 ? e.initialPromise : void 0;
      try {
        h = y ?? e.fn();
      } catch (g) {
        h = Promise.reject(g);
      }
      Promise.resolve(h)
        .then(v)
        .catch((g) => {
          if (s) return;
          let O = e.retry ?? (S ? 0 : 3),
            k = e.retryDelay ?? bt,
            N = typeof k == "function" ? k(r, g) : k,
            ke =
              O === !0 ||
              (typeof O == "number" && r < O) ||
              (typeof O == "function" && O(r, g));
          if (t || !ke) {
            d(g);
            return;
          }
          r++,
            e.onFail?.(r, g),
            De(N)
              .then(() => (c() ? void 0 : p()))
              .then(() => {
                t ? d(g) : m();
              });
        });
    };
  return {
    promise: i,
    cancel: o,
    continue: () => (n?.(), i),
    cancelRetry: a,
    continueRetry: u,
    canStart: l,
    start: () => (l() ? m() : p().then(m), i),
  };
}
function vt() {
  let e = [],
    t = 0,
    r = (a) => {
      a();
    },
    s = (a) => {
      a();
    },
    n = (a) => setTimeout(a, 0),
    i = (a) => {
      t
        ? e.push(a)
        : n(() => {
            r(a);
          });
    },
    o = () => {
      let a = e;
      (e = []),
        a.length &&
          n(() => {
            s(() => {
              a.forEach((u) => {
                r(u);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let u;
      t++;
      try {
        u = a();
      } finally {
        t--, t || o();
      }
      return u;
    },
    batchCalls:
      (a) =>
      (...u) => {
        i(() => {
          a(...u);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      r = a;
    },
    setBatchNotifyFunction: (a) => {
      s = a;
    },
    setScheduler: (a) => {
      n = a;
    },
  };
}
var f = vt();
var oe = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      $(this.gcTime) &&
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
var qe = class extends oe {
  #e;
  #t;
  #s;
  #r;
  #a;
  #i;
  constructor(e) {
    super(),
      (this.#i = !1),
      (this.#a = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#s = e.cache),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#e = wt(this.options)),
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
    (this.options = { ...this.#a, ...e }),
      this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.#s.remove(this);
  }
  setData(e, t) {
    let r = W(this.state.data, e, this.options);
    return (
      this.#n({
        data: r,
        type: "success",
        dataUpdatedAt: t?.updatedAt,
        manual: t?.manual,
      }),
      r
    );
  }
  setState(e, t) {
    this.#n({ type: "setState", state: e, setStateOptions: t });
  }
  cancel(e) {
    let t = this.#r?.promise;
    return this.#r?.cancel(e), t ? t.then(b).catch(b) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.#e);
  }
  isActive() {
    return this.observers.some((e) => x(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === K ||
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
      !te(this.state.dataUpdatedAt, e)
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
    this.state.isInvalidated || this.#n({ type: "invalidate" });
  }
  fetch(e, t) {
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#r) return this.#r.continueRetry(), this.#r.promise;
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let a = this.observers.find((u) => u.options.queryFn);
      a && this.setOptions(a.options);
    }
    let r = new AbortController(),
      s = (a) => {
        Object.defineProperty(a, "signal", {
          enumerable: !0,
          get: () => ((this.#i = !0), r.signal),
        });
      },
      n = () => {
        let a = ne(this.options, t),
          u = { queryKey: this.queryKey, meta: this.meta };
        return (
          s(u),
          (this.#i = !1),
          this.options.persister ? this.options.persister(a, u, this) : a(u)
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
        this.#n({ type: "fetch", meta: i.fetchOptions?.meta });
    let o = (a) => {
      (ie(a) && a.silent) || this.#n({ type: "error", error: a }),
        ie(a) ||
          (this.#s.config.onError?.(a, this),
          this.#s.config.onSettled?.(this.state.data, a, this)),
        this.scheduleGc();
    };
    return (
      (this.#r = ae({
        initialPromise: t?.initialPromise,
        fn: i.fetchFn,
        abort: r.abort.bind(r),
        onSuccess: (a) => {
          if (a === void 0) {
            o(new Error(`${this.queryHash} data is undefined`));
            return;
          }
          try {
            this.setData(a);
          } catch (u) {
            o(u);
            return;
          }
          this.#s.config.onSuccess?.(a, this),
            this.#s.config.onSettled?.(a, this.state.error, this),
            this.scheduleGc();
        },
        onError: o,
        onFail: (a, u) => {
          this.#n({ type: "failed", failureCount: a, error: u });
        },
        onPause: () => {
          this.#n({ type: "pause" });
        },
        onContinue: () => {
          this.#n({ type: "continue" });
        },
        retry: i.options.retry,
        retryDelay: i.options.retryDelay,
        networkMode: i.options.networkMode,
        canRun: () => !0,
      })),
      this.#r.start()
    );
  }
  #n(e) {
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
            ...be(r.data, this.options),
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
          return ie(s) && s.revert && this.#t
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
function be(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ge(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function wt(e) {
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
var Ue = class extends R {
  constructor(e = {}) {
    super(), (this.config = e), (this.#e = new Map());
  }
  #e;
  build(e, t, r) {
    let s = t.queryKey,
      n = t.queryHash ?? V(s, t),
      i = this.get(n);
    return (
      i ||
        ((i = new qe({
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
    return this.getAll().find((r) => re(t, r));
  }
  findAll(e = {}) {
    let t = this.getAll();
    return Object.keys(e).length > 0 ? t.filter((r) => re(e, r)) : t;
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
var Ie = class extends oe {
  #e;
  #t;
  #s;
  constructor(e) {
    super(),
      (this.mutationId = e.mutationId),
      (this.#t = e.mutationCache),
      (this.#e = []),
      (this.state = e.state || ve()),
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
    this.#s = ae({
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
function ve() {
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
var je = class extends R {
  constructor(e = {}) {
    super(), (this.config = e), (this.#e = new Map()), (this.#t = Date.now());
  }
  #e;
  #t;
  build(e, t, r) {
    let s = new Ie({
      mutationCache: this,
      mutationId: ++this.#t,
      options: e.defaultMutationOptions(t),
      state: r,
    });
    return this.add(s), s;
  }
  add(e) {
    let t = ue(e),
      r = this.#e.get(t) ?? [];
    r.push(e), this.#e.set(t, r), this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    let t = ue(e);
    if (this.#e.has(t)) {
      let r = this.#e.get(t)?.filter((s) => s !== e);
      r && (r.length === 0 ? this.#e.delete(t) : this.#e.set(t, r));
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    let t = this.#e.get(ue(e))?.find((r) => r.state.status === "pending");
    return !t || t === e;
  }
  runNext(e) {
    return (
      this.#e
        .get(ue(e))
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
    return this.getAll().find((r) => se(t, r));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => se(e, t));
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
    return f.batch(() => Promise.all(e.map((t) => t.continue().catch(b))));
  }
};
function ue(e) {
  return e.options.scope?.id ?? String(e.mutationId);
}
function we(e) {
  return {
    onFetch: (t, r) => {
      let s = t.options,
        n = t.fetchOptions?.meta?.fetchMore?.direction,
        i = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        a = { pages: [], pageParams: [] },
        u = 0,
        c = async () => {
          let l = !1,
            v = (m) => {
              Object.defineProperty(m, "signal", {
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
            d = ne(t.options, t.fetchOptions),
            p = async (m, h, y) => {
              if (l) return Promise.reject();
              if (h == null && m.pages.length) return Promise.resolve(m);
              let g = {
                queryKey: t.queryKey,
                pageParam: h,
                direction: y ? "backward" : "forward",
                meta: t.options.meta,
              };
              v(g);
              let O = await d(g),
                { maxPages: k } = t.options,
                N = y ? Ne : Fe;
              return {
                pages: N(m.pages, O, k),
                pageParams: N(m.pageParams, h, k),
              };
            };
          if (n && i.length) {
            let m = n === "backward",
              h = m ? St : Le,
              y = { pages: i, pageParams: o },
              g = h(s, y);
            a = await p(y, g, m);
          } else {
            let m = e ?? i.length;
            do {
              let h = u === 0 ? (o[0] ?? s.initialPageParam) : Le(s, a);
              if (u > 0 && h == null) break;
              (a = await p(a, h)), u++;
            } while (u < m);
          }
          return a;
        };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              c,
              { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
              r,
            ))
        : (t.fetchFn = c);
    },
  };
}
function Le(e, { pages: t, pageParams: r }) {
  let s = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[s], t, r[s], r) : void 0;
}
function St(e, { pages: t, pageParams: r }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
}
var xt = class {
  #e;
  #t;
  #s;
  #r;
  #a;
  #i;
  #n;
  #o;
  constructor(e = {}) {
    (this.#e = e.queryCache || new Ue()),
      (this.#t = e.mutationCache || new je()),
      (this.#s = e.defaultOptions || {}),
      (this.#r = new Map()),
      (this.#a = new Map()),
      (this.#i = 0);
  }
  mount() {
    this.#i++,
      this.#i === 1 &&
        ((this.#n = H.subscribe(async (e) => {
          e && (await this.resumePausedMutations(), this.#e.onFocus());
        })),
        (this.#o = B.subscribe(async (e) => {
          e && (await this.resumePausedMutations(), this.#e.onOnline());
        })));
  }
  unmount() {
    this.#i--,
      this.#i === 0 &&
        (this.#n?.(), (this.#n = void 0), this.#o?.(), (this.#o = void 0));
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
          s.isStaleByTime(A(r.staleTime, s)) &&
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
      o = Ae(t, i);
    if (o !== void 0)
      return this.#e.build(this, s).setData(o, { ...r, manual: !0 });
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
    return Promise.all(s).then(b).catch(b);
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
              r.throwOnError || (i = i.catch(b)),
              n.state.fetchStatus === "paused" ? Promise.resolve() : i
            );
          }),
      );
    return Promise.all(s).then(b);
  }
  fetchQuery(e) {
    let t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    let r = this.#e.build(this, t);
    return r.isStaleByTime(A(t.staleTime, r))
      ? r.fetch(t)
      : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(b).catch(b);
  }
  fetchInfiniteQuery(e) {
    return (e.behavior = we(e.pages)), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(b).catch(b);
  }
  ensureInfiniteQueryData(e) {
    return (e.behavior = we(e.pages)), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return B.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
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
    this.#r.set(T(e), { queryKey: e, defaultOptions: t });
  }
  getQueryDefaults(e) {
    let t = [...this.#r.values()],
      r = {};
    return (
      t.forEach((s) => {
        j(e, s.queryKey) && (r = { ...r, ...s.defaultOptions });
      }),
      r
    );
  }
  setMutationDefaults(e, t) {
    this.#a.set(T(e), { mutationKey: e, defaultOptions: t });
  }
  getMutationDefaults(e) {
    let t = [...this.#a.values()],
      r = {};
    return (
      t.forEach((s) => {
        j(e, s.mutationKey) && (r = { ...r, ...s.defaultOptions });
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
      t.queryHash || (t.queryHash = V(t.queryKey, t)),
      t.refetchOnReconnect === void 0 &&
        (t.refetchOnReconnect = t.networkMode !== "always"),
      t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
      !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
      t.enabled !== !0 && t.queryFn === K && (t.enabled = !1),
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
var xe = class extends R {
  constructor(e, t) {
    super(),
      (this.options = t),
      (this.#e = e),
      (this.#o = null),
      (this.#n = J()),
      this.options.experimental_prefetchInRender ||
        this.#n.reject(
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
  #a;
  #i;
  #n;
  #o;
  #p;
  #d;
  #f;
  #l;
  #c;
  #u;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      Ke(this.#t, this.options) ? this.#h() : this.updateResult(),
      this.#v());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Se(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Se(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    (this.listeners = new Set()),
      this.#w(),
      this.#S(),
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
        typeof x(this.options.enabled, this.#t) != "boolean")
    )
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean",
      );
    this.#x(),
      this.#t.setOptions(this.options),
      r._defaulted &&
        !L(this.options, r) &&
        this.#e
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this,
          });
    let n = this.hasListeners();
    n && He(this.#t, s, this.options, r) && this.#h(),
      this.updateResult(t),
      n &&
        (this.#t !== s ||
          x(this.options.enabled, this.#t) !== x(r.enabled, this.#t) ||
          A(this.options.staleTime, this.#t) !== A(r.staleTime, this.#t)) &&
        this.#y();
    let i = this.#g();
    n &&
      (this.#t !== s ||
        x(this.options.enabled, this.#t) !== x(r.enabled, this.#t) ||
        i !== this.#u) &&
      this.#b(i);
  }
  getOptimisticResult(e) {
    let t = this.#e.getQueryCache().build(this.#e, e),
      r = this.createResult(t, e);
    return (
      Rt(this, r) &&
        ((this.#r = r), (this.#i = this.options), (this.#a = this.#t.state)),
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
    return this.#h({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#r),
    );
  }
  #h(e) {
    this.#x();
    let t = this.#t.fetch(this.options, e);
    return e?.throwOnError || (t = t.catch(b)), t;
  }
  #y() {
    this.#w();
    let e = A(this.options.staleTime, this.#t);
    if (S || this.#r.isStale || !$(e)) return;
    let r = te(this.#r.dataUpdatedAt, e) + 1;
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
    this.#S(),
      (this.#u = e),
      !(
        S ||
        x(this.options.enabled, this.#t) === !1 ||
        !$(this.#u) ||
        this.#u === 0
      ) &&
        (this.#c = setInterval(() => {
          (this.options.refetchIntervalInBackground || H.isFocused()) &&
            this.#h();
        }, this.#u));
  }
  #v() {
    this.#y(), this.#b(this.#g());
  }
  #w() {
    this.#l && (clearTimeout(this.#l), (this.#l = void 0));
  }
  #S() {
    this.#c && (clearInterval(this.#c), (this.#c = void 0));
  }
  createResult(e, t) {
    let r = this.#t,
      s = this.options,
      n = this.#r,
      i = this.#a,
      o = this.#i,
      u = e !== r ? e.state : this.#s,
      { state: c } = e,
      l = { ...c },
      v = !1,
      d;
    if (t._optimisticResults) {
      let w = this.hasListeners(),
        U = !w && Ke(e, t),
        I = w && He(e, r, t, s);
      (U || I) && (l = { ...l, ...be(c.data, e.options) }),
        t._optimisticResults === "isRestoring" && (l.fetchStatus = "idle");
    }
    let { error: p, errorUpdatedAt: m, status: h } = l;
    if (t.select && l.data !== void 0)
      if (n && l.data === i?.data && t.select === this.#p) d = this.#d;
      else
        try {
          (this.#p = t.select),
            (d = t.select(l.data)),
            (d = W(n?.data, d, t)),
            (this.#d = d),
            (this.#o = null);
        } catch (w) {
          this.#o = w;
        }
    else d = l.data;
    if (t.placeholderData !== void 0 && d === void 0 && h === "pending") {
      let w;
      if (n?.isPlaceholderData && t.placeholderData === o?.placeholderData)
        w = n.data;
      else if (
        ((w =
          typeof t.placeholderData == "function"
            ? t.placeholderData(this.#f?.state.data, this.#f)
            : t.placeholderData),
        t.select && w !== void 0)
      )
        try {
          (w = t.select(w)), (this.#o = null);
        } catch (U) {
          this.#o = U;
        }
      w !== void 0 && ((h = "success"), (d = W(n?.data, w, t)), (v = !0));
    }
    this.#o && ((p = this.#o), (d = this.#d), (m = Date.now()), (h = "error"));
    let y = l.fetchStatus === "fetching",
      g = h === "pending",
      O = h === "error",
      k = g && y,
      N = d !== void 0,
      P = {
        status: h,
        fetchStatus: l.fetchStatus,
        isPending: g,
        isSuccess: h === "success",
        isError: O,
        isInitialLoading: k,
        isLoading: k,
        data: d,
        dataUpdatedAt: l.dataUpdatedAt,
        error: p,
        errorUpdatedAt: m,
        failureCount: l.fetchFailureCount,
        failureReason: l.fetchFailureReason,
        errorUpdateCount: l.errorUpdateCount,
        isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
        isFetchedAfterMount:
          l.dataUpdateCount > u.dataUpdateCount ||
          l.errorUpdateCount > u.errorUpdateCount,
        isFetching: y,
        isRefetching: y && !g,
        isLoadingError: O && !N,
        isPaused: l.fetchStatus === "paused",
        isPlaceholderData: v,
        isRefetchError: O && N,
        isStale: Ce(e, t),
        refetch: this.refetch,
        promise: this.#n,
      };
    if (this.options.experimental_prefetchInRender) {
      let w = (X) => {
          P.status === "error"
            ? X.reject(P.error)
            : P.data !== void 0 && X.resolve(P.data);
        },
        U = () => {
          let X = (this.#n = P.promise = J());
          w(X);
        },
        I = this.#n;
      switch (I.status) {
        case "pending":
          e.queryHash === r.queryHash && w(I);
          break;
        case "fulfilled":
          (P.status === "error" || P.data !== I.value) && U();
          break;
        case "rejected":
          (P.status !== "error" || P.error !== I.reason) && U();
          break;
      }
    }
    return P;
  }
  updateResult(e) {
    let t = this.#r,
      r = this.createResult(this.#t, this.options);
    if (
      ((this.#a = this.#t.state),
      (this.#i = this.options),
      this.#a.data !== void 0 && (this.#f = this.#t),
      L(r, t))
    )
      return;
    this.#r = r;
    let s = {},
      n = () => {
        if (!t) return !0;
        let { notifyOnChangeProps: i } = this.options,
          o = typeof i == "function" ? i() : i;
        if (o === "all" || (!o && !this.#m.size)) return !0;
        let a = new Set(o ?? this.#m);
        return (
          this.options.throwOnError && a.add("error"),
          Object.keys(this.#r).some((u) => {
            let c = u;
            return this.#r[c] !== t[c] && a.has(c);
          })
        );
      };
    e?.listeners !== !1 && n() && (s.listeners = !0), this.#C({ ...s, ...e });
  }
  #x() {
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
  #C(e) {
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
    x(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Ke(e, t) {
  return Ct(e, t) || (e.state.data !== void 0 && Se(e, t, t.refetchOnMount));
}
function Se(e, t, r) {
  if (x(t.enabled, e) !== !1) {
    let s = typeof r == "function" ? r(e) : r;
    return s === "always" || (s !== !1 && Ce(e, t));
  }
  return !1;
}
function He(e, t, r, s) {
  return (
    (e !== t || x(s.enabled, e) === !1) &&
    (!r.suspense || e.state.status !== "error") &&
    Ce(e, r)
  );
}
function Ce(e, t) {
  return x(t.enabled, e) !== !1 && e.isStaleByTime(A(t.staleTime, e));
}
function Rt(e, t) {
  return !L(e.getCurrentResult(), t);
}
var Re = class extends R {
  #e;
  #t = void 0;
  #s;
  #r;
  constructor(e, t) {
    super(), (this.#e = e), this.setOptions(t), this.bindMethods(), this.#a();
  }
  bindMethods() {
    (this.mutate = this.mutate.bind(this)),
      (this.reset = this.reset.bind(this));
  }
  setOptions(e) {
    let t = this.options;
    (this.options = this.#e.defaultMutationOptions(e)),
      L(this.options, t) ||
        this.#e
          .getMutationCache()
          .notify({
            type: "observerOptionsUpdated",
            mutation: this.#s,
            observer: this,
          }),
      t?.mutationKey &&
      this.options.mutationKey &&
      T(t.mutationKey) !== T(this.options.mutationKey)
        ? this.reset()
        : this.#s?.state.status === "pending" &&
          this.#s.setOptions(this.options);
  }
  onUnsubscribe() {
    this.hasListeners() || this.#s?.removeObserver(this);
  }
  onMutationUpdate(e) {
    this.#a(), this.#i(e);
  }
  getCurrentResult() {
    return this.#t;
  }
  reset() {
    this.#s?.removeObserver(this), (this.#s = void 0), this.#a(), this.#i();
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
  #a() {
    let e = this.#s?.state ?? ve();
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
function Et(e) {
  return e;
}
function le(e, t, r) {
  if (typeof t != "object" || t === null) return;
  let s = e.getMutationCache(),
    n = e.getQueryCache(),
    i =
      r?.defaultOptions?.deserializeData ??
      e.getDefaultOptions().hydrate?.deserializeData ??
      Et,
    o = t.mutations || [],
    a = t.queries || [];
  o.forEach(({ state: u, ...c }) => {
    s.build(
      e,
      {
        ...e.getDefaultOptions().hydrate?.mutations,
        ...r?.defaultOptions?.mutations,
        ...c,
      },
      u,
    );
  }),
    a.forEach(
      ({ queryKey: u, state: c, queryHash: l, meta: v, promise: d }) => {
        let p = n.get(l),
          m = c.data === void 0 ? c.data : i(c.data);
        if (p) {
          if (p.state.dataUpdatedAt < c.dataUpdatedAt) {
            let { fetchStatus: h, ...y } = c;
            p.setState({ ...y, data: m });
          }
        } else
          p = n.build(
            e,
            {
              ...e.getDefaultOptions().hydrate?.queries,
              ...r?.defaultOptions?.queries,
              queryKey: u,
              queryHash: l,
              meta: v,
            },
            { ...c, data: m, fetchStatus: "idle" },
          );
        if (d) {
          let h = Promise.resolve(d).then(i);
          p.fetch(void 0, { initialPromise: h });
        }
      },
    );
}
var D = C(Q(), 1);
var z = C(Q(), 1),
  Be = C(ee(), 1),
  Ee = z.createContext(void 0),
  _ = (e) => {
    let t = z.useContext(Ee);
    if (e) return e;
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  Ot = ({ client: e, children: t }) => (
    z.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, Be.jsx)(Ee.Provider, { value: e, children: t })
  );
var Z = C(Q(), 1),
  Pt = C(ee(), 1);
function Tt() {
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
var kt = Z.createContext(Tt()),
  ze = () => Z.useContext(kt);
var Ge = C(Q(), 1);
function ce(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Y() {}
var $e = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  Ve = (e) => {
    Ge.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  We = ({ result: e, errorResetBoundary: t, throwOnError: r, query: s }) =>
    e.isError && !t.isReset() && !e.isFetching && s && ce(r, [e.error, s]);
var he = C(Q(), 1),
  Je = he.createContext(!1),
  Ze = () => he.useContext(Je),
  js = Je.Provider;
var Ye = (e) => {
    e.suspense &&
      (e.staleTime === void 0 && (e.staleTime = 1e3),
      typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  Xe = (e, t) => e.isLoading && e.isFetching && !t,
  et = (e, t) => e?.suspense && t.isPending,
  Oe = (e, t, r) =>
    t.fetchOptimistic(e).catch(() => {
      r.clearReset();
    });
function tt(e, t, r) {
  let s = _(r),
    n = Ze(),
    i = ze(),
    o = s.defaultQueryOptions(e);
  s.getDefaultOptions().queries?._experimental_beforeQuery?.(o),
    (o._optimisticResults = n ? "isRestoring" : "optimistic"),
    Ye(o),
    $e(o, i),
    Ve(i);
  let a = !s.getQueryCache().get(o.queryHash),
    [u] = D.useState(() => new t(s, o)),
    c = u.getOptimisticResult(o);
  if (
    (D.useSyncExternalStore(
      D.useCallback(
        (l) => {
          let v = n ? Y : u.subscribe(f.batchCalls(l));
          return u.updateResult(), v;
        },
        [u, n],
      ),
      () => u.getCurrentResult(),
      () => u.getCurrentResult(),
    ),
    D.useEffect(() => {
      u.setOptions(o, { listeners: !1 });
    }, [o, u]),
    et(o, c))
  )
    throw Oe(o, u, i);
  if (
    We({
      result: c,
      errorResetBoundary: i,
      throwOnError: o.throwOnError,
      query: s.getQueryCache().get(o.queryHash),
    })
  )
    throw c.error;
  return (
    s.getDefaultOptions().queries?._experimental_afterQuery?.(o, c),
    o.experimental_prefetchInRender &&
      !S &&
      Xe(c, n) &&
      (a ? Oe(o, u, i) : s.getQueryCache().get(o.queryHash)?.promise)
        ?.catch(Y)
        .finally(() => {
          u.updateResult();
        }),
    o.notifyOnChangeProps ? c : u.trackResult(c)
  );
}
function Mt(e, t) {
  return tt(e, xe, t);
}
var F = C(Q(), 1);
var Qt = ({ children: e, options: t = {}, state: r, queryClient: s }) => {
  let n = _(s),
    [i, o] = F.useState(),
    a = F.useRef(t);
  return (
    (a.current = t),
    F.useMemo(() => {
      if (r) {
        if (typeof r != "object") return;
        let u = n.getQueryCache(),
          c = r.queries || [],
          l = [],
          v = [];
        for (let d of c) {
          let p = u.get(d.queryHash);
          if (!p) l.push(d);
          else {
            let m = d.state.dataUpdatedAt > p.state.dataUpdatedAt,
              h = i?.find((y) => y.queryHash === d.queryHash);
            m &&
              (!h || d.state.dataUpdatedAt > h.state.dataUpdatedAt) &&
              v.push(d);
          }
        }
        l.length > 0 && le(n, { queries: l }, a.current),
          v.length > 0 && o((d) => (d ? [...d, ...v] : v));
      }
    }, [n, i, r]),
    F.useEffect(() => {
      i && (le(n, { queries: i }, a.current), o(void 0));
    }, [n, i]),
    e
  );
};
var M = C(Q(), 1);
function At(e, t) {
  let r = _(t),
    [s] = M.useState(() => new Re(r, e));
  M.useEffect(() => {
    s.setOptions(e);
  }, [s, e]);
  let n = M.useSyncExternalStore(
      M.useCallback((o) => s.subscribe(f.batchCalls(o)), [s]),
      () => s.getCurrentResult(),
      () => s.getCurrentResult(),
    ),
    i = M.useCallback(
      (o, a) => {
        s.mutate(o, a).catch(Y);
      },
      [s],
    );
  if (n.error && ce(s.options.throwOnError, [n.error])) throw n.error;
  return { ...n, mutate: i, mutateAsync: n.mutate };
}
function Dt(e, t, ...r) {
  console.assert
    ? r.length == 0
      ? console.assert(!!e, t)
      : console.assert(!!e, t, ...r)
    : e || console.warn(t, ...r);
}
function pn(e, t, ...r) {
  Dt(!1, t, ...r);
}
var Te = {};
fe(Te, {
  ArrayEquals: () => _t,
  ArrayEqualsUnsorted: () => qt,
  ArrayWithoutElement: () => It,
  BInsertBeforeElement: () => Gt,
  CountMatches: () => Ut,
  FilterInPlace: () => Kt,
  FindAndRemove: () => Pe,
  FindAndRemoveWhere: () => nt,
  FindLast: () => Bt,
  GetRandomElementArray: () => Ft,
  MoveElement: () => st,
  MoveElementToTail: () => Nt,
  PadArray: () => Ht,
  ShallowCompare: () => jt,
  ShuffleArray: () => rt,
  SortedFindLessOrEqual: () => it,
  SortedInsert: () => Lt,
  Unique: () => zt,
});
function rt(e, t = 0, r = Math.random) {
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
function Ft(e, t) {
  let r = e.slice();
  return rt(r), r.slice(0, t);
}
function st(e, t, r) {
  t < 0 ||
    r < 0 ||
    (r >= e.length && (e[r] = void 0), e.splice(r, 0, e.splice(t, 1)[0]));
}
function Nt(e, t) {
  st(e, t, e.length - 1);
}
function _t(e, t) {
  if (!e && !t) return !0;
  if (!e || !t || e.length != t.length) return !1;
  for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function qt(e, t, r) {
  if (!e && !t) return !0;
  if (!e || !t || e.length !== t.length) return !1;
  let s = e.slice().sort(r),
    n = t.slice().sort(r);
  for (let i = 0; i < s.length; i++) if (s[i] !== n[i]) return !1;
  return !0;
}
function Pe(e, t) {
  return nt(e, (r) => t == r);
}
function nt(e, t) {
  let r = e.findIndex(t);
  return r >= 0 ? (e.splice(r, 1), !0) : !1;
}
function Ut(e, t) {
  return e.reduce((r, s, n, i) => r + (t(s, n, i) ? 1 : 0), 0);
}
function It(e, t) {
  return e.filter((r) => t !== r);
}
function jt(e, t) {
  if (e.length != t.length) return !1;
  for (let r = 0; r < e.length; r++) if (e[r] != t[r]) return !1;
  return !0;
}
function it(e, t) {
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
function Lt(e, t, r) {
  let n = it(e, (i) => r(t, i));
  e.splice(n + 1, 0, t);
}
function Kt(e, t) {
  let r = 0,
    s = 0;
  for (; r < e.length; ) {
    let n = e[r];
    t(n, r, e) && (e[s++] = n), r++;
  }
  return (e.length = s), e;
}
function Ht(e, t, r) {
  return (
    e ||
      console.error(
        "array should be defined for us to fill in the missing indexes",
      ),
    e.length < t ? e.concat(Array(t - e.length).fill(r)) : e
  );
}
function Bt(e, t) {
  if (t)
    for (let r = e.length - 1; r >= 0; --r) {
      let s = e[r];
      if (t(s, r, e)) return s;
    }
}
function zt(e) {
  let t = new Set();
  return e.forEach((r) => t.add(r)), Array.from(t);
}
function Gt(e, t, r) {
  let s = e.findIndex(r);
  return s >= 0 ? (e.splice(s, 0, t), !0) : !1;
}
var ot = {};
fe(ot, {
  Clamp: () => at,
  RandomInt: () => $t,
  RemapVal: () => Vt,
  RemapValClamped: () => Wt,
  isNumeric: () => Jt,
});
function $t(e, t) {
  return (
    (e = Math.ceil(e)),
    (t = Math.floor(t)),
    Math.floor(Math.random() * (t - e + 1)) + e
  );
}
function at(e, t, r) {
  return e == null || isNaN(e) ? e : Math.max(t, Math.min(r, e));
}
function Vt(e, t, r, s, n) {
  return s + ((n - s) * (e - t)) / (r - t);
}
function Wt(e, t, r, s, n) {
  return at(s + ((n - s) * (e - t)) / (r - t), Math.min(s, n), Math.max(s, n));
}
function Jt(e) {
  return typeof e != "string"
    ? !1
    : !Number.isNaN(e) && !Number.isNaN(Number.parseFloat(e));
}
var ut = {};
fe(ut, { GenerateSHA: () => Zt });
async function Zt(e, t = "SHA-256") {
  let r;
  typeof e == "string" ? (r = Xt(e)) : (r = e);
  let s = await window.crypto.subtle.digest(t, r);
  return Yt(s);
}
function Yt(e) {
  return Array.prototype.map
    .call(new Uint8Array(e), (t) => ("00" + t.toString(16)).slice(-2))
    .join("");
}
function Xt(e) {
  return new TextEncoder().encode(e).buffer;
}
var lt = class extends Error {
  eResult;
  constructor(t, r) {
    super(r ? `EResult ${t}: ${r}` : `EResult ${t}`), (this.eResult = t);
  }
};
var ct = class {
  m_vecCallbacks = [];
  Register(t) {
    return (
      this.m_vecCallbacks.push(t),
      {
        Unregister: () => {
          Pe(this.m_vecCallbacks, t);
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
function vn(e, t) {
  return e.split(t);
}
function Sn(e) {
  return !!e;
}
var er = /^(steam|ftp|https?):\/\//;
function ht(e) {
  return er.test(e) ? e : "https://" + e;
}
function dt(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function tr(e) {
  if (!dt(e)) return !1;
  let t = e.constructor;
  if (typeof t > "u") return !0;
  let r = t.prototype;
  return !(!dt(r) || !Object.prototype.hasOwnProperty.call(r, "isPrototypeOf"));
}
function Rn(...e) {
  return JSON.stringify(e, (t, r) => {
    if (tr(r)) {
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
function On(e, t, r) {
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
var ft = {
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
};
var G = ft;
function sr(e) {
  return e in G;
}
var E = class e {
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
      let s = new URL(ht(t)),
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
      ? sr(t)
        ? "" + G[t]
        : (t.match(/^[0-9]+$/) || (t = t.replace(/^[0-9]+/, "")),
          t.replace(/[^a-zA-Z0-9\- ]+/g, ""))
      : "";
  }
  static DecodeEventComponent(t) {
    let r = t && parseInt(t);
    if (r && G) {
      for (let s in G) if (G[s] == r) return s;
    }
    return e.SanitizeEventComponent(t);
  }
  static SanitizeEventComponent(t) {
    return !t || !t.match(/^[a-zA-Z0-9\-.]*$/) ? "" : t;
  }
};
function $n(e) {
  return {
    ...e,
    domain: E.SanitizeEventComponent(e.domain),
    controller: E.SanitizeEventComponent(e.controller),
    method: E.SanitizeEventComponent(e.method),
    submethod: E.SanitizeEventComponent(e.submethod),
    feature: E.SanitizeEventComponent(e.feature),
    depth: e.depth || 0,
  };
}
var q = C(Q());
var pt = C(ee()),
  mt = q.default.createContext({}),
  Zn = q.default.createContext(void 0);
function Yn(e) {
  let { children: t, ...r } = e,
    s = de(),
    n = q.default.useMemo(
      () => ({ ...s, ...r }),
      [s, r.domain, r.controller, r.method, r.submethod, r.feature, r.depth],
    );
  return (0, pt.jsx)(mt.Provider, { value: n, children: t });
}
function de() {
  return q.default.useContext(mt);
}
function Xn(e, t) {
  return nr(de(), e, t);
}
function nr(e, t, r) {
  return {
    ...e,
    feature: t || e.feature,
    depth: r || e.depth,
    countrycode: me.COUNTRY,
    is_client: me.IN_CLIENT,
  };
}
function ei(e, t, r) {
  let s = de();
  return q.default.useMemo(() => e && ir(s, e, t, r), [e, s, t, r]);
}
function ti(e, t) {
  let r = de();
  return q.default.useMemo(
    () => E.GetLinkParam({ ...r, feature: e || r.feature }, t),
    [r, e, t],
  );
}
function ir(e, t, r, s) {
  let n = E.GetLinkParam({ ...e, feature: r || e.feature }, s);
  return E.AddNavParamToURL(t, n);
}
export {
  xt as a,
  _ as b,
  Ot as c,
  Mt as d,
  Qt as e,
  At as f,
  Dt as g,
  pn as h,
  Pe as i,
  Te as j,
  ot as k,
  ut as l,
  lt as m,
  ct as n,
  vn as o,
  Sn as p,
  Rn as q,
  On as r,
  E as s,
  $n as t,
  Yn as u,
  de as v,
  Xn as w,
  ei as x,
  ti as y,
  ir as z,
};

import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _.createContext(void 0),
  _ = (_) => {
    let _ = _.useContext(_);
    if (_) return _;
    if (!_)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return _;
  },
  _ = ({ client: _, children: _ }) => (
    _.useEffect(
      () => (
        _.mount(),
        () => {
          _.unmount();
        }
      ),
      [_],
    ),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _,
    })
  );
var _ = class {
  constructor() {
    (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(_) {
    return (
      this.listeners.add(_),
      this.onSubscribe(),
      () => {
        this.listeners.delete(_), this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
};
var _ = typeof window > "u" || "Deno" in globalThis;
function _() {}
function _(_, _) {
  return typeof _ == "function" ? _(_) : _;
}
function _(_) {
  return typeof _ == "number" && _ >= 0 && _ !== 1 / 0;
}
function _(_, _) {
  return Math.max(_ + (_ || 0) - Date.now(), 0);
}
function _(_, _) {
  return typeof _ == "function" ? _(_) : _;
}
function _(_, _) {
  return typeof _ == "function" ? _(_) : _;
}
function _(_, _) {
  let {
    type: _ = "all",
    exact: _,
    fetchStatus: _,
    predicate: _,
    queryKey: _,
    stale: _,
  } = _;
  if (_) {
    if (_) {
      if (_.queryHash !== _(_, _.options)) return !1;
    } else if (!_(_.queryKey, _)) return !1;
  }
  if (_ !== "all") {
    let _ = _.isActive();
    if ((_ === "active" && !_) || (_ === "inactive" && _)) return !1;
  }
  return !(
    (typeof _ == "boolean" && _.isStale() !== _) ||
    (_ && _ !== _.state.fetchStatus) ||
    (_ && !_(_))
  );
}
function _(_, _) {
  let { exact: _, status: _, predicate: _, mutationKey: _ } = _;
  if (_) {
    if (!_.options.mutationKey) return !1;
    if (_) {
      if (_(_.options.mutationKey) !== _(_)) return !1;
    } else if (!_(_.options.mutationKey, _)) return !1;
  }
  return !((_ && _.state.status !== _) || (_ && !_(_)));
}
function _(_, _) {
  return (_?.queryKeyHashFn || _)(_);
}
function _(_) {
  return JSON.stringify(_, (_, _) =>
    _(_)
      ? Object.keys(_)
          .sort()
          .reduce((_, _) => ((_[_] = _[_]), _), {})
      : _,
  );
}
function _(_, _) {
  return _ === _
    ? !0
    : typeof _ != typeof _
      ? !1
      : _ && _ && typeof _ == "object" && typeof _ == "object"
        ? !Object.keys(_).some((_) => !_(_[_], _[_]))
        : !1;
}
function _(_, _) {
  if (_ === _) return _;
  let _ = _(_) && _(_);
  if (_ || (_(_) && _(_))) {
    let _ = _ ? _ : Object.keys(_),
      _ = _.length,
      _ = _ ? _ : Object.keys(_),
      _ = _.length,
      _ = _ ? [] : {},
      _ = 0;
    for (let _ = 0; _ < _; _++) {
      let _ = _ ? _ : _[_];
      ((!_ && _.includes(_)) || _) && _[_] === void 0 && _[_] === void 0
        ? ((_[_] = void 0), _++)
        : ((_[_] = _(_[_], _[_])), _[_] === _[_] && _[_] !== void 0 && _++);
    }
    return _ === _ && _ === _ ? _ : _;
  }
  return _;
}
function _(_, _) {
  if (!_ || Object.keys(_).length !== Object.keys(_).length) return !1;
  for (let _ in _) if (_[_] !== _[_]) return !1;
  return !0;
}
function _(_) {
  return Array.isArray(_) && _.length === Object.keys(_).length;
}
function _(_) {
  if (!_(_)) return !1;
  let _ = _.constructor;
  if (_ === void 0) return !0;
  let _ = _.prototype;
  return !(
    !_(_) ||
    !_.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(_) !== Object.prototype
  );
}
function _(_) {
  return Object.prototype.toString.call(_) === "[object Object]";
}
function _(_) {
  return new Promise((_) => {
    setTimeout(_, _);
  });
}
function _(_, _, _) {
  return typeof _.structuralSharing == "function"
    ? _.structuralSharing(_, _)
    : _.structuralSharing !== !1
      ? _(_, _)
      : _;
}
function _(_, _, _ = 0) {
  let _ = [..._, _];
  return _ && _.length > _ ? _.slice(1) : _;
}
function _(_, _, _ = 0) {
  let _ = [_, ..._];
  return _ && _.length > _ ? _.slice(0, -1) : _;
}
var _ = Symbol();
function _(_, _) {
  return !_.queryFn && _?.initialPromise
    ? () => _.initialPromise
    : !_.queryFn || _.queryFn === _
      ? () => Promise.reject(new Error(`Missing queryFn: '${_.queryHash}'`))
      : _.queryFn;
}
var _ = class extends _ {
    #e;
    #t;
    #s;
    constructor() {
      super(),
        (this.#s = (_) => {
          if (!_ && window.addEventListener) {
            let _ = () => _();
            return (
              window.addEventListener("visibilitychange", _, !1),
              () => {
                window.removeEventListener("visibilitychange", _);
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
    setEventListener(_) {
      (this.#s = _),
        this.#t?.(),
        (this.#t = _((_) => {
          typeof _ == "boolean" ? this.setFocused(_) : this.onFocus();
        }));
    }
    setFocused(_) {
      this.#e !== _ && ((this.#e = _), this.onFocus());
    }
    onFocus() {
      let _ = this.isFocused();
      this.listeners.forEach((_) => {
        _(_);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  _ = new _();
var _ = class extends _ {
    #e = !0;
    #t;
    #s;
    constructor() {
      super(),
        (this.#s = (_) => {
          if (!_ && window.addEventListener) {
            let _ = () => _(!0),
              _ = () => _(!1);
            return (
              window.addEventListener("online", _, !1),
              window.addEventListener("offline", _, !1),
              () => {
                window.removeEventListener("online", _),
                  window.removeEventListener("offline", _);
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
    setEventListener(_) {
      (this.#s = _), this.#t?.(), (this.#t = _(this.setOnline.bind(this)));
    }
    setOnline(_) {
      this.#e !== _ &&
        ((this.#e = _),
        this.listeners.forEach((_) => {
          _(_);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  _ = new _();
function _() {
  let _,
    _,
    _ = new Promise((_, _) => {
      (_ = _), (_ = _);
    });
  (_.status = "pending"), _.catch(() => {});
  function _(_) {
    Object.assign(_, _), delete _.resolve, delete _.reject;
  }
  return (
    (_.resolve = (_) => {
      _({
        status: "fulfilled",
        value: _,
      }),
        _(_);
    }),
    (_.reject = (_) => {
      _({
        status: "rejected",
        reason: _,
      }),
        _(_);
    }),
    _
  );
}
function _(_) {
  return Math.min(1e3 * 2 ** _, 3e4);
}
function _(_) {
  return (_ ?? "online") === "online" ? _.isOnline() : !0;
}
var _ = class extends Error {
  constructor(_) {
    super("CancelledError"),
      (this.revert = _?.revert),
      (this.silent = _?.silent);
  }
};
function _(_) {
  return _ instanceof _;
}
function _(_) {
  let _ = !1,
    _ = 0,
    _ = !1,
    _,
    _ = _(),
    _ = (_) => {
      _ || (_(new _(_)), _.abort?.());
    },
    _ = () => {
      _ = !0;
    },
    _ = () => {
      _ = !1;
    },
    _ = () =>
      _.isFocused() &&
      (_.networkMode === "always" || _.isOnline()) &&
      _.canRun(),
    _ = () => _(_.networkMode) && _.canRun(),
    _ = (_) => {
      _ || ((_ = !0), _.onSuccess?.(_), _?.(), _.resolve(_));
    },
    _ = (_) => {
      _ || ((_ = !0), _.onError?.(_), _?.(), _.reject(_));
    },
    _ = () =>
      new Promise((_) => {
        (_ = (_) => {
          (_ || _()) && _(_);
        }),
          _.onPause?.();
      }).then(() => {
        (_ = void 0), _ || _.onContinue?.();
      }),
    _ = () => {
      if (_) return;
      let _,
        _ = _ === 0 ? _.initialPromise : void 0;
      try {
        _ = _ ?? _._();
      } catch (_) {
        _ = Promise.reject(_);
      }
      Promise.resolve(_)
        .then(_)
        .catch((_) => {
          if (_) return;
          let _ = _.retry ?? (_ ? 0 : 3),
            _ = _.retryDelay ?? _,
            _ = typeof _ == "function" ? _(_, _) : _,
            _ =
              _ === !0 ||
              (typeof _ == "number" && _ < _) ||
              (typeof _ == "function" && _(_, _));
          if (_ || !_) {
            _(_);
            return;
          }
          _++,
            _.onFail?.(_, _),
            _(_)
              .then(() => (_() ? void 0 : _()))
              .then(() => {
                _ ? _(_) : _();
              });
        });
    };
  return {
    promise: _,
    cancel: _,
    continue: () => (_?.(), _),
    cancelRetry: _,
    continueRetry: _,
    canStart: _,
    start: () => (_() ? _() : _().then(_), _),
  };
}
function _() {
  let _ = [],
    _ = 0,
    _ = (_) => {
      _();
    },
    _ = (_) => {
      _();
    },
    _ = (_) => setTimeout(_, 0),
    _ = (_) => {
      _
        ? _.push(_)
        : _(() => {
            _(_);
          });
    },
    _ = () => {
      let _ = _;
      (_ = []),
        _.length &&
          _(() => {
            _(() => {
              _.forEach((_) => {
                _(_);
              });
            });
          });
    };
  return {
    batch: (_) => {
      let _;
      _++;
      try {
        _ = _();
      } finally {
        _--, _ || _();
      }
      return _;
    },
    batchCalls:
      (_) =>
      (..._) => {
        _(() => {
          _(..._);
        });
      },
    schedule: _,
    setNotifyFunction: (_) => {
      _ = _;
    },
    setBatchNotifyFunction: (_) => {
      _ = _;
    },
    setScheduler: (_) => {
      _ = _;
    },
  };
}
var _ = _();
var _ = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      _(this.gcTime) &&
        (this.#e = setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime));
  }
  updateGcTime(_) {
    this.gcTime = Math.max(this.gcTime || 0, _ ?? (_ ? 1 / 0 : 300 * 1e3));
  }
  clearGcTimeout() {
    this.#e && (clearTimeout(this.#e), (this.#e = void 0));
  }
};
var _ = class extends _ {
  #e;
  #t;
  #s;
  #r;
  #n;
  #i;
  constructor(_) {
    super(),
      (this.#i = !1),
      (this.#n = _.defaultOptions),
      this.setOptions(_.options),
      (this.observers = []),
      (this.#s = _.cache),
      (this.queryKey = _.queryKey),
      (this.queryHash = _.queryHash),
      (this.#e = _(this.options)),
      (this.state = _.state ?? this.#e),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    return this.#r?.promise;
  }
  setOptions(_) {
    (this.options = {
      ...this.#n,
      ..._,
    }),
      this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.#s.remove(this);
  }
  setData(_, _) {
    let _ = _(this.state.data, _, this.options);
    return (
      this.#o({
        data: _,
        type: "success",
        dataUpdatedAt: _?.updatedAt,
        manual: _?.manual,
      }),
      _
    );
  }
  setState(_, _) {
    this.#o({
      type: "setState",
      state: _,
      setStateOptions: _,
    });
  }
  cancel(_) {
    let _ = this.#r?.promise;
    return this.#r?.cancel(_), _ ? _.then(_).catch(_) : Promise.resolve();
  }
  destroy() {
    super.destroy(),
      this.cancel({
        silent: !0,
      });
  }
  reset() {
    this.destroy(), this.setState(this.#e);
  }
  isActive() {
    return this.observers.some((_) => _(_.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === _ ||
          this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated
      ? !0
      : this.getObserversCount() > 0
        ? this.observers.some((_) => _.getCurrentResult().isStale)
        : this.state.data === void 0;
  }
  isStaleByTime(_ = 0) {
    return (
      this.state.isInvalidated ||
      this.state.data === void 0 ||
      !_(this.state.dataUpdatedAt, _)
    );
  }
  onFocus() {
    this.observers
      .find((_) => _.shouldFetchOnWindowFocus())
      ?.refetch({
        cancelRefetch: !1,
      }),
      this.#r?.continue();
  }
  onOnline() {
    this.observers
      .find((_) => _.shouldFetchOnReconnect())
      ?.refetch({
        cancelRefetch: !1,
      }),
      this.#r?.continue();
  }
  addObserver(_) {
    this.observers.includes(_) ||
      (this.observers.push(_),
      this.clearGcTimeout(),
      this.#s.notify({
        type: "observerAdded",
        query: this,
        observer: _,
      }));
  }
  removeObserver(_) {
    this.observers.includes(_) &&
      ((this.observers = this.observers.filter((_) => _ !== _)),
      this.observers.length ||
        (this.#r &&
          (this.#i
            ? this.#r.cancel({
                revert: !0,
              })
            : this.#r.cancelRetry()),
        this.scheduleGc()),
      this.#s.notify({
        type: "observerRemoved",
        query: this,
        observer: _,
      }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated ||
      this.#o({
        type: "invalidate",
      });
  }
  fetch(_, _) {
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && _?.cancelRefetch)
        this.cancel({
          silent: !0,
        });
      else if (this.#r) return this.#r.continueRetry(), this.#r.promise;
    }
    if ((_ && this.setOptions(_), !this.options.queryFn)) {
      let _ = this.observers.find((_) => _.options.queryFn);
      _ && this.setOptions(_.options);
    }
    let _ = new AbortController(),
      _ = (_) => {
        Object.defineProperty(_, "signal", {
          enumerable: !0,
          get: () => ((this.#i = !0), _.signal),
        });
      },
      _ = () => {
        let _ = _(this.options, _),
          _ = {
            queryKey: this.queryKey,
            meta: this.meta,
          };
        return (
          _(_),
          (this.#i = !1),
          this.options.persister ? this.options.persister(_, _, this) : _(_)
        );
      },
      _ = {
        fetchOptions: _,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: _,
      };
    _(_),
      this.options.behavior?.onFetch(_, this),
      (this.#t = this.state),
      (this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !== _.fetchOptions?.meta) &&
        this.#o({
          type: "fetch",
          meta: _.fetchOptions?.meta,
        });
    let _ = (_) => {
      (_(_) && _.silent) ||
        this.#o({
          type: "error",
          error: _,
        }),
        _(_) ||
          (this.#s.config.onError?.(_, this),
          this.#s.config.onSettled?.(this.state.data, _, this)),
        this.scheduleGc();
    };
    return (
      (this.#r = _({
        initialPromise: _?.initialPromise,
        _: _.fetchFn,
        abort: _.abort.bind(_),
        onSuccess: (_) => {
          if (_ === void 0) {
            _(new Error(`${this.queryHash} data is undefined`));
            return;
          }
          try {
            this.setData(_);
          } catch (_) {
            _(_);
            return;
          }
          this.#s.config.onSuccess?.(_, this),
            this.#s.config.onSettled?.(_, this.state.error, this),
            this.scheduleGc();
        },
        onError: _,
        onFail: (_, _) => {
          this.#o({
            type: "failed",
            failureCount: _,
            error: _,
          });
        },
        onPause: () => {
          this.#o({
            type: "pause",
          });
        },
        onContinue: () => {
          this.#o({
            type: "continue",
          });
        },
        retry: _.options.retry,
        retryDelay: _.options.retryDelay,
        networkMode: _.options.networkMode,
        canRun: () => !0,
      })),
      this.#r.start()
    );
  }
  #o(_) {
    let _ = (_) => {
      switch (_.type) {
        case "failed":
          return {
            ..._,
            fetchFailureCount: _.failureCount,
            fetchFailureReason: _.error,
          };
        case "pause":
          return {
            ..._,
            fetchStatus: "paused",
          };
        case "continue":
          return {
            ..._,
            fetchStatus: "fetching",
          };
        case "fetch":
          return {
            ..._,
            ..._(_.data, this.options),
            fetchMeta: _.meta ?? null,
          };
        case "success":
          return {
            ..._,
            data: _.data,
            dataUpdateCount: _.dataUpdateCount + 1,
            dataUpdatedAt: _.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...(!_.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
        case "error":
          let _ = _.error;
          return _(_) && _.revert && this.#t
            ? {
                ...this.#t,
                fetchStatus: "idle",
              }
            : {
                ..._,
                error: _,
                errorUpdateCount: _.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: _.fetchFailureCount + 1,
                fetchFailureReason: _,
                fetchStatus: "idle",
                status: "error",
              };
        case "invalidate":
          return {
            ..._,
            isInvalidated: !0,
          };
        case "setState":
          return {
            ..._,
            ..._.state,
          };
      }
    };
    (this.state = _(this.state)),
      _.batch(() => {
        this.observers.forEach((_) => {
          _.onQueryUpdate();
        }),
          this.#s.notify({
            query: this,
            type: "updated",
            action: _,
          });
      });
  }
};
function _(_, _) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: _(_.networkMode) ? "fetching" : "paused",
    ...(_ === void 0 && {
      error: null,
      status: "pending",
    }),
  };
}
function _(_) {
  let _ = typeof _.initialData == "function" ? _.initialData() : _.initialData,
    _ = _ !== void 0,
    _ = _
      ? typeof _.initialDataUpdatedAt == "function"
        ? _.initialDataUpdatedAt()
        : _.initialDataUpdatedAt
      : 0;
  return {
    data: _,
    dataUpdateCount: 0,
    dataUpdatedAt: _ ? (_ ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: _ ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var _ = class extends _ {
  constructor(_ = {}) {
    super(), (this.config = _), (this.#e = new Map());
  }
  #e;
  build(_, _, _) {
    let _ = _.queryKey,
      _ = _.queryHash ?? _(_, _),
      _ = this.get(_);
    return (
      _ ||
        ((_ = new _({
          cache: this,
          queryKey: _,
          queryHash: _,
          options: _.defaultQueryOptions(_),
          state: _,
          defaultOptions: _.getQueryDefaults(_),
        })),
        this.add(_)),
      _
    );
  }
  add(_) {
    this.#e.has(_.queryHash) ||
      (this.#e.set(_.queryHash, _),
      this.notify({
        type: "added",
        query: _,
      }));
  }
  remove(_) {
    let _ = this.#e.get(_.queryHash);
    _ &&
      (_.destroy(),
      _ === _ && this.#e.delete(_.queryHash),
      this.notify({
        type: "removed",
        query: _,
      }));
  }
  clear() {
    _.batch(() => {
      this.getAll().forEach((_) => {
        this.remove(_);
      });
    });
  }
  get(_) {
    return this.#e.get(_);
  }
  getAll() {
    return [...this.#e.values()];
  }
  find(_) {
    let _ = {
      exact: !0,
      ..._,
    };
    return this.getAll().find((_) => _(_, _));
  }
  findAll(_ = {}) {
    let _ = this.getAll();
    return Object.keys(_).length > 0 ? _.filter((_) => _(_, _)) : _;
  }
  notify(_) {
    _.batch(() => {
      this.listeners.forEach((_) => {
        _(_);
      });
    });
  }
  onFocus() {
    _.batch(() => {
      this.getAll().forEach((_) => {
        _.onFocus();
      });
    });
  }
  onOnline() {
    _.batch(() => {
      this.getAll().forEach((_) => {
        _.onOnline();
      });
    });
  }
};
var _ = class extends _ {
  #e;
  #t;
  #s;
  constructor(_) {
    super(),
      (this.mutationId = _.mutationId),
      (this.#t = _.mutationCache),
      (this.#e = []),
      (this.state = _.state || _()),
      this.setOptions(_.options),
      this.scheduleGc();
  }
  setOptions(_) {
    (this.options = _), this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(_) {
    this.#e.includes(_) ||
      (this.#e.push(_),
      this.clearGcTimeout(),
      this.#t.notify({
        type: "observerAdded",
        mutation: this,
        observer: _,
      }));
  }
  removeObserver(_) {
    (this.#e = this.#e.filter((_) => _ !== _)),
      this.scheduleGc(),
      this.#t.notify({
        type: "observerRemoved",
        mutation: this,
        observer: _,
      });
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
  async execute(_) {
    this.#s = _({
      _: () =>
        this.options.mutationFn
          ? this.options.mutationFn(_)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (_, _) => {
        this.#r({
          type: "failed",
          failureCount: _,
          error: _,
        });
      },
      onPause: () => {
        this.#r({
          type: "pause",
        });
      },
      onContinue: () => {
        this.#r({
          type: "continue",
        });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#t.canRun(this),
    });
    let _ = this.state.status === "pending",
      _ = !this.#s.canStart();
    try {
      if (!_) {
        this.#r({
          type: "pending",
          variables: _,
          isPaused: _,
        }),
          await this.#t.config.onMutate?.(_, this);
        let _ = await this.options.onMutate?.(_);
        _ !== this.state.context &&
          this.#r({
            type: "pending",
            context: _,
            variables: _,
            isPaused: _,
          });
      }
      let _ = await this.#s.start();
      return (
        await this.#t.config.onSuccess?.(_, _, this.state.context, this),
        await this.options.onSuccess?.(_, _, this.state.context),
        await this.#t.config.onSettled?.(
          _,
          null,
          this.state.variables,
          this.state.context,
          this,
        ),
        await this.options.onSettled?.(_, null, _, this.state.context),
        this.#r({
          type: "success",
          data: _,
        }),
        _
      );
    } catch (_) {
      try {
        throw (
          (await this.#t.config.onError?.(_, _, this.state.context, this),
          await this.options.onError?.(_, _, this.state.context),
          await this.#t.config.onSettled?.(
            void 0,
            _,
            this.state.variables,
            this.state.context,
            this,
          ),
          await this.options.onSettled?.(void 0, _, _, this.state.context),
          _)
        );
      } finally {
        this.#r({
          type: "error",
          error: _,
        });
      }
    } finally {
      this.#t.runNext(this);
    }
  }
  #r(_) {
    let _ = (_) => {
      switch (_.type) {
        case "failed":
          return {
            ..._,
            failureCount: _.failureCount,
            failureReason: _.error,
          };
        case "pause":
          return {
            ..._,
            isPaused: !0,
          };
        case "continue":
          return {
            ..._,
            isPaused: !1,
          };
        case "pending":
          return {
            ..._,
            context: _.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: _.isPaused,
            status: "pending",
            variables: _.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ..._,
            data: _.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ..._,
            data: void 0,
            error: _.error,
            failureCount: _.failureCount + 1,
            failureReason: _.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    (this.state = _(this.state)),
      _.batch(() => {
        this.#e.forEach((_) => {
          _.onMutationUpdate(_);
        }),
          this.#t.notify({
            mutation: this,
            type: "updated",
            action: _,
          });
      });
  }
};
function _() {
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
var _ = class extends _ {
  constructor(_ = {}) {
    super(), (this.config = _), (this.#e = new Map()), (this.#t = Date.now());
  }
  #e;
  #t;
  build(_, _, _) {
    let _ = new _({
      mutationCache: this,
      mutationId: ++this.#t,
      options: _.defaultMutationOptions(_),
      state: _,
    });
    return this.add(_), _;
  }
  add(_) {
    let _ = _(_),
      _ = this.#e.get(_) ?? [];
    _.push(_),
      this.#e.set(_, _),
      this.notify({
        type: "added",
        mutation: _,
      });
  }
  remove(_) {
    let _ = _(_);
    if (this.#e.has(_)) {
      let _ = this.#e.get(_)?.filter((_) => _ !== _);
      _ && (_.length === 0 ? this.#e.delete(_) : this.#e.set(_, _));
    }
    this.notify({
      type: "removed",
      mutation: _,
    });
  }
  canRun(_) {
    let _ = this.#e.get(_(_))?.find((_) => _.state.status === "pending");
    return !_ || _ === _;
  }
  runNext(_) {
    return (
      this.#e
        .get(_(_))
        ?.find((_) => _ !== _ && _.state.isPaused)
        ?.continue() ?? Promise.resolve()
    );
  }
  clear() {
    _.batch(() => {
      this.getAll().forEach((_) => {
        this.remove(_);
      });
    });
  }
  getAll() {
    return [...this.#e.values()].flat();
  }
  find(_) {
    let _ = {
      exact: !0,
      ..._,
    };
    return this.getAll().find((_) => _(_, _));
  }
  findAll(_ = {}) {
    return this.getAll().filter((_) => _(_, _));
  }
  notify(_) {
    _.batch(() => {
      this.listeners.forEach((_) => {
        _(_);
      });
    });
  }
  resumePausedMutations() {
    let _ = this.getAll().filter((_) => _.state.isPaused);
    return _.batch(() => Promise.all(_.map((_) => _.continue().catch(_))));
  }
};
function _(_) {
  return _.options.scope?._ ?? String(_.mutationId);
}
function _(_) {
  return {
    onFetch: (_, _) => {
      let _ = _.options,
        _ = _.fetchOptions?.meta?.fetchMore?.direction,
        _ = _.state.data?.pages || [],
        _ = _.state.data?.pageParams || [],
        _ = {
          pages: [],
          pageParams: [],
        },
        _ = 0,
        _ = async () => {
          let _ = !1,
            _ = (_) => {
              Object.defineProperty(_, "signal", {
                enumerable: !0,
                get: () => (
                  _.signal.aborted
                    ? (_ = !0)
                    : _.signal.addEventListener("abort", () => {
                        _ = !0;
                      }),
                  _.signal
                ),
              });
            },
            _ = _(_.options, _.fetchOptions),
            _ = async (_, _, _) => {
              if (_) return Promise.reject();
              if (_ == null && _.pages.length) return Promise.resolve(_);
              let _ = {
                queryKey: _.queryKey,
                pageParam: _,
                direction: _ ? "backward" : "forward",
                meta: _.options.meta,
              };
              _(_);
              let _ = await _(_),
                { maxPages: _ } = _.options,
                _ = _ ? _ : _;
              return {
                pages: _(_.pages, _, _),
                pageParams: _(_.pageParams, _, _),
              };
            };
          if (_ && _.length) {
            let _ = _ === "backward",
              _ = _ ? _ : _,
              _ = {
                pages: _,
                pageParams: _,
              },
              _ = _(_, _);
            _ = await _(_, _, _);
          } else {
            let _ = _ ?? _.length;
            do {
              let _ = _ === 0 ? (_[0] ?? _.initialPageParam) : _(_, _);
              if (_ > 0 && _ == null) break;
              (_ = await _(_, _)), _++;
            } while (_ < _);
          }
          return _;
        };
      _.options.persister
        ? (_.fetchFn = () =>
            _.options.persister?.(
              _,
              {
                queryKey: _.queryKey,
                meta: _.options.meta,
                signal: _.signal,
              },
              _,
            ))
        : (_.fetchFn = _);
    },
  };
}
function _(_, { pages: _, pageParams: _ }) {
  let _ = _.length - 1;
  return _.length > 0 ? _.getNextPageParam(_[_], _, _[_], _) : void 0;
}
function _(_, { pages: _, pageParams: _ }) {
  return _.length > 0 ? _.getPreviousPageParam?.(_[0], _, _[0], _) : void 0;
}
var _ = class {
  #e;
  #t;
  #s;
  #r;
  #n;
  #i;
  #o;
  #a;
  constructor(_ = {}) {
    (this.#e = _.queryCache || new _()),
      (this.#t = _.mutationCache || new _()),
      (this.#s = _.defaultOptions || {}),
      (this.#r = new Map()),
      (this.#n = new Map()),
      (this.#i = 0);
  }
  mount() {
    this.#i++,
      this.#i === 1 &&
        ((this.#o = _.subscribe(async (_) => {
          _ && (await this.resumePausedMutations(), this.#e.onFocus());
        })),
        (this.#a = _.subscribe(async (_) => {
          _ && (await this.resumePausedMutations(), this.#e.onOnline());
        })));
  }
  unmount() {
    this.#i--,
      this.#i === 0 &&
        (this.#o?.(), (this.#o = void 0), this.#a?.(), (this.#a = void 0));
  }
  isFetching(_) {
    return this.#e.findAll({
      ..._,
      fetchStatus: "fetching",
    }).length;
  }
  isMutating(_) {
    return this.#t.findAll({
      ..._,
      status: "pending",
    }).length;
  }
  getQueryData(_) {
    let _ = this.defaultQueryOptions({
      queryKey: _,
    });
    return this.#e.get(_.queryHash)?.state.data;
  }
  ensureQueryData(_) {
    let _ = this.getQueryData(_.queryKey);
    if (_ === void 0) return this.fetchQuery(_);
    {
      let _ = this.defaultQueryOptions(_),
        _ = this.#e.build(this, _);
      return (
        _.revalidateIfStale &&
          _.isStaleByTime(_(_.staleTime, _)) &&
          this.prefetchQuery(_),
        Promise.resolve(_)
      );
    }
  }
  getQueriesData(_) {
    return this.#e.findAll(_).map(({ queryKey: _, state: _ }) => {
      let _ = _.data;
      return [_, _];
    });
  }
  setQueryData(_, _, _) {
    let _ = this.defaultQueryOptions({
        queryKey: _,
      }),
      _ = this.#e.get(_.queryHash)?.state.data,
      _ = _(_, _);
    if (_ !== void 0)
      return this.#e.build(this, _).setData(_, {
        ..._,
        manual: !0,
      });
  }
  setQueriesData(_, _, _) {
    return _.batch(() =>
      this.#e
        .findAll(_)
        .map(({ queryKey: _ }) => [_, this.setQueryData(_, _, _)]),
    );
  }
  getQueryState(_) {
    let _ = this.defaultQueryOptions({
      queryKey: _,
    });
    return this.#e.get(_.queryHash)?.state;
  }
  removeQueries(_) {
    let _ = this.#e;
    _.batch(() => {
      _.findAll(_).forEach((_) => {
        _.remove(_);
      });
    });
  }
  resetQueries(_, _) {
    let _ = this.#e,
      _ = {
        type: "active",
        ..._,
      };
    return _.batch(
      () => (
        _.findAll(_).forEach((_) => {
          _.reset();
        }),
        this.refetchQueries(_, _)
      ),
    );
  }
  cancelQueries(_ = {}, _ = {}) {
    let _ = {
        revert: !0,
        ..._,
      },
      _ = _.batch(() => this.#e.findAll(_).map((_) => _.cancel(_)));
    return Promise.all(_).then(_).catch(_);
  }
  invalidateQueries(_ = {}, _ = {}) {
    return _.batch(() => {
      if (
        (this.#e.findAll(_).forEach((_) => {
          _.invalidate();
        }),
        _.refetchType === "none")
      )
        return Promise.resolve();
      let _ = {
        ..._,
        type: _.refetchType ?? _.type ?? "active",
      };
      return this.refetchQueries(_, _);
    });
  }
  refetchQueries(_ = {}, _) {
    let _ = {
        ..._,
        cancelRefetch: _?.cancelRefetch ?? !0,
      },
      _ = _.batch(() =>
        this.#e
          .findAll(_)
          .filter((_) => !_.isDisabled())
          .map((_) => {
            let _ = _.fetch(void 0, _);
            return (
              _.throwOnError || (_ = _.catch(_)),
              _.state.fetchStatus === "paused" ? Promise.resolve() : _
            );
          }),
      );
    return Promise.all(_).then(_);
  }
  fetchQuery(_) {
    let _ = this.defaultQueryOptions(_);
    _.retry === void 0 && (_.retry = !1);
    let _ = this.#e.build(this, _);
    return _.isStaleByTime(_(_.staleTime, _))
      ? _.fetch(_)
      : Promise.resolve(_.state.data);
  }
  prefetchQuery(_) {
    return this.fetchQuery(_).then(_).catch(_);
  }
  fetchInfiniteQuery(_) {
    return (_.behavior = _(_.pages)), this.fetchQuery(_);
  }
  prefetchInfiniteQuery(_) {
    return this.fetchInfiniteQuery(_).then(_).catch(_);
  }
  ensureInfiniteQueryData(_) {
    return (_.behavior = _(_.pages)), this.ensureQueryData(_);
  }
  resumePausedMutations() {
    return _.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
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
  setDefaultOptions(_) {
    this.#s = _;
  }
  setQueryDefaults(_, _) {
    this.#r.set(_(_), {
      queryKey: _,
      defaultOptions: _,
    });
  }
  getQueryDefaults(_) {
    let _ = [...this.#r.values()],
      _ = {};
    return (
      _.forEach((_) => {
        _(_, _.queryKey) &&
          (_ = {
            ..._,
            ..._.defaultOptions,
          });
      }),
      _
    );
  }
  setMutationDefaults(_, _) {
    this.#n.set(_(_), {
      mutationKey: _,
      defaultOptions: _,
    });
  }
  getMutationDefaults(_) {
    let _ = [...this.#n.values()],
      _ = {};
    return (
      _.forEach((_) => {
        _(_, _.mutationKey) &&
          (_ = {
            ..._,
            ..._.defaultOptions,
          });
      }),
      _
    );
  }
  defaultQueryOptions(_) {
    if (_._defaulted) return _;
    let _ = {
      ...this.#s.queries,
      ...this.getQueryDefaults(_.queryKey),
      ..._,
      _defaulted: !0,
    };
    return (
      _.queryHash || (_.queryHash = _(_.queryKey, _)),
      _.refetchOnReconnect === void 0 &&
        (_.refetchOnReconnect = _.networkMode !== "always"),
      _.throwOnError === void 0 && (_.throwOnError = !!_.suspense),
      !_.networkMode && _.persister && (_.networkMode = "offlineFirst"),
      _.enabled !== !0 && _.queryFn === _ && (_.enabled = !1),
      _
    );
  }
  defaultMutationOptions(_) {
    return _?._defaulted
      ? _
      : {
          ...this.#s.mutations,
          ...(_?.mutationKey && this.getMutationDefaults(_.mutationKey)),
          ..._,
          _defaulted: !0,
        };
  }
  clear() {
    this.#e.clear(), this.#t.clear();
  }
};
var _ = class extends _ {
  constructor(_, _) {
    super(),
      (this.options = _),
      (this.#e = _),
      (this.#a = null),
      (this.#o = _()),
      this.options.experimental_prefetchInRender ||
        this.#o.reject(
          new Error(
            "experimental_prefetchInRender feature flag is not enabled",
          ),
        ),
      this.bindMethods(),
      this.setOptions(_);
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
  #c;
  #l;
  #f;
  #p = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      _(this.#t, this.options) ? this.#m() : this.updateResult(),
      this.#g());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return _(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return _(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    (this.listeners = new Set()),
      this.#w(),
      this.#E(),
      this.#t.removeObserver(this);
  }
  setOptions(_, _) {
    let _ = this.options,
      _ = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(_)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != "boolean" &&
        typeof this.options.enabled != "function" &&
        typeof _(this.options.enabled, this.#t) != "boolean")
    )
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean",
      );
    this.#R(),
      this.#t.setOptions(this.options),
      _._defaulted &&
        !_(this.options, _) &&
        this.#e.getQueryCache().notify({
          type: "observerOptionsUpdated",
          query: this.#t,
          observer: this,
        });
    let _ = this.hasListeners();
    _ && _(this.#t, _, this.options, _) && this.#m(),
      this.updateResult(_),
      _ &&
        (this.#t !== _ ||
          _(this.options.enabled, this.#t) !== _(_.enabled, this.#t) ||
          _(this.options.staleTime, this.#t) !== _(_.staleTime, this.#t)) &&
        this.#y();
    let _ = this.#v();
    _ &&
      (this.#t !== _ ||
        _(this.options.enabled, this.#t) !== _(_.enabled, this.#t) ||
        _ !== this.#f) &&
      this.#b(_);
  }
  getOptimisticResult(_) {
    let _ = this.#e.getQueryCache().build(this.#e, _),
      _ = this.createResult(_, _);
    return (
      _(this, _) &&
        ((this.#r = _), (this.#i = this.options), (this.#n = this.#t.state)),
      _
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(_, _) {
    let _ = {};
    return (
      Object.keys(_).forEach((_) => {
        Object.defineProperty(_, _, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackProp(_), _?.(_), _[_]),
        });
      }),
      _
    );
  }
  trackProp(_) {
    this.#p.add(_);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ..._ } = {}) {
    return this.fetch({
      ..._,
    });
  }
  fetchOptimistic(_) {
    let _ = this.#e.defaultQueryOptions(_),
      _ = this.#e.getQueryCache().build(this.#e, _);
    return _.fetch().then(() => this.createResult(_, _));
  }
  fetch(_) {
    return this.#m({
      ..._,
      cancelRefetch: _.cancelRefetch ?? !0,
    }).then(() => (this.updateResult(), this.#r));
  }
  #m(_) {
    this.#R();
    let _ = this.#t.fetch(this.options, _);
    return _?.throwOnError || (_ = _.catch(_)), _;
  }
  #y() {
    this.#w();
    let _ = _(this.options.staleTime, this.#t);
    if (_ || this.#r.isStale || !_(_)) return;
    let _ = _(this.#r.dataUpdatedAt, _) + 1;
    this.#c = setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, _);
  }
  #v() {
    return (
      (typeof this.options.refetchInterval == "function"
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #b(_) {
    this.#E(),
      (this.#f = _),
      !(
        _ ||
        _(this.options.enabled, this.#t) === !1 ||
        !_(this.#f) ||
        this.#f === 0
      ) &&
        (this.#l = setInterval(() => {
          (this.options.refetchIntervalInBackground || _.isFocused()) &&
            this.#m();
        }, this.#f));
  }
  #g() {
    this.#y(), this.#b(this.#v());
  }
  #w() {
    this.#c && (clearTimeout(this.#c), (this.#c = void 0));
  }
  #E() {
    this.#l && (clearInterval(this.#l), (this.#l = void 0));
  }
  createResult(_, _) {
    let _ = this.#t,
      _ = this.options,
      _ = this.#r,
      _ = this.#n,
      _ = this.#i,
      _ = _ !== _ ? _.state : this.#s,
      { state: _ } = _,
      _ = {
        ..._,
      },
      _ = !1,
      _;
    if (_._optimisticResults) {
      let _ = this.hasListeners(),
        _ = !_ && _(_, _),
        _ = _ && _(_, _, _, _);
      (_ || _) &&
        (_ = {
          ..._,
          ..._(_.data, _.options),
        }),
        _._optimisticResults === "isRestoring" && (_.fetchStatus = "idle");
    }
    let { error: _, errorUpdatedAt: _, status: _ } = _;
    if (_.select && _.data !== void 0)
      if (_ && _.data === _?.data && _.select === this.#d) _ = this.#h;
      else
        try {
          (this.#d = _.select),
            (_ = _.select(_.data)),
            (_ = _(_?.data, _, _)),
            (this.#h = _),
            (this.#a = null);
        } catch (_) {
          this.#a = _;
        }
    else _ = _.data;
    if (_.placeholderData !== void 0 && _ === void 0 && _ === "pending") {
      let _;
      if (_?.isPlaceholderData && _.placeholderData === _?.placeholderData)
        _ = _.data;
      else if (
        ((_ =
          typeof _.placeholderData == "function"
            ? _.placeholderData(this.#u?.state.data, this.#u)
            : _.placeholderData),
        _.select && _ !== void 0)
      )
        try {
          (_ = _.select(_)), (this.#a = null);
        } catch (_) {
          this.#a = _;
        }
      _ !== void 0 && ((_ = "success"), (_ = _(_?.data, _, _)), (_ = !0));
    }
    this.#a && ((_ = this.#a), (_ = this.#h), (_ = Date.now()), (_ = "error"));
    let _ = _.fetchStatus === "fetching",
      _ = _ === "pending",
      _ = _ === "error",
      _ = _ && _,
      _ = _ !== void 0,
      _ = {
        status: _,
        fetchStatus: _.fetchStatus,
        isPending: _,
        isSuccess: _ === "success",
        isError: _,
        isInitialLoading: _,
        isLoading: _,
        data: _,
        dataUpdatedAt: _.dataUpdatedAt,
        error: _,
        errorUpdatedAt: _,
        failureCount: _.fetchFailureCount,
        failureReason: _.fetchFailureReason,
        errorUpdateCount: _.errorUpdateCount,
        isFetched: _.dataUpdateCount > 0 || _.errorUpdateCount > 0,
        isFetchedAfterMount:
          _.dataUpdateCount > _.dataUpdateCount ||
          _.errorUpdateCount > _.errorUpdateCount,
        isFetching: _,
        isRefetching: _ && !_,
        isLoadingError: _ && !_,
        isPaused: _.fetchStatus === "paused",
        isPlaceholderData: _,
        isRefetchError: _ && _,
        isStale: _(_, _),
        refetch: this.refetch,
        promise: this.#o,
      };
    if (this.options.experimental_prefetchInRender) {
      let _ = (_) => {
          _.status === "error"
            ? _.reject(_.error)
            : _.data !== void 0 && _.resolve(_.data);
        },
        _ = () => {
          let _ = (this.#o = _.promise = _());
          _(_);
        },
        _ = this.#o;
      switch (_.status) {
        case "pending":
          _.queryHash === _.queryHash && _(_);
          break;
        case "fulfilled":
          (_.status === "error" || _.data !== _.value) && _();
          break;
        case "rejected":
          (_.status !== "error" || _.error !== _.reason) && _();
          break;
      }
    }
    return _;
  }
  updateResult(_) {
    let _ = this.#r,
      _ = this.createResult(this.#t, this.options);
    if (
      ((this.#n = this.#t.state),
      (this.#i = this.options),
      this.#n.data !== void 0 && (this.#u = this.#t),
      _(_, _))
    )
      return;
    this.#r = _;
    let _ = {},
      _ = () => {
        if (!_) return !0;
        let { notifyOnChangeProps: _ } = this.options,
          _ = typeof _ == "function" ? _() : _;
        if (_ === "all" || (!_ && !this.#p.size)) return !0;
        let _ = new Set(_ ?? this.#p);
        return (
          this.options.throwOnError && _.add("error"),
          Object.keys(this.#r).some((_) => {
            let _ = _;
            return this.#r[_] !== _[_] && _.has(_);
          })
        );
      };
    _?.listeners !== !1 && _() && (_.listeners = !0),
      this.#S({
        ..._,
        ..._,
      });
  }
  #R() {
    let _ = this.#e.getQueryCache().build(this.#e, this.options);
    if (_ === this.#t) return;
    let _ = this.#t;
    (this.#t = _),
      (this.#s = _.state),
      this.hasListeners() && (_?.removeObserver(this), _.addObserver(this));
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && this.#g();
  }
  #S(_) {
    _.batch(() => {
      _.listeners &&
        this.listeners.forEach((_) => {
          _(this.#r);
        }),
        this.#e.getQueryCache().notify({
          query: this.#t,
          type: "observerResultsUpdated",
        });
    });
  }
};
function _(_, _) {
  return (
    _(_.enabled, _) !== !1 &&
    _.state.data === void 0 &&
    !(_.state.status === "error" && _.retryOnMount === !1)
  );
}
function _(_, _) {
  return _(_, _) || (_.state.data !== void 0 && _(_, _, _.refetchOnMount));
}
function _(_, _, _) {
  if (_(_.enabled, _) !== !1) {
    let _ = typeof _ == "function" ? _(_) : _;
    return _ === "always" || (_ !== !1 && _(_, _));
  }
  return !1;
}
function _(_, _, _, _) {
  return (
    (_ !== _ || _(_.enabled, _) === !1) &&
    (!_.suspense || _.state.status !== "error") &&
    _(_, _)
  );
}
function _(_, _) {
  return _(_.enabled, _) !== !1 && _.isStaleByTime(_(_.staleTime, _));
}
function _(_, _) {
  return !_(_.getCurrentResult(), _);
}
function _(_, _) {
  return _.filter((_) => !_.includes(_));
}
function _(_, _, _) {
  let _ = _.slice(0);
  return (_[_] = _), _;
}
var _ = class extends _ {
  #e;
  #t;
  #s;
  #r;
  #n;
  #i;
  #o;
  #a;
  constructor(_, _, _) {
    super(),
      (this.#e = _),
      (this.#r = _),
      (this.#s = []),
      (this.#n = []),
      (this.#t = []),
      this.setQueries(_);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      this.#n.forEach((_) => {
        _.subscribe((_) => {
          this.#c(_, _);
        });
      });
  }
  onUnsubscribe() {
    this.listeners.size || this.destroy();
  }
  destroy() {
    (this.listeners = new Set()),
      this.#n.forEach((_) => {
        _.destroy();
      });
  }
  setQueries(_, _, _) {
    (this.#s = _),
      (this.#r = _),
      _.batch(() => {
        let _ = this.#n,
          _ = this.#u(this.#s);
        _.forEach((_) => _.observer.setOptions(_.defaultedQueryOptions, _));
        let _ = _.map((_) => _.observer),
          _ = _.map((_) => _.getCurrentResult()),
          _ = _.some((_, _) => _ !== _[_]);
        (_.length === _.length && !_) ||
          ((this.#n = _),
          (this.#t = _),
          this.hasListeners() &&
            (_(_, _).forEach((_) => {
              _.destroy();
            }),
            _(_, _).forEach((_) => {
              _.subscribe((_) => {
                this.#c(_, _);
              });
            }),
            this.#l()));
      });
  }
  getCurrentResult() {
    return this.#t;
  }
  getQueries() {
    return this.#n.map((_) => _.getCurrentQuery());
  }
  getObservers() {
    return this.#n;
  }
  getOptimisticResult(_, _) {
    let _ = this.#u(_).map((_) =>
      _.observer.getOptimisticResult(_.defaultedQueryOptions),
    );
    return [_, (_) => this.#h(_ ?? _, _), () => this.#d(_, _)];
  }
  #d(_, _) {
    let _ = this.#u(_);
    return _.map((_, _) => {
      let _ = _[_];
      return _.defaultedQueryOptions.notifyOnChangeProps
        ? _
        : _.observer.trackResult(_, (_) => {
            _.forEach((_) => {
              _.observer.trackProp(_);
            });
          });
    });
  }
  #h(_, _) {
    return _
      ? ((!this.#i || this.#t !== this.#a || _ !== this.#o) &&
          ((this.#o = _), (this.#a = this.#t), (this.#i = _(this.#i, _(_)))),
        this.#i)
      : _;
  }
  #u(_) {
    let _ = new Map(this.#n.map((_) => [_.options.queryHash, _])),
      _ = [];
    return (
      _.forEach((_) => {
        let _ = this.#e.defaultQueryOptions(_),
          _ = _.get(_.queryHash);
        _
          ? _.push({
              defaultedQueryOptions: _,
              observer: _,
            })
          : _.push({
              defaultedQueryOptions: _,
              observer: new _(this.#e, _),
            });
      }),
      _
    );
  }
  #c(_, _) {
    let _ = this.#n.indexOf(_);
    _ !== -1 && ((this.#t = _(this.#t, _, _)), this.#l());
  }
  #l() {
    if (this.hasListeners()) {
      let _ = this.#i,
        _ = this.#h(this.#d(this.#t, this.#s), this.#r?.combine);
      _ !== _ &&
        _.batch(() => {
          this.listeners.forEach((_) => {
            _(this.#t);
          });
        });
    }
  }
};
var _ = class extends _ {
  #e;
  #t = void 0;
  #s;
  #r;
  constructor(_, _) {
    super(), (this.#e = _), this.setOptions(_), this.bindMethods(), this.#n();
  }
  bindMethods() {
    (this.mutate = this.mutate.bind(this)),
      (this.reset = this.reset.bind(this));
  }
  setOptions(_) {
    let _ = this.options;
    (this.options = this.#e.defaultMutationOptions(_)),
      _(this.options, _) ||
        this.#e.getMutationCache().notify({
          type: "observerOptionsUpdated",
          mutation: this.#s,
          observer: this,
        }),
      _?.mutationKey &&
      this.options.mutationKey &&
      _(_.mutationKey) !== _(this.options.mutationKey)
        ? this.reset()
        : this.#s?.state.status === "pending" &&
          this.#s.setOptions(this.options);
  }
  onUnsubscribe() {
    this.hasListeners() || this.#s?.removeObserver(this);
  }
  onMutationUpdate(_) {
    this.#n(), this.#i(_);
  }
  getCurrentResult() {
    return this.#t;
  }
  reset() {
    this.#s?.removeObserver(this), (this.#s = void 0), this.#n(), this.#i();
  }
  mutate(_, _) {
    return (
      (this.#r = _),
      this.#s?.removeObserver(this),
      (this.#s = this.#e.getMutationCache().build(this.#e, this.options)),
      this.#s.addObserver(this),
      this.#s.execute(_)
    );
  }
  #n() {
    let _ = this.#s?.state ?? _();
    this.#t = {
      ..._,
      isPending: _.status === "pending",
      isSuccess: _.status === "success",
      isError: _.status === "error",
      isIdle: _.status === "idle",
      mutate: this.mutate,
      reset: this.reset,
    };
  }
  #i(_) {
    _.batch(() => {
      if (this.#r && this.hasListeners()) {
        let _ = this.#t.variables,
          _ = this.#t.context;
        _?.type === "success"
          ? (this.#r.onSuccess?.(_.data, _, _),
            this.#r.onSettled?.(_.data, null, _, _))
          : _?.type === "error" &&
            (this.#r.onError?.(_.error, _, _),
            this.#r.onSettled?.(void 0, _.error, _, _));
      }
      this.listeners.forEach((_) => {
        _(this.#t);
      });
    });
  }
};
function _(_) {
  return _;
}
function _(_, _, _) {
  if (typeof _ != "object" || _ === null) return;
  let _ = _.getMutationCache(),
    _ = _.getQueryCache(),
    _ =
      _?.defaultOptions?.deserializeData ??
      _.getDefaultOptions().hydrate?.deserializeData ??
      _,
    _ = _.mutations || [],
    _ = _.queries || [];
  _.forEach(({ state: _, ..._ }) => {
    _.build(
      _,
      {
        ..._.getDefaultOptions().hydrate?.mutations,
        ..._?.defaultOptions?.mutations,
        ..._,
      },
      _,
    );
  }),
    _.forEach(
      ({ queryKey: _, state: _, queryHash: _, meta: _, promise: _ }) => {
        let _ = _.get(_),
          _ = _.data === void 0 ? _.data : _(_.data);
        if (_) {
          if (_.state.dataUpdatedAt < _.dataUpdatedAt) {
            let { fetchStatus: _, ..._ } = _;
            _.setState({
              ..._,
              data: _,
            });
          }
        } else
          _ = _.build(
            _,
            {
              ..._.getDefaultOptions().hydrate?.queries,
              ..._?.defaultOptions?.queries,
              queryKey: _,
              queryHash: _,
              meta: _,
            },
            {
              ..._,
              data: _,
              fetchStatus: "idle",
            },
          );
        if (_) {
          let _ = Promise.resolve(_).then(_);
          _.fetch(void 0, {
            initialPromise: _,
          });
        }
      },
    );
}
var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _(_(), 1);
function _() {
  let _ = !1;
  return {
    clearReset: () => {
      _ = !1;
    },
    reset: () => {
      _ = !0;
    },
    isReset: () => _,
  };
}
var _ = _.createContext(_()),
  _ = () => _.useContext(_);
var _ = _(_(), 1);
function _(_, _) {
  return typeof _ == "function" ? _(..._) : !!_;
}
function _() {}
var _ = (_, _) => {
    (_.suspense || _.throwOnError || _.experimental_prefetchInRender) &&
      (_.isReset() || (_.retryOnMount = !1));
  },
  _ = (_) => {
    _.useEffect(() => {
      _.clearReset();
    }, [_]);
  },
  _ = ({ result: _, errorResetBoundary: _, throwOnError: _, query: _ }) =>
    _.isError && !_.isReset() && !_.isFetching && _ && _(_, [_.error, _]);
var _ = _(_(), 1),
  _ = _.createContext(!1),
  _ = () => _.useContext(_),
  _ = _.Provider;
var _ = (_) => {
    _.suspense &&
      (_.staleTime === void 0 && (_.staleTime = 1e3),
      typeof _.gcTime == "number" && (_.gcTime = Math.max(_.gcTime, 1e3)));
  },
  _ = (_, _) => _.isLoading && _.isFetching && !_,
  _ = (_, _) => _?.suspense && _.isPending,
  _ = (_, _, _) =>
    _.fetchOptimistic(_).catch(() => {
      _.clearReset();
    });
function _(_, _, _) {
  let _ = _(_),
    _ = _(),
    _ = _(),
    _ = _.defaultQueryOptions(_);
  _.getDefaultOptions().queries?._experimental_beforeQuery?.(_),
    (_._optimisticResults = _ ? "isRestoring" : "optimistic"),
    _(_),
    _(_, _),
    _(_);
  let _ = !_.getQueryCache().get(_.queryHash),
    [_] = _.useState(() => new _(_, _)),
    _ = _.getOptimisticResult(_);
  if (
    (_.useSyncExternalStore(
      _.useCallback(
        (_) => {
          let _ = _ ? _ : _.subscribe(_.batchCalls(_));
          return _.updateResult(), _;
        },
        [_, _],
      ),
      () => _.getCurrentResult(),
      () => _.getCurrentResult(),
    ),
    _.useEffect(() => {
      _.setOptions(_, {
        listeners: !1,
      });
    }, [_, _]),
    _(_, _))
  )
    throw _(_, _, _);
  if (
    _({
      result: _,
      errorResetBoundary: _,
      throwOnError: _.throwOnError,
      query: _.getQueryCache().get(_.queryHash),
    })
  )
    throw _.error;
  return (
    _.getDefaultOptions().queries?._experimental_afterQuery?.(_, _),
    _.experimental_prefetchInRender &&
      !_ &&
      _(_, _) &&
      (_ ? _(_, _, _) : _.getQueryCache().get(_.queryHash)?.promise)
        ?.catch(_)
        .finally(() => {
          _.updateResult();
        }),
    _.notifyOnChangeProps ? _ : _.trackResult(_)
  );
}
function _(_, _) {
  return _(_, _, _);
}
var _ = _(_(), 1);
function _(_, _) {
  let _ = _(_),
    [_] = _.useState(() => new _(_, _));
  _.useEffect(() => {
    _.setOptions(_);
  }, [_, _]);
  let _ = _.useSyncExternalStore(
      _.useCallback((_) => _.subscribe(_.batchCalls(_)), [_]),
      () => _.getCurrentResult(),
      () => _.getCurrentResult(),
    ),
    _ = _.useCallback(
      (_, _) => {
        _.mutate(_, _).catch(_);
      },
      [_],
    );
  if (_.error && _(_.options.throwOnError, [_.error])) throw _.error;
  return {
    ..._,
    mutate: _,
    mutateAsync: _.mutate,
  };
}
var _ = _(_(), 1);
function _({ queries: _, ..._ }, _) {
  let _ = _(_),
    _ = _(),
    _ = _(),
    _ = _.useMemo(
      () =>
        _.map((_) => {
          let _ = _.defaultQueryOptions(_);
          return (_._optimisticResults = _ ? "isRestoring" : "optimistic"), _;
        }),
      [_, _, _],
    );
  _.forEach((_) => {
    _(_), _(_, _);
  }),
    _(_);
  let [_] = _.useState(() => new _(_, _, _)),
    [_, _, _] = _.getOptimisticResult(_, _.combine);
  _.useSyncExternalStore(
    _.useCallback((_) => (_ ? _ : _.subscribe(_.batchCalls(_))), [_, _]),
    () => _.getCurrentResult(),
    () => _.getCurrentResult(),
  ),
    _.useEffect(() => {
      _.setQueries(_, _, {
        listeners: !1,
      });
    }, [_, _, _]);
  let _ = _.some((_, _) => _(_[_], _))
    ? _.flatMap((_, _) => {
        let _ = _[_];
        if (_) {
          let _ = new _(_, _);
          if (_(_, _)) return _(_, _, _);
          _(_, _) && _(_, _, _);
        }
        return [];
      })
    : [];
  if (_.length > 0) throw Promise.all(_);
  let _ = _.find((_, _) => {
    let _ = _[_];
    return (
      _ &&
      _({
        result: _,
        errorResetBoundary: _,
        throwOnError: _.throwOnError,
        query: _.getQueryCache().get(_.queryHash),
      })
    );
  });
  if (_?.error) throw _.error;
  return _(_());
}
var _ = _(_(), 1);
var _ = ({ children: _, options: _ = {}, state: _, queryClient: _ }) => {
  let _ = _(_),
    [_, _] = _.useState(),
    _ = _.useRef(_);
  return (
    (_.current = _),
    _.useMemo(() => {
      if (_) {
        if (typeof _ != "object") return;
        let _ = _.getQueryCache(),
          _ = _.queries || [],
          _ = [],
          _ = [];
        for (let _ of _) {
          let _ = _.get(_.queryHash);
          if (!_) _.push(_);
          else {
            let _ = _.state.dataUpdatedAt > _.state.dataUpdatedAt,
              _ = _?.find((_) => _.queryHash === _.queryHash);
            _ &&
              (!_ || _.state.dataUpdatedAt > _.state.dataUpdatedAt) &&
              _.push(_);
          }
        }
        _.length > 0 &&
          _(
            _,
            {
              queries: _,
            },
            _.current,
          ),
          _.length > 0 && _((_) => (_ ? [..._, ..._] : _));
      }
    }, [_, _, _]),
    _.useEffect(() => {
      _ &&
        (_(
          _,
          {
            queries: _,
          },
          _.current,
        ),
        _(void 0));
    }, [_, _]),
    _
  );
};
var _ = _(_());
var _ = {
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
  stats: 26,
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
  recommendations: 70,
  categories: 71,
  hardware: 72,
  waystoplay: 73,
  specialsections: 74,
  more: 75,
  "big-category-link": 76,
  "small-category-link": 77,
  "package-purchase-recommendations": 78,
  popular: 79,
  recent: 80,
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
  _: 1453,
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
  _: 2110,
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
  monthlytopreleases: 7011,
  bestofyear: 7012,
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
  salebrowsetrendingfree: 100752,
  trendingfree: 100753,
  reactroot: 100754,
  bundlelist: 100755,
  verifiedprogram: 100756,
  trailercarousel: 100757,
};
var _ = _;
function _(_) {
  return _ in _;
}
var _ = class _ {
  static InstrumentLink(_, _, _ = null) {
    let _ = _.GetLinkParam(_, _);
    return _.AddNavParamToURL(_, _);
  }
  static ParseSNR(_) {
    let _ = _.split("_") || [];
    return {
      domain: _.DecodeEventComponent(_[0]),
      controller: _.DecodeEventComponent(_[1]),
      method: _.DecodeEventComponent(_[2]),
      submethod: _.DecodeEventComponent(_[3]),
      feature: _.DecodeEventComponent(_[4]),
      depth: _[5] ? Number(_[5]) : void 0,
    };
  }
  static GetLinkParam(_, _ = null) {
    let _ = _.ComputeLinkPrefix(_.domain, _.controller, _.method, _.submethod);
    _ = _ ?? _.depth ?? null;
    let _ = _.EncodeEventComponent(_.feature);
    return _ && ((_ += "_" + _), _ && (_ += "_" + _)), _;
  }
  static AddNavParamToURL(_, _) {
    try {
      let _ = new URL(_(_)),
        _ = new URLSearchParams(_.search);
      return (
        _.set("snr", encodeURIComponent(_ ?? "")),
        _.origin + _.pathname + "?" + _.toString() + _.hash
      );
    } catch (_) {
      return console.error(_, _), _;
    }
  }
  static ComputeLinkPrefix(_, _, _, _) {
    let _ = "";
    return (
      (_ += _.EncodeEventComponent(_)),
      (_ += "_"),
      (_ += _.EncodeEventComponent(_)),
      (_ += "_"),
      (_ += _.EncodeEventComponent(_)),
      (_ += "_"),
      (_ += _.EncodeEventComponent(_)),
      _
    );
  }
  static EncodeEventComponent(_) {
    return _
      ? _(_)
        ? "" + _[_]
        : (_.match(/^[0-9]+$/) || (_ = _.replace(/^[0-9]+/, "")),
          _.replace(/[^a-zA-Z0-9\- ]+/g, ""))
      : "";
  }
  static DecodeEventComponent(_) {
    let _ = _ && parseInt(_);
    if (_ && _) {
      for (let _ in _) if (_[_] == _) return _;
    }
    return _.SanitizeEventComponent(_);
  }
  static SanitizeEventComponent(_) {
    return !_ || !_.match(/^[a-zA-Z0-9\-.]*$/) ? "" : _;
  }
};
function _(_) {
  return {
    ..._,
    domain: _.SanitizeEventComponent(_.domain),
    controller: _.SanitizeEventComponent(_.controller),
    method: _.SanitizeEventComponent(_.method),
    submethod: _.SanitizeEventComponent(_.submethod),
    feature: _.SanitizeEventComponent(_.feature),
    depth: _.depth || 0,
  };
}
var _ = _(_()),
  _ = _.default.createContext({}),
  _ = _.default.createContext(void 0);
function _(_) {
  let { children: _, ..._ } = _,
    _ = _(),
    _ = _.default.useMemo(
      () => ({
        ..._,
        ..._,
      }),
      [_, _.domain, _.controller, _.method, _.submethod, _.feature, _.depth],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return _.default.useContext(_);
}
function _(_, _) {
  return _(_(), _, _);
}
function _(_, _, _) {
  return {
    ..._,
    feature: _ || _.feature,
    depth: _ || _.depth,
    countrycode: _.COUNTRY,
    is_client: _.IN_CLIENT,
  };
}
function _(_, _, _) {
  let _ = _();
  return _.default.useMemo(() => _ && _(_, _, _, _), [_, _, _, _]);
}
function _(_, _) {
  let _ = _();
  return _.default.useMemo(
    () =>
      _.GetLinkParam(
        {
          ..._,
          feature: _ || _.feature,
        },
        _,
      ),
    [_, _, _],
  );
}
function _(_, _, _, _) {
  let _ = _.GetLinkParam(
    {
      ..._,
      feature: _ || _.feature,
    },
    _,
  );
  return _.AddNavParamToURL(_, _);
}
var _ = _(_(), 1);
function _(_, _) {
  _ != null &&
    (typeof _ == "function" ? _(_) : "current" in _ && (_.current = _));
}
function _(..._) {
  return _.useCallback((_) => {
    for (let _ of _) _(_, _);
  }, _);
}
function _(..._) {
  if (!(!_ || _.length === 0))
    return _.length === 1
      ? _[0]
      : (_) =>
          _.forEach((_) => {
            if (_) typeof _ == "function" ? _(_) : (_.current = _);
            else return;
          });
}
function _(_, _) {
  let _ = _.useRef(void 0);
  return _.useCallback((_) => {
    _.current && _.current(), (_.current = _(_));
  }, _);
}
function _(_) {
  let _ = _.useRef(null),
    _ = _(_, _);
  return {
    refWithValue: _,
    refForElement: _,
  };
}
function _(_, _) {
  let _ = _.useRef(!1);
  _.useLayoutEffect(
    () => () => {
      _.current && _(_, void 0);
    },
    [_],
  ),
    _.useLayoutEffect(() => {
      (_ || _.current) && (_(_, _), (_.current = !!_));
    }, [_, _]);
}
var _ = _(_());
function _(_, _, _) {
  return _(
    (_) => {
      if (!(!_ || !_))
        return _.addEventListener(_, _, _), () => _.removeEventListener(_, _);
    },
    [_, _],
  );
}
function _(_, _, _, _) {
  _.useEffect(() => {
    if (!(!_ || !_))
      return _.addEventListener(_, _, _), () => _.removeEventListener(_, _, _);
  }, [_, _, _]);
}
function _(_, _, _, _) {
  return _(
    _,
    "message",
    function (_) {
      _.includes(_.data) && _(this, _);
    },
    _,
  );
}
export {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};

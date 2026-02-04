import { _ } from "./chunk-XXXXXXXX.js";
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
    #r;
    constructor() {
      super(),
        (this.#r = (_) => {
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
      this.#t || this.setEventListener(this.#r);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(_) {
      (this.#r = _),
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
    #r;
    constructor() {
      super(),
        (this.#r = (_) => {
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
      this.#t || this.setEventListener(this.#r);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(_) {
      (this.#r = _), this.#t?.(), (this.#t = _(this.setOnline.bind(this)));
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
  #r;
  #s;
  #i;
  #n;
  constructor(_) {
    super(),
      (this.#n = !1),
      (this.#i = _.defaultOptions),
      this.setOptions(_.options),
      (this.observers = []),
      (this.#r = _.cache),
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
    return this.#s?.promise;
  }
  setOptions(_) {
    (this.options = {
      ...this.#i,
      ..._,
    }),
      this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.#r.remove(this);
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
    let _ = this.#s?.promise;
    return this.#s?.cancel(_), _ ? _.then(_).catch(_) : Promise.resolve();
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
      this.#s?.continue();
  }
  onOnline() {
    this.observers
      .find((_) => _.shouldFetchOnReconnect())
      ?.refetch({
        cancelRefetch: !1,
      }),
      this.#s?.continue();
  }
  addObserver(_) {
    this.observers.includes(_) ||
      (this.observers.push(_),
      this.clearGcTimeout(),
      this.#r.notify({
        type: "observerAdded",
        query: this,
        observer: _,
      }));
  }
  removeObserver(_) {
    this.observers.includes(_) &&
      ((this.observers = this.observers.filter((_) => _ !== _)),
      this.observers.length ||
        (this.#s &&
          (this.#n
            ? this.#s.cancel({
                revert: !0,
              })
            : this.#s.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({
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
      else if (this.#s) return this.#s.continueRetry(), this.#s.promise;
    }
    if ((_ && this.setOptions(_), !this.options.queryFn)) {
      let _ = this.observers.find((_) => _.options.queryFn);
      _ && this.setOptions(_.options);
    }
    let _ = new AbortController(),
      _ = (_) => {
        Object.defineProperty(_, "signal", {
          enumerable: !0,
          get: () => ((this.#n = !0), _.signal),
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
          (this.#n = !1),
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
          (this.#r.config.onError?.(_, this),
          this.#r.config.onSettled?.(this.state.data, _, this)),
        this.scheduleGc();
    };
    return (
      (this.#s = _({
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
          this.#r.config.onSuccess?.(_, this),
            this.#r.config.onSettled?.(_, this.state.error, this),
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
      this.#s.start()
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
          this.#r.notify({
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
  #r;
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
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(_) {
    this.#r = _({
      _: () =>
        this.options.mutationFn
          ? this.options.mutationFn(_)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (_, _) => {
        this.#s({
          type: "failed",
          failureCount: _,
          error: _,
        });
      },
      onPause: () => {
        this.#s({
          type: "pause",
        });
      },
      onContinue: () => {
        this.#s({
          type: "continue",
        });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#t.canRun(this),
    });
    let _ = this.state.status === "pending",
      _ = !this.#r.canStart();
    try {
      if (!_) {
        this.#s({
          type: "pending",
          variables: _,
          isPaused: _,
        }),
          await this.#t.config.onMutate?.(_, this);
        let _ = await this.options.onMutate?.(_);
        _ !== this.state.context &&
          this.#s({
            type: "pending",
            context: _,
            variables: _,
            isPaused: _,
          });
      }
      let _ = await this.#r.start();
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
        this.#s({
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
        this.#s({
          type: "error",
          error: _,
        });
      }
    } finally {
      this.#t.runNext(this);
    }
  }
  #s(_) {
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
  #r;
  #s;
  #i;
  #n;
  #o;
  #a;
  constructor(_ = {}) {
    (this.#e = _.queryCache || new _()),
      (this.#t = _.mutationCache || new _()),
      (this.#r = _.defaultOptions || {}),
      (this.#s = new Map()),
      (this.#i = new Map()),
      (this.#n = 0);
  }
  mount() {
    this.#n++,
      this.#n === 1 &&
        ((this.#o = _.subscribe(async (_) => {
          _ && (await this.resumePausedMutations(), this.#e.onFocus());
        })),
        (this.#a = _.subscribe(async (_) => {
          _ && (await this.resumePausedMutations(), this.#e.onOnline());
        })));
  }
  unmount() {
    this.#n--,
      this.#n === 0 &&
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
    return this.#r;
  }
  setDefaultOptions(_) {
    this.#r = _;
  }
  setQueryDefaults(_, _) {
    this.#s.set(_(_), {
      queryKey: _,
      defaultOptions: _,
    });
  }
  getQueryDefaults(_) {
    let _ = [...this.#s.values()],
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
    this.#i.set(_(_), {
      mutationKey: _,
      defaultOptions: _,
    });
  }
  getMutationDefaults(_) {
    let _ = [...this.#i.values()],
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
      ...this.#r.queries,
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
          ...this.#r.mutations,
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
  #r = void 0;
  #s = void 0;
  #i;
  #n;
  #o;
  #a;
  #f;
  #l;
  #u;
  #h;
  #c;
  #d;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      _(this.#t, this.options) ? this.#p() : this.updateResult(),
      this.#b());
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
      this.#O(),
      this.#R(),
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
    this.#Q(),
      this.#t.setOptions(this.options),
      _._defaulted &&
        !_(this.options, _) &&
        this.#e.getQueryCache().notify({
          type: "observerOptionsUpdated",
          query: this.#t,
          observer: this,
        });
    let _ = this.hasListeners();
    _ && _(this.#t, _, this.options, _) && this.#p(),
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
        _ !== this.#d) &&
      this.#g(_);
  }
  getOptimisticResult(_) {
    let _ = this.#e.getQueryCache().build(this.#e, _),
      _ = this.createResult(_, _);
    return (
      _(this, _) &&
        ((this.#s = _), (this.#n = this.options), (this.#i = this.#t.state)),
      _
    );
  }
  getCurrentResult() {
    return this.#s;
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
    this.#m.add(_);
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
    return this.#p({
      ..._,
      cancelRefetch: _.cancelRefetch ?? !0,
    }).then(() => (this.updateResult(), this.#s));
  }
  #p(_) {
    this.#Q();
    let _ = this.#t.fetch(this.options, _);
    return _?.throwOnError || (_ = _.catch(_)), _;
  }
  #y() {
    this.#O();
    let _ = _(this.options.staleTime, this.#t);
    if (_ || this.#s.isStale || !_(_)) return;
    let _ = _(this.#s.dataUpdatedAt, _) + 1;
    this.#h = setTimeout(() => {
      this.#s.isStale || this.updateResult();
    }, _);
  }
  #v() {
    return (
      (typeof this.options.refetchInterval == "function"
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #g(_) {
    this.#R(),
      (this.#d = _),
      !(
        _ ||
        _(this.options.enabled, this.#t) === !1 ||
        !_(this.#d) ||
        this.#d === 0
      ) &&
        (this.#c = setInterval(() => {
          (this.options.refetchIntervalInBackground || _.isFocused()) &&
            this.#p();
        }, this.#d));
  }
  #b() {
    this.#y(), this.#g(this.#v());
  }
  #O() {
    this.#h && (clearTimeout(this.#h), (this.#h = void 0));
  }
  #R() {
    this.#c && (clearInterval(this.#c), (this.#c = void 0));
  }
  createResult(_, _) {
    let _ = this.#t,
      _ = this.options,
      _ = this.#s,
      _ = this.#i,
      _ = this.#n,
      _ = _ !== _ ? _.state : this.#r,
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
      if (_ && _.data === _?.data && _.select === this.#f) _ = this.#l;
      else
        try {
          (this.#f = _.select),
            (_ = _.select(_.data)),
            (_ = _(_?.data, _, _)),
            (this.#l = _),
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
    this.#a && ((_ = this.#a), (_ = this.#l), (_ = Date.now()), (_ = "error"));
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
    let _ = this.#s,
      _ = this.createResult(this.#t, this.options);
    if (
      ((this.#i = this.#t.state),
      (this.#n = this.options),
      this.#i.data !== void 0 && (this.#u = this.#t),
      _(_, _))
    )
      return;
    this.#s = _;
    let _ = {},
      _ = () => {
        if (!_) return !0;
        let { notifyOnChangeProps: _ } = this.options,
          _ = typeof _ == "function" ? _() : _;
        if (_ === "all" || (!_ && !this.#m.size)) return !0;
        let _ = new Set(_ ?? this.#m);
        return (
          this.options.throwOnError && _.add("error"),
          Object.keys(this.#s).some((_) => {
            let _ = _;
            return this.#s[_] !== _[_] && _.has(_);
          })
        );
      };
    _?.listeners !== !1 && _() && (_.listeners = !0),
      this.#S({
        ..._,
        ..._,
      });
  }
  #Q() {
    let _ = this.#e.getQueryCache().build(this.#e, this.options);
    if (_ === this.#t) return;
    let _ = this.#t;
    (this.#t = _),
      (this.#r = _.state),
      this.hasListeners() && (_?.removeObserver(this), _.addObserver(this));
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && this.#b();
  }
  #S(_) {
    _.batch(() => {
      _.listeners &&
        this.listeners.forEach((_) => {
          _(this.#s);
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
  #r;
  #s;
  #i;
  #n;
  #o;
  #a;
  constructor(_, _, _) {
    super(),
      (this.#e = _),
      (this.#s = _),
      (this.#r = []),
      (this.#i = []),
      (this.#t = []),
      this.setQueries(_);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      this.#i.forEach((_) => {
        _.subscribe((_) => {
          this.#h(_, _);
        });
      });
  }
  onUnsubscribe() {
    this.listeners.size || this.destroy();
  }
  destroy() {
    (this.listeners = new Set()),
      this.#i.forEach((_) => {
        _.destroy();
      });
  }
  setQueries(_, _, _) {
    (this.#r = _),
      (this.#s = _),
      _.batch(() => {
        let _ = this.#i,
          _ = this.#u(this.#r);
        _.forEach((_) => _.observer.setOptions(_.defaultedQueryOptions, _));
        let _ = _.map((_) => _.observer),
          _ = _.map((_) => _.getCurrentResult()),
          _ = _.some((_, _) => _ !== _[_]);
        (_.length === _.length && !_) ||
          ((this.#i = _),
          (this.#t = _),
          this.hasListeners() &&
            (_(_, _).forEach((_) => {
              _.destroy();
            }),
            _(_, _).forEach((_) => {
              _.subscribe((_) => {
                this.#h(_, _);
              });
            }),
            this.#c()));
      });
  }
  getCurrentResult() {
    return this.#t;
  }
  getQueries() {
    return this.#i.map((_) => _.getCurrentQuery());
  }
  getObservers() {
    return this.#i;
  }
  getOptimisticResult(_, _) {
    let _ = this.#u(_).map((_) =>
      _.observer.getOptimisticResult(_.defaultedQueryOptions),
    );
    return [_, (_) => this.#l(_ ?? _, _), () => this.#f(_, _)];
  }
  #f(_, _) {
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
  #l(_, _) {
    return _
      ? ((!this.#n || this.#t !== this.#a || _ !== this.#o) &&
          ((this.#o = _), (this.#a = this.#t), (this.#n = _(this.#n, _(_)))),
        this.#n)
      : _;
  }
  #u(_) {
    let _ = new Map(this.#i.map((_) => [_.options.queryHash, _])),
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
  #h(_, _) {
    let _ = this.#i.indexOf(_);
    _ !== -1 && ((this.#t = _(this.#t, _, _)), this.#c());
  }
  #c() {
    if (this.hasListeners()) {
      let _ = this.#n,
        _ = this.#l(this.#f(this.#t, this.#r), this.#s?.combine);
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
  #r;
  #s;
  constructor(_, _) {
    super(), (this.#e = _), this.setOptions(_), this.bindMethods(), this.#i();
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
          mutation: this.#r,
          observer: this,
        }),
      _?.mutationKey &&
      this.options.mutationKey &&
      _(_.mutationKey) !== _(this.options.mutationKey)
        ? this.reset()
        : this.#r?.state.status === "pending" &&
          this.#r.setOptions(this.options);
  }
  onUnsubscribe() {
    this.hasListeners() || this.#r?.removeObserver(this);
  }
  onMutationUpdate(_) {
    this.#i(), this.#n(_);
  }
  getCurrentResult() {
    return this.#t;
  }
  reset() {
    this.#r?.removeObserver(this), (this.#r = void 0), this.#i(), this.#n();
  }
  mutate(_, _) {
    return (
      (this.#s = _),
      this.#r?.removeObserver(this),
      (this.#r = this.#e.getMutationCache().build(this.#e, this.options)),
      this.#r.addObserver(this),
      this.#r.execute(_)
    );
  }
  #i() {
    let _ = this.#r?.state ?? _();
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
  #n(_) {
    _.batch(() => {
      if (this.#s && this.hasListeners()) {
        let _ = this.#t.variables,
          _ = this.#t.context;
        _?.type === "success"
          ? (this.#s.onSuccess?.(_.data, _, _),
            this.#s.onSettled?.(_.data, null, _, _))
          : _?.type === "error" &&
            (this.#s.onError?.(_.error, _, _),
            this.#s.onSettled?.(void 0, _.error, _, _));
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
export { _, _, _, _, _, _, _ };

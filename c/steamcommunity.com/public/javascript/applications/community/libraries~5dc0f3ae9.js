"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2156],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ = "8.27.0",
        _ = globalThis;
      function _(_, _, _) {
        const _ = _ || _,
          _ = (_.__SENTRY__ = _.__SENTRY__ || {}),
          _ = (_[_] = _[_] || {});
        return _[_] || (_[_] = _());
      }
      function _() {
        return _(_), _;
      }
      function _(_) {
        const _ = (_.__SENTRY__ = _.__SENTRY__ || {});
        return (_.version = _.version || _), (_[_] = _[_] || {});
      }
      const _ = Object.prototype.toString;
      function _(_, _) {
        return _.call(_) === `[object ${_}]`;
      }
      function _(_) {
        return _(_, "Object");
      }
      function _(_, _) {
        try {
          return _ instanceof _;
        } catch (_) {
          return !1;
        }
      }
      function _() {
        const _ = _,
          _ = _.crypto || _.msCrypto;
        let _ = () => 16 * Math.random();
        try {
          if (_ && _.randomUUID) return _.randomUUID().replace(/-/g, "");
          _ &&
            _.getRandomValues &&
            (_ = () => {
              const _ = new Uint8Array(1);
              return _.getRandomValues(_), _[0];
            });
        } catch (_) {}
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (_) =>
          (_ ^ ((15 & __webpack_require__()) >> (_ / 4))).toString(16),
        );
      }
      function _() {
        return {
          traceId: _(),
          spanId: _().substring(16),
        };
      }
      const _ = 1e3;
      function _() {
        return Date.now() / _;
      }
      const _ = (function () {
        const { performance: _ } = _;
        if (!_ || !_.now) return _;
        const _ = Date.now() - _.now(),
          _ = null == _.timeOrigin ? _ : _.timeOrigin;
        return () => (_ + _.now()) / _;
      })();
      let _;
      (() => {
        const { performance: _ } = _;
        if (!_ || !_.now) return void (_ = "none");
        const _ = 36e5,
          _ = _.now(),
          _ = Date.now(),
          _ = _.timeOrigin ? Math.abs(_.timeOrigin + _ - _) : _,
          _ = _ < _,
          _ = _.timing && _.timing.navigationStart,
          _ = "number" == typeof _ ? Math.abs(_ + _ - _) : _;
        _ || _ < _
          ? _ <= _
            ? ((_ = "timeOrigin"), _.timeOrigin)
            : (_ = "navigationStart")
          : (_ = "dateNow");
      })();
      const _ = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        _ = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        _ = {};
      function _(_) {
        if (!("console" in _)) return _();
        const _ = _.console,
          _ = {},
          _ = Object.keys(_);
        _.forEach((_) => {
          const _ = _[_];
          (_[_] = _[_]), (_[_] = _);
        });
        try {
          return _();
        } finally {
          _.forEach((_) => {
            _[_] = _[_];
          });
        }
      }
      const _ = (function () {
        let _ = !1;
        const _ = {
          enable: () => {
            _ = !0;
          },
          disable: () => {
            _ = !1;
          },
          isEnabled: () => _,
        };
        return (
          _
            ? _.forEach((_) => {
                _[_] = (..._) => {
                  _ &&
                    _(() => {
                      _.console[_](`Sentry Logger [${_}]:`, ..._);
                    });
                };
              })
            : _.forEach((_) => {
                _[_] = () => {};
              }),
          _
        );
      })();
      function _(_, _ = {}) {
        if (
          (_.user &&
            (!_.ipAddress &&
              _.user.ip_address &&
              (_.ipAddress = _.user.ip_address),
            _.did ||
              _.did ||
              (_.did = _.user._ || _.user.email || _.user.username)),
          (_.timestamp = _.timestamp || _()),
          _.abnormal_mechanism && (_.abnormal_mechanism = _.abnormal_mechanism),
          _.ignoreDuration && (_.ignoreDuration = _.ignoreDuration),
          _.sid && (_.sid = 32 === _.sid.length ? _.sid : _()),
          void 0 !== _.init && (_.init = _.init),
          !_.did && _.did && (_.did = `${_.did}`),
          "number" == typeof _.started && (_.started = _.started),
          _.ignoreDuration)
        )
          _.duration = void 0;
        else if ("number" == typeof _.duration) _.duration = _.duration;
        else {
          const _ = _.timestamp - _.started;
          _.duration = _ >= 0 ? _ : 0;
        }
        _.release && (_.release = _.release),
          _.environment && (_.environment = _.environment),
          !_.ipAddress && _.ipAddress && (_.ipAddress = _.ipAddress),
          !_.userAgent && _.userAgent && (_.userAgent = _.userAgent),
          "number" == typeof _.errors && (_.errors = _.errors),
          _.status && (_.status = _.status);
      }
      function _(_, _, _) {
        try {
          Object.defineProperty(_, _, {
            value: _,
            writable: !0,
            configurable: !0,
          });
        } catch (_) {
          _ &&
            _.log(`Failed to add non-enumerable property "${_}" to object`, _);
        }
      }
      const _ = "_sentrySpan";
      function _(_, _) {
        _ ? _(_, _, _) : delete _[_];
      }
      function _(_) {
        return _[_];
      }
      class _ {
        constructor() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {}),
            (this._propagationContext = _());
        }
        clone() {
          const _ = new _();
          return (
            (_._breadcrumbs = [...this._breadcrumbs]),
            (_._tags = {
              ...this._tags,
            }),
            (_._extra = {
              ...this._extra,
            }),
            (_._contexts = {
              ...this._contexts,
            }),
            (_._user = this._user),
            (_._level = this._level),
            (_._session = this._session),
            (_._transactionName = this._transactionName),
            (_._fingerprint = this._fingerprint),
            (_._eventProcessors = [...this._eventProcessors]),
            (_._requestSession = this._requestSession),
            (_._attachments = [...this._attachments]),
            (_._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata,
            }),
            (_._propagationContext = {
              ...this._propagationContext,
            }),
            (_._client = this._client),
            (_._lastEventId = this._lastEventId),
            _(_, _(this)),
            _
          );
        }
        setClient(_) {
          this._client = _;
        }
        setLastEventId(_) {
          this._lastEventId = _;
        }
        getClient() {
          return this._client;
        }
        lastEventId() {
          return this._lastEventId;
        }
        addScopeListener(_) {
          this._scopeListeners.push(_);
        }
        addEventProcessor(_) {
          return this._eventProcessors.push(_), this;
        }
        setUser(_) {
          return (
            (this._user = _ || {
              email: void 0,
              _: void 0,
              ip_address: void 0,
              username: void 0,
            }),
            this._session &&
              _(this._session, {
                user: _,
              }),
            this._notifyScopeListeners(),
            this
          );
        }
        getUser() {
          return this._user;
        }
        getRequestSession() {
          return this._requestSession;
        }
        setRequestSession(_) {
          return (this._requestSession = _), this;
        }
        setTags(_) {
          return (
            (this._tags = {
              ...this._tags,
              ..._,
            }),
            this._notifyScopeListeners(),
            this
          );
        }
        setTag(_, _) {
          return (
            (this._tags = {
              ...this._tags,
              [_]: _,
            }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtras(_) {
          return (
            (this._extra = {
              ...this._extra,
              ..._,
            }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtra(_, _) {
          return (
            (this._extra = {
              ...this._extra,
              [_]: _,
            }),
            this._notifyScopeListeners(),
            this
          );
        }
        setFingerprint(_) {
          return (this._fingerprint = _), this._notifyScopeListeners(), this;
        }
        setLevel(_) {
          return (this._level = _), this._notifyScopeListeners(), this;
        }
        setTransactionName(_) {
          return (
            (this._transactionName = _), this._notifyScopeListeners(), this
          );
        }
        setContext(_, _) {
          return (
            null === _ ? delete this._contexts[_] : (this._contexts[_] = _),
            this._notifyScopeListeners(),
            this
          );
        }
        setSession(_) {
          return (
            _ ? (this._session = _) : delete this._session,
            this._notifyScopeListeners(),
            this
          );
        }
        getSession() {
          return this._session;
        }
        update(_) {
          if (!_) return this;
          const _ = "function" == typeof _ ? _(this) : _,
            [__webpack_require__, _] =
              _ instanceof _
                ? [_.getScopeData(), _.getRequestSession()]
                : _(_)
                  ? [_, _.requestSession]
                  : [],
            {
              tags: _,
              extra: _,
              user: _,
              contexts: _,
              level: _,
              fingerprint: _ = [],
              propagationContext: _,
            } = __webpack_require__ || {};
          return (
            (this._tags = {
              ...this._tags,
              ..._,
            }),
            (this._extra = {
              ...this._extra,
              ..._,
            }),
            (this._contexts = {
              ...this._contexts,
              ..._,
            }),
            _ && Object.keys(_).length && (this._user = _),
            _ && (this._level = _),
            _.length && (this._fingerprint = _),
            _ && (this._propagationContext = _),
            _ && (this._requestSession = _),
            this
          );
        }
        clear() {
          return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._requestSession = void 0),
            (this._session = void 0),
            _(this, void 0),
            (this._attachments = []),
            (this._propagationContext = _()),
            this._notifyScopeListeners(),
            this
          );
        }
        addBreadcrumb(_, _) {
          const _ = "number" == typeof _ ? _ : 100;
          if (_ <= 0) return this;
          const _ = {
              timestamp: _(),
              ..._,
            },
            _ = this._breadcrumbs;
          return (
            _.push(_),
            (this._breadcrumbs = _.length > _ ? _.slice(-_) : _),
            this._notifyScopeListeners(),
            this
          );
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1];
        }
        clearBreadcrumbs() {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
        }
        addAttachment(_) {
          return this._attachments.push(_), this;
        }
        clearAttachments() {
          return (this._attachments = []), this;
        }
        getScopeData() {
          return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: _(this),
          };
        }
        setSDKProcessingMetadata(_) {
          return (
            (this._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata,
              ..._,
            }),
            this
          );
        }
        setPropagationContext(_) {
          return (this._propagationContext = _), this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(_, _) {
          const _ = _ && _.event_id ? _.event_id : _();
          if (!this._client)
            return (
              _.warn(
                "No client configured on scope - will not capture exception!",
              ),
              _
            );
          const _ = new Error("Sentry syntheticException");
          return (
            this._client.captureException(
              _,
              {
                originalException: _,
                syntheticException: _,
                ..._,
                event_id: _,
              },
              this,
            ),
            _
          );
        }
        captureMessage(_, _, _) {
          const _ = _ && _.event_id ? _.event_id : _();
          if (!this._client)
            return (
              _.warn(
                "No client configured on scope - will not capture message!",
              ),
              _
            );
          const _ = new Error(_);
          return (
            this._client.captureMessage(
              _,
              _,
              {
                originalException: _,
                syntheticException: _,
                ..._,
                event_id: _,
              },
              this,
            ),
            _
          );
        }
        captureEvent(_, _) {
          const _ = _ && _.event_id ? _.event_id : _();
          return this._client
            ? (this._client.captureEvent(
                _,
                {
                  ..._,
                  event_id: _,
                },
                this,
              ),
              _)
            : (_.warn(
                "No client configured on scope - will not capture event!",
              ),
              _);
        }
        _notifyScopeListeners() {
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((_) => {
              _(this);
            }),
            (this._notifyingListeners = !1));
        }
      }
      const _ = _;
      class _ {
        constructor(_, _) {
          let _, _;
          (_ = _ || new _()),
            (_ = _ || new _()),
            (this._stack = [
              {
                scope: _,
              },
            ]),
            (this._isolationScope = _);
        }
        withScope(_) {
          const _ = this._pushScope();
          let _;
          try {
            _ = _(_);
          } catch (_) {
            throw (this._popScope(), _);
          }
          return (
            (_ = _),
            Boolean(_ && _.then && "function" == typeof _.then)
              ? __webpack_require__.then(
                  (_) => (this._popScope(), _),
                  (_) => {
                    throw (this._popScope(), _);
                  },
                )
              : (this._popScope(), _)
          );
          var _;
        }
        getClient() {
          return this.getStackTop().client;
        }
        getScope() {
          return this.getStackTop().scope;
        }
        getIsolationScope() {
          return this._isolationScope;
        }
        getStackTop() {
          return this._stack[this._stack.length - 1];
        }
        _pushScope() {
          const _ = this.getScope().clone();
          return (
            this._stack.push({
              client: this.getClient(),
              scope: _,
            }),
            _
          );
        }
        _popScope() {
          return !(this._stack.length <= 1) && !!this._stack.pop();
        }
      }
      function _() {
        const _ = _(_());
        return (_.stack =
          _.stack ||
          new _(
            _("defaultCurrentScope", () => new _()),
            _("defaultIsolationScope", () => new _()),
          ));
      }
      function _(_) {
        return _().withScope(_);
      }
      function _(_, _) {
        const _ = _();
        return __webpack_require__.withScope(
          () => ((__webpack_require__.getStackTop().scope = _), _(_)),
        );
      }
      function _(_) {
        return _().withScope(() => _(_().getIsolationScope()));
      }
      function _(_) {
        const _ = _(_);
        return _.acs
          ? _.acs
          : {
              withIsolationScope: _,
              withScope: _,
              withSetScope: _,
              withSetIsolationScope: (_, _) => _(_),
              getCurrentScope: () => _().getScope(),
              getIsolationScope: () => _().getIsolationScope(),
            };
      }
      function _() {
        return _(_()).getCurrentScope();
      }
      new WeakMap();
      function _(_) {
        if (_)
          return (function (_) {
            return _ instanceof _ || "function" == typeof _;
          })(_) ||
            (function (_) {
              return Object.keys(_).some((_) => _.includes(_));
            })(_)
            ? {
                captureContext: _,
              }
            : _;
      }
      const _ = [
        "user",
        "level",
        "extra",
        "contexts",
        "tags",
        "fingerprint",
        "requestSession",
        "propagationContext",
      ];
      function _() {
        return _(_()).getIsolationScope().lastEventId();
      }
      const _ =
        /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function _(_) {
        return {
          protocol: _.protocol,
          publicKey: _.publicKey || "",
          pass: _.pass || "",
          host: _.host,
          port: _.port || "",
          path: _.path || "",
          projectId: _.projectId,
        };
      }
      function _(_) {
        const _ =
          "string" == typeof _
            ? (function (_) {
                const _ = _.exec(_);
                if (!_)
                  return void _(() => {
                    console.error(`Invalid Sentry Dsn: ${_}`);
                  });
                const [__webpack_require__, _, _ = "", _ = "", _ = "", _ = ""] =
                  _.slice(1);
                let _ = "",
                  _ = _;
                const _ = _.split("/");
                if (
                  (_.length > 1 &&
                    ((_ = _.slice(0, -1).join("/")), (_ = _.pop())),
                  _)
                ) {
                  const _ = _.match(/^\d+/);
                  _ && (_ = _[0]);
                }
                return _({
                  host: _,
                  pass: _,
                  path: _,
                  projectId: _,
                  port: _,
                  protocol: __webpack_require__,
                  publicKey: _,
                });
              })(_)
            : _(_);
        if (
          _ &&
          (function (_) {
            if (!_) return !0;
            const { port: _, projectId: __webpack_require__, protocol: _ } = _;
            return !(
              ["protocol", "publicKey", "host", "projectId"].find(
                (_) =>
                  !_[_] && (_.error(`Invalid Sentry Dsn: ${_} missing`), !0),
              ) ||
              (__webpack_require__.match(/^\d+$/)
                ? (function (_) {
                    return "http" === _ || "https" === _;
                  })(_)
                  ? _ &&
                    isNaN(parseInt(_, 10)) &&
                    (_.error(`Invalid Sentry Dsn: Invalid port ${_}`), 1)
                  : (_.error(`Invalid Sentry Dsn: Invalid protocol ${_}`), 1)
                : (_.error(
                    `Invalid Sentry Dsn: Invalid projectId ${__webpack_require__}`,
                  ),
                  1))
            );
          })(_)
        )
          return _;
      }
      function _(_) {
        const _ = _.protocol ? `${_.protocol}:` : "",
          _ = _.port ? `:${_.port}` : "";
        return `${_}//${_.host}${_}${_.path ? `/${_.path}` : ""}/api/`;
      }
      const _ = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        _ = _;
      function _(_ = {}) {
        if (!_.document)
          return void (
            _ && _.error("Global document not defined in showReportDialog call")
          );
        const _ = _(),
          _ = _.getClient(),
          _ = _ && __webpack_require__.getDsn();
        if (!_)
          return void (
            _ && _.error("DSN not configured for showReportDialog call")
          );
        if (
          (_ &&
            (_.user = {
              ..._.getUser(),
              ..._.user,
            }),
          !_.eventId)
        ) {
          const _ = _();
          _ && (_.eventId = _);
        }
        const _ = _.document.createElement("script");
        (_.async = !0),
          (_.crossOrigin = "anonymous"),
          (_.src = (function (_, _) {
            const _ = _(_);
            if (!_) return "";
            const _ = `${_(_)}embed/error-page/`;
            let _ = `dsn=${(function (_, _ = !1) {
              const {
                host: _,
                path: _,
                pass: _,
                port: _,
                projectId: _,
                protocol: _,
                publicKey: _,
              } = _;
              return `${_}://${_}${_ && _ ? `:${_}` : ""}@${_}${_ ? `:${_}` : ""}/${_ ? `${_}/` : _}${_}`;
            })(_)}`;
            for (const _ in _)
              if ("dsn" !== _ && "onClose" !== _)
                if ("user" === _) {
                  const _ = _.user;
                  if (!_) continue;
                  _.name && (_ += `&name=${encodeURIComponent(_.name)}`),
                    _.email && (_ += `&email=${encodeURIComponent(_.email)}`);
                } else
                  _ += `&${encodeURIComponent(_)}=${encodeURIComponent(_[_])}`;
            return `${_}?${_}`;
          })(_, _)),
          _.onLoad && (_.onload = _.onLoad);
        const { onClose: _ } = _;
        if (_) {
          const _ = (_) => {
            if ("__sentry_reportdialog_closed__" === _.data)
              try {
                _();
              } finally {
                _.removeEventListener("message", _);
              }
          };
          _.addEventListener("message", _);
        }
        const _ = _.document.head || _.document.body;
        _
          ? _.appendChild(_)
          : _ &&
            _.error(
              "Not injecting report dialog. No injection point found in HTML",
            );
      }
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      const _ = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      function _(_, { componentStack: _ }, _) {
        if (
          (function (_) {
            const _ = _.match(/^([^.]+)/);
            return null !== _ && parseInt(_[0]) >= 17;
          })(_.version) &&
          (function (_) {
            switch (_.call(_)) {
              case "[object Error]":
              case "[object Exception]":
              case "[object DOMException]":
                return !0;
              default:
                return _(_, Error);
            }
          })(_) &&
          _
        ) {
          const _ = new Error(_.message);
          (_.name = `React ErrorBoundary ${_.name}`),
            (_.stack = _),
            (function (_, _) {
              const _ = new WeakSet();
              !(function _(_, _) {
                if (!__webpack_require__.has(_))
                  return _.cause
                    ? (__webpack_require__.add(_), _(_.cause, _))
                    : void (_.cause = _);
              })(_, _);
            })(_, _);
        }
        return (function (_, _) {
          return _().captureException(_, _(_));
        })(_, {
          ..._,
          captureContext: {
            contexts: {
              react: {
                componentStack: _,
              },
            },
          },
        });
      }
      const _ = {
        componentStack: null,
        error: null,
        eventId: null,
      };
      class _ extends _.Component {
        constructor(_) {
          super(_),
            _.prototype.__init.call(this),
            (this.state = _),
            (this._openFallbackReportDialog = !0);
          const _ = _().getClient();
          _ &&
            _.showDialog &&
            ((this._openFallbackReportDialog = !1),
            (this._cleanupHook = _._("afterSendEvent", (_) => {
              !_.type &&
                this._lastEventId &&
                _.event_id === this._lastEventId &&
                _({
                  ..._.dialogOptions,
                  eventId: this._lastEventId,
                });
            })));
        }
        componentDidCatch(_, _) {
          const { componentStack: __webpack_require__ } = _,
            _ = null == __webpack_require__ ? void 0 : __webpack_require__,
            {
              beforeCapture: _,
              onError: _,
              showDialog: _,
              dialogOptions: _,
            } = this.props;
          !(function (..._) {
            const _ = _(_());
            if (2 === _.length) {
              const [__webpack_require__, _] = _;
              return __webpack_require__
                ? _.withSetScope(__webpack_require__, _)
                : _.withScope(_);
            }
            _.withScope(_[0]);
          })((_) => {
            _ && _(_, _, _);
            const _ = _(_, _, {
              mechanism: {
                handled: !!this.props.fallback,
              },
            });
            _ && _(_, _, _),
              _ &&
                ((this._lastEventId = _),
                this._openFallbackReportDialog &&
                  _({
                    ..._,
                    eventId: _,
                  })),
              this.setState({
                error: _,
                componentStack: __webpack_require__,
                eventId: _,
              });
          });
        }
        componentDidMount() {
          const { onMount: _ } = this.props;
          _ && _();
        }
        componentWillUnmount() {
          const {
              error: _,
              componentStack: _,
              eventId: __webpack_require__,
            } = this.state,
            { onUnmount: _ } = this.props;
          _ && _(_, _, __webpack_require__),
            this._cleanupHook &&
              (this._cleanupHook(), (this._cleanupHook = void 0));
        }
        __init() {
          this.resetErrorBoundary = () => {
            const { onReset: _ } = this.props,
              {
                error: _,
                componentStack: __webpack_require__,
                eventId: _,
              } = this.state;
            _ && _(_, __webpack_require__, _), this.setState(_);
          };
        }
        render() {
          const { fallback: _, children: _ } = this.props,
            _ = this.state;
          if (_.error) {
            let _;
            return (
              (_ =
                "function" == typeof _
                  ? _.createElement(_, {
                      error: _.error,
                      componentStack: _.componentStack,
                      resetError: this.resetErrorBoundary,
                      eventId: _.eventId,
                    })
                  : _),
              _.isValidElement(_)
                ? _
                : (_ &&
                    _ &&
                    _.warn("fallback did not produce a valid ReactElement"),
                  null)
            );
          }
          return "function" == typeof _ ? _() : _;
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = class extends _._ {
          constructor(_, _) {
            super(_, _);
          }
          bindMethods() {
            super.bindMethods(),
              (this.fetchNextPage = this.fetchNextPage.bind(this)),
              (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
          }
          setOptions(_, _) {
            super.setOptions(
              {
                ..._,
                behavior: (0, _._)(),
              },
              _,
            );
          }
          getOptimisticResult(_) {
            return (_.behavior = (0, _._)()), super.getOptimisticResult(_);
          }
          fetchNextPage(_) {
            return this.fetch({
              ..._,
              meta: {
                fetchMore: {
                  direction: "forward",
                },
              },
            });
          }
          fetchPreviousPage(_) {
            return this.fetch({
              ..._,
              meta: {
                fetchMore: {
                  direction: "backward",
                },
              },
            });
          }
          createResult(_, _) {
            var _, _;
            const { state: _ } = _,
              _ = super.createResult(_, _),
              {
                isFetching: _,
                isRefetching: _,
                isError: _,
                isRefetchError: _,
              } = _,
              _ =
                null == (_ = null == (_ = _.fetchMeta) ? void 0 : _.fetchMore)
                  ? void 0
                  : _.direction,
              _ = _ && "forward" === _,
              _ = _ && "forward" === _,
              _ = _ && "backward" === _,
              _ = _ && "backward" === _;
            return {
              ..._,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, _._)(_, _.data),
              hasPreviousPage: (0, _._)(_, _.data),
              isFetchNextPageError: _,
              isFetchingNextPage: _,
              isFetchPreviousPageError: _,
              isFetchingPreviousPage: _,
              isRefetchError: _ && !_ && !_,
              isRefetching: _ && !_ && !_,
            };
          }
        },
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        return (0, _._)(_, _, _);
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _,
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        return _.filter((_) => !_.includes(_));
      }
      var _ = class extends _._ {
        constructor(_, _, _) {
          super(),
            (0, _._)(this, _),
            (0, _._)(this, _),
            (0, _._)(this, _),
            (0, _._)(this, _),
            (0, _._)(this, _),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, _),
            (0, _._)(this, _, _),
            (0, _._)(this, _, []),
            (0, _._)(this, _, []),
            (0, _._)(this, _, []),
            this.setQueries(_);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (0, _._)(this, _).forEach((_) => {
              _.subscribe((_) => {
                (0, _._)(this, _, _).call(this, _, _);
              });
            });
        }
        onUnsubscribe() {
          this.listeners.size || this.destroy();
        }
        destroy() {
          (this.listeners = new Set()),
            (0, _._)(this, _).forEach((_) => {
              _.destroy();
            });
        }
        setQueries(_, _, _) {
          (0, _._)(this, _, _),
            (0, _._)(this, _, _),
            _._.batch(() => {
              const _ = (0, _._)(this, _),
                _ = (0, _._)(this, _, _).call(this, (0, _._)(this, _));
              _.forEach((_) =>
                _.observer.setOptions(_.defaultedQueryOptions, _),
              );
              const _ = _.map((_) => _.observer),
                _ = _.map((_) => _.getCurrentResult()),
                _ = _.some((_, _) => _ !== _[_]);
              (_.length !== _.length || _) &&
                ((0, _._)(this, _, _),
                (0, _._)(this, _, _),
                this.hasListeners() &&
                  (_(_, _).forEach((_) => {
                    _.destroy();
                  }),
                  _(_, _).forEach((_) => {
                    _.subscribe((_) => {
                      (0, _._)(this, _, _).call(this, _, _);
                    });
                  }),
                  (0, _._)(this, _, _).call(this)));
            });
        }
        getCurrentResult() {
          return (0, _._)(this, _);
        }
        getQueries() {
          return (0, _._)(this, _).map((_) => _.getCurrentQuery());
        }
        getObservers() {
          return (0, _._)(this, _);
        }
        getOptimisticResult(_, _) {
          const _ = (0, _._)(this, _, _)
            .call(this, _)
            .map((_) =>
              _.observer.getOptimisticResult(_.defaultedQueryOptions),
            );
          return [
            _,
            (_) => (0, _._)(this, _, _).call(this, _ ?? _, _),
            () => (0, _._)(this, _, _).call(this, _, _),
          ];
        }
      };
      (_ = new WeakMap()),
        (_ = new WeakMap()),
        (_ = new WeakMap()),
        (_ = new WeakMap()),
        (_ = new WeakMap()),
        (_ = new WeakMap()),
        (_ = new WeakMap()),
        (_ = new WeakMap()),
        (_ = new WeakSet()),
        (_ = function (_, _) {
          const _ = (0, _._)(this, _, _).call(this, _);
          return __webpack_require__.map((_, _) => {
            const _ = _[_];
            return _.defaultedQueryOptions.notifyOnChangeProps
              ? _
              : _.observer.trackResult(_, (_) => {
                  __webpack_require__.forEach((_) => {
                    _.observer.trackProp(_);
                  });
                });
          });
        }),
        (_ = new WeakSet()),
        (_ = function (_, _) {
          return _
            ? (((0, _._)(this, _) &&
                (0, _._)(this, _) === (0, _._)(this, _) &&
                _ === (0, _._)(this, _)) ||
                ((0, _._)(this, _, _),
                (0, _._)(this, _, (0, _._)(this, _)),
                (0, _._)(this, _, (0, _._)((0, _._)(this, _), _(_)))),
              (0, _._)(this, _))
            : _;
        }),
        (_ = new WeakSet()),
        (_ = function (_) {
          const _ = new Map(
              (0, _._)(this, _).map((_) => [_.options.queryHash, _]),
            ),
            _ = [];
          return (
            _.forEach((_) => {
              const _ = (0, _._)(this, _).defaultQueryOptions(_),
                _ = _.get(_.queryHash);
              _
                ? __webpack_require__.push({
                    defaultedQueryOptions: _,
                    observer: _,
                  })
                : __webpack_require__.push({
                    defaultedQueryOptions: _,
                    observer: new _._((0, _._)(this, _), _),
                  });
            }),
            _
          );
        }),
        (_ = new WeakSet()),
        (_ = function (_, _) {
          const _ = (0, _._)(this, _).indexOf(_);
          -1 !== _ &&
            ((0, _._)(
              this,
              _,
              (function (_, _, _) {
                const _ = _.slice(0);
                return (_[_] = _), _;
              })((0, _._)(this, _), _, _),
            ),
            (0, _._)(this, _, _).call(this));
        }),
        (_ = new WeakSet()),
        (_ = function () {
          var _;
          if (this.hasListeners()) {
            (0, _._)(this, _) !==
              (0, _._)(this, _, _).call(
                this,
                (0, _._)(this, _, _).call(
                  this,
                  (0, _._)(this, _),
                  (0, _._)(this, _),
                ),
                null == (_ = (0, _._)(this, _)) ? void 0 : _.combine,
              ) &&
              _._.batch(() => {
                this.listeners.forEach((_) => {
                  _((0, _._)(this, _));
                });
              });
          }
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _({ queries: _, ..._ }, _) {
        const _ = (0, _._)(_),
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = _.useMemo(
            () =>
              _.map((_) => {
                const _ = _.defaultQueryOptions(_);
                return (
                  (_._optimisticResults = _ ? "isRestoring" : "optimistic"), _
                );
              }),
            [_, _, _],
          );
        _.forEach((_) => {
          (0, _._)(_), (0, _._)(_, _);
        }),
          (0, _._)(_);
        const [_] = _.useState(() => new _(_, _, _)),
          [_, _, _] = _.getOptimisticResult(_, _.combine);
        _.useSyncExternalStore(
          _.useCallback(
            (_) => (_ ? _._ : _.subscribe(_._.batchCalls(_))),
            [_, _],
          ),
          () => _.getCurrentResult(),
          () => _.getCurrentResult(),
        ),
          _.useEffect(() => {
            _.setQueries(_, _, {
              listeners: !1,
            });
          }, [_, _, _]);
        const _ = _.some((_, _) => (0, _._)(_[_], _))
          ? _.flatMap((_, _) => {
              const _ = _[_];
              if (_) {
                const _ = new _._(_, _);
                if ((0, _._)(_, _)) return (0, _._)(_, _, _);
                (0, _._)(_, _) && (0, _._)(_, _, _);
              }
              return [];
            })
          : [];
        if (_.length > 0) throw Promise.all(_);
        const _ = _.find((_, _) => {
          const _ = _[_];
          return (
            _ &&
            (0, _._)({
              result: _,
              errorResetBoundary: _,
              throwOnError: _.throwOnError,
              query: _.getQueryCache().get(_.queryHash),
            })
          );
        });
        if (null == _ ? void 0 : _.error) throw _.error;
        return _(_());
      }
    },
  },
]);
